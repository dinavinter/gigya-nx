import { BaseCaptchaHandler, CaptchaProvider } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/CaptchaHandler/BaseCaptchaHandler';
export declare let greCaptchaLoad: Promise<void>;
export declare class GoogleCaptchaHandler extends BaseCaptchaHandler {
    private _challengeResolver;
    private static RECAPTCHA_DOMAIN;
    private static GOOGLE_DOMAIN;
    private static CAPTCHA_ENTERPRISE_TYPE;
    private static CAPTCHA_V3_TYPE;
    protected render(hostElement: HTMLElement): void;
    reset(): void;
    protected loadProvider(): Promise<void>;
    protected lazyExecuteOrFail(): Promise<string>;
    protected get provider(): CaptchaProvider;
    protected get captchaType(): string;
    protected get LoadingCaptchaType(): string;
    protected get providerURL(): string;
    get loadQueryParams(): string;
    protected get isEnterprise(): boolean;
    protected get invisibleSiteKey(): string;
    protected get visibleSiteKey(): string;
    protected get captchaV3Key(): string;
    protected get captchaEnterpriseKey(): string;
    private _createChallengeExecutor;
    private get _domain();
    private get _lang();
}
