import { IScreenSetParams } from '../ScreenSetPlugin';
import { LoginForm } from './LoginForm';
export declare var PasswordAuthMethodForm_CONSTS: {
    gigyaClass: string;
    authMethod: string;
};
export declare class PasswordAuthMethodForm extends LoginForm {
    static CONSTS: {
        gigyaClass: string;
        authMethod: string;
    };
    linkInstanceElement(parent: HTMLDivElement): Promise<void>;
    submitApi(): (params: IScreenSetParams, formData: any, options: any, defaultParams: any) => void;
}
