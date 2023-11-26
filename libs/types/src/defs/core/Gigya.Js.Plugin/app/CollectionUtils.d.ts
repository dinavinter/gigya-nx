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
export declare function FirstIndex<T>(arr: IEnumerable<T>, condition: (element: T, index?: number, arr?: IEnumerable<T>) => boolean): number;
export declare function First<T>(arr: IEnumerable<T>, condition: (element: T, index?: number, arr?: IEnumerable<T>) => boolean): T;
