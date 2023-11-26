import { BaseTfaProvider } from 'src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider';
import { TfaPlugin, TfaMode } from 'src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin';
export declare class EmailTfaProvider extends BaseTfaProvider {
    private emails;
    private phvToken;
    constructor(plugin: TfaPlugin, container: HTMLElement, params: Object, mode: TfaMode, callback: (response: Object, providerAssertion: string, tempDevice: boolean) => void, restartFlowInterval?: number);
    startFlow(capabilities?: string[]): void;
    private getEmails;
    private showEmailTfaScreen;
    private sendVerificationCodeToEmail;
    private showEnterCode;
    sendTfaCode(tbCode: HTMLInputElement, isChecked: boolean): void;
    private onDone;
}
