import { IGetCredentialResponse, IPasskeyRegistrationParams } from './interfaces';
export interface PasskeyAuthenticateParams {
    mediation?: CredentialMediationRequirement;
    sessionExpiration?: string;
    abortCurrentCeremony?: boolean;
    dontHandleScreenSet?: boolean;
}
export declare type PasskeyEventHandler = (data: any) => void;
export declare type PasskeyEvents = 'passkeyRemoved' | 'passkeyAdded';
export declare class PasskeyService {
    private currentRun?;
    private eventHandlers;
    constructor();
    on(event: PasskeyEvents, handler: PasskeyEventHandler): void;
    remove(event: PasskeyEvents, handler: PasskeyEventHandler): void;
    isSupported(): boolean;
    isConditionalMediationAvailable(): Promise<any>;
    authenticate(params?: PasskeyAuthenticateParams): Promise<any>;
    registerPasskey(params?: IPasskeyRegistrationParams, abortCurrentCeremony?: boolean): Promise<any>;
    removePasskey(credentialId: string, regToken?: string): Promise<import("gigya").GigyaResponse>;
    getPasskeys(regToken?: string): Promise<IGetCredentialResponse>;
    waitForService(): Promise<any>;
    abortCurrentCeremony(): void;
    private dispatchEvent;
    private runOneAtATime;
    private internalRegister;
    private internalConnect;
    private internalAuthenticate;
    private createAndRegisterCredential;
    private static getAssertionOptions;
    private static getRegistrationOptions;
}
declare const _default: PasskeyService;
export default _default;
