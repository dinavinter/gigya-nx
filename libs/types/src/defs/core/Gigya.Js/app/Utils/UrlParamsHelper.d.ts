export default class UrlParamsHelper {
    private _win;
    private currentParams;
    constructor(_win?: typeof gigya._.WindowProvider);
    getGigParamsFromURL(paramPrefix?: string): this;
    removePrefix(prefix?: string): this;
    keysToLower(): this;
    removeUnacceptableParams(unacceptableParams: RegExp): this;
    toObject(): {};
}
