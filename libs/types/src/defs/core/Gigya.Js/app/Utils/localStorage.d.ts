import { SameSite } from './cookie';
export declare abstract class AbstractLocalStorageAdapter {
    static getName(): string;
    abstract getItem(key: string): string;
    abstract setItem(key: string, value: string, expiresIn?: number, domain?: string): void;
    abstract removeItem(key: string): any;
    /**
     * Set object to storage.
     */
    setObject(key: string, o: Object): void;
    /**
     * Get object from local storage.
     */
    getObject(key: string, defaultValue?: any): Object;
    /**
     * Is persistent storage. Returns false when data is not persisted.
     */
    isPersistent(): boolean;
}
export declare abstract class AbstractAsyncLocalStorageAdapter extends AbstractLocalStorageAdapter {
    protected isLoaded: boolean;
    constructor();
    isReady(): boolean;
    /**
     * Used when there is initialization time on the local storage adapter.
     */
    waitForService(callback: () => void): void;
}
export declare class CookieStorageAdapter extends AbstractLocalStorageAdapter {
    static isAvailable(): boolean;
    static getName(): string;
    getItem(key: string): string;
    setItem(key: string, value: string, expiresIn?: number, domain?: string, additionalParams?: {
        dontUseRootPath?: boolean;
        sameSite?: SameSite;
    }): void;
    removeItem(key: string): void;
}
export declare class MemoryStorageAdapter extends AbstractLocalStorageAdapter {
    static isAvailable(): boolean;
    protected memory: {
        [key: string]: string;
    };
    constructor();
    static getName(): string;
    getItem(key: string): string;
    setItem(key: string, value: string, expiresIn?: number): void;
    removeItem(key: string): void;
    /**
     * Is persistent storage. Returns false when data is not persisted.
     */
    isPersistent(): boolean;
}
export declare const adapters: Array<any>;
export declare const instances: {
    [key: string]: AbstractLocalStorageAdapter;
};
export declare function initializeAdapter(adapter: {
    name?: string;
    getName: () => string;
} & (new () => AbstractLocalStorageAdapter)): AbstractLocalStorageAdapter;
export declare function waitForService(): AbstractLocalStorageAdapter;
export declare function waitForService(callback: (storage: AbstractLocalStorageAdapter) => void): AbstractLocalStorageAdapter;
export declare function getItem(key: string): string;
export declare function setItem(key: string, value: string, expiresIn?: number): void;
export declare function removeItem(key: string): void;
export declare function setObject(key: string, o: Object): void;
export declare function getObject(key: string, defaultValue?: any): Object;
