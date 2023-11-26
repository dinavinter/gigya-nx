export interface IInitSSOParams {
    spName: string;
    redirectURL: string;
}
export interface IContinueSSOParams {
}
export interface ILogoutSSOParams {
}
export interface ICancelSSOParams {
    statusCode: string;
    cancelCode: number;
}
export declare function initSSO(params: IInitSSOParams, proxy?: boolean): Promise<void>;
export declare function continueSSO(params?: IContinueSSOParams, proxy?: boolean): Promise<void>;
export declare function cancelSSO(params: ICancelSSOParams, proxy?: boolean): Promise<void>;
export declare function logoutSSO(params: ILogoutSSOParams, proxy?: boolean): void;
