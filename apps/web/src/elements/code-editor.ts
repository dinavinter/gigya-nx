// create a new html element to contain the code editor with wc-monaco-editor
//
export declare type MonacoEditor = HTMLElement & {
    set value(v: string) ;
}
export class TsEditor extends HTMLElement {
    private outputElement: MonacoEditor ;
    static get observedAttributes() {
        return ['value'];
    }

    constructor() {
        super();
        this.outputElement = document.createElement('wc-monaco-editor') as MonacoEditor;
         
     }
    attributeChangedCallback(name: string, _oldValue: any, newValue: any) {
        if (name === 'value') {
            console.log('code changed', newValue);
            this.outputElement.setAttribute('value', newValue);
        }
    }
     set value(code: string) {
        this.outputElement.setAttribute('value', code);
    }

    connectedCallback() {
        this.setAttribute('class', 'editor');
        this.setAttribute('contenteditable', 'true');
        this.innerHTML = `
        <wc-monaco-editor
        id="output"
           folding
           minimap
           theme="vs-light"
           language="javascript"></wc-monaco-editor>`
        this.outputElement = this.querySelector('#output')!;
    }
     
}

customElements.define('ts-editor', TsEditor);