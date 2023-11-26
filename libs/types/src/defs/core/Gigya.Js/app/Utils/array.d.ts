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
export declare function indexOf(ar: any[], o: any): number;
export declare function clone(ar: any[]): any[];
export declare function removeByValue(ar: any[], value: Object): void;
export declare function removeByProperty(ar: any[], property: string, value: string): void;
export declare function getArrayFromString(str: string, delimiter: string, lowerCase?: boolean): string[];
export declare function intersect(array: any[], ...args: any[]): any[];
export declare function lastIndexOf<T>(arr: IEnumerable<T>, val: T, fromIndex?: number): number;
export declare function forEach<T>(arr: IEnumerable<T>, action: (element: T, index?: number, arr?: IEnumerable<T>) => void): void;
export declare function forEachProp<T>(obj: IMap<T>, action: (prop: T, name: string, obj: IMap<T>) => void): any;
export declare function forEachProp<T extends Object>(obj: T, action: (prop: any, name: string, obj: T) => void): any;
export declare function some<T>(arr: IEnumerable<T>, condition: (element: T, index?: number, arr?: IEnumerable<T>) => boolean): boolean;
export declare function every<T>(arr: IEnumerable<T>, condition: (element: T, index?: number, arr?: IEnumerable<T>) => boolean): boolean;
export declare function everyProp<T>(obj: IMap<T>, condition: (prop: T, name: string, obj: IMap<T>) => boolean): any;
export declare function everyProp<T>(obj: T, condition: (prop: any, name: string, obj: T) => boolean): any;
export declare function map<S, T>(arr: IEnumerable<S>, action: (element: S, index?: number, arr?: IEnumerable<S>) => T): T[];
export declare function firstIndex<T>(arr: IEnumerable<T>, condition: (element: T, index?: number, arr?: IEnumerable<T>) => boolean): number;
export declare function first<T>(arr: IEnumerable<T>, condition: (element: T, index?: number, arr?: IEnumerable<T>) => boolean): T;
export declare function getAllEnumValues<T>(enumType: any): T[];
export declare function getUniqueValues<T>(arr: T[]): T[];
export declare function includes<T>(arr: T[], item: T): boolean;
export declare function containsOnly(arr1?: any[], arr2?: any[]): boolean;
