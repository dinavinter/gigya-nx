export interface IMap<T> {
    [name: string]: T;
}
export declare function urlParams(query: string): IMap<string>;
export declare function openIframe(url: any, done: Function, timeout: number): void;
export declare function reportError(errorInfo: any, context: any): void;
export declare function redirectToSamlEndPont(endPoint: string, params: any, apiKey: string): Promise<void>;
export declare function setUrlParams(url: string, params: any): string;
export declare function redirect(url: string, urlValues: any, params: any): void;
export declare function getLoginToken(apiKey: string): any;
export declare function getLoginTokenExpiration(apiKey: string): any;
export interface IStoredContext {
    samlContext: string;
    spName: string;
}
export declare function saveContext(apiKey: string, context: IStoredContext, done: () => void): void;
export declare function loadContext(apiKey: string, callback: (context: IStoredContext) => void): void;
export declare function templateFill(template: string, params: any): string;
export declare function deserializeJSON(json: string): string;
export declare function objectMerge<T>(...objects: any[]): T;
export declare function isLoggedIn(callback: (loggedIn: boolean) => void, apiKey: string): void;
export declare function logout(samlContext: string, callback: (response: any) => void): void;
