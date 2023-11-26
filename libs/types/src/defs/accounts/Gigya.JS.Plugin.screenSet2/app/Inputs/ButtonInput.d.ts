import { FormInput, IFormInputContext } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput';
export declare class ButtonInput extends FormInput {
    static FORM_TYPE_CRITERIA(context: IFormInputContext): boolean;
    constructor(context: IFormInputContext);
    setValue(): void;
    disable(): void;
    enable(): void;
}
