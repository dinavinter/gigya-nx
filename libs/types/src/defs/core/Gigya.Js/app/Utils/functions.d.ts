export declare function callAsync<T>(methodName: string, params?: {}): Promise<T>;
export declare function callFunction(name: string, arParams: any[]): void;
export declare function invokeOnPageLoad(func: Function, completeOnly?: boolean): void;
export declare function createAlias(publicName: string, fnc: Function | {
    [key: string]: any;
}): void;
export declare function debounce(fn: () => void, delayMilliseconds: number): () => void;
export declare function addSrcToIFrameIfNeeded(iframe: HTMLIFrameElement, src?: string): void;
