import { IPluginParams } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginParams';
import { IPluginTemplates } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginTemplates';
import { IPluginCSS } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginCSS';
export interface ICustomButton {
    providerName: string;
    iconURL: string;
    lastLoginIconURL: string;
    connectedIconURL?: string;
    type?: string;
    position?: number;
    logoURL?: string;
    openIDURL?: string;
}
export interface ISamlCustomButton extends ICustomButton {
    idpName: string;
}
export interface IOidcCustomButton extends ICustomButton {
    opName: string;
}
export interface ILoginPluginParams extends IPluginParams {
    tabIndex: string;
    position: string;
    widthNum: number;
    heightNum: number;
    containerID: string;
    captionText: string;
    context: any;
    isPopup: boolean;
    UIMode: string;
    rid: string;
    responsiveWidth: boolean;
    pagingButtonStyle: string;
    conflictHandling?: string;
    loginMode?: string;
    regToken?: string;
    authCodeOnly: boolean;
    autoDetectUserProviders: string;
    buttonsStyle: string;
    buttonSize: number;
    customButton: ICustomButton;
    customButtons: Array<ICustomButton>;
    extraFields: string;
    facebookExtraPermissions: string;
    forceAuthentication: boolean;
    googleExtraPermissions: string;
    googlePlayAppID: string;
    headerText: string;
    includeAllIdentities: boolean;
    includeiRank: boolean;
    lastLoginButtonSize: number;
    lastLoginIndication: string;
    pendingRegistration: boolean;
    redirectURL: string;
    showTermsLink: string;
    showEditLink: string;
    enabledProviders: string;
    buttonTheme: string;
    disabledProviders: string;
    showTooltips: string;
    showWhatsThis: boolean;
    requiredCapabilities: string;
    sessionExpiration: number;
    cid: string;
    actionAttributes: any;
    cssPrefix: string;
    lang: string;
    UIConfig: string;
    whatsThisText: string;
    onButtonClicked: Function;
    onLogin: Function;
    onLoad: () => void;
    onError: (e: any) => void;
    onClose: Function;
    _callGetUserInfoOnInitialRender: boolean;
    _pluginCenterFix: boolean;
    data: {
        [key: string]: any;
    };
    authFlow: string;
}
export interface ILoginPluginTemplates extends IPluginTemplates {
    arrow: string;
    providerImage: string;
    uiContainer: string;
    header: string;
    footer: string;
    footerDivider: string;
    footerEdit: string;
    footerTerms: string;
    footerBrandLong: string;
    footerBrandShort: string;
    footerBrandWhatIsThis: string;
    login: string;
}
export interface ILoginPluginCSS extends IPluginCSS {
    main: string;
    iePatch: string;
    ie8patch: string;
}
export interface IGigyaUser {
    identities: any;
    providers: Array<string>;
    isConnected: boolean;
}
export interface IProviderIdentityInformation {
    name: string;
    isConnected: boolean;
    hasAllRequiredPermissions: boolean;
    requiredPermissions: Array<string>;
    identity: any;
}
export interface IProvidersGridDimensions {
    columns: number;
    rows: number;
    height: number;
    width: number;
    totalWidthIncludingPager: number;
    isPaged: boolean;
}
