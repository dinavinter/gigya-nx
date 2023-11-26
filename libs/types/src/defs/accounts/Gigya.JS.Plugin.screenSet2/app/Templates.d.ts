export declare class TemplatesCache {
    private _map;
    get(key: any): string;
    set(key: string, value: any): void;
}
export declare function createDefaultTemplates(): TemplatesCache;
