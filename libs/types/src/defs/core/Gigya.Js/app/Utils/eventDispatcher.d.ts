export declare type EventHandler = (data: any) => void;
export declare abstract class EventDispatcher<T extends string> {
    private eventHandlers;
    protected readonly eventPrefix: any;
    protected constructor(eventPrefix: any);
    on(eventName: T, handler: EventHandler): void;
    unsubscribe(event: T): void;
    dispatchEvent(eventName: T, data?: any): void;
    protected getFullEventName(eventName: T): string;
}
