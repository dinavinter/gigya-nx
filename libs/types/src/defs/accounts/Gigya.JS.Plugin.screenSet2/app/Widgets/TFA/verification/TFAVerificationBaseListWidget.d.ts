import { CardListFormWidget } from '../../../CardListFormWidget';
export declare abstract class TFAVerificationBaseListWidget extends CardListFormWidget {
    protected readonly itemId = "id";
    protected abstract readonly providerName: any;
    linkInstanceElement(parent: HTMLElement): Promise<void>;
    protected getGigyaAssertion(): Promise<string>;
    protected isActiveProvider(): boolean;
}
