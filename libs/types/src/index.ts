import type  { ServerApi} from "@defs/core/Gigya.Js/app/API/ServerApi";
import type { UiApi} from "@defs/core/Gigya.Js/app/API/UiApi";
import type { BaseApi} from "@defs/core/Gigya.Js/app/API/BaseApi";
import type {apiList as apis} from "./runtime/apiList";
import {thisScript} from "@defs/core/Gigya.Js/app/ThisScript";
import {RequestProvider, XhrRequest} from "@defs/core/ApiService/app";
declare type BaseApiList =  ReadonlyArray< ApiBase>;
declare type APIServerMinimum =  Pick<ServerApi,  "schema" | "methodName">  & Partial<ServerApi> & Basic ;
declare type APIUIBase = Pick<UiApi,  "methodName">  & Partial<UiApi>  & Basic
import * as TokenStore from "@defs/core/Gigya.Js.Adapters.Web/app/TokenStore";
import {Utils} from "@defs/socialize/Gigya.Js.Login2/app/Utils";
declare type Basic={
    run?: Pick<BaseApi, "run">
};
declare type ApiBase = APIServerMinimum | APIUIBase   ;
   

 
declare type ApiMap<TArray extends BaseApiList > = {
    [E in TArray[number] as E["methodName"]]: Runner<E>
}
 
declare function runner<Api extends ApiBase> (args:Params<Api>): void;

declare type Runner<Api extends ApiBase>  = typeof runner<Api>;

declare type Params<Api extends ApiBase> = 
    Api extends APIServerMinimum ? ServerApiParams<Api> : 
    Api extends APIUIBase ? UiApiParams<Api>:
        InferParams<Api>;
       

declare type ServerApiParams<Api extends APIServerMinimum> = {
    [Key in keyof Schema<Api['schema']>]?: any
}
 
type Schema<schema extends string> = Record<Split<schema, "|">[number], any>;
 

type Split<S extends string, D extends string> =
    string extends S ? string[] :
        S extends '' ? [] :
            S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];
    
    
declare type  UiApiParams<Api extends APIUIBase> = InferParams<Api>;
declare type InferParams<Api extends ApiBase> =  Api['run'] extends (...args: infer Params) => any ? Params : [];
 
  

declare type Plugin<name extends string, plugin extends Record<string, any> , Map extends Record<string, any>> = {
    [api in keyof plugin]: api extends string? Map[ Join<name,api>] : never;
}

declare type Join<T extends string, T1 extends string, Seperator extends string ="."> =  `${T}${Seperator}${T1}`;

export declare type Gigya<gigya extends Record<string, Record<string, any>>,   Map extends ApiMap<BaseApiList> = ApiMap<BaseApiList>> = {
    [plugin in keyof gigya]: plugin extends string ? Plugin<plugin, gigya[plugin] , Map> : never;
}

export type  GigyaAPI = ApiMap<typeof apis>;
export type gigya =  {
    thisScript: typeof thisScript,
    dataCenter: string,
    apiKey: string,
    XhrRequest: XhrRequest,
    RequestProvider: RequestProvider,
    utils: typeof Utils,
    auth:{
        loginToken: {
            get: typeof TokenStore.get,
            getTokenParam: typeof TokenStore.getTokenParam
        },
        token: {
            authenticationContext: GigyaAPI["auth.token.authenticationContext"],
        }
    }, 
    accounts: {
        [key in keyof GigyaAPI as  key extends `accounts.${infer rest}` ? rest : never]:   GigyaAPI[key]  ; 
      }, 
    socialize: {
        [key in keyof GigyaAPI as  key extends `socialize.${infer rest}` ? rest : never]:   GigyaAPI[key]  ;
     },
    
 };

/*

create a type that will be the gigya api , should inverse the api map, and create a recursive  tree of the api for example:
{
    accounts: {
    
    
        initRegistration: GigaApi['accounts.initRegistration'],
        getAccountInfo: getAssets:  GigaApi['accounts.getAccountInfo'],
        b2b: {
            openDelegatedAdmin: GigaApi['accounts.b2b.openDelegatedAdmin'],
            auth: {
                getAssets:  GigaApi['accounts.b2b.auth.getAssets']
                }
            }
        }
    },
    socialize: {
        notifyLogin: GigaApi['socialize.notifyLogin']
    }

 */

// type GigyaAPIFilterForNamespace<Node extends string> = {
//     [key in keyof GigyaAPI as  key extends `${Node}.${any}` ? key : never]:
//         GigyaAPI[key]  ;
// }
//
// type FilterFirstNodeToEachPrefix<Input extends Record<string, any>, Prefix extends  string = ""> = {
//     [key in keyof Input as  key extends `${Prefix}${infer namespace}.${any}` ? namespace : key]: Input[key];
//  }

type GigyaTreeNode<Node extends string> = {
    [key in keyof GigyaAPI as  key extends `${Node}.${infer api}` ? api extends `${infer namespace}.${any}`? namespace : api : never]:
    key extends `${Node}.${infer namespace}.${any}` ? GigyaTreeNode<namespace> : GigyaAPI[key];

}

 type GigyaTree = {
    [key in keyof GigyaAPI as key extends `${infer namespace}.${any}` ? namespace : key]:
       key extends `${infer namespace}.${any}` ? GigyaTreeNode<namespace> : GigyaAPI[key];
} 

export default GigyaTree;



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
