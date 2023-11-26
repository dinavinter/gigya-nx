import { BaseFormWidget } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget';
import { BaseForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
export declare var SecretQuestionWidget_CONSTS: {
    selector: string;
    allowEmpty: string;
};
export declare class SecretQuestionWidget extends BaseFormWidget<HTMLDivElement> {
    private questions;
    private answerField;
    static CONSTS: {
        selector: string;
        allowEmpty: string;
    };
    constructor(form: BaseForm, el: HTMLDivElement);
    unlinkTemplate(): void;
    linkInstanceElement(parent: HTMLElement): void;
    unlinkInstanceElement(): void;
    setQuestion(question: string): void;
}
