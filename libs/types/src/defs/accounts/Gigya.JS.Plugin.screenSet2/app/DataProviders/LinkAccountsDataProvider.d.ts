import { FormDataProvider } from './FormDataProvider';
import { ILoginDataProvider } from './ILoginDataProvider';
export declare class LinkAccountsDataProvider extends FormDataProvider implements ILoginDataProvider {
    get loginID(): string;
    get phone(): {
        lookup: string;
        obfuscated: string;
    };
    getPasswordLoginParams(password?: string): object;
    private get conflictingAccount();
}
