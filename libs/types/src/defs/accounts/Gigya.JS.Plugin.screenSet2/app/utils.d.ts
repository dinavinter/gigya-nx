import { IConditionalAttribute } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/TemplateElement';
export declare function isHidden(el: HTMLElement): boolean;
export declare function inIFrame(): boolean;
export declare function isFieldInHiddenContainer(el: HTMLElement): boolean;
export declare function hasParentAttribute(el: HTMLElement, attrName: string, attrValue: string): boolean;
export declare function firstPart(str: string, seperator: string): string;
export interface INumericMap<T> {
    [key: number]: T;
}
export interface IMap<T> {
    [key: string]: T;
}
export interface IEnumerable<T> {
    length: number;
    [i: number]: T;
}
export declare function LastIndexOf<T>(arr: IEnumerable<T>, val: T, fromIndex?: number): number;
export declare function ForEach<T>(arr: IEnumerable<T>, action: (element: T, index?: number, arr?: IEnumerable<T>) => void): void;
export declare function ForEachProp<T>(obj: IMap<T>, action: (prop: T, name: string, obj: IMap<T>) => void): any;
export declare function ForEachProp<T extends Object>(obj: T, action: (prop: any, name: string, obj: T) => void): any;
export declare function Some<T>(arr: IEnumerable<T>, condition: (element: T, index?: number, arr?: IEnumerable<T>) => boolean): boolean;
export declare function Every<T>(arr: IEnumerable<T>, condition: (element: T, index?: number, arr?: IEnumerable<T>) => boolean): boolean;
export declare function EveryProp<T>(obj: IMap<T>, condition: (prop: T, name: string, obj: IMap<T>) => boolean): any;
export declare function EveryProp<T>(obj: T, condition: (prop: any, name: string, obj: T) => boolean): any;
export declare function Map<S, T>(arr: IEnumerable<S>, action: (element: S, index?: number, arr?: IEnumerable<S>) => T): T[];
export declare function DeepFreeze(obj: Object): void;
export declare function getElementsByHavingAttribute(parentElement: HTMLElement, tagName: string, attributeName: string): HTMLElement[];
export declare function getElementsByHavingAttributePrefix(parentElement: HTMLElement, attributePrefixes: string | Array<string>, tagNamesExceptions?: Array<string>): Array<HTMLElement>;
export declare function isElementContainAttributePrefix(el: HTMLElement, subString: string): boolean;
export declare function getConditionalAttributeExpressions(element: HTMLElement, isWidgetContext?: boolean): Array<IConditionalAttribute>;
export declare function setupConditionalExpressionValue(conditionalValue: string, defaultValue: string): string;
export declare function isKeyCodeDisplayable(keycode: number): boolean;
export declare var UnitMeasurementType: {
    pixel: string;
    percentage: string;
    auto: string;
};
export declare function getUnitMeasurementType(value?: string): string;
export declare function getAttributesAsArray(el: HTMLElement): Array<Attr>;
export declare function endsWith(s: string, suffix: string): boolean;
export declare function hasIndex(key: string): boolean;
export declare function removeSerializedKeyLastEnumerator(key: string): string;
export declare function removeSerializedKeyEdgeProperty(key: string): string;
export declare function IETemplateElementPolyfill(doc?: Document): void;
export declare function replaceAttribute(htmlElement: HTMLElement, fromAttribute: string, toAttribute: string): void;
export declare function isDOMXSS(text: string): boolean;
