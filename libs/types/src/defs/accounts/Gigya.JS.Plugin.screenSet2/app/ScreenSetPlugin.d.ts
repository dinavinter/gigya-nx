import { IMap } from '@defs/accounts/Gigya.JS.Plugin.screenSet2/app/utils';
import { IPluginTemplates } from '@defs/core/Gigya.Js.Plugin/app/interfaces/IPluginTemplates';
import { IPluginCSS } from '@defs/core/Gigya.Js.Plugin/app/interfaces/IPluginCSS';
import { IPluginParams } from '@defs/core/Gigya.Js.Plugin/app/interfaces/IPluginParams';
import { ScreenSetData } from '@defs/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetData';
import { IProviderSessionInfo } from '@defs/core/Gigya.Js.Plugin/app/interfaces/IProviderSessionInfo';
import { CloseReasons } from '@defs/core/Gigya.Js.Plugin/app/CloseReasons';
import { Screen } from '@defs/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
import { BaseForm, IFormData } from '@defs/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
import { IErrorInfo } from '@defs/accounts/Gigya.JS.Plugin.screenSet2/app/Errors';
import { ITemplateElementParent } from '@defs/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement';
import { IElementActualSize, IElementSize, IViewportSize } from '@defs/core/Gigya.Js/app/Interfaces';
import { ScreenOptions } from '@defs/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenOptions';
import { IPluginConfig } from '@defs/core/Gigya.Js.Plugin/app/interfaces/IPluginConfig';
import { PluginStyle } from '@defs/core/Gigya.Js.Plugin/app/PluginStyles';
import { IBaseFormEvent } from '@defs/accounts/Gigya.JS.Plugin.screenSet2/app/Events.d';
import { IInjectionInfo } from '@defs/core/Gigya.Js/app/API/UiApi';
import { GSErrors } from '@defs/core/Gigya.Js/app/GSErrors';
import { TranslationsContainer } from "@defs/core/Gigya.Js.Plugin/app/Utils/languages/language";
import { ConflictHandling } from './LoginModes';
import { IFormContext } from "./IFormContext";
export declare type ScreenSet = {
    html: string;
    css: string;
    javascript: string;
    translations: TranslationsContainer;
};
export interface IScreenSetTemplates extends IPluginTemplates {
    captcha: string;
    invisibleRecaptcha: string;
    inlinedPasswordStrength: string;
    passwordStrength_minimumRequirements: string;
    passwordStrength: string;
    passwordStrength_strengthMeter: string;
    photoUpload_form: string;
    photoUpload_ui: string;
    screenSet: string;
    screenSet_dialog: string;
    consent: string;
    communicationCheckbox: string;
}
export interface IScreenSetCSS extends IPluginCSS {
    defaultCSS: string;
    ie8Patch: string;
    ie9Patch: string;
}
export interface IBaseScreenParams extends IPluginParams {
    screenSet: string;
}
export interface ISwitchScreenParams extends IBaseScreenParams {
    screen: string;
}
export interface IHideScreenSetParams extends IBaseScreenParams {
}
export interface IScreenSetParams extends IBaseScreenParams {
    context?: any;
    cid?: string;
    onBeforeSubmit?: (e: any) => void;
    onAfterSubmit?: (e: any) => void;
    onSubmit?: (e: any) => void;
    onAfterValidation?: (e: any) => void;
    onBeforeValidation?: (e: any) => void;
    onBeforeScreenLoad?: (e: any) => void;
    onAfterScreenLoad?: (e: any) => void;
    onFieldChanged?: (e: any) => void;
    onHide?: (e: any) => void;
    apiDomain?: string;
    regSource?: string;
    regToken?: string;
    aToken?: string;
    finalizeRegistration?: boolean;
    passwordResetToken?: string;
    mobileScreenSet?: string;
    startScreen?: string;
    initialResponse?: IFormResponse;
    initialMethod?: string;
    remember?: boolean;
    allowAccountsLinking?: boolean;
    rememberSessionExpiration?: any;
    sessionExpiration?: any;
    isChild?: boolean;
    parentData?: ScreenSetData;
    cssPrefix?: string;
    ignoreApiQueue?: boolean;
    parentTranslations?: object;
    conflictHandling?: ConflictHandling;
    providerSessionInfo?: IProviderSessionInfo;
}
export declare var EndFlowScreens: IMap<CloseReasons>;
export interface IForm {
    _screenSet: ScreenSetPlugin;
    _screen: Screen;
    ID: string;
    bindID: string;
    getErrorDisplayForm?: () => BaseForm;
    successScreen?: string;
    autoSkipScreen?: string;
    screenSetSkippedScreen?: string;
    onSkipped?: (response?: IFormResponse) => void;
    onBeforeSkipped?: () => Promise<void>;
}
export interface IGigyaResponse {
    errorCode?: GSErrors;
}
export interface IFormResponse extends IGigyaResponse {
    response?: IFormResponse;
    regToken?: string;
    aToken?: string;
    event?: any;
    autoSkip?: boolean;
    operation?: string;
    profile?: IFormData;
    data?: IFormData;
    errorDetails?: string;
    errorMessage?: string[];
    customMessage?: string;
    user?: string;
    secretQuestion?: string;
    errorDetailsCode?: number;
    validationErrors?: IErrorInfo[];
    errorFlags?: string;
    loginID?: string;
    childScreenSetCloseReason?: string;
    providerSessionInfo?: IProviderSessionInfo;
    gig_provider?: string;
}
export interface IExtraEventData {
    rememberMe?: boolean;
    allowAccountsLinking?: boolean;
}
export interface LoadTemplateCallback {
    (isSuccess: true, translations?: {
        [translationKey: string]: string;
    }, serverParams?: any): void;
    (isSuccess: false, errorResponse?: {
        errorCode: number;
    }): void;
}
export declare var ScreenSet_CONSTS: {
    gigyaClass: string;
    mobileDialogClass: string;
    webDialogClass: string;
    contentClass: string;
    topElementClass: string;
    calculateSizeClass: string;
    gigyaHidden: string;
    startScreen: string;
    isResponsive: string;
    dialogStyle: string;
    dataActiveGroups: string;
};
export declare class ScreenSetPlugin extends gigya._.plugins.BasePlugin<IScreenSetParams, IScreenSetTemplates, IScreenSetCSS> implements ITemplateElementParent {
    /**
     * Used to cache reference to JavaScript and translations downloaded for each screen-set.
     *
     * The object reference is placed on the gigya object directly to avoid being cleared when this file is reloaded by a site switching languages.
     */
    private static readonly CACHE;
    private templateElement;
    private _instanceId;
    private _originalCustomLang;
    private isResponsive;
    private _addedCSS;
    private _loadedScreensetCss;
    static CONSTS: {
        gigyaClass: string;
        mobileDialogClass: string;
        webDialogClass: string;
        contentClass: string;
        topElementClass: string;
        calculateSizeClass: string;
        gigyaHidden: string;
        startScreen: string;
        isResponsive: string;
        dialogStyle: string;
        dataActiveGroups: string;
    };
    private _startScreen;
    _elContainer: HTMLElement;
    _elChildContainer: HTMLElement;
    lastScreenSetSize: IElementActualSize;
    private _screens;
    private _currentScreen;
    private _nextScreen;
    screenOptions: ScreenOptions;
    _random: number;
    data: ScreenSetData;
    private _child;
    private _isChild;
    _ID: string;
    _placeholderIntervalID: number;
    private onUserStateChange;
    getConfig(): IPluginConfig<IScreenSetParams>;
    static injectionInfo(): IInjectionInfo;
    _screenSet: this;
    dispatchPluginEvent(eventName: string, eventObj?: IBaseFormEvent | Object): any;
    private static _calculateInstanceId;
    init(callback: (isSuccess: boolean) => void): void;
    /**
     * There are two ways to provide a screen-set template.
     * 1. Place the screen-set template element on the page with the screen-set ID. In this case, it is assumed CSS and JS are provided.
     * 2. Load screen-set from Gigya servers, which includes CSS and extra JS parameters. After load, the screen-set is cached in a DOM element.
     */
    private loadTemplate;
    private injectScreenSetCSS;
    private fixColorContrastIfNeeded;
    protected initContainer(): void;
    initScreens(): void;
    getPluginStyle(): PluginStyle;
    private prepareScreenSetContainer;
    private getCaptionElementId;
    getApiData(): any;
    getProfile(): any;
    getLoginIds(): any;
    getConflictingAccount(): any;
    get providerSessionInfo(): IProviderSessionInfo;
    getSchemaData(): any;
    getSubScriptions(): any;
    getCommunications(): any;
    getPreferences(): any;
    removeRegToken(): void;
    establishRegToken(regToken: string): void;
    establishAToken(aToken: string): void;
    onScreenResponse(response: IFormResponse, form: IForm, afterFinalizeRegistration?: boolean): Promise<void>;
    private connectAccounts;
    private dispatchLoginEventFromResponse;
    private isAccountInfoRequired;
    private unwrapResponse;
    displayServerErrors(response: IFormResponse, form: BaseForm): void;
    hideError(): void;
    private prepareScreens;
    close(): void;
    cancel(): void;
    hide(reason?: string, response?: IFormResponse, alwaysClearContainer?: boolean): void;
    dispose(): void;
    private _disposeChildScreenSet;
    private registerGlobalEvents;
    private unregisterGlobalEvents;
    getErrorMessage(errorCode: GSErrors, isBoundToField: boolean, fieldName: string, fieldDisplayName: string): string;
    getErrorMessageNew(errorCode: GSErrors): string;
    private getRequiredValueValidationErrorMessage;
    private getUniqueIdentifierValidationErrorMessage;
    private getValidationErrorMessage;
    updateAccountInfo(fnCallback: (response: any) => void, include?: string): void;
    updateAccountInfoAsync(fnCallback: (response: any) => void, include?: string): Promise<unknown>;
    onAccountInfo(response: any): void;
    private isRequestParamValuesMatch;
    private hasRequiredApiData;
    private onApiData;
    chooseNextScreen(nextScreenValue: string): string;
    private getEditableTfaProvider;
    private isTfaProviderEditable;
    private getApiMethodFromFullNamespace;
    private switchToChildScreenSet;
    switchScreen(screenID: string, response?: IFormResponse, oForm?: IForm): boolean;
    protected switchToLocalScreen(screenID: string, response?: IFormResponse, oForm?: IForm): boolean;
    protected shouldClose(): boolean;
    loadNextScreen(formContext: IFormContext, prevForm: IForm): Promise<void>;
    private get activeGroups();
    private isActiveGroup;
    private prepareNextScreen;
    setCaption(caption: string, width?: string): void;
    private setNextScreenSize;
    private shouldFinalizeFlow;
    doesScreenHaveForms(screenId: string): number | boolean;
    dimScreenSet(): void;
    undimScreenSet(): void;
    handlePendingErrors(response: IFormResponse, oForm: IForm): Promise<boolean>;
    endFlowIsPending(): string;
    endFlow(res?: IFormResponse, oForm?: IForm, reason?: CloseReasons): Promise<void>;
    resizeModal(size: IElementSize): void;
    protected resizePlugin(old?: IElementActualSize, curr?: IElementActualSize): void;
    protected onViewportSizeChanged(oldViewportSize?: IViewportSize, currentViewportSize?: IViewportSize): void;
    private showScreenSetContainer;
    private hideScreenSetContainer;
    getLangForScreenSet(): any;
    private isContainerContentHidden;
    private screenParts;
    get regToken(): string;
    get hasProviderSessionInfo(): boolean;
    onConnectAccountsComplete(): void;
    private get isLinkAccountsV2InProgress();
    private get shouldFinalizeLinkAccountsV2AfterRedirect();
    removeFromNeededData(data: Record<string, unknown>, methodName: string): void;
}
