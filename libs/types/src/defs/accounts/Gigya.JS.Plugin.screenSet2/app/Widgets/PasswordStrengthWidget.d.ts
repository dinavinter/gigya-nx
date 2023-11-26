import { IScreenSetTemplates } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin';
import { IMap } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/utils';
import { BaseFormWidget } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseFormWidget';
import { IFormInput } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Inputs/FormInput';
import { BaseForm } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/BaseForm';
export interface IDisplayMode {
    hasMinimumRequirements: boolean;
    hasStrengthMeter: boolean;
    getTemplate: (templates: IScreenSetTemplates) => string;
}
export declare var DisplayModes: IMap<IDisplayMode>;
export declare enum BubbleOrientations {
    right = 0,
    left = 1,
    up = 2,
    down = 3,
    none = 4
}
export declare var PasswordStrengthWidget_CONSTS: {
    selector: string;
    bubbleClass: string;
    mobileClass: string;
    desktopClass: string;
    displayMode: string;
    bubble: string;
    bubbleOrientation: string;
};
export declare class PasswordStrengthWidget extends BaseFormWidget<HTMLDivElement> {
    _passwordField: IFormInput;
    private readonly originalDisplay;
    private readonly fnKeyUp;
    private readonly getText;
    private readonly onBlur;
    private readonly onFocus;
    private readonly onScroll;
    private displayMode;
    private readonly template;
    private readonly isBubble;
    private readonly bubbleID;
    private bubbleOrientation;
    private originalClass;
    private originalStyle;
    private isBubbleVisible;
    private bubbleLastTop;
    static CONSTS: {
        selector: string;
        bubbleClass: string;
        mobileClass: string;
        desktopClass: string;
        displayMode: string;
        bubble: string;
        bubbleOrientation: string;
    };
    constructor(form: BaseForm, el: HTMLDivElement);
    private isPasswordInputEmpty;
    unlinkTemplate(): void;
    private showBubble;
    private getBubbleOrientations;
    private hideBubble;
    private getPasswordBubbleContent;
    private updateBubbleDisplay;
    private updateBubbleContent;
    evaluateConditionalAttributes(): void;
    refreshBubble(): void;
}
export interface IPasswordStrength {
    lower: number;
    upper: number;
    digits: number;
    specialChars: number;
    length: number;
    charGroups: number;
}
export declare function getPasswordStrengthData(pass: string): IPasswordStrength;
export interface IPasswordStrengthPolicy {
    regExp: string;
    minLowercase: number;
    minUppercase: number;
    minDigit: number;
    minSpecialChars: number;
    minCharGroups: number;
    minLength: number;
}
export declare function isPasswordStrengthValid(pass: string, oPassStrength: IPasswordStrength, oComplexityPolicy: IPasswordStrengthPolicy): boolean;
