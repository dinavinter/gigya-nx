export declare function isLoaded(src: string): boolean;
export declare function load(src: string, fnOnError?: () => void, fnOnLoad?: () => void, loadOnce?: boolean, removeAfter?: number | boolean, treatTogether?: string[]): void;
export declare enum ResourceTypes {
    script = 0,
    image = 1,
    iframe = 2
}
export declare function triggerResource(url: string, callback?: () => void, resourceType?: ResourceTypes, removeAfter?: number | boolean): void;
export declare function loadService(serviceName: string, fnOnError?: () => void, fnOnLoad?: () => void): void;
