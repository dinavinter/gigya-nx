import { GetGroupTokenResponse } from 'src/fidm/Gigya.JS.SSO/app/interfaces';
export declare const activeNamespaces: {};
export declare function isValidGltExp(gltexp?: string): boolean;
export declare function getGltexpCookie(APIKey?: string): string;
export declare function setGltexp(gltexp: string, APIKey?: string): void;
export declare function get(APIKey?: string): string;
export declare function set(APIKey: string, login_token: string, expires_in?: number | string, sessionExpiration?: number): void;
export declare function getCurrentSessionExpiration(): number;
export declare function getGACCookie(): string;
export declare function setFromAuthCode(authCode: string): Promise<unknown>;
export declare function setFromGAC(params: Object, callback: Function, gac?: string): void;
export declare function setFromSsoResponse(res: GetGroupTokenResponse, APIKey?: string): Promise<unknown>;
export declare function dispatchLoginEvent(eventParams?: {}): Promise<unknown>;
export declare function remove(APIKey?: string): Promise<void>;
export declare function getTokenParam(APIKey: string, paramName: string): any;
export declare function setBearerToken(bearerToken: string): void;
export declare function getBearerToken(): any;
export declare function removeBearerToken(): void;