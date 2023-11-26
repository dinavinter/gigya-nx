export interface CacheProvider {
    get: (key: string, cacheTimout: number) => any;
    set: (key: string, response: Object) => void;
    remove: (key: string) => void;
}
export declare function saveContext(apiKey: any, context: any, done: any): void;
export declare function removeContext(apiKey: any): void;
export declare function loadContext(apiKey: any, callback: any): void;
