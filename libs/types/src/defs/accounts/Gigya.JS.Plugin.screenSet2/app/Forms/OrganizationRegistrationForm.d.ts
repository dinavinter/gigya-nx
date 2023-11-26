import { BaseForm, INeededData } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
export declare var OrgRegisterForm_CONSTS: {
    gigyaClass: string;
};
export declare class OrgRegisterForm extends BaseForm {
    static CONSTS: {
        gigyaClass: string;
    };
    protected readonly settings: {
        supportConsentData: boolean;
    };
    constructor(screen: Screen, elForm: HTMLFormElement, gigyaClass: string);
    private mergeOrgSchemaIntoMainSchema;
    prePopulateDataFrom(): string[];
    getNeededData(): INeededData;
    schemaValidated(): boolean;
    submitApi(): any;
}
