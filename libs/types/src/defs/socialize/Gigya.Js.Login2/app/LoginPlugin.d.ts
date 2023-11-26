import { ILoginPluginParams, ILoginPluginTemplates, ILoginPluginCSS, IGigyaUser, ICustomButton, IProviderIdentityInformation } from 'src/socialize/Gigya.Js.Login2/app/Interfaces';
import { IPagingButtonStyleChoiceInfo, IPagingButtonStyle } from 'src/socialize/Gigya.Js.Login2/app/PagingStyles';
import { IButtonStyle } from 'src/socialize/Gigya.Js.Login2/app/ButtonStyles';
import { IUiApiInfo, IInjectionInfo } from 'src/core/Gigya.Js/app/API/UiApi';
import { IPluginConfig } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginConfig';
import { IElementActualSize } from 'src/core/Gigya.Js/app/Interfaces';
import { BasePlugin } from 'src/core/Gigya.Js.Plugin/app/BasePlugin';
export declare enum NavigationDirection {
    Next = 0,
    Prev = 1
}
export declare enum LastLoginIndication {
    _undefined = 0,
    none = 1,
    border = 2,
    welcome = 3
}
export declare enum PluginMode {
    _undefined = 0,
    Login = 1,
    AddConnection = 2,
    LinkAccount = 3
}
export declare enum RenderingMode {
    Unknown = 0,
    Login = 1,
    Welcome = 2,
    Footer = 3
}
declare const BasePluginGlobal: typeof BasePlugin;
export declare class LoginPlugin extends BasePluginGlobal<ILoginPluginParams, ILoginPluginTemplates, ILoginPluginCSS> implements IPagingButtonStyleChoiceInfo {
    static pluginName: string;
    uiContainer: HTMLElement;
    lastPolledWidth: any;
    stylePreset: IButtonStyle;
    pagingButtonStyle: IPagingButtonStyle;
    buttonWidth: number;
    buttonHeight: number;
    spriteRenderer: any;
    pluginMode: PluginMode;
    providers: Array<any>;
    user: IGigyaUser;
    lastLoginIndication: LastLoginIndication;
    facebookSuggestEnabled: boolean;
    lastLoginProvider: string;
    lastLoginProviderObject: any;
    pixelRatio: number;
    imageBase: string;
    showTerms: any;
    isFooterEnabled: any;
    isHeaderEnabled: boolean;
    showEdit: boolean;
    showWelcome: boolean;
    showTooltips: boolean;
    private loginChangeEventHandler;
    pluginConfig: {
        arrowWidth: number;
        floatingArrowWidth: number;
        arrowHeight: number;
        defaultlastLoginButtonSize: number;
        defaultButtonSize: number;
        defaultButtonSizeOnPopup: number;
        headerHeight: number;
        footerHeight: number;
        rowSpacing: number;
    };
    static InjectionInfoDefaultConfig: {
        showAddConnectionsUI_v2: {
            defaultParams: {
                width: number;
                height: number;
                requiredCapabilities: string;
                pagingButtonStyle: string;
                UIMode: string;
                _callGetUserInfoOnInitialRender: boolean;
            };
            defaultModalParams: {
                width: number;
                height: number;
                requiredCapabilities: string;
                pagingButtonStyle: string;
                UIMode: string;
                captionTextKey: string;
                _callGetUserInfoOnInitialRender: boolean;
            };
        };
        showLoginUI_v2: {
            defaultParams: {
                width: number;
                height: number;
                requiredCapabilities: string;
                pagingButtonStyle: string;
                UIMode: string;
                _callGetUserInfoOnInitialRender: boolean;
            };
            defaultModalParams: {
                width: number;
                height: number;
                requiredCapabilities: string;
                pagingButtonStyle: string;
                UIMode: string;
                captionTextKey: string;
                _callGetUserInfoOnInitialRender: boolean;
            };
        };
    };
    static injectionInfo(uiApiInfo?: IUiApiInfo): IInjectionInfo;
    getConfig(): IPluginConfig<ILoginPluginParams>;
    init(loadedCallback: (success?: boolean) => void): void;
    private initForceLinkingParams;
    private initParams;
    private initUiContainer;
    private initProviders;
    addCustomButton(oButton: ICustomButton): void;
    private shouldAddCustomProvider;
    private initSpriteEngine;
    resizePlugin(old: IElementActualSize, curr: IElementActualSize): void;
    render(): void;
    private onUserStateChange;
    private userStateChanged;
    private saveUserInfoAndRenderPlugin;
    private registerToGlobalEvents;
    dispose(): void;
    onProviderClickHandler(e: MouseEvent | KeyboardEvent): void;
    getContainerDimensions(): {
        h: number;
        w: number;
    };
    private getProvidersGridDimensions;
    private _getProvidersGridDimensions;
    private getContainerDimensionsWithoutPagerAndFooter;
    private getColumnsAndRowsOfProvidersGrid;
    private getWidthAndHeightOfProvidersGrid;
    getIdentityInfoForProvider(provider: any): IProviderIdentityInformation;
    createElementFromHTMLString(elementHtml: any): HTMLElement;
    private getUserInfo;
    getStyle(buttonsStyle: any): any;
    private getLastLogin;
    getLastLoginName(): string;
    private parseXML;
    private isTrue;
    createElemnetBlock(elementType: string, attributes?: any, content?: string): HTMLElement;
}
export {};
