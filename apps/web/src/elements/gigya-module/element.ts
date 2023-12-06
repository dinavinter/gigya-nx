// import {GigyaConsumerElement} from "@gigya/wc/src/gigya-element/consumer";

import {exportGigyaModule} from "./parser";
import {GigyaConsumerElement} from "@gigya/wc/src/gigya-element";

export class GigyaModuleElement extends GigyaConsumerElement {
    public static observedAttributes = ["oncode" , "gigya"];

    public initialized = false;
    private moduleJavascript: string | null = null;
    constructor() {
        super();
        this.generateCode.bind(this);
        
    }


    broadcastMessage(code: string) {
        const customEvent = new CustomEvent('code', {detail: code});
        this.dispatchEvent(customEvent);
    }
    
    generateCode() {
        this.textContent= this.moduleJavascript = this.moduleJavascript ?? exportGigyaModule(this.gigya);
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
         

 
    }

     
}



customElements.define('gigya-module', GigyaModuleElement);

 