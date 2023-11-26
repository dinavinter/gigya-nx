import { MockConfig } from '../interfaces';
export declare const CONSENT_SELECTORS: {
    wrapper: string;
    title: string;
    approvedOnLabel: string;
    approvedOn: string;
    versionLabel: string;
    version: string;
    localeLabel: string;
    locale: string;
};
export declare const CONSENT_DATA_ATTRIBUTES: {
    title: string;
    approvedOnLabel: string;
    versionLabel: string;
    localeLabel: string;
};
export declare function getConsentWidgetMock(config?: MockConfig): any;
