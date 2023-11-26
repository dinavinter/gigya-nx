import { BaseFormWidget } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget';
import { BaseForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
export declare const OrganizationContextConsts: {
    selector: string;
    dropdownSelector: string;
    buttonSelector: string;
    errorDisplayClass: string;
    errorMessageClass: string;
    errorActiveClass: string;
    disabledClass: string;
    noDataAvailableMessage: string;
};
export interface IOrganizationInfo {
    orgId: string;
    bpid?: string;
    orgName: string;
    status: string;
}
export interface IB2BGroups {
    organizations: IOrganizationInfo[];
}
export declare class OrganizationContextWidget extends BaseFormWidget<HTMLDivElement> {
    private _domUtils;
    static CONSTS: {
        selector: string;
        dropdownSelector: string;
        buttonSelector: string;
        errorDisplayClass: string;
        errorMessageClass: string;
        errorActiveClass: string;
        disabledClass: string;
        noDataAvailableMessage: string;
    };
    private selectElem;
    private errorDisplayElem;
    private buttonElem;
    private errorMessageElem;
    private organizationContextBpid;
    constructor(_form: BaseForm, el: HTMLDivElement, _domUtils?: typeof gigya.utils.DOM);
    linkInstanceElement(parent: HTMLElement): Promise<void>;
    private getOrganizationContext;
    private setOrganizationContext;
    private getUserOrganizations;
    private clearOrganizationSelect;
    private initOrganizationSelect;
    private getActiveOrganizations;
    private isOrganizationContextForm;
    private fillTemplate;
    onClickHandler(): void;
    private disableWidget;
    private enableWidget;
    private preSaveContext;
    private postSaveContext;
    onSelectChangedHandler(): void;
    private publishSelectValueChanged;
    protected showMessage(type: 'success' | 'error', message: string): void;
    protected hideMessage(): void;
}
