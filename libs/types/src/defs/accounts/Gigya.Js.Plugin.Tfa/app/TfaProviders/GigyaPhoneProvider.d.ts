import { PhoneTfaProvider } from 'src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PhoneTfaProvider';
import { TfaPlugin, TfaMode } from 'src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin';
export declare class GigyaPhoneProvider extends PhoneTfaProvider {
    constructor(plugin: TfaPlugin, container: HTMLElement, params: Object, mode: TfaMode, callback: (response: Object, providerAssertion: string, tempDevice: boolean) => void);
}
