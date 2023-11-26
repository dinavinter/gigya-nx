import { IScreenSetParams, IExtraEventData } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin';
import { IFormData } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
import { IProviderSessionInfo } from 'src/core/Gigya.Js.Plugin/app/interfaces/IProviderSessionInfo';
import { ITfaPhoneItem, ITfaProviderInfo } from 'src/core/Gigya.Js/app/TFA/types';
export interface IOtpData {
    vToken?: string;
    accessToken?: string;
}
export interface IAuthMethodIdentifierData {
    email?: string;
    phone?: string;
}
export interface IPushData {
    vToken?: string;
}
export interface IAuthMethodData {
    identifiers?: IAuthMethodIdentifierData;
    currentMethod?: string;
}
export interface IConsentStatements {
    [name: string]: {
        url: string;
    };
}
export interface IPasskey {
    id: string;
    browser?: string;
    city?: string;
    country?: string;
    state?: string;
    ipAddress?: string;
    isMobile?: boolean;
    lastLogin?: string;
    platform?: string;
}
export interface ITfaProviders {
    phones?: ITfaPhoneItem[];
    emails?: any[];
    totpDevices?: any[];
    activeProviders: ITfaProviderInfo[];
    assertion?: string;
    phvToken?: string;
    highestRiskProvider?: string;
}
export declare class ScreenSetData {
    params: IScreenSetParams;
    constructor(params: IScreenSetParams);
    apiData: any;
    lastSubmittedFormID: string;
    lastSubmittedFormResponse: any;
    finalizeRegistrationNeeded: boolean;
    neededData: IFormData;
    extraEventData: IExtraEventData;
    regToken: string;
    aToken: string;
    otpData: IOtpData;
    pushData: IPushData;
    consentStatements: IConsentStatements;
    authMethodData: IAuthMethodData;
    shouldConnectAccounts: boolean;
    providerSessionInfo?: IProviderSessionInfo;
    providerSessionInfoAfterRedirect?: IProviderSessionInfo;
    passkeys: IPasskey[];
    tfaProviders: ITfaProviders;
}
