import { BaseScreenWidget } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget';
import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
import { TranslatedWidget } from './TranslatedWidget';
export declare const Binding_CONSTS: {
    selector: string;
    dataBindingAttribute: string;
};
export declare class BindingWidget extends BaseScreenWidget<HTMLDivElement> {
    deps: (typeof TranslatedWidget)[];
    static CONSTS: {
        selector: string;
        dataBindingAttribute: string;
    };
    private supportInterpolation;
    protected originalString: string;
    protected lastValue: string;
    constructor(_screen: Screen, el: HTMLDivElement);
    linkInstanceElement(parent: HTMLElement): void;
    evaluateConditionalAttributes(): void;
    protected getBindingKey(): string;
    /**
     * Get Value from apiData
     */
    protected getValue(): string;
    /**
     * Set bounded text.
     */
    protected updateValue(): void;
}
