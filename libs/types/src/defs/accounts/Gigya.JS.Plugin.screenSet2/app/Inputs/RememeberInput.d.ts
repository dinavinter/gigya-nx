import { CheckboxInput } from './CheckboxInput';
import { IFormInputContext } from './FormInput';
export declare class RememeberInput extends CheckboxInput {
    static FORM_TYPE_CRITERIA(context: IFormInputContext): boolean;
    constructor(context: IFormInputContext);
}
