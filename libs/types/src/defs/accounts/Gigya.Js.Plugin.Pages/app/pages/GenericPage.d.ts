import { BasePage } from './BasePage';
import { IPagesParams } from '../PagesPlugin';
export declare class GenericPage extends BasePage {
    constructor(params: IPagesParams);
    start(callback: (isSuccess: boolean) => void): void;
    protected redirectToLoginPage(withReturnUrl?: boolean): void;
    get currentLocation(): string;
    protected onSuccess(event: any): void;
}
