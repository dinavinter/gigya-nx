import { BaseLogger } from 'src/core/Gigya.Js/app/Logger/baseLogger';
import { GigGlobal } from 'src/core/Gigya.Js/app/Logger/interfaces';
export declare class IFrameLogger extends BaseLogger {
    protected _global: GigGlobal;
    constructor(_global?: GigGlobal);
    report(message: string, details: {
        [key: string]: any;
    }, includeStack?: boolean): void;
}
