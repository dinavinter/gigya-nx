import { IFormInputContext, IValidationCallback } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput';
import { ServerFormInput } from "./ServerFormInput";
export declare class LoginIdInput extends ServerFormInput {
    private _serverValidateAvaliability;
    private lastCheck;
    private isServerValidationEnabled;
    private loginIdMustBeEmail;
    static FORM_TYPE_CRITERIA(context: IFormInputContext): boolean;
    constructor(context: IFormInputContext);
    protected showDataPending(): void;
    protected onKeyUp(e: KeyboardEvent): void;
    linkInstanceElement(parent: HTMLFormElement): void;
    unlinkInstanceElement(): void;
    serverValidated(): boolean;
    startServerValidation(fieldValue: any, callback: IValidationCallback): void;
    serverQueryDone(res: any, checkedValue: any, callback: IValidationCallback): void;
    validateValue(formData: any, fieldValue: any, callback: IValidationCallback): void;
    private getEmailFromQueryParams;
}
