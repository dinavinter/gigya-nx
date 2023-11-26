import { IDisposable } from 'src/core/Gigya.Js/interfaces/IDisposable';
import * as arrayUtils from 'src/core/Gigya.Js/app/Utils/array';
import { EventWrapper } from 'src/core/Gigya.Js/app/BaseObject/EventWrapper';
import * as globalEvents from 'src/core/Gigya.Js/app/GlobalEvents';
import { IBaseObjectConfig } from 'src/core/Gigya.Js/app/BaseObject/IBaseObjectConfig';
import { GSErrors } from 'src/core/Gigya.Js/app/GSErrors';
export interface IBaseObjectParam {
    onError?: (e: any) => void;
}
export declare class BaseObject<P extends IBaseObjectParam> implements IDisposable {
    params?: P;
    explicitParams?: P;
    private static instanceCounter;
    static NOT_IMPLEMENTED_ERROR: string;
    private _logger;
    private _eventDispatcher;
    private _errorDispatcher;
    private _globalEventsManager;
    protected _isDisposed: boolean;
    private _eventWrappers;
    protected _globalEventHandlers: {
        [name: string]: Array<globalEvents.IEventHandlerInfo>;
    };
    private _id;
    onErrorEvent(): EventWrapper<(e: any) => void>;
    onDisposedEvent(): EventWrapper<() => void>;
    dispatchGlobalEvent(eventObj: any): void;
    constructor(params?: P, explicitParams?: P, validateParams?: boolean);
    getType(): string;
    private getFunctionName;
    protected getConfig(): IBaseObjectConfig<P>;
    toString(): string;
    id(): number;
    warn(msg: string, e?: any): void;
    protected error(msg: string, errorCode?: GSErrors, e?: any): void;
    protected validateParams(reqParams?: string[]): boolean;
    protected dispatchEvent(eventName: string, args?: any): any;
    protected dispatchErrorFromResponse(response: Object): any;
    protected dispatchInvalidParamError(paramName: string): void;
    protected getEvent<T extends Function>(eventName: string): EventWrapper<T>;
    protected addGlobalEventHandlers(handlers: arrayUtils.IMap<(e: globalEvents.IEventObject) => void>): void;
    protected addGlobalEventHandler(name: string, handler: (e: globalEvents.IEventObject) => void, context?: any, namespace?: string): void;
    protected removeGlobalEventHandlers(handlers: arrayUtils.IMap<Function>): void;
    protected removeGlobalEventHandler(name: string, handler: Function, context?: any, namespace?: string): void;
    protected prepareCallback(callback: Function): (...args: any[]) => any;
    dispose(): void;
}
