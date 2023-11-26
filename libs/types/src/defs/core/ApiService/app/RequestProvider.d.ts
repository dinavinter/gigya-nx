export declare class RequestProvider {
    private _xhrRequest;
    timeout: number;
    private _win;
    constructor(_xhrRequest?: any, timeout?: number, _win?: Window & typeof globalThis);
    send(baseDomain: any, methodName: any, params: any, settings: any, headers?: {}): Promise<unknown>;
}
