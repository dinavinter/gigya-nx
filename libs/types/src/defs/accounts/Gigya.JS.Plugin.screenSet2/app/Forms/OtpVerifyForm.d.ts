import { OtpVerificationBaseForm } from "./OtpVerificationBaseForm";
export declare var OtpVerifyForm_CONSTS: {
    gigyaClass: string;
};
export declare class OtpVerifyForm extends OtpVerificationBaseForm {
    static CONSTS: {
        gigyaClass: string;
    };
    submitApi(): any;
    onAfterSubmit(response: any): void;
}
