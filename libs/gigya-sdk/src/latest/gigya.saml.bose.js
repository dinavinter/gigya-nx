/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/others/gigya.saml.bose.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/others/gigya.saml.bose.js":
/*!**********************************************!*\
  !*** ./src/legacy/others/gigya.saml.bose.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var gigya;
(function (gigya) {
    var boot;
    (function (boot) {
        boot.debug = false;
        /**
         * copied from gigya.utils.DOM.getGigyaScriptElement
         * @param fileNames
         */
        function getGigyaScriptElement(fileNames) {
            var scripts = document.getElementsByTagName('script');
            var scriptElement;
            var gigyaCdnRegex = /\/\/cdn(s)?\.(ru1\.)?gigya.com/;
            for (var i = scripts.length - 1; i >= 0; i--) {
                var script = scripts[i];
                var src = script.src.toLowerCase();
                if (src !== '') {
                    if ((gigyaCdnRegex.test(src) || src.indexOf('?apikey=') > -1)) {
                        var isFileNameExistInSrc = fileNames.length === 0 || fileNames.some(function (fileName) { return src.indexOf(fileName) > -1; });
                        if (isFileNameExistInSrc) {
                            scriptElement = script;
                            break;
                        }
                    }
                }
            }
            return scriptElement;
        }
        boot.getGigyaScriptElement = getGigyaScriptElement;
        function ensureJsSdkLoaded(apiKey, done, async, useExistingGigyaDomain, useXMLHTTPRequest) {
            if (async === void 0) { async = true; }
            if (useExistingGigyaDomain === void 0) { useExistingGigyaDomain = false; }
            if (useXMLHTTPRequest === void 0) { useXMLHTTPRequest = false; }
            if (gigya['isGigya']) {
                if (boot.debug)
                    console.debug('$G gigya-jsSdk already loaded.');
                if (!gigya['isReady']) {
                    waitForGigyaServiceReady(done);
                }
                else {
                    done();
                }
            }
            else {
                loadGigyaJS(apiKey, async, useExistingGigyaDomain, useXMLHTTPRequest);
                waitForGigyaServiceReady(done);
            }
        }
        boot.ensureJsSdkLoaded = ensureJsSdkLoaded;
        function loadGigyaJS(apiKey, async, useExistingGigyaDomain, useXMLHTTPRequest) {
            gigya['isGigya'] = true; /// important! so won't discard current modules.
            var isSecurePage = (location.protocol.toLowerCase().indexOf('https') == 0);
            var server;
            if (useExistingGigyaDomain) {
                var a = document.createElement('a');
                a.href = getGigyaScriptElement([]).src;
                server = a.protocol + "//" + a.host;
            }
            else {
                server = isSecurePage ? "https://cdns.gigya.com" : "http://cdn.gigya.com";
            }
            var src = server + "/js/gigya.js?apiKey=" + apiKey + "&chico=1";
            var scriptElement = document.createElement('script');
            scriptElement.type = 'text/javascript'; // application/ecmascript is not supported by IE8
            if (!useXMLHTTPRequest) {
                scriptElement.src = src;
                scriptElement.async = async;
            }
            else {
                /// Note that cross-domain XMLHttpRequest requires the server to return the header: "Access-Control-Allow-Origin: <origin> | *"
                var xhrObj = new XMLHttpRequest();
                xhrObj.open('GET', src, async);
                xhrObj.send('');
                scriptElement.text = xhrObj.responseText;
            }
            if (boot.debug)
                console.debug('$G loading gigya-jsSdk...');
            document.getElementsByTagName('head')[0].appendChild(scriptElement);
        }
        function waitForGigyaServiceReady(done) {
            // set socialize.js load handler
            var prevHandler = null;
            if (typeof window['onGigyaServiceReady'] !== "undefined")
                prevHandler = window['onGigyaServiceReady'];
            window['onGigyaServiceReady'] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (prevHandler)
                    prevHandler.apply(this, args);
                if (boot.debug)
                    console.debug('$G gigya-jsSdk loaded!');
                done();
            };
        }
        function ensureBasePluginLoaded(apiKey, done, async, useXMLHTTPRequest) {
            if (async === void 0) { async = true; }
            if (useXMLHTTPRequest === void 0) { useXMLHTTPRequest = false; }
            ensureJsSdkLoaded(apiKey, function () {
                if (gigya['_']['plugins']['BasePlugin'] && !gigya['_']['plugins']['BasePlugin']['isMock']) {
                    done();
                }
                else {
                    gigya['_']['loadBasePlugin']({ onLoad: done });
                }
            }, async, useXMLHTTPRequest);
        }
        boot.ensureBasePluginLoaded = ensureBasePluginLoaded;
    })(boot = gigya.boot || (gigya.boot = {}));
})(gigya || (gigya = {}));
/// <reference path="definitions.d.ts" />
var gigyaSaml;
(function (gigyaSaml) {
    var proxy;
    (function (proxy) {
        var utils;
        (function (utils) {
            function urlParams(query) {
                if (query.indexOf('?') > -1)
                    query = query.substring(query.indexOf('?') + 1);
                var queryParts = query.split(/&/);
                var params = {};
                for (var i = 0; i < queryParts.length; ++i) {
                    var param = queryParts[i];
                    if (param.indexOf('=') === -1)
                        continue;
                    var paramParts = param.split('=');
                    if (paramParts.length !== 2)
                        continue;
                    params[paramParts[0]] = decodeURIComponent(paramParts[1]);
                }
                return params;
            }
            utils.urlParams = urlParams;
            function openIframe(url, done, timeout) {
                var handlerCalled = false;
                var loadHandler = function () {
                    if (!handlerCalled) {
                        handlerCalled = true;
                        done();
                    }
                };
                gigya.utils.script.triggerResource(url, loadHandler, gigya.utils.script.ResourceTypes.iframe, false);
                if (timeout)
                    setTimeout(loadHandler, timeout);
            }
            utils.openIframe = openIframe;
            function reportError(errorInfo, context) {
                // TODO redirect an internal endpoint so that the server will have a chance to deal with errors in its flow correctly
                if (gigya.samlConfig.errorPageURL) {
                    return utils.redirect(gigya.samlConfig.errorPageURL, context, {
                        error: errorInfo
                    });
                }
            }
            utils.reportError = reportError;
            function redirectToSamlEndPont(endPoint, params, apiKey) {
                // redirects to an internal saml endpoint with the given parameters
                var domain = gigya._.getApiDomain('fidm');
                var url = "https://" + domain + "/saml/v2.0/" + apiKey + "/" + endPoint;
                var gmidTicket = gigya._.apiAdapter.getGmidTicket();
                if (gmidTicket)
                    params.gmidTicket = gmidTicket;
                redirect(url, {
                    domain: domain,
                    apiKey: apiKey,
                    endPoint: endPoint
                }, params);
            }
            utils.redirectToSamlEndPont = redirectToSamlEndPont;
            function setUrlParams(url, params) {
                return gigya.utils.URL.addParamsToURL(url, params);
            }
            utils.setUrlParams = setUrlParams;
            function redirect(url, urlValues, params) {
                // redirect to any given url
                url = templateFill(url, urlValues);
                url = setUrlParams(url, params);
                location.href = url;
                //window.open(url, '_self'); // This breaks postMessage messaging - replace the window.opener
            }
            utils.redirect = redirect;
            function getLoginToken(apiKey) {
                // returns current login token directly from the web adapter
                return gigya._.apiAdapters.web.tokenStore.get(apiKey);
            }
            utils.getLoginToken = getLoginToken;
            function contextKey(apiKey) {
                return 'gig_samlContext_' + apiKey;
            }
            var sessionStorageTimeout = 10 * 60 * 1000; // allow user 10 minutes to finish the saml login
            function saveContext(apiKey, context, done) {
                // save context for next retrival, if not returned from loginUrl
                var key = contextKey(apiKey);
                gigya.utils.sessionCache.get(key, sessionStorageTimeout, function (savedContexts) {
                    savedContexts = savedContexts || [];
                    savedContexts.push(context);
                    gigya.utils.sessionCache.set(key, savedContexts);
                    done();
                });
            }
            utils.saveContext = saveContext;
            function loadContext(apiKey, callback) {
                // load context if was not provided in url
                var key = contextKey(apiKey);
                gigya.utils.sessionCache.get(key, sessionStorageTimeout, function (savedContexts) {
                    savedContexts = savedContexts || [];
                    var lastContext = savedContexts.pop() || {};
                    gigya.utils.sessionCache.set(key, savedContexts);
                    callback(lastContext);
                });
            }
            utils.loadContext = loadContext;
            function templateFill(template, params) {
                return gigya.utils.templates.fill(template, params);
            }
            utils.templateFill = templateFill;
            function deserializeJSON(json) {
                return gigya.utils.JSON.deserialize(json, '');
            }
            utils.deserializeJSON = deserializeJSON;
            function objectMerge() {
                var objects = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    objects[_i] = arguments[_i];
                }
                return gigya.utils.object.merge(objects);
            }
            utils.objectMerge = objectMerge;
            function isLoggedIn(callback, apiKey) {
                var userKey = getLoginToken(apiKey);
                var loggedIn = Boolean(userKey);
                callback(loggedIn);
            }
            utils.isLoggedIn = isLoggedIn;
            function logout(samlContext, callback) {
                gigya.socialize.logout({
                    callback: callback,
                    samlContext: samlContext
                });
            }
            utils.logout = logout;
        })(utils = proxy.utils || (proxy.utils = {}));
    })(proxy = gigyaSaml.proxy || (gigyaSaml.proxy = {}));
})(gigyaSaml || (gigyaSaml = {}));
/// <reference path="utils.ts" />
var gigyaSaml;
(function (gigyaSaml) {
    var proxy;
    (function (proxy) {
        var ProxyMode;
        (function (ProxyMode) {
            ProxyMode[ProxyMode["_undefined"] = 0] = "_undefined";
            // SSO
            ProxyMode[ProxyMode["login"] = 1] = "login";
            ProxyMode[ProxyMode["forceLogin"] = 2] = "forceLogin";
            ProxyMode[ProxyMode["passiveLogin"] = 3] = "passiveLogin";
            ProxyMode[ProxyMode["afterLogin"] = 4] = "afterLogin";
            ProxyMode[ProxyMode["initSSO"] = 5] = "initSSO";
            // SLO
            ProxyMode[ProxyMode["logout"] = 6] = "logout";
            // internal
            ProxyMode[ProxyMode["_debug"] = 7] = "_debug";
        })(ProxyMode = proxy.ProxyMode || (proxy.ProxyMode = {}));
        function parseUrl(query) {
            var params = proxy.utils.urlParams(query);
            var mode = ProxyMode[params['mode']];
            ;
            var samlContext = params['samlContext'];
            var spName = params['spName'];
            // _afterLogin can come without samlContext or mode
            return {
                mode: mode,
                samlContext: samlContext,
                params: params,
                spName: spName
            };
        }
        proxy.parseUrl = parseUrl;
    })(proxy = gigyaSaml.proxy || (gigyaSaml.proxy = {}));
})(gigyaSaml || (gigyaSaml = {}));
/// <reference path="definitions.d.ts" />
var gigyaSaml;
(function (gigyaSaml) {
    var proxy;
    (function (proxy) {
        function findScriptElement() {
            var scripts = document.getElementsByTagName('script');
            var scriptElement;
            for (var i = scripts.length - 1; i >= 0; i--) {
                var script = scripts[i];
                var src = script.src.toLowerCase();
                if (src != '') {
                    if ((src.indexOf('//cdn\d*.gigya.com') > -1 || src.indexOf('//cdns\d*.gigya.com') > -1 || src.indexOf('?apikey=') > -1)
                        && (src.indexOf('gigya.saml.js') > -1)) {
                        scriptElement = script;
                        break;
                    }
                }
            }
            return scriptElement;
        }
        function findConfiguration() {
            // find script element
            var scriptElement = findScriptElement();
            if (!scriptElement)
                throw new Error('failed to find script element');
            var apiKey = proxy.utils.urlParams(scriptElement.src)['apiKey'];
            var configJson = scriptElement.innerHTML.replace(/^\s+|\s+$/g, '');
            if (!configJson)
                throw new Error('No object params was found.');
            if (!apiKey)
                throw new Error('failed to find api key');
            return {
                apiKey: apiKey,
                configJson: configJson
            };
        }
        proxy.findConfiguration = findConfiguration;
        function parseConfiguration(unparsedConfig) {
            var scriptConf = proxy.utils.deserializeJSON(unparsedConfig.configJson);
            if (!scriptConf)
                throw new Error('The params object is not valid.');
            var configurationObj = proxy.utils.objectMerge({
                apiKey: unparsedConfig.apiKey
            }, scriptConf);
            if (!configurationObj.loginURL)
                throw new Error("The 'loginURL' param is not valid.");
            if (!configurationObj.logoutURL)
                throw new Error("The 'logoutURL' param is not valid.");
            return configurationObj;
        }
        proxy.parseConfiguration = parseConfiguration;
    })(proxy = gigyaSaml.proxy || (gigyaSaml.proxy = {}));
})(gigyaSaml || (gigyaSaml = {}));
/// <reference path="../../../utils/Gigya.Js.Boot/app/boot.ts" />
//** This is intentional! we want to package gigya.boot within the gigyaSaml.proxy . **
/// <reference path="definitions.d.ts" />
/// <reference path="parseUrl.ts" />
/// <reference path="configuration.ts" />
var gigyaSaml;
(function (gigyaSaml) {
    var proxy;
    (function (proxy) {
        function bootstrap(done) {
            var action = proxy.parseUrl(location.search);
            var unparsedConfig = proxy.findConfiguration();
            gigya.boot.ensureJsSdkLoaded(unparsedConfig.apiKey, function () {
                var configuration = proxy.parseConfiguration(unparsedConfig);
                changeLogoutBehaviour();
                if (gigya.partnerSettings.ssoKey && document.cookie.indexOf('hasSSOToken') === -1) {
                    document.cookie = 'hasSSOToken=true;';
                    gigya.setSSOToken({ redirectURL: document.location.href });
                }
                else {
                    done(action, configuration);
                }
            }, true, true);
        }
        proxy.bootstrap = bootstrap;
        ;
        function changeLogoutBehaviour() {
            // change socializeLogout not to logout before the server response, and to always go to the server
            gigya._.logoutBehaviour.logoutBeforeServerResponse = false;
            gigya._.logoutBehaviour.alwaysSendLogoutToServer = true;
        }
    })(proxy = gigyaSaml.proxy || (gigyaSaml.proxy = {}));
})(gigyaSaml || (gigyaSaml = {}));
/// <reference path="definitions.d.ts" />
var gigyaSaml;
(function (gigyaSaml) {
    var proxy;
    (function (proxy) {
        function processLogin(action, configuration) {
            proxy.utils.isLoggedIn(function (loggedIn) {
                if (loggedIn)
                    proxy.utils.redirectToSamlEndPont('idp/sso/continue', {
                        samlContext: action.samlContext,
                        loginToken: proxy.utils.getLoginToken(configuration.apiKey)
                    }, configuration.apiKey);
                else
                    processForceLogin(action, configuration);
            }, configuration.apiKey);
        }
        proxy.processLogin = processLogin;
        ;
        function processForceLogin(action, configuration) {
            // save samlContext to retrieve it if necesary
            proxy.utils.saveContext(configuration.apiKey, action, function () {
                // Parameters to loginURL might be supported in the future
                //var backTo = utils.setUrlParams(location.toString(), { mode: ProxyMode[ProxyMode._afterLogin] });
                proxy.utils.redirect(configuration.loginURL, action, {});
            });
        }
        proxy.processForceLogin = processForceLogin;
        function processAfterLogin(action, configuration) {
            proxy.utils.loadContext(configuration.apiKey, function (savedContext) {
                action.samlContext = action.samlContext || savedContext.samlContext;
                action.spName = action.spName || savedContext.spName;
                processPassiveLogin(action, configuration);
            });
        }
        proxy.processAfterLogin = processAfterLogin;
        function processPassiveLogin(action, configuration) {
            proxy.utils.isLoggedIn(function (loggedIn) {
                var loginToken = (loggedIn ? proxy.utils.getLoginToken(configuration.apiKey) : null);
                proxy.utils.redirectToSamlEndPont('idp/sso/continue', {
                    samlContext: action.samlContext,
                    loginToken: loginToken
                }, configuration.apiKey);
            }, configuration.apiKey);
        }
        proxy.processPassiveLogin = processPassiveLogin;
        function processInitSSO(action, configuration) {
            proxy.utils.isLoggedIn(function (loggedIn) {
                var loginToken = (loggedIn ? proxy.utils.getLoginToken(configuration.apiKey) : null);
                proxy.utils.redirectToSamlEndPont('idp/sso/init', {
                    spName: action.params['spName'],
                    redirectURL: action.params['redirectURL'],
                    loginToken: loginToken
                }, configuration.apiKey);
            }, configuration.apiKey);
        }
        proxy.processInitSSO = processInitSSO;
    })(proxy = gigyaSaml.proxy || (gigyaSaml.proxy = {}));
})(gigyaSaml || (gigyaSaml = {}));
/// <reference path="definitions.d.ts" />
var gigyaSaml;
(function (gigyaSaml) {
    var proxy;
    (function (proxy) {
        function processLogout(action, configuration) {
            // call socialize.logout that will handle the rest
            // get response from server
            // if necesary invalidate client session, and call logoutUrl
            // call every SP session that is needed
            // when it is finished, redirect to finalize endpoint
            var onLogoutResponse = function (response) {
                var singleSPTimeout = 4000; // 4s
                if (response.errorCode !== 0 /* OK */)
                    return proxy.utils.reportError({
                        errorCode: response.errorCode,
                        errorMessage: response.errorMessage,
                        response: response,
                        action: action,
                        configuration: configuration
                    }, action);
                if (response.samlContext) {
                    var callFinalize = function () { return proxy.utils.redirectToSamlEndPont('idp/slo/finalize', {
                        samlContext: response.samlContext
                    }, configuration.apiKey); };
                    var done = function () { return window.setTimeout(callFinalize, singleSPTimeout); };
                    if (configuration.logoutURL)
                        proxy.utils.openIframe(configuration.logoutURL, done, singleSPTimeout);
                    else
                        done();
                }
            };
            proxy.utils.logout(action.samlContext, function (response) {
                if (response.errorCode === 0 /* OK */ &&
                    response.originalResponse &&
                    response.originalResponse.errorCode === 403005 /* UNAUTHORIZED_USER */) {
                    // try logout again - this time without the login token
                    return proxy.utils.logout(action.samlContext, onLogoutResponse);
                }
                return onLogoutResponse(response);
            });
        }
        proxy.processLogout = processLogout;
        ;
    })(proxy = gigyaSaml.proxy || (gigyaSaml.proxy = {}));
})(gigyaSaml || (gigyaSaml = {}));
/// <reference path="definitions.d.ts" />
/// <reference path="bootstrap.ts" />
/// <reference path="login.ts" />
/// <reference path="logout.ts" />
var gigyaSaml;
(function (gigyaSaml) {
    var proxy;
    (function (proxy) {
        function processRequest(action, configuration) {
            action.mode = action.mode || proxy.ProxyMode.afterLogin;
            switch (action.mode) {
                // SSO - sp initiated login
                case proxy.ProxyMode.login:
                    proxy.processLogin(action, configuration);
                    break;
                case proxy.ProxyMode.forceLogin:
                    proxy.processForceLogin(action, configuration);
                    break;
                case proxy.ProxyMode.afterLogin:
                    proxy.processAfterLogin(action, configuration);
                    break;
                case proxy.ProxyMode.passiveLogin:
                    proxy.processPassiveLogin(action, configuration);
                    break;
                // SSO - idp initiated login
                case proxy.ProxyMode.initSSO:
                    proxy.processInitSSO(action, configuration);
                    break;
                // SLO - sp initiated logout
                case proxy.ProxyMode.logout:
                    proxy.processLogout(action, configuration);
                    break;
                default:
                    throw new Error('Unimplemented mode');
            }
        }
        proxy.processRequest = processRequest;
        proxy.bootstrap(processRequest);
    })(proxy = gigyaSaml.proxy || (gigyaSaml.proxy = {}));
})(gigyaSaml || (gigyaSaml = {}));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9vdGhlcnMvZ2lneWEuc2FtbC5ib3NlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUhBQWlILG1DQUFtQyxFQUFFO0FBQ3RKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsY0FBYztBQUNqRCxvREFBb0QsZ0NBQWdDO0FBQ3BGLCtDQUErQywyQkFBMkI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Qyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssa0RBQWtEO0FBQ3ZELENBQUMsOEJBQThCLEciLCJmaWxlIjoiZ2lneWEuc2FtbC5ib3NlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbGVnYWN5L290aGVycy9naWd5YS5zYW1sLmJvc2UuanNcIik7XG4iLCJ2YXIgZ2lneWE7XG4oZnVuY3Rpb24gKGdpZ3lhKSB7XG4gICAgdmFyIGJvb3Q7XG4gICAgKGZ1bmN0aW9uIChib290KSB7XG4gICAgICAgIGJvb3QuZGVidWcgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNvcGllZCBmcm9tIGdpZ3lhLnV0aWxzLkRPTS5nZXRHaWd5YVNjcmlwdEVsZW1lbnRcbiAgICAgICAgICogQHBhcmFtIGZpbGVOYW1lc1xuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZ2V0R2lneWFTY3JpcHRFbGVtZW50KGZpbGVOYW1lcykge1xuICAgICAgICAgICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG4gICAgICAgICAgICB2YXIgc2NyaXB0RWxlbWVudDtcbiAgICAgICAgICAgIHZhciBnaWd5YUNkblJlZ2V4ID0gL1xcL1xcL2NkbihzKT9cXC4ocnUxXFwuKT9naWd5YS5jb20vO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgc2NyaXB0ID0gc2NyaXB0c1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgc3JjID0gc2NyaXB0LnNyYy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGlmIChzcmMgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoZ2lneWFDZG5SZWdleC50ZXN0KHNyYykgfHwgc3JjLmluZGV4T2YoJz9hcGlrZXk9JykgPiAtMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0ZpbGVOYW1lRXhpc3RJblNyYyA9IGZpbGVOYW1lcy5sZW5ndGggPT09IDAgfHwgZmlsZU5hbWVzLnNvbWUoZnVuY3Rpb24gKGZpbGVOYW1lKSB7IHJldHVybiBzcmMuaW5kZXhPZihmaWxlTmFtZSkgPiAtMTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNGaWxlTmFtZUV4aXN0SW5TcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHRFbGVtZW50ID0gc2NyaXB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNjcmlwdEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgYm9vdC5nZXRHaWd5YVNjcmlwdEVsZW1lbnQgPSBnZXRHaWd5YVNjcmlwdEVsZW1lbnQ7XG4gICAgICAgIGZ1bmN0aW9uIGVuc3VyZUpzU2RrTG9hZGVkKGFwaUtleSwgZG9uZSwgYXN5bmMsIHVzZUV4aXN0aW5nR2lneWFEb21haW4sIHVzZVhNTEhUVFBSZXF1ZXN0KSB7XG4gICAgICAgICAgICBpZiAoYXN5bmMgPT09IHZvaWQgMCkgeyBhc3luYyA9IHRydWU7IH1cbiAgICAgICAgICAgIGlmICh1c2VFeGlzdGluZ0dpZ3lhRG9tYWluID09PSB2b2lkIDApIHsgdXNlRXhpc3RpbmdHaWd5YURvbWFpbiA9IGZhbHNlOyB9XG4gICAgICAgICAgICBpZiAodXNlWE1MSFRUUFJlcXVlc3QgPT09IHZvaWQgMCkgeyB1c2VYTUxIVFRQUmVxdWVzdCA9IGZhbHNlOyB9XG4gICAgICAgICAgICBpZiAoZ2lneWFbJ2lzR2lneWEnXSkge1xuICAgICAgICAgICAgICAgIGlmIChib290LmRlYnVnKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCckRyBnaWd5YS1qc1NkayBhbHJlYWR5IGxvYWRlZC4nKTtcbiAgICAgICAgICAgICAgICBpZiAoIWdpZ3lhWydpc1JlYWR5J10pIHtcbiAgICAgICAgICAgICAgICAgICAgd2FpdEZvckdpZ3lhU2VydmljZVJlYWR5KGRvbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvYWRHaWd5YUpTKGFwaUtleSwgYXN5bmMsIHVzZUV4aXN0aW5nR2lneWFEb21haW4sIHVzZVhNTEhUVFBSZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICB3YWl0Rm9yR2lneWFTZXJ2aWNlUmVhZHkoZG9uZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYm9vdC5lbnN1cmVKc1Nka0xvYWRlZCA9IGVuc3VyZUpzU2RrTG9hZGVkO1xuICAgICAgICBmdW5jdGlvbiBsb2FkR2lneWFKUyhhcGlLZXksIGFzeW5jLCB1c2VFeGlzdGluZ0dpZ3lhRG9tYWluLCB1c2VYTUxIVFRQUmVxdWVzdCkge1xuICAgICAgICAgICAgZ2lneWFbJ2lzR2lneWEnXSA9IHRydWU7IC8vLyBpbXBvcnRhbnQhIHNvIHdvbid0IGRpc2NhcmQgY3VycmVudCBtb2R1bGVzLlxuICAgICAgICAgICAgdmFyIGlzU2VjdXJlUGFnZSA9IChsb2NhdGlvbi5wcm90b2NvbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2h0dHBzJykgPT0gMCk7XG4gICAgICAgICAgICB2YXIgc2VydmVyO1xuICAgICAgICAgICAgaWYgKHVzZUV4aXN0aW5nR2lneWFEb21haW4pIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgICAgICBhLmhyZWYgPSBnZXRHaWd5YVNjcmlwdEVsZW1lbnQoW10pLnNyYztcbiAgICAgICAgICAgICAgICBzZXJ2ZXIgPSBhLnByb3RvY29sICsgXCIvL1wiICsgYS5ob3N0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VydmVyID0gaXNTZWN1cmVQYWdlID8gXCJodHRwczovL2NkbnMuZ2lneWEuY29tXCIgOiBcImh0dHA6Ly9jZG4uZ2lneWEuY29tXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3JjID0gc2VydmVyICsgXCIvanMvZ2lneWEuanM/YXBpS2V5PVwiICsgYXBpS2V5ICsgXCImY2hpY289MVwiO1xuICAgICAgICAgICAgdmFyIHNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIHNjcmlwdEVsZW1lbnQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnOyAvLyBhcHBsaWNhdGlvbi9lY21hc2NyaXB0IGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUU4XG4gICAgICAgICAgICBpZiAoIXVzZVhNTEhUVFBSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgc2NyaXB0RWxlbWVudC5zcmMgPSBzcmM7XG4gICAgICAgICAgICAgICAgc2NyaXB0RWxlbWVudC5hc3luYyA9IGFzeW5jO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8vIE5vdGUgdGhhdCBjcm9zcy1kb21haW4gWE1MSHR0cFJlcXVlc3QgcmVxdWlyZXMgdGhlIHNlcnZlciB0byByZXR1cm4gdGhlIGhlYWRlcjogXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW46IDxvcmlnaW4+IHwgKlwiXG4gICAgICAgICAgICAgICAgdmFyIHhock9iaiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIHhock9iai5vcGVuKCdHRVQnLCBzcmMsIGFzeW5jKTtcbiAgICAgICAgICAgICAgICB4aHJPYmouc2VuZCgnJyk7XG4gICAgICAgICAgICAgICAgc2NyaXB0RWxlbWVudC50ZXh0ID0geGhyT2JqLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChib290LmRlYnVnKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJyRHIGxvYWRpbmcgZ2lneWEtanNTZGsuLi4nKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gd2FpdEZvckdpZ3lhU2VydmljZVJlYWR5KGRvbmUpIHtcbiAgICAgICAgICAgIC8vIHNldCBzb2NpYWxpemUuanMgbG9hZCBoYW5kbGVyXG4gICAgICAgICAgICB2YXIgcHJldkhhbmRsZXIgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbJ29uR2lneWFTZXJ2aWNlUmVhZHknXSAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICBwcmV2SGFuZGxlciA9IHdpbmRvd1snb25HaWd5YVNlcnZpY2VSZWFkeSddO1xuICAgICAgICAgICAgd2luZG93WydvbkdpZ3lhU2VydmljZVJlYWR5J10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcmV2SGFuZGxlcilcbiAgICAgICAgICAgICAgICAgICAgcHJldkhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICAgICAgaWYgKGJvb3QuZGVidWcpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJyRHIGdpZ3lhLWpzU2RrIGxvYWRlZCEnKTtcbiAgICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGVuc3VyZUJhc2VQbHVnaW5Mb2FkZWQoYXBpS2V5LCBkb25lLCBhc3luYywgdXNlWE1MSFRUUFJlcXVlc3QpIHtcbiAgICAgICAgICAgIGlmIChhc3luYyA9PT0gdm9pZCAwKSB7IGFzeW5jID0gdHJ1ZTsgfVxuICAgICAgICAgICAgaWYgKHVzZVhNTEhUVFBSZXF1ZXN0ID09PSB2b2lkIDApIHsgdXNlWE1MSFRUUFJlcXVlc3QgPSBmYWxzZTsgfVxuICAgICAgICAgICAgZW5zdXJlSnNTZGtMb2FkZWQoYXBpS2V5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdpZ3lhWydfJ11bJ3BsdWdpbnMnXVsnQmFzZVBsdWdpbiddICYmICFnaWd5YVsnXyddWydwbHVnaW5zJ11bJ0Jhc2VQbHVnaW4nXVsnaXNNb2NrJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ2lneWFbJ18nXVsnbG9hZEJhc2VQbHVnaW4nXSh7IG9uTG9hZDogZG9uZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBhc3luYywgdXNlWE1MSFRUUFJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgICAgIGJvb3QuZW5zdXJlQmFzZVBsdWdpbkxvYWRlZCA9IGVuc3VyZUJhc2VQbHVnaW5Mb2FkZWQ7XG4gICAgfSkoYm9vdCA9IGdpZ3lhLmJvb3QgfHwgKGdpZ3lhLmJvb3QgPSB7fSkpO1xufSkoZ2lneWEgfHwgKGdpZ3lhID0ge30pKTtcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJkZWZpbml0aW9ucy5kLnRzXCIgLz5cbnZhciBnaWd5YVNhbWw7XG4oZnVuY3Rpb24gKGdpZ3lhU2FtbCkge1xuICAgIHZhciBwcm94eTtcbiAgICAoZnVuY3Rpb24gKHByb3h5KSB7XG4gICAgICAgIHZhciB1dGlscztcbiAgICAgICAgKGZ1bmN0aW9uICh1dGlscykge1xuICAgICAgICAgICAgZnVuY3Rpb24gdXJsUGFyYW1zKHF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5LmluZGV4T2YoJz8nKSA+IC0xKVxuICAgICAgICAgICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5LnN1YnN0cmluZyhxdWVyeS5pbmRleE9mKCc/JykgKyAxKTtcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnlQYXJ0cyA9IHF1ZXJ5LnNwbGl0KC8mLyk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHt9O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVlcnlQYXJ0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBxdWVyeVBhcnRzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW0uaW5kZXhPZignPScpID09PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW1QYXJ0cyA9IHBhcmFtLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbVBhcnRzLmxlbmd0aCAhPT0gMilcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXNbcGFyYW1QYXJ0c1swXV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFyYW1QYXJ0c1sxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1dGlscy51cmxQYXJhbXMgPSB1cmxQYXJhbXM7XG4gICAgICAgICAgICBmdW5jdGlvbiBvcGVuSWZyYW1lKHVybCwgZG9uZSwgdGltZW91dCkge1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyQ2FsbGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFyIGxvYWRIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhbmRsZXJDYWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXJDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5zY3JpcHQudHJpZ2dlclJlc291cmNlKHVybCwgbG9hZEhhbmRsZXIsIGdpZ3lhLnV0aWxzLnNjcmlwdC5SZXNvdXJjZVR5cGVzLmlmcmFtZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0KVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGxvYWRIYW5kbGVyLCB0aW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHV0aWxzLm9wZW5JZnJhbWUgPSBvcGVuSWZyYW1lO1xuICAgICAgICAgICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyb3JJbmZvLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETyByZWRpcmVjdCBhbiBpbnRlcm5hbCBlbmRwb2ludCBzbyB0aGF0IHRoZSBzZXJ2ZXIgd2lsbCBoYXZlIGEgY2hhbmNlIHRvIGRlYWwgd2l0aCBlcnJvcnMgaW4gaXRzIGZsb3cgY29ycmVjdGx5XG4gICAgICAgICAgICAgICAgaWYgKGdpZ3lhLnNhbWxDb25maWcuZXJyb3JQYWdlVVJMKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1dGlscy5yZWRpcmVjdChnaWd5YS5zYW1sQ29uZmlnLmVycm9yUGFnZVVSTCwgY29udGV4dCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9ySW5mb1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1dGlscy5yZXBvcnRFcnJvciA9IHJlcG9ydEVycm9yO1xuICAgICAgICAgICAgZnVuY3Rpb24gcmVkaXJlY3RUb1NhbWxFbmRQb250KGVuZFBvaW50LCBwYXJhbXMsIGFwaUtleSkge1xuICAgICAgICAgICAgICAgIC8vIHJlZGlyZWN0cyB0byBhbiBpbnRlcm5hbCBzYW1sIGVuZHBvaW50IHdpdGggdGhlIGdpdmVuIHBhcmFtZXRlcnNcbiAgICAgICAgICAgICAgICB2YXIgZG9tYWluID0gZ2lneWEuXy5nZXRBcGlEb21haW4oJ2ZpZG0nKTtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gXCJodHRwczovL1wiICsgZG9tYWluICsgXCIvc2FtbC92Mi4wL1wiICsgYXBpS2V5ICsgXCIvXCIgKyBlbmRQb2ludDtcbiAgICAgICAgICAgICAgICB2YXIgZ21pZFRpY2tldCA9IGdpZ3lhLl8uYXBpQWRhcHRlci5nZXRHbWlkVGlja2V0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGdtaWRUaWNrZXQpXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5nbWlkVGlja2V0ID0gZ21pZFRpY2tldDtcbiAgICAgICAgICAgICAgICByZWRpcmVjdCh1cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluOiBkb21haW4sXG4gICAgICAgICAgICAgICAgICAgIGFwaUtleTogYXBpS2V5LFxuICAgICAgICAgICAgICAgICAgICBlbmRQb2ludDogZW5kUG9pbnRcbiAgICAgICAgICAgICAgICB9LCBwYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXRpbHMucmVkaXJlY3RUb1NhbWxFbmRQb250ID0gcmVkaXJlY3RUb1NhbWxFbmRQb250O1xuICAgICAgICAgICAgZnVuY3Rpb24gc2V0VXJsUGFyYW1zKHVybCwgcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdpZ3lhLnV0aWxzLlVSTC5hZGRQYXJhbXNUb1VSTCh1cmwsIHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1dGlscy5zZXRVcmxQYXJhbXMgPSBzZXRVcmxQYXJhbXM7XG4gICAgICAgICAgICBmdW5jdGlvbiByZWRpcmVjdCh1cmwsIHVybFZhbHVlcywgcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVkaXJlY3QgdG8gYW55IGdpdmVuIHVybFxuICAgICAgICAgICAgICAgIHVybCA9IHRlbXBsYXRlRmlsbCh1cmwsIHVybFZhbHVlcyk7XG4gICAgICAgICAgICAgICAgdXJsID0gc2V0VXJsUGFyYW1zKHVybCwgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgICAgICAgICAgIC8vd2luZG93Lm9wZW4odXJsLCAnX3NlbGYnKTsgLy8gVGhpcyBicmVha3MgcG9zdE1lc3NhZ2UgbWVzc2FnaW5nIC0gcmVwbGFjZSB0aGUgd2luZG93Lm9wZW5lclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXRpbHMucmVkaXJlY3QgPSByZWRpcmVjdDtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldExvZ2luVG9rZW4oYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJucyBjdXJyZW50IGxvZ2luIHRva2VuIGRpcmVjdGx5IGZyb20gdGhlIHdlYiBhZGFwdGVyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdpZ3lhLl8uYXBpQWRhcHRlcnMud2ViLnRva2VuU3RvcmUuZ2V0KGFwaUtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1dGlscy5nZXRMb2dpblRva2VuID0gZ2V0TG9naW5Ub2tlbjtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvbnRleHRLZXkoYXBpS2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdnaWdfc2FtbENvbnRleHRfJyArIGFwaUtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzZXNzaW9uU3RvcmFnZVRpbWVvdXQgPSAxMCAqIDYwICogMTAwMDsgLy8gYWxsb3cgdXNlciAxMCBtaW51dGVzIHRvIGZpbmlzaCB0aGUgc2FtbCBsb2dpblxuICAgICAgICAgICAgZnVuY3Rpb24gc2F2ZUNvbnRleHQoYXBpS2V5LCBjb250ZXh0LCBkb25lKSB7XG4gICAgICAgICAgICAgICAgLy8gc2F2ZSBjb250ZXh0IGZvciBuZXh0IHJldHJpdmFsLCBpZiBub3QgcmV0dXJuZWQgZnJvbSBsb2dpblVybFxuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBjb250ZXh0S2V5KGFwaUtleSk7XG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuc2Vzc2lvbkNhY2hlLmdldChrZXksIHNlc3Npb25TdG9yYWdlVGltZW91dCwgZnVuY3Rpb24gKHNhdmVkQ29udGV4dHMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZWRDb250ZXh0cyA9IHNhdmVkQ29udGV4dHMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgIHNhdmVkQ29udGV4dHMucHVzaChjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuc2Vzc2lvbkNhY2hlLnNldChrZXksIHNhdmVkQ29udGV4dHMpO1xuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1dGlscy5zYXZlQ29udGV4dCA9IHNhdmVDb250ZXh0O1xuICAgICAgICAgICAgZnVuY3Rpb24gbG9hZENvbnRleHQoYXBpS2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIC8vIGxvYWQgY29udGV4dCBpZiB3YXMgbm90IHByb3ZpZGVkIGluIHVybFxuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBjb250ZXh0S2V5KGFwaUtleSk7XG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuc2Vzc2lvbkNhY2hlLmdldChrZXksIHNlc3Npb25TdG9yYWdlVGltZW91dCwgZnVuY3Rpb24gKHNhdmVkQ29udGV4dHMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZWRDb250ZXh0cyA9IHNhdmVkQ29udGV4dHMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXN0Q29udGV4dCA9IHNhdmVkQ29udGV4dHMucG9wKCkgfHwge307XG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLnNlc3Npb25DYWNoZS5zZXQoa2V5LCBzYXZlZENvbnRleHRzKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobGFzdENvbnRleHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXRpbHMubG9hZENvbnRleHQgPSBsb2FkQ29udGV4dDtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHRlbXBsYXRlRmlsbCh0ZW1wbGF0ZSwgcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRlbXBsYXRlLCBwYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXRpbHMudGVtcGxhdGVGaWxsID0gdGVtcGxhdGVGaWxsO1xuICAgICAgICAgICAgZnVuY3Rpb24gZGVzZXJpYWxpemVKU09OKGpzb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2lneWEudXRpbHMuSlNPTi5kZXNlcmlhbGl6ZShqc29uLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1dGlscy5kZXNlcmlhbGl6ZUpTT04gPSBkZXNlcmlhbGl6ZUpTT047XG4gICAgICAgICAgICBmdW5jdGlvbiBvYmplY3RNZXJnZSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdHNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdpZ3lhLnV0aWxzLm9iamVjdC5tZXJnZShvYmplY3RzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHV0aWxzLm9iamVjdE1lcmdlID0gb2JqZWN0TWVyZ2U7XG4gICAgICAgICAgICBmdW5jdGlvbiBpc0xvZ2dlZEluKGNhbGxiYWNrLCBhcGlLZXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXNlcktleSA9IGdldExvZ2luVG9rZW4oYXBpS2V5KTtcbiAgICAgICAgICAgICAgICB2YXIgbG9nZ2VkSW4gPSBCb29sZWFuKHVzZXJLZXkpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGxvZ2dlZEluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHV0aWxzLmlzTG9nZ2VkSW4gPSBpc0xvZ2dlZEluO1xuICAgICAgICAgICAgZnVuY3Rpb24gbG9nb3V0KHNhbWxDb250ZXh0LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5sb2dvdXQoe1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgICAgIHNhbWxDb250ZXh0OiBzYW1sQ29udGV4dFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXRpbHMubG9nb3V0ID0gbG9nb3V0O1xuICAgICAgICB9KSh1dGlscyA9IHByb3h5LnV0aWxzIHx8IChwcm94eS51dGlscyA9IHt9KSk7XG4gICAgfSkocHJveHkgPSBnaWd5YVNhbWwucHJveHkgfHwgKGdpZ3lhU2FtbC5wcm94eSA9IHt9KSk7XG59KShnaWd5YVNhbWwgfHwgKGdpZ3lhU2FtbCA9IHt9KSk7XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwidXRpbHMudHNcIiAvPlxudmFyIGdpZ3lhU2FtbDtcbihmdW5jdGlvbiAoZ2lneWFTYW1sKSB7XG4gICAgdmFyIHByb3h5O1xuICAgIChmdW5jdGlvbiAocHJveHkpIHtcbiAgICAgICAgdmFyIFByb3h5TW9kZTtcbiAgICAgICAgKGZ1bmN0aW9uIChQcm94eU1vZGUpIHtcbiAgICAgICAgICAgIFByb3h5TW9kZVtQcm94eU1vZGVbXCJfdW5kZWZpbmVkXCJdID0gMF0gPSBcIl91bmRlZmluZWRcIjtcbiAgICAgICAgICAgIC8vIFNTT1xuICAgICAgICAgICAgUHJveHlNb2RlW1Byb3h5TW9kZVtcImxvZ2luXCJdID0gMV0gPSBcImxvZ2luXCI7XG4gICAgICAgICAgICBQcm94eU1vZGVbUHJveHlNb2RlW1wiZm9yY2VMb2dpblwiXSA9IDJdID0gXCJmb3JjZUxvZ2luXCI7XG4gICAgICAgICAgICBQcm94eU1vZGVbUHJveHlNb2RlW1wicGFzc2l2ZUxvZ2luXCJdID0gM10gPSBcInBhc3NpdmVMb2dpblwiO1xuICAgICAgICAgICAgUHJveHlNb2RlW1Byb3h5TW9kZVtcImFmdGVyTG9naW5cIl0gPSA0XSA9IFwiYWZ0ZXJMb2dpblwiO1xuICAgICAgICAgICAgUHJveHlNb2RlW1Byb3h5TW9kZVtcImluaXRTU09cIl0gPSA1XSA9IFwiaW5pdFNTT1wiO1xuICAgICAgICAgICAgLy8gU0xPXG4gICAgICAgICAgICBQcm94eU1vZGVbUHJveHlNb2RlW1wibG9nb3V0XCJdID0gNl0gPSBcImxvZ291dFwiO1xuICAgICAgICAgICAgLy8gaW50ZXJuYWxcbiAgICAgICAgICAgIFByb3h5TW9kZVtQcm94eU1vZGVbXCJfZGVidWdcIl0gPSA3XSA9IFwiX2RlYnVnXCI7XG4gICAgICAgIH0pKFByb3h5TW9kZSA9IHByb3h5LlByb3h5TW9kZSB8fCAocHJveHkuUHJveHlNb2RlID0ge30pKTtcbiAgICAgICAgZnVuY3Rpb24gcGFyc2VVcmwocXVlcnkpIHtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSBwcm94eS51dGlscy51cmxQYXJhbXMocXVlcnkpO1xuICAgICAgICAgICAgdmFyIG1vZGUgPSBQcm94eU1vZGVbcGFyYW1zWydtb2RlJ11dO1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgdmFyIHNhbWxDb250ZXh0ID0gcGFyYW1zWydzYW1sQ29udGV4dCddO1xuICAgICAgICAgICAgdmFyIHNwTmFtZSA9IHBhcmFtc1snc3BOYW1lJ107XG4gICAgICAgICAgICAvLyBfYWZ0ZXJMb2dpbiBjYW4gY29tZSB3aXRob3V0IHNhbWxDb250ZXh0IG9yIG1vZGVcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbW9kZTogbW9kZSxcbiAgICAgICAgICAgICAgICBzYW1sQ29udGV4dDogc2FtbENvbnRleHQsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgICAgICAgc3BOYW1lOiBzcE5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcHJveHkucGFyc2VVcmwgPSBwYXJzZVVybDtcbiAgICB9KShwcm94eSA9IGdpZ3lhU2FtbC5wcm94eSB8fCAoZ2lneWFTYW1sLnByb3h5ID0ge30pKTtcbn0pKGdpZ3lhU2FtbCB8fCAoZ2lneWFTYW1sID0ge30pKTtcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJkZWZpbml0aW9ucy5kLnRzXCIgLz5cbnZhciBnaWd5YVNhbWw7XG4oZnVuY3Rpb24gKGdpZ3lhU2FtbCkge1xuICAgIHZhciBwcm94eTtcbiAgICAoZnVuY3Rpb24gKHByb3h5KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZpbmRTY3JpcHRFbGVtZW50KCkge1xuICAgICAgICAgICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG4gICAgICAgICAgICB2YXIgc2NyaXB0RWxlbWVudDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjcmlwdCA9IHNjcmlwdHNbaV07XG4gICAgICAgICAgICAgICAgdmFyIHNyYyA9IHNjcmlwdC5zcmMudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAoc3JjICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoc3JjLmluZGV4T2YoJy8vY2RuXFxkKi5naWd5YS5jb20nKSA+IC0xIHx8IHNyYy5pbmRleE9mKCcvL2NkbnNcXGQqLmdpZ3lhLmNvbScpID4gLTEgfHwgc3JjLmluZGV4T2YoJz9hcGlrZXk9JykgPiAtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIChzcmMuaW5kZXhPZignZ2lneWEuc2FtbC5qcycpID4gLTEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHRFbGVtZW50ID0gc2NyaXB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2NyaXB0RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBmaW5kQ29uZmlndXJhdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGZpbmQgc2NyaXB0IGVsZW1lbnRcbiAgICAgICAgICAgIHZhciBzY3JpcHRFbGVtZW50ID0gZmluZFNjcmlwdEVsZW1lbnQoKTtcbiAgICAgICAgICAgIGlmICghc2NyaXB0RWxlbWVudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBmaW5kIHNjcmlwdCBlbGVtZW50Jyk7XG4gICAgICAgICAgICB2YXIgYXBpS2V5ID0gcHJveHkudXRpbHMudXJsUGFyYW1zKHNjcmlwdEVsZW1lbnQuc3JjKVsnYXBpS2V5J107XG4gICAgICAgICAgICB2YXIgY29uZmlnSnNvbiA9IHNjcmlwdEVsZW1lbnQuaW5uZXJIVE1MLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbiAgICAgICAgICAgIGlmICghY29uZmlnSnNvbilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG9iamVjdCBwYXJhbXMgd2FzIGZvdW5kLicpO1xuICAgICAgICAgICAgaWYgKCFhcGlLZXkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQgdG8gZmluZCBhcGkga2V5Jyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFwaUtleTogYXBpS2V5LFxuICAgICAgICAgICAgICAgIGNvbmZpZ0pzb246IGNvbmZpZ0pzb25cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcHJveHkuZmluZENvbmZpZ3VyYXRpb24gPSBmaW5kQ29uZmlndXJhdGlvbjtcbiAgICAgICAgZnVuY3Rpb24gcGFyc2VDb25maWd1cmF0aW9uKHVucGFyc2VkQ29uZmlnKSB7XG4gICAgICAgICAgICB2YXIgc2NyaXB0Q29uZiA9IHByb3h5LnV0aWxzLmRlc2VyaWFsaXplSlNPTih1bnBhcnNlZENvbmZpZy5jb25maWdKc29uKTtcbiAgICAgICAgICAgIGlmICghc2NyaXB0Q29uZilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBwYXJhbXMgb2JqZWN0IGlzIG5vdCB2YWxpZC4nKTtcbiAgICAgICAgICAgIHZhciBjb25maWd1cmF0aW9uT2JqID0gcHJveHkudXRpbHMub2JqZWN0TWVyZ2Uoe1xuICAgICAgICAgICAgICAgIGFwaUtleTogdW5wYXJzZWRDb25maWcuYXBpS2V5XG4gICAgICAgICAgICB9LCBzY3JpcHRDb25mKTtcbiAgICAgICAgICAgIGlmICghY29uZmlndXJhdGlvbk9iai5sb2dpblVSTClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgJ2xvZ2luVVJMJyBwYXJhbSBpcyBub3QgdmFsaWQuXCIpO1xuICAgICAgICAgICAgaWYgKCFjb25maWd1cmF0aW9uT2JqLmxvZ291dFVSTClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgJ2xvZ291dFVSTCcgcGFyYW0gaXMgbm90IHZhbGlkLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBjb25maWd1cmF0aW9uT2JqO1xuICAgICAgICB9XG4gICAgICAgIHByb3h5LnBhcnNlQ29uZmlndXJhdGlvbiA9IHBhcnNlQ29uZmlndXJhdGlvbjtcbiAgICB9KShwcm94eSA9IGdpZ3lhU2FtbC5wcm94eSB8fCAoZ2lneWFTYW1sLnByb3h5ID0ge30pKTtcbn0pKGdpZ3lhU2FtbCB8fCAoZ2lneWFTYW1sID0ge30pKTtcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi91dGlscy9HaWd5YS5Kcy5Cb290L2FwcC9ib290LnRzXCIgLz5cbi8vKiogVGhpcyBpcyBpbnRlbnRpb25hbCEgd2Ugd2FudCB0byBwYWNrYWdlIGdpZ3lhLmJvb3Qgd2l0aGluIHRoZSBnaWd5YVNhbWwucHJveHkgLiAqKlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImRlZmluaXRpb25zLmQudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cInBhcnNlVXJsLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjb25maWd1cmF0aW9uLnRzXCIgLz5cbnZhciBnaWd5YVNhbWw7XG4oZnVuY3Rpb24gKGdpZ3lhU2FtbCkge1xuICAgIHZhciBwcm94eTtcbiAgICAoZnVuY3Rpb24gKHByb3h5KSB7XG4gICAgICAgIGZ1bmN0aW9uIGJvb3RzdHJhcChkb25lKSB7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gcHJveHkucGFyc2VVcmwobG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgICAgIHZhciB1bnBhcnNlZENvbmZpZyA9IHByb3h5LmZpbmRDb25maWd1cmF0aW9uKCk7XG4gICAgICAgICAgICBnaWd5YS5ib290LmVuc3VyZUpzU2RrTG9hZGVkKHVucGFyc2VkQ29uZmlnLmFwaUtleSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBjb25maWd1cmF0aW9uID0gcHJveHkucGFyc2VDb25maWd1cmF0aW9uKHVucGFyc2VkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICBjaGFuZ2VMb2dvdXRCZWhhdmlvdXIoKTtcbiAgICAgICAgICAgICAgICBpZiAoZ2lneWEucGFydG5lclNldHRpbmdzLnNzb0tleSAmJiBkb2N1bWVudC5jb29raWUuaW5kZXhPZignaGFzU1NPVG9rZW4nKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gJ2hhc1NTT1Rva2VuPXRydWU7JztcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEuc2V0U1NPVG9rZW4oeyByZWRpcmVjdFVSTDogZG9jdW1lbnQubG9jYXRpb24uaHJlZiB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUoYWN0aW9uLCBjb25maWd1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBwcm94eS5ib290c3RyYXAgPSBib290c3RyYXA7XG4gICAgICAgIDtcbiAgICAgICAgZnVuY3Rpb24gY2hhbmdlTG9nb3V0QmVoYXZpb3VyKCkge1xuICAgICAgICAgICAgLy8gY2hhbmdlIHNvY2lhbGl6ZUxvZ291dCBub3QgdG8gbG9nb3V0IGJlZm9yZSB0aGUgc2VydmVyIHJlc3BvbnNlLCBhbmQgdG8gYWx3YXlzIGdvIHRvIHRoZSBzZXJ2ZXJcbiAgICAgICAgICAgIGdpZ3lhLl8ubG9nb3V0QmVoYXZpb3VyLmxvZ291dEJlZm9yZVNlcnZlclJlc3BvbnNlID0gZmFsc2U7XG4gICAgICAgICAgICBnaWd5YS5fLmxvZ291dEJlaGF2aW91ci5hbHdheXNTZW5kTG9nb3V0VG9TZXJ2ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSkocHJveHkgPSBnaWd5YVNhbWwucHJveHkgfHwgKGdpZ3lhU2FtbC5wcm94eSA9IHt9KSk7XG59KShnaWd5YVNhbWwgfHwgKGdpZ3lhU2FtbCA9IHt9KSk7XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiZGVmaW5pdGlvbnMuZC50c1wiIC8+XG52YXIgZ2lneWFTYW1sO1xuKGZ1bmN0aW9uIChnaWd5YVNhbWwpIHtcbiAgICB2YXIgcHJveHk7XG4gICAgKGZ1bmN0aW9uIChwcm94eSkge1xuICAgICAgICBmdW5jdGlvbiBwcm9jZXNzTG9naW4oYWN0aW9uLCBjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICBwcm94eS51dGlscy5pc0xvZ2dlZEluKGZ1bmN0aW9uIChsb2dnZWRJbikge1xuICAgICAgICAgICAgICAgIGlmIChsb2dnZWRJbilcbiAgICAgICAgICAgICAgICAgICAgcHJveHkudXRpbHMucmVkaXJlY3RUb1NhbWxFbmRQb250KCdpZHAvc3NvL2NvbnRpbnVlJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2FtbENvbnRleHQ6IGFjdGlvbi5zYW1sQ29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luVG9rZW46IHByb3h5LnV0aWxzLmdldExvZ2luVG9rZW4oY29uZmlndXJhdGlvbi5hcGlLZXkpXG4gICAgICAgICAgICAgICAgICAgIH0sIGNvbmZpZ3VyYXRpb24uYXBpS2V5KTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NGb3JjZUxvZ2luKGFjdGlvbiwgY29uZmlndXJhdGlvbik7XG4gICAgICAgICAgICB9LCBjb25maWd1cmF0aW9uLmFwaUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJveHkucHJvY2Vzc0xvZ2luID0gcHJvY2Vzc0xvZ2luO1xuICAgICAgICA7XG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NGb3JjZUxvZ2luKGFjdGlvbiwgY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgLy8gc2F2ZSBzYW1sQ29udGV4dCB0byByZXRyaWV2ZSBpdCBpZiBuZWNlc2FyeVxuICAgICAgICAgICAgcHJveHkudXRpbHMuc2F2ZUNvbnRleHQoY29uZmlndXJhdGlvbi5hcGlLZXksIGFjdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIFBhcmFtZXRlcnMgdG8gbG9naW5VUkwgbWlnaHQgYmUgc3VwcG9ydGVkIGluIHRoZSBmdXR1cmVcbiAgICAgICAgICAgICAgICAvL3ZhciBiYWNrVG8gPSB1dGlscy5zZXRVcmxQYXJhbXMobG9jYXRpb24udG9TdHJpbmcoKSwgeyBtb2RlOiBQcm94eU1vZGVbUHJveHlNb2RlLl9hZnRlckxvZ2luXSB9KTtcbiAgICAgICAgICAgICAgICBwcm94eS51dGlscy5yZWRpcmVjdChjb25maWd1cmF0aW9uLmxvZ2luVVJMLCBhY3Rpb24sIHt9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHByb3h5LnByb2Nlc3NGb3JjZUxvZ2luID0gcHJvY2Vzc0ZvcmNlTG9naW47XG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NBZnRlckxvZ2luKGFjdGlvbiwgY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgcHJveHkudXRpbHMubG9hZENvbnRleHQoY29uZmlndXJhdGlvbi5hcGlLZXksIGZ1bmN0aW9uIChzYXZlZENvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24uc2FtbENvbnRleHQgPSBhY3Rpb24uc2FtbENvbnRleHQgfHwgc2F2ZWRDb250ZXh0LnNhbWxDb250ZXh0O1xuICAgICAgICAgICAgICAgIGFjdGlvbi5zcE5hbWUgPSBhY3Rpb24uc3BOYW1lIHx8IHNhdmVkQ29udGV4dC5zcE5hbWU7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc1Bhc3NpdmVMb2dpbihhY3Rpb24sIGNvbmZpZ3VyYXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJveHkucHJvY2Vzc0FmdGVyTG9naW4gPSBwcm9jZXNzQWZ0ZXJMb2dpbjtcbiAgICAgICAgZnVuY3Rpb24gcHJvY2Vzc1Bhc3NpdmVMb2dpbihhY3Rpb24sIGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgIHByb3h5LnV0aWxzLmlzTG9nZ2VkSW4oZnVuY3Rpb24gKGxvZ2dlZEluKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxvZ2luVG9rZW4gPSAobG9nZ2VkSW4gPyBwcm94eS51dGlscy5nZXRMb2dpblRva2VuKGNvbmZpZ3VyYXRpb24uYXBpS2V5KSA6IG51bGwpO1xuICAgICAgICAgICAgICAgIHByb3h5LnV0aWxzLnJlZGlyZWN0VG9TYW1sRW5kUG9udCgnaWRwL3Nzby9jb250aW51ZScsIHtcbiAgICAgICAgICAgICAgICAgICAgc2FtbENvbnRleHQ6IGFjdGlvbi5zYW1sQ29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgbG9naW5Ub2tlbjogbG9naW5Ub2tlblxuICAgICAgICAgICAgICAgIH0sIGNvbmZpZ3VyYXRpb24uYXBpS2V5KTtcbiAgICAgICAgICAgIH0sIGNvbmZpZ3VyYXRpb24uYXBpS2V5KTtcbiAgICAgICAgfVxuICAgICAgICBwcm94eS5wcm9jZXNzUGFzc2l2ZUxvZ2luID0gcHJvY2Vzc1Bhc3NpdmVMb2dpbjtcbiAgICAgICAgZnVuY3Rpb24gcHJvY2Vzc0luaXRTU08oYWN0aW9uLCBjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICBwcm94eS51dGlscy5pc0xvZ2dlZEluKGZ1bmN0aW9uIChsb2dnZWRJbikge1xuICAgICAgICAgICAgICAgIHZhciBsb2dpblRva2VuID0gKGxvZ2dlZEluID8gcHJveHkudXRpbHMuZ2V0TG9naW5Ub2tlbihjb25maWd1cmF0aW9uLmFwaUtleSkgOiBudWxsKTtcbiAgICAgICAgICAgICAgICBwcm94eS51dGlscy5yZWRpcmVjdFRvU2FtbEVuZFBvbnQoJ2lkcC9zc28vaW5pdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgc3BOYW1lOiBhY3Rpb24ucGFyYW1zWydzcE5hbWUnXSxcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3RVUkw6IGFjdGlvbi5wYXJhbXNbJ3JlZGlyZWN0VVJMJ10sXG4gICAgICAgICAgICAgICAgICAgIGxvZ2luVG9rZW46IGxvZ2luVG9rZW5cbiAgICAgICAgICAgICAgICB9LCBjb25maWd1cmF0aW9uLmFwaUtleSk7XG4gICAgICAgICAgICB9LCBjb25maWd1cmF0aW9uLmFwaUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJveHkucHJvY2Vzc0luaXRTU08gPSBwcm9jZXNzSW5pdFNTTztcbiAgICB9KShwcm94eSA9IGdpZ3lhU2FtbC5wcm94eSB8fCAoZ2lneWFTYW1sLnByb3h5ID0ge30pKTtcbn0pKGdpZ3lhU2FtbCB8fCAoZ2lneWFTYW1sID0ge30pKTtcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJkZWZpbml0aW9ucy5kLnRzXCIgLz5cbnZhciBnaWd5YVNhbWw7XG4oZnVuY3Rpb24gKGdpZ3lhU2FtbCkge1xuICAgIHZhciBwcm94eTtcbiAgICAoZnVuY3Rpb24gKHByb3h5KSB7XG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NMb2dvdXQoYWN0aW9uLCBjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAvLyBjYWxsIHNvY2lhbGl6ZS5sb2dvdXQgdGhhdCB3aWxsIGhhbmRsZSB0aGUgcmVzdFxuICAgICAgICAgICAgLy8gZ2V0IHJlc3BvbnNlIGZyb20gc2VydmVyXG4gICAgICAgICAgICAvLyBpZiBuZWNlc2FyeSBpbnZhbGlkYXRlIGNsaWVudCBzZXNzaW9uLCBhbmQgY2FsbCBsb2dvdXRVcmxcbiAgICAgICAgICAgIC8vIGNhbGwgZXZlcnkgU1Agc2Vzc2lvbiB0aGF0IGlzIG5lZWRlZFxuICAgICAgICAgICAgLy8gd2hlbiBpdCBpcyBmaW5pc2hlZCwgcmVkaXJlY3QgdG8gZmluYWxpemUgZW5kcG9pbnRcbiAgICAgICAgICAgIHZhciBvbkxvZ291dFJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNpbmdsZVNQVGltZW91dCA9IDQwMDA7IC8vIDRzXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yQ29kZSAhPT0gMCAvKiBPSyAqLylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3h5LnV0aWxzLnJlcG9ydEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ29kZTogcmVzcG9uc2UuZXJyb3JDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiByZXNwb25zZS5lcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogcmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb246IGNvbmZpZ3VyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgfSwgYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc2FtbENvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxGaW5hbGl6ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHByb3h5LnV0aWxzLnJlZGlyZWN0VG9TYW1sRW5kUG9udCgnaWRwL3Nsby9maW5hbGl6ZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbWxDb250ZXh0OiByZXNwb25zZS5zYW1sQ29udGV4dFxuICAgICAgICAgICAgICAgICAgICB9LCBjb25maWd1cmF0aW9uLmFwaUtleSk7IH07XG4gICAgICAgICAgICAgICAgICAgIHZhciBkb25lID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LnNldFRpbWVvdXQoY2FsbEZpbmFsaXplLCBzaW5nbGVTUFRpbWVvdXQpOyB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbi5sb2dvdXRVUkwpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm94eS51dGlscy5vcGVuSWZyYW1lKGNvbmZpZ3VyYXRpb24ubG9nb3V0VVJMLCBkb25lLCBzaW5nbGVTUFRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHByb3h5LnV0aWxzLmxvZ291dChhY3Rpb24uc2FtbENvbnRleHQsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvckNvZGUgPT09IDAgLyogT0sgKi8gJiZcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2Uub3JpZ2luYWxSZXNwb25zZSAmJlxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5vcmlnaW5hbFJlc3BvbnNlLmVycm9yQ29kZSA9PT0gNDAzMDA1IC8qIFVOQVVUSE9SSVpFRF9VU0VSICovKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRyeSBsb2dvdXQgYWdhaW4gLSB0aGlzIHRpbWUgd2l0aG91dCB0aGUgbG9naW4gdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3h5LnV0aWxzLmxvZ291dChhY3Rpb24uc2FtbENvbnRleHQsIG9uTG9nb3V0UmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb25Mb2dvdXRSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBwcm94eS5wcm9jZXNzTG9nb3V0ID0gcHJvY2Vzc0xvZ291dDtcbiAgICAgICAgO1xuICAgIH0pKHByb3h5ID0gZ2lneWFTYW1sLnByb3h5IHx8IChnaWd5YVNhbWwucHJveHkgPSB7fSkpO1xufSkoZ2lneWFTYW1sIHx8IChnaWd5YVNhbWwgPSB7fSkpO1xuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImRlZmluaXRpb25zLmQudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImJvb3RzdHJhcC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwibG9naW4udHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cImxvZ291dC50c1wiIC8+XG52YXIgZ2lneWFTYW1sO1xuKGZ1bmN0aW9uIChnaWd5YVNhbWwpIHtcbiAgICB2YXIgcHJveHk7XG4gICAgKGZ1bmN0aW9uIChwcm94eSkge1xuICAgICAgICBmdW5jdGlvbiBwcm9jZXNzUmVxdWVzdChhY3Rpb24sIGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgIGFjdGlvbi5tb2RlID0gYWN0aW9uLm1vZGUgfHwgcHJveHkuUHJveHlNb2RlLmFmdGVyTG9naW47XG4gICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbi5tb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gU1NPIC0gc3AgaW5pdGlhdGVkIGxvZ2luXG4gICAgICAgICAgICAgICAgY2FzZSBwcm94eS5Qcm94eU1vZGUubG9naW46XG4gICAgICAgICAgICAgICAgICAgIHByb3h5LnByb2Nlc3NMb2dpbihhY3Rpb24sIGNvbmZpZ3VyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHByb3h5LlByb3h5TW9kZS5mb3JjZUxvZ2luOlxuICAgICAgICAgICAgICAgICAgICBwcm94eS5wcm9jZXNzRm9yY2VMb2dpbihhY3Rpb24sIGNvbmZpZ3VyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHByb3h5LlByb3h5TW9kZS5hZnRlckxvZ2luOlxuICAgICAgICAgICAgICAgICAgICBwcm94eS5wcm9jZXNzQWZ0ZXJMb2dpbihhY3Rpb24sIGNvbmZpZ3VyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHByb3h5LlByb3h5TW9kZS5wYXNzaXZlTG9naW46XG4gICAgICAgICAgICAgICAgICAgIHByb3h5LnByb2Nlc3NQYXNzaXZlTG9naW4oYWN0aW9uLCBjb25maWd1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gU1NPIC0gaWRwIGluaXRpYXRlZCBsb2dpblxuICAgICAgICAgICAgICAgIGNhc2UgcHJveHkuUHJveHlNb2RlLmluaXRTU086XG4gICAgICAgICAgICAgICAgICAgIHByb3h5LnByb2Nlc3NJbml0U1NPKGFjdGlvbiwgY29uZmlndXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIFNMTyAtIHNwIGluaXRpYXRlZCBsb2dvdXRcbiAgICAgICAgICAgICAgICBjYXNlIHByb3h5LlByb3h5TW9kZS5sb2dvdXQ6XG4gICAgICAgICAgICAgICAgICAgIHByb3h5LnByb2Nlc3NMb2dvdXQoYWN0aW9uLCBjb25maWd1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIG1vZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwcm94eS5wcm9jZXNzUmVxdWVzdCA9IHByb2Nlc3NSZXF1ZXN0O1xuICAgICAgICBwcm94eS5ib290c3RyYXAocHJvY2Vzc1JlcXVlc3QpO1xuICAgIH0pKHByb3h5ID0gZ2lneWFTYW1sLnByb3h5IHx8IChnaWd5YVNhbWwucHJveHkgPSB7fSkpO1xufSkoZ2lneWFTYW1sIHx8IChnaWd5YVNhbWwgPSB7fSkpOyJdLCJzb3VyY2VSb290IjoiIn0=