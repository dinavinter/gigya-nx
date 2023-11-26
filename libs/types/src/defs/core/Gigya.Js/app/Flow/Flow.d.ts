import { ErrorEventHandler, EventHandler, IFlowParams } from "./interfaces";
export declare class Flow {
    identityFlowId: string;
    flowParams?: IFlowParams;
    private onComplete?;
    eventMap: Map<string, EventHandler>;
    errorHandler?: ErrorEventHandler;
    constructor(identityFlowId: string, flowParams?: IFlowParams, onComplete?: () => void);
    on(eventName: string, eventHandler: EventHandler): Flow;
    error(eventHandler: ErrorEventHandler): Flow;
    execute(): void;
    finish(): void;
}
export declare function flow(flowId: string, params?: IFlowParams, onComplete?: () => void): Flow;
