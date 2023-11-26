import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
import { IScreenSetParams } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin';
import { BaseLoginForm } from './BaseLoginForm';
export declare var LoginForm_CONSTS: {
    gigyaClass: string;
};
export declare class LoginForm extends BaseLoginForm {
    static CONSTS: {
        gigyaClass: string;
    };
    constructor(screen: Screen, elForm: HTMLFormElement, gigyaClass: string);
    specialFields(): Object;
    linkInstanceElement(parent: HTMLDivElement): Promise<void>;
    _getSubmitApiParams(params: IScreenSetParams): IScreenSetParams;
    defaultSubmitParams(): Object;
}
