import { EventDispatcher } from '../Utils/eventDispatcher';
import { TfaProvider } from 'src/core/Gigya.Js/app/TFA/types';
export declare type TfaManagementPhoneEvents = 'removePhone' | 'phoneListUpdated';
export declare type TfaManagementEmailEvents = 'removeEmail' | 'emailListUpdated';
export declare type TfaManagementEvent = TfaManagementPhoneEvents | TfaManagementEmailEvents;
export declare class TfaManagementService extends EventDispatcher<TfaManagementEvent> {
    constructor();
    removePhone(provider: TfaProvider, deviceId: string): Promise<void>;
}
declare const _default: TfaManagementService;
export default _default;
