import { IApiAdapterInitSettings, IApiAdapter, ApiAdapterSettings } from 'src/core/Gigya.Js/interfaces/IApiAdapter';
import { MemoryStorageAdapter } from "../../Gigya.Js/app/Utils/localStorage";
export interface INativeMobileProxy extends IApiAdapterInitSettings {
    sendToMobile?: (action: string, method: string, queryStringParams: string) => boolean;
    getObfuscationStrategy?: () => 'base64';
}
export declare function newApiAdapter(nativeProxy: INativeMobileProxy): IApiAdapter;
export declare const mobileCallbacks: {
    [id: string]: (response: any) => void;
};
export interface IAdapterSettings {
    logLevel: string[];
}
export declare class MobileAdapter implements IApiAdapter {
    private nativeProxy?;
    private ucid;
    private gcid;
    private features;
    private settings;
    private obfuscationStrategy;
    private _storage;
    name: string;
    constructor(nativeProxy?: INativeMobileProxy);
    getStorage(): MemoryStorageAdapter;
    init(callback: () => void): Promise<void>;
    getTokenParam(APIKey: any, paramName: any): string;
    onPluginEvent(event: any): void;
    onCustomEvent(event: any): void;
    onJSLog(logType: string, logInfo: string): void;
    registerForNamespaceEvents(namespace: string): void;
    getGmidTicket(callback?: (gmidTicket: string) => void): Promise<string>;
    clearSession(params: Object, callback?: (res?: any) => void): void;
    isSessionValid(params: Object, callback: (isValid: boolean) => void): void;
    sendRequest(methodName: string, params: Object, callback?: (response: Object) => void, settings?: ApiAdapterSettings): void;
    sendOauthRequest(methodName: string, params: Object, callback?: (response: Object) => void, settings?: ApiAdapterSettings): void;
    private sendToMobile;
    private sendWithIframe;
    onSDKEvent(eventObject: Object): void;
    isActionSupported(action: string): boolean;
    isLogLevelSupported(logType: string): boolean;
    setGltexpFromSSO(apiKey?: string): Promise<boolean>;
    obfuscate(string: string): string;
    unobfuscate(string: string, isJSON: boolean): string;
}
