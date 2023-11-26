export declare enum LoginMethods {
    social = 0,
    site = 1,
    siteOnly = 2,
    socialOnly = 3,
    siteAndSocial = 4,
    emailOtp = 5,
    phone = 6,
    'site-only' = 2,
    'social-only' = 3,
    'site-and-social' = 4
}
export declare function showAuthMethodAccordingToExistingLoginProviders(authMethod: string, availableLoginProviders: string[]): boolean;
export declare function showIdentityAccordingToExistingLoginProviders(widgetSiteIdentities: string[], availableLoginProviders: string[]): boolean;
