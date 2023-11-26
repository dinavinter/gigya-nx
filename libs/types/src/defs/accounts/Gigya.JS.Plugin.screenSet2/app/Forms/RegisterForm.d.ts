import { IMap } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/utils';
import { BaseForm, INeededData } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
export declare var RegisterForm_CONSTS: {
    gigyaClass: string;
};
export declare class RegisterForm extends BaseForm {
    static CONSTS: {
        gigyaClass: string;
    };
    protected initApiName: string;
    protected readonly settings: {
        supportConsentData: boolean;
    };
    constructor(screen: Screen, elForm: HTMLFormElement, gigyaClass: string);
    requiredFields(): IMap<boolean>;
    prePopulateDataFrom(): string[];
    linkInstanceElement(parent: HTMLDivElement): Promise<void>;
    getNeededData(): INeededData;
    schemaValidated(): boolean;
    specialFields(): Object;
    performSubmit(oParams: any): void;
    submitApi(): any;
    protected queryStringToSubmitParamMap(): {
        gig_email: string;
    };
    defaultSubmitParams(): Object;
    private isFinalizeRegistrationFlowActive;
    private abortFinalizeRegistrationFlow;
}
