import { ITfaPhoneItem, ITfaPhonesListResponse, TfaProvider } from 'src/core/Gigya.Js/app/TFA/types';
import { TFAVerificationBaseListWidget } from '../TFAVerificationBaseListWidget';
export declare const TFAPhoneList_CONSTS: {
    selector: string;
};
export declare class TFAVerificationPhoneListWidget extends TFAVerificationBaseListWidget {
    static CONSTS: {
        selector: string;
    };
    protected readonly providerName = TfaProvider.phone;
    protected reloadData(): Promise<ITfaPhoneItem[]>;
    protected getDataFromListResponse(res: ITfaPhonesListResponse): ITfaPhoneItem[];
}
