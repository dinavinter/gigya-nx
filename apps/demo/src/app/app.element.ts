import './app.element.css';
// import '@gigya/store';
import initSwc, {transformSync} from "@swc/wasm-web";
import './compiler-element';


export class AppElement extends HTMLElement {
    public static observedAttributes = [];
    initialized = false;
    string = "hello";


    compile() {
        if (!this.initialized) {
            return;
        }
        const result = transformSync(`console.log('hello')`, {});
        console.log(result);
         
    }

    connectedCallback() {
        console.log("store", import.meta.env.GIGYA_DOMAIN, import.meta.env.GIGYA_API_KEY);

        initSwc().then(() => {
            this.initialized = true;
        });

        this.innerHTML = `
         <div class="main">
              <compiler style="width: 100%; height: 100px"></compiler>
          </div>
      `;
    }
}

customElements.define('app-root', AppElement);
