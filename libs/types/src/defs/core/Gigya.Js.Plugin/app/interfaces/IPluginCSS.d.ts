import { IMap } from 'src/core/Gigya.Js/app/Utils/array';
export interface IPluginCSS extends IMap<string> {
    modern_modal?: string;
    legacy_modal?: string;
    reset?: string;
    global: string;
    mobile?: string;
    nonMobile?: string;
    resetRtl?: string;
    globalRtl?: string;
    mobileRtl?: string;
    nonMobileRtl?: string;
}
