import { BaseTfaProvider } from 'src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider';
import { TfaMode, TfaPlugin, VerificationMethod } from 'src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin';
export interface PhoneNumber {
    obfuscated?: string;
    id?: string;
    lastMethod?: string;
    lastVerification?: string;
    plain?: string;
}
export declare class PhoneTfaProvider extends BaseTfaProvider {
    phoneNumbers: PhoneNumber[];
    phvToken: string;
    private phoneIdToRemove;
    protected supportedSendMethods: VerificationMethod[];
    constructor(plugin: TfaPlugin, container: HTMLElement, params: Object, mode: TfaMode, callback: (response: Object, providerAssertion: string, tempDevice: boolean) => void, restartFlowInterval?: number);
    startFlow(capabilities?: string[]): void;
    private show;
    private showEdit;
    private getPhoneById;
    private showEnterPhoneNumber;
    protected setError(elem: any, message: any): void;
    protected unsetError(elem: any): void;
    protected getLastPhone(): PhoneNumber;
    showVerify(): void;
    private showEnterCode;
    sendTfaCode(tbCode: HTMLInputElement, cbRemember: HTMLInputElement): void;
    private showResend;
    private showVerificationMethods;
    protected updateNumbers(callback: () => void): void;
    protected sendVerificationCodeToPhone(phone: PhoneNumber, mode: TfaMode, method: string): void;
    completeVerification(phvToken: string, code: string, callback: (response: Object) => void): void;
    private onDone;
    private setAreaCodesTranslation;
}
