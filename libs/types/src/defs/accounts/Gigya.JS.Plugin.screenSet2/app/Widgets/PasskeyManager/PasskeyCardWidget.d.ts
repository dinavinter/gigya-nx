import { BaseScreenWidget } from '../../BaseScreenWidget';
import { Screen } from '../../Screen';
import { TranslatedWidget } from '../TranslatedWidget';
import { IForm } from '../../ScreenSetPlugin';
export declare const PasskeyCard_CONSTS: {
    selector: string;
    deleteButtonSelector: string;
    newCardClass: string;
    deps: (typeof TranslatedWidget)[];
};
export declare class PasskeyCardWidget extends BaseScreenWidget<HTMLLIElement> implements IForm {
    private _domUtils;
    static CONSTS: {
        selector: string;
        deleteButtonSelector: string;
        newCardClass: string;
        deps: (typeof TranslatedWidget)[];
    };
    bindID: string;
    private deletePasskey;
    protected get index(): string;
    protected get elementId(): string;
    protected get deleteButton(): Element;
    constructor(_screen: Screen, el: HTMLLIElement, _domUtils?: typeof gigya.utils.DOM);
    linkInstanceElement(parent: HTMLElement): Promise<void>;
    unlinkInstanceElement(): void;
    private isNewCard;
    private addEventHandlers;
    private removeEventHandlers;
}
