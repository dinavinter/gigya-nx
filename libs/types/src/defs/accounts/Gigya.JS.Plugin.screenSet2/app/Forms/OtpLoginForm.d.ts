import { OtpVerificationBaseForm } from "./OtpVerificationBaseForm";
export declare var OtpLoginForm_CONSTS: {
    gigyaClass: string;
};
export declare class OtpLoginForm extends OtpVerificationBaseForm {
    static CONSTS: {
        gigyaClass: string;
    };
    submitApi(): any;
    performSubmit(oParams: any): void;
}
export declare var MobileLoginVerificationForm_CONSTS: {
    gigyaClass: string;
};
export declare class MobileLoginVerificationForm extends OtpLoginForm {
    static CONSTS: {
        gigyaClass: string;
    };
}
