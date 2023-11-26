import { IPluginVersionInfo } from 'src/core/Gigya.Js/app/API/UiApi';
export declare class VersionSelector {
    methodName: string;
    private _versions;
    private _defaultVersionIndex;
    constructor(methodName: string, _versions: IPluginVersionInfo[], defaultVersionName: string);
    callVersion(versionName: string, params?: Object, args?: Array<any>): void;
    private findSupportedVersion;
    private findVersionIndexOrDefault;
    private invokeVersionMethod;
}
