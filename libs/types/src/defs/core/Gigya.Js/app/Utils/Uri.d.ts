export declare class Uri {
    private _anchor;
    constructor(url: string, isAbsolute?: boolean);
    get domain(): string;
    get path(): string;
    get href(): string;
    get search(): string;
    get hash(): string;
    toString(): string;
    addToSearch(params: Object): this;
    fetch<T>(retries?: number): Promise<T>;
    isBaseOf(url: string): boolean;
    isIn(base: string): boolean;
    isIn(base: Uri): boolean;
    isForSubDomains(): boolean;
    isSubDomainOf(base: Uri): boolean;
    static parse(url: string, isAbsolute?: boolean): Uri;
    private browserFetch;
    private xhr;
    private delay;
}
