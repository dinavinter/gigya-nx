import { BaseApiHandler } from "./BaseApiHandler";
import { ISendVerificationResponse } from "../../Forms/PushAuthMethodForm";
export declare class SendVerificationHandler extends BaseApiHandler {
    protected getRequestParams(): {
        identifier: string;
    };
    protected handleResponse(response: ISendVerificationResponse): void;
}
