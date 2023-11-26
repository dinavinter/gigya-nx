import { GSErrors } from 'src/core/Gigya.Js/app/GSErrors';
import { Screen } from '../Screen';
export interface IResponseInfo {
    errorCode: GSErrors;
    [key: string]: any;
}
export declare function dispatchErrorEvent(screen: Screen, formId: string, { response, context }: {
    response?: IResponseInfo;
    context?: any;
}): void;
