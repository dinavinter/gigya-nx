import { Uri } from "src/core/Gigya.Js/app/Utils/Uri";
import * as validationUtils from 'src/core/Gigya.Js/app/Utils/validation';
export declare class SsoUtils {
    private _global;
    private _defaultValidDomains;
    constructor(_global?: import("./globalProvider").GlobalProvider, _defaultValidDomains?: string[]);
    getPageUrl(): string;
    isValidDomain(validDomains: string[], candidate: string): boolean;
    sendMessage(res: Object, callbackID: string, requestDomain: string): void;
    isValidGltExp(gltExp: string): boolean;
    getMaxGltExp(gltExp1: string, gltExp2: string): string;
    decodeUrl(value: string): string;
    deserialize(value: string): any;
    getCookiesStorage(): import("../../../core/Gigya.Js/app/Utils/localStorage").AbstractLocalStorageAdapter;
    validations(): typeof validationUtils;
    UriFactory(url: string, isAbsolute?: boolean): Uri;
    getFragment(): string;
}
