import { css, html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { GigyaScriptService, GigyaScriptState, script} from '../loader';
import { asyncReplace } from 'lit/directives/async-replace.js';
import { Gigya } from '../types'

import { when } from 'lit/directives/when.js';
import {AuthState} from "./auth";

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
        this.gigya = state.context['gigya'];
      }
    });
  }

  @property({ type: String, attribute: 'api-key' }) apiKey: string | undefined =
    undefined;

  @property({ type: String, attribute: 'domain' }) domain: string | undefined =
    'gigya.com';

  @property({ type: Boolean, attribute: 'debug' }) debug = true;

  @property({ type: String, attribute: 'cname' }) cname: string | undefined =
    undefined;

  @state()
  private gigya: Gigya | undefined;

  @state()
  private state = GigyaScriptState();

  @state()
  private authState = AuthState();

  @query('template')
  public accessor template: HTMLTemplateElement[] = [];
  override render() {
    console.log('render', this.apiKey, this.domain, this.template);
    return html` ${this.readySlot()} ${this.stateSlot()} ${this.authStateSlot()} ${this.script()} `;
  }

  private readySlot() {
    return html` ${when(this.gigya, (_) => html`<slot></slot>`)}`;
  }

  private stateSlot() {
    return html` ${asyncReplace(
      this.state,
      (state) => html`<slot name="${state}"></slot>`
    )}`;
  }
  private authStateSlot() {
    return html` ${asyncReplace(
      this.authState,
      (state) => html`<slot name="${state}"></slot>`
    )}`;
  }
  private script() {
    return html`${script(this.apiKey, this.domain, this.cname)}`;
  }
}

export { GigyaStore };
