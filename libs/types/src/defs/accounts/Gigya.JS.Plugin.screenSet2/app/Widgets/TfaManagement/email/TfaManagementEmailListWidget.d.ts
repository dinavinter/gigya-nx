import { ITfaEmailItem, ITfaEmailListResponse, TfaProvider } from 'src/core/Gigya.Js/app/TFA/types';
import { IGigyaResponse } from '../../../ScreenSetPlugin';
import { TfaManagementEvent } from 'src/core/Gigya.Js/app/TFA/TfaManagementService';
import { TfaManagementListBase } from '../TfaManagementListBase';
export declare const TfaEmailManagement_CONSTS: {
    selector: string;
};
export declare class TfaManagementEmailListWidget extends TfaManagementListBase {
    static CONSTS: {
        selector: string;
    };
    protected removeEvent: TfaManagementEvent;
    protected listUpdateEvent: TfaManagementEvent;
    protected readonly providerName = TfaProvider.email;
    linkInstanceElement(parent: HTMLElement): Promise<void>;
    protected reloadList(): Promise<void>;
    protected getDataFromListResponse(res: ITfaEmailListResponse): ITfaEmailItem[];
    protected setScreenSetData(items: ITfaEmailItem[]): void;
    protected getScreenSetData(): ITfaEmailItem[];
    protected fetchDevices(): Promise<IGigyaResponse & ITfaEmailListResponse>;
}
