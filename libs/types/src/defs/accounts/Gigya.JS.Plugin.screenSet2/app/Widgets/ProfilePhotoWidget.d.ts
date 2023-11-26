import { BaseScreenWidget } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget';
import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
export declare var ProfilePhotoWidget_CONSTS: {
    selector: string;
};
export declare class ProfilePhotoWidget extends BaseScreenWidget<HTMLDivElement> {
    static CONSTS: {
        selector: string;
    };
    constructor(_screen: Screen, el: HTMLDivElement);
    linkInstanceElement(parent: HTMLElement): void;
    setThumbnailUrl(thumbnailURL: string): void;
}
