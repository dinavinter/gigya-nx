import ISSOContext = gigya.fidm.oidc.ISSOContext;
import IBaseParams = gigya.fidm.oidc.IBaseParams;
export declare function ssoLogin(params?: Object): void;
export declare function continueSso(params?: Object): Promise<void>;
export declare function getSsoContext(params: IBaseParams): void;
export declare function setSsoContext(context: ISSOContext): void;
