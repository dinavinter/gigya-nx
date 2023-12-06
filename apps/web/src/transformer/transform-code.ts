import ts from "typescript";

// const transformer = sourceFile => {
//     const visitor = (node: ts.Node): ts.Node => {
//         console.log(node.kind, `\t# ts.SyntaxKind.${ts.SyntaxKind[node.kind]}`);
//         return ts.visitEachChild(node, visitor, context);
//     };
//
//     return ts.visitNode(sourceFile, visitor);
// };
//
// const findParent = (node: ts.Node, predicate: (node: ts.Node) => boolean) => {
//     if (!node.parent) {
//         return undefined;
//     }
//
//     if (predicate(node.parent)) {
//         return node.parent;
//     }
//
//     return findParent(node.parent, predicate);
// };
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

export default function (_program: ts.Program) {
    
    // const checker = program.getTypeChecker();  
    return (context: ts.TransformationContext) => { 
        return (sourceFile: any) => {
            const visitor = (node: ts.Node): ts.Node => {
                console.log(node.kind, `\t# ts.SyntaxKind.${ts.SyntaxKind[node.kind]}`);
                return ts.visitEachChild(node, visitor, context);
            };

            return ts.visitNode(sourceFile, visitor);
        };
    };
};

