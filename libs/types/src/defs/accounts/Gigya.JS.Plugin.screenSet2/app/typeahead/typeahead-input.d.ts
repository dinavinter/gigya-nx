import { IFormInputContext } from "../Inputs/FormInput";
import { ServerFormInput } from "../Inputs/ServerFormInput";
export declare class TypeaheadInput extends ServerFormInput {
    protected isOpen: boolean;
    options: string[];
    private inputEL;
    private clearBtnEL;
    private popupEL;
    private optionsListEL;
    private loadingEL;
    private _isClickOutside;
    private warningOption;
    private minimumCharacters;
    private bodyEl;
    private screenEl;
    private containerEl;
    private afterSelectCallback;
    private _clickOutSideCallback;
    clickOutsideListener: (e: any) => void;
    inputFocusListener: (e: any) => void;
    inputChangeListener: (e: any) => void;
    optionsSelectListener: (e: any) => void;
    clearClickListener: (e: any) => void;
    arrowKeyListener: (e: any) => void;
    scrollListener: (e: any) => void;
    constructor(context: IFormInputContext);
    init(input: HTMLInputElement, clickOutsideCallback?: any, options?: any): void;
    private initComboElements;
    setOptions(newOptions: string[]): void;
    updateList(): void;
    clearList(): void;
    showWarning(): void;
    removeWarning(): void;
    setLoading(on: boolean): void;
    private handleOptionSelect;
    private addOption;
    private addEventListeners;
    private onInputChange;
    private onClearClick;
    get clickedOutside(): boolean;
    set clickedOutside(clicked: boolean);
    private onInputFocus;
    showPopup(): void;
    hidePopup(): void;
    private onClickOutside;
    removeListeners(): void;
    private calculateDropDownPosition;
    private onScroll;
    private useArrowKeys;
    private moveUp;
    private moveDown;
    private focusFirstChildInList;
    evaluateConditionalAttributes(): void;
}
