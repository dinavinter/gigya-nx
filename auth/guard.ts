import {c, html, render, useEffect, useHost, useRef, useState} from "atomico";
import {authService} from "./service";
import {useChildNodes} from "@atomico/hooks/use-child-nodes";
import {useRender, useSlot} from "@atomico/hooks";
import '../screen-set'
import {GigyaScreen} from "../screen-set";
// export const authGuard = c(function () {
//   const [authenticated, setAuthenticated] = useState(false);
//   useEffect(() => {
//     authService.subscribe((state) => {
//       setAuthenticated(state.matches('authenticated') || state.matches('authenticated.*'))
//     })
//   })
//   return html`<host style="display:  ${authenticated ? "none" :"contents" }" />`
//
// })
//
// customElements.define('guard-authenticated', authGuard)

// function render({content , visible}){
//   if(visible){
//     return html`<${content} cloneNode />`
//   }
//   return html`<div style="display: none"></div>`
//
// }
//
// const notAuthenticatedGuard = c(function () {
//   const template = useChildNodes().find((node) => node.nodeName == "TEMPLATE") as HTMLTemplateElement;;
//   const empty =  document.createElement('div');
//   const [content, setContent] = useState<Node>(empty);
//
//
//   const [visible, setVisible] = useState(false);
//   useEffect(() => {
//     authService.subscribe((state) => {
//        if(state.matches('not-authenticated')){
//          setVisible(true)
//        }
//        if(state.matches('authenticated')){
//          setVisible(false)
//        }
//     })
//   })
//
//   useEffect(() => {
//     if (template?.content ) {
//       setContent(template.content.cloneNode(true))
//     }
//
//   }, [template?.content])
//
//
//
//   return html`<host>
//     <${render} content=${content} visible=${visible} />
//   </host>`
//
// })

// customElements.define('guard-not-authenticated', notAuthenticatedGuard)


const authenticatedGuard = c(function () {
  const slotRef = useRef();
  const slotted = useSlot(slotRef);
  const ref = useRef();
  const [state, setState] = useState("loading");
  const templateRef = useRef();
  const host = useHost();
  useEffect(() => {
    authService.subscribe((state) => {
      if (state.matches('not-authenticated')) {
        setState("not-authenticated")
      }
      if (state.matches('authenticated')) {
        setState("authenticated")
      }
    })
  })
  useRender(() => {
    // return html`<div ref=${ref} />`
    return html`${slotted.map((node) => html`<${node}  cloneNode open=${true} slot="" />`)}`


  })

  // useEffect(() => {
  //   if (slotted && ref.current) {
  //     ref.current.innerHTML = "";
  //      slotted.forEach((node) => {
  //         ref.current.appendChild(node.cloneNode(true))
  //
  //       })
  //
  //   }
  // },[slotted, ref.current])


  // useEffect(() => {
  //   if (slotted && host.current) {
  //     // ref.current.innerHTML = "";
  //     const documentFragment=document.createElement("div");
  //     // render(html`${slotted.map((node) => node.cloneNode(true)).map((node) => html`<${node} />`)}`,
  //     //   documentFragment.children)
  //     slotted.forEach((node) => {
  //
  //       documentFragment.appendChild(node.cloneNode(true))
  //     })
  //
  //     ref.current.innerHTML= documentFragment.innerHTML
  //
  //   }
  // },[slotted, host.current])
  return html`<host shadowDom>
      <slot />
      <template ref="${templateRef}" >
        <slot ref=${slotRef} name=${state}/>
      </template>
    </host>`

})

customElements.define('auth-guard', authenticatedGuard)
