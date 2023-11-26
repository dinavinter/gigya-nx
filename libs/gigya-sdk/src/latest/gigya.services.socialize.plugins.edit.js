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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/css/global.css":
/*!********************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/css/global.css ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*.gig-edit-connections a {\n    color:#1371b9;\n}\n\n*.gig-edit-connections {\n    font-family: arial;\n    font-size: 11px;\n    display: block;\n    overflow: auto;\n    line-height: normal;\n    background-color: #fff;\n}\n\n    *.gig-edit-connections ul {\n        list-style: none;\n        width: auto;\n        margin: 0;\n        padding: 0;\n    }\n\n        *.gig-edit-connections ul li { \n            padding: 5px;\n            border-bottom: 1px solid #e6e6e6;\n        }\n\n            *.gig-edit-connections ul li .gig-edit-connections-identity-information {\n                display: block;\n                overflow: auto;\n                margin-top: 5px;\n            }\n\n*.gig-edit-connections-identity-information-profile-image {\n    display: inline-block;\n    width: 45px;\n    height: 45px;\n    padding-bottom: 5px;\n    float: left;\n}\n\n.gig-edit-connections ul li .gig-edit-connections-identity-information .gig-edit-connections-identity-information-profile-image img {\n    width: 45px;\n    height: 45px;\n}\n\n\n.gig-edit-connections ul li .gig-edit-connections-identity-information .gig-edit-connections-information-details {\n    float: left;\n    padding-left: 10px;\n}\n\n    .gig-edit-connections ul li .gig-edit-connections-identity-information .gig-edit-connections-information-details .gig-edit-connections-information-details-row {\n        display: block;\n    }\n\n.gig-edit-connections ul li .gig-edit-connections-social-provider {\n    height: 18px;\n}\n\n\n    .gig-edit-connections ul li .gig-edit-connections-social-provider .gig-edit-connections-social-provider-image {\n        display: inline-block;\n        padding-right: 10px;\n        float: left;\n    }\n\n        .gig-edit-connections ul li .gig-edit-connections-social-provider .gig-edit-connections-social-provider-image img {\n            height: 18px;\n            width: 18px;\n        }\n\n\n.gig-edit-connections ul li:hover .gig-edit-connections-provider-apps {\n    display: block;\n}\n\n.gig-edit-connections-provider-apps {\n    float: right;\n    text-decoration: none;\n    display: none;\n}\n\n    .gig-edit-connections-provider-apps span {\n        line-height: normal;\n        font-family: arial;\n        font-size: 11px;\n        color: #0086f1;\n        border-style: solid;\n        border-width: 0px;\n        cursor: pointer;\n        text-decoration: underline;\n    }\n\n\n\n.gig-edit-connections-footer {\n    display: block;\n    overflow: hidden;\n    padding: 0 3px;\n}\n\n    .gig-edit-connections-footer .gig-edit-connections-social-by {\n        text-align: right;\n        float: right;\n    }\n\n        .gig-edit-connections-footer .gig-edit-connections-social-by span {\n            font-family: arial;\n            color: #005997;\n            font-weight: bold;\n            font-size: 11px;\n            cursor: pointer;\n        }\n\n            .gig-edit-connections-footer .gig-edit-connections-social-by span span {\n                font-family: arial;\n                color: #828282;\n                font-weight: bold;\n                font-size: 11px;\n                cursor: pointer;\n            }\n\n\n    .gig-edit-connections-footer .gig-edit-connections-terms {\n        line-height: normal;\n        cursor: pointer;\n        font-family: arial;\n        font-size: 11px;\n        color: #0086f1;\n        padding-right: 5px;\n        text-decoration: none;\n        float: left;\n        line-height: 20px;\n    }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

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

/***/ "./src/core/Gigya.Js.Plugin/app/PluginStyles.ts":
/*!******************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/PluginStyles.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var PluginStyle;
(function (PluginStyle) {
    PluginStyle[PluginStyle["_undefined"] = 0] = "_undefined";
    PluginStyle[PluginStyle["none"] = 1] = "none";
    PluginStyle[PluginStyle["legacy"] = 2] = "legacy";
    PluginStyle[PluginStyle["modern"] = 3] = "modern";
})(PluginStyle = exports.PluginStyle || (exports.PluginStyle = {}));
function getPluginStyleClass(style) {
    return 'gigya-style-' + PluginStyle[style];
}
exports.getPluginStyleClass = getPluginStyleClass;


/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/CSSResources.ts":
/*!******************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/CSSResources.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.global = __webpack_require__(/*! ./css/global.css */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/css/global.css");


