import { FormInput, IFormInputContext } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput';
export declare var RadioInput_CONSTS: {
    wrapperSelector: string;
    displayNameExpressionAttr: string;
};
export declare class RadioInput extends FormInput {
    static FORM_TYPE_CRITERIA(context: IFormInputContext): boolean;
    constructor(context: IFormInputContext);
    getValidateValue(formData: any): any;
    linkInstanceElement(parent: HTMLFormElement): void;
    setValue(dataValue: string | boolean, setByScript?: boolean): void;
    getValue(el?: HTMLInputElement): string | number | boolean | object;
    protected groupRadioButtonArrayFields(): void;
    protected addDisplayName(): void;
}
