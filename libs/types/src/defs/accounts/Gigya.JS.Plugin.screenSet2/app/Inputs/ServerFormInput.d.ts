import { FormInput, IFormInputContext } from "./FormInput";
export declare enum ServerFieldStates {
    NotStarted = 0,
    InProgress = 1,
    Done = 2,
    Error = 3
}
export interface ServerDoneFieldCallback extends Function {
    (status: ServerFieldStates, field: ServerFormInput): void;
}
export declare class ServerFormInput extends FormInput {
    serverState: ServerFieldStates;
    private callbacks;
    constructor(context: IFormInputContext);
    startServerQuery(): void;
    onServerEnd(errorCode: any): void;
    runOnServerDone(callback: ServerDoneFieldCallback): void;
}
