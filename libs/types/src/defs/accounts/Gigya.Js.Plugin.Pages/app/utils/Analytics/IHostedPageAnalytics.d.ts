import Profile from "gigya";
import { GoogleAnalyticsConfig } from 'src/core/Gigya.Js/app/GoogleAnalytics/GoogleAnalytics';
import { IReportConfig } from 'src/core/Gigya.Js/app/Reports/Reports';
export declare type IPageAnalyticsConfig = GoogleAnalyticsConfig & {
    events: string;
    isActive: 'true' | 'false';
};
export declare type IIdentityFlowsConfig = {
    selectedFlow: {
        id: string;
        displayName: string;
    };
};
export interface IBaseEvent {
    eventName: string;
    source: string;
    context: any;
}
export interface IBaseGlobalEvent extends IBaseEvent {
}
export interface ILoginEvent extends IBaseGlobalEvent {
    UID: string;
    UIDSignature: string;
    signatureTimestamp: string;
    loginMode: string;
    newUser: boolean;
    provider: string;
    profile: Profile;
    data: object;
    remember: boolean;
    dataCenter?: string;
}
export interface ILogoutEvent extends IBaseGlobalEvent {
}
export interface IBaseScreenSetEvent extends IBaseEvent {
    instanceID?: string;
    screenSetID: string;
    screen: string;
}
export interface IErrorEvent extends IBaseScreenSetEvent {
    response: any;
    status: string;
    statusMessage: string;
    errorMessage: string;
    errorDetails: string;
    errorCode: number;
}
export interface IAfterSubmitEvent extends IBaseScreenSetEvent {
    form: string;
    profile: any;
    data: any;
    preferences: any;
    response: any;
    subscriptions: any;
}
export declare type IAfterScreenLoadEvent = IBaseScreenSetEvent & {
    currentScreen: string;
    abTesting: {
        variantId: string;
        testId: string;
    };
    profile: any;
    data: any;
    preferences: any;
    response: any;
};
export declare type IHideEvent = IBaseScreenSetEvent & {
    reason: string;
};
export declare type BasicEventPayload = {
    eventName: string;
};
export declare type AfterSubmitResponsePayload = {
    errorCode: number;
    errorDetails: string;
    errorMessage: string;
    operation: string;
};
export declare type ScreenSetEventPayload = BasicEventPayload & {
    screen: string;
    screenSetID: string;
    source: string;
};
export declare type ErrorEventPayload = BasicEventPayload & {
    errorMessage: string;
    errorCode: number;
    source: string;
};
export declare type LogoutEventPayload = BasicEventPayload;
export declare type LoginEventPayload = BasicEventPayload & {
    provider: string;
    loginMode: string;
    newUser: boolean;
    source: string;
    UID: string;
};
export declare type IEventMapConfig = IReportConfig;
export declare type IEventPayload = LoginEventPayload | ErrorEventPayload | ScreenSetEventPayload | LogoutEventPayload;
export declare type IEventHandler = (event: IBaseEvent) => IEventPayload;
