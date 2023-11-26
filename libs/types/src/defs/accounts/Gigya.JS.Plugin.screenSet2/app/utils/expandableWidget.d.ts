export interface IExpandableWidget {
    expand: () => void;
    collapse: () => void;
}
export declare function changeExpandedState(el: HTMLElement, expandedStateAttribute: string, isExpanded: boolean): void;
