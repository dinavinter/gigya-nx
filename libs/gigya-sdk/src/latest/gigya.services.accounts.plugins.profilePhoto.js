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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/css/style.css":
/*!************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/css/style.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".gigya-myPhoto-profile-box-wrapper {\r\n    border-radius: 3px;\r\n    border: 1px solid #b6bdc5;\r\n    position: relative;\r\n    margin-left: 10px;\r\n    margin-top: 30px;\r\n}\r\n\r\n\r\n.gigya-myPhoto-profile-box-wrapper .gigya-myPhoto-status-icon {\r\n    background: url('$scriptBase/info_tooltip_active.png') no-repeat;\r\n    top: 4px;\r\n    left: 4px;\r\n    width: 14px;\r\n    height: 14px;\r\n    position: absolute;\r\n    font-family: Arial;\r\n    font-weight: 500;\r\n    color: #5a5a5a;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    line-height: 16px;\r\n    z-index: 100000000;\r\n}\r\n.gigya-myPhoto-profile-box-wrapper .gigya-myPhoto-delete-button {\r\n    display: none;\r\n    z-index: 100000000;\r\n    position: absolute;\r\n    width: 16px;\r\n    height: 19px;\r\n    right: 0px;\r\n    bottom: 2px;\r\n    cursor: pointer;\r\n    background-image: url(\"data:image/svg+xml,%3Csvg width='16' height='19' viewBox='0 0 16 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.875 1.25V2.375H0.125V1.25H5.22266C5.19922 1.25 5.28125 1.0625 5.46875 0.6875C5.65625 0.3125 6.125 0.125 6.875 0.125H9.16016C9.88672 0.125 10.3438 0.3125 10.5312 0.6875C10.7188 1.0625 10.8125 1.25 10.8125 1.25H15.875ZM14.2578 3.5H15.875V4.66016H14.75L13.625 17C13.625 17.75 13.25 18.125 12.5 18.125H3.5C2.75 18.125 2.375 17.75 2.375 17L1.25 4.66016H0.125V3.5H13.0625H14.2578ZM13.625 4.66016H2.375L3.5 17H12.5L13.625 4.66016ZM6.06641 14.6797L4.97656 14.7852L4.27344 6.91016L5.36328 6.80469L6.06641 14.6797ZM8.5625 14.75H7.36719V6.83984H8.5625V14.75ZM11.0234 14.7852L9.86328 14.6797L10.5664 6.80469L11.7266 6.91016L11.0234 14.7852Z' fill='%230854A0'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper .gigya-myPhoto-status-icon .gigya-myPhoto-tooltip-wrap {\r\n    display: block;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper .gigya-myPhoto-profile-image { /*class to override by customer*/\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper .gigya-myPhoto-profile-image .gigya-myPhoto-profile-image-default {\r\n    background: #FFF url('$scriptBase/photo_default.png') 50% 50% no-repeat;\r\n}\r\n\r\n\r\n.gigya-myPhoto-profile-box-wrapper .gigya-myPhoto-loading-icon {\r\n    background: url('$scriptBase/loading.gif') 50% 50% no-repeat;\r\n    bottom: 9px;\r\n    width: 30px;\r\n    height: 30px;\r\n    left: 50%;\r\n    margin-left: -15px;\r\n    position: absolute;\r\n    display: none;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper input.gigya-myPhoto-upload {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    width: 170%;\r\n    height: 100%;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper span.gigya-myPhoto-upload-button {\r\n    background-color: #FFFFFF;\r\n    opacity: 0.9;\r\n    filter: alpha(opacity=90);\r\n    bottom: 0;\r\n    width: 100%;\r\n    left: 0;\r\n    position: absolute;\r\n    font-family: Arial;\r\n    letter-spacing: normal;\r\n    font-weight: 500;\r\n    color: #5a5a5a;\r\n    cursor: pointer;\r\n    display: none;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    line-height: 15px;\r\n    padding: 1px 0 4px;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper .gigya-myPhoto-tooltip-wrap {\r\n    display: none;\r\n    position: relative;\r\n    top: -4px;\r\n    left: -4px;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper .gigya-myPhoto-tooltip-wrap .gigya-myPhoto-tooltip {\r\n    /*background: url('$scriptBase/tooltip.png') -28px 0;*/\r\n    height: 33px;\r\n    border: 1px;\r\n    border-style: Solid;\r\n    border-color: #BFCFDA;\r\n    border-radius: 2px;\r\n    background-color: #F3F5F6;\r\n    width: 270px;\r\n    position: relative;\r\n    top: -38px;\r\n    left: -2px;\r\n    text-align: center;\r\n}\r\n\r\n.gigya-myPhoto-arrow {\r\n    background: url('$scriptBase/tooltip_arrow.png');\r\n    width: 18px;\r\n    height: 10px;\r\n    position: absolute;\r\n    top: -4px;\r\n    left: 2px;\r\n    z-index: 9999999999999999999999999;\r\n}\r\n\r\n.gigya-myPhoto-tooltip-text-wrap b {\r\n    font-weight: bold;\r\n    font-size: 12px;\r\n}\r\n\r\ndiv.gigya-myPhoto-tooltip-text-wrap {\r\n    position: absolute;\r\n    left: 4%;\r\n    top: 22%;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper .gigya-myPhoto-tooltip-wrap .gigya-myPhoto-tooltip div {\r\n    font-weight: 500;\r\n    color: #5a5a5a;\r\n    font-family: Arial;\r\n    font-size: 12px;\r\n    line-height: 16px;\r\n    padding: 0;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper.gigya-myPhoto-status-upload span.gigya-myPhoto-upload-button {\r\n    display: block;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper.gigya-myPhoto-status-loading .gigya-myPhoto-profile-image {\r\n    opacity: 0.1;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper.gigya-myPhoto-status-loading .gigya-myPhoto-loading-icon {\r\n    display: block;\r\n    top: 40%;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper.gigya-myPhoto-status-loading .gigya-myPhoto-status-icon {\r\n    display: none;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper.gigya-myPhoto-status-error {\r\n    border-color: #e76468;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper.gigya-myPhoto-status-error .gigya-myPhoto-status-icon {\r\n        background: url('$scriptBase/info_tooltip_error.png');\r\n        display: block;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper.gigya-myPhoto-status-error span.gigya-myPhoto-upload-button,\r\n.gigya-myPhoto-profile-box-wrapper.gigya-myPhoto-status-error .gigya-myPhoto-tooltip-wrap {\r\n        display: block;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper.gigya-myPhoto-status-upload .gigya-myPhoto-tooltip-wrap {\r\n    display: none;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper.gigya-myPhoto-status-uploaded .gigya-myPhoto-status-icon {\r\n    display: none;\r\n}\r\n\r\n.gigya-myPhoto-profile-box-wrapper.gigya-myPhoto-status-uploaded span.gigya-myPhoto-upload-button {\r\n    display: block;\r\n    cursor: pointer;\r\n}\r\n\r\n.gigya-myPhoto-uploadForm {\r\n    opacity: 0;\r\n    filter: alpha(opacity=0);\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.gigya-myPhoto-form-wrapper {\r\n    filter: alpha(opacity=0);\r\n    z-index: 999;\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 95%;\r\n    top: 0;\r\n}\r\n", ""]);
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

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/css/style.css":
/*!*********************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/css/style.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!./style.css */ "../node_modules/css-loader/dist/cjs.js!./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/css/style.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/cssResources.ts":
/*!***********************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/cssResources.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.style = __webpack_require__(/*! ./css/style.css */ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/css/style.css");


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/htmlResources.ts":
/*!************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/htmlResources.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.display = __webpack_require__(/*! ./templates/display.html */ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/display.html");
exports.tooltipFileSize = __webpack_require__(/*! ./templates/tooltipFileSize.html */ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/tooltipFileSize.html");
exports.tooltipServerError = __webpack_require__(/*! ./templates/tooltipServerError.html */ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/tooltipServerError.html");
exports.upload = __webpack_require__(/*! ./templates/upload.html */ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/upload.html");


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/image.ts":
/*!****************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/image.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function getImageBase64(file, fixOrientation) {
    if (fixOrientation === void 0) { fixOrientation = false; }
    return new gigya.Promise(function (resolve) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var imageDataUrl = reader.result.toString();
            var imageBase64 = getBase64FromDataUrl(imageDataUrl);
            if (!fixOrientation) {
                resolve(imageBase64);
            }
            else {
                var imageArrayBuffer = base64ToArrayBuffer(imageBase64);
                var orientation = getOrientation(imageArrayBuffer);
                resetBase64Orientation(imageDataUrl, orientation, resolve);
            }
        };
        reader.readAsDataURL(file);
    });
}
exports.getImageBase64 = getImageBase64;
// https://stackoverflow.com/a/40867559/3415505
function getOrientation(readerResult) {
    var view = new DataView(readerResult);
    if (view.getUint16(0, false) != 0xFFD8) {
        return -2;
    }
    var length = view.byteLength;
    var offset = 2;
    while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8)
            return -1;
        var marker = view.getUint16(offset, false);
        offset += 2;
        if (marker == 0xFFE1) {
            if (view.getUint32(offset += 2, false) != 0x45786966) {
                return -1;
            }
            var little = view.getUint16(offset += 6, false) == 0x4949;
            offset += view.getUint32(offset + 4, little);
            var tags = view.getUint16(offset, little);
            offset += 2;
            for (var i = 0; i < tags; i++) {
                if (view.getUint16(offset + (i * 12), little) == 0x0112) {
                    return view.getUint16(offset + (i * 12) + 8, little);
                }
            }
        }
        else if ((marker & 0xFF00) != 0xFF00) {
            break;
        }
        else {
            offset += view.getUint16(offset, false);
        }
    }
    return -1;
}
// https://stackoverflow.com/a/40867559/3415505
function resetBase64Orientation(srcDataUrl, srcOrientation, callback) {
    if (isNaN(srcOrientation) || srcOrientation < 2) {
        // not transformation needed.
        callback(getBase64FromDataUrl(srcDataUrl));
        return;
    }
    var img = new Image();
    img.onload = function () {
        var width = img.width, height = img.height, canvas = document.createElement('canvas'), ctx = canvas.getContext("2d");
        // set proper canvas dimensions before transform & export
        if (4 < srcOrientation && srcOrientation < 9) {
            canvas.width = height;
            canvas.height = width;
        }
        else {
            canvas.width = width;
            canvas.height = height;
        }
        // transform context before drawing image
        switch (srcOrientation) {
            case 2:
                ctx.transform(-1, 0, 0, 1, width, 0);
                break;
            case 3:
                ctx.transform(-1, 0, 0, -1, width, height);
                break;
            case 4:
                ctx.transform(1, 0, 0, -1, 0, height);
                break;
            case 5:
                ctx.transform(0, 1, 1, 0, 0, 0);
                break;
            case 6:
                ctx.transform(0, 1, -1, 0, height, 0);
                break;
            case 7:
                ctx.transform(0, -1, -1, 0, height, width);
                break;
            case 8:
                ctx.transform(0, -1, 1, 0, 0, width);
                break;
            default:
                break;
        }
        // draw image
        ctx.drawImage(img, 0, 0);
        // export base64
        callback(getBase64FromDataUrl(canvas.toDataURL('image/jpeg')));
    };
    img.src = srcDataUrl;
}
// https://stackoverflow.com/a/21797381/3415505
function base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}
function getBase64FromDataUrl(dataUrl) {
    return dataUrl.split(',')[1];
}


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/index.ts":
/*!****************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var Gigya_PluginsProfilePhoto = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/profilePhoto */ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/profilePhoto.ts");
exports.Gigya_PluginsProfilePhoto = Gigya_PluginsProfilePhoto;
var cssResources = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/cssResources */ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/cssResources.ts");
exports.cssResources = cssResources;
var htmlResources = __webpack_require__(/*! src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/htmlResources */ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/htmlResources.ts");
exports.htmlResources = htmlResources;
if (!window.gigya._) {
    window.gigya._ = {};
}
if (!window.gigya._.plugins) {
    window.gigya._.plugins = {};
}
if (!window.gigya._.plugins.profilePhoto) {
    window.gigya._.plugins.profilePhoto = {};
}
if (!window.gigya._.plugins.resources) {
    window.gigya._.plugins.resources = {};
}
if (!window.gigya._.plugins.resources.css) {
    window.gigya._.plugins.resources.css = {};
}
if (!window.gigya._.plugins.resources.css.profilePhoto) {
    window.gigya._.plugins.resources.css.profilePhoto = {};
}
if (!window.gigya._.plugins.resources.html) {
    window.gigya._.plugins.resources.html = {};
}
if (!window.gigya._.plugins.resources.html.profilePhoto) {
    window.gigya._.plugins.resources.html.profilePhoto = {};
}
__webpack_provided_Object_dot_assign(window.gigya._.plugins.profilePhoto, Gigya_PluginsProfilePhoto);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.resources.css.profilePhoto, cssResources);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.resources.html.profilePhoto, htmlResources);
window.gigya._.UI.attachPlugin(Gigya_PluginsProfilePhoto.MyPhotoPlugin, 'accounts', Gigya_PluginsProfilePhoto.MyPhotoPlugin.PLUGIN_NAME, 'showMyPhotoUI');
var plugin = window.gigya._.plugins.profilePhoto.MyPhotoPlugin;
exports.profilePhotoPlugin = plugin;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/profilePhoto.ts":
/*!***********************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/profilePhoto.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var GSErrors_1 = __webpack_require__(/*! src/core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var image_1 = __webpack_require__(/*! ./image */ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/image.ts");
var ServerStates;
(function (ServerStates) {
    ServerStates[ServerStates["NotStarted"] = 0] = "NotStarted";
    ServerStates[ServerStates["InProgress"] = 1] = "InProgress";
    ServerStates[ServerStates["Done"] = 2] = "Done";
    ServerStates[ServerStates["Error"] = 3] = "Error";
})(ServerStates = exports.ServerStates || (exports.ServerStates = {}));
exports.IframeUploadInfo = {
    setDimentionsDelay: 500,
    uploadCheckInterval: 500,
    uploading: 'data-upload-status',
};
var ProfilePhotoModes;
(function (ProfilePhotoModes) {
    ProfilePhotoModes[ProfilePhotoModes["display"] = 0] = "display";
    ProfilePhotoModes[ProfilePhotoModes["upload"] = 1] = "upload";
})(ProfilePhotoModes = exports.ProfilePhotoModes || (exports.ProfilePhotoModes = {}));
var ProfilePhotoUploadModes;
(function (ProfilePhotoUploadModes) {
    ProfilePhotoUploadModes[ProfilePhotoUploadModes["formSubmit"] = 0] = "formSubmit";
    ProfilePhotoUploadModes[ProfilePhotoUploadModes["serverApi"] = 1] = "serverApi";
})(ProfilePhotoUploadModes = exports.ProfilePhotoUploadModes || (exports.ProfilePhotoUploadModes = {}));
var ProfilePhotoErrorType;
(function (ProfilePhotoErrorType) {
    ProfilePhotoErrorType[ProfilePhotoErrorType["fileSizeError"] = 0] = "fileSizeError";
    ProfilePhotoErrorType[ProfilePhotoErrorType["serverError"] = 1] = "serverError";
    ProfilePhotoErrorType[ProfilePhotoErrorType["none"] = 2] = "none";
})(ProfilePhotoErrorType = exports.ProfilePhotoErrorType || (exports.ProfilePhotoErrorType = {}));
var ProfilePhotoEditModes;
(function (ProfilePhotoEditModes) {
    ProfilePhotoEditModes[ProfilePhotoEditModes["upload"] = 0] = "upload";
    ProfilePhotoEditModes[ProfilePhotoEditModes["update"] = 1] = "update";
    ProfilePhotoEditModes[ProfilePhotoEditModes["remove"] = 2] = "remove";
})(ProfilePhotoEditModes = exports.ProfilePhotoEditModes || (exports.ProfilePhotoEditModes = {}));
function ForEach(arr, action) {
    for (var i = 0; i < arr.length; ++i)
        action(arr[i], i, arr);
}
exports.ForEach = ForEach;
var BasePluginGlobal = window.gigya._.plugins.BasePlugin;
var MyPhotoPlugin = /** @class */ (function (_super) {
    tslib_1.__extends(MyPhotoPlugin, _super);
    function MyPhotoPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._photoDimensions = { width: 120, height: 120 };
        _this._currentErrorType = ProfilePhotoErrorType.none;
        _this._currnetErrorText = '';
        _this._isPhotoUploaded = true;
        _this._pluginInitialized = false;
        _this._nextServerQueryId = 0;
        _this.onUserStateChange = function (res) { return _this.userStateChanged(res); };
        _this._nextGeneratedId = 0;
        _this._lastQueryId = 0;
        _this._uploadMode = ProfilePhotoUploadModes.serverApi;
        _this._editMode = ProfilePhotoEditModes.upload;
        _this._imageBase = window.gigya._.getCdnResource('/gs/i/profilePhoto');
        return _this;
    }
    // Override BasePlugin methods
    MyPhotoPlugin.injectionInfo = function () {
        return {
            name: 'profilePhoto',
            namespace: 'accounts',
            methodName: 'showMyPhotoUI',
            jsName: 'gigya.services.accounts.plugins.profilePhoto',
        };
    };
    MyPhotoPlugin.prototype.getConfig = function () {
        return {
            requiredParams: [],
            defaultParams: {
                width: '120',
                height: '120',
                cssPrefix: '',
                mode: ProfilePhotoModes[ProfilePhotoModes.display],
                tooltipTimeout: MyPhotoPlugin.TOOLTIP_TIMEOUT,
            },
            hasMobileUI: true,
            allowModal: false,
        };
    };
    MyPhotoPlugin.prototype.validateUserInputParams = function () {
        if (this.params.mode == 'display' || this.params.mode == 'upload') {
            this._pluginMode = ProfilePhotoModes[this.params.mode];
        }
        else {
            this._pluginMode = ProfilePhotoModes.display;
        }
        var isWidthNumber = !isNaN(parseFloat(this.params.width));
        var isHeightNumber = !isNaN(parseFloat(this.params.height.toString()));
        if (!isWidthNumber) {
            this.params.width = '120';
        }
        if (!isHeightNumber) {
            this.params.height = '120';
        }
    };
    // initialization block.
    MyPhotoPlugin.prototype.init = function (loadedCallback) {
        this._loadedCallback = loadedCallback;
        MyPhotoPlugin.UPDATE_PHOTO_TEXT = this.getText('profilePhoto_update');
        MyPhotoPlugin.UPLOAD_PHOTO_TEXT = this.getText('profilePhoto_upload');
        MyPhotoPlugin.FULL_DEFAULT_IMAGE_PATH = this._imageBase + '/photo_default.png';
        this.validateUserInputParams();
        // css -  injecting the css into the page.
        var css = window.gigya.utils.templates.fill(this.getCss().style, { scriptBase: this._imageBase });
        window.gigya._.plugins.utils.css.addCss(css, this.params.cssPrefix);
        // check whether the user already has a profile photo - async
        this.checkForProfilePhoto();
    };
    MyPhotoPlugin.prototype.resetContainer = function () {
        this.container.innerHTML = this.getControlHtml();
        this._pluginWrapperDiv = window.gigya.utils.DOM.getElementsByClass(this.container, 'gigya-myPhoto-profile-box-wrapper')[0];
        this._pluginWrapperDiv.style.width = this.params.width + 'px';
        this._pluginWrapperDiv.style.height = this.params.height + 'px';
    };
    // Before plugin runs: check whether or not the user
    // has uploaded a photo in order to display the right image.
    MyPhotoPlugin.prototype.checkForProfilePhoto = function () {
        var _this = this;
        var accountInfoParams = {
            callback: this.prepareCallback(function (res) { return _this.onAccountInfoCheckCompleted(res); }),
            include: 'profile,data',
            context: this
        };
        window.gigya.accounts.getAccountInfo(accountInfoParams);
    };
    // callback after profile photo check was completed
    MyPhotoPlugin.prototype.onAccountInfoCheckCompleted = function (response) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var self;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = response.context;
                        if (!(response.errorCode !== 0 && self.params.regToken)) return [3 /*break*/, 2];
                        return [4 /*yield*/, self.onAccountInfoErrorWithRegToken()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        if (response.errorCode === 0) {
                            self.onAccountInfoSuccess(response);
                        }
                        else {
                            self.onAccountInfoError(response);
                        }
                        this.getImageDimensions(self.afterImageDimensionsRetreival);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MyPhotoPlugin.prototype.afterImageDimensionsRetreival = function () {
        this.render();
        this._loadedCallback();
        this._pluginInitialized = true;
    };
    MyPhotoPlugin.prototype.onAccountInfoSuccess = function (response) {
        // default photo
        this._currentPhotoURL = undefined;
        this._isPhotoUploaded = false;
        if (response.profile.photoURL || response.profile.thumbnailURL) {
            this.updatePluginState();
        }
        this.setProfilePhotoURL(response);
    };
    MyPhotoPlugin.prototype.getProfilePhotoURL = function () {
        // Bug #39850 - Never return a blank photo URL to prevent the image from loading "/undefined".
        return this._currentPhotoURL || MyPhotoPlugin.FULL_DEFAULT_IMAGE_PATH;
    };
    MyPhotoPlugin.prototype.setProfilePhotoURL = function (response) {
        // Look for profile photo to set and override the default image.
        var newPhotoURL;
        if (window.gigya.localInfo.isIE8 && response.profile.thumbnailURL) {
            // The reason IE8 gets only a thumbnail image is because
            // it doesn't support backgroundSize = 'Contain' so the image can't be scaled.
            newPhotoURL = response.profile.thumbnailURL;
        }
        else if (response.profile.photoURL) {
            newPhotoURL = response.profile.photoURL;
        }
        else if (response.profile.thumbnailURL) {
            newPhotoURL = response.profile.thumbnailURL;
        }
        // Handle insecure photo URLs on secure pages.
        this._currentPhotoURL = newPhotoURL ? window.gigya.global.getPhotoURL(newPhotoURL) : null;
    };
    MyPhotoPlugin.prototype.updatePluginState = function () {
        this._editMode = ProfilePhotoEditModes.update;
        this._isPhotoUploaded = true;
    };
    MyPhotoPlugin.prototype.onAccountInfoError = function (response) {
        this._currentPhotoURL = undefined;
        this._isPhotoUploaded = false;
        this._pluginMode = ProfilePhotoModes.display;
    };
    MyPhotoPlugin.prototype.onAccountInfoErrorWithRegToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProfilePhotoUsingRegToken()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyPhotoPlugin.prototype.setPhotoImage = function () {
        this._imageElement.style.background = "#FFF url('" + this.getProfilePhotoURL() + "') 50% 50% no-repeat";
        var isPhotoWider = this.arePhotoDimensionsWider(this._photoDimensions);
        if (isPhotoWider) {
            this._imageElement.style.backgroundSize = 'Contain';
        }
    };
    MyPhotoPlugin.prototype.render = function () {
        // before going into the next async action,
        // resetting container's size so the plugin will take the its space [needed for screenset's centering].
        this.resetContainer();
        var uploadId = this._nextGeneratedId++;
        this._imageElement = this.container.querySelector('#' + this.containerID + ' .' + MyPhotoPlugin.IMAGE_CLASS);
        this.setPhotoImage();
        if (this._pluginMode === ProfilePhotoModes.upload) {
            this.getDOMElements(uploadId);
            this.setDOMEvents();
            this.setRemovePhotoButton(this.params.allowRemove);
            if (this._isPhotoUploaded) {
                window.gigya.pluginUtils.DOM.hideElement(this._iconElement);
            }
            // after html was set to container, create iframe.
            this.createIFrameElement();
            this.createInputFileElement();
            // after html was set to container, create iframe.
            this.createFormElement();
            // registering to local events : connect,disconnect
            this.registerLocalEvents();
        }
        // registering global events i.e. 'connect' and 'disconnect'
        this.registerToGlobalEvents();
    };
    MyPhotoPlugin.prototype.getDOMElements = function (uploadId) {
        var _this = this;
        var _a, _b, _c, _d;
        this.innerContainer = this.container.firstChild;
        this._formWrapper = window.gigya.utils.DOM.getElementsByClass(this.container, 'gigya-myPhoto-form-wrapper')[0];
        this._infoTooltipElement = document.querySelector('#' + this.containerID + ' .gigya-myPhoto-tooltip-wrap');
        this._iconElement = document.querySelector('#' + this.containerID + ' .gigya-myPhoto-status-icon');
        this._tooltipContainer = window.gigya.utils.DOM.getElementsByClass(this.container, 'gigya-myPhoto-tooltip')[0];
        this._tooltipTextContainer = window.gigya.utils.DOM.getElementsByClass(this.container, 'gigya-myPhoto-tooltip-text-wrap')[0];
        this._uploadForm = document.querySelector('#' + this.containerID + ' form');
        this._isFilesFeatureSupported = window.gigya.localInfo.isBrowserSupportsFilesAPI;
        this._uploadTextElement = document.querySelector('#' + this.containerID + ' .gigya-myPhoto-upload-button');
        this._removePhotoButton = document.querySelector('#' + this.containerID + ' .gigya-myPhoto-delete-button');
        (_a = this._removePhotoButton) === null || _a === void 0 ? void 0 : _a.setAttribute('tabindex', '0');
        (_b = this._removePhotoButton) === null || _b === void 0 ? void 0 : _b.setAttribute('role', 'button');
        (_c = this._removePhotoButton) === null || _c === void 0 ? void 0 : _c.setAttribute('aria-label', 'remove photo');
        (_d = this._removePhotoButton) === null || _d === void 0 ? void 0 : _d.addEventListener("keydown", function (event) {
            var _a;
            if ((event === null || event === void 0 ? void 0 : event.code) === 'Space' || (event === null || event === void 0 ? void 0 : event.code) === 'Enter') {
                (_a = _this._removePhotoButton) === null || _a === void 0 ? void 0 : _a.click();
            }
        });
        this._uploadIframeID = this.params.containerID + '_upload' + uploadId + '_target';
        this._formID = this.params.containerID + '_upload' + uploadId + '_form';
    };
    MyPhotoPlugin.prototype.setDOMEvents = function () {
        var _this = this;
        this._removePhotoButtonClicked = function () { return _this.onRemovePhotoButtonClicked(); };
        this._fileInputClicked = function () { return _this.onFileInputClicked(); };
        this._fileInputChanged = function () { return _this.onFileInputChange(); };
        this._iconMouseHover = function () { return _this.onIconHovered(); };
    };
    MyPhotoPlugin.prototype.registerLocalEvents = function () {
        var _this = this;
        var _a;
        this.listenOnIframe = function () {
            var iframeStateName = _this._uploadIframe.getAttribute(exports.IframeUploadInfo.uploading);
            var iframeState = ServerStates[iframeStateName];
            if (iframeState !== _this._photoProfileState)
                _this.onServerQueryEnd(_this._lastQueryId, iframeState);
        };
        window.gigya.utils.DOM.addEventListener(this._fileInput, 'change', this._fileInputChanged);
        window.gigya.utils.DOM.addEventListener(this._fileInput, 'click', this._fileInputClicked);
        window.gigya.utils.DOM.addEventListener(this._iconElement, 'mouseover', this._iconMouseHover);
        (_a = this._dummyBtn) === null || _a === void 0 ? void 0 : _a.addEventListener("keydown", function (event) {
            var _a;
            if ((event === null || event === void 0 ? void 0 : event.code) === 'Space' || (event === null || event === void 0 ? void 0 : event.code) === 'Enter') {
                (_a = _this._fileInput) === null || _a === void 0 ? void 0 : _a.click();
            }
        });
    };
    MyPhotoPlugin.prototype.setRemovePhotoButton = function (allowRemove) {
        if (allowRemove) {
            window.gigya.pluginUtils.DOM.showElement(this._removePhotoButton);
            window.gigya.utils.DOM.addEventListener(this._removePhotoButton, 'click', this._removePhotoButtonClicked);
        }
        else {
            window.gigya.pluginUtils.DOM.hideElement(this._removePhotoButton);
            window.gigya.utils.DOM.removeEventListener(this._removePhotoButton, 'click', this._removePhotoButtonClicked);
        }
    };
    MyPhotoPlugin.prototype.updateUserPhoto = function (res) {
        this._editMode = ProfilePhotoEditModes.update;
        var isNewUpdatedPhotoWider = this.arePhotoDimensionsWider(res.dimensions);
        this._currentPhotoURL = res.photoURL;
        this._photoDimensions = res.dimensions;
        this.setPhotoImage();
        if (this._editMode == ProfilePhotoEditModes.update && this._iconElement) {
            window.gigya.pluginUtils.DOM.hideElement(this._iconElement);
        }
        this._uploadTextElement.innerHTML = MyPhotoPlugin.UPDATE_PHOTO_TEXT;
        this.toggleErrorIndication(false);
    };
    MyPhotoPlugin.prototype.registerToGlobalEvents = function () {
        this.addGlobalEventHandlers({
            onLogin: this.onUserStateChange,
            onLogout: this.onUserStateChange,
        });
        this.addGlobalEventHandler(MyPhotoPlugin.USER_INFO_CHANGE_EVENT, this.onUserStateChange);
    };
    MyPhotoPlugin.prototype.unregisterToGlobalEvents = function () {
        this.removeGlobalEventHandlers({
            onLogin: this.onUserStateChange,
            onLogout: this.onUserStateChange,
        });
        this.removeGlobalEventHandler(MyPhotoPlugin.USER_INFO_CHANGE_EVENT, this.onUserStateChange);
    };
    MyPhotoPlugin.prototype.unregisterLocalEvents = function () {
        var _this = this;
        window.gigya.utils.DOM.removeEventListener(this._iconElement, 'mouseover', function (ev) {
            _this.displayTooltip();
        });
        window.gigya.utils.DOM.removeEventListener(this._fileInput, 'change', this._fileInputChanged);
        window.gigya.utils.DOM.removeEventListener(this._fileInput, 'click', this._fileInputClicked);
        window.gigya.utils.DOM.removeEventListener(this._removePhotoButton, 'click', this._removePhotoButtonClicked);
    };
    MyPhotoPlugin.prototype.onRemovePhotoButtonClicked = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var accountInfoParams, generalRequestParams, params;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._editMode = ProfilePhotoEditModes.remove;
                        accountInfoParams = {
                            callback: this.onUploadSavedResponse.bind(this),
                            context: this
                        };
                        return [4 /*yield*/, this.getServerParameters()];
                    case 1:
                        generalRequestParams = _a.sent();
                        params = tslib_1.__assign(tslib_1.__assign({}, generalRequestParams), accountInfoParams);
                        // The following code block is for a scenario that the user has logged-in and has a login_token.
                        // The 'regToken' param is sent from getServerParameters and in this case
                        // it would be undefined, which will cause a server error if it would be sent.
                        if (!params['regToken']) {
                            delete params['regToken'];
                        }
                        this.showLoader(this.innerContainer);
                        window.gigya.accounts.removeProfilePhoto(params);
                        return [2 /*return*/];
                }
            });
        });
    };
    MyPhotoPlugin.prototype.onFileInputClicked = function () {
        this.toggleErrorIndication(false);
        return true;
    };
    MyPhotoPlugin.prototype.onIconHovered = function () {
        if (this._currnetErrorText == '') {
            this._currnetErrorText = this._fileSizeErrorText;
            this.displayTooltip();
        }
    };
    MyPhotoPlugin.prototype.onFileInputChange = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this._isFilesFeatureSupported) return [3 /*break*/, 5];
                        if (!(this._fileInput.files[0].size > MyPhotoPlugin.MAX_IMAGE_BYTE_SIZE)) return [3 /*break*/, 1];
                        this._fileInput.value = null;
                        this._currentErrorType = ProfilePhotoErrorType.fileSizeError;
                        this._currnetErrorText = this._fileSizeErrorText;
                        this.toggleErrorIndication(true);
                        return [3 /*break*/, 4];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, image_1.getImageBase64(this._fileInput.files[0], this.params.fixImageOrientation)];
                    case 2:
                        _a._base64PhotoData = _b.sent();
                        return [4 /*yield*/, this.submitPhoto()];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        this._uploadMode = ProfilePhotoUploadModes.formSubmit;
                        return [4 /*yield*/, this.submitPhoto()];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    MyPhotoPlugin.prototype.startServerQuery = function () {
        this._photoProfileState = ServerStates.InProgress; /* InProgress */
        this._lastQueryId = ++this._nextServerQueryId;
        this._uploadIframe.setAttribute(exports.IframeUploadInfo.uploading, ServerStates[this._photoProfileState]);
        if (!this.uploadCheckInterval)
            this.uploadCheckInterval = window.setInterval(this.listenOnIframe, exports.IframeUploadInfo.uploadCheckInterval);
        return this._lastQueryId;
    };
    MyPhotoPlugin.prototype.onServerQueryEnd = function (serverQueryId, newState, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(serverQueryId === this._nextServerQueryId)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.serverQueryDone(newState, data)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.warn('Ignoring server response #' + serverQueryId);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MyPhotoPlugin.prototype.stopUploadCheck = function () {
        if (this.uploadCheckInterval) {
            window.clearInterval(this.uploadCheckInterval);
            this.uploadCheckInterval = 0;
        }
    };
    MyPhotoPlugin.prototype.submitPhoto = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this._uploadMode == ProfilePhotoUploadModes.formSubmit)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.sendPhotoWithFormSubmit()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.sendPhotoWithServerApi()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MyPhotoPlugin.prototype.sendPhotoWithFormSubmit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var formAction, _a, _b, _c;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        // set up new action & responseId
                        this.startServerQuery();
                        this._lastResponseId = this._uploadIframeID + '_' + this._lastQueryId;
                        _a = "https://" + window.gigya._.getApiDomain('accounts') + "/accounts.uploadProfilePhoto?publish=true&context=" + this._lastResponseId + "&saveResponseID=" + this._lastResponseId + "&";
                        _c = (_b = window.gigya.utils.keyValue).serialize;
                        return [4 /*yield*/, this.getServerParameters()];
                    case 1:
                        formAction = _a + _c.apply(_b, [_d.sent()]);
                        this._uploadForm.action = formAction;
                        this._uploadForm.target = this._uploadIframeID;
                        //display loading image
                        this.showLoader(this.innerContainer);
                        window.gigya._.plugins.utils.DOM.setAttribute(this._uploadForm, 'encType', 'multipart/form-data');
                        this._uploadForm.submit();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyPhotoPlugin.prototype.sendPhotoWithServerApi = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var self, generalRequestParams, apiInfoParams, params;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.getServerParameters()];
                    case 1:
                        generalRequestParams = _a.sent();
                        apiInfoParams = {
                            photoBytes: this._base64PhotoData,
                            publish: true,
                            callback: this.onUploadSavedResponse.bind(this),
                        };
                        params = window.gigya.utils.object.merge([generalRequestParams, apiInfoParams]);
                        // The following code block is for a scenario that the user has logged-in and has a login_token.
                        // The 'regToken' param is sent from getServerParameters and in this case
                        // it would be undefined, which will cause a server error if it would be sent.
                        if (!params['regToken']) {
                            delete params['regToken'];
                        }
                        this.showLoader(this.innerContainer);
                        window.gigya.accounts.setProfilePhoto(params);
                        return [2 /*return*/];
                }
            });
        });
    };
    MyPhotoPlugin.prototype.getServerParameters = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var params, webAdapter, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        params = window.gigya.utils.object.extractProperties(this.params, {}, 'APIKey|cid|oauth_token|login_token|source|sourceData|regToken');
                        params.authMode = params['oauth_token'] ? 'token' : 'cookie';
                        if (!params.APIKey)
                            params.APIKey = window.gigya.thisScript.APIKey;
                        webAdapter = window.gigya._.apiAdapters.web;
                        if (!webAdapter) return [3 /*break*/, 2];
                        params.login_token = webAdapter.tokenStore.get(params.APIKey);
                        _a = params;
                        return [4 /*yield*/, window.gigya._.apiAdapter.getGmidTicket()];
                    case 1:
                        _a.gmid = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/, params];
                }
            });
        });
    };
    MyPhotoPlugin.prototype.serverQueryDone = function (newState, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var params, _a, _b;
            var _this = this;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.stopUploadCheck();
                        _b = (_a = window.gigya.utils.object).removeUndefined;
                        return [4 /*yield*/, this.getServerParameters()];
                    case 1:
                        params = _b.apply(_a, [_c.sent()]);
                        params.saveResponseID = this._lastResponseId;
                        params.noAuth = true;
                        delete params.login_token;
                        delete params.regToken;
                        window.gigya._.apiAdapter.sendRequest('socialize.getSavedResponse', params, function (res) { return _this.onUploadSavedResponse(res); }, {
                            jsSdkRequestId: this._lastResponseId,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MyPhotoPlugin.prototype.onUploadSavedResponse = function (res) {
        switch (res.errorCode) {
            case GSErrors_1.GSErrors.OK:
                //onUploadSuccess
                window.gigya.accounts.getAccountInfo({ callback: this.onUpdatedPhotoCompleted, context: this, include: 'profile,data' });
                break;
            case GSErrors_1.GSErrors.INVALID_PARAMETER_VALUE:
            case GSErrors_1.GSErrors.NOT_SUPPORTED:
                this._currentErrorType = ProfilePhotoErrorType.fileSizeError;
                this._currnetErrorText = this._fileSizeErrorText;
                this.toggleErrorIndication(true);
                break;
            default:
                // Any other error
                this._currentErrorType = ProfilePhotoErrorType.serverError;
                this._currnetErrorText = MyPhotoPlugin.SERVER_ERROR_TEXT;
                this.toggleErrorIndication(true);
                break;
        }
    };
    MyPhotoPlugin.prototype.onUpdatedPhotoCompleted = function (response) {
        var _a, _b;
        var self = response.context;
        if (((_a = response.profile) === null || _a === void 0 ? void 0 : _a.thumbnailURL) || ((_b = response.profile) === null || _b === void 0 ? void 0 : _b.photoURL)) {
            self.setProfilePhotoURL(response);
            self._editMode = ProfilePhotoEditModes.update;
            self.getImageDimensions(self.onPhotoDimensionsRetreived);
        }
        else if (self._editMode == ProfilePhotoEditModes.remove) {
            self.resetPhotoContainer();
        }
        else {
            // we have a regToken from the initRegistration API so even though the photo was
            // uploaded, no user still exists.
            self.getProfilePhotoUsingRegToken();
        }
    };
    MyPhotoPlugin.prototype.resetPhotoContainer = function () {
        this._editMode = ProfilePhotoEditModes.upload;
        this._currentPhotoURL = undefined;
        window.gigya.utils.DOM.addClassToElement(this.innerContainer, MyPhotoPlugin.CLASSES_STATES.upload);
        window.gigya.utils.DOM.removeClassFromElement(this.innerContainer, MyPhotoPlugin.CLASSES_STATES.update);
        this.render();
    };
    MyPhotoPlugin.prototype.onPhotoDimensionsRetreived = function () {
        if (this._pluginInitialized) {
            this.hideLoader(this.innerContainer);
            this.toggleErrorIndication(false);
            this._uploadTextElement.innerHTML = MyPhotoPlugin.UPDATE_PHOTO_TEXT;
            window.gigya.events.global.dispatch({ isInternal: false, eventName: MyPhotoPlugin.EVENT_TYPES.onUserInfoChanged }, { sourceData: { photoURL: this.getProfilePhotoURL(), dimensions: this._photoDimensions } });
            if (this._editMode == ProfilePhotoEditModes.upload) {
                window.gigya.utils.DOM.removeClassFromElement(this.innerContainer, MyPhotoPlugin.CLASSES_STATES.upload);
            }
            window.gigya.utils.DOM.addClassToElement(this.innerContainer, MyPhotoPlugin.CLASSES_STATES.update);
            this._editMode = ProfilePhotoEditModes.update;
        }
    };
    MyPhotoPlugin.prototype.setImageDimensions = function (img) {
        this._photoDimensions.width = img['naturalWidth'];
        this._photoDimensions.height = img['naturalHeight'];
        img = img.onload = img.onerror = null; // remove memory leak
    };
    MyPhotoPlugin.prototype.getProfilePhotoUsingRegToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var getProfilePhotoParams, url, img, self;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getServerParameters()];
                    case 1:
                        getProfilePhotoParams = _a.sent();
                        getProfilePhotoParams.type = window.gigya.localInfo.isIE8 ? 'thumbnail' : 'orig';
                        // ts = time stamp for 'cache buster'
                        getProfilePhotoParams.ts = new Date().getTime();
                        url = this.buildUrlForProfilePhotoAPI(getProfilePhotoParams);
                        img = new Image();
                        self = this;
                        img.onload = this.prepareCallback(function () {
                            self.setImageDimensions(img);
                            self._currentPhotoURL = url;
                            self.onPhotoDimensionsRetreived();
                            if (!self._pluginInitialized) {
                                self.afterImageDimensionsRetreival();
                            }
                        });
                        img.onerror = function () {
                            if (!self._pluginInitialized) {
                                self._currentPhotoURL = self._imageBase + '/photo_default.png';
                                self.getImageDimensions(self.afterImageDimensionsRetreival);
                                self._isPhotoUploaded = false;
                            }
                            else {
                                self._isPhotoUploaded = false;
                                self._currentErrorType = ProfilePhotoErrorType.serverError;
                                self._currnetErrorText = self.getServerErrorText('Profile photo inaccesible.');
                                _this.toggleErrorIndication(true);
                                if (self._editMode === ProfilePhotoEditModes.upload) {
                                    window.gigya.utils.DOM.addClassToElement(self.innerContainer, MyPhotoPlugin.CLASSES_STATES.upload);
                                    window.gigya.pluginUtils.DOM.showElement(self._iconElement);
                                }
                                else {
                                    window.gigya.utils.DOM.addClassToElement(self.innerContainer, MyPhotoPlugin.CLASSES_STATES.update);
                                }
                                window.gigya.pluginUtils.DOM.showElement(self._uploadTextElement);
                            }
                            img = img.onload = img.onerror = null; // remove memory leak
                        };
                        img.src = url;
                        return [2 /*return*/];
                }
            });
        });
    };
    MyPhotoPlugin.prototype.buildUrlForProfilePhotoAPI = function (getProfilePhotoParams) {
        return (getProfilePhotoParams.login_token || getProfilePhotoParams.regToken ? 'https' : window.gigya.localInfo.protocol) + "://" + window.gigya._.getApiDomain('accounts') + "/accounts.getProfilePhoto?" + window.gigya.utils.keyValue.serialize(getProfilePhotoParams);
    };
    MyPhotoPlugin.prototype.getImageDimensions = function (callback) {
        var _this = this;
        var img = new Image();
        img.onload = this.prepareCallback(function () {
            _this.setImageDimensions(img);
            callback.apply(_this);
        });
        img.onerror = function () {
            var errorMessage = 'Profile photo inaccessible.';
            img = img.onload = img.onerror = null; // remove memory leak
            _this._currentErrorType = ProfilePhotoErrorType.serverError;
            _this._currnetErrorText = _this.getServerErrorText(errorMessage);
            _this.toggleErrorIndication(true);
            if (_this._editMode === ProfilePhotoEditModes.upload) {
                window.gigya.utils.DOM.addClassToElement(_this.innerContainer, MyPhotoPlugin.CLASSES_STATES.upload);
                window.gigya.pluginUtils.DOM.showElement(_this._iconElement);
            }
            else {
                window.gigya.utils.DOM.addClassToElement(_this.innerContainer, MyPhotoPlugin.CLASSES_STATES.update);
            }
            window.gigya.pluginUtils.DOM.showElement(_this._uploadTextElement);
            callback(_this);
        };
        img.src = this.getProfilePhotoURL();
    };
    MyPhotoPlugin.prototype.arePhotoDimensionsWider = function (dimenstions) {
        return dimenstions.width > parseInt(this.params.width) || dimenstions.height > parseInt(this.params.height);
    };
    MyPhotoPlugin.prototype.dispose = function () {
        this.unregisterToGlobalEvents();
        _super.prototype.dispose.call(this);
    };
    //------------------------------Templating ----------------------------------------//
    MyPhotoPlugin.prototype.getControlHtml = function () {
        this._fileSizeErrorText = this.getText('profilePhoto_fileSizeInfo');
        this.container.innerHTML = '';
        var template;
        if (this._pluginMode == ProfilePhotoModes.upload) {
            var fileUploadText;
            if (this._isPhotoUploaded) {
                fileUploadText = MyPhotoPlugin.UPDATE_PHOTO_TEXT;
            }
            else {
                fileUploadText = MyPhotoPlugin.UPLOAD_PHOTO_TEXT;
            }
            var editClass = this._editMode == ProfilePhotoEditModes.upload ? 'gigya-myPhoto-status-upload' : 'gigya-myPhoto-status-uploaded';
            template = window.gigya.utils.templates.fill(this.getTemplates().upload, {
                tooltip: this._fileSizeErrorText,
                uploadText: fileUploadText,
                editClass: editClass,
            });
        }
        else {
            // display
            template = window.gigya.utils.templates.fill(this.getTemplates().display, {});
        }
        return template;
    };
    MyPhotoPlugin.prototype.createIFrameElement = function () {
        this._uploadIframe = document.createElement('iframe');
        this._uploadIframe.style.display = 'none';
        this._uploadIframe.id = this._uploadIframeID;
        this._uploadIframe.setAttribute('name', this._uploadIframeID);
        this._uploadIframe.setAttribute(exports.IframeUploadInfo.uploading, ServerStates[ServerStates.NotStarted]);
        this._uploadIframe.setAttribute('onload', "this.setAttribute('" + exports.IframeUploadInfo.uploading + "','" + ServerStates[ServerStates.Done] + "')");
        this.container.appendChild(this._uploadIframe);
    };
    MyPhotoPlugin.prototype.createFormElement = function () {
        this._uploadForm = document.createElement('form');
        this._uploadForm.className = 'gigya-myPhoto-uploadForm';
        this._uploadForm.enctype = 'multipart/form-data';
        this._uploadForm.method = 'POST';
        this._uploadForm.action = '';
        this._uploadForm.target = this._uploadIframeID;
        this._uploadForm.appendChild(this._fileInput);
        this._uploadForm.appendChild(this._dummyBtn);
        this._formWrapper.appendChild(this._uploadForm);
    };
    MyPhotoPlugin.prototype.createInputFileElement = function () {
        this._fileInput = document.createElement('input');
        this._fileInput.type = 'file';
        this._fileInput.title = '';
        this._fileInput.accept = 'image/png, image/gif, image/jpeg';
        this._fileInput.name = '_profilePhoto';
        this._fileInput.className = 'gigya-myPhoto-upload';
        this._fileInput.setAttribute('aria-hidden', 'true');
        this._fileInput.setAttribute('tabindex', '-1');
        this._fileInput.title = this.getText('profilePhoto_no_file_chosen');
        this._dummyBtn = document.createElement('input');
        this._dummyBtn.title = "upload image";
        this._dummyBtn.type = 'button';
        this._dummyBtn.className = 'gigya-dummyPhoto-upload';
        this._dummyBtn.setAttribute('tabindex', '0');
    };
    MyPhotoPlugin.prototype.userStateChanged = function (data) {
        if (data.eventName == MyPhotoPlugin.EVENT_TYPES.onUserInfoChanged) {
            this.updateUserPhoto(data.sourceData);
        }
        else if (data.eventName == MyPhotoPlugin.EVENT_TYPES.onlogin) {
            this.validateUserInputParams();
            this.checkForProfilePhoto();
        }
        else {
            // logout
            this.resetPlugin();
        }
    };
    MyPhotoPlugin.prototype.resetPlugin = function () {
        this._pluginMode = ProfilePhotoModes.display;
        this._editMode = ProfilePhotoEditModes.upload;
        this._currentPhotoURL = undefined;
        this.render();
    };
    MyPhotoPlugin.prototype.showLoader = function (el) {
        if (this._editMode == ProfilePhotoEditModes.upload) {
            window.gigya.utils.DOM.removeClassFromElement(el, MyPhotoPlugin.CLASSES_STATES.upload);
        }
        else {
            window.gigya.utils.DOM.removeClassFromElement(el, MyPhotoPlugin.CLASSES_STATES.update);
        }
        window.gigya.utils.DOM.addClassToElement(el, MyPhotoPlugin.CLASSES_STATES.loading);
        window.gigya.pluginUtils.DOM.hideElement(this._uploadTextElement);
        window.gigya.pluginUtils.DOM.hideElement(this._iconElement);
    };
    MyPhotoPlugin.prototype.hideLoader = function (el) {
        window.gigya.utils.DOM.removeClassFromElement(el, MyPhotoPlugin.CLASSES_STATES.loading);
        if (this._editMode == ProfilePhotoEditModes.upload) {
            window.gigya.utils.DOM.addClassToElement(el, MyPhotoPlugin.CLASSES_STATES.upload);
        }
        else {
            window.gigya.utils.DOM.addClassToElement(el, MyPhotoPlugin.CLASSES_STATES.update);
        }
        window.gigya.pluginUtils.DOM.showElement(this._uploadTextElement);
    };
    MyPhotoPlugin.prototype.displayTooltip = function () {
        this._tooltipTextContainer.innerHTML = this._currnetErrorText;
        window.gigya.pluginUtils.DOM.showElement(this._infoTooltipElement);
        var toolTip = this._infoTooltipElement;
        if (this._currentErrorType == ProfilePhotoErrorType.none) {
            setTimeout(function () {
                window.gigya.pluginUtils.DOM.hideElement(toolTip);
            }, MyPhotoPlugin.TOOLTIP_TIMEOUT);
            this._currnetErrorText = '';
            return;
        }
    };
    MyPhotoPlugin.prototype.toggleErrorIndication = function (showError) {
        if (showError) {
            if (this._editMode == ProfilePhotoEditModes.update) {
                window.gigya.utils.DOM.removeClassFromElement(this.innerContainer, MyPhotoPlugin.CLASSES_STATES.update);
            }
            else {
                window.gigya.utils.DOM.removeClassFromElement(this.innerContainer, MyPhotoPlugin.CLASSES_STATES.upload);
            }
            window.gigya.utils.DOM.addClassToElement(this.innerContainer, MyPhotoPlugin.CLASSES_STATES.error);
            window.gigya.pluginUtils.DOM.showElement(this._iconElement);
            this.displayTooltip();
        }
        else {
            window.gigya.utils.DOM.removeClassFromElement(this.innerContainer, MyPhotoPlugin.CLASSES_STATES.error);
            if (this._editMode == ProfilePhotoEditModes.update) {
                window.gigya.utils.DOM.addClassToElement(this.innerContainer, MyPhotoPlugin.CLASSES_STATES.update);
                window.gigya.pluginUtils.DOM.hideElement(this._iconElement);
            }
            else {
                window.gigya.utils.DOM.addClassToElement(this.innerContainer, MyPhotoPlugin.CLASSES_STATES.upload);
            }
            window.gigya.pluginUtils.DOM.hideElement(this._infoTooltipElement);
        }
        this.hideLoader(this.innerContainer);
    };
    MyPhotoPlugin.prototype.getServerErrorText = function (errorMessage) {
        return '<b> ' + errorMessage + '</b>';
    };
    // statics
    MyPhotoPlugin.PLUGIN_NAME = 'profilePhoto';
    MyPhotoPlugin.MAX_IMAGE_BYTE_SIZE = 6291456;
    MyPhotoPlugin.TOOLTIP_TIMEOUT = 3000;
    MyPhotoPlugin.SERVER_ERROR_TEXT = 'An error has occurred while trying to upload photo';
    MyPhotoPlugin.USER_INFO_CHANGE_EVENT = 'onUserInfoChanged';
    MyPhotoPlugin.IMAGE_CLASS = 'gigya-myPhoto-profile-image';
    MyPhotoPlugin.DEFAULT_IMAGE_NAME = 'photo_default.png';
    MyPhotoPlugin.CLASSES_STATES = {
        upload: 'gigya-myPhoto-status-upload',
        update: 'gigya-myPhoto-status-uploaded',
        error: 'gigya-myPhoto-status-error',
        loading: 'gigya-myPhoto-status-loading',
    };
    MyPhotoPlugin.EVENT_TYPES = {
        onlogin: 'login',
        onUserInfoChanged: 'UserInfoChanged',
        onlogout: 'logout',
    };
    return MyPhotoPlugin;
}(BasePluginGlobal));
exports.MyPhotoPlugin = MyPhotoPlugin;


