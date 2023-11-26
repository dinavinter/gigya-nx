import { GSErrors } from "../GSErrors";
import { PublicKeyCredentialCreationOptionsJSON, PublicKeyCredentialRequestOptionsJSON } from './interfaces';
export declare const errorMap: {
    ConstraintError: {
        errorCode: GSErrors;
        errorDetails: string;
    };
    InvalidStateError: {
        errorCode: GSErrors;
        errorDetails: string;
    };
    NotAllowedError: {
        errorCode: GSErrors;
        errorDetails: string;
    };
    NotSupportedError: {
        errorCode: GSErrors;
        errorDetails: string;
    };
    SecurityError: {
        errorCode: GSErrors;
        errorDetails: string;
    };
    TypeError: {
        errorCode: GSErrors;
        errorDetails: string;
    };
    AbortError: {
        errorCode: GSErrors;
        errorDetails: string;
    };
    UnknownError: {
        errorCode: GSErrors;
        errorDetails: string;
    };
    CredentialError: {
        errorCode: GSErrors;
        errorDetails: string;
    };
};
export interface ICredentialContainer {
    get: (options?: CredentialRequestOptions) => Promise<Credential | null>;
    create: (options?: CredentialRequestOptions) => Promise<Credential | null>;
}
export declare class CredentialService {
    private abortService;
    private get credentials();
    constructor();
    isConditionalMediationAvailable(pubKeyCred?: any): Promise<any>;
    isSupported(): boolean;
    get(options: PublicKeyCredentialRequestOptionsJSON, mediation?: CredentialMediationRequirement): Promise<{
        id: any;
        type: any;
        rawId: string;
        extensions: any;
        response: {
            authenticatorData: string;
            clientDataJSON: string;
            signature: string;
            userHandle: any;
        };
    }>;
    create(options: PublicKeyCredentialCreationOptionsJSON): Promise<{
        id: any;
        type: any;
        rawId: string;
        response: {
            attestationObject: string;
            clientDataJSON: string;
            transport: any;
        };
        clientExtensionResults: any;
        authenticatorSelection: {
            authenticatorAttachment: AuthenticatorAttachment;
            requireResidentKey?: boolean;
            userVerification?: UserVerificationRequirement;
        };
        attestation: AttestationConveyancePreference;
    }>;
    abortCurrentCeremony(): void;
    private createPKCredentialRequest;
    private createPKCredentialCreate;
}
declare const _default: CredentialService;
export default _default;
