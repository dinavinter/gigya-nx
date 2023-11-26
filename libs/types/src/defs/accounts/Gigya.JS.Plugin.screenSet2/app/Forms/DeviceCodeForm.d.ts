import { BaseForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
import { IFormResponse } from '../ScreenSetPlugin';
export declare enum RegisterDeviceRequestParam {
    UserCode = "user_code"
}
export declare enum RegisterDeviceFormParam {
    UserCode = "userCode"
}
export declare const DeviceCodeForm_CONSTS: {
    gigyaClass: string;
};
interface DeviceCodeFormFields {
    [RegisterDeviceFormParam.UserCode]: string;
}
export declare class DeviceCodeForm extends BaseForm {
    static CONSTS: {
        gigyaClass: string;
    };
    specialFields(): Object;
    prePopulateData(): DeviceCodeFormFields;
    submitApi(): typeof gigya.fidm.oidc.op.deviceContinue;
    performSubmit(formData: DeviceCodeFormFields): void;
    getErrorKey(response: IFormResponse): string;
    private getUserCodeFromURL;
}
export {};
