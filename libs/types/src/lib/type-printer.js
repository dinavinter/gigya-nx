"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
function extractTypeSignature(filename, aliasName) {
    var program = ts.createProgram([filename], { emitDeclarationOnly: true });
    var sourceFile = program.getSourceFile('../index.ts');
    if (!sourceFile) {
        throw new Error("File: '".concat(filename, "' not found"));
    }
    var typeChecker = program.getTypeChecker();
    // Get the declaration node you're looking for by it's type name.
    // This condition can be adjusted to your needs
    var statement = sourceFile.statements.find(function (s) { return ts.isTypeAliasDeclaration(s) && s.name.text === aliasName; });
    if (!statement) {
        throw new Error("Type: '".concat(aliasName, "' not found in file: '").concat(filename, "'"));
    }
    var type = typeChecker.getTypeAtLocation(statement);
    var fields = [];
    // Iterate over the `ts.Symbol`s representing Property Nodes of `ts.Type`
    for (var _i = 0, _a = type.getProperties(); _i < _a.length; _i++) {
        var prop = _a[_i];
        var name_1 = prop.getName();
        var propType = typeChecker.getTypeOfSymbolAtLocation(prop, statement);
        var propTypeName = typeChecker.typeToString(propType);
        fields.push("".concat(name_1, ": ").concat(propTypeName, ";"));
    }
    return "type ".concat(aliasName, " = {\n  ").concat(fields.join("\n  "), "\n}");
}
var typeBSignature = extractTypeSignature("./src/my-file.ts", "TypeB");
// write to file or console log
console.log(typeBSignature);
/*
type TypeB = {
  prop1: string;
}
 */
