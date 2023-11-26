import { BaseRequest } from 'src/core/Gigya.Js.Adapters.Web/app/BaseRequest';
import { ApiAdapterSettings } from 'src/core/Gigya.Js/interfaces/IApiAdapter';
export declare class ApiRequest extends BaseRequest {
    methodName: string;
    params: Object;
    callback: (res: any) => void;
    settings: ApiAdapterSettings;
    constructor(methodName: string, params: Object, callback: (res: any) => void, settings?: ApiAdapterSettings);
    protected sendAction(ignoreCacheTimeout?: boolean): void;
    private json;
}
