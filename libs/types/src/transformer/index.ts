import path from 'path';
import ts from 'typescript';
import * as fs from "fs";


function isPrivateAccessor(node: ts.Node) {
  return   ts.isAccessor(node) && node.modifiers?.some((m) => m.kind === ts.SyntaxKind.PrivateKeyword)
}
function isNotPrivate(node: ts.Node) {
    return !isPrivateAccessor(node)
}



 function createDeclarationFileTransformer (program: ts.Program) {
    const checker = program.getTypeChecker();
    const types = new Map<string, ts.Statement | ts.Statement[]>();
 

    return (context:ts.TransformationContext) => {
        return (file:ts.SourceFile ) => {
            
            const visitImportedType = (name: string) => {
                return (node: ts.Node) => {
                    // Check if the node is a specific declaration and its name matches the `name` parameter
                    if ((ts.isInterfaceDeclaration(node) || ts.isTypeAliasDeclaration(node) || ts.isEnumDeclaration(node) || ts.isModuleDeclaration(node) || ts.isNamespaceExportDeclaration(node) || ts.isClassDeclaration(node)) && node.name?.getText() === name) {
                             // If it is, call `visit_node` on the node
                            return ts.visitNode(node, visitTypes) 
                    }
                   
                    // If it's not, visit each child of the node
                    return ts.visitEachChild(node, visitImportedType(name), context);
                } 

            }
            
           function visitTypes (node: ts.Node):  ts.Node|undefined { 
               const setType = (name: string, visit: () => ts.Statement ) => {
                   if (!types.has(name)) {
                       const statement = visit();
                       types.set(name, statement);
                          return ts.visitEachChild(statement, visitTypes, context);

                   }
                   return ts.visitEachChild(node, visitTypes, context);
               }
                
               if(ts.isInterfaceDeclaration(node)){
                   return setType(node.name?.getText()!, ()=>visitInterfaceDeclaration(node as ts.InterfaceDeclaration));
               }
                if(ts.isClassDeclaration(node) ){
                     return setType(node.name?.getText()!, ()=>visitClass(node));
                }
                
                if(ts.isTypeReferenceNode(node)   && node.getSourceFile()   ){
                    return setType(node.typeName.getText()!, ()=>visitTypeReferenceNode(node));
                }
 
                 if(ts.isTypeAliasDeclaration(node) ){
                    return setType(node.name.getText()!, ()=>visitTypeAliasDeclaration(node));
                }
                if(ts.isHeritageClause(node) ){
                    return ts.visitNode(node, visitHeritageClause);
                }
 
               return ts.visitEachChild(node, visitTypes, context); 
           }

            function visitHeritageClause(node: ts.HeritageClause): ts.Node| undefined | ts.NodeArray<any> | ts.Node[] {
                if ( !node.types) {
                    return undefined;
                } 
                console.log("visit-heritage-clause ", node.token, node.getChildren()?.map((d) => ts.SyntaxKind[d.kind]) , node.types.map((d) =>  d.expression.getText()));
                
                const heritages = node.types.map(expression => checker.getTypeAtLocation(expression).getSymbol());
                return heritages
                    .map(m=> m?.valueDeclaration && ts.visitNode(m.valueDeclaration, visitTypes))
                    .filter(a=> typeof a !== "undefined") 
                    .map(a=> a as ts.Node);
                
            
             }

            function intersectHeritageClause(node: ts.HeritageClause): ts.TypeNode  {
                   
                 const heritages = node.types
                     // .filter((t) => t.expression.kind === ts.SyntaxKind.ExtendsKeyword)
                     .map(expression => checker.getTypeAtLocation(expression).getSymbol());

                const typeNodes = heritages.reduce((dependencies, current) => {
                    if (current) {
                        const typeRef = context.factory.createTypeReferenceNode(current.name);
                        dependencies.push(typeRef);
                    }
                    return dependencies;
                }, [] as ts.TypeNode[]);

                if (typeNodes.length > 1) {
                    return context.factory.createIntersectionTypeNode(typeNodes);
                } else if (typeNodes.length === 1) {
                    return typeNodes[0];
                }
                 return context.factory.createTypeLiteralNode([])

             }

            function visitInterfaceDeclaration(node: ts.InterfaceDeclaration):ts.TypeAliasDeclaration  {
                const type =  checker.getTypeAtLocation(node.name);
                const symbol = type.getSymbol();
                console.log("visit-interface-dec ", node.name.getText(), node.getChildren()?.map((d) => ts.SyntaxKind[d.kind]));
                console.log("visit-interface-symbol ", node.name.getText(), symbol?.name,  symbol?.valueDeclaration?.kind && ts.SyntaxKind[symbol?.valueDeclaration?.kind]);
                console.log("visit-interface-type ", node.name.getText(), type.symbol?.name, type.aliasSymbol?.name, type.aliasSymbol?.valueDeclaration?.kind && ts.SyntaxKind[type.aliasSymbol?.valueDeclaration?.kind]);
                  
                const typeLiteral= context.factory.createTypeLiteralNode(node.members);
                 return context.factory.createTypeAliasDeclaration([], node.name.getText(), [], typeLiteral);
                 
             }

            function visitTypeAliasDeclaration(node: ts.TypeAliasDeclaration) {
                console.log("visit-type-alias-dec ", node.name.getText(), node.getChildren()?.map((d) => ts.SyntaxKind[d.kind]));
                return node as ts.TypeAliasDeclaration;
            }
            
            function classToTypeElements (node: ts.ClassDeclaration):ts.TypeElement[]  {
                return  node.members.flatMap(member => {
                    if (ts.isPropertyDeclaration(member)) {
                        return ts.factory.createPropertySignature(
                            [],
                            member.name,
                            member.questionToken,
                            member.type
                        );
                    }
                    if (ts.isMethodDeclaration(member)) {
                        return ts.factory.createMethodSignature(
                            [],
                            member.name,
                            member.questionToken,
                            member.typeParameters,
                            member.parameters,
                            member.type
                        );
                    }
                    if (ts.isGetAccessorDeclaration(member)) {
                        return ts.factory.createPropertySignature(
                            [],
                            member.name,
                            member.questionToken,
                            member.type
                        );
                    }
                    if (ts.isSetAccessorDeclaration(member)) {
                        return ts.factory.createSetAccessorDeclaration(
                            member.modifiers,
                            member.name,
                            member.parameters,
                            member.body
                        );
                    }
                    if (ts.isConstructorDeclaration(member)) {
                        return ts.factory.createConstructorDeclaration(
                            member.modifiers,
                            member.parameters,
                            member.body
                        );
                    }
                     return []
                }) as ts.TypeElement[]}
            function visitClass(node: ts.ClassDeclaration):ts.TypeAliasDeclaration  { 
                const heritageTypes= node.heritageClauses
                    ?.filter((h)=>h.token === ts.SyntaxKind.ExtendsKeyword)
                     .map(
                    intersectHeritageClause
                      ) ||[];
                
                
                const typeLiteral=context.factory.createTypeLiteralNode(classToTypeElements(node));
                
                const intersectionType=  context.factory.createIntersectionTypeNode(
                    heritageTypes 
                    .concat(typeLiteral)
                )
                return context.factory.createTypeAliasDeclaration([], node.name!.getText(), [], intersectionType);
 
            }
            function logType (  node: ts.Type) {
                const symbol = node.symbol || node.aliasSymbol;

                console.log("visit-type", node.symbol?.name, node.aliasSymbol?.name, node.aliasSymbol?.valueDeclaration?.kind && ts.SyntaxKind[node.aliasSymbol?.valueDeclaration?.kind],"\ndeclarations\t" ,symbol.getDeclarations()?.length, symbol.getDeclarations()?.map((d) => {
                    return {
                        kind: ts.SyntaxKind[d.kind],
                        alias: checker.getTypeAtLocation(d)?.aliasSymbol?.name,
                        name: ts.isPropertySignature(d) && d.name.getText(),
                        type: ts.isPropertySignature(d) && d.type && ts.isTypeReferenceNode(d.type) && d.type.typeName.getText(),
                        typeKind: ts.isPropertySignature(d) && d.type && ts.SyntaxKind[d.type.kind],
                    }
                }), "\nproperties\t", checker.getPropertiesOfType(node)?.flatMap((property: any) => {
                    return property.declarations;
                }).map((d) => {
                    return {
                        name: d.name?.getText(),
                        kind: ts.SyntaxKind[d.kind],
                        accessor: d.initializer && ts.SyntaxKind[d.initializer.kind],
                        modifiers: d.modifiers?.map((m:ts.Modifier) => ts.SyntaxKind[m.kind]),
                        alias: checker.getTypeAtLocation(d)?.aliasSymbol?.name,
                        symbol: checker.getTypeAtLocation(d)?.symbol?.name,
                        type: ts.isPropertySignature(d) && d.type && ts.isTypeReferenceNode(d.type) && d.type?.typeName.getText(),
                        typeKind: ts.isPropertySignature(d) && d.type && ts.SyntaxKind[d.type.kind],
                    }
                }));
            }
            function visitType (name: string, node: ts.Type)  {

                logType(node);
                const declarations = checker
                    .getPropertiesOfType(node)
                    .flatMap((property) => property.declarations || [])
                    .filter(ts.isTypeElement)
                    .filter(isNotPrivate)
                  
                const typeLiteralNode = context.factory.createTypeLiteralNode(declarations);
                return context.factory.createTypeAliasDeclaration([], name, [], typeLiteralNode);

            }

            function visitTypeReferenceNode (node: ts.TypeReferenceNode)  {
                return visitType(node.typeName.getText()!,checker.getTypeAtLocation(node));
            }



 
        
               
            const visit: ts.Visitor = (node) => {

             
                if (ts.isImportDeclaration(node) && node.importClause?.isTypeOnly) {
                    const {source} = moduleSource(node)!;
                    const name = source.fileName;
                       ts.visitNode(node, visitImportClause);
                     
                       return undefined;
              
                function visitImportClause (node: ts.Node)   {
                      const children = node.getChildren().map((c) => ts.SyntaxKind[c.kind]);
                      console.log("visitImportClause ",name, node.kind, `\t# ts.SyntaxKind.${ts.SyntaxKind[node.kind]}`, children);
                    
                      if (ts.isImportSpecifier(node) && typeof node.propertyName !== 'undefined') {
                           //todo should ref with property name
                           return ts.visitNode(source, visitImportedType(node.name.getText()))
                      }
                      if (ts.isImportSpecifier(node) ) {
                           return ts.visitNode(source, visitImportedType(node.name.getText()))
                      } 
                      return ts.visitEachChild(node, visitImportClause, context);
                  }
                   
              }
                
                return ts.visitEachChild(node, visit, context);
            };
            const source=  ts.visitNode(file, visit)! as ts.SourceFile;
            const typesStatements = [...types.entries()]
                .filter(([name])=>name!== 'Promise')
                .flatMap(([_, typeNode])=> typeNode);
  
            typesStatements[0] && ts.addSyntheticLeadingComment(typesStatements[0], ts.SyntaxKind.MultiLineCommentTrivia, "\nimported types\n", true);
 
            return context.factory.updateSourceFile(source,  [...source.statements, ...typesStatements]);
            function moduleSource(node: ts.ImportDeclaration) {
                const moduleSpecifier = node.moduleSpecifier as ts.StringLiteral;
                    const text = moduleSpecifier.text;
                    const moduleSourcePAth = moduleSpecifier.getSourceFile().fileName;
                    const resolved = ts.resolveModuleName(text, moduleSourcePAth, program.getCompilerOptions(), ts.sys);
                    return {text, moduleSourcePAth, resolved:resolved.resolvedModule, source:program.getSourceFile(resolved.resolvedModule?.resolvedFileName!)!};
                
             }
           
        };
    };
} 



 const __dirname = process.cwd();
