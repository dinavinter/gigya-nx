import { IMap } from './utils';
import { Screen } from './Screen';
import { TemplateElement } from './TemplateElement';
import { ErrorType, IErrorInfo } from './Errors';
import { FormInput, IFieldSchema, IFormInput, ISchemaFieldBase } from './Inputs/FormInput';
import { IFormWidget } from './BaseFormWidget';
import { RetypePasswordInput } from './Inputs/RetypePasswordInput';
import { RememeberInput } from './Inputs/RememeberInput';
import { SecretQuestionWidget } from './Widgets/SecretQuestionWidget';
import { ContainerWidget } from './Widgets/ContainerWidget';
import { BaseServerWidget } from './BaseServerWidget';
import { IFormResponse, IScreenSetParams } from './ScreenSetPlugin';
import { IFormContext } from './IFormContext';
import { ButtonInput } from './Inputs/ButtonInput';
import { BehaviorTrackingContext } from './BehaviorTracking';
import { IFormDataProvider } from './DataProviders/IFormDataProvider';
export interface IParametersData {
    finalizeRegistration?: boolean;
}
export interface IFormData extends IMap<any> {
    rememberMe?: boolean;
}
export interface IFormDataFilter {
    filterOutWidgetsToSend: (IFormData: any) => IFormData;
}
export interface IFormType {
    new (screen: Screen, el: HTMLFormElement, gigyaClass: string): BaseForm;
    CONSTS: {
        gigyaClass: string;
    };
}
export declare const Form_CONSTS: {
    originalSuccessScreen: string;
    successScreen: string;
    autoSkipScreen: string;
    autoSkipFlag: string;
    screenSetSkippedScreen: string;
    formErrorClass: string;
    defaultCheckedAttribute: string;
};
export interface INeededDataMethodConfig {
    params: Record<string, string> | {};
    cache?: boolean;
    responseHandler?: <TResponse = any>(res: TResponse) => TResponse | unknown;
    shouldExecute?: () => Promise<boolean>;
}
export interface INeededData {
    [methodName: string]: INeededDataMethodConfig;
}
export declare const CUSTOM_VALIDATION_TIMEOUT_WARNING = 10000;
export declare type SchemaName = 'data' | 'profile' | 'subscriptions' | 'preferences' | 'organization' | 'requester';
export declare class BaseForm extends TemplateElement<HTMLFormElement> {
    _screen: Screen;
    private gigyaClass;
    get dataProvider(): IFormDataProvider;
    private static FormsLibrary;
    protected settings: {
        supportConsentData: boolean;
    };
    private _submitButtonClicked;
    get submitButtonClicked(): boolean;
    static addFormToLibrary(form: IFormType): void;
    static registerForms(parent: Screen): BaseForm[];
    private autoSkip;
    originalSuccessScreen: string;
    successScreen: string;
    autoSkipScreen: string;
    screenSetSkippedScreen: string;
    private submitHandler;
    private fieldChangedHandler;
    private isWaitingForServerResponse;
    dataToServer: IFormInput[];
    private _dynamicInputs;
    private _inputs;
    private _errorDisplayElements;
    private _widgets;
    private beforeLoadData;
    _submitButtons: ButtonInput[];
    _validatedPassword: FormInput;
    _passwordInputs: FormInput[];
    _passwordRetypes: RetypePasswordInput[];
    _rememberMe: RememeberInput;
    _secretQuestions: SecretQuestionWidget[];
    _autoSkipContainers: ContainerWidget[];
    _serverWidgets: BaseServerWidget<any>[];
    bindID: string;
    filters: IFormDataFilter[];
    isPopulated: boolean;
    protected dataStore: import("./ScreenSetData").ScreenSetData;
    protected behaviorContext: BehaviorTrackingContext | null;
    constructor(_screen: Screen, elForm: HTMLFormElement, gigyaClass: string);
    private registerFormInputs;
    addDataField(field: IFormInput): void;
    addDynamicWidgets(rootEl: HTMLElement): Array<IFormWidget>;
    removeDynamicWidgets(widgetsToRemove: Array<IFormWidget>): void;
    private isFormBoundedElement;
    private linkAndPopulateInputElements;
    private linkAndPopulateWidgetElements;
    private linkAndPopulateElements;
    ignoredFields(): IMap<boolean>;
    registerBoundedErrorElements(): void;
    unlinkTemplate(): void;
    linkInstanceElement(parent: HTMLDivElement): Promise<void>;
    newLinkInstanceElement(parent: HTMLDivElement): Promise<void>;
    legacyLinkInstanceElement(parent: HTMLDivElement): void;
    getLoginProviders(): string;
    unlinkInstanceElement(): void;
    prePopulateDataFrom(): string[];
    prePopulateData(): any;
    getErrorKey(response: IFormResponse): string;
    prePopulate(): void;
    getExtraProfileFields(missingOnly: boolean): any[];
    getNeededData(formContext?: IFormContext): INeededData;
    setBeforeLoadData(eventData: any): void;
    protected isPasswordPolicyNeededForField(field: IFormInput): boolean;
    addDynamicInputs(rootEl: Element): FormInput[];
    removeDynamicInputs(inputsToRemove: Array<FormInput>): void;
    private clearDynamicFields;
    private isDynamicFieldObsolete;
    private isDynamicFieldToAdd;
    updateDynamicFields(): void;
    requiredFields(): IMap<boolean>;
    onInputChange(input: IFormInput, setByScript: boolean): void;
    private afterInputChange;
    isPasswordSchemaValidated(): boolean;
    schemaValidated(): boolean;
    getFieldSchema(field: ISchemaFieldBase): IFieldSchema;
    private getSchemaOf;
    private getSchemaRoot;
    renderFieldError(errorInfo: IErrorInfo, isBoundToField: boolean, customErrMsg?: string, errorTypeToRender?: ErrorType): boolean;
    private setFieldValidity;
    private showCustomFormError;
    private createFormEvent;
    private onAfterValidation;
    private displayErrors;
    private getValidationErrors;
    protected getCustomValidationErrors(): Promise<IErrorInfo[]>;
    private isValidCustomErrorFieldName;
    private getStandardValidationErrors;
    private getErrorInfo;
    private getBeforeValidationEventResult;
    private normalizeArrayFieldNames;
    showErrors(arErrors: IErrorInfo[], isServerError: boolean): void;
    isRequiredField(fieldName: string): boolean;
    canAutoSkip(formContext: IFormContext): Promise<boolean>;
    getNormalizedFieldName(fieldName: string): string;
    getField(fieldName: string, arrayKeyValue?: string, visibleOnly?: boolean): IFormInput;
    private isSpecialField;
    getFormData(ignoreHiddenContainers: boolean, normalizeFields: boolean, replaceEmptyStringWithNull?: boolean): IMap<any>;
    private postProcessFormData;
    getFlatFormData(ignoreHiddenContainers: boolean, normalizeFields: boolean, replaceEmptyStringWithNull?: boolean): {
        [key: string]: string;
    };
    specialFields(): {};
    subscriptionObjectName(): string;
    communicationsObjectName(): string;
    dataObjectName(): string;
    profileObjectName(): string;
    preferencesObjectName(): string;
    organizationObjectName(): string;
    requesterObjectName(): string;
    protected queryStringToSubmitParamMap(): {};
    defaultSubmitParams(): {};
    submitApi(): (params: IScreenSetParams, data: any, options: any, defaultParams: any) => void;
    _getSubmitApiParams(params: IScreenSetParams): IScreenSetParams;
    performSubmit(formData: any, { customSubmitApi, onAfterSubmitCallback, submitApiParams }?: {
        customSubmitApi?: any;
        onAfterSubmitCallback?: any;
        submitApiParams?: any;
    }): void;
    onBeforeSubmit(formData: any): void;
    runFormValidation(): Promise<boolean>;
    submit(params?: {
        customSubmitApi?: any;
        onAfterSubmitCallback?: any;
        submitApiParams: any;
    }): Promise<void>;
    private createAToken;
    private shouldWaitForServerResponse;
    private isWaitingForServerWidget;
    private isWaitingForServerField;
    private submitAfterServerResponse;
    private isPending;
    onAfterSubmit(response: any): void;
    evaluateConditionalAttributes(): void;
    hasConditionalAttributes(): boolean;
    resetLastConditionalValues(): void;
    private get supportConsentData();
    private setConsentData;
}
