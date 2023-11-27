import { directive, Directive } from 'lit/directive.js';
import { html } from 'lit';

class IFrameDirective extends Directive {
  // override update(part: ChildPart) {
  //   this.attributeNames = (part._$committedValue as Element).getC
  //   return this.render();
  // }

  render(content: Element): unknown {
    return html` <iframe
      sandbox="allow-same-origin allow-scripts"
      srcdoc="${content.innerHTML}"
    />`;
  }
}

export const iframe = directive(IFrameDirective);

/*
      ${when(this.gigya, (gigya)=> render(html`
      <iframe sandbox="allow-same-origin allow-scripts"  srcdoc="${html`
        <script>
            var gigya = ${gigya};
            ${scriptEL?.innerText}
        </script> 
          `}"
        ></iframe>`, templateData.content), ()=> nothing)}

*/
