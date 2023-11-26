import GigyaResponse from 'gigya/dist/lib/interfaces/gigya-response';
import { ITfaEmailListResponse, ITfaPhonesListResponse, ITfaProviders } from 'src/core/Gigya.Js/app/TFA/types';
export declare function sentInitTfaRequest(params: any): Promise<GigyaResponse & {
    gigyaAssertion: string;
}>;
export declare function fetchTfaPhoneList(gigyaAssertion: any): Promise<GigyaResponse & ITfaPhonesListResponse>;
export declare function fetchTfaEmailList(gigyaAssertion: any): Promise<GigyaResponse & ITfaEmailListResponse>;
export declare function removeTfaPhone(gigyaAssertion: any, deviceId: any): Promise<GigyaResponse>;
export declare function fetchAvailableProviders(params?: any): Promise<GigyaResponse & ITfaProviders>;
export declare function sendEmailVerificationCode(params: any): Promise<GigyaResponse>;
export declare function sendPhoneVerificationCode(params: any): Promise<GigyaResponse>;
export declare function sendEmailCompleteVerification(params: any): Promise<GigyaResponse>;
export declare function sendPhoneCompleteVerification(params: any): Promise<GigyaResponse>;
export declare function finalizeTFA(params: any): Promise<GigyaResponse>;
