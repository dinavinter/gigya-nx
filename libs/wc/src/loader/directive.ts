import {Directive, directive, DirectiveParameters} from 'lit/directive.js';
import {ChildPart, noChange, nothing} from "lit";
class ScriptDirective extends Directive {
    i = 0;
    async = false;
    defer = false;
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
     private cname: string | undefined;
     override update(_: ChildPart, [apiKey, domain, cname]: DirectiveParameters<this>) {
         if (this.apiKey === apiKey && this.domain === domain && this.cname === cname) {
             return noChange;
         }
         return this.render(apiKey, domain, cname);
     }
    render(apiKey?: string, domain = 'eu1.gigya.com' as string | undefined,cname= undefined as string | undefined) {
        console.log('ScriptDirective render', apiKey, domain);
        this.apiKey = apiKey;
        this.domain = domain;
        this.cname = cname;
        const script = document.createElement('script');
        script.id = `gigya-script`;
        // script.onload = this.onLoadHandler.bind(this);
        // script.onerror = this.onErrorHandler?.bind(this) || null;
        script.async = this.async;
        script.defer = this.defer;

        const cdnDomain= `${cname? cname : `cdns.${domain}`}`;
        script.src = `https://${cdnDomain}/js/gigya.js?apiKey=${apiKey}&pretty=true&debug=true`;
        document.head.appendChild(script);
        return nothing;

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
        console.log('ScriptValueDirective render', value);
        const script = document.createElement('script');
        script.textContent = value;
        this.script= script;
        this.value = value;
        return script;
    }
}
export const scriptVal = directive(ScriptValueDirective)
export const script = directive(ScriptDirective)
