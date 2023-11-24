import {Directive, directive, Part, PartInfo, DirectiveParameters} from 'lit/directive.js';
import {ChildPart, ElementPart, html, noChange} from "lit";
import {ifDefined} from "lit/directives/if-defined.js";
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import {templateContent} from 'lit/directives/template-content.js';

class ScriptDirective extends Directive {
     i: number = 0;
    async = true;
    defer = true;
    crossOrigin? = 'anonymous';
    previousValues = new WeakMap();
    eventSource?: EventSource;
    public onload: ((ev: Event) => any) | null | undefined;
    onLoadHandler: EventListener = (event: Event) => {
        if (this.onload) {
            this.onload(event);
        }
    };
    onErrorHandler: OnErrorEventHandler = ( ) => {};
     private apiKey: string | undefined;
     private domain: string | undefined;
     constructor(private partInfo: PartInfo) {
         super(partInfo);
         console.log('ScriptDirective', partInfo);
     }
     override update(part: ChildPart, [apiKey, domain]: DirectiveParameters<this>) {
          if(this.apiKey === apiKey && this.domain === domain) {
              return noChange;
          }
            return this.render(apiKey, domain);
     }
    render(apiKey?: string,
           domain = 'eu1.gigya.com' as string | undefined,
    ) {
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
    previousValues = new WeakMap();
    script: HTMLScriptElement | undefined;
    value: string | undefined;
    
    constructor(private partInfo: PartInfo) {
        super(partInfo); 
        console.log('ScriptDirective', partInfo);
    }
    
    override update(part: ChildPart, [value]: DirectiveParameters<this>) {
        console.log('ScriptValueDirective', {part,value, this:this});
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
//
//
// export const script = directive((value:string) => (part:ChildNode) => {
//     // if (!(part instanceof NodePart)) {
//     //     throw new Error('unsafeHTML can only be used in text bindings');
//     // }
//
//     const previousValue = previousValues.get(part);
//     if (previousValue !== undefined &&
//         value === previousValue.value &&
//         part.value === previousValue.script) {
//         return;
//     }
//
//     const script = document.createElement('script');
//     script.textContent = value;
//
//     part.setValue(script);
//
//     previousValues.set(part, { value, script });
// });

export const scriptVal = directive(ScriptValueDirective)
export const script = directive(ScriptDirective)