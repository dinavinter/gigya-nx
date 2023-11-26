import { ILoggerConfig, LogLevel, ClientMuteLevel, LogTheme, ILogger, GigGlobal, IGroupCloser, ILogFunc } from 'src/core/Gigya.Js/app/Logger/interfaces';
export declare const gigErrorReport = "gigErrorReport";
export declare abstract class BaseLogger implements ILogger {
    protected _global: GigGlobal;
    private _config;
    private _groupsStack;
    private _currColorIdx;
    private readonly _console;
    readonly configKey: string;
    protected constructor(_global: GigGlobal);
    abstract report(message: string, details?: {
        [key: string]: any;
    }, includeStack?: boolean): any;
    getConfig(): ILoggerConfig;
    get isEnabled(): boolean;
    private get logLevel();
    private get palette();
    private getNextColor;
    private get currentGroup();
    private readLoggerConfigFromHash;
    private readLoggerConfigFromCookie;
    private setLoggerConfigCookie;
    private overrideClientLogs;
    private getFormattedLogArgs;
    private restoreHangingGroups;
    private endGroup;
    private log;
    private getJsonFromError;
    private errorParser;
    get debug(): ILogFunc;
    get info(): ILogFunc;
    get warn(): ILogFunc;
    get error(): ILogFunc;
    group(groupTitle: string, collapsed?: boolean): IGroupCloser;
    groupEnd(groupTitle: string): void;
    enable(logLevel?: LogLevel, clientMuteLevel?: ClientMuteLevel, logTheme?: LogTheme): void;
    disable(): void;
}
