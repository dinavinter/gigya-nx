import { css, html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import {gigyaContext, GigyaScriptService, GigyaScriptState, script} from './loader';
import { asyncReplace } from 'lit/directives/async-replace.js';
import type gigya from '@gigya/types/src/index';

import { readyTemplate } from './directives';
import {provide} from "@lit/context";
import {GigyaConsumerElement} from "./consumer";
  
import  './consumer/index';
import '../my-element'

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
export class GigyaStore extends LitElement {
  static override shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  static override styles = css`
    :host {
      display: block;
      color: var(--gigya-loader-text-color, black);
    }
  `;

  service = GigyaScriptService;

  constructor() {
    super();
    this.service.subscribe((state) => {
      console.log('GigyaScriptService', state.value);
      if (state.matches('ready')) {
        this.gigya = state.context.gigya;
        this._dispatchReady();
      }
    });
  }

  @property({ type: String, attribute: 'api-key' }) apiKey: string | undefined =
    undefined;

  @property({ type: String, attribute: 'domain' }) domain: string | undefined =
    undefined;

  @property({ type: Boolean, attribute: 'debug' }) debug: boolean = true;

  @state()
  @provide({context: gigyaContext})
  private gigya: gigya | undefined = undefined;

  @state()
  private state = GigyaScriptState();

  @query('template')
  public accessor template: HTMLTemplateElement[] = [];

  _dispatchReady() {
    let ready = new CustomEvent('gigya-js-ready', {
      detail: { message: 'loaded', gigya: this.gigya },
      bubbles: true,
      composed: true });
    this.dispatchEvent(ready);
  }


  override render() {
    console.log('render', this.apiKey, this.domain, this.template);
    return html`
      ${this.stateSlot()} ${this.templateContent()} ${this.script()}
    `;
  }

  private stateSlot() {
    return html` <slot></slot>
      ${asyncReplace(
        this.state,
        (state) => html`<slot name="${state}"></slot>`
      )}`;
  }
  private templateContent() {
    return html`${readyTemplate(this.gigya, 'template#ready')}`;
  }
  private script() {
    return html`${script(this.apiKey, this.domain)}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'gigya-js': GigyaStore;
    'gigya-consumer': GigyaConsumerElement;
  }
}
export {GigyaConsumerElement} from './consumer';
