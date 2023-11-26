import { GroupApiDomainService } from 'src/core/ApiService/app/GroupApiDomainService';
import { IDomainResolver } from 'src/core/ApiService/app/interfaces';
export declare const LoginTokenPrefix = "gig_loginToken";
export declare function shouldResetGroupApiDomain(customApiDomainPrefix: string, cachedApiDomain: string, ssoKey: any, trustedDomains: string[], storage?: gigya.utils.localStorage.AbstractLocalStorageAdapter): boolean;
export declare function createDomainResolver(dataCenter: string, trustedDomains: string[], originDomain: string, defaultDomain: string, customApiDomainPrefix: string, groupApiDomainService?: GroupApiDomainService, ssoKey?: string): IDomainResolver;
