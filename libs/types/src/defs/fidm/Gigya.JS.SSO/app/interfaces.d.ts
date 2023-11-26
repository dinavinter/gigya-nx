export declare type Mode = 'setToken' | 'getToken' | 'removeToken' | 'logout' | 'setLoginTokenExp' | 'checkTokenRenew' | 'getLoginTokenExp' | 'syncCanaryIndication' | 'setGroupContext' | 'setGroupApiDomain' | 'getGroupApiDomain';
export interface GetGroupTokenResponse {
    errorCode: number;
    groupContext?: any;
    login_token?: string;
    expires_in?: number | string;
    gltexp?: string;
}
export interface GetLoginTokenExpResponse {
    errorCode: number;
    gltexp?: string;
}
export interface GetGroupApiDomainResponse {
    errorCode: number;
    domain?: string;
}
export interface SetLoginTokenExpResponse extends GetLoginTokenExpResponse {
}
export interface CanaryIndicationResponse {
    errorCode: number;
    isCanary: string;
    canaryVersion: string;
}
export interface SetGroupTokenParams {
    lt?: string;
    expiration?: string | number;
    gltexp?: string;
}
export interface SetLoginTokenExpParams {
    loginTokenExp: string;
}
export interface SetGroupApiDomainParams {
    domain: string;
}
export interface CheckTokenRenewParams {
    loginToken: string;
}
export interface SyncCanaryIndication {
    isCanary: string;
    canaryVersion: string;
}
export interface SetGroupContext {
    groupContext?: any;
}
export interface FrameParams {
    d: string;
    lid: string;
    callbackID: string;
    sAPIKey: string;
}
export interface FrameBaseParams extends FrameParams {
    m: Mode;
}
export interface FrameLogoutParams extends FrameParams {
    m: 'logout';
}
export interface FrameGetGroupTokenParams extends FrameParams {
    m: 'getToken';
}
export interface FrameRemoveTokenParams extends FrameParams {
    m: 'removeToken';
}
export interface FrameSetGroupTokenParams extends FrameParams, SetGroupTokenParams {
    m: 'setToken';
}
export interface FrameSetLoginTokenExpParams extends FrameParams, SetLoginTokenExpParams {
    m: 'setLoginTokenExp';
}
export interface FrameCheckTokenRenewParams extends FrameParams, CheckTokenRenewParams {
    m: 'checkTokenRenew';
}
export interface FrameGetLoginTokenExpParams extends FrameParams {
    m: 'getLoginTokenExp';
}
export interface FrameSyncCanaryIndication extends FrameParams, SyncCanaryIndication {
    m: 'syncCanaryIndication';
}
export interface FrameSetGroupContext extends FrameParams, SetGroupContext {
    m: 'setGroupContext';
}
export interface FrameSetGroupApiDomain extends FrameParams, SetGroupApiDomainParams {
    m: 'setGroupApiDomain';
}
export interface FrameGetGroupApiDomain extends FrameParams {
    m: 'getGroupApiDomain';
}
export interface SDKBaseParams {
    callback?: Function;
}
export interface SDKSetGroupTokenParams extends SDKBaseParams, SetGroupTokenParams {
}
export interface SDKRemoveGroupTokenParams extends SDKBaseParams {
}
export interface SDKGetGroupTokenParams extends SDKBaseParams {
    callback?: (response: GetGroupTokenResponse) => void;
}
export interface SDKLogoutParams extends SDKBaseParams {
}
export interface SDKLogoutResponse extends SDKBaseParams {
    logoutURLs: string;
}
export interface SDKSetLoginTokenExpParams extends SDKBaseParams, SetLoginTokenExpParams {
}
export interface SDKCheckTokenRenewParams extends SDKBaseParams, CheckTokenRenewParams {
    callback?: (response: GetGroupTokenResponse) => void;
}
export interface SDKGetLoginTokenExpParams extends SDKBaseParams {
}
export interface SDKCanaryIndicationParams extends SDKBaseParams, SyncCanaryIndication {
    callback?: (response: CanaryIndicationResponse) => void;
}
export interface SDKGetGroupApiDomainParams extends SDKBaseParams {
    callback?: (response: GetGroupApiDomainResponse) => void;
}
export interface SDKSetGroupApiDomainParams extends SDKBaseParams {
    domain: string;
}
export interface SDKSetGroupContext extends SDKBaseParams {
    groupContext: any;
}
export interface CanaryVersion {
    build: number;
    probability: number;
    timestamp: number;
}
export interface ISsoService {
    setToken(lt: string, expiration?: string | number, gltexp?: string): Promise<void>;
    getToken(): Promise<GetGroupTokenResponse>;
    removeToken(): Promise<void>;
    logout(): Promise<SDKLogoutResponse>;
    setTokenExpiration(tokenExp: string, useCache?: boolean): Promise<SetLoginTokenExpResponse>;
    getTokenExpiration(): Promise<GetLoginTokenExpResponse>;
    checkTokenRenew(loginToken: string): Promise<GetGroupTokenResponse>;
    syncCanaryIndication(isCanary: string, canaryVersion: string): Promise<CanaryIndicationResponse>;
    setGroupContext(groupContext: any): Promise<void>;
    setGroupApiDomain(domain: string): Promise<void>;
    getGroupApiDomain(): Promise<GetGroupApiDomainResponse>;
}
