import { IMap } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/utils';
export declare const enum CaptchaProvider {
    GOOGLE = "Google",
    FUNCAPTCHA = "FunCaptcha"
}
export declare const CaptchaHandlers: {};
export declare enum CaptchaMode {
    visible = "visible",
    invisible = "invisible"
}
export interface ICaptchaHandlerSettings {
    lang: string;
    mode: CaptchaMode;
}
export declare type CaptchaParams = ICaptchaHandlerSettings & IMap<string>;
export interface ICaptchaHandler {
    init(hostElement: HTMLElement): Promise<boolean>;
    reset(): void;
    getToken(): Promise<string>;
    getType(): string;
}
export declare abstract class BaseCaptchaHandler implements ICaptchaHandler {
    protected params: CaptchaParams;
    protected challengeExecutor: Promise<string>;
    protected challengeRef: any;
    protected captchaToken: string;
    private _ID;
    constructor(params?: CaptchaParams);
    init(hostElement: HTMLElement): Promise<boolean>;
    protected getID(): string;
    getToken(): Promise<string>;
    getType(): string;
    reset(): void;
    protected get siteKey(): string;
    protected abstract loadProvider(): Promise<void>;
    protected abstract render(hostElement: HTMLElement): void;
    protected abstract lazyExecuteOrFail(): Promise<string>;
    protected abstract get providerURL(): string;
    protected abstract get invisibleSiteKey(): string;
    protected abstract get visibleSiteKey(): string;
    protected abstract get captchaType(): string;
    protected abstract get provider(): CaptchaProvider;
    protected get isInvisible(): boolean;
    protected get callbackID(): string;
}
