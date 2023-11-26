export interface ILinkBackEvent {
    eventName: string;
    provider?: string;
    CID: string;
    shortCode?: string;
}
export interface IEventObject {
}
export interface IEventHandlerInfo {
    handler: (e: IEventObject) => void;
    type?: string;
    context?: Object;
    params?: Object;
    fullEventName?: string;
}
export declare const _activeNamespaces: {};
export declare function add(eventName: string, eventHandler: (e: IEventObject) => void, type?: string, context?: any, namespace?: string, params?: any): IEventHandlerInfo;
export declare function remove(fullEventName: any, registeredHandler: any): void;
export declare function dispatch(eventObj: any, params?: any): number;
export declare function dispatchWhenHandlerAdded(eventObj: Object, params?: Object, preProcess?: (eventObj: Object, callback: Function) => void): void;
export declare function dispatchWhenHandlersAdded(eventNames: Array<string>, eventObj: Object, params?: Object, preProcess?: (eventObj: Object, callback: Function) => void): void;
export declare function getEventsForOperation(operation: any): string;
