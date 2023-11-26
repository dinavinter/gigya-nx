import { EventDispatcher } from '../Utils/eventDispatcher';
import { TfaProvider } from 'src/core/Gigya.Js/app/TFA/types';
export declare type TfaVerificationEvents = 'changeActiveDevice';
export declare type TfaEvents = TfaVerificationEvents;
declare class TfaEventService extends EventDispatcher<TfaEvents> {
    constructor();
    activateDevice(provider: TfaProvider, deviceId: string): void;
}
declare const _default: TfaEventService;
export default _default;
