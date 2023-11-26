import { IMap } from 'src/core/Gigya.Js/app/Utils/array';
export interface IButtonStyle {
    ratio: number;
    base: string;
    ext: string;
    noConnected?: boolean;
    noLastLogin?: boolean;
    minSize: number;
    maxSize: number;
    dontUseSprites?: boolean;
}
export declare var ButtonStyles: IMap<IButtonStyle>;
