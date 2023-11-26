import { BaseForm, INeededData } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
export declare var ReauthenticationForm_CONSTS: {
    gigyaClass: string;
};
export declare class ReauthenticationForm extends BaseForm {
    static CONSTS: {
        gigyaClass: string;
    };
    protected readonly settings: {
        supportConsentData: boolean;
    };
    constructor(screen: Screen, elForm: HTMLFormElement, gigyaClass: string);
    prePopulateData(): any;
    submitApi(): any;
    getNeededData(): INeededData;
    getLoginProviders(): string;
    defaultSubmitParams(): Object;
    specialFields(): Object;
}
