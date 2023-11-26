export declare var _openedWindows: {};
export declare var _uniqueWindowCounter: number;
export interface WindowOptions {
    menubar?: number;
    toolbar?: number;
    resizable?: number;
    scrollbars?: number;
    location?: number;
    width?: string | number;
    height?: string | number;
    left?: string | number;
    top?: string | number;
}
export declare function _calcPixels(value: string | number, max?: number, def?: string | number, positionAdjustment?: any): number;
export declare function open(url: string, windowName?: string, windowOptions?: WindowOptions): boolean;
export declare function close(windowName: string): void;
