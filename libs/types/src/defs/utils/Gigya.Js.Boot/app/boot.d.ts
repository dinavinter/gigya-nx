export declare var debug: boolean;
export declare function getGigyaScriptElement(fileNames: string[]): HTMLScriptElement;
export declare function ensureJsSdkLoaded(apiKey: string, done: () => void, async?: boolean, useExistingGigyaDomain?: boolean, useXMLHTTPRequest?: boolean, useRelativePath?: boolean): void;
export declare function ensureBasePluginLoaded(apiKey: string, done: () => void, async?: boolean, useXMLHTTPRequest?: boolean): void;
