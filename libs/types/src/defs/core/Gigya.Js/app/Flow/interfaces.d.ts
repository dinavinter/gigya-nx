import { IGigyaResponse } from '../../../../accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin';
export declare type EventHandler = (eventData: IEventData) => void;
export declare type ErrorEventHandler = (errorData: any) => void;
export declare enum ActivityType {
    Event = "Event",
    ScreenSet = "ScreenSet"
}
export interface IFlowResponse extends IGigyaResponse {
    activityType: ActivityType;
    workflowDefinitionId: string;
    responseText?: string;
    screenSet?: string;
    startScreen?: string;
    eventName?: string;
    onSubmitUrl?: string;
    afterEventUrl?: string;
}
export interface IEventData {
    workflowDefinitionId: string;
    eventName: string;
    data?: any;
}
export interface IFlowParams {
    screenSetParams?: any;
}
