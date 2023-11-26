import { BaseForm } from "../BaseForm";
import { IFormContext } from "../IFormContext";
export declare var AuthMethodsForm_CONSTS: {
    gigyaClass: string;
    authMethodSelector: string;
    authMethod: string;
};
export declare class AuthMethodsForm extends BaseForm {
    static CONSTS: {
        gigyaClass: string;
        authMethodSelector: string;
        authMethod: string;
    };
    private readonly _authMethodToScreenMap;
    linkInstanceElement(parent: HTMLDivElement): Promise<void>;
    canAutoSkip(formContext: IFormContext): Promise<boolean>;
    private getDefaultAuthScreen;
    private getAuthMethods;
    private getPreferredMethod;
}
