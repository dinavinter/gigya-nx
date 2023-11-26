import { CookieStore } from "./global";
export declare type SameSite = 'None' | 'Strict' | 'Lax';
export declare class CookieUtils {
    private _cookieStore;
    private static testCookieName;
    constructor(_cookieStore?: CookieStore);
    set(name: string, value: string, expires_in?: any, cookieDomain?: string, dontUseRootPath?: boolean, sameSite?: SameSite): boolean;
    get(name: string): string;
    remove(name: string, domain?: string): void;
    getInfiniteExpirationTimeInSeconds(): number;
    canSaveCookie(cookieDomain?: any): boolean;
    getDefaultDomain(pageDomain?: string, baseDomain?: string): string;
    private _getExpirationInMs;
    private _setCookieInternal;
    private _removeFromBaseDomains;
    private static _getSameSiteMode;
    private static _disallowSameSiteMode;
    private _fallbackToSameSiteNone;
    private _reportFallback;
    private _isIFrame;
}
declare const _default: CookieUtils;
export default _default;
