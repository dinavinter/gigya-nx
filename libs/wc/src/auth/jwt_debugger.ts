import type { OidcJwt, Jwt } from './jwt';
import {c} from "atomico";

export function dumpJwt({ jwt }: { jwt: OidcJwt }) {
  return (
    (jwt &&
      ` <div class="vcontainer" >
      ${welcome(jwt)}
    ${claims(jwt)}
    ${raw(jwt)}
    </div>`) ||
    `no data`
  );
}
export const DumpJwt = c(dumpJwt, {
  props: {
    jwt: {
      type: Object,
      value: undefined as unknown as OidcJwt,
    }
  }
});

customElements.define("jwt-debugger", DumpJwt);


export function welcome({ claims: { name, picture } }: OidcJwt) {
  return `
  <div >
  <h1 class="float-left">Hello <b>${name}!</b>
  <img src="${picture}" alt="Avatar" style="padding: 0 2rem 0 2rem; border-radius: 50%;"> </h1>
  <h3 class="row float-left">Looks like you have authenticated yourself!</h3>
<div>
  `;
}

export function raw({ raw }: Jwt) {
  return ` <div>
  <p><b>Your raw token is:</b>
  <blockquote><em id="raw-token">${raw}</em></blockquote></p>
 <p>You can debug it at <b><a href="https://jwt.io?#debugger-io?token=${raw}">jwt.io</a></b> or <b><a href="https://jwt.ms/#id_token=${raw}">jwt.ms</a></b>.</p>
 <div>`;
}

export function claims({ claims }: Jwt) {
  return `
  <div>
   <p class="row float-left"><b>Here is the info I recovered about your profile in your Google account:</b></p>
  <table id="token-table">
  <thead>
    <tr>
      <th>Key</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    ${Object.keys(claims)
    .map(
      (key) => `<tr>
    <td>${key}</td>
    <td>${claims[key]}</td>
  </tr>`
    )
    .join(' ')}
  </tbody>
  </table>
  </div>
  `;
}
