import {c, useEffect, useState} from "atomico";
import {html} from "atomico/html";
import {gigyaService} from "./service";




export const state = c(function () {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    gigyaService.subscribe((state) => {
      setAuthenticated(state.matches('authenticated'))
    })
  })

  return (
    html`
      <host shadowDom>
         <slot name=${authenticated ? "authenticated" : "not-authenticated" }></slot>
      </host>`
  )
})


