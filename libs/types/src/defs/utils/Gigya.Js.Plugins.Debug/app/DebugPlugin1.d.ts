declare type JQuery = any;
export interface LogEntry {
    id: string;
    html?: string;
    className?: string;
    data?: Object;
    time: Date;
    error?: boolean;
}
export declare class DebugPlugin {
    params: Object;
    private refString;
    private $container;
    templates: Object;
    private addedCss;
    private history;
    private $user;
    private $lastLogEntry;
    private $apiKey;
    private $historyButton;
    private $history;
    private $saveCheckbox;
    private $hideButton;
    private $barContainer;
    private $details;
    private $detailsButton;
    private currentUser;
    constructor(params: Object, refString: string);
    bindEvents(): void;
    json2html(json: Object, hidden: boolean, l?: number): JQuery;
    refresh(): void;
    onEvent(e: any): void;
    updateUser(response: any): void;
    addLog(log: LogEntry): void;
    clearHistory(): void;
    getLog(id: string): LogEntry;
    getLogEntryElement(log: LogEntry): JQuery;
    onDataPropClick(e: MouseEvent): void;
    showDetails(data: any, opener?: any): void;
    getInfo(): {
        API: {
            'API domain': string;
            'API adapter': string;
        };
        'socialize.js': {
            environment: string;
            build: {
                number: number;
                version: string;
            };
            'init time': string;
            'API key': string;
            'global conf': Object & {
                baseDomains?: string;
                toggles?: Object;
                APIKey?: string;
                defaultRegScreenSet?: string;
                defaultMobileRegScreenSet?: string;
            };
            language: gigya.Lang;
            'URL params': Object;
            'base URL': string;
            'found script element': boolean;
            'service queues': {};
        };
        domain: {
            'page domain': string;
            'base domain': string;
            'base domains list': string[];
            cname: string;
        };
        SSO: {
            key: string;
            'logout URL': string;
        };
        browser: {
            'user agent': string;
            'window messaging method': string;
        };
        '3rd party integrations': {
            facebook: {
                'app ID': string;
                'initialized time': string;
                connected: boolean;
                'logged in': boolean;
            };
        };
        'default plugin params': {
            apiDomain: string;
        };
        'local info': {
            androidVersion: number;
            backCompat: boolean;
            baseDomain: string;
            currentBrowser: string;
            initTime: Date;
            iosVersion: number;
            isAndroid: boolean;
            isAndroidBrowser: boolean;
            isBrowserSupportsFilesAPI: boolean;
            isChrome: boolean;
            isEdgeLegacy: boolean;
            isEdge: boolean;
            isFF: boolean;
            isFacebookBrowser: boolean;
            isGoogleBot: boolean;
            isIE: boolean;
            isIE10: boolean;
            isIE11: boolean;
            isIE6: boolean;
            isIE7: boolean;
            isIE8: boolean;
            isIE9: boolean;
            isIOS: boolean;
            isIOSChrome: boolean;
            isIOSWebView: boolean;
            isMAC: boolean;
            isMobile: boolean;
            isMobileApp: boolean;
            isNativeMobileApp: boolean;
            isOnLine: boolean;
            isOpera: boolean;
            isSafari: boolean;
            isSafari534: boolean;
            isTouch: boolean;
            isWeChat: boolean;
            isWin: boolean;
            isWindowsPhone: boolean;
            messagingMethod: number;
            pageDomain: string;
            protocol: string;
            quirksMode: boolean;
            supportsFlash: boolean;
            supportsLocalStorage: boolean;
            supportsPostMessage: boolean;
            supportsSessionStorage: boolean;
            userAgent: string;
            version: number;
        };
    };
    initUI(): void;
    private shouldSaveAsString;
    importJson(): void;
    onFileSelected(files: any): void;
    clearAll(): void;
    exportJson(): void;
}
export {};
