import { CardListItemWidget } from '../../CardListItemWidget';
import GigyaResponse from "gigya/dist/lib/interfaces/gigya-response";
import { FormInput } from '../../../Inputs/FormInput';
import { IExpandableWidget } from '../../../utils/expandableWidget';
import { IResponseInfo } from '../../../utils/errorEventUtil';
export declare const TFABaseItem_CONSTS: {
    sendButtonSelector: string;
    submitButtonSelector: string;
    resendButtonSelector: string;
    expandedAttribute: string;
    errorMessageSelector: string;
    errorActiveMessageClass: string;
    rememberDeviceSelector: string;
    symbolsPlaceholder: string;
    codeInputSelector: string;
    nameAttr: string;
    boundToAttr: string;
    inputErrorSelector: string;
    ariaLabelAttr: string;
    containerClass: string;
    containerEnabledClass: string;
};
export declare abstract class TFAVerificationBaseItemWidget extends CardListItemWidget implements IExpandableWidget {
    expandedStateAttribute: string;
    bindID: string;
    protected abstract readonly providerName: any;
    protected abstract codeInput: HTMLInputElement;
    protected abstract lastSymbols: string;
    private errorMessageElem;
    linkInstanceElement(parent: HTMLElement): Promise<void>;
    expand(): void;
    collapse(): void;
    unlinkInstanceElement(): void;
    protected abstract addResendButtonHandlers(): void;
    protected abstract startCountDown(): void;
    protected abstract verifyCodeApi(): Promise<GigyaResponse>;
    protected abstract sendCodeApi(params: {
        [key: string]: any;
    }): Promise<GigyaResponse>;
    protected updateFormElementsWithCardIndex(): void;
    protected activateHighRiskDevice(): Promise<void>;
    protected isFirstItem(): boolean;
    protected automaticallyActivateDevice(): Promise<void>;
    protected updateCodeAriaLabel(): void;
    protected get sendButton(): HTMLElement;
    protected get submitButton(): HTMLButtonElement;
    protected activateDevice(): void;
    protected showMessage(message: string): void;
    protected set codeInputAriaLabel(value: string);
    protected get codeInputAriaLabel(): string;
    protected hideMessage(): void;
    protected getErrorKeyFromResponse(response?: object): string;
    protected addEventHandlers(): void;
    protected addActionButtonEventHandlers(): void;
    private onDeviceActivated;
    private initErrorHandling;
    protected sendCode(params?: {
        [key: string]: any;
    }): Promise<void>;
    private verifyCode;
    protected handleError({ response, context }: {
        response?: IResponseInfo;
        context?: any;
    }): void;
    protected displayErrorMessage(response: any): void;
    protected renderError(message: string): void;
    protected getGigyaAssertion(): Promise<string>;
    protected get rememberDevice(): boolean;
    private get rememberDeviceCheckboxEl();
    protected get codeInputEl(): HTMLElement;
    protected abstract get codeFormField(): FormInput;
}
