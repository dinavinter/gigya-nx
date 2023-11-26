import { BaseFormWidget } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget';
import { BaseForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
export declare var SubscriptionWidget_CONSTS: {
    selector: string;
    subscriptionName: string;
};
export declare class SubscriptionWidget extends BaseFormWidget<HTMLDivElement> {
    static CONSTS: {
        selector: string;
        subscriptionName: string;
    };
    private _shouldPopulate;
    private subscriptionObj;
    private _container;
    private inputElement;
    private _labelElement;
    private _statusElement;
    constructor(form: BaseForm, el: HTMLDivElement);
    linkInstanceElement(parent: HTMLElement): void;
    renderWidget(): void;
}
