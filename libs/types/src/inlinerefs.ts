////refs 
declare function getApi(name: string): BaseApi;
declare abstract class BaseApi {
    methodName: string;
    settings: ApiSettings;
    constructor(methodName: string, settings: ApiSettings);
    abstract run(params: Object, explicitParams?: Object): void;
    preprocessRequest(params: Object, callback: () => void): void;
    addAlias(): void;
}
interface ApiSettings {
    defaultParams?: Object;
    forcePost?: boolean;
    riskAssessment?: boolean;
    disableCache?: boolean;
    preprocessor?: (params: Object, callback: () => void) => void;
    postprocessor?: (params: Object, response: Object) => void;
}

interface ServerApiSettings extends ApiSettings {
    oauth?: boolean;
    mode?: Mode;
    restUrl?: string;
}
declare class ServerApi extends BaseApi {
    schema: string;
    requiresSession?: boolean;
    settings: ServerApiSettings;
    adapterSettings: ApiAdapterSettings;
    altSessionParams?: string;
    constructor(apiMethod: string, schema: string, requiresSession?: boolean, settings?: ServerApiSettings, adapterSettings?: ApiAdapterSettings, altSessionParams?: string);
    run(params: Object, explicitParams: Object): void;
}

export interface UiApiSettings extends ApiSettings {
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
}
interface IInjectionInfo {
    name: string;
    namespace: string;
    methodName: string;
    jsName: string;
    instanceMethods?: any;
    publicMethods?: {
        [publicMethodName: string]: IPublicMethod;
    };
}
interface IPublicMethod {
    instanceMethod: string;
    argNames: string[];
}
export interface IUiApiInfo {
    namespace: string;
    methodName: string;
}
export interface IPluginVersionInfo {
    versionName: string;
    method: string | Function;
    isSupported?: (params: {
        directCall: boolean;
    }) => boolean;
    additionalParams?: {
        [field: string]: any;
    };
}
export interface ApiAdapterSettings {
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
}
export declare enum OAuthMode {
    Social = 0,
    Sso = 1
}

export declare class UiApi extends BaseApi implements IUiApiInfo {
    methodName: string;
    jsName: string;
    settings: UiApiSettings;
    private injectionInfo;
    private pluginType;
    namespace: string;
    className: string;
    private instanceMethods;
    constructor(methodName: string, jsName: string, defaultParams?: Object, defaultPopupParams?: Object, requiredParams?: string, settings?: UiApiSettings);
    static getApiName(jsName: string, methodName: string, settings?: UiApiSettings): string;
    static versionSelector(methodName: string, namespace: string, defaultVersion: string, versions: IPluginVersionInfo[], versionField?: string): VersionSelector;
    static createApi(methodName: string, namespace: string, className: string, jsName: string, settings?: UiApiSettings, instanceMethods?: string[]): UiApi;
    addInstanceMethodsAliases(): void;
    createInstanceMethodAlias(methodName: string): void;
    getPublicMethod(methodName: string): IPublicMethod;
    preprocessRequest(params: Object, callback: () => void): void;
    run(params: Object, explicitParams: Object): void;
    private startUI;
    startPlugin(params: Object, explicitParams: Object): void;
    private loadPluginJS;
    private wasPluginJSLoaded;
    private getPluginType;
    setSourceData(params: Object): void;
    validateRequiredParams(params: Object): boolean;
    setDefaultParams(params: Object): void;
    prepareParameters(params: Object): void;
    legacyStartUI(params: Object, explicitParams: Object): void;
    prepareContainer(params: Object, isPopup: boolean, callback: () => void): void;
}


////