import { Request } from './Request';
import { ApiAdapterSettings } from "../../Gigya.Js/interfaces/IApiAdapter";
import { RequestType } from "./interfaces";
export declare class XhrRequest extends Request {
    private xhttp;
    private headers;
    constructor(baseDomain: string, method: string, params: Object, settings?: ApiAdapterSettings, requestHeaders?: {});
    protected performSend(requestType: RequestType, ignoreCacheTimeout?: boolean): Promise<unknown>;
    private hasHeaders;
    private onRequestLoad;
    private createErrorFromResponse;
    protected addDefaultParams(): void;
    protected networkErrorResponse(): Object;
    protected dispose(): void;
    private setRequestHeaders;
}
