import { BaseForm, INeededData } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
export declare var ResendVerificationCodeForm_CONSTS: {
    gigyaClass: string;
};
export declare class ResendVerificationCodeForm extends BaseForm {
    static CONSTS: {
        gigyaClass: string;
    };
    constructor(screen: Screen, elForm: HTMLFormElement, gigyaClass: string);
    getNeededData(): INeededData;
    specialFields(): Object;
    submitApi(): any;
}
