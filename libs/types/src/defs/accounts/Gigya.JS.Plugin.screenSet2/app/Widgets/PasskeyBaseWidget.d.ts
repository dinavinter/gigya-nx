import { BaseScreenWidget } from '../BaseScreenWidget';
import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
export declare const Passkey_CONSTS: {
    selector: string;
    errorDisplayClass: string;
    errorMessageClass: string;
    errorActiveClass: string;
};
export declare class PasskeyBaseWidget extends BaseScreenWidget<HTMLDivElement> {
    private _domUtils;
    private errorDisplayElem;
    private errorMessageElem;
    private buttonElem;
    private onClickHandler;
    protected get hostForm(): import("../BaseForm").BaseForm;
    constructor(_screen: Screen, el: HTMLDivElement, _domUtils?: typeof gigya.utils.DOM);
    linkInstanceElement(parent: HTMLElement): void;
    unlinkInstanceElement(): void;
    protected onClick(): void;
    protected showMessage(type: 'success' | 'error', message: string): void;
    protected hideMessage(): void;
    private _addClickHandler;
    private _removeClickHandler;
}
