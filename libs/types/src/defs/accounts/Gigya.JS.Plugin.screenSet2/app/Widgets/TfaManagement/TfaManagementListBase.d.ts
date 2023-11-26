import { IGigyaResponse } from '../../ScreenSetPlugin';
import { TfaManagementEvent } from 'src/core/Gigya.Js/app/TFA/TfaManagementService';
import { CardListFormWidget } from '../../CardListFormWidget';
export declare abstract class TfaManagementListBase extends CardListFormWidget {
    protected abstract readonly removeEvent: TfaManagementEvent;
    protected abstract readonly listUpdateEvent: TfaManagementEvent;
    protected readonly itemId = "id";
    protected abstract readonly providerName: any;
    linkInstanceElement(parent: HTMLElement): Promise<void>;
    protected get isActiveProvider(): boolean;
    protected reloadList(): Promise<void>;
    protected reloadData(): Promise<any[]>;
    protected abstract fetchDevices(): Promise<IGigyaResponse & any>;
    protected abstract getScreenSetData(): any[];
    protected abstract setScreenSetData(items: any): void;
    protected abstract getDataFromListResponse(res: IGigyaResponse & any): any[];
    unlinkInstanceElement(): void;
}
