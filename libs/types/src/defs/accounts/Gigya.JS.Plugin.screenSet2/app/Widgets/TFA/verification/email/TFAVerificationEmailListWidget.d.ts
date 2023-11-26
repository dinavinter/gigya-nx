import { ITfaEmailItem, ITfaEmailListResponse, TfaProvider } from 'src/core/Gigya.Js/app/TFA/types';
import { TFAVerificationBaseListWidget } from '../TFAVerificationBaseListWidget';
import { TranslatedWidget } from '../../../TranslatedWidget';
export declare const TFAEmailList_CONSTS: {
    selector: string;
    deps: (typeof TranslatedWidget)[];
};
export declare class TFAVerificationEmailListWidget extends TFAVerificationBaseListWidget {
    static CONSTS: {
        selector: string;
        deps: (typeof TranslatedWidget)[];
    };
    protected readonly providerName = TfaProvider.email;
    protected reloadData(): Promise<any[]>;
    protected getDataFromListResponse(res: ITfaEmailListResponse): ITfaEmailItem[];
}
