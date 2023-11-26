import { BaseTfaProvider } from 'src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider';
export declare enum TfaMode {
    verify = 0,
    register = 1,
    add = 2,
    edit = 3
}
export declare enum VerificationMethod {
    SMS = 0,
    VOICE = 1
}
export declare const FriendlyProviderName: (provider: IProviderInfo) => string;
export interface IProviderInfo {
    name: string;
    authLevel?: number;
    capabilities?: string[];
    displayName?: string;
}
export declare class TfaPlugin {
    params: Object;
    private mode;
    private activeProviders;
    private inactiveProviders;
    private container;
    private isRtl;
    private addedCss;
    selectedProvider: BaseTfaProvider;
    templates: Object;
    isMobileUI: boolean;
    getText(textKey: string, replaceStr?: string, withStr?: string): any;
    constructor(params: Object);
    initUI(): void;
    showProgress(): void;
    hideProgress(): void;
    private getModeByString;
    private updateProviders;
    initTfa(provider: string, mode: TfaMode, initCallback?: (response: Object) => void): void;
    startProviderFlow(provider: IProviderInfo, mode: TfaMode): void;
    private showProvider;
    private onProviderCallback;
    private onDone;
    private showSelector;
    private showProviderSelector;
    private getSupportedProviders;
    private getProvidersForMode;
    getEditableProviders(): IProviderInfo[];
    private isTfaProviderEditable;
    onAfterScreenLoad(screen: string, caption?: string): void;
}
