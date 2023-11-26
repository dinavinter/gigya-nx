import initSwc, {transformSync} from "@swc/wasm-web";
 

export function setupCompiler(element: HTMLTextAreaElement) {
    let initialized = initSwc();
    const compile = () => {
        initialized.then(() => {
            const result = transformSync(element.value, {});
            element.innerHTML = result.code
        });
    }
    
    element.addEventListener('click', () =>  compile())
}
