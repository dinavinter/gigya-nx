import { BaseScreenWidget } from '../BaseScreenWidget';
import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
import { TranslatedWidget } from './TranslatedWidget';
export declare const ApiLink_CONSTS: {
    selector: string;
    attributeName: string;
    disableTimeoutInSeconds: string;
    disableOnRender: string;
    disabledClass: string;
    deps: (typeof TranslatedWidget)[];
};
export interface IApiLinkWidgetConfig {
    defaultDisableTimeout: number;
}
export declare class ApiLinkWidget extends BaseScreenWidget<HTMLSpanElement> {
    private _apiList;
    private _domUtils;
    private _config;
    static CONSTS: {
        selector: string;
        attributeName: string;
        disableTimeoutInSeconds: string;
        disableOnRender: string;
        disabledClass: string;
        deps: (typeof TranslatedWidget)[];
    };
    private _disableTime;
    private _disableTimeout;
    private _apiHandler;
    constructor(_screen: Screen, el: HTMLSpanElement, _apiList?: (gigya._.ServerApi | gigya._.UiApi | gigya._.api.VersionSelector)[], _domUtils?: typeof gigya.utils.DOM, _config?: IApiLinkWidgetConfig);
    linkInstanceElement(parent: HTMLElement): void;
    unlinkInstanceElement(): void;
    private _clickHandler;
    private _getApiHandler;
    private _addClickHandler;
    private _removeClickHandler;
    private _setDisableTimeout;
    private _disable;
    private _enable;
    private _disabledOnRender;
}
