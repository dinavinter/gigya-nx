import { IWidgetType, IWidget, BaseWidget } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseWidget';
import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
export interface IScreenWidgetType<T extends HTMLElement> extends IWidgetType<T> {
    new (screen: Screen, el: HTMLElement): IScreenWidget;
}
export interface IScreenWidget extends IWidget {
}
export declare class BaseScreenWidget<T extends HTMLElement> extends BaseWidget<T> implements IScreenWidget {
    deps?: Array<IWidgetType<HTMLElement>>;
    private _childWidgets;
    constructor(_screen: Screen, el: T, resetCSS?: boolean);
    unlinkInstanceElement(): void;
    protected unlinkWidgets(): void;
    private static ScreenWidgetsLibrary;
    protected linkWidgets(): void;
    static addWidgetToLibrary(widget: IScreenWidgetType<HTMLElement>): void;
    static registerWidgets(parent: Screen): IScreenWidget[];
    static registerDynamicWidgets(parent: Screen, rootEl: HTMLElement): IScreenWidget[];
}
