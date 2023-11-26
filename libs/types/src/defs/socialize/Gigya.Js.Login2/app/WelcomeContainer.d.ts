import { ContainerBase } from 'src/socialize/Gigya.Js.Login2/app/ContainerBase';
import { LoginPlugin } from 'src/socialize/Gigya.Js.Login2/app/LoginPlugin';
export declare class WelcomeContainer extends ContainerBase {
    private plugin;
    private element;
    private ElementsSelector;
    constructor(plugin: LoginPlugin);
    getHtmlElement(): HTMLElement;
    private getWelcomeButtonSized;
    private setProviderCellElement;
    private setGreetingElement;
    private setSignInUsingAnotherAccount;
    private onNotYouClickHandler;
}
