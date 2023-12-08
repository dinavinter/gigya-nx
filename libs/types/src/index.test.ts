import {ApiMap} from "./type-maker";
import type {apiList as apis} from "./runtime/apiList";
import GigyaService, {GigyaService as GigyaTree} from "./gigyaService";

// const tree: Partial<GigyaTree>={
//      
//      ds: {
//         search: () => {
//         },
//         delete: () => {
//         },
//         store: () => {
//         },
//     },
//     accounts: {
//         initRegistration: () => {
//         },
//         getAccountInfo: () => {
//         },
//         b2b: {
//             openDelegatedAdmin: () => {
//             },
//             auth: {
//                 getAssets: () => {
//                 }
//             }
//         }
//     },
//     socialize: {
//         notifyLogin: () => {
//         }
//     }
// }
//








const gig: GigyaService =  undefined as unknown as GigyaService;
gig.accounts.getAccountInfo({include: "include"});
gig.accounts.showScreenSet({screenSet: "screenSet"});
gig.socialize.notifyLogin({siteUID: "siteUID"});
gig.accounts.isAvailableLoginID({loginID: "loginID"});
 gig.accounts["b2b.auth.getAssets"]({environments: "environments"});
 // gig.accounts.b2b.auth.getAssets({environments: "environments"});
 // gig.accounts.b2b.openDelegatedAdmin({environments: "environments"});
type initRegistration = ApiMap<typeof apis>["accounts.initRegistration"];
// gig.accounts.b2b.openDelegatedAdmin({environments: "environments"});
 // declare type GigyaApi = Gigya<  gigya, ApiMap<typeof apis>>;
// gig.accounts.address)
gig.socialize.notifyLogin({siteUID: "siteUID"});
 
// type GigyaAPIFilterForNamespace<Node extends string> = {
//     [key in keyof GigyaAPI as  key extends `${Node}.${any}` ? key : never]:
//         GigyaAPI[key]  ;
// }
//
// type FilterFirstNodeToEachPrefix<Input extends Record<string, any>, Prefix extends  string = ""> = {
//     [key in keyof Input as  key extends `${Prefix}${infer namespace}.${any}` ? namespace : key]: Input[key];
//  }




 

  
const initRegistration: initRegistration = ({isLite, sdk, dataCenter}) => {
 console.log({
        isLite, sdk, dataCenter
    });
 };
initRegistration({isLite: true, sdk: "sdk", dataCenter: "dataCenter" });

 // GigyaService.accounts.initRegistration({isLite: true, sdk: "sdk", dataCenter: "dataCenter" , include: "include", other: "other"});
 //   const gigyaApi: GigyaApi = {
 //       accounts: {
 //           initRegistration:initRegistration ,
 //           getAccountInfo: ({include}) => {
 //                console.log({
 //                     include
 //                });
 //           }
 //       }
 //   };

// const config: Config = {
//     "accounts.initRegistration": (event) => {
//          event.isLite;
//          event.sdk;
//          event.dataCenter;
//
//      },
//     "accounts.getAccountInfo": ({include}) => {
//         console.log({
//             include
//         });
//     },
//     "socialize.notifyLogin": ({siteUID}) => {
//         console.log({
//             siteUID
//         });
//     }
//  };
//


 