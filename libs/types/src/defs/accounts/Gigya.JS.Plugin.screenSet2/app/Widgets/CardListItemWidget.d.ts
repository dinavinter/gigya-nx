import { BaseFormWidget, IFormWidget } from '../BaseFormWidget';
import { BaseForm } from '../BaseForm';
import { IScreenWidget } from "../BaseScreenWidget";
import { FormInput } from "../Inputs/FormInput";
export declare const CardListItem_CONSTS: {
    dataPathAttribute: string;
    bindingPrefixAttribute: string;
};
export declare abstract class CardListItemWidget extends BaseFormWidget<HTMLLIElement> {
    _form: BaseForm;
    screenDynamicWidgets: Array<IScreenWidget>;
    formWidgets: Array<IFormWidget>;
    formInputs: Array<FormInput>;
    protected get bindingPrefix(): string;
    protected get dataPath(): string;
    protected get indexStr(): string;
    protected get indexInt(): number;
    protected get elementId(): string;
    constructor(_form: BaseForm, el: HTMLLIElement, resetCSS?: boolean);
    linkInstanceElement(parent: HTMLElement): void;
    protected registerFormElements(): void;
    protected registerScreenElements(): void;
    protected updateCardBindings(el: HTMLLIElement): void;
    protected addDynamicErrorBindings(): void;
    unlinkInstanceElement(): void;
    private unlinkDynamicWidgets;
    protected updateFormElementsWithCardIndex(): void;
}
