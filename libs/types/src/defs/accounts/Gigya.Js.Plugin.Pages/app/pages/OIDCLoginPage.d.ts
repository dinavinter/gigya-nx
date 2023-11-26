import { BasePage } from './BasePage';
import { IPagesParams } from '../PagesPlugin';
export declare class OIDCLoginPage extends BasePage {
    constructor(params: IPagesParams);
    start(callback: (isSuccess: boolean) => void): Promise<void>;
    protected onLogin(event: any): void;
    private oidcLogin;
    private oidcContinue;
}
