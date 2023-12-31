export declare var localInfo: {
    baseDomain: string;
    isBrowserSupportsFilesAPI: boolean;
    initTime: Date;
    version: number;
    pageDomain: string;
    protocol: string;
    userAgent: string;
    isWin: boolean;
    isIE: boolean;
    isIE6: boolean;
    isIE7: boolean;
    isIE8: boolean;
    isIE9: boolean;
    isIE10: boolean;
    isIE11: boolean;
    isEdgeLegacy: boolean;
    isEdge: boolean;
    isIOS: boolean;
    isSafari534: boolean;
    isWeChat: boolean;
    iosVersion: number;
    isAndroid: boolean;
    isAndroidBrowser: boolean;
    currentBrowser: string;
    androidVersion: number;
    isChrome: boolean;
    isGoogleBot: boolean;
    isFF: boolean;
    isOpera: boolean;
    isSafari: boolean;
    isIOSWebView: boolean;
    isIOSChrome: boolean;
    isMAC: boolean;
    isWindowsPhone: boolean;
    isFacebookBrowser: boolean;
    supportsPostMessage: boolean;
    supportsLocalStorage: boolean;
    supportsSessionStorage: boolean;
    supportsFlash: boolean;
    quirksMode: boolean;
    backCompat: boolean;
    isMobile: boolean;
    isMobileApp: boolean;
    isNativeMobileApp: boolean;
    isTouch: boolean;
    isOnLine: () => boolean;
    messagingMethod: number;
};
declare type BatteryInfo = {
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    level: number;
};
declare type Plugin = {
    name: string;
    filename: string;
    length: number;
};
export declare class ClientFeature {
    private navigator;
    private screen;
    userAgent?: string;
    plugins?: Plugin[];
    localTime?: string;
    timezoneOffset?: number;
    permissionStatus?: {
        state: string;
    };
    webdriver?: boolean;
    batteryInfo?: BatteryInfo;
    features?: [number, string, boolean, boolean];
    constructor(navigator?: Navigator, screen?: Screen);
    private collectData;
}
export {};
