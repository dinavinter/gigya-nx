import { BasePlugin } from 'src/core/Gigya.Js.Plugin/app/BasePlugin';
import { IPluginConfig } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginConfig';
import { IPluginCSS } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginCSS';
import { IPluginTemplates } from 'src/core/Gigya.Js.Plugin/app/interfaces/IPluginTemplates';
import { IInjectionInfo } from 'src/core/Gigya.Js/app/API/UiApi';
import { BasePage } from './pages/BasePage';
import { PageType } from './types/consts';
import { IIdentityFlowsConfig, IPageAnalyticsConfig } from './utils/Analytics/IHostedPageAnalytics';
export interface IPage {
    new (params: IPagesParams): BasePage;
}
export interface IPagesParams {
    type: PageType;
    screenSet: string;
    containerID: string;
    startScreen?: string;
    loginUri?: string;
    googleAnalyticsConfig?: IPageAnalyticsConfig;
    identityFlowsConfig?: IIdentityFlowsConfig;
    errorUri?: string;
}
declare const BasePluginGlobal: typeof BasePlugin;
export declare class PagesPlugin extends BasePluginGlobal<IPagesParams, IPluginTemplates, IPluginCSS> {
    private static PageLibrary;
    static injectionInfo(): IInjectionInfo;
    getConfig(): IPluginConfig<IPagesParams>;
    init(callback: (isSuccess: boolean) => void): Promise<void>;
    static addPageToLibrary(type: string, page: IPage): void;
    private static getPageImplementation;
    private static getLoginType;
    private initGAnalytics;
}
export {};
