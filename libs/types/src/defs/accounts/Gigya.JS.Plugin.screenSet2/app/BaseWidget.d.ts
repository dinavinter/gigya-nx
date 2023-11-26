import { ITemplateElement, TemplateElement, IConditionalAttribute } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement';
import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
import { IMap } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/utils';
export declare type IWidgetType<T extends HTMLElement> = (new (...args: any[]) => BaseWidget<T>) & {
    CONSTS: {
        selector: string;
    };
};
export interface IWidget extends ITemplateElement {
    _screen: Screen;
}
export declare class BaseWidget<T extends HTMLElement> extends TemplateElement<T> {
    _screen: Screen;
    deps?: Array<IWidgetType<HTMLElement>>;
    params: IMap<string>;
    renderWidgetUI: boolean;
    protected widgetParams: IMap<string>;
    protected evaluationCache: {
        [key: string]: string;
    };
    private _otherElements;
    private readonly eventListeners;
    constructor(el: T, parent: ITemplateElement, _screen: Screen, resetCss?: boolean);
    static registerTypedWidgets<T, WT extends IWidgetType<HTMLElement>>(parentElement: HTMLElement, widgetLibrary: IMap<WT>, factory: (type: WT, el: HTMLElement) => T): T[];
    private getElementParams;
    evaluateConditionalAttributes(): void;
    evaluate(text?: string): string;
    unlinkInstanceElement(): void;
    protected executeConditionalResult(evaluationResult: string, conditionalAtt: IConditionalAttribute, element: HTMLElement): string;
    protected renderWidget(): void;
    protected addDomEventListener(el: HTMLElement, eventName: string, handler: Function, key?: string): void;
    protected addButtonHandler(el: any, handler: any, key?: string): void;
    protected submitOnEnter(listenEl: HTMLElement, submitElement?: HTMLElement): void;
    protected removeButtonHandler(key: string): void;
    protected removeDomEventListener(key: string): void;
    protected clearDomEventListeners(): void;
    protected prepareOtherElements(): void;
    protected linkOtherElements(): void;
    protected unlinkChildElements(): void;
}
