import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
import { RegisterForm } from "./RegisterForm";
export declare var ProgressionForm_CONSTS: {
    gigyaClass: string;
};
export declare class ProgressionForm extends RegisterForm {
    static CONSTS: {
        gigyaClass: string;
    };
    initApiName: string;
    constructor(screen: Screen, elForm: HTMLFormElement, gigyaClass: string);
    defaultSubmitParams(): Object;
}
