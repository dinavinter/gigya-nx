import { BaseScreenWidget } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseScreenWidget';
import { IForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin';
import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
import { BaseForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
export declare const SocialLoginWidget_CONSTS: {
    selector: string;
};
export declare class SocialLoginWidget extends BaseScreenWidget<HTMLDivElement> implements IForm {
    bindID: string;
    successScreen: string;
    private containerId;
    private onLoginResponse;
    private onErrorResponse;
    private loginMode;
    private apiParams;
    private _instance;
    private _container;
    static CONSTS: {
        selector: string;
    };
    constructor(_screen: Screen, el: HTMLDivElement);
    linkInstanceElement(parent: HTMLElement): void;
    /**
     * Surface errors in containing form.
     */
    getErrorDisplayForm(): BaseForm | undefined;
    protected initFromInstanceElement(): void;
    private calculateEnabledProviders;
    unlinkInstanceElement(): void;
    protected renderWidget(): void;
    private prepareWidgetParams;
    private getConflictHandlingFailParam;
    private get shouldLinkAccounts();
    private setContainerSize;
    private getProviderSessionInfo;
}
