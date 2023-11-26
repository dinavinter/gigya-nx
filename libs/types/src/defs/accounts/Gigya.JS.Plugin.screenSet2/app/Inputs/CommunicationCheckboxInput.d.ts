import { IFormInputContext } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput';
import { CheckboxInput } from "./CheckboxInput";
import { CommunicationStatus } from "../Widgets/CommunicationWidget";
export declare class CommunicationCheckboxInput extends CheckboxInput {
    static FORM_TYPE_CRITERIA(context: IFormInputContext): boolean;
    setValue(dataValue: any, setByScript?: boolean): void;
    getValue(el?: HTMLInputElement, currentValue?: any): {
        channel: string;
        status: CommunicationStatus;
        topic: string;
    };
    private evaluateStatus;
    private sendLoggerReport;
    private isChannelStatusOptIn;
    private isChecked;
    getCommunicationWidgetAttribute(obj: any, key: any): any;
    capitalize(str: string): string;
}
