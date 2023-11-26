import { IConfiguration } from 'src/fidm/Gigya.Js.SamlProxy/app/IConfiguration';
import { IProxyAction } from 'src/fidm/Gigya.Js.SamlProxy/app/parseUrl';
export declare function processLogin(action: IProxyAction, configuration: IConfiguration): void;
export declare function processForceLogin(action: IProxyAction, configuration: IConfiguration): Promise<void>;
export declare function processAfterLogin(action: IProxyAction, configuration: IConfiguration): void;
export declare function processPassiveLogin(action: IProxyAction, configuration: IConfiguration): void;
export declare function processInitSSO(action: IProxyAction, configuration: IConfiguration): void;
export declare function processCancel(action: IProxyAction, configuration: IConfiguration): void;
