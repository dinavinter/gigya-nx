import { BaseFormWidget, IFormWidget } from './BaseFormWidget';
import { BaseForm } from './BaseForm';
export declare abstract class CardListFormWidget extends BaseFormWidget<HTMLUListElement> {
    private _domUtils;
    protected itemId: string;
    formWidgets: Array<IFormWidget>;
    protected abstract reloadData(): Promise<any[]>;
    protected get emptyItemElem(): Element;
    protected get itemTemplate(): string;
    protected get cardListElem(): Element;
    protected get items(): NodeListOf<Element>;
    constructor(_form: BaseForm, el: HTMLUListElement, _domUtils?: typeof gigya.utils.DOM);
    linkInstanceElement(parent: HTMLElement): Promise<void>;
    createItemTemplate(el: HTMLUListElement): void;
    unlinkInstanceElement(): void;
    protected reloadList(): Promise<void>;
    protected clearList(): void;
    protected showList(): void;
}
