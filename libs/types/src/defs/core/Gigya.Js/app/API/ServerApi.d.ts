import { IApiAdapter, ApiAdapterSettings } from '../../interfaces/IApiAdapter';
import { ApiSettings, BaseApi } from './BaseApi';
export declare var apiAdapter: IApiAdapter;
export interface Mode {
    silent: boolean;
    warn: boolean;
}
export interface ServerApiSettings extends ApiSettings {
    oauth?: boolean;
    mode?: Mode;
    restUrl?: string;
}
export declare class ServerApi extends BaseApi {
    schema: string;
    requiresSession?: boolean;
    settings: ServerApiSettings;
    adapterSettings: ApiAdapterSettings;
    altSessionParams?: string;
    constructor(apiMethod: string, schema: string, requiresSession?: boolean, settings?: ServerApiSettings, adapterSettings?: ApiAdapterSettings, altSessionParams?: string);
    run(params: Object, explicitParams: Object): void;
}
