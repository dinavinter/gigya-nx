import { BaseFormWidget } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget';
import { BaseForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
export declare const Image_CONSTS: {
    selector: string;
    srcAttribute: string;
    widthAttribute: string;
    heightAttribute: string;
    backgroundSizeAttribute: string;
};
export declare class ImageWidget extends BaseFormWidget<HTMLDivElement> {
    static CONSTS: {
        selector: string;
        srcAttribute: string;
        widthAttribute: string;
        heightAttribute: string;
        backgroundSizeAttribute: string;
    };
    protected prevSrc: string;
    constructor(_form: BaseForm, el: HTMLDivElement);
    linkInstanceElement(parent: HTMLElement): void;
    evaluateConditionalAttributes(): void;
    /**
     * Set background image and handle HTTPS proxying.
     */
    protected setBackgroundImage(): void;
    /**
     * Translate width/height to CSS-ready value.
     */
    protected getSize(size: string): string;
}
