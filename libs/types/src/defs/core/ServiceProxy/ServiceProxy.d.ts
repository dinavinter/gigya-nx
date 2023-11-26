export declare class ServiceProxy {
    url: string;
    timeout: number;
    private _idCreator;
    private _iframeCreator;
    private getIframeHost;
    private _win;
    private _iframe;
    private _pendingReqs;
    private _iframeHost;
    private _mutationObservers;
    constructor(url: string, timeout?: number, _idCreator?: () => string, _iframeCreator?: (title?: string, doc?: Document) => HTMLIFrameElement, getIframeHost?: () => Promise<HTMLElement>, _win?: Window & typeof globalThis);
    get isInit(): boolean;
    init<T>(title: string): Promise<T>;
    private validateOrigin;
    private onResponse;
    private postToIFrame;
    private registerMessage;
    sendRequest<T>(methodName: string, params?: any[]): Promise<T>;
    stop<T>(forceClose?: boolean): Promise<T>;
    wrapWith<T>(type: new () => T): T;
    wrapWith<T>(type: Object): T;
    wrapWith<T>(keys: string[]): T;
    private proxyFromKeys;
    private startObservingIFrameRemoval;
    private stopObservingIFrameRemoval;
    private addMutationObserver;
    private _tryParseResponse;
}
