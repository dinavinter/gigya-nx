export interface GoogleAnalyticsConfig {
    googleAnalyticsGTag: string;
}
export interface IAnalytics {
    register: (sendAnalytics: ISendAnalyticsFn) => void;
}
export declare type IAnalyticsPayload = Record<string, string | boolean | number>;
export declare type ISendAnalyticsFn = (command: string, commandParameters: string | Date, payload?: IAnalyticsPayload) => void;
export declare class GoogleAnalytics {
    private config;
    private analytics;
    constructor(config: GoogleAnalyticsConfig, analytics: IAnalytics[]);
    private get gtag();
    start(): void;
    private createGAGlobalScript;
    private defineGTag;
    private addMandatoryGAConfig;
    private sendAnalytics;
}
