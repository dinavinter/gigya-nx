import { IForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin';
import { INumericMap } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/utils';
import { GSErrors } from '../../../core/Gigya.Js/app/GSErrors';
import { IFormInput } from "./Inputs/FormInput";
import { IFormWidget } from './BaseFormWidget';
export declare enum ErrorType {
    client = 0,
    custom = 1,
    server = 2
}
export interface IErrorInfo {
    fieldName?: string;
    fieldArrayKeyValue?: string;
    errorCode: GSErrors;
    errorType?: ErrorType;
    errorMessage?: string;
    customMessage?: string;
    errorFlags?: string;
    handled?: boolean;
    field?: IFormInput;
    widget?: IFormWidget;
    isWarn?: boolean;
}
export interface IErrorAttributeInfo {
    name?: string;
    nextScreen?: (form: IForm) => Promise<string> | string;
    requiresFinalize?: boolean;
    resetFinalizeNeededState?: boolean;
}
export declare var PendingErrorAttributes: INumericMap<IErrorAttributeInfo>;
export declare function notImplementerAbstract(): void;
