export declare function getScroll(): {
    top: number;
    left: number;
};
export declare function getFullSize(): {
    w: number;
    h: number;
};
export declare function getOrientation(): number;
export declare function getOuterSize(): {
    w: number;
    h: number;
};
export declare function getInnerSize(): {
    w: number;
    h: number;
};
export declare function getMiddleCenter(): {
    top: number;
    left: number;
};
export declare function isRectHorizontallyVisible(rect: {
    top: number;
    bottom: number;
    left: number;
    right: number;
}): boolean;
export declare function isRectFullyVisible(rect: {
    top: number;
    bottom: number;
    left: number;
    right: number;
}): boolean;
export declare function scrollIntoView(element: HTMLElement): void;
