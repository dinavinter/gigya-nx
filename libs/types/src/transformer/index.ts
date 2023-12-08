
import path from 'path';
import ts from 'typescript';
import * as fs from "fs";
 
// this transformer is for inline all imported types in the source file
 

function isPrivateAccesor(typeelem: ts.Node) {
  return   ts.isAccessor(typeelem) && typeelem.modifiers?.some((m) => m.kind === ts.SyntaxKind.PrivateKeyword)
}
function isNotPrivate(node: ts.Node) {
    return !isPrivateAccesor(node)
}

function log(node: ts.ClassDeclaration, checker: ts.TypeChecker, heritageTypes: ts.Symbol[], name: string) {
    const membersLog = node.members.map((m) => {
        return {
            name: m.name?.getText(),
            kind: ts.SyntaxKind[m.kind],
            alias: checker.getTypeAtLocation(m)?.aliasSymbol?.name,
            type: ts.isPropertySignature(m) && m.type && ts.isTypeReferenceNode(m.type) && m.type.typeName.getText(),
            typeKind: ts.isPropertySignature(m) && m.type && ts.SyntaxKind[m.type.kind],
        }
    });
    const heritageTypesLog = heritageTypes.map(s => {
        return {
            name: s.name,
            declaration_kind: s.valueDeclaration && ts.SyntaxKind[s.valueDeclaration?.kind] || "none",
            declaration_fToken: s.valueDeclaration && s.valueDeclaration?.getFirstToken(),
        }
    });

    const childrenLog = node.getChildren()?.map((d) => ts.SyntaxKind[d.kind]);
    console.log("visit-class-dec ", name, node.name?.getText(), "\n\tchildren: \t", childrenLog, "\n\tmembers:\t", membersLog.length, membersLog, "\n\theritage:\t", heritageTypesLog);
}

