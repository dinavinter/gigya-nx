import { FormInput, IFormInputContext, IValidationCallback } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput';
export declare class EmailInput extends FormInput {
    static FORM_TYPE_CRITERIA(context: IFormInputContext): boolean;
    constructor(context: IFormInputContext);
    validateValue(formData: any, fieldValue: any, callback: IValidationCallback): void;
}
