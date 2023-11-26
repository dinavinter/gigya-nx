import { BaseForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
import { IFormResponse } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin';
export declare class BaseLoginForm extends BaseForm {
    constructor(screen: Screen, elForm: HTMLFormElement, gigyaClass: string);
    submitApi(): any;
    getErrorKey(response: IFormResponse): string;
}
