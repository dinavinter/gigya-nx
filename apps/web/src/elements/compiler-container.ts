 import './gigya-module/element'
 import './swc-compiler-element'
 import './ts-transformer/element'
 import {type GigyaModuleElement} from "./gigya-module/element";
 import {AstDetails, type SwcCompilerElement} from "./swc-compiler-element.ts";
 import {TsTransformerElement} from "./ts-transformer/element.ts";
export class ModuleCompilerContainer extends HTMLElement {
    private gigyaModuleElement: GigyaModuleElement | undefined;
 
    constructor() {
        super();
     }

    connectedCallback() {
        this.innerHTML = `  
            <section id="page">
            <header> 
               <h1>Gigya Compiler</h1> 
               <button id="export-button" onclick="dispatchEvent(
                  new CustomEvent('export-gigya'))" >Export Gigya Module</button>
               
             </header> 
           
           <main>
             <gigya-module ></gigya-module>
            <swc-compiler></swc-compiler>
            <ts-transformer></ts-transformer>
           </main>
    
          <footer contenteditable>Footer Content —  .com 2020</footer>
        </section>
 
    `;
        this.gigyaModuleElement = this.querySelector<GigyaModuleElement>('gigya-module')!;
        const swcCompilerElement = this.querySelector<SwcCompilerElement>('swc-compiler')!;
        const tsTransformerElement = this.querySelector<TsTransformerElement>('ts-transformer')!;
        const exportButton = this.querySelector<HTMLButtonElement>('#export-button')!;
        // const transformButton = this.querySelector<HTMLButtonElement>('#transform-button')!;
        
        exportButton.addEventListener('click', () => {
            this.gigyaModuleElement?.generateCode();
        });
        
         //when code is generated, pass it to the swc compiler
        this.gigyaModuleElement.addEventListener('code', (event: Event) => {
            swcCompilerElement.setAttribute('code', (event as CustomEvent).detail);
        });
        
        // swcCompilerElement.addEventListener('code', (event: Event) => {
        //     tsTransformerElement.setAttribute('code', (event as CustomEvent).detail);
        // });
        swcCompilerElement.addEventListener('ast', (event: Event) => {
            tsTransformerElement?.setAst((event as CustomEvent<AstDetails>).detail);
        });
     
        
        
    }
}

customElements.define('compiler-container', ModuleCompilerContainer);
