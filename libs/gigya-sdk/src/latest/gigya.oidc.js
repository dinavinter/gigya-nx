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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/fidm/Gigya.Js.OidcProxy/app/index.ts");
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

/***/ "./src/fidm/Fidm.Common/utils/script.ts":
/*!**********************************************!*\
  !*** ./src/fidm/Fidm.Common/utils/script.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var url_1 = __webpack_require__(/*! ./url */ "./src/fidm/Fidm.Common/utils/url.ts");
function ensureJsSdkLoaded(apiKey, originHostname, done) {
    if (window.gigya && window.gigya.isGigya) { // we have gigya on page
        if (!window.gigya.isReady) { // bootstrap in process - wait for bootstrap to finish
            waitForGigyaServiceReady(done);
        }
        else { // finished bootstrap - gigya service is ready
            done();
        }
    }
    else { // gigya is not on page
        loadGigyaJS(apiKey, originHostname);
        waitForGigyaServiceReady(done);
    }
}
exports.ensureJsSdkLoaded = ensureJsSdkLoaded;
function findConfiguration() {
    // find script element
    var scriptElement = findScriptElement();
    if (!scriptElement)
        throw new Error('failed to find script element');
    var apiKey = url_1.urlParams(scriptElement.src)['apiKey'];
    var configObj = scriptElement.innerHTML.replace(/^\s+|\s+$/g, '');
    if (!configObj)
        throw new Error('No object params was found.');
    if (!apiKey)
        throw new Error('failed to find api key');
    var anchor = document.createElement('a');
    anchor.href = scriptElement.src;
    var originHostname = anchor.hostname || calcHostname(configObj);
    return {
        apiKey: apiKey,
        originHostname: originHostname,
        configJson: configObj
    };
}
exports.findConfiguration = findConfiguration;
function redirectOnMissingOidcContext() {
    var _a, _b, _c, _d;
    return (_d = (_c = (_b = (_a = window.gigya._) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.flags) === null || _c === void 0 ? void 0 : _c.redirectOnMissingOidcContext) !== null && _d !== void 0 ? _d : false;
}
exports.redirectOnMissingOidcContext = redirectOnMissingOidcContext;
function getCacheProvider() {
    var _a, _b, _c, _d;
    var useLocalStorage = (_d = (_c = (_b = (_a = window.gigya._) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.flags) === null || _c === void 0 ? void 0 : _c.oidcUseLocalStorage) !== null && _d !== void 0 ? _d : false;
    return useLocalStorage ? window.gigya.utils.localCache : window.gigya.utils.sessionCache;
}
exports.getCacheProvider = getCacheProvider;
function calcHostname(configObj) {
    var dcString = configObj.dc ? ('.' + configObj.dc) : '';
    var hostname = 'gigya.com';
    if (configObj.hostname && configObj.hostname.match(/(?:-st\d+)\.(gigya-api\.cn|sapcdm\.cn|gigya\.com)/)) {
        hostname = configObj.hostname;
    }
    return "cdns" + dcString + "." + hostname;
}
function loadGigyaJS(apiKey, originHostname) {
    window.gigya = window.gigya || {}; /// important! so won't discard current modules.
    window.gigya.isGigya = true;
    var src = "https://" + originHostname + "/js/gigya.js?apiKey=" + apiKey;
    var scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.src = src;
    scriptElement.async = true;
    document.getElementsByTagName('head')[0].appendChild(scriptElement);
}
function waitForGigyaServiceReady(done) {
    // set socialize.js load handler
    var prevHandler = null;
    if (typeof window['onGigyaServiceReady'] !== "undefined")
        prevHandler = window['onGigyaServiceReady'];
    window['onGigyaServiceReady'] = function () {
        if (prevHandler)
            prevHandler.apply(this, arguments);
        done();
    };
}
function findScriptElement() {
    var scripts = document.getElementsByTagName('script');
    var scriptElement;
    for (var i = scripts.length - 1; i >= 0; i--) {
        var script = scripts[i];
        var src = script.src.toLowerCase();
        if (src != '') {
            if (src.indexOf('?apikey=') > -1 && src.indexOf('gigya.oidc.') > -1) {
                scriptElement = script;
                break;
            }
        }
    }
    return scriptElement;
}


/***/ }),

/***/ "./src/fidm/Fidm.Common/utils/session.ts":
/*!***********************************************!*\
  !*** ./src/fidm/Fidm.Common/utils/session.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function getLoginToken(apiKey) {
    return window.gigya._.apiAdapters.web.tokenStore.get(apiKey);
}
exports.getLoginToken = getLoginToken;
function getUid(callback, ignoreInterruptions) {
    if (ignoreInterruptions === void 0) { ignoreInterruptions = false; }
    window.gigya.socialize.getUserInfo({
        ignoreInterruptions: ignoreInterruptions,
        callback: function (response) {
            if (response.errorCode === 0) {
                callback({
                    UID: response['UID'],
                    UIDSignature: response['UIDSignature'],
                    signatureTimestamp: response['signatureTimestamp']
                });
            }
            else {
                callback();
            }
        }
    });
}
exports.getUid = getUid;
function activeUserExists(apiKey, UID) {
    var loginToken = getLoginToken(apiKey);
    return !!loginToken && !!UID;
}
exports.activeUserExists = activeUserExists;


/***/ }),

/***/ "./src/fidm/Fidm.Common/utils/storage.ts":
/*!***********************************************!*\
  !*** ./src/fidm/Fidm.Common/utils/storage.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var script_1 = __webpack_require__(/*! ./script */ "./src/fidm/Fidm.Common/utils/script.ts");
var sessionStorageTimeout = 10 * 60 * 1000; // allow user 10 minutes to finish
function saveContext(apiKey, context, done) {
    // save context for next retrival, if not returned from loginUrl
    var key = contextKey(apiKey);
    var cache = script_1.getCacheProvider();
    // Fallback to session storage
    var savedContexts = cache.get(key, sessionStorageTimeout) ||
        window.gigya.utils.sessionCache.get(key, sessionStorageTimeout) || [];
    savedContexts.push(context);
    cache.set(key, savedContexts);
    done();
}
exports.saveContext = saveContext;
function removeContext(apiKey) {
    // remove the context
    var key = contextKey(apiKey);
    var cache = script_1.getCacheProvider();
    cache.remove(key);
}
exports.removeContext = removeContext;
function loadContext(apiKey, callback) {
    // load context if was not provided in url
    var key = contextKey(apiKey);
    var cache = script_1.getCacheProvider();
    // Fallback to session storage
    var savedContexts = cache.get(key, sessionStorageTimeout)
        || window.gigya.utils.sessionCache.get(key, sessionStorageTimeout) || [];
    var lastContext = savedContexts.pop() || {};
    cache.set(key, savedContexts);
    callback(lastContext);
}
exports.loadContext = loadContext;
function contextKey(apiKey) {
    return 'gig_oidcContext_' + apiKey;
}


/***/ }),

/***/ "./src/fidm/Fidm.Common/utils/url.ts":
/*!*******************************************!*\
  !*** ./src/fidm/Fidm.Common/utils/url.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var FlagService_1 = __webpack_require__(/*! ../../../core/Gigya.Js/app/Services/FlagService */ "./src/core/Gigya.Js/app/Services/FlagService.ts");
function urlParams(query) {
    if (query.indexOf('?') > -1)
        query = query.substring(query.indexOf('?') + 1);
    if (query.indexOf('#') > -1)
        query = query.substring(query.indexOf('#') + 1);
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
exports.urlParams = urlParams;
function getParams(_win) {
    if (_win === void 0) { _win = window.gigya._.WindowProvider; }
    var result = urlParams(_win.location().hash || _win.location().search);
    if (!FlagService_1.FlagService.useOidcGetParamHashOldStyle) {
        var hashParamsResult = urlParams(_win.location().hash);
        var searchParamsResult = urlParams(_win.location().search);
        result = hashParamsResult['mode'] ? hashParamsResult : searchParamsResult;
    }
    return {
        mode: result['mode'],
        context: result['context'],
        clientID: result['client_id'] || result['clientID'],
        scope: result['scope'],
        prompt: result['prompt'],
        display: result['display'],
        message: result['errorMessage'],
        code: result['errorCode'],
        callID: result['callId'],
        skipConsent: result['gig_skipConsent'] || false
    };
}
exports.getParams = getParams;
function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
exports.getParameterByName = getParameterByName;
function redirect(url, params, _win) {
    if (_win === void 0) { _win = window.gigya._.WindowProvider; }
    url = window.gigya.utils.URL.addParamsToURL(url, params);
    if (url && url.length && url[url.length - 1] === '?') {
        url = url.slice(0, -1);
    }
    if (!FlagService_1.FlagService.useOidcGetParamHashOldStyle) {
        var hashParams = _win.location().hash;
        if (hashParams && hashParams.length > 0 && hashParams.indexOf('mode') === -1) {
            url += hashParams;
        }
    }
    _win.location().href = url;
}
exports.redirect = redirect;


/***/ }),

/***/ "./src/fidm/Gigya.Js.OidcProxy/app/afterConsent.ts":
/*!*********************************************************!*\
  !*** ./src/fidm/Gigya.Js.OidcProxy/app/afterConsent.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var storage_1 = __webpack_require__(/*! ../../Fidm.Common/utils/storage */ "./src/fidm/Fidm.Common/utils/storage.ts");
