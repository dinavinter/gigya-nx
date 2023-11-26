export declare class ApiLinkHelper {
    private readonly el;
    private readonly callApi;
    private resendTimeoutId;
    private readonly originalText;
    private onClick;
    constructor(el: HTMLElement, callApi: Function);
    init(): void;
    destroy(): void;
    private temporarilyDisable;
    private startResendCountDown;
    private enableResendCode;
    private disable;
    private changeResendBlockedMessage;
    private enable;
}
