import { BaseFormWidget } from './BaseFormWidget';
import { IFormResponse } from './ScreenSetPlugin';
import { TranslatedWidget } from './Widgets/TranslatedWidget';
import { BindingWidget } from './Widgets/BindingWidget';
import { IFormInput } from './Inputs/FormInput';
import { ErrorDisplayElement } from './ErrorDisplayElement';
import { ILoginDataProvider } from './DataProviders/ILoginDataProvider';
import { IExpandableWidget } from './utils/expandableWidget';
export declare var AuthMethod_CONSTS: {
    authMethod: string;
    isExpandedAttr: string;
    containerClass: string;
    containerEnabledClass: string;
    deps: (typeof BindingWidget | typeof TranslatedWidget | typeof ErrorDisplayElement)[];
};
export declare abstract class BaseAuthMethodWidget extends BaseFormWidget<HTMLDivElement> implements IExpandableWidget {
    _form: any;
    protected isInitialized: boolean;
    protected abstract fieldName: any;
    protected abstract get submitApi(): any;
    protected abstract get submitApiParams(): any;
    protected originalTabIndex: any;
    constructor(_form: any, el: HTMLDivElement, resetCSS?: boolean);
    addWidgetToForm(): void;
    linkInstanceElement(parent: any): void;
    expand(): void;
    collapse(): void;
    protected onClick(): void;
    protected submit(): Promise<void>;
    protected displayErrorMessage(response: any): void;
    protected renderWidgetError(errorCode: number, errorMessage: string): void;
    protected hideWidgetErrors(): void;
    protected getErrorKeyFromResponse(response: IFormResponse): string;
    protected addToTabOrder(): void;
    protected removeFromTabOrder(): void;
    protected focusInput(): void;
    protected collapseOtherAuthMethodWidgets(): void;
    protected set isExpanded(expanded: boolean);
    protected get submitButton(): HTMLElement;
    protected get toggleElement(): HTMLElement;
    protected getField(fieldName: any): IFormInput;
    protected get formField(): IFormInput;
    protected get dataProvider(): ILoginDataProvider;
}