export interface ICookieOptions {
    path?: string;
    domain?: string;
    expires?: Date;
    sameSite?: 'None' | 'Strict' | 'Lax';
    secure?: boolean;
}
export declare class CookieStore {
    private _win;
    constructor(_win?: Window);
    setCookie(name: string, value: string, options: ICookieOptions): void;
    getCookie(name: string): string;
}
