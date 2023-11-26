import { Screen } from "./Screen";
import { IMap } from "./utils";
export interface IGroupScreens {
    [screenId: string]: {
        weight: number;
        testId: string;
    };
}
export declare function getGroupVariant(screens: IMap<Screen>, screenSetId: string, isGroupActive: boolean, groupId: string): Screen;
export declare function evaluateNewVariant(groupScreens: IGroupScreens): string;
