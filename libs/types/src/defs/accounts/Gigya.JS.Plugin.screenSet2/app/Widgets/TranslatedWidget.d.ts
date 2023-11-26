import { BaseScreenWidget } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget';
import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
export declare const Translated_CONSTS: {
    selector: string;
    translationKeyAttribute: string;
};
export declare class TranslatedWidget extends BaseScreenWidget<HTMLDivElement> {
    static CONSTS: {
        selector: string;
        translationKeyAttribute: string;
    };
    protected renderedTranslationKey: string;
    constructor(_screen: Screen, el: HTMLDivElement);
    linkInstanceElement(parent: HTMLElement): void;
    unlinkInstanceElement(): void;
    /**
     * Handle case where translation key is updated via conditional attr.
     */
    evaluateConditionalAttributes(): void;
    /**
     * Normalize translation key lowercase.
     */
    protected getTranslationKey(): string;
    /**
     * Set translated text.
     */
    protected updateTranslation(): void;
}
