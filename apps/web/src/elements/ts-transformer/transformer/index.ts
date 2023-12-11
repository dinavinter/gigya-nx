import compileModule from './compileModule';
import {Awaitable} from "vitest";
import   {type ProgramTransformer} from "./transform-code.ts";
import ts from "typescript";
import {createApiMap, createApiMapFile} from "./api-list.ts";
import {BaseApi} from '@gigya/types';

const FILENAME = 'astExplorer.tsx';
declare type Transpile = (program: string) => Awaitable<string> | string;
 

export async function loadTransformer() {
    const {default:transpile} = await import('./transpiler.ts');
     const {default: transformCode} = await import('./transform-code.ts?raw'); 
     const transformerFactory =  await transformer({transformCode, ts, transpile})
     return {
         transform: (code:string)=>transform(transformerFactory, code),
     }
    
}

export  async function transform(createTransformer:ProgramTransformer, code:string) {

    const gigya= (window as unknown as any).gigya as any;
    const apiList = gigya._.arApiList as BaseApi[];
   const apiMapFile =  ts.createSourceFile(
       'api-map.ts',
        createApiMapFile(apiList), 
       ts.ScriptTarget.Latest,
       true,
   );
   
    // Create a minimal typescript host object needed for the rest of the compiler api
    const host : ts.CompilerHost = {
        fileExists: () => true,
        getCanonicalFileName: (filename: any) => filename,
        getCurrentDirectory: () => '',
        getDefaultLibFileName: () => 'lib.d.ts',
        getNewLine: () => '\n',
        getSourceFile: (filename: any) => {
            if(filename === FILENAME)
            return ts.createSourceFile(
                filename,
                code,
                ts.ScriptTarget.Latest,
                true,
            );
            if(filename == 'api-map.ts')
                return apiMapFile;
            
        },
        readFile: () => undefined,
        useCaseSensitiveFileNames: () => true,
        writeFile: () => null,
    };

    const langServiceHost : ts.LanguageServiceHost = {
        ...host,
        getCompilationSettings: () => ({
            noResolve: true,
            target: ts.ScriptTarget.Latest,
            module: ts.ModuleKind.ESNext,
            esModuleInterop: true,
            experimentalDecorators: true,
            experimentalAsyncFunctions: true
        }),
        getScriptFileNames: () => [FILENAME],
        getScriptVersion: () => '1',
        getScriptSnapshot: (_filename: any) => {
            return ts.ScriptSnapshot.fromString(
                code
            );
        },
        writeFile(fileName: string, content: string) {
            console.log(fileName, content)
       },
        getCurrentDirectory: () => '',
        getDefaultLibFileName: () => 'lib.d.ts',
    };

   // const langService= ts.createLanguageService(langServiceHost, ts.createDocumentRegistry());
    // create the program with the provided file as entry point
    const program = ts.createProgram([FILENAME], {
         target: ts.ScriptTarget.Latest,
        module: ts.ModuleKind.ESNext,
        declaration: true,
        emitDeclarationOnly: true,
        esModuleInterop: true,
        experimentalDecorators: true,
        experimentalAsyncFunctions: true,
        paths:{
            '@gigya/types': ['../../types/dist/index.d.ts'],
        }
    }, host);

     // console.log(langService.getNavigationTree(FILENAME));
    // create the user provided transformer by invoking the factory
    const transformerFactory = createTransformer(program);

    // create a source file node from the file contents
    const sourceFile = program.getSourceFile(FILENAME)

    // transform the source file node with the created transformer
    const transformResult = ts.transform(sourceFile, [transformerFactory], program.getCompilerOptions());

    // retrieve the result source file node
    const resultFile = transformResult.transformed[0];

    // create a printer and print the file to a string
    const printer = ts.createPrinter();
     const apiMap = createApiMapFile(apiList);
    const result = apiMap + '\n\n ' + printer.printFile(resultFile);
    

    return result;
}


interface TransformerParams {
    transpile: Transpile;
    ts: any;
    transformCode: string;
}


// const  createTransformer=await transformer({transpile , ts , transformCode});


async function transformer({transpile, transformCode, ts}:TransformerParams) {
    // basic scaffolding to get a compiled javascript module from the user provided code

    const mod = compileModule(
        // eslint-disable-line no-shadow
        await transpile(transformCode),
        {ts},
    );

    // check that the exported value is valid
    const createTransformer = mod.default || mod;
    if (typeof createTransformer !== 'function') {
        throw new TypeError('expected the default export to be a program transformer factory');
    }
    return createTransformer as ProgramTransformer;
}
