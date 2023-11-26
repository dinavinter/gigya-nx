import { ApiAdapterSettings } from 'src/core/Gigya.Js/interfaces/IApiAdapter';
export declare abstract class BaseRequest {
    baseUrl: string;
    methodName: string;
    params: Object;
    settings: ApiAdapterSettings;
    private _maxTries;
    private _tries;
    loaded: boolean;
    sentLoginToken: string;
    paramsLoginToken: string;
    constructor(baseUrl: string, methodName: string, params: Object, settings?: ApiAdapterSettings, _maxTries?: number);
    getUrl(): string;
    send(maxRetriesCallback?: () => void): void;
    protected abstract sendAction(): any;
    getAuthParams(): Object;
    getHeaders(): {
        Authorization: any;
    } | {
        Authorization?: undefined;
    };
}
