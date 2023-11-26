import { IBaseObjectParam, BaseObject } from 'src/core/Gigya.Js/app/BaseObject/BaseObject';
import { EventWrapper } from 'src/core/Gigya.Js/app/BaseObject/EventWrapper';
declare const BaseObjectGlobal: typeof BaseObject;
export declare class AsyncManager extends BaseObjectGlobal<IBaseObjectParam> {
    private _actions;
    constructor();
    private static _eventNames;
    onActionRegisterEvent(): EventWrapper<() => void>;
    onActionUnRegisterEvent(): EventWrapper<() => void>;
    onNoActionsPendingEvent(): EventWrapper<() => void>;
    private register;
    private unregister;
    call(func: (params: Object) => any, params: Object, callbackField?: string): void;
    isActive(): boolean;
}
export {};
