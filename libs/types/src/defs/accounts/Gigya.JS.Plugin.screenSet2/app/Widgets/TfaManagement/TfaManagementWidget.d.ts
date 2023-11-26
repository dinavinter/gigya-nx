import { BaseScreenWidget } from '../../BaseScreenWidget';
import { Screen } from '../../Screen';
export declare class TfaManagementWidget extends BaseScreenWidget<HTMLDivElement> {
    static CONSTS: {
        selector: string;
    };
    constructor(_screen: Screen, el: HTMLDivElement);
    linkInstanceElement(parent: HTMLElement): Promise<void>;
}
