import { BaseFormWidget } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget';
import { BaseForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
export declare const CaptchaWidget_CONSTS: {
    selector: string;
};
export declare class CaptchaWidget extends BaseFormWidget<HTMLDivElement> {
    static CONSTS: {
        selector: string;
    };
    private _captchaHandler;
    private _index;
    constructor(form: BaseForm, el: HTMLDivElement);
    private captchaMode;
    linkInstanceElement(parent: HTMLElement): Promise<void>;
    isHidden(): boolean;
    reload(): void;
    getToken(): Promise<string>;
    getType(): string;
}
