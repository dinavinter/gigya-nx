import { LitElement, html, css } from "lit";
import { customElement, property,state } from 'lit/decorators.js';
import {script, scriptVal} from "./loader/scriptDirective";
import {asyncReplace} from "lit/directives/async-replace.js";

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

  
  @property({type: String, attribute: 'api-key' }) apiKey: string | undefined =  undefined;

  @property({type: String, attribute: 'domain'}) domain: string | undefined = undefined;

  @property({type: Boolean, attribute: 'debug'}) debug: boolean = true;
  private gigya: any;

  static waitForGigya():Promise<any> {
    return new Promise((resolve) => {
      const interval= setInterval(()=>{
        const gigya = (window as any).gigya as Gigya;
        if(gigya && gigya.thisScript ){
          console.log('Gigya loaded 🥳');
          clearInterval(interval);
          resolve(gigya);
        }}, 100);
    });
  }

  async *states(){
    yield 'loading'
    this.gigya = await GigyaStore.waitForGigya();
    yield 'ready'; 
  }

  @state()
  private state = this.states();
  
  override render() {
    console.log('render', this.apiKey, this.domain);
 
    return html` 
        <slot ></slot> 
        ${asyncReplace(this.state,state=> html`<slot name="${state}"></slot>`)}
        ${script(this.apiKey, this.domain)}
    `;
  } 
}


export { GigyaStore };
