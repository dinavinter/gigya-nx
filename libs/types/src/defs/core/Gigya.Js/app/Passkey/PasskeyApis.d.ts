import { PasskeyAuthenticateParams } from './PasskeyService';
export interface PasskeyRegistrationParams {
    deviceName?: string;
    callback?: (res?: object) => void;
    regToken?: string;
    aToken?: string;
}
export interface PasskeyLoginParams extends PasskeyAuthenticateParams {
    callback?: (res?: object) => void;
}
export declare function registerPasskey(params?: PasskeyRegistrationParams): Promise<object>;
export declare function passkeyLogin(params?: PasskeyLoginParams): Promise<object>;