var oidcAPIs_1 = __webpack_require__(/*! ./oidcAPIs */ "./src/fidm/Gigya.Js.OidcProxy/app/oidcAPIs.ts");
var script_1 = __webpack_require__(/*! ../../Fidm.Common/utils/script */ "./src/fidm/Fidm.Common/utils/script.ts");
function processAfterConsent(params, configuration) {
    storage_1.loadContext(configuration.apiKey, function (savedParams) {
        if (script_1.redirectOnMissingOidcContext() && !(savedParams === null || savedParams === void 0 ? void 0 : savedParams.context)) {
            return oidcAPIs_1.redirectToError(configuration, {
                mode: 'error',
                message: 'Missing or expired context',
                code: 'invalid_request'
            });
        }
        storage_1.removeContext(configuration.apiKey);
        oidcAPIs_1.redirectToContinue(configuration.apiKey, savedParams.context);
    });
}
exports.processAfterConsent = processAfterConsent;


/***/ }),

/***/ "./src/fidm/Gigya.Js.OidcProxy/app/afterLogin.ts":
/*!*******************************************************!*\
  !*** ./src/fidm/Gigya.Js.OidcProxy/app/afterLogin.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var storage_1 = __webpack_require__(/*! ../../Fidm.Common/utils/storage */ "./src/fidm/Fidm.Common/utils/storage.ts");
var session_1 = __webpack_require__(/*! ../../Fidm.Common/utils/session */ "./src/fidm/Fidm.Common/utils/session.ts");
var oidcAPIs_1 = __webpack_require__(/*! ./oidcAPIs */ "./src/fidm/Gigya.Js.OidcProxy/app/oidcAPIs.ts");
var script_1 = __webpack_require__(/*! ../../Fidm.Common/utils/script */ "./src/fidm/Fidm.Common/utils/script.ts");
var FlagService_1 = __webpack_require__(/*! ../../../core/Gigya.Js/app/Services/FlagService */ "./src/core/Gigya.Js/app/Services/FlagService.ts");
function processAfterLogin(params, configuration) {
    storage_1.loadContext(configuration.apiKey, function (savedParams) {
        if (script_1.redirectOnMissingOidcContext() && !(savedParams === null || savedParams === void 0 ? void 0 : savedParams.context)) {
            return oidcAPIs_1.redirectToError(configuration, {
                mode: 'error',
                message: 'Missing or expired context',
                code: 'invalid_request'
            });
        }
        if (!(savedParams === null || savedParams === void 0 ? void 0 : savedParams.context)) {
            window.gigya.logger.report('oidc call continue when there is no context', {}, false, FlagService_1.FlagService.forceErrorReport);
        }
        storage_1.saveContext(configuration.apiKey, savedParams, function () {
            session_1.getUid(function (uidParams) {
                if (session_1.activeUserExists(configuration.apiKey, uidParams.UID)) {
                    oidcAPIs_1.redirectAfterLogin(configuration, uidParams, savedParams);
                }
                else {
                    throw new Error('missing active user');
                }
            });
        });
    });
}
exports.processAfterLogin = processAfterLogin;


/***/ }),

/***/ "./src/fidm/Gigya.Js.OidcProxy/app/bootstrap.ts":
/*!******************************************************!*\
  !*** ./src/fidm/Gigya.Js.OidcProxy/app/bootstrap.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var script_1 = __webpack_require__(/*! ../../Fidm.Common/utils/script */ "./src/fidm/Fidm.Common/utils/script.ts");
var oidcProxy_1 = __webpack_require__(/*! ./oidcProxy */ "./src/fidm/Gigya.Js.OidcProxy/app/oidcProxy.ts");
function bootstrap() {
    var configObj = script_1.findConfiguration();
    script_1.ensureJsSdkLoaded(configObj.apiKey, configObj.originHostname, function () { return oidcProxy_1.processRequest(configObj); });
}
exports.bootstrap = bootstrap;


/***/ }),

/***/ "./src/fidm/Gigya.Js.OidcProxy/app/forceLogin.ts":
/*!*******************************************************!*\
  !*** ./src/fidm/Gigya.Js.OidcProxy/app/forceLogin.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var storage_1 = __webpack_require__(/*! ../../Fidm.Common/utils/storage */ "./src/fidm/Fidm.Common/utils/storage.ts");
var oidcAPIs_1 = __webpack_require__(/*! ./oidcAPIs */ "./src/fidm/Gigya.Js.OidcProxy/app/oidcAPIs.ts");
function processForceLogin(params, configuration) {
    if (!params['context'])
        throw new Error('missing context param');
    storage_1.saveContext(configuration.apiKey, params, function () {
        oidcAPIs_1.redirectToLogin(configuration);
    });
}
exports.processForceLogin = processForceLogin;


/***/ }),

/***/ "./src/fidm/Gigya.Js.OidcProxy/app/index.ts":
/*!**************************************************!*\
  !*** ./src/fidm/Gigya.Js.OidcProxy/app/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var bootstrap_1 = __webpack_require__(/*! ./bootstrap */ "./src/fidm/Gigya.Js.OidcProxy/app/bootstrap.ts");
exports.bootstrap = bootstrap_1.bootstrap;
bootstrap_1.bootstrap();
var forceLogin = __webpack_require__(/*! ./forceLogin */ "./src/fidm/Gigya.Js.OidcProxy/app/forceLogin.ts");
exports.forceLogin = forceLogin;
var login = __webpack_require__(/*! ./login */ "./src/fidm/Gigya.Js.OidcProxy/app/login.ts");
exports.login = login;
var passiveLogin = __webpack_require__(/*! ./passiveLogin */ "./src/fidm/Gigya.Js.OidcProxy/app/passiveLogin.ts");
exports.passiveLogin = passiveLogin;
var afterLogin = __webpack_require__(/*! ./afterLogin */ "./src/fidm/Gigya.Js.OidcProxy/app/afterLogin.ts");
exports.afterLogin = afterLogin;
var afterConsent = __webpack_require__(/*! ./afterConsent */ "./src/fidm/Gigya.Js.OidcProxy/app/afterConsent.ts");
exports.afterConsent = afterConsent;
var api = __webpack_require__(/*! ./oidcAPIs */ "./src/fidm/Gigya.Js.OidcProxy/app/oidcAPIs.ts");
exports.api = api;
var url = __webpack_require__(/*! ../../Fidm.Common/utils/url */ "./src/fidm/Fidm.Common/utils/url.ts");
exports.url = url;
var proxy = __webpack_require__(/*! ./oidcProxy */ "./src/fidm/Gigya.Js.OidcProxy/app/oidcProxy.ts");
exports.proxy = proxy;


/***/ }),

/***/ "./src/fidm/Gigya.Js.OidcProxy/app/login.ts":
/*!**************************************************!*\
  !*** ./src/fidm/Gigya.Js.OidcProxy/app/login.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var storage_1 = __webpack_require__(/*! ../../Fidm.Common/utils/storage */ "./src/fidm/Fidm.Common/utils/storage.ts");
var session_1 = __webpack_require__(/*! ../../Fidm.Common/utils/session */ "./src/fidm/Fidm.Common/utils/session.ts");
var oidcAPIs_1 = __webpack_require__(/*! ./oidcAPIs */ "./src/fidm/Gigya.Js.OidcProxy/app/oidcAPIs.ts");
var script_1 = __webpack_require__(/*! ../../Fidm.Common/utils/script */ "./src/fidm/Fidm.Common/utils/script.ts");
function processLogin(params, configuration) {
    var _a;
    if (!params['context']) {
        (_a = window.gigya._.apiAdapters.web.apiService) === null || _a === void 0 ? void 0 : _a.sendReport('missing oidc context', {
            configuration: configuration, params: params
        });
        if (script_1.redirectOnMissingOidcContext()) {
            return oidcAPIs_1.redirectToError(configuration, {
                mode: 'error',
                message: 'Missing required parameter: context',
                code: 'invalid_request'
            });
        }
        else {
            throw new Error('missing context param');
        }
    }
    storage_1.saveContext(configuration.apiKey, params, function () {
        session_1.getUid(function (uidParams) {
            if (session_1.activeUserExists(configuration === null || configuration === void 0 ? void 0 : configuration.apiKey, uidParams === null || uidParams === void 0 ? void 0 : uidParams.UID)) {
                oidcAPIs_1.redirectAfterLogin(configuration, uidParams, params);
            }
            else {
                oidcAPIs_1.redirectToLogin(configuration);
            }
        });
    });
}
exports.processLogin = processLogin;


/***/ }),

/***/ "./src/fidm/Gigya.Js.OidcProxy/app/oidcAPIs.ts":
/*!*****************************************************!*\
  !*** ./src/fidm/Gigya.Js.OidcProxy/app/oidcAPIs.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var url_1 = __webpack_require__(/*! ../../Fidm.Common/utils/url */ "./src/fidm/Fidm.Common/utils/url.ts");
