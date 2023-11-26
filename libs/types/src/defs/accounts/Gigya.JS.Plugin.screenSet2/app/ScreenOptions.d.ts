export interface IScreenOptions {
    accountsLinkedScreen?: string;
    pendingRegistrationScreen?: string;
    existingLoginIdentifierScreen?: string;
    pendingVerificationScreen?: string;
    pendingCodeVerificationScreen?: string;
    missingLoginIdScreen?: string;
    pendingPasswordChangeScreen?: string;
    pendingReAuthenticationScreen?: string;
    pendingTfaRegistrationScreen?: string;
    pendingTfaVerificationScreen?: string;
    width?: string;
    height?: string;
    caption?: string;
}
export declare var ScreenOptions_CONSTS: {
    accountsLinkedScreen: string;
    pendingTfaRegistrationScreen: string;
    pendingTfaVerificationScreen: string;
    pendingRegistrationScreen: string;
    existingLoginIdentifierScreen: string;
    pendingVerificationScreen: string;
    pendingCodeVerificationScreen: string;
    missingLoginIdScreen: string;
    pendingPasswordChangeScreen: string;
    pendingReAuthenticationScreen: string;
    width: string;
    height: string;
    caption: string;
};
export declare class ScreenOptions implements IScreenOptions {
    accountsLinkedScreen: string;
    pendingTfaRegistrationScreen: string;
    pendingTfaVerificationScreen: string;
    pendingRegistrationScreen: string;
    existingLoginIdentifierScreen: string;
    pendingVerificationScreen: string;
    pendingCodeVerificationScreen: string;
    missingLoginIdScreen: string;
    pendingPasswordChangeScreen: string;
    pendingReAuthenticationScreen: string;
    width: string;
    height: string;
    caption: string;
    constructor(el: HTMLElement, parent?: IScreenOptions);
}
