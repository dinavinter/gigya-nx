import {transformSync} from "@swc/wasm-web";

export class CompilerElement extends HTMLElement {
    public static observedAttributes = [];

    constructor() {
        super();
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
