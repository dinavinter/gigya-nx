import { TfaManagementEvent } from 'src/core/Gigya.Js/app/TFA/TfaManagementService';
import { TfaManagementItemBase } from '../TfaManagementItemBase';
export declare class TfaManagementEmailItemWidget extends TfaManagementItemBase {
    protected removeEvent: TfaManagementEvent;
    protected listUpdateEvent: TfaManagementEvent;
    static CONSTS: {
        deleteDialogButtonSelector: string;
        removeButtonSelector: string;
        deleteDialogCancelButtonSelector: string;
        deleteDialogClass: string;
        deps: typeof import("../..").TranslatedWidget[];
        selector: string;
    };
    protected removeDevice(): Promise<void>;
}
