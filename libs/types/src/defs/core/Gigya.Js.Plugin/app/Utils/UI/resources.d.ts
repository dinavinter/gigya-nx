import { IPluginTemplates } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginTemplates';
import { IPluginCSS } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginCSS';
export declare function getTemplates<PT extends IPluginTemplates>(plugins: string[]): PT;
export declare function getCss<PC extends IPluginCSS>(plugins: string[]): PC;
