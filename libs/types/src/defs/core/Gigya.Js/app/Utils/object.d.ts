export declare function removeUndefined(o: Object): Object;
export declare function expressionHelper(context: any): {
    getField: (path: any) => any;
};
export declare function getPropertyBySerializedName(o: Object, name: string, createMissingObjects: boolean): any;
export declare function setPropertyBySerializedName(o: Object, name: string, value: any): void;
export declare function add(oTarget: Object, o: Object, dontOverride?: boolean): void;
export declare function getHash(o: any): string;
export declare function getMurmurHash(key: string, seed?: number): number;
export declare function clone(obj: any, deepCopy?: boolean, ignoreFunctions?: boolean, maxLevel?: number, level?: number, ignoreContext?: boolean): any;
export declare function merge(args: Object[], isDeepMerge?: boolean): Object;
export declare function unflatten(data: {
    [key: string]: string | boolean;
}): Object;
export declare function flatten(data: any, withBracket?: boolean): {
    [key: string]: string | boolean;
};
export declare function extractProperties(src: any, dest?: any, schema?: String): Object;
export declare function extractProperty(src: any, paramName: string): any;
export declare function parseToObject(str: string): any;
export declare function removePropertiesPrefix(obj?: Object, prefix?: string | RegExp): {};
export declare function addPrefixToProperties(obj?: Object, prefix?: string): {};
export declare function normalizeObjectKeysToLowerCase(object: Object): Object;
export declare function decodeObjectKeys(obj: Object): Object;
