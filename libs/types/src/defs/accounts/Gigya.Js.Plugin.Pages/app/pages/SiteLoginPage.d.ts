import { IPagesParams } from '../PagesPlugin';
import { BasePage } from './BasePage';
export declare class SiteLoginPage extends BasePage {
    constructor(params: IPagesParams);
    start(callback: (isSuccess: boolean) => void): void;
    protected onLogin(event: any): void;
}
