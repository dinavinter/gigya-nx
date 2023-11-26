"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const tree: GigyaTree={
//    
//      ds: {
//         search: () => {
//         },
//         delete: () => {
//         },
//         set: () => {
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
//
// const gig: gigya =  undefined as unknown as gigya;
// gig.accounts.getAccountInfo({include: "include"});
// gig.socialize.notifyLogin({siteUID: "siteUID"});
// gig.accounts.isAvailableLoginID({loginID: "loginID"});
// gig.accounts["b2b.auth.getAssets"]({environments: "environments"});
// declare type GigyaApi = Gigya<typeof gigya, ApiMap<typeof apis>>;
// type initRegistration = ApiMap<typeof apis>["accounts.initRegistration"];
//
//
// const initRegistration: initRegistration = ({isLite, sdk, dataCenter}) => {
//  console.log({
//         isLite, sdk, dataCenter
//     });
//  };
// initRegistration({isLite: true, sdk: "sdk", dataCenter: "dataCenter" });
//
//  gigya.accounts.initRegistration({isLite: true, sdk: "sdk", dataCenter: "dataCenter" , include: "include", other: "other"});
//    const gigyaApi: GigyaApi = {
//        accounts: {
//            initRegistration:initRegistration ,
//            getAccountInfo: ({include}) => {
//                 console.log({
//                      include
//                 });
//            }
//        }
//    };
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
//
// type ExtractTree<SemverString extends string> =
//     SemverString extends `${infer Major}.${infer Minor}.${infer Patch}` ?
//         { major: Major, minor: Minor, patch: Patch } : { error: "Cannot parse semver string" }
