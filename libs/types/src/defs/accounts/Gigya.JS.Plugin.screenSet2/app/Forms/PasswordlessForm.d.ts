import { IFormResponse, IScreenSetParams } from "../ScreenSetPlugin";
import { BaseForm } from "../BaseForm";
export declare class PasswordlessForm extends BaseForm {
    specialFields(): Object;
    submitApi(): (params: IScreenSetParams, formData: any, options: any, defaultParams: any) => void;
    getErrorKey(response: IFormResponse): string;
    onAfterSubmit(response: any): void;
    private saveInApiData;
}
