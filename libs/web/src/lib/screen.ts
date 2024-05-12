import { html, css, LitElement } from 'lit';
import {property, query, state} from 'lit/decorators.js';
import { useGigya } from '@gigya/loader'; // Ensure this import works as expected in Lit
 import {when} from "lit/directives/when.js";

class GigyaScreen extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }
    /* Add any additional CSS needed or remove if using external styles */
  `;

  @property({ type: String })
  screenSet = 'default-screen-set';

  @property({ type: String })
  screen = 'default-screen';

  @property({ type: String })
  container: string | undefined;

  @state()
  containerId: string | undefined;

  @query('template')
  template: HTMLTemplateElement | undefined;

  @state()
  content: DocumentFragment | undefined;

  override firstUpdated() {
    this.containerId = this.container || `screen-container-${this.screenSet}-${this.screen}`;
    this.content = this.template?.content;
    if (this.content) {
      useGigya(gigya => gigya.accounts.showScreenSet({
        screenSet: this.screenSet,
        startScreen: this.screen,
        containerID: this.containerId
      })).catch(console.error);
    }
  }

  override render() {
    return html`
      <div id="${this.containerId}"></div>
      <div id="${this.screenSet}" class="gigya-screen-set" style="display: none;">
        <div id="${this.screen}" class="gigya-screen">
          <!-- This will render the content of the template -->
           ${when(this.content, (content) => html`${content.cloneNode(true)}`)}
         </div>
      </div>
    `;
  }
}

customElements.define('gigya-screen', GigyaScreen);
