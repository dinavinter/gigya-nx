export default function compileModule(code: string, globals = {} as Record<string, any>){
    let exports = {} as Record<string, any>;
    let module = { exports };
    let globalNames = Object.keys(globals);
    let keys = ['module', 'exports', ...globalNames];
    let values = [module, exports, ...globalNames.map(key => globals[key])];
    new Function(keys.join(), code).apply(exports, values);
    return module.exports;
}