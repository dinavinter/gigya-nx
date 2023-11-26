import './app.element.css';
import '@gigya/store';
import initSwc, {transformSync} from "@swc/wasm-web";



export class CompilerElement extends HTMLElement {
    public static observedAttributes = [];
    accessor code: string = "";
    accessor compiled: string = "";
    accessor error: string = "";
    accessor loading: string = "";
    accessor loaded: string = "";
    accessor compiledError: string = "";

    constructor() {
        super();
        this.code = this.innerHTML;
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="wrapper">
            <textarea id="code" style="width: 100%; height: 100px"></textarea>
            <button id="compile">Compile</button>
            <textarea id="result"></textarea>
        </div>
        `;
        const code = this.querySelector<HTMLTextAreaElement>('#code')!;
        const compile = this.querySelector<HTMLButtonElement>('#compile')!;
        const result = this.querySelector<HTMLTextAreaElement>('#result')!;
        compile.addEventListener('click', () => {
            try {
                const compiled = transformSync(code.value, {});
                result.textContent = compiled.code;
            } catch (e: any) {
                result.textContent = e.toString();
            }
        });
    }

}
customElements.define('compiler', CompilerElement);

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
