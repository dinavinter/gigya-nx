export declare class Tabbable {
    protected static self: Tabbable;
    protected static naturalTabOrder: string;
    protected static selector: string;
    protected bindings: Array<{
        container: HTMLElement;
        listener: EventListener;
    }>;
    /**
     * Do not use - access via `gigya.utils.tabbable`.
     */
    protected constructor();
    /**
     * Do not use - access via `gigya.utils.tabbable`.
     */
    static getInstance(): Tabbable;
    /**
     * When bound, the user will have their tab focused locked into the container while their focus is on an element in the container.
     *
     * - Hitting tab while focused on the last tabbable element will set focus to the first tabbable element.
     * - Hitting shift+tab while focused on the first element will set focus to the last tabbable element.
     */
    bindTabLooping(container: HTMLElement, filterSelector?: string): void;
    /**
     * Restore natural tabbing behavior.
     */
    unbindTabLooping(container: HTMLElement): void;
    /**
     * Get sorted list of tabbable elements.
     */
    getSortedTabbableElements(container: Element, filterSelector?: string): Array<HTMLElement>;
    /**
     * Create and track listener function.
     */
    protected createListener(container: HTMLElement, filterSelector?: string): EventListener;
    /**
     * Filter out elements that aren't tabbable.
     */
    protected isTabbable(element: HTMLElement, filterSelector?: string): boolean;
    /**
     * Get next tabbable element, looping if necessary. Returns undefined if the current element isn't in the list of tabbable elements.
     */
    protected getNextTabbableElement(container: HTMLElement, currentElement: HTMLElement, filterSelector?: string): HTMLElement | undefined;
    /**
     * Get previous tabbable element, looping if necessary. Returns undefined if the current element isn't in the list of tabbable elements.
     */
    protected getPreviousTabbableElement(container: HTMLElement, currentElement: HTMLElement, filterSelector?: string): HTMLElement | undefined;
    /**
     * Sort algorithm that takes into account the tab index and natural sort order for each element.
     *
     * NOTE:
     * Not all browsers implement stable sorting. Specifically Chrome's sort is NOT stable.
     * A sorting algorithm is "stable" when two objects with equal keys appear in the same order after being sorted.
     */
    protected sort(a: HTMLElement, b: HTMLElement): number;
    /**
     * Elements with a tab index of 0 should appear after all elements with a tab index.
     */
    protected getTabIndex(el: HTMLElement): number;
    /**
     * Find event listener function by container element.
     */
    protected getListenerByContainer(container: HTMLElement): EventListenerOrEventListenerObject | undefined;
}
export declare const tabbable: Tabbable;
