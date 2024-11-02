import {c, useEffect, useState} from "atomico";
import {gigyaService} from "./service";
import {html} from "atomico/types/html";

export const authGuard = c(function () {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    gigyaService.subscribe((state) => {
      setAuthenticated(state.matches('authenticated'))
    })
  })
  return html`<host style="display:  ${authenticated ? "none" :"contents" }" />`

})

customElements.define('guard-authenticated', authGuard)

const notAuthenticatedGuard = c(function () {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    gigyaService.subscribe((state) => {
      setAuthenticated(state.matches('authenticated'))
    })
  })
  return html`<host style="display:  ${authenticated ? "contents" :"none" }" />`

})

customElements.define('guard-not-authenticated', notAuthenticatedGuard)
