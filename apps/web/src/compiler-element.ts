import {GigyaConsumerElement} from "@gigya/wc/src/gigya-element/consumer";

const swc = await import("../../../node_modules/@swc/wasm-web/wasm-web.js");
await swc.default();
 
export class CompilerElement extends GigyaConsumerElement {
    public static observedAttributes = [];
 
    public initialized = false;
    constructor() {
        super();
    }

     

    connectedCallback() {
        // this.addEventListener<>('gigya-js-ready', (e) => {   });
         
         

        this.innerHTML = `
        <div style="align-content: center; align-self: center; flex: content; flex-direction: row;justify-content: stretch">    
            <nav style="justify-content: space-around; align-content: center; ">
                <h1>Gigya Compiler</h1>
                    <button id="compile">Compile</button> 
                    <a  id="link" download="gigya.js"><button  >download</button>></a> 
                 </nav>
          <textarea id="result" style="flex-grow: 6; justify-content: stretch"></textarea>
          <textarea id="code" style="flex-grow: 6; justify-content: stretch"></textarea>

        </div>
        `;
        const code = this.querySelector<HTMLTextAreaElement>('#code')!;
        const compile = this.querySelector<HTMLButtonElement>('#compile')!;
        const result = this.querySelector<HTMLTextAreaElement>('#result')!;
        const link = this.querySelector<HTMLAnchorElement>('#link')!;

        compile.addEventListener('click', () => {
            try {
                this.gigya = this.gigya ||  (window as unknown as any).gigya as any;
                console.log(this.gigya);
                result.textContent  =  `export default ${exportGigyaModule(this.gigya)};`;
                // const gigyajs = ${exportGigyaModule(this.gigya)};
                // module.exports = {gigyajs};`;
                link.href = URL.createObjectURL(new Blob([result.textContent], {type: 'text/javascript'}));
               
                const compiled = swc.transformSync(result.textContent, {
                    "sourceMaps": "inline",

                    "jsc": {
                        "parser": {
                            "syntax": "ecmascript",
                            "jsx": false,

                        },
                        "loose": true,
                        "minify": {
                            "compress": false,
                            "mangle": {
                                "toplevel": true,
                                "keep_classnames": true,
                                "keep_fnames": true,
                                "keep_private_props": true,
                                "ie8": true,
                                "safari10": true
                            }
                        },
                        "externalHelpers": false,
                        "transform": {
                            "constModules": {
                                "globals":{
                                    "window": {
                                        "gigya": "gigya"
                                    },
                                }
                            },
                        }
                    },
                    "module": {
                        "type": "es6",
                        "strict": true
                    },
                    "minify": false,
                    "isModule": true,
                    "env": {
                        "targets": "",
                        "bugfixes": true

                    }
                });

                
                code.textContent = compiled.code;
               link.href = URL.createObjectURL(new Blob([code.textContent], {type: 'text/javascript'}));

               
                const script =  swc.parseSync(result.textContent, {
                    target: "es2020",
                    syntax: "typescript",
                    script: true,


                });
                
                 script.body.forEach((node) => {
                        
                        if (node.type === "FunctionDeclaration") {
                            console.log(node);
                          }
                    });
                

                } catch (e: any) {
                code.textContent = e.toString();
            }
        });
    }

}

function  exportGigyaModule(gigya: any) {
    const replacerFunc = () => {
        const visited = new WeakSet();
        return (key, value) => {
            if (typeof value === "object" && value !== null) {
                if (visited.has(value)) {
                    return;
                }
                visited.add(value);
            }
            return value;
        };
    };
    
    const nativeFunctionReplacer = (key, value) => {
        //handle cases of native code, like function assign() { [native code] }
        if (typeof value === 'function' && value.toString().includes('[native code]')) {
                return 'function() { /*native code*/ }';
        }
        

        // if (typeof value === 'function' ) {
        //
        //     return `function() { /* ${key}  */ }`;
        // }

        return value;
    };
    
    const functionReplacer = (key, value) => {
        //handle function print with arguments
        if (typeof value === 'function') {
            return value.toString();
        }
        return value;
    }
    
    
    const replacer = replacerFunc();
    // const modules = 
    let json = JSON.stringify(
        { ...gigya },
        (key, value) => {
            if(key =="_win") return;
            if(key =="4_aeFS_UyzRnmP5k_MI59ejg_gig") return;
            if(key.startsWith("_")) return;
          
           
            if (typeof value === 'function') {
                    console.log(value.toString());
                    return '[FUNCTION]' + nativeFunctionReplacer(key,value);
            }
            return replacer(key,value);
        },
        '    '
    );

    //wrap all nesting properties that start with digits with quotes
    //  json = json.replace(/"(\d+)":/g, '"$1":');
     
    
    let moduleJavascript = json.replace(
        /"(\[FUNCTION])?((?:\\.|[^\\"])*)"(:)?/g,
        (match, group1, group2, group3) => {
            if (group1) return JSON.parse('"' + group2 + '"');
            if (group3 && /^\w+$/.test(group2)) return group2 + ':';
            return match;
        }
    );
    
    // moduleJavascript = 'const mod = ' + moduleJavascript + ';';
    // moduleJavascript += `mod.__proto__ = {${gigya.__proto__.toString()}};`;
    // moduleJavascript += 'export default ' + moduleJavascript + ';';
    console.log(moduleJavascript);
    return moduleJavascript;
}

// customElements.define('gigya-consumer', GigyaConsumerElement);


customElements.define('compiler-element', CompilerElement);
