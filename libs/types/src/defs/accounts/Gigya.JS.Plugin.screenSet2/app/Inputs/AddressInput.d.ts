import { IFormInputContext, IValidationCallback, ValidityStates } from "src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput";
import { TypeaheadInput } from "../typeahead/typeahead-input";
interface IAddressSuggestion {
    address: string;
    id: string;
}
export declare class AddressInput extends TypeaheadInput {
    private currentSuggestions;
    private isAddressChanged;
    private geolocation;
    private minCharactersBeforeServer;
    static FORM_TYPE_CRITERIA(context: IFormInputContext): boolean;
    constructor(context: IFormInputContext);
    allowGeolocation(): boolean;
    linkInstanceElement(parent: HTMLFormElement): void;
    get isSubTypAddress(): boolean;
    onAfterSelectCallback(): void;
    prePopulate(value: string | boolean | string[]): void;
    unlinkInstanceElement(): void;
    onFieldChange(setByScript: boolean): void;
    private get fieldValue();
    findAddress(fieldValue: string): IAddressSuggestion;
    private fetchSuggestions;
    private getCoordinates;
    private getDefaultLocationParam;
    private selectedAddress;
    serverQueryDone(res: any, checkedValue: any, callback: IValidationCallback): void;
    private handleServerDataError;
    isSelectedAddress(fieldValue: string): boolean;
    serverValidated(): boolean;
    validateValue(formData: any, fieldValue: any, callback: IValidationCallback): void;
    private getAddressValidityState;
    setValidityState(validityState: ValidityStates, fromServer?: boolean): void;
    shouldValidateWithErrors(): boolean;
    shouldValidateWithWarning(fieldValue: any): boolean;
    private isDirty;
    private shouldValidate;
}
export {};