// type programTransformer = (program: ts.Program) => ts.TransformerFactory<ts.SourceFile>;
function  createDeclarationFileTransformer (program: ts.Program) {
    const checker = program.getTypeChecker();
    const types = new Map<string, ts.TypeNode>();
     return (context:ts.TransformationContext) => {
        return (file:ts.SourceFile ) => {
            
            const visitSpecificDeclaration = (name: string) => {
                return (node: ts.Node) => {
                    // Check if the node is a specific declaration and its name matches the `name` parameter
                    if ((ts.isInterfaceDeclaration(node) || ts.isTypeAliasDeclaration(node) || ts.isEnumDeclaration(node) || ts.isModuleDeclaration(node) || ts.isNamespaceExportDeclaration(node) || ts.isClassDeclaration(node)) && node.name?.getText() === name) {
                        // If it is, call `visit_node` on the node
                        return visit_node(node);
                    }
            
                    // If it's not, visit each child of the node
                    return ts.visitEachChild(node, visitSpecificDeclaration(name), context);
                }
                function visit_node (node: ts.Node)  {
                    console.log("visit_node ",name, ts.SyntaxKind[node.kind]);
                    if (ts.isInterfaceDeclaration(node) ){
                        console.log("visit-interface-dec ", node.name.getText(), node.getChildren()?.map((d)=>ts.SyntaxKind[d.kind]));

                        node.members.forEach((m)=>{
                            if(ts.isPropertySignature(m) && m.type  && ts.isTypeReferenceNode(m.type)){
                                console.log("visit-property-signature ", m.name.getText(), m.type.getText());
                                visitTypeReferenceNode(m.type);
                            }
                        });

                        const typeLiteralNode = context.factory.createTypeLiteralNode(node.members);
                        types.set(name, typeLiteralNode);


                        return typeLiteralNode;
                    }

                    if (ts.isTypeAliasDeclaration(node) ){
                        console.log("visit-type-alias-dec ", node.name.getText(), node.getChildren()?.map((d)=>ts.SyntaxKind[d.kind]));
                        if(node.type && ts.isTypeLiteralNode(node.type)){
                            types.set(name, node.type);
                            return node.type;
                        }
                    }

                    if(ts.isTypeReferenceNode(node) && !types.has(node.typeName.getText())) {
                        console.log("visit-type-reference-node ", node.typeName.getText());
                        return visitTypeReferenceNode(node);
                    }
                    if(ts.isClassDeclaration(node) ){
                        types.set(name, visitClass(node));
                        return types.get(name);
                        function visitClass(node: ts.ClassDeclaration){


                            const classToTypeElements =(node: ts.ClassDeclaration):ts.TypeElement[] => {
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


                                    // Add other cases if needed (e.g., for methods)
                                    return []
                                }) as ts.TypeElement[]}



                            const heritageTypes= node.heritageClauses?.flatMap(
                                heritageToSymbol
                            ) ||[];
                            const members = classToTypeElements(node);
                            log(node, checker, heritageTypes, name);
                            heritageTypes
                                .filter(s=> s.valueDeclaration)
                                .map(s=>s.valueDeclaration)
                                .concat(members.filter(m=>m.name )                                        .filter(m=>m.name && !types.has(m.name.getText()))
                                    .filter(m=>m.name && !types.has(m.name.getText()))
                                ).forEach(m=>visit_node(m!))

                            const typeLiteral=context.factory.createTypeLiteralNode(classToTypeElements(node));

                            return  context.factory.createIntersectionTypeNode(heritageTypes
                                .map(s=>context.factory.createTypeReferenceNode(s.name) as ts.TypeNode)
                                .concat(typeLiteral)
                            )





                        }


                    }

                    return ts.visitEachChild(node, visit_node, context);

                }

            }
            function visitType (name: string, node: ts.Type)   {

                const declarations = checker.getPropertiesOfType(node).flatMap((property: any) => {
                    return property.declarations;
                }).filter(ts.isTypeElement).filter(isNotPrivate)

                const typeLiteralNode = context.factory.createTypeLiteralNode(declarations);
                console.log("visitType ", name, node.symbol?.name, node.getStringIndexType(), node.pattern, declarations.length, declarations.map((d) => {
                    return {
                        name: d.name?.getText(),
                        kind: ts.SyntaxKind[d.kind],
                        alias: checker.getTypeAtLocation(d)?.aliasSymbol?.name,
                        type: ts.isPropertySignature(d) && d.type && ts.isTypeReferenceNode(d.type) && d.type.typeName.getText(),
                        typeKind: ts.isPropertySignature(d) && d.type && ts.SyntaxKind[d.type.kind],
                    }
                }));

                types.set(name, typeLiteralNode);

                const visitDeclaration = (node: ts.Node) => {

                    if (ts.isTypeReferenceNode(node) && !types.has(node.typeName.getText())) {
                        visitTypeReferenceNode(node);
                    }
                    return ts.visitEachChild(node, visitDeclaration, context);

                }
                declarations
                    .forEach(d=> ts.visitEachChild(d, visitDeclaration , context));


                return typeLiteralNode;

            }

            function visitTypeReferenceNode (node: ts.TypeReferenceNode)  {
                return visitType(node.typeName.getText()!,checker.getTypeAtLocation(node));
            }





            /**
             * @type {ts.HeritageClause} heritage
             * */
            function heritageToSymbol(heritage: ts.HeritageClause):ts.Symbol[] {
                const prettyTypes = heritage.types?.map(checker.getTypeAtLocation)
                    .map(t=>  {
                        return {
                            name: t.symbol?.name,
                            alias: t.aliasSymbol?.name,
                            flags: t.flags,
                            aliasFlags: t.aliasSymbol?.flags,
                        }
                    });
                console.log("heritageToSymbol ", heritage.token, prettyTypes,prettyTypes?.length);
                if (heritage.token !== ts.SyntaxKind.ExtendsKeyword || !heritage.types) {
                    return [];
                }

                const heritages = heritage.types.map(function(expression) {
                    return checker.getTypeAtLocation(expression).getSymbol();
                })as ts.Symbol[];


                return heritages.reduce(function(dependencies, current) {
                    return dependencies.concat(current);
                }, [] as ts.Symbol[]);
            }

 
        
               
            const visit: ts.Visitor = (node) => {

                if (ts.isImportDeclaration(node) && node.importClause?.isTypeOnly) {
                    const {source} = moduleSource(node)!;
                    const name = source.fileName;
                    ts.visitEachChild(node, visitImportClause, context);
                    return undefined;
              
                function visitImportClause (node: ts.Node)   {
                      const children = node.getChildren().map((c) => ts.SyntaxKind[c.kind]);
                      console.log("visitImportClause ",name, node.kind, `\t# ts.SyntaxKind.${ts.SyntaxKind[node.kind]}`, children);
                    
                      if (ts.isImportSpecifier(node) && typeof node.propertyName !== 'undefined') {
                          // const decleration =  context.factory.createVariableDeclaration(node.propertyName, undefined, type);
                          console.log("import specifier with prop name ", name, node.propertyName.getText(), children);
                          return undefined;

                      }
                      if (ts.isImportSpecifier(node) ) {
                          console.log("import specifier ", node.name.getText());

                          const type =  ts.visitNode(source, visitSpecificDeclaration(node.name.getText()))
                          console.log("after get type ", name, type?.kind &&  ts.SyntaxKind[type.kind]);
                          return undefined;
                      } 
                      return ts.visitEachChild(node, visitImportClause, context);
                  }
                  
  
              }
               
               
                return ts.visitEachChild(node, visit, context);
            };
            const source=  ts.visitNode(file, visit)! as ts.SourceFile;
            const typesStatements = [...types.entries()]
                .filter(([name])=>name!== 'Promise')
                .map(([name, typeNode])=>context.factory.createTypeAliasDeclaration([], name, [], typeNode));
 
            typesStatements[0] && ts.addSyntheticLeadingComment(typesStatements[0], ts.SyntaxKind.MultiLineCommentTrivia, "\nimported types\n", true);
 
            return context.factory.updateSourceFile(source,  [...source.statements,...typesStatements]);
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
