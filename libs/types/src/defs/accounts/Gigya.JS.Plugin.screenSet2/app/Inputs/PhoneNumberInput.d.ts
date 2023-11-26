import { FormInput, IFormInputContext, IValidationCallback, ValidityStates } from './FormInput';
export declare const gigyaPhoneNumberInput = "gigya-phone-number-input";
export declare const PhoneInput_Attributes: {
    countryCodesSelection: string;
    countryCodes: string;
};
export declare const enum CountryCodeSelection {
    All = "all",
    Specific = "specific"
}
export declare class PhoneNumberInput extends FormInput {
    private countryCodeSelectHadChanged;
    private subscriberNumberHadChanged;
    private countryCodeSelect;
    private subscriberNumber;
    private countryCodesDataStructure;
    private countryCodesList;
    private countryCodeSelectPreviousValue;
    private subscriberNumberPreviousValue;
    hasCountryCodeSelectChanged(): boolean;
    hasSubscriberNumberChanged(): boolean;
    static FORM_TYPE_CRITERIA(context: IFormInputContext): boolean;
    setPlaceholderValue(): void;
    linkInstanceElement(parent: HTMLFormElement): void;
    _showValidityOnInput(element?: HTMLElement): void;
    unlinkInstanceElement(): void;
    setValidityState(validityState: ValidityStates, fromServer?: boolean): void;
    validateValue(formData: any, fieldValue: string, callback: IValidationCallback): void;
    getValue(el?: HTMLInputElement, currentValue?: any): string;
    setValue(phoneNumber: string, setByScript?: boolean): void;
    markAsDirty(): void;
    markAsPristine(): void;
    shouldValidate(): boolean;
    focus(): void;
    protected getConditionalExpression(el: HTMLElement): any[];
    private generateCountryCodesDataStructure;
    private filterCountryCodes;
    private get isSpecificCountryCodes();
    private get specificCountryCodes();
    private get countryCodesOptions();
    private getCountryCode;
    private getSubscriberNumber;
    private onCountryCodeSelected;
    private onSubscriberNumberChanged;
    private setupChangeEventHandler;
    private removeChangeEventHandler;
    private getCountryCodeValidityState;
    private getSubscriberNumberValidityState;
    private areBothInputsDirty;
    private isDirty;
    private setCountryCodeSelectAriaLabel;
    private get regExMatchingForE164();
}
