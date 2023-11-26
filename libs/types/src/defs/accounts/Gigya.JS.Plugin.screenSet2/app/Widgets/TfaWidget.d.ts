import { BaseScreenWidget } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget';
import { IForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin';
import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
export declare const TfaWidget_CONSTS: {
    selector: string;
};
export declare class TfaWidget extends BaseScreenWidget<HTMLDivElement> implements IForm {
    bindID: string;
    private tfaContainerId;
    private _instance;
    static CONSTS: {
        selector: string;
    };
    constructor(_screen: Screen, el: HTMLDivElement);
    linkInstanceElement(parent: HTMLElement): Promise<unknown>;
    unlinkInstanceElement(): void;
    protected renderWidget(): void;
}
