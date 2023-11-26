import { bootstrap } from 'src/fidm/Gigya.Js.SamlProxy/app/bootstrap';
import { findConfiguration, parseConfiguration } from 'src/fidm/Gigya.Js.SamlProxy/app/configuration';
import { processAfterLogin, processForceLogin, processInitSSO, processLogin, processPassiveLogin } from 'src/fidm/Gigya.Js.SamlProxy/app/login';
import { processLogout } from 'src/fidm/Gigya.Js.SamlProxy/app/logout';
import { parseUrl, ProxyMode } from 'src/fidm/Gigya.Js.SamlProxy/app/parseUrl';
import { processRequest } from 'src/fidm/Gigya.Js.SamlProxy/app/samlProxy';
import { deserializeJSON, getLoginToken, isLoggedIn, loadContext, logout, objectMerge, openIframe, redirectToSamlEndPont, reportError, saveContext, setUrlParams, templateFill, urlParams } from './utils';
declare const proxy: any;
export { proxy, bootstrap, findConfiguration, parseConfiguration, processLogin, processForceLogin, processAfterLogin, processPassiveLogin, processInitSSO, processLogout, ProxyMode, parseUrl, processRequest, urlParams, openIframe, reportError, redirectToSamlEndPont, setUrlParams, getLoginToken, saveContext, loadContext, templateFill, deserializeJSON, objectMerge, isLoggedIn, logout };
