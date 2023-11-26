import { BaseApiHandler } from "./BaseApiHandler";
export declare class SendMagicLinkHandler extends BaseApiHandler {
    protected getRequestParams(): {
        email: string;
        context?: any;
    };
    private getContextObject;
    protected handleResponse(response: any): void;
}
