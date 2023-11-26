import { BaseFormWidget } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget';
import { BaseForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
export declare var LoginAvailabilityWidget_CONSTS: {
    selector: string;
    boundTo: string;
};
export declare class LoginAvailabilityWidget extends BaseFormWidget<HTMLDivElement> {
    private boundedField;
    private originalDisplay;
    private loginIdStateListener;
    static CONSTS: {
        selector: string;
        boundTo: string;
    };
    constructor(form: BaseForm, el: HTMLDivElement);
    private init;
    private reset;
    linkInstanceElement(parent: HTMLElement): void;
    unlinkTemplate(): void;
    private onLoginIdStateChange;
    evaluateConditionalAttributes(): void;
}
