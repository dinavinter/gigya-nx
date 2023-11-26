export declare function getApi(name: string): BaseApi;
export declare abstract class BaseApi {
    methodName: string;
    settings: ApiSettings;
    constructor(methodName: string, settings: ApiSettings);
    abstract run(params: Object, explicitParams?: Object): void;
    preprocessRequest(params: Object, callback: () => void): void;
    addAlias(): void;
}
export interface ApiSettings {
    defaultParams?: Object;
    forcePost?: boolean;
    riskAssessment?: boolean;
    disableCache?: boolean;
    preprocessor?: (params: Object, callback: () => void) => void;
    postprocessor?: (params: Object, response: Object) => void;
}
