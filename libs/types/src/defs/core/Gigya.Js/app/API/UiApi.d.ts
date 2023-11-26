import { ApiSettings, BaseApi } from 'src/core/Gigya.Js/app/API/BaseApi';
import { IDisposable } from 'src/core/Gigya.Js/interfaces/IDisposable';
import { IBaseObjectParam } from 'src/core/Gigya.Js/app/BaseObject/BaseObject';
import { VersionSelector } from 'src/core/Gigya.Js/app/API/VersionSelector';
export declare var __pluginsCoreLoaded: boolean;
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
export interface IInjectionInfo {
    name: string;
    namespace: string;
    methodName: string;
    jsName: string;
    instanceMethods?: any;
    publicMethods?: {
        [publicMethodName: string]: IPublicMethod;
    };
}
export interface IPublicMethod {
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
export interface IPluginType {
    new (params: any, explicitParams: any, injectionInfo: IInjectionInfo): IPlugin;
    injectionInfo(uiApiInfo?: IUiApiInfo): IInjectionInfo;
}
export interface IPlugin extends IDisposable {
    containerID: string;
    start: () => void;
    params: IBaseObjectParam;
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
