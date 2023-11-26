import { TfaPlugin, TfaMode } from 'src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin';
import { BaseTfaProvider } from 'src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider';
export declare function getTfaProviderInstance(providerName: string, plugin: TfaPlugin, container: HTMLElement, params: Object, mode: TfaMode, callback: (response: Object, providerAssertion: string, tempDevice: boolean) => void): BaseTfaProvider;
export declare function isTfaProviderSupported(providerName: string): boolean;
