import { IAnalytics, ISendAnalyticsFn } from 'src/core/Gigya.Js/app/GoogleAnalytics/GoogleAnalytics';
import { IPageAnalyticsConfig } from './IHostedPageAnalytics';
export declare class HostedPageAnalytics implements IAnalytics {
    private config;
    private events;
    constructor(config: IPageAnalyticsConfig, events: Pick<typeof gigya, 'defaultEventMaps'>);
    register(sendAnalytics: ISendAnalyticsFn): void;
}
