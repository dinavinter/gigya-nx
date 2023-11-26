export declare var getApiDomain: (namespace?: string) => string;
export declare function apiDomainFactory(apiDomain?: string, defaultApiDomain?: string): (namespace?: string) => string;
export declare function getGigyaDomain(namespace?: string, dataCenter?: string, defaultDomain?: string): string;
export declare function getBaseDomain(baseDomains?: string[] | string, currentDomain?: string, defaultDomains?: string[]): string;
export declare function resolveApiDomain(customApiDomainPrefix?: string, baseDomain?: string, dataCenter?: string, defaultApiDomain?: string): string;
export declare function getStorageDomain(): any;
