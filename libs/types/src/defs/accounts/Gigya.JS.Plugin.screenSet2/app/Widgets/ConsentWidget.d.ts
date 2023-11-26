import { BaseFormWidget } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget';
import { BaseForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
export declare const Consent_CONSTS: {
    selector: string;
    titleAttr: string;
    approvedOnLabelAttr: string;
    versionAttr: string;
    versionLabelAttr: string;
    localeLabelAttr: string;
};
export declare class ConsentWidget extends BaseFormWidget<HTMLDivElement> {
    static CONSTS: {
        selector: string;
        titleAttr: string;
        approvedOnLabelAttr: string;
        versionAttr: string;
        versionLabelAttr: string;
        localeLabelAttr: string;
    };
    constructor(_form: BaseForm, el: HTMLDivElement);
    linkInstanceElement(parent: HTMLElement): void;
    evaluateConditionalAttributes(): void;
    private loadWidget;
    private getTemplate;
    private formatTime;
}