var session_1 = __webpack_require__(/*! ../../Fidm.Common/utils/session */ "./src/fidm/Fidm.Common/utils/session.ts");
function redirectToLogin(configObject) {
    var _a, _b;
    var scriptConf = window.gigya.utils.JSON.deserialize(configObject.configJson);
    if (!scriptConf)
        throw new Error('The params object is not valid.');
    url_1.redirect(scriptConf.loginURL, {
        gig_ui_locales: (_a = url_1.getParameterByName('gig_ui_locales')) !== null && _a !== void 0 ? _a : null,
        gig_login_hint: (_b = url_1.getParameterByName('gig_login_hint')) !== null && _b !== void 0 ? _b : null
    });
}
exports.redirectToLogin = redirectToLogin;
function redirectToContinue(apiKey, context, _win) {
    if (_win === void 0) { _win = window.gigya._.WindowProvider; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var hashParamsResult, searchParamsResult, params, consent, sig, userKey, _a, _b, _c;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    hashParamsResult = url_1.urlParams(_win.location().hash);
                    searchParamsResult = url_1.urlParams(_win.location().search);
                    params = hashParamsResult['mode'] ? hashParamsResult : searchParamsResult;
                    consent = url_1.getParameterByName('consent');
                    sig = params['sig'];
                    userKey = params['userKey'];
                    if (userKey === 'undefined') {
                        userKey = null;
                    }
                    _a = redirectToContinueEndPoint;
                    _b = ['authorize/continue'];
                    _c = {
                        context: context,
                        login_token: session_1.getLoginToken(apiKey),
                        consent: consent,
                        sig: sig,
                        userKey: userKey
                    };
                    return [4 /*yield*/, window.gigya._.apiAdapter.getGmidTicket()];
                case 1:
                    _a.apply(void 0, _b.concat([(_c.gmidTicket = _d.sent(),
                            _c), apiKey]));
                    return [2 /*return*/];
            }
        });
    });
}
exports.redirectToContinue = redirectToContinue;
function redirectAfterLogin(configObject, uidParams, params) {
    if (params.skipConsent) {
        redirectToContinue(configObject.apiKey, params.context);
    }
    else {
        redirectToConsent(configObject, uidParams, params);
    }
}
exports.redirectAfterLogin = redirectAfterLogin;
function redirectToConsent(configObject, uidParams, params) {
    var scriptConf = window.gigya.utils.JSON.deserialize(configObject.configJson);
    if (!scriptConf)
        throw new Error('The params object is not valid.');
    var consentParams = {
        context: params.context,
        clientID: params.clientID,
        scope: params.scope,
        prompt: params.prompt,
        display: params.display,
        UID: uidParams.UID,
        UIDSignature: uidParams.UIDSignature,
        signatureTimestamp: uidParams.signatureTimestamp
    };
    url_1.redirect(scriptConf.consentURL, consentParams);
}
exports.redirectToConsent = redirectToConsent;
function redirectToError(configObject, params) {
    var scriptConf = window.gigya.utils.JSON.deserialize(configObject.configJson);
    if (!scriptConf)
        throw new Error('The params object is not valid.');
    url_1.redirect(scriptConf.errorURL, params);
}
exports.redirectToError = redirectToError;
function redirectToContinueEndPoint(endPoint, params, apiKey) {
    // redirects to an internal oidc/authorize/continue endpoint with the given parameters
    url_1.redirect("https://" + window.gigya._.getApiDomain('fidm') + "/oidc/op/v1.0/" + apiKey + "/" + endPoint, params);
}


/***/ }),

/***/ "./src/fidm/Gigya.Js.OidcProxy/app/oidcProxy.ts":
/*!******************************************************!*\
  !*** ./src/fidm/Gigya.Js.OidcProxy/app/oidcProxy.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var url_1 = __webpack_require__(/*! ../../Fidm.Common/utils/url */ "./src/fidm/Fidm.Common/utils/url.ts");
var login_1 = __webpack_require__(/*! ./login */ "./src/fidm/Gigya.Js.OidcProxy/app/login.ts");
var forceLogin_1 = __webpack_require__(/*! ./forceLogin */ "./src/fidm/Gigya.Js.OidcProxy/app/forceLogin.ts");
var passiveLogin_1 = __webpack_require__(/*! ./passiveLogin */ "./src/fidm/Gigya.Js.OidcProxy/app/passiveLogin.ts");
var afterLogin_1 = __webpack_require__(/*! ./afterLogin */ "./src/fidm/Gigya.Js.OidcProxy/app/afterLogin.ts");
var afterConsent_1 = __webpack_require__(/*! ./afterConsent */ "./src/fidm/Gigya.Js.OidcProxy/app/afterConsent.ts");
var oidcAPIs_1 = __webpack_require__(/*! ./oidcAPIs */ "./src/fidm/Gigya.Js.OidcProxy/app/oidcAPIs.ts");
function processRequest(configObj) {
    var params = url_1.getParams();
    switch (params.mode) {
        // Authorize
        case "login":
            login_1.processLogin(params, configObj);
            break;
        // Authorize prompt=login
        case "forceLogin":
            forceLogin_1.processForceLogin(params, configObj);
            break;
        // Authorize prompt=none
        case "passiveLogin":
            passiveLogin_1.processPassiveLogin(params, configObj);
            break;
        // Login page
        case "afterLogin":
            afterLogin_1.processAfterLogin(params, configObj);
            break;
        // Consent page
        case "afterConsent":
            afterConsent_1.processAfterConsent(params, configObj);
            break;
        // Error page
        case "error":
            oidcAPIs_1.redirectToError(configObj, params);
            break;
    }
}
exports.processRequest = processRequest;


/***/ }),

/***/ "./src/fidm/Gigya.Js.OidcProxy/app/passiveLogin.ts":
/*!*********************************************************!*\
  !*** ./src/fidm/Gigya.Js.OidcProxy/app/passiveLogin.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var storage_1 = __webpack_require__(/*! ../../Fidm.Common/utils/storage */ "./src/fidm/Fidm.Common/utils/storage.ts");
