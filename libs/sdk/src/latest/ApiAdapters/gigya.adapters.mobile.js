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
    (__webpack_require__.s = './src/core/Gigya.Js.Adapters.Mobile/index.ts')
  );
  /******/
})(
  /************************************************************************/
  /******/ {
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

    /***/ './src/core/Gigya.Js.Adapters.Mobile/app/MobileAdapter.ts':
      /*!****************************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Mobile/app/MobileAdapter.ts ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var GSErrors_1 = __webpack_require__(
          /*! ../../Gigya.Js/app/GSErrors */ './src/core/Gigya.Js/app/GSErrors.ts'
        );
        var localStorage_1 = __webpack_require__(
          /*! ../../Gigya.Js/app/Utils/localStorage */ './src/core/Gigya.Js/app/Utils/localStorage.ts'
        );
        function newApiAdapter(nativeProxy) {
          return new MobileAdapter(nativeProxy);
        }
        exports.newApiAdapter = newApiAdapter;
        exports.mobileCallbacks = {};
        var URL_PREFIX = 'gsapi://';
        var IS_SESSION_VALID = 'is_session_valid';
        var SEND_REQUEST = 'send_request';
        var SEND_OAUTH_REQUEST = 'send_oauth_request';
        var GET_IDS = 'get_ids';
        var ON_PLUGIN_EVENT = 'on_plugin_event';
        var ON_CUSTOM_EVENT = 'on_custom_event';
        var REGISTER_FOR_NAMESPACE_EVENTS = 'register_for_namespace_events';
        var CLEAR_SESSION = 'clear_session';
        var ON_JS_LOG = 'on_js_log';
        var defaultAdapterFeatures = [
          IS_SESSION_VALID,
          SEND_REQUEST,
          SEND_OAUTH_REQUEST,
          GET_IDS,
          ON_PLUGIN_EVENT,
          ON_CUSTOM_EVENT,
          REGISTER_FOR_NAMESPACE_EVENTS,
        ];
        var defaultAdapterSettings = {
          logLevel: [],
        };
        var MobileAdapter = /** @class */ (function () {
          function MobileAdapter(nativeProxy) {
            this.nativeProxy = nativeProxy;
            this._storage = new localStorage_1.MemoryStorageAdapter();
            this.name = 'Mobile';
          }
          MobileAdapter.prototype.getStorage = function () {
            return this._storage;
          };
          MobileAdapter.prototype.init = function (callback) {
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var _this = this;
              return tslib_1.__generator(this, function (_a) {
                if (
                  this.nativeProxy &&
                  typeof this.nativeProxy.getFeatures === 'function'
                )
                  this.features = window.gigya.utils.JSON.deserialize(
                    this.nativeProxy.getFeatures()
                  );
                else this.features = defaultAdapterFeatures;
                if (
                  this.nativeProxy &&
                  typeof this.nativeProxy.getSettings === 'function'
                ) {
                  this.settings = window.gigya.utils.JSON.deserialize(
                    this.nativeProxy.getSettings()
                  );
                  this.settings.logLevel =
                    window.gigya.utils.array.getArrayFromString(
                      this.settings.logLevel ||
                        defaultAdapterSettings.logLevel.join(','),
                      ','
                    );
                } else {
                  this.settings = defaultAdapterSettings;
                }
                if (
                  this.nativeProxy &&
                  typeof this.nativeProxy.getObfuscationStrategy === 'function'
                ) {
                  this.obfuscationStrategy =
                    this.nativeProxy.getObfuscationStrategy();
                }
                // #49789 - Required for gigya.saml.js, which can init with mobile adapter.
                window.gigya._.getApiDomain = window.gigya._.apiDomainFactory(
                  window.gigya.partnerSettings.plugins.apiDomain,
                  window.gigya.defaultApiDomain
                );
                window.gigya.events.addMap({
                  defaultMethod: function (eventObject) {
                    _this.onPluginEvent(eventObject);
                  },
                  eventMap: [{ events: '*', args: ['$event'] }],
                });
                this.sendToMobile(GET_IDS, {}, function (response) {
                  _this.ucid = response.ucid;
                  _this.gcid = response.gcid;
                  for (var namespace in window.gigya.events.global
                    ._activeNamespaces) {
                    _this.registerForNamespaceEvents(namespace);
                  }
                  callback();
                });
                return [2 /*return*/];
              });
            });
          };
          MobileAdapter.prototype.getTokenParam = function (APIKey, paramName) {
            return '';
          };
          MobileAdapter.prototype.onPluginEvent = function (event) {
            if (!event.isGlobal) {
              this.sendToMobile(ON_PLUGIN_EVENT, event);
            }
          };
          MobileAdapter.prototype.onCustomEvent = function (event) {
            this.sendToMobile(ON_CUSTOM_EVENT, event);
          };
          MobileAdapter.prototype.onJSLog = function (logType, logInfo) {
            if (!this.isLogLevelSupported(logType)) return;
            var log = {
              logType: logType,
              logInfo: logInfo,
            };
            this.sendToMobile(ON_JS_LOG, log);
          };
          MobileAdapter.prototype.registerForNamespaceEvents = function (
            namespace
          ) {
            this.sendToMobile(REGISTER_FOR_NAMESPACE_EVENTS, {
              namespace: namespace,
            });
          };
          MobileAdapter.prototype.getGmidTicket = function (callback) {
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var params, settings;
              return tslib_1.__generator(this, function (_a) {
                if (!callback) return [2 /*return*/];
                params = { expires: 30 };
                settings = { forceHttps: true };
                this.sendRequest(
                  'socialize.getGmidTicket',
                  params,
                  function (response) {
                    callback(response['gmidTicket']);
                  },
                  settings
                );
                return [2 /*return*/, ''];
              });
            });
          };
          MobileAdapter.prototype.clearSession = function (params, callback) {
            this.sendToMobile(CLEAR_SESSION, params, callback);
          };
          MobileAdapter.prototype.isSessionValid = function (params, callback) {
            this.sendToMobile(IS_SESSION_VALID, {}, callback);
          };
          MobileAdapter.prototype.sendRequest = function (
            methodName,
            params,
            callback,
            settings
          ) {
            this.sendToMobile(
              SEND_REQUEST,
              params,
              callback,
              methodName,
              settings
            );
          };
          MobileAdapter.prototype.sendOauthRequest = function (
            methodName,
            params,
            callback,
            settings
          ) {
            this.sendToMobile(
              SEND_OAUTH_REQUEST,
              params,
              callback,
              methodName,
              settings
            );
          };
          MobileAdapter.prototype.sendToMobile = function (
            action,
            params,
            callback,
            method,
            settings
          ) {
            var _this = this;
            if (method === void 0) {
              method = '';
            }
            if (!this.isActionSupported(action)) {
              if (callback) {
                callback({
                  errorCode: GSErrors_1.GSErrors.NOT_SUPPORTED,
                  errorMessage: 'Mobile SDK does not support feature ' + action,
                });
              }
            } else {
              if (params) delete params['APIKey'];
              var callbackID_1 = '';
              if (callback) {
                callbackID_1 = new Date().getTime() + '_' + Math.random();
                exports.mobileCallbacks[callbackID_1] = function (response) {
                  callback(_this.unobfuscate(response, true));
                  delete exports.mobileCallbacks[callbackID_1];
                };
              }
              var serializedParams = this.obfuscate(
                window.gigya.utils.keyValue.serialize(params)
              );
              var serializedSettings =
                window.gigya.utils.keyValue.serialize(settings);
              var queryString =
                'callbackID=' +
                callbackID_1 +
                '&params=' +
                encodeURIComponent(serializedParams) +
                '&settings=' +
                encodeURIComponent(serializedSettings);
              if (!this.nativeProxy.sendToMobile) {
                this.sendWithIframe(action, method, queryString, callbackID_1);
              } else {
                var doesNativeSupport = this.nativeProxy.sendToMobile(
                  action,
                  method,
                  queryString
                );
                if (!doesNativeSupport) {
                  var msg =
                    'The Native Mobile SDK does not support feature ' + action;
                  window.gigya.logger.error(msg);
                  exports.mobileCallbacks[callbackID_1]({
                    errorCode: GSErrors_1.GSErrors.NOT_SUPPORTED,
                    errorMessage: msg,
                  });
                }
              }
            }
          };
          MobileAdapter.prototype.sendWithIframe = function (
            action,
            method,
            queryString,
            callbackID
          ) {
            var iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src =
              '' + URL_PREFIX + action + '/' + method + '?' + queryString;
            function clean() {
              if (iframe) {
                try {
                  document.documentElement.removeChild(iframe);
                  iframe.remove();
                } catch (e) {
                  // ignore
                }
              }
            }
            if (callbackID && exports.mobileCallbacks[callbackID]) {
              var originalCallback_1 = exports.mobileCallbacks[callbackID];
              exports.mobileCallbacks[callbackID] = function (res) {
                originalCallback_1(res);
                clean();
              };
            } else {
              window.setTimeout(function () {
                return clean();
              }, 300);
            }
            // iframe appended outside the event to prevent keyboard from closing in web view Bug 37156
            window.setTimeout(function () {
              return document.documentElement.appendChild(iframe);
            }, 0);
          };
          MobileAdapter.prototype.onSDKEvent = function (eventObject) {
            if (eventObject && eventObject['user']) {
              window.gigya._.convertIdentitiesArrayToObject(
                eventObject['user']
              );
            }
            window.gigya.events.global.dispatch(eventObject);
          };
          MobileAdapter.prototype.isActionSupported = function (action) {
            if (!action) return false;
            return window.gigya.utils.array.indexOf(this.features, action) > -1;
          };
          MobileAdapter.prototype.isLogLevelSupported = function (logType) {
            return (
              window.gigya.utils.array.indexOf(this.settings.logLevel, '*') !=
                -1 ||
              window.gigya.utils.array.indexOf(
                this.settings.logLevel,
                logType
              ) != -1
            );
          };
          MobileAdapter.prototype.setGltexpFromSSO = function (apiKey) {
            return gigya.Promise.resolve(false);
          };
          MobileAdapter.prototype.obfuscate = function (string) {
            if (this.obfuscationStrategy === 'base64') {
              return btoa(string);
            } else {
              return string;
            }
          };
          MobileAdapter.prototype.unobfuscate = function (string, isJSON) {
            if (this.obfuscationStrategy === 'base64') {
              var plainString = atob(string);
              if (isJSON) {
                return JSON.parse(plainString);
              } else {
                return plainString;
              }
            } else {
              return string;
            }
          };
          return MobileAdapter;
        })();
        exports.MobileAdapter = MobileAdapter;

        /***/
      },

    /***/ './src/core/Gigya.Js.Adapters.Mobile/app/showPlugin.ts':
      /*!*************************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Mobile/app/showPlugin.ts ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function showPlugin(plugin, params) {
          var parts = plugin.split('.');
          var pluginName = parts.splice(parts.length - 1, 1)[0];
          if (!parts.length) parts = ['socialize'];
          if (plugin == 'commentsUI') parts = ['comments'];
          var funcName =
            'show' + window.gigya.utils.stringUtils.capitalize(pluginName);
          parts.push(funcName);
          var obj = window.gigya;
          while (obj && parts.length) obj = obj[parts.shift()];
          if (typeof obj !== 'function') {
            return window.gigya.events.dispatchInvalidParamError(
              window.gigya.utils.object.merge([{ plugin: plugin }, params]),
              'plugin'
            );
          }
          obj(params);
        }
        exports.showPlugin = showPlugin;

        /***/
      },

    /***/ './src/core/Gigya.Js.Adapters.Mobile/index.ts':
      /*!****************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Mobile/index.ts ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function (
          __webpack_provided_Object_dot_assign
        ) {
          Object.defineProperty(exports, '__esModule', { value: true });
          var Gigya_ApiAdaptersMobile = __webpack_require__(
            /*! src/core/Gigya.Js.Adapters.Mobile/app/MobileAdapter */ './src/core/Gigya.Js.Adapters.Mobile/app/MobileAdapter.ts'
          );
          var Gigya_ApiAdaptersMobile_1 = __webpack_require__(
            /*! src/core/Gigya.Js.Adapters.Mobile/app/showPlugin */ './src/core/Gigya.Js.Adapters.Mobile/app/showPlugin.ts'
          );
          if (!window.gigya._) {
            window.gigya._ = {};
          }
          if (!window.gigya._.apiAdapters) {
            window.gigya._.apiAdapters = {};
          }
          if (!window.gigya._.apiAdapters.mobile) {
            window.gigya._.apiAdapters.mobile = {};
          }
          __webpack_provided_Object_dot_assign(
            window.gigya._.apiAdapters.mobile,
            Gigya_ApiAdaptersMobile,
            Gigya_ApiAdaptersMobile_1
          );

          /* WEBPACK VAR INJECTION */
        }).call(
          this,
          __webpack_require__(
            /*! tslib */ '../node_modules/tslib/tslib.es6.js'
          )['__assign']
        );

        /***/
      },

    /***/ './src/core/Gigya.Js/app/GSErrors.ts':
      /*!*******************************************!*\
  !*** ./src/core/Gigya.Js/app/GSErrors.ts ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var GSErrors;
        (function (GSErrors) {
          GSErrors[(GSErrors['OK'] = 0)] = 'OK';
          GSErrors[(GSErrors['Data_Pending'] = 100001)] = 'Data_Pending';
          GSErrors[(GSErrors['NETWORK_ERROR'] = 500026)] = 'NETWORK_ERROR';
          GSErrors[(GSErrors['DATA_PENDING'] = 100001)] = 'DATA_PENDING';
          GSErrors[(GSErrors['OPERATION_CANCELED'] = 200001)] =
            'OPERATION_CANCELED';
          GSErrors[(GSErrors['PERMISSION_GRANTED'] = 200002)] =
            'PERMISSION_GRANTED';
          GSErrors[(GSErrors['PERMISSION_NOT_GRANTED'] = 200003)] =
            'PERMISSION_NOT_GRANTED';
          GSErrors[(GSErrors['REDIRECT'] = 200004)] = 'REDIRECT';
          GSErrors[(GSErrors['NEW_USER'] = 200005)] = 'NEW_USER';
          GSErrors[(GSErrors['OPERATION_DONE'] = 200006)] = 'OPERATION_DONE';
          GSErrors[(GSErrors['UPDATE_USER'] = 200007)] = 'UPDATE_USER';
          GSErrors[(GSErrors['OK_WITH_ERRORS'] = 200008)] = 'OK_WITH_ERRORS';
          GSErrors[(GSErrors['ACCOUNTS_LINKED'] = 200009)] = 'ACCOUNTS_LINKED';
          GSErrors[
            (GSErrors['OK_WITH_ERROR_LOGIN_IDENTIFIER_EXISTS'] = 200010)
          ] = 'OK_WITH_ERROR_LOGIN_IDENTIFIER_EXISTS';
          GSErrors[(GSErrors['ACCOUNT_PENDING_REGISTRATION'] = 206001)] =
            'ACCOUNT_PENDING_REGISTRATION';
          GSErrors[(GSErrors['ACCOUNT_PENDING_VERIFICATION'] = 206002)] =
            'ACCOUNT_PENDING_VERIFICATION';
          GSErrors[(GSErrors['ACCOUNT_MISSING_LOGINID'] = 206003)] =
            'ACCOUNT_MISSING_LOGINID';
          GSErrors[(GSErrors['IDENTITY_ALREADY_ASSIGNED'] = 206004)] =
            'IDENTITY_ALREADY_ASSIGNED';
          GSErrors[(GSErrors['AFTER_EMAIL_VERIFICATION'] = 206005)] =
            'AFTER_EMAIL_VERIFICATION';
          GSErrors[(GSErrors['PENDING_CODE_VERIFICATION'] = 206006)] =
            'PENDING_CODE_VERIFICATION';
          GSErrors[(GSErrors['CLIENT_LOG'] = 300001)] = 'CLIENT_LOG';
          GSErrors[(GSErrors['INVALID_DATA_CENTER'] = 301001)] =
            'INVALID_DATA_CENTER';
          GSErrors[(GSErrors['INVALID_REQUEST_FORMAT'] = 400001)] =
            'INVALID_REQUEST_FORMAT';
          GSErrors[(GSErrors['MISSING_REQUIRED_PARAMETER'] = 400002)] =
            'MISSING_REQUIRED_PARAMETER';
          GSErrors[(GSErrors['UNIQUE_IDENTIFIER_EXISTS'] = 400003)] =
            'UNIQUE_IDENTIFIER_EXISTS';
          GSErrors[(GSErrors['INVALID_PARAMETER_FORMAT'] = 400004)] =
            'INVALID_PARAMETER_FORMAT';
          GSErrors[(GSErrors['INVALID_PARAMETER_VALUE'] = 400006)] =
            'INVALID_PARAMETER_VALUE';
          GSErrors[(GSErrors['DUPLICATE_VALUE'] = 400007)] = 'DUPLICATE_VALUE';
          GSErrors[(GSErrors['INVALID_AUTHENTICATION_HEADER'] = 400008)] =
            'INVALID_AUTHENTICATION_HEADER';
          GSErrors[(GSErrors['VALIDATION_ERROR'] = 400009)] =
            'VALIDATION_ERROR';
          GSErrors[(GSErrors['INVALID_REDIRECT_URI'] = 400011)] =
            'INVALID_REDIRECT_URI';
          GSErrors[(GSErrors['INVALID_RESPONSE_TYPE'] = 400012)] =
            'INVALID_RESPONSE_TYPE';
          GSErrors[(GSErrors['UNSUPPORTED_GRANT_TYPE'] = 400013)] =
            'UNSUPPORTED_GRANT_TYPE';
          GSErrors[(GSErrors['INVALID_GRANT'] = 400014)] = 'INVALID_GRANT';
          GSErrors[(GSErrors['CODE_EXPIRED'] = 400015)] = 'CODE_EXPIRED';
          GSErrors[(GSErrors['SCHEMA_VALIDATION_FAILED'] = 400020)] =
            'SCHEMA_VALIDATION_FAILED';
          GSErrors[(GSErrors['CAPTCHA_VERIFICATION_FAILED'] = 400021)] =
            'CAPTCHA_VERIFICATION_FAILED';
          GSErrors[(GSErrors['UNIQUE_INDEX_VALIDATION_ERROR'] = 400022)] =
            'UNIQUE_INDEX_VALIDATION_ERROR';
          GSErrors[(GSErrors['INVALID_TYPE_VALIDATION_ERROR'] = 400023)] =
            'INVALID_TYPE_VALIDATION_ERROR';
          GSErrors[(GSErrors['DYNAMIC_FIELDS_VALIDATION_ERROR'] = 400024)] =
            'DYNAMIC_FIELDS_VALIDATION_ERROR';
          GSErrors[(GSErrors['WRITE_ACCESS_VALIDATION_ERROR'] = 400025)] =
            'WRITE_ACCESS_VALIDATION_ERROR';
          GSErrors[(GSErrors['INVALID_FORMAT_VALIDATION_ERROR'] = 400026)] =
            'INVALID_FORMAT_VALIDATION_ERROR';
          GSErrors[(GSErrors['REQUIRED_VALUE_VALIDATION_ERROR'] = 400027)] =
            'REQUIRED_VALUE_VALIDATION_ERROR';
          GSErrors[(GSErrors['EMAIL_NOT_VERIFIED'] = 400028)] =
            'EMAIL_NOT_VERIFIED';
          GSErrors[(GSErrors['SCHEMA_CONFLICT_ERROR'] = 400029)] =
            'SCHEMA_CONFLICT_ERROR';
          GSErrors[(GSErrors['OPERATION_NOT_ALLOWED'] = 400030)] =
            'OPERATION_NOT_ALLOWED';
          GSErrors[(GSErrors['SECURITY_VERIFICATION_FAILED'] = 400050)] =
            'SECURITY_VERIFICATION_FAILED';
          GSErrors[(GSErrors['INVALID_APIKEY_PARAMETER'] = 400093)] =
            'INVALID_APIKEY_PARAMETER';
          GSErrors[(GSErrors['NOT_SUPPORTED'] = 400096)] = 'NOT_SUPPORTED';
          GSErrors[(GSErrors['UNSUPPORTED_USER_AGENT'] = 400097)] =
            'UNSUPPORTED_USER_AGENT';
          GSErrors[(GSErrors['NO_PROVIDERS'] = 400100)] = 'NO_PROVIDERS';
          GSErrors[(GSErrors['POPUP_BLOCKED'] = 400101)] = 'POPUP_BLOCKED';
          GSErrors[(GSErrors['INVALID_EVENT_HANDLER'] = 400102)] =
            'INVALID_EVENT_HANDLER';
          GSErrors[(GSErrors['INVALID_CONTAINERID'] = 400103)] =
            'INVALID_CONTAINERID';
          GSErrors[(GSErrors['NOT_CONNECTED'] = 400106)] = 'NOT_CONNECTED';
          GSErrors[(GSErrors['INVALID_SITE_DOMAIN'] = 400120)] =
            'INVALID_SITE_DOMAIN';
          GSErrors[(GSErrors['PROVIDER_CONFIGURATION_ERROR'] = 400122)] =
            'PROVIDER_CONFIGURATION_ERROR';
          GSErrors[(GSErrors['LIMIT_REACHED'] = 400124)] = 'LIMIT_REACHED';
          GSErrors[(GSErrors['FREQUENCY_LIMIT_REACHED'] = 400125)] =
            'FREQUENCY_LIMIT_REACHED';
          GSErrors[(GSErrors['INVALID_ACTION'] = 400126)] = 'INVALID_ACTION';
          GSErrors[(GSErrors['INSUFFICIENT_POINTS_TO_REDEEM'] = 400127)] =
            'INSUFFICIENT_POINTS_TO_REDEEM';
          GSErrors[(GSErrors['SIGNATURE_TIMESTAMP_EXPIRED'] = 400128)] =
            'SIGNATURE_TIMESTAMP_EXPIRED';
          GSErrors[(GSErrors['Error_During_Extensions_Operation'] = 400302)] =
            'Error_During_Extensions_Operation';
          GSErrors[(GSErrors['Extension_Point_Custom_Error'] = 400303)] =
            'Extension_Point_Custom_Error';
          GSErrors[(GSErrors['INVALID_POLICY_CONFIGURATION'] = 401000)] =
            'INVALID_POLICY_CONFIGURATION';
          GSErrors[(GSErrors['SUSPECTED_SPAM'] = 401010)] = 'SUSPECTED_SPAM';
          GSErrors[(GSErrors['LOGIN_FAILED_CAPTCHA_REQUIRED'] = 401020)] =
            'LOGIN_FAILED_CAPTCHA_REQUIRED';
          GSErrors[(GSErrors['REQUEST_FAILED_CAPTCHA_REQUIRED'] = 401023)] =
            'REQUEST_FAILED_CAPTCHA_REQUIRED';
          GSErrors[(GSErrors['LOGIN_FAILED_WRONG_CAPTCHA'] = 401021)] =
            'LOGIN_FAILED_WRONG_CAPTCHA';
          GSErrors[(GSErrors['OLD_PASSWORD_USED'] = 401030)] =
            'OLD_PASSWORD_USED';
          GSErrors[(GSErrors['FORBIDDEN'] = 403000)] = 'FORBIDDEN';
          GSErrors[(GSErrors['INVALID_SESSION_TOKEN'] = 403001)] =
            'INVALID_SESSION_TOKEN';
          GSErrors[(GSErrors['REQUEST_HAS_EXPIRED'] = 403002)] =
            'REQUEST_HAS_EXPIRED';
          GSErrors[(GSErrors['INVALID_REQUEST_SIGNATURE'] = 403003)] =
            'INVALID_REQUEST_SIGNATURE';
          GSErrors[(GSErrors['DUPLICATE_NONCE'] = 403004)] = 'DUPLICATE_NONCE';
          GSErrors[(GSErrors['UNAUTHORIZED_USER'] = 403005)] =
            'UNAUTHORIZED_USER';
          GSErrors[(GSErrors['SENSITIVE_DATA_SENT_OVER_HTTP'] = 403006)] =
            'SENSITIVE_DATA_SENT_OVER_HTTP';
          GSErrors[(GSErrors['PERMISSION_DENIED'] = 403007)] =
            'PERMISSION_DENIED';
          GSErrors[(GSErrors['INVALID_OPENID_URL'] = 403008)] =
            'INVALID_OPENID_URL';
          GSErrors[(GSErrors['PROVIDER_SESSION_EXPIRED'] = 403009)] =
            'PROVIDER_SESSION_EXPIRED';
          GSErrors[(GSErrors['INVALID_SECRET'] = 403010)] = 'INVALID_SECRET';
          GSErrors[(GSErrors['SESSION_HAS_EXPIRED'] = 403011)] =
            'SESSION_HAS_EXPIRED';
          GSErrors[(GSErrors['NO_VALID_SESSION'] = 403012)] =
            'NO_VALID_SESSION';
          GSErrors[(GSErrors['UNVERIFIED_USER'] = 403013)] = 'UNVERIFIED_USER';
          GSErrors[(GSErrors['MISSING_REQUEST_REFERRER'] = 403015)] =
            'MISSING_REQUEST_REFERRER';
          GSErrors[(GSErrors['UNEXPECTED_PROVIDER_USER'] = 403017)] =
            'UNEXPECTED_PROVIDER_USER';
          GSErrors[(GSErrors['PERMISSION_NOT_REQUESTED'] = 403022)] =
            'PERMISSION_NOT_REQUESTED';
          GSErrors[(GSErrors['NO_USER_PERMISSION'] = 403023)] =
            'NO_USER_PERMISSION';
          GSErrors[(GSErrors['PROVIDER_LIMIT_REACHED'] = 403024)] =
            'PROVIDER_LIMIT_REACHED';
          GSErrors[(GSErrors['INVALID_TOKEN'] = 403025)] = 'INVALID_TOKEN';
          GSErrors[(GSErrors['UNAUTHORIZED_ACCESS_ERROR'] = 403026)] =
            'UNAUTHORIZED_ACCESS_ERROR';
          GSErrors[(GSErrors['DIFFERENT_USER_FOR_REAUTH'] = 403027)] =
            'DIFFERENT_USER_FOR_REAUTH';
          GSErrors[(GSErrors['SESSION_EXPIRED_RETRY'] = 403030)] =
            'SESSION_EXPIRED_RETRY';
          GSErrors[(GSErrors['APPROVED_BY_MODERATOR'] = 403031)] =
            'APPROVED_BY_MODERATOR';
          GSErrors[(GSErrors['TOKEN_HAS_RENEWED'] = 403032)] =
            'TOKEN_HAS_RENEWED';
          GSErrors[(GSErrors['NO_USER_COOKIE'] = 403035)] = 'NO_USER_COOKIE';
          GSErrors[(GSErrors['UNAUTHORIZED_PARTNER'] = 403036)] =
            'UNAUTHORIZED_PARTNER';
          GSErrors[(GSErrors['POST_DENIED'] = 403037)] = 'POST_DENIED';
          GSErrors[(GSErrors['NO_LOGIN_TICKET'] = 403040)] = 'NO_LOGIN_TICKET';
          GSErrors[(GSErrors['ACCOUNT_DISABLED'] = 403041)] =
            'ACCOUNT_DISABLED';
          GSErrors[(GSErrors['INVALID_LOGINID'] = 403042)] = 'INVALID_LOGINID';
          GSErrors[(GSErrors['LOGIN_IDENTIFIER_EXISTS'] = 403043)] =
            'LOGIN_IDENTIFIER_EXISTS';
          GSErrors[(GSErrors['UNDERAGE_USER'] = 403044)] = 'UNDERAGE_USER';
          GSErrors[(GSErrors['INVALID_SITE_CONFIGURATION_ERROR'] = 403045)] =
            'INVALID_SITE_CONFIGURATION_ERROR';
          GSErrors[(GSErrors['LOGINID_DOES_NOT_EXIST'] = 403047)] =
            'LOGINID_DOES_NOT_EXIST';
          GSErrors[(GSErrors['API_RATE_LIMIT_EXCEEDED'] = 403048)] =
            'API_RATE_LIMIT_EXCEEDED';
          GSErrors[(GSErrors['PENDING_PASSWORD_CHANGE'] = 403100)] =
            'PENDING_PASSWORD_CHANGE';
          GSErrors[(GSErrors['ACCOUNT_PENDING_TFA_VERIFICATION'] = 403101)] =
            'ACCOUNT_PENDING_TFA_VERIFICATION';
          GSErrors[(GSErrors['ACCOUNT_PENDING_TFA_REGISTRATION'] = 403102)] =
            'ACCOUNT_PENDING_TFA_REGISTRATION';
          GSErrors[(GSErrors['ACCOUNT_PENDING_RECENT_LOGIN'] = 403110)] =
            'ACCOUNT_PENDING_RECENT_LOGIN';
          GSErrors[(GSErrors['ACCOUNT_TEMPORARILY_LOCKED_OUT'] = 403120)] =
            'ACCOUNT_TEMPORARILY_LOCKED_OUT';
          GSErrors[(GSErrors['REDUNDANT_OPERATION'] = 403200)] =
            'REDUNDANT_OPERATION';
          GSErrors[(GSErrors['INVALID_APPLICATION_ID'] = 403201)] =
            'INVALID_APPLICATION_ID';
          GSErrors[(GSErrors['NOT_FOUND'] = 404000)] = 'NOT_FOUND';
          GSErrors[(GSErrors['FRIEND_NOT_FOUND'] = 404001)] =
            'FRIEND_NOT_FOUND';
          GSErrors[(GSErrors['CATEGORY_NOT_FOUND'] = 404002)] =
            'CATEGORY_NOT_FOUND';
          GSErrors[(GSErrors['UID_NOT_FOUND'] = 404003)] = 'UID_NOT_FOUND';
          GSErrors[(GSErrors['RESOURCE_NOT_FOUND'] = 404004)] =
            'RESOURCE_NOT_FOUND';
          GSErrors[(GSErrors['INVALID_API_METHOD'] = 405001)] =
            'INVALID_API_METHOD';
          GSErrors[(GSErrors['IDENTITY_EXISTS'] = 409001)] = 'IDENTITY_EXISTS';
          GSErrors[(GSErrors['GONE'] = 410000)] = 'GONE';
          GSErrors[(GSErrors['REQUEST_ENTITY_TOO_LARGE'] = 413001)] =
            'REQUEST_ENTITY_TOO_LARGE';
          GSErrors[(GSErrors['COMMENT_TEXT_TOO_LARGE'] = 413002)] =
            'COMMENT_TEXT_TOO_LARGE';
          GSErrors[(GSErrors['OBJECT_TOO_LARGE'] = 413003)] =
            'OBJECT_TOO_LARGE';
          GSErrors[(GSErrors['PROFILE_PHOTO_TOO_LARGE'] = 413004)] =
            'PROFILE_PHOTO_TOO_LARGE';
          GSErrors[(GSErrors['REQUEST_URI_TOO_LONG'] = 414000)] =
            'REQUEST_URI_TOO_LONG';
          GSErrors[(GSErrors['MISSING_USER_PHOTO'] = 409010)] =
            'MISSING_USER_PHOTO';
          GSErrors[(GSErrors['COUNTER_NOT_REGISTERED'] = 409011)] =
            'COUNTER_NOT_REGISTERED';
          GSErrors[(GSErrors['INVALID_GMID_TICKET'] = 409012)] =
            'INVALID_GMID_TICKET';
          GSErrors[(GSErrors['SAML_MAPPED_ATTRIBUTE_NOT_FOUND'] = 409013)] =
            'SAML_MAPPED_ATTRIBUTE_NOT_FOUND';
          GSErrors[(GSErrors['SAML_CERTIFICATE_NOT_FOUND'] = 409014)] =
            'SAML_CERTIFICATE_NOT_FOUND';
          GSErrors[(GSErrors['SAML_MESSAGE_NOT_FOUND'] = 409015)] =
            'SAML_MESSAGE_NOT_FOUND';
          GSErrors[(GSErrors['GENERAL_SERVER_ERROR'] = 500001)] =
            'GENERAL_SERVER_ERROR';
          GSErrors[(GSErrors['SERVER_LOGIN_ERROR'] = 500002)] =
            'SERVER_LOGIN_ERROR';
          GSErrors[
            (GSErrors['DEFAULT_APPLICATION_CONFIGURATION_ERROR'] = 500003)
          ] = 'DEFAULT_APPLICATION_CONFIGURATION_ERROR';
          GSErrors[(GSErrors['SESSION_MIGRATION_ERROR'] = 500014)] =
            'SESSION_MIGRATION_ERROR';
          GSErrors[(GSErrors['PROVIDER_ERROR'] = 500023)] = 'PROVIDER_ERROR';
          GSErrors[(GSErrors['DATABASE_ERROR'] = 500028)] = 'DATABASE_ERROR';
          GSErrors[(GSErrors['USERNAME_REQUIRED'] = 500029)] =
            'USERNAME_REQUIRED';
          GSErrors[(GSErrors['NO_PROVIDER_APPLICATION'] = 500031)] =
            'NO_PROVIDER_APPLICATION';
          GSErrors[(GSErrors['LOAD_FAILED'] = 500032)] = 'LOAD_FAILED';
          GSErrors[(GSErrors['INVALID_ENVIRONMENT_CONFIG'] = 500033)] =
            'INVALID_ENVIRONMENT_CONFIG';
          GSErrors[(GSErrors['ERROR_DURING_BACKEND_OPERATION'] = 500034)] =
            'ERROR_DURING_BACKEND_OPERATION';
          GSErrors[(GSErrors['TIMEOUT'] = 504001)] = 'TIMEOUT';
          GSErrors[(GSErrors['CLIENTTIMEOUT'] = 504002)] = 'CLIENTTIMEOUT';
          GSErrors[(GSErrors['INVALID_URL'] = 404004)] = 'INVALID_URL';
          GSErrors[(GSErrors['MEDIA_ITEMS_NOT_SUPPORTED'] = 401001)] =
            'MEDIA_ITEMS_NOT_SUPPORTED';
          GSErrors[(GSErrors['MISSING_ERROR_CODE'] = 599999)] =
            'MISSING_ERROR_CODE';
          GSErrors[
            (GSErrors[
              'THIS_AUTHENTICATION_METHOD_IS_CURRENTLY_DISABLED'
            ] = 403300)
          ] = 'THIS_AUTHENTICATION_METHOD_IS_CURRENTLY_DISABLED';
          GSErrors[(GSErrors['FORCE_LINK_LOGIN_IDENTIFIER_EXISTS'] = 409003)] =
            'FORCE_LINK_LOGIN_IDENTIFIER_EXISTS';
          GSErrors[(GSErrors['PASSKEY_AUTHENTICATOR_REGISTERED'] = 400130)] =
            'PASSKEY_AUTHENTICATOR_REGISTERED';
          GSErrors[(GSErrors['PASSKEY_ABORTED'] = 400131)] = 'PASSKEY_ABORTED';
          GSErrors[(GSErrors['PASSKEY_ERROR'] = 500131)] = 'PASSKEY_ERROR';
        })((GSErrors = exports.GSErrors || (exports.GSErrors = {})));
        var GSErrorDetails;
        (function (GSErrorDetails) {
          GSErrorDetails[(GSErrorDetails['None'] = 0)] = 'None';
          GSErrorDetails[(GSErrorDetails['Same_password'] = 100001)] =
            'Same_password';
          GSErrorDetails[(GSErrorDetails['Invalid_password'] = 100002)] =
            'Invalid_password';
          GSErrorDetails[
            (GSErrorDetails['Invalid_counters_query_with_cursor'] = 100003)
          ] = 'Invalid_counters_query_with_cursor';
        })(
          (GSErrorDetails =
            exports.GSErrorDetails || (exports.GSErrorDetails = {}))
        );

        /***/
      },

    /***/ './src/core/Gigya.Js/app/LocalInfo.ts':
      /*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/LocalInfo.ts ***!
  \********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // Local environment info (browser, capabilities, hosting domain)
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var userAgent = navigator.userAgent.toLowerCase();
        exports.localInfo = {
          baseDomain: '',
          isBrowserSupportsFilesAPI: (function () {
            return (
              typeof FileReader === 'function' || typeof FileReader === 'object'
            );
          })(),
          initTime: new Date(),
          version: 0,
          pageDomain: document.location.hostname,
          protocol: document.location.protocol == 'http:' ? 'http' : 'https',
          userAgent: userAgent,
          isWin: userAgent.indexOf('win') != -1,
          isIE:
            userAgent.indexOf('msie') != -1 ||
            (userAgent.indexOf('mozilla') != -1 &&
              userAgent.indexOf('trident') != -1),
          isIE6: userAgent.indexOf('msie 6.') != -1,
          isIE7: userAgent.indexOf('msie 7.') != -1,
          isIE8: userAgent.indexOf('msie 8.') != -1,
          isIE9: userAgent.indexOf('msie 9.') != -1,
          isIE10: userAgent.indexOf('msie 10.') != -1,
          isIE11:
            userAgent.indexOf('mozilla') != -1 &&
            userAgent.indexOf('trident/7.0') != -1,
          isEdgeLegacy: userAgent.indexOf('edge') != -1,
          isEdge: RegExp(/edg(?!e)/).test(userAgent),
          isIOS:
            userAgent.indexOf('iphone') != -1 ||
            userAgent.indexOf('ipad') != -1 ||
            userAgent.indexOf('ipod') != -1,
          isSafari534: userAgent.indexOf('safari/534') != -1,
          isWeChat: userAgent.indexOf('micromessenger') != -1,
          iosVersion: (function () {
            if (
              userAgent.indexOf('applewebkit') != -1 &&
              userAgent.indexOf('version/') != -1
            ) {
              return parseInt(userAgent.split('version/')[1].split(' ')[0]);
            } else return 0;
          })(),
          isAndroid: userAgent.indexOf('android') != -1,
          isAndroidBrowser: (function (userAgent) {
            if (userAgent.indexOf('mozilla/5.0') === -1) return false;
            if (userAgent.indexOf('android 4') === -1) return false;
            if (userAgent.indexOf('applewebkit') === -1) return false;
            if (userAgent.indexOf('windows phone') !== -1) return false;
            // Special user agents found so far that violate the existance of chrome rule
            // Bug 38367 Android Browser: Mozilla/5.0 (Linux; Android 4.2.2; en-us; SAMSUNG GT-I9500 Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Version/1.0 Chrome/18.0.1025.308 Mobile Safari/535.19
            // Bug 40209 Chrome Browser: Mozilla/5.0 (Linux; Android 4.2.2; SAMSUNG SGT-I747 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.93 Mobile Safari/537.36
            // Windows Phone Browser: Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 920) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537
            // Chrome Browser: Mozilla/5.0 (Linux; Android 4.2.2; en-gb; SAMSUNG GT-I9500 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/1.5 Chrome/28.0.1500.94 Mobile Safari/537.36
            var chromeInfo = /chrome\/(\d+)/.exec(userAgent);
            if (!chromeInfo) return true;
            var chromeVersion = parseInt(chromeInfo[1]);
            return chromeVersion < 20;
          })(userAgent),
          currentBrowser: '',
          androidVersion: (function () {
            if (userAgent.indexOf('android') != -1) {
              return parseFloat(
                userAgent.slice(userAgent.indexOf('android') + 8)
              );
            } else return 0;
          })(),
          isChrome:
            userAgent.indexOf('chrome') != -1 && userAgent.indexOf('edg') == -1,
          isGoogleBot: userAgent.indexOf('googlebot') != -1,
          isFF: userAgent.indexOf('firefox') != -1,
          isOpera: userAgent.indexOf('opera') != -1,
          isSafari:
            navigator.appVersion &&
            navigator.appVersion.toLowerCase().indexOf('safari') != -1 &&
            navigator.appVersion.toLowerCase().indexOf('chrome') == -1 &&
            userAgent.indexOf('android') == -1,
          isIOSWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
            navigator.userAgent
          ),
          isIOSChrome: userAgent.indexOf('crios') != -1,
          isMAC:
            navigator.appVersion &&
            navigator.appVersion.toLowerCase().indexOf('mac') != -1,
          isWindowsPhone: userAgent.indexOf('windows phone') != -1,
          isFacebookBrowser:
            userAgent.indexOf('fban') != -1 || userAgent.indexOf('fbav') != -1,
          supportsPostMessage:
            window.postMessage != null &&
            (userAgent.indexOf('msie') == -1 ||
              userAgent.indexOf('iemobile') != -1),
          supportsLocalStorage: false,
          supportsSessionStorage: false,
          supportsFlash: (function () {
            // http://stackoverflow.com/questions/998245/how-can-i-detect-if-flash-is-installed-and-if-not-display-a-hidden-div-that-inf
            var supportsFlash = false;
            try {
              if (
                navigator.mimeTypes &&
                navigator.mimeTypes['application/x-shockwave-flash'] !=
                  undefined &&
                navigator.mimeTypes['application/x-shockwave-flash']
                  .enabledPlugin
              ) {
                supportsFlash = true;
              } else {
                var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                if (fo) {
                  supportsFlash = true;
                }
              }
            } catch (e) {}
            return supportsFlash;
          })(),
          quirksMode:
            document.compatMode == 'BackCompat' &&
            userAgent.indexOf('msie') != -1,
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
              } catch (e) {
                return true;
              }
            }
            return false;
          })(),
          isOnLine: function () {
            return navigator.onLine;
          },
          messagingMethod: 1,
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
          } catch (ex) {
            // Reasons:
            // - Inside 3rd party API proxy iFrame.
            // - Safari in incognito mode will error with "quota exceeded".
            // - Chrome with 3rd party cookies disabled will throw an error if you access the window.localStorage object in ANY way.
            return false;
          }
        };
        exports.localInfo.supportsLocalStorage =
          isStorageEnabled('localStorage');
        exports.localInfo.supportsSessionStorage =
          isStorageEnabled('sessionStorage');
        exports.localInfo.isMAC =
          exports.localInfo.isMAC && !exports.localInfo.isIOS;
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
        if (os) os += ' ';
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
            if (navigator === void 0) {
              navigator = window.gigya._.WindowProvider.navigator();
            }
            if (screen === void 0) {
              screen = window.gigya._.WindowProvider.screen();
            }
            this.navigator = navigator;
            this.screen = screen;
            this.collectData();
          }
          ClientFeature.prototype.collectData = function () {
            var _a, _b, _c, _d, _e, _f, _g;
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              var permissionStatus,
                state,
                batteryInfo,
                _h,
                charging,
                chargingTime,
                dischargingTime,
                level;
              return tslib_1.__generator(this, function (_j) {
                switch (_j.label) {
                  case 0:
                    this.userAgent =
                      (_a = this.navigator) === null || _a === void 0
                        ? void 0
                        : _a.userAgent;
                    this.plugins = Array.from(
                      ((_b = this.navigator) === null || _b === void 0
                        ? void 0
                        : _b.plugins) || []
                    ).map(function (_a) {
                      var name = _a.name,
                        filename = _a.filename,
                        length = _a.length;
                      return { name: name, filename: filename, length: length };
                    });
                    this.localTime = new Date().toLocaleTimeString();
                    this.timezoneOffset = new Date().getTimezoneOffset();
                    return [
                      4 /*yield*/,
                      (_d =
                        (_c = this.navigator) === null || _c === void 0
                          ? void 0
                          : _c.permissions) === null || _d === void 0
                        ? void 0
                        : _d.query({ name: 'notifications' }),
                    ];
                  case 1:
                    permissionStatus = _j.sent();
                    if (permissionStatus) {
                      state = permissionStatus.state;
                      this.permissionStatus = { state: state };
                    }
                    this.webdriver =
                      (_e = this.navigator) === null || _e === void 0
                        ? void 0
                        : _e.webdriver;
                    _h = this.navigator.getBattery;
                    if (!_h) return [3 /*break*/, 3];
                    return [4 /*yield*/, this.navigator.getBattery()];
                  case 2:
                    _h = _j.sent();
                    _j.label = 3;
                  case 3:
                    batteryInfo = _h;
                    if (batteryInfo) {
                      (charging = batteryInfo.charging),
                        (chargingTime = batteryInfo.chargingTime),
                        (dischargingTime = batteryInfo.dischargingTime),
                        (level = batteryInfo.level);
                      this.batteryInfo = {
                        charging: charging,
                        chargingTime: chargingTime,
                        dischargingTime: dischargingTime,
                        level: level,
                      };
                    }
                    this.features = [
                      ((_f = this.navigator) === null || _f === void 0
                        ? void 0
                        : _f.maxTouchPoints) ||
                        ((_g = this.navigator) === null || _g === void 0
                          ? void 0
                          : _g.msMaxTouchPoints),
                      this.screen.width +
                        '|' +
                        this.screen.height +
                        '|' +
                        this.screen.colorDepth,
                      this.navigator.javaEnabled(),
                      'sendBeacon' in this.navigator,
                    ];
                    return [2 /*return*/];
                }
              });
            });
          };
          return ClientFeature;
        })();
        exports.ClientFeature = ClientFeature;

        /***/
      },

    /***/ './src/core/Gigya.Js/app/Utils/JSON.ts':
      /*!*********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/JSON.ts ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function serialize(obj, includeFunctions, prettyPrint, l, maxLevel) {
          if (includeFunctions === void 0) {
            includeFunctions = false;
          }
          if (prettyPrint === void 0) {
            prettyPrint = false;
          }
          if (l === void 0) {
            l = 0;
          }
          if (maxLevel === void 0) {
            maxLevel = 20;
          }
          if (!window.gigya.localInfo.isIE8) {
            return window['JSON'].stringify(obj);
          } else {
            if (!l) l = 0;
            if (l > maxLevel) return '[Too deep]';
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
                obj =
                  '"' +
                  obj
                    .replace(/(\"|\\)/g, '\\$1')
                    .replace(/\r\n|\r|\n/g, '\\n') +
                  '"';
              return String(obj);
            } else {
              var n,
                v,
                json = [],
                arr = obj && obj.constructor == Array;
              if (arr) {
                for (var i = 0; i < obj.length; i++) {
                  v = obj[i];
                  t = typeof v;
                  if (v == null || t == 'undefined') v = '';
                  else if (t == 'string')
                    v =
                      '"' +
                      v
                        .replace(/(\"|\\)/g, '\\$1')
                        .replace(/\r\n|\r|\n/g, '\\n') +
                      '"';
                  else if (t == 'function') {
                    if (includeFunctions) v = 'Function';
                    else v = '';
                  } else if (v.parentNode && v.innerHTML) v = 'HTMLElement';
                  else if (v.constructor == Date) v = '';
                  else if (t == 'object' && v !== null)
                    v = serialize(v, includeFunctions, prettyPrint, l + 1);
                  if (String(v) != '') json.push(prefix + tab + String(v));
                }
              } else {
                for (n in obj) {
                  v = obj[n];
                  t = typeof v;
                  if (v == null || t == 'undefined') v = String(v);
                  else if (t == 'string')
                    v =
                      '"' +
                      v
                        .replace(/(\"|\\)/g, '\\$1')
                        .replace(/\r\n|\r|\n/g, '\\n') +
                      '"';
                  else if (t == 'function') {
                    if (includeFunctions) {
                      v = 'Function';
                    } else {
                      v = '';
                    }
                  } else if (v.parentNode && v.innerHTML) v = 'HTMLElement';
                  else if (v.constructor == Date) v = '';
                  else if (t == 'object' && v !== null)
                    v =
                      newline +
                      serialize(v, includeFunctions, prettyPrint, l + 1);
                  if (String(v) != '')
                    json.push(
                      prefix +
                        tab +
                        '"' +
                        n
                          .replace(/(\"|\\)/g, '\\$1')
                          .replace(/\r\n|\r|\n/g, '\\n') +
                        '":' +
                        String(v)
                    );
                }
              }
              return (
                newline +
                prefix +
                (arr ? '[' : '{') +
                newline +
                json.join(',' + newline) +
                newline +
                prefix +
                (arr ? ']' : '}')
              );
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
            var fn = eval(
              '(function(' +
                keys.join(',') +
                ') { return ' +
                json.trim() +
                '; })'
            );
            return fn.apply(undefined, values);
          } catch (e) {
            console.warn('Error deserializing JavaScript', e);
            return defaultValue || {};
          }
        }
        exports.deserialize = deserialize;
        function parse(json, defaultValue) {
          if (window.gigya.localInfo.isIE8) {
            return deserialize(json, defaultValue);
          } else {
            try {
              return window['JSON'].parse(json);
            } catch (e) {
              return defaultValue || {};
            }
          }
        }
        exports.parse = parse;

        /***/
      },

    /***/ './src/core/Gigya.Js/app/Utils/cookie.ts':
      /*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/cookie.ts ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var LocalInfo_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/LocalInfo */ './src/core/Gigya.Js/app/LocalInfo.ts'
        );
        var global_1 = __webpack_require__(
          /*! ./global */ './src/core/Gigya.Js/app/Utils/global.ts'
        );
        var CookieUtils = /** @class */ (function () {
          function CookieUtils(_cookieStore) {
            if (_cookieStore === void 0) {
              _cookieStore = new global_1.CookieStore();
            }
            this._cookieStore = _cookieStore;
          }
          CookieUtils.prototype.set = function (
            name,
            value,
            expires_in,
            cookieDomain,
            dontUseRootPath,
            sameSite
          ) {
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
            var cookieExist = this._setCookieInternal(
              name,
              value,
              path,
              expires,
              cookieDomain,
              sameSite
            );
            var shouldCookieExist = !expireMs || expireMs > 0;
            if (shouldCookieExist === cookieExist) {
              return true;
            }
            // If failed to set cookie, retry;
            // it might be because the domain is listed as TLD https://data.iana.org/TLD/tlds-alpha-by-domain.txt
            var pageDomain = LocalInfo_1.localInfo.pageDomain;
            cookieExist = this._setCookieInternal(
              name,
              value,
              path,
              expires,
              pageDomain,
              sameSite
            );
            return cookieExist === shouldCookieExist;
          };
          CookieUtils.prototype.get = function (name) {
            return this._cookieStore.getCookie(name);
          };
          CookieUtils.prototype.remove = function (name, domain) {
            if (domain === void 0) {
              domain = LocalInfo_1.localInfo.pageDomain;
            }
            this._removeFromBaseDomains(name, domain);
            this.set(name, '', -1, '', false);
            this.set(name, '', -1, '', true);
          };
          CookieUtils.prototype.getInfiniteExpirationTimeInSeconds =
            function () {
              // Set expiration time to 1 years
              return 60 * 60 * 24 * 365;
            };
          CookieUtils.prototype.canSaveCookie = function (cookieDomain) {
            if (cookieDomain === void 0) {
              cookieDomain = null;
            }
            try {
              return this.set(
                CookieUtils.testCookieName,
                'true',
                1,
                cookieDomain,
                null
              );
            } catch (e) {
              // iOS 10 webview throws in some scenarios
              return false;
            }
          };
          CookieUtils.prototype.getDefaultDomain = function (
            pageDomain,
            baseDomain
          ) {
            if (pageDomain === void 0) {
              pageDomain = LocalInfo_1.localInfo.pageDomain;
            }
            if (baseDomain === void 0) {
              baseDomain = LocalInfo_1.localInfo.baseDomain || '';
            }
            return baseDomain.length > 0 &&
              pageDomain.length >= baseDomain.length &&
              pageDomain.lastIndexOf(baseDomain) ===
                pageDomain.length - baseDomain.length
              ? baseDomain
              : pageDomain;
          };
          CookieUtils.prototype._getExpirationInMs = function (expiresIn) {
            var expireMs;
            if (expiresIn == null || expiresIn === '' || isNaN(expiresIn)) {
              expireMs = 1000 * this.getInfiniteExpirationTimeInSeconds();
            } else if (expiresIn == 0) {
              // 0 means Session
              expireMs = null;
            } else {
              // Any other value is number of seconds (A negative value would mean expire now!)
              expireMs = expiresIn * 1000;
            }
            return expireMs;
          };
          CookieUtils.prototype._setCookieInternal = function (
            name,
            value,
            path,
            expires,
            cookieDomain,
            sameSiteMode
          ) {
            if (sameSiteMode === void 0) {
              sameSiteMode = CookieUtils._getSameSiteMode();
            }
            var _a;
            var protocol =
              (_a =
                LocalInfo_1.localInfo === null ||
                LocalInfo_1.localInfo === void 0
                  ? void 0
                  : LocalInfo_1.localInfo.protocol) !== null && _a !== void 0
                ? _a
                : document.location.protocol;
            var isSecured = protocol.indexOf('https') === 0;
            this._cookieStore.setCookie(name, value, {
              path: path,
              expires: expires,
              domain: cookieDomain,
              sameSite: sameSiteMode,
              secure: isSecured,
            });
            if (this.get(name)) {
              return true;
            }
            if (!sameSiteMode) {
              //if failed to write cookie without sameSite mode, then stop here
              return false;
            }
            if (sameSiteMode !== 'None') {
              this._fallbackToSameSiteNone(
                name,
                value,
                path,
                expires,
                cookieDomain,
                isSecured
              );
            }
            if (this.get(name)) {
              this._reportFallback('Setting SameSite=None', {
                name: name,
                value: value,
                sameSiteMode: sameSiteMode,
              });
              return true;
            }
            // If failed to write cookie with sameSite mode, retry without;
            this._cookieStore.setCookie(name, value, {
              path: path,
              expires: expires,
              domain: cookieDomain,
              secure: isSecured,
            });
            if (this.get(name)) {
              this._reportFallback(
                'Cookie established only without sameSite mode',
                { name: name, value: value, sameSiteMode: sameSiteMode }
              );
              return true;
            }
            return false;
          };
          CookieUtils.prototype._removeFromBaseDomains = function (
            name,
            domain
          ) {
            var domainParts = domain.split('.');
            // when clearing from a.b.c.d.com --> clear from a.b.c.d.com, b.c.d.com, c.d.com, d.com
            for (var i = 0; i < domainParts.length - 1; i++) {
              var domain_1 = domainParts.slice(i).join('.');
              this.set(name, '', -1, domain_1, false);
              this.set(name, '', -1, domain_1, true);
            }
          };
          CookieUtils._getSameSiteMode = function () {
            if (!CookieUtils._disallowSameSiteMode()) return 'None';
          };
          CookieUtils._disallowSameSiteMode = function () {
            var _a, _b;
            var protocol =
              (_a =
                LocalInfo_1.localInfo === null ||
                LocalInfo_1.localInfo === void 0
                  ? void 0
                  : LocalInfo_1.localInfo.protocol) !== null && _a !== void 0
                ? _a
                : document.location.protocol;
            var ua =
              (_b =
                LocalInfo_1.localInfo === null ||
                LocalInfo_1.localInfo === void 0
                  ? void 0
                  : LocalInfo_1.localInfo.userAgent) !== null && _b !== void 0
                ? _b
                : navigator.userAgent.toLowerCase();
            var isSecured = protocol.indexOf('https') === 0;
            return (
              !isSecured ||
              !ua ||
              // Cover all iOS based browsers here. This includes:
              // - Safari on iOS 12 for iPhone, iPod Touch, iPad
              // - WkWebview on iOS 12 for iPhone, iPod Touch, iPad
              // - Chrome on iOS 12 for iPhone, iPod Touch, iPad
              // All of which are broken by SameSite=None, because they use the iOS networking stack
              ua.indexOf('CPU iPhone OS 12') > -1 ||
              ua.indexOf('iPad; CPU OS 12') > -1 ||
              // Cover Mac OS X based browsers that use the Mac OS networking stack. This includes:
              // - Safari on Mac OS X.
              // This does not include:
              // - Chrome on Mac OS X
              // Because they do not use the Mac OS networking stack.
              (ua.indexOf('Macintosh; Intel Mac OS X 10_14') > -1 &&
                ua.indexOf('Version/') > -1 &&
                ua.indexOf('Safari') > -1) ||
              // Cover Chrome 50-69, because some versions are broken by SameSite=None,
              // and none in this range require it.
              // Note: this covers some pre-Chromium Edge versions,
              // but pre-Chromium Edge does not require SameSite=None.
              (ua.indexOf('Chrome/5') > -1 && ua.indexOf('Chrome/6') > -1)
            );
          };
          CookieUtils.prototype._fallbackToSameSiteNone = function (
            name,
            value,
            path,
            expires,
            cookieDomain,
            secure
          ) {
            this._cookieStore.setCookie(name, value, {
              path: path,
              expires: expires,
              domain: cookieDomain,
              sameSite: 'None',
              secure: secure,
            });
          };
          CookieUtils.prototype._reportFallback = function (message, details) {
            window.gigya.logger.report(
              'Cookie Policy Fallback: ' + message,
              tslib_1.__assign(tslib_1.__assign({}, details), {
                isIframe: this._isIFrame(),
              }),
              false
            );
          };
          CookieUtils.prototype._isIFrame = function () {
            var _a;
            try {
              return (
                (window === null || window === void 0
                  ? void 0
                  : window.location) !==
                ((_a =
                  window === null || window === void 0
                    ? void 0
                    : window.parent) === null || _a === void 0
                  ? void 0
                  : _a.location)
              );
            } catch (e) {
              return true;
            }
          };
          CookieUtils.testCookieName = 'gig3pctest';
          return CookieUtils;
        })();
        exports.CookieUtils = CookieUtils;
        exports.default = new CookieUtils();

        /***/
      },

    /***/ './src/core/Gigya.Js/app/Utils/global.ts':
      /*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/global.ts ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var CookieStore = /** @class */ (function () {
          function CookieStore(_win) {
            if (_win === void 0) {
              _win = window;
            }
            this._win = _win;
          }
          CookieStore.prototype.setCookie = function (name, value, options) {
            var cookieString = name + '=' + escape(value);
            if (options.path) cookieString += '; path=' + options.path;
            if (options.expires)
              cookieString += '; expires=' + options.expires.toUTCString();
            if (options.domain && options.domain.indexOf('.') != -1)
              cookieString += '; domain=' + options.domain;
            if (options.sameSite)
              cookieString += '; sameSite=' + options.sameSite;
            if (options.secure) cookieString += '; secure';
            this._win.document.cookie = cookieString;
          };
          CookieStore.prototype.getCookie = function (name) {
            name = name
              .replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1')
              .replace(/^[ \t]+|[ \t]+$/g, '');
            var regex = new RegExp('(?:^|;)\\s?' + name + '=(.*?)(?:;|$)');
            var match = this._win.document.cookie.match(regex);
            return match && unescape(match[1]);
          };
          return CookieStore;
        })();
        exports.CookieStore = CookieStore;

        /***/
      },

    /***/ './src/core/Gigya.Js/app/Utils/localStorage.ts':
      /*!*****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/localStorage.ts ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var JSONUtils = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/JSON */ './src/core/Gigya.Js/app/Utils/JSON.ts'
        );
        var LocalInfo_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/LocalInfo */ './src/core/Gigya.Js/app/LocalInfo.ts'
        );
        var cookie_1 = __webpack_require__(
          /*! ./cookie */ './src/core/Gigya.Js/app/Utils/cookie.ts'
        );
        var AbstractLocalStorageAdapter = /** @class */ (function () {
          function AbstractLocalStorageAdapter() {}
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
          AbstractLocalStorageAdapter.prototype.getObject = function (
            key,
            defaultValue
          ) {
            return JSONUtils.deserialize(this.getItem(key), defaultValue);
          };
          /**
           * Is persistent storage. Returns false when data is not persisted.
           */
          AbstractLocalStorageAdapter.prototype.isPersistent = function () {
            return true;
          };
          return AbstractLocalStorageAdapter;
        })();
        exports.AbstractLocalStorageAdapter = AbstractLocalStorageAdapter;
        var AbstractAsyncLocalStorageAdapter = /** @class */ (function (
          _super
        ) {
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
          AbstractAsyncLocalStorageAdapter.prototype.waitForService = function (
            callback
          ) {
            var _this = this;
            if (this.isReady()) {
              callback();
              return;
            } else {
              setTimeout(function () {
                return _this.waitForService(callback);
              }, 50);
            }
          };
          return AbstractAsyncLocalStorageAdapter;
        })(AbstractLocalStorageAdapter);
        exports.AbstractAsyncLocalStorageAdapter =
          AbstractAsyncLocalStorageAdapter;
        var StorageAdapter = /** @class */ (function (_super) {
          tslib_1.__extends(StorageAdapter, _super);
          function StorageAdapter() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          StorageAdapter.prototype.getItem = function (key) {
            return this.storage[key];
          };
          StorageAdapter.prototype.setItem = function (key, value, expiresIn) {
            try {
              this.storage[key] = value;
            } catch (ex) {}
          };
          StorageAdapter.prototype.removeItem = function (key) {
            this.storage.removeItem(key);
          };
          return StorageAdapter;
        })(AbstractLocalStorageAdapter);
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
        })(StorageAdapter);
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
        })(StorageAdapter);
        var FirefoxStorageAdapter = /** @class */ (function (_super) {
          tslib_1.__extends(FirefoxStorageAdapter, _super);
          function FirefoxStorageAdapter() {
            return (_super !== null && _super.apply(this, arguments)) || this;
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
          FirefoxStorageAdapter.prototype.setItem = function (
            key,
            value,
            expiresIn
          ) {
            try {
              window['globalStorage'][location.hostname][key] = value;
            } catch (ex) {}
          };
          FirefoxStorageAdapter.prototype.removeItem = function (key) {
            delete window['globalStorage'][location.hostname][key];
          };
          return FirefoxStorageAdapter;
        })(AbstractLocalStorageAdapter);
        var CookieStorageAdapter = /** @class */ (function (_super) {
          tslib_1.__extends(CookieStorageAdapter, _super);
          function CookieStorageAdapter() {
            return (_super !== null && _super.apply(this, arguments)) || this;
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
          CookieStorageAdapter.prototype.setItem = function (
            key,
            value,
            expiresIn,
            domain,
            additionalParams
          ) {
            if (additionalParams === void 0) {
              additionalParams = {};
            }
            cookie_1.default.set(
              key,
              value,
              expiresIn,
              domain,
              additionalParams.dontUseRootPath,
              additionalParams.sameSite
            );
          };
          CookieStorageAdapter.prototype.removeItem = function (key) {
            cookie_1.default.remove(key);
          };
          return CookieStorageAdapter;
        })(AbstractLocalStorageAdapter);
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
          MemoryStorageAdapter.prototype.setItem = function (
            key,
            value,
            expiresIn
          ) {
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
        })(AbstractLocalStorageAdapter);
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
          for (
            var _i = 0, adapters_1 = exports.adapters;
            _i < adapters_1.length;
            _i++
          ) {
            var adapter_1 = adapters_1[_i];
            if (adapter_1.isAvailable()) {
              // Don't select adapter if it's async and a callback wasn't provided.
              if (
                adapter_1.prototype instanceof
                  AbstractAsyncLocalStorageAdapter &&
                !callback
              ) {
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
            } else {
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

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuQWRhcHRlcnMuTW9iaWxlL2FwcC9Nb2JpbGVBZGFwdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLkFkYXB0ZXJzLk1vYmlsZS9hcHAvc2hvd1BsdWdpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5BZGFwdGVycy5Nb2JpbGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL0dTRXJyb3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2NhbEluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL0pTT04udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2Nvb2tpZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvZ2xvYmFsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9sb2NhbFN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFD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QUFRLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPO0lBQ2xFLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLEtBQUssRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNuSCxLQUFLLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLEtBQUssRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxLQUFLLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLE1BQU0sRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BGLFlBQVksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxNQUFNLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFD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QWMsRUFBRSxDQUFDO0FBQ2pDLFNBQWdCLE9BQU8sQ0FBQyxHQUFXO0lBQy9CLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRkQsMEJBRUM7QUFDRCxTQUFnQixPQUFPLENBQUMsR0FBVyxFQUFFLEtBQWEsRUFBRSxTQUFrQjtJQUNsRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRkQsMEJBRUM7QUFDRCxTQUFnQixVQUFVLENBQUMsR0FBVztJQUNsQyxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUZELGdDQUVDO0FBQ0QsU0FBZ0IsU0FBUyxDQUFDLEdBQVcsRUFBRSxDQUFTO0lBQzVDLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUZELDhCQUVDO0FBQ0QsU0FBZ0IsU0FBUyxDQUFDLEdBQVcsRUFBRSxZQUFrQjtJQUNyRCxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFGRCw4QkFFQyIsImZpbGUiOiJBcGlBZGFwdGVycy9naWd5YS5hZGFwdGVycy5tb2JpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb3JlL0dpZ3lhLkpzLkFkYXB0ZXJzLk1vYmlsZS9pbmRleC50c1wiKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImltcG9ydCB7IElBcGlBZGFwdGVySW5pdFNldHRpbmdzLCBJQXBpQWRhcHRlciwgQXBpQWRhcHRlclNldHRpbmdzIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvaW50ZXJmYWNlcy9JQXBpQWRhcHRlcic7XG5pbXBvcnQgeyBHU0Vycm9ycyB9IGZyb20gJy4uLy4uL0dpZ3lhLkpzL2FwcC9HU0Vycm9ycyc7XG5pbXBvcnQge01lbW9yeVN0b3JhZ2VBZGFwdGVyfSBmcm9tIFwiLi4vLi4vR2lneWEuSnMvYXBwL1V0aWxzL2xvY2FsU3RvcmFnZVwiO1xuLy8gTW9iaWxlIFNES3MgYXV0aC9yZXF1ZXN0cy9ldmVudHMgaW50ZXJmYWNlIGZvciBzb2NpYWxpemUuanNcblxuZXhwb3J0IGludGVyZmFjZSBJTmF0aXZlTW9iaWxlUHJveHkgZXh0ZW5kcyBJQXBpQWRhcHRlckluaXRTZXR0aW5ncyB7XG4gICAgc2VuZFRvTW9iaWxlPzogKGFjdGlvbjogc3RyaW5nLCBtZXRob2Q6IHN0cmluZywgcXVlcnlTdHJpbmdQYXJhbXM6IHN0cmluZykgPT4gYm9vbGVhbjsgLy8gZnJvbSBhbmRyb2lkIHNkayAzLjMuMjJcbiAgICBnZXRPYmZ1c2NhdGlvblN0cmF0ZWd5PzogKCkgPT4gJ2Jhc2U2NCc7XG59XG5leHBvcnQgZnVuY3Rpb24gbmV3QXBpQWRhcHRlcihuYXRpdmVQcm94eTogSU5hdGl2ZU1vYmlsZVByb3h5KTogSUFwaUFkYXB0ZXIge1xuICAgIHJldHVybiBuZXcgTW9iaWxlQWRhcHRlcihuYXRpdmVQcm94eSk7XG59XG5leHBvcnQgY29uc3QgbW9iaWxlQ2FsbGJhY2tzOiB7IFtpZDogc3RyaW5nXTogKHJlc3BvbnNlKSA9PiB2b2lkIH0gPSB7fTtcbnZhciBVUkxfUFJFRklYID0gJ2dzYXBpOi8vJztcbnZhciBJU19TRVNTSU9OX1ZBTElEID0gJ2lzX3Nlc3Npb25fdmFsaWQnO1xudmFyIFNFTkRfUkVRVUVTVCA9ICdzZW5kX3JlcXVlc3QnO1xudmFyIFNFTkRfT0FVVEhfUkVRVUVTVCA9ICdzZW5kX29hdXRoX3JlcXVlc3QnO1xudmFyIEdFVF9JRFMgPSAnZ2V0X2lkcyc7XG52YXIgT05fUExVR0lOX0VWRU5UID0gJ29uX3BsdWdpbl9ldmVudCc7XG52YXIgT05fQ1VTVE9NX0VWRU5UID0gJ29uX2N1c3RvbV9ldmVudCc7XG52YXIgUkVHSVNURVJfRk9SX05BTUVTUEFDRV9FVkVOVFMgPSAncmVnaXN0ZXJfZm9yX25hbWVzcGFjZV9ldmVudHMnO1xudmFyIENMRUFSX1NFU1NJT04gPSAnY2xlYXJfc2Vzc2lvbic7XG52YXIgT05fSlNfTE9HID0gJ29uX2pzX2xvZyc7XG52YXIgZGVmYXVsdEFkYXB0ZXJGZWF0dXJlcyA9IFtJU19TRVNTSU9OX1ZBTElELCBTRU5EX1JFUVVFU1QsIFNFTkRfT0FVVEhfUkVRVUVTVCwgR0VUX0lEUywgT05fUExVR0lOX0VWRU5ULCBPTl9DVVNUT01fRVZFTlQsIFJFR0lTVEVSX0ZPUl9OQU1FU1BBQ0VfRVZFTlRTXTtcbmV4cG9ydCBpbnRlcmZhY2UgSUFkYXB0ZXJTZXR0aW5ncyB7XG4gICAgbG9nTGV2ZWw6IHN0cmluZ1tdO1xufVxudmFyIGRlZmF1bHRBZGFwdGVyU2V0dGluZ3M6IElBZGFwdGVyU2V0dGluZ3MgPSB7XG4gICAgbG9nTGV2ZWw6IFtdLFxufTtcbmV4cG9ydCBjbGFzcyBNb2JpbGVBZGFwdGVyIGltcGxlbWVudHMgSUFwaUFkYXB0ZXIge1xuICAgIHByaXZhdGUgdWNpZDogc3RyaW5nO1xuICAgIHByaXZhdGUgZ2NpZDogc3RyaW5nO1xuICAgIHByaXZhdGUgZmVhdHVyZXM6IEFycmF5PHN0cmluZz47XG4gICAgcHJpdmF0ZSBzZXR0aW5nczogYW55O1xuICAgIHByaXZhdGUgb2JmdXNjYXRpb25TdHJhdGVneTogJ2Jhc2U2NCcgfCB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfc3RvcmFnZSA9IG5ldyBNZW1vcnlTdG9yYWdlQWRhcHRlcigpO1xuXG4gICAgbmFtZTogc3RyaW5nID0gJ01vYmlsZSc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdGl2ZVByb3h5PzogSU5hdGl2ZU1vYmlsZVByb3h5KSB7fVxuXG4gICAgcHVibGljIGdldFN0b3JhZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdG9yYWdlO1xuICAgIH1cblxuICAgIGFzeW5jIGluaXQoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlUHJveHkgJiYgdHlwZW9mIHRoaXMubmF0aXZlUHJveHkuZ2V0RmVhdHVyZXMgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVzID0gZ2lneWEudXRpbHMuSlNPTi5kZXNlcmlhbGl6ZSh0aGlzLm5hdGl2ZVByb3h5LmdldEZlYXR1cmVzKCkpIGFzIEFycmF5PHN0cmluZz47XG4gICAgICAgIGVsc2UgdGhpcy5mZWF0dXJlcyA9IGRlZmF1bHRBZGFwdGVyRmVhdHVyZXM7XG5cbiAgICAgICAgaWYgKHRoaXMubmF0aXZlUHJveHkgJiYgdHlwZW9mIHRoaXMubmF0aXZlUHJveHkuZ2V0U2V0dGluZ3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBnaWd5YS51dGlscy5KU09OLmRlc2VyaWFsaXplKHRoaXMubmF0aXZlUHJveHkuZ2V0U2V0dGluZ3MoKSk7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmxvZ0xldmVsID0gZ2lneWEudXRpbHMuYXJyYXkuZ2V0QXJyYXlGcm9tU3RyaW5nKHRoaXMuc2V0dGluZ3MubG9nTGV2ZWwgfHwgZGVmYXVsdEFkYXB0ZXJTZXR0aW5ncy5sb2dMZXZlbC5qb2luKCcsJyksICcsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gZGVmYXVsdEFkYXB0ZXJTZXR0aW5ncztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm5hdGl2ZVByb3h5ICYmIHR5cGVvZiB0aGlzLm5hdGl2ZVByb3h5LmdldE9iZnVzY2F0aW9uU3RyYXRlZ3kgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMub2JmdXNjYXRpb25TdHJhdGVneSA9IHRoaXMubmF0aXZlUHJveHkuZ2V0T2JmdXNjYXRpb25TdHJhdGVneSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gIzQ5Nzg5IC0gUmVxdWlyZWQgZm9yIGdpZ3lhLnNhbWwuanMsIHdoaWNoIGNhbiBpbml0IHdpdGggbW9iaWxlIGFkYXB0ZXIuXG4gICAgICAgIGdpZ3lhLl8uZ2V0QXBpRG9tYWluID0gZ2lneWEuXy5hcGlEb21haW5GYWN0b3J5KGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5wbHVnaW5zLmFwaURvbWFpbiwgZ2lneWEuZGVmYXVsdEFwaURvbWFpbik7XG5cbiAgICAgICAgZ2lneWEuZXZlbnRzLmFkZE1hcCh7XG4gICAgICAgICAgICBkZWZhdWx0TWV0aG9kOiBldmVudE9iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblBsdWdpbkV2ZW50KGV2ZW50T2JqZWN0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBldmVudE1hcDogW3sgZXZlbnRzOiAnKicsIGFyZ3M6IFsnJGV2ZW50J10gfV0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2VuZFRvTW9iaWxlKEdFVF9JRFMsIHt9LCByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVjaWQgPSByZXNwb25zZS51Y2lkO1xuICAgICAgICAgICAgdGhpcy5nY2lkID0gcmVzcG9uc2UuZ2NpZDtcblxuICAgICAgICAgICAgZm9yICh2YXIgbmFtZXNwYWNlIGluIGdpZ3lhLmV2ZW50cy5nbG9iYWwuX2FjdGl2ZU5hbWVzcGFjZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRm9yTmFtZXNwYWNlRXZlbnRzKG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRUb2tlblBhcmFtKEFQSUtleSwgcGFyYW1OYW1lKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIG9uUGx1Z2luRXZlbnQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAoIWV2ZW50LmlzR2xvYmFsKSB7XG4gICAgICAgICAgICB0aGlzLnNlbmRUb01vYmlsZShPTl9QTFVHSU5fRVZFTlQsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ3VzdG9tRXZlbnQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbmRUb01vYmlsZShPTl9DVVNUT01fRVZFTlQsIGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbkpTTG9nKGxvZ1R5cGU6IHN0cmluZywgbG9nSW5mbzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc0xvZ0xldmVsU3VwcG9ydGVkKGxvZ1R5cGUpKSByZXR1cm47XG5cbiAgICAgICAgdmFyIGxvZyA9IHtcbiAgICAgICAgICAgIGxvZ1R5cGU6IGxvZ1R5cGUsXG4gICAgICAgICAgICBsb2dJbmZvOiBsb2dJbmZvLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNlbmRUb01vYmlsZShPTl9KU19MT0csIGxvZyk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJGb3JOYW1lc3BhY2VFdmVudHMobmFtZXNwYWNlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZW5kVG9Nb2JpbGUoUkVHSVNURVJfRk9SX05BTUVTUEFDRV9FVkVOVFMsIHsgbmFtZXNwYWNlOiBuYW1lc3BhY2UgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0R21pZFRpY2tldChjYWxsYmFjaz86IChnbWlkVGlja2V0OiBzdHJpbmcpID0+IHZvaWQpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBpZiAoIWNhbGxiYWNrKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHBhcmFtcyA9IHsgZXhwaXJlczogMzAgfTtcbiAgICAgICAgdmFyIHNldHRpbmdzID0geyBmb3JjZUh0dHBzOiB0cnVlIH07XG5cbiAgICAgICAgdGhpcy5zZW5kUmVxdWVzdChcbiAgICAgICAgICAgICdzb2NpYWxpemUuZ2V0R21pZFRpY2tldCcsXG4gICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICAocmVzcG9uc2U6IE9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlWydnbWlkVGlja2V0J10pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldHRpbmdzLFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBjbGVhclNlc3Npb24ocGFyYW1zOiBPYmplY3QsIGNhbGxiYWNrPzogKHJlcz86IGFueSkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLnNlbmRUb01vYmlsZShDTEVBUl9TRVNTSU9OLCBwYXJhbXMsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBpc1Nlc3Npb25WYWxpZChwYXJhbXM6IE9iamVjdCwgY2FsbGJhY2s6IChpc1ZhbGlkOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VuZFRvTW9iaWxlKElTX1NFU1NJT05fVkFMSUQsIHt9LCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgc2VuZFJlcXVlc3QobWV0aG9kTmFtZTogc3RyaW5nLCBwYXJhbXM6IE9iamVjdCwgY2FsbGJhY2s/OiAocmVzcG9uc2U6IE9iamVjdCkgPT4gdm9pZCwgc2V0dGluZ3M/OiBBcGlBZGFwdGVyU2V0dGluZ3MpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZW5kVG9Nb2JpbGUoU0VORF9SRVFVRVNULCBwYXJhbXMsIGNhbGxiYWNrLCBtZXRob2ROYW1lLCBzZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgc2VuZE9hdXRoUmVxdWVzdChtZXRob2ROYW1lOiBzdHJpbmcsIHBhcmFtczogT2JqZWN0LCBjYWxsYmFjaz86IChyZXNwb25zZTogT2JqZWN0KSA9PiB2b2lkLCBzZXR0aW5ncz86IEFwaUFkYXB0ZXJTZXR0aW5ncyk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbmRUb01vYmlsZShTRU5EX09BVVRIX1JFUVVFU1QsIHBhcmFtcywgY2FsbGJhY2ssIG1ldGhvZE5hbWUsIHNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNlbmRUb01vYmlsZShhY3Rpb246IHN0cmluZywgcGFyYW1zPzogT2JqZWN0LCBjYWxsYmFjaz86IChyZXNwb25zZTogYW55KSA9PiB2b2lkLCBtZXRob2QgPSAnJywgc2V0dGluZ3M/OiBBcGlBZGFwdGVyU2V0dGluZ3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aW9uU3VwcG9ydGVkKGFjdGlvbikpIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JDb2RlOiBHU0Vycm9ycy5OT1RfU1VQUE9SVEVELFxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNb2JpbGUgU0RLIGRvZXMgbm90IHN1cHBvcnQgZmVhdHVyZSAnICsgYWN0aW9uLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBhcmFtcykgZGVsZXRlIHBhcmFtc1snQVBJS2V5J107XG5cbiAgICAgICAgICAgIGxldCBjYWxsYmFja0lEID0gJyc7XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrSUQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICdfJyArIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgbW9iaWxlQ2FsbGJhY2tzW2NhbGxiYWNrSURdID0gcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzLnVub2JmdXNjYXRlKHJlc3BvbnNlLCB0cnVlKSk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtb2JpbGVDYWxsYmFja3NbY2FsbGJhY2tJRF07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZFBhcmFtcyA9IHRoaXMub2JmdXNjYXRlKGdpZ3lhLnV0aWxzLmtleVZhbHVlLnNlcmlhbGl6ZShwYXJhbXMpKTtcbiAgICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRTZXR0aW5ncyA9IGdpZ3lhLnV0aWxzLmtleVZhbHVlLnNlcmlhbGl6ZShzZXR0aW5ncyk7XG4gICAgICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9IGBjYWxsYmFja0lEPSR7Y2FsbGJhY2tJRH0mcGFyYW1zPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNlcmlhbGl6ZWRQYXJhbXMpfSZzZXR0aW5ncz0ke2VuY29kZVVSSUNvbXBvbmVudChzZXJpYWxpemVkU2V0dGluZ3MpfWA7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5uYXRpdmVQcm94eS5zZW5kVG9Nb2JpbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRXaXRoSWZyYW1lKGFjdGlvbiwgbWV0aG9kLCBxdWVyeVN0cmluZywgY2FsbGJhY2tJRCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRvZXNOYXRpdmVTdXBwb3J0ID0gdGhpcy5uYXRpdmVQcm94eS5zZW5kVG9Nb2JpbGUoYWN0aW9uLCBtZXRob2QsIHF1ZXJ5U3RyaW5nKTtcbiAgICAgICAgICAgICAgICBpZiAoIWRvZXNOYXRpdmVTdXBwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1zZyA9ICdUaGUgTmF0aXZlIE1vYmlsZSBTREsgZG9lcyBub3Qgc3VwcG9ydCBmZWF0dXJlICcgKyBhY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci5lcnJvcihtc2cpO1xuICAgICAgICAgICAgICAgICAgICBtb2JpbGVDYWxsYmFja3NbY2FsbGJhY2tJRF0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDb2RlOiBHU0Vycm9ycy5OT1RfU1VQUE9SVEVELFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBtc2csXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2VuZFdpdGhJZnJhbWUoYWN0aW9uOiBzdHJpbmcsIG1ldGhvZDogc3RyaW5nLCBxdWVyeVN0cmluZzogc3RyaW5nLCBjYWxsYmFja0lEPzogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgaWZyYW1lLnNyYyA9IGAke1VSTF9QUkVGSVh9JHthY3Rpb259LyR7bWV0aG9kfT8ke3F1ZXJ5U3RyaW5nfWA7XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFuKCkge1xuICAgICAgICAgICAgaWYgKGlmcmFtZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZnJhbWUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZ25vcmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FsbGJhY2tJRCAmJiBtb2JpbGVDYWxsYmFja3NbY2FsbGJhY2tJRF0pIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQ2FsbGJhY2sgPSBtb2JpbGVDYWxsYmFja3NbY2FsbGJhY2tJRF07XG4gICAgICAgICAgICBtb2JpbGVDYWxsYmFja3NbY2FsbGJhY2tJRF0gPSByZXMgPT4ge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsQ2FsbGJhY2socmVzKTtcbiAgICAgICAgICAgICAgICBjbGVhbigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGNsZWFuKCksIDMwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZnJhbWUgYXBwZW5kZWQgb3V0c2lkZSB0aGUgZXZlbnQgdG8gcHJldmVudCBrZXlib2FyZCBmcm9tIGNsb3NpbmcgaW4gd2ViIHZpZXcgQnVnIDM3MTU2XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChpZnJhbWUpLCAwKTtcbiAgICB9XG5cbiAgICBvblNES0V2ZW50KGV2ZW50T2JqZWN0OiBPYmplY3QpOiB2b2lkIHtcbiAgICAgICAgaWYgKGV2ZW50T2JqZWN0ICYmIGV2ZW50T2JqZWN0Wyd1c2VyJ10pIHtcbiAgICAgICAgICAgIGdpZ3lhLl8uY29udmVydElkZW50aXRpZXNBcnJheVRvT2JqZWN0KGV2ZW50T2JqZWN0Wyd1c2VyJ10pO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2lneWEuZXZlbnRzLmdsb2JhbC5kaXNwYXRjaChldmVudE9iamVjdCk7XG4gICAgfVxuXG4gICAgaXNBY3Rpb25TdXBwb3J0ZWQoYWN0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFhY3Rpb24pIHJldHVybiBmYWxzZTtcblxuICAgICAgICByZXR1cm4gZ2lneWEudXRpbHMuYXJyYXkuaW5kZXhPZih0aGlzLmZlYXR1cmVzLCBhY3Rpb24pID4gLTE7XG4gICAgfVxuXG4gICAgaXNMb2dMZXZlbFN1cHBvcnRlZChsb2dUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGdpZ3lhLnV0aWxzLmFycmF5LmluZGV4T2YodGhpcy5zZXR0aW5ncy5sb2dMZXZlbCwgJyonKSAhPSAtMSB8fCBnaWd5YS51dGlscy5hcnJheS5pbmRleE9mKHRoaXMuc2V0dGluZ3MubG9nTGV2ZWwsIGxvZ1R5cGUpICE9IC0xO1xuICAgIH1cblxuICAgIHNldEdsdGV4cEZyb21TU08oYXBpS2V5Pzogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgIH1cblxuICAgIG9iZnVzY2F0ZShzdHJpbmc6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLm9iZnVzY2F0aW9uU3RyYXRlZ3kgPT09ICdiYXNlNjQnKSB7XG4gICAgICAgICAgICByZXR1cm4gYnRvYShzdHJpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVub2JmdXNjYXRlKHN0cmluZzogc3RyaW5nLCBpc0pTT046IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5vYmZ1c2NhdGlvblN0cmF0ZWd5ID09PSAnYmFzZTY0Jykge1xuICAgICAgICAgICAgY29uc3QgcGxhaW5TdHJpbmcgPSBhdG9iKHN0cmluZyk7XG4gICAgICAgICAgICBpZiAoaXNKU09OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocGxhaW5TdHJpbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGxhaW5TdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNob3dQbHVnaW4ocGx1Z2luOiBzdHJpbmcsIHBhcmFtczogYW55KSB7XG4gICAgdmFyIHBhcnRzID0gcGx1Z2luLnNwbGl0KCcuJyk7XG4gICAgdmFyIHBsdWdpbk5hbWUgPSBwYXJ0cy5zcGxpY2UocGFydHMubGVuZ3RoIC0gMSwgMSlbMF07XG5cbiAgICBpZiAoIXBhcnRzLmxlbmd0aCkgcGFydHMgPSBbJ3NvY2lhbGl6ZSddO1xuXG4gICAgaWYgKHBsdWdpbiA9PSAnY29tbWVudHNVSScpIHBhcnRzID0gWydjb21tZW50cyddO1xuXG4gICAgdmFyIGZ1bmNOYW1lID0gJ3Nob3cnICsgZ2lneWEudXRpbHMuc3RyaW5nVXRpbHMuY2FwaXRhbGl6ZShwbHVnaW5OYW1lKTtcblxuICAgIHBhcnRzLnB1c2goZnVuY05hbWUpO1xuICAgIHZhciBvYmo6IGFueSA9IGdpZ3lhO1xuXG4gICAgd2hpbGUgKG9iaiAmJiBwYXJ0cy5sZW5ndGgpIG9iaiA9IG9ialtwYXJ0cy5zaGlmdCgpXTtcblxuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBnaWd5YS5ldmVudHMuZGlzcGF0Y2hJbnZhbGlkUGFyYW1FcnJvcihnaWd5YS51dGlscy5vYmplY3QubWVyZ2UoW3sgcGx1Z2luOiBwbHVnaW4gfSwgcGFyYW1zXSksICdwbHVnaW4nKTtcbiAgICB9XG5cbiAgICBvYmoocGFyYW1zKTtcbn1cbiIsImltcG9ydCAqIGFzIEdpZ3lhX0FwaUFkYXB0ZXJzTW9iaWxlIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLkFkYXB0ZXJzLk1vYmlsZS9hcHAvTW9iaWxlQWRhcHRlcic7XG5pbXBvcnQgKiBhcyBHaWd5YV9BcGlBZGFwdGVyc01vYmlsZV8xIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLkFkYXB0ZXJzLk1vYmlsZS9hcHAvc2hvd1BsdWdpbic7XG5cbmRlY2xhcmUgY29uc3QgZ2lneWE6IGFueTtcbmlmICghZ2lneWEuXykge1xuICAgIGdpZ3lhLl8gPSB7fTtcbn1cbmlmICghZ2lneWEuXy5hcGlBZGFwdGVycykge1xuICAgIGdpZ3lhLl8uYXBpQWRhcHRlcnMgPSB7fTtcbn1cbmlmICghZ2lneWEuXy5hcGlBZGFwdGVycy5tb2JpbGUpIHtcbiAgICBnaWd5YS5fLmFwaUFkYXB0ZXJzLm1vYmlsZSA9IHt9O1xufVxuXG5PYmplY3QuYXNzaWduKGdpZ3lhLl8uYXBpQWRhcHRlcnMubW9iaWxlLCBHaWd5YV9BcGlBZGFwdGVyc01vYmlsZSwgR2lneWFfQXBpQWRhcHRlcnNNb2JpbGVfMSk7XG4iLCJleHBvcnQgY29uc3QgZW51bSBHU0Vycm9ycyB7XG4gICAgT0sgPSAwLFxuICAgIERhdGFfUGVuZGluZyA9IDEwMDAwMSwgLy8gRGF0YSBpcyBzdGlsbCBiZWluZyBwcm9jZXNzZWQsIHF1ZXJ5IGFnYWluIGZvciB0aGUgcmVzcG9uc2VcbiAgICBORVRXT1JLX0VSUk9SID0gNTAwMDI2LFxuICAgIERBVEFfUEVORElORyA9IDEwMDAwMSwgLy8gRGF0YSBpcyBzdGlsbCBiZWluZyBwcm9jZXNzZWQsIHF1ZXJ5IGFnYWluIGZvciB0aGUgcmVzcG9uc2VcbiAgICBPUEVSQVRJT05fQ0FOQ0VMRUQgPSAyMDAwMDEsIC8vIHVzZXIgY2FuY2VsZWQsIGluIGxvZ2luIHByb2Nlc3NcbiAgICBQRVJNSVNTSU9OX0dSQU5URUQgPSAyMDAwMDIsIC8vIElubmVyIGNvZGVcbiAgICBQRVJNSVNTSU9OX05PVF9HUkFOVEVEID0gMjAwMDAzLCAvLyBJbm5lciBjb2RlXG4gICAgUkVESVJFQ1QgPSAyMDAwMDQsIC8vIElubmVyIGNvZGVcbiAgICBORVdfVVNFUiA9IDIwMDAwNSwgLy8gSW5uZXIgY29kZVxuICAgIE9QRVJBVElPTl9ET05FID0gMjAwMDA2LCAvLyBJbm5lciBjb2RlXG4gICAgVVBEQVRFX1VTRVIgPSAyMDAwMDcsIC8vIElubmVyIGNvZGVcbiAgICBPS19XSVRIX0VSUk9SUyA9IDIwMDAwOCwgLy8gRm9yIHJlcG9ydHMgLSB3aGVuIHdlIHJldHVybiBvayB0byBjbGllbnQgYnV0IGhhZCBhY2NlcHRhYmxlIGVycm9ycyAodGhhdCB3ZSB3YW50IHRvIGtub3cgYWJvdXQpIG9uIHRoZSB3YXlcbiAgICBBQ0NPVU5UU19MSU5LRUQgPSAyMDAwMDksIC8vIEFmdGVyIGxpbmtpZ24gYWNjb3V0bnMgdmlhIGxvZ2luLCByZXR1cm4gdGhpcyBlcnJvciBjb2RlXG4gICAgT0tfV0lUSF9FUlJPUl9MT0dJTl9JREVOVElGSUVSX0VYSVNUUyA9IDIwMDAxMCwgLy8gRm9yIHNldEFjY291bnRJbmZvIHVzaW5nIHRoZSBjb25mbGljdEhhbmRsaW5nIHBhcmFtIC0gcHJvZmlsZSB3YXMgc2F2ZWQsIGJ1dCB0aGUgZW1haWwgY29uZmxpY3RzIHdpdGggYW5vdGhlciB1c2VyXG4gICAgQUNDT1VOVF9QRU5ESU5HX1JFR0lTVFJBVElPTiA9IDIwNjAwMSwgLy8gRm9yIGFjY291bnRzIEFQSSxcbiAgICBBQ0NPVU5UX1BFTkRJTkdfVkVSSUZJQ0FUSU9OID0gMjA2MDAyLCAvLyBGb3IgYWNjb3VudHMgQVBJOyBjb25zaWRlciBtb3ZpbmcgdG8gNDAzeHh4IHNlY3Rpb24gaW4gdGhlIGZ1dHVyZS5cbiAgICBBQ0NPVU5UX01JU1NJTkdfTE9HSU5JRCA9IDIwNjAwMywgLy8gRm9yIGFjY291bnRzIEFQSVxuICAgIElERU5USVRZX0FMUkVBRFlfQVNTSUdORUQgPSAyMDYwMDQsIC8vIEZvciBpbXBvcnQgYWNjb3VudHMgQVBJXG4gICAgQUZURVJfRU1BSUxfVkVSSUZJQ0FUSU9OID0gMjA2MDA1LFxuICAgIFBFTkRJTkdfQ09ERV9WRVJJRklDQVRJT04gPSAyMDYwMDYsXG4gICAgQ0xJRU5UX0xPRyA9IDMwMDAwMSwgLy8gaW50ZXJuYWwsIGZvciByZXBvcnRpbmcgZXJvcnJzIGluIGNsaWVudCBTREtTXG4gICAgSU5WQUxJRF9EQVRBX0NFTlRFUiA9IDMwMTAwMSwgLy8gXCJJbnZhbGlkIGRhdGEtY2VudGVyXCIuIHdpdGggZXJyb3IgZGV0YWlscyBvZjogXCJUaGlzIEFQSSBrZXkgaXMgc2VydmVkIGJ5IGFub3RoZXIgZGF0YSBjZW50ZXJcIi5cbiAgICBJTlZBTElEX1JFUVVFU1RfRk9STUFUID0gNDAwMDAxLCAvLyBjb3VsZCBiZSBhbGwga2luZCBvZiBlcnJvcnMgd2l0aCB3cm9uZyByZXF1ZXN0IChub24gc2VjdXJlIHdoZW4gc2hvdWxkIGJlIHNlY3VyZSwgd3JvbmcgYXV0aGVudGljYXRpb24gaGVhZGVyKVxuICAgIE1JU1NJTkdfUkVRVUlSRURfUEFSQU1FVEVSID0gNDAwMDAyLFxuICAgIFVOSVFVRV9JREVOVElGSUVSX0VYSVNUUyA9IDQwMDAwMyxcbiAgICBJTlZBTElEX1BBUkFNRVRFUl9GT1JNQVQgPSA0MDAwMDQsXG4gICAgSU5WQUxJRF9QQVJBTUVURVJfVkFMVUUgPSA0MDAwMDYsXG4gICAgRFVQTElDQVRFX1ZBTFVFID0gNDAwMDA3LFxuICAgIElOVkFMSURfQVVUSEVOVElDQVRJT05fSEVBREVSID0gNDAwMDA4LCAvLyBPQXV0aDJcbiAgICBWQUxJREFUSU9OX0VSUk9SID0gNDAwMDA5LCAvLyBJbiBhY2NvdW50cy5yZWdpc3Rlciwgd2hlbmV2ZXIgdGhlcmUgaXMgYSB2YWxpZGF0aW9uIGVycm9yXG4gICAgSU5WQUxJRF9SRURJUkVDVF9VUkkgPSA0MDAwMTEsIC8vIE9BdXRoMlxuICAgIElOVkFMSURfUkVTUE9OU0VfVFlQRSA9IDQwMDAxMiwgLy8gT0F1dGgyXG4gICAgVU5TVVBQT1JURURfR1JBTlRfVFlQRSA9IDQwMDAxMywgLy8gT0F1dGgyXG4gICAgSU5WQUxJRF9HUkFOVCA9IDQwMDAxNCwgLy8gT0F1dGgyXG4gICAgQ09ERV9FWFBJUkVEID0gNDAwMDE1LCAvLyBPQXV0aDJcbiAgICBTQ0hFTUFfVkFMSURBVElPTl9GQUlMRUQgPSA0MDAwMjAsXG4gICAgQ0FQVENIQV9WRVJJRklDQVRJT05fRkFJTEVEID0gNDAwMDIxLFxuICAgIFVOSVFVRV9JTkRFWF9WQUxJREFUSU9OX0VSUk9SID0gNDAwMDIyLFxuICAgIElOVkFMSURfVFlQRV9WQUxJREFUSU9OX0VSUk9SID0gNDAwMDIzLFxuICAgIERZTkFNSUNfRklFTERTX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjQsXG4gICAgV1JJVEVfQUNDRVNTX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjUsXG4gICAgSU5WQUxJRF9GT1JNQVRfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyNixcbiAgICBSRVFVSVJFRF9WQUxVRV9WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI3LFxuICAgIEVNQUlMX05PVF9WRVJJRklFRCA9IDQwMDAyOCxcbiAgICBTQ0hFTUFfQ09ORkxJQ1RfRVJST1IgPSA0MDAwMjksIC8vIFRvIGhhbmRsZSBVc2VyIHN0b3J5IDM0MzMwLiBJbXByb3ZlIEVsYXN0aWNTZWFyY2hNYXBwaW5nRXhjZXB0aW9uIGhhbmRsaW5nIGluIERTLkluZGV4T2JqZWN0XG4gICAgT1BFUkFUSU9OX05PVF9BTExPV0VEID0gNDAwMDMwLCAvLyBVc2VyIHN0b3J5IDM0MzExIC0gSWYgYWRkQ29ubmVjdGlvbiBpcyBjYWxsZWQgcmV0dXJuIGFuIGVycm9yIChcIm9wZXJhdGlvbiBub3QgYWxsb3dlZCBmb3IgdGhpcyBhY2NvdW50XCIsIDQwMFhYWCBlcnJvcikuXG4gICAgU0VDVVJJVFlfVkVSSUZJQ0FUSU9OX0ZBSUxFRCA9IDQwMDA1MCxcbiAgICBJTlZBTElEX0FQSUtFWV9QQVJBTUVURVIgPSA0MDAwOTMsXG4gICAgTk9UX1NVUFBPUlRFRCA9IDQwMDA5NiwgLy8gdGhlIGZ1bmN0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgYnkgYW55IG9mIHRoZSBjdXJyZW50bHkgY29ubmVjdGVkIHByb3ZpZGVyc1xuICAgIFVOU1VQUE9SVEVEX1VTRVJfQUdFTlQgPSA0MDAwOTcsIC8vXG4gICAgTk9fUFJPVklERVJTID0gNDAwMTAwLCAvLyBjbGllbnQ/XG4gICAgUE9QVVBfQkxPQ0tFRCA9IDQwMDEwMSwgLy8gY2xpZW50XG4gICAgSU5WQUxJRF9FVkVOVF9IQU5ETEVSID0gNDAwMTAyLCAvLyBjbGllbnRcbiAgICBJTlZBTElEX0NPTlRBSU5FUklEID0gNDAwMTAzLCAvLyBjbGllbnRcbiAgICBOT1RfQ09OTkVDVEVEID0gNDAwMTA2LCAvLyB1c2VyIGlzIG5vdCBjb25uZWN0ZWQgdG8gdGhlIHJlcXVpcmVkIG5ldHdvcmsgb3IgdG8gYW55IG5ldHdvcmtcbiAgICBJTlZBTElEX1NJVEVfRE9NQUlOID0gNDAwMTIwLCAvLyB0aGUgY3VycmVudCBkb21haW4gZG9lcyBub3QgbWF0Y2ggdGhlIGRvbWFpbiBjb25maWd1cmVkIGZvciB0aGUgYXBpIGtleVxuICAgIFBST1ZJREVSX0NPTkZJR1VSQVRJT05fRVJST1IgPSA0MDAxMjIsIC8vIHRoZSBjdXJyZW50IGRvbWFpbiBkb2VzIG5vdCBtYXRjaCB0aGUgZG9tYWluIGNvbmZpZ3VyZWQgZm9yIHRoZSBhcGkga2V5XG4gICAgTElNSVRfUkVBQ0hFRCA9IDQwMDEyNCwgLy8gR2FtZU1lY2hhbmljcyAtIENhcCB3YXMgcmVhY2hlZFxuICAgIEZSRVFVRU5DWV9MSU1JVF9SRUFDSEVEID0gNDAwMTI1LCAvLyBDb21tZW50cy9GZWVkIC0gU3BhbSBDYXBzIHdhcyByZWFjaGVkXG4gICAgSU5WQUxJRF9BQ1RJT04gPSA0MDAxMjYsIC8vIEdhbWVNZWNoYW5pY3MgLSBJbnZhbGlkIGFjdGlvbi4gVHJpZ2dlcmVkIGFjdGlvbiBjYW4ndCBiZSBpbml0aWF0ZWQgZXh0ZXJuYWxseVxuICAgIElOU1VGRklDSUVOVF9QT0lOVFNfVE9fUkVERUVNID0gNDAwMTI3LCAvLyBHYW1lTWVjaGFuaWNzIC0gSW5zdWZmaWNpZW50X3BvaW50c190b19yZWRlZW1cbiAgICBTSUdOQVRVUkVfVElNRVNUQU1QX0VYUElSRUQgPSA0MDAxMjgsIC8vIHRoZSB0aW1lc3RhbXAgaW5zaWRlIHRoZSBzaWduYXR1cmUgaXMgZXhwaXJlZFxuICAgIEVycm9yX0R1cmluZ19FeHRlbnNpb25zX09wZXJhdGlvbiA9IDQwMDMwMixcbiAgICBFeHRlbnNpb25fUG9pbnRfQ3VzdG9tX0Vycm9yID0gNDAwMzAzLCAvLyBFeHRlbnNpb24gcG9pbnQgcmV0dXJuIGEgdXNlckZhY2luZ0Vycm9yTWVzc2FnZVxuICAgIElOVkFMSURfUE9MSUNZX0NPTkZJR1VSQVRJT04gPSA0MDEwMDAsIC8vIFBvbGljeSBjb25maWd1cmF0aW9uIGlzIGludmFsaWQgKGkuZS4gcHJldmVudCByZWdpdHJhdGlvbilcbiAgICBTVVNQRUNURURfU1BBTSA9IDQwMTAxMCwgLy8gU29tZW9uZSBpcyB0cnlpbmcgdG8gdXNlIEdpZ3lhIHRvIHNlbmQgYSBlbWFpbCB3aXRoIGEgVVJMIHRoYXQgZG9lcyBub3QgbWF0Y2ggYW55IG9mIHRoZSBjbGllbnQncyBkb21haW5zOyBzdXNwZWN0ZWQgc3BhbS5cbiAgICBMT0dJTl9GQUlMRURfQ0FQVENIQV9SRVFVSVJFRCA9IDQwMTAyMCwgLy8gYWNjb3VudHMubG9naW4gLSBjYXB0Y2hhIHJlcXVpcmVkXG4gICAgUkVRVUVTVF9GQUlMRURfQ0FQVENIQV9SRVFVSVJFRCA9IDQwMTAyMywgLy8gYWNjb3VudHMubG9naW4gLSBjYXB0Y2hhIHJlcXVpcmVkXG4gICAgTE9HSU5fRkFJTEVEX1dST05HX0NBUFRDSEEgPSA0MDEwMjEsIC8vIGFjY291bnRzLmxvZ2luIC0gd3JvbmcgY2FwdGNoYSBjb2RlXG4gICAgT0xEX1BBU1NXT1JEX1VTRUQgPSA0MDEwMzAsIC8vIFRoZSB1c2VyIHByb3ZpZGVkIGhpcyBwcmV2aW91cyBwYXNzd29yZCwgbm90IHRoZSBjdXJyZW50IG9uZVxuICAgIEZPUkJJRERFTiA9IDQwMzAwMCxcbiAgICBJTlZBTElEX1NFU1NJT05fVE9LRU4gPSA0MDMwMDEsIC8vIGludGVybmFsXG4gICAgUkVRVUVTVF9IQVNfRVhQSVJFRCA9IDQwMzAwMiwgLy8gdGhlIHRpbWVzdGFtcCBvciBleHBpcmF0aW9uIG9mIHRoZSB0b2tlbiB1c2VkIGV4Y2VlZGVkIHRoZSBhbGxvd2VkIHRpbWUgd2luZG93XG4gICAgSU5WQUxJRF9SRVFVRVNUX1NJR05BVFVSRSA9IDQwMzAwMyxcbiAgICBEVVBMSUNBVEVfTk9OQ0UgPSA0MDMwMDQsXG4gICAgVU5BVVRIT1JJWkVEX1VTRVIgPSA0MDMwMDUsIC8vIHRoZSB1c2VyIGlkIHBhc3NlZCBpcyBub3QgdmFsaWQgZm9yIHRoaXMgc2l0ZVxuICAgIFNFTlNJVElWRV9EQVRBX1NFTlRfT1ZFUl9IVFRQID0gNDAzMDA2LCAvLyB3aGVuIHNlbmRpbmcgdGhlIHNlY3JldCBrZXkgaW4gUkVTVCBpdCBoYXMgdG8gYmUgb3ZlciBIVFRQU1xuICAgIFBFUk1JU1NJT05fREVOSUVEID0gNDAzMDA3LCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBQZXJtaXNzaW9uIGRlbmllZCAocmVhZE9ubHksbW9kZXJhdGlvbiBzaXRlKS5cbiAgICBJTlZBTElEX09QRU5JRF9VUkwgPSA0MDMwMDgsIC8vIGNhbm5vdCBmaW5kIGFuIG9wZW5JZCBlbmRwb2ludCBvbiB0aGUgdXJsIG9yIHVzZXJuYW1lIGdpdmVuIGZvciBvcGVuSWQgbG9naW5cbiAgICBQUk9WSURFUl9TRVNTSU9OX0VYUElSRUQgPSA0MDMwMDksIC8vIHRoZSB1c2VyIHNlc3Npb24gZm9yIHRoaXMgcHJvdmlkZXIgaXMgZXhwaXJlZFxuICAgIElOVkFMSURfU0VDUkVUID0gNDAzMDEwLCAvLyB0aGUgcmVxdWVzdCBoYXMgYW4gaW52YWxpZCBzZWNyZXQga2V5XG4gICAgU0VTU0lPTl9IQVNfRVhQSVJFRCA9IDQwMzAxMSwgLy8gdGhlIHNlc3Npb24gZm9yIHRoaXMgdXNlciBoYXMgZXhwaXJlZFxuICAgIE5PX1ZBTElEX1NFU1NJT04gPSA0MDMwMTIsIC8vIHJlcXVlc3RlZCB1c2VyIGhhcyBubyB2YWxpZCBzZXNzaW9uXG4gICAgVU5WRVJJRklFRF9VU0VSID0gNDAzMDEzLCAvLyB0aGUgdXNlciBpcyBub3QgdmVyaWZpZWQgaW4gU1NPIHNlc3Npb25cbiAgICBNSVNTSU5HX1JFUVVFU1RfUkVGRVJSRVIgPSA0MDMwMTUsIC8vIHdlIGNhbid0IHZhbGlkYXRlIHRoZSByZXF1ZXN0IGJlY2F1c2UgdGhlIHJlZmVycmVyIGhlYWRlciBpcyBtaXNzaW5nXG4gICAgVU5FWFBFQ1RFRF9QUk9WSURFUl9VU0VSID0gNDAzMDE3LCAvLyB0aGUgbG9nZ2VkIGluIHVzZXIgaXMgZGlmZmVyZW50IGZyb20gdGhlIG9uZSBleHBlY3RlZFxuICAgIFBFUk1JU1NJT05fTk9UX1JFUVVFU1RFRCA9IDQwMzAyMiwgLy8gdGhlIGFjdGlvbiBuZWVkcyBhIHVzZXIgcGVybWlzc2lvbiBhbmQgaXQgd2FzIG5vdCByZXF1ZXN0ZWRcbiAgICBOT19VU0VSX1BFUk1JU1NJT04gPSA0MDMwMjMsIC8vIHRoZSBhY3Rpb24gbmVlZHMgYSB1c2VyIHBlcm1pc3Npb24gYW5kIHdlIGRvbid0IGhhdmUgb25lXG4gICAgUFJPVklERVJfTElNSVRfUkVBQ0hFRCA9IDQwMzAyNCwgLy8gdGhlIHByb3ZpZGVyIGxpbWl0IGZvciB0aGlzIGFjdGlvbiB3YXMgZXhjZWVkZWRcbiAgICBJTlZBTElEX1RPS0VOID0gNDAzMDI1LCAvLyBPQXV0aDJcbiAgICBVTkFVVEhPUklaRURfQUNDRVNTX0VSUk9SID0gNDAzMDI2LCAvLyBDYWxscyB0byBhY2NvdW50cy5pc0F2YWlsYWJsZUxvZ2luSUQgV2hlbiBwcmV2ZW50TG9naW5JREhhcnZlc3RpbmcgPSB0cnVlIHNob3VsZCByZXR1cm4gYW4gYXBwcm9wcmlhdGUgNDAzeHh4IHVuYXV0aG9yaXplZCBhY2Nlc3MgZXJyb3IuXG4gICAgRElGRkVSRU5UX1VTRVJfRk9SX1JFQVVUSCA9IDQwMzAyNywgLy8gRGlmZmVyZW50IHVzZXIgdHJpZWQgdG8gcmUtYXV0aG9yaXplLlxuICAgIFNFU1NJT05fRVhQSVJFRF9SRVRSWSA9IDQwMzAzMCwgLy8gSW5uZXIgY29kZSAtIHdoZW4gdGhlIGZhY2Vib29rIHNlc3Npb24gaXMgZXhwaXJlZCBhbmQgdGhlIGNsaWVudCB3YWl0cyBmb3IgRkIgb24gcGFnZSB0byBsb2FkXG4gICAgQVBQUk9WRURfQllfTU9ERVJBVE9SID0gNDAzMDMxLCAvLyBjb21tZW50cyAtIGNhbnQgZmxhZyBjb21tZW50LCBpdCB3YXMgYXBwcm92ZWQgYnkgdGhlIG1vZGVyYXRvciBhbHJlYWR5LlxuICAgIFRPS0VOX0hBU19SRU5FV0VEID0gNDAzMDMyLCAvLyB0aGUgdG9rZW4gaXMgbm8gbG9uZ2VyIHZhbGlkLCBidXQgd2UgaGF2ZSBuZXcgdG9rZW4gdG8gcHJvdmlkZVxuICAgIE5PX1VTRVJfQ09PS0lFID0gNDAzMDM1LCAvLyBubyB1c2VyIGNvb2tpZVxuICAgIFVOQVVUSE9SSVpFRF9QQVJUTkVSID0gNDAzMDM2LCAvLyBwYXJ0bmVyIGlzIGRpc2FibGVkXG4gICAgUE9TVF9ERU5JRUQgPSA0MDMwMzcsIC8vIENvbW1lbnRzIHNlcnZlciAtIFBvc3QgZGVuaWVkIHdoZW4gdGhlIHVzZXIgdHJpZWQgdG8gcmV2aWV3IHR3aWNlLlxuICAgIE5PX0xPR0lOX1RJQ0tFVCA9IDQwMzA0MCwgLy8gbm8gbG9naW4gdGlja2V0IGluIGNhbGxiYWNrIHVybFxuICAgIEFDQ09VTlRfRElTQUJMRUQgPSA0MDMwNDEsIC8vIEZvciBhY2NvdW50cyAtIHdoZW4gZ3MuYWNjb3VudHMuSXNBY3RpdmU9ZmFsc2VcbiAgICBJTlZBTElEX0xPR0lOSUQgPSA0MDMwNDIsIC8vIEZvciBhY2NvdW50cyAtIHdoZW4gdHJ5aW5nIHRvIGxvZ2luIHdpdGggYSBsb2dpbklEIHRoYXQgZG8gbm90IGV4aXN0c1xuICAgIExPR0lOX0lERU5USUZJRVJfRVhJU1RTID0gNDAzMDQzLCAvLyBGb3IgYWNjb3VudDogSWYgcHJvdmlkZXJFbWFpbCBpcyBkZWZpbmVkIGFzIGEgbG9naW5JZGVudGlmaWVyIGluIHRoZSBwb2xpY3ksIGFuZCB0aGUgZW1haWwgYWRkcmVzcyByZWNlaXZlZCBmcm9tIHRoZSBwcm92aWRlciBleGlzdHMgaW4gdGhlIGdzLmxvZ2luSWRlbnRpZmllcnMgY29sbGVjdGlvbiBidXQgYXNzb2NpYXRlZCB3aXRoIGEgZGlmZmVyZW50IFVVSUQgdGhhbiB0aGUgY3VycmVudCB1c2VyLCB0aGVuIHJldHVybiBcIkxvZ2luIGlkZW50aWZpZXIgZXhpc3RzXCIgZXJyb3IgY29kZSAoNDAzeHh4KS5cbiAgICBVTkRFUkFHRV9VU0VSID0gNDAzMDQ0LCAvLyBGb3IgQ09QUEEgY29tcGxpYW5jZSAoQ2hpbGRyZW4ncyBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uIEFjdClcbiAgICBJTlZBTElEX1NJVEVfQ09ORklHVVJBVElPTl9FUlJPUiA9IDQwMzA0NSwgLy8gRm9yIGFjY291bnRzIC0gc2l0ZSBEUyBpcyBlbmFibGVkIHRob3VnaCBubyBEU1NpemUgd2FzIGNvbmZpZ3VyZWQuXG4gICAgTE9HSU5JRF9ET0VTX05PVF9FWElTVCA9IDQwMzA0NywgLy8gRm9yIGFjY291bnRzIC0gd2hlbiB0cnlpbmcgdG8gcmVzZXQgcGFzc3dvcmQgd2l0aCBhIGxvZ2luSUQgdGhhdCBkbyBub3QgZXhpc3RzXG4gICAgQVBJX1JBVEVfTElNSVRfRVhDRUVERUQgPSA0MDMwNDgsXG4gICAgUEVORElOR19QQVNTV09SRF9DSEFOR0UgPSA0MDMxMDAsIC8vIFRoZSB1c2VyJ3MgcGFzc3dvcmQgbmVlZHMgdG8gYmUgY2hhbmdlZFxuICAgIEFDQ09VTlRfUEVORElOR19URkFfVkVSSUZJQ0FUSU9OID0gNDAzMTAxLFxuICAgIEFDQ09VTlRfUEVORElOR19URkFfUkVHSVNUUkFUSU9OID0gNDAzMTAyLFxuICAgIEFDQ09VTlRfUEVORElOR19SRUNFTlRfTE9HSU4gPSA0MDMxMTAsXG4gICAgQUNDT1VOVF9URU1QT1JBUklMWV9MT0NLRURfT1VUID0gNDAzMTIwLCAvLyBUb28gbWFueSBsb2dpbiBhdHRlbXB0czsgYWNjb3VudCBsb2NrZWQtb3V0XG4gICAgUkVEVU5EQU5UX09QRVJBVElPTiA9IDQwMzIwMCwgLy8gVGhlIGNsaWVudCBwZXJmb3JtZWQgYW4gb3BlcmF0aW9uIHRoYXQgaXMgcmVkdW5kYW50XG4gICAgSU5WQUxJRF9BUFBMSUNBVElPTl9JRCA9IDQwMzIwMSwgLy8gVGhlIGFwcCBpZCBwcm92aWRlZCBpcyBkaWZmZXJlbnQgdGhhbiB0aGUgb25lIGNvbmZpZ3VyZWQgZm9yIHRoZSBzaXRlXG4gICAgTk9UX0ZPVU5EID0gNDA0MDAwLCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBDYXRlZ29yeSBub3QgZm91bmQuIEFjY291bnRzIC0gZW1haWwgdmVyaWZpY2F0aW9uIGZhaWxlZCwgdXVpZCBub3QgZm91bmQuXG4gICAgRlJJRU5EX05PVF9GT1VORCA9IDQwNDAwMSwgLy8gdGhlIHVzZXIgaWQgcHJvdmlkZWQgYXMgYSB0YXJnZXQgaXMgbm90IGEgZnJpZW5kIGZvciB0aGUgY3VycmVudCB1c2VyXG4gICAgQ0FURUdPUllfTk9UX0ZPVU5EID0gNDA0MDAyLCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBDYXRlZ29yeSBub3QgZm91bmQuXG4gICAgVUlEX05PVF9GT1VORCA9IDQwNDAwMyxcbiAgICBSRVNPVVJDRV9OT1RfRk9VTkQgPSA0MDQwMDQsIC8vIENsaWVudCBzaWRlIC0gaW1hZ2Ugbm90IGZvdW5kIGFmdGVyIHVwbG9hZFxuICAgIElOVkFMSURfQVBJX01FVEhPRCA9IDQwNTAwMSwgLy8gaW50ZXJuYWwgZm9yIG91ciBKUyBBUElcbiAgICBJREVOVElUWV9FWElTVFMgPSA0MDkwMDEsIC8vIHdoZW4gdHJ5aW5nIHRvIGNvbm5lY3QgdG8gYSBwcm92aWRlciB0aGF0IGlzIGFscmVhZHkgY29ubmVjdGVkIG9yIGxpbmsgdG8gYW4gYWxyZWFkeSBsaW5rZWQgYWNjb3VudFxuICAgIEdPTkUgPSA0MTAwMDAsIC8vIFJlc291cmNlIG5vIGxvbmdlciBhdmFpbGFibGUuIERhdGEgS2V5IFNlcnZlciAtIGtleSByZXZva2VkL2V4cGlyZWQuXG4gICAgUkVRVUVTVF9FTlRJVFlfVE9PX0xBUkdFID0gNDEzMDAxLCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBSZXF1ZXN0IHRvIGxhcmdlXG4gICAgQ09NTUVOVF9URVhUX1RPT19MQVJHRSA9IDQxMzAwMiwgLy8gQ29tbWVudHMgc2VydmVyIC0gQ29tbWVudCBUZXh0IHRvIGxhcmdlLlxuICAgIE9CSkVDVF9UT09fTEFSR0UgPSA0MTMwMDMsIC8vIERhdGFTdG9yZSBvYmplY3QgaXMgdG9vIGxhcmdlXG4gICAgUFJPRklMRV9QSE9UT19UT09fTEFSR0UgPSA0MTMwMDQsIC8vIFByb2ZpbGUgcGhvdG8gaXMgdG9vIGxhcmdlLCBleGNlZWRzIG1heGltdW0gYWxsb3dlZCBjb250ZW50IGxlbmd0aFxuICAgIFJFUVVFU1RfVVJJX1RPT19MT05HID0gNDE0MDAwLCAvL1RoZSBVUkkgcHJvdmlkZWQgd2FzIHRvbyBsb25nIGZvciB0aGUgc2VydmVyIHRvIHByb2Nlc3MuXG4gICAgTUlTU0lOR19VU0VSX1BIT1RPID0gNDA5MDEwLCAvLyBFcnJvciAtIG1pc3NpbmcgdXNlciBwaG90b1xuICAgIENPVU5URVJfTk9UX1JFR0lTVEVSRUQgPSA0MDkwMTEsIC8vIENvdW50ZXIgbm90IHJlZ2lzdGVyZWRcbiAgICBJTlZBTElEX0dNSURfVElDS0VUID0gNDA5MDEyLCAvLyBnbWlkIHRpY2tldCBpcyBub3QgdmFsaWRcbiAgICBTQU1MX01BUFBFRF9BVFRSSUJVVEVfTk9UX0ZPVU5EID0gNDA5MDEzLCAvLyBVc2VkIHdoZW4gbWFwcGVkIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgcHJvdmlkZXJVSUQgY2Fubm90IGJlIHJldHJlaXZlZFxuICAgIFNBTUxfQ0VSVElGSUNBVEVfTk9UX0ZPVU5EID0gNDA5MDE0LCAvLyBVc2VkIHdoZW4gU0FNTCBjZXJ0aWZpY2F0ZSBjb3VsZCBub3QgYmUgcmV0cmVpdmVkLlxuICAgIFNBTUxfTUVTU0FHRV9OT1RfRk9VTkQgPSA0MDkwMTUsIC8vIFVzZWQgd2hlbiBjYWNoZWQgU0FNTCBtZXNzYWdlIGNvdWxkIG5vdCBiZSByZXRyZWl2ZWQuXG4gICAgR0VORVJBTF9TRVJWRVJfRVJST1IgPSA1MDAwMDEsXG4gICAgU0VSVkVSX0xPR0lOX0VSUk9SID0gNTAwMDAyLCAvLyBnZW5lcmFsIGVycm9yIGR1cmluZyB0aGUgbG9naW4gcHJvY2Vzc1xuICAgIERFRkFVTFRfQVBQTElDQVRJT05fQ09ORklHVVJBVElPTl9FUlJPUiA9IDUwMDAwMywgLy8gRm9yIG11bHRpcGxlIERDIC0gd2hlbiBubyBkZWZhdWx0IGFwcGxpY2F0aW9uIGNhbiBiZSBmb3VuZCBpbiBEZWZhdWx0QXBwbGljYXRpb25zLmNvbmZpZy4gV2l0aCBlcnJvciBkZXRhaWxzIG9mOiBcIkRlZmF1bHQgYXBwbGljYXRpb24gaXNuJ3QgY29uZmlndXJlZCBmb3IgZGF0YUNlbnRlclwiXG4gICAgU0VTU0lPTl9NSUdSQVRJT05fRVJST1IgPSA1MDAwMTQsIC8vIGVycm9yIGluIG1pZ3JhdGluZyBvbGQgdG8gbmV3IGZhY2Vib29rIHNlc3Npb25cbiAgICBQUk9WSURFUl9FUlJPUiA9IDUwMDAyMywgLy8gZ2VuZXJhbCBlcnJvciBmcm9tIHRoZSBwcm92aWRlclxuICAgIERBVEFCQVNFX0VSUk9SID0gNTAwMDI4LFxuICAgIFVTRVJOQU1FX1JFUVVJUkVEID0gNTAwMDI5LCAvLyBJbm5lciBjb2RlXG4gICAgTk9fUFJPVklERVJfQVBQTElDQVRJT04gPSA1MDAwMzEsIC8vIHRoZSBhcHBsaWNhdGlvbiBmb3IgdGhpcyBwcm92aWRlciBpcyBub3QgZGVmaW5lZCBmb3IgdGhpcyBzaXRlXG4gICAgTE9BRF9GQUlMRUQgPSA1MDAwMzIsIC8vIGNsaWVudCBlcnJvclxuICAgIElOVkFMSURfRU5WSVJPTk1FTlRfQ09ORklHID0gNTAwMDMzLCAvLyBJbiBjYXNlIHRoZXJlIGlzIG5vIHRhcmdldCBlbnZpcm9ubWVudCBpbiB0aGUgY29uZmlnIGZpbGUgd2UnZCByZXR1cm4gd2l0aCAgaW52YWxpZF9lbnZpcm9ubWVudF9jb25maWcgZXJyb3IuXG4gICAgRVJST1JfRFVSSU5HX0JBQ0tFTkRfT1BFUkFUSU9OID0gNTAwMDM0LFxuICAgIFRJTUVPVVQgPSA1MDQwMDEsIC8vIG91dGdvaW5nIHJlcXVlc3QgaGFkIHRpbWVkIG91dFxuICAgIENMSUVOVFRJTUVPVVQgPSA1MDQwMDIsIC8vIEZvciBzZXJ2ZXIgU0RLcyAtIGEgY2xpZW50IHNpZGUgdGltZW91dFxuICAgIElOVkFMSURfVVJMID0gNDA0MDA0LCAvLyBlbWJlZC5seSA0MDQgZXJyb3IgbWVzc2FnZSAtIHVybCBpcyBub3QgdmFsaWRcbiAgICBNRURJQV9JVEVNU19OT1RfU1VQUE9SVEVEID0gNDAxMDAxLCAvLyBNZWRpYSBpdGVtcyBhIG5vdCBhbGxvd2VkIGZvciB0aGlzIGNhdGVnb3J5XG4gICAgTUlTU0lOR19FUlJPUl9DT0RFID0gNTk5OTk5LFxuICAgIFRISVNfQVVUSEVOVElDQVRJT05fTUVUSE9EX0lTX0NVUlJFTlRMWV9ESVNBQkxFRCAgPSA0MDMzMDAsXG4gICAgRk9SQ0VfTElOS19MT0dJTl9JREVOVElGSUVSX0VYSVNUUyA9IDQwOTAwMyxcbiAgICBQQVNTS0VZX0FVVEhFTlRJQ0FUT1JfUkVHSVNURVJFRCA9IDQwMDEzMCxcbiAgICBQQVNTS0VZX0FCT1JURUQgPSA0MDAxMzEsXG4gICAgUEFTU0tFWV9FUlJPUiA9IDUwMDEzMVxufVxuZXhwb3J0IGNvbnN0IGVudW0gR1NFcnJvckRldGFpbHMge1xuICAgIE5vbmUgPSAwLFxuICAgIFNhbWVfcGFzc3dvcmQgPSAxMDAwMDEsIC8vIFJlc2V0IFBhc3N3b3JkIC0gXCInb2xkUGFzc3dvcmQnIGNhbm5vdCBiZSB0aGUgc2FtZSBhcyAnbmV3UGFzc3dvcmQnXCJcbiAgICBJbnZhbGlkX3Bhc3N3b3JkID0gMTAwMDAyLCAvLyBSZXNldCBQYXNzd29yZCAtIGN1cnJlbnQgcGFzc3dvcmQgaXMgd3JvbmcvaW52YWxpZFxuICAgIEludmFsaWRfY291bnRlcnNfcXVlcnlfd2l0aF9jdXJzb3IgPSAxMDAwMDMsXG59XG4iLCIvLyBMb2NhbCBlbnZpcm9ubWVudCBpbmZvIChicm93c2VyLCBjYXBhYmlsaXRpZXMsIGhvc3RpbmcgZG9tYWluKVxuXG5kZWNsYXJlIGNvbnN0IEFjdGl2ZVhPYmplY3Q6IGFueTtcblxudmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbmV4cG9ydCB2YXIgbG9jYWxJbmZvID0ge1xuICAgIGJhc2VEb21haW46ICcnLCAvLyBjYWxjdWxhdGVkIGxhdGVyIG9uXG4gICAgaXNCcm93c2VyU3VwcG9ydHNGaWxlc0FQSTogKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBGaWxlUmVhZGVyID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBGaWxlUmVhZGVyID09PSAnb2JqZWN0JztcbiAgICB9KSgpLFxuICAgIGluaXRUaW1lOiBuZXcgRGF0ZSgpLFxuICAgIHZlcnNpb246IDAsIC8vVE9ET1xuICAgIHBhZ2VEb21haW46IGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lLFxuICAgIHByb3RvY29sOiBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCA9PSAnaHR0cDonID8gJ2h0dHAnIDogJ2h0dHBzJyxcbiAgICB1c2VyQWdlbnQ6IHVzZXJBZ2VudCxcbiAgICBpc1dpbjogdXNlckFnZW50LmluZGV4T2YoJ3dpbicpICE9IC0xLFxuICAgIGlzSUU6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llJykgIT0gLTEgfHwgKHVzZXJBZ2VudC5pbmRleE9mKCdtb3ppbGxhJykgIT0gLTEgJiYgdXNlckFnZW50LmluZGV4T2YoJ3RyaWRlbnQnKSAhPSAtMSksXG4gICAgaXNJRTY6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llIDYuJykgIT0gLTEsXG4gICAgaXNJRTc6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llIDcuJykgIT0gLTEsXG4gICAgaXNJRTg6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llIDguJykgIT0gLTEsXG4gICAgaXNJRTk6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llIDkuJykgIT0gLTEsXG4gICAgaXNJRTEwOiB1c2VyQWdlbnQuaW5kZXhPZignbXNpZSAxMC4nKSAhPSAtMSxcbiAgICBpc0lFMTE6IHVzZXJBZ2VudC5pbmRleE9mKCdtb3ppbGxhJykgIT0gLTEgJiYgdXNlckFnZW50LmluZGV4T2YoJ3RyaWRlbnQvNy4wJykgIT0gLTEsXG4gICAgaXNFZGdlTGVnYWN5OiB1c2VyQWdlbnQuaW5kZXhPZignZWRnZScpICE9IC0xLFxuICAgIGlzRWRnZTogUmVnRXhwKC9lZGcoPyFlKS8pLnRlc3QodXNlckFnZW50KSxcbiAgICBpc0lPUzogdXNlckFnZW50LmluZGV4T2YoJ2lwaG9uZScpICE9IC0xIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdpcGFkJykgIT0gLTEgfHwgdXNlckFnZW50LmluZGV4T2YoJ2lwb2QnKSAhPSAtMSxcbiAgICBpc1NhZmFyaTUzNDogdXNlckFnZW50LmluZGV4T2YoJ3NhZmFyaS81MzQnKSAhPSAtMSxcbiAgICBpc1dlQ2hhdDogdXNlckFnZW50LmluZGV4T2YoJ21pY3JvbWVzc2VuZ2VyJykgIT0gLTEsXG4gICAgaW9zVmVyc2lvbjogKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ2FwcGxld2Via2l0JykgIT0gLTEgJiYgdXNlckFnZW50LmluZGV4T2YoJ3ZlcnNpb24vJykgIT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh1c2VyQWdlbnQuc3BsaXQoJ3ZlcnNpb24vJylbMV0uc3BsaXQoJyAnKVswXSk7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gMDtcbiAgICB9KSgpLFxuICAgIGlzQW5kcm9pZDogdXNlckFnZW50LmluZGV4T2YoJ2FuZHJvaWQnKSAhPSAtMSxcbiAgICBpc0FuZHJvaWRCcm93c2VyOiAodXNlckFnZW50ID0+IHtcbiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdtb3ppbGxhLzUuMCcpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ2FuZHJvaWQgNCcpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ2FwcGxld2Via2l0JykgPT09IC0xKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCd3aW5kb3dzIHBob25lJykgIT09IC0xKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgLy8gU3BlY2lhbCB1c2VyIGFnZW50cyBmb3VuZCBzbyBmYXIgdGhhdCB2aW9sYXRlIHRoZSBleGlzdGFuY2Ugb2YgY2hyb21lIHJ1bGVcbiAgICAgICAgLy8gQnVnIDM4MzY3IEFuZHJvaWQgQnJvd3NlcjogTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDQuMi4yOyBlbi11czsgU0FNU1VORyBHVC1JOTUwMCBCdWlsZC9KRFEzOSkgQXBwbGVXZWJLaXQvNTM1LjE5IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi8xLjAgQ2hyb21lLzE4LjAuMTAyNS4zMDggTW9iaWxlIFNhZmFyaS81MzUuMTlcbiAgICAgICAgLy8gQnVnIDQwMjA5IENocm9tZSBCcm93c2VyOiBNb3ppbGxhLzUuMCAoTGludXg7IEFuZHJvaWQgNC4yLjI7IFNBTVNVTkcgU0dULUk3NDcgQnVpbGQvS09UNDlIKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMzkuMC4yMTcxLjkzIE1vYmlsZSBTYWZhcmkvNTM3LjM2XG4gICAgICAgIC8vIFdpbmRvd3MgUGhvbmUgQnJvd3NlcjogTW96aWxsYS81LjAgKE1vYmlsZTsgV2luZG93cyBQaG9uZSA4LjE7IEFuZHJvaWQgNC4wOyBBUk07IFRyaWRlbnQvNy4wOyBUb3VjaDsgcnY6MTEuMDsgSUVNb2JpbGUvMTEuMDsgTk9LSUE7IEx1bWlhIDkyMCkgbGlrZSBpUGhvbmUgT1MgN18wXzMgTWFjIE9TIFggQXBwbGVXZWJLaXQvNTM3IChLSFRNTCwgbGlrZSBHZWNrbykgTW9iaWxlIFNhZmFyaS81MzdcbiAgICAgICAgLy8gQ2hyb21lIEJyb3dzZXI6IE1vemlsbGEvNS4wIChMaW51eDsgQW5kcm9pZCA0LjIuMjsgZW4tZ2I7IFNBTVNVTkcgR1QtSTk1MDAgQnVpbGQvS09UNDlIKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzEuNSBDaHJvbWUvMjguMC4xNTAwLjk0IE1vYmlsZSBTYWZhcmkvNTM3LjM2XG5cbiAgICAgICAgdmFyIGNocm9tZUluZm8gPSAvY2hyb21lXFwvKFxcZCspLy5leGVjKHVzZXJBZ2VudCk7XG5cbiAgICAgICAgaWYgKCFjaHJvbWVJbmZvKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICB2YXIgY2hyb21lVmVyc2lvbiA9IHBhcnNlSW50KGNocm9tZUluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiBjaHJvbWVWZXJzaW9uIDwgMjA7XG4gICAgfSkodXNlckFnZW50KSxcbiAgICBjdXJyZW50QnJvd3NlcjogJycsXG4gICAgYW5kcm9pZFZlcnNpb246IChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdhbmRyb2lkJykgIT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHVzZXJBZ2VudC5zbGljZSh1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCcpICsgOCkpO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIDA7XG4gICAgfSkoKSxcbiAgICBpc0Nocm9tZTogdXNlckFnZW50LmluZGV4T2YoJ2Nocm9tZScpICE9IC0xICYmIHVzZXJBZ2VudC5pbmRleE9mKCdlZGcnKSA9PSAtMSwgLy8gZWRnZSBicm93c2VyIGFsc28gdXNlcyBDaHJvbWUgaW4gaXRzIFVBIHN0cmluZy5cbiAgICBpc0dvb2dsZUJvdDogdXNlckFnZW50LmluZGV4T2YoJ2dvb2dsZWJvdCcpICE9IC0xLFxuICAgIGlzRkY6IHVzZXJBZ2VudC5pbmRleE9mKCdmaXJlZm94JykgIT0gLTEsXG4gICAgaXNPcGVyYTogdXNlckFnZW50LmluZGV4T2YoJ29wZXJhJykgIT0gLTEsXG4gICAgaXNTYWZhcmk6XG4gICAgICAgIG5hdmlnYXRvci5hcHBWZXJzaW9uICYmXG4gICAgICAgIG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignc2FmYXJpJykgIT0gLTEgJiZcbiAgICAgICAgbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdjaHJvbWUnKSA9PSAtMSAmJlxuICAgICAgICB1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCcpID09IC0xLFxuICAgIGlzSU9TV2ViVmlldzogLyhpUGhvbmV8aVBvZHxpUGFkKS4qQXBwbGVXZWJLaXQoPyEuKlNhZmFyaSkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLFxuICAgIGlzSU9TQ2hyb21lOiB1c2VyQWdlbnQuaW5kZXhPZignY3Jpb3MnKSAhPSAtMSxcbiAgICBpc01BQzogbmF2aWdhdG9yLmFwcFZlcnNpb24gJiYgbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdtYWMnKSAhPSAtMSxcbiAgICBpc1dpbmRvd3NQaG9uZTogdXNlckFnZW50LmluZGV4T2YoJ3dpbmRvd3MgcGhvbmUnKSAhPSAtMSxcbiAgICBpc0ZhY2Vib29rQnJvd3NlcjogdXNlckFnZW50LmluZGV4T2YoJ2ZiYW4nKSAhPSAtMSB8fCB1c2VyQWdlbnQuaW5kZXhPZignZmJhdicpICE9IC0xLFxuICAgIHN1cHBvcnRzUG9zdE1lc3NhZ2U6IHdpbmRvdy5wb3N0TWVzc2FnZSAhPSBudWxsICYmICh1c2VyQWdlbnQuaW5kZXhPZignbXNpZScpID09IC0xIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdpZW1vYmlsZScpICE9IC0xKSxcbiAgICBzdXBwb3J0c0xvY2FsU3RvcmFnZTogZmFsc2UsXG4gICAgc3VwcG9ydHNTZXNzaW9uU3RvcmFnZTogZmFsc2UsXG4gICAgc3VwcG9ydHNGbGFzaDogKCgpID0+IHtcbiAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy85OTgyNDUvaG93LWNhbi1pLWRldGVjdC1pZi1mbGFzaC1pcy1pbnN0YWxsZWQtYW5kLWlmLW5vdC1kaXNwbGF5LWEtaGlkZGVuLWRpdi10aGF0LWluZlxuICAgICAgICBsZXQgc3VwcG9ydHNGbGFzaCA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5taW1lVHlwZXMgJiZcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubWltZVR5cGVzWydhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCddICE9IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5taW1lVHlwZXNbJ2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJ10uZW5hYmxlZFBsdWdpblxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc3VwcG9ydHNGbGFzaCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvID0gbmV3IEFjdGl2ZVhPYmplY3QoJ1Nob2Nrd2F2ZUZsYXNoLlNob2Nrd2F2ZUZsYXNoJyk7XG4gICAgICAgICAgICAgICAgaWYgKGZvKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzRmxhc2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgcmV0dXJuIHN1cHBvcnRzRmxhc2g7XG4gICAgfSkoKSxcbiAgICBxdWlya3NNb2RlOiBkb2N1bWVudC5jb21wYXRNb2RlID09ICdCYWNrQ29tcGF0JyAmJiB1c2VyQWdlbnQuaW5kZXhPZignbXNpZScpICE9IC0xLFxuICAgIGJhY2tDb21wYXQ6IGRvY3VtZW50LmNvbXBhdE1vZGUgPT0gJ0JhY2tDb21wYXQnLFxuICAgIC8vIFRPRE86IEFkZCBpc1RhYmxldCBmdW5jdGlvbiBmb3IgZGV2aWNlcyBub24tTW9iaWxlXG4gICAgaXNNb2JpbGU6IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1vYmlsZUNsaWVudHMgPSBbXG4gICAgICAgICAgICAnaXBob25lJyxcbiAgICAgICAgICAgICdpcG9kJyxcbiAgICAgICAgICAgICdhbmRyb2lkJyxcbiAgICAgICAgICAgICdtaWRwJyxcbiAgICAgICAgICAgICcyNDB4MzIwJyxcbiAgICAgICAgICAgICdibGFja2JlcnJ5JyxcbiAgICAgICAgICAgICduZXRmcm9udCcsXG4gICAgICAgICAgICAnbm9raWEnLFxuICAgICAgICAgICAgJ3BhbmFzb25pYycsXG4gICAgICAgICAgICAncG9ydGFsbW1tJyxcbiAgICAgICAgICAgICdzaGFycCcsXG4gICAgICAgICAgICAnc2llLScsXG4gICAgICAgICAgICAnc29ueWVyaWNzc29uJyxcbiAgICAgICAgICAgICdzeW1iaWFuJyxcbiAgICAgICAgICAgICd3aW5kb3dzIGNlJyxcbiAgICAgICAgICAgICdiZW5xJyxcbiAgICAgICAgICAgICdtZGEnLFxuICAgICAgICAgICAgJ21vdC0nLFxuICAgICAgICAgICAgJ29wZXJhIG1pbmknLFxuICAgICAgICAgICAgJ3BoaWxpcHMnLFxuICAgICAgICAgICAgJ3BvY2tldCBwYycsXG4gICAgICAgICAgICAnc2FnZW0nLFxuICAgICAgICAgICAgJ3NhbXN1bmcnLFxuICAgICAgICAgICAgJ2h0YycsXG4gICAgICAgIF07XG4gICAgICAgIGZvciAodmFyIGkgaW4gbW9iaWxlQ2xpZW50cykge1xuICAgICAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKG1vYmlsZUNsaWVudHNbaV0pICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pKCksXG4gICAgaXNNb2JpbGVBcHA6ICgoKSA9PiB7XG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUpXG4gICAgICAgICAgICAvLyBmb3Igb2xkIElFXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1ldGFUYWdzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtZXRhJykgYXMgYW55O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWV0YVRhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChtZXRhVGFnc1tpXS5nZXRBdHRyaWJ1dGUoJ25hbWUnKSA9PSAndmlld3BvcnQnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBtZXRhVGFnc1tpXS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcblxuICAgICAgICAgICAgICAgIGlmIChjb250ZW50ICYmIGNvbnRlbnQuaW5kZXhPZignd2lkdGg9ZGV2aWNlLXdpZHRoJykgIT09IC0xKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KSgpLFxuICAgIGlzTmF0aXZlTW9iaWxlQXBwOiBmYWxzZSwgLy8gd2lsbCBjaGFuZ2UgaWYgbW9iaWxlIGFkYXB0ZXIgd2lsbCBsb2FkIFtpbiBpdHMgJ2luaXQnIG1ldGhvZF0uXG4gICAgaXNUb3VjaDogKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KVxuICAgICAgICAgICAgLy8gd29ya3Mgb24gbW9zdCBicm93c2Vyc1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgaWYgKCdvbm1zZ2VzdHVyZWNoYW5nZScgaW4gd2luZG93KSB7XG4gICAgICAgICAgICAvLyB3b3JrcyBvbiBpZTEwXG4gICAgICAgICAgICAvLyBUcnkgdG8gZGV0ZXJtaW5lIGlmIElFIGlzIG9wZW4gaW4gbWV0cm8gbW9kZS4gTWV0cm8gZG9lc24ndCBhbGxvdyBhY3RpdmVYLCB0aGF0J3MgdGhlIGJlc3QgdGVzdCBhdmFpbGFibGUgYXMgb2YgSUUxMS5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pKCksXG4gICAgaXNPbkxpbmU6ICgpID0+IG5hdmlnYXRvci5vbkxpbmUsXG4gICAgbWVzc2FnaW5nTWV0aG9kOiAxXG59O1xuY29uc3QgaXNTdG9yYWdlRW5hYmxlZCA9IChzdG9yYWdlTmFtZTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHdpbmRvd1tzdG9yYWdlTmFtZV07XG4gICAgICAgIGlmICghc3RvcmFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGVzdE5hbWUgPSAnX2dpZ19sb2NhbFN0b3JhZ2VfdGVzdCc7XG4gICAgICAgIGNvbnN0IHRlc3RWYWx1ZSA9ICdqdXN0IGNoZWNraW5nIGZvciBsb2NhbFN0b3JhZ2UnO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0odGVzdE5hbWUsIHRlc3RWYWx1ZSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN0b3JhZ2UuZ2V0SXRlbSh0ZXN0TmFtZSkgPT09IHRlc3RWYWx1ZTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHRlc3ROYW1lKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAvLyBSZWFzb25zOlxuICAgICAgICAvLyAtIEluc2lkZSAzcmQgcGFydHkgQVBJIHByb3h5IGlGcmFtZS5cbiAgICAgICAgLy8gLSBTYWZhcmkgaW4gaW5jb2duaXRvIG1vZGUgd2lsbCBlcnJvciB3aXRoIFwicXVvdGEgZXhjZWVkZWRcIi5cbiAgICAgICAgLy8gLSBDaHJvbWUgd2l0aCAzcmQgcGFydHkgY29va2llcyBkaXNhYmxlZCB3aWxsIHRocm93IGFuIGVycm9yIGlmIHlvdSBhY2Nlc3MgdGhlIHdpbmRvdy5sb2NhbFN0b3JhZ2Ugb2JqZWN0IGluIEFOWSB3YXkuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xubG9jYWxJbmZvLnN1cHBvcnRzTG9jYWxTdG9yYWdlID0gaXNTdG9yYWdlRW5hYmxlZCgnbG9jYWxTdG9yYWdlJyk7XG5sb2NhbEluZm8uc3VwcG9ydHNTZXNzaW9uU3RvcmFnZSA9IGlzU3RvcmFnZUVuYWJsZWQoJ3Nlc3Npb25TdG9yYWdlJyk7XG5sb2NhbEluZm8uaXNNQUMgPSBsb2NhbEluZm8uaXNNQUMgJiYgIWxvY2FsSW5mby5pc0lPUztcbnZhciBvcyA9IGxvY2FsSW5mby5pc1dpblxuICAgID8gJ3dpbmRvd3MnXG4gICAgOiBsb2NhbEluZm8uaXNXaW5kb3dzUGhvbmVcbiAgICAgICAgPyAnd2lucGhvbmUnXG4gICAgICAgIDogbG9jYWxJbmZvLmlzSU9TXG4gICAgICAgICAgICA/ICdpb3MtdicgKyBsb2NhbEluZm8uaW9zVmVyc2lvblxuICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNNQUNcbiAgICAgICAgICAgICAgICA/ICdtYWMnXG4gICAgICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNBbmRyb2lkXG4gICAgICAgICAgICAgICAgICAgID8gJ2FuZHJvaWQnXG4gICAgICAgICAgICAgICAgICAgIDogJyc7XG5pZiAob3MpIG9zICs9ICcgJztcbnZhciBicm93c2VyID0gbG9jYWxJbmZvLmlzQ2hyb21lXG4gICAgPyAnY2hyb21lJ1xuICAgIDogbG9jYWxJbmZvLmlzRkZcbiAgICAgICAgPyAnZmlyZWZveCdcbiAgICAgICAgOiBsb2NhbEluZm8uaXNTYWZhcmlcbiAgICAgICAgICAgID8gJ3NhZmFyaSdcbiAgICAgICAgICAgIDogbG9jYWxJbmZvLmlzRWRnZVxuICAgICAgICAgICAgICAgID8gJ2VkZ2UnXG4gICAgICAgICAgICA6IGxvY2FsSW5mby5pc0VkZ2VMZWdhY3lcbiAgICAgICAgICAgICAgICA/ICdlZGdlIGxlZ2FjeSdcbiAgICAgICAgICAgICAgICA6IGxvY2FsSW5mby5pc0lFMTFcbiAgICAgICAgICAgICAgICAgICAgPyAnaWUxMSdcbiAgICAgICAgICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNJRTEwXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdpZTEwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNJRTlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdpZTknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNJRThcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnaWU4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xubG9jYWxJbmZvLmN1cnJlbnRCcm93c2VyID0gb3MgKyBicm93c2VyO1xuXG50eXBlIEJhdHRlcnlJbmZvID0ge1xuICAgIGNoYXJnaW5nOiBib29sZWFuO1xuICAgIGNoYXJnaW5nVGltZTogbnVtYmVyO1xuICAgIGRpc2NoYXJnaW5nVGltZTogbnVtYmVyO1xuICAgIGxldmVsOiBudW1iZXI7XG59O1xudHlwZSBQbHVnaW4gPSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGZpbGVuYW1lOiBzdHJpbmc7XG4gICAgbGVuZ3RoOiBudW1iZXI7XG59O1xuZXhwb3J0IGNsYXNzIENsaWVudEZlYXR1cmUge1xuICAgIHB1YmxpYyB1c2VyQWdlbnQ/OiBzdHJpbmc7XG4gICAgcHVibGljIHBsdWdpbnM/OiBQbHVnaW5bXTtcbiAgICBwdWJsaWMgbG9jYWxUaW1lPzogc3RyaW5nO1xuICAgIHB1YmxpYyB0aW1lem9uZU9mZnNldD86IG51bWJlcjtcbiAgICBwdWJsaWMgcGVybWlzc2lvblN0YXR1cz86IHsgc3RhdGU6IHN0cmluZyB9O1xuICAgIHB1YmxpYyB3ZWJkcml2ZXI/OiBib29sZWFuO1xuICAgIHB1YmxpYyBiYXR0ZXJ5SW5mbz86IEJhdHRlcnlJbmZvO1xuICAgIHB1YmxpYyBmZWF0dXJlcz86IFtudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgYm9vbGVhbl07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdmlnYXRvcjogTmF2aWdhdG9yID0gZ2lneWEuXy5XaW5kb3dQcm92aWRlci5uYXZpZ2F0b3IoKSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHNjcmVlbjogU2NyZWVuID0gZ2lneWEuXy5XaW5kb3dQcm92aWRlci5zY3JlZW4oKSkge1xuICAgICAgICB0aGlzLmNvbGxlY3REYXRhKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBjb2xsZWN0RGF0YSgpIHtcbiAgICAgICAgdGhpcy51c2VyQWdlbnQgPSB0aGlzLm5hdmlnYXRvcj8udXNlckFnZW50O1xuICAgICAgICB0aGlzLnBsdWdpbnMgPSBBcnJheS5mcm9tKHRoaXMubmF2aWdhdG9yPy5wbHVnaW5zIHx8IFtdKS5tYXAoKHtuYW1lLCBmaWxlbmFtZSwgbGVuZ3RofSkgPT4gKHsgbmFtZSwgZmlsZW5hbWUsIGxlbmd0aCB9KSk7XG4gICAgICAgIHRoaXMubG9jYWxUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgdGhpcy50aW1lem9uZU9mZnNldCA9IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICAgICAgY29uc3QgcGVybWlzc2lvblN0YXR1cyA9IGF3YWl0IHRoaXMubmF2aWdhdG9yPy5wZXJtaXNzaW9ucz8ucXVlcnkoeyBuYW1lOidub3RpZmljYXRpb25zJyB9KTtcbiAgICAgICAgaWYgKHBlcm1pc3Npb25TdGF0dXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHtzdGF0ZX0gPSBwZXJtaXNzaW9uU3RhdHVzO1xuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9uU3RhdHVzID0ge3N0YXRlfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndlYmRyaXZlciA9IHRoaXMubmF2aWdhdG9yPy53ZWJkcml2ZXI7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgYmF0dGVyeUluZm8gPSB0aGlzLm5hdmlnYXRvci5nZXRCYXR0ZXJ5ICYmIGF3YWl0IHRoaXMubmF2aWdhdG9yLmdldEJhdHRlcnkoKTtcbiAgICAgICAgaWYgKGJhdHRlcnlJbmZvKSB7XG4gICAgICAgICAgICBjb25zdCB7Y2hhcmdpbmcsIGNoYXJnaW5nVGltZSwgZGlzY2hhcmdpbmdUaW1lLCBsZXZlbH0gPSBiYXR0ZXJ5SW5mbztcbiAgICAgICAgICAgIHRoaXMuYmF0dGVyeUluZm8gPSB7Y2hhcmdpbmcsIGNoYXJnaW5nVGltZSwgZGlzY2hhcmdpbmdUaW1lLCBsZXZlbH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IFtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdG9yPy5tYXhUb3VjaFBvaW50cyB8fCB0aGlzLm5hdmlnYXRvcj8ubXNNYXhUb3VjaFBvaW50cyxcbiAgICAgICAgICAgIGAke3RoaXMuc2NyZWVuLndpZHRofXwke3RoaXMuc2NyZWVuLmhlaWdodH18JHt0aGlzLnNjcmVlbi5jb2xvckRlcHRofWAsXG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRvci5qYXZhRW5hYmxlZCgpLFxuICAgICAgICAgICAgJ3NlbmRCZWFjb24nIGluIHRoaXMubmF2aWdhdG9yXG4gICAgICAgIF07XG4gICAgfVxufVxuIiwiXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplKG9iajogYW55LCBpbmNsdWRlRnVuY3Rpb25zID0gZmFsc2UsIHByZXR0eVByaW50ID0gZmFsc2UsIGwgPSAwLCBtYXhMZXZlbCA9IDIwKTogc3RyaW5nIHtcbiAgICBpZiAoIWdpZ3lhLmxvY2FsSW5mby5pc0lFOCkge1xuICAgICAgICByZXR1cm4gd2luZG93WydKU09OJ10uc3RyaW5naWZ5KG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFsKSBsID0gMDtcblxuICAgICAgICBpZiAobCA+IG1heExldmVsKSByZXR1cm4gJ1tUb28gZGVlcF0nO1xuXG4gICAgICAgIHZhciBwcmVmaXggPSAnJztcbiAgICAgICAgdmFyIG5ld2xpbmUgPSAnJztcbiAgICAgICAgdmFyIHRhYiA9ICcnO1xuICAgICAgICBpZiAocHJldHR5UHJpbnQpIHtcbiAgICAgICAgICAgIHRhYiA9ICdcXHQnO1xuICAgICAgICAgICAgbmV3bGluZSA9ICdcXG4nO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsICsgMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcHJlZml4ICs9IHRhYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgdCA9IHR5cGVvZiBvYmo7XG4gICAgICAgIGlmICh0ID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQgIT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBzaW1wbGUgZGF0YSB0eXBlXG5cbiAgICAgICAgICAgIGlmICh0ID09ICdzdHJpbmcnKSBvYmogPSAnXCInICsgb2JqLnJlcGxhY2UoLyhcXFwifFxcXFwpL2csICdcXFxcJDEnKS5yZXBsYWNlKC9cXHJcXG58XFxyfFxcbi9nLCAnXFxcXG4nKSArICdcIic7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKG9iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbixcbiAgICAgICAgICAgICAgICB2LFxuICAgICAgICAgICAgICAgIGpzb24gPSBbXSxcbiAgICAgICAgICAgICAgICBhcnIgPSBvYmogJiYgb2JqLmNvbnN0cnVjdG9yID09IEFycmF5O1xuICAgICAgICAgICAgaWYgKGFycikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBvYmpbaV07XG4gICAgICAgICAgICAgICAgICAgIHQgPSB0eXBlb2YgdjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYgPT0gbnVsbCB8fCB0ID09ICd1bmRlZmluZWQnKSB2ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHQgPT0gJ3N0cmluZycpIHYgPSAnXCInICsgdi5yZXBsYWNlKC8oXFxcInxcXFxcKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvXFxyXFxufFxccnxcXG4vZywgJ1xcXFxuJykgKyAnXCInO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlRnVuY3Rpb25zKSB2ID0gJ0Z1bmN0aW9uJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdiA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHYucGFyZW50Tm9kZSAmJiB2LmlubmVySFRNTCkgdiA9ICdIVE1MRWxlbWVudCc7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHYuY29uc3RydWN0b3IgPT0gRGF0ZSkgdiA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ID09ICdvYmplY3QnICYmIHYgIT09IG51bGwpIHYgPSBzZXJpYWxpemUodiwgaW5jbHVkZUZ1bmN0aW9ucywgcHJldHR5UHJpbnQsIGwgKyAxKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoU3RyaW5nKHYpICE9ICcnKSBqc29uLnB1c2gocHJlZml4ICsgdGFiICsgU3RyaW5nKHYpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobiBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IG9ialtuXTtcbiAgICAgICAgICAgICAgICAgICAgdCA9IHR5cGVvZiB2O1xuICAgICAgICAgICAgICAgICAgICBpZiAodiA9PSBudWxsIHx8IHQgPT0gJ3VuZGVmaW5lZCcpIHYgPSBTdHJpbmcodik7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHQgPT0gJ3N0cmluZycpIHYgPSAnXCInICsgdi5yZXBsYWNlKC8oXFxcInxcXFxcKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvXFxyXFxufFxccnxcXG4vZywgJ1xcXFxuJykgKyAnXCInO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlRnVuY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdiA9ICdGdW5jdGlvbic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2LnBhcmVudE5vZGUgJiYgdi5pbm5lckhUTUwpIHYgPSAnSFRNTEVsZW1lbnQnO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2LmNvbnN0cnVjdG9yID09IERhdGUpIHYgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodCA9PSAnb2JqZWN0JyAmJiB2ICE9PSBudWxsKSB2ID0gbmV3bGluZSArIHNlcmlhbGl6ZSh2LCBpbmNsdWRlRnVuY3Rpb25zLCBwcmV0dHlQcmludCwgbCArIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChTdHJpbmcodikgIT0gJycpIGpzb24ucHVzaChwcmVmaXggKyB0YWIgKyAnXCInICsgbi5yZXBsYWNlKC8oXFxcInxcXFxcKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvXFxyXFxufFxccnxcXG4vZywgJ1xcXFxuJykgKyAnXCI6JyArIFN0cmluZyh2KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld2xpbmUgKyBwcmVmaXggKyAoYXJyID8gJ1snIDogJ3snKSArIG5ld2xpbmUgKyBqc29uLmpvaW4oJywnICsgbmV3bGluZSkgKyBuZXdsaW5lICsgcHJlZml4ICsgKGFyciA/ICddJyA6ICd9Jyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZGVzZXJpYWxpemU8VD4oanNvbjogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBULCBzY29wZT86IGFueSk6IFQge1xuICAgIC8vIFJldHVybiBkZWZhdWx0IHZhbHVlIGlmIGlzIGVtcHR5IHN0cmluZyAob3Igc2ltaWxhcikuXG4gICAgaWYgKCFqc29uIHx8ICFqc29uLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKSkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8ICh7fSBhcyBUKTtcbiAgICB9XG5cbiAgICAvLyBBdHRlbXB0IHRvIHBhcnNlLiBPbiBlcnJvciwgd2FybiBpbiBjb25zb2xlIGFuZCByZXR1cm4gZGVmYXVsdCB2YWx1ZS5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBrZXlzID0gW107XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgICAgICBpZiAoc2NvcGUpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNjb3BlKSB7XG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goc2NvcGVba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmbjogRnVuY3Rpb24gPSBldmFsKGAoZnVuY3Rpb24oJHtrZXlzLmpvaW4oJywnKX0pIHsgcmV0dXJuICR7anNvbi50cmltKCl9OyB9KWApO1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkodW5kZWZpbmVkLCB2YWx1ZXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdFcnJvciBkZXNlcmlhbGl6aW5nIEphdmFTY3JpcHQnLCBlKTtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCAoe30gYXMgVCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlPFQ+KGpzb246IHN0cmluZywgZGVmYXVsdFZhbHVlPzogVCk6IFQge1xuICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNJRTgpIHtcbiAgICAgICAgcmV0dXJuIGRlc2VyaWFsaXplPFQ+KGpzb24sIGRlZmF1bHRWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbJ0pTT04nXS5wYXJzZShqc29uKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCAoe30gYXMgVCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBsb2NhbEluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvJztcbmltcG9ydCB7Q29va2llU3RvcmV9IGZyb20gXCIuL2dsb2JhbFwiO1xuXG5leHBvcnQgdHlwZSBTYW1lU2l0ZSA9ICdOb25lJyB8ICdTdHJpY3QnIHwgJ0xheCc7XG5cbmV4cG9ydCBjbGFzcyBDb29raWVVdGlscyB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyB0ZXN0Q29va2llTmFtZSA9ICdnaWczcGN0ZXN0JztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Nvb2tpZVN0b3JlOiBDb29raWVTdG9yZSA9IG5ldyBDb29raWVTdG9yZSgpKSB7IH1cblxuICAgIHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzX2luPzogYW55LCBjb29raWVEb21haW4/OiBzdHJpbmcsIGRvbnRVc2VSb290UGF0aD86IGJvb2xlYW4sIHNhbWVTaXRlPzogU2FtZVNpdGUpOiBib29sZWFuIHtcblxuICAgICAgICBpZiAoY29va2llRG9tYWluID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvb2tpZURvbWFpbiA9IHRoaXMuZ2V0RGVmYXVsdERvbWFpbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IGRvbnRVc2VSb290UGF0aCA/ICcnIDogJy8nO1xuXG4gICAgICAgIGNvbnN0IGV4cGlyZU1zID0gdGhpcy5fZ2V0RXhwaXJhdGlvbkluTXMoZXhwaXJlc19pbik7XG5cbiAgICAgICAgbGV0IGV4cGlyZXMgPSBudWxsO1xuICAgICAgICBpZihleHBpcmVNcyAhPSBudWxsKSB7XG4gICAgICAgICAgICBleHBpcmVzID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGV4cGlyZXMuc2V0VGltZShleHBpcmVzLmdldFRpbWUoKSArIGV4cGlyZU1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb29raWVFeGlzdCA9IHRoaXMuX3NldENvb2tpZUludGVybmFsKG5hbWUsIHZhbHVlLCBwYXRoLCBleHBpcmVzLCBjb29raWVEb21haW4sIHNhbWVTaXRlKTtcblxuICAgICAgICBjb25zdCBzaG91bGRDb29raWVFeGlzdCA9ICFleHBpcmVNcyB8fCBleHBpcmVNcyA+IDA7XG5cbiAgICAgICAgaWYgKHNob3VsZENvb2tpZUV4aXN0ID09PSBjb29raWVFeGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBmYWlsZWQgdG8gc2V0IGNvb2tpZSwgcmV0cnk7XG4gICAgICAgIC8vIGl0IG1pZ2h0IGJlIGJlY2F1c2UgdGhlIGRvbWFpbiBpcyBsaXN0ZWQgYXMgVExEIGh0dHBzOi8vZGF0YS5pYW5hLm9yZy9UTEQvdGxkcy1hbHBoYS1ieS1kb21haW4udHh0XG4gICAgICAgIGNvbnN0IHBhZ2VEb21haW4gPSBsb2NhbEluZm8ucGFnZURvbWFpbjtcbiAgICAgICAgY29va2llRXhpc3QgPSB0aGlzLl9zZXRDb29raWVJbnRlcm5hbChuYW1lLCB2YWx1ZSwgcGF0aCwgZXhwaXJlcywgcGFnZURvbWFpbiwgc2FtZVNpdGUpO1xuXG4gICAgICAgIHJldHVybiBjb29raWVFeGlzdCA9PT0gc2hvdWxkQ29va2llRXhpc3Q7XG4gICAgfVxuXG4gICAgcHVibGljIGdldChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29va2llU3RvcmUuZ2V0Q29va2llKG5hbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmUobmFtZTogc3RyaW5nLCBkb21haW4gPSBsb2NhbEluZm8ucGFnZURvbWFpbik6IHZvaWQge1xuICAgICAgICB0aGlzLl9yZW1vdmVGcm9tQmFzZURvbWFpbnMobmFtZSwgZG9tYWluKTtcbiAgICAgICAgdGhpcy5zZXQobmFtZSwgJycsIC0xLCAnJywgZmFsc2UpO1xuICAgICAgICB0aGlzLnNldChuYW1lLCAnJywgLTEsICcnLCB0cnVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SW5maW5pdGVFeHBpcmF0aW9uVGltZUluU2Vjb25kcygpIHtcbiAgICAgICAgLy8gU2V0IGV4cGlyYXRpb24gdGltZSB0byAxIHllYXJzXG4gICAgICAgIHJldHVybiA2MCAqIDYwICogMjQgKiAzNjU7XG4gICAgfVxuXG4gICAgcHVibGljIGNhblNhdmVDb29raWUoY29va2llRG9tYWluID0gbnVsbCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0KENvb2tpZVV0aWxzLnRlc3RDb29raWVOYW1lLCAndHJ1ZScsIDEsIGNvb2tpZURvbWFpbiwgbnVsbCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIGlPUyAxMCB3ZWJ2aWV3IHRocm93cyBpbiBzb21lIHNjZW5hcmlvc1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldERlZmF1bHREb21haW4ocGFnZURvbWFpbiA9IGxvY2FsSW5mby5wYWdlRG9tYWluLCBiYXNlRG9tYWluID0gbG9jYWxJbmZvLmJhc2VEb21haW4gfHwgJycpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYmFzZURvbWFpbi5sZW5ndGggPiAwICYmIHBhZ2VEb21haW4ubGVuZ3RoID49IGJhc2VEb21haW4ubGVuZ3RoICYmIHBhZ2VEb21haW4ubGFzdEluZGV4T2YoYmFzZURvbWFpbikgPT09IHBhZ2VEb21haW4ubGVuZ3RoIC0gYmFzZURvbWFpbi5sZW5ndGhcbiAgICAgICAgICAgID8gYmFzZURvbWFpblxuICAgICAgICAgICAgOiBwYWdlRG9tYWluO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldEV4cGlyYXRpb25Jbk1zKGV4cGlyZXNJbjogYW55KSB7XG5cbiAgICAgICAgbGV0IGV4cGlyZU1zOiBudW1iZXI7XG4gICAgICAgIGlmIChleHBpcmVzSW4gPT0gbnVsbCB8fCBleHBpcmVzSW4gPT09ICcnIHx8IGlzTmFOKGV4cGlyZXNJbikpIHtcbiAgICAgICAgICAgIGV4cGlyZU1zID0gMTAwMCAqIHRoaXMuZ2V0SW5maW5pdGVFeHBpcmF0aW9uVGltZUluU2Vjb25kcygpO1xuICAgICAgICB9IGVsc2UgaWYgKGV4cGlyZXNJbiA9PSAwKSB7XG4gICAgICAgICAgICAvLyAwIG1lYW5zIFNlc3Npb25cbiAgICAgICAgICAgIGV4cGlyZU1zID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFueSBvdGhlciB2YWx1ZSBpcyBudW1iZXIgb2Ygc2Vjb25kcyAoQSBuZWdhdGl2ZSB2YWx1ZSB3b3VsZCBtZWFuIGV4cGlyZSBub3chKVxuICAgICAgICAgICAgZXhwaXJlTXMgPSBleHBpcmVzSW4gKiAxMDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV4cGlyZU1zO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldENvb2tpZUludGVybmFsKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgcGF0aDogc3RyaW5nLCBleHBpcmVzOiBEYXRlLCBjb29raWVEb21haW46IHN0cmluZywgc2FtZVNpdGVNb2RlID0gQ29va2llVXRpbHMuX2dldFNhbWVTaXRlTW9kZSgpKSB7XG4gICAgICAgIGNvbnN0IHByb3RvY29sID0gbG9jYWxJbmZvPy5wcm90b2NvbCA/PyBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbDtcbiAgICAgICAgY29uc3QgaXNTZWN1cmVkID0gcHJvdG9jb2wuaW5kZXhPZignaHR0cHMnKSA9PT0gMDtcblxuICAgICAgICB0aGlzLl9jb29raWVTdG9yZS5zZXRDb29raWUobmFtZSwgdmFsdWUsIHtcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBleHBpcmVzLFxuICAgICAgICAgICAgZG9tYWluOiBjb29raWVEb21haW4sXG4gICAgICAgICAgICBzYW1lU2l0ZTogc2FtZVNpdGVNb2RlLFxuICAgICAgICAgICAgc2VjdXJlOiBpc1NlY3VyZWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0KG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2FtZVNpdGVNb2RlKSB7XG4gICAgICAgICAgICAvL2lmIGZhaWxlZCB0byB3cml0ZSBjb29raWUgd2l0aG91dCBzYW1lU2l0ZSBtb2RlLCB0aGVuIHN0b3AgaGVyZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNhbWVTaXRlTW9kZSAhPT0gJ05vbmUnKSB7XG4gICAgICAgICAgICB0aGlzLl9mYWxsYmFja1RvU2FtZVNpdGVOb25lKG5hbWUsIHZhbHVlLCBwYXRoLCBleHBpcmVzLCBjb29raWVEb21haW4sIGlzU2VjdXJlZClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdldChuYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5fcmVwb3J0RmFsbGJhY2soJ1NldHRpbmcgU2FtZVNpdGU9Tm9uZScsIHtuYW1lLCB2YWx1ZSwgc2FtZVNpdGVNb2RlfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGZhaWxlZCB0byB3cml0ZSBjb29raWUgd2l0aCBzYW1lU2l0ZSBtb2RlLCByZXRyeSB3aXRob3V0O1xuICAgICAgICB0aGlzLl9jb29raWVTdG9yZS5zZXRDb29raWUobmFtZSwgdmFsdWUsIHtcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBleHBpcmVzLFxuICAgICAgICAgICAgZG9tYWluOiBjb29raWVEb21haW4sXG4gICAgICAgICAgICBzZWN1cmU6IGlzU2VjdXJlZFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5nZXQobmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlcG9ydEZhbGxiYWNrKCdDb29raWUgZXN0YWJsaXNoZWQgb25seSB3aXRob3V0IHNhbWVTaXRlIG1vZGUnLCB7bmFtZSwgdmFsdWUsIHNhbWVTaXRlTW9kZX0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVtb3ZlRnJvbUJhc2VEb21haW5zKG5hbWU6IHN0cmluZywgZG9tYWluOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZG9tYWluUGFydHMgPSBkb21haW4uc3BsaXQoJy4nKTtcblxuICAgICAgICAvLyB3aGVuIGNsZWFyaW5nIGZyb20gYS5iLmMuZC5jb20gLS0+IGNsZWFyIGZyb20gYS5iLmMuZC5jb20sIGIuYy5kLmNvbSwgYy5kLmNvbSwgZC5jb21cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb21haW5QYXJ0cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRvbWFpbiA9IGRvbWFpblBhcnRzLnNsaWNlKGkpLmpvaW4oJy4nKTtcbiAgICAgICAgICAgIHRoaXMuc2V0KG5hbWUsICcnLCAtMSwgZG9tYWluLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnNldChuYW1lLCAnJywgLTEsIGRvbWFpbiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfZ2V0U2FtZVNpdGVNb2RlKCkgOiBTYW1lU2l0ZSB7XG4gICAgICAgIGlmICghQ29va2llVXRpbHMuX2Rpc2FsbG93U2FtZVNpdGVNb2RlKCkpIHJldHVybiAnTm9uZSc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2Rpc2FsbG93U2FtZVNpdGVNb2RlKCkge1xuICAgICAgICBjb25zdCBwcm90b2NvbCA9IGxvY2FsSW5mbz8ucHJvdG9jb2wgPz8gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2w7XG4gICAgICAgIGNvbnN0IHVhID0gbG9jYWxJbmZvPy51c2VyQWdlbnQgPz8gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBpc1NlY3VyZWQgPSBwcm90b2NvbC5pbmRleE9mKCdodHRwcycpID09PSAwO1xuXG4gICAgICAgIHJldHVybiAhaXNTZWN1cmVkIHx8ICF1YSB8fFxuICAgICAgICAgICAgLy8gQ292ZXIgYWxsIGlPUyBiYXNlZCBicm93c2VycyBoZXJlLiBUaGlzIGluY2x1ZGVzOlxuICAgICAgICAgICAgLy8gLSBTYWZhcmkgb24gaU9TIDEyIGZvciBpUGhvbmUsIGlQb2QgVG91Y2gsIGlQYWRcbiAgICAgICAgICAgIC8vIC0gV2tXZWJ2aWV3IG9uIGlPUyAxMiBmb3IgaVBob25lLCBpUG9kIFRvdWNoLCBpUGFkXG4gICAgICAgICAgICAvLyAtIENocm9tZSBvbiBpT1MgMTIgZm9yIGlQaG9uZSwgaVBvZCBUb3VjaCwgaVBhZFxuICAgICAgICAgICAgLy8gQWxsIG9mIHdoaWNoIGFyZSBicm9rZW4gYnkgU2FtZVNpdGU9Tm9uZSwgYmVjYXVzZSB0aGV5IHVzZSB0aGUgaU9TIG5ldHdvcmtpbmcgc3RhY2tcbiAgICAgICAgICAgICgodWEuaW5kZXhPZignQ1BVIGlQaG9uZSBPUyAxMicpID4gLTEgfHwgdWEuaW5kZXhPZignaVBhZDsgQ1BVIE9TIDEyJykgPiAtMSkgfHxcbiAgICAgICAgICAgICAgICAvLyBDb3ZlciBNYWMgT1MgWCBiYXNlZCBicm93c2VycyB0aGF0IHVzZSB0aGUgTWFjIE9TIG5ldHdvcmtpbmcgc3RhY2suIFRoaXMgaW5jbHVkZXM6XG4gICAgICAgICAgICAgICAgLy8gLSBTYWZhcmkgb24gTWFjIE9TIFguXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBkb2VzIG5vdCBpbmNsdWRlOlxuICAgICAgICAgICAgICAgIC8vIC0gQ2hyb21lIG9uIE1hYyBPUyBYXG4gICAgICAgICAgICAgICAgLy8gQmVjYXVzZSB0aGV5IGRvIG5vdCB1c2UgdGhlIE1hYyBPUyBuZXR3b3JraW5nIHN0YWNrLlxuICAgICAgICAgICAgICAgICh1YS5pbmRleE9mKCdNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE0JykgPiAtMSAmJiB1YS5pbmRleE9mKCdWZXJzaW9uLycpID4gLTEgJiYgdWEuaW5kZXhPZignU2FmYXJpJykgPiAtMSkgfHxcbiAgICAgICAgICAgICAgICAvLyBDb3ZlciBDaHJvbWUgNTAtNjksIGJlY2F1c2Ugc29tZSB2ZXJzaW9ucyBhcmUgYnJva2VuIGJ5IFNhbWVTaXRlPU5vbmUsXG4gICAgICAgICAgICAgICAgLy8gYW5kIG5vbmUgaW4gdGhpcyByYW5nZSByZXF1aXJlIGl0LlxuICAgICAgICAgICAgICAgIC8vIE5vdGU6IHRoaXMgY292ZXJzIHNvbWUgcHJlLUNocm9taXVtIEVkZ2UgdmVyc2lvbnMsXG4gICAgICAgICAgICAgICAgLy8gYnV0IHByZS1DaHJvbWl1bSBFZGdlIGRvZXMgbm90IHJlcXVpcmUgU2FtZVNpdGU9Tm9uZS5cbiAgICAgICAgICAgICAgICAodWEuaW5kZXhPZignQ2hyb21lLzUnKSA+IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZS82JykgPiAtMSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZhbGxiYWNrVG9TYW1lU2l0ZU5vbmUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIGV4cGlyZXM6IERhdGUsIGNvb2tpZURvbWFpbjogc3RyaW5nLCBzZWN1cmU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29va2llU3RvcmUuc2V0Q29va2llKG5hbWUsIHZhbHVlLCB7XG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgZXhwaXJlcyxcbiAgICAgICAgICAgIGRvbWFpbjogY29va2llRG9tYWluLFxuICAgICAgICAgICAgc2FtZVNpdGU6ICdOb25lJyxcbiAgICAgICAgICAgIHNlY3VyZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZXBvcnRGYWxsYmFjayhtZXNzYWdlOiBzdHJpbmcsIGRldGFpbHM6IHtcbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICB2YWx1ZTogc3RyaW5nO1xuICAgICAgICBzYW1lU2l0ZU1vZGU6IHN0cmluZztcbiAgICAgICAgaXNTdWNjZXNzZnVsPzogYm9vbGVhbjtcbiAgICAgICAgaXNJZnJhbWU/OiBib29sZWFuO1xuICAgIH0pIHtcbiAgICAgICAgZ2lneWEubG9nZ2VyLnJlcG9ydChgQ29va2llIFBvbGljeSBGYWxsYmFjazogJHttZXNzYWdlfWAsIHsuLi5kZXRhaWxzLCBpc0lmcmFtZTogdGhpcy5faXNJRnJhbWUoKX0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlICBfaXNJRnJhbWUoKTogYm9vbGVhbiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93Py5sb2NhdGlvbiAhPT0gd2luZG93Py5wYXJlbnQ/LmxvY2F0aW9uO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29va2llVXRpbHMoKTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgSUNvb2tpZU9wdGlvbnMge1xuICAgIHBhdGg/OiBzdHJpbmc7XG4gICAgZG9tYWluPzogc3RyaW5nO1xuICAgIGV4cGlyZXM/OiBEYXRlO1xuICAgIHNhbWVTaXRlPzogJ05vbmUnIHwgJ1N0cmljdCcgfCAnTGF4JztcbiAgICBzZWN1cmU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgQ29va2llU3RvcmUge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfd2luOiBXaW5kb3cgPSB3aW5kb3cpIHsgfVxuXG4gICAgc2V0Q29va2llKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgb3B0aW9uczogSUNvb2tpZU9wdGlvbnMpIHtcbiAgICAgICAgbGV0IGNvb2tpZVN0cmluZyA9IGAke25hbWV9PSR7ZXNjYXBlKHZhbHVlKX1gO1xuICAgICAgICBpZihvcHRpb25zLnBhdGgpIGNvb2tpZVN0cmluZyArPSBgOyBwYXRoPSR7b3B0aW9ucy5wYXRofWA7XG4gICAgICAgIGlmKG9wdGlvbnMuZXhwaXJlcykgY29va2llU3RyaW5nICs9IGA7IGV4cGlyZXM9JHtvcHRpb25zLmV4cGlyZXMudG9VVENTdHJpbmcoKX1gO1xuICAgICAgICBpZihvcHRpb25zLmRvbWFpbiAmJiBvcHRpb25zLmRvbWFpbi5pbmRleE9mKCcuJykgIT0gLTEpIGNvb2tpZVN0cmluZyArPSBgOyBkb21haW49JHtvcHRpb25zLmRvbWFpbn1gO1xuICAgICAgICBpZihvcHRpb25zLnNhbWVTaXRlKSBjb29raWVTdHJpbmcgKz0gYDsgc2FtZVNpdGU9JHtvcHRpb25zLnNhbWVTaXRlfWA7XG4gICAgICAgIGlmKG9wdGlvbnMuc2VjdXJlKSBjb29raWVTdHJpbmcgKz0gYDsgc2VjdXJlYDtcbiAgICAgICAgdGhpcy5fd2luLmRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZVN0cmluZztcbiAgICB9XG5cbiAgICBnZXRDb29raWUobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFtcXF1cXC9cXFxcXSkvZywgJ1xcXFwkMScpLnJlcGxhY2UoL15bIFxcdF0rfFsgXFx0XSskL2csICcnKTtcbiAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCcoPzpefDspXFxcXHM/JyArIG5hbWUgKyAnPSguKj8pKD86O3wkKScpO1xuICAgICAgICBjb25zdCBtYXRjaCA9IHRoaXMuX3dpbi5kb2N1bWVudC5jb29raWUubWF0Y2gocmVnZXgpO1xuICAgICAgICByZXR1cm4gbWF0Y2ggJiYgdW5lc2NhcGUobWF0Y2hbMV0pO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIEpTT05VdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvSlNPTic7XG5pbXBvcnQgeyBsb2NhbEluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvJztcbmltcG9ydCBjb29raWVVdGlscywge1NhbWVTaXRlfSBmcm9tICcuL2Nvb2tpZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdBYnN0cmFjdEFkYXB0ZXInO1xuICAgIH1cblxuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nO1xuXG4gICAgcHVibGljIGFic3RyYWN0IHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZXNJbj86IG51bWJlciwgZG9tYWluPzogc3RyaW5nKTogdm9pZDtcblxuICAgIHB1YmxpYyBhYnN0cmFjdCByZW1vdmVJdGVtKGtleTogc3RyaW5nKTtcblxuICAgIC8qKlxuICAgICAqIFNldCBvYmplY3QgdG8gc3RvcmFnZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0T2JqZWN0KGtleTogc3RyaW5nLCBvOiBPYmplY3QpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtKGtleSwgSlNPTlV0aWxzLnNlcmlhbGl6ZShvKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG9iamVjdCBmcm9tIGxvY2FsIHN0b3JhZ2UuXG4gICAgICovXG4gICAgcHVibGljIGdldE9iamVjdChrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KTogT2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIEpTT05VdGlscy5kZXNlcmlhbGl6ZSh0aGlzLmdldEl0ZW0oa2V5KSwgZGVmYXVsdFZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJcyBwZXJzaXN0ZW50IHN0b3JhZ2UuIFJldHVybnMgZmFsc2Ugd2hlbiBkYXRhIGlzIG5vdCBwZXJzaXN0ZWQuXG4gICAgICovXG4gICAgcHVibGljIGlzUGVyc2lzdGVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0QXN5bmNMb2NhbFN0b3JhZ2VBZGFwdGVyIGV4dGVuZHMgQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIHtcbiAgICBwcm90ZWN0ZWQgaXNMb2FkZWQ6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1JlYWR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0xvYWRlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIHdoZW4gdGhlcmUgaXMgaW5pdGlhbGl6YXRpb24gdGltZSBvbiB0aGUgbG9jYWwgc3RvcmFnZSBhZGFwdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyB3YWl0Rm9yU2VydmljZShjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc1JlYWR5KCkpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMud2FpdEZvclNlcnZpY2UoY2FsbGJhY2spLCA1MCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5hYnN0cmFjdCBjbGFzcyBTdG9yYWdlQWRhcHRlciBleHRlbmRzIEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlciB7XG4gICAgcHJvdGVjdGVkIHN0b3JhZ2U6IGFueTtcblxuICAgIHB1YmxpYyBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZVtrZXldO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzSW4/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7fVxuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgfVxufVxuY2xhc3MgTG9jYWxTdG9yYWdlQWRhcHRlciBleHRlbmRzIFN0b3JhZ2VBZGFwdGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnTG9jYWxTdG9yYWdlQWRhcHRlcic7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc0F2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsSW5mby5zdXBwb3J0c0xvY2FsU3RvcmFnZTtcbiAgICB9XG59XG5jbGFzcyBTZXNzaW9uU3RvcmFnZUFkYXB0ZXIgZXh0ZW5kcyBTdG9yYWdlQWRhcHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnU2Vzc2lvblN0b3JhZ2VBZGFwdGVyJztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gbG9jYWxJbmZvLnN1cHBvcnRzU2Vzc2lvblN0b3JhZ2U7XG4gICAgfVxufVxuY2xhc3MgRmlyZWZveFN0b3JhZ2VBZGFwdGVyIGV4dGVuZHMgQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIGlzQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gbG9jYWxJbmZvLmlzRkYgJiYgd2luZG93WydnbG9iYWxTdG9yYWdlJ107XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ0ZpcmVmb3hTdG9yYWdlQWRhcHRlcic7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gd2luZG93WydnbG9iYWxTdG9yYWdlJ11bbG9jYXRpb24uaG9zdG5hbWVdW2tleV07XG4gICAgfVxuXG4gICAgcHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZXNJbj86IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgd2luZG93WydnbG9iYWxTdG9yYWdlJ11bbG9jYXRpb24uaG9zdG5hbWVdW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHt9XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgZGVsZXRlIHdpbmRvd1snZ2xvYmFsU3RvcmFnZSddW2xvY2F0aW9uLmhvc3RuYW1lXVtrZXldO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb29raWVTdG9yYWdlQWRhcHRlciBleHRlbmRzIEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlciB7XG4gICAgcHVibGljIHN0YXRpYyBpc0F2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGNvb2tpZVV0aWxzLmNhblNhdmVDb29raWUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnQ29va2llU3RvcmFnZUFkYXB0ZXInO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGNvb2tpZVV0aWxzLmdldChrZXkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzSW4/OiBudW1iZXIsIGRvbWFpbj86IHN0cmluZywgYWRkaXRpb25hbFBhcmFtczoge2RvbnRVc2VSb290UGF0aD86IGJvb2xlYW4sIHNhbWVTaXRlPzogU2FtZVNpdGV9ID0ge30pOiB2b2lkIHtcbiAgICAgICAgY29va2llVXRpbHMuc2V0KGtleSwgdmFsdWUsIGV4cGlyZXNJbiwgZG9tYWluLCBhZGRpdGlvbmFsUGFyYW1zLmRvbnRVc2VSb290UGF0aCwgYWRkaXRpb25hbFBhcmFtcy5zYW1lU2l0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgY29va2llVXRpbHMucmVtb3ZlKGtleSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1lbW9yeVN0b3JhZ2VBZGFwdGVyIGV4dGVuZHMgQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIGlzQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWVtb3J5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubWVtb3J5ID0ge307XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ01lbW9yeVN0b3JhZ2VBZGFwdGVyJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lbW9yeVtrZXldO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzSW4/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tZW1vcnlba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLm1lbW9yeVtrZXldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElzIHBlcnNpc3RlbnQgc3RvcmFnZS4gUmV0dXJucyBmYWxzZSB3aGVuIGRhdGEgaXMgbm90IHBlcnNpc3RlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNQZXJzaXN0ZW50KCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGFkYXB0ZXJzOiBBcnJheTxhbnk+ID0gW1xuICAgIExvY2FsU3RvcmFnZUFkYXB0ZXIsXG4gICAgU2Vzc2lvblN0b3JhZ2VBZGFwdGVyLFxuICAgIEZpcmVmb3hTdG9yYWdlQWRhcHRlcixcbiAgICBDb29raWVTdG9yYWdlQWRhcHRlcixcbiAgICBNZW1vcnlTdG9yYWdlQWRhcHRlcixcbl07XG5leHBvcnQgY29uc3QgaW5zdGFuY2VzOiB7IFtrZXk6IHN0cmluZ106IEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlciB9ID0ge307XG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFkYXB0ZXIoYWRhcHRlcjogeyBuYW1lPzogc3RyaW5nOyBnZXROYW1lOiAoKSA9PiBzdHJpbmcgfSAmIChuZXcgKCkgPT4gQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyKSkge1xuICAgIGNvbnN0IGFkYXB0ZXJOYW1lID0gYWRhcHRlci5nZXROYW1lKCkgfHwgYWRhcHRlci5uYW1lO1xuICAgIGlmICghaW5zdGFuY2VzW2FkYXB0ZXJOYW1lXSkge1xuICAgICAgICBpbnN0YW5jZXNbYWRhcHRlck5hbWVdID0gbmV3IGFkYXB0ZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIGluc3RhbmNlc1thZGFwdGVyTmFtZV07XG59XG5leHBvcnQgZnVuY3Rpb24gd2FpdEZvclNlcnZpY2UoKTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyO1xuZXhwb3J0IGZ1bmN0aW9uIHdhaXRGb3JTZXJ2aWNlKGNhbGxiYWNrOiAoc3RvcmFnZTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyKSA9PiB2b2lkKTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyO1xuZXhwb3J0IGZ1bmN0aW9uIHdhaXRGb3JTZXJ2aWNlKGNhbGxiYWNrPzogKHN0b3JhZ2U6IEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlcikgPT4gdm9pZCk6IEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlciB7XG4gICAgLy8gU2VsZWN0IGNvbXBhdGlibGUgYWRhcHRlci5cbiAgICBsZXQgc3RvcmFnZTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyO1xuICAgIGZvciAoY29uc3QgYWRhcHRlciBvZiBhZGFwdGVycykge1xuICAgICAgICBpZiAoYWRhcHRlci5pc0F2YWlsYWJsZSgpKSB7XG4gICAgICAgICAgICAvLyBEb24ndCBzZWxlY3QgYWRhcHRlciBpZiBpdCdzIGFzeW5jIGFuZCBhIGNhbGxiYWNrIHdhc24ndCBwcm92aWRlZC5cbiAgICAgICAgICAgIGlmIChhZGFwdGVyLnByb3RvdHlwZSBpbnN0YW5jZW9mIEFic3RyYWN0QXN5bmNMb2NhbFN0b3JhZ2VBZGFwdGVyICYmICFjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdG9yYWdlID0gaW5pdGlhbGl6ZUFkYXB0ZXIoYWRhcHRlcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIHRvIG1lbW9yeS1iYXNlZCBub24tcGVyc2lzdGVudCBzdG9yYWdlLlxuICAgIGlmICghc3RvcmFnZSkge1xuICAgICAgICBzdG9yYWdlID0gaW5pdGlhbGl6ZUFkYXB0ZXIoTWVtb3J5U3RvcmFnZUFkYXB0ZXIpO1xuICAgIH1cblxuICAgIC8vIFRyaWdnZXIgY2FsbGJhY2sgd2hlbiBhZGFwdGVyIGZpbmlzaGVzIGxvYWRpbmcgKG9yIGluc3RhbnRseSwgaWYgbm90IHJlcXVpcmVkIHRvIHdhaXQpLlxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBpZiAoc3RvcmFnZSBpbnN0YW5jZW9mIEFic3RyYWN0QXN5bmNMb2NhbFN0b3JhZ2VBZGFwdGVyKSB7XG4gICAgICAgICAgICBzdG9yYWdlLndhaXRGb3JTZXJ2aWNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhzdG9yYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soc3RvcmFnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0b3JhZ2U7XG59XG5jb25zdCBhZGFwdGVyID0gd2FpdEZvclNlcnZpY2UoKTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYWRhcHRlci5nZXRJdGVtKGtleSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXhwaXJlc0luPzogbnVtYmVyKTogdm9pZCB7XG4gICAgcmV0dXJuIGFkYXB0ZXIuc2V0SXRlbShrZXksIHZhbHVlLCBleHBpcmVzSW4pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXR1cm4gYWRhcHRlci5yZW1vdmVJdGVtKGtleSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0T2JqZWN0KGtleTogc3RyaW5nLCBvOiBPYmplY3QpOiB2b2lkIHtcbiAgICByZXR1cm4gYWRhcHRlci5zZXRPYmplY3Qoa2V5LCBvKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRPYmplY3Qoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSk6IE9iamVjdCB7XG4gICAgcmV0dXJuIGFkYXB0ZXIuZ2V0T2JqZWN0KGtleSwgZGVmYXVsdFZhbHVlKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
