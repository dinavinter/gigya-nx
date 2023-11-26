import { BaseFormWidget } from '../../BaseFormWidget';
import { TfaProvider } from 'src/core/Gigya.Js/app/TFA/types';
import { IFormResponse } from '../../ScreenSetPlugin';
import { IResponseInfo } from '../../utils/errorEventUtil';
export declare abstract class BaseTfaRegistrationWidget extends BaseFormWidget<HTMLDivElement> {
    protected abstract readonly providerName: TfaProvider;
    protected handleError({ response, context, fieldName }: {
        response?: IResponseInfo;
        context?: any;
        fieldName?: string;
    }): void;
    protected getGigyaAssertion(): Promise<string>;
    private get fieldName();
    protected displayErrorMessage(response: any, fieldName?: string): void;
    getErrorKeyFromResponse(response: IFormResponse): string;
    protected renderWidgetError(errorCode: number, errorMessage: string): void;
    protected hideErrorMessage(): void;
}
