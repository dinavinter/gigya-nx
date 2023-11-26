import GigyaResponse from 'gigya/dist/lib/interfaces/gigya-response';
export interface IInitRegisterCredentialsResponse extends GigyaResponse {
    options: string;
    token: string;
}
export interface IRegisterCredentialsResponse extends GigyaResponse {
    idToken: string;
}
export interface IGetAssertionOptionsResponse extends GigyaResponse {
    options: string;
    token: string;
    challenge: string;
    allowCredentials?: {
        id: string;
    }[];
}
export interface IVerifyAssertionResponse extends GigyaResponse {
    idToken: string;
}
export interface IGetCredentialResponse extends GigyaResponse {
    credentials: any[];
}
export interface IPasskeyRegistrationParams {
    aToken?: string;
    deviceName?: string;
    regToken?: string;
    lang?: string;
    regSource?: string;
    context?: any;
    sessionExpiration?: string;
    ignoreInterruptions?: boolean;
    cid?: string;
    rootContainerId?: string;
    source?: string;
}
export interface IPasskeyConnectParams {
    deviceName?: string;
    regToken?: string;
}
export interface PublicKeyCredentialRequestOptionsJSON {
    challenge: string;
    timeout?: number;
    rpId?: string;
    allowCredentials?: PublicKeyCredentialDescriptor[];
    userVerification?: UserVerificationRequirement;
    extensions?: AuthenticationExtensionsClientInputs;
}
export interface PublicKeyCredentialCreationOptionsJSON {
    rp: PublicKeyCredentialRpEntity;
    user: PublicKeyCredentialUserEntityJSON;
    challenge: string;
    pubKeyCredParams: PublicKeyCredentialParameters[];
    timeout?: number;
    excludeCredentials?: PublicKeyCredentialDescriptor[];
    authenticatorSelection?: AuthenticatorSelectionCriteria;
    attestation?: AttestationConveyancePreference;
    extensions?: AuthenticationExtensionsClientInputs;
}
export interface PublicKeyCredentialUserEntityJSON {
    id: string;
    name: string;
    displayName: string;
}
export interface PublicKeyCredentialDescriptor {
    id: string;
    type: PublicKeyCredentialType;
    transports?: AuthenticatorTransportFuture[];
}
export declare type AuthenticatorTransportFuture = 'ble' | 'internal' | 'nfc' | 'usb' | 'cable' | 'hybrid';
