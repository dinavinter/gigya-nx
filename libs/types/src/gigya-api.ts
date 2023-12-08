import {ApiMap} from "./type-maker";
import {apis} from "@gigya/sdk";

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

   