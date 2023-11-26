import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
import { BaseLoginForm } from './BaseLoginForm';
import { ILoginDataProvider } from '../DataProviders/ILoginDataProvider';
export declare var LinkAccountsForm_CONSTS: {
    gigyaClass: string;
};
export declare class LinkAccountsForm extends BaseLoginForm {
    static CONSTS: {
        gigyaClass: string;
    };
    constructor(screen: Screen, elForm: HTMLFormElement, gigyaClass: string);
    linkInstanceElement(parent: HTMLDivElement): Promise<void>;
    get dataProvider(): ILoginDataProvider;
    prePopulateData(): any;
    specialFields(): Object;
    getNeededData(): import("../BaseForm").INeededData;
    defaultSubmitParams(): Object;
    getLoginProviders(): string;
    onBeforeSkipped(): Promise<void>;
    onBeforeSubmit(): void;
    onSkipped(): void;
    private setScreenSetData;
    private get conflictingAccount();
    private get loginId();
    private setOtpIdentifierData;
}
