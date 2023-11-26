import ToggleValue = gigya._.ToggleValue;
export interface IWebSdkConfigPlugin {
    connectWithoutLoginBehavior?: string;
    defaultRegScreenSet?: string;
    defaultMobileRegScreenSet?: string;
    sessionExpiration?: number;
    rememberSessionExpiration?: number;
    apiDomain?: string;
    workflowPlugin?: string;
}
export interface IWebSdkConfig {
    statusCode?: number;
    errorCode?: number;
    apiVersion?: number;
    callId?: string;
    statusReason?: string;
    time?: string;
    hostedPagesDomain?: string;
    flags: {
        [key: string]: boolean;
    };
    plugins: IWebSdkConfigPlugin;
    api?: IApiServiceConfig;
    sso?: ISsoConfig;
    toggles?: {
        linkAccountV2?: ToggleValue;
        httpStatusCodes?: ToggleValue;
    };
    hasConsentLicense?: boolean;
}
export interface IApiServiceConfig {
    baseDomains: string[];
    ssoKey?: string;
    customAPIDomainPrefix?: string;
    gmidTicketExpiration: number;
}
export interface ISsoConfig {
    validDomains: string[];
    logoutURLs: {
        [apiKey: string]: string;
    };
    canaryCookiesNames?: ICanaryCookies;
}
export interface ICanaryCookies {
    isCanary: string;
    version: string;
}
