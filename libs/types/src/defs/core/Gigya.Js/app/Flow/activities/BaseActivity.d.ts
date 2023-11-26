import { RequestProvider } from 'src/core/ApiService/app/RequestProvider';
import { IFlowResponse } from '../interfaces';
import { Flow } from '../Flow';
export declare abstract class BaseActivity {
    protected flow: Flow;
    protected params: IFlowResponse;
    private _requestProvider;
    constructor(flow: Flow, params: IFlowResponse, _requestProvider?: RequestProvider);
    abstract run(): any;
    next(url: string): Promise<void>;
    protected getRequestParams(): {};
    private fetch;
}
