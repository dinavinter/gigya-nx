import { ServerApi, ServerApiSettings } from "src/core/Gigya.Js/app/API/ServerApi";
export interface RestApiSettings extends ServerApiSettings {
    requireSession: boolean;
    schema: string;
    method?: 'GET' | 'POST';
}
export declare class RestApi extends ServerApi {
    constructor(alias: string, url: string, { schema, requireSession, method, restUrl: _, ...rest }: RestApiSettings);
}
