export interface ReCaptcha {
    /**
     * returns the reCAPTCHA token.
     */
    execute(siteKey?: string): Promise<string>;
    ready(callback: any): any;
    enterprise: ReCaptcha;
}
export declare class GoogleReCaptchaLoader {
    private static V3_CAPTCHA_TYPE;
    private static ENTERPRISE_CAPTCHA_TYPE;
    private static RECAPTCHA_DOMAIN;
    private static GOOGLE_DOMAIN;
    private static RETRY_FROM_RECAPTCHA_TIMEOUT;
    static greCaptchaLoad: any;
    forceReset(): void;
    getInstance(params: any): ReCaptcha;
    load(params: any): Promise<void>;
    protected providerURL(params: any): string;
    loadQueryParams(params: any): string;
    private _domain;
}
declare const _default: GoogleReCaptchaLoader;
export default _default;
