import { MessagingMethod } from 'src/core/Gigya.Js/app/InternalFlows';
export declare var _flashListenerID: string;
export declare function addMessageListener(messageName: string, params: any, isPopup: boolean, callback: (oEvent: Object, context: any) => void, messagingMethod?: MessagingMethod): void;
export declare function removeMessageListener(messageName: string): void;
