import ts, {ModifierFlags, VariableDeclaration} from "typescript";
import {type GigyaAPI } from "@gigya/types/src";
import {appendStringElements} from "@gigya/types/src/defs/accounts/Gigya.JS.Plugin.screenSet2/mocks/Utils";
import {BaseApi} from "@gigya/types/src/defs/core/Gigya.Js/app/API/BaseApi";

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
             const apiType = context.factory.createFunctionTypeNode(
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

                    const expressions = getExpressions(node).map((e)=>e.getText()).reverse().join('.');
                    const api:BaseApi =gigya._.getApi(expressions);
                    if(api){
                        console.log(node.name.getText(), expressions,api, node);
                        const typeApi=checker.getStringLiteralType(api.methodName);
                          const typeApiNode=checker.cr(GigyaAPI, undefined, ts.NodeBuilderFlags.IgnoreErrors);
                           ts.transform(typeof typeApiNode,  , program.getCompilerOptions());   
                        context.factory.updatePropertyAssignment(node, node.name,context.factory.createArrowFunction( undefined, undefined, [], undefined, undefined, ts.creTE(typeApiNode, undefined), node.initializer));
                         context.factory.updateTypeParameterDeclaration(node.initializer, node.name, ts.createArrowFunction(
                    }
                    
                     
                  mi0p
                }
                return ts.visitEachChild(node, visitor, context);
            };

            return ts.visitNode(sourceFile, visitor);
        };
    };
};

export default programTransformer;
export type ProgramTransformer = typeof programTransformer;

