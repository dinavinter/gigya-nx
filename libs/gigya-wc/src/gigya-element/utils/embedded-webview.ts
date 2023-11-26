import {html, render} from "lit";
import {unsafeHTML} from "lit/directives/unsafe-html.js";

class EmbeddedWebview extends HTMLElement {
    connectedCallback() {
        console.log('connectedCallback', this.nodeValue, this.innerHTML, this.innerText);
        const shadow = this.attachShadow({ mode: 'closed' });
         render(html`${unsafeHTML(this.innerHTML)}`, shadow);
        // fetch(this.getAttribute('src'))
        //     .then(response => response.html())
        //     .then(html => {
        //         const shadow = this.attachShadow({ mode: 'closed' });
        //         shadow.innerHTML = html;
        //     });
    }
}

window.customElements.define(
    'embedded-webview',
    EmbeddedWebview
);
