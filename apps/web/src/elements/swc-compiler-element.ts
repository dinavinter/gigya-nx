const swc = await import("../../../../node_modules/@swc/wasm-web/wasm-web.js");
await swc.default();

export class SwcCompilerElement extends HTMLElement {
    private outputElement: HTMLPreElement;

    constructor() {
        super();
        this.outputElement = document.createElement('pre');
    }

    static get observedAttributes() {
        return ['code'];
    }

    attributeChangedCallback(name: string, _oldValue: any, newValue: any) {
        if (name === 'code') {
            this.compileCode(newValue);
        }
    }

    connectedCallback() {
        this.setAttribute('class', 'editor');
        this.setAttribute('contenteditable', 'true');
        this.innerHTML = `
            <pre contenteditable id="swc-output"  ></pre>
        `;
        this.outputElement = this.querySelector<HTMLPreElement>('#swc-output')!;
    }

    compileCode(code:string) {
        try {
            const compiled = swc.transformSync(code, {
                jsc: {
                    parser: {
                        syntax: "ecmascript",
                        jsx: false,
                    },
                    target: "es2015"
                }
            });
            this.outputElement.textContent = compiled.code;
        } catch (error) {
            this.outputElement.textContent = error instanceof Error ? error.message : `${error}`;
        }
    }
}

customElements.define('swc-compiler', SwcCompilerElement);