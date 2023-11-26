import { IGigyaResponse, IScreenSetParams } from "../ScreenSetPlugin";
import { BaseForm } from "../BaseForm";
export interface ISendVerificationResponse extends IGigyaResponse {
    vToken?: string;
}
export interface IIsVerifiedResponse extends IGigyaResponse {
    accessToken?: string;
}
export declare var PushAuthMethodForm_CONSTS: {
    gigyaClass: string;
    authMethod: string;
};
export declare class PushAuthMethodForm extends BaseForm {
    static CONSTS: {
        gigyaClass: string;
        authMethod: string;
    };
    private _timeoutId;
    private _accessToken;
    private _pollingStartTime;
    private _pollingLimit;
    private _pollingInterval;
    linkInstanceElement(parent: HTMLDivElement): Promise<void>;
    unlinkInstanceElement(): void;
    private startPushVerificationFlow;
    submitApi(): (params: IScreenSetParams, data: any, options: any, defaultParams: any) => void;
    private stopPolling;
    private onSendVerificationResponse;
    private checkIsVerified;
    private onPushVerified;
    private onIsVerifiedResponse;
    private shouldContinuePolling;
    private startPolling;
}
