import type {ServerApi} from "@defs/core/Gigya.Js/app/API/ServerApi";
import type {UiApi} from "@defs/core/Gigya.Js/app/API/UiApi";
import type {BaseApi} from "@defs/core/Gigya.Js/app/API/BaseApi";
import type {apiList as apis} from "./runtime/apiList";
import type {IScreenSetParams} from "@defs/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin";
 declare type BaseApiList =  ReadonlyArray< ApiBase>;
declare type APIServerMinimum =  Pick<ServerApi,  "schema" | "methodName">  & Partial<ServerApi> & Basic ;
declare type APIUIBase = Pick<UiApi,  "methodName">  & Partial<UiApi>  & Basic
declare type Basic={
    run?: Pick<BaseApi, "run">
};
declare type ApiBase = APIServerMinimum | APIUIBase   ;
 export type ApiMap<TArray extends BaseApiList > = {
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

type plugins={
    ["showScreenSet"]: (params:IScreenSetParams)=>void
};


type Plugin<API extends APIUIBase> =
    API extends  {methodName: infer methodName} ?
        methodName extends keyof plugins?
            plugins[methodName]
            : InferParams<API>: InferParams<API>;

declare type UiApiParams<Api extends APIUIBase> =Plugin<Api>;
declare type InferParams<Api extends ApiBase> =  Api['run'] extends (...args: infer Params) => any ? Params : [];



declare type Section<name extends string, section extends Record<string, any> , Map extends Record<string, any>> = {
    [api in keyof section]: api extends string? Map[ Join<name,api>] : never;
}

declare type Join<T extends string, T1 extends string, Seperator extends string ="."> =  `${T}${Seperator}${T1}`;

export declare type Gigya<gigya extends Record<string, Record<string, any>>,   Map extends ApiMap<BaseApiList> = ApiMap<BaseApiList>> = {
    [plugin in keyof gigya]: plugin extends string ? Section<plugin, gigya[plugin] , Map> : never;
}

export type  GigyaAPI = ApiMap<typeof apis>;


type PickStartsWith<T extends object, S extends string> = {
    [K in keyof T as K extends `${S}${infer _R}` ? K : never]: T[K] &
        K extends `${S}${infer R}`? {apiName: R,
        namespace: S}: never
};

type GigyaNamespace<Namespace extends string > =
    PickStartsWith<GigyaAPI, `${Namespace}.`> ;

type Apis<Namespace extends string > ={
    [key in keyof GigyaAPI as  key extends `${Namespace}.${infer rest}` ? rest : never]:   GigyaAPI[key]  ;
}

type Namespaces<Namespace extends string > ={
    [key in keyof GigyaAPI as  key extends `${Namespace}.${infer node}.${infer _rest}` ? node : never]:  GigyaNode<key>;
}

export type GigyaNode<root extends string > =
    root extends keyof GigyaAPI ? GigyaAPI[root] :
        Apis<root> & Namespaces<root> ;

type GigyaTreeNode<Node extends string> = {
    [key in keyof GigyaNamespace<Node> as
        key extends
            `${Node}.${infer namespace}.${any}` ? namespace : key]:
    key extends `${infer namespace}.${any}` ?
        GigyaTreeNode<`${Node}.${namespace}`> :
        GigyaAPI[key];
}

export type GigyaTree = {
    [key in keyof GigyaAPI as key extends `${infer namespace}.${any}` ? namespace : key]:
    key extends `${infer namespace}.${any}` ? GigyaTreeNode<namespace> : GigyaAPI[key];
}

   