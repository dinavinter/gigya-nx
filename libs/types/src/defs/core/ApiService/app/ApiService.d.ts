import { IApiService, IDomainResolver, IApiServiceBootstrapInfo, IApiServiceRequest } from 'src/core/ApiService/app/interfaces';
import { GroupApiDomainService } from 'src/core/ApiService/app/GroupApiDomainService';
import { IGmidTicketResponse } from 'src/core/Gigya.Js/interfaces/IApiAdapter';
import { RequestProvider } from './RequestProvider';
export declare const TokenKeys: {
    GMID: string;
    UCID: string;
    GMID_TICKET: string;
    GMID_TICKET_EXPIRATION_TIME: string;
};
export declare class ApiService implements IApiService {
    private _apiKey;
    private _hasGmid;
    private _domainResolver;
    private _groupApiDomainService;
    private _requestProvider;
    private _useStorage;
    private _storage;
    private didFallback;
    constructor(_apiKey: string, _hasGmid: boolean, _domainResolver: IDomainResolver, _groupApiDomainService?: GroupApiDomainService, _requestProvider?: RequestProvider, _storage?: gigya.utils.localStorage.AbstractLocalStorageAdapter);
    getApiDomain(methodName?: string): Promise<string>;
    bootstrap(forceBootstrap?: boolean): Promise<IApiServiceBootstrapInfo>;
    setGroupApiDomain(apiDomain?: string): void;
    canSaveGmidAsCookie(): boolean;
    sendRequest<T>(data: IApiServiceRequest): Promise<T>;
    private setupWithStorage;
    getGmidTicket(createNew?: boolean): Promise<IGmidTicketResponse>;
    sendReport(message: string, details?: any): Promise<void>;
    private refreshGmidTicketFromServer;
    private updateGmidTicket;
    private deleteGmidTicket;
    private cleanStorage;
    private getIds;
    private createGmidTicket;
    private createTicketResponse;
    private sendRequestFallback;
}
