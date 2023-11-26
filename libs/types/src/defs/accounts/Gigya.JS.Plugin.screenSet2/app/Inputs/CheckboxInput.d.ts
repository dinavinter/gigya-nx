import { FormInput, IFormInputContext, IValidationCallback } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput';
export declare var CheckboxInput_CONSTS: {
    errorClass: string;
    validClass: string;
    dataValueInArray: string;
};
export declare class CheckboxInput extends FormInput {
    static FORM_TYPE_CRITERIA(context: IFormInputContext): boolean;
    constructor(context: IFormInputContext);
    required(): boolean;
    private isClientRequired;
    protected _isValueEmpty(value: any): boolean;
    validateValue(formData: any, fieldValue: any, callback: IValidationCallback): void;
    _showValidityOnInput(): void;
    evaluateConditionalAttributes(): void;
    prePopulate(value: string | boolean | string[]): void;
    setValue(dataValue: string | boolean | any, setByScript?: boolean): void;
    getValue(el?: HTMLInputElement, currentValue?: any): any;
}
