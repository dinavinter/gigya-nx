import { BaseForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
export declare const CustomForm_CONSTS: {
    gigyaClass: string;
};
export declare class CustomForm extends BaseForm {
    static CONSTS: {
        gigyaClass: string;
    };
    constructor(screen: Screen, elForm: HTMLFormElement, gigyaClass: string);
}
