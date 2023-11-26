export interface IProxyMessage {
    id: string;
}
export interface IProxyRequest extends IProxyMessage {
    methodName: string;
    params?: any[];
    headers?: {
        [key: string]: string;
    };
}
export declare type ProxySignal = 'listening' | 'stop' | 'error';
export interface IProxySignalRequest extends IProxyMessage {
    signal: ProxySignal;
}
export interface IProxyResponse extends IProxyMessage {
    res: any;
    signal?: ProxySignal;
}
export declare function isSignalRequest(req: IProxyMessage): req is IProxySignalRequest;
