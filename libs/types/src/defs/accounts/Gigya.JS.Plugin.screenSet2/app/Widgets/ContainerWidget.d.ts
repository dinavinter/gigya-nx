import { BaseFormWidget } from '../BaseFormWidget';
import { BaseForm } from '../BaseForm';
export declare const ContainerWidget_CONSTS: {
    selector: string;
    activeClass: string;
    emptyFields: string;
    loginIdentities: string;
    conditionAttr: string;
    onRenderAttr: string;
};
export declare class ContainerWidget extends BaseFormWidget<HTMLDivElement> {
    name: string;
    validationPassed: boolean;
    private originalRenderingStatus;
    private conditionStatus;
    private emptyFields;
    private renderingConditions;
    private validationConditions;
    private onElementChange;
    static CONSTS: {
        selector: string;
        activeClass: string;
        emptyFields: string;
        loginIdentities: string;
        conditionAttr: string;
        onRenderAttr: string;
    };
    constructor(_form: BaseForm, el: HTMLDivElement);
    update(el?: HTMLDivElement): void;
    canAutoSkip(): boolean;
    linkInstanceElement(parent: HTMLFormElement): void;
    private refresh;
    private testRendering;
    private testValidations;
    private testContainer;
    private containsEmptyRequiredFields;
    evaluateConditionalAttributes(): void;
    hasConditionalAttributes(): boolean;
}
export interface IContainerHistory {
    displayCount: number;
    lastDisplay: number;
    wasUpdated?: boolean;
}
