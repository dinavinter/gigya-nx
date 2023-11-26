import { PasskeyBaseWidget } from './PasskeyBaseWidget';
export declare const PasskeyRegister_CONSTS: {
    selector: string;
    behaviorAttr: string;
};
export declare const PasskeyRegisterMode: {
    Connect: string;
    Submit: string;
};
export declare class PasskeyRegisterWidget extends PasskeyBaseWidget {
    static CONSTS: {
        selector: string;
        behaviorAttr: string;
    };
    protected get behavior(): string;
    protected onClick(): Promise<void>;
}
