export declare class EventWrapper<T extends Function> {
    private _handlers;
    constructor(_handlers?: Array<T>);
    add(handler: T): void;
    remove(handler: T): void;
}
