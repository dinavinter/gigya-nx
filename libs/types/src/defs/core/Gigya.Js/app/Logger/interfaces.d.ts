export interface GigGlobal {
    console: Console;
    Proxy?: any;
    addEventListener?: any;
    top?: any;
}
export declare enum LogLevel {
    disabled = 0,
    debug = 1,
    info = 2,
    warn = 3,
    error = 4
}
export declare const enum ClientMuteLevel {
    none = 0,
    normal = 1,
    all = 2
}
export declare const enum LogTheme {
    none = 0,
    dark = 1,
    light = 2
}
export interface ILoggerConfig {
    logLevel: LogLevel;
    clientMuteLevel: ClientMuteLevel;
    logTheme: LogTheme;
}
export interface ILogGroup {
    groupTitle: string;
    color: string;
}
export interface IFormattedLogArgs {
    text: string;
    css: string;
}
export declare const enum GroupBehavior {
    expanded = 0,
    collapsed = 1
}
export interface IGroupCloser {
    end(): void;
    endWhen(doneWhen: Promise<any> | (() => void | Promise<any>)): void;
}
export declare type ILogFunc = (message: string, details?: {
    [key: string]: any;
}) => void;
export interface ILogger {
    disable(): void;
    enable(logLevel?: LogLevel, clientMuteLevel?: ClientMuteLevel, logTheme?: LogTheme): void;
    group(groupTitle: string, collapsed?: boolean): IGroupCloser;
    groupEnd(groupTitle: string): void;
    debug(message: string, details?: {
        [key: string]: any;
    }): void;
    info(message: string, details?: {
        [key: string]: any;
    }): void;
    warn(message: string, details?: {
        [key: string]: any;
    }): void;
    error(message: string, details?: {
        [key: string]: any;
    }): void;
    report(message: string, details?: {
        [key: string]: any;
    }, includeStack?: boolean): void;
    getConfig(): ILoggerConfig;
    isEnabled: boolean;
    configKey: string;
}
