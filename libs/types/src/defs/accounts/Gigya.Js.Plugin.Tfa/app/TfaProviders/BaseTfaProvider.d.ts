import { TfaPlugin, TfaMode } from 'src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin';
export declare abstract class BaseTfaProvider {
    plugin: TfaPlugin;
    container: HTMLElement;
    params: Object;
    mode: TfaMode;
    callback: (response: Object, providerAssertion: string, tempDevice: boolean) => void;
    protected restartFlowInterval: number;
    name: string;
    protected constructor(plugin: TfaPlugin, container: HTMLElement, params: Object, mode: TfaMode, callback: (response: Object, providerAssertion: string, tempDevice: boolean) => void, restartFlowInterval?: number);
    abstract startFlow(capabilities?: string[]): void;
    protected showError(error: string, errorElements?: HTMLElement[]): void;
    protected hideError(errorElements?: HTMLElement[]): void;
    protected showProgress(): void;
    protected hideProgress(): void;
    private isInDOM;
    isActive(): boolean;
    isInactive(): boolean;
}
