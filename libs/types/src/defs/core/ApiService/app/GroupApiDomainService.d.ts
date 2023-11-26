export declare class GroupApiDomainService {
    private _ssoKey;
    private _storage;
    private _pageDomain;
    private _cookieName;
    constructor(_ssoKey?: string, _storage?: gigya.utils.localStorage.AbstractLocalStorageAdapter, _pageDomain?: string);
    get(): string;
    set(apiDomain: string): void;
}
