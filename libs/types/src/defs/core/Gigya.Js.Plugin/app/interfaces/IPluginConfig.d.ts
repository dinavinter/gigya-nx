import { IPluginParams } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginParams';
import { IBaseObjectConfig } from 'src/core/Gigya.Js/app/BaseObject/IBaseObjectConfig';
import { PluginStyle } from 'src/core/Gigya.Js.Plugin/app/PluginStyles';
export interface IPluginConfig<P extends IPluginParams> extends IBaseObjectConfig<P> {
    hasMobileUI: boolean;
    allowModal: boolean;
    disableModalContainerInit?: boolean;
    defaultDialogStyle?: PluginStyle;
    defaultModalParams?: P;
    supportsResponsive?: boolean;
    enableSizePolling?: boolean;
    enableViewportPolling?: boolean;
}
