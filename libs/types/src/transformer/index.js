import path from 'path';
import ts from 'typescript';
import * as fs from "fs";
const trace = false;
function isPrivateAccessor(node) {
    return ("modifiers" in node && ts.getModifiers(node)?.some((m) => m.kind === ts.SyntaxKind.PrivateKeyword)) ||
        (ts.isAccessor(node) && node.modifiers?.some((m) => m.kind === ts.SyntaxKind.PrivateKeyword));
}
function isNotPrivate(node) {
    return !isPrivateAccessor(node);
}
function logType(node, checker) {
    const symbol = node.symbol || node.aliasSymbol;
    if (trace) {
        console.log("visit-type", node.symbol?.name, node.aliasSymbol?.name, node.aliasSymbol?.valueDeclaration?.kind && ts.SyntaxKind[node.aliasSymbol?.valueDeclaration?.kind], "\ndeclarations\t", symbol.getDeclarations()?.length, symbol.getDeclarations()?.map((d) => {
            return {
                kind: ts.SyntaxKind[d.kind],
                alias: checker.getTypeAtLocation(d)?.aliasSymbol?.name,
                name: ts.isPropertySignature(d) && d.name.getText(),
                type: ts.isPropertySignature(d) && d.type && ts.isTypeReferenceNode(d.type) && d.type.typeName.getText(),
                typeKind: ts.isPropertySignature(d) && d.type && ts.SyntaxKind[d.type.kind],
            };
        }), "\nproperties\t", checker.getPropertiesOfType(node)?.flatMap((property) => {
            return property.declarations;
        }).map((d) => {
            return {
                name: d.name?.getText(),
                kind: ts.SyntaxKind[d.kind],
                accessor: d.initializer && ts.SyntaxKind[d.initializer.kind],
                modifiers: d.modifiers?.map((m) => ts.SyntaxKind[m.kind]),
                alias: checker.getTypeAtLocation(d)?.aliasSymbol?.name,
                symbol: checker.getTypeAtLocation(d)?.symbol?.name,
                type: ts.isPropertySignature(d) && d.type && ts.isTypeReferenceNode(d.type) && d.type?.typeName.getText(),
                typeKind: ts.isPropertySignature(d) && d.type && ts.SyntaxKind[d.type.kind],
            };
        }));
    }
    else {
        console.log("visit-type::", node.symbol?.name, "\n\tsymbol:", node.symbol?.name, "\tdeclaration: ", node.symbol?.valueDeclaration && ts.SyntaxKind[node.symbol.valueDeclaration.kind], "\n\talias: ", node?.aliasSymbol?.name, "\tdeclaration: ", node?.aliasSymbol?.valueDeclaration?.kind && ts.SyntaxKind[node.aliasSymbol?.valueDeclaration?.kind], "\n\teffective-symbol: ", symbol?.name, "\tdeclaration: ", symbol?.valueDeclaration && ts.SyntaxKind[symbol.valueDeclaration.kind]);
        // console.log("visit-type::", 
        //     "\tsymbol: ", node.symbol?.name, "\tdeclaration: ", node.symbol?.valueDeclaration && ts.SyntaxKind[node.symbol.valueDeclaration.kind] ,
        //     "\talias: ", node?.aliasSymbol?.name,  node?.aliasSymbol?.valueDeclaration?.kind && ts.SyntaxKind[node.aliasSymbol?.valueDeclaration?.kind]);
    }
}
function logHeritageClause(node) {
    if (trace)
        console.log("visit-heritage-clause ", node.token, node.getChildren()?.map((d) => ts.SyntaxKind[d.kind]), "\ntypes:\n", node.types?.map((d) => d.expression.getText()));
    else
        console.log("visit-heritage-clause ", node.token, "\ntypes:\n", node.types?.map((d) => d.expression.getText()));
}
function logClass(node, checker) {
    const type = node.name && checker.getTypeAtLocation(node.name);
    const symbol = type && type.getSymbol();
    if (trace)
        console.log("visit-class ", node.name?.getText(), "\tsymbol: ", symbol?.name, "\tdeclaration: ", symbol?.valueDeclaration && ts.SyntaxKind[symbol.valueDeclaration.kind], "\talias: ", type?.aliasSymbol?.name, type?.aliasSymbol?.valueDeclaration?.kind && ts.SyntaxKind[type.aliasSymbol?.valueDeclaration?.kind], "\tchildren:\n", node.getChildren()?.map((d) => ts.SyntaxKind[d.kind]), "members:\n", node.members.map((d) => d.name?.getText()));
    else
        console.log("visit-class ", node.name?.getText(), "\tsymbol: ", symbol?.name, "\tdeclaration: ", symbol?.valueDeclaration && ts.SyntaxKind[symbol.valueDeclaration.kind], "\talias: ", type?.aliasSymbol?.name, type?.aliasSymbol?.valueDeclaration?.kind && ts.SyntaxKind[type.aliasSymbol?.valueDeclaration?.kind]);
}
function logInterface(node, checker) {
    const type = checker.getTypeAtLocation(node.name);
    const symbol = type.getSymbol();
    if (trace) {
        console.log("visit-interface ", node.name?.getText(), "\tsymbol: ", symbol?.name, "\tdeclaration: ", symbol?.valueDeclaration && ts.SyntaxKind[symbol.valueDeclaration.kind], "\talias: ", type.aliasSymbol?.name, type.aliasSymbol?.valueDeclaration?.kind && ts.SyntaxKind[type.aliasSymbol?.valueDeclaration?.kind], "\tchildren:\n", node.getChildren()?.map((d) => ts.SyntaxKind[d.kind]), "members:\n", node.members.map((d) => d.name?.getText()));
    }
    else
        console.log("visit-interface ", node.name?.getText(), "\n\tsymbol:", symbol?.name, "\tdeclaration: ", symbol?.valueDeclaration && ts.SyntaxKind[symbol.valueDeclaration.kind], "\n\talias: ", type?.aliasSymbol?.name, "\tdeclaration: ", type?.aliasSymbol?.valueDeclaration?.kind && ts.SyntaxKind[type.aliasSymbol?.valueDeclaration?.kind], "\n\ttypeParameters:\n", node.typeParameters?.map((d) => d.name?.getText()));
}
function logTypeAliasDeclaration(node, checker) {
    const type = node.name && checker.getTypeAtLocation(node.name);
    const symbol = type && type.getSymbol();
    if (trace)
        console.log("visit-type-alias-declaration ", node.name?.getText(), "\tsymbol: ", symbol?.name, "\tdeclaration: ", symbol?.valueDeclaration && ts.SyntaxKind[symbol.valueDeclaration.kind], "\talias: ", type.aliasSymbol?.name, type.aliasSymbol?.valueDeclaration?.kind && ts.SyntaxKind[type.aliasSymbol?.valueDeclaration?.kind], "\tchildren:\n", node.getChildren()?.map((d) => ts.SyntaxKind[d.kind]), "typeParameters:\n", node.typeParameters?.map((d) => d.name?.getText()));
    else
        console.log("visit-type-alias-declaration ", node.name?.getText(), "\tsymbol: ", symbol?.name, "\tdeclaration: ", symbol?.valueDeclaration && ts.SyntaxKind[symbol.valueDeclaration.kind], "\talias: ", type.aliasSymbol?.name, type.aliasSymbol?.valueDeclaration?.kind && ts.SyntaxKind[type.aliasSymbol?.valueDeclaration?.kind]);
}
function logTypeReference(node, checker) {
    const type = node.typeName && checker.getTypeAtLocation(node.typeName);
    const symbol = type && type.getSymbol();
    if (trace)
        console.log("visit-type-reference( ", node.typeName?.getText(), "\tsymbol: ", symbol?.name, "\tdeclaration: ", symbol?.valueDeclaration && ts.SyntaxKind[symbol.valueDeclaration.kind], "\talias: ", type.aliasSymbol?.name, type.aliasSymbol?.valueDeclaration?.kind && ts.SyntaxKind[type.aliasSymbol?.valueDeclaration?.kind], "\tchildren:\n", node.getChildren()?.map((d) => ts.SyntaxKind[d.kind]), "typeArguments:\n", node.typeArguments?.length);
    else
        console.log("visit-type-reference( ", node.typeName?.getText(), "\tsymbol: ", symbol?.name, "\tdeclaration: ", symbol?.valueDeclaration && ts.SyntaxKind[symbol.valueDeclaration.kind], "\talias: ", type.aliasSymbol?.name, type.aliasSymbol?.valueDeclaration?.kind && ts.SyntaxKind[type.aliasSymbol?.valueDeclaration?.kind]);
}
function logEnumDeclaration(node) {
    console.log("visit-enum-declaration ", node.name?.getText(), "\tchildren:\n", node.getChildren()?.map((d) => ts.SyntaxKind[d.kind]), "members:\n", node.members.map((d) => `${d.name?.getText()}=${d.initializer?.getText()}`));
}
function isNotStatic(node) {
    return !isStatic(node);
}
function isStatic(node) {
    return ("modifiers" in node && ts.getModifiers(node)?.some((m) => m.kind === ts.SyntaxKind.StaticKeyword)) ||
        (ts.isAccessor(node) && node.modifiers?.some((m) => m.kind === ts.SyntaxKind.StaticKeyword));
}
function createDeclarationFileTransformer(program) {
    const checker = program.getTypeChecker();
    const types = new Map();
    return (context) => {
        return (file) => {
            const visitImportedType = (name) => {
                console.log("visit-imported-type", name);
                return (node) => {
                    // Check if the node is a specific declaration and its name matches the `name` parameter
                    if ((ts.isInterfaceDeclaration(node) || ts.isTypeAliasDeclaration(node) || ts.isEnumDeclaration(node) || ts.isModuleDeclaration(node) || ts.isNamespaceExportDeclaration(node) || ts.isClassDeclaration(node)) && node.name?.getText() === name) {
                        // If it is, call `visit_node` on the node
                        return ts.visitNode(node, visitTypes);
                    }
                    // If it's not, visit each child of the node
                    return ts.visitEachChild(node, visitImportedType(name), context);
                };
            };
            function visitTypes(node) {
                const setType = (name, visit) => {
                    if (!types.has(name)) {
                        const statement = visit();
                        if (statement && !types.has(name)) {
                            types.set(name, statement);
                            return ts.visitEachChild(statement, visitTypes, context);
                        }
                    }
                    return ts.visitEachChild(node, visitTypes, context);
                };
                if (ts.isInterfaceDeclaration(node)) {
                    return setType(node.name?.getText(), () => visitInterfaceDeclaration(node));
                }
                if (ts.isClassDeclaration(node)) {
                    return setType(node.name?.getText(), () => visitClass(node));
                }
                if (ts.isTypeReferenceNode(node) && node.getSourceFile()) {
                    return setType(node.typeName.getText(), () => visitTypeReferenceNode(node));
                }
                if (ts.isEnumDeclaration(node)) {
                    logEnumDeclaration(node);
                    return setType(node.name?.getText(), () => visitEnumDeclaration(node));
                    // types.set(node.name?.getText()!, visitEnumDeclaration(node));
                    // return;
                }
                // if (ts.isTypeAliasDeclaration(node)) {
                //     return setType(node.name.getText()!, () => visitTypeAliasDeclaration(node));
                // }
                if (ts.isHeritageClause(node)) {
                    return ts.visitNode(node, visitHeritageClause);
                }
                return ts.visitEachChild(node, visitTypes, context);
            }
            function visitHeritageClause(node) {
                logHeritageClause(node);
                if (!node.types) {
                    return undefined;
                }
                const heritages = node.types.map(expression => checker.getTypeAtLocation(expression).getSymbol());
                return heritages
                    .map(m => m?.valueDeclaration && ts.visitNode(m.valueDeclaration, visitTypes))
                    .filter(a => typeof a !== "undefined")
                    .map(a => a);
            }
            function visitEnumDeclaration(node) {
                logEnumDeclaration(node);
                function getLiteralTypeNode(initializer) {
                    if (initializer) {
                        const literalType = checker.getTypeAtLocation(initializer);
                        if (literalType.isStringLiteral()) {
                            return context.factory.createStringLiteral(literalType.value);
                        }
                        if (literalType.isNumberLiteral()) {
                            return context.factory.createNumericLiteral(literalType.value);
                        }
                        if (literalType.isStringLiteral()) {
                            return context.factory.createStringLiteral(literalType.value);
                        }
                        throw new Error(`Unsupported literal type ${literalType.flags} ${initializer}`);
                    }
                    throw new Error(`Unsupported initializer  ${initializer}`);
                }
                // //convert enum to type alias
                //     const typeLiteral = context.factory.createTypeLiteralNode( node.members.map((m)=>context.factory
                //         .createPropertySignature([], m.name, undefined, 
                //             getLiteralTypeNode(m.initializer))));
                //crte enum decleration type node
                const enumLiteral = context.factory.createEnumDeclaration([], node.name.getText(), node.members.map(m => {
                    return context.factory.createEnumMember(m.name, getLiteralTypeNode(m.initializer));
                }));
                return enumLiteral; //context.factory.createTypeAliasDeclaration([], node.name.getText(), [],   enumLiteral);
            }
            function intersectHeritageClause(node) {
                const heritages = node.types
                    // .filter((t) => t.expression.kind === ts.SyntaxKind.ExtendsKeyword)
                    .map(expression => {
                    return {
                        type: checker.getTypeAtLocation(expression),
                        symbol: checker.getTypeAtLocation(expression).getSymbol(),
                        typeParameters: expression.typeArguments
                    };
                });
                const typeNodes = heritages.reduce((dependencies, current) => {
                    if (current.symbol) {
                        const typeRef = context.factory.createTypeReferenceNode(current.symbol.name, current.typeParameters);
                        dependencies.push(typeRef);
                    }
                    return dependencies;
                }, []);
                if (typeNodes.length > 1) {
                    return context.factory.createIntersectionTypeNode(typeNodes);
                }
                else if (typeNodes.length === 1) {
                    return typeNodes[0];
                }
                return context.factory.createTypeLiteralNode([]);
            }
            function visitInterfaceDeclaration(node) {
                logInterface(node, checker);
                const typeLiteral = context.factory.createTypeLiteralNode(node.members);
                const heritageTypes = node.heritageClauses
                    ?.filter((h) => h.token === ts.SyntaxKind.ExtendsKeyword)
                    .map(intersectHeritageClause) || [];
                const intersectionType = context.factory.createIntersectionTypeNode(heritageTypes
                    .concat(typeLiteral));
                const interfaceDeclaration = context.factory.createTypeAliasDeclaration([], node.name.getText(), node.typeParameters?.map(t => context.factory.createTypeParameterDeclaration(ts.getModifiers(t), t.name.getText(), t.constraint, t.default)), intersectionType);
                if (node.name.getText() === "IBaseObjectConfig") {
                    console.log(":::", interfaceDeclaration.typeParameters?.map((t) => t.name.text + " constraint:" + t.constraint?.getText() + " default:" + t.default?.getText()));
                }
                return interfaceDeclaration;
            }
            function visitTypeAliasDeclaration(node) {
                logTypeAliasDeclaration(node, checker);
                return node;
            }
            function classToTypeElements(node) {
                return node.members.filter(isNotPrivate).filter(isNotStatic).flatMap(member => {
                    if (ts.isPropertyDeclaration(member)) {
                        return ts.factory.createPropertySignature([], member.name, member.questionToken, member.type);
                    }
                    if (ts.isMethodDeclaration(member)) {
                        return ts.factory.createMethodSignature([], member.name, member.questionToken, member.typeParameters, member.parameters, member.type);
                    }
                    if (ts.isGetAccessorDeclaration(member)) {
                        return ts.factory.createPropertySignature(ts.getModifiers(member), member.name, member.questionToken, member.type);
                    }
                    if (ts.isSetAccessorDeclaration(member)) {
                        return ts.factory.createSetAccessorDeclaration(member.modifiers, member.name, member.parameters, member.body);
                    }
                    // if (ts.isConstructorDeclaration(member)) {
                    //     return ts.factory.createConstructorDeclaration(
                    //         member.modifiers,
                    //         member.parameters,
                    //         member.body
                    //     );
                    // }
                    if (ts.isFunctionDeclaration(member)) {
                        return ts.factory.createFunctionDeclaration([], member.asteriskToken, member.name, member.typeParameters, member.parameters, member.type, member.body);
                    }
                    return [];
                });
            }
            function visitClass(node) {
                logClass(node, checker);
                const heritageTypes = node.heritageClauses
                    ?.filter((h) => h.token === ts.SyntaxKind.ExtendsKeyword)
                    .map(intersectHeritageClause) || [];
                const typeLiteral = context.factory.createTypeLiteralNode(classToTypeElements(node).filter(isNotPrivate));
                const intersectionType = context.factory.createIntersectionTypeNode(heritageTypes
                    .concat(typeLiteral));
                return context.factory.createTypeAliasDeclaration([], node.name.getText(), node.typeParameters, intersectionType);
            }
            function visitType(name, node) {
                logType(node, checker);
                // const type = checker.getTypeAtLocation(node);
                const symbol = node.symbol || node.aliasSymbol;
                const declarations = symbol?.getDeclarations() || [];
                const properties = declarations.concat(checker
                    .getPropertiesOfType(node)
                    .flatMap((property) => property.declarations || []))
                    .filter(ts.isTypeElement)
                    .filter(isNotPrivate);
                const typeTypeArguments = node.aliasTypeArguments;
                function getConstraint(t) {
                    const constraint = t.getConstraint();
                    if (!constraint)
                        return undefined;
                    const symbol = constraint.symbol || constraint.aliasSymbol;
                    const typeArguments = constraint.aliasTypeArguments;
                    return context.factory.createTypeReferenceNode(symbol.name, typeArguments?.map((t) => ts.factory.createTypeReferenceNode(t.symbol.name)));
                    // return  t.aliasTypeArguments && t.aliasTypeArguments.length > 0? getConstraint(t.aliasTypeArguments[0]) : 
                    //     t.isUnion() ? context.factory.createUnionTypeNode(t.types.map((t)=>getConstraint(t)))
                    //         : context.factory.createTypeReferenceNode(symbol.name);
                }
                const typeToTypeNode = (t) => {
                    if (!t)
                        return undefined;
                    const symbol = t.symbol || t.aliasSymbol;
                    const typeArguments = t.aliasTypeArguments;
                    return context.factory.createTypeReferenceNode(symbol.name, typeArguments?.map((t) => ts.factory.createTypeReferenceNode(t.symbol.name)));
                };
                // const typeParameters = typeTypeArguments && typeTypeArguments.map((t)=>context.factory.createTypeParameterDeclaration( [],t.aliasSymbol?.name ??  t.symbol?.name ?? t.getSymbol()?.name  , getConstraint(t),   typeToTypeNode(t.getDefault())) );
                const typeParameters = symbol.getDeclarations()?.filter(ts.isTypeParameterDeclaration);
                const typeLiteralNode = context.factory.createTypeLiteralNode(properties);
                return context.factory.createTypeAliasDeclaration([], name, typeParameters, typeLiteralNode);
                // const declarations = checker
                //     .getPropertiesOfType(node)
                //     .flatMap(( property ) => property.declarations || [])
                //     .filter(ts.isTypeElement)
                //     .filter(isNotPrivate);
                //
                // const typeLiteralNode = context.factory.createTypeLiteralNode(declarations);
                // return context.factory.createTypeAliasDeclaration([], name, [], typeLiteralNode);
            }
            function visitTypeReferenceNode(node) {
                logTypeReference(node, checker);
                // const type = checker.getTypeAtLocation(node);
                // const symbol = type.symbol || type.aliasSymbol;
                const type = node.typeName && checker.getTypeAtLocation(node.typeName);
                const symbol = type && type.getSymbol();
                const typeFromNode = checker.getTypeAtLocation(node);
                console.log("visit-type-reference::", node.typeName.getText(), "\n\tsymbol: ", type.symbol?.name, "\tdeclaration: ", type.symbol?.valueDeclaration && ts.SyntaxKind[type.symbol.valueDeclaration.kind], "\n\talias: ", type?.aliasSymbol?.name, "\tdeclaration: ", type?.aliasSymbol?.valueDeclaration?.kind && ts.SyntaxKind[type.aliasSymbol?.valueDeclaration?.kind], "\n\ttype from node:", "\n\t\tsymbol:", typeFromNode.symbol?.name, "\tdeclaration: ", typeFromNode.symbol?.valueDeclaration && ts.SyntaxKind[typeFromNode.symbol.valueDeclaration.kind], "\n\t\talias: ", typeFromNode?.aliasSymbol?.name, typeFromNode?.aliasSymbol?.valueDeclaration?.kind && ts.SyntaxKind[typeFromNode.aliasSymbol?.valueDeclaration?.kind]);
                if (node.typeName.getText() === "BasePlugin") {
                    console.log("::::", node.getText());
                    // ts.visitNode( typeFromNode.getd, visitTypes);
                }
                if (symbol?.valueDeclaration) {
                    ts.visitNode(symbol.valueDeclaration, visitTypes);
                    return undefined;
                }
                symbol?.declarations?.forEach((d) => {
                    console.log("visit-type-reference-declaration::", d.kind, ts.SyntaxKind[d.kind], d.getText());
                    ts.visitNode(d, visitTypes);
                    return undefined;
                });
                // ts.visitNode( symbol.valueDeclaration, visitTypes);
                // const symbol = type.getSymbol();
                // return symbol?.valueDeclaration && visitTypes(symbol.valueDeclaration);
                return visitType(node.typeName.getText(), typeFromNode);
            }
            const visit = (node) => {
                if (ts.isImportDeclaration(node) && node.importClause?.isTypeOnly) {
                    const { source } = moduleSource(node);
                    const name = source.fileName;
                    ts.visitNode(node, visitImportClause);
                    return undefined;
                    function visitImportClause(node) {
                        const children = node.getChildren().map((c) => ts.SyntaxKind[c.kind]);
                        console.log("visitImportClause ", name, node.kind, `\t# ts.SyntaxKind.${ts.SyntaxKind[node.kind]}`, children);
                        if (ts.isImportSpecifier(node) && typeof node.propertyName !== 'undefined') {
                            //todo should ref with property name
                            return ts.visitNode(source, visitImportedType(node.name.getText()));
                        }
                        if (ts.isImportSpecifier(node)) {
                            return ts.visitNode(source, visitImportedType(node.name.getText()));
                        }
                        return ts.visitEachChild(node, visitImportClause, context);
                    }
                }
                return ts.visitEachChild(node, visit, context);
            };
            const source = ts.visitNode(file, visit);
            const typesStatements = [...types.entries()]
                .filter(([name]) => name !== 'Promise')
                .flatMap(([_, typeNode]) => typeNode);
            typesStatements[0] && ts.addSyntheticLeadingComment(typesStatements[0], ts.SyntaxKind.MultiLineCommentTrivia, "\nimported types\n", true);
            return context.factory.updateSourceFile(source, [...source.statements, ...typesStatements]);
            function moduleSource(node) {
                const moduleSpecifier = node.moduleSpecifier;
                const text = moduleSpecifier.text;
                const moduleSourcePAth = moduleSpecifier.getSourceFile().fileName;
                const resolved = ts.resolveModuleName(text, moduleSourcePAth, program.getCompilerOptions(), ts.sys);
                return { text, moduleSourcePAth, resolved: resolved.resolvedModule, source: program.getSourceFile(resolved.resolvedModule?.resolvedFileName) };
            }
        };
    };
}
const __dirname = process.cwd();
console.log('Generating typescript models... dir:' + __dirname);
try {
    const filePath = path.resolve(__dirname, './src/type-maker.ts');
    const runtime_dir = path.resolve(__dirname, './src/runtime');
    const defs_dir = path.resolve(__dirname, './src/defs');
    const source = ts.createSourceFile(filePath, fs.readFileSync(filePath, 'utf-8'), ts.ScriptTarget.Latest, true);
    const program = ts.createProgram([filePath], {
        includes: [runtime_dir, defs_dir, filePath],
        mainFile: filePath,
        exclude: ['node_modules'],
        skipLibCheck: true,
        noLib: true,
        paths: {
            "@/*": ["src/*"],
            "@defs/*": ["src/defs/*"],
            "src/*": ["src/defs/*"],
        }
    });
    const result = ts.transform(source, [createDeclarationFileTransformer(program)]);
    const printer = ts.createPrinter();
    const outputDir = path.resolve(__dirname, './dist');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    console.log('Writing generated typescript to ' + outputDir);
    console.log('files: ', result.transformed.map((f) => path.resolve(outputDir, path.parse(f.fileName).name + '.d.ts')));
    // Write pretty printed transformed typescript to output directory
    result.transformed.forEach((f) => {
        const code = printer.printFile(f);
        const outputFilePath = path.resolve(outputDir, path.parse(f.fileName).name + '.d.ts');
        fs.writeFileSync(outputFilePath, code);
    });
    //save main to index.d.ts
    fs.writeFileSync(path.resolve(outputDir, 'index.d.ts'), printer.printFile(result.transformed[0]));
}
catch (e) {
    console.error(e);
}
