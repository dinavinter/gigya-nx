declare type IGetGigParamsFromUrlConfig = gigya.utils.URL.IGetGigParamsFromUrlConfig;
declare type IGetContextParamsFromUrlConfig = gigya.utils.URL.IGetContextParamsFromUrlConfig;
export declare function URLEncode(value: string): string;
export declare function URLDecode(value: string): string;
export declare function URLDecodeRecursive(value: string): string;
export declare function getParamsFromURL(url: string, keysToLower?: boolean): Object;
export declare function getGigParamsFromURL(config: IGetGigParamsFromUrlConfig): any;
export declare function getParamValueFromURL(param: string, url: string, defaultValue: string): string;
export declare function addParamsToURL(url: string, oParams: Object): string;
export declare function getContextParamsFromUrl<T = {
    [key: string]: string;
}>(config: IGetContextParamsFromUrlConfig): Partial<T>;
export {};
