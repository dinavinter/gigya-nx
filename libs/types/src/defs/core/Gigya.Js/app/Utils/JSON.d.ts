export declare function serialize(obj: any, includeFunctions?: boolean, prettyPrint?: boolean, l?: number, maxLevel?: number): string;
export declare function deserialize<T>(json: string, defaultValue?: T, scope?: any): T;
export declare function parse<T>(json: string, defaultValue?: T): T;
