import { IBaseObjectParam } from 'src/core/Gigya.Js/app/BaseObject/BaseObject';
export declare enum DeviceTypes {
    _undefined = 0,
    desktop = 1,
    mobile = 2,
    auto = 3
}
export interface IBaseObjectConfig<P extends IBaseObjectParam> {
    name?: string;
    namespace?: string;
    methodName?: string;
    jsName?: string;
    defaultDeviceType?: DeviceTypes;
    defaultParams: P;
    requiredParams: Array<string>;
}
