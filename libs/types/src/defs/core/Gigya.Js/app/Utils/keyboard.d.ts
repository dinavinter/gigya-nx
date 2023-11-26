export interface IHotKeyEvent {
    unsubscribe(): void;
}
export declare const enum Keys {
    escape = 27,
    backspace = 8,
    enter = 13
}
export declare const keyCodes: {
    27: string;
    8: string;
    13: string;
};
export interface IHotKey {
    key: Keys;
    elementContext?: HTMLElement;
}
export declare function onHotKeyClicked(hotKeyData: IHotKey, handler: () => void): IHotKeyEvent;
