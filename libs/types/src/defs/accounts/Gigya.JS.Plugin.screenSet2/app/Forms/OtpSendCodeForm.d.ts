import { INeededData } from './../BaseForm';
import { BaseForm } from "../BaseForm";
export declare var OtpSendCodeForm_CONSTS: {
    gigyaClass: string;
};
export declare class OtpSendCodeForm extends BaseForm {
    static CONSTS: {
        gigyaClass: string;
    };
    protected readonly settings: {
        supportConsentData: boolean;
    };
    submitApi(): any;
    prePopulateDataFrom(): any;
    onAfterSubmit(response: any): void;
    specialFields(): Object;
    performSubmit(oParams: any): void;
    private _saveSpecialFieldsInCache;
    defaultSubmitParams(): {};
    schemaValidated(): boolean;
    getNeededData(): INeededData;
}
export declare var MobileLoginForm_CONSTS: {
    gigyaClass: string;
};
export declare class MobileLoginForm extends OtpSendCodeForm {
    static CONSTS: {
        gigyaClass: string;
    };
}
