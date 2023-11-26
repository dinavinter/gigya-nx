import { IWebSdkConfig } from '../interfaces/IWebSdkConfig';
export interface ISsoConfigResponse {
    apiKey?: string;
    rpContext?: string;
}
export interface IConsentStatusResponse {
    consentStatus: {
        isMigrated: boolean;
    };
}
export declare function getSdkConfig(domain?: string, retries?: number): Promise<IWebSdkConfig>;
export declare function getSsoContext(ssoToken: string, domain?: string, retries?: number): Promise<ISsoConfigResponse>;
export declare function getConsentStatus(config?: {
    domain: string;
    retries: number;
}): Promise<IConsentStatusResponse>;
