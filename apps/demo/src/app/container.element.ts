import './app.element.css';
import  '@gigya/store';
export class AppElement extends HTMLElement {
  public static observedAttributes = [];
  string = "hello";
  constructor() {
    super();
    console.log("ctor", import.meta.env.GIGYA_DOMAIN, import.meta.env.GIGYA_API_KEY);

  }
  connectedCallback() {
    console.log("store", import.meta.env.GIGYA_DOMAIN, import.meta.env.GIGYA_API_KEY);

    const {GIGYA_DOMAIN, GIGYA_API_KEY} = import.meta.env;
    
    this.string = `
    <div class="wrapper">
    <gigya-js api-key="${GIGYA_API_KEY}" domain="${GIGYA_DOMAIN}">
          <span slot="loading">Loading...</span>
          <div slot="loaded">
            <h1>
              <span> Gigya script loaded successfully 👋 </span>
            </h1>
           </div>
          <span slot="error">An error occurred while loading the Gigya script.</span>
    </gigya-js>
       
       
    </div>
      `;
  }
}
customElements.define('app-root', AppElement);
