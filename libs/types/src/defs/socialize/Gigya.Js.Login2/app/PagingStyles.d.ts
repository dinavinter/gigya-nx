import { IMap } from 'src/core/Gigya.Js/app/Utils/array';
export interface IPagingButtonStyleChoiceInfo {
    lastPolledWidth: number;
    isMobileUI: boolean;
}
export interface IPagingButtonStyle {
    getStyleClass(info: IPagingButtonStyleChoiceInfo): string;
    getStyleName(info: any): string;
}
export declare var PagingButtonStyles: IMap<IPagingButtonStyle>;
