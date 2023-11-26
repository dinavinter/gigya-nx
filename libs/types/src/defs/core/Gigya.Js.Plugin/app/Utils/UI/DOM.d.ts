export declare function addBrowserInfoClassesToElement(el: HTMLElement): void;
export declare function setTextboxSubmitButton(elTextbox: HTMLElement, elButton: HTMLElement): void;
export declare function getRelativePosition(position: any, size: any, direction: any, margin: any, flip: any): {
    top: number;
    left: number;
    bottom: number;
    right: number;
};
export declare function placePopoverNearElement(elTarget: any, container: any, direction: any, margin: any, flip: any, adjustDirection: any): void;
export declare function addPopoverNearElement(elTarget: HTMLElement, elPopover: HTMLElement, direction?: string, margin?: number, flip?: boolean, adjustDirection?: boolean, animation?: string, fnWhenRemoved?: Function, removeOnClickExlcludedElements?: HTMLElement[]): HTMLDivElement;
export declare function removeElementOnDocClickOrEscape(el: HTMLElement, fnCallback?: Function, excludedElements?: HTMLElement[]): void;
export declare function hideElementOnDocClick(el: HTMLElement, fnCallback?: Function, excludedElements?: HTMLElement[]): void;
export declare function performOnDocClickOrEscape(fnCallback?: Function, excludedElements?: HTMLElement[]): void;
export declare function hideElement(el: HTMLElement): void;
export declare function showElement(el: HTMLElement): void;
