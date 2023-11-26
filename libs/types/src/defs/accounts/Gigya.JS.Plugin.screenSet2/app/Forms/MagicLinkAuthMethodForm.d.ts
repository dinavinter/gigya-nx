import { BaseForm } from '../BaseForm';
export declare var MagicLinkMethodForm_CONSTS: {
    gigyaClass: string;
    authMethod: string;
};
export declare class MagicLinkAuthMethodForm extends BaseForm {
    static CONSTS: {
        gigyaClass: string;
        authMethod: string;
    };
    linkInstanceElement(parent: HTMLDivElement): Promise<void>;
    private sendMagicLink;
    private displayMagicLinkErrors;
    private getContextObject;
}
