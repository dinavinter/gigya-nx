import { BasePlugin } from 'src/core/Gigya.Js.Plugin/app/BasePlugin';
import { IPluginParams } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginParams';
import { IPluginTemplates } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginTemplates';
import { IPluginCSS } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginCSS';
import { IMap } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/utils';
import { IInjectionInfo } from 'src/core/Gigya.Js/app/API/UiApi';
export declare class PluginTester<PL extends BasePlugin<IPluginParams, IPluginTemplates, IPluginCSS>> {
    private _injectionInfo;
    static apiKey: string;
    private _loadPlugin;
    private _instanceCount;
    private _sharedInstances;
    private _TESTER_MAIN_INSTANCE;
    injector: IMap<any>;
    neverInit: boolean;
    defaultContainerID: string;
    constructor(_injectionInfo: IInjectionInfo);
    setDefaultContainer(containerId?: string): void;
    getInstance(params: IPluginParams, callback?: (instance: PL) => void): void;
    static setMocks(instance: any, injector: IMap<any>): void;
    isInstanceLoaded(): boolean;
    private loadNewInstance;
    static getLoadFunc(injectionInfo: IInjectionInfo): (IPluginParams: any) => void;
    createSharedInstance(instanceID: string, params: IPluginParams, callback?: (instance: PL) => void): void;
    clearSharedInstance(instanceID: string): void;
    getSharedInstanace(instanceID: string): PL;
}
