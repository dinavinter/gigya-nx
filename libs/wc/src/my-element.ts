import { LitElement, css, html } from 'lit';
import {customElement, property} from 'lit/decorators.js';
 import {GigyaConsumerElement, GigyaStore} from './gigya-element';
import {consume} from "@lit/context";
import gigyaContext from "./gigya-element/loader/context.ts";
import {ifDefined} from "lit/directives/if-defined.js";
import type gigya from '@gigya/types/src/index';
import {ContextConsumer} from "@lit/context";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  @consume({context: gigyaContext, subscribe: true})
  @property({type: Object, state: true, attribute: false, reflect: true})
  protected gigya:gigya  | undefined;

  private myData = new ContextConsumer(this, {
    context: gigyaContext,
    subscribe: true
  });


  render() {
    console.log('gigya-consumer-my-elm', this.gigya);  
    return html`
      <div>
        ${this.myData.value}
        <span>${ifDefined(this.gigya?.apiKey)}</span>

        <p class="read-the-docs">${this.docsHint}</p>
    `;
  }

  

  static styles = css`
    :host {
      max-width: 400px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    ::slotted(h1) {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
    'gigya-js': GigyaStore;
    'gigya-consumer': GigyaConsumerElement;
  }
}
