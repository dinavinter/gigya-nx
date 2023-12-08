import ts, {ScriptTarget} from 'typescript';
import halts, {loopProtect} from 'halting-problem';

let compilerOptions: ts.TranspileOptions = { compilerOptions: { module: ts.ModuleKind.ES2022, esModuleInterop:true, target:ScriptTarget.ESNext   } };

export default function transpile(code: string) {
    let es5Code = ts.transpileModule(code, compilerOptions).outputText;
    es5Code = protect(es5Code);
    return es5Code;
}


   function protect(jsCode: string) {
    // assert that there are no obvious infinite loops
    halts(jsCode);
    // guard against non-obvious loops with a timeout of 5 seconds
    let start = Date.now();
    jsCode = loopProtect(
        jsCode,
        [
            // this function gets called in all possible loops
            // it gets passed the line number as its only argument
            '(function (line) {',
            'if (Date.now() > ' + (start + 5000) + ') {',
            '  throw new Error("Infinite loop detected on line " + line);',
            '}',
            '})',
        ].join(''),
    );

    return jsCode;
}