import { BaseScreenWidget } from '../BaseScreenWidget';
import { Screen } from '../Screen';
export declare const CardList_CONSTS: {
    listSelector: string;
    cardSelector: string;
    emptyListItemSelector: string;
    emptyListItemActiveClass: string;
    indexAttribute: string;
    idAttribute: string;
};
export declare abstract class CardListWidget extends BaseScreenWidget<HTMLUListElement> {
    private _domUtils;
    protected itemId: string;
    protected abstract reloadData(): Promise<any[]>;
    protected get emptyItemElem(): Element;
    protected get itemTemplate(): string;
    protected get cardListElem(): Element;
    protected get items(): NodeListOf<Element>;
    constructor(_screen: Screen, el: HTMLUListElement, _domUtils?: typeof gigya.utils.DOM);
    linkInstanceElement(parent: HTMLElement): Promise<void>;
    createItemTemplate(el: HTMLUListElement): void;
    unlinkInstanceElement(): void;
    protected reloadList(): Promise<void>;
    protected clearList(): void;
    protected showList(): void;
}
