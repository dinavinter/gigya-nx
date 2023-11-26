import * as ts from "typescript";
import * as fs from "fs";

// Here I'm mocking the filename and the code, but you can read this from a real file with any problems
const filename = "example.ts";
const code =  fs.readFileSync('./index.ts', 'utf8');

// Here we can pass the ECMAScript version in this case I'm passing the latest one
const sourceFile = ts.createSourceFile(filename, code, ts.ScriptTarget.Latest);

const generateAst = (node: ts.Node, sourceFile: ts.SourceFile) => {
    const syntaxKind = ts.SyntaxKind[node.kind];
    const nodeText = node.getText(sourceFile);

    fs.appendFile("output.txt", `${syntaxKind}: ${nodeText}`, function (err) {
        console.log(err);
    });

    fs.appendFile("output.txt", "\n", function (err) {
        console.log(err);
    });

    node.forEachChild((child) => generateAst(child, sourceFile));
};

(() => generateAst(sourceFile, sourceFile))();
