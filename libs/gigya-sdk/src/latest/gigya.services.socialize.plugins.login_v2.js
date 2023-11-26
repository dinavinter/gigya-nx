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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/socialize/Gigya.Js.Login2/app/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./src/socialize/Gigya.Js.Login2/app/css/ie8patch.css":
/*!***************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./src/socialize/Gigya.Js.Login2/app/css/ie8patch.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.gigya-login-providers-arrow-left,\n.gigya-login-providers-list-container,\n.gigya-login-providers-arrow-right {\n    display:inline;\n}\n\n.gigya-login-provider div {\n    display: -ms-inline-grid;\n}\n\n\ntable.gigya-login-providers-container {\n    top: 0px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./src/socialize/Gigya.Js.Login2/app/css/iePatch.css":
/*!**************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./src/socialize/Gigya.Js.Login2/app/css/iePatch.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".gigya-login-footer {\n    position: relative;\n    top: -9px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./src/socialize/Gigya.Js.Login2/app/css/main.css":
/*!***********************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./src/socialize/Gigya.Js.Login2/app/css/main.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.gigya-link {\n    line-height: normal;\n    cursor: pointer;\n    font-family: arial;\n    font-size: 11px;\n    color: #0086f1;\n}\n\n.gigya-login {\n    margin: 10px;\n    overflow: auto;\n}\n\n\n.gigya-login-providers-container {\n    display: block;\n    margin: 0 auto;\n    background-color: transparent;\n    border-collapse: collapse;\n    white-space: nowrap;\n    border: none;\n    vertical-align: middle;\n\n    position:relative;\n    top: 50%;\n    transform: translateY(-50%);\n    -ms-transform: translateY(-50%);\n    -webkit-transform: translateY(-50%);\n    -moz-transform: translateY(-50%);\n\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.gigya-login-providers-container,\n.gigya-login-providers-container tr,\n.gigya-login-providers-container td,\n.gigya-login-providers-container th {\n    vertical-align: middle;\n}\n\n.gigya-login-providers-list {\n    display: none;\n}\n\n.gigya-active .gigya-login-providers-list {\n    display: block;\n}\n\n.gigya-login-provider-row {\n    display: block;\n    clear: both;\n    float: none;\n    margin: 0;\n    padding: 2.5px 0;\n    line-height:18px;\n}\n\n.gigya-login-provider {\n    cursor: pointer;\n    margin-right: 5px;\n}\n\n.gigya-login-provider div {\n    display: inline-block;\n}\n\n.gigya-login-provider-last {\n    margin-right: 0;\n}\n\n.gigya-login-provider img {\n    vertical-align: baseline;\n}\n\n.gigya-login-providers-container div,\n.gigya-login-providers-container span {\n    margin: 0;\n}\n\n.gigya-login-providers-list-container {\n    vertical-align: top;\n    text-align: center;\n    width: 100%;\n}\n\n.gigya-login-providers-list-container tbody,\n.gigya-login-providers-list-container tr {\n    width: 100%;\n}\n\n.gigya-login-providers-arrow-left,\n.gigya-login-providers-arrow-right {\n    vertical-align: middle;\n    cursor: pointer;\n    box-sizing: border-box;\n    -webkit-tap-highlight-color:transparent;\n}\n\n.gigya-login-providers-arrow-left button,\n.gigya-login-providers-arrow-right button {\n    cursor: inherit;\n}\n\n.gigya-login-providers-arrow-left.no-arrows,\n.gigya-login-providers-arrow-right.no-arrows {\n    display: none;\n}\n\n.gigya-login-providers-arrow-marker-floating-disabled {\n    visibility: hidden;\n}\n\n.gigya-login-providers-arrow-left div .gigya-login-providers-arrow-marker {\n    background-repeat: no-repeat;\n    float: right;\n    margin-right: 17px;\n}\n\n.gigya-login-providers-arrow-right div .gigya-login-providers-arrow-marker {\n    background-repeat: no-repeat;\n    float: left;\n    margin-left: 17px;\n}\n\n.gigya-login-providers-arrow-left.gigya-login-providers-arrow-marker-floating div .gigya-login-providers-arrow-marker {\n    height: 70px;\n    width: 42px;\n    padding: 0px;\n    margin: 0px;\n    position: relative;\n    float: left;\n    background-image: url('$scriptBase/paging/touch_button_left.png');\n}\n\n.gigya-login-providers-arrow-right.gigya-login-providers-arrow-marker-floating div .gigya-login-providers-arrow-marker {\n    background-repeat: no-repeat;\n    height: 70px;\n    width: 42px;\n    padding: 0px;\n    margin: 0px;\n    position: relative;\n    float: right;\n    background-image: url('$scriptBase/paging/touch_button_right.png');\n}\n\n.gigya-login-providers-arrow-left.gigya-login-providers-arrow-marker-arrows div .gigya-login-providers-arrow-marker {\n    height: 14px;\n    width: 8px;\n    background-image: url('$scriptBase/paging/navigation_arrow_left.png');\n    margin-right: 5px;\n}\n\n.gigya-login-providers-arrow-right.gigya-login-providers-arrow-marker-arrows div .gigya-login-providers-arrow-marker {\n    height: 14px;\n    width: 8px;\n    background-image: url('$scriptBase/paging/navigation_arrow_right.png');\n    margin-left: 5px;\n}\n\n.gigya-login-providers-arrow-left.gigya-login-providers-arrow-marker-arrows.gigya-login-providers-arrow-disabled div .gigya-login-providers-arrow-marker {\n    height: 14px;\n    width: 8px;\n    background-image: url('$scriptBase/paging/navigation_arrow_left_disabled.png');\n}\n\n.gigya-login-providers-arrow-right.gigya-login-providers-arrow-marker-arrows.gigya-login-providers-arrow-disabled div .gigya-login-providers-arrow-marker {\n    height: 14px;\n    width: 8px;\n    background-image: url('$scriptBase/paging/navigation_arrow_right_disabled.png');\n}\n\n.gigya-login-providers-arrow-left.gigya-login-providers-arrow-marker-newArrows div .gigya-login-providers-arrow-marker {\n    height: 14px;\n    width: 8px;\n    background-image: url('$scriptBase/paging/navigation_arrow_left.png');\n}\n\n.gigya-login-providers-arrow-right.gigya-login-providers-arrow-marker-newArrows div .gigya-login-providers-arrow-marker {\n    height: 14px;\n    width: 8px;\n    background-image: url('$scriptBase/paging/navigation_arrow_right.png');\n}\n\n.gigya-login-providers-arrow-right.gigya-login-providers-arrow-marker-newArrows.gigya-login-providers-arrow-disabled div .gigya-login-providers-arrow-marker {\n    height: 14px;\n    width: 8px;\n    background-image: url('$scriptBase/paging/navigation_arrow_right_disabled.png');\n}\n\n.gigya-login-providers-arrow-left.gigya-login-providers-arrow-marker-newArrows.gigya-login-providers-arrow-disabled div .gigya-login-providers-arrow-marker {\n    height: 14px;\n    width: 8px;\n    background-image: url('$scriptBase/paging/navigation_arrow_left_disabled.png');\n}\n\n.gigya-login-providers-arrow-left.gigya-login-providers-arrow-disabled,\n.gigya-login-providers-arrow-right.gigya-login-providers-arrow-disabled {\n    cursor: default;\n}\n\n.gigya-login-header {\n    display: block;\n    text-align: center;\n}\n\n.gigya-login-footer {\n    display: block;\n    clear: both;\n    height: 18px;\n    line-height: 18px;\n    overflow: hidden;\n    margin: 0 auto;\n    text-align: center;\n}\n\n\n.gigya-login-footer-terms {\n    line-height: normal;\n    cursor: pointer;\n    font-family: arial;\n    font-size: 11px;\n    color: #0086f1;\n    text-decoration: none;\n    font-weight: bold;\n}\n\n.gigya-login-providers {\n    width: 100%;\n    height: 100%;\n}\n\n.gigya-login-footer-social-by,\n.gigya-login-footer-social-by:hover,\n.gigya-login-footer-social-by:active {\n    text-decoration: none;\n    font-family: arial;\n    font-weight: bold;\n    font-size: 11px;\n    cursor: pointer;\n    color: #828282;\n}\n\n.gigya-login-footer-social-by img.gigya-logo {\n    width: 32px;\n    height: 9px;\n    border: none;\n}\n\n.gigya-login-footer-whatsthis {\n    width: 150px;\n    height: 50px;\n    background-color: #FFFFFF;\n    border: 1px solid #767676;\n    vertical-align: middle;\n    text-align: center;\n    visibility: hidden;\n    position: absolute;\n    padding: 10px;\n}\n\n.gigya-login-footer-whatsthis span {\n    line-height: normal;\n    font-family: arial;\n    font-size: 11px;\n    color: #262626;\n}\n\n.gigya-login-welcome-greeting {\n    line-height: normal;\n    font-family: arial;\n    font-size: 16px;\n    font-weight: bold;\n    color: #4C4C4C;\n    white-space: nowrap;\n    display: inline-block;\n}\n\n.gigya-login-welcome-bubble {\n    display: inline-block;\n    line-height: 16px;\n    margin-left: 5px;\n}\n\n.gigya-login-welcome-bubble-left,\n.gigya-login-welcome-bubble-right,\n.gigya-login-welcome-bubble-center {\n    display: inline-block;\n    height: 17px;\n    float: left;\n}\n\n.gigya-login-welcome-bubble-left {\n    background-image: url('$scriptBase/NotYou_Left.png');\n    width: 8px;\n}\n\n.gigya-login-welcome-bubble-right {\n    background-image: url('$scriptBase/NotYou_Right.png');\n    width: 4px;\n}\n\n.gigya-login-welcome-bubble-center {\n    background-image: url('$scriptBase/NotYou_Mid.png');\n    background-repeat: repeat-x;\n}\n\n.gigya-login-welcome-bubble-text {\n    cursor: pointer;\n    font-family: arial;\n    color: #0086f1;\n    font-size: 10px;\n    line-height: 17px;\n    font-weight: normal;\n}\n\n.gigya-login-welcome-signin-link {\n    white-space: nowrap;\n}\n\n.gigya-login-welcome-signin-link a:hover {\n    text-decoration: none;\n    color: #0086f1;\n}\n\n.gigya-login-footer-divider {\n    line-height: normal;\n    font-family: arial;\n    font-size: 11px;\n    color: #828282;\n    cursor: default;\n    padding: 0 5px;\n}\n\n.gigya-login-footer-edit-link {\n    line-height: normal;\n    cursor: pointer;\n    font-family: arial;\n    color: #0086f1;\n    text-decoration: none;\n    font-size: 11px;\n}\n\n.tabbing-button{\n    font-size: 0px;\n    border: none;\n    padding: 0;\n    background-color: transparent;\n    cursor: pointer;\n    display: inline-block;\n}\n.tabbing-button.gigya-provider-connected {\n    cursor: default;\n}\n.tabbing-button.gigya-provider-connected:focus {\n    outline: none;\n}\n", ""]);
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

/***/ "../node_modules/lodash.throttle/index.js":
/*!************************************************!*\
  !*** ../node_modules/lodash.throttle/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

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

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


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

/***/ "./src/socialize/Gigya.Js.Login2/app/ButtonStyles.ts":
/*!***********************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/ButtonStyles.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonStyles = {
    fulllogocolored: {
        ratio: 2.6,
        base: 'FullLogoColored/',
        ext: '.png',
        noConnected: true,
        minSize: 15,
        maxSize: 65,
    },
    fulllogo: {
        ratio: 2.6,
        base: 'FullLogo/',
        ext: '.png',
        noConnected: true,
        minSize: 15,
        maxSize: 65,
    },
    signinwith: {
        ratio: 7.05,
        base: 'SignInWith/',
        ext: '.png',
        noLastLogin: true,
        noConnected: true,
        minSize: 20,
        maxSize: 60,
    },
    standard: {
        ratio: 1,
        base: '',
        ext: '.png',
        minSize: 15,
        maxSize: 65,
    },
};


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/Consts.ts":
/*!*****************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/Consts.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.PROVIDER_CLICK_THROTTLE = 3000;


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/ContainerBase.ts":
/*!************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/ContainerBase.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var ContainerBase = /** @class */ (function () {
    function ContainerBase() {
    }
    ContainerBase.prototype.getChildByCssClass = function (htmlElement, selector) {
        var selection = window.gigya.utils.DOM.getElementsByClass(htmlElement, selector);
        if (selection.length)
            return selection[0];
        return null;
    };
    return ContainerBase;
}());
exports.ContainerBase = ContainerBase;


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/FooterContainer.ts":
/*!**************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/FooterContainer.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var LoginPlugin_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/LoginPlugin */ "./src/socialize/Gigya.Js.Login2/app/LoginPlugin.ts");
var FooterContainer = /** @class */ (function () {
    function FooterContainer(plugin, gridSize) {
        this.plugin = plugin;
        this.gridSize = gridSize;
        this.template = plugin.getTemplates().footer;
        this.element = this.plugin.createElementFromHTMLString(this.template);
    }
    FooterContainer.prototype.getHtmlElement = function () {
        var _this = this;
        var footerOptions = new Array();
        var lastOption;
        var partHtml;
        var divider = this.plugin.getTemplates().footerDivider;
        if (this.plugin.showEdit) {
            partHtml = window.gigya.utils.templates.fill(this.plugin.getTemplates().footerEdit, {
                edit: this.plugin.getText('edit'),
            });
            if (footerOptions.length)
                lastOption += divider + partHtml;
            else
                lastOption = partHtml;
            footerOptions.unshift(lastOption);
        }
        if (this.plugin.showTerms) {
            partHtml = window.gigya.utils.templates.fill(this.plugin.getTemplates().footerTerms, {
                terms: this.plugin.getText('terms'),
            });
            if (footerOptions.length)
                lastOption += divider + partHtml;
            else
                lastOption = partHtml;
            footerOptions.unshift(lastOption);
        }
        if (footerOptions.length) {
            var selectedOption = '';
            window.gigya.utils.array.some(footerOptions, function (option) {
                option = '<span>' + option + '</span>';
                var size = window.gigya.utils.DOM.getHTMLSize(option, _this.plugin.uiContainer);
                if (size.w <= _this.gridSize.totalWidthIncludingPager) {
                    selectedOption = option;
                    return true;
                }
                return false;
            });
            if (selectedOption) {
                var footerElement = this.plugin.createElementFromHTMLString(selectedOption);
                this.element.appendChild(footerElement);
                if (this.plugin.showEdit) {
                    var editElement = window.gigya.utils.DOM.getElementsByClass(footerElement, 'gigya-login-footer-edit-link')[0];
                    window.gigya.utils.DOM.addEventListener(editElement, 'click', function () {
                        // Adding the Event to open the edit connections dialog.
                        var params = window.gigya.utils.object.cloneParamsForPlugin(_this.plugin.params);
                        delete params.containerID;
                        delete params.width;
                        delete params.height;
                        window.gigya.socialize.showEditConnectionsUI(params);
                    });
                }
            }
        }
        return this.element;
    };
    FooterContainer.prototype.setShowWhatsThis = function (elm) {
        if (this.plugin.params.showWhatsThis && navigator.userAgent.toLowerCase().indexOf('iphone') == -1) {
            var containerDimensions = this.plugin.getContainerDimensions();
            var whatsThisText;
            if (this.plugin.params.whatsThisText) {
                whatsThisText = this.plugin.params.whatsThisText;
            }
            if (!whatsThisText) {
                if (this.plugin.pluginMode === LoginPlugin_1.PluginMode.Login) {
                    whatsThisText = this.plugin.getText('you_can_use_your_account_from_one_of_these_services_to_sign_into_the_site');
                }
                else {
                    whatsThisText = this.plugin.getText('add_more_connections_to_your_account');
                }
            }
            var whatsThisHtml = window.gigya.utils.templates.fill(this.plugin.getTemplates().footerBrandWhatIsThis, {
                whatsthistext: window.gigya.utils.sanitize.sanitizeHTML(whatsThisText),
            });
            // Creating The Element
            var whatsThisElmnent = this.plugin.createElementFromHTMLString(whatsThisHtml);
            this.plugin.uiContainer.appendChild(whatsThisElmnent);
            // Caclulate The Position Of The Control
            var pos = window.gigya.global._GetElementPos(this.plugin.uiContainer);
            whatsThisElmnent.style.zIndex = window.gigya.utils.DOM.getNextZIndex().toString();
            window.gigya.utils.DOM.addEventListener(elm, 'mouseover', function () {
                whatsThisElmnent.style.visibility = 'visible';
            });
            window.gigya.utils.DOM.addEventListener(elm, 'mouseout', function () {
                whatsThisElmnent.style.visibility = 'hidden';
            });
        }
    };
    return FooterContainer;
}());
exports.FooterContainer = FooterContainer;


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/Interfaces.ts":
/*!*********************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/Interfaces.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/Login2Resources0.ts":
/*!***************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/Login2Resources0.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.arrow = __webpack_require__(/*! ./templates/arrow.html */ "./src/socialize/Gigya.Js.Login2/app/templates/arrow.html");
exports.footer = __webpack_require__(/*! ./templates/footer.html */ "./src/socialize/Gigya.Js.Login2/app/templates/footer.html");
exports.footerBrandLong = __webpack_require__(/*! ./templates/footerBrandLong.html */ "./src/socialize/Gigya.Js.Login2/app/templates/footerBrandLong.html");
exports.footerBrandShort = __webpack_require__(/*! ./templates/footerBrandShort.html */ "./src/socialize/Gigya.Js.Login2/app/templates/footerBrandShort.html");
exports.footerBrandWhatIsThis = __webpack_require__(/*! ./templates/footerBrandWhatIsThis.html */ "./src/socialize/Gigya.Js.Login2/app/templates/footerBrandWhatIsThis.html");
exports.footerDivider = __webpack_require__(/*! ./templates/footerDivider.html */ "./src/socialize/Gigya.Js.Login2/app/templates/footerDivider.html");
exports.footerEdit = __webpack_require__(/*! ./templates/footerEdit.html */ "./src/socialize/Gigya.Js.Login2/app/templates/footerEdit.html");
exports.footerTerms = __webpack_require__(/*! ./templates/footerTerms.html */ "./src/socialize/Gigya.Js.Login2/app/templates/footerTerms.html");
exports.header = __webpack_require__(/*! ./templates/header.html */ "./src/socialize/Gigya.Js.Login2/app/templates/header.html");
exports.login = __webpack_require__(/*! ./templates/login.html */ "./src/socialize/Gigya.Js.Login2/app/templates/login.html");
exports.providerImage = __webpack_require__(/*! ./templates/providerImage.html */ "./src/socialize/Gigya.Js.Login2/app/templates/providerImage.html");
exports.uiContainer = __webpack_require__(/*! ./templates/uiContainer.html */ "./src/socialize/Gigya.Js.Login2/app/templates/uiContainer.html");
exports.welcome = __webpack_require__(/*! ./templates/welcome.html */ "./src/socialize/Gigya.Js.Login2/app/templates/welcome.html");
exports.welcomeBubble = __webpack_require__(/*! ./templates/welcomeBubble.html */ "./src/socialize/Gigya.Js.Login2/app/templates/welcomeBubble.html");
exports.welcomeGreeting = __webpack_require__(/*! ./templates/welcomeGreeting.html */ "./src/socialize/Gigya.Js.Login2/app/templates/welcomeGreeting.html");
exports.welcomeSignInLink = __webpack_require__(/*! ./templates/welcomeSignInLink.html */ "./src/socialize/Gigya.Js.Login2/app/templates/welcomeSignInLink.html");


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/Login2Resources1.ts":
/*!***************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/Login2Resources1.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ie8patch = __webpack_require__(/*! ./css/ie8patch.css */ "./src/socialize/Gigya.Js.Login2/app/css/ie8patch.css");
exports.iePatch = __webpack_require__(/*! ./css/iePatch.css */ "./src/socialize/Gigya.Js.Login2/app/css/iePatch.css");
exports.main = __webpack_require__(/*! ./css/main.css */ "./src/socialize/Gigya.Js.Login2/app/css/main.css");


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/LoginContainer.ts":
/*!*************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/LoginContainer.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var ContainerBase_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/ContainerBase */ "./src/socialize/Gigya.Js.Login2/app/ContainerBase.ts");
var LoginPlugin_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/LoginPlugin */ "./src/socialize/Gigya.Js.Login2/app/LoginPlugin.ts");
var Utils_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/Utils */ "./src/socialize/Gigya.Js.Login2/app/Utils.ts");
var _throttle = __webpack_require__(/*! lodash.throttle */ "../node_modules/lodash.throttle/index.js");
var Consts_1 = __webpack_require__(/*! ./Consts */ "./src/socialize/Gigya.Js.Login2/app/Consts.ts");
var LoginContainer = /** @class */ (function (_super) {
    tslib_1.__extends(LoginContainer, _super);
    function LoginContainer(plugin, gridSize) {
        var _this = _super.call(this) || this;
        _this.plugin = plugin;
        _this.gridSize = gridSize;
        _this.ElementsSelector = {
            main: 'gigya-login-providers',
            container: 'gigya-login-providers-container',
            arrowLeft: 'gigya-login-providers-arrow-left',
            arrowRight: 'gigya-login-providers-arrow-right',
            providersContainer: 'gigya-login-providers-list-container',
            connectedProviderClass: 'gigya-provider-connected',
            providerNameAttr: 'data-gigya-provider'
        };
        _this.template = _this.plugin.getTemplates().login;
        return _this;
    }
    LoginContainer.prototype.getHtmlElement = function () {
        // init the templates:
        this._mainElement = this.plugin.createElementFromHTMLString(this.template);
        this._containerElement = this.getChildByCssClass(this._mainElement, this.ElementsSelector.container);
        this._providersContainer = this.getChildByCssClass(this._containerElement, this.ElementsSelector.providersContainer);
        // Creating The HTML Elements
        this._loginContainers = this.createContainers();
        this._containerElement.style.width = '100%'; //this.gridSize.totalWidthIncludingPager + 'px';
        this._providersContainer.style.width = this.gridSize.width + 'px';
        for (var i = 0; i < this._loginContainers.length; i++) {
            this._providersContainer.appendChild(this._loginContainers[i]);
        }
        // Attaching the inner Containers (Pagged Provider Data)
        this.setPaging(this._loginContainers.length);
        // Setting Behaviuer
        // Attach Events
        this.attachEvents();
        return this._mainElement;
    };
    LoginContainer.prototype.setPaging = function (numOfContainers) {
        var shouldAddPagingArrows = numOfContainers > 1;
        this._leftArrow = this.getChildByCssClass(this._containerElement, this.ElementsSelector.arrowLeft);
        this._rightArrow = this.getChildByCssClass(this._containerElement, this.ElementsSelector.arrowRight);
        // adding paggination arrows.
        if (shouldAddPagingArrows) {
            window.gigya.utils.DOM.addClassToElement(this._leftArrow, 'gigya-login-providers-arrow-disabled');
            if (this.plugin.pagingButtonStyle.getStyleName(this.plugin) == 'floating') {
                window.gigya.utils.DOM.addClassToElement(this._leftArrow, 'gigya-login-providers-arrow-marker-floating-disabled');
            }
            var arrowClass = this.plugin.pagingButtonStyle.getStyleClass(this.plugin);
            window.gigya.utils.DOM.addClassToElement(this._leftArrow, arrowClass);
            window.gigya.utils.DOM.addClassToElement(this._rightArrow, arrowClass);
            var arrowLeftHtmlElement = Utils_1.Utils.createElementFromHTMLString(window.gigya.utils.templates.fill(this.plugin.getTemplates().arrow, {
                tabindex: this.plugin.params.tabIndex || '-1',
                label: 'Previous Providers',
            }));
            var arrowRightHtmlElement = Utils_1.Utils.createElementFromHTMLString(window.gigya.utils.templates.fill(this.plugin.getTemplates().arrow, {
                tabindex: this.plugin.params.tabIndex || '-1',
                label: 'More Providers',
            }));
            this._leftArrow.appendChild(arrowLeftHtmlElement);
            this._rightArrow.appendChild(arrowRightHtmlElement);
            this.setNavigationArrowState(LoginPlugin_1.NavigationDirection.Prev, true); // disable the left (next) arrow on start
        }
        else {
            // make arrows invisible
            window.gigya.utils.DOM.addClassToElement(this._leftArrow, 'no-arrows');
            window.gigya.utils.DOM.addClassToElement(this._rightArrow, 'no-arrows');
            // make the container as wide as the providers container, so it'll center properly.
            this._containerElement.style.width = this._providersContainer.style.width;
        }
        // set the first container as the default showing container
        if (this._loginContainers[0])
            this._loginContainers[0].setAttribute('class', 'gigya-active');
    };
    LoginContainer.prototype.expandInContainerAfterRender = function () {
        var arrowParentWidth = Math.ceil((this._containerElement.offsetWidth - this._providersContainer.offsetWidth) / 2);
        if (arrowParentWidth < 0)
            arrowParentWidth = 0;
        var arrowParentWidthInPx = arrowParentWidth + 'px';
        // So arrow parent container will expand in its container.
        this._leftArrow.style.width = this._rightArrow.style.width = arrowParentWidthInPx;
        // So arrow image will overflow if needed.
        this._leftArrow.style.maxWidth = this._rightArrow.style.maxWidth = arrowParentWidthInPx;
        // setting the main element for starting height, so content will stay centered while paging (minimum is one button's height).
        this._mainElement.style.height =
            Math.max(this._containerElement.offsetHeight, this.plugin.buttonHeight + 2 * this.plugin.pluginConfig.rowSpacing) + 'px';
    };
    LoginContainer.prototype.createContainers = function () {
        var containers = [];
        // Array of Array of providers for each
        var providersGroups = this.getProvidersGroups(this.gridSize);
        // Iterating over the providers and build the html of the containers
        for (var i = 0; i < providersGroups.length; i++) {
            // set reference to the current container
            var providerCells = this.getProvidersCells(providersGroups[i]);
            // split the cells into rows
            var curContainerRows = this.getGroupProvidersRows(providerCells, this.gridSize.rows, this.gridSize.columns);
            // Setting The Container of the Rows
            var pContainer = this.createElemnetBlock('div', {
                class: 'gigya-login-providers-list',
            });
            // the List Item For The Navigation - Wrapper Container
            var pContainerListItem = document.createElement('div');
            for (var r = 0; r < curContainerRows.length; r++) {
                var rowElement = this.createElemnetBlock('div', {
                    class: 'gigya-login-provider-row',
                });
                for (var rItem = 0; rItem < curContainerRows[r].length; rItem++) {
                    var providerSpan = curContainerRows[r][rItem];
                    rowElement.appendChild(providerSpan);
                    // this line is in order to display the right space between the rows.
                    rowElement.style.height = providerSpan.style.height;
                    // the following two lines are in order to make sure the last providor in row doesn't have margine.
                    var lastSpanInRow = curContainerRows[r][curContainerRows[r].length - 1];
                    lastSpanInRow.style['margin-right'] = '0';
                }
                pContainer.appendChild(rowElement);
            }
            pContainerListItem.appendChild(pContainer);
            containers.push(pContainerListItem);
        }
        return containers;
    };
    LoginContainer.prototype.attachEvents = function () {
        var _this = this;
        var hasPaging = this._loginContainers.length > 1;
        // Navigation Events
        if (hasPaging) {
            var arrowLeft = this.getChildByCssClass(this._containerElement, this.ElementsSelector.arrowLeft);
            var arrowRight = this.getChildByCssClass(this._containerElement, this.ElementsSelector.arrowRight);
            window.gigya.utils.DOM.addEventListener(arrowRight, 'click', function (e) {
                _this.changeNavigationState(LoginPlugin_1.NavigationDirection.Next);
                window.gigya.utils.DOM.disableDefaultEventHandling(e);
            });
            window.gigya.utils.DOM.addEventListener(arrowLeft, 'click', function (e) {
                _this.changeNavigationState(LoginPlugin_1.NavigationDirection.Prev);
                window.gigya.utils.DOM.disableDefaultEventHandling(e);
            });
        }
        // Providers Buttons Events
        var providersButtons = window.gigya.utils.DOM.getElementsByClass(this.getChildByCssClass(this._containerElement, this.ElementsSelector.providersContainer), 'gigya-login-provider');
        var clickEventHandler = _throttle(function (e) {
            _this.plugin.onProviderClickHandler(e);
        }, Consts_1.PROVIDER_CLICK_THROTTLE, { 'trailing': false });
        for (var i = 0; i < providersButtons.length; i++) {
            var btnWrapper = providersButtons[i];
            var providerName = btnWrapper.getAttribute(this.ElementsSelector.providerNameAttr);
            var provider = window.gigya._.providers.getProviderByName(providerName, this.plugin.providers);
            var pIdentity = this.plugin.getIdentityInfoForProvider(provider);
            if (this.isConnectionCompleted(pIdentity)) {
                window.gigya.utils.DOM.addClassToElement(btnWrapper.querySelector('button.tabbing-button'), this.ElementsSelector.connectedProviderClass);
            }
            else {
                window.gigya.utils.DOM.addEventListener(btnWrapper, 'click', clickEventHandler);
            }
        }
    };
    /* -------------------------------------------------------------------------------------------------------------------- */
    LoginContainer.prototype.getProvidersCells = function (providersGroup) {
        var providerCells = [];
        // Iterating over all the providers in the current container
        for (var j = 0; j < providersGroup.length; j++) {
            // set reference to the current provider
            var currentProvider = providersGroup[j];
            // Find Indetity.
            var providerIdentityInformation = this.plugin.getIdentityInfoForProvider(currentProvider);
            var providerImage = this.getProviderImage(currentProvider, providerIdentityInformation);
            var providerCell = this.createElemnetBlock('span', {
                'data-gigya-provider': currentProvider.name,
                style: [
                    'width:',
                    this.plugin.buttonWidth,
                    'px;',
                    'height:',
                    this.plugin.buttonHeight,
                    'px;',
                    'margin-right:',
                    this.plugin.pluginConfig.rowSpacing,
                    'px;',
                ].join(''),
                class: 'gigya-login-provider',
                gigid: currentProvider.name,
            });
            var socialProviderButton = this.plugin.createElementFromHTMLString(providerImage);
            socialProviderButton.setAttribute('tabindex', this.plugin.params.tabIndex || '-1');
            // The tooltip needs to be on the focusable element (in this case, the button) or screen-readers will read it twice.
            if (this.plugin.showTooltips) {
                socialProviderButton.setAttribute('title', currentProvider.displayName);
            }
            var firstSocialButtonId = currentProvider.displayName + '_btn';
            socialProviderButton.setAttribute('id', firstSocialButtonId);
            socialProviderButton.setAttribute('aria-labelledby', "social-buttons-login-caption " + firstSocialButtonId);
            providerCell.appendChild(socialProviderButton);
            providerCells.push(providerCell);
        }
        return providerCells;
    };
    LoginContainer.prototype.getProviderImage = function (provider, providerIdentityInformation) {
        var isRatina = window.devicePixelRatio > 1 ? true : false;
        var oButton = provider.buttonData;
        var imgId = (provider.imgName ? provider.imgName : provider.name) + '-';
        // US: 33343 - LinkedIn's trade mark for retina display
        if (isRatina && provider.name == 'linkedin' && (this.plugin.params.buttonSize >= 15 && this.plugin.params.buttonSize <= 25)) {
            var conventionName = provider.name + '_' + this.plugin.params.buttonSize * 2 + (provider.name == this.plugin.lastLoginProvider ? '_LastLogin' : '') + '.png';
            var imageUrl = this.plugin.imageBase + "/" + this.plugin.stylePreset.base + "/" + conventionName;
            return window.gigya.utils.templates.fill(this.plugin.getTemplates().providerImage, {
                buttonWidth: this.plugin.buttonWidth,
                buttonHeight: this.plugin.buttonHeight,
                imageUrl: imageUrl,
            });
        }
        // OpenID || Saml || oidc
        if (provider.isCustomProvider && oButton && oButton.iconURL) {
            var iconURL = oButton.iconURL;
            if (this.isConnectionCompleted(providerIdentityInformation)) {
                if (oButton.connectedIconURL)
                    iconURL = oButton.connectedIconURL;
            }
            else {
                var providerName = provider.name || '';
                var lastLoginProvider = this.plugin.lastLoginProvider || '';
                if (providerName.toLowerCase() == lastLoginProvider.toLowerCase())
                    iconURL = oButton.lastLoginIconURL;
            }
            if (iconURL)
                return window.gigya.utils.templates.fill(this.plugin.getTemplates().providerImage, {
                    buttonWidth: this.plugin.buttonWidth,
                    buttonHeight: this.plugin.buttonHeight,
                    imageUrl: iconURL,
                    provider: provider
                });
        }
        else {
            // Toggle 'Connected' Mode Vs 'Last Login'
            if (this.isConnectionCompleted(providerIdentityInformation)) {
                imgId += 'connected_';
            }
            else if (this.plugin.lastLoginIndication == LoginPlugin_1.LastLoginIndication.border &&
                provider.name == this.plugin.lastLoginProvider &&
                !this.plugin.stylePreset.noLastLogin) {
                imgId += 'lastlogin_';
            }
            return this.plugin.spriteRenderer.loginIcons.getHTML(imgId, false, this.plugin.stylePreset.dontUseSprites, undefined, provider.displayName);
        }
        return ''; // No image to display
    };
    LoginContainer.prototype.isConnectionCompleted = function (providerIdentity) {
        return this.plugin.pluginMode === LoginPlugin_1.PluginMode.AddConnection &&
            (providerIdentity.isConnected && providerIdentity.hasAllRequiredPermissions) &&
            !this.plugin.stylePreset.noConnected;
    };
    LoginContainer.prototype.getGroupProvidersRows = function (cells, rows, cols) {
        var groupRows = [];
        for (var i = 0; i < rows; i++) {
            var gRow = [];
            for (var j = 0; j < cols; j++) {
                var idx = i * cols + j;
                if (idx >= cells.length) {
                    break;
                }
                gRow.push(cells[idx]);
            }
            groupRows.push(gRow);
        }
        // Setting The Last Index Class Marker
        for (var i = 0; i < groupRows.length; i++) {
            var lastIdx = groupRows[i].length;
            if (lastIdx > 0) {
                window.gigya.utils.DOM.addClassToElement(groupRows[i][lastIdx - 1], 'gigya-login-provider-last');
            }
        }
        return groupRows;
    };
    LoginContainer.prototype.getProvidersGroups = function (gridSize) {
        var providersPerContainer = gridSize.rows * gridSize.columns;
        var numOfContainers = this.plugin.providers.length === 0 ? 0 : this.plugin.providers.length / providersPerContainer;
        if (!isFinite(numOfContainers)) {
            throw new Error('error: infinite loop.');
        }
        var providerContaniers = [];
        // Creating The Providers Contrainers:
        for (var i = 0; i < numOfContainers; i++) {
            var curContainer = [];
            for (var j = 0; j < providersPerContainer; j++) {
                var idx = i * providersPerContainer + j;
                if (idx >= this.plugin.providers.length)
                    break;
                curContainer.push(this.plugin.providers[idx]);
            }
            providerContaniers.push(curContainer);
        }
        return providerContaniers;
    };
    LoginContainer.prototype.createElemnetBlock = function (elementType, attributes, content) {
        var elm = document.createElement(elementType);
        for (var attribute in attributes) {
            elm.setAttribute(attribute, attributes[attribute]);
        }
        return elm;
    };
    /* -------------------------------------------------------------------------------------------------------------------- */
    LoginContainer.prototype.changeNavigationState = function (nDirection) {
        // set the direction of movment.
        var indexDirection = nDirection == LoginPlugin_1.NavigationDirection.Next ? 1 : -1;
        var curIndex = window.gigya.utils.array.firstIndex(this._loginContainers, function (listContainer) { return window.gigya.utils.DOM.isElementClass(listContainer, 'gigya-active'); });
        // find the requested target container index by the direction.
        var targetIndex = curIndex + indexDirection;
        var curContainer = window.gigya.utils.array.first(this._loginContainers, function (listContainer) { return window.gigya.utils.DOM.isElementClass(listContainer, 'gigya-active'); });
        // get a reference to the target container.
        var targetContainer = this._loginContainers[targetIndex];
        // check if the request for 'Next' or 'Prev' is available if we found the target container.
        if (targetContainer) {
            // set's the next container
            window.gigya.utils.DOM.removeClassFromElement(curContainer, 'gigya-active');
            window.gigya.utils.DOM.addClassToElement(targetContainer, 'gigya-active');
            // check if we have next and prev available after targetig the new container.
            var isLast = !this._loginContainers[targetIndex + 1];
            var isFirst = !this._loginContainers[targetIndex - 1];
            // setting the new state of the arrows.
            this.setNavigationArrowState(LoginPlugin_1.NavigationDirection.Next, isLast);
            this.setNavigationArrowState(LoginPlugin_1.NavigationDirection.Prev, isFirst);
            // set focus to first provider in new list
            targetContainer.querySelector('button').focus();
        }
    };
    LoginContainer.prototype.setNavigationArrowState = function (direction, disabled) {
        // setting the proper name of the direction for the image manipulating.
        var arrowDirection = direction == LoginPlugin_1.NavigationDirection.Next ? 'right' : 'left';
        // getting a reference for the arrow container.
        var arrowContainer = window.gigya.utils.DOM.getElementsByClass(this._containerElement, 'gigya-login-providers-arrow-' + arrowDirection)[0], arrow = arrowContainer.querySelector('.gigya-login-providers-arrow-marker');
        // switching the state of the button based on the disabled parameter.
        if (!disabled) {
            arrow.removeAttribute('disabled');
            window.gigya.utils.DOM.removeClassFromElement(arrowContainer, 'gigya-login-providers-arrow-disabled');
            if (this.plugin.pagingButtonStyle.getStyleName(this.plugin) == 'floating') {
                window.gigya.utils.DOM.removeClassFromElement(arrowContainer, 'gigya-login-providers-arrow-marker-floating-disabled');
            }
        }
        else {
            arrow.setAttribute('disabled', 'disabled');
            window.gigya.utils.DOM.addClassToElement(arrowContainer, 'gigya-login-providers-arrow-disabled');
            if (this.plugin.pagingButtonStyle.getStyleName(this.plugin) == 'floating') {
                window.gigya.utils.DOM.addClassToElement(arrowContainer, 'gigya-login-providers-arrow-marker-floating-disabled');
            }
        }
    };
    return LoginContainer;
}(ContainerBase_1.ContainerBase));
exports.LoginContainer = LoginContainer;


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/LoginPlugin.ts":
/*!**********************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/LoginPlugin.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var PagingStyles_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/PagingStyles */ "./src/socialize/Gigya.Js.Login2/app/PagingStyles.ts");
var ButtonStyles_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/ButtonStyles */ "./src/socialize/Gigya.Js.Login2/app/ButtonStyles.ts");
var PluginStyles_1 = __webpack_require__(/*! src/core/Gigya.Js.Plugin/app/PluginStyles */ "./src/core/Gigya.Js.Plugin/app/PluginStyles.ts");
var LoginContainer_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/LoginContainer */ "./src/socialize/Gigya.Js.Login2/app/LoginContainer.ts");
var WelcomeContainer_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/WelcomeContainer */ "./src/socialize/Gigya.Js.Login2/app/WelcomeContainer.ts");
var FooterContainer_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/FooterContainer */ "./src/socialize/Gigya.Js.Login2/app/FooterContainer.ts");
var NavigationDirection;
(function (NavigationDirection) {
    NavigationDirection[NavigationDirection["Next"] = 0] = "Next";
    NavigationDirection[NavigationDirection["Prev"] = 1] = "Prev";
})(NavigationDirection = exports.NavigationDirection || (exports.NavigationDirection = {}));
var LastLoginIndication;
(function (LastLoginIndication) {
    LastLoginIndication[LastLoginIndication["_undefined"] = 0] = "_undefined";
    LastLoginIndication[LastLoginIndication["none"] = 1] = "none";
    LastLoginIndication[LastLoginIndication["border"] = 2] = "border";
    LastLoginIndication[LastLoginIndication["welcome"] = 3] = "welcome";
})(LastLoginIndication = exports.LastLoginIndication || (exports.LastLoginIndication = {}));
var PluginMode;
(function (PluginMode) {
    PluginMode[PluginMode["_undefined"] = 0] = "_undefined";
    PluginMode[PluginMode["Login"] = 1] = "Login";
    PluginMode[PluginMode["AddConnection"] = 2] = "AddConnection";
    PluginMode[PluginMode["LinkAccount"] = 3] = "LinkAccount";
})(PluginMode = exports.PluginMode || (exports.PluginMode = {}));
var RenderingMode;
(function (RenderingMode) {
    RenderingMode[RenderingMode["Unknown"] = 0] = "Unknown";
    RenderingMode[RenderingMode["Login"] = 1] = "Login";
    RenderingMode[RenderingMode["Welcome"] = 2] = "Welcome";
    RenderingMode[RenderingMode["Footer"] = 3] = "Footer";
})(RenderingMode = exports.RenderingMode || (exports.RenderingMode = {}));
var BasePluginGlobal = window.gigya._.plugins.BasePlugin;
var LoginPlugin = /** @class */ (function (_super) {
    tslib_1.__extends(LoginPlugin, _super);
    function LoginPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
        _this.imageBase = window.gigya._.getCdnResource('/gs/i/HTMLLogin');
        _this.showEdit = false;
        _this.showWelcome = false; // need provider condition, see init sequence for toggaling the showWelcom flag
        _this.loginChangeEventHandler = function () { return _this.render(); };
        _this.pluginConfig = {
            arrowWidth: 16,
            floatingArrowWidth: 15,
            arrowHeight: 14,
            defaultlastLoginButtonSize: 30,
            defaultButtonSize: 30,
            defaultButtonSizeOnPopup: 35,
            headerHeight: 18,
            footerHeight: 18,
            rowSpacing: 5,
        };
        /* ------------------- Events ---------------------- */
        // We need the below method to maintain a reference to the correct this
        _this.onUserStateChange = function (event) { return _this.userStateChanged(event); };
        return _this;
    }
    // get the injection info based on the actual function being used for the plugin
    LoginPlugin.injectionInfo = function (uiApiInfo) {
        var info = window.gigya.utils.object.merge([
            uiApiInfo,
            {
                name: 'login_v2',
                jsName: 'gigya.services.socialize.plugins.login_v2',
            },
        ]);
        return info;
    };
    // get the config that match the current method
    LoginPlugin.prototype.getConfig = function () {
        var config = window.gigya.utils.object.merge([
            {
                requiredParams: [],
                hasMobileUI: false,
                allowModal: true,
                supportsResponsive: true,
                enableSizePolling: true,
            },
            LoginPlugin.InjectionInfoDefaultConfig[this.injectionInfo.methodName],
        ]);
        return config;
    };
    LoginPlugin.prototype.init = function (loadedCallback) {
        var _this = this;
        window.gigya.logger.info("login mode: " + this.params.UIMode);
        // Setting default values and parsing values into native values
        this.initParams();
        // init the container
        this.initUiContainer();
        // listen to global events
        this.registerToGlobalEvents();
        // css -  injecting the css into the page.
        var css = window.gigya.utils.templates.fill(this.getCss().main, { scriptBase: this.imageBase });
        window.gigya._.plugins.utils.css.addCss(css, this.params.cssPrefix);
        if (window.gigya.localInfo.isIE) {
            if (window.gigya.localInfo.isIE8 || window.gigya.localInfo.quirksMode)
                window.gigya._.plugins.utils.css.addCss(this.getCss().ie8patch, this.params.cssPrefix);
        }
        // Last Login Provider:
        this.lastLoginProvider = this.getLastLogin();
        // Facebook Suggest:
        this.facebookSuggestEnabled =
            this.params.autoDetectUserProviders &&
                this.params.autoDetectUserProviders.toLowerCase() == 'facebook' &&
                (!this.lastLoginProvider || this.lastLoginIndication != LastLoginIndication.welcome);
        // Getting The User Information And render the plugin.
        var afterUserResponse = function (response) {
            // Init The Providers
            _this.initProviders();
            // setting the request params for socialLogin when forceLinking activated
            _this.initForceLinkingParams();
            // Setting Up The Sprite Engine
            _this.initSpriteEngine();
            _this.user = response.user;
            _this.render();
            loadedCallback();
        };
        if (this.params._callGetUserInfoOnInitialRender)
            this.getUserInfo(afterUserResponse);
        else
            afterUserResponse({ user: null });
    };
    LoginPlugin.prototype.initForceLinkingParams = function () {
        var isForceLinking = this.params.UIMode === "LinkAccount" && this.params.conflictHandling === "fail";
        if (isForceLinking) {
            delete this.params.loginMode;
            delete this.params.regToken;
        }
    };
    LoginPlugin.prototype.initParams = function () {
        if (this.params._pluginCenterFix)
            this.pluginConfig.arrowWidth = 25; // According to the arrow's image width + its padding
        this.pagingButtonStyle = PagingStyles_1.PagingButtonStyles[this.params.pagingButtonStyle] || PagingStyles_1.PagingButtonStyles['arrows'];
        // TODO: transfer all defaults to InjectionInfoDefaultConfig and delete the code which checks for each param
        if (!this.params.enabledProviders)
            this.params.enabledProviders = '*';
        if (!this.params.buttonsStyle)
            this.params.buttonsStyle = 'standard';
        this.showTooltips = !window.gigya.utils.validation.isExplicitFalse(this.params.showTooltips);
        var width = '' + this.params.width;
        this.params.responsiveWidth = width.indexOf('%') > -1;
        this.params.widthNum = parseInt(width);
        this.params.heightNum = parseInt('' + this.params.height);
        // Setting The Button Size + Support in 'UIConfig' [ONLY IF THE 'buttonSize' NOT SET'S]
        if (!this.params.buttonSize && this.params.UIConfig) {
            // normalize the string, so Upper casing or client input will not effect the logic.
            this.params.UIConfig = this.params.UIConfig.toLowerCase();
            // trying to parse the xml
            var xmlElement = this.parseXML(this.params.UIConfig);
            var buttonSizeElement;
            if (xmlElement)
                buttonSizeElement = xmlElement.getElementsByTagName('snbuttons')[0];
            if (buttonSizeElement) {
                this.params.buttonSize = parseInt(buttonSizeElement.getAttribute('buttonsize'));
            }
            else {
                // setting The Defaults sizes if no button size found
                this.params.buttonSize = this.params.isPopup ? this.pluginConfig.defaultButtonSizeOnPopup : this.pluginConfig.defaultButtonSize; // TODO we need to make sure that the default sizes is always set, should this be set for the defaults even if no UIConfig is set
            }
        }
        // default button size
        if (!this.params.buttonSize) {
            this.params.buttonSize = 30;
        }
        if (this.params.buttonSize)
            this.params.buttonSize = parseInt('' + this.params.buttonSize);
        // Setting the booleans
        this.params.showTermsLink = this.isTrue(this.params.showTermsLink);
        // Setting the private flags after initializing the booleans.
        this.showTerms = this.params.showTermsLink && this.params.showTermsLink !== 'false';
        this.isFooterEnabled = this.showTerms || this.params.UIMode == 'AddConnection';
        this.isHeaderEnabled = Boolean(this.params.headerText);
        // init the enums
        //Setting The Last Indecation Login Parameter
        if (!this.params.lastLoginIndication)
            this.params.lastLoginIndication = 'border';
        this.lastLoginIndication = LastLoginIndication[String(this.params.lastLoginIndication).toLowerCase()] || LastLoginIndication.border;
        // Setting The plugin mode 'addConnectionUI, showLoginUI'
        this.pluginMode = PluginMode[this.params.UIMode] || PluginMode.Login;
        this.stylePreset = ButtonStyles_1.ButtonStyles[String(this.params.buttonsStyle).toLowerCase()] || ButtonStyles_1.ButtonStyles['standard'];
        this.buttonHeight = parseInt(String(this.params.buttonSize));
        this.buttonWidth = Math.ceil(this.buttonHeight * this.stylePreset.ratio);
    };
    LoginPlugin.prototype.initUiContainer = function () {
        if (this.getPluginStyle() != PluginStyles_1.PluginStyle.legacy || !this.isModal)
            this.container.innerHTML = '';
        this.uiContainer = this.createElementFromHTMLString(window.gigya.utils.templates.fill(this.getTemplates().uiContainer, { containerID: this.params.containerID }));
        this.uiContainer.style.height = this.params.height + 'px';
        this.uiContainer.style.width = this.params.widthNum + (this.params.responsiveWidth ? '%' : 'px');
        if (this.isModal) {
            this.uiContainer.style.paddingTop = '20px';
        }
        this.container.appendChild(this.uiContainer);
    };
    LoginPlugin.prototype.initProviders = function () {
        var _this = this;
        if (this.pluginMode === PluginMode.Login && !this.params.requiredCapabilities) {
            this.params.requiredCapabilities = 'login';
        }
        if (this.pluginMode === PluginMode.AddConnection && !this.params.requiredCapabilities) {
            this.params.requiredCapabilities = 'friends';
        }
        // Setting The Default Providers Configuration []
        // init the providers list
        this.providers = window.gigya.global.resolveProviders(this.params.enabledProviders, this.params.disabledProviders, this.params.requiredCapabilities);
        // if Last Login indecator is 'Border', set the last login provider at 0 index.
        if (this.pluginMode === PluginMode.AddConnection && this.lastLoginIndication == LastLoginIndication.border) {
            for (var i = 0; i < this.providers.length; i++) {
                var provider = this.providers[i];
                if (this.providers[i].name == this.lastLoginProvider) {
                    this.providers.splice(i, 1);
                    this.providers.unshift(provider);
                    break;
                }
            }
        }
        // set's the welcome screen indecation.
        // Checking of we are connected, and if we have a 'lastLoginProvider' info from the cookie
        // and the last login indecation is set to welcom screen
        if (this.pluginMode === PluginMode.Login && this.lastLoginProvider && this.lastLoginIndication == LastLoginIndication.welcome) {
            // checking if the last login provider is on the providers list
            for (var i = 0; i < this.providers.length; i++) {
                if (this.providers[i].name == this.lastLoginProvider) {
                    this.lastLoginProviderObject = this.providers[i];
                    this.showWelcome = true;
                    break;
                }
            }
        }
        // Custome Buttons And Providers:
        var customButtons = [];
        switch (this.pluginMode) {
            case PluginMode.AddConnection: // AddConnection doesn't support multiple custom buttons for now
                if (this.params.customButton)
                    customButtons = [this.params.customButton];
                else if (this.params.customButtons && this.params.customButtons.length > 0)
                    customButtons = [this.params.customButtons[0]];
                break;
            default:
                customButtons = this.params.customButtons || [];
                if (this.params.customButton)
                    customButtons.push(this.params.customButton);
                break;
        }
        window.gigya.utils.array.forEach(customButtons, function (oButton) {
            if (oButton) {
                _this.addCustomButton(oButton);
            }
        });
        if (this.providers.length == 0 && !this.facebookSuggestEnabled) {
            this.dispatchErrorFromResponse({
                status: 'ERR_NO_PROVIDERS',
                statusMessage: 'No providers',
                errorCode: 400100,
                errorMessage: 'No providers',
            });
            return;
        }
        var arConnectedProviders = [];
        for (var i = 0; i < this.providers.length; i++) {
            var pIdentity = this.getIdentityInfoForProvider(this.providers[i]);
            var provider = this.providers[i];
            if (pIdentity.isConnected) {
                arConnectedProviders.push(provider);
            }
        }
        // Re Arrenging the connected icons on the providers list.
        this.providers = arConnectedProviders.concat(window.gigya.socialize.hideProvidersByName(this.providers, arConnectedProviders.join(',')));
    };
    LoginPlugin.prototype.addCustomButton = function (oButton) {
        var pCustomProvider;
        var providerType = !oButton.type ? 'eventonly' : oButton.type.toLowerCase();
        var providerId;
        var providerName;
        switch (providerType) {
            case 'oidc':
                providerId = 10001;
                providerName = oButton.opName;
                break;
            case 'saml':
                providerId = 4122;
                providerName = oButton.idpName;
                break;
            case 'eventonly':
                providerId = 4121;
                providerType = 'openID';
                // #48807 - Ensure each eventonly button has a unique name.
                // The provider length is incremented for each customButton so this will be a unique number for this instance.
                providerName = String(this.providers.length);
                break;
            default:
                console.warn('gigya: invalid custom button type');
                return;
        }
        pCustomProvider = window.gigya.utils.object.clone(window.gigya.socialize._getProviderByID(providerId));
        pCustomProvider.imgName = providerType;
        pCustomProvider.displayName = oButton.providerName;
        pCustomProvider.buttonData = oButton;
        pCustomProvider.isCustomProvider = true;
        if (providerName) {
            pCustomProvider.name = providerType + "-" + providerName;
        }
        if (!oButton.providerName) {
            oButton.providerName = '';
        }
        if (this.shouldAddCustomProvider(pCustomProvider)) {
            this.providers.splice(oButton.position && oButton.position > 1 ? oButton.position - 1 : 0, 0, pCustomProvider);
        }
    };
    LoginPlugin.prototype.shouldAddCustomProvider = function (customProvider) {
        if (!customProvider)
            return false;
        var eProviders = window.gigya.utils.array.getArrayFromString(this.params.enabledProviders, ',', true);
        switch (this.pluginMode) {
            // #67795 conflicting providers list contains custom buttons
            case PluginMode.LinkAccount:
                return customProvider.name && window.gigya.utils.array.some(eProviders, function (p) { return p.toLowerCase() === customProvider.name.toLowerCase(); });
            default:
                return true;
        }
    };
    LoginPlugin.prototype.initSpriteEngine = function () {
        var spriteProviders = [], iconSize = this.params.buttonSize;
        for (var i = 0; i < this.providers.length; i++) {
            if (this.providers[i].toString() === 'apple' && this.params.buttonTheme === 'light') {
                spriteProviders.push(this.providers[i].toString().split('-')[0] + '_light');
                this.providers[i].imgName = this.providers[i].toString().split('-')[0] + '_light';
            }
            else {
                spriteProviders.push(this.providers[i].toString().split('-')[0]);
            }
        }
        if (typeof iconSize == 'undefined' || isNaN(iconSize)) {
            iconSize = this.params.isPopup ? this.pluginConfig.defaultButtonSizeOnPopup : this.pluginConfig.defaultButtonSize;
        }
        var imgIconSize = Math.floor(iconSize / 5) * 5;
        if (imgIconSize < this.stylePreset.minSize) {
            imgIconSize = this.stylePreset.minSize;
        }
        if (imgIconSize > this.stylePreset.maxSize) {
            imgIconSize = this.stylePreset.maxSize;
        }
        var btnImgW = Math.round(iconSize * this.stylePreset.ratio);
        var btnImgH = iconSize;
        // supporting buttons states.
        // different states are available for the buttons: normal (no state), connected and last login
        // in the future we'll want to specify the requested state
        // no state at the moment..
        var states = '[]';
        // set the Sprite Render Engine
        this.spriteRenderer = window.gigya.global.getSpriteRenderers({
            loginIcons: {
                path: '/HTMLLogin/' +
                    this.stylePreset.base +
                    '[' +
                    spriteProviders.join(',') +
                    ']_' +
                    states +
                    imgIconSize * this.pixelRatio +
                    this.stylePreset.ext,
                w: btnImgW,
                h: btnImgH,
                pixelRatio: this.pixelRatio,
            },
        });
    };
    /* ------------------ Rendering --------------*/
    LoginPlugin.prototype.resizePlugin = function (old, curr) {
        // TODO defing a formula for 'isMuteted' to determind if to rerender...
        this.lastPolledWidth = curr.width;
        this.render();
    };
    LoginPlugin.prototype.render = function () {
        var gridSize;
        // Resetting The Inner Container.
        this.uiContainer.innerHTML = '';
        if (this.isHeaderEnabled) {
            var header = this.createElementFromHTMLString(window.gigya.utils.templates.fill(this.getTemplates().header, {
                headerText: this.params.headerText,
            }));
            this.uiContainer.appendChild(header);
        }
        // Toggle Login/Welcome Mode
        if (!this.showWelcome) {
            gridSize = gridSize || this.getProvidersGridDimensions();
            var loginContainer = new LoginContainer_1.LoginContainer(this, gridSize);
            var providers = loginContainer.getHtmlElement();
            this.uiContainer.appendChild(providers);
            loginContainer.expandInContainerAfterRender();
        }
        else {
            var welcomeContainer = new WelcomeContainer_1.WelcomeContainer(this);
            this.uiContainer.appendChild(welcomeContainer.getHtmlElement());
        }
        if (this.isFooterEnabled) {
            gridSize = gridSize || this.getProvidersGridDimensions();
            var footerContainer = new FooterContainer_1.FooterContainer(this, gridSize);
            this.uiContainer.appendChild(footerContainer.getHtmlElement());
        }
        // Set the coordinates of the pop-up in case we are in edit mode
        if (this.pluginMode === PluginMode.AddConnection && this.params.showWhatsThis) {
            var whatsthisElement = window.gigya.utils.DOM.getElementsByClass(this.uiContainer, 'gigya-login-footer-whatsthis')[0];
            var providorsTable = window.gigya.utils.DOM.getElementsByClass(this.uiContainer, 'gigya-login-providers-container')[0];
            var containerDimensions = this.getContainerDimensions();
            var heightRatio = (providorsTable.offsetHeight * 0.07).toString();
            whatsthisElement.style.top = parseInt(heightRatio) + '%';
            whatsthisElement.style.left = (containerDimensions.w - whatsthisElement.offsetWidth) / 2 + 'px';
        }
    };
    LoginPlugin.prototype.userStateChanged = function (event) {
        var _this = this;
        if (event && event.user) {
            // We already have the user - no need to fetch the user details
            this.saveUserInfoAndRenderPlugin(event.user);
        }
        // We don't have the user details - fetch them and then render the control
        else {
            this.getUserInfo(function (result) { return _this.saveUserInfoAndRenderPlugin(result.user); });
        }
    };
    LoginPlugin.prototype.saveUserInfoAndRenderPlugin = function (user) {
        this.user = user;
        this.showEdit =
            this.pluginMode === PluginMode.AddConnection && this.user.isConnected && !window.gigya.utils.validation.isExplicitFalse(this.params.showEditLink);
        // render the control
        this.render();
    };
    LoginPlugin.prototype.registerToGlobalEvents = function () {
        this.addGlobalEventHandlers({
            onLogin: this.onUserStateChange,
            onLogout: this.onUserStateChange,
            onConnectionAdded: this.onUserStateChange,
            onConnectionRemoved: this.onUserStateChange,
        });
        if (this.facebookSuggestEnabled)
            this.addGlobalEventHandler('onFacebookLoaded', this.onUserStateChange);
    };
    LoginPlugin.prototype.dispose = function () {
        if (this.facebookSuggestEnabled)
            this.removeGlobalEventHandler('onFacebookLoaded', this.onUserStateChange);
        this.removeGlobalEventHandlers({
            onLogin: this.onUserStateChange,
            onLogout: this.onUserStateChange,
            onConnectionAdded: this.onUserStateChange,
            onConnectionRemoved: this.onUserStateChange,
        });
        _super.prototype.dispose.call(this);
    };
    LoginPlugin.prototype.onProviderClickHandler = function (e) {
        var _this = this;
        var target = e.target || e.srcElement;
        // Find the parent holding the provider attribute.
        while (target && !target.getAttribute('data-gigya-provider')) {
            target = target.parentNode;
        }
        if (target) {
            // get the provider name from the event
            var providerName = target.getAttribute('data-gigya-provider');
            if (providerName) {
                // find the provider in the private providers repository
                var provider = window.gigya._.providers.getProviderByName(providerName, this.providers);
                // if not found, search the global providers repository
                if (!provider)
                    provider = window.gigya._.providers.getProviderByName(providerName);
                // setting the params for the request
                var params = {
                    provider: providerName,
                    callback: function (res) {
                        if (res.errorCode != 0) {
                            delete res.requestParams.getInfoResponse;
                            delete res.requestParams.context;
                            delete res.context;
                            _this.dispatchErrorFromResponse(res);
                        }
                        else {
                            if (_this.params.isPopup) {
                                window.gigya.socialize._closeComponent(_this.params.rid, true);
                            }
                            var eventName = _this.pluginMode === PluginMode.AddConnection && res.operation == 'addConnection' ? 'connectionAdded' : 'login';
                            var oEvent = window.gigya._.addUserInfoToEvent(res, { provider: provider, response: res }, true);
                            _this.dispatchPluginEvent(eventName, oEvent);
                        }
                    },
                };
                if (provider.ID == 4121) {
                    var oButton = provider['buttonData'];
                    params['openIDProviderName'] = oButton.provider;
                    params['openIDProviderLogo'] = oButton.logoURL;
                    params['openIDURL'] = oButton.openIDURL;
                }
                if (provider.ID != 4121 || provider['buttonData'].type == 'openID') {
                    if (this.pluginMode === PluginMode.AddConnection) {
                        var providerIdentityInformation = this.getIdentityInfoForProvider(provider);
                        if (providerIdentityInformation.isConnected) {
                            // Overwrite the callback
                            params.callback = function () {
                                _this.dispatchPluginEvent('permissions', {
                                    provider: provider,
                                });
                                _this.render();
                            };
                            window.gigya.socialize.requestPermissions(this.params, this.params, params);
                        }
                        else {
                            window.gigya.socialize.connect(this.params, this.params, params);
                        }
                    }
                    else if (this.params['accountsSocialLogin']) {
                        // this if for 'Screen sets'
                        window.gigya.accounts.socialLogin(this.params, this.params, params);
                    }
                    else {
                        window.gigya.socialize.login(this.params, this.params, params);
                    }
                }
            }
            var eventObj;
            if (provider['buttonData'])
                eventObj = { button: provider['buttonData'] };
            this.dispatchPluginEvent('buttonClicked', eventObj);
        }
        e.cancelBubble = true;
        if (e.stopPropagation)
            e.stopPropagation();
    };
    /* ------------------- Calculations ---------------------- */
    // Calculate the container dimensions to enable responsive calculations.
    LoginPlugin.prototype.getContainerDimensions = function () {
        var width = this.params.widthNum;
        if (this.params.responsiveWidth) {
            // Fix for getting the PRECISE dimensions of the container element nested inside an unknown container with no specific width.
            // See: http://stackoverflow.com/questions/24104905/offsetwidth-not-same-in-different-browsers.
            var boundingBox = (this.uiContainer.offsetParent && this.uiContainer.getBoundingClientRect && this.uiContainer.getBoundingClientRect()) || {};
            var pxWidth = boundingBox.width || boundingBox.right - boundingBox.left || this.uiContainer.offsetWidth;
            width = (pxWidth / 100) * this.params.widthNum;
        }
        return {
            h: this.params.heightNum,
            w: width,
        };
    };
    LoginPlugin.prototype.getProvidersGridDimensions = function () {
        // calculate without the pagger
        var providersGridDimensions = this._getProvidersGridDimensions(0);
        // we have more providers then space
        var needReCalculation = this.providers.length > providersGridDimensions.rows * providersGridDimensions.columns;
        if (needReCalculation) {
            var isFloatingArrows = this.pagingButtonStyle.getStyleName(this) === 'floating';
            // calculate with the pager
            providersGridDimensions = this._getProvidersGridDimensions(isFloatingArrows ? this.pluginConfig.floatingArrowWidth : this.pluginConfig.arrowWidth);
        }
        else if (!this.providers.length) {
            providersGridDimensions.columns = providersGridDimensions.rows = 0;
        }
        else {
            // Normalize The Cols / Rows
            // we dont have paging, so we need to balance all the providers
            // Getting the number of rows currently occupied with providers
            var factorialDivider = Math.ceil(this.providers.length / providersGridDimensions.columns);
            // resize the 'cols' so the grid can fit all the providers in the same target rows
            providersGridDimensions.columns = Math.ceil(this.providers.length / factorialDivider);
            providersGridDimensions.rows = factorialDivider;
        }
        return providersGridDimensions;
    };
    // return a grid dimension size for the icons preset
    LoginPlugin.prototype._getProvidersGridDimensions = function (arrowWidth) {
        // Consts.
        var verticalMargin = 5;
        var horizontalMargin = 5;
        var buttonHeight = this.params.buttonSize;
        var buttonWidth = Math.ceil(this.params.buttonSize * this.stylePreset.ratio);
        // Minimum size for the provider's grid is 1 button
        var minimumGridHeight = buttonHeight;
        var minimumGridWidth = buttonWidth;
        var containerDimensions = this.getContainerDimensionsWithoutPagerAndFooter(arrowWidth, minimumGridHeight);
        var columnsAndRows = this.getColumnsAndRowsOfProvidersGrid(containerDimensions.containerWidth, containerDimensions.containerHeight, buttonWidth, buttonHeight, horizontalMargin, verticalMargin);
        var providersGridWidthAndHeight = this.getWidthAndHeightOfProvidersGrid(containerDimensions.containerHeight, columnsAndRows.columns, buttonWidth, minimumGridWidth, minimumGridHeight, horizontalMargin, arrowWidth);
        var grid = {
            columns: columnsAndRows.columns,
            rows: columnsAndRows.rows,
            height: providersGridWidthAndHeight.height,
            width: providersGridWidthAndHeight.width,
            totalWidthIncludingPager: providersGridWidthAndHeight.totalWidthIncludingPager,
            isPaged: !arrowWidth,
        };
        return grid;
    };
    LoginPlugin.prototype.getContainerDimensionsWithoutPagerAndFooter = function (arrowWidth, minimumGridHeight) {
        // get the actual available space on the container
        var containerDimension = this.getContainerDimensions();
        // Calculate the effective size of the containers
        var containerWidth = containerDimension.w - arrowWidth * 2;
        var containerHeight = containerDimension.h > minimumGridHeight ? containerDimension.h : minimumGridHeight;
        if (this.isFooterEnabled) {
            containerHeight -= this.pluginConfig.footerHeight;
        }
        return {
            containerWidth: containerWidth,
            containerHeight: containerHeight,
        };
    };
    LoginPlugin.prototype.getColumnsAndRowsOfProvidersGrid = function (containerWidth, containerHeight, buttonWidth, buttonHeight, horizontalMargin, verticalMargin) {
        // calculating a virtual grid to determind how many providers can fit in the container.
        var columnsCalculation = Math.floor(containerWidth / (buttonWidth + horizontalMargin));
        var columns = columnsCalculation > this.providers.length ? this.providers.length : columnsCalculation;
        var rows = Math.floor((containerHeight + verticalMargin) / (buttonHeight + verticalMargin));
        // setting minimum columns rows
        columns = columns > 0 ? columns : 1;
        rows = rows > 0 ? rows : 1;
        return {
            columns: columns,
            rows: rows,
        };
    };
    LoginPlugin.prototype.getWidthAndHeightOfProvidersGrid = function (containerHeight, columns, buttonWidth, minimumGridWidth, minimumGridHeight, horizontalMargin, arrowWidth) {
        // calculating the inner size of the grid container
        var h = containerHeight;
        var w = columns * (buttonWidth + horizontalMargin) - horizontalMargin;
        // setting minimum.
        w = w >= minimumGridWidth ? w : minimumGridWidth;
        h = h >= minimumGridHeight ? h : minimumGridHeight;
        var totalWidthIncludingPager = w + arrowWidth * 2;
        return {
            height: h,
            width: w,
            totalWidthIncludingPager: totalWidthIncludingPager,
        };
    };
    /* ------------------------------- Helpers -------------------------------- */
    LoginPlugin.prototype.getIdentityInfoForProvider = function (provider) {
        var providerIdentityInfo = {
            name: '',
            isConnected: false,
            hasAllRequiredPermissions: true,
            requiredPermissions: [],
            identity: null,
        };
        if (!provider) {
            return providerIdentityInfo;
        }
        if (this.user && this.user.identities) {
            for (var identity in this.user.identities) {
                var curIdentity = this.user.identities[identity];
                if (curIdentity.provider == provider.name) {
                    providerIdentityInfo.name = provider.name;
                    providerIdentityInfo.identity = curIdentity;
                    providerIdentityInfo.isConnected = true;
                    break;
                }
            }
        }
        if (providerIdentityInfo.identity) {
            if (providerIdentityInfo.identity.missingPermissions) {
                var missingPermissionsString = ',' + providerIdentityInfo.identity.missingPermissions.toLowerCase().replace(/ /g, '') + ',';
                var neededPermissions = window.gigya.utils.object.extractProperty(this.params, provider.name + 'ExtraPermissions');
                if (!neededPermissions)
                    neededPermissions = window.gigya.utils.object.extractProperty(this.params, 'extraPermissions');
                if (!neededPermissions)
                    neededPermissions = '';
                neededPermissions = neededPermissions.toLowerCase();
                var arNeededPermissions = neededPermissions.split(',');
                for (var iPermission = 0; iPermission < arNeededPermissions.length; iPermission++) {
                    if (missingPermissionsString && missingPermissionsString.toLowerCase().indexOf(',' + arNeededPermissions[iPermission] + ',') != -1) {
                        providerIdentityInfo.hasAllRequiredPermissions = false;
                        providerIdentityInfo.requiredPermissions.push(arNeededPermissions[iPermission]);
                    }
                }
            }
        }
        return providerIdentityInfo;
    };
    LoginPlugin.prototype.createElementFromHTMLString = function (elementHtml) {
        var elementWrapper = document.createElement('span');
        elementWrapper.innerHTML = elementHtml;
        return elementWrapper.childNodes[0];
    };
    LoginPlugin.prototype.getUserInfo = function (callback) {
        var _this = this;
        window.gigya.socialize.getUserInfo(this.params, {
            includeAllIdentities: true,
            callback: function (response) {
                if (response.errorCode == 0) {
                    _this.user = response.user;
                    _this.showEdit =
                        _this.pluginMode === PluginMode.AddConnection &&
                            _this.user.isConnected &&
                            !window.gigya.utils.validation.isExplicitFalse(_this.params.showEditLink);
                }
                else {
                    _this.dispatchErrorFromResponse(response);
                }
                if (callback)
                    callback(response);
            },
        });
    };
    LoginPlugin.prototype.getStyle = function (buttonsStyle) {
        switch (buttonsStyle.toLowerCase()) {
            case 'fulllogocolored':
                return {
                    ratio: 2.6,
                    base: 'FullLogoColored/',
                    ext: '.png',
                    noConnected: true,
                };
            case 'fulllogo':
                return {
                    ratio: 2.6,
                    base: 'FullLogo/',
                    ext: '.png',
                    noConnected: true,
                };
            case 'signinwith':
                return {
                    ratio: 7.05,
                    base: 'SignInWith/',
                    ext: '.png',
                    noLastLogin: true,
                    noConnected: true,
                    minSize: 20,
                };
            default:
                return {
                    ratio: 1,
                    base: '',
                    ext: '.png',
                };
        }
    };
    LoginPlugin.prototype.getLastLogin = function () {
        return window.gigya._.apiAdapter.getStorage().getItem('_gig_llp');
    };
    LoginPlugin.prototype.getLastLoginName = function () {
        return window.gigya._.apiAdapter.getStorage().getItem('_gig_llu');
    };
    LoginPlugin.prototype.parseXML = function (data) {
        var xml, tmp;
        if (!data || typeof data !== 'string') {
            return null;
        }
        // Support: IE9
        try {
            tmp = new DOMParser();
            xml = tmp.parseFromString(data, 'text/xml');
        }
        catch (e) {
            xml = undefined;
        }
        return xml;
    };
    LoginPlugin.prototype.isTrue = function (value, defaultValue) {
        if (defaultValue === void 0) { defaultValue = ''; }
        if (value == null)
            return defaultValue;
        return value && (value == true || value.toLowerCase() == 'true');
    };
    LoginPlugin.prototype.createElemnetBlock = function (elementType, attributes, content) {
        var elm = document.createElement(elementType);
        for (var attribute in attributes) {
            elm.setAttribute(attribute, attributes[attribute]);
        }
        return elm;
    };
    // statics
    LoginPlugin.pluginName = 'login';
    LoginPlugin.InjectionInfoDefaultConfig = {
        showAddConnectionsUI_v2: {
            defaultParams: {
                width: 120,
                height: 110,
                requiredCapabilities: 'friends',
                pagingButtonStyle: 'arrows',
                UIMode: PluginMode[PluginMode.AddConnection],
                _callGetUserInfoOnInitialRender: true,
            },
            defaultModalParams: {
                width: 280,
                height: 220,
                requiredCapabilities: 'friends',
                pagingButtonStyle: 'arrows',
                UIMode: PluginMode[PluginMode.AddConnection],
                captionTextKey: 'connect_with_your_friends',
                _callGetUserInfoOnInitialRender: true,
            },
        },
        showLoginUI_v2: {
            defaultParams: {
                width: 110,
                height: 110,
                requiredCapabilities: 'login',
                pagingButtonStyle: 'arrows',
                UIMode: PluginMode[PluginMode.Login],
                _callGetUserInfoOnInitialRender: true,
            },
            defaultModalParams: {
                width: 250,
                height: 200,
                requiredCapabilities: 'login',
                pagingButtonStyle: 'arrows',
                UIMode: PluginMode[PluginMode.Login],
                captionTextKey: 'login',
                _callGetUserInfoOnInitialRender: true,
            },
        },
    };
    return LoginPlugin;
}(BasePluginGlobal));
exports.LoginPlugin = LoginPlugin;


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/PagingStyles.ts":
/*!***********************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/PagingStyles.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function simpleStyle(styleName) {
    return {
        getStyleClass: function () { return 'gigya-login-providers-arrow-marker-' + styleName; },
        getStyleName: function (info) { return styleName; },
    };
}
exports.PagingButtonStyles = {
    arrows: simpleStyle('arrows'),
    newArrows: simpleStyle('newArrows'),
    floating: simpleStyle('floating'),
    auto: {
        getStyleClass: function (info) {
            var styleName = exports.PagingButtonStyles['auto'].getStyleName(info);
            return exports.PagingButtonStyles[styleName].getStyleClass(info);
        },
        getStyleName: function (info) { return (info.isMobileUI && (!info.lastPolledWidth || info.lastPolledWidth < 500) ? 'floating' : 'newArrows'); },
    },
};


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/Utils.ts":
/*!****************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/Utils.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.createElementFromHTMLString = function (elementHtml) {
        var elementWrapper = document.createElement('span');
        elementWrapper.innerHTML = elementHtml;
        return elementWrapper.childNodes[0];
    };
    return Utils;
}());
exports.Utils = Utils;


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/WelcomeContainer.ts":
/*!***************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/WelcomeContainer.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var ContainerBase_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/ContainerBase */ "./src/socialize/Gigya.Js.Login2/app/ContainerBase.ts");
var _throttle = __webpack_require__(/*! lodash.throttle */ "../node_modules/lodash.throttle/index.js");
var Consts_1 = __webpack_require__(/*! ./Consts */ "./src/socialize/Gigya.Js.Login2/app/Consts.ts");
var WelcomeContainer = /** @class */ (function (_super) {
    tslib_1.__extends(WelcomeContainer, _super);
    function WelcomeContainer(plugin) {
        var _this = _super.call(this) || this;
        _this.plugin = plugin;
        _this.ElementsSelector = {
            container: 'gigya-login-welcome-container',
            user: 'gigya-login-welcome-user',
            provider: 'gigya-login-welcome-provider',
            signinlink: 'gigya-login-welcome-signin-link',
            greeting: 'gigya-login-welcome-greeting',
        };
        var template = _this.plugin.getTemplates()['welcome'];
        _this.element = _this.plugin.createElementFromHTMLString(template);
        return _this;
    }
    WelcomeContainer.prototype.getHtmlElement = function () {
        var providerButtonSizes = this.getWelcomeButtonSized();
        this.setGreetingElement();
        this.setSignInUsingAnotherAccount();
        // Setting The Provider Button
        // NOTICE - keeping this for last to measure the container and applay margin to fit in the containe.
        this.setProviderCellElement(providerButtonSizes.imageSize, providerButtonSizes.buttonSize);
        return this.element;
    };
    WelcomeContainer.prototype.getWelcomeButtonSized = function () {
        var welcomeBtnSize = this.plugin.params.lastLoginButtonSize
            ? this.plugin.params.lastLoginButtonSize
            : this.plugin.pluginConfig.defaultlastLoginButtonSize;
        welcomeBtnSize = parseInt(welcomeBtnSize.toString());
        var welcomeImgSize = Math.floor(welcomeBtnSize / 5) * 5;
        if (welcomeImgSize < 25)
            welcomeImgSize = 20;
        if (welcomeImgSize > 35)
            welcomeImgSize = 40;
        return {
            buttonSize: welcomeBtnSize,
            imageSize: welcomeImgSize,
        };
    };
    WelcomeContainer.prototype.setProviderCellElement = function (welcomeImgSize, welcomeBtnSize) {
        var _this = this;
        var providerContainerElment = this.getChildByCssClass(this.element, this.ElementsSelector.provider);
        var style = this.plugin.stylePreset; // TODO different from before: was ButtonPresets.signin
        var img = '<img data-gigya-provider="' +
            this.plugin.lastLoginProviderObject.name +
            '" alt="' +
            this.plugin.lastLoginProviderObject.displayName +
            '" height="' +
            welcomeBtnSize +
            '" width="' +
            Math.ceil(this.plugin.params.lastLoginButtonSize * style.ratio) +
            '" src="' +
            this.plugin.imageBase +
            '/SignInWith/' +
            this.plugin.lastLoginProviderObject.name +
            '_' +
            welcomeImgSize +
            '.png" aria-hidden="true">';
        var providerCell = this.plugin.createElemnetBlock('div', {
            'data-gigya-provider': this.plugin.lastLoginProviderObject.name,
            style: [
                // TODO: There are cases where this puts "width: NaN" on the page.
                'width:',
                Math.ceil(welcomeImgSize * this.plugin.stylePreset.ratio),
                'px;',
                'height:',
                welcomeImgSize,
                'px;',
            ].join(''),
            class: 'gigya-login-provider',
            title: this.plugin.lastLoginProviderObject.name,
            // For WCAG:
            role: 'button',
            'aria-label': this.plugin.lastLoginProviderObject.name,
            tabindex: 0,
        });
        providerCell.innerHTML = img;
        providerContainerElment.appendChild(providerCell);
        var curHeight = window.gigya.utils.DOM.getHTMLSize(this.element.innerHTML, this.plugin.uiContainer).h;
        //// calculating the height of the wellcome in relation to the main container to fill missing spaces on the button.
        var marginSpace = this.plugin.params.heightNum -
            (curHeight +
                (this.plugin.isFooterEnabled ? this.plugin.pluginConfig.footerHeight : 0) +
                (this.plugin.isHeaderEnabled ? this.plugin.pluginConfig.headerHeight : 0));
        //// Upper Bound Margin
        var topMargin = Math.ceil(marginSpace / 2);
        var bottomMargin = Math.floor(marginSpace / 2);
        providerCell.style.marginBottom = topMargin + 'px';
        providerCell.style.marginTop = bottomMargin + 'px';
        var clickEventHandler = _throttle(function (e) {
            _this.plugin.onProviderClickHandler(e);
        }, Consts_1.PROVIDER_CLICK_THROTTLE, { 'trailing': false });
        var keyDownEventHandler = _throttle(function (e) {
            var keyCode = e.keyCode || e.which;
            if (keyCode == 32 || keyCode == 13) {
                _this.plugin.onProviderClickHandler(e);
            }
        }, Consts_1.PROVIDER_CLICK_THROTTLE, { 'trailing': false });
        // attaching the provider click event.
        window.gigya.utils.DOM.addEventListener(providerCell, 'click', clickEventHandler);
        window.gigya.utils.DOM.addEventListener(providerCell, 'keydown', keyDownEventHandler);
    };
    WelcomeContainer.prototype.setGreetingElement = function () {
        var _this = this;
        var userGreetingContainerElement = this.getChildByCssClass(this.element, this.ElementsSelector.user);
        var username = window.gigya.utils.sanitize.sanitizeHTML(this.plugin.getLastLoginName());
        var greetingHtml = window.gigya.utils.templates.fill(this.plugin.getTemplates()['welcomeGreeting'], {
            welcomeBack: this.plugin.getText('welcome_back_user', '%user', username),
        });
        var bubbleHtml = window.gigya.utils.templates.fill(this.plugin.getTemplates()['welcomeBubble'], {
            notYou: this.plugin.getText('not_you', '%user', username),
        });
        userGreetingContainerElement.innerHTML = greetingHtml;
        var bubbleElm = this.plugin.createElementFromHTMLString(bubbleHtml);
        var greetingElm = this.getChildByCssClass(this.element, this.ElementsSelector.greeting);
        greetingElm.appendChild(bubbleElm);
        var mainContainerDimensions = this.plugin.getContainerDimensions();
        var userGreetingDimensions = window.gigya.utils.DOM.getHTMLSize(userGreetingContainerElement.innerHTML, this.plugin.uiContainer);
        var notYouDimensions = window.gigya.utils.DOM.getHTMLSize(bubbleElm.outerHTML, this.plugin.uiContainer);
        if (userGreetingDimensions.w > mainContainerDimensions.w) {
            // show Not You Bubble?
            if (userGreetingDimensions.w - notYouDimensions.w < mainContainerDimensions.w) {
                bubbleElm.style.display = 'none';
            }
            else {
                // Need to render only 'Welcome back' - without the user name
                userGreetingContainerElement.innerHTML = window.gigya.utils.templates.fill(this.plugin.getTemplates()['welcomeGreeting'], {
                    welcomeBack: this.plugin.getText('welcome_back_user', '%user', ''),
                });
            }
        }
        // Setting The Events:
        var notYouButton = this.getChildByCssClass(this.element, 'gigya-login-welcome-bubble');
        var signOutElements = [this.getChildByCssClass(this.element, this.ElementsSelector.signinlink), notYouButton];
        for (var i = 0; i < signOutElements.length; i++) {
            window.gigya.utils.DOM.addEventListener(signOutElements[i], 'click', function () {
                _this.onNotYouClickHandler();
            });
        }
        // Allow role=button to work with screen-readers on DIV element.
        window.gigya.utils.DOM.addEventListener(notYouButton, 'keydown', function (e) {
            var keyCode = e.keyCode || e.which;
            if (keyCode == 32 || keyCode == 13) {
                // Focus is immediately switched to a login button, prevent the enter button from clicking it.
                e.preventDefault();
                e.stopPropagation();
                _this.onNotYouClickHandler();
            }
        });
    };
    WelcomeContainer.prototype.setSignInUsingAnotherAccount = function () {
        var signInLinkContainer = this.getChildByCssClass(this.element, this.ElementsSelector.signinlink);
        var linkHtml = window.gigya.utils.templates.fill(this.plugin.getTemplates()['welcomeSignInLink'], {
            singInUsingDifferentNetwork: this.plugin.getText('sign_in_using_a_different_network'),
        });
        signInLinkContainer.innerHTML = linkHtml;
    };
    WelcomeContainer.prototype.onNotYouClickHandler = function () {
        window.gigya.utils.cookie.remove('_gig_llp');
        window.gigya.utils.cookie.remove('_gig_llu');
        window.gigya.thisScript.globalConf['alwaysForceAuthentication'] = true; //feature #7643
        this.plugin.showWelcome = false;
        this.plugin.render();
        // WCAG: Focus on first login provider if user clicks "not you" link.
        var firstLoginProvider = this.plugin.container.querySelector('.gigya-login-providers-list button');
        if (firstLoginProvider) {
            firstLoginProvider.focus();
        }
    };
    return WelcomeContainer;
}(ContainerBase_1.ContainerBase));
exports.WelcomeContainer = WelcomeContainer;


