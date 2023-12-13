import {Utils} from "@defs/socialize/Gigya.Js.Login2/app/Utils";
import * as TokenStore from "@defs/core/Gigya.Js.Adapters.Web/app/TokenStore";
import {  GigyaAPI, GigyaNode, plugins} from "./type-maker";
import { thisScript } from "@defs/core/Gigya.Js/app/ThisScript";
import {gs} from "./runtime/gigya";


type AccountsApi = {
    isAvailableLoginID: (params: {loginID: string})=>void
    showScreenSet: plugins["showScreenSet"];
    showAddConnectionUI: (params: {provider: string})=>void,
    b2b: GigyaNode<"accounts.b2b">,
    auth: GigyaNode<"accounts.auth">,
    identifiers: GigyaNode<"accounts.identifiers">,
} & GigyaNode<"accounts">;

type SocializeApi = GigyaNode<"socialize">;
 
export type GigyaService = {
    thisScript: typeof thisScript,
    dataCenter: string,
    apiKey: string,
    utils: typeof Utils,
    auth: {
        loginToken: {
            get: typeof TokenStore.get,
            getTokenParam: typeof TokenStore.getTokenParam
        },
        token: {
            authenticationContext: GigyaAPI["auth.token.authenticationContext"],
        }
    },
    showLoginUI: GigyaAPI["showLoginUI"],
    accounts: AccountsApi,
    socialize: SocializeApi,

};
gs().accounts.isAvailableLoginID({loginID: "test"});
export default GigyaService;