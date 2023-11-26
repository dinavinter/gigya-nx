import { ApiAdapterSettings } from "../../Gigya.Js/interfaces/IApiAdapter";
import { RequestType } from './interfaces';
export declare abstract class Request {
    baseDomain: string;
    method: string;
    params: Object;
    settings: ApiAdapterSettings;
    protected constructor(baseDomain: string, method: string, params: Object, settings?: ApiAdapterSettings);
    protected retryTimerID: number;
    protected retry: number;
    send(ignoreCacheTimeout?: boolean): Promise<any>;
    handleResponse(response: Object): Object;
    getUrl: () => gigya._.Uri;
    protected abstract dispose(): any;
    protected abstract performSend(requestType: RequestType, ignoreCacheTimeout?: boolean): any;
    protected getCacheKey(): string;
    protected getFullUrl(): string;
    protected addDefaultParams(): void;
    protected abstract networkErrorResponse(): any;
    private isRequestPathManipulated;
    private getDataPendingTimeout;
    private getRequestType;
    private get isForcePost();
    private requestOversize;
    private getRequestUrlLength;
    private getUrlLengthFields;
    private getFlattenParams;
    private haveSensitiveParams;
}
