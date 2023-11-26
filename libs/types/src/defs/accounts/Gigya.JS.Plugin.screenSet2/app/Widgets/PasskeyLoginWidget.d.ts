import { PasskeyBaseWidget } from './PasskeyBaseWidget';
export declare const PasskeyLogin_CONSTS: {
    selector: string;
};
export declare class PasskeyLoginWidget extends PasskeyBaseWidget {
    static CONSTS: {
        selector: string;
    };
    protected onClick(): Promise<void>;
}