/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/display.html":
/*!******************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/display.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigya-myPhoto-profile-box-wrapper\">\n    <div class=\"gigya-myPhoto-profile-image\"></div>\n</div>\n";

/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/tooltipFileSize.html":
/*!**************************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/tooltipFileSize.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span id=\"errorContainer\">\n    $tooltip\n</span>";

/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/tooltipServerError.html":
/*!*****************************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/tooltipServerError.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>\n    <strong>$serverError</strong>\n</span>";

/***/ }),

/***/ "./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/upload.html":
/*!*****************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.ProfilePhoto/app/templates/upload.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigya-myPhoto-profile-box-wrapper $editClass\">\r\n    <!-- .status-upload | .status-loading | .status-error | .status-uploaded -->\r\n    <div class=\"gigya-myPhoto-status-icon\">\r\n        <div class=\"gigya-myPhoto-tooltip-wrap\">\r\n            <div class=\"gigya-myPhoto-tooltip\">\r\n                <div class=\"gigya-myPhoto-tooltip-text-wrap\">$tooltip</div>\r\n            </div>\r\n            <div class=\"gigya-myPhoto-arrow\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"gigya-myPhoto-profile-image\"></div>\r\n    <div class=\"gigya-myPhoto-upload-button-wrap\">\r\n        <span class=\"gigya-myPhoto-upload-button\">$uploadText</span>\r\n    </div>\r\n    <div class=\"gigya-myPhoto-loading-icon\"></div>\r\n    <div class=\"gigya-myPhoto-form-wrapper\">\r\n        <div class=\"gigya-myPhoto-delete-button\"></div>\r\n    </div>\r\n</div>\r\n";

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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5Qcm9maWxlUGhvdG8vYXBwL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5Qcm9maWxlUGhvdG8vYXBwL2Nzcy9zdHlsZS5jc3M/NTE3ZiIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlByb2ZpbGVQaG90by9hcHAvY3NzUmVzb3VyY2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uUHJvZmlsZVBob3RvL2FwcC9odG1sUmVzb3VyY2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uUHJvZmlsZVBob3RvL2FwcC9pbWFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlByb2ZpbGVQaG90by9hcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5Qcm9maWxlUGhvdG8vYXBwL3Byb2ZpbGVQaG90by50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlByb2ZpbGVQaG90by9hcHAvdGVtcGxhdGVzL2Rpc3BsYXkuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlByb2ZpbGVQaG90by9hcHAvdGVtcGxhdGVzL3Rvb2x0aXBGaWxlU2l6ZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uUHJvZmlsZVBob3RvL2FwcC90ZW1wbGF0ZXMvdG9vbHRpcFNlcnZlckVycm9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5Qcm9maWxlUGhvdG8vYXBwL3RlbXBsYXRlcy91cGxvYWQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvR1NFcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUhBQStEO0FBQ3pHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsdUNBQXVDLDJCQUEyQixrQ0FBa0MsMkJBQTJCLDBCQUEwQix5QkFBeUIsS0FBSywyRUFBMkUseUVBQXlFLGlCQUFpQixrQkFBa0Isb0JBQW9CLHFCQUFxQiwyQkFBMkIsMkJBQTJCLHlCQUF5Qix1QkFBdUIsMkJBQTJCLHdCQUF3Qiww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InNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5Qcm9maWxlUGhvdG8vYXBwL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5naWd5YS1teVBob3RvLXByb2ZpbGUtYm94LXdyYXBwZXIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNmJkYzU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5naWd5YS1teVBob3RvLXByb2ZpbGUtYm94LXdyYXBwZXIgLmdpZ3lhLW15UGhvdG8tc3RhdHVzLWljb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJyRzY3JpcHRCYXNlL2luZm9fdG9vbHRpcF9hY3RpdmUucG5nJykgbm8tcmVwZWF0O1xcclxcbiAgICB0b3A6IDRweDtcXHJcXG4gICAgbGVmdDogNHB4O1xcclxcbiAgICB3aWR0aDogMTRweDtcXHJcXG4gICAgaGVpZ2h0OiAxNHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgY29sb3I6ICM1YTVhNWE7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTZweDtcXHJcXG4gICAgei1pbmRleDogMTAwMDAwMDAwO1xcclxcbn1cXHJcXG4uZ2lneWEtbXlQaG90by1wcm9maWxlLWJveC13cmFwcGVyIC5naWd5YS1teVBob3RvLWRlbGV0ZS1idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB6LWluZGV4OiAxMDAwMDAwMDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxuICAgIGhlaWdodDogMTlweDtcXHJcXG4gICAgcmlnaHQ6IDBweDtcXHJcXG4gICAgYm90dG9tOiAycHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPScxNicgaGVpZ2h0PScxOScgdmlld0JveD0nMCAwIDE2IDE5JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMTUuODc1IDEuMjVWMi4zNzVIMC4xMjVWMS4yNUg1LjIyMjY2QzUuMTk5MjIgMS4yNSA1LjI4MTI1IDEuMDYyNSA1LjQ2ODc1IDAuNjg3NUM1LjY1NjI1IDAuMzEyNSA2LjEyNSAwLjEyNSA2Ljg3NSAwLjEyNUg5LjE2MDE2QzkuODg2NzIgMC4xMjUgMTAuMzQzOCAwLjMxMjUgMTAuNTMxMiAwLjY4NzVDMTAuNzE4OCAxLjA2MjUgMTAuODEyNSAxLjI1IDEwLjgxMjUgMS4yNUgxNS44NzVaTTE0LjI1NzggMy41SDE1Ljg3NVY0LjY2MDE2SDE0Ljc1TDEzLjYyNSAxN0MxMy42MjUgMTcuNzUgMTMuMjUgMTguMTI1IDEyLjUgMTguMTI1SDMuNUMyLjc1IDE4LjEyNSAyLjM3NSAxNy43NSAyLjM3NSAxN0wxLjI1IDQuNjYwMTZIMC4xMjVWMy41SDEzLjA2MjVIMTQuMjU3OFpNMTMuNjI1IDQuNjYwMTZIMi4zNzVMMy41IDE3SDEyLjVMMTMuNjI1IDQuNjYwMTZaTTYuMDY2NDEgMTQuNjc5N0w0Ljk3NjU2IDE0Ljc4NTJMNC4yNzM0NCA2LjkxMDE2TDUuMzYzMjggNi44MDQ2OUw2LjA2NjQxIDE0LjY3OTdaTTguNTYyNSAxNC43NUg3LjM2NzE5VjYuODM5ODRIOC41NjI1VjE0Ljc1Wk0xMS4wMjM0IDE0Ljc4NTJMOS44NjMyOCAxNC42Nzk3TDEwLjU2NjQgNi44MDQ2OUwxMS43MjY2IDYuOTEwMTZMMTEuMDIzNCAxNC43ODUyWicgZmlsbD0nJTIzMDg1NEEwJy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1teVBob3RvLXByb2ZpbGUtYm94LXdyYXBwZXIgLmdpZ3lhLW15UGhvdG8tc3RhdHVzLWljb24gLmdpZ3lhLW15UGhvdG8tdG9vbHRpcC13cmFwIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1teVBob3RvLXByb2ZpbGUtYm94LXdyYXBwZXIgLmdpZ3lhLW15UGhvdG8tcHJvZmlsZS1pbWFnZSB7IC8qY2xhc3MgdG8gb3ZlcnJpZGUgYnkgY3VzdG9tZXIqL1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbXlQaG90by1wcm9maWxlLWJveC13cmFwcGVyIC5naWd5YS1teVBob3RvLXByb2ZpbGUtaW1hZ2UgLmdpZ3lhLW15UGhvdG8tcHJvZmlsZS1pbWFnZS1kZWZhdWx0IHtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGRiB1cmwoJyRzY3JpcHRCYXNlL3Bob3RvX2RlZmF1bHQucG5nJykgNTAlIDUwJSBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5naWd5YS1teVBob3RvLXByb2ZpbGUtYm94LXdyYXBwZXIgLmdpZ3lhLW15UGhvdG8tbG9hZGluZy1pY29uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCckc2NyaXB0QmFzZS9sb2FkaW5nLmdpZicpIDUwJSA1MCUgbm8tcmVwZWF0O1xcclxcbiAgICBib3R0b206IDlweDtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLW15UGhvdG8tcHJvZmlsZS1ib3gtd3JhcHBlciBpbnB1dC5naWd5YS1teVBob3RvLXVwbG9hZCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IDE3MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLW15UGhvdG8tcHJvZmlsZS1ib3gtd3JhcHBlciBzcGFuLmdpZ3lhLW15UGhvdG8tdXBsb2FkLWJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgIG9wYWNpdHk6IDAuOTtcXHJcXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTkwKTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWw7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGNvbG9yOiAjNWE1YTVhO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTVweDtcXHJcXG4gICAgcGFkZGluZzogMXB4IDAgNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbXlQaG90by1wcm9maWxlLWJveC13cmFwcGVyIC5naWd5YS1teVBob3RvLXRvb2x0aXAtd3JhcCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAtNHB4O1xcclxcbiAgICBsZWZ0OiAtNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbXlQaG90by1wcm9maWxlLWJveC13cmFwcGVyIC5naWd5YS1teVBob3RvLXRvb2x0aXAtd3JhcCAuZ2lneWEtbXlQaG90by10b29sdGlwIHtcXHJcXG4gICAgLypiYWNrZ3JvdW5kOiB1cmwoJyRzY3JpcHRCYXNlL3Rvb2x0aXAucG5nJykgLTI4cHggMDsqL1xcclxcbiAgICBoZWlnaHQ6IDMzcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IFNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNCRkNGREE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjVGNjtcXHJcXG4gICAgd2lkdGg6IDI3MHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogLTM4cHg7XFxyXFxuICAgIGxlZnQ6IC0ycHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLW15UGhvdG8tYXJyb3cge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJyRzY3JpcHRCYXNlL3Rvb2x0aXBfYXJyb3cucG5nJyk7XFxyXFxuICAgIHdpZHRoOiAxOHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAtNHB4O1xcclxcbiAgICBsZWZ0OiAycHg7XFxyXFxuICAgIHotaW5kZXg6IDk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1teVBob3RvLXRvb2x0aXAtdGV4dC13cmFwIGIge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuZ2lneWEtbXlQaG90by10b29sdGlwLXRleHQtd3JhcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogNCU7XFxyXFxuICAgIHRvcDogMjIlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbXlQaG90by1wcm9maWxlLWJveC13cmFwcGVyIC5naWd5YS1teVBob3RvLXRvb2x0aXAtd3JhcCAuZ2lneWEtbXlQaG90by10b29sdGlwIGRpdiB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGNvbG9yOiAjNWE1YTVhO1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1teVBob3RvLXByb2ZpbGUtYm94LXdyYXBwZXIuZ2lneWEtbXlQaG90by1zdGF0dXMtdXBsb2FkIHNwYW4uZ2lneWEtbXlQaG90by11cGxvYWQtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1teVBob3RvLXByb2ZpbGUtYm94LXdyYXBwZXIuZ2lneWEtbXlQaG90by1zdGF0dXMtbG9hZGluZyAuZ2lneWEtbXlQaG90by1wcm9maWxlLWltYWdlIHtcXHJcXG4gICAgb3BhY2l0eTogMC4xO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbXlQaG90by1wcm9maWxlLWJveC13cmFwcGVyLmdpZ3lhLW15UGhvdG8tc3RhdHVzLWxvYWRpbmcgLmdpZ3lhLW15UGhvdG8tbG9hZGluZy1pY29uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHRvcDogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbXlQaG90by1wcm9maWxlLWJveC13cmFwcGVyLmdpZ3lhLW15UGhvdG8tc3RhdHVzLWxvYWRpbmcgLmdpZ3lhLW15UGhvdG8tc3RhdHVzLWljb24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbXlQaG90by1wcm9maWxlLWJveC13cmFwcGVyLmdpZ3lhLW15UGhvdG8tc3RhdHVzLWVycm9yIHtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZTc2NDY4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbXlQaG90by1wcm9maWxlLWJveC13cmFwcGVyLmdpZ3lhLW15UGhvdG8tc3RhdHVzLWVycm9yIC5naWd5YS1teVBob3RvLXN0YXR1cy1pY29uIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnJHNjcmlwdEJhc2UvaW5mb190b29sdGlwX2Vycm9yLnBuZycpO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1teVBob3RvLXByb2ZpbGUtYm94LXdyYXBwZXIuZ2lneWEtbXlQaG90by1zdGF0dXMtZXJyb3Igc3Bhbi5naWd5YS1teVBob3RvLXVwbG9hZC1idXR0b24sXFxyXFxuLmdpZ3lhLW15UGhvdG8tcHJvZmlsZS1ib3gtd3JhcHBlci5naWd5YS1teVBob3RvLXN0YXR1cy1lcnJvciAuZ2lneWEtbXlQaG90by10b29sdGlwLXdyYXAge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1teVBob3RvLXByb2ZpbGUtYm94LXdyYXBwZXIuZ2lneWEtbXlQaG90by1zdGF0dXMtdXBsb2FkIC5naWd5YS1teVBob3RvLXRvb2x0aXAtd3JhcCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1teVBob3RvLXByb2ZpbGUtYm94LXdyYXBwZXIuZ2lneWEtbXlQaG90by1zdGF0dXMtdXBsb2FkZWQgLmdpZ3lhLW15UGhvdG8tc3RhdHVzLWljb24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2lneWEtbXlQaG90by1wcm9maWxlLWJveC13cmFwcGVyLmdpZ3lhLW15UGhvdG8tc3RhdHVzLXVwbG9hZGVkIHNwYW4uZ2lneWEtbXlQaG90by11cGxvYWQtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdpZ3lhLW15UGhvdG8tdXBsb2FkRm9ybSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5naWd5YS1teVBob3RvLWZvcm0td3JhcHBlciB7XFxyXFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcXHJcXG4gICAgei1pbmRleDogOTk5O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgIiwiZXhwb3J0IGNvbnN0IHN0eWxlID0gcmVxdWlyZSgnLi9jc3Mvc3R5bGUuY3NzJyk7XG4iLCJleHBvcnQgY29uc3QgZGlzcGxheSA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2Rpc3BsYXkuaHRtbCcpO1xuZXhwb3J0IGNvbnN0IHRvb2x0aXBGaWxlU2l6ZSA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL3Rvb2x0aXBGaWxlU2l6ZS5odG1sJyk7XG5leHBvcnQgY29uc3QgdG9vbHRpcFNlcnZlckVycm9yID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvdG9vbHRpcFNlcnZlckVycm9yLmh0bWwnKTtcbmV4cG9ydCBjb25zdCB1cGxvYWQgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy91cGxvYWQuaHRtbCcpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEltYWdlQmFzZTY0KGZpbGU6IEZpbGUsIGZpeE9yaWVudGF0aW9uID0gZmFsc2UpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KHJlc29sdmUgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRGF0YVVybCA9IHJlYWRlci5yZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlQmFzZTY0ID0gZ2V0QmFzZTY0RnJvbURhdGFVcmwoaW1hZ2VEYXRhVXJsKTtcblxuICAgICAgICAgICAgaWYgKCFmaXhPcmllbnRhdGlvbikge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoaW1hZ2VCYXNlNjQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VBcnJheUJ1ZmZlciA9IGJhc2U2NFRvQXJyYXlCdWZmZXIoaW1hZ2VCYXNlNjQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gZ2V0T3JpZW50YXRpb24oaW1hZ2VBcnJheUJ1ZmZlcik7XG5cbiAgICAgICAgICAgICAgICByZXNldEJhc2U2NE9yaWVudGF0aW9uKFxuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGFVcmwsXG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfSk7XG59XG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80MDg2NzU1OS8zNDE1NTA1XG5mdW5jdGlvbiBnZXRPcmllbnRhdGlvbihyZWFkZXJSZXN1bHQ6IEFycmF5QnVmZmVyKSB7XG5cbiAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KHJlYWRlclJlc3VsdCk7XG4gICAgaWYgKHZpZXcuZ2V0VWludDE2KDAsIGZhbHNlKSAhPSAweEZGRDgpIHtcbiAgICAgICAgcmV0dXJuIC0yO1xuICAgIH1cbiAgICBjb25zdCBsZW5ndGggPSB2aWV3LmJ5dGVMZW5ndGg7XG4gICAgbGV0IG9mZnNldCA9IDI7XG4gICAgd2hpbGUgKG9mZnNldCA8IGxlbmd0aCkge1xuICAgICAgICBpZiAodmlldy5nZXRVaW50MTYob2Zmc2V0ICsgMiwgZmFsc2UpIDw9IDgpIHJldHVybiAtMTtcbiAgICAgICAgY29uc3QgbWFya2VyID0gdmlldy5nZXRVaW50MTYob2Zmc2V0LCBmYWxzZSk7XG4gICAgICAgIG9mZnNldCArPSAyO1xuICAgICAgICBpZiAobWFya2VyID09IDB4RkZFMSkge1xuICAgICAgICAgICAgaWYgKHZpZXcuZ2V0VWludDMyKG9mZnNldCArPSAyLCBmYWxzZSkgIT0gMHg0NTc4Njk2Nikge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbGl0dGxlID0gdmlldy5nZXRVaW50MTYob2Zmc2V0ICs9IDYsIGZhbHNlKSA9PSAweDQ5NDk7XG4gICAgICAgICAgICBvZmZzZXQgKz0gdmlldy5nZXRVaW50MzIob2Zmc2V0ICsgNCwgbGl0dGxlKTtcbiAgICAgICAgICAgIGNvbnN0IHRhZ3MgPSB2aWV3LmdldFVpbnQxNihvZmZzZXQsIGxpdHRsZSk7XG4gICAgICAgICAgICBvZmZzZXQgKz0gMjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFnczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZpZXcuZ2V0VWludDE2KG9mZnNldCArIChpICogMTIpLCBsaXR0bGUpID09IDB4MDExMikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmlldy5nZXRVaW50MTYob2Zmc2V0ICsgKGkgKiAxMikgKyA4LCBsaXR0bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgobWFya2VyICYgMHhGRjAwKSAhPSAweEZGMDApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb2Zmc2V0ICs9IHZpZXcuZ2V0VWludDE2KG9mZnNldCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cblxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQwODY3NTU5LzM0MTU1MDVcbmZ1bmN0aW9uIHJlc2V0QmFzZTY0T3JpZW50YXRpb24oc3JjRGF0YVVybDogc3RyaW5nLCBzcmNPcmllbnRhdGlvbjogbnVtYmVyLCBjYWxsYmFjazogKGJhc2U2NDogc3RyaW5nKSA9PiB2b2lkKSB7XG4gICAgaWYgKGlzTmFOKHNyY09yaWVudGF0aW9uKSB8fCBzcmNPcmllbnRhdGlvbiA8IDIpIHtcbiAgICAgICAgLy8gbm90IHRyYW5zZm9ybWF0aW9uIG5lZWRlZC5cbiAgICAgICAgY2FsbGJhY2soZ2V0QmFzZTY0RnJvbURhdGFVcmwoc3JjRGF0YVVybCkpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IGltZy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCA9IGltZy5oZWlnaHQsXG4gICAgICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSxcbiAgICAgICAgICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgICAgLy8gc2V0IHByb3BlciBjYW52YXMgZGltZW5zaW9ucyBiZWZvcmUgdHJhbnNmb3JtICYgZXhwb3J0XG4gICAgICAgIGlmICg0IDwgc3JjT3JpZW50YXRpb24gJiYgc3JjT3JpZW50YXRpb24gPCA5KSB7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBoZWlnaHQ7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gd2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0cmFuc2Zvcm0gY29udGV4dCBiZWZvcmUgZHJhd2luZyBpbWFnZVxuICAgICAgICBzd2l0Y2ggKHNyY09yaWVudGF0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zZm9ybSgtMSwgMCwgMCwgMSwgd2lkdGgsIDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2Zvcm0oLTEsIDAsIDAsIC0xLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNmb3JtKDEsIDAsIDAsIC0xLCAwLCBoZWlnaHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2Zvcm0oMCwgMSwgMSwgMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zZm9ybSgwLCAxLCAtMSwgMCwgaGVpZ2h0LCAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNmb3JtKDAsIC0xLCAtMSwgMCwgaGVpZ2h0LCB3aWR0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zZm9ybSgwLCAtMSwgMSwgMCwgMCwgd2lkdGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRyYXcgaW1hZ2VcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuXG4gICAgICAgIC8vIGV4cG9ydCBiYXNlNjRcbiAgICAgICAgY2FsbGJhY2soZ2V0QmFzZTY0RnJvbURhdGFVcmwoY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpKSk7XG4gICAgfTtcblxuICAgIGltZy5zcmMgPSBzcmNEYXRhVXJsO1xufVxuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjE3OTczODEvMzQxNTUwNVxuZnVuY3Rpb24gYmFzZTY0VG9BcnJheUJ1ZmZlcihiYXNlNjQpIHtcbiAgICBjb25zdCBiaW5hcnlfc3RyaW5nID0gd2luZG93LmF0b2IoYmFzZTY0KTtcbiAgICBjb25zdCBsZW4gPSBiaW5hcnlfc3RyaW5nLmxlbmd0aDtcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGxlbik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBieXRlc1tpXSA9IGJpbmFyeV9zdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ5dGVzLmJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gZ2V0QmFzZTY0RnJvbURhdGFVcmwoZGF0YVVybDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGRhdGFVcmwuc3BsaXQoJywnKVsxXTtcbn0iLCJpbXBvcnQgKiBhcyBHaWd5YV9QbHVnaW5zUHJvZmlsZVBob3RvIGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uUHJvZmlsZVBob3RvL2FwcC9wcm9maWxlUGhvdG8nO1xuaW1wb3J0ICogYXMgY3NzUmVzb3VyY2VzIGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uUHJvZmlsZVBob3RvL2FwcC9jc3NSZXNvdXJjZXMnO1xuaW1wb3J0ICogYXMgaHRtbFJlc291cmNlcyBmcm9tICdzcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlByb2ZpbGVQaG90by9hcHAvaHRtbFJlc291cmNlcyc7XG5cbmRlY2xhcmUgY29uc3QgZ2lneWE6IGFueTtcbmlmICghZ2lneWEuXykge1xuICAgIGdpZ3lhLl8gPSB7fTtcbn1cbmlmICghZ2lneWEuXy5wbHVnaW5zKSB7XG4gICAgZ2lneWEuXy5wbHVnaW5zID0ge307XG59XG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy5wcm9maWxlUGhvdG8pIHtcbiAgICBnaWd5YS5fLnBsdWdpbnMucHJvZmlsZVBob3RvID0ge307XG59XG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMpIHtcbiAgICBnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzID0ge307XG59XG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuY3NzKSB7XG4gICAgZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5jc3MgPSB7fTtcbn1cbmlmICghZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5jc3MucHJvZmlsZVBob3RvKSB7XG4gICAgZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5jc3MucHJvZmlsZVBob3RvID0ge307XG59XG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuaHRtbCkge1xuICAgIGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuaHRtbCA9IHt9O1xufVxuaWYgKCFnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmh0bWwucHJvZmlsZVBob3RvKSB7XG4gICAgZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5odG1sLnByb2ZpbGVQaG90byA9IHt9O1xufVxuXG5PYmplY3QuYXNzaWduKGdpZ3lhLl8ucGx1Z2lucy5wcm9maWxlUGhvdG8sIEdpZ3lhX1BsdWdpbnNQcm9maWxlUGhvdG8pO1xuT2JqZWN0LmFzc2lnbihnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmNzcy5wcm9maWxlUGhvdG8sIGNzc1Jlc291cmNlcyk7XG5PYmplY3QuYXNzaWduKGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuaHRtbC5wcm9maWxlUGhvdG8sIGh0bWxSZXNvdXJjZXMpO1xuXG5naWd5YS5fLlVJLmF0dGFjaFBsdWdpbihHaWd5YV9QbHVnaW5zUHJvZmlsZVBob3RvLk15UGhvdG9QbHVnaW4sICdhY2NvdW50cycsIEdpZ3lhX1BsdWdpbnNQcm9maWxlUGhvdG8uTXlQaG90b1BsdWdpbi5QTFVHSU5fTkFNRSwgJ3Nob3dNeVBob3RvVUknKTtcblxuY29uc3QgcGx1Z2luID0gZ2lneWEuXy5wbHVnaW5zLnByb2ZpbGVQaG90by5NeVBob3RvUGx1Z2luO1xuZXhwb3J0IHtHaWd5YV9QbHVnaW5zUHJvZmlsZVBob3RvLFxuICAgIGNzc1Jlc291cmNlcyxcbiAgICBodG1sUmVzb3VyY2VzLFxuICAgICBwbHVnaW4gYXMgcHJvZmlsZVBob3RvUGx1Z2lufTsiLCJpbXBvcnQgeyBJUGx1Z2luUGFyYW1zIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9pbnRlcmZhY2VzL0lQbHVnaW5QYXJhbXMnO1xuaW1wb3J0IHsgSVBsdWdpblRlbXBsYXRlcyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luVGVtcGxhdGVzJztcbmltcG9ydCB7IElQbHVnaW5DU1MgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2ludGVyZmFjZXMvSVBsdWdpbkNTUyc7XG5pbXBvcnQgeyBJSW5qZWN0aW9uSW5mbyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9BUEkvVWlBcGknO1xuaW1wb3J0IHsgSVBsdWdpbkNvbmZpZyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luQ29uZmlnJztcbmltcG9ydCB7IEdTRXJyb3JzIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0dTRXJyb3JzJztcbmltcG9ydCB7IEJhc2VQbHVnaW4gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL0Jhc2VQbHVnaW4nO1xuaW1wb3J0IHtnZXRJbWFnZUJhc2U2NH0gZnJvbSBcIi4vaW1hZ2VcIjtcblxuZXhwb3J0IGVudW0gU2VydmVyU3RhdGVzIHtcbiAgICBOb3RTdGFydGVkLFxuICAgIEluUHJvZ3Jlc3MsXG4gICAgRG9uZSxcbiAgICBFcnJvcixcbn1cbmV4cG9ydCB2YXIgSWZyYW1lVXBsb2FkSW5mbyA9IHtcbiAgICBzZXREaW1lbnRpb25zRGVsYXk6IDUwMCxcbiAgICB1cGxvYWRDaGVja0ludGVydmFsOiA1MDAsXG4gICAgdXBsb2FkaW5nOiAnZGF0YS11cGxvYWQtc3RhdHVzJyxcbn07XG5leHBvcnQgZW51bSBQcm9maWxlUGhvdG9Nb2RlcyB7XG4gICAgZGlzcGxheSxcbiAgICB1cGxvYWQsXG59XG5leHBvcnQgZW51bSBQcm9maWxlUGhvdG9VcGxvYWRNb2RlcyB7XG4gICAgZm9ybVN1Ym1pdCxcbiAgICBzZXJ2ZXJBcGksXG59XG5leHBvcnQgaW50ZXJmYWNlIElQaG90b0RpbWVuc2lvbnMge1xuICAgIHdpZHRoOiBOdW1iZXI7XG4gICAgaGVpZ2h0OiBOdW1iZXI7XG59XG5leHBvcnQgZW51bSBQcm9maWxlUGhvdG9FcnJvclR5cGUge1xuICAgIGZpbGVTaXplRXJyb3IsXG4gICAgc2VydmVyRXJyb3IsXG4gICAgbm9uZSxcbn1cbmV4cG9ydCBlbnVtIFByb2ZpbGVQaG90b0VkaXRNb2RlcyB7XG4gICAgdXBsb2FkLFxuICAgIHVwZGF0ZSxcbiAgICByZW1vdmVcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVByb2ZpbGVQaG90b1BhcmFtcyBleHRlbmRzIElQbHVnaW5QYXJhbXMge1xuICAgIG1vZGU6IHN0cmluZztcbiAgICBjc3NQcmVmaXg6IHN0cmluZztcbiAgICB0b29sdGlwVGltZW91dDogbnVtYmVyO1xuICAgIGFwaURvbWFpbj86IHN0cmluZztcbiAgICBkZXZpY2VUeXBlPzogc3RyaW5nO1xuICAgIHJlZ1Rva2VuPzogc3RyaW5nO1xuICAgIGxvZ2luVG9rZW4/OiBzdHJpbmc7XG4gICAgaGFzTW9iaWxlVUk/OiBib29sZWFuO1xuICAgIGFsbG93TW9kYWw/OiBib29sZWFuO1xuICAgIGZpeEltYWdlT3JpZW50YXRpb24/OiBib29sZWFuO1xuICAgIGFsbG93UmVtb3ZlPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVByb2ZpbGVQaG90b1VwbG9hZFRlbXBsYXRlcyBleHRlbmRzIElQbHVnaW5UZW1wbGF0ZXMge1xuICAgIGRpc3BsYXk6IHN0cmluZztcbiAgICB1cGxvYWQ6IHN0cmluZztcbiAgICB0b29sdGlwRmlsZVNpemU6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVByb2ZpbGVQaG90b1VwbG9hZFBsdWdpbkNTUyBleHRlbmRzIElQbHVnaW5DU1Mge1xuICAgIHN0eWxlOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIElFbnVtZXJhYmxlPFQ+IHtcbiAgICBsZW5ndGg6IG51bWJlcjtcbiAgICBbaTogbnVtYmVyXTogVDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBGb3JFYWNoPFQ+KGFycjogSUVudW1lcmFibGU8VD4sIGFjdGlvbjogKGVsZW1lbnQ6IFQsIGluZGV4PzogbnVtYmVyLCBhcnI/OiBJRW51bWVyYWJsZTxUPikgPT4gdm9pZCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSBhY3Rpb24oYXJyW2ldLCBpLCBhcnIpO1xufVxuXG5jb25zdCBCYXNlUGx1Z2luR2xvYmFsOiB0eXBlb2YgQmFzZVBsdWdpbiA9IGdpZ3lhLl8ucGx1Z2lucy5CYXNlUGx1Z2luO1xuZXhwb3J0IGNsYXNzIE15UGhvdG9QbHVnaW4gZXh0ZW5kcyBCYXNlUGx1Z2luR2xvYmFsPElQcm9maWxlUGhvdG9QYXJhbXMsIElQcm9maWxlUGhvdG9VcGxvYWRUZW1wbGF0ZXMsIElQcm9maWxlUGhvdG9VcGxvYWRQbHVnaW5DU1M+IHtcbiAgICAvLyBzdGF0aWNzXG4gICAgc3RhdGljIFBMVUdJTl9OQU1FID0gJ3Byb2ZpbGVQaG90byc7XG4gICAgc3RhdGljIE1BWF9JTUFHRV9CWVRFX1NJWkUgPSA2MjkxNDU2O1xuICAgIHN0YXRpYyBUT09MVElQX1RJTUVPVVQgPSAzMDAwO1xuICAgIHN0YXRpYyBTRVJWRVJfRVJST1JfVEVYVCA9ICdBbiBlcnJvciBoYXMgb2NjdXJyZWQgd2hpbGUgdHJ5aW5nIHRvIHVwbG9hZCBwaG90byc7XG4gICAgc3RhdGljIFVTRVJfSU5GT19DSEFOR0VfRVZFTlQgPSAnb25Vc2VySW5mb0NoYW5nZWQnO1xuICAgIHN0YXRpYyBJTUFHRV9DTEFTUyA9ICdnaWd5YS1teVBob3RvLXByb2ZpbGUtaW1hZ2UnO1xuICAgIHN0YXRpYyBERUZBVUxUX0lNQUdFX05BTUUgPSAncGhvdG9fZGVmYXVsdC5wbmcnO1xuICAgIHN0YXRpYyBGVUxMX0RFRkFVTFRfSU1BR0VfUEFUSDogc3RyaW5nO1xuICAgIHN0YXRpYyBVUERBVEVfUEhPVE9fVEVYVDogc3RyaW5nO1xuICAgIHN0YXRpYyBVUExPQURfUEhPVE9fVEVYVDogc3RyaW5nO1xuICAgIHN0YXRpYyBDTEFTU0VTX1NUQVRFUyA9IHtcbiAgICAgICAgdXBsb2FkOiAnZ2lneWEtbXlQaG90by1zdGF0dXMtdXBsb2FkJyxcbiAgICAgICAgdXBkYXRlOiAnZ2lneWEtbXlQaG90by1zdGF0dXMtdXBsb2FkZWQnLFxuICAgICAgICBlcnJvcjogJ2dpZ3lhLW15UGhvdG8tc3RhdHVzLWVycm9yJyxcbiAgICAgICAgbG9hZGluZzogJ2dpZ3lhLW15UGhvdG8tc3RhdHVzLWxvYWRpbmcnLFxuICAgIH07XG4gICAgc3RhdGljIEVWRU5UX1RZUEVTID0ge1xuICAgICAgICBvbmxvZ2luOiAnbG9naW4nLFxuICAgICAgICBvblVzZXJJbmZvQ2hhbmdlZDogJ1VzZXJJbmZvQ2hhbmdlZCcsXG4gICAgICAgIG9ubG9nb3V0OiAnbG9nb3V0JyxcbiAgICB9O1xuICAgIHByaXZhdGUgX3Bob3RvRGltZW5zaW9uczogSVBob3RvRGltZW5zaW9ucyA9IHsgd2lkdGg6IDEyMCwgaGVpZ2h0OiAxMjAgfTtcbiAgICBwcml2YXRlIF9jdXJyZW50RXJyb3JUeXBlID0gUHJvZmlsZVBob3RvRXJyb3JUeXBlLm5vbmU7XG4gICAgcHJpdmF0ZSBfZmlsZVNpemVFcnJvclRleHQ6IHN0cmluZztcbiAgICBwcml2YXRlIF9jdXJybmV0RXJyb3JUZXh0ID0gJyc7XG4gICAgcHJpdmF0ZSBfaXNQaG90b1VwbG9hZGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIF9wbHVnaW5Jbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3Bob3RvUHJvZmlsZVN0YXRlOiBTZXJ2ZXJTdGF0ZXM7XG4gICAgcHJpdmF0ZSBfdXBsb2FkSWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudDtcbiAgICBwcml2YXRlIGlubmVyQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIF9uZXh0U2VydmVyUXVlcnlJZCA9IDA7XG4gICAgcHJpdmF0ZSBfbGFzdFJlc3BvbnNlSWQ6IHN0cmluZztcbiAgICBwcml2YXRlIF9pc0ZpbGVzRmVhdHVyZVN1cHBvcnRlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9mb3JtSUQ6IHN0cmluZztcbiAgICBwcml2YXRlIGxpc3Rlbk9uSWZyYW1lOiAoKSA9PiB2b2lkO1xuICAgIHByaXZhdGUgdXBsb2FkQ2hlY2tJbnRlcnZhbDogbnVtYmVyO1xuICAgIHByaXZhdGUgX2ltYWdlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfY3VycmVudFBob3RvVVJMOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfaWNvbkVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgX3JlbW92ZVBob3RvQnV0dG9uOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIF9pbmZvVG9vbHRpcEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgX3VwbG9hZFRleHRFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIF9wbHVnaW5XcmFwcGVyRGl2OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIF9mb3JtV3JhcHBlcjogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfZmlsZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByaXZhdGUgX2ZpbGVJbnB1dENoYW5nZWQ6ICgpID0+IHZvaWQ7XG4gICAgcHJpdmF0ZSBfZmlsZUlucHV0Q2xpY2tlZDogKCkgPT4gdm9pZDtcbiAgICBwcml2YXRlIF9pY29uTW91c2VIb3ZlcjogKCkgPT4gdm9pZDtcbiAgICBwcml2YXRlIF9yZW1vdmVQaG90b0J1dHRvbkNsaWNrZWQ6ICgpID0+IHZvaWQ7XG4gICAgcHJpdmF0ZSBvblVzZXJTdGF0ZUNoYW5nZSA9IChyZXM6IE9iamVjdCkgPT4gdGhpcy51c2VyU3RhdGVDaGFuZ2VkKHJlcyk7XG4gICAgcHJpdmF0ZSBfbmV4dEdlbmVyYXRlZElkID0gMDtcbiAgICBwcml2YXRlIF91cGxvYWRJZnJhbWVJRDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2xhc3RRdWVyeUlkOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3BsdWdpbk1vZGU6IG51bWJlcjtcbiAgICBwcml2YXRlIF91cGxvYWRNb2RlOiBQcm9maWxlUGhvdG9VcGxvYWRNb2RlcyA9IFByb2ZpbGVQaG90b1VwbG9hZE1vZGVzLnNlcnZlckFwaTtcbiAgICBwcml2YXRlIF9lZGl0TW9kZSA9IFByb2ZpbGVQaG90b0VkaXRNb2Rlcy51cGxvYWQ7XG4gICAgcHJpdmF0ZSBfYmFzZTY0UGhvdG9EYXRhOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfaW1hZ2VCYXNlOiBzdHJpbmcgPSBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9wcm9maWxlUGhvdG8nKTtcbiAgICBwcml2YXRlIF90b29sdGlwQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIF90b29sdGlwVGV4dENvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfbG9hZGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgcHVibGljIF91cGxvYWRGb3JtOiBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgcHVibGljIF9kdW1teUJ0bjogSFRNTElucHV0RWxlbWVudDtcblxuICAgIC8vIE92ZXJyaWRlIEJhc2VQbHVnaW4gbWV0aG9kc1xuICAgIHB1YmxpYyBzdGF0aWMgaW5qZWN0aW9uSW5mbygpOiBJSW5qZWN0aW9uSW5mbyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAncHJvZmlsZVBob3RvJyxcbiAgICAgICAgICAgIG5hbWVzcGFjZTogJ2FjY291bnRzJyxcbiAgICAgICAgICAgIG1ldGhvZE5hbWU6ICdzaG93TXlQaG90b1VJJyxcbiAgICAgICAgICAgIGpzTmFtZTogJ2dpZ3lhLnNlcnZpY2VzLmFjY291bnRzLnBsdWdpbnMucHJvZmlsZVBob3RvJyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29uZmlnKCk6IElQbHVnaW5Db25maWc8SVByb2ZpbGVQaG90b1BhcmFtcz4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVxdWlyZWRQYXJhbXM6IFtdLFxuICAgICAgICAgICAgZGVmYXVsdFBhcmFtczoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTIwJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMjAnLFxuICAgICAgICAgICAgICAgIGNzc1ByZWZpeDogJycsXG4gICAgICAgICAgICAgICAgbW9kZTogUHJvZmlsZVBob3RvTW9kZXNbUHJvZmlsZVBob3RvTW9kZXMuZGlzcGxheV0sXG4gICAgICAgICAgICAgICAgdG9vbHRpcFRpbWVvdXQ6IE15UGhvdG9QbHVnaW4uVE9PTFRJUF9USU1FT1VULFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhc01vYmlsZVVJOiB0cnVlLFxuICAgICAgICAgICAgYWxsb3dNb2RhbDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZVVzZXJJbnB1dFBhcmFtcygpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyYW1zLm1vZGUgPT0gJ2Rpc3BsYXknIHx8IHRoaXMucGFyYW1zLm1vZGUgPT0gJ3VwbG9hZCcpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsdWdpbk1vZGUgPSBQcm9maWxlUGhvdG9Nb2Rlc1t0aGlzLnBhcmFtcy5tb2RlXSBhcyBhbnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9wbHVnaW5Nb2RlID0gUHJvZmlsZVBob3RvTW9kZXMuZGlzcGxheTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpc1dpZHRoTnVtYmVyID0gIWlzTmFOKHBhcnNlRmxvYXQodGhpcy5wYXJhbXMud2lkdGgpKTtcbiAgICAgICAgdmFyIGlzSGVpZ2h0TnVtYmVyID0gIWlzTmFOKHBhcnNlRmxvYXQodGhpcy5wYXJhbXMuaGVpZ2h0LnRvU3RyaW5nKCkpKTtcblxuICAgICAgICBpZiAoIWlzV2lkdGhOdW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLndpZHRoID0gJzEyMCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0hlaWdodE51bWJlcikge1xuICAgICAgICAgICAgdGhpcy5wYXJhbXMuaGVpZ2h0ID0gJzEyMCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpbml0aWFsaXphdGlvbiBibG9jay5cbiAgICBwdWJsaWMgaW5pdChsb2FkZWRDYWxsYmFjazogKHN1Y2Nlc3M/OiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2xvYWRlZENhbGxiYWNrID0gbG9hZGVkQ2FsbGJhY2s7XG4gICAgICAgIE15UGhvdG9QbHVnaW4uVVBEQVRFX1BIT1RPX1RFWFQgPSB0aGlzLmdldFRleHQoJ3Byb2ZpbGVQaG90b191cGRhdGUnKTtcbiAgICAgICAgTXlQaG90b1BsdWdpbi5VUExPQURfUEhPVE9fVEVYVCA9IHRoaXMuZ2V0VGV4dCgncHJvZmlsZVBob3RvX3VwbG9hZCcpO1xuICAgICAgICBNeVBob3RvUGx1Z2luLkZVTExfREVGQVVMVF9JTUFHRV9QQVRIID0gdGhpcy5faW1hZ2VCYXNlICsgJy9waG90b19kZWZhdWx0LnBuZyc7XG5cbiAgICAgICAgdGhpcy52YWxpZGF0ZVVzZXJJbnB1dFBhcmFtcygpO1xuICAgICAgICAvLyBjc3MgLSAgaW5qZWN0aW5nIHRoZSBjc3MgaW50byB0aGUgcGFnZS5cbiAgICAgICAgdmFyIGNzcyA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMuZ2V0Q3NzKCkuc3R5bGUsIHsgc2NyaXB0QmFzZTogdGhpcy5faW1hZ2VCYXNlIH0pO1xuICAgICAgICBnaWd5YS5fLnBsdWdpbnMudXRpbHMuY3NzLmFkZENzcyhjc3MsIHRoaXMucGFyYW1zLmNzc1ByZWZpeCk7XG5cbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGUgdXNlciBhbHJlYWR5IGhhcyBhIHByb2ZpbGUgcGhvdG8gLSBhc3luY1xuICAgICAgICB0aGlzLmNoZWNrRm9yUHJvZmlsZVBob3RvKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldENvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gdGhpcy5nZXRDb250cm9sSHRtbCgpO1xuICAgICAgICB0aGlzLl9wbHVnaW5XcmFwcGVyRGl2ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZ3lhLW15UGhvdG8tcHJvZmlsZS1ib3gtd3JhcHBlcicpWzBdO1xuICAgICAgICB0aGlzLl9wbHVnaW5XcmFwcGVyRGl2LnN0eWxlLndpZHRoID0gdGhpcy5wYXJhbXMud2lkdGggKyAncHgnO1xuICAgICAgICB0aGlzLl9wbHVnaW5XcmFwcGVyRGl2LnN0eWxlLmhlaWdodCA9IHRoaXMucGFyYW1zLmhlaWdodCArICdweCc7XG4gICAgfVxuXG4gICAgLy8gQmVmb3JlIHBsdWdpbiBydW5zOiBjaGVjayB3aGV0aGVyIG9yIG5vdCB0aGUgdXNlclxuICAgIC8vIGhhcyB1cGxvYWRlZCBhIHBob3RvIGluIG9yZGVyIHRvIGRpc3BsYXkgdGhlIHJpZ2h0IGltYWdlLlxuICAgIHB1YmxpYyBjaGVja0ZvclByb2ZpbGVQaG90bygpIHtcbiAgICAgICAgdmFyIGFjY291bnRJbmZvUGFyYW1zID0ge1xuICAgICAgICAgICAgY2FsbGJhY2s6IHRoaXMucHJlcGFyZUNhbGxiYWNrKHJlcyA9PiB0aGlzLm9uQWNjb3VudEluZm9DaGVja0NvbXBsZXRlZChyZXMpKSxcbiAgICAgICAgICAgIGluY2x1ZGU6ICdwcm9maWxlLGRhdGEnLFxuICAgICAgICAgICAgY29udGV4dDogdGhpc1xuICAgICAgICB9O1xuICAgICAgICBnaWd5YS5hY2NvdW50cy5nZXRBY2NvdW50SW5mbyhhY2NvdW50SW5mb1BhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gY2FsbGJhY2sgYWZ0ZXIgcHJvZmlsZSBwaG90byBjaGVjayB3YXMgY29tcGxldGVkXG4gICAgcHJpdmF0ZSBhc3luYyBvbkFjY291bnRJbmZvQ2hlY2tDb21wbGV0ZWQocmVzcG9uc2U6IHsgZXJyb3JDb2RlOiBudW1iZXI7IGNvbnRleHQ6IE15UGhvdG9QbHVnaW4gfSkge1xuICAgICAgICB2YXIgc2VsZiA9IHJlc3BvbnNlLmNvbnRleHQ7XG4gICAgICAgIGlmIChyZXNwb25zZS5lcnJvckNvZGUgIT09IDAgJiYgc2VsZi5wYXJhbXMucmVnVG9rZW4pIHtcbiAgICAgICAgICAgIGF3YWl0IHNlbGYub25BY2NvdW50SW5mb0Vycm9yV2l0aFJlZ1Rva2VuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3JDb2RlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vbkFjY291bnRJbmZvU3VjY2VzcyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYub25BY2NvdW50SW5mb0Vycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2V0SW1hZ2VEaW1lbnNpb25zKHNlbGYuYWZ0ZXJJbWFnZURpbWVuc2lvbnNSZXRyZWl2YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZnRlckltYWdlRGltZW5zaW9uc1JldHJlaXZhbCgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5fbG9hZGVkQ2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5fcGx1Z2luSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25BY2NvdW50SW5mb1N1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgLy8gZGVmYXVsdCBwaG90b1xuICAgICAgICB0aGlzLl9jdXJyZW50UGhvdG9VUkwgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX2lzUGhvdG9VcGxvYWRlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5wcm9maWxlLnBob3RvVVJMIHx8IHJlc3BvbnNlLnByb2ZpbGUudGh1bWJuYWlsVVJMKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBsdWdpblN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRQcm9maWxlUGhvdG9VUkwocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UHJvZmlsZVBob3RvVVJMKCkge1xuICAgICAgICAvLyBCdWcgIzM5ODUwIC0gTmV2ZXIgcmV0dXJuIGEgYmxhbmsgcGhvdG8gVVJMIHRvIHByZXZlbnQgdGhlIGltYWdlIGZyb20gbG9hZGluZyBcIi91bmRlZmluZWRcIi5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRQaG90b1VSTCB8fCBNeVBob3RvUGx1Z2luLkZVTExfREVGQVVMVF9JTUFHRV9QQVRIO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0UHJvZmlsZVBob3RvVVJMKHJlc3BvbnNlKSB7XG4gICAgICAgIC8vIExvb2sgZm9yIHByb2ZpbGUgcGhvdG8gdG8gc2V0IGFuZCBvdmVycmlkZSB0aGUgZGVmYXVsdCBpbWFnZS5cbiAgICAgICAgdmFyIG5ld1Bob3RvVVJMOiBzdHJpbmc7XG4gICAgICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNJRTggJiYgcmVzcG9uc2UucHJvZmlsZS50aHVtYm5haWxVUkwpIHtcbiAgICAgICAgICAgIC8vIFRoZSByZWFzb24gSUU4IGdldHMgb25seSBhIHRodW1ibmFpbCBpbWFnZSBpcyBiZWNhdXNlXG4gICAgICAgICAgICAvLyBpdCBkb2Vzbid0IHN1cHBvcnQgYmFja2dyb3VuZFNpemUgPSAnQ29udGFpbicgc28gdGhlIGltYWdlIGNhbid0IGJlIHNjYWxlZC5cbiAgICAgICAgICAgIG5ld1Bob3RvVVJMID0gcmVzcG9uc2UucHJvZmlsZS50aHVtYm5haWxVUkw7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UucHJvZmlsZS5waG90b1VSTCkge1xuICAgICAgICAgICAgbmV3UGhvdG9VUkwgPSByZXNwb25zZS5wcm9maWxlLnBob3RvVVJMO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnByb2ZpbGUudGh1bWJuYWlsVVJMKSB7XG4gICAgICAgICAgICBuZXdQaG90b1VSTCA9IHJlc3BvbnNlLnByb2ZpbGUudGh1bWJuYWlsVVJMO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZSBpbnNlY3VyZSBwaG90byBVUkxzIG9uIHNlY3VyZSBwYWdlcy5cbiAgICAgICAgdGhpcy5fY3VycmVudFBob3RvVVJMID0gbmV3UGhvdG9VUkwgPyBnaWd5YS5nbG9iYWwuZ2V0UGhvdG9VUkwobmV3UGhvdG9VUkwpIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVBsdWdpblN0YXRlKCkge1xuICAgICAgICB0aGlzLl9lZGl0TW9kZSA9IFByb2ZpbGVQaG90b0VkaXRNb2Rlcy51cGRhdGU7XG4gICAgICAgIHRoaXMuX2lzUGhvdG9VcGxvYWRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkFjY291bnRJbmZvRXJyb3IocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudFBob3RvVVJMID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9pc1Bob3RvVXBsb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGx1Z2luTW9kZSA9IFByb2ZpbGVQaG90b01vZGVzLmRpc3BsYXk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBvbkFjY291bnRJbmZvRXJyb3JXaXRoUmVnVG9rZW4oKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0UHJvZmlsZVBob3RvVXNpbmdSZWdUb2tlbigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0UGhvdG9JbWFnZSgpIHtcbiAgICAgICAgdGhpcy5faW1hZ2VFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBcIiNGRkYgdXJsKCdcIiArIHRoaXMuZ2V0UHJvZmlsZVBob3RvVVJMKCkgKyBcIicpIDUwJSA1MCUgbm8tcmVwZWF0XCI7XG4gICAgICAgIHZhciBpc1Bob3RvV2lkZXIgPSB0aGlzLmFyZVBob3RvRGltZW5zaW9uc1dpZGVyKHRoaXMuX3Bob3RvRGltZW5zaW9ucyk7XG4gICAgICAgIGlmIChpc1Bob3RvV2lkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2ltYWdlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdDb250YWluJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyKCkge1xuICAgICAgICAvLyBiZWZvcmUgZ29pbmcgaW50byB0aGUgbmV4dCBhc3luYyBhY3Rpb24sXG4gICAgICAgIC8vIHJlc2V0dGluZyBjb250YWluZXIncyBzaXplIHNvIHRoZSBwbHVnaW4gd2lsbCB0YWtlIHRoZSBpdHMgc3BhY2UgW25lZWRlZCBmb3Igc2NyZWVuc2V0J3MgY2VudGVyaW5nXS5cbiAgICAgICAgdGhpcy5yZXNldENvbnRhaW5lcigpO1xuXG4gICAgICAgIHZhciB1cGxvYWRJZCA9IHRoaXMuX25leHRHZW5lcmF0ZWRJZCsrO1xuICAgICAgICB0aGlzLl9pbWFnZUVsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuY29udGFpbmVySUQgKyAnIC4nICsgTXlQaG90b1BsdWdpbi5JTUFHRV9DTEFTUyk7XG4gICAgICAgIHRoaXMuc2V0UGhvdG9JbWFnZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLl9wbHVnaW5Nb2RlID09PSBQcm9maWxlUGhvdG9Nb2Rlcy51cGxvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0RE9NRWxlbWVudHModXBsb2FkSWQpO1xuICAgICAgICAgICAgdGhpcy5zZXRET01FdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0UmVtb3ZlUGhvdG9CdXR0b24odGhpcy5wYXJhbXMuYWxsb3dSZW1vdmUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzUGhvdG9VcGxvYWRlZCkge1xuICAgICAgICAgICAgICAgIGdpZ3lhLnBsdWdpblV0aWxzLkRPTS5oaWRlRWxlbWVudCh0aGlzLl9pY29uRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhZnRlciBodG1sIHdhcyBzZXQgdG8gY29udGFpbmVyLCBjcmVhdGUgaWZyYW1lLlxuICAgICAgICAgICAgdGhpcy5jcmVhdGVJRnJhbWVFbGVtZW50KCk7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW5wdXRGaWxlRWxlbWVudCgpO1xuXG4gICAgICAgICAgICAvLyBhZnRlciBodG1sIHdhcyBzZXQgdG8gY29udGFpbmVyLCBjcmVhdGUgaWZyYW1lLlxuICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtRWxlbWVudCgpO1xuXG4gICAgICAgICAgICAvLyByZWdpc3RlcmluZyB0byBsb2NhbCBldmVudHMgOiBjb25uZWN0LGRpc2Nvbm5lY3RcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJMb2NhbEV2ZW50cygpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlZ2lzdGVyaW5nIGdsb2JhbCBldmVudHMgaS5lLiAnY29ubmVjdCcgYW5kICdkaXNjb25uZWN0J1xuICAgICAgICB0aGlzLnJlZ2lzdGVyVG9HbG9iYWxFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldERPTUVsZW1lbnRzKHVwbG9hZElkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5pbm5lckNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLmZpcnN0Q2hpbGQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIHRoaXMuX2Zvcm1XcmFwcGVyID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZ3lhLW15UGhvdG8tZm9ybS13cmFwcGVyJylbMF07XG4gICAgICAgIHRoaXMuX2luZm9Ub29sdGlwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGhpcy5jb250YWluZXJJRCArICcgLmdpZ3lhLW15UGhvdG8tdG9vbHRpcC13cmFwJyk7XG4gICAgICAgIHRoaXMuX2ljb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmNvbnRhaW5lcklEICsgJyAuZ2lneWEtbXlQaG90by1zdGF0dXMtaWNvbicpO1xuICAgICAgICB0aGlzLl90b29sdGlwQ29udGFpbmVyID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZ3lhLW15UGhvdG8tdG9vbHRpcCcpWzBdO1xuICAgICAgICB0aGlzLl90b29sdGlwVGV4dENvbnRhaW5lciA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWd5YS1teVBob3RvLXRvb2x0aXAtdGV4dC13cmFwJylbMF07XG4gICAgICAgIHRoaXMuX3VwbG9hZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuY29udGFpbmVySUQgKyAnIGZvcm0nKTtcbiAgICAgICAgdGhpcy5faXNGaWxlc0ZlYXR1cmVTdXBwb3J0ZWQgPSBnaWd5YS5sb2NhbEluZm8uaXNCcm93c2VyU3VwcG9ydHNGaWxlc0FQSTtcbiAgICAgICAgdGhpcy5fdXBsb2FkVGV4dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuY29udGFpbmVySUQgKyAnIC5naWd5YS1teVBob3RvLXVwbG9hZC1idXR0b24nKTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlUGhvdG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuY29udGFpbmVySUQgKyAnIC5naWd5YS1teVBob3RvLWRlbGV0ZS1idXR0b24nKTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlUGhvdG9CdXR0b24/LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICB0aGlzLl9yZW1vdmVQaG90b0J1dHRvbj8uc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xuICAgICAgICB0aGlzLl9yZW1vdmVQaG90b0J1dHRvbj8uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ3JlbW92ZSBwaG90bycpO1xuXG4gICAgICAgIHRoaXMuX3JlbW92ZVBob3RvQnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQ/LmNvZGUgPT09ICdTcGFjZScgfHwgZXZlbnQ/LmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVQaG90b0J1dHRvbj8uY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLl91cGxvYWRJZnJhbWVJRCA9IHRoaXMucGFyYW1zLmNvbnRhaW5lcklEICsgJ191cGxvYWQnICsgdXBsb2FkSWQgKyAnX3RhcmdldCc7XG4gICAgICAgIHRoaXMuX2Zvcm1JRCA9IHRoaXMucGFyYW1zLmNvbnRhaW5lcklEICsgJ191cGxvYWQnICsgdXBsb2FkSWQgKyAnX2Zvcm0nO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RE9NRXZlbnRzKCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVQaG90b0J1dHRvbkNsaWNrZWQgPSAoKSA9PiB0aGlzLm9uUmVtb3ZlUGhvdG9CdXR0b25DbGlja2VkKCk7XG4gICAgICAgIHRoaXMuX2ZpbGVJbnB1dENsaWNrZWQgPSAoKSA9PiB0aGlzLm9uRmlsZUlucHV0Q2xpY2tlZCgpO1xuICAgICAgICB0aGlzLl9maWxlSW5wdXRDaGFuZ2VkID0gKCkgPT4gdGhpcy5vbkZpbGVJbnB1dENoYW5nZSgpO1xuICAgICAgICB0aGlzLl9pY29uTW91c2VIb3ZlciA9ICgpID0+IHRoaXMub25JY29uSG92ZXJlZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVnaXN0ZXJMb2NhbEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5PbklmcmFtZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciBpZnJhbWVTdGF0ZU5hbWUgPSB0aGlzLl91cGxvYWRJZnJhbWUuZ2V0QXR0cmlidXRlKElmcmFtZVVwbG9hZEluZm8udXBsb2FkaW5nKTtcbiAgICAgICAgICAgIHZhciBpZnJhbWVTdGF0ZSA9IFNlcnZlclN0YXRlc1tpZnJhbWVTdGF0ZU5hbWVdO1xuXG4gICAgICAgICAgICBpZiAoaWZyYW1lU3RhdGUgIT09IHRoaXMuX3Bob3RvUHJvZmlsZVN0YXRlKSB0aGlzLm9uU2VydmVyUXVlcnlFbmQodGhpcy5fbGFzdFF1ZXJ5SWQsIGlmcmFtZVN0YXRlKTtcbiAgICAgICAgfTtcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fZmlsZUlucHV0LCAnY2hhbmdlJywgdGhpcy5fZmlsZUlucHV0Q2hhbmdlZCk7XG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHRoaXMuX2ZpbGVJbnB1dCwgJ2NsaWNrJywgdGhpcy5fZmlsZUlucHV0Q2xpY2tlZCk7XG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHRoaXMuX2ljb25FbGVtZW50LCAnbW91c2VvdmVyJywgdGhpcy5faWNvbk1vdXNlSG92ZXIpO1xuXG4gICAgICAgIHRoaXMuX2R1bW15QnRuPy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQ/LmNvZGUgPT09ICdTcGFjZScgfHwgZXZlbnQ/LmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9maWxlSW5wdXQ/LmNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRSZW1vdmVQaG90b0J1dHRvbihhbGxvd1JlbW92ZTpib29sZWFuKSB7XG4gICAgICAgIGlmKGFsbG93UmVtb3ZlKXtcbiAgICAgICAgICAgIGdpZ3lhLnBsdWdpblV0aWxzLkRPTS5zaG93RWxlbWVudCh0aGlzLl9yZW1vdmVQaG90b0J1dHRvbik7XG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcih0aGlzLl9yZW1vdmVQaG90b0J1dHRvbiwgJ2NsaWNrJywgdGhpcy5fcmVtb3ZlUGhvdG9CdXR0b25DbGlja2VkKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBnaWd5YS5wbHVnaW5VdGlscy5ET00uaGlkZUVsZW1lbnQodGhpcy5fcmVtb3ZlUGhvdG9CdXR0b24pO1xuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5fcmVtb3ZlUGhvdG9CdXR0b24sICdjbGljaycsIHRoaXMuX3JlbW92ZVBob3RvQnV0dG9uQ2xpY2tlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlVXNlclBob3RvKHJlcykge1xuICAgICAgICB0aGlzLl9lZGl0TW9kZSA9IFByb2ZpbGVQaG90b0VkaXRNb2Rlcy51cGRhdGU7XG4gICAgICAgIHZhciBpc05ld1VwZGF0ZWRQaG90b1dpZGVyID0gdGhpcy5hcmVQaG90b0RpbWVuc2lvbnNXaWRlcihyZXMuZGltZW5zaW9ucyk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRQaG90b1VSTCA9IHJlcy5waG90b1VSTDtcbiAgICAgICAgdGhpcy5fcGhvdG9EaW1lbnNpb25zID0gcmVzLmRpbWVuc2lvbnM7XG5cbiAgICAgICAgdGhpcy5zZXRQaG90b0ltYWdlKCk7XG4gICAgICAgIGlmICh0aGlzLl9lZGl0TW9kZSA9PSBQcm9maWxlUGhvdG9FZGl0TW9kZXMudXBkYXRlICYmIHRoaXMuX2ljb25FbGVtZW50KSB7XG4gICAgICAgICAgICBnaWd5YS5wbHVnaW5VdGlscy5ET00uaGlkZUVsZW1lbnQodGhpcy5faWNvbkVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3VwbG9hZFRleHRFbGVtZW50LmlubmVySFRNTCA9IE15UGhvdG9QbHVnaW4uVVBEQVRFX1BIT1RPX1RFWFQ7XG4gICAgICAgIHRoaXMudG9nZ2xlRXJyb3JJbmRpY2F0aW9uKGZhbHNlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZ2lzdGVyVG9HbG9iYWxFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuYWRkR2xvYmFsRXZlbnRIYW5kbGVycyh7XG4gICAgICAgICAgICBvbkxvZ2luOiB0aGlzLm9uVXNlclN0YXRlQ2hhbmdlLFxuICAgICAgICAgICAgb25Mb2dvdXQ6IHRoaXMub25Vc2VyU3RhdGVDaGFuZ2UsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEdsb2JhbEV2ZW50SGFuZGxlcihNeVBob3RvUGx1Z2luLlVTRVJfSU5GT19DSEFOR0VfRVZFTlQsIHRoaXMub25Vc2VyU3RhdGVDaGFuZ2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdW5yZWdpc3RlclRvR2xvYmFsRXZlbnRzKCkge1xuICAgICAgICB0aGlzLnJlbW92ZUdsb2JhbEV2ZW50SGFuZGxlcnMoe1xuICAgICAgICAgICAgb25Mb2dpbjogdGhpcy5vblVzZXJTdGF0ZUNoYW5nZSxcbiAgICAgICAgICAgIG9uTG9nb3V0OiB0aGlzLm9uVXNlclN0YXRlQ2hhbmdlLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW1vdmVHbG9iYWxFdmVudEhhbmRsZXIoTXlQaG90b1BsdWdpbi5VU0VSX0lORk9fQ0hBTkdFX0VWRU5ULCB0aGlzLm9uVXNlclN0YXRlQ2hhbmdlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVucmVnaXN0ZXJMb2NhbEV2ZW50cygpIHtcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5faWNvbkVsZW1lbnQsICdtb3VzZW92ZXInLCBldiA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlUb29sdGlwKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLl9maWxlSW5wdXQsICdjaGFuZ2UnLCB0aGlzLl9maWxlSW5wdXRDaGFuZ2VkKTtcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5fZmlsZUlucHV0LCAnY2xpY2snLCB0aGlzLl9maWxlSW5wdXRDbGlja2VkKTtcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5fcmVtb3ZlUGhvdG9CdXR0b24sICdjbGljaycsIHRoaXMuX3JlbW92ZVBob3RvQnV0dG9uQ2xpY2tlZCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIG9uUmVtb3ZlUGhvdG9CdXR0b25DbGlja2VkKCkge1xuICAgICAgICB0aGlzLl9lZGl0TW9kZSA9IFByb2ZpbGVQaG90b0VkaXRNb2Rlcy5yZW1vdmU7XG4gICAgICAgIGNvbnN0IGFjY291bnRJbmZvUGFyYW1zID0ge1xuICAgICAgICAgICAgY2FsbGJhY2s6IHRoaXMub25VcGxvYWRTYXZlZFJlc3BvbnNlLmJpbmQodGhpcyksXG4gICAgICAgICAgICBjb250ZXh0OiB0aGlzXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGdlbmVyYWxSZXF1ZXN0UGFyYW1zID0gYXdhaXQgdGhpcy5nZXRTZXJ2ZXJQYXJhbWV0ZXJzKCk7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9ICB7Li4uZ2VuZXJhbFJlcXVlc3RQYXJhbXMsIC4uLmFjY291bnRJbmZvUGFyYW1zfTtcblxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgYmxvY2sgaXMgZm9yIGEgc2NlbmFyaW8gdGhhdCB0aGUgdXNlciBoYXMgbG9nZ2VkLWluIGFuZCBoYXMgYSBsb2dpbl90b2tlbi5cbiAgICAgICAgLy8gVGhlICdyZWdUb2tlbicgcGFyYW0gaXMgc2VudCBmcm9tIGdldFNlcnZlclBhcmFtZXRlcnMgYW5kIGluIHRoaXMgY2FzZVxuICAgICAgICAvLyBpdCB3b3VsZCBiZSB1bmRlZmluZWQsIHdoaWNoIHdpbGwgY2F1c2UgYSBzZXJ2ZXIgZXJyb3IgaWYgaXQgd291bGQgYmUgc2VudC5cbiAgICAgICAgaWYgKCFwYXJhbXNbJ3JlZ1Rva2VuJ10pIHtcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXNbJ3JlZ1Rva2VuJ107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3dMb2FkZXIodGhpcy5pbm5lckNvbnRhaW5lcik7XG4gICAgICAgIGdpZ3lhLmFjY291bnRzLnJlbW92ZVByb2ZpbGVQaG90byhwYXJhbXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkZpbGVJbnB1dENsaWNrZWQoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlRXJyb3JJbmRpY2F0aW9uKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIG9uSWNvbkhvdmVyZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jdXJybmV0RXJyb3JUZXh0ID09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJybmV0RXJyb3JUZXh0ID0gdGhpcy5fZmlsZVNpemVFcnJvclRleHQ7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlUb29sdGlwKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgb25GaWxlSW5wdXRDaGFuZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0ZpbGVzRmVhdHVyZVN1cHBvcnRlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2ZpbGVJbnB1dC5maWxlc1swXS5zaXplID4gTXlQaG90b1BsdWdpbi5NQVhfSU1BR0VfQllURV9TSVpFKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmlsZUlucHV0LnZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50RXJyb3JUeXBlID0gUHJvZmlsZVBob3RvRXJyb3JUeXBlLmZpbGVTaXplRXJyb3I7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3Vycm5ldEVycm9yVGV4dCA9IHRoaXMuX2ZpbGVTaXplRXJyb3JUZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlRXJyb3JJbmRpY2F0aW9uKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iYXNlNjRQaG90b0RhdGEgPSBhd2FpdCBnZXRJbWFnZUJhc2U2NCh0aGlzLl9maWxlSW5wdXQuZmlsZXNbMF0sIHRoaXMucGFyYW1zLmZpeEltYWdlT3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc3VibWl0UGhvdG8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3VwbG9hZE1vZGUgPSBQcm9maWxlUGhvdG9VcGxvYWRNb2Rlcy5mb3JtU3VibWl0O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zdWJtaXRQaG90bygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0U2VydmVyUXVlcnkoKSB7XG4gICAgICAgIHRoaXMuX3Bob3RvUHJvZmlsZVN0YXRlID0gU2VydmVyU3RhdGVzLkluUHJvZ3Jlc3M7IC8qIEluUHJvZ3Jlc3MgKi9cbiAgICAgICAgdGhpcy5fbGFzdFF1ZXJ5SWQgPSArK3RoaXMuX25leHRTZXJ2ZXJRdWVyeUlkO1xuICAgICAgICB0aGlzLl91cGxvYWRJZnJhbWUuc2V0QXR0cmlidXRlKElmcmFtZVVwbG9hZEluZm8udXBsb2FkaW5nLCBTZXJ2ZXJTdGF0ZXNbdGhpcy5fcGhvdG9Qcm9maWxlU3RhdGVdKTtcblxuICAgICAgICBpZiAoIXRoaXMudXBsb2FkQ2hlY2tJbnRlcnZhbCkgdGhpcy51cGxvYWRDaGVja0ludGVydmFsID0gd2luZG93LnNldEludGVydmFsKHRoaXMubGlzdGVuT25JZnJhbWUsIElmcmFtZVVwbG9hZEluZm8udXBsb2FkQ2hlY2tJbnRlcnZhbCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhc3RRdWVyeUlkO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBvblNlcnZlclF1ZXJ5RW5kPEQ+KHNlcnZlclF1ZXJ5SWQ6IG51bWJlciwgbmV3U3RhdGU6IFNlcnZlclN0YXRlcywgZGF0YT86IEQpIHtcbiAgICAgICAgaWYgKHNlcnZlclF1ZXJ5SWQgPT09IHRoaXMuX25leHRTZXJ2ZXJRdWVyeUlkKSBhd2FpdCB0aGlzLnNlcnZlclF1ZXJ5RG9uZShuZXdTdGF0ZSwgZGF0YSk7XG4gICAgICAgIGVsc2UgdGhpcy53YXJuKCdJZ25vcmluZyBzZXJ2ZXIgcmVzcG9uc2UgIycgKyBzZXJ2ZXJRdWVyeUlkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RvcFVwbG9hZENoZWNrKCkge1xuICAgICAgICBpZiAodGhpcy51cGxvYWRDaGVja0ludGVydmFsKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLnVwbG9hZENoZWNrSW50ZXJ2YWwpO1xuICAgICAgICAgICAgdGhpcy51cGxvYWRDaGVja0ludGVydmFsID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc3VibWl0UGhvdG8oKSB7XG4gICAgICAgIGlmICh0aGlzLl91cGxvYWRNb2RlID09IFByb2ZpbGVQaG90b1VwbG9hZE1vZGVzLmZvcm1TdWJtaXQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VuZFBob3RvV2l0aEZvcm1TdWJtaXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VuZFBob3RvV2l0aFNlcnZlckFwaSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzZW5kUGhvdG9XaXRoRm9ybVN1Ym1pdCgpIHtcbiAgICAgICAgLy8gc2V0IHVwIG5ldyBhY3Rpb24gJiByZXNwb25zZUlkXG4gICAgICAgIHRoaXMuc3RhcnRTZXJ2ZXJRdWVyeSgpO1xuICAgICAgICB0aGlzLl9sYXN0UmVzcG9uc2VJZCA9IHRoaXMuX3VwbG9hZElmcmFtZUlEICsgJ18nICsgdGhpcy5fbGFzdFF1ZXJ5SWQ7XG4gICAgICAgIHZhciBmb3JtQWN0aW9uID0gYGh0dHBzOi8vJHtnaWd5YS5fLmdldEFwaURvbWFpbignYWNjb3VudHMnKX0vYWNjb3VudHMudXBsb2FkUHJvZmlsZVBob3RvP3B1Ymxpc2g9dHJ1ZSZjb250ZXh0PSR7dGhpcy5fbGFzdFJlc3BvbnNlSWR9JnNhdmVSZXNwb25zZUlEPSR7XG4gICAgICAgICAgICB0aGlzLl9sYXN0UmVzcG9uc2VJZFxuICAgICAgICB9JiR7Z2lneWEudXRpbHMua2V5VmFsdWUuc2VyaWFsaXplKGF3YWl0IHRoaXMuZ2V0U2VydmVyUGFyYW1ldGVycygpKX1gO1xuICAgICAgICB0aGlzLl91cGxvYWRGb3JtLmFjdGlvbiA9IGZvcm1BY3Rpb247XG4gICAgICAgIHRoaXMuX3VwbG9hZEZvcm0udGFyZ2V0ID0gdGhpcy5fdXBsb2FkSWZyYW1lSUQ7XG5cbiAgICAgICAgLy9kaXNwbGF5IGxvYWRpbmcgaW1hZ2VcbiAgICAgICAgdGhpcy5zaG93TG9hZGVyKHRoaXMuaW5uZXJDb250YWluZXIpO1xuICAgICAgICBnaWd5YS5fLnBsdWdpbnMudXRpbHMuRE9NLnNldEF0dHJpYnV0ZSh0aGlzLl91cGxvYWRGb3JtLCAnZW5jVHlwZScsICdtdWx0aXBhcnQvZm9ybS1kYXRhJyk7XG4gICAgICAgIHRoaXMuX3VwbG9hZEZvcm0uc3VibWl0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBzZW5kUGhvdG9XaXRoU2VydmVyQXBpKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBnZW5lcmFsUmVxdWVzdFBhcmFtcyA9IGF3YWl0IHRoaXMuZ2V0U2VydmVyUGFyYW1ldGVycygpO1xuICAgICAgICB2YXIgYXBpSW5mb1BhcmFtcyA9IHtcbiAgICAgICAgICAgIHBob3RvQnl0ZXM6IHRoaXMuX2Jhc2U2NFBob3RvRGF0YSxcbiAgICAgICAgICAgIHB1Ymxpc2g6IHRydWUsXG4gICAgICAgICAgICBjYWxsYmFjazogdGhpcy5vblVwbG9hZFNhdmVkUmVzcG9uc2UuYmluZCh0aGlzKSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHBhcmFtcyA9IGdpZ3lhLnV0aWxzLm9iamVjdC5tZXJnZShbZ2VuZXJhbFJlcXVlc3RQYXJhbXMsIGFwaUluZm9QYXJhbXNdKTtcblxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgYmxvY2sgaXMgZm9yIGEgc2NlbmFyaW8gdGhhdCB0aGUgdXNlciBoYXMgbG9nZ2VkLWluIGFuZCBoYXMgYSBsb2dpbl90b2tlbi5cbiAgICAgICAgLy8gVGhlICdyZWdUb2tlbicgcGFyYW0gaXMgc2VudCBmcm9tIGdldFNlcnZlclBhcmFtZXRlcnMgYW5kIGluIHRoaXMgY2FzZVxuICAgICAgICAvLyBpdCB3b3VsZCBiZSB1bmRlZmluZWQsIHdoaWNoIHdpbGwgY2F1c2UgYSBzZXJ2ZXIgZXJyb3IgaWYgaXQgd291bGQgYmUgc2VudC5cbiAgICAgICAgaWYgKCFwYXJhbXNbJ3JlZ1Rva2VuJ10pIHtcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXNbJ3JlZ1Rva2VuJ107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3dMb2FkZXIodGhpcy5pbm5lckNvbnRhaW5lcik7XG4gICAgICAgIGdpZ3lhLmFjY291bnRzLnNldFByb2ZpbGVQaG90byhwYXJhbXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRTZXJ2ZXJQYXJhbWV0ZXJzKCkge1xuICAgICAgICB2YXIgcGFyYW1zOiBhbnkgPSBnaWd5YS51dGlscy5vYmplY3QuZXh0cmFjdFByb3BlcnRpZXModGhpcy5wYXJhbXMsIHt9LCAnQVBJS2V5fGNpZHxvYXV0aF90b2tlbnxsb2dpbl90b2tlbnxzb3VyY2V8c291cmNlRGF0YXxyZWdUb2tlbicpO1xuICAgICAgICBwYXJhbXMuYXV0aE1vZGUgPSBwYXJhbXNbJ29hdXRoX3Rva2VuJ10gPyAndG9rZW4nIDogJ2Nvb2tpZSc7XG5cbiAgICAgICAgaWYgKCFwYXJhbXMuQVBJS2V5KSBwYXJhbXMuQVBJS2V5ID0gZ2lneWEudGhpc1NjcmlwdC5BUElLZXk7XG5cbiAgICAgICAgdmFyIHdlYkFkYXB0ZXIgPSAoZ2lneWEuXy5hcGlBZGFwdGVycyBhcyBhbnkpLndlYjtcbiAgICAgICAgaWYgKHdlYkFkYXB0ZXIpIHtcbiAgICAgICAgICAgIHBhcmFtcy5sb2dpbl90b2tlbiA9IHdlYkFkYXB0ZXIudG9rZW5TdG9yZS5nZXQocGFyYW1zLkFQSUtleSk7XG4gICAgICAgICAgICBwYXJhbXMuZ21pZCA9IGF3YWl0IGdpZ3lhLl8uYXBpQWRhcHRlci5nZXRHbWlkVGlja2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzZXJ2ZXJRdWVyeURvbmU8RD4obmV3U3RhdGU6IFNlcnZlclN0YXRlcywgZGF0YT86IEQpIHtcbiAgICAgICAgdGhpcy5zdG9wVXBsb2FkQ2hlY2soKTtcblxuICAgICAgICAvLyBnZXQgbGFzdCBlcnJvciBmcm9tIHNlcnZlciBzaW5jZSBpZnJhbWUgZG9lcyBub3QgcmVwb3J0IGVycm9ycyBhY3Jvc3MgZG9tYWluc1xuICAgICAgICB2YXIgcGFyYW1zOiBhbnkgPSBnaWd5YS51dGlscy5vYmplY3QucmVtb3ZlVW5kZWZpbmVkKGF3YWl0IHRoaXMuZ2V0U2VydmVyUGFyYW1ldGVycygpKTtcbiAgICAgICAgcGFyYW1zLnNhdmVSZXNwb25zZUlEID0gdGhpcy5fbGFzdFJlc3BvbnNlSWQ7XG4gICAgICAgIHBhcmFtcy5ub0F1dGggPSB0cnVlO1xuICAgICAgICBkZWxldGUgcGFyYW1zLmxvZ2luX3Rva2VuO1xuICAgICAgICBkZWxldGUgcGFyYW1zLnJlZ1Rva2VuO1xuXG4gICAgICAgIGdpZ3lhLl8uYXBpQWRhcHRlci5zZW5kUmVxdWVzdCgnc29jaWFsaXplLmdldFNhdmVkUmVzcG9uc2UnLCBwYXJhbXMsIHJlcyA9PiB0aGlzLm9uVXBsb2FkU2F2ZWRSZXNwb25zZShyZXMpLCB7XG4gICAgICAgICAgICBqc1Nka1JlcXVlc3RJZDogdGhpcy5fbGFzdFJlc3BvbnNlSWQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25VcGxvYWRTYXZlZFJlc3BvbnNlKHJlcykge1xuICAgICAgICBzd2l0Y2ggKHJlcy5lcnJvckNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgR1NFcnJvcnMuT0s6XG4gICAgICAgICAgICAgICAgLy9vblVwbG9hZFN1Y2Nlc3NcbiAgICAgICAgICAgICAgICBnaWd5YS5hY2NvdW50cy5nZXRBY2NvdW50SW5mbyh7IGNhbGxiYWNrOiB0aGlzLm9uVXBkYXRlZFBob3RvQ29tcGxldGVkLCBjb250ZXh0OiB0aGlzLCBpbmNsdWRlOiAncHJvZmlsZSxkYXRhJyB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR1NFcnJvcnMuSU5WQUxJRF9QQVJBTUVURVJfVkFMVUU6XG4gICAgICAgICAgICBjYXNlIEdTRXJyb3JzLk5PVF9TVVBQT1JURUQ6XG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudEVycm9yVHlwZSA9IFByb2ZpbGVQaG90b0Vycm9yVHlwZS5maWxlU2l6ZUVycm9yO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJuZXRFcnJvclRleHQgPSB0aGlzLl9maWxlU2l6ZUVycm9yVGV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUVycm9ySW5kaWNhdGlvbih0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgLy8gQW55IG90aGVyIGVycm9yXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudEVycm9yVHlwZSA9IFByb2ZpbGVQaG90b0Vycm9yVHlwZS5zZXJ2ZXJFcnJvcjtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJybmV0RXJyb3JUZXh0ID0gTXlQaG90b1BsdWdpbi5TRVJWRVJfRVJST1JfVEVYVDtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUVycm9ySW5kaWNhdGlvbih0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25VcGRhdGVkUGhvdG9Db21wbGV0ZWQocmVzcG9uc2UpIHtcbiAgICAgICAgdmFyIHNlbGYgPSByZXNwb25zZS5jb250ZXh0O1xuICAgICAgICBpZiAocmVzcG9uc2UucHJvZmlsZT8udGh1bWJuYWlsVVJMIHx8IHJlc3BvbnNlLnByb2ZpbGU/LnBob3RvVVJMKSB7XG4gICAgICAgICAgICBzZWxmLnNldFByb2ZpbGVQaG90b1VSTChyZXNwb25zZSk7XG4gICAgICAgICAgICBzZWxmLl9lZGl0TW9kZSA9IFByb2ZpbGVQaG90b0VkaXRNb2Rlcy51cGRhdGU7XG4gICAgICAgICAgICBzZWxmLmdldEltYWdlRGltZW5zaW9ucyhzZWxmLm9uUGhvdG9EaW1lbnNpb25zUmV0cmVpdmVkKTtcbiAgICAgICAgfWVsc2UgaWYoc2VsZi5fZWRpdE1vZGUgPT0gUHJvZmlsZVBob3RvRWRpdE1vZGVzLnJlbW92ZSl7XG4gICAgICAgICAgICBzZWxmLnJlc2V0UGhvdG9Db250YWluZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgYSByZWdUb2tlbiBmcm9tIHRoZSBpbml0UmVnaXN0cmF0aW9uIEFQSSBzbyBldmVuIHRob3VnaCB0aGUgcGhvdG8gd2FzXG4gICAgICAgICAgICAvLyB1cGxvYWRlZCwgbm8gdXNlciBzdGlsbCBleGlzdHMuXG4gICAgICAgICAgICBzZWxmLmdldFByb2ZpbGVQaG90b1VzaW5nUmVnVG9rZW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXRQaG90b0NvbnRhaW5lcigpe1xuICAgICAgICB0aGlzLl9lZGl0TW9kZSA9IFByb2ZpbGVQaG90b0VkaXRNb2Rlcy51cGxvYWQ7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRQaG90b1VSTCA9IHVuZGVmaW5lZDtcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KHRoaXMuaW5uZXJDb250YWluZXIsIE15UGhvdG9QbHVnaW4uQ0xBU1NFU19TVEFURVMudXBsb2FkKTtcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUNsYXNzRnJvbUVsZW1lbnQodGhpcy5pbm5lckNvbnRhaW5lciwgTXlQaG90b1BsdWdpbi5DTEFTU0VTX1NUQVRFUy51cGRhdGUpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25QaG90b0RpbWVuc2lvbnNSZXRyZWl2ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9wbHVnaW5Jbml0aWFsaXplZCkge1xuICAgICAgICAgICAgdGhpcy5oaWRlTG9hZGVyKHRoaXMuaW5uZXJDb250YWluZXIpO1xuICAgICAgICAgICAgdGhpcy50b2dnbGVFcnJvckluZGljYXRpb24oZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5fdXBsb2FkVGV4dEVsZW1lbnQuaW5uZXJIVE1MID0gTXlQaG90b1BsdWdpbi5VUERBVEVfUEhPVE9fVEVYVDtcbiAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5nbG9iYWwuZGlzcGF0Y2goXG4gICAgICAgICAgICAgICAgeyBpc0ludGVybmFsOiBmYWxzZSwgZXZlbnROYW1lOiBNeVBob3RvUGx1Z2luLkVWRU5UX1RZUEVTLm9uVXNlckluZm9DaGFuZ2VkIH0sXG4gICAgICAgICAgICAgICAgeyBzb3VyY2VEYXRhOiB7IHBob3RvVVJMOiB0aGlzLmdldFByb2ZpbGVQaG90b1VSTCgpLCBkaW1lbnNpb25zOiB0aGlzLl9waG90b0RpbWVuc2lvbnMgfSB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9lZGl0TW9kZSA9PSBQcm9maWxlUGhvdG9FZGl0TW9kZXMudXBsb2FkKSB7XG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUNsYXNzRnJvbUVsZW1lbnQodGhpcy5pbm5lckNvbnRhaW5lciwgTXlQaG90b1BsdWdpbi5DTEFTU0VTX1NUQVRFUy51cGxvYWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KHRoaXMuaW5uZXJDb250YWluZXIsIE15UGhvdG9QbHVnaW4uQ0xBU1NFU19TVEFURVMudXBkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuX2VkaXRNb2RlID0gUHJvZmlsZVBob3RvRWRpdE1vZGVzLnVwZGF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0SW1hZ2VEaW1lbnNpb25zKGltZykge1xuICAgICAgICB0aGlzLl9waG90b0RpbWVuc2lvbnMud2lkdGggPSBpbWdbJ25hdHVyYWxXaWR0aCddO1xuICAgICAgICB0aGlzLl9waG90b0RpbWVuc2lvbnMuaGVpZ2h0ID0gaW1nWyduYXR1cmFsSGVpZ2h0J107XG4gICAgICAgIGltZyA9IGltZy5vbmxvYWQgPSBpbWcub25lcnJvciA9IG51bGw7IC8vIHJlbW92ZSBtZW1vcnkgbGVha1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZ2V0UHJvZmlsZVBob3RvVXNpbmdSZWdUb2tlbigpIHtcbiAgICAgICAgdmFyIGdldFByb2ZpbGVQaG90b1BhcmFtcyA9IGF3YWl0IHRoaXMuZ2V0U2VydmVyUGFyYW1ldGVycygpO1xuICAgICAgICBnZXRQcm9maWxlUGhvdG9QYXJhbXMudHlwZSA9IGdpZ3lhLmxvY2FsSW5mby5pc0lFOCA/ICd0aHVtYm5haWwnIDogJ29yaWcnO1xuICAgICAgICAvLyB0cyA9IHRpbWUgc3RhbXAgZm9yICdjYWNoZSBidXN0ZXInXG4gICAgICAgIGdldFByb2ZpbGVQaG90b1BhcmFtcy50cyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgdXJsID0gdGhpcy5idWlsZFVybEZvclByb2ZpbGVQaG90b0FQSShnZXRQcm9maWxlUGhvdG9QYXJhbXMpO1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaW1nLm9ubG9hZCA9IHRoaXMucHJlcGFyZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICAgIHNlbGYuc2V0SW1hZ2VEaW1lbnNpb25zKGltZyk7XG4gICAgICAgICAgICBzZWxmLl9jdXJyZW50UGhvdG9VUkwgPSB1cmw7XG4gICAgICAgICAgICBzZWxmLm9uUGhvdG9EaW1lbnNpb25zUmV0cmVpdmVkKCk7XG4gICAgICAgICAgICBpZiAoIXNlbGYuX3BsdWdpbkluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5hZnRlckltYWdlRGltZW5zaW9uc1JldHJlaXZhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpbWcub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICghc2VsZi5fcGx1Z2luSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9jdXJyZW50UGhvdG9VUkwgPSBzZWxmLl9pbWFnZUJhc2UgKyAnL3Bob3RvX2RlZmF1bHQucG5nJztcbiAgICAgICAgICAgICAgICBzZWxmLmdldEltYWdlRGltZW5zaW9ucyhzZWxmLmFmdGVySW1hZ2VEaW1lbnNpb25zUmV0cmVpdmFsKTtcbiAgICAgICAgICAgICAgICBzZWxmLl9pc1Bob3RvVXBsb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5faXNQaG90b1VwbG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2VsZi5fY3VycmVudEVycm9yVHlwZSA9IFByb2ZpbGVQaG90b0Vycm9yVHlwZS5zZXJ2ZXJFcnJvcjtcbiAgICAgICAgICAgICAgICBzZWxmLl9jdXJybmV0RXJyb3JUZXh0ID0gc2VsZi5nZXRTZXJ2ZXJFcnJvclRleHQoJ1Byb2ZpbGUgcGhvdG8gaW5hY2Nlc2libGUuJyk7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVFcnJvckluZGljYXRpb24odHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuX2VkaXRNb2RlID09PSBQcm9maWxlUGhvdG9FZGl0TW9kZXMudXBsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudChzZWxmLmlubmVyQ29udGFpbmVyLCBNeVBob3RvUGx1Z2luLkNMQVNTRVNfU1RBVEVTLnVwbG9hZCk7XG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnBsdWdpblV0aWxzLkRPTS5zaG93RWxlbWVudChzZWxmLl9pY29uRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KHNlbGYuaW5uZXJDb250YWluZXIsIE15UGhvdG9QbHVnaW4uQ0xBU1NFU19TVEFURVMudXBkYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZ2lneWEucGx1Z2luVXRpbHMuRE9NLnNob3dFbGVtZW50KHNlbGYuX3VwbG9hZFRleHRFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyA9IGltZy5vbmxvYWQgPSBpbWcub25lcnJvciA9IG51bGw7IC8vIHJlbW92ZSBtZW1vcnkgbGVha1xuICAgICAgICB9O1xuICAgICAgICBpbWcuc3JjID0gdXJsO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRVcmxGb3JQcm9maWxlUGhvdG9BUEkoZ2V0UHJvZmlsZVBob3RvUGFyYW1zKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke2dldFByb2ZpbGVQaG90b1BhcmFtcy5sb2dpbl90b2tlbiB8fCBnZXRQcm9maWxlUGhvdG9QYXJhbXMucmVnVG9rZW4gPyAnaHR0cHMnIDogZ2lneWEubG9jYWxJbmZvLnByb3RvY29sfTovLyR7Z2lneWEuXy5nZXRBcGlEb21haW4oXG4gICAgICAgICAgICAnYWNjb3VudHMnLFxuICAgICAgICApfS9hY2NvdW50cy5nZXRQcm9maWxlUGhvdG8/JHtnaWd5YS51dGlscy5rZXlWYWx1ZS5zZXJpYWxpemUoZ2V0UHJvZmlsZVBob3RvUGFyYW1zKX1gO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0SW1hZ2VEaW1lbnNpb25zKGNhbGxiYWNrOiAoc2VsZjogTXlQaG90b1BsdWdpbikgPT4gdm9pZCkge1xuICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5vbmxvYWQgPSB0aGlzLnByZXBhcmVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldEltYWdlRGltZW5zaW9ucyhpbWcpO1xuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBpbWcub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSAnUHJvZmlsZSBwaG90byBpbmFjY2Vzc2libGUuJztcbiAgICAgICAgICAgIGltZyA9IGltZy5vbmxvYWQgPSBpbWcub25lcnJvciA9IG51bGw7IC8vIHJlbW92ZSBtZW1vcnkgbGVha1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudEVycm9yVHlwZSA9IFByb2ZpbGVQaG90b0Vycm9yVHlwZS5zZXJ2ZXJFcnJvcjtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJuZXRFcnJvclRleHQgPSB0aGlzLmdldFNlcnZlckVycm9yVGV4dChlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhpcy50b2dnbGVFcnJvckluZGljYXRpb24odHJ1ZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5fZWRpdE1vZGUgPT09IFByb2ZpbGVQaG90b0VkaXRNb2Rlcy51cGxvYWQpIHtcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQ2xhc3NUb0VsZW1lbnQodGhpcy5pbm5lckNvbnRhaW5lciwgTXlQaG90b1BsdWdpbi5DTEFTU0VTX1NUQVRFUy51cGxvYWQpO1xuICAgICAgICAgICAgICAgIGdpZ3lhLnBsdWdpblV0aWxzLkRPTS5zaG93RWxlbWVudCh0aGlzLl9pY29uRWxlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudCh0aGlzLmlubmVyQ29udGFpbmVyLCBNeVBob3RvUGx1Z2luLkNMQVNTRVNfU1RBVEVTLnVwZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnaWd5YS5wbHVnaW5VdGlscy5ET00uc2hvd0VsZW1lbnQodGhpcy5fdXBsb2FkVGV4dEVsZW1lbnQpO1xuICAgICAgICAgICAgY2FsbGJhY2sodGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIGltZy5zcmMgPSB0aGlzLmdldFByb2ZpbGVQaG90b1VSTCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXJlUGhvdG9EaW1lbnNpb25zV2lkZXIoZGltZW5zdGlvbnM6IElQaG90b0RpbWVuc2lvbnMpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGRpbWVuc3Rpb25zLndpZHRoID4gcGFyc2VJbnQodGhpcy5wYXJhbXMud2lkdGgpIHx8IGRpbWVuc3Rpb25zLmhlaWdodCA+IHBhcnNlSW50KHRoaXMucGFyYW1zLmhlaWdodCk7XG4gICAgfVxuXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XG4gICAgICAgIHRoaXMudW5yZWdpc3RlclRvR2xvYmFsRXZlbnRzKCk7XG4gICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVRlbXBsYXRpbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICBwcml2YXRlIGdldENvbnRyb2xIdG1sKCkge1xuICAgICAgICB0aGlzLl9maWxlU2l6ZUVycm9yVGV4dCA9IHRoaXMuZ2V0VGV4dCgncHJvZmlsZVBob3RvX2ZpbGVTaXplSW5mbycpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdmFyIHRlbXBsYXRlOiBzdHJpbmc7XG4gICAgICAgIGlmICh0aGlzLl9wbHVnaW5Nb2RlID09IFByb2ZpbGVQaG90b01vZGVzLnVwbG9hZCkge1xuICAgICAgICAgICAgdmFyIGZpbGVVcGxvYWRUZXh0O1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzUGhvdG9VcGxvYWRlZCkge1xuICAgICAgICAgICAgICAgIGZpbGVVcGxvYWRUZXh0ID0gTXlQaG90b1BsdWdpbi5VUERBVEVfUEhPVE9fVEVYVDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlsZVVwbG9hZFRleHQgPSBNeVBob3RvUGx1Z2luLlVQTE9BRF9QSE9UT19URVhUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGVkaXRDbGFzcyA9IHRoaXMuX2VkaXRNb2RlID09IFByb2ZpbGVQaG90b0VkaXRNb2Rlcy51cGxvYWQgPyAnZ2lneWEtbXlQaG90by1zdGF0dXMtdXBsb2FkJyA6ICdnaWd5YS1teVBob3RvLXN0YXR1cy11cGxvYWRlZCc7XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMuZ2V0VGVtcGxhdGVzKCkudXBsb2FkLCB7XG4gICAgICAgICAgICAgICAgdG9vbHRpcDogdGhpcy5fZmlsZVNpemVFcnJvclRleHQsXG4gICAgICAgICAgICAgICAgdXBsb2FkVGV4dDogZmlsZVVwbG9hZFRleHQsXG4gICAgICAgICAgICAgICAgZWRpdENsYXNzOiBlZGl0Q2xhc3MsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGRpc3BsYXlcbiAgICAgICAgICAgIHRlbXBsYXRlID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5nZXRUZW1wbGF0ZXMoKS5kaXNwbGF5LCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlSUZyYW1lRWxlbWVudCgpIHtcbiAgICAgICAgdGhpcy5fdXBsb2FkSWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgIHRoaXMuX3VwbG9hZElmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLl91cGxvYWRJZnJhbWUuaWQgPSB0aGlzLl91cGxvYWRJZnJhbWVJRDtcbiAgICAgICAgdGhpcy5fdXBsb2FkSWZyYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsIHRoaXMuX3VwbG9hZElmcmFtZUlEKTtcbiAgICAgICAgdGhpcy5fdXBsb2FkSWZyYW1lLnNldEF0dHJpYnV0ZShJZnJhbWVVcGxvYWRJbmZvLnVwbG9hZGluZywgU2VydmVyU3RhdGVzW1NlcnZlclN0YXRlcy5Ob3RTdGFydGVkXSk7XG4gICAgICAgIHRoaXMuX3VwbG9hZElmcmFtZS5zZXRBdHRyaWJ1dGUoJ29ubG9hZCcsIFwidGhpcy5zZXRBdHRyaWJ1dGUoJ1wiICsgSWZyYW1lVXBsb2FkSW5mby51cGxvYWRpbmcgKyBcIicsJ1wiICsgU2VydmVyU3RhdGVzW1NlcnZlclN0YXRlcy5Eb25lXSArIFwiJylcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX3VwbG9hZElmcmFtZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVGb3JtRWxlbWVudCgpIHtcbiAgICAgICAgdGhpcy5fdXBsb2FkRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgdGhpcy5fdXBsb2FkRm9ybS5jbGFzc05hbWUgPSAnZ2lneWEtbXlQaG90by11cGxvYWRGb3JtJztcbiAgICAgICAgdGhpcy5fdXBsb2FkRm9ybS5lbmN0eXBlID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgICAgICB0aGlzLl91cGxvYWRGb3JtLm1ldGhvZCA9ICdQT1NUJztcbiAgICAgICAgdGhpcy5fdXBsb2FkRm9ybS5hY3Rpb24gPSAnJztcbiAgICAgICAgdGhpcy5fdXBsb2FkRm9ybS50YXJnZXQgPSB0aGlzLl91cGxvYWRJZnJhbWVJRDtcbiAgICAgICAgdGhpcy5fdXBsb2FkRm9ybS5hcHBlbmRDaGlsZCh0aGlzLl9maWxlSW5wdXQpO1xuICAgICAgICB0aGlzLl91cGxvYWRGb3JtLmFwcGVuZENoaWxkKHRoaXMuX2R1bW15QnRuKTtcbiAgICAgICAgdGhpcy5fZm9ybVdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5fdXBsb2FkRm9ybSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVJbnB1dEZpbGVFbGVtZW50KCkge1xuICAgICAgICB0aGlzLl9maWxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aGlzLl9maWxlSW5wdXQudHlwZSA9ICdmaWxlJztcbiAgICAgICAgdGhpcy5fZmlsZUlucHV0LnRpdGxlID0gJyc7XG4gICAgICAgIHRoaXMuX2ZpbGVJbnB1dC5hY2NlcHQgPSAnaW1hZ2UvcG5nLCBpbWFnZS9naWYsIGltYWdlL2pwZWcnO1xuICAgICAgICB0aGlzLl9maWxlSW5wdXQubmFtZSA9ICdfcHJvZmlsZVBob3RvJztcbiAgICAgICAgdGhpcy5fZmlsZUlucHV0LmNsYXNzTmFtZSA9ICdnaWd5YS1teVBob3RvLXVwbG9hZCc7XG4gICAgICAgIHRoaXMuX2ZpbGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywndHJ1ZScpO1xuICAgICAgICB0aGlzLl9maWxlSW5wdXQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsJy0xJyk7XG4gICAgICAgIHRoaXMuX2ZpbGVJbnB1dC50aXRsZSA9IHRoaXMuZ2V0VGV4dCgncHJvZmlsZVBob3RvX25vX2ZpbGVfY2hvc2VuJyk7XG5cbiAgICAgICAgdGhpcy5fZHVtbXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aGlzLl9kdW1teUJ0bi50aXRsZSA9IFwidXBsb2FkIGltYWdlXCI7XG4gICAgICAgIHRoaXMuX2R1bW15QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgdGhpcy5fZHVtbXlCdG4uY2xhc3NOYW1lID0gJ2dpZ3lhLWR1bW15UGhvdG8tdXBsb2FkJztcbiAgICAgICAgdGhpcy5fZHVtbXlCdG4uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsJzAnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVzZXJTdGF0ZUNoYW5nZWQoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5ldmVudE5hbWUgPT0gTXlQaG90b1BsdWdpbi5FVkVOVF9UWVBFUy5vblVzZXJJbmZvQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VyUGhvdG8oZGF0YS5zb3VyY2VEYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmV2ZW50TmFtZSA9PSBNeVBob3RvUGx1Z2luLkVWRU5UX1RZUEVTLm9ubG9naW4pIHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVVc2VySW5wdXRQYXJhbXMoKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tGb3JQcm9maWxlUGhvdG8oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGxvZ291dFxuICAgICAgICAgICAgdGhpcy5yZXNldFBsdWdpbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldFBsdWdpbigpIHtcbiAgICAgICAgdGhpcy5fcGx1Z2luTW9kZSA9IFByb2ZpbGVQaG90b01vZGVzLmRpc3BsYXk7XG4gICAgICAgIHRoaXMuX2VkaXRNb2RlID0gUHJvZmlsZVBob3RvRWRpdE1vZGVzLnVwbG9hZDtcbiAgICAgICAgdGhpcy5fY3VycmVudFBob3RvVVJMID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93TG9hZGVyKGVsOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5fZWRpdE1vZGUgPT0gUHJvZmlsZVBob3RvRWRpdE1vZGVzLnVwbG9hZCkge1xuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUNsYXNzRnJvbUVsZW1lbnQoZWwsIE15UGhvdG9QbHVnaW4uQ0xBU1NFU19TVEFURVMudXBsb2FkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVDbGFzc0Zyb21FbGVtZW50KGVsLCBNeVBob3RvUGx1Z2luLkNMQVNTRVNfU1RBVEVTLnVwZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KGVsLCBNeVBob3RvUGx1Z2luLkNMQVNTRVNfU1RBVEVTLmxvYWRpbmcpO1xuICAgICAgICBnaWd5YS5wbHVnaW5VdGlscy5ET00uaGlkZUVsZW1lbnQodGhpcy5fdXBsb2FkVGV4dEVsZW1lbnQpO1xuICAgICAgICBnaWd5YS5wbHVnaW5VdGlscy5ET00uaGlkZUVsZW1lbnQodGhpcy5faWNvbkVsZW1lbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlTG9hZGVyKGVsOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlQ2xhc3NGcm9tRWxlbWVudChlbCwgTXlQaG90b1BsdWdpbi5DTEFTU0VTX1NUQVRFUy5sb2FkaW5nKTtcbiAgICAgICAgaWYgKHRoaXMuX2VkaXRNb2RlID09IFByb2ZpbGVQaG90b0VkaXRNb2Rlcy51cGxvYWQpIHtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudChlbCwgTXlQaG90b1BsdWdpbi5DTEFTU0VTX1NUQVRFUy51cGxvYWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KGVsLCBNeVBob3RvUGx1Z2luLkNMQVNTRVNfU1RBVEVTLnVwZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZ2lneWEucGx1Z2luVXRpbHMuRE9NLnNob3dFbGVtZW50KHRoaXMuX3VwbG9hZFRleHRFbGVtZW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzcGxheVRvb2x0aXAoKSB7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXBUZXh0Q29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMuX2N1cnJuZXRFcnJvclRleHQ7XG4gICAgICAgIGdpZ3lhLnBsdWdpblV0aWxzLkRPTS5zaG93RWxlbWVudCh0aGlzLl9pbmZvVG9vbHRpcEVsZW1lbnQpO1xuICAgICAgICB2YXIgdG9vbFRpcCA9IHRoaXMuX2luZm9Ub29sdGlwRWxlbWVudDtcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRFcnJvclR5cGUgPT0gUHJvZmlsZVBob3RvRXJyb3JUeXBlLm5vbmUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGdpZ3lhLnBsdWdpblV0aWxzLkRPTS5oaWRlRWxlbWVudCh0b29sVGlwKTtcbiAgICAgICAgICAgIH0sIE15UGhvdG9QbHVnaW4uVE9PTFRJUF9USU1FT1VUKTtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJuZXRFcnJvclRleHQgPSAnJztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVFcnJvckluZGljYXRpb24oc2hvd0Vycm9yOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChzaG93RXJyb3IpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9lZGl0TW9kZSA9PSBQcm9maWxlUGhvdG9FZGl0TW9kZXMudXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUNsYXNzRnJvbUVsZW1lbnQodGhpcy5pbm5lckNvbnRhaW5lciwgTXlQaG90b1BsdWdpbi5DTEFTU0VTX1NUQVRFUy51cGRhdGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlQ2xhc3NGcm9tRWxlbWVudCh0aGlzLmlubmVyQ29udGFpbmVyLCBNeVBob3RvUGx1Z2luLkNMQVNTRVNfU1RBVEVTLnVwbG9hZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQ2xhc3NUb0VsZW1lbnQodGhpcy5pbm5lckNvbnRhaW5lciwgTXlQaG90b1BsdWdpbi5DTEFTU0VTX1NUQVRFUy5lcnJvcik7XG4gICAgICAgICAgICBnaWd5YS5wbHVnaW5VdGlscy5ET00uc2hvd0VsZW1lbnQodGhpcy5faWNvbkVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5VG9vbHRpcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUNsYXNzRnJvbUVsZW1lbnQodGhpcy5pbm5lckNvbnRhaW5lciwgTXlQaG90b1BsdWdpbi5DTEFTU0VTX1NUQVRFUy5lcnJvcik7XG4gICAgICAgICAgICBpZiAodGhpcy5fZWRpdE1vZGUgPT0gUHJvZmlsZVBob3RvRWRpdE1vZGVzLnVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudCh0aGlzLmlubmVyQ29udGFpbmVyLCBNeVBob3RvUGx1Z2luLkNMQVNTRVNfU1RBVEVTLnVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgZ2lneWEucGx1Z2luVXRpbHMuRE9NLmhpZGVFbGVtZW50KHRoaXMuX2ljb25FbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KHRoaXMuaW5uZXJDb250YWluZXIsIE15UGhvdG9QbHVnaW4uQ0xBU1NFU19TVEFURVMudXBsb2FkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdpZ3lhLnBsdWdpblV0aWxzLkRPTS5oaWRlRWxlbWVudCh0aGlzLl9pbmZvVG9vbHRpcEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGlkZUxvYWRlcih0aGlzLmlubmVyQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFNlcnZlckVycm9yVGV4dChlcnJvck1lc3NhZ2U6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnPGI+ICcgKyBlcnJvck1lc3NhZ2UgKyAnPC9iPic7XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImdpZ3lhLW15UGhvdG8tcHJvZmlsZS1ib3gtd3JhcHBlclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImdpZ3lhLW15UGhvdG8tcHJvZmlsZS1pbWFnZVxcXCI+PC9kaXY+XFxuPC9kaXY+XFxuXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzcGFuIGlkPVxcXCJlcnJvckNvbnRhaW5lclxcXCI+XFxuICAgICR0b29sdGlwXFxuPC9zcGFuPlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3Bhbj5cXG4gICAgPHN0cm9uZz4kc2VydmVyRXJyb3I8L3N0cm9uZz5cXG48L3NwYW4+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImdpZ3lhLW15UGhvdG8tcHJvZmlsZS1ib3gtd3JhcHBlciAkZWRpdENsYXNzXFxcIj5cXHJcXG4gICAgPCEtLSAuc3RhdHVzLXVwbG9hZCB8IC5zdGF0dXMtbG9hZGluZyB8IC5zdGF0dXMtZXJyb3IgfCAuc3RhdHVzLXVwbG9hZGVkIC0tPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJnaWd5YS1teVBob3RvLXN0YXR1cy1pY29uXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImdpZ3lhLW15UGhvdG8tdG9vbHRpcC13cmFwXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnaWd5YS1teVBob3RvLXRvb2x0aXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnaWd5YS1teVBob3RvLXRvb2x0aXAtdGV4dC13cmFwXFxcIj4kdG9vbHRpcDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImdpZ3lhLW15UGhvdG8tYXJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJnaWd5YS1teVBob3RvLXByb2ZpbGUtaW1hZ2VcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJnaWd5YS1teVBob3RvLXVwbG9hZC1idXR0b24td3JhcFxcXCI+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2lneWEtbXlQaG90by11cGxvYWQtYnV0dG9uXFxcIj4kdXBsb2FkVGV4dDwvc3Bhbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImdpZ3lhLW15UGhvdG8tbG9hZGluZy1pY29uXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZ2lneWEtbXlQaG90by1mb3JtLXdyYXBwZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ2lneWEtbXlQaG90by1kZWxldGUtYnV0dG9uXFxcIj48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7IiwiZXhwb3J0IGNvbnN0IGVudW0gR1NFcnJvcnMge1xuICAgIE9LID0gMCxcbiAgICBEYXRhX1BlbmRpbmcgPSAxMDAwMDEsIC8vIERhdGEgaXMgc3RpbGwgYmVpbmcgcHJvY2Vzc2VkLCBxdWVyeSBhZ2FpbiBmb3IgdGhlIHJlc3BvbnNlXG4gICAgTkVUV09SS19FUlJPUiA9IDUwMDAyNixcbiAgICBEQVRBX1BFTkRJTkcgPSAxMDAwMDEsIC8vIERhdGEgaXMgc3RpbGwgYmVpbmcgcHJvY2Vzc2VkLCBxdWVyeSBhZ2FpbiBmb3IgdGhlIHJlc3BvbnNlXG4gICAgT1BFUkFUSU9OX0NBTkNFTEVEID0gMjAwMDAxLCAvLyB1c2VyIGNhbmNlbGVkLCBpbiBsb2dpbiBwcm9jZXNzXG4gICAgUEVSTUlTU0lPTl9HUkFOVEVEID0gMjAwMDAyLCAvLyBJbm5lciBjb2RlXG4gICAgUEVSTUlTU0lPTl9OT1RfR1JBTlRFRCA9IDIwMDAwMywgLy8gSW5uZXIgY29kZVxuICAgIFJFRElSRUNUID0gMjAwMDA0LCAvLyBJbm5lciBjb2RlXG4gICAgTkVXX1VTRVIgPSAyMDAwMDUsIC8vIElubmVyIGNvZGVcbiAgICBPUEVSQVRJT05fRE9ORSA9IDIwMDAwNiwgLy8gSW5uZXIgY29kZVxuICAgIFVQREFURV9VU0VSID0gMjAwMDA3LCAvLyBJbm5lciBjb2RlXG4gICAgT0tfV0lUSF9FUlJPUlMgPSAyMDAwMDgsIC8vIEZvciByZXBvcnRzIC0gd2hlbiB3ZSByZXR1cm4gb2sgdG8gY2xpZW50IGJ1dCBoYWQgYWNjZXB0YWJsZSBlcnJvcnMgKHRoYXQgd2Ugd2FudCB0byBrbm93IGFib3V0KSBvbiB0aGUgd2F5XG4gICAgQUNDT1VOVFNfTElOS0VEID0gMjAwMDA5LCAvLyBBZnRlciBsaW5raWduIGFjY291dG5zIHZpYSBsb2dpbiwgcmV0dXJuIHRoaXMgZXJyb3IgY29kZVxuICAgIE9LX1dJVEhfRVJST1JfTE9HSU5fSURFTlRJRklFUl9FWElTVFMgPSAyMDAwMTAsIC8vIEZvciBzZXRBY2NvdW50SW5mbyB1c2luZyB0aGUgY29uZmxpY3RIYW5kbGluZyBwYXJhbSAtIHByb2ZpbGUgd2FzIHNhdmVkLCBidXQgdGhlIGVtYWlsIGNvbmZsaWN0cyB3aXRoIGFub3RoZXIgdXNlclxuICAgIEFDQ09VTlRfUEVORElOR19SRUdJU1RSQVRJT04gPSAyMDYwMDEsIC8vIEZvciBhY2NvdW50cyBBUEksXG4gICAgQUNDT1VOVF9QRU5ESU5HX1ZFUklGSUNBVElPTiA9IDIwNjAwMiwgLy8gRm9yIGFjY291bnRzIEFQSTsgY29uc2lkZXIgbW92aW5nIHRvIDQwM3h4eCBzZWN0aW9uIGluIHRoZSBmdXR1cmUuXG4gICAgQUNDT1VOVF9NSVNTSU5HX0xPR0lOSUQgPSAyMDYwMDMsIC8vIEZvciBhY2NvdW50cyBBUElcbiAgICBJREVOVElUWV9BTFJFQURZX0FTU0lHTkVEID0gMjA2MDA0LCAvLyBGb3IgaW1wb3J0IGFjY291bnRzIEFQSVxuICAgIEFGVEVSX0VNQUlMX1ZFUklGSUNBVElPTiA9IDIwNjAwNSxcbiAgICBQRU5ESU5HX0NPREVfVkVSSUZJQ0FUSU9OID0gMjA2MDA2LFxuICAgIENMSUVOVF9MT0cgPSAzMDAwMDEsIC8vIGludGVybmFsLCBmb3IgcmVwb3J0aW5nIGVyb3JycyBpbiBjbGllbnQgU0RLU1xuICAgIElOVkFMSURfREFUQV9DRU5URVIgPSAzMDEwMDEsIC8vIFwiSW52YWxpZCBkYXRhLWNlbnRlclwiLiB3aXRoIGVycm9yIGRldGFpbHMgb2Y6IFwiVGhpcyBBUEkga2V5IGlzIHNlcnZlZCBieSBhbm90aGVyIGRhdGEgY2VudGVyXCIuXG4gICAgSU5WQUxJRF9SRVFVRVNUX0ZPUk1BVCA9IDQwMDAwMSwgLy8gY291bGQgYmUgYWxsIGtpbmQgb2YgZXJyb3JzIHdpdGggd3JvbmcgcmVxdWVzdCAobm9uIHNlY3VyZSB3aGVuIHNob3VsZCBiZSBzZWN1cmUsIHdyb25nIGF1dGhlbnRpY2F0aW9uIGhlYWRlcilcbiAgICBNSVNTSU5HX1JFUVVJUkVEX1BBUkFNRVRFUiA9IDQwMDAwMixcbiAgICBVTklRVUVfSURFTlRJRklFUl9FWElTVFMgPSA0MDAwMDMsXG4gICAgSU5WQUxJRF9QQVJBTUVURVJfRk9STUFUID0gNDAwMDA0LFxuICAgIElOVkFMSURfUEFSQU1FVEVSX1ZBTFVFID0gNDAwMDA2LFxuICAgIERVUExJQ0FURV9WQUxVRSA9IDQwMDAwNyxcbiAgICBJTlZBTElEX0FVVEhFTlRJQ0FUSU9OX0hFQURFUiA9IDQwMDAwOCwgLy8gT0F1dGgyXG4gICAgVkFMSURBVElPTl9FUlJPUiA9IDQwMDAwOSwgLy8gSW4gYWNjb3VudHMucmVnaXN0ZXIsIHdoZW5ldmVyIHRoZXJlIGlzIGEgdmFsaWRhdGlvbiBlcnJvclxuICAgIElOVkFMSURfUkVESVJFQ1RfVVJJID0gNDAwMDExLCAvLyBPQXV0aDJcbiAgICBJTlZBTElEX1JFU1BPTlNFX1RZUEUgPSA0MDAwMTIsIC8vIE9BdXRoMlxuICAgIFVOU1VQUE9SVEVEX0dSQU5UX1RZUEUgPSA0MDAwMTMsIC8vIE9BdXRoMlxuICAgIElOVkFMSURfR1JBTlQgPSA0MDAwMTQsIC8vIE9BdXRoMlxuICAgIENPREVfRVhQSVJFRCA9IDQwMDAxNSwgLy8gT0F1dGgyXG4gICAgU0NIRU1BX1ZBTElEQVRJT05fRkFJTEVEID0gNDAwMDIwLFxuICAgIENBUFRDSEFfVkVSSUZJQ0FUSU9OX0ZBSUxFRCA9IDQwMDAyMSxcbiAgICBVTklRVUVfSU5ERVhfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyMixcbiAgICBJTlZBTElEX1RZUEVfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyMyxcbiAgICBEWU5BTUlDX0ZJRUxEU19WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI0LFxuICAgIFdSSVRFX0FDQ0VTU19WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI1LFxuICAgIElOVkFMSURfRk9STUFUX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjYsXG4gICAgUkVRVUlSRURfVkFMVUVfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyNyxcbiAgICBFTUFJTF9OT1RfVkVSSUZJRUQgPSA0MDAwMjgsXG4gICAgU0NIRU1BX0NPTkZMSUNUX0VSUk9SID0gNDAwMDI5LCAvLyBUbyBoYW5kbGUgVXNlciBzdG9yeSAzNDMzMC4gSW1wcm92ZSBFbGFzdGljU2VhcmNoTWFwcGluZ0V4Y2VwdGlvbiBoYW5kbGluZyBpbiBEUy5JbmRleE9iamVjdFxuICAgIE9QRVJBVElPTl9OT1RfQUxMT1dFRCA9IDQwMDAzMCwgLy8gVXNlciBzdG9yeSAzNDMxMSAtIElmIGFkZENvbm5lY3Rpb24gaXMgY2FsbGVkIHJldHVybiBhbiBlcnJvciAoXCJvcGVyYXRpb24gbm90IGFsbG93ZWQgZm9yIHRoaXMgYWNjb3VudFwiLCA0MDBYWFggZXJyb3IpLlxuICAgIFNFQ1VSSVRZX1ZFUklGSUNBVElPTl9GQUlMRUQgPSA0MDAwNTAsXG4gICAgSU5WQUxJRF9BUElLRVlfUEFSQU1FVEVSID0gNDAwMDkzLFxuICAgIE5PVF9TVVBQT1JURUQgPSA0MDAwOTYsIC8vIHRoZSBmdW5jdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGJ5IGFueSBvZiB0aGUgY3VycmVudGx5IGNvbm5lY3RlZCBwcm92aWRlcnNcbiAgICBVTlNVUFBPUlRFRF9VU0VSX0FHRU5UID0gNDAwMDk3LCAvL1xuICAgIE5PX1BST1ZJREVSUyA9IDQwMDEwMCwgLy8gY2xpZW50P1xuICAgIFBPUFVQX0JMT0NLRUQgPSA0MDAxMDEsIC8vIGNsaWVudFxuICAgIElOVkFMSURfRVZFTlRfSEFORExFUiA9IDQwMDEwMiwgLy8gY2xpZW50XG4gICAgSU5WQUxJRF9DT05UQUlORVJJRCA9IDQwMDEwMywgLy8gY2xpZW50XG4gICAgTk9UX0NPTk5FQ1RFRCA9IDQwMDEwNiwgLy8gdXNlciBpcyBub3QgY29ubmVjdGVkIHRvIHRoZSByZXF1aXJlZCBuZXR3b3JrIG9yIHRvIGFueSBuZXR3b3JrXG4gICAgSU5WQUxJRF9TSVRFX0RPTUFJTiA9IDQwMDEyMCwgLy8gdGhlIGN1cnJlbnQgZG9tYWluIGRvZXMgbm90IG1hdGNoIHRoZSBkb21haW4gY29uZmlndXJlZCBmb3IgdGhlIGFwaSBrZXlcbiAgICBQUk9WSURFUl9DT05GSUdVUkFUSU9OX0VSUk9SID0gNDAwMTIyLCAvLyB0aGUgY3VycmVudCBkb21haW4gZG9lcyBub3QgbWF0Y2ggdGhlIGRvbWFpbiBjb25maWd1cmVkIGZvciB0aGUgYXBpIGtleVxuICAgIExJTUlUX1JFQUNIRUQgPSA0MDAxMjQsIC8vIEdhbWVNZWNoYW5pY3MgLSBDYXAgd2FzIHJlYWNoZWRcbiAgICBGUkVRVUVOQ1lfTElNSVRfUkVBQ0hFRCA9IDQwMDEyNSwgLy8gQ29tbWVudHMvRmVlZCAtIFNwYW0gQ2FwcyB3YXMgcmVhY2hlZFxuICAgIElOVkFMSURfQUNUSU9OID0gNDAwMTI2LCAvLyBHYW1lTWVjaGFuaWNzIC0gSW52YWxpZCBhY3Rpb24uIFRyaWdnZXJlZCBhY3Rpb24gY2FuJ3QgYmUgaW5pdGlhdGVkIGV4dGVybmFsbHlcbiAgICBJTlNVRkZJQ0lFTlRfUE9JTlRTX1RPX1JFREVFTSA9IDQwMDEyNywgLy8gR2FtZU1lY2hhbmljcyAtIEluc3VmZmljaWVudF9wb2ludHNfdG9fcmVkZWVtXG4gICAgU0lHTkFUVVJFX1RJTUVTVEFNUF9FWFBJUkVEID0gNDAwMTI4LCAvLyB0aGUgdGltZXN0YW1wIGluc2lkZSB0aGUgc2lnbmF0dXJlIGlzIGV4cGlyZWRcbiAgICBFcnJvcl9EdXJpbmdfRXh0ZW5zaW9uc19PcGVyYXRpb24gPSA0MDAzMDIsXG4gICAgRXh0ZW5zaW9uX1BvaW50X0N1c3RvbV9FcnJvciA9IDQwMDMwMywgLy8gRXh0ZW5zaW9uIHBvaW50IHJldHVybiBhIHVzZXJGYWNpbmdFcnJvck1lc3NhZ2VcbiAgICBJTlZBTElEX1BPTElDWV9DT05GSUdVUkFUSU9OID0gNDAxMDAwLCAvLyBQb2xpY3kgY29uZmlndXJhdGlvbiBpcyBpbnZhbGlkIChpLmUuIHByZXZlbnQgcmVnaXRyYXRpb24pXG4gICAgU1VTUEVDVEVEX1NQQU0gPSA0MDEwMTAsIC8vIFNvbWVvbmUgaXMgdHJ5aW5nIHRvIHVzZSBHaWd5YSB0byBzZW5kIGEgZW1haWwgd2l0aCBhIFVSTCB0aGF0IGRvZXMgbm90IG1hdGNoIGFueSBvZiB0aGUgY2xpZW50J3MgZG9tYWluczsgc3VzcGVjdGVkIHNwYW0uXG4gICAgTE9HSU5fRkFJTEVEX0NBUFRDSEFfUkVRVUlSRUQgPSA0MDEwMjAsIC8vIGFjY291bnRzLmxvZ2luIC0gY2FwdGNoYSByZXF1aXJlZFxuICAgIFJFUVVFU1RfRkFJTEVEX0NBUFRDSEFfUkVRVUlSRUQgPSA0MDEwMjMsIC8vIGFjY291bnRzLmxvZ2luIC0gY2FwdGNoYSByZXF1aXJlZFxuICAgIExPR0lOX0ZBSUxFRF9XUk9OR19DQVBUQ0hBID0gNDAxMDIxLCAvLyBhY2NvdW50cy5sb2dpbiAtIHdyb25nIGNhcHRjaGEgY29kZVxuICAgIE9MRF9QQVNTV09SRF9VU0VEID0gNDAxMDMwLCAvLyBUaGUgdXNlciBwcm92aWRlZCBoaXMgcHJldmlvdXMgcGFzc3dvcmQsIG5vdCB0aGUgY3VycmVudCBvbmVcbiAgICBGT1JCSURERU4gPSA0MDMwMDAsXG4gICAgSU5WQUxJRF9TRVNTSU9OX1RPS0VOID0gNDAzMDAxLCAvLyBpbnRlcm5hbFxuICAgIFJFUVVFU1RfSEFTX0VYUElSRUQgPSA0MDMwMDIsIC8vIHRoZSB0aW1lc3RhbXAgb3IgZXhwaXJhdGlvbiBvZiB0aGUgdG9rZW4gdXNlZCBleGNlZWRlZCB0aGUgYWxsb3dlZCB0aW1lIHdpbmRvd1xuICAgIElOVkFMSURfUkVRVUVTVF9TSUdOQVRVUkUgPSA0MDMwMDMsXG4gICAgRFVQTElDQVRFX05PTkNFID0gNDAzMDA0LFxuICAgIFVOQVVUSE9SSVpFRF9VU0VSID0gNDAzMDA1LCAvLyB0aGUgdXNlciBpZCBwYXNzZWQgaXMgbm90IHZhbGlkIGZvciB0aGlzIHNpdGVcbiAgICBTRU5TSVRJVkVfREFUQV9TRU5UX09WRVJfSFRUUCA9IDQwMzAwNiwgLy8gd2hlbiBzZW5kaW5nIHRoZSBzZWNyZXQga2V5IGluIFJFU1QgaXQgaGFzIHRvIGJlIG92ZXIgSFRUUFNcbiAgICBQRVJNSVNTSU9OX0RFTklFRCA9IDQwMzAwNywgLy8gQ29tbWVudHMgc2VydmVyIC0gUGVybWlzc2lvbiBkZW5pZWQgKHJlYWRPbmx5LG1vZGVyYXRpb24gc2l0ZSkuXG4gICAgSU5WQUxJRF9PUEVOSURfVVJMID0gNDAzMDA4LCAvLyBjYW5ub3QgZmluZCBhbiBvcGVuSWQgZW5kcG9pbnQgb24gdGhlIHVybCBvciB1c2VybmFtZSBnaXZlbiBmb3Igb3BlbklkIGxvZ2luXG4gICAgUFJPVklERVJfU0VTU0lPTl9FWFBJUkVEID0gNDAzMDA5LCAvLyB0aGUgdXNlciBzZXNzaW9uIGZvciB0aGlzIHByb3ZpZGVyIGlzIGV4cGlyZWRcbiAgICBJTlZBTElEX1NFQ1JFVCA9IDQwMzAxMCwgLy8gdGhlIHJlcXVlc3QgaGFzIGFuIGludmFsaWQgc2VjcmV0IGtleVxuICAgIFNFU1NJT05fSEFTX0VYUElSRUQgPSA0MDMwMTEsIC8vIHRoZSBzZXNzaW9uIGZvciB0aGlzIHVzZXIgaGFzIGV4cGlyZWRcbiAgICBOT19WQUxJRF9TRVNTSU9OID0gNDAzMDEyLCAvLyByZXF1ZXN0ZWQgdXNlciBoYXMgbm8gdmFsaWQgc2Vzc2lvblxuICAgIFVOVkVSSUZJRURfVVNFUiA9IDQwMzAxMywgLy8gdGhlIHVzZXIgaXMgbm90IHZlcmlmaWVkIGluIFNTTyBzZXNzaW9uXG4gICAgTUlTU0lOR19SRVFVRVNUX1JFRkVSUkVSID0gNDAzMDE1LCAvLyB3ZSBjYW4ndCB2YWxpZGF0ZSB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSByZWZlcnJlciBoZWFkZXIgaXMgbWlzc2luZ1xuICAgIFVORVhQRUNURURfUFJPVklERVJfVVNFUiA9IDQwMzAxNywgLy8gdGhlIGxvZ2dlZCBpbiB1c2VyIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBvbmUgZXhwZWN0ZWRcbiAgICBQRVJNSVNTSU9OX05PVF9SRVFVRVNURUQgPSA0MDMwMjIsIC8vIHRoZSBhY3Rpb24gbmVlZHMgYSB1c2VyIHBlcm1pc3Npb24gYW5kIGl0IHdhcyBub3QgcmVxdWVzdGVkXG4gICAgTk9fVVNFUl9QRVJNSVNTSU9OID0gNDAzMDIzLCAvLyB0aGUgYWN0aW9uIG5lZWRzIGEgdXNlciBwZXJtaXNzaW9uIGFuZCB3ZSBkb24ndCBoYXZlIG9uZVxuICAgIFBST1ZJREVSX0xJTUlUX1JFQUNIRUQgPSA0MDMwMjQsIC8vIHRoZSBwcm92aWRlciBsaW1pdCBmb3IgdGhpcyBhY3Rpb24gd2FzIGV4Y2VlZGVkXG4gICAgSU5WQUxJRF9UT0tFTiA9IDQwMzAyNSwgLy8gT0F1dGgyXG4gICAgVU5BVVRIT1JJWkVEX0FDQ0VTU19FUlJPUiA9IDQwMzAyNiwgLy8gQ2FsbHMgdG8gYWNjb3VudHMuaXNBdmFpbGFibGVMb2dpbklEIFdoZW4gcHJldmVudExvZ2luSURIYXJ2ZXN0aW5nID0gdHJ1ZSBzaG91bGQgcmV0dXJuIGFuIGFwcHJvcHJpYXRlIDQwM3h4eCB1bmF1dGhvcml6ZWQgYWNjZXNzIGVycm9yLlxuICAgIERJRkZFUkVOVF9VU0VSX0ZPUl9SRUFVVEggPSA0MDMwMjcsIC8vIERpZmZlcmVudCB1c2VyIHRyaWVkIHRvIHJlLWF1dGhvcml6ZS5cbiAgICBTRVNTSU9OX0VYUElSRURfUkVUUlkgPSA0MDMwMzAsIC8vIElubmVyIGNvZGUgLSB3aGVuIHRoZSBmYWNlYm9vayBzZXNzaW9uIGlzIGV4cGlyZWQgYW5kIHRoZSBjbGllbnQgd2FpdHMgZm9yIEZCIG9uIHBhZ2UgdG8gbG9hZFxuICAgIEFQUFJPVkVEX0JZX01PREVSQVRPUiA9IDQwMzAzMSwgLy8gY29tbWVudHMgLSBjYW50IGZsYWcgY29tbWVudCwgaXQgd2FzIGFwcHJvdmVkIGJ5IHRoZSBtb2RlcmF0b3IgYWxyZWFkeS5cbiAgICBUT0tFTl9IQVNfUkVORVdFRCA9IDQwMzAzMiwgLy8gdGhlIHRva2VuIGlzIG5vIGxvbmdlciB2YWxpZCwgYnV0IHdlIGhhdmUgbmV3IHRva2VuIHRvIHByb3ZpZGVcbiAgICBOT19VU0VSX0NPT0tJRSA9IDQwMzAzNSwgLy8gbm8gdXNlciBjb29raWVcbiAgICBVTkFVVEhPUklaRURfUEFSVE5FUiA9IDQwMzAzNiwgLy8gcGFydG5lciBpcyBkaXNhYmxlZFxuICAgIFBPU1RfREVOSUVEID0gNDAzMDM3LCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBQb3N0IGRlbmllZCB3aGVuIHRoZSB1c2VyIHRyaWVkIHRvIHJldmlldyB0d2ljZS5cbiAgICBOT19MT0dJTl9USUNLRVQgPSA0MDMwNDAsIC8vIG5vIGxvZ2luIHRpY2tldCBpbiBjYWxsYmFjayB1cmxcbiAgICBBQ0NPVU5UX0RJU0FCTEVEID0gNDAzMDQxLCAvLyBGb3IgYWNjb3VudHMgLSB3aGVuIGdzLmFjY291bnRzLklzQWN0aXZlPWZhbHNlXG4gICAgSU5WQUxJRF9MT0dJTklEID0gNDAzMDQyLCAvLyBGb3IgYWNjb3VudHMgLSB3aGVuIHRyeWluZyB0byBsb2dpbiB3aXRoIGEgbG9naW5JRCB0aGF0IGRvIG5vdCBleGlzdHNcbiAgICBMT0dJTl9JREVOVElGSUVSX0VYSVNUUyA9IDQwMzA0MywgLy8gRm9yIGFjY291bnQ6IElmIHByb3ZpZGVyRW1haWwgaXMgZGVmaW5lZCBhcyBhIGxvZ2luSWRlbnRpZmllciBpbiB0aGUgcG9saWN5LCBhbmQgdGhlIGVtYWlsIGFkZHJlc3MgcmVjZWl2ZWQgZnJvbSB0aGUgcHJvdmlkZXIgZXhpc3RzIGluIHRoZSBncy5sb2dpbklkZW50aWZpZXJzIGNvbGxlY3Rpb24gYnV0IGFzc29jaWF0ZWQgd2l0aCBhIGRpZmZlcmVudCBVVUlEIHRoYW4gdGhlIGN1cnJlbnQgdXNlciwgdGhlbiByZXR1cm4gXCJMb2dpbiBpZGVudGlmaWVyIGV4aXN0c1wiIGVycm9yIGNvZGUgKDQwM3h4eCkuXG4gICAgVU5ERVJBR0VfVVNFUiA9IDQwMzA0NCwgLy8gRm9yIENPUFBBIGNvbXBsaWFuY2UgKENoaWxkcmVuJ3MgT25saW5lIFByaXZhY3kgUHJvdGVjdGlvbiBBY3QpXG4gICAgSU5WQUxJRF9TSVRFX0NPTkZJR1VSQVRJT05fRVJST1IgPSA0MDMwNDUsIC8vIEZvciBhY2NvdW50cyAtIHNpdGUgRFMgaXMgZW5hYmxlZCB0aG91Z2ggbm8gRFNTaXplIHdhcyBjb25maWd1cmVkLlxuICAgIExPR0lOSURfRE9FU19OT1RfRVhJU1QgPSA0MDMwNDcsIC8vIEZvciBhY2NvdW50cyAtIHdoZW4gdHJ5aW5nIHRvIHJlc2V0IHBhc3N3b3JkIHdpdGggYSBsb2dpbklEIHRoYXQgZG8gbm90IGV4aXN0c1xuICAgIEFQSV9SQVRFX0xJTUlUX0VYQ0VFREVEID0gNDAzMDQ4LFxuICAgIFBFTkRJTkdfUEFTU1dPUkRfQ0hBTkdFID0gNDAzMTAwLCAvLyBUaGUgdXNlcidzIHBhc3N3b3JkIG5lZWRzIHRvIGJlIGNoYW5nZWRcbiAgICBBQ0NPVU5UX1BFTkRJTkdfVEZBX1ZFUklGSUNBVElPTiA9IDQwMzEwMSxcbiAgICBBQ0NPVU5UX1BFTkRJTkdfVEZBX1JFR0lTVFJBVElPTiA9IDQwMzEwMixcbiAgICBBQ0NPVU5UX1BFTkRJTkdfUkVDRU5UX0xPR0lOID0gNDAzMTEwLFxuICAgIEFDQ09VTlRfVEVNUE9SQVJJTFlfTE9DS0VEX09VVCA9IDQwMzEyMCwgLy8gVG9vIG1hbnkgbG9naW4gYXR0ZW1wdHM7IGFjY291bnQgbG9ja2VkLW91dFxuICAgIFJFRFVOREFOVF9PUEVSQVRJT04gPSA0MDMyMDAsIC8vIFRoZSBjbGllbnQgcGVyZm9ybWVkIGFuIG9wZXJhdGlvbiB0aGF0IGlzIHJlZHVuZGFudFxuICAgIElOVkFMSURfQVBQTElDQVRJT05fSUQgPSA0MDMyMDEsIC8vIFRoZSBhcHAgaWQgcHJvdmlkZWQgaXMgZGlmZmVyZW50IHRoYW4gdGhlIG9uZSBjb25maWd1cmVkIGZvciB0aGUgc2l0ZVxuICAgIE5PVF9GT1VORCA9IDQwNDAwMCwgLy8gQ29tbWVudHMgc2VydmVyIC0gQ2F0ZWdvcnkgbm90IGZvdW5kLiBBY2NvdW50cyAtIGVtYWlsIHZlcmlmaWNhdGlvbiBmYWlsZWQsIHV1aWQgbm90IGZvdW5kLlxuICAgIEZSSUVORF9OT1RfRk9VTkQgPSA0MDQwMDEsIC8vIHRoZSB1c2VyIGlkIHByb3ZpZGVkIGFzIGEgdGFyZ2V0IGlzIG5vdCBhIGZyaWVuZCBmb3IgdGhlIGN1cnJlbnQgdXNlclxuICAgIENBVEVHT1JZX05PVF9GT1VORCA9IDQwNDAwMiwgLy8gQ29tbWVudHMgc2VydmVyIC0gQ2F0ZWdvcnkgbm90IGZvdW5kLlxuICAgIFVJRF9OT1RfRk9VTkQgPSA0MDQwMDMsXG4gICAgUkVTT1VSQ0VfTk9UX0ZPVU5EID0gNDA0MDA0LCAvLyBDbGllbnQgc2lkZSAtIGltYWdlIG5vdCBmb3VuZCBhZnRlciB1cGxvYWRcbiAgICBJTlZBTElEX0FQSV9NRVRIT0QgPSA0MDUwMDEsIC8vIGludGVybmFsIGZvciBvdXIgSlMgQVBJXG4gICAgSURFTlRJVFlfRVhJU1RTID0gNDA5MDAxLCAvLyB3aGVuIHRyeWluZyB0byBjb25uZWN0IHRvIGEgcHJvdmlkZXIgdGhhdCBpcyBhbHJlYWR5IGNvbm5lY3RlZCBvciBsaW5rIHRvIGFuIGFscmVhZHkgbGlua2VkIGFjY291bnRcbiAgICBHT05FID0gNDEwMDAwLCAvLyBSZXNvdXJjZSBubyBsb25nZXIgYXZhaWxhYmxlLiBEYXRhIEtleSBTZXJ2ZXIgLSBrZXkgcmV2b2tlZC9leHBpcmVkLlxuICAgIFJFUVVFU1RfRU5USVRZX1RPT19MQVJHRSA9IDQxMzAwMSwgLy8gQ29tbWVudHMgc2VydmVyIC0gUmVxdWVzdCB0byBsYXJnZVxuICAgIENPTU1FTlRfVEVYVF9UT09fTEFSR0UgPSA0MTMwMDIsIC8vIENvbW1lbnRzIHNlcnZlciAtIENvbW1lbnQgVGV4dCB0byBsYXJnZS5cbiAgICBPQkpFQ1RfVE9PX0xBUkdFID0gNDEzMDAzLCAvLyBEYXRhU3RvcmUgb2JqZWN0IGlzIHRvbyBsYXJnZVxuICAgIFBST0ZJTEVfUEhPVE9fVE9PX0xBUkdFID0gNDEzMDA0LCAvLyBQcm9maWxlIHBob3RvIGlzIHRvbyBsYXJnZSwgZXhjZWVkcyBtYXhpbXVtIGFsbG93ZWQgY29udGVudCBsZW5ndGhcbiAgICBSRVFVRVNUX1VSSV9UT09fTE9ORyA9IDQxNDAwMCwgLy9UaGUgVVJJIHByb3ZpZGVkIHdhcyB0b28gbG9uZyBmb3IgdGhlIHNlcnZlciB0byBwcm9jZXNzLlxuICAgIE1JU1NJTkdfVVNFUl9QSE9UTyA9IDQwOTAxMCwgLy8gRXJyb3IgLSBtaXNzaW5nIHVzZXIgcGhvdG9cbiAgICBDT1VOVEVSX05PVF9SRUdJU1RFUkVEID0gNDA5MDExLCAvLyBDb3VudGVyIG5vdCByZWdpc3RlcmVkXG4gICAgSU5WQUxJRF9HTUlEX1RJQ0tFVCA9IDQwOTAxMiwgLy8gZ21pZCB0aWNrZXQgaXMgbm90IHZhbGlkXG4gICAgU0FNTF9NQVBQRURfQVRUUklCVVRFX05PVF9GT1VORCA9IDQwOTAxMywgLy8gVXNlZCB3aGVuIG1hcHBlZCBhdHRyaWJ1dGUgdmFsdWUgZm9yIHByb3ZpZGVyVUlEIGNhbm5vdCBiZSByZXRyZWl2ZWRcbiAgICBTQU1MX0NFUlRJRklDQVRFX05PVF9GT1VORCA9IDQwOTAxNCwgLy8gVXNlZCB3aGVuIFNBTUwgY2VydGlmaWNhdGUgY291bGQgbm90IGJlIHJldHJlaXZlZC5cbiAgICBTQU1MX01FU1NBR0VfTk9UX0ZPVU5EID0gNDA5MDE1LCAvLyBVc2VkIHdoZW4gY2FjaGVkIFNBTUwgbWVzc2FnZSBjb3VsZCBub3QgYmUgcmV0cmVpdmVkLlxuICAgIEdFTkVSQUxfU0VSVkVSX0VSUk9SID0gNTAwMDAxLFxuICAgIFNFUlZFUl9MT0dJTl9FUlJPUiA9IDUwMDAwMiwgLy8gZ2VuZXJhbCBlcnJvciBkdXJpbmcgdGhlIGxvZ2luIHByb2Nlc3NcbiAgICBERUZBVUxUX0FQUExJQ0FUSU9OX0NPTkZJR1VSQVRJT05fRVJST1IgPSA1MDAwMDMsIC8vIEZvciBtdWx0aXBsZSBEQyAtIHdoZW4gbm8gZGVmYXVsdCBhcHBsaWNhdGlvbiBjYW4gYmUgZm91bmQgaW4gRGVmYXVsdEFwcGxpY2F0aW9ucy5jb25maWcuIFdpdGggZXJyb3IgZGV0YWlscyBvZjogXCJEZWZhdWx0IGFwcGxpY2F0aW9uIGlzbid0IGNvbmZpZ3VyZWQgZm9yIGRhdGFDZW50ZXJcIlxuICAgIFNFU1NJT05fTUlHUkFUSU9OX0VSUk9SID0gNTAwMDE0LCAvLyBlcnJvciBpbiBtaWdyYXRpbmcgb2xkIHRvIG5ldyBmYWNlYm9vayBzZXNzaW9uXG4gICAgUFJPVklERVJfRVJST1IgPSA1MDAwMjMsIC8vIGdlbmVyYWwgZXJyb3IgZnJvbSB0aGUgcHJvdmlkZXJcbiAgICBEQVRBQkFTRV9FUlJPUiA9IDUwMDAyOCxcbiAgICBVU0VSTkFNRV9SRVFVSVJFRCA9IDUwMDAyOSwgLy8gSW5uZXIgY29kZVxuICAgIE5PX1BST1ZJREVSX0FQUExJQ0FUSU9OID0gNTAwMDMxLCAvLyB0aGUgYXBwbGljYXRpb24gZm9yIHRoaXMgcHJvdmlkZXIgaXMgbm90IGRlZmluZWQgZm9yIHRoaXMgc2l0ZVxuICAgIExPQURfRkFJTEVEID0gNTAwMDMyLCAvLyBjbGllbnQgZXJyb3JcbiAgICBJTlZBTElEX0VOVklST05NRU5UX0NPTkZJRyA9IDUwMDAzMywgLy8gSW4gY2FzZSB0aGVyZSBpcyBubyB0YXJnZXQgZW52aXJvbm1lbnQgaW4gdGhlIGNvbmZpZyBmaWxlIHdlJ2QgcmV0dXJuIHdpdGggIGludmFsaWRfZW52aXJvbm1lbnRfY29uZmlnIGVycm9yLlxuICAgIEVSUk9SX0RVUklOR19CQUNLRU5EX09QRVJBVElPTiA9IDUwMDAzNCxcbiAgICBUSU1FT1VUID0gNTA0MDAxLCAvLyBvdXRnb2luZyByZXF1ZXN0IGhhZCB0aW1lZCBvdXRcbiAgICBDTElFTlRUSU1FT1VUID0gNTA0MDAyLCAvLyBGb3Igc2VydmVyIFNES3MgLSBhIGNsaWVudCBzaWRlIHRpbWVvdXRcbiAgICBJTlZBTElEX1VSTCA9IDQwNDAwNCwgLy8gZW1iZWQubHkgNDA0IGVycm9yIG1lc3NhZ2UgLSB1cmwgaXMgbm90IHZhbGlkXG4gICAgTUVESUFfSVRFTVNfTk9UX1NVUFBPUlRFRCA9IDQwMTAwMSwgLy8gTWVkaWEgaXRlbXMgYSBub3QgYWxsb3dlZCBmb3IgdGhpcyBjYXRlZ29yeVxuICAgIE1JU1NJTkdfRVJST1JfQ09ERSA9IDU5OTk5OSxcbiAgICBUSElTX0FVVEhFTlRJQ0FUSU9OX01FVEhPRF9JU19DVVJSRU5UTFlfRElTQUJMRUQgID0gNDAzMzAwLFxuICAgIEZPUkNFX0xJTktfTE9HSU5fSURFTlRJRklFUl9FWElTVFMgPSA0MDkwMDMsXG4gICAgUEFTU0tFWV9BVVRIRU5USUNBVE9SX1JFR0lTVEVSRUQgPSA0MDAxMzAsXG4gICAgUEFTU0tFWV9BQk9SVEVEID0gNDAwMTMxLFxuICAgIFBBU1NLRVlfRVJST1IgPSA1MDAxMzFcbn1cbmV4cG9ydCBjb25zdCBlbnVtIEdTRXJyb3JEZXRhaWxzIHtcbiAgICBOb25lID0gMCxcbiAgICBTYW1lX3Bhc3N3b3JkID0gMTAwMDAxLCAvLyBSZXNldCBQYXNzd29yZCAtIFwiJ29sZFBhc3N3b3JkJyBjYW5ub3QgYmUgdGhlIHNhbWUgYXMgJ25ld1Bhc3N3b3JkJ1wiXG4gICAgSW52YWxpZF9wYXNzd29yZCA9IDEwMDAwMiwgLy8gUmVzZXQgUGFzc3dvcmQgLSBjdXJyZW50IHBhc3N3b3JkIGlzIHdyb25nL2ludmFsaWRcbiAgICBJbnZhbGlkX2NvdW50ZXJzX3F1ZXJ5X3dpdGhfY3Vyc29yID0gMTAwMDAzLFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==