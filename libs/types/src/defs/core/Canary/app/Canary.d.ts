import { CanaryConfig } from 'src/core/Canary/app/serverInjected';
import { CookieProvider } from './CookieProvider';
export declare class Canary {
    private _config;
    private _scriptUrl;
    private _cookieProvider;
    private _cookiesNames;
    private _xhrFactory;
    private _random;
    constructor(_config: CanaryConfig, _scriptUrl: string, _cookieProvider?: CookieProvider, _cookiesNames?: {
        isCanary: string;
        version: string;
    }, _xhrFactory?: () => XMLHttpRequest, _random?: () => number);
    private shouldCanary;
    private wasCanarySet;
    private rollCanary;
    private onCanaryLoadFail;
    private loadCanaryVersion;
    bootstrap(isOriginalScript?: boolean): void;
}
