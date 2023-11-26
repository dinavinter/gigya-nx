import { GigyaResponse } from 'gigya';
import { IProviderSessionInfo } from 'src/core/Gigya.Js.Plugin/app/interfaces/IProviderSessionInfo';
export declare enum LinkAccountsWithRedirectParam {
    Provider = "gig_provider",
    AccessToken = "gig_access_token"
}
export interface ILinkAccountsAfterRedirectParams {
    [LinkAccountsWithRedirectParam.Provider]?: string;
    [LinkAccountsWithRedirectParam.AccessToken]?: string;
}
export declare function connectAccounts(providerSessionInfo: IProviderSessionInfo, requestParams?: {}): Promise<object>;
export declare function extractProviderSessions(providerSessionInfo: IProviderSessionInfo): {
    [x: string]: {
        authToken: string;
        idToken: string;
        code: string;
        lastName: string;
        firstName: string;
    };
};
export declare function extractProviderInfoFromResponse(response: GigyaResponse & IProviderSessionInfo & {
    id_token: string;
}): (GigyaResponse & IProviderSessionInfo & {
    id_token: string;
}) | {
    providerSessionInfo: IProviderSessionInfo;
    callId: string;
    statusCode: number;
    statusReason: string;
    time: string;
    errorCode: number;
    errorMessage?: string;
    errorDetails?: string;
    validationErrors?: {
        fieldName: string;
        message: string;
    }[];
    access_token?: string;
    provider?: string;
    provider_uid?: string;
    idToken?: string;
    code?: string;
    lastName?: string;
    firstName?: string;
    id_token: string;
};
export declare function getLoginId(conflictingAccount: any): string;
export declare function getObfuscatedPhone(conflictingAccount: any): string;
export declare function getPhone(conflictingAccount: any): {
    lookup: string;
    obfuscated: string;
};
export declare function isLinkAccountsV2Interruption(errorCode: string | number): boolean;
export declare function hasProviderSessionForLinkAccountsInParamsAfterRedirect(params: ILinkAccountsAfterRedirectParams): boolean;
export declare function getProviderSessionForLinkAccountsAfterRedirect(params: ILinkAccountsAfterRedirectParams): IProviderSessionInfo;
export declare function getProviderSessionFromParams(params: Record<string, string>): IProviderSessionInfo;
export declare function isProviderSessionValid(params: IProviderSessionInfo): boolean;
