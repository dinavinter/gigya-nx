import { IModalDialogParams } from 'src/core/Gigya.Js.Plugin/app/interfaces/IModalDialogParams';
import { BasePlugin } from 'src/core/Gigya.Js.Plugin/app/BasePlugin';
import { IPluginTemplates } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginTemplates';
import { IPluginCSS } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginCSS';
export interface IPluginParams extends IModalDialogParams {
    width?: string;
    height?: string;
    captionTextKey?: string;
    instanceID?: string;
    containerID?: string;
    customLang?: {
        [key: string]: string;
    };
    lang?: string;
    deviceType?: string;
    responsive?: boolean;
    dialogStyle?: string;
    onLoad?: () => void;
    getInstance?: (instance: BasePlugin<IPluginParams, IPluginTemplates, IPluginCSS>) => void;
    _noInit?: boolean;
    _allowMultipleInstances?: boolean;
}
