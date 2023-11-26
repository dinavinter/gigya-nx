export interface ISSOContext {
    apiKey: string;
    rpContext?: string;
}
export interface IGetContextParams {
    opKey: string;
    sso_token: string;
}
export interface IContinueParams {
    opKey: string;
    context: string;
    login_token: string;
    [key: string]: any;
}
declare class OidcOpApi {
    getContext({ opKey, ...params }: IGetContextParams): Promise<ISSOContext>;
    redirectToContinue({ opKey, ...params }: IContinueParams): void;
    private static baseUrl;
}
export declare const op: OidcOpApi;
export {};
