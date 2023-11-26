import { BaseCaptchaHandler, CaptchaProvider } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Handlers/CaptchaHandler/BaseCaptchaHandler';
export declare class FunCaptchaHandler extends BaseCaptchaHandler {
    protected render(hostElement: HTMLElement): void;
    reset(): void;
    protected loadProvider(): Promise<void>;
    protected lazyExecuteOrFail(): Promise<string>;
    protected get provider(): CaptchaProvider;
    protected get captchaType(): string;
    protected get providerURL(): string;
    protected get invisibleSiteKey(): string;
    protected get visibleSiteKey(): string;
}
