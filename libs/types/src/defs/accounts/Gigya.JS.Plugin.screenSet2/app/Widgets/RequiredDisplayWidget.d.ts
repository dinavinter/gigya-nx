import { BaseFormWidget } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget';
import { IFormInput } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput';
import { BaseForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
export declare const RequiredDisplayWidget_CONSTS: {
    selector: string;
    boundTo: string;
    alwaysVisible: string;
};
export declare class RequiredDisplayWidget extends BaseFormWidget<HTMLDivElement> {
    static CONSTS: {
        selector: string;
        boundTo: string;
        alwaysVisible: string;
    };
    private boundTo;
    private boundToField;
    constructor(form: BaseForm, el: HTMLDivElement);
    linkInstanceElement(parent: HTMLElement): void;
    evaluateConditionalAttributes(): void;
    updateBoundedField(field: IFormInput): void;
    private updateVisibility;
    private show;
    private hide;
}
