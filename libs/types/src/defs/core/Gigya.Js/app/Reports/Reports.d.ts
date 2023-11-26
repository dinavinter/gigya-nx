export declare const ALLOWED_REPORT_VALUE = "a-zA-Z0-9-_/";
export declare const NOT_ALLOWED_REPORT_CHARS_REGEX: RegExp;
export interface IReport {
    eventCategory: string;
    eventType: string;
    eventTime: number;
    eventData: string;
    eventId: string;
}
export interface IReportConfig {
    id: string;
    eventMap: {
        events: string;
        args?: any[];
        method?: (event: any) => void;
    }[];
    defaultMethod: (event: any) => void;
}
export declare var queue: IReport[];
export declare const reports: [{
    id: string;
    config: IReportConfig;
}];
export declare function registerReports(): void;
export declare function removeReports(): void;
export declare function replaceNotAllowedReportChars(source: string, replaceValue: string): string;
