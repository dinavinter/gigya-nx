import { IMap } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/utils';
import { BaseForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
export declare var NewsletterSignup_CONSTS: {
    gigyaClass: string;
};
export declare type NewsletterData = {
    getSchema: {
        params: any;
    };
    getAccountInfo: {
        params: any;
    };
    initRegistration?: {
        params: any;
        cache: boolean;
    };
};
export declare class NewsletterSignupForm extends BaseForm {
    static CONSTS: {
        gigyaClass: string;
    };
    protected readonly settings: {
        supportConsentData: boolean;
    };
    constructor(screen: Screen, elForm: HTMLFormElement, gigyaClass: string);
    prePopulateDataFrom(): string[];
    getNeededData(): NewsletterData;
    performSubmit(oParams: any): void;
    private setSubscriptions;
    submitApi(): any;
    onAfterSubmit(response: any): void;
    requiredFields(): IMap<boolean>;
    schemaValidated(): boolean;
}
