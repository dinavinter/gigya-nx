import { BaseForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
import { IFormResponse } from '../ScreenSetPlugin';
export declare var ResetPasswordForm_CONSTS: {
    gigyaClass: string;
};
export declare class ResetPasswordForm extends BaseForm {
    static CONSTS: {
        gigyaClass: string;
    };
    constructor(screen: Screen, elForm: HTMLFormElement, gigyaClass: string);
    specialFields(): Object;
    getErrorKey(response: IFormResponse): string;
    schemaValidated(): boolean;
    profileObjectName(): string;
    submitApi(): any;
    linkInstanceElement(parent: HTMLDivElement): Promise<void>;
    prePopulateData(): any;
    defaultSubmitParams(): {
        passwordResetToken?: string;
    };
    private getLoginId;
    private getConflictingAccountLoginId;
    private get passwordResetToken();
}
