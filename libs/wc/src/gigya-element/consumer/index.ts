import {LitElement, html} from 'lit';
import {consume, ContextConsumer} from '@lit/context';
import gigyaContext from '../loader/context';
import type gigya from '@gigya/types/src/index';
import {ifDefined} from 'lit/directives/if-defined.js';
import {customElement, property, queryAssignedElements} from "lit/decorators.js";

@customElement('gigya-consumer')
export class GigyaConsumerElement extends LitElement {
    @consume({context: gigyaContext, subscribe: true})
    @property({type: Object, state: true, reflect: true, attribute: false})
    protected gigya: gigya | undefined;

    private myData = new ContextConsumer(this, {
        context: gigyaContext,
        subscribe: true
    });
    @queryAssignedElements() 
    accessor slotted: HTMLElement[] = [];

    updated(changedProperties: Map<string, any>) {
        console.log('gigya-consumer-updated', this.gigya, changedProperties);
        if (changedProperties.has('gigya')) {
            if (this.gigya) {
                this.slotted.forEach((el) => {
                        el.setAttribute('gigya', '');
                    }
                );
            }
        }
    }
 

    connectedCallback() {
        console.log('gigya-consumer-callback', this.gigya);
        if (this.gigya) {
            this.slotted.forEach((el) => {
                    el.setAttribute('gigya', '');
                }
            );
        }
    }

    render() {
        console.log('gigya-consumer', this.gigya);
        console.log('gigya-consumer', this.myData.value);
        return html`
            <div>
                <slot></slot>
                ${this.gigya ? html`
                    <div>gigya</div>` : html`
                    <div>no gigya</div>`}
                <span>${ifDefined(this.gigya?.apiKey)}</span>
            </div>
        `;
    }
}
declare global {
    interface HTMLElementTagNameMap {
        'gigya-consumer': GigyaConsumerElement;
    }
}