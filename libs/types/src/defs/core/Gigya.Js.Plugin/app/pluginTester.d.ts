import { BasePlugin } from 'src/core/Gigya.Js.Plugin/app/BasePlugin';
import { IPluginParams } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginParams';
import { IPluginTemplates } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginTemplates';
import { IPluginCSS } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginCSS';
import { IInjectionInfo } from 'src/core/Gigya.Js/app/API/UiApi';
export declare class PluginTester<PL extends BasePlugin<IPluginParams, IPluginTemplates, IPluginCSS>> {
    defaultContainerID: any;
    static apiKey: string;
    private _instance;
    private _loadPlugin;
    private _instanceCount;
    injector: Map<string, any>;
    disposeInstanceAfterTest: boolean;
    neverInit: boolean;
    constructor(pluginType: {
        new (p: any, t: any, c: any): PL;
    }, defaultContainerID?: any, injectionInfo?: IInjectionInfo);
    getInstance(params: IPluginParams, templates?: IPluginTemplates, css?: IPluginCSS, callback?: (instance: PL) => void): void;
    static setMocks(instance: any, injector: Map<string, any>): void;
    isInstanceLoaded(): boolean;
    loadNewInstance(params: IPluginParams, templates?: IPluginTemplates, css?: IPluginCSS, callback?: (instance: PL) => void): void;
    static getLoadFunc(injectionInfo: IInjectionInfo): (IPluginParams: any, IPluginTemplates: any, IPluginCSS: any) => void;
}
