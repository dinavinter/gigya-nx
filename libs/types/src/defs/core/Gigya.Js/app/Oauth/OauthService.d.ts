import { IAuthRegisterResponse, IAuthorizeResponse, IConnectResponse, ITokenResponse, IOauthRequest, IOauthConnectRequest, IOauthTokenRequest, IOauthRegisterRequest } from './interfaces';
export declare type GrantType = 'authorization_code' | 'implicit' | 'client_credentials' | 'password' | 'refresh_token';
export declare const DefaultGrantType: GrantType;
export declare const Oauth_Response_Type = "code";
export declare class OauthService {
    register(params: IOauthRegisterRequest): Promise<IAuthRegisterResponse>;
    connect({ idToken, regToken, ignoreApiQueue }: IOauthConnectRequest): Promise<IConnectResponse>;
    authorize(params: IOauthRequest): Promise<IAuthorizeResponse>;
    token({ grantType, sessionExpiration, code, dontHandleScreenSet }: IOauthTokenRequest): Promise<ITokenResponse>;
}
declare const _default: OauthService;
export default _default;
