import { BaseScreenWidget } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget';
import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
export declare var MyPhotoWidget_CONSTS: {
    selector: string;
};
export declare class MyPhotoWidget extends BaseScreenWidget<HTMLDivElement> {
    private containerId;
    static CONSTS: {
        selector: string;
    };
    private _instance;
    constructor(_screen: Screen, el: HTMLDivElement);
    linkInstanceElement(parent: HTMLElement): void;
    unlinkInstanceElement(): void;
    protected renderWidget(): void;
}
