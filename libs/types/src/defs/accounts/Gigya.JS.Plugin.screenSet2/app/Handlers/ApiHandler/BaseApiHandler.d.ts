import { IGigyaResponse } from "../../ScreenSetPlugin";
import { Screen } from '../../Screen';
export declare abstract class BaseApiHandler {
    protected screen: Screen;
    private _serverApi;
    private static _handlers;
    private static _defaultHandler;
    constructor(screen: Screen, _serverApi: gigya._.ServerApi);
    send(): Promise<IGigyaResponse>;
    get methodName(): string;
    static getHandler(methodName: string, screen: Screen, serverApis: gigya._.ServerApi[]): BaseApiHandler;
    static addHandler(methodName: string, handler: typeof BaseApiHandler): void;
    static addDefaultHandler(handler: typeof BaseApiHandler): void;
    protected abstract getRequestParams(): object;
    protected abstract handleResponse(response: object): any;
}
