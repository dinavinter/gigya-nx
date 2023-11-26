import { FormInput, IFormInputContext, IValidationCallback } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput';
import { InputValueType } from '../SchemaTypeConverter';
export declare var BasePasswordInput_CONSTS: {
    showPasswordStrength: string;
};
export declare class BasePasswordInput extends FormInput {
    private showPasswordStrength;
    private passwordStrengthOrientation;
    private passwordStrengthWidget;
    private showPasswordStrengthConditionalExists;
    private showPasswordStrengthConditional;
    private showPasswordStrengthAttribute;
    constructor(context: IFormInputContext);
    linkInstanceElement(parent: HTMLFormElement): void;
    unlinkInstanceElement(): void;
    protected getTruncatedValue(val: any): string;
    validateValue(formData: any, fieldValue: any, callback: IValidationCallback): void;
    getValue(el?: HTMLInputElement, currentValue?: any): InputValueType;
    isPasswordSchemaValidated(): boolean;
    evaluateConditionalAttributes(): void;
    isPasswordStrengthWidgetBound(): boolean;
    private shouldValidatePasswordComplexity;
}
export declare class PasswordInput extends BasePasswordInput {
    static FORM_TYPE_CRITERIA(context: IFormInputContext): boolean;
    constructor(context: IFormInputContext);
    isPasswordSchemaValidated(): boolean;
}
export declare class NewPasswordInput extends BasePasswordInput {
    static FORM_TYPE_CRITERIA(context: IFormInputContext): boolean;
    constructor(context: IFormInputContext);
    isPasswordSchemaValidated(): boolean;
}
