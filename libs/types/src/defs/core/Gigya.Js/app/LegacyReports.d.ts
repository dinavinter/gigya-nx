export interface Report {
    name: string;
    time: string;
    source?: string;
    sourceData?: Object;
    reportData?: Object;
    cid?: string;
}
export declare var queue: Report[];
export declare function trackAddressBarShares(): void;
export declare function report(event: any, APIKey: any, cid: any, source: any, sourceData: any, params?: {}, ignoreQueue?: boolean): void;
export declare function init(): void;
export declare function reportLoad(methodName: any, params: any): void;
