import { IMap } from 'src/core/Gigya.Js/app/Utils/array';
export interface IPluginTemplates extends IMap<string> {
    legacyModal?: string;
    modal?: string;
    modalCloseButton?: string;
}