/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/css/ie8patch.css":
/*!************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/css/ie8patch.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!./ie8patch.css */ "../node_modules/css-loader/dist/cjs.js!./src/socialize/Gigya.Js.Login2/app/css/ie8patch.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/css/iePatch.css":
/*!***********************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/css/iePatch.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!./iePatch.css */ "../node_modules/css-loader/dist/cjs.js!./src/socialize/Gigya.Js.Login2/app/css/iePatch.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/css/main.css":
/*!********************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/css/main.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!./main.css */ "../node_modules/css-loader/dist/cjs.js!./src/socialize/Gigya.Js.Login2/app/css/main.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/index.ts":
/*!****************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var Gigya_PluginsLogin_v2 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/ButtonStyles */ "./src/socialize/Gigya.Js.Login2/app/ButtonStyles.ts");
var Gigya_PluginsLogin_v2_1 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/ContainerBase */ "./src/socialize/Gigya.Js.Login2/app/ContainerBase.ts");
var Gigya_PluginsLogin_v2_2 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/FooterContainer */ "./src/socialize/Gigya.Js.Login2/app/FooterContainer.ts");
var Gigya_PluginsLogin_v2_3 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/Interfaces */ "./src/socialize/Gigya.Js.Login2/app/Interfaces.ts");
var Gigya_PluginsResourcesHtmlLogin_v2 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/Login2Resources0 */ "./src/socialize/Gigya.Js.Login2/app/Login2Resources0.ts");
var Gigya_PluginsResourcesCssLogin_v2 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/Login2Resources1 */ "./src/socialize/Gigya.Js.Login2/app/Login2Resources1.ts");
var Gigya_PluginsLogin_v2_4 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/LoginContainer */ "./src/socialize/Gigya.Js.Login2/app/LoginContainer.ts");
var Gigya_PluginsLogin_v2_5 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/LoginPlugin */ "./src/socialize/Gigya.Js.Login2/app/LoginPlugin.ts");
var Gigya_PluginsLogin_v2_6 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/PagingStyles */ "./src/socialize/Gigya.Js.Login2/app/PagingStyles.ts");
var Gigya_PluginsLogin_v2_7 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/Utils */ "./src/socialize/Gigya.Js.Login2/app/Utils.ts");
var Gigya_PluginsLogin_v2_8 = __webpack_require__(/*! src/socialize/Gigya.Js.Login2/app/WelcomeContainer */ "./src/socialize/Gigya.Js.Login2/app/WelcomeContainer.ts");
if (!window.gigya._) {
    window.gigya._ = {};
}
if (!window.gigya._.plugins) {
    window.gigya._.plugins = {};
}
if (!window.gigya._.plugins.login_v2) {
    window.gigya._.plugins.login_v2 = {};
}
if (!window.gigya._.plugins.resources) {
    window.gigya._.plugins.resources = {};
}
if (!window.gigya._.plugins.resources.html) {
    window.gigya._.plugins.resources.html = {};
}
if (!window.gigya._.plugins.resources.html.login_v2) {
    window.gigya._.plugins.resources.html.login_v2 = {};
}
if (!window.gigya._.plugins.resources.css) {
    window.gigya._.plugins.resources.css = {};
}
if (!window.gigya._.plugins.resources.css.login_v2) {
    window.gigya._.plugins.resources.css.login_v2 = {};
}
__webpack_provided_Object_dot_assign(window.gigya._.plugins.login_v2, Gigya_PluginsLogin_v2, Gigya_PluginsLogin_v2_1, Gigya_PluginsLogin_v2_2, Gigya_PluginsLogin_v2_3, Gigya_PluginsLogin_v2_4, Gigya_PluginsLogin_v2_5, Gigya_PluginsLogin_v2_6, Gigya_PluginsLogin_v2_7, Gigya_PluginsLogin_v2_8);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.resources.html.login_v2, Gigya_PluginsResourcesHtmlLogin_v2);
__webpack_provided_Object_dot_assign(window.gigya._.plugins.resources.css.login_v2, Gigya_PluginsResourcesCssLogin_v2);
window.gigya._.UI.attachPlugin(Gigya_PluginsLogin_v2_5.LoginPlugin, 'socialize', Gigya_PluginsLogin_v2_5.LoginPlugin.pluginName, 'showLoginUI_v2');
window.gigya._.UI.attachPlugin(Gigya_PluginsLogin_v2_5.LoginPlugin, 'socialize', Gigya_PluginsLogin_v2_5.LoginPlugin.pluginName, 'showAddConnectionsUI_v2');

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/arrow.html":
/*!****************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/arrow.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigya-wrapper-login-providers-arrow-marker\">\n    <button type=\"button\"\n            tabindex=\"${tabindex}\"\n            class=\"tabbing-button gigya-login-providers-arrow-marker\"\n            aria-label=\"${label}\">\n    </button>\n</div>\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/footer.html":
/*!*****************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/footer.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigya-login-footer\"></div>";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/footerBrandLong.html":
/*!**************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/footerBrandLong.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"gigya-login-footer-social-by\" href=\"https://www.gigya.com\" target=\"_blank\">${socialBy} <img alt=\"Gigya\" class=\"gigya-logo\" src=\"${logoUrl}\" /></a>\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/footerBrandShort.html":
/*!***************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/footerBrandShort.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"gigya-login-footer-social-by\" href=\"https://www.gigya.com\" target=\"_blank\"><img alt=\"Gigya\" class=\"gigya-logo\" src=\"${logoUrl}\" /></a>\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/footerBrandWhatIsThis.html":
/*!********************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/footerBrandWhatIsThis.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table cellpadding=\"0\" cellspacing=\"0\" class=\"gigya-login-footer-whatsthis\" role=\"presentation\">\n    <tbody>\n        <tr>\n            <td style=\"vertical-align: middle; text-align: center\"><span>$whatsthistext</span></td>\n        </tr>\n    </tbody>\n</table>\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/footerDivider.html":
/*!************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/footerDivider.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"gigya-login-footer-divider\">|</span>";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/footerEdit.html":
/*!*********************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/footerEdit.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"gigya-login-footer-edit-link\">$edit</span>\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/footerTerms.html":
/*!**********************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/footerTerms.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"gigya-login-footer-terms\" target=\"_blank\" href=\"https://www.gigya.com/terms-of-service/\">$terms</a>\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/header.html":
/*!*****************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/header.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigya-login-header\">${headerText}</div>\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/login.html":
/*!****************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/login.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigya-login-providers\">\n    <label id=\"social-buttons-login-caption\" aria-label=\"Sign in with\"></label>\n    <table class=\"gigya-login-providers-container\" role=\"presentation\">\n        <tr>\n            <td class=\"gigya-login-providers-arrow-left\"></td>\n            <td class=\"gigya-login-providers-list-container\"></td>\n            <td class=\"gigya-login-providers-arrow-right\"></td>\n        </tr>\n    </table>\n</div>\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/providerImage.html":
/*!************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/providerImage.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img style=\"width:${buttonWidth}px;height:${buttonHeight}px;\" src=\"${imageUrl}\" />\r\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/uiContainer.html":
/*!**********************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/uiContainer.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"${containerID}_uiContainer\"></div>";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/welcome.html":
/*!******************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/welcome.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigya-login-welcome-container\">\n    <div class=\"gigya-login-welcome-user\"></div>\n    <div class=\"gigya-login-welcome-provider\"></div>\n    <div class=\"gigya-login-welcome-signin-link\"></div>\n</div>\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/welcomeBubble.html":
/*!************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/welcomeBubble.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigya-login-welcome-bubble\" tabindex=\"0\" role=\"button\">\n    <div class=\"gigya-login-welcome-bubble-left\"></div>\n    <div class=\"gigya-login-welcome-bubble-center\">\n        <div class=\"gigya-login-welcome-bubble-text\">$notYou</div>\n    </div>\n    <div class=\"gigya-login-welcome-bubble-right\"></div>\n</div>\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/welcomeGreeting.html":
/*!**************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/welcomeGreeting.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gigya-login-welcome-greeting\">$welcomeBack</div>\n";

/***/ }),

