export interface IBorderPaddingTotal {
    w: number;
    h: number;
}
export declare function getClassBordersAndPaddings(className: string): IBorderPaddingTotal;
export declare function getBordersAndPaddings(el: HTMLElement): IBorderPaddingTotal;
export declare function getStyle(obj: HTMLElement, styleProp: string): string;
export declare function scaleImageToContainer(img: any, dontCenter: boolean, fnOnImgLoad: Function): void;
export declare function getClassInnerSize(className: string, w: number, h: number): IBorderPaddingTotal;
export interface ISpriteInfo {
    isSingleImage: boolean;
    src: string;
}
export declare function SpriteRenderer(src: string, srcTemplate: string, spriteData: any, spriteW: number, spriteH: number, pixelRatio: number, spriteLength: number): void;
export declare function getSpriteRenderers(oGroups: any): {};
