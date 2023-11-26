import { IFormDataProvider } from './IFormDataProvider';
export interface ILoginDataProvider extends IFormDataProvider {
    loginID: string;
    phone: {
        lookup: string;
        obfuscated: string;
    };
    getPasswordLoginParams(password?: string): object;
}