/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/EditConnections.ts":
/*!*********************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/EditConnections.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var PluginStyles_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/PluginStyles */ "./src/core/Gigya.Js.Plugin/app/PluginStyles.ts");
var shouldRenderProvider = function (provider) { return provider !== 'site' && provider !== 'lite-email'; };
var BasePluginGlobal = window.gigya._.plugins.BasePlugin;
var EditConnectionPlugin = /** @class */ (function (_super) {
    tslib_1.__extends(EditConnectionPlugin, _super);
    function EditConnectionPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // class variables
        _this.providerAppsLinks = {
            facebook: 'https://www.facebook.com/settings?tab=applications',
            twitter: 'https://twitter.com/settings/applications',
            linkedin: 'https://www.linkedin.com/psettings/permitted-services',
            googleplus: 'https://plus.google.com/u/0/apps',
            messenger: 'https://account.live.com/consent/Manage',
            yahoo: 'https://api.login.yahoo.com/WSLogin/V1/unlink',
        };
        _this.onUserStateChange = function () { return _this.UserStateChanged(); };
        return _this;
    }
    // Override BasePlugin methods
    EditConnectionPlugin.injectionInfo = function () {
        return {
            name: 'edit',
            namespace: 'socialize',
            methodName: 'showEditConnection',
            jsName: 'gigya.services.socialize.plugins.edit',
        };
    };
    // initialization block.
    EditConnectionPlugin.prototype.init = function (loadedCallback) {
        var _this = this;
        this.showTooltips = window.gigya.utils.validation.isExplicitTrue(this.params.showTooltips);
        this.imageBase = window.gigya._.getCdnResource('/gs/i/edit/');
        // init the providers list
        this.providers = window.gigya.global.resolveProviders(this.params.enabledProviders, this.params.disabledProviders, this.params.requiredCapabilities);
        window.gigya.utils.array.forEach(this.params.customButtons || [this.params.customButton], function (oButton) {
            // Ignore all non-SAML buttons.
            if (oButton && oButton.type && oButton.type.toLowerCase() == 'saml') {
                var pCustomProvider = window.gigya.utils.object.clone(window.gigya.socialize._getProviderByID(4122));
                pCustomProvider.name = 'saml-' + oButton.idpName;
                pCustomProvider.displayName = oButton.providerName;
                pCustomProvider.buttonData = oButton;
                _this.providers.splice(oButton.position && oButton.position > 1 ? oButton.position - 1 : 0, 0, pCustomProvider);
            }
        });
        // register to global events: login, logout, connect, disconnect
        this.registerToGlobalEvents();
        // init user state
        this.getUserInfo(function (_) {
            // render the control
            _this.render();
            // set the control Dimensions. needed only once on init after the first render.
            _this.initDimensions();
            loadedCallback();
        });
    };
    EditConnectionPlugin.prototype.getConfig = function () {
        return {
            requiredParams: [],
            defaultParams: {
                enabledProviders: '*',
                width: '310',
                height: '250',
                requiredCapabilities: 'friends',
            },
            hasMobileUI: false,
            allowModal: true,
            defaultModalParams: {
                enabledProviders: '*',
                width: '310',
                height: '310',
                requiredCapabilities: 'friends',
                captionTextKey: 'EditConnections',
            },
        };
    };
    // ---------------------- Logic ------------------ //
    EditConnectionPlugin.prototype.getUserInfo = function (callback) {
        var _this = this;
        window.gigya.socialize.getUserInfo(this.params, {
            includeAllIdentities: true,
            callback: function (response) {
                if (response.errorCode == 0) {
                    _this.user = response.user;
                }
                else {
                    window.gigya.events.dispatchErrorFromResponse(_this.params, response);
                }
                if (callback)
                    callback(response);
            },
        });
    };
    // setting the dimensions for the elements.
    // w+h when the gigya brand or terms link is on.
    EditConnectionPlugin.prototype.initDimensions = function () {
        var footerHeight = 0;
        // check if the 'Footer' exists in the scope of the control.
        var fQuery = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-edit-connections-footer');
        // if the footer found
        if (fQuery.length) {
            var footer = fQuery[0];
            // get the calculated height of the element
            footerHeight = window.gigya.utils.DOM.getHTMLSize(footer.innerHTML, footer).h;
        }
        // subtructing the footer size from the list of connections
        var connectionsListHeight = parseInt(this.params.height) - footerHeight;
        var heightCss = '.gig-edit-connections {' + ['height: ', connectionsListHeight, 'px;', 'min-width: 215px;'].join('') + '}';
        window.gigya._.plugins.utils.css.addCss(heightCss, this.params.cssPrefix);
    };
    EditConnectionPlugin.prototype.render = function () {
        if (this.getPluginStyle() == PluginStyles_1.PluginStyle.legacy && this.isModal) {
            var uiContainer = document.createElement('div');
            this.container.appendChild(uiContainer);
            this.container = uiContainer;
        }
        // set the container html.
        this.container.innerHTML = this.getControlHtml();
        // registering to local events : connect,disconnect
        this.registerLocalEvents();
    };
    // ---------------------- Events ------------------ //
    EditConnectionPlugin.prototype.registerLocalEvents = function () {
        var _this = this;
        var connectLinkElements = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-edit-connections-connectLink');
        var disconnectLinkElements = window.gigya.utils.DOM.getElementsByClass(this.container, 'gig-edit-connections-disconnectLink');
        var eventName = window.gigya.localInfo.isIOS && window.gigya.localInfo.isSafari ? 'touchend' : 'click';
        // Registering foir the connect events.
        if (connectLinkElements && connectLinkElements.length > 0) {
            for (var i = 0; i < connectLinkElements.length; i++) {
                window.gigya.utils.DOM.addEventListener(connectLinkElements[i], eventName, function (e) {
                    _this.onConnectClick(e);
                });
            }
        }
        // Registering for the Disconnect events.
        if (disconnectLinkElements && disconnectLinkElements.length > 0) {
            for (var i = 0; i < disconnectLinkElements.length; i++) {
                window.gigya.utils.DOM.addEventListener(disconnectLinkElements[i], eventName, function (e) {
                    _this.onDisconnectClick(e);
                });
            }
        }
    };
    EditConnectionPlugin.prototype.registerToGlobalEvents = function () {
        this.addGlobalEventHandlers({
            onLogin: this.onUserStateChange,
            onLogout: this.onUserStateChange,
            onConnectionAdded: this.onUserStateChange,
            onConnectionRemoved: this.onUserStateChange,
        });
    };
    EditConnectionPlugin.prototype.unregisterToGlobalEvents = function () {
        this.removeGlobalEventHandlers({
            onLogin: this.onUserStateChange,
            onLogout: this.onUserStateChange,
            onConnectionAdded: this.onUserStateChange,
            onConnectionRemoved: this.onUserStateChange,
        });
    };
    EditConnectionPlugin.prototype.dispose = function () {
        this.unregisterToGlobalEvents();
        _super.prototype.dispose.call(this);
    };
    // this event trigger re-render
    EditConnectionPlugin.prototype.UserStateChanged = function () {
        var _this = this;
        // init user state
        this.getUserInfo(function (_) {
            // render the control
            _this.render();
        });
    };
    EditConnectionPlugin.prototype.onConnectClick = function (e) {
        var target = e.target || e.srcElement;
        var provider = target.getAttribute('data-socialprovider');
        window.gigya.socialize.addConnection(this.params, {
            provider: provider,
            includeAllIdentities: true,
        });
    };
    EditConnectionPlugin.prototype.onDisconnectClick = function (e) {
        var target = e.target || e.srcElement;
        var provider = target.getAttribute('data-socialprovider');
        window.gigya.socialize.removeConnection(this.params, {
            provider: provider,
        });
    };
    // ---------------------- Templating ------------------ //
    EditConnectionPlugin.prototype.getControlHtml = function () {
        // setting up 2 lists for simple status appending.
        var connectedProviders = [];
        var notConnectedProviders = [];
        // create the inner items
        for (var _i = 0, _a = this.providers; _i < _a.length; _i++) {
            var provider = _a[_i];
            if (!shouldRenderProvider(provider.name))
                continue;
            if (this.user.identities.hasOwnProperty(provider.name)) {
                connectedProviders.push(this.getProviderListItem(provider, this.user.identities[provider.name]));
            }
            else {
                notConnectedProviders.push(this.getProviderListItem(provider, null));
            }
        }
        // Check if the user has identities outside the requested providers critiria.
        // if so, add the provider and the identity.
        for (var p in this.user.identities) {
            if (!shouldRenderProvider(p))
                continue;
            var found = false;
            for (var i = 0; i < this.providers.length; i++) {
                if (this.providers[i].name === p)
                    found = true;
            }
            if (!found) {
                // not found, add to the list:
                var missingProvider = window.gigya._.providers.getProviderByName(p);
                connectedProviders.push(this.getProviderListItem(missingProvider, this.user.identities[p]));
            }
        }
        // return the container HTML
        return window.gigya.utils.templates.fill(this.getTemplates().edit, {
            providersData: connectedProviders.join('') + notConnectedProviders.join(''),
            footer: this.getFooter(),
        });
    };
    // return a Provider li element, if the data exists, adding the identity data
    EditConnectionPlugin.prototype.getProviderListItem = function (provider, identityObject) {
        var providerTooltip = this.showTooltips ? provider.displayName : '';
        if (identityObject) {
            var socialProviderApps = '';
            // extract the provider auth manage link from the list if has one.
            if (this.providerAppsLinks.hasOwnProperty(provider.name)) {
                socialProviderApps = window.gigya.utils.templates.fill(this.getTemplates().socialProviderApps, {
                    providerAppUrl: this.providerAppsLinks[provider.name],
                    lng_Myapps: this.getText('my_apps'),
                });
            }
            // -- > socialProviderConnected
            return window.gigya.utils.templates.fill(this.getTemplates().connectedSocialProvider, {
                providerName: provider.name,
                displayName: provider.displayName || provider.name,
                providerTooltip: providerTooltip,
                profileName: identityObject.nickname,
                profileImage: this.getIdentityPhotoUrl(identityObject),
                profileCountry: this.getIdentityCountry(identityObject),
                profileCity: this.getIdentityCity(identityObject),
                profileBirthDate: this.getIdentityBirthDate(identityObject),
                providerImage: this.getPluginImage(provider, identityObject),
                socialProviderApps: socialProviderApps,
                lng_Disconnect: this.getText('disconnect'),
                ariaLabel: provider.displayName + " Connected. Username " + (identityObject === null || identityObject === void 0 ? void 0 : identityObject.nickname)
            });
        }
        else {
            // -- > socialProviderNotConnected
            return window.gigya.utils.templates.fill(this.getTemplates().disconnectedSocialProvider, {
                providerName: provider,
                providerTooltip: providerTooltip,
                providerImage: this.getPluginImage(provider),
                lng_Connect: this.getText('connect'),
            });
        }
    };
    EditConnectionPlugin.prototype.getPluginImage = function (provider, identity) {
        if (provider.buttonData) {
            if (!identity) {
                return provider.buttonData.iconURL;
            }
            else {
                return provider.buttonData.connectedIconURL || provider.buttonData.iconURL;
            }
        }
        else {
            return "" + this.imageBase + provider.name + ".png";
        }
    };
    EditConnectionPlugin.prototype.getIdentityCountry = function (identity) {
        if (identity.country) {
            return window.gigya.utils.templates.fill(this.getTemplates().identityCountry, {
                lng_Country: this.getText('country'),
                country: identity.country,
            });
        }
        return '';
    };
    EditConnectionPlugin.prototype.getIdentityCity = function (identity) {
        if (identity.city) {
            return window.gigya.utils.templates.fill(this.getTemplates().identityCity, {
                lng_City: this.getText('city'),
                city: identity.city,
            });
        }
        return '';
    };
    EditConnectionPlugin.prototype.getIdentityBirthDate = function (identity) {
        if (identity.birthYear && identity.birthMonth && identity.birthDay) {
            var year = identity.birthYear;
            var month = identity.birthMonth;
            var day = identity.birthDay;
            if (!year)
                year = '??';
            if (!month)
                month = '??';
            if (!day)
                day = '??';
            return window.gigya.utils.templates.fill(this.getTemplates().identityBirthDate, {
                lng_Date_of_birth: this.getText('date_of_birth'),
                day: day,
                month: month,
                year: year,
            });
        }
        return '';
    };
    EditConnectionPlugin.prototype.getIdentityPhotoUrl = function (identity) {
        var url = identity.thumbnailURL;
        if (!url)
            url = identity.photoURL;
        if (!url)
            url = window.gigya.utils.templates.fill(this.getTemplates().defaultPhotoURL, {
                imageBaseURL: this.imageBase,
            });
        return window.gigya.global.getPhotoURL(url);
    };
    EditConnectionPlugin.prototype.getFooter = function () {
        var footer = '';
        // Checking if we need to render the footer.
        var showTerms = this.params.showTermsLink;
        if (showTerms) {
            var brand = '';
            var terms = window.gigya.utils.templates.fill(this.getTemplates().gigyaTerms, {
                lng_Terms: this.getText('terms'),
            });
            // Creating The Footer
            footer = window.gigya.utils.templates.fill(this.getTemplates().footer, {
                gigyaTerms: terms,
                gigyaBrand: brand,
            });
        }
        return footer;
    };
    return EditConnectionPlugin;
}(BasePluginGlobal));
exports.EditConnectionPlugin = EditConnectionPlugin;


