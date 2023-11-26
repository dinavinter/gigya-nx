export interface IElementActualSize {
    width: number;
    height: number;
}
export interface IElementSize {
    width?: string;
    minWidth?: string;
    height?: string;
    minHeight?: string;
}
export interface IViewportSize extends IElementActualSize {
    orientation: number;
    outerWidth: number;
    outerHeight: number;
}
export interface IAbTestingData {
    testId: string;
    variantId: string;
    requestedScreenId: string;
}
