import { IMap } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/utils';
import { BaseForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
export declare var OneAccountSubscription_CONSTS: {
    gigyaClass: string;
    authorization_details_locations: string;
    authorization_details_type: string;
    authorization_details_grant_type: string;
};
export declare type OneAccountGuestData = {
    getSchema: {
        params: any;
    };
    getAccountInfo: {
        params: any;
    };
};
export declare class OneAccountSubscriptionForm extends BaseForm {
    static CONSTS: {
        gigyaClass: string;
        authorization_details_locations: string;
        authorization_details_type: string;
        authorization_details_grant_type: string;
    };
    protected readonly settings: {
        supportConsentData: boolean;
    };
    constructor(screen: Screen, elForm: HTMLFormElement, gigyaClass: string);
    prePopulateDataFrom(): string[];
    getNeededData(): OneAccountGuestData;
    performSubmit(oParams: any): void;
    private setSubscriptions;
    submitApi(): any;
    onAfterSubmit(response: any): void;
    requiredFields(): IMap<boolean>;
    schemaValidated(): boolean;
    private getValueOrNull;
}
