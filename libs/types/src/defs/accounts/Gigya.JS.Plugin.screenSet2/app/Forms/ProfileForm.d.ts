import { BaseForm, INeededData } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
import { IFormResponse } from "../ScreenSetPlugin";
export declare var ProfileForm_CONSTS: {
    gigyaClass: string;
    specialFields: {
        username: boolean;
        oldPassword: boolean;
        password: boolean;
        newPassword: boolean;
        passwordRetype: boolean;
        secretQuestion: boolean;
        secretAnswer: boolean;
        addLoginEmails: boolean;
        removeLoginEmails: boolean;
        phoneNumber: boolean;
    };
};
export declare class ProfileForm extends BaseForm {
    static CONSTS: {
        gigyaClass: string;
        specialFields: {
            username: boolean;
            oldPassword: boolean;
            password: boolean;
            newPassword: boolean;
            passwordRetype: boolean;
            secretQuestion: boolean;
            secretAnswer: boolean;
            addLoginEmails: boolean;
            removeLoginEmails: boolean;
            phoneNumber: boolean;
        };
    };
    private requiredProfileFields;
    protected readonly settings: {
        supportConsentData: boolean;
    };
    constructor(screen: Screen, elForm: HTMLFormElement, gigyaClass: string);
    prePopulateDataFrom(): string[];
    getNeededData(): INeededData;
    schemaValidated(): boolean;
    specialFields(): Object;
    getLoginProviders(): string;
    submitApi(): any;
    defaultSubmitParams(): Object;
    getErrorKey(response: IFormResponse): string;
    isPasswordSchemaValidated(): boolean;
    getExtraProfileFields(missingOnly: boolean): any[];
}
