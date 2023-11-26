import { IEventHandler } from './IHostedPageAnalytics';
export declare enum GigyaEvent {
    onLogin = "login",
    onLogout = "logout",
    onError = "error",
    onAfterScreenLoad = "afterScreenLoad",
    onAfterSubmit = "afterSubmit",
    onHide = "hide"
}
export declare const GigyaEventTitleMap: Map<GigyaEvent, string>;
export declare const GigyaEventHandlersMap: Map<GigyaEvent, IEventHandler>;
