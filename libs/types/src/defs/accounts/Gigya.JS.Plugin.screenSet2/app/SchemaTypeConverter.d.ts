export declare type InputValueType = string | string[] | boolean | number | null | object;
export declare type SchemaType = 'string' | 'basic-string' | 'encrypted-string' | 'text' | 'date' | 'integer' | 'long' | 'float' | 'boolean';
export declare type SchemaSubType = 'none' | 'phone' | 'address';
export declare const schemaTypeToConverter: (schemaType: SchemaType) => ((value: any) => string) | ((value: any) => number) | ((value: any) => boolean);
