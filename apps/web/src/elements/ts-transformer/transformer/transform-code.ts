import ts  from "typescript";
import {BaseApi} from "@gigya/types/src/defs/core/Gigya.Js/app/API/BaseApi";
import {getAPIInterfaces} from "./transform-api-list.ts";

// const transformer = sourceFile => {
//     const visitor = (node: ts.Node): ts.Node => {
//         console.log(node.kind, `\t# ts.SyntaxKind.${ts.SyntaxKind[node.kind]}`);
//         return ts.visitEachChild(node, visitor, context);
//     };
//
//     return ts.visitNode(sourceFile, visitor);
// };
//
const findParent = (node: ts.Node, predicate: (node: ts.Node) => boolean) => {
    if (!node.parent) {
        return undefined;
    }

    if (predicate(node.parent)) {
        return node.parent;
    }

    return findParent(node.parent, predicate);
};


const findParents = <TNode extends  ts.Node=ts.Node, 
    TPredicate extends (node: ts.Node) => node is TNode= (node: ts.Node) => node is TNode>
         (node: ts.Node, 
          predicate: TPredicate):TNode[] => {
    if (!node.parent) {
        return [];
    }

    if (predicate(node.parent)) {
        return [node.parent, ...findParents<TNode>(node.parent, predicate)];
    }

    return findParents(node.parent, predicate);
}

const findParentsToRoot = 
(node: ts.Node ):ts.Node[] => {
    if (!node.parent) {
        return [node];
    }
    
    return [node, ...findParentsToRoot(node.parent)];
    

 }

//
// const visitor = (node: ts.Node): ts.Node => {
//     if (ts.isStringLiteral(node)) {
//         const parent = findParent(node, ts.isFunctionDeclaration);
//         if (parent) {
//             console.log('string literal has a function declaration parent');
//         }
//         return node;
//     }
// };

export  function programTransformer(program: ts.Program) {
    const gigya= (window as unknown as any).gigya as any;
    const checker = program.getTypeChecker();  
    return (context: ts.TransformationContext) => { 
        return (sourceFile: any) => {
             context.factory.updateSourceFile(sourceFile, [context.factory.createImportDeclaration(undefined, context.factory.createImportClause(true,context.factory.createIdentifier('Runner'), undefined), context.factory.createStringLiteral('@gigya/types'))]);
             // ts.createLanguageService(_program.getSourceFiles()[0], 'test').forEach((f)=>console.log(f));
            const visitor = (node: ts.Node): ts.Node => {
                // const rootSymbol = checker.getAmbientModules()[0]; 
                // checker.getExportsOfModule(rootSymbol).forEach((m)=>console.log(m));
                // console.log(node.kind, `\t# ts.SyntaxKind.${ts.SyntaxKind[node.kind]}`);
                type withName = ts.PropertyAssignment | ts.VariableDeclaration;
                if(ts.isPropertyAssignment(node) && ts.isFunctionExpression(node.initializer) ){
                    // get all expresions tree
                        const getExpressions = (node: ts.PropertyAssignment): ts.Node[] => {
                            const parents =findParentsToRoot(node);
                            const propsOrVars= parents
                                .filter((p)=>ts.isPropertyAssignment(p) || ts.isVariableDeclaration(p) )
                                .map((p)=> p as withName)
                                .filter((p)=>p.name)
                            ;
                            return propsOrVars.map((p)=>p.name);
                            // if (!node.parent) {
                            //     return [node];
                            // }
                            // if (!ts.isPropertyAssignment(node.parent) && !ts.isVariableDeclaration(node.parent)) {
                            //    const tsPropAncestor= ts.findAncestor(node.parent, ts.isPropertyAssignment);
                            //      if(tsAncestor){
                            //          return [node, ...getExpressions(tsAncestor)]; 
                            //       }
                            //
                            //     const tsVarAncestor= ts.findAncestor(node.parent, ts.isVariableDeclaration);
                            //
                            //
                            //
                            //
                            //     return [node, ...getExpressions(node.parent)];
                        }

                    ;

                    const apiName = getExpressions(node).map((e)=>e.getText()).reverse().join('.');
                    const api:BaseApi =gigya._.getApi(apiName);
                    if(api) {
                        // console.log(node.name.getText(), expressions, api, node);
                        try {
                            const apiObjectLiteral = context.factory
                                .createAsExpression(createObjectLiteral(api),
                                    context.factory.createTypeReferenceNode('const'));
                            context.factory.updatePropertyAssignment(node, node.name, apiObjectLiteral);

                            // const variable =context.factory.createVariableDeclaration(expressions, undefined, undefined,apiObjectLiteral)
                            // const apiTypeOf= context.factory.createTypeOfExpression(apiObjectLiteral);
                            // const apiReferncedType=   context.factory.createTypeParameterDeclaration([],expressions, apiTypeOf);
                            // const type= checker.getTypeOfAssignmentPattern(createObjectLiteral(api));
                            const typeNode = checker.typeToTypeNode(checker.getContextualType(apiObjectLiteral)!, undefined, undefined);
                            console.log(node.name.getText(), apiName, api, node, apiObjectLiteral, checker.getContextualType(apiObjectLiteral), typeNode);

                           
                            const apiReferncedType = context.factory.createTypeReferenceNode(`APIMap["${apiName}"]`  );
                            // return context.factory.updatePropertyAssignment(node, node.name, apiObjectLiteral);
                              return  context.factory.createPropertySignature(  undefined, node.name.getText(), undefined, apiReferncedType);
                            // return apiReferncedType;
                             
                        }
                        catch (e) {
                            console.log(e);
                        }
                    }
                    return undefined;

                }
                return ts.visitEachChild(node, visitor, context);
            };

             const transformed= ts.visitNode(sourceFile, visitor);
            const apiIterfaces = getAPIInterfaces(gigya, context);
              // const source= ts.createSourceFile("file.ts",`import Runner from '@gigya/types'; 
              //     import {Gigya} from '@gigya/types';
              // `    
              //    , ts.ScriptTarget.Latest, false, ts.ScriptKind.TS);
              
             const apiListRefe= context.factory.createTypeReferenceNode("ApiList"  );
            const GigyaAPI = context.factory.createTypeAliasDeclaration(undefined, 'GigyaAPI',  undefined, context.factory.createTypeReferenceNode("ApiMap" , context.factory.createTypeLiteralNode(apiListRefe)),) 
            return context.factory.updateSourceFile(sourceFile, [context.factory.createImportDeclaration(undefined, context.factory.createImportClause(true, context.factory.createIdentifier("ApiMap"), undefined), context.factory.createStringLiteral('@gigya/types')),
                GigyaAPI,...transformed.statements]) 
         };
        function createObjectLiteral   (obj:object):ts.ObjectLiteralExpression {
            return context.factory.createObjectLiteralExpression(Object.entries(obj).map(([k, v]) => createAssignment(k, v)), true);
        }

        function createAssignment  (name: string, value:any) {
            switch (typeof value) {
                case "string":
                    return context.factory.createPropertyAssignment(name, context.factory.createStringLiteral(value));
                case "number":
                    return context.factory.createPropertyAssignment(name, context.factory.createNumericLiteral(value));
                case "object":
                    return context.factory.createPropertyAssignment(name, createObjectLiteral(value));
                default:
                    return context.factory.createPropertyAssignment(name, context.factory.createStringLiteral(value));
            }
        }
    };
}



export default programTransformer;
export type ProgramTransformer = typeof programTransformer;

