import { LitElement, html, css } from "lit";
import { customElement, property } from 'lit/decorators.js';

import { gigyaJsLoader } from "./loader";

@customElement('gigya-store')
class GigyaStore extends LitElement {
  static override styles = css`
    :host {
      display: block;
      padding: 16px;
      color: var(--gigya-loader-text-color, black);
    }
  `;

  @property({ type: String }) state = "idle";

  __update({ value }: { value: string }) {
    this.state = value;
  }

  service: typeof gigyaJsLoader;

  constructor() {
    super();
    this.service = gigyaJsLoader;
    this.service.subscribe(this.__update.bind(this));
  }

  apiKey?: string;
  domain?: string;

  static override get properties() {
    return {
      apiKey: { type: String, reflect: true, attribute: "api-key" },
      domain: { type: String, reflect: true },
      error: { type: String },
      state: { type: String },
    };
  }

  override updated() {
    console.log("updated", this.apiKey, this.domain);
    if (
        this.apiKey &&
        this.domain &&
        this.service.state.context["apiKey"] !== this.apiKey &&
        this.service.state.context.domain !== this.domain
    )
      this.service.send({
        type: "LOAD",
        apiKey: this.apiKey,
        domain: this.domain,
      });
  }
  
  

  override firstUpdated() {
    console.log("firstUpdated", this.apiKey, this.domain);

    if (this.apiKey && this.domain)
      this.service.send({
        type: "LOAD",
        apiKey: this.apiKey,
        domain: this.domain,
      });
  }
  
  

  override render() {
    return html`
      <div>
        <script src="https://cdns.${this.domain}/js/gigya.js?apiKey=${this.apiKey}" ></script>
        <slot></slot>
        
        <slot name=${this.service.state.value}></slot>
      </div>
    `;
  }


}


export { GigyaStore };
