export declare class ApiCountdownHelper {
    private readonly el;
    protected intervalID: any;
    constructor(el: HTMLElement);
    startCountdown(): Promise<void>;
    protected startResendCountDown(counter: any): Promise<void>;
    protected changeResendBlockedMessage(count: number): void;
    protected show(): void;
    protected hide(): void;
    protected destroy(): void;
}
