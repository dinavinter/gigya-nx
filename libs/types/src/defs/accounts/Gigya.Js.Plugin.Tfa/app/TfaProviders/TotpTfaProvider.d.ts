import { BaseTfaProvider } from 'src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider';
import { TfaPlugin, TfaMode } from 'src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin';
import { IBackupCodesManager } from "../helpers/BackupCodesManager";
export declare class TotpTfaProvider extends BaseTfaProvider {
    private readonly _backupCodesManager;
    qrCode: string;
    sctToken: string;
    constructor(plugin: TfaPlugin, container: HTMLElement, params: Object, mode: TfaMode, callback: (response: Object, providerAssertion: string, tempDevice: boolean) => void, _backupCodesManager: IBackupCodesManager);
    startFlow(capabilities?: string[]): void;
    private show;
    private showRegisterMode;
    private showVerifyMode;
    private showEditMode;
    private showBackupCodesScreen;
    private showChangeDeviceScreen;
    private showGenerateNewCodesConfirmation;
    private sendTfaCode;
    private verify;
    private renderRegistrationProcess;
    private renderVerificationSection;
    private waitForQRImageToRender;
}
