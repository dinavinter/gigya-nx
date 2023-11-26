import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
import { BaseScreenWidget } from "./BaseScreenWidget";
export declare var SwitchScreen_CONSTS: {
    selector: string;
    switchScreen: string;
    successScreen: string;
    screenSetSkippedScreen: string;
};
export declare class SwitchScreenWidget extends BaseScreenWidget<HTMLAnchorElement> {
    _screen: Screen;
    static CONSTS: {
        selector: string;
        switchScreen: string;
        successScreen: string;
        screenSetSkippedScreen: string;
    };
    bindID: string;
    switchScreen: string;
    private clickHandler;
    constructor(_screen: Screen, el: HTMLAnchorElement);
    linkInstanceElement(parent: any): void;
    unlinkInstanceElement(): void;
    evaluateConditionalAttributes(): void;
    protected updateAttributes(): void;
    protected removeAccessibilityAttributes(): void;
    protected setAccessibilityAttributes(): void;
}
