import { GigyaResponse } from 'gigya';
export interface IAuthRegisterResponse extends GigyaResponse {
    regToken: string;
}
export interface IConnectResponse extends GigyaResponse {
}
export interface IAuthorizeResponse extends GigyaResponse {
    code: string;
}
export interface ITokenResponse extends GigyaResponse {
}
export interface IOauthRequest {
    idToken: string;
    ignoreApiQueue?: boolean;
}
export interface IOauthRegisterRequest extends IOauthRequest {
    lang?: string;
    regSource?: string;
    context?: string;
    sessionExpiration?: string;
    cid?: string;
    rootContainerId?: string;
    ignoreInterruptions?: boolean;
    provider?: string;
    source?: string;
}
export interface IOauthConnectRequest extends IOauthRequest {
    regToken?: string;
    ignoreApiQueue?: boolean;
}
export interface IOauthTokenRequest {
    code: string;
    dontHandleScreenSet?: boolean;
    sessionExpiration?: string;
    grantType?: string;
    ignoreApiQueue?: boolean;
}