/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/HtmlResources.ts":
/*!*******************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/HtmlResources.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.connectedSocialProvider = __webpack_require__(/*! ./templates/connectedSocialProvider.html */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/connectedSocialProvider.html");
exports.defaultPhotoURL = __webpack_require__(/*! ./templates/defaultPhotoURL.html */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/defaultPhotoURL.html");
exports.disconnectedSocialProvider = __webpack_require__(/*! ./templates/disconnectedSocialProvider.html */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/disconnectedSocialProvider.html");
exports.edit = __webpack_require__(/*! ./templates/edit.html */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/edit.html");
exports.footer = __webpack_require__(/*! ./templates/footer.html */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/footer.html");
exports.gigyaBrand = __webpack_require__(/*! ./templates/gigyaBrand.html */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/gigyaBrand.html");
exports.gigyaTerms = __webpack_require__(/*! ./templates/gigyaTerms.html */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/gigyaTerms.html");
exports.identityBirthDate = __webpack_require__(/*! ./templates/identityBirthDate.html */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/identityBirthDate.html");
exports.identityCity = __webpack_require__(/*! ./templates/identityCity.html */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/identityCity.html");
exports.identityCountry = __webpack_require__(/*! ./templates/identityCountry.html */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/identityCountry.html");
exports.socialProviderApps = __webpack_require__(/*! ./templates/socialProviderApps.html */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/socialProviderApps.html");


/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/css/global.css":
/*!*****************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/css/global.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!./global.css */ "../node_modules/css-loader/dist/cjs.js!./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/css/global.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/index.ts":
/*!***********************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/index.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var Gigya_PluginsEditConnections = __webpack_require__(/*! src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/EditConnections */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/EditConnections.ts");
var HtmlResources = __webpack_require__(/*! src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/HtmlResources */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/HtmlResources.ts");
var CSSResource = __webpack_require__(/*! src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/CSSResources */ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/CSSResources.ts");
if (!window.gigya._) {
    window.gigya._ = {};
}
if (!window.gigya._.plugins) {
    window.gigya._.plugins = {};
}
if (!window.gigya._.plugins.editConnections) {
    window.gigya._.plugins.editConnections = {};
}
if (!window.gigya._.plugins.resources) {
    window.gigya._.plugins.resources = {};
}
if (!window.gigya._.plugins.resources.html) {
    window.gigya._.plugins.resources.html = {};
}
if (!window.gigya._.plugins.resources.html) {
    window.gigya._.plugins.resources.css = {};
}
if (!window.gigya._.plugins.resources.html.edit) {
    window.gigya._.plugins.resources.html.edit = {};
}
if (!window.gigya._.plugins.resources.css.edit) {
    window.gigya._.plugins.resources.css.edit = {};
}
__webpack_provided_Object_dot_assign(window.gigya._.plugins.editConnections, Gigya_PluginsEditConnections);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.resources.html.edit, HtmlResources);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.resources.css.edit, CSSResource);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/connectedSocialProvider.html":
/*!*****************************************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/connectedSocialProvider.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li role=\"option\" aria-label=\"$ariaLabel\">\n    <div class=\"gig-edit-connections-social-provider\">\n        <div class=\"gig-edit-connections-social-provider-image\">\n            <img src=\"$providerImage\" title=\"$providerTooltip\" alt=\"$providerName\" />\n        </div>\n        <strong>$profileName</strong>\n    </div>\n    <div class=\"gig-edit-connections-identity-information\">\n        <div class=\"gig-edit-connections-identity-information-profile-image\">\n            <img src=\"$profileImage\" title=\"$providerTooltip\" alt=\"$providerName\" />\n        </div>\n        <div class=\"gig-edit-connections-information-details\">\n            $profileCountry\n            $profileCity\n            $profileBirthDate\n            <a\n                    href=\"javascript:void(0);\"\n                    class=\"gig-edit-connections-disconnectLink\"\n                    data-socialprovider=\"$providerName\">$lng_Disconnect</a><br />\n        </div>\n        $socialProviderApps\n    </div>\n</li>\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/defaultPhotoURL.html":
/*!*********************************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/defaultPhotoURL.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "$imageBaseURL/DefaultUserImage_45px.png";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/disconnectedSocialProvider.html":
/*!********************************************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/disconnectedSocialProvider.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li>\n    <div class=\"gig-edit-connections-social-provider\">\n        <div class=\"gig-edit-connections-social-provider-image\">\n            <img src=\"$providerImage\" title=\"$providerTooltip\" alt=\"$providerName\" />\n        </div>\n        <a href=\"javascript:void(0);\" tabindex=\"0\" class=\"gig-edit-connections-connectLink\" role=\"option\" aria-label=\"$providerName\" data-socialprovider=\"$providerName\">$lng_Connect</a>\n    </div>\n</li>\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/edit.html":
/*!**********************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/edit.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gig-edit-connections\">\n    <ul role=\"listbox\">\n        $providersData\n    </ul>\n</div>\n$footer\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/footer.html":
/*!************************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/footer.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gig-edit-connections-footer\">\n    $gigyaTerms\n    $gigyaBrand\n</div>\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/gigyaBrand.html":
/*!****************************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/gigyaBrand.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gig-edit-connections-social-by\">\n    <span onclick=\"window.open('http://www.gigya.com')\"><span>${socialBy} </span><img alt=\"Gigya\" class=\"gigya-logo\" src=\"${logoUrl}\" /></span>\n</div>\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/gigyaTerms.html":
/*!****************************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/gigyaTerms.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gig-edit-connections-terms\">\n    <a target=\"_blank\" href=\"http://www.gigya.com/terms-of-service/\">$lng_Terms</a>\n</div>\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/identityBirthDate.html":
/*!***********************************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/identityBirthDate.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"gig-edit-connections-information-details-row\">$lng_Date_of_birth $day/$month/$year</span>";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/identityCity.html":
/*!******************************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/identityCity.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"gig-edit-connections-information-details-row\">$lng_City $city </span>";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/identityCountry.html":
/*!*********************************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/identityCountry.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"gig-edit-connections-information-details-row\">$lng_Country $country </span>";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/socialProviderApps.html":
/*!************************************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.EditConnectionsNew/app/templates/socialProviderApps.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"$providerAppUrl\" class=\"gig-edit-connections-provider-apps\" target=\"_blank\"><span>$lng_Myapps</span></a>\n";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5QbHVnaW4uRWRpdENvbm5lY3Rpb25zTmV3L2FwcC9jc3MvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1BsdWdpblN0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLlBsdWdpbi5FZGl0Q29ubmVjdGlvbnNOZXcvYXBwL0NTU1Jlc291cmNlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLlBsdWdpbi5FZGl0Q29ubmVjdGlvbnNOZXcvYXBwL0VkaXRDb25uZWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLlBsdWdpbi5FZGl0Q29ubmVjdGlvbnNOZXcvYXBwL0h0bWxSZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5QbHVnaW4uRWRpdENvbm5lY3Rpb25zTmV3L2FwcC9jc3MvZ2xvYmFsLmNzcz80MjkxIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuUGx1Z2luLkVkaXRDb25uZWN0aW9uc05ldy9hcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5QbHVnaW4uRWRpdENvbm5lY3Rpb25zTmV3L2FwcC90ZW1wbGF0ZXMvY29ubmVjdGVkU29jaWFsUHJvdmlkZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLlBsdWdpbi5FZGl0Q29ubmVjdGlvbnNOZXcvYXBwL3RlbXBsYXRlcy9kZWZhdWx0UGhvdG9VUkwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLlBsdWdpbi5FZGl0Q29ubmVjdGlvbnNOZXcvYXBwL3RlbXBsYXRlcy9kaXNjb25uZWN0ZWRTb2NpYWxQcm92aWRlci5odG1sIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuUGx1Z2luLkVkaXRDb25uZWN0aW9uc05ldy9hcHAvdGVtcGxhdGVzL2VkaXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLlBsdWdpbi5FZGl0Q29ubmVjdGlvbnNOZXcvYXBwL3RlbXBsYXRlcy9mb290ZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLlBsdWdpbi5FZGl0Q29ubmVjdGlvbnNOZXcvYXBwL3RlbXBsYXRlcy9naWd5YUJyYW5kLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5QbHVnaW4uRWRpdENvbm5lY3Rpb25zTmV3L2FwcC90ZW1wbGF0ZXMvZ2lneWFUZXJtcy5odG1sIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuUGx1Z2luLkVkaXRDb25uZWN0aW9uc05ldy9hcHAvdGVtcGxhdGVzL2lkZW50aXR5QmlydGhEYXRlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5QbHVnaW4uRWRpdENvbm5lY3Rpb25zTmV3L2FwcC90ZW1wbGF0ZXMvaWRlbnRpdHlDaXR5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5QbHVnaW4uRWRpdENvbm5lY3Rpb25zTmV3L2FwcC90ZW1wbGF0ZXMvaWRlbnRpdHlDb3VudHJ5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5QbHVnaW4uRWRpdENvbm5lY3Rpb25zTmV3L2FwcC90ZW1wbGF0ZXMvc29jaWFsUHJvdmlkZXJBcHBz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RUFBRTtJQUNyQyxZQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7Q0FDM0M7QUFDRCxvQ0FBYSxDQUFDLFlBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO0FBQzdFLG9DQUFhLENBQUMsWUFBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDbEUsb0NBQWEsQ0FBQyxZQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQy9CL0Qsa3pCQUFrekIsOE47Ozs7Ozs7Ozs7O0FDQWx6QiwyRDs7Ozs7Ozs7Ozs7QUNBQSx3U0FBd1MsdUw7Ozs7Ozs7Ozs7O0FDQXhTLHlJOzs7Ozs7Ozs7OztBQ0FBLDJHOzs7Ozs7Ozs7OztBQ0FBLG9JQUFvSSxTQUFTLHdEQUF3RCxRQUFRLHdCOzs7Ozs7Ozs7OztBQ0E3TSxpSzs7Ozs7Ozs7Ozs7QUNBQSw0SDs7Ozs7Ozs7Ozs7QUNBQSx3Rzs7Ozs7Ozs7Ozs7QUNBQSw4Rzs7Ozs7Ozs7Ozs7QUNBQSw2SSIsImZpbGUiOiJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5lZGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLlBsdWdpbi5FZGl0Q29ubmVjdGlvbnNOZXcvYXBwL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiouZ2lnLWVkaXQtY29ubmVjdGlvbnMgYSB7XFxuICAgIGNvbG9yOiMxMzcxYjk7XFxufVxcblxcbiouZ2lnLWVkaXQtY29ubmVjdGlvbnMge1xcbiAgICBmb250LWZhbWlseTogYXJpYWw7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4gICAgKi5naWctZWRpdC1jb25uZWN0aW9ucyB1bCB7XFxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuXFxuICAgICAgICAqLmdpZy1lZGl0LWNvbm5lY3Rpb25zIHVsIGxpIHsgXFxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlNmU2O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgICouZ2lnLWVkaXQtY29ubmVjdGlvbnMgdWwgbGkgLmdpZy1lZGl0LWNvbm5lY3Rpb25zLWlkZW50aXR5LWluZm9ybWF0aW9uIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgICAgICAgICAgfVxcblxcbiouZ2lnLWVkaXQtY29ubmVjdGlvbnMtaWRlbnRpdHktaW5mb3JtYXRpb24tcHJvZmlsZS1pbWFnZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi5naWctZWRpdC1jb25uZWN0aW9ucyB1bCBsaSAuZ2lnLWVkaXQtY29ubmVjdGlvbnMtaWRlbnRpdHktaW5mb3JtYXRpb24gLmdpZy1lZGl0LWNvbm5lY3Rpb25zLWlkZW50aXR5LWluZm9ybWF0aW9uLXByb2ZpbGUtaW1hZ2UgaW1nIHtcXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIGhlaWdodDogNDVweDtcXG59XFxuXFxuXFxuLmdpZy1lZGl0LWNvbm5lY3Rpb25zIHVsIGxpIC5naWctZWRpdC1jb25uZWN0aW9ucy1pZGVudGl0eS1pbmZvcm1hdGlvbiAuZ2lnLWVkaXQtY29ubmVjdGlvbnMtaW5mb3JtYXRpb24tZGV0YWlscyB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbiAgICAuZ2lnLWVkaXQtY29ubmVjdGlvbnMgdWwgbGkgLmdpZy1lZGl0LWNvbm5lY3Rpb25zLWlkZW50aXR5LWluZm9ybWF0aW9uIC5naWctZWRpdC1jb25uZWN0aW9ucy1pbmZvcm1hdGlvbi1kZXRhaWxzIC5naWctZWRpdC1jb25uZWN0aW9ucy1pbmZvcm1hdGlvbi1kZXRhaWxzLXJvdyB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcblxcbi5naWctZWRpdC1jb25uZWN0aW9ucyB1bCBsaSAuZ2lnLWVkaXQtY29ubmVjdGlvbnMtc29jaWFsLXByb3ZpZGVyIHtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbn1cXG5cXG5cXG4gICAgLmdpZy1lZGl0LWNvbm5lY3Rpb25zIHVsIGxpIC5naWctZWRpdC1jb25uZWN0aW9ucy1zb2NpYWwtcHJvdmlkZXIgLmdpZy1lZGl0LWNvbm5lY3Rpb25zLXNvY2lhbC1wcm92aWRlci1pbWFnZSB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgIH1cXG5cXG4gICAgICAgIC5naWctZWRpdC1jb25uZWN0aW9ucyB1bCBsaSAuZ2lnLWVkaXQtY29ubmVjdGlvbnMtc29jaWFsLXByb3ZpZGVyIC5naWctZWRpdC1jb25uZWN0aW9ucy1zb2NpYWwtcHJvdmlkZXItaW1hZ2UgaW1nIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDE4cHg7XFxuICAgICAgICB9XFxuXFxuXFxuLmdpZy1lZGl0LWNvbm5lY3Rpb25zIHVsIGxpOmhvdmVyIC5naWctZWRpdC1jb25uZWN0aW9ucy1wcm92aWRlci1hcHBzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5naWctZWRpdC1jb25uZWN0aW9ucy1wcm92aWRlci1hcHBzIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiAgICAuZ2lnLWVkaXQtY29ubmVjdGlvbnMtcHJvdmlkZXItYXBwcyBzcGFuIHtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgICAgICBmb250LWZhbWlseTogYXJpYWw7XFxuICAgICAgICBmb250LXNpemU6IDExcHg7XFxuICAgICAgICBjb2xvcjogIzAwODZmMTtcXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB9XFxuXFxuXFxuXFxuLmdpZy1lZGl0LWNvbm5lY3Rpb25zLWZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiAwIDNweDtcXG59XFxuXFxuICAgIC5naWctZWRpdC1jb25uZWN0aW9ucy1mb290ZXIgLmdpZy1lZGl0LWNvbm5lY3Rpb25zLXNvY2lhbC1ieSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgfVxcblxcbiAgICAgICAgLmdpZy1lZGl0LWNvbm5lY3Rpb25zLWZvb3RlciAuZ2lnLWVkaXQtY29ubmVjdGlvbnMtc29jaWFsLWJ5IHNwYW4ge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcXG4gICAgICAgICAgICBjb2xvcjogIzAwNTk5NztcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5naWctZWRpdC1jb25uZWN0aW9ucy1mb290ZXIgLmdpZy1lZGl0LWNvbm5lY3Rpb25zLXNvY2lhbC1ieSBzcGFuIHNwYW4ge1xcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogYXJpYWw7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgfVxcblxcblxcbiAgICAuZ2lnLWVkaXQtY29ubmVjdGlvbnMtZm9vdGVyIC5naWctZWRpdC1jb25uZWN0aW9ucy10ZXJtcyB7XFxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IGFyaWFsO1xcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICAgICAgY29sb3I6ICMwMDg2ZjE7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBmbG9hdDogbGVmdDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImV4cG9ydCBlbnVtIFBsdWdpblN0eWxlIHtcbiAgICBfdW5kZWZpbmVkID0gMCxcbiAgICBub25lLFxuICAgIGxlZ2FjeSxcbiAgICBtb2Rlcm4sXG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UGx1Z2luU3R5bGVDbGFzcyhzdHlsZTogUGx1Z2luU3R5bGUpOiBzdHJpbmcge1xuICAgIHJldHVybiAnZ2lneWEtc3R5bGUtJyArIFBsdWdpblN0eWxlW3N0eWxlXTtcbn1cbiIsImV4cG9ydCB2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9jc3MvZ2xvYmFsLmNzcycpO1xuIiwiaW1wb3J0IHsgSVBsdWdpblBhcmFtcyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luUGFyYW1zJztcbmltcG9ydCB7IElQbHVnaW5UZW1wbGF0ZXMgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2ludGVyZmFjZXMvSVBsdWdpblRlbXBsYXRlcyc7XG5pbXBvcnQgeyBJUGx1Z2luQ1NTIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9pbnRlcmZhY2VzL0lQbHVnaW5DU1MnO1xuaW1wb3J0IHsgSUluamVjdGlvbkluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvQVBJL1VpQXBpJztcbmltcG9ydCB7IElQbHVnaW5Db25maWcgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2ludGVyZmFjZXMvSVBsdWdpbkNvbmZpZyc7XG5pbXBvcnQgeyBQbHVnaW5TdHlsZSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvUGx1Z2luU3R5bGVzJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1Byb3ZpZGVycyc7XG5pbXBvcnQgeyBCYXNlUGx1Z2luIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9CYXNlUGx1Z2luJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tQnV0dG9uIHtcbiAgICBwcm92aWRlck5hbWU6IHN0cmluZztcbiAgICBpY29uVVJMOiBzdHJpbmc7XG4gICAgbGFzdExvZ2luSWNvblVSTDogc3RyaW5nO1xuICAgIGNvbm5lY3RlZEljb25VUkw/OiBzdHJpbmc7XG4gICAgdHlwZT86IHN0cmluZztcbiAgICBpZHBOYW1lPzogc3RyaW5nO1xuICAgIHBvc2l0aW9uPzogbnVtYmVyO1xuICAgIGxvZ29VUkw/OiBzdHJpbmc7XG4gICAgb3BlbklEVVJMPzogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBJRWRpdENvbm5lY3Rpb25QbHVnaW5QYXJhbXMgZXh0ZW5kcyBJUGx1Z2luUGFyYW1zIHtcbiAgICBjYXB0aW9uVGV4dD86IHN0cmluZztcbiAgICBjb250ZXh0PzogYW55O1xuICAgIHNob3dUZXJtc0xpbms/OiBzdHJpbmc7XG4gICAgZW5hYmxlZFByb3ZpZGVycz86IHN0cmluZztcbiAgICBkaXNhYmxlZFByb3ZpZGVycz86IHN0cmluZztcbiAgICBzaG93VG9vbHRpcHM/OiBzdHJpbmc7XG4gICAgcmVxdWlyZWRDYXBhYmlsaXRpZXM/OiBzdHJpbmc7XG4gICAgc2Vzc2lvbkV4cGlyYXRpb24/OiBudW1iZXI7XG4gICAgY2lkPzogc3RyaW5nO1xuICAgIGFjdGlvbkF0dHJpYnV0ZXM/OiBhbnk7XG4gICAgY3NzUHJlZml4Pzogc3RyaW5nO1xuICAgIGN1c3RvbUJ1dHRvbj86IElDdXN0b21CdXR0b247XG4gICAgY3VzdG9tQnV0dG9ucz86IEFycmF5PElDdXN0b21CdXR0b24+O1xufVxuZXhwb3J0IGludGVyZmFjZSBJRWRpdENvbm5lY3Rpb25QbHVnaW5UZW1wbGF0ZXMgZXh0ZW5kcyBJUGx1Z2luVGVtcGxhdGVzIHtcbiAgICBlZGl0OiBzdHJpbmc7XG4gICAgc29jaWFsUHJvdmlkZXJBcHBzOiBzdHJpbmc7XG4gICAgY29ubmVjdGVkU29jaWFsUHJvdmlkZXI6IHN0cmluZztcbiAgICBkaXNjb25uZWN0ZWRTb2NpYWxQcm92aWRlcjogc3RyaW5nO1xuICAgIGlkZW50aXR5Q291bnRyeTogc3RyaW5nO1xuICAgIGlkZW50aXR5Q2l0eTogc3RyaW5nO1xuICAgIGlkZW50aXR5QmlydGhEYXRlOiBzdHJpbmc7XG4gICAgZGVmYXVsdFBob3RvVVJMOiBzdHJpbmc7XG4gICAgZ2lneWFUZXJtczogc3RyaW5nO1xuICAgIGdpZ3lhQnJhbmQ6IHN0cmluZztcbiAgICBmb290ZXI6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSUVkaXRDb25uZWN0aW9uUGx1Z2luQ1NTIGV4dGVuZHMgSVBsdWdpbkNTUyB7fVxuaW50ZXJmYWNlIElHaWd5YVVzZXIge1xuICAgIGlkZW50aXRpZXM6IGFueTtcbiAgICBwcm92aWRlcnM6IEFycmF5PHN0cmluZz47XG59XG5cbmNvbnN0IHNob3VsZFJlbmRlclByb3ZpZGVyID0gcHJvdmlkZXIgPT4gcHJvdmlkZXIgIT09ICdzaXRlJyAmJiBwcm92aWRlciAhPT0gJ2xpdGUtZW1haWwnO1xuXG50eXBlIElQcm92aWRlciA9IFByb3ZpZGVyICYgeyBidXR0b25EYXRhPzogSUN1c3RvbUJ1dHRvbiB9O1xuY29uc3QgQmFzZVBsdWdpbkdsb2JhbDogdHlwZW9mIEJhc2VQbHVnaW4gPSBnaWd5YS5fLnBsdWdpbnMuQmFzZVBsdWdpbjtcbmV4cG9ydCBjbGFzcyBFZGl0Q29ubmVjdGlvblBsdWdpbiBleHRlbmRzIEJhc2VQbHVnaW5HbG9iYWw8SUVkaXRDb25uZWN0aW9uUGx1Z2luUGFyYW1zLCBJRWRpdENvbm5lY3Rpb25QbHVnaW5UZW1wbGF0ZXMsIElFZGl0Q29ubmVjdGlvblBsdWdpbkNTUz4ge1xuICAgIC8vIE92ZXJyaWRlIEJhc2VQbHVnaW4gbWV0aG9kc1xuICAgIHB1YmxpYyBzdGF0aWMgaW5qZWN0aW9uSW5mbygpOiBJSW5qZWN0aW9uSW5mbyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnZWRpdCcsXG4gICAgICAgICAgICBuYW1lc3BhY2U6ICdzb2NpYWxpemUnLFxuICAgICAgICAgICAgbWV0aG9kTmFtZTogJ3Nob3dFZGl0Q29ubmVjdGlvbicsXG4gICAgICAgICAgICBqc05hbWU6ICdnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5lZGl0JyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBjbGFzcyB2YXJpYWJsZXNcbiAgICBwcml2YXRlIHByb3ZpZGVyQXBwc0xpbmtzID0ge1xuICAgICAgICBmYWNlYm9vazogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zZXR0aW5ncz90YWI9YXBwbGljYXRpb25zJyxcbiAgICAgICAgdHdpdHRlcjogJ2h0dHBzOi8vdHdpdHRlci5jb20vc2V0dGluZ3MvYXBwbGljYXRpb25zJyxcbiAgICAgICAgbGlua2VkaW46ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vcHNldHRpbmdzL3Blcm1pdHRlZC1zZXJ2aWNlcycsXG4gICAgICAgIGdvb2dsZXBsdXM6ICdodHRwczovL3BsdXMuZ29vZ2xlLmNvbS91LzAvYXBwcycsXG4gICAgICAgIG1lc3NlbmdlcjogJ2h0dHBzOi8vYWNjb3VudC5saXZlLmNvbS9jb25zZW50L01hbmFnZScsXG4gICAgICAgIHlhaG9vOiAnaHR0cHM6Ly9hcGkubG9naW4ueWFob28uY29tL1dTTG9naW4vVjEvdW5saW5rJyxcbiAgICB9O1xuXG4gICAgLy9wcml2YXRlIHBybXM6IElFZGl0Q29ubmVjdGlvblBsdWdpblBhcmFtcztcbiAgICBwcml2YXRlIHByb3ZpZGVyczogQXJyYXk8SVByb3ZpZGVyPjtcbiAgICBwcml2YXRlIHVzZXI6IElHaWd5YVVzZXI7XG4gICAgcHJpdmF0ZSBpbWFnZUJhc2U6IHN0cmluZztcbiAgICBwcml2YXRlIHNob3dUb29sdGlwczogYm9vbGVhbjtcblxuICAgIC8vIGluaXRpYWxpemF0aW9uIGJsb2NrLlxuICAgIHB1YmxpYyBpbml0KGxvYWRlZENhbGxiYWNrOiAoc3VjY2Vzcz86IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zaG93VG9vbHRpcHMgPSBnaWd5YS51dGlscy52YWxpZGF0aW9uLmlzRXhwbGljaXRUcnVlKHRoaXMucGFyYW1zLnNob3dUb29sdGlwcyk7XG5cbiAgICAgICAgdGhpcy5pbWFnZUJhc2UgPSBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9lZGl0LycpO1xuXG4gICAgICAgIC8vIGluaXQgdGhlIHByb3ZpZGVycyBsaXN0XG4gICAgICAgIHRoaXMucHJvdmlkZXJzID0gZ2lneWEuZ2xvYmFsLnJlc29sdmVQcm92aWRlcnModGhpcy5wYXJhbXMuZW5hYmxlZFByb3ZpZGVycywgdGhpcy5wYXJhbXMuZGlzYWJsZWRQcm92aWRlcnMsIHRoaXMucGFyYW1zLnJlcXVpcmVkQ2FwYWJpbGl0aWVzKTtcblxuICAgICAgICBnaWd5YS51dGlscy5hcnJheS5mb3JFYWNoKHRoaXMucGFyYW1zLmN1c3RvbUJ1dHRvbnMgfHwgW3RoaXMucGFyYW1zLmN1c3RvbUJ1dHRvbl0sIG9CdXR0b24gPT4ge1xuICAgICAgICAgICAgLy8gSWdub3JlIGFsbCBub24tU0FNTCBidXR0b25zLlxuICAgICAgICAgICAgaWYgKG9CdXR0b24gJiYgb0J1dHRvbi50eXBlICYmIG9CdXR0b24udHlwZS50b0xvd2VyQ2FzZSgpID09ICdzYW1sJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBDdXN0b21Qcm92aWRlciA9IGdpZ3lhLnV0aWxzLm9iamVjdC5jbG9uZShnaWd5YS5zb2NpYWxpemUuX2dldFByb3ZpZGVyQnlJRCg0MTIyKSk7XG4gICAgICAgICAgICAgICAgcEN1c3RvbVByb3ZpZGVyLm5hbWUgPSAnc2FtbC0nICsgb0J1dHRvbi5pZHBOYW1lO1xuICAgICAgICAgICAgICAgIHBDdXN0b21Qcm92aWRlci5kaXNwbGF5TmFtZSA9IG9CdXR0b24ucHJvdmlkZXJOYW1lO1xuICAgICAgICAgICAgICAgIHBDdXN0b21Qcm92aWRlci5idXR0b25EYXRhID0gb0J1dHRvbjtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3ZpZGVycy5zcGxpY2Uob0J1dHRvbi5wb3NpdGlvbiAmJiBvQnV0dG9uLnBvc2l0aW9uID4gMSA/IG9CdXR0b24ucG9zaXRpb24gLSAxIDogMCwgMCwgcEN1c3RvbVByb3ZpZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcmVnaXN0ZXIgdG8gZ2xvYmFsIGV2ZW50czogbG9naW4sIGxvZ291dCwgY29ubmVjdCwgZGlzY29ubmVjdFxuICAgICAgICB0aGlzLnJlZ2lzdGVyVG9HbG9iYWxFdmVudHMoKTtcblxuICAgICAgICAvLyBpbml0IHVzZXIgc3RhdGVcbiAgICAgICAgdGhpcy5nZXRVc2VySW5mbyhfID0+IHtcbiAgICAgICAgICAgIC8vIHJlbmRlciB0aGUgY29udHJvbFxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICAgICAgLy8gc2V0IHRoZSBjb250cm9sIERpbWVuc2lvbnMuIG5lZWRlZCBvbmx5IG9uY2Ugb24gaW5pdCBhZnRlciB0aGUgZmlyc3QgcmVuZGVyLlxuICAgICAgICAgICAgdGhpcy5pbml0RGltZW5zaW9ucygpO1xuXG4gICAgICAgICAgICBsb2FkZWRDYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29uZmlnKCk6IElQbHVnaW5Db25maWc8SUVkaXRDb25uZWN0aW9uUGx1Z2luUGFyYW1zPiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZXF1aXJlZFBhcmFtczogW10sXG4gICAgICAgICAgICBkZWZhdWx0UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZFByb3ZpZGVyczogJyonLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMzEwJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyNTAnLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkQ2FwYWJpbGl0aWVzOiAnZnJpZW5kcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGFzTW9iaWxlVUk6IGZhbHNlLFxuICAgICAgICAgICAgYWxsb3dNb2RhbDogdHJ1ZSxcbiAgICAgICAgICAgIGRlZmF1bHRNb2RhbFBhcmFtczoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWRQcm92aWRlcnM6ICcqJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzMxMCcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzEwJyxcbiAgICAgICAgICAgICAgICByZXF1aXJlZENhcGFiaWxpdGllczogJ2ZyaWVuZHMnLFxuICAgICAgICAgICAgICAgIGNhcHRpb25UZXh0S2V5OiAnRWRpdENvbm5lY3Rpb25zJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBMb2dpYyAtLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgICBwcml2YXRlIGdldFVzZXJJbmZvKGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcbiAgICAgICAgZ2lneWEuc29jaWFsaXplLmdldFVzZXJJbmZvKHRoaXMucGFyYW1zLCB7XG4gICAgICAgICAgICBpbmNsdWRlQWxsSWRlbnRpdGllczogdHJ1ZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yQ29kZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHJlc3BvbnNlLnVzZXI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRXJyb3JGcm9tUmVzcG9uc2UodGhpcy5wYXJhbXMsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhyZXNwb25zZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBzZXR0aW5nIHRoZSBkaW1lbnNpb25zIGZvciB0aGUgZWxlbWVudHMuXG4gICAgLy8gdytoIHdoZW4gdGhlIGdpZ3lhIGJyYW5kIG9yIHRlcm1zIGxpbmsgaXMgb24uXG4gICAgcHJpdmF0ZSBpbml0RGltZW5zaW9ucygpIHtcbiAgICAgICAgbGV0IGZvb3RlckhlaWdodCA9IDA7XG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSAnRm9vdGVyJyBleGlzdHMgaW4gdGhlIHNjb3BlIG9mIHRoZSBjb250cm9sLlxuICAgICAgICBsZXQgZlF1ZXJ5OiBBcnJheTxIVE1MRWxlbWVudD4gPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLWVkaXQtY29ubmVjdGlvbnMtZm9vdGVyJyk7XG5cbiAgICAgICAgLy8gaWYgdGhlIGZvb3RlciBmb3VuZFxuICAgICAgICBpZiAoZlF1ZXJ5Lmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGZvb3RlciA9IGZRdWVyeVswXTtcblxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWxjdWxhdGVkIGhlaWdodCBvZiB0aGUgZWxlbWVudFxuICAgICAgICAgICAgZm9vdGVySGVpZ2h0ID0gZ2lneWEudXRpbHMuRE9NLmdldEhUTUxTaXplKGZvb3Rlci5pbm5lckhUTUwsIGZvb3RlcikuaDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN1YnRydWN0aW5nIHRoZSBmb290ZXIgc2l6ZSBmcm9tIHRoZSBsaXN0IG9mIGNvbm5lY3Rpb25zXG4gICAgICAgIGxldCBjb25uZWN0aW9uc0xpc3RIZWlnaHQgPSBwYXJzZUludCh0aGlzLnBhcmFtcy5oZWlnaHQpIC0gZm9vdGVySGVpZ2h0O1xuXG4gICAgICAgIGxldCBoZWlnaHRDc3MgPSAnLmdpZy1lZGl0LWNvbm5lY3Rpb25zIHsnICsgWydoZWlnaHQ6ICcsIGNvbm5lY3Rpb25zTGlzdEhlaWdodCwgJ3B4OycsICdtaW4td2lkdGg6IDIxNXB4OyddLmpvaW4oJycpICsgJ30nO1xuXG4gICAgICAgIGdpZ3lhLl8ucGx1Z2lucy51dGlscy5jc3MuYWRkQ3NzKGhlaWdodENzcywgdGhpcy5wYXJhbXMuY3NzUHJlZml4KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGx1Z2luU3R5bGUoKSA9PSBQbHVnaW5TdHlsZS5sZWdhY3kgJiYgdGhpcy5pc01vZGFsKSB7XG4gICAgICAgICAgICBsZXQgdWlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHVpQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gdWlDb250YWluZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgdGhlIGNvbnRhaW5lciBodG1sLlxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLmdldENvbnRyb2xIdG1sKCk7XG5cbiAgICAgICAgLy8gcmVnaXN0ZXJpbmcgdG8gbG9jYWwgZXZlbnRzIDogY29ubmVjdCxkaXNjb25uZWN0XG4gICAgICAgIHRoaXMucmVnaXN0ZXJMb2NhbEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRXZlbnRzIC0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4gICAgcHJpdmF0ZSByZWdpc3RlckxvY2FsRXZlbnRzKCkge1xuICAgICAgICBsZXQgY29ubmVjdExpbmtFbGVtZW50czogQXJyYXk8SFRNTEVsZW1lbnQ+ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy1lZGl0LWNvbm5lY3Rpb25zLWNvbm5lY3RMaW5rJyk7XG4gICAgICAgIGxldCBkaXNjb25uZWN0TGlua0VsZW1lbnRzOiBBcnJheTxIVE1MRWxlbWVudD4gPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGFpbmVyLCAnZ2lnLWVkaXQtY29ubmVjdGlvbnMtZGlzY29ubmVjdExpbmsnKTtcblxuICAgICAgICBsZXQgZXZlbnROYW1lID0gZ2lneWEubG9jYWxJbmZvLmlzSU9TICYmIGdpZ3lhLmxvY2FsSW5mby5pc1NhZmFyaSA/ICd0b3VjaGVuZCcgOiAnY2xpY2snO1xuXG4gICAgICAgIC8vIFJlZ2lzdGVyaW5nIGZvaXIgdGhlIGNvbm5lY3QgZXZlbnRzLlxuICAgICAgICBpZiAoY29ubmVjdExpbmtFbGVtZW50cyAmJiBjb25uZWN0TGlua0VsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29ubmVjdExpbmtFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGNvbm5lY3RMaW5rRWxlbWVudHNbaV0sIGV2ZW50TmFtZSwgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Db25uZWN0Q2xpY2soZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWdpc3RlcmluZyBmb3IgdGhlIERpc2Nvbm5lY3QgZXZlbnRzLlxuICAgICAgICBpZiAoZGlzY29ubmVjdExpbmtFbGVtZW50cyAmJiBkaXNjb25uZWN0TGlua0VsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzY29ubmVjdExpbmtFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGRpc2Nvbm5lY3RMaW5rRWxlbWVudHNbaV0sIGV2ZW50TmFtZSwgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25EaXNjb25uZWN0Q2xpY2soZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVXNlclN0YXRlQ2hhbmdlID0gKCkgPT4gdGhpcy5Vc2VyU3RhdGVDaGFuZ2VkKCk7XG5cbiAgICBwcml2YXRlIHJlZ2lzdGVyVG9HbG9iYWxFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuYWRkR2xvYmFsRXZlbnRIYW5kbGVycyh7XG4gICAgICAgICAgICBvbkxvZ2luOiB0aGlzLm9uVXNlclN0YXRlQ2hhbmdlLFxuICAgICAgICAgICAgb25Mb2dvdXQ6IHRoaXMub25Vc2VyU3RhdGVDaGFuZ2UsXG4gICAgICAgICAgICBvbkNvbm5lY3Rpb25BZGRlZDogdGhpcy5vblVzZXJTdGF0ZUNoYW5nZSxcbiAgICAgICAgICAgIG9uQ29ubmVjdGlvblJlbW92ZWQ6IHRoaXMub25Vc2VyU3RhdGVDaGFuZ2UsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgdW5yZWdpc3RlclRvR2xvYmFsRXZlbnRzKCkge1xuICAgICAgICB0aGlzLnJlbW92ZUdsb2JhbEV2ZW50SGFuZGxlcnMoe1xuICAgICAgICAgICAgb25Mb2dpbjogdGhpcy5vblVzZXJTdGF0ZUNoYW5nZSxcbiAgICAgICAgICAgIG9uTG9nb3V0OiB0aGlzLm9uVXNlclN0YXRlQ2hhbmdlLFxuICAgICAgICAgICAgb25Db25uZWN0aW9uQWRkZWQ6IHRoaXMub25Vc2VyU3RhdGVDaGFuZ2UsXG4gICAgICAgICAgICBvbkNvbm5lY3Rpb25SZW1vdmVkOiB0aGlzLm9uVXNlclN0YXRlQ2hhbmdlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcbiAgICAgICAgdGhpcy51bnJlZ2lzdGVyVG9HbG9iYWxFdmVudHMoKTtcblxuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBldmVudCB0cmlnZ2VyIHJlLXJlbmRlclxuICAgIHByaXZhdGUgVXNlclN0YXRlQ2hhbmdlZCgpIHtcbiAgICAgICAgLy8gaW5pdCB1c2VyIHN0YXRlXG4gICAgICAgIHRoaXMuZ2V0VXNlckluZm8oXyA9PiB7XG4gICAgICAgICAgICAvLyByZW5kZXIgdGhlIGNvbnRyb2xcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Db25uZWN0Q2xpY2soZTogRXZlbnQpIHtcbiAgICAgICAgbGV0IHRhcmdldDogYW55ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuICAgICAgICBsZXQgcHJvdmlkZXIgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNvY2lhbHByb3ZpZGVyJyk7XG5cbiAgICAgICAgZ2lneWEuc29jaWFsaXplLmFkZENvbm5lY3Rpb24odGhpcy5wYXJhbXMsIHtcbiAgICAgICAgICAgIHByb3ZpZGVyOiBwcm92aWRlcixcbiAgICAgICAgICAgIGluY2x1ZGVBbGxJZGVudGl0aWVzOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRGlzY29ubmVjdENsaWNrKGU6IEV2ZW50KSB7XG4gICAgICAgIGxldCB0YXJnZXQ6IGFueSA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcbiAgICAgICAgbGV0IHByb3ZpZGVyID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zb2NpYWxwcm92aWRlcicpO1xuXG4gICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5yZW1vdmVDb25uZWN0aW9uKHRoaXMucGFyYW1zLCB7XG4gICAgICAgICAgICBwcm92aWRlcjogcHJvdmlkZXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVGVtcGxhdGluZyAtLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAgIHByaXZhdGUgZ2V0Q29udHJvbEh0bWwoKSB7XG4gICAgICAgIC8vIHNldHRpbmcgdXAgMiBsaXN0cyBmb3Igc2ltcGxlIHN0YXR1cyBhcHBlbmRpbmcuXG4gICAgICAgIGxldCBjb25uZWN0ZWRQcm92aWRlcnMgPSBbXTtcbiAgICAgICAgbGV0IG5vdENvbm5lY3RlZFByb3ZpZGVycyA9IFtdO1xuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgaW5uZXIgaXRlbXNcbiAgICAgICAgZm9yIChsZXQgcHJvdmlkZXIgb2YgdGhpcy5wcm92aWRlcnMpIHtcbiAgICAgICAgICAgIGlmICghc2hvdWxkUmVuZGVyUHJvdmlkZXIocHJvdmlkZXIubmFtZSkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy51c2VyLmlkZW50aXRpZXMuaGFzT3duUHJvcGVydHkocHJvdmlkZXIubmFtZSkpIHtcbiAgICAgICAgICAgICAgICBjb25uZWN0ZWRQcm92aWRlcnMucHVzaCh0aGlzLmdldFByb3ZpZGVyTGlzdEl0ZW0ocHJvdmlkZXIsIHRoaXMudXNlci5pZGVudGl0aWVzW3Byb3ZpZGVyLm5hbWVdKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vdENvbm5lY3RlZFByb3ZpZGVycy5wdXNoKHRoaXMuZ2V0UHJvdmlkZXJMaXN0SXRlbShwcm92aWRlciwgbnVsbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHVzZXIgaGFzIGlkZW50aXRpZXMgb3V0c2lkZSB0aGUgcmVxdWVzdGVkIHByb3ZpZGVycyBjcml0aXJpYS5cbiAgICAgICAgLy8gaWYgc28sIGFkZCB0aGUgcHJvdmlkZXIgYW5kIHRoZSBpZGVudGl0eS5cbiAgICAgICAgZm9yIChsZXQgcCBpbiB0aGlzLnVzZXIuaWRlbnRpdGllcykge1xuICAgICAgICAgICAgaWYgKCFzaG91bGRSZW5kZXJQcm92aWRlcihwKSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3ZpZGVyc1tpXS5uYW1lID09PSBwKSBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAvLyBub3QgZm91bmQsIGFkZCB0byB0aGUgbGlzdDpcbiAgICAgICAgICAgICAgICBsZXQgbWlzc2luZ1Byb3ZpZGVyID0gZ2lneWEuXy5wcm92aWRlcnMuZ2V0UHJvdmlkZXJCeU5hbWUocCk7XG4gICAgICAgICAgICAgICAgY29ubmVjdGVkUHJvdmlkZXJzLnB1c2godGhpcy5nZXRQcm92aWRlckxpc3RJdGVtKG1pc3NpbmdQcm92aWRlciwgdGhpcy51c2VyLmlkZW50aXRpZXNbcF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJldHVybiB0aGUgY29udGFpbmVyIEhUTUxcbiAgICAgICAgcmV0dXJuIGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMuZ2V0VGVtcGxhdGVzKCkuZWRpdCwge1xuICAgICAgICAgICAgcHJvdmlkZXJzRGF0YTogY29ubmVjdGVkUHJvdmlkZXJzLmpvaW4oJycpICsgbm90Q29ubmVjdGVkUHJvdmlkZXJzLmpvaW4oJycpLFxuICAgICAgICAgICAgZm9vdGVyOiB0aGlzLmdldEZvb3RlcigpLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gYSBQcm92aWRlciBsaSBlbGVtZW50LCBpZiB0aGUgZGF0YSBleGlzdHMsIGFkZGluZyB0aGUgaWRlbnRpdHkgZGF0YVxuICAgIHByaXZhdGUgZ2V0UHJvdmlkZXJMaXN0SXRlbShwcm92aWRlcjogSVByb3ZpZGVyLCBpZGVudGl0eU9iamVjdD86IGFueSkge1xuICAgICAgICBsZXQgcHJvdmlkZXJUb29sdGlwID0gdGhpcy5zaG93VG9vbHRpcHMgPyBwcm92aWRlci5kaXNwbGF5TmFtZSA6ICcnO1xuXG4gICAgICAgIGlmIChpZGVudGl0eU9iamVjdCkge1xuICAgICAgICAgICAgbGV0IHNvY2lhbFByb3ZpZGVyQXBwcyA9ICcnO1xuXG4gICAgICAgICAgICAvLyBleHRyYWN0IHRoZSBwcm92aWRlciBhdXRoIG1hbmFnZSBsaW5rIGZyb20gdGhlIGxpc3QgaWYgaGFzIG9uZS5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3ZpZGVyQXBwc0xpbmtzLmhhc093blByb3BlcnR5KHByb3ZpZGVyLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgc29jaWFsUHJvdmlkZXJBcHBzID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5nZXRUZW1wbGF0ZXMoKS5zb2NpYWxQcm92aWRlckFwcHMsIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJBcHBVcmw6IHRoaXMucHJvdmlkZXJBcHBzTGlua3NbcHJvdmlkZXIubmFtZV0sXG4gICAgICAgICAgICAgICAgICAgIGxuZ19NeWFwcHM6IHRoaXMuZ2V0VGV4dCgnbXlfYXBwcycpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAtLSA+IHNvY2lhbFByb3ZpZGVyQ29ubmVjdGVkXG4gICAgICAgICAgICByZXR1cm4gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5nZXRUZW1wbGF0ZXMoKS5jb25uZWN0ZWRTb2NpYWxQcm92aWRlciwge1xuICAgICAgICAgICAgICAgIHByb3ZpZGVyTmFtZTogcHJvdmlkZXIubmFtZSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogcHJvdmlkZXIuZGlzcGxheU5hbWUgfHwgcHJvdmlkZXIubmFtZSxcbiAgICAgICAgICAgICAgICBwcm92aWRlclRvb2x0aXA6IHByb3ZpZGVyVG9vbHRpcCxcbiAgICAgICAgICAgICAgICBwcm9maWxlTmFtZTogaWRlbnRpdHlPYmplY3Qubmlja25hbWUsXG4gICAgICAgICAgICAgICAgcHJvZmlsZUltYWdlOiB0aGlzLmdldElkZW50aXR5UGhvdG9VcmwoaWRlbnRpdHlPYmplY3QpLFxuICAgICAgICAgICAgICAgIHByb2ZpbGVDb3VudHJ5OiB0aGlzLmdldElkZW50aXR5Q291bnRyeShpZGVudGl0eU9iamVjdCksXG4gICAgICAgICAgICAgICAgcHJvZmlsZUNpdHk6IHRoaXMuZ2V0SWRlbnRpdHlDaXR5KGlkZW50aXR5T2JqZWN0KSxcbiAgICAgICAgICAgICAgICBwcm9maWxlQmlydGhEYXRlOiB0aGlzLmdldElkZW50aXR5QmlydGhEYXRlKGlkZW50aXR5T2JqZWN0KSxcbiAgICAgICAgICAgICAgICBwcm92aWRlckltYWdlOiB0aGlzLmdldFBsdWdpbkltYWdlKHByb3ZpZGVyLCBpZGVudGl0eU9iamVjdCksXG4gICAgICAgICAgICAgICAgc29jaWFsUHJvdmlkZXJBcHBzOiBzb2NpYWxQcm92aWRlckFwcHMsXG4gICAgICAgICAgICAgICAgbG5nX0Rpc2Nvbm5lY3Q6IHRoaXMuZ2V0VGV4dCgnZGlzY29ubmVjdCcpLFxuICAgICAgICAgICAgICAgIGFyaWFMYWJlbDogYCR7cHJvdmlkZXIuZGlzcGxheU5hbWV9IENvbm5lY3RlZC4gVXNlcm5hbWUgJHtpZGVudGl0eU9iamVjdD8ubmlja25hbWV9YFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAtLSA+IHNvY2lhbFByb3ZpZGVyTm90Q29ubmVjdGVkXG4gICAgICAgICAgICByZXR1cm4gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5nZXRUZW1wbGF0ZXMoKS5kaXNjb25uZWN0ZWRTb2NpYWxQcm92aWRlciwge1xuICAgICAgICAgICAgICAgIHByb3ZpZGVyTmFtZTogcHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJUb29sdGlwOiBwcm92aWRlclRvb2x0aXAsXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJJbWFnZTogdGhpcy5nZXRQbHVnaW5JbWFnZShwcm92aWRlciksXG4gICAgICAgICAgICAgICAgbG5nX0Nvbm5lY3Q6IHRoaXMuZ2V0VGV4dCgnY29ubmVjdCcpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFBsdWdpbkltYWdlKHByb3ZpZGVyOiBJUHJvdmlkZXIsIGlkZW50aXR5PzogYW55KSB7XG4gICAgICAgIGlmIChwcm92aWRlci5idXR0b25EYXRhKSB7XG4gICAgICAgICAgICBpZiAoIWlkZW50aXR5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3ZpZGVyLmJ1dHRvbkRhdGEuaWNvblVSTDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3ZpZGVyLmJ1dHRvbkRhdGEuY29ubmVjdGVkSWNvblVSTCB8fCBwcm92aWRlci5idXR0b25EYXRhLmljb25VUkw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5pbWFnZUJhc2V9JHtwcm92aWRlci5uYW1lfS5wbmdgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRJZGVudGl0eUNvdW50cnkoaWRlbnRpdHkpIHtcbiAgICAgICAgaWYgKGlkZW50aXR5LmNvdW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLmdldFRlbXBsYXRlcygpLmlkZW50aXR5Q291bnRyeSwge1xuICAgICAgICAgICAgICAgIGxuZ19Db3VudHJ5OiB0aGlzLmdldFRleHQoJ2NvdW50cnknKSxcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiBpZGVudGl0eS5jb3VudHJ5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0SWRlbnRpdHlDaXR5KGlkZW50aXR5KSB7XG4gICAgICAgIGlmIChpZGVudGl0eS5jaXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5nZXRUZW1wbGF0ZXMoKS5pZGVudGl0eUNpdHksIHtcbiAgICAgICAgICAgICAgICBsbmdfQ2l0eTogdGhpcy5nZXRUZXh0KCdjaXR5JyksXG4gICAgICAgICAgICAgICAgY2l0eTogaWRlbnRpdHkuY2l0eSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldElkZW50aXR5QmlydGhEYXRlKGlkZW50aXR5KSB7XG4gICAgICAgIGlmIChpZGVudGl0eS5iaXJ0aFllYXIgJiYgaWRlbnRpdHkuYmlydGhNb250aCAmJiBpZGVudGl0eS5iaXJ0aERheSkge1xuICAgICAgICAgICAgbGV0IHllYXIgPSBpZGVudGl0eS5iaXJ0aFllYXI7XG4gICAgICAgICAgICBsZXQgbW9udGggPSBpZGVudGl0eS5iaXJ0aE1vbnRoO1xuICAgICAgICAgICAgbGV0IGRheSA9IGlkZW50aXR5LmJpcnRoRGF5O1xuICAgICAgICAgICAgaWYgKCF5ZWFyKSB5ZWFyID0gJz8/JztcbiAgICAgICAgICAgIGlmICghbW9udGgpIG1vbnRoID0gJz8/JztcbiAgICAgICAgICAgIGlmICghZGF5KSBkYXkgPSAnPz8nO1xuXG4gICAgICAgICAgICByZXR1cm4gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5nZXRUZW1wbGF0ZXMoKS5pZGVudGl0eUJpcnRoRGF0ZSwge1xuICAgICAgICAgICAgICAgIGxuZ19EYXRlX29mX2JpcnRoOiB0aGlzLmdldFRleHQoJ2RhdGVfb2ZfYmlydGgnKSxcbiAgICAgICAgICAgICAgICBkYXk6IGRheSxcbiAgICAgICAgICAgICAgICBtb250aDogbW9udGgsXG4gICAgICAgICAgICAgICAgeWVhcjogeWVhcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldElkZW50aXR5UGhvdG9VcmwoaWRlbnRpdHkpIHtcbiAgICAgICAgbGV0IHVybCA9IGlkZW50aXR5LnRodW1ibmFpbFVSTDtcbiAgICAgICAgaWYgKCF1cmwpIHVybCA9IGlkZW50aXR5LnBob3RvVVJMO1xuICAgICAgICBpZiAoIXVybClcbiAgICAgICAgICAgIHVybCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMuZ2V0VGVtcGxhdGVzKCkuZGVmYXVsdFBob3RvVVJMLCB7XG4gICAgICAgICAgICAgICAgaW1hZ2VCYXNlVVJMOiB0aGlzLmltYWdlQmFzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZ2lneWEuZ2xvYmFsLmdldFBob3RvVVJMKHVybCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRGb290ZXIoKSB7XG4gICAgICAgIGxldCBmb290ZXIgPSAnJztcbiAgICAgICAgLy8gQ2hlY2tpbmcgaWYgd2UgbmVlZCB0byByZW5kZXIgdGhlIGZvb3Rlci5cbiAgICAgICAgbGV0IHNob3dUZXJtcyA9IHRoaXMucGFyYW1zLnNob3dUZXJtc0xpbms7XG5cbiAgICAgICAgaWYgKHNob3dUZXJtcykge1xuICAgICAgICAgICAgbGV0IGJyYW5kID0gJyc7XG5cbiAgICAgICAgICAgIGxldCB0ZXJtcyA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMuZ2V0VGVtcGxhdGVzKCkuZ2lneWFUZXJtcywge1xuICAgICAgICAgICAgICAgIGxuZ19UZXJtczogdGhpcy5nZXRUZXh0KCd0ZXJtcycpLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0aW5nIFRoZSBGb290ZXJcbiAgICAgICAgICAgIGZvb3RlciA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMuZ2V0VGVtcGxhdGVzKCkuZm9vdGVyLCB7XG4gICAgICAgICAgICAgICAgZ2lneWFUZXJtczogdGVybXMsXG4gICAgICAgICAgICAgICAgZ2lneWFCcmFuZDogYnJhbmQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb290ZXI7XG4gICAgfVxufVxuIiwiZXhwb3J0IHZhciBjb25uZWN0ZWRTb2NpYWxQcm92aWRlciA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2Nvbm5lY3RlZFNvY2lhbFByb3ZpZGVyLmh0bWwnKTtcbmV4cG9ydCB2YXIgZGVmYXVsdFBob3RvVVJMID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvZGVmYXVsdFBob3RvVVJMLmh0bWwnKTtcbmV4cG9ydCB2YXIgZGlzY29ubmVjdGVkU29jaWFsUHJvdmlkZXIgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy9kaXNjb25uZWN0ZWRTb2NpYWxQcm92aWRlci5odG1sJyk7XG5leHBvcnQgdmFyIGVkaXQgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy9lZGl0Lmh0bWwnKTtcbmV4cG9ydCB2YXIgZm9vdGVyID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvZm9vdGVyLmh0bWwnKTtcbmV4cG9ydCB2YXIgZ2lneWFCcmFuZCA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2dpZ3lhQnJhbmQuaHRtbCcpO1xuZXhwb3J0IHZhciBnaWd5YVRlcm1zID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvZ2lneWFUZXJtcy5odG1sJyk7XG5leHBvcnQgdmFyIGlkZW50aXR5QmlydGhEYXRlID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvaWRlbnRpdHlCaXJ0aERhdGUuaHRtbCcpO1xuZXhwb3J0IHZhciBpZGVudGl0eUNpdHkgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy9pZGVudGl0eUNpdHkuaHRtbCcpO1xuZXhwb3J0IHZhciBpZGVudGl0eUNvdW50cnkgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy9pZGVudGl0eUNvdW50cnkuaHRtbCcpO1xuZXhwb3J0IHZhciBzb2NpYWxQcm92aWRlckFwcHMgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy9zb2NpYWxQcm92aWRlckFwcHMuaHRtbCcpO1xuIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICIsImltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNFZGl0Q29ubmVjdGlvbnMgZnJvbSAnc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5QbHVnaW4uRWRpdENvbm5lY3Rpb25zTmV3L2FwcC9FZGl0Q29ubmVjdGlvbnMnO1xuaW1wb3J0ICogYXMgSHRtbFJlc291cmNlcyBmcm9tICdzcmMvc29jaWFsaXplL0dpZ3lhLkpzLlBsdWdpbi5FZGl0Q29ubmVjdGlvbnNOZXcvYXBwL0h0bWxSZXNvdXJjZXMnO1xuaW1wb3J0ICogYXMgQ1NTUmVzb3VyY2UgZnJvbSAnc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5QbHVnaW4uRWRpdENvbm5lY3Rpb25zTmV3L2FwcC9DU1NSZXNvdXJjZXMnO1xuXG5kZWNsYXJlIGNvbnN0IGdpZ3lhOiBhbnk7XG5pZiAoIWdpZ3lhLl8pIHtcbiAgICBnaWd5YS5fID0ge307XG59XG5pZiAoIWdpZ3lhLl8ucGx1Z2lucykge1xuICAgIGdpZ3lhLl8ucGx1Z2lucyA9IHt9O1xufVxuaWYgKCFnaWd5YS5fLnBsdWdpbnMuZWRpdENvbm5lY3Rpb25zKSB7XG4gICAgZ2lneWEuXy5wbHVnaW5zLmVkaXRDb25uZWN0aW9ucyA9IHt9O1xufVxuaWYgKCFnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzKSB7XG4gICAgZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcyA9IHt9O1xufVxuaWYgKCFnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmh0bWwpIHtcbiAgICBnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmh0bWwgPSB7fTtcbn1cbmlmICghZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5odG1sKSB7XG4gICAgZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5jc3MgPSB7fTtcbn1cbmlmICghZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5odG1sLmVkaXQpIHtcbiAgICBnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmh0bWwuZWRpdCA9IHt9O1xufVxuaWYgKCFnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmNzcy5lZGl0KSB7XG4gICAgZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5jc3MuZWRpdCA9IHt9O1xufVxuT2JqZWN0LmFzc2lnbihnaWd5YS5fLnBsdWdpbnMuZWRpdENvbm5lY3Rpb25zLCBHaWd5YV9QbHVnaW5zRWRpdENvbm5lY3Rpb25zKTtcbk9iamVjdC5hc3NpZ24oZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5odG1sLmVkaXQsIEh0bWxSZXNvdXJjZXMpO1xuT2JqZWN0LmFzc2lnbihnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmNzcy5lZGl0LCBDU1NSZXNvdXJjZSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGxpIHJvbGU9XFxcIm9wdGlvblxcXCIgYXJpYS1sYWJlbD1cXFwiJGFyaWFMYWJlbFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImdpZy1lZGl0LWNvbm5lY3Rpb25zLXNvY2lhbC1wcm92aWRlclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnaWctZWRpdC1jb25uZWN0aW9ucy1zb2NpYWwtcHJvdmlkZXItaW1hZ2VcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIkcHJvdmlkZXJJbWFnZVxcXCIgdGl0bGU9XFxcIiRwcm92aWRlclRvb2x0aXBcXFwiIGFsdD1cXFwiJHByb3ZpZGVyTmFtZVxcXCIgLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPHN0cm9uZz4kcHJvZmlsZU5hbWU8L3N0cm9uZz5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImdpZy1lZGl0LWNvbm5lY3Rpb25zLWlkZW50aXR5LWluZm9ybWF0aW9uXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImdpZy1lZGl0LWNvbm5lY3Rpb25zLWlkZW50aXR5LWluZm9ybWF0aW9uLXByb2ZpbGUtaW1hZ2VcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIkcHJvZmlsZUltYWdlXFxcIiB0aXRsZT1cXFwiJHByb3ZpZGVyVG9vbHRpcFxcXCIgYWx0PVxcXCIkcHJvdmlkZXJOYW1lXFxcIiAvPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnaWctZWRpdC1jb25uZWN0aW9ucy1pbmZvcm1hdGlvbi1kZXRhaWxzXFxcIj5cXG4gICAgICAgICAgICAkcHJvZmlsZUNvdW50cnlcXG4gICAgICAgICAgICAkcHJvZmlsZUNpdHlcXG4gICAgICAgICAgICAkcHJvZmlsZUJpcnRoRGF0ZVxcbiAgICAgICAgICAgIDxhXFxuICAgICAgICAgICAgICAgICAgICBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImdpZy1lZGl0LWNvbm5lY3Rpb25zLWRpc2Nvbm5lY3RMaW5rXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1zb2NpYWxwcm92aWRlcj1cXFwiJHByb3ZpZGVyTmFtZVxcXCI+JGxuZ19EaXNjb25uZWN0PC9hPjxiciAvPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICAkc29jaWFsUHJvdmlkZXJBcHBzXFxuICAgIDwvZGl2PlxcbjwvbGk+XFxuXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIiRpbWFnZUJhc2VVUkwvRGVmYXVsdFVzZXJJbWFnZV80NXB4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bGk+XFxuICAgIDxkaXYgY2xhc3M9XFxcImdpZy1lZGl0LWNvbm5lY3Rpb25zLXNvY2lhbC1wcm92aWRlclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnaWctZWRpdC1jb25uZWN0aW9ucy1zb2NpYWwtcHJvdmlkZXItaW1hZ2VcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIkcHJvdmlkZXJJbWFnZVxcXCIgdGl0bGU9XFxcIiRwcm92aWRlclRvb2x0aXBcXFwiIGFsdD1cXFwiJHByb3ZpZGVyTmFtZVxcXCIgLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGEgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgdGFiaW5kZXg9XFxcIjBcXFwiIGNsYXNzPVxcXCJnaWctZWRpdC1jb25uZWN0aW9ucy1jb25uZWN0TGlua1xcXCIgcm9sZT1cXFwib3B0aW9uXFxcIiBhcmlhLWxhYmVsPVxcXCIkcHJvdmlkZXJOYW1lXFxcIiBkYXRhLXNvY2lhbHByb3ZpZGVyPVxcXCIkcHJvdmlkZXJOYW1lXFxcIj4kbG5nX0Nvbm5lY3Q8L2E+XFxuICAgIDwvZGl2PlxcbjwvbGk+XFxuXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImdpZy1lZGl0LWNvbm5lY3Rpb25zXFxcIj5cXG4gICAgPHVsIHJvbGU9XFxcImxpc3Rib3hcXFwiPlxcbiAgICAgICAgJHByb3ZpZGVyc0RhdGFcXG4gICAgPC91bD5cXG48L2Rpdj5cXG4kZm9vdGVyXFxuXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImdpZy1lZGl0LWNvbm5lY3Rpb25zLWZvb3RlclxcXCI+XFxuICAgICRnaWd5YVRlcm1zXFxuICAgICRnaWd5YUJyYW5kXFxuPC9kaXY+XFxuXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImdpZy1lZGl0LWNvbm5lY3Rpb25zLXNvY2lhbC1ieVxcXCI+XFxuICAgIDxzcGFuIG9uY2xpY2s9XFxcIndpbmRvdy5vcGVuKCdodHRwOi8vd3d3LmdpZ3lhLmNvbScpXFxcIj48c3Bhbj4ke3NvY2lhbEJ5fSA8L3NwYW4+PGltZyBhbHQ9XFxcIkdpZ3lhXFxcIiBjbGFzcz1cXFwiZ2lneWEtbG9nb1xcXCIgc3JjPVxcXCIke2xvZ29Vcmx9XFxcIiAvPjwvc3Bhbj5cXG48L2Rpdj5cXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZ2lnLWVkaXQtY29ubmVjdGlvbnMtdGVybXNcXFwiPlxcbiAgICA8YSB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgaHJlZj1cXFwiaHR0cDovL3d3dy5naWd5YS5jb20vdGVybXMtb2Ytc2VydmljZS9cXFwiPiRsbmdfVGVybXM8L2E+XFxuPC9kaXY+XFxuXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzcGFuIGNsYXNzPVxcXCJnaWctZWRpdC1jb25uZWN0aW9ucy1pbmZvcm1hdGlvbi1kZXRhaWxzLXJvd1xcXCI+JGxuZ19EYXRlX29mX2JpcnRoICRkYXkvJG1vbnRoLyR5ZWFyPC9zcGFuPlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3BhbiBjbGFzcz1cXFwiZ2lnLWVkaXQtY29ubmVjdGlvbnMtaW5mb3JtYXRpb24tZGV0YWlscy1yb3dcXFwiPiRsbmdfQ2l0eSAkY2l0eSA8L3NwYW4+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzcGFuIGNsYXNzPVxcXCJnaWctZWRpdC1jb25uZWN0aW9ucy1pbmZvcm1hdGlvbi1kZXRhaWxzLXJvd1xcXCI+JGxuZ19Db3VudHJ5ICRjb3VudHJ5IDwvc3Bhbj5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGEgaHJlZj1cXFwiJHByb3ZpZGVyQXBwVXJsXFxcIiBjbGFzcz1cXFwiZ2lnLWVkaXQtY29ubmVjdGlvbnMtcHJvdmlkZXItYXBwc1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxzcGFuPiRsbmdfTXlhcHBzPC9zcGFuPjwvYT5cXG5cIjsiXSwic291cmNlUm9vdCI6IiJ9