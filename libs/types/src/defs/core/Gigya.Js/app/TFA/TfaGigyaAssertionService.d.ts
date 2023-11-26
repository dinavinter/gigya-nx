import { TfaMode, TfaProvider } from 'src/core/Gigya.Js/app/TFA/types';
declare class TfaGigyaAssertionService {
    private assertions;
    getAssertion(mode: TfaMode, provider: TfaProvider, requestParams?: object): Promise<string>;
    private fetchGigyaAssertion;
    private getExistingAssertion;
    private updateAssertion;
    private getKey;
    private isAssertionValid;
}
declare const _default: TfaGigyaAssertionService;
export default _default;
