export interface ITfaPhoneDeviceResponse {
    id: string;
    plain?: string;
    obfuscated: string;
    lastMethod?: string;
}
export interface ITfaEmailDeviceResponse {
    id: string;
    obfuscated: string;
    lastMethod?: string;
}
export interface ITfaPhonesListResponse {
    phones?: ITfaPhoneDeviceResponse[];
}
export interface ITfaEmailListResponse {
    emails?: ITfaEmailDeviceResponse[];
}
export interface ITfaPhoneItem {
    id: string;
    phoneNumber: string;
}
export interface ITfaProviderInfo {
    name: TfaProvider;
    capabilities?: string[];
}
export interface ITfaProviders {
    activeProviders: ITfaProviderInfo[];
    inactiveProviders: ITfaProviderInfo[];
}
export interface ITfaEmailItem {
    id: string;
    email: string;
}
export declare enum TfaProvider {
    email = "gigyaEmail",
    phone = "gigyaPhone",
    totp = "gigyaTotp",
    push = "gigyaPush"
}
export declare enum TfaRiskOrderedProviders {
    gigyaEmail = 0,
    gigyaPhone = 1,
    gigyaTotp = 2,
    gigyaPush = 3
}
export declare enum TfaMode {
    add = "add",
    edit = "edit",
    verify = "verify",
    register = "register"
}
export declare enum TfaPhoneSendCodeMethod {
    sms = "sms",
    voice = "voice"
}