/***/ "./src/socialize/Gigya.Js.Login2/app/templates/welcomeSignInLink.html":
/*!****************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Login2/app/templates/welcomeSignInLink.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"gigya-link\" href=\"javascript:void(0);\">$singInUsingDifferentNetwork</a>\n";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL2Nzcy9pZThwYXRjaC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL2Nzcy9pZVBhdGNoLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvY3NzL21haW4uY3NzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLnRocm90dGxlL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1BsdWdpblN0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvQnV0dG9uU3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9Db25zdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL0NvbnRhaW5lckJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL0Zvb3RlckNvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvTG9naW4yUmVzb3VyY2VzMC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvTG9naW4yUmVzb3VyY2VzMS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvTG9naW5Db250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL0xvZ2luUGx1Z2luLnRzIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9QYWdpbmdTdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL1V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9XZWxjb21lQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9jc3MvaWU4cGF0Y2guY3NzP2I2YmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL2Nzcy9pZVBhdGNoLmNzcz9mZDgxIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9jc3MvbWFpbi5jc3M/NjAxMyIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL3RlbXBsYXRlcy9hcnJvdy5odG1sIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC90ZW1wbGF0ZXMvZm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL3RlbXBsYXRlcy9mb290ZXJCcmFuZExvbmcuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvdGVtcGxhdGVzL2Zvb3RlckJyYW5kU2hvcnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvdGVtcGxhdGVzL2Zvb3RlckJyYW5kV2hhdElzVGhpcy5odG1sIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC90ZW1wbGF0ZXMvZm9vdGVyRGl2aWRlci5odG1sIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC90ZW1wbGF0ZXMvZm9vdGVyRWRpdC5odG1sIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC90ZW1wbGF0ZXMvZm9vdGVyVGVybXMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvdGVtcGxhdGVzL2hlYWRlci5odG1sIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC90ZW1wbGF0ZXMvbG9naW4uaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvdGVtcGxhdGVzL3Byb3ZpZGVySW1hZ2UuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvdGVtcGxhdGVzL3VpQ29udGFpbmVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL3RlbXBsYXRlcy93ZWxjb21lLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL3RlbXBsYXRlcy93ZWxjb21lQnViYmxlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL3RlbXBsYXRlcy93ZWxjb21lR3JlZXRpbmcuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAv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QW9FLHVDIiwiZmlsZSI6ImdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLmxvZ2luX3YyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvaW5kZXgudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1sZWZ0LFxcbi5naWd5YS1sb2dpbi1wcm92aWRlcnMtbGlzdC1jb250YWluZXIsXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1yaWdodCB7XFxuICAgIGRpc3BsYXk6aW5saW5lO1xcbn1cXG5cXG4uZ2lneWEtbG9naW4tcHJvdmlkZXIgZGl2IHtcXG4gICAgZGlzcGxheTogLW1zLWlubGluZS1ncmlkO1xcbn1cXG5cXG5cXG50YWJsZS5naWd5YS1sb2dpbi1wcm92aWRlcnMtY29udGFpbmVyIHtcXG4gICAgdG9wOiAwcHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmdpZ3lhLWxvZ2luLWZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtOXB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5naWd5YS1saW5rIHtcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LWZhbWlseTogYXJpYWw7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgY29sb3I6ICMwMDg2ZjE7XFxufVxcblxcbi5naWd5YS1sb2dpbiB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcblxcbi5naWd5YS1sb2dpbi1wcm92aWRlcnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcblxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcblxcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1jb250YWluZXIsXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1jb250YWluZXIgdHIsXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1jb250YWluZXIgdGQsXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1jb250YWluZXIgdGgge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uZ2lneWEtbG9naW4tcHJvdmlkZXJzLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZ2lneWEtYWN0aXZlIC5naWd5YS1sb2dpbi1wcm92aWRlcnMtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZ2lneWEtbG9naW4tcHJvdmlkZXItcm93IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNsZWFyOiBib3RoO1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAyLjVweCAwO1xcbiAgICBsaW5lLWhlaWdodDoxOHB4O1xcbn1cXG5cXG4uZ2lneWEtbG9naW4tcHJvdmlkZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4uZ2lneWEtbG9naW4tcHJvdmlkZXIgZGl2IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uZ2lneWEtbG9naW4tcHJvdmlkZXItbGFzdCB7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG59XFxuXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVyIGltZyB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1jb250YWluZXIgZGl2LFxcbi5naWd5YS1sb2dpbi1wcm92aWRlcnMtY29udGFpbmVyIHNwYW4ge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5naWd5YS1sb2dpbi1wcm92aWRlcnMtbGlzdC1jb250YWluZXIge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZ2lneWEtbG9naW4tcHJvdmlkZXJzLWxpc3QtY29udGFpbmVyIHRib2R5LFxcbi5naWd5YS1sb2dpbi1wcm92aWRlcnMtbGlzdC1jb250YWluZXIgdHIge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1sZWZ0LFxcbi5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctcmlnaHQge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDtcXG59XFxuXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1sZWZ0IGJ1dHRvbixcXG4uZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LXJpZ2h0IGJ1dHRvbiB7XFxuICAgIGN1cnNvcjogaW5oZXJpdDtcXG59XFxuXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1sZWZ0Lm5vLWFycm93cyxcXG4uZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LXJpZ2h0Lm5vLWFycm93cyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbWFya2VyLWZsb2F0aW5nLWRpc2FibGVkIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LWxlZnQgZGl2IC5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbWFya2VyIHtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE3cHg7XFxufVxcblxcbi5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctcmlnaHQgZGl2IC5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbWFya2VyIHtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xcbn1cXG5cXG4uZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LWxlZnQuZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LW1hcmtlci1mbG9hdGluZyBkaXYgLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXIge1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIHdpZHRoOiA0MnB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyRzY3JpcHRCYXNlL3BhZ2luZy90b3VjaF9idXR0b25fbGVmdC5wbmcnKTtcXG59XFxuXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1yaWdodC5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbWFya2VyLWZsb2F0aW5nIGRpdiAuZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LW1hcmtlciB7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgd2lkdGg6IDQycHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyRzY3JpcHRCYXNlL3BhZ2luZy90b3VjaF9idXR0b25fcmlnaHQucG5nJyk7XFxufVxcblxcbi5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbGVmdC5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbWFya2VyLWFycm93cyBkaXYgLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXIge1xcbiAgICBoZWlnaHQ6IDE0cHg7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHNjcmlwdEJhc2UvcGFnaW5nL25hdmlnYXRpb25fYXJyb3dfbGVmdC5wbmcnKTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctcmlnaHQuZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LW1hcmtlci1hcnJvd3MgZGl2IC5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbWFya2VyIHtcXG4gICAgaGVpZ2h0OiAxNHB4O1xcbiAgICB3aWR0aDogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyRzY3JpcHRCYXNlL3BhZ2luZy9uYXZpZ2F0aW9uX2Fycm93X3JpZ2h0LnBuZycpO1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4uZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LWxlZnQuZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LW1hcmtlci1hcnJvd3MuZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LWRpc2FibGVkIGRpdiAuZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LW1hcmtlciB7XFxuICAgIGhlaWdodDogMTRweDtcXG4gICAgd2lkdGg6IDhweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCckc2NyaXB0QmFzZS9wYWdpbmcvbmF2aWdhdGlvbl9hcnJvd19sZWZ0X2Rpc2FibGVkLnBuZycpO1xcbn1cXG5cXG4uZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LXJpZ2h0LmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXItYXJyb3dzLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1kaXNhYmxlZCBkaXYgLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXIge1xcbiAgICBoZWlnaHQ6IDE0cHg7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHNjcmlwdEJhc2UvcGFnaW5nL25hdmlnYXRpb25fYXJyb3dfcmlnaHRfZGlzYWJsZWQucG5nJyk7XFxufVxcblxcbi5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbGVmdC5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbWFya2VyLW5ld0Fycm93cyBkaXYgLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXIge1xcbiAgICBoZWlnaHQ6IDE0cHg7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHNjcmlwdEJhc2UvcGFnaW5nL25hdmlnYXRpb25fYXJyb3dfbGVmdC5wbmcnKTtcXG59XFxuXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1yaWdodC5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbWFya2VyLW5ld0Fycm93cyBkaXYgLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXIge1xcbiAgICBoZWlnaHQ6IDE0cHg7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHNjcmlwdEJhc2UvcGFnaW5nL25hdmlnYXRpb25fYXJyb3dfcmlnaHQucG5nJyk7XFxufVxcblxcbi5naWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctcmlnaHQuZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LW1hcmtlci1uZXdBcnJvd3MuZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LWRpc2FibGVkIGRpdiAuZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LW1hcmtlciB7XFxuICAgIGhlaWdodDogMTRweDtcXG4gICAgd2lkdGg6IDhweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCckc2NyaXB0QmFzZS9wYWdpbmcvbmF2aWdhdGlvbl9hcnJvd19yaWdodF9kaXNhYmxlZC5wbmcnKTtcXG59XFxuXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1sZWZ0LmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXItbmV3QXJyb3dzLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1kaXNhYmxlZCBkaXYgLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXIge1xcbiAgICBoZWlnaHQ6IDE0cHg7XFxuICAgIHdpZHRoOiA4cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHNjcmlwdEJhc2UvcGFnaW5nL25hdmlnYXRpb25fYXJyb3dfbGVmdF9kaXNhYmxlZC5wbmcnKTtcXG59XFxuXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1sZWZ0LmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1kaXNhYmxlZCxcXG4uZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LXJpZ2h0LmdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1kaXNhYmxlZCB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmdpZ3lhLWxvZ2luLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5naWd5YS1sb2dpbi1mb290ZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY2xlYXI6IGJvdGg7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5naWd5YS1sb2dpbi1mb290ZXItdGVybXMge1xcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBjb2xvcjogIzAwODZmMTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmdpZ3lhLWxvZ2luLXByb3ZpZGVycyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5naWd5YS1sb2dpbi1mb290ZXItc29jaWFsLWJ5LFxcbi5naWd5YS1sb2dpbi1mb290ZXItc29jaWFsLWJ5OmhvdmVyLFxcbi5naWd5YS1sb2dpbi1mb290ZXItc29jaWFsLWJ5OmFjdGl2ZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjODI4MjgyO1xcbn1cXG5cXG4uZ2lneWEtbG9naW4tZm9vdGVyLXNvY2lhbC1ieSBpbWcuZ2lneWEtbG9nbyB7XFxuICAgIHdpZHRoOiAzMnB4O1xcbiAgICBoZWlnaHQ6IDlweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZ2lneWEtbG9naW4tZm9vdGVyLXdoYXRzdGhpcyB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzY3Njc2O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZ2lneWEtbG9naW4tZm9vdGVyLXdoYXRzdGhpcyBzcGFuIHtcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIGNvbG9yOiAjMjYyNjI2O1xcbn1cXG5cXG4uZ2lneWEtbG9naW4td2VsY29tZS1ncmVldGluZyB7XFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICM0QzRDNEM7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLmdpZ3lhLWxvZ2luLXdlbGNvbWUtYnViYmxlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBsaW5lLWhlaWdodDogMTZweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLmdpZ3lhLWxvZ2luLXdlbGNvbWUtYnViYmxlLWxlZnQsXFxuLmdpZ3lhLWxvZ2luLXdlbGNvbWUtYnViYmxlLXJpZ2h0LFxcbi5naWd5YS1sb2dpbi13ZWxjb21lLWJ1YmJsZS1jZW50ZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGhlaWdodDogMTdweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi5naWd5YS1sb2dpbi13ZWxjb21lLWJ1YmJsZS1sZWZ0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCckc2NyaXB0QmFzZS9Ob3RZb3VfTGVmdC5wbmcnKTtcXG4gICAgd2lkdGg6IDhweDtcXG59XFxuXFxuLmdpZ3lhLWxvZ2luLXdlbGNvbWUtYnViYmxlLXJpZ2h0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCckc2NyaXB0QmFzZS9Ob3RZb3VfUmlnaHQucG5nJyk7XFxuICAgIHdpZHRoOiA0cHg7XFxufVxcblxcbi5naWd5YS1sb2dpbi13ZWxjb21lLWJ1YmJsZS1jZW50ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyRzY3JpcHRCYXNlL05vdFlvdV9NaWQucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcXG59XFxuXFxuLmdpZ3lhLWxvZ2luLXdlbGNvbWUtYnViYmxlLXRleHQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcXG4gICAgY29sb3I6ICMwMDg2ZjE7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5naWd5YS1sb2dpbi13ZWxjb21lLXNpZ25pbi1saW5rIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmdpZ3lhLWxvZ2luLXdlbGNvbWUtc2lnbmluLWxpbmsgYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICMwMDg2ZjE7XFxufVxcblxcbi5naWd5YS1sb2dpbi1mb290ZXItZGl2aWRlciB7XFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBjb2xvcjogIzgyODI4MjtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG59XFxuXFxuLmdpZ3lhLWxvZ2luLWZvb3Rlci1lZGl0LWxpbmsge1xcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcXG4gICAgY29sb3I6ICMwMDg2ZjE7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG5cXG4udGFiYmluZy1idXR0b257XFxuICAgIGZvbnQtc2l6ZTogMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLnRhYmJpbmctYnV0dG9uLmdpZ3lhLXByb3ZpZGVyLWNvbm5lY3RlZCB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLnRhYmJpbmctYnV0dG9uLmdpZ3lhLXByb3ZpZGVyLWNvbm5lY3RlZDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHJlc3VsdCA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4ocmVzdWx0LCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgb25seSBpbnZva2VzIGBmdW5jYCBhdCBtb3N0IG9uY2UgcGVyXG4gKiBldmVyeSBgd2FpdGAgbWlsbGlzZWNvbmRzLiBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYFxuICogbWV0aG9kIHRvIGNhbmNlbCBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0b1xuICogaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgXG4gKiB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlXG4gKiB0aHJvdHRsZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIHRocm90dGxlZCBmdW5jdGlvbiByZXR1cm4gdGhlXG4gKiByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8udGhyb3R0bGVgIGFuZCBgXy5kZWJvdW5jZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSBpbnZvY2F0aW9ucyB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGV4Y2Vzc2l2ZWx5IHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB3aGlsZSBzY3JvbGxpbmcuXG4gKiBqUXVlcnkod2luZG93KS5vbignc2Nyb2xsJywgXy50aHJvdHRsZSh1cGRhdGVQb3NpdGlvbiwgMTAwKSk7XG4gKlxuICogLy8gSW52b2tlIGByZW5ld1Rva2VuYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgYnV0IG5vdCBtb3JlIHRoYW4gb25jZSBldmVyeSA1IG1pbnV0ZXMuXG4gKiB2YXIgdGhyb3R0bGVkID0gXy50aHJvdHRsZShyZW5ld1Rva2VuLCAzMDAwMDAsIHsgJ3RyYWlsaW5nJzogZmFsc2UgfSk7XG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgdGhyb3R0bGVkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIHRocm90dGxlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhyb3R0bGVkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxlYWRpbmcgPSB0cnVlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAnbGVhZGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy5sZWFkaW5nIDogbGVhZGluZztcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZShmdW5jLCB3YWl0LCB7XG4gICAgJ2xlYWRpbmcnOiBsZWFkaW5nLFxuICAgICdtYXhXYWl0Jzogd2FpdCxcbiAgICAndHJhaWxpbmcnOiB0cmFpbGluZ1xuICB9KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGU7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJleHBvcnQgZW51bSBQbHVnaW5TdHlsZSB7XG4gICAgX3VuZGVmaW5lZCA9IDAsXG4gICAgbm9uZSxcbiAgICBsZWdhY3ksXG4gICAgbW9kZXJuLFxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsdWdpblN0eWxlQ2xhc3Moc3R5bGU6IFBsdWdpblN0eWxlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2dpZ3lhLXN0eWxlLScgKyBQbHVnaW5TdHlsZVtzdHlsZV07XG59XG4iLCJpbXBvcnQgeyBJTWFwIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2FycmF5JztcblxuZXhwb3J0IGludGVyZmFjZSBJQnV0dG9uU3R5bGUge1xuICAgIHJhdGlvOiBudW1iZXI7XG4gICAgYmFzZTogc3RyaW5nO1xuICAgIGV4dDogc3RyaW5nO1xuICAgIG5vQ29ubmVjdGVkPzogYm9vbGVhbjtcbiAgICBub0xhc3RMb2dpbj86IGJvb2xlYW47XG4gICAgbWluU2l6ZTogbnVtYmVyO1xuICAgIG1heFNpemU6IG51bWJlcjtcbiAgICBkb250VXNlU3ByaXRlcz86IGJvb2xlYW47XG59XG5leHBvcnQgdmFyIEJ1dHRvblN0eWxlczogSU1hcDxJQnV0dG9uU3R5bGU+ID0ge1xuICAgIGZ1bGxsb2dvY29sb3JlZDoge1xuICAgICAgICByYXRpbzogMi42LFxuICAgICAgICBiYXNlOiAnRnVsbExvZ29Db2xvcmVkLycsXG4gICAgICAgIGV4dDogJy5wbmcnLFxuICAgICAgICBub0Nvbm5lY3RlZDogdHJ1ZSxcbiAgICAgICAgbWluU2l6ZTogMTUsXG4gICAgICAgIG1heFNpemU6IDY1LFxuICAgIH0sXG4gICAgZnVsbGxvZ286IHtcbiAgICAgICAgcmF0aW86IDIuNixcbiAgICAgICAgYmFzZTogJ0Z1bGxMb2dvLycsXG4gICAgICAgIGV4dDogJy5wbmcnLFxuICAgICAgICBub0Nvbm5lY3RlZDogdHJ1ZSxcbiAgICAgICAgbWluU2l6ZTogMTUsXG4gICAgICAgIG1heFNpemU6IDY1LFxuICAgIH0sXG4gICAgc2lnbmlud2l0aDoge1xuICAgICAgICByYXRpbzogNy4wNSxcbiAgICAgICAgYmFzZTogJ1NpZ25JbldpdGgvJyxcbiAgICAgICAgZXh0OiAnLnBuZycsXG4gICAgICAgIG5vTGFzdExvZ2luOiB0cnVlLFxuICAgICAgICBub0Nvbm5lY3RlZDogdHJ1ZSxcbiAgICAgICAgbWluU2l6ZTogMjAsXG4gICAgICAgIG1heFNpemU6IDYwLFxuICAgIH0sXG4gICAgc3RhbmRhcmQ6IHtcbiAgICAgICAgcmF0aW86IDEsXG4gICAgICAgIGJhc2U6ICcnLFxuICAgICAgICBleHQ6ICcucG5nJyxcbiAgICAgICAgbWluU2l6ZTogMTUsXG4gICAgICAgIG1heFNpemU6IDY1LFxuICAgIH0sXG59O1xuIiwiZXhwb3J0IGNvbnN0IFBST1ZJREVSX0NMSUNLX1RIUk9UVExFID0gMzAwMDsiLCJleHBvcnQgY2xhc3MgQ29udGFpbmVyQmFzZSB7XG4gICAgcHVibGljIGdldENoaWxkQnlDc3NDbGFzcyhodG1sRWxlbWVudDogSFRNTEVsZW1lbnQsIHNlbGVjdG9yKTogSFRNTEVsZW1lbnQge1xuICAgICAgICB2YXIgc2VsZWN0aW9uID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyhodG1sRWxlbWVudCwgc2VsZWN0b3IpO1xuXG4gICAgICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoKSByZXR1cm4gc2VsZWN0aW9uWzBdO1xuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElQcm92aWRlcnNHcmlkRGltZW5zaW9ucyB9IGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9JbnRlcmZhY2VzJztcbmltcG9ydCB7IExvZ2luUGx1Z2luLCBQbHVnaW5Nb2RlIH0gZnJvbSAnc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL0xvZ2luUGx1Z2luJztcblxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbnRhaW5lciB7XG4gICAgLypnaWd5YS1sb2dpbi1mb290ZXItZWRpdC1saW5rKi9cblxuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwbHVnaW46IExvZ2luUGx1Z2luLCBwcml2YXRlIGdyaWRTaXplOiBJUHJvdmlkZXJzR3JpZERpbWVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHBsdWdpbi5nZXRUZW1wbGF0ZXMoKS5mb290ZXI7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucGx1Z2luLmNyZWF0ZUVsZW1lbnRGcm9tSFRNTFN0cmluZyh0aGlzLnRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SHRtbEVsZW1lbnQoKSB7XG4gICAgICAgIHZhciBmb290ZXJPcHRpb25zID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgICAgICAgdmFyIGxhc3RPcHRpb246IHN0cmluZztcbiAgICAgICAgdmFyIHBhcnRIdG1sOiBzdHJpbmc7XG5cbiAgICAgICAgdmFyIGRpdmlkZXIgPSB0aGlzLnBsdWdpbi5nZXRUZW1wbGF0ZXMoKS5mb290ZXJEaXZpZGVyO1xuXG4gICAgICAgIGlmICh0aGlzLnBsdWdpbi5zaG93RWRpdCkge1xuICAgICAgICAgICAgcGFydEh0bWwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLnBsdWdpbi5nZXRUZW1wbGF0ZXMoKS5mb290ZXJFZGl0LCB7XG4gICAgICAgICAgICAgICAgZWRpdDogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnZWRpdCcpLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChmb290ZXJPcHRpb25zLmxlbmd0aCkgbGFzdE9wdGlvbiArPSBkaXZpZGVyICsgcGFydEh0bWw7XG4gICAgICAgICAgICBlbHNlIGxhc3RPcHRpb24gPSBwYXJ0SHRtbDtcblxuICAgICAgICAgICAgZm9vdGVyT3B0aW9ucy51bnNoaWZ0KGxhc3RPcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucGx1Z2luLnNob3dUZXJtcykge1xuICAgICAgICAgICAgcGFydEh0bWwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLnBsdWdpbi5nZXRUZW1wbGF0ZXMoKS5mb290ZXJUZXJtcywge1xuICAgICAgICAgICAgICAgIHRlcm1zOiB0aGlzLnBsdWdpbi5nZXRUZXh0KCd0ZXJtcycpLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChmb290ZXJPcHRpb25zLmxlbmd0aCkgbGFzdE9wdGlvbiArPSBkaXZpZGVyICsgcGFydEh0bWw7XG4gICAgICAgICAgICBlbHNlIGxhc3RPcHRpb24gPSBwYXJ0SHRtbDtcblxuICAgICAgICAgICAgZm9vdGVyT3B0aW9ucy51bnNoaWZ0KGxhc3RPcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvb3Rlck9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSAnJztcblxuICAgICAgICAgICAgZ2lneWEudXRpbHMuYXJyYXkuc29tZShmb290ZXJPcHRpb25zLCBvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgIG9wdGlvbiA9ICc8c3Bhbj4nICsgb3B0aW9uICsgJzwvc3Bhbj4nO1xuICAgICAgICAgICAgICAgIHZhciBzaXplID0gZ2lneWEudXRpbHMuRE9NLmdldEhUTUxTaXplKG9wdGlvbiwgdGhpcy5wbHVnaW4udWlDb250YWluZXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNpemUudyA8PSB0aGlzLmdyaWRTaXplLnRvdGFsV2lkdGhJbmNsdWRpbmdQYWdlcikge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbiA9IG9wdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgICAgICAgIHZhciBmb290ZXJFbGVtZW50ID0gdGhpcy5wbHVnaW4uY3JlYXRlRWxlbWVudEZyb21IVE1MU3RyaW5nKHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9vdGVyRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbHVnaW4uc2hvd0VkaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVkaXRFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyhmb290ZXJFbGVtZW50LCAnZ2lneWEtbG9naW4tZm9vdGVyLWVkaXQtbGluaycpWzBdO1xuXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGVkaXRFbGVtZW50LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGRpbmcgdGhlIEV2ZW50IHRvIG9wZW4gdGhlIGVkaXQgY29ubmVjdGlvbnMgZGlhbG9nLlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IGdpZ3lhLnV0aWxzLm9iamVjdC5jbG9uZVBhcmFtc0ZvclBsdWdpbih0aGlzLnBsdWdpbi5wYXJhbXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgcGFyYW1zLmNvbnRhaW5lcklEO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHBhcmFtcy53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXMuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5zb2NpYWxpemUuc2hvd0VkaXRDb25uZWN0aW9uc1VJKHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRTaG93V2hhdHNUaGlzKGVsbTogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMucGx1Z2luLnBhcmFtcy5zaG93V2hhdHNUaGlzICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdpcGhvbmUnKSA9PSAtMSkge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lckRpbWVuc2lvbnMgPSB0aGlzLnBsdWdpbi5nZXRDb250YWluZXJEaW1lbnNpb25zKCk7XG4gICAgICAgICAgICB2YXIgd2hhdHNUaGlzVGV4dDtcblxuICAgICAgICAgICAgaWYgKHRoaXMucGx1Z2luLnBhcmFtcy53aGF0c1RoaXNUZXh0KSB7XG4gICAgICAgICAgICAgICAgd2hhdHNUaGlzVGV4dCA9IHRoaXMucGx1Z2luLnBhcmFtcy53aGF0c1RoaXNUZXh0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXdoYXRzVGhpc1RleHQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbHVnaW4ucGx1Z2luTW9kZSA9PT0gUGx1Z2luTW9kZS5Mb2dpbikge1xuICAgICAgICAgICAgICAgICAgICB3aGF0c1RoaXNUZXh0ID0gdGhpcy5wbHVnaW4uZ2V0VGV4dCgneW91X2Nhbl91c2VfeW91cl9hY2NvdW50X2Zyb21fb25lX29mX3RoZXNlX3NlcnZpY2VzX3RvX3NpZ25faW50b190aGVfc2l0ZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdoYXRzVGhpc1RleHQgPSB0aGlzLnBsdWdpbi5nZXRUZXh0KCdhZGRfbW9yZV9jb25uZWN0aW9uc190b195b3VyX2FjY291bnQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB3aGF0c1RoaXNIdG1sID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5wbHVnaW4uZ2V0VGVtcGxhdGVzKCkuZm9vdGVyQnJhbmRXaGF0SXNUaGlzLCB7XG4gICAgICAgICAgICAgICAgd2hhdHN0aGlzdGV4dDogZ2lneWEudXRpbHMuc2FuaXRpemUuc2FuaXRpemVIVE1MKHdoYXRzVGhpc1RleHQpLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0aW5nIFRoZSBFbGVtZW50XG4gICAgICAgICAgICB2YXIgd2hhdHNUaGlzRWxtbmVudCA9IHRoaXMucGx1Z2luLmNyZWF0ZUVsZW1lbnRGcm9tSFRNTFN0cmluZyh3aGF0c1RoaXNIdG1sKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnVpQ29udGFpbmVyLmFwcGVuZENoaWxkKHdoYXRzVGhpc0VsbW5lbnQpO1xuXG4gICAgICAgICAgICAvLyBDYWNsdWxhdGUgVGhlIFBvc2l0aW9uIE9mIFRoZSBDb250cm9sXG4gICAgICAgICAgICB2YXIgcG9zID0gZ2lneWEuZ2xvYmFsLl9HZXRFbGVtZW50UG9zKHRoaXMucGx1Z2luLnVpQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHdoYXRzVGhpc0VsbW5lbnQuc3R5bGUuekluZGV4ID0gZ2lneWEudXRpbHMuRE9NLmdldE5leHRaSW5kZXgoKS50b1N0cmluZygpO1xuXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihlbG0sICdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2hhdHNUaGlzRWxtbmVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihlbG0sICdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB3aGF0c1RoaXNFbG1uZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IHZhciBhcnJvdyA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2Fycm93Lmh0bWwnKTtcbmV4cG9ydCB2YXIgZm9vdGVyID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvZm9vdGVyLmh0bWwnKTtcbmV4cG9ydCB2YXIgZm9vdGVyQnJhbmRMb25nID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvZm9vdGVyQnJhbmRMb25nLmh0bWwnKTtcbmV4cG9ydCB2YXIgZm9vdGVyQnJhbmRTaG9ydCA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2Zvb3RlckJyYW5kU2hvcnQuaHRtbCcpO1xuZXhwb3J0IHZhciBmb290ZXJCcmFuZFdoYXRJc1RoaXMgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy9mb290ZXJCcmFuZFdoYXRJc1RoaXMuaHRtbCcpO1xuZXhwb3J0IHZhciBmb290ZXJEaXZpZGVyID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvZm9vdGVyRGl2aWRlci5odG1sJyk7XG5leHBvcnQgdmFyIGZvb3RlckVkaXQgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy9mb290ZXJFZGl0Lmh0bWwnKTtcbmV4cG9ydCB2YXIgZm9vdGVyVGVybXMgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy9mb290ZXJUZXJtcy5odG1sJyk7XG5leHBvcnQgdmFyIGhlYWRlciA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzL2hlYWRlci5odG1sJyk7XG5leHBvcnQgdmFyIGxvZ2luID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvbG9naW4uaHRtbCcpO1xuZXhwb3J0IHZhciBwcm92aWRlckltYWdlID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvcHJvdmlkZXJJbWFnZS5odG1sJyk7XG5leHBvcnQgdmFyIHVpQ29udGFpbmVyID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvdWlDb250YWluZXIuaHRtbCcpO1xuZXhwb3J0IHZhciB3ZWxjb21lID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvd2VsY29tZS5odG1sJyk7XG5leHBvcnQgdmFyIHdlbGNvbWVCdWJibGUgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy93ZWxjb21lQnViYmxlLmh0bWwnKTtcbmV4cG9ydCB2YXIgd2VsY29tZUdyZWV0aW5nID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMvd2VsY29tZUdyZWV0aW5nLmh0bWwnKTtcbmV4cG9ydCB2YXIgd2VsY29tZVNpZ25JbkxpbmsgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy93ZWxjb21lU2lnbkluTGluay5odG1sJyk7XG4iLCJleHBvcnQgdmFyIGllOHBhdGNoID0gcmVxdWlyZSgnLi9jc3MvaWU4cGF0Y2guY3NzJyk7XG5leHBvcnQgdmFyIGllUGF0Y2ggPSByZXF1aXJlKCcuL2Nzcy9pZVBhdGNoLmNzcycpO1xuZXhwb3J0IHZhciBtYWluID0gcmVxdWlyZSgnLi9jc3MvbWFpbi5jc3MnKTtcbiIsImltcG9ydCB7SVByb3ZpZGVyc0dyaWREaW1lbnNpb25zLCBJUHJvdmlkZXJJZGVudGl0eUluZm9ybWF0aW9ufSBmcm9tICdzcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvSW50ZXJmYWNlcyc7XG5pbXBvcnQge0NvbnRhaW5lckJhc2V9IGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9Db250YWluZXJCYXNlJztcbmltcG9ydCB7XG4gICAgTG9naW5QbHVnaW4sXG4gICAgTmF2aWdhdGlvbkRpcmVjdGlvbixcbiAgICBQbHVnaW5Nb2RlLFxuICAgIExhc3RMb2dpbkluZGljYXRpb25cbn0gZnJvbSAnc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL0xvZ2luUGx1Z2luJztcbmltcG9ydCB7VXRpbHN9IGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9VdGlscyc7XG5pbXBvcnQgKiBhcyBfdGhyb3R0bGUgZnJvbSAnbG9kYXNoLnRocm90dGxlJztcbmltcG9ydCB7UFJPVklERVJfQ0xJQ0tfVEhST1RUTEV9IGZyb20gXCIuL0NvbnN0c1wiO1xuXG5leHBvcnQgY2xhc3MgTG9naW5Db250YWluZXIgZXh0ZW5kcyBDb250YWluZXJCYXNlIHtcbiAgICBwcml2YXRlIF9tYWluRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfY29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfbGVmdEFycm93OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIF9yaWdodEFycm93OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIF9sb2dpbkNvbnRhaW5lcnM6IEFycmF5PEhUTUxFbGVtZW50PjtcbiAgICBwcml2YXRlIF9wcm92aWRlcnNDb250YWluZXI6IEhUTUxFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZTogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBFbGVtZW50c1NlbGVjdG9yID0ge1xuICAgICAgICBtYWluOiAnZ2lneWEtbG9naW4tcHJvdmlkZXJzJyxcbiAgICAgICAgY29udGFpbmVyOiAnZ2lneWEtbG9naW4tcHJvdmlkZXJzLWNvbnRhaW5lcicsXG4gICAgICAgIGFycm93TGVmdDogJ2dpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1sZWZ0JyxcbiAgICAgICAgYXJyb3dSaWdodDogJ2dpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1yaWdodCcsXG4gICAgICAgIHByb3ZpZGVyc0NvbnRhaW5lcjogJ2dpZ3lhLWxvZ2luLXByb3ZpZGVycy1saXN0LWNvbnRhaW5lcicsXG4gICAgICAgIGNvbm5lY3RlZFByb3ZpZGVyQ2xhc3M6ICdnaWd5YS1wcm92aWRlci1jb25uZWN0ZWQnLFxuICAgICAgICBwcm92aWRlck5hbWVBdHRyOiAnZGF0YS1naWd5YS1wcm92aWRlcidcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwbHVnaW46IExvZ2luUGx1Z2luLCBwcml2YXRlIGdyaWRTaXplOiBJUHJvdmlkZXJzR3JpZERpbWVuc2lvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5wbHVnaW4uZ2V0VGVtcGxhdGVzKCkubG9naW47XG4gICAgfVxuXG4gICAgcHVibGljIGdldEh0bWxFbGVtZW50KCkge1xuICAgICAgICAvLyBpbml0IHRoZSB0ZW1wbGF0ZXM6XG4gICAgICAgIHRoaXMuX21haW5FbGVtZW50ID0gdGhpcy5wbHVnaW4uY3JlYXRlRWxlbWVudEZyb21IVE1MU3RyaW5nKHRoaXMudGVtcGxhdGUpO1xuXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSB0aGlzLmdldENoaWxkQnlDc3NDbGFzcyh0aGlzLl9tYWluRWxlbWVudCwgdGhpcy5FbGVtZW50c1NlbGVjdG9yLmNvbnRhaW5lcik7XG5cbiAgICAgICAgdGhpcy5fcHJvdmlkZXJzQ29udGFpbmVyID0gdGhpcy5nZXRDaGlsZEJ5Q3NzQ2xhc3ModGhpcy5fY29udGFpbmVyRWxlbWVudCwgdGhpcy5FbGVtZW50c1NlbGVjdG9yLnByb3ZpZGVyc0NvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gQ3JlYXRpbmcgVGhlIEhUTUwgRWxlbWVudHNcbiAgICAgICAgdGhpcy5fbG9naW5Db250YWluZXJzID0gdGhpcy5jcmVhdGVDb250YWluZXJzKCk7XG5cbiAgICAgICAgdGhpcy5fY29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCA9ICcxMDAlJzsgLy90aGlzLmdyaWRTaXplLnRvdGFsV2lkdGhJbmNsdWRpbmdQYWdlciArICdweCc7XG4gICAgICAgIHRoaXMuX3Byb3ZpZGVyc0NvbnRhaW5lci5zdHlsZS53aWR0aCA9IHRoaXMuZ3JpZFNpemUud2lkdGggKyAncHgnO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fbG9naW5Db250YWluZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9wcm92aWRlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5fbG9naW5Db250YWluZXJzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF0dGFjaGluZyB0aGUgaW5uZXIgQ29udGFpbmVycyAoUGFnZ2VkIFByb3ZpZGVyIERhdGEpXG4gICAgICAgIHRoaXMuc2V0UGFnaW5nKHRoaXMuX2xvZ2luQ29udGFpbmVycy5sZW5ndGgpO1xuXG4gICAgICAgIC8vIFNldHRpbmcgQmVoYXZpdWVyXG5cbiAgICAgICAgLy8gQXR0YWNoIEV2ZW50c1xuICAgICAgICB0aGlzLmF0dGFjaEV2ZW50cygpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9tYWluRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFBhZ2luZyhudW1PZkNvbnRhaW5lcnM6IG51bWJlcikge1xuICAgICAgICB2YXIgc2hvdWxkQWRkUGFnaW5nQXJyb3dzID0gbnVtT2ZDb250YWluZXJzID4gMTtcblxuICAgICAgICB0aGlzLl9sZWZ0QXJyb3cgPSB0aGlzLmdldENoaWxkQnlDc3NDbGFzcyh0aGlzLl9jb250YWluZXJFbGVtZW50LCB0aGlzLkVsZW1lbnRzU2VsZWN0b3IuYXJyb3dMZWZ0KTtcbiAgICAgICAgdGhpcy5fcmlnaHRBcnJvdyA9IHRoaXMuZ2V0Q2hpbGRCeUNzc0NsYXNzKHRoaXMuX2NvbnRhaW5lckVsZW1lbnQsIHRoaXMuRWxlbWVudHNTZWxlY3Rvci5hcnJvd1JpZ2h0KTtcblxuICAgICAgICAvLyBhZGRpbmcgcGFnZ2luYXRpb24gYXJyb3dzLlxuICAgICAgICBpZiAoc2hvdWxkQWRkUGFnaW5nQXJyb3dzKSB7XG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQ2xhc3NUb0VsZW1lbnQodGhpcy5fbGVmdEFycm93LCAnZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LWRpc2FibGVkJyk7XG4gICAgICAgICAgICBpZiAodGhpcy5wbHVnaW4ucGFnaW5nQnV0dG9uU3R5bGUuZ2V0U3R5bGVOYW1lKHRoaXMucGx1Z2luKSA9PSAnZmxvYXRpbmcnKSB7XG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KHRoaXMuX2xlZnRBcnJvdywgJ2dpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXItZmxvYXRpbmctZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGFycm93Q2xhc3MgPSB0aGlzLnBsdWdpbi5wYWdpbmdCdXR0b25TdHlsZS5nZXRTdHlsZUNsYXNzKHRoaXMucGx1Z2luKTtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudCh0aGlzLl9sZWZ0QXJyb3csIGFycm93Q2xhc3MpO1xuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KHRoaXMuX3JpZ2h0QXJyb3csIGFycm93Q2xhc3MpO1xuXG4gICAgICAgICAgICB2YXIgYXJyb3dMZWZ0SHRtbEVsZW1lbnQgPSBVdGlscy5jcmVhdGVFbGVtZW50RnJvbUhUTUxTdHJpbmcoXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy5wbHVnaW4uZ2V0VGVtcGxhdGVzKCkuYXJyb3csIHtcbiAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg6IHRoaXMucGx1Z2luLnBhcmFtcy50YWJJbmRleCB8fCAnLTEnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1ByZXZpb3VzIFByb3ZpZGVycycsIC8vIFRPRE86IExvY2FsaXphdGlvbiBcIlByZXZpb3VzIFByb3ZpZGVyc1wiXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdmFyIGFycm93UmlnaHRIdG1sRWxlbWVudCA9IFV0aWxzLmNyZWF0ZUVsZW1lbnRGcm9tSFRNTFN0cmluZyhcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLnBsdWdpbi5nZXRUZW1wbGF0ZXMoKS5hcnJvdywge1xuICAgICAgICAgICAgICAgICAgICB0YWJpbmRleDogdGhpcy5wbHVnaW4ucGFyYW1zLnRhYkluZGV4IHx8ICctMScsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTW9yZSBQcm92aWRlcnMnLCAvLyBUT0RPOiBMb2NhbGl6YXRpb24gXCJNb3JlIFByb3ZpZGVyc1wiXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB0aGlzLl9sZWZ0QXJyb3cuYXBwZW5kQ2hpbGQoYXJyb3dMZWZ0SHRtbEVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5fcmlnaHRBcnJvdy5hcHBlbmRDaGlsZChhcnJvd1JpZ2h0SHRtbEVsZW1lbnQpO1xuXG4gICAgICAgICAgICB0aGlzLnNldE5hdmlnYXRpb25BcnJvd1N0YXRlKE5hdmlnYXRpb25EaXJlY3Rpb24uUHJldiwgdHJ1ZSk7IC8vIGRpc2FibGUgdGhlIGxlZnQgKG5leHQpIGFycm93IG9uIHN0YXJ0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBtYWtlIGFycm93cyBpbnZpc2libGVcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudCh0aGlzLl9sZWZ0QXJyb3csICduby1hcnJvd3MnKTtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudCh0aGlzLl9yaWdodEFycm93LCAnbm8tYXJyb3dzJyk7XG5cbiAgICAgICAgICAgIC8vIG1ha2UgdGhlIGNvbnRhaW5lciBhcyB3aWRlIGFzIHRoZSBwcm92aWRlcnMgY29udGFpbmVyLCBzbyBpdCdsbCBjZW50ZXIgcHJvcGVybHkuXG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXJFbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy5fcHJvdmlkZXJzQ29udGFpbmVyLnN0eWxlLndpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IHRoZSBmaXJzdCBjb250YWluZXIgYXMgdGhlIGRlZmF1bHQgc2hvd2luZyBjb250YWluZXJcbiAgICAgICAgaWYgKHRoaXMuX2xvZ2luQ29udGFpbmVyc1swXSkgdGhpcy5fbG9naW5Db250YWluZXJzWzBdLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2lneWEtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGV4cGFuZEluQ29udGFpbmVyQWZ0ZXJSZW5kZXIoKSB7XG4gICAgICAgIHZhciBhcnJvd1BhcmVudFdpZHRoID0gTWF0aC5jZWlsKCh0aGlzLl9jb250YWluZXJFbGVtZW50Lm9mZnNldFdpZHRoIC0gdGhpcy5fcHJvdmlkZXJzQ29udGFpbmVyLm9mZnNldFdpZHRoKSAvIDIpO1xuICAgICAgICBpZiAoYXJyb3dQYXJlbnRXaWR0aCA8IDApIGFycm93UGFyZW50V2lkdGggPSAwO1xuXG4gICAgICAgIHZhciBhcnJvd1BhcmVudFdpZHRoSW5QeCA9IGFycm93UGFyZW50V2lkdGggKyAncHgnO1xuXG4gICAgICAgIC8vIFNvIGFycm93IHBhcmVudCBjb250YWluZXIgd2lsbCBleHBhbmQgaW4gaXRzIGNvbnRhaW5lci5cbiAgICAgICAgdGhpcy5fbGVmdEFycm93LnN0eWxlLndpZHRoID0gdGhpcy5fcmlnaHRBcnJvdy5zdHlsZS53aWR0aCA9IGFycm93UGFyZW50V2lkdGhJblB4O1xuXG4gICAgICAgIC8vIFNvIGFycm93IGltYWdlIHdpbGwgb3ZlcmZsb3cgaWYgbmVlZGVkLlxuICAgICAgICB0aGlzLl9sZWZ0QXJyb3cuc3R5bGUubWF4V2lkdGggPSB0aGlzLl9yaWdodEFycm93LnN0eWxlLm1heFdpZHRoID0gYXJyb3dQYXJlbnRXaWR0aEluUHg7XG5cbiAgICAgICAgLy8gc2V0dGluZyB0aGUgbWFpbiBlbGVtZW50IGZvciBzdGFydGluZyBoZWlnaHQsIHNvIGNvbnRlbnQgd2lsbCBzdGF5IGNlbnRlcmVkIHdoaWxlIHBhZ2luZyAobWluaW11bSBpcyBvbmUgYnV0dG9uJ3MgaGVpZ2h0KS5cbiAgICAgICAgdGhpcy5fbWFpbkVsZW1lbnQuc3R5bGUuaGVpZ2h0ID1cbiAgICAgICAgICAgIE1hdGgubWF4KHRoaXMuX2NvbnRhaW5lckVsZW1lbnQub2Zmc2V0SGVpZ2h0LCB0aGlzLnBsdWdpbi5idXR0b25IZWlnaHQgKyAyICogdGhpcy5wbHVnaW4ucGx1Z2luQ29uZmlnLnJvd1NwYWNpbmcpICsgJ3B4JztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUNvbnRhaW5lcnMoKSB7XG4gICAgICAgIHZhciBjb250YWluZXJzID0gW107XG5cbiAgICAgICAgLy8gQXJyYXkgb2YgQXJyYXkgb2YgcHJvdmlkZXJzIGZvciBlYWNoXG4gICAgICAgIHZhciBwcm92aWRlcnNHcm91cHMgPSB0aGlzLmdldFByb3ZpZGVyc0dyb3Vwcyh0aGlzLmdyaWRTaXplKTtcblxuICAgICAgICAvLyBJdGVyYXRpbmcgb3ZlciB0aGUgcHJvdmlkZXJzIGFuZCBidWlsZCB0aGUgaHRtbCBvZiB0aGUgY29udGFpbmVyc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3ZpZGVyc0dyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gc2V0IHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBjb250YWluZXJcbiAgICAgICAgICAgIHZhciBwcm92aWRlckNlbGxzID0gdGhpcy5nZXRQcm92aWRlcnNDZWxscyhwcm92aWRlcnNHcm91cHNbaV0pO1xuXG4gICAgICAgICAgICAvLyBzcGxpdCB0aGUgY2VsbHMgaW50byByb3dzXG4gICAgICAgICAgICB2YXIgY3VyQ29udGFpbmVyUm93cyA9IHRoaXMuZ2V0R3JvdXBQcm92aWRlcnNSb3dzKHByb3ZpZGVyQ2VsbHMsIHRoaXMuZ3JpZFNpemUucm93cywgdGhpcy5ncmlkU2l6ZS5jb2x1bW5zKTtcblxuICAgICAgICAgICAgLy8gU2V0dGluZyBUaGUgQ29udGFpbmVyIG9mIHRoZSBSb3dzXG4gICAgICAgICAgICB2YXIgcENvbnRhaW5lciA9IHRoaXMuY3JlYXRlRWxlbW5ldEJsb2NrKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6ICdnaWd5YS1sb2dpbi1wcm92aWRlcnMtbGlzdCcsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gdGhlIExpc3QgSXRlbSBGb3IgVGhlIE5hdmlnYXRpb24gLSBXcmFwcGVyIENvbnRhaW5lclxuICAgICAgICAgICAgdmFyIHBDb250YWluZXJMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IGN1ckNvbnRhaW5lclJvd3MubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcm93RWxlbWVudCA9IHRoaXMuY3JlYXRlRWxlbW5ldEJsb2NrKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnZ2lneWEtbG9naW4tcHJvdmlkZXItcm93JyxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIHJJdGVtID0gMDsgckl0ZW0gPCBjdXJDb250YWluZXJSb3dzW3JdLmxlbmd0aDsgckl0ZW0rKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvdmlkZXJTcGFuID0gY3VyQ29udGFpbmVyUm93c1tyXVtySXRlbV0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHJvd0VsZW1lbnQuYXBwZW5kQ2hpbGQocHJvdmlkZXJTcGFuKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBsaW5lIGlzIGluIG9yZGVyIHRvIGRpc3BsYXkgdGhlIHJpZ2h0IHNwYWNlIGJldHdlZW4gdGhlIHJvd3MuXG4gICAgICAgICAgICAgICAgICAgIHJvd0VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gcHJvdmlkZXJTcGFuLnN0eWxlLmhlaWdodDtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgZm9sbG93aW5nIHR3byBsaW5lcyBhcmUgaW4gb3JkZXIgdG8gbWFrZSBzdXJlIHRoZSBsYXN0IHByb3ZpZG9yIGluIHJvdyBkb2Vzbid0IGhhdmUgbWFyZ2luZS5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3RTcGFuSW5Sb3cgPSBjdXJDb250YWluZXJSb3dzW3JdW2N1ckNvbnRhaW5lclJvd3Nbcl0ubGVuZ3RoIC0gMV0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RTcGFuSW5Sb3cuc3R5bGVbJ21hcmdpbi1yaWdodCddID0gJzAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvd0VsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcENvbnRhaW5lckxpc3RJdGVtLmFwcGVuZENoaWxkKHBDb250YWluZXIpO1xuICAgICAgICAgICAgY29udGFpbmVycy5wdXNoKHBDb250YWluZXJMaXN0SXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29udGFpbmVycztcbiAgICB9XG5cbiAgICBwcml2YXRlIGF0dGFjaEV2ZW50cygpIHtcbiAgICAgICAgdmFyIGhhc1BhZ2luZyA9IHRoaXMuX2xvZ2luQ29udGFpbmVycy5sZW5ndGggPiAxO1xuXG4gICAgICAgIC8vIE5hdmlnYXRpb24gRXZlbnRzXG4gICAgICAgIGlmIChoYXNQYWdpbmcpIHtcbiAgICAgICAgICAgIHZhciBhcnJvd0xlZnQgPSB0aGlzLmdldENoaWxkQnlDc3NDbGFzcyh0aGlzLl9jb250YWluZXJFbGVtZW50LCB0aGlzLkVsZW1lbnRzU2VsZWN0b3IuYXJyb3dMZWZ0KTtcbiAgICAgICAgICAgIHZhciBhcnJvd1JpZ2h0ID0gdGhpcy5nZXRDaGlsZEJ5Q3NzQ2xhc3ModGhpcy5fY29udGFpbmVyRWxlbWVudCwgdGhpcy5FbGVtZW50c1NlbGVjdG9yLmFycm93UmlnaHQpO1xuXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihhcnJvd1JpZ2h0LCAnY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZU5hdmlnYXRpb25TdGF0ZShOYXZpZ2F0aW9uRGlyZWN0aW9uLk5leHQpO1xuXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmRpc2FibGVEZWZhdWx0RXZlbnRIYW5kbGluZyhlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihhcnJvd0xlZnQsICdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlTmF2aWdhdGlvblN0YXRlKE5hdmlnYXRpb25EaXJlY3Rpb24uUHJldik7XG5cbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uZGlzYWJsZURlZmF1bHRFdmVudEhhbmRsaW5nKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcm92aWRlcnMgQnV0dG9ucyBFdmVudHNcbiAgICAgICAgbGV0IHByb3ZpZGVyc0J1dHRvbnMgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKFxuICAgICAgICAgICAgdGhpcy5nZXRDaGlsZEJ5Q3NzQ2xhc3ModGhpcy5fY29udGFpbmVyRWxlbWVudCwgdGhpcy5FbGVtZW50c1NlbGVjdG9yLnByb3ZpZGVyc0NvbnRhaW5lciksXG4gICAgICAgICAgICAnZ2lneWEtbG9naW4tcHJvdmlkZXInLFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGNsaWNrRXZlbnRIYW5kbGVyID0gX3Rocm90dGxlKChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5vblByb3ZpZGVyQ2xpY2tIYW5kbGVyKGUpO1xuICAgICAgICB9LCBQUk9WSURFUl9DTElDS19USFJPVFRMRSwgeyd0cmFpbGluZyc6IGZhbHNlfSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm92aWRlcnNCdXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBidG5XcmFwcGVyID0gcHJvdmlkZXJzQnV0dG9uc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpZGVyTmFtZSA9IGJ0bldyYXBwZXIuZ2V0QXR0cmlidXRlKHRoaXMuRWxlbWVudHNTZWxlY3Rvci5wcm92aWRlck5hbWVBdHRyKTtcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpZGVyID0gZ2lneWEuXy5wcm92aWRlcnMuZ2V0UHJvdmlkZXJCeU5hbWUocHJvdmlkZXJOYW1lLCB0aGlzLnBsdWdpbi5wcm92aWRlcnMpO1xuICAgICAgICAgICAgY29uc3QgcElkZW50aXR5ID0gdGhpcy5wbHVnaW4uZ2V0SWRlbnRpdHlJbmZvRm9yUHJvdmlkZXIocHJvdmlkZXIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb25uZWN0aW9uQ29tcGxldGVkKHBJZGVudGl0eSkpIHtcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQ2xhc3NUb0VsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIGJ0bldyYXBwZXIucXVlcnlTZWxlY3RvcignYnV0dG9uLnRhYmJpbmctYnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRWxlbWVudHNTZWxlY3Rvci5jb25uZWN0ZWRQcm92aWRlckNsYXNzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoYnRuV3JhcHBlciwgJ2NsaWNrJywgY2xpY2tFdmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIHByaXZhdGUgZ2V0UHJvdmlkZXJzQ2VsbHMocHJvdmlkZXJzR3JvdXApIHtcbiAgICAgICAgdmFyIHByb3ZpZGVyQ2VsbHMgPSBbXTtcblxuICAgICAgICAvLyBJdGVyYXRpbmcgb3ZlciBhbGwgdGhlIHByb3ZpZGVycyBpbiB0aGUgY3VycmVudCBjb250YWluZXJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwcm92aWRlcnNHcm91cC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgLy8gc2V0IHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBwcm92aWRlclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRQcm92aWRlciA9IHByb3ZpZGVyc0dyb3VwW2pdO1xuXG4gICAgICAgICAgICAvLyBGaW5kIEluZGV0aXR5LlxuICAgICAgICAgICAgdmFyIHByb3ZpZGVySWRlbnRpdHlJbmZvcm1hdGlvbiA9IHRoaXMucGx1Z2luLmdldElkZW50aXR5SW5mb0ZvclByb3ZpZGVyKGN1cnJlbnRQcm92aWRlcik7XG5cbiAgICAgICAgICAgIHZhciBwcm92aWRlckltYWdlID0gdGhpcy5nZXRQcm92aWRlckltYWdlKGN1cnJlbnRQcm92aWRlciwgcHJvdmlkZXJJZGVudGl0eUluZm9ybWF0aW9uKTtcblxuICAgICAgICAgICAgdmFyIHByb3ZpZGVyQ2VsbCA9IHRoaXMuY3JlYXRlRWxlbW5ldEJsb2NrKCdzcGFuJywge1xuICAgICAgICAgICAgICAgICdkYXRhLWdpZ3lhLXByb3ZpZGVyJzogY3VycmVudFByb3ZpZGVyLm5hbWUsXG4gICAgICAgICAgICAgICAgc3R5bGU6IFtcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoOicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLmJ1dHRvbldpZHRoLFxuICAgICAgICAgICAgICAgICAgICAncHg7JyxcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodDonLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5idXR0b25IZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICdweDsnLFxuICAgICAgICAgICAgICAgICAgICAnbWFyZ2luLXJpZ2h0OicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnBsdWdpbkNvbmZpZy5yb3dTcGFjaW5nLFxuICAgICAgICAgICAgICAgICAgICAncHg7JyxcbiAgICAgICAgICAgICAgICBdLmpvaW4oJycpLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAnZ2lneWEtbG9naW4tcHJvdmlkZXInLFxuICAgICAgICAgICAgICAgIGdpZ2lkOiBjdXJyZW50UHJvdmlkZXIubmFtZSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgc29jaWFsUHJvdmlkZXJCdXR0b24gPSB0aGlzLnBsdWdpbi5jcmVhdGVFbGVtZW50RnJvbUhUTUxTdHJpbmcocHJvdmlkZXJJbWFnZSk7XG4gICAgICAgICAgICBzb2NpYWxQcm92aWRlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdGhpcy5wbHVnaW4ucGFyYW1zLnRhYkluZGV4IHx8ICctMScpO1xuXG4gICAgICAgICAgICAvLyBUaGUgdG9vbHRpcCBuZWVkcyB0byBiZSBvbiB0aGUgZm9jdXNhYmxlIGVsZW1lbnQgKGluIHRoaXMgY2FzZSwgdGhlIGJ1dHRvbikgb3Igc2NyZWVuLXJlYWRlcnMgd2lsbCByZWFkIGl0IHR3aWNlLlxuICAgICAgICAgICAgaWYgKHRoaXMucGx1Z2luLnNob3dUb29sdGlwcykge1xuICAgICAgICAgICAgICAgIHNvY2lhbFByb3ZpZGVyQnV0dG9uLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBjdXJyZW50UHJvdmlkZXIuZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBmaXJzdFNvY2lhbEJ1dHRvbklkID0gY3VycmVudFByb3ZpZGVyLmRpc3BsYXlOYW1lICsgJ19idG4nO1xuICAgICAgICAgICAgc29jaWFsUHJvdmlkZXJCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGZpcnN0U29jaWFsQnV0dG9uSWQpO1xuICAgICAgICAgICAgc29jaWFsUHJvdmlkZXJCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCBgc29jaWFsLWJ1dHRvbnMtbG9naW4tY2FwdGlvbiAke2ZpcnN0U29jaWFsQnV0dG9uSWR9YCk7XG5cbiAgICAgICAgICAgIHByb3ZpZGVyQ2VsbC5hcHBlbmRDaGlsZChzb2NpYWxQcm92aWRlckJ1dHRvbik7XG4gICAgICAgICAgICBwcm92aWRlckNlbGxzLnB1c2gocHJvdmlkZXJDZWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvdmlkZXJDZWxscztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFByb3ZpZGVySW1hZ2UocHJvdmlkZXIsIHByb3ZpZGVySWRlbnRpdHlJbmZvcm1hdGlvbjogSVByb3ZpZGVySWRlbnRpdHlJbmZvcm1hdGlvbikge1xuICAgICAgICB2YXIgaXNSYXRpbmEgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHZhciBvQnV0dG9uID0gcHJvdmlkZXIuYnV0dG9uRGF0YTtcbiAgICAgICAgdmFyIGltZ0lkID0gKHByb3ZpZGVyLmltZ05hbWUgPyBwcm92aWRlci5pbWdOYW1lIDogcHJvdmlkZXIubmFtZSkgKyAnLSc7XG5cbiAgICAgICAgLy8gVVM6IDMzMzQzIC0gTGlua2VkSW4ncyB0cmFkZSBtYXJrIGZvciByZXRpbmEgZGlzcGxheVxuICAgICAgICBpZiAoaXNSYXRpbmEgJiYgcHJvdmlkZXIubmFtZSA9PSAnbGlua2VkaW4nICYmICh0aGlzLnBsdWdpbi5wYXJhbXMuYnV0dG9uU2l6ZSA+PSAxNSAmJiB0aGlzLnBsdWdpbi5wYXJhbXMuYnV0dG9uU2l6ZSA8PSAyNSkpIHtcbiAgICAgICAgICAgIHZhciBjb252ZW50aW9uTmFtZSA9XG4gICAgICAgICAgICAgICAgcHJvdmlkZXIubmFtZSArICdfJyArIHRoaXMucGx1Z2luLnBhcmFtcy5idXR0b25TaXplICogMiArIChwcm92aWRlci5uYW1lID09IHRoaXMucGx1Z2luLmxhc3RMb2dpblByb3ZpZGVyID8gJ19MYXN0TG9naW4nIDogJycpICsgJy5wbmcnO1xuICAgICAgICAgICAgdmFyIGltYWdlVXJsID0gYCR7dGhpcy5wbHVnaW4uaW1hZ2VCYXNlfS8ke3RoaXMucGx1Z2luLnN0eWxlUHJlc2V0LmJhc2V9LyR7Y29udmVudGlvbk5hbWV9YDtcblxuICAgICAgICAgICAgcmV0dXJuIGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMucGx1Z2luLmdldFRlbXBsYXRlcygpLnByb3ZpZGVySW1hZ2UsIHtcbiAgICAgICAgICAgICAgICBidXR0b25XaWR0aDogdGhpcy5wbHVnaW4uYnV0dG9uV2lkdGgsXG4gICAgICAgICAgICAgICAgYnV0dG9uSGVpZ2h0OiB0aGlzLnBsdWdpbi5idXR0b25IZWlnaHQsXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6IGltYWdlVXJsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPcGVuSUQgfHwgU2FtbCB8fCBvaWRjXG4gICAgICAgIGlmIChwcm92aWRlci5pc0N1c3RvbVByb3ZpZGVyICYmIG9CdXR0b24gJiYgb0J1dHRvbi5pY29uVVJMKSB7XG4gICAgICAgICAgICB2YXIgaWNvblVSTCA9IG9CdXR0b24uaWNvblVSTDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb25uZWN0aW9uQ29tcGxldGVkKHByb3ZpZGVySWRlbnRpdHlJbmZvcm1hdGlvbikpIHtcbiAgICAgICAgICAgICAgICBpZiAob0J1dHRvbi5jb25uZWN0ZWRJY29uVVJMKSBpY29uVVJMID0gb0J1dHRvbi5jb25uZWN0ZWRJY29uVVJMO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm92aWRlck5hbWUgPSBwcm92aWRlci5uYW1lIHx8ICcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RMb2dpblByb3ZpZGVyID0gdGhpcy5wbHVnaW4ubGFzdExvZ2luUHJvdmlkZXIgfHwgJyc7XG4gICAgICAgICAgICAgICAgaWYgKHByb3ZpZGVyTmFtZS50b0xvd2VyQ2FzZSgpID09IGxhc3RMb2dpblByb3ZpZGVyLnRvTG93ZXJDYXNlKCkpIGljb25VUkwgPSBvQnV0dG9uLmxhc3RMb2dpbkljb25VUkw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpY29uVVJMKVxuICAgICAgICAgICAgICAgIHJldHVybiBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLnBsdWdpbi5nZXRUZW1wbGF0ZXMoKS5wcm92aWRlckltYWdlLCB7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbldpZHRoOiB0aGlzLnBsdWdpbi5idXR0b25XaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uSGVpZ2h0OiB0aGlzLnBsdWdpbi5idXR0b25IZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOiBpY29uVVJMLFxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlcjogcHJvdmlkZXJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRvZ2dsZSAnQ29ubmVjdGVkJyBNb2RlIFZzICdMYXN0IExvZ2luJ1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb25uZWN0aW9uQ29tcGxldGVkKHByb3ZpZGVySWRlbnRpdHlJbmZvcm1hdGlvbikpIHtcbiAgICAgICAgICAgICAgICBpbWdJZCArPSAnY29ubmVjdGVkXyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLmxhc3RMb2dpbkluZGljYXRpb24gPT0gTGFzdExvZ2luSW5kaWNhdGlvbi5ib3JkZXIgJiZcbiAgICAgICAgICAgICAgICBwcm92aWRlci5uYW1lID09IHRoaXMucGx1Z2luLmxhc3RMb2dpblByb3ZpZGVyICYmXG4gICAgICAgICAgICAgICAgIXRoaXMucGx1Z2luLnN0eWxlUHJlc2V0Lm5vTGFzdExvZ2luXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpbWdJZCArPSAnbGFzdGxvZ2luXyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsdWdpbi5zcHJpdGVSZW5kZXJlci5sb2dpbkljb25zLmdldEhUTUwoaW1nSWQsIGZhbHNlLCB0aGlzLnBsdWdpbi5zdHlsZVByZXNldC5kb250VXNlU3ByaXRlcywgdW5kZWZpbmVkLCBwcm92aWRlci5kaXNwbGF5TmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7IC8vIE5vIGltYWdlIHRvIGRpc3BsYXlcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzQ29ubmVjdGlvbkNvbXBsZXRlZChwcm92aWRlcklkZW50aXR5OiBJUHJvdmlkZXJJZGVudGl0eUluZm9ybWF0aW9uKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsdWdpbi5wbHVnaW5Nb2RlID09PSBQbHVnaW5Nb2RlLkFkZENvbm5lY3Rpb24gJiZcbiAgICAgICAgICAgIChwcm92aWRlcklkZW50aXR5LmlzQ29ubmVjdGVkICYmIHByb3ZpZGVySWRlbnRpdHkuaGFzQWxsUmVxdWlyZWRQZXJtaXNzaW9ucykgJiZcbiAgICAgICAgICAgICF0aGlzLnBsdWdpbi5zdHlsZVByZXNldC5ub0Nvbm5lY3RlZFxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0R3JvdXBQcm92aWRlcnNSb3dzKGNlbGxzLCByb3dzLCBjb2xzKSB7XG4gICAgICAgIHZhciBncm91cFJvd3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBnUm93ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNvbHM7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBpZHggPSBpICogY29scyArIGo7XG4gICAgICAgICAgICAgICAgaWYgKGlkeCA+PSBjZWxscy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGdSb3cucHVzaChjZWxsc1tpZHhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyb3VwUm93cy5wdXNoKGdSb3cpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0dGluZyBUaGUgTGFzdCBJbmRleCBDbGFzcyBNYXJrZXJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cFJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBsYXN0SWR4ID0gZ3JvdXBSb3dzW2ldLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChsYXN0SWR4ID4gMCkge1xuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudChncm91cFJvd3NbaV1bbGFzdElkeCAtIDFdLCAnZ2lneWEtbG9naW4tcHJvdmlkZXItbGFzdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdyb3VwUm93cztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFByb3ZpZGVyc0dyb3VwcyhncmlkU2l6ZTogSVByb3ZpZGVyc0dyaWREaW1lbnNpb25zKTogQXJyYXk8YW55PiB7XG4gICAgICAgIHZhciBwcm92aWRlcnNQZXJDb250YWluZXIgPSBncmlkU2l6ZS5yb3dzICogZ3JpZFNpemUuY29sdW1ucztcblxuICAgICAgICB2YXIgbnVtT2ZDb250YWluZXJzID0gdGhpcy5wbHVnaW4ucHJvdmlkZXJzLmxlbmd0aCA9PT0gMCA/IDAgOiB0aGlzLnBsdWdpbi5wcm92aWRlcnMubGVuZ3RoIC8gcHJvdmlkZXJzUGVyQ29udGFpbmVyO1xuXG4gICAgICAgIGlmICghaXNGaW5pdGUobnVtT2ZDb250YWluZXJzKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdlcnJvcjogaW5maW5pdGUgbG9vcC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcm92aWRlckNvbnRhbmllcnMgPSBbXTtcblxuICAgICAgICAvLyBDcmVhdGluZyBUaGUgUHJvdmlkZXJzIENvbnRyYWluZXJzOlxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bU9mQ29udGFpbmVyczsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY3VyQ29udGFpbmVyID0gW107XG5cbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcHJvdmlkZXJzUGVyQ29udGFpbmVyOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaWR4ID0gaSAqIHByb3ZpZGVyc1BlckNvbnRhaW5lciArIGo7XG5cbiAgICAgICAgICAgICAgICBpZiAoaWR4ID49IHRoaXMucGx1Z2luLnByb3ZpZGVycy5sZW5ndGgpIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY3VyQ29udGFpbmVyLnB1c2godGhpcy5wbHVnaW4ucHJvdmlkZXJzW2lkeF0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm92aWRlckNvbnRhbmllcnMucHVzaChjdXJDb250YWluZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb3ZpZGVyQ29udGFuaWVycztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUVsZW1uZXRCbG9jayhlbGVtZW50VHlwZTogc3RyaW5nLCBhdHRyaWJ1dGVzPzogYW55LCBjb250ZW50Pzogc3RyaW5nKSB7XG4gICAgICAgIHZhciBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcblxuICAgICAgICBmb3IgKHZhciBhdHRyaWJ1dGUgaW4gYXR0cmlidXRlcykge1xuICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIGF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxtO1xuICAgIH1cblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBwcml2YXRlIGNoYW5nZU5hdmlnYXRpb25TdGF0ZShuRGlyZWN0aW9uOiBOYXZpZ2F0aW9uRGlyZWN0aW9uKSB7XG4gICAgICAgIC8vIHNldCB0aGUgZGlyZWN0aW9uIG9mIG1vdm1lbnQuXG4gICAgICAgIHZhciBpbmRleERpcmVjdGlvbiA9IG5EaXJlY3Rpb24gPT0gTmF2aWdhdGlvbkRpcmVjdGlvbi5OZXh0ID8gMSA6IC0xO1xuXG4gICAgICAgIHZhciBjdXJJbmRleCA9IGdpZ3lhLnV0aWxzLmFycmF5LmZpcnN0SW5kZXgodGhpcy5fbG9naW5Db250YWluZXJzLCBsaXN0Q29udGFpbmVyID0+IGdpZ3lhLnV0aWxzLkRPTS5pc0VsZW1lbnRDbGFzcyhsaXN0Q29udGFpbmVyLCAnZ2lneWEtYWN0aXZlJykpO1xuXG4gICAgICAgIC8vIGZpbmQgdGhlIHJlcXVlc3RlZCB0YXJnZXQgY29udGFpbmVyIGluZGV4IGJ5IHRoZSBkaXJlY3Rpb24uXG4gICAgICAgIHZhciB0YXJnZXRJbmRleCA9IGN1ckluZGV4ICsgaW5kZXhEaXJlY3Rpb247XG5cbiAgICAgICAgdmFyIGN1ckNvbnRhaW5lciA9IGdpZ3lhLnV0aWxzLmFycmF5LmZpcnN0KHRoaXMuX2xvZ2luQ29udGFpbmVycywgbGlzdENvbnRhaW5lciA9PiBnaWd5YS51dGlscy5ET00uaXNFbGVtZW50Q2xhc3MobGlzdENvbnRhaW5lciwgJ2dpZ3lhLWFjdGl2ZScpKTtcblxuICAgICAgICAvLyBnZXQgYSByZWZlcmVuY2UgdG8gdGhlIHRhcmdldCBjb250YWluZXIuXG4gICAgICAgIHZhciB0YXJnZXRDb250YWluZXIgPSB0aGlzLl9sb2dpbkNvbnRhaW5lcnNbdGFyZ2V0SW5kZXhdO1xuXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSByZXF1ZXN0IGZvciAnTmV4dCcgb3IgJ1ByZXYnIGlzIGF2YWlsYWJsZSBpZiB3ZSBmb3VuZCB0aGUgdGFyZ2V0IGNvbnRhaW5lci5cbiAgICAgICAgaWYgKHRhcmdldENvbnRhaW5lcikge1xuICAgICAgICAgICAgLy8gc2V0J3MgdGhlIG5leHQgY29udGFpbmVyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlQ2xhc3NGcm9tRWxlbWVudChjdXJDb250YWluZXIsICdnaWd5YS1hY3RpdmUnKTtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudCh0YXJnZXRDb250YWluZXIsICdnaWd5YS1hY3RpdmUnKTtcblxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgd2UgaGF2ZSBuZXh0IGFuZCBwcmV2IGF2YWlsYWJsZSBhZnRlciB0YXJnZXRpZyB0aGUgbmV3IGNvbnRhaW5lci5cbiAgICAgICAgICAgIHZhciBpc0xhc3QgPSAhdGhpcy5fbG9naW5Db250YWluZXJzW3RhcmdldEluZGV4ICsgMV07XG4gICAgICAgICAgICB2YXIgaXNGaXJzdCA9ICF0aGlzLl9sb2dpbkNvbnRhaW5lcnNbdGFyZ2V0SW5kZXggLSAxXTtcblxuICAgICAgICAgICAgLy8gc2V0dGluZyB0aGUgbmV3IHN0YXRlIG9mIHRoZSBhcnJvd3MuXG4gICAgICAgICAgICB0aGlzLnNldE5hdmlnYXRpb25BcnJvd1N0YXRlKE5hdmlnYXRpb25EaXJlY3Rpb24uTmV4dCwgaXNMYXN0KTtcbiAgICAgICAgICAgIHRoaXMuc2V0TmF2aWdhdGlvbkFycm93U3RhdGUoTmF2aWdhdGlvbkRpcmVjdGlvbi5QcmV2LCBpc0ZpcnN0KTtcblxuICAgICAgICAgICAgLy8gc2V0IGZvY3VzIHRvIGZpcnN0IHByb3ZpZGVyIGluIG5ldyBsaXN0XG4gICAgICAgICAgICB0YXJnZXRDb250YWluZXIucXVlcnlTZWxlY3RvcignYnV0dG9uJykuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXROYXZpZ2F0aW9uQXJyb3dTdGF0ZShkaXJlY3Rpb246IE5hdmlnYXRpb25EaXJlY3Rpb24sIGRpc2FibGVkOiBib29sZWFuKSB7XG4gICAgICAgIC8vIHNldHRpbmcgdGhlIHByb3BlciBuYW1lIG9mIHRoZSBkaXJlY3Rpb24gZm9yIHRoZSBpbWFnZSBtYW5pcHVsYXRpbmcuXG4gICAgICAgIHZhciBhcnJvd0RpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PSBOYXZpZ2F0aW9uRGlyZWN0aW9uLk5leHQgPyAncmlnaHQnIDogJ2xlZnQnO1xuXG4gICAgICAgIC8vIGdldHRpbmcgYSByZWZlcmVuY2UgZm9yIHRoZSBhcnJvdyBjb250YWluZXIuXG4gICAgICAgIHZhciBhcnJvd0NvbnRhaW5lciA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5fY29udGFpbmVyRWxlbWVudCwgJ2dpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy0nICsgYXJyb3dEaXJlY3Rpb24pWzBdLFxuICAgICAgICAgICAgYXJyb3cgPSBhcnJvd0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LW1hcmtlcicpO1xuXG4gICAgICAgIC8vIHN3aXRjaGluZyB0aGUgc3RhdGUgb2YgdGhlIGJ1dHRvbiBiYXNlZCBvbiB0aGUgZGlzYWJsZWQgcGFyYW1ldGVyLlxuXG4gICAgICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGFycm93LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVDbGFzc0Zyb21FbGVtZW50KGFycm93Q29udGFpbmVyLCAnZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LWRpc2FibGVkJyk7XG4gICAgICAgICAgICBpZiAodGhpcy5wbHVnaW4ucGFnaW5nQnV0dG9uU3R5bGUuZ2V0U3R5bGVOYW1lKHRoaXMucGx1Z2luKSA9PSAnZmxvYXRpbmcnKSB7XG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUNsYXNzRnJvbUVsZW1lbnQoYXJyb3dDb250YWluZXIsICdnaWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbWFya2VyLWZsb2F0aW5nLWRpc2FibGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJvdy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQ2xhc3NUb0VsZW1lbnQoYXJyb3dDb250YWluZXIsICdnaWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsdWdpbi5wYWdpbmdCdXR0b25TdHlsZS5nZXRTdHlsZU5hbWUodGhpcy5wbHVnaW4pID09ICdmbG9hdGluZycpIHtcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQ2xhc3NUb0VsZW1lbnQoYXJyb3dDb250YWluZXIsICdnaWd5YS1sb2dpbi1wcm92aWRlcnMtYXJyb3ctbWFya2VyLWZsb2F0aW5nLWRpc2FibGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIElMb2dpblBsdWdpblBhcmFtcyxcbiAgICBJTG9naW5QbHVnaW5UZW1wbGF0ZXMsXG4gICAgSUxvZ2luUGx1Z2luQ1NTLFxuICAgIElHaWd5YVVzZXIsXG4gICAgSUN1c3RvbUJ1dHRvbixcbiAgICBJT2lkY0N1c3RvbUJ1dHRvbixcbiAgICBJU2FtbEN1c3RvbUJ1dHRvbixcbiAgICBJUHJvdmlkZXJzR3JpZERpbWVuc2lvbnMsXG4gICAgSVByb3ZpZGVySWRlbnRpdHlJbmZvcm1hdGlvbixcbn0gZnJvbSAnc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL0ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSVBhZ2luZ0J1dHRvblN0eWxlQ2hvaWNlSW5mbywgSVBhZ2luZ0J1dHRvblN0eWxlLCBQYWdpbmdCdXR0b25TdHlsZXMgfSBmcm9tICdzcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvUGFnaW5nU3R5bGVzJztcbmltcG9ydCB7IElCdXR0b25TdHlsZSwgQnV0dG9uU3R5bGVzIH0gZnJvbSAnc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL0J1dHRvblN0eWxlcyc7XG5pbXBvcnQgeyBJVWlBcGlJbmZvLCBJSW5qZWN0aW9uSW5mbyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9BUEkvVWlBcGknO1xuaW1wb3J0IHsgSVBsdWdpbkNvbmZpZyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luQ29uZmlnJztcbmltcG9ydCB7IFBsdWdpblN0eWxlIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9QbHVnaW5TdHlsZXMnO1xuaW1wb3J0IHsgSUVsZW1lbnRBY3R1YWxTaXplIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTG9naW5Db250YWluZXIgfSBmcm9tICdzcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvTG9naW5Db250YWluZXInO1xuaW1wb3J0IHsgV2VsY29tZUNvbnRhaW5lciB9IGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9XZWxjb21lQ29udGFpbmVyJztcbmltcG9ydCB7IEZvb3RlckNvbnRhaW5lciB9IGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9Gb290ZXJDb250YWluZXInO1xuaW1wb3J0IHsgQmFzZVBsdWdpbiB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvQmFzZVBsdWdpbic7XG5cbmV4cG9ydCBlbnVtIE5hdmlnYXRpb25EaXJlY3Rpb24ge1xuICAgIE5leHQsXG4gICAgUHJldixcbn1cbmV4cG9ydCBlbnVtIExhc3RMb2dpbkluZGljYXRpb24ge1xuICAgIF91bmRlZmluZWQsXG4gICAgbm9uZSxcbiAgICBib3JkZXIsXG4gICAgd2VsY29tZSxcbn1cbmV4cG9ydCBlbnVtIFBsdWdpbk1vZGUge1xuICAgIF91bmRlZmluZWQsXG4gICAgTG9naW4sXG4gICAgQWRkQ29ubmVjdGlvbixcbiAgICBMaW5rQWNjb3VudCxcbn1cbmV4cG9ydCBlbnVtIFJlbmRlcmluZ01vZGUge1xuICAgIFVua25vd24sXG4gICAgTG9naW4sXG4gICAgV2VsY29tZSxcbiAgICBGb290ZXIsXG59XG5cbmNvbnN0IEJhc2VQbHVnaW5HbG9iYWw6IHR5cGVvZiBCYXNlUGx1Z2luID0gZ2lneWEuXy5wbHVnaW5zLkJhc2VQbHVnaW47XG5leHBvcnQgY2xhc3MgTG9naW5QbHVnaW4gZXh0ZW5kcyBCYXNlUGx1Z2luR2xvYmFsPElMb2dpblBsdWdpblBhcmFtcywgSUxvZ2luUGx1Z2luVGVtcGxhdGVzLCBJTG9naW5QbHVnaW5DU1M+IGltcGxlbWVudHMgSVBhZ2luZ0J1dHRvblN0eWxlQ2hvaWNlSW5mbyB7XG4gICAgLy8gc3RhdGljc1xuICAgIHN0YXRpYyBwbHVnaW5OYW1lID0gJ2xvZ2luJztcblxuICAgIC8vIGludGVybmFsIC0gdGFrZSBleHRyYSBjYXJlXG4gICAgLy9wcml2YXRlIF9sYXN0RGltZXNuaW9uczogeyBjb2xzOiBudW1iZXI7IHJvd3M6IG51bWJlcjsgaDogbnVtYmVyOyB3OiBudW1iZXIgfTsgICAvLyBwbHVnaW4gbWVhc3VybWVudHMgZm9yIHJlcmVuZGVyIGNvbmRpdGlvbi5cbiAgICAvL3ByaXZhdGUgX2xvZ2luQ29udGFpbmVycyA9IFtdOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgRE9NIENvbnRhaW5lcnMgZm9yIHRoZSBwYWdpbmcuXG5cbiAgICAvLyBwcml2YXRlc1xuXG4gICAgcHVibGljIHVpQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgICAvKiB0aGUgY29udGFpbmVyIGZvciB0aGUgcGx1Z2luIHBhcnRzLCB0aGlzIGlzIGJlY3VzZSBvZiB0aGUgZmFjZWJvb2sgcGlsZSxcblxuICAgICAgICAgd2UgbmVlZCB0byBleHRyYWN0IGl0IGZyb20gdGhlIG1haW4gY29udGFpbmVyIGJlY3VzZSB3ZSBkb250IGtub3cgdGhlIHNpemVcbiAgICAgICAgIG9mIHRoZSBleHRlcm5hbCBjb250cm9sLiAqL1xuXG4gICAgLy8gQmFzZVBsdWdpbidzIG1lbWJlciB0aGF0IG5lZWRzIGV4cG9zdXJlLi5cbiAgICBwdWJsaWMgbGFzdFBvbGxlZFdpZHRoO1xuICAgIC8vXG5cbiAgICBwdWJsaWMgc3R5bGVQcmVzZXQ6IElCdXR0b25TdHlsZTtcbiAgICBwdWJsaWMgcGFnaW5nQnV0dG9uU3R5bGU6IElQYWdpbmdCdXR0b25TdHlsZTtcbiAgICBwdWJsaWMgYnV0dG9uV2lkdGg6IG51bWJlcjtcbiAgICBwdWJsaWMgYnV0dG9uSGVpZ2h0OiBudW1iZXI7XG4gICAgcHVibGljIHNwcml0ZVJlbmRlcmVyO1xuICAgIHB1YmxpYyBwbHVnaW5Nb2RlOiBQbHVnaW5Nb2RlO1xuICAgIHB1YmxpYyBwcm92aWRlcnM6IEFycmF5PGFueT47XG4gICAgcHVibGljIHVzZXI6IElHaWd5YVVzZXI7XG4gICAgcHVibGljIGxhc3RMb2dpbkluZGljYXRpb246IExhc3RMb2dpbkluZGljYXRpb247XG4gICAgcHVibGljIGZhY2Vib29rU3VnZ2VzdEVuYWJsZWQ6IGJvb2xlYW47XG4gICAgcHVibGljIGxhc3RMb2dpblByb3ZpZGVyOiBzdHJpbmc7XG4gICAgcHVibGljIGxhc3RMb2dpblByb3ZpZGVyT2JqZWN0OiBhbnk7XG5cbiAgICBwdWJsaWMgcGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID4gMSA/IDIgOiAxO1xuICAgIHB1YmxpYyBpbWFnZUJhc2U6IHN0cmluZyA9IGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL0hUTUxMb2dpbicpO1xuICAgIHB1YmxpYyBzaG93VGVybXM7IC8vIEFkZCBIYXZlIFNwYWNlP1xuICAgIHB1YmxpYyBpc0Zvb3RlckVuYWJsZWQ7XG4gICAgcHVibGljIGlzSGVhZGVyRW5hYmxlZDogYm9vbGVhbjtcbiAgICBwdWJsaWMgc2hvd0VkaXQgPSBmYWxzZTtcbiAgICBwdWJsaWMgc2hvd1dlbGNvbWUgPSBmYWxzZTsgLy8gbmVlZCBwcm92aWRlciBjb25kaXRpb24sIHNlZSBpbml0IHNlcXVlbmNlIGZvciB0b2dnYWxpbmcgdGhlIHNob3dXZWxjb20gZmxhZ1xuICAgIHB1YmxpYyBzaG93VG9vbHRpcHM6IGJvb2xlYW47XG5cbiAgICBwcml2YXRlIGxvZ2luQ2hhbmdlRXZlbnRIYW5kbGVyID0gKCkgPT4gdGhpcy5yZW5kZXIoKTtcblxuICAgIHB1YmxpYyBwbHVnaW5Db25maWcgPSB7XG4gICAgICAgIGFycm93V2lkdGg6IDE2LFxuICAgICAgICBmbG9hdGluZ0Fycm93V2lkdGg6IDE1LFxuICAgICAgICBhcnJvd0hlaWdodDogMTQsXG4gICAgICAgIGRlZmF1bHRsYXN0TG9naW5CdXR0b25TaXplOiAzMCxcbiAgICAgICAgZGVmYXVsdEJ1dHRvblNpemU6IDMwLFxuICAgICAgICBkZWZhdWx0QnV0dG9uU2l6ZU9uUG9wdXA6IDM1LFxuICAgICAgICBoZWFkZXJIZWlnaHQ6IDE4LFxuICAgICAgICBmb290ZXJIZWlnaHQ6IDE4LFxuICAgICAgICByb3dTcGFjaW5nOiA1LFxuICAgIH07XG5cbiAgICBzdGF0aWMgSW5qZWN0aW9uSW5mb0RlZmF1bHRDb25maWcgPSB7XG4gICAgICAgIHNob3dBZGRDb25uZWN0aW9uc1VJX3YyOiB7XG4gICAgICAgICAgICBkZWZhdWx0UGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZENhcGFiaWxpdGllczogJ2ZyaWVuZHMnLFxuICAgICAgICAgICAgICAgIHBhZ2luZ0J1dHRvblN0eWxlOiAnYXJyb3dzJyxcbiAgICAgICAgICAgICAgICBVSU1vZGU6IFBsdWdpbk1vZGVbUGx1Z2luTW9kZS5BZGRDb25uZWN0aW9uXSxcbiAgICAgICAgICAgICAgICBfY2FsbEdldFVzZXJJbmZvT25Jbml0aWFsUmVuZGVyOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZmF1bHRNb2RhbFBhcmFtczoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyODAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMjAsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRDYXBhYmlsaXRpZXM6ICdmcmllbmRzJyxcbiAgICAgICAgICAgICAgICBwYWdpbmdCdXR0b25TdHlsZTogJ2Fycm93cycsXG4gICAgICAgICAgICAgICAgVUlNb2RlOiBQbHVnaW5Nb2RlW1BsdWdpbk1vZGUuQWRkQ29ubmVjdGlvbl0sXG4gICAgICAgICAgICAgICAgY2FwdGlvblRleHRLZXk6ICdjb25uZWN0X3dpdGhfeW91cl9mcmllbmRzJyxcbiAgICAgICAgICAgICAgICBfY2FsbEdldFVzZXJJbmZvT25Jbml0aWFsUmVuZGVyOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0xvZ2luVUlfdjI6IHtcbiAgICAgICAgICAgIGRlZmF1bHRQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTEwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTEwLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkQ2FwYWJpbGl0aWVzOiAnbG9naW4nLFxuICAgICAgICAgICAgICAgIHBhZ2luZ0J1dHRvblN0eWxlOiAnYXJyb3dzJyxcbiAgICAgICAgICAgICAgICBVSU1vZGU6IFBsdWdpbk1vZGVbUGx1Z2luTW9kZS5Mb2dpbl0sXG4gICAgICAgICAgICAgICAgX2NhbGxHZXRVc2VySW5mb09uSW5pdGlhbFJlbmRlcjogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWZhdWx0TW9kYWxQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkQ2FwYWJpbGl0aWVzOiAnbG9naW4nLFxuICAgICAgICAgICAgICAgIHBhZ2luZ0J1dHRvblN0eWxlOiAnYXJyb3dzJyxcbiAgICAgICAgICAgICAgICBVSU1vZGU6IFBsdWdpbk1vZGVbUGx1Z2luTW9kZS5Mb2dpbl0sXG4gICAgICAgICAgICAgICAgY2FwdGlvblRleHRLZXk6ICdsb2dpbicsXG4gICAgICAgICAgICAgICAgX2NhbGxHZXRVc2VySW5mb09uSW5pdGlhbFJlbmRlcjogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIGdldCB0aGUgaW5qZWN0aW9uIGluZm8gYmFzZWQgb24gdGhlIGFjdHVhbCBmdW5jdGlvbiBiZWluZyB1c2VkIGZvciB0aGUgcGx1Z2luXG4gICAgcHVibGljIHN0YXRpYyBpbmplY3Rpb25JbmZvKHVpQXBpSW5mbz86IElVaUFwaUluZm8pOiBJSW5qZWN0aW9uSW5mbyB7XG4gICAgICAgIHZhciBpbmZvID0gZ2lneWEudXRpbHMub2JqZWN0Lm1lcmdlKFtcbiAgICAgICAgICAgIHVpQXBpSW5mbyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnbG9naW5fdjInLFxuICAgICAgICAgICAgICAgIGpzTmFtZTogJ2dpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLmxvZ2luX3YyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHJldHVybiA8SUluamVjdGlvbkluZm8+aW5mbztcbiAgICB9XG5cbiAgICAvLyBnZXQgdGhlIGNvbmZpZyB0aGF0IG1hdGNoIHRoZSBjdXJyZW50IG1ldGhvZFxuICAgIHB1YmxpYyBnZXRDb25maWcoKTogSVBsdWdpbkNvbmZpZzxJTG9naW5QbHVnaW5QYXJhbXM+IHtcbiAgICAgICAgdmFyIGNvbmZpZyA9IGdpZ3lhLnV0aWxzLm9iamVjdC5tZXJnZShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRQYXJhbXM6IFtdLFxuICAgICAgICAgICAgICAgIGhhc01vYmlsZVVJOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhbGxvd01vZGFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN1cHBvcnRzUmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbmFibGVTaXplUG9sbGluZzogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBMb2dpblBsdWdpbi5JbmplY3Rpb25JbmZvRGVmYXVsdENvbmZpZ1t0aGlzLmluamVjdGlvbkluZm8ubWV0aG9kTmFtZV0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHJldHVybiA8SVBsdWdpbkNvbmZpZzxJTG9naW5QbHVnaW5QYXJhbXM+PmNvbmZpZztcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdChsb2FkZWRDYWxsYmFjazogKHN1Y2Nlc3M/OiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGBsb2dpbiBtb2RlOiAke3RoaXMucGFyYW1zLlVJTW9kZX1gKTtcblxuICAgICAgICAvLyBTZXR0aW5nIGRlZmF1bHQgdmFsdWVzIGFuZCBwYXJzaW5nIHZhbHVlcyBpbnRvIG5hdGl2ZSB2YWx1ZXNcbiAgICAgICAgdGhpcy5pbml0UGFyYW1zKCk7XG5cbiAgICAgICAgLy8gaW5pdCB0aGUgY29udGFpbmVyXG4gICAgICAgIHRoaXMuaW5pdFVpQ29udGFpbmVyKCk7XG5cbiAgICAgICAgLy8gbGlzdGVuIHRvIGdsb2JhbCBldmVudHNcbiAgICAgICAgdGhpcy5yZWdpc3RlclRvR2xvYmFsRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gY3NzIC0gIGluamVjdGluZyB0aGUgY3NzIGludG8gdGhlIHBhZ2UuXG4gICAgICAgIHZhciBjc3MgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLmdldENzcygpLm1haW4sIHsgc2NyaXB0QmFzZTogdGhpcy5pbWFnZUJhc2UgfSk7XG5cbiAgICAgICAgZ2lneWEuXy5wbHVnaW5zLnV0aWxzLmNzcy5hZGRDc3MoY3NzLCB0aGlzLnBhcmFtcy5jc3NQcmVmaXgpO1xuICAgICAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzSUUpIHtcbiAgICAgICAgICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNJRTggfHwgZ2lneWEubG9jYWxJbmZvLnF1aXJrc01vZGUpIGdpZ3lhLl8ucGx1Z2lucy51dGlscy5jc3MuYWRkQ3NzKHRoaXMuZ2V0Q3NzKCkuaWU4cGF0Y2gsIHRoaXMucGFyYW1zLmNzc1ByZWZpeCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMYXN0IExvZ2luIFByb3ZpZGVyOlxuICAgICAgICB0aGlzLmxhc3RMb2dpblByb3ZpZGVyID0gdGhpcy5nZXRMYXN0TG9naW4oKTtcblxuICAgICAgICAvLyBGYWNlYm9vayBTdWdnZXN0OlxuICAgICAgICB0aGlzLmZhY2Vib29rU3VnZ2VzdEVuYWJsZWQgPVxuICAgICAgICAgICAgdGhpcy5wYXJhbXMuYXV0b0RldGVjdFVzZXJQcm92aWRlcnMgJiZcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLmF1dG9EZXRlY3RVc2VyUHJvdmlkZXJzLnRvTG93ZXJDYXNlKCkgPT0gJ2ZhY2Vib29rJyAmJlxuICAgICAgICAgICAgKCF0aGlzLmxhc3RMb2dpblByb3ZpZGVyIHx8IHRoaXMubGFzdExvZ2luSW5kaWNhdGlvbiAhPSBMYXN0TG9naW5JbmRpY2F0aW9uLndlbGNvbWUpO1xuXG4gICAgICAgIC8vIEdldHRpbmcgVGhlIFVzZXIgSW5mb3JtYXRpb24gQW5kIHJlbmRlciB0aGUgcGx1Z2luLlxuICAgICAgICB2YXIgYWZ0ZXJVc2VyUmVzcG9uc2UgPSByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAvLyBJbml0IFRoZSBQcm92aWRlcnNcbiAgICAgICAgICAgIHRoaXMuaW5pdFByb3ZpZGVycygpO1xuICAgICAgICAgICAgLy8gc2V0dGluZyB0aGUgcmVxdWVzdCBwYXJhbXMgZm9yIHNvY2lhbExvZ2luIHdoZW4gZm9yY2VMaW5raW5nIGFjdGl2YXRlZFxuICAgICAgICAgICAgdGhpcy5pbml0Rm9yY2VMaW5raW5nUGFyYW1zKCk7XG4gICAgICAgICAgICAvLyBTZXR0aW5nIFVwIFRoZSBTcHJpdGUgRW5naW5lXG4gICAgICAgICAgICB0aGlzLmluaXRTcHJpdGVFbmdpbmUoKTtcblxuICAgICAgICAgICAgdGhpcy51c2VyID0gcmVzcG9uc2UudXNlcjtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgICAgIGxvYWRlZENhbGxiYWNrKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMucGFyYW1zLl9jYWxsR2V0VXNlckluZm9PbkluaXRpYWxSZW5kZXIpIHRoaXMuZ2V0VXNlckluZm8oYWZ0ZXJVc2VyUmVzcG9uc2UpO1xuICAgICAgICBlbHNlIGFmdGVyVXNlclJlc3BvbnNlKHsgdXNlcjogbnVsbCB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRGb3JjZUxpbmtpbmdQYXJhbXMoKXtcbiAgICAgICAgY29uc3QgaXNGb3JjZUxpbmtpbmcgPSB0aGlzLnBhcmFtcy5VSU1vZGUgPT09IFwiTGlua0FjY291bnRcIiAmJiB0aGlzLnBhcmFtcy5jb25mbGljdEhhbmRsaW5nID09PSBcImZhaWxcIjtcbiAgICAgICAgaWYoaXNGb3JjZUxpbmtpbmcpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnBhcmFtcy5sb2dpbk1vZGU7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5wYXJhbXMucmVnVG9rZW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRQYXJhbXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5fcGx1Z2luQ2VudGVyRml4KSB0aGlzLnBsdWdpbkNvbmZpZy5hcnJvd1dpZHRoID0gMjU7IC8vIEFjY29yZGluZyB0byB0aGUgYXJyb3cncyBpbWFnZSB3aWR0aCArIGl0cyBwYWRkaW5nXG4gICAgICAgIHRoaXMucGFnaW5nQnV0dG9uU3R5bGUgPSBQYWdpbmdCdXR0b25TdHlsZXNbdGhpcy5wYXJhbXMucGFnaW5nQnV0dG9uU3R5bGVdIHx8IFBhZ2luZ0J1dHRvblN0eWxlc1snYXJyb3dzJ107XG5cbiAgICAgICAgLy8gVE9ETzogdHJhbnNmZXIgYWxsIGRlZmF1bHRzIHRvIEluamVjdGlvbkluZm9EZWZhdWx0Q29uZmlnIGFuZCBkZWxldGUgdGhlIGNvZGUgd2hpY2ggY2hlY2tzIGZvciBlYWNoIHBhcmFtXG5cbiAgICAgICAgaWYgKCF0aGlzLnBhcmFtcy5lbmFibGVkUHJvdmlkZXJzKSB0aGlzLnBhcmFtcy5lbmFibGVkUHJvdmlkZXJzID0gJyonO1xuXG4gICAgICAgIGlmICghdGhpcy5wYXJhbXMuYnV0dG9uc1N0eWxlKSB0aGlzLnBhcmFtcy5idXR0b25zU3R5bGUgPSAnc3RhbmRhcmQnO1xuXG4gICAgICAgIHRoaXMuc2hvd1Rvb2x0aXBzID0gIWdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdEZhbHNlKHRoaXMucGFyYW1zLnNob3dUb29sdGlwcyk7XG5cbiAgICAgICAgdmFyIHdpZHRoID0gJycgKyB0aGlzLnBhcmFtcy53aWR0aDtcbiAgICAgICAgdGhpcy5wYXJhbXMucmVzcG9uc2l2ZVdpZHRoID0gd2lkdGguaW5kZXhPZignJScpID4gLTE7XG4gICAgICAgIHRoaXMucGFyYW1zLndpZHRoTnVtID0gcGFyc2VJbnQod2lkdGgpO1xuICAgICAgICB0aGlzLnBhcmFtcy5oZWlnaHROdW0gPSBwYXJzZUludCgnJyArIHRoaXMucGFyYW1zLmhlaWdodCk7XG5cbiAgICAgICAgLy8gU2V0dGluZyBUaGUgQnV0dG9uIFNpemUgKyBTdXBwb3J0IGluICdVSUNvbmZpZycgW09OTFkgSUYgVEhFICdidXR0b25TaXplJyBOT1QgU0VUJ1NdXG4gICAgICAgIGlmICghdGhpcy5wYXJhbXMuYnV0dG9uU2l6ZSAmJiB0aGlzLnBhcmFtcy5VSUNvbmZpZykge1xuICAgICAgICAgICAgLy8gbm9ybWFsaXplIHRoZSBzdHJpbmcsIHNvIFVwcGVyIGNhc2luZyBvciBjbGllbnQgaW5wdXQgd2lsbCBub3QgZWZmZWN0IHRoZSBsb2dpYy5cbiAgICAgICAgICAgIHRoaXMucGFyYW1zLlVJQ29uZmlnID0gdGhpcy5wYXJhbXMuVUlDb25maWcudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgLy8gdHJ5aW5nIHRvIHBhcnNlIHRoZSB4bWxcbiAgICAgICAgICAgIHZhciB4bWxFbGVtZW50ID0gdGhpcy5wYXJzZVhNTCh0aGlzLnBhcmFtcy5VSUNvbmZpZyk7XG4gICAgICAgICAgICB2YXIgYnV0dG9uU2l6ZUVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmICh4bWxFbGVtZW50KSBidXR0b25TaXplRWxlbWVudCA9IHhtbEVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NuYnV0dG9ucycpWzBdO1xuXG4gICAgICAgICAgICBpZiAoYnV0dG9uU2l6ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcy5idXR0b25TaXplID0gcGFyc2VJbnQoYnV0dG9uU2l6ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdidXR0b25zaXplJykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBzZXR0aW5nIFRoZSBEZWZhdWx0cyBzaXplcyBpZiBubyBidXR0b24gc2l6ZSBmb3VuZFxuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmJ1dHRvblNpemUgPSB0aGlzLnBhcmFtcy5pc1BvcHVwID8gdGhpcy5wbHVnaW5Db25maWcuZGVmYXVsdEJ1dHRvblNpemVPblBvcHVwIDogdGhpcy5wbHVnaW5Db25maWcuZGVmYXVsdEJ1dHRvblNpemU7IC8vIFRPRE8gd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhhdCB0aGUgZGVmYXVsdCBzaXplcyBpcyBhbHdheXMgc2V0LCBzaG91bGQgdGhpcyBiZSBzZXQgZm9yIHRoZSBkZWZhdWx0cyBldmVuIGlmIG5vIFVJQ29uZmlnIGlzIHNldFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGVmYXVsdCBidXR0b24gc2l6ZVxuICAgICAgICBpZiAoIXRoaXMucGFyYW1zLmJ1dHRvblNpemUpIHtcbiAgICAgICAgICAgIHRoaXMucGFyYW1zLmJ1dHRvblNpemUgPSAzMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5idXR0b25TaXplKSB0aGlzLnBhcmFtcy5idXR0b25TaXplID0gcGFyc2VJbnQoJycgKyB0aGlzLnBhcmFtcy5idXR0b25TaXplKTtcblxuICAgICAgICAvLyBTZXR0aW5nIHRoZSBib29sZWFuc1xuICAgICAgICB0aGlzLnBhcmFtcy5zaG93VGVybXNMaW5rID0gdGhpcy5pc1RydWUodGhpcy5wYXJhbXMuc2hvd1Rlcm1zTGluayk7XG5cbiAgICAgICAgLy8gU2V0dGluZyB0aGUgcHJpdmF0ZSBmbGFncyBhZnRlciBpbml0aWFsaXppbmcgdGhlIGJvb2xlYW5zLlxuICAgICAgICB0aGlzLnNob3dUZXJtcyA9IHRoaXMucGFyYW1zLnNob3dUZXJtc0xpbmsgJiYgdGhpcy5wYXJhbXMuc2hvd1Rlcm1zTGluayAhPT0gJ2ZhbHNlJztcblxuICAgICAgICB0aGlzLmlzRm9vdGVyRW5hYmxlZCA9IHRoaXMuc2hvd1Rlcm1zIHx8IHRoaXMucGFyYW1zLlVJTW9kZSA9PSAnQWRkQ29ubmVjdGlvbic7XG4gICAgICAgIHRoaXMuaXNIZWFkZXJFbmFibGVkID0gQm9vbGVhbih0aGlzLnBhcmFtcy5oZWFkZXJUZXh0KTtcblxuICAgICAgICAvLyBpbml0IHRoZSBlbnVtc1xuXG4gICAgICAgIC8vU2V0dGluZyBUaGUgTGFzdCBJbmRlY2F0aW9uIExvZ2luIFBhcmFtZXRlclxuICAgICAgICBpZiAoIXRoaXMucGFyYW1zLmxhc3RMb2dpbkluZGljYXRpb24pIHRoaXMucGFyYW1zLmxhc3RMb2dpbkluZGljYXRpb24gPSAnYm9yZGVyJztcbiAgICAgICAgdGhpcy5sYXN0TG9naW5JbmRpY2F0aW9uID0gTGFzdExvZ2luSW5kaWNhdGlvbltTdHJpbmcodGhpcy5wYXJhbXMubGFzdExvZ2luSW5kaWNhdGlvbikudG9Mb3dlckNhc2UoKV0gfHwgTGFzdExvZ2luSW5kaWNhdGlvbi5ib3JkZXI7XG5cbiAgICAgICAgLy8gU2V0dGluZyBUaGUgcGx1Z2luIG1vZGUgJ2FkZENvbm5lY3Rpb25VSSwgc2hvd0xvZ2luVUknXG4gICAgICAgIHRoaXMucGx1Z2luTW9kZSA9IFBsdWdpbk1vZGVbdGhpcy5wYXJhbXMuVUlNb2RlXSB8fCBQbHVnaW5Nb2RlLkxvZ2luO1xuXG4gICAgICAgIHRoaXMuc3R5bGVQcmVzZXQgPSBCdXR0b25TdHlsZXNbU3RyaW5nKHRoaXMucGFyYW1zLmJ1dHRvbnNTdHlsZSkudG9Mb3dlckNhc2UoKV0gfHwgQnV0dG9uU3R5bGVzWydzdGFuZGFyZCddO1xuXG4gICAgICAgIHRoaXMuYnV0dG9uSGVpZ2h0ID0gcGFyc2VJbnQoU3RyaW5nKHRoaXMucGFyYW1zLmJ1dHRvblNpemUpKTtcbiAgICAgICAgdGhpcy5idXR0b25XaWR0aCA9IE1hdGguY2VpbCh0aGlzLmJ1dHRvbkhlaWdodCAqIHRoaXMuc3R5bGVQcmVzZXQucmF0aW8pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdFVpQ29udGFpbmVyKCkge1xuICAgICAgICBpZiAodGhpcy5nZXRQbHVnaW5TdHlsZSgpICE9IFBsdWdpblN0eWxlLmxlZ2FjeSB8fCAhdGhpcy5pc01vZGFsKSB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICB0aGlzLnVpQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtZW50RnJvbUhUTUxTdHJpbmcoXG4gICAgICAgICAgICBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLmdldFRlbXBsYXRlcygpLnVpQ29udGFpbmVyLCB7IGNvbnRhaW5lcklEOiB0aGlzLnBhcmFtcy5jb250YWluZXJJRCB9KSxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy51aUNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB0aGlzLnBhcmFtcy5oZWlnaHQgKyAncHgnO1xuICAgICAgICB0aGlzLnVpQ29udGFpbmVyLnN0eWxlLndpZHRoID0gdGhpcy5wYXJhbXMud2lkdGhOdW0gKyAodGhpcy5wYXJhbXMucmVzcG9uc2l2ZVdpZHRoID8gJyUnIDogJ3B4Jyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNNb2RhbCkge1xuICAgICAgICAgICAgdGhpcy51aUNvbnRhaW5lci5zdHlsZS5wYWRkaW5nVG9wID0gJzIwcHgnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy51aUNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0UHJvdmlkZXJzKCkge1xuICAgICAgICBpZiAodGhpcy5wbHVnaW5Nb2RlID09PSBQbHVnaW5Nb2RlLkxvZ2luICYmICF0aGlzLnBhcmFtcy5yZXF1aXJlZENhcGFiaWxpdGllcykge1xuICAgICAgICAgICAgdGhpcy5wYXJhbXMucmVxdWlyZWRDYXBhYmlsaXRpZXMgPSAnbG9naW4nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucGx1Z2luTW9kZSA9PT0gUGx1Z2luTW9kZS5BZGRDb25uZWN0aW9uICYmICF0aGlzLnBhcmFtcy5yZXF1aXJlZENhcGFiaWxpdGllcykge1xuICAgICAgICAgICAgdGhpcy5wYXJhbXMucmVxdWlyZWRDYXBhYmlsaXRpZXMgPSAnZnJpZW5kcyc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXR0aW5nIFRoZSBEZWZhdWx0IFByb3ZpZGVycyBDb25maWd1cmF0aW9uIFtdXG4gICAgICAgIC8vIGluaXQgdGhlIHByb3ZpZGVycyBsaXN0XG4gICAgICAgIHRoaXMucHJvdmlkZXJzID0gZ2lneWEuZ2xvYmFsLnJlc29sdmVQcm92aWRlcnModGhpcy5wYXJhbXMuZW5hYmxlZFByb3ZpZGVycywgdGhpcy5wYXJhbXMuZGlzYWJsZWRQcm92aWRlcnMsIHRoaXMucGFyYW1zLnJlcXVpcmVkQ2FwYWJpbGl0aWVzKTtcblxuICAgICAgICAvLyBpZiBMYXN0IExvZ2luIGluZGVjYXRvciBpcyAnQm9yZGVyJywgc2V0IHRoZSBsYXN0IGxvZ2luIHByb3ZpZGVyIGF0IDAgaW5kZXguXG4gICAgICAgIGlmICh0aGlzLnBsdWdpbk1vZGUgPT09IFBsdWdpbk1vZGUuQWRkQ29ubmVjdGlvbiAmJiB0aGlzLmxhc3RMb2dpbkluZGljYXRpb24gPT0gTGFzdExvZ2luSW5kaWNhdGlvbi5ib3JkZXIpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm92aWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSB0aGlzLnByb3ZpZGVyc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm92aWRlcnNbaV0ubmFtZSA9PSB0aGlzLmxhc3RMb2dpblByb3ZpZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvdmlkZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm92aWRlcnMudW5zaGlmdChwcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCdzIHRoZSB3ZWxjb21lIHNjcmVlbiBpbmRlY2F0aW9uLlxuICAgICAgICAvLyBDaGVja2luZyBvZiB3ZSBhcmUgY29ubmVjdGVkLCBhbmQgaWYgd2UgaGF2ZSBhICdsYXN0TG9naW5Qcm92aWRlcicgaW5mbyBmcm9tIHRoZSBjb29raWVcbiAgICAgICAgLy8gYW5kIHRoZSBsYXN0IGxvZ2luIGluZGVjYXRpb24gaXMgc2V0IHRvIHdlbGNvbSBzY3JlZW5cbiAgICAgICAgaWYgKHRoaXMucGx1Z2luTW9kZSA9PT0gUGx1Z2luTW9kZS5Mb2dpbiAmJiB0aGlzLmxhc3RMb2dpblByb3ZpZGVyICYmIHRoaXMubGFzdExvZ2luSW5kaWNhdGlvbiA9PSBMYXN0TG9naW5JbmRpY2F0aW9uLndlbGNvbWUpIHtcbiAgICAgICAgICAgIC8vIGNoZWNraW5nIGlmIHRoZSBsYXN0IGxvZ2luIHByb3ZpZGVyIGlzIG9uIHRoZSBwcm92aWRlcnMgbGlzdFxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvdmlkZXJzW2ldLm5hbWUgPT0gdGhpcy5sYXN0TG9naW5Qcm92aWRlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RMb2dpblByb3ZpZGVyT2JqZWN0ID0gdGhpcy5wcm92aWRlcnNbaV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1dlbGNvbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDdXN0b21lIEJ1dHRvbnMgQW5kIFByb3ZpZGVyczpcbiAgICAgICAgdmFyIGN1c3RvbUJ1dHRvbnM6IElDdXN0b21CdXR0b25bXSA9IFtdO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5wbHVnaW5Nb2RlKSB7XG4gICAgICAgICAgICBjYXNlIFBsdWdpbk1vZGUuQWRkQ29ubmVjdGlvbjogLy8gQWRkQ29ubmVjdGlvbiBkb2Vzbid0IHN1cHBvcnQgbXVsdGlwbGUgY3VzdG9tIGJ1dHRvbnMgZm9yIG5vd1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtcy5jdXN0b21CdXR0b24pIGN1c3RvbUJ1dHRvbnMgPSBbdGhpcy5wYXJhbXMuY3VzdG9tQnV0dG9uXTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnBhcmFtcy5jdXN0b21CdXR0b25zICYmIHRoaXMucGFyYW1zLmN1c3RvbUJ1dHRvbnMubGVuZ3RoID4gMCkgY3VzdG9tQnV0dG9ucyA9IFt0aGlzLnBhcmFtcy5jdXN0b21CdXR0b25zWzBdXTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjdXN0b21CdXR0b25zID0gdGhpcy5wYXJhbXMuY3VzdG9tQnV0dG9ucyB8fCBbXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJhbXMuY3VzdG9tQnV0dG9uKSBjdXN0b21CdXR0b25zLnB1c2godGhpcy5wYXJhbXMuY3VzdG9tQnV0dG9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGdpZ3lhLnV0aWxzLmFycmF5LmZvckVhY2goY3VzdG9tQnV0dG9ucywgb0J1dHRvbiA9PiB7XG4gICAgICAgICAgICBpZiAob0J1dHRvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ3VzdG9tQnV0dG9uKG9CdXR0b24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5wcm92aWRlcnMubGVuZ3RoID09IDAgJiYgIXRoaXMuZmFjZWJvb2tTdWdnZXN0RW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEVycm9yRnJvbVJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdFUlJfTk9fUFJPVklERVJTJyxcbiAgICAgICAgICAgICAgICBzdGF0dXNNZXNzYWdlOiAnTm8gcHJvdmlkZXJzJyxcbiAgICAgICAgICAgICAgICBlcnJvckNvZGU6IDQwMDEwMCxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdObyBwcm92aWRlcnMnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYXJDb25uZWN0ZWRQcm92aWRlcnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBJZGVudGl0eSA9IHRoaXMuZ2V0SWRlbnRpdHlJbmZvRm9yUHJvdmlkZXIodGhpcy5wcm92aWRlcnNbaV0pO1xuICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gdGhpcy5wcm92aWRlcnNbaV07XG4gICAgICAgICAgICBpZiAocElkZW50aXR5LmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgYXJDb25uZWN0ZWRQcm92aWRlcnMucHVzaChwcm92aWRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZSBBcnJlbmdpbmcgdGhlIGNvbm5lY3RlZCBpY29ucyBvbiB0aGUgcHJvdmlkZXJzIGxpc3QuXG4gICAgICAgIHRoaXMucHJvdmlkZXJzID0gYXJDb25uZWN0ZWRQcm92aWRlcnMuY29uY2F0KGdpZ3lhLnNvY2lhbGl6ZS5oaWRlUHJvdmlkZXJzQnlOYW1lKHRoaXMucHJvdmlkZXJzLCBhckNvbm5lY3RlZFByb3ZpZGVycy5qb2luKCcsJykpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkQ3VzdG9tQnV0dG9uKG9CdXR0b246IElDdXN0b21CdXR0b24pIHtcbiAgICAgICAgbGV0IHBDdXN0b21Qcm92aWRlcjogYW55O1xuXG4gICAgICAgIGxldCBwcm92aWRlclR5cGUgPSAhb0J1dHRvbi50eXBlID8gJ2V2ZW50b25seScgOiBvQnV0dG9uLnR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IHByb3ZpZGVySWQ6IG51bWJlcjtcbiAgICAgICAgbGV0IHByb3ZpZGVyTmFtZTogc3RyaW5nO1xuICAgICAgICBzd2l0Y2ggKHByb3ZpZGVyVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnb2lkYyc6XG4gICAgICAgICAgICAgICAgcHJvdmlkZXJJZCA9IDEwMDAxO1xuICAgICAgICAgICAgICAgIHByb3ZpZGVyTmFtZSA9IChvQnV0dG9uIGFzIElPaWRjQ3VzdG9tQnV0dG9uKS5vcE5hbWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzYW1sJzpcbiAgICAgICAgICAgICAgICBwcm92aWRlcklkID0gNDEyMjtcbiAgICAgICAgICAgICAgICBwcm92aWRlck5hbWUgPSAob0J1dHRvbiBhcyBJU2FtbEN1c3RvbUJ1dHRvbikuaWRwTmFtZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2V2ZW50b25seSc6XG4gICAgICAgICAgICAgICAgcHJvdmlkZXJJZCA9IDQxMjE7XG4gICAgICAgICAgICAgICAgcHJvdmlkZXJUeXBlID0gJ29wZW5JRCc7XG5cbiAgICAgICAgICAgICAgICAvLyAjNDg4MDcgLSBFbnN1cmUgZWFjaCBldmVudG9ubHkgYnV0dG9uIGhhcyBhIHVuaXF1ZSBuYW1lLlxuICAgICAgICAgICAgICAgIC8vIFRoZSBwcm92aWRlciBsZW5ndGggaXMgaW5jcmVtZW50ZWQgZm9yIGVhY2ggY3VzdG9tQnV0dG9uIHNvIHRoaXMgd2lsbCBiZSBhIHVuaXF1ZSBudW1iZXIgZm9yIHRoaXMgaW5zdGFuY2UuXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJOYW1lID0gU3RyaW5nKHRoaXMucHJvdmlkZXJzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignZ2lneWE6IGludmFsaWQgY3VzdG9tIGJ1dHRvbiB0eXBlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcEN1c3RvbVByb3ZpZGVyID0gZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKGdpZ3lhLnNvY2lhbGl6ZS5fZ2V0UHJvdmlkZXJCeUlEKHByb3ZpZGVySWQpKTtcbiAgICAgICAgcEN1c3RvbVByb3ZpZGVyLmltZ05hbWUgPSBwcm92aWRlclR5cGU7XG4gICAgICAgIHBDdXN0b21Qcm92aWRlci5kaXNwbGF5TmFtZSA9IG9CdXR0b24ucHJvdmlkZXJOYW1lO1xuICAgICAgICBwQ3VzdG9tUHJvdmlkZXIuYnV0dG9uRGF0YSA9IG9CdXR0b247XG4gICAgICAgIHBDdXN0b21Qcm92aWRlci5pc0N1c3RvbVByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICBpZiAocHJvdmlkZXJOYW1lKSB7XG4gICAgICAgICAgICBwQ3VzdG9tUHJvdmlkZXIubmFtZSA9IGAke3Byb3ZpZGVyVHlwZX0tJHtwcm92aWRlck5hbWV9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb0J1dHRvbi5wcm92aWRlck5hbWUpIHtcbiAgICAgICAgICAgIG9CdXR0b24ucHJvdmlkZXJOYW1lID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zaG91bGRBZGRDdXN0b21Qcm92aWRlcihwQ3VzdG9tUHJvdmlkZXIpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3ZpZGVycy5zcGxpY2Uob0J1dHRvbi5wb3NpdGlvbiAmJiBvQnV0dG9uLnBvc2l0aW9uID4gMSA/IG9CdXR0b24ucG9zaXRpb24gLSAxIDogMCwgMCwgcEN1c3RvbVByb3ZpZGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2hvdWxkQWRkQ3VzdG9tUHJvdmlkZXIoY3VzdG9tUHJvdmlkZXIpIHtcbiAgICAgICAgaWYgKCFjdXN0b21Qcm92aWRlcikgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBlUHJvdmlkZXJzID0gZ2lneWEudXRpbHMuYXJyYXkuZ2V0QXJyYXlGcm9tU3RyaW5nKHRoaXMucGFyYW1zLmVuYWJsZWRQcm92aWRlcnMsICcsJywgdHJ1ZSk7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLnBsdWdpbk1vZGUpIHtcbiAgICAgICAgICAgIC8vICM2Nzc5NSBjb25mbGljdGluZyBwcm92aWRlcnMgbGlzdCBjb250YWlucyBjdXN0b20gYnV0dG9uc1xuICAgICAgICAgICAgY2FzZSBQbHVnaW5Nb2RlLkxpbmtBY2NvdW50OlxuICAgICAgICAgICAgICAgIHJldHVybiBjdXN0b21Qcm92aWRlci5uYW1lICYmIGdpZ3lhLnV0aWxzLmFycmF5LnNvbWUoZVByb3ZpZGVycywgcCA9PiBwLnRvTG93ZXJDYXNlKCkgPT09IGN1c3RvbVByb3ZpZGVyLm5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0U3ByaXRlRW5naW5lKCkge1xuICAgICAgICB2YXIgc3ByaXRlUHJvdmlkZXJzID0gW10sXG4gICAgICAgICAgICBpY29uU2l6ZSA9IHRoaXMucGFyYW1zLmJ1dHRvblNpemU7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvdmlkZXJzW2ldLnRvU3RyaW5nKCkgPT09ICdhcHBsZScgJiYgdGhpcy5wYXJhbXMuYnV0dG9uVGhlbWUgPT09ICdsaWdodCcpIHtcbiAgICAgICAgICAgICAgICBzcHJpdGVQcm92aWRlcnMucHVzaCh0aGlzLnByb3ZpZGVyc1tpXS50b1N0cmluZygpLnNwbGl0KCctJylbMF0gKyAnX2xpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm92aWRlcnNbaV0uaW1nTmFtZSA9IHRoaXMucHJvdmlkZXJzW2ldLnRvU3RyaW5nKCkuc3BsaXQoJy0nKVswXSArICdfbGlnaHQnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcHJpdGVQcm92aWRlcnMucHVzaCh0aGlzLnByb3ZpZGVyc1tpXS50b1N0cmluZygpLnNwbGl0KCctJylbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpY29uU2l6ZSA9PSAndW5kZWZpbmVkJyB8fCBpc05hTihpY29uU2l6ZSkpIHtcbiAgICAgICAgICAgIGljb25TaXplID0gdGhpcy5wYXJhbXMuaXNQb3B1cCA/IHRoaXMucGx1Z2luQ29uZmlnLmRlZmF1bHRCdXR0b25TaXplT25Qb3B1cCA6IHRoaXMucGx1Z2luQ29uZmlnLmRlZmF1bHRCdXR0b25TaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGltZ0ljb25TaXplID0gTWF0aC5mbG9vcihpY29uU2l6ZSAvIDUpICogNTtcblxuICAgICAgICBpZiAoaW1nSWNvblNpemUgPCB0aGlzLnN0eWxlUHJlc2V0Lm1pblNpemUpIHtcbiAgICAgICAgICAgIGltZ0ljb25TaXplID0gdGhpcy5zdHlsZVByZXNldC5taW5TaXplO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbWdJY29uU2l6ZSA+IHRoaXMuc3R5bGVQcmVzZXQubWF4U2l6ZSkge1xuICAgICAgICAgICAgaW1nSWNvblNpemUgPSB0aGlzLnN0eWxlUHJlc2V0Lm1heFNpemU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYnRuSW1nVyA9IE1hdGgucm91bmQoaWNvblNpemUgKiB0aGlzLnN0eWxlUHJlc2V0LnJhdGlvKTtcbiAgICAgICAgdmFyIGJ0bkltZ0ggPSBpY29uU2l6ZTtcblxuICAgICAgICAvLyBzdXBwb3J0aW5nIGJ1dHRvbnMgc3RhdGVzLlxuICAgICAgICAvLyBkaWZmZXJlbnQgc3RhdGVzIGFyZSBhdmFpbGFibGUgZm9yIHRoZSBidXR0b25zOiBub3JtYWwgKG5vIHN0YXRlKSwgY29ubmVjdGVkIGFuZCBsYXN0IGxvZ2luXG4gICAgICAgIC8vIGluIHRoZSBmdXR1cmUgd2UnbGwgd2FudCB0byBzcGVjaWZ5IHRoZSByZXF1ZXN0ZWQgc3RhdGVcbiAgICAgICAgLy8gbm8gc3RhdGUgYXQgdGhlIG1vbWVudC4uXG4gICAgICAgIHZhciBzdGF0ZXMgPSAnW10nO1xuXG4gICAgICAgIC8vIHNldCB0aGUgU3ByaXRlIFJlbmRlciBFbmdpbmVcbiAgICAgICAgdGhpcy5zcHJpdGVSZW5kZXJlciA9IGdpZ3lhLmdsb2JhbC5nZXRTcHJpdGVSZW5kZXJlcnMoe1xuICAgICAgICAgICAgbG9naW5JY29uczoge1xuICAgICAgICAgICAgICAgIHBhdGg6XG4gICAgICAgICAgICAgICAgICAgICcvSFRNTExvZ2luLycgK1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0eWxlUHJlc2V0LmJhc2UgK1xuICAgICAgICAgICAgICAgICAgICAnWycgK1xuICAgICAgICAgICAgICAgICAgICBzcHJpdGVQcm92aWRlcnMuam9pbignLCcpICtcbiAgICAgICAgICAgICAgICAgICAgJ11fJyArXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcyArXG4gICAgICAgICAgICAgICAgICAgIGltZ0ljb25TaXplICogdGhpcy5waXhlbFJhdGlvICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHlsZVByZXNldC5leHQsXG4gICAgICAgICAgICAgICAgdzogYnRuSW1nVyxcbiAgICAgICAgICAgICAgICBoOiBidG5JbWdILFxuICAgICAgICAgICAgICAgIHBpeGVsUmF0aW86IHRoaXMucGl4ZWxSYXRpbyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLSBSZW5kZXJpbmcgLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgcHVibGljIHJlc2l6ZVBsdWdpbihvbGQ6IElFbGVtZW50QWN0dWFsU2l6ZSwgY3VycjogSUVsZW1lbnRBY3R1YWxTaXplKTogdm9pZCB7XG4gICAgICAgIC8vIFRPRE8gZGVmaW5nIGEgZm9ybXVsYSBmb3IgJ2lzTXV0ZXRlZCcgdG8gZGV0ZXJtaW5kIGlmIHRvIHJlcmVuZGVyLi4uXG5cbiAgICAgICAgdGhpcy5sYXN0UG9sbGVkV2lkdGggPSBjdXJyLndpZHRoO1xuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGdyaWRTaXplO1xuXG4gICAgICAgIC8vIFJlc2V0dGluZyBUaGUgSW5uZXIgQ29udGFpbmVyLlxuICAgICAgICB0aGlzLnVpQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGlmICh0aGlzLmlzSGVhZGVyRW5hYmxlZCkge1xuICAgICAgICAgICAgdmFyIGhlYWRlciA9IHRoaXMuY3JlYXRlRWxlbWVudEZyb21IVE1MU3RyaW5nKFxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMuZ2V0VGVtcGxhdGVzKCkuaGVhZGVyLCB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlclRleHQ6IHRoaXMucGFyYW1zLmhlYWRlclRleHQsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy51aUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVG9nZ2xlIExvZ2luL1dlbGNvbWUgTW9kZVxuICAgICAgICBpZiAoIXRoaXMuc2hvd1dlbGNvbWUpIHtcbiAgICAgICAgICAgIGdyaWRTaXplID0gZ3JpZFNpemUgfHwgdGhpcy5nZXRQcm92aWRlcnNHcmlkRGltZW5zaW9ucygpO1xuXG4gICAgICAgICAgICB2YXIgbG9naW5Db250YWluZXIgPSBuZXcgTG9naW5Db250YWluZXIodGhpcywgZ3JpZFNpemUpO1xuICAgICAgICAgICAgdmFyIHByb3ZpZGVycyA9IGxvZ2luQ29udGFpbmVyLmdldEh0bWxFbGVtZW50KCk7XG4gICAgICAgICAgICB0aGlzLnVpQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb3ZpZGVycyk7XG4gICAgICAgICAgICBsb2dpbkNvbnRhaW5lci5leHBhbmRJbkNvbnRhaW5lckFmdGVyUmVuZGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgd2VsY29tZUNvbnRhaW5lciA9IG5ldyBXZWxjb21lQ29udGFpbmVyKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy51aUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWxjb21lQ29udGFpbmVyLmdldEh0bWxFbGVtZW50KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNGb290ZXJFbmFibGVkKSB7XG4gICAgICAgICAgICBncmlkU2l6ZSA9IGdyaWRTaXplIHx8IHRoaXMuZ2V0UHJvdmlkZXJzR3JpZERpbWVuc2lvbnMoKTtcbiAgICAgICAgICAgIHZhciBmb290ZXJDb250YWluZXIgPSBuZXcgRm9vdGVyQ29udGFpbmVyKHRoaXMsIGdyaWRTaXplKTtcbiAgICAgICAgICAgIHRoaXMudWlDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGFpbmVyLmdldEh0bWxFbGVtZW50KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRoZSBjb29yZGluYXRlcyBvZiB0aGUgcG9wLXVwIGluIGNhc2Ugd2UgYXJlIGluIGVkaXQgbW9kZVxuICAgICAgICBpZiAodGhpcy5wbHVnaW5Nb2RlID09PSBQbHVnaW5Nb2RlLkFkZENvbm5lY3Rpb24gJiYgdGhpcy5wYXJhbXMuc2hvd1doYXRzVGhpcykge1xuICAgICAgICAgICAgdmFyIHdoYXRzdGhpc0VsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMudWlDb250YWluZXIsICdnaWd5YS1sb2dpbi1mb290ZXItd2hhdHN0aGlzJylbMF07XG4gICAgICAgICAgICB2YXIgcHJvdmlkb3JzVGFibGUgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMudWlDb250YWluZXIsICdnaWd5YS1sb2dpbi1wcm92aWRlcnMtY29udGFpbmVyJylbMF07XG5cbiAgICAgICAgICAgIHZhciBjb250YWluZXJEaW1lbnNpb25zID0gdGhpcy5nZXRDb250YWluZXJEaW1lbnNpb25zKCk7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0UmF0aW8gPSAocHJvdmlkb3JzVGFibGUub2Zmc2V0SGVpZ2h0ICogMC4wNykudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHdoYXRzdGhpc0VsZW1lbnQuc3R5bGUudG9wID0gcGFyc2VJbnQoaGVpZ2h0UmF0aW8pICsgJyUnO1xuICAgICAgICAgICAgd2hhdHN0aGlzRWxlbWVudC5zdHlsZS5sZWZ0ID0gKGNvbnRhaW5lckRpbWVuc2lvbnMudyAtIHdoYXRzdGhpc0VsZW1lbnQub2Zmc2V0V2lkdGgpIC8gMiArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tIEV2ZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvLyBXZSBuZWVkIHRoZSBiZWxvdyBtZXRob2QgdG8gbWFpbnRhaW4gYSByZWZlcmVuY2UgdG8gdGhlIGNvcnJlY3QgdGhpc1xuICAgIHByaXZhdGUgb25Vc2VyU3RhdGVDaGFuZ2UgPSBldmVudCA9PiB0aGlzLnVzZXJTdGF0ZUNoYW5nZWQoZXZlbnQpO1xuXG4gICAgcHJpdmF0ZSB1c2VyU3RhdGVDaGFuZ2VkKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudCAmJiBldmVudC51c2VyKSB7XG4gICAgICAgICAgICAvLyBXZSBhbHJlYWR5IGhhdmUgdGhlIHVzZXIgLSBubyBuZWVkIHRvIGZldGNoIHRoZSB1c2VyIGRldGFpbHNcbiAgICAgICAgICAgIHRoaXMuc2F2ZVVzZXJJbmZvQW5kUmVuZGVyUGx1Z2luKGV2ZW50LnVzZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlIGRvbid0IGhhdmUgdGhlIHVzZXIgZGV0YWlscyAtIGZldGNoIHRoZW0gYW5kIHRoZW4gcmVuZGVyIHRoZSBjb250cm9sXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXRVc2VySW5mbyhyZXN1bHQgPT4gdGhpcy5zYXZlVXNlckluZm9BbmRSZW5kZXJQbHVnaW4ocmVzdWx0LnVzZXIpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2F2ZVVzZXJJbmZvQW5kUmVuZGVyUGx1Z2luKHVzZXIpIHtcbiAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgdGhpcy5zaG93RWRpdCA9XG4gICAgICAgICAgICB0aGlzLnBsdWdpbk1vZGUgPT09IFBsdWdpbk1vZGUuQWRkQ29ubmVjdGlvbiAmJiB0aGlzLnVzZXIuaXNDb25uZWN0ZWQgJiYgIWdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdEZhbHNlKHRoaXMucGFyYW1zLnNob3dFZGl0TGluayk7XG5cbiAgICAgICAgLy8gcmVuZGVyIHRoZSBjb250cm9sXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWdpc3RlclRvR2xvYmFsRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmFkZEdsb2JhbEV2ZW50SGFuZGxlcnMoe1xuICAgICAgICAgICAgb25Mb2dpbjogdGhpcy5vblVzZXJTdGF0ZUNoYW5nZSxcbiAgICAgICAgICAgIG9uTG9nb3V0OiB0aGlzLm9uVXNlclN0YXRlQ2hhbmdlLFxuICAgICAgICAgICAgb25Db25uZWN0aW9uQWRkZWQ6IHRoaXMub25Vc2VyU3RhdGVDaGFuZ2UsXG4gICAgICAgICAgICBvbkNvbm5lY3Rpb25SZW1vdmVkOiB0aGlzLm9uVXNlclN0YXRlQ2hhbmdlLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5mYWNlYm9va1N1Z2dlc3RFbmFibGVkKSB0aGlzLmFkZEdsb2JhbEV2ZW50SGFuZGxlcignb25GYWNlYm9va0xvYWRlZCcsIHRoaXMub25Vc2VyU3RhdGVDaGFuZ2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5mYWNlYm9va1N1Z2dlc3RFbmFibGVkKSB0aGlzLnJlbW92ZUdsb2JhbEV2ZW50SGFuZGxlcignb25GYWNlYm9va0xvYWRlZCcsIHRoaXMub25Vc2VyU3RhdGVDaGFuZ2UpO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlR2xvYmFsRXZlbnRIYW5kbGVycyh7XG4gICAgICAgICAgICBvbkxvZ2luOiB0aGlzLm9uVXNlclN0YXRlQ2hhbmdlLFxuICAgICAgICAgICAgb25Mb2dvdXQ6IHRoaXMub25Vc2VyU3RhdGVDaGFuZ2UsXG4gICAgICAgICAgICBvbkNvbm5lY3Rpb25BZGRlZDogdGhpcy5vblVzZXJTdGF0ZUNoYW5nZSxcbiAgICAgICAgICAgIG9uQ29ubmVjdGlvblJlbW92ZWQ6IHRoaXMub25Vc2VyU3RhdGVDaGFuZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Qcm92aWRlckNsaWNrSGFuZGxlcihlOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCkge1xuXG4gICAgICAgIHZhciB0YXJnZXQ6IGFueSA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcblxuICAgICAgICAvLyBGaW5kIHRoZSBwYXJlbnQgaG9sZGluZyB0aGUgcHJvdmlkZXIgYXR0cmlidXRlLlxuICAgICAgICB3aGlsZSAodGFyZ2V0ICYmICF0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWdpZ3lhLXByb3ZpZGVyJykpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgLy8gZ2V0IHRoZSBwcm92aWRlciBuYW1lIGZyb20gdGhlIGV2ZW50XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXJOYW1lID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1naWd5YS1wcm92aWRlcicpO1xuXG4gICAgICAgICAgICBpZiAocHJvdmlkZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gZmluZCB0aGUgcHJvdmlkZXIgaW4gdGhlIHByaXZhdGUgcHJvdmlkZXJzIHJlcG9zaXRvcnlcbiAgICAgICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSBnaWd5YS5fLnByb3ZpZGVycy5nZXRQcm92aWRlckJ5TmFtZShwcm92aWRlck5hbWUsIHRoaXMucHJvdmlkZXJzKTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIG5vdCBmb3VuZCwgc2VhcmNoIHRoZSBnbG9iYWwgcHJvdmlkZXJzIHJlcG9zaXRvcnlcbiAgICAgICAgICAgICAgICBpZiAoIXByb3ZpZGVyKSBwcm92aWRlciA9IGdpZ3lhLl8ucHJvdmlkZXJzLmdldFByb3ZpZGVyQnlOYW1lKHByb3ZpZGVyTmFtZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBwYXJhbXMgZm9yIHRoZSByZXF1ZXN0XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI6IHByb3ZpZGVyTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmVycm9yQ29kZSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlcy5yZXF1ZXN0UGFyYW1zLmdldEluZm9SZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVzLnJlcXVlc3RQYXJhbXMuY29udGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVzLmNvbnRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEVycm9yRnJvbVJlc3BvbnNlKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtcy5pc1BvcHVwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5fY2xvc2VDb21wb25lbnQodGhpcy5wYXJhbXMucmlkLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gdGhpcy5wbHVnaW5Nb2RlID09PSBQbHVnaW5Nb2RlLkFkZENvbm5lY3Rpb24gJiYgcmVzLm9wZXJhdGlvbiA9PSAnYWRkQ29ubmVjdGlvbicgPyAnY29ubmVjdGlvbkFkZGVkJyA6ICdsb2dpbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9FdmVudCA9IGdpZ3lhLl8uYWRkVXNlckluZm9Ub0V2ZW50KHJlcywgeyBwcm92aWRlcjogcHJvdmlkZXIsIHJlc3BvbnNlOiByZXMgfSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaFBsdWdpbkV2ZW50KGV2ZW50TmFtZSwgb0V2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKHByb3ZpZGVyLklEID09IDQxMjEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9CdXR0b24gPSBwcm92aWRlclsnYnV0dG9uRGF0YSddO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXNbJ29wZW5JRFByb3ZpZGVyTmFtZSddID0gb0J1dHRvbi5wcm92aWRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zWydvcGVuSURQcm92aWRlckxvZ28nXSA9IG9CdXR0b24ubG9nb1VSTDtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zWydvcGVuSURVUkwnXSA9IG9CdXR0b24ub3BlbklEVVJMO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwcm92aWRlci5JRCAhPSA0MTIxIHx8IHByb3ZpZGVyWydidXR0b25EYXRhJ10udHlwZSA9PSAnb3BlbklEJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wbHVnaW5Nb2RlID09PSBQbHVnaW5Nb2RlLkFkZENvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm92aWRlcklkZW50aXR5SW5mb3JtYXRpb24gPSB0aGlzLmdldElkZW50aXR5SW5mb0ZvclByb3ZpZGVyKHByb3ZpZGVyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ZpZGVySWRlbnRpdHlJbmZvcm1hdGlvbi5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE92ZXJ3cml0ZSB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMuY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hQbHVnaW5FdmVudCgncGVybWlzc2lvbnMnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcjogcHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5yZXF1ZXN0UGVybWlzc2lvbnModGhpcy5wYXJhbXMsIHRoaXMucGFyYW1zLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5zb2NpYWxpemUuY29ubmVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhcmFtc1snYWNjb3VudHNTb2NpYWxMb2dpbiddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlmIGZvciAnU2NyZWVuIHNldHMnXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5hY2NvdW50cy5zb2NpYWxMb2dpbih0aGlzLnBhcmFtcywgdGhpcy5wYXJhbXMsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5zb2NpYWxpemUubG9naW4odGhpcy5wYXJhbXMsIHRoaXMucGFyYW1zLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZXZlbnRPYmo7XG4gICAgICAgICAgICBpZiAocHJvdmlkZXJbJ2J1dHRvbkRhdGEnXSkgZXZlbnRPYmogPSB7IGJ1dHRvbjogcHJvdmlkZXJbJ2J1dHRvbkRhdGEnXSB9O1xuXG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoUGx1Z2luRXZlbnQoJ2J1dHRvbkNsaWNrZWQnLCBldmVudE9iaik7XG4gICAgICAgIH1cblxuICAgICAgICBlLmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gICAgICAgIGlmIChlLnN0b3BQcm9wYWdhdGlvbikgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tIENhbGN1bGF0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGNvbnRhaW5lciBkaW1lbnNpb25zIHRvIGVuYWJsZSByZXNwb25zaXZlIGNhbGN1bGF0aW9ucy5cbiAgICBwdWJsaWMgZ2V0Q29udGFpbmVyRGltZW5zaW9ucygpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5wYXJhbXMud2lkdGhOdW07XG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5yZXNwb25zaXZlV2lkdGgpIHtcbiAgICAgICAgICAgIC8vIEZpeCBmb3IgZ2V0dGluZyB0aGUgUFJFQ0lTRSBkaW1lbnNpb25zIG9mIHRoZSBjb250YWluZXIgZWxlbWVudCBuZXN0ZWQgaW5zaWRlIGFuIHVua25vd24gY29udGFpbmVyIHdpdGggbm8gc3BlY2lmaWMgd2lkdGguXG4gICAgICAgICAgICAvLyBTZWU6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQxMDQ5MDUvb2Zmc2V0d2lkdGgtbm90LXNhbWUtaW4tZGlmZmVyZW50LWJyb3dzZXJzLlxuICAgICAgICAgICAgY29uc3QgYm91bmRpbmdCb3g6IGFueSA9XG4gICAgICAgICAgICAgICAgKHRoaXMudWlDb250YWluZXIub2Zmc2V0UGFyZW50ICYmIHRoaXMudWlDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICYmIHRoaXMudWlDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpIHx8IHt9O1xuICAgICAgICAgICAgY29uc3QgcHhXaWR0aCA9IGJvdW5kaW5nQm94LndpZHRoIHx8IGJvdW5kaW5nQm94LnJpZ2h0IC0gYm91bmRpbmdCb3gubGVmdCB8fCB0aGlzLnVpQ29udGFpbmVyLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgd2lkdGggPSAocHhXaWR0aCAvIDEwMCkgKiB0aGlzLnBhcmFtcy53aWR0aE51bTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaDogdGhpcy5wYXJhbXMuaGVpZ2h0TnVtLFxuICAgICAgICAgICAgdzogd2lkdGgsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRQcm92aWRlcnNHcmlkRGltZW5zaW9ucygpIHtcbiAgICAgICAgLy8gY2FsY3VsYXRlIHdpdGhvdXQgdGhlIHBhZ2dlclxuICAgICAgICB2YXIgcHJvdmlkZXJzR3JpZERpbWVuc2lvbnM6IElQcm92aWRlcnNHcmlkRGltZW5zaW9ucyA9IHRoaXMuX2dldFByb3ZpZGVyc0dyaWREaW1lbnNpb25zKDApO1xuXG4gICAgICAgIC8vIHdlIGhhdmUgbW9yZSBwcm92aWRlcnMgdGhlbiBzcGFjZVxuICAgICAgICB2YXIgbmVlZFJlQ2FsY3VsYXRpb24gPSB0aGlzLnByb3ZpZGVycy5sZW5ndGggPiBwcm92aWRlcnNHcmlkRGltZW5zaW9ucy5yb3dzICogcHJvdmlkZXJzR3JpZERpbWVuc2lvbnMuY29sdW1ucztcblxuICAgICAgICBpZiAobmVlZFJlQ2FsY3VsYXRpb24pIHtcbiAgICAgICAgICAgIHZhciBpc0Zsb2F0aW5nQXJyb3dzID0gdGhpcy5wYWdpbmdCdXR0b25TdHlsZS5nZXRTdHlsZU5hbWUodGhpcykgPT09ICdmbG9hdGluZyc7XG5cbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB3aXRoIHRoZSBwYWdlclxuICAgICAgICAgICAgcHJvdmlkZXJzR3JpZERpbWVuc2lvbnMgPSB0aGlzLl9nZXRQcm92aWRlcnNHcmlkRGltZW5zaW9ucyhpc0Zsb2F0aW5nQXJyb3dzID8gdGhpcy5wbHVnaW5Db25maWcuZmxvYXRpbmdBcnJvd1dpZHRoIDogdGhpcy5wbHVnaW5Db25maWcuYXJyb3dXaWR0aCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMucHJvdmlkZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgcHJvdmlkZXJzR3JpZERpbWVuc2lvbnMuY29sdW1ucyA9IHByb3ZpZGVyc0dyaWREaW1lbnNpb25zLnJvd3MgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTm9ybWFsaXplIFRoZSBDb2xzIC8gUm93c1xuICAgICAgICAgICAgLy8gd2UgZG9udCBoYXZlIHBhZ2luZywgc28gd2UgbmVlZCB0byBiYWxhbmNlIGFsbCB0aGUgcHJvdmlkZXJzXG5cbiAgICAgICAgICAgIC8vIEdldHRpbmcgdGhlIG51bWJlciBvZiByb3dzIGN1cnJlbnRseSBvY2N1cGllZCB3aXRoIHByb3ZpZGVyc1xuICAgICAgICAgICAgdmFyIGZhY3RvcmlhbERpdmlkZXIgPSBNYXRoLmNlaWwodGhpcy5wcm92aWRlcnMubGVuZ3RoIC8gcHJvdmlkZXJzR3JpZERpbWVuc2lvbnMuY29sdW1ucyk7XG5cbiAgICAgICAgICAgIC8vIHJlc2l6ZSB0aGUgJ2NvbHMnIHNvIHRoZSBncmlkIGNhbiBmaXQgYWxsIHRoZSBwcm92aWRlcnMgaW4gdGhlIHNhbWUgdGFyZ2V0IHJvd3NcbiAgICAgICAgICAgIHByb3ZpZGVyc0dyaWREaW1lbnNpb25zLmNvbHVtbnMgPSBNYXRoLmNlaWwodGhpcy5wcm92aWRlcnMubGVuZ3RoIC8gZmFjdG9yaWFsRGl2aWRlcik7XG4gICAgICAgICAgICBwcm92aWRlcnNHcmlkRGltZW5zaW9ucy5yb3dzID0gZmFjdG9yaWFsRGl2aWRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm92aWRlcnNHcmlkRGltZW5zaW9ucztcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gYSBncmlkIGRpbWVuc2lvbiBzaXplIGZvciB0aGUgaWNvbnMgcHJlc2V0XG4gICAgcHJpdmF0ZSBfZ2V0UHJvdmlkZXJzR3JpZERpbWVuc2lvbnMoYXJyb3dXaWR0aDogbnVtYmVyKSB7XG4gICAgICAgIC8vIENvbnN0cy5cbiAgICAgICAgdmFyIHZlcnRpY2FsTWFyZ2luID0gNTtcbiAgICAgICAgdmFyIGhvcml6b250YWxNYXJnaW4gPSA1O1xuICAgICAgICB2YXIgYnV0dG9uSGVpZ2h0ID0gdGhpcy5wYXJhbXMuYnV0dG9uU2l6ZTtcbiAgICAgICAgdmFyIGJ1dHRvbldpZHRoID0gTWF0aC5jZWlsKHRoaXMucGFyYW1zLmJ1dHRvblNpemUgKiB0aGlzLnN0eWxlUHJlc2V0LnJhdGlvKTtcblxuICAgICAgICAvLyBNaW5pbXVtIHNpemUgZm9yIHRoZSBwcm92aWRlcidzIGdyaWQgaXMgMSBidXR0b25cbiAgICAgICAgdmFyIG1pbmltdW1HcmlkSGVpZ2h0ID0gYnV0dG9uSGVpZ2h0O1xuICAgICAgICB2YXIgbWluaW11bUdyaWRXaWR0aCA9IGJ1dHRvbldpZHRoO1xuXG4gICAgICAgIHZhciBjb250YWluZXJEaW1lbnNpb25zID0gdGhpcy5nZXRDb250YWluZXJEaW1lbnNpb25zV2l0aG91dFBhZ2VyQW5kRm9vdGVyKGFycm93V2lkdGgsIG1pbmltdW1HcmlkSGVpZ2h0KTtcbiAgICAgICAgdmFyIGNvbHVtbnNBbmRSb3dzID0gdGhpcy5nZXRDb2x1bW5zQW5kUm93c09mUHJvdmlkZXJzR3JpZChcbiAgICAgICAgICAgIGNvbnRhaW5lckRpbWVuc2lvbnMuY29udGFpbmVyV2lkdGgsXG4gICAgICAgICAgICBjb250YWluZXJEaW1lbnNpb25zLmNvbnRhaW5lckhlaWdodCxcbiAgICAgICAgICAgIGJ1dHRvbldpZHRoLFxuICAgICAgICAgICAgYnV0dG9uSGVpZ2h0LFxuICAgICAgICAgICAgaG9yaXpvbnRhbE1hcmdpbixcbiAgICAgICAgICAgIHZlcnRpY2FsTWFyZ2luLFxuICAgICAgICApO1xuICAgICAgICB2YXIgcHJvdmlkZXJzR3JpZFdpZHRoQW5kSGVpZ2h0ID0gdGhpcy5nZXRXaWR0aEFuZEhlaWdodE9mUHJvdmlkZXJzR3JpZChcbiAgICAgICAgICAgIGNvbnRhaW5lckRpbWVuc2lvbnMuY29udGFpbmVySGVpZ2h0LFxuICAgICAgICAgICAgY29sdW1uc0FuZFJvd3MuY29sdW1ucyxcbiAgICAgICAgICAgIGJ1dHRvbldpZHRoLFxuICAgICAgICAgICAgbWluaW11bUdyaWRXaWR0aCxcbiAgICAgICAgICAgIG1pbmltdW1HcmlkSGVpZ2h0LFxuICAgICAgICAgICAgaG9yaXpvbnRhbE1hcmdpbixcbiAgICAgICAgICAgIGFycm93V2lkdGgsXG4gICAgICAgICk7XG5cbiAgICAgICAgdmFyIGdyaWQ6IElQcm92aWRlcnNHcmlkRGltZW5zaW9ucyA9IHtcbiAgICAgICAgICAgIGNvbHVtbnM6IGNvbHVtbnNBbmRSb3dzLmNvbHVtbnMsXG4gICAgICAgICAgICByb3dzOiBjb2x1bW5zQW5kUm93cy5yb3dzLFxuICAgICAgICAgICAgaGVpZ2h0OiBwcm92aWRlcnNHcmlkV2lkdGhBbmRIZWlnaHQuaGVpZ2h0LFxuICAgICAgICAgICAgd2lkdGg6IHByb3ZpZGVyc0dyaWRXaWR0aEFuZEhlaWdodC53aWR0aCxcbiAgICAgICAgICAgIHRvdGFsV2lkdGhJbmNsdWRpbmdQYWdlcjogcHJvdmlkZXJzR3JpZFdpZHRoQW5kSGVpZ2h0LnRvdGFsV2lkdGhJbmNsdWRpbmdQYWdlcixcbiAgICAgICAgICAgIGlzUGFnZWQ6ICFhcnJvd1dpZHRoLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBncmlkO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q29udGFpbmVyRGltZW5zaW9uc1dpdGhvdXRQYWdlckFuZEZvb3RlcihhcnJvd1dpZHRoOiBudW1iZXIsIG1pbmltdW1HcmlkSGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgICAgLy8gZ2V0IHRoZSBhY3R1YWwgYXZhaWxhYmxlIHNwYWNlIG9uIHRoZSBjb250YWluZXJcbiAgICAgICAgdmFyIGNvbnRhaW5lckRpbWVuc2lvbiA9IHRoaXMuZ2V0Q29udGFpbmVyRGltZW5zaW9ucygpO1xuXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZWZmZWN0aXZlIHNpemUgb2YgdGhlIGNvbnRhaW5lcnNcbiAgICAgICAgdmFyIGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyRGltZW5zaW9uLncgLSBhcnJvd1dpZHRoICogMjtcbiAgICAgICAgdmFyIGNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lckRpbWVuc2lvbi5oID4gbWluaW11bUdyaWRIZWlnaHQgPyBjb250YWluZXJEaW1lbnNpb24uaCA6IG1pbmltdW1HcmlkSGVpZ2h0O1xuXG4gICAgICAgIGlmICh0aGlzLmlzRm9vdGVyRW5hYmxlZCkge1xuICAgICAgICAgICAgY29udGFpbmVySGVpZ2h0IC09IHRoaXMucGx1Z2luQ29uZmlnLmZvb3RlckhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb250YWluZXJXaWR0aDogY29udGFpbmVyV2lkdGgsXG4gICAgICAgICAgICBjb250YWluZXJIZWlnaHQ6IGNvbnRhaW5lckhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENvbHVtbnNBbmRSb3dzT2ZQcm92aWRlcnNHcmlkKFxuICAgICAgICBjb250YWluZXJXaWR0aDogbnVtYmVyLFxuICAgICAgICBjb250YWluZXJIZWlnaHQ6IG51bWJlcixcbiAgICAgICAgYnV0dG9uV2lkdGg6IG51bWJlcixcbiAgICAgICAgYnV0dG9uSGVpZ2h0OiBudW1iZXIsXG4gICAgICAgIGhvcml6b250YWxNYXJnaW46IG51bWJlcixcbiAgICAgICAgdmVydGljYWxNYXJnaW46IG51bWJlcixcbiAgICApIHtcbiAgICAgICAgLy8gY2FsY3VsYXRpbmcgYSB2aXJ0dWFsIGdyaWQgdG8gZGV0ZXJtaW5kIGhvdyBtYW55IHByb3ZpZGVycyBjYW4gZml0IGluIHRoZSBjb250YWluZXIuXG5cbiAgICAgICAgdmFyIGNvbHVtbnNDYWxjdWxhdGlvbiA9IE1hdGguZmxvb3IoY29udGFpbmVyV2lkdGggLyAoYnV0dG9uV2lkdGggKyBob3Jpem9udGFsTWFyZ2luKSk7XG4gICAgICAgIHZhciBjb2x1bW5zID0gY29sdW1uc0NhbGN1bGF0aW9uID4gdGhpcy5wcm92aWRlcnMubGVuZ3RoID8gdGhpcy5wcm92aWRlcnMubGVuZ3RoIDogY29sdW1uc0NhbGN1bGF0aW9uO1xuXG4gICAgICAgIHZhciByb3dzID0gTWF0aC5mbG9vcigoY29udGFpbmVySGVpZ2h0ICsgdmVydGljYWxNYXJnaW4pIC8gKGJ1dHRvbkhlaWdodCArIHZlcnRpY2FsTWFyZ2luKSk7XG5cbiAgICAgICAgLy8gc2V0dGluZyBtaW5pbXVtIGNvbHVtbnMgcm93c1xuICAgICAgICBjb2x1bW5zID0gY29sdW1ucyA+IDAgPyBjb2x1bW5zIDogMTtcbiAgICAgICAgcm93cyA9IHJvd3MgPiAwID8gcm93cyA6IDE7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbHVtbnM6IGNvbHVtbnMsXG4gICAgICAgICAgICByb3dzOiByb3dzLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0V2lkdGhBbmRIZWlnaHRPZlByb3ZpZGVyc0dyaWQoXG4gICAgICAgIGNvbnRhaW5lckhlaWdodDogbnVtYmVyLFxuICAgICAgICBjb2x1bW5zOiBudW1iZXIsXG4gICAgICAgIGJ1dHRvbldpZHRoOiBudW1iZXIsXG4gICAgICAgIG1pbmltdW1HcmlkV2lkdGg6IG51bWJlcixcbiAgICAgICAgbWluaW11bUdyaWRIZWlnaHQ6IG51bWJlcixcbiAgICAgICAgaG9yaXpvbnRhbE1hcmdpbjogbnVtYmVyLFxuICAgICAgICBhcnJvd1dpZHRoOiBudW1iZXIsXG4gICAgKSB7XG4gICAgICAgIC8vIGNhbGN1bGF0aW5nIHRoZSBpbm5lciBzaXplIG9mIHRoZSBncmlkIGNvbnRhaW5lclxuICAgICAgICB2YXIgaCA9IGNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgdmFyIHcgPSBjb2x1bW5zICogKGJ1dHRvbldpZHRoICsgaG9yaXpvbnRhbE1hcmdpbikgLSBob3Jpem9udGFsTWFyZ2luO1xuXG4gICAgICAgIC8vIHNldHRpbmcgbWluaW11bS5cbiAgICAgICAgdyA9IHcgPj0gbWluaW11bUdyaWRXaWR0aCA/IHcgOiBtaW5pbXVtR3JpZFdpZHRoO1xuICAgICAgICBoID0gaCA+PSBtaW5pbXVtR3JpZEhlaWdodCA/IGggOiBtaW5pbXVtR3JpZEhlaWdodDtcblxuICAgICAgICB2YXIgdG90YWxXaWR0aEluY2x1ZGluZ1BhZ2VyID0gdyArIGFycm93V2lkdGggKiAyO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWlnaHQ6IGgsXG4gICAgICAgICAgICB3aWR0aDogdyxcbiAgICAgICAgICAgIHRvdGFsV2lkdGhJbmNsdWRpbmdQYWdlcjogdG90YWxXaWR0aEluY2x1ZGluZ1BhZ2VyLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSGVscGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgcHVibGljIGdldElkZW50aXR5SW5mb0ZvclByb3ZpZGVyKHByb3ZpZGVyOiBhbnkpIHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXJJZGVudGl0eUluZm86IElQcm92aWRlcklkZW50aXR5SW5mb3JtYXRpb24gPSB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGlzQ29ubmVjdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGhhc0FsbFJlcXVpcmVkUGVybWlzc2lvbnM6IHRydWUsXG4gICAgICAgICAgICByZXF1aXJlZFBlcm1pc3Npb25zOiBbXSxcbiAgICAgICAgICAgIGlkZW50aXR5OiBudWxsLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmKCFwcm92aWRlcil7XG4gICAgICAgICAgICByZXR1cm4gcHJvdmlkZXJJZGVudGl0eUluZm87XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy51c2VyICYmIHRoaXMudXNlci5pZGVudGl0aWVzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpZGVudGl0eSBpbiB0aGlzLnVzZXIuaWRlbnRpdGllcykge1xuICAgICAgICAgICAgICAgIHZhciBjdXJJZGVudGl0eSA9IHRoaXMudXNlci5pZGVudGl0aWVzW2lkZW50aXR5XTtcbiAgICAgICAgICAgICAgICBpZiAoY3VySWRlbnRpdHkucHJvdmlkZXIgPT0gcHJvdmlkZXIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm92aWRlcklkZW50aXR5SW5mby5uYW1lID0gcHJvdmlkZXIubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJJZGVudGl0eUluZm8uaWRlbnRpdHkgPSBjdXJJZGVudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJJZGVudGl0eUluZm8uaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvdmlkZXJJZGVudGl0eUluZm8uaWRlbnRpdHkpIHtcbiAgICAgICAgICAgIGlmIChwcm92aWRlcklkZW50aXR5SW5mby5pZGVudGl0eS5taXNzaW5nUGVybWlzc2lvbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWlzc2luZ1Blcm1pc3Npb25zU3RyaW5nID0gJywnICsgcHJvdmlkZXJJZGVudGl0eUluZm8uaWRlbnRpdHkubWlzc2luZ1Blcm1pc3Npb25zLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCAnJykgKyAnLCc7XG4gICAgICAgICAgICAgICAgdmFyIG5lZWRlZFBlcm1pc3Npb25zID0gZ2lneWEudXRpbHMub2JqZWN0LmV4dHJhY3RQcm9wZXJ0eSh0aGlzLnBhcmFtcywgcHJvdmlkZXIubmFtZSArICdFeHRyYVBlcm1pc3Npb25zJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFuZWVkZWRQZXJtaXNzaW9ucykgbmVlZGVkUGVybWlzc2lvbnMgPSBnaWd5YS51dGlscy5vYmplY3QuZXh0cmFjdFByb3BlcnR5KHRoaXMucGFyYW1zLCAnZXh0cmFQZXJtaXNzaW9ucycpO1xuICAgICAgICAgICAgICAgIGlmICghbmVlZGVkUGVybWlzc2lvbnMpIG5lZWRlZFBlcm1pc3Npb25zID0gJyc7XG4gICAgICAgICAgICAgICAgbmVlZGVkUGVybWlzc2lvbnMgPSBuZWVkZWRQZXJtaXNzaW9ucy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIHZhciBhck5lZWRlZFBlcm1pc3Npb25zID0gbmVlZGVkUGVybWlzc2lvbnMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpUGVybWlzc2lvbiA9IDA7IGlQZXJtaXNzaW9uIDwgYXJOZWVkZWRQZXJtaXNzaW9ucy5sZW5ndGg7IGlQZXJtaXNzaW9uKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQZXJtaXNzaW9uc1N0cmluZyAmJiBtaXNzaW5nUGVybWlzc2lvbnNTdHJpbmcudG9Mb3dlckNhc2UoKS5pbmRleE9mKCcsJyArIGFyTmVlZGVkUGVybWlzc2lvbnNbaVBlcm1pc3Npb25dICsgJywnKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJJZGVudGl0eUluZm8uaGFzQWxsUmVxdWlyZWRQZXJtaXNzaW9ucyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJJZGVudGl0eUluZm8ucmVxdWlyZWRQZXJtaXNzaW9ucy5wdXNoKGFyTmVlZGVkUGVybWlzc2lvbnNbaVBlcm1pc3Npb25dKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm92aWRlcklkZW50aXR5SW5mbztcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlRWxlbWVudEZyb21IVE1MU3RyaW5nKGVsZW1lbnRIdG1sKSB7XG4gICAgICAgIHZhciBlbGVtZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZWxlbWVudFdyYXBwZXIuaW5uZXJIVE1MID0gZWxlbWVudEh0bWw7XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRXcmFwcGVyLmNoaWxkTm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRVc2VySW5mbyhjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XG4gICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5nZXRVc2VySW5mbyh0aGlzLnBhcmFtcywge1xuICAgICAgICAgICAgaW5jbHVkZUFsbElkZW50aXRpZXM6IHRydWUsXG4gICAgICAgICAgICBjYWxsYmFjazogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvckNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSByZXNwb25zZS51c2VyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFZGl0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luTW9kZSA9PT0gUGx1Z2luTW9kZS5BZGRDb25uZWN0aW9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuaXNDb25uZWN0ZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFnaWd5YS51dGlscy52YWxpZGF0aW9uLmlzRXhwbGljaXRGYWxzZSh0aGlzLnBhcmFtcy5zaG93RWRpdExpbmspO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFcnJvckZyb21SZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFN0eWxlKGJ1dHRvbnNTdHlsZSk6IGFueSB7XG4gICAgICAgIHN3aXRjaCAoYnV0dG9uc1N0eWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Z1bGxsb2dvY29sb3JlZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmF0aW86IDIuNixcbiAgICAgICAgICAgICAgICAgICAgYmFzZTogJ0Z1bGxMb2dvQ29sb3JlZC8nLFxuICAgICAgICAgICAgICAgICAgICBleHQ6ICcucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgbm9Db25uZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgJ2Z1bGxsb2dvJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByYXRpbzogMi42LFxuICAgICAgICAgICAgICAgICAgICBiYXNlOiAnRnVsbExvZ28vJyxcbiAgICAgICAgICAgICAgICAgICAgZXh0OiAnLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIG5vQ29ubmVjdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlICdzaWduaW53aXRoJzpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICByYXRpbzogNy4wNSxcbiAgICAgICAgICAgICAgICAgICAgYmFzZTogJ1NpZ25JbldpdGgvJyxcbiAgICAgICAgICAgICAgICAgICAgZXh0OiAnLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIG5vTGFzdExvZ2luOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBub0Nvbm5lY3RlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbWluU2l6ZTogMjAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmF0aW86IDEsXG4gICAgICAgICAgICAgICAgICAgIGJhc2U6ICcnLFxuICAgICAgICAgICAgICAgICAgICBleHQ6ICcucG5nJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRMYXN0TG9naW4oKSB7XG4gICAgICAgIHJldHVybiBnaWd5YS5fLmFwaUFkYXB0ZXIuZ2V0U3RvcmFnZSgpLmdldEl0ZW0oJ19naWdfbGxwJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldExhc3RMb2dpbk5hbWUoKSB7XG4gICAgICAgIHJldHVybiBnaWd5YS5fLmFwaUFkYXB0ZXIuZ2V0U3RvcmFnZSgpLmdldEl0ZW0oJ19naWdfbGx1Jyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwYXJzZVhNTChkYXRhKSB7XG4gICAgICAgIHZhciB4bWwsIHRtcDtcbiAgICAgICAgaWYgKCFkYXRhIHx8IHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdXBwb3J0OiBJRTlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRtcCA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgICAgIHhtbCA9IHRtcC5wYXJzZUZyb21TdHJpbmcoZGF0YSwgJ3RleHQveG1sJyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHhtbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geG1sO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNUcnVlKHZhbHVlLCBkZWZhdWx0VmFsdWUgPSAnJyk6IGFueSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgKHZhbHVlID09IHRydWUgfHwgdmFsdWUudG9Mb3dlckNhc2UoKSA9PSAndHJ1ZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVFbGVtbmV0QmxvY2soZWxlbWVudFR5cGU6IHN0cmluZywgYXR0cmlidXRlcz86IGFueSwgY29udGVudD86IHN0cmluZykge1xuICAgICAgICB2YXIgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG5cbiAgICAgICAgZm9yICh2YXIgYXR0cmlidXRlIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsbTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IElNYXAgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvYXJyYXknO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQYWdpbmdCdXR0b25TdHlsZUNob2ljZUluZm8ge1xuICAgIGxhc3RQb2xsZWRXaWR0aDogbnVtYmVyO1xuICAgIGlzTW9iaWxlVUk6IGJvb2xlYW47IC8vIHNob3VsZCBjb21lIGZvcm0gYmFzZVBsdWdpbiAtIGp1c3QgbGlrZSBpbiBzY3JlZW5TZXRcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVBhZ2luZ0J1dHRvblN0eWxlIHtcbiAgICBnZXRTdHlsZUNsYXNzKGluZm86IElQYWdpbmdCdXR0b25TdHlsZUNob2ljZUluZm8pOiBzdHJpbmc7XG4gICAgZ2V0U3R5bGVOYW1lKGluZm8pOiBzdHJpbmc7XG59XG5mdW5jdGlvbiBzaW1wbGVTdHlsZShzdHlsZU5hbWU6IHN0cmluZyk6IElQYWdpbmdCdXR0b25TdHlsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0U3R5bGVDbGFzczogKCkgPT4gJ2dpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXItJyArIHN0eWxlTmFtZSxcbiAgICAgICAgZ2V0U3R5bGVOYW1lOiBpbmZvID0+IHN0eWxlTmFtZSxcbiAgICB9O1xufVxuZXhwb3J0IHZhciBQYWdpbmdCdXR0b25TdHlsZXM6IElNYXA8SVBhZ2luZ0J1dHRvblN0eWxlPiA9IHtcbiAgICBhcnJvd3M6IHNpbXBsZVN0eWxlKCdhcnJvd3MnKSxcbiAgICBuZXdBcnJvd3M6IHNpbXBsZVN0eWxlKCduZXdBcnJvd3MnKSxcbiAgICBmbG9hdGluZzogc2ltcGxlU3R5bGUoJ2Zsb2F0aW5nJyksXG4gICAgYXV0bzoge1xuICAgICAgICBnZXRTdHlsZUNsYXNzOiBpbmZvID0+IHtcbiAgICAgICAgICAgIHZhciBzdHlsZU5hbWUgPSBQYWdpbmdCdXR0b25TdHlsZXNbJ2F1dG8nXS5nZXRTdHlsZU5hbWUoaW5mbyk7XG4gICAgICAgICAgICByZXR1cm4gUGFnaW5nQnV0dG9uU3R5bGVzW3N0eWxlTmFtZV0uZ2V0U3R5bGVDbGFzcyhpbmZvKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0U3R5bGVOYW1lOiBpbmZvID0+IChpbmZvLmlzTW9iaWxlVUkgJiYgKCFpbmZvLmxhc3RQb2xsZWRXaWR0aCB8fCBpbmZvLmxhc3RQb2xsZWRXaWR0aCA8IDUwMCkgPyAnZmxvYXRpbmcnIDogJ25ld0Fycm93cycpLFxuICAgIH0sXG59O1xuIiwiZXhwb3J0IGNsYXNzIFV0aWxzIHtcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUVsZW1lbnRGcm9tSFRNTFN0cmluZyhlbGVtZW50SHRtbCkge1xuICAgICAgICB2YXIgZWxlbWVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGVsZW1lbnRXcmFwcGVyLmlubmVySFRNTCA9IGVsZW1lbnRIdG1sO1xuXG4gICAgICAgIHJldHVybiBlbGVtZW50V3JhcHBlci5jaGlsZE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENvbnRhaW5lckJhc2UgfSBmcm9tICdzcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvQ29udGFpbmVyQmFzZSc7XG5pbXBvcnQgeyBMb2dpblBsdWdpbiB9IGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9Mb2dpblBsdWdpbic7XG5pbXBvcnQgKiBhcyBfdGhyb3R0bGUgZnJvbSAnbG9kYXNoLnRocm90dGxlJztcbmltcG9ydCB7UFJPVklERVJfQ0xJQ0tfVEhST1RUTEV9IGZyb20gXCIuL0NvbnN0c1wiO1xuXG5leHBvcnQgY2xhc3MgV2VsY29tZUNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lckJhc2Uge1xuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIEVsZW1lbnRzU2VsZWN0b3IgPSB7XG4gICAgICAgIGNvbnRhaW5lcjogJ2dpZ3lhLWxvZ2luLXdlbGNvbWUtY29udGFpbmVyJyxcbiAgICAgICAgdXNlcjogJ2dpZ3lhLWxvZ2luLXdlbGNvbWUtdXNlcicsXG4gICAgICAgIHByb3ZpZGVyOiAnZ2lneWEtbG9naW4td2VsY29tZS1wcm92aWRlcicsXG4gICAgICAgIHNpZ25pbmxpbms6ICdnaWd5YS1sb2dpbi13ZWxjb21lLXNpZ25pbi1saW5rJyxcbiAgICAgICAgZ3JlZXRpbmc6ICdnaWd5YS1sb2dpbi13ZWxjb21lLWdyZWV0aW5nJyxcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwbHVnaW46IExvZ2luUGx1Z2luKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy5wbHVnaW4uZ2V0VGVtcGxhdGVzKClbJ3dlbGNvbWUnXTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5wbHVnaW4uY3JlYXRlRWxlbWVudEZyb21IVE1MU3RyaW5nKHRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SHRtbEVsZW1lbnQoKSB7XG4gICAgICAgIHZhciBwcm92aWRlckJ1dHRvblNpemVzID0gdGhpcy5nZXRXZWxjb21lQnV0dG9uU2l6ZWQoKTtcblxuICAgICAgICB0aGlzLnNldEdyZWV0aW5nRWxlbWVudCgpO1xuICAgICAgICB0aGlzLnNldFNpZ25JblVzaW5nQW5vdGhlckFjY291bnQoKTtcblxuICAgICAgICAvLyBTZXR0aW5nIFRoZSBQcm92aWRlciBCdXR0b25cbiAgICAgICAgLy8gTk9USUNFIC0ga2VlcGluZyB0aGlzIGZvciBsYXN0IHRvIG1lYXN1cmUgdGhlIGNvbnRhaW5lciBhbmQgYXBwbGF5IG1hcmdpbiB0byBmaXQgaW4gdGhlIGNvbnRhaW5lLlxuICAgICAgICB0aGlzLnNldFByb3ZpZGVyQ2VsbEVsZW1lbnQocHJvdmlkZXJCdXR0b25TaXplcy5pbWFnZVNpemUsIHByb3ZpZGVyQnV0dG9uU2l6ZXMuYnV0dG9uU2l6ZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFdlbGNvbWVCdXR0b25TaXplZCgpIHtcbiAgICAgICAgdmFyIHdlbGNvbWVCdG5TaXplID0gdGhpcy5wbHVnaW4ucGFyYW1zLmxhc3RMb2dpbkJ1dHRvblNpemVcbiAgICAgICAgICAgID8gdGhpcy5wbHVnaW4ucGFyYW1zLmxhc3RMb2dpbkJ1dHRvblNpemVcbiAgICAgICAgICAgIDogdGhpcy5wbHVnaW4ucGx1Z2luQ29uZmlnLmRlZmF1bHRsYXN0TG9naW5CdXR0b25TaXplO1xuICAgICAgICB3ZWxjb21lQnRuU2l6ZSA9IHBhcnNlSW50KHdlbGNvbWVCdG5TaXplLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgIHZhciB3ZWxjb21lSW1nU2l6ZSA9IE1hdGguZmxvb3Iod2VsY29tZUJ0blNpemUgLyA1KSAqIDU7XG4gICAgICAgIGlmICh3ZWxjb21lSW1nU2l6ZSA8IDI1KSB3ZWxjb21lSW1nU2l6ZSA9IDIwO1xuICAgICAgICBpZiAod2VsY29tZUltZ1NpemUgPiAzNSkgd2VsY29tZUltZ1NpemUgPSA0MDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYnV0dG9uU2l6ZTogd2VsY29tZUJ0blNpemUsXG4gICAgICAgICAgICBpbWFnZVNpemU6IHdlbGNvbWVJbWdTaXplLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0UHJvdmlkZXJDZWxsRWxlbWVudCh3ZWxjb21lSW1nU2l6ZSwgd2VsY29tZUJ0blNpemUpIHtcbiAgICAgICAgdmFyIHByb3ZpZGVyQ29udGFpbmVyRWxtZW50ID0gdGhpcy5nZXRDaGlsZEJ5Q3NzQ2xhc3ModGhpcy5lbGVtZW50LCB0aGlzLkVsZW1lbnRzU2VsZWN0b3IucHJvdmlkZXIpO1xuXG4gICAgICAgIHZhciBzdHlsZSA9IHRoaXMucGx1Z2luLnN0eWxlUHJlc2V0OyAvLyBUT0RPIGRpZmZlcmVudCBmcm9tIGJlZm9yZTogd2FzIEJ1dHRvblByZXNldHMuc2lnbmluXG5cbiAgICAgICAgdmFyIGltZyA9XG4gICAgICAgICAgICAnPGltZyBkYXRhLWdpZ3lhLXByb3ZpZGVyPVwiJyArXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5sYXN0TG9naW5Qcm92aWRlck9iamVjdC5uYW1lICtcbiAgICAgICAgICAgICdcIiBhbHQ9XCInICtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLmxhc3RMb2dpblByb3ZpZGVyT2JqZWN0LmRpc3BsYXlOYW1lICtcbiAgICAgICAgICAgICdcIiBoZWlnaHQ9XCInICtcbiAgICAgICAgICAgIHdlbGNvbWVCdG5TaXplICtcbiAgICAgICAgICAgICdcIiB3aWR0aD1cIicgK1xuICAgICAgICAgICAgTWF0aC5jZWlsKHRoaXMucGx1Z2luLnBhcmFtcy5sYXN0TG9naW5CdXR0b25TaXplICogc3R5bGUucmF0aW8pICtcbiAgICAgICAgICAgICdcIiBzcmM9XCInICtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLmltYWdlQmFzZSArXG4gICAgICAgICAgICAnL1NpZ25JbldpdGgvJyArXG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5sYXN0TG9naW5Qcm92aWRlck9iamVjdC5uYW1lICtcbiAgICAgICAgICAgICdfJyArXG4gICAgICAgICAgICB3ZWxjb21lSW1nU2l6ZSArXG4gICAgICAgICAgICAnLnBuZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPic7XG5cbiAgICAgICAgdmFyIHByb3ZpZGVyQ2VsbCA9IHRoaXMucGx1Z2luLmNyZWF0ZUVsZW1uZXRCbG9jaygnZGl2Jywge1xuICAgICAgICAgICAgJ2RhdGEtZ2lneWEtcHJvdmlkZXInOiB0aGlzLnBsdWdpbi5sYXN0TG9naW5Qcm92aWRlck9iamVjdC5uYW1lLFxuICAgICAgICAgICAgc3R5bGU6IFtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBUaGVyZSBhcmUgY2FzZXMgd2hlcmUgdGhpcyBwdXRzIFwid2lkdGg6IE5hTlwiIG9uIHRoZSBwYWdlLlxuICAgICAgICAgICAgICAgICd3aWR0aDonLFxuICAgICAgICAgICAgICAgIE1hdGguY2VpbCh3ZWxjb21lSW1nU2l6ZSAqIHRoaXMucGx1Z2luLnN0eWxlUHJlc2V0LnJhdGlvKSxcbiAgICAgICAgICAgICAgICAncHg7JyxcbiAgICAgICAgICAgICAgICAnaGVpZ2h0OicsXG4gICAgICAgICAgICAgICAgd2VsY29tZUltZ1NpemUsXG4gICAgICAgICAgICAgICAgJ3B4OycsXG4gICAgICAgICAgICBdLmpvaW4oJycpLFxuICAgICAgICAgICAgY2xhc3M6ICdnaWd5YS1sb2dpbi1wcm92aWRlcicsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy5wbHVnaW4ubGFzdExvZ2luUHJvdmlkZXJPYmplY3QubmFtZSxcblxuICAgICAgICAgICAgLy8gRm9yIFdDQUc6XG4gICAgICAgICAgICByb2xlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogdGhpcy5wbHVnaW4ubGFzdExvZ2luUHJvdmlkZXJPYmplY3QubmFtZSxcbiAgICAgICAgICAgIHRhYmluZGV4OiAwLFxuICAgICAgICB9KTtcblxuICAgICAgICBwcm92aWRlckNlbGwuaW5uZXJIVE1MID0gaW1nO1xuICAgICAgICBwcm92aWRlckNvbnRhaW5lckVsbWVudC5hcHBlbmRDaGlsZChwcm92aWRlckNlbGwpO1xuXG4gICAgICAgIHZhciBjdXJIZWlnaHQgPSBnaWd5YS51dGlscy5ET00uZ2V0SFRNTFNpemUodGhpcy5lbGVtZW50LmlubmVySFRNTCwgdGhpcy5wbHVnaW4udWlDb250YWluZXIpLmg7XG5cbiAgICAgICAgLy8vLyBjYWxjdWxhdGluZyB0aGUgaGVpZ2h0IG9mIHRoZSB3ZWxsY29tZSBpbiByZWxhdGlvbiB0byB0aGUgbWFpbiBjb250YWluZXIgdG8gZmlsbCBtaXNzaW5nIHNwYWNlcyBvbiB0aGUgYnV0dG9uLlxuICAgICAgICB2YXIgbWFyZ2luU3BhY2UgPVxuICAgICAgICAgICAgdGhpcy5wbHVnaW4ucGFyYW1zLmhlaWdodE51bSAtXG4gICAgICAgICAgICAoY3VySGVpZ2h0ICtcbiAgICAgICAgICAgICAgICAodGhpcy5wbHVnaW4uaXNGb290ZXJFbmFibGVkID8gdGhpcy5wbHVnaW4ucGx1Z2luQ29uZmlnLmZvb3RlckhlaWdodCA6IDApICtcbiAgICAgICAgICAgICAgICAodGhpcy5wbHVnaW4uaXNIZWFkZXJFbmFibGVkID8gdGhpcy5wbHVnaW4ucGx1Z2luQ29uZmlnLmhlYWRlckhlaWdodCA6IDApKTtcblxuICAgICAgICAvLy8vIFVwcGVyIEJvdW5kIE1hcmdpblxuICAgICAgICB2YXIgdG9wTWFyZ2luID0gTWF0aC5jZWlsKG1hcmdpblNwYWNlIC8gMik7XG4gICAgICAgIHZhciBib3R0b21NYXJnaW4gPSBNYXRoLmZsb29yKG1hcmdpblNwYWNlIC8gMik7XG5cbiAgICAgICAgcHJvdmlkZXJDZWxsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IHRvcE1hcmdpbiArICdweCc7XG4gICAgICAgIHByb3ZpZGVyQ2VsbC5zdHlsZS5tYXJnaW5Ub3AgPSBib3R0b21NYXJnaW4gKyAncHgnO1xuXG5cblxuICAgICAgICBjb25zdCBjbGlja0V2ZW50SGFuZGxlciA9IF90aHJvdHRsZSgoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4ub25Qcm92aWRlckNsaWNrSGFuZGxlcihlKTtcbiAgICAgICAgfSwgUFJPVklERVJfQ0xJQ0tfVEhST1RUTEUsIHsndHJhaWxpbmcnOiBmYWxzZX0pO1xuXG4gICAgICAgIGNvbnN0IGtleURvd25FdmVudEhhbmRsZXIgPSBfdGhyb3R0bGUoKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGUgfHwgZS53aGljaDtcbiAgICAgICAgICAgIGlmIChrZXlDb2RlID09IDMyIHx8IGtleUNvZGUgPT0gMTMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5vblByb3ZpZGVyQ2xpY2tIYW5kbGVyKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBQUk9WSURFUl9DTElDS19USFJPVFRMRSwgeyd0cmFpbGluZyc6IGZhbHNlfSk7XG5cbiAgICAgICAgLy8gYXR0YWNoaW5nIHRoZSBwcm92aWRlciBjbGljayBldmVudC5cbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIocHJvdmlkZXJDZWxsLCAnY2xpY2snLCBjbGlja0V2ZW50SGFuZGxlcik7XG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHByb3ZpZGVyQ2VsbCwgJ2tleWRvd24nLCBrZXlEb3duRXZlbnRIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEdyZWV0aW5nRWxlbWVudCgpIHtcbiAgICAgICAgdmFyIHVzZXJHcmVldGluZ0NvbnRhaW5lckVsZW1lbnQgPSB0aGlzLmdldENoaWxkQnlDc3NDbGFzcyh0aGlzLmVsZW1lbnQsIHRoaXMuRWxlbWVudHNTZWxlY3Rvci51c2VyKTtcbiAgICAgICAgdmFyIHVzZXJuYW1lID0gZ2lneWEudXRpbHMuc2FuaXRpemUuc2FuaXRpemVIVE1MKHRoaXMucGx1Z2luLmdldExhc3RMb2dpbk5hbWUoKSk7XG5cbiAgICAgICAgdmFyIGdyZWV0aW5nSHRtbCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMucGx1Z2luLmdldFRlbXBsYXRlcygpWyd3ZWxjb21lR3JlZXRpbmcnXSwge1xuICAgICAgICAgICAgd2VsY29tZUJhY2s6IHRoaXMucGx1Z2luLmdldFRleHQoJ3dlbGNvbWVfYmFja191c2VyJywgJyV1c2VyJywgdXNlcm5hbWUpLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgYnViYmxlSHRtbCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMucGx1Z2luLmdldFRlbXBsYXRlcygpWyd3ZWxjb21lQnViYmxlJ10sIHtcbiAgICAgICAgICAgIG5vdFlvdTogdGhpcy5wbHVnaW4uZ2V0VGV4dCgnbm90X3lvdScsICcldXNlcicsIHVzZXJuYW1lKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXNlckdyZWV0aW5nQ29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSBncmVldGluZ0h0bWw7XG5cbiAgICAgICAgdmFyIGJ1YmJsZUVsbSA9IHRoaXMucGx1Z2luLmNyZWF0ZUVsZW1lbnRGcm9tSFRNTFN0cmluZyhidWJibGVIdG1sKTtcbiAgICAgICAgdmFyIGdyZWV0aW5nRWxtID0gdGhpcy5nZXRDaGlsZEJ5Q3NzQ2xhc3ModGhpcy5lbGVtZW50LCB0aGlzLkVsZW1lbnRzU2VsZWN0b3IuZ3JlZXRpbmcpO1xuICAgICAgICBncmVldGluZ0VsbS5hcHBlbmRDaGlsZChidWJibGVFbG0pO1xuXG4gICAgICAgIHZhciBtYWluQ29udGFpbmVyRGltZW5zaW9ucyA9IHRoaXMucGx1Z2luLmdldENvbnRhaW5lckRpbWVuc2lvbnMoKTtcbiAgICAgICAgdmFyIHVzZXJHcmVldGluZ0RpbWVuc2lvbnMgPSBnaWd5YS51dGlscy5ET00uZ2V0SFRNTFNpemUodXNlckdyZWV0aW5nQ29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwsIHRoaXMucGx1Z2luLnVpQ29udGFpbmVyKTtcbiAgICAgICAgdmFyIG5vdFlvdURpbWVuc2lvbnMgPSBnaWd5YS51dGlscy5ET00uZ2V0SFRNTFNpemUoYnViYmxlRWxtLm91dGVySFRNTCwgdGhpcy5wbHVnaW4udWlDb250YWluZXIpO1xuXG4gICAgICAgIGlmICh1c2VyR3JlZXRpbmdEaW1lbnNpb25zLncgPiBtYWluQ29udGFpbmVyRGltZW5zaW9ucy53KSB7XG4gICAgICAgICAgICAvLyBzaG93IE5vdCBZb3UgQnViYmxlP1xuICAgICAgICAgICAgaWYgKHVzZXJHcmVldGluZ0RpbWVuc2lvbnMudyAtIG5vdFlvdURpbWVuc2lvbnMudyA8IG1haW5Db250YWluZXJEaW1lbnNpb25zLncpIHtcbiAgICAgICAgICAgICAgICBidWJibGVFbG0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTmVlZCB0byByZW5kZXIgb25seSAnV2VsY29tZSBiYWNrJyAtIHdpdGhvdXQgdGhlIHVzZXIgbmFtZVxuXG4gICAgICAgICAgICAgICAgdXNlckdyZWV0aW5nQ29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLnBsdWdpbi5nZXRUZW1wbGF0ZXMoKVsnd2VsY29tZUdyZWV0aW5nJ10sIHtcbiAgICAgICAgICAgICAgICAgICAgd2VsY29tZUJhY2s6IHRoaXMucGx1Z2luLmdldFRleHQoJ3dlbGNvbWVfYmFja191c2VyJywgJyV1c2VyJywgJycpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0dGluZyBUaGUgRXZlbnRzOlxuICAgICAgICBjb25zdCBub3RZb3VCdXR0b24gPSB0aGlzLmdldENoaWxkQnlDc3NDbGFzcyh0aGlzLmVsZW1lbnQsICdnaWd5YS1sb2dpbi13ZWxjb21lLWJ1YmJsZScpO1xuXG4gICAgICAgIGNvbnN0IHNpZ25PdXRFbGVtZW50cyA9IFt0aGlzLmdldENoaWxkQnlDc3NDbGFzcyh0aGlzLmVsZW1lbnQsIHRoaXMuRWxlbWVudHNTZWxlY3Rvci5zaWduaW5saW5rKSwgbm90WW91QnV0dG9uXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZ25PdXRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoc2lnbk91dEVsZW1lbnRzW2ldLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk5vdFlvdUNsaWNrSGFuZGxlcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyByb2xlPWJ1dHRvbiB0byB3b3JrIHdpdGggc2NyZWVuLXJlYWRlcnMgb24gRElWIGVsZW1lbnQuXG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKG5vdFlvdUJ1dHRvbiwgJ2tleWRvd24nLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZSB8fCBlLndoaWNoO1xuICAgICAgICAgICAgaWYgKGtleUNvZGUgPT0gMzIgfHwga2V5Q29kZSA9PSAxMykge1xuICAgICAgICAgICAgICAgIC8vIEZvY3VzIGlzIGltbWVkaWF0ZWx5IHN3aXRjaGVkIHRvIGEgbG9naW4gYnV0dG9uLCBwcmV2ZW50IHRoZSBlbnRlciBidXR0b24gZnJvbSBjbGlja2luZyBpdC5cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgICAgIHRoaXMub25Ob3RZb3VDbGlja0hhbmRsZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRTaWduSW5Vc2luZ0Fub3RoZXJBY2NvdW50KCkge1xuICAgICAgICB2YXIgc2lnbkluTGlua0NvbnRhaW5lciA9IHRoaXMuZ2V0Q2hpbGRCeUNzc0NsYXNzKHRoaXMuZWxlbWVudCwgdGhpcy5FbGVtZW50c1NlbGVjdG9yLnNpZ25pbmxpbmspO1xuXG4gICAgICAgIHZhciBsaW5rSHRtbCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRoaXMucGx1Z2luLmdldFRlbXBsYXRlcygpWyd3ZWxjb21lU2lnbkluTGluayddLCB7XG4gICAgICAgICAgICBzaW5nSW5Vc2luZ0RpZmZlcmVudE5ldHdvcms6IHRoaXMucGx1Z2luLmdldFRleHQoJ3NpZ25faW5fdXNpbmdfYV9kaWZmZXJlbnRfbmV0d29yaycpLFxuICAgICAgICB9KTtcblxuICAgICAgICBzaWduSW5MaW5rQ29udGFpbmVyLmlubmVySFRNTCA9IGxpbmtIdG1sO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Ob3RZb3VDbGlja0hhbmRsZXIoKSB7XG4gICAgICAgIGdpZ3lhLnV0aWxzLmNvb2tpZS5yZW1vdmUoJ19naWdfbGxwJyk7XG4gICAgICAgIGdpZ3lhLnV0aWxzLmNvb2tpZS5yZW1vdmUoJ19naWdfbGx1Jyk7XG4gICAgICAgIGdpZ3lhLnRoaXNTY3JpcHQuZ2xvYmFsQ29uZlsnYWx3YXlzRm9yY2VBdXRoZW50aWNhdGlvbiddID0gdHJ1ZTsgLy9mZWF0dXJlICM3NjQzXG5cbiAgICAgICAgdGhpcy5wbHVnaW4uc2hvd1dlbGNvbWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbHVnaW4ucmVuZGVyKCk7XG5cbiAgICAgICAgLy8gV0NBRzogRm9jdXMgb24gZmlyc3QgbG9naW4gcHJvdmlkZXIgaWYgdXNlciBjbGlja3MgXCJub3QgeW91XCIgbGluay5cbiAgICAgICAgY29uc3QgZmlyc3RMb2dpblByb3ZpZGVyID0gdGhpcy5wbHVnaW4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5naWd5YS1sb2dpbi1wcm92aWRlcnMtbGlzdCBidXR0b24nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgaWYgKGZpcnN0TG9naW5Qcm92aWRlcikge1xuICAgICAgICAgICAgZmlyc3RMb2dpblByb3ZpZGVyLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaWU4cGF0Y2guY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaWVQYXRjaC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgIiwiaW1wb3J0ICogYXMgR2lneWFfUGx1Z2luc0xvZ2luX3YyIGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9CdXR0b25TdHlsZXMnO1xuaW1wb3J0ICogYXMgR2lneWFfUGx1Z2luc0xvZ2luX3YyXzEgZnJvbSAnc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL0NvbnRhaW5lckJhc2UnO1xuaW1wb3J0ICogYXMgR2lneWFfUGx1Z2luc0xvZ2luX3YyXzIgZnJvbSAnc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL0Zvb3RlckNvbnRhaW5lcic7XG5pbXBvcnQgKiBhcyBHaWd5YV9QbHVnaW5zTG9naW5fdjJfMyBmcm9tICdzcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvSW50ZXJmYWNlcyc7XG5pbXBvcnQgKiBhcyBHaWd5YV9QbHVnaW5zUmVzb3VyY2VzSHRtbExvZ2luX3YyIGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9Mb2dpbjJSZXNvdXJjZXMwJztcbmltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNSZXNvdXJjZXNDc3NMb2dpbl92MiBmcm9tICdzcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvTG9naW4yUmVzb3VyY2VzMSc7XG5pbXBvcnQgKiBhcyBHaWd5YV9QbHVnaW5zTG9naW5fdjJfNCBmcm9tICdzcmMvc29jaWFsaXplL0dpZ3lhLkpzLkxvZ2luMi9hcHAvTG9naW5Db250YWluZXInO1xuaW1wb3J0ICogYXMgR2lneWFfUGx1Z2luc0xvZ2luX3YyXzUgZnJvbSAnc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL0xvZ2luUGx1Z2luJztcbmltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNMb2dpbl92Ml82IGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9QYWdpbmdTdHlsZXMnO1xuaW1wb3J0ICogYXMgR2lneWFfUGx1Z2luc0xvZ2luX3YyXzcgZnJvbSAnc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5Mb2dpbjIvYXBwL1V0aWxzJztcbmltcG9ydCAqIGFzIEdpZ3lhX1BsdWdpbnNMb2dpbl92Ml84IGZyb20gJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuTG9naW4yL2FwcC9XZWxjb21lQ29udGFpbmVyJztcblxuZGVjbGFyZSBjb25zdCBnaWd5YTogYW55O1xuaWYgKCFnaWd5YS5fKSB7XG4gICAgZ2lneWEuXyA9IHt9O1xufVxuaWYgKCFnaWd5YS5fLnBsdWdpbnMpIHtcbiAgICBnaWd5YS5fLnBsdWdpbnMgPSB7fTtcbn1cbmlmICghZ2lneWEuXy5wbHVnaW5zLmxvZ2luX3YyKSB7XG4gICAgZ2lneWEuXy5wbHVnaW5zLmxvZ2luX3YyID0ge307XG59XG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMpIHtcbiAgICBnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzID0ge307XG59XG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuaHRtbCkge1xuICAgIGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuaHRtbCA9IHt9O1xufVxuaWYgKCFnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmh0bWwubG9naW5fdjIpIHtcbiAgICBnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmh0bWwubG9naW5fdjIgPSB7fTtcbn1cbmlmICghZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5jc3MpIHtcbiAgICBnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmNzcyA9IHt9O1xufVxuaWYgKCFnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmNzcy5sb2dpbl92Mikge1xuICAgIGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuY3NzLmxvZ2luX3YyID0ge307XG59XG5cbk9iamVjdC5hc3NpZ24oXG4gICAgZ2lneWEuXy5wbHVnaW5zLmxvZ2luX3YyLFxuICAgIEdpZ3lhX1BsdWdpbnNMb2dpbl92MixcbiAgICBHaWd5YV9QbHVnaW5zTG9naW5fdjJfMSxcbiAgICBHaWd5YV9QbHVnaW5zTG9naW5fdjJfMixcbiAgICBHaWd5YV9QbHVnaW5zTG9naW5fdjJfMyxcbiAgICBHaWd5YV9QbHVnaW5zTG9naW5fdjJfNCxcbiAgICBHaWd5YV9QbHVnaW5zTG9naW5fdjJfNSxcbiAgICBHaWd5YV9QbHVnaW5zTG9naW5fdjJfNixcbiAgICBHaWd5YV9QbHVnaW5zTG9naW5fdjJfNyxcbiAgICBHaWd5YV9QbHVnaW5zTG9naW5fdjJfOCxcbik7XG5PYmplY3QuYXNzaWduKGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuaHRtbC5sb2dpbl92MiwgR2lneWFfUGx1Z2luc1Jlc291cmNlc0h0bWxMb2dpbl92Mik7XG5PYmplY3QuYXNzaWduKGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuY3NzLmxvZ2luX3YyLCBHaWd5YV9QbHVnaW5zUmVzb3VyY2VzQ3NzTG9naW5fdjIpO1xuXG5naWd5YS5fLlVJLmF0dGFjaFBsdWdpbihHaWd5YV9QbHVnaW5zTG9naW5fdjJfNS5Mb2dpblBsdWdpbiwgJ3NvY2lhbGl6ZScsIEdpZ3lhX1BsdWdpbnNMb2dpbl92Ml81LkxvZ2luUGx1Z2luLnBsdWdpbk5hbWUsICdzaG93TG9naW5VSV92MicpO1xuZ2lneWEuXy5VSS5hdHRhY2hQbHVnaW4oR2lneWFfUGx1Z2luc0xvZ2luX3YyXzUuTG9naW5QbHVnaW4sICdzb2NpYWxpemUnLCBHaWd5YV9QbHVnaW5zTG9naW5fdjJfNS5Mb2dpblBsdWdpbi5wbHVnaW5OYW1lLCAnc2hvd0FkZENvbm5lY3Rpb25zVUlfdjInKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJnaWd5YS13cmFwcGVyLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXJcXFwiPlxcbiAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCJcXG4gICAgICAgICAgICB0YWJpbmRleD1cXFwiJHt0YWJpbmRleH1cXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcInRhYmJpbmctYnV0dG9uIGdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1tYXJrZXJcXFwiXFxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiJHtsYWJlbH1cXFwiPlxcbiAgICA8L2J1dHRvbj5cXG48L2Rpdj5cXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZ2lneWEtbG9naW4tZm9vdGVyXFxcIj48L2Rpdj5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGEgY2xhc3M9XFxcImdpZ3lhLWxvZ2luLWZvb3Rlci1zb2NpYWwtYnlcXFwiIGhyZWY9XFxcImh0dHBzOi8vd3d3LmdpZ3lhLmNvbVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPiR7c29jaWFsQnl9IDxpbWcgYWx0PVxcXCJHaWd5YVxcXCIgY2xhc3M9XFxcImdpZ3lhLWxvZ29cXFwiIHNyYz1cXFwiJHtsb2dvVXJsfVxcXCIgLz48L2E+XFxuXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxhIGNsYXNzPVxcXCJnaWd5YS1sb2dpbi1mb290ZXItc29jaWFsLWJ5XFxcIiBocmVmPVxcXCJodHRwczovL3d3dy5naWd5YS5jb21cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48aW1nIGFsdD1cXFwiR2lneWFcXFwiIGNsYXNzPVxcXCJnaWd5YS1sb2dvXFxcIiBzcmM9XFxcIiR7bG9nb1VybH1cXFwiIC8+PC9hPlxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGFibGUgY2VsbHBhZGRpbmc9XFxcIjBcXFwiIGNlbGxzcGFjaW5nPVxcXCIwXFxcIiBjbGFzcz1cXFwiZ2lneWEtbG9naW4tZm9vdGVyLXdoYXRzdGhpc1xcXCIgcm9sZT1cXFwicHJlc2VudGF0aW9uXFxcIj5cXG4gICAgPHRib2R5PlxcbiAgICAgICAgPHRyPlxcbiAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwidmVydGljYWwtYWxpZ246IG1pZGRsZTsgdGV4dC1hbGlnbjogY2VudGVyXFxcIj48c3Bhbj4kd2hhdHN0aGlzdGV4dDwvc3Bhbj48L3RkPlxcbiAgICAgICAgPC90cj5cXG4gICAgPC90Ym9keT5cXG48L3RhYmxlPlxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3BhbiBjbGFzcz1cXFwiZ2lneWEtbG9naW4tZm9vdGVyLWRpdmlkZXJcXFwiPnw8L3NwYW4+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzcGFuIGNsYXNzPVxcXCJnaWd5YS1sb2dpbi1mb290ZXItZWRpdC1saW5rXFxcIj4kZWRpdDwvc3Bhbj5cXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGEgY2xhc3M9XFxcImdpZ3lhLWxvZ2luLWZvb3Rlci10ZXJtc1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGhyZWY9XFxcImh0dHBzOi8vd3d3LmdpZ3lhLmNvbS90ZXJtcy1vZi1zZXJ2aWNlL1xcXCI+JHRlcm1zPC9hPlxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJnaWd5YS1sb2dpbi1oZWFkZXJcXFwiPiR7aGVhZGVyVGV4dH08L2Rpdj5cXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZ2lneWEtbG9naW4tcHJvdmlkZXJzXFxcIj5cXG4gICAgPGxhYmVsIGlkPVxcXCJzb2NpYWwtYnV0dG9ucy1sb2dpbi1jYXB0aW9uXFxcIiBhcmlhLWxhYmVsPVxcXCJTaWduIGluIHdpdGhcXFwiPjwvbGFiZWw+XFxuICAgIDx0YWJsZSBjbGFzcz1cXFwiZ2lneWEtbG9naW4tcHJvdmlkZXJzLWNvbnRhaW5lclxcXCIgcm9sZT1cXFwicHJlc2VudGF0aW9uXFxcIj5cXG4gICAgICAgIDx0cj5cXG4gICAgICAgICAgICA8dGQgY2xhc3M9XFxcImdpZ3lhLWxvZ2luLXByb3ZpZGVycy1hcnJvdy1sZWZ0XFxcIj48L3RkPlxcbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiZ2lneWEtbG9naW4tcHJvdmlkZXJzLWxpc3QtY29udGFpbmVyXFxcIj48L3RkPlxcbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiZ2lneWEtbG9naW4tcHJvdmlkZXJzLWFycm93LXJpZ2h0XFxcIj48L3RkPlxcbiAgICAgICAgPC90cj5cXG4gICAgPC90YWJsZT5cXG48L2Rpdj5cXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGltZyBzdHlsZT1cXFwid2lkdGg6JHtidXR0b25XaWR0aH1weDtoZWlnaHQ6JHtidXR0b25IZWlnaHR9cHg7XFxcIiBzcmM9XFxcIiR7aW1hZ2VVcmx9XFxcIiAvPlxcclxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGlkPVxcXCIke2NvbnRhaW5lcklEfV91aUNvbnRhaW5lclxcXCI+PC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImdpZ3lhLWxvZ2luLXdlbGNvbWUtY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZ2lneWEtbG9naW4td2VsY29tZS11c2VyXFxcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZ2lneWEtbG9naW4td2VsY29tZS1wcm92aWRlclxcXCI+PC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImdpZ3lhLWxvZ2luLXdlbGNvbWUtc2lnbmluLWxpbmtcXFwiPjwvZGl2PlxcbjwvZGl2PlxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJnaWd5YS1sb2dpbi13ZWxjb21lLWJ1YmJsZVxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImdpZ3lhLWxvZ2luLXdlbGNvbWUtYnViYmxlLWxlZnRcXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJnaWd5YS1sb2dpbi13ZWxjb21lLWJ1YmJsZS1jZW50ZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ2lneWEtbG9naW4td2VsY29tZS1idWJibGUtdGV4dFxcXCI+JG5vdFlvdTwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZ2lneWEtbG9naW4td2VsY29tZS1idWJibGUtcmlnaHRcXFwiPjwvZGl2PlxcbjwvZGl2PlxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJnaWd5YS1sb2dpbi13ZWxjb21lLWdyZWV0aW5nXFxcIj4kd2VsY29tZUJhY2s8L2Rpdj5cXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGEgY2xhc3M9XFxcImdpZ3lhLWxpbmtcXFwiIGhyZWY9XFxcImphdmFzY3JpcHQ6dm9pZCgwKTtcXFwiPiRzaW5nSW5Vc2luZ0RpZmZlcmVudE5ldHdvcms8L2E+XFxuXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==