export declare const bookmarkSize: {
    facebook: {
        w: number;
        h: number;
    };
    twitter: {
        w: number;
        h: number;
    };
    messenger: {
        w: number;
        h: number;
    };
    linkedin: {
        w: number;
        h: number;
    };
    yahoobookmarks: {
        w: number;
        h: number;
    };
    digg: {
        w: number;
        h: number;
    };
    googlebookmarks: {
        w: number;
        h: number;
    };
    mixi: {
        w: number;
        h: number;
    };
    googleplus: {
        w: number;
        h: number;
    };
};
export declare function socializeAddEventHandlers(...rest: any[]): void;
export declare function accountsAddEventHandlers(...rest: any[]): void;
export declare function isLoggedIn(): void;
export declare function waitForService(): void;
export declare function postBookmark(...rest: any[]): Promise<void>;
export declare function refreshUI(...rest: any[]): void;
export declare function trackReferrals(...rest: any[]): void;
export declare function updateRefUID(apiKey: any, fragmentParams: any, URLParams: any): void;
export declare function setGigRefUidCookie(apiKey: any, value: any): void;
export declare function hideUI(...rest: any[]): void;
export declare function submitUserForm(...rest: any[]): void;
export declare function getProviderShareCounts(...rest: any[]): void;
export declare function openDelegateAdminHandler(params: any): void;
