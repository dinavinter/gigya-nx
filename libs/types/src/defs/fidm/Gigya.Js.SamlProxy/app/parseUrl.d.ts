import { IMap } from 'src/fidm/Gigya.Js.SamlProxy/app/utils';
export declare enum ProxyMode {
    _undefined = 0,
    login = 1,
    forceLogin = 2,
    passiveLogin = 3,
    afterLogin = 4,
    initSSO = 5,
    cancel = 6,
    logout = 7,
    _debug = 8
}
export interface IProxyAction {
    mode: ProxyMode;
    samlContext: string;
    spName: string;
    params: IMap<string>;
}
export declare function parseUrl(query: string): IProxyAction;
