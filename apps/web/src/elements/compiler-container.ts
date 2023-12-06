 import './gigya-module/element'
 import './swc-compiler-element'
 import {type GigyaModuleElement} from "./gigya-module/element";
 import {type SwcCompilerElement} from "./swc-compiler-element.ts";
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
           </main>
    
          <footer contenteditable>Footer Content —  .com 2020</footer>
        </section>
 
    `;
        this.gigyaModuleElement = this.querySelector<GigyaModuleElement>('gigya-module')!;
        const swcCompilerElement = this.querySelector<SwcCompilerElement>('swc-compiler')!;
        const exportButton = this.querySelector<HTMLButtonElement>('#export-button')!;
        // const transformButton = this.querySelector<HTMLButtonElement>('#transform-button')!;
        
        exportButton.addEventListener('click', () => {
            this.gigyaModuleElement?.generateCode();
        });
        
         //when code is generated, pass it to the swc compiler
        this.gigyaModuleElement.addEventListener('code', (event: Event) => {
            swcCompilerElement.setAttribute('code', (event as CustomEvent).detail);
        });
        
     
        
        
    }
}

customElements.define('compiler-container', ModuleCompilerContainer);
