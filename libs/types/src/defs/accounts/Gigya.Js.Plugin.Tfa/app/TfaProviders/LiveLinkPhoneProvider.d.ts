import { PhoneTfaProvider } from 'src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PhoneTfaProvider';
import { TfaPlugin, TfaMode } from 'src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin';
export declare class LiveLinkPhoneProvider extends PhoneTfaProvider {
    constructor(plugin: TfaPlugin, container: HTMLElement, params: Object, mode: TfaMode, callback: (response: Object, providerAssertion: string, tempDevice: boolean) => void);
    protected updateNumbers(callback: () => void): void;
}
