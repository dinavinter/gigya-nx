// write ts transformer to inline import types in the source code

import path from 'path';
import ts from 'typescript';
import * as fs from "fs";
import * as dom from 'dts-dom';

function domdtas(name: string) {
    const intf = dom.create.interface(name);
    intf.jsDocComment = 'This is my nice interface';
    intf.members.push(dom.create.method(
        'getThing',
        [dom.create.parameter('x', dom.type.number)],
        dom.type.void,
        dom.DeclarationFlags.Optional));

    const ns = dom.create.namespace('SomeNamespace');
    ns.members.push(intf);

    console.log(dom.emit(ns));
}

function isPrivateAccesor(typeelem: ts.Node) {
  return   ts.isAccessor(typeelem) && typeelem.modifiers?.some((m) => m.kind === ts.SyntaxKind.PrivateKeyword)
}
function isNotPrivate(node: ts.Node) {
    return !isPrivateAccesor(node)
}

// type programTransformer = (program: ts.Program) => ts.TransformerFactory<ts.SourceFile>;
function  createDeclarationFileTransformer (program: ts.Program) {
    const checker = program.getTypeChecker();
    const types = new Map<string, ts.TypeLiteralNode>();
     return (context:ts.TransformationContext) => {
        return (file:ts.SourceFile ) => {


            const typeAliasToInterfaceTransformer: (node: ts.Node) => ts.Node = (node: ts.Node) => {
                const visit: ts.Visitor = node => {
 
                    function getDeclarations(type: ts.Type) {
                        return checker.getPropertiesOfType(type).flatMap(property => {
                            /*
                              Type references declarations may themselves have type references, so we need
                              to resolve those literals as well 
                            */
                            return property.declarations?.map(visit).flatMap(a => a || []) || [];
                        });
                    }

                    /*
                                          Convert type references to type literals
                                            interface IUser {
                                              username: string
                                            }
                                            type User = IUser <--- IUser is a type reference
                                            interface Context {
                                              user: User <--- User is a type reference
                                            }
                                          In both cases we want to convert the type reference to
                                          it's primitive literals. We want:
                                            interface IUser {
                                              username: string
                                            }
                                            type User = {
                                              username: string
                                            }
                                            interface Context {
                                              user: {
                                                username: string
                                              }
                                            }
                                        */
                    if (ts.isTypeReferenceNode(node)) {
                        const symbol = checker.getSymbolAtLocation(node.typeName)!;
                        const type = checker.getDeclaredTypeOfSymbol(symbol);
                        const declarations = getDeclarations(type);
                        return context.factory.createTypeLiteralNode(declarations.filter(ts.isTypeElement));
                    }

                    /* 
                      Convert type alias to interface declaration
                        interface IUser {
                          username: string
                        }
                        type User = IUser
                    
                      We want to remove all type aliases
                        interface IUser {
                          username: string
                        }
                        interface User {
                          username: string  <-- Also need to resolve IUser
                        }
                    
                    */

                    if (ts.isTypeAliasDeclaration(node)) {
                        const symbol = checker.getSymbolAtLocation(node.name)!;
                        const type = checker.getDeclaredTypeOfSymbol(symbol);
                        const declarations = getDeclarations(type);

                        // Create interface with fully resolved types
                        return context.factory.createInterfaceDeclaration(
                             [context.factory.createToken(ts.SyntaxKind.DeclareKeyword)],
                            node.name.getText(),
                            [], 
                            [],
                            declarations.filter(ts.isTypeElement)
                        );
                    }
                    // Remove all export declarations
                    // if (ts.isImportDeclaration(node)) {
                    //     return undefined;
                    // }

                    return ts.visitEachChild(node, visit, context);
                };

                return ts.visitNode(node, visit);
            };
            const visitSpecificDeclaration = (name:string) => {
                return (node: ts.Node) => {
                    //search for any declration and related types in source file
                    const visitType = (name: string, node: ts.Type) => {

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

                        // declarations
                        //     .filter(ts.isPropertySignature)
                        //     .map((d) => d.type)
                        //     .filter((d) => d && ts.isTypeReferenceNode(d))
                        //     .map((d) => d as ts.TypeReferenceNode)
                        //     .filter((d) => !types.has(d.typeName.getText()))
                        //     .forEach(visitTypeReferenceNode);

                        const visitDeclaration = (node: ts.Node) => {
                            
                            if (ts.isTypeReferenceNode(node) && !types.has(node.typeName.getText())) {
                                visitTypeReferenceNode(node);
                            }
                            return ts.visitEachChild(node, visitDeclaration, context);

                        }
                        declarations
                            // .filter(ts.isPropertySignature)
                            // .map((d) => d.type)
                            // .filter((d) => d && !ts.isTypeReferenceNode(d))
                            .forEach(d=> ts.visitEachChild(d, visitDeclaration , context));

                      
                    }

                    const visitTypeReferenceNode = (node: ts.TypeReferenceNode) => {
                        visitType(node.typeName.getText()!,checker.getTypeAtLocation(node));
                    }
                    
                     
                     const visit_node = (node: ts.Node) => {
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
                                visitTypeReferenceNode(node);
                                return node;
                            }
                            if(ts.isClassDeclaration(node) ){
                                const membersLog = node.members.map((m)=> {
                                    return {
                                        name: m.name?.getText(),
                                        kind: ts.SyntaxKind[m.kind],
                                        alias: checker.getTypeAtLocation(m)?.aliasSymbol?.name,
                                        type: ts.isPropertySignature(m) && m.type && ts.isTypeReferenceNode(m.type) && m.type.typeName.getText(),
                                        typeKind: ts.isPropertySignature(m) && m.type && ts.SyntaxKind[m.type.kind],
                                    }
                                });
                                console.log("visit-class-dec ",name, node.name?.getText(), node.getChildren()?.map((d)=>ts.SyntaxKind[d.kind]), membersLog, membersLog.length);
  
                                
                                 
                                const typeElements = node.members.flatMap(member => {
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
                                }) as ts.TypeElement[]
                                   ;
                                

                                // const typeElements = node.members.map(member => {
                                //     if (ts.isPropertyDeclaration(member)) {
                                //         return ts.factory.createPropertySignature(
                                //             member.modifiers,
                                //             member.name,
                                //             member.questionToken,
                                //             member.type
                                //         );
                                //     }
                                //     // Add other cases if needed (e.g., for methods)
                                //     return undefined;
                                // }).filter((member): member is ts.TypeElement => member !== undefined);


                                // const classDeclaration = context.factory.createClassDeclaration(
                                //     node.modifiers,
                                //     node.name,
                                //     node.typeParameters,
                                //     node.heritageClauses,
                                //     node.members
                                // );
                                
                                 const typeLiteralNode = context.factory.createTypeLiteralNode(typeElements);
                                types.set(name, typeLiteralNode);
                                
                                


                                // const symbol = checker.getSymbolAtLocation(node.name!)!;
                                // const type = checker.getDeclaredTypeOfSymbol(symbol);
                                // visitType(name, type);
                            }
                            return ts.visitEachChild(node, visit_node, context);
  
                     }
                      
                    
                    if (ts.isInterfaceDeclaration(node) && node.name.getText() === name) {
                           console.log("visit-interface-dec ", name);
                          return visit_node(node);
                     }
                    if(ts.isTypeAliasDeclaration(node) && node.name.getText() === name) {
                        console.log("visit-type-alias-dec ", name);
                        return visit_node(node.name);
                    }
                    if (ts.isEnumDeclaration(node) && node.name.getText() === name) {
                        console.log("visit-enum-dec ", name);
                        return visit_node(node.name);
                    }
                    if (ts.isModuleDeclaration(node) && node.name.getText() === name) {
                        console.log("visit-module-dec ", node.name.getText());
                        return visit_node(node.name);
                    }
                    if (ts.isTypeAliasDeclaration(node) && node.name.getText() === name) {
                        console.log("visit-type-alias-dec ", node.name.getText());
                        return visit_node(node.name);
                    }
                    if (ts.isNamespaceExportDeclaration(node) && node.name.getText() === name) {
                        console.log("visit-namespace-export-dec ", node.name.getText());
                        return visit_node(node.name);
                    }
                    if(ts.isClassDeclaration(node) && node.name?.getText() === name) {
                        console.log("visit-class-dec ", node.name.getText());
                        return visit_node(node);
                    }

                    return ts.visitEachChild(node, visitSpecificDeclaration(name), context);


                    // if (ts.isExportDeclaration(node) && node.name?.getText() === name) {
                    //     console.log("visit-export-dec ", node.name.getText());
                    //     return ts.visitEachChild(node, visit, context);
                    // }
                    // if (ts.isExportAssignment(node) && node.name?.getText() === name) {
                    //     console.log("visit-export-assignment ", node.name.getText());
                    //     return ts.visitEachChild(node, visit, context);
                    // }
                    // if (ts.isExportSpecifier(node) && node.name.getText() === name) {
                    //     console.log("visit-export-specifier ", node.name.getText());
                    //     return ts.visitEachChild(node, visit, context);
                    // }
                    // if (ts.isImportSpecifier(node) && node.name.getText() === name) {
                    //     console.log("visit-import-specifier ", node.name.getText());
                    //     return  undefined;
                    // }
                    // if (ts.isImportClause(node) && node.name?.getText() === name) {
                    //     console.log("visit-import-clause ", node.name.getText());
                    //     return  undefined;
                    // }
                    // if (ts.isImportTypeNode(node) && node.getText() === name) {
                    //     console.log("visit-import-type-node ", node.getText());
                    //     return  undefined;
                    // }
                    // if (ts.isImportEqualsDeclaration(node) && node.name.getText() === name) {
                    //     console.log("visit-import-equals-declaration ", node.name.getText());
                    //     return  undefined;
                    // }
                    // if (ts.isImportDeclaration(node) && node.importClause?.name?.getText() === name) {
                    //      return  undefined;
                    // }
                    
                   
                    
                    /*
                    if (ts.isClassDeclaration(node) && node.name?.getText() === name) {
                        console.log("isClassDeclaration ", node);
                        const symbol = checker.getSymbolAtLocation(node.name!)!;
                        const type = checker.getDeclaredTypeOfSymbol(symbol);
                        const declarations = checker.getPropertiesOfType(type).flatMap((property: any) => {
                         
                            return property.declarations.map(visit);
                        });
                        const typeLiteralNode = context.factory.createTypeLiteralNode(declarations);
                        // console.log("typeLiteralNode ", node.typeName.getText());
                        // context.factory.updateSourceFile(file, context.factory.createNodeArray([...file.statements,...declarations, typeLiteralNode]));
                        //no changes in source file
                        return [typeLiteralNode];
                    }
                    if (ts.isFunctionDeclaration(node) && node.name?.getText() === name) {
                        console.log("isFunctionDeclaration ", node);
                        const symbol = checker.getSymbolAtLocation(node.name!)!;
                        const type = checker.getDeclaredTypeOfSymbol(symbol);
                        const declarations = checker.getPropertiesOfType(type).flatMap((property: any) => {
                           
                            return property.declarations.map(visit);
                        });
                        const typeLiteralNode = context.factory.createTypeLiteralNode(declarations);
                        // console.log("typeLiteralNode ", node.typeName.getText());
                        // context.factory.updateSourceFile(file, context.factory.createNodeArray([...file.statements,...declarations, typeLiteralNode]));
                        //no changes in source file
                        return [typeLiteralNode];
                    }
                    if (ts.isVariableStatement(node)) {
                        node.declarationList?.declarations.forEach((d) => {
                            if (ts.isVariableDeclaration(d) && d.name.getText() === name) {
                                console.log("isVariableDeclaration ", d.name.getText());
                                const symbol = checker.getSymbolAtLocation(d.name!)!;
                                const type = checker.getDeclaredTypeOfSymbol(symbol);
                                const declarations = checker.getPropertiesOfType(type).flatMap((property: any) => {
                                    
                                    return property.declarations.map(visit);
                                });
                                const typeLiteralNode = context.factory.createTypeLiteralNode(declarations);
                                // console.log("typeLiteralNode ", node.typeName.getText());
                                // context.factory.updateSourceFile(file, context.factory.createNodeArray([...file.statements,...declarations, typeLiteralNode]));
                                //no changes in source file
                                return [typeLiteralNode];
                            }
                        })
                    }
                    if (ts.isImportDeclaration(node) && ts.isStringLiteral(node.moduleSpecifier) && node.importClause?.name?.getText() === name) {
                        const moduleSpecifier = node.moduleSpecifier;
                        const text = moduleSpecifier.text;
                        const moduleSourcePAth = moduleSpecifier.getSourceFile().fileName;

                        const resolved = ts.resolveModuleName(text, moduleSourcePAth, program.getCompilerOptions(), ts.sys);
                        console.log("isTypeOnlyImportDeclaration ", text, moduleSourcePAth, resolved);
                        if (resolved.resolvedModule)
                            return ts.visitEachChild(node, visitSpecificDeclaration(name, resolved.resolvedModule), context);
                        else
                            console.log("isTypeOnlyImportDeclaration: not resolved ", text, moduleSourcePAth, resolved);


                    } */

                    // const symbol = checker.getSymbolAtLocation(node)!;


                } 
             }
 
        
               
            const visit: ts.Visitor = (node) => { 
                
              if (ts.isImportDeclaration(node) && node.importClause?.isTypeOnly    ) {
                  const children = node.getChildren().map((c) => ts.SyntaxKind[c.kind]);
                  const {source} = moduleSource(node)!;
                  const  name = source.fileName;

                  console.log("isImportDeclaration parent:", node.parent?.kind, `\t# ts.SyntaxKind.${ts.SyntaxKind[node.parent?.kind]}`, children);
                  const visitImportClause = (node: ts.Node) => {
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
                  
                  ts.visitEachChild(node, visitImportClause, context);
 
                   return  undefined
              }
               
               
                return ts.visitEachChild(node, visit, context);
            };
            const source=  ts.visitNode(file, visit)! as ts.SourceFile;
            const typesStatements = [...types.entries()]
                .filter(([name])=>name!== 'Promise')
                .map(([name, typeNode])=>context.factory.createTypeAliasDeclaration([], name, [], typeNode));
            return context.factory.updateSourceFile(source,  [...source.statements,...typesStatements]);
            function moduleSource(node: ts.ImportDeclaration) {
                const moduleSpecifier = node.moduleSpecifier as ts.StringLiteral;
                    const text = moduleSpecifier.text;
                    const moduleSourcePAth = moduleSpecifier.getSourceFile().fileName;
                    const resolved = ts.resolveModuleName(text, moduleSourcePAth, program.getCompilerOptions(), ts.sys);
                    return {text, moduleSourcePAth, resolved:resolved.resolvedModule, source:program.getSourceFile(resolved.resolvedModule?.resolvedFileName!)!};
                
             }
            // if()
            // context.factory.updateSourceFile(
            //     file,
            //     context.factory.createNodeArray([node, ...file.statements]),
            // );
            // console.log(node);
            //  return node;
        };
    };
}



 const __dirname = process.cwd();
console.log('Generating typescript models... dir:' + __dirname   )

try {
    // Usage

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
     // const sourceFiles = [...program.getSourceFiles()];
    const result = ts.transform(source, [createDeclarationFileTransformer(program)]);
    // const transformedSourceFile = result.transformed[0];
    const printer = ts.createPrinter();
    // const code = printer.printFile(transformedSourceFile);
    
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

