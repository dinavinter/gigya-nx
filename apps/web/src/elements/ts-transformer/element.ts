import {  transform} from './transformer';
// import type {Script} from "@swc/wasm-web";

declare type MonacoEditor = HTMLElement & {
    set value(v: string) ;
}
export class TsTransformerElement extends HTMLElement {
    private outputElement: MonacoEditor;

    constructor() {
        super();
        // this.outputElement = document.createElement('wc-monaco-editor') as MonacoEditor;
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
           id="ts-output"
           folding
           minimap
           theme="vs-light"
           language="javascript"></wc-monaco-editor>
         `;
        this.outputElement = this.querySelector('#ts-output')!;
    }

    async compileCode(code:string) {
        try {
            // const transformer = await loadTransformer();
            const {programTransformer} = await import('./transformer/transform-code.ts');
            const compiled = await transform(programTransformer ,   code)
           
            this.outputElement.value = compiled;
        } catch (error) {
            console.log(error);
            this.outputElement.value = error instanceof Error ? error.message : `${error}`;
        }
    }

   async setAst({code, print, ast}: AstDetails) {
        try {
            // const transformer = await loadTransformer();
            // const {programTransformer: transformCode} = await import('./transformer/transform-code.ts?raw');
            const {transform} = await import('./transformer/index.ts');
            const {programTransformer} = await import('./transformer/transform-code');
            // const {default: code }  =await import ('@gigya/types/src/type-maker.ts?raw');

            // const ts = await import('typescript');
            // const transpile =(c: string)=>  ast(c).then(print).then((c)=>c.code)
            const compiled = await transform(programTransformer ,   code)

            this.outputElement.value = compiled;
        } catch (error) {
            console.log(error);
            this.outputElement.value = JSON.stringify(error, null, 2);
        }
    }
}

customElements.define('ts-transformer', TsTransformerElement);