export declare function showLoader(container?: HTMLElement, className?: string, h?: number): void;
export declare function fadeIn(el: any): void;
export declare function getBalloonHTML(body: any, captionText: string, w: number, h: number, nubY: number, nubPosition: string, hideClose: boolean, sOnClose: string, frameID: string): string;
export declare function createGMBalloon(body: any, captionText: string, w: number, h: number, nubY: number, nubPosition: string, hideClose: boolean, id: string, dontHideOnClick: boolean, balloonClass: string): HTMLElement;
export declare function removeGMBalloon(e?: Event): void;
export declare function putGMBalloonNextTo(el: HTMLElement, body: any, caption: string, w: number, h: number, hideClose?: boolean, id?: string, dontHideOnClick?: boolean, preferredOrientations?: string[], balloonClass?: string): void;
export declare function positionGMBalloonNextTo(el: HTMLElement, orientation: string, options: any): HTMLElement;
export declare function scrollToElement(el: HTMLElement): void;
