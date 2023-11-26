import { IEnumerable, IMap } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/utils';
import { BaseForm, SchemaName } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
import { IScreenSetParams } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin';
import { IConditionalAttribute, TemplateElement } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement';
import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
import { ErrorType } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Errors';
import { GSErrors } from '../../../../core/Gigya.Js/app/GSErrors';
import { InputValueType, SchemaType, SchemaSubType } from '../SchemaTypeConverter';
import { IFormWidget } from '../BaseFormWidget';
import { ServerDoneFieldCallback } from "./ServerFormInput";
export interface IFieldNames {
    autoFillName: string;
    paramName: string;
}
export declare enum ValidityStates {
    _undefined = 0,
    valid = 1,
    error = 2,
    pending = 3
}
export interface IValidationInfo {
    errorCode: GSErrors;
    field?: IFormInput;
    widget?: IFormWidget;
    errorType?: ErrorType;
    setByScript?: boolean;
    errorMessage?: string;
    isWarning?: boolean;
}
export interface IValidationCallback extends Function {
    (validationInfo: IValidationInfo): void;
}
export interface IValidityStateListener extends Function {
    (validityStates: ValidityStates, fromServer: boolean, formInput: FormInput): void;
}
export declare var fieldsNameData: IMap<IFieldNames>;
export interface ISchemaFieldBase {
    fieldNamespace: SchemaName;
    fieldBaseName: string;
}
export interface IFormInput extends ISchemaFieldBase {
    isCaptcha: boolean;
    getValue(el?: HTMLElement, currentValue?: any): InputValueType;
    getName(isNormalized: boolean, flatten?: boolean): string;
    arrayKeyField: string;
    arrayKeyValue: string;
    getArrayRoot(flatten?: boolean): string;
    fieldName: string;
    normalizedFieldName: string;
    displayName: string;
    isInHiddenContainer(): boolean;
    isHidden(): boolean;
    required(): boolean;
    disabled(): boolean;
    allowEmpty(): boolean;
    instanceElement: HTMLElement;
    validate(callback: IValidationCallback, formData?: any): void;
    validateAsync(formData?: any): Promise<IValidationInfo>;
    addEventListener(eventName: string, handler: Function): any;
    removeEventListener(eventName: string, handler: Function): any;
    getValidityState(): ValidityStates;
    setValidityState(validityState: ValidityStates): any;
    addValidityStateListener(listener: IValidityStateListener): any;
    removeValidityStateListener(listener: IValidityStateListener): any;
    update(element?: HTMLElement, fieldName?: string, isDataField?: boolean): void;
    evaluateConditionalAttributes(): void;
    getMetadata(): {};
    setValue(dataValue: string | boolean, setByScript: boolean): void;
    runOnServerDone(callback: ServerDoneFieldCallback): void;
}
export declare enum WriteAccessModes {
    clientModify = 0,
    clientCreate = 1
}
export declare var FormInput_CONSTS: {
    fieldName: string;
    displayName: string;
    captcha: string;
    allowEmpty: string;
    required: string;
    originalValue: string;
    serverValidation: string;
    showValidCheckmark: string;
    showCheckmarkClass: string;
    errorClass: string;
    warnClass: string;
    validClass: string;
    pendingClass: string;
    emptyClass: string;
    placeholderAttribute: string;
    arrayRootAttribute: string;
    arrayKeyFieldAttribute: string;
    arrayKeyValueAttribute: string;
    identifierType: string;
};
export interface IFormInputContext {
    form: BaseForm;
    fieldName: string;
    type: string;
    element: HTMLElement;
    params: IScreenSetParams;
}
export interface IFormInputType {
    new (context: IFormInputContext): FormInput;
    FORM_TYPE_CRITERIA: (context: IFormInputContext) => boolean;
}
export declare enum FormInputPriorities {
    _start = 0,
    Important = 1,
    Normal = 2,
    Fallback = 3,
    _end = 4
}
export interface ISchemaFields<T extends IFieldSchema> {
    [fieldName: string]: T;
}
export interface IFieldSchema {
    writeAccess?: string;
    type?: SchemaType;
    subType?: SchemaSubType;
    required?: boolean;
    format?: string;
    encryptedNonSearchable?: boolean;
}
export interface IConsentFieldScheam extends IFieldSchema {
    currentDocVersion?: number;
    currentDocDate?: string;
}
export declare class FormInput extends TemplateElement<HTMLElement> implements IFormInput {
    isDataField: boolean;
    _form: BaseForm;
    fieldName: string;
    dynamicField: boolean;
    normalizedFieldName: string;
    fieldBaseName: string;
    fieldNamespace: SchemaName;
    paramName: string;
    displayName: string;
    type: string;
    isCaptcha: boolean;
    private onFieldChangeDebounced;
    private keyUpHandler;
    private changeHandler;
    _schema: IFieldSchema;
    private schemaChecks;
    private _schemaRequired;
    private _schemaWriteAccessMode;
    _screen: Screen;
    _validityState: ValidityStates;
    placeHolderElement: HTMLInputElement;
    private _showValidityMarker;
    private isCurrnetValuePlaceholderText;
    private isCtrlKeyUp;
    private isTextSelected;
    private KEY_CODE_DELETE;
    private KEY_CODE_BACKSPACE;
    protected KEYCODE_LETTER_X: number;
    protected previousValue: InputValueType;
    private intervalID;
    private valueConverter;
    hasPreviousValue(): boolean;
    setValidityMarker(key: ValidityStates, val: boolean): void;
    get arrayKeyField(): string;
    get arrayKeyValue(): string;
    protected get schemaFormat(): string;
    get autocomplete(): string;
    get isSchemaValid(): boolean;
    static addInputToLibrary(type: IFormInputType, priority?: FormInputPriorities): void;
    static inputLibraryByPriority(): IFormInputType[];
    static registerFormInputs(elements: IEnumerable<Element>, parent: BaseForm): FormInput[];
    static FORM_TYPE_CRITERIA(context: IFormInputContext): boolean;
    constructor(context: IFormInputContext, isDataField?: boolean, keypressValidationDelay?: number);
    protected onKeyUp(e: KeyboardEvent): void;
    /**
     * Called when an element's value MAY have changed.
     */
    onFieldChange(setByScript?: boolean): void;
    updateCssClasses(): void;
    update(element?: HTMLElement, fieldName?: string, isDataField?: boolean): void;
    protected updateDisplayName(element?: HTMLElement): void;
    getArrayRoot(flatten?: boolean): string;
    getName(isNormalized: boolean, flatten?: boolean): string;
    isEmpty(value?: InputValueType): boolean;
    protected _isValueEmpty(value: any): boolean;
    allowEmpty(): boolean;
    protected getTruncatedValue(val: any): string;
    validate(callback: IValidationCallback, formData?: {
        [key: string]: string;
    }): void;
    validateAsync(formData?: {
        [key: string]: string;
    }): Promise<IValidationInfo>;
    getValidateValue(formData: any): InputValueType;
    clearServerError(): void;
    getServerError(): GSErrors;
    setServerError(errorCode: GSErrors): void;
    validateValue(formData: any, fieldValue: any, callback: IValidationCallback): void;
    serverValidated(): boolean;
    startServerValidation(fieldValue: any, callback: IValidationCallback): void;
    required(): boolean;
    showValidCheckmark(element?: HTMLElement): boolean;
    private validityStateListeners;
    addValidityStateListener(listener: IValidityStateListener): void;
    removeValidityStateListener(listener: IValidityStateListener): void;
    private triggerValidityStateChange;
    getValidityState(): ValidityStates;
    setValidityState(validityState: ValidityStates, fromServer?: boolean): void;
    _showValidityOnInput(element?: HTMLElement, validityState?: ValidityStates, allowValidityMarker?: boolean): void;
    setValitidyClass(element: HTMLElement, validityState: ValidityStates, validClass?: string, errorClass?: string, pendingClass?: string): void;
    private setElementValidationClass;
    unlinkTemplate(): void;
    linkInstanceElement(parent: HTMLFormElement): void;
    private initPasskeyAutoComplete;
    wcagEvaluation(): void;
    fixLabel(): void;
    /**
     * Used for browsers that do not support native placeholders.
     */
    private createPlaceholderElement;
    unlinkInstanceElement(): void;
    getValue(el?: HTMLInputElement, currentValue?: any): InputValueType;
    prePopulate(value: string | boolean): void;
    disabled(): boolean;
    setValue(dataValue: string | boolean, setByScript?: boolean): void;
    get placeholderAttributeValue(): string;
    isHidden(): boolean;
    isInHiddenContainer(): boolean;
    evaluateConditionalAttributes(): void;
    executeConditionalResult(evaluationResult: string, conditionalAtt: IConditionalAttribute, element: HTMLElement): string;
    setAriaRequired(): void;
    setPlaceholderValue(): void;
    onKeyUpForPlaceholder(e: KeyboardEvent): void;
    onBlurForPlaceholder(event: KeyboardEvent): void;
    onContextMenuOpened(e: KeyboardEvent): void;
    onPlaceholderFocused(e: KeyboardEvent): void;
    onPlaceholderKeyDown(e: KeyboardEvent): void;
    onKeyDownForPlaceholder(e: KeyboardEvent): void;
    private togglePlaceholderStateView;
    protected getLoggerName(): string;
    protected getArrayKeyField(): string;
    protected getArrayKeyValue(): string;
    protected getStoredInArrayValue(): any;
    protected getStoredInArrayFieldName(): string;
    protected getStoredInArrayItem(): unknown;
    protected getParentArray(): any;
    runOnServerDone(callback: ServerDoneFieldCallback): void;
}
