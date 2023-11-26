import { BaseForm } from "../BaseForm";
import { IErrorInfo } from "../Errors";
export declare var ChangeOrganizationContextFormConsts: {
    gigyaClass: string;
};
export declare class ChangeOrganizationContextForm extends BaseForm {
    static CONSTS: {
        gigyaClass: string;
    };
    submitApi(): any;
    protected getCustomValidationErrors(): Promise<IErrorInfo[]>;
    performSubmit(oParams: any): void;
}
