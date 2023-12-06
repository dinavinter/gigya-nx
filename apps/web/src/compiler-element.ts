// import {GigyaConsumerElement} from "@gigya/wc/src/gigya-element/consumer";
// import {ExportDeclaration, FunctionDeclaration, Identifier, ModuleItem, Node} from "@swc/wasm-web";
// import {CallExpression, ReturnStatement} from "@swc/core";
//
// const swc = await import("../../../node_modules/@swc/wasm-web/wasm-web.js");
// await swc.default();
// 
// export class CompilerElement extends GigyaConsumerElement {
//     public static observedAttributes = [];
// 
//     public initialized = false;
//     constructor() {
//         super();
//     }
//
//     
//
//     connectedCallback() {
//         // this.addEventListener<>('gigya-js-ready', (e) => {   });
//         
//         
//
//         this.innerHTML = `
// <section id="page">
//             <header> 
//                <h1>Gigya Compiler</h1>
//               <nav> 
//                  <button id="compile">Compile</button> 
//
//                   <a  id="link" download="gigya.js"><button  >download</button></a> 
//                </nav>
//              </header> 
//           
//            <main>
//                  <p id="result"  contenteditable style="width: 100%;  height: 100%; "></p>
//                   <p id="code" contenteditable   style="width: 100%;  height: 100%; "></p>
//            </main>
//    
//           <footer contenteditable>Footer Content —  .com 2020</footer>
// </section>
//         <!--  <wc-monaco-editor
//                    class="editor"
//                   folding
//                   minimap
//                   id="result" 
//                   theme="vs-light"
//                   language="javascript"></wc-monaco-editor> -->
//         `;
//         const code = this.querySelector<HTMLElement>('#code')!;
//         const compile = this.querySelector<HTMLButtonElement>('#compile')!;
//         const result = this.querySelector<HTMLTextAreaElement>('#result')!;
//         const link = this.querySelector<HTMLAnchorElement>('#link')!;
//
//         compile.addEventListener('click', () => {
//             try {
//                 this.gigya = this.gigya ||  (window as unknown as any).gigya as any;
//                 console.log(this.gigya);
//                 result.textContent  =  ` ${exportGigyaModule(this.gigya)};`;
//                
//                 link.href = URL.createObjectURL(new Blob([result.textContent], {type: 'text/javascript'}));
//                
//                 const compiled = swc.transformSync(result.textContent, {
//
//                     "jsc": {
//                         "keepClassNames": true,
//                         "parser": {
//                             "syntax": "ecmascript",
//                             "jsx": false,
//
//                         },
//                         "loose": true,
//                         "minify": {
//                             "compress": false,
//                             "mangle": {
//                                 "toplevel": true,
//                                 "keep_classnames": true,
//                                 "keep_fnames": true,
//                                 "keep_private_props": true,
//                                 "ie8": true,
//                                 "safari10": true
//                             }
//                         },
//                         "externalHelpers": false,
//                         "transform": {
//                            
//                             "optimizer": {
//                                 "simplify": false, 
//                                 "globals":{
//                                     "vars": {
//                                         "__DEBUG__": "true"
//                                     }
//                                 }
//                             },
//                         }
//                     },
//                     "module": {
//                         "type": "es6",
//                         "strict": true
//                     },
//                     "minify": false,
//                     "isModule": true,
//                     "env": {
//                         "targets": "",
//                         "bugfixes": true
//
//                     }
//                 });
//
//                
//                 code.textContent = compiled.code;
//                  link.href = URL.createObjectURL(new Blob([code.textContent], {type: 'text/javascript'}));
//                  // this.parseAsync(result.textContent); 
//
//                 } catch (e: any) {
//                 code.textContent = e.toString();
//             }
//         });
//     }
//
//     private async parseAsync(code: string) {
//         try {
//                 
//             const script = await swc.parse(code, {
//                 target: "es2020",
//                 syntax: "typescript",
//                 script: true,
//
//
//             });
//            
//             type Visitor<Type extends Node["type"], TNode extends {
//                 type: Type;
//             } = {type: Type} & any> = (node: TNode) => void;
//             type VisitorRecord= Record<Partial<Node["type"]>, Visitor<Node["type"]>>
//             type VisitorMap = {
//                 ["CallExpression"]: Visitor<"CallExpression", CallExpression>;
//                 ["FunctionDeclaration"]: Visitor<"FunctionDeclaration", FunctionDeclaration>;
//                 ["ReturnStatement"]: Visitor<"ReturnStatement", ReturnStatement>;
//                 ["Identifier"]: Visitor<"Identifier", Identifier>;
//                 ["ExportDeclaration"]: Visitor<"ExportDeclaration", ExportDeclaration>;
//             } & VisitorRecord;
//             const visitor =(node:Node) =>{
//                 const visitors = {
//                     ["CallExpression"]: visitCallExpression,
//                     ["FunctionDeclaration"]: visitFunctionDeclaration,
//                     ["ReturnStatement"]: visitReturnStatement,
//                     ["Identifier"]: visitIdentifier,
//                     ["ExportDeclaration"]: visitExportDeclaration
//                 } as VisitorRecord;
//
//                 if(node.type in visitors) {
//                     visitors[node.type](node) ;
//                 }
//
//
//                 function visitExportDeclaration(node:ExportDeclaration) {
//                     console.log("ModuleItem", node);
//                  }
//                 function visitCallExpression(node:CallExpression) {
//                     console.log("CallExpression", node);
//                 }
//
//                 function  visitFunctionDeclaration(node:FunctionDeclaration) {
//                     console.log("FunctionDeclaration", node);
//                 }
//                 function visitReturnStatement(node:ReturnStatement) {
//                     console.log("ReturnStatement", node);
//                 }
//                 function visitIdentifier(node:Identifier) {
//                     console.log("Identifier", node);
//                 }
//
//             };
//
//
//             script.body.forEach((node) => {
//                 visitor(node);
//               
//              });
//             return script;
//         } catch (e) {
//             console.error(e);
//         }
//     }
// }
//
// function toModule(gigya: any) {
//     const replacerFunc = () => {
//         const visited = new WeakSet();
//         return (key, value) => {
//             if (typeof value === "object" && value !== null) {
//                 if (visited.has(value)) {
//                     return;
//                 }
//                 visited.add(value);
//             }
//             return value;
//         };
//     };
//
//     const nativeFunctionReplacer = (key, value) => {
//         //handle cases of native code, like function assign() { [native code] }
//         if (typeof value === 'function' && value.toString().includes('[native code]')) {
//             return 'function() { /*native code*/ }';
//         }
//
//
//         // if (typeof value === 'function' ) {
//         //
//         //     return `function() { /* ${key}  */ }`;
//         // }
//
//         return value;
//     };
//
//     const functionReplacer = (key, value) => {
//         //handle function print with arguments
//         if (typeof value === 'function') {
//             return value.toString();
//         }
//         return value;
//     }
//
//
//     const replacer = replacerFunc();
//
//
//     let json = JSON.stringify(
//         {...gigya},
//         (key, value) => {
//             if (key == "_win") return;
//             if (key == "4_aeFS_UyzRnmP5k_MI59ejg_gig") return;
//
//
//             if (typeof value === 'function') {
//                 return '[FUNCTION]' + nativeFunctionReplacer(key, value);
//             }
//             return replacer(key, value);
//         },
//         '    '
//     );
//
//     //wrap all nesting properties that start with digits with quotes
//     //  json = json.replace(/"(\d+)":/g, '"$1":');
//
//
//     let moduleJavascript = json.replace(
//         /"(\[FUNCTION])?((?:\\.|[^\\"])*)"(:)?/g,
//         (match, group1, group2, group3) => {
//             if (group1) return JSON.parse('"' + group2 + '"');
//             if (group3 && /^\w+$/.test(group2)) return group2 + ':';
//             return match;
//         }
//     );
//     return moduleJavascript;
// }
//
// function  exportGigyaModule(gigya: any) {
//     const modules = Object.entries(gigya).filter(([key, value]) => typeof value === 'object' && !key.startsWith('_'));
//     const mainProperties = Object.entries(gigya).filter(([key, value]) => typeof value!== 'object' && typeof value !== 'function');
//     const mainFunctions = Object.entries(gigya).filter(([key, value]) => typeof value === 'function') as [string, Function][];
//     const internal = Object.entries(gigya).filter(([key, value]) => key.startsWith('_'));
//     console.log(modules);
//     console.log(mainProperties);
//     console.log(mainFunctions);
//     console.log(internal);
//     const moduleJavascript = modules.map(([key, value]) => {   
//         return `export const ${key} = ${toModule(value)};`;
//     }
//     ).join('\n');
//    
//    
//     // const mainPropertiesJavascript = mainProperties.map(([key, value]) => {
//     //     return `export const ${key} = ${JSON.stringify(value)};`;
//     // }
//     // ).join('\n');
//     const mainFunctionsJavascript = mainFunctions.map(([key, value]) => {
//         return `function ${key}() {   }`;
//     }).join('\n');
//
//     const mainPropertiesJavascript = mainProperties.map(([key, value]) => {
//         return `export const ${key} = ${JSON.stringify(value)};`;
//     }
//     ).join('\n');
//     //
//     // const mainJavascript = `export const  main =${toModule({
//     //     ...mainProperties.reduce((acc, [key, value]) => {
//     //         acc[key] = value;
//     //         return acc;
//     //     }, {} as Record<string, any>),
//     //     ...mainFunctions.reduce((acc, [key, value]) => {
//     //         acc[key] = value;
//     //         return acc;
//     //     }, {} as Record<string, any>)
//     // })}`; 
//     //  console.log(mainJavascript);  
//     return `${moduleJavascript}\n${mainPropertiesJavascript}\n${mainFunctionsJavascript}`;
//      // return `${moduleJavascript}\n${mainJavascript}`;
//     // moduleJavascript = 'const mod = ' + moduleJavascript + ';';
//     // moduleJavascript += `mod.__proto__ = {${gigya.__proto__.toString()}};`;
//     // moduleJavascript += 'export default ' + moduleJavascript + ';';
//     // console.log(moduleJavascript);
//     // return moduleJavascript;
// }
//
// // customElements.define('gigya-consumer', GigyaConsumerElement);
//
//
// customElements.define('compiler-element', CompilerElement);
