import { BaseFormWidget } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget';
import { BaseForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
export declare enum ServerStates {
    NotStarted = 0,
    InProgress = 1,
    Done = 2,
    Error = 3
}
export interface ServerDoneCallback extends Function {
    (status: ServerStates, widget: BaseServerWidget<any>): void;
}
export declare class BaseServerWidget<T extends HTMLElement> extends BaseFormWidget<T> {
    private nextServerQueryId;
    serverState: ServerStates;
    private callbacks;
    constructor(form: BaseForm, el: T, resetCSS?: boolean);
    startServerQuery(): number;
    onServerQueryEnd<D>(serverQueryId: number, newState: ServerStates, data?: D): void;
    serverQueryDone<D>(newState: ServerStates, data?: D): void;
    runOnServerDone(callback: ServerDoneCallback): void;
}
