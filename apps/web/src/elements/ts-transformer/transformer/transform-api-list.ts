import ts from "typescript";
 import {BaseApi} from "@gigya/types/src/defs/core/Gigya.Js/app/API/BaseApi";
 import _ from 'lodash';
 
 
export  function programTransformer(program: ts.Program) {
    const gigya= (window as unknown as any).gigya as any;
    const checker = program.getTypeChecker();  
    return (context: ts.TransformationContext) => { 
        return (sourceFile: any) => { 
               const apiList=  gigya._.arApiList as BaseApi[];
              const interfaceMap:Record<string, ts.InterfaceDeclaration>={};
              apiList.forEach((api:BaseApi)=>{
                    const apiName= api.methodName; 
                    const apiIdentifiers= apiName.split('.');
                    const apiNode= context.factory.createIdentifier(apiIdentifiers.pop()!)
                    const apiType = context.factory.createFunctionTypeNode(
                        [],
                        [],
                        context.factory.createTypeReferenceNode('GigyaAPI', [context.factory.createLiteralTypeNode(context.factory.createStringLiteral(apiName, true))]),
                    );
                   const propertyNode= context.factory.createPropertySignature([], apiNode, undefined, apiType);
                  const interfaceName= apiIdentifiers.pop()!;
                  const existingInterface= interfaceMap[interfaceName];
                  if(existingInterface) {
                        context.factory.updateInterfaceDeclaration(existingInterface, existingInterface.modifiers, existingInterface.name, existingInterface.typeParameters, existingInterface.heritageClauses, [...existingInterface.members, propertyNode]);
                  }
                  else interfaceMap[interfaceName]= interfaceMap[interfaceName] ??   context.factory.createInterfaceDeclaration([], apiNode, [], [], context.factory.createNodeArray([propertyNode]));
                   
                    
                }); 
                  context.factory.updateSourceFile(
                    sourceFile,
                    context.factory.createNodeArray([interfaceMap, ...sourceFile.statements]),
                );
            // ts.createLanguageService(_program.getSourceFiles()[0], 'test').forEach((f)=>console.log(f));
            const visit: ts.Visitor = node => {

                node = ts.visitEachChild(node, visit, context);
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
                    const declarations = _.flatMap(checker.getPropertiesOfType(type), (property:any) => {
                        /*
                          Type references declarations may themselves have type references, so we need
                          to resolve those literals as well 
                        */
                        return _.map(property.declarations, visit);
                    });
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
                    const declarations = _.flatMap(checker.getPropertiesOfType(type), (property: {
                        declarations: any;
                    }) => {
                        // Resolve type alias to it's literals
                        return _.map(property.declarations, visit);
                    });

                    // Create interface with fully resolved types
                    return context.factory.createInterfaceDeclaration(
                        [],
                        node.name,
                        node.typeParameters,
                        [],
                        declarations.filter(ts.isTypeElement)
                    );
                }
                // Remove all export declarations
                if (ts.isImportDeclaration(node)) {
                    return context.factory.createNodeArray();
                }

                return node;
            };

            return ts.visitNode(sourceFile, visit);
        };
    };
};


export default programTransformer;
export type ProgramTransformer = typeof programTransformer;



//   identifiers.map((identifier)=>{
//       const identifierNode= context.factory.createIdentifier(identifier);
//       const typeNode= context.factory.createTypeReferenceNode(identifierNode, []);
//       const propertyNode= context.factory.createPropertySignature([], identifierNode, undefined, typeNode);
//       const interfaceNode= context.factory.createInterfaceDeclaration([], identifierNode, [], [], context.factory.createNodeArray([propertyNode]));
//       sourceFile = context.factory.updateSourceFile(
//           sourceFile,
//           context.factory.createNodeArray([interfaceNode, ...sourceFile.statements]),
//       );
//       return identifierNode;
//   }).reduce((prev:ts.Identifier, curr:ts.Identifier)=>{
//      
//      
//    })
//  for (const identifiersKey in identifiers.slice(0, identifiers.length - 2)) {
//       const identifier= context.factory.createIdentifier(identifiers[identifiersKey]);
//         context.factory.createPropertyAssignment(identifier, context.factory.createTypeReferenceNode(identifier, []));
//    
// }
//      