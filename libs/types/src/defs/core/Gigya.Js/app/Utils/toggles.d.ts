declare class WebSDKToggles {
    has(key: string): boolean;
    get<T = any>(key: string): T;
    isOn(key: string): boolean;
    private get _toggles();
    private get _globalConfToggles();
    private get _webSdkConfigToggles();
}
declare const _default: WebSDKToggles;
export default _default;
