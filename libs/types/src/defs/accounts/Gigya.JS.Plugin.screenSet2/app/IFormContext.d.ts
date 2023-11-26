import { GSErrors } from "../../../core/Gigya.Js/app/GSErrors";
export interface IFormContext {
    errorCode: GSErrors;
    explicitSwitchScreen?: boolean;
    [key: string]: any;
}
