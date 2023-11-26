import { IProvidersGridDimensions } from 'src/socialize/Gigya.Js.Login2/app/Interfaces';
import { LoginPlugin } from 'src/socialize/Gigya.Js.Login2/app/LoginPlugin';
export declare class FooterContainer {
    private plugin;
    private gridSize;
    private element;
    private template;
    constructor(plugin: LoginPlugin, gridSize: IProvidersGridDimensions);
    getHtmlElement(): HTMLElement;
    private setShowWhatsThis;
}
