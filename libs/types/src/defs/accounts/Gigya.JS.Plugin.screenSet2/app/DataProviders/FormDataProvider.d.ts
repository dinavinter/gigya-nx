import { BaseForm } from '../BaseForm';
import { IFormDataProvider } from './IFormDataProvider';
export declare class FormDataProvider implements IFormDataProvider {
    protected _form: BaseForm;
    constructor(form: BaseForm);
    get defaultSubmitParams(): object;
    get hasProviderSessionInfo(): boolean;
    get includeParams(): string;
    get lang(): string;
}
