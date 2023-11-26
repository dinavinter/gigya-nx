import { CacheProvider } from './storage';
export declare function ensureJsSdkLoaded(apiKey: any, originHostname: any, done: any): void;
export declare function findConfiguration(): {
    apiKey: any;
    originHostname: string;
    configJson: any;
};
export declare function redirectOnMissingOidcContext(): boolean;
export declare function getCacheProvider(): CacheProvider;
