import { IPluginParams } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginParams';
import { IPluginTemplates } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginTemplates';
import { IPluginCSS } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginCSS';
import { IInjectionInfo } from 'src/core/Gigya.Js/app/API/UiApi';
import { IPluginConfig } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginConfig';
import { BasePlugin } from 'src/core/Gigya.Js.Plugin/app/BasePlugin';
export interface ICustomButton {
    providerName: string;
    iconURL: string;
    lastLoginIconURL: string;
    connectedIconURL?: string;
    type?: string;
    idpName?: string;
    position?: number;
    logoURL?: string;
    openIDURL?: string;
}
export interface IEditConnectionPluginParams extends IPluginParams {
    captionText?: string;
    context?: any;
    showTermsLink?: string;
    enabledProviders?: string;
    disabledProviders?: string;
    showTooltips?: string;
    requiredCapabilities?: string;
    sessionExpiration?: number;
    cid?: string;
    actionAttributes?: any;
    cssPrefix?: string;
    customButton?: ICustomButton;
    customButtons?: Array<ICustomButton>;
}
export interface IEditConnectionPluginTemplates extends IPluginTemplates {
    edit: string;
    socialProviderApps: string;
    connectedSocialProvider: string;
    disconnectedSocialProvider: string;
    identityCountry: string;
    identityCity: string;
    identityBirthDate: string;
    defaultPhotoURL: string;
    gigyaTerms: string;
    gigyaBrand: string;
    footer: string;
}
export interface IEditConnectionPluginCSS extends IPluginCSS {
}
declare const BasePluginGlobal: typeof BasePlugin;
export declare class EditConnectionPlugin extends BasePluginGlobal<IEditConnectionPluginParams, IEditConnectionPluginTemplates, IEditConnectionPluginCSS> {
    static injectionInfo(): IInjectionInfo;
    private providerAppsLinks;
    private providers;
    private user;
    private imageBase;
    private showTooltips;
    init(loadedCallback: (success?: boolean) => void): void;
    getConfig(): IPluginConfig<IEditConnectionPluginParams>;
    private getUserInfo;
    private initDimensions;
    private render;
    private registerLocalEvents;
    private onUserStateChange;
    private registerToGlobalEvents;
    private unregisterToGlobalEvents;
    dispose(): void;
    private UserStateChanged;
    private onConnectClick;
    private onDisconnectClick;
    private getControlHtml;
    private getProviderListItem;
    private getPluginImage;
    private getIdentityCountry;
    private getIdentityCity;
    private getIdentityBirthDate;
    private getIdentityPhotoUrl;
    private getFooter;
}
export {};
