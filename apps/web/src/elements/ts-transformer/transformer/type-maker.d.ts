import type {ServerApi} from "@defs/core/Gigya.Js/app/API/ServerApi";
import type {UiApi} from "@defs/core/Gigya.Js/app/API/UiApi";
import type {BaseApi} from "@defs/core/Gigya.Js/app/API/BaseApi";
import type {ScreenSetPlugin} from "@defs/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin";
import {MyPhotoPlugin} from "@defs/accounts/Gigya.Js.Plugin.ProfilePhoto/app/profilePhoto";
import {LoginPlugin} from "@defs/socialize/Gigya.Js.Login2/app/LoginPlugin";
import {PagesPlugin} from "@defs/accounts/Gigya.Js.Plugin.Pages/app/PagesPlugin";
import {EditConnectionPlugin} from "@defs/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/EditConnections";
import { BasePlugin } from '@defs/core/Gigya.Js.Plugin/app/BasePlugin';


declare type BaseApiJson = Pick<BaseApi, "methodName"> & Partial<BaseApi> & any;
declare type BaseApiList = ReadonlyArray<BaseApiJson>;
declare type APIServerBase = Pick<ServerApi, "schema" > ;
declare type APIUIBase = Pick<UiApi, "methodName"> & Partial<UiApi> & BaseApiJson

export type ApiMap<TArray extends BaseApiList> = {
    [E in TArray[number] as E["methodName"]]: Runner<E>
}


declare function runner<Api extends BaseApiJson>(args: Params<Api> & {
    callback: (response: any) => void,  errorCallback: (error: any) => void,
}): void;

declare type Runner<Api extends BaseApiJson> = typeof runner<Api>;

declare type Params<Api extends BaseApiJson> =
    Api extends APIServerBase ? ServerApiParams<Api> :
        Api extends APIUIBase ? UiApiParams<Api> :any;


declare type ServerApiParams<Api extends APIServerBase> = {
    [Key in keyof Schema<Api['schema']>]?: any
}

type Schema<schema extends string> = Record<Split<schema, "|">[number], any>;


type Split<S extends string, D extends string> =
    string extends S ? string[] :
        S extends '' ? [] :
            S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];

type plugins = {
    ["ScreenSet.ScreenSetPlugin"]: ScreenSetPlugin
    ["profilePhoto.MyPhotoPlugin"]: MyPhotoPlugin
    ["login_v2.LoginPlugin"] : LoginPlugin
    ["Pages.PagesPlugin"] : PagesPlugin
    ["editConnections.EditConnectionPlugin"]: EditConnectionPlugin

};


type Plugin<API extends APIUIBase> =
    API extends { className: infer className } ?
        className extends keyof plugins ?
            plugins[className] extends BasePlugin<infer Params, infer _CSS, infer _Template> ?  (...args:  Params) => void :
                any :   any : any;


export declare type UiApiParams<Api extends APIUIBase> = Plugin<Api>


declare type Section<name extends string, section extends Record<string, any>, Map extends Record<string, any>> = {
    [api in keyof section]: api extends string ? Map[ Join<name, api>] : never;
}

declare type Join<T extends string, T1 extends string, Seperator extends string = "."> = `${T}${Seperator}${T1}`;

declare type Gigya<gigya extends Record<string, Record<string, any>>, Map extends ApiMap<BaseApiList> = ApiMap<BaseApiList>> = {
    [plugin in keyof gigya]: plugin extends string ? Section<plugin, gigya[plugin], Map> : never;
}

export type {
    BaseApi,
    ServerApi,
    UiApi,
    Runner,
    ServerApiParams,
    Params,
    Gigya
};
