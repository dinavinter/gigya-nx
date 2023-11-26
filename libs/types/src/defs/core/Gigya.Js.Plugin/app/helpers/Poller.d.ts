import { IDisposable } from 'src/core/Gigya.Js/interfaces/IDisposable';
export interface IPoller extends IDisposable {
    addActions(...actions: (IPollerAction | Function)[]): any;
    hasActions(): boolean;
    start(interval: number, force?: boolean): any;
    stop(): any;
    isStarted(): any;
}
export interface IPollerAction extends IDisposable {
    act: () => void;
}
export declare const enum PollerStartResult {
    OK = 0,
    AlreadyStarted = 1
}
export declare class Poller implements IPoller {
    private _logger;
    private _intervalID;
    private _actions;
    constructor(_logger?: {
        (message?: any, ...optionalParams: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    });
    addActions(...actions: (IPollerAction | Function)[]): void;
    hasActions(): boolean;
    start(interval: number, force?: boolean): PollerStartResult;
    stop(): void;
    isStarted(): boolean;
    dispose(): void;
}
