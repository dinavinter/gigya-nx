import {directive, Directive} from "lit/directive.js";
import {html, nothing} from "lit";
import {GigyaScriptService, scriptVal} from "../loader";
import {when} from "lit/directives/when.js";

type Falsy = null | undefined | false | 0 | -0 | 0n | '';

class ReadyTemplateDirective extends Directive {


    render<C extends Falsy>(condition: C, template: string) {
        const templateEL = document.querySelector(template) as HTMLTemplateElement;
        console.log('templateEL', templateEL, condition, template, templateEL.content, templateEL.children);
        if (!templateEL) {
            return nothing;
        }
        console.log(GigyaScriptService.state, (window as any).gigya);
        const scriptEL = templateEL.content.children.namedItem('script') as HTMLScriptElement;
        console.log('scriptEL', scriptEL);


        const renderCondition = condition && scriptEL;
        return html`${when(renderCondition, (_) => scriptVal(scriptEL.innerText), () => nothing)}`;
    }


}

export const readyTemplate = directive(ReadyTemplateDirective);