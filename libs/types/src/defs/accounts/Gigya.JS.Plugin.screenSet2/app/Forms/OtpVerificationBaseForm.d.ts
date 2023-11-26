import { BaseForm } from "../BaseForm";
import { IFormResponse } from "../ScreenSetPlugin";
export declare abstract class OtpVerificationBaseForm extends BaseForm {
    specialFields(): Object;
    getErrorKey(response: IFormResponse): string;
    defaultSubmitParams(): {};
    protected onCodeSent(response: any): void;
}
