import { IWarnable } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/Debug';
import { ScreenSetPlugin } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin';
import { IElementActualSize, IViewportSize } from 'src/core/Gigya.Js/app/Interfaces';
export declare enum ElementRoles {
    _undefined = 0,
    template = 1,
    instance = 2
}
export declare var TemplateElement_CONSTS: {
    elementId: string;
    elementFor: string;
    publishElementId: string;
    templateForArray: string;
    instanceOfArray: string;
    screenSetRoles: string;
};
export interface ITemplateElementParent extends IWarnable {
    _screenSet: ScreenSetPlugin;
}
export interface IScreenSetSize {
    width: number;
    height: number;
}
export interface ITemplateElement extends ITemplateElementParent {
    linkInstanceElement(parent: HTMLElement): any;
    unlinkInstanceElement(): any;
    _parent: ITemplateElementParent;
    unlinkTemplate(): any;
    evaluateExpression(conditionalExpression: IConditionalExpression): any;
    evaluateConditionalAttributes(): any;
    resetLastConditionalValues(): any;
}
export interface IConditionalExpression {
    condition: string;
    defaultValue?: any;
    ignoreError?: boolean;
}
export interface IConditionalAttribute extends IConditionalExpression {
    attributeName: string;
    lastAttributeValue: string;
    isWidgetParamTag: boolean;
}
export interface ConditionalScreenSet extends IElementActualSize {
    translations: {
        [key: string]: string;
    };
    lang: string;
}
export declare class TemplateElement<T extends HTMLElement> implements ITemplateElement {
    templateElement: T;
    _parent: ITemplateElementParent;
    private eventHandlers;
    ID: string;
    publishID: boolean;
    instanceElement: T;
    conditionalExpressions: IConditionalAttribute[];
    cssClass: string;
    _screenSet: ScreenSetPlugin;
    constructor(templateElement: T, _parent: ITemplateElementParent);
    unlinkTemplate(): void;
    protected getConditionalExpression(el: HTMLElement): any[];
    private static getRoles;
    private static setRoles;
    warn(msg: string, id?: string): void;
    linkInstanceElement(parent: HTMLElement): void;
    unlinkInstanceElement(): void;
    static isTemplateInstance(el: HTMLElement): string;
    static prepareTemplateInstanceElement(element: HTMLElement, removeTemplateRole: boolean): void;
    static prepareTemplateInstances(templateRoot: HTMLElement): void;
    addEventListener(eventName: string, handler: Function): void;
    removeEventListener(eventName: string, handler: Function): void;
    protected getLoggerName(): string;
    evaluateConditionalAttributes(): void;
    protected initFromInstanceElement(): void;
    hasConditionalAttributes(): boolean;
    evaluateExpression(conditionalExpression: IConditionalExpression): any;
    protected getExpressionData(): {
        formData: {};
        profile: {};
        data: {};
        preferences: {};
        subscriptions: {};
        communications: {};
        authMethods: any;
        schema: any;
        accountInfo: any;
        tfaProviders: {};
        conflictingAccount: any;
        consentStatements: import("./ScreenSetData").IConsentStatements;
        identifier: import("./ScreenSetData").IAuthMethodIdentifierData;
        passkeys: import("./ScreenSetData").IPasskey[];
        screenset: ConditionalScreenSet;
        viewport: IViewportSize;
    };
    protected executeConditionalResult(evaluationResult: string, conditionalAtt: IConditionalAttribute, element: HTMLElement): string;
    resetLastConditionalValues(): void;
    getMetadata(): {};
    getProviders(): {};
}
