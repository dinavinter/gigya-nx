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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/accounts/Gigya.Js.Plugin.Tfa/app/index.ts");
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

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/DefaultCss.ts":
/*!************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/DefaultCss.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.imgBase = window.gigya._.getCdnResource('/gs/i/comments2/');
exports.defaultCss = {
    reset: [
        '.gig-tfa-container *, *.gig-tfa-container {',
        'word-wrap:break-word;padding:0px;margin:0px;color:inherit;text-decoration:none;width:auto;float:none;',
        'font-family:arial;color:#333333;position:static;text-align:left;vertical-align:baseline;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}',
    ].join(''),
    resetRtl: '.gig-comments-container *, *.gig-comments-container {direction:rtl;text-align:right;}',
    global: [
        '.gig-tfa-container {}',
        '.gig-tfa-header-text {margin-bottom:30px;}',
        '.gig-tfa-button.gig-tfa-button-submit.disabled {pointer-events:none; opacity:0.3;}',
        '.gig-tfa-container input:focus {box-shadow:0 0 3px #50BADE, 0 1px 3px rgba(0, 0, 0, 0.05) inset}',
        '.gig-tfa-container input:focus {border: 1px solid #87B9EA; outline: medium none}',
        '.gig-tfa-container input, .gig-tfa-container select {border: 1px solid #CCCCCC;border-radius: 3px 3px 3px 3px;margin: 6px 0;padding: 5px;}',
        '.gig-tfa-container label {margin-right:15px;}',
        'input.gig-tfa-phone-prefix {display:none;}',
        '.gig-tfa-phone-number {width: 100%}',
        '.gig-tfa-label {font-weight:bold;margin:10px 0;}',
        '.gig-tfa-phone-register-select, .gig-tfa-selectbox {width: 100%}',
        '.gig-tfa-phone-register-type-label {margin: 15px 0 3px}',
        '.gig-tfa-phone-register-type * {margin:0;display:inline-block;vertical-align:middle;margin:0;}',
        '.gig-tfa-phone-register-type span {line-height: 15px;}',
        '.gig-tfa-button-container {text-align:right;margin:15px 0 0;}',
        '.gig-tfa-button {',
        'display:inline-block;text-align: center;border: 1px solid #CECECE;cursor: pointer;padding: 0 12px;',
        'color: #333333;font-weight: bold;border-radius: 4px;line-height: 26px;gradient(#FFFFFF,#F2F2F2)}',
        '.gig-tfa-button:hover {gradient(#F2F2F2,#FFFFFF)}',
        '.gig-tfa-error {color:#ce4635;line-height:14px;font-size:11px;margin:10px 0!important}',
        '.gig-tfa-code-textbox {width: 100%; margin: 6px 0!important}',
        'input.gig-tfa-input-error {border: 1px solid #ce4635 !important}',
        '.gig-tfa-phone-code-resend {color:#2B8DDD;cursor:pointer;}',
        '.gig-tfa-phone-code-phonenumber {}',
        'input.gig-tfa-code-remember-checkbox {margin: 0px 5px 0 0!important;padding: 0;vertical-align: top;}',
        'label.gig-tfa-code-remember-label {display:block; margin: 10px 0 18px!important}',
        '.gig-tfa-phone-resend-yourphone {font-weight:normal}',
        '.gig-tfa-phone-edit-link {margin-left:25px;;color:#2B8DDD;cursor:pointer}',
        '.gig-tfa-select-wrapper {padding:10px 0;margin-bottom: 16px;border-bottom:1px #e0dddd solid}',
        '.gig-tfa-totp-step-label {color: #11598b;font-size:18px!important;padding-bottom:10px}',
        '.gig-tfa-totp-qrcode {text-align:center; margin-bottom: 16px; border-bottom:1px #e0dddd solid}',
        '.gig-tfa-bottom-intro {margin-bottom: 35px!important;margin-top: 15px!important}',
        'div.gig-tfa-totp-header-text {font-size: 15px;color: #4e515e}',
        'div.gig-tfa-button-container.gig-tfa-button-container-top-margin {margin-top:35px!important}',
        'div.gig-tfa-button-container.gig-tfa-button-container-row>.gig-tfa-button {width: 49%!important;}',
        'div.gig-tfa-button-container.gig-tfa-button-container-row div:last-child {float:left!important}',
        'ul.gig-tfa-totp-backup-codes {width: 100%;border:1px black dashed;margin:25px 0;display:flex; flex-wrap:wrap;}',
        'ul.gig-tfa-totp-backup-codes li{flex:0 0 33%;padding:12px; display:flex; justify-content: center;}',
        'div.gig-tfa-row{width:100%;text-align:center; padding:15px 0}',
        '.gig-backup-codes-print-btn{margin-bottom: 10px!important;}',
        '.gig-sr-only {position: absolute !important; overflow: hidden;width: 1px !important; height: 2px; top: 0; left: 0; margin-left: -1px !important;}',
        'a.gig-tfa-link {color:#1371b9;text-decoration:none;font-size:15px;margin:0!important;cursor:pointer}',
    ].join(''),
    mobile: ['.gig-tfa-container *, *.gig-tfa-container {font-size:16px;-webkit-text-size-adjust:none;}'].join(''),
    nonMobile: ['.gig-tfa-container *, *.gig-tfa-container {font-size:12px}'].join(''),
    rtl: [].join(''),
};


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/Templates.ts":
/*!***********************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/Templates.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
// $id- is the "id" passed when calling utils.templates.fill with specific suffix. i.e. $id-some-el-description
exports.defaultTemplates = {
    container: ['<div class="gig-tfa-select-provider"></div>', '<div class="gig-tfa-provider-wrapper" id="$wrapperId"></div>'].join(''),
    selectProvider: [
        '<div class="gig-tfa-select-wrapper">',
        '<div class="gig-tfa-label" id="selectProviderHeader">$selectProviderHeader</div>',
        '<div class="gig-tfa-select" aria-labelledby="selectProviderHeader">',
        '<div class="gig-tfa-select-text"></div>',
        '<select class="gig-tfa-selectbox" tabindex="0"></select>',
        '</div>',
    ].join(''),
    progress: '<div class="gig-tfa-progress"></div>',
    error: ['<div>', '<div tabindex="0" class="gig-tfa-error"></div>', '</div>'].join(''),
    phoneRegister: [
        '<div id="$id-header" class="gig-tfa-header-text">$headerText</div>',
        '<div class="gig-tfa-label" id="$id-select-your-country" aria-hidden="true">$select_your_country</div>',
        '<select class="gig-tfa-phone-register-select" width="248" tabindex="0" aria-labelledby="$id-header $id-select-your-country">' +
            ' <option value="0">$select_area_code</option>' +
            ' <optgroup label=""> ' +
            '<option value="1" isUS="true">$united_states_area_code</option> ' +
            '<option value="1">$canada_area_code</option> <option value="44">$united_kingdom_area_code</option>' +
            ' <option value="61">$australia_area_code</option> <option value="81">$japan_area_code</option> </optgroup> <optgroup label="------------------------"> <option value="93">$afghanistan_area_code</option> <option value="355">$albania_area_code</option> <option value="213">$algeria_area_code</option> <option value="376">$andorra_area_code</option> <option value="244">$angola_area_code</option> <option value="1">$anguilla_area_code</option> <option value="1">$antigua_and_barbuda_area_code</option> <option value="54">$argentina_area_code</option> <option value="374">$armenia_area_code</option> <option value="297">$aruba_area_code</option> <option value="61">$australia_area_code</option> <option value="43">$austria_area_code</option> <option value="994">$azerbaijan_area_code</option> <option value="973">$bahrain_area_code</option> <option value="880">$bangladesh_area_code</option> <option value="1">$barbados_area_code</option> <option value="375">$belarus_area_code</option> <option value="32">$belgium_area_code</option> <option value="501">$belize_area_code</option> <option value="229">$benin_area_code</option> <option value="1">$bermuda_area_code</option> <option value="975">$bhutan_area_code</option> <option value="591">$bolivia_area_code</option> <option value="387">$bosnia_and_herzegovina_area_code</option> <option value="267">$botswana_area_code</option> <option value="55">$brazil_area_code</option> <option value="246">$british_indian_ocean_territory_area_code</option> <option value="673">$brunei_area_code</option> <option value="359">$bulgaria_area_code</option> <option value="226">$burkina_faso_area_code</option> <option value="257">$burundi_area_code</option> <option value="855">$cambodia_area_code</option> <option value="237">$cameroon_area_code</option> <option value="1">$canada_area_code</option> <option value="238">$cape_verde_area_code</option> <option value="1">$cayman_islands_area_code</option> <option value="235">$chad_area_code</option> <option value="56">$chile_area_code</option> <option value="86">$china_area_code</option> <option value="57">$colombia_area_code</option> <option value="242">$congo_area_code</option> <option value="243">$congo_democratic_republic_area_code</option> <option value="506">$costa_rica_area_code</option> <option value="225">$cote_divoire_area_code</option> <option value="385">$croatia_area_code</option> <option value="53">$cuba_area_code</option> <option value="357">$cyprus_area_code</option> <option value="420">$czech_republic_area_code</option> <option value="45">$denmark_area_code</option> <option value="253">$djibouti_area_code</option> <option value="1">$dominica_area_code</option> <option value="1">$dominican_republic_area_code</option> <option value="670">$east_timor_area_code</option> <option value="593">$ecuador_area_code</option> <option value="20">$egypt_area_code</option> <option value="503">$el_salvador_area_code</option> <option value="240">$equatorial_guinea_area_code</option> <option value="372">$estonia_area_code</option> <option value="251">$ethiopia_area_code</option> <option value="500">$falkland_islands_area_code</option> <option value="298">$faroe_islands_area_code</option> <option value="679">$fiji_area_code</option> <option value="358">$finland_area_code</option> <option value="33">$france_area_code</option> <option value="594">$french_guiana_area_code</option> <option value="689">$french_polynesia_area_code</option> <option value="241">$gabon_area_code</option> <option value="220">$gambia_area_code</option> <option value="995">$georgia_area_code</option> <option value="49">$germany_area_code</option> <option value="233">$ghana_area_code</option> <option value="350">$gibraltar_area_code</option> <option value="30">$greece_area_code</option> <option value="299">$greenland_area_code</option> <option value="1">$grenada_area_code</option> <option value="590">$guadeloupe_area_code</option> <option value="1">$guam_area_code</option> <option value="502">$guatemala_area_code</option> <option value="44">$guernsey_area_code</option><option value="224">$guinea_area_code</option> <option value="592">$guyana_area_code</option> <option value="509">$haiti_area_code</option> <option value="504">$honduras_area_code</option> <option value="852">$hong_kong_area_code</option> <option value="36">$hungary_area_code</option> <option value="354">$iceland_area_code</option> <option value="91">$india_area_code</option> <option value="62">$indonesia_area_code</option> <option value="98">$iran_area_code</option> <option value="964">$iraq_area_code</option> <option value="353">$ireland_area_code</option> <option value="44">$isle_of_man_area_code</option> <option value="972">$israel_area_code</option> <option value="39">$italy_area_code</option> <option value="1">$jamaica_area_code</option> <option value="81">$japan_area_code</option> <option value="44">$jersey_area_code</option> <option value="962">$jordan_area_code</option> <option value="7">$kazakhstan_area_code</option> <option value="254">$kenya_area_code</option> <option value="82">$korea_south_area_code</option> <option value="965">$kuwait_area_code</option> <option value="996">$kyrgyzstan_area_code</option> <option value="371">$latvia_area_code</option> <option value="961">$lebanon_area_code</option> <option value="266">$lesotho_area_code</option> <option value="231">$liberia_area_code</option> <option value="218">$libya_area_code</option> <option value="423">$liechtenstein_area_code</option> <option value="370">$lithuania_area_code</option> <option value="352">$luxembourg_area_code</option> <option value="853">$macao_area_code</option> <option value="389">$macedonia_area_code</option> <option value="261">$madagascar_area_code</option> <option value="265">$malawi_area_code</option> <option value="60">$malaysia_area_code</option> <option value="960">$maldives_area_code</option> <option value="223">$somalia_area_code</option> <option value="356">$malta_area_code</option> <option value="596">$martinique_area_code</option> <option value="222">$mauritania_area_code</option> <option value="230">$mauritius_area_code</option> <option value="52">$mexico_area_code</option> <option value="373">$moldova_area_code</option> <option value="377">$monaco_area_code</option> <option value="976">$mongolia_area_code</option> <option value="382">$montenegro_area_code</option> <option value="1">$montserrat_area_code</option> <option value="212">$morocco_area_code</option> <option value="258">$mozambique_area_code</option> <option value="95">$myanmar_area_code</option> <option value="264">$namibia_area_code</option> <option value="977">$nepal_area_code</option> <option value="31">$netherlands_area_code</option> <option value="599">$netherlands_antilles_area_code</option> <option value="687">$new_caledonia_area_code</option> <option value="64">$new_zealand_area_code</option> <option value="505">$nicaragua_area_code</option> <option value="227">$niger_area_code</option> <option value="234">$nigeria_area_code</option> <option value="1">$northern_mariana_islands_area_code</option> <option value="47">$norway_area_code</option> <option value="968">$oman_area_code</option> <option value="92">$pakistan_area_code</option> <option value="970">$palestine_area_code</option> <option value="507">$panama_area_code</option> <option value="595">$paraguay_area_code</option> <option value="51">$peru_area_code</option> <option value="63">$philippines_area_code</option> <option value="48">$poland_area_code</option> <option value="351">$portugal_area_code</option> <option value="1">$puerto_rico_area_code</option> <option value="974">$qatar_area_code</option> <option value="262">$reunion_area_code</option> <option value="40">$romania_area_code</option> <option value="7">$russia_area_code</option> <option value="250">$rwanda_area_code</option> <option value="1">$saint_kitts_and_nevis_area_code</option> <option value="1">$saint_lucia_area_code</option> <option value="1">$saint_vincent_area_code</option> <option value="966">$saudi_arabia_area_code</option> <option value="221">$senegal_area_code</option> <option value="381">$serbia_area_code</option> <option value="248">$seychelles_area_code</option> <option value="232">$sierra_leone_area_code</option> <option value="65">$singapore_area_code</option> <option value="421">$slovakia_area_code</option> <option value="386">$slovenia_area_code</option> <option value="677">$solomon_islands_area_code</option> <option value="252">$somalia_area_code</option> <option value="27">$south_africa_area_code</option> <option value="34">$spain_area_code</option> <option value="94">$sri_lanka_area_code</option> <option value="249">$sudan_area_code</option> <option value="597">$suriname_area_code</option> <option value="268">$swaziland_area_code</option> <option value="46">$sweden_area_code</option> <option value="41">$switzerland_area_code</option> <option value="963">$syria_area_code</option> <option value="886">$taiwan_area_code</option> <option value="992">$tajikistan_area_code</option> <option value="255">$tanzania_area_code</option> <option value="66">$thailand_area_code</option> <option value="228">$togo_area_code</option> <option value="676">$tonga_area_code</option> <option value="1">$trinidad_and_tobago_area_code</option> <option value="216">$tunisia_area_code</option> <option value="90">$turkey_area_code</option> <option value="993">$turkmenistan_area_code</option> <option value="256">$uganda_area_code</option> <option value="380">$ukraine_area_code</option> <option value="971">$united_arab_emirates_area_code</option> <option value="44">$united_kingdom_area_code</option> <option value="1" isUS="true">$united_states_area_code</option> <option value="598">$uruguay_area_code</option> <option value="998">$uzbekistan_area_code</option> <option value="678">$vanuatu_area_code</option> <option value="58">$venezuela_area_code</option> <option value="84">$viet_nam_area_code</option> <option value="1">$virgin_islands_british_area_code</option> <option value="681">$wallis_and_futuna_area_code</option> <option value="967">$yemen_area_code</option> <option value="260">$zambia_area_code</option> <option value="263">$zimbabwe_area_code</option> </optgroup></select>',
        '<div class="gig-tfa-label" id="$id-phone-number" aria-hidden="true">$enter_your_phone_number</div>',
        '<input class="gig-tfa-phone-prefix" type="text" disabled="disabled"/>',
        '<input class="gig-tfa-phone-number" type="text" aria-labelledby="$id-phone-number" />',
        '<div class="gig-tfa-verification-method" style="display:none">',
        '<div class="gig-tfa-label gig-tfa-phone-register-type-label" id="gig-tfa-phone-get-code-by">$get_code_by</div>',
        '<label class="gig-tfa-phone-register-type gig-tfa-phone-register-type-sms" for="$id-get-sms-code">',
        '<input class="gig-tfa-phone-register-type-radio" name="phoneMethod" aria-labelledby="gig-tfa-phone-get-code-by rb-sms-label" type="radio" value="sms" id="$id-get-sms-code" checked /> <span id="rb-sms-label">$text_message</span></label>',
        '<label class="gig-tfa-phone-register-type gig-tfa-phone-register-type-voice-call"  for="$id-get-voice-code">',
        '<input class="gig-tfa-phone-register-type-radio" name="phoneMethod" type="radio" value="voice" id="$id-get-voice-code" /> <span>$voice_call</span></label>',
        '</div>',
        '<div class="gig-tfa-error" aria-atomic="true" role="alert"></div>',
        '<div class="gig-tfa-button-container"><div class="gig-tfa-button gig-tfa-button-next" role="button" tabindex="0">$send</div></div>',
    ].join(''),
    phoneEnterCode: [
        '<div id="$id-header-text" tabindex="-1"  class="gig-tfa-phone-code-header-text">$headerText</div>',
        '<div id="$id-subtext" tabindex="-1" class="gig-tfa-phone-code-header-subtext"><span class="gig-tfa-phone-code-phonenumber"></span>&nbsp;(<span class="gig-tfa-phone-code-resend" tabindex="0" role="button">$resend</span>)</div>',
        '<label class="gig-tfa-label" id="$id-enter-code" tabindex="-1">',
        '$enter_code',
        '<input class="gig-tfa-code-textbox" type="text" tabindex="0"/>',
        '</label>',
        '<div class="gig-tfa-error" aria-atomic="true" role="alert"></div>',
        '<label class="gig-tfa-code-remember-label" tabindex="-1" for="$id-remember"><input class="gig-tfa-code-remember-checkbox" type="checkbox" tabindex="0" id="$id-remember" />$remember_this_device</label>',
        '<div class="gig-tfa-button-container"><div class="gig-tfa-button gig-tfa-button-submit" tabindex="0" role="button">$submit</div></div>',
    ].join(''),
    emailEnterCode: [
        '<div id="$id-header-text" tabindex="-1" class="gig-tfa-email-code-header-text">$headerText</div>',
        '<div id="$id-email" tabindex="-1" class="gig-tfa-email-text">$email</div>',
        '<label class="gig-tfa-label" id="$id-enter-code" tabindex="-1">',
        '$enter_code',
        '<input class="gig-tfa-code-textbox" type="text" tabindex="0" aria-label="$enter_code"/>',
        '</label>',
        '<div class="gig-tfa-error" aria-atomic="true" role="alert"></div>',
        '<label class="gig-tfa-code-remember-label" tabindex="-1" for="$id-remember"><input class="gig-tfa-code-remember-checkbox" type="checkbox" tabindex="0" id="$id-remember" />$remember_this_device</label>',
        '<div class="gig-tfa-button-container"><div class="gig-tfa-button gig-tfa-button-submit" tabindex="0" role="button">$submit</div></div>',
    ].join(''),
    phoneResend: [
        '<div class="gig-tfa-phone-resend-header-text">$headerText</div>',
        '<div class="gig-tfa-verification-method" style="display:none">',
        '<div class="gig-tfa-label gig-tfa-phone-resend-type-label">$get_code_by</div>',
        '<label class="gig-tfa-phone-resend-type gig-tfa-phone-resend-type-sms" for="$id-get-sms-code"><input class="gig-tfa-phone-resend-type-radio" name="phoneMethod" type="radio" value="sms" id="$id-get-sms-code" /> <span>$text_message</span></label>',
        '<label class="gig-tfa-phone-resend-type gig-tfa-phone-resend-type-voice-call" for="$id-get-voice-code"><input class="gig-tfa-phone-resend-type-radio" name="phoneMethod" type="radio" value="voice" id="$id-get-voice-code" /> <span>$voice_call</span></label>',
        '</div>',
        '<div class="gig-tfa-label gig-tfa-phone-resend-yourphone-label">$your_phone_number <span class="gig-tfa-phone-resend-yourphone"></span></div>',
        '<div class="gig-tfa-button-container"><div class="gig-tfa-button gig-tfa-button-send" tabindex="0" role="button">$send</div></div>',
    ].join(''),
    phoneEdit: ['<div class="gig-tfa-phone-edit-header-text">$headerText</div>', '<div class="gig-tfa-phone-edit-numbers"></div>'].join(''),
    phoneEditEntry: [
        '<span class="gig-tfa-phone-edit-number">$phoneNumber</span><span class="gig-tfa-phone-edit-link" data-phoneid="$phoneId" tabindex="0" role="button">$edit</span>',
    ].join(''),
    totpRegister: [
        '<h2 id="$id-step-1" class="gig-tfa-totp-step-label">$step1</h2>',
        '<div id="$id-scan-qr-code-label" class="gig-tfa-label">$scan_qr_code</div>',
        '<div class="gig-tfa-totp-qrcode" tabindex="0" aria-labelledby="$id-step-1 $id-scan-qr-code-label">',
        '<img alt="QR Code Image" src="$qrCode"/>',
        '</div>',
        '<h2 id="$id-step-2" class="gig-tfa-totp-step-label">$step2</h2>',
        '<div class="gig-tfa-label" id="$id-enter-code"  >$enter_code</div>',
        '<input class="gig-tfa-code-textbox" type="text" aria-labelledby="$id-step-2 $id-enter-code $id-enter-code-error" tabindex="0"/>',
        '<div class="gig-tfa-error" id="$id-enter-code-error" aria-atomic="true" role="alert"></div>',
        '<label class="gig-tfa-code-remember-label" for="$id-remember-me" id="$gig-tfa-code-remember-label"><input aria-labelledby="$gig-tfa-code-remember-label" class="gig-tfa-code-remember-checkbox" type="checkbox" tabindex="0" id="$id-remember-me" />$remember_this_device</label>',
        '<div id="$id-download-backup-codes" class="gig-tfa-label gig-tfa-bottom-intro">$downloadBackupCodesIntro</div>',
        '<div class="gig-tfa-button-container" aria-describedby="$id-download-backup-codes"><div class="gig-tfa-button gig-tfa-button-submit" tabindex="0" role="button">$submit</div></div>',
    ].join(''),
    totpEdit: [
        '<div id="$id-header" tabindex="-1" aria-label="$headerText" class="gig-tfa-totp-header-text gig-tfa-totp-edit-header-text">$headerText</div>',
        '<div class="gig-tfa-error" aria-atomic="true" role="alert"></div>',
        '<div class="gig-tfa-button-container gig-tfa-button-container-top-margin">',
        '<div class="gig-tfa-button gig-tfa-button-change-device" title="$changeDevice" tabindex="0" aria-labelledby="$id-header" role="button">$changeDevice</div>',
        '<div class="gig-tfa-button gig-tfa-button-backup-codes" title="$backupCodes" tabindex="0" aria-labelledby="$id-header" role="button">$backupCodes</div>',
        '</div>',
    ].join(''),
    totpBackupCodes: [
        '<div id="$id-header" tabindex="-1" aria-label="$headerText" class="gig-tfa-totp-header-text gig-tfa-totp-backup-codes-header-text">$headerText</div>',
        '<span class="gig-sr-only">list of 9 backup codes</span>',
        '<ul class="gig-tfa-totp-backup-codes">',
        '<li>' +
            '<span aria-hidden="true">$backupCode1</span>' +
            '<span class="gig-sr-only">1st item $backupCode1</span>' +
            '</li>',
        '<li>' +
            '<span aria-hidden="true">$backupCode2</span>' +
            '<span class="gig-sr-only">2nd item $backupCode2</span>' +
            '</li>',
        '<li>' +
            '<span aria-hidden="true">$backupCode3</span>' +
            '<span class="gig-sr-only">3rd item $backupCode3</span>' +
            '</li>',
        '<li>' +
            '<span aria-hidden="true">$backupCode4</span>' +
            '<span class="gig-sr-only">4th item $backupCode4</span>' +
            '</li>',
        '<li>' +
            '<span aria-hidden="true">$backupCode5</span>' +
            '<span class="gig-sr-only">5th item $backupCode5</span>' +
            '</li>',
        '<li>' +
            '<span aria-hidden="true">$backupCode6</span>' +
            '<span class="gig-sr-only">6th item $backupCode6</span>' +
            '</li>',
        '<li>' +
            '<span aria-hidden="true">$backupCode7</span>' +
            '<span class="gig-sr-only">7th item $backupCode7</span>' +
            '</li>',
        '<li>' +
            '<span aria-hidden="true">$backupCode8</span>' +
            '<span class="gig-sr-only">8th item $backupCode8</span>' +
            '</li>',
        '<li>' +
            '<span aria-hidden="true">$backupCode9</span>' +
            '<span class="gig-sr-only">9th item $backupCode9</span>' +
            '</li>',
        '</ul>',
        '<div class="gig-tfa-button-container">',
        '<div id="totp-backupCodes-print-btn" class="gig-tfa-button gig-backup-codes-print-btn" title="$print" tabindex="0" role="button">',
        '<span aria-labelledby="$id-header" class="gig-sr-only"></span>' +
            '$print',
        '</div>',
        '</div>',
        '<div class="gig-tfa-row">',
        '<a class="gig-tfa-link gig-tfa-generate-new-codes" tabindex="0" role="button">$generateNewCodes</a>',
        '</div>',
    ].join(''),
    totpGenerateNewCodesConfirmation: [
        '<div class="gig-tfa-label">$resetCodesQuestion</div>',
        '<div class="gig-tfa-button-container gig-tfa-button-container-row gig-tfa-button-container-top-margin d-flex justify-content-space">',
        '<div class="gig-tfa-button gig-backup-codes-cancel" tabindex="0" role="button">$cancel</div>',
        '<div class="gig-tfa-button gig-backup-codes-confirm" tabindex="0" role="button">$yes</div>',
        '</div>',
    ],
    totpGenerateNewCodesConfirmationWCAGComply: [
        "<div role=\"group\" aria-labelledby=\"reset-codes-question\">\n            <div id=\"reset-codes-question\" class=\"gig-tfa-label\">$resetCodesQuestion</div>\n            <div class=\"gig-tfa-button-container gig-tfa-button-container-row gig-tfa-button-container-top-margin d-flex justify-content-space\">\n                <div class=\"gig-tfa-button gig-backup-codes-cancel\" tabindex=\"0\" role=\"button\">$cancel</div>\n                <div class=\"gig-tfa-button gig-backup-codes-confirm\" tabindex=\"0\" role=\"button\">$yes</div>\n            </div>\n        </div>",
    ],
    totpVerify: [
        '<div class="gig-tfa-label" id="$id-enter-code" tabindex="-1" aria-hidden="true">$enter_code</div>',
        '<input class="gig-tfa-code-textbox" type="text" tabindex="0" aria-labelledby="$id-enter-code"/>',
        '<div class="gig-tfa-error" tabindex="0" aria-atomic="true" role="alert"></div>',
        '<label class="gig-tfa-code-remember-label" for="$id-remember-me"><input class="gig-tfa-code-remember-checkbox" type="checkbox" tabindex="0" id="$id-remember-me" />$remember_this_device</label>',
        '<div class="gig-tfa-button-container"><div class="gig-tfa-button gig-tfa-button-submit" tabindex="0" role="button">$submit</div></div>',
        '<div class="gig-tfa-row gig-tfa-use-backup-code-row">',
        '<a class="gig-tfa-link gig-tfa-use-backup-code" tabindex="0">$useBackupCode</a>',
        '</div>',
    ].join(''),
    pushVerificationPhone: [
        '<div class="gig-tfa-label" id="$id-push-tfa" tabindex="-1" aria-hidden="true">$call_to_action</div>',
        '<div class="gig-tfa-error" tabindex="0" aria-atomic="true" role="alert"></div>',
        '<div class="gig-tfa-row gig-tfa-use-backup-code-row">',
        '<a class="gig-tfa-link gig-tfa-use-backup-code" tabindex="0">$useBackupCode</a>',
        '<br/>',
        '<a class="gig-tfa-link gig-tfa-resend-push-notification" tabindex="0">$resendPushNotification</a>',
        '</div>',
    ].join(''),
    pushVerificationBackupCodes: [
        '<div class="gig-tfa-label" id="$id-push-tfa" tabindex="-1" aria-hidden="true">$call_to_action</div>',
        '<input class="gig-tfa-code-textbox" type="text" tabindex="0" aria-labelledby="$id-push-tfa"/>',
        '<div class="gig-tfa-error" tabindex="0" aria-atomic="true" role="alert"></div>',
        '<div class="gig-tfa-button-container"><div class="gig-tfa-button gig-tfa-button-submit" tabindex="0" role="button">$submit</div></div>',
        '<div class="gig-tfa-row gig-tfa-use-backup-code-row">',
        '<a class="gig-tfa-link gig-tfa-resend-push-notification" tabindex="0">$resendPushNotification</a>',
        '</div>',
    ].join(''),
};


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin.ts":
/*!***********************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var Templates_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/Templates */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/Templates.ts");
var DefaultCss_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/DefaultCss */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/DefaultCss.ts");
var TfaProviderFactory_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviderFactory */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviderFactory.ts");
var constants_1 = __webpack_require__(/*! src/accounts/constants */ "./src/accounts/constants.ts");
var TfaMode;
(function (TfaMode) {
    TfaMode[TfaMode["verify"] = 0] = "verify";
    TfaMode[TfaMode["register"] = 1] = "register";
    TfaMode[TfaMode["add"] = 2] = "add";
    TfaMode[TfaMode["edit"] = 3] = "edit";
})(TfaMode = exports.TfaMode || (exports.TfaMode = {}));
var VerificationMethod;
(function (VerificationMethod) {
    VerificationMethod[VerificationMethod["SMS"] = 0] = "SMS";
    VerificationMethod[VerificationMethod["VOICE"] = 1] = "VOICE";
})(VerificationMethod = exports.VerificationMethod || (exports.VerificationMethod = {}));
exports.FriendlyProviderName = function (provider) {
    switch (provider.name) {
        case 'livelink': return 'Phone (SMS)';
        case 'gigyaPhone': return Boolean(provider.capabilities) ?
            "Phone (" + provider.capabilities.join('/') + ")" :
            'Phone';
        case 'gigyaTotp': return 'Time based Authentication';
        case 'gigyaPush': return 'Push Notification';
        case 'gigyaEmail': return 'Email';
        default: return 'Unknown TFA Provider';
    }
};
var TfaPlugin = /** @class */ (function () {
    function TfaPlugin(params) {
        var _this = this;
        this.params = params;
        this.activeProviders = [];
        this.inactiveProviders = [];
        this.templates = window.gigya.utils.object.clone(Templates_1.defaultTemplates, false);
        this.mode = this.getModeByString(params['mode']);
        this.container = document.getElementById(params['containerID']) || document.createElement('div');
        this.container.id = this.container.id || String(Date.now() + Math.floor(Math.random() * 100));
        this.initUI();
        this.updateProviders(function () {
            window.gigya.events.dispatchForWidget({
                eventName: 'load',
            }, _this.params);
            _this.showSelector();
        });
    }
    TfaPlugin.prototype.getText = function (textKey, replaceStr, withStr) {
        if (this.params['customLang'] && this.params['customLang'][textKey]) {
            return this.params['customLang'][textKey].replace(replaceStr, withStr);
        }
        else {
            return window.gigya.pluginUtils.lang.getLocalizedText('gigya.services.accounts.plugins.tfa.js', textKey, this.params['lang'], replaceStr, withStr);
        }
    };
    TfaPlugin.prototype.initUI = function () {
        var deviceType = this.params['deviceType'] ? this.params['deviceType'].toLowerCase() : 'desktop';
        this.isMobileUI = deviceType == 'mobile' || (deviceType == 'auto' && window.gigya.localInfo.isMobile);
        var cssPrefix = this.params['cssPrefix'];
        if (cssPrefix || !this.addedCss) {
            var lang = this.params['lang'];
            this.isRtl = lang == 'he' || lang == 'ar';
            window.gigya._.plugins.utils.css.addCss(DefaultCss_1.defaultCss.reset, cssPrefix);
            if (this.isRtl)
                window.gigya._.plugins.utils.css.addCss(DefaultCss_1.defaultCss.resetRtl, cssPrefix);
            var fixedCss = window.gigya.pluginUtils.css.fixCss(DefaultCss_1.defaultCss.global);
            var fixedRtlCss = window.gigya.pluginUtils.css.fixCss(DefaultCss_1.defaultCss.rtl);
            window.gigya._.plugins.utils.css.addCss(fixedCss, cssPrefix);
            if (this.isRtl)
                window.gigya._.plugins.utils.css.addCss(fixedRtlCss, cssPrefix);
            if (this.isMobileUI) {
                window.gigya._.plugins.utils.css.addCss(DefaultCss_1.defaultCss.mobile, cssPrefix);
            }
            else {
                window.gigya._.plugins.utils.css.addCss(DefaultCss_1.defaultCss.nonMobile, cssPrefix);
            }
            if (window.gigya.localInfo.isMobile && window.gigya.localInfo.isSafari) {
                window.gigya._.plugins.utils.css.addCss('.gig-tfa-container * {-webkit-text-size-adjust:none;}', cssPrefix);
            }
            this.addedCss = true;
        }
        if (this.isMobileUI) {
            this.container.style.width = '100%';
        }
        this.container.className = 'gig-tfa-container';
        this.container.innerHTML = window.gigya.utils.templates.fill(this.templates['container'], { wrapperId: this.container.id + '_wrapper' });
    };
    TfaPlugin.prototype.showProgress = function () {
        if (this.selectedProvider && this.selectedProvider.container) {
            window.gigya.global.showLoader(this.selectedProvider.container, 'gig-tfa-provider-loader');
        }
    };
    TfaPlugin.prototype.hideProgress = function () {
        var progressEl = this.container.querySelector('.gig-tfa-provider-loader');
        if (progressEl)
            window.gigya.utils.DOM.removeElement(progressEl);
    };
    TfaPlugin.prototype.getModeByString = function (mode) {
        for (var modeIndex in TfaMode) {
            if (TfaMode[modeIndex] == mode) {
                return TfaMode[TfaMode[modeIndex]];
            }
        }
    };
    TfaPlugin.prototype.updateProviders = function (callback) {
        var _this = this;
        this.showProgress();
        window.gigya.accounts.tfa.getProviders(this.params, {
            callback: function (response) {
                _this.hideProgress();
                _this.inactiveProviders = response['inactiveProviders'] || [];
                _this.activeProviders = response['activeProviders'] || [];
                if (!_this.mode) {
                    if (_this.activeProviders.length == 0) {
                        _this.mode = TfaMode.register;
                    }
                    else {
                        _this.mode = TfaMode.verify;
                    }
                }
                callback();
            },
        });
    };
    TfaPlugin.prototype.initTfa = function (provider, mode, initCallback) {
        var _this = this;
        if (initCallback === void 0) { initCallback = function () { }; }
        window.gigya.accounts.tfa.initTFA(this.params, {
            provider: provider,
            mode: TfaMode[mode],
            callback: function (response) {
                _this.params['gigyaAssertion'] = response['gigyaAssertion'];
                initCallback(response);
            },
        });
    };
    TfaPlugin.prototype.startProviderFlow = function (provider, mode) {
        var _this = this;
        var providerContainer = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-provider-wrapper')[0];
        this.selectedProvider = TfaProviderFactory_1.getTfaProviderInstance(provider.name, this, providerContainer, this.params, mode, function (response, providerAssertion, isTemp) {
            _this.onProviderCallback(response, providerAssertion, isTemp);
        });
        this.selectedProvider.startFlow(provider.capabilities);
    };
    TfaPlugin.prototype.showProvider = function (provider, mode) {
        var _this = this;
        // when TfaProvider is in edit mode, initTFA in edit mode is done from the TfaProvider
        this.initTfa(provider.name, mode == TfaMode.edit ? TfaMode.verify : mode, function (response) {
            if (response['errorCode'] == 0) {
                _this.startProviderFlow(provider, mode);
            }
            else {
                _this.onDone(response);
            }
        });
    };
    TfaPlugin.prototype.onProviderCallback = function (response, providerAssertion, isTemp) {
        var _this = this;
        if (response['errorCode'] == 0) {
            window.gigya.accounts.tfa.finalizeTFA(this.params, {
                providerAssertion: providerAssertion,
                tempDevice: isTemp,
                callback: function (response) {
                    _this.onDone(response);
                },
            });
        }
        else {
            this.onDone(response);
        }
    };
    TfaPlugin.prototype.onDone = function (response) {
        this.container.innerHTML = '';
        window.gigya.events.dispatchForWidget({
            eventName: 'done',
            response: response,
        }, this.params);
    };
    TfaPlugin.prototype.showSelector = function (mode) {
        if (mode === void 0) { mode = this.mode; }
        var supportedProviders = this.getSupportedProviders(mode);
        if (!supportedProviders || supportedProviders.length == 0) {
            return;
        }
        supportedProviders = supportedProviders.map(function (provider) {
            return __webpack_provided_Object_dot_assign(provider, { displayName: exports.FriendlyProviderName(provider) });
        });
        this.showProvider(supportedProviders[0], mode);
        if (supportedProviders.length > 1) {
            this.showProviderSelector(supportedProviders, mode);
        }
    };
    TfaPlugin.prototype.showProviderSelector = function (providers, mode) {
        var _this = this;
        if (mode === void 0) { mode = this.mode; }
        var selectContainer = this.container.querySelector('.gig-tfa-select-provider');
        selectContainer.innerHTML = window.gigya.utils.templates.fill(this.templates['selectProvider'], {
            selectProviderHeader: this.getText('select_provider'),
        });
        var providerSelector = this.container.querySelector('.gig-tfa-selectbox');
        providers
            .map(function (provider) {
            var option = document.createElement('option');
            option.value = provider.name;
            option.text = provider.displayName;
            return option;
        })
            .forEach(function (option) { return providerSelector.add(option); });
        window.gigya.utils.DOM.addEventListener(providerSelector, 'change', function (e) {
            _this.showProgress();
            var selectedProvider = e.target.options[e.target.selectedIndex];
            var supportedProviders = _this.getSupportedProviders(mode);
            if (!supportedProviders.length) {
                _this.showProvider({ name: selectedProvider.value }, mode);
                return;
            }
            _this.showProvider(window.gigya.utils.array.first(supportedProviders, function (p) { return (p === null || p === void 0 ? void 0 : p.name) === selectedProvider.value; }), mode);
        });
    };
    TfaPlugin.prototype.getSupportedProviders = function (mode) {
        var providers = this.getProvidersForMode(mode);
        if (!providers || providers.length == 0) {
            return;
        }
        return providers.filter(function (p) { return TfaProviderFactory_1.isTfaProviderSupported(p.name); });
    };
    TfaPlugin.prototype.getProvidersForMode = function (mode) {
        switch (mode) {
            case TfaMode.register:
            case TfaMode.add:
                return this.inactiveProviders;
            case TfaMode.edit:
                //since emailTfa is not editable and phoneTfa is, I can have those two providers
                // together and so I have to only return the one which is editable
                return this.getEditableProviders();
            case TfaMode.verify:
                return this.activeProviders;
        }
    };
    TfaPlugin.prototype.getEditableProviders = function () {
        var editableProviders = [];
        for (var i = 0; i <= this.activeProviders.length - 1; i++) {
            var isEditable = this.isTfaProviderEditable(this.activeProviders[i].name);
            if (isEditable) {
                editableProviders.push(this.activeProviders[i]);
            }
        }
        return editableProviders;
    };
    TfaPlugin.prototype.isTfaProviderEditable = function (providerToCheck) {
        // go over the list of editable providers
        return constants_1.EditableTfaProvidersTypes[providerToCheck] != undefined;
    };
    TfaPlugin.prototype.onAfterScreenLoad = function (screen, caption) {
        window.gigya.events.dispatchForWidget({
            eventName: 'afterScreenLoad',
            screen: screen,
            caption: caption,
        }, this.params);
    };
    return TfaPlugin;
}());
exports.TfaPlugin = TfaPlugin;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviderFactory.ts":
/*!********************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviderFactory.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var GigyaPhoneProvider_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/GigyaPhoneProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/GigyaPhoneProvider.ts");
var LiveLinkPhoneProvider_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/LiveLinkPhoneProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/LiveLinkPhoneProvider.ts");
var EmailTfaProvider_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/EmailTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/EmailTfaProvider.ts");
var TotpTfaProvider_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/TotpTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/TotpTfaProvider.ts");
var PushTfaProvider_1 = __webpack_require__(/*! ./TfaProviders/PushTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PushTfaProvider.ts");
var tfaProviders = {
    gigyaPhone: GigyaPhoneProvider_1.GigyaPhoneProvider,
    livelink: LiveLinkPhoneProvider_1.LiveLinkPhoneProvider,
    gigyaEmail: EmailTfaProvider_1.EmailTfaProvider,
    gigyaTotp: TotpTfaProvider_1.TotpTfaProvider,
    gigyaPush: PushTfaProvider_1.PushTfaProvider
};
function getTfaProviderInstance(providerName, plugin, container, params, mode, callback) {
    return tfaProviders[providerName] ? new tfaProviders[providerName](plugin, container, params, mode, callback) : null;
}
exports.getTfaProviderInstance = getTfaProviderInstance;
function isTfaProviderSupported(providerName) {
    return tfaProviders[providerName] != null;
}
exports.isTfaProviderSupported = isTfaProviderSupported;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider.ts":
/*!******************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! src/accounts/constants */ "./src/accounts/constants.ts");
var BaseTfaProvider = /** @class */ (function () {
    function BaseTfaProvider(plugin, container, params, mode, callback, restartFlowInterval) {
        if (restartFlowInterval === void 0) { restartFlowInterval = constants_1.gigyaAssertionExpiration; }
        this.plugin = plugin;
        this.container = container;
        this.params = params;
        this.mode = mode;
        this.callback = callback;
        this.restartFlowInterval = restartFlowInterval;
    }
    BaseTfaProvider.prototype.showError = function (error, errorElements) {
        if (errorElements === void 0) { errorElements = []; }
        var errorContainer = this.container.querySelector('div.gig-tfa-error.submit-error');
        if (!errorContainer) {
            this.container.appendChild(window.gigya.utils.DOM.createElementFromTemplate(this.plugin.templates['error']));
            errorContainer = this.container.querySelector('div.gig-tfa-error');
        }
        errorContainer.innerHTML = error;
        errorContainer.setAttribute('role', 'alert');
        errorContainer.removeAttribute('aria-hidden');
        for (var i = 0; i < errorElements.length; i++) {
            window.gigya.utils.DOM.addClassToElement(errorElements[i], 'gig-tfa-input-error');
        }
    };
    BaseTfaProvider.prototype.hideError = function (errorElements) {
        if (errorElements === void 0) { errorElements = []; }
        var errorContainer = this.container.querySelector('div.gig-tfa-error.submit-error');
        if (errorContainer) {
            errorContainer.innerHTML = '';
            errorContainer.setAttribute('aria-hidden', 'true');
            errorContainer.removeAttribute('role');
        }
        for (var i = 0; i < errorElements.length; i++) {
            window.gigya.utils.DOM.removeClassFromElement(errorElements[i], 'gig-tfa-input-error');
        }
    };
    BaseTfaProvider.prototype.showProgress = function () {
        this.plugin.showProgress();
    };
    BaseTfaProvider.prototype.hideProgress = function () {
        this.plugin.hideProgress();
    };
    BaseTfaProvider.prototype.isInDOM = function () {
        return Boolean(this.container && this.container.parentElement && document.getElementById(this.container.parentElement.id));
    };
    BaseTfaProvider.prototype.isActive = function () {
        return !this.isInactive();
    };
    BaseTfaProvider.prototype.isInactive = function () {
        // not in DOM or not this instance
        return !this.isInDOM() ||
            (this.plugin.selectedProvider &&
                this.plugin.selectedProvider !== this);
    };
    return BaseTfaProvider;
}());
exports.BaseTfaProvider = BaseTfaProvider;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/EmailTfaProvider.ts":
/*!*******************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/EmailTfaProvider.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var BaseTfaProvider_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider.ts");
var Utils_1 = __webpack_require__(/*! ../helpers/Utils */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/helpers/Utils.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var EmailTfaProvider = /** @class */ (function (_super) {
    tslib_1.__extends(EmailTfaProvider, _super);
    function EmailTfaProvider(plugin, container, params, mode, callback, restartFlowInterval) {
        if (restartFlowInterval === void 0) { restartFlowInterval = 60 * 5 * 1000; }
        var _this = _super.call(this, plugin, container, params, mode, callback, restartFlowInterval) || this;
        _this.emails = [];
        return _this;
    }
    EmailTfaProvider.prototype.startFlow = function (capabilities) {
        var _this = this;
        this.showProgress();
        this.getEmails(function () {
            _this.hideProgress();
            _this.showEmailTfaScreen();
        });
    };
    EmailTfaProvider.prototype.getEmails = function (callback) {
        var _this = this;
        window.gigya.accounts.tfa.email.getEmails(this.params, {
            callback: function (response) {
                _this.emails = response.emails;
                callback();
            },
        });
    };
    EmailTfaProvider.prototype.showEmailTfaScreen = function () {
        if (this.emails.length > 0) {
            // right now, gets the first email as the target email
            var email = this.emails[0];
            this.sendVerificationCodeToEmail(email);
            this.showEnterCode(email);
        }
    };
    EmailTfaProvider.prototype.sendVerificationCodeToEmail = function (email) {
        var _this = this;
        this.phvToken = null;
        var verificationParams = {
            emailID: email.id,
            callback: function (response) {
                _this.phvToken = response.phvToken;
            },
        };
        window.gigya.accounts.tfa.email.sendVerificationCode(tslib_1.__assign(tslib_1.__assign({}, this.params), { lang: this.params['communicationLang'] }), verificationParams);
    };
    EmailTfaProvider.prototype.showEnterCode = function (email) {
        var _this = this;
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['emailEnterCode'], {
            id: this.container.id,
            headerText: this.plugin.getText('a_verification_code_has_been_sent_to_colon'),
            enter_code: this.plugin.getText('enter_code_colon'),
            remember_this_device: this.plugin.isMobileUI ? this.plugin.getText('remember_this_device') : this.plugin.getText('remember_this_computer'),
            submit: this.plugin.getText('submit'),
        });
        var submitButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-button-submit')[0];
        var tbCode = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-code-textbox')[0];
        var cbRemember = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-code-remember-checkbox')[0];
        var emailText = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-email-text')[0];
        var divError = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-error')[0];
        emailText.innerText = email.obfuscated;
        tbCode.focus();
        window.gigya.utils.DOM.addEventListener(submitButton, 'click', function () {
            _this.sendTfaCode(tbCode, cbRemember.checked);
        });
        Utils_1.bindEnterKey(this.container, submitButton);
        this.plugin.onAfterScreenLoad('tfa-enter-code');
    };
    EmailTfaProvider.prototype.sendTfaCode = function (tbCode, isChecked) {
        var _this = this;
        if (this.phvToken) {
            var submitButton_1 = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-button-submit')[0];
            window.gigya.utils.DOM.addClassToElement(submitButton_1, 'disabled');
            window.gigya.accounts.tfa.email.completeVerification(this.params, {
                phvToken: this.phvToken,
                code: tbCode.value,
                callback: function (response) {
                    if (response['errorCode'] == 0) {
                        _this.hideError([tbCode]);
                        _this.onDone(response, response.providerAssertion, !isChecked);
                    }
                    else if (response['errorCode'] == GSErrors_1.GSErrors.LIMIT_REACHED) {
                        _this.showError(_this.plugin.getText('limit_reached'), [tbCode]);
                    }
                    else {
                        _this.showError(_this.plugin.getText('please_enter_a_valid_code'), [tbCode]);
                        window.gigya.utils.DOM.removeClassFromElement(submitButton_1, 'disabled');
                    }
                },
            });
        }
    };
    EmailTfaProvider.prototype.onDone = function (response, providerAssertion, isTemp) {
        this.callback(response, providerAssertion, isTemp);
    };
    return EmailTfaProvider;
}(BaseTfaProvider_1.BaseTfaProvider));
exports.EmailTfaProvider = EmailTfaProvider;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/GigyaPhoneProvider.ts":
/*!*********************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/GigyaPhoneProvider.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var PhoneTfaProvider_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PhoneTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PhoneTfaProvider.ts");
var TfaPlugin_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin.ts");
var GigyaPhoneProvider = /** @class */ (function (_super) {
    tslib_1.__extends(GigyaPhoneProvider, _super);
    function GigyaPhoneProvider(plugin, container, params, mode, callback) {
        var _this = _super.call(this, plugin, container, params, mode, callback) || this;
        _this.name = 'gigyaPhone';
        _this.supportedSendMethods = [TfaPlugin_1.VerificationMethod.SMS, TfaPlugin_1.VerificationMethod.VOICE];
        return _this;
    }
    return GigyaPhoneProvider;
}(PhoneTfaProvider_1.PhoneTfaProvider));
exports.GigyaPhoneProvider = GigyaPhoneProvider;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/LiveLinkPhoneProvider.ts":
/*!************************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/LiveLinkPhoneProvider.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var PhoneTfaProvider_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PhoneTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PhoneTfaProvider.ts");
var TfaPlugin_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin.ts");
var LiveLinkPhoneProvider = /** @class */ (function (_super) {
    tslib_1.__extends(LiveLinkPhoneProvider, _super);
    function LiveLinkPhoneProvider(plugin, container, params, mode, callback) {
        var _this = _super.call(this, plugin, container, params, mode, callback) || this;
        _this.name = 'livelink';
        _this.supportedSendMethods = [TfaPlugin_1.VerificationMethod.SMS];
        return _this;
    }
    LiveLinkPhoneProvider.prototype.updateNumbers = function (callback) {
        var _this = this;
        _super.prototype.updateNumbers.call(this, function () {
            // livelink supports just sms
            _this.phoneNumbers.forEach(function (phone) { return (phone.lastMethod = 'sms'); });
            callback();
        });
    };
    return LiveLinkPhoneProvider;
}(PhoneTfaProvider_1.PhoneTfaProvider));
exports.LiveLinkPhoneProvider = LiveLinkPhoneProvider;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PhoneTfaProvider.ts":
/*!*******************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PhoneTfaProvider.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var BaseTfaProvider_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider.ts");
var TfaPlugin_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin.ts");
var Utils_1 = __webpack_require__(/*! ../helpers/Utils */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/helpers/Utils.ts");
var GSErrors_1 = __webpack_require__(/*! ../../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var FlagService_1 = __webpack_require__(/*! ../../../../core/Gigya.Js/app/Services/FlagService */ "./src/core/Gigya.Js/app/Services/FlagService.ts");
var PhoneTfaProvider = /** @class */ (function (_super) {
    tslib_1.__extends(PhoneTfaProvider, _super);
    function PhoneTfaProvider(plugin, container, params, mode, callback, restartFlowInterval) {
        var _this = _super.call(this, plugin, container, params, mode, callback, restartFlowInterval) || this;
        _this.phoneNumbers = [];
        _this.supportedSendMethods = [];
        return _this;
    }
    PhoneTfaProvider.prototype.startFlow = function (capabilities) {
        var _this = this;
        if (capabilities && capabilities.length > 0) {
            this.supportedSendMethods = capabilities
                .filter(Boolean)
                .map(function (cap) { return cap.toUpperCase(); })
                .map(function (cap) { return TfaPlugin_1.VerificationMethod[cap]; });
        }
        else {
            this.supportedSendMethods = [TfaPlugin_1.VerificationMethod.SMS];
        }
        this.updateNumbers(function () {
            _this.show();
        });
    };
    PhoneTfaProvider.prototype.show = function (mode) {
        if (mode === void 0) { mode = this.mode; }
        switch (mode) {
            case TfaPlugin_1.TfaMode.edit:
                this.showEdit();
                break;
            case TfaPlugin_1.TfaMode.add:
            case TfaPlugin_1.TfaMode.register:
                this.showEnterPhoneNumber(mode);
                break;
            case TfaPlugin_1.TfaMode.verify:
                this.showVerify();
                break;
        }
    };
    PhoneTfaProvider.prototype.showEdit = function () {
        var _this = this;
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['phoneEdit'], {
            headerText: this.plugin.getText('please_choose_a_number_to_edit_colon'),
        });
        var numbersContainer = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-phone-edit-numbers')[0];
        var arPhonesHtml = [];
        for (var i = 0; i < this.phoneNumbers.length; i++) {
            var phone = this.phoneNumbers[i];
            var phoneHtml = window.gigya.utils.templates.fill(this.plugin.templates['phoneEditEntry'], {
                phoneNumber: phone.plain || phone.obfuscated,
                phoneId: phone.id,
                edit: this.plugin.getText('edit'),
            });
            arPhonesHtml.push(phoneHtml);
        }
        numbersContainer.innerHTML = arPhonesHtml.join('');
        var onEditClick = function (e) {
            _this.showProgress();
            var editLink = (e.srcElement || e.currentTarget || _this);
            var phone = _this.getPhoneById(editLink.getAttribute('data-phoneid'));
            _this.plugin.initTfa(_this.name, TfaPlugin_1.TfaMode.edit, function (response) {
                if (response['errorCode'] == 0) {
                    _this.updateNumbers(function () {
                        _this.hideProgress();
                        _this.showEnterPhoneNumber(TfaPlugin_1.TfaMode.edit, _this.getPhoneById(phone.id));
                    });
                }
                else {
                    _this.showError(response['errorMessage']);
                }
            });
        };
        var editLinks = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-phone-edit-link');
        for (var i = 0; i < editLinks.length; i++) {
            Utils_1.bindEnterKey(editLinks[i]);
            window.gigya.utils.DOM.addEventListener(editLinks[i], 'click', onEditClick);
        }
        this.plugin.onAfterScreenLoad('tfa-edit');
    };
    PhoneTfaProvider.prototype.getPhoneById = function (phoneId) {
        for (var i = 0; i < this.phoneNumbers.length; i++) {
            if (this.phoneNumbers[i].id == phoneId)
                return this.phoneNumbers[i];
        }
    };
    PhoneTfaProvider.prototype.showEnterPhoneNumber = function (mode, phone) {
        var _this = this;
        if (mode === void 0) { mode = TfaPlugin_1.TfaMode.register; }
        var hText = this.plugin.getText('to_keep_your_account_secure_verification_codes_will_be_sent_when_you_login_from_untrusted_devices_dot');
        if (mode == TfaPlugin_1.TfaMode.edit) {
            hText = this.plugin.getText('edit_your_phone_number_where_verification_codes_will_be_received_colon');
        }
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['phoneRegister'], {
            id: this.container.id,
            headerText: hText,
            select_your_country: this.plugin.getText('select_your_country_colon'),
            enter_your_phone_number: this.plugin.getText('enter_your_phone_number_colon'),
            get_code_by: this.plugin.getText('get_code_by_colon'),
            text_message: this.plugin.getText('text_message'),
            voice_call: this.plugin.getText('voice_call'),
            send: this.plugin.getText('get_the_code'),
        });
        this.setAreaCodesTranslation();
        this.showVerificationMethods();
        var nextButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-button-next')[0];
        var prefixSelect = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-phone-register-select')[0];
        var tbPhonePrefix = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-phone-prefix')[0];
        var tbPhoneNumber = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-phone-number')[0];
        var typesRadios = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-phone-register-type-radio');
        var countryErrorDiv = window.gigya.utils.DOM.getElementsByClass(this.container, 'country_err')[0];
        var phoneErrorDiv = window.gigya.utils.DOM.getElementsByClass(this.container, 'phone_err')[0];
        var requiredErrorTxt = this.plugin.getText('this_field_is_required');
        // pre-populate
        if (phone && phone.plain) {
            for (var i = 0; i < prefixSelect.options.length; i++) {
                var option = prefixSelect.options[i];
                if (phone.plain.indexOf(option.value) === 0) {
                    prefixSelect.selectedIndex = i;
                    tbPhonePrefix.value = option.value;
                    tbPhoneNumber.value = phone.plain.substr(option.value.length);
                    break;
                }
            }
        }
        window.gigya.utils.DOM.addEventListener(prefixSelect, 'change', function () {
            _this.hideError();
            var selectedPrefix = prefixSelect.options[prefixSelect.selectedIndex];
            if (selectedPrefix) {
                tbPhonePrefix.value = selectedPrefix.value;
                if (countryErrorDiv) {
                    if (selectedPrefix.value == '0') {
                        _this.setError(countryErrorDiv, requiredErrorTxt);
                    }
                    else {
                        _this.unsetError(countryErrorDiv);
                    }
                }
            }
        });
        window.gigya.utils.DOM.addEventListener(tbPhoneNumber, 'change', function () {
            _this.hideError();
            if (phoneErrorDiv) {
                if (tbPhoneNumber.value && phoneErrorDiv.innerText) {
                    _this.unsetError(phoneErrorDiv);
                }
                if (!tbPhoneNumber.value) {
                    _this.setError(phoneErrorDiv, requiredErrorTxt);
                }
            }
        });
        Utils_1.bindEnterKey(nextButton);
        window.gigya.utils.DOM.addEventListener(nextButton, 'click', function () {
            var method;
            for (var i = 0; i < typesRadios.length; i++) {
                if (typesRadios[i].checked) {
                    method = typesRadios[i].value;
                    break;
                }
            }
            if (tbPhonePrefix.value == '0' || !tbPhonePrefix.value || !tbPhoneNumber.value) {
                if ((!tbPhonePrefix.value || !tbPhonePrefix.value) && countryErrorDiv) {
                    _this.setError(countryErrorDiv, requiredErrorTxt);
                }
                if (!tbPhoneNumber.value && phoneErrorDiv) {
                    _this.setError(phoneErrorDiv, requiredErrorTxt);
                }
                return;
            }
            var phoneNumValue = tbPhonePrefix.value;
            // The TFA widget should NOT trim the leading zero when the selected country prefix is Italy (+39)
            if (tbPhonePrefix.value != '39') {
                phoneNumValue += tbPhoneNumber.value.replace(/^0+/, '');
            }
            else {
                phoneNumValue += tbPhoneNumber.value;
            }
            if (_this.mode == TfaPlugin_1.TfaMode.edit && phone.id)
                _this.phoneIdToRemove = phone.id;
            var newPhone = { plain: phoneNumValue };
            _this.sendVerificationCodeToPhone(newPhone, mode, method);
        });
        window.gigya.pluginUtils.DOM.setTextboxSubmitButton(tbPhoneNumber, nextButton);
        Utils_1.createActionInterval(this, function (count) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (count > 1 && tbPhoneNumber && tbPhoneNumber.parentElement) {
                    this.plugin.initTfa(this.name, mode);
                }
                return [2 /*return*/];
            });
        }); }, this.restartFlowInterval, function () { return !tbPhoneNumber || !tbPhoneNumber.parentElement; });
        this.plugin.onAfterScreenLoad('tfa-enter-phone-number');
    };
    PhoneTfaProvider.prototype.setError = function (elem, message) {
        if (!elem)
            return;
        else {
            elem.innerText = message;
            elem.setAttribute('role', 'alert');
        }
    };
    PhoneTfaProvider.prototype.unsetError = function (elem) {
        if (!elem)
            return;
        else {
            elem.innerText = '';
            elem.removeAttribute('role');
        }
    };
    PhoneTfaProvider.prototype.getLastPhone = function () {
        return this.phoneNumbers[this.phoneNumbers.length - 1];
    };
    PhoneTfaProvider.prototype.showVerify = function () {
        if (this.phoneNumbers.length > 0) {
            var phone = this.getLastPhone();
            this.sendVerificationCodeToPhone(phone, TfaPlugin_1.TfaMode.verify, phone.lastMethod);
        }
    };
    PhoneTfaProvider.prototype.showEnterCode = function (phone, mode, method) {
        var _this = this;
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['phoneEnterCode'], {
            id: this.container.id,
            headerText: method == 'sms'
                ? this.plugin.getText('a_verification_code_has_been_sent_to_your_phone_number_colon')
                : this.plugin.getText('a_phone_call_with_your_verification_code_has_been_placed_to_colon'),
            resend: mode == TfaPlugin_1.TfaMode.verify ? this.plugin.getText("didn't_get_the_code_qm") : this.plugin.getText('change_resend'),
            enter_code: this.plugin.getText('enter_code_colon'),
            remember_this_device: this.plugin.isMobileUI ? this.plugin.getText('remember_this_device') : this.plugin.getText('remember_this_computer'),
            submit: this.plugin.getText('submit'),
        });
        var submitButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-button-submit')[0];
        var resendLink = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-phone-code-resend')[0];
        var tbCode = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-code-textbox')[0];
        var cbRemember = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-code-remember-checkbox')[0];
        var phonenumber = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-phone-code-phonenumber')[0];
        var divError = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-error')[0];
        phonenumber.innerHTML = phone.plain || phone.obfuscated;
        Utils_1.bindEnterKey(tbCode, submitButton);
        Utils_1.bindEnterKey(cbRemember, submitButton);
        Utils_1.bindEnterKey(submitButton);
        window.gigya.utils.DOM.addEventListener(submitButton, 'click', function () {
            _this.sendTfaCode(tbCode, cbRemember);
        });
        Utils_1.bindEnterKey(resendLink);
        var resendAction = function () {
            _this.plugin.initTfa(_this.name, mode, function () {
                if (mode == TfaPlugin_1.TfaMode.register || mode == TfaPlugin_1.TfaMode.add || mode == TfaPlugin_1.TfaMode.edit) {
                    _this.showEnterPhoneNumber(mode, phone);
                }
                else {
                    _this.showResend(mode, phone);
                }
            });
        };
        var resendTimeout = setTimeout(function () {
            if (tbCode && tbCode.parentElement) {
                resendAction();
            }
        }, this.restartFlowInterval);
        window.gigya.utils.DOM.addEventListener(resendLink, 'click', function () {
            resendAction();
            clearTimeout(resendTimeout);
        });
        this.plugin.onAfterScreenLoad('tfa-enter-code');
    };
    PhoneTfaProvider.prototype.sendTfaCode = function (tbCode, cbRemember) {
        var _this = this;
        if (this.phvToken) {
            var submitButton_1 = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-button-submit')[0];
            window.gigya.utils.DOM.addClassToElement(submitButton_1, 'disabled');
            this.completeVerification(this.phvToken, tbCode.value, function (response) {
                if (response['errorCode'] == 0) {
                    _this.hideError([tbCode]);
                    _this.onDone(response, response['providerAssertion'], !cbRemember.checked);
                }
                else if (response['errorCode'] == GSErrors_1.GSErrors.LIMIT_REACHED) {
                    _this.showError(_this.plugin.getText('limit_reached'), [tbCode]);
                }
                else {
                    _this.showError(_this.plugin.getText('please_enter_a_valid_code'), [tbCode]);
                    window.gigya.utils.DOM.removeClassFromElement(submitButton_1, 'disabled');
                }
            });
        }
    };
    PhoneTfaProvider.prototype.showResend = function (mode, phone) {
        var _this = this;
        var headerText = this.supportedSendMethods.length >= 2 ? this.plugin.getText('choose_how_to_receive_the_verification_code_colon') : '';
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['phoneResend'], {
            id: this.container.id,
            headerText: headerText,
            get_code_by: this.plugin.getText('get_code_by_colon'),
            text_message: this.plugin.getText('text_message'),
            voice_call: this.plugin.getText('voice_call'),
            send: this.plugin.getText('get_the_code'),
            your_phone_number: this.plugin.getText('your_phone_number_colon'),
        });
        this.showVerificationMethods();
        var sendButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-button-send')[0];
        var divPhoneNumber = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-phone-resend-yourphone')[0];
        var typesRadios = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-phone-resend-type-radio');
        for (var i = 0; i < typesRadios.length; i++) {
            if (typesRadios[i].value == phone.lastMethod) {
                typesRadios[i].checked = true;
                break;
            }
        }
        divPhoneNumber.innerHTML = phone.plain || phone.obfuscated;
        Utils_1.bindEnterKey(this.container, sendButton);
        window.gigya.utils.DOM.addEventListener(sendButton, 'click', function () {
            var method;
            for (var i = 0; i < typesRadios.length; i++) {
                if (typesRadios[i].checked) {
                    method = typesRadios[i].value;
                    break;
                }
            }
            _this.sendVerificationCodeToPhone(phone, mode, method);
        });
        //gig-tfa-phone-resend-yourphone
        this.plugin.onAfterScreenLoad('tfa-resend');
    };
    PhoneTfaProvider.prototype.showVerificationMethods = function () {
        var verificationMethodSection = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-verification-method');
        if (verificationMethodSection.length && verificationMethodSection[0].style && this.supportedSendMethods.length >= 2) {
            verificationMethodSection[0].style.display = '';
        }
        else {
            var buttonContainer = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-button-container')[0];
            if (buttonContainer && buttonContainer.style) {
                buttonContainer.style.marginTop = '20px';
            }
        }
    };
    PhoneTfaProvider.prototype.updateNumbers = function (callback) {
        var _this = this;
        if (this.mode == TfaPlugin_1.TfaMode.add || this.mode == TfaPlugin_1.TfaMode.edit || this.mode == TfaPlugin_1.TfaMode.verify) {
            this.showProgress();
            window.gigya.accounts.tfa.phone.getRegisteredPhoneNumbers(this.params, {
                callback: function (response) {
                    _this.hideProgress();
                    _this.phoneNumbers = response['phones'];
                    callback();
                },
            });
        }
        else {
            callback();
        }
    };
    PhoneTfaProvider.prototype.sendVerificationCodeToPhone = function (phone, mode, method) {
        var _this = this;
        if (!phone.plain && !phone.obfuscated) {
            return;
        }
        var verificationParams = {
            method: method || 'sms',
            callback: function (response) {
                switch (response.errorCode) {
                    case GSErrors_1.GSErrors.OK:
                        _this.phvToken = response.phvToken;
                        _this.showEnterCode(phone, mode, method);
                        break;
                    case GSErrors_1.GSErrors.Extension_Point_Custom_Error:
                        _this.showError(response.errorDetails || response.errorMessage);
                        break;
                    default:
                        _this.showError(_this.plugin.getText('an_error_has_occurred_please_try_again_later'));
                }
            }
        };
        if (phone.id) {
            verificationParams['phoneID'] = phone.id;
        }
        else {
            verificationParams['phone'] = phone.plain;
        }
        this.phvToken = null;
        window.gigya.accounts.tfa.phone.sendVerificationCode(tslib_1.__assign(tslib_1.__assign({}, this.params), { lang: this.params['communicationLang'] }), verificationParams);
    };
    PhoneTfaProvider.prototype.completeVerification = function (phvToken, code, callback) {
        window.gigya.accounts.tfa.phone.completeVerification(this.params, {
            phvToken: phvToken,
            code: code,
            callback: function (response) {
                callback(response);
            },
        });
    };
    PhoneTfaProvider.prototype.onDone = function (response, providerAssertion, isTemp) {
        var _this = this;
        if (this.phoneIdToRemove) {
            window.gigya.accounts.tfa.phone.removePhone(this.params, {
                phoneId: this.phoneIdToRemove,
                callback: function () {
                    _this.callback(response, providerAssertion, isTemp);
                },
            });
        }
        else {
            this.callback(response, providerAssertion, isTemp);
        }
    };
    PhoneTfaProvider.prototype.setAreaCodesTranslation = function () {
        var _a, _b, _c;
        var options = Array.from(((_b = (_a = this.container) === null || _a === void 0 ? void 0 : _a.querySelector('select')) === null || _b === void 0 ? void 0 : _b.options) || []) || [];
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var option = options_1[_i];
            if (!FlagService_1.FlagService.fixPhoneTFATranslations && option.value === "0") {
                option.innerHTML = '- Select -';
                continue;
            }
            option.innerHTML = this.plugin.getText((_c = option === null || option === void 0 ? void 0 : option.innerHTML) === null || _c === void 0 ? void 0 : _c.replace('$', ''));
        }
    };
    return PhoneTfaProvider;
}(BaseTfaProvider_1.BaseTfaProvider));
exports.PhoneTfaProvider = PhoneTfaProvider;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PushTfaProvider.ts":
/*!******************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PushTfaProvider.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var BaseTfaProvider_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider.ts");
var TfaPlugin_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin.ts");
var GSErrors_1 = __webpack_require__(/*! src/core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var BackupCodesManager_1 = __webpack_require__(/*! ../helpers/BackupCodesManager */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/helpers/BackupCodesManager.ts");
var Utils_1 = __webpack_require__(/*! ../helpers/Utils */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/helpers/Utils.ts");
var FlagService_1 = __webpack_require__(/*! ../../../../core/Gigya.Js/app/Services/FlagService */ "./src/core/Gigya.Js/app/Services/FlagService.ts");
var PollingLimitMillis = 1000 * 60 * 2; // 2 min
var PollingIntervalMillis = 1000 * 3; // 3 sec
var PushTfaProvider = /** @class */ (function (_super) {
    tslib_1.__extends(PushTfaProvider, _super);
    function PushTfaProvider(plugin, container, params, mode, callback, _backupCodesManager, _pollingLimitMillis, _pollingIntervalMillis) {
        if (_pollingLimitMillis === void 0) { _pollingLimitMillis = PollingLimitMillis; }
        if (_pollingIntervalMillis === void 0) { _pollingIntervalMillis = PollingIntervalMillis; }
        var _this = _super.call(this, plugin, container, params, mode, callback) || this;
        _this._backupCodesManager = _backupCodesManager;
        _this._pollingLimitMillis = _pollingLimitMillis;
        _this._pollingIntervalMillis = _pollingIntervalMillis;
        _this._pollingStartTime = 0;
        _this.resendPushNotificationClickHandler = function () {
            _this.stopPolling();
            _this.plugin.initTfa(_this.name, _this.mode, function (res) {
                if (res['errorCode'] == 0) {
                    _this.plugin.startProviderFlow({ name: _this.name }, _this.mode);
                }
                else { // should not happen
                    _this.onError('initTfa failed', { method: 'resendPushNotificationClickHandler', res: res });
                }
            });
        };
        _this.useBackupCodesClickHandler = function () {
            _this.stopPolling();
            _this.container.innerHTML = window.gigya.utils.templates.fill(_this.plugin.templates['pushVerificationBackupCodes'], {
                id: _this.container.id,
                call_to_action: _this.plugin.getText('enter_backup_code'),
                resendPushNotification: _this.plugin.getText('resend_push_notification'),
                useBackupCode: _this.plugin.getText('cant_access_use_backup_codes'),
                submit: _this.plugin.getText('submit'),
            });
            var submitButton = _this.getSubmitButton();
            var backupCodeInputEl = _this.getBackupCodeInput();
            var resendPushNotification = _this.getResendButton();
            window.gigya.utils.DOM.addEventListener(resendPushNotification, 'click', _this.resendPushNotificationClickHandler);
            window.gigya.utils.DOM.addEventListener(submitButton, 'click', _this.submitBackupCodeClickHandler);
            Utils_1.bindEnterKey(backupCodeInputEl, submitButton);
            Utils_1.bindEnterKey(submitButton);
            backupCodeInputEl.focus();
            _this.plugin.onAfterScreenLoad('tfa-backup-codes');
        };
        _this.submitBackupCodeClickHandler = function () {
            var submitButton = _this.getSubmitButton();
            var backupCodeInputEl = _this.getBackupCodeInput();
            var backupCode = backupCodeInputEl.value;
            if (!backupCode)
                return _this.showError(_this.plugin.getText('please_enter_a_valid_code'), [backupCodeInputEl]);
            window.gigya.utils.DOM.addClassToElement(submitButton, 'disabled');
            window.gigya.accounts.tfa.backupcodes.verify(_this.params, {
                code: backupCode,
                callback: function (response) {
                    _this.hideProgress();
                    if (response['errorCode'] == 0)
                        return _this.onPushVerified(response);
                    window.gigya.utils.DOM.removeClassFromElement(submitButton, 'disabled');
                    var err = _this.getBackupCodeErrorMessage(response);
                    _this.showError(err, [backupCodeInputEl]);
                }
            });
        };
        _this.name = 'gigyaPush';
        if (!_this._backupCodesManager)
            _this._backupCodesManager = new BackupCodesManager_1.BackupCodesManager(_this);
        return _this;
    }
    PushTfaProvider.prototype.checkIsVerified = function () {
        var _this = this;
        window.gigya.accounts.tfa.push.isVerified({
            gigyaAssertion: this.params['gigyaAssertion'],
            regToken: this.params['regToken'],
            callback: function (res) { return _this.onIsVerifiedResponse(res); }
        });
    };
    ;
    PushTfaProvider.prototype.onIsVerifiedResponse = function (res) {
        var _this = this;
        // error (stop polling)
        if (res.errorCode != GSErrors_1.GSErrors.OK)
            return this.onError('failed to check push verification state', { method: 'isVerified', res: res });
        // success
        if (res.providerAssertion)
            return this.onPushVerified(res);
        // keep polling
        setTimeout(function () {
            if (_this.shouldContinuePolling())
                _this.checkIsVerified();
        }, this._pollingIntervalMillis);
    };
    PushTfaProvider.prototype.startPolling = function () {
        this._pollingStartTime = window.gigya.utils.date.now();
        this.checkIsVerified();
    };
    PushTfaProvider.prototype.stopPolling = function () {
        this._pollingStartTime = 0;
    };
    PushTfaProvider.prototype.shouldContinuePolling = function () {
        return !this.shouldStopPolling();
    };
    PushTfaProvider.prototype.shouldStopPolling = function () {
        var now = window.gigya.utils.date.now();
        var pollingLimitReached = now - this._pollingStartTime >= this._pollingLimitMillis;
        return pollingLimitReached || !this.isActive();
    };
    ;
    PushTfaProvider.prototype.onPushVerified = function (response) {
        this.hideError();
        this.callback(response, response['providerAssertion'], true);
    };
    PushTfaProvider.prototype.onError = function (log, details, errMsgKey) {
        if (errMsgKey === void 0) { errMsgKey = 'an_error_has_occurred_please_try_again_later'; }
        if (log)
            window.gigya.logger.error(log, details);
        var err = this.plugin.getText(errMsgKey) || 'Error';
        return this.showError(err);
    };
    PushTfaProvider.prototype.onSendVerificationResponse = function (res) {
        this.hideProgress();
        if (res['errorCode'] == 0) {
            this.showVerifyMode();
            this.startPolling();
        }
        else {
            this.onError('failed to send push tfa verification', { method: 'sendVerification', res: res });
        }
    };
    PushTfaProvider.prototype.startPushVerificationFlow = function () {
        var _this = this;
        this.showProgress();
        window.gigya.accounts.tfa.push.sendVerification({
            gigyaAssertion: this.params['gigyaAssertion'],
            regToken: this.params['regToken'],
            callback: function (res) { return _this.onSendVerificationResponse(res); }
        });
    };
    PushTfaProvider.prototype.showVerifyMode = function () {
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['pushVerificationPhone'], {
            id: this.container.id,
            resendPushNotification: this.plugin.getText('resend_push_notification'),
            call_to_action: this.plugin.getText('push_tfa_call_to_action'),
            useBackupCode: this.plugin.getText('cant_access_use_backup_codes'),
        });
        var useBackupCodes = this.getUseBackupCodesButton();
        var resendPushNotification = this.getResendButton();
        window.gigya.utils.DOM.addEventListener(useBackupCodes, 'click', this.useBackupCodesClickHandler);
        window.gigya.utils.DOM.addEventListener(resendPushNotification, 'click', this.resendPushNotificationClickHandler);
        this.plugin.onAfterScreenLoad('tfa-push-verification');
    };
    PushTfaProvider.prototype.getBackupCodeErrorMessage = function (response) {
        return response['errorDetails'] === 'Wrong verification code'
            ? this.plugin.getText('please_enter_a_valid_code')
            : (this.plugin.getText('an_error_has_occurred_please_try_again_later') || 'Error');
    };
    PushTfaProvider.prototype.showEditMode = function () {
        this.showBackupCodesEditMode();
    };
    PushTfaProvider.prototype.showBackupCodesEditMode = function (originalBackupCodes) {
        var _this = this;
        if (originalBackupCodes === void 0) { originalBackupCodes = null; }
        Utils_1.createActionInterval(this, function () { return tslib_1.__awaiter(_this, void 0, gigya.Promise, function () {
            var backupCodes, getBackupCodesResponse, backupCodesTable, printButton, generateNewCodesLink;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        backupCodes = originalBackupCodes;
                        if (!!backupCodes) return [3 /*break*/, 2];
                        this.showProgress();
                        return [4 /*yield*/, this._backupCodesManager.getBackupCodes()];
                    case 1:
                        getBackupCodesResponse = _a.sent();
                        if (getBackupCodesResponse['errorCode'] !== GSErrors_1.GSErrors.OK || !getBackupCodesResponse.backupCodes) {
                            this.container.innerHTML = this.plugin.templates['error'];
                            return [2 /*return*/, this.showError(this.plugin.getText('an_error_has_occurred_please_try_again_later') || 'Error')];
                        }
                        backupCodes = getBackupCodesResponse.backupCodes;
                        _a.label = 2;
                    case 2:
                        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['totpBackupCodes'], window.gigya.utils.object.merge([
                            {
                                headerText: this.plugin.getText('print_backup_codes_intro'),
                                print: this.plugin.getText('print'),
                                generateNewCodes: this.plugin.getText('generate_backup_codes'),
                            },
                            this._backupCodesManager.prepareBackupCodesForView(backupCodes),
                        ]));
                        backupCodesTable = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-totp-backup-codes')[0];
                        printButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-backup-codes-print-btn')[0];
                        generateNewCodesLink = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-generate-new-codes')[0];
                        if (window.gigya.localInfo.isNativeMobileApp) {
                            printButton.parentElement.style.display = 'none';
                            generateNewCodesLink.focus();
                        }
                        else {
                            printButton.focus();
                        }
                        window.gigya.utils.DOM.addEventListener(printButton, 'click', function () { return _this._backupCodesManager.printBackupCodes(backupCodesTable.outerHTML); });
                        window.gigya.utils.DOM.addActivationHandler(generateNewCodesLink, function () { return _this.showGenerateNewCodesConfirmation(backupCodes); });
                        this.plugin.onAfterScreenLoad('tfa-backup-codes', this.plugin.getText('backup_codes'));
                        return [2 /*return*/];
                }
            });
        }); }, this.restartFlowInterval);
    };
    PushTfaProvider.prototype.showGenerateNewCodesConfirmation = function (originalBackupCodes) {
        var _this = this;
        var template = FlagService_1.FlagService.generateNewCodeWcagCompliance ? 'totpGenerateNewCodesConfirmationWCAGComply' : 'totpGenerateNewCodesConfirmation';
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates[template], {
            resetCodesQuestion: this.plugin.getText('reset_codes_question'),
            yes: this.plugin.getText('yes'),
            cancel: this.plugin.getText('cancel'),
        });
        var confirmButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-backup-codes-confirm')[0];
        var cancelButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-backup-codes-cancel')[0];
        confirmButton.focus();
        window.gigya.utils.DOM.addEventListener(confirmButton, 'click', function () { return tslib_1.__awaiter(_this, void 0, gigya.Promise, function () {
            var generateBackupCodesResponse;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showProgress();
                        return [4 /*yield*/, this._backupCodesManager.generateNewCodes()];
                    case 1:
                        generateBackupCodesResponse = _a.sent();
                        if (generateBackupCodesResponse['errorCode'] !== GSErrors_1.GSErrors.OK || !generateBackupCodesResponse.backupCodes) {
                            this.container.innerHTML = this.plugin.templates['error'];
                            return [2 /*return*/, this.showError(this.plugin.getText('an_error_has_occurred_please_try_again_later') || 'Error')];
                        }
                        return [4 /*yield*/, this.showBackupCodesEditMode(generateBackupCodesResponse.backupCodes)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        window.gigya.utils.DOM.addEventListener(cancelButton, 'click', function () { return _this.showBackupCodesEditMode(originalBackupCodes); });
        this.plugin.onAfterScreenLoad('tfa-backup-codes-regenerate', this.plugin.getText('backup_codes'));
    };
    PushTfaProvider.prototype.getSubmitButton = function () {
        return Utils_1.getElementByClassName(this.container, 'gig-tfa-button-submit');
    };
    PushTfaProvider.prototype.getBackupCodeInput = function () {
        return Utils_1.getElementByClassName(this.container, 'gig-tfa-code-textbox');
    };
    PushTfaProvider.prototype.getResendButton = function () {
        return Utils_1.getElementByClassName(this.container, 'gig-tfa-resend-push-notification');
    };
    PushTfaProvider.prototype.getUseBackupCodesButton = function () {
        return Utils_1.getElementByClassName(this.container, 'gig-tfa-use-backup-code');
    };
    PushTfaProvider.prototype.startFlow = function (capabilities) {
        switch (this.mode) {
            case TfaPlugin_1.TfaMode.verify:
                this.startPushVerificationFlow();
                break;
            case TfaPlugin_1.TfaMode.edit:
                this.showEditMode();
                break;
        }
    };
    return PushTfaProvider;
}(BaseTfaProvider_1.BaseTfaProvider));
exports.PushTfaProvider = PushTfaProvider;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/TotpTfaProvider.ts":
/*!******************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/TotpTfaProvider.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var BaseTfaProvider_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider.ts");
var TfaPlugin_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin.ts");
var GSErrors_1 = __webpack_require__(/*! src/core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var Utils_1 = __webpack_require__(/*! ../helpers/Utils */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/helpers/Utils.ts");
var BackupCodesManager_1 = __webpack_require__(/*! ../helpers/BackupCodesManager */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/helpers/BackupCodesManager.ts");
var FlagService_1 = __webpack_require__(/*! ../../../../core/Gigya.Js/app/Services/FlagService */ "./src/core/Gigya.Js/app/Services/FlagService.ts");
var TotpTfaProvider = /** @class */ (function (_super) {
    tslib_1.__extends(TotpTfaProvider, _super);
    function TotpTfaProvider(plugin, container, params, mode, callback, _backupCodesManager) {
        var _this = _super.call(this, plugin, container, params, mode, callback) || this;
        _this._backupCodesManager = _backupCodesManager;
        _this.name = 'gigyaTotp';
        if (!_this._backupCodesManager)
            _this._backupCodesManager = new BackupCodesManager_1.BackupCodesManager(_this);
        return _this;
    }
    TotpTfaProvider.prototype.startFlow = function (capabilities) {
        this.show();
    };
    TotpTfaProvider.prototype.show = function () {
        switch (this.mode) {
            case TfaPlugin_1.TfaMode.register:
                this.showRegisterMode();
                break;
            case TfaPlugin_1.TfaMode.verify:
                this.showVerifyMode();
                break;
            case TfaPlugin_1.TfaMode.edit:
                this.showEditMode();
                break;
        }
    };
    TotpTfaProvider.prototype.showRegisterMode = function () {
        var _this = this;
        Utils_1.createActionInterval(this, function (count) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var afterInitTFA;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.showProgress();
                afterInitTFA = function (initTFAResponse) {
                    if (initTFAResponse && initTFAResponse['errorCode'] !== GSErrors_1.GSErrors.OK)
                        return;
                    window.gigya.accounts.tfa.totp.register(_this.params, {
                        callback: function (response) {
                            if (response['errorCode'] !== GSErrors_1.GSErrors.OK) {
                                _this.container.innerHTML = _this.plugin.templates['error'];
                                return _this.showError(_this.plugin.getText('an_error_has_occurred_please_try_again_later') || 'Error');
                            }
                            else {
                                _this.renderRegistrationProcess(response['qrCode'], response['sctToken']);
                                if (count > 1) {
                                    _this.showError(_this.plugin.getText('totp_session_expired'));
                                }
                            }
                        },
                    });
                };
                if (count > 1) {
                    this.plugin.initTfa(this.name, TfaPlugin_1.TfaMode.register, afterInitTFA);
                }
                else {
                    // in the first render - initTFA is called by the plugin itself
                    afterInitTFA();
                }
                return [2 /*return*/];
            });
        }); }, this.restartFlowInterval);
    };
    TotpTfaProvider.prototype.showVerifyMode = function (usingBackupCode) {
        var _this = this;
        if (usingBackupCode === void 0) { usingBackupCode = false; }
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['totpVerify'], {
            id: this.container.id,
            enter_code: usingBackupCode ? this.plugin.getText('enter_backup_code') : this.plugin.getText('enter_totp_code'),
            remember_this_device: this.plugin.isMobileUI ? this.plugin.getText('remember_this_device') : this.plugin.getText('remember_this_computer'),
            submit: this.plugin.getText('submit'),
            useBackupCode: usingBackupCode ? this.plugin.getText('enter_totp_code') : this.plugin.getText('cant_access_use_backup_codes'),
        });
        this.renderVerificationSection(usingBackupCode);
        var useBackupCodeLink = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-use-backup-code');
        window.gigya.utils.DOM.addActivationHandler(useBackupCodeLink[0], function () { return _this.showVerifyMode(!usingBackupCode); });
        this.plugin.onAfterScreenLoad('tfa-totp-verification');
    };
    TotpTfaProvider.prototype.showEditMode = function () {
        var _this = this;
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['totpEdit'], {
            headerText: this.plugin.getText('totp_verification_settings_intro'),
            backupCodes: this.plugin.getText('backup_codes'),
            changeDevice: this.plugin.getText('totp_change_device'),
        });
        var changeDeviceButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-button-change-device')[0];
        var backupCodesButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-button-backup-codes')[0];
        changeDeviceButton.focus();
        window.gigya.utils.DOM.addActivationHandler(changeDeviceButton, function () { return _this.showChangeDeviceScreen(); });
        window.gigya.utils.DOM.addActivationHandler(backupCodesButton, function () { return _this.showBackupCodesScreen(); });
        this.plugin.onAfterScreenLoad('tfa-edit', this.plugin.getText('totp_verification_settings'));
    };
    TotpTfaProvider.prototype.showBackupCodesScreen = function (originalBackupCodes) {
        var _this = this;
        if (originalBackupCodes === void 0) { originalBackupCodes = null; }
        Utils_1.createActionInterval(this, function () { return tslib_1.__awaiter(_this, void 0, gigya.Promise, function () {
            var backupCodes, getBackupCodesResponse, backupCodesTable, printButton, generateNewCodesLink;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        backupCodes = originalBackupCodes;
                        if (!!backupCodes) return [3 /*break*/, 2];
                        this.showProgress();
                        return [4 /*yield*/, this._backupCodesManager.getBackupCodes()];
                    case 1:
                        getBackupCodesResponse = _a.sent();
                        if (getBackupCodesResponse['errorCode'] !== GSErrors_1.GSErrors.OK || !getBackupCodesResponse.backupCodes) {
                            this.container.innerHTML = this.plugin.templates['error'];
                            return [2 /*return*/, this.showError(this.plugin.getText('an_error_has_occurred_please_try_again_later') || 'Error')];
                        }
                        backupCodes = getBackupCodesResponse.backupCodes;
                        _a.label = 2;
                    case 2:
                        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['totpBackupCodes'], window.gigya.utils.object.merge([
                            {
                                headerText: this.plugin.getText('print_backup_codes_intro'),
                                print: this.plugin.getText('print'),
                                generateNewCodes: this.plugin.getText('generate_backup_codes'),
                            },
                            this._backupCodesManager.prepareBackupCodesForView(backupCodes),
                        ]));
                        backupCodesTable = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-totp-backup-codes')[0];
                        printButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-backup-codes-print-btn')[0];
                        generateNewCodesLink = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-generate-new-codes')[0];
                        if (window.gigya.localInfo.isNativeMobileApp) {
                            printButton.parentElement.style.display = 'none';
                            generateNewCodesLink.focus();
                        }
                        else {
                            printButton.focus();
                        }
                        window.gigya.utils.DOM.addActivationHandler(printButton, function () { return _this._backupCodesManager.printBackupCodes(backupCodesTable.outerHTML); });
                        window.gigya.utils.DOM.addActivationHandler(generateNewCodesLink, function () { return _this.showGenerateNewCodesConfirmation(backupCodes); });
                        this.plugin.onAfterScreenLoad('tfa-backup-codes', this.plugin.getText('backup_codes'));
                        return [2 /*return*/];
                }
            });
        }); }, this.restartFlowInterval);
    };
    TotpTfaProvider.prototype.showChangeDeviceScreen = function () {
        var _this = this;
        Utils_1.createActionInterval(this, function (count) { return tslib_1.__awaiter(_this, void 0, gigya.Promise, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.showProgress();
                this.plugin.initTfa(this.name, TfaPlugin_1.TfaMode.edit, function (initTFAResponse) {
                    if (initTFAResponse && initTFAResponse['errorCode'] !== GSErrors_1.GSErrors.OK)
                        return;
                    window.gigya.accounts.tfa.totp.register(_this.params, {
                        callback: function (response) {
                            if (response['errorCode'] !== GSErrors_1.GSErrors.OK) {
                                _this.container.innerHTML = _this.plugin.templates['error'];
                                return _this.showError(_this.plugin.getText('an_error_has_occurred_please_try_again_later') || 'Error');
                            }
                            else {
                                _this.renderRegistrationProcess(response['qrCode'], response['sctToken'], 'tfa-totp-change-device', _this.plugin.getText('totp_change_device'));
                                if (count > 1) {
                                    _this.showError(_this.plugin.getText('totp_session_expired'));
                                }
                            }
                        },
                    });
                });
                return [2 /*return*/];
            });
        }); }, this.restartFlowInterval);
    };
    TotpTfaProvider.prototype.showGenerateNewCodesConfirmation = function (originalBackupCodes) {
        var _this = this;
        var template = FlagService_1.FlagService.generateNewCodeWcagCompliance ? 'totpGenerateNewCodesConfirmationWCAGComply' : 'totpGenerateNewCodesConfirmation';
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates[template], {
            resetCodesQuestion: this.plugin.getText('reset_codes_question'),
            yes: this.plugin.getText('yes'),
            cancel: this.plugin.getText('cancel'),
        });
        var confirmButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-backup-codes-confirm')[0];
        var confirmHandler = function () { return tslib_1.__awaiter(_this, void 0, gigya.Promise, function () {
            var generateBackupCodesResponse;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showProgress();
                        return [4 /*yield*/, this._backupCodesManager.generateNewCodes()];
                    case 1:
                        generateBackupCodesResponse = _a.sent();
                        if (generateBackupCodesResponse['errorCode'] !== GSErrors_1.GSErrors.OK || !generateBackupCodesResponse.backupCodes) {
                            this.container.innerHTML = this.plugin.templates['error'];
                            return [2 /*return*/, this.showError(this.plugin.getText('an_error_has_occurred_please_try_again_later') || 'Error')];
                        }
                        return [4 /*yield*/, this.showBackupCodesScreen(generateBackupCodesResponse.backupCodes)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        window.gigya.utils.DOM.addActivationHandler(confirmButton, confirmHandler);
        confirmButton.focus();
        var cancelButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-backup-codes-cancel')[0];
        window.gigya.utils.DOM.addActivationHandler(cancelButton, function () { return _this.showBackupCodesScreen(originalBackupCodes); });
        this.plugin.onAfterScreenLoad('tfa-backup-codes-regenerate', this.plugin.getText('backup_codes'));
    };
    TotpTfaProvider.prototype.sendTfaCode = function (tbCode, cbRemember, submitButton, isBackupCode) {
        var _this = this;
        if (isBackupCode === void 0) { isBackupCode = false; }
        return this.verify(tbCode.value, !cbRemember.checked, this.sctToken, isBackupCode)
            .then(function (verifyResponse) {
            _this.hideError([tbCode]);
            return verifyResponse;
        })
            .catch(function (err) {
            _this.showError(err, [tbCode]);
            window.gigya.utils.DOM.removeClassFromElement(submitButton, 'disabled');
        });
    };
    TotpTfaProvider.prototype.verify = function (code, isTemp, sctToken, isBackupCode) {
        var _this = this;
        if (isBackupCode === void 0) { isBackupCode = false; }
        return new gigya.Promise(function (resolve, reject) {
            var localParams = {
                code: code,
                callback: function (response) {
                    _this.hideProgress();
                    if (response['errorCode'] == 0) {
                        _this.callback(response, response['providerAssertion'], isTemp);
                        resolve(true);
                    }
                    else if (response['errorDetails'] === 'Wrong verification code') {
                        reject(_this.plugin.getText('please_enter_a_valid_code'));
                    }
                    else {
                        reject(_this.plugin.getText('an_error_has_occurred_please_try_again_later') || 'Error');
                    }
                },
            };
            if (sctToken) {
                localParams['sctToken'] = sctToken;
            }
            if (isBackupCode) {
                window.gigya.accounts.tfa.backupcodes.verify(_this.params, localParams);
            }
            else {
                window.gigya.accounts.tfa.totp.verify(_this.params, localParams);
            }
        });
    };
    TotpTfaProvider.prototype.renderRegistrationProcess = function (qrCode, sctToken, screenName, caption) {
        var _this = this;
        if (screenName === void 0) { screenName = 'tfa-totp-registration'; }
        this.sctToken = sctToken;
        this.container.innerHTML = window.gigya.utils.templates.fill(this.plugin.templates['totpRegister'], {
            id: this.container.id,
            step1: this.plugin.getText('step', '${ind}', '1'),
            step2: this.plugin.getText('step', '${ind}', '2'),
            scan_qr_code: this.plugin.getText('scan_qr_code'),
            qrCode: qrCode,
            enter_code: this.plugin.getText('enter_totp_code'),
            remember_this_device: this.plugin.isMobileUI ? this.plugin.getText('remember_this_device') : this.plugin.getText('remember_this_computer'),
            downloadBackupCodesIntro: this.plugin.getText('download_backup_codes'),
            submit: this.plugin.getText('submit'),
        });
        this.renderVerificationSection();
        this.waitForQRImageToRender()
            .then(function () {
            _this.plugin.onAfterScreenLoad(screenName, caption);
        })
            .catch(function (e) {
            window.gigya.logger.warn(e);
            _this.showError(_this.plugin.getText('an_error_has_occurred_please_try_again_later') || 'Error');
        });
    };
    TotpTfaProvider.prototype.renderVerificationSection = function (usingBackupCode) {
        var _this = this;
        if (usingBackupCode === void 0) { usingBackupCode = false; }
        var submitButton = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-button-submit')[0];
        var tbCode = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-code-textbox')[0];
        var cbRemember = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-tfa-code-remember-checkbox')[0];
        tbCode.focus();
        Utils_1.bindEnterKey(tbCode, submitButton);
        Utils_1.bindEnterKey(cbRemember, submitButton);
        Utils_1.bindEnterKey(submitButton);
        window.gigya.utils.DOM.addEventListener(submitButton, 'click', function () {
            if (!tbCode.value) {
                return _this.showError(_this.plugin.getText('please_enter_a_valid_code'), [tbCode]);
            }
            window.gigya.utils.DOM.addClassToElement(submitButton, 'disabled');
            _this.sendTfaCode(tbCode, cbRemember, submitButton, usingBackupCode);
        });
    };
    TotpTfaProvider.prototype.waitForQRImageToRender = function () {
        var _this = this;
        return new gigya.Promise(function (resolve, reject) {
            var imgWrapper = window.gigya.utils.DOM.getElementsByClass(_this.container, 'gig-tfa-totp-qrcode');
            if (imgWrapper[0]) {
                var img = imgWrapper[0].getElementsByTagName('img');
                if (img[0]) {
                    window.gigya.utils.DOM.addEventListener(img[0], 'load', resolve);
                    window.gigya.utils.DOM.addEventListener(img[0], 'error', reject);
                }
                else
                    reject('TOTP: missing qrCode image element');
            }
            else
                reject('TOTP: missing qrCode image element');
        });
    };
    return TotpTfaProvider;
}(BaseTfaProvider_1.BaseTfaProvider));
exports.TotpTfaProvider = TotpTfaProvider;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/helpers/BackupCodesManager.ts":
/*!****************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/helpers/BackupCodesManager.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var GSErrors_1 = __webpack_require__(/*! ../../../../core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var TfaPlugin_1 = __webpack_require__(/*! ../TfaPlugin */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin.ts");
var BackupCodesManager = /** @class */ (function () {
    function BackupCodesManager(_tfaProvider) {
        this._tfaProvider = _tfaProvider;
    }
    BackupCodesManager.prototype.getBackupCodes = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var res;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new gigya.Promise(function (resolve) {
                            _this._tfaProvider.plugin.initTfa(_this._tfaProvider.name, TfaPlugin_1.TfaMode.edit, function (initTFAResponse) {
                                if (initTFAResponse && initTFAResponse['errorCode'] !== GSErrors_1.GSErrors.OK)
                                    return;
                                window.gigya.accounts.tfa.backupcodes.get(_this._tfaProvider.params, {
                                    callback: resolve,
                                });
                            });
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    BackupCodesManager.prototype.generateNewCodes = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new gigya.Promise(function (resolve) {
                            _this._tfaProvider.plugin.initTfa(_this._tfaProvider.name, TfaPlugin_1.TfaMode.edit, function (initTFAResponse) {
                                if (initTFAResponse && initTFAResponse['errorCode'] !== GSErrors_1.GSErrors.OK)
                                    return;
                                window.gigya.accounts.tfa.backupcodes.create(_this._tfaProvider.params, {
                                    callback: resolve,
                                });
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BackupCodesManager.prototype.prepareBackupCodesForView = function (backupCodes) {
        var totalUsedCodes = BackupCodesManager.ExpectedNumberOfBackupCodes - backupCodes.length;
        if (totalUsedCodes > 0) {
            for (var i = 0; i < totalUsedCodes; i++) {
                backupCodes.unshift(this._tfaProvider.plugin.getText('already_used'));
            }
        }
        return backupCodes.reduce(function (acc, code, i) {
            acc["backupCode" + (i + 1)] = code;
            return acc;
        }, {});
    };
    BackupCodesManager.prototype.printBackupCodes = function (html) {
        // https://stackoverflow.com/questions/2255291/print-the-contents-of-a-div
        var printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>' + this._tfaProvider.plugin.getText('backup_codes') + '</title>');
        printWindow.document.write('<style>body{text-align:center;font-family:arial}table{border: 1px dashed;margin:0 auto}td{padding:15px;font-size:20px;}</style>');
        printWindow.document.write('</head><body>');
        printWindow.document.write('<h3>' + this._tfaProvider.plugin.getText('cant_access_use_backup_codes') + '</h3>');
        printWindow.document.write(html);
        printWindow.document.write('<hr>');
        printWindow.document.write('</body></html>');
        printWindow.document.close(); // necessary for IE >= 10
        printWindow.focus(); // necessary for IE >= 10*/
        printWindow.print();
        window.setTimeout(function () { return printWindow.close(); }, 0); // For mobile browsers
        return true;
    };
    BackupCodesManager.ExpectedNumberOfBackupCodes = 9;
    return BackupCodesManager;
}());
exports.BackupCodesManager = BackupCodesManager;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/helpers/Utils.ts":
/*!***************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/helpers/Utils.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
function getElementByClassName(container, className) {
    return window.gigya.utils.DOM.getElementsByClass(container, className)[0];
}
exports.getElementByClassName = getElementByClassName;
function createActionInterval(tfaProvider, action, interval, cancelCondition) {
    var _this = this;
    if (cancelCondition === void 0) { cancelCondition = function () { return false; }; }
    var count = 1;
    var canContinue = false;
    action(count).then(function () { return canContinue = true; });
    var renderIntervalId = setInterval(function () { return tslib_1.__awaiter(_this, void 0, gigya.Promise, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(cancelCondition(count) || !tfaProvider.isActive())) return [3 /*break*/, 1];
                    clearInterval(renderIntervalId);
                    return [3 /*break*/, 3];
                case 1:
                    if (!canContinue) return [3 /*break*/, 3];
                    canContinue = false;
                    return [4 /*yield*/, action(++count)];
                case 2:
                    _a.sent();
                    canContinue = true;
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); }, interval);
}
exports.createActionInterval = createActionInterval;
function bindEnterKey(el1, el2) {
    var listenEl = el1;
    var buttonEl = el2 || el1;
    window.gigya.utils.DOM.addEventListener(listenEl, 'keyup', function (event) {
        // Submit on ENTER if button or listener element.
        // Submit on SPACE if button.
        if ((event.code === 'Space') || (event.code === 'Enter' && !el2) || (event.key === 'Enter')) {
            buttonEl.click();
        }
    });
}
exports.bindEnterKey = bindEnterKey;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.Tfa/app/index.ts":
/*!*******************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Tfa/app/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var Gigya_PluginsTfa = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/DefaultCss */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/DefaultCss.ts");
var Gigya_PluginsTfa_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/Templates */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/Templates.ts");
var Gigya_PluginsTfa_2 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaPlugin.ts");
var Gigya_PluginsTfaFactory = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviderFactory */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviderFactory.ts");
var Gigya_PluginsTfaProviders = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/BaseTfaProvider.ts");
var Gigya_PluginsTfaProviders_1 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/EmailTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/EmailTfaProvider.ts");
var Gigya_PluginsTfaProviders_2 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/GigyaPhoneProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/GigyaPhoneProvider.ts");
var Gigya_PluginsTfaProviders_3 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/LiveLinkPhoneProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/LiveLinkPhoneProvider.ts");
var Gigya_PluginsTfaProviders_4 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PhoneTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/PhoneTfaProvider.ts");
var Gigya_PluginsTfaProviders_5 = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/TotpTfaProvider */ "./src/accounts/Gigya.Js.Plugin.Tfa/app/TfaProviders/TotpTfaProvider.ts");
if (!window.gigya._) {
    window.gigya._ = {};
}
if (!window.gigya._.plugins) {
    window.gigya._.plugins = {};
}
if (!window.gigya._.plugins.tfa) {
    window.gigya._.plugins.tfa = {};
}
if (!window.gigya._.plugins.tfa.factory) {
    window.gigya._.plugins.tfa.factory = {};
}
if (!window.gigya._.plugins.tfa.providers) {
    window.gigya._.plugins.tfa.providers = {};
}
__webpack_provided_Object_dot_assign(window.gigya._.plugins.tfa, Gigya_PluginsTfa, Gigya_PluginsTfa_1, Gigya_PluginsTfa_2);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.tfa.factory, Gigya_PluginsTfaFactory);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.tfa.providers, Gigya_PluginsTfaProviders, Gigya_PluginsTfaProviders_1, Gigya_PluginsTfaProviders_2, Gigya_PluginsTfaProviders_3, Gigya_PluginsTfaProviders_4, Gigya_PluginsTfaProviders_5);
window.gigya._.UI.attachPlugin(Gigya_PluginsTfa_2.TfaPlugin, 'accounts', 'tfa', 'showTfaUI');
exports.TTfaPlugin = Gigya_PluginsTfa_2.TfaPlugin;
exports.TfaResources = window.gigya._.plugins.resources.html.tfa;
exports.TfaCss = window.gigya._.plugins.resources.css.tfa;
exports.default = window.gigya._.plugins.tfa;

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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL0RlZmF1bHRDc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RlbXBsYXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGZhUGx1Z2luLnRzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQcm92aWRlckZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVByb3ZpZGVycy9CYXNlVGZhUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVByb3ZpZGVycy9FbWFpbFRmYVByb3ZpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQcm92aWRlcnMvR2lneWFQaG9uZVByb3ZpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQcm92aWRlcnMvTGl2ZUxpbmtQaG9uZVByb3ZpZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQcm92aWRlcnMvUGhvbmVUZmFQcm92aWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGZhUHJvdmlkZXJzL1B1c2hUZmFQcm92aWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGZhUHJvdmlkZXJzL1RvdHBUZmFQcm92aWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvaGVscGVycy9CYWNrdXBDb2Rlc01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL2hlbHBlcnMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL0dTRXJyb3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9TZXJ2aWNlcy9GbGFnU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxz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SSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUNuRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFrQixzQ0FBdUI7YUFBekM7WUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFrQixvREFBcUM7YUFBdkQ7WUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFrQixzQ0FBdUI7YUFBekM7WUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFrQixpREFBa0M7YUFBcEQ7WUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUMxRCxDQUFDOzs7T0FBQTtJQUVhLGVBQUcsR0FBakIsVUFBa0IsSUFBWTs7UUFDMUIsT0FBTyxDQUFDLG1CQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sMENBQUUsS0FBSyxZQUFJLFlBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSwwQ0FBRSxLQUFLLENBQUMsSUFBSSxFQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7SUFDM0UsQ0FBQztJQUdELHNCQUFrQix1QkFBUTtRQUQxQixnRkFBZ0Y7YUFDaEY7WUFDSSxPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUM7OztPQUFBO0lBQ0wsa0JBQUM7QUFBRCxDQUFDO0FBeElZLGtDQUFXIiwiZmlsZSI6ImdpZ3lhLnNlcnZpY2VzLmFjY291bnRzLnBsdWdpbnMudGZhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvaW5kZXgudHNcIik7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJleHBvcnQgdmFyIGltZ0Jhc2UgPSBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9jb21tZW50czIvJyk7XG5leHBvcnQgdmFyIGRlZmF1bHRDc3MgPSB7XG4gICAgcmVzZXQ6IFtcbiAgICAgICAgJy5naWctdGZhLWNvbnRhaW5lciAqLCAqLmdpZy10ZmEtY29udGFpbmVyIHsnLFxuICAgICAgICAnd29yZC13cmFwOmJyZWFrLXdvcmQ7cGFkZGluZzowcHg7bWFyZ2luOjBweDtjb2xvcjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjpub25lO3dpZHRoOmF1dG87ZmxvYXQ6bm9uZTsnLFxuICAgICAgICAnZm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6IzMzMzMzMztwb3NpdGlvbjpzdGF0aWM7dGV4dC1hbGlnbjpsZWZ0O3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lOy1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDstd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7Ym94LXNpemluZzogYm9yZGVyLWJveDt9JyxcbiAgICBdLmpvaW4oJycpLFxuICAgIHJlc2V0UnRsOiAnLmdpZy1jb21tZW50cy1jb250YWluZXIgKiwgKi5naWctY29tbWVudHMtY29udGFpbmVyIHtkaXJlY3Rpb246cnRsO3RleHQtYWxpZ246cmlnaHQ7fScsXG4gICAgZ2xvYmFsOiBbXG4gICAgICAgICcuZ2lnLXRmYS1jb250YWluZXIge30nLFxuICAgICAgICAnLmdpZy10ZmEtaGVhZGVyLXRleHQge21hcmdpbi1ib3R0b206MzBweDt9JyxcbiAgICAgICAgJy5naWctdGZhLWJ1dHRvbi5naWctdGZhLWJ1dHRvbi1zdWJtaXQuZGlzYWJsZWQge3BvaW50ZXItZXZlbnRzOm5vbmU7IG9wYWNpdHk6MC4zO30nLFxuICAgICAgICAnLmdpZy10ZmEtY29udGFpbmVyIGlucHV0OmZvY3VzIHtib3gtc2hhZG93OjAgMCAzcHggIzUwQkFERSwgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSkgaW5zZXR9JyxcbiAgICAgICAgJy5naWctdGZhLWNvbnRhaW5lciBpbnB1dDpmb2N1cyB7Ym9yZGVyOiAxcHggc29saWQgIzg3QjlFQTsgb3V0bGluZTogbWVkaXVtIG5vbmV9JyxcbiAgICAgICAgJy5naWctdGZhLWNvbnRhaW5lciBpbnB1dCwgLmdpZy10ZmEtY29udGFpbmVyIHNlbGVjdCB7Ym9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztib3JkZXItcmFkaXVzOiAzcHggM3B4IDNweCAzcHg7bWFyZ2luOiA2cHggMDtwYWRkaW5nOiA1cHg7fScsXG4gICAgICAgICcuZ2lnLXRmYS1jb250YWluZXIgbGFiZWwge21hcmdpbi1yaWdodDoxNXB4O30nLFxuICAgICAgICAnaW5wdXQuZ2lnLXRmYS1waG9uZS1wcmVmaXgge2Rpc3BsYXk6bm9uZTt9JywgLy8gcGhvbmUtcHJlZml4IGZpZWxkIHNob3VsZCBub3QgZGlzcGxheSBhbnltb3JlXG4gICAgICAgICcuZ2lnLXRmYS1waG9uZS1udW1iZXIge3dpZHRoOiAxMDAlfScsXG4gICAgICAgICcuZ2lnLXRmYS1sYWJlbCB7Zm9udC13ZWlnaHQ6Ym9sZDttYXJnaW46MTBweCAwO30nLFxuICAgICAgICAnLmdpZy10ZmEtcGhvbmUtcmVnaXN0ZXItc2VsZWN0LCAuZ2lnLXRmYS1zZWxlY3Rib3gge3dpZHRoOiAxMDAlfScsXG4gICAgICAgICcuZ2lnLXRmYS1waG9uZS1yZWdpc3Rlci10eXBlLWxhYmVsIHttYXJnaW46IDE1cHggMCAzcHh9JyxcbiAgICAgICAgJy5naWctdGZhLXBob25lLXJlZ2lzdGVyLXR5cGUgKiB7bWFyZ2luOjA7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO21hcmdpbjowO30nLFxuICAgICAgICAnLmdpZy10ZmEtcGhvbmUtcmVnaXN0ZXItdHlwZSBzcGFuIHtsaW5lLWhlaWdodDogMTVweDt9JyxcbiAgICAgICAgJy5naWctdGZhLWJ1dHRvbi1jb250YWluZXIge3RleHQtYWxpZ246cmlnaHQ7bWFyZ2luOjE1cHggMCAwO30nLFxuXG4gICAgICAgICcuZ2lnLXRmYS1idXR0b24geycsXG4gICAgICAgICdkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOiBjZW50ZXI7Ym9yZGVyOiAxcHggc29saWQgI0NFQ0VDRTtjdXJzb3I6IHBvaW50ZXI7cGFkZGluZzogMCAxMnB4OycsXG4gICAgICAgICdjb2xvcjogIzMzMzMzMztmb250LXdlaWdodDogYm9sZDtib3JkZXItcmFkaXVzOiA0cHg7bGluZS1oZWlnaHQ6IDI2cHg7Z3JhZGllbnQoI0ZGRkZGRiwjRjJGMkYyKX0nLFxuXG4gICAgICAgICcuZ2lnLXRmYS1idXR0b246aG92ZXIge2dyYWRpZW50KCNGMkYyRjIsI0ZGRkZGRil9JyxcblxuICAgICAgICAnLmdpZy10ZmEtZXJyb3Ige2NvbG9yOiNjZTQ2MzU7bGluZS1oZWlnaHQ6MTRweDtmb250LXNpemU6MTFweDttYXJnaW46MTBweCAwIWltcG9ydGFudH0nLFxuXG4gICAgICAgICcuZ2lnLXRmYS1jb2RlLXRleHRib3gge3dpZHRoOiAxMDAlOyBtYXJnaW46IDZweCAwIWltcG9ydGFudH0nLFxuICAgICAgICAnaW5wdXQuZ2lnLXRmYS1pbnB1dC1lcnJvciB7Ym9yZGVyOiAxcHggc29saWQgI2NlNDYzNSAhaW1wb3J0YW50fScsXG5cbiAgICAgICAgJy5naWctdGZhLXBob25lLWNvZGUtcmVzZW5kIHtjb2xvcjojMkI4REREO2N1cnNvcjpwb2ludGVyO30nLFxuICAgICAgICAnLmdpZy10ZmEtcGhvbmUtY29kZS1waG9uZW51bWJlciB7fScsXG4gICAgICAgICdpbnB1dC5naWctdGZhLWNvZGUtcmVtZW1iZXItY2hlY2tib3gge21hcmdpbjogMHB4IDVweCAwIDAhaW1wb3J0YW50O3BhZGRpbmc6IDA7dmVydGljYWwtYWxpZ246IHRvcDt9JyxcbiAgICAgICAgJ2xhYmVsLmdpZy10ZmEtY29kZS1yZW1lbWJlci1sYWJlbCB7ZGlzcGxheTpibG9jazsgbWFyZ2luOiAxMHB4IDAgMThweCFpbXBvcnRhbnR9JyxcblxuICAgICAgICAnLmdpZy10ZmEtcGhvbmUtcmVzZW5kLXlvdXJwaG9uZSB7Zm9udC13ZWlnaHQ6bm9ybWFsfScsXG5cbiAgICAgICAgJy5naWctdGZhLXBob25lLWVkaXQtbGluayB7bWFyZ2luLWxlZnQ6MjVweDs7Y29sb3I6IzJCOERERDtjdXJzb3I6cG9pbnRlcn0nLFxuICAgICAgICAnLmdpZy10ZmEtc2VsZWN0LXdyYXBwZXIge3BhZGRpbmc6MTBweCAwO21hcmdpbi1ib3R0b206IDE2cHg7Ym9yZGVyLWJvdHRvbToxcHggI2UwZGRkZCBzb2xpZH0nLFxuICAgICAgICAnLmdpZy10ZmEtdG90cC1zdGVwLWxhYmVsIHtjb2xvcjogIzExNTk4Yjtmb250LXNpemU6MThweCFpbXBvcnRhbnQ7cGFkZGluZy1ib3R0b206MTBweH0nLFxuICAgICAgICAnLmdpZy10ZmEtdG90cC1xcmNvZGUge3RleHQtYWxpZ246Y2VudGVyOyBtYXJnaW4tYm90dG9tOiAxNnB4OyBib3JkZXItYm90dG9tOjFweCAjZTBkZGRkIHNvbGlkfScsXG4gICAgICAgICcuZ2lnLXRmYS1ib3R0b20taW50cm8ge21hcmdpbi1ib3R0b206IDM1cHghaW1wb3J0YW50O21hcmdpbi10b3A6IDE1cHghaW1wb3J0YW50fScsXG4gICAgICAgICdkaXYuZ2lnLXRmYS10b3RwLWhlYWRlci10ZXh0IHtmb250LXNpemU6IDE1cHg7Y29sb3I6ICM0ZTUxNWV9JyxcbiAgICAgICAgJ2Rpdi5naWctdGZhLWJ1dHRvbi1jb250YWluZXIuZ2lnLXRmYS1idXR0b24tY29udGFpbmVyLXRvcC1tYXJnaW4ge21hcmdpbi10b3A6MzVweCFpbXBvcnRhbnR9JyxcbiAgICAgICAgJ2Rpdi5naWctdGZhLWJ1dHRvbi1jb250YWluZXIuZ2lnLXRmYS1idXR0b24tY29udGFpbmVyLXJvdz4uZ2lnLXRmYS1idXR0b24ge3dpZHRoOiA0OSUhaW1wb3J0YW50O30nLFxuICAgICAgICAnZGl2LmdpZy10ZmEtYnV0dG9uLWNvbnRhaW5lci5naWctdGZhLWJ1dHRvbi1jb250YWluZXItcm93IGRpdjpsYXN0LWNoaWxkIHtmbG9hdDpsZWZ0IWltcG9ydGFudH0nLFxuICAgICAgICAndWwuZ2lnLXRmYS10b3RwLWJhY2t1cC1jb2RlcyB7d2lkdGg6IDEwMCU7Ym9yZGVyOjFweCBibGFjayBkYXNoZWQ7bWFyZ2luOjI1cHggMDtkaXNwbGF5OmZsZXg7IGZsZXgtd3JhcDp3cmFwO30nLFxuICAgICAgICAndWwuZ2lnLXRmYS10b3RwLWJhY2t1cC1jb2RlcyBsaXtmbGV4OjAgMCAzMyU7cGFkZGluZzoxMnB4OyBkaXNwbGF5OmZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyO30nLFxuICAgICAgICAnZGl2LmdpZy10ZmEtcm93e3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXI7IHBhZGRpbmc6MTVweCAwfScsXG4gICAgICAgICcuZ2lnLWJhY2t1cC1jb2Rlcy1wcmludC1idG57bWFyZ2luLWJvdHRvbTogMTBweCFpbXBvcnRhbnQ7fScsXG4gICAgICAgICcuZ2lnLXNyLW9ubHkge3Bvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50OyBvdmVyZmxvdzogaGlkZGVuO3dpZHRoOiAxcHggIWltcG9ydGFudDsgaGVpZ2h0OiAycHg7IHRvcDogMDsgbGVmdDogMDsgbWFyZ2luLWxlZnQ6IC0xcHggIWltcG9ydGFudDt9JyxcbiAgICAgICAgJ2EuZ2lnLXRmYS1saW5rIHtjb2xvcjojMTM3MWI5O3RleHQtZGVjb3JhdGlvbjpub25lO2ZvbnQtc2l6ZToxNXB4O21hcmdpbjowIWltcG9ydGFudDtjdXJzb3I6cG9pbnRlcn0nLFxuICAgIF0uam9pbignJyksXG4gICAgbW9iaWxlOiBbJy5naWctdGZhLWNvbnRhaW5lciAqLCAqLmdpZy10ZmEtY29udGFpbmVyIHtmb250LXNpemU6MTZweDstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6bm9uZTt9J10uam9pbignJyksXG4gICAgbm9uTW9iaWxlOiBbJy5naWctdGZhLWNvbnRhaW5lciAqLCAqLmdpZy10ZmEtY29udGFpbmVyIHtmb250LXNpemU6MTJweH0nXS5qb2luKCcnKSxcbiAgICBydGw6IFtdLmpvaW4oJycpLFxufTtcbiIsIi8vICRpZC0gaXMgdGhlIFwiaWRcIiBwYXNzZWQgd2hlbiBjYWxsaW5nIHV0aWxzLnRlbXBsYXRlcy5maWxsIHdpdGggc3BlY2lmaWMgc3VmZml4LiBpLmUuICRpZC1zb21lLWVsLWRlc2NyaXB0aW9uXG5leHBvcnQgdmFyIGRlZmF1bHRUZW1wbGF0ZXMgPSB7XG4gICAgY29udGFpbmVyOiBbJzxkaXYgY2xhc3M9XCJnaWctdGZhLXNlbGVjdC1wcm92aWRlclwiPjwvZGl2PicsICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1wcm92aWRlci13cmFwcGVyXCIgaWQ9XCIkd3JhcHBlcklkXCI+PC9kaXY+J10uam9pbignJyksXG4gICAgc2VsZWN0UHJvdmlkZXI6IFtcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctdGZhLXNlbGVjdC13cmFwcGVyXCI+JyxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctdGZhLWxhYmVsXCIgaWQ9XCJzZWxlY3RQcm92aWRlckhlYWRlclwiPiRzZWxlY3RQcm92aWRlckhlYWRlcjwvZGl2PicsXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1zZWxlY3RcIiBhcmlhLWxhYmVsbGVkYnk9XCJzZWxlY3RQcm92aWRlckhlYWRlclwiPicsXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1zZWxlY3QtdGV4dFwiPjwvZGl2PicsXG4gICAgICAgICc8c2VsZWN0IGNsYXNzPVwiZ2lnLXRmYS1zZWxlY3Rib3hcIiB0YWJpbmRleD1cIjBcIj48L3NlbGVjdD4nLFxuICAgICAgICAnPC9kaXY+JyxcbiAgICBdLmpvaW4oJycpLFxuICAgIHByb2dyZXNzOiAnPGRpdiBjbGFzcz1cImdpZy10ZmEtcHJvZ3Jlc3NcIj48L2Rpdj4nLFxuICAgIGVycm9yOiBbJzxkaXY+JywgJzxkaXYgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJnaWctdGZhLWVycm9yXCI+PC9kaXY+JywgJzwvZGl2PiddLmpvaW4oJycpLFxuICAgIHBob25lUmVnaXN0ZXI6IFtcbiAgICAgICAgJzxkaXYgaWQ9XCIkaWQtaGVhZGVyXCIgY2xhc3M9XCJnaWctdGZhLWhlYWRlci10ZXh0XCI+JGhlYWRlclRleHQ8L2Rpdj4nLFxuXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1sYWJlbFwiIGlkPVwiJGlkLXNlbGVjdC15b3VyLWNvdW50cnlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4kc2VsZWN0X3lvdXJfY291bnRyeTwvZGl2PicsXG4gICAgICAgICc8c2VsZWN0IGNsYXNzPVwiZ2lnLXRmYS1waG9uZS1yZWdpc3Rlci1zZWxlY3RcIiB3aWR0aD1cIjI0OFwiIHRhYmluZGV4PVwiMFwiIGFyaWEtbGFiZWxsZWRieT1cIiRpZC1oZWFkZXIgJGlkLXNlbGVjdC15b3VyLWNvdW50cnlcIj4nICtcbiAgICAgICAgJyA8b3B0aW9uIHZhbHVlPVwiMFwiPiRzZWxlY3RfYXJlYV9jb2RlPC9vcHRpb24+JyArXG4gICAgICAgICcgPG9wdGdyb3VwIGxhYmVsPVwiXCI+ICcgK1xuICAgICAgICAnPG9wdGlvbiB2YWx1ZT1cIjFcIiBpc1VTPVwidHJ1ZVwiPiR1bml0ZWRfc3RhdGVzX2FyZWFfY29kZTwvb3B0aW9uPiAnICtcbiAgICAgICAgJzxvcHRpb24gdmFsdWU9XCIxXCI+JGNhbmFkYV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjQ0XCI+JHVuaXRlZF9raW5nZG9tX2FyZWFfY29kZTwvb3B0aW9uPicgK1xuICAgICAgICAnIDxvcHRpb24gdmFsdWU9XCI2MVwiPiRhdXN0cmFsaWFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI4MVwiPiRqYXBhbl9hcmVhX2NvZGU8L29wdGlvbj4gPC9vcHRncm91cD4gPG9wdGdyb3VwIGxhYmVsPVwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCI+IDxvcHRpb24gdmFsdWU9XCI5M1wiPiRhZmdoYW5pc3Rhbl9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjM1NVwiPiRhbGJhbmlhX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMjEzXCI+JGFsZ2VyaWFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIzNzZcIj4kYW5kb3JyYV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjI0NFwiPiRhbmdvbGFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIxXCI+JGFuZ3VpbGxhX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMVwiPiRhbnRpZ3VhX2FuZF9iYXJidWRhX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiNTRcIj4kYXJnZW50aW5hX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMzc0XCI+JGFybWVuaWFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIyOTdcIj4kYXJ1YmFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI2MVwiPiRhdXN0cmFsaWFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI0M1wiPiRhdXN0cmlhX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiOTk0XCI+JGF6ZXJiYWlqYW5fYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI5NzNcIj4kYmFocmFpbl9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjg4MFwiPiRiYW5nbGFkZXNoX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMVwiPiRiYXJiYWRvc19hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjM3NVwiPiRiZWxhcnVzX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMzJcIj4kYmVsZ2l1bV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjUwMVwiPiRiZWxpemVfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIyMjlcIj4kYmVuaW5fYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIxXCI+JGJlcm11ZGFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI5NzVcIj4kYmh1dGFuX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiNTkxXCI+JGJvbGl2aWFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIzODdcIj4kYm9zbmlhX2FuZF9oZXJ6ZWdvdmluYV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjI2N1wiPiRib3Rzd2FuYV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjU1XCI+JGJyYXppbF9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjI0NlwiPiRicml0aXNoX2luZGlhbl9vY2Vhbl90ZXJyaXRvcnlfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI2NzNcIj4kYnJ1bmVpX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMzU5XCI+JGJ1bGdhcmlhX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMjI2XCI+JGJ1cmtpbmFfZmFzb19hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjI1N1wiPiRidXJ1bmRpX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiODU1XCI+JGNhbWJvZGlhX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMjM3XCI+JGNhbWVyb29uX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMVwiPiRjYW5hZGFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIyMzhcIj4kY2FwZV92ZXJkZV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjFcIj4kY2F5bWFuX2lzbGFuZHNfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIyMzVcIj4kY2hhZF9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjU2XCI+JGNoaWxlX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiODZcIj4kY2hpbmFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI1N1wiPiRjb2xvbWJpYV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjI0MlwiPiRjb25nb19hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjI0M1wiPiRjb25nb19kZW1vY3JhdGljX3JlcHVibGljX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiNTA2XCI+JGNvc3RhX3JpY2FfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIyMjVcIj4kY290ZV9kaXZvaXJlX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMzg1XCI+JGNyb2F0aWFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI1M1wiPiRjdWJhX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMzU3XCI+JGN5cHJ1c19hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjQyMFwiPiRjemVjaF9yZXB1YmxpY19hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjQ1XCI+JGRlbm1hcmtfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIyNTNcIj4kZGppYm91dGlfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIxXCI+JGRvbWluaWNhX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMVwiPiRkb21pbmljYW5fcmVwdWJsaWNfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI2NzBcIj4kZWFzdF90aW1vcl9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjU5M1wiPiRlY3VhZG9yX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMjBcIj4kZWd5cHRfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI1MDNcIj4kZWxfc2FsdmFkb3JfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIyNDBcIj4kZXF1YXRvcmlhbF9ndWluZWFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIzNzJcIj4kZXN0b25pYV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjI1MVwiPiRldGhpb3BpYV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjUwMFwiPiRmYWxrbGFuZF9pc2xhbmRzX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMjk4XCI+JGZhcm9lX2lzbGFuZHNfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI2NzlcIj4kZmlqaV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjM1OFwiPiRmaW5sYW5kX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMzNcIj4kZnJhbmNlX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiNTk0XCI+JGZyZW5jaF9ndWlhbmFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI2ODlcIj4kZnJlbmNoX3BvbHluZXNpYV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjI0MVwiPiRnYWJvbl9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjIyMFwiPiRnYW1iaWFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI5OTVcIj4kZ2VvcmdpYV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjQ5XCI+JGdlcm1hbnlfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIyMzNcIj4kZ2hhbmFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIzNTBcIj4kZ2licmFsdGFyX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMzBcIj4kZ3JlZWNlX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMjk5XCI+JGdyZWVubGFuZF9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjFcIj4kZ3JlbmFkYV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjU5MFwiPiRndWFkZWxvdXBlX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMVwiPiRndWFtX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiNTAyXCI+JGd1YXRlbWFsYV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjQ0XCI+JGd1ZXJuc2V5X2FyZWFfY29kZTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCIyMjRcIj4kZ3VpbmVhX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiNTkyXCI+JGd1eWFuYV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjUwOVwiPiRoYWl0aV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjUwNFwiPiRob25kdXJhc19hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjg1MlwiPiRob25nX2tvbmdfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIzNlwiPiRodW5nYXJ5X2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMzU0XCI+JGljZWxhbmRfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI5MVwiPiRpbmRpYV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjYyXCI+JGluZG9uZXNpYV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjk4XCI+JGlyYW5fYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI5NjRcIj4kaXJhcV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjM1M1wiPiRpcmVsYW5kX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiNDRcIj4kaXNsZV9vZl9tYW5fYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI5NzJcIj4kaXNyYWVsX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMzlcIj4kaXRhbHlfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIxXCI+JGphbWFpY2FfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI4MVwiPiRqYXBhbl9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjQ0XCI+JGplcnNleV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjk2MlwiPiRqb3JkYW5fYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI3XCI+JGthemFraHN0YW5fYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIyNTRcIj4ka2VueWFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI4MlwiPiRrb3JlYV9zb3V0aF9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjk2NVwiPiRrdXdhaXRfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI5OTZcIj4ka3lyZ3l6c3Rhbl9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjM3MVwiPiRsYXR2aWFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI5NjFcIj4kbGViYW5vbl9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjI2NlwiPiRsZXNvdGhvX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMjMxXCI+JGxpYmVyaWFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIyMThcIj4kbGlieWFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI0MjNcIj4kbGllY2h0ZW5zdGVpbl9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjM3MFwiPiRsaXRodWFuaWFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIzNTJcIj4kbHV4ZW1ib3VyZ19hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjg1M1wiPiRtYWNhb19hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjM4OVwiPiRtYWNlZG9uaWFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIyNjFcIj4kbWFkYWdhc2Nhcl9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjI2NVwiPiRtYWxhd2lfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI2MFwiPiRtYWxheXNpYV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjk2MFwiPiRtYWxkaXZlc19hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjIyM1wiPiRzb21hbGlhX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMzU2XCI+JG1hbHRhX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiNTk2XCI+JG1hcnRpbmlxdWVfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIyMjJcIj4kbWF1cml0YW5pYV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjIzMFwiPiRtYXVyaXRpdXNfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI1MlwiPiRtZXhpY29fYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIzNzNcIj4kbW9sZG92YV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjM3N1wiPiRtb25hY29fYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI5NzZcIj4kbW9uZ29saWFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIzODJcIj4kbW9udGVuZWdyb19hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjFcIj4kbW9udHNlcnJhdF9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjIxMlwiPiRtb3JvY2NvX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMjU4XCI+JG1vemFtYmlxdWVfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI5NVwiPiRteWFubWFyX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMjY0XCI+JG5hbWliaWFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI5NzdcIj4kbmVwYWxfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIzMVwiPiRuZXRoZXJsYW5kc19hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjU5OVwiPiRuZXRoZXJsYW5kc19hbnRpbGxlc19hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjY4N1wiPiRuZXdfY2FsZWRvbmlhX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiNjRcIj4kbmV3X3plYWxhbmRfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI1MDVcIj4kbmljYXJhZ3VhX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMjI3XCI+JG5pZ2VyX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMjM0XCI+JG5pZ2VyaWFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIxXCI+JG5vcnRoZXJuX21hcmlhbmFfaXNsYW5kc19hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjQ3XCI+JG5vcndheV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjk2OFwiPiRvbWFuX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiOTJcIj4kcGFraXN0YW5fYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI5NzBcIj4kcGFsZXN0aW5lX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiNTA3XCI+JHBhbmFtYV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjU5NVwiPiRwYXJhZ3VheV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjUxXCI+JHBlcnVfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI2M1wiPiRwaGlsaXBwaW5lc19hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjQ4XCI+JHBvbGFuZF9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjM1MVwiPiRwb3J0dWdhbF9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjFcIj4kcHVlcnRvX3JpY29fYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI5NzRcIj4kcWF0YXJfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIyNjJcIj4kcmV1bmlvbl9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjQwXCI+JHJvbWFuaWFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI3XCI+JHJ1c3NpYV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjI1MFwiPiRyd2FuZGFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIxXCI+JHNhaW50X2tpdHRzX2FuZF9uZXZpc19hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjFcIj4kc2FpbnRfbHVjaWFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIxXCI+JHNhaW50X3ZpbmNlbnRfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI5NjZcIj4kc2F1ZGlfYXJhYmlhX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMjIxXCI+JHNlbmVnYWxfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIzODFcIj4kc2VyYmlhX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMjQ4XCI+JHNleWNoZWxsZXNfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIyMzJcIj4kc2llcnJhX2xlb25lX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiNjVcIj4kc2luZ2Fwb3JlX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiNDIxXCI+JHNsb3Zha2lhX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMzg2XCI+JHNsb3ZlbmlhX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiNjc3XCI+JHNvbG9tb25faXNsYW5kc19hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjI1MlwiPiRzb21hbGlhX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMjdcIj4kc291dGhfYWZyaWNhX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMzRcIj4kc3BhaW5fYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI5NFwiPiRzcmlfbGFua2FfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIyNDlcIj4kc3VkYW5fYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI1OTdcIj4kc3VyaW5hbWVfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIyNjhcIj4kc3dhemlsYW5kX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiNDZcIj4kc3dlZGVuX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiNDFcIj4kc3dpdHplcmxhbmRfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI5NjNcIj4kc3lyaWFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI4ODZcIj4kdGFpd2FuX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiOTkyXCI+JHRhamlraXN0YW5fYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIyNTVcIj4kdGFuemFuaWFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI2NlwiPiR0aGFpbGFuZF9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjIyOFwiPiR0b2dvX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiNjc2XCI+JHRvbmdhX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMVwiPiR0cmluaWRhZF9hbmRfdG9iYWdvX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMjE2XCI+JHR1bmlzaWFfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI5MFwiPiR0dXJrZXlfYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI5OTNcIj4kdHVya21lbmlzdGFuX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMjU2XCI+JHVnYW5kYV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjM4MFwiPiR1a3JhaW5lX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiOTcxXCI+JHVuaXRlZF9hcmFiX2VtaXJhdGVzX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiNDRcIj4kdW5pdGVkX2tpbmdkb21fYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCIxXCIgaXNVUz1cInRydWVcIj4kdW5pdGVkX3N0YXRlc19hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjU5OFwiPiR1cnVndWF5X2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiOTk4XCI+JHV6YmVraXN0YW5fYXJlYV9jb2RlPC9vcHRpb24+IDxvcHRpb24gdmFsdWU9XCI2NzhcIj4kdmFudWF0dV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjU4XCI+JHZlbmV6dWVsYV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjg0XCI+JHZpZXRfbmFtX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMVwiPiR2aXJnaW5faXNsYW5kc19icml0aXNoX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiNjgxXCI+JHdhbGxpc19hbmRfZnV0dW5hX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiOTY3XCI+JHllbWVuX2FyZWFfY29kZTwvb3B0aW9uPiA8b3B0aW9uIHZhbHVlPVwiMjYwXCI+JHphbWJpYV9hcmVhX2NvZGU8L29wdGlvbj4gPG9wdGlvbiB2YWx1ZT1cIjI2M1wiPiR6aW1iYWJ3ZV9hcmVhX2NvZGU8L29wdGlvbj4gPC9vcHRncm91cD48L3NlbGVjdD4nLFxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtbGFiZWxcIiBpZD1cIiRpZC1waG9uZS1udW1iZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4kZW50ZXJfeW91cl9waG9uZV9udW1iZXI8L2Rpdj4nLFxuICAgICAgICAnPGlucHV0IGNsYXNzPVwiZ2lnLXRmYS1waG9uZS1wcmVmaXhcIiB0eXBlPVwidGV4dFwiIGRpc2FibGVkPVwiZGlzYWJsZWRcIi8+JyxcbiAgICAgICAgJzxpbnB1dCBjbGFzcz1cImdpZy10ZmEtcGhvbmUtbnVtYmVyXCIgdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsbGVkYnk9XCIkaWQtcGhvbmUtbnVtYmVyXCIgLz4nLFxuXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS12ZXJpZmljYXRpb24tbWV0aG9kXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj4nLFxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtbGFiZWwgZ2lnLXRmYS1waG9uZS1yZWdpc3Rlci10eXBlLWxhYmVsXCIgaWQ9XCJnaWctdGZhLXBob25lLWdldC1jb2RlLWJ5XCI+JGdldF9jb2RlX2J5PC9kaXY+JyxcbiAgICAgICAgJzxsYWJlbCBjbGFzcz1cImdpZy10ZmEtcGhvbmUtcmVnaXN0ZXItdHlwZSBnaWctdGZhLXBob25lLXJlZ2lzdGVyLXR5cGUtc21zXCIgZm9yPVwiJGlkLWdldC1zbXMtY29kZVwiPicsXG4gICAgICAgICc8aW5wdXQgY2xhc3M9XCJnaWctdGZhLXBob25lLXJlZ2lzdGVyLXR5cGUtcmFkaW9cIiBuYW1lPVwicGhvbmVNZXRob2RcIiBhcmlhLWxhYmVsbGVkYnk9XCJnaWctdGZhLXBob25lLWdldC1jb2RlLWJ5IHJiLXNtcy1sYWJlbFwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwic21zXCIgaWQ9XCIkaWQtZ2V0LXNtcy1jb2RlXCIgY2hlY2tlZCAvPiA8c3BhbiBpZD1cInJiLXNtcy1sYWJlbFwiPiR0ZXh0X21lc3NhZ2U8L3NwYW4+PC9sYWJlbD4nLFxuICAgICAgICAnPGxhYmVsIGNsYXNzPVwiZ2lnLXRmYS1waG9uZS1yZWdpc3Rlci10eXBlIGdpZy10ZmEtcGhvbmUtcmVnaXN0ZXItdHlwZS12b2ljZS1jYWxsXCIgIGZvcj1cIiRpZC1nZXQtdm9pY2UtY29kZVwiPicsXG4gICAgICAgICc8aW5wdXQgY2xhc3M9XCJnaWctdGZhLXBob25lLXJlZ2lzdGVyLXR5cGUtcmFkaW9cIiBuYW1lPVwicGhvbmVNZXRob2RcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInZvaWNlXCIgaWQ9XCIkaWQtZ2V0LXZvaWNlLWNvZGVcIiAvPiA8c3Bhbj4kdm9pY2VfY2FsbDwvc3Bhbj48L2xhYmVsPicsXG4gICAgICAgICc8L2Rpdj4nLFxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtZXJyb3JcIiBhcmlhLWF0b21pYz1cInRydWVcIiByb2xlPVwiYWxlcnRcIj48L2Rpdj4nLFxuXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1idXR0b24tY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImdpZy10ZmEtYnV0dG9uIGdpZy10ZmEtYnV0dG9uLW5leHRcIiByb2xlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCI+JHNlbmQ8L2Rpdj48L2Rpdj4nLFxuICAgIF0uam9pbignJyksXG4gICAgcGhvbmVFbnRlckNvZGU6IFtcbiAgICAgICAgJzxkaXYgaWQ9XCIkaWQtaGVhZGVyLXRleHRcIiB0YWJpbmRleD1cIi0xXCIgIGNsYXNzPVwiZ2lnLXRmYS1waG9uZS1jb2RlLWhlYWRlci10ZXh0XCI+JGhlYWRlclRleHQ8L2Rpdj4nLFxuICAgICAgICAnPGRpdiBpZD1cIiRpZC1zdWJ0ZXh0XCIgdGFiaW5kZXg9XCItMVwiIGNsYXNzPVwiZ2lnLXRmYS1waG9uZS1jb2RlLWhlYWRlci1zdWJ0ZXh0XCI+PHNwYW4gY2xhc3M9XCJnaWctdGZhLXBob25lLWNvZGUtcGhvbmVudW1iZXJcIj48L3NwYW4+Jm5ic3A7KDxzcGFuIGNsYXNzPVwiZ2lnLXRmYS1waG9uZS1jb2RlLXJlc2VuZFwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj4kcmVzZW5kPC9zcGFuPik8L2Rpdj4nLFxuXG4gICAgICAgICc8bGFiZWwgY2xhc3M9XCJnaWctdGZhLWxhYmVsXCIgaWQ9XCIkaWQtZW50ZXItY29kZVwiIHRhYmluZGV4PVwiLTFcIj4nLFxuICAgICAgICAnJGVudGVyX2NvZGUnLFxuICAgICAgICAnPGlucHV0IGNsYXNzPVwiZ2lnLXRmYS1jb2RlLXRleHRib3hcIiB0eXBlPVwidGV4dFwiIHRhYmluZGV4PVwiMFwiLz4nLFxuICAgICAgICAnPC9sYWJlbD4nLFxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtZXJyb3JcIiBhcmlhLWF0b21pYz1cInRydWVcIiByb2xlPVwiYWxlcnRcIj48L2Rpdj4nLFxuXG4gICAgICAgICc8bGFiZWwgY2xhc3M9XCJnaWctdGZhLWNvZGUtcmVtZW1iZXItbGFiZWxcIiB0YWJpbmRleD1cIi0xXCIgZm9yPVwiJGlkLXJlbWVtYmVyXCI+PGlucHV0IGNsYXNzPVwiZ2lnLXRmYS1jb2RlLXJlbWVtYmVyLWNoZWNrYm94XCIgdHlwZT1cImNoZWNrYm94XCIgdGFiaW5kZXg9XCIwXCIgaWQ9XCIkaWQtcmVtZW1iZXJcIiAvPiRyZW1lbWJlcl90aGlzX2RldmljZTwvbGFiZWw+JyxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctdGZhLWJ1dHRvbi1jb250YWluZXJcIj48ZGl2IGNsYXNzPVwiZ2lnLXRmYS1idXR0b24gZ2lnLXRmYS1idXR0b24tc3VibWl0XCIgdGFiaW5kZXg9XCIwXCIgcm9sZT1cImJ1dHRvblwiPiRzdWJtaXQ8L2Rpdj48L2Rpdj4nLFxuICAgIF0uam9pbignJyksXG4gICAgZW1haWxFbnRlckNvZGU6IFtcbiAgICAgICAgJzxkaXYgaWQ9XCIkaWQtaGVhZGVyLXRleHRcIiB0YWJpbmRleD1cIi0xXCIgY2xhc3M9XCJnaWctdGZhLWVtYWlsLWNvZGUtaGVhZGVyLXRleHRcIj4kaGVhZGVyVGV4dDwvZGl2PicsXG4gICAgICAgICc8ZGl2IGlkPVwiJGlkLWVtYWlsXCIgdGFiaW5kZXg9XCItMVwiIGNsYXNzPVwiZ2lnLXRmYS1lbWFpbC10ZXh0XCI+JGVtYWlsPC9kaXY+JyxcbiAgICAgICAgJzxsYWJlbCBjbGFzcz1cImdpZy10ZmEtbGFiZWxcIiBpZD1cIiRpZC1lbnRlci1jb2RlXCIgdGFiaW5kZXg9XCItMVwiPicsXG4gICAgICAgICckZW50ZXJfY29kZScsXG4gICAgICAgICc8aW5wdXQgY2xhc3M9XCJnaWctdGZhLWNvZGUtdGV4dGJveFwiIHR5cGU9XCJ0ZXh0XCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1sYWJlbD1cIiRlbnRlcl9jb2RlXCIvPicsXG4gICAgICAgICc8L2xhYmVsPicsXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1lcnJvclwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiIHJvbGU9XCJhbGVydFwiPjwvZGl2PicsXG5cbiAgICAgICAgJzxsYWJlbCBjbGFzcz1cImdpZy10ZmEtY29kZS1yZW1lbWJlci1sYWJlbFwiIHRhYmluZGV4PVwiLTFcIiBmb3I9XCIkaWQtcmVtZW1iZXJcIj48aW5wdXQgY2xhc3M9XCJnaWctdGZhLWNvZGUtcmVtZW1iZXItY2hlY2tib3hcIiB0eXBlPVwiY2hlY2tib3hcIiB0YWJpbmRleD1cIjBcIiBpZD1cIiRpZC1yZW1lbWJlclwiIC8+JHJlbWVtYmVyX3RoaXNfZGV2aWNlPC9sYWJlbD4nLFxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtYnV0dG9uLWNvbnRhaW5lclwiPjxkaXYgY2xhc3M9XCJnaWctdGZhLWJ1dHRvbiBnaWctdGZhLWJ1dHRvbi1zdWJtaXRcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCI+JHN1Ym1pdDwvZGl2PjwvZGl2PicsXG4gICAgXS5qb2luKCcnKSxcbiAgICBwaG9uZVJlc2VuZDogW1xuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtcGhvbmUtcmVzZW5kLWhlYWRlci10ZXh0XCI+JGhlYWRlclRleHQ8L2Rpdj4nLFxuXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS12ZXJpZmljYXRpb24tbWV0aG9kXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj4nLFxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtbGFiZWwgZ2lnLXRmYS1waG9uZS1yZXNlbmQtdHlwZS1sYWJlbFwiPiRnZXRfY29kZV9ieTwvZGl2PicsXG4gICAgICAgICc8bGFiZWwgY2xhc3M9XCJnaWctdGZhLXBob25lLXJlc2VuZC10eXBlIGdpZy10ZmEtcGhvbmUtcmVzZW5kLXR5cGUtc21zXCIgZm9yPVwiJGlkLWdldC1zbXMtY29kZVwiPjxpbnB1dCBjbGFzcz1cImdpZy10ZmEtcGhvbmUtcmVzZW5kLXR5cGUtcmFkaW9cIiBuYW1lPVwicGhvbmVNZXRob2RcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cInNtc1wiIGlkPVwiJGlkLWdldC1zbXMtY29kZVwiIC8+IDxzcGFuPiR0ZXh0X21lc3NhZ2U8L3NwYW4+PC9sYWJlbD4nLFxuICAgICAgICAnPGxhYmVsIGNsYXNzPVwiZ2lnLXRmYS1waG9uZS1yZXNlbmQtdHlwZSBnaWctdGZhLXBob25lLXJlc2VuZC10eXBlLXZvaWNlLWNhbGxcIiBmb3I9XCIkaWQtZ2V0LXZvaWNlLWNvZGVcIj48aW5wdXQgY2xhc3M9XCJnaWctdGZhLXBob25lLXJlc2VuZC10eXBlLXJhZGlvXCIgbmFtZT1cInBob25lTWV0aG9kXCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJ2b2ljZVwiIGlkPVwiJGlkLWdldC12b2ljZS1jb2RlXCIgLz4gPHNwYW4+JHZvaWNlX2NhbGw8L3NwYW4+PC9sYWJlbD4nLFxuICAgICAgICAnPC9kaXY+JyxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctdGZhLWxhYmVsIGdpZy10ZmEtcGhvbmUtcmVzZW5kLXlvdXJwaG9uZS1sYWJlbFwiPiR5b3VyX3Bob25lX251bWJlciA8c3BhbiBjbGFzcz1cImdpZy10ZmEtcGhvbmUtcmVzZW5kLXlvdXJwaG9uZVwiPjwvc3Bhbj48L2Rpdj4nLFxuXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1idXR0b24tY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImdpZy10ZmEtYnV0dG9uIGdpZy10ZmEtYnV0dG9uLXNlbmRcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCI+JHNlbmQ8L2Rpdj48L2Rpdj4nLFxuICAgIF0uam9pbignJyksXG4gICAgcGhvbmVFZGl0OiBbJzxkaXYgY2xhc3M9XCJnaWctdGZhLXBob25lLWVkaXQtaGVhZGVyLXRleHRcIj4kaGVhZGVyVGV4dDwvZGl2PicsICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1waG9uZS1lZGl0LW51bWJlcnNcIj48L2Rpdj4nXS5qb2luKCcnKSxcbiAgICBwaG9uZUVkaXRFbnRyeTogW1xuICAgICAgICAnPHNwYW4gY2xhc3M9XCJnaWctdGZhLXBob25lLWVkaXQtbnVtYmVyXCI+JHBob25lTnVtYmVyPC9zcGFuPjxzcGFuIGNsYXNzPVwiZ2lnLXRmYS1waG9uZS1lZGl0LWxpbmtcIiBkYXRhLXBob25laWQ9XCIkcGhvbmVJZFwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj4kZWRpdDwvc3Bhbj4nLFxuICAgIF0uam9pbignJyksXG4gICAgdG90cFJlZ2lzdGVyOiBbXG4gICAgICAgICc8aDIgaWQ9XCIkaWQtc3RlcC0xXCIgY2xhc3M9XCJnaWctdGZhLXRvdHAtc3RlcC1sYWJlbFwiPiRzdGVwMTwvaDI+JyxcbiAgICAgICAgJzxkaXYgaWQ9XCIkaWQtc2Nhbi1xci1jb2RlLWxhYmVsXCIgY2xhc3M9XCJnaWctdGZhLWxhYmVsXCI+JHNjYW5fcXJfY29kZTwvZGl2PicsXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS10b3RwLXFyY29kZVwiIHRhYmluZGV4PVwiMFwiIGFyaWEtbGFiZWxsZWRieT1cIiRpZC1zdGVwLTEgJGlkLXNjYW4tcXItY29kZS1sYWJlbFwiPicsXG4gICAgICAgICAgICAnPGltZyBhbHQ9XCJRUiBDb2RlIEltYWdlXCIgc3JjPVwiJHFyQ29kZVwiLz4nLFxuICAgICAgICAnPC9kaXY+JyxcbiAgICAgICAgJzxoMiBpZD1cIiRpZC1zdGVwLTJcIiBjbGFzcz1cImdpZy10ZmEtdG90cC1zdGVwLWxhYmVsXCI+JHN0ZXAyPC9oMj4nLFxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtbGFiZWxcIiBpZD1cIiRpZC1lbnRlci1jb2RlXCIgID4kZW50ZXJfY29kZTwvZGl2PicsXG4gICAgICAgICc8aW5wdXQgY2xhc3M9XCJnaWctdGZhLWNvZGUtdGV4dGJveFwiIHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbGxlZGJ5PVwiJGlkLXN0ZXAtMiAkaWQtZW50ZXItY29kZSAkaWQtZW50ZXItY29kZS1lcnJvclwiIHRhYmluZGV4PVwiMFwiLz4nLFxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtZXJyb3JcIiBpZD1cIiRpZC1lbnRlci1jb2RlLWVycm9yXCIgYXJpYS1hdG9taWM9XCJ0cnVlXCIgcm9sZT1cImFsZXJ0XCI+PC9kaXY+JyxcbiAgICAgICAgJzxsYWJlbCBjbGFzcz1cImdpZy10ZmEtY29kZS1yZW1lbWJlci1sYWJlbFwiIGZvcj1cIiRpZC1yZW1lbWJlci1tZVwiIGlkPVwiJGdpZy10ZmEtY29kZS1yZW1lbWJlci1sYWJlbFwiPjxpbnB1dCBhcmlhLWxhYmVsbGVkYnk9XCIkZ2lnLXRmYS1jb2RlLXJlbWVtYmVyLWxhYmVsXCIgY2xhc3M9XCJnaWctdGZhLWNvZGUtcmVtZW1iZXItY2hlY2tib3hcIiB0eXBlPVwiY2hlY2tib3hcIiB0YWJpbmRleD1cIjBcIiBpZD1cIiRpZC1yZW1lbWJlci1tZVwiIC8+JHJlbWVtYmVyX3RoaXNfZGV2aWNlPC9sYWJlbD4nLFxuICAgICAgICAnPGRpdiBpZD1cIiRpZC1kb3dubG9hZC1iYWNrdXAtY29kZXNcIiBjbGFzcz1cImdpZy10ZmEtbGFiZWwgZ2lnLXRmYS1ib3R0b20taW50cm9cIj4kZG93bmxvYWRCYWNrdXBDb2Rlc0ludHJvPC9kaXY+JyxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctdGZhLWJ1dHRvbi1jb250YWluZXJcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiJGlkLWRvd25sb2FkLWJhY2t1cC1jb2Rlc1wiPjxkaXYgY2xhc3M9XCJnaWctdGZhLWJ1dHRvbiBnaWctdGZhLWJ1dHRvbi1zdWJtaXRcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCI+JHN1Ym1pdDwvZGl2PjwvZGl2PicsXG4gICAgXS5qb2luKCcnKSxcbiAgICB0b3RwRWRpdDogW1xuICAgICAgICAnPGRpdiBpZD1cIiRpZC1oZWFkZXJcIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1sYWJlbD1cIiRoZWFkZXJUZXh0XCIgY2xhc3M9XCJnaWctdGZhLXRvdHAtaGVhZGVyLXRleHQgZ2lnLXRmYS10b3RwLWVkaXQtaGVhZGVyLXRleHRcIj4kaGVhZGVyVGV4dDwvZGl2PicsXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1lcnJvclwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiIHJvbGU9XCJhbGVydFwiPjwvZGl2PicsXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1idXR0b24tY29udGFpbmVyIGdpZy10ZmEtYnV0dG9uLWNvbnRhaW5lci10b3AtbWFyZ2luXCI+JyxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctdGZhLWJ1dHRvbiBnaWctdGZhLWJ1dHRvbi1jaGFuZ2UtZGV2aWNlXCIgdGl0bGU9XCIkY2hhbmdlRGV2aWNlXCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1sYWJlbGxlZGJ5PVwiJGlkLWhlYWRlclwiIHJvbGU9XCJidXR0b25cIj4kY2hhbmdlRGV2aWNlPC9kaXY+JyxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctdGZhLWJ1dHRvbiBnaWctdGZhLWJ1dHRvbi1iYWNrdXAtY29kZXNcIiB0aXRsZT1cIiRiYWNrdXBDb2Rlc1wiIHRhYmluZGV4PVwiMFwiIGFyaWEtbGFiZWxsZWRieT1cIiRpZC1oZWFkZXJcIiByb2xlPVwiYnV0dG9uXCI+JGJhY2t1cENvZGVzPC9kaXY+JyxcbiAgICAgICAgJzwvZGl2PicsXG4gICAgXS5qb2luKCcnKSxcbiAgICB0b3RwQmFja3VwQ29kZXM6IFtcbiAgICAgICAgJzxkaXYgaWQ9XCIkaWQtaGVhZGVyXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtbGFiZWw9XCIkaGVhZGVyVGV4dFwiIGNsYXNzPVwiZ2lnLXRmYS10b3RwLWhlYWRlci10ZXh0IGdpZy10ZmEtdG90cC1iYWNrdXAtY29kZXMtaGVhZGVyLXRleHRcIj4kaGVhZGVyVGV4dDwvZGl2PicsXG4gICAgICAgICc8c3BhbiBjbGFzcz1cImdpZy1zci1vbmx5XCI+bGlzdCBvZiA5IGJhY2t1cCBjb2Rlczwvc3Bhbj4nLFxuICAgICAgICAnPHVsIGNsYXNzPVwiZ2lnLXRmYS10b3RwLWJhY2t1cC1jb2Rlc1wiPicsXG4gICAgICAgICAgICAnPGxpPicgK1xuICAgICAgICAgICAgICAgICc8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4kYmFja3VwQ29kZTE8L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2lnLXNyLW9ubHlcIj4xc3QgaXRlbSAkYmFja3VwQ29kZTE8L3NwYW4+JyArXG4gICAgICAgICAgICAnPC9saT4nLFxuICAgICAgICAgICAgJzxsaT4nICtcbiAgICAgICAgICAgICAgICAnPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JGJhY2t1cENvZGUyPC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdpZy1zci1vbmx5XCI+Mm5kIGl0ZW0gJGJhY2t1cENvZGUyPC9zcGFuPicgK1xuICAgICAgICAgICAgJzwvbGk+JyxcbiAgICAgICAgICAgICc8bGk+JyArXG4gICAgICAgICAgICAgICAgJzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiRiYWNrdXBDb2RlMzwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnaWctc3Itb25seVwiPjNyZCBpdGVtICRiYWNrdXBDb2RlMzwvc3Bhbj4nICtcbiAgICAgICAgICAgICc8L2xpPicsXG4gICAgICAgICAgICAnPGxpPicgK1xuICAgICAgICAgICAgICAgICc8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4kYmFja3VwQ29kZTQ8L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2lnLXNyLW9ubHlcIj40dGggaXRlbSAkYmFja3VwQ29kZTQ8L3NwYW4+JyArXG4gICAgICAgICAgICAnPC9saT4nLFxuICAgICAgICAgICAgJzxsaT4nICtcbiAgICAgICAgICAgICAgICAnPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JGJhY2t1cENvZGU1PC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdpZy1zci1vbmx5XCI+NXRoIGl0ZW0gJGJhY2t1cENvZGU1PC9zcGFuPicgK1xuICAgICAgICAgICAgJzwvbGk+JyxcbiAgICAgICAgICAgICc8bGk+JyArXG4gICAgICAgICAgICAgICAgJzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiRiYWNrdXBDb2RlNjwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnaWctc3Itb25seVwiPjZ0aCBpdGVtICRiYWNrdXBDb2RlNjwvc3Bhbj4nICtcbiAgICAgICAgICAgICc8L2xpPicsXG4gICAgICAgICAgICAnPGxpPicgK1xuICAgICAgICAgICAgICAgICc8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4kYmFja3VwQ29kZTc8L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiZ2lnLXNyLW9ubHlcIj43dGggaXRlbSAkYmFja3VwQ29kZTc8L3NwYW4+JyArXG4gICAgICAgICAgICAnPC9saT4nLFxuICAgICAgICAgICAgJzxsaT4nICtcbiAgICAgICAgICAgICAgICAnPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JGJhY2t1cENvZGU4PC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImdpZy1zci1vbmx5XCI+OHRoIGl0ZW0gJGJhY2t1cENvZGU4PC9zcGFuPicgK1xuICAgICAgICAgICAgJzwvbGk+JyxcbiAgICAgICAgICAgICc8bGk+JyArXG4gICAgICAgICAgICAgICAgJzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiRiYWNrdXBDb2RlOTwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJnaWctc3Itb25seVwiPjl0aCBpdGVtICRiYWNrdXBDb2RlOTwvc3Bhbj4nICtcbiAgICAgICAgICAgICc8L2xpPicsXG4gICAgICAgICc8L3VsPicsXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1idXR0b24tY29udGFpbmVyXCI+JyxcbiAgICAgICAgJzxkaXYgaWQ9XCJ0b3RwLWJhY2t1cENvZGVzLXByaW50LWJ0blwiIGNsYXNzPVwiZ2lnLXRmYS1idXR0b24gZ2lnLWJhY2t1cC1jb2Rlcy1wcmludC1idG5cIiB0aXRsZT1cIiRwcmludFwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj4nLFxuICAgICAgICAnPHNwYW4gYXJpYS1sYWJlbGxlZGJ5PVwiJGlkLWhlYWRlclwiIGNsYXNzPVwiZ2lnLXNyLW9ubHlcIj48L3NwYW4+JyArXG4gICAgICAgICckcHJpbnQnLFxuICAgICAgICAnPC9kaXY+JyxcbiAgICAgICAgJzwvZGl2PicsXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1yb3dcIj4nLFxuICAgICAgICAnPGEgY2xhc3M9XCJnaWctdGZhLWxpbmsgZ2lnLXRmYS1nZW5lcmF0ZS1uZXctY29kZXNcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCI+JGdlbmVyYXRlTmV3Q29kZXM8L2E+JyxcbiAgICAgICAgJzwvZGl2PicsXG4gICAgXS5qb2luKCcnKSxcbiAgICB0b3RwR2VuZXJhdGVOZXdDb2Rlc0NvbmZpcm1hdGlvbjogW1xuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtbGFiZWxcIj4kcmVzZXRDb2Rlc1F1ZXN0aW9uPC9kaXY+JyxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctdGZhLWJ1dHRvbi1jb250YWluZXIgZ2lnLXRmYS1idXR0b24tY29udGFpbmVyLXJvdyBnaWctdGZhLWJ1dHRvbi1jb250YWluZXItdG9wLW1hcmdpbiBkLWZsZXgganVzdGlmeS1jb250ZW50LXNwYWNlXCI+JyxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctdGZhLWJ1dHRvbiBnaWctYmFja3VwLWNvZGVzLWNhbmNlbFwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj4kY2FuY2VsPC9kaXY+JyxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctdGZhLWJ1dHRvbiBnaWctYmFja3VwLWNvZGVzLWNvbmZpcm1cIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCI+JHllczwvZGl2PicsXG4gICAgICAgICc8L2Rpdj4nLFxuICAgIF0sXG4gICAgdG90cEdlbmVyYXRlTmV3Q29kZXNDb25maXJtYXRpb25XQ0FHQ29tcGx5OiBbXG4gICAgICAgIGA8ZGl2IHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWxsZWRieT1cInJlc2V0LWNvZGVzLXF1ZXN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicmVzZXQtY29kZXMtcXVlc3Rpb25cIiBjbGFzcz1cImdpZy10ZmEtbGFiZWxcIj4kcmVzZXRDb2Rlc1F1ZXN0aW9uPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1idXR0b24tY29udGFpbmVyIGdpZy10ZmEtYnV0dG9uLWNvbnRhaW5lci1yb3cgZ2lnLXRmYS1idXR0b24tY29udGFpbmVyLXRvcC1tYXJnaW4gZC1mbGV4IGp1c3RpZnktY29udGVudC1zcGFjZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnaWctdGZhLWJ1dHRvbiBnaWctYmFja3VwLWNvZGVzLWNhbmNlbFwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj4kY2FuY2VsPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdpZy10ZmEtYnV0dG9uIGdpZy1iYWNrdXAtY29kZXMtY29uZmlybVwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj4keWVzPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YCxcbiAgICBdLFxuICAgIHRvdHBWZXJpZnk6IFtcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctdGZhLWxhYmVsXCIgaWQ9XCIkaWQtZW50ZXItY29kZVwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4kZW50ZXJfY29kZTwvZGl2PicsXG4gICAgICAgICc8aW5wdXQgY2xhc3M9XCJnaWctdGZhLWNvZGUtdGV4dGJveFwiIHR5cGU9XCJ0ZXh0XCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1sYWJlbGxlZGJ5PVwiJGlkLWVudGVyLWNvZGVcIi8+JyxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctdGZhLWVycm9yXCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1hdG9taWM9XCJ0cnVlXCIgcm9sZT1cImFsZXJ0XCI+PC9kaXY+JyxcbiAgICAgICAgJzxsYWJlbCBjbGFzcz1cImdpZy10ZmEtY29kZS1yZW1lbWJlci1sYWJlbFwiIGZvcj1cIiRpZC1yZW1lbWJlci1tZVwiPjxpbnB1dCBjbGFzcz1cImdpZy10ZmEtY29kZS1yZW1lbWJlci1jaGVja2JveFwiIHR5cGU9XCJjaGVja2JveFwiIHRhYmluZGV4PVwiMFwiIGlkPVwiJGlkLXJlbWVtYmVyLW1lXCIgLz4kcmVtZW1iZXJfdGhpc19kZXZpY2U8L2xhYmVsPicsXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1idXR0b24tY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImdpZy10ZmEtYnV0dG9uIGdpZy10ZmEtYnV0dG9uLXN1Ym1pdFwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj4kc3VibWl0PC9kaXY+PC9kaXY+JyxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctdGZhLXJvdyBnaWctdGZhLXVzZS1iYWNrdXAtY29kZS1yb3dcIj4nLFxuICAgICAgICAnPGEgY2xhc3M9XCJnaWctdGZhLWxpbmsgZ2lnLXRmYS11c2UtYmFja3VwLWNvZGVcIiB0YWJpbmRleD1cIjBcIj4kdXNlQmFja3VwQ29kZTwvYT4nLFxuICAgICAgICAnPC9kaXY+JyxcbiAgICBdLmpvaW4oJycpLFxuICAgIHB1c2hWZXJpZmljYXRpb25QaG9uZTogW1xuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtbGFiZWxcIiBpZD1cIiRpZC1wdXNoLXRmYVwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWhpZGRlbj1cInRydWVcIj4kY2FsbF90b19hY3Rpb248L2Rpdj4nLFxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtZXJyb3JcIiB0YWJpbmRleD1cIjBcIiBhcmlhLWF0b21pYz1cInRydWVcIiByb2xlPVwiYWxlcnRcIj48L2Rpdj4nLFxuICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy10ZmEtcm93IGdpZy10ZmEtdXNlLWJhY2t1cC1jb2RlLXJvd1wiPicsXG4gICAgICAgICc8YSBjbGFzcz1cImdpZy10ZmEtbGluayBnaWctdGZhLXVzZS1iYWNrdXAtY29kZVwiIHRhYmluZGV4PVwiMFwiPiR1c2VCYWNrdXBDb2RlPC9hPicsXG4gICAgICAgICc8YnIvPicsXG4gICAgICAgICc8YSBjbGFzcz1cImdpZy10ZmEtbGluayBnaWctdGZhLXJlc2VuZC1wdXNoLW5vdGlmaWNhdGlvblwiIHRhYmluZGV4PVwiMFwiPiRyZXNlbmRQdXNoTm90aWZpY2F0aW9uPC9hPicsXG4gICAgICAgICc8L2Rpdj4nLFxuICAgIF0uam9pbignJyksXG4gICAgcHVzaFZlcmlmaWNhdGlvbkJhY2t1cENvZGVzOiBbXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1sYWJlbFwiIGlkPVwiJGlkLXB1c2gtdGZhXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiRjYWxsX3RvX2FjdGlvbjwvZGl2PicsXG4gICAgICAgICc8aW5wdXQgY2xhc3M9XCJnaWctdGZhLWNvZGUtdGV4dGJveFwiIHR5cGU9XCJ0ZXh0XCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1sYWJlbGxlZGJ5PVwiJGlkLXB1c2gtdGZhXCIvPicsXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1lcnJvclwiIHRhYmluZGV4PVwiMFwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiIHJvbGU9XCJhbGVydFwiPjwvZGl2PicsXG4gICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXRmYS1idXR0b24tY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImdpZy10ZmEtYnV0dG9uIGdpZy10ZmEtYnV0dG9uLXN1Ym1pdFwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIj4kc3VibWl0PC9kaXY+PC9kaXY+JyxcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJnaWctdGZhLXJvdyBnaWctdGZhLXVzZS1iYWNrdXAtY29kZS1yb3dcIj4nLFxuICAgICAgICAnPGEgY2xhc3M9XCJnaWctdGZhLWxpbmsgZ2lnLXRmYS1yZXNlbmQtcHVzaC1ub3RpZmljYXRpb25cIiB0YWJpbmRleD1cIjBcIj4kcmVzZW5kUHVzaE5vdGlmaWNhdGlvbjwvYT4nLFxuICAgICAgICAnPC9kaXY+JyxcbiAgICBdLmpvaW4oJycpLFxufTtcbiIsImltcG9ydCB7IEJhc2VUZmFQcm92aWRlciB9IGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQcm92aWRlcnMvQmFzZVRmYVByb3ZpZGVyJztcbmltcG9ydCB7IGRlZmF1bHRUZW1wbGF0ZXMgfSBmcm9tICdzcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGVtcGxhdGVzJztcbmltcG9ydCB7IGRlZmF1bHRDc3MgfSBmcm9tICdzcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvRGVmYXVsdENzcyc7XG5pbXBvcnQgeyBnZXRUZmFQcm92aWRlckluc3RhbmNlLCBpc1RmYVByb3ZpZGVyU3VwcG9ydGVkIH0gZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVByb3ZpZGVyRmFjdG9yeSc7XG5pbXBvcnQgeyBFZGl0YWJsZVRmYVByb3ZpZGVyc1R5cGVzIH0gZnJvbSAnc3JjL2FjY291bnRzL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBlbnVtIFRmYU1vZGUge1xuICAgIHZlcmlmeSxcbiAgICByZWdpc3RlcixcbiAgICBhZGQsXG4gICAgZWRpdCxcbn1cbmV4cG9ydCBlbnVtIFZlcmlmaWNhdGlvbk1ldGhvZCB7XG4gICAgU01TLFxuICAgIFZPSUNFLFxufVxuXG5leHBvcnQgY29uc3QgRnJpZW5kbHlQcm92aWRlck5hbWUgPSAocHJvdmlkZXI6IElQcm92aWRlckluZm8pID0+IHtcbiAgICBzd2l0Y2ggKHByb3ZpZGVyLm5hbWUpIHtcbiAgICAgICAgY2FzZSAnbGl2ZWxpbmsnOiByZXR1cm4gJ1Bob25lIChTTVMpJztcbiAgICAgICAgY2FzZSAnZ2lneWFQaG9uZSc6IHJldHVybiBCb29sZWFuKHByb3ZpZGVyLmNhcGFiaWxpdGllcykgP1xuICAgICAgICAgICAgYFBob25lICgke3Byb3ZpZGVyLmNhcGFiaWxpdGllcy5qb2luKCcvJyl9KWAgOlxuICAgICAgICAgICAgJ1Bob25lJztcbiAgICAgICAgY2FzZSAnZ2lneWFUb3RwJzogcmV0dXJuICdUaW1lIGJhc2VkIEF1dGhlbnRpY2F0aW9uJztcbiAgICAgICAgY2FzZSAnZ2lneWFQdXNoJzogcmV0dXJuICdQdXNoIE5vdGlmaWNhdGlvbic7XG4gICAgICAgIGNhc2UgJ2dpZ3lhRW1haWwnOiByZXR1cm4gJ0VtYWlsJztcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuICdVbmtub3duIFRGQSBQcm92aWRlcic7XG4gICAgfVxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJUHJvdmlkZXJJbmZvIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYXV0aExldmVsPzogbnVtYmVyO1xuICAgIGNhcGFiaWxpdGllcz86IHN0cmluZ1tdLFxuICAgIGRpc3BsYXlOYW1lPzogc3RyaW5nXG59XG5leHBvcnQgY2xhc3MgVGZhUGx1Z2luIHtcbiAgICBwcml2YXRlIG1vZGU6IFRmYU1vZGU7XG4gICAgcHJpdmF0ZSBhY3RpdmVQcm92aWRlcnM6IEFycmF5PElQcm92aWRlckluZm8+ID0gW107XG4gICAgcHJpdmF0ZSBpbmFjdGl2ZVByb3ZpZGVyczogQXJyYXk8SVByb3ZpZGVySW5mbz4gPSBbXTtcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBpc1J0bDogYm9vbGVhbjtcbiAgICBwcml2YXRlIGFkZGVkQ3NzOiBib29sZWFuO1xuICAgIHB1YmxpYyBzZWxlY3RlZFByb3ZpZGVyOiBCYXNlVGZhUHJvdmlkZXI7XG4gICAgcHVibGljIHRlbXBsYXRlczogT2JqZWN0ID0gZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKGRlZmF1bHRUZW1wbGF0ZXMsIGZhbHNlKTtcbiAgICBwdWJsaWMgaXNNb2JpbGVVSTogYm9vbGVhbjtcblxuICAgIGdldFRleHQodGV4dEtleTogc3RyaW5nLCByZXBsYWNlU3RyPzogc3RyaW5nLCB3aXRoU3RyPzogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmFtc1snY3VzdG9tTGFuZyddICYmIHRoaXMucGFyYW1zWydjdXN0b21MYW5nJ11bdGV4dEtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmFtc1snY3VzdG9tTGFuZyddW3RleHRLZXldLnJlcGxhY2UocmVwbGFjZVN0ciwgd2l0aFN0cik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZ2lneWEucGx1Z2luVXRpbHMubGFuZy5nZXRMb2NhbGl6ZWRUZXh0KCdnaWd5YS5zZXJ2aWNlcy5hY2NvdW50cy5wbHVnaW5zLnRmYS5qcycsIHRleHRLZXksIHRoaXMucGFyYW1zWydsYW5nJ10sIHJlcGxhY2VTdHIsIHdpdGhTdHIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHVibGljIHBhcmFtczogT2JqZWN0KSB7XG4gICAgICAgIHRoaXMubW9kZSA9IHRoaXMuZ2V0TW9kZUJ5U3RyaW5nKHBhcmFtc1snbW9kZSddKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJhbXNbJ2NvbnRhaW5lcklEJ10pIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5pZCA9IHRoaXMuY29udGFpbmVyLmlkIHx8IFN0cmluZyhEYXRlLm5vdygpICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSk7XG4gICAgICAgIHRoaXMuaW5pdFVJKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvdmlkZXJzKCgpID0+IHtcbiAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldChcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogJ2xvYWQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5zaG93U2VsZWN0b3IoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdFVJKCkge1xuICAgICAgICB2YXIgZGV2aWNlVHlwZSA9IHRoaXMucGFyYW1zWydkZXZpY2VUeXBlJ10gPyB0aGlzLnBhcmFtc1snZGV2aWNlVHlwZSddLnRvTG93ZXJDYXNlKCkgOiAnZGVza3RvcCc7XG4gICAgICAgIHRoaXMuaXNNb2JpbGVVSSA9IGRldmljZVR5cGUgPT0gJ21vYmlsZScgfHwgKGRldmljZVR5cGUgPT0gJ2F1dG8nICYmIGdpZ3lhLmxvY2FsSW5mby5pc01vYmlsZSk7XG5cbiAgICAgICAgdmFyIGNzc1ByZWZpeCA9IHRoaXMucGFyYW1zWydjc3NQcmVmaXgnXTtcbiAgICAgICAgaWYgKGNzc1ByZWZpeCB8fCAhdGhpcy5hZGRlZENzcykge1xuICAgICAgICAgICAgdmFyIGxhbmcgPSB0aGlzLnBhcmFtc1snbGFuZyddO1xuICAgICAgICAgICAgdGhpcy5pc1J0bCA9IGxhbmcgPT0gJ2hlJyB8fCBsYW5nID09ICdhcic7XG5cbiAgICAgICAgICAgIGdpZ3lhLl8ucGx1Z2lucy51dGlscy5jc3MuYWRkQ3NzKGRlZmF1bHRDc3MucmVzZXQsIGNzc1ByZWZpeCk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1J0bCkgZ2lneWEuXy5wbHVnaW5zLnV0aWxzLmNzcy5hZGRDc3MoZGVmYXVsdENzcy5yZXNldFJ0bCwgY3NzUHJlZml4KTtcblxuICAgICAgICAgICAgdmFyIGZpeGVkQ3NzID0gZ2lneWEucGx1Z2luVXRpbHMuY3NzLmZpeENzcyhkZWZhdWx0Q3NzLmdsb2JhbCk7XG4gICAgICAgICAgICB2YXIgZml4ZWRSdGxDc3MgPSBnaWd5YS5wbHVnaW5VdGlscy5jc3MuZml4Q3NzKGRlZmF1bHRDc3MucnRsKTtcblxuICAgICAgICAgICAgZ2lneWEuXy5wbHVnaW5zLnV0aWxzLmNzcy5hZGRDc3MoZml4ZWRDc3MsIGNzc1ByZWZpeCk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1J0bCkgZ2lneWEuXy5wbHVnaW5zLnV0aWxzLmNzcy5hZGRDc3MoZml4ZWRSdGxDc3MsIGNzc1ByZWZpeCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW9iaWxlVUkpIHtcbiAgICAgICAgICAgICAgICBnaWd5YS5fLnBsdWdpbnMudXRpbHMuY3NzLmFkZENzcyhkZWZhdWx0Q3NzLm1vYmlsZSwgY3NzUHJlZml4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2lneWEuXy5wbHVnaW5zLnV0aWxzLmNzcy5hZGRDc3MoZGVmYXVsdENzcy5ub25Nb2JpbGUsIGNzc1ByZWZpeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzTW9iaWxlICYmIGdpZ3lhLmxvY2FsSW5mby5pc1NhZmFyaSkge1xuICAgICAgICAgICAgICAgIGdpZ3lhLl8ucGx1Z2lucy51dGlscy5jc3MuYWRkQ3NzKCcuZ2lnLXRmYS1jb250YWluZXIgKiB7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0Om5vbmU7fScsIGNzc1ByZWZpeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFkZGVkQ3NzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc01vYmlsZVVJKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSAnZ2lnLXRmYS1jb250YWluZXInO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMudGVtcGxhdGVzWydjb250YWluZXInXSwge3dyYXBwZXJJZDogdGhpcy5jb250YWluZXIuaWQgKyAnX3dyYXBwZXInfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dQcm9ncmVzcygpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRQcm92aWRlciAmJiB0aGlzLnNlbGVjdGVkUHJvdmlkZXIuY29udGFpbmVyKSB7XG4gICAgICAgICAgICBnaWd5YS5nbG9iYWwuc2hvd0xvYWRlcih0aGlzLnNlbGVjdGVkUHJvdmlkZXIuY29udGFpbmVyLCAnZ2lnLXRmYS1wcm92aWRlci1sb2FkZXInKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlUHJvZ3Jlc3MoKSB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzRWwgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZ2lnLXRmYS1wcm92aWRlci1sb2FkZXInKTtcbiAgICAgICAgaWYgKHByb2dyZXNzRWwpXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlRWxlbWVudChwcm9ncmVzc0VsIGFzIEhUTUxFbGVtZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldE1vZGVCeVN0cmluZyhtb2RlOiBzdHJpbmcpOiBUZmFNb2RlIHtcbiAgICAgICAgZm9yICh2YXIgbW9kZUluZGV4IGluIFRmYU1vZGUpIHtcbiAgICAgICAgICAgIGlmIChUZmFNb2RlW21vZGVJbmRleF0gPT0gbW9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBUZmFNb2RlW1RmYU1vZGVbbW9kZUluZGV4XV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVByb3ZpZGVycyhjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLnNob3dQcm9ncmVzcygpO1xuICAgICAgICBnaWd5YS5hY2NvdW50cy50ZmEuZ2V0UHJvdmlkZXJzKHRoaXMucGFyYW1zLCB7XG4gICAgICAgICAgICBjYWxsYmFjazogKHJlc3BvbnNlOiBPYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVQcm9ncmVzcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVQcm92aWRlcnMgPSByZXNwb25zZVsnaW5hY3RpdmVQcm92aWRlcnMnXSB8fCBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVByb3ZpZGVycyA9IHJlc3BvbnNlWydhY3RpdmVQcm92aWRlcnMnXSB8fCBbXTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubW9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQcm92aWRlcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZSA9IFRmYU1vZGUucmVnaXN0ZXI7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGUgPSBUZmFNb2RlLnZlcmlmeTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXRUZmEocHJvdmlkZXI6IHN0cmluZywgbW9kZTogVGZhTW9kZSwgaW5pdENhbGxiYWNrOiAocmVzcG9uc2U6IE9iamVjdCkgPT4gdm9pZCA9ICgpID0+IHt9KSB7XG4gICAgICAgIGdpZ3lhLmFjY291bnRzLnRmYS5pbml0VEZBKHRoaXMucGFyYW1zLCB7XG4gICAgICAgICAgICBwcm92aWRlcjogcHJvdmlkZXIsXG4gICAgICAgICAgICBtb2RlOiBUZmFNb2RlW21vZGVdLFxuICAgICAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogT2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJhbXNbJ2dpZ3lhQXNzZXJ0aW9uJ10gPSByZXNwb25zZVsnZ2lneWFBc3NlcnRpb24nXTtcbiAgICAgICAgICAgICAgICBpbml0Q2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0UHJvdmlkZXJGbG93KHByb3ZpZGVyOiBJUHJvdmlkZXJJbmZvLCBtb2RlOiBUZmFNb2RlKSB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyQ29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLXByb3ZpZGVyLXdyYXBwZXInKVswXTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFByb3ZpZGVyID0gZ2V0VGZhUHJvdmlkZXJJbnN0YW5jZShwcm92aWRlci5uYW1lLCB0aGlzLCBwcm92aWRlckNvbnRhaW5lciwgdGhpcy5wYXJhbXMsIG1vZGUsIChyZXNwb25zZSwgcHJvdmlkZXJBc3NlcnRpb24sIGlzVGVtcCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblByb3ZpZGVyQ2FsbGJhY2socmVzcG9uc2UsIHByb3ZpZGVyQXNzZXJ0aW9uLCBpc1RlbXApO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFByb3ZpZGVyLnN0YXJ0Rmxvdyhwcm92aWRlci5jYXBhYmlsaXRpZXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd1Byb3ZpZGVyKHByb3ZpZGVyOiBJUHJvdmlkZXJJbmZvLCBtb2RlOiBUZmFNb2RlKSB7XG4gICAgICAgIC8vIHdoZW4gVGZhUHJvdmlkZXIgaXMgaW4gZWRpdCBtb2RlLCBpbml0VEZBIGluIGVkaXQgbW9kZSBpcyBkb25lIGZyb20gdGhlIFRmYVByb3ZpZGVyXG4gICAgICAgIHRoaXMuaW5pdFRmYShwcm92aWRlci5uYW1lLCBtb2RlID09IFRmYU1vZGUuZWRpdCA/IFRmYU1vZGUudmVyaWZ5IDogbW9kZSwgKHJlc3BvbnNlOiBPYmplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZVsnZXJyb3JDb2RlJ10gPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRQcm92aWRlckZsb3cocHJvdmlkZXIsIG1vZGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRG9uZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Qcm92aWRlckNhbGxiYWNrKHJlc3BvbnNlOiBPYmplY3QsIHByb3ZpZGVyQXNzZXJ0aW9uOiBzdHJpbmcsIGlzVGVtcDogYm9vbGVhbikge1xuICAgICAgICBpZiAocmVzcG9uc2VbJ2Vycm9yQ29kZSddID09IDApIHtcbiAgICAgICAgICAgIGdpZ3lhLmFjY291bnRzLnRmYS5maW5hbGl6ZVRGQSh0aGlzLnBhcmFtcywge1xuICAgICAgICAgICAgICAgIHByb3ZpZGVyQXNzZXJ0aW9uOiBwcm92aWRlckFzc2VydGlvbixcbiAgICAgICAgICAgICAgICB0ZW1wRGV2aWNlOiBpc1RlbXAsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRvbmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Eb25lKHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Eb25lKHJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBnaWd5YS5ldmVudHMuZGlzcGF0Y2hGb3JXaWRnZXQoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZXZlbnROYW1lOiAnZG9uZScsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd1NlbGVjdG9yKG1vZGU6IFRmYU1vZGUgPSB0aGlzLm1vZGUpIHtcbiAgICAgICAgbGV0IHN1cHBvcnRlZFByb3ZpZGVyczogQXJyYXk8SVByb3ZpZGVySW5mbz4gPSB0aGlzLmdldFN1cHBvcnRlZFByb3ZpZGVycyhtb2RlKTtcbiAgICAgICAgaWYgKCFzdXBwb3J0ZWRQcm92aWRlcnMgfHwgc3VwcG9ydGVkUHJvdmlkZXJzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzdXBwb3J0ZWRQcm92aWRlcnMgPSBzdXBwb3J0ZWRQcm92aWRlcnMubWFwKHByb3ZpZGVyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3ZpZGVyLCB7ZGlzcGxheU5hbWU6IEZyaWVuZGx5UHJvdmlkZXJOYW1lKHByb3ZpZGVyKX0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zaG93UHJvdmlkZXIoc3VwcG9ydGVkUHJvdmlkZXJzWzBdLCBtb2RlKTtcblxuICAgICAgICBpZiAoc3VwcG9ydGVkUHJvdmlkZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb3ZpZGVyU2VsZWN0b3Ioc3VwcG9ydGVkUHJvdmlkZXJzLCBtb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd1Byb3ZpZGVyU2VsZWN0b3IocHJvdmlkZXJzOiBBcnJheTxJUHJvdmlkZXJJbmZvPiwgbW9kZTogVGZhTW9kZSA9IHRoaXMubW9kZSkge1xuICAgICAgICBjb25zdCBzZWxlY3RDb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZ2lnLXRmYS1zZWxlY3QtcHJvdmlkZXInKTtcbiAgICAgICAgc2VsZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMudGVtcGxhdGVzWydzZWxlY3RQcm92aWRlciddLCB7XG4gICAgICAgICAgICBzZWxlY3RQcm92aWRlckhlYWRlcjogdGhpcy5nZXRUZXh0KCdzZWxlY3RfcHJvdmlkZXInKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLmdpZy10ZmEtc2VsZWN0Ym94Jyk7XG4gICAgICAgIHByb3ZpZGVyc1xuICAgICAgICAgICAgLm1hcChwcm92aWRlciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvdmlkZXIubmFtZTtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dCA9IHByb3ZpZGVyLmRpc3BsYXlOYW1lO1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZvckVhY2gob3B0aW9uID0+IHByb3ZpZGVyU2VsZWN0b3IuYWRkKG9wdGlvbikpO1xuICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihwcm92aWRlclNlbGVjdG9yLCAnY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9ncmVzcygpO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm92aWRlciA9IGUudGFyZ2V0Lm9wdGlvbnNbZS50YXJnZXQuc2VsZWN0ZWRJbmRleF07XG4gICAgICAgICAgICBjb25zdCBzdXBwb3J0ZWRQcm92aWRlcnMgPSB0aGlzLmdldFN1cHBvcnRlZFByb3ZpZGVycyhtb2RlKTtcbiAgICAgICAgICAgIGlmKCFzdXBwb3J0ZWRQcm92aWRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UHJvdmlkZXIoe25hbWU6IHNlbGVjdGVkUHJvdmlkZXIudmFsdWV9LCBtb2RlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNob3dQcm92aWRlcihnaWd5YS51dGlscy5hcnJheS5maXJzdChzdXBwb3J0ZWRQcm92aWRlcnMsIHAgPT4gcD8ubmFtZSA9PT0gc2VsZWN0ZWRQcm92aWRlci52YWx1ZSksIG1vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFN1cHBvcnRlZFByb3ZpZGVycyhtb2RlOiBUZmFNb2RlKSB7XG4gICAgICAgIHZhciBwcm92aWRlcnM6IEFycmF5PElQcm92aWRlckluZm8+ID0gdGhpcy5nZXRQcm92aWRlcnNGb3JNb2RlKG1vZGUpO1xuICAgICAgICBpZiAoIXByb3ZpZGVycyB8fCBwcm92aWRlcnMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvdmlkZXJzLmZpbHRlcihwID0+IGlzVGZhUHJvdmlkZXJTdXBwb3J0ZWQocC5uYW1lKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRQcm92aWRlcnNGb3JNb2RlKG1vZGU6IFRmYU1vZGUpOiBBcnJheTxJUHJvdmlkZXJJbmZvPiB7XG4gICAgICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgICAgICAgY2FzZSBUZmFNb2RlLnJlZ2lzdGVyOlxuICAgICAgICAgICAgY2FzZSBUZmFNb2RlLmFkZDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbmFjdGl2ZVByb3ZpZGVycztcbiAgICAgICAgICAgIGNhc2UgVGZhTW9kZS5lZGl0OlxuICAgICAgICAgICAgICAgIC8vc2luY2UgZW1haWxUZmEgaXMgbm90IGVkaXRhYmxlIGFuZCBwaG9uZVRmYSBpcywgSSBjYW4gaGF2ZSB0aG9zZSB0d28gcHJvdmlkZXJzXG4gICAgICAgICAgICAgICAgLy8gdG9nZXRoZXIgYW5kIHNvIEkgaGF2ZSB0byBvbmx5IHJldHVybiB0aGUgb25lIHdoaWNoIGlzIGVkaXRhYmxlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWRpdGFibGVQcm92aWRlcnMoKTtcbiAgICAgICAgICAgIGNhc2UgVGZhTW9kZS52ZXJpZnk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlUHJvdmlkZXJzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldEVkaXRhYmxlUHJvdmlkZXJzKCk6IElQcm92aWRlckluZm9bXSB7XG4gICAgICAgIHZhciBlZGl0YWJsZVByb3ZpZGVyczogSVByb3ZpZGVySW5mb1tdID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IHRoaXMuYWN0aXZlUHJvdmlkZXJzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlzRWRpdGFibGUgPSB0aGlzLmlzVGZhUHJvdmlkZXJFZGl0YWJsZSh0aGlzLmFjdGl2ZVByb3ZpZGVyc1tpXS5uYW1lKTtcbiAgICAgICAgICAgIGlmIChpc0VkaXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgZWRpdGFibGVQcm92aWRlcnMucHVzaCh0aGlzLmFjdGl2ZVByb3ZpZGVyc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVkaXRhYmxlUHJvdmlkZXJzO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNUZmFQcm92aWRlckVkaXRhYmxlKHByb3ZpZGVyVG9DaGVjayk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBnbyBvdmVyIHRoZSBsaXN0IG9mIGVkaXRhYmxlIHByb3ZpZGVyc1xuICAgICAgICByZXR1cm4gRWRpdGFibGVUZmFQcm92aWRlcnNUeXBlc1twcm92aWRlclRvQ2hlY2tdICE9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25BZnRlclNjcmVlbkxvYWQoc2NyZWVuOiBzdHJpbmcsIGNhcHRpb24/OiBzdHJpbmcpIHtcbiAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogJ2FmdGVyU2NyZWVuTG9hZCcsXG4gICAgICAgICAgICAgICAgc2NyZWVuLFxuICAgICAgICAgICAgICAgIGNhcHRpb24sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5wYXJhbXMsXG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgR2lneWFQaG9uZVByb3ZpZGVyIH0gZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVByb3ZpZGVycy9HaWd5YVBob25lUHJvdmlkZXInO1xuaW1wb3J0IHsgTGl2ZUxpbmtQaG9uZVByb3ZpZGVyIH0gZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVByb3ZpZGVycy9MaXZlTGlua1Bob25lUHJvdmlkZXInO1xuaW1wb3J0IHsgRW1haWxUZmFQcm92aWRlciB9IGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQcm92aWRlcnMvRW1haWxUZmFQcm92aWRlcic7XG5pbXBvcnQgeyBUb3RwVGZhUHJvdmlkZXIgfSBmcm9tICdzcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGZhUHJvdmlkZXJzL1RvdHBUZmFQcm92aWRlcic7XG5pbXBvcnQgeyBUZmFQbHVnaW4sIFRmYU1vZGUgfSBmcm9tICdzcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGZhUGx1Z2luJztcbmltcG9ydCB7IEJhc2VUZmFQcm92aWRlciB9IGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQcm92aWRlcnMvQmFzZVRmYVByb3ZpZGVyJztcbmltcG9ydCB7IFB1c2hUZmFQcm92aWRlciB9IGZyb20gXCIuL1RmYVByb3ZpZGVycy9QdXNoVGZhUHJvdmlkZXJcIjtcbmNvbnN0IHRmYVByb3ZpZGVycyA9IHtcbiAgICBnaWd5YVBob25lOiBHaWd5YVBob25lUHJvdmlkZXIsXG4gICAgbGl2ZWxpbms6IExpdmVMaW5rUGhvbmVQcm92aWRlcixcbiAgICBnaWd5YUVtYWlsOiBFbWFpbFRmYVByb3ZpZGVyLFxuICAgIGdpZ3lhVG90cDogVG90cFRmYVByb3ZpZGVyLFxuICAgIGdpZ3lhUHVzaDogUHVzaFRmYVByb3ZpZGVyXG59O1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRmYVByb3ZpZGVySW5zdGFuY2UoXG4gICAgcHJvdmlkZXJOYW1lOiBzdHJpbmcsXG4gICAgcGx1Z2luOiBUZmFQbHVnaW4sXG4gICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBwYXJhbXM6IE9iamVjdCxcbiAgICBtb2RlOiBUZmFNb2RlLFxuICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IE9iamVjdCwgcHJvdmlkZXJBc3NlcnRpb246IHN0cmluZywgdGVtcERldmljZTogYm9vbGVhbikgPT4gdm9pZCxcbik6IEJhc2VUZmFQcm92aWRlciB7XG4gICAgcmV0dXJuIHRmYVByb3ZpZGVyc1twcm92aWRlck5hbWVdID8gbmV3IHRmYVByb3ZpZGVyc1twcm92aWRlck5hbWVdKHBsdWdpbiwgY29udGFpbmVyLCBwYXJhbXMsIG1vZGUsIGNhbGxiYWNrKSA6IG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNUZmFQcm92aWRlclN1cHBvcnRlZChwcm92aWRlck5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0ZmFQcm92aWRlcnNbcHJvdmlkZXJOYW1lXSAhPSBudWxsO1xufVxuIiwiaW1wb3J0IHsgVGZhUGx1Z2luLCBUZmFNb2RlIH0gZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVBsdWdpbic7XG5pbXBvcnQge2dpZ3lhQXNzZXJ0aW9uRXhwaXJhdGlvbn0gZnJvbSBcInNyYy9hY2NvdW50cy9jb25zdGFudHNcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VUZmFQcm92aWRlciB7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBwbHVnaW46IFRmYVBsdWdpbixcbiAgICAgICAgcHVibGljIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgICAgIHB1YmxpYyBwYXJhbXM6IE9iamVjdCxcbiAgICAgICAgcHVibGljIG1vZGU6IFRmYU1vZGUsXG4gICAgICAgIHB1YmxpYyBjYWxsYmFjazogKHJlc3BvbnNlOiBPYmplY3QsIHByb3ZpZGVyQXNzZXJ0aW9uOiBzdHJpbmcsIHRlbXBEZXZpY2U6IGJvb2xlYW4pID0+IHZvaWQsXG4gICAgICAgIHByb3RlY3RlZCByZXN0YXJ0Rmxvd0ludGVydmFsID0gZ2lneWFBc3NlcnRpb25FeHBpcmF0aW9uXG4gICAgKSB7fVxuXG4gICAgcHVibGljIGFic3RyYWN0IHN0YXJ0RmxvdyhjYXBhYmlsaXRpZXM/OiBzdHJpbmdbXSk6IHZvaWQ7XG5cbiAgICBwcm90ZWN0ZWQgc2hvd0Vycm9yKGVycm9yOiBzdHJpbmcsIGVycm9yRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXSkge1xuICAgICAgICBsZXQgZXJyb3JDb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PignZGl2LmdpZy10ZmEtZXJyb3Iuc3VibWl0LWVycm9yJyk7XG5cbiAgICAgICAgaWYoIWVycm9yQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChnaWd5YS51dGlscy5ET00uY3JlYXRlRWxlbWVudEZyb21UZW1wbGF0ZSh0aGlzLnBsdWdpbi50ZW1wbGF0ZXNbJ2Vycm9yJ10pKTtcbiAgICAgICAgICAgIGVycm9yQ29udGFpbmVyID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oJ2Rpdi5naWctdGZhLWVycm9yJyk7XG4gICAgICAgIH1cbiAgICAgICAgZXJyb3JDb250YWluZXIuaW5uZXJIVE1MID0gZXJyb3I7XG4gICAgICAgIGVycm9yQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgncm9sZScsJ2FsZXJ0Jyk7XG4gICAgICAgIGVycm9yQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlcnJvckVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQ2xhc3NUb0VsZW1lbnQoZXJyb3JFbGVtZW50c1tpXSwgJ2dpZy10ZmEtaW5wdXQtZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBoaWRlRXJyb3IoZXJyb3JFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IFtdKSB7XG4gICAgICAgIGxldCBlcnJvckNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KCdkaXYuZ2lnLXRmYS1lcnJvci5zdWJtaXQtZXJyb3InKTtcblxuICAgICAgICBpZiAoZXJyb3JDb250YWluZXIpIHtcbiAgICAgICAgICAgIGVycm9yQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgZXJyb3JDb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICAgICAgICBlcnJvckNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVycm9yRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVDbGFzc0Zyb21FbGVtZW50KGVycm9yRWxlbWVudHNbaV0sICdnaWctdGZhLWlucHV0LWVycm9yJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2hvd1Byb2dyZXNzKCkge1xuICAgICAgICB0aGlzLnBsdWdpbi5zaG93UHJvZ3Jlc3MoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaGlkZVByb2dyZXNzKCkge1xuICAgICAgICB0aGlzLnBsdWdpbi5oaWRlUHJvZ3Jlc3MoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzSW5ET00oKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuY29udGFpbmVyICYmIHRoaXMuY29udGFpbmVyLnBhcmVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXIucGFyZW50RWxlbWVudC5pZCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0FjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzSW5hY3RpdmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNJbmFjdGl2ZSgpIHtcbiAgICAgICAgLy8gbm90IGluIERPTSBvciBub3QgdGhpcyBpbnN0YW5jZVxuICAgICAgICByZXR1cm4gIXRoaXMuaXNJbkRPTSgpIHx8XG4gICAgICAgICAgICAodGhpcy5wbHVnaW4uc2VsZWN0ZWRQcm92aWRlciAmJlxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNlbGVjdGVkUHJvdmlkZXIgIT09IHRoaXMpO1xuXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZVRmYVByb3ZpZGVyIH0gZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVByb3ZpZGVycy9CYXNlVGZhUHJvdmlkZXInO1xuaW1wb3J0IHsgVGZhUGx1Z2luLCBUZmFNb2RlIH0gZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVBsdWdpbic7XG5pbXBvcnQgeyBiaW5kRW50ZXJLZXkgfSBmcm9tIFwiLi4vaGVscGVycy9VdGlsc1wiO1xuaW1wb3J0IHtHU0Vycm9yc30gZnJvbSBcIi4uLy4uLy4uLy4uL2NvcmUvR2lneWEuSnMvYXBwL0dTRXJyb3JzXCI7XG5cbmludGVyZmFjZSBFbWFpbCB7XG4gICAgb2JmdXNjYXRlZD86IHN0cmluZztcbiAgICBpZD86IHN0cmluZztcbiAgICBsYXN0VmVyaWZpY2F0aW9uPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgRW1haWxSZXNwb25zZSB7XG4gICAgZW1haWxzOiBBcnJheTxFbWFpbD47XG59XG5cbmludGVyZmFjZSBDb21wbGV0ZVZlcmlmaWNhdGlvblJlc3BvbnNlIHtcbiAgICBwcm92aWRlckFzc2VydGlvbjogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgU2VuZFZlcmlmaWNhdGlvbkNvZGVSZXNwb25zZSB7XG4gICAgcGh2VG9rZW46IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEVtYWlsVGZhUHJvdmlkZXIgZXh0ZW5kcyBCYXNlVGZhUHJvdmlkZXIge1xuICAgIHByaXZhdGUgZW1haWxzOiBBcnJheTxFbWFpbD4gPSBbXTtcbiAgICBwcml2YXRlIHBodlRva2VuOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcGx1Z2luOiBUZmFQbHVnaW4sXG4gICAgICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgICAgIHBhcmFtczogT2JqZWN0LFxuICAgICAgICBtb2RlOiBUZmFNb2RlLFxuICAgICAgICBjYWxsYmFjazogKHJlc3BvbnNlOiBPYmplY3QsIHByb3ZpZGVyQXNzZXJ0aW9uOiBzdHJpbmcsIHRlbXBEZXZpY2U6IGJvb2xlYW4pID0+IHZvaWQsXG4gICAgICAgIHJlc3RhcnRGbG93SW50ZXJ2YWwgPSA2MCAqIDUgKiAxMDAwXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKHBsdWdpbiwgY29udGFpbmVyLCBwYXJhbXMsIG1vZGUsIGNhbGxiYWNrLCByZXN0YXJ0Rmxvd0ludGVydmFsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnRGbG93KGNhcGFiaWxpdGllcz86IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzKCk7XG4gICAgICAgIHRoaXMuZ2V0RW1haWxzKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVByb2dyZXNzKCk7XG4gICAgICAgICAgICB0aGlzLnNob3dFbWFpbFRmYVNjcmVlbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEVtYWlscyhjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgICAgICBnaWd5YS5hY2NvdW50cy50ZmEuZW1haWwuZ2V0RW1haWxzKHRoaXMucGFyYW1zLCB7XG4gICAgICAgICAgICBjYWxsYmFjazogKHJlc3BvbnNlOiBFbWFpbFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWFpbHMgPSByZXNwb25zZS5lbWFpbHM7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd0VtYWlsVGZhU2NyZWVuKCkge1xuICAgICAgICBpZiAodGhpcy5lbWFpbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gcmlnaHQgbm93LCBnZXRzIHRoZSBmaXJzdCBlbWFpbCBhcyB0aGUgdGFyZ2V0IGVtYWlsXG4gICAgICAgICAgICB2YXIgZW1haWwgPSB0aGlzLmVtYWlsc1swXTtcbiAgICAgICAgICAgIHRoaXMuc2VuZFZlcmlmaWNhdGlvbkNvZGVUb0VtYWlsKGVtYWlsKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0VudGVyQ29kZShlbWFpbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNlbmRWZXJpZmljYXRpb25Db2RlVG9FbWFpbChlbWFpbDogRW1haWwpIHtcbiAgICAgICAgdGhpcy5waHZUb2tlbiA9IG51bGw7XG4gICAgICAgIHZhciB2ZXJpZmljYXRpb25QYXJhbXMgPSB7XG4gICAgICAgICAgICBlbWFpbElEOiBlbWFpbC5pZCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IFNlbmRWZXJpZmljYXRpb25Db2RlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBodlRva2VuID0gcmVzcG9uc2UucGh2VG9rZW47XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIGdpZ3lhLmFjY291bnRzLnRmYS5lbWFpbC5zZW5kVmVyaWZpY2F0aW9uQ29kZSh7Li4udGhpcy5wYXJhbXMsIGxhbmc6IHRoaXMucGFyYW1zWydjb21tdW5pY2F0aW9uTGFuZyddfSwgdmVyaWZpY2F0aW9uUGFyYW1zKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dFbnRlckNvZGUoZW1haWw6IEVtYWlsKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMucGx1Z2luLnRlbXBsYXRlc1snZW1haWxFbnRlckNvZGUnXSwge1xuICAgICAgICAgICAgaWQ6IHRoaXMuY29udGFpbmVyLmlkLFxuICAgICAgICAgICAgaGVhZGVyVGV4dDogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnYV92ZXJpZmljYXRpb25fY29kZV9oYXNfYmVlbl9zZW50X3RvX2NvbG9uJyksXG4gICAgICAgICAgICBlbnRlcl9jb2RlOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdlbnRlcl9jb2RlX2NvbG9uJyksXG4gICAgICAgICAgICByZW1lbWJlcl90aGlzX2RldmljZTogdGhpcy5wbHVnaW4uaXNNb2JpbGVVSSA/IHRoaXMucGx1Z2luLmdldFRleHQoJ3JlbWVtYmVyX3RoaXNfZGV2aWNlJykgOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdyZW1lbWJlcl90aGlzX2NvbXB1dGVyJyksXG4gICAgICAgICAgICBzdWJtaXQ6IHRoaXMucGx1Z2luLmdldFRleHQoJ3N1Ym1pdCcpLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgc3VibWl0QnV0dG9uOiBIVE1MRWxlbWVudCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLWJ1dHRvbi1zdWJtaXQnKVswXTtcbiAgICAgICAgdmFyIHRiQ29kZSA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLWNvZGUtdGV4dGJveCcpWzBdIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIHZhciBjYlJlbWVtYmVyID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtY29kZS1yZW1lbWJlci1jaGVja2JveCcpWzBdIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIHZhciBlbWFpbFRleHQ6IEhUTUxFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtZW1haWwtdGV4dCcpWzBdO1xuICAgICAgICB2YXIgZGl2RXJyb3I6IEhUTUxFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtZXJyb3InKVswXTtcbiAgICAgICAgZW1haWxUZXh0LmlubmVyVGV4dCA9IGVtYWlsLm9iZnVzY2F0ZWQ7XG4gICAgICAgIHRiQ29kZS5mb2N1cygpO1xuICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihzdWJtaXRCdXR0b24sICdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VuZFRmYUNvZGUodGJDb2RlLCBjYlJlbWVtYmVyLmNoZWNrZWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgYmluZEVudGVyS2V5KHRoaXMuY29udGFpbmVyLCBzdWJtaXRCdXR0b24pO1xuXG4gICAgICAgIHRoaXMucGx1Z2luLm9uQWZ0ZXJTY3JlZW5Mb2FkKCd0ZmEtZW50ZXItY29kZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kVGZhQ29kZSh0YkNvZGU6IEhUTUxJbnB1dEVsZW1lbnQsIGlzQ2hlY2tlZDogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5waHZUb2tlbikge1xuICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uOiBIVE1MRWxlbWVudCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLWJ1dHRvbi1zdWJtaXQnKVswXTtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudChzdWJtaXRCdXR0b24sICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgZ2lneWEuYWNjb3VudHMudGZhLmVtYWlsLmNvbXBsZXRlVmVyaWZpY2F0aW9uKHRoaXMucGFyYW1zLCB7XG4gICAgICAgICAgICAgICAgcGh2VG9rZW46IHRoaXMucGh2VG9rZW4sXG4gICAgICAgICAgICAgICAgY29kZTogdGJDb2RlLnZhbHVlLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVsnZXJyb3JDb2RlJ10gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlRXJyb3IoW3RiQ29kZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkRvbmUocmVzcG9uc2UsIHJlc3BvbnNlLnByb3ZpZGVyQXNzZXJ0aW9uLCAhaXNDaGVja2VkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZVsnZXJyb3JDb2RlJ10gPT0gR1NFcnJvcnMuTElNSVRfUkVBQ0hFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3IodGhpcy5wbHVnaW4uZ2V0VGV4dCgnbGltaXRfcmVhY2hlZCcpLCBbdGJDb2RlXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvcih0aGlzLnBsdWdpbi5nZXRUZXh0KCdwbGVhc2VfZW50ZXJfYV92YWxpZF9jb2RlJyksIFt0YkNvZGVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVDbGFzc0Zyb21FbGVtZW50KHN1Ym1pdEJ1dHRvbiwgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRG9uZShyZXNwb25zZTogT2JqZWN0LCBwcm92aWRlckFzc2VydGlvbjogc3RyaW5nLCBpc1RlbXA6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjayhyZXNwb25zZSwgcHJvdmlkZXJBc3NlcnRpb24sIGlzVGVtcCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUGhvbmVUZmFQcm92aWRlciB9IGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQcm92aWRlcnMvUGhvbmVUZmFQcm92aWRlcic7XG5pbXBvcnQgeyBUZmFQbHVnaW4sIFRmYU1vZGUsIFZlcmlmaWNhdGlvbk1ldGhvZCB9IGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQbHVnaW4nO1xuXG5leHBvcnQgY2xhc3MgR2lneWFQaG9uZVByb3ZpZGVyIGV4dGVuZHMgUGhvbmVUZmFQcm92aWRlciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHBsdWdpbjogVGZhUGx1Z2luLFxuICAgICAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgICAgICBwYXJhbXM6IE9iamVjdCxcbiAgICAgICAgbW9kZTogVGZhTW9kZSxcbiAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogT2JqZWN0LCBwcm92aWRlckFzc2VydGlvbjogc3RyaW5nLCB0ZW1wRGV2aWNlOiBib29sZWFuKSA9PiB2b2lkLFxuICAgICkge1xuICAgICAgICBzdXBlcihwbHVnaW4sIGNvbnRhaW5lciwgcGFyYW1zLCBtb2RlLCBjYWxsYmFjayk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdnaWd5YVBob25lJztcbiAgICAgICAgdGhpcy5zdXBwb3J0ZWRTZW5kTWV0aG9kcyA9IFtWZXJpZmljYXRpb25NZXRob2QuU01TLCBWZXJpZmljYXRpb25NZXRob2QuVk9JQ0VdO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFBob25lVGZhUHJvdmlkZXIgfSBmcm9tICdzcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGZhUHJvdmlkZXJzL1Bob25lVGZhUHJvdmlkZXInO1xuaW1wb3J0IHsgVGZhUGx1Z2luLCBUZmFNb2RlLCBWZXJpZmljYXRpb25NZXRob2QgfSBmcm9tICdzcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGZhUGx1Z2luJztcblxuZXhwb3J0IGNsYXNzIExpdmVMaW5rUGhvbmVQcm92aWRlciBleHRlbmRzIFBob25lVGZhUHJvdmlkZXIge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwbHVnaW46IFRmYVBsdWdpbixcbiAgICAgICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICAgICAgcGFyYW1zOiBPYmplY3QsXG4gICAgICAgIG1vZGU6IFRmYU1vZGUsXG4gICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IE9iamVjdCwgcHJvdmlkZXJBc3NlcnRpb246IHN0cmluZywgdGVtcERldmljZTogYm9vbGVhbikgPT4gdm9pZCxcbiAgICApIHtcbiAgICAgICAgc3VwZXIocGx1Z2luLCBjb250YWluZXIsIHBhcmFtcywgbW9kZSwgY2FsbGJhY2spO1xuICAgICAgICB0aGlzLm5hbWUgPSAnbGl2ZWxpbmsnO1xuICAgICAgICB0aGlzLnN1cHBvcnRlZFNlbmRNZXRob2RzID0gW1ZlcmlmaWNhdGlvbk1ldGhvZC5TTVNdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVOdW1iZXJzKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZU51bWJlcnMoKCkgPT4ge1xuICAgICAgICAgICAgLy8gbGl2ZWxpbmsgc3VwcG9ydHMganVzdCBzbXNcbiAgICAgICAgICAgIHRoaXMucGhvbmVOdW1iZXJzLmZvckVhY2gocGhvbmUgPT4gKHBob25lLmxhc3RNZXRob2QgPSAnc21zJykpO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtCYXNlVGZhUHJvdmlkZXJ9IGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQcm92aWRlcnMvQmFzZVRmYVByb3ZpZGVyJztcbmltcG9ydCB7VGZhTW9kZSwgVGZhUGx1Z2luLCBWZXJpZmljYXRpb25NZXRob2R9IGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQbHVnaW4nO1xuaW1wb3J0IHtiaW5kRW50ZXJLZXksIGNyZWF0ZUFjdGlvbkludGVydmFsfSBmcm9tIFwiLi4vaGVscGVycy9VdGlsc1wiO1xuaW1wb3J0IHtHU0Vycm9yc30gZnJvbSBcIi4uLy4uLy4uLy4uL2NvcmUvR2lneWEuSnMvYXBwL0dTRXJyb3JzXCI7XG5pbXBvcnQge0ZsYWdTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29yZS9HaWd5YS5Kcy9hcHAvU2VydmljZXMvRmxhZ1NlcnZpY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQaG9uZU51bWJlciB7XG4gICAgb2JmdXNjYXRlZD86IHN0cmluZztcbiAgICBpZD86IHN0cmluZztcbiAgICBsYXN0TWV0aG9kPzogc3RyaW5nO1xuICAgIGxhc3RWZXJpZmljYXRpb24/OiBzdHJpbmc7XG4gICAgcGxhaW4/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBQaG9uZVRmYVByb3ZpZGVyIGV4dGVuZHMgQmFzZVRmYVByb3ZpZGVyIHtcbiAgICBwdWJsaWMgcGhvbmVOdW1iZXJzOiBQaG9uZU51bWJlcltdID0gW107XG4gICAgcHVibGljIHBodlRva2VuOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwaG9uZUlkVG9SZW1vdmU6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgc3VwcG9ydGVkU2VuZE1ldGhvZHM6IFZlcmlmaWNhdGlvbk1ldGhvZFtdID0gW107XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgICAgIHBsdWdpbjogVGZhUGx1Z2luLFxuICAgICAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgICAgICBwYXJhbXM6IE9iamVjdCxcbiAgICAgICAgbW9kZTogVGZhTW9kZSxcbiAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogT2JqZWN0LCBwcm92aWRlckFzc2VydGlvbjogc3RyaW5nLCB0ZW1wRGV2aWNlOiBib29sZWFuKSA9PiB2b2lkLFxuICAgICAgICByZXN0YXJ0Rmxvd0ludGVydmFsPzogbnVtYmVyXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKHBsdWdpbiwgY29udGFpbmVyLCBwYXJhbXMsIG1vZGUsIGNhbGxiYWNrLCByZXN0YXJ0Rmxvd0ludGVydmFsKVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydEZsb3coY2FwYWJpbGl0aWVzPzogc3RyaW5nW10pIHtcbiAgICAgICAgaWYgKGNhcGFiaWxpdGllcyAmJiBjYXBhYmlsaXRpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zdXBwb3J0ZWRTZW5kTWV0aG9kcyA9IGNhcGFiaWxpdGllc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgICAgICAgICAubWFwKGNhcCA9PiBjYXAudG9VcHBlckNhc2UoKSlcbiAgICAgICAgICAgICAgICAubWFwPFZlcmlmaWNhdGlvbk1ldGhvZD4oY2FwID0+IFZlcmlmaWNhdGlvbk1ldGhvZFtjYXBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3VwcG9ydGVkU2VuZE1ldGhvZHMgPSBbVmVyaWZpY2F0aW9uTWV0aG9kLlNNU107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZU51bWJlcnMoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvdyhtb2RlOiBUZmFNb2RlID0gdGhpcy5tb2RlKSB7XG4gICAgICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgICAgICAgY2FzZSBUZmFNb2RlLmVkaXQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RWRpdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUZmFNb2RlLmFkZDpcbiAgICAgICAgICAgIGNhc2UgVGZhTW9kZS5yZWdpc3RlcjpcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFbnRlclBob25lTnVtYmVyKG1vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUZmFNb2RlLnZlcmlmeTpcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dWZXJpZnkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd0VkaXQoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMucGx1Z2luLnRlbXBsYXRlc1sncGhvbmVFZGl0J10sIHtcbiAgICAgICAgICAgIGhlYWRlclRleHQ6IHRoaXMucGx1Z2luLmdldFRleHQoJ3BsZWFzZV9jaG9vc2VfYV9udW1iZXJfdG9fZWRpdF9jb2xvbicpLFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG51bWJlcnNDb250YWluZXI6IEhUTUxFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtcGhvbmUtZWRpdC1udW1iZXJzJylbMF07XG4gICAgICAgIHZhciBhclBob25lc0h0bWwgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBob25lTnVtYmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBob25lID0gdGhpcy5waG9uZU51bWJlcnNbaV07XG4gICAgICAgICAgICB2YXIgcGhvbmVIdG1sID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5wbHVnaW4udGVtcGxhdGVzWydwaG9uZUVkaXRFbnRyeSddLCB7XG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHBob25lLnBsYWluIHx8IHBob25lLm9iZnVzY2F0ZWQsXG4gICAgICAgICAgICAgICAgcGhvbmVJZDogcGhvbmUuaWQsXG4gICAgICAgICAgICAgICAgZWRpdDogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnZWRpdCcpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhclBob25lc0h0bWwucHVzaChwaG9uZUh0bWwpO1xuICAgICAgICB9XG4gICAgICAgIG51bWJlcnNDb250YWluZXIuaW5uZXJIVE1MID0gYXJQaG9uZXNIdG1sLmpvaW4oJycpO1xuXG4gICAgICAgIHZhciBvbkVkaXRDbGljayA9IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgIHZhciBlZGl0TGluayA9IChlLnNyY0VsZW1lbnQgfHwgZS5jdXJyZW50VGFyZ2V0IHx8IHRoaXMpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgdmFyIHBob25lID0gdGhpcy5nZXRQaG9uZUJ5SWQoZWRpdExpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLXBob25laWQnKSk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5pbml0VGZhKHRoaXMubmFtZSwgVGZhTW9kZS5lZGl0LCAocmVzcG9uc2U6IE9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVsnZXJyb3JDb2RlJ10gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU51bWJlcnMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VudGVyUGhvbmVOdW1iZXIoVGZhTW9kZS5lZGl0LCB0aGlzLmdldFBob25lQnlJZChwaG9uZS5pZCkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvcihyZXNwb25zZVsnZXJyb3JNZXNzYWdlJ10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBlZGl0TGlua3M6IEhUTUxFbGVtZW50W10gPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1waG9uZS1lZGl0LWxpbmsnKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlZGl0TGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJpbmRFbnRlcktleShlZGl0TGlua3NbaV0pO1xuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoZWRpdExpbmtzW2ldLCAnY2xpY2snLCBvbkVkaXRDbGljayk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBsdWdpbi5vbkFmdGVyU2NyZWVuTG9hZCgndGZhLWVkaXQnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFBob25lQnlJZChwaG9uZUlkOiBzdHJpbmcpOiBQaG9uZU51bWJlciB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5waG9uZU51bWJlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBob25lTnVtYmVyc1tpXS5pZCA9PSBwaG9uZUlkKSByZXR1cm4gdGhpcy5waG9uZU51bWJlcnNbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dFbnRlclBob25lTnVtYmVyKG1vZGU6IFRmYU1vZGUgPSBUZmFNb2RlLnJlZ2lzdGVyLCBwaG9uZT86IFBob25lTnVtYmVyKSB7XG4gICAgICAgIGxldCBoVGV4dCA9IHRoaXMucGx1Z2luLmdldFRleHQoJ3RvX2tlZXBfeW91cl9hY2NvdW50X3NlY3VyZV92ZXJpZmljYXRpb25fY29kZXNfd2lsbF9iZV9zZW50X3doZW5feW91X2xvZ2luX2Zyb21fdW50cnVzdGVkX2RldmljZXNfZG90Jyk7XG4gICAgICAgIGlmIChtb2RlID09IFRmYU1vZGUuZWRpdCkge1xuICAgICAgICAgICAgaFRleHQgPSB0aGlzLnBsdWdpbi5nZXRUZXh0KCdlZGl0X3lvdXJfcGhvbmVfbnVtYmVyX3doZXJlX3ZlcmlmaWNhdGlvbl9jb2Rlc193aWxsX2JlX3JlY2VpdmVkX2NvbG9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLnBsdWdpbi50ZW1wbGF0ZXNbJ3Bob25lUmVnaXN0ZXInXSwge1xuICAgICAgICAgICAgaWQ6IHRoaXMuY29udGFpbmVyLmlkLFxuICAgICAgICAgICAgaGVhZGVyVGV4dDogaFRleHQsXG4gICAgICAgICAgICBzZWxlY3RfeW91cl9jb3VudHJ5OiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdzZWxlY3RfeW91cl9jb3VudHJ5X2NvbG9uJyksXG4gICAgICAgICAgICBlbnRlcl95b3VyX3Bob25lX251bWJlcjogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnZW50ZXJfeW91cl9waG9uZV9udW1iZXJfY29sb24nKSxcbiAgICAgICAgICAgIGdldF9jb2RlX2J5OiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdnZXRfY29kZV9ieV9jb2xvbicpLFxuICAgICAgICAgICAgdGV4dF9tZXNzYWdlOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCd0ZXh0X21lc3NhZ2UnKSxcbiAgICAgICAgICAgIHZvaWNlX2NhbGw6IHRoaXMucGx1Z2luLmdldFRleHQoJ3ZvaWNlX2NhbGwnKSxcbiAgICAgICAgICAgIHNlbmQ6IHRoaXMucGx1Z2luLmdldFRleHQoJ2dldF90aGVfY29kZScpLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldEFyZWFDb2Rlc1RyYW5zbGF0aW9uKCk7XG4gICAgICAgIHRoaXMuc2hvd1ZlcmlmaWNhdGlvbk1ldGhvZHMoKTtcbiAgICAgICAgY29uc3QgbmV4dEJ1dHRvbjogSFRNTEVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1idXR0b24tbmV4dCcpWzBdO1xuICAgICAgICBjb25zdCBwcmVmaXhTZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtcGhvbmUtcmVnaXN0ZXItc2VsZWN0JylbMF0gYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHRiUGhvbmVQcmVmaXg6IEhUTUxJbnB1dEVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1waG9uZS1wcmVmaXgnKVswXSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBjb25zdCB0YlBob25lTnVtYmVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtcGhvbmUtbnVtYmVyJylbMF0gYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgY29uc3QgdHlwZXNSYWRpb3M6IEhUTUxJbnB1dEVsZW1lbnRbXSA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLXBob25lLXJlZ2lzdGVyLXR5cGUtcmFkaW8nKSBhcyBIVE1MSW5wdXRFbGVtZW50W107XG4gICAgICAgIGNvbnN0IGNvdW50cnlFcnJvckRpdjogSFRNTERpdkVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnY291bnRyeV9lcnInKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgY29uc3QgcGhvbmVFcnJvckRpdjogSFRNTERpdkVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAncGhvbmVfZXJyJylbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkRXJyb3JUeHQgPSB0aGlzLnBsdWdpbi5nZXRUZXh0KCd0aGlzX2ZpZWxkX2lzX3JlcXVpcmVkJyk7XG5cbiAgICAgICAgLy8gcHJlLXBvcHVsYXRlXG4gICAgICAgIGlmIChwaG9uZSAmJiBwaG9uZS5wbGFpbikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVmaXhTZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHByZWZpeFNlbGVjdC5vcHRpb25zW2ldIGFzIEhUTUxPcHRpb25FbGVtZW50O1xuICAgICAgICAgICAgICAgIGlmIChwaG9uZS5wbGFpbi5pbmRleE9mKG9wdGlvbi52YWx1ZSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4U2VsZWN0LnNlbGVjdGVkSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICB0YlBob25lUHJlZml4LnZhbHVlID0gb3B0aW9uLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0YlBob25lTnVtYmVyLnZhbHVlID0gcGhvbmUucGxhaW4uc3Vic3RyKG9wdGlvbi52YWx1ZS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihwcmVmaXhTZWxlY3QsICdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGVFcnJvcigpO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcmVmaXggPSBwcmVmaXhTZWxlY3Qub3B0aW9uc1twcmVmaXhTZWxlY3Quc2VsZWN0ZWRJbmRleF0gYXMgSFRNTE9wdGlvbkVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRQcmVmaXgpIHtcbiAgICAgICAgICAgICAgICB0YlBob25lUHJlZml4LnZhbHVlID0gc2VsZWN0ZWRQcmVmaXgudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoY291bnRyeUVycm9yRGl2KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFByZWZpeC52YWx1ZSA9PSAnMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3IoY291bnRyeUVycm9yRGl2LHJlcXVpcmVkRXJyb3JUeHQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bnNldEVycm9yKGNvdW50cnlFcnJvckRpdik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHRiUGhvbmVOdW1iZXIsICdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGVFcnJvcigpO1xuICAgICAgICAgICAgaWYgKHBob25lRXJyb3JEaXYpIHtcbiAgICAgICAgICAgICAgICBpZiAodGJQaG9uZU51bWJlci52YWx1ZSAmJiBwaG9uZUVycm9yRGl2LmlubmVyVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc2V0RXJyb3IocGhvbmVFcnJvckRpdik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghdGJQaG9uZU51bWJlci52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVycm9yKHBob25lRXJyb3JEaXYscmVxdWlyZWRFcnJvclR4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBiaW5kRW50ZXJLZXkobmV4dEJ1dHRvbik7XG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKG5leHRCdXR0b24sICdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBtZXRob2Q6IHN0cmluZztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHlwZXNSYWRpb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZXNSYWRpb3NbaV0uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSB0eXBlc1JhZGlvc1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRiUGhvbmVQcmVmaXgudmFsdWUgPT0gJzAnIHx8ICF0YlBob25lUHJlZml4LnZhbHVlIHx8ICF0YlBob25lTnVtYmVyLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCghdGJQaG9uZVByZWZpeC52YWx1ZSB8fCAhdGJQaG9uZVByZWZpeC52YWx1ZSkgJiYgY291bnRyeUVycm9yRGl2KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXJyb3IoY291bnRyeUVycm9yRGl2LCByZXF1aXJlZEVycm9yVHh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF0YlBob25lTnVtYmVyLnZhbHVlICYmIHBob25lRXJyb3JEaXYpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvcihwaG9uZUVycm9yRGl2LHJlcXVpcmVkRXJyb3JUeHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgbGV0IHBob25lTnVtVmFsdWUgPSB0YlBob25lUHJlZml4LnZhbHVlO1xuICAgICAgICAgICAgLy8gVGhlIFRGQSB3aWRnZXQgc2hvdWxkIE5PVCB0cmltIHRoZSBsZWFkaW5nIHplcm8gd2hlbiB0aGUgc2VsZWN0ZWQgY291bnRyeSBwcmVmaXggaXMgSXRhbHkgKCszOSlcbiAgICAgICAgICAgIGlmICh0YlBob25lUHJlZml4LnZhbHVlICE9ICczOScpIHtcbiAgICAgICAgICAgICAgICBwaG9uZU51bVZhbHVlICs9IHRiUGhvbmVOdW1iZXIudmFsdWUucmVwbGFjZSgvXjArLywgJycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwaG9uZU51bVZhbHVlICs9IHRiUGhvbmVOdW1iZXIudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlID09IFRmYU1vZGUuZWRpdCAmJiBwaG9uZS5pZCkgdGhpcy5waG9uZUlkVG9SZW1vdmUgPSBwaG9uZS5pZDtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Bob25lOiBQaG9uZU51bWJlciA9IHtwbGFpbjogcGhvbmVOdW1WYWx1ZX07XG4gICAgICAgICAgICB0aGlzLnNlbmRWZXJpZmljYXRpb25Db2RlVG9QaG9uZShuZXdQaG9uZSwgbW9kZSwgbWV0aG9kKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGdpZ3lhLnBsdWdpblV0aWxzLkRPTS5zZXRUZXh0Ym94U3VibWl0QnV0dG9uKHRiUGhvbmVOdW1iZXIsIG5leHRCdXR0b24pO1xuXG4gICAgICAgIGNyZWF0ZUFjdGlvbkludGVydmFsKHRoaXMsIGFzeW5jIChjb3VudDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoY291bnQgPiAxICYmIHRiUGhvbmVOdW1iZXIgJiYgdGJQaG9uZU51bWJlci5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uaW5pdFRmYSh0aGlzLm5hbWUsIG1vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzLnJlc3RhcnRGbG93SW50ZXJ2YWwsICgpID0+ICF0YlBob25lTnVtYmVyIHx8ICF0YlBob25lTnVtYmVyLnBhcmVudEVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMucGx1Z2luLm9uQWZ0ZXJTY3JlZW5Mb2FkKCd0ZmEtZW50ZXItcGhvbmUtbnVtYmVyJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldEVycm9yKGVsZW0sIG1lc3NhZ2Upe1xuICAgICAgICBpZighZWxlbSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGVsZW0uaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdyb2xlJywgJ2FsZXJ0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdW5zZXRFcnJvcihlbGVtKXtcbiAgICAgICAgaWYoIWVsZW0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBlbGVtLmlubmVyVGV4dCA9ICcnO1xuICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldExhc3RQaG9uZSgpOiBQaG9uZU51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBob25lTnVtYmVyc1t0aGlzLnBob25lTnVtYmVycy5sZW5ndGggLSAxXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd1ZlcmlmeSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGhvbmVOdW1iZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBwaG9uZSA9IHRoaXMuZ2V0TGFzdFBob25lKCk7XG4gICAgICAgICAgICB0aGlzLnNlbmRWZXJpZmljYXRpb25Db2RlVG9QaG9uZShwaG9uZSwgVGZhTW9kZS52ZXJpZnksIHBob25lLmxhc3RNZXRob2QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93RW50ZXJDb2RlKHBob25lOiBQaG9uZU51bWJlciwgbW9kZTogVGZhTW9kZSwgbWV0aG9kOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5wbHVnaW4udGVtcGxhdGVzWydwaG9uZUVudGVyQ29kZSddLCB7XG4gICAgICAgICAgICBpZDogdGhpcy5jb250YWluZXIuaWQsXG4gICAgICAgICAgICBoZWFkZXJUZXh0OlxuICAgICAgICAgICAgICAgIG1ldGhvZCA9PSAnc21zJ1xuICAgICAgICAgICAgICAgICAgICA/IHRoaXMucGx1Z2luLmdldFRleHQoJ2FfdmVyaWZpY2F0aW9uX2NvZGVfaGFzX2JlZW5fc2VudF90b195b3VyX3Bob25lX251bWJlcl9jb2xvbicpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnYV9waG9uZV9jYWxsX3dpdGhfeW91cl92ZXJpZmljYXRpb25fY29kZV9oYXNfYmVlbl9wbGFjZWRfdG9fY29sb24nKSxcbiAgICAgICAgICAgIHJlc2VuZDogbW9kZSA9PSBUZmFNb2RlLnZlcmlmeSA/IHRoaXMucGx1Z2luLmdldFRleHQoXCJkaWRuJ3RfZ2V0X3RoZV9jb2RlX3FtXCIpIDogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnY2hhbmdlX3Jlc2VuZCcpLFxuICAgICAgICAgICAgZW50ZXJfY29kZTogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnZW50ZXJfY29kZV9jb2xvbicpLFxuICAgICAgICAgICAgcmVtZW1iZXJfdGhpc19kZXZpY2U6IHRoaXMucGx1Z2luLmlzTW9iaWxlVUkgPyB0aGlzLnBsdWdpbi5nZXRUZXh0KCdyZW1lbWJlcl90aGlzX2RldmljZScpIDogdGhpcy5wbHVnaW4uZ2V0VGV4dCgncmVtZW1iZXJfdGhpc19jb21wdXRlcicpLFxuICAgICAgICAgICAgc3VibWl0OiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdzdWJtaXQnKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHN1Ym1pdEJ1dHRvbjogSFRNTEVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1idXR0b24tc3VibWl0JylbMF07XG4gICAgICAgIHZhciByZXNlbmRMaW5rOiBIVE1MRWxlbWVudCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLXBob25lLWNvZGUtcmVzZW5kJylbMF07XG4gICAgICAgIHZhciB0YkNvZGU6IEhUTUxJbnB1dEVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1jb2RlLXRleHRib3gnKVswXSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICB2YXIgY2JSZW1lbWJlcjogSFRNTElucHV0RWxlbWVudCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLWNvZGUtcmVtZW1iZXItY2hlY2tib3gnKVswXSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICB2YXIgcGhvbmVudW1iZXI6IEhUTUxFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtcGhvbmUtY29kZS1waG9uZW51bWJlcicpWzBdO1xuICAgICAgICB2YXIgZGl2RXJyb3I6IEhUTUxFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtZXJyb3InKVswXTtcbiAgICAgICAgcGhvbmVudW1iZXIuaW5uZXJIVE1MID0gcGhvbmUucGxhaW4gfHwgcGhvbmUub2JmdXNjYXRlZDtcblxuICAgICAgICBiaW5kRW50ZXJLZXkodGJDb2RlLCBzdWJtaXRCdXR0b24pO1xuICAgICAgICBiaW5kRW50ZXJLZXkoY2JSZW1lbWJlciwgc3VibWl0QnV0dG9uKTtcbiAgICAgICAgYmluZEVudGVyS2V5KHN1Ym1pdEJ1dHRvbik7XG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHN1Ym1pdEJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZW5kVGZhQ29kZSh0YkNvZGUsIGNiUmVtZW1iZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBiaW5kRW50ZXJLZXkocmVzZW5kTGluayk7XG4gICAgICAgIGNvbnN0IHJlc2VuZEFjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLmluaXRUZmEodGhpcy5uYW1lLCBtb2RlLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGUgPT0gVGZhTW9kZS5yZWdpc3RlciB8fCBtb2RlID09IFRmYU1vZGUuYWRkIHx8IG1vZGUgPT0gVGZhTW9kZS5lZGl0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VudGVyUGhvbmVOdW1iZXIobW9kZSwgcGhvbmUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Jlc2VuZChtb2RlLCBwaG9uZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVzZW5kVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRiQ29kZSAmJiB0YkNvZGUucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJlc2VuZEFjdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzLnJlc3RhcnRGbG93SW50ZXJ2YWwpO1xuXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHJlc2VuZExpbmssICdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHJlc2VuZEFjdGlvbigpO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2VuZFRpbWVvdXQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBsdWdpbi5vbkFmdGVyU2NyZWVuTG9hZCgndGZhLWVudGVyLWNvZGUnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VuZFRmYUNvZGUodGJDb2RlOiBIVE1MSW5wdXRFbGVtZW50LCBjYlJlbWVtYmVyOiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnBodlRva2VuKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJtaXRCdXR0b246IEhUTUxFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtYnV0dG9uLXN1Ym1pdCcpWzBdO1xuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KHN1Ym1pdEJ1dHRvbiwgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlVmVyaWZpY2F0aW9uKHRoaXMucGh2VG9rZW4sIHRiQ29kZS52YWx1ZSwgKHJlc3BvbnNlOiBPYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbJ2Vycm9yQ29kZSddID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlRXJyb3IoW3RiQ29kZV0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRG9uZShyZXNwb25zZSwgcmVzcG9uc2VbJ3Byb3ZpZGVyQXNzZXJ0aW9uJ10sICFjYlJlbWVtYmVyLmNoZWNrZWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2VbJ2Vycm9yQ29kZSddID09IEdTRXJyb3JzLkxJTUlUX1JFQUNIRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3IodGhpcy5wbHVnaW4uZ2V0VGV4dCgnbGltaXRfcmVhY2hlZCcpLCBbdGJDb2RlXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3IodGhpcy5wbHVnaW4uZ2V0VGV4dCgncGxlYXNlX2VudGVyX2FfdmFsaWRfY29kZScpLCBbdGJDb2RlXSk7XG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVDbGFzc0Zyb21FbGVtZW50KHN1Ym1pdEJ1dHRvbiwgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dSZXNlbmQobW9kZTogVGZhTW9kZSwgcGhvbmU6IFBob25lTnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlclRleHQgPSB0aGlzLnN1cHBvcnRlZFNlbmRNZXRob2RzLmxlbmd0aCA+PSAyID8gdGhpcy5wbHVnaW4uZ2V0VGV4dCgnY2hvb3NlX2hvd190b19yZWNlaXZlX3RoZV92ZXJpZmljYXRpb25fY29kZV9jb2xvbicpIDogJyc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMucGx1Z2luLnRlbXBsYXRlc1sncGhvbmVSZXNlbmQnXSwge1xuICAgICAgICAgICAgaWQ6IHRoaXMuY29udGFpbmVyLmlkLFxuICAgICAgICAgICAgaGVhZGVyVGV4dCxcbiAgICAgICAgICAgIGdldF9jb2RlX2J5OiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdnZXRfY29kZV9ieV9jb2xvbicpLFxuICAgICAgICAgICAgdGV4dF9tZXNzYWdlOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCd0ZXh0X21lc3NhZ2UnKSxcbiAgICAgICAgICAgIHZvaWNlX2NhbGw6IHRoaXMucGx1Z2luLmdldFRleHQoJ3ZvaWNlX2NhbGwnKSxcbiAgICAgICAgICAgIHNlbmQ6IHRoaXMucGx1Z2luLmdldFRleHQoJ2dldF90aGVfY29kZScpLFxuICAgICAgICAgICAgeW91cl9waG9uZV9udW1iZXI6IHRoaXMucGx1Z2luLmdldFRleHQoJ3lvdXJfcGhvbmVfbnVtYmVyX2NvbG9uJyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2hvd1ZlcmlmaWNhdGlvbk1ldGhvZHMoKTtcbiAgICAgICAgdmFyIHNlbmRCdXR0b246IEhUTUxFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtYnV0dG9uLXNlbmQnKVswXTtcbiAgICAgICAgdmFyIGRpdlBob25lTnVtYmVyOiBIVE1MRWxlbWVudCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLXBob25lLXJlc2VuZC15b3VycGhvbmUnKVswXTtcbiAgICAgICAgdmFyIHR5cGVzUmFkaW9zOiBIVE1MSW5wdXRFbGVtZW50W10gPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1waG9uZS1yZXNlbmQtdHlwZS1yYWRpbycpIGFzIEhUTUxJbnB1dEVsZW1lbnRbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVzUmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZXNSYWRpb3NbaV0udmFsdWUgPT0gcGhvbmUubGFzdE1ldGhvZCkge1xuICAgICAgICAgICAgICAgIHR5cGVzUmFkaW9zW2ldLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGl2UGhvbmVOdW1iZXIuaW5uZXJIVE1MID0gcGhvbmUucGxhaW4gfHwgcGhvbmUub2JmdXNjYXRlZDtcblxuICAgICAgICBiaW5kRW50ZXJLZXkodGhpcy5jb250YWluZXIsIHNlbmRCdXR0b24pO1xuICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihzZW5kQnV0dG9uLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgbWV0aG9kOiBzdHJpbmc7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVzUmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVzUmFkaW9zW2ldLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gdHlwZXNSYWRpb3NbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2VuZFZlcmlmaWNhdGlvbkNvZGVUb1Bob25lKHBob25lLCBtb2RlLCBtZXRob2QpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy9naWctdGZhLXBob25lLXJlc2VuZC15b3VycGhvbmVcbiAgICAgICAgdGhpcy5wbHVnaW4ub25BZnRlclNjcmVlbkxvYWQoJ3RmYS1yZXNlbmQnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dWZXJpZmljYXRpb25NZXRob2RzKCkge1xuICAgICAgICB2YXIgdmVyaWZpY2F0aW9uTWV0aG9kU2VjdGlvbiA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLXZlcmlmaWNhdGlvbi1tZXRob2QnKSBhcyBBcnJheTxIVE1MSW5wdXRFbGVtZW50PjtcbiAgICAgICAgaWYgKHZlcmlmaWNhdGlvbk1ldGhvZFNlY3Rpb24ubGVuZ3RoICYmIHZlcmlmaWNhdGlvbk1ldGhvZFNlY3Rpb25bMF0uc3R5bGUgJiYgdGhpcy5zdXBwb3J0ZWRTZW5kTWV0aG9kcy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgdmVyaWZpY2F0aW9uTWV0aG9kU2VjdGlvblswXS5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgYnV0dG9uQ29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLWJ1dHRvbi1jb250YWluZXInKVswXTtcbiAgICAgICAgICAgIGlmIChidXR0b25Db250YWluZXIgJiYgYnV0dG9uQ29udGFpbmVyLnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLnN0eWxlLm1hcmdpblRvcCA9ICcyMHB4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVOdW1iZXJzKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT0gVGZhTW9kZS5hZGQgfHwgdGhpcy5tb2RlID09IFRmYU1vZGUuZWRpdCB8fCB0aGlzLm1vZGUgPT0gVGZhTW9kZS52ZXJpZnkpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzKCk7XG4gICAgICAgICAgICBnaWd5YS5hY2NvdW50cy50ZmEucGhvbmUuZ2V0UmVnaXN0ZXJlZFBob25lTnVtYmVycyh0aGlzLnBhcmFtcywge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IE9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVQcm9ncmVzcygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBob25lTnVtYmVycyA9IHJlc3BvbnNlWydwaG9uZXMnXTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNlbmRWZXJpZmljYXRpb25Db2RlVG9QaG9uZShwaG9uZTogUGhvbmVOdW1iZXIsIG1vZGU6IFRmYU1vZGUsIG1ldGhvZDogc3RyaW5nKSB7XG4gICAgICAgIGlmICghcGhvbmUucGxhaW4gJiYgIXBob25lLm9iZnVzY2F0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmVyaWZpY2F0aW9uUGFyYW1zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QgfHwgJ3NtcycsXG4gICAgICAgICAgICBjYWxsYmFjazogKHJlc3BvbnNlOiB7IGVycm9yQ29kZTogR1NFcnJvcnMsIGVycm9yTWVzc2FnZTogc3RyaW5nLCBlcnJvckRldGFpbHM6IHN0cmluZywgcGh2VG9rZW46IHN0cmluZyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXNwb25zZS5lcnJvckNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBHU0Vycm9ycy5PSzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGh2VG9rZW4gPSByZXNwb25zZS5waHZUb2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VudGVyQ29kZShwaG9uZSwgbW9kZSwgbWV0aG9kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEdTRXJyb3JzLkV4dGVuc2lvbl9Qb2ludF9DdXN0b21fRXJyb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvcihyZXNwb25zZS5lcnJvckRldGFpbHMgfHwgcmVzcG9uc2UuZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3IodGhpcy5wbHVnaW4uZ2V0VGV4dCgnYW5fZXJyb3JfaGFzX29jY3VycmVkX3BsZWFzZV90cnlfYWdhaW5fbGF0ZXInKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChwaG9uZS5pZCkge1xuICAgICAgICAgICAgdmVyaWZpY2F0aW9uUGFyYW1zWydwaG9uZUlEJ10gPSBwaG9uZS5pZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZlcmlmaWNhdGlvblBhcmFtc1sncGhvbmUnXSA9IHBob25lLnBsYWluO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5waHZUb2tlbiA9IG51bGw7XG4gICAgICAgIGdpZ3lhLmFjY291bnRzLnRmYS5waG9uZS5zZW5kVmVyaWZpY2F0aW9uQ29kZSh7XG4gICAgICAgICAgICAuLi50aGlzLnBhcmFtcyxcbiAgICAgICAgICAgIGxhbmc6IHRoaXMucGFyYW1zWydjb21tdW5pY2F0aW9uTGFuZyddXG4gICAgICAgIH0sIHZlcmlmaWNhdGlvblBhcmFtcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBsZXRlVmVyaWZpY2F0aW9uKHBodlRva2VuOiBzdHJpbmcsIGNvZGU6IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogT2JqZWN0KSA9PiB2b2lkKSB7XG4gICAgICAgIGdpZ3lhLmFjY291bnRzLnRmYS5waG9uZS5jb21wbGV0ZVZlcmlmaWNhdGlvbih0aGlzLnBhcmFtcywge1xuICAgICAgICAgICAgcGh2VG9rZW46IHBodlRva2VuLFxuICAgICAgICAgICAgY29kZTogY29kZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRvbmUocmVzcG9uc2U6IE9iamVjdCwgcHJvdmlkZXJBc3NlcnRpb246IHN0cmluZywgaXNUZW1wOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLnBob25lSWRUb1JlbW92ZSkge1xuICAgICAgICAgICAgZ2lneWEuYWNjb3VudHMudGZhLnBob25lLnJlbW92ZVBob25lKHRoaXMucGFyYW1zLCB7XG4gICAgICAgICAgICAgICAgcGhvbmVJZDogdGhpcy5waG9uZUlkVG9SZW1vdmUsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhyZXNwb25zZSwgcHJvdmlkZXJBc3NlcnRpb24sIGlzVGVtcCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhyZXNwb25zZSwgcHJvdmlkZXJBc3NlcnRpb24sIGlzVGVtcCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEFyZWFDb2Rlc1RyYW5zbGF0aW9uKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gQXJyYXkuZnJvbSh0aGlzLmNvbnRhaW5lcj8ucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk/Lm9wdGlvbnMgfHwgW10pIHx8IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoIUZsYWdTZXJ2aWNlLmZpeFBob25lVEZBVHJhbnNsYXRpb25zICYmIG9wdGlvbi52YWx1ZSA9PT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gJy0gU2VsZWN0IC0nO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9uLmlubmVySFRNTCA9IHRoaXMucGx1Z2luLmdldFRleHQob3B0aW9uPy5pbm5lckhUTUw/LnJlcGxhY2UoJyQnLCAnJykpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZVRmYVByb3ZpZGVyIH0gZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVByb3ZpZGVycy9CYXNlVGZhUHJvdmlkZXInO1xuaW1wb3J0IHsgVGZhUGx1Z2luLCBUZmFNb2RlIH0gZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVBsdWdpbic7XG5pbXBvcnQgeyBHU0Vycm9ycyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9HU0Vycm9ycyc7XG5pbXBvcnQgeyBCYWNrdXBDb2Rlc01hbmFnZXIsIElCYWNrdXBDb2Rlc01hbmFnZXIgfSBmcm9tIFwiLi4vaGVscGVycy9CYWNrdXBDb2Rlc01hbmFnZXJcIjtcbmltcG9ydCB7IGJpbmRFbnRlcktleSwgY3JlYXRlQWN0aW9uSW50ZXJ2YWwsIGdldEVsZW1lbnRCeUNsYXNzTmFtZSB9IGZyb20gXCIuLi9oZWxwZXJzL1V0aWxzXCI7XG5pbXBvcnQge0ZsYWdTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29yZS9HaWd5YS5Kcy9hcHAvU2VydmljZXMvRmxhZ1NlcnZpY2VcIjtcblxuZXhwb3J0IHR5cGUgVGZhUHJvdmlkZXJDYWxsYmFjayA9IChyZXNwb25zZTogT2JqZWN0LCBwcm92aWRlckFzc2VydGlvbjogc3RyaW5nLCB0ZW1wRGV2aWNlOiBib29sZWFuKSA9PiB2b2lkO1xuXG5jb25zdCBQb2xsaW5nTGltaXRNaWxsaXMgPSAxMDAwICogNjAgKiAyOyAvLyAyIG1pblxuY29uc3QgUG9sbGluZ0ludGVydmFsTWlsbGlzID0gMTAwMCAqIDM7IC8vIDMgc2VjXG5cbmV4cG9ydCBjbGFzcyBQdXNoVGZhUHJvdmlkZXIgZXh0ZW5kcyBCYXNlVGZhUHJvdmlkZXIge1xuXG4gICAgcHJpdmF0ZSBfcG9sbGluZ1N0YXJ0VGltZSA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcGx1Z2luOiBUZmFQbHVnaW4sXG4gICAgICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgICAgIHBhcmFtczogT2JqZWN0LFxuICAgICAgICBtb2RlOiBUZmFNb2RlLFxuICAgICAgICBjYWxsYmFjazogVGZhUHJvdmlkZXJDYWxsYmFjayxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfYmFja3VwQ29kZXNNYW5hZ2VyOiBJQmFja3VwQ29kZXNNYW5hZ2VyLFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9wb2xsaW5nTGltaXRNaWxsaXMgPSBQb2xsaW5nTGltaXRNaWxsaXMsXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX3BvbGxpbmdJbnRlcnZhbE1pbGxpcyA9IFBvbGxpbmdJbnRlcnZhbE1pbGxpc1xuICAgICkge1xuICAgICAgICBzdXBlcihwbHVnaW4sIGNvbnRhaW5lciwgcGFyYW1zLCBtb2RlLCBjYWxsYmFjayk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdnaWd5YVB1c2gnO1xuICAgICAgICBpZiggIXRoaXMuX2JhY2t1cENvZGVzTWFuYWdlcilcbiAgICAgICAgICAgIHRoaXMuX2JhY2t1cENvZGVzTWFuYWdlciA9IG5ldyBCYWNrdXBDb2Rlc01hbmFnZXIodGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0lzVmVyaWZpZWQoKTogdm9pZCB7XG4gICAgICAgIGdpZ3lhLmFjY291bnRzLnRmYS5wdXNoLmlzVmVyaWZpZWQoe1xuICAgICAgICAgICAgZ2lneWFBc3NlcnRpb246IHRoaXMucGFyYW1zWydnaWd5YUFzc2VydGlvbiddLFxuICAgICAgICAgICAgcmVnVG9rZW46IHRoaXMucGFyYW1zWydyZWdUb2tlbiddLFxuICAgICAgICAgICAgY2FsbGJhY2s6IHJlcyA9PiB0aGlzLm9uSXNWZXJpZmllZFJlc3BvbnNlKHJlcylcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgb25Jc1ZlcmlmaWVkUmVzcG9uc2UocmVzKTogdm9pZCB7XG5cbiAgICAgICAgLy8gZXJyb3IgKHN0b3AgcG9sbGluZylcbiAgICAgICAgaWYgKHJlcy5lcnJvckNvZGUgIT0gR1NFcnJvcnMuT0spXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkVycm9yKCdmYWlsZWQgdG8gY2hlY2sgcHVzaCB2ZXJpZmljYXRpb24gc3RhdGUnLCB7bWV0aG9kOiAnaXNWZXJpZmllZCcsIHJlc30pO1xuXG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgICAgaWYgKHJlcy5wcm92aWRlckFzc2VydGlvbilcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uUHVzaFZlcmlmaWVkKHJlcyk7XG5cbiAgICAgICAgLy8ga2VlcCBwb2xsaW5nXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvdWxkQ29udGludWVQb2xsaW5nKCkpXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0lzVmVyaWZpZWQoKTtcbiAgICAgICAgfSwgdGhpcy5fcG9sbGluZ0ludGVydmFsTWlsbGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0UG9sbGluZygpe1xuICAgICAgICB0aGlzLl9wb2xsaW5nU3RhcnRUaW1lID0gZ2lneWEudXRpbHMuZGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5jaGVja0lzVmVyaWZpZWQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0b3BQb2xsaW5nKCl7XG4gICAgICAgIHRoaXMuX3BvbGxpbmdTdGFydFRpbWUgPSAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvdWxkQ29udGludWVQb2xsaW5nKCl7XG4gICAgICAgIHJldHVybiAhdGhpcy5zaG91bGRTdG9wUG9sbGluZygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvdWxkU3RvcFBvbGxpbmcoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IG5vdyA9IGdpZ3lhLnV0aWxzLmRhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IHBvbGxpbmdMaW1pdFJlYWNoZWQgPSBub3cgLSB0aGlzLl9wb2xsaW5nU3RhcnRUaW1lID49IHRoaXMuX3BvbGxpbmdMaW1pdE1pbGxpcztcbiAgICAgICAgcmV0dXJuIHBvbGxpbmdMaW1pdFJlYWNoZWQgfHwgIXRoaXMuaXNBY3RpdmUoKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvblB1c2hWZXJpZmllZChyZXNwb25zZSl7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKCk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2socmVzcG9uc2UsIHJlc3BvbnNlWydwcm92aWRlckFzc2VydGlvbiddLCB0cnVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRXJyb3IobG9nPzogc3RyaW5nLCBkZXRhaWxzPzoge1trOiBzdHJpbmddOiBhbnl9LCBlcnJNc2dLZXkgPSAnYW5fZXJyb3JfaGFzX29jY3VycmVkX3BsZWFzZV90cnlfYWdhaW5fbGF0ZXInKTogdm9pZCB7XG4gICAgICAgIGlmIChsb2cpIGdpZ3lhLmxvZ2dlci5lcnJvcihsb2csIGRldGFpbHMpO1xuICAgICAgICBjb25zdCBlcnIgPSB0aGlzLnBsdWdpbi5nZXRUZXh0KGVyck1zZ0tleSkgfHwgJ0Vycm9yJztcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0Vycm9yKGVycik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNlbmRWZXJpZmljYXRpb25SZXNwb25zZShyZXMpIHtcbiAgICAgICAgdGhpcy5oaWRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgaWYgKHJlc1snZXJyb3JDb2RlJ10gPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zaG93VmVyaWZ5TW9kZSgpO1xuICAgICAgICAgICAgdGhpcy5zdGFydFBvbGxpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25FcnJvcignZmFpbGVkIHRvIHNlbmQgcHVzaCB0ZmEgdmVyaWZpY2F0aW9uJywge21ldGhvZDogJ3NlbmRWZXJpZmljYXRpb24nLCByZXN9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRQdXNoVmVyaWZpY2F0aW9uRmxvdygpIHtcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3MoKTtcbiAgICAgICAgZ2lneWEuYWNjb3VudHMudGZhLnB1c2guc2VuZFZlcmlmaWNhdGlvbih7XG4gICAgICAgICAgICBnaWd5YUFzc2VydGlvbjogdGhpcy5wYXJhbXNbJ2dpZ3lhQXNzZXJ0aW9uJ10sXG4gICAgICAgICAgICByZWdUb2tlbjogdGhpcy5wYXJhbXNbJ3JlZ1Rva2VuJ10sXG4gICAgICAgICAgICBjYWxsYmFjazogcmVzID0+IHRoaXMub25TZW5kVmVyaWZpY2F0aW9uUmVzcG9uc2UocmVzKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2VuZFB1c2hOb3RpZmljYXRpb25DbGlja0hhbmRsZXIgPSAoKSA9PiB7IC8vIGNsaWNrIGhhbmRsZXJcbiAgICAgICAgdGhpcy5zdG9wUG9sbGluZygpO1xuICAgICAgICB0aGlzLnBsdWdpbi5pbml0VGZhKHRoaXMubmFtZSwgdGhpcy5tb2RlLCByZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc1snZXJyb3JDb2RlJ10gPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnN0YXJ0UHJvdmlkZXJGbG93KHtuYW1lOiB0aGlzLm5hbWV9LCB0aGlzLm1vZGUpO1xuICAgICAgICAgICAgfSBlbHNlIHsgLy8gc2hvdWxkIG5vdCBoYXBwZW5cbiAgICAgICAgICAgICAgICB0aGlzLm9uRXJyb3IoJ2luaXRUZmEgZmFpbGVkJywge21ldGhvZDogJ3Jlc2VuZFB1c2hOb3RpZmljYXRpb25DbGlja0hhbmRsZXInLCByZXN9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgc2hvd1ZlcmlmeU1vZGUoKSB7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5wbHVnaW4udGVtcGxhdGVzWydwdXNoVmVyaWZpY2F0aW9uUGhvbmUnXSwge1xuICAgICAgICAgICAgaWQ6IHRoaXMuY29udGFpbmVyLmlkLFxuICAgICAgICAgICAgcmVzZW5kUHVzaE5vdGlmaWNhdGlvbjogdGhpcy5wbHVnaW4uZ2V0VGV4dCgncmVzZW5kX3B1c2hfbm90aWZpY2F0aW9uJyksXG4gICAgICAgICAgICBjYWxsX3RvX2FjdGlvbjogdGhpcy5wbHVnaW4uZ2V0VGV4dCgncHVzaF90ZmFfY2FsbF90b19hY3Rpb24nKSxcbiAgICAgICAgICAgIHVzZUJhY2t1cENvZGU6IHRoaXMucGx1Z2luLmdldFRleHQoJ2NhbnRfYWNjZXNzX3VzZV9iYWNrdXBfY29kZXMnKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdXNlQmFja3VwQ29kZXMgPSB0aGlzLmdldFVzZUJhY2t1cENvZGVzQnV0dG9uKCk7XG4gICAgICAgIGNvbnN0IHJlc2VuZFB1c2hOb3RpZmljYXRpb24gPSB0aGlzLmdldFJlc2VuZEJ1dHRvbigpO1xuXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHVzZUJhY2t1cENvZGVzLCAnY2xpY2snLCB0aGlzLnVzZUJhY2t1cENvZGVzQ2xpY2tIYW5kbGVyKTtcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIocmVzZW5kUHVzaE5vdGlmaWNhdGlvbiwgJ2NsaWNrJywgdGhpcy5yZXNlbmRQdXNoTm90aWZpY2F0aW9uQ2xpY2tIYW5kbGVyKTtcblxuICAgICAgICB0aGlzLnBsdWdpbi5vbkFmdGVyU2NyZWVuTG9hZCgndGZhLXB1c2gtdmVyaWZpY2F0aW9uJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1c2VCYWNrdXBDb2Rlc0NsaWNrSGFuZGxlciA9ICgpID0+IHsgLy8gY2xpY2sgaGFuZGxlclxuICAgICAgICB0aGlzLnN0b3BQb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5wbHVnaW4udGVtcGxhdGVzWydwdXNoVmVyaWZpY2F0aW9uQmFja3VwQ29kZXMnXSwge1xuICAgICAgICAgICAgaWQ6IHRoaXMuY29udGFpbmVyLmlkLFxuICAgICAgICAgICAgY2FsbF90b19hY3Rpb246IHRoaXMucGx1Z2luLmdldFRleHQoJ2VudGVyX2JhY2t1cF9jb2RlJyksXG4gICAgICAgICAgICByZXNlbmRQdXNoTm90aWZpY2F0aW9uOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdyZXNlbmRfcHVzaF9ub3RpZmljYXRpb24nKSxcbiAgICAgICAgICAgIHVzZUJhY2t1cENvZGU6IHRoaXMucGx1Z2luLmdldFRleHQoJ2NhbnRfYWNjZXNzX3VzZV9iYWNrdXBfY29kZXMnKSxcbiAgICAgICAgICAgIHN1Ym1pdDogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnc3VibWl0JyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IHRoaXMuZ2V0U3VibWl0QnV0dG9uKCk7XG4gICAgICAgIGNvbnN0IGJhY2t1cENvZGVJbnB1dEVsID0gdGhpcy5nZXRCYWNrdXBDb2RlSW5wdXQoKTtcbiAgICAgICAgY29uc3QgcmVzZW5kUHVzaE5vdGlmaWNhdGlvbiA9IHRoaXMuZ2V0UmVzZW5kQnV0dG9uKCk7XG5cbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIocmVzZW5kUHVzaE5vdGlmaWNhdGlvbiwgJ2NsaWNrJywgdGhpcy5yZXNlbmRQdXNoTm90aWZpY2F0aW9uQ2xpY2tIYW5kbGVyKTtcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoc3VibWl0QnV0dG9uLCAnY2xpY2snLCB0aGlzLnN1Ym1pdEJhY2t1cENvZGVDbGlja0hhbmRsZXIpO1xuXG4gICAgICAgIGJpbmRFbnRlcktleShiYWNrdXBDb2RlSW5wdXRFbCwgc3VibWl0QnV0dG9uKTtcbiAgICAgICAgYmluZEVudGVyS2V5KHN1Ym1pdEJ1dHRvbik7XG4gICAgICAgIGJhY2t1cENvZGVJbnB1dEVsLmZvY3VzKCk7XG5cbiAgICAgICAgdGhpcy5wbHVnaW4ub25BZnRlclNjcmVlbkxvYWQoJ3RmYS1iYWNrdXAtY29kZXMnKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBzdWJtaXRCYWNrdXBDb2RlQ2xpY2tIYW5kbGVyID0gKCkgPT4geyAvLyBjbGljayBoYW5kbGVyXG5cbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gdGhpcy5nZXRTdWJtaXRCdXR0b24oKTtcbiAgICAgICAgY29uc3QgYmFja3VwQ29kZUlucHV0RWwgPSB0aGlzLmdldEJhY2t1cENvZGVJbnB1dCgpO1xuXG4gICAgICAgIGNvbnN0IGJhY2t1cENvZGUgPSBiYWNrdXBDb2RlSW5wdXRFbC52YWx1ZTtcbiAgICAgICAgaWYgKCFiYWNrdXBDb2RlKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0Vycm9yKHRoaXMucGx1Z2luLmdldFRleHQoJ3BsZWFzZV9lbnRlcl9hX3ZhbGlkX2NvZGUnKSwgW2JhY2t1cENvZGVJbnB1dEVsXSk7XG5cbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KHN1Ym1pdEJ1dHRvbiwgJ2Rpc2FibGVkJyk7XG4gICAgICAgIGdpZ3lhLmFjY291bnRzLnRmYS5iYWNrdXBjb2Rlcy52ZXJpZnkodGhpcy5wYXJhbXMsIHtcbiAgICAgICAgICAgIGNvZGU6IGJhY2t1cENvZGUsXG4gICAgICAgICAgICBjYWxsYmFjazogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVByb2dyZXNzKCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlWydlcnJvckNvZGUnXSA9PSAwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vblB1c2hWZXJpZmllZChyZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlQ2xhc3NGcm9tRWxlbWVudChzdWJtaXRCdXR0b24sICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IHRoaXMuZ2V0QmFja3VwQ29kZUVycm9yTWVzc2FnZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3IoZXJyLCBbYmFja3VwQ29kZUlucHV0RWxdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgZ2V0QmFja3VwQ29kZUVycm9yTWVzc2FnZShyZXNwb25zZTogYW55KSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZVsnZXJyb3JEZXRhaWxzJ10gPT09ICdXcm9uZyB2ZXJpZmljYXRpb24gY29kZSdcbiAgICAgICAgICAgID8gdGhpcy5wbHVnaW4uZ2V0VGV4dCgncGxlYXNlX2VudGVyX2FfdmFsaWRfY29kZScpXG4gICAgICAgICAgICA6ICh0aGlzLnBsdWdpbi5nZXRUZXh0KCdhbl9lcnJvcl9oYXNfb2NjdXJyZWRfcGxlYXNlX3RyeV9hZ2Fpbl9sYXRlcicpIHx8ICdFcnJvcicpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93RWRpdE1vZGUoKSB7XG4gICAgICAgIHRoaXMuc2hvd0JhY2t1cENvZGVzRWRpdE1vZGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dCYWNrdXBDb2Rlc0VkaXRNb2RlKG9yaWdpbmFsQmFja3VwQ29kZXMgPSBudWxsKSB7XG4gICAgICAgIGNyZWF0ZUFjdGlvbkludGVydmFsKHRoaXMsIGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgICAgIGxldCBiYWNrdXBDb2RlcyA9IG9yaWdpbmFsQmFja3VwQ29kZXM7XG4gICAgICAgICAgICBpZiAoIWJhY2t1cENvZGVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBnZXRCYWNrdXBDb2Rlc1Jlc3BvbnNlID0gYXdhaXQgdGhpcy5fYmFja3VwQ29kZXNNYW5hZ2VyLmdldEJhY2t1cENvZGVzKCk7XG4gICAgICAgICAgICAgICAgaWYgKGdldEJhY2t1cENvZGVzUmVzcG9uc2VbJ2Vycm9yQ29kZSddICE9PSBHU0Vycm9ycy5PSyB8fCAhZ2V0QmFja3VwQ29kZXNSZXNwb25zZS5iYWNrdXBDb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLnBsdWdpbi50ZW1wbGF0ZXNbJ2Vycm9yJ107XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dFcnJvcih0aGlzLnBsdWdpbi5nZXRUZXh0KCdhbl9lcnJvcl9oYXNfb2NjdXJyZWRfcGxlYXNlX3RyeV9hZ2Fpbl9sYXRlcicpIHx8ICdFcnJvcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBiYWNrdXBDb2RlcyA9IGdldEJhY2t1cENvZGVzUmVzcG9uc2UuYmFja3VwQ29kZXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKFxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnRlbXBsYXRlc1sndG90cEJhY2t1cENvZGVzJ10sXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMub2JqZWN0Lm1lcmdlKFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyVGV4dDogdGhpcy5wbHVnaW4uZ2V0VGV4dCgncHJpbnRfYmFja3VwX2NvZGVzX2ludHJvJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmludDogdGhpcy5wbHVnaW4uZ2V0VGV4dCgncHJpbnQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlTmV3Q29kZXM6IHRoaXMucGx1Z2luLmdldFRleHQoJ2dlbmVyYXRlX2JhY2t1cF9jb2RlcycpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9iYWNrdXBDb2Rlc01hbmFnZXIucHJlcGFyZUJhY2t1cENvZGVzRm9yVmlldyhiYWNrdXBDb2RlcyksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBiYWNrdXBDb2Rlc1RhYmxlID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtdG90cC1iYWNrdXAtY29kZXMnKVswXTtcbiAgICAgICAgICAgIGNvbnN0IHByaW50QnV0dG9uID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy1iYWNrdXAtY29kZXMtcHJpbnQtYnRuJylbMF07XG4gICAgICAgICAgICBjb25zdCBnZW5lcmF0ZU5ld0NvZGVzTGluayA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLWdlbmVyYXRlLW5ldy1jb2RlcycpWzBdO1xuXG4gICAgICAgICAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzTmF0aXZlTW9iaWxlQXBwKSB7XG4gICAgICAgICAgICAgICAgcHJpbnRCdXR0b24ucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlTmV3Q29kZXNMaW5rLmZvY3VzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByaW50QnV0dG9uLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHByaW50QnV0dG9uLCAnY2xpY2snLCAoKSA9PiB0aGlzLl9iYWNrdXBDb2Rlc01hbmFnZXIucHJpbnRCYWNrdXBDb2RlcyhiYWNrdXBDb2Rlc1RhYmxlLm91dGVySFRNTCkpO1xuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEFjdGl2YXRpb25IYW5kbGVyKGdlbmVyYXRlTmV3Q29kZXNMaW5rLCAoKSA9PiB0aGlzLnNob3dHZW5lcmF0ZU5ld0NvZGVzQ29uZmlybWF0aW9uKGJhY2t1cENvZGVzKSk7XG5cbiAgICAgICAgICAgIHRoaXMucGx1Z2luLm9uQWZ0ZXJTY3JlZW5Mb2FkKCd0ZmEtYmFja3VwLWNvZGVzJywgdGhpcy5wbHVnaW4uZ2V0VGV4dCgnYmFja3VwX2NvZGVzJykpO1xuICAgICAgICB9LCB0aGlzLnJlc3RhcnRGbG93SW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd0dlbmVyYXRlTmV3Q29kZXNDb25maXJtYXRpb24ob3JpZ2luYWxCYWNrdXBDb2Rlcykge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IEZsYWdTZXJ2aWNlLmdlbmVyYXRlTmV3Q29kZVdjYWdDb21wbGlhbmNlID8gJ3RvdHBHZW5lcmF0ZU5ld0NvZGVzQ29uZmlybWF0aW9uV0NBR0NvbXBseScgOiAndG90cEdlbmVyYXRlTmV3Q29kZXNDb25maXJtYXRpb24nO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLnBsdWdpbi50ZW1wbGF0ZXNbdGVtcGxhdGVdLCB7XG4gICAgICAgICAgICByZXNldENvZGVzUXVlc3Rpb246IHRoaXMucGx1Z2luLmdldFRleHQoJ3Jlc2V0X2NvZGVzX3F1ZXN0aW9uJyksXG4gICAgICAgICAgICB5ZXM6IHRoaXMucGx1Z2luLmdldFRleHQoJ3llcycpLFxuICAgICAgICAgICAgY2FuY2VsOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdjYW5jZWwnKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLWJhY2t1cC1jb2Rlcy1jb25maXJtJylbMF07XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctYmFja3VwLWNvZGVzLWNhbmNlbCcpWzBdO1xuICAgICAgICBjb25maXJtQnV0dG9uLmZvY3VzKCk7XG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbixcbiAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBnZW5lcmF0ZUJhY2t1cENvZGVzUmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9iYWNrdXBDb2Rlc01hbmFnZXIuZ2VuZXJhdGVOZXdDb2RlcygpO1xuICAgICAgICAgICAgICAgIGlmIChnZW5lcmF0ZUJhY2t1cENvZGVzUmVzcG9uc2VbJ2Vycm9yQ29kZSddICE9PSBHU0Vycm9ycy5PSyB8fCAhZ2VuZXJhdGVCYWNrdXBDb2Rlc1Jlc3BvbnNlLmJhY2t1cENvZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMucGx1Z2luLnRlbXBsYXRlc1snZXJyb3InXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0Vycm9yKHRoaXMucGx1Z2luLmdldFRleHQoJ2FuX2Vycm9yX2hhc19vY2N1cnJlZF9wbGVhc2VfdHJ5X2FnYWluX2xhdGVyJykgfHwgJ0Vycm9yJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2hvd0JhY2t1cENvZGVzRWRpdE1vZGUoZ2VuZXJhdGVCYWNrdXBDb2Rlc1Jlc3BvbnNlLmJhY2t1cENvZGVzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGNhbmNlbEJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4gdGhpcy5zaG93QmFja3VwQ29kZXNFZGl0TW9kZShvcmlnaW5hbEJhY2t1cENvZGVzKSk7XG4gICAgICAgIHRoaXMucGx1Z2luLm9uQWZ0ZXJTY3JlZW5Mb2FkKCd0ZmEtYmFja3VwLWNvZGVzLXJlZ2VuZXJhdGUnLCB0aGlzLnBsdWdpbi5nZXRUZXh0KCdiYWNrdXBfY29kZXMnKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRTdWJtaXRCdXR0b24oKTogSFRNTEJ1dHRvbkVsZW1lbnQge1xuICAgICAgICByZXR1cm4gZ2V0RWxlbWVudEJ5Q2xhc3NOYW1lPEhUTUxCdXR0b25FbGVtZW50Pih0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtYnV0dG9uLXN1Ym1pdCcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0QmFja3VwQ29kZUlucHV0KCk6IEhUTUxJbnB1dEVsZW1lbnQgIHtcbiAgICAgICAgcmV0dXJuIGdldEVsZW1lbnRCeUNsYXNzTmFtZTxIVE1MSW5wdXRFbGVtZW50Pih0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtY29kZS10ZXh0Ym94Jyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSZXNlbmRCdXR0b24oKTogSFRNTEFuY2hvckVsZW1lbnQge1xuICAgICAgICByZXR1cm4gZ2V0RWxlbWVudEJ5Q2xhc3NOYW1lPEhUTUxBbmNob3JFbGVtZW50Pih0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtcmVzZW5kLXB1c2gtbm90aWZpY2F0aW9uJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRVc2VCYWNrdXBDb2Rlc0J1dHRvbigpOiBIVE1MQW5jaG9yRWxlbWVudCB7XG4gICAgICAgIHJldHVybiBnZXRFbGVtZW50QnlDbGFzc05hbWU8SFRNTEFuY2hvckVsZW1lbnQ+KHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS11c2UtYmFja3VwLWNvZGUnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnRGbG93KGNhcGFiaWxpdGllcz86IHN0cmluZ1tdKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICAgICAgICBjYXNlIFRmYU1vZGUudmVyaWZ5OlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRQdXNoVmVyaWZpY2F0aW9uRmxvdygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUZmFNb2RlLmVkaXQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RWRpdE1vZGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEJhc2VUZmFQcm92aWRlciB9IGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQcm92aWRlcnMvQmFzZVRmYVByb3ZpZGVyJztcbmltcG9ydCB7IFRmYVBsdWdpbiwgVGZhTW9kZSB9IGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQbHVnaW4nO1xuaW1wb3J0IHsgR1NFcnJvcnMgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvR1NFcnJvcnMnO1xuaW1wb3J0IHsgYmluZEVudGVyS2V5LCBjcmVhdGVBY3Rpb25JbnRlcnZhbCB9IGZyb20gXCIuLi9oZWxwZXJzL1V0aWxzXCI7XG5pbXBvcnQgeyBCYWNrdXBDb2Rlc01hbmFnZXIsIElCYWNrdXBDb2Rlc01hbmFnZXIgfSBmcm9tIFwiLi4vaGVscGVycy9CYWNrdXBDb2Rlc01hbmFnZXJcIjtcbmltcG9ydCB7RmxhZ1NlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi8uLi9jb3JlL0dpZ3lhLkpzL2FwcC9TZXJ2aWNlcy9GbGFnU2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgVG90cFRmYVByb3ZpZGVyIGV4dGVuZHMgQmFzZVRmYVByb3ZpZGVyIHtcbiAgICBwdWJsaWMgcXJDb2RlOiBzdHJpbmc7XG4gICAgcHVibGljIHNjdFRva2VuOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcGx1Z2luOiBUZmFQbHVnaW4sXG4gICAgICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgICAgIHBhcmFtczogT2JqZWN0LFxuICAgICAgICBtb2RlOiBUZmFNb2RlLFxuICAgICAgICBjYWxsYmFjazogKHJlc3BvbnNlOiBPYmplY3QsIHByb3ZpZGVyQXNzZXJ0aW9uOiBzdHJpbmcsIHRlbXBEZXZpY2U6IGJvb2xlYW4pID0+IHZvaWQsXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2JhY2t1cENvZGVzTWFuYWdlcjogSUJhY2t1cENvZGVzTWFuYWdlclxuICAgICkge1xuICAgICAgICBzdXBlcihwbHVnaW4sIGNvbnRhaW5lciwgcGFyYW1zLCBtb2RlLCBjYWxsYmFjayk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdnaWd5YVRvdHAnO1xuICAgICAgICBpZiggIXRoaXMuX2JhY2t1cENvZGVzTWFuYWdlcilcbiAgICAgICAgICAgIHRoaXMuX2JhY2t1cENvZGVzTWFuYWdlciA9IG5ldyBCYWNrdXBDb2Rlc01hbmFnZXIodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0RmxvdyhjYXBhYmlsaXRpZXM/OiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3coKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICAgICAgICBjYXNlIFRmYU1vZGUucmVnaXN0ZXI6XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UmVnaXN0ZXJNb2RlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRmYU1vZGUudmVyaWZ5OlxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ZlcmlmeU1vZGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVGZhTW9kZS5lZGl0OlxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VkaXRNb2RlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dSZWdpc3Rlck1vZGUoKSB7XG4gICAgICAgIGNyZWF0ZUFjdGlvbkludGVydmFsKHRoaXMsIGFzeW5jIChjb3VudDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9ncmVzcygpO1xuICAgICAgICAgICAgY29uc3QgYWZ0ZXJJbml0VEZBID0gKGluaXRURkFSZXNwb25zZT8pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5pdFRGQVJlc3BvbnNlICYmIGluaXRURkFSZXNwb25zZVsnZXJyb3JDb2RlJ10gIT09IEdTRXJyb3JzLk9LKSByZXR1cm47XG4gICAgICAgICAgICAgICAgZ2lneWEuYWNjb3VudHMudGZhLnRvdHAucmVnaXN0ZXIodGhpcy5wYXJhbXMsIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVsnZXJyb3JDb2RlJ10gIT09IEdTRXJyb3JzLk9LKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gdGhpcy5wbHVnaW4udGVtcGxhdGVzWydlcnJvciddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dFcnJvcih0aGlzLnBsdWdpbi5nZXRUZXh0KCdhbl9lcnJvcl9oYXNfb2NjdXJyZWRfcGxlYXNlX3RyeV9hZ2Fpbl9sYXRlcicpIHx8ICdFcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclJlZ2lzdHJhdGlvblByb2Nlc3MocmVzcG9uc2VbJ3FyQ29kZSddLCByZXNwb25zZVsnc2N0VG9rZW4nXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvcih0aGlzLnBsdWdpbi5nZXRUZXh0KCd0b3RwX3Nlc3Npb25fZXhwaXJlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGNvdW50ID4gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLmluaXRUZmEodGhpcy5uYW1lLCBUZmFNb2RlLnJlZ2lzdGVyLCBhZnRlckluaXRURkEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpbiB0aGUgZmlyc3QgcmVuZGVyIC0gaW5pdFRGQSBpcyBjYWxsZWQgYnkgdGhlIHBsdWdpbiBpdHNlbGZcbiAgICAgICAgICAgICAgICBhZnRlckluaXRURkEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5yZXN0YXJ0Rmxvd0ludGVydmFsKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dWZXJpZnlNb2RlKHVzaW5nQmFja3VwQ29kZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMucGx1Z2luLnRlbXBsYXRlc1sndG90cFZlcmlmeSddLCB7XG4gICAgICAgICAgICBpZDogdGhpcy5jb250YWluZXIuaWQsXG4gICAgICAgICAgICBlbnRlcl9jb2RlOiB1c2luZ0JhY2t1cENvZGUgPyB0aGlzLnBsdWdpbi5nZXRUZXh0KCdlbnRlcl9iYWNrdXBfY29kZScpIDogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnZW50ZXJfdG90cF9jb2RlJyksXG4gICAgICAgICAgICByZW1lbWJlcl90aGlzX2RldmljZTogdGhpcy5wbHVnaW4uaXNNb2JpbGVVSSA/IHRoaXMucGx1Z2luLmdldFRleHQoJ3JlbWVtYmVyX3RoaXNfZGV2aWNlJykgOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdyZW1lbWJlcl90aGlzX2NvbXB1dGVyJyksXG4gICAgICAgICAgICBzdWJtaXQ6IHRoaXMucGx1Z2luLmdldFRleHQoJ3N1Ym1pdCcpLFxuICAgICAgICAgICAgdXNlQmFja3VwQ29kZTogdXNpbmdCYWNrdXBDb2RlID8gdGhpcy5wbHVnaW4uZ2V0VGV4dCgnZW50ZXJfdG90cF9jb2RlJykgOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdjYW50X2FjY2Vzc191c2VfYmFja3VwX2NvZGVzJyksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbmRlclZlcmlmaWNhdGlvblNlY3Rpb24odXNpbmdCYWNrdXBDb2RlKTtcbiAgICAgICAgY29uc3QgdXNlQmFja3VwQ29kZUxpbmsgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS11c2UtYmFja3VwLWNvZGUnKTtcblxuICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQWN0aXZhdGlvbkhhbmRsZXIodXNlQmFja3VwQ29kZUxpbmtbMF0sICgpID0+IHRoaXMuc2hvd1ZlcmlmeU1vZGUoIXVzaW5nQmFja3VwQ29kZSkpO1xuICAgICAgICB0aGlzLnBsdWdpbi5vbkFmdGVyU2NyZWVuTG9hZCgndGZhLXRvdHAtdmVyaWZpY2F0aW9uJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93RWRpdE1vZGUoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMucGx1Z2luLnRlbXBsYXRlc1sndG90cEVkaXQnXSwge1xuICAgICAgICAgICAgaGVhZGVyVGV4dDogdGhpcy5wbHVnaW4uZ2V0VGV4dCgndG90cF92ZXJpZmljYXRpb25fc2V0dGluZ3NfaW50cm8nKSxcbiAgICAgICAgICAgIGJhY2t1cENvZGVzOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdiYWNrdXBfY29kZXMnKSxcbiAgICAgICAgICAgIGNoYW5nZURldmljZTogdGhpcy5wbHVnaW4uZ2V0VGV4dCgndG90cF9jaGFuZ2VfZGV2aWNlJyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNoYW5nZURldmljZUJ1dHRvbiA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLWJ1dHRvbi1jaGFuZ2UtZGV2aWNlJylbMF07XG4gICAgICAgIGNvbnN0IGJhY2t1cENvZGVzQnV0dG9uID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy10ZmEtYnV0dG9uLWJhY2t1cC1jb2RlcycpWzBdO1xuXG4gICAgICAgIGNoYW5nZURldmljZUJ1dHRvbi5mb2N1cygpO1xuXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRBY3RpdmF0aW9uSGFuZGxlcihjaGFuZ2VEZXZpY2VCdXR0b24sICgpID0+IHRoaXMuc2hvd0NoYW5nZURldmljZVNjcmVlbigpKTtcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEFjdGl2YXRpb25IYW5kbGVyKGJhY2t1cENvZGVzQnV0dG9uLCAoKSA9PiB0aGlzLnNob3dCYWNrdXBDb2Rlc1NjcmVlbigpKTtcblxuICAgICAgICB0aGlzLnBsdWdpbi5vbkFmdGVyU2NyZWVuTG9hZCgndGZhLWVkaXQnLCB0aGlzLnBsdWdpbi5nZXRUZXh0KCd0b3RwX3ZlcmlmaWNhdGlvbl9zZXR0aW5ncycpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dCYWNrdXBDb2Rlc1NjcmVlbihvcmlnaW5hbEJhY2t1cENvZGVzID0gbnVsbCkge1xuICAgICAgICBjcmVhdGVBY3Rpb25JbnRlcnZhbCh0aGlzLCBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgICAgICBsZXQgYmFja3VwQ29kZXMgPSBvcmlnaW5hbEJhY2t1cENvZGVzO1xuICAgICAgICAgICAgaWYgKCFiYWNrdXBDb2Rlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2V0QmFja3VwQ29kZXNSZXNwb25zZSA9IGF3YWl0IHRoaXMuX2JhY2t1cENvZGVzTWFuYWdlci5nZXRCYWNrdXBDb2RlcygpO1xuICAgICAgICAgICAgICAgIGlmIChnZXRCYWNrdXBDb2Rlc1Jlc3BvbnNlWydlcnJvckNvZGUnXSAhPT0gR1NFcnJvcnMuT0sgfHwgIWdldEJhY2t1cENvZGVzUmVzcG9uc2UuYmFja3VwQ29kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gdGhpcy5wbHVnaW4udGVtcGxhdGVzWydlcnJvciddO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93RXJyb3IodGhpcy5wbHVnaW4uZ2V0VGV4dCgnYW5fZXJyb3JfaGFzX29jY3VycmVkX3BsZWFzZV90cnlfYWdhaW5fbGF0ZXInKSB8fCAnRXJyb3InKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYmFja3VwQ29kZXMgPSBnZXRCYWNrdXBDb2Rlc1Jlc3BvbnNlLmJhY2t1cENvZGVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbChcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi50ZW1wbGF0ZXNbJ3RvdHBCYWNrdXBDb2RlcyddLFxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLm9iamVjdC5tZXJnZShbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlclRleHQ6IHRoaXMucGx1Z2luLmdldFRleHQoJ3ByaW50X2JhY2t1cF9jb2Rlc19pbnRybycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnQ6IHRoaXMucGx1Z2luLmdldFRleHQoJ3ByaW50JyksXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZU5ld0NvZGVzOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdnZW5lcmF0ZV9iYWNrdXBfY29kZXMnKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmFja3VwQ29kZXNNYW5hZ2VyLnByZXBhcmVCYWNrdXBDb2Rlc0ZvclZpZXcoYmFja3VwQ29kZXMpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgYmFja3VwQ29kZXNUYWJsZSA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLXRvdHAtYmFja3VwLWNvZGVzJylbMF07XG4gICAgICAgICAgICBjb25zdCBwcmludEJ1dHRvbiA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctYmFja3VwLWNvZGVzLXByaW50LWJ0bicpWzBdO1xuICAgICAgICAgICAgY29uc3QgZ2VuZXJhdGVOZXdDb2Rlc0xpbmsgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1nZW5lcmF0ZS1uZXctY29kZXMnKVswXTtcblxuICAgICAgICAgICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5pc05hdGl2ZU1vYmlsZUFwcCkge1xuICAgICAgICAgICAgICAgIHByaW50QnV0dG9uLnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZU5ld0NvZGVzTGluay5mb2N1cygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmludEJ1dHRvbi5mb2N1cygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQWN0aXZhdGlvbkhhbmRsZXIocHJpbnRCdXR0b24sICgpID0+IHRoaXMuX2JhY2t1cENvZGVzTWFuYWdlci5wcmludEJhY2t1cENvZGVzKGJhY2t1cENvZGVzVGFibGUub3V0ZXJIVE1MKSk7XG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQWN0aXZhdGlvbkhhbmRsZXIoZ2VuZXJhdGVOZXdDb2Rlc0xpbmssKCkgPT4gdGhpcy5zaG93R2VuZXJhdGVOZXdDb2Rlc0NvbmZpcm1hdGlvbihiYWNrdXBDb2RlcykpO1xuXG5cbiAgICAgICAgICAgIHRoaXMucGx1Z2luLm9uQWZ0ZXJTY3JlZW5Mb2FkKCd0ZmEtYmFja3VwLWNvZGVzJywgdGhpcy5wbHVnaW4uZ2V0VGV4dCgnYmFja3VwX2NvZGVzJykpO1xuICAgICAgICB9LCB0aGlzLnJlc3RhcnRGbG93SW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd0NoYW5nZURldmljZVNjcmVlbigpIHtcbiAgICAgICAgY3JlYXRlQWN0aW9uSW50ZXJ2YWwodGhpcyxhc3luYyAoY291bnQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLmluaXRUZmEodGhpcy5uYW1lLCBUZmFNb2RlLmVkaXQsIGluaXRURkFSZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluaXRURkFSZXNwb25zZSAmJiBpbml0VEZBUmVzcG9uc2VbJ2Vycm9yQ29kZSddICE9PSBHU0Vycm9ycy5PSykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGdpZ3lhLmFjY291bnRzLnRmYS50b3RwLnJlZ2lzdGVyKHRoaXMucGFyYW1zLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbJ2Vycm9yQ29kZSddICE9PSBHU0Vycm9ycy5PSykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMucGx1Z2luLnRlbXBsYXRlc1snZXJyb3InXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93RXJyb3IodGhpcy5wbHVnaW4uZ2V0VGV4dCgnYW5fZXJyb3JfaGFzX29jY3VycmVkX3BsZWFzZV90cnlfYWdhaW5fbGF0ZXInKSB8fCAnRXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJSZWdpc3RyYXRpb25Qcm9jZXNzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVsncXJDb2RlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlWydzY3RUb2tlbiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGZhLXRvdHAtY2hhbmdlLWRldmljZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLmdldFRleHQoJ3RvdHBfY2hhbmdlX2RldmljZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvcih0aGlzLnBsdWdpbi5nZXRUZXh0KCd0b3RwX3Nlc3Npb25fZXhwaXJlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgdGhpcy5yZXN0YXJ0Rmxvd0ludGVydmFsKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dHZW5lcmF0ZU5ld0NvZGVzQ29uZmlybWF0aW9uKG9yaWdpbmFsQmFja3VwQ29kZXMpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBGbGFnU2VydmljZS5nZW5lcmF0ZU5ld0NvZGVXY2FnQ29tcGxpYW5jZSA/ICd0b3RwR2VuZXJhdGVOZXdDb2Rlc0NvbmZpcm1hdGlvbldDQUdDb21wbHknIDogJ3RvdHBHZW5lcmF0ZU5ld0NvZGVzQ29uZmlybWF0aW9uJztcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5wbHVnaW4udGVtcGxhdGVzW3RlbXBsYXRlXSwge1xuICAgICAgICAgICAgcmVzZXRDb2Rlc1F1ZXN0aW9uOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdyZXNldF9jb2Rlc19xdWVzdGlvbicpLFxuICAgICAgICAgICAgeWVzOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCd5ZXMnKSxcbiAgICAgICAgICAgIGNhbmNlbDogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnY2FuY2VsJyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLWJhY2t1cC1jb2Rlcy1jb25maXJtJylbMF07XG4gICAgICAgIGNvbnN0IGNvbmZpcm1IYW5kbGVyID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2VuZXJhdGVCYWNrdXBDb2Rlc1Jlc3BvbnNlID0gYXdhaXQgdGhpcy5fYmFja3VwQ29kZXNNYW5hZ2VyLmdlbmVyYXRlTmV3Q29kZXMoKTtcbiAgICAgICAgICAgICAgICBpZiAoZ2VuZXJhdGVCYWNrdXBDb2Rlc1Jlc3BvbnNlWydlcnJvckNvZGUnXSAhPT0gR1NFcnJvcnMuT0sgfHwgIWdlbmVyYXRlQmFja3VwQ29kZXNSZXNwb25zZS5iYWNrdXBDb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLnBsdWdpbi50ZW1wbGF0ZXNbJ2Vycm9yJ107XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3dFcnJvcih0aGlzLnBsdWdpbi5nZXRUZXh0KCdhbl9lcnJvcl9oYXNfb2NjdXJyZWRfcGxlYXNlX3RyeV9hZ2Fpbl9sYXRlcicpIHx8ICdFcnJvcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNob3dCYWNrdXBDb2Rlc1NjcmVlbihnZW5lcmF0ZUJhY2t1cENvZGVzUmVzcG9uc2UuYmFja3VwQ29kZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQWN0aXZhdGlvbkhhbmRsZXIoY29uZmlybUJ1dHRvbixjb25maXJtSGFuZGxlcik7XG4gICAgICAgIGNvbmZpcm1CdXR0b24uZm9jdXMoKTtcblxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLWJhY2t1cC1jb2Rlcy1jYW5jZWwnKVswXTtcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEFjdGl2YXRpb25IYW5kbGVyKGNhbmNlbEJ1dHRvbiwgKCkgPT4gdGhpcy5zaG93QmFja3VwQ29kZXNTY3JlZW4ob3JpZ2luYWxCYWNrdXBDb2RlcykpO1xuXG4gICAgICAgIHRoaXMucGx1Z2luLm9uQWZ0ZXJTY3JlZW5Mb2FkKCd0ZmEtYmFja3VwLWNvZGVzLXJlZ2VuZXJhdGUnLCB0aGlzLnBsdWdpbi5nZXRUZXh0KCdiYWNrdXBfY29kZXMnKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZW5kVGZhQ29kZSh0YkNvZGU6IEhUTUxJbnB1dEVsZW1lbnQsIGNiUmVtZW1iZXI6IEhUTUxJbnB1dEVsZW1lbnQsIHN1Ym1pdEJ1dHRvbjogSFRNTEVsZW1lbnQsIGlzQmFja3VwQ29kZTogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZlcmlmeSh0YkNvZGUudmFsdWUsICFjYlJlbWVtYmVyLmNoZWNrZWQsIHRoaXMuc2N0VG9rZW4sIGlzQmFja3VwQ29kZSlcbiAgICAgICAgICAgIC50aGVuKHZlcmlmeVJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVFcnJvcihbdGJDb2RlXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmeVJlc3BvbnNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKGVyciwgW3RiQ29kZV0pO1xuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVDbGFzc0Zyb21FbGVtZW50KHN1Ym1pdEJ1dHRvbiwgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB9KSBhcyBhbnk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB2ZXJpZnkoY29kZTogc3RyaW5nLCBpc1RlbXA6IGJvb2xlYW4sIHNjdFRva2VuPzogc3RyaW5nLCBpc0JhY2t1cENvZGU6IGJvb2xlYW4gPSBmYWxzZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxQYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgY29kZSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVQcm9ncmVzcygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbJ2Vycm9yQ29kZSddID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2socmVzcG9uc2UsIHJlc3BvbnNlWydwcm92aWRlckFzc2VydGlvbiddLCBpc1RlbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZVsnZXJyb3JEZXRhaWxzJ10gPT09ICdXcm9uZyB2ZXJpZmljYXRpb24gY29kZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnBsdWdpbi5nZXRUZXh0KCdwbGVhc2VfZW50ZXJfYV92YWxpZF9jb2RlJykpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMucGx1Z2luLmdldFRleHQoJ2FuX2Vycm9yX2hhc19vY2N1cnJlZF9wbGVhc2VfdHJ5X2FnYWluX2xhdGVyJykgfHwgJ0Vycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChzY3RUb2tlbikge1xuICAgICAgICAgICAgICAgIGxvY2FsUGFyYW1zWydzY3RUb2tlbiddID0gc2N0VG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNCYWNrdXBDb2RlKSB7XG4gICAgICAgICAgICAgICAgZ2lneWEuYWNjb3VudHMudGZhLmJhY2t1cGNvZGVzLnZlcmlmeSh0aGlzLnBhcmFtcywgbG9jYWxQYXJhbXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBnaWd5YS5hY2NvdW50cy50ZmEudG90cC52ZXJpZnkodGhpcy5wYXJhbXMsIGxvY2FsUGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJSZWdpc3RyYXRpb25Qcm9jZXNzKHFyQ29kZSwgc2N0VG9rZW4sIHNjcmVlbk5hbWUgPSAndGZhLXRvdHAtcmVnaXN0cmF0aW9uJywgY2FwdGlvbj86IHN0cmluZykge1xuICAgICAgICB0aGlzLnNjdFRva2VuID0gc2N0VG9rZW47XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMucGx1Z2luLnRlbXBsYXRlc1sndG90cFJlZ2lzdGVyJ10sIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmNvbnRhaW5lci5pZCxcbiAgICAgICAgICAgIHN0ZXAxOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdzdGVwJywgJyR7aW5kfScsICcxJyksXG4gICAgICAgICAgICBzdGVwMjogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnc3RlcCcsICcke2luZH0nLCAnMicpLFxuICAgICAgICAgICAgc2Nhbl9xcl9jb2RlOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdzY2FuX3FyX2NvZGUnKSxcbiAgICAgICAgICAgIHFyQ29kZTogcXJDb2RlLFxuICAgICAgICAgICAgZW50ZXJfY29kZTogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnZW50ZXJfdG90cF9jb2RlJyksXG4gICAgICAgICAgICByZW1lbWJlcl90aGlzX2RldmljZTogdGhpcy5wbHVnaW4uaXNNb2JpbGVVSSA/IHRoaXMucGx1Z2luLmdldFRleHQoJ3JlbWVtYmVyX3RoaXNfZGV2aWNlJykgOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdyZW1lbWJlcl90aGlzX2NvbXB1dGVyJyksXG4gICAgICAgICAgICBkb3dubG9hZEJhY2t1cENvZGVzSW50cm86IHRoaXMucGx1Z2luLmdldFRleHQoJ2Rvd25sb2FkX2JhY2t1cF9jb2RlcycpLFxuICAgICAgICAgICAgc3VibWl0OiB0aGlzLnBsdWdpbi5nZXRUZXh0KCdzdWJtaXQnKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVuZGVyVmVyaWZpY2F0aW9uU2VjdGlvbigpO1xuICAgICAgICB0aGlzLndhaXRGb3JRUkltYWdlVG9SZW5kZXIoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLm9uQWZ0ZXJTY3JlZW5Mb2FkKHNjcmVlbk5hbWUsIGNhcHRpb24pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIud2FybihlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvcih0aGlzLnBsdWdpbi5nZXRUZXh0KCdhbl9lcnJvcl9oYXNfb2NjdXJyZWRfcGxlYXNlX3RyeV9hZ2Fpbl9sYXRlcicpIHx8ICdFcnJvcicpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJWZXJpZmljYXRpb25TZWN0aW9uKHVzaW5nQmFja3VwQ29kZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbjogSFRNTEVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1idXR0b24tc3VibWl0JylbMF07XG4gICAgICAgIGNvbnN0IHRiQ29kZTogSFRNTElucHV0RWxlbWVudCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctdGZhLWNvZGUtdGV4dGJveCcpWzBdIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGNiUmVtZW1iZXI6IEhUTUxJbnB1dEVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS1jb2RlLXJlbWVtYmVyLWNoZWNrYm94JylbMF0gYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgICAgdGJDb2RlLmZvY3VzKCk7XG5cbiAgICAgICAgYmluZEVudGVyS2V5KHRiQ29kZSwgc3VibWl0QnV0dG9uKTtcbiAgICAgICAgYmluZEVudGVyS2V5KGNiUmVtZW1iZXIsIHN1Ym1pdEJ1dHRvbik7XG4gICAgICAgIGJpbmRFbnRlcktleShzdWJtaXRCdXR0b24pO1xuXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHN1Ym1pdEJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0YkNvZGUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93RXJyb3IodGhpcy5wbHVnaW4uZ2V0VGV4dCgncGxlYXNlX2VudGVyX2FfdmFsaWRfY29kZScpLCBbdGJDb2RlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQ2xhc3NUb0VsZW1lbnQoc3VibWl0QnV0dG9uLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIHRoaXMuc2VuZFRmYUNvZGUodGJDb2RlLCBjYlJlbWVtYmVyLCBzdWJtaXRCdXR0b24sIHVzaW5nQmFja3VwQ29kZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgd2FpdEZvclFSSW1hZ2VUb1JlbmRlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltZ1dyYXBwZXIgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLXRmYS10b3RwLXFyY29kZScpO1xuICAgICAgICAgICAgaWYgKGltZ1dyYXBwZXJbMF0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSAoaW1nV3JhcHBlclswXSBhcyBIVE1MRWxlbWVudCkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGlmIChpbWdbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoaW1nWzBdLCAnbG9hZCcsIHJlc29sdmUpO1xuICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihpbWdbMF0sICdlcnJvcicsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHJlamVjdCgnVE9UUDogbWlzc2luZyBxckNvZGUgaW1hZ2UgZWxlbWVudCcpO1xuICAgICAgICAgICAgfSBlbHNlIHJlamVjdCgnVE9UUDogbWlzc2luZyBxckNvZGUgaW1hZ2UgZWxlbWVudCcpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBHU0Vycm9ycyB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb3JlL0dpZ3lhLkpzL2FwcC9HU0Vycm9yc1wiO1xuaW1wb3J0IHsgVGZhTW9kZSB9IGZyb20gXCIuLi9UZmFQbHVnaW5cIjtcbmltcG9ydCB7IEJhc2VUZmFQcm92aWRlciB9IGZyb20gXCIuLi9UZmFQcm92aWRlcnMvQmFzZVRmYVByb3ZpZGVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJhY2t1cENvZGVzTWFuYWdlciB7XG4gICAgZ2V0QmFja3VwQ29kZXMoKTogUHJvbWlzZTx7YmFja3VwQ29kZXM6IHN0cmluZ1tdfT47XG4gICAgZ2VuZXJhdGVOZXdDb2RlcygpOiBQcm9taXNlPHtiYWNrdXBDb2Rlczogc3RyaW5nW119PjtcbiAgICBwcmVwYXJlQmFja3VwQ29kZXNGb3JWaWV3KGJhY2t1cENvZGVzKToge2JhY2t1cENvZGVzOiBzdHJpbmdbXX07XG4gICAgcHJpbnRCYWNrdXBDb2RlcyhodG1sKTtcbn1cblxuZXhwb3J0IGNsYXNzIEJhY2t1cENvZGVzTWFuYWdlciBpbXBsZW1lbnRzIElCYWNrdXBDb2Rlc01hbmFnZXIge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRXhwZWN0ZWROdW1iZXJPZkJhY2t1cENvZGVzID0gOTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RmYVByb3ZpZGVyOiBCYXNlVGZhUHJvdmlkZXIpe31cblxuICAgIHB1YmxpYyBhc3luYyBnZXRCYWNrdXBDb2RlcygpOiBQcm9taXNlPHsgYmFja3VwQ29kZXM6IHN0cmluZ1tdIH0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgbmV3IFByb21pc2U8eyBiYWNrdXBDb2Rlczogc3RyaW5nW10gfT4ocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90ZmFQcm92aWRlci5wbHVnaW4uaW5pdFRmYSh0aGlzLl90ZmFQcm92aWRlci5uYW1lLCBUZmFNb2RlLmVkaXQsIGluaXRURkFSZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluaXRURkFSZXNwb25zZSAmJiBpbml0VEZBUmVzcG9uc2VbJ2Vycm9yQ29kZSddICE9PSBHU0Vycm9ycy5PSykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGdpZ3lhLmFjY291bnRzLnRmYS5iYWNrdXBjb2Rlcy5nZXQodGhpcy5fdGZhUHJvdmlkZXIucGFyYW1zLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiByZXNvbHZlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdlbmVyYXRlTmV3Q29kZXMoKTogUHJvbWlzZTx7IGJhY2t1cENvZGVzOiBzdHJpbmdbXSB9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZTx7IGJhY2t1cENvZGVzOiBzdHJpbmdbXSB9PihyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RmYVByb3ZpZGVyLnBsdWdpbi5pbml0VGZhKHRoaXMuX3RmYVByb3ZpZGVyLm5hbWUsIFRmYU1vZGUuZWRpdCwgaW5pdFRGQVJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5pdFRGQVJlc3BvbnNlICYmIGluaXRURkFSZXNwb25zZVsnZXJyb3JDb2RlJ10gIT09IEdTRXJyb3JzLk9LKSByZXR1cm47XG4gICAgICAgICAgICAgICAgZ2lneWEuYWNjb3VudHMudGZhLmJhY2t1cGNvZGVzLmNyZWF0ZSh0aGlzLl90ZmFQcm92aWRlci5wYXJhbXMsIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IHJlc29sdmUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHByZXBhcmVCYWNrdXBDb2Rlc0ZvclZpZXcoYmFja3VwQ29kZXM6IHN0cmluZ1tdKToge2JhY2t1cENvZGVzOiBzdHJpbmdbXX0ge1xuICAgICAgICBjb25zdCB0b3RhbFVzZWRDb2RlcyA9IEJhY2t1cENvZGVzTWFuYWdlci5FeHBlY3RlZE51bWJlck9mQmFja3VwQ29kZXMgLSBiYWNrdXBDb2Rlcy5sZW5ndGg7XG4gICAgICAgIGlmICh0b3RhbFVzZWRDb2RlcyA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxVc2VkQ29kZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGJhY2t1cENvZGVzLnVuc2hpZnQodGhpcy5fdGZhUHJvdmlkZXIucGx1Z2luLmdldFRleHQoJ2FscmVhZHlfdXNlZCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmFja3VwQ29kZXMucmVkdWNlPHtiYWNrdXBDb2Rlczogc3RyaW5nW119PigoYWNjLCBjb2RlLCBpKSA9PiB7XG4gICAgICAgICAgICBhY2NbYGJhY2t1cENvZGUke2kgKyAxfWBdID0gY29kZTtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIHt9IGFzIHtiYWNrdXBDb2Rlczogc3RyaW5nW119KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHJpbnRCYWNrdXBDb2RlcyhodG1sOiBzdHJpbmcpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjI1NTI5MS9wcmludC10aGUtY29udGVudHMtb2YtYS1kaXZcbiAgICAgICAgY29uc3QgcHJpbnRXaW5kb3cgPSB3aW5kb3cub3BlbignJywgJ19ibGFuaycpO1xuICAgICAgICBwcmludFdpbmRvdy5kb2N1bWVudC53cml0ZSgnPGh0bWw+PGhlYWQ+PHRpdGxlPicgKyB0aGlzLl90ZmFQcm92aWRlci5wbHVnaW4uZ2V0VGV4dCgnYmFja3VwX2NvZGVzJykgKyAnPC90aXRsZT4nKTtcbiAgICAgICAgcHJpbnRXaW5kb3cuZG9jdW1lbnQud3JpdGUoXG4gICAgICAgICAgICAnPHN0eWxlPmJvZHl7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1mYW1pbHk6YXJpYWx9dGFibGV7Ym9yZGVyOiAxcHggZGFzaGVkO21hcmdpbjowIGF1dG99dGR7cGFkZGluZzoxNXB4O2ZvbnQtc2l6ZToyMHB4O308L3N0eWxlPicsXG4gICAgICAgICk7XG4gICAgICAgIHByaW50V2luZG93LmRvY3VtZW50LndyaXRlKCc8L2hlYWQ+PGJvZHk+Jyk7XG4gICAgICAgIHByaW50V2luZG93LmRvY3VtZW50LndyaXRlKCc8aDM+JyArIHRoaXMuX3RmYVByb3ZpZGVyLnBsdWdpbi5nZXRUZXh0KCdjYW50X2FjY2Vzc191c2VfYmFja3VwX2NvZGVzJykgKyAnPC9oMz4nKTtcbiAgICAgICAgcHJpbnRXaW5kb3cuZG9jdW1lbnQud3JpdGUoaHRtbCk7XG4gICAgICAgIHByaW50V2luZG93LmRvY3VtZW50LndyaXRlKCc8aHI+Jyk7XG4gICAgICAgIHByaW50V2luZG93LmRvY3VtZW50LndyaXRlKCc8L2JvZHk+PC9odG1sPicpO1xuXG4gICAgICAgIHByaW50V2luZG93LmRvY3VtZW50LmNsb3NlKCk7IC8vIG5lY2Vzc2FyeSBmb3IgSUUgPj0gMTBcbiAgICAgICAgcHJpbnRXaW5kb3cuZm9jdXMoKTsgLy8gbmVjZXNzYXJ5IGZvciBJRSA+PSAxMCovXG5cbiAgICAgICAgcHJpbnRXaW5kb3cucHJpbnQoKTtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gcHJpbnRXaW5kb3cuY2xvc2UoKSwgMCk7IC8vIEZvciBtb2JpbGUgYnJvd3NlcnNcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlVGZhUHJvdmlkZXIgfSBmcm9tIFwiLi4vVGZhUHJvdmlkZXJzL0Jhc2VUZmFQcm92aWRlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudEJ5Q2xhc3NOYW1lPFQgZXh0ZW5kcyBIVE1MRWxlbWVudD4oY29udGFpbmVyLCBjbGFzc05hbWUpOiBUIHtcbiAgICByZXR1cm4gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyhjb250YWluZXIsIGNsYXNzTmFtZSlbMF0gYXMgVDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFjdGlvbkludGVydmFsKFxuICAgIHRmYVByb3ZpZGVyOiBCYXNlVGZhUHJvdmlkZXIsXG4gICAgYWN0aW9uOiAoY291bnQ/OiBudW1iZXIpID0+IFByb21pc2U8dm9pZD4sXG4gICAgaW50ZXJ2YWw6IG51bWJlcixcbiAgICBjYW5jZWxDb25kaXRpb246IChjb3VudD86IG51bWJlcikgPT4gYm9vbGVhbiA9ICgpID0+IGZhbHNlKSB7XG5cbiAgICBsZXQgY291bnQgPSAxO1xuICAgIGxldCBjYW5Db250aW51ZSA9IGZhbHNlO1xuICAgIGFjdGlvbihjb3VudCkudGhlbigoKSA9PiBjYW5Db250aW51ZSA9IHRydWUpO1xuXG4gICAgY29uc3QgcmVuZGVySW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblxuICAgICAgICBpZiAoY2FuY2VsQ29uZGl0aW9uKGNvdW50KSB8fCAhdGZhUHJvdmlkZXIuaXNBY3RpdmUoKSkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChyZW5kZXJJbnRlcnZhbElkKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNhbkNvbnRpbnVlKSB7XG4gICAgICAgICAgICBjYW5Db250aW51ZSA9IGZhbHNlO1xuICAgICAgICAgICAgYXdhaXQgYWN0aW9uKCsrY291bnQpO1xuICAgICAgICAgICAgY2FuQ29udGludWUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9LCBpbnRlcnZhbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kRW50ZXJLZXkoYnV0dG9uRWw6IEhUTUxFbGVtZW50KTtcbmV4cG9ydCBmdW5jdGlvbiBiaW5kRW50ZXJLZXkoaW5wdXRFbDogSFRNTEVsZW1lbnQsIGJ1dHRvbkVsOiBIVE1MRWxlbWVudCk7XG5leHBvcnQgZnVuY3Rpb24gYmluZEVudGVyS2V5KGVsMTogSFRNTEVsZW1lbnQsIGVsMj86IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgbGlzdGVuRWwgPSBlbDE7XG4gICAgY29uc3QgYnV0dG9uRWwgPSBlbDIgfHwgZWwxO1xuICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGxpc3RlbkVsLCAna2V5dXAnLCAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgLy8gU3VibWl0IG9uIEVOVEVSIGlmIGJ1dHRvbiBvciBsaXN0ZW5lciBlbGVtZW50LlxuICAgICAgICAvLyBTdWJtaXQgb24gU1BBQ0UgaWYgYnV0dG9uLlxuICAgICAgICBpZiAoKGV2ZW50LmNvZGUgPT09ICdTcGFjZScpIHx8IChldmVudC5jb2RlID09PSAnRW50ZXInICYmICFlbDIpIHx8IChldmVudC5rZXkgPT09ICdFbnRlcicpKSB7XG4gICAgICAgICAgICBidXR0b25FbC5jbGljaygpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgKiBhcyBHaWd5YV9QbHVnaW5zVGZhIGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9EZWZhdWx0Q3NzJztcbmltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNUZmFfMSBmcm9tICdzcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGVtcGxhdGVzJztcbmltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNUZmFfMiBmcm9tICdzcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGZhUGx1Z2luJztcbmltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNUZmFGYWN0b3J5IGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQcm92aWRlckZhY3RvcnknO1xuaW1wb3J0ICogYXMgR2lneWFfUGx1Z2luc1RmYVByb3ZpZGVycyBmcm9tICdzcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGZhUHJvdmlkZXJzL0Jhc2VUZmFQcm92aWRlcic7XG5pbXBvcnQgKiBhcyBHaWd5YV9QbHVnaW5zVGZhUHJvdmlkZXJzXzEgZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVByb3ZpZGVycy9FbWFpbFRmYVByb3ZpZGVyJztcbmltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNUZmFQcm92aWRlcnNfMiBmcm9tICdzcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlRmYS9hcHAvVGZhUHJvdmlkZXJzL0dpZ3lhUGhvbmVQcm92aWRlcic7XG5pbXBvcnQgKiBhcyBHaWd5YV9QbHVnaW5zVGZhUHJvdmlkZXJzXzMgZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVByb3ZpZGVycy9MaXZlTGlua1Bob25lUHJvdmlkZXInO1xuaW1wb3J0ICogYXMgR2lneWFfUGx1Z2luc1RmYVByb3ZpZGVyc180IGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uVGZhL2FwcC9UZmFQcm92aWRlcnMvUGhvbmVUZmFQcm92aWRlcic7XG5pbXBvcnQgKiBhcyBHaWd5YV9QbHVnaW5zVGZhUHJvdmlkZXJzXzUgZnJvbSAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5UZmEvYXBwL1RmYVByb3ZpZGVycy9Ub3RwVGZhUHJvdmlkZXInO1xuXG5kZWNsYXJlIGNvbnN0IGdpZ3lhOiBhbnk7XG5pZiAoIWdpZ3lhLl8pIHtcbiAgICBnaWd5YS5fID0ge307XG59XG5pZiAoIWdpZ3lhLl8ucGx1Z2lucykge1xuICAgIGdpZ3lhLl8ucGx1Z2lucyA9IHt9O1xufVxuaWYgKCFnaWd5YS5fLnBsdWdpbnMudGZhKSB7XG4gICAgZ2lneWEuXy5wbHVnaW5zLnRmYSA9IHt9O1xufVxuaWYgKCFnaWd5YS5fLnBsdWdpbnMudGZhLmZhY3RvcnkpIHtcbiAgICBnaWd5YS5fLnBsdWdpbnMudGZhLmZhY3RvcnkgPSB7fTtcbn1cbmlmICghZ2lneWEuXy5wbHVnaW5zLnRmYS5wcm92aWRlcnMpIHtcbiAgICBnaWd5YS5fLnBsdWdpbnMudGZhLnByb3ZpZGVycyA9IHt9O1xufVxuXG5PYmplY3QuYXNzaWduKGdpZ3lhLl8ucGx1Z2lucy50ZmEsIEdpZ3lhX1BsdWdpbnNUZmEsIEdpZ3lhX1BsdWdpbnNUZmFfMSwgR2lneWFfUGx1Z2luc1RmYV8yKTtcbk9iamVjdC5hc3NpZ24oZ2lneWEuXy5wbHVnaW5zLnRmYS5mYWN0b3J5LCBHaWd5YV9QbHVnaW5zVGZhRmFjdG9yeSk7XG5PYmplY3QuYXNzaWduKFxuICAgIGdpZ3lhLl8ucGx1Z2lucy50ZmEucHJvdmlkZXJzLFxuICAgIEdpZ3lhX1BsdWdpbnNUZmFQcm92aWRlcnMsXG4gICAgR2lneWFfUGx1Z2luc1RmYVByb3ZpZGVyc18xLFxuICAgIEdpZ3lhX1BsdWdpbnNUZmFQcm92aWRlcnNfMixcbiAgICBHaWd5YV9QbHVnaW5zVGZhUHJvdmlkZXJzXzMsXG4gICAgR2lneWFfUGx1Z2luc1RmYVByb3ZpZGVyc180LFxuICAgIEdpZ3lhX1BsdWdpbnNUZmFQcm92aWRlcnNfNSxcbik7XG5cbmdpZ3lhLl8uVUkuYXR0YWNoUGx1Z2luKEdpZ3lhX1BsdWdpbnNUZmFfMi5UZmFQbHVnaW4sICdhY2NvdW50cycsICd0ZmEnLCAnc2hvd1RmYVVJJyk7XG5cblxuZXhwb3J0IGNvbnN0IFRUZmFQbHVnaW4gPSBHaWd5YV9QbHVnaW5zVGZhXzIuVGZhUGx1Z2luO1xuZXhwb3J0IGNvbnN0IFRmYVJlc291cmNlcz0gZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5odG1sLnRmYTtcbmV4cG9ydCBjb25zdCBUZmFDc3M9IGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuY3NzLnRmYTtcblxuIFxuZXhwb3J0IGRlZmF1bHQgZ2lneWEuXy5wbHVnaW5zLnRmYTsiLCJleHBvcnQgZW51bSBFZGl0YWJsZVRmYVByb3ZpZGVyc1R5cGVzIHtcbiAgICBnaWd5YVBob25lLFxuICAgIGdpZ3lhVG90cCxcbiAgICBnaWd5YVB1c2gsXG4gICAgbGl2ZWxpbmssXG59XG5leHBvcnQgY29uc3QgZ2lneWFBc3NlcnRpb25FeHBpcmF0aW9uID0gNjAgKiA1ICogMTAwMDtcbmV4cG9ydCBjb25zdCBzZW5zaXRpdmVQYXJhbXNPdmVycmlkZSA9ICdsb2dpbl90b2tlbic7XG5cbmV4cG9ydCBjb25zdCBHSUdZQV9QQVJBTV9QUkVGSVggPSAnZ2lnXydcblxuZXhwb3J0IGNvbnN0IEdJR1lBX0lOVEVSTkFMX1BBUkFNX1BSRUZJWCA9IGAke0dJR1lBX1BBUkFNX1BSRUZJWH1pX2BcblxuZXhwb3J0IGNvbnN0IEdJR1lBX0lOVEVSTkFMX1BBUkFNUyA9IGAke0dJR1lBX1BBUkFNX1BSRUZJWH1hY3Rpb25zYFxuIiwiZXhwb3J0IGNvbnN0IGVudW0gR1NFcnJvcnMge1xuICAgIE9LID0gMCxcbiAgICBEYXRhX1BlbmRpbmcgPSAxMDAwMDEsIC8vIERhdGEgaXMgc3RpbGwgYmVpbmcgcHJvY2Vzc2VkLCBxdWVyeSBhZ2FpbiBmb3IgdGhlIHJlc3BvbnNlXG4gICAgTkVUV09SS19FUlJPUiA9IDUwMDAyNixcbiAgICBEQVRBX1BFTkRJTkcgPSAxMDAwMDEsIC8vIERhdGEgaXMgc3RpbGwgYmVpbmcgcHJvY2Vzc2VkLCBxdWVyeSBhZ2FpbiBmb3IgdGhlIHJlc3BvbnNlXG4gICAgT1BFUkFUSU9OX0NBTkNFTEVEID0gMjAwMDAxLCAvLyB1c2VyIGNhbmNlbGVkLCBpbiBsb2dpbiBwcm9jZXNzXG4gICAgUEVSTUlTU0lPTl9HUkFOVEVEID0gMjAwMDAyLCAvLyBJbm5lciBjb2RlXG4gICAgUEVSTUlTU0lPTl9OT1RfR1JBTlRFRCA9IDIwMDAwMywgLy8gSW5uZXIgY29kZVxuICAgIFJFRElSRUNUID0gMjAwMDA0LCAvLyBJbm5lciBjb2RlXG4gICAgTkVXX1VTRVIgPSAyMDAwMDUsIC8vIElubmVyIGNvZGVcbiAgICBPUEVSQVRJT05fRE9ORSA9IDIwMDAwNiwgLy8gSW5uZXIgY29kZVxuICAgIFVQREFURV9VU0VSID0gMjAwMDA3LCAvLyBJbm5lciBjb2RlXG4gICAgT0tfV0lUSF9FUlJPUlMgPSAyMDAwMDgsIC8vIEZvciByZXBvcnRzIC0gd2hlbiB3ZSByZXR1cm4gb2sgdG8gY2xpZW50IGJ1dCBoYWQgYWNjZXB0YWJsZSBlcnJvcnMgKHRoYXQgd2Ugd2FudCB0byBrbm93IGFib3V0KSBvbiB0aGUgd2F5XG4gICAgQUNDT1VOVFNfTElOS0VEID0gMjAwMDA5LCAvLyBBZnRlciBsaW5raWduIGFjY291dG5zIHZpYSBsb2dpbiwgcmV0dXJuIHRoaXMgZXJyb3IgY29kZVxuICAgIE9LX1dJVEhfRVJST1JfTE9HSU5fSURFTlRJRklFUl9FWElTVFMgPSAyMDAwMTAsIC8vIEZvciBzZXRBY2NvdW50SW5mbyB1c2luZyB0aGUgY29uZmxpY3RIYW5kbGluZyBwYXJhbSAtIHByb2ZpbGUgd2FzIHNhdmVkLCBidXQgdGhlIGVtYWlsIGNvbmZsaWN0cyB3aXRoIGFub3RoZXIgdXNlclxuICAgIEFDQ09VTlRfUEVORElOR19SRUdJU1RSQVRJT04gPSAyMDYwMDEsIC8vIEZvciBhY2NvdW50cyBBUEksXG4gICAgQUNDT1VOVF9QRU5ESU5HX1ZFUklGSUNBVElPTiA9IDIwNjAwMiwgLy8gRm9yIGFjY291bnRzIEFQSTsgY29uc2lkZXIgbW92aW5nIHRvIDQwM3h4eCBzZWN0aW9uIGluIHRoZSBmdXR1cmUuXG4gICAgQUNDT1VOVF9NSVNTSU5HX0xPR0lOSUQgPSAyMDYwMDMsIC8vIEZvciBhY2NvdW50cyBBUElcbiAgICBJREVOVElUWV9BTFJFQURZX0FTU0lHTkVEID0gMjA2MDA0LCAvLyBGb3IgaW1wb3J0IGFjY291bnRzIEFQSVxuICAgIEFGVEVSX0VNQUlMX1ZFUklGSUNBVElPTiA9IDIwNjAwNSxcbiAgICBQRU5ESU5HX0NPREVfVkVSSUZJQ0FUSU9OID0gMjA2MDA2LFxuICAgIENMSUVOVF9MT0cgPSAzMDAwMDEsIC8vIGludGVybmFsLCBmb3IgcmVwb3J0aW5nIGVyb3JycyBpbiBjbGllbnQgU0RLU1xuICAgIElOVkFMSURfREFUQV9DRU5URVIgPSAzMDEwMDEsIC8vIFwiSW52YWxpZCBkYXRhLWNlbnRlclwiLiB3aXRoIGVycm9yIGRldGFpbHMgb2Y6IFwiVGhpcyBBUEkga2V5IGlzIHNlcnZlZCBieSBhbm90aGVyIGRhdGEgY2VudGVyXCIuXG4gICAgSU5WQUxJRF9SRVFVRVNUX0ZPUk1BVCA9IDQwMDAwMSwgLy8gY291bGQgYmUgYWxsIGtpbmQgb2YgZXJyb3JzIHdpdGggd3JvbmcgcmVxdWVzdCAobm9uIHNlY3VyZSB3aGVuIHNob3VsZCBiZSBzZWN1cmUsIHdyb25nIGF1dGhlbnRpY2F0aW9uIGhlYWRlcilcbiAgICBNSVNTSU5HX1JFUVVJUkVEX1BBUkFNRVRFUiA9IDQwMDAwMixcbiAgICBVTklRVUVfSURFTlRJRklFUl9FWElTVFMgPSA0MDAwMDMsXG4gICAgSU5WQUxJRF9QQVJBTUVURVJfRk9STUFUID0gNDAwMDA0LFxuICAgIElOVkFMSURfUEFSQU1FVEVSX1ZBTFVFID0gNDAwMDA2LFxuICAgIERVUExJQ0FURV9WQUxVRSA9IDQwMDAwNyxcbiAgICBJTlZBTElEX0FVVEhFTlRJQ0FUSU9OX0hFQURFUiA9IDQwMDAwOCwgLy8gT0F1dGgyXG4gICAgVkFMSURBVElPTl9FUlJPUiA9IDQwMDAwOSwgLy8gSW4gYWNjb3VudHMucmVnaXN0ZXIsIHdoZW5ldmVyIHRoZXJlIGlzIGEgdmFsaWRhdGlvbiBlcnJvclxuICAgIElOVkFMSURfUkVESVJFQ1RfVVJJID0gNDAwMDExLCAvLyBPQXV0aDJcbiAgICBJTlZBTElEX1JFU1BPTlNFX1RZUEUgPSA0MDAwMTIsIC8vIE9BdXRoMlxuICAgIFVOU1VQUE9SVEVEX0dSQU5UX1RZUEUgPSA0MDAwMTMsIC8vIE9BdXRoMlxuICAgIElOVkFMSURfR1JBTlQgPSA0MDAwMTQsIC8vIE9BdXRoMlxuICAgIENPREVfRVhQSVJFRCA9IDQwMDAxNSwgLy8gT0F1dGgyXG4gICAgU0NIRU1BX1ZBTElEQVRJT05fRkFJTEVEID0gNDAwMDIwLFxuICAgIENBUFRDSEFfVkVSSUZJQ0FUSU9OX0ZBSUxFRCA9IDQwMDAyMSxcbiAgICBVTklRVUVfSU5ERVhfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyMixcbiAgICBJTlZBTElEX1RZUEVfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyMyxcbiAgICBEWU5BTUlDX0ZJRUxEU19WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI0LFxuICAgIFdSSVRFX0FDQ0VTU19WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI1LFxuICAgIElOVkFMSURfRk9STUFUX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjYsXG4gICAgUkVRVUlSRURfVkFMVUVfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyNyxcbiAgICBFTUFJTF9OT1RfVkVSSUZJRUQgPSA0MDAwMjgsXG4gICAgU0NIRU1BX0NPTkZMSUNUX0VSUk9SID0gNDAwMDI5LCAvLyBUbyBoYW5kbGUgVXNlciBzdG9yeSAzNDMzMC4gSW1wcm92ZSBFbGFzdGljU2VhcmNoTWFwcGluZ0V4Y2VwdGlvbiBoYW5kbGluZyBpbiBEUy5JbmRleE9iamVjdFxuICAgIE9QRVJBVElPTl9OT1RfQUxMT1dFRCA9IDQwMDAzMCwgLy8gVXNlciBzdG9yeSAzNDMxMSAtIElmIGFkZENvbm5lY3Rpb24gaXMgY2FsbGVkIHJldHVybiBhbiBlcnJvciAoXCJvcGVyYXRpb24gbm90IGFsbG93ZWQgZm9yIHRoaXMgYWNjb3VudFwiLCA0MDBYWFggZXJyb3IpLlxuICAgIFNFQ1VSSVRZX1ZFUklGSUNBVElPTl9GQUlMRUQgPSA0MDAwNTAsXG4gICAgSU5WQUxJRF9BUElLRVlfUEFSQU1FVEVSID0gNDAwMDkzLFxuICAgIE5PVF9TVVBQT1JURUQgPSA0MDAwOTYsIC8vIHRoZSBmdW5jdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGJ5IGFueSBvZiB0aGUgY3VycmVudGx5IGNvbm5lY3RlZCBwcm92aWRlcnNcbiAgICBVTlNVUFBPUlRFRF9VU0VSX0FHRU5UID0gNDAwMDk3LCAvL1xuICAgIE5PX1BST1ZJREVSUyA9IDQwMDEwMCwgLy8gY2xpZW50P1xuICAgIFBPUFVQX0JMT0NLRUQgPSA0MDAxMDEsIC8vIGNsaWVudFxuICAgIElOVkFMSURfRVZFTlRfSEFORExFUiA9IDQwMDEwMiwgLy8gY2xpZW50XG4gICAgSU5WQUxJRF9DT05UQUlORVJJRCA9IDQwMDEwMywgLy8gY2xpZW50XG4gICAgTk9UX0NPTk5FQ1RFRCA9IDQwMDEwNiwgLy8gdXNlciBpcyBub3QgY29ubmVjdGVkIHRvIHRoZSByZXF1aXJlZCBuZXR3b3JrIG9yIHRvIGFueSBuZXR3b3JrXG4gICAgSU5WQUxJRF9TSVRFX0RPTUFJTiA9IDQwMDEyMCwgLy8gdGhlIGN1cnJlbnQgZG9tYWluIGRvZXMgbm90IG1hdGNoIHRoZSBkb21haW4gY29uZmlndXJlZCBmb3IgdGhlIGFwaSBrZXlcbiAgICBQUk9WSURFUl9DT05GSUdVUkFUSU9OX0VSUk9SID0gNDAwMTIyLCAvLyB0aGUgY3VycmVudCBkb21haW4gZG9lcyBub3QgbWF0Y2ggdGhlIGRvbWFpbiBjb25maWd1cmVkIGZvciB0aGUgYXBpIGtleVxuICAgIExJTUlUX1JFQUNIRUQgPSA0MDAxMjQsIC8vIEdhbWVNZWNoYW5pY3MgLSBDYXAgd2FzIHJlYWNoZWRcbiAgICBGUkVRVUVOQ1lfTElNSVRfUkVBQ0hFRCA9IDQwMDEyNSwgLy8gQ29tbWVudHMvRmVlZCAtIFNwYW0gQ2FwcyB3YXMgcmVhY2hlZFxuICAgIElOVkFMSURfQUNUSU9OID0gNDAwMTI2LCAvLyBHYW1lTWVjaGFuaWNzIC0gSW52YWxpZCBhY3Rpb24uIFRyaWdnZXJlZCBhY3Rpb24gY2FuJ3QgYmUgaW5pdGlhdGVkIGV4dGVybmFsbHlcbiAgICBJTlNVRkZJQ0lFTlRfUE9JTlRTX1RPX1JFREVFTSA9IDQwMDEyNywgLy8gR2FtZU1lY2hhbmljcyAtIEluc3VmZmljaWVudF9wb2ludHNfdG9fcmVkZWVtXG4gICAgU0lHTkFUVVJFX1RJTUVTVEFNUF9FWFBJUkVEID0gNDAwMTI4LCAvLyB0aGUgdGltZXN0YW1wIGluc2lkZSB0aGUgc2lnbmF0dXJlIGlzIGV4cGlyZWRcbiAgICBFcnJvcl9EdXJpbmdfRXh0ZW5zaW9uc19PcGVyYXRpb24gPSA0MDAzMDIsXG4gICAgRXh0ZW5zaW9uX1BvaW50X0N1c3RvbV9FcnJvciA9IDQwMDMwMywgLy8gRXh0ZW5zaW9uIHBvaW50IHJldHVybiBhIHVzZXJGYWNpbmdFcnJvck1lc3NhZ2VcbiAgICBJTlZBTElEX1BPTElDWV9DT05GSUdVUkFUSU9OID0gNDAxMDAwLCAvLyBQb2xpY3kgY29uZmlndXJhdGlvbiBpcyBpbnZhbGlkIChpLmUuIHByZXZlbnQgcmVnaXRyYXRpb24pXG4gICAgU1VTUEVDVEVEX1NQQU0gPSA0MDEwMTAsIC8vIFNvbWVvbmUgaXMgdHJ5aW5nIHRvIHVzZSBHaWd5YSB0byBzZW5kIGEgZW1haWwgd2l0aCBhIFVSTCB0aGF0IGRvZXMgbm90IG1hdGNoIGFueSBvZiB0aGUgY2xpZW50J3MgZG9tYWluczsgc3VzcGVjdGVkIHNwYW0uXG4gICAgTE9HSU5fRkFJTEVEX0NBUFRDSEFfUkVRVUlSRUQgPSA0MDEwMjAsIC8vIGFjY291bnRzLmxvZ2luIC0gY2FwdGNoYSByZXF1aXJlZFxuICAgIFJFUVVFU1RfRkFJTEVEX0NBUFRDSEFfUkVRVUlSRUQgPSA0MDEwMjMsIC8vIGFjY291bnRzLmxvZ2luIC0gY2FwdGNoYSByZXF1aXJlZFxuICAgIExPR0lOX0ZBSUxFRF9XUk9OR19DQVBUQ0hBID0gNDAxMDIxLCAvLyBhY2NvdW50cy5sb2dpbiAtIHdyb25nIGNhcHRjaGEgY29kZVxuICAgIE9MRF9QQVNTV09SRF9VU0VEID0gNDAxMDMwLCAvLyBUaGUgdXNlciBwcm92aWRlZCBoaXMgcHJldmlvdXMgcGFzc3dvcmQsIG5vdCB0aGUgY3VycmVudCBvbmVcbiAgICBGT1JCSURERU4gPSA0MDMwMDAsXG4gICAgSU5WQUxJRF9TRVNTSU9OX1RPS0VOID0gNDAzMDAxLCAvLyBpbnRlcm5hbFxuICAgIFJFUVVFU1RfSEFTX0VYUElSRUQgPSA0MDMwMDIsIC8vIHRoZSB0aW1lc3RhbXAgb3IgZXhwaXJhdGlvbiBvZiB0aGUgdG9rZW4gdXNlZCBleGNlZWRlZCB0aGUgYWxsb3dlZCB0aW1lIHdpbmRvd1xuICAgIElOVkFMSURfUkVRVUVTVF9TSUdOQVRVUkUgPSA0MDMwMDMsXG4gICAgRFVQTElDQVRFX05PTkNFID0gNDAzMDA0LFxuICAgIFVOQVVUSE9SSVpFRF9VU0VSID0gNDAzMDA1LCAvLyB0aGUgdXNlciBpZCBwYXNzZWQgaXMgbm90IHZhbGlkIGZvciB0aGlzIHNpdGVcbiAgICBTRU5TSVRJVkVfREFUQV9TRU5UX09WRVJfSFRUUCA9IDQwMzAwNiwgLy8gd2hlbiBzZW5kaW5nIHRoZSBzZWNyZXQga2V5IGluIFJFU1QgaXQgaGFzIHRvIGJlIG92ZXIgSFRUUFNcbiAgICBQRVJNSVNTSU9OX0RFTklFRCA9IDQwMzAwNywgLy8gQ29tbWVudHMgc2VydmVyIC0gUGVybWlzc2lvbiBkZW5pZWQgKHJlYWRPbmx5LG1vZGVyYXRpb24gc2l0ZSkuXG4gICAgSU5WQUxJRF9PUEVOSURfVVJMID0gNDAzMDA4LCAvLyBjYW5ub3QgZmluZCBhbiBvcGVuSWQgZW5kcG9pbnQgb24gdGhlIHVybCBvciB1c2VybmFtZSBnaXZlbiBmb3Igb3BlbklkIGxvZ2luXG4gICAgUFJPVklERVJfU0VTU0lPTl9FWFBJUkVEID0gNDAzMDA5LCAvLyB0aGUgdXNlciBzZXNzaW9uIGZvciB0aGlzIHByb3ZpZGVyIGlzIGV4cGlyZWRcbiAgICBJTlZBTElEX1NFQ1JFVCA9IDQwMzAxMCwgLy8gdGhlIHJlcXVlc3QgaGFzIGFuIGludmFsaWQgc2VjcmV0IGtleVxuICAgIFNFU1NJT05fSEFTX0VYUElSRUQgPSA0MDMwMTEsIC8vIHRoZSBzZXNzaW9uIGZvciB0aGlzIHVzZXIgaGFzIGV4cGlyZWRcbiAgICBOT19WQUxJRF9TRVNTSU9OID0gNDAzMDEyLCAvLyByZXF1ZXN0ZWQgdXNlciBoYXMgbm8gdmFsaWQgc2Vzc2lvblxuICAgIFVOVkVSSUZJRURfVVNFUiA9IDQwMzAxMywgLy8gdGhlIHVzZXIgaXMgbm90IHZlcmlmaWVkIGluIFNTTyBzZXNzaW9uXG4gICAgTUlTU0lOR19SRVFVRVNUX1JFRkVSUkVSID0gNDAzMDE1LCAvLyB3ZSBjYW4ndCB2YWxpZGF0ZSB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSByZWZlcnJlciBoZWFkZXIgaXMgbWlzc2luZ1xuICAgIFVORVhQRUNURURfUFJPVklERVJfVVNFUiA9IDQwMzAxNywgLy8gdGhlIGxvZ2dlZCBpbiB1c2VyIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBvbmUgZXhwZWN0ZWRcbiAgICBQRVJNSVNTSU9OX05PVF9SRVFVRVNURUQgPSA0MDMwMjIsIC8vIHRoZSBhY3Rpb24gbmVlZHMgYSB1c2VyIHBlcm1pc3Npb24gYW5kIGl0IHdhcyBub3QgcmVxdWVzdGVkXG4gICAgTk9fVVNFUl9QRVJNSVNTSU9OID0gNDAzMDIzLCAvLyB0aGUgYWN0aW9uIG5lZWRzIGEgdXNlciBwZXJtaXNzaW9uIGFuZCB3ZSBkb24ndCBoYXZlIG9uZVxuICAgIFBST1ZJREVSX0xJTUlUX1JFQUNIRUQgPSA0MDMwMjQsIC8vIHRoZSBwcm92aWRlciBsaW1pdCBmb3IgdGhpcyBhY3Rpb24gd2FzIGV4Y2VlZGVkXG4gICAgSU5WQUxJRF9UT0tFTiA9IDQwMzAyNSwgLy8gT0F1dGgyXG4gICAgVU5BVVRIT1JJWkVEX0FDQ0VTU19FUlJPUiA9IDQwMzAyNiwgLy8gQ2FsbHMgdG8gYWNjb3VudHMuaXNBdmFpbGFibGVMb2dpbklEIFdoZW4gcHJldmVudExvZ2luSURIYXJ2ZXN0aW5nID0gdHJ1ZSBzaG91bGQgcmV0dXJuIGFuIGFwcHJvcHJpYXRlIDQwM3h4eCB1bmF1dGhvcml6ZWQgYWNjZXNzIGVycm9yLlxuICAgIERJRkZFUkVOVF9VU0VSX0ZPUl9SRUFVVEggPSA0MDMwMjcsIC8vIERpZmZlcmVudCB1c2VyIHRyaWVkIHRvIHJlLWF1dGhvcml6ZS5cbiAgICBTRVNTSU9OX0VYUElSRURfUkVUUlkgPSA0MDMwMzAsIC8vIElubmVyIGNvZGUgLSB3aGVuIHRoZSBmYWNlYm9vayBzZXNzaW9uIGlzIGV4cGlyZWQgYW5kIHRoZSBjbGllbnQgd2FpdHMgZm9yIEZCIG9uIHBhZ2UgdG8gbG9hZFxuICAgIEFQUFJPVkVEX0JZX01PREVSQVRPUiA9IDQwMzAzMSwgLy8gY29tbWVudHMgLSBjYW50IGZsYWcgY29tbWVudCwgaXQgd2FzIGFwcHJvdmVkIGJ5IHRoZSBtb2RlcmF0b3IgYWxyZWFkeS5cbiAgICBUT0tFTl9IQVNfUkVORVdFRCA9IDQwMzAzMiwgLy8gdGhlIHRva2VuIGlzIG5vIGxvbmdlciB2YWxpZCwgYnV0IHdlIGhhdmUgbmV3IHRva2VuIHRvIHByb3ZpZGVcbiAgICBOT19VU0VSX0NPT0tJRSA9IDQwMzAzNSwgLy8gbm8gdXNlciBjb29raWVcbiAgICBVTkFVVEhPUklaRURfUEFSVE5FUiA9IDQwMzAzNiwgLy8gcGFydG5lciBpcyBkaXNhYmxlZFxuICAgIFBPU1RfREVOSUVEID0gNDAzMDM3LCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBQb3N0IGRlbmllZCB3aGVuIHRoZSB1c2VyIHRyaWVkIHRvIHJldmlldyB0d2ljZS5cbiAgICBOT19MT0dJTl9USUNLRVQgPSA0MDMwNDAsIC8vIG5vIGxvZ2luIHRpY2tldCBpbiBjYWxsYmFjayB1cmxcbiAgICBBQ0NPVU5UX0RJU0FCTEVEID0gNDAzMDQxLCAvLyBGb3IgYWNjb3VudHMgLSB3aGVuIGdzLmFjY291bnRzLklzQWN0aXZlPWZhbHNlXG4gICAgSU5WQUxJRF9MT0dJTklEID0gNDAzMDQyLCAvLyBGb3IgYWNjb3VudHMgLSB3aGVuIHRyeWluZyB0byBsb2dpbiB3aXRoIGEgbG9naW5JRCB0aGF0IGRvIG5vdCBleGlzdHNcbiAgICBMT0dJTl9JREVOVElGSUVSX0VYSVNUUyA9IDQwMzA0MywgLy8gRm9yIGFjY291bnQ6IElmIHByb3ZpZGVyRW1haWwgaXMgZGVmaW5lZCBhcyBhIGxvZ2luSWRlbnRpZmllciBpbiB0aGUgcG9saWN5LCBhbmQgdGhlIGVtYWlsIGFkZHJlc3MgcmVjZWl2ZWQgZnJvbSB0aGUgcHJvdmlkZXIgZXhpc3RzIGluIHRoZSBncy5sb2dpbklkZW50aWZpZXJzIGNvbGxlY3Rpb24gYnV0IGFzc29jaWF0ZWQgd2l0aCBhIGRpZmZlcmVudCBVVUlEIHRoYW4gdGhlIGN1cnJlbnQgdXNlciwgdGhlbiByZXR1cm4gXCJMb2dpbiBpZGVudGlmaWVyIGV4aXN0c1wiIGVycm9yIGNvZGUgKDQwM3h4eCkuXG4gICAgVU5ERVJBR0VfVVNFUiA9IDQwMzA0NCwgLy8gRm9yIENPUFBBIGNvbXBsaWFuY2UgKENoaWxkcmVuJ3MgT25saW5lIFByaXZhY3kgUHJvdGVjdGlvbiBBY3QpXG4gICAgSU5WQUxJRF9TSVRFX0NPTkZJR1VSQVRJT05fRVJST1IgPSA0MDMwNDUsIC8vIEZvciBhY2NvdW50cyAtIHNpdGUgRFMgaXMgZW5hYmxlZCB0aG91Z2ggbm8gRFNTaXplIHdhcyBjb25maWd1cmVkLlxuICAgIExPR0lOSURfRE9FU19OT1RfRVhJU1QgPSA0MDMwNDcsIC8vIEZvciBhY2NvdW50cyAtIHdoZW4gdHJ5aW5nIHRvIHJlc2V0IHBhc3N3b3JkIHdpdGggYSBsb2dpbklEIHRoYXQgZG8gbm90IGV4aXN0c1xuICAgIEFQSV9SQVRFX0xJTUlUX0VYQ0VFREVEID0gNDAzMDQ4LFxuICAgIFBFTkRJTkdfUEFTU1dPUkRfQ0hBTkdFID0gNDAzMTAwLCAvLyBUaGUgdXNlcidzIHBhc3N3b3JkIG5lZWRzIHRvIGJlIGNoYW5nZWRcbiAgICBBQ0NPVU5UX1BFTkRJTkdfVEZBX1ZFUklGSUNBVElPTiA9IDQwMzEwMSxcbiAgICBBQ0NPVU5UX1BFTkRJTkdfVEZBX1JFR0lTVFJBVElPTiA9IDQwMzEwMixcbiAgICBBQ0NPVU5UX1BFTkRJTkdfUkVDRU5UX0xPR0lOID0gNDAzMTEwLFxuICAgIEFDQ09VTlRfVEVNUE9SQVJJTFlfTE9DS0VEX09VVCA9IDQwMzEyMCwgLy8gVG9vIG1hbnkgbG9naW4gYXR0ZW1wdHM7IGFjY291bnQgbG9ja2VkLW91dFxuICAgIFJFRFVOREFOVF9PUEVSQVRJT04gPSA0MDMyMDAsIC8vIFRoZSBjbGllbnQgcGVyZm9ybWVkIGFuIG9wZXJhdGlvbiB0aGF0IGlzIHJlZHVuZGFudFxuICAgIElOVkFMSURfQVBQTElDQVRJT05fSUQgPSA0MDMyMDEsIC8vIFRoZSBhcHAgaWQgcHJvdmlkZWQgaXMgZGlmZmVyZW50IHRoYW4gdGhlIG9uZSBjb25maWd1cmVkIGZvciB0aGUgc2l0ZVxuICAgIE5PVF9GT1VORCA9IDQwNDAwMCwgLy8gQ29tbWVudHMgc2VydmVyIC0gQ2F0ZWdvcnkgbm90IGZvdW5kLiBBY2NvdW50cyAtIGVtYWlsIHZlcmlmaWNhdGlvbiBmYWlsZWQsIHV1aWQgbm90IGZvdW5kLlxuICAgIEZSSUVORF9OT1RfRk9VTkQgPSA0MDQwMDEsIC8vIHRoZSB1c2VyIGlkIHByb3ZpZGVkIGFzIGEgdGFyZ2V0IGlzIG5vdCBhIGZyaWVuZCBmb3IgdGhlIGN1cnJlbnQgdXNlclxuICAgIENBVEVHT1JZX05PVF9GT1VORCA9IDQwNDAwMiwgLy8gQ29tbWVudHMgc2VydmVyIC0gQ2F0ZWdvcnkgbm90IGZvdW5kLlxuICAgIFVJRF9OT1RfRk9VTkQgPSA0MDQwMDMsXG4gICAgUkVTT1VSQ0VfTk9UX0ZPVU5EID0gNDA0MDA0LCAvLyBDbGllbnQgc2lkZSAtIGltYWdlIG5vdCBmb3VuZCBhZnRlciB1cGxvYWRcbiAgICBJTlZBTElEX0FQSV9NRVRIT0QgPSA0MDUwMDEsIC8vIGludGVybmFsIGZvciBvdXIgSlMgQVBJXG4gICAgSURFTlRJVFlfRVhJU1RTID0gNDA5MDAxLCAvLyB3aGVuIHRyeWluZyB0byBjb25uZWN0IHRvIGEgcHJvdmlkZXIgdGhhdCBpcyBhbHJlYWR5IGNvbm5lY3RlZCBvciBsaW5rIHRvIGFuIGFscmVhZHkgbGlua2VkIGFjY291bnRcbiAgICBHT05FID0gNDEwMDAwLCAvLyBSZXNvdXJjZSBubyBsb25nZXIgYXZhaWxhYmxlLiBEYXRhIEtleSBTZXJ2ZXIgLSBrZXkgcmV2b2tlZC9leHBpcmVkLlxuICAgIFJFUVVFU1RfRU5USVRZX1RPT19MQVJHRSA9IDQxMzAwMSwgLy8gQ29tbWVudHMgc2VydmVyIC0gUmVxdWVzdCB0byBsYXJnZVxuICAgIENPTU1FTlRfVEVYVF9UT09fTEFSR0UgPSA0MTMwMDIsIC8vIENvbW1lbnRzIHNlcnZlciAtIENvbW1lbnQgVGV4dCB0byBsYXJnZS5cbiAgICBPQkpFQ1RfVE9PX0xBUkdFID0gNDEzMDAzLCAvLyBEYXRhU3RvcmUgb2JqZWN0IGlzIHRvbyBsYXJnZVxuICAgIFBST0ZJTEVfUEhPVE9fVE9PX0xBUkdFID0gNDEzMDA0LCAvLyBQcm9maWxlIHBob3RvIGlzIHRvbyBsYXJnZSwgZXhjZWVkcyBtYXhpbXVtIGFsbG93ZWQgY29udGVudCBsZW5ndGhcbiAgICBSRVFVRVNUX1VSSV9UT09fTE9ORyA9IDQxNDAwMCwgLy9UaGUgVVJJIHByb3ZpZGVkIHdhcyB0b28gbG9uZyBmb3IgdGhlIHNlcnZlciB0byBwcm9jZXNzLlxuICAgIE1JU1NJTkdfVVNFUl9QSE9UTyA9IDQwOTAxMCwgLy8gRXJyb3IgLSBtaXNzaW5nIHVzZXIgcGhvdG9cbiAgICBDT1VOVEVSX05PVF9SRUdJU1RFUkVEID0gNDA5MDExLCAvLyBDb3VudGVyIG5vdCByZWdpc3RlcmVkXG4gICAgSU5WQUxJRF9HTUlEX1RJQ0tFVCA9IDQwOTAxMiwgLy8gZ21pZCB0aWNrZXQgaXMgbm90IHZhbGlkXG4gICAgU0FNTF9NQVBQRURfQVRUUklCVVRFX05PVF9GT1VORCA9IDQwOTAxMywgLy8gVXNlZCB3aGVuIG1hcHBlZCBhdHRyaWJ1dGUgdmFsdWUgZm9yIHByb3ZpZGVyVUlEIGNhbm5vdCBiZSByZXRyZWl2ZWRcbiAgICBTQU1MX0NFUlRJRklDQVRFX05PVF9GT1VORCA9IDQwOTAxNCwgLy8gVXNlZCB3aGVuIFNBTUwgY2VydGlmaWNhdGUgY291bGQgbm90IGJlIHJldHJlaXZlZC5cbiAgICBTQU1MX01FU1NBR0VfTk9UX0ZPVU5EID0gNDA5MDE1LCAvLyBVc2VkIHdoZW4gY2FjaGVkIFNBTUwgbWVzc2FnZSBjb3VsZCBub3QgYmUgcmV0cmVpdmVkLlxuICAgIEdFTkVSQUxfU0VSVkVSX0VSUk9SID0gNTAwMDAxLFxuICAgIFNFUlZFUl9MT0dJTl9FUlJPUiA9IDUwMDAwMiwgLy8gZ2VuZXJhbCBlcnJvciBkdXJpbmcgdGhlIGxvZ2luIHByb2Nlc3NcbiAgICBERUZBVUxUX0FQUExJQ0FUSU9OX0NPTkZJR1VSQVRJT05fRVJST1IgPSA1MDAwMDMsIC8vIEZvciBtdWx0aXBsZSBEQyAtIHdoZW4gbm8gZGVmYXVsdCBhcHBsaWNhdGlvbiBjYW4gYmUgZm91bmQgaW4gRGVmYXVsdEFwcGxpY2F0aW9ucy5jb25maWcuIFdpdGggZXJyb3IgZGV0YWlscyBvZjogXCJEZWZhdWx0IGFwcGxpY2F0aW9uIGlzbid0IGNvbmZpZ3VyZWQgZm9yIGRhdGFDZW50ZXJcIlxuICAgIFNFU1NJT05fTUlHUkFUSU9OX0VSUk9SID0gNTAwMDE0LCAvLyBlcnJvciBpbiBtaWdyYXRpbmcgb2xkIHRvIG5ldyBmYWNlYm9vayBzZXNzaW9uXG4gICAgUFJPVklERVJfRVJST1IgPSA1MDAwMjMsIC8vIGdlbmVyYWwgZXJyb3IgZnJvbSB0aGUgcHJvdmlkZXJcbiAgICBEQVRBQkFTRV9FUlJPUiA9IDUwMDAyOCxcbiAgICBVU0VSTkFNRV9SRVFVSVJFRCA9IDUwMDAyOSwgLy8gSW5uZXIgY29kZVxuICAgIE5PX1BST1ZJREVSX0FQUExJQ0FUSU9OID0gNTAwMDMxLCAvLyB0aGUgYXBwbGljYXRpb24gZm9yIHRoaXMgcHJvdmlkZXIgaXMgbm90IGRlZmluZWQgZm9yIHRoaXMgc2l0ZVxuICAgIExPQURfRkFJTEVEID0gNTAwMDMyLCAvLyBjbGllbnQgZXJyb3JcbiAgICBJTlZBTElEX0VOVklST05NRU5UX0NPTkZJRyA9IDUwMDAzMywgLy8gSW4gY2FzZSB0aGVyZSBpcyBubyB0YXJnZXQgZW52aXJvbm1lbnQgaW4gdGhlIGNvbmZpZyBmaWxlIHdlJ2QgcmV0dXJuIHdpdGggIGludmFsaWRfZW52aXJvbm1lbnRfY29uZmlnIGVycm9yLlxuICAgIEVSUk9SX0RVUklOR19CQUNLRU5EX09QRVJBVElPTiA9IDUwMDAzNCxcbiAgICBUSU1FT1VUID0gNTA0MDAxLCAvLyBvdXRnb2luZyByZXF1ZXN0IGhhZCB0aW1lZCBvdXRcbiAgICBDTElFTlRUSU1FT1VUID0gNTA0MDAyLCAvLyBGb3Igc2VydmVyIFNES3MgLSBhIGNsaWVudCBzaWRlIHRpbWVvdXRcbiAgICBJTlZBTElEX1VSTCA9IDQwNDAwNCwgLy8gZW1iZWQubHkgNDA0IGVycm9yIG1lc3NhZ2UgLSB1cmwgaXMgbm90IHZhbGlkXG4gICAgTUVESUFfSVRFTVNfTk9UX1NVUFBPUlRFRCA9IDQwMTAwMSwgLy8gTWVkaWEgaXRlbXMgYSBub3QgYWxsb3dlZCBmb3IgdGhpcyBjYXRlZ29yeVxuICAgIE1JU1NJTkdfRVJST1JfQ09ERSA9IDU5OTk5OSxcbiAgICBUSElTX0FVVEhFTlRJQ0FUSU9OX01FVEhPRF9JU19DVVJSRU5UTFlfRElTQUJMRUQgID0gNDAzMzAwLFxuICAgIEZPUkNFX0xJTktfTE9HSU5fSURFTlRJRklFUl9FWElTVFMgPSA0MDkwMDMsXG4gICAgUEFTU0tFWV9BVVRIRU5USUNBVE9SX1JFR0lTVEVSRUQgPSA0MDAxMzAsXG4gICAgUEFTU0tFWV9BQk9SVEVEID0gNDAwMTMxLFxuICAgIFBBU1NLRVlfRVJST1IgPSA1MDAxMzFcbn1cbmV4cG9ydCBjb25zdCBlbnVtIEdTRXJyb3JEZXRhaWxzIHtcbiAgICBOb25lID0gMCxcbiAgICBTYW1lX3Bhc3N3b3JkID0gMTAwMDAxLCAvLyBSZXNldCBQYXNzd29yZCAtIFwiJ29sZFBhc3N3b3JkJyBjYW5ub3QgYmUgdGhlIHNhbWUgYXMgJ25ld1Bhc3N3b3JkJ1wiXG4gICAgSW52YWxpZF9wYXNzd29yZCA9IDEwMDAwMiwgLy8gUmVzZXQgUGFzc3dvcmQgLSBjdXJyZW50IHBhc3N3b3JkIGlzIHdyb25nL2ludmFsaWRcbiAgICBJbnZhbGlkX2NvdW50ZXJzX3F1ZXJ5X3dpdGhfY3Vyc29yID0gMTAwMDAzLFxufVxuIiwiZXhwb3J0IGNsYXNzIEZsYWdTZXJ2aWNlIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBmb3JjZVdlYlNka0Jvb3RzdHJhcCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdmb3JjZVdlYlNka0Jvb3RzdHJhcCcpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCB1c2VHaWd5YUpzQmFzZURvbWFpbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd1c2VHaWd5YUpzQmFzZURvbWFpbicpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGhpZGVTU09GcmFtZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdoaWRlU1NPRnJhbWUnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCB3Y2FnQ29udHJhc3RGaXgoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnd2NhZ0NvbnRyYXN0Rml4Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbmV3Rm9ybUxpbmtJbnN0YW5jZUVsZW1lbnQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnbmV3Rm9ybUxpbmtJbnN0YW5jZUVsZW1lbnQnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBzdG9wU2VuZGluZ1JlcG9ydHMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnc3RvcFNlbmRpbmdSZXBvcnRzJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc2V0R3JvdXBBcGlEb21haW5BZnRlckxvZ2luKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3NldEdyb3VwQXBpRG9tYWluQWZ0ZXJMb2dpbicpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHVzZUh0dHBTdGF0dXNDb2RlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3VzZUh0dHBTdGF0dXNDb2RlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgYWx3YXlzQ2hlY2tDb29raWVTYXZlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2Fsd2F5c0NoZWNrQ29va2llU2F2ZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGZpeFBob25lVEZBVHJhbnNsYXRpb25zKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2ZpeFBob25lVEZBVHJhbnNsYXRpb25zJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbG9hZFNzb0ZyYW1lT25seU9uY2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnbG9hZFNzb0ZyYW1lT25seU9uY2UnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCB2ZXJpZnlMb2dpbk9ubHlPbmNlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3ZlcmlmeUxvZ2luT25seU9uY2UnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBzZW5kTGFuZ0ZvckVtYWlsT1RQKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3NlbmRMYW5nRm9yRW1haWxPVFAnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBzZXRQcm92aWRlckZyb21SZXNwb25zZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdzZXRQcm92aWRlckZyb21SZXNwb25zZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNldENvb2tpZVNhbWVTaXRlTGF4U2Vzc2lvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdzZXRDb29raWVTYW1lU2l0ZUxheFNlc3Npb24nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBzZXRDb29raWVTYW1lU2l0ZUxheFNvY2lhbCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdzZXRDb29raWVTYW1lU2l0ZUxheFNvY2lhbCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNldENvb2tpZVNhbWVTaXRlTGF4TG93UHJpb3JpdHkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnc2V0Q29va2llU2FtZVNpdGVMYXhMb3dQcmlvcml0eScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGZvcmNlRXJyb3JSZXBvcnQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnZm9yY2VFcnJvclJlcG9ydCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNraXBTYW1lU2NyZWVuQ2hlY2tPblN3aXRjaCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdza2lwU2FtZVNjcmVlbkNoZWNrT25Td2l0Y2gnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBnZXRPbmx5VmlzaWJsZUZpZWxkICgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdnZXRPbmx5VmlzaWJsZUZpZWxkJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdXBkYXRlQWNjb3VudEluZm9Bc3luYyAoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgndXBkYXRlQWNjb3VudEluZm9Bc3luYycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNhbml0aXplRXZhbHVhdGVkVmFsdWUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdzYW5pdGl6ZUV2YWx1YXRlZFZhbHVlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdXNlU2Vzc2lvblZlcmlmeSAoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgndXNlU2Vzc2lvblZlcmlmeScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHVzZUV4dGVuZGVkUGhvbmVOdW1iZXJSZWdleCAoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgndXNlRXh0ZW5kZWRQaG9uZU51bWJlclJlZ2V4Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgZ2VuZXJhdGVOZXdDb2RlV2NhZ0NvbXBsaWFuY2UgKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2dlbmVyYXRlTmV3Q29kZVdjYWdDb21wbGlhbmNlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgZW5mb3JjZUF1dGhGbG93UmVkaXJlY3RGb3JTb2NpYWwgKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2VuZm9yY2VBdXRoRmxvd1JlZGlyZWN0Rm9yU29jaWFsJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdXNlRGVjb2RlVVJJQ29tcG9uZW50KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3VzZURlY29kZVVSSUNvbXBvbmVudCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHVzZU9pZGNHZXRQYXJhbUhhc2hPbGRTdHlsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd1c2VPaWRjR2V0UGFyYW1IYXNoT2xkU3R5bGUnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCB1c2VWaWV3cG9ydFBvbGxlckFjdGlvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd1c2VWaWV3cG9ydFBvbGxlckFjdGlvbicpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGlnbm9yZUludGVycnVwdGlvbnNJbk9pZGNQYXNzaXZlTG9naW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnaWdub3JlSW50ZXJydXB0aW9uc0luT2lkY1Bhc3NpdmVMb2dpbicpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG92ZXJyaWRlQWxsQ2hpbGRDb250ZXh0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ292ZXJyaWRlQWxsQ2hpbGRDb250ZXh0Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgZGlzcGF0Y2hMb2dpbkV2ZW50V2hlbkhhbmRsZXJBZGRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdkaXNwYXRjaExvZ2luRXZlbnRXaGVuSGFuZGxlckFkZGVkJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoZ2lneWEuXy5jb25maWc/LmZsYWdzICYmIGdpZ3lhLl8uY29uZmlnPy5mbGFnc1tuYW1lXSkgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gRXZlcnkgZmxhZyB0aGF0IGlzIGFzc29jaWF0ZWQgd2l0aCBkYXRhIG1vZGlmaWNhdGlvbiByZWxhdGVkIHRvIHRoZSBhcGkgbGF5ZXJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBhcGlGbGFncygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9