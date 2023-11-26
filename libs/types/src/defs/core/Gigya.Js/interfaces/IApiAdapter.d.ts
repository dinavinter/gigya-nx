import { AbstractLocalStorageAdapter } from "../app/Utils/localStorage";
export interface IGmidTicketResponse {
    gmidTicket: string;
    expirationTime: number;
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
export interface IApiAdapterInitSettings {
    getAdapterName?: () => string;
    getAPIKey?: () => string;
    getFeatures?: () => string;
    getSettings?: () => string;
}
export interface IApiAdapter {
    init(callback: () => void): Promise<void>;
    isSessionValid(params: Object, callback: (isValid: boolean) => void): void;
    getStorage(): AbstractLocalStorageAdapter;
    sendRequest(methodName: string, params: Object, callback?: (response: Object) => void, settings?: ApiAdapterSettings): void;
    sendOauthRequest(methodName: string, params: Object, callback?: (response: Object) => void, settings?: ApiAdapterSettings): void;
    getTokenParam(APIKey: string, paramName: string): string;
    onPluginEvent(event: any): void;
    setGltexpFromSSO(apiKey?: string): Promise<boolean>;
    registerForNamespaceEvents(namespace: string): void;
    onSDKEvent(eventObject: Object): void;
    name: string;
    clearSession(params: Object, callback?: (res?: any) => void): void;
    onJSLog(logType: string, logInfo: string): void;
    getGmidTicket(): Promise<string | undefined>;
}
