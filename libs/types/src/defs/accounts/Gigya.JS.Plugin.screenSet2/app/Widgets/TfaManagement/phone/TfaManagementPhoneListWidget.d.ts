import { ITfaEmailListResponse, ITfaPhoneItem, ITfaPhonesListResponse, TfaProvider } from 'src/core/Gigya.Js/app/TFA/types';
import { IGigyaResponse } from '../../../ScreenSetPlugin';
import { TfaManagementEvent } from 'src/core/Gigya.Js/app/TFA/TfaManagementService';
import { TfaManagementListBase } from '../TfaManagementListBase';
export declare const TfaPhoneManagement_CONSTS: {
    selector: string;
};
export declare class TfaManagementPhoneListWidget extends TfaManagementListBase {
    static CONSTS: {
        selector: string;
    };
    protected removeEvent: TfaManagementEvent;
    protected listUpdateEvent: TfaManagementEvent;
    protected readonly providerName = TfaProvider.phone;
    protected getScreenSetData(): any[];
    protected setScreenSetData(items: ITfaPhoneItem[]): void;
    protected getDataFromListResponse(res: ITfaPhonesListResponse): ITfaPhoneItem[];
    protected fetchDevices(): Promise<IGigyaResponse & ITfaEmailListResponse>;
}
