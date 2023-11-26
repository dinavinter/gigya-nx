import { BaseAuthMethodWidget } from './BaseAuthMethodWidget';
import { InputValueType } from './SchemaTypeConverter';
import { ApiLinkHelper } from './ApiLinkHelper';
import { GigyaResponse } from 'gigya';
export declare const CONSTS: {
    inputSelector: string;
    resendButtonSelector: string;
    fieldNameAttr: string;
};
export declare abstract class BaseOtpAuthMethodWidget extends BaseAuthMethodWidget {
    protected vToken: string;
    protected initApiLink: ApiLinkHelper;
    protected abstract get initApiParams(): any;
    linkInstanceElement(parent: any): void;
    unlinkInstanceElement(): void;
    protected get submitApi(): Function;
    protected get initApi(): Function;
    protected onClick(): Promise<void>;
    protected callInitApi(): Promise<GigyaResponse>;
    protected handleInitApiResponse(response: any): void;
    protected get submitApiParams(): Object;
    protected get codeFieldElement(): Element;
    protected get codeFieldName(): string;
    protected get code(): InputValueType;
    protected get resendCodeElement(): HTMLElement;
}
