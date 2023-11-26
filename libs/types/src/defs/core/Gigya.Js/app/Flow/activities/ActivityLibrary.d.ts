import { BaseActivity } from './BaseActivity';
import { ActivityType, IFlowResponse } from '../interfaces';
import { Flow } from '../Flow';
declare type Activity = {
    new (flow: Flow, params: IFlowResponse): BaseActivity;
};
export declare class ActivityLibrary {
    private static activityMap;
    static isEmpty(): boolean;
    static registerActivity(type: ActivityType, activity: Activity): void;
    static getActivity(flow: Flow, params?: IFlowResponse): BaseActivity;
}
export {};
