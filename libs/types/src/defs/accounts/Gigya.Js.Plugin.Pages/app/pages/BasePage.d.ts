import { IPagesParams } from '../PagesPlugin';
export declare abstract class BasePage {
    protected params: IPagesParams;
    protected constructor(params: IPagesParams);
    abstract start(callback: (isSuccess: boolean) => void): any;
    protected showPageScreenSet(params: any, callback: (isSuccess: boolean) => void): void;
    private getBasicScreenSetParams;
    protected redirectToRedirectUri(): void;
    protected showError(message: string): void;
    protected onSuccess(event: any): void;
    protected onError(event: any): void;
    protected onLogin(event: any): void;
    protected onLogout(event: any): void;
    redirect(path: string): void;
    onAfterLogin(event: any): void;
    private onAfterSubmit;
    private addHostedPagesEventsListeners;
}
