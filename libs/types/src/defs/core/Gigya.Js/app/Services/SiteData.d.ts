interface ISiteDataService {
    getPreferredLoginMethod(identifier: string): string | '';
    setPreferredLoginMethod(method: string, identifier: string): void;
    didForcedBootstrap: string;
    getScreenVariant(screenSetId: string, screenId: string, testId: string): string;
    setScreenVariant(screenSetId: string, screenId: string, testId: string, variantId: string): void;
}
export interface IUserPreferredLoginMethod {
    identifier: string;
    preferredLoginMethod: string;
}
export interface IUserPreferences {
    authentication?: {
        usersPreferredLoginMethods: IUserPreferredLoginMethod[] | undefined;
        tfaPreferredMethod: any;
    };
    screenSetProperties?: {
        [screenSetId: string]: {
            screens: {
                [screenId: string]: {
                    [testId: string]: string;
                };
            };
        };
    };
}
export declare class SiteDataService implements ISiteDataService {
    private static get SITE_PREFERENCES_KEY();
    private static get SITE_GIG_KEY();
    get didForcedBootstrap(): string;
    set didForcedBootstrap(didForcedBootstrap: string);
    getPreferredLoginMethod(identifier: string): string | '';
    setPreferredLoginMethod(authMethod: string, identifier: string): void;
    setScreenVariant(screenSetId: string, screenId: string, testId: string, variantId: string): void;
    getScreenVariant(screenSetId: string, screenId: string, testId: string): string;
    private getDataByKey;
    private setDataByKey;
    private refreshExistingUserPreferredLoginMethod;
    private removeUserPreferredLoginMethod;
    private isMaxLimitUsersPreferredLoginMethodsReached;
    private removeOldestUserPreferredLoginMethod;
    private addUserPreferredLoginMethod;
}
export declare const siteData: ISiteDataService;
export {};
