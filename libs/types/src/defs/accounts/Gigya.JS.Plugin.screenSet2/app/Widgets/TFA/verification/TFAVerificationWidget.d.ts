import { BaseScreenWidget } from '../../../BaseScreenWidget';
import { Screen } from "../../../Screen";
export declare const TFAVerification_CONSTS: {
    selector: string;
};
export declare class TFAVerificationWidget extends BaseScreenWidget<HTMLLIElement> {
    static CONSTS: {
        selector: string;
    };
    constructor(_screen: Screen, el: any);
    linkInstanceElement(parent: HTMLElement): Promise<void>;
    private init;
    unlinkInstanceElement(): void;
    private getHighestRiskProvider;
}
