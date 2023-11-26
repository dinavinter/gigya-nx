import { ApiAdapterSettings, IGmidTicketResponse } from 'src/core/Gigya.Js/interfaces/IApiAdapter';
export interface IDomainResolver extends IGroupApiDomainInfo {
    originDomain: string;
    getApiDomain: (namespace?: string) => string;
    isApiDomainFirstParty: boolean;
    canSaveGmidAsCookie?: boolean;
}
export interface IApiServiceInitInfo extends IGroupApiDomainInfo {
    apiDomain: string;
    canSaveGmidAsCookie?: boolean;
}
export interface IGroupApiDomainInfo {
    isGroupApiDomain: boolean;
    hasGroupApiDomainChanged: boolean;
}
export interface IApiServiceRequest {
    methodName: string;
    params: Object;
    settings?: ApiAdapterSettings;
    headers?: {
        [key: string]: string;
    };
}
export interface IApiService {
    bootstrap(force?: boolean): Promise<IApiServiceBootstrapInfo>;
    sendRequest<T>(data: IApiServiceRequest): Promise<T>;
    getGmidTicket(createNew?: boolean): Promise<IGmidTicketResponse>;
    getApiDomain(methodName?: string): Promise<string>;
    setGroupApiDomain(apiDomain?: string): any;
    sendReport(message: string, details?: any): Promise<void>;
}
export interface IApiServiceBootstrapInfo {
    ticketInfo?: IGmidTicketResponse;
    hasGmid?: string;
}
export interface ITokenIds {
    gcid: string;
    ucid: string;
    gmidTicket: string;
}
export interface IGetGmidTicketRequest {
    apiKey: string;
    expires: number;
    gmid?: string;
}
export interface RequestSettings {
    forcePost?: boolean;
    forceGigyaDomain?: boolean;
    disableCache?: boolean;
    requiresSession?: () => boolean;
    clearSession?: boolean;
    clearSessionCondition?: (params: any) => boolean;
    cacheTimeout?: number;
    jsSdkRequestId?: string;
    preprocessor?: (params: any, callback: () => void) => void;
}
export interface UrlLengthFields {
    extraLength: number;
    maxLength: number;
}
export declare enum RequestType {
    GET = "GET",
    POST = "POST"
}
