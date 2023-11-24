import {Directive, directive, DirectiveParameters} from 'lit/directive.js';
import {ChildPart, noChange} from "lit";
class ScriptDirective extends Directive {
    i: number = 0;
    async = true;
    defer = true;
    crossOrigin? = 'anonymous';
    public onload: ((ev: Event) => any) | null | undefined;
    onLoadHandler: EventListener = (event: Event) => {
        if (this.onload) {
            this.onload(event);
        }
    };
    onErrorHandler: OnErrorEventHandler = ( ) => {};
     private apiKey: string | undefined;
     private domain: string | undefined; 
     override update(_: ChildPart, [apiKey, domain]: DirectiveParameters<this>) {
         if (this.apiKey === apiKey && this.domain === domain) {
             return noChange;
         }
         return this.render(apiKey, domain);
     }
    render(apiKey?: string, domain = 'eu1.gigya.com' as string | undefined,) {
        console.log('ScriptDirective render', apiKey, domain); 
        this.apiKey = apiKey;
        this.domain = domain;  
        const script = document.createElement('script');
        script.id = `gigya-script-${this.i}`;
        script.onload = this.onLoadHandler.bind(this);
        script.onerror = this.onErrorHandler?.bind(this) || null;
        script.async = this.async;
        script.defer = this.defer;
        script.src = `https://cdns.${domain}/js/gigya.js?apikey=${apiKey}`;
        
        return script;

    }

}


 
class ScriptValueDirective extends Directive {
    script: HTMLScriptElement | undefined;
    value: string | undefined;
    
    override update(_: ChildPart, [value]: DirectiveParameters<this>) {
        if(this.value === value ) {
            return noChange;
        } 
        return this.render(value);
    }

    render(value:string) {
        const script = document.createElement('script');
        script.textContent = value;
        this.script= script;
        this.value = value;
        return script;
    }
} 
export const scriptVal = directive(ScriptValueDirective)
export const script = directive(ScriptDirective)