console.log('Generating typescript models... dir:' + __dirname   )

try { 
    const filePath = path.resolve(__dirname, './src/type-maker.ts');
    const runtime_dir = path.resolve(__dirname, './src/runtime');
    const defs_dir = path.resolve(__dirname, './src/defs');
    const source= ts.createSourceFile(filePath, fs.readFileSync(filePath, 'utf-8'), ts.ScriptTarget.Latest, true);
    const program = ts.createProgram([filePath], {
        includes: [runtime_dir, defs_dir, filePath],
        mainFile: filePath,
        exclude: ['node_modules'],
        skipLibCheck: true,
        noLib: true,
        paths:{
            "@/*": ["src/*"],
            "@defs/*": ["src/defs/*"],
            "src/*": ["src/defs/*"],
        }
    });
     const result = ts.transform(source, [createDeclarationFileTransformer(program)]);
     const printer = ts.createPrinter();
     
    const outputDir = path.resolve(__dirname, '../generated');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    console.log('Writing generated typescript to ' + outputDir);
    console.log('files: ', (<ts.SourceFile[]>result.transformed).map((f)=>path.resolve(outputDir, path.parse(f.fileName).name + '.d.ts')));

   // Write pretty printed transformed typescript to output directory
    result.transformed.forEach((f)=> {
        const code = printer.printFile(f);
        const outputFilePath = path.resolve(outputDir, path.parse(f.fileName).name + '.d.ts');
        fs.writeFileSync(outputFilePath, code);
    });
  


}
catch (e) {
    console.error(e);
}

