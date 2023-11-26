import { IWidgetType, IWidget, BaseWidget } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseWidget';
import { BaseForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
import { FormInput, IValidationInfo } from './Inputs/FormInput';
import { IFormDataProvider } from './DataProviders/IFormDataProvider';
export interface IFormWidgetType<T extends HTMLElement> extends IWidgetType<T> {
    new (form: BaseForm, el: HTMLElement): IFormWidget;
}
export interface IFormWidget extends IWidget {
    _form: BaseForm;
    getFieldsNames(): string[];
    update(): void;
    validateAsync(formData: any): Promise<IValidationInfo>;
}
export declare class BaseFormWidget<T extends HTMLElement> extends BaseWidget<T> implements IFormWidget {
    _form: BaseForm;
    constructor(_form: BaseForm, el: T, resetCSS?: boolean);
    private static FormWidgetsLibrary;
    static addWidgetToLibrary(widget: IFormWidgetType<HTMLElement>): void;
    static registerWidgets(parent: BaseForm): IFormWidget[];
    static registerDynamicWidgets(parent: BaseForm, rootEl: HTMLElement): IFormWidget[];
    getFieldsNames(): string[];
    update(): void;
    validateAsync(): Promise<IValidationInfo>;
    protected getErrorText(errorKey: string, fieldName?: string): any;
    protected get displayName(): string;
    protected getErrorTextFromResponse(response: any, fieldName?: string): any;
    protected getErrorKeyFromResponse(response: any): string;
    protected get dataProvider(): IFormDataProvider;
    protected validateChildField(formField: FormInput): Promise<boolean>;
}
