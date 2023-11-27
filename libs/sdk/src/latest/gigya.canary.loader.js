/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Flag the module as loaded
    /******/ module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/ __webpack_require__.p = '';
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/ return __webpack_require__(
    (__webpack_require__.s = './src/core/Canary/app/index.ts')
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ '../node_modules/current-script-polyfill/currentScript.js':
      /*!****************************************************************!*\
  !*** ../node_modules/current-script-polyfill/currentScript.js ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        // document.currentScript polyfill by Adam Miller

        // MIT license

        (function (document) {
          var currentScript = 'currentScript',
            scripts = document.getElementsByTagName('script'); // Live NodeList collection

          // If browser needs currentScript polyfill, add get currentScript() to the document object
          if (!(currentScript in document)) {
            Object.defineProperty(document, currentScript, {
              get: function () {
                // IE 6-10 supports script readyState
                // IE 10+ support stack trace
                try {
                  throw new Error();
                } catch (err) {
                  // Find the second match for the "at" string to get file src url from stack.
                  // Specifically works with the format of stack traces in IE.
                  var i,
                    res = (/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(err.stack) || [
                      false,
                    ])[1];

                  // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
                  for (i in scripts) {
                    if (
                      scripts[i].src == res ||
                      scripts[i].readyState == 'interactive'
                    ) {
                      return scripts[i];
                    }
                  }

                  // If no match, return null
                  return null;
                }
              },
            });
          }
        })(document);

        /***/
      },

    /***/ '../node_modules/tslib/tslib.es6.js':
      /*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
      /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __webpack_provided_Object_dot_assign
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__extends',
            function () {
              return __extends;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__assign',
            function () {
              return __assign;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__rest',
            function () {
              return __rest;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__decorate',
            function () {
              return __decorate;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__param',
            function () {
              return __param;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__metadata',
            function () {
              return __metadata;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__awaiter',
            function () {
              return __awaiter;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__generator',
            function () {
              return __generator;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__exportStar',
            function () {
              return __exportStar;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__values',
            function () {
              return __values;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__read',
            function () {
              return __read;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__spread',
            function () {
              return __spread;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__spreadArrays',
            function () {
              return __spreadArrays;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__await',
            function () {
              return __await;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__asyncGenerator',
            function () {
              return __asyncGenerator;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__asyncDelegator',
            function () {
              return __asyncDelegator;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__asyncValues',
            function () {
              return __asyncValues;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__makeTemplateObject',
            function () {
              return __makeTemplateObject;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__importStar',
            function () {
              return __importStar;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__importDefault',
            function () {
              return __importDefault;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__classPrivateFieldGet',
            function () {
              return __classPrivateFieldGet;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            '__classPrivateFieldSet',
            function () {
              return __classPrivateFieldSet;
            }
          );
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

          var extendStatics = function (d, b) {
            extendStatics =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (d, b) {
                  d.__proto__ = b;
                }) ||
              function (d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
              };
            return extendStatics(d, b);
          };

          function __extends(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype =
              b === null
                ? Object.create(b)
                : ((__.prototype = b.prototype), new __());
          }

          var __assign = function () {
            __assign =
              __webpack_provided_Object_dot_assign ||
              function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
              };
            return __assign.apply(this, arguments);
          };

          function __rest(s, e) {
            var t = {};
            for (var p in s)
              if (
                Object.prototype.hasOwnProperty.call(s, p) &&
                e.indexOf(p) < 0
              )
                t[p] = s[p];
            if (s != null && typeof Object.getOwnPropertySymbols === 'function')
              for (
                var i = 0, p = Object.getOwnPropertySymbols(s);
                i < p.length;
                i++
              ) {
                if (
                  e.indexOf(p[i]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(s, p[i])
                )
                  t[p[i]] = s[p[i]];
              }
            return t;
          }

          function __decorate(decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                  ? (desc = Object.getOwnPropertyDescriptor(target, key))
                  : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                      ? d(target, key, r)
                      : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          }

          function __param(paramIndex, decorator) {
            return function (target, key) {
              decorator(target, key, paramIndex);
            };
          }

          function __metadata(metadataKey, metadataValue) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(metadataKey, metadataValue);
          }

          function __awaiter(thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = gigya.Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : adopt(result.value).then(fulfilled, rejected);
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
              );
            });
          }

          function __generator(thisArg, body) {
            var _ = {
                label: 0,
                sent: function () {
                  if (t[0] & 1) throw t[1];
                  return t[1];
                },
                trys: [],
                ops: [],
              },
              f,
              y,
              t,
              g;
            return (
              (g = { next: verb(0), throw: verb(1), return: verb(2) }),
              typeof Symbol === 'function' &&
                (g[Symbol.iterator] = function () {
                  return this;
                }),
              g
            );
            function verb(n) {
              return function (v) {
                return step([n, v]);
              };
            }
            function step(op) {
              if (f) throw new TypeError('Generator is already executing.');
              while (_)
                try {
                  if (
                    ((f = 1),
                    y &&
                      (t =
                        op[0] & 2
                          ? y['return']
                          : op[0]
                          ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                          : y.next) &&
                      !(t = t.call(y, op[1])).done)
                  )
                    return t;
                  if (((y = 0), t)) op = [op[0] & 2, t.value];
                  switch (op[0]) {
                    case 0:
                    case 1:
                      t = op;
                      break;
                    case 4:
                      _.label++;
                      return { value: op[1], done: false };
                    case 5:
                      _.label++;
                      y = op[1];
                      op = [0];
                      continue;
                    case 7:
                      op = _.ops.pop();
                      _.trys.pop();
                      continue;
                    default:
                      if (
                        !((t = _.trys),
                        (t = t.length > 0 && t[t.length - 1])) &&
                        (op[0] === 6 || op[0] === 2)
                      ) {
                        _ = 0;
                        continue;
                      }
                      if (
                        op[0] === 3 &&
                        (!t || (op[1] > t[0] && op[1] < t[3]))
                      ) {
                        _.label = op[1];
                        break;
                      }
                      if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                      }
                      if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                      }
                      if (t[2]) _.ops.pop();
                      _.trys.pop();
                      continue;
                  }
                  op = body.call(thisArg, _);
                } catch (e) {
                  op = [6, e];
                  y = 0;
                } finally {
                  f = t = 0;
                }
              if (op[0] & 5) throw op[1];
              return { value: op[0] ? op[1] : void 0, done: true };
            }
          }

          function __exportStar(m, exports) {
            for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
          }

          function __values(o) {
            var s = typeof Symbol === 'function' && Symbol.iterator,
              m = s && o[s],
              i = 0;
            if (m) return m.call(o);
            if (o && typeof o.length === 'number')
              return {
                next: function () {
                  if (o && i >= o.length) o = void 0;
                  return { value: o && o[i++], done: !o };
                },
              };
            throw new TypeError(
              s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
            );
          }

          function __read(o, n) {
            var m = typeof Symbol === 'function' && o[Symbol.iterator];
            if (!m) return o;
            var i = m.call(o),
              r,
              ar = [],
              e;
            try {
              while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
            } catch (error) {
              e = { error: error };
            } finally {
              try {
                if (r && !r.done && (m = i['return'])) m.call(i);
              } finally {
                if (e) throw e.error;
              }
            }
            return ar;
          }

          function __spread() {
            for (var ar = [], i = 0; i < arguments.length; i++)
              ar = ar.concat(__read(arguments[i]));
            return ar;
          }

          function __spreadArrays() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++)
              s += arguments[i].length;
            for (var r = Array(s), k = 0, i = 0; i < il; i++)
              for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
            return r;
          }

          function __await(v) {
            return this instanceof __await
              ? ((this.v = v), this)
              : new __await(v);
          }

          function __asyncGenerator(thisArg, _arguments, generator) {
            if (!Symbol.asyncIterator)
              throw new TypeError('Symbol.asyncIterator is not defined.');
            var g = generator.apply(thisArg, _arguments || []),
              i,
              q = [];
            return (
              (i = {}),
              verb('next'),
              verb('throw'),
              verb('return'),
              (i[Symbol.asyncIterator] = function () {
                return this;
              }),
              i
            );
            function verb(n) {
              if (g[n])
                i[n] = function (v) {
                  return new gigya.Promise(function (a, b) {
                    q.push([n, v, a, b]) > 1 || resume(n, v);
                  });
                };
            }
            function resume(n, v) {
              try {
                step(g[n](v));
              } catch (e) {
                settle(q[0][3], e);
              }
            }
            function step(r) {
              r.value instanceof __await
                ? gigya.Promise.resolve(r.value.v).then(fulfill, reject)
                : settle(q[0][2], r);
            }
            function fulfill(value) {
              resume('next', value);
            }
            function reject(value) {
              resume('throw', value);
            }
            function settle(f, v) {
              if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1]);
            }
          }

          function __asyncDelegator(o) {
            var i, p;
            return (
              (i = {}),
              verb('next'),
              verb('throw', function (e) {
                throw e;
              }),
              verb('return'),
              (i[Symbol.iterator] = function () {
                return this;
              }),
              i
            );
            function verb(n, f) {
              i[n] = o[n]
                ? function (v) {
                    return (p = !p)
                      ? { value: __await(o[n](v)), done: n === 'return' }
                      : f
                      ? f(v)
                      : v;
                  }
                : f;
            }
          }

          function __asyncValues(o) {
            if (!Symbol.asyncIterator)
              throw new TypeError('Symbol.asyncIterator is not defined.');
            var m = o[Symbol.asyncIterator],
              i;
            return m
              ? m.call(o)
              : ((o =
                  typeof __values === 'function'
                    ? __values(o)
                    : o[Symbol.iterator]()),
                (i = {}),
                verb('next'),
                verb('throw'),
                verb('return'),
                (i[Symbol.asyncIterator] = function () {
                  return this;
                }),
                i);
            function verb(n) {
              i[n] =
                o[n] &&
                function (v) {
                  return new gigya.Promise(function (resolve, reject) {
                    (v = o[n](v)), settle(resolve, reject, v.done, v.value);
                  });
                };
            }
            function settle(resolve, reject, d, v) {
              gigya.Promise.resolve(v).then(function (v) {
                resolve({ value: v, done: d });
              }, reject);
            }
          }

          function __makeTemplateObject(cooked, raw) {
            if (Object.defineProperty) {
              Object.defineProperty(cooked, 'raw', { value: raw });
            } else {
              cooked.raw = raw;
            }
            return cooked;
          }

          function __importStar(mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null)
              for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            result.default = mod;
            return result;
          }

          function __importDefault(mod) {
            return mod && mod.__esModule ? mod : { default: mod };
          }

          function __classPrivateFieldGet(receiver, privateMap) {
            if (!privateMap.has(receiver)) {
              throw new TypeError(
                'attempted to get private field on non-instance'
              );
            }
            return privateMap.get(receiver);
          }

          function __classPrivateFieldSet(receiver, privateMap, value) {
            if (!privateMap.has(receiver)) {
              throw new TypeError(
                'attempted to set private field on non-instance'
              );
            }
            privateMap.set(receiver, value);
            return value;
          }

          /* WEBPACK VAR INJECTION */
        }).call(
          this,
          __webpack_require__(
            /*! tslib */ '../node_modules/tslib/tslib.es6.js'
          )['__assign']
        );

        /***/
      },

    /***/ './src/core/Canary/app/Canary.ts':
      /*!***************************************!*\
  !*** ./src/core/Canary/app/Canary.ts ***!
  \***************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var CookieProvider_1 = __webpack_require__(
          /*! ./CookieProvider */ './src/core/Canary/app/CookieProvider.ts'
        );
        var Canary = /** @class */ (function () {
          function Canary(
            _config,
            _scriptUrl,
            _cookieProvider,
            _cookiesNames,
            _xhrFactory,
            _random
          ) {
            if (_cookieProvider === void 0) {
              _cookieProvider = new CookieProvider_1.CookieProvider();
            }
            if (_cookiesNames === void 0) {
              _cookiesNames = _config.cookiesNames;
            }
            if (_xhrFactory === void 0) {
              _xhrFactory = function () {
                return new XMLHttpRequest();
              };
            }
            if (_random === void 0) {
              _random = function () {
                return Math.random() * 100;
              };
            }
            this._config = _config;
            this._scriptUrl = _scriptUrl;
            this._cookieProvider = _cookieProvider;
            this._cookiesNames = _cookiesNames;
            this._xhrFactory = _xhrFactory;
            this._random = _random;
          }
          Canary.prototype.shouldCanary = function () {
            if (this._scriptUrl.indexOf('version=') !== -1) {
              //version was set explicitly by the site
              return false;
            }
            if (this.wasCanarySet()) {
              return (
                this._cookieProvider.get(this._cookiesNames.isCanary) == 'true'
              );
            } else {
              return this.rollCanary();
            }
          };
          Canary.prototype.wasCanarySet = function () {
            return (
              this._cookieProvider.get(this._cookiesNames.isCanary) &&
              this._cookieProvider.get(this._cookiesNames.version) ==
                this._config.version
            );
          };
          Canary.prototype.rollCanary = function () {
            var isCanary = this._random() <= this._config.probability;
            this._cookieProvider.put(
              this._cookiesNames.isCanary,
              isCanary.toString()
            );
            this._cookieProvider.put(
              this._cookiesNames.version,
              this._config.version
            );
            return isCanary;
          };
          Canary.prototype.onCanaryLoadFail = function () {
            // fallback to non active.
            window.gigya.canary.isActive = false;
            // gigya.logger.error(`canary failed loading`);
            // todo: need a way to report this without writing to console
          };
          Canary.prototype.loadCanaryVersion = function () {
            var _this = this;
            // sync xhr request + eval
            var xhr = this._xhrFactory();
            xhr.open('GET', this._scriptUrl + '&version=canary', false);
            xhr.onload = function (res) {
              var request = res.currentTarget;
              if (request.readyState !== 4 || request.status !== 200) {
                // issues with loading the canary version - drop it and continue as usual
                _this.onCanaryLoadFail();
              } else {
                try {
                  window.gigya.canary.isLoaded = true;
                  eval(request.responseText);
                  window.gigya.canary.isActive = true;
                } catch (e) {
                  _this.onCanaryLoadFail();
                }
              }
            };
            try {
              // sync load - the above onload will happen before advancing...
              xhr.send(null);
            } catch (e) {
              this.onCanaryLoadFail();
            }
          };
          Canary.prototype.bootstrap = function (isOriginalScript) {
            if (isOriginalScript === void 0) {
              isOriginalScript = !window.gigya.canary.isActive;
            }
            if (
              !this._config.probability ||
              (window.gigya.canary.isLoaded && !window.gigya.canary.isActive)
            ) {
              this._cookieProvider.remove(this._cookiesNames.isCanary);
              this._cookieProvider.remove(this._cookiesNames.version);
            } else if (isOriginalScript && this.shouldCanary()) {
              this.loadCanaryVersion();
            }
          };
          return Canary;
        })();
        exports.Canary = Canary;

        /***/
      },

    /***/ './src/core/Canary/app/CookieProvider.ts':
      /*!***********************************************!*\
  !*** ./src/core/Canary/app/CookieProvider.ts ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var CookieProvider = /** @class */ (function () {
          function CookieProvider() {}
          CookieProvider.prototype.get = function (key) {
            try {
              // http://stackoverflow.com/questions/11920697/how-to-get-hash-value-in-a-url-in-js
              var matches = document.cookie.match(
                new RegExp(key + '=([^$;]*)')
              );
              var val = matches ? matches[1] : null;
              return val;
            } catch (_a) {
              return null;
            }
          };
          CookieProvider.prototype.put = function (key, val) {
            try {
              document.cookie =
                key + '=' + val + ';path=/;domain=.' + location.hostname;
            } catch (_a) {}
          };
          CookieProvider.prototype.remove = function (key) {
            try {
              document.cookie =
                key +
                '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;domain=.' +
                location.hostname;
            } catch (_a) {}
          };
          return CookieProvider;
        })();
        exports.CookieProvider = CookieProvider;

        /***/
      },

    /***/ './src/core/Canary/app/index.ts':
      /*!**************************************!*\
  !*** ./src/core/Canary/app/index.ts ***!
  \**************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function (
          __webpack_provided_Object_dot_assign
        ) {
          Object.defineProperty(exports, '__esModule', { value: true });
          var GigyaCanary = __webpack_require__(
            /*! src/core/Canary/app/Canary */ './src/core/Canary/app/Canary.ts'
          );
          var Canary_1 = __webpack_require__(
            /*! src/core/Canary/app/Canary */ './src/core/Canary/app/Canary.ts'
          );
          __webpack_require__(
            /*! current-script-polyfill */ '../node_modules/current-script-polyfill/currentScript.js'
          );
          if (!window.gigya.canary) {
            window.gigya.canary = {};
          }
          __webpack_provided_Object_dot_assign(
            window.gigya.canary,
            GigyaCanary
          );
          (function () {
            var _a;
            var script = document.currentScript;
            new Canary_1.Canary(
              window.gigya.canary.config,
              (_a =
                script === null || script === void 0 ? void 0 : script.src) !==
                null && _a !== void 0
                ? _a
                : ''
            ).bootstrap();
          })();

          /* WEBPACK VAR INJECTION */
        }).call(
          this,
          __webpack_require__(
            /*! tslib */ '../node_modules/tslib/tslib.es6.js'
          )['__assign']
        );

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jdXJyZW50LXNjcmlwdC1wb2x5ZmlsbC9jdXJyZW50U2NyaXB0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0NhbmFyeS9hcHAvQ2FuYXJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0NhbmFyeS9hcHAvQ29va2llUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvQ2FuYXJ5L2FwcC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHdEQUF3RDs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QUFNLEdBQWIsVUFBYyxHQUFXO1FBQ3JCLElBQUk7WUFDQSxRQUFRLENBQUMsTUFBTSxHQUFNLEdBQUcsaUVBQTRELFFBQVEsQ0FBQyxRQUFVLENBQUM7U0FDM0c7UUFBQyxXQUFNLEdBQUU7SUFDZCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDO0FBdkJZLHdDQUFjOzs7Ozs7Ozs7Ozs7O0FDQTNCLDJHQUEwRDtBQUMxRCx3R0FBb0Q7QUFDcEQsK0dBQWlDO0FBR2pDLElBQUksQ0FBQyxZQUFLLENBQUMsTUFBTSxFQUFFO0lBQ2YsWUFBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Q0FDckI7QUFFRCxvQ0FBYSxDQUFDLFlBQUssQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFFekMsQ0FBQzs7SUFDRyxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBa0MsQ0FBQztJQUMzRCxJQUFJLGVBQU0sQ0FBQyxZQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sUUFBRSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsR0FBRyxtQ0FBSSxFQUFFLENBQUM7U0FDN0MsU0FBUyxFQUFFLENBQUM7QUFDckIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsImZpbGUiOiJnaWd5YS5jYW5hcnkubG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29yZS9DYW5hcnkvYXBwL2luZGV4LnRzXCIpO1xuIiwiLy8gZG9jdW1lbnQuY3VycmVudFNjcmlwdCBwb2x5ZmlsbCBieSBBZGFtIE1pbGxlclxuXG4vLyBNSVQgbGljZW5zZVxuXG4oZnVuY3Rpb24oZG9jdW1lbnQpe1xuICB2YXIgY3VycmVudFNjcmlwdCA9IFwiY3VycmVudFNjcmlwdFwiLFxuICAgICAgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTsgLy8gTGl2ZSBOb2RlTGlzdCBjb2xsZWN0aW9uXG5cbiAgLy8gSWYgYnJvd3NlciBuZWVkcyBjdXJyZW50U2NyaXB0IHBvbHlmaWxsLCBhZGQgZ2V0IGN1cnJlbnRTY3JpcHQoKSB0byB0aGUgZG9jdW1lbnQgb2JqZWN0XG4gIGlmICghKGN1cnJlbnRTY3JpcHQgaW4gZG9jdW1lbnQpKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRvY3VtZW50LCBjdXJyZW50U2NyaXB0LCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgLy8gSUUgNi0xMCBzdXBwb3J0cyBzY3JpcHQgcmVhZHlTdGF0ZVxuICAgICAgICAvLyBJRSAxMCsgc3VwcG9ydCBzdGFjayB0cmFjZVxuICAgICAgICB0cnkgeyB0aHJvdyBuZXcgRXJyb3IoKTsgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG5cbiAgICAgICAgICAvLyBGaW5kIHRoZSBzZWNvbmQgbWF0Y2ggZm9yIHRoZSBcImF0XCIgc3RyaW5nIHRvIGdldCBmaWxlIHNyYyB1cmwgZnJvbSBzdGFjay5cbiAgICAgICAgICAvLyBTcGVjaWZpY2FsbHkgd29ya3Mgd2l0aCB0aGUgZm9ybWF0IG9mIHN0YWNrIHRyYWNlcyBpbiBJRS5cbiAgICAgICAgICB2YXIgaSwgcmVzID0gKCgvLiphdCBbXlxcKF0qXFwoKC4qKTouKzouK1xcKSQvaWcpLmV4ZWMoZXJyLnN0YWNrKSB8fCBbZmFsc2VdKVsxXTtcblxuICAgICAgICAgIC8vIEZvciBhbGwgc2NyaXB0cyBvbiB0aGUgcGFnZSwgaWYgc3JjIG1hdGNoZXMgb3IgaWYgcmVhZHkgc3RhdGUgaXMgaW50ZXJhY3RpdmUsIHJldHVybiB0aGUgc2NyaXB0IHRhZ1xuICAgICAgICAgIGZvcihpIGluIHNjcmlwdHMpe1xuICAgICAgICAgICAgaWYoc2NyaXB0c1tpXS5zcmMgPT0gcmVzIHx8IHNjcmlwdHNbaV0ucmVhZHlTdGF0ZSA9PSBcImludGVyYWN0aXZlXCIpe1xuICAgICAgICAgICAgICByZXR1cm4gc2NyaXB0c1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBJZiBubyBtYXRjaCwgcmV0dXJuIG51bGxcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59KShkb2N1bWVudCk7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBDYW5hcnlDb25maWcgfSBmcm9tICdzcmMvY29yZS9DYW5hcnkvYXBwL3NlcnZlckluamVjdGVkJztcbmltcG9ydCB7Q29va2llUHJvdmlkZXJ9IGZyb20gJy4vQ29va2llUHJvdmlkZXInO1xuXG5leHBvcnQgY2xhc3MgQ2FuYXJ5IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfY29uZmlnOiBDYW5hcnlDb25maWcsXG4gICAgICAgIHByaXZhdGUgX3NjcmlwdFVybDogc3RyaW5nLFxuICAgICAgICBwcml2YXRlIF9jb29raWVQcm92aWRlciA9IG5ldyBDb29raWVQcm92aWRlcigpLFxuICAgICAgICBwcml2YXRlIF9jb29raWVzTmFtZXMgPSBfY29uZmlnLmNvb2tpZXNOYW1lcyxcbiAgICAgICAgcHJpdmF0ZSBfeGhyRmFjdG9yeSA9ICgpID0+IG5ldyBYTUxIdHRwUmVxdWVzdCgpLFxuICAgICAgICBwcml2YXRlIF9yYW5kb20gPSAoKSA9PiBNYXRoLnJhbmRvbSgpICogMTAwLFxuICAgICkge31cblxuICAgIHByaXZhdGUgc2hvdWxkQ2FuYXJ5KCkge1xuICAgICAgICBpZiAodGhpcy5fc2NyaXB0VXJsLmluZGV4T2YoJ3ZlcnNpb249JykgIT09IC0xKSB7XG4gICAgICAgICAgICAvL3ZlcnNpb24gd2FzIHNldCBleHBsaWNpdGx5IGJ5IHRoZSBzaXRlXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMud2FzQ2FuYXJ5U2V0KCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb29raWVQcm92aWRlci5nZXQodGhpcy5fY29va2llc05hbWVzLmlzQ2FuYXJ5KSA9PSAndHJ1ZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb2xsQ2FuYXJ5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHdhc0NhbmFyeVNldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvb2tpZVByb3ZpZGVyLmdldCh0aGlzLl9jb29raWVzTmFtZXMuaXNDYW5hcnkpICYmIHRoaXMuX2Nvb2tpZVByb3ZpZGVyLmdldCh0aGlzLl9jb29raWVzTmFtZXMudmVyc2lvbikgPT0gdGhpcy5fY29uZmlnLnZlcnNpb247XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByb2xsQ2FuYXJ5KCkge1xuICAgICAgICBjb25zdCBpc0NhbmFyeSA9IHRoaXMuX3JhbmRvbSgpIDw9IHRoaXMuX2NvbmZpZy5wcm9iYWJpbGl0eTtcbiAgICAgICAgdGhpcy5fY29va2llUHJvdmlkZXIucHV0KHRoaXMuX2Nvb2tpZXNOYW1lcy5pc0NhbmFyeSwgaXNDYW5hcnkudG9TdHJpbmcoKSk7XG4gICAgICAgIHRoaXMuX2Nvb2tpZVByb3ZpZGVyLnB1dCh0aGlzLl9jb29raWVzTmFtZXMudmVyc2lvbiwgdGhpcy5fY29uZmlnLnZlcnNpb24pO1xuICAgICAgICByZXR1cm4gaXNDYW5hcnk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNhbmFyeUxvYWRGYWlsKCkge1xuICAgICAgICAvLyBmYWxsYmFjayB0byBub24gYWN0aXZlLlxuICAgICAgICBnaWd5YS5jYW5hcnkuaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyBnaWd5YS5sb2dnZXIuZXJyb3IoYGNhbmFyeSBmYWlsZWQgbG9hZGluZ2ApO1xuICAgICAgICAvLyB0b2RvOiBuZWVkIGEgd2F5IHRvIHJlcG9ydCB0aGlzIHdpdGhvdXQgd3JpdGluZyB0byBjb25zb2xlXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkQ2FuYXJ5VmVyc2lvbigpIHtcbiAgICAgICAgLy8gc3luYyB4aHIgcmVxdWVzdCArIGV2YWxcbiAgICAgICAgY29uc3QgeGhyID0gdGhpcy5feGhyRmFjdG9yeSgpO1xuICAgICAgICB4aHIub3BlbignR0VUJywgYCR7dGhpcy5fc2NyaXB0VXJsfSZ2ZXJzaW9uPWNhbmFyeWAsIGZhbHNlKTtcbiAgICAgICAgeGhyLm9ubG9hZCA9IHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gcmVzLmN1cnJlbnRUYXJnZXQgYXMgWE1MSHR0cFJlcXVlc3RcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgfHwgcmVxdWVzdC5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgIC8vIGlzc3VlcyB3aXRoIGxvYWRpbmcgdGhlIGNhbmFyeSB2ZXJzaW9uIC0gZHJvcCBpdCBhbmQgY29udGludWUgYXMgdXN1YWxcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2FuYXJ5TG9hZEZhaWwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEuY2FuYXJ5LmlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZXZhbChyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLmNhbmFyeS5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2FuYXJ5TG9hZEZhaWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIHN5bmMgbG9hZCAtIHRoZSBhYm92ZSBvbmxvYWQgd2lsbCBoYXBwZW4gYmVmb3JlIGFkdmFuY2luZy4uLlxuICAgICAgICAgICAgeGhyLnNlbmQobnVsbCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRoaXMub25DYW5hcnlMb2FkRmFpbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGJvb3RzdHJhcChpc09yaWdpbmFsU2NyaXB0ID0gIWdpZ3lhLmNhbmFyeS5pc0FjdGl2ZSkge1xuICAgICAgICBpZiAoIXRoaXMuX2NvbmZpZy5wcm9iYWJpbGl0eSB8fCAoZ2lneWEuY2FuYXJ5LmlzTG9hZGVkICYmICFnaWd5YS5jYW5hcnkuaXNBY3RpdmUpKSB7XG4gICAgICAgICAgICB0aGlzLl9jb29raWVQcm92aWRlci5yZW1vdmUodGhpcy5fY29va2llc05hbWVzLmlzQ2FuYXJ5KTtcbiAgICAgICAgICAgIHRoaXMuX2Nvb2tpZVByb3ZpZGVyLnJlbW92ZSh0aGlzLl9jb29raWVzTmFtZXMudmVyc2lvbik7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNPcmlnaW5hbFNjcmlwdCAmJiB0aGlzLnNob3VsZENhbmFyeSgpKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRDYW5hcnlWZXJzaW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ29va2llUHJvdmlkZXIge1xuICAgIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTE5MjA2OTcvaG93LXRvLWdldC1oYXNoLXZhbHVlLWluLWEtdXJsLWluLWpzXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoa2V5ICsgJz0oW14kO10qKScpKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IG1hdGNoZXMgPyBtYXRjaGVzWzFdIDogbnVsbDtcbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcHV0KGtleTogc3RyaW5nLCB2YWw6IHN0cmluZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7a2V5fT0ke3ZhbH07cGF0aD0vO2RvbWFpbj0uJHtsb2NhdGlvbi5ob3N0bmFtZX1gO1xuICAgICAgICB9IGNhdGNoIHt9XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZShrZXk6IHN0cmluZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7a2V5fT07IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVQ7IHBhdGg9Lztkb21haW49LiR7bG9jYXRpb24uaG9zdG5hbWV9YDtcbiAgICAgICAgfSBjYXRjaCB7fVxuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIEdpZ3lhQ2FuYXJ5IGZyb20gJ3NyYy9jb3JlL0NhbmFyeS9hcHAvQ2FuYXJ5JztcbmltcG9ydCB7IENhbmFyeSB9IGZyb20gXCJzcmMvY29yZS9DYW5hcnkvYXBwL0NhbmFyeVwiO1xuaW1wb3J0ICdjdXJyZW50LXNjcmlwdC1wb2x5ZmlsbCc7XG5cbmRlY2xhcmUgY29uc3QgZ2lneWE6IGFueTtcbmlmICghZ2lneWEuY2FuYXJ5KSB7XG4gICAgZ2lneWEuY2FuYXJ5ID0ge307XG59XG5cbk9iamVjdC5hc3NpZ24oZ2lneWEuY2FuYXJ5LCBHaWd5YUNhbmFyeSk7XG5cbigoKSA9PiB7XG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdCBhcyBIVE1MU2NyaXB0RWxlbWVudDtcbiAgICBuZXcgQ2FuYXJ5KGdpZ3lhLmNhbmFyeS5jb25maWcsIHNjcmlwdD8uc3JjID8/ICcnKVxuICAgICAgICAuYm9vdHN0cmFwKCk7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
