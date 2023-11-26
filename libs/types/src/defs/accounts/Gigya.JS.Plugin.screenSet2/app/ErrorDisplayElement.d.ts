import { TemplateElement } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement';
import { BaseForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
import { ErrorType, IErrorInfo } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Errors';
import { Screen } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Screen';
import { GSErrors } from '../../../core/Gigya.Js/app/GSErrors';
export declare enum ErrorScopes {
    boundObjectError = 0,
    firstError = 1,
    anyError = 2,
    allErrors = 3,
    'bound-object-error' = 0,
    'first-error' = 1,
    'any-error' = 2,
    'all-errors' = 3
}
export declare var ErrorDisplayElement_CONSTS: {
    gigyaClasses: string[];
    boundedTo: string;
    errorCodes: string;
    scope: string;
    flags: string;
    errorClassPrefix: string;
    errorType: string;
};
export declare class ErrorDisplayElement extends TemplateElement<HTMLElement> {
    private _screen;
    boundedTo: string;
    scope: ErrorScopes;
    private allowedErrorCodes;
    private allowedFlags;
    private policy;
    _form: BaseForm;
    private lastError;
    constructor(el: HTMLElement, _screen: Screen);
    isErrorCodeAllowed(errorCode: GSErrors, flags?: string): boolean;
    showError(error: IErrorInfo): void;
    hideError(): void;
    private setLastError;
    private removeLastError;
    getErrorType(): ErrorType;
    evaluateConditionalAttributes(): void;
}
