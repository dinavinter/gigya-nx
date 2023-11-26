import { IPlugin, IInjectionInfo } from 'src/core/Gigya.Js/app/API/UiApi';
export declare var instances: {
    [containerID: string]: IPlugin;
};
export declare function getPluginInstance(params: Object, injectionInfo: IInjectionInfo): IPlugin;
export declare function setPluginInstance(params: Object, injectionInfo: IInjectionInfo, instance: IPlugin, override?: boolean): void;
export declare function removePluginInstance(params: Object, injectionInfo: IInjectionInfo): void;
