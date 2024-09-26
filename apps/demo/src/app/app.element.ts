import './app.element.css';
import '@gigya/web';
import {useGigya} from '@gigya/loader';
import {Communications} from "@gigya/types";
import {IFormResponse} from "../../../../libs/types/src/defs/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin";

const env = import.meta.env


async function tokenApi(uid:string) {
  return fetch(`https://accounts.${env.GIGYA_DOMAIN}/accounts.token`, {
    body: new URLSearchParams({
      uid: uid,
      method: 'otp',
      channel: 'email',
      resource: "urn:gigya:confirm_communication",
      apiKey: env.GIGYA_API_KEY,
      userKey: env.GIGYA_APP_KEY,
      secret: env.GIGYA_APP_SECRET,
      response_type: 'token',
      httpStatusCodes: "true",
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    mode: 'cors'
  })
}
async function jsonApi(api:()=> Promise<Response>):Promise<any> {
  try {
    const r = await api();
    if (r.status > 400) {
      console.error(`Failed to call api token ${r.status} ${r.statusText} ${await r.text()} ${api}`);
    }
    return await r.json();
  } catch (message) {
     console.error(message);
     return {
       errCode: 5000,
       errMessage: message
     };
  }
}


async function confirmApi(access_token: string, pendingEmailVerification: string[]) {
  return await fetch(`https://accounts.${env.GIGYA_DOMAIN}/accounts.communication.confirm`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${access_token}`
    },
    body: new URLSearchParams({
      apiKey: env.GIGYA_API_KEY,
      topics: pendingEmailVerification.join(',')
    }),
    mode: 'cors'
  });
}



async function externalDoi() {
  const {UID, communications} = await promisify(gigya.accounts.getAccountInfo, {includeCommunications: "all"}) as {
    UID: string,
    communications: Communications
  };
  const pendingEmailVerification = getPendingEmailVerification(communications);
  if (pendingEmailVerification.length > 0) {
    const {access_token} = await jsonApi(tokenApi.bind(null, UID)); ;
    await showExternalVerificationPopup(access_token);
    await showConfirmationDebug(access_token,pendingEmailVerification);
  }

}


function getPendingEmailVerification(communications: Communications) {
  console.log('communications', Object.entries(communications));
  return Object.entries(communications)
    .filter(([_, value]) => value.doubleOptIn?.status === 'pending')
    .map(([key, _]) => key);
}


export class AppElement extends HTMLElement {
  constructor() {
    super();
    console.log(
      'screen:ctor',
      import.meta.env.GIGYA_DOMAIN,
      import.meta.env.GIGYA_API_KEY,
      window.gigya
    );
    const button = this.appendChild(document.createElement('button'));
    button.innerHTML = 'Reload...';

    button.onclick = () => {
      console.debug(
        'screen:button',
        import.meta.env.GIGYA_DOMAIN,
        import.meta.env.GIGYA_API_KEY,
        window.gigya
      );
      window.gigya?.accounts.showScreenSet({
        screenSet: 'Default-RegistrationLogin',
        startScreen: 'gigya-register-screen',
        containerID: 'screen-container',
      });
    };

    const div = this.appendChild(document.createElement('div'));
    div.id = 'screen-container';


  }

  connectedCallback() {

    useGigya(gigya => {
        console.log('app:loaded  🥳', gigya);
        gigya.accounts.session.verify({
          callback: (response) => {
            console.log('verify', response);
            if (response.errorCode === 0) {
              gigya.accounts.showScreenSet({
                screenSet: 'Default-ProfileUpdate',
                containerID: 'screen-container',
                onBeforeScreenLoad: console.log,
                onSubmit: console.log,
                onAfterSubmit: externalDoi,
                onBeforeSubmit: console.log,
                onAfterScreenLoad: console.log
              })
            } else {
              gigya?.accounts.showScreenSet({
                  screenSet: 'Default-RegistrationLogin',
                  startScreen: 'gigya-register-screen',
                  containerID: 'screen-container',
                  onBeforeScreenLoad: console.log,
                  onAfterSubmit: externalDoi
                }
              );
            }

          }
        })
      }
    ).catch(console.error);

    console.debug(
      'screen:connectedCallback',
      import.meta.env.GIGYA_DOMAIN,
      import.meta.env.GIGYA_API_KEY,
      this.parentNode
    );

  }

  disconnectedCallback() {
    console.debug(
      'screen:disconnectedCallback',
      import.meta.env.GIGYA_DOMAIN,
      import.meta.env.GIGYA_API_KEY,
    );
  }
}


export function promisify<T, TResponse extends T & IFormResponse = T & IFormResponse>(method: Function, params: any = {}): Promise<T> {
  return new Promise<T>((resolve) => {
    method({
      ...params,
      callback: (response: TResponse) => {
        resolve(response);
      }
    })
  });
}

customElements.define('registration-screen', AppElement);

function showExternalVerificationPopup(access_token: string) {

   const popup = document.createElement('div');

  popup.innerHTML = `
    <dialog id="favDialog" class="absolute top-0 right-0 p-2 font-sans text-sm font-normal break-words whitespace-normal bg-white border rounded-lg shadow-lg w-max border-blue-gray-50 text-blue-gray-500 shadow-blue-gray-500/10 focus:outline-none max-h-[90vh] max-w-[75%]">
      <form id="form"  method="dialog" class="*:m-4 *:p-4">
       <button type="submit" class="flex items-center justify-center w-6 h-6 text-blue-gray-500 bg-white rounded-full shadow-lg cursor-pointer hover:bg-blue-gray-50" onclick="document.querySelector(#popover).hidePopover()">
        Verify
      </button>
        <header>This is an example of a custom verification process</header>
         <pre class="overflow-y-scroll open:max-h-52 max-h-[20vh]" >${tokenApi}</pre>
         <pre > <a href="https://jwt.io?token=${access_token}"><img alt="view on jwt.io" src="https://jwt.io/img/badge.svg"/> </a>${access_token}</pre>
      </form>
      </dialog>
`;

   document.body.appendChild(popup);
  const dialog = document.getElementById("favDialog") as HTMLDialogElement;
  dialog.showModal();
  return new Promise((resolve) => {
    dialog.addEventListener('close', e=>{
      console.log('close', e);
      resolve(e);
    });
    dialog.addEventListener('submit', e=>{
      console.log('submit', e);
      resolve(e);
    })

  })
}
async function showConfirmationDebug(access_token: string,  pendingEmailVerification: string[]) {

  const popup = document.createElement('div');
  const confirmResponse = await jsonApi(confirmApi.bind(null, access_token, pendingEmailVerification));

  const {UID, communications} = await promisify(gigya.accounts.getAccountInfo, {includeCommunications: "all"}) as {
    UID: string,
    communications: Communications
  };

  popup.innerHTML = `
    <dialog id="confirmDialog" class="absolute top-0 right-0 p-2 font-sans text-sm font-normal break-words whitespace-normal bg-white border rounded-lg shadow-lg w-max border-blue-gray-50 text-blue-gray-500 shadow-blue-gray-500/10 focus:outline-none max-h-[90vh] max-w-[75%]">
      <form  method="dialog" class="*:m-4 *:p-4">
       <button type="submit" class="flex items-center justify-center w-6 h-6 text-blue-gray-500 bg-white rounded-full shadow-lg cursor-pointer hover:bg-blue-gray-50" onclick="document.querySelector(#popover).hidePopover()">
        Close
      </button>
        <header>Confirm API</header>
         <pre class="overflow-y-scroll open:max-h-52 max-h-[20vh]" >${confirmApi}</pre>
         <label>Confirm Response</label>
         <pre >${JSON.stringify(confirmResponse)}</pre>
         <label>Account Info</label>
         <pre >${JSON.stringify({UID, communications})}</pre>
         <pre > <a href="https://jwt.io?token=${access_token}"><img alt="view on jwt.io" src="https://jwt.io/img/badge.svg"/> </a>${access_token}</pre>
      </form>
      </dialog>
`;

  document.body.appendChild(popup);
  const dialog = document.getElementById("confirmDialog") as HTMLDialogElement;
  dialog.showModal();
  return new Promise((resolve) => {
    dialog.addEventListener('close', e=>{
      console.log('close', e);
      resolve(e);
    });
    dialog.addEventListener('submit', e=>{
      console.log('submit', e);
      resolve(e);
    })

  })
}
