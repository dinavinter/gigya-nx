declare type BaseApiJson = Pick<BaseApi, "methodName"> & Partial<BaseApi> & any;
declare type BaseApiList = ReadonlyArray<BaseApiJson>;
declare type APIServerBase = Pick<ServerApi, "schema">;
declare type APIUIBase = Pick<UiApi, "methodName"> & Partial<UiApi> & BaseApiJson;
export type ApiMap<TArray extends BaseApiList> = {
    [E in TArray[number] as E["methodName"]]: Runner<E>;
};
declare function runner<Api extends BaseApiJson>(args: Params<Api> & {
    callback: (response: any) => void;
    errorCallback: (error: any) => void;
}): void;
declare type Runner<Api extends BaseApiJson> = typeof runner<Api>;
declare type Params<Api extends BaseApiJson> = Api extends APIServerBase ? ServerApiParams<Api> : Api extends APIUIBase ? UiApiParams<Api> : InferParams<Api>;
declare type ServerApiParams<Api extends APIServerBase> = {
    [Key in keyof Schema<Api['schema']>]?: any;
};
type Schema<schema extends string> = Record<Split<schema, "|">[number], any>;
type Split<S extends string, D extends string> = string extends S ? string[] : S extends '' ? [
] : S extends `${infer T}${D}${infer U}` ? [
    T,
    ...Split<U, D>
] : [
    S
];
type plugins = {
    ["showScreenSet"]: (params: IScreenSetParams) => void;
};
type Plugin<API extends APIUIBase> = API extends {
    methodName: infer methodName;
} ? methodName extends keyof plugins ? plugins[methodName] : InferParams<API> : InferParams<API>;
export declare type UiApiParams<Api extends APIUIBase> = Record<string, any>;
declare type InferParams<Api extends BaseApiJson> = Api extends {
    run: (...args: infer Params) => any;
} ? Params : any[];
declare type Section<name extends string, section extends Record<string, any>, Map extends Record<string, any>> = {
    [api in keyof section]: api extends string ? Map[Join<name, api>] : never;
};
declare type Join<T extends string, T1 extends string, Seperator extends string = "."> = `${T}${Seperator}${T1}`;
declare type Gigya<gigya extends Record<string, Record<string, any>>, Map extends ApiMap<BaseApiList> = ApiMap<BaseApiList>> = {
    [plugin in keyof gigya]: plugin extends string ? Section<plugin, gigya[plugin], Map> : never;
};
export type { BaseApi, ServerApi, UiApi, Runner, ServerApiParams, Params, Gigya };
/*
imported types
*/
type ServerApi = BaseApi & {
    schema: string;
    requiresSession?: boolean;
    settings: ServerApiSettings;
    adapterSettings: ApiAdapterSettings;
    altSessionParams?: string;
    constructor(apiMethod: string, schema: string, requiresSession?: boolean, settings?: ServerApiSettings, adapterSettings?: ApiAdapterSettings, altSessionParams?: string);
    run(params: Object, explicitParams: Object): void;
};
type ServerApiSettings = {
    oauth?: boolean;
    mode?: Mode;
    restUrl?: string;
    defaultParams?: Object;
    forcePost?: boolean;
    riskAssessment?: boolean;
    disableCache?: boolean;
    preprocessor?: (params: Object, callback: () => void) => void;
    postprocessor?: (params: Object, response: Object) => void;
};
type Mode = {
    silent: boolean;
    warn: boolean;
};
type Object = {};
type ApiAdapterSettings = {
    forceHttps?: boolean;
    forcePost?: boolean;
    forceGigyaDomain?: boolean;
    disableCache?: boolean;
    requiresSession?: () => boolean;
    clearSession?: boolean;
    clearSessionCondition?: (params: any) => boolean;
    cacheTimeout?: number;
    jsSdkRequestId?: string;
    preprocessor?: (params: any, callback: () => void) => void;
    oauthMode?: OAuthMode;
    isXhrSupported?: boolean;
    useHttpStatusCodes?: boolean;
    namespace?: string;
    useBearerToken?: boolean;
};
type OAuthMode = {};
type UiApi = BaseApi & {
    methodName: string;
    jsName: string;
    settings: UiApiSettings;
    injectionInfo;
    pluginType;
    namespace: string;
    className: string;
    instanceMethods;
    constructor(methodName: string, jsName: string, defaultParams?: Object, defaultPopupParams?: Object, requiredParams?: string, settings?: UiApiSettings);
    getApiName(jsName: string, methodName: string, settings?: UiApiSettings): string;
    versionSelector(methodName: string, namespace: string, defaultVersion: string, versions: IPluginVersionInfo[], versionField?: string): VersionSelector;
    createApi(methodName: string, namespace: string, className: string, jsName: string, settings?: UiApiSettings, instanceMethods?: string[]): UiApi;
    addInstanceMethodsAliases(): void;
    createInstanceMethodAlias(methodName: string): void;
    getPublicMethod(methodName: string): IPublicMethod;
    preprocessRequest(params: Object, callback: () => void): void;
    run(params: Object, explicitParams: Object): void;
    startUI;
    startPlugin(params: Object, explicitParams: Object): void;
    loadPluginJS;
    wasPluginJSLoaded;
    getPluginType;
    setSourceData(params: Object): void;
    validateRequiredParams(params: Object): boolean;
    setDefaultParams(params: Object): void;
    prepareParameters(params: Object): void;
    legacyStartUI(params: Object, explicitParams: Object): void;
    prepareContainer(params: Object, isPopup: boolean, callback: () => void): void;
};
type UiApiSettings = {
    useBasePlugin?: boolean;
    apiName?: string;
    waitForAPIQueue?: boolean;
    silentMode?: boolean;
    useNewModal?: boolean;
    requireSession?: boolean;
    allowPopup?: boolean;
    defaultParams?: Object;
    defaultPopupParams?: Object;
    requiredParams?: string;
    dontLoadPluginsCore?: boolean;
    ignoreContainerId?: boolean;
    forcePost?: boolean;
    riskAssessment?: boolean;
    disableCache?: boolean;
    preprocessor?: (params: Object, callback: () => void) => void;
    postprocessor?: (params: Object, response: Object) => void;
};
type IPluginVersionInfo = {
    versionName: string;
    method: string | Function;
    isSupported?: (params: {
        directCall: boolean;
    }) => boolean;
    additionalParams?: {
        [field: string]: any;
    };
};
type Function = {};
type VersionSelector = {};
type IPublicMethod = {
    instanceMethod: string;
    argNames: string[];
};
type BaseApi = {
    methodName: string;
    settings: ApiSettings;
    constructor(methodName: string, settings: ApiSettings);
    run(params: Object, explicitParams?: Object): void;
    preprocessRequest(params: Object, callback: () => void): void;
    addAlias(): void;
};
type ApiSettings = {
    defaultParams?: Object;
    forcePost?: boolean;
    riskAssessment?: boolean;
    disableCache?: boolean;
    preprocessor?: (params: Object, callback: () => void) => void;
    postprocessor?: (params: Object, response: Object) => void;
};
type IScreenSetParams = {
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
};
type IFormResponse = {
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
    errorCode?: GSErrors;
};
type IFormData = {
    rememberMe?: boolean;
};
type IErrorInfo = {
    fieldName?: string;
    fieldArrayKeyValue?: string;
    errorCode: GSErrors;
    errorType?: ErrorType;
    errorMessage?: string;
    customMessage?: string;
    errorFlags?: string;
    handled?: boolean;
    field?: IFormInput;
    widget?: IFormWidget;
    isWarn?: boolean;
};
type GSErrors = {};
type ErrorType = {};
type IFormInput = {
    isCaptcha: boolean;
    getValue(el?: HTMLElement, currentValue?: any): InputValueType;
    getName(isNormalized: boolean, flatten?: boolean): string;
    arrayKeyField: string;
    arrayKeyValue: string;
    getArrayRoot(flatten?: boolean): string;
    fieldName: string;
    normalizedFieldName: string;
    displayName: string;
    isInHiddenContainer(): boolean;
    isHidden(): boolean;
    required(): boolean;
    disabled(): boolean;
    allowEmpty(): boolean;
    instanceElement: HTMLElement;
    validate(callback: IValidationCallback, formData?: any): void;
    validateAsync(formData?: any): Promise<IValidationInfo>;
    addEventListener(eventName: string, handler: Function): any;
    removeEventListener(eventName: string, handler: Function): any;
    getValidityState(): ValidityStates;
    setValidityState(validityState: ValidityStates): any;
    addValidityStateListener(listener: IValidityStateListener): any;
    removeValidityStateListener(listener: IValidityStateListener): any;
    update(element?: HTMLElement, fieldName?: string, isDataField?: boolean): void;
    evaluateConditionalAttributes(): void;
    getMetadata(): {};
    setValue(dataValue: string | boolean, setByScript: boolean): void;
    runOnServerDone(callback: ServerDoneFieldCallback): void;
    fieldNamespace: SchemaName;
    fieldBaseName: string;
};
type HTMLElement = {};
type InputValueType = {};
type IValidationCallback = {};
type ValidityStates = {};
type IValidityStateListener = {};
type ServerDoneFieldCallback = {};
type SchemaName = {
    at(index: number): T | undefined;
};
type T = {};
type IFormWidget = {
    _form: BaseForm;
    getFieldsNames(): string[];
    update(): void;
    validateAsync(formData: any): Promise<IValidationInfo>;
    _screen: Screen;
    linkInstanceElement(parent: HTMLElement): any;
    unlinkInstanceElement(): any;
    _parent: ITemplateElementParent;
    unlinkTemplate(): any;
    evaluateExpression(conditionalExpression: IConditionalExpression): any;
    evaluateConditionalAttributes(): any;
    resetLastConditionalValues(): any;
    _screenSet: ScreenSetPlugin;
    warn?(msg: string, id?: string): void;
};
type BaseForm = {
    get dataProvider(): IFormDataProvider;
    get submitButtonClicked(): boolean;
};
type IFormDataProvider = {
    defaultSubmitParams: object;
    hasProviderSessionInfo: boolean;
    includeParams: string;
    lang: string;
};
type IValidationInfo = {
    errorCode: GSErrors;
    field?: IFormInput;
    widget?: IFormWidget;
    errorType?: ErrorType;
    setByScript?: boolean;
    errorMessage?: string;
    isWarning?: boolean;
};
type Screen = {
    get variantGroupId(): string;
    get abTestId(): string;
    get abTestingData(): IAbTestingData;
    get variantPercentage(): number | undefined;
    get isOriginalVariant(): boolean;
    get isScreenVariant(): boolean;
    get requestedScreen(): string;
};
type IAbTestingData = {
    testId: string;
    variantId: string;
    requestedScreenId: string;
};
type ITemplateElementParent = {
    _screenSet: ScreenSetPlugin;
    warn?(msg: string, id?: string): void;
};
type ScreenSetPlugin = {
    get providerSessionInfo(): IProviderSessionInfo;
    get regToken(): string;
    get hasProviderSessionInfo(): boolean;
};
type IProviderSessionInfo = {
    access_token?: string;
    provider?: string;
    provider_uid?: string;
    idToken?: string;
    code?: string;
    lastName?: string;
    firstName?: string;
};
type IConditionalExpression = {
    condition: string;
    defaultValue?: any;
    ignoreError?: boolean;
};
type ScreenSetData = {};
type ConflictHandling = {};


const init:Runner<{
    methodName: "init";
    schema:"screen|screenSet";
    
    
} >

const apiParams:ServerApiParams<{
    schema:"screen|screenSet";
    
    
}>
 
 
init({
    screenSet: "Default-RegistrationLogin",
    screen: "Registration",
    containerID: "gigya-login-container",
});