import {MonacoEditor, TsEditor} from "./code-editor.ts";
import './code-editor.ts';



const swc = await import("../../../../node_modules/@swc/wasm-web/wasm-web.js");
await swc.default();

export interface AstEvent  {

    code: string,
    ast: typeof swc.parse,
    print: typeof swc.print


}



export class SwcCompilerElement extends HTMLElement {
    private outputElement: HTMLElement ;

    constructor() {
        super();
        // this.outputElement = document.createElement('wc-monaco-editor')  ;
     }

    static get observedAttributes() {
        return ['code'];
    }

    attributeChangedCallback(name: string, _oldValue: any, newValue: any) {
        if (name === 'code') {
            this.compileCode(newValue);
        }
    }

    connectedCallback() {
        this.setAttribute('class', 'editor');
        this.setAttribute('contenteditable', 'true');
        this.innerHTML = `
        <wc-monaco-editor
        id="swc-output"
           folding
           minimap
           theme="vs-light"
           language="javascript"></wc-monaco-editor>
         `;
        this.outputElement = this.querySelector('#swc-output')!;

    }
    compileCode(code:string) {
        try {
            const compiled = swc.transformSync(code, {
                jsc: {
                    parser: {
                        syntax: "ecmascript",
                        jsx: false,
                    },
                    target: "es2015"
                }
            });
            this.outputElement.setAttribute('value', compiled.code ) ;
            this.dispatchEvent(new CustomEvent('code', {detail: compiled.code}));
            this.dispatchEvent(new CustomEvent<AstEvent>('ast', {detail: {
                code: compiled.code, 
                    ast: swc.parse,
                    print: swc.print
                    
                }}));
            
         } catch (error) {
            this.outputElement.setAttribute('value', `error: ${JSON.stringify(error)}` ) ;

         }
    }
}



customElements.define('swc-compiler', SwcCompilerElement);