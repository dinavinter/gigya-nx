import {css, html, LitElement, nothing} from "lit";
import {customElement, property, state,query} from 'lit/decorators.js';
import {script, scriptVal} from "./loader/scriptDirective";
import {asyncReplace} from "lit/directives/async-replace.js";
import {GigyaScriptService, GigyaScriptState} from "./script-observer";
import {when} from "lit/directives/when.js";
import {templateContent} from "lit/directives/template-content.js";
import {directive, Directive, DirectiveParameters} from "lit/directive.js";
// add summary and example
// add description
// A wrapper for the gigya script, which loads the script and provides a state for the script.
// The state can be used to show a loading indicator, or to show content when the script is ready.
// @slot loading - The content to show while the script is loading.
// @slot ready - The content to show when the script is loaded.
// @slot error - The content to show when the script failed to load.
// @fires gigya-js-loaded - Fired when the script is loaded.
// @fires gigya-js-error - Fired when the script failed to load
// @fires gigya-js-ready - Fired when the script is ready.
// example <gigya-js api-key="3_abcdefg" domain="eu1.gigya.com">
//           <span slot="loading">Loading...</span>
//           <div slot="ready">
//             <h1>
//               <span> Gigya script loaded successfully 👋 </span>
//             </h1>
//            </div>
//           <span slot="error">An error occurred while loading the Gigya script.</span>
//         </gigya-js>
 
@customElement('gigya-js')
class GigyaStore extends LitElement {
  static override shadowRootOptions = {
    ...LitElement.shadowRootOptions};
 
  static override styles = css`
    :host {
      display: block;
      padding: 16px;
      color: var(--gigya-loader-text-color, black);
    }`; 

  service = GigyaScriptService;
  
  constructor() {
    super();
    this.service.subscribe((state) => {
      console.log('GigyaScriptService', state.value);
      if(state.matches('ready')){
         this.gigya = state.context["gigya"];
    }});
  }
  
  @property({type: String, attribute: 'api-key' }) apiKey: string | undefined =  undefined;

  @property({type: String, attribute: 'domain'}) domain: string | undefined = undefined;

  @property({type: Boolean, attribute: 'debug'}) debug: boolean = true;
  
  @state() 
  private gigya: any; 

  @state()
  private state = GigyaScriptState();
  
    @state()
    private ready  = false;
    
 
  @query('template')
  public accessor template: HTMLTemplateElement[] = [];
  override render() {
    console.log('render', this.apiKey, this.domain, this.template);
   
    return html`
      <slot ></slot>
      ${asyncReplace(this.state,state=> html`<slot name="${state}"></slot>`)}
      ${readyTemplate(this.gigya ,  'template#ready') }
      ${script(this.apiKey, this.domain)}

    `;
  } 
}


type Falsy = null | undefined | false | 0 | -0 | 0n | '';

class ReadyTemplateDirective extends Directive {
  
  
  render<C extends Falsy>( condition: C, template:string )  {
    const templateEL= document.querySelector(template) as HTMLTemplateElement;
    console.log('templateEL', templateEL, condition, template, templateEL.content, templateEL.children);
    if(!templateEL){
      return nothing;
    }
    console.log(GigyaScriptService.state, (window as any).gigya);
    const scriptEL = templateEL.content.children.namedItem('script')  as HTMLScriptElement;
    console.log('scriptEL', scriptEL );


    const renderCondition = condition && scriptEL ;
    return html`${when(renderCondition, (t)=> scriptVal(scriptEL.innerText), ()=> nothing)}`;
   }
   

}

export const readyTemplate = directive(ReadyTemplateDirective);
  


export { GigyaStore };
