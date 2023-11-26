export declare const defaultApiSchema = "ctag|APIKey|cid|oauth_token|source|sourceData|usePost|refUID|fb_UID|fb_at|fb_exp|environment|noAuth|httpStatusCodes";
export declare const defaultOauthSchema = "ctag|temporary_account|authFlow|connectWithoutLogin|provider|redirectMethod|redirect_uri|pendingRegistration|lang|regSource|extraPermissions|sessionExpiration|forceAuthentication|includeiRank|includeAllIdentities|extraFields|enabledProviders|disabledProviders|signIDs|openIDUsername|openIDURL|openIDProviderLogo|openIDProviderName|finalizeRegistration|include|actionAttributes|profileAttributes|googlePlayAppID|bp_channel_url|loginIfExists|includeUserInfo|redirectURL|authCodeOnly|enablePopupLocation|invite|regToken|loginMode|apiDomain|conflictHandling|forcePermissions|signKeys|dataCenter|forceAuthentication";
export declare const postBookmarkSchema = "provider|URL|url|title|description|target|cid|APIKey|shortURLs|source|sourceData|providerKey|thumbnailURL|tags|userAction|[providerCapability=actions]UserAction|actionAttributes|facebookDialogType";
export declare const loginMethods: {
    'socialize.login': number;
    'socialize.addConnection': number;
    'socialize.notifyLogin': number;
    'socialize.linkAccounts': number;
    'accounts.login': number;
    'accounts.otp.login': number;
    'accounts.auth.magiclink.email.login': number;
    'accounts.auth.otp.email.login': number;
    'accounts.auth.login': number;
    'accounts.socialLogin': number;
    'accounts.linkAccounts': number;
    'accounts.register': number;
    'accounts.finalizeRegistration': number;
    'accounts.notifySocialLogin': number;
};
export declare const logoutMethods: {
    'socialize.logout': number;
    'accounts.logout': number;
    'socialize.deleteAccount': number;
    'socialize.unlinkAccounts': number;
};
