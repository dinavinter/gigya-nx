import { BasePage } from './BasePage';
import { IPagesParams } from '../PagesPlugin';
export declare class SSOLoginPage extends BasePage {
    constructor(params: IPagesParams);
    start(callback: (isSuccess: boolean) => void): void;
    protected onLogin(event: any): void;
}