var session_1 = __webpack_require__(/*! ../../Fidm.Common/utils/session */ "./src/fidm/Fidm.Common/utils/session.ts");
var oidcAPIs_1 = __webpack_require__(/*! ./oidcAPIs */ "./src/fidm/Gigya.Js.OidcProxy/app/oidcAPIs.ts");
var FlagService_1 = __webpack_require__(/*! ../../../core/Gigya.Js/app/Services/FlagService */ "./src/core/Gigya.Js/app/Services/FlagService.ts");
function processPassiveLogin(params, configuration) {
    if (!params['context'])
        throw new Error('missing context param');
    storage_1.saveContext(configuration.apiKey, params, function () {
        session_1.getUid(function (uidParams) {
            if (session_1.activeUserExists(configuration.apiKey, uidParams.UID)) {
                oidcAPIs_1.redirectAfterLogin(configuration, uidParams, params);
            }
            else {
                // this will cause the continue endpoint to return error(login required) to the RP
                oidcAPIs_1.redirectToContinue(configuration.apiKey, params.context);
            }
        }, FlagService_1.FlagService.ignoreInterruptionsInOidcPassiveLogin);
    });
}
exports.processPassiveLogin = processPassiveLogin;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1NlcnZpY2VzL0ZsYWdTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9maWRtL0ZpZG0uQ29tbW9uL3V0aWxzL3NjcmlwdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlkbS9GaWRtLkNvbW1vbi91dGlscy9zZXNzaW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9maWRtL0ZpZG0uQ29tbW9uL3V0aWxzL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZG0vRmlkbS5Db21tb24vdXRpbHMvdXJsLnRzIiwid2VicGFjazovLy8uL3NyYy9maWRtL0dpZ3lhLkpzLk9pZGNQcm94eS9hcHAvYWZ0ZXJDb25zZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9maWRtL0dpZ3lhLkpzLk9pZGNQcm94eS9hcHAvYWZ0ZXJMb2dpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlkbS9HaWd5YS5Kcy5PaWRjUHJveHkvYXBwL2Jvb3RzdHJhcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlkbS9HaWd5YS5Kcy5PaWRjUHJveHkvYXBwL2ZvcmNlTG9naW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZG0vR2lneWEuSnMuT2lkY1Byb3h5L2FwcC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlkbS9HaWd5YS5Kcy5PaWRjUHJveHkvYXBwL2xvZ2luLnRzIiwid2VicGFjazovLy8uL3NyYy9maWRtL0dpZ3lhLkpzLk9pZGNQcm94eS9hcHAvb2lkY0FQSXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZG0vR2lneWEuSnMuT2lkY1Byb3h5L2FwcC9vaWRjUHJveHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZG0vR2lneWEuSnMuT2lkY1Byb3h5L2FwcC9wYXNzaXZl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RSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZELDZCQUFrQixDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDeEQ7aUJBQU07Z0JBQ0gsa0ZBQWtGO2dCQUNsRiw2QkFBa0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM1RDtRQUNMLENBQUMsRUFBRSx5QkFBVyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7SUFDMUQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBZEQsa0RBY0MiLCJmaWxlIjoiZ2lneWEub2lkYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2ZpZG0vR2lneWEuSnMuT2lkY1Byb3h5L2FwcC9pbmRleC50c1wiKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBGbGFnU2VydmljZSB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgZm9yY2VXZWJTZGtCb290c3RyYXAoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnZm9yY2VXZWJTZGtCb290c3RyYXAnKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXQgdXNlR2lneWFKc0Jhc2VEb21haW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgndXNlR2lneWFKc0Jhc2VEb21haW4nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBoaWRlU1NPRnJhbWUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnaGlkZVNTT0ZyYW1lJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgd2NhZ0NvbnRyYXN0Rml4KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3djYWdDb250cmFzdEZpeCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG5ld0Zvcm1MaW5rSW5zdGFuY2VFbGVtZW50KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ25ld0Zvcm1MaW5rSW5zdGFuY2VFbGVtZW50Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc3RvcFNlbmRpbmdSZXBvcnRzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3N0b3BTZW5kaW5nUmVwb3J0cycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNldEdyb3VwQXBpRG9tYWluQWZ0ZXJMb2dpbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdzZXRHcm91cEFwaURvbWFpbkFmdGVyTG9naW4nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCB1c2VIdHRwU3RhdHVzQ29kZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd1c2VIdHRwU3RhdHVzQ29kZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGFsd2F5c0NoZWNrQ29va2llU2F2ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdhbHdheXNDaGVja0Nvb2tpZVNhdmUnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBmaXhQaG9uZVRGQVRyYW5zbGF0aW9ucygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdmaXhQaG9uZVRGQVRyYW5zbGF0aW9ucycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGxvYWRTc29GcmFtZU9ubHlPbmNlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2xvYWRTc29GcmFtZU9ubHlPbmNlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdmVyaWZ5TG9naW5Pbmx5T25jZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd2ZXJpZnlMb2dpbk9ubHlPbmNlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc2VuZExhbmdGb3JFbWFpbE9UUCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdzZW5kTGFuZ0ZvckVtYWlsT1RQJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc2V0UHJvdmlkZXJGcm9tUmVzcG9uc2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnc2V0UHJvdmlkZXJGcm9tUmVzcG9uc2UnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBzZXRDb29raWVTYW1lU2l0ZUxheFNlc3Npb24oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnc2V0Q29va2llU2FtZVNpdGVMYXhTZXNzaW9uJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc2V0Q29va2llU2FtZVNpdGVMYXhTb2NpYWwoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnc2V0Q29va2llU2FtZVNpdGVMYXhTb2NpYWwnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBzZXRDb29raWVTYW1lU2l0ZUxheExvd1ByaW9yaXR5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3NldENvb2tpZVNhbWVTaXRlTGF4TG93UHJpb3JpdHknKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBmb3JjZUVycm9yUmVwb3J0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2ZvcmNlRXJyb3JSZXBvcnQnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBza2lwU2FtZVNjcmVlbkNoZWNrT25Td2l0Y2goKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnc2tpcFNhbWVTY3JlZW5DaGVja09uU3dpdGNoJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgZ2V0T25seVZpc2libGVGaWVsZCAoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnZ2V0T25seVZpc2libGVGaWVsZCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHVwZGF0ZUFjY291bnRJbmZvQXN5bmMgKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3VwZGF0ZUFjY291bnRJbmZvQXN5bmMnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBzYW5pdGl6ZUV2YWx1YXRlZFZhbHVlICgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmdldCgnc2FuaXRpemVFdmFsdWF0ZWRWYWx1ZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHVzZVNlc3Npb25WZXJpZnkgKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3VzZVNlc3Npb25WZXJpZnknKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCB1c2VFeHRlbmRlZFBob25lTnVtYmVyUmVnZXggKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3VzZUV4dGVuZGVkUGhvbmVOdW1iZXJSZWdleCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGdlbmVyYXRlTmV3Q29kZVdjYWdDb21wbGlhbmNlICgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdnZW5lcmF0ZU5ld0NvZGVXY2FnQ29tcGxpYW5jZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGVuZm9yY2VBdXRoRmxvd1JlZGlyZWN0Rm9yU29jaWFsICgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdlbmZvcmNlQXV0aEZsb3dSZWRpcmVjdEZvclNvY2lhbCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHVzZURlY29kZVVSSUNvbXBvbmVudCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd1c2VEZWNvZGVVUklDb21wb25lbnQnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCB1c2VPaWRjR2V0UGFyYW1IYXNoT2xkU3R5bGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgndXNlT2lkY0dldFBhcmFtSGFzaE9sZFN0eWxlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdXNlVmlld3BvcnRQb2xsZXJBY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgndXNlVmlld3BvcnRQb2xsZXJBY3Rpb24nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBpZ25vcmVJbnRlcnJ1cHRpb25zSW5PaWRjUGFzc2l2ZUxvZ2luKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2lnbm9yZUludGVycnVwdGlvbnNJbk9pZGNQYXNzaXZlTG9naW4nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBvdmVycmlkZUFsbENoaWxkQ29udGV4dCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdvdmVycmlkZUFsbENoaWxkQ29udGV4dCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGRpc3BhdGNoTG9naW5FdmVudFdoZW5IYW5kbGVyQWRkZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnZGlzcGF0Y2hMb2dpbkV2ZW50V2hlbkhhbmRsZXJBZGRlZCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0KG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGdpZ3lhLl8uY29uZmlnPy5mbGFncyAmJiBnaWd5YS5fLmNvbmZpZz8uZmxhZ3NbbmFtZV0pIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIEV2ZXJ5IGZsYWcgdGhhdCBpcyBhc3NvY2lhdGVkIHdpdGggZGF0YSBtb2RpZmljYXRpb24gcmVsYXRlZCB0byB0aGUgYXBpIGxheWVyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgYXBpRmxhZ3MoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuIiwiaW1wb3J0IHt1cmxQYXJhbXN9IGZyb20gJy4vdXJsJztcbmltcG9ydCB7Q2FjaGVQcm92aWRlcn0gZnJvbSAnLi9zdG9yYWdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZUpzU2RrTG9hZGVkKGFwaUtleSwgb3JpZ2luSG9zdG5hbWUsIGRvbmUpIHtcbiAgICBpZiAod2luZG93LmdpZ3lhICYmIHdpbmRvdy5naWd5YS5pc0dpZ3lhKSB7IC8vIHdlIGhhdmUgZ2lneWEgb24gcGFnZVxuICAgICAgICBpZighZ2lneWEuaXNSZWFkeSl7IC8vIGJvb3RzdHJhcCBpbiBwcm9jZXNzIC0gd2FpdCBmb3IgYm9vdHN0cmFwIHRvIGZpbmlzaFxuICAgICAgICAgICAgd2FpdEZvckdpZ3lhU2VydmljZVJlYWR5KGRvbmUpO1xuICAgICAgICB9IGVsc2UgeyAvLyBmaW5pc2hlZCBib290c3RyYXAgLSBnaWd5YSBzZXJ2aWNlIGlzIHJlYWR5XG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgeyAvLyBnaWd5YSBpcyBub3Qgb24gcGFnZVxuICAgICAgICBsb2FkR2lneWFKUyhhcGlLZXksIG9yaWdpbkhvc3RuYW1lKTtcbiAgICAgICAgd2FpdEZvckdpZ3lhU2VydmljZVJlYWR5KGRvbmUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDb25maWd1cmF0aW9uKCkge1xuICAgIC8vIGZpbmQgc2NyaXB0IGVsZW1lbnRcbiAgICBjb25zdCBzY3JpcHRFbGVtZW50ID0gZmluZFNjcmlwdEVsZW1lbnQoKTtcblxuICAgIGlmICghc2NyaXB0RWxlbWVudClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQgdG8gZmluZCBzY3JpcHQgZWxlbWVudCcpO1xuXG4gICAgY29uc3QgYXBpS2V5ID0gdXJsUGFyYW1zKHNjcmlwdEVsZW1lbnQuc3JjKVsnYXBpS2V5J107XG4gICAgY29uc3QgY29uZmlnT2JqID0gc2NyaXB0RWxlbWVudC5pbm5lckhUTUwucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xuXG4gICAgaWYgKCFjb25maWdPYmopXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gb2JqZWN0IHBhcmFtcyB3YXMgZm91bmQuJyk7XG5cbiAgICBpZiAoIWFwaUtleSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQgdG8gZmluZCBhcGkga2V5Jyk7XG5cbiAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYW5jaG9yLmhyZWYgPSBzY3JpcHRFbGVtZW50LnNyYztcblxuICAgIGNvbnN0IG9yaWdpbkhvc3RuYW1lID0gYW5jaG9yLmhvc3RuYW1lIHx8IGNhbGNIb3N0bmFtZShjb25maWdPYmopO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXBpS2V5LFxuICAgICAgICBvcmlnaW5Ib3N0bmFtZSxcbiAgICAgICAgY29uZmlnSnNvbjogY29uZmlnT2JqXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkaXJlY3RPbk1pc3NpbmdPaWRjQ29udGV4dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZ2lneWEuXz8uY29uZmlnPy5mbGFncz8ucmVkaXJlY3RPbk1pc3NpbmdPaWRjQ29udGV4dCA/PyBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhY2hlUHJvdmlkZXIoKTogQ2FjaGVQcm92aWRlciB7XG4gICAgY29uc3QgdXNlTG9jYWxTdG9yYWdlID0gZ2lneWEuXz8uY29uZmlnPy5mbGFncz8ub2lkY1VzZUxvY2FsU3RvcmFnZSA/PyBmYWxzZTtcbiAgICByZXR1cm4gdXNlTG9jYWxTdG9yYWdlID8gZ2lneWEudXRpbHMubG9jYWxDYWNoZSA6IGdpZ3lhLnV0aWxzLnNlc3Npb25DYWNoZTtcbn1cblxuZnVuY3Rpb24gY2FsY0hvc3RuYW1lKGNvbmZpZ09iaikge1xuICAgIGNvbnN0IGRjU3RyaW5nID0gY29uZmlnT2JqLmRjID8gKCcuJyArIGNvbmZpZ09iai5kYykgOiAnJztcbiAgICBsZXQgaG9zdG5hbWUgPSAnZ2lneWEuY29tJztcbiAgICBpZihjb25maWdPYmouaG9zdG5hbWUgJiYgY29uZmlnT2JqLmhvc3RuYW1lLm1hdGNoKC8oPzotc3RcXGQrKVxcLihnaWd5YS1hcGlcXC5jbnxzYXBjZG1cXC5jbnxnaWd5YVxcLmNvbSkvKSkge1xuICAgICAgICBob3N0bmFtZSA9IGNvbmZpZ09iai5ob3N0bmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGBjZG5zJHtkY1N0cmluZ30uJHtob3N0bmFtZX1gO1xufVxuXG5mdW5jdGlvbiBsb2FkR2lneWFKUyhhcGlLZXksIG9yaWdpbkhvc3RuYW1lKXtcbiAgICB3aW5kb3cuZ2lneWEgPSB3aW5kb3cuZ2lneWEgfHwge30gYXMgYW55OyAvLy8gaW1wb3J0YW50ISBzbyB3b24ndCBkaXNjYXJkIGN1cnJlbnQgbW9kdWxlcy5cbiAgICB3aW5kb3cuZ2lneWEuaXNHaWd5YSA9IHRydWU7XG4gICAgY29uc3Qgc3JjID0gYGh0dHBzOi8vJHtvcmlnaW5Ib3N0bmFtZX0vanMvZ2lneWEuanM/YXBpS2V5PSR7YXBpS2V5fWA7XG4gICAgY29uc3Qgc2NyaXB0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdEVsZW1lbnQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIHNjcmlwdEVsZW1lbnQuc3JjID0gc3JjO1xuICAgIHNjcmlwdEVsZW1lbnQuYXN5bmMgPSB0cnVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0RWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHdhaXRGb3JHaWd5YVNlcnZpY2VSZWFkeShkb25lKXtcbiAgICAvLyBzZXQgc29jaWFsaXplLmpzIGxvYWQgaGFuZGxlclxuICAgIGxldCBwcmV2SGFuZGxlciA9IG51bGw7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3dbJ29uR2lneWFTZXJ2aWNlUmVhZHknXSAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgcHJldkhhbmRsZXIgPSB3aW5kb3dbJ29uR2lneWFTZXJ2aWNlUmVhZHknXTtcblxuICAgIHdpbmRvd1snb25HaWd5YVNlcnZpY2VSZWFkeSddID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocHJldkhhbmRsZXIpXG4gICAgICAgICAgICBwcmV2SGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICBkb25lKCk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZmluZFNjcmlwdEVsZW1lbnQoKSB7XG4gICAgY29uc3Qgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcbiAgICBsZXQgc2NyaXB0RWxlbWVudDtcblxuICAgIGZvciAobGV0IGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IHNjcmlwdHNbaV07XG4gICAgICAgIGNvbnN0IHNyYyA9IHNjcmlwdC5zcmMudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHNyYyAhPSAnJykge1xuICAgICAgICAgICAgaWYgKHNyYy5pbmRleE9mKCc/YXBpa2V5PScpID4gLTEgJiYgc3JjLmluZGV4T2YoJ2dpZ3lhLm9pZGMuJykgPiAtMSkge1xuICAgICAgICAgICAgICAgIHNjcmlwdEVsZW1lbnQgPSBzY3JpcHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NyaXB0RWxlbWVudDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRMb2dpblRva2VuKGFwaUtleSkge1xuICAgIHJldHVybiBnaWd5YS5fLmFwaUFkYXB0ZXJzLndlYi50b2tlblN0b3JlLmdldChhcGlLZXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VWlkKGNhbGxiYWNrLCBpZ25vcmVJbnRlcnJ1cHRpb25zID0gZmFsc2UpIHtcbiAgICBnaWd5YS5zb2NpYWxpemUuZ2V0VXNlckluZm8oe1xuICAgICAgICBpZ25vcmVJbnRlcnJ1cHRpb25zLFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3JDb2RlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgICBVSUQ6IHJlc3BvbnNlWydVSUQnXSxcbiAgICAgICAgICAgICAgICAgICAgVUlEU2lnbmF0dXJlOiByZXNwb25zZVsnVUlEU2lnbmF0dXJlJ10sXG4gICAgICAgICAgICAgICAgICAgIHNpZ25hdHVyZVRpbWVzdGFtcDogcmVzcG9uc2VbJ3NpZ25hdHVyZVRpbWVzdGFtcCddXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZlVXNlckV4aXN0cyhhcGlLZXksIFVJRCkge1xuICAgIGNvbnN0IGxvZ2luVG9rZW4gPSBnZXRMb2dpblRva2VuKGFwaUtleSk7XG4gICAgcmV0dXJuICEhbG9naW5Ub2tlbiAmJiAhIVVJRDtcbn1cbiIsImltcG9ydCB7Z2V0Q2FjaGVQcm92aWRlcn0gZnJvbSAnLi9zY3JpcHQnO1xuXG5jb25zdCBzZXNzaW9uU3RvcmFnZVRpbWVvdXQgPSAxMCAqIDYwICogMTAwMDsgLy8gYWxsb3cgdXNlciAxMCBtaW51dGVzIHRvIGZpbmlzaFxuXG5leHBvcnQgaW50ZXJmYWNlIENhY2hlUHJvdmlkZXIge1xuICAgIGdldDogKGtleTogc3RyaW5nLCBjYWNoZVRpbW91dDogbnVtYmVyKSA9PiBhbnk7XG4gICAgc2V0OiAoa2V5OiBzdHJpbmcsIHJlc3BvbnNlOiBPYmplY3QpID0+IHZvaWQ7XG4gICAgcmVtb3ZlOiAoa2V5OiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlQ29udGV4dChhcGlLZXksIGNvbnRleHQ6IGFueSwgZG9uZSkge1xuICAgIC8vIHNhdmUgY29udGV4dCBmb3IgbmV4dCByZXRyaXZhbCwgaWYgbm90IHJldHVybmVkIGZyb20gbG9naW5VcmxcbiAgICBjb25zdCBrZXkgPSBjb250ZXh0S2V5KGFwaUtleSk7XG4gICAgbGV0IGNhY2hlID0gZ2V0Q2FjaGVQcm92aWRlcigpO1xuICAgIC8vIEZhbGxiYWNrIHRvIHNlc3Npb24gc3RvcmFnZVxuICAgIGxldCBzYXZlZENvbnRleHRzID0gY2FjaGUuZ2V0KGtleSwgc2Vzc2lvblN0b3JhZ2VUaW1lb3V0KSB8fFxuICAgICAgICBnaWd5YS51dGlscy5zZXNzaW9uQ2FjaGUuZ2V0KGtleSwgc2Vzc2lvblN0b3JhZ2VUaW1lb3V0KSB8fCBbXTtcbiAgICBzYXZlZENvbnRleHRzLnB1c2goY29udGV4dCk7XG4gICAgY2FjaGUuc2V0KGtleSwgc2F2ZWRDb250ZXh0cyk7XG4gICAgZG9uZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ29udGV4dChhcGlLZXkpIHtcbiAgICAvLyByZW1vdmUgdGhlIGNvbnRleHRcbiAgICBjb25zdCBrZXkgPSBjb250ZXh0S2V5KGFwaUtleSk7XG4gICAgbGV0IGNhY2hlID0gZ2V0Q2FjaGVQcm92aWRlcigpO1xuICAgIGNhY2hlLnJlbW92ZShrZXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbnRleHQoYXBpS2V5LCBjYWxsYmFjaykge1xuICAgIC8vIGxvYWQgY29udGV4dCBpZiB3YXMgbm90IHByb3ZpZGVkIGluIHVybFxuICAgIGNvbnN0IGtleSA9IGNvbnRleHRLZXkoYXBpS2V5KTtcblxuICAgIGxldCBjYWNoZSA9IGdldENhY2hlUHJvdmlkZXIoKTtcbiAgICAvLyBGYWxsYmFjayB0byBzZXNzaW9uIHN0b3JhZ2VcbiAgICBsZXQgc2F2ZWRDb250ZXh0cyA9IGNhY2hlLmdldChrZXksIHNlc3Npb25TdG9yYWdlVGltZW91dClcbiAgICAgICAgfHwgZ2lneWEudXRpbHMuc2Vzc2lvbkNhY2hlLmdldChrZXksIHNlc3Npb25TdG9yYWdlVGltZW91dCkgfHwgW107XG4gICAgY29uc3QgbGFzdENvbnRleHQgPSBzYXZlZENvbnRleHRzLnBvcCgpIHx8IHt9O1xuXG4gICAgY2FjaGUuc2V0KGtleSwgc2F2ZWRDb250ZXh0cyk7XG4gICAgY2FsbGJhY2sobGFzdENvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBjb250ZXh0S2V5KGFwaUtleSkge1xuICAgIHJldHVybiAnZ2lnX29pZGNDb250ZXh0XycgKyBhcGlLZXk7XG59XG4iLCJpbXBvcnQge0ZsYWdTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9HaWd5YS5Kcy9hcHAvU2VydmljZXMvRmxhZ1NlcnZpY2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVybFBhcmFtcyhxdWVyeSkge1xuICAgIGlmIChxdWVyeS5pbmRleE9mKCc/JykgPiAtMSlcbiAgICAgICAgcXVlcnkgPSBxdWVyeS5zdWJzdHJpbmcocXVlcnkuaW5kZXhPZignPycpICsgMSk7XG4gICAgaWYgKHF1ZXJ5LmluZGV4T2YoJyMnKSA+IC0xKVxuICAgICAgICBxdWVyeSA9IHF1ZXJ5LnN1YnN0cmluZyhxdWVyeS5pbmRleE9mKCcjJykgKyAxKTtcbiAgICBjb25zdCBxdWVyeVBhcnRzID0gcXVlcnkuc3BsaXQoLyYvKTtcbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJ5UGFydHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3QgcGFyYW0gPSBxdWVyeVBhcnRzW2ldO1xuICAgICAgICBpZiAocGFyYW0uaW5kZXhPZignPScpID09PSAtMSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBwYXJhbVBhcnRzID0gcGFyYW0uc3BsaXQoJz0nKTtcbiAgICAgICAgaWYgKHBhcmFtUGFydHMubGVuZ3RoICE9PSAyKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIHBhcmFtc1twYXJhbVBhcnRzWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJhbVBhcnRzWzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmFtcyhfd2luID0gZ2lneWEuXy5XaW5kb3dQcm92aWRlcikge1xuICAgIGxldCByZXN1bHQgPSAgdXJsUGFyYW1zKF93aW4ubG9jYXRpb24oKS5oYXNoIHx8IF93aW4ubG9jYXRpb24oKS5zZWFyY2gpO1xuICAgIGlmKCFGbGFnU2VydmljZS51c2VPaWRjR2V0UGFyYW1IYXNoT2xkU3R5bGUpIHtcbiAgICAgICAgY29uc3QgaGFzaFBhcmFtc1Jlc3VsdCA9IHVybFBhcmFtcyhfd2luLmxvY2F0aW9uKCkuaGFzaCk7XG4gICAgICAgIGNvbnN0IHNlYXJjaFBhcmFtc1Jlc3VsdCA9IHVybFBhcmFtcyhfd2luLmxvY2F0aW9uKCkuc2VhcmNoKTtcbiAgICAgICAgcmVzdWx0ID0gaGFzaFBhcmFtc1Jlc3VsdFsnbW9kZSddID8gaGFzaFBhcmFtc1Jlc3VsdCA6IHNlYXJjaFBhcmFtc1Jlc3VsdDsgICAgXG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIG1vZGU6IHJlc3VsdFsnbW9kZSddLFxuICAgICAgICBjb250ZXh0OiByZXN1bHRbJ2NvbnRleHQnXSxcbiAgICAgICAgY2xpZW50SUQ6IHJlc3VsdFsnY2xpZW50X2lkJ10gfHwgcmVzdWx0WydjbGllbnRJRCddLFxuICAgICAgICBzY29wZTogcmVzdWx0WydzY29wZSddLFxuICAgICAgICBwcm9tcHQ6IHJlc3VsdFsncHJvbXB0J10sXG4gICAgICAgIGRpc3BsYXk6IHJlc3VsdFsnZGlzcGxheSddLFxuICAgICAgICBtZXNzYWdlOiByZXN1bHRbJ2Vycm9yTWVzc2FnZSddLFxuICAgICAgICBjb2RlOiByZXN1bHRbJ2Vycm9yQ29kZSddLFxuICAgICAgICBjYWxsSUQ6IHJlc3VsdFsnY2FsbElkJ10sXG4gICAgICAgIHNraXBDb25zZW50OiByZXN1bHRbJ2dpZ19za2lwQ29uc2VudCddIHx8IGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyYW1ldGVyQnlOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBtYXRjaCA9IFJlZ0V4cCgnWz8mXScgKyBuYW1lICsgJz0oW14mXSopJykuZXhlYyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICByZXR1cm4gbWF0Y2ggJiYgZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzFdLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZGlyZWN0KHVybCwgcGFyYW1zLCBfd2luID0gZ2lneWEuXy5XaW5kb3dQcm92aWRlcikge1xuICAgIHVybCA9IGdpZ3lhLnV0aWxzLlVSTC5hZGRQYXJhbXNUb1VSTCh1cmwsIHBhcmFtcyk7XG4gICAgaWYgKHVybCAmJiB1cmwubGVuZ3RoICYmIHVybFt1cmwubGVuZ3RoLTFdID09PSAnPycpe1xuICAgICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgLTEpO1xuICAgIH1cbiAgICBcbiAgICBpZighRmxhZ1NlcnZpY2UudXNlT2lkY0dldFBhcmFtSGFzaE9sZFN0eWxlKSB7XG4gICAgICAgIGNvbnN0IGhhc2hQYXJhbXMgPSBfd2luLmxvY2F0aW9uKCkuaGFzaDtcbiAgICAgICAgaWYgKGhhc2hQYXJhbXMgJiYgaGFzaFBhcmFtcy5sZW5ndGggPiAwICYmIGhhc2hQYXJhbXMuaW5kZXhPZignbW9kZScpID09PSAtMSkge1xuICAgICAgICAgICAgdXJsICs9IGhhc2hQYXJhbXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfd2luLmxvY2F0aW9uKCkuaHJlZiA9IHVybDtcbn1cbiIsImltcG9ydCB7bG9hZENvbnRleHQsIHJlbW92ZUNvbnRleHR9IGZyb20gJy4uLy4uL0ZpZG0uQ29tbW9uL3V0aWxzL3N0b3JhZ2UnO1xuaW1wb3J0IHtyZWRpcmVjdFRvQ29udGludWUsIHJlZGlyZWN0VG9FcnJvcn0gZnJvbSAnLi9vaWRjQVBJcyc7XG5pbXBvcnQge3JlZGlyZWN0T25NaXNzaW5nT2lkY0NvbnRleHR9IGZyb20gJy4uLy4uL0ZpZG0uQ29tbW9uL3V0aWxzL3NjcmlwdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzQWZ0ZXJDb25zZW50KHBhcmFtcywgY29uZmlndXJhdGlvbikge1xuICAgIGxvYWRDb250ZXh0KGNvbmZpZ3VyYXRpb24uYXBpS2V5LCBmdW5jdGlvbiAoc2F2ZWRQYXJhbXMpIHtcbiAgICAgICAgaWYgKHJlZGlyZWN0T25NaXNzaW5nT2lkY0NvbnRleHQoKSAmJiAhc2F2ZWRQYXJhbXM/LmNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZWRpcmVjdFRvRXJyb3IoY29uZmlndXJhdGlvbiwge1xuICAgICAgICAgICAgICAgIG1vZGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ01pc3Npbmcgb3IgZXhwaXJlZCBjb250ZXh0JyxcbiAgICAgICAgICAgICAgICBjb2RlOiAnaW52YWxpZF9yZXF1ZXN0J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlQ29udGV4dChjb25maWd1cmF0aW9uLmFwaUtleSk7XG4gICAgICAgIHJlZGlyZWN0VG9Db250aW51ZShjb25maWd1cmF0aW9uLmFwaUtleSwgc2F2ZWRQYXJhbXMuY29udGV4dCk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQge2xvYWRDb250ZXh0LCBzYXZlQ29udGV4dH0gZnJvbSAnLi4vLi4vRmlkbS5Db21tb24vdXRpbHMvc3RvcmFnZSc7XG5pbXBvcnQge2FjdGl2ZVVzZXJFeGlzdHMsIGdldFVpZH0gZnJvbSAnLi4vLi4vRmlkbS5Db21tb24vdXRpbHMvc2Vzc2lvbic7XG5pbXBvcnQge3JlZGlyZWN0QWZ0ZXJMb2dpbiwgcmVkaXJlY3RUb0Vycm9yfSBmcm9tICcuL29pZGNBUElzJztcbmltcG9ydCB7cmVkaXJlY3RPbk1pc3NpbmdPaWRjQ29udGV4dH0gZnJvbSAnLi4vLi4vRmlkbS5Db21tb24vdXRpbHMvc2NyaXB0JztcbmltcG9ydCB7RmxhZ1NlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9jb3JlL0dpZ3lhLkpzL2FwcC9TZXJ2aWNlcy9GbGFnU2VydmljZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0FmdGVyTG9naW4ocGFyYW1zLCBjb25maWd1cmF0aW9uKSB7XG4gICAgbG9hZENvbnRleHQoY29uZmlndXJhdGlvbi5hcGlLZXksIGZ1bmN0aW9uIChzYXZlZFBhcmFtcykge1xuICAgICAgICBpZiAocmVkaXJlY3RPbk1pc3NpbmdPaWRjQ29udGV4dCgpICYmICFzYXZlZFBhcmFtcz8uY29udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlZGlyZWN0VG9FcnJvcihjb25maWd1cmF0aW9uLCB7XG4gICAgICAgICAgICAgICAgbW9kZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTWlzc2luZyBvciBleHBpcmVkIGNvbnRleHQnLFxuICAgICAgICAgICAgICAgIGNvZGU6ICdpbnZhbGlkX3JlcXVlc3QnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2F2ZWRQYXJhbXM/LmNvbnRleHQpIHtcbiAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci5yZXBvcnQoJ29pZGMgY2FsbCBjb250aW51ZSB3aGVuIHRoZXJlIGlzIG5vIGNvbnRleHQnLFxuICAgICAgICAgICAgICAgIHt9LCBmYWxzZSwgRmxhZ1NlcnZpY2UuZm9yY2VFcnJvclJlcG9ydCk7XG4gICAgICAgIH1cblxuICAgICAgICBzYXZlQ29udGV4dChjb25maWd1cmF0aW9uLmFwaUtleSwgc2F2ZWRQYXJhbXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGdldFVpZChmdW5jdGlvbiAodWlkUGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZVVzZXJFeGlzdHMoY29uZmlndXJhdGlvbi5hcGlLZXksIHVpZFBhcmFtcy5VSUQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0QWZ0ZXJMb2dpbihjb25maWd1cmF0aW9uLCB1aWRQYXJhbXMsIHNhdmVkUGFyYW1zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgYWN0aXZlIHVzZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQge2Vuc3VyZUpzU2RrTG9hZGVkLCBmaW5kQ29uZmlndXJhdGlvbn0gZnJvbSAnLi4vLi4vRmlkbS5Db21tb24vdXRpbHMvc2NyaXB0JztcbmltcG9ydCB7cHJvY2Vzc1JlcXVlc3R9IGZyb20gJy4vb2lkY1Byb3h5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGJvb3RzdHJhcCgpIHtcbiAgICBjb25zdCBjb25maWdPYmogPSBmaW5kQ29uZmlndXJhdGlvbigpXG4gICAgZW5zdXJlSnNTZGtMb2FkZWQoY29uZmlnT2JqLmFwaUtleSwgY29uZmlnT2JqLm9yaWdpbkhvc3RuYW1lLFxuICAgICAgICAoKSA9PiBwcm9jZXNzUmVxdWVzdChjb25maWdPYmopKTtcbn1cbiIsImltcG9ydCB7c2F2ZUNvbnRleHR9IGZyb20gJy4uLy4uL0ZpZG0uQ29tbW9uL3V0aWxzL3N0b3JhZ2UnO1xuaW1wb3J0IHtyZWRpcmVjdFRvTG9naW59IGZyb20gJy4vb2lkY0FQSXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0ZvcmNlTG9naW4ocGFyYW1zLCBjb25maWd1cmF0aW9uKSB7XG4gICAgaWYgKCFwYXJhbXNbJ2NvbnRleHQnXSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNvbnRleHQgcGFyYW0nKTtcblxuICAgIHNhdmVDb250ZXh0KGNvbmZpZ3VyYXRpb24uYXBpS2V5LCBwYXJhbXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVkaXJlY3RUb0xvZ2luKGNvbmZpZ3VyYXRpb24pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJy4vYm9vdHN0cmFwJztcblxuYm9vdHN0cmFwKCk7XG5cbmltcG9ydCAqIGFzIGZvcmNlTG9naW4gZnJvbSAnLi9mb3JjZUxvZ2luJztcbmltcG9ydCAqIGFzIGxvZ2luIGZyb20gJy4vbG9naW4nO1xuaW1wb3J0ICogYXMgcGFzc2l2ZUxvZ2luIGZyb20gJy4vcGFzc2l2ZUxvZ2luJztcbmltcG9ydCAqIGFzIGFmdGVyTG9naW4gZnJvbSAnLi9hZnRlckxvZ2luJztcbmltcG9ydCAqIGFzIGFmdGVyQ29uc2VudCBmcm9tICcuL2FmdGVyQ29uc2VudCc7XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi9vaWRjQVBJcyc7XG5pbXBvcnQgKiBhcyB1cmwgZnJvbSAnLi4vLi4vRmlkbS5Db21tb24vdXRpbHMvdXJsJztcbmltcG9ydCAqIGFzIHByb3h5IGZyb20gJy4vb2lkY1Byb3h5JztcblxuZXhwb3J0IHtib290c3RyYXAsIGZvcmNlTG9naW4sIGxvZ2luLCBwYXNzaXZlTG9naW4sIGFmdGVyTG9naW4sIGFmdGVyQ29uc2VudCwgYXBpLCB1cmwsIHByb3h5fTsiLCJpbXBvcnQge3NhdmVDb250ZXh0fSBmcm9tICcuLi8uLi9GaWRtLkNvbW1vbi91dGlscy9zdG9yYWdlJztcbmltcG9ydCB7YWN0aXZlVXNlckV4aXN0cywgZ2V0VWlkfSBmcm9tICcuLi8uLi9GaWRtLkNvbW1vbi91dGlscy9zZXNzaW9uJztcbmltcG9ydCB7cmVkaXJlY3RBZnRlckxvZ2luLCByZWRpcmVjdFRvRXJyb3IsIHJlZGlyZWN0VG9Mb2dpbn0gZnJvbSAnLi9vaWRjQVBJcyc7XG5pbXBvcnQge3JlZGlyZWN0T25NaXNzaW5nT2lkY0NvbnRleHR9IGZyb20gJy4uLy4uL0ZpZG0uQ29tbW9uL3V0aWxzL3NjcmlwdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzTG9naW4ocGFyYW1zLCBjb25maWd1cmF0aW9uKSB7XG4gICAgaWYgKCFwYXJhbXNbJ2NvbnRleHQnXSkge1xuICAgICAgICBnaWd5YS5fLmFwaUFkYXB0ZXJzLndlYi5hcGlTZXJ2aWNlPy5zZW5kUmVwb3J0KCdtaXNzaW5nIG9pZGMgY29udGV4dCcsIHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24sIHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlZGlyZWN0T25NaXNzaW5nT2lkY0NvbnRleHQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlZGlyZWN0VG9FcnJvcihjb25maWd1cmF0aW9uLCB7XG4gICAgICAgICAgICAgICAgbW9kZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXI6IGNvbnRleHQnLFxuICAgICAgICAgICAgICAgIGNvZGU6ICdpbnZhbGlkX3JlcXVlc3QnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjb250ZXh0IHBhcmFtJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzYXZlQ29udGV4dChjb25maWd1cmF0aW9uLmFwaUtleSwgcGFyYW1zLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGdldFVpZChmdW5jdGlvbiAodWlkUGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAoYWN0aXZlVXNlckV4aXN0cyhjb25maWd1cmF0aW9uPy5hcGlLZXksIHVpZFBhcmFtcz8uVUlEKSkge1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0QWZ0ZXJMb2dpbihjb25maWd1cmF0aW9uLCB1aWRQYXJhbXMsIHBhcmFtcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0VG9Mb2dpbihjb25maWd1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQge2dldFBhcmFtZXRlckJ5TmFtZSwgcmVkaXJlY3QsIHVybFBhcmFtc30gZnJvbSAnLi4vLi4vRmlkbS5Db21tb24vdXRpbHMvdXJsJztcbmltcG9ydCB7Z2V0TG9naW5Ub2tlbn0gZnJvbSAnLi4vLi4vRmlkbS5Db21tb24vdXRpbHMvc2Vzc2lvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWRpcmVjdFRvTG9naW4oY29uZmlnT2JqZWN0KSB7XG5cbiAgICBjb25zdCBzY3JpcHRDb25mID0gZ2lneWEudXRpbHMuSlNPTi5kZXNlcmlhbGl6ZShjb25maWdPYmplY3QuY29uZmlnSnNvbikgYXMgYW55O1xuICAgIGlmICghc2NyaXB0Q29uZilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcGFyYW1zIG9iamVjdCBpcyBub3QgdmFsaWQuJyk7XG4gICAgICAgIFxuICAgIHJlZGlyZWN0KHNjcmlwdENvbmYubG9naW5VUkwsIHtcbiAgICAgICAgICAgIGdpZ191aV9sb2NhbGVzIDogZ2V0UGFyYW1ldGVyQnlOYW1lKCdnaWdfdWlfbG9jYWxlcycpID8/IG51bGwsXG4gICAgICAgICAgICBnaWdfbG9naW5faGludCA6IGdldFBhcmFtZXRlckJ5TmFtZSgnZ2lnX2xvZ2luX2hpbnQnKSA/PyBudWxsXG4gICAgICAgIH1cbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVkaXJlY3RUb0NvbnRpbnVlKGFwaUtleSwgY29udGV4dCwgX3dpbiA9IGdpZ3lhLl8uV2luZG93UHJvdmlkZXIpIHtcbiAgICBjb25zdCBoYXNoUGFyYW1zUmVzdWx0ID0gdXJsUGFyYW1zKF93aW4ubG9jYXRpb24oKS5oYXNoKTtcbiAgICBjb25zdCBzZWFyY2hQYXJhbXNSZXN1bHQgPSB1cmxQYXJhbXMoX3dpbi5sb2NhdGlvbigpLnNlYXJjaCk7XG4gICAgY29uc3QgcGFyYW1zID0gaGFzaFBhcmFtc1Jlc3VsdFsnbW9kZSddID8gaGFzaFBhcmFtc1Jlc3VsdCA6IHNlYXJjaFBhcmFtc1Jlc3VsdDtcbiAgICBjb25zdCBjb25zZW50ID0gZ2V0UGFyYW1ldGVyQnlOYW1lKCdjb25zZW50Jyk7XG4gICAgY29uc3Qgc2lnID0gcGFyYW1zWydzaWcnXTtcbiAgICBsZXQgdXNlcktleSA9IHBhcmFtc1sndXNlcktleSddO1xuICAgIGlmICh1c2VyS2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB1c2VyS2V5ID0gbnVsbDtcbiAgICB9XG5cbiAgICByZWRpcmVjdFRvQ29udGludWVFbmRQb2ludCgnYXV0aG9yaXplL2NvbnRpbnVlJywge1xuICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICBsb2dpbl90b2tlbjogZ2V0TG9naW5Ub2tlbihhcGlLZXkpLFxuICAgICAgICBjb25zZW50LFxuICAgICAgICBzaWc6IHNpZyxcbiAgICAgICAgdXNlcktleTogdXNlcktleSxcbiAgICAgICAgZ21pZFRpY2tldDogYXdhaXQgZ2lneWEuXy5hcGlBZGFwdGVyLmdldEdtaWRUaWNrZXQoKVxuICAgIH0sIGFwaUtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWRpcmVjdEFmdGVyTG9naW4oY29uZmlnT2JqZWN0LCB1aWRQYXJhbXMsIHBhcmFtcykge1xuICAgIGlmKHBhcmFtcy5za2lwQ29uc2VudCkge1xuICAgICAgICByZWRpcmVjdFRvQ29udGludWUoY29uZmlnT2JqZWN0LmFwaUtleSwgcGFyYW1zLmNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlZGlyZWN0VG9Db25zZW50KGNvbmZpZ09iamVjdCwgdWlkUGFyYW1zLCBwYXJhbXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZGlyZWN0VG9Db25zZW50KGNvbmZpZ09iamVjdCwgdWlkUGFyYW1zLCBwYXJhbXMpIHtcbiAgICBjb25zdCBzY3JpcHRDb25mID0gZ2lneWEudXRpbHMuSlNPTi5kZXNlcmlhbGl6ZShjb25maWdPYmplY3QuY29uZmlnSnNvbikgYXMgYW55O1xuICAgIGlmICghc2NyaXB0Q29uZilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcGFyYW1zIG9iamVjdCBpcyBub3QgdmFsaWQuJyk7XG5cbiAgICBjb25zdCBjb25zZW50UGFyYW1zID0ge1xuICAgICAgICBjb250ZXh0OiBwYXJhbXMuY29udGV4dCxcbiAgICAgICAgY2xpZW50SUQ6IHBhcmFtcy5jbGllbnRJRCxcbiAgICAgICAgc2NvcGU6IHBhcmFtcy5zY29wZSxcbiAgICAgICAgcHJvbXB0OiBwYXJhbXMucHJvbXB0LFxuICAgICAgICBkaXNwbGF5OiBwYXJhbXMuZGlzcGxheSxcbiAgICAgICAgVUlEOiB1aWRQYXJhbXMuVUlELFxuICAgICAgICBVSURTaWduYXR1cmU6IHVpZFBhcmFtcy5VSURTaWduYXR1cmUsXG4gICAgICAgIHNpZ25hdHVyZVRpbWVzdGFtcDogdWlkUGFyYW1zLnNpZ25hdHVyZVRpbWVzdGFtcFxuICAgIH07XG4gICAgcmVkaXJlY3Qoc2NyaXB0Q29uZi5jb25zZW50VVJMLCBjb25zZW50UGFyYW1zKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVkaXJlY3RUb0Vycm9yKGNvbmZpZ09iamVjdCwgcGFyYW1zKSB7XG4gICAgY29uc3Qgc2NyaXB0Q29uZiA9IGdpZ3lhLnV0aWxzLkpTT04uZGVzZXJpYWxpemUoY29uZmlnT2JqZWN0LmNvbmZpZ0pzb24pIGFzIGFueTtcbiAgICBpZiAoIXNjcmlwdENvbmYpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHBhcmFtcyBvYmplY3QgaXMgbm90IHZhbGlkLicpO1xuXG4gICAgcmVkaXJlY3Qoc2NyaXB0Q29uZi5lcnJvclVSTCwgcGFyYW1zKTtcbn1cblxuZnVuY3Rpb24gcmVkaXJlY3RUb0NvbnRpbnVlRW5kUG9pbnQoZW5kUG9pbnQsIHBhcmFtcywgYXBpS2V5KSB7XG4gICAgLy8gcmVkaXJlY3RzIHRvIGFuIGludGVybmFsIG9pZGMvYXV0aG9yaXplL2NvbnRpbnVlIGVuZHBvaW50IHdpdGggdGhlIGdpdmVuIHBhcmFtZXRlcnNcbiAgICByZWRpcmVjdChcbiAgICAgICAgYGh0dHBzOi8vJHtnaWd5YS5fLmdldEFwaURvbWFpbignZmlkbScpfS9vaWRjL29wL3YxLjAvJHthcGlLZXl9LyR7ZW5kUG9pbnR9YCwgXG4gICAgICAgIHBhcmFtcyk7XG59IiwiaW1wb3J0IHtnZXRQYXJhbXN9IGZyb20gJy4uLy4uL0ZpZG0uQ29tbW9uL3V0aWxzL3VybCc7XG5pbXBvcnQge3Byb2Nlc3NMb2dpbn0gZnJvbSAnLi9sb2dpbic7XG5pbXBvcnQge3Byb2Nlc3NGb3JjZUxvZ2lufSBmcm9tICcuL2ZvcmNlTG9naW4nO1xuaW1wb3J0IHtwcm9jZXNzUGFzc2l2ZUxvZ2lufSBmcm9tICcuL3Bhc3NpdmVMb2dpbic7XG5pbXBvcnQge3Byb2Nlc3NBZnRlckxvZ2lufSBmcm9tICcuL2FmdGVyTG9naW4nO1xuaW1wb3J0IHtwcm9jZXNzQWZ0ZXJDb25zZW50fSBmcm9tICcuL2FmdGVyQ29uc2VudCc7XG5pbXBvcnQge3JlZGlyZWN0VG9FcnJvcn0gZnJvbSAnLi9vaWRjQVBJcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzUmVxdWVzdChjb25maWdPYmopIHtcbiAgICBjb25zdCBwYXJhbXMgPSBnZXRQYXJhbXMoKTtcbiAgICBzd2l0Y2ggKHBhcmFtcy5tb2RlKSB7XG4gICAgICAgIC8vIEF1dGhvcml6ZVxuICAgICAgICBjYXNlIFwibG9naW5cIjpcbiAgICAgICAgICAgIHByb2Nlc3NMb2dpbihwYXJhbXMsIGNvbmZpZ09iaik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBBdXRob3JpemUgcHJvbXB0PWxvZ2luXG4gICAgICAgIGNhc2UgXCJmb3JjZUxvZ2luXCI6XG4gICAgICAgICAgICBwcm9jZXNzRm9yY2VMb2dpbihwYXJhbXMsIGNvbmZpZ09iaik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBBdXRob3JpemUgcHJvbXB0PW5vbmVcbiAgICAgICAgY2FzZSBcInBhc3NpdmVMb2dpblwiOlxuICAgICAgICAgICAgcHJvY2Vzc1Bhc3NpdmVMb2dpbihwYXJhbXMsIGNvbmZpZ09iaik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBMb2dpbiBwYWdlXG4gICAgICAgIGNhc2UgXCJhZnRlckxvZ2luXCI6XG4gICAgICAgICAgICBwcm9jZXNzQWZ0ZXJMb2dpbihwYXJhbXMsIGNvbmZpZ09iaik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBDb25zZW50IHBhZ2VcbiAgICAgICAgY2FzZSBcImFmdGVyQ29uc2VudFwiOlxuICAgICAgICAgICAgcHJvY2Vzc0FmdGVyQ29uc2VudChwYXJhbXMsIGNvbmZpZ09iaik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBFcnJvciBwYWdlXG4gICAgICAgIGNhc2UgXCJlcnJvclwiOlxuICAgICAgICAgICAgcmVkaXJlY3RUb0Vycm9yKGNvbmZpZ09iaiwgcGFyYW1zKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbiIsImltcG9ydCB7c2F2ZUNvbnRleHR9IGZyb20gJy4uLy4uL0ZpZG0uQ29tbW9uL3V0aWxzL3N0b3JhZ2UnO1xuaW1wb3J0IHthY3RpdmVVc2VyRXhpc3RzLCBnZXRVaWR9IGZyb20gJy4uLy4uL0ZpZG0uQ29tbW9uL3V0aWxzL3Nlc3Npb24nO1xuaW1wb3J0IHtyZWRpcmVjdEFmdGVyTG9naW4sIHJlZGlyZWN0VG9Db250aW51ZX0gZnJvbSAnLi9vaWRjQVBJcyc7XG5pbXBvcnQge0ZsYWdTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9HaWd5YS5Kcy9hcHAvU2VydmljZXMvRmxhZ1NlcnZpY2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NQYXNzaXZlTG9naW4ocGFyYW1zLCBjb25maWd1cmF0aW9uKSB7XG4gICAgaWYgKCFwYXJhbXNbJ2NvbnRleHQnXSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNvbnRleHQgcGFyYW0nKTtcblxuICAgIHNhdmVDb250ZXh0KGNvbmZpZ3VyYXRpb24uYXBpS2V5LCBwYXJhbXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZ2V0VWlkKGZ1bmN0aW9uICh1aWRQYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChhY3RpdmVVc2VyRXhpc3RzKGNvbmZpZ3VyYXRpb24uYXBpS2V5LCB1aWRQYXJhbXMuVUlEKSkge1xuICAgICAgICAgICAgICAgIHJlZGlyZWN0QWZ0ZXJMb2dpbihjb25maWd1cmF0aW9uLCB1aWRQYXJhbXMsIHBhcmFtcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCBjYXVzZSB0aGUgY29udGludWUgZW5kcG9pbnQgdG8gcmV0dXJuIGVycm9yKGxvZ2luIHJlcXVpcmVkKSB0byB0aGUgUlBcbiAgICAgICAgICAgICAgICByZWRpcmVjdFRvQ29udGludWUoY29uZmlndXJhdGlvbi5hcGlLZXksIHBhcmFtcy5jb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgRmxhZ1NlcnZpY2UuaWdub3JlSW50ZXJydXB0aW9uc0luT2lkY1Bhc3NpdmVMb2dpbik7XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9