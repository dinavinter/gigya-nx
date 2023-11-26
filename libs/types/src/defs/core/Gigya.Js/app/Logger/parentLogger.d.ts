import { BaseLogger } from 'src/core/Gigya.Js/app/Logger/baseLogger';
import { GigGlobal } from 'src/core/Gigya.Js/app/Logger/interfaces';
import { loggerJsonp } from 'src/core/Gigya.Js/app/Logger/loggerJsonp';
export declare class ParentLogger extends BaseLogger {
    protected _global: GigGlobal;
    private _errorReportConfig;
    private _canaryConfig;
    private _random;
    private _jsonp;
    private readonly _isErrorReporter;
    private readonly _guid;
    constructor(_global?: GigGlobal, _errorReportConfig?: {
        enabled: boolean;
        probability: number;
    }, _canaryConfig?: {
        isActive: boolean;
    }, _random?: () => number, _jsonp?: typeof loggerJsonp);
    private enrollErrorReporting;
    private setupMessageListener;
    private getApiKey;
    private createReportParams;
    report(message: string, details: {
        [key: string]: any;
    }, includeStack?: boolean, forceReport?: boolean): void;
    private generateGUID;
    private get apiDomain();
}
