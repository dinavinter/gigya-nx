import { OtpVerificationBaseForm } from './OtpVerificationBaseForm';
export declare var EmaiLCodeAuthMethodForm_CONSTS: {
    gigyaClass: string;
    authMethod: string;
};
export declare class EmailCodeAuthMethodForm extends OtpVerificationBaseForm {
    static CONSTS: {
        gigyaClass: string;
        authMethod: string;
    };
    linkInstanceElement(parent: HTMLDivElement): Promise<void>;
    submitApi(): any;
    private sendEmailOTP;
}
