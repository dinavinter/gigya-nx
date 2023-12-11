// import {GigyaConsumerElement} from "@gigya/wc/src/gigya-element/consumer";

import {exportGigyaModule} from "./parser";
import {GigyaConsumerElement} from "@gigya/wc/src/gigya-element";
import {waitForGigya} from "@gigya/wc/src/gigya-element/loader";

export class GigyaModuleElement extends GigyaConsumerElement {
    public static observedAttributes = ["oncode" , "gigya"];

    public initialized = false;
    private moduleJavascript: string | null = null;
    private outputElement: Element;
    constructor() {
        super();
        this.generateCode.bind(this);
        waitForGigya().then((g)=>this.gigya =g).then(()=>this.generateCode());
        
    }


    broadcastMessage(code: string) {
        const customEvent = new CustomEvent('code', {detail: code});
        this.dispatchEvent(customEvent);
    }
    
    generateCode() {
        this.outputElement.setAttribute('value', this.moduleJavascript = this.moduleJavascript ?? exportGigyaModule(this.gigya));
        this.broadcastMessage(this.moduleJavascript);
    }
    
    set oncode(callback: (event: CustomEvent) => void) {
        this.addEventListener('code',e=>callback(e as CustomEvent));
    }
    
    get oncode() {
        return this.oncode;
    }

    connectedCallback() {
        this.gigya = this.gigya ||  (window as unknown as any).gigya as any;
        console.log(this.gigya);
        this.setAttribute('contenteditable', 'true');
        this.addEventListener('export-gigya',  this.generateCode.bind(this));
        this.setAttribute('class', 'editor');
        this.innerHTML = `
        <wc-monaco-editor
        id="module"
           folding
           minimap
           theme="vs-light"
           language="javascript"></wc-monaco-editor>
         `;
        this.outputElement = this.querySelector('#module')!;



    }

     
}



customElements.define('gigya-module', GigyaModuleElement);

 