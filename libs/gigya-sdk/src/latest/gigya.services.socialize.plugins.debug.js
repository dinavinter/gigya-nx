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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/utils/Gigya.Js.Plugins.Debug/app/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = __webpack_provided_Object_dot_assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = gigya.Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new gigya.Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? gigya.Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new gigya.Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { gigya.Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/accounts/constants.ts":
/*!***********************************!*\
  !*** ./src/accounts/constants.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var EditableTfaProvidersTypes;
(function (EditableTfaProvidersTypes) {
    EditableTfaProvidersTypes[EditableTfaProvidersTypes["gigyaPhone"] = 0] = "gigyaPhone";
    EditableTfaProvidersTypes[EditableTfaProvidersTypes["gigyaTotp"] = 1] = "gigyaTotp";
    EditableTfaProvidersTypes[EditableTfaProvidersTypes["gigyaPush"] = 2] = "gigyaPush";
    EditableTfaProvidersTypes[EditableTfaProvidersTypes["livelink"] = 3] = "livelink";
})(EditableTfaProvidersTypes = exports.EditableTfaProvidersTypes || (exports.EditableTfaProvidersTypes = {}));
exports.gigyaAssertionExpiration = 60 * 5 * 1000;
exports.sensitiveParamsOverride = 'login_token';
exports.GIGYA_PARAM_PREFIX = 'gig_';
exports.GIGYA_INTERNAL_PARAM_PREFIX = exports.GIGYA_PARAM_PREFIX + "i_";
exports.GIGYA_INTERNAL_PARAMS = exports.GIGYA_PARAM_PREFIX + "actions";


/***/ }),

/***/ "./src/core/Gigya.Js.Adapters.Web/app/SsoService.ts":
/*!**********************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Web/app/SsoService.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var sso_1 = __webpack_require__(/*! src/fidm/Gigya.JS.SSO/app/sso */ "./src/fidm/Gigya.JS.SSO/app/sso.ts");
var domains_1 = __webpack_require__(/*! ../../Gigya.Js/app/Utils/domains */ "./src/core/Gigya.Js/app/Utils/domains.ts");
var utils_1 = __webpack_require__(/*! ../../ServiceProxy/utils */ "./src/core/ServiceProxy/utils.ts");
var FlagService_1 = __webpack_require__(/*! ../../Gigya.Js/app/Services/FlagService */ "./src/core/Gigya.Js/app/Services/FlagService.ts");
var ServiceProxy_1 = __webpack_require__(/*! ../../ServiceProxy/ServiceProxy */ "./src/core/ServiceProxy/ServiceProxy.ts");
// ### Single Sign On across multiple domains ###
var callbackCounter = 0;
exports._requestTimeout = 3000;
var SsoService = /** @class */ (function () {
    function SsoService() {
    }
    SsoService.getInstance = function (ssoKey) {
        if (ssoKey === void 0) { ssoKey = window.gigya.partnerSettings.ssoKey; }
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var qs, url, ssoAdapter, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._instance) return [3 /*break*/, 7];
                        if (!!ssoKey) return [3 /*break*/, 1];
                        return [2 /*return*/, null];
                    case 1:
                        if (!FlagService_1.FlagService.loadSsoFrameOnlyOnce) return [3 /*break*/, 6];
                        qs = window.gigya.utils.keyValue.serialize({
                            APIKey: ssoKey,
                            version: window.gigya.build.version,
                            build: window.gigya.build.number || -1,
                            sourceKey: window.gigya.thisScript.APIKey,
                            oneFrame: true,
                            origin: window.gigya.localInfo.protocol + "://" + document.location.hostname,
                            ssoSegment: window.gigya.partnerSettings.ssoSegment || ''
                        });
                        url = "https://" + domains_1.getStorageDomain() + "/gs/sso.htm?" + qs;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        ssoAdapter = new ServiceProxy_1.ServiceProxy(url);
                        return [4 /*yield*/, ssoAdapter.init('SSO')];
                    case 3:
                        _a.sent();
                        this._instance = ssoAdapter.wrapWith(sso_1.Sso);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        window.gigya.logger.error("error initialize sso frame", {
                            scope: 'SsoService.init',
                            error: error_1
                        });
                        this._instance = new SsoService();
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        this._instance = new SsoService();
                        _a.label = 7;
                    case 7: return [2 /*return*/, this._instance];
                }
            });
        });
    };
    SsoService.prototype.checkTokenRenew = function (loginToken) {
        return new gigya.Promise(function (resolve) {
            checkTokenRenew({ loginToken: loginToken, callback: resolve });
        });
    };
    SsoService.prototype.getToken = function () {
        return new gigya.Promise(function (resolve) {
            getGroupToken({ callback: resolve });
        });
    };
    SsoService.prototype.getTokenExpiration = function () {
        return new gigya.Promise(function (resolve) {
            getLoginTokenExp({
                callback: resolve
            });
        });
    };
    SsoService.prototype.logout = function () {
        return new gigya.Promise(function (resolve) {
            logout({
                callback: resolve
            });
        });
    };
    SsoService.prototype.removeToken = function () {
        return new gigya.Promise(function (resolve) {
            removeGroupToken({ callback: resolve });
        });
    };
    SsoService.prototype.setGroupContext = function (groupContext) {
        return new gigya.Promise(function (resolve) {
            setGroupContextCookie({ groupContext: groupContext, callback: resolve });
        });
    };
    SsoService.prototype.setToken = function (lt, expiration, gltexp) {
        return new gigya.Promise(function (resolve) {
            setGroupToken({
                lt: lt, expiration: expiration, gltexp: gltexp, callback: resolve
            });
        });
    };
    SsoService.prototype.setTokenExpiration = function (loginTokenExp, useCache) {
        if (useCache === void 0) { useCache = true; }
        return new gigya.Promise(function (resolve) {
            setLoginTokenExp({
                loginTokenExp: loginTokenExp,
                callback: resolve
            }, useCache);
        });
    };
    SsoService.prototype.syncCanaryIndication = function (isCanary, canaryVersion) {
        return new gigya.Promise(function (resolve) {
            syncCanaryIndication({ isCanary: isCanary, canaryVersion: canaryVersion, callback: resolve });
        });
    };
    SsoService.prototype.getGroupApiDomain = function () {
        return new gigya.Promise(function (resolve) {
            getGroupApiDomain({ callback: resolve });
        });
    };
    SsoService.prototype.setGroupApiDomain = function (domain) {
        return new gigya.Promise(function (resolve) {
            setGroupApiDomain({ callback: resolve, domain: domain });
        });
    };
    return SsoService;
}());
exports.SsoService = SsoService;
function _request(mode, p) {
    if (!window.gigya.partnerSettings.ssoKey) {
        if (p && p.callback) {
            p.callback({});
        }
        return;
    }
    var params;
    if (!p) {
        params = {};
    }
    else {
        // Ensure the params passed are not modified by reference.
        params = window.gigya.utils.object.clone(p);
    }
    var ifr;
    var requestTimeoutId;
    var callback = function (response) {
        window.gigya.logger.debug("cleaning sso iframe");
        // cleanup iframe
        ifr.parentNode.removeChild(ifr);
        clearTimeout(requestTimeoutId);
        // Typecast response.
        if (response) {
            if (response.errorCode && typeof response.errorCode === 'string') {
                response.errorCode = Number(response.errorCode);
            }
            if (response.expires_in && typeof response.expires_in === 'string') {
                response.expires_in = Number(response.expires_in);
            }
        }
        if (p && p.callback) {
            p.callback(response);
        }
    };
    params.m = mode;
    params.d = window.gigya.localInfo.protocol + "://" + document.location.hostname;
    if (document.location.port) {
        params.d += ':' + document.location.port;
    }
    // Chrome caches the fragment when loaded for the first time. workaround:
    params.callbackID = 'gig_sso_cb' + new Date().getTime() + '_' + callbackCounter++;
    params.sAPIKey = window.gigya.thisScript.APIKey;
    params[window.gigya.logger.configKey] = JSON.stringify(window.gigya.logger.getConfig());
    var fragment = window.gigya.utils.keyValue.serialize(params);
    var iframeLoader = function (retries) {
        if (retries === void 0) { retries = 0; }
        window.gigya.utils.xd.addMessageListener(params.callbackID, {}, false, callback, window.gigya._.MessagingMethod.PostMessage);
        ifr = _getIframe(params.callbackID);
        var fnOnLoad = function () {
            requestTimeoutId = setTimeout(function () {
                // total failure
                if (retries <= 0) {
                    window.gigya.logger.error("SSO Communication Timeout", {
                        IE11PrivateMode: window.gigya.localInfo.isIE11 && !window.indexedDB, mode: mode
                    });
                    return;
                }
                // reset
                window.gigya.utils.xd.removeMessageListener(params.callbackID);
                window.gigya.utils.DOM.removeElement(ifr);
                // retry
                iframeLoader(retries - 1);
            }, exports._requestTimeout);
            var qs = window.gigya.utils.keyValue.serialize({
                APIKey: window.gigya.partnerSettings.ssoKey,
                ssoSegment: window.gigya.partnerSettings.ssoSegment || '',
                version: window.gigya.build.version,
                build: window.gigya.build.number || -1,
            });
            // should always load from gigya's domain except when overriden for #50261.
            ifr.src = "https://" + domains_1.getStorageDomain() + "/gs/sso.htm?" + qs + "#" + fragment;
            window.gigya.utils.DOM.removeEventListener(ifr, 'load', fnOnLoad);
        };
        window.gigya.utils.DOM.addEventListener(ifr, 'load', fnOnLoad);
        window.gigya.logger.debug("opening sso iframe", params);
        if (document.body) {
            window.gigya.utils.DOM.appendToBody(ifr);
        }
        else {
            window.gigya.utils.functions.invokeOnPageLoad(function () { return window.gigya.utils.DOM.appendToBody(ifr); });
        }
    };
    iframeLoader(3);
}
exports._request = _request;
function _getIframe(requestId) {
    var ifr;
    if (FlagService_1.FlagService.hideSSOFrame) {
        ifr = utils_1.createIframe('SSO Frame');
    }
    else {
        ifr = document.createElement('iframe');
        // Absolute position with -1000px causes scrolling slowdowns on mobile devices.
        if (window.gigya.localInfo.isIOS || window.gigya.localInfo.isIOSChrome || window.gigya.localInfo.isAndroid) {
            ifr.style.width = '0px';
            ifr.style.height = '0px';
            ifr.style.display = 'none';
        }
        else {
            ifr.style.width = '30px';
            ifr.style.height = '10px';
            ifr.style.position = 'absolute';
            ifr.style.top = '-1000px';
            ifr.style.left = '-1000px';
        }
    }
    ifr.id = 'gig_sso_' + requestId;
    window.gigya.utils.functions.addSrcToIFrameIfNeeded(ifr);
    return ifr;
}
function getGroupToken(params) {
    window.gigya.logger.info("trying to get sso group login token");
    _request('getToken', {
        callback: function (response) {
            exports._storedLoginTokenExp = response.gltexp;
            if (params && params.callback) {
                params.callback(response);
            }
        },
    });
}
exports.getGroupToken = getGroupToken;
function setGroupToken(params) {
    // Add current gltexp cookie to the parameters automatically.
    if (!params.gltexp) {
        params.gltexp = window.gigya.utils.cookie.get("gltexp_" + window.gigya.thisScript.APIKey);
    }
    _request('setToken', params);
}
exports.setGroupToken = setGroupToken;
function logout(params) {
    _request('logout', params);
}
exports.logout = logout;
function removeGroupToken(params) {
    _request('removeToken', params);
}
exports.removeGroupToken = removeGroupToken;
function setLoginTokenExp(params, useCache) {
    if (useCache === void 0) { useCache = true; }
    // Don't store the login token again if we've already stored it.
    if (useCache && exports._storedLoginTokenExp && params.loginTokenExp === exports._storedLoginTokenExp) {
        if (params.callback) {
            params.callback({ gltexp: exports._storedLoginTokenExp });
        }
        return;
    }
    exports._storedLoginTokenExp = params.loginTokenExp;
    _request('setLoginTokenExp', params);
}
exports.setLoginTokenExp = setLoginTokenExp;
function getLoginTokenExp(params) {
    _request('getLoginTokenExp', params);
}
exports.getLoginTokenExp = getLoginTokenExp;
function checkTokenRenew(params) {
    window.gigya.logger.info("verifying login token with sso group");
    _request('checkTokenRenew', params);
}
exports.checkTokenRenew = checkTokenRenew;
function syncCanaryIndication(params) {
    _request('syncCanaryIndication', params);
}
exports.syncCanaryIndication = syncCanaryIndication;
function setGroupContextCookie(params) {
    _request('setGroupContext', params);
}
exports.setGroupContextCookie = setGroupContextCookie;
function setGroupApiDomain(params) {
    _request('setGroupApiDomain', params);
}
exports.setGroupApiDomain = setGroupApiDomain;
function getGroupApiDomain(params) {
    _request('getGroupApiDomain', params);
}
exports.getGroupApiDomain = getGroupApiDomain;


/***/ }),

/***/ "./src/core/Gigya.Js.Adapters.Web/app/TokenStore.ts":
/*!**********************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Web/app/TokenStore.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var SsoService_1 = __webpack_require__(/*! src/core/Gigya.Js.Adapters.Web/app/SsoService */ "./src/core/Gigya.Js.Adapters.Web/app/SsoService.ts");
var GSErrors_1 = __webpack_require__(/*! src/core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var SessionService_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Services/SessionService */ "./src/core/Gigya.Js/app/Services/SessionService.ts");
var FlagService_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Services/FlagService */ "./src/core/Gigya.Js/app/Services/FlagService.ts");
// Load and save tokens based on API keys
var _curSessionExpiration;
var _bearerToken = null;
var _triedGACs = {};
exports.activeNamespaces = {};
function isValidGltExp(gltexp) {
    if (gltexp === void 0) { gltexp = getGltexpCookie(); }
    return !gltexp || window.gigya.utils.gltexp.isValid(gltexp);
}
exports.isValidGltExp = isValidGltExp;
function getGltexpCookie(APIKey) {
    if (APIKey === void 0) { APIKey = window.gigya.thisScript.APIKey; }
    return window.gigya.utils.cookie.get(getGltCookieKey(APIKey));
}
exports.getGltexpCookie = getGltexpCookie;
function setGltexp(gltexp, APIKey) {
    if (APIKey === void 0) { APIKey = window.gigya.thisScript.APIKey; }
    if (gltexp && !isGigyaCookieDomain()) {
        window.gigya.utils.cookie.remove(getGltCookieKey(APIKey));
        if (FlagService_1.FlagService.setCookieSameSiteLaxSession) {
            window.gigya.utils.cookie.set(getGltCookieKey(APIKey), gltexp, null, null, null, 'Lax');
        }
        else {
            window.gigya.utils.cookie.set(getGltCookieKey(APIKey), gltexp);
        }
    }
}
exports.setGltexp = setGltexp;
function getGltCookieKey(APIKey) {
    return "gltexp_" + APIKey;
}
function _getTokenCookieName(APIKey) {
    if (APIKey === void 0) { APIKey = window.gigya.thisScript.APIKey; }
    if (APIKey) {
        return 'glt_' + APIKey;
    }
    else {
        return '_gig_lt';
    }
}
function get(APIKey) {
    if (APIKey === void 0) { APIKey = window.gigya.thisScript.APIKey; }
    var lt = window.gigya.utils.cookie.get(_getTokenCookieName(APIKey));
    if (lt) {
        return lt.split('|')[0];
    }
    else {
        return null;
    }
}
exports.get = get;
function set(APIKey, login_token, expires_in, sessionExpiration) {
    window.gigya.utils.localStorage.removeItem('gigyaSettings');
    window.gigya.logger.info("setting a new login token");
    if (!APIKey) {
        APIKey = window.gigya.thisScript.APIKey;
    }
    if (APIKey) {
        if (FlagService_1.FlagService.setCookieSameSiteLaxSession) {
            window.gigya.utils.cookie.set('glt_' + APIKey, login_token, expires_in, null, null, 'Lax');
        }
        else {
            window.gigya.utils.cookie.set('glt_' + APIKey, login_token, expires_in);
        }
        window.gigya.utils.cookie.remove('gac_' + APIKey);
    }
    else {
        if (FlagService_1.FlagService.setCookieSameSiteLaxSession) {
            window.gigya.utils.cookie.set('_gig_lt', login_token, expires_in, null, null, 'Lax');
        }
        else {
            window.gigya.utils.cookie.set('_gig_lt', login_token, expires_in);
        }
    }
    _curSessionExpiration = sessionExpiration;
}
exports.set = set;
function getCurrentSessionExpiration() {
    return _curSessionExpiration;
}
exports.getCurrentSessionExpiration = getCurrentSessionExpiration;
function getGACCookie() {
    return window.gigya.thisScript.APIKey && window.gigya.utils.cookie.get('gac_' + window.gigya.thisScript.APIKey);
}
exports.getGACCookie = getGACCookie;
function setFromAuthCode(authCode) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, new gigya.Promise(function (resolve) {
                    setFromGAC({}, resolve, authCode);
                })];
        });
    });
}
exports.setFromAuthCode = setFromAuthCode;
function setFromGAC(params, callback, gac) {
    if (gac === void 0) { gac = getGACCookie(); }
    if (window.gigya.thisScript.APIKey) {
        if (gac && !params['neverTryGAC']) {
            // Sometimes gac is set with surrounding double-quotes (like in java). Strip quotes.
            if (gac.charAt(0) === '"' && gac.charAt(gac.length - 1) === '"') {
                gac = gac.substring(1, gac.length - 1);
            }
            if (_triedGACs[gac]) {
                callback(); // Already tried, don't try again.
                return;
            }
            _triedGACs[gac] = true;
            window.gigya.socialize.updateRefUID();
            window.gigya.socialize.notifyLogin({
                ignoreApiQueue: true,
                neverTryGAC: true,
                authCode: gac,
                APIKey: window.gigya.thisScript.APIKey,
                client_id: window.gigya.thisScript.APIKey
            }, {
                // Intentionally we're not raising onLogin event, as no login was made, just established (verified in bug 43419).
                callback: function () {
                    window.gigya.utils.cookie.remove('gac_' + window.gigya.thisScript.APIKey);
                    callback();
                    // neverTryGAC is used to avoid trying setFromGac forever if the cookie wasn't removed (when a wrong baseDomain is used)
                    window.gigya.socialize.refreshUI({
                        neverTryGAC: true
                    });
                },
            });
        }
        else {
            callback();
        }
    }
    else {
        callback();
    }
}
exports.setFromGAC = setFromGAC;
function setFromSsoResponse(res, APIKey) {
    if (APIKey === void 0) { APIKey = window.gigya.thisScript.APIKey; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, new gigya.Promise(function (resolve) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var _a, expires_in, groupContext, gltexpCookieName;
                    return tslib_1.__generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!res)
                                    return [2 /*return*/];
                                _a = res.errorCode;
                                switch (_a) {
                                    case GSErrors_1.GSErrors.UNAUTHORIZED_USER: return [3 /*break*/, 1];
                                    case GSErrors_1.GSErrors.INVALID_TOKEN: return [3 /*break*/, 2];
                                    case GSErrors_1.GSErrors.TOKEN_HAS_RENEWED: return [3 /*break*/, 3];
                                    case GSErrors_1.GSErrors.OK: return [3 /*break*/, 3];
                                    case GSErrors_1.GSErrors.NETWORK_ERROR: return [3 /*break*/, 5];
                                }
                                return [3 /*break*/, 6];
                            case 1:
                                window.gigya.logger.info("no group session found");
                                remove(APIKey);
                                return [3 /*break*/, 7];
                            case 2:
                                window.gigya.logger.info("existing group session was revoked");
                                remove(APIKey);
                                window.gigya.events.global.dispatchWhenHandlerAdded({ eventName: 'accounts.logout' });
                                window.gigya.events.global.dispatchWhenHandlerAdded({ eventName: 'logout' });
                                return [3 /*break*/, 7];
                            case 3:
                                if (!res.login_token)
                                    return [2 /*return*/];
                                window.gigya.logger.info("new session from group");
                                expires_in = void 0;
                                groupContext = void 0;
                                if (res.groupContext) {
                                    groupContext = JSON.parse(res.groupContext);
                                }
                                if (!isGigyaCookieDomain()) {
                                    // It should never expire if a gltexp is present.
                                    expires_in = !res.gltexp ? res.expires_in : window.gigya.utils.cookie.getInfiniteExpirationTimeInSeconds();
                                    // Set login token cookie
                                    set(APIKey, res.login_token, expires_in);
                                    gltexpCookieName = "gltexp_" + APIKey;
                                    if (res.gltexp && !window.gigya.utils.cookie.get(gltexpCookieName)) {
                                        window.gigya.utils.cookie.set(gltexpCookieName, res.gltexp);
                                    }
                                }
                                return [4 /*yield*/, dispatchLoginEvent({ expires_in: expires_in, groupContext: groupContext })];
                            case 4:
                                _b.sent();
                                return [3 /*break*/, 7];
                            case 5:
                                window.gigya.logger.error("gigya: error loading sso frame", { res: res });
                                window.gigya.events.global.dispatchWhenHandlersAdded(['accounts.error', 'socialize.error'], res);
                                return [3 /*break*/, 7];
                            case 6:
                                window.gigya.logger.error("sso: unsupported response");
                                throw 'gigya: unsupported response from sso';
                            case 7:
                                resolve();
                                return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
exports.setFromSsoResponse = setFromSsoResponse;
function dispatchLoginEvent(eventParams) {
    if (eventParams === void 0) { eventParams = {}; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, new gigya.Promise(function (resolve) {
                    window.gigya.utils.queue.hold('verifyLogin', 'API');
                    window.gigya.accounts.verifyLogin({
                        ignoreApiQueue: true,
                        suppressLoginEvent: true,
                        include: window.gigya.utils.stringUtils.mergeCommaSeparatedValues('profile,data', window.gigya.thisScript.globalConf['include']),
                        extraProfileFields: 'samlData',
                        callback: function (accountInfoRes) {
                            window.gigya.utils.queue.release('verifyLogin', 'API'); // release the api queue
                            SessionService_1.sessionData.setIsSessionVerified(get(), accountInfoRes.errorCode == GSErrors_1.GSErrors.OK);
                            // use whatever field you need from accountInfoRes now before accountInfoRes will be overridden (such as 'source')
                            var source = accountInfoRes.source;
                            window.gigya.events.global.dispatchWhenHandlerAdded({ eventName: 'socialize.login' }, null, function (eventObj, callback) {
                                if (!eventObj) {
                                    eventObj = {};
                                }
                                eventObj = window.gigya.utils.object.merge([eventObj, eventParams]);
                                if (accountInfoRes.errorCode == GSErrors_1.GSErrors.OK) {
                                    window.gigya.socialize.getUserInfo({
                                        signIDs: true,
                                        extraFields: 'samlData',
                                        callback: function (userInfoRes) {
                                            if (userInfoRes.errorCode == GSErrors_1.GSErrors.OK) {
                                                eventObj = window.gigya._.addUserInfoToEvent(userInfoRes, { eventName: 'login' }, true);
                                                // normalizing event fields for backwards compatibility
                                                eventObj['source'] = source;
                                                eventObj['newUser'] = false;
                                                eventObj['provider'] = 'site';
                                                eventObj['loginMode'] = 'standard';
                                                if (eventObj['user']) {
                                                    eventObj['user'].errorCode = userInfoRes.errorCode;
                                                    eventObj['user'].callId = userInfoRes.callId;
                                                }
                                                accountInfoRes.id_token && (eventObj['id_token'] = accountInfoRes.id_token);
                                            }
                                            else {
                                                eventObj['cancel'] = true;
                                            }
                                            callback(eventObj);
                                        },
                                    });
                                }
                                else {
                                    eventObj['cancel'] = true;
                                    callback(eventObj);
                                }
                            });
                            window.gigya.events.global.dispatchWhenHandlerAdded({ eventName: 'accounts.login' }, null, function (eventObj, callback) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!eventObj) {
                                                eventObj = {};
                                            }
                                            eventObj = window.gigya.utils.object.merge([eventObj, eventParams]);
                                            if (!(accountInfoRes.errorCode == GSErrors_1.GSErrors.OK)) return [3 /*break*/, 3];
                                            eventObj['eventName'] = 'accounts.login';
                                            if (!!accountInfoRes.UID) return [3 /*break*/, 2];
                                            return [4 /*yield*/, new gigya.Promise(function (r) {
                                                    return window.gigya.accounts.getAccountInfo({
                                                        callback: r,
                                                        include: window.gigya.utils.stringUtils.mergeCommaSeparatedValues('profile,data', window.gigya.thisScript.globalConf['include'])
                                                    });
                                                })];
                                        case 1:
                                            accountInfoRes = _a.sent();
                                            _a.label = 2;
                                        case 2:
                                            window.gigya.utils.object.extractProperties(accountInfoRes, eventObj, 'signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|profile|data|dataCenter|id_token|groups');
                                            return [3 /*break*/, 4];
                                        case 3:
                                            eventObj['cancel'] = true;
                                            _a.label = 4;
                                        case 4:
                                            callback(eventObj);
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            resolve();
                        },
                    });
                })];
        });
    });
}
exports.dispatchLoginEvent = dispatchLoginEvent;
function remove(APIKey) {
    if (APIKey === void 0) { APIKey = window.gigya.thisScript.APIKey; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var service;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (get(APIKey)) {
                        window.gigya.logger.info("removing login token");
                    }
                    window.gigya.utils.cookie.remove("glt_" + APIKey);
                    window.gigya.utils.cookie.remove('_gig_lt');
                    window.gigya.utils.cookie.remove("gltexp_" + APIKey);
                    if (!window.gigya.partnerSettings.ssoKey) return [3 /*break*/, 2];
                    window.gigya.logger.info("removing group login token");
                    return [4 /*yield*/, SsoService_1.SsoService.getInstance()];
                case 1:
                    service = _a.sent();
                    return [2 /*return*/, service.removeToken()];
                case 2: return [2 /*return*/, gigya.Promise.resolve()];
            }
        });
    });
}
exports.remove = remove;
function getTokenParam(APIKey, paramName) {
    var lt = window.gigya.utils.cookie.get(_getTokenCookieName(APIKey));
    if (lt) {
        var ltSegs = lt.split('|');
        if (ltSegs.length > 1) {
            return window.gigya.utils.keyValue.deserialize(ltSegs[1])[paramName];
        }
        else {
            return null;
        }
    }
}
exports.getTokenParam = getTokenParam;
function isGigyaCookieDomain() {
    var cookieDomain = window.gigya.utils.cookie.getDefaultDomain();
    return window.gigya.utils.stringUtils.endsWith(cookieDomain, window.gigya.defaultApiDomain);
}
function setBearerToken(bearerToken) {
    window.gigya.logger.info("setting a new Bearer token");
    _bearerToken = 'Bearer ' + bearerToken;
}
exports.setBearerToken = setBearerToken;
function getBearerToken() {
    return _bearerToken;
}
exports.getBearerToken = getBearerToken;
function removeBearerToken() {
    window.gigya.logger.info("Bearer token removed");
    _bearerToken = null;
}
exports.removeBearerToken = removeBearerToken;


/***/ }),

/***/ "./src/core/Gigya.Js/app/GSErrors.ts":
/*!*******************************************!*\
  !*** ./src/core/Gigya.Js/app/GSErrors.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var GSErrors;
(function (GSErrors) {
    GSErrors[GSErrors["OK"] = 0] = "OK";
    GSErrors[GSErrors["Data_Pending"] = 100001] = "Data_Pending";
    GSErrors[GSErrors["NETWORK_ERROR"] = 500026] = "NETWORK_ERROR";
    GSErrors[GSErrors["DATA_PENDING"] = 100001] = "DATA_PENDING";
    GSErrors[GSErrors["OPERATION_CANCELED"] = 200001] = "OPERATION_CANCELED";
    GSErrors[GSErrors["PERMISSION_GRANTED"] = 200002] = "PERMISSION_GRANTED";
    GSErrors[GSErrors["PERMISSION_NOT_GRANTED"] = 200003] = "PERMISSION_NOT_GRANTED";
    GSErrors[GSErrors["REDIRECT"] = 200004] = "REDIRECT";
    GSErrors[GSErrors["NEW_USER"] = 200005] = "NEW_USER";
    GSErrors[GSErrors["OPERATION_DONE"] = 200006] = "OPERATION_DONE";
    GSErrors[GSErrors["UPDATE_USER"] = 200007] = "UPDATE_USER";
    GSErrors[GSErrors["OK_WITH_ERRORS"] = 200008] = "OK_WITH_ERRORS";
    GSErrors[GSErrors["ACCOUNTS_LINKED"] = 200009] = "ACCOUNTS_LINKED";
    GSErrors[GSErrors["OK_WITH_ERROR_LOGIN_IDENTIFIER_EXISTS"] = 200010] = "OK_WITH_ERROR_LOGIN_IDENTIFIER_EXISTS";
    GSErrors[GSErrors["ACCOUNT_PENDING_REGISTRATION"] = 206001] = "ACCOUNT_PENDING_REGISTRATION";
    GSErrors[GSErrors["ACCOUNT_PENDING_VERIFICATION"] = 206002] = "ACCOUNT_PENDING_VERIFICATION";
    GSErrors[GSErrors["ACCOUNT_MISSING_LOGINID"] = 206003] = "ACCOUNT_MISSING_LOGINID";
    GSErrors[GSErrors["IDENTITY_ALREADY_ASSIGNED"] = 206004] = "IDENTITY_ALREADY_ASSIGNED";
    GSErrors[GSErrors["AFTER_EMAIL_VERIFICATION"] = 206005] = "AFTER_EMAIL_VERIFICATION";
    GSErrors[GSErrors["PENDING_CODE_VERIFICATION"] = 206006] = "PENDING_CODE_VERIFICATION";
    GSErrors[GSErrors["CLIENT_LOG"] = 300001] = "CLIENT_LOG";
    GSErrors[GSErrors["INVALID_DATA_CENTER"] = 301001] = "INVALID_DATA_CENTER";
    GSErrors[GSErrors["INVALID_REQUEST_FORMAT"] = 400001] = "INVALID_REQUEST_FORMAT";
    GSErrors[GSErrors["MISSING_REQUIRED_PARAMETER"] = 400002] = "MISSING_REQUIRED_PARAMETER";
    GSErrors[GSErrors["UNIQUE_IDENTIFIER_EXISTS"] = 400003] = "UNIQUE_IDENTIFIER_EXISTS";
    GSErrors[GSErrors["INVALID_PARAMETER_FORMAT"] = 400004] = "INVALID_PARAMETER_FORMAT";
    GSErrors[GSErrors["INVALID_PARAMETER_VALUE"] = 400006] = "INVALID_PARAMETER_VALUE";
    GSErrors[GSErrors["DUPLICATE_VALUE"] = 400007] = "DUPLICATE_VALUE";
    GSErrors[GSErrors["INVALID_AUTHENTICATION_HEADER"] = 400008] = "INVALID_AUTHENTICATION_HEADER";
    GSErrors[GSErrors["VALIDATION_ERROR"] = 400009] = "VALIDATION_ERROR";
    GSErrors[GSErrors["INVALID_REDIRECT_URI"] = 400011] = "INVALID_REDIRECT_URI";
    GSErrors[GSErrors["INVALID_RESPONSE_TYPE"] = 400012] = "INVALID_RESPONSE_TYPE";
    GSErrors[GSErrors["UNSUPPORTED_GRANT_TYPE"] = 400013] = "UNSUPPORTED_GRANT_TYPE";
    GSErrors[GSErrors["INVALID_GRANT"] = 400014] = "INVALID_GRANT";
    GSErrors[GSErrors["CODE_EXPIRED"] = 400015] = "CODE_EXPIRED";
    GSErrors[GSErrors["SCHEMA_VALIDATION_FAILED"] = 400020] = "SCHEMA_VALIDATION_FAILED";
    GSErrors[GSErrors["CAPTCHA_VERIFICATION_FAILED"] = 400021] = "CAPTCHA_VERIFICATION_FAILED";
    GSErrors[GSErrors["UNIQUE_INDEX_VALIDATION_ERROR"] = 400022] = "UNIQUE_INDEX_VALIDATION_ERROR";
    GSErrors[GSErrors["INVALID_TYPE_VALIDATION_ERROR"] = 400023] = "INVALID_TYPE_VALIDATION_ERROR";
    GSErrors[GSErrors["DYNAMIC_FIELDS_VALIDATION_ERROR"] = 400024] = "DYNAMIC_FIELDS_VALIDATION_ERROR";
    GSErrors[GSErrors["WRITE_ACCESS_VALIDATION_ERROR"] = 400025] = "WRITE_ACCESS_VALIDATION_ERROR";
    GSErrors[GSErrors["INVALID_FORMAT_VALIDATION_ERROR"] = 400026] = "INVALID_FORMAT_VALIDATION_ERROR";
    GSErrors[GSErrors["REQUIRED_VALUE_VALIDATION_ERROR"] = 400027] = "REQUIRED_VALUE_VALIDATION_ERROR";
    GSErrors[GSErrors["EMAIL_NOT_VERIFIED"] = 400028] = "EMAIL_NOT_VERIFIED";
    GSErrors[GSErrors["SCHEMA_CONFLICT_ERROR"] = 400029] = "SCHEMA_CONFLICT_ERROR";
    GSErrors[GSErrors["OPERATION_NOT_ALLOWED"] = 400030] = "OPERATION_NOT_ALLOWED";
    GSErrors[GSErrors["SECURITY_VERIFICATION_FAILED"] = 400050] = "SECURITY_VERIFICATION_FAILED";
    GSErrors[GSErrors["INVALID_APIKEY_PARAMETER"] = 400093] = "INVALID_APIKEY_PARAMETER";
    GSErrors[GSErrors["NOT_SUPPORTED"] = 400096] = "NOT_SUPPORTED";
    GSErrors[GSErrors["UNSUPPORTED_USER_AGENT"] = 400097] = "UNSUPPORTED_USER_AGENT";
    GSErrors[GSErrors["NO_PROVIDERS"] = 400100] = "NO_PROVIDERS";
    GSErrors[GSErrors["POPUP_BLOCKED"] = 400101] = "POPUP_BLOCKED";
    GSErrors[GSErrors["INVALID_EVENT_HANDLER"] = 400102] = "INVALID_EVENT_HANDLER";
    GSErrors[GSErrors["INVALID_CONTAINERID"] = 400103] = "INVALID_CONTAINERID";
    GSErrors[GSErrors["NOT_CONNECTED"] = 400106] = "NOT_CONNECTED";
    GSErrors[GSErrors["INVALID_SITE_DOMAIN"] = 400120] = "INVALID_SITE_DOMAIN";
    GSErrors[GSErrors["PROVIDER_CONFIGURATION_ERROR"] = 400122] = "PROVIDER_CONFIGURATION_ERROR";
    GSErrors[GSErrors["LIMIT_REACHED"] = 400124] = "LIMIT_REACHED";
    GSErrors[GSErrors["FREQUENCY_LIMIT_REACHED"] = 400125] = "FREQUENCY_LIMIT_REACHED";
    GSErrors[GSErrors["INVALID_ACTION"] = 400126] = "INVALID_ACTION";
    GSErrors[GSErrors["INSUFFICIENT_POINTS_TO_REDEEM"] = 400127] = "INSUFFICIENT_POINTS_TO_REDEEM";
    GSErrors[GSErrors["SIGNATURE_TIMESTAMP_EXPIRED"] = 400128] = "SIGNATURE_TIMESTAMP_EXPIRED";
    GSErrors[GSErrors["Error_During_Extensions_Operation"] = 400302] = "Error_During_Extensions_Operation";
    GSErrors[GSErrors["Extension_Point_Custom_Error"] = 400303] = "Extension_Point_Custom_Error";
    GSErrors[GSErrors["INVALID_POLICY_CONFIGURATION"] = 401000] = "INVALID_POLICY_CONFIGURATION";
    GSErrors[GSErrors["SUSPECTED_SPAM"] = 401010] = "SUSPECTED_SPAM";
    GSErrors[GSErrors["LOGIN_FAILED_CAPTCHA_REQUIRED"] = 401020] = "LOGIN_FAILED_CAPTCHA_REQUIRED";
    GSErrors[GSErrors["REQUEST_FAILED_CAPTCHA_REQUIRED"] = 401023] = "REQUEST_FAILED_CAPTCHA_REQUIRED";
    GSErrors[GSErrors["LOGIN_FAILED_WRONG_CAPTCHA"] = 401021] = "LOGIN_FAILED_WRONG_CAPTCHA";
    GSErrors[GSErrors["OLD_PASSWORD_USED"] = 401030] = "OLD_PASSWORD_USED";
    GSErrors[GSErrors["FORBIDDEN"] = 403000] = "FORBIDDEN";
    GSErrors[GSErrors["INVALID_SESSION_TOKEN"] = 403001] = "INVALID_SESSION_TOKEN";
    GSErrors[GSErrors["REQUEST_HAS_EXPIRED"] = 403002] = "REQUEST_HAS_EXPIRED";
    GSErrors[GSErrors["INVALID_REQUEST_SIGNATURE"] = 403003] = "INVALID_REQUEST_SIGNATURE";
    GSErrors[GSErrors["DUPLICATE_NONCE"] = 403004] = "DUPLICATE_NONCE";
    GSErrors[GSErrors["UNAUTHORIZED_USER"] = 403005] = "UNAUTHORIZED_USER";
    GSErrors[GSErrors["SENSITIVE_DATA_SENT_OVER_HTTP"] = 403006] = "SENSITIVE_DATA_SENT_OVER_HTTP";
    GSErrors[GSErrors["PERMISSION_DENIED"] = 403007] = "PERMISSION_DENIED";
    GSErrors[GSErrors["INVALID_OPENID_URL"] = 403008] = "INVALID_OPENID_URL";
    GSErrors[GSErrors["PROVIDER_SESSION_EXPIRED"] = 403009] = "PROVIDER_SESSION_EXPIRED";
    GSErrors[GSErrors["INVALID_SECRET"] = 403010] = "INVALID_SECRET";
    GSErrors[GSErrors["SESSION_HAS_EXPIRED"] = 403011] = "SESSION_HAS_EXPIRED";
    GSErrors[GSErrors["NO_VALID_SESSION"] = 403012] = "NO_VALID_SESSION";
    GSErrors[GSErrors["UNVERIFIED_USER"] = 403013] = "UNVERIFIED_USER";
    GSErrors[GSErrors["MISSING_REQUEST_REFERRER"] = 403015] = "MISSING_REQUEST_REFERRER";
    GSErrors[GSErrors["UNEXPECTED_PROVIDER_USER"] = 403017] = "UNEXPECTED_PROVIDER_USER";
    GSErrors[GSErrors["PERMISSION_NOT_REQUESTED"] = 403022] = "PERMISSION_NOT_REQUESTED";
    GSErrors[GSErrors["NO_USER_PERMISSION"] = 403023] = "NO_USER_PERMISSION";
    GSErrors[GSErrors["PROVIDER_LIMIT_REACHED"] = 403024] = "PROVIDER_LIMIT_REACHED";
    GSErrors[GSErrors["INVALID_TOKEN"] = 403025] = "INVALID_TOKEN";
    GSErrors[GSErrors["UNAUTHORIZED_ACCESS_ERROR"] = 403026] = "UNAUTHORIZED_ACCESS_ERROR";
    GSErrors[GSErrors["DIFFERENT_USER_FOR_REAUTH"] = 403027] = "DIFFERENT_USER_FOR_REAUTH";
    GSErrors[GSErrors["SESSION_EXPIRED_RETRY"] = 403030] = "SESSION_EXPIRED_RETRY";
    GSErrors[GSErrors["APPROVED_BY_MODERATOR"] = 403031] = "APPROVED_BY_MODERATOR";
    GSErrors[GSErrors["TOKEN_HAS_RENEWED"] = 403032] = "TOKEN_HAS_RENEWED";
    GSErrors[GSErrors["NO_USER_COOKIE"] = 403035] = "NO_USER_COOKIE";
    GSErrors[GSErrors["UNAUTHORIZED_PARTNER"] = 403036] = "UNAUTHORIZED_PARTNER";
    GSErrors[GSErrors["POST_DENIED"] = 403037] = "POST_DENIED";
    GSErrors[GSErrors["NO_LOGIN_TICKET"] = 403040] = "NO_LOGIN_TICKET";
    GSErrors[GSErrors["ACCOUNT_DISABLED"] = 403041] = "ACCOUNT_DISABLED";
    GSErrors[GSErrors["INVALID_LOGINID"] = 403042] = "INVALID_LOGINID";
    GSErrors[GSErrors["LOGIN_IDENTIFIER_EXISTS"] = 403043] = "LOGIN_IDENTIFIER_EXISTS";
    GSErrors[GSErrors["UNDERAGE_USER"] = 403044] = "UNDERAGE_USER";
    GSErrors[GSErrors["INVALID_SITE_CONFIGURATION_ERROR"] = 403045] = "INVALID_SITE_CONFIGURATION_ERROR";
    GSErrors[GSErrors["LOGINID_DOES_NOT_EXIST"] = 403047] = "LOGINID_DOES_NOT_EXIST";
    GSErrors[GSErrors["API_RATE_LIMIT_EXCEEDED"] = 403048] = "API_RATE_LIMIT_EXCEEDED";
    GSErrors[GSErrors["PENDING_PASSWORD_CHANGE"] = 403100] = "PENDING_PASSWORD_CHANGE";
    GSErrors[GSErrors["ACCOUNT_PENDING_TFA_VERIFICATION"] = 403101] = "ACCOUNT_PENDING_TFA_VERIFICATION";
    GSErrors[GSErrors["ACCOUNT_PENDING_TFA_REGISTRATION"] = 403102] = "ACCOUNT_PENDING_TFA_REGISTRATION";
    GSErrors[GSErrors["ACCOUNT_PENDING_RECENT_LOGIN"] = 403110] = "ACCOUNT_PENDING_RECENT_LOGIN";
    GSErrors[GSErrors["ACCOUNT_TEMPORARILY_LOCKED_OUT"] = 403120] = "ACCOUNT_TEMPORARILY_LOCKED_OUT";
    GSErrors[GSErrors["REDUNDANT_OPERATION"] = 403200] = "REDUNDANT_OPERATION";
    GSErrors[GSErrors["INVALID_APPLICATION_ID"] = 403201] = "INVALID_APPLICATION_ID";
    GSErrors[GSErrors["NOT_FOUND"] = 404000] = "NOT_FOUND";
    GSErrors[GSErrors["FRIEND_NOT_FOUND"] = 404001] = "FRIEND_NOT_FOUND";
    GSErrors[GSErrors["CATEGORY_NOT_FOUND"] = 404002] = "CATEGORY_NOT_FOUND";
    GSErrors[GSErrors["UID_NOT_FOUND"] = 404003] = "UID_NOT_FOUND";
    GSErrors[GSErrors["RESOURCE_NOT_FOUND"] = 404004] = "RESOURCE_NOT_FOUND";
    GSErrors[GSErrors["INVALID_API_METHOD"] = 405001] = "INVALID_API_METHOD";
    GSErrors[GSErrors["IDENTITY_EXISTS"] = 409001] = "IDENTITY_EXISTS";
    GSErrors[GSErrors["GONE"] = 410000] = "GONE";
    GSErrors[GSErrors["REQUEST_ENTITY_TOO_LARGE"] = 413001] = "REQUEST_ENTITY_TOO_LARGE";
    GSErrors[GSErrors["COMMENT_TEXT_TOO_LARGE"] = 413002] = "COMMENT_TEXT_TOO_LARGE";
    GSErrors[GSErrors["OBJECT_TOO_LARGE"] = 413003] = "OBJECT_TOO_LARGE";
    GSErrors[GSErrors["PROFILE_PHOTO_TOO_LARGE"] = 413004] = "PROFILE_PHOTO_TOO_LARGE";
    GSErrors[GSErrors["REQUEST_URI_TOO_LONG"] = 414000] = "REQUEST_URI_TOO_LONG";
    GSErrors[GSErrors["MISSING_USER_PHOTO"] = 409010] = "MISSING_USER_PHOTO";
    GSErrors[GSErrors["COUNTER_NOT_REGISTERED"] = 409011] = "COUNTER_NOT_REGISTERED";
    GSErrors[GSErrors["INVALID_GMID_TICKET"] = 409012] = "INVALID_GMID_TICKET";
    GSErrors[GSErrors["SAML_MAPPED_ATTRIBUTE_NOT_FOUND"] = 409013] = "SAML_MAPPED_ATTRIBUTE_NOT_FOUND";
    GSErrors[GSErrors["SAML_CERTIFICATE_NOT_FOUND"] = 409014] = "SAML_CERTIFICATE_NOT_FOUND";
    GSErrors[GSErrors["SAML_MESSAGE_NOT_FOUND"] = 409015] = "SAML_MESSAGE_NOT_FOUND";
    GSErrors[GSErrors["GENERAL_SERVER_ERROR"] = 500001] = "GENERAL_SERVER_ERROR";
    GSErrors[GSErrors["SERVER_LOGIN_ERROR"] = 500002] = "SERVER_LOGIN_ERROR";
    GSErrors[GSErrors["DEFAULT_APPLICATION_CONFIGURATION_ERROR"] = 500003] = "DEFAULT_APPLICATION_CONFIGURATION_ERROR";
    GSErrors[GSErrors["SESSION_MIGRATION_ERROR"] = 500014] = "SESSION_MIGRATION_ERROR";
    GSErrors[GSErrors["PROVIDER_ERROR"] = 500023] = "PROVIDER_ERROR";
    GSErrors[GSErrors["DATABASE_ERROR"] = 500028] = "DATABASE_ERROR";
    GSErrors[GSErrors["USERNAME_REQUIRED"] = 500029] = "USERNAME_REQUIRED";
    GSErrors[GSErrors["NO_PROVIDER_APPLICATION"] = 500031] = "NO_PROVIDER_APPLICATION";
    GSErrors[GSErrors["LOAD_FAILED"] = 500032] = "LOAD_FAILED";
    GSErrors[GSErrors["INVALID_ENVIRONMENT_CONFIG"] = 500033] = "INVALID_ENVIRONMENT_CONFIG";
    GSErrors[GSErrors["ERROR_DURING_BACKEND_OPERATION"] = 500034] = "ERROR_DURING_BACKEND_OPERATION";
    GSErrors[GSErrors["TIMEOUT"] = 504001] = "TIMEOUT";
    GSErrors[GSErrors["CLIENTTIMEOUT"] = 504002] = "CLIENTTIMEOUT";
    GSErrors[GSErrors["INVALID_URL"] = 404004] = "INVALID_URL";
    GSErrors[GSErrors["MEDIA_ITEMS_NOT_SUPPORTED"] = 401001] = "MEDIA_ITEMS_NOT_SUPPORTED";
    GSErrors[GSErrors["MISSING_ERROR_CODE"] = 599999] = "MISSING_ERROR_CODE";
    GSErrors[GSErrors["THIS_AUTHENTICATION_METHOD_IS_CURRENTLY_DISABLED"] = 403300] = "THIS_AUTHENTICATION_METHOD_IS_CURRENTLY_DISABLED";
    GSErrors[GSErrors["FORCE_LINK_LOGIN_IDENTIFIER_EXISTS"] = 409003] = "FORCE_LINK_LOGIN_IDENTIFIER_EXISTS";
    GSErrors[GSErrors["PASSKEY_AUTHENTICATOR_REGISTERED"] = 400130] = "PASSKEY_AUTHENTICATOR_REGISTERED";
    GSErrors[GSErrors["PASSKEY_ABORTED"] = 400131] = "PASSKEY_ABORTED";
    GSErrors[GSErrors["PASSKEY_ERROR"] = 500131] = "PASSKEY_ERROR";
})(GSErrors = exports.GSErrors || (exports.GSErrors = {}));
var GSErrorDetails;
(function (GSErrorDetails) {
    GSErrorDetails[GSErrorDetails["None"] = 0] = "None";
    GSErrorDetails[GSErrorDetails["Same_password"] = 100001] = "Same_password";
    GSErrorDetails[GSErrorDetails["Invalid_password"] = 100002] = "Invalid_password";
    GSErrorDetails[GSErrorDetails["Invalid_counters_query_with_cursor"] = 100003] = "Invalid_counters_query_with_cursor";
})(GSErrorDetails = exports.GSErrorDetails || (exports.GSErrorDetails = {}));


/***/ }),

/***/ "./src/core/Gigya.Js/app/InternalFlows.ts":
/*!************************************************!*\
  !*** ./src/core/Gigya.Js/app/InternalFlows.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var GSErrors_1 = __webpack_require__(/*! src/core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var tokenStore = __webpack_require__(/*! src/core/Gigya.Js.Adapters.Web/app/TokenStore */ "./src/core/Gigya.Js.Adapters.Web/app/TokenStore.ts");
var localStorageUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/localStorage */ "./src/core/Gigya.Js/app/Utils/localStorage.ts");
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
var URLUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/URL */ "./src/core/Gigya.Js/app/Utils/URL.ts");
var MessagingMethod;
(function (MessagingMethod) {
    MessagingMethod[MessagingMethod["LocalStorageListener"] = 0] = "LocalStorageListener";
    MessagingMethod[MessagingMethod["PostMessage"] = 1] = "PostMessage";
    MessagingMethod[MessagingMethod["Flash"] = 2] = "Flash";
})(MessagingMethod = exports.MessagingMethod || (exports.MessagingMethod = {}));
function checkCompleteRegistration(res, params, methodName, callback) {
    var screenSet;
    var retry;
    var pending = false;
    var providerSessionInfo;
    if (res['errorCode'] == GSErrors_1.GSErrors.AFTER_EMAIL_VERIFICATION) {
        // Handle autoLogin from registration link
        window.gigya.logger.info('finalizing registration after email verification');
        pending = true;
        window.gigya.accounts.finalizeRegistration({
            regToken: res['regToken'],
            ignoreApiQueue: true,
            callback: callback,
        });
    }
    else if (!params['ignoreInterruptions'] &&
        !params['dontHandleScreenSet'] &&
        (((res['regToken'] || params['regToken']) && // has regToken
            (res['errorCode'] == GSErrors_1.GSErrors.OK_WITH_ERROR_LOGIN_IDENTIFIER_EXISTS || // socialLogin/setAccountInfo saved with loginID exist error
                res['errorCode'] == GSErrors_1.GSErrors.FORCE_LINK_LOGIN_IDENTIFIER_EXISTS || //forceLinking loginId exists
                res['errorCode'] == GSErrors_1.GSErrors.LOGIN_IDENTIFIER_EXISTS)) || // loginID exists
            res['errorCode'] == GSErrors_1.GSErrors.ACCOUNT_PENDING_REGISTRATION || // pending registration
            res['errorCode'] == GSErrors_1.GSErrors.ACCOUNT_PENDING_VERIFICATION || // pending email verification
            res['errorCode'] == GSErrors_1.GSErrors.ACCOUNT_MISSING_LOGINID || // pending LoginID
            res['errorCode'] == GSErrors_1.GSErrors.ACCOUNT_PENDING_TFA_VERIFICATION || // pending TFA verification
            res['errorCode'] == GSErrors_1.GSErrors.ACCOUNT_PENDING_TFA_REGISTRATION || // pending TFA registration
            res['errorCode'] == GSErrors_1.GSErrors.ACCOUNT_PENDING_RECENT_LOGIN || // pending recent login
            res['errorCode'] == GSErrors_1.GSErrors.PENDING_PASSWORD_CHANGE || // pending password change
            res['errorCode'] == GSErrors_1.GSErrors.PENDING_CODE_VERIFICATION) // pending code verification
    ) {
        if (res['errorCode'] == GSErrors_1.GSErrors.FORCE_LINK_LOGIN_IDENTIFIER_EXISTS) {
            providerSessionInfo = {
                access_token: res['access_token'],
                provider: res['provider'],
                provider_uid: res['provider_uid'],
                idToken: res['id_token'],
                code: res['code'],
                lastName: res['lastName'],
                firstName: res['firstName'],
            };
        }
        var newModal;
        if (res['errorCode'] == GSErrors_1.GSErrors.ACCOUNT_PENDING_RECENT_LOGIN) {
            retry = true;
            newModal = true;
        }
        if (params['defaultMobileRegScreenSet'] && LocalInfo_1.localInfo.isMobile) {
            screenSet = params['defaultMobileRegScreenSet'];
        }
        else if (params['defaultRegScreenSet']) {
            screenSet = params['defaultRegScreenSet'];
        }
    }
    if (screenSet) {
        window.gigya.logger.info("showing screenset '" + screenSet + "' for errorCode " + res['errorCode']);
        window.gigya.logger.group(screenSet);
        window.gigya.accounts.showScreenSet({
            ignoreApiQueue: true,
            newModal: newModal,
            screenSet: screenSet,
            initialMethod: methodName,
            initialResponse: res,
            suppressLoginEvent: params['suppressLoginEvent'],
            providerSessionInfo: providerSessionInfo,
            onError: function (e) {
                callback(res);
            },
            onHide: function (e) {
                window.gigya.logger.groupEnd(screenSet);
                if (e.reason === 'finished' && e.user) {
                    var successResponse = {
                        errorCode: 0,
                        userInfo: e.user,
                        source: e.source
                    };
                    callback(successResponse, true, retry);
                }
                else {
                    callback(res);
                }
            },
        });
    }
    else if (!pending) {
        callback(res);
    }
}
exports.checkCompleteRegistration = checkCompleteRegistration;
function checkGroupInvitation(params) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var confirmation, screenSet;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!params.invitationId) {
                        window.gigya.events.global.dispatchWhenHandlersAdded(['accounts.error', 'socialize.error'], {
                            status: 'MISSING_REQUIRED_PARAMETER',
                            statusMessage: 'Missing required parameter: invitationId',
                            errorCode: GSErrors_1.GSErrors.MISSING_REQUIRED_PARAMETER,
                            errorMessage: 'Missing required parameter: invitationId'
                        });
                    }
                    return [4 /*yield*/, confirmGroupInvitation(params.invitationId)];
                case 1:
                    confirmation = _a.sent();
                    if (!!confirmation.token) return [3 /*break*/, 2];
                    window.gigya.events.global.dispatchWhenHandlersAdded(['accounts.error', 'socialize.error'], confirmation);
                    return [3 /*break*/, 5];
                case 2:
                    if (!(tokenStore.get() === null)) return [3 /*break*/, 3];
                    window.gigya.accounts.addEventHandlers({
                        onLogin: function () {
                            return tslib_1.__awaiter(this, void 0, void 0, function () {
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, finalizeGroupInvitation(confirmation.token)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        }
                    });
                    screenSet = LocalInfo_1.localInfo.isMobile ? window.gigya.thisScript.globalConf.defaultMobileRegScreenSet : window.gigya.thisScript.globalConf.defaultRegScreenSet;
                    window.gigya.accounts.showScreenSet({
                        ignoreApiQueue: true,
                        screenSet: screenSet
                    });
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, finalizeGroupInvitation(confirmation.token)];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.checkGroupInvitation = checkGroupInvitation;
function confirmGroupInvitation(invitationId) {
    return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, new gigya.Promise(function (resolve) {
                    window.gigya.accounts.groups.invitationConfirm({
                        ignoreApiQueue: true,
                        invitationId: invitationId,
                        callback: resolve
                    });
                })];
        });
    });
}
function finalizeGroupInvitation(token) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, new gigya.Promise(function (resolve) {
                    window.gigya.accounts.groups.finalizeInvitation({
                        ignoreApiQueue: true,
                        token: token,
                        callback: function (result) {
                            if (result.errorCode !== GSErrors_1.GSErrors.OK) {
                                window.gigya.events.global.dispatchWhenHandlersAdded(['accounts.error', 'socialize.error'], result);
                            }
                            else {
                                window.gigya.events.global.dispatchWhenHandlersAdded(['accounts.finalizeGroupInvitation', 'socialize.finalizeGroupInvitation'], result);
                            }
                            resolve();
                        }
                    });
                })];
        });
    });
}
function getGigyaSettings(group) {
    var gigyaSettings = localStorageUtils.getObject('gigyaSettings');
    return JSONUtils.serialize(gigyaSettings[group]);
}
exports.getGigyaSettings = getGigyaSettings;
function setGigyaSettings(group, settings) {
    var _a;
    var gigyaSettings = localStorageUtils.getObject('gigyaSettings', (_a = {}, _a[group] = {}, _a));
    for (var p in settings) {
        gigyaSettings[group][p] = settings[p];
    }
    localStorageUtils.setItem('gigyaSettings', JSONUtils.serialize(gigyaSettings));
}
exports.setGigyaSettings = setGigyaSettings;
function delGigyaSettings(group) {
    if (!group) {
        localStorageUtils.removeItem('gigyaSettings');
    }
    else {
        var gigyaSettings = localStorageUtils.getObject('gigyaSettings');
        if (gigyaSettings) {
            delete gigyaSettings[group];
            localStorageUtils.setItem('gigyaSettings', JSONUtils.serialize(gigyaSettings));
        }
    }
}
exports.delGigyaSettings = delGigyaSettings;
function handleSpecialFields(o) {
    var collection = window.gigya.socialize.Collection;
    var toTyped = function (arr, ctor) {
        var oarr = [];
        var i = 0;
        var el = arr[i];
        while (el) {
            oarr.push(new ctor(el));
            if (oarr[i].identities) {
                convertIdentitiesArrayToObject(oarr[i]);
            }
            el = arr[++i];
        }
        return oarr;
    };
    if (o.photos)
        o.photos = new collection(o.photos, 'photoID');
    if (o.albums)
        o.albums = new collection(o.albums, 'albumID');
    if (o.contacts)
        o.contacts = new collection(toTyped(o.contacts, window.gigya.socialize.Contact), 'email');
    if (o.friend)
        o.friend = new collection(toTyped(o.friend, window.gigya.socialize.Friend), 'UID');
    if (o.user)
        o.user = new window.gigya.socialize.User(o.user);
    if (o.friends && o.friends instanceof Array) {
        var arUIDs = [];
        for (var i = 0; i < o.friends.length; i++) {
            arUIDs.push(o.friends[i].UID);
        }
        o.UIDs = arUIDs.join(',');
        o.friends = new collection(toTyped(o.friends, window.gigya.socialize.Friend), 'UID');
    }
}
exports.handleSpecialFields = handleSpecialFields;
function convertIdentitiesArrayToObject(o) {
    if (o.identities == null) {
        o.identities = {};
        return;
    }
    if (o.identities.constructor != Array) {
        return;
    }
    var identitiesArray = o.identities;
    o.identities = {};
    for (var i = 0; i < identitiesArray.length; i++) {
        o.identities[identitiesArray[i].provider] = new window.gigya.socialize.Identity(identitiesArray[i]);
    }
}
exports.convertIdentitiesArrayToObject = convertIdentitiesArrayToObject;
function addUserInfoToEvent(response, targetObject, addLoginProperties, useBasePhotoURL) {
    var oUser = response['user'] || response['userInfo'];
    if (targetObject == null)
        targetObject = {};
    if (oUser != null) {
        targetObject['user'] = objectUtils.clone(oUser);
        if (response['isLoggedIn'] != null)
            targetObject['user']['isLoggedIn'] = response['isLoggedIn'];
        if (response['isSiteUID'] != null)
            targetObject['user']['isSiteUID'] = response['isSiteUID'];
        if (response['iRank'] != null)
            targetObject['user']['iRank'] = response['iRank'];
    }
    if (addLoginProperties) {
        objectUtils.extractProperties(response, targetObject, 'signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|signKeysUIDSignature|dataCenter|id_token|groups');
        if (targetObject['user'] != null) {
            targetObject['UID'] = oUser.UID;
            targetObject['isSiteUID'] = oUser.isSiteUID;
            // isSiteUID is temporary for https://gigya.my.salesforce.com/5004000000T3qcZ
        }
    }
    return targetObject;
}
exports.addUserInfoToEvent = addUserInfoToEvent;
function sendEmailNative(params) {
    var userAction = params['userAction'] || {};
    var subject = userAction['title'] || '';
    var body = userAction['linkBack'] || '';
    document.location.href = 'mailto:?to=&subject=' + URLUtils.URLEncode(subject) + '&body=' + URLUtils.URLEncode(body);
    window.gigya.socialize.sendEmail(params, { dontSendEmail: true }); // To report that send without sending it
}
exports.sendEmailNative = sendEmailNative;


/***/ }),

/***/ "./src/core/Gigya.Js/app/LocalInfo.ts":
/*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/LocalInfo.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Local environment info (browser, capabilities, hosting domain)
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var userAgent = navigator.userAgent.toLowerCase();
exports.localInfo = {
    baseDomain: '',
    isBrowserSupportsFilesAPI: (function () {
        return typeof FileReader === 'function' || typeof FileReader === 'object';
    })(),
    initTime: new Date(),
    version: 0,
    pageDomain: document.location.hostname,
    protocol: document.location.protocol == 'http:' ? 'http' : 'https',
    userAgent: userAgent,
    isWin: userAgent.indexOf('win') != -1,
    isIE: userAgent.indexOf('msie') != -1 || (userAgent.indexOf('mozilla') != -1 && userAgent.indexOf('trident') != -1),
    isIE6: userAgent.indexOf('msie 6.') != -1,
    isIE7: userAgent.indexOf('msie 7.') != -1,
    isIE8: userAgent.indexOf('msie 8.') != -1,
    isIE9: userAgent.indexOf('msie 9.') != -1,
    isIE10: userAgent.indexOf('msie 10.') != -1,
    isIE11: userAgent.indexOf('mozilla') != -1 && userAgent.indexOf('trident/7.0') != -1,
    isEdgeLegacy: userAgent.indexOf('edge') != -1,
    isEdge: RegExp(/edg(?!e)/).test(userAgent),
    isIOS: userAgent.indexOf('iphone') != -1 || userAgent.indexOf('ipad') != -1 || userAgent.indexOf('ipod') != -1,
    isSafari534: userAgent.indexOf('safari/534') != -1,
    isWeChat: userAgent.indexOf('micromessenger') != -1,
    iosVersion: (function () {
        if (userAgent.indexOf('applewebkit') != -1 && userAgent.indexOf('version/') != -1) {
            return parseInt(userAgent.split('version/')[1].split(' ')[0]);
        }
        else
            return 0;
    })(),
    isAndroid: userAgent.indexOf('android') != -1,
    isAndroidBrowser: (function (userAgent) {
        if (userAgent.indexOf('mozilla/5.0') === -1)
            return false;
        if (userAgent.indexOf('android 4') === -1)
            return false;
        if (userAgent.indexOf('applewebkit') === -1)
            return false;
        if (userAgent.indexOf('windows phone') !== -1)
            return false;
        // Special user agents found so far that violate the existance of chrome rule
        // Bug 38367 Android Browser: Mozilla/5.0 (Linux; Android 4.2.2; en-us; SAMSUNG GT-I9500 Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Version/1.0 Chrome/18.0.1025.308 Mobile Safari/535.19
        // Bug 40209 Chrome Browser: Mozilla/5.0 (Linux; Android 4.2.2; SAMSUNG SGT-I747 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.93 Mobile Safari/537.36
        // Windows Phone Browser: Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 920) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537
        // Chrome Browser: Mozilla/5.0 (Linux; Android 4.2.2; en-gb; SAMSUNG GT-I9500 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/1.5 Chrome/28.0.1500.94 Mobile Safari/537.36
        var chromeInfo = /chrome\/(\d+)/.exec(userAgent);
        if (!chromeInfo)
            return true;
        var chromeVersion = parseInt(chromeInfo[1]);
        return chromeVersion < 20;
    })(userAgent),
    currentBrowser: '',
    androidVersion: (function () {
        if (userAgent.indexOf('android') != -1) {
            return parseFloat(userAgent.slice(userAgent.indexOf('android') + 8));
        }
        else
            return 0;
    })(),
    isChrome: userAgent.indexOf('chrome') != -1 && userAgent.indexOf('edg') == -1,
    isGoogleBot: userAgent.indexOf('googlebot') != -1,
    isFF: userAgent.indexOf('firefox') != -1,
    isOpera: userAgent.indexOf('opera') != -1,
    isSafari: navigator.appVersion &&
        navigator.appVersion.toLowerCase().indexOf('safari') != -1 &&
        navigator.appVersion.toLowerCase().indexOf('chrome') == -1 &&
        userAgent.indexOf('android') == -1,
    isIOSWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
    isIOSChrome: userAgent.indexOf('crios') != -1,
    isMAC: navigator.appVersion && navigator.appVersion.toLowerCase().indexOf('mac') != -1,
    isWindowsPhone: userAgent.indexOf('windows phone') != -1,
    isFacebookBrowser: userAgent.indexOf('fban') != -1 || userAgent.indexOf('fbav') != -1,
    supportsPostMessage: window.postMessage != null && (userAgent.indexOf('msie') == -1 || userAgent.indexOf('iemobile') != -1),
    supportsLocalStorage: false,
    supportsSessionStorage: false,
    supportsFlash: (function () {
        // http://stackoverflow.com/questions/998245/how-can-i-detect-if-flash-is-installed-and-if-not-display-a-hidden-div-that-inf
        var supportsFlash = false;
        try {
            if (navigator.mimeTypes &&
                navigator.mimeTypes['application/x-shockwave-flash'] != undefined &&
                navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
                supportsFlash = true;
            }
            else {
                var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                if (fo) {
                    supportsFlash = true;
                }
            }
        }
        catch (e) { }
        return supportsFlash;
    })(),
    quirksMode: document.compatMode == 'BackCompat' && userAgent.indexOf('msie') != -1,
    backCompat: document.compatMode == 'BackCompat',
    // TODO: Add isTablet function for devices non-Mobile
    isMobile: (function () {
        var mobileClients = [
            'iphone',
            'ipod',
            'android',
            'midp',
            '240x320',
            'blackberry',
            'netfront',
            'nokia',
            'panasonic',
            'portalmmm',
            'sharp',
            'sie-',
            'sonyericsson',
            'symbian',
            'windows ce',
            'benq',
            'mda',
            'mot-',
            'opera mini',
            'philips',
            'pocket pc',
            'sagem',
            'samsung',
            'htc',
        ];
        for (var i in mobileClients) {
            if (userAgent.indexOf(mobileClients[i]) != -1) {
                return true;
            }
        }
        return false;
    })(),
    isMobileApp: (function () {
        if (!document.getElementsByTagName)
            // for old IE
            return false;
        var metaTags = document.getElementsByTagName('meta');
        for (var i = 0; i < metaTags.length; i++) {
            if (metaTags[i].getAttribute('name') == 'viewport') {
                var content = metaTags[i].getAttribute('content');
                if (content && content.indexOf('width=device-width') !== -1)
                    return true;
            }
        }
        return false;
    })(),
    isNativeMobileApp: false,
    isTouch: (function () {
        if ('ontouchstart' in window)
            // works on most browsers
            return true;
        if ('onmsgesturechange' in window) {
            // works on ie10
            // Try to determine if IE is open in metro mode. Metro doesn't allow activeX, that's the best test available as of IE11.
            try {
                new ActiveXObject('htmlfile');
                return false;
            }
            catch (e) {
                return true;
            }
        }
        return false;
    })(),
    isOnLine: function () { return navigator.onLine; },
    messagingMethod: 1
};
var isStorageEnabled = function (storageName) {
    try {
        var storage = window[storageName];
        if (!storage) {
            return false;
        }
        var testName = '_gig_localStorage_test';
        var testValue = 'just checking for localStorage';
        storage.setItem(testName, testValue);
        var result = storage.getItem(testName) === testValue;
        storage.removeItem(testName);
        return result;
    }
    catch (ex) {
        // Reasons:
        // - Inside 3rd party API proxy iFrame.
        // - Safari in incognito mode will error with "quota exceeded".
        // - Chrome with 3rd party cookies disabled will throw an error if you access the window.localStorage object in ANY way.
        return false;
    }
};
exports.localInfo.supportsLocalStorage = isStorageEnabled('localStorage');
exports.localInfo.supportsSessionStorage = isStorageEnabled('sessionStorage');
exports.localInfo.isMAC = exports.localInfo.isMAC && !exports.localInfo.isIOS;
var os = exports.localInfo.isWin
    ? 'windows'
    : exports.localInfo.isWindowsPhone
        ? 'winphone'
        : exports.localInfo.isIOS
            ? 'ios-v' + exports.localInfo.iosVersion
            : exports.localInfo.isMAC
                ? 'mac'
                : exports.localInfo.isAndroid
                    ? 'android'
                    : '';
if (os)
    os += ' ';
var browser = exports.localInfo.isChrome
    ? 'chrome'
    : exports.localInfo.isFF
        ? 'firefox'
        : exports.localInfo.isSafari
            ? 'safari'
            : exports.localInfo.isEdge
                ? 'edge'
                : exports.localInfo.isEdgeLegacy
                    ? 'edge legacy'
                    : exports.localInfo.isIE11
                        ? 'ie11'
                        : exports.localInfo.isIE10
                            ? 'ie10'
                            : exports.localInfo.isIE9
                                ? 'ie9'
                                : exports.localInfo.isIE8
                                    ? 'ie8'
                                    : '';
exports.localInfo.currentBrowser = os + browser;
var ClientFeature = /** @class */ (function () {
    function ClientFeature(navigator, screen) {
        if (navigator === void 0) { navigator = window.gigya._.WindowProvider.navigator(); }
        if (screen === void 0) { screen = window.gigya._.WindowProvider.screen(); }
        this.navigator = navigator;
        this.screen = screen;
        this.collectData();
    }
    ClientFeature.prototype.collectData = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var permissionStatus, state, batteryInfo, _h, charging, chargingTime, dischargingTime, level;
            return tslib_1.__generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        this.userAgent = (_a = this.navigator) === null || _a === void 0 ? void 0 : _a.userAgent;
                        this.plugins = Array.from(((_b = this.navigator) === null || _b === void 0 ? void 0 : _b.plugins) || []).map(function (_a) {
                            var name = _a.name, filename = _a.filename, length = _a.length;
                            return ({ name: name, filename: filename, length: length });
                        });
                        this.localTime = new Date().toLocaleTimeString();
                        this.timezoneOffset = new Date().getTimezoneOffset();
                        return [4 /*yield*/, ((_d = (_c = this.navigator) === null || _c === void 0 ? void 0 : _c.permissions) === null || _d === void 0 ? void 0 : _d.query({ name: 'notifications' }))];
                    case 1:
                        permissionStatus = _j.sent();
                        if (permissionStatus) {
                            state = permissionStatus.state;
                            this.permissionStatus = { state: state };
                        }
                        this.webdriver = (_e = this.navigator) === null || _e === void 0 ? void 0 : _e.webdriver;
                        _h = this.navigator.getBattery;
                        if (!_h) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.navigator.getBattery()];
                    case 2:
                        _h = (_j.sent());
                        _j.label = 3;
                    case 3:
                        batteryInfo = _h;
                        if (batteryInfo) {
                            charging = batteryInfo.charging, chargingTime = batteryInfo.chargingTime, dischargingTime = batteryInfo.dischargingTime, level = batteryInfo.level;
                            this.batteryInfo = { charging: charging, chargingTime: chargingTime, dischargingTime: dischargingTime, level: level };
                        }
                        this.features = [
                            ((_f = this.navigator) === null || _f === void 0 ? void 0 : _f.maxTouchPoints) || ((_g = this.navigator) === null || _g === void 0 ? void 0 : _g.msMaxTouchPoints),
                            this.screen.width + "|" + this.screen.height + "|" + this.screen.colorDepth,
                            this.navigator.javaEnabled(),
                            'sendBeacon' in this.navigator
                        ];
                        return [2 /*return*/];
                }
            });
        });
    };
    return ClientFeature;
}());
exports.ClientFeature = ClientFeature;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Services/FlagService.ts":
/*!*******************************************************!*\
  !*** ./src/core/Gigya.Js/app/Services/FlagService.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var FlagService = /** @class */ (function () {
    function FlagService() {
    }
    Object.defineProperty(FlagService, "forceWebSdkBootstrap", {
        get: function () {
            return this.get('forceWebSdkBootstrap');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "useGigyaJsBaseDomain", {
        get: function () {
            return this.get('useGigyaJsBaseDomain');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "hideSSOFrame", {
        get: function () {
            return this.get('hideSSOFrame');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "wcagContrastFix", {
        get: function () {
            return this.get('wcagContrastFix');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "newFormLinkInstanceElement", {
        get: function () {
            return this.get('newFormLinkInstanceElement');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "stopSendingReports", {
        get: function () {
            return this.get('stopSendingReports');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "setGroupApiDomainAfterLogin", {
        get: function () {
            return this.get('setGroupApiDomainAfterLogin');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "useHttpStatusCode", {
        get: function () {
            return this.get('useHttpStatusCode');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "alwaysCheckCookieSave", {
        get: function () {
            return this.get('alwaysCheckCookieSave');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "fixPhoneTFATranslations", {
        get: function () {
            return this.get('fixPhoneTFATranslations');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "loadSsoFrameOnlyOnce", {
        get: function () {
            return this.get('loadSsoFrameOnlyOnce');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "verifyLoginOnlyOnce", {
        get: function () {
            return this.get('verifyLoginOnlyOnce');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "sendLangForEmailOTP", {
        get: function () {
            return this.get('sendLangForEmailOTP');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "setProviderFromResponse", {
        get: function () {
            return this.get('setProviderFromResponse');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "setCookieSameSiteLaxSession", {
        get: function () {
            return this.get('setCookieSameSiteLaxSession');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "setCookieSameSiteLaxSocial", {
        get: function () {
            return this.get('setCookieSameSiteLaxSocial');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "setCookieSameSiteLaxLowPriority", {
        get: function () {
            return this.get('setCookieSameSiteLaxLowPriority');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "forceErrorReport", {
        get: function () {
            return this.get('forceErrorReport');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "skipSameScreenCheckOnSwitch", {
        get: function () {
            return this.get('skipSameScreenCheckOnSwitch');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "getOnlyVisibleField", {
        get: function () {
            return this.get('getOnlyVisibleField');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "updateAccountInfoAsync", {
        get: function () {
            return this.get('updateAccountInfoAsync');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "sanitizeEvaluatedValue", {
        get: function () {
            return this.get('sanitizeEvaluatedValue');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "useSessionVerify", {
        get: function () {
            return this.get('useSessionVerify');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "useExtendedPhoneNumberRegex", {
        get: function () {
            return this.get('useExtendedPhoneNumberRegex');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "generateNewCodeWcagCompliance", {
        get: function () {
            return this.get('generateNewCodeWcagCompliance');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "enforceAuthFlowRedirectForSocial", {
        get: function () {
            return this.get('enforceAuthFlowRedirectForSocial');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "useDecodeURIComponent", {
        get: function () {
            return this.get('useDecodeURIComponent');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "useOidcGetParamHashOldStyle", {
        get: function () {
            return this.get('useOidcGetParamHashOldStyle');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "useViewportPollerAction", {
        get: function () {
            return this.get('useViewportPollerAction');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "ignoreInterruptionsInOidcPassiveLogin", {
        get: function () {
            return this.get('ignoreInterruptionsInOidcPassiveLogin');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "overrideAllChildContext", {
        get: function () {
            return this.get('overrideAllChildContext');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "dispatchLoginEventWhenHandlerAdded", {
        get: function () {
            return this.get('dispatchLoginEventWhenHandlerAdded');
        },
        enumerable: true,
        configurable: true
    });
    FlagService.get = function (name) {
        var _a, _b;
        return (((_a = window.gigya._.config) === null || _a === void 0 ? void 0 : _a.flags) && ((_b = window.gigya._.config) === null || _b === void 0 ? void 0 : _b.flags[name])) || false;
    };
    Object.defineProperty(FlagService, "apiFlags", {
        // Every flag that is associated with data modification related to the api layer
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    return FlagService;
}());
exports.FlagService = FlagService;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Services/SessionService.ts":
/*!**********************************************************!*\
  !*** ./src/core/Gigya.Js/app/Services/SessionService.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var sessionCache_1 = __webpack_require__(/*! ../Utils/sessionCache */ "./src/core/Gigya.Js/app/Utils/sessionCache.ts");
var object_1 = __webpack_require__(/*! ../Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
var SessionService = /** @class */ (function () {
    function SessionService() {
    }
    SessionService.prototype.isSessionVerified = function (glt, apiKey) {
        if (apiKey === void 0) { apiKey = window.gigya.thisScript.APIKey; }
        var key = this.createKey(glt, apiKey);
        return sessionCache_1.get(key) === 'true';
    };
    SessionService.prototype.setIsSessionVerified = function (glt, verified, apiKey) {
        if (apiKey === void 0) { apiKey = window.gigya.thisScript.APIKey; }
        var key = this.createKey(glt, apiKey);
        sessionCache_1.set(key, "" + verified);
    };
    SessionService.prototype.createKey = function (glt, apiKey) {
        var key = object_1.getMurmurHash(glt + "_" + apiKey, 15).toString();
        return btoa(key);
    };
    return SessionService;
}());
exports.sessionData = new SessionService();


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/JSON.ts":
/*!*********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/JSON.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function serialize(obj, includeFunctions, prettyPrint, l, maxLevel) {
    if (includeFunctions === void 0) { includeFunctions = false; }
    if (prettyPrint === void 0) { prettyPrint = false; }
    if (l === void 0) { l = 0; }
    if (maxLevel === void 0) { maxLevel = 20; }
    if (!window.gigya.localInfo.isIE8) {
        return window['JSON'].stringify(obj);
    }
    else {
        if (!l)
            l = 0;
        if (l > maxLevel)
            return '[Too deep]';
        var prefix = '';
        var newline = '';
        var tab = '';
        if (prettyPrint) {
            tab = '\t';
            newline = '\n';
            for (var i = 0; i < l + 1; i++) {
                prefix += tab;
            }
        }
        var t = typeof obj;
        if (t == 'function') {
            return t.toString();
        }
        if (t != 'object' || obj === null) {
            // simple data type
            if (t == 'string')
                obj = '"' + obj.replace(/(\"|\\)/g, '\\$1').replace(/\r\n|\r|\n/g, '\\n') + '"';
            return String(obj);
        }
        else {
            var n, v, json = [], arr = obj && obj.constructor == Array;
            if (arr) {
                for (var i = 0; i < obj.length; i++) {
                    v = obj[i];
                    t = typeof v;
                    if (v == null || t == 'undefined')
                        v = '';
                    else if (t == 'string')
                        v = '"' + v.replace(/(\"|\\)/g, '\\$1').replace(/\r\n|\r|\n/g, '\\n') + '"';
                    else if (t == 'function') {
                        if (includeFunctions)
                            v = 'Function';
                        else
                            v = '';
                    }
                    else if (v.parentNode && v.innerHTML)
                        v = 'HTMLElement';
                    else if (v.constructor == Date)
                        v = '';
                    else if (t == 'object' && v !== null)
                        v = serialize(v, includeFunctions, prettyPrint, l + 1);
                    if (String(v) != '')
                        json.push(prefix + tab + String(v));
                }
            }
            else {
                for (n in obj) {
                    v = obj[n];
                    t = typeof v;
                    if (v == null || t == 'undefined')
                        v = String(v);
                    else if (t == 'string')
                        v = '"' + v.replace(/(\"|\\)/g, '\\$1').replace(/\r\n|\r|\n/g, '\\n') + '"';
                    else if (t == 'function') {
                        if (includeFunctions) {
                            v = 'Function';
                        }
                        else {
                            v = '';
                        }
                    }
                    else if (v.parentNode && v.innerHTML)
                        v = 'HTMLElement';
                    else if (v.constructor == Date)
                        v = '';
                    else if (t == 'object' && v !== null)
                        v = newline + serialize(v, includeFunctions, prettyPrint, l + 1);
                    if (String(v) != '')
                        json.push(prefix + tab + '"' + n.replace(/(\"|\\)/g, '\\$1').replace(/\r\n|\r|\n/g, '\\n') + '":' + String(v));
                }
            }
            return newline + prefix + (arr ? '[' : '{') + newline + json.join(',' + newline) + newline + prefix + (arr ? ']' : '}');
        }
    }
}
exports.serialize = serialize;
function deserialize(json, defaultValue, scope) {
    // Return default value if is empty string (or similar).
    if (!json || !json.replace(/^\s+|\s+$/g, '')) {
        return defaultValue || {};
    }
    // Attempt to parse. On error, warn in console and return default value.
    try {
        var keys = [];
        var values = [];
        if (scope) {
            for (var key in scope) {
                keys.push(key);
                values.push(scope[key]);
            }
        }
        var fn = eval("(function(" + keys.join(',') + ") { return " + json.trim() + "; })");
        return fn.apply(undefined, values);
    }
    catch (e) {
        console.warn('Error deserializing JavaScript', e);
        return defaultValue || {};
    }
}
exports.deserialize = deserialize;
function parse(json, defaultValue) {
    if (window.gigya.localInfo.isIE8) {
        return deserialize(json, defaultValue);
    }
    else {
        try {
            return window['JSON'].parse(json);
        }
        catch (e) {
            return defaultValue || {};
        }
    }
}
exports.parse = parse;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/URL.ts":
/*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/URL.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ./../../../../accounts/constants */ "./src/accounts/constants.ts");
var keyValueUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/keyValue */ "./src/core/Gigya.Js/app/Utils/keyValue.ts");
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
function URLEncode(value) {
    return encodeURIComponent(value);
}
exports.URLEncode = URLEncode;
function URLDecode(value) {
    return decodeURIComponent(value.replace(/\+/g, ' '));
}
exports.URLDecode = URLDecode;
function URLDecodeRecursive(value) {
    var prevDecodingRes = '';
    var currDecodingRes = value;
    // keep decoding until we can't decode anymore
    while (currDecodingRes != prevDecodingRes) {
        // store the last decoding result
        prevDecodingRes = currDecodingRes;
        // decode the string once again
        currDecodingRes = URLDecode(prevDecodingRes);
    }
    return currDecodingRes;
}
exports.URLDecodeRecursive = URLDecodeRecursive;
function getParamsFromURL(url, keysToLower) {
    if (!url || url.indexOf('?') === -1) {
        return {};
    }
    return keyValueUtils.deserialize(url.split('#')[0].split('?')[1], '&', keysToLower);
}
exports.getParamsFromURL = getParamsFromURL;
function getGigParamsFromURL(config) {
    var _a = config || {}, url = _a.url, paramPrefix = _a.paramPrefix, keysToLower = _a.keysToLower, removePrefix = _a.removePrefix;
    var prefix = paramPrefix || constants_1.GIGYA_PARAM_PREFIX;
    var urlParams = getParamsFromURL(url, keysToLower);
    return Object.keys(urlParams)
        .filter(function (key) { return key.indexOf(prefix) === 0 && key !== prefix; })
        .reduce(function (obj, key) {
        var newKey = removePrefix ? key.slice(4) : key;
        obj[newKey] = urlParams[key];
        return obj;
    }, {});
}
exports.getGigParamsFromURL = getGigParamsFromURL;
function getParamValueFromURL(param, url, defaultValue) {
    if (null == url || '' == url) {
        return defaultValue;
    }
    var iqm = url.indexOf('?');
    if (iqm === -1) {
        return defaultValue;
    }
    var qs = '&' + url.substr(iqm + 1);
    var idx = qs.toLowerCase().indexOf('&' + param.toLowerCase() + '=');
    if (idx === -1) {
        return defaultValue;
    }
    var valAndMore = qs.substr(idx + (1 + param.length + 1)) + '&';
    idx = valAndMore.indexOf('&');
    return valAndMore.substr(0, idx);
}
exports.getParamValueFromURL = getParamValueFromURL;
function addParamsToURL(url, oParams) {
    var params = getParamsFromURL(url);
    objectUtils.add(params, oParams);
    var urlHashSplit = url.split('#');
    var finalUrl = urlHashSplit[0].split('?')[0] + '?' + keyValueUtils.serialize(params, '&');
    if (urlHashSplit.length > 1) {
        finalUrl += '#' + urlHashSplit[1];
    }
    return finalUrl;
}
exports.addParamsToURL = addParamsToURL;
var removeUnacceptableParams = function (params, unacceptableParams) {
    if (!unacceptableParams) {
        return params;
    }
    var validParams = {};
    Object.entries(params || {})
        .filter(function (_a) {
        var paramName = _a[0];
        return !unacceptableParams.test(paramName);
    })
        .forEach(function (_a) {
        var paramName = _a[0], paramValue = _a[1];
        return validParams[paramName] = paramValue;
    });
    return validParams;
};
function getContextParamsFromUrl(config) {
    var _a = config || {}, url = _a.url, paramPrefix = _a.paramPrefix, unacceptableParams = _a.unacceptableParams;
    if (!url) {
        return {};
    }
    var params = window.gigya.utils.URL.getGigParamsFromURL({ url: url, paramPrefix: paramPrefix });
    return removeUnacceptableParams(params, unacceptableParams);
}
exports.getContextParamsFromUrl = getContextParamsFromUrl;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/Uri.ts":
/*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/Uri.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var stringUtilsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/stringUtils */ "./src/core/Gigya.Js/app/Utils/stringUtils.ts");
var Uri = /** @class */ (function () {
    function Uri(url, isAbsolute) {
        if (isAbsolute === void 0) { isAbsolute = true; }
        this._anchor = document.createElement('a');
        var protocol = document.location.protocol == 'http:' ? 'http' : 'https';
        if (isAbsolute && url.indexOf('://') === -1 && url.charAt(0) !== '/')
            url = protocol + "://" + url;
        this._anchor.href = url;
    }
    Object.defineProperty(Uri.prototype, "domain", {
        get: function () {
            return this._anchor.hostname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "path", {
        get: function () {
            return this._anchor.pathname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "href", {
        get: function () {
            return this._anchor.href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "search", {
        get: function () {
            return this._anchor.search.slice(1);
        } // dropping '?'
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "hash", {
        get: function () {
            return this._anchor.hash.slice(1);
        } // dropping '#'
        ,
        enumerable: true,
        configurable: true
    });
    Uri.prototype.toString = function () {
        return this._anchor.href;
    };
    Uri.prototype.addToSearch = function (params) {
        for (var name in params) {
            var val = params[name];
            if ((typeof val == 'boolean' || typeof val == 'number' || typeof val == 'string') && name != 'eventName') {
                var addition = this._anchor.search ? '&' : '';
                this._anchor.search += "" + addition + name + "=" + encodeURIComponent(params[name]);
            }
        }
        return this;
    };
    Uri.prototype.fetch = function (retries) {
        if (retries === void 0) { retries = 0; }
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var _a, e_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 8]);
                        if (!window.fetch) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.browserFetch()];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.xhr()];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/, _a];
                    case 5:
                        e_1 = _b.sent();
                        if (retries <= 0)
                            throw new Error("fetch failed: " + e_1);
                        return [4 /*yield*/, this.delay(1)];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, this.fetch(retries - 1)];
                    case 7: return [2 /*return*/, _b.sent()];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Uri.prototype.isBaseOf = function (url) {
        return Uri.parse(url).isIn(this);
    };
    Uri.prototype.isIn = function (base) {
        if (typeof base === 'string') {
            base = Uri.parse(base);
        }
        return ((this.domain == base.domain || // page is the base domain
            this.isSubDomainOf(base)) && // or sub-domain of it
            (!base.path || this.path.indexOf(base.path) == 0)); // page is also in base's defined path;
    };
    Uri.prototype.isForSubDomains = function () {
        return this.domain.indexOf('.') == 0;
    };
    Uri.prototype.isSubDomainOf = function (base) {
        var domain = '';
        if (!base.isForSubDomains())
            domain = '.';
        domain += base.domain;
        return stringUtilsUtils.endsWith(this.domain, domain);
    };
    Uri.parse = function (url, isAbsolute) {
        if (isAbsolute === void 0) { isAbsolute = true; }
        if (!url)
            return undefined;
        return new Uri(url, isAbsolute);
    };
    Uri.prototype.browserFetch = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var url, response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.toString();
                        return [4 /*yield*/, window.fetch(url)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok)
                            throw new Error("fetch failed");
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    Uri.prototype.xhr = function () {
        var url = this.toString();
        return new gigya.Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.send();
            xhr.onerror = reject;
            xhr.onload = function () {
                if (xhr.readyState !== 4 || xhr.status !== 200) {
                    return reject("xhr failed - " + xhr.status + " - " + xhr.statusText);
                }
                try {
                    var jsonResponse = JSON.parse(xhr.responseText);
                    return resolve(jsonResponse);
                }
                catch (e) {
                    return reject(e);
                }
            };
        });
    };
    Uri.prototype.delay = function (ms) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new gigya.Promise(function (r) { return setTimeout(r, ms); })];
            });
        });
    };
    return Uri;
}());
exports.Uri = Uri;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/cookie.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/cookie.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var global_1 = __webpack_require__(/*! ./global */ "./src/core/Gigya.Js/app/Utils/global.ts");
var CookieUtils = /** @class */ (function () {
    function CookieUtils(_cookieStore) {
        if (_cookieStore === void 0) { _cookieStore = new global_1.CookieStore(); }
        this._cookieStore = _cookieStore;
    }
    CookieUtils.prototype.set = function (name, value, expires_in, cookieDomain, dontUseRootPath, sameSite) {
        if (cookieDomain == null) {
            cookieDomain = this.getDefaultDomain();
        }
        var path = dontUseRootPath ? '' : '/';
        var expireMs = this._getExpirationInMs(expires_in);
        var expires = null;
        if (expireMs != null) {
            expires = new Date();
            expires.setTime(expires.getTime() + expireMs);
        }
        var cookieExist = this._setCookieInternal(name, value, path, expires, cookieDomain, sameSite);
        var shouldCookieExist = !expireMs || expireMs > 0;
        if (shouldCookieExist === cookieExist) {
            return true;
        }
        // If failed to set cookie, retry;
        // it might be because the domain is listed as TLD https://data.iana.org/TLD/tlds-alpha-by-domain.txt
        var pageDomain = LocalInfo_1.localInfo.pageDomain;
        cookieExist = this._setCookieInternal(name, value, path, expires, pageDomain, sameSite);
        return cookieExist === shouldCookieExist;
    };
    CookieUtils.prototype.get = function (name) {
        return this._cookieStore.getCookie(name);
    };
    CookieUtils.prototype.remove = function (name, domain) {
        if (domain === void 0) { domain = LocalInfo_1.localInfo.pageDomain; }
        this._removeFromBaseDomains(name, domain);
        this.set(name, '', -1, '', false);
        this.set(name, '', -1, '', true);
    };
    CookieUtils.prototype.getInfiniteExpirationTimeInSeconds = function () {
        // Set expiration time to 1 years
        return 60 * 60 * 24 * 365;
    };
    CookieUtils.prototype.canSaveCookie = function (cookieDomain) {
        if (cookieDomain === void 0) { cookieDomain = null; }
        try {
            return this.set(CookieUtils.testCookieName, 'true', 1, cookieDomain, null);
        }
        catch (e) {
            // iOS 10 webview throws in some scenarios
            return false;
        }
    };
    CookieUtils.prototype.getDefaultDomain = function (pageDomain, baseDomain) {
        if (pageDomain === void 0) { pageDomain = LocalInfo_1.localInfo.pageDomain; }
        if (baseDomain === void 0) { baseDomain = LocalInfo_1.localInfo.baseDomain || ''; }
        return baseDomain.length > 0 && pageDomain.length >= baseDomain.length && pageDomain.lastIndexOf(baseDomain) === pageDomain.length - baseDomain.length
            ? baseDomain
            : pageDomain;
    };
    CookieUtils.prototype._getExpirationInMs = function (expiresIn) {
        var expireMs;
        if (expiresIn == null || expiresIn === '' || isNaN(expiresIn)) {
            expireMs = 1000 * this.getInfiniteExpirationTimeInSeconds();
        }
        else if (expiresIn == 0) {
            // 0 means Session
            expireMs = null;
        }
        else {
            // Any other value is number of seconds (A negative value would mean expire now!)
            expireMs = expiresIn * 1000;
        }
        return expireMs;
    };
    CookieUtils.prototype._setCookieInternal = function (name, value, path, expires, cookieDomain, sameSiteMode) {
        if (sameSiteMode === void 0) { sameSiteMode = CookieUtils._getSameSiteMode(); }
        var _a;
        var protocol = (_a = LocalInfo_1.localInfo === null || LocalInfo_1.localInfo === void 0 ? void 0 : LocalInfo_1.localInfo.protocol) !== null && _a !== void 0 ? _a : document.location.protocol;
        var isSecured = protocol.indexOf('https') === 0;
        this._cookieStore.setCookie(name, value, {
            path: path,
            expires: expires,
            domain: cookieDomain,
            sameSite: sameSiteMode,
            secure: isSecured
        });
        if (this.get(name)) {
            return true;
        }
        if (!sameSiteMode) {
            //if failed to write cookie without sameSite mode, then stop here
            return false;
        }
        if (sameSiteMode !== 'None') {
            this._fallbackToSameSiteNone(name, value, path, expires, cookieDomain, isSecured);
        }
        if (this.get(name)) {
            this._reportFallback('Setting SameSite=None', { name: name, value: value, sameSiteMode: sameSiteMode });
            return true;
        }
        // If failed to write cookie with sameSite mode, retry without;
        this._cookieStore.setCookie(name, value, {
            path: path,
            expires: expires,
            domain: cookieDomain,
            secure: isSecured
        });
        if (this.get(name)) {
            this._reportFallback('Cookie established only without sameSite mode', { name: name, value: value, sameSiteMode: sameSiteMode });
            return true;
        }
        return false;
    };
    CookieUtils.prototype._removeFromBaseDomains = function (name, domain) {
        var domainParts = domain.split('.');
        // when clearing from a.b.c.d.com --> clear from a.b.c.d.com, b.c.d.com, c.d.com, d.com
        for (var i = 0; i < domainParts.length - 1; i++) {
            var domain_1 = domainParts.slice(i).join('.');
            this.set(name, '', -1, domain_1, false);
            this.set(name, '', -1, domain_1, true);
        }
    };
    CookieUtils._getSameSiteMode = function () {
        if (!CookieUtils._disallowSameSiteMode())
            return 'None';
    };
    CookieUtils._disallowSameSiteMode = function () {
        var _a, _b;
        var protocol = (_a = LocalInfo_1.localInfo === null || LocalInfo_1.localInfo === void 0 ? void 0 : LocalInfo_1.localInfo.protocol) !== null && _a !== void 0 ? _a : document.location.protocol;
        var ua = (_b = LocalInfo_1.localInfo === null || LocalInfo_1.localInfo === void 0 ? void 0 : LocalInfo_1.localInfo.userAgent) !== null && _b !== void 0 ? _b : navigator.userAgent.toLowerCase();
        var isSecured = protocol.indexOf('https') === 0;
        return !isSecured || !ua ||
            // Cover all iOS based browsers here. This includes:
            // - Safari on iOS 12 for iPhone, iPod Touch, iPad
            // - WkWebview on iOS 12 for iPhone, iPod Touch, iPad
            // - Chrome on iOS 12 for iPhone, iPod Touch, iPad
            // All of which are broken by SameSite=None, because they use the iOS networking stack
            ((ua.indexOf('CPU iPhone OS 12') > -1 || ua.indexOf('iPad; CPU OS 12') > -1) ||
                // Cover Mac OS X based browsers that use the Mac OS networking stack. This includes:
                // - Safari on Mac OS X.
                // This does not include:
                // - Chrome on Mac OS X
                // Because they do not use the Mac OS networking stack.
                (ua.indexOf('Macintosh; Intel Mac OS X 10_14') > -1 && ua.indexOf('Version/') > -1 && ua.indexOf('Safari') > -1) ||
                // Cover Chrome 50-69, because some versions are broken by SameSite=None,
                // and none in this range require it.
                // Note: this covers some pre-Chromium Edge versions,
                // but pre-Chromium Edge does not require SameSite=None.
                (ua.indexOf('Chrome/5') > -1 && ua.indexOf('Chrome/6') > -1));
    };
    CookieUtils.prototype._fallbackToSameSiteNone = function (name, value, path, expires, cookieDomain, secure) {
        this._cookieStore.setCookie(name, value, {
            path: path,
            expires: expires,
            domain: cookieDomain,
            sameSite: 'None',
            secure: secure
        });
    };
    CookieUtils.prototype._reportFallback = function (message, details) {
        window.gigya.logger.report("Cookie Policy Fallback: " + message, tslib_1.__assign(tslib_1.__assign({}, details), { isIframe: this._isIFrame() }), false);
    };
    CookieUtils.prototype._isIFrame = function () {
        var _a;
        try {
            return (window === null || window === void 0 ? void 0 : window.location) !== ((_a = window === null || window === void 0 ? void 0 : window.parent) === null || _a === void 0 ? void 0 : _a.location);
        }
        catch (e) {
            return true;
        }
    };
    CookieUtils.testCookieName = 'gig3pctest';
    return CookieUtils;
}());
exports.CookieUtils = CookieUtils;
exports.default = new CookieUtils();


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/domains.ts":
/*!************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/domains.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var Uri_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/Uri */ "./src/core/Gigya.Js/app/Utils/Uri.ts");
var stringUtilsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/stringUtils */ "./src/core/Gigya.Js/app/Utils/stringUtils.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var FlagService_1 = __webpack_require__(/*! ../Services/FlagService */ "./src/core/Gigya.Js/app/Services/FlagService.ts");
var cookie_1 = __webpack_require__(/*! ./cookie */ "./src/core/Gigya.Js/app/Utils/cookie.ts");
// TODO: move to config
var baseDomains;
if ((_b = (_a = window.gigya.partnerSettings) === null || _a === void 0 ? void 0 : _a.baseDomains) === null || _b === void 0 ? void 0 : _b.length) {
    baseDomains = window.gigya.partnerSettings.baseDomains;
}
else {
    if (window.self === window.top) {
        // only in the top frame
        window.gigya.logger.warn('gigya: missing base domains for site');
    }
    baseDomains = [document.location.hostname];
}
LocalInfo_1.localInfo.baseDomain = getBaseDomain(baseDomains);
var gigyaDomainNamespaces = ['socialize', 'accounts', 'fidm', 'gm', 'comments', 'gcs', 'ids', 'ds', 'gscounters', 'reports'];
function apiDomainFactory(apiDomain, defaultApiDomain) {
    if (apiDomain === void 0) { apiDomain = resolveApiDomain(); }
    if (defaultApiDomain === void 0) { defaultApiDomain = window.gigya.defaultApiDomain; }
    var shouldAddNamespace = Uri_1.Uri.parse(apiDomain).isIn(Uri_1.Uri.parse(defaultApiDomain));
    return function (namespace) {
        if (namespace && shouldAddNamespace) {
            var subDomain = namespace.split('.')[0];
            if (subDomain === 'sdk' || subDomain === 'oauth') {
                subDomain = 'accounts';
            }
            else if (gigyaDomainNamespaces.indexOf(subDomain) == -1) {
                window.gigya.logger.error("trying to send request to an invalid domain");
                subDomain = gigyaDomainNamespaces[0];
            }
            return subDomain + "." + apiDomain;
        }
        else {
            return apiDomain;
        }
    };
}
exports.apiDomainFactory = apiDomainFactory;
function getGigyaDomain(namespace, dataCenter, defaultDomain) {
    if (dataCenter === void 0) { dataCenter = window.gigya.dataCenter; }
    if (defaultDomain === void 0) { defaultDomain = window.gigya.defaultApiDomain; }
    if (defaultDomain === 'sapcdm.cn' && dataCenter !== 'cn1') {
        defaultDomain = "cn1." + defaultDomain; //Fix for cn1-st1. it should be cn1-st1.cn1.sapcdm.cn and not cn1-st1.sapcdm.cn
    }
    var domain = dataCenter + "." + defaultDomain;
    if (namespace)
        return namespace + "." + domain;
    else
        return domain;
}
exports.getGigyaDomain = getGigyaDomain;
function getBaseDomain(baseDomains, currentDomain, defaultDomains) {
    if (baseDomains === void 0) { baseDomains = window.gigya.partnerSettings.baseDomains; }
    if (currentDomain === void 0) { currentDomain = location.hostname; }
    if (defaultDomains === void 0) { defaultDomains = ['gigya.com', 'cn1.sapcdm.cn', 'localhost', window.gigya.defaultApiDomain]; }
    // #49786 - Support webview without hostname.
    if (!currentDomain) {
        return '';
    }
    if (typeof baseDomains == 'string') {
        baseDomains = baseDomains.split(',');
    }
    var originURI = Uri_1.Uri.parse(currentDomain);
    if (defaultDomains) {
        baseDomains = baseDomains.concat(defaultDomains);
    }
    for (var _i = 0, baseDomains_1 = baseDomains; _i < baseDomains_1.length; _i++) {
        var rawDomain = baseDomains_1[_i];
        // This does not take care of wildcards in the middle of string.
        var baseDomain = stringUtilsUtils.replaceAll(rawDomain, '*', '');
        var baseUri = Uri_1.Uri.parse(baseDomain);
        if (baseUri && originURI.isIn(baseUri)) {
            if (!window.gigya._) {
                window.gigya._ = {};
            }
            window.gigya._.isTrustedDomain = true;
            if (baseUri.isForSubDomains()) {
                return originURI.domain;
            }
            else {
                return baseUri.domain;
            }
        }
    }
    // fallback to the parent's window domain (for backward compatibility).
    return originURI.domain;
}
exports.getBaseDomain = getBaseDomain;
function resolveApiDomain(customApiDomainPrefix, baseDomain, dataCenter, defaultApiDomain) {
    if (customApiDomainPrefix === void 0) { customApiDomainPrefix = window.gigya.partnerSettings && window.gigya.partnerSettings.customAPIDomainPrefix; }
    if (baseDomain === void 0) { baseDomain = LocalInfo_1.localInfo.baseDomain; }
    if (dataCenter === void 0) { dataCenter = window.gigya.dataCenter; }
    if (defaultApiDomain === void 0) { defaultApiDomain = window.gigya.defaultApiDomain; }
    var _a;
    var apiDomain = getHostedPagesApiDomainCookie();
    if (apiDomain) {
        return apiDomain;
    }
    // TODO: remove once a solution will be found for hosted pages
    if (baseDomain.endsWith(((_a = window.gigya._.config) === null || _a === void 0 ? void 0 : _a.hostedPagesDomain) || 'my.gigya-ext.com')) {
        return baseDomain;
    }
    if (customApiDomainPrefix && baseDomain && baseDomain !== defaultApiDomain) {
        return customApiDomainPrefix + "." + baseDomain;
    }
    return getGigyaDomain(undefined, dataCenter, defaultApiDomain);
}
exports.resolveApiDomain = resolveApiDomain;
function getStorageDomain() {
    var _a, _b, _c;
    var apiDomain = getHostedPagesApiDomainCookie();
    if (apiDomain) {
        return apiDomain;
    }
    if ((_b = (_a = window.gigya.thisScript) === null || _a === void 0 ? void 0 : _a.globalConf) === null || _b === void 0 ? void 0 : _b['storageDomainOverride']) {
        return window.gigya.thisScript.globalConf['storageDomainOverride'];
    }
    if (((_c = window.gigya.thisScript) === null || _c === void 0 ? void 0 : _c.baseDomain) && FlagService_1.FlagService.useGigyaJsBaseDomain) {
        return window.gigya.thisScript.baseDomain;
    }
    var domain = window.gigya.defaultApiDomain;
    if (window.gigya.utils.stringUtils.endsWith(domain, 'sapcdm.cn') && window.gigya.dataCenter !== 'cn1') { // special case with china domain staging
        domain = "cn1.sapcdm.cn";
    }
    var prefix = window.gigya.dataCenter !== 'global' ? "cdns." + window.gigya.dataCenter : "cdns";
    return prefix + "." + domain;
}
exports.getStorageDomain = getStorageDomain;
function getHostedPagesApiDomainCookie() {
    return cookie_1.default.get("pages_apiDomain_" + window.gigya.apiKey);
}


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/global.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/global.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var CookieStore = /** @class */ (function () {
    function CookieStore(_win) {
        if (_win === void 0) { _win = window; }
        this._win = _win;
    }
    CookieStore.prototype.setCookie = function (name, value, options) {
        var cookieString = name + "=" + escape(value);
        if (options.path)
            cookieString += "; path=" + options.path;
        if (options.expires)
            cookieString += "; expires=" + options.expires.toUTCString();
        if (options.domain && options.domain.indexOf('.') != -1)
            cookieString += "; domain=" + options.domain;
        if (options.sameSite)
            cookieString += "; sameSite=" + options.sameSite;
        if (options.secure)
            cookieString += "; secure";
        this._win.document.cookie = cookieString;
    };
    CookieStore.prototype.getCookie = function (name) {
        name = name.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1').replace(/^[ \t]+|[ \t]+$/g, '');
        var regex = new RegExp('(?:^|;)\\s?' + name + '=(.*?)(?:;|$)');
        var match = this._win.document.cookie.match(regex);
        return match && unescape(match[1]);
    };
    return CookieStore;
}());
exports.CookieStore = CookieStore;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/gltexp.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/gltexp.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function isValid(gltexp) {
    return getMillis(gltexp) > Date.now();
}
exports.isValid = isValid;
function getMax() {
    var gltexps = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        gltexps[_i] = arguments[_i];
    }
    if (!gltexps || !gltexps.length)
        return undefined;
    return gltexps.sort(function (gltexpA, gltexpB) { return getMillis(gltexpB) - getMillis(gltexpA); })[0];
}
exports.getMax = getMax;
function getMillis(gltExp) {
    return !gltExp ? 0 : Number(gltExp.substr(0, gltExp.indexOf('_'))) * 1000;
}
exports.getMillis = getMillis;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/keyValue.ts":
/*!*************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/keyValue.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var URLUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/URL */ "./src/core/Gigya.Js/app/Utils/URL.ts");
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var FlagService_1 = __webpack_require__(/*! ../Services/FlagService */ "./src/core/Gigya.Js/app/Services/FlagService.ts");
function serialize(oKeyValue, delimiter) {
    var a = [];
    if (!delimiter) {
        delimiter = '&';
    }
    for (var p in oKeyValue) {
        switch (typeof oKeyValue[p]) {
            case 'function':
                break;
            case 'object':
                if (oKeyValue[p] != null) {
                    a.push(p + '=' + URLUtils.URLEncode(JSONUtils.serialize(oKeyValue[p])));
                }
                break;
            case 'undefined':
                break;
            default:
                a.push(p + '=' + URLUtils.URLEncode(oKeyValue[p]));
        }
    }
    var s = a.join(delimiter);
    return s;
}
exports.serialize = serialize;
function deserialize(urlEncodedString, delimiter, keysToLower, useUnescape) {
    var o = {};
    if (!urlEncodedString) {
        return o;
    }
    if (!delimiter) {
        delimiter = '&';
    }
    var pairs = urlEncodedString.split(delimiter);
    for (var iPair = 0; iPair < pairs.length; iPair++) {
        var pair = pairs[iPair];
        var eqPos = pair.indexOf('=');
        if (eqPos === -1) {
            var key = keysToLower ? pair.toLowerCase() : pair;
            o[key] = '1';
        }
        else {
            var key = pair.substr(0, eqPos);
            if (keysToLower) {
                key = key.toLowerCase();
            }
            var serializedValue = pair.substr(eqPos + 1).replace(/\+/g, ' ');
            try {
                if (useUnescape) {
                    o[key] = FlagService_1.FlagService.useDecodeURIComponent ? compareResultsAndReturnURLDecode(serializedValue) : unescape(serializedValue);
                }
                else {
                    o[key] = URLUtils.URLDecode(serializedValue);
                }
            }
            catch (ex) {
                o[key] = FlagService_1.FlagService.useDecodeURIComponent ? URLUtils.URLDecode(serializedValue) : unescape(serializedValue);
            }
        }
    }
    return o;
}
exports.deserialize = deserialize;
function compareResultsAndReturnURLDecode(serializedValue) {
    var unescapedResult = unescape(serializedValue);
    var urlDecodeResult = URLUtils.URLDecode(serializedValue);
    unescapedResult.localeCompare(urlDecodeResult) !== 0 && window.gigya.logger.report('urlDecoder and unescaped have different values', {
        unescapedResult: unescapedResult,
        urlDecodeResult: urlDecodeResult
    });
    return urlDecodeResult;
}


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/localStorage.ts":
/*!*****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/localStorage.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var cookie_1 = __webpack_require__(/*! ./cookie */ "./src/core/Gigya.Js/app/Utils/cookie.ts");
var AbstractLocalStorageAdapter = /** @class */ (function () {
    function AbstractLocalStorageAdapter() {
    }
    AbstractLocalStorageAdapter.getName = function () {
        return 'AbstractAdapter';
    };
    /**
     * Set object to storage.
     */
    AbstractLocalStorageAdapter.prototype.setObject = function (key, o) {
        this.setItem(key, JSONUtils.serialize(o));
    };
    /**
     * Get object from local storage.
     */
    AbstractLocalStorageAdapter.prototype.getObject = function (key, defaultValue) {
        return JSONUtils.deserialize(this.getItem(key), defaultValue);
    };
    /**
     * Is persistent storage. Returns false when data is not persisted.
     */
    AbstractLocalStorageAdapter.prototype.isPersistent = function () {
        return true;
    };
    return AbstractLocalStorageAdapter;
}());
exports.AbstractLocalStorageAdapter = AbstractLocalStorageAdapter;
var AbstractAsyncLocalStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractAsyncLocalStorageAdapter, _super);
    function AbstractAsyncLocalStorageAdapter() {
        var _this = _super.call(this) || this;
        _this.isLoaded = false;
        return _this;
    }
    AbstractAsyncLocalStorageAdapter.prototype.isReady = function () {
        return this.isLoaded;
    };
    /**
     * Used when there is initialization time on the local storage adapter.
     */
    AbstractAsyncLocalStorageAdapter.prototype.waitForService = function (callback) {
        var _this = this;
        if (this.isReady()) {
            callback();
            return;
        }
        else {
            setTimeout(function () { return _this.waitForService(callback); }, 50);
        }
    };
    return AbstractAsyncLocalStorageAdapter;
}(AbstractLocalStorageAdapter));
exports.AbstractAsyncLocalStorageAdapter = AbstractAsyncLocalStorageAdapter;
var StorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(StorageAdapter, _super);
    function StorageAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StorageAdapter.prototype.getItem = function (key) {
        return this.storage[key];
    };
    StorageAdapter.prototype.setItem = function (key, value, expiresIn) {
        try {
            this.storage[key] = value;
        }
        catch (ex) { }
    };
    StorageAdapter.prototype.removeItem = function (key) {
        this.storage.removeItem(key);
    };
    return StorageAdapter;
}(AbstractLocalStorageAdapter));
var LocalStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(LocalStorageAdapter, _super);
    function LocalStorageAdapter() {
        var _this = _super.call(this) || this;
        _this.storage = window.localStorage;
        return _this;
    }
    LocalStorageAdapter.getName = function () {
        return 'LocalStorageAdapter';
    };
    LocalStorageAdapter.isAvailable = function () {
        return LocalInfo_1.localInfo.supportsLocalStorage;
    };
    return LocalStorageAdapter;
}(StorageAdapter));
var SessionStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(SessionStorageAdapter, _super);
    function SessionStorageAdapter() {
        var _this = _super.call(this) || this;
        _this.storage = window.sessionStorage;
        return _this;
    }
    SessionStorageAdapter.getName = function () {
        return 'SessionStorageAdapter';
    };
    SessionStorageAdapter.isAvailable = function () {
        return LocalInfo_1.localInfo.supportsSessionStorage;
    };
    return SessionStorageAdapter;
}(StorageAdapter));
var FirefoxStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(FirefoxStorageAdapter, _super);
    function FirefoxStorageAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirefoxStorageAdapter.isAvailable = function () {
        return LocalInfo_1.localInfo.isFF && window['globalStorage'];
    };
    FirefoxStorageAdapter.getName = function () {
        return 'FirefoxStorageAdapter';
    };
    FirefoxStorageAdapter.prototype.getItem = function (key) {
        return window['globalStorage'][location.hostname][key];
    };
    FirefoxStorageAdapter.prototype.setItem = function (key, value, expiresIn) {
        try {
            window['globalStorage'][location.hostname][key] = value;
        }
        catch (ex) { }
    };
    FirefoxStorageAdapter.prototype.removeItem = function (key) {
        delete window['globalStorage'][location.hostname][key];
    };
    return FirefoxStorageAdapter;
}(AbstractLocalStorageAdapter));
var CookieStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(CookieStorageAdapter, _super);
    function CookieStorageAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CookieStorageAdapter.isAvailable = function () {
        return cookie_1.default.canSaveCookie();
    };
    CookieStorageAdapter.getName = function () {
        return 'CookieStorageAdapter';
    };
    CookieStorageAdapter.prototype.getItem = function (key) {
        return cookie_1.default.get(key);
    };
    CookieStorageAdapter.prototype.setItem = function (key, value, expiresIn, domain, additionalParams) {
        if (additionalParams === void 0) { additionalParams = {}; }
        cookie_1.default.set(key, value, expiresIn, domain, additionalParams.dontUseRootPath, additionalParams.sameSite);
    };
    CookieStorageAdapter.prototype.removeItem = function (key) {
        cookie_1.default.remove(key);
    };
    return CookieStorageAdapter;
}(AbstractLocalStorageAdapter));
exports.CookieStorageAdapter = CookieStorageAdapter;
var MemoryStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(MemoryStorageAdapter, _super);
    function MemoryStorageAdapter() {
        var _this = _super.call(this) || this;
        _this.memory = {};
        return _this;
    }
    MemoryStorageAdapter.isAvailable = function () {
        return true;
    };
    MemoryStorageAdapter.getName = function () {
        return 'MemoryStorageAdapter';
    };
    MemoryStorageAdapter.prototype.getItem = function (key) {
        return this.memory[key];
    };
    MemoryStorageAdapter.prototype.setItem = function (key, value, expiresIn) {
        this.memory[key] = value;
    };
    MemoryStorageAdapter.prototype.removeItem = function (key) {
        delete this.memory[key];
    };
    /**
     * Is persistent storage. Returns false when data is not persisted.
     */
    MemoryStorageAdapter.prototype.isPersistent = function () {
        return false;
    };
    return MemoryStorageAdapter;
}(AbstractLocalStorageAdapter));
exports.MemoryStorageAdapter = MemoryStorageAdapter;
exports.adapters = [
    LocalStorageAdapter,
    SessionStorageAdapter,
    FirefoxStorageAdapter,
    CookieStorageAdapter,
    MemoryStorageAdapter,
];
exports.instances = {};
function initializeAdapter(adapter) {
    var adapterName = adapter.getName() || adapter.name;
    if (!exports.instances[adapterName]) {
        exports.instances[adapterName] = new adapter();
    }
    return exports.instances[adapterName];
}
exports.initializeAdapter = initializeAdapter;
function waitForService(callback) {
    // Select compatible adapter.
    var storage;
    for (var _i = 0, adapters_1 = exports.adapters; _i < adapters_1.length; _i++) {
        var adapter_1 = adapters_1[_i];
        if (adapter_1.isAvailable()) {
            // Don't select adapter if it's async and a callback wasn't provided.
            if (adapter_1.prototype instanceof AbstractAsyncLocalStorageAdapter && !callback) {
                continue;
            }
            storage = initializeAdapter(adapter_1);
            break;
        }
    }
    // Fallback to memory-based non-persistent storage.
    if (!storage) {
        storage = initializeAdapter(MemoryStorageAdapter);
    }
    // Trigger callback when adapter finishes loading (or instantly, if not required to wait).
    if (callback) {
        if (storage instanceof AbstractAsyncLocalStorageAdapter) {
            storage.waitForService(function () {
                callback(storage);
            });
        }
        else {
            callback(storage);
        }
    }
    return storage;
}
exports.waitForService = waitForService;
var adapter = waitForService();
function getItem(key) {
    return adapter.getItem(key);
}
exports.getItem = getItem;
function setItem(key, value, expiresIn) {
    return adapter.setItem(key, value, expiresIn);
}
exports.setItem = setItem;
function removeItem(key) {
    return adapter.removeItem(key);
}
exports.removeItem = removeItem;
function setObject(key, o) {
    return adapter.setObject(key, o);
}
exports.setObject = setObject;
function getObject(key, defaultValue) {
    return adapter.getObject(key, defaultValue);
}
exports.getObject = getObject;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/object.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/object.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var toggles_1 = __webpack_require__(/*! ./toggles */ "./src/core/Gigya.Js/app/Utils/toggles.ts");
function removeUndefined(o) {
    var o2 = {};
    for (var p in o) {
        if (o[p] != null && o[p] != undefined) {
            o2[p] = o[p];
        }
    }
    return o2;
}
exports.removeUndefined = removeUndefined;
function expressionHelper(context) {
    context = context || {};
    return {
        getField: function (path) {
            if (!path)
                return undefined;
            var paths = path.split('.'), current = context, i;
            for (i = 0; i < paths.length; ++i) {
                if (current[paths[i]] == undefined) {
                    return undefined;
                }
                else {
                    current = current[paths[i]];
                }
            }
            return current;
        },
    };
}
exports.expressionHelper = expressionHelper;
function getPropertyBySerializedName(o, name, createMissingObjects) {
    if (!name)
        return o;
    var oResult = o;
    var arNameSegments = name.split('.');
    for (var iSegment = 0; iSegment < arNameSegments.length; iSegment++) {
        var sSegment = arNameSegments[iSegment];
        var sIndex = null;
        //Support for array access. i.e. "obj.prop1[0].prop2"
        if (sSegment.match(/\[[0-9]+]/)) {
            sIndex = Number(sSegment.match(/\[[0-9]+]/)[0].replace(/[\[\]]/g, ''));
        }
        sSegment = sSegment.split(/\[[0-9]+]/).join('');
        var res = (sIndex || sIndex === 0) && oResult[sSegment] ? oResult[sSegment][sIndex] : oResult[sSegment];
        if (createMissingObjects && !oResult[sSegment]) {
            oResult[sSegment] = {};
        }
        else if (createMissingObjects && !res && res !== false) {
            oResult[sSegment] = [];
        }
        if (res || res === false) {
            oResult = res;
        }
        else {
            return null;
        }
    }
    return oResult;
}
exports.getPropertyBySerializedName = getPropertyBySerializedName;
function setPropertyBySerializedName(o, name, value) {
    var arNameSegments = name.split('.');
    var propertyName = arNameSegments.pop();
    getPropertyBySerializedName(o, arNameSegments.join('.'), true)[propertyName] = value;
}
exports.setPropertyBySerializedName = setPropertyBySerializedName;
function add(oTarget, o, dontOverride) {
    for (var p in o) {
        if (!dontOverride || typeof oTarget[p] === 'undefined') {
            oTarget[p] = o[p];
        }
    }
}
exports.add = add;
function getHash(o) {
    var ar = [];
    for (var p in o) {
        var s;
        if (typeof o[p] == 'object')
            s = JSONUtils.serialize(o[p], false);
        else if (o[p])
            s = o[p].toString();
        ar.push(p + '=' + s);
    }
    return ar.sort().join('&');
}
exports.getHash = getHash;
function getMurmurHash(key, seed) {
    if (!seed)
        seed = 0;
    var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;
    remainder = key.length & 3; // key.length % 4
    bytes = key.length - remainder;
    h1 = seed;
    c1 = 0xcc9e2d51;
    c2 = 0x1b873593;
    i = 0;
    while (i < bytes) {
        k1 = (key.charCodeAt(i) & 0xff) | ((key.charCodeAt(++i) & 0xff) << 8) | ((key.charCodeAt(++i) & 0xff) << 16) | ((key.charCodeAt(++i) & 0xff) << 24);
        ++i;
        k1 = ((k1 & 0xffff) * c1 + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
        k1 = (k1 << 15) | (k1 >>> 17);
        k1 = ((k1 & 0xffff) * c2 + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
        h1 ^= k1;
        h1 = (h1 << 13) | (h1 >>> 19);
        h1b = ((h1 & 0xffff) * 5 + ((((h1 >>> 16) * 5) & 0xffff) << 16)) & 0xffffffff;
        h1 = (h1b & 0xffff) + 0x6b64 + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16);
    }
    k1 = 0;
    switch (remainder) {
        case 3:
            k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
        case 2:
            k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
        case 1:
            k1 ^= key.charCodeAt(i) & 0xff;
            k1 = ((k1 & 0xffff) * c1 + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
            k1 = (k1 << 15) | (k1 >>> 17);
            k1 = ((k1 & 0xffff) * c2 + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
            h1 ^= k1;
    }
    h1 ^= key.length;
    h1 ^= h1 >>> 16;
    h1 = ((h1 & 0xffff) * 0x85ebca6b + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
    h1 ^= h1 >>> 13;
    h1 = ((h1 & 0xffff) * 0xc2b2ae35 + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16)) & 0xffffffff;
    h1 ^= h1 >>> 16;
    return h1 >>> 0;
}
exports.getMurmurHash = getMurmurHash;
function clone(obj, deepCopy, ignoreFunctions, maxLevel, level, ignoreContext) {
    if (maxLevel === void 0) { maxLevel = 20; }
    if (level === void 0) { level = 0; }
    if (obj === window)
        return window; // do not clone the window object
    if (level > maxLevel)
        return null; // Too deep
    if (typeof obj == 'undefined' || obj == null) {
        return toggles_1.default.isOn('removeUndefinedProperties') ? obj : null;
    }
    else if (typeof obj == 'function' && ignoreFunctions) {
        return null;
    }
    else if (obj.constructor == Array) {
        var ar = [];
        for (var i = 0; i < obj.length; i++) {
            if (!ignoreFunctions || typeof obj[i] != 'function') {
                if (deepCopy) {
                    ar[i] = clone(obj[i], deepCopy, ignoreFunctions, maxLevel, level + 1, ignoreContext);
                }
                else {
                    ar[i] = obj[i];
                }
            }
        }
        return ar;
    }
    else if (typeof obj == 'object') {
        var o = {};
        for (var p in obj) {
            if (ignoreContext && p == 'context')
                continue;
            if (!ignoreFunctions || typeof obj[p] != 'function') {
                if (deepCopy) {
                    o[p] = clone(obj[p], deepCopy, ignoreFunctions, maxLevel, level + 1, ignoreContext);
                }
                else {
                    o[p] = obj[p];
                }
            }
        }
        return o;
    }
    else {
        return obj;
    }
}
exports.clone = clone;
function merge(args, isDeepMerge) {
    var o = {};
    for (var i = 0; i < args.length; i++) {
        if (args[i] && args[i].length) {
            for (var u = 0; u < args[i].length; u++) {
                for (var p in args[i][u]) {
                    o[p] = args[i][u][p];
                }
            }
        }
        else {
            // Merge objects.
            if (!isDeepMerge) {
                // Flat merge.
                for (var p in args[i]) {
                    o[p] = args[i][p];
                }
            }
            else {
                // Deep merge.
                for (var p in args[i]) {
                    //we override primitive / array
                    if (typeof o[p] !== 'object' || o[p] instanceof Array) {
                        o[p] = args[i][p];
                    }
                    else {
                        o[p] = merge([o[p], args[i][p]], true);
                    }
                }
            }
        }
    }
    return o;
}
exports.merge = merge;
function unflatten(data) {
    if (Object(data) !== data || Array.isArray(data)) {
        return data;
    }
    var result = {};
    for (var p in data) {
        var cur = result;
        var prop = '';
        var parts = p.replace(/\[([0-9])]/, '.$1').split('.');
        for (var i = 0; i < parts.length; i++) {
            var idx = !isNaN(Number(parts[i]));
            cur = cur[prop] || (cur[prop] = idx ? [] : {});
            prop = parts[i];
        }
        cur[prop] = data[p];
    }
    return result[''] || {};
}
exports.unflatten = unflatten;
function flatten(data, withBracket) {
    if (withBracket === void 0) { withBracket = false; }
    var result = {};
    function recurse(cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        }
        else if (Array.isArray(cur)) {
            var l = cur.length;
            for (var i = 0; i < l; i++) {
                var nestedProperty = withBracket ? prop + "[" + i + "]" : prop + "." + i;
                recurse(cur[i], prop ? nestedProperty : String(i));
            }
            if (l === 0) {
                result[prop] = [];
            }
        }
        else {
            var isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop + "." + p : p);
            }
            if (isEmpty && prop !== '') {
                result[prop] = {};
            }
        }
    }
    recurse(data, '');
    return result;
}
exports.flatten = flatten;
function extractProperties(src, dest, schema) {
    if (src == null)
        return;
    if (dest == null)
        dest = {};
    if (src.constructor == Array) {
        for (var iSrc = 0; iSrc < src.length; iSrc++) {
            extractProperties(src[iSrc], dest, schema);
        }
    }
    else if (schema) {
        var arSchema = schema.split('|');
        var srcLCase = {};
        for (var fieldName in src) {
            srcLCase[fieldName.toLowerCase()] = 1;
        }
        for (var i = 0; i < arSchema.length; i++) {
            var fieldName2 = arSchema[i];
            if (srcLCase[fieldName2.toLowerCase()])
                dest[fieldName2] = src[fieldName2];
        }
    }
    else {
        dest = clone(src, false);
    }
    return dest;
}
exports.extractProperties = extractProperties;
function extractProperty(src, paramName) {
    var params;
    return extractProperties(src, params, paramName)[paramName];
}
exports.extractProperty = extractProperty;
function parseToObject(str) {
    try {
        var parsedVal = window['JSON'].parse(str);
        if (typeof parsedVal == 'object') {
            return parsedVal;
        }
    }
    catch (e) { }
    return undefined;
}
exports.parseToObject = parseToObject;
function removePropertiesPrefix(obj, prefix) {
    if (obj === void 0) { obj = {}; }
    if (prefix === void 0) { prefix = ''; }
    return Object.keys(obj).reduce(function (acc, curr) {
        var _a;
        return (__webpack_provided_Object_dot_assign(acc, (_a = {}, _a[curr.replace(prefix, '')] = obj[curr], _a)));
    }, {});
}
exports.removePropertiesPrefix = removePropertiesPrefix;
function addPrefixToProperties(obj, prefix) {
    if (obj === void 0) { obj = {}; }
    if (prefix === void 0) { prefix = ''; }
    return Object.keys(obj).reduce(function (acc, key) {
        if (key.indexOf(prefix) !== 0) {
            acc["" + prefix + key] = obj[key];
        }
        else {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
}
exports.addPrefixToProperties = addPrefixToProperties;
function normalizeObjectKeysToLowerCase(object) {
    // Normalize all keys to lowercase in addition to their original casing.
    for (var key in object) {
        object[key.toLowerCase()] = object[key];
    }
    return object;
}
exports.normalizeObjectKeysToLowerCase = normalizeObjectKeysToLowerCase;
function decodeObjectKeys(obj) {
    var decodeObjectKeys = {};
    for (var key in obj) {
        var decodedKey = key;
        while (decodedKey.indexOf('%') !== -1) {
            decodedKey = decodeURIComponent(decodedKey);
        }
        decodeObjectKeys[decodedKey] = obj[key];
    }
    return decodeObjectKeys;
}
exports.decodeObjectKeys = decodeObjectKeys;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/queue.ts":
/*!**********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/queue.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var _q = {};
function _servicesStatus() {
    var services = {};
    for (var service in _q) {
        var active = isActive(service);
        if (active) {
            services[service] = {
                active: true,
                waitingFor: _q[service].ids,
                queuedCount: _q[service].q.length,
            };
        }
        else {
            services[service] = {
                active: false,
            };
        }
    }
    return services;
}
exports._servicesStatus = _servicesStatus;
function isActive(service) {
    if (!_q[service])
        return false;
    for (var id in _q[service].ids)
        return true;
    return false;
}
exports.isActive = isActive;
function release(id, service) {
    window.gigya.logger.debug("releasing " + service + " queue by " + id);
    if (!_q[service])
        return;
    delete _q[service].ids[id];
    if (!isActive(service)) {
        var q = _q[service].q;
        _q[service].q = [];
        while (q.length > 0) {
            var o = q.splice(0, 1)[0];
            try {
                o.func.apply(this, o.args);
            }
            catch (ex) {
                if (typeof console == 'object' && console.log) {
                    console.log('Gigya: Exception while invoking queued method (' + service + ': ' + id + ')');
                }
            }
            if (isActive(service)) {
                //queue became inactive
                _q[service].q = q;
                break;
            }
        }
    }
}
exports.release = release;
function hold(id, service) {
    window.gigya.logger.debug("locking queue " + service + " by " + id);
    if (!_q[service])
        _q[service] = { q: [], ids: {} };
    _q[service].ids[id] = true;
}
exports.hold = hold;
function waitFor(service, fnc, args) {
    if (!_q[service])
        _q[service] = { q: [], ids: {} };
    _q[service].q.push({ func: fnc, args: args });
}
exports.waitFor = waitFor;
function queueForExecution(service, func, args) {
    args = args || [];
    if (isActive(service)) {
        waitFor(service, func, args);
    }
    else {
        func.apply(this, args);
    }
}
exports.queueForExecution = queueForExecution;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/sessionCache.ts":
/*!*****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/sessionCache.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var queueUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/queue */ "./src/core/Gigya.Js/app/Utils/queue.ts");
var FlagService_1 = __webpack_require__(/*! ../Services/FlagService */ "./src/core/Gigya.Js/app/Services/FlagService.ts");
var sessionStorageEnabled;
try {
    sessionStorageEnabled = Boolean(window.sessionStorage); // when 3pc blocked, chrome throws when trying to access session storage.
}
catch (ex) {
    sessionStorageEnabled = false;
}
function set(key, response) {
    if (!sessionStorageEnabled)
        return;
    var oGigya;
    try {
        oGigya = JSONUtils.deserialize(window.sessionStorage.getItem('gigyaCache'));
        if (response == null && oGigya[key]) {
            delete oGigya[key];
        }
        else {
            var time = new Date().getTime();
            oGigya[key] = { response: response, time: time };
            if (key.indexOf('gig_oidcContext_') >= 0) {
                window.gigya.logger.report('oidc storage logs - set', {
                    key: key,
                    value: oGigya[key]
                }, false, FlagService_1.FlagService.forceErrorReport);
            }
        }
        window.sessionStorage.setItem('gigyaCache', JSONUtils.serialize(oGigya));
    }
    catch (ex) { }
    queueUtils.release('cache', 'cache_' + key);
}
exports.set = set;
function get(key, cacheTimeout) {
    if (cacheTimeout === void 0) { cacheTimeout = -1; }
    if (!sessionStorageEnabled) {
        return null;
    }
    try {
        if (!queueUtils.isActive('cache_' + key)) {
            var sGigyaCache = window.sessionStorage.getItem('gigyaCache');
            var oGigya = JSONUtils.deserialize(sGigyaCache);
            var cached = oGigya[key];
            if (cached) {
                var currentTime = new Date().getTime();
                if (cacheTimeout < 0 || cacheTimeout + cached.time > currentTime) {
                    //cached
                    return cached.response;
                }
                else {
                    if (key.indexOf('gig_oidcContext_') >= 0) {
                        window.gigya.logger.report('oidc storage logs - get', {
                            key: key,
                            value: oGigya[key],
                            cacheTime: cached.time,
                            currentTime: currentTime
                        }, false, FlagService_1.FlagService.forceErrorReport);
                    }
                    //expired
                    remove(key);
                    return null;
                }
            }
            if (!cached) {
                //not cached (first time)
                queueUtils.hold('cache', 'cache_' + key); //so that future requests will wait for the first one's response.
                return null;
            }
        }
        else {
            //wait for first response
            queueUtils.waitFor('cache_' + key, get, arguments);
            return null;
        }
    }
    catch (ex) { }
    return null;
}
exports.get = get;
function remove(key) {
    set(key, null);
}
exports.remove = remove;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/stringUtils.ts":
/*!****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/stringUtils.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function trim(s) {
    return s.replace(/^\s*(\S*(.*\S)?)\s*$/, '$1');
}
exports.trim = trim;
function format(s) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < arguments.length - 1; i++) {
        if (arguments[i + 1] != null) {
            s = s.split('{' + i + '}').join(arguments[i + 1]);
        }
    }
    return s;
}
exports.format = format;
function capitalize(s) {
    return s.substring(0, 1).toUpperCase() + s.substring(1);
}
exports.capitalize = capitalize;
function endsWith(s, suffix) {
    return s.indexOf(suffix, s.length - suffix.length) !== -1;
}
exports.endsWith = endsWith;
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
}
exports.escapeRegExp = escapeRegExp;
function replaceAll(str, find, replace) {
    if (!find)
        return str;
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
exports.replaceAll = replaceAll;
function mergeCommaSeparatedValues(str1, str2) {
    if (str1 === void 0) { str1 = ''; }
    if (str2 === void 0) { str2 = ''; }
    var arr = str1.concat(',', str2).split(',');
    return window.gigya.utils.array.getUniqueValues(arr).filter(function (x) { return x; }).join(',');
}
exports.mergeCommaSeparatedValues = mergeCommaSeparatedValues;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/toggles.ts":
/*!************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/toggles.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var objectUtils = __webpack_require__(/*! ./object */ "./src/core/Gigya.Js/app/Utils/object.ts");
var WebSDKToggles = /** @class */ (function () {
    function WebSDKToggles() {
    }
    WebSDKToggles.prototype.has = function (key) {
        return typeof this._toggles[key] != 'undefined';
    };
    WebSDKToggles.prototype.get = function (key) {
        return this._toggles[key];
    };
    WebSDKToggles.prototype.isOn = function (key) {
        return this.has(key) && this.get(key);
    };
    Object.defineProperty(WebSDKToggles.prototype, "_toggles", {
        get: function () {
            return objectUtils.merge([
                this._globalConfToggles,
                this._webSdkConfigToggles
            ]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebSDKToggles.prototype, "_globalConfToggles", {
        get: function () {
            var _a, _b;
            return ((_b = (_a = window.gigya.thisScript) === null || _a === void 0 ? void 0 : _a.globalConf) === null || _b === void 0 ? void 0 : _b.toggles) || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebSDKToggles.prototype, "_webSdkConfigToggles", {
        get: function () {
            var _a, _b;
            var toggles = ((_b = (_a = window.gigya._) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.toggles) || {};
            return Object.keys(toggles).reduce(function (newToggles, key) {
                newToggles[key] = toggles[key] === 'on';
                return newToggles;
            }, {});
        },
        enumerable: true,
        configurable: true
    });
    return WebSDKToggles;
}());
exports.default = new WebSDKToggles();


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/validation.ts":
/*!***************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/validation.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function isExplicitTrue(val) {
    var lc = ('' + val).toLowerCase();
    return lc == 'true' || lc == '1';
}
exports.isExplicitTrue = isExplicitTrue;
function isExplicitFalse(val) {
    var lc = ('' + val).toLowerCase();
    return lc == 'false' || lc == '0';
}
exports.isExplicitFalse = isExplicitFalse;
function isLaterThanNow(expirationTime) {
    return expirationTime > new Date().getTime();
}
exports.isLaterThanNow = isLaterThanNow;
function allDefinedOrAllUndefined() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var anyUndefined = args.some(function (x) { return typeof x === 'undefined'; });
    var anyDefined = args.some(function (x) { return typeof x !== 'undefined'; });
    return (anyDefined && !anyUndefined) || (!anyDefined && anyUndefined);
}
exports.allDefinedOrAllUndefined = allDefinedOrAllUndefined;


/***/ }),

/***/ "./src/core/ServiceProxy/ServiceProxy.ts":
/*!***********************************************!*\
  !*** ./src/core/ServiceProxy/ServiceProxy.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var utils = __webpack_require__(/*! src/core/ServiceProxy/utils */ "./src/core/ServiceProxy/utils.ts");
var ServiceProxy = /** @class */ (function () {
    function ServiceProxy(url, timeout, _idCreator, _iframeCreator, getIframeHost, _win) {
        var _this = this;
        if (timeout === void 0) { timeout = 60000; }
        if (_idCreator === void 0) { _idCreator = utils.generateId; }
        if (_iframeCreator === void 0) { _iframeCreator = utils.createIframe; }
        if (getIframeHost === void 0) { getIframeHost = function () {
            return new gigya.Promise(function (resolve) {
                if (document.body)
                    resolve(document.body);
                else
                    document.addEventListener('DOMContentLoaded', function () { return resolve(document.body); });
            });
        }; }
        if (_win === void 0) { _win = window; }
        this.url = url;
        this.timeout = timeout;
        this._idCreator = _idCreator;
        this._iframeCreator = _iframeCreator;
        this.getIframeHost = getIframeHost;
        this._win = _win;
        this._pendingReqs = [];
        this._mutationObservers = [];
        this.onResponse = function (e) {
            // arrow function to preserve context
            var msg = window.gigya.utils.JSON.parse(e.data);
            if (msg && _this._pendingReqs[msg.id] && _this.validateOrigin(e.origin)) {
                _this._pendingReqs[msg.id](msg);
                delete _this._pendingReqs[msg.id];
            }
        };
    }
    Object.defineProperty(ServiceProxy.prototype, "isInit", {
        get: function () {
            return Boolean(this._iframe);
        },
        enumerable: true,
        configurable: true
    });
    ServiceProxy.prototype.init = function (title) {
        var _this = this;
        if (this.isInit)
            return gigya.Promise.reject('proxy already initialized');
        else
            return new gigya.Promise(function (resolve, reject) {
                _this._iframe = _this._iframeCreator(title);
                _this._iframe.src = _this.url;
                _this.getIframeHost().then(function (host) {
                    _this._iframeHost = host;
                    _this._iframeHost.appendChild(_this._iframe);
                    if (window.gigya.logger.isEnabled) {
                        // observe iframe removal only if gigya.logger is explicitly enabled
                        _this.startObservingIFrameRemoval();
                    }
                    var timeoutId = _this._win.setTimeout(function () { return reject('proxy init timeout'); }, _this.timeout);
                    var onInitResponse = function (e) {
                        if (_this.validateOrigin(e.origin)) {
                            var response = _this._tryParseResponse(e.data);
                            if (response === null || response === void 0 ? void 0 : response.signal) {
                                _this._win.clearTimeout(timeoutId);
                                _this._win.removeEventListener('message', onInitResponse, true);
                                switch (response.signal) {
                                    case 'listening':
                                        _this._win.addEventListener('message', _this.onResponse, true);
                                        resolve(response.res);
                                        break;
                                    case 'error':
                                    case 'stop':
                                        reject(response.res);
                                        break;
                                    default:
                                        reject('unsupported response');
                                        break;
                                }
                            }
                        }
                    };
                    _this._win.addEventListener('message', onInitResponse, true);
                });
            });
    };
    ServiceProxy.prototype.validateOrigin = function (checked) {
        return utils.validateOrigin(this._iframe.src, checked);
    };
    ServiceProxy.prototype.postToIFrame = function (req) {
        var onMsgResponse = this.registerMessage(req);
        var message = typeof req === 'object' ? JSON.stringify(req) : req;
        this._iframe.contentWindow.postMessage(message, this._iframe.src);
        return onMsgResponse;
    };
    ServiceProxy.prototype.registerMessage = function (req, timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = this.timeout; }
        return new gigya.Promise(function (resolve, reject) {
            var timeoutId = _this._win.setTimeout(function () {
                reject('proxy request timeout');
            }, timeout);
            _this._pendingReqs[req.id] = function (e) {
                _this._win.clearTimeout(timeoutId);
                if (e.signal === 'error') {
                    reject(e.res);
                }
                else {
                    resolve(e.res);
                }
            };
        });
    };
    ServiceProxy.prototype.sendRequest = function (methodName, params) {
        return this.postToIFrame({
            id: this._idCreator(),
            methodName: methodName,
            params: params,
        });
    };
    ServiceProxy.prototype.stop = function (forceClose) {
        if (forceClose === void 0) { forceClose = false; }
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var error, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isInit) return [3 /*break*/, 1];
                        throw 'proxy is not active';
                    case 1:
                        error = void 0;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        return [4 /*yield*/, this.postToIFrame({
                                id: this._idCreator(),
                                signal: 'stop',
                            })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        e_1 = _a.sent();
                        error = e_1;
                        throw e_1;
                    case 5:
                        if (!error || forceClose) {
                            if (this._mutationObservers && this._mutationObservers.length) {
                                // disconnect mutation observers, if any.
                                this.stopObservingIFrameRemoval();
                            }
                            this._win.removeEventListener('message', this.onResponse, true);
                            this._iframeHost.removeChild(this._iframe);
                            delete this._iframe;
                        }
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ServiceProxy.prototype.wrapWith = function (type) {
        var keys;
        if (typeof type === 'function')
            keys = utils.getAllClassMethodsNames(type);
        else if (type instanceof Array)
            keys = type;
        else if (typeof type === 'object')
            keys = Object.keys(type);
        //.concat(getAllClassMethodsNames(Object.getPrototypeOf(type)));
        else
            throw 'unsupported type for wrapper';
        return this.proxyFromKeys(keys);
    };
    ServiceProxy.prototype.proxyFromKeys = function (keys) {
        var _this = this;
        var proxy = {};
        keys.forEach(function (key) { return (proxy[key] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _this.sendRequest(key, args);
        }); });
        return proxy;
    };
    ServiceProxy.prototype.startObservingIFrameRemoval = function () {
        var targetNode = this._iframe;
        while (targetNode.parentElement) {
            // observe the iframe and its parents (iframe,body)
            this.addMutationObserver(targetNode);
            targetNode = targetNode.parentElement;
        }
    };
    ServiceProxy.prototype.stopObservingIFrameRemoval = function () {
        this._mutationObservers.forEach(function (observer) {
            if (observer && observer.disconnect) {
                observer.disconnect();
            }
        });
        this._mutationObservers = [];
    };
    ServiceProxy.prototype.addMutationObserver = function (targetNode) {
        var _this = this;
        var mutationCallback = function (mutationsList) {
            for (var _i = 0, mutationsList_1 = mutationsList; _i < mutationsList_1.length; _i++) {
                var mutation = mutationsList_1[_i];
                if (mutation.type == 'childList' && mutation.removedNodes.length) {
                    // A child node has been removed.
                    for (var i = 0; i < mutation.removedNodes.length; i++) {
                        var removedNode = mutation.removedNodes.item(i);
                        if (removedNode === targetNode) {
                            window.gigya.logger.warn("### Gigya's service proxy has been unexpectedly detached from the DOM. " +
                                'This may cause unexpected behavior including a complete loss of service. ###');
                            _this.stopObservingIFrameRemoval(); // can stop observing for iframe removal
                            return; // stop the loop
                        }
                    }
                }
            }
        };
        // Create an observer instance linked to the callback function to execute when mutations are observed
        var observer = new MutationObserver(mutationCallback);
        // Start observing the the target-node's parent element for configured mutations
        observer.observe(targetNode.parentElement, {
            childList: true,
            subtree: false,
        });
        this._mutationObservers.push(observer);
    };
    ServiceProxy.prototype._tryParseResponse = function (dataStr) {
        try {
            return JSON.parse(dataStr);
        }
        catch (e) {
            window.gigya.logger.warn("received message with invalid format", {
                data: dataStr
            });
        }
    };
    return ServiceProxy;
}());
exports.ServiceProxy = ServiceProxy;


/***/ }),

/***/ "./src/core/ServiceProxy/utils.ts":
/*!****************************************!*\
  !*** ./src/core/ServiceProxy/utils.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getParentUrl = function (win, doc) {
    if (win === void 0) { win = window; }
    if (doc === void 0) { doc = document; }
    return (win.location != win.parent.location ? doc.referrer : doc.location.href);
};
exports.getBodyElement = function (doc) {
    if (doc === void 0) { doc = document; }
    return new gigya.Promise(function (resolve) {
        if (doc.body)
            resolve(doc.body);
        else
            doc.addEventListener('DOMContentLoaded', function () { return resolve(doc.body); });
    });
};
exports.validateOrigin = function (origin, checked) { var _a; return ((_a = origin === null || origin === void 0 ? void 0 : origin.toLowerCase()) === null || _a === void 0 ? void 0 : _a.indexOf(checked === null || checked === void 0 ? void 0 : checked.toLowerCase())) === 0; };
exports.createIframe = function (title, doc) {
    if (title === void 0) { title = 'Gigya Frame'; }
    if (doc === void 0) { doc = document; }
    var iframe = doc.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.height = '0px';
    iframe.style.width = '0px';
    iframe.style.display = 'none';
    iframe.title = title;
    iframe.setAttribute('aria-hidden', 'true');
    return iframe;
};
var _counter = 1;
exports.generateId = function () {
    return String(_counter++);
};
function isClass(type) {
    return !!type.prototype;
}
exports.getAllClassMethodsNames = function (type) {
    var props = [];
    var proto = isClass(type) ? type.prototype : type;
    do {
        try {
            /** initial implementation - using filter **/
            var l = Object.getOwnPropertyNames(proto)
                // .concat(Object.getOwnPropertySymbols(proto).map(s => s.toString()))
                .map(function (s) { return s.toString(); })
                .sort()
                .filter(function (p, i, arr) {
                return typeof proto[p] === 'function' && //only the methods
                    p !== 'constructor' && //not the constructor
                    (i == 0 || p !== arr[i - 1]) && //not overriding in this prototype
                    props.indexOf(p) === -1;
            });
            props = props.concat(l);
        }
        catch (e) {
            /** bug fix implementation - using custom our own filter logic
             case of Array.filter polyfill causing "can not read property '0' of undefined" **/
            var arr = Object.getOwnPropertyNames(proto)
                // .concat(Object.getOwnPropertySymbols(proto).map(s => s.toString()))
                .map(function (s) { return s.toString(); })
                .sort();
            var l = [];
            for (var i = 0; i < arr.length; i++) {
                var p = arr[i];
                if (typeof proto[p] === 'function' && //only the methods
                    p !== 'constructor' && //not the constructor
                    (i == 0 || p !== arr[i - 1]) && //not overriding in this prototype
                    props.indexOf(p) === -1) {
                    //not overridden in a child
                    l.push(p);
                }
            }
            props = props.concat(l);
        }
    } while ((proto = Object.getPrototypeOf(proto)) && //walk-up the prototype chain
        Object.getPrototypeOf(proto) //not the the Object prototype methods (hasOwnProperty, etc...)
    );
    return props;
};


/***/ }),

/***/ "./src/fidm/Gigya.JS.SSO/app/globalProvider.ts":
/*!*****************************************************!*\
  !*** ./src/fidm/Gigya.JS.SSO/app/globalProvider.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var GlobalProvider = /** @class */ (function () {
    function GlobalProvider() {
    }
    GlobalProvider.prototype.documentLocation = function () {
        return document.location;
    };
    GlobalProvider.prototype.postMessageToParent = function (message, targetOrigin, transfer) {
        window.parent.postMessage(message, targetOrigin, transfer);
    };
    return GlobalProvider;
}());
exports.GlobalProvider = GlobalProvider;
exports.default = new GlobalProvider();


/***/ }),

/***/ "./src/fidm/Gigya.JS.SSO/app/sso.ts":
/*!******************************************!*\
  !*** ./src/fidm/Gigya.JS.SSO/app/sso.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var GSErrors_1 = __webpack_require__(/*! src/core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var ssoUtils_1 = __webpack_require__(/*! src/fidm/Gigya.JS.SSO/app/ssoUtils */ "./src/fidm/Gigya.JS.SSO/app/ssoUtils.ts");
var Sso = /** @class */ (function () {
    function Sso(_apiKey, _siteApiKey, _ssoSegment, _ssoConfig, _utils, _storage) {
        var _this = this;
        if (_ssoConfig === void 0) { _ssoConfig = {
            validDomains: [],
            logoutURLs: {},
            canaryCookiesNames: {
                isCanary: 'gig_isCanary',
                version: 'gig_canary_ver'
            }
        }; }
        if (_utils === void 0) { _utils = new ssoUtils_1.SsoUtils(); }
        if (_storage === void 0) { _storage = _utils.getCookiesStorage(); }
        this._apiKey = _apiKey;
        this._siteApiKey = _siteApiKey;
        this._ssoSegment = _ssoSegment;
        this._ssoConfig = _ssoConfig;
        this._utils = _utils;
        this._storage = _storage;
        this._checkFragment = function () {
            var fragment = _this._utils.getFragment();
            if (fragment && fragment !== _this._currentFragment) {
                _this._currentFragment = fragment;
                _this._start(_this._utils.deserialize(fragment));
            }
            window.setTimeout(_this._checkFragment, 200);
        };
        this._storageKey = this._createKey('gig_loginToken');
        var canaryCookiesNames = this._ssoConfig.canaryCookiesNames;
        if (typeof canaryCookiesNames !== 'undefined') {
            this._canaryKey = this._createKey(canaryCookiesNames.isCanary);
            this._canaryVerKey = this._createKey(canaryCookiesNames.version);
        }
    }
    Sso.prototype.init = function () {
        // Start repeatedly checking fragment for a new call.
        this._checkFragment();
    };
    Sso.prototype._start = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this._mode = params.m;
                        this._requestDomain = params.d; // Receiving domain.
                        this._lid = params.lid;
                        this._callbackID = params.callbackID;
                        this._siteApiKey = params.sAPIKey;
                        // Abort if not in iFrame
                        if (!window.parent) {
                            console.log("gigya sso: invalid use");
                            return [2 /*return*/];
                        }
                        else if (!this._utils.isValidDomain(this._ssoConfig.validDomains, this._requestDomain)) {
                            console.log("gigya sso: " + this._requestDomain + " is not in valid domain: " + this._ssoConfig.validDomains.join(','));
                            return [2 /*return*/];
                        }
                        _a = params.m;
                        switch (_a) {
                            case 'logout': return [3 /*break*/, 1];
                            case 'removeToken': return [3 /*break*/, 3];
                            case 'getToken': return [3 /*break*/, 5];
                            case 'setToken': return [3 /*break*/, 7];
                            case 'setGroupContext': return [3 /*break*/, 9];
                            case 'setLoginTokenExp': return [3 /*break*/, 11];
                            case 'getLoginTokenExp': return [3 /*break*/, 13];
                            case 'checkTokenRenew': return [3 /*break*/, 15];
                            case 'syncCanaryIndication': return [3 /*break*/, 17];
                            case 'setGroupApiDomain': return [3 /*break*/, 19];
                            case 'getGroupApiDomain': return [3 /*break*/, 21];
                        }
                        return [3 /*break*/, 23];
                    case 1: return [4 /*yield*/, this.logout()];
                    case 2:
                        response = _b.sent();
                        return [3 /*break*/, 24];
                    case 3: return [4 /*yield*/, this.removeToken()];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 24];
                    case 5: return [4 /*yield*/, this.getToken()];
                    case 6:
                        response = _b.sent();
                        return [3 /*break*/, 24];
                    case 7: return [4 /*yield*/, this.setToken(params.lt, String(params.expiration), params.gltexp)];
                    case 8:
                        _b.sent();
                        return [3 /*break*/, 24];
                    case 9: return [4 /*yield*/, this.setGroupContext(params.groupContext)];
                    case 10:
                        _b.sent();
                        return [3 /*break*/, 24];
                    case 11: return [4 /*yield*/, this.setTokenExpiration(params.loginTokenExp)];
                    case 12:
                        response = _b.sent();
                        return [3 /*break*/, 24];
                    case 13: return [4 /*yield*/, this.getTokenExpiration()];
                    case 14:
                        response = _b.sent();
                        return [3 /*break*/, 24];
                    case 15: return [4 /*yield*/, this.checkTokenRenew(params.loginToken)];
                    case 16:
                        response = _b.sent();
                        return [3 /*break*/, 24];
                    case 17: return [4 /*yield*/, this.syncCanaryIndication(params.isCanary, params.canaryVersion)];
                    case 18:
                        response = _b.sent();
                        return [3 /*break*/, 24];
                    case 19: return [4 /*yield*/, this.setGroupApiDomain(params.domain)];
                    case 20:
                        _b.sent();
                        return [3 /*break*/, 24];
                    case 21: return [4 /*yield*/, this.getGroupApiDomain()];
                    case 22:
                        response = _b.sent();
                        return [3 /*break*/, 24];
                    case 23:
                        response = {
                            errorCode: GSErrors_1.GSErrors.INVALID_API_METHOD,
                        };
                        _b.label = 24;
                    case 24:
                        this._utils.sendMessage(response, this._callbackID, this._requestDomain);
                        return [2 /*return*/];
                }
            });
        });
    };
    Sso.prototype.getGroupApiDomain = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var domain;
            return tslib_1.__generator(this, function (_a) {
                domain = this._storage.getItem("apiDomain_" + this._apiKey);
                return [2 /*return*/, {
                        errorCode: GSErrors_1.GSErrors.OK,
                        domain: domain
                    }];
            });
        });
    };
    Sso.prototype.setGroupApiDomain = function (domain) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            return tslib_1.__generator(this, function (_a) {
                this._storage.setItem("apiDomain_" + this._apiKey, domain);
                return [2 /*return*/];
            });
        });
    };
    Sso.prototype.logout = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var logoutURLs;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logoutURLs = this._getLogoutURLs();
                        return [4 /*yield*/, this.removeToken()];
                    case 1:
                        _a.sent();
                        this._storage.removeItem(this._storageKey + "_visited");
                        return [2 /*return*/, { logoutURLs: logoutURLs }];
                }
            });
        });
    };
    Sso.prototype.removeToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loginToken;
            return tslib_1.__generator(this, function (_a) {
                loginToken = this._storage.getItem(this._storageKey);
                if (loginToken) {
                    this._markRevokedLoginToken(loginToken);
                    this._storage.removeItem(this._storageKey);
                }
                this._storage.removeItem(this._storageKey + "_exp");
                this._storage.removeItem(this._storageKey + "_gltexp");
                this._storage.removeItem(this._storageKey + "_session");
                this._storage.removeItem(this._storageKey + "_context");
                return [2 /*return*/];
            });
        });
    };
    Sso.prototype.getToken = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var errorCode, lt, storageExp, exp, twoYearFromNow, gltexp, groupContext, inSession, response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        errorCode = 0;
                        lt = this._storage.getItem(this._storageKey);
                        storageExp = this._storage.getItem(this._storageKey + "_exp");
                        if (storageExp === 'undefined') {
                            exp = Date.now() - 1000;
                        }
                        else {
                            exp = Number(storageExp);
                            twoYearFromNow = Date.now() + (1000 * 60 * 60 * 24 * 365 * 2);
                            if (exp > twoYearFromNow) {
                                exp = Date.now() - 1000;
                            }
                        }
                        gltexp = this._storage.getItem(this._storageKey + "_gltexp");
                        groupContext = this._storage.getItem(this._storageKey + "_context");
                        inSession = gltexp || this._storage.getItem(this._storageKey + "_session") === '1';
                        if (!(!isNaN(exp) && ((exp === 0 && !inSession) || (exp > 0 && new Date().getTime() > exp)))) return [3 /*break*/, 2];
                        // expired!
                        return [4 /*yield*/, this.removeToken()];
                    case 1:
                        // expired!
                        _a.sent();
                        lt = undefined;
                        _a.label = 2;
                    case 2:
                        if (!lt) {
                            // no user
                            return [2 /*return*/, {
                                    errorCode: GSErrors_1.GSErrors.UNAUTHORIZED_USER,
                                }];
                        }
                        else {
                            this._markSiteVisited();
                        }
                        response = {
                            errorCode: errorCode,
                            login_token: lt,
                            expires_in: exp === 0 ? 0 : Math.round((exp - new Date().getTime()) / 1000),
                        };
                        if (groupContext) {
                            response.groupContext = groupContext;
                        }
                        if (exp === 0 && gltexp) {
                            response.gltexp = gltexp;
                        }
                        return [2 /*return*/, response];
                }
            });
        });
    };
    Sso.prototype.setToken = function (lt, expiration, gltexp) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var oldToken, expiresIn, expiresInMs;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        lt = lt.split('|')[0];
                        oldToken = (_a = this._storage.getItem(this._storageKey)) === null || _a === void 0 ? void 0 : _a.split('|')[0];
                        if (lt !== oldToken) {
                            this._markRevokedLoginToken(oldToken);
                        }
                        if (lt) {
                            this._storage.setItem(this._storageKey, lt);
                        }
                        if (expiration) {
                            expiresIn = typeof expiration === 'string' && expiration ? Number(expiration) : expiration;
                            if (expiresIn === 0) {
                                // Session cookie or dynamic session cookie.
                                // Either way, flag the expiration as 0.
                                expiration = 0;
                            }
                            else {
                                expiresInMs = void 0;
                                if (!expiresIn || expiresIn === -2) {
                                    expiresInMs = 1000 * 60 * 60 * 24 * 365;
                                }
                                else {
                                    expiresInMs = Number(expiresIn) * 1000;
                                }
                                // Convert expires in milliseconds to an a timestamp (also milliseconds).
                                expiresIn = Date.now() + expiresInMs;
                            }
                            this._storage.setItem(this._storageKey + "_exp", "" + expiresIn);
                            if (expiration === 0) {
                                this._storage.setItem(this._storageKey + "_session", '1', 0);
                            }
                        }
                        if (!(gltexp !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setTokenExpiration(gltexp)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        if (!lt) return [3 /*break*/, 4];
                        return [4 /*yield*/, this._markSiteVisited()];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Sso.prototype.setGroupContext = function (groupContext) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this._storage.setItem(this._storageKey + "_context", JSON.stringify(groupContext));
                return [2 /*return*/];
            });
        });
    };
    Sso.prototype.setTokenExpiration = function (gltexp) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var _a, _b, _c;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!!this._utils.isValidGltExp(gltexp)) return [3 /*break*/, 1];
                        this._storage.removeItem(this._storageKey + "_gltexp");
                        gltexp = null;
                        return [3 /*break*/, 3];
                    case 1:
                        _b = (_a = this._utils).getMaxGltExp;
                        _c = [gltexp];
                        return [4 /*yield*/, this.getTokenExpiration()];
                    case 2:
                        gltexp = _b.apply(_a, _c.concat([(_d.sent()).gltexp]));
                        this._storage.setItem(this._storageKey + "_gltexp", gltexp);
                        this._storage.removeItem(this._storageKey + "_exp");
                        _d.label = 3;
                    case 3: return [2 /*return*/, {
                            errorCode: GSErrors_1.GSErrors.OK,
                            gltexp: gltexp,
                        }];
                }
            });
        });
    };
    Sso.prototype.getTokenExpiration = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var lt;
            return tslib_1.__generator(this, function (_a) {
                lt = this._storage.getItem(this._storageKey);
                if (!lt) {
                    return [2 /*return*/, {
                            errorCode: GSErrors_1.GSErrors.UNAUTHORIZED_USER,
                        }];
                }
                return [2 /*return*/, {
                        errorCode: GSErrors_1.GSErrors.OK,
                        gltexp: this._storage.getItem(this._storageKey + "_gltexp"),
                    }];
            });
        });
    };
    Sso.prototype.checkTokenRenew = function (loginToken) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var groupToken, invalidTokens, isInvalid;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getToken()];
                    case 1:
                        groupToken = _a.sent();
                        invalidTokens = this._storage.getItem(this._storageKey + "_revoked_tokens") || '';
                        isInvalid = invalidTokens.indexOf(loginToken) >= 0;
                        if (!!isInvalid) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.setToken(loginToken)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { errorCode: GSErrors_1.GSErrors.OK }];
                    case 3:
                        if (groupToken.errorCode === GSErrors_1.GSErrors.OK && invalidTokens.indexOf(groupToken.login_token) < 0) {
                            // just changing the error code - but returning the same session info of the group
                            groupToken.errorCode = GSErrors_1.GSErrors.TOKEN_HAS_RENEWED;
                            return [2 /*return*/, groupToken];
                        }
                        else {
                            return [2 /*return*/, { errorCode: GSErrors_1.GSErrors.INVALID_TOKEN }];
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Sso.prototype.syncCanaryIndication = function (isCanary, versionSignature) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var SSOIsCanary, SSOVersionSignature, response, siteCanaryVersion, SSOCanaryVersion;
            return tslib_1.__generator(this, function (_a) {
                if (!this._canaryKey || !this._canaryVerKey) {
                    return [2 /*return*/, { errorCode: GSErrors_1.GSErrors.INVALID_ENVIRONMENT_CONFIG }];
                }
                SSOIsCanary = this._storage.getItem(this._canaryKey);
                SSOVersionSignature = this._storage.getItem(this._canaryVerKey);
                response = {
                    errorCode: GSErrors_1.GSErrors.OK,
                    isCanary: isCanary,
                    canaryVersion: versionSignature,
                };
                if (!this._utils.validations().allDefinedOrAllUndefined(SSOIsCanary, SSOVersionSignature)) {
                    // not legal
                    response.errorCode = GSErrors_1.GSErrors.INVALID_PARAMETER_VALUE;
                    return [2 /*return*/, response];
                }
                if (!this._utils.validations().allDefinedOrAllUndefined(isCanary, versionSignature)) {
                    // not legal
                    return [2 /*return*/, {
                            errorCode: GSErrors_1.GSErrors.INVALID_PARAMETER_VALUE,
                            isCanary: SSOIsCanary,
                            canaryVersion: SSOVersionSignature,
                        }];
                }
                siteCanaryVersion = this._parseCanaryVersionSignature(versionSignature);
                SSOCanaryVersion = this._parseCanaryVersionSignature(SSOVersionSignature);
                if (siteCanaryVersion.timestamp > SSOCanaryVersion.timestamp) {
                    this._storage.setItem(this._canaryKey, isCanary);
                    this._storage.setItem(this._canaryVerKey, versionSignature);
                }
                else {
                    response.isCanary = SSOIsCanary;
                    response.canaryVersion = SSOVersionSignature;
                }
                return [2 /*return*/, response];
            });
        });
    };
    Sso.prototype._markSiteVisited = function () {
        var visitedStorageKey = this._storageKey + "_visited";
        var visited = this._storage.getItem(visitedStorageKey) || '';
        if (visited.indexOf(this._siteApiKey) === -1) {
            visited += ',' + this._siteApiKey;
        }
        this._storage.setItem(visitedStorageKey, visited);
    };
    Sso.prototype._markRevokedLoginToken = function (loginToken) {
        if (!loginToken)
            return;
        var invalidTokensStorageKey = this._storageKey + "_revoked_tokens";
        var invalidTokens = this._storage.getItem(invalidTokensStorageKey) || '';
        var arrInvalidTokens = invalidTokens.split(',');
        if (arrInvalidTokens.length > 3) {
            //delete one old revoked token
            arrInvalidTokens.splice(1, 1); // first element is always empty
        }
        invalidTokens = arrInvalidTokens.join(',');
        if (invalidTokens.indexOf(loginToken) < 0) {
            invalidTokens += ',' + loginToken;
        }
        this._storage.setItem(invalidTokensStorageKey, invalidTokens);
    };
    Sso.prototype._getLogoutURLs = function () {
        var visited = this._storage.getItem(this._storageKey + "_visited");
        if (!visited) {
            return '';
        }
        var arLogoutURLs = [];
        for (var siteKey in this._ssoConfig.logoutURLs) {
            if (visited.indexOf(',' + siteKey) !== -1) {
                arLogoutURLs.push(this._ssoConfig.logoutURLs[siteKey]);
            }
        }
        return arLogoutURLs.join(',');
    };
    Sso.prototype._createKey = function (name) {
        return name + "_" + this._apiKey + (this._ssoSegment ? "_" + this._ssoSegment : '');
    };
    Sso.prototype._parseCanaryVersionSignature = function (canaryVersionSig) {
        var defaultData = { build: 0, probability: 0, timestamp: -1 };
        if (!canaryVersionSig)
            return defaultData;
        var parts = canaryVersionSig.split('-');
        if (parts.length < 3) {
            return defaultData;
        }
        return {
            build: Number(parts[0]),
            probability: Number(parts[1]),
            timestamp: Number(parts[2]),
        };
    };
    return Sso;
}());
exports.Sso = Sso;


/***/ }),

/***/ "./src/fidm/Gigya.JS.SSO/app/ssoUtils.ts":
/*!***********************************************!*\
  !*** ./src/fidm/Gigya.JS.SSO/app/ssoUtils.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var Uri_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/Uri */ "./src/core/Gigya.Js/app/Utils/Uri.ts");
var validationUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/validation */ "./src/core/Gigya.Js/app/Utils/validation.ts");
var globalProvider_1 = __webpack_require__(/*! ./globalProvider */ "./src/fidm/Gigya.JS.SSO/app/globalProvider.ts");
var localStorage_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/localStorage */ "./src/core/Gigya.Js/app/Utils/localStorage.ts");
var keyValue_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/keyValue */ "./src/core/Gigya.Js/app/Utils/keyValue.ts");
var gltexp_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/gltexp */ "./src/core/Gigya.Js/app/Utils/gltexp.ts");
var URL_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/URL */ "./src/core/Gigya.Js/app/Utils/URL.ts");
var defaultValidDomains = ['gigya-api.com', 'gigya-api.cn', 'gigya.com', 'my.gigya-ext.com', 'localhost'];
var SsoUtils = /** @class */ (function () {
    function SsoUtils(_global, _defaultValidDomains) {
        if (_global === void 0) { _global = globalProvider_1.default; }
        if (_defaultValidDomains === void 0) { _defaultValidDomains = defaultValidDomains; }
        this._global = _global;
        this._defaultValidDomains = _defaultValidDomains;
    }
    SsoUtils.prototype.getPageUrl = function () {
        return this._global.documentLocation().toString();
    };
    SsoUtils.prototype.isValidDomain = function (validDomains, candidate) {
        var domain = Uri_1.Uri.parse(candidate).domain;
        var arValidDomains = validDomains.concat(this._defaultValidDomains);
        for (var i = 0; i < arValidDomains.length; i++) {
            var validDomain = arValidDomains[i].replace('*', '').split(':')[0];
            var indexOfValidDomain = domain.indexOf(validDomain);
            if (indexOfValidDomain >= 0 &&
                indexOfValidDomain === domain.length - validDomain.length &&
                (indexOfValidDomain === 0 || domain.charAt(indexOfValidDomain - 1) === '.' || domain.charAt(indexOfValidDomain - 1) === '/')) {
                return true;
            }
        }
        return false;
    };
    SsoUtils.prototype.sendMessage = function (res, callbackID, requestDomain) {
        var strMessage = '';
        for (var p in res) {
            if (res[p] != null) {
                strMessage += escape(p + '=' + encodeURIComponent(res[p]) + '&');
            }
        }
        this._global.postMessageToParent(callbackID + '=' + strMessage, requestDomain);
    };
    SsoUtils.prototype.isValidGltExp = function (gltExp) {
        return gltexp_1.isValid(gltExp);
    };
    SsoUtils.prototype.getMaxGltExp = function (gltExp1, gltExp2) {
        return gltexp_1.getMax(gltExp1, gltExp2);
    };
    SsoUtils.prototype.decodeUrl = function (value) {
        return URL_1.URLDecodeRecursive(value);
    };
    SsoUtils.prototype.deserialize = function (value) {
        return keyValue_1.deserialize(value);
    };
    SsoUtils.prototype.getCookiesStorage = function () {
        return localStorage_1.initializeAdapter(localStorage_1.CookieStorageAdapter);
    };
    SsoUtils.prototype.validations = function () {
        return validationUtils;
    };
    SsoUtils.prototype.UriFactory = function (url, isAbsolute) {
        if (isAbsolute === void 0) { isAbsolute = true; }
        return new Uri_1.Uri(url, isAbsolute);
    };
    SsoUtils.prototype.getFragment = function () {
        var pageURL = this.getPageUrl();
        if (pageURL.indexOf('#') !== -1) {
            return pageURL.split('#')[1];
        }
        return null;
    };
    ;
    return SsoUtils;
}());
exports.SsoUtils = SsoUtils;


/***/ }),

/***/ "./src/utils/Gigya.Js.Plugins.Debug/app/DebugPlugin1.ts":
/*!**************************************************************!*\
  !*** ./src/utils/Gigya.Js.Plugins.Debug/app/DebugPlugin1.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var Templates_1 = __webpack_require__(/*! src/utils/Gigya.Js.Plugins.Debug/app/Templates */ "./src/utils/Gigya.Js.Plugins.Debug/app/Templates.ts");
var InternalFlows_1 = __webpack_require__(/*! src/core/Gigya.Js/app/InternalFlows */ "./src/core/Gigya.Js/app/InternalFlows.ts");
var DefaultCss_1 = __webpack_require__(/*! src/utils/Gigya.Js.Plugins.Debug/app/DefaultCss */ "./src/utils/Gigya.Js.Plugins.Debug/app/DefaultCss.ts");
var FlagService_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Services/FlagService */ "./src/core/Gigya.Js/app/Services/FlagService.ts");
var gigDebugCookieKey = 'gig_debug';
var DebugPlugin = /** @class */ (function () {
    function DebugPlugin(params, refString) {
        var _this = this;
        this.params = params;
        this.refString = refString;
        this.templates = window.gigya.utils.object.clone(Templates_1.defaultTemplates, false);
        this.history = [];
        window.gigya._.history = this.history;
        window.gigya.utils.script.load(window.gigya._.getCdnResource('/webSDK/latest/External/jquery-1.11.1.min.js'), null, function () {
            window['$'] = jQuery.noConflict(true);
            window.gigya.utils.functions.createAlias('gigya.debug.addLog', function (log) { return _this.addLog(log); });
            _this.bindEvents();
            _this.initUI();
            _this.refresh();
            window.gigya.events.dispatchForWidget({
                eventName: 'load',
            }, _this.params);
        });
    }
    DebugPlugin.prototype.bindEvents = function () {
        var _this = this;
        window.gigya.events.addMap({
            defaultMethod: function (e) { return _this.onEvent(e); },
            eventMap: [{ events: '*', args: ['$event'] }],
        });
        var onUserEvent = function (e) { return _this.updateUser(e); };
        window.gigya.socialize.addEventHandlers({
            onLogin: onUserEvent,
            onLogout: onUserEvent,
        });
    };
    DebugPlugin.prototype.json2html = function (json, hidden, l) {
        if (l === void 0) { l = 0; }
        var div = $('<div></div>');
        var divDataObject = $('<div class="gig-debug-data-details-object"></div>').appendTo(div);
        var ul = $('<ul></ul>');
        if (hidden) {
            div.addClass('gig-debug-data-details-closed');
        }
        divDataObject.append(ul);
        for (var i in json) {
            if (json.hasOwnProperty(i)) {
                var li = $('<li></li>').appendTo(ul);
                var propNameElement = $('<span class="gig-debug-propertyName"></span>');
                propNameElement.text(i + ':');
                var propValueElement = $('<span class="gig-debug-propertyValue"></span>');
                if (typeof json[i] === 'object') {
                    if (json[i] == null) {
                        propValueElement.text('[NULL]');
                    }
                    else if (l > 6) {
                        propValueElement.text('Too much recursion');
                    }
                    else {
                        var objectButton = $('<div class="gig-debug-data-details-openButton">{ }</div>');
                        var elData = this.json2html(json[i], true, l + 1);
                        objectButton.prop('elData', elData);
                        propValueElement.append(objectButton);
                        propValueElement.append(elData);
                    }
                }
                else if (typeof json[i] == 'function') {
                    propValueElement.text('[FUNCTION]');
                }
                else {
                    propValueElement.text(json[i]);
                }
                li.append(propNameElement);
                li.append(propValueElement);
            }
        }
        return div;
    };
    DebugPlugin.prototype.refresh = function () {
        var _this = this;
        window.gigya.socialize.getUserInfo(this.params, {
            callback: function (res) {
                _this.updateUser(res);
            },
        });
    };
    DebugPlugin.prototype.onEvent = function (e) {
        var log = {
            id: new Date().getTime() + '_' + Math.random(),
            data: { event: e },
            className: e.eventName,
            time: new Date(),
        };
        if (e.eventName == 'afterResponse') {
            if (e.response.errorCode != 0) {
                log.error = true;
            }
            log.html =
                'Got callback for <span data-prop="event">' +
                    e.methodName +
                    '</span>' +
                    (e.source ? ' (source=' + e.source + ', errorCode=' + e.response.errorCode + ')' : '');
        }
        else if (e.eventName == 'beforeRequest') {
            log.html = 'Calling <span data-prop="event">' + e.methodName + '</span>' + (e.source ? ' (source=' + e.source + ')' : '');
        }
        else if (e.eventName == 'beforePluginRequest') {
            log.html =
                'Calling UI plugin <span data-prop="event">' +
                    e.methodName +
                    '</span>' +
                    (e.source && e.source != e.methodName
                        ? ' (source=' + e.source + ')'
                        : e.params && e.params.containerID
                            ? ' (' + e.params.containerID + ')'
                            : '');
        }
        else {
            log.html =
                (e.isGlobal ? 'Global event' : 'Event') +
                    '&nbsp;<span data-prop="event">' +
                    (e.fullEventName || e.eventName) +
                    '</span> fired' +
                    (e.source ? ' (source=' + e.source + ')' : '');
            log.data['event'] = e;
            if (e.eventName == 'error') {
                log.error = true;
            }
        }
        this.addLog(log);
    };
    DebugPlugin.prototype.updateUser = function (response) {
        if (response && response.user) {
            this.currentUser = response.user;
        }
        else {
            this.currentUser = {};
        }
        if (response && response.UID) {
            this.$user.addClass('gig-debug-user-loggedIn');
            this.$user.html('Logged in as ' + (response.user.nickname || (response.user.firstName || '' + ' ' + response.user.lastName || '')) + ' (' + response.UID + ')');
        }
        else {
            this.$user.removeClass('gig-debug-user-loggedIn');
            this.$user.html('Logged out');
        }
    };
    DebugPlugin.prototype.addLog = function (log) {
        log.data = window.gigya.utils.object.clone(log.data, false, false, 6);
        this.$lastLogEntry.empty();
        var $entry = this.getLogEntryElement(log);
        this.$lastLogEntry.append($entry);
        this.history.push(log);
        if (!this.$history)
            return;
        var divLog = this.getLogEntryElement(log);
        this.$history.append(divLog);
        this.$history.scrollTop(this.$history.get(0).scrollHeight);
    };
    DebugPlugin.prototype.clearHistory = function () {
        this.history = [];
        this.$history.empty();
    };
    DebugPlugin.prototype.getLog = function (id) {
        for (var i = 0; i < this.history.length; i++) {
            if (this.history[i].id == id)
                return this.history[i];
        }
    };
    DebugPlugin.prototype.getLogEntryElement = function (log) {
        var _this = this;
        var className = 'gig-debug-history-entry';
        var $log = $('<div></div>')
            .addClass('gig-debug-history-entry')
            .attr('data-log-id', log.id)
            .html('<span class="gig-debug-timestamp">[' + log.time.toLocaleTimeString() + ']</span>' + log.html);
        if (log.className)
            $log.addClass('gig-debug-history-entry-' + log.className);
        if (log.error)
            $log.addClass('gig-debug-history-entry-error');
        $log.find('[data-prop]').click(function (e) { return _this.onDataPropClick(e); });
        return $log;
    };
    DebugPlugin.prototype.onDataPropClick = function (e) {
        var opener = e.target.parentNode;
        var logId = opener.getAttribute('data-log-id');
        var prop = e.target.getAttribute('data-prop');
        var log = this.getLog(logId);
        if (log.data[prop])
            this.showDetails(log.data[prop], e.target);
    };
    DebugPlugin.prototype.showDetails = function (data, opener) {
        if (this.$details)
            this.$details.remove();
        $('.gig-debug-selected').removeClass('gig-debug-selected');
        if (opener)
            $(opener).addClass('gig-debug-selected');
        var elDataContainer = $('<div class="gig-debug-container gig-debug-data-details"></div>');
        this.$details = elDataContainer;
        elDataContainer.css({
            top: this.$barContainer.height() + 5,
        });
        var elData = this.json2html(data, false);
        elData.find('.gig-debug-data-details-openButton').click(function (e) {
            var btn = $(e.target);
            var elData = btn.prop('elData');
            elData.toggleClass('gig-debug-data-details-closed');
            elData.toggleClass('gig-debug-data-details-open');
            btn.toggleClass('gig-debug-data-details-pressed');
        });
        elDataContainer.append(elData);
        elDataContainer.appendTo(document.body);
    };
    DebugPlugin.prototype.getInfo = function () {
        var oInfo = {
            API: {
                'API domain': window.gigya.partnerSettings.plugins['apiDomain'],
                'API adapter': window.gigya._.apiAdapter.name,
            },
            'socialize.js': {
                environment: window.gigya.dataCenter,
                build: window.gigya.build,
                'init time': window.gigya.localInfo.initTime.toLocaleString(),
                'API key': window.gigya.thisScript.APIKey,
                'global conf': window.gigya.thisScript.globalConf,
                language: window.gigya.thisScript.lang,
                'URL params': window.gigya.thisScript.URLParams,
                'base URL': window.gigya.thisScript.baseDomain,
                'found script element': window.gigya.thisScript.scriptElement != null,
                'service queues': window.gigya.utils.queue._servicesStatus(),
            },
            domain: {
                'page domain': window.gigya.localInfo.pageDomain,
                'base domain': window.gigya.localInfo.baseDomain,
                'base domains list': window.gigya.partnerSettings.baseDomains,
                cname: window.gigya.partnerSettings.cname || 'N/A',
            },
            SSO: {
                key: window.gigya.partnerSettings.ssoKey || 'N/A',
                'logout URL': window.gigya.partnerSettings.ssoLogoutUrl || 'N/A',
            },
            browser: {
                'user agent': window.gigya.localInfo.userAgent,
                'window messaging method': InternalFlows_1.MessagingMethod[window.gigya.localInfo['messagingMethod']],
            },
            '3rd party integrations': {
                facebook: {
                    'app ID': (window.gigya.providersConfig.facebook && window.gigya.providersConfig.facebook.appID) || 'N/A',
                    'initialized time': window.gigya.external.facebook.initializedTime ? window.gigya.external.facebook.initializedTime.toLocaleTimeString() : 'N/A',
                    connected: window.gigya.external.facebook.isConnected,
                    'logged in': window.gigya.external.facebook.isLoggedIn,
                },
            },
            'default plugin params': window.gigya.partnerSettings.plugins,
            'local info': window.gigya.localInfo,
        };
        return oInfo;
    };
    DebugPlugin.prototype.initUI = function () {
        var _this = this;
        this.$container = $('#' + this.params['containerID'])
            .addClass('gig-debug-container')
            .html(this.templates['debugBar']);
        this.$barContainer = this.$container.find('.gig-debug-bar-container');
        this.$lastLogEntry = this.$container.find('.gig-debug-lastLog');
        this.$user = this.$container.find('.gig-debug-user');
        this.$user.click(function (e) {
            if (_this.currentUser && _this.currentUser['UID']) {
                _this.showDetails(_this.currentUser, _this.$user);
            }
        });
        this.$apiKey = this.$container
            .find('.gig-debug-apikey')
            .val(window.gigya.thisScript.APIKey)
            .click(function () {
            _this.$apiKey.select();
        });
        this.$historyButton = this.$container.find('.gig-debug-historyButton').click(function () {
            _this.$history.slideToggle();
        });
        this.$detailsButton = this.$container.find('.gig-debug-detailsButton').click(function () {
            if (_this.$details)
                _this.$details.slideToggle();
        });
        this.$saveCheckbox = this.$container
            .find('.gig-debug-autoload')
            .attr('checked', window.gigya.utils.cookie.get(gigDebugCookieKey) == '1')
            .change(function () {
            if (FlagService_1.FlagService.setCookieSameSiteLaxLowPriority) {
                window.gigya.utils.cookie.set(gigDebugCookieKey, _this.shouldSaveAsString(), null, null, null, 'Lax');
            }
            else {
                window.gigya.utils.cookie.set(gigDebugCookieKey, _this.shouldSaveAsString());
            }
        });
        this.$hideButton = this.$container.find('.gig-debug-hideButton').click(function () {
            _this.$history.slideUp();
            if (_this.$details)
                _this.$details.slideUp();
            _this.$barContainer.slideToggle();
        });
        var infoButton = this.$container.find('.gig-debug-infoButton');
        infoButton.click(function () {
            _this.showDetails(_this.getInfo(), infoButton);
        });
        this.$container.find('.gig-debug-importText').click(function () {
            _this.importJson();
        });
        this.$container.find('.gig-debug-import').change(function (e) {
            _this.onFileSelected(e.target.files);
        });
        this.$container.find('.gig-debug-exportButton').click(function () {
            _this.exportJson();
        });
        this.$container.find('.gig-debug-clearButton').click(function () {
            _this.clearAll();
        });
        var cssPrefix = this.params['cssPrefix'];
        if (cssPrefix || !this.addedCss) {
            window.gigya._.plugins.utils.css.addCss(DefaultCss_1.defaultCss.reset, cssPrefix);
            var fixedCss = window.gigya.pluginUtils.css.fixCss(DefaultCss_1.defaultCss.global);
            window.gigya._.plugins.utils.css.addCss(fixedCss, cssPrefix);
            this.addedCss = true;
        }
        this.$container.addClass('gig-debug-container');
        this.$history = (this.$history || $('<div></div>'))
            .addClass('gig-debug-container')
            .addClass('gig-debug-history')
            .css({
            top: this.$container.offset().top + this.$barContainer.height() + 5,
        })
            .appendTo(document.body)
            .hide();
    };
    DebugPlugin.prototype.shouldSaveAsString = function () {
        return this.$saveCheckbox.is(':checked') ? '1' : '0';
    };
    DebugPlugin.prototype.importJson = function () {
        var btn = this.$container.find('.gig-debug-importButton');
        btn.addClass('gig-debug-import-shown');
    };
    DebugPlugin.prototype.onFileSelected = function (files) {
        var _this = this;
        var input = this.$container.find('.gig-debug-import');
        var btn = this.$container.find('.gig-debug-importButton');
        var reader = new FileReader();
        $(reader).load(function (event) {
            var file = event.target;
            _this.clearAll();
            if (_this.$details)
                _this.$details.slideUp();
            try {
                var oImport = JSON.parse(file.result);
                _this.addLog({
                    html: '=== Importing <span data-prop="info">' + input.val() + '</span> ===',
                    data: { info: oImport.info },
                    id: new Date().getTime() + '_' + Math.random(),
                    time: new Date(),
                });
                for (var i = 0; i < oImport.history.length; i++) {
                    var log = oImport.history[i];
                    log.time = new Date(log.time);
                    _this.addLog(log);
                }
                btn.removeClass('gig-debug-import-shown');
                _this.addLog({
                    html: '=== Import of <span data-prop="info">' + input.val() + '</span> complete ===',
                    data: { info: oImport.info },
                    id: new Date().getTime() + '_' + Math.random(),
                    time: new Date(),
                });
            }
            catch (ex) {
                _this.addLog({
                    html: '=== Import of <span data-prop="exception">' + input.val() + '</span> failed ===',
                    data: { exception: ex },
                    id: new Date().getTime() + '_' + Math.random(),
                    time: new Date(),
                    error: true,
                });
            }
        });
        reader.readAsText(files[0]);
    };
    DebugPlugin.prototype.clearAll = function () {
        this.clearHistory();
        this.$lastLogEntry.empty();
        if (this.$details)
            this.$details.slideUp();
        $('.gig-debug-selected').removeClass('gig-debug-selected');
    };
    DebugPlugin.prototype.exportJson = function () {
        var json = JSON.stringify(window.gigya.utils.object.clone({ history: this.history, info: this.getInfo() }, true, false, 4, null, true));
        var d = new Date();
        var filename = 'GigyaDebug_' + [d.getMonth() + 1, d.getDate(), d.getFullYear()].join('-') + '_' + d.getHours() + '_' + d.getMinutes() + '.json';
        if (typeof Blob != 'undefined') {
            var blob = new Blob([json], { type: 'application/json' });
            var url = URL.createObjectURL(blob);
            if (navigator.msSaveBlob) {
                navigator.msSaveBlob(blob, filename);
            }
            else if ('download' in document.createElement('a')) {
                var a = document.createElement('a');
                a.setAttribute('href', url);
                a.setAttribute('download', filename);
                var clickEvent = document.createEvent('MouseEvent');
                clickEvent.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null); // yuck!
                a.dispatchEvent(clickEvent);
            }
            else {
                window.open(url, '_blank', '');
            }
        }
        else {
            var ifr = document.createElement('iframe');
            ifr.style.display = 'none';
            window.gigya.utils.DOM.prependToBody(ifr);
            var doc = ifr.contentWindow.document;
            doc.open('application/json', 'replace');
            doc.charset = 'utf-8';
            doc.write(json);
            doc.close();
            doc.execCommand('SaveAs', true, filename.replace('.json', '.txt'));
            window.setTimeout(function () {
                ifr.parentNode.removeChild(ifr);
            }, 1000);
        }
    };
    return DebugPlugin;
}());
exports.DebugPlugin = DebugPlugin;


/***/ }),

/***/ "./src/utils/Gigya.Js.Plugins.Debug/app/DefaultCss.ts":
/*!************************************************************!*\
  !*** ./src/utils/Gigya.Js.Plugins.Debug/app/DefaultCss.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.imgBase = window.gigya._.getCdnResource('/gs/i/comments2/');
exports.defaultCss = {
    reset: [
        '.gig-debug-container *, *.gig-debug-container {',
        'word-wrap:break-word;padding:0px;margin:0px;color:inherit;text-decoration:none;width:auto;float:none;height:auto;',
        'font-family:arial;color:#FFF;position:static;text-align:left;vertical-align:baseline;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}',
    ].join(''),
    global: [
        'body {padding-top:100px !important}',
        '.gig-debug-container {z-index:99999999999999999;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;',
        'padding:5px;font-size:12px;position:fixed !important;top:0;left:0;width:100%;background-color:#000;opacity:0.85;color:#FFF}',
        '*.gig-debug-user {margin-bottom:5px;display:inline-block;}',
        '*.gig-debug-user-loggedIn {cursor:pointer;}',
        '*.gig-debug-selected {background-color:#FFF !important;color:#000 !important;border: 2px solid #FFFFFF;}',
        '*.gig-debug-user-loggedIn:hover {text-decoration:underline}',
        '*.gig-debug-apikey-container {margin-bottom:5px;background-color:#000;}',
        '*.gig-debug-apikey {width:500px;background-color:#000;border:none;}',
        '*.gig-debug-lastLog {display:inline-block;line-height:18px;}',
        '*.gig-debug-settings {margin-bottom:5px}',
        '*.gig-debug-footer {overflow:hidden;margin-top:5px;}',
        '*.gig-debug-historyButton, *.gig-debug-hideButton, *.gig-debug-detailsButton, *.gig-debug-infoButton, *.gig-debug-importButton, *.gig-debug-exportButton, *.gig-debug-clearButton {',
        'margin-right:20px;display:inline-block;width: 18px;text-align:center;font-size:15px;border: 1px solid #000;background-color:#3A3A3A;cursor: pointer;',
        'font-weight:bold}',
        '*.gig-debug-infoButton, *.gig-debug-importButton, *.gig-debug-exportButton, *.gig-debug-clearButton  {width:auto;padding: 0 3px;font-size:12px;}',
        '*.gig-debug-detailsButton, *.gig-debug-infoButton, *.gig-debug-importButton, *.gig-debug-exportButton, *.gig-debug-clearButton {float:right;margin-right:15px}',
        '*.gig-debug-historyButton.pressed, .gig-debug-historyButton:hover, *.gig-debug-hideButton:hover, ',
        '*.gig-debug-detailsButton.pressed, .gig-debug-detailsButton:hover, {background-color:#4A4A4A;}',
        '*.gig-debug-timestamp {margin-right:10px;color:#ffd800;}',
        '*.gig-debug-history {position: absolute;border:1px solid #000;border-radius:7px;border:1px solid #FFF;',
        'background-color:#000;color:#FFF;width:50%;height:400px;overflow: auto;padding:10px;}',
        '*.gig-debug-history div {font-weight:bold;}',
        '*.gig-debug-history-entry [data-prop] {color:#b6ff00;text-decoration:underline;cursor: pointer;}',
        '*.gig-debug-history-entry-error {background-color:#FF0000;}',
        '*.gig-debug-history-entry-beforeRequest [data-prop], *.gig-debug-history-entry-afterResponse [data-prop] {color:#B1B100;}',
        '*.gig-debug-history-entry-beforeRequest [data-prop], *.gig-debug-history-entry-beforePluginReqwuest [data-prop] {color:#3399FF;}',
        '*.gig-debug-hideButton {position:fixed;top:0;right:0;}',
        '*.gig-debug-data-details {width: 50%;left: 50%;height:400px;overflow:auto;border-radius:7px;border:1px solid #FFF;}',
        '*.gig-debug-data-details  li {margin-left:20px;}',
        '*.gig-debug-data-details  ul {}',
        '*.gig-debug-data-details-openButton {font-size:11px;display:inline-block;width: 15px;height:15px;line-height:15px;text-align:center;display:inline-block;cursor:pointer;}',
        '*.gig-debug-data-details-pressed {background-color:#FFF; color:#000;}',
        '*.gig-debug-data-details-closed, *.gig-debug-data-details-open {vertical-align:top;}',
        '*.gig-debug-data-details-closed {display:none}',
        '*.gig-debug-propertyName {color: #FFFF00;font-weight:bold;}',
        '*.gig-debug-propertyValue {margin-left:5px;}',
        '*.gig-debug-import {display:none}',
        '*.gig-debug-import-shown .gig-debug-import {display:inline-block;font-size:9px;}',
        '*.gig-debug-import-shown .gig-debug-importText {display:none;}',
    ].join(''),
};


/***/ }),

/***/ "./src/utils/Gigya.Js.Plugins.Debug/app/Templates.ts":
/*!***********************************************************!*\
  !*** ./src/utils/Gigya.Js.Plugins.Debug/app/Templates.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTemplates = {
    debugBar: [
        '<div class="gig-debug-hideButton">_</div>',
        '<div class="gig-debug-bar-container">',
        '<div class="gig-debug-user">&nbsp;</div>',
        '<div class="gig-debug-apikey-container">API key: <input class="gig-debug-apikey" readonly="readonly">&nbsp;</input></div>',
        '<div class="gig-debug-settings">',
        '<input type="checkbox" class="gig-debug-autoload"></input>&nbsp;Auto load</input>',
        '</div>',
        '<div style="gig-debug-footer">',
        '<div class="gig-debug-historyButton">...</div>',
        '<div class="gig-debug-lastLog">&nbsp;</div>',
        '<div class="gig-debug-detailsButton">...</div>',
        '<div class="gig-debug-infoButton">Info</div>',
        '<div class="gig-debug-importButton"><span class="gig-debug-importText">Import</span><input class="gig-debug-import" type="file" /></div>',
        '<div class="gig-debug-exportButton">Export</div>',
        '<div class="gig-debug-clearButton">Clear</div>',
        '</div>',
        '</div>',
    ].join(''),
};


/***/ }),

/***/ "./src/utils/Gigya.Js.Plugins.Debug/app/index.ts":
/*!*******************************************************!*\
  !*** ./src/utils/Gigya.Js.Plugins.Debug/app/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var Gigya_PluginsDebug = __webpack_require__(/*! src/utils/Gigya.Js.Plugins.Debug/app/DebugPlugin1 */ "./src/utils/Gigya.Js.Plugins.Debug/app/DebugPlugin1.ts");
var Gigya_PluginsDebug_1 = __webpack_require__(/*! src/utils/Gigya.Js.Plugins.Debug/app/DefaultCss */ "./src/utils/Gigya.Js.Plugins.Debug/app/DefaultCss.ts");
var Gigya_PluginsDebug_2 = __webpack_require__(/*! src/utils/Gigya.Js.Plugins.Debug/app/Templates */ "./src/utils/Gigya.Js.Plugins.Debug/app/Templates.ts");
if (!window.gigya._) {
    window.gigya._ = {};
}
if (!window.gigya._.plugins) {
    window.gigya._.plugins = {};
}
if (!window.gigya._.plugins.debug) {
    window.gigya._.plugins.debug = {};
}
if (!window.gigya._.plugins.debug.DebugPlugin) {
    window.gigya._.plugins.debug.DebugPlugin = {};
}
__webpack_provided_Object_dot_assign(window.gigya._.plugins.debug, Gigya_PluginsDebug, Gigya_PluginsDebug_1, Gigya_PluginsDebug_2);
window.gigya._.UI.attachPlugin(Gigya_PluginsDebug.DebugPlugin, 'socialize', 'debug', 'showDebugUI');

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5BZGFwdGVycy5XZWIvYXBwL1Nzb1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuQWRhcHRlcnMuV2ViL2FwcC9Ub2tlblN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9HU0Vycm9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvSW50ZXJuYWxGbG93cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9TZXJ2aWNlcy9GbGFnU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvU2VydmljZXMvU2Vzc2lvblNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL0pTT04udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL1VSTC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvVXJpLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9jb29raWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2RvbWFpbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2dsb2JhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvZ2x0ZXhwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9rZXlWYWx1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvbG9jYWxTdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3F1ZXVlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9zZXNzaW9uQ2FjaGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3N0cmluZ1V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy90b2dnbGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy92YWxpZGF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL1NlcnZpY2VQcm94eS9TZXJ2aWNlUHJveHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvU2VydmljZVByb3h5L3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9maWRtL0dpZ3lhLkpTLlNTTy9hcHAvZ2xvYmFsUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZG0vR2lneWEuSlMuU1NPL2FwcC9zc28udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZG0vR2lneWEuSlMuU1NPL2FwcC9zc29VdGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvR2lneWEuSnMuUGx1Z2lucy5EZWJ1Zy9hcHAvRGVidWdQbHVnaW4xLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9HaWd5YS5Kcy5QbHVnaW5zLkRlYnVnL2FwcC9EZWZhdWx0Q3NzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9HaWd5YS5Kcy5QbHVnaW5zLkRlYnVnL2FwcC9UZW1wbGF0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0dpZ3lhLkpzLlBsdWdpbnMuRGVidWcvYXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLHlCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTs7QUFFTztBQUNQO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztB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QUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDcEosRUFBRSxDQUFDLENBQUM7UUFFSixFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDL0UsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUUvRSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ1QsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUM5RSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUs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LENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUMiLCJmaWxlIjoiZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMuZGVidWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy91dGlscy9HaWd5YS5Kcy5QbHVnaW5zLkRlYnVnL2FwcC9pbmRleC50c1wiKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImV4cG9ydCBlbnVtIEVkaXRhYmxlVGZhUHJvdmlkZXJzVHlwZXMge1xuICAgIGdpZ3lhUGhvbmUsXG4gICAgZ2lneWFUb3RwLFxuICAgIGdpZ3lhUHVzaCxcbiAgICBsaXZlbGluayxcbn1cbmV4cG9ydCBjb25zdCBnaWd5YUFzc2VydGlvbkV4cGlyYXRpb24gPSA2MCAqIDUgKiAxMDAwO1xuZXhwb3J0IGNvbnN0IHNlbnNpdGl2ZVBhcmFtc092ZXJyaWRlID0gJ2xvZ2luX3Rva2VuJztcblxuZXhwb3J0IGNvbnN0IEdJR1lBX1BBUkFNX1BSRUZJWCA9ICdnaWdfJ1xuXG5leHBvcnQgY29uc3QgR0lHWUFfSU5URVJOQUxfUEFSQU1fUFJFRklYID0gYCR7R0lHWUFfUEFSQU1fUFJFRklYfWlfYFxuXG5leHBvcnQgY29uc3QgR0lHWUFfSU5URVJOQUxfUEFSQU1TID0gYCR7R0lHWUFfUEFSQU1fUFJFRklYfWFjdGlvbnNgXG4iLCJpbXBvcnQge1xuICAgIE1vZGUsXG4gICAgU0RLU2V0R3JvdXBUb2tlblBhcmFtcyxcbiAgICBTREtHZXRHcm91cFRva2VuUGFyYW1zLFxuICAgIFNES0xvZ291dFBhcmFtcyxcbiAgICBTREtSZW1vdmVHcm91cFRva2VuUGFyYW1zLFxuICAgIFNES1NldExvZ2luVG9rZW5FeHBQYXJhbXMsXG4gICAgU0RLR2V0TG9naW5Ub2tlbkV4cFBhcmFtcyxcbiAgICBTREtDaGVja1Rva2VuUmVuZXdQYXJhbXMsXG4gICAgU0RLQ2FuYXJ5SW5kaWNhdGlvblBhcmFtcyxcbiAgICBTREtCYXNlUGFyYW1zLFxuICAgIEZyYW1lQmFzZVBhcmFtcyxcbiAgICBHZXRHcm91cFRva2VuUmVzcG9uc2UsXG4gICAgU0RLU2V0R3JvdXBDb250ZXh0LFxuICAgIElTc29TZXJ2aWNlLFxuICAgIEdldExvZ2luVG9rZW5FeHBSZXNwb25zZSxcbiAgICBDYW5hcnlJbmRpY2F0aW9uUmVzcG9uc2UsXG4gICAgU2V0TG9naW5Ub2tlbkV4cFJlc3BvbnNlLFxuICAgIEdldEdyb3VwQXBpRG9tYWluUmVzcG9uc2UsXG4gICAgU2V0R3JvdXBBcGlEb21haW5QYXJhbXMsXG4gICAgU0RLR2V0R3JvdXBBcGlEb21haW5QYXJhbXMsXG4gICAgU0RLU2V0R3JvdXBBcGlEb21haW5QYXJhbXMsXG4gICAgU0RLTG9nb3V0UmVzcG9uc2UsXG59IGZyb20gJ3NyYy9maWRtL0dpZ3lhLkpTLlNTTy9hcHAvaW50ZXJmYWNlcyc7XG5pbXBvcnQge1Nzb30gZnJvbSAnc3JjL2ZpZG0vR2lneWEuSlMuU1NPL2FwcC9zc28nO1xuaW1wb3J0IHtnZXRTdG9yYWdlRG9tYWlufSBmcm9tICcuLi8uLi9HaWd5YS5Kcy9hcHAvVXRpbHMvZG9tYWlucyc7XG5pbXBvcnQge2NyZWF0ZUlmcmFtZX0gZnJvbSBcIi4uLy4uL1NlcnZpY2VQcm94eS91dGlsc1wiO1xuaW1wb3J0IHtGbGFnU2VydmljZX0gZnJvbSBcIi4uLy4uL0dpZ3lhLkpzL2FwcC9TZXJ2aWNlcy9GbGFnU2VydmljZVwiO1xuaW1wb3J0IHtTZXJ2aWNlUHJveHl9IGZyb20gJy4uLy4uL1NlcnZpY2VQcm94eS9TZXJ2aWNlUHJveHknO1xuXG4vLyAjIyMgU2luZ2xlIFNpZ24gT24gYWNyb3NzIG11bHRpcGxlIGRvbWFpbnMgIyMjXG5cbmxldCBjYWxsYmFja0NvdW50ZXIgPSAwO1xuZXhwb3J0IHZhciBfc3RvcmVkTG9naW5Ub2tlbkV4cDogc3RyaW5nO1xuZXhwb3J0IGxldCBfcmVxdWVzdFRpbWVvdXQ6IG51bWJlciA9IDMwMDA7XG5cbmV4cG9ydCBjbGFzcyBTc29TZXJ2aWNlIGltcGxlbWVudHMgSVNzb1NlcnZpY2Uge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogSVNzb1NlcnZpY2U7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0SW5zdGFuY2Uoc3NvS2V5OiBzdHJpbmcgPSBnaWd5YS5wYXJ0bmVyU2V0dGluZ3Muc3NvS2V5KTogUHJvbWlzZTxJU3NvU2VydmljZT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICBpZiAoIXNzb0tleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChGbGFnU2VydmljZS5sb2FkU3NvRnJhbWVPbmx5T25jZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHFzID0gZ2lneWEudXRpbHMua2V5VmFsdWUuc2VyaWFsaXplKHtcbiAgICAgICAgICAgICAgICAgICAgQVBJS2V5OiBzc29LZXksXG4gICAgICAgICAgICAgICAgICAgIHZlcnNpb246IGdpZ3lhLmJ1aWxkLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgIGJ1aWxkOiBnaWd5YS5idWlsZC5udW1iZXIgfHwgLTEsXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZUtleTogZ2lneWEudGhpc1NjcmlwdC5BUElLZXksXG4gICAgICAgICAgICAgICAgICAgIG9uZUZyYW1lOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW46IGAke2dpZ3lhLmxvY2FsSW5mby5wcm90b2NvbH06Ly8ke2RvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lfWAsXG4gICAgICAgICAgICAgICAgICAgIHNzb1NlZ21lbnQ6IGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5zc29TZWdtZW50IHx8ICcnXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly8ke2dldFN0b3JhZ2VEb21haW4oKX0vZ3Mvc3NvLmh0bT8ke3FzfWA7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzc29BZGFwdGVyID0gbmV3IFNlcnZpY2VQcm94eSh1cmwpXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHNzb0FkYXB0ZXIuaW5pdCgnU1NPJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gc3NvQWRhcHRlci53cmFwV2l0aDxJU3NvU2VydmljZT4oU3NvKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuZXJyb3IoYGVycm9yIGluaXRpYWxpemUgc3NvIGZyYW1lYCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU6ICdTc29TZXJ2aWNlLmluaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgU3NvU2VydmljZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBTc29TZXJ2aWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGVja1Rva2VuUmVuZXcobG9naW5Ub2tlbjogc3RyaW5nKTogUHJvbWlzZTxHZXRHcm91cFRva2VuUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgY2hlY2tUb2tlblJlbmV3KHtsb2dpblRva2VuLCBjYWxsYmFjazogcmVzb2x2ZX0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VG9rZW4oKTogUHJvbWlzZTxHZXRHcm91cFRva2VuUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgZ2V0R3JvdXBUb2tlbih7Y2FsbGJhY2s6IHJlc29sdmV9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRva2VuRXhwaXJhdGlvbigpOiBQcm9taXNlPEdldExvZ2luVG9rZW5FeHBSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBnZXRMb2dpblRva2VuRXhwKHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogcmVzb2x2ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGxvZ291dCgpOiBQcm9taXNlPFNES0xvZ291dFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIGxvZ291dCh7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IHJlc29sdmVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVUb2tlbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gIHtcbiAgICAgICAgICAgIHJlbW92ZUdyb3VwVG9rZW4oe2NhbGxiYWNrOiByZXNvbHZlfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEdyb3VwQ29udGV4dChncm91cENvbnRleHQ6IGFueSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBzZXRHcm91cENvbnRleHRDb29raWUoe2dyb3VwQ29udGV4dCwgY2FsbGJhY2s6IHJlc29sdmV9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VG9rZW4obHQ6IHN0cmluZywgZXhwaXJhdGlvbj86IG51bWJlciB8IHN0cmluZywgZ2x0ZXhwPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHNldEdyb3VwVG9rZW4oe1xuICAgICAgICAgICAgICAgIGx0LCBleHBpcmF0aW9uLCBnbHRleHAsIGNhbGxiYWNrOiByZXNvbHZlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VG9rZW5FeHBpcmF0aW9uKGxvZ2luVG9rZW5FeHA6IHN0cmluZywgdXNlQ2FjaGU6IGJvb2xlYW4gPSB0cnVlKTogUHJvbWlzZTxTZXRMb2dpblRva2VuRXhwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgc2V0TG9naW5Ub2tlbkV4cCh7XG4gICAgICAgICAgICAgICAgbG9naW5Ub2tlbkV4cCxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogcmVzb2x2ZVxuICAgICAgICAgICAgfSwgdXNlQ2FjaGUpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIHN5bmNDYW5hcnlJbmRpY2F0aW9uKGlzQ2FuYXJ5OiBzdHJpbmcsIGNhbmFyeVZlcnNpb246IHN0cmluZyk6IFByb21pc2U8Q2FuYXJ5SW5kaWNhdGlvblJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHN5bmNDYW5hcnlJbmRpY2F0aW9uKHtpc0NhbmFyeSwgY2FuYXJ5VmVyc2lvbiwgY2FsbGJhY2s6IHJlc29sdmV9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEdyb3VwQXBpRG9tYWluKCk6IFByb21pc2U8R2V0R3JvdXBBcGlEb21haW5SZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBnZXRHcm91cEFwaURvbWFpbih7Y2FsbGJhY2s6IHJlc29sdmV9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEdyb3VwQXBpRG9tYWluKGRvbWFpbjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHNldEdyb3VwQXBpRG9tYWluKHtjYWxsYmFjazogcmVzb2x2ZSwgZG9tYWlufSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gX3JlcXVlc3QoXG4gICAgbW9kZTogTW9kZSxcbiAgICBwOlxuICAgICAgICB8IFNES1NldEdyb3VwVG9rZW5QYXJhbXNcbiAgICAgICAgfCBTREtHZXRHcm91cFRva2VuUGFyYW1zXG4gICAgICAgIHwgU0RLTG9nb3V0UGFyYW1zXG4gICAgICAgIHwgU0RLUmVtb3ZlR3JvdXBUb2tlblBhcmFtc1xuICAgICAgICB8IFNES1NldExvZ2luVG9rZW5FeHBQYXJhbXNcbiAgICAgICAgfCBTREtHZXRMb2dpblRva2VuRXhwUGFyYW1zXG4gICAgICAgIHwgU0RLQ2hlY2tUb2tlblJlbmV3UGFyYW1zXG4gICAgICAgIHwgU0RLQ2FuYXJ5SW5kaWNhdGlvblBhcmFtc1xuICAgICAgICB8IFNES1NldEdyb3VwQ29udGV4dFxuKSB7XG4gICAgaWYgKCFnaWd5YS5wYXJ0bmVyU2V0dGluZ3Muc3NvS2V5KSB7XG4gICAgICAgIGlmIChwICYmIHAuY2FsbGJhY2spIHtcbiAgICAgICAgICAgIChwIGFzIFNES0Jhc2VQYXJhbXMpLmNhbGxiYWNrKHt9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHBhcmFtczogRnJhbWVCYXNlUGFyYW1zO1xuICAgIGlmICghcCkge1xuICAgICAgICBwYXJhbXMgPSB7fSBhcyBhbnk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRW5zdXJlIHRoZSBwYXJhbXMgcGFzc2VkIGFyZSBub3QgbW9kaWZpZWQgYnkgcmVmZXJlbmNlLlxuICAgICAgICBwYXJhbXMgPSBnaWd5YS51dGlscy5vYmplY3QuY2xvbmUocCk7XG4gICAgfVxuXG4gICAgbGV0IGlmcjogSFRNTElGcmFtZUVsZW1lbnQ7XG4gICAgbGV0IHJlcXVlc3RUaW1lb3V0SWQ7XG5cbiAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIGdpZ3lhLmxvZ2dlci5kZWJ1ZyhgY2xlYW5pbmcgc3NvIGlmcmFtZWApO1xuXG4gICAgICAgIC8vIGNsZWFudXAgaWZyYW1lXG4gICAgICAgIGlmci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGlmcik7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHJlcXVlc3RUaW1lb3V0SWQpO1xuXG4gICAgICAgIC8vIFR5cGVjYXN0IHJlc3BvbnNlLlxuICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvckNvZGUgJiYgdHlwZW9mIHJlc3BvbnNlLmVycm9yQ29kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5lcnJvckNvZGUgPSBOdW1iZXIocmVzcG9uc2UuZXJyb3JDb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5leHBpcmVzX2luICYmIHR5cGVvZiByZXNwb25zZS5leHBpcmVzX2luID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmV4cGlyZXNfaW4gPSBOdW1iZXIocmVzcG9uc2UuZXhwaXJlc19pbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocCAmJiBwLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICAocCBhcyBTREtCYXNlUGFyYW1zKS5jYWxsYmFjayhyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHBhcmFtcy5tID0gbW9kZTtcbiAgICBwYXJhbXMuZCA9IGAke2dpZ3lhLmxvY2FsSW5mby5wcm90b2NvbH06Ly8ke2RvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lfWA7XG5cbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucG9ydCkge1xuICAgICAgICBwYXJhbXMuZCArPSAnOicgKyBkb2N1bWVudC5sb2NhdGlvbi5wb3J0O1xuICAgIH1cblxuICAgIC8vIENocm9tZSBjYWNoZXMgdGhlIGZyYWdtZW50IHdoZW4gbG9hZGVkIGZvciB0aGUgZmlyc3QgdGltZS4gd29ya2Fyb3VuZDpcbiAgICBwYXJhbXMuY2FsbGJhY2tJRCA9ICdnaWdfc3NvX2NiJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgJ18nICsgY2FsbGJhY2tDb3VudGVyKys7XG4gICAgcGFyYW1zLnNBUElLZXkgPSBnaWd5YS50aGlzU2NyaXB0LkFQSUtleTtcbiAgICBwYXJhbXNbZ2lneWEubG9nZ2VyLmNvbmZpZ0tleV0gPSBKU09OLnN0cmluZ2lmeShnaWd5YS5sb2dnZXIuZ2V0Q29uZmlnKCkpO1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZ2lneWEudXRpbHMua2V5VmFsdWUuc2VyaWFsaXplKHBhcmFtcyk7XG5cbiAgICBjb25zdCBpZnJhbWVMb2FkZXIgPSAocmV0cmllcyA9IDApID0+IHtcblxuICAgICAgICBnaWd5YS51dGlscy54ZC5hZGRNZXNzYWdlTGlzdGVuZXIocGFyYW1zLmNhbGxiYWNrSUQsIHt9LCBmYWxzZSwgY2FsbGJhY2ssIGdpZ3lhLl8uTWVzc2FnaW5nTWV0aG9kLlBvc3RNZXNzYWdlKTtcbiAgICAgICAgaWZyID0gX2dldElmcmFtZShwYXJhbXMuY2FsbGJhY2tJRCk7XG5cbiAgICAgICAgY29uc3QgZm5PbkxvYWQgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIHJlcXVlc3RUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgICAgIC8vIHRvdGFsIGZhaWx1cmVcbiAgICAgICAgICAgICAgICBpZiAocmV0cmllcyA8PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmVycm9yKGBTU08gQ29tbXVuaWNhdGlvbiBUaW1lb3V0YCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgSUUxMVByaXZhdGVNb2RlOiBnaWd5YS5sb2NhbEluZm8uaXNJRTExICYmICF3aW5kb3cuaW5kZXhlZERCLCBtb2RlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gcmVzZXRcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy54ZC5yZW1vdmVNZXNzYWdlTGlzdGVuZXIocGFyYW1zLmNhbGxiYWNrSUQpO1xuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVFbGVtZW50KGlmcik7XG5cbiAgICAgICAgICAgICAgICAvLyByZXRyeVxuICAgICAgICAgICAgICAgIGlmcmFtZUxvYWRlcihyZXRyaWVzIC0gMSk7XG5cbiAgICAgICAgICAgIH0sIF9yZXF1ZXN0VGltZW91dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHFzID0gZ2lneWEudXRpbHMua2V5VmFsdWUuc2VyaWFsaXplKHtcbiAgICAgICAgICAgICAgICBBUElLZXk6IGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5zc29LZXksXG4gICAgICAgICAgICAgICAgc3NvU2VnbWVudDogZ2lneWEucGFydG5lclNldHRpbmdzLnNzb1NlZ21lbnQgfHwgJycsIC8vIFRoZXJlIGlzIG5vIGRlZmF1bHQgc2VnbWVudCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAgICAgICAgICAgICAgdmVyc2lvbjogZ2lneWEuYnVpbGQudmVyc2lvbixcbiAgICAgICAgICAgICAgICBidWlsZDogZ2lneWEuYnVpbGQubnVtYmVyIHx8IC0xLCAvLyBUbyBjbGVhciBDRE4gY2FjaGUuLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHNob3VsZCBhbHdheXMgbG9hZCBmcm9tIGdpZ3lhJ3MgZG9tYWluIGV4Y2VwdCB3aGVuIG92ZXJyaWRlbiBmb3IgIzUwMjYxLlxuICAgICAgICAgICAgaWZyLnNyYyA9IGBodHRwczovLyR7Z2V0U3RvcmFnZURvbWFpbigpfS9ncy9zc28uaHRtPyR7cXN9IyR7ZnJhZ21lbnR9YDtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVFdmVudExpc3RlbmVyKGlmciwgJ2xvYWQnLCBmbk9uTG9hZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoaWZyLCAnbG9hZCcsIGZuT25Mb2FkKTtcblxuICAgICAgICBnaWd5YS5sb2dnZXIuZGVidWcoYG9wZW5pbmcgc3NvIGlmcmFtZWAsIHBhcmFtcyk7XG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYXBwZW5kVG9Cb2R5KGlmcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnaWd5YS51dGlscy5mdW5jdGlvbnMuaW52b2tlT25QYWdlTG9hZCgoKSA9PiBnaWd5YS51dGlscy5ET00uYXBwZW5kVG9Cb2R5KGlmcikpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGlmcmFtZUxvYWRlcigzKTtcbn1cbmZ1bmN0aW9uIF9nZXRJZnJhbWUocmVxdWVzdElkOiBzdHJpbmcpOiBIVE1MSUZyYW1lRWxlbWVudCB7XG4gICAgbGV0IGlmcjtcbiAgICBpZiAoRmxhZ1NlcnZpY2UuaGlkZVNTT0ZyYW1lKSB7XG4gICAgICAgIGlmciA9IGNyZWF0ZUlmcmFtZSgnU1NPIEZyYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWZyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgIC8vIEFic29sdXRlIHBvc2l0aW9uIHdpdGggLTEwMDBweCBjYXVzZXMgc2Nyb2xsaW5nIHNsb3dkb3ducyBvbiBtb2JpbGUgZGV2aWNlcy5cbiAgICAgICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5pc0lPUyB8fCBnaWd5YS5sb2NhbEluZm8uaXNJT1NDaHJvbWUgfHwgZ2lneWEubG9jYWxJbmZvLmlzQW5kcm9pZCkge1xuICAgICAgICAgICAgaWZyLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgICAgICBpZnIuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICBpZnIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmci5zdHlsZS53aWR0aCA9ICczMHB4JztcbiAgICAgICAgICAgIGlmci5zdHlsZS5oZWlnaHQgPSAnMTBweCc7XG4gICAgICAgICAgICBpZnIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgaWZyLnN0eWxlLnRvcCA9ICctMTAwMHB4JztcbiAgICAgICAgICAgIGlmci5zdHlsZS5sZWZ0ID0gJy0xMDAwcHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWZyLmlkID0gJ2dpZ19zc29fJyArIHJlcXVlc3RJZDtcbiAgICBnaWd5YS51dGlscy5mdW5jdGlvbnMuYWRkU3JjVG9JRnJhbWVJZk5lZWRlZChpZnIpO1xuXG4gICAgcmV0dXJuIGlmcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRHcm91cFRva2VuKHBhcmFtcz86IFNES0dldEdyb3VwVG9rZW5QYXJhbXMpOiB2b2lkIHtcbiAgICBnaWd5YS5sb2dnZXIuaW5mbyhgdHJ5aW5nIHRvIGdldCBzc28gZ3JvdXAgbG9naW4gdG9rZW5gKTtcblxuICAgIF9yZXF1ZXN0KCdnZXRUb2tlbicsIHtcbiAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogR2V0R3JvdXBUb2tlblJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBfc3RvcmVkTG9naW5Ub2tlbkV4cCA9IHJlc3BvbnNlLmdsdGV4cDtcbiAgICAgICAgICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmNhbGxiYWNrKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEdyb3VwVG9rZW4ocGFyYW1zOiBTREtTZXRHcm91cFRva2VuUGFyYW1zKTogdm9pZCB7XG4gICAgLy8gQWRkIGN1cnJlbnQgZ2x0ZXhwIGNvb2tpZSB0byB0aGUgcGFyYW1ldGVycyBhdXRvbWF0aWNhbGx5LlxuICAgIGlmICghcGFyYW1zLmdsdGV4cCkge1xuICAgICAgICBwYXJhbXMuZ2x0ZXhwID0gZ2lneWEudXRpbHMuY29va2llLmdldChgZ2x0ZXhwXyR7Z2lneWEudGhpc1NjcmlwdC5BUElLZXl9YCk7XG4gICAgfVxuICAgIF9yZXF1ZXN0KCdzZXRUb2tlbicsIHBhcmFtcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXQocGFyYW1zPzogU0RLTG9nb3V0UGFyYW1zKTogdm9pZCB7XG4gICAgX3JlcXVlc3QoJ2xvZ291dCcsIHBhcmFtcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVHcm91cFRva2VuKHBhcmFtcz86IFNES1JlbW92ZUdyb3VwVG9rZW5QYXJhbXMpOiB2b2lkIHtcbiAgICBfcmVxdWVzdCgncmVtb3ZlVG9rZW4nLCBwYXJhbXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9naW5Ub2tlbkV4cChwYXJhbXM6IFNES1NldExvZ2luVG9rZW5FeHBQYXJhbXMsIHVzZUNhY2hlID0gdHJ1ZSk6IHZvaWQge1xuICAgIC8vIERvbid0IHN0b3JlIHRoZSBsb2dpbiB0b2tlbiBhZ2FpbiBpZiB3ZSd2ZSBhbHJlYWR5IHN0b3JlZCBpdC5cbiAgICBpZiAodXNlQ2FjaGUgJiYgX3N0b3JlZExvZ2luVG9rZW5FeHAgJiYgcGFyYW1zLmxvZ2luVG9rZW5FeHAgPT09IF9zdG9yZWRMb2dpblRva2VuRXhwKSB7XG4gICAgICAgIGlmIChwYXJhbXMuY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHBhcmFtcy5jYWxsYmFjayh7IGdsdGV4cDogX3N0b3JlZExvZ2luVG9rZW5FeHAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfc3RvcmVkTG9naW5Ub2tlbkV4cCA9IHBhcmFtcy5sb2dpblRva2VuRXhwO1xuICAgIF9yZXF1ZXN0KCdzZXRMb2dpblRva2VuRXhwJywgcGFyYW1zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ2luVG9rZW5FeHAocGFyYW1zOiBTREtHZXRMb2dpblRva2VuRXhwUGFyYW1zKTogdm9pZCB7XG4gICAgX3JlcXVlc3QoJ2dldExvZ2luVG9rZW5FeHAnLCBwYXJhbXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tUb2tlblJlbmV3KHBhcmFtczogU0RLQ2hlY2tUb2tlblJlbmV3UGFyYW1zKTogdm9pZCB7XG4gICAgZ2lneWEubG9nZ2VyLmluZm8oYHZlcmlmeWluZyBsb2dpbiB0b2tlbiB3aXRoIHNzbyBncm91cGApO1xuICAgIF9yZXF1ZXN0KCdjaGVja1Rva2VuUmVuZXcnLCBwYXJhbXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3luY0NhbmFyeUluZGljYXRpb24ocGFyYW1zOiBTREtDYW5hcnlJbmRpY2F0aW9uUGFyYW1zKTogdm9pZCB7XG4gICAgX3JlcXVlc3QoJ3N5bmNDYW5hcnlJbmRpY2F0aW9uJywgcGFyYW1zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEdyb3VwQ29udGV4dENvb2tpZShwYXJhbXM6IFNES1NldEdyb3VwQ29udGV4dCl7XG4gICAgX3JlcXVlc3QoJ3NldEdyb3VwQ29udGV4dCcsIHBhcmFtcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRHcm91cEFwaURvbWFpbihwYXJhbXM6IFNES1NldEdyb3VwQXBpRG9tYWluUGFyYW1zKTogdm9pZCB7XG4gICAgX3JlcXVlc3QoJ3NldEdyb3VwQXBpRG9tYWluJywgcGFyYW1zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyb3VwQXBpRG9tYWluKHBhcmFtczogU0RLR2V0R3JvdXBBcGlEb21haW5QYXJhbXMpe1xuICAgIF9yZXF1ZXN0KCdnZXRHcm91cEFwaURvbWFpbicsIHBhcmFtcyk7XG59XG4iLCJpbXBvcnQgeyBHZXRHcm91cFRva2VuUmVzcG9uc2UgfSBmcm9tICdzcmMvZmlkbS9HaWd5YS5KUy5TU08vYXBwL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgU3NvU2VydmljZSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLkFkYXB0ZXJzLldlYi9hcHAvU3NvU2VydmljZSc7XG5pbXBvcnQgeyBHU0Vycm9ycyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9HU0Vycm9ycyc7XG5pbXBvcnQgeyBzZXNzaW9uRGF0YSB9ICBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvU2VydmljZXMvU2Vzc2lvblNlcnZpY2UnO1xuaW1wb3J0IHtGbGFnU2VydmljZX0gZnJvbSAgJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9TZXJ2aWNlcy9GbGFnU2VydmljZSc7XG5cbi8vIExvYWQgYW5kIHNhdmUgdG9rZW5zIGJhc2VkIG9uIEFQSSBrZXlzXG5sZXQgX2N1clNlc3Npb25FeHBpcmF0aW9uOiBudW1iZXI7XG5sZXQgX2JlYXJlclRva2VuID0gbnVsbDtcbmNvbnN0IF90cmllZEdBQ3MgPSB7fTtcbmV4cG9ydCBjb25zdCBhY3RpdmVOYW1lc3BhY2VzID0ge307XG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZEdsdEV4cChnbHRleHA6IHN0cmluZyA9IGdldEdsdGV4cENvb2tpZSgpKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFnbHRleHAgfHwgZ2lneWEudXRpbHMuZ2x0ZXhwLmlzVmFsaWQoZ2x0ZXhwKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRHbHRleHBDb29raWUoQVBJS2V5OiBzdHJpbmcgPSBnaWd5YS50aGlzU2NyaXB0LkFQSUtleSkge1xuICAgIHJldHVybiBnaWd5YS51dGlscy5jb29raWUuZ2V0KGdldEdsdENvb2tpZUtleShBUElLZXkpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRHbHRleHAoZ2x0ZXhwOiBzdHJpbmcsIEFQSUtleTogc3RyaW5nID0gZ2lneWEudGhpc1NjcmlwdC5BUElLZXkpIHtcbiAgICBpZiAoZ2x0ZXhwICYmICFpc0dpZ3lhQ29va2llRG9tYWluKCkpIHtcbiAgICAgICAgZ2lneWEudXRpbHMuY29va2llLnJlbW92ZShnZXRHbHRDb29raWVLZXkoQVBJS2V5KSk7XG5cbiAgICAgICAgaWYoRmxhZ1NlcnZpY2Uuc2V0Q29va2llU2FtZVNpdGVMYXhTZXNzaW9uKSB7XG4gICAgICAgICAgICBnaWd5YS51dGlscy5jb29raWUuc2V0KGdldEdsdENvb2tpZUtleShBUElLZXkpLCBnbHRleHAsIG51bGwsIG51bGwsIG51bGwsICdMYXgnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLmNvb2tpZS5zZXQoZ2V0R2x0Q29va2llS2V5KEFQSUtleSksIGdsdGV4cCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEdsdENvb2tpZUtleShBUElLZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBnbHRleHBfJHtBUElLZXl9YDtcbn1cblxuZnVuY3Rpb24gX2dldFRva2VuQ29va2llTmFtZShBUElLZXkgPSBnaWd5YS50aGlzU2NyaXB0LkFQSUtleSkge1xuICAgIGlmIChBUElLZXkpIHtcbiAgICAgICAgcmV0dXJuICdnbHRfJyArIEFQSUtleTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ19naWdfbHQnO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXQoQVBJS2V5ID0gZ2lneWEudGhpc1NjcmlwdC5BUElLZXkpIHtcbiAgICBjb25zdCBsdCA9IGdpZ3lhLnV0aWxzLmNvb2tpZS5nZXQoX2dldFRva2VuQ29va2llTmFtZShBUElLZXkpKTtcbiAgICBpZiAobHQpIHtcbiAgICAgICAgcmV0dXJuIGx0LnNwbGl0KCd8JylbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNldChBUElLZXk6IHN0cmluZywgbG9naW5fdG9rZW46IHN0cmluZywgZXhwaXJlc19pbj86IG51bWJlciB8IHN0cmluZywgc2Vzc2lvbkV4cGlyYXRpb24/OiBudW1iZXIpIHtcbiAgICBnaWd5YS51dGlscy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZ2lneWFTZXR0aW5ncycpO1xuXG4gICAgZ2lneWEubG9nZ2VyLmluZm8oYHNldHRpbmcgYSBuZXcgbG9naW4gdG9rZW5gKTtcblxuICAgIGlmICghQVBJS2V5KSB7XG4gICAgICAgIEFQSUtleSA9IGdpZ3lhLnRoaXNTY3JpcHQuQVBJS2V5O1xuICAgIH1cbiAgICBpZiAoQVBJS2V5KSB7XG4gICAgICAgIGlmKEZsYWdTZXJ2aWNlLnNldENvb2tpZVNhbWVTaXRlTGF4U2Vzc2lvbikge1xuICAgICAgICAgICAgZ2lneWEudXRpbHMuY29va2llLnNldCgnZ2x0XycgKyBBUElLZXksIGxvZ2luX3Rva2VuLCBleHBpcmVzX2luLCBudWxsLCBudWxsLCAnTGF4Jyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLmNvb2tpZS5zZXQoJ2dsdF8nICsgQVBJS2V5LCBsb2dpbl90b2tlbiwgZXhwaXJlc19pbik7XG4gICAgICAgIH1cbiAgICAgICAgZ2lneWEudXRpbHMuY29va2llLnJlbW92ZSgnZ2FjXycgKyBBUElLZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmKEZsYWdTZXJ2aWNlLnNldENvb2tpZVNhbWVTaXRlTGF4U2Vzc2lvbikge1xuICAgICAgICAgICAgZ2lneWEudXRpbHMuY29va2llLnNldCgnX2dpZ19sdCcsIGxvZ2luX3Rva2VuLCBleHBpcmVzX2luLCBudWxsLCBudWxsLCAnTGF4Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnaWd5YS51dGlscy5jb29raWUuc2V0KCdfZ2lnX2x0JywgbG9naW5fdG9rZW4sIGV4cGlyZXNfaW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2N1clNlc3Npb25FeHBpcmF0aW9uID0gc2Vzc2lvbkV4cGlyYXRpb247XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFNlc3Npb25FeHBpcmF0aW9uKCkge1xuICAgIHJldHVybiBfY3VyU2Vzc2lvbkV4cGlyYXRpb247XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0R0FDQ29va2llKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdpZ3lhLnRoaXNTY3JpcHQuQVBJS2V5ICYmIGdpZ3lhLnV0aWxzLmNvb2tpZS5nZXQoJ2dhY18nICsgZ2lneWEudGhpc1NjcmlwdC5BUElLZXkpXG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0RnJvbUF1dGhDb2RlKGF1dGhDb2RlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIHNldEZyb21HQUMoe30sIHJlc29sdmUsIGF1dGhDb2RlKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRGcm9tR0FDKHBhcmFtczogT2JqZWN0LCBjYWxsYmFjazogRnVuY3Rpb24sIGdhYzogc3RyaW5nID0gZ2V0R0FDQ29va2llKCkpIHtcbiAgICBpZiAoZ2lneWEudGhpc1NjcmlwdC5BUElLZXkpIHtcbiAgICAgICAgaWYgKGdhYyAmJiAhcGFyYW1zWyduZXZlclRyeUdBQyddKSB7XG4gICAgICAgICAgICAvLyBTb21ldGltZXMgZ2FjIGlzIHNldCB3aXRoIHN1cnJvdW5kaW5nIGRvdWJsZS1xdW90ZXMgKGxpa2UgaW4gamF2YSkuIFN0cmlwIHF1b3Rlcy5cbiAgICAgICAgICAgIGlmIChnYWMuY2hhckF0KDApID09PSAnXCInICYmIGdhYy5jaGFyQXQoZ2FjLmxlbmd0aCAtIDEpID09PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgZ2FjID0gZ2FjLnN1YnN0cmluZygxLCBnYWMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfdHJpZWRHQUNzW2dhY10pIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpOyAvLyBBbHJlYWR5IHRyaWVkLCBkb24ndCB0cnkgYWdhaW4uXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RyaWVkR0FDc1tnYWNdID0gdHJ1ZTtcblxuICAgICAgICAgICAgZ2lneWEuc29jaWFsaXplLnVwZGF0ZVJlZlVJRCgpO1xuXG4gICAgICAgICAgICBnaWd5YS5zb2NpYWxpemUubm90aWZ5TG9naW4oXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZ25vcmVBcGlRdWV1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmV2ZXJUcnlHQUM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGF1dGhDb2RlOiBnYWMsXG4gICAgICAgICAgICAgICAgICAgIEFQSUtleTogZ2lneWEudGhpc1NjcmlwdC5BUElLZXksXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudF9pZDogZ2lneWEudGhpc1NjcmlwdC5BUElLZXlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW50ZW50aW9uYWxseSB3ZSdyZSBub3QgcmFpc2luZyBvbkxvZ2luIGV2ZW50LCBhcyBubyBsb2dpbiB3YXMgbWFkZSwganVzdCBlc3RhYmxpc2hlZCAodmVyaWZpZWQgaW4gYnVnIDQzNDE5KS5cbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuY29va2llLnJlbW92ZSgnZ2FjXycgKyBnaWd5YS50aGlzU2NyaXB0LkFQSUtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXZlclRyeUdBQyBpcyB1c2VkIHRvIGF2b2lkIHRyeWluZyBzZXRGcm9tR2FjIGZvcmV2ZXIgaWYgdGhlIGNvb2tpZSB3YXNuJ3QgcmVtb3ZlZCAod2hlbiBhIHdyb25nIGJhc2VEb21haW4gaXMgdXNlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5yZWZyZXNoVUkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldmVyVHJ5R0FDOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH1cbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRGcm9tU3NvUmVzcG9uc2UocmVzOiBHZXRHcm91cFRva2VuUmVzcG9uc2UsIEFQSUtleTogc3RyaW5nID0gZ2lneWEudGhpc1NjcmlwdC5BUElLZXkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XG4gICAgICAgIGlmICghcmVzKSByZXR1cm47XG4gICAgICAgIHN3aXRjaCAocmVzLmVycm9yQ29kZSkge1xuICAgICAgICAgICAgY2FzZSBHU0Vycm9ycy5VTkFVVEhPUklaRURfVVNFUjpcbiAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbyhgbm8gZ3JvdXAgc2Vzc2lvbiBmb3VuZGApO1xuICAgICAgICAgICAgICAgIHJlbW92ZShBUElLZXkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHU0Vycm9ycy5JTlZBTElEX1RPS0VOOlxuICAgICAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGBleGlzdGluZyBncm91cCBzZXNzaW9uIHdhcyByZXZva2VkYCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlKEFQSUtleSk7XG4gICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmdsb2JhbC5kaXNwYXRjaFdoZW5IYW5kbGVyQWRkZWQoe2V2ZW50TmFtZTogJ2FjY291bnRzLmxvZ291dCd9KTtcbiAgICAgICAgICAgICAgICBnaWd5YS5ldmVudHMuZ2xvYmFsLmRpc3BhdGNoV2hlbkhhbmRsZXJBZGRlZCh7ZXZlbnROYW1lOiAnbG9nb3V0J30pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHU0Vycm9ycy5UT0tFTl9IQVNfUkVORVdFRDpcbiAgICAgICAgICAgIGNhc2UgR1NFcnJvcnMuT0s6XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMubG9naW5fdG9rZW4pIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGBuZXcgc2Vzc2lvbiBmcm9tIGdyb3VwYCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgZXhwaXJlc19pbjogbnVtYmVyIHwgc3RyaW5nO1xuICAgICAgICAgICAgICAgIGxldCBncm91cENvbnRleHQ6IGFueTtcbiAgICAgICAgICAgICAgICBpZiAocmVzLmdyb3VwQ29udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBncm91cENvbnRleHQgPSBKU09OLnBhcnNlKHJlcy5ncm91cENvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWlzR2lneWFDb29raWVEb21haW4oKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJdCBzaG91bGQgbmV2ZXIgZXhwaXJlIGlmIGEgZ2x0ZXhwIGlzIHByZXNlbnQuXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZXNfaW4gPSAhcmVzLmdsdGV4cCA/IHJlcy5leHBpcmVzX2luIDogZ2lneWEudXRpbHMuY29va2llLmdldEluZmluaXRlRXhwaXJhdGlvblRpbWVJblNlY29uZHMoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgbG9naW4gdG9rZW4gY29va2llXG4gICAgICAgICAgICAgICAgICAgIHNldChBUElLZXksIHJlcy5sb2dpbl90b2tlbiwgZXhwaXJlc19pbik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2x0ZXhwQ29va2llTmFtZSA9IGBnbHRleHBfJHtBUElLZXl9YDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5nbHRleHAgJiYgIWdpZ3lhLnV0aWxzLmNvb2tpZS5nZXQoZ2x0ZXhwQ29va2llTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLmNvb2tpZS5zZXQoZ2x0ZXhwQ29va2llTmFtZSwgcmVzLmdsdGV4cCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBkaXNwYXRjaExvZ2luRXZlbnQoe2V4cGlyZXNfaW4sIGdyb3VwQ29udGV4dH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHU0Vycm9ycy5ORVRXT1JLX0VSUk9SOlxuICAgICAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci5lcnJvcihgZ2lneWE6IGVycm9yIGxvYWRpbmcgc3NvIGZyYW1lYCwge3Jlc30pO1xuICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5nbG9iYWwuZGlzcGF0Y2hXaGVuSGFuZGxlcnNBZGRlZChbJ2FjY291bnRzLmVycm9yJywgJ3NvY2lhbGl6ZS5lcnJvciddLCByZXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuZXJyb3IoYHNzbzogdW5zdXBwb3J0ZWQgcmVzcG9uc2VgKTtcbiAgICAgICAgICAgICAgICB0aHJvdyAnZ2lneWE6IHVuc3VwcG9ydGVkIHJlc3BvbnNlIGZyb20gc3NvJztcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGlzcGF0Y2hMb2dpbkV2ZW50KGV2ZW50UGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIGdpZ3lhLnV0aWxzLnF1ZXVlLmhvbGQoJ3ZlcmlmeUxvZ2luJywgJ0FQSScpO1xuICAgICAgICBnaWd5YS5hY2NvdW50cy52ZXJpZnlMb2dpbih7XG4gICAgICAgICAgICBpZ25vcmVBcGlRdWV1ZTogdHJ1ZSwgLy8gaWdub3JlIHRoZSBhcGkgcXVldWVcbiAgICAgICAgICAgIHN1cHByZXNzTG9naW5FdmVudDogdHJ1ZSwgLy8gdGhlIGNhbGxiYWNrIGJlbG93IHdpbGwgdHJpZ2dlciB0aGUgbG9naW4gZXZlbnRzXG4gICAgICAgICAgICBpbmNsdWRlOiBnaWd5YS51dGlscy5zdHJpbmdVdGlscy5tZXJnZUNvbW1hU2VwYXJhdGVkVmFsdWVzKCdwcm9maWxlLGRhdGEnLCBnaWd5YS50aGlzU2NyaXB0Lmdsb2JhbENvbmZbJ2luY2x1ZGUnXSksXG4gICAgICAgICAgICBleHRyYVByb2ZpbGVGaWVsZHM6ICdzYW1sRGF0YScsXG4gICAgICAgICAgICBjYWxsYmFjazogYWNjb3VudEluZm9SZXMgPT4ge1xuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLnF1ZXVlLnJlbGVhc2UoJ3ZlcmlmeUxvZ2luJywgJ0FQSScpOyAvLyByZWxlYXNlIHRoZSBhcGkgcXVldWVcbiAgICAgICAgICAgICAgICBzZXNzaW9uRGF0YS5zZXRJc1Nlc3Npb25WZXJpZmllZChnZXQoKSwgYWNjb3VudEluZm9SZXMuZXJyb3JDb2RlID09IEdTRXJyb3JzLk9LKTtcblxuICAgICAgICAgICAgICAgIC8vIHVzZSB3aGF0ZXZlciBmaWVsZCB5b3UgbmVlZCBmcm9tIGFjY291bnRJbmZvUmVzIG5vdyBiZWZvcmUgYWNjb3VudEluZm9SZXMgd2lsbCBiZSBvdmVycmlkZGVuIChzdWNoIGFzICdzb3VyY2UnKVxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGFjY291bnRJbmZvUmVzLnNvdXJjZTtcblxuICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5nbG9iYWwuZGlzcGF0Y2hXaGVuSGFuZGxlckFkZGVkKHsgZXZlbnROYW1lOiAnc29jaWFsaXplLmxvZ2luJyB9LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAoZXZlbnRPYmo6IE9iamVjdCwgY2FsbGJhY2s6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWV2ZW50T2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRPYmogPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50T2JqID0gZ2lneWEudXRpbHMub2JqZWN0Lm1lcmdlKFtldmVudE9iaiwgZXZlbnRQYXJhbXNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY2NvdW50SW5mb1Jlcy5lcnJvckNvZGUgPT0gR1NFcnJvcnMuT0spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5zb2NpYWxpemUuZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduSURzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYUZpZWxkczogJ3NhbWxEYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IHVzZXJJbmZvUmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VySW5mb1Jlcy5lcnJvckNvZGUgPT0gR1NFcnJvcnMuT0spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE9iaiA9IGdpZ3lhLl8uYWRkVXNlckluZm9Ub0V2ZW50KHVzZXJJbmZvUmVzLCB7ZXZlbnROYW1lOiAnbG9naW4nfSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub3JtYWxpemluZyBldmVudCBmaWVsZHMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRPYmpbJ3NvdXJjZSddID0gc291cmNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50T2JqWyduZXdVc2VyJ10gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE9ialsncHJvdmlkZXInXSA9ICdzaXRlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE9ialsnbG9naW5Nb2RlJ10gPSAnc3RhbmRhcmQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudE9ialsndXNlciddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50T2JqWyd1c2VyJ10uZXJyb3JDb2RlID0gdXNlckluZm9SZXMuZXJyb3JDb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE9ialsndXNlciddLmNhbGxJZCA9IHVzZXJJbmZvUmVzLmNhbGxJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SW5mb1Jlcy5pZF90b2tlbiAmJiAoZXZlbnRPYmpbJ2lkX3Rva2VuJ10gPSBhY2NvdW50SW5mb1Jlcy5pZF90b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50T2JqWydjYW5jZWwnXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhldmVudE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRPYmpbJ2NhbmNlbCddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhldmVudE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmdsb2JhbC5kaXNwYXRjaFdoZW5IYW5kbGVyQWRkZWQoeyBldmVudE5hbWU6ICdhY2NvdW50cy5sb2dpbicgfSwgbnVsbCwgYXN5bmMgKGV2ZW50T2JqOiBPYmplY3QsIGNhbGxiYWNrOiBGdW5jdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWV2ZW50T2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudE9iaiA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZXZlbnRPYmogPSBnaWd5YS51dGlscy5vYmplY3QubWVyZ2UoW2V2ZW50T2JqLCBldmVudFBhcmFtc10pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY2NvdW50SW5mb1Jlcy5lcnJvckNvZGUgPT0gR1NFcnJvcnMuT0spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50T2JqWydldmVudE5hbWUnXSA9ICdhY2NvdW50cy5sb2dpbic7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFjY291bnRJbmZvUmVzLlVJRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJbmZvUmVzID0gYXdhaXQgbmV3IFByb21pc2U8YW55PihyID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLmFjY291bnRzLmdldEFjY291bnRJbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiByLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogZ2lneWEudXRpbHMuc3RyaW5nVXRpbHMubWVyZ2VDb21tYVNlcGFyYXRlZFZhbHVlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncHJvZmlsZSxkYXRhJywgZ2lneWEudGhpc1NjcmlwdC5nbG9iYWxDb25mWydpbmNsdWRlJ10pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMub2JqZWN0LmV4dHJhY3RQcm9wZXJ0aWVzKGFjY291bnRJbmZvUmVzLCBldmVudE9iaiwgJ3NpZ25hdHVyZXxVSURTaWd8dGltZXN0YW1wfFVJRFNpZ25hdHVyZXxzaWduYXR1cmVUaW1lc3RhbXB8VUlEfHByb2ZpbGV8ZGF0YXxkYXRhQ2VudGVyfGlkX3Rva2VufGdyb3VwcycpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRPYmpbJ2NhbmNlbCddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhldmVudE9iaik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmUoQVBJS2V5ID0gZ2lneWEudGhpc1NjcmlwdC5BUElLZXkpIHtcbiAgICBpZiAoZ2V0KEFQSUtleSkpIHtcbiAgICAgICAgZ2lneWEubG9nZ2VyLmluZm8oYHJlbW92aW5nIGxvZ2luIHRva2VuYCk7XG4gICAgfVxuICAgIGdpZ3lhLnV0aWxzLmNvb2tpZS5yZW1vdmUoYGdsdF8ke0FQSUtleX1gKTtcbiAgICBnaWd5YS51dGlscy5jb29raWUucmVtb3ZlKCdfZ2lnX2x0Jyk7XG4gICAgZ2lneWEudXRpbHMuY29va2llLnJlbW92ZShgZ2x0ZXhwXyR7QVBJS2V5fWApO1xuICAgIGlmIChnaWd5YS5wYXJ0bmVyU2V0dGluZ3Muc3NvS2V5KSB7XG4gICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGByZW1vdmluZyBncm91cCBsb2dpbiB0b2tlbmApO1xuICAgICAgICBjb25zdCBzZXJ2aWNlID0gYXdhaXQgU3NvU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICByZXR1cm4gc2VydmljZS5yZW1vdmVUb2tlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9rZW5QYXJhbShBUElLZXk6IHN0cmluZywgcGFyYW1OYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBsdCA9IGdpZ3lhLnV0aWxzLmNvb2tpZS5nZXQoX2dldFRva2VuQ29va2llTmFtZShBUElLZXkpKTtcbiAgICBpZiAobHQpIHtcbiAgICAgICAgY29uc3QgbHRTZWdzID0gbHQuc3BsaXQoJ3wnKTtcbiAgICAgICAgaWYgKGx0U2Vncy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2lneWEudXRpbHMua2V5VmFsdWUuZGVzZXJpYWxpemUobHRTZWdzWzFdKVtwYXJhbU5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBpc0dpZ3lhQ29va2llRG9tYWluKCkge1xuICAgIGNvbnN0IGNvb2tpZURvbWFpbiA9IGdpZ3lhLnV0aWxzLmNvb2tpZS5nZXREZWZhdWx0RG9tYWluKCk7XG4gICAgcmV0dXJuIGdpZ3lhLnV0aWxzLnN0cmluZ1V0aWxzLmVuZHNXaXRoKGNvb2tpZURvbWFpbiwgZ2lneWEuZGVmYXVsdEFwaURvbWFpbik7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0QmVhcmVyVG9rZW4oYmVhcmVyVG9rZW46IHN0cmluZykge1xuICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGBzZXR0aW5nIGEgbmV3IEJlYXJlciB0b2tlbmApO1xuICAgIF9iZWFyZXJUb2tlbiA9ICdCZWFyZXIgJyArIGJlYXJlclRva2VuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEJlYXJlclRva2VuKCkge1xuICAgIHJldHVybiBfYmVhcmVyVG9rZW47XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQmVhcmVyVG9rZW4oKSB7XG4gICAgZ2lneWEubG9nZ2VyLmluZm8oYEJlYXJlciB0b2tlbiByZW1vdmVkYCk7XG4gICAgX2JlYXJlclRva2VuID0gbnVsbDtcbn1cbiIsImV4cG9ydCBjb25zdCBlbnVtIEdTRXJyb3JzIHtcbiAgICBPSyA9IDAsXG4gICAgRGF0YV9QZW5kaW5nID0gMTAwMDAxLCAvLyBEYXRhIGlzIHN0aWxsIGJlaW5nIHByb2Nlc3NlZCwgcXVlcnkgYWdhaW4gZm9yIHRoZSByZXNwb25zZVxuICAgIE5FVFdPUktfRVJST1IgPSA1MDAwMjYsXG4gICAgREFUQV9QRU5ESU5HID0gMTAwMDAxLCAvLyBEYXRhIGlzIHN0aWxsIGJlaW5nIHByb2Nlc3NlZCwgcXVlcnkgYWdhaW4gZm9yIHRoZSByZXNwb25zZVxuICAgIE9QRVJBVElPTl9DQU5DRUxFRCA9IDIwMDAwMSwgLy8gdXNlciBjYW5jZWxlZCwgaW4gbG9naW4gcHJvY2Vzc1xuICAgIFBFUk1JU1NJT05fR1JBTlRFRCA9IDIwMDAwMiwgLy8gSW5uZXIgY29kZVxuICAgIFBFUk1JU1NJT05fTk9UX0dSQU5URUQgPSAyMDAwMDMsIC8vIElubmVyIGNvZGVcbiAgICBSRURJUkVDVCA9IDIwMDAwNCwgLy8gSW5uZXIgY29kZVxuICAgIE5FV19VU0VSID0gMjAwMDA1LCAvLyBJbm5lciBjb2RlXG4gICAgT1BFUkFUSU9OX0RPTkUgPSAyMDAwMDYsIC8vIElubmVyIGNvZGVcbiAgICBVUERBVEVfVVNFUiA9IDIwMDAwNywgLy8gSW5uZXIgY29kZVxuICAgIE9LX1dJVEhfRVJST1JTID0gMjAwMDA4LCAvLyBGb3IgcmVwb3J0cyAtIHdoZW4gd2UgcmV0dXJuIG9rIHRvIGNsaWVudCBidXQgaGFkIGFjY2VwdGFibGUgZXJyb3JzICh0aGF0IHdlIHdhbnQgdG8ga25vdyBhYm91dCkgb24gdGhlIHdheVxuICAgIEFDQ09VTlRTX0xJTktFRCA9IDIwMDAwOSwgLy8gQWZ0ZXIgbGlua2lnbiBhY2NvdXRucyB2aWEgbG9naW4sIHJldHVybiB0aGlzIGVycm9yIGNvZGVcbiAgICBPS19XSVRIX0VSUk9SX0xPR0lOX0lERU5USUZJRVJfRVhJU1RTID0gMjAwMDEwLCAvLyBGb3Igc2V0QWNjb3VudEluZm8gdXNpbmcgdGhlIGNvbmZsaWN0SGFuZGxpbmcgcGFyYW0gLSBwcm9maWxlIHdhcyBzYXZlZCwgYnV0IHRoZSBlbWFpbCBjb25mbGljdHMgd2l0aCBhbm90aGVyIHVzZXJcbiAgICBBQ0NPVU5UX1BFTkRJTkdfUkVHSVNUUkFUSU9OID0gMjA2MDAxLCAvLyBGb3IgYWNjb3VudHMgQVBJLFxuICAgIEFDQ09VTlRfUEVORElOR19WRVJJRklDQVRJT04gPSAyMDYwMDIsIC8vIEZvciBhY2NvdW50cyBBUEk7IGNvbnNpZGVyIG1vdmluZyB0byA0MDN4eHggc2VjdGlvbiBpbiB0aGUgZnV0dXJlLlxuICAgIEFDQ09VTlRfTUlTU0lOR19MT0dJTklEID0gMjA2MDAzLCAvLyBGb3IgYWNjb3VudHMgQVBJXG4gICAgSURFTlRJVFlfQUxSRUFEWV9BU1NJR05FRCA9IDIwNjAwNCwgLy8gRm9yIGltcG9ydCBhY2NvdW50cyBBUElcbiAgICBBRlRFUl9FTUFJTF9WRVJJRklDQVRJT04gPSAyMDYwMDUsXG4gICAgUEVORElOR19DT0RFX1ZFUklGSUNBVElPTiA9IDIwNjAwNixcbiAgICBDTElFTlRfTE9HID0gMzAwMDAxLCAvLyBpbnRlcm5hbCwgZm9yIHJlcG9ydGluZyBlcm9ycnMgaW4gY2xpZW50IFNES1NcbiAgICBJTlZBTElEX0RBVEFfQ0VOVEVSID0gMzAxMDAxLCAvLyBcIkludmFsaWQgZGF0YS1jZW50ZXJcIi4gd2l0aCBlcnJvciBkZXRhaWxzIG9mOiBcIlRoaXMgQVBJIGtleSBpcyBzZXJ2ZWQgYnkgYW5vdGhlciBkYXRhIGNlbnRlclwiLlxuICAgIElOVkFMSURfUkVRVUVTVF9GT1JNQVQgPSA0MDAwMDEsIC8vIGNvdWxkIGJlIGFsbCBraW5kIG9mIGVycm9ycyB3aXRoIHdyb25nIHJlcXVlc3QgKG5vbiBzZWN1cmUgd2hlbiBzaG91bGQgYmUgc2VjdXJlLCB3cm9uZyBhdXRoZW50aWNhdGlvbiBoZWFkZXIpXG4gICAgTUlTU0lOR19SRVFVSVJFRF9QQVJBTUVURVIgPSA0MDAwMDIsXG4gICAgVU5JUVVFX0lERU5USUZJRVJfRVhJU1RTID0gNDAwMDAzLFxuICAgIElOVkFMSURfUEFSQU1FVEVSX0ZPUk1BVCA9IDQwMDAwNCxcbiAgICBJTlZBTElEX1BBUkFNRVRFUl9WQUxVRSA9IDQwMDAwNixcbiAgICBEVVBMSUNBVEVfVkFMVUUgPSA0MDAwMDcsXG4gICAgSU5WQUxJRF9BVVRIRU5USUNBVElPTl9IRUFERVIgPSA0MDAwMDgsIC8vIE9BdXRoMlxuICAgIFZBTElEQVRJT05fRVJST1IgPSA0MDAwMDksIC8vIEluIGFjY291bnRzLnJlZ2lzdGVyLCB3aGVuZXZlciB0aGVyZSBpcyBhIHZhbGlkYXRpb24gZXJyb3JcbiAgICBJTlZBTElEX1JFRElSRUNUX1VSSSA9IDQwMDAxMSwgLy8gT0F1dGgyXG4gICAgSU5WQUxJRF9SRVNQT05TRV9UWVBFID0gNDAwMDEyLCAvLyBPQXV0aDJcbiAgICBVTlNVUFBPUlRFRF9HUkFOVF9UWVBFID0gNDAwMDEzLCAvLyBPQXV0aDJcbiAgICBJTlZBTElEX0dSQU5UID0gNDAwMDE0LCAvLyBPQXV0aDJcbiAgICBDT0RFX0VYUElSRUQgPSA0MDAwMTUsIC8vIE9BdXRoMlxuICAgIFNDSEVNQV9WQUxJREFUSU9OX0ZBSUxFRCA9IDQwMDAyMCxcbiAgICBDQVBUQ0hBX1ZFUklGSUNBVElPTl9GQUlMRUQgPSA0MDAwMjEsXG4gICAgVU5JUVVFX0lOREVYX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjIsXG4gICAgSU5WQUxJRF9UWVBFX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjMsXG4gICAgRFlOQU1JQ19GSUVMRFNfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyNCxcbiAgICBXUklURV9BQ0NFU1NfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyNSxcbiAgICBJTlZBTElEX0ZPUk1BVF9WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI2LFxuICAgIFJFUVVJUkVEX1ZBTFVFX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjcsXG4gICAgRU1BSUxfTk9UX1ZFUklGSUVEID0gNDAwMDI4LFxuICAgIFNDSEVNQV9DT05GTElDVF9FUlJPUiA9IDQwMDAyOSwgLy8gVG8gaGFuZGxlIFVzZXIgc3RvcnkgMzQzMzAuIEltcHJvdmUgRWxhc3RpY1NlYXJjaE1hcHBpbmdFeGNlcHRpb24gaGFuZGxpbmcgaW4gRFMuSW5kZXhPYmplY3RcbiAgICBPUEVSQVRJT05fTk9UX0FMTE9XRUQgPSA0MDAwMzAsIC8vIFVzZXIgc3RvcnkgMzQzMTEgLSBJZiBhZGRDb25uZWN0aW9uIGlzIGNhbGxlZCByZXR1cm4gYW4gZXJyb3IgKFwib3BlcmF0aW9uIG5vdCBhbGxvd2VkIGZvciB0aGlzIGFjY291bnRcIiwgNDAwWFhYIGVycm9yKS5cbiAgICBTRUNVUklUWV9WRVJJRklDQVRJT05fRkFJTEVEID0gNDAwMDUwLFxuICAgIElOVkFMSURfQVBJS0VZX1BBUkFNRVRFUiA9IDQwMDA5MyxcbiAgICBOT1RfU1VQUE9SVEVEID0gNDAwMDk2LCAvLyB0aGUgZnVuY3Rpb24gaXMgbm90IHN1cHBvcnRlZCBieSBhbnkgb2YgdGhlIGN1cnJlbnRseSBjb25uZWN0ZWQgcHJvdmlkZXJzXG4gICAgVU5TVVBQT1JURURfVVNFUl9BR0VOVCA9IDQwMDA5NywgLy9cbiAgICBOT19QUk9WSURFUlMgPSA0MDAxMDAsIC8vIGNsaWVudD9cbiAgICBQT1BVUF9CTE9DS0VEID0gNDAwMTAxLCAvLyBjbGllbnRcbiAgICBJTlZBTElEX0VWRU5UX0hBTkRMRVIgPSA0MDAxMDIsIC8vIGNsaWVudFxuICAgIElOVkFMSURfQ09OVEFJTkVSSUQgPSA0MDAxMDMsIC8vIGNsaWVudFxuICAgIE5PVF9DT05ORUNURUQgPSA0MDAxMDYsIC8vIHVzZXIgaXMgbm90IGNvbm5lY3RlZCB0byB0aGUgcmVxdWlyZWQgbmV0d29yayBvciB0byBhbnkgbmV0d29ya1xuICAgIElOVkFMSURfU0lURV9ET01BSU4gPSA0MDAxMjAsIC8vIHRoZSBjdXJyZW50IGRvbWFpbiBkb2VzIG5vdCBtYXRjaCB0aGUgZG9tYWluIGNvbmZpZ3VyZWQgZm9yIHRoZSBhcGkga2V5XG4gICAgUFJPVklERVJfQ09ORklHVVJBVElPTl9FUlJPUiA9IDQwMDEyMiwgLy8gdGhlIGN1cnJlbnQgZG9tYWluIGRvZXMgbm90IG1hdGNoIHRoZSBkb21haW4gY29uZmlndXJlZCBmb3IgdGhlIGFwaSBrZXlcbiAgICBMSU1JVF9SRUFDSEVEID0gNDAwMTI0LCAvLyBHYW1lTWVjaGFuaWNzIC0gQ2FwIHdhcyByZWFjaGVkXG4gICAgRlJFUVVFTkNZX0xJTUlUX1JFQUNIRUQgPSA0MDAxMjUsIC8vIENvbW1lbnRzL0ZlZWQgLSBTcGFtIENhcHMgd2FzIHJlYWNoZWRcbiAgICBJTlZBTElEX0FDVElPTiA9IDQwMDEyNiwgLy8gR2FtZU1lY2hhbmljcyAtIEludmFsaWQgYWN0aW9uLiBUcmlnZ2VyZWQgYWN0aW9uIGNhbid0IGJlIGluaXRpYXRlZCBleHRlcm5hbGx5XG4gICAgSU5TVUZGSUNJRU5UX1BPSU5UU19UT19SRURFRU0gPSA0MDAxMjcsIC8vIEdhbWVNZWNoYW5pY3MgLSBJbnN1ZmZpY2llbnRfcG9pbnRzX3RvX3JlZGVlbVxuICAgIFNJR05BVFVSRV9USU1FU1RBTVBfRVhQSVJFRCA9IDQwMDEyOCwgLy8gdGhlIHRpbWVzdGFtcCBpbnNpZGUgdGhlIHNpZ25hdHVyZSBpcyBleHBpcmVkXG4gICAgRXJyb3JfRHVyaW5nX0V4dGVuc2lvbnNfT3BlcmF0aW9uID0gNDAwMzAyLFxuICAgIEV4dGVuc2lvbl9Qb2ludF9DdXN0b21fRXJyb3IgPSA0MDAzMDMsIC8vIEV4dGVuc2lvbiBwb2ludCByZXR1cm4gYSB1c2VyRmFjaW5nRXJyb3JNZXNzYWdlXG4gICAgSU5WQUxJRF9QT0xJQ1lfQ09ORklHVVJBVElPTiA9IDQwMTAwMCwgLy8gUG9saWN5IGNvbmZpZ3VyYXRpb24gaXMgaW52YWxpZCAoaS5lLiBwcmV2ZW50IHJlZ2l0cmF0aW9uKVxuICAgIFNVU1BFQ1RFRF9TUEFNID0gNDAxMDEwLCAvLyBTb21lb25lIGlzIHRyeWluZyB0byB1c2UgR2lneWEgdG8gc2VuZCBhIGVtYWlsIHdpdGggYSBVUkwgdGhhdCBkb2VzIG5vdCBtYXRjaCBhbnkgb2YgdGhlIGNsaWVudCdzIGRvbWFpbnM7IHN1c3BlY3RlZCBzcGFtLlxuICAgIExPR0lOX0ZBSUxFRF9DQVBUQ0hBX1JFUVVJUkVEID0gNDAxMDIwLCAvLyBhY2NvdW50cy5sb2dpbiAtIGNhcHRjaGEgcmVxdWlyZWRcbiAgICBSRVFVRVNUX0ZBSUxFRF9DQVBUQ0hBX1JFUVVJUkVEID0gNDAxMDIzLCAvLyBhY2NvdW50cy5sb2dpbiAtIGNhcHRjaGEgcmVxdWlyZWRcbiAgICBMT0dJTl9GQUlMRURfV1JPTkdfQ0FQVENIQSA9IDQwMTAyMSwgLy8gYWNjb3VudHMubG9naW4gLSB3cm9uZyBjYXB0Y2hhIGNvZGVcbiAgICBPTERfUEFTU1dPUkRfVVNFRCA9IDQwMTAzMCwgLy8gVGhlIHVzZXIgcHJvdmlkZWQgaGlzIHByZXZpb3VzIHBhc3N3b3JkLCBub3QgdGhlIGN1cnJlbnQgb25lXG4gICAgRk9SQklEREVOID0gNDAzMDAwLFxuICAgIElOVkFMSURfU0VTU0lPTl9UT0tFTiA9IDQwMzAwMSwgLy8gaW50ZXJuYWxcbiAgICBSRVFVRVNUX0hBU19FWFBJUkVEID0gNDAzMDAyLCAvLyB0aGUgdGltZXN0YW1wIG9yIGV4cGlyYXRpb24gb2YgdGhlIHRva2VuIHVzZWQgZXhjZWVkZWQgdGhlIGFsbG93ZWQgdGltZSB3aW5kb3dcbiAgICBJTlZBTElEX1JFUVVFU1RfU0lHTkFUVVJFID0gNDAzMDAzLFxuICAgIERVUExJQ0FURV9OT05DRSA9IDQwMzAwNCxcbiAgICBVTkFVVEhPUklaRURfVVNFUiA9IDQwMzAwNSwgLy8gdGhlIHVzZXIgaWQgcGFzc2VkIGlzIG5vdCB2YWxpZCBmb3IgdGhpcyBzaXRlXG4gICAgU0VOU0lUSVZFX0RBVEFfU0VOVF9PVkVSX0hUVFAgPSA0MDMwMDYsIC8vIHdoZW4gc2VuZGluZyB0aGUgc2VjcmV0IGtleSBpbiBSRVNUIGl0IGhhcyB0byBiZSBvdmVyIEhUVFBTXG4gICAgUEVSTUlTU0lPTl9ERU5JRUQgPSA0MDMwMDcsIC8vIENvbW1lbnRzIHNlcnZlciAtIFBlcm1pc3Npb24gZGVuaWVkIChyZWFkT25seSxtb2RlcmF0aW9uIHNpdGUpLlxuICAgIElOVkFMSURfT1BFTklEX1VSTCA9IDQwMzAwOCwgLy8gY2Fubm90IGZpbmQgYW4gb3BlbklkIGVuZHBvaW50IG9uIHRoZSB1cmwgb3IgdXNlcm5hbWUgZ2l2ZW4gZm9yIG9wZW5JZCBsb2dpblxuICAgIFBST1ZJREVSX1NFU1NJT05fRVhQSVJFRCA9IDQwMzAwOSwgLy8gdGhlIHVzZXIgc2Vzc2lvbiBmb3IgdGhpcyBwcm92aWRlciBpcyBleHBpcmVkXG4gICAgSU5WQUxJRF9TRUNSRVQgPSA0MDMwMTAsIC8vIHRoZSByZXF1ZXN0IGhhcyBhbiBpbnZhbGlkIHNlY3JldCBrZXlcbiAgICBTRVNTSU9OX0hBU19FWFBJUkVEID0gNDAzMDExLCAvLyB0aGUgc2Vzc2lvbiBmb3IgdGhpcyB1c2VyIGhhcyBleHBpcmVkXG4gICAgTk9fVkFMSURfU0VTU0lPTiA9IDQwMzAxMiwgLy8gcmVxdWVzdGVkIHVzZXIgaGFzIG5vIHZhbGlkIHNlc3Npb25cbiAgICBVTlZFUklGSUVEX1VTRVIgPSA0MDMwMTMsIC8vIHRoZSB1c2VyIGlzIG5vdCB2ZXJpZmllZCBpbiBTU08gc2Vzc2lvblxuICAgIE1JU1NJTkdfUkVRVUVTVF9SRUZFUlJFUiA9IDQwMzAxNSwgLy8gd2UgY2FuJ3QgdmFsaWRhdGUgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgcmVmZXJyZXIgaGVhZGVyIGlzIG1pc3NpbmdcbiAgICBVTkVYUEVDVEVEX1BST1ZJREVSX1VTRVIgPSA0MDMwMTcsIC8vIHRoZSBsb2dnZWQgaW4gdXNlciBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgb25lIGV4cGVjdGVkXG4gICAgUEVSTUlTU0lPTl9OT1RfUkVRVUVTVEVEID0gNDAzMDIyLCAvLyB0aGUgYWN0aW9uIG5lZWRzIGEgdXNlciBwZXJtaXNzaW9uIGFuZCBpdCB3YXMgbm90IHJlcXVlc3RlZFxuICAgIE5PX1VTRVJfUEVSTUlTU0lPTiA9IDQwMzAyMywgLy8gdGhlIGFjdGlvbiBuZWVkcyBhIHVzZXIgcGVybWlzc2lvbiBhbmQgd2UgZG9uJ3QgaGF2ZSBvbmVcbiAgICBQUk9WSURFUl9MSU1JVF9SRUFDSEVEID0gNDAzMDI0LCAvLyB0aGUgcHJvdmlkZXIgbGltaXQgZm9yIHRoaXMgYWN0aW9uIHdhcyBleGNlZWRlZFxuICAgIElOVkFMSURfVE9LRU4gPSA0MDMwMjUsIC8vIE9BdXRoMlxuICAgIFVOQVVUSE9SSVpFRF9BQ0NFU1NfRVJST1IgPSA0MDMwMjYsIC8vIENhbGxzIHRvIGFjY291bnRzLmlzQXZhaWxhYmxlTG9naW5JRCBXaGVuIHByZXZlbnRMb2dpbklESGFydmVzdGluZyA9IHRydWUgc2hvdWxkIHJldHVybiBhbiBhcHByb3ByaWF0ZSA0MDN4eHggdW5hdXRob3JpemVkIGFjY2VzcyBlcnJvci5cbiAgICBESUZGRVJFTlRfVVNFUl9GT1JfUkVBVVRIID0gNDAzMDI3LCAvLyBEaWZmZXJlbnQgdXNlciB0cmllZCB0byByZS1hdXRob3JpemUuXG4gICAgU0VTU0lPTl9FWFBJUkVEX1JFVFJZID0gNDAzMDMwLCAvLyBJbm5lciBjb2RlIC0gd2hlbiB0aGUgZmFjZWJvb2sgc2Vzc2lvbiBpcyBleHBpcmVkIGFuZCB0aGUgY2xpZW50IHdhaXRzIGZvciBGQiBvbiBwYWdlIHRvIGxvYWRcbiAgICBBUFBST1ZFRF9CWV9NT0RFUkFUT1IgPSA0MDMwMzEsIC8vIGNvbW1lbnRzIC0gY2FudCBmbGFnIGNvbW1lbnQsIGl0IHdhcyBhcHByb3ZlZCBieSB0aGUgbW9kZXJhdG9yIGFscmVhZHkuXG4gICAgVE9LRU5fSEFTX1JFTkVXRUQgPSA0MDMwMzIsIC8vIHRoZSB0b2tlbiBpcyBubyBsb25nZXIgdmFsaWQsIGJ1dCB3ZSBoYXZlIG5ldyB0b2tlbiB0byBwcm92aWRlXG4gICAgTk9fVVNFUl9DT09LSUUgPSA0MDMwMzUsIC8vIG5vIHVzZXIgY29va2llXG4gICAgVU5BVVRIT1JJWkVEX1BBUlRORVIgPSA0MDMwMzYsIC8vIHBhcnRuZXIgaXMgZGlzYWJsZWRcbiAgICBQT1NUX0RFTklFRCA9IDQwMzAzNywgLy8gQ29tbWVudHMgc2VydmVyIC0gUG9zdCBkZW5pZWQgd2hlbiB0aGUgdXNlciB0cmllZCB0byByZXZpZXcgdHdpY2UuXG4gICAgTk9fTE9HSU5fVElDS0VUID0gNDAzMDQwLCAvLyBubyBsb2dpbiB0aWNrZXQgaW4gY2FsbGJhY2sgdXJsXG4gICAgQUNDT1VOVF9ESVNBQkxFRCA9IDQwMzA0MSwgLy8gRm9yIGFjY291bnRzIC0gd2hlbiBncy5hY2NvdW50cy5Jc0FjdGl2ZT1mYWxzZVxuICAgIElOVkFMSURfTE9HSU5JRCA9IDQwMzA0MiwgLy8gRm9yIGFjY291bnRzIC0gd2hlbiB0cnlpbmcgdG8gbG9naW4gd2l0aCBhIGxvZ2luSUQgdGhhdCBkbyBub3QgZXhpc3RzXG4gICAgTE9HSU5fSURFTlRJRklFUl9FWElTVFMgPSA0MDMwNDMsIC8vIEZvciBhY2NvdW50OiBJZiBwcm92aWRlckVtYWlsIGlzIGRlZmluZWQgYXMgYSBsb2dpbklkZW50aWZpZXIgaW4gdGhlIHBvbGljeSwgYW5kIHRoZSBlbWFpbCBhZGRyZXNzIHJlY2VpdmVkIGZyb20gdGhlIHByb3ZpZGVyIGV4aXN0cyBpbiB0aGUgZ3MubG9naW5JZGVudGlmaWVycyBjb2xsZWN0aW9uIGJ1dCBhc3NvY2lhdGVkIHdpdGggYSBkaWZmZXJlbnQgVVVJRCB0aGFuIHRoZSBjdXJyZW50IHVzZXIsIHRoZW4gcmV0dXJuIFwiTG9naW4gaWRlbnRpZmllciBleGlzdHNcIiBlcnJvciBjb2RlICg0MDN4eHgpLlxuICAgIFVOREVSQUdFX1VTRVIgPSA0MDMwNDQsIC8vIEZvciBDT1BQQSBjb21wbGlhbmNlIChDaGlsZHJlbidzIE9ubGluZSBQcml2YWN5IFByb3RlY3Rpb24gQWN0KVxuICAgIElOVkFMSURfU0lURV9DT05GSUdVUkFUSU9OX0VSUk9SID0gNDAzMDQ1LCAvLyBGb3IgYWNjb3VudHMgLSBzaXRlIERTIGlzIGVuYWJsZWQgdGhvdWdoIG5vIERTU2l6ZSB3YXMgY29uZmlndXJlZC5cbiAgICBMT0dJTklEX0RPRVNfTk9UX0VYSVNUID0gNDAzMDQ3LCAvLyBGb3IgYWNjb3VudHMgLSB3aGVuIHRyeWluZyB0byByZXNldCBwYXNzd29yZCB3aXRoIGEgbG9naW5JRCB0aGF0IGRvIG5vdCBleGlzdHNcbiAgICBBUElfUkFURV9MSU1JVF9FWENFRURFRCA9IDQwMzA0OCxcbiAgICBQRU5ESU5HX1BBU1NXT1JEX0NIQU5HRSA9IDQwMzEwMCwgLy8gVGhlIHVzZXIncyBwYXNzd29yZCBuZWVkcyB0byBiZSBjaGFuZ2VkXG4gICAgQUNDT1VOVF9QRU5ESU5HX1RGQV9WRVJJRklDQVRJT04gPSA0MDMxMDEsXG4gICAgQUNDT1VOVF9QRU5ESU5HX1RGQV9SRUdJU1RSQVRJT04gPSA0MDMxMDIsXG4gICAgQUNDT1VOVF9QRU5ESU5HX1JFQ0VOVF9MT0dJTiA9IDQwMzExMCxcbiAgICBBQ0NPVU5UX1RFTVBPUkFSSUxZX0xPQ0tFRF9PVVQgPSA0MDMxMjAsIC8vIFRvbyBtYW55IGxvZ2luIGF0dGVtcHRzOyBhY2NvdW50IGxvY2tlZC1vdXRcbiAgICBSRURVTkRBTlRfT1BFUkFUSU9OID0gNDAzMjAwLCAvLyBUaGUgY2xpZW50IHBlcmZvcm1lZCBhbiBvcGVyYXRpb24gdGhhdCBpcyByZWR1bmRhbnRcbiAgICBJTlZBTElEX0FQUExJQ0FUSU9OX0lEID0gNDAzMjAxLCAvLyBUaGUgYXBwIGlkIHByb3ZpZGVkIGlzIGRpZmZlcmVudCB0aGFuIHRoZSBvbmUgY29uZmlndXJlZCBmb3IgdGhlIHNpdGVcbiAgICBOT1RfRk9VTkQgPSA0MDQwMDAsIC8vIENvbW1lbnRzIHNlcnZlciAtIENhdGVnb3J5IG5vdCBmb3VuZC4gQWNjb3VudHMgLSBlbWFpbCB2ZXJpZmljYXRpb24gZmFpbGVkLCB1dWlkIG5vdCBmb3VuZC5cbiAgICBGUklFTkRfTk9UX0ZPVU5EID0gNDA0MDAxLCAvLyB0aGUgdXNlciBpZCBwcm92aWRlZCBhcyBhIHRhcmdldCBpcyBub3QgYSBmcmllbmQgZm9yIHRoZSBjdXJyZW50IHVzZXJcbiAgICBDQVRFR09SWV9OT1RfRk9VTkQgPSA0MDQwMDIsIC8vIENvbW1lbnRzIHNlcnZlciAtIENhdGVnb3J5IG5vdCBmb3VuZC5cbiAgICBVSURfTk9UX0ZPVU5EID0gNDA0MDAzLFxuICAgIFJFU09VUkNFX05PVF9GT1VORCA9IDQwNDAwNCwgLy8gQ2xpZW50IHNpZGUgLSBpbWFnZSBub3QgZm91bmQgYWZ0ZXIgdXBsb2FkXG4gICAgSU5WQUxJRF9BUElfTUVUSE9EID0gNDA1MDAxLCAvLyBpbnRlcm5hbCBmb3Igb3VyIEpTIEFQSVxuICAgIElERU5USVRZX0VYSVNUUyA9IDQwOTAwMSwgLy8gd2hlbiB0cnlpbmcgdG8gY29ubmVjdCB0byBhIHByb3ZpZGVyIHRoYXQgaXMgYWxyZWFkeSBjb25uZWN0ZWQgb3IgbGluayB0byBhbiBhbHJlYWR5IGxpbmtlZCBhY2NvdW50XG4gICAgR09ORSA9IDQxMDAwMCwgLy8gUmVzb3VyY2Ugbm8gbG9uZ2VyIGF2YWlsYWJsZS4gRGF0YSBLZXkgU2VydmVyIC0ga2V5IHJldm9rZWQvZXhwaXJlZC5cbiAgICBSRVFVRVNUX0VOVElUWV9UT09fTEFSR0UgPSA0MTMwMDEsIC8vIENvbW1lbnRzIHNlcnZlciAtIFJlcXVlc3QgdG8gbGFyZ2VcbiAgICBDT01NRU5UX1RFWFRfVE9PX0xBUkdFID0gNDEzMDAyLCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBDb21tZW50IFRleHQgdG8gbGFyZ2UuXG4gICAgT0JKRUNUX1RPT19MQVJHRSA9IDQxMzAwMywgLy8gRGF0YVN0b3JlIG9iamVjdCBpcyB0b28gbGFyZ2VcbiAgICBQUk9GSUxFX1BIT1RPX1RPT19MQVJHRSA9IDQxMzAwNCwgLy8gUHJvZmlsZSBwaG90byBpcyB0b28gbGFyZ2UsIGV4Y2VlZHMgbWF4aW11bSBhbGxvd2VkIGNvbnRlbnQgbGVuZ3RoXG4gICAgUkVRVUVTVF9VUklfVE9PX0xPTkcgPSA0MTQwMDAsIC8vVGhlIFVSSSBwcm92aWRlZCB3YXMgdG9vIGxvbmcgZm9yIHRoZSBzZXJ2ZXIgdG8gcHJvY2Vzcy5cbiAgICBNSVNTSU5HX1VTRVJfUEhPVE8gPSA0MDkwMTAsIC8vIEVycm9yIC0gbWlzc2luZyB1c2VyIHBob3RvXG4gICAgQ09VTlRFUl9OT1RfUkVHSVNURVJFRCA9IDQwOTAxMSwgLy8gQ291bnRlciBub3QgcmVnaXN0ZXJlZFxuICAgIElOVkFMSURfR01JRF9USUNLRVQgPSA0MDkwMTIsIC8vIGdtaWQgdGlja2V0IGlzIG5vdCB2YWxpZFxuICAgIFNBTUxfTUFQUEVEX0FUVFJJQlVURV9OT1RfRk9VTkQgPSA0MDkwMTMsIC8vIFVzZWQgd2hlbiBtYXBwZWQgYXR0cmlidXRlIHZhbHVlIGZvciBwcm92aWRlclVJRCBjYW5ub3QgYmUgcmV0cmVpdmVkXG4gICAgU0FNTF9DRVJUSUZJQ0FURV9OT1RfRk9VTkQgPSA0MDkwMTQsIC8vIFVzZWQgd2hlbiBTQU1MIGNlcnRpZmljYXRlIGNvdWxkIG5vdCBiZSByZXRyZWl2ZWQuXG4gICAgU0FNTF9NRVNTQUdFX05PVF9GT1VORCA9IDQwOTAxNSwgLy8gVXNlZCB3aGVuIGNhY2hlZCBTQU1MIG1lc3NhZ2UgY291bGQgbm90IGJlIHJldHJlaXZlZC5cbiAgICBHRU5FUkFMX1NFUlZFUl9FUlJPUiA9IDUwMDAwMSxcbiAgICBTRVJWRVJfTE9HSU5fRVJST1IgPSA1MDAwMDIsIC8vIGdlbmVyYWwgZXJyb3IgZHVyaW5nIHRoZSBsb2dpbiBwcm9jZXNzXG4gICAgREVGQVVMVF9BUFBMSUNBVElPTl9DT05GSUdVUkFUSU9OX0VSUk9SID0gNTAwMDAzLCAvLyBGb3IgbXVsdGlwbGUgREMgLSB3aGVuIG5vIGRlZmF1bHQgYXBwbGljYXRpb24gY2FuIGJlIGZvdW5kIGluIERlZmF1bHRBcHBsaWNhdGlvbnMuY29uZmlnLiBXaXRoIGVycm9yIGRldGFpbHMgb2Y6IFwiRGVmYXVsdCBhcHBsaWNhdGlvbiBpc24ndCBjb25maWd1cmVkIGZvciBkYXRhQ2VudGVyXCJcbiAgICBTRVNTSU9OX01JR1JBVElPTl9FUlJPUiA9IDUwMDAxNCwgLy8gZXJyb3IgaW4gbWlncmF0aW5nIG9sZCB0byBuZXcgZmFjZWJvb2sgc2Vzc2lvblxuICAgIFBST1ZJREVSX0VSUk9SID0gNTAwMDIzLCAvLyBnZW5lcmFsIGVycm9yIGZyb20gdGhlIHByb3ZpZGVyXG4gICAgREFUQUJBU0VfRVJST1IgPSA1MDAwMjgsXG4gICAgVVNFUk5BTUVfUkVRVUlSRUQgPSA1MDAwMjksIC8vIElubmVyIGNvZGVcbiAgICBOT19QUk9WSURFUl9BUFBMSUNBVElPTiA9IDUwMDAzMSwgLy8gdGhlIGFwcGxpY2F0aW9uIGZvciB0aGlzIHByb3ZpZGVyIGlzIG5vdCBkZWZpbmVkIGZvciB0aGlzIHNpdGVcbiAgICBMT0FEX0ZBSUxFRCA9IDUwMDAzMiwgLy8gY2xpZW50IGVycm9yXG4gICAgSU5WQUxJRF9FTlZJUk9OTUVOVF9DT05GSUcgPSA1MDAwMzMsIC8vIEluIGNhc2UgdGhlcmUgaXMgbm8gdGFyZ2V0IGVudmlyb25tZW50IGluIHRoZSBjb25maWcgZmlsZSB3ZSdkIHJldHVybiB3aXRoICBpbnZhbGlkX2Vudmlyb25tZW50X2NvbmZpZyBlcnJvci5cbiAgICBFUlJPUl9EVVJJTkdfQkFDS0VORF9PUEVSQVRJT04gPSA1MDAwMzQsXG4gICAgVElNRU9VVCA9IDUwNDAwMSwgLy8gb3V0Z29pbmcgcmVxdWVzdCBoYWQgdGltZWQgb3V0XG4gICAgQ0xJRU5UVElNRU9VVCA9IDUwNDAwMiwgLy8gRm9yIHNlcnZlciBTREtzIC0gYSBjbGllbnQgc2lkZSB0aW1lb3V0XG4gICAgSU5WQUxJRF9VUkwgPSA0MDQwMDQsIC8vIGVtYmVkLmx5IDQwNCBlcnJvciBtZXNzYWdlIC0gdXJsIGlzIG5vdCB2YWxpZFxuICAgIE1FRElBX0lURU1TX05PVF9TVVBQT1JURUQgPSA0MDEwMDEsIC8vIE1lZGlhIGl0ZW1zIGEgbm90IGFsbG93ZWQgZm9yIHRoaXMgY2F0ZWdvcnlcbiAgICBNSVNTSU5HX0VSUk9SX0NPREUgPSA1OTk5OTksXG4gICAgVEhJU19BVVRIRU5USUNBVElPTl9NRVRIT0RfSVNfQ1VSUkVOVExZX0RJU0FCTEVEICA9IDQwMzMwMCxcbiAgICBGT1JDRV9MSU5LX0xPR0lOX0lERU5USUZJRVJfRVhJU1RTID0gNDA5MDAzLFxuICAgIFBBU1NLRVlfQVVUSEVOVElDQVRPUl9SRUdJU1RFUkVEID0gNDAwMTMwLFxuICAgIFBBU1NLRVlfQUJPUlRFRCA9IDQwMDEzMSxcbiAgICBQQVNTS0VZX0VSUk9SID0gNTAwMTMxXG59XG5leHBvcnQgY29uc3QgZW51bSBHU0Vycm9yRGV0YWlscyB7XG4gICAgTm9uZSA9IDAsXG4gICAgU2FtZV9wYXNzd29yZCA9IDEwMDAwMSwgLy8gUmVzZXQgUGFzc3dvcmQgLSBcIidvbGRQYXNzd29yZCcgY2Fubm90IGJlIHRoZSBzYW1lIGFzICduZXdQYXNzd29yZCdcIlxuICAgIEludmFsaWRfcGFzc3dvcmQgPSAxMDAwMDIsIC8vIFJlc2V0IFBhc3N3b3JkIC0gY3VycmVudCBwYXNzd29yZCBpcyB3cm9uZy9pbnZhbGlkXG4gICAgSW52YWxpZF9jb3VudGVyc19xdWVyeV93aXRoX2N1cnNvciA9IDEwMDAwMyxcbn1cbiIsImltcG9ydCB7IEdTRXJyb3JzIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0dTRXJyb3JzJztcbmltcG9ydCB7IGxvY2FsSW5mbyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2NhbEluZm8nO1xuaW1wb3J0ICogYXMgdG9rZW5TdG9yZSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5BZGFwdGVycy5XZWIvYXBwL1Rva2VuU3RvcmUnO1xuaW1wb3J0ICogYXMgbG9jYWxTdG9yYWdlVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2xvY2FsU3RvcmFnZSc7XG5pbXBvcnQgKiBhcyBKU09OVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL0pTT04nO1xuaW1wb3J0ICogYXMgb2JqZWN0VXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL29iamVjdCc7XG5pbXBvcnQgKiBhcyBVUkxVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvVVJMJztcblxuZXhwb3J0IGVudW0gTWVzc2FnaW5nTWV0aG9kIHtcbiAgICBMb2NhbFN0b3JhZ2VMaXN0ZW5lcixcbiAgICBQb3N0TWVzc2FnZSxcbiAgICBGbGFzaCxcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbXBsZXRlUmVnaXN0cmF0aW9uKFxuICAgIHJlczogT2JqZWN0LFxuICAgIHBhcmFtczogT2JqZWN0LFxuICAgIG1ldGhvZE5hbWU6IHN0cmluZyxcbiAgICBjYWxsYmFjazogKHJlc3BvbnNlLCBzdXBwcmVzc0V2ZW50cz86IGJvb2xlYW4sIHJldHJ5PzogYm9vbGVhbikgPT4gdm9pZCxcbikge1xuICAgIHZhciBzY3JlZW5TZXQ7XG4gICAgdmFyIHJldHJ5O1xuICAgIHZhciBwZW5kaW5nID0gZmFsc2U7XG4gICAgbGV0IHByb3ZpZGVyU2Vzc2lvbkluZm87XG4gICAgaWYgKHJlc1snZXJyb3JDb2RlJ10gPT0gR1NFcnJvcnMuQUZURVJfRU1BSUxfVkVSSUZJQ0FUSU9OKSB7XG4gICAgICAgIC8vIEhhbmRsZSBhdXRvTG9naW4gZnJvbSByZWdpc3RyYXRpb24gbGlua1xuICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbygnZmluYWxpemluZyByZWdpc3RyYXRpb24gYWZ0ZXIgZW1haWwgdmVyaWZpY2F0aW9uJyk7XG4gICAgICAgIHBlbmRpbmcgPSB0cnVlO1xuICAgICAgICBnaWd5YS5hY2NvdW50cy5maW5hbGl6ZVJlZ2lzdHJhdGlvbih7XG4gICAgICAgICAgICByZWdUb2tlbjogcmVzWydyZWdUb2tlbiddLFxuICAgICAgICAgICAgaWdub3JlQXBpUXVldWU6IHRydWUsIC8vIGJlY2F1c2UgYm9vdHN0cmFwIG1heSBub3QgaGF2ZSBmaW5pc2hlZCB5ZXRcbiAgICAgICAgICAgIGNhbGxiYWNrLFxuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgICAhcGFyYW1zWydpZ25vcmVJbnRlcnJ1cHRpb25zJ10gJiZcbiAgICAgICAgIXBhcmFtc1snZG9udEhhbmRsZVNjcmVlblNldCddICYmXG4gICAgICAgICgoKHJlc1sncmVnVG9rZW4nXSB8fCBwYXJhbXNbJ3JlZ1Rva2VuJ10pICYmIC8vIGhhcyByZWdUb2tlblxuICAgICAgICAgICAgKHJlc1snZXJyb3JDb2RlJ10gPT0gR1NFcnJvcnMuT0tfV0lUSF9FUlJPUl9MT0dJTl9JREVOVElGSUVSX0VYSVNUUyB8fCAvLyBzb2NpYWxMb2dpbi9zZXRBY2NvdW50SW5mbyBzYXZlZCB3aXRoIGxvZ2luSUQgZXhpc3QgZXJyb3JcbiAgICAgICAgICAgICAgICByZXNbJ2Vycm9yQ29kZSddID09IEdTRXJyb3JzLkZPUkNFX0xJTktfTE9HSU5fSURFTlRJRklFUl9FWElTVFMgfHwgLy9mb3JjZUxpbmtpbmcgbG9naW5JZCBleGlzdHNcbiAgICAgICAgICAgICAgICByZXNbJ2Vycm9yQ29kZSddID09IEdTRXJyb3JzLkxPR0lOX0lERU5USUZJRVJfRVhJU1RTKSkgfHwgLy8gbG9naW5JRCBleGlzdHNcbiAgICAgICAgcmVzWydlcnJvckNvZGUnXSA9PSBHU0Vycm9ycy5BQ0NPVU5UX1BFTkRJTkdfUkVHSVNUUkFUSU9OIHx8IC8vIHBlbmRpbmcgcmVnaXN0cmF0aW9uXG4gICAgICAgIHJlc1snZXJyb3JDb2RlJ10gPT0gR1NFcnJvcnMuQUNDT1VOVF9QRU5ESU5HX1ZFUklGSUNBVElPTiB8fCAvLyBwZW5kaW5nIGVtYWlsIHZlcmlmaWNhdGlvblxuICAgICAgICByZXNbJ2Vycm9yQ29kZSddID09IEdTRXJyb3JzLkFDQ09VTlRfTUlTU0lOR19MT0dJTklEIHx8IC8vIHBlbmRpbmcgTG9naW5JRFxuICAgICAgICByZXNbJ2Vycm9yQ29kZSddID09IEdTRXJyb3JzLkFDQ09VTlRfUEVORElOR19URkFfVkVSSUZJQ0FUSU9OIHx8IC8vIHBlbmRpbmcgVEZBIHZlcmlmaWNhdGlvblxuICAgICAgICByZXNbJ2Vycm9yQ29kZSddID09IEdTRXJyb3JzLkFDQ09VTlRfUEVORElOR19URkFfUkVHSVNUUkFUSU9OIHx8IC8vIHBlbmRpbmcgVEZBIHJlZ2lzdHJhdGlvblxuICAgICAgICByZXNbJ2Vycm9yQ29kZSddID09IEdTRXJyb3JzLkFDQ09VTlRfUEVORElOR19SRUNFTlRfTE9HSU4gfHwgLy8gcGVuZGluZyByZWNlbnQgbG9naW5cbiAgICAgICAgcmVzWydlcnJvckNvZGUnXSA9PSBHU0Vycm9ycy5QRU5ESU5HX1BBU1NXT1JEX0NIQU5HRSB8fCAvLyBwZW5kaW5nIHBhc3N3b3JkIGNoYW5nZVxuICAgICAgICAgICAgcmVzWydlcnJvckNvZGUnXSA9PSBHU0Vycm9ycy5QRU5ESU5HX0NPREVfVkVSSUZJQ0FUSU9OKSAvLyBwZW5kaW5nIGNvZGUgdmVyaWZpY2F0aW9uXG4gICAgKSB7XG4gICAgICAgIGlmKHJlc1snZXJyb3JDb2RlJ10gPT0gR1NFcnJvcnMuRk9SQ0VfTElOS19MT0dJTl9JREVOVElGSUVSX0VYSVNUUykge1xuICAgICAgICAgICAgcHJvdmlkZXJTZXNzaW9uSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NfdG9rZW46IHJlc1snYWNjZXNzX3Rva2VuJ10sXG4gICAgICAgICAgICAgICAgcHJvdmlkZXI6IHJlc1sncHJvdmlkZXInXSxcbiAgICAgICAgICAgICAgICBwcm92aWRlcl91aWQ6IHJlc1sncHJvdmlkZXJfdWlkJ10sXG4gICAgICAgICAgICAgICAgaWRUb2tlbjogcmVzWydpZF90b2tlbiddLFxuICAgICAgICAgICAgICAgIGNvZGU6cmVzWydjb2RlJ10sXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6IHJlc1snbGFzdE5hbWUnXSxcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IHJlc1snZmlyc3ROYW1lJ10sXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld01vZGFsO1xuICAgICAgICBpZiAocmVzWydlcnJvckNvZGUnXSA9PSBHU0Vycm9ycy5BQ0NPVU5UX1BFTkRJTkdfUkVDRU5UX0xPR0lOKSB7XG4gICAgICAgICAgICByZXRyeSA9IHRydWU7XG4gICAgICAgICAgICBuZXdNb2RhbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtc1snZGVmYXVsdE1vYmlsZVJlZ1NjcmVlblNldCddICYmIGxvY2FsSW5mby5pc01vYmlsZSkge1xuICAgICAgICAgICAgc2NyZWVuU2V0ID0gcGFyYW1zWydkZWZhdWx0TW9iaWxlUmVnU2NyZWVuU2V0J107XG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1zWydkZWZhdWx0UmVnU2NyZWVuU2V0J10pIHtcbiAgICAgICAgICAgIHNjcmVlblNldCA9IHBhcmFtc1snZGVmYXVsdFJlZ1NjcmVlblNldCddO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNjcmVlblNldCkge1xuICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbyhgc2hvd2luZyBzY3JlZW5zZXQgJyR7c2NyZWVuU2V0fScgZm9yIGVycm9yQ29kZSAke3Jlc1snZXJyb3JDb2RlJ119YCk7XG4gICAgICAgIGdpZ3lhLmxvZ2dlci5ncm91cChzY3JlZW5TZXQpO1xuXG4gICAgICAgIGdpZ3lhLmFjY291bnRzLnNob3dTY3JlZW5TZXQoe1xuICAgICAgICAgICAgaWdub3JlQXBpUXVldWU6IHRydWUsIC8vIGJlY2F1c2UgYm9vdHN0cmFwIG1heSBub3QgaGF2ZSBmaW5pc2hlZCB5ZXRcbiAgICAgICAgICAgIG5ld01vZGFsLFxuICAgICAgICAgICAgc2NyZWVuU2V0LFxuICAgICAgICAgICAgaW5pdGlhbE1ldGhvZDogbWV0aG9kTmFtZSxcbiAgICAgICAgICAgIGluaXRpYWxSZXNwb25zZTogcmVzLFxuICAgICAgICAgICAgc3VwcHJlc3NMb2dpbkV2ZW50OiBwYXJhbXNbJ3N1cHByZXNzTG9naW5FdmVudCddLFxuICAgICAgICAgICAgcHJvdmlkZXJTZXNzaW9uSW5mbyxcbiAgICAgICAgICAgIG9uRXJyb3I6IGUgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25IaWRlOiBlID0+IHtcbiAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuZ3JvdXBFbmQoc2NyZWVuU2V0KTtcbiAgICAgICAgICAgICAgICBpZiAoZS5yZWFzb24gPT09ICdmaW5pc2hlZCcgJiYgZS51c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdWNjZXNzUmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNvZGU6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySW5mbzogZS51c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBlLnNvdXJjZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhzdWNjZXNzUmVzcG9uc2UsIHRydWUsIHJldHJ5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIXBlbmRpbmcpIHtcbiAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICB9XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tHcm91cEludml0YXRpb24ocGFyYW1zOiBhbnkpIHtcbiAgICBpZiAoIXBhcmFtcy5pbnZpdGF0aW9uSWQpIHtcbiAgICAgICAgZ2lneWEuZXZlbnRzLmdsb2JhbC5kaXNwYXRjaFdoZW5IYW5kbGVyc0FkZGVkKFsnYWNjb3VudHMuZXJyb3InLCAnc29jaWFsaXplLmVycm9yJ10sIHtcbiAgICAgICAgICAgIHN0YXR1czogJ01JU1NJTkdfUkVRVUlSRURfUEFSQU1FVEVSJyxcbiAgICAgICAgICAgIHN0YXR1c01lc3NhZ2U6ICdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlcjogaW52aXRhdGlvbklkJyxcbiAgICAgICAgICAgIGVycm9yQ29kZTogR1NFcnJvcnMuTUlTU0lOR19SRVFVSVJFRF9QQVJBTUVURVIsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlcjogaW52aXRhdGlvbklkJ1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgY29uZmlybWF0aW9uID0gYXdhaXQgY29uZmlybUdyb3VwSW52aXRhdGlvbihwYXJhbXMuaW52aXRhdGlvbklkKTtcbiAgICBpZiAoIWNvbmZpcm1hdGlvbi50b2tlbikge1xuICAgICAgICBnaWd5YS5ldmVudHMuZ2xvYmFsLmRpc3BhdGNoV2hlbkhhbmRsZXJzQWRkZWQoWydhY2NvdW50cy5lcnJvcicsICdzb2NpYWxpemUuZXJyb3InXSwgY29uZmlybWF0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHRva2VuU3RvcmUuZ2V0KCkgPT09IG51bGwpIHtcbiAgICAgICAgZ2lneWEuYWNjb3VudHMuYWRkRXZlbnRIYW5kbGVycyh7XG4gICAgICAgICAgICBvbkxvZ2luOiBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgIGF3YWl0IGZpbmFsaXplR3JvdXBJbnZpdGF0aW9uKGNvbmZpcm1hdGlvbi50b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzY3JlZW5TZXQgPSBsb2NhbEluZm8uaXNNb2JpbGUgPyBnaWd5YS50aGlzU2NyaXB0Lmdsb2JhbENvbmYuZGVmYXVsdE1vYmlsZVJlZ1NjcmVlblNldCA6IGdpZ3lhLnRoaXNTY3JpcHQuZ2xvYmFsQ29uZi5kZWZhdWx0UmVnU2NyZWVuU2V0O1xuICAgICAgICBnaWd5YS5hY2NvdW50cy5zaG93U2NyZWVuU2V0KHtcbiAgICAgICAgICAgIGlnbm9yZUFwaVF1ZXVlOiB0cnVlLCAvLyBiZWNhdXNlIGJvb3RzdHJhcCBtYXkgbm90IGhhdmUgZmluaXNoZWQgeWV0XG4gICAgICAgICAgICBzY3JlZW5TZXRcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgZmluYWxpemVHcm91cEludml0YXRpb24oY29uZmlybWF0aW9uLnRva2VuKTtcbiAgICB9XG59XG5hc3luYyBmdW5jdGlvbiBjb25maXJtR3JvdXBJbnZpdGF0aW9uKGludml0YXRpb25JZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIGdpZ3lhLmFjY291bnRzLmdyb3Vwcy5pbnZpdGF0aW9uQ29uZmlybSh7XG4gICAgICAgICAgICBpZ25vcmVBcGlRdWV1ZTogdHJ1ZSwgLy8gYmVjYXVzZSBib290c3RyYXAgbWF5IG5vdCBoYXZlIGZpbmlzaGVkIHlldFxuICAgICAgICAgICAgaW52aXRhdGlvbklkLFxuICAgICAgICAgICAgY2FsbGJhY2s6IHJlc29sdmVcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5hc3luYyBmdW5jdGlvbiBmaW5hbGl6ZUdyb3VwSW52aXRhdGlvbih0b2tlbjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBnaWd5YS5hY2NvdW50cy5ncm91cHMuZmluYWxpemVJbnZpdGF0aW9uKHtcbiAgICAgICAgICAgIGlnbm9yZUFwaVF1ZXVlOiB0cnVlLCAvLyBiZWNhdXNlIGJvb3RzdHJhcCBtYXkgbm90IGhhdmUgZmluaXNoZWQgeWV0XG4gICAgICAgICAgICB0b2tlbixcbiAgICAgICAgICAgIGNhbGxiYWNrOiByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3JDb2RlICE9PSBHU0Vycm9ycy5PSykge1xuICAgICAgICAgICAgICAgICAgICBnaWd5YS5ldmVudHMuZ2xvYmFsLmRpc3BhdGNoV2hlbkhhbmRsZXJzQWRkZWQoWydhY2NvdW50cy5lcnJvcicsICdzb2NpYWxpemUuZXJyb3InXSwgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBnaWd5YS5ldmVudHMuZ2xvYmFsLmRpc3BhdGNoV2hlbkhhbmRsZXJzQWRkZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2FjY291bnRzLmZpbmFsaXplR3JvdXBJbnZpdGF0aW9uJywgJ3NvY2lhbGl6ZS5maW5hbGl6ZUdyb3VwSW52aXRhdGlvbiddLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEdpZ3lhU2V0dGluZ3MoZ3JvdXA6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZ2lneWFTZXR0aW5ncyA9IGxvY2FsU3RvcmFnZVV0aWxzLmdldE9iamVjdCgnZ2lneWFTZXR0aW5ncycpO1xuICAgIHJldHVybiBKU09OVXRpbHMuc2VyaWFsaXplKGdpZ3lhU2V0dGluZ3NbZ3JvdXBdKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRHaWd5YVNldHRpbmdzKGdyb3VwOiBzdHJpbmcsIHNldHRpbmdzOiBPYmplY3QpOiB2b2lkIHtcbiAgICBjb25zdCBnaWd5YVNldHRpbmdzID0gbG9jYWxTdG9yYWdlVXRpbHMuZ2V0T2JqZWN0KCdnaWd5YVNldHRpbmdzJywgeyBbZ3JvdXBdOiB7fSB9KTtcbiAgICBmb3IgKHZhciBwIGluIHNldHRpbmdzKSB7XG4gICAgICAgIGdpZ3lhU2V0dGluZ3NbZ3JvdXBdW3BdID0gc2V0dGluZ3NbcF07XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZVV0aWxzLnNldEl0ZW0oJ2dpZ3lhU2V0dGluZ3MnLCBKU09OVXRpbHMuc2VyaWFsaXplKGdpZ3lhU2V0dGluZ3MpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWxHaWd5YVNldHRpbmdzKGdyb3VwOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIWdyb3VwKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZVV0aWxzLnJlbW92ZUl0ZW0oJ2dpZ3lhU2V0dGluZ3MnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBnaWd5YVNldHRpbmdzID0gbG9jYWxTdG9yYWdlVXRpbHMuZ2V0T2JqZWN0KCdnaWd5YVNldHRpbmdzJyk7XG4gICAgICAgIGlmIChnaWd5YVNldHRpbmdzKSB7XG4gICAgICAgICAgICBkZWxldGUgZ2lneWFTZXR0aW5nc1tncm91cF07XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2VVdGlscy5zZXRJdGVtKCdnaWd5YVNldHRpbmdzJywgSlNPTlV0aWxzLnNlcmlhbGl6ZShnaWd5YVNldHRpbmdzKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlU3BlY2lhbEZpZWxkcyhvKSB7XG4gICAgdmFyIGNvbGxlY3Rpb24gPSBnaWd5YS5zb2NpYWxpemUuQ29sbGVjdGlvbjtcbiAgICB2YXIgdG9UeXBlZCA9IGZ1bmN0aW9uKGFyciwgY3Rvcikge1xuICAgICAgICB2YXIgb2FyciA9IFtdO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBlbCA9IGFycltpXTtcbiAgICAgICAgd2hpbGUgKGVsKSB7XG4gICAgICAgICAgICBvYXJyLnB1c2gobmV3IGN0b3IoZWwpKTtcbiAgICAgICAgICAgIGlmIChvYXJyW2ldLmlkZW50aXRpZXMpIHtcbiAgICAgICAgICAgICAgICBjb252ZXJ0SWRlbnRpdGllc0FycmF5VG9PYmplY3Qob2FycltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbCA9IGFyclsrK2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYXJyO1xuICAgIH07XG5cbiAgICBpZiAoby5waG90b3MpIG8ucGhvdG9zID0gbmV3IGNvbGxlY3Rpb24oby5waG90b3MsICdwaG90b0lEJyk7XG4gICAgaWYgKG8uYWxidW1zKSBvLmFsYnVtcyA9IG5ldyBjb2xsZWN0aW9uKG8uYWxidW1zLCAnYWxidW1JRCcpO1xuICAgIGlmIChvLmNvbnRhY3RzKSBvLmNvbnRhY3RzID0gbmV3IGNvbGxlY3Rpb24odG9UeXBlZChvLmNvbnRhY3RzLCBnaWd5YS5zb2NpYWxpemUuQ29udGFjdCksICdlbWFpbCcpO1xuICAgIGlmIChvLmZyaWVuZCkgby5mcmllbmQgPSBuZXcgY29sbGVjdGlvbih0b1R5cGVkKG8uZnJpZW5kLCBnaWd5YS5zb2NpYWxpemUuRnJpZW5kKSwgJ1VJRCcpO1xuXG4gICAgaWYgKG8udXNlcikgby51c2VyID0gbmV3IGdpZ3lhLnNvY2lhbGl6ZS5Vc2VyKG8udXNlcik7XG5cbiAgICBpZiAoby5mcmllbmRzICYmIG8uZnJpZW5kcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHZhciBhclVJRHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvLmZyaWVuZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyVUlEcy5wdXNoKG8uZnJpZW5kc1tpXS5VSUQpO1xuICAgICAgICB9XG4gICAgICAgIG8uVUlEcyA9IGFyVUlEcy5qb2luKCcsJyk7XG5cbiAgICAgICAgby5mcmllbmRzID0gbmV3IGNvbGxlY3Rpb24odG9UeXBlZChvLmZyaWVuZHMsIGdpZ3lhLnNvY2lhbGl6ZS5GcmllbmQpLCAnVUlEJyk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRJZGVudGl0aWVzQXJyYXlUb09iamVjdChvKSB7XG4gICAgaWYgKG8uaWRlbnRpdGllcyA9PSBudWxsKSB7XG4gICAgICAgIG8uaWRlbnRpdGllcyA9IHt9O1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChvLmlkZW50aXRpZXMuY29uc3RydWN0b3IgIT0gQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaWRlbnRpdGllc0FycmF5ID0gby5pZGVudGl0aWVzO1xuICAgIG8uaWRlbnRpdGllcyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaWRlbnRpdGllc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG8uaWRlbnRpdGllc1tpZGVudGl0aWVzQXJyYXlbaV0ucHJvdmlkZXJdID0gbmV3IGdpZ3lhLnNvY2lhbGl6ZS5JZGVudGl0eShpZGVudGl0aWVzQXJyYXlbaV0pO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRVc2VySW5mb1RvRXZlbnQocmVzcG9uc2U6IE9iamVjdCwgdGFyZ2V0T2JqZWN0OiBPYmplY3QsIGFkZExvZ2luUHJvcGVydGllcz86IGJvb2xlYW4sIHVzZUJhc2VQaG90b1VSTD86IHN0cmluZykge1xuICAgIHZhciBvVXNlciA9IHJlc3BvbnNlWyd1c2VyJ10gfHwgcmVzcG9uc2VbJ3VzZXJJbmZvJ107XG4gICAgaWYgKHRhcmdldE9iamVjdCA9PSBudWxsKSB0YXJnZXRPYmplY3QgPSB7fTtcbiAgICBpZiAob1VzZXIgIT0gbnVsbCkge1xuICAgICAgICB0YXJnZXRPYmplY3RbJ3VzZXInXSA9IG9iamVjdFV0aWxzLmNsb25lKG9Vc2VyKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlWydpc0xvZ2dlZEluJ10gIT0gbnVsbCkgdGFyZ2V0T2JqZWN0Wyd1c2VyJ11bJ2lzTG9nZ2VkSW4nXSA9IHJlc3BvbnNlWydpc0xvZ2dlZEluJ107XG4gICAgICAgIGlmIChyZXNwb25zZVsnaXNTaXRlVUlEJ10gIT0gbnVsbCkgdGFyZ2V0T2JqZWN0Wyd1c2VyJ11bJ2lzU2l0ZVVJRCddID0gcmVzcG9uc2VbJ2lzU2l0ZVVJRCddO1xuICAgICAgICBpZiAocmVzcG9uc2VbJ2lSYW5rJ10gIT0gbnVsbCkgdGFyZ2V0T2JqZWN0Wyd1c2VyJ11bJ2lSYW5rJ10gPSByZXNwb25zZVsnaVJhbmsnXTtcbiAgICB9XG5cbiAgICBpZiAoYWRkTG9naW5Qcm9wZXJ0aWVzKSB7XG4gICAgICAgIG9iamVjdFV0aWxzLmV4dHJhY3RQcm9wZXJ0aWVzKHJlc3BvbnNlLCB0YXJnZXRPYmplY3QsICdzaWduYXR1cmV8VUlEU2lnfHRpbWVzdGFtcHxVSURTaWduYXR1cmV8c2lnbmF0dXJlVGltZXN0YW1wfFVJRHxzaWduS2V5c1VJRFNpZ25hdHVyZXxkYXRhQ2VudGVyfGlkX3Rva2VufGdyb3VwcycpO1xuICAgICAgICBpZiAodGFyZ2V0T2JqZWN0Wyd1c2VyJ10gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGFyZ2V0T2JqZWN0WydVSUQnXSA9IG9Vc2VyLlVJRDtcbiAgICAgICAgICAgIHRhcmdldE9iamVjdFsnaXNTaXRlVUlEJ10gPSBvVXNlci5pc1NpdGVVSUQ7XG4gICAgICAgICAgICAvLyBpc1NpdGVVSUQgaXMgdGVtcG9yYXJ5IGZvciBodHRwczovL2dpZ3lhLm15LnNhbGVzZm9yY2UuY29tLzUwMDQwMDAwMDBUM3FjWlxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRPYmplY3Q7XG59XG5leHBvcnQgZnVuY3Rpb24gc2VuZEVtYWlsTmF0aXZlKHBhcmFtczogT2JqZWN0KSB7XG4gICAgdmFyIHVzZXJBY3Rpb24gPSBwYXJhbXNbJ3VzZXJBY3Rpb24nXSB8fCB7fTtcbiAgICB2YXIgc3ViamVjdCA9IHVzZXJBY3Rpb25bJ3RpdGxlJ10gfHwgJyc7XG4gICAgdmFyIGJvZHkgPSB1c2VyQWN0aW9uWydsaW5rQmFjayddIHx8ICcnO1xuICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAnbWFpbHRvOj90bz0mc3ViamVjdD0nICsgVVJMVXRpbHMuVVJMRW5jb2RlKHN1YmplY3QpICsgJyZib2R5PScgKyBVUkxVdGlscy5VUkxFbmNvZGUoYm9keSk7XG4gICAgZ2lneWEuc29jaWFsaXplLnNlbmRFbWFpbChwYXJhbXMsIHsgZG9udFNlbmRFbWFpbDogdHJ1ZSB9KTsgLy8gVG8gcmVwb3J0IHRoYXQgc2VuZCB3aXRob3V0IHNlbmRpbmcgaXRcbn1cbiIsIi8vIExvY2FsIGVudmlyb25tZW50IGluZm8gKGJyb3dzZXIsIGNhcGFiaWxpdGllcywgaG9zdGluZyBkb21haW4pXG5cbmRlY2xhcmUgY29uc3QgQWN0aXZlWE9iamVjdDogYW55O1xuXG52YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuZXhwb3J0IHZhciBsb2NhbEluZm8gPSB7XG4gICAgYmFzZURvbWFpbjogJycsIC8vIGNhbGN1bGF0ZWQgbGF0ZXIgb25cbiAgICBpc0Jyb3dzZXJTdXBwb3J0c0ZpbGVzQVBJOiAoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZW9mIEZpbGVSZWFkZXIgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIEZpbGVSZWFkZXIgPT09ICdvYmplY3QnO1xuICAgIH0pKCksXG4gICAgaW5pdFRpbWU6IG5ldyBEYXRlKCksXG4gICAgdmVyc2lvbjogMCwgLy9UT0RPXG4gICAgcGFnZURvbWFpbjogZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUsXG4gICAgcHJvdG9jb2w6IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sID09ICdodHRwOicgPyAnaHR0cCcgOiAnaHR0cHMnLFxuICAgIHVzZXJBZ2VudDogdXNlckFnZW50LFxuICAgIGlzV2luOiB1c2VyQWdlbnQuaW5kZXhPZignd2luJykgIT0gLTEsXG4gICAgaXNJRTogdXNlckFnZW50LmluZGV4T2YoJ21zaWUnKSAhPSAtMSB8fCAodXNlckFnZW50LmluZGV4T2YoJ21vemlsbGEnKSAhPSAtMSAmJiB1c2VyQWdlbnQuaW5kZXhPZigndHJpZGVudCcpICE9IC0xKSxcbiAgICBpc0lFNjogdXNlckFnZW50LmluZGV4T2YoJ21zaWUgNi4nKSAhPSAtMSxcbiAgICBpc0lFNzogdXNlckFnZW50LmluZGV4T2YoJ21zaWUgNy4nKSAhPSAtMSxcbiAgICBpc0lFODogdXNlckFnZW50LmluZGV4T2YoJ21zaWUgOC4nKSAhPSAtMSxcbiAgICBpc0lFOTogdXNlckFnZW50LmluZGV4T2YoJ21zaWUgOS4nKSAhPSAtMSxcbiAgICBpc0lFMTA6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llIDEwLicpICE9IC0xLFxuICAgIGlzSUUxMTogdXNlckFnZW50LmluZGV4T2YoJ21vemlsbGEnKSAhPSAtMSAmJiB1c2VyQWdlbnQuaW5kZXhPZigndHJpZGVudC83LjAnKSAhPSAtMSxcbiAgICBpc0VkZ2VMZWdhY3k6IHVzZXJBZ2VudC5pbmRleE9mKCdlZGdlJykgIT0gLTEsXG4gICAgaXNFZGdlOiBSZWdFeHAoL2VkZyg/IWUpLykudGVzdCh1c2VyQWdlbnQpLFxuICAgIGlzSU9TOiB1c2VyQWdlbnQuaW5kZXhPZignaXBob25lJykgIT0gLTEgfHwgdXNlckFnZW50LmluZGV4T2YoJ2lwYWQnKSAhPSAtMSB8fCB1c2VyQWdlbnQuaW5kZXhPZignaXBvZCcpICE9IC0xLFxuICAgIGlzU2FmYXJpNTM0OiB1c2VyQWdlbnQuaW5kZXhPZignc2FmYXJpLzUzNCcpICE9IC0xLFxuICAgIGlzV2VDaGF0OiB1c2VyQWdlbnQuaW5kZXhPZignbWljcm9tZXNzZW5nZXInKSAhPSAtMSxcbiAgICBpb3NWZXJzaW9uOiAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignYXBwbGV3ZWJraXQnKSAhPSAtMSAmJiB1c2VyQWdlbnQuaW5kZXhPZigndmVyc2lvbi8nKSAhPSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHVzZXJBZ2VudC5zcGxpdCgndmVyc2lvbi8nKVsxXS5zcGxpdCgnICcpWzBdKTtcbiAgICAgICAgfSBlbHNlIHJldHVybiAwO1xuICAgIH0pKCksXG4gICAgaXNBbmRyb2lkOiB1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCcpICE9IC0xLFxuICAgIGlzQW5kcm9pZEJyb3dzZXI6ICh1c2VyQWdlbnQgPT4ge1xuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ21vemlsbGEvNS4wJykgPT09IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCA0JykgPT09IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignYXBwbGV3ZWJraXQnKSA9PT0gLTEpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ3dpbmRvd3MgcGhvbmUnKSAhPT0gLTEpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAvLyBTcGVjaWFsIHVzZXIgYWdlbnRzIGZvdW5kIHNvIGZhciB0aGF0IHZpb2xhdGUgdGhlIGV4aXN0YW5jZSBvZiBjaHJvbWUgcnVsZVxuICAgICAgICAvLyBCdWcgMzgzNjcgQW5kcm9pZCBCcm93c2VyOiBNb3ppbGxhLzUuMCAoTGludXg7IEFuZHJvaWQgNC4yLjI7IGVuLXVzOyBTQU1TVU5HIEdULUk5NTAwIEJ1aWxkL0pEUTM5KSBBcHBsZVdlYktpdC81MzUuMTkgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzEuMCBDaHJvbWUvMTguMC4xMDI1LjMwOCBNb2JpbGUgU2FmYXJpLzUzNS4xOVxuICAgICAgICAvLyBCdWcgNDAyMDkgQ2hyb21lIEJyb3dzZXI6IE1vemlsbGEvNS4wIChMaW51eDsgQW5kcm9pZCA0LjIuMjsgU0FNU1VORyBTR1QtSTc0NyBCdWlsZC9LT1Q0OUgpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8zOS4wLjIxNzEuOTMgTW9iaWxlIFNhZmFyaS81MzcuMzZcbiAgICAgICAgLy8gV2luZG93cyBQaG9uZSBCcm93c2VyOiBNb3ppbGxhLzUuMCAoTW9iaWxlOyBXaW5kb3dzIFBob25lIDguMTsgQW5kcm9pZCA0LjA7IEFSTTsgVHJpZGVudC83LjA7IFRvdWNoOyBydjoxMS4wOyBJRU1vYmlsZS8xMS4wOyBOT0tJQTsgTHVtaWEgOTIwKSBsaWtlIGlQaG9uZSBPUyA3XzBfMyBNYWMgT1MgWCBBcHBsZVdlYktpdC81MzcgKEtIVE1MLCBsaWtlIEdlY2tvKSBNb2JpbGUgU2FmYXJpLzUzN1xuICAgICAgICAvLyBDaHJvbWUgQnJvd3NlcjogTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDQuMi4yOyBlbi1nYjsgU0FNU1VORyBHVC1JOTUwMCBCdWlsZC9LT1Q0OUgpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vMS41IENocm9tZS8yOC4wLjE1MDAuOTQgTW9iaWxlIFNhZmFyaS81MzcuMzZcblxuICAgICAgICB2YXIgY2hyb21lSW5mbyA9IC9jaHJvbWVcXC8oXFxkKykvLmV4ZWModXNlckFnZW50KTtcblxuICAgICAgICBpZiAoIWNocm9tZUluZm8pIHJldHVybiB0cnVlO1xuXG4gICAgICAgIHZhciBjaHJvbWVWZXJzaW9uID0gcGFyc2VJbnQoY2hyb21lSW5mb1sxXSk7XG5cbiAgICAgICAgcmV0dXJuIGNocm9tZVZlcnNpb24gPCAyMDtcbiAgICB9KSh1c2VyQWdlbnQpLFxuICAgIGN1cnJlbnRCcm93c2VyOiAnJyxcbiAgICBhbmRyb2lkVmVyc2lvbjogKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ2FuZHJvaWQnKSAhPSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodXNlckFnZW50LnNsaWNlKHVzZXJBZ2VudC5pbmRleE9mKCdhbmRyb2lkJykgKyA4KSk7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gMDtcbiAgICB9KSgpLFxuICAgIGlzQ2hyb21lOiB1c2VyQWdlbnQuaW5kZXhPZignY2hyb21lJykgIT0gLTEgJiYgdXNlckFnZW50LmluZGV4T2YoJ2VkZycpID09IC0xLCAvLyBlZGdlIGJyb3dzZXIgYWxzbyB1c2VzIENocm9tZSBpbiBpdHMgVUEgc3RyaW5nLlxuICAgIGlzR29vZ2xlQm90OiB1c2VyQWdlbnQuaW5kZXhPZignZ29vZ2xlYm90JykgIT0gLTEsXG4gICAgaXNGRjogdXNlckFnZW50LmluZGV4T2YoJ2ZpcmVmb3gnKSAhPSAtMSxcbiAgICBpc09wZXJhOiB1c2VyQWdlbnQuaW5kZXhPZignb3BlcmEnKSAhPSAtMSxcbiAgICBpc1NhZmFyaTpcbiAgICAgICAgbmF2aWdhdG9yLmFwcFZlcnNpb24gJiZcbiAgICAgICAgbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzYWZhcmknKSAhPSAtMSAmJlxuICAgICAgICBuYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2Nocm9tZScpID09IC0xICYmXG4gICAgICAgIHVzZXJBZ2VudC5pbmRleE9mKCdhbmRyb2lkJykgPT0gLTEsXG4gICAgaXNJT1NXZWJWaWV3OiAvKGlQaG9uZXxpUG9kfGlQYWQpLipBcHBsZVdlYktpdCg/IS4qU2FmYXJpKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksXG4gICAgaXNJT1NDaHJvbWU6IHVzZXJBZ2VudC5pbmRleE9mKCdjcmlvcycpICE9IC0xLFxuICAgIGlzTUFDOiBuYXZpZ2F0b3IuYXBwVmVyc2lvbiAmJiBuYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ21hYycpICE9IC0xLFxuICAgIGlzV2luZG93c1Bob25lOiB1c2VyQWdlbnQuaW5kZXhPZignd2luZG93cyBwaG9uZScpICE9IC0xLFxuICAgIGlzRmFjZWJvb2tCcm93c2VyOiB1c2VyQWdlbnQuaW5kZXhPZignZmJhbicpICE9IC0xIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdmYmF2JykgIT0gLTEsXG4gICAgc3VwcG9ydHNQb3N0TWVzc2FnZTogd2luZG93LnBvc3RNZXNzYWdlICE9IG51bGwgJiYgKHVzZXJBZ2VudC5pbmRleE9mKCdtc2llJykgPT0gLTEgfHwgdXNlckFnZW50LmluZGV4T2YoJ2llbW9iaWxlJykgIT0gLTEpLFxuICAgIHN1cHBvcnRzTG9jYWxTdG9yYWdlOiBmYWxzZSxcbiAgICBzdXBwb3J0c1Nlc3Npb25TdG9yYWdlOiBmYWxzZSxcbiAgICBzdXBwb3J0c0ZsYXNoOiAoKCkgPT4ge1xuICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzk5ODI0NS9ob3ctY2FuLWktZGV0ZWN0LWlmLWZsYXNoLWlzLWluc3RhbGxlZC1hbmQtaWYtbm90LWRpc3BsYXktYS1oaWRkZW4tZGl2LXRoYXQtaW5mXG4gICAgICAgIGxldCBzdXBwb3J0c0ZsYXNoID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLm1pbWVUeXBlcyAmJlxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5taW1lVHlwZXNbJ2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJ10gIT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLm1pbWVUeXBlc1snYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnXS5lbmFibGVkUGx1Z2luXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0c0ZsYXNoID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZm8gPSBuZXcgQWN0aXZlWE9iamVjdCgnU2hvY2t3YXZlRmxhc2guU2hvY2t3YXZlRmxhc2gnKTtcbiAgICAgICAgICAgICAgICBpZiAoZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydHNGbGFzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICByZXR1cm4gc3VwcG9ydHNGbGFzaDtcbiAgICB9KSgpLFxuICAgIHF1aXJrc01vZGU6IGRvY3VtZW50LmNvbXBhdE1vZGUgPT0gJ0JhY2tDb21wYXQnICYmIHVzZXJBZ2VudC5pbmRleE9mKCdtc2llJykgIT0gLTEsXG4gICAgYmFja0NvbXBhdDogZG9jdW1lbnQuY29tcGF0TW9kZSA9PSAnQmFja0NvbXBhdCcsXG4gICAgLy8gVE9ETzogQWRkIGlzVGFibGV0IGZ1bmN0aW9uIGZvciBkZXZpY2VzIG5vbi1Nb2JpbGVcbiAgICBpc01vYmlsZTogKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbW9iaWxlQ2xpZW50cyA9IFtcbiAgICAgICAgICAgICdpcGhvbmUnLFxuICAgICAgICAgICAgJ2lwb2QnLFxuICAgICAgICAgICAgJ2FuZHJvaWQnLFxuICAgICAgICAgICAgJ21pZHAnLFxuICAgICAgICAgICAgJzI0MHgzMjAnLFxuICAgICAgICAgICAgJ2JsYWNrYmVycnknLFxuICAgICAgICAgICAgJ25ldGZyb250JyxcbiAgICAgICAgICAgICdub2tpYScsXG4gICAgICAgICAgICAncGFuYXNvbmljJyxcbiAgICAgICAgICAgICdwb3J0YWxtbW0nLFxuICAgICAgICAgICAgJ3NoYXJwJyxcbiAgICAgICAgICAgICdzaWUtJyxcbiAgICAgICAgICAgICdzb255ZXJpY3Nzb24nLFxuICAgICAgICAgICAgJ3N5bWJpYW4nLFxuICAgICAgICAgICAgJ3dpbmRvd3MgY2UnLFxuICAgICAgICAgICAgJ2JlbnEnLFxuICAgICAgICAgICAgJ21kYScsXG4gICAgICAgICAgICAnbW90LScsXG4gICAgICAgICAgICAnb3BlcmEgbWluaScsXG4gICAgICAgICAgICAncGhpbGlwcycsXG4gICAgICAgICAgICAncG9ja2V0IHBjJyxcbiAgICAgICAgICAgICdzYWdlbScsXG4gICAgICAgICAgICAnc2Ftc3VuZycsXG4gICAgICAgICAgICAnaHRjJyxcbiAgICAgICAgXTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBtb2JpbGVDbGllbnRzKSB7XG4gICAgICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YobW9iaWxlQ2xpZW50c1tpXSkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSkoKSxcbiAgICBpc01vYmlsZUFwcDogKCgpID0+IHtcbiAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSlcbiAgICAgICAgICAgIC8vIGZvciBvbGQgSUVcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICB2YXIgbWV0YVRhZ3M6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21ldGEnKSBhcyBhbnk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXRhVGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG1ldGFUYWdzW2ldLmdldEF0dHJpYnV0ZSgnbmFtZScpID09ICd2aWV3cG9ydCcpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IG1ldGFUYWdzW2ldLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgJiYgY29udGVudC5pbmRleE9mKCd3aWR0aD1kZXZpY2Utd2lkdGgnKSAhPT0gLTEpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pKCksXG4gICAgaXNOYXRpdmVNb2JpbGVBcHA6IGZhbHNlLCAvLyB3aWxsIGNoYW5nZSBpZiBtb2JpbGUgYWRhcHRlciB3aWxsIGxvYWQgW2luIGl0cyAnaW5pdCcgbWV0aG9kXS5cbiAgICBpc1RvdWNoOiAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpXG4gICAgICAgICAgICAvLyB3b3JrcyBvbiBtb3N0IGJyb3dzZXJzXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICBpZiAoJ29ubXNnZXN0dXJlY2hhbmdlJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIC8vIHdvcmtzIG9uIGllMTBcbiAgICAgICAgICAgIC8vIFRyeSB0byBkZXRlcm1pbmUgaWYgSUUgaXMgb3BlbiBpbiBtZXRybyBtb2RlLiBNZXRybyBkb2Vzbid0IGFsbG93IGFjdGl2ZVgsIHRoYXQncyB0aGUgYmVzdCB0ZXN0IGF2YWlsYWJsZSBhcyBvZiBJRTExLlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBuZXcgQWN0aXZlWE9iamVjdCgnaHRtbGZpbGUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSkoKSxcbiAgICBpc09uTGluZTogKCkgPT4gbmF2aWdhdG9yLm9uTGluZSxcbiAgICBtZXNzYWdpbmdNZXRob2Q6IDFcbn07XG5jb25zdCBpc1N0b3JhZ2VFbmFibGVkID0gKHN0b3JhZ2VOYW1lOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gd2luZG93W3N0b3JhZ2VOYW1lXTtcbiAgICAgICAgaWYgKCFzdG9yYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0ZXN0TmFtZSA9ICdfZ2lnX2xvY2FsU3RvcmFnZV90ZXN0JztcbiAgICAgICAgY29uc3QgdGVzdFZhbHVlID0gJ2p1c3QgY2hlY2tpbmcgZm9yIGxvY2FsU3RvcmFnZSc7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh0ZXN0TmFtZSwgdGVzdFZhbHVlKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3RvcmFnZS5nZXRJdGVtKHRlc3ROYW1lKSA9PT0gdGVzdFZhbHVlO1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0odGVzdE5hbWUpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIC8vIFJlYXNvbnM6XG4gICAgICAgIC8vIC0gSW5zaWRlIDNyZCBwYXJ0eSBBUEkgcHJveHkgaUZyYW1lLlxuICAgICAgICAvLyAtIFNhZmFyaSBpbiBpbmNvZ25pdG8gbW9kZSB3aWxsIGVycm9yIHdpdGggXCJxdW90YSBleGNlZWRlZFwiLlxuICAgICAgICAvLyAtIENocm9tZSB3aXRoIDNyZCBwYXJ0eSBjb29raWVzIGRpc2FibGVkIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgeW91IGFjY2VzcyB0aGUgd2luZG93LmxvY2FsU3RvcmFnZSBvYmplY3QgaW4gQU5ZIHdheS5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG5sb2NhbEluZm8uc3VwcG9ydHNMb2NhbFN0b3JhZ2UgPSBpc1N0b3JhZ2VFbmFibGVkKCdsb2NhbFN0b3JhZ2UnKTtcbmxvY2FsSW5mby5zdXBwb3J0c1Nlc3Npb25TdG9yYWdlID0gaXNTdG9yYWdlRW5hYmxlZCgnc2Vzc2lvblN0b3JhZ2UnKTtcbmxvY2FsSW5mby5pc01BQyA9IGxvY2FsSW5mby5pc01BQyAmJiAhbG9jYWxJbmZvLmlzSU9TO1xudmFyIG9zID0gbG9jYWxJbmZvLmlzV2luXG4gICAgPyAnd2luZG93cydcbiAgICA6IGxvY2FsSW5mby5pc1dpbmRvd3NQaG9uZVxuICAgICAgICA/ICd3aW5waG9uZSdcbiAgICAgICAgOiBsb2NhbEluZm8uaXNJT1NcbiAgICAgICAgICAgID8gJ2lvcy12JyArIGxvY2FsSW5mby5pb3NWZXJzaW9uXG4gICAgICAgICAgICA6IGxvY2FsSW5mby5pc01BQ1xuICAgICAgICAgICAgICAgID8gJ21hYydcbiAgICAgICAgICAgICAgICA6IGxvY2FsSW5mby5pc0FuZHJvaWRcbiAgICAgICAgICAgICAgICAgICAgPyAnYW5kcm9pZCdcbiAgICAgICAgICAgICAgICAgICAgOiAnJztcbmlmIChvcykgb3MgKz0gJyAnO1xudmFyIGJyb3dzZXIgPSBsb2NhbEluZm8uaXNDaHJvbWVcbiAgICA/ICdjaHJvbWUnXG4gICAgOiBsb2NhbEluZm8uaXNGRlxuICAgICAgICA/ICdmaXJlZm94J1xuICAgICAgICA6IGxvY2FsSW5mby5pc1NhZmFyaVxuICAgICAgICAgICAgPyAnc2FmYXJpJ1xuICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNFZGdlXG4gICAgICAgICAgICAgICAgPyAnZWRnZSdcbiAgICAgICAgICAgIDogbG9jYWxJbmZvLmlzRWRnZUxlZ2FjeVxuICAgICAgICAgICAgICAgID8gJ2VkZ2UgbGVnYWN5J1xuICAgICAgICAgICAgICAgIDogbG9jYWxJbmZvLmlzSUUxMVxuICAgICAgICAgICAgICAgICAgICA/ICdpZTExJ1xuICAgICAgICAgICAgICAgICAgICA6IGxvY2FsSW5mby5pc0lFMTBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2llMTAnXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGxvY2FsSW5mby5pc0lFOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2llOSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxvY2FsSW5mby5pc0lFOFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdpZTgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyc7XG5sb2NhbEluZm8uY3VycmVudEJyb3dzZXIgPSBvcyArIGJyb3dzZXI7XG5cbnR5cGUgQmF0dGVyeUluZm8gPSB7XG4gICAgY2hhcmdpbmc6IGJvb2xlYW47XG4gICAgY2hhcmdpbmdUaW1lOiBudW1iZXI7XG4gICAgZGlzY2hhcmdpbmdUaW1lOiBudW1iZXI7XG4gICAgbGV2ZWw6IG51bWJlcjtcbn07XG50eXBlIFBsdWdpbiA9IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZmlsZW5hbWU6IHN0cmluZztcbiAgICBsZW5ndGg6IG51bWJlcjtcbn07XG5leHBvcnQgY2xhc3MgQ2xpZW50RmVhdHVyZSB7XG4gICAgcHVibGljIHVzZXJBZ2VudD86IHN0cmluZztcbiAgICBwdWJsaWMgcGx1Z2lucz86IFBsdWdpbltdO1xuICAgIHB1YmxpYyBsb2NhbFRpbWU/OiBzdHJpbmc7XG4gICAgcHVibGljIHRpbWV6b25lT2Zmc2V0PzogbnVtYmVyO1xuICAgIHB1YmxpYyBwZXJtaXNzaW9uU3RhdHVzPzogeyBzdGF0ZTogc3RyaW5nIH07XG4gICAgcHVibGljIHdlYmRyaXZlcj86IGJvb2xlYW47XG4gICAgcHVibGljIGJhdHRlcnlJbmZvPzogQmF0dGVyeUluZm87XG4gICAgcHVibGljIGZlYXR1cmVzPzogW251bWJlciwgc3RyaW5nLCBib29sZWFuLCBib29sZWFuXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF2aWdhdG9yOiBOYXZpZ2F0b3IgPSBnaWd5YS5fLldpbmRvd1Byb3ZpZGVyLm5hdmlnYXRvcigpLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgc2NyZWVuOiBTY3JlZW4gPSBnaWd5YS5fLldpbmRvd1Byb3ZpZGVyLnNjcmVlbigpKSB7XG4gICAgICAgIHRoaXMuY29sbGVjdERhdGEoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGNvbGxlY3REYXRhKCkge1xuICAgICAgICB0aGlzLnVzZXJBZ2VudCA9IHRoaXMubmF2aWdhdG9yPy51c2VyQWdlbnQ7XG4gICAgICAgIHRoaXMucGx1Z2lucyA9IEFycmF5LmZyb20odGhpcy5uYXZpZ2F0b3I/LnBsdWdpbnMgfHwgW10pLm1hcCgoe25hbWUsIGZpbGVuYW1lLCBsZW5ndGh9KSA9PiAoeyBuYW1lLCBmaWxlbmFtZSwgbGVuZ3RoIH0pKTtcbiAgICAgICAgdGhpcy5sb2NhbFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgICAgICB0aGlzLnRpbWV6b25lT2Zmc2V0ID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgICAgICBjb25zdCBwZXJtaXNzaW9uU3RhdHVzID0gYXdhaXQgdGhpcy5uYXZpZ2F0b3I/LnBlcm1pc3Npb25zPy5xdWVyeSh7IG5hbWU6J25vdGlmaWNhdGlvbnMnIH0pO1xuICAgICAgICBpZiAocGVybWlzc2lvblN0YXR1cykge1xuICAgICAgICAgICAgY29uc3Qge3N0YXRlfSA9IHBlcm1pc3Npb25TdGF0dXM7XG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25TdGF0dXMgPSB7c3RhdGV9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud2ViZHJpdmVyID0gdGhpcy5uYXZpZ2F0b3I/LndlYmRyaXZlcjtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBiYXR0ZXJ5SW5mbyA9IHRoaXMubmF2aWdhdG9yLmdldEJhdHRlcnkgJiYgYXdhaXQgdGhpcy5uYXZpZ2F0b3IuZ2V0QmF0dGVyeSgpO1xuICAgICAgICBpZiAoYmF0dGVyeUluZm8pIHtcbiAgICAgICAgICAgIGNvbnN0IHtjaGFyZ2luZywgY2hhcmdpbmdUaW1lLCBkaXNjaGFyZ2luZ1RpbWUsIGxldmVsfSA9IGJhdHRlcnlJbmZvO1xuICAgICAgICAgICAgdGhpcy5iYXR0ZXJ5SW5mbyA9IHtjaGFyZ2luZywgY2hhcmdpbmdUaW1lLCBkaXNjaGFyZ2luZ1RpbWUsIGxldmVsfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZlYXR1cmVzID0gW1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0b3I/Lm1heFRvdWNoUG9pbnRzIHx8IHRoaXMubmF2aWdhdG9yPy5tc01heFRvdWNoUG9pbnRzLFxuICAgICAgICAgICAgYCR7dGhpcy5zY3JlZW4ud2lkdGh9fCR7dGhpcy5zY3JlZW4uaGVpZ2h0fXwke3RoaXMuc2NyZWVuLmNvbG9yRGVwdGh9YCxcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdG9yLmphdmFFbmFibGVkKCksXG4gICAgICAgICAgICAnc2VuZEJlYWNvbicgaW4gdGhpcy5uYXZpZ2F0b3JcbiAgICAgICAgXTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRmxhZ1NlcnZpY2Uge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGZvcmNlV2ViU2RrQm9vdHN0cmFwKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2ZvcmNlV2ViU2RrQm9vdHN0cmFwJyk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHVzZUdpZ3lhSnNCYXNlRG9tYWluKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3VzZUdpZ3lhSnNCYXNlRG9tYWluJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaGlkZVNTT0ZyYW1lKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2hpZGVTU09GcmFtZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHdjYWdDb250cmFzdEZpeCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd3Y2FnQ29udHJhc3RGaXgnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBuZXdGb3JtTGlua0luc3RhbmNlRWxlbWVudCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCduZXdGb3JtTGlua0luc3RhbmNlRWxlbWVudCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHN0b3BTZW5kaW5nUmVwb3J0cygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdzdG9wU2VuZGluZ1JlcG9ydHMnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBzZXRHcm91cEFwaURvbWFpbkFmdGVyTG9naW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnc2V0R3JvdXBBcGlEb21haW5BZnRlckxvZ2luJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdXNlSHR0cFN0YXR1c0NvZGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgndXNlSHR0cFN0YXR1c0NvZGUnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBhbHdheXNDaGVja0Nvb2tpZVNhdmUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnYWx3YXlzQ2hlY2tDb29raWVTYXZlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgZml4UGhvbmVURkFUcmFuc2xhdGlvbnMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnZml4UGhvbmVURkFUcmFuc2xhdGlvbnMnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBsb2FkU3NvRnJhbWVPbmx5T25jZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdsb2FkU3NvRnJhbWVPbmx5T25jZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHZlcmlmeUxvZ2luT25seU9uY2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgndmVyaWZ5TG9naW5Pbmx5T25jZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNlbmRMYW5nRm9yRW1haWxPVFAoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnc2VuZExhbmdGb3JFbWFpbE9UUCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNldFByb3ZpZGVyRnJvbVJlc3BvbnNlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3NldFByb3ZpZGVyRnJvbVJlc3BvbnNlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc2V0Q29va2llU2FtZVNpdGVMYXhTZXNzaW9uKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3NldENvb2tpZVNhbWVTaXRlTGF4U2Vzc2lvbicpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNldENvb2tpZVNhbWVTaXRlTGF4U29jaWFsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3NldENvb2tpZVNhbWVTaXRlTGF4U29jaWFsJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc2V0Q29va2llU2FtZVNpdGVMYXhMb3dQcmlvcml0eSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdzZXRDb29raWVTYW1lU2l0ZUxheExvd1ByaW9yaXR5Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgZm9yY2VFcnJvclJlcG9ydCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdmb3JjZUVycm9yUmVwb3J0Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc2tpcFNhbWVTY3JlZW5DaGVja09uU3dpdGNoKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3NraXBTYW1lU2NyZWVuQ2hlY2tPblN3aXRjaCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGdldE9ubHlWaXNpYmxlRmllbGQgKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2dldE9ubHlWaXNpYmxlRmllbGQnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCB1cGRhdGVBY2NvdW50SW5mb0FzeW5jICgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd1cGRhdGVBY2NvdW50SW5mb0FzeW5jJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc2FuaXRpemVFdmFsdWF0ZWRWYWx1ZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoJ3Nhbml0aXplRXZhbHVhdGVkVmFsdWUnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCB1c2VTZXNzaW9uVmVyaWZ5ICgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd1c2VTZXNzaW9uVmVyaWZ5Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdXNlRXh0ZW5kZWRQaG9uZU51bWJlclJlZ2V4ICgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd1c2VFeHRlbmRlZFBob25lTnVtYmVyUmVnZXgnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBnZW5lcmF0ZU5ld0NvZGVXY2FnQ29tcGxpYW5jZSAoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnZ2VuZXJhdGVOZXdDb2RlV2NhZ0NvbXBsaWFuY2UnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBlbmZvcmNlQXV0aEZsb3dSZWRpcmVjdEZvclNvY2lhbCAoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnZW5mb3JjZUF1dGhGbG93UmVkaXJlY3RGb3JTb2NpYWwnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCB1c2VEZWNvZGVVUklDb21wb25lbnQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgndXNlRGVjb2RlVVJJQ29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdXNlT2lkY0dldFBhcmFtSGFzaE9sZFN0eWxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3VzZU9pZGNHZXRQYXJhbUhhc2hPbGRTdHlsZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHVzZVZpZXdwb3J0UG9sbGVyQWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3VzZVZpZXdwb3J0UG9sbGVyQWN0aW9uJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaWdub3JlSW50ZXJydXB0aW9uc0luT2lkY1Bhc3NpdmVMb2dpbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdpZ25vcmVJbnRlcnJ1cHRpb25zSW5PaWRjUGFzc2l2ZUxvZ2luJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgb3ZlcnJpZGVBbGxDaGlsZENvbnRleHQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnb3ZlcnJpZGVBbGxDaGlsZENvbnRleHQnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBkaXNwYXRjaExvZ2luRXZlbnRXaGVuSGFuZGxlckFkZGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2Rpc3BhdGNoTG9naW5FdmVudFdoZW5IYW5kbGVyQWRkZWQnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChnaWd5YS5fLmNvbmZpZz8uZmxhZ3MgJiYgZ2lneWEuXy5jb25maWc/LmZsYWdzW25hbWVdKSB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBFdmVyeSBmbGFnIHRoYXQgaXMgYXNzb2NpYXRlZCB3aXRoIGRhdGEgbW9kaWZpY2F0aW9uIHJlbGF0ZWQgdG8gdGhlIGFwaSBsYXllclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGFwaUZsYWdzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cbiIsImltcG9ydCB7Z2V0LCBzZXR9IGZyb20gJy4uL1V0aWxzL3Nlc3Npb25DYWNoZSc7XG5pbXBvcnQge2dldE11cm11ckhhc2h9IGZyb20gXCIuLi9VdGlscy9vYmplY3RcIjtcblxuaW50ZXJmYWNlIElTZXNzaW9uU2VydmljZSB7XG4gICAgaXNTZXNzaW9uVmVyaWZpZWQoZ2x0OiBzdHJpbmcpOiBib29sZWFuO1xuICAgIHNldElzU2Vzc2lvblZlcmlmaWVkKGdsdDogc3RyaW5nLCB2ZXJpZnk6IGJvb2xlYW4pO1xufVxuXG5jbGFzcyBTZXNzaW9uU2VydmljZSBpbXBsZW1lbnRzIElTZXNzaW9uU2VydmljZSB7XG4gICAgcHVibGljIGlzU2Vzc2lvblZlcmlmaWVkKGdsdDogc3RyaW5nLCBhcGlLZXk6IHN0cmluZyA9IGdpZ3lhLnRoaXNTY3JpcHQuQVBJS2V5KTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuY3JlYXRlS2V5KGdsdCwgYXBpS2V5KTtcbiAgICAgICAgcmV0dXJuIGdldChrZXkpID09PSAndHJ1ZSc7XG4gICAgfVxuXG4gICAgcHVibGljIHNldElzU2Vzc2lvblZlcmlmaWVkKGdsdDogc3RyaW5nLCB2ZXJpZmllZDogYm9vbGVhbiwgYXBpS2V5OiBzdHJpbmcgPSBnaWd5YS50aGlzU2NyaXB0LkFQSUtleSkge1xuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmNyZWF0ZUtleShnbHQsIGFwaUtleSk7XG4gICAgICAgIHNldChrZXksIGAke3ZlcmlmaWVkfWApO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlS2V5KGdsdCwgYXBpS2V5KXtcbiAgICAgICAgbGV0IGtleSA9IGdldE11cm11ckhhc2goYCR7Z2x0fV8ke2FwaUtleX1gLCAxNSkudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIGJ0b2Eoa2V5KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXNzaW9uRGF0YSA9IG5ldyBTZXNzaW9uU2VydmljZSgpO1xuIiwiXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplKG9iajogYW55LCBpbmNsdWRlRnVuY3Rpb25zID0gZmFsc2UsIHByZXR0eVByaW50ID0gZmFsc2UsIGwgPSAwLCBtYXhMZXZlbCA9IDIwKTogc3RyaW5nIHtcbiAgICBpZiAoIWdpZ3lhLmxvY2FsSW5mby5pc0lFOCkge1xuICAgICAgICByZXR1cm4gd2luZG93WydKU09OJ10uc3RyaW5naWZ5KG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFsKSBsID0gMDtcblxuICAgICAgICBpZiAobCA+IG1heExldmVsKSByZXR1cm4gJ1tUb28gZGVlcF0nO1xuXG4gICAgICAgIHZhciBwcmVmaXggPSAnJztcbiAgICAgICAgdmFyIG5ld2xpbmUgPSAnJztcbiAgICAgICAgdmFyIHRhYiA9ICcnO1xuICAgICAgICBpZiAocHJldHR5UHJpbnQpIHtcbiAgICAgICAgICAgIHRhYiA9ICdcXHQnO1xuICAgICAgICAgICAgbmV3bGluZSA9ICdcXG4nO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsICsgMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcHJlZml4ICs9IHRhYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgdCA9IHR5cGVvZiBvYmo7XG4gICAgICAgIGlmICh0ID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQgIT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBzaW1wbGUgZGF0YSB0eXBlXG5cbiAgICAgICAgICAgIGlmICh0ID09ICdzdHJpbmcnKSBvYmogPSAnXCInICsgb2JqLnJlcGxhY2UoLyhcXFwifFxcXFwpL2csICdcXFxcJDEnKS5yZXBsYWNlKC9cXHJcXG58XFxyfFxcbi9nLCAnXFxcXG4nKSArICdcIic7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKG9iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbixcbiAgICAgICAgICAgICAgICB2LFxuICAgICAgICAgICAgICAgIGpzb24gPSBbXSxcbiAgICAgICAgICAgICAgICBhcnIgPSBvYmogJiYgb2JqLmNvbnN0cnVjdG9yID09IEFycmF5O1xuICAgICAgICAgICAgaWYgKGFycikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBvYmpbaV07XG4gICAgICAgICAgICAgICAgICAgIHQgPSB0eXBlb2YgdjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYgPT0gbnVsbCB8fCB0ID09ICd1bmRlZmluZWQnKSB2ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHQgPT0gJ3N0cmluZycpIHYgPSAnXCInICsgdi5yZXBsYWNlKC8oXFxcInxcXFxcKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvXFxyXFxufFxccnxcXG4vZywgJ1xcXFxuJykgKyAnXCInO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlRnVuY3Rpb25zKSB2ID0gJ0Z1bmN0aW9uJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdiA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHYucGFyZW50Tm9kZSAmJiB2LmlubmVySFRNTCkgdiA9ICdIVE1MRWxlbWVudCc7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHYuY29uc3RydWN0b3IgPT0gRGF0ZSkgdiA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ID09ICdvYmplY3QnICYmIHYgIT09IG51bGwpIHYgPSBzZXJpYWxpemUodiwgaW5jbHVkZUZ1bmN0aW9ucywgcHJldHR5UHJpbnQsIGwgKyAxKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoU3RyaW5nKHYpICE9ICcnKSBqc29uLnB1c2gocHJlZml4ICsgdGFiICsgU3RyaW5nKHYpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobiBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IG9ialtuXTtcbiAgICAgICAgICAgICAgICAgICAgdCA9IHR5cGVvZiB2O1xuICAgICAgICAgICAgICAgICAgICBpZiAodiA9PSBudWxsIHx8IHQgPT0gJ3VuZGVmaW5lZCcpIHYgPSBTdHJpbmcodik7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHQgPT0gJ3N0cmluZycpIHYgPSAnXCInICsgdi5yZXBsYWNlKC8oXFxcInxcXFxcKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvXFxyXFxufFxccnxcXG4vZywgJ1xcXFxuJykgKyAnXCInO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlRnVuY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdiA9ICdGdW5jdGlvbic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2LnBhcmVudE5vZGUgJiYgdi5pbm5lckhUTUwpIHYgPSAnSFRNTEVsZW1lbnQnO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2LmNvbnN0cnVjdG9yID09IERhdGUpIHYgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodCA9PSAnb2JqZWN0JyAmJiB2ICE9PSBudWxsKSB2ID0gbmV3bGluZSArIHNlcmlhbGl6ZSh2LCBpbmNsdWRlRnVuY3Rpb25zLCBwcmV0dHlQcmludCwgbCArIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChTdHJpbmcodikgIT0gJycpIGpzb24ucHVzaChwcmVmaXggKyB0YWIgKyAnXCInICsgbi5yZXBsYWNlKC8oXFxcInxcXFxcKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvXFxyXFxufFxccnxcXG4vZywgJ1xcXFxuJykgKyAnXCI6JyArIFN0cmluZyh2KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld2xpbmUgKyBwcmVmaXggKyAoYXJyID8gJ1snIDogJ3snKSArIG5ld2xpbmUgKyBqc29uLmpvaW4oJywnICsgbmV3bGluZSkgKyBuZXdsaW5lICsgcHJlZml4ICsgKGFyciA/ICddJyA6ICd9Jyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZGVzZXJpYWxpemU8VD4oanNvbjogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBULCBzY29wZT86IGFueSk6IFQge1xuICAgIC8vIFJldHVybiBkZWZhdWx0IHZhbHVlIGlmIGlzIGVtcHR5IHN0cmluZyAob3Igc2ltaWxhcikuXG4gICAgaWYgKCFqc29uIHx8ICFqc29uLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKSkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8ICh7fSBhcyBUKTtcbiAgICB9XG5cbiAgICAvLyBBdHRlbXB0IHRvIHBhcnNlLiBPbiBlcnJvciwgd2FybiBpbiBjb25zb2xlIGFuZCByZXR1cm4gZGVmYXVsdCB2YWx1ZS5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBrZXlzID0gW107XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgICAgICBpZiAoc2NvcGUpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNjb3BlKSB7XG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goc2NvcGVba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmbjogRnVuY3Rpb24gPSBldmFsKGAoZnVuY3Rpb24oJHtrZXlzLmpvaW4oJywnKX0pIHsgcmV0dXJuICR7anNvbi50cmltKCl9OyB9KWApO1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkodW5kZWZpbmVkLCB2YWx1ZXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdFcnJvciBkZXNlcmlhbGl6aW5nIEphdmFTY3JpcHQnLCBlKTtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCAoe30gYXMgVCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlPFQ+KGpzb246IHN0cmluZywgZGVmYXVsdFZhbHVlPzogVCk6IFQge1xuICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNJRTgpIHtcbiAgICAgICAgcmV0dXJuIGRlc2VyaWFsaXplPFQ+KGpzb24sIGRlZmF1bHRWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbJ0pTT04nXS5wYXJzZShqc29uKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCAoe30gYXMgVCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBHSUdZQV9QQVJBTV9QUkVGSVggfSBmcm9tICcuLy4uLy4uLy4uLy4uL2FjY291bnRzL2NvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyBrZXlWYWx1ZVV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9rZXlWYWx1ZSc7XG5pbXBvcnQgKiBhcyBvYmplY3RVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvb2JqZWN0JztcblxudHlwZSBJR2V0R2lnUGFyYW1zRnJvbVVybENvbmZpZyA9IGdpZ3lhLnV0aWxzLlVSTC5JR2V0R2lnUGFyYW1zRnJvbVVybENvbmZpZztcbnR5cGUgSUdldENvbnRleHRQYXJhbXNGcm9tVXJsQ29uZmlnID0gZ2lneWEudXRpbHMuVVJMLklHZXRDb250ZXh0UGFyYW1zRnJvbVVybENvbmZpZ1xuXG5leHBvcnQgZnVuY3Rpb24gVVJMRW5jb2RlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIFVSTERlY29kZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBVUkxEZWNvZGVSZWN1cnNpdmUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHByZXZEZWNvZGluZ1JlcyA9ICcnO1xuICAgIGxldCBjdXJyRGVjb2RpbmdSZXMgPSB2YWx1ZTtcblxuICAgIC8vIGtlZXAgZGVjb2RpbmcgdW50aWwgd2UgY2FuJ3QgZGVjb2RlIGFueW1vcmVcbiAgICB3aGlsZSAoY3VyckRlY29kaW5nUmVzICE9IHByZXZEZWNvZGluZ1Jlcykge1xuICAgICAgICAvLyBzdG9yZSB0aGUgbGFzdCBkZWNvZGluZyByZXN1bHRcbiAgICAgICAgcHJldkRlY29kaW5nUmVzID0gY3VyckRlY29kaW5nUmVzO1xuXG4gICAgICAgIC8vIGRlY29kZSB0aGUgc3RyaW5nIG9uY2UgYWdhaW5cbiAgICAgICAgY3VyckRlY29kaW5nUmVzID0gVVJMRGVjb2RlKHByZXZEZWNvZGluZ1Jlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJEZWNvZGluZ1Jlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmFtc0Zyb21VUkwodXJsOiBzdHJpbmcsIGtleXNUb0xvd2VyPzogYm9vbGVhbik6IE9iamVjdCB7XG4gICAgaWYgKCF1cmwgfHwgdXJsLmluZGV4T2YoJz8nKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICByZXR1cm4ga2V5VmFsdWVVdGlscy5kZXNlcmlhbGl6ZSh1cmwuc3BsaXQoJyMnKVswXS5zcGxpdCgnPycpWzFdLCAnJicsIGtleXNUb0xvd2VyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdpZ1BhcmFtc0Zyb21VUkwoY29uZmlnOiBJR2V0R2lnUGFyYW1zRnJvbVVybENvbmZpZykge1xuXG4gICAgY29uc3QgeyB1cmwsIHBhcmFtUHJlZml4LCBrZXlzVG9Mb3dlciwgcmVtb3ZlUHJlZml4IH0gPSBjb25maWcgfHwge31cblxuICAgIGNvbnN0IHByZWZpeCA9IHBhcmFtUHJlZml4IHx8IEdJR1lBX1BBUkFNX1BSRUZJWDtcbiAgICBjb25zdCB1cmxQYXJhbXMgPSBnZXRQYXJhbXNGcm9tVVJMKHVybCwga2V5c1RvTG93ZXIpO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh1cmxQYXJhbXMpXG4gICAgICAgIC5maWx0ZXIoa2V5ID0+IGtleS5pbmRleE9mKHByZWZpeCkgPT09IDAgJiYga2V5ICE9PSBwcmVmaXgpXG4gICAgICAgIC5yZWR1Y2U8YW55Pigob2JqLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0tleSA9IHJlbW92ZVByZWZpeCA/IGtleS5zbGljZSg0KSA6IGtleTtcbiAgICAgICAgICAgIG9ialtuZXdLZXldID0gdXJsUGFyYW1zW2tleV07XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9LCB7fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJhbVZhbHVlRnJvbVVSTChwYXJhbTogc3RyaW5nLCB1cmw6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChudWxsID09IHVybCB8fCAnJyA9PSB1cmwpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBpcW0gPSB1cmwuaW5kZXhPZignPycpO1xuICAgIGlmIChpcW0gPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgcXMgPSAnJicgKyB1cmwuc3Vic3RyKGlxbSArIDEpO1xuXG4gICAgbGV0IGlkeCA9IHFzLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignJicgKyBwYXJhbS50b0xvd2VyQ2FzZSgpICsgJz0nKTtcbiAgICBpZiAoaWR4ID09PSAtMSkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbEFuZE1vcmUgPSBxcy5zdWJzdHIoaWR4ICsgKDEgKyBwYXJhbS5sZW5ndGggKyAxKSkgKyAnJic7XG4gICAgaWR4ID0gdmFsQW5kTW9yZS5pbmRleE9mKCcmJyk7XG5cbiAgICByZXR1cm4gdmFsQW5kTW9yZS5zdWJzdHIoMCwgaWR4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRQYXJhbXNUb1VSTCh1cmw6IHN0cmluZywgb1BhcmFtczogT2JqZWN0KTogc3RyaW5nIHtcbiAgICBjb25zdCBwYXJhbXMgPSBnZXRQYXJhbXNGcm9tVVJMKHVybCk7XG4gICAgb2JqZWN0VXRpbHMuYWRkKHBhcmFtcywgb1BhcmFtcyk7XG4gICAgY29uc3QgdXJsSGFzaFNwbGl0ID0gdXJsLnNwbGl0KCcjJyk7XG4gICAgbGV0IGZpbmFsVXJsID0gdXJsSGFzaFNwbGl0WzBdLnNwbGl0KCc/JylbMF0gKyAnPycgKyBrZXlWYWx1ZVV0aWxzLnNlcmlhbGl6ZShwYXJhbXMsICcmJyk7XG4gICAgaWYgKHVybEhhc2hTcGxpdC5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZpbmFsVXJsICs9ICcjJyArIHVybEhhc2hTcGxpdFsxXTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbmFsVXJsO1xufVxuXG5cbmNvbnN0IHJlbW92ZVVuYWNjZXB0YWJsZVBhcmFtcyA9IDxUPihwYXJhbXM6IFQsIHVuYWNjZXB0YWJsZVBhcmFtczogUmVnRXhwKTogUGFydGlhbDxUPiA9PiB7XG5cbiAgICBpZiAoIXVuYWNjZXB0YWJsZVBhcmFtcykge1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkUGFyYW1zOiBQYXJ0aWFsPFQ+ID0ge307XG5cbiAgICBPYmplY3QuZW50cmllcyhwYXJhbXMgfHwge30pXG4gICAgICAgIC5maWx0ZXIoKFtwYXJhbU5hbWVdKSA9PiAhdW5hY2NlcHRhYmxlUGFyYW1zLnRlc3QocGFyYW1OYW1lKSlcbiAgICAgICAgLmZvckVhY2goKFtwYXJhbU5hbWUsIHBhcmFtVmFsdWVdOiBbc3RyaW5nLCBzdHJpbmddKSA9PiB2YWxpZFBhcmFtc1twYXJhbU5hbWVdID0gcGFyYW1WYWx1ZSlcblxuICAgIHJldHVybiB2YWxpZFBhcmFtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRleHRQYXJhbXNGcm9tVXJsPFQgPSB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9Pihjb25maWc6IElHZXRDb250ZXh0UGFyYW1zRnJvbVVybENvbmZpZyk6IFBhcnRpYWw8VD4ge1xuXG4gICAgY29uc3QgeyB1cmwsIHBhcmFtUHJlZml4LCB1bmFjY2VwdGFibGVQYXJhbXMgfSA9IGNvbmZpZyB8fCB7fVxuXG4gICAgaWYoIXVybCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1zID0gZ2lneWEudXRpbHMuVVJMLmdldEdpZ1BhcmFtc0Zyb21VUkwoeyB1cmwsIHBhcmFtUHJlZml4IH0pIGFzIFQ7XG5cbiAgICByZXR1cm4gcmVtb3ZlVW5hY2NlcHRhYmxlUGFyYW1zKHBhcmFtcywgdW5hY2NlcHRhYmxlUGFyYW1zKTtcbn1cbiIsImltcG9ydCAqIGFzIHN0cmluZ1V0aWxzVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3N0cmluZ1V0aWxzJztcblxuZXhwb3J0IGNsYXNzIFVyaSB7XG4gICAgcHJpdmF0ZSBfYW5jaG9yOiBIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nLCBpc0Fic29sdXRlID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBwcm90b2NvbCA9IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sID09ICdodHRwOicgPyAnaHR0cCcgOiAnaHR0cHMnO1xuICAgICAgICBpZiAoaXNBYnNvbHV0ZSAmJiB1cmwuaW5kZXhPZignOi8vJykgPT09IC0xICYmIHVybC5jaGFyQXQoMCkgIT09ICcvJykgdXJsID0gYCR7cHJvdG9jb2x9Oi8vJHt1cmx9YDtcbiAgICAgICAgdGhpcy5fYW5jaG9yLmhyZWYgPSB1cmw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkb21haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbmNob3IuaG9zdG5hbWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yLnBhdGhuYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaHJlZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvci5ocmVmO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2VhcmNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yLnNlYXJjaC5zbGljZSgxKTtcbiAgICB9IC8vIGRyb3BwaW5nICc/J1xuICAgIHB1YmxpYyBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvci5oYXNoLnNsaWNlKDEpO1xuICAgIH0gLy8gZHJvcHBpbmcgJyMnXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbmNob3IuaHJlZjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkVG9TZWFyY2gocGFyYW1zOiBPYmplY3QpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IHBhcmFtc1tuYW1lXTtcbiAgICAgICAgICAgIGlmICgodHlwZW9mIHZhbCA9PSAnYm9vbGVhbicgfHwgdHlwZW9mIHZhbCA9PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsID09ICdzdHJpbmcnKSAmJiBuYW1lICE9ICdldmVudE5hbWUnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFkZGl0aW9uID0gdGhpcy5fYW5jaG9yLnNlYXJjaCA/ICcmJyA6ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FuY2hvci5zZWFyY2ggKz0gYCR7YWRkaXRpb259JHtuYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudChwYXJhbXNbbmFtZV0pfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGZldGNoPFQ+KHJldHJpZXMgPSAwKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmZldGNoID8gYXdhaXQgdGhpcy5icm93c2VyRmV0Y2g8VD4oKSA6IGF3YWl0IHRoaXMueGhyPFQ+KCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChyZXRyaWVzIDw9IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBmZXRjaCBmYWlsZWQ6ICR7ZX1gKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZGVsYXkoMSk7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaChyZXRyaWVzIC0gMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaXNCYXNlT2YodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIFVyaS5wYXJzZSh1cmwpLmlzSW4odGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzSW4oYmFzZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICBwdWJsaWMgaXNJbihiYXNlOiBVcmkpOiBib29sZWFuO1xuICAgIHB1YmxpYyBpc0luKGJhc2U6IFVyaSB8IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodHlwZW9mIGJhc2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBiYXNlID0gVXJpLnBhcnNlKGJhc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICh0aGlzLmRvbWFpbiA9PSBiYXNlLmRvbWFpbiB8fCAvLyBwYWdlIGlzIHRoZSBiYXNlIGRvbWFpblxuICAgICAgICAgICAgICAgIHRoaXMuaXNTdWJEb21haW5PZihiYXNlKSkgJiYgLy8gb3Igc3ViLWRvbWFpbiBvZiBpdFxuICAgICAgICAgICAgKCFiYXNlLnBhdGggfHwgdGhpcy5wYXRoLmluZGV4T2YoYmFzZS5wYXRoKSA9PSAwKVxuICAgICAgICApOyAvLyBwYWdlIGlzIGFsc28gaW4gYmFzZSdzIGRlZmluZWQgcGF0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNGb3JTdWJEb21haW5zKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kb21haW4uaW5kZXhPZignLicpID09IDA7XG4gICAgfVxuXG4gICAgcHVibGljIGlzU3ViRG9tYWluT2YoYmFzZTogVXJpKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciBkb21haW4gPSAnJztcblxuICAgICAgICBpZiAoIWJhc2UuaXNGb3JTdWJEb21haW5zKCkpIGRvbWFpbiA9ICcuJztcblxuICAgICAgICBkb21haW4gKz0gYmFzZS5kb21haW47XG5cbiAgICAgICAgcmV0dXJuIHN0cmluZ1V0aWxzVXRpbHMuZW5kc1dpdGgodGhpcy5kb21haW4sIGRvbWFpbik7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBwYXJzZSh1cmw6IHN0cmluZywgaXNBYnNvbHV0ZSA9IHRydWUpIHtcbiAgICAgICAgaWYgKCF1cmwpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBVcmkodXJsLCBpc0Fic29sdXRlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGJyb3dzZXJGZXRjaDxUPigpOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy50b1N0cmluZygpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBmZXRjaCBmYWlsZWRgKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHhocjxUPigpOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICB4aHIub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSA0IHx8IHhoci5zdGF0dXMgIT09IDIwMCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoYHhociBmYWlsZWQgLSAke3hoci5zdGF0dXN9IC0gJHt4aHIuc3RhdHVzVGV4dH1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QganNvblJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoanNvblJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBkZWxheShtczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyID0+IHNldFRpbWVvdXQociwgbXMpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBsb2NhbEluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvJztcbmltcG9ydCB7Q29va2llU3RvcmV9IGZyb20gXCIuL2dsb2JhbFwiO1xuXG5leHBvcnQgdHlwZSBTYW1lU2l0ZSA9ICdOb25lJyB8ICdTdHJpY3QnIHwgJ0xheCc7XG5cbmV4cG9ydCBjbGFzcyBDb29raWVVdGlscyB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyB0ZXN0Q29va2llTmFtZSA9ICdnaWczcGN0ZXN0JztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Nvb2tpZVN0b3JlOiBDb29raWVTdG9yZSA9IG5ldyBDb29raWVTdG9yZSgpKSB7IH1cblxuICAgIHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzX2luPzogYW55LCBjb29raWVEb21haW4/OiBzdHJpbmcsIGRvbnRVc2VSb290UGF0aD86IGJvb2xlYW4sIHNhbWVTaXRlPzogU2FtZVNpdGUpOiBib29sZWFuIHtcblxuICAgICAgICBpZiAoY29va2llRG9tYWluID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvb2tpZURvbWFpbiA9IHRoaXMuZ2V0RGVmYXVsdERvbWFpbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IGRvbnRVc2VSb290UGF0aCA/ICcnIDogJy8nO1xuXG4gICAgICAgIGNvbnN0IGV4cGlyZU1zID0gdGhpcy5fZ2V0RXhwaXJhdGlvbkluTXMoZXhwaXJlc19pbik7XG5cbiAgICAgICAgbGV0IGV4cGlyZXMgPSBudWxsO1xuICAgICAgICBpZihleHBpcmVNcyAhPSBudWxsKSB7XG4gICAgICAgICAgICBleHBpcmVzID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGV4cGlyZXMuc2V0VGltZShleHBpcmVzLmdldFRpbWUoKSArIGV4cGlyZU1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb29raWVFeGlzdCA9IHRoaXMuX3NldENvb2tpZUludGVybmFsKG5hbWUsIHZhbHVlLCBwYXRoLCBleHBpcmVzLCBjb29raWVEb21haW4sIHNhbWVTaXRlKTtcblxuICAgICAgICBjb25zdCBzaG91bGRDb29raWVFeGlzdCA9ICFleHBpcmVNcyB8fCBleHBpcmVNcyA+IDA7XG5cbiAgICAgICAgaWYgKHNob3VsZENvb2tpZUV4aXN0ID09PSBjb29raWVFeGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBmYWlsZWQgdG8gc2V0IGNvb2tpZSwgcmV0cnk7XG4gICAgICAgIC8vIGl0IG1pZ2h0IGJlIGJlY2F1c2UgdGhlIGRvbWFpbiBpcyBsaXN0ZWQgYXMgVExEIGh0dHBzOi8vZGF0YS5pYW5hLm9yZy9UTEQvdGxkcy1hbHBoYS1ieS1kb21haW4udHh0XG4gICAgICAgIGNvbnN0IHBhZ2VEb21haW4gPSBsb2NhbEluZm8ucGFnZURvbWFpbjtcbiAgICAgICAgY29va2llRXhpc3QgPSB0aGlzLl9zZXRDb29raWVJbnRlcm5hbChuYW1lLCB2YWx1ZSwgcGF0aCwgZXhwaXJlcywgcGFnZURvbWFpbiwgc2FtZVNpdGUpO1xuXG4gICAgICAgIHJldHVybiBjb29raWVFeGlzdCA9PT0gc2hvdWxkQ29va2llRXhpc3Q7XG4gICAgfVxuXG4gICAgcHVibGljIGdldChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29va2llU3RvcmUuZ2V0Q29va2llKG5hbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmUobmFtZTogc3RyaW5nLCBkb21haW4gPSBsb2NhbEluZm8ucGFnZURvbWFpbik6IHZvaWQge1xuICAgICAgICB0aGlzLl9yZW1vdmVGcm9tQmFzZURvbWFpbnMobmFtZSwgZG9tYWluKTtcbiAgICAgICAgdGhpcy5zZXQobmFtZSwgJycsIC0xLCAnJywgZmFsc2UpO1xuICAgICAgICB0aGlzLnNldChuYW1lLCAnJywgLTEsICcnLCB0cnVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SW5maW5pdGVFeHBpcmF0aW9uVGltZUluU2Vjb25kcygpIHtcbiAgICAgICAgLy8gU2V0IGV4cGlyYXRpb24gdGltZSB0byAxIHllYXJzXG4gICAgICAgIHJldHVybiA2MCAqIDYwICogMjQgKiAzNjU7XG4gICAgfVxuXG4gICAgcHVibGljIGNhblNhdmVDb29raWUoY29va2llRG9tYWluID0gbnVsbCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0KENvb2tpZVV0aWxzLnRlc3RDb29raWVOYW1lLCAndHJ1ZScsIDEsIGNvb2tpZURvbWFpbiwgbnVsbCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIGlPUyAxMCB3ZWJ2aWV3IHRocm93cyBpbiBzb21lIHNjZW5hcmlvc1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldERlZmF1bHREb21haW4ocGFnZURvbWFpbiA9IGxvY2FsSW5mby5wYWdlRG9tYWluLCBiYXNlRG9tYWluID0gbG9jYWxJbmZvLmJhc2VEb21haW4gfHwgJycpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYmFzZURvbWFpbi5sZW5ndGggPiAwICYmIHBhZ2VEb21haW4ubGVuZ3RoID49IGJhc2VEb21haW4ubGVuZ3RoICYmIHBhZ2VEb21haW4ubGFzdEluZGV4T2YoYmFzZURvbWFpbikgPT09IHBhZ2VEb21haW4ubGVuZ3RoIC0gYmFzZURvbWFpbi5sZW5ndGhcbiAgICAgICAgICAgID8gYmFzZURvbWFpblxuICAgICAgICAgICAgOiBwYWdlRG9tYWluO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldEV4cGlyYXRpb25Jbk1zKGV4cGlyZXNJbjogYW55KSB7XG5cbiAgICAgICAgbGV0IGV4cGlyZU1zOiBudW1iZXI7XG4gICAgICAgIGlmIChleHBpcmVzSW4gPT0gbnVsbCB8fCBleHBpcmVzSW4gPT09ICcnIHx8IGlzTmFOKGV4cGlyZXNJbikpIHtcbiAgICAgICAgICAgIGV4cGlyZU1zID0gMTAwMCAqIHRoaXMuZ2V0SW5maW5pdGVFeHBpcmF0aW9uVGltZUluU2Vjb25kcygpO1xuICAgICAgICB9IGVsc2UgaWYgKGV4cGlyZXNJbiA9PSAwKSB7XG4gICAgICAgICAgICAvLyAwIG1lYW5zIFNlc3Npb25cbiAgICAgICAgICAgIGV4cGlyZU1zID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFueSBvdGhlciB2YWx1ZSBpcyBudW1iZXIgb2Ygc2Vjb25kcyAoQSBuZWdhdGl2ZSB2YWx1ZSB3b3VsZCBtZWFuIGV4cGlyZSBub3chKVxuICAgICAgICAgICAgZXhwaXJlTXMgPSBleHBpcmVzSW4gKiAxMDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV4cGlyZU1zO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldENvb2tpZUludGVybmFsKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgcGF0aDogc3RyaW5nLCBleHBpcmVzOiBEYXRlLCBjb29raWVEb21haW46IHN0cmluZywgc2FtZVNpdGVNb2RlID0gQ29va2llVXRpbHMuX2dldFNhbWVTaXRlTW9kZSgpKSB7XG4gICAgICAgIGNvbnN0IHByb3RvY29sID0gbG9jYWxJbmZvPy5wcm90b2NvbCA/PyBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbDtcbiAgICAgICAgY29uc3QgaXNTZWN1cmVkID0gcHJvdG9jb2wuaW5kZXhPZignaHR0cHMnKSA9PT0gMDtcblxuICAgICAgICB0aGlzLl9jb29raWVTdG9yZS5zZXRDb29raWUobmFtZSwgdmFsdWUsIHtcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBleHBpcmVzLFxuICAgICAgICAgICAgZG9tYWluOiBjb29raWVEb21haW4sXG4gICAgICAgICAgICBzYW1lU2l0ZTogc2FtZVNpdGVNb2RlLFxuICAgICAgICAgICAgc2VjdXJlOiBpc1NlY3VyZWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0KG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2FtZVNpdGVNb2RlKSB7XG4gICAgICAgICAgICAvL2lmIGZhaWxlZCB0byB3cml0ZSBjb29raWUgd2l0aG91dCBzYW1lU2l0ZSBtb2RlLCB0aGVuIHN0b3AgaGVyZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNhbWVTaXRlTW9kZSAhPT0gJ05vbmUnKSB7XG4gICAgICAgICAgICB0aGlzLl9mYWxsYmFja1RvU2FtZVNpdGVOb25lKG5hbWUsIHZhbHVlLCBwYXRoLCBleHBpcmVzLCBjb29raWVEb21haW4sIGlzU2VjdXJlZClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdldChuYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5fcmVwb3J0RmFsbGJhY2soJ1NldHRpbmcgU2FtZVNpdGU9Tm9uZScsIHtuYW1lLCB2YWx1ZSwgc2FtZVNpdGVNb2RlfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGZhaWxlZCB0byB3cml0ZSBjb29raWUgd2l0aCBzYW1lU2l0ZSBtb2RlLCByZXRyeSB3aXRob3V0O1xuICAgICAgICB0aGlzLl9jb29raWVTdG9yZS5zZXRDb29raWUobmFtZSwgdmFsdWUsIHtcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBleHBpcmVzLFxuICAgICAgICAgICAgZG9tYWluOiBjb29raWVEb21haW4sXG4gICAgICAgICAgICBzZWN1cmU6IGlzU2VjdXJlZFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5nZXQobmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlcG9ydEZhbGxiYWNrKCdDb29raWUgZXN0YWJsaXNoZWQgb25seSB3aXRob3V0IHNhbWVTaXRlIG1vZGUnLCB7bmFtZSwgdmFsdWUsIHNhbWVTaXRlTW9kZX0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVtb3ZlRnJvbUJhc2VEb21haW5zKG5hbWU6IHN0cmluZywgZG9tYWluOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZG9tYWluUGFydHMgPSBkb21haW4uc3BsaXQoJy4nKTtcblxuICAgICAgICAvLyB3aGVuIGNsZWFyaW5nIGZyb20gYS5iLmMuZC5jb20gLS0+IGNsZWFyIGZyb20gYS5iLmMuZC5jb20sIGIuYy5kLmNvbSwgYy5kLmNvbSwgZC5jb21cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb21haW5QYXJ0cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRvbWFpbiA9IGRvbWFpblBhcnRzLnNsaWNlKGkpLmpvaW4oJy4nKTtcbiAgICAgICAgICAgIHRoaXMuc2V0KG5hbWUsICcnLCAtMSwgZG9tYWluLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnNldChuYW1lLCAnJywgLTEsIGRvbWFpbiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfZ2V0U2FtZVNpdGVNb2RlKCkgOiBTYW1lU2l0ZSB7XG4gICAgICAgIGlmICghQ29va2llVXRpbHMuX2Rpc2FsbG93U2FtZVNpdGVNb2RlKCkpIHJldHVybiAnTm9uZSc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2Rpc2FsbG93U2FtZVNpdGVNb2RlKCkge1xuICAgICAgICBjb25zdCBwcm90b2NvbCA9IGxvY2FsSW5mbz8ucHJvdG9jb2wgPz8gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2w7XG4gICAgICAgIGNvbnN0IHVhID0gbG9jYWxJbmZvPy51c2VyQWdlbnQgPz8gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBpc1NlY3VyZWQgPSBwcm90b2NvbC5pbmRleE9mKCdodHRwcycpID09PSAwO1xuXG4gICAgICAgIHJldHVybiAhaXNTZWN1cmVkIHx8ICF1YSB8fFxuICAgICAgICAgICAgLy8gQ292ZXIgYWxsIGlPUyBiYXNlZCBicm93c2VycyBoZXJlLiBUaGlzIGluY2x1ZGVzOlxuICAgICAgICAgICAgLy8gLSBTYWZhcmkgb24gaU9TIDEyIGZvciBpUGhvbmUsIGlQb2QgVG91Y2gsIGlQYWRcbiAgICAgICAgICAgIC8vIC0gV2tXZWJ2aWV3IG9uIGlPUyAxMiBmb3IgaVBob25lLCBpUG9kIFRvdWNoLCBpUGFkXG4gICAgICAgICAgICAvLyAtIENocm9tZSBvbiBpT1MgMTIgZm9yIGlQaG9uZSwgaVBvZCBUb3VjaCwgaVBhZFxuICAgICAgICAgICAgLy8gQWxsIG9mIHdoaWNoIGFyZSBicm9rZW4gYnkgU2FtZVNpdGU9Tm9uZSwgYmVjYXVzZSB0aGV5IHVzZSB0aGUgaU9TIG5ldHdvcmtpbmcgc3RhY2tcbiAgICAgICAgICAgICgodWEuaW5kZXhPZignQ1BVIGlQaG9uZSBPUyAxMicpID4gLTEgfHwgdWEuaW5kZXhPZignaVBhZDsgQ1BVIE9TIDEyJykgPiAtMSkgfHxcbiAgICAgICAgICAgICAgICAvLyBDb3ZlciBNYWMgT1MgWCBiYXNlZCBicm93c2VycyB0aGF0IHVzZSB0aGUgTWFjIE9TIG5ldHdvcmtpbmcgc3RhY2suIFRoaXMgaW5jbHVkZXM6XG4gICAgICAgICAgICAgICAgLy8gLSBTYWZhcmkgb24gTWFjIE9TIFguXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBkb2VzIG5vdCBpbmNsdWRlOlxuICAgICAgICAgICAgICAgIC8vIC0gQ2hyb21lIG9uIE1hYyBPUyBYXG4gICAgICAgICAgICAgICAgLy8gQmVjYXVzZSB0aGV5IGRvIG5vdCB1c2UgdGhlIE1hYyBPUyBuZXR3b3JraW5nIHN0YWNrLlxuICAgICAgICAgICAgICAgICh1YS5pbmRleE9mKCdNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE0JykgPiAtMSAmJiB1YS5pbmRleE9mKCdWZXJzaW9uLycpID4gLTEgJiYgdWEuaW5kZXhPZignU2FmYXJpJykgPiAtMSkgfHxcbiAgICAgICAgICAgICAgICAvLyBDb3ZlciBDaHJvbWUgNTAtNjksIGJlY2F1c2Ugc29tZSB2ZXJzaW9ucyBhcmUgYnJva2VuIGJ5IFNhbWVTaXRlPU5vbmUsXG4gICAgICAgICAgICAgICAgLy8gYW5kIG5vbmUgaW4gdGhpcyByYW5nZSByZXF1aXJlIGl0LlxuICAgICAgICAgICAgICAgIC8vIE5vdGU6IHRoaXMgY292ZXJzIHNvbWUgcHJlLUNocm9taXVtIEVkZ2UgdmVyc2lvbnMsXG4gICAgICAgICAgICAgICAgLy8gYnV0IHByZS1DaHJvbWl1bSBFZGdlIGRvZXMgbm90IHJlcXVpcmUgU2FtZVNpdGU9Tm9uZS5cbiAgICAgICAgICAgICAgICAodWEuaW5kZXhPZignQ2hyb21lLzUnKSA+IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZS82JykgPiAtMSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZhbGxiYWNrVG9TYW1lU2l0ZU5vbmUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIGV4cGlyZXM6IERhdGUsIGNvb2tpZURvbWFpbjogc3RyaW5nLCBzZWN1cmU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29va2llU3RvcmUuc2V0Q29va2llKG5hbWUsIHZhbHVlLCB7XG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgZXhwaXJlcyxcbiAgICAgICAgICAgIGRvbWFpbjogY29va2llRG9tYWluLFxuICAgICAgICAgICAgc2FtZVNpdGU6ICdOb25lJyxcbiAgICAgICAgICAgIHNlY3VyZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZXBvcnRGYWxsYmFjayhtZXNzYWdlOiBzdHJpbmcsIGRldGFpbHM6IHtcbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICB2YWx1ZTogc3RyaW5nO1xuICAgICAgICBzYW1lU2l0ZU1vZGU6IHN0cmluZztcbiAgICAgICAgaXNTdWNjZXNzZnVsPzogYm9vbGVhbjtcbiAgICAgICAgaXNJZnJhbWU/OiBib29sZWFuO1xuICAgIH0pIHtcbiAgICAgICAgZ2lneWEubG9nZ2VyLnJlcG9ydChgQ29va2llIFBvbGljeSBGYWxsYmFjazogJHttZXNzYWdlfWAsIHsuLi5kZXRhaWxzLCBpc0lmcmFtZTogdGhpcy5faXNJRnJhbWUoKX0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlICBfaXNJRnJhbWUoKTogYm9vbGVhbiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93Py5sb2NhdGlvbiAhPT0gd2luZG93Py5wYXJlbnQ/LmxvY2F0aW9uO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29va2llVXRpbHMoKTtcbiIsImltcG9ydCB7IFVyaSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9VcmknO1xuaW1wb3J0ICogYXMgc3RyaW5nVXRpbHNVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvc3RyaW5nVXRpbHMnO1xuaW1wb3J0IHsgbG9jYWxJbmZvIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvY2FsSW5mbyc7XG5pbXBvcnQge0ZsYWdTZXJ2aWNlfSBmcm9tICcuLi9TZXJ2aWNlcy9GbGFnU2VydmljZSc7XG5pbXBvcnQgY29va2llIGZyb20gJy4vY29va2llJztcblxuLy8gVE9ETzogbW92ZSB0byBjb25maWdcbmxldCBiYXNlRG9tYWluczogc3RyaW5nW118c3RyaW5nO1xuaWYgKGdpZ3lhLnBhcnRuZXJTZXR0aW5ncz8uYmFzZURvbWFpbnM/Lmxlbmd0aCkge1xuICAgIGJhc2VEb21haW5zID0gZ2lneWEucGFydG5lclNldHRpbmdzLmJhc2VEb21haW5zIGFzIHN0cmluZ1tdfHN0cmluZztcbn0gZWxzZSB7XG4gICAgaWYgKHdpbmRvdy5zZWxmID09PSB3aW5kb3cudG9wKSB7XG4gICAgICAgIC8vIG9ubHkgaW4gdGhlIHRvcCBmcmFtZVxuICAgICAgICBnaWd5YS5sb2dnZXIud2FybignZ2lneWE6IG1pc3NpbmcgYmFzZSBkb21haW5zIGZvciBzaXRlJyk7XG4gICAgfVxuICAgIGJhc2VEb21haW5zID0gW2RvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lXTtcbn1cbmxvY2FsSW5mby5iYXNlRG9tYWluID0gZ2V0QmFzZURvbWFpbihiYXNlRG9tYWlucyk7XG5leHBvcnQgZGVjbGFyZSB2YXIgZ2V0QXBpRG9tYWluOiAobmFtZXNwYWNlPzogc3RyaW5nKSA9PiBzdHJpbmc7XG5jb25zdCBnaWd5YURvbWFpbk5hbWVzcGFjZXMgPSBbJ3NvY2lhbGl6ZScsICdhY2NvdW50cycsICdmaWRtJywgJ2dtJywgJ2NvbW1lbnRzJywgJ2djcycsICdpZHMnLCAnZHMnLCAnZ3Njb3VudGVycycsICdyZXBvcnRzJ107XG5leHBvcnQgZnVuY3Rpb24gYXBpRG9tYWluRmFjdG9yeShhcGlEb21haW4gPSByZXNvbHZlQXBpRG9tYWluKCksIGRlZmF1bHRBcGlEb21haW4gPSBnaWd5YS5kZWZhdWx0QXBpRG9tYWluKTogKG5hbWVzcGFjZT86IHN0cmluZykgPT4gc3RyaW5nIHtcblxuICAgIGNvbnN0IHNob3VsZEFkZE5hbWVzcGFjZSA9IFVyaS5wYXJzZShhcGlEb21haW4pLmlzSW4oVXJpLnBhcnNlKGRlZmF1bHRBcGlEb21haW4pKTtcblxuICAgIHJldHVybiAobmFtZXNwYWNlPzogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgc2hvdWxkQWRkTmFtZXNwYWNlKSB7XG4gICAgICAgICAgICBsZXQgc3ViRG9tYWluID0gbmFtZXNwYWNlLnNwbGl0KCcuJylbMF07XG4gICAgICAgICAgICBpZiAoc3ViRG9tYWluID09PSAnc2RrJyB8fCBzdWJEb21haW4gPT09ICdvYXV0aCcpIHtcbiAgICAgICAgICAgICAgICBzdWJEb21haW4gPSAnYWNjb3VudHMnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChnaWd5YURvbWFpbk5hbWVzcGFjZXMuaW5kZXhPZihzdWJEb21haW4pID09IC0xKSB7XG4gICAgICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmVycm9yKGB0cnlpbmcgdG8gc2VuZCByZXF1ZXN0IHRvIGFuIGludmFsaWQgZG9tYWluYCk7XG4gICAgICAgICAgICAgICAgc3ViRG9tYWluID0gZ2lneWFEb21haW5OYW1lc3BhY2VzWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYCR7c3ViRG9tYWlufS4ke2FwaURvbWFpbn1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGFwaURvbWFpbjtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0R2lneWFEb21haW4obmFtZXNwYWNlPzogc3RyaW5nLCBkYXRhQ2VudGVyID0gZ2lneWEuZGF0YUNlbnRlciwgZGVmYXVsdERvbWFpbiA9IGdpZ3lhLmRlZmF1bHRBcGlEb21haW4pIHtcbiAgICBpZihkZWZhdWx0RG9tYWluID09PSAnc2FwY2RtLmNuJyAmJiBkYXRhQ2VudGVyICE9PSAnY24xJykge1xuICAgICAgICBkZWZhdWx0RG9tYWluID0gYGNuMS4ke2RlZmF1bHREb21haW59YDsgLy9GaXggZm9yIGNuMS1zdDEuIGl0IHNob3VsZCBiZSBjbjEtc3QxLmNuMS5zYXBjZG0uY24gYW5kIG5vdCBjbjEtc3QxLnNhcGNkbS5jblxuICAgIH1cbiAgICBjb25zdCBkb21haW4gPSBgJHtkYXRhQ2VudGVyfS4ke2RlZmF1bHREb21haW59YDtcblxuICAgIGlmIChuYW1lc3BhY2UpIHJldHVybiBgJHtuYW1lc3BhY2V9LiR7ZG9tYWlufWA7XG4gICAgZWxzZSByZXR1cm4gZG9tYWluO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhc2VEb21haW4oXG4gICAgYmFzZURvbWFpbnM6IHN0cmluZ1tdfHN0cmluZyA9IGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5iYXNlRG9tYWlucyxcbiAgICBjdXJyZW50RG9tYWluID0gbG9jYXRpb24uaG9zdG5hbWUsXG4gICAgZGVmYXVsdERvbWFpbnMgPSBbJ2dpZ3lhLmNvbScsICdjbjEuc2FwY2RtLmNuJywgJ2xvY2FsaG9zdCcsIGdpZ3lhLmRlZmF1bHRBcGlEb21haW5dLFxuKTogc3RyaW5nIHtcbiAgICAvLyAjNDk3ODYgLSBTdXBwb3J0IHdlYnZpZXcgd2l0aG91dCBob3N0bmFtZS5cbiAgICBpZiAoIWN1cnJlbnREb21haW4pIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYmFzZURvbWFpbnMgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgYmFzZURvbWFpbnMgPSBiYXNlRG9tYWlucy5zcGxpdCgnLCcpO1xuICAgIH1cblxuICAgIGxldCBvcmlnaW5VUkkgPSBVcmkucGFyc2UoY3VycmVudERvbWFpbik7XG5cbiAgICBpZiAoZGVmYXVsdERvbWFpbnMpIHtcbiAgICAgICAgYmFzZURvbWFpbnMgPSBiYXNlRG9tYWlucy5jb25jYXQoZGVmYXVsdERvbWFpbnMpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHJhd0RvbWFpbiBvZiBiYXNlRG9tYWlucykge1xuICAgICAgICAvLyBUaGlzIGRvZXMgbm90IHRha2UgY2FyZSBvZiB3aWxkY2FyZHMgaW4gdGhlIG1pZGRsZSBvZiBzdHJpbmcuXG4gICAgICAgIGNvbnN0IGJhc2VEb21haW4gPSBzdHJpbmdVdGlsc1V0aWxzLnJlcGxhY2VBbGwocmF3RG9tYWluLCAnKicsICcnKTtcbiAgICAgICAgY29uc3QgYmFzZVVyaSA9IFVyaS5wYXJzZShiYXNlRG9tYWluKTtcbiAgICAgICAgaWYgKGJhc2VVcmkgJiYgb3JpZ2luVVJJLmlzSW4oYmFzZVVyaSkpIHtcbiAgICAgICAgICAgIGlmICghZ2lneWEuXykge1xuICAgICAgICAgICAgICAgIGdpZ3lhLl8gPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnaWd5YS5fLmlzVHJ1c3RlZERvbWFpbj0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChiYXNlVXJpLmlzRm9yU3ViRG9tYWlucygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpblVSSS5kb21haW47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBiYXNlVXJpLmRvbWFpbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZhbGxiYWNrIHRvIHRoZSBwYXJlbnQncyB3aW5kb3cgZG9tYWluIChmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSkuXG4gICAgcmV0dXJuIG9yaWdpblVSSS5kb21haW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQXBpRG9tYWluKFxuICAgIGN1c3RvbUFwaURvbWFpblByZWZpeCA9IGdpZ3lhLnBhcnRuZXJTZXR0aW5ncyAmJiBnaWd5YS5wYXJ0bmVyU2V0dGluZ3MuY3VzdG9tQVBJRG9tYWluUHJlZml4LFxuICAgIGJhc2VEb21haW4gPSBsb2NhbEluZm8uYmFzZURvbWFpbixcbiAgICBkYXRhQ2VudGVyID0gZ2lneWEuZGF0YUNlbnRlcixcbiAgICBkZWZhdWx0QXBpRG9tYWluID0gZ2lneWEuZGVmYXVsdEFwaURvbWFpbixcbikge1xuICAgIGNvbnN0IGFwaURvbWFpbiA9IGdldEhvc3RlZFBhZ2VzQXBpRG9tYWluQ29va2llKCk7XG4gICAgaWYgKGFwaURvbWFpbikge1xuICAgICAgICByZXR1cm4gYXBpRG9tYWluO1xuICAgIH1cbiAgICAvLyBUT0RPOiByZW1vdmUgb25jZSBhIHNvbHV0aW9uIHdpbGwgYmUgZm91bmQgZm9yIGhvc3RlZCBwYWdlc1xuICAgIGlmIChiYXNlRG9tYWluLmVuZHNXaXRoKGdpZ3lhLl8uY29uZmlnPy5ob3N0ZWRQYWdlc0RvbWFpbiB8fCAnbXkuZ2lneWEtZXh0LmNvbScpKSB7XG4gICAgICAgIHJldHVybiBiYXNlRG9tYWluO1xuICAgIH1cbiAgICBpZiAoY3VzdG9tQXBpRG9tYWluUHJlZml4ICYmIGJhc2VEb21haW4gJiYgYmFzZURvbWFpbiAhPT0gZGVmYXVsdEFwaURvbWFpbikge1xuICAgICAgICByZXR1cm4gYCR7Y3VzdG9tQXBpRG9tYWluUHJlZml4fS4ke2Jhc2VEb21haW59YDtcbiAgICB9XG4gICAgcmV0dXJuIGdldEdpZ3lhRG9tYWluKHVuZGVmaW5lZCwgZGF0YUNlbnRlciwgZGVmYXVsdEFwaURvbWFpbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yYWdlRG9tYWluKCkge1xuICAgIGNvbnN0IGFwaURvbWFpbiA9IGdldEhvc3RlZFBhZ2VzQXBpRG9tYWluQ29va2llKCk7XG4gICAgaWYgKGFwaURvbWFpbikge1xuICAgICAgICByZXR1cm4gYXBpRG9tYWluO1xuICAgIH1cbiAgICBpZiAoZ2lneWEudGhpc1NjcmlwdD8uZ2xvYmFsQ29uZj8uWydzdG9yYWdlRG9tYWluT3ZlcnJpZGUnXSkge1xuICAgICAgICByZXR1cm4gZ2lneWEudGhpc1NjcmlwdC5nbG9iYWxDb25mWydzdG9yYWdlRG9tYWluT3ZlcnJpZGUnXTtcbiAgICB9XG4gICAgaWYgKGdpZ3lhLnRoaXNTY3JpcHQ/LmJhc2VEb21haW4gJiYgRmxhZ1NlcnZpY2UudXNlR2lneWFKc0Jhc2VEb21haW4pIHtcbiAgICAgICAgcmV0dXJuIGdpZ3lhLnRoaXNTY3JpcHQuYmFzZURvbWFpbjtcbiAgICB9XG4gICAgbGV0IGRvbWFpbiA9IGdpZ3lhLmRlZmF1bHRBcGlEb21haW5cbiAgICBpZiAoZ2lneWEudXRpbHMuc3RyaW5nVXRpbHMuZW5kc1dpdGgoZG9tYWluLCAnc2FwY2RtLmNuJykgJiYgZ2lneWEuZGF0YUNlbnRlciAhPT0gJ2NuMScpIHsgLy8gc3BlY2lhbCBjYXNlIHdpdGggY2hpbmEgZG9tYWluIHN0YWdpbmdcbiAgICAgICAgZG9tYWluID0gYGNuMS5zYXBjZG0uY25gO1xuICAgIH1cbiAgICBjb25zdCBwcmVmaXggPSBnaWd5YS5kYXRhQ2VudGVyICE9PSAnZ2xvYmFsJyA/IGBjZG5zLiR7Z2lneWEuZGF0YUNlbnRlcn1gIDogYGNkbnNgO1xuICAgIHJldHVybiBgJHtwcmVmaXh9LiR7ZG9tYWlufWA7XG59XG5cbmZ1bmN0aW9uIGdldEhvc3RlZFBhZ2VzQXBpRG9tYWluQ29va2llKCkge1xuICAgIHJldHVybiBjb29raWUuZ2V0KGBwYWdlc19hcGlEb21haW5fJHtnaWd5YS5hcGlLZXl9YCk7XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIElDb29raWVPcHRpb25zIHtcbiAgICBwYXRoPzogc3RyaW5nO1xuICAgIGRvbWFpbj86IHN0cmluZztcbiAgICBleHBpcmVzPzogRGF0ZTtcbiAgICBzYW1lU2l0ZT86ICdOb25lJyB8ICdTdHJpY3QnIHwgJ0xheCc7XG4gICAgc2VjdXJlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIENvb2tpZVN0b3JlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dpbjogV2luZG93ID0gd2luZG93KSB7IH1cblxuICAgIHNldENvb2tpZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIG9wdGlvbnM6IElDb29raWVPcHRpb25zKSB7XG4gICAgICAgIGxldCBjb29raWVTdHJpbmcgPSBgJHtuYW1lfT0ke2VzY2FwZSh2YWx1ZSl9YDtcbiAgICAgICAgaWYob3B0aW9ucy5wYXRoKSBjb29raWVTdHJpbmcgKz0gYDsgcGF0aD0ke29wdGlvbnMucGF0aH1gO1xuICAgICAgICBpZihvcHRpb25zLmV4cGlyZXMpIGNvb2tpZVN0cmluZyArPSBgOyBleHBpcmVzPSR7b3B0aW9ucy5leHBpcmVzLnRvVVRDU3RyaW5nKCl9YDtcbiAgICAgICAgaWYob3B0aW9ucy5kb21haW4gJiYgb3B0aW9ucy5kb21haW4uaW5kZXhPZignLicpICE9IC0xKSBjb29raWVTdHJpbmcgKz0gYDsgZG9tYWluPSR7b3B0aW9ucy5kb21haW59YDtcbiAgICAgICAgaWYob3B0aW9ucy5zYW1lU2l0ZSkgY29va2llU3RyaW5nICs9IGA7IHNhbWVTaXRlPSR7b3B0aW9ucy5zYW1lU2l0ZX1gO1xuICAgICAgICBpZihvcHRpb25zLnNlY3VyZSkgY29va2llU3RyaW5nICs9IGA7IHNlY3VyZWA7XG4gICAgICAgIHRoaXMuX3dpbi5kb2N1bWVudC5jb29raWUgPSBjb29raWVTdHJpbmc7XG4gICAgfVxuXG4gICAgZ2V0Q29va2llKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLyhbLiorP149IToke30oKXxbXFxdXFwvXFxcXF0pL2csICdcXFxcJDEnKS5yZXBsYWNlKC9eWyBcXHRdK3xbIFxcdF0rJC9nLCAnJyk7XG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnKD86Xnw7KVxcXFxzPycgKyBuYW1lICsgJz0oLio/KSg/Ojt8JCknKTtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLl93aW4uZG9jdW1lbnQuY29va2llLm1hdGNoKHJlZ2V4KTtcbiAgICAgICAgcmV0dXJuIG1hdGNoICYmIHVuZXNjYXBlKG1hdGNoWzFdKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNWYWxpZChnbHRleHA6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBnZXRNaWxsaXMoZ2x0ZXhwKSA+IERhdGUubm93KCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TWF4KC4uLmdsdGV4cHM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICBpZiAoIWdsdGV4cHMgfHwgIWdsdGV4cHMubGVuZ3RoKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiBnbHRleHBzLnNvcnQoKGdsdGV4cEEsIGdsdGV4cEIpID0+IGdldE1pbGxpcyhnbHRleHBCKSAtIGdldE1pbGxpcyhnbHRleHBBKSlbMF07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TWlsbGlzKGdsdEV4cDogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICFnbHRFeHAgPyAwIDogTnVtYmVyKGdsdEV4cC5zdWJzdHIoMCwgZ2x0RXhwLmluZGV4T2YoJ18nKSkpICogMTAwMDtcbn1cbiIsImltcG9ydCAqIGFzIFVSTFV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9VUkwnO1xuaW1wb3J0ICogYXMgSlNPTlV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9KU09OJztcbmltcG9ydCB7RmxhZ1NlcnZpY2V9IGZyb20gXCIuLi9TZXJ2aWNlcy9GbGFnU2VydmljZVwiO1xuZGVjbGFyZSBmdW5jdGlvbiB1bmVzY2FwZShlc2NhcGVkU3RyOiBzdHJpbmcpOiBzdHJpbmc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemUob0tleVZhbHVlOiBPYmplY3QsIGRlbGltaXRlcj86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgYSA9IFtdO1xuICAgIGlmICghZGVsaW1pdGVyKSB7XG4gICAgICAgIGRlbGltaXRlciA9ICcmJztcbiAgICB9XG4gICAgZm9yIChjb25zdCBwIGluIG9LZXlWYWx1ZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGVvZiBvS2V5VmFsdWVbcF0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICBpZiAob0tleVZhbHVlW3BdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYS5wdXNoKHAgKyAnPScgKyBVUkxVdGlscy5VUkxFbmNvZGUoSlNPTlV0aWxzLnNlcmlhbGl6ZShvS2V5VmFsdWVbcF0pKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGEucHVzaChwICsgJz0nICsgVVJMVXRpbHMuVVJMRW5jb2RlKG9LZXlWYWx1ZVtwXSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHMgPSBhLmpvaW4oZGVsaW1pdGVyKTtcbiAgICByZXR1cm4gcztcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZSh1cmxFbmNvZGVkU3RyaW5nOiBzdHJpbmcsIGRlbGltaXRlcj86IHN0cmluZywga2V5c1RvTG93ZXI/OiBib29sZWFuLCB1c2VVbmVzY2FwZT86IGJvb2xlYW4pOiBhbnkge1xuICAgIGNvbnN0IG8gPSB7fTtcbiAgICBpZiAoIXVybEVuY29kZWRTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgfVxuICAgIGlmICghZGVsaW1pdGVyKSB7XG4gICAgICAgIGRlbGltaXRlciA9ICcmJztcbiAgICB9XG4gICAgY29uc3QgcGFpcnMgPSB1cmxFbmNvZGVkU3RyaW5nLnNwbGl0KGRlbGltaXRlcik7XG4gICAgZm9yIChsZXQgaVBhaXIgPSAwOyBpUGFpciA8IHBhaXJzLmxlbmd0aDsgaVBhaXIrKykge1xuICAgICAgICBjb25zdCBwYWlyID0gcGFpcnNbaVBhaXJdO1xuICAgICAgICBjb25zdCBlcVBvcyA9IHBhaXIuaW5kZXhPZignPScpO1xuICAgICAgICBpZiAoZXFQb3MgPT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlzVG9Mb3dlciA/IHBhaXIudG9Mb3dlckNhc2UoKSA6IHBhaXI7XG4gICAgICAgICAgICBvW2tleV0gPSAnMSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQga2V5ID0gcGFpci5zdWJzdHIoMCwgZXFQb3MpO1xuICAgICAgICAgICAgaWYgKGtleXNUb0xvd2VyKSB7XG4gICAgICAgICAgICAgICAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkVmFsdWUgPSBwYWlyLnN1YnN0cihlcVBvcyArIDEpLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodXNlVW5lc2NhcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgb1trZXldID0gRmxhZ1NlcnZpY2UudXNlRGVjb2RlVVJJQ29tcG9uZW50ID8gY29tcGFyZVJlc3VsdHNBbmRSZXR1cm5VUkxEZWNvZGUoc2VyaWFsaXplZFZhbHVlKSA6IHVuZXNjYXBlKHNlcmlhbGl6ZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb1trZXldID0gVVJMVXRpbHMuVVJMRGVjb2RlKHNlcmlhbGl6ZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIG9ba2V5XSA9IEZsYWdTZXJ2aWNlLnVzZURlY29kZVVSSUNvbXBvbmVudCA/IFVSTFV0aWxzLlVSTERlY29kZShzZXJpYWxpemVkVmFsdWUpIDogdW5lc2NhcGUoc2VyaWFsaXplZFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbztcbn1cblxuZnVuY3Rpb24gY29tcGFyZVJlc3VsdHNBbmRSZXR1cm5VUkxEZWNvZGUoc2VyaWFsaXplZFZhbHVlKXtcbiAgICBjb25zdCB1bmVzY2FwZWRSZXN1bHQgPSB1bmVzY2FwZShzZXJpYWxpemVkVmFsdWUpO1xuICAgIGNvbnN0IHVybERlY29kZVJlc3VsdCA9IFVSTFV0aWxzLlVSTERlY29kZShzZXJpYWxpemVkVmFsdWUpO1xuICAgIHVuZXNjYXBlZFJlc3VsdC5sb2NhbGVDb21wYXJlKHVybERlY29kZVJlc3VsdCkgIT09IDAgJiYgZ2lneWEubG9nZ2VyLnJlcG9ydCgndXJsRGVjb2RlciBhbmQgdW5lc2NhcGVkIGhhdmUgZGlmZmVyZW50IHZhbHVlcycsIHtcbiAgICAgICAgdW5lc2NhcGVkUmVzdWx0LFxuICAgICAgICB1cmxEZWNvZGVSZXN1bHRcbiAgICB9KTtcbiAgICByZXR1cm4gdXJsRGVjb2RlUmVzdWx0O1xufVxuIiwiaW1wb3J0ICogYXMgSlNPTlV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9KU09OJztcbmltcG9ydCB7IGxvY2FsSW5mbyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2NhbEluZm8nO1xuaW1wb3J0IGNvb2tpZVV0aWxzLCB7U2FtZVNpdGV9IGZyb20gJy4vY29va2llJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlciB7XG4gICAgcHVibGljIHN0YXRpYyBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ0Fic3RyYWN0QWRhcHRlcic7XG4gICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgYWJzdHJhY3Qgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXhwaXJlc0luPzogbnVtYmVyLCBkb21haW4/OiBzdHJpbmcpOiB2b2lkO1xuXG4gICAgcHVibGljIGFic3RyYWN0IHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpO1xuXG4gICAgLyoqXG4gICAgICogU2V0IG9iamVjdCB0byBzdG9yYWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRPYmplY3Qoa2V5OiBzdHJpbmcsIG86IE9iamVjdCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldEl0ZW0oa2V5LCBKU09OVXRpbHMuc2VyaWFsaXplKG8pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgb2JqZWN0IGZyb20gbG9jYWwgc3RvcmFnZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0T2JqZWN0KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBhbnkpOiBPYmplY3Qge1xuICAgICAgICByZXR1cm4gSlNPTlV0aWxzLmRlc2VyaWFsaXplKHRoaXMuZ2V0SXRlbShrZXkpLCBkZWZhdWx0VmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElzIHBlcnNpc3RlbnQgc3RvcmFnZS4gUmV0dXJucyBmYWxzZSB3aGVuIGRhdGEgaXMgbm90IHBlcnNpc3RlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNQZXJzaXN0ZW50KCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RBc3luY0xvY2FsU3RvcmFnZUFkYXB0ZXIgZXh0ZW5kcyBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIge1xuICAgIHByb3RlY3RlZCBpc0xvYWRlZDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGlzUmVhZHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzTG9hZGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZWQgd2hlbiB0aGVyZSBpcyBpbml0aWFsaXphdGlvbiB0aW1lIG9uIHRoZSBsb2NhbCBzdG9yYWdlIGFkYXB0ZXIuXG4gICAgICovXG4gICAgcHVibGljIHdhaXRGb3JTZXJ2aWNlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzUmVhZHkoKSkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy53YWl0Rm9yU2VydmljZShjYWxsYmFjayksIDUwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmFic3RyYWN0IGNsYXNzIFN0b3JhZ2VBZGFwdGVyIGV4dGVuZHMgQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIHtcbiAgICBwcm90ZWN0ZWQgc3RvcmFnZTogYW55O1xuXG4gICAgcHVibGljIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlW2tleV07XG4gICAgfVxuXG4gICAgcHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZXNJbj86IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHt9XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICB9XG59XG5jbGFzcyBMb2NhbFN0b3JhZ2VBZGFwdGVyIGV4dGVuZHMgU3RvcmFnZUFkYXB0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdMb2NhbFN0b3JhZ2VBZGFwdGVyJztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gbG9jYWxJbmZvLnN1cHBvcnRzTG9jYWxTdG9yYWdlO1xuICAgIH1cbn1cbmNsYXNzIFNlc3Npb25TdG9yYWdlQWRhcHRlciBleHRlbmRzIFN0b3JhZ2VBZGFwdGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gd2luZG93LnNlc3Npb25TdG9yYWdlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdTZXNzaW9uU3RvcmFnZUFkYXB0ZXInO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaXNBdmFpbGFibGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBsb2NhbEluZm8uc3VwcG9ydHNTZXNzaW9uU3RvcmFnZTtcbiAgICB9XG59XG5jbGFzcyBGaXJlZm94U3RvcmFnZUFkYXB0ZXIgZXh0ZW5kcyBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgaXNBdmFpbGFibGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBsb2NhbEluZm8uaXNGRiAmJiB3aW5kb3dbJ2dsb2JhbFN0b3JhZ2UnXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnRmlyZWZveFN0b3JhZ2VBZGFwdGVyJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB3aW5kb3dbJ2dsb2JhbFN0b3JhZ2UnXVtsb2NhdGlvbi5ob3N0bmFtZV1ba2V5XTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXhwaXJlc0luPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB3aW5kb3dbJ2dsb2JhbFN0b3JhZ2UnXVtsb2NhdGlvbi5ob3N0bmFtZV1ba2V5XSA9IHZhbHVlO1xuICAgICAgICB9IGNhdGNoIChleCkge31cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShrZXk6IHN0cmluZykge1xuICAgICAgICBkZWxldGUgd2luZG93WydnbG9iYWxTdG9yYWdlJ11bbG9jYXRpb24uaG9zdG5hbWVdW2tleV07XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvb2tpZVN0b3JhZ2VBZGFwdGVyIGV4dGVuZHMgQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIGlzQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY29va2llVXRpbHMuY2FuU2F2ZUNvb2tpZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdDb29raWVTdG9yYWdlQWRhcHRlcic7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gY29va2llVXRpbHMuZ2V0KGtleSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZXNJbj86IG51bWJlciwgZG9tYWluPzogc3RyaW5nLCBhZGRpdGlvbmFsUGFyYW1zOiB7ZG9udFVzZVJvb3RQYXRoPzogYm9vbGVhbiwgc2FtZVNpdGU/OiBTYW1lU2l0ZX0gPSB7fSk6IHZvaWQge1xuICAgICAgICBjb29raWVVdGlscy5zZXQoa2V5LCB2YWx1ZSwgZXhwaXJlc0luLCBkb21haW4sIGFkZGl0aW9uYWxQYXJhbXMuZG9udFVzZVJvb3RQYXRoLCBhZGRpdGlvbmFsUGFyYW1zLnNhbWVTaXRlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShrZXk6IHN0cmluZykge1xuICAgICAgICBjb29raWVVdGlscy5yZW1vdmUoa2V5KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVtb3J5U3RvcmFnZUFkYXB0ZXIgZXh0ZW5kcyBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgaXNBdmFpbGFibGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtZW1vcnk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tZW1vcnkgPSB7fTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnTWVtb3J5U3RvcmFnZUFkYXB0ZXInO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVtb3J5W2tleV07XG4gICAgfVxuXG4gICAgcHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZXNJbj86IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLm1lbW9yeVtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgZGVsZXRlIHRoaXMubWVtb3J5W2tleV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXMgcGVyc2lzdGVudCBzdG9yYWdlLiBSZXR1cm5zIGZhbHNlIHdoZW4gZGF0YSBpcyBub3QgcGVyc2lzdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBpc1BlcnNpc3RlbnQoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgYWRhcHRlcnM6IEFycmF5PGFueT4gPSBbXG4gICAgTG9jYWxTdG9yYWdlQWRhcHRlcixcbiAgICBTZXNzaW9uU3RvcmFnZUFkYXB0ZXIsXG4gICAgRmlyZWZveFN0b3JhZ2VBZGFwdGVyLFxuICAgIENvb2tpZVN0b3JhZ2VBZGFwdGVyLFxuICAgIE1lbW9yeVN0b3JhZ2VBZGFwdGVyLFxuXTtcbmV4cG9ydCBjb25zdCBpbnN0YW5jZXM6IHsgW2tleTogc3RyaW5nXTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIH0gPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQWRhcHRlcihhZGFwdGVyOiB7IG5hbWU/OiBzdHJpbmc7IGdldE5hbWU6ICgpID0+IHN0cmluZyB9ICYgKG5ldyAoKSA9PiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIpKSB7XG4gICAgY29uc3QgYWRhcHRlck5hbWUgPSBhZGFwdGVyLmdldE5hbWUoKSB8fCBhZGFwdGVyLm5hbWU7XG4gICAgaWYgKCFpbnN0YW5jZXNbYWRhcHRlck5hbWVdKSB7XG4gICAgICAgIGluc3RhbmNlc1thZGFwdGVyTmFtZV0gPSBuZXcgYWRhcHRlcigpO1xuICAgIH1cbiAgICByZXR1cm4gaW5zdGFuY2VzW2FkYXB0ZXJOYW1lXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3YWl0Rm9yU2VydmljZSgpOiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXI7XG5leHBvcnQgZnVuY3Rpb24gd2FpdEZvclNlcnZpY2UoY2FsbGJhY2s6IChzdG9yYWdlOiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIpID0+IHZvaWQpOiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXI7XG5leHBvcnQgZnVuY3Rpb24gd2FpdEZvclNlcnZpY2UoY2FsbGJhY2s/OiAoc3RvcmFnZTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyKSA9PiB2b2lkKTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIHtcbiAgICAvLyBTZWxlY3QgY29tcGF0aWJsZSBhZGFwdGVyLlxuICAgIGxldCBzdG9yYWdlOiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXI7XG4gICAgZm9yIChjb25zdCBhZGFwdGVyIG9mIGFkYXB0ZXJzKSB7XG4gICAgICAgIGlmIChhZGFwdGVyLmlzQXZhaWxhYmxlKCkpIHtcbiAgICAgICAgICAgIC8vIERvbid0IHNlbGVjdCBhZGFwdGVyIGlmIGl0J3MgYXN5bmMgYW5kIGEgY2FsbGJhY2sgd2Fzbid0IHByb3ZpZGVkLlxuICAgICAgICAgICAgaWYgKGFkYXB0ZXIucHJvdG90eXBlIGluc3RhbmNlb2YgQWJzdHJhY3RBc3luY0xvY2FsU3RvcmFnZUFkYXB0ZXIgJiYgIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0b3JhZ2UgPSBpbml0aWFsaXplQWRhcHRlcihhZGFwdGVyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgdG8gbWVtb3J5LWJhc2VkIG5vbi1wZXJzaXN0ZW50IHN0b3JhZ2UuXG4gICAgaWYgKCFzdG9yYWdlKSB7XG4gICAgICAgIHN0b3JhZ2UgPSBpbml0aWFsaXplQWRhcHRlcihNZW1vcnlTdG9yYWdlQWRhcHRlcik7XG4gICAgfVxuXG4gICAgLy8gVHJpZ2dlciBjYWxsYmFjayB3aGVuIGFkYXB0ZXIgZmluaXNoZXMgbG9hZGluZyAob3IgaW5zdGFudGx5LCBpZiBub3QgcmVxdWlyZWQgdG8gd2FpdCkuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChzdG9yYWdlIGluc3RhbmNlb2YgQWJzdHJhY3RBc3luY0xvY2FsU3RvcmFnZUFkYXB0ZXIpIHtcbiAgICAgICAgICAgIHN0b3JhZ2Uud2FpdEZvclNlcnZpY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHN0b3JhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayhzdG9yYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RvcmFnZTtcbn1cbmNvbnN0IGFkYXB0ZXIgPSB3YWl0Rm9yU2VydmljZSgpO1xuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBhZGFwdGVyLmdldEl0ZW0oa2V5KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzSW4/OiBudW1iZXIpOiB2b2lkIHtcbiAgICByZXR1cm4gYWRhcHRlci5zZXRJdGVtKGtleSwgdmFsdWUsIGV4cGlyZXNJbik7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIHJldHVybiBhZGFwdGVyLnJlbW92ZUl0ZW0oa2V5KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRPYmplY3Qoa2V5OiBzdHJpbmcsIG86IE9iamVjdCk6IHZvaWQge1xuICAgIHJldHVybiBhZGFwdGVyLnNldE9iamVjdChrZXksIG8pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE9iamVjdChrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KTogT2JqZWN0IHtcbiAgICByZXR1cm4gYWRhcHRlci5nZXRPYmplY3Qoa2V5LCBkZWZhdWx0VmFsdWUpO1xufVxuIiwiaW1wb3J0ICogYXMgSlNPTlV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9KU09OJztcbmltcG9ydCBXZWJTREtUb2dnbGVzIGZyb20gXCIuL3RvZ2dsZXNcIjtcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVVbmRlZmluZWQobzogT2JqZWN0KTogT2JqZWN0IHtcbiAgICB2YXIgbzIgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIG8pIHtcbiAgICAgICAgaWYgKG9bcF0gIT0gbnVsbCAmJiBvW3BdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbzJbcF0gPSBvW3BdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvMjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uSGVscGVyKGNvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCB7fTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRGaWVsZDogZnVuY3Rpb24ocGF0aCkge1xuICAgICAgICAgICAgaWYgKCFwYXRoKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIHBhdGhzID0gcGF0aC5zcGxpdCgnLicpLFxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjb250ZXh0LFxuICAgICAgICAgICAgICAgIGk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXRocy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50W3BhdGhzW2ldXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudFtwYXRoc1tpXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eUJ5U2VyaWFsaXplZE5hbWUobzogT2JqZWN0LCBuYW1lOiBzdHJpbmcsIGNyZWF0ZU1pc3NpbmdPYmplY3RzOiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIW5hbWUpIHJldHVybiBvO1xuICAgIHZhciBvUmVzdWx0ID0gbztcbiAgICB2YXIgYXJOYW1lU2VnbWVudHMgPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgZm9yICh2YXIgaVNlZ21lbnQgPSAwOyBpU2VnbWVudCA8IGFyTmFtZVNlZ21lbnRzLmxlbmd0aDsgaVNlZ21lbnQrKykge1xuICAgICAgICB2YXIgc1NlZ21lbnQgPSBhck5hbWVTZWdtZW50c1tpU2VnbWVudF07XG4gICAgICAgIHZhciBzSW5kZXggPSBudWxsO1xuICAgICAgICAvL1N1cHBvcnQgZm9yIGFycmF5IGFjY2Vzcy4gaS5lLiBcIm9iai5wcm9wMVswXS5wcm9wMlwiXG4gICAgICAgIGlmIChzU2VnbWVudC5tYXRjaCgvXFxbWzAtOV0rXS8pKSB7XG4gICAgICAgICAgICBzSW5kZXggPSBOdW1iZXIoc1NlZ21lbnQubWF0Y2goL1xcW1swLTldK10vKVswXS5yZXBsYWNlKC9bXFxbXFxdXS9nLCAnJykpO1xuICAgICAgICB9XG4gICAgICAgIHNTZWdtZW50ID0gc1NlZ21lbnQuc3BsaXQoL1xcW1swLTldK10vKS5qb2luKCcnKTtcbiAgICAgICAgdmFyIHJlcyA9IChzSW5kZXggfHwgc0luZGV4ID09PSAwKSAmJiBvUmVzdWx0W3NTZWdtZW50XSA/IG9SZXN1bHRbc1NlZ21lbnRdW3NJbmRleF0gOiBvUmVzdWx0W3NTZWdtZW50XTtcbiAgICAgICAgaWYgKGNyZWF0ZU1pc3NpbmdPYmplY3RzICYmICFvUmVzdWx0W3NTZWdtZW50XSkge1xuICAgICAgICAgICAgb1Jlc3VsdFtzU2VnbWVudF0gPSB7fTtcbiAgICAgICAgfSBlbHNlIGlmIChjcmVhdGVNaXNzaW5nT2JqZWN0cyAmJiAhcmVzICYmIHJlcyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG9SZXN1bHRbc1NlZ21lbnRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcyB8fCByZXMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBvUmVzdWx0ID0gcmVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9SZXN1bHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcGVydHlCeVNlcmlhbGl6ZWROYW1lKG86IE9iamVjdCwgbmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdmFyIGFyTmFtZVNlZ21lbnRzID0gbmFtZS5zcGxpdCgnLicpO1xuICAgIHZhciBwcm9wZXJ0eU5hbWUgPSBhck5hbWVTZWdtZW50cy5wb3AoKTtcbiAgICBnZXRQcm9wZXJ0eUJ5U2VyaWFsaXplZE5hbWUobywgYXJOYW1lU2VnbWVudHMuam9pbignLicpLCB0cnVlKVtwcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG59XG5leHBvcnQgZnVuY3Rpb24gYWRkKG9UYXJnZXQ6IE9iamVjdCwgbzogT2JqZWN0LCBkb250T3ZlcnJpZGU/OiBib29sZWFuKTogdm9pZCB7XG4gICAgZm9yICh2YXIgcCBpbiBvKSB7XG4gICAgICAgIGlmICghZG9udE92ZXJyaWRlIHx8IHR5cGVvZiBvVGFyZ2V0W3BdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb1RhcmdldFtwXSA9IG9bcF07XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0SGFzaChvOiBhbnkpOiBzdHJpbmcge1xuICAgIHZhciBhciA9IFtdO1xuICAgIGZvciAodmFyIHAgaW4gbykge1xuICAgICAgICB2YXIgcztcblxuICAgICAgICBpZiAodHlwZW9mIG9bcF0gPT0gJ29iamVjdCcpIHMgPSBKU09OVXRpbHMuc2VyaWFsaXplKG9bcF0sIGZhbHNlKTtcbiAgICAgICAgZWxzZSBpZiAob1twXSkgcyA9IG9bcF0udG9TdHJpbmcoKTtcblxuICAgICAgICBhci5wdXNoKHAgKyAnPScgKyBzKTtcbiAgICB9XG4gICAgcmV0dXJuIGFyLnNvcnQoKS5qb2luKCcmJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TXVybXVySGFzaChrZXk6IHN0cmluZywgc2VlZD86IG51bWJlcikge1xuICAgIGlmICghc2VlZCkgc2VlZCA9IDA7XG4gICAgdmFyIHJlbWFpbmRlciwgYnl0ZXMsIGgxLCBoMWIsIGMxLCBjMWIsIGMyLCBjMmIsIGsxLCBpO1xuXG4gICAgcmVtYWluZGVyID0ga2V5Lmxlbmd0aCAmIDM7IC8vIGtleS5sZW5ndGggJSA0XG4gICAgYnl0ZXMgPSBrZXkubGVuZ3RoIC0gcmVtYWluZGVyO1xuICAgIGgxID0gc2VlZDtcbiAgICBjMSA9IDB4Y2M5ZTJkNTE7XG4gICAgYzIgPSAweDFiODczNTkzO1xuICAgIGkgPSAwO1xuXG4gICAgd2hpbGUgKGkgPCBieXRlcykge1xuICAgICAgICBrMSA9IChrZXkuY2hhckNvZGVBdChpKSAmIDB4ZmYpIHwgKChrZXkuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgOCkgfCAoKGtleS5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAxNikgfCAoKGtleS5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAyNCk7XG4gICAgICAgICsraTtcblxuICAgICAgICBrMSA9ICgoazEgJiAweGZmZmYpICogYzEgKyAoKCgoazEgPj4+IDE2KSAqIGMxKSAmIDB4ZmZmZikgPDwgMTYpKSAmIDB4ZmZmZmZmZmY7XG4gICAgICAgIGsxID0gKGsxIDw8IDE1KSB8IChrMSA+Pj4gMTcpO1xuICAgICAgICBrMSA9ICgoazEgJiAweGZmZmYpICogYzIgKyAoKCgoazEgPj4+IDE2KSAqIGMyKSAmIDB4ZmZmZikgPDwgMTYpKSAmIDB4ZmZmZmZmZmY7XG5cbiAgICAgICAgaDEgXj0gazE7XG4gICAgICAgIGgxID0gKGgxIDw8IDEzKSB8IChoMSA+Pj4gMTkpO1xuICAgICAgICBoMWIgPSAoKGgxICYgMHhmZmZmKSAqIDUgKyAoKCgoaDEgPj4+IDE2KSAqIDUpICYgMHhmZmZmKSA8PCAxNikpICYgMHhmZmZmZmZmZjtcbiAgICAgICAgaDEgPSAoaDFiICYgMHhmZmZmKSArIDB4NmI2NCArICgoKChoMWIgPj4+IDE2KSArIDB4ZTY1NCkgJiAweGZmZmYpIDw8IDE2KTtcbiAgICB9XG5cbiAgICBrMSA9IDA7XG5cbiAgICBzd2l0Y2ggKHJlbWFpbmRlcikge1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBrMSBePSAoa2V5LmNoYXJDb2RlQXQoaSArIDIpICYgMHhmZikgPDwgMTY7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGsxIF49IChrZXkuY2hhckNvZGVBdChpICsgMSkgJiAweGZmKSA8PCA4O1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBrMSBePSBrZXkuY2hhckNvZGVBdChpKSAmIDB4ZmY7XG5cbiAgICAgICAgICAgIGsxID0gKChrMSAmIDB4ZmZmZikgKiBjMSArICgoKChrMSA+Pj4gMTYpICogYzEpICYgMHhmZmZmKSA8PCAxNikpICYgMHhmZmZmZmZmZjtcbiAgICAgICAgICAgIGsxID0gKGsxIDw8IDE1KSB8IChrMSA+Pj4gMTcpO1xuICAgICAgICAgICAgazEgPSAoKGsxICYgMHhmZmZmKSAqIGMyICsgKCgoKGsxID4+PiAxNikgKiBjMikgJiAweGZmZmYpIDw8IDE2KSkgJiAweGZmZmZmZmZmO1xuICAgICAgICAgICAgaDEgXj0gazE7XG4gICAgfVxuXG4gICAgaDEgXj0ga2V5Lmxlbmd0aDtcblxuICAgIGgxIF49IGgxID4+PiAxNjtcbiAgICBoMSA9ICgoaDEgJiAweGZmZmYpICogMHg4NWViY2E2YiArICgoKChoMSA+Pj4gMTYpICogMHg4NWViY2E2YikgJiAweGZmZmYpIDw8IDE2KSkgJiAweGZmZmZmZmZmO1xuICAgIGgxIF49IGgxID4+PiAxMztcbiAgICBoMSA9ICgoaDEgJiAweGZmZmYpICogMHhjMmIyYWUzNSArICgoKChoMSA+Pj4gMTYpICogMHhjMmIyYWUzNSkgJiAweGZmZmYpIDw8IDE2KSkgJiAweGZmZmZmZmZmO1xuICAgIGgxIF49IGgxID4+PiAxNjtcblxuICAgIHJldHVybiBoMSA+Pj4gMDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShvYmo6IGFueSwgZGVlcENvcHk/OiBib29sZWFuLCBpZ25vcmVGdW5jdGlvbnM/OiBib29sZWFuLCBtYXhMZXZlbDogbnVtYmVyID0gMjAsIGxldmVsOiBudW1iZXIgPSAwLCBpZ25vcmVDb250ZXh0PzogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKG9iaiA9PT0gd2luZG93KSByZXR1cm4gd2luZG93OyAvLyBkbyBub3QgY2xvbmUgdGhlIHdpbmRvdyBvYmplY3RcbiAgICBpZiAobGV2ZWwgPiBtYXhMZXZlbCkgcmV0dXJuIG51bGw7IC8vIFRvbyBkZWVwXG4gICAgaWYgKHR5cGVvZiBvYmogPT0gJ3VuZGVmaW5lZCcgfHwgb2JqID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFdlYlNES1RvZ2dsZXMuaXNPbigncmVtb3ZlVW5kZWZpbmVkUHJvcGVydGllcycpID8gb2JqIDogbnVsbDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJyAmJiBpZ25vcmVGdW5jdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIGlmIChvYmouY29uc3RydWN0b3IgPT0gQXJyYXkpIHtcbiAgICAgICAgdmFyIGFyID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIWlnbm9yZUZ1bmN0aW9ucyB8fCB0eXBlb2Ygb2JqW2ldICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVlcENvcHkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJbaV0gPSBjbG9uZShvYmpbaV0sIGRlZXBDb3B5LCBpZ25vcmVGdW5jdGlvbnMsIG1heExldmVsLCBsZXZlbCArIDEsIGlnbm9yZUNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFyW2ldID0gb2JqW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXI7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09ICdvYmplY3QnKSB7XG4gICAgICAgIHZhciBvID0ge307XG4gICAgICAgIGZvciAodmFyIHAgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoaWdub3JlQ29udGV4dCAmJiBwID09ICdjb250ZXh0JykgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIWlnbm9yZUZ1bmN0aW9ucyB8fCB0eXBlb2Ygb2JqW3BdICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVlcENvcHkpIHtcbiAgICAgICAgICAgICAgICAgICAgb1twXSA9IGNsb25lKG9ialtwXSwgZGVlcENvcHksIGlnbm9yZUZ1bmN0aW9ucywgbWF4TGV2ZWwsIGxldmVsICsgMSwgaWdub3JlQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb1twXSA9IG9ialtwXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG87XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYXJnczogT2JqZWN0W10sIGlzRGVlcE1lcmdlPzogYm9vbGVhbik6IE9iamVjdDtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShhcmdzOiBhbnlbXSwgaXNEZWVwTWVyZ2U/OiBib29sZWFuKTogT2JqZWN0IHtcbiAgICB2YXIgbyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJnc1tpXSAmJiBhcmdzW2ldLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yICh2YXIgdSA9IDA7IHUgPCBhcmdzW2ldLmxlbmd0aDsgdSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBhcmdzW2ldW3VdKSB7XG4gICAgICAgICAgICAgICAgICAgIG9bcF0gPSBhcmdzW2ldW3VdW3BdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE1lcmdlIG9iamVjdHMuXG4gICAgICAgICAgICBpZiAoIWlzRGVlcE1lcmdlKSB7XG4gICAgICAgICAgICAgICAgLy8gRmxhdCBtZXJnZS5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwIGluIGFyZ3NbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgb1twXSA9IGFyZ3NbaV1bcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBEZWVwIG1lcmdlLlxuICAgICAgICAgICAgICAgIGZvciAodmFyIHAgaW4gYXJnc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICAvL3dlIG92ZXJyaWRlIHByaW1pdGl2ZSAvIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb1twXSAhPT0gJ29iamVjdCcgfHwgb1twXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvW3BdID0gYXJnc1tpXVtwXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9bcF0gPSBtZXJnZShbb1twXSwgYXJnc1tpXVtwXV0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVuZmxhdHRlbihkYXRhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW4gfSk6IE9iamVjdCB7XG4gICAgaWYgKE9iamVjdChkYXRhKSAhPT0gZGF0YSB8fCBBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGxldCBwIGluIGRhdGEpIHtcbiAgICAgICAgbGV0IGN1ciA9IHJlc3VsdDtcbiAgICAgICAgbGV0IHByb3AgPSAnJztcbiAgICAgICAgY29uc3QgcGFydHMgPSBwLnJlcGxhY2UoL1xcWyhbMC05XSldLywgJy4kMScpLnNwbGl0KCcuJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9ICFpc05hTihOdW1iZXIocGFydHNbaV0pKTtcbiAgICAgICAgICAgIGN1ciA9IGN1cltwcm9wXSB8fCAoY3VyW3Byb3BdID0gaWR4ID8gW10gOiB7fSk7XG4gICAgICAgICAgICBwcm9wID0gcGFydHNbaV07XG4gICAgICAgIH1cbiAgICAgICAgY3VyW3Byb3BdID0gZGF0YVtwXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFsnJ10gfHwge307XG59XG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihkYXRhOiBhbnksIHdpdGhCcmFja2V0ID0gZmFsc2UpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW4gfSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZnVuY3Rpb24gcmVjdXJzZShjdXI6IGFueSwgcHJvcDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChPYmplY3QoY3VyKSAhPT0gY3VyKSB7XG4gICAgICAgICAgICByZXN1bHRbcHJvcF0gPSBjdXI7XG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjdXIpKSB7XG4gICAgICAgICAgICBjb25zdCBsID0gY3VyLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5lc3RlZFByb3BlcnR5ID0gd2l0aEJyYWNrZXQgPyBgJHtwcm9wfVske2l9XWAgOiBgJHtwcm9wfS4ke2l9YDtcbiAgICAgICAgICAgICAgICByZWN1cnNlKGN1cltpXSwgcHJvcCA/IG5lc3RlZFByb3BlcnR5IDogU3RyaW5nKGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W3Byb3BdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaXNFbXB0eSA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHAgaW4gY3VyKSB7XG4gICAgICAgICAgICAgICAgaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJlY3Vyc2UoY3VyW3BdLCBwcm9wID8gYCR7cHJvcH0uJHtwfWAgOiBwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0VtcHR5ICYmIHByb3AgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W3Byb3BdID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVjdXJzZShkYXRhLCAnJyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0UHJvcGVydGllcyhzcmM6IGFueSwgZGVzdD86IGFueSwgc2NoZW1hPzogU3RyaW5nKTogT2JqZWN0IHtcbiAgICBpZiAoc3JjID09IG51bGwpIHJldHVybjtcbiAgICBpZiAoZGVzdCA9PSBudWxsKSBkZXN0ID0ge307XG4gICAgaWYgKHNyYy5jb25zdHJ1Y3RvciA9PSBBcnJheSkge1xuICAgICAgICBmb3IgKHZhciBpU3JjID0gMDsgaVNyYyA8IHNyYy5sZW5ndGg7IGlTcmMrKykge1xuICAgICAgICAgICAgZXh0cmFjdFByb3BlcnRpZXMoc3JjW2lTcmNdLCBkZXN0LCBzY2hlbWEpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChzY2hlbWEpIHtcbiAgICAgICAgdmFyIGFyU2NoZW1hID0gc2NoZW1hLnNwbGl0KCd8Jyk7XG4gICAgICAgIHZhciBzcmNMQ2FzZSA9IHt9O1xuICAgICAgICBmb3IgKHZhciBmaWVsZE5hbWUgaW4gc3JjKSB7XG4gICAgICAgICAgICBzcmNMQ2FzZVtmaWVsZE5hbWUudG9Mb3dlckNhc2UoKV0gPSAxO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJTY2hlbWEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBmaWVsZE5hbWUyID0gYXJTY2hlbWFbaV07XG4gICAgICAgICAgICBpZiAoc3JjTENhc2VbZmllbGROYW1lMi50b0xvd2VyQ2FzZSgpXSkgZGVzdFtmaWVsZE5hbWUyXSA9IHNyY1tmaWVsZE5hbWUyXTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRlc3QgPSBjbG9uZShzcmMsIGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc3Q7XG59XG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFByb3BlcnR5KHNyYzogYW55LCBwYXJhbU5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgdmFyIHBhcmFtcztcbiAgICByZXR1cm4gZXh0cmFjdFByb3BlcnRpZXMoc3JjLCBwYXJhbXMsIHBhcmFtTmFtZSlbcGFyYW1OYW1lXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRvT2JqZWN0KHN0cjogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGFyc2VkVmFsID0gd2luZG93WydKU09OJ10ucGFyc2Uoc3RyKTtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWRWYWwgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWRWYWw7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9wZXJ0aWVzUHJlZml4KG9iajogT2JqZWN0ID0ge30sIHByZWZpeDogc3RyaW5nIHwgUmVnRXhwID0gJycpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKGFjYywgY3VycikgPT4gKE9iamVjdC5hc3NpZ24oYWNjLCB7W2N1cnIucmVwbGFjZShwcmVmaXgsJycpXTogb2JqW2N1cnJdfSkpLHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJlZml4VG9Qcm9wZXJ0aWVzKG9iajogT2JqZWN0ID0ge30sIHByZWZpeDogc3RyaW5nID0gJycpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkuaW5kZXhPZihwcmVmaXgpICE9PSAwKSB7XG4gICAgICAgICAgICBhY2NbYCR7cHJlZml4fSR7a2V5fWBdID0gb2JqW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IG9ialtrZXldO1xuICAgICAgICB9XG4gICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVPYmplY3RLZXlzVG9Mb3dlckNhc2Uob2JqZWN0OiBPYmplY3QpOiBPYmplY3Qge1xuICAgIC8vIE5vcm1hbGl6ZSBhbGwga2V5cyB0byBsb3dlcmNhc2UgaW4gYWRkaXRpb24gdG8gdGhlaXIgb3JpZ2luYWwgY2FzaW5nLlxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgICAgICBvYmplY3Rba2V5LnRvTG93ZXJDYXNlKCldID0gb2JqZWN0W2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZU9iamVjdEtleXMob2JqOiBPYmplY3QpOiBPYmplY3Qge1xuICAgIGxldCBkZWNvZGVPYmplY3RLZXlzID0ge307XG4gICAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgICAgICBsZXQgZGVjb2RlZEtleSA9IGtleTtcbiAgICAgICAgd2hpbGUgKGRlY29kZWRLZXkuaW5kZXhPZignJScpICE9PSAtMSkge1xuICAgICAgICAgICAgZGVjb2RlZEtleSA9IGRlY29kZVVSSUNvbXBvbmVudChkZWNvZGVkS2V5KTtcbiAgICAgICAgfVxuICAgICAgICBkZWNvZGVPYmplY3RLZXlzW2RlY29kZWRLZXldID0gb2JqW2tleV07XG4gICAgfVxuICAgIHJldHVybiBkZWNvZGVPYmplY3RLZXlzO1xufVxuIiwiXG52YXIgX3EgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBfc2VydmljZXNTdGF0dXMoKSB7XG4gICAgdmFyIHNlcnZpY2VzID0ge307XG5cbiAgICBmb3IgKHZhciBzZXJ2aWNlIGluIF9xKSB7XG4gICAgICAgIHZhciBhY3RpdmUgPSBpc0FjdGl2ZShzZXJ2aWNlKTtcblxuICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICBzZXJ2aWNlc1tzZXJ2aWNlXSA9IHtcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgd2FpdGluZ0ZvcjogX3Fbc2VydmljZV0uaWRzLFxuICAgICAgICAgICAgICAgIHF1ZXVlZENvdW50OiBfcVtzZXJ2aWNlXS5xLmxlbmd0aCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXJ2aWNlc1tzZXJ2aWNlXSA9IHtcbiAgICAgICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZXJ2aWNlcztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FjdGl2ZShzZXJ2aWNlOiBzdHJpbmcpIHtcbiAgICBpZiAoIV9xW3NlcnZpY2VdKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBpZCBpbiBfcVtzZXJ2aWNlXS5pZHMpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZWxlYXNlKGlkOiBzdHJpbmcsIHNlcnZpY2U6IHN0cmluZyk6IHZvaWQge1xuICAgIGdpZ3lhLmxvZ2dlci5kZWJ1ZyhgcmVsZWFzaW5nICR7c2VydmljZX0gcXVldWUgYnkgJHtpZH1gKTtcbiAgICBpZiAoIV9xW3NlcnZpY2VdKSByZXR1cm47XG4gICAgZGVsZXRlIF9xW3NlcnZpY2VdLmlkc1tpZF07XG4gICAgaWYgKCFpc0FjdGl2ZShzZXJ2aWNlKSkge1xuICAgICAgICB2YXIgcSA9IF9xW3NlcnZpY2VdLnE7XG4gICAgICAgIF9xW3NlcnZpY2VdLnEgPSBbXTtcbiAgICAgICAgd2hpbGUgKHEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIG8gPSBxLnNwbGljZSgwLCAxKVswXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgby5mdW5jLmFwcGx5KHRoaXMsIG8uYXJncyk7XG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZSA9PSAnb2JqZWN0JyAmJiBjb25zb2xlLmxvZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR2lneWE6IEV4Y2VwdGlvbiB3aGlsZSBpbnZva2luZyBxdWV1ZWQgbWV0aG9kICgnICsgc2VydmljZSArICc6ICcgKyBpZCArICcpJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzQWN0aXZlKHNlcnZpY2UpKSB7XG4gICAgICAgICAgICAgICAgLy9xdWV1ZSBiZWNhbWUgaW5hY3RpdmVcbiAgICAgICAgICAgICAgICBfcVtzZXJ2aWNlXS5xID0gcTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBob2xkKGlkOiBzdHJpbmcsIHNlcnZpY2U6IHN0cmluZyk6IHZvaWQge1xuICAgIGdpZ3lhLmxvZ2dlci5kZWJ1ZyhgbG9ja2luZyBxdWV1ZSAke3NlcnZpY2V9IGJ5ICR7aWR9YCk7XG5cbiAgICBpZiAoIV9xW3NlcnZpY2VdKSBfcVtzZXJ2aWNlXSA9IHsgcTogW10sIGlkczoge30gfTtcbiAgICBfcVtzZXJ2aWNlXS5pZHNbaWRdID0gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3YWl0Rm9yKHNlcnZpY2U6IHN0cmluZywgZm5jOiBGdW5jdGlvbiwgYXJnczogYW55W10pOiB2b2lkO1xuZXhwb3J0IGZ1bmN0aW9uIHdhaXRGb3Ioc2VydmljZTogc3RyaW5nLCBmbmM6IEZ1bmN0aW9uLCBhcmdzOiBJQXJndW1lbnRzKTogdm9pZDtcbmV4cG9ydCBmdW5jdGlvbiB3YWl0Rm9yKHNlcnZpY2U6IHN0cmluZywgZm5jOiBGdW5jdGlvbiwgYXJnczogYW55KTogdm9pZCB7XG4gICAgaWYgKCFfcVtzZXJ2aWNlXSkgX3Fbc2VydmljZV0gPSB7IHE6IFtdLCBpZHM6IHt9IH07XG4gICAgX3Fbc2VydmljZV0ucS5wdXNoKHsgZnVuYzogZm5jLCBhcmdzOiBhcmdzIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXVlRm9yRXhlY3V0aW9uKHNlcnZpY2U6IHN0cmluZywgZnVuYzogRnVuY3Rpb24sIGFyZ3M/OiBhbnlbXSkge1xuICAgIGFyZ3MgPSBhcmdzIHx8IFtdO1xuICAgIGlmIChpc0FjdGl2ZShzZXJ2aWNlKSkge1xuICAgICAgICB3YWl0Rm9yKHNlcnZpY2UsIGZ1bmMsIGFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgSlNPTlV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9KU09OJztcbmltcG9ydCAqIGFzIHF1ZXVlVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3F1ZXVlJztcbmltcG9ydCB7RmxhZ1NlcnZpY2V9IGZyb20gJy4uL1NlcnZpY2VzL0ZsYWdTZXJ2aWNlJztcbnZhciBzZXNzaW9uU3RvcmFnZUVuYWJsZWQ7XG50cnkge1xuICAgIHNlc3Npb25TdG9yYWdlRW5hYmxlZCA9IEJvb2xlYW4od2luZG93LnNlc3Npb25TdG9yYWdlKTsgLy8gd2hlbiAzcGMgYmxvY2tlZCwgY2hyb21lIHRocm93cyB3aGVuIHRyeWluZyB0byBhY2Nlc3Mgc2Vzc2lvbiBzdG9yYWdlLlxufSBjYXRjaCAoZXgpIHtcbiAgICBzZXNzaW9uU3RvcmFnZUVuYWJsZWQgPSBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXQoa2V5OiBzdHJpbmcsIHJlc3BvbnNlOiBPYmplY3QpIHtcbiAgICBpZiAoIXNlc3Npb25TdG9yYWdlRW5hYmxlZCkgcmV0dXJuO1xuICAgIHZhciBvR2lneWE7XG4gICAgdHJ5IHtcbiAgICAgICAgb0dpZ3lhID0gSlNPTlV0aWxzLmRlc2VyaWFsaXplKHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnaWd5YUNhY2hlJykpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZSA9PSBudWxsICYmIG9HaWd5YVtrZXldKSB7XG4gICAgICAgICAgICBkZWxldGUgb0dpZ3lhW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBvR2lneWFba2V5XSA9IHsgcmVzcG9uc2UsIHRpbWUgfTtcbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignZ2lnX29pZGNDb250ZXh0XycpID49IDApIHtcbiAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIucmVwb3J0KCdvaWRjIHN0b3JhZ2UgbG9ncyAtIHNldCcsIHtcbiAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb0dpZ3lhW2tleV1cbiAgICAgICAgICAgICAgICB9LCBmYWxzZSwgRmxhZ1NlcnZpY2UuZm9yY2VFcnJvclJlcG9ydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZ2lneWFDYWNoZScsIEpTT05VdGlscy5zZXJpYWxpemUob0dpZ3lhKSk7XG4gICAgfSBjYXRjaCAoZXgpIHt9XG5cbiAgICBxdWV1ZVV0aWxzLnJlbGVhc2UoJ2NhY2hlJywgJ2NhY2hlXycgKyBrZXkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldChrZXk6IHN0cmluZywgY2FjaGVUaW1lb3V0OiBudW1iZXIgPSAtMSk6IE9iamVjdCB7XG4gICAgaWYgKCFzZXNzaW9uU3RvcmFnZUVuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKCFxdWV1ZVV0aWxzLmlzQWN0aXZlKCdjYWNoZV8nICsga2V5KSkge1xuICAgICAgICAgICAgY29uc3Qgc0dpZ3lhQ2FjaGUgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZ2lneWFDYWNoZScpO1xuICAgICAgICAgICAgY29uc3Qgb0dpZ3lhID0gSlNPTlV0aWxzLmRlc2VyaWFsaXplKHNHaWd5YUNhY2hlKTtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZCA9IG9HaWd5YVtrZXldO1xuICAgICAgICAgICAgaWYgKGNhY2hlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlVGltZW91dCA8IDAgfHwgY2FjaGVUaW1lb3V0ICsgY2FjaGVkLnRpbWUgPiBjdXJyZW50VGltZSkge1xuICAgICAgICAgICAgICAgICAgICAvL2NhY2hlZFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGVkLnJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignZ2lnX29pZGNDb250ZXh0XycpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci5yZXBvcnQoJ29pZGMgc3RvcmFnZSBsb2dzIC0gZ2V0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb0dpZ3lhW2tleV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVUaW1lOiBjYWNoZWQudGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZmFsc2UsIEZsYWdTZXJ2aWNlLmZvcmNlRXJyb3JSZXBvcnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vZXhwaXJlZFxuICAgICAgICAgICAgICAgICAgICByZW1vdmUoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWNhY2hlZCkge1xuICAgICAgICAgICAgICAgIC8vbm90IGNhY2hlZCAoZmlyc3QgdGltZSlcbiAgICAgICAgICAgICAgICBxdWV1ZVV0aWxzLmhvbGQoJ2NhY2hlJywgJ2NhY2hlXycgKyBrZXkpOyAvL3NvIHRoYXQgZnV0dXJlIHJlcXVlc3RzIHdpbGwgd2FpdCBmb3IgdGhlIGZpcnN0IG9uZSdzIHJlc3BvbnNlLlxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy93YWl0IGZvciBmaXJzdCByZXNwb25zZVxuICAgICAgICAgICAgcXVldWVVdGlscy53YWl0Rm9yKCdjYWNoZV8nICsga2V5LCBnZXQsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGV4KSB7fVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIHNldChrZXksIG51bGwpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRyaW0oczogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcy5yZXBsYWNlKC9eXFxzKihcXFMqKC4qXFxTKT8pXFxzKiQvLCAnJDEnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoczogc3RyaW5nLCAuLi5yZXN0OiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHNbaSArIDFdICE9IG51bGwpIHtcbiAgICAgICAgICAgIHMgPSBzLnNwbGl0KCd7JyArIGkgKyAnfScpLmpvaW4oYXJndW1lbnRzW2kgKyAxXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHM7XG59XG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZShzOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgcy5zdWJzdHJpbmcoMSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZW5kc1dpdGgoczogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBzLmluZGV4T2Yoc3VmZml4LCBzLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFxcW1xcXVxcL1xcXFxdKS9nLCAnXFxcXCQxJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUFsbChzdHI6IHN0cmluZywgZmluZDogc3RyaW5nLCByZXBsYWNlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghZmluZCkgcmV0dXJuIHN0cjtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAoZmluZCksICdnJyksIHJlcGxhY2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDb21tYVNlcGFyYXRlZFZhbHVlcyhzdHIxOiBzdHJpbmcgPSAnJywgc3RyMjogc3RyaW5nID0gJycpOiBzdHJpbmcge1xuICAgIGNvbnN0IGFyciA9IHN0cjEuY29uY2F0KCcsJywgc3RyMikuc3BsaXQoJywnKTtcbiAgICByZXR1cm4gZ2lneWEudXRpbHMuYXJyYXkuZ2V0VW5pcXVlVmFsdWVzKGFycikuZmlsdGVyKHggPT4geCkuam9pbignLCcpO1xufVxuIiwiaW1wb3J0ICogYXMgb2JqZWN0VXRpbHMgZnJvbSAnLi9vYmplY3QnO1xuXG5jbGFzcyBXZWJTREtUb2dnbGVzIHtcbiAgICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLl90b2dnbGVzW2tleV0gIT0gJ3VuZGVmaW5lZCc7XG4gICAgfVxuXG4gICAgZ2V0PFQgPSBhbnk+KGtleTogc3RyaW5nKTogVCB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b2dnbGVzW2tleV0gYXMgVDtcbiAgICB9XG5cbiAgICBpc09uKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhrZXkpICYmIHRoaXMuZ2V0KGtleSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgX3RvZ2dsZXMoKSB7XG4gICAgICAgIHJldHVybiBvYmplY3RVdGlscy5tZXJnZShbXG4gICAgICAgICAgICB0aGlzLl9nbG9iYWxDb25mVG9nZ2xlcyxcbiAgICAgICAgICAgIHRoaXMuX3dlYlNka0NvbmZpZ1RvZ2dsZXNcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgX2dsb2JhbENvbmZUb2dnbGVzKCkge1xuICAgICAgICByZXR1cm4gZ2lneWEudGhpc1NjcmlwdD8uZ2xvYmFsQ29uZj8udG9nZ2xlcyB8fCB7fTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBfd2ViU2RrQ29uZmlnVG9nZ2xlcygpIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlcyA9IGdpZ3lhLl8/LmNvbmZpZz8udG9nZ2xlcyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRvZ2dsZXMpLnJlZHVjZSgobmV3VG9nZ2xlcywga2V5KSA9PiB7XG4gICAgICAgICAgICBuZXdUb2dnbGVzW2tleV0gPSB0b2dnbGVzW2tleV0gPT09ICdvbic7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdUb2dnbGVzO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IFdlYlNES1RvZ2dsZXMoKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBpc0V4cGxpY2l0VHJ1ZSh2YWw6IGFueSk6IGJvb2xlYW4ge1xuICAgIHZhciBsYyA9ICgnJyArIHZhbCkudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gbGMgPT0gJ3RydWUnIHx8IGxjID09ICcxJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0V4cGxpY2l0RmFsc2UodmFsOiBhbnkpOiBib29sZWFuIHtcbiAgICB2YXIgbGMgPSAoJycgKyB2YWwpLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGxjID09ICdmYWxzZScgfHwgbGMgPT0gJzAnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTGF0ZXJUaGFuTm93KGV4cGlyYXRpb25UaW1lOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZXhwaXJhdGlvblRpbWUgPiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhbGxEZWZpbmVkT3JBbGxVbmRlZmluZWQoLi4uYXJncykge1xuICAgIGNvbnN0IGFueVVuZGVmaW5lZCA9IGFyZ3Muc29tZSh4ID0+IHR5cGVvZiB4ID09PSAndW5kZWZpbmVkJyk7XG4gICAgY29uc3QgYW55RGVmaW5lZCA9IGFyZ3Muc29tZSh4ID0+IHR5cGVvZiB4ICE9PSAndW5kZWZpbmVkJyk7XG4gICAgcmV0dXJuIChhbnlEZWZpbmVkICYmICFhbnlVbmRlZmluZWQpIHx8ICghYW55RGVmaW5lZCAmJiBhbnlVbmRlZmluZWQpO1xufVxuIiwiaW1wb3J0IHsgSVByb3h5UmVzcG9uc2UsIElQcm94eU1lc3NhZ2UsIElQcm94eVJlcXVlc3QsIElQcm94eVNpZ25hbFJlcXVlc3QgfSBmcm9tICdzcmMvY29yZS9TZXJ2aWNlUHJveHkvaW50ZXJmYWNlcyc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICdzcmMvY29yZS9TZXJ2aWNlUHJveHkvdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgU2VydmljZVByb3h5IHtcbiAgICBwcml2YXRlIF9pZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50O1xuICAgIHByaXZhdGUgX3BlbmRpbmdSZXFzOiAoKGU6IE1lc3NhZ2VFdmVudCAmIHsgZGF0YTogSVByb3h5UmVzcG9uc2UgfSkgPT4gdm9pZClbXSA9IFtdO1xuICAgIHByaXZhdGUgX2lmcmFtZUhvc3Q6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgX211dGF0aW9uT2JzZXJ2ZXJzOiBNdXRhdGlvbk9ic2VydmVyW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgdXJsOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyB0aW1lb3V0ID0gNjAwMDAsXG4gICAgICAgIHByaXZhdGUgX2lkQ3JlYXRvciA9IHV0aWxzLmdlbmVyYXRlSWQsXG4gICAgICAgIHByaXZhdGUgX2lmcmFtZUNyZWF0b3IgPSB1dGlscy5jcmVhdGVJZnJhbWUsXG4gICAgICAgIHByaXZhdGUgZ2V0SWZyYW1lSG9zdCA9ICgpID0+XG4gICAgICAgICAgICBuZXcgUHJvbWlzZTxIVE1MRWxlbWVudD4ocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkpIHJlc29sdmUoZG9jdW1lbnQuYm9keSk7XG4gICAgICAgICAgICAgICAgZWxzZSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gcmVzb2x2ZShkb2N1bWVudC5ib2R5KSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgcHJpdmF0ZSBfd2luID0gd2luZG93LFxuICAgICkge31cblxuICAgIHB1YmxpYyBnZXQgaXNJbml0KCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLl9pZnJhbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0PFQ+KHRpdGxlOiBzdHJpbmcpOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNJbml0KSByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ3Byb3h5IGFscmVhZHkgaW5pdGlhbGl6ZWQnKSBhcyBhbnk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5faWZyYW1lID0gdGhpcy5faWZyYW1lQ3JlYXRvcih0aXRsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5faWZyYW1lLnNyYyA9IHRoaXMudXJsO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SWZyYW1lSG9zdCgpLnRoZW4oaG9zdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lmcmFtZUhvc3QgPSBob3N0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pZnJhbWVIb3N0LmFwcGVuZENoaWxkKHRoaXMuX2lmcmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGdpZ3lhLmxvZ2dlci5pc0VuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9ic2VydmUgaWZyYW1lIHJlbW92YWwgb25seSBpZiBnaWd5YS5sb2dnZXIgaXMgZXhwbGljaXRseSBlbmFibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0T2JzZXJ2aW5nSUZyYW1lUmVtb3ZhbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZW91dElkID0gdGhpcy5fd2luLnNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KCdwcm94eSBpbml0IHRpbWVvdXQnKSwgdGhpcy50aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb25Jbml0UmVzcG9uc2UgPSAoZTogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZU9yaWdpbihlLm9yaWdpbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHRoaXMuX3RyeVBhcnNlUmVzcG9uc2UoZS5kYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZT8uc2lnbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3dpbi5jbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbkluaXRSZXNwb25zZSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXNwb25zZS5zaWduYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xpc3RlbmluZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2luLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLm9uUmVzcG9uc2UsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UucmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0b3AnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZS5yZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoJ3Vuc3VwcG9ydGVkIHJlc3BvbnNlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2luLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbkluaXRSZXNwb25zZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHZhbGlkYXRlT3JpZ2luKGNoZWNrZWQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdXRpbHMudmFsaWRhdGVPcmlnaW4odGhpcy5faWZyYW1lLnNyYywgY2hlY2tlZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblJlc3BvbnNlID0gKGU6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICAvLyBhcnJvdyBmdW5jdGlvbiB0byBwcmVzZXJ2ZSBjb250ZXh0XG4gICAgICAgIGNvbnN0IG1zZyA9IGdpZ3lhLnV0aWxzLkpTT04ucGFyc2UoZS5kYXRhKSBhcyBJUHJveHlSZXNwb25zZTtcbiAgICAgICAgaWYgKG1zZyAmJiB0aGlzLl9wZW5kaW5nUmVxc1ttc2cuaWRdICYmIHRoaXMudmFsaWRhdGVPcmlnaW4oZS5vcmlnaW4pKSB7XG4gICAgICAgICAgICB0aGlzLl9wZW5kaW5nUmVxc1ttc2cuaWRdKG1zZyk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fcGVuZGluZ1JlcXNbbXNnLmlkXTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcml2YXRlIHBvc3RUb0lGcmFtZTxUPihyZXE6IElQcm94eU1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3Qgb25Nc2dSZXNwb25zZSA9IHRoaXMucmVnaXN0ZXJNZXNzYWdlPFQ+KHJlcSk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IHN0cmluZyA9IHR5cGVvZiByZXEgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkocmVxKSA6IHJlcTtcbiAgICAgICAgdGhpcy5faWZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UobWVzc2FnZSwgdGhpcy5faWZyYW1lLnNyYyk7XG4gICAgICAgIHJldHVybiBvbk1zZ1Jlc3BvbnNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVnaXN0ZXJNZXNzYWdlPFQ+KHJlcTogSVByb3h5TWVzc2FnZSwgdGltZW91dCA9IHRoaXMudGltZW91dCk6IFByb21pc2U8VD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGltZW91dElkID0gdGhpcy5fd2luLnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdCgncHJveHkgcmVxdWVzdCB0aW1lb3V0Jyk7XG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcblxuICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1JlcXNbcmVxLmlkXSA9IChlOiBJUHJveHlSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3dpbi5jbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgICAgICAgICBpZiAoZS5zaWduYWwgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUucmVzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGUucmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VuZFJlcXVlc3Q8VD4obWV0aG9kTmFtZTogc3RyaW5nLCBwYXJhbXM/OiBhbnlbXSk6IFByb21pc2U8VD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0VG9JRnJhbWU8VD4oe1xuICAgICAgICAgICAgaWQ6IHRoaXMuX2lkQ3JlYXRvcigpLFxuICAgICAgICAgICAgbWV0aG9kTmFtZSxcbiAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgfSBhcyBJUHJveHlSZXF1ZXN0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RvcDxUPihmb3JjZUNsb3NlID0gZmFsc2UpOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzSW5pdCkge1xuICAgICAgICAgICAgdGhyb3cgJ3Byb3h5IGlzIG5vdCBhY3RpdmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVycm9yO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnBvc3RUb0lGcmFtZTxUPih7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLl9pZENyZWF0b3IoKSxcbiAgICAgICAgICAgICAgICAgICAgc2lnbmFsOiAnc3RvcCcsXG4gICAgICAgICAgICAgICAgfSBhcyBJUHJveHlTaWduYWxSZXF1ZXN0KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnJvciB8fCBmb3JjZUNsb3NlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tdXRhdGlvbk9ic2VydmVycyAmJiB0aGlzLl9tdXRhdGlvbk9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc2Nvbm5lY3QgbXV0YXRpb24gb2JzZXJ2ZXJzLCBpZiBhbnkuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BPYnNlcnZpbmdJRnJhbWVSZW1vdmFsKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLm9uUmVzcG9uc2UsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pZnJhbWVIb3N0LnJlbW92ZUNoaWxkKHRoaXMuX2lmcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9pZnJhbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHdyYXBXaXRoPFQ+KHR5cGU6IG5ldyAoKSA9PiBUKTogVDtcbiAgICBwdWJsaWMgd3JhcFdpdGg8VD4odHlwZTogT2JqZWN0KTogVDtcbiAgICBwdWJsaWMgd3JhcFdpdGg8VD4oa2V5czogc3RyaW5nW10pOiBUO1xuICAgIHB1YmxpYyB3cmFwV2l0aDxUPih0eXBlOiAobmV3ICgpID0+IFQpIHwgT2JqZWN0IHwgc3RyaW5nW10pOiBUIHtcbiAgICAgICAgbGV0IGtleXM6IHN0cmluZ1tdO1xuICAgICAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIGtleXMgPSB1dGlscy5nZXRBbGxDbGFzc01ldGhvZHNOYW1lcyh0eXBlIGFzIGFueSk7XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgaW5zdGFuY2VvZiBBcnJheSkga2V5cyA9IHR5cGU7XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykga2V5cyA9IE9iamVjdC5rZXlzKHR5cGUpO1xuICAgICAgICAvLy5jb25jYXQoZ2V0QWxsQ2xhc3NNZXRob2RzTmFtZXMoT2JqZWN0LmdldFByb3RvdHlwZU9mKHR5cGUpKSk7XG4gICAgICAgIGVsc2UgdGhyb3cgJ3Vuc3VwcG9ydGVkIHR5cGUgZm9yIHdyYXBwZXInO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnByb3h5RnJvbUtleXM8VD4oa2V5cyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcm94eUZyb21LZXlzPFQ+KGtleXM6IHN0cmluZ1tdKTogVCB7XG4gICAgICAgIGNvbnN0IHByb3h5ID0ge307XG4gICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4gKHByb3h5W2tleV0gPSAoLi4uYXJncykgPT4gdGhpcy5zZW5kUmVxdWVzdChrZXksIGFyZ3MpKSk7XG4gICAgICAgIHJldHVybiBwcm94eSBhcyBUO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRPYnNlcnZpbmdJRnJhbWVSZW1vdmFsKCkge1xuICAgICAgICBsZXQgdGFyZ2V0Tm9kZSA9IHRoaXMuX2lmcmFtZSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgd2hpbGUgKHRhcmdldE5vZGUucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgLy8gb2JzZXJ2ZSB0aGUgaWZyYW1lIGFuZCBpdHMgcGFyZW50cyAoaWZyYW1lLGJvZHkpXG4gICAgICAgICAgICB0aGlzLmFkZE11dGF0aW9uT2JzZXJ2ZXIodGFyZ2V0Tm9kZSk7XG4gICAgICAgICAgICB0YXJnZXROb2RlID0gdGFyZ2V0Tm9kZS5wYXJlbnRFbGVtZW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdG9wT2JzZXJ2aW5nSUZyYW1lUmVtb3ZhbCgpIHtcbiAgICAgICAgdGhpcy5fbXV0YXRpb25PYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICBpZiAob2JzZXJ2ZXIgJiYgb2JzZXJ2ZXIuZGlzY29ubmVjdCkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX211dGF0aW9uT2JzZXJ2ZXJzID0gW107XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRNdXRhdGlvbk9ic2VydmVyKHRhcmdldE5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IG11dGF0aW9uQ2FsbGJhY2s6IE11dGF0aW9uQ2FsbGJhY2sgPSBtdXRhdGlvbnNMaXN0ID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IG11dGF0aW9uIG9mIG11dGF0aW9uc0xpc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PSAnY2hpbGRMaXN0JyAmJiBtdXRhdGlvbi5yZW1vdmVkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEEgY2hpbGQgbm9kZSBoYXMgYmVlbiByZW1vdmVkLlxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLnJlbW92ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlZE5vZGUgPSBtdXRhdGlvbi5yZW1vdmVkTm9kZXMuaXRlbShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZW1vdmVkTm9kZSA9PT0gdGFyZ2V0Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci53YXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiMjIyBHaWd5YSdzIHNlcnZpY2UgcHJveHkgaGFzIGJlZW4gdW5leHBlY3RlZGx5IGRldGFjaGVkIGZyb20gdGhlIERPTS4gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1RoaXMgbWF5IGNhdXNlIHVuZXhwZWN0ZWQgYmVoYXZpb3IgaW5jbHVkaW5nIGEgY29tcGxldGUgbG9zcyBvZiBzZXJ2aWNlLiAjIyMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wT2JzZXJ2aW5nSUZyYW1lUmVtb3ZhbCgpOyAvLyBjYW4gc3RvcCBvYnNlcnZpbmcgZm9yIGlmcmFtZSByZW1vdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBzdG9wIHRoZSBsb29wXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlIGxpbmtlZCB0byB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIG11dGF0aW9ucyBhcmUgb2JzZXJ2ZWRcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbkNhbGxiYWNrKTtcblxuICAgICAgICAvLyBTdGFydCBvYnNlcnZpbmcgdGhlIHRoZSB0YXJnZXQtbm9kZSdzIHBhcmVudCBlbGVtZW50IGZvciBjb25maWd1cmVkIG11dGF0aW9uc1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUucGFyZW50RWxlbWVudCwge1xuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLCAvLyBtb25pdG9ycyB0aGUgdGFyZ2V0IG5vZGUgZm9yIHRoZSBhZGRpdGlvbiBvciByZW1vdmFsIG9mIG5ldyBjaGlsZCBub2Rlc1xuICAgICAgICAgICAgc3VidHJlZTogZmFsc2UsIC8vIGRvIG5vdCBleHRlbmQgbW9uaXRvcmluZyB0byB0aGUgZW50aXJlIHN1YnRyZWUgb2Ygbm9kZXMgcm9vdGVkIGF0IHRoZSBwYXJlbnQgZWxlbWVudFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9tdXRhdGlvbk9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF90cnlQYXJzZVJlc3BvbnNlKGRhdGFTdHI6IHN0cmluZyk6IElQcm94eVJlc3BvbnNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGFTdHIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBnaWd5YS5sb2dnZXIud2FybihgcmVjZWl2ZWQgbWVzc2FnZSB3aXRoIGludmFsaWQgZm9ybWF0YCwge1xuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFTdHJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGdldFBhcmVudFVybCA9ICh3aW4gPSB3aW5kb3csIGRvYyA9IGRvY3VtZW50KSA9PiAod2luLmxvY2F0aW9uICE9IHdpbi5wYXJlbnQubG9jYXRpb24gPyBkb2MucmVmZXJyZXIgOiBkb2MubG9jYXRpb24uaHJlZik7XG5leHBvcnQgY29uc3QgZ2V0Qm9keUVsZW1lbnQgPSAoZG9jID0gZG9jdW1lbnQpID0+XG4gICAgbmV3IFByb21pc2U8SFRNTEVsZW1lbnQ+KHJlc29sdmUgPT4ge1xuICAgICAgICBpZiAoZG9jLmJvZHkpIHJlc29sdmUoZG9jLmJvZHkpO1xuICAgICAgICBlbHNlIGRvYy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gcmVzb2x2ZShkb2MuYm9keSkpO1xuICAgIH0pO1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRlT3JpZ2luID0gKG9yaWdpbjogc3RyaW5nLCBjaGVja2VkOiBzdHJpbmcpID0+IG9yaWdpbj8udG9Mb3dlckNhc2UoKT8uaW5kZXhPZihjaGVja2VkPy50b0xvd2VyQ2FzZSgpKSA9PT0gMDtcbmV4cG9ydCBjb25zdCBjcmVhdGVJZnJhbWUgPSAodGl0bGU6IHN0cmluZyA9ICdHaWd5YSBGcmFtZScsIGRvYyA9IGRvY3VtZW50KSA9PiB7XG4gICAgY29uc3QgaWZyYW1lID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgIGlmcmFtZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgaWZyYW1lLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgIGlmcmFtZS5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGlmcmFtZS50aXRsZSA9IHRpdGxlO1xuICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICByZXR1cm4gaWZyYW1lO1xufTtcbmxldCBfY291bnRlciA9IDE7XG5leHBvcnQgY29uc3QgZ2VuZXJhdGVJZCA9ICgpID0+IHtcbiAgICByZXR1cm4gU3RyaW5nKF9jb3VudGVyKyspO1xufTtcbmZ1bmN0aW9uIGlzQ2xhc3ModHlwZTogYW55fChuZXcgKCkgPT4gYW55KSk6IHR5cGUgaXMgbmV3ICgpID0+IGFueSB7XG4gICAgcmV0dXJuICEhdHlwZS5wcm90b3R5cGU7XG59XG5leHBvcnQgY29uc3QgZ2V0QWxsQ2xhc3NNZXRob2RzTmFtZXMgPSAodHlwZTogT2JqZWN0fChuZXcgKCkgPT4gYW55KSk6IHN0cmluZ1tdID0+IHtcbiAgICBsZXQgcHJvcHM6IHN0cmluZ1tdID0gW107XG5cbiAgICBsZXQgcHJvdG8gPSBpc0NsYXNzKHR5cGUpID8gdHlwZS5wcm90b3R5cGUgOiB0eXBlO1xuICAgIGRvIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8qKiBpbml0aWFsIGltcGxlbWVudGF0aW9uIC0gdXNpbmcgZmlsdGVyICoqL1xuICAgICAgICAgICAgY29uc3QgbCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3RvKVxuICAgICAgICAgICAgICAgIC8vIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhwcm90bykubWFwKHMgPT4gcy50b1N0cmluZygpKSlcbiAgICAgICAgICAgICAgICAubWFwKHMgPT4gcy50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIC5zb3J0KClcbiAgICAgICAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAocCwgaSwgYXJyKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHByb3RvW3BdID09PSAnZnVuY3Rpb24nICYmIC8vb25seSB0aGUgbWV0aG9kc1xuICAgICAgICAgICAgICAgICAgICAgICAgcCAhPT0gJ2NvbnN0cnVjdG9yJyAmJiAvL25vdCB0aGUgY29uc3RydWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIChpID09IDAgfHwgcCAhPT0gYXJyW2kgLSAxXSkgJiYgLy9ub3Qgb3ZlcnJpZGluZyBpbiB0aGlzIHByb3RvdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaW5kZXhPZihwKSA9PT0gLTEsIC8vbm90IG92ZXJyaWRkZW4gaW4gYSBjaGlsZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwcm9wcyA9IHByb3BzLmNvbmNhdChsKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLyoqIGJ1ZyBmaXggaW1wbGVtZW50YXRpb24gLSB1c2luZyBjdXN0b20gb3VyIG93biBmaWx0ZXIgbG9naWNcbiAgICAgICAgICAgICBjYXNlIG9mIEFycmF5LmZpbHRlciBwb2x5ZmlsbCBjYXVzaW5nIFwiY2FuIG5vdCByZWFkIHByb3BlcnR5ICcwJyBvZiB1bmRlZmluZWRcIiAqKi9cbiAgICAgICAgICAgIGNvbnN0IGFyciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3RvKVxuICAgICAgICAgICAgICAgIC8vIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhwcm90bykubWFwKHMgPT4gcy50b1N0cmluZygpKSlcbiAgICAgICAgICAgICAgICAubWFwKHMgPT4gcy50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIC5zb3J0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGwgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IGFycltpXTtcblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHByb3RvW3BdID09PSAnZnVuY3Rpb24nICYmIC8vb25seSB0aGUgbWV0aG9kc1xuICAgICAgICAgICAgICAgICAgICBwICE9PSAnY29uc3RydWN0b3InICYmIC8vbm90IHRoZSBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgICAgICAgICAoaSA9PSAwIHx8IHAgIT09IGFycltpIC0gMV0pICYmIC8vbm90IG92ZXJyaWRpbmcgaW4gdGhpcyBwcm90b3R5cGVcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaW5kZXhPZihwKSA9PT0gLTFcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgLy9ub3Qgb3ZlcnJpZGRlbiBpbiBhIGNoaWxkXG5cbiAgICAgICAgICAgICAgICAgICAgbC5wdXNoKHApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb3BzID0gcHJvcHMuY29uY2F0KGwpO1xuICAgICAgICB9XG4gICAgfSB3aGlsZSAoXG4gICAgICAgIChwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90bykpICYmIC8vd2Fsay11cCB0aGUgcHJvdG90eXBlIGNoYWluXG4gICAgICAgIE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90bykgLy9ub3QgdGhlIHRoZSBPYmplY3QgcHJvdG90eXBlIG1ldGhvZHMgKGhhc093blByb3BlcnR5LCBldGMuLi4pXG4gICAgKTtcblxuICAgIHJldHVybiBwcm9wcztcbn07XG4iLCJleHBvcnQgY2xhc3MgR2xvYmFsUHJvdmlkZXIge1xuICAgIHB1YmxpYyBkb2N1bWVudExvY2F0aW9uKCk6IExvY2F0aW9uIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uO1xuICAgIH1cbiAgICBwdWJsaWMgcG9zdE1lc3NhZ2VUb1BhcmVudChtZXNzYWdlOiBhbnksIHRhcmdldE9yaWdpbjogc3RyaW5nLCB0cmFuc2Zlcj86IFRyYW5zZmVyYWJsZVtdKTogdm9pZCB7XG4gICAgICAgIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UobWVzc2FnZSwgdGFyZ2V0T3JpZ2luLCB0cmFuc2Zlcik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgR2xvYmFsUHJvdmlkZXIoKVxuIiwiaW1wb3J0IHtcbiAgICBHZXRHcm91cFRva2VuUmVzcG9uc2UsXG4gICAgQ2FuYXJ5SW5kaWNhdGlvblJlc3BvbnNlLFxuICAgIEdldExvZ2luVG9rZW5FeHBSZXNwb25zZSxcbiAgICBGcmFtZVNldEdyb3VwVG9rZW5QYXJhbXMsXG4gICAgRnJhbWVMb2dvdXRQYXJhbXMsXG4gICAgRnJhbWVSZW1vdmVUb2tlblBhcmFtcyxcbiAgICBGcmFtZUdldEdyb3VwVG9rZW5QYXJhbXMsXG4gICAgRnJhbWVTZXRMb2dpblRva2VuRXhwUGFyYW1zLFxuICAgIEZyYW1lR2V0TG9naW5Ub2tlbkV4cFBhcmFtcyxcbiAgICBGcmFtZUNoZWNrVG9rZW5SZW5ld1BhcmFtcyxcbiAgICBGcmFtZVN5bmNDYW5hcnlJbmRpY2F0aW9uLFxuICAgIENhbmFyeVZlcnNpb24sXG4gICAgRnJhbWVTZXRHcm91cENvbnRleHQsXG4gICAgSVNzb1NlcnZpY2UsXG4gICAgU2V0TG9naW5Ub2tlbkV4cFJlc3BvbnNlLFxuICAgIEdldEdyb3VwQXBpRG9tYWluUmVzcG9uc2UsXG4gICAgRnJhbWVTZXRHcm91cEFwaURvbWFpbixcbiAgICBGcmFtZUdldEdyb3VwQXBpRG9tYWluLFxuICAgIFNES0xvZ291dFJlc3BvbnNlXG59IGZyb20gJ3NyYy9maWRtL0dpZ3lhLkpTLlNTTy9hcHAvaW50ZXJmYWNlcyc7XG5pbXBvcnQge0dTRXJyb3JzfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvR1NFcnJvcnMnO1xuaW1wb3J0IHtTc29VdGlsc30gZnJvbSBcInNyYy9maWRtL0dpZ3lhLkpTLlNTTy9hcHAvc3NvVXRpbHNcIjtcbmltcG9ydCB7SVNzb0NvbmZpZ30gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvaW50ZXJmYWNlcy9JV2ViU2RrQ29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFNzbyBpbXBsZW1lbnRzIElTc29TZXJ2aWNlIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zdG9yYWdlS2V5OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2FuYXJ5S2V5OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2FuYXJ5VmVyS2V5OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfY3VycmVudEZyYWdtZW50OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbW9kZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX3JlcXVlc3REb21haW46IHN0cmluZztcbiAgICBwcml2YXRlIF9saWQ6IHN0cmluZztcbiAgICBwcml2YXRlIF9jYWxsYmFja0lEOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hcGlLZXk6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9zaXRlQXBpS2V5OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfc3NvU2VnbWVudDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3Nzb0NvbmZpZzogSVNzb0NvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWREb21haW5zOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgbG9nb3V0VVJMczoge30sXG4gICAgICAgICAgICAgICAgICAgIGNhbmFyeUNvb2tpZXNOYW1lczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNDYW5hcnk6ICdnaWdfaXNDYW5hcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogJ2dpZ19jYW5hcnlfdmVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF91dGlscyA9IG5ldyBTc29VdGlscygpLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3N0b3JhZ2UgPSBfdXRpbHMuZ2V0Q29va2llc1N0b3JhZ2UoKSkge1xuXG4gICAgICAgIHRoaXMuX3N0b3JhZ2VLZXkgPSB0aGlzLl9jcmVhdGVLZXkoJ2dpZ19sb2dpblRva2VuJyk7XG4gICAgICAgIGNvbnN0IGNhbmFyeUNvb2tpZXNOYW1lcyA9IHRoaXMuX3Nzb0NvbmZpZy5jYW5hcnlDb29raWVzTmFtZXM7XG4gICAgICAgIGlmICh0eXBlb2YgY2FuYXJ5Q29va2llc05hbWVzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5fY2FuYXJ5S2V5ID0gdGhpcy5fY3JlYXRlS2V5KGNhbmFyeUNvb2tpZXNOYW1lcy5pc0NhbmFyeSk7XG4gICAgICAgICAgICB0aGlzLl9jYW5hcnlWZXJLZXkgPSB0aGlzLl9jcmVhdGVLZXkoY2FuYXJ5Q29va2llc05hbWVzLnZlcnNpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKSB7XG4gICAgICAgIC8vIFN0YXJ0IHJlcGVhdGVkbHkgY2hlY2tpbmcgZnJhZ21lbnQgZm9yIGEgbmV3IGNhbGwuXG4gICAgICAgIHRoaXMuX2NoZWNrRnJhZ21lbnQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jaGVja0ZyYWdtZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmcmFnbWVudDogc3RyaW5nID0gdGhpcy5fdXRpbHMuZ2V0RnJhZ21lbnQoKTtcbiAgICAgICAgaWYgKGZyYWdtZW50ICYmIGZyYWdtZW50ICE9PSB0aGlzLl9jdXJyZW50RnJhZ21lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRGcmFnbWVudCA9IGZyYWdtZW50O1xuICAgICAgICAgICAgdGhpcy5fc3RhcnQodGhpcy5fdXRpbHMuZGVzZXJpYWxpemUoZnJhZ21lbnQpKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCh0aGlzLl9jaGVja0ZyYWdtZW50LCAyMDApO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGFzeW5jIF9zdGFydChcbiAgICAgICAgcGFyYW1zOlxuICAgICAgICAgICAgfCBGcmFtZVNldEdyb3VwVG9rZW5QYXJhbXNcbiAgICAgICAgICAgIHwgRnJhbWVMb2dvdXRQYXJhbXNcbiAgICAgICAgICAgIHwgRnJhbWVSZW1vdmVUb2tlblBhcmFtc1xuICAgICAgICAgICAgfCBGcmFtZUdldEdyb3VwVG9rZW5QYXJhbXNcbiAgICAgICAgICAgIHwgRnJhbWVTZXRMb2dpblRva2VuRXhwUGFyYW1zXG4gICAgICAgICAgICB8IEZyYW1lR2V0TG9naW5Ub2tlbkV4cFBhcmFtc1xuICAgICAgICAgICAgfCBGcmFtZUNoZWNrVG9rZW5SZW5ld1BhcmFtc1xuICAgICAgICAgICAgfCBGcmFtZVN5bmNDYW5hcnlJbmRpY2F0aW9uXG4gICAgICAgICAgICB8IEZyYW1lU2V0R3JvdXBDb250ZXh0XG4gICAgICAgICAgICB8IEZyYW1lU2V0R3JvdXBBcGlEb21haW5cbiAgICAgICAgICAgIHwgRnJhbWVHZXRHcm91cEFwaURvbWFpblxuICAgICkge1xuICAgICAgICB0aGlzLl9tb2RlID0gcGFyYW1zLm07XG4gICAgICAgIHRoaXMuX3JlcXVlc3REb21haW4gPSBwYXJhbXMuZDsgLy8gUmVjZWl2aW5nIGRvbWFpbi5cbiAgICAgICAgdGhpcy5fbGlkID0gcGFyYW1zLmxpZDtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tJRCA9IHBhcmFtcy5jYWxsYmFja0lEO1xuICAgICAgICB0aGlzLl9zaXRlQXBpS2V5ID0gcGFyYW1zLnNBUElLZXk7XG5cbiAgICAgICAgLy8gQWJvcnQgaWYgbm90IGluIGlGcmFtZVxuICAgICAgICBpZiAoIXdpbmRvdy5wYXJlbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBnaWd5YSBzc286IGludmFsaWQgdXNlYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX3V0aWxzLmlzVmFsaWREb21haW4odGhpcy5fc3NvQ29uZmlnLnZhbGlkRG9tYWlucywgdGhpcy5fcmVxdWVzdERvbWFpbikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBnaWd5YSBzc286ICR7dGhpcy5fcmVxdWVzdERvbWFpbn0gaXMgbm90IGluIHZhbGlkIGRvbWFpbjogJHt0aGlzLl9zc29Db25maWcudmFsaWREb21haW5zLmpvaW4oJywnKX1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXNwb25zZTogYW55O1xuICAgICAgICBzd2l0Y2ggKHBhcmFtcy5tKSB7XG4gICAgICAgICAgICBjYXNlICdsb2dvdXQnOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgdGhpcy5sb2dvdXQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncmVtb3ZlVG9rZW4nOlxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucmVtb3ZlVG9rZW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZ2V0VG9rZW4nOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgdGhpcy5nZXRUb2tlbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdzZXRUb2tlbic6XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRUb2tlbihwYXJhbXMubHQsIFN0cmluZyhwYXJhbXMuZXhwaXJhdGlvbiksIHBhcmFtcy5nbHRleHApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdzZXRHcm91cENvbnRleHQnOlxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0R3JvdXBDb250ZXh0KHBhcmFtcy5ncm91cENvbnRleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdzZXRMb2dpblRva2VuRXhwJzpcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2V0VG9rZW5FeHBpcmF0aW9uKHBhcmFtcy5sb2dpblRva2VuRXhwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZ2V0TG9naW5Ub2tlbkV4cCc6XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmdldFRva2VuRXhwaXJhdGlvbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdjaGVja1Rva2VuUmVuZXcnOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgdGhpcy5jaGVja1Rva2VuUmVuZXcocGFyYW1zLmxvZ2luVG9rZW4pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdzeW5jQ2FuYXJ5SW5kaWNhdGlvbic6XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnN5bmNDYW5hcnlJbmRpY2F0aW9uKHBhcmFtcy5pc0NhbmFyeSwgcGFyYW1zLmNhbmFyeVZlcnNpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdzZXRHcm91cEFwaURvbWFpbic6XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRHcm91cEFwaURvbWFpbihwYXJhbXMuZG9tYWluKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZ2V0R3JvdXBBcGlEb21haW4nOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgdGhpcy5nZXRHcm91cEFwaURvbWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvckNvZGU6IEdTRXJyb3JzLklOVkFMSURfQVBJX01FVEhPRCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdXRpbHMuc2VuZE1lc3NhZ2UocmVzcG9uc2UsIHRoaXMuX2NhbGxiYWNrSUQsIHRoaXMuX3JlcXVlc3REb21haW4pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRHcm91cEFwaURvbWFpbigpOiBQcm9taXNlPEdldEdyb3VwQXBpRG9tYWluUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgZG9tYWluID0gdGhpcy5fc3RvcmFnZS5nZXRJdGVtKGBhcGlEb21haW5fJHt0aGlzLl9hcGlLZXl9YClcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVycm9yQ29kZTogR1NFcnJvcnMuT0ssXG4gICAgICAgICAgICBkb21haW5cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2V0R3JvdXBBcGlEb21haW4oZG9tYWluOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5fc3RvcmFnZS5zZXRJdGVtKGBhcGlEb21haW5fJHt0aGlzLl9hcGlLZXl9YCwgZG9tYWluKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgbG9nb3V0KCk6IFByb21pc2U8U0RLTG9nb3V0UmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgbG9nb3V0VVJMcyA9IHRoaXMuX2dldExvZ291dFVSTHMoKTtcbiAgICAgICAgYXdhaXQgdGhpcy5yZW1vdmVUb2tlbigpO1xuICAgICAgICB0aGlzLl9zdG9yYWdlLnJlbW92ZUl0ZW0oYCR7dGhpcy5fc3RvcmFnZUtleX1fdmlzaXRlZGApO1xuICAgICAgICByZXR1cm4geyBsb2dvdXRVUkxzIH07XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHJlbW92ZVRva2VuKCkge1xuICAgICAgICBsZXQgbG9naW5Ub2tlbiA9IHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9zdG9yYWdlS2V5KTtcbiAgICAgICAgaWYgKGxvZ2luVG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMuX21hcmtSZXZva2VkTG9naW5Ub2tlbihsb2dpblRva2VuKTtcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLl9zdG9yYWdlS2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdG9yYWdlLnJlbW92ZUl0ZW0oYCR7dGhpcy5fc3RvcmFnZUtleX1fZXhwYCk7XG4gICAgICAgIHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbShgJHt0aGlzLl9zdG9yYWdlS2V5fV9nbHRleHBgKTtcbiAgICAgICAgdGhpcy5fc3RvcmFnZS5yZW1vdmVJdGVtKGAke3RoaXMuX3N0b3JhZ2VLZXl9X3Nlc3Npb25gKTtcbiAgICAgICAgdGhpcy5fc3RvcmFnZS5yZW1vdmVJdGVtKGAke3RoaXMuX3N0b3JhZ2VLZXl9X2NvbnRleHRgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0VG9rZW4oKTogUHJvbWlzZTxHZXRHcm91cFRva2VuUmVzcG9uc2U+IHtcbiAgICAgICAgbGV0IGVycm9yQ29kZSA9IDA7XG4gICAgICAgIGxldCBsdCA9IHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9zdG9yYWdlS2V5KTtcbiAgICAgICAgY29uc3Qgc3RvcmFnZUV4cCA9IHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLl9zdG9yYWdlS2V5fV9leHBgKTtcbiAgICAgICAgbGV0IGV4cDtcbiAgICAgICAgaWYgKHN0b3JhZ2VFeHAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBleHAgPSBEYXRlLm5vdygpIC0gMTAwMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4cCA9IE51bWJlcihzdG9yYWdlRXhwKTtcbiAgICAgICAgICAgIGNvbnN0IHR3b1llYXJGcm9tTm93ID0gRGF0ZS5ub3coKSArICgxMDAwICogNjAgKiA2MCAqIDI0ICogMzY1ICogMik7XG4gICAgICAgICAgICBpZiAoZXhwID4gdHdvWWVhckZyb21Ob3cpIHtcbiAgICAgICAgICAgICAgICBleHAgPSBEYXRlLm5vdygpIC0gMTAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnbHRleHAgPSB0aGlzLl9zdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5fc3RvcmFnZUtleX1fZ2x0ZXhwYCk7XG4gICAgICAgIGNvbnN0IGdyb3VwQ29udGV4dCA9IHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLl9zdG9yYWdlS2V5fV9jb250ZXh0YCk7XG4gICAgICAgIGNvbnN0IGluU2Vzc2lvbiA9IGdsdGV4cCB8fCB0aGlzLl9zdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5fc3RvcmFnZUtleX1fc2Vzc2lvbmApID09PSAnMSc7XG4gICAgICAgIGlmICghaXNOYU4oZXhwKSAmJiAoKGV4cCA9PT0gMCAmJiAhaW5TZXNzaW9uKSB8fCAoZXhwID4gMCAmJiBuZXcgRGF0ZSgpLmdldFRpbWUoKSA+IGV4cCkpKSB7XG4gICAgICAgICAgICAvLyBleHBpcmVkIVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZW1vdmVUb2tlbigpO1xuICAgICAgICAgICAgbHQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsdCkge1xuICAgICAgICAgICAgLy8gbm8gdXNlclxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlcnJvckNvZGU6IEdTRXJyb3JzLlVOQVVUSE9SSVpFRF9VU0VSLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX21hcmtTaXRlVmlzaXRlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IEdldEdyb3VwVG9rZW5SZXNwb25zZSA9IHtcbiAgICAgICAgICAgIGVycm9yQ29kZTogZXJyb3JDb2RlLFxuICAgICAgICAgICAgbG9naW5fdG9rZW46IGx0LFxuICAgICAgICAgICAgZXhwaXJlc19pbjogZXhwID09PSAwID8gMCA6IE1hdGgucm91bmQoKGV4cCAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpKSAvIDEwMDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmKGdyb3VwQ29udGV4dCl7XG4gICAgICAgICAgICByZXNwb25zZS5ncm91cENvbnRleHQgPSBncm91cENvbnRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhwID09PSAwICYmIGdsdGV4cCkge1xuICAgICAgICAgICAgcmVzcG9uc2UuZ2x0ZXhwID0gZ2x0ZXhwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2V0VG9rZW4obHQ6IHN0cmluZywgZXhwaXJhdGlvbj86IHN0cmluZyB8IG51bWJlciwgZ2x0ZXhwPzogc3RyaW5nKSB7XG4gICAgICAgIGx0ID0gbHQuc3BsaXQoJ3wnKVswXTtcbiAgICAgICAgY29uc3Qgb2xkVG9rZW4gPSB0aGlzLl9zdG9yYWdlLmdldEl0ZW0odGhpcy5fc3RvcmFnZUtleSk/LnNwbGl0KCd8JylbMF07XG4gICAgICAgIGlmIChsdCAhPT0gb2xkVG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMuX21hcmtSZXZva2VkTG9naW5Ub2tlbihvbGRUb2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobHQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9zdG9yYWdlS2V5LCBsdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV4cGlyYXRpb24pIHtcbiAgICAgICAgICAgIGxldCBleHBpcmVzSW4gPSB0eXBlb2YgZXhwaXJhdGlvbiA9PT0gJ3N0cmluZycgJiYgZXhwaXJhdGlvbiA/IE51bWJlcihleHBpcmF0aW9uKSA6IGV4cGlyYXRpb247XG5cbiAgICAgICAgICAgIGlmIChleHBpcmVzSW4gPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBTZXNzaW9uIGNvb2tpZSBvciBkeW5hbWljIHNlc3Npb24gY29va2llLlxuICAgICAgICAgICAgICAgIC8vIEVpdGhlciB3YXksIGZsYWcgdGhlIGV4cGlyYXRpb24gYXMgMC5cbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gbm93IHdoZW4gdGhlIGNvb2tpZSBzaG91bGQgZXhwaXJlLlxuICAgICAgICAgICAgICAgIGxldCBleHBpcmVzSW5NczogbnVtYmVyO1xuICAgICAgICAgICAgICAgIGlmICghZXhwaXJlc0luIHx8IGV4cGlyZXNJbiA9PT0gLTIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJlc0luTXMgPSAxMDAwICogNjAgKiA2MCAqIDI0ICogMzY1O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZXNJbk1zID0gTnVtYmVyKGV4cGlyZXNJbikgKiAxMDAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgZXhwaXJlcyBpbiBtaWxsaXNlY29uZHMgdG8gYW4gYSB0aW1lc3RhbXAgKGFsc28gbWlsbGlzZWNvbmRzKS5cbiAgICAgICAgICAgICAgICBleHBpcmVzSW4gPSBEYXRlLm5vdygpICsgZXhwaXJlc0luTXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zdG9yYWdlLnNldEl0ZW0oYCR7dGhpcy5fc3RvcmFnZUtleX1fZXhwYCwgYCR7ZXhwaXJlc0lufWApO1xuICAgICAgICAgICAgaWYgKGV4cGlyYXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdG9yYWdlLnNldEl0ZW0oYCR7dGhpcy5fc3RvcmFnZUtleX1fc2Vzc2lvbmAsICcxJywgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdsdGV4cCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldFRva2VuRXhwaXJhdGlvbihnbHRleHApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGx0KSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9tYXJrU2l0ZVZpc2l0ZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzZXRHcm91cENvbnRleHQoZ3JvdXBDb250ZXh0OiBhbnkpIHtcbiAgICAgICAgdGhpcy5fc3RvcmFnZS5zZXRJdGVtKGAke3RoaXMuX3N0b3JhZ2VLZXl9X2NvbnRleHRgLCBKU09OLnN0cmluZ2lmeShncm91cENvbnRleHQpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2V0VG9rZW5FeHBpcmF0aW9uKGdsdGV4cDogc3RyaW5nKTogUHJvbWlzZTxTZXRMb2dpblRva2VuRXhwUmVzcG9uc2U+IHtcbiAgICAgICAgaWYgKCF0aGlzLl91dGlscy5pc1ZhbGlkR2x0RXhwKGdsdGV4cCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbShgJHt0aGlzLl9zdG9yYWdlS2V5fV9nbHRleHBgKTtcbiAgICAgICAgICAgIGdsdGV4cCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbHRleHAgPSB0aGlzLl91dGlscy5nZXRNYXhHbHRFeHAoZ2x0ZXhwLCAoYXdhaXQgdGhpcy5nZXRUb2tlbkV4cGlyYXRpb24oKSkuZ2x0ZXhwKTtcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLl9zdG9yYWdlS2V5fV9nbHRleHBgLCBnbHRleHApO1xuICAgICAgICAgICAgdGhpcy5fc3RvcmFnZS5yZW1vdmVJdGVtKGAke3RoaXMuX3N0b3JhZ2VLZXl9X2V4cGApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVycm9yQ29kZTogR1NFcnJvcnMuT0ssXG4gICAgICAgICAgICBnbHRleHAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldFRva2VuRXhwaXJhdGlvbigpOiBQcm9taXNlPEdldExvZ2luVG9rZW5FeHBSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCBsdCA9IHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9zdG9yYWdlS2V5KTtcbiAgICAgICAgaWYgKCFsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlcnJvckNvZGU6IEdTRXJyb3JzLlVOQVVUSE9SSVpFRF9VU0VSLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlcnJvckNvZGU6IEdTRXJyb3JzLk9LLFxuICAgICAgICAgICAgZ2x0ZXhwOiB0aGlzLl9zdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5fc3RvcmFnZUtleX1fZ2x0ZXhwYCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNoZWNrVG9rZW5SZW5ldyhsb2dpblRva2VuOiBzdHJpbmcpOiBQcm9taXNlPEdldEdyb3VwVG9rZW5SZXNwb25zZT4ge1xuICAgICAgICBjb25zdCBncm91cFRva2VuID0gYXdhaXQgdGhpcy5nZXRUb2tlbigpO1xuICAgICAgICBjb25zdCBpbnZhbGlkVG9rZW5zID0gdGhpcy5fc3RvcmFnZS5nZXRJdGVtKGAke3RoaXMuX3N0b3JhZ2VLZXl9X3Jldm9rZWRfdG9rZW5zYCkgfHwgJyc7XG4gICAgICAgIGNvbnN0IGlzSW52YWxpZCA9IGludmFsaWRUb2tlbnMuaW5kZXhPZihsb2dpblRva2VuKSA+PSAwO1xuICAgICAgICBpZiAoIWlzSW52YWxpZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRUb2tlbihsb2dpblRva2VuKTtcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3JDb2RlOiBHU0Vycm9ycy5PS307XG4gICAgICAgIH0gZWxzZSBpZiAoZ3JvdXBUb2tlbi5lcnJvckNvZGUgPT09IEdTRXJyb3JzLk9LICYmIGludmFsaWRUb2tlbnMuaW5kZXhPZihncm91cFRva2VuLmxvZ2luX3Rva2VuKSA8IDApIHtcbiAgICAgICAgICAgIC8vIGp1c3QgY2hhbmdpbmcgdGhlIGVycm9yIGNvZGUgLSBidXQgcmV0dXJuaW5nIHRoZSBzYW1lIHNlc3Npb24gaW5mbyBvZiB0aGUgZ3JvdXBcbiAgICAgICAgICAgIGdyb3VwVG9rZW4uZXJyb3JDb2RlID0gR1NFcnJvcnMuVE9LRU5fSEFTX1JFTkVXRUQ7XG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBUb2tlbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3JDb2RlOiBHU0Vycm9ycy5JTlZBTElEX1RPS0VOfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzeW5jQ2FuYXJ5SW5kaWNhdGlvbihpc0NhbmFyeTogc3RyaW5nLCB2ZXJzaW9uU2lnbmF0dXJlOiBzdHJpbmcpOiBQcm9taXNlPENhbmFyeUluZGljYXRpb25SZXNwb25zZT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2NhbmFyeUtleSB8fCAhdGhpcy5fY2FuYXJ5VmVyS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4ge2Vycm9yQ29kZTogR1NFcnJvcnMuSU5WQUxJRF9FTlZJUk9OTUVOVF9DT05GSUd9IGFzIENhbmFyeUluZGljYXRpb25SZXNwb25zZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IFNTT0lzQ2FuYXJ5ID0gdGhpcy5fc3RvcmFnZS5nZXRJdGVtKHRoaXMuX2NhbmFyeUtleSk7XG4gICAgICAgIGNvbnN0IFNTT1ZlcnNpb25TaWduYXR1cmUgPSB0aGlzLl9zdG9yYWdlLmdldEl0ZW0odGhpcy5fY2FuYXJ5VmVyS2V5KTtcblxuICAgICAgICBjb25zdCByZXNwb25zZTogQ2FuYXJ5SW5kaWNhdGlvblJlc3BvbnNlID0ge1xuICAgICAgICAgICAgZXJyb3JDb2RlOiBHU0Vycm9ycy5PSyxcbiAgICAgICAgICAgIGlzQ2FuYXJ5LFxuICAgICAgICAgICAgY2FuYXJ5VmVyc2lvbjogdmVyc2lvblNpZ25hdHVyZSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF0aGlzLl91dGlscy52YWxpZGF0aW9ucygpLmFsbERlZmluZWRPckFsbFVuZGVmaW5lZChTU09Jc0NhbmFyeSwgU1NPVmVyc2lvblNpZ25hdHVyZSkpIHtcbiAgICAgICAgICAgIC8vIG5vdCBsZWdhbFxuICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3JDb2RlID0gR1NFcnJvcnMuSU5WQUxJRF9QQVJBTUVURVJfVkFMVUU7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX3V0aWxzLnZhbGlkYXRpb25zKCkuYWxsRGVmaW5lZE9yQWxsVW5kZWZpbmVkKGlzQ2FuYXJ5LCB2ZXJzaW9uU2lnbmF0dXJlKSkge1xuICAgICAgICAgICAgLy8gbm90IGxlZ2FsXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVycm9yQ29kZTogR1NFcnJvcnMuSU5WQUxJRF9QQVJBTUVURVJfVkFMVUUsXG4gICAgICAgICAgICAgICAgaXNDYW5hcnk6IFNTT0lzQ2FuYXJ5LFxuICAgICAgICAgICAgICAgIGNhbmFyeVZlcnNpb246IFNTT1ZlcnNpb25TaWduYXR1cmUsXG4gICAgICAgICAgICB9IGFzIENhbmFyeUluZGljYXRpb25SZXNwb25zZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNpdGVDYW5hcnlWZXJzaW9uID0gdGhpcy5fcGFyc2VDYW5hcnlWZXJzaW9uU2lnbmF0dXJlKHZlcnNpb25TaWduYXR1cmUpO1xuICAgICAgICBjb25zdCBTU09DYW5hcnlWZXJzaW9uID0gdGhpcy5fcGFyc2VDYW5hcnlWZXJzaW9uU2lnbmF0dXJlKFNTT1ZlcnNpb25TaWduYXR1cmUpO1xuXG4gICAgICAgIGlmIChzaXRlQ2FuYXJ5VmVyc2lvbi50aW1lc3RhbXAgPiBTU09DYW5hcnlWZXJzaW9uLnRpbWVzdGFtcCkge1xuICAgICAgICAgICAgdGhpcy5fc3RvcmFnZS5zZXRJdGVtKHRoaXMuX2NhbmFyeUtleSwgaXNDYW5hcnkpO1xuICAgICAgICAgICAgdGhpcy5fc3RvcmFnZS5zZXRJdGVtKHRoaXMuX2NhbmFyeVZlcktleSwgdmVyc2lvblNpZ25hdHVyZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNwb25zZS5pc0NhbmFyeSA9IFNTT0lzQ2FuYXJ5O1xuICAgICAgICAgICAgcmVzcG9uc2UuY2FuYXJ5VmVyc2lvbiA9IFNTT1ZlcnNpb25TaWduYXR1cmU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbWFya1NpdGVWaXNpdGVkKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB2aXNpdGVkU3RvcmFnZUtleSA9IGAke3RoaXMuX3N0b3JhZ2VLZXl9X3Zpc2l0ZWRgO1xuICAgICAgICBsZXQgdmlzaXRlZCA9IHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbSh2aXNpdGVkU3RvcmFnZUtleSkgfHwgJyc7XG4gICAgICAgIGlmICh2aXNpdGVkLmluZGV4T2YodGhpcy5fc2l0ZUFwaUtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICB2aXNpdGVkICs9ICcsJyArIHRoaXMuX3NpdGVBcGlLZXk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RvcmFnZS5zZXRJdGVtKHZpc2l0ZWRTdG9yYWdlS2V5LCB2aXNpdGVkKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9tYXJrUmV2b2tlZExvZ2luVG9rZW4obG9naW5Ub2tlbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICghbG9naW5Ub2tlbikgcmV0dXJuO1xuICAgICAgICBjb25zdCBpbnZhbGlkVG9rZW5zU3RvcmFnZUtleSA9IGAke3RoaXMuX3N0b3JhZ2VLZXl9X3Jldm9rZWRfdG9rZW5zYDtcbiAgICAgICAgbGV0IGludmFsaWRUb2tlbnMgPSB0aGlzLl9zdG9yYWdlLmdldEl0ZW0oaW52YWxpZFRva2Vuc1N0b3JhZ2VLZXkpIHx8ICcnO1xuICAgICAgICBsZXQgYXJySW52YWxpZFRva2VucyA9IGludmFsaWRUb2tlbnMuc3BsaXQoJywnKTtcbiAgICAgICAgaWYgKGFyckludmFsaWRUb2tlbnMubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgLy9kZWxldGUgb25lIG9sZCByZXZva2VkIHRva2VuXG4gICAgICAgICAgICBhcnJJbnZhbGlkVG9rZW5zLnNwbGljZSgxLCAxKTsgLy8gZmlyc3QgZWxlbWVudCBpcyBhbHdheXMgZW1wdHlcbiAgICAgICAgfVxuICAgICAgICBpbnZhbGlkVG9rZW5zID0gYXJySW52YWxpZFRva2Vucy5qb2luKCcsJyk7XG4gICAgICAgIGlmIChpbnZhbGlkVG9rZW5zLmluZGV4T2YobG9naW5Ub2tlbikgPCAwKSB7XG4gICAgICAgICAgICBpbnZhbGlkVG9rZW5zICs9ICcsJyArIGxvZ2luVG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RvcmFnZS5zZXRJdGVtKGludmFsaWRUb2tlbnNTdG9yYWdlS2V5LCBpbnZhbGlkVG9rZW5zKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRMb2dvdXRVUkxzKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHZpc2l0ZWQgPSB0aGlzLl9zdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5fc3RvcmFnZUtleX1fdmlzaXRlZGApO1xuICAgICAgICBpZiAoIXZpc2l0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhckxvZ291dFVSTHMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzaXRlS2V5IGluIHRoaXMuX3Nzb0NvbmZpZy5sb2dvdXRVUkxzKSB7XG4gICAgICAgICAgICBpZiAodmlzaXRlZC5pbmRleE9mKCcsJyArIHNpdGVLZXkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGFyTG9nb3V0VVJMcy5wdXNoKHRoaXMuX3Nzb0NvbmZpZy5sb2dvdXRVUkxzW3NpdGVLZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJMb2dvdXRVUkxzLmpvaW4oJywnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jcmVhdGVLZXkobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke25hbWV9XyR7dGhpcy5fYXBpS2V5fSR7dGhpcy5fc3NvU2VnbWVudCA/IGBfJHt0aGlzLl9zc29TZWdtZW50fWAgOiAnJ31gO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3BhcnNlQ2FuYXJ5VmVyc2lvblNpZ25hdHVyZShjYW5hcnlWZXJzaW9uU2lnOiBzdHJpbmcpOiBDYW5hcnlWZXJzaW9uIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdERhdGEgPSB7YnVpbGQ6IDAsIHByb2JhYmlsaXR5OiAwLCB0aW1lc3RhbXA6IC0xfSBhcyBDYW5hcnlWZXJzaW9uO1xuICAgICAgICBpZiAoIWNhbmFyeVZlcnNpb25TaWcpIHJldHVybiBkZWZhdWx0RGF0YTtcbiAgICAgICAgY29uc3QgcGFydHMgPSBjYW5hcnlWZXJzaW9uU2lnLnNwbGl0KCctJyk7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdERhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ1aWxkOiBOdW1iZXIocGFydHNbMF0pLFxuICAgICAgICAgICAgcHJvYmFiaWxpdHk6IE51bWJlcihwYXJ0c1sxXSksXG4gICAgICAgICAgICB0aW1lc3RhbXA6IE51bWJlcihwYXJ0c1syXSksXG4gICAgICAgIH0gYXMgQ2FuYXJ5VmVyc2lvbjtcbiAgICB9XG59XG4iLCJpbXBvcnQge1VyaX0gZnJvbSBcInNyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9VcmlcIjtcbmltcG9ydCAqIGFzIHZhbGlkYXRpb25VdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvdmFsaWRhdGlvbic7XG5pbXBvcnQgR2xvYmFsUHJvdmlkZXIgZnJvbSBcIi4vZ2xvYmFsUHJvdmlkZXJcIjtcbmltcG9ydCB7Q29va2llU3RvcmFnZUFkYXB0ZXIsIGluaXRpYWxpemVBZGFwdGVyfSBmcm9tIFwic3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHtkZXNlcmlhbGl6ZX0gZnJvbSBcInNyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9rZXlWYWx1ZVwiO1xuaW1wb3J0IHtnZXRNYXggYXMgZ2V0TWF4R2x0RXhwLCBpc1ZhbGlkIGFzIGlzVmFsaWRHbHRFeHB9IGZyb20gXCJzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvZ2x0ZXhwXCI7XG5pbXBvcnQge1VSTERlY29kZVJlY3Vyc2l2ZX0gZnJvbSBcInNyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9VUkxcIjtcblxuY29uc3QgZGVmYXVsdFZhbGlkRG9tYWlucyA9IFsnZ2lneWEtYXBpLmNvbScsICdnaWd5YS1hcGkuY24nLCAnZ2lneWEuY29tJywgJ215LmdpZ3lhLWV4dC5jb20nLCAnbG9jYWxob3N0J107XG5cbmV4cG9ydCBjbGFzcyBTc29VdGlscyB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9nbG9iYWwgPSBHbG9iYWxQcm92aWRlciwgcHJpdmF0ZSBfZGVmYXVsdFZhbGlkRG9tYWlucyA9IGRlZmF1bHRWYWxpZERvbWFpbnMpIHt9XG5cbiAgICBnZXRQYWdlVXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nbG9iYWwuZG9jdW1lbnRMb2NhdGlvbigpLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzVmFsaWREb21haW4odmFsaWREb21haW5zOiBzdHJpbmdbXSwgY2FuZGlkYXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZG9tYWluID0gVXJpLnBhcnNlKGNhbmRpZGF0ZSkuZG9tYWluO1xuICAgICAgICBjb25zdCBhclZhbGlkRG9tYWlucyA9IHZhbGlkRG9tYWlucy5jb25jYXQodGhpcy5fZGVmYXVsdFZhbGlkRG9tYWlucyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJWYWxpZERvbWFpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkRG9tYWluID0gYXJWYWxpZERvbWFpbnNbaV0ucmVwbGFjZSgnKicsICcnKS5zcGxpdCgnOicpWzBdO1xuICAgICAgICAgICAgY29uc3QgaW5kZXhPZlZhbGlkRG9tYWluID0gZG9tYWluLmluZGV4T2YodmFsaWREb21haW4pO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGluZGV4T2ZWYWxpZERvbWFpbiA+PSAwICYmXG4gICAgICAgICAgICAgICAgaW5kZXhPZlZhbGlkRG9tYWluID09PSBkb21haW4ubGVuZ3RoIC0gdmFsaWREb21haW4ubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgKGluZGV4T2ZWYWxpZERvbWFpbiA9PT0gMCB8fCBkb21haW4uY2hhckF0KGluZGV4T2ZWYWxpZERvbWFpbiAtIDEpID09PSAnLicgfHwgZG9tYWluLmNoYXJBdChpbmRleE9mVmFsaWREb21haW4gLSAxKSA9PT0gJy8nKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kTWVzc2FnZShyZXM6IE9iamVjdCwgY2FsbGJhY2tJRDogc3RyaW5nLCByZXF1ZXN0RG9tYWluOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbGV0IHN0ck1lc3NhZ2UgPSAnJztcbiAgICAgICAgZm9yIChjb25zdCBwIGluIHJlcykge1xuICAgICAgICAgICAgaWYgKHJlc1twXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3RyTWVzc2FnZSArPSBlc2NhcGUocCArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChyZXNbcF0pICsgJyYnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9nbG9iYWwucG9zdE1lc3NhZ2VUb1BhcmVudChjYWxsYmFja0lEICsgJz0nICsgc3RyTWVzc2FnZSwgcmVxdWVzdERvbWFpbik7XG4gICAgfVxuXG4gICAgcHVibGljIGlzVmFsaWRHbHRFeHAoZ2x0RXhwOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGlzVmFsaWRHbHRFeHAoZ2x0RXhwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TWF4R2x0RXhwKGdsdEV4cDE6IHN0cmluZywgZ2x0RXhwMjogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBnZXRNYXhHbHRFeHAoZ2x0RXhwMSwgZ2x0RXhwMik7XG4gICAgfVxuXG4gICAgcHVibGljIGRlY29kZVVybCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFVSTERlY29kZVJlY3Vyc2l2ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc2VyaWFsaXplKHZhbHVlOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICByZXR1cm4gZGVzZXJpYWxpemUodmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb29raWVzU3RvcmFnZSgpIHtcbiAgICAgICAgcmV0dXJuIGluaXRpYWxpemVBZGFwdGVyKENvb2tpZVN0b3JhZ2VBZGFwdGVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmFsaWRhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0aW9uVXRpbHM7XG4gICAgfVxuXG4gICAgcHVibGljIFVyaUZhY3RvcnkodXJsOiBzdHJpbmcsIGlzQWJzb2x1dGUgPSB0cnVlKTogVXJpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVcmkodXJsLCBpc0Fic29sdXRlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RnJhZ21lbnQoKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VVUkwgPSB0aGlzLmdldFBhZ2VVcmwoKTtcblxuICAgICAgICBpZiAocGFnZVVSTC5pbmRleE9mKCcjJykgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFnZVVSTC5zcGxpdCgnIycpWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0VGVtcGxhdGVzIH0gZnJvbSAnc3JjL3V0aWxzL0dpZ3lhLkpzLlBsdWdpbnMuRGVidWcvYXBwL1RlbXBsYXRlcyc7XG5pbXBvcnQgeyBNZXNzYWdpbmdNZXRob2QgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvSW50ZXJuYWxGbG93cyc7XG5pbXBvcnQgeyBkZWZhdWx0Q3NzIH0gZnJvbSAnc3JjL3V0aWxzL0dpZ3lhLkpzLlBsdWdpbnMuRGVidWcvYXBwL0RlZmF1bHRDc3MnO1xuaW1wb3J0IHtGbGFnU2VydmljZX0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1NlcnZpY2VzL0ZsYWdTZXJ2aWNlJztcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XG50eXBlIEpRdWVyeSA9IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBMb2dFbnRyeSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBodG1sPzogc3RyaW5nO1xuICAgIGNsYXNzTmFtZT86IHN0cmluZztcbiAgICBkYXRhPzogT2JqZWN0O1xuICAgIHRpbWU6IERhdGU7XG4gICAgZXJyb3I/OiBib29sZWFuO1xufVxuXG5jb25zdCBnaWdEZWJ1Z0Nvb2tpZUtleSA9ICdnaWdfZGVidWcnO1xuXG5leHBvcnQgY2xhc3MgRGVidWdQbHVnaW4ge1xuICAgIHByaXZhdGUgJGNvbnRhaW5lcjogSlF1ZXJ5O1xuICAgIHB1YmxpYyB0ZW1wbGF0ZXM6IE9iamVjdCA9IGdpZ3lhLnV0aWxzLm9iamVjdC5jbG9uZShkZWZhdWx0VGVtcGxhdGVzLCBmYWxzZSk7XG4gICAgcHJpdmF0ZSBhZGRlZENzczogYm9vbGVhbjtcblxuICAgIHByaXZhdGUgaGlzdG9yeTogTG9nRW50cnlbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSAkdXNlcjogSlF1ZXJ5O1xuICAgIHByaXZhdGUgJGxhc3RMb2dFbnRyeTogSlF1ZXJ5O1xuICAgIHByaXZhdGUgJGFwaUtleTogSlF1ZXJ5O1xuICAgIHByaXZhdGUgJGhpc3RvcnlCdXR0b246IEpRdWVyeTtcbiAgICBwcml2YXRlICRoaXN0b3J5OiBKUXVlcnk7XG4gICAgcHJpdmF0ZSAkc2F2ZUNoZWNrYm94OiBKUXVlcnk7XG4gICAgcHJpdmF0ZSAkaGlkZUJ1dHRvbjogSlF1ZXJ5O1xuICAgIHByaXZhdGUgJGJhckNvbnRhaW5lcjogSlF1ZXJ5O1xuICAgIHByaXZhdGUgJGRldGFpbHM6IEpRdWVyeTtcbiAgICBwcml2YXRlICRkZXRhaWxzQnV0dG9uOiBKUXVlcnk7XG4gICAgcHJpdmF0ZSBjdXJyZW50VXNlcjogT2JqZWN0O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHBhcmFtczogT2JqZWN0LCBwcml2YXRlIHJlZlN0cmluZzogc3RyaW5nKSB7XG4gICAgICAgIGdpZ3lhLl8uaGlzdG9yeSA9IHRoaXMuaGlzdG9yeTtcbiAgICAgICAgZ2lneWEudXRpbHMuc2NyaXB0LmxvYWQoZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL3dlYlNESy9sYXRlc3QvRXh0ZXJuYWwvanF1ZXJ5LTEuMTEuMS5taW4uanMnKSwgbnVsbCwgKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93WyckJ10gPSBqUXVlcnkubm9Db25mbGljdCh0cnVlKTtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLmZ1bmN0aW9ucy5jcmVhdGVBbGlhcygnZ2lneWEuZGVidWcuYWRkTG9nJywgbG9nID0+IHRoaXMuYWRkTG9nKGxvZykpO1xuICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLmluaXRVSSgpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgICAgICBnaWd5YS5ldmVudHMuZGlzcGF0Y2hGb3JXaWRnZXQoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWU6ICdsb2FkJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgZ2lneWEuZXZlbnRzLmFkZE1hcCh7XG4gICAgICAgICAgICBkZWZhdWx0TWV0aG9kOiBlID0+IHRoaXMub25FdmVudChlKSxcbiAgICAgICAgICAgIGV2ZW50TWFwOiBbeyBldmVudHM6ICcqJywgYXJnczogWyckZXZlbnQnXSB9XSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIG9uVXNlckV2ZW50ID0gZSA9PiB0aGlzLnVwZGF0ZVVzZXIoZSk7XG5cbiAgICAgICAgZ2lneWEuc29jaWFsaXplLmFkZEV2ZW50SGFuZGxlcnMoe1xuICAgICAgICAgICAgb25Mb2dpbjogb25Vc2VyRXZlbnQsXG4gICAgICAgICAgICBvbkxvZ291dDogb25Vc2VyRXZlbnQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGpzb24yaHRtbChqc29uOiBPYmplY3QsIGhpZGRlbjogYm9vbGVhbiwgbDogbnVtYmVyID0gMCk6IEpRdWVyeSB7XG4gICAgICAgIHZhciBkaXYgPSAkKCc8ZGl2PjwvZGl2PicpO1xuICAgICAgICB2YXIgZGl2RGF0YU9iamVjdCA9ICQoJzxkaXYgY2xhc3M9XCJnaWctZGVidWctZGF0YS1kZXRhaWxzLW9iamVjdFwiPjwvZGl2PicpLmFwcGVuZFRvKGRpdik7XG4gICAgICAgIHZhciB1bCA9ICQoJzx1bD48L3VsPicpO1xuICAgICAgICBpZiAoaGlkZGVuKSB7XG4gICAgICAgICAgICBkaXYuYWRkQ2xhc3MoJ2dpZy1kZWJ1Zy1kYXRhLWRldGFpbHMtY2xvc2VkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZGl2RGF0YU9iamVjdC5hcHBlbmQodWwpO1xuICAgICAgICBmb3IgKHZhciBpIGluIGpzb24pIHtcbiAgICAgICAgICAgIGlmIChqc29uLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpID0gJCgnPGxpPjwvbGk+JykuYXBwZW5kVG8odWwpO1xuICAgICAgICAgICAgICAgIHZhciBwcm9wTmFtZUVsZW1lbnQgPSAkKCc8c3BhbiBjbGFzcz1cImdpZy1kZWJ1Zy1wcm9wZXJ0eU5hbWVcIj48L3NwYW4+Jyk7XG4gICAgICAgICAgICAgICAgcHJvcE5hbWVFbGVtZW50LnRleHQoaSArICc6Jyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcHJvcFZhbHVlRWxlbWVudCA9ICQoJzxzcGFuIGNsYXNzPVwiZ2lnLWRlYnVnLXByb3BlcnR5VmFsdWVcIj48L3NwYW4+Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGpzb25baV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqc29uW2ldID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BWYWx1ZUVsZW1lbnQudGV4dCgnW05VTExdJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobCA+IDYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BWYWx1ZUVsZW1lbnQudGV4dCgnVG9vIG11Y2ggcmVjdXJzaW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqZWN0QnV0dG9uID0gJCgnPGRpdiBjbGFzcz1cImdpZy1kZWJ1Zy1kYXRhLWRldGFpbHMtb3BlbkJ1dHRvblwiPnsgfTwvZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsRGF0YSA9IHRoaXMuanNvbjJodG1sKGpzb25baV0sIHRydWUsIGwgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEJ1dHRvbi5wcm9wKCdlbERhdGEnLCBlbERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcFZhbHVlRWxlbWVudC5hcHBlbmQob2JqZWN0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BWYWx1ZUVsZW1lbnQuYXBwZW5kKGVsRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBqc29uW2ldID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcFZhbHVlRWxlbWVudC50ZXh0KCdbRlVOQ1RJT05dJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcFZhbHVlRWxlbWVudC50ZXh0KGpzb25baV0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxpLmFwcGVuZChwcm9wTmFtZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGxpLmFwcGVuZChwcm9wVmFsdWVFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cblxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5nZXRVc2VySW5mbyh0aGlzLnBhcmFtcywge1xuICAgICAgICAgICAgY2FsbGJhY2s6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VyKHJlcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkV2ZW50KGUpIHtcbiAgICAgICAgdmFyIGxvZzogTG9nRW50cnkgPSB7XG4gICAgICAgICAgICBpZDogbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAnXycgKyBNYXRoLnJhbmRvbSgpLFxuICAgICAgICAgICAgZGF0YTogeyBldmVudDogZSB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBlLmV2ZW50TmFtZSxcbiAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKCksXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGUuZXZlbnROYW1lID09ICdhZnRlclJlc3BvbnNlJykge1xuICAgICAgICAgICAgaWYgKGUucmVzcG9uc2UuZXJyb3JDb2RlICE9IDApIHtcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nLmh0bWwgPVxuICAgICAgICAgICAgICAgICdHb3QgY2FsbGJhY2sgZm9yIDxzcGFuIGRhdGEtcHJvcD1cImV2ZW50XCI+JyArXG4gICAgICAgICAgICAgICAgZS5tZXRob2ROYW1lICtcbiAgICAgICAgICAgICAgICAnPC9zcGFuPicgK1xuICAgICAgICAgICAgICAgIChlLnNvdXJjZSA/ICcgKHNvdXJjZT0nICsgZS5zb3VyY2UgKyAnLCBlcnJvckNvZGU9JyArIGUucmVzcG9uc2UuZXJyb3JDb2RlICsgJyknIDogJycpO1xuICAgICAgICB9IGVsc2UgaWYgKGUuZXZlbnROYW1lID09ICdiZWZvcmVSZXF1ZXN0Jykge1xuICAgICAgICAgICAgbG9nLmh0bWwgPSAnQ2FsbGluZyA8c3BhbiBkYXRhLXByb3A9XCJldmVudFwiPicgKyBlLm1ldGhvZE5hbWUgKyAnPC9zcGFuPicgKyAoZS5zb3VyY2UgPyAnIChzb3VyY2U9JyArIGUuc291cmNlICsgJyknIDogJycpO1xuICAgICAgICB9IGVsc2UgaWYgKGUuZXZlbnROYW1lID09ICdiZWZvcmVQbHVnaW5SZXF1ZXN0Jykge1xuICAgICAgICAgICAgbG9nLmh0bWwgPVxuICAgICAgICAgICAgICAgICdDYWxsaW5nIFVJIHBsdWdpbiA8c3BhbiBkYXRhLXByb3A9XCJldmVudFwiPicgK1xuICAgICAgICAgICAgICAgIGUubWV0aG9kTmFtZSArXG4gICAgICAgICAgICAgICAgJzwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAoZS5zb3VyY2UgJiYgZS5zb3VyY2UgIT0gZS5tZXRob2ROYW1lXG4gICAgICAgICAgICAgICAgICAgID8gJyAoc291cmNlPScgKyBlLnNvdXJjZSArICcpJ1xuICAgICAgICAgICAgICAgICAgICA6IGUucGFyYW1zICYmIGUucGFyYW1zLmNvbnRhaW5lcklEXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICcgKCcgKyBlLnBhcmFtcy5jb250YWluZXJJRCArICcpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2cuaHRtbCA9XG4gICAgICAgICAgICAgICAgKGUuaXNHbG9iYWwgPyAnR2xvYmFsIGV2ZW50JyA6ICdFdmVudCcpICtcbiAgICAgICAgICAgICAgICAnJm5ic3A7PHNwYW4gZGF0YS1wcm9wPVwiZXZlbnRcIj4nICtcbiAgICAgICAgICAgICAgICAoZS5mdWxsRXZlbnROYW1lIHx8IGUuZXZlbnROYW1lKSArXG4gICAgICAgICAgICAgICAgJzwvc3Bhbj4gZmlyZWQnICtcbiAgICAgICAgICAgICAgICAoZS5zb3VyY2UgPyAnIChzb3VyY2U9JyArIGUuc291cmNlICsgJyknIDogJycpO1xuICAgICAgICAgICAgbG9nLmRhdGFbJ2V2ZW50J10gPSBlO1xuICAgICAgICAgICAgaWYgKGUuZXZlbnROYW1lID09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkTG9nKGxvZyk7XG4gICAgfVxuXG4gICAgdXBkYXRlVXNlcihyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UudXNlcikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHJlc3BvbnNlLnVzZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLlVJRCkge1xuICAgICAgICAgICAgdGhpcy4kdXNlci5hZGRDbGFzcygnZ2lnLWRlYnVnLXVzZXItbG9nZ2VkSW4nKTtcbiAgICAgICAgICAgIHRoaXMuJHVzZXIuaHRtbChcbiAgICAgICAgICAgICAgICAnTG9nZ2VkIGluIGFzICcgKyAocmVzcG9uc2UudXNlci5uaWNrbmFtZSB8fCAocmVzcG9uc2UudXNlci5maXJzdE5hbWUgfHwgJycgKyAnICcgKyByZXNwb25zZS51c2VyLmxhc3ROYW1lIHx8ICcnKSkgKyAnICgnICsgcmVzcG9uc2UuVUlEICsgJyknLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHVzZXIucmVtb3ZlQ2xhc3MoJ2dpZy1kZWJ1Zy11c2VyLWxvZ2dlZEluJyk7XG4gICAgICAgICAgICB0aGlzLiR1c2VyLmh0bWwoJ0xvZ2dlZCBvdXQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZExvZyhsb2c6IExvZ0VudHJ5KSB7XG4gICAgICAgIGxvZy5kYXRhID0gZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKGxvZy5kYXRhLCBmYWxzZSwgZmFsc2UsIDYpO1xuICAgICAgICB0aGlzLiRsYXN0TG9nRW50cnkuZW1wdHkoKTtcbiAgICAgICAgdmFyICRlbnRyeSA9IHRoaXMuZ2V0TG9nRW50cnlFbGVtZW50KGxvZyk7XG4gICAgICAgIHRoaXMuJGxhc3RMb2dFbnRyeS5hcHBlbmQoJGVudHJ5KTtcblxuICAgICAgICB0aGlzLmhpc3RvcnkucHVzaChsb2cpO1xuXG4gICAgICAgIGlmICghdGhpcy4kaGlzdG9yeSkgcmV0dXJuO1xuICAgICAgICB2YXIgZGl2TG9nID0gdGhpcy5nZXRMb2dFbnRyeUVsZW1lbnQobG9nKTtcbiAgICAgICAgdGhpcy4kaGlzdG9yeS5hcHBlbmQoZGl2TG9nKTtcbiAgICAgICAgdGhpcy4kaGlzdG9yeS5zY3JvbGxUb3AodGhpcy4kaGlzdG9yeS5nZXQoMCkuc2Nyb2xsSGVpZ2h0KTtcbiAgICB9XG5cbiAgICBjbGVhckhpc3RvcnkoKSB7XG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IFtdO1xuICAgICAgICB0aGlzLiRoaXN0b3J5LmVtcHR5KCk7XG4gICAgfVxuXG4gICAgZ2V0TG9nKGlkOiBzdHJpbmcpOiBMb2dFbnRyeSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oaXN0b3J5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oaXN0b3J5W2ldLmlkID09IGlkKSByZXR1cm4gdGhpcy5oaXN0b3J5W2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TG9nRW50cnlFbGVtZW50KGxvZzogTG9nRW50cnkpOiBKUXVlcnkge1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gJ2dpZy1kZWJ1Zy1oaXN0b3J5LWVudHJ5JztcbiAgICAgICAgdmFyICRsb2cgPSAkKCc8ZGl2PjwvZGl2PicpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2dpZy1kZWJ1Zy1oaXN0b3J5LWVudHJ5JylcbiAgICAgICAgICAgIC5hdHRyKCdkYXRhLWxvZy1pZCcsIGxvZy5pZClcbiAgICAgICAgICAgIC5odG1sKCc8c3BhbiBjbGFzcz1cImdpZy1kZWJ1Zy10aW1lc3RhbXBcIj5bJyArIGxvZy50aW1lLnRvTG9jYWxlVGltZVN0cmluZygpICsgJ108L3NwYW4+JyArIGxvZy5odG1sKTtcbiAgICAgICAgaWYgKGxvZy5jbGFzc05hbWUpICRsb2cuYWRkQ2xhc3MoJ2dpZy1kZWJ1Zy1oaXN0b3J5LWVudHJ5LScgKyBsb2cuY2xhc3NOYW1lKTtcblxuICAgICAgICBpZiAobG9nLmVycm9yKSAkbG9nLmFkZENsYXNzKCdnaWctZGVidWctaGlzdG9yeS1lbnRyeS1lcnJvcicpO1xuXG4gICAgICAgICRsb2cuZmluZCgnW2RhdGEtcHJvcF0nKS5jbGljayhlID0+IHRoaXMub25EYXRhUHJvcENsaWNrKGUpKTtcbiAgICAgICAgcmV0dXJuICRsb2c7XG4gICAgfVxuXG4gICAgb25EYXRhUHJvcENsaWNrKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgdmFyIG9wZW5lciA9IChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgdmFyIGxvZ0lkID0gb3BlbmVyLmdldEF0dHJpYnV0ZSgnZGF0YS1sb2ctaWQnKTtcbiAgICAgICAgdmFyIHByb3AgPSAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9wJyk7XG4gICAgICAgIHZhciBsb2cgPSB0aGlzLmdldExvZyhsb2dJZCk7XG4gICAgICAgIGlmIChsb2cuZGF0YVtwcm9wXSkgdGhpcy5zaG93RGV0YWlscyhsb2cuZGF0YVtwcm9wXSwgZS50YXJnZXQpO1xuICAgIH1cblxuICAgIHNob3dEZXRhaWxzKGRhdGEsIG9wZW5lcj8pIHtcbiAgICAgICAgaWYgKHRoaXMuJGRldGFpbHMpIHRoaXMuJGRldGFpbHMucmVtb3ZlKCk7XG4gICAgICAgICQoJy5naWctZGVidWctc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnZ2lnLWRlYnVnLXNlbGVjdGVkJyk7XG4gICAgICAgIGlmIChvcGVuZXIpICQob3BlbmVyKS5hZGRDbGFzcygnZ2lnLWRlYnVnLXNlbGVjdGVkJyk7XG4gICAgICAgIHZhciBlbERhdGFDb250YWluZXIgPSAkKCc8ZGl2IGNsYXNzPVwiZ2lnLWRlYnVnLWNvbnRhaW5lciBnaWctZGVidWctZGF0YS1kZXRhaWxzXCI+PC9kaXY+Jyk7XG4gICAgICAgIHRoaXMuJGRldGFpbHMgPSBlbERhdGFDb250YWluZXI7XG4gICAgICAgIGVsRGF0YUNvbnRhaW5lci5jc3Moe1xuICAgICAgICAgICAgdG9wOiB0aGlzLiRiYXJDb250YWluZXIuaGVpZ2h0KCkgKyA1LFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGVsRGF0YSA9IHRoaXMuanNvbjJodG1sKGRhdGEsIGZhbHNlKTtcbiAgICAgICAgZWxEYXRhLmZpbmQoJy5naWctZGVidWctZGF0YS1kZXRhaWxzLW9wZW5CdXR0b24nKS5jbGljayhlID0+IHtcbiAgICAgICAgICAgIHZhciBidG4gPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgICAgIHZhciBlbERhdGEgPSBidG4ucHJvcCgnZWxEYXRhJyk7XG4gICAgICAgICAgICBlbERhdGEudG9nZ2xlQ2xhc3MoJ2dpZy1kZWJ1Zy1kYXRhLWRldGFpbHMtY2xvc2VkJyk7XG4gICAgICAgICAgICBlbERhdGEudG9nZ2xlQ2xhc3MoJ2dpZy1kZWJ1Zy1kYXRhLWRldGFpbHMtb3BlbicpO1xuICAgICAgICAgICAgYnRuLnRvZ2dsZUNsYXNzKCdnaWctZGVidWctZGF0YS1kZXRhaWxzLXByZXNzZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsRGF0YUNvbnRhaW5lci5hcHBlbmQoZWxEYXRhKTtcbiAgICAgICAgZWxEYXRhQ29udGFpbmVyLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpO1xuICAgIH1cblxuICAgIGdldEluZm8oKSB7XG4gICAgICAgIHZhciBvSW5mbyA9IHtcbiAgICAgICAgICAgIEFQSToge1xuICAgICAgICAgICAgICAgICdBUEkgZG9tYWluJzogZ2lneWEucGFydG5lclNldHRpbmdzLnBsdWdpbnNbJ2FwaURvbWFpbiddLFxuICAgICAgICAgICAgICAgICdBUEkgYWRhcHRlcic6IGdpZ3lhLl8uYXBpQWRhcHRlci5uYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdzb2NpYWxpemUuanMnOiB7XG4gICAgICAgICAgICAgICAgZW52aXJvbm1lbnQ6IGdpZ3lhLmRhdGFDZW50ZXIsXG4gICAgICAgICAgICAgICAgYnVpbGQ6IGdpZ3lhLmJ1aWxkLFxuICAgICAgICAgICAgICAgICdpbml0IHRpbWUnOiBnaWd5YS5sb2NhbEluZm8uaW5pdFRpbWUudG9Mb2NhbGVTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAnQVBJIGtleSc6IGdpZ3lhLnRoaXNTY3JpcHQuQVBJS2V5LFxuICAgICAgICAgICAgICAgICdnbG9iYWwgY29uZic6IGdpZ3lhLnRoaXNTY3JpcHQuZ2xvYmFsQ29uZixcbiAgICAgICAgICAgICAgICBsYW5ndWFnZTogZ2lneWEudGhpc1NjcmlwdC5sYW5nLFxuICAgICAgICAgICAgICAgICdVUkwgcGFyYW1zJzogZ2lneWEudGhpc1NjcmlwdC5VUkxQYXJhbXMsXG4gICAgICAgICAgICAgICAgJ2Jhc2UgVVJMJzogZ2lneWEudGhpc1NjcmlwdC5iYXNlRG9tYWluLFxuICAgICAgICAgICAgICAgICdmb3VuZCBzY3JpcHQgZWxlbWVudCc6IGdpZ3lhLnRoaXNTY3JpcHQuc2NyaXB0RWxlbWVudCAhPSBudWxsLFxuICAgICAgICAgICAgICAgICdzZXJ2aWNlIHF1ZXVlcyc6IGdpZ3lhLnV0aWxzLnF1ZXVlLl9zZXJ2aWNlc1N0YXR1cygpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvbWFpbjoge1xuICAgICAgICAgICAgICAgICdwYWdlIGRvbWFpbic6IGdpZ3lhLmxvY2FsSW5mby5wYWdlRG9tYWluLFxuICAgICAgICAgICAgICAgICdiYXNlIGRvbWFpbic6IGdpZ3lhLmxvY2FsSW5mby5iYXNlRG9tYWluLFxuICAgICAgICAgICAgICAgICdiYXNlIGRvbWFpbnMgbGlzdCc6IGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5iYXNlRG9tYWlucyxcbiAgICAgICAgICAgICAgICBjbmFtZTogZ2lneWEucGFydG5lclNldHRpbmdzLmNuYW1lIHx8ICdOL0EnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFNTTzoge1xuICAgICAgICAgICAgICAgIGtleTogZ2lneWEucGFydG5lclNldHRpbmdzLnNzb0tleSB8fCAnTi9BJyxcbiAgICAgICAgICAgICAgICAnbG9nb3V0IFVSTCc6IGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5zc29Mb2dvdXRVcmwgfHwgJ04vQScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJvd3Nlcjoge1xuICAgICAgICAgICAgICAgICd1c2VyIGFnZW50JzogZ2lneWEubG9jYWxJbmZvLnVzZXJBZ2VudCxcbiAgICAgICAgICAgICAgICAnd2luZG93IG1lc3NhZ2luZyBtZXRob2QnOiBNZXNzYWdpbmdNZXRob2RbZ2lneWEubG9jYWxJbmZvWydtZXNzYWdpbmdNZXRob2QnXV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJzNyZCBwYXJ0eSBpbnRlZ3JhdGlvbnMnOiB7XG4gICAgICAgICAgICAgICAgZmFjZWJvb2s6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2FwcCBJRCc6IChnaWd5YS5wcm92aWRlcnNDb25maWcuZmFjZWJvb2sgJiYgZ2lneWEucHJvdmlkZXJzQ29uZmlnLmZhY2Vib29rLmFwcElEKSB8fCAnTi9BJyxcbiAgICAgICAgICAgICAgICAgICAgJ2luaXRpYWxpemVkIHRpbWUnOiBnaWd5YS5leHRlcm5hbC5mYWNlYm9vay5pbml0aWFsaXplZFRpbWUgPyBnaWd5YS5leHRlcm5hbC5mYWNlYm9vay5pbml0aWFsaXplZFRpbWUudG9Mb2NhbGVUaW1lU3RyaW5nKCkgOiAnTi9BJyxcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGVkOiBnaWd5YS5leHRlcm5hbC5mYWNlYm9vay5pc0Nvbm5lY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgJ2xvZ2dlZCBpbic6IGdpZ3lhLmV4dGVybmFsLmZhY2Vib29rLmlzTG9nZ2VkSW4sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZGVmYXVsdCBwbHVnaW4gcGFyYW1zJzogZ2lneWEucGFydG5lclNldHRpbmdzLnBsdWdpbnMsXG4gICAgICAgICAgICAnbG9jYWwgaW5mbyc6IGdpZ3lhLmxvY2FsSW5mbyxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gb0luZm87XG4gICAgfVxuXG4gICAgaW5pdFVJKCkge1xuICAgICAgICB0aGlzLiRjb250YWluZXIgPSAkKCcjJyArIHRoaXMucGFyYW1zWydjb250YWluZXJJRCddKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdnaWctZGVidWctY29udGFpbmVyJylcbiAgICAgICAgICAgIC5odG1sKHRoaXMudGVtcGxhdGVzWydkZWJ1Z0JhciddKTtcblxuICAgICAgICB0aGlzLiRiYXJDb250YWluZXIgPSB0aGlzLiRjb250YWluZXIuZmluZCgnLmdpZy1kZWJ1Zy1iYXItY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuJGxhc3RMb2dFbnRyeSA9IHRoaXMuJGNvbnRhaW5lci5maW5kKCcuZ2lnLWRlYnVnLWxhc3RMb2cnKTtcbiAgICAgICAgdGhpcy4kdXNlciA9IHRoaXMuJGNvbnRhaW5lci5maW5kKCcuZ2lnLWRlYnVnLXVzZXInKTtcbiAgICAgICAgdGhpcy4kdXNlci5jbGljayhlID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRVc2VyICYmIHRoaXMuY3VycmVudFVzZXJbJ1VJRCddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RGV0YWlscyh0aGlzLmN1cnJlbnRVc2VyLCB0aGlzLiR1c2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJGFwaUtleSA9IHRoaXMuJGNvbnRhaW5lclxuICAgICAgICAgICAgLmZpbmQoJy5naWctZGVidWctYXBpa2V5JylcbiAgICAgICAgICAgIC52YWwoZ2lneWEudGhpc1NjcmlwdC5BUElLZXkpXG4gICAgICAgICAgICAuY2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwaUtleS5zZWxlY3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLiRoaXN0b3J5QnV0dG9uID0gdGhpcy4kY29udGFpbmVyLmZpbmQoJy5naWctZGVidWctaGlzdG9yeUJ1dHRvbicpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGhpc3Rvcnkuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJGRldGFpbHNCdXR0b24gPSB0aGlzLiRjb250YWluZXIuZmluZCgnLmdpZy1kZWJ1Zy1kZXRhaWxzQnV0dG9uJykuY2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGRldGFpbHMpIHRoaXMuJGRldGFpbHMuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJHNhdmVDaGVja2JveCA9IHRoaXMuJGNvbnRhaW5lclxuICAgICAgICAgICAgLmZpbmQoJy5naWctZGVidWctYXV0b2xvYWQnKVxuICAgICAgICAgICAgLmF0dHIoJ2NoZWNrZWQnLCBnaWd5YS51dGlscy5jb29raWUuZ2V0KGdpZ0RlYnVnQ29va2llS2V5KSA9PSAnMScpXG4gICAgICAgICAgICAuY2hhbmdlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoRmxhZ1NlcnZpY2Uuc2V0Q29va2llU2FtZVNpdGVMYXhMb3dQcmlvcml0eSkge1xuICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5jb29raWUuc2V0KGdpZ0RlYnVnQ29va2llS2V5LCB0aGlzLnNob3VsZFNhdmVBc1N0cmluZygpLCBudWxsLCBudWxsLCBudWxsLCAnTGF4Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuY29va2llLnNldChnaWdEZWJ1Z0Nvb2tpZUtleSwgdGhpcy5zaG91bGRTYXZlQXNTdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJGhpZGVCdXR0b24gPSB0aGlzLiRjb250YWluZXIuZmluZCgnLmdpZy1kZWJ1Zy1oaWRlQnV0dG9uJykuY2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kaGlzdG9yeS5zbGlkZVVwKCk7XG4gICAgICAgICAgICBpZiAodGhpcy4kZGV0YWlscykgdGhpcy4kZGV0YWlscy5zbGlkZVVwKCk7XG4gICAgICAgICAgICB0aGlzLiRiYXJDb250YWluZXIuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGluZm9CdXR0b24gPSB0aGlzLiRjb250YWluZXIuZmluZCgnLmdpZy1kZWJ1Zy1pbmZvQnV0dG9uJyk7XG4gICAgICAgIGluZm9CdXR0b24uY2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93RGV0YWlscyh0aGlzLmdldEluZm8oKSwgaW5mb0J1dHRvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5maW5kKCcuZ2lnLWRlYnVnLWltcG9ydFRleHQnKS5jbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmltcG9ydEpzb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kY29udGFpbmVyLmZpbmQoJy5naWctZGVidWctaW1wb3J0JykuY2hhbmdlKGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkZpbGVTZWxlY3RlZCgoZS50YXJnZXQgYXMgYW55KS5maWxlcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5maW5kKCcuZ2lnLWRlYnVnLWV4cG9ydEJ1dHRvbicpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXhwb3J0SnNvbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRjb250YWluZXIuZmluZCgnLmdpZy1kZWJ1Zy1jbGVhckJ1dHRvbicpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJBbGwoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGNzc1ByZWZpeCA9IHRoaXMucGFyYW1zWydjc3NQcmVmaXgnXTtcbiAgICAgICAgaWYgKGNzc1ByZWZpeCB8fCAhdGhpcy5hZGRlZENzcykge1xuICAgICAgICAgICAgZ2lneWEuXy5wbHVnaW5zLnV0aWxzLmNzcy5hZGRDc3MoZGVmYXVsdENzcy5yZXNldCwgY3NzUHJlZml4KTtcbiAgICAgICAgICAgIHZhciBmaXhlZENzcyA9IGdpZ3lhLnBsdWdpblV0aWxzLmNzcy5maXhDc3MoZGVmYXVsdENzcy5nbG9iYWwpO1xuICAgICAgICAgICAgZ2lneWEuXy5wbHVnaW5zLnV0aWxzLmNzcy5hZGRDc3MoZml4ZWRDc3MsIGNzc1ByZWZpeCk7XG4gICAgICAgICAgICB0aGlzLmFkZGVkQ3NzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRjb250YWluZXIuYWRkQ2xhc3MoJ2dpZy1kZWJ1Zy1jb250YWluZXInKTtcblxuICAgICAgICB0aGlzLiRoaXN0b3J5ID0gKHRoaXMuJGhpc3RvcnkgfHwgJCgnPGRpdj48L2Rpdj4nKSlcbiAgICAgICAgICAgIC5hZGRDbGFzcygnZ2lnLWRlYnVnLWNvbnRhaW5lcicpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2dpZy1kZWJ1Zy1oaXN0b3J5JylcbiAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICAgIHRvcDogdGhpcy4kY29udGFpbmVyLm9mZnNldCgpLnRvcCArIHRoaXMuJGJhckNvbnRhaW5lci5oZWlnaHQoKSArIDUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFwcGVuZFRvKGRvY3VtZW50LmJvZHkpXG4gICAgICAgICAgICAuaGlkZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvdWxkU2F2ZUFzU3RyaW5nKCk6ICcxJyB8ICcwJyB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzYXZlQ2hlY2tib3guaXMoJzpjaGVja2VkJykgPyAnMScgOiAnMCdcbiAgICB9XG5cbiAgICBpbXBvcnRKc29uKCkge1xuICAgICAgICB2YXIgYnRuID0gdGhpcy4kY29udGFpbmVyLmZpbmQoJy5naWctZGVidWctaW1wb3J0QnV0dG9uJyk7XG4gICAgICAgIGJ0bi5hZGRDbGFzcygnZ2lnLWRlYnVnLWltcG9ydC1zaG93bicpO1xuICAgIH1cblxuICAgIG9uRmlsZVNlbGVjdGVkKGZpbGVzKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IHRoaXMuJGNvbnRhaW5lci5maW5kKCcuZ2lnLWRlYnVnLWltcG9ydCcpO1xuICAgICAgICB2YXIgYnRuID0gdGhpcy4kY29udGFpbmVyLmZpbmQoJy5naWctZGVidWctaW1wb3J0QnV0dG9uJyk7XG4gICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICAgICQocmVhZGVyKS5sb2FkKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHZhciBmaWxlID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgICAgICB0aGlzLmNsZWFyQWxsKCk7XG4gICAgICAgICAgICBpZiAodGhpcy4kZGV0YWlscykgdGhpcy4kZGV0YWlscy5zbGlkZVVwKCk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIG9JbXBvcnQgPSBKU09OLnBhcnNlKChmaWxlIGFzIGFueSkucmVzdWx0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZExvZyh7XG4gICAgICAgICAgICAgICAgICAgIGh0bWw6ICc9PT0gSW1wb3J0aW5nIDxzcGFuIGRhdGEtcHJvcD1cImluZm9cIj4nICsgaW5wdXQudmFsKCkgKyAnPC9zcGFuPiA9PT0nLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGluZm86IG9JbXBvcnQuaW5mbyB9LFxuICAgICAgICAgICAgICAgICAgICBpZDogbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAnXycgKyBNYXRoLnJhbmRvbSgpLFxuICAgICAgICAgICAgICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvSW1wb3J0Lmhpc3RvcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvZyA9IG9JbXBvcnQuaGlzdG9yeVtpXTtcbiAgICAgICAgICAgICAgICAgICAgbG9nLnRpbWUgPSBuZXcgRGF0ZShsb2cudGltZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkTG9nKGxvZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ0bi5yZW1vdmVDbGFzcygnZ2lnLWRlYnVnLWltcG9ydC1zaG93bicpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRMb2coe1xuICAgICAgICAgICAgICAgICAgICBodG1sOiAnPT09IEltcG9ydCBvZiA8c3BhbiBkYXRhLXByb3A9XCJpbmZvXCI+JyArIGlucHV0LnZhbCgpICsgJzwvc3Bhbj4gY29tcGxldGUgPT09JyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBpbmZvOiBvSW1wb3J0LmluZm8gfSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgJ18nICsgTWF0aC5yYW5kb20oKSxcbiAgICAgICAgICAgICAgICAgICAgdGltZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRMb2coe1xuICAgICAgICAgICAgICAgICAgICBodG1sOiAnPT09IEltcG9ydCBvZiA8c3BhbiBkYXRhLXByb3A9XCJleGNlcHRpb25cIj4nICsgaW5wdXQudmFsKCkgKyAnPC9zcGFuPiBmYWlsZWQgPT09JyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBleGNlcHRpb246IGV4IH0sXG4gICAgICAgICAgICAgICAgICAgIGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICdfJyArIE1hdGgucmFuZG9tKCksXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZXNbMF0pO1xuICAgIH1cblxuICAgIGNsZWFyQWxsKCkge1xuICAgICAgICB0aGlzLmNsZWFySGlzdG9yeSgpO1xuICAgICAgICB0aGlzLiRsYXN0TG9nRW50cnkuZW1wdHkoKTtcbiAgICAgICAgaWYgKHRoaXMuJGRldGFpbHMpIHRoaXMuJGRldGFpbHMuc2xpZGVVcCgpO1xuICAgICAgICAkKCcuZ2lnLWRlYnVnLXNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ2dpZy1kZWJ1Zy1zZWxlY3RlZCcpO1xuICAgIH1cblxuICAgIGV4cG9ydEpzb24oKSB7XG4gICAgICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKHsgaGlzdG9yeTogdGhpcy5oaXN0b3J5LCBpbmZvOiB0aGlzLmdldEluZm8oKSB9LCB0cnVlLCBmYWxzZSwgNCwgbnVsbCwgdHJ1ZSkpO1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBmaWxlbmFtZSA9ICdHaWd5YURlYnVnXycgKyBbZC5nZXRNb250aCgpICsgMSwgZC5nZXREYXRlKCksIGQuZ2V0RnVsbFllYXIoKV0uam9pbignLScpICsgJ18nICsgZC5nZXRIb3VycygpICsgJ18nICsgZC5nZXRNaW51dGVzKCkgKyAnLmpzb24nO1xuXG4gICAgICAgIGlmICh0eXBlb2YgQmxvYiAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbanNvbl0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICAgICAgdmFyIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IubXNTYXZlQmxvYikge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIGZpbGVuYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJ2Rvd25sb2FkJyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgICAgICBhLnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCk7XG4gICAgICAgICAgICAgICAgYS5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgZmlsZW5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciBjbGlja0V2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnQnKTtcbiAgICAgICAgICAgICAgICAoY2xpY2tFdmVudCBhcyBhbnkpLmluaXRNb3VzZUV2ZW50KCdjbGljaycsIHRydWUsIHRydWUsIHdpbmRvdywgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgbnVsbCk7IC8vIHl1Y2shXG4gICAgICAgICAgICAgICAgYS5kaXNwYXRjaEV2ZW50KGNsaWNrRXZlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgaWZyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgICAgICBpZnIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5wcmVwZW5kVG9Cb2R5KGlmcik7XG4gICAgICAgICAgICB2YXIgZG9jID0gaWZyLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gICAgICAgICAgICBkb2Mub3BlbignYXBwbGljYXRpb24vanNvbicsICdyZXBsYWNlJyk7XG4gICAgICAgICAgICAoZG9jIGFzIGFueSkuY2hhcnNldCA9ICd1dGYtOCc7XG4gICAgICAgICAgICBkb2Mud3JpdGUoanNvbik7XG4gICAgICAgICAgICBkb2MuY2xvc2UoKTtcbiAgICAgICAgICAgIGRvYy5leGVjQ29tbWFuZCgnU2F2ZUFzJywgdHJ1ZSwgZmlsZW5hbWUucmVwbGFjZSgnLmpzb24nLCAnLnR4dCcpKTtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZnIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpZnIpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgdmFyIGltZ0Jhc2UgPSBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9jb21tZW50czIvJyk7XG5leHBvcnQgdmFyIGRlZmF1bHRDc3MgPSB7XG4gICAgcmVzZXQ6IFtcbiAgICAgICAgJy5naWctZGVidWctY29udGFpbmVyICosICouZ2lnLWRlYnVnLWNvbnRhaW5lciB7JyxcbiAgICAgICAgJ3dvcmQtd3JhcDpicmVhay13b3JkO3BhZGRpbmc6MHB4O21hcmdpbjowcHg7Y29sb3I6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246bm9uZTt3aWR0aDphdXRvO2Zsb2F0Om5vbmU7aGVpZ2h0OmF1dG87JyxcbiAgICAgICAgJ2ZvbnQtZmFtaWx5OmFyaWFsO2NvbG9yOiNGRkY7cG9zaXRpb246c3RhdGljO3RleHQtYWxpZ246bGVmdDt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTstbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O2JveC1zaXppbmc6IGJvcmRlci1ib3g7fScsXG4gICAgXS5qb2luKCcnKSxcbiAgICBnbG9iYWw6IFtcbiAgICAgICAgJ2JvZHkge3BhZGRpbmctdG9wOjEwMHB4ICFpbXBvcnRhbnR9JyxcbiAgICAgICAgJy5naWctZGVidWctY29udGFpbmVyIHt6LWluZGV4Ojk5OTk5OTk5OTk5OTk5OTk5Oy1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDstd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7Ym94LXNpemluZzogYm9yZGVyLWJveDsnLFxuICAgICAgICAncGFkZGluZzo1cHg7Zm9udC1zaXplOjEycHg7cG9zaXRpb246Zml4ZWQgIWltcG9ydGFudDt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7b3BhY2l0eTowLjg1O2NvbG9yOiNGRkZ9JyxcblxuICAgICAgICAnKi5naWctZGVidWctdXNlciB7bWFyZ2luLWJvdHRvbTo1cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7fScsXG4gICAgICAgICcqLmdpZy1kZWJ1Zy11c2VyLWxvZ2dlZEluIHtjdXJzb3I6cG9pbnRlcjt9JyxcbiAgICAgICAgJyouZ2lnLWRlYnVnLXNlbGVjdGVkIHtiYWNrZ3JvdW5kLWNvbG9yOiNGRkYgIWltcG9ydGFudDtjb2xvcjojMDAwICFpbXBvcnRhbnQ7Ym9yZGVyOiAycHggc29saWQgI0ZGRkZGRjt9JyxcbiAgICAgICAgJyouZ2lnLWRlYnVnLXVzZXItbG9nZ2VkSW46aG92ZXIge3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9JyxcbiAgICAgICAgJyouZ2lnLWRlYnVnLWFwaWtleS1jb250YWluZXIge21hcmdpbi1ib3R0b206NXB4O2JhY2tncm91bmQtY29sb3I6IzAwMDt9JyxcbiAgICAgICAgJyouZ2lnLWRlYnVnLWFwaWtleSB7d2lkdGg6NTAwcHg7YmFja2dyb3VuZC1jb2xvcjojMDAwO2JvcmRlcjpub25lO30nLFxuICAgICAgICAnKi5naWctZGVidWctbGFzdExvZyB7ZGlzcGxheTppbmxpbmUtYmxvY2s7bGluZS1oZWlnaHQ6MThweDt9JyxcbiAgICAgICAgJyouZ2lnLWRlYnVnLXNldHRpbmdzIHttYXJnaW4tYm90dG9tOjVweH0nLFxuICAgICAgICAnKi5naWctZGVidWctZm9vdGVyIHtvdmVyZmxvdzpoaWRkZW47bWFyZ2luLXRvcDo1cHg7fScsXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1oaXN0b3J5QnV0dG9uLCAqLmdpZy1kZWJ1Zy1oaWRlQnV0dG9uLCAqLmdpZy1kZWJ1Zy1kZXRhaWxzQnV0dG9uLCAqLmdpZy1kZWJ1Zy1pbmZvQnV0dG9uLCAqLmdpZy1kZWJ1Zy1pbXBvcnRCdXR0b24sICouZ2lnLWRlYnVnLWV4cG9ydEJ1dHRvbiwgKi5naWctZGVidWctY2xlYXJCdXR0b24geycsXG4gICAgICAgICdtYXJnaW4tcmlnaHQ6MjBweDtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDogMThweDt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MTVweDtib3JkZXI6IDFweCBzb2xpZCAjMDAwO2JhY2tncm91bmQtY29sb3I6IzNBM0EzQTtjdXJzb3I6IHBvaW50ZXI7JyxcbiAgICAgICAgJ2ZvbnQtd2VpZ2h0OmJvbGR9JyxcblxuICAgICAgICAnKi5naWctZGVidWctaW5mb0J1dHRvbiwgKi5naWctZGVidWctaW1wb3J0QnV0dG9uLCAqLmdpZy1kZWJ1Zy1leHBvcnRCdXR0b24sICouZ2lnLWRlYnVnLWNsZWFyQnV0dG9uICB7d2lkdGg6YXV0bztwYWRkaW5nOiAwIDNweDtmb250LXNpemU6MTJweDt9JyxcbiAgICAgICAgJyouZ2lnLWRlYnVnLWRldGFpbHNCdXR0b24sICouZ2lnLWRlYnVnLWluZm9CdXR0b24sICouZ2lnLWRlYnVnLWltcG9ydEJ1dHRvbiwgKi5naWctZGVidWctZXhwb3J0QnV0dG9uLCAqLmdpZy1kZWJ1Zy1jbGVhckJ1dHRvbiB7ZmxvYXQ6cmlnaHQ7bWFyZ2luLXJpZ2h0OjE1cHh9JyxcbiAgICAgICAgJyouZ2lnLWRlYnVnLWhpc3RvcnlCdXR0b24ucHJlc3NlZCwgLmdpZy1kZWJ1Zy1oaXN0b3J5QnV0dG9uOmhvdmVyLCAqLmdpZy1kZWJ1Zy1oaWRlQnV0dG9uOmhvdmVyLCAnLFxuICAgICAgICAnKi5naWctZGVidWctZGV0YWlsc0J1dHRvbi5wcmVzc2VkLCAuZ2lnLWRlYnVnLWRldGFpbHNCdXR0b246aG92ZXIsIHtiYWNrZ3JvdW5kLWNvbG9yOiM0QTRBNEE7fScsXG4gICAgICAgICcqLmdpZy1kZWJ1Zy10aW1lc3RhbXAge21hcmdpbi1yaWdodDoxMHB4O2NvbG9yOiNmZmQ4MDA7fScsXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1oaXN0b3J5IHtwb3NpdGlvbjogYWJzb2x1dGU7Ym9yZGVyOjFweCBzb2xpZCAjMDAwO2JvcmRlci1yYWRpdXM6N3B4O2JvcmRlcjoxcHggc29saWQgI0ZGRjsnLFxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjojMDAwO2NvbG9yOiNGRkY7d2lkdGg6NTAlO2hlaWdodDo0MDBweDtvdmVyZmxvdzogYXV0bztwYWRkaW5nOjEwcHg7fScsXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1oaXN0b3J5IGRpdiB7Zm9udC13ZWlnaHQ6Ym9sZDt9JyxcblxuICAgICAgICAnKi5naWctZGVidWctaGlzdG9yeS1lbnRyeSBbZGF0YS1wcm9wXSB7Y29sb3I6I2I2ZmYwMDt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO2N1cnNvcjogcG9pbnRlcjt9JyxcbiAgICAgICAgJyouZ2lnLWRlYnVnLWhpc3RvcnktZW50cnktZXJyb3Ige2JhY2tncm91bmQtY29sb3I6I0ZGMDAwMDt9JyxcbiAgICAgICAgJyouZ2lnLWRlYnVnLWhpc3RvcnktZW50cnktYmVmb3JlUmVxdWVzdCBbZGF0YS1wcm9wXSwgKi5naWctZGVidWctaGlzdG9yeS1lbnRyeS1hZnRlclJlc3BvbnNlIFtkYXRhLXByb3BdIHtjb2xvcjojQjFCMTAwO30nLFxuICAgICAgICAnKi5naWctZGVidWctaGlzdG9yeS1lbnRyeS1iZWZvcmVSZXF1ZXN0IFtkYXRhLXByb3BdLCAqLmdpZy1kZWJ1Zy1oaXN0b3J5LWVudHJ5LWJlZm9yZVBsdWdpblJlcXd1ZXN0IFtkYXRhLXByb3BdIHtjb2xvcjojMzM5OUZGO30nLFxuICAgICAgICAnKi5naWctZGVidWctaGlkZUJ1dHRvbiB7cG9zaXRpb246Zml4ZWQ7dG9wOjA7cmlnaHQ6MDt9JyxcblxuICAgICAgICAnKi5naWctZGVidWctZGF0YS1kZXRhaWxzIHt3aWR0aDogNTAlO2xlZnQ6IDUwJTtoZWlnaHQ6NDAwcHg7b3ZlcmZsb3c6YXV0bztib3JkZXItcmFkaXVzOjdweDtib3JkZXI6MXB4IHNvbGlkICNGRkY7fScsXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1kYXRhLWRldGFpbHMgIGxpIHttYXJnaW4tbGVmdDoyMHB4O30nLFxuICAgICAgICAnKi5naWctZGVidWctZGF0YS1kZXRhaWxzICB1bCB7fScsXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1kYXRhLWRldGFpbHMtb3BlbkJ1dHRvbiB7Zm9udC1zaXplOjExcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6IDE1cHg7aGVpZ2h0OjE1cHg7bGluZS1oZWlnaHQ6MTVweDt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztjdXJzb3I6cG9pbnRlcjt9JyxcbiAgICAgICAgJyouZ2lnLWRlYnVnLWRhdGEtZGV0YWlscy1wcmVzc2VkIHtiYWNrZ3JvdW5kLWNvbG9yOiNGRkY7IGNvbG9yOiMwMDA7fScsXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1kYXRhLWRldGFpbHMtY2xvc2VkLCAqLmdpZy1kZWJ1Zy1kYXRhLWRldGFpbHMtb3BlbiB7dmVydGljYWwtYWxpZ246dG9wO30nLFxuICAgICAgICAnKi5naWctZGVidWctZGF0YS1kZXRhaWxzLWNsb3NlZCB7ZGlzcGxheTpub25lfScsXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1wcm9wZXJ0eU5hbWUge2NvbG9yOiAjRkZGRjAwO2ZvbnQtd2VpZ2h0OmJvbGQ7fScsXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1wcm9wZXJ0eVZhbHVlIHttYXJnaW4tbGVmdDo1cHg7fScsXG4gICAgICAgICcqLmdpZy1kZWJ1Zy1pbXBvcnQge2Rpc3BsYXk6bm9uZX0nLFxuICAgICAgICAnKi5naWctZGVidWctaW1wb3J0LXNob3duIC5naWctZGVidWctaW1wb3J0IHtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXNpemU6OXB4O30nLFxuICAgICAgICAnKi5naWctZGVidWctaW1wb3J0LXNob3duIC5naWctZGVidWctaW1wb3J0VGV4dCB7ZGlzcGxheTpub25lO30nLFxuICAgIF0uam9pbignJyksXG59O1xuIiwiZXhwb3J0IHZhciBkZWZhdWx0VGVtcGxhdGVzID0ge1xuICAgIGRlYnVnQmFyOiBbXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWRlYnVnLWhpZGVCdXR0b25cIj5fPC9kaXY+JyxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctZGVidWctYmFyLWNvbnRhaW5lclwiPicsXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWRlYnVnLXVzZXJcIj4mbmJzcDs8L2Rpdj4nLFxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1kZWJ1Zy1hcGlrZXktY29udGFpbmVyXCI+QVBJIGtleTogPGlucHV0IGNsYXNzPVwiZ2lnLWRlYnVnLWFwaWtleVwiIHJlYWRvbmx5PVwicmVhZG9ubHlcIj4mbmJzcDs8L2lucHV0PjwvZGl2PicsXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWRlYnVnLXNldHRpbmdzXCI+JyxcbiAgICAgICAgJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImdpZy1kZWJ1Zy1hdXRvbG9hZFwiPjwvaW5wdXQ+Jm5ic3A7QXV0byBsb2FkPC9pbnB1dD4nLFxuICAgICAgICAnPC9kaXY+JyxcbiAgICAgICAgJzxkaXYgc3R5bGU9XCJnaWctZGVidWctZm9vdGVyXCI+JyxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctZGVidWctaGlzdG9yeUJ1dHRvblwiPi4uLjwvZGl2PicsXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLWRlYnVnLWxhc3RMb2dcIj4mbmJzcDs8L2Rpdj4nLFxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1kZWJ1Zy1kZXRhaWxzQnV0dG9uXCI+Li4uPC9kaXY+JyxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctZGVidWctaW5mb0J1dHRvblwiPkluZm88L2Rpdj4nLFxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1kZWJ1Zy1pbXBvcnRCdXR0b25cIj48c3BhbiBjbGFzcz1cImdpZy1kZWJ1Zy1pbXBvcnRUZXh0XCI+SW1wb3J0PC9zcGFuPjxpbnB1dCBjbGFzcz1cImdpZy1kZWJ1Zy1pbXBvcnRcIiB0eXBlPVwiZmlsZVwiIC8+PC9kaXY+JyxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctZGVidWctZXhwb3J0QnV0dG9uXCI+RXhwb3J0PC9kaXY+JyxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctZGVidWctY2xlYXJCdXR0b25cIj5DbGVhcjwvZGl2PicsXG4gICAgICAgICc8L2Rpdj4nLFxuICAgICAgICAnPC9kaXY+JyxcbiAgICBdLmpvaW4oJycpLFxufTtcbiIsImltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNEZWJ1ZyBmcm9tICdzcmMvdXRpbHMvR2lneWEuSnMuUGx1Z2lucy5EZWJ1Zy9hcHAvRGVidWdQbHVnaW4xJztcbmltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNEZWJ1Z18xIGZyb20gJ3NyYy91dGlscy9HaWd5YS5Kcy5QbHVnaW5zLkRlYnVnL2FwcC9EZWZhdWx0Q3NzJztcbmltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNEZWJ1Z18yIGZyb20gJ3NyYy91dGlscy9HaWd5YS5Kcy5QbHVnaW5zLkRlYnVnL2FwcC9UZW1wbGF0ZXMnO1xuXG5kZWNsYXJlIGNvbnN0IGdpZ3lhOiBhbnk7XG5pZiAoIWdpZ3lhLl8pIHtcbiAgICBnaWd5YS5fID0ge307XG59XG5pZiAoIWdpZ3lhLl8ucGx1Z2lucykge1xuICAgIGdpZ3lhLl8ucGx1Z2lucyA9IHt9O1xufVxuaWYgKCFnaWd5YS5fLnBsdWdpbnMuZGVidWcpIHtcbiAgICBnaWd5YS5fLnBsdWdpbnMuZGVidWcgPSB7fTtcbn1cbmlmICghZ2lneWEuXy5wbHVnaW5zLmRlYnVnLkRlYnVnUGx1Z2luKSB7XG4gICAgZ2lneWEuXy5wbHVnaW5zLmRlYnVnLkRlYnVnUGx1Z2luID0ge307XG59XG5cbk9iamVjdC5hc3NpZ24oZ2lneWEuXy5wbHVnaW5zLmRlYnVnLCBHaWd5YV9QbHVnaW5zRGVidWcsIEdpZ3lhX1BsdWdpbnNEZWJ1Z18xLCBHaWd5YV9QbHVnaW5zRGVidWdfMik7XG5cbmdpZ3lhLl8uVUkuYXR0YWNoUGx1Z2luKEdpZ3lhX1BsdWdpbnNEZWJ1Zy5EZWJ1Z1BsdWdpbiwgJ3NvY2lhbGl6ZScsICdkZWJ1ZycsICdzaG93RGVidWdVSScpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==