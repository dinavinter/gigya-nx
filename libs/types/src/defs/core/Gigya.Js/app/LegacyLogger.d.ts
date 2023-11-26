export declare var CONSOLE_LOG_LEVELS: string[];
export declare var selectedConsoleLogLevels: string[];
export declare var _log: any[];
export declare function enable(): void;
export declare function disable(): void;
export declare function _isEnabled(): boolean;
export declare function addLog(title: string, obj: any, writeToConsole?: boolean): void;
export declare function logCall(name: any, params: any, lastSource?: any): void;
export declare function debug(): void;
export declare function showLog(): void;
export declare function show(): void;
export declare function showConfig(): void;