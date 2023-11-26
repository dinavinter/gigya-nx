import { IProxyResponse } from 'src/core/ServiceProxy/interfaces';
export declare type MaybePromiseAny = any | Promise<any>;
export declare type StopCancellers = () => MaybePromiseAny;
export declare class ProxyListener {
    private _service;
    origin: string;
    private _allowedMethods;
    private _target;
    private _win;
    constructor(_service: Object, origin?: string, _allowedMethods?: string[], _target?: Window, _win?: Window & typeof globalThis);
    stopCancellers: StopCancellers[];
    onStop: () => MaybePromiseAny;
    private _listening;
    get isListening(): boolean;
    listen(payload?: any): void;
    postError(res: IProxyResponse): void;
    private stopListen;
    private onRequest;
    private handleSignalRequest;
    private getCancelResult;
    private handleProxyRequest;
    private validateRequest;
    private forwardToService;
    protected postMessage(msg: any): void;
}
