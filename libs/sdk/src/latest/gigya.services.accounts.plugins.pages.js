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
    (__webpack_require__.s =
      './src/accounts/Gigya.Js.Plugin.Pages/app/index.ts')
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

    /***/ './src/accounts/Gigya.Js.Plugin.Pages/app/PagesPlugin.ts':
      /*!***************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Pages/app/PagesPlugin.ts ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var PluginStyles_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/PluginStyles */ './src/core/Gigya.Js.Plugin/app/PluginStyles.ts'
        );
        var IBaseObjectConfig_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/BaseObject/IBaseObjectConfig */ './src/core/Gigya.Js/app/BaseObject/IBaseObjectConfig.ts'
        );
        var GoogleAnalytics_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/GoogleAnalytics/GoogleAnalytics */ './src/core/Gigya.Js/app/GoogleAnalytics/GoogleAnalytics.ts'
        );
        var consts_1 = __webpack_require__(
          /*! ./types/consts */ './src/accounts/Gigya.Js.Plugin.Pages/app/types/consts.ts'
        );
        var HostedPageAnalytics_1 = __webpack_require__(
          /*! ./utils/Analytics/HostedPageAnalytics */ './src/accounts/Gigya.Js.Plugin.Pages/app/utils/Analytics/HostedPageAnalytics.ts'
        );
        var BasePluginGlobal = window.gigya._.plugins.BasePlugin;
        var PagesPlugin = /** @class */ (function (_super) {
          tslib_1.__extends(PagesPlugin, _super);
          function PagesPlugin() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          PagesPlugin.injectionInfo = function () {
            return {
              name: 'pages',
              namespace: 'accounts',
              methodName: 'initHostedPage',
              jsName: 'gigya.services.accounts.plugins.pages',
            };
          };
          PagesPlugin.prototype.getConfig = function () {
            return {
              requiredParams: ['type', 'screenSet', 'containerID'],
              defaultParams: {
                type: consts_1.PageType.Login,
                screenSet: '',
                containerID: '',
              },
              defaultDeviceType: IBaseObjectConfig_1.DeviceTypes.auto,
              hasMobileUI: false,
              allowModal: true,
              disableModalContainerInit: true,
              defaultDialogStyle: PluginStyles_1.PluginStyle.modern,
              supportsResponsive: true,
            };
          };
          PagesPlugin.prototype.init = function (callback) {
            var _a;
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              var googleAnalyticsConfig, Page;
              return tslib_1.__generator(this, function (_b) {
                googleAnalyticsConfig = (
                  (_a = this.params) !== null && _a !== void 0 ? _a : {}
                ).googleAnalyticsConfig;
                if (
                  (googleAnalyticsConfig === null ||
                  googleAnalyticsConfig === void 0
                    ? void 0
                    : googleAnalyticsConfig.isActive) === 'true'
                ) {
                  this.initGAnalytics(googleAnalyticsConfig);
                }
                Page = PagesPlugin.getPageImplementation(this.params.type);
                new Page(this.params).start(callback);
                return [2 /*return*/];
              });
            });
          };
          PagesPlugin.addPageToLibrary = function (type, page) {
            PagesPlugin.PageLibrary[type] = page;
          };
          PagesPlugin.getPageImplementation = function (type) {
            if (type === consts_1.PageType.Login) {
              return PagesPlugin.PageLibrary[PagesPlugin.getLoginType()];
            }
            return (
              PagesPlugin.PageLibrary[type] ||
              PagesPlugin.PageLibrary[consts_1.PageType.Generic]
            );
          };
          PagesPlugin.getLoginType = function () {
            var urlParams = window.gigya.utils.URL.getParamsFromURL(
              document.location.href
            );
            if (urlParams['gig_ssoToken']) {
              return consts_1.LoginType.SSO;
            }
            if (urlParams['samlContext']) {
              return consts_1.LoginType.SAML;
            }
            if (urlParams['context']) {
              return consts_1.LoginType.OIDC;
            }
            return consts_1.LoginType.SiteLogin;
          };
          PagesPlugin.prototype.initGAnalytics = function (
            googleAnalyticsConfig
          ) {
            var pageAnalyticsConfig =
              new HostedPageAnalytics_1.HostedPageAnalytics(
                googleAnalyticsConfig,
                window.gigya
              );
            new GoogleAnalytics_1.GoogleAnalytics(googleAnalyticsConfig, [
              pageAnalyticsConfig,
            ]).start();
          };
          PagesPlugin.PageLibrary = new Map();
          return PagesPlugin;
        })(BasePluginGlobal);
        exports.PagesPlugin = PagesPlugin;

        /***/
      },

    /***/ './src/accounts/Gigya.Js.Plugin.Pages/app/index.ts':
      /*!*********************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Pages/app/index.ts ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function (
          __webpack_provided_Object_dot_assign
        ) {
          Object.defineProperty(exports, '__esModule', { value: true });
          var PagesPlugin_1 = __webpack_require__(
            /*! src/accounts/Gigya.Js.Plugin.Pages/app/PagesPlugin */ './src/accounts/Gigya.Js.Plugin.Pages/app/PagesPlugin.ts'
          );
          __webpack_require__(
            /*! src/accounts/Gigya.Js.Plugin.Pages/app/pages/GenericPage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/GenericPage.ts'
          );
          __webpack_require__(
            /*! src/accounts/Gigya.Js.Plugin.Pages/app/pages/SiteLoginPage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/SiteLoginPage.ts'
          );
          __webpack_require__(
            /*! src/accounts/Gigya.Js.Plugin.Pages/app/pages/SSOLoginPage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/SSOLoginPage.ts'
          );
          __webpack_require__(
            /*! src/accounts/Gigya.Js.Plugin.Pages/app/pages/SAMLLoginPage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/SAMLLoginPage.ts'
          );
          __webpack_require__(
            /*! src/accounts/Gigya.Js.Plugin.Pages/app/pages/OIDCLoginPage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/OIDCLoginPage.ts'
          );
          __webpack_require__(
            /*! src/accounts/Gigya.Js.Plugin.Pages/app/pages/ProfileUpdatePage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/ProfileUpdatePage.ts'
          );
          __webpack_require__(
            /*! src/accounts/Gigya.Js.Plugin.Pages/app/pages/ResetPasswordPage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/ResetPasswordPage.ts'
          );
          __webpack_require__(
            /*! src/accounts/Gigya.Js.Plugin.Pages/app/pages/DeviceRegistrationPage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/DeviceRegistrationPage.ts'
          );
          if (!window.gigya._) {
            window.gigya._ = {};
          }
          if (!window.gigya._.plugins) {
            window.gigya._.plugins = {};
          }
          if (!window.gigya._.plugins.Pages) {
            window.gigya._.plugins.Pages = {};
          }
          __webpack_provided_Object_dot_assign(window.gigya._.plugins.Pages, {
            PagesPlugin: PagesPlugin_1.PagesPlugin,
          });
          var PagesPlugin_2 = __webpack_require__(
            /*! ./PagesPlugin */ './src/accounts/Gigya.Js.Plugin.Pages/app/PagesPlugin.ts'
          );
          exports.IPagesParams = PagesPlugin_2.IPagesParams;
          exports.IPage = PagesPlugin_2.IPage;
          var consts_1 = __webpack_require__(
            /*! ./types/consts */ './src/accounts/Gigya.Js.Plugin.Pages/app/types/consts.ts'
          );
          exports.PageType = consts_1.PageType;
          var pages_1 = __webpack_require__(
            /*! ./pages */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/index.ts'
          );
          exports.GenericPage = pages_1.GenericPage;
          exports.SiteLoginPage = pages_1.SiteLoginPage;
          exports.SSOLoginPage = pages_1.SSOLoginPage;
          exports.SAMLLoginPage = pages_1.SAMLLoginPage;
          exports.OIDCLoginPage = pages_1.OIDCLoginPage;
          exports.ProfileUpdatePage = pages_1.ProfileUpdatePage;
          exports.ResetPasswordPage = pages_1.ResetPasswordPage;
          exports.DeviceRegistrationPage = pages_1.DeviceRegistrationPage;
          exports.RequireSessionPage = pages_1.RequireSessionPage;
          exports.BasePage = pages_1.BasePage;
          exports.pages = function () {
            return window.gigya._.plugins.Pages;
          };
          exports.default = PagesPlugin_1.PagesPlugin;

          /* WEBPACK VAR INJECTION */
        }).call(
          this,
          __webpack_require__(
            /*! tslib */ '../node_modules/tslib/tslib.es6.js'
          )['__assign']
        );

        /***/
      },

    /***/ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/BasePage.ts':
      /*!******************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Pages/app/pages/BasePage.ts ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var temlates_1 = __webpack_require__(
          /*! ../types/temlates */ './src/accounts/Gigya.Js.Plugin.Pages/app/types/temlates.ts'
        );
        var GSErrors = window.gigya.GSErrors;
        var domain_1 = __webpack_require__(
          /*! ../utils/domain */ './src/accounts/Gigya.Js.Plugin.Pages/app/utils/domain.ts'
        );
        var Flow_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/Flow/Flow */ './src/core/Gigya.Js/app/Flow/Flow.ts'
        );
        var object_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/object */ './src/core/Gigya.Js/app/Utils/object.ts'
        );
        var BasePage = /** @class */ (function () {
          function BasePage(params) {
            this.params = params;
          }
          BasePage.prototype.showPageScreenSet = function (params, callback) {
            var _this = this;
            var _a = this.params,
              startScreen = _a.startScreen,
              screenSet = _a.screenSet;
            this.addHostedPagesEventsListeners();
            var showScreenSetParams = tslib_1.__assign(
              tslib_1.__assign(
                tslib_1.__assign(
                  { startScreen: startScreen, screenSet: screenSet },
                  this.getBasicScreenSetParams()
                ),
                params
              ),
              {
                callback: function (res) {
                  if (res.errorCode !== GSErrors.OK) {
                    _this.showError(res.errorMessage);
                  }
                  callback(res.errorCode === 0);
                },
              }
            );
            window.gigya.accounts.showScreenSet(
              tslib_1.__assign({}, showScreenSetParams)
            );
          };
          BasePage.prototype.getBasicScreenSetParams = function () {
            var _a;
            var paramsFromURL = window.gigya.utils.URL.getParamsFromURL(
              window.location.href
            );
            return object_1.removeUndefined({
              containerID:
                (_a = this.params) === null || _a === void 0
                  ? void 0
                  : _a.containerID,
              lang: paramsFromURL['lang'],
            });
          };
          BasePage.prototype.redirectToRedirectUri = function () {
            var urlParam = window.gigya.getUrlParam('redirectURI');
            if (urlParam) {
              var redirectURI = decodeURIComponent(urlParam);
              if (domain_1.isTrustedDomain(redirectURI)) {
                this.redirect(redirectURI);
              } else {
                this.showError('Invalid redirect URI');
              }
            }
          };
          BasePage.prototype.showError = function (message) {
            if (this.params.errorUri) {
              this.redirect(this.params.errorUri);
            } else {
              var _a = this.params,
                screenSet = _a.screenSet,
                containerID = _a.containerID;
              var container = document.querySelector('#' + containerID);
              if (container) {
                window.gigya.accounts.hideScreenSet({
                  screenSet: screenSet,
                  containerID: containerID,
                });
                container.innerHTML = window.gigya.utils.templates.fill(
                  temlates_1.errorMessageTemplate,
                  { message: message }
                );
              }
            }
          };
          BasePage.prototype.onSuccess = function (event) {};
          BasePage.prototype.onError = function (event) {};
          BasePage.prototype.onLogin = function (event) {};
          BasePage.prototype.onLogout = function (event) {};
          BasePage.prototype.redirect = function (path) {
            if (path) {
              window.location.href = path;
            }
          };
          BasePage.prototype.onAfterLogin = function (event) {
            var _a, _b, _c;
            if (
              (_c =
                (_b =
                  (_a = this.params) === null || _a === void 0
                    ? void 0
                    : _a.identityFlowsConfig) === null || _b === void 0
                  ? void 0
                  : _b.selectedFlow) === null || _c === void 0
                ? void 0
                : _c.id
            ) {
              var flowId = this.params.identityFlowsConfig.selectedFlow.id;
              var screenSetParams = this.getBasicScreenSetParams();
              var loginHandler = this.onLogin.bind(this, event); // Bind the function to the BasePage instance
              var flow = new Flow_1.Flow(
                flowId,
                { screenSetParams: screenSetParams },
                loginHandler
              );
              flow.execute();
            } else {
              this.onLogin(event);
            }
          };
          BasePage.prototype.onAfterSubmit = function (event) {
            var _a;
            if (
              ((_a =
                event === null || event === void 0
                  ? void 0
                  : event.response) === null || _a === void 0
                ? void 0
                : _a.errorCode) === GSErrors.OK
            ) {
              this.onSuccess(event);
            } else {
              this.onError(event);
            }
          };
          BasePage.prototype.addHostedPagesEventsListeners = function () {
            var _this = this;
            var _a;
            var config = {
              id: 'hosted-pages-events-listeners',
              defaultMethod: function (event) {},
              eventMap: [
                {
                  events: 'afterSubmit',
                  args: [
                    function (e) {
                      return e;
                    },
                  ],
                  method: function (event) {
                    _this.onAfterSubmit(event);
                  },
                },
              ],
            };
            (_a = window.gigya.defaultEventMaps) === null || _a === void 0
              ? void 0
              : _a.push(config);
            window.gigya.accounts.addEventHandlers({
              onLogin: function (e) {
                return _this.onAfterLogin(e);
              },
              onLogout: function (e) {
                return _this.onLogout(e);
              },
            });
          };
          return BasePage;
        })();
        exports.BasePage = BasePage;

        /***/
      },

    /***/ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/DeviceRegistrationPage.ts':
      /*!********************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Pages/app/pages/DeviceRegistrationPage.ts ***!
  \********************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var PagesPlugin_1 = __webpack_require__(
          /*! ../PagesPlugin */ './src/accounts/Gigya.Js.Plugin.Pages/app/PagesPlugin.ts'
        );
        var consts_1 = __webpack_require__(
          /*! ../types/consts */ './src/accounts/Gigya.Js.Plugin.Pages/app/types/consts.ts'
        );
        var RequireSessionPage_1 = __webpack_require__(
          /*! ./RequireSessionPage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/RequireSessionPage.ts'
        );
        var DeviceRegistrationPage = /** @class */ (function (_super) {
          tslib_1.__extends(DeviceRegistrationPage, _super);
          function DeviceRegistrationPage(params) {
            return _super.call(this, params) || this;
          }
          return DeviceRegistrationPage;
        })(RequireSessionPage_1.RequireSessionPage);
        exports.DeviceRegistrationPage = DeviceRegistrationPage;
        PagesPlugin_1.PagesPlugin.addPageToLibrary(
          consts_1.PageType.DeviceRegistration,
          DeviceRegistrationPage
        );

        /***/
      },

    /***/ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/GenericPage.ts':
      /*!*********************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Pages/app/pages/GenericPage.ts ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var BasePage_1 = __webpack_require__(
          /*! ./BasePage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/BasePage.ts'
        );
        var PagesPlugin_1 = __webpack_require__(
          /*! ../PagesPlugin */ './src/accounts/Gigya.Js.Plugin.Pages/app/PagesPlugin.ts'
        );
        var consts_1 = __webpack_require__(
          /*! ../types/consts */ './src/accounts/Gigya.Js.Plugin.Pages/app/types/consts.ts'
        );
        var GenericPage = /** @class */ (function (_super) {
          tslib_1.__extends(GenericPage, _super);
          function GenericPage(params) {
            return _super.call(this, params) || this;
          }
          GenericPage.prototype.start = function (callback) {
            this.showPageScreenSet({}, callback);
          };
          GenericPage.prototype.redirectToLoginPage = function (withReturnUrl) {
            if (withReturnUrl === void 0) {
              withReturnUrl = false;
            }
            if (this.params.loginUri) {
              var url =
                this.params.loginUri +
                (withReturnUrl
                  ? '?redirectURI=' + encodeURIComponent(this.currentLocation)
                  : '');
              this.redirect(url);
            } else {
              this.showError('Missing login URI');
            }
          };
          Object.defineProperty(GenericPage.prototype, 'currentLocation', {
            get: function () {
              return window.location.href;
            },
            enumerable: true,
            configurable: true,
          });
          GenericPage.prototype.onSuccess = function (event) {
            this.redirectToRedirectUri();
          };
          return GenericPage;
        })(BasePage_1.BasePage);
        exports.GenericPage = GenericPage;
        PagesPlugin_1.PagesPlugin.addPageToLibrary(
          consts_1.PageType.Generic,
          GenericPage
        );

        /***/
      },

    /***/ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/OIDCLoginPage.ts':
      /*!***********************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Pages/app/pages/OIDCLoginPage.ts ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var BasePage_1 = __webpack_require__(
          /*! ./BasePage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/BasePage.ts'
        );
        var PagesPlugin_1 = __webpack_require__(
          /*! ../PagesPlugin */ './src/accounts/Gigya.Js.Plugin.Pages/app/PagesPlugin.ts'
        );
        var consts_1 = __webpack_require__(
          /*! ../types/consts */ './src/accounts/Gigya.Js.Plugin.Pages/app/types/consts.ts'
        );
        var OIDCLoginPage = /** @class */ (function (_super) {
          tslib_1.__extends(OIDCLoginPage, _super);
          function OIDCLoginPage(params) {
            return _super.call(this, params) || this;
          }
          OIDCLoginPage.prototype.start = function (callback) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              var mode, _a, queryParams;
              return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                  case 0:
                    mode = window.gigya.getUrlParam('mode');
                    _a = mode;
                    switch (_a) {
                      case 'forceLogin':
                        return [3 /*break*/, 1];
                      case 'login':
                        return [3 /*break*/, 3];
                      case 'passiveLogin':
                        return [3 /*break*/, 3];
                      case 'afterConsent':
                        return [3 /*break*/, 4];
                      case 'error':
                        return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 6];
                  case 1:
                    return [
                      4 /*yield*/,
                      window.gigya._.apiAdapters.web.tokenStore.remove(),
                    ];
                  case 2:
                    _b.sent();
                    _b.label = 3;
                  case 3:
                    this.oidcLogin(callback);
                    return [3 /*break*/, 6];
                  case 4:
                    // need to handle consent in the feature...
                    return [3 /*break*/, 6];
                  case 5:
                    queryParams = new URLSearchParams(window.location.search);
                    this.showError(queryParams.get('errorMessage'));
                    return [3 /*break*/, 6];
                  case 6:
                    return [2 /*return*/];
                }
              });
            });
          };
          OIDCLoginPage.prototype.onLogin = function (event) {
            this.oidcContinue();
          };
          OIDCLoginPage.prototype.oidcLogin = function (callback) {
            var _this = this;
            window.gigya.hasSession().then(function (sessionExist) {
              if (sessionExist) {
                _this.oidcContinue();
                callback(true);
              } else {
                _this.showPageScreenSet({}, callback);
              }
            });
          };
          OIDCLoginPage.prototype.oidcContinue = function () {
            var context = window.gigya.getUrlParam('context');
            var loginToken = window.gigya._.apiAdapters.web.tokenStore.get();
            window.gigya.fidm.oidc.op.redirectToContinue({
              opKey: window.gigya.apiKey,
              context: context,
              login_token: loginToken,
            });
          };
          return OIDCLoginPage;
        })(BasePage_1.BasePage);
        exports.OIDCLoginPage = OIDCLoginPage;
        PagesPlugin_1.PagesPlugin.addPageToLibrary(
          consts_1.LoginType.OIDC,
          OIDCLoginPage
        );

        /***/
      },

    /***/ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/ProfileUpdatePage.ts':
      /*!***************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Pages/app/pages/ProfileUpdatePage.ts ***!
  \***************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var PagesPlugin_1 = __webpack_require__(
          /*! ../PagesPlugin */ './src/accounts/Gigya.Js.Plugin.Pages/app/PagesPlugin.ts'
        );
        var consts_1 = __webpack_require__(
          /*! ../types/consts */ './src/accounts/Gigya.Js.Plugin.Pages/app/types/consts.ts'
        );
        var RequireSessionPage_1 = __webpack_require__(
          /*! ./RequireSessionPage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/RequireSessionPage.ts'
        );
        var ProfileUpdatePage = /** @class */ (function (_super) {
          tslib_1.__extends(ProfileUpdatePage, _super);
          function ProfileUpdatePage(params) {
            return _super.call(this, params) || this;
          }
          return ProfileUpdatePage;
        })(RequireSessionPage_1.RequireSessionPage);
        exports.ProfileUpdatePage = ProfileUpdatePage;
        PagesPlugin_1.PagesPlugin.addPageToLibrary(
          consts_1.PageType.ProfileUpdate,
          ProfileUpdatePage
        );

        /***/
      },

    /***/ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/RequireSessionPage.ts':
      /*!****************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Pages/app/pages/RequireSessionPage.ts ***!
  \****************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var GenericPage_1 = __webpack_require__(
          /*! ./GenericPage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/GenericPage.ts'
        );
        var RequireSessionPage = /** @class */ (function (_super) {
          tslib_1.__extends(RequireSessionPage, _super);
          function RequireSessionPage(params) {
            return _super.call(this, params) || this;
          }
          RequireSessionPage.prototype.start = function (callback) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              var _this = this;
              return tslib_1.__generator(this, function (_a) {
                window.gigya.hasSession().then(function (sessionExist) {
                  if (sessionExist) {
                    _this.showPageScreenSet({}, callback);
                  } else {
                    _this.redirectToLoginPage(true);
                  }
                });
                return [2 /*return*/];
              });
            });
          };
          RequireSessionPage.prototype.onLogout = function (event) {
            this.redirectToLoginPage(true);
          };
          return RequireSessionPage;
        })(GenericPage_1.GenericPage);
        exports.RequireSessionPage = RequireSessionPage;

        /***/
      },

    /***/ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/ResetPasswordPage.ts':
      /*!***************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Pages/app/pages/ResetPasswordPage.ts ***!
  \***************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var PagesPlugin_1 = __webpack_require__(
          /*! ../PagesPlugin */ './src/accounts/Gigya.Js.Plugin.Pages/app/PagesPlugin.ts'
        );
        var GenericPage_1 = __webpack_require__(
          /*! ./GenericPage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/GenericPage.ts'
        );
        var consts_1 = __webpack_require__(
          /*! ../types/consts */ './src/accounts/Gigya.Js.Plugin.Pages/app/types/consts.ts'
        );
        var ResetPasswordPage = /** @class */ (function (_super) {
          tslib_1.__extends(ResetPasswordPage, _super);
          function ResetPasswordPage(params) {
            return _super.call(this, params) || this;
          }
          ResetPasswordPage.prototype.start = function (callback) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              var pwrt;
              return tslib_1.__generator(this, function (_a) {
                pwrt = window.gigya.getUrlParam('pwrt');
                if (!pwrt) {
                  this.showError('Missing required parameter');
                } else {
                  this.showPageScreenSet({}, callback);
                }
                return [2 /*return*/];
              });
            });
          };
          return ResetPasswordPage;
        })(GenericPage_1.GenericPage);
        exports.ResetPasswordPage = ResetPasswordPage;
        PagesPlugin_1.PagesPlugin.addPageToLibrary(
          consts_1.PageType.ResetPassword,
          ResetPasswordPage
        );

        /***/
      },

    /***/ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/SAMLLoginPage.ts':
      /*!***********************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Pages/app/pages/SAMLLoginPage.ts ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var BasePage_1 = __webpack_require__(
          /*! ./BasePage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/BasePage.ts'
        );
        var PagesPlugin_1 = __webpack_require__(
          /*! ../PagesPlugin */ './src/accounts/Gigya.Js.Plugin.Pages/app/PagesPlugin.ts'
        );
        var consts_1 = __webpack_require__(
          /*! ../types/consts */ './src/accounts/Gigya.Js.Plugin.Pages/app/types/consts.ts'
        );
        var SAMLLoginPage = /** @class */ (function (_super) {
          tslib_1.__extends(SAMLLoginPage, _super);
          function SAMLLoginPage(params) {
            return _super.call(this, params) || this;
          }
          SAMLLoginPage.prototype.start = function (callback) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              var mode, _a, cancelParams;
              return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                  case 0:
                    mode = window.gigya.getUrlParam('mode');
                    _a = mode;
                    switch (_a) {
                      case 'login':
                        return [3 /*break*/, 1];
                      case 'passiveLogin':
                        return [3 /*break*/, 1];
                      case 'afterLogin':
                        return [3 /*break*/, 2];
                      case 'forceLogin':
                        return [3 /*break*/, 3];
                      case 'cancel':
                        return [3 /*break*/, 5];
                      case 'logout':
                        return [3 /*break*/, 6];
                    }
                    return [3 /*break*/, 7];
                  case 1:
                    this.samlLogin(callback);
                    return [3 /*break*/, 7];
                  case 2:
                    this.samlContinue();
                    return [3 /*break*/, 7];
                  case 3:
                    return [
                      4 /*yield*/,
                      window.gigya._.apiAdapters.web.tokenStore.remove(),
                    ];
                  case 4:
                    _b.sent();
                    this.showPageScreenSet({}, callback);
                    return [3 /*break*/, 7];
                  case 5:
                    cancelParams = {
                      cancelCode:
                        window.gigya.getUrlParam('cancelCode') || null,
                      statusCode:
                        window.gigya.getUrlParam('statusCode') || null,
                    };
                    window.gigya.fidm.saml.cancelSSO(cancelParams, false);
                    return [3 /*break*/, 7];
                  case 6:
                    window.gigya.fidm.saml.logoutSSO({}, false);
                    return [3 /*break*/, 7];
                  case 7:
                    return [2 /*return*/];
                }
              });
            });
          };
          SAMLLoginPage.prototype.onLogin = function (event) {
            this.samlContinue();
          };
          SAMLLoginPage.prototype.samlLogin = function (callback) {
            var _this = this;
            window.gigya.hasSession().then(function (sessionExist) {
              if (sessionExist) {
                _this.samlContinue();
                callback(true);
              } else {
                _this.showPageScreenSet({}, callback);
              }
            });
          };
          SAMLLoginPage.prototype.samlContinue = function () {
            window.gigya.fidm.saml.continueSSO({}, false);
          };
          return SAMLLoginPage;
        })(BasePage_1.BasePage);
        exports.SAMLLoginPage = SAMLLoginPage;
        PagesPlugin_1.PagesPlugin.addPageToLibrary(
          consts_1.LoginType.SAML,
          SAMLLoginPage
        );

        /***/
      },

    /***/ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/SSOLoginPage.ts':
      /*!**********************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Pages/app/pages/SSOLoginPage.ts ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var BasePage_1 = __webpack_require__(
          /*! ./BasePage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/BasePage.ts'
        );
        var PagesPlugin_1 = __webpack_require__(
          /*! ../PagesPlugin */ './src/accounts/Gigya.Js.Plugin.Pages/app/PagesPlugin.ts'
        );
        var consts_1 = __webpack_require__(
          /*! ../types/consts */ './src/accounts/Gigya.Js.Plugin.Pages/app/types/consts.ts'
        );
        var SSOLoginPage = /** @class */ (function (_super) {
          tslib_1.__extends(SSOLoginPage, _super);
          function SSOLoginPage(params) {
            return _super.call(this, params) || this;
          }
          SSOLoginPage.prototype.start = function (callback) {
            var _this = this;
            window.gigya.hasSession().then(function (sessionExist) {
              if (sessionExist) {
                window.gigya.sso.continue();
                callback(true);
              } else {
                var gigParams = window.gigya.utils.URL.getGigParamsFromURL({
                  url: document.location.href,
                  removePrefix: true,
                });
                delete gigParams['ssoToken'];
                _this.showPageScreenSet(gigParams, callback);
              }
            });
          };
          SSOLoginPage.prototype.onLogin = function (event) {
            window.gigya.sso.continue();
          };
          return SSOLoginPage;
        })(BasePage_1.BasePage);
        exports.SSOLoginPage = SSOLoginPage;
        PagesPlugin_1.PagesPlugin.addPageToLibrary(
          consts_1.LoginType.SSO,
          SSOLoginPage
        );

        /***/
      },

    /***/ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/SiteLoginPage.ts':
      /*!***********************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Pages/app/pages/SiteLoginPage.ts ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var PagesPlugin_1 = __webpack_require__(
          /*! ../PagesPlugin */ './src/accounts/Gigya.Js.Plugin.Pages/app/PagesPlugin.ts'
        );
        var consts_1 = __webpack_require__(
          /*! ../types/consts */ './src/accounts/Gigya.Js.Plugin.Pages/app/types/consts.ts'
        );
        var BasePage_1 = __webpack_require__(
          /*! ./BasePage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/BasePage.ts'
        );
        var SiteLoginPage = /** @class */ (function (_super) {
          tslib_1.__extends(SiteLoginPage, _super);
          function SiteLoginPage(params) {
            return _super.call(this, params) || this;
          }
          SiteLoginPage.prototype.start = function (callback) {
            this.showPageScreenSet({}, callback);
          };
          SiteLoginPage.prototype.onLogin = function (event) {
            this.redirectToRedirectUri();
          };
          return SiteLoginPage;
        })(BasePage_1.BasePage);
        exports.SiteLoginPage = SiteLoginPage;
        PagesPlugin_1.PagesPlugin.addPageToLibrary(
          consts_1.LoginType.SiteLogin,
          SiteLoginPage
        );

        /***/
      },

    /***/ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/index.ts':
      /*!***************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Pages/app/pages/index.ts ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var BasePage_1 = __webpack_require__(
          /*! ./BasePage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/BasePage.ts'
        );
        exports.BasePage = BasePage_1.BasePage;
        var GenericPage_1 = __webpack_require__(
          /*! ./GenericPage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/GenericPage.ts'
        );
        exports.GenericPage = GenericPage_1.GenericPage;
        var RequireSessionPage_1 = __webpack_require__(
          /*! ./RequireSessionPage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/RequireSessionPage.ts'
        );
        exports.RequireSessionPage = RequireSessionPage_1.RequireSessionPage;
        var DeviceRegistrationPage_1 = __webpack_require__(
          /*! ./DeviceRegistrationPage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/DeviceRegistrationPage.ts'
        );
        exports.DeviceRegistrationPage =
          DeviceRegistrationPage_1.DeviceRegistrationPage;
        var OIDCLoginPage_1 = __webpack_require__(
          /*! ./OIDCLoginPage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/OIDCLoginPage.ts'
        );
        exports.OIDCLoginPage = OIDCLoginPage_1.OIDCLoginPage;
        var SAMLLoginPage_1 = __webpack_require__(
          /*! ./SAMLLoginPage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/SAMLLoginPage.ts'
        );
        exports.SAMLLoginPage = SAMLLoginPage_1.SAMLLoginPage;
        var SiteLoginPage_1 = __webpack_require__(
          /*! ./SiteLoginPage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/SiteLoginPage.ts'
        );
        exports.SiteLoginPage = SiteLoginPage_1.SiteLoginPage;
        var SSOLoginPage_1 = __webpack_require__(
          /*! ./SSOLoginPage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/SSOLoginPage.ts'
        );
        exports.SSOLoginPage = SSOLoginPage_1.SSOLoginPage;
        var ProfileUpdatePage_1 = __webpack_require__(
          /*! ./ProfileUpdatePage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/ProfileUpdatePage.ts'
        );
        exports.ProfileUpdatePage = ProfileUpdatePage_1.ProfileUpdatePage;
        var ResetPasswordPage_1 = __webpack_require__(
          /*! ./ResetPasswordPage */ './src/accounts/Gigya.Js.Plugin.Pages/app/pages/ResetPasswordPage.ts'
        );
        exports.ResetPasswordPage = ResetPasswordPage_1.ResetPasswordPage;

        /***/
      },

    /***/ './src/accounts/Gigya.Js.Plugin.Pages/app/types/consts.ts':
      /*!****************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Pages/app/types/consts.ts ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var PageType;
        (function (PageType) {
          PageType['Generic'] = 'generic';
          PageType['Login'] = 'login';
          PageType['ProfileUpdate'] = 'profileUpdate';
          PageType['ResetPassword'] = 'resetPassword';
          PageType['DeviceRegistration'] = 'deviceRegistration';
          PageType['Error'] = 'error';
        })((PageType = exports.PageType || (exports.PageType = {})));
        var LoginType;
        (function (LoginType) {
          LoginType['SiteLogin'] = 'siteLogin';
          LoginType['SSO'] = 'ssoLogin';
          LoginType['OIDC'] = 'oidcLogin';
          LoginType['SAML'] = 'samlLogin';
        })((LoginType = exports.LoginType || (exports.LoginType = {})));

        /***/
      },

    /***/ './src/accounts/Gigya.Js.Plugin.Pages/app/types/temlates.ts':
      /*!******************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Pages/app/types/temlates.ts ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.errorMessageTemplate =
          '\n<style>\n    .container-error{\n        width: 100%;\n        height: 41em;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n    }\n    .container-error h1 {\n        font-size: 24px;\n        font-weight: 400;\n        line-height: 32px;\n        text-align: center;\n        font-family: \'72\';\n        font-style: normal;\n        color: #32363A;\n    }\n    .container-error h2{\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 23px;\n        text-align: center;\n        font-family: \'72\';\n        font-style: normal;\n        color: #75787C;\n        margin: 0;\n    }\n    .container-error img {\n        width: 320px;\n        height:240px;\n    }\n</style>\n<div class="container-error">\n    <img src="https://static.gigya.com/hosted-pages/page-not-found.png" alt="Error">\n    <h1>Oops, Something went wrong.</h1>\n    <h2>$message</h2>\n</div>';

        /***/
      },

    /***/ './src/accounts/Gigya.Js.Plugin.Pages/app/utils/Analytics/HostedPageAnalytics.ts':
      /*!***************************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Pages/app/utils/Analytics/HostedPageAnalytics.ts ***!
  \***************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var HostedPageAnalyticsEvents_1 = __webpack_require__(
          /*! ./HostedPageAnalyticsEvents */ './src/accounts/Gigya.Js.Plugin.Pages/app/utils/Analytics/HostedPageAnalyticsEvents.ts'
        );
        var HostedPageAnalytics = /** @class */ (function () {
          function HostedPageAnalytics(config, events) {
            this.config = config;
            this.events = events;
          }
          HostedPageAnalytics.prototype.register = function (sendAnalytics) {
            var _a, _b;
            var hostedPageAnalyticsConfig = {
              id: 'hosted-page-events-analytics',
              defaultMethod: function (event) {
                var _a;
                var eventName =
                  (_a =
                    event === null || event === void 0
                      ? void 0
                      : event.fullEventName) !== null && _a !== void 0
                    ? _a
                    : event === null || event === void 0
                    ? void 0
                    : event.eventName;
                var eventTitle =
                  HostedPageAnalyticsEvents_1.GigyaEventTitleMap.get(eventName);
                var eventHandler =
                  HostedPageAnalyticsEvents_1.GigyaEventHandlersMap.get(
                    eventName
                  );
                if (!eventHandler) {
                  return;
                }
                var payload = eventHandler(event);
                sendAnalytics('event', eventTitle, payload);
              },
              eventMap: [
                {
                  events:
                    (_a = this.config) === null || _a === void 0
                      ? void 0
                      : _a.events,
                  args: [
                    function (e) {
                      return e;
                    },
                  ],
                },
              ],
            };
            (_b = this.events.defaultEventMaps) === null || _b === void 0
              ? void 0
              : _b.push(hostedPageAnalyticsConfig);
          };
          return HostedPageAnalytics;
        })();
        exports.HostedPageAnalytics = HostedPageAnalytics;

        /***/
      },

    /***/ './src/accounts/Gigya.Js.Plugin.Pages/app/utils/Analytics/HostedPageAnalyticsEvents.ts':
      /*!*********************************************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Pages/app/utils/Analytics/HostedPageAnalyticsEvents.ts ***!
  \*********************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var GigyaEvent;
        (function (GigyaEvent) {
          GigyaEvent['onLogin'] = 'login';
          GigyaEvent['onLogout'] = 'logout';
          GigyaEvent['onError'] = 'error';
          GigyaEvent['onAfterScreenLoad'] = 'afterScreenLoad';
          GigyaEvent['onAfterSubmit'] = 'afterSubmit';
          GigyaEvent['onHide'] = 'hide';
        })((GigyaEvent = exports.GigyaEvent || (exports.GigyaEvent = {})));
        exports.GigyaEventTitleMap = new Map([
          [GigyaEvent.onLogin, 'Login'],
          [GigyaEvent.onLogout, 'Logout'],
          [GigyaEvent.onError, 'Error'],
          [GigyaEvent.onAfterScreenLoad, 'Screen Load'],
          [GigyaEvent.onAfterSubmit, 'Submit'],
          [GigyaEvent.onHide, 'Hide'],
        ]);
        var loginEventHandler = function (event) {
          if (!event) {
            return;
          }
          return {
            eventName: event.eventName,
            provider: event.provider,
            loginMode: event.loginMode,
            newUser: event.newUser,
            source: event.source,
            UID: event.UID,
          };
        };
        var errorEventHandler = function (event) {
          if (!event) {
            return;
          }
          return {
            eventName: event.eventName,
            errorMessage: event.errorMessage,
            errorCode: event.errorCode,
            source: event.source,
          };
        };
        var logoutEventHandler = function (event) {
          return {
            eventName:
              event === null || event === void 0 ? void 0 : event.eventName,
          };
        };
        var screenSetEventHandler = function (event) {
          if (!event) {
            return;
          }
          return {
            eventName: event.eventName,
            screen: event.screen || event.currentScreen,
            screenSetID: event.screenSetID,
            source: event.source,
          };
        };
        var afterSubmitEventHandler = function (event) {
          var _a;
          if (!event) {
            return;
          }
          var basicPayload = screenSetEventHandler(event);
          var _b =
              (_a =
                event === null || event === void 0
                  ? void 0
                  : event.response) !== null && _a !== void 0
                ? _a
                : {},
            errorCode = _b.errorCode,
            errorDetails = _b.errorDetails,
            errorMessage = _b.errorMessage,
            operation = _b.operation;
          return tslib_1.__assign(tslib_1.__assign({}, basicPayload), {
            errorCode: errorCode,
            errorDetails: errorDetails,
            errorMessage: errorMessage,
            operation: operation,
          });
        };
        exports.GigyaEventHandlersMap = new Map([
          [GigyaEvent.onLogin, loginEventHandler],
          [GigyaEvent.onLogout, logoutEventHandler],
          [GigyaEvent.onError, errorEventHandler],
          [GigyaEvent.onAfterScreenLoad, screenSetEventHandler],
          [GigyaEvent.onAfterSubmit, afterSubmitEventHandler],
          [GigyaEvent.onHide, screenSetEventHandler],
        ]);

        /***/
      },

    /***/ './src/accounts/Gigya.Js.Plugin.Pages/app/utils/domain.ts':
      /*!****************************************************************!*\
  !*** ./src/accounts/Gigya.Js.Plugin.Pages/app/utils/domain.ts ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function isTrustedDomain(url, hostedPagesDomain) {
          if (hostedPagesDomain === void 0) {
            hostedPagesDomain = window.gigya._.config.hostedPagesDomain;
          }
          var domain = url.match(/^(?:https?:\/\/)(?:www\.)?([^:\/?]+)/);
          if (domain && domain[1]) {
            var baseDomains = window.gigya._.config.api.baseDomains;
            baseDomains = baseDomains.map(function (d) {
              return d.replace('*', '');
            });
            baseDomains.push(hostedPagesDomain);
            return (
              baseDomains.filter(function (d) {
                return window.gigya.utils.stringUtils.endsWith(domain[1], d);
              }).length > 0
            );
          }
          // if there is no match, so it's relative url
          return true;
        }
        exports.isTrustedDomain = isTrustedDomain;

        /***/
      },

    /***/ './src/accounts/constants.ts':
      /*!***********************************!*\
  !*** ./src/accounts/constants.ts ***!
  \***********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var EditableTfaProvidersTypes;
        (function (EditableTfaProvidersTypes) {
          EditableTfaProvidersTypes[
            (EditableTfaProvidersTypes['gigyaPhone'] = 0)
          ] = 'gigyaPhone';
          EditableTfaProvidersTypes[
            (EditableTfaProvidersTypes['gigyaTotp'] = 1)
          ] = 'gigyaTotp';
          EditableTfaProvidersTypes[
            (EditableTfaProvidersTypes['gigyaPush'] = 2)
          ] = 'gigyaPush';
          EditableTfaProvidersTypes[
            (EditableTfaProvidersTypes['livelink'] = 3)
          ] = 'livelink';
        })(
          (EditableTfaProvidersTypes =
            exports.EditableTfaProvidersTypes ||
            (exports.EditableTfaProvidersTypes = {}))
        );
        exports.gigyaAssertionExpiration = 60 * 5 * 1000;
        exports.sensitiveParamsOverride = 'login_token';
        exports.GIGYA_PARAM_PREFIX = 'gig_';
        exports.GIGYA_INTERNAL_PARAM_PREFIX = exports.GIGYA_PARAM_PREFIX + 'i_';
        exports.GIGYA_INTERNAL_PARAMS = exports.GIGYA_PARAM_PREFIX + 'actions';

        /***/
      },

    /***/ './src/core/ApiService/app/RequestProvider.ts':
      /*!****************************************************!*\
  !*** ./src/core/ApiService/app/RequestProvider.ts ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var RequestProvider = /** @class */ (function () {
          function RequestProvider(_xhrRequest, timeout, _win) {
            if (_xhrRequest === void 0) {
              _xhrRequest = window.gigya.XhrRequest;
            }
            if (timeout === void 0) {
              timeout = 15000;
            }
            if (_win === void 0) {
              _win = window;
            }
            this._xhrRequest = _xhrRequest;
            this.timeout = timeout;
            this._win = _win;
          }
          RequestProvider.prototype.send = function (
            baseDomain,
            methodName,
            params,
            settings,
            headers
          ) {
            if (headers === void 0) {
              headers = {};
            }
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              var _this = this;
              return tslib_1.__generator(this, function (_a) {
                return [
                  2 /*return*/,
                  new gigya.Promise(function (resolve, reject) {
                    return tslib_1.__awaiter(
                      _this,
                      void 0,
                      void 0,
                      function () {
                        var request, timeoutId, _a, err_1;
                        return tslib_1.__generator(this, function (_b) {
                          switch (_b.label) {
                            case 0:
                              request = new this._xhrRequest(
                                baseDomain,
                                methodName,
                                params,
                                settings,
                                headers
                              );
                              timeoutId = this._win.setTimeout(function () {
                                reject('API request timeout');
                              }, this.timeout);
                              _b.label = 1;
                            case 1:
                              _b.trys.push([1, 3, 4, 5]);
                              _a = resolve;
                              return [4 /*yield*/, request.send()];
                            case 2:
                              _a.apply(void 0, [_b.sent()]);
                              return [3 /*break*/, 5];
                            case 3:
                              err_1 = _b.sent();
                              window.gigya.logger.report('XHR request failed', {
                                methodName: methodName,
                                params: params,
                                settings: settings,
                                err: err_1,
                              });
                              reject('Request for ' + methodName + ' failed');
                              return [3 /*break*/, 5];
                            case 4:
                              this._win.clearTimeout(timeoutId);
                              return [7 /*endfinally*/];
                            case 5:
                              return [2 /*return*/];
                          }
                        });
                      }
                    );
                  }),
                ];
              });
            });
          };
          return RequestProvider;
        })();
        exports.RequestProvider = RequestProvider;

        /***/
      },

    /***/ './src/core/Gigya.Js.Adapters.Web/app/SsoService.ts':
      /*!**********************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Web/app/SsoService.ts ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var sso_1 = __webpack_require__(
          /*! src/fidm/Gigya.JS.SSO/app/sso */ './src/fidm/Gigya.JS.SSO/app/sso.ts'
        );
        var domains_1 = __webpack_require__(
          /*! ../../Gigya.Js/app/Utils/domains */ './src/core/Gigya.Js/app/Utils/domains.ts'
        );
        var utils_1 = __webpack_require__(
          /*! ../../ServiceProxy/utils */ './src/core/ServiceProxy/utils.ts'
        );
        var FlagService_1 = __webpack_require__(
          /*! ../../Gigya.Js/app/Services/FlagService */ './src/core/Gigya.Js/app/Services/FlagService.ts'
        );
        var ServiceProxy_1 = __webpack_require__(
          /*! ../../ServiceProxy/ServiceProxy */ './src/core/ServiceProxy/ServiceProxy.ts'
        );
        // ### Single Sign On across multiple domains ###
        var callbackCounter = 0;
        exports._requestTimeout = 3000;
        var SsoService = /** @class */ (function () {
          function SsoService() {}
          SsoService.getInstance = function (ssoKey) {
            if (ssoKey === void 0) {
              ssoKey = window.gigya.partnerSettings.ssoKey;
            }
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var qs, url, ssoAdapter, error_1;
              return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    if (!!this._instance) return [3 /*break*/, 7];
                    if (!!ssoKey) return [3 /*break*/, 1];
                    return [2 /*return*/, null];
                  case 1:
                    if (!FlagService_1.FlagService.loadSsoFrameOnlyOnce)
                      return [3 /*break*/, 6];
                    qs = window.gigya.utils.keyValue.serialize({
                      APIKey: ssoKey,
                      version: window.gigya.build.version,
                      build: window.gigya.build.number || -1,
                      sourceKey: window.gigya.thisScript.APIKey,
                      oneFrame: true,
                      origin:
                        window.gigya.localInfo.protocol +
                        '://' +
                        document.location.hostname,
                      ssoSegment: window.gigya.partnerSettings.ssoSegment || '',
                    });
                    url =
                      'https://' +
                      domains_1.getStorageDomain() +
                      '/gs/sso.htm?' +
                      qs;
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
                    window.gigya.logger.error('error initialize sso frame', {
                      scope: 'SsoService.init',
                      error: error_1,
                    });
                    this._instance = new SsoService();
                    return [3 /*break*/, 5];
                  case 5:
                    return [3 /*break*/, 7];
                  case 6:
                    this._instance = new SsoService();
                    _a.label = 7;
                  case 7:
                    return [2 /*return*/, this._instance];
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
                callback: resolve,
              });
            });
          };
          SsoService.prototype.logout = function () {
            return new gigya.Promise(function (resolve) {
              logout({
                callback: resolve,
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
              setGroupContextCookie({
                groupContext: groupContext,
                callback: resolve,
              });
            });
          };
          SsoService.prototype.setToken = function (lt, expiration, gltexp) {
            return new gigya.Promise(function (resolve) {
              setGroupToken({
                lt: lt,
                expiration: expiration,
                gltexp: gltexp,
                callback: resolve,
              });
            });
          };
          SsoService.prototype.setTokenExpiration = function (
            loginTokenExp,
            useCache
          ) {
            if (useCache === void 0) {
              useCache = true;
            }
            return new gigya.Promise(function (resolve) {
              setLoginTokenExp(
                {
                  loginTokenExp: loginTokenExp,
                  callback: resolve,
                },
                useCache
              );
            });
          };
          SsoService.prototype.syncCanaryIndication = function (
            isCanary,
            canaryVersion
          ) {
            return new gigya.Promise(function (resolve) {
              syncCanaryIndication({
                isCanary: isCanary,
                canaryVersion: canaryVersion,
                callback: resolve,
              });
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
        })();
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
          } else {
            // Ensure the params passed are not modified by reference.
            params = window.gigya.utils.object.clone(p);
          }
          var ifr;
          var requestTimeoutId;
          var callback = function (response) {
            window.gigya.logger.debug('cleaning sso iframe');
            // cleanup iframe
            ifr.parentNode.removeChild(ifr);
            clearTimeout(requestTimeoutId);
            // Typecast response.
            if (response) {
              if (
                response.errorCode &&
                typeof response.errorCode === 'string'
              ) {
                response.errorCode = Number(response.errorCode);
              }
              if (
                response.expires_in &&
                typeof response.expires_in === 'string'
              ) {
                response.expires_in = Number(response.expires_in);
              }
            }
            if (p && p.callback) {
              p.callback(response);
            }
          };
          params.m = mode;
          params.d =
            window.gigya.localInfo.protocol +
            '://' +
            document.location.hostname;
          if (document.location.port) {
            params.d += ':' + document.location.port;
          }
          // Chrome caches the fragment when loaded for the first time. workaround:
          params.callbackID =
            'gig_sso_cb' + new Date().getTime() + '_' + callbackCounter++;
          params.sAPIKey = window.gigya.thisScript.APIKey;
          params[window.gigya.logger.configKey] = JSON.stringify(
            window.gigya.logger.getConfig()
          );
          var fragment = window.gigya.utils.keyValue.serialize(params);
          var iframeLoader = function (retries) {
            if (retries === void 0) {
              retries = 0;
            }
            window.gigya.utils.xd.addMessageListener(
              params.callbackID,
              {},
              false,
              callback,
              window.gigya._.MessagingMethod.PostMessage
            );
            ifr = _getIframe(params.callbackID);
            var fnOnLoad = function () {
              requestTimeoutId = setTimeout(function () {
                // total failure
                if (retries <= 0) {
                  window.gigya.logger.error('SSO Communication Timeout', {
                    IE11PrivateMode:
                      window.gigya.localInfo.isIE11 && !window.indexedDB,
                    mode: mode,
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
              ifr.src =
                'https://' +
                domains_1.getStorageDomain() +
                '/gs/sso.htm?' +
                qs +
                '#' +
                fragment;
              window.gigya.utils.DOM.removeEventListener(ifr, 'load', fnOnLoad);
            };
            window.gigya.utils.DOM.addEventListener(ifr, 'load', fnOnLoad);
            window.gigya.logger.debug('opening sso iframe', params);
            if (document.body) {
              window.gigya.utils.DOM.appendToBody(ifr);
            } else {
              window.gigya.utils.functions.invokeOnPageLoad(function () {
                return window.gigya.utils.DOM.appendToBody(ifr);
              });
            }
          };
          iframeLoader(3);
        }
        exports._request = _request;
        function _getIframe(requestId) {
          var ifr;
          if (FlagService_1.FlagService.hideSSOFrame) {
            ifr = utils_1.createIframe('SSO Frame');
          } else {
            ifr = document.createElement('iframe');
            // Absolute position with -1000px causes scrolling slowdowns on mobile devices.
            if (
              window.gigya.localInfo.isIOS ||
              window.gigya.localInfo.isIOSChrome ||
              window.gigya.localInfo.isAndroid
            ) {
              ifr.style.width = '0px';
              ifr.style.height = '0px';
              ifr.style.display = 'none';
            } else {
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
          window.gigya.logger.info('trying to get sso group login token');
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
            params.gltexp = window.gigya.utils.cookie.get(
              'gltexp_' + window.gigya.thisScript.APIKey
            );
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
          if (useCache === void 0) {
            useCache = true;
          }
          // Don't store the login token again if we've already stored it.
          if (
            useCache &&
            exports._storedLoginTokenExp &&
            params.loginTokenExp === exports._storedLoginTokenExp
          ) {
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
          window.gigya.logger.info('verifying login token with sso group');
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

        /***/
      },

    /***/ './src/core/Gigya.Js.Adapters.Web/app/TokenStore.ts':
      /*!**********************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Web/app/TokenStore.ts ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var SsoService_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Adapters.Web/app/SsoService */ './src/core/Gigya.Js.Adapters.Web/app/SsoService.ts'
        );
        var GSErrors_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/GSErrors */ './src/core/Gigya.Js/app/GSErrors.ts'
        );
        var SessionService_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/Services/SessionService */ './src/core/Gigya.Js/app/Services/SessionService.ts'
        );
        var FlagService_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/Services/FlagService */ './src/core/Gigya.Js/app/Services/FlagService.ts'
        );
        // Load and save tokens based on API keys
        var _curSessionExpiration;
        var _bearerToken = null;
        var _triedGACs = {};
        exports.activeNamespaces = {};
        function isValidGltExp(gltexp) {
          if (gltexp === void 0) {
            gltexp = getGltexpCookie();
          }
          return !gltexp || window.gigya.utils.gltexp.isValid(gltexp);
        }
        exports.isValidGltExp = isValidGltExp;
        function getGltexpCookie(APIKey) {
          if (APIKey === void 0) {
            APIKey = window.gigya.thisScript.APIKey;
          }
          return window.gigya.utils.cookie.get(getGltCookieKey(APIKey));
        }
        exports.getGltexpCookie = getGltexpCookie;
        function setGltexp(gltexp, APIKey) {
          if (APIKey === void 0) {
            APIKey = window.gigya.thisScript.APIKey;
          }
          if (gltexp && !isGigyaCookieDomain()) {
            window.gigya.utils.cookie.remove(getGltCookieKey(APIKey));
            if (FlagService_1.FlagService.setCookieSameSiteLaxSession) {
              window.gigya.utils.cookie.set(
                getGltCookieKey(APIKey),
                gltexp,
                null,
                null,
                null,
                'Lax'
              );
            } else {
              window.gigya.utils.cookie.set(getGltCookieKey(APIKey), gltexp);
            }
          }
        }
        exports.setGltexp = setGltexp;
        function getGltCookieKey(APIKey) {
          return 'gltexp_' + APIKey;
        }
        function _getTokenCookieName(APIKey) {
          if (APIKey === void 0) {
            APIKey = window.gigya.thisScript.APIKey;
          }
          if (APIKey) {
            return 'glt_' + APIKey;
          } else {
            return '_gig_lt';
          }
        }
        function get(APIKey) {
          if (APIKey === void 0) {
            APIKey = window.gigya.thisScript.APIKey;
          }
          var lt = window.gigya.utils.cookie.get(_getTokenCookieName(APIKey));
          if (lt) {
            return lt.split('|')[0];
          } else {
            return null;
          }
        }
        exports.get = get;
        function set(APIKey, login_token, expires_in, sessionExpiration) {
          window.gigya.utils.localStorage.removeItem('gigyaSettings');
          window.gigya.logger.info('setting a new login token');
          if (!APIKey) {
            APIKey = window.gigya.thisScript.APIKey;
          }
          if (APIKey) {
            if (FlagService_1.FlagService.setCookieSameSiteLaxSession) {
              window.gigya.utils.cookie.set(
                'glt_' + APIKey,
                login_token,
                expires_in,
                null,
                null,
                'Lax'
              );
            } else {
              window.gigya.utils.cookie.set(
                'glt_' + APIKey,
                login_token,
                expires_in
              );
            }
            window.gigya.utils.cookie.remove('gac_' + APIKey);
          } else {
            if (FlagService_1.FlagService.setCookieSameSiteLaxSession) {
              window.gigya.utils.cookie.set(
                '_gig_lt',
                login_token,
                expires_in,
                null,
                null,
                'Lax'
              );
            } else {
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
          return (
            window.gigya.thisScript.APIKey &&
            window.gigya.utils.cookie.get(
              'gac_' + window.gigya.thisScript.APIKey
            )
          );
        }
        exports.getGACCookie = getGACCookie;
        function setFromAuthCode(authCode) {
          return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
              return [
                2 /*return*/,
                new gigya.Promise(function (resolve) {
                  setFromGAC({}, resolve, authCode);
                }),
              ];
            });
          });
        }
        exports.setFromAuthCode = setFromAuthCode;
        function setFromGAC(params, callback, gac) {
          if (gac === void 0) {
            gac = getGACCookie();
          }
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
              window.gigya.socialize.notifyLogin(
                {
                  ignoreApiQueue: true,
                  neverTryGAC: true,
                  authCode: gac,
                  APIKey: window.gigya.thisScript.APIKey,
                  client_id: window.gigya.thisScript.APIKey,
                },
                {
                  // Intentionally we're not raising onLogin event, as no login was made, just established (verified in bug 43419).
                  callback: function () {
                    window.gigya.utils.cookie.remove(
                      'gac_' + window.gigya.thisScript.APIKey
                    );
                    callback();
                    // neverTryGAC is used to avoid trying setFromGac forever if the cookie wasn't removed (when a wrong baseDomain is used)
                    window.gigya.socialize.refreshUI({
                      neverTryGAC: true,
                    });
                  },
                }
              );
            } else {
              callback();
            }
          } else {
            callback();
          }
        }
        exports.setFromGAC = setFromGAC;
        function setFromSsoResponse(res, APIKey) {
          if (APIKey === void 0) {
            APIKey = window.gigya.thisScript.APIKey;
          }
          return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
              return [
                2 /*return*/,
                new gigya.Promise(function (resolve) {
                  return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var _a, expires_in, groupContext, gltexpCookieName;
                    return tslib_1.__generator(this, function (_b) {
                      switch (_b.label) {
                        case 0:
                          if (!res) return [2 /*return*/];
                          _a = res.errorCode;
                          switch (_a) {
                            case GSErrors_1.GSErrors.UNAUTHORIZED_USER:
                              return [3 /*break*/, 1];
                            case GSErrors_1.GSErrors.INVALID_TOKEN:
                              return [3 /*break*/, 2];
                            case GSErrors_1.GSErrors.TOKEN_HAS_RENEWED:
                              return [3 /*break*/, 3];
                            case GSErrors_1.GSErrors.OK:
                              return [3 /*break*/, 3];
                            case GSErrors_1.GSErrors.NETWORK_ERROR:
                              return [3 /*break*/, 5];
                          }
                          return [3 /*break*/, 6];
                        case 1:
                          window.gigya.logger.info('no group session found');
                          remove(APIKey);
                          return [3 /*break*/, 7];
                        case 2:
                          window.gigya.logger.info(
                            'existing group session was revoked'
                          );
                          remove(APIKey);
                          window.gigya.events.global.dispatchWhenHandlerAdded({
                            eventName: 'accounts.logout',
                          });
                          window.gigya.events.global.dispatchWhenHandlerAdded({
                            eventName: 'logout',
                          });
                          return [3 /*break*/, 7];
                        case 3:
                          if (!res.login_token) return [2 /*return*/];
                          window.gigya.logger.info('new session from group');
                          expires_in = void 0;
                          groupContext = void 0;
                          if (res.groupContext) {
                            groupContext = JSON.parse(res.groupContext);
                          }
                          if (!isGigyaCookieDomain()) {
                            // It should never expire if a gltexp is present.
                            expires_in = !res.gltexp
                              ? res.expires_in
                              : window.gigya.utils.cookie.getInfiniteExpirationTimeInSeconds();
                            // Set login token cookie
                            set(APIKey, res.login_token, expires_in);
                            gltexpCookieName = 'gltexp_' + APIKey;
                            if (
                              res.gltexp &&
                              !window.gigya.utils.cookie.get(gltexpCookieName)
                            ) {
                              window.gigya.utils.cookie.set(
                                gltexpCookieName,
                                res.gltexp
                              );
                            }
                          }
                          return [
                            4 /*yield*/,
                            dispatchLoginEvent({
                              expires_in: expires_in,
                              groupContext: groupContext,
                            }),
                          ];
                        case 4:
                          _b.sent();
                          return [3 /*break*/, 7];
                        case 5:
                          window.gigya.logger.error(
                            'gigya: error loading sso frame',
                            { res: res }
                          );
                          window.gigya.events.global.dispatchWhenHandlersAdded(
                            ['accounts.error', 'socialize.error'],
                            res
                          );
                          return [3 /*break*/, 7];
                        case 6:
                          window.gigya.logger.error(
                            'sso: unsupported response'
                          );
                          throw 'gigya: unsupported response from sso';
                        case 7:
                          resolve();
                          return [2 /*return*/];
                      }
                    });
                  });
                }),
              ];
            });
          });
        }
        exports.setFromSsoResponse = setFromSsoResponse;
        function dispatchLoginEvent(eventParams) {
          if (eventParams === void 0) {
            eventParams = {};
          }
          return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
              return [
                2 /*return*/,
                new gigya.Promise(function (resolve) {
                  window.gigya.utils.queue.hold('verifyLogin', 'API');
                  window.gigya.accounts.verifyLogin({
                    ignoreApiQueue: true,
                    suppressLoginEvent: true,
                    include:
                      window.gigya.utils.stringUtils.mergeCommaSeparatedValues(
                        'profile,data',
                        window.gigya.thisScript.globalConf['include']
                      ),
                    extraProfileFields: 'samlData',
                    callback: function (accountInfoRes) {
                      window.gigya.utils.queue.release('verifyLogin', 'API'); // release the api queue
                      SessionService_1.sessionData.setIsSessionVerified(
                        get(),
                        accountInfoRes.errorCode == GSErrors_1.GSErrors.OK
                      );
                      // use whatever field you need from accountInfoRes now before accountInfoRes will be overridden (such as 'source')
                      var source = accountInfoRes.source;
                      window.gigya.events.global.dispatchWhenHandlerAdded(
                        { eventName: 'socialize.login' },
                        null,
                        function (eventObj, callback) {
                          if (!eventObj) {
                            eventObj = {};
                          }
                          eventObj = window.gigya.utils.object.merge([
                            eventObj,
                            eventParams,
                          ]);
                          if (
                            accountInfoRes.errorCode == GSErrors_1.GSErrors.OK
                          ) {
                            window.gigya.socialize.getUserInfo({
                              signIDs: true,
                              extraFields: 'samlData',
                              callback: function (userInfoRes) {
                                if (
                                  userInfoRes.errorCode ==
                                  GSErrors_1.GSErrors.OK
                                ) {
                                  eventObj = window.gigya._.addUserInfoToEvent(
                                    userInfoRes,
                                    { eventName: 'login' },
                                    true
                                  );
                                  // normalizing event fields for backwards compatibility
                                  eventObj['source'] = source;
                                  eventObj['newUser'] = false;
                                  eventObj['provider'] = 'site';
                                  eventObj['loginMode'] = 'standard';
                                  if (eventObj['user']) {
                                    eventObj['user'].errorCode =
                                      userInfoRes.errorCode;
                                    eventObj['user'].callId =
                                      userInfoRes.callId;
                                  }
                                  accountInfoRes.id_token &&
                                    (eventObj['id_token'] =
                                      accountInfoRes.id_token);
                                } else {
                                  eventObj['cancel'] = true;
                                }
                                callback(eventObj);
                              },
                            });
                          } else {
                            eventObj['cancel'] = true;
                            callback(eventObj);
                          }
                        }
                      );
                      window.gigya.events.global.dispatchWhenHandlerAdded(
                        { eventName: 'accounts.login' },
                        null,
                        function (eventObj, callback) {
                          return tslib_1.__awaiter(
                            _this,
                            void 0,
                            void 0,
                            function () {
                              return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                  case 0:
                                    if (!eventObj) {
                                      eventObj = {};
                                    }
                                    eventObj = window.gigya.utils.object.merge([
                                      eventObj,
                                      eventParams,
                                    ]);
                                    if (
                                      !(
                                        accountInfoRes.errorCode ==
                                        GSErrors_1.GSErrors.OK
                                      )
                                    )
                                      return [3 /*break*/, 3];
                                    eventObj['eventName'] = 'accounts.login';
                                    if (!!accountInfoRes.UID)
                                      return [3 /*break*/, 2];
                                    return [
                                      4 /*yield*/,
                                      new gigya.Promise(function (r) {
                                        return window.gigya.accounts.getAccountInfo(
                                          {
                                            callback: r,
                                            include:
                                              window.gigya.utils.stringUtils.mergeCommaSeparatedValues(
                                                'profile,data',
                                                window.gigya.thisScript
                                                  .globalConf['include']
                                              ),
                                          }
                                        );
                                      }),
                                    ];
                                  case 1:
                                    accountInfoRes = _a.sent();
                                    _a.label = 2;
                                  case 2:
                                    window.gigya.utils.object.extractProperties(
                                      accountInfoRes,
                                      eventObj,
                                      'signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|profile|data|dataCenter|id_token|groups'
                                    );
                                    return [3 /*break*/, 4];
                                  case 3:
                                    eventObj['cancel'] = true;
                                    _a.label = 4;
                                  case 4:
                                    callback(eventObj);
                                    return [2 /*return*/];
                                }
                              });
                            }
                          );
                        }
                      );
                      resolve();
                    },
                  });
                }),
              ];
            });
          });
        }
        exports.dispatchLoginEvent = dispatchLoginEvent;
        function remove(APIKey) {
          if (APIKey === void 0) {
            APIKey = window.gigya.thisScript.APIKey;
          }
          return tslib_1.__awaiter(this, void 0, void 0, function () {
            var service;
            return tslib_1.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (get(APIKey)) {
                    window.gigya.logger.info('removing login token');
                  }
                  window.gigya.utils.cookie.remove('glt_' + APIKey);
                  window.gigya.utils.cookie.remove('_gig_lt');
                  window.gigya.utils.cookie.remove('gltexp_' + APIKey);
                  if (!window.gigya.partnerSettings.ssoKey)
                    return [3 /*break*/, 2];
                  window.gigya.logger.info('removing group login token');
                  return [4 /*yield*/, SsoService_1.SsoService.getInstance()];
                case 1:
                  service = _a.sent();
                  return [2 /*return*/, service.removeToken()];
                case 2:
                  return [2 /*return*/, gigya.Promise.resolve()];
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
              return window.gigya.utils.keyValue.deserialize(ltSegs[1])[
                paramName
              ];
            } else {
              return null;
            }
          }
        }
        exports.getTokenParam = getTokenParam;
        function isGigyaCookieDomain() {
          var cookieDomain = window.gigya.utils.cookie.getDefaultDomain();
          return window.gigya.utils.stringUtils.endsWith(
            cookieDomain,
            window.gigya.defaultApiDomain
          );
        }
        function setBearerToken(bearerToken) {
          window.gigya.logger.info('setting a new Bearer token');
          _bearerToken = 'Bearer ' + bearerToken;
        }
        exports.setBearerToken = setBearerToken;
        function getBearerToken() {
          return _bearerToken;
        }
        exports.getBearerToken = getBearerToken;
        function removeBearerToken() {
          window.gigya.logger.info('Bearer token removed');
          _bearerToken = null;
        }
        exports.removeBearerToken = removeBearerToken;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/PluginStyles.ts':
      /*!******************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/PluginStyles.ts ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var PluginStyle;
        (function (PluginStyle) {
          PluginStyle[(PluginStyle['_undefined'] = 0)] = '_undefined';
          PluginStyle[(PluginStyle['none'] = 1)] = 'none';
          PluginStyle[(PluginStyle['legacy'] = 2)] = 'legacy';
          PluginStyle[(PluginStyle['modern'] = 3)] = 'modern';
        })((PluginStyle = exports.PluginStyle || (exports.PluginStyle = {})));
        function getPluginStyleClass(style) {
          return 'gigya-style-' + PluginStyle[style];
        }
        exports.getPluginStyleClass = getPluginStyleClass;

        /***/
      },

    /***/ './src/core/Gigya.Js/app/BaseObject/IBaseObjectConfig.ts':
      /*!***************************************************************!*\
  !*** ./src/core/Gigya.Js/app/BaseObject/IBaseObjectConfig.ts ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var DeviceTypes;
        (function (DeviceTypes) {
          DeviceTypes[(DeviceTypes['_undefined'] = 0)] = '_undefined';
          DeviceTypes[(DeviceTypes['desktop'] = 1)] = 'desktop';
          DeviceTypes[(DeviceTypes['mobile'] = 2)] = 'mobile';
          DeviceTypes[(DeviceTypes['auto'] = 3)] = 'auto';
        })((DeviceTypes = exports.DeviceTypes || (exports.DeviceTypes = {})));

        /***/
      },

    /***/ './src/core/Gigya.Js/app/Flow/Flow.ts':
      /*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/Flow/Flow.ts ***!
  \********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var interfaces_1 = __webpack_require__(
          /*! ./interfaces */ './src/core/Gigya.Js/app/Flow/interfaces.ts'
        );
        var queue_1 = __webpack_require__(
          /*! ../Utils/queue */ './src/core/Gigya.Js/app/Utils/queue.ts'
        );
        var InitActivity_1 = __webpack_require__(
          /*! ./activities/InitActivity */ './src/core/Gigya.Js/app/Flow/activities/InitActivity.ts'
        );
        var ActivityLibrary_1 = __webpack_require__(
          /*! ./activities/ActivityLibrary */ './src/core/Gigya.Js/app/Flow/activities/ActivityLibrary.ts'
        );
        var ScreenSetActivity_1 = __webpack_require__(
          /*! ./activities/ScreenSetActivity */ './src/core/Gigya.Js/app/Flow/activities/ScreenSetActivity.ts'
        );
        var EventActivity_1 = __webpack_require__(
          /*! ./activities/EventActivity */ './src/core/Gigya.Js/app/Flow/activities/EventActivity.ts'
        );
        var Flow = /** @class */ (function () {
          function Flow(identityFlowId, flowParams, onComplete) {
            this.identityFlowId = identityFlowId;
            this.flowParams = flowParams;
            this.onComplete = onComplete;
            this.eventMap = new Map();
          }
          Flow.prototype.on = function (eventName, eventHandler) {
            this.eventMap.set(eventName, eventHandler);
            return this;
          };
          Flow.prototype.error = function (eventHandler) {
            this.errorHandler = eventHandler;
            return this;
          };
          Flow.prototype.execute = function () {
            var _this = this;
            if (ActivityLibrary_1.ActivityLibrary.isEmpty()) {
              ActivityLibrary_1.ActivityLibrary.registerActivity(
                interfaces_1.ActivityType.ScreenSet,
                ScreenSetActivity_1.ScreenSetActivity
              );
              ActivityLibrary_1.ActivityLibrary.registerActivity(
                interfaces_1.ActivityType.Event,
                EventActivity_1.EventActivity
              );
            }
            queue_1.queueForExecution('API', function () {
              new InitActivity_1.InitActivity(_this, null).run();
            });
          };
          Flow.prototype.finish = function () {
            this.onComplete && this.onComplete();
          };
          return Flow;
        })();
        exports.Flow = Flow;
        function flow(flowId, params, onComplete) {
          return new Flow(flowId, params, onComplete);
        }
        exports.flow = flow;

        /***/
      },

    /***/ './src/core/Gigya.Js/app/Flow/activities/ActivityLibrary.ts':
      /*!******************************************************************!*\
  !*** ./src/core/Gigya.Js/app/Flow/activities/ActivityLibrary.ts ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var ActivityLibrary = /** @class */ (function () {
          function ActivityLibrary() {}
          ActivityLibrary.isEmpty = function () {
            return Object.keys(this.activityMap).length === 0;
          };
          ActivityLibrary.registerActivity = function (type, activity) {
            this.activityMap.set(type, activity);
          };
          ActivityLibrary.getActivity = function (flow, params) {
            if (
              this.activityMap.has(
                params === null || params === void 0
                  ? void 0
                  : params.activityType
              )
            ) {
              var Activity = this.activityMap.get(params.activityType);
              return new Activity(flow, params);
            }
            return null;
          };
          ActivityLibrary.activityMap = new Map();
          return ActivityLibrary;
        })();
        exports.ActivityLibrary = ActivityLibrary;

        /***/
      },

    /***/ './src/core/Gigya.Js/app/Flow/activities/BaseActivity.ts':
      /*!***************************************************************!*\
  !*** ./src/core/Gigya.Js/app/Flow/activities/BaseActivity.ts ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var tokenStore = __webpack_require__(
          /*! ../../../../Gigya.Js.Adapters.Web/app/TokenStore */ './src/core/Gigya.Js.Adapters.Web/app/TokenStore.ts'
        );
        var RequestProvider_1 = __webpack_require__(
          /*! src/core/ApiService/app/RequestProvider */ './src/core/ApiService/app/RequestProvider.ts'
        );
        var ActivityLibrary_1 = __webpack_require__(
          /*! ./ActivityLibrary */ './src/core/Gigya.Js/app/Flow/activities/ActivityLibrary.ts'
        );
        var GSErrors_1 = __webpack_require__(
          /*! ../../GSErrors */ './src/core/Gigya.Js/app/GSErrors.ts'
        );
        var BaseActivity = /** @class */ (function () {
          function BaseActivity(flow, params, _requestProvider) {
            if (_requestProvider === void 0) {
              _requestProvider = new RequestProvider_1.RequestProvider();
            }
            this.flow = flow;
            this.params = params;
            this._requestProvider = _requestProvider;
          }
          BaseActivity.prototype.next = function (url) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              var result, activity;
              return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4 /*yield*/, this.fetch(url)];
                  case 1:
                    result = _a.sent();
                    if (!result) {
                      // When response is null it means no activity to run next, so flow considered as done
                      this.flow.finish();
                    } else if (result.errorCode === GSErrors_1.GSErrors.OK) {
                      activity = ActivityLibrary_1.ActivityLibrary.getActivity(
                        this.flow,
                        result
                      );
                      activity ? activity.run() : this.flow.finish();
                    } else {
                      this.flow.errorHandler(result);
                    }
                    return [2 /*return*/];
                }
              });
            });
          };
          BaseActivity.prototype.getRequestParams = function () {
            var apiKey = window.gigya.thisScript.APIKey;
            var loginToken = tokenStore.get(apiKey);
            var params = {};
            params['APIKey'] = apiKey;
            if (loginToken) {
              var loginTokenExp = tokenStore.getGltexpCookie(apiKey);
              if (loginTokenExp !== null) {
                params['loginTokenExp'] = loginTokenExp;
              }
              params['login_token'] = loginToken;
            }
            params['authMode'] = 'cookie';
            return params;
          };
          BaseActivity.prototype.fetch = function (url) {
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var baseDomain, e_1;
              return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    baseDomain =
                      'https://' + window.gigya._.getApiDomain('accounts');
                    _a.label = 1;
                  case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [
                      4 /*yield*/,
                      this._requestProvider.send(
                        baseDomain,
                        'workflow' + url,
                        this.getRequestParams(),
                        {},
                        {}
                      ),
                    ];
                  case 2:
                    return [2 /*return*/, _a.sent()];
                  case 3:
                    e_1 = _a.sent();
                    window.gigya.logger.report('Flow request fail', {
                      url: url,
                      e: e_1,
                    });
                    return [2 /*return*/, null];
                  case 4:
                    return [2 /*return*/];
                }
              });
            });
          };
          return BaseActivity;
        })();
        exports.BaseActivity = BaseActivity;

        /***/
      },

    /***/ './src/core/Gigya.Js/app/Flow/activities/EventActivity.ts':
      /*!****************************************************************!*\
  !*** ./src/core/Gigya.Js/app/Flow/activities/EventActivity.ts ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var BaseActivity_1 = __webpack_require__(
          /*! ./BaseActivity */ './src/core/Gigya.Js/app/Flow/activities/BaseActivity.ts'
        );
        var interfaces_1 = __webpack_require__(
          /*! ../interfaces */ './src/core/Gigya.Js/app/Flow/interfaces.ts'
        );
        var ActivityLibrary_1 = __webpack_require__(
          /*! ./ActivityLibrary */ './src/core/Gigya.Js/app/Flow/activities/ActivityLibrary.ts'
        );
        var EventActivity = /** @class */ (function (_super) {
          tslib_1.__extends(EventActivity, _super);
          function EventActivity() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          EventActivity.prototype.run = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              var handler, e_1;
              return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    handler = this.flow.eventMap.get(this.params.eventName);
                    if (!handler) return [3 /*break*/, 4];
                    _a.label = 1;
                  case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [
                      4 /*yield*/,
                      handler({
                        eventName: this.params.eventName,
                        workflowDefinitionId: this.flow.identityFlowId,
                      }),
                    ];
                  case 2:
                    _a.sent();
                    this.params.afterEventUrl &&
                      this.next(this.params.afterEventUrl);
                    return [3 /*break*/, 4];
                  case 3:
                    e_1 = _a.sent();
                    this.flow.errorHandler(e_1);
                    return [3 /*break*/, 4];
                  case 4:
                    return [2 /*return*/];
                }
              });
            });
          };
          return EventActivity;
        })(BaseActivity_1.BaseActivity);
        exports.EventActivity = EventActivity;
        ActivityLibrary_1.ActivityLibrary.registerActivity(
          interfaces_1.ActivityType.Event,
          EventActivity
        );

        /***/
      },

    /***/ './src/core/Gigya.Js/app/Flow/activities/InitActivity.ts':
      /*!***************************************************************!*\
  !*** ./src/core/Gigya.Js/app/Flow/activities/InitActivity.ts ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var BaseActivity_1 = __webpack_require__(
          /*! ./BaseActivity */ './src/core/Gigya.Js/app/Flow/activities/BaseActivity.ts'
        );
        var InitActivity = /** @class */ (function (_super) {
          tslib_1.__extends(InitActivity, _super);
          function InitActivity() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          InitActivity.prototype.run = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [
                      4 /*yield*/,
                      this.next(
                        '/runtime/v1/workflowDefinitions/' +
                          this.flow.identityFlowId +
                          '/dispatch'
                      ),
                    ];
                  case 1:
                    _a.sent();
                    return [2 /*return*/];
                }
              });
            });
          };
          return InitActivity;
        })(BaseActivity_1.BaseActivity);
        exports.InitActivity = InitActivity;

        /***/
      },

    /***/ './src/core/Gigya.Js/app/Flow/activities/ScreenSetActivity.ts':
      /*!********************************************************************!*\
  !*** ./src/core/Gigya.Js/app/Flow/activities/ScreenSetActivity.ts ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var BaseActivity_1 = __webpack_require__(
          /*! ./BaseActivity */ './src/core/Gigya.Js/app/Flow/activities/BaseActivity.ts'
        );
        var interfaces_1 = __webpack_require__(
          /*! ../interfaces */ './src/core/Gigya.Js/app/Flow/interfaces.ts'
        );
        var GSErrors_1 = __webpack_require__(
          /*! ../../GSErrors */ './src/core/Gigya.Js/app/GSErrors.ts'
        );
        var ActivityLibrary_1 = __webpack_require__(
          /*! ./ActivityLibrary */ './src/core/Gigya.Js/app/Flow/activities/ActivityLibrary.ts'
        );
        var ScreenSetActivity = /** @class */ (function (_super) {
          tslib_1.__extends(ScreenSetActivity, _super);
          function ScreenSetActivity() {
            return (_super !== null && _super.apply(this, arguments)) || this;
          }
          ScreenSetActivity.prototype.run = function () {
            var _a;
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              var _this = this;
              return tslib_1.__generator(this, function (_b) {
                if (!this.params.screenSet || !this.params.startScreen) {
                  return [2 /*return*/];
                }
                window.gigya.accounts.showScreenSet(
                  tslib_1.__assign(
                    tslib_1.__assign(
                      {},
                      (_a = this.flow.flowParams) === null || _a === void 0
                        ? void 0
                        : _a.screenSetParams
                    ),
                    {
                      screenSet: this.params.screenSet,
                      startScreen: this.params.startScreen,
                      onAfterSubmit: function (event) {
                        var _a;
                        if (
                          ((_a = event.response) === null || _a === void 0
                            ? void 0
                            : _a.errorCode) === GSErrors_1.GSErrors.OK
                        ) {
                          _this.params.onSubmitUrl &&
                            _this.next(_this.params.onSubmitUrl);
                        } else {
                          _this.flow.errorHandler(event.response);
                        }
                      },
                    }
                  )
                );
                return [2 /*return*/];
              });
            });
          };
          return ScreenSetActivity;
        })(BaseActivity_1.BaseActivity);
        exports.ScreenSetActivity = ScreenSetActivity;
        ActivityLibrary_1.ActivityLibrary.registerActivity(
          interfaces_1.ActivityType.ScreenSet,
          ScreenSetActivity
        );

        /***/
      },

    /***/ './src/core/Gigya.Js/app/Flow/interfaces.ts':
      /*!**************************************************!*\
  !*** ./src/core/Gigya.Js/app/Flow/interfaces.ts ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var ActivityType;
        (function (ActivityType) {
          ActivityType['Event'] = 'Event';
          ActivityType['ScreenSet'] = 'ScreenSet';
        })(
          (ActivityType = exports.ActivityType || (exports.ActivityType = {}))
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

    /***/ './src/core/Gigya.Js/app/GoogleAnalytics/GoogleAnalytics.ts':
      /*!******************************************************************!*\
  !*** ./src/core/Gigya.Js/app/GoogleAnalytics/GoogleAnalytics.ts ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var GoogleAnalytics = /** @class */ (function () {
          function GoogleAnalytics(config, analytics) {
            this.config = config;
            this.analytics = analytics;
            this.defineGTag();
          }
          Object.defineProperty(GoogleAnalytics.prototype, 'gtag', {
            get: function () {
              return window['gtag'];
            },
            enumerable: true,
            configurable: true,
          });
          GoogleAnalytics.prototype.start = function () {
            var _this = this;
            var _a;
            if (
              !((_a = this.config) === null || _a === void 0
                ? void 0
                : _a.googleAnalyticsGTag) ||
              !this.analytics
            ) {
              return;
            }
            var globalScript = this.createGAGlobalScript(
              this.config.googleAnalyticsGTag
            );
            globalScript.onload = function () {
              _this.addMandatoryGAConfig(_this.config.googleAnalyticsGTag);
              _this.analytics.forEach(function (analyticsConfig) {
                analyticsConfig.register(_this.sendAnalytics);
              });
            };
            document.head.appendChild(globalScript);
          };
          GoogleAnalytics.prototype.createGAGlobalScript = function (
            trackingId
          ) {
            var script = document.createElement('script');
            script.async = true;
            script.src =
              'https://www.googletagmanager.com/gtag/js?id=' + trackingId;
            return script;
          };
          GoogleAnalytics.prototype.defineGTag = function () {
            window['dataLayer'] = window['dataLayer'] || [];
            window['gtag'] = function () {
              var _a;
              (_a = window['dataLayer']) === null || _a === void 0
                ? void 0
                : _a.push(arguments);
            };
          };
          GoogleAnalytics.prototype.addMandatoryGAConfig = function (
            trackingId
          ) {
            this.gtag('js', new Date());
            this.gtag('config', '' + trackingId);
          };
          GoogleAnalytics.prototype.sendAnalytics = function (
            command,
            commandParameters,
            payload
          ) {
            this.gtag(command, commandParameters, payload);
          };
          return GoogleAnalytics;
        })();
        exports.GoogleAnalytics = GoogleAnalytics;

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

    /***/ './src/core/Gigya.Js/app/Services/FlagService.ts':
      /*!*******************************************************!*\
  !*** ./src/core/Gigya.Js/app/Services/FlagService.ts ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var FlagService = /** @class */ (function () {
          function FlagService() {}
          Object.defineProperty(FlagService, 'forceWebSdkBootstrap', {
            get: function () {
              return this.get('forceWebSdkBootstrap');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'useGigyaJsBaseDomain', {
            get: function () {
              return this.get('useGigyaJsBaseDomain');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'hideSSOFrame', {
            get: function () {
              return this.get('hideSSOFrame');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'wcagContrastFix', {
            get: function () {
              return this.get('wcagContrastFix');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'newFormLinkInstanceElement', {
            get: function () {
              return this.get('newFormLinkInstanceElement');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'stopSendingReports', {
            get: function () {
              return this.get('stopSendingReports');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'setGroupApiDomainAfterLogin', {
            get: function () {
              return this.get('setGroupApiDomainAfterLogin');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'useHttpStatusCode', {
            get: function () {
              return this.get('useHttpStatusCode');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'alwaysCheckCookieSave', {
            get: function () {
              return this.get('alwaysCheckCookieSave');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'fixPhoneTFATranslations', {
            get: function () {
              return this.get('fixPhoneTFATranslations');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'loadSsoFrameOnlyOnce', {
            get: function () {
              return this.get('loadSsoFrameOnlyOnce');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'verifyLoginOnlyOnce', {
            get: function () {
              return this.get('verifyLoginOnlyOnce');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'sendLangForEmailOTP', {
            get: function () {
              return this.get('sendLangForEmailOTP');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'setProviderFromResponse', {
            get: function () {
              return this.get('setProviderFromResponse');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'setCookieSameSiteLaxSession', {
            get: function () {
              return this.get('setCookieSameSiteLaxSession');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'setCookieSameSiteLaxSocial', {
            get: function () {
              return this.get('setCookieSameSiteLaxSocial');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(
            FlagService,
            'setCookieSameSiteLaxLowPriority',
            {
              get: function () {
                return this.get('setCookieSameSiteLaxLowPriority');
              },
              enumerable: true,
              configurable: true,
            }
          );
          Object.defineProperty(FlagService, 'forceErrorReport', {
            get: function () {
              return this.get('forceErrorReport');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'skipSameScreenCheckOnSwitch', {
            get: function () {
              return this.get('skipSameScreenCheckOnSwitch');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'getOnlyVisibleField', {
            get: function () {
              return this.get('getOnlyVisibleField');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'updateAccountInfoAsync', {
            get: function () {
              return this.get('updateAccountInfoAsync');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'sanitizeEvaluatedValue', {
            get: function () {
              return this.get('sanitizeEvaluatedValue');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'useSessionVerify', {
            get: function () {
              return this.get('useSessionVerify');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'useExtendedPhoneNumberRegex', {
            get: function () {
              return this.get('useExtendedPhoneNumberRegex');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'generateNewCodeWcagCompliance', {
            get: function () {
              return this.get('generateNewCodeWcagCompliance');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(
            FlagService,
            'enforceAuthFlowRedirectForSocial',
            {
              get: function () {
                return this.get('enforceAuthFlowRedirectForSocial');
              },
              enumerable: true,
              configurable: true,
            }
          );
          Object.defineProperty(FlagService, 'useDecodeURIComponent', {
            get: function () {
              return this.get('useDecodeURIComponent');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'useOidcGetParamHashOldStyle', {
            get: function () {
              return this.get('useOidcGetParamHashOldStyle');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(FlagService, 'useViewportPollerAction', {
            get: function () {
              return this.get('useViewportPollerAction');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(
            FlagService,
            'ignoreInterruptionsInOidcPassiveLogin',
            {
              get: function () {
                return this.get('ignoreInterruptionsInOidcPassiveLogin');
              },
              enumerable: true,
              configurable: true,
            }
          );
          Object.defineProperty(FlagService, 'overrideAllChildContext', {
            get: function () {
              return this.get('overrideAllChildContext');
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(
            FlagService,
            'dispatchLoginEventWhenHandlerAdded',
            {
              get: function () {
                return this.get('dispatchLoginEventWhenHandlerAdded');
              },
              enumerable: true,
              configurable: true,
            }
          );
          FlagService.get = function (name) {
            var _a, _b;
            return (
              (((_a = window.gigya._.config) === null || _a === void 0
                ? void 0
                : _a.flags) &&
                ((_b = window.gigya._.config) === null || _b === void 0
                  ? void 0
                  : _b.flags[name])) ||
              false
            );
          };
          Object.defineProperty(FlagService, 'apiFlags', {
            // Every flag that is associated with data modification related to the api layer
            get: function () {
              return [];
            },
            enumerable: true,
            configurable: true,
          });
          return FlagService;
        })();
        exports.FlagService = FlagService;

        /***/
      },

    /***/ './src/core/Gigya.Js/app/Services/SessionService.ts':
      /*!**********************************************************!*\
  !*** ./src/core/Gigya.Js/app/Services/SessionService.ts ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var sessionCache_1 = __webpack_require__(
          /*! ../Utils/sessionCache */ './src/core/Gigya.Js/app/Utils/sessionCache.ts'
        );
        var object_1 = __webpack_require__(
          /*! ../Utils/object */ './src/core/Gigya.Js/app/Utils/object.ts'
        );
        var SessionService = /** @class */ (function () {
          function SessionService() {}
          SessionService.prototype.isSessionVerified = function (glt, apiKey) {
            if (apiKey === void 0) {
              apiKey = window.gigya.thisScript.APIKey;
            }
            var key = this.createKey(glt, apiKey);
            return sessionCache_1.get(key) === 'true';
          };
          SessionService.prototype.setIsSessionVerified = function (
            glt,
            verified,
            apiKey
          ) {
            if (apiKey === void 0) {
              apiKey = window.gigya.thisScript.APIKey;
            }
            var key = this.createKey(glt, apiKey);
            sessionCache_1.set(key, '' + verified);
          };
          SessionService.prototype.createKey = function (glt, apiKey) {
            var key = object_1.getMurmurHash(glt + '_' + apiKey, 15).toString();
            return btoa(key);
          };
          return SessionService;
        })();
        exports.sessionData = new SessionService();

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

    /***/ './src/core/Gigya.Js/app/Utils/URL.ts':
      /*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/URL.ts ***!
  \********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var constants_1 = __webpack_require__(
          /*! ./../../../../accounts/constants */ './src/accounts/constants.ts'
        );
        var keyValueUtils = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/keyValue */ './src/core/Gigya.Js/app/Utils/keyValue.ts'
        );
        var objectUtils = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/object */ './src/core/Gigya.Js/app/Utils/object.ts'
        );
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
          return keyValueUtils.deserialize(
            url.split('#')[0].split('?')[1],
            '&',
            keysToLower
          );
        }
        exports.getParamsFromURL = getParamsFromURL;
        function getGigParamsFromURL(config) {
          var _a = config || {},
            url = _a.url,
            paramPrefix = _a.paramPrefix,
            keysToLower = _a.keysToLower,
            removePrefix = _a.removePrefix;
          var prefix = paramPrefix || constants_1.GIGYA_PARAM_PREFIX;
          var urlParams = getParamsFromURL(url, keysToLower);
          return Object.keys(urlParams)
            .filter(function (key) {
              return key.indexOf(prefix) === 0 && key !== prefix;
            })
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
          var finalUrl =
            urlHashSplit[0].split('?')[0] +
            '?' +
            keyValueUtils.serialize(params, '&');
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
              var paramName = _a[0],
                paramValue = _a[1];
              return (validParams[paramName] = paramValue);
            });
          return validParams;
        };
        function getContextParamsFromUrl(config) {
          var _a = config || {},
            url = _a.url,
            paramPrefix = _a.paramPrefix,
            unacceptableParams = _a.unacceptableParams;
          if (!url) {
            return {};
          }
          var params = window.gigya.utils.URL.getGigParamsFromURL({
            url: url,
            paramPrefix: paramPrefix,
          });
          return removeUnacceptableParams(params, unacceptableParams);
        }
        exports.getContextParamsFromUrl = getContextParamsFromUrl;

        /***/
      },

    /***/ './src/core/Gigya.Js/app/Utils/Uri.ts':
      /*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/Uri.ts ***!
  \********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var stringUtilsUtils = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/stringUtils */ './src/core/Gigya.Js/app/Utils/stringUtils.ts'
        );
        var Uri = /** @class */ (function () {
          function Uri(url, isAbsolute) {
            if (isAbsolute === void 0) {
              isAbsolute = true;
            }
            this._anchor = document.createElement('a');
            var protocol =
              document.location.protocol == 'http:' ? 'http' : 'https';
            if (
              isAbsolute &&
              url.indexOf('://') === -1 &&
              url.charAt(0) !== '/'
            )
              url = protocol + '://' + url;
            this._anchor.href = url;
          }
          Object.defineProperty(Uri.prototype, 'domain', {
            get: function () {
              return this._anchor.hostname;
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(Uri.prototype, 'path', {
            get: function () {
              return this._anchor.pathname;
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(Uri.prototype, 'href', {
            get: function () {
              return this._anchor.href;
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(Uri.prototype, 'search', {
            get: function () {
              return this._anchor.search.slice(1);
            }, // dropping '?'
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(Uri.prototype, 'hash', {
            get: function () {
              return this._anchor.hash.slice(1);
            }, // dropping '#'
            enumerable: true,
            configurable: true,
          });
          Uri.prototype.toString = function () {
            return this._anchor.href;
          };
          Uri.prototype.addToSearch = function (params) {
            for (var name in params) {
              var val = params[name];
              if (
                (typeof val == 'boolean' ||
                  typeof val == 'number' ||
                  typeof val == 'string') &&
                name != 'eventName'
              ) {
                var addition = this._anchor.search ? '&' : '';
                this._anchor.search +=
                  '' + addition + name + '=' + encodeURIComponent(params[name]);
              }
            }
            return this;
          };
          Uri.prototype.fetch = function (retries) {
            if (retries === void 0) {
              retries = 0;
            }
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
                  case 2:
                    return [4 /*yield*/, this.xhr()];
                  case 3:
                    _a = _b.sent();
                    _b.label = 4;
                  case 4:
                    return [2 /*return*/, _a];
                  case 5:
                    e_1 = _b.sent();
                    if (retries <= 0) throw new Error('fetch failed: ' + e_1);
                    return [4 /*yield*/, this.delay(1)];
                  case 6:
                    _b.sent();
                    return [4 /*yield*/, this.fetch(retries - 1)];
                  case 7:
                    return [2 /*return*/, _b.sent()];
                  case 8:
                    return [2 /*return*/];
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
            return (
              (this.domain == base.domain || // page is the base domain
                this.isSubDomainOf(base)) && // or sub-domain of it
              (!base.path || this.path.indexOf(base.path) == 0)
            ); // page is also in base's defined path;
          };
          Uri.prototype.isForSubDomains = function () {
            return this.domain.indexOf('.') == 0;
          };
          Uri.prototype.isSubDomainOf = function (base) {
            var domain = '';
            if (!base.isForSubDomains()) domain = '.';
            domain += base.domain;
            return stringUtilsUtils.endsWith(this.domain, domain);
          };
          Uri.parse = function (url, isAbsolute) {
            if (isAbsolute === void 0) {
              isAbsolute = true;
            }
            if (!url) return undefined;
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
                    if (!response.ok) throw new Error('fetch failed');
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
                  return reject(
                    'xhr failed - ' + xhr.status + ' - ' + xhr.statusText
                  );
                }
                try {
                  var jsonResponse = JSON.parse(xhr.responseText);
                  return resolve(jsonResponse);
                } catch (e) {
                  return reject(e);
                }
              };
            });
          };
          Uri.prototype.delay = function (ms) {
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              return tslib_1.__generator(this, function (_a) {
                return [
                  2 /*return*/,
                  new gigya.Promise(function (r) {
                    return setTimeout(r, ms);
                  }),
                ];
              });
            });
          };
          return Uri;
        })();
        exports.Uri = Uri;

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

    /***/ './src/core/Gigya.Js/app/Utils/domains.ts':
      /*!************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/domains.ts ***!
  \************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var _a, _b;
        Object.defineProperty(exports, '__esModule', { value: true });
        var Uri_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/Uri */ './src/core/Gigya.Js/app/Utils/Uri.ts'
        );
        var stringUtilsUtils = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/stringUtils */ './src/core/Gigya.Js/app/Utils/stringUtils.ts'
        );
        var LocalInfo_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/LocalInfo */ './src/core/Gigya.Js/app/LocalInfo.ts'
        );
        var FlagService_1 = __webpack_require__(
          /*! ../Services/FlagService */ './src/core/Gigya.Js/app/Services/FlagService.ts'
        );
        var cookie_1 = __webpack_require__(
          /*! ./cookie */ './src/core/Gigya.Js/app/Utils/cookie.ts'
        );
        // TODO: move to config
        var baseDomains;
        if (
          (_b =
            (_a = window.gigya.partnerSettings) === null || _a === void 0
              ? void 0
              : _a.baseDomains) === null || _b === void 0
            ? void 0
            : _b.length
        ) {
          baseDomains = window.gigya.partnerSettings.baseDomains;
        } else {
          if (window.self === window.top) {
            // only in the top frame
            window.gigya.logger.warn('gigya: missing base domains for site');
          }
          baseDomains = [document.location.hostname];
        }
        LocalInfo_1.localInfo.baseDomain = getBaseDomain(baseDomains);
        var gigyaDomainNamespaces = [
          'socialize',
          'accounts',
          'fidm',
          'gm',
          'comments',
          'gcs',
          'ids',
          'ds',
          'gscounters',
          'reports',
        ];
        function apiDomainFactory(apiDomain, defaultApiDomain) {
          if (apiDomain === void 0) {
            apiDomain = resolveApiDomain();
          }
          if (defaultApiDomain === void 0) {
            defaultApiDomain = window.gigya.defaultApiDomain;
          }
          var shouldAddNamespace = Uri_1.Uri.parse(apiDomain).isIn(
            Uri_1.Uri.parse(defaultApiDomain)
          );
          return function (namespace) {
            if (namespace && shouldAddNamespace) {
              var subDomain = namespace.split('.')[0];
              if (subDomain === 'sdk' || subDomain === 'oauth') {
                subDomain = 'accounts';
              } else if (gigyaDomainNamespaces.indexOf(subDomain) == -1) {
                window.gigya.logger.error(
                  'trying to send request to an invalid domain'
                );
                subDomain = gigyaDomainNamespaces[0];
              }
              return subDomain + '.' + apiDomain;
            } else {
              return apiDomain;
            }
          };
        }
        exports.apiDomainFactory = apiDomainFactory;
        function getGigyaDomain(namespace, dataCenter, defaultDomain) {
          if (dataCenter === void 0) {
            dataCenter = window.gigya.dataCenter;
          }
          if (defaultDomain === void 0) {
            defaultDomain = window.gigya.defaultApiDomain;
          }
          if (defaultDomain === 'sapcdm.cn' && dataCenter !== 'cn1') {
            defaultDomain = 'cn1.' + defaultDomain; //Fix for cn1-st1. it should be cn1-st1.cn1.sapcdm.cn and not cn1-st1.sapcdm.cn
          }
          var domain = dataCenter + '.' + defaultDomain;
          if (namespace) return namespace + '.' + domain;
          else return domain;
        }
        exports.getGigyaDomain = getGigyaDomain;
        function getBaseDomain(baseDomains, currentDomain, defaultDomains) {
          if (baseDomains === void 0) {
            baseDomains = window.gigya.partnerSettings.baseDomains;
          }
          if (currentDomain === void 0) {
            currentDomain = location.hostname;
          }
          if (defaultDomains === void 0) {
            defaultDomains = [
              'gigya.com',
              'cn1.sapcdm.cn',
              'localhost',
              window.gigya.defaultApiDomain,
            ];
          }
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
          for (
            var _i = 0, baseDomains_1 = baseDomains;
            _i < baseDomains_1.length;
            _i++
          ) {
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
              } else {
                return baseUri.domain;
              }
            }
          }
          // fallback to the parent's window domain (for backward compatibility).
          return originURI.domain;
        }
        exports.getBaseDomain = getBaseDomain;
        function resolveApiDomain(
          customApiDomainPrefix,
          baseDomain,
          dataCenter,
          defaultApiDomain
        ) {
          if (customApiDomainPrefix === void 0) {
            customApiDomainPrefix =
              window.gigya.partnerSettings &&
              window.gigya.partnerSettings.customAPIDomainPrefix;
          }
          if (baseDomain === void 0) {
            baseDomain = LocalInfo_1.localInfo.baseDomain;
          }
          if (dataCenter === void 0) {
            dataCenter = window.gigya.dataCenter;
          }
          if (defaultApiDomain === void 0) {
            defaultApiDomain = window.gigya.defaultApiDomain;
          }
          var _a;
          var apiDomain = getHostedPagesApiDomainCookie();
          if (apiDomain) {
            return apiDomain;
          }
          // TODO: remove once a solution will be found for hosted pages
          if (
            baseDomain.endsWith(
              ((_a = window.gigya._.config) === null || _a === void 0
                ? void 0
                : _a.hostedPagesDomain) || 'my.gigya-ext.com'
            )
          ) {
            return baseDomain;
          }
          if (
            customApiDomainPrefix &&
            baseDomain &&
            baseDomain !== defaultApiDomain
          ) {
            return customApiDomainPrefix + '.' + baseDomain;
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
          if (
            (_b =
              (_a = window.gigya.thisScript) === null || _a === void 0
                ? void 0
                : _a.globalConf) === null || _b === void 0
              ? void 0
              : _b['storageDomainOverride']
          ) {
            return window.gigya.thisScript.globalConf['storageDomainOverride'];
          }
          if (
            ((_c = window.gigya.thisScript) === null || _c === void 0
              ? void 0
              : _c.baseDomain) &&
            FlagService_1.FlagService.useGigyaJsBaseDomain
          ) {
            return window.gigya.thisScript.baseDomain;
          }
          var domain = window.gigya.defaultApiDomain;
          if (
            window.gigya.utils.stringUtils.endsWith(domain, 'sapcdm.cn') &&
            window.gigya.dataCenter !== 'cn1'
          ) {
            // special case with china domain staging
            domain = 'cn1.sapcdm.cn';
          }
          var prefix =
            window.gigya.dataCenter !== 'global'
              ? 'cdns.' + window.gigya.dataCenter
              : 'cdns';
          return prefix + '.' + domain;
        }
        exports.getStorageDomain = getStorageDomain;
        function getHostedPagesApiDomainCookie() {
          return cookie_1.default.get('pages_apiDomain_' + window.gigya.apiKey);
        }

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

    /***/ './src/core/Gigya.Js/app/Utils/gltexp.ts':
      /*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/gltexp.ts ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function isValid(gltexp) {
          return getMillis(gltexp) > Date.now();
        }
        exports.isValid = isValid;
        function getMax() {
          var gltexps = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            gltexps[_i] = arguments[_i];
          }
          if (!gltexps || !gltexps.length) return undefined;
          return gltexps.sort(function (gltexpA, gltexpB) {
            return getMillis(gltexpB) - getMillis(gltexpA);
          })[0];
        }
        exports.getMax = getMax;
        function getMillis(gltExp) {
          return !gltExp
            ? 0
            : Number(gltExp.substr(0, gltExp.indexOf('_'))) * 1000;
        }
        exports.getMillis = getMillis;

        /***/
      },

    /***/ './src/core/Gigya.Js/app/Utils/keyValue.ts':
      /*!*************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/keyValue.ts ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var URLUtils = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/URL */ './src/core/Gigya.Js/app/Utils/URL.ts'
        );
        var JSONUtils = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/JSON */ './src/core/Gigya.Js/app/Utils/JSON.ts'
        );
        var FlagService_1 = __webpack_require__(
          /*! ../Services/FlagService */ './src/core/Gigya.Js/app/Services/FlagService.ts'
        );
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
                  a.push(
                    p +
                      '=' +
                      URLUtils.URLEncode(JSONUtils.serialize(oKeyValue[p]))
                  );
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
        function deserialize(
          urlEncodedString,
          delimiter,
          keysToLower,
          useUnescape
        ) {
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
            } else {
              var key = pair.substr(0, eqPos);
              if (keysToLower) {
                key = key.toLowerCase();
              }
              var serializedValue = pair.substr(eqPos + 1).replace(/\+/g, ' ');
              try {
                if (useUnescape) {
                  o[key] = FlagService_1.FlagService.useDecodeURIComponent
                    ? compareResultsAndReturnURLDecode(serializedValue)
                    : unescape(serializedValue);
                } else {
                  o[key] = URLUtils.URLDecode(serializedValue);
                }
              } catch (ex) {
                o[key] = FlagService_1.FlagService.useDecodeURIComponent
                  ? URLUtils.URLDecode(serializedValue)
                  : unescape(serializedValue);
              }
            }
          }
          return o;
        }
        exports.deserialize = deserialize;
        function compareResultsAndReturnURLDecode(serializedValue) {
          var unescapedResult = unescape(serializedValue);
          var urlDecodeResult = URLUtils.URLDecode(serializedValue);
          unescapedResult.localeCompare(urlDecodeResult) !== 0 &&
            window.gigya.logger.report(
              'urlDecoder and unescaped have different values',
              {
                unescapedResult: unescapedResult,
                urlDecodeResult: urlDecodeResult,
              }
            );
          return urlDecodeResult;
        }

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

    /***/ './src/core/Gigya.Js/app/Utils/object.ts':
      /*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/object.ts ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function (
          __webpack_provided_Object_dot_assign
        ) {
          Object.defineProperty(exports, '__esModule', { value: true });
          var JSONUtils = __webpack_require__(
            /*! src/core/Gigya.Js/app/Utils/JSON */ './src/core/Gigya.Js/app/Utils/JSON.ts'
          );
          var toggles_1 = __webpack_require__(
            /*! ./toggles */ './src/core/Gigya.Js/app/Utils/toggles.ts'
          );
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
                if (!path) return undefined;
                var paths = path.split('.'),
                  current = context,
                  i;
                for (i = 0; i < paths.length; ++i) {
                  if (current[paths[i]] == undefined) {
                    return undefined;
                  } else {
                    current = current[paths[i]];
                  }
                }
                return current;
              },
            };
          }
          exports.expressionHelper = expressionHelper;
          function getPropertyBySerializedName(o, name, createMissingObjects) {
            if (!name) return o;
            var oResult = o;
            var arNameSegments = name.split('.');
            for (
              var iSegment = 0;
              iSegment < arNameSegments.length;
              iSegment++
            ) {
              var sSegment = arNameSegments[iSegment];
              var sIndex = null;
              //Support for array access. i.e. "obj.prop1[0].prop2"
              if (sSegment.match(/\[[0-9]+]/)) {
                sIndex = Number(
                  sSegment.match(/\[[0-9]+]/)[0].replace(/[\[\]]/g, '')
                );
              }
              sSegment = sSegment.split(/\[[0-9]+]/).join('');
              var res =
                (sIndex || sIndex === 0) && oResult[sSegment]
                  ? oResult[sSegment][sIndex]
                  : oResult[sSegment];
              if (createMissingObjects && !oResult[sSegment]) {
                oResult[sSegment] = {};
              } else if (createMissingObjects && !res && res !== false) {
                oResult[sSegment] = [];
              }
              if (res || res === false) {
                oResult = res;
              } else {
                return null;
              }
            }
            return oResult;
          }
          exports.getPropertyBySerializedName = getPropertyBySerializedName;
          function setPropertyBySerializedName(o, name, value) {
            var arNameSegments = name.split('.');
            var propertyName = arNameSegments.pop();
            getPropertyBySerializedName(o, arNameSegments.join('.'), true)[
              propertyName
            ] = value;
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
              if (typeof o[p] == 'object') s = JSONUtils.serialize(o[p], false);
              else if (o[p]) s = o[p].toString();
              ar.push(p + '=' + s);
            }
            return ar.sort().join('&');
          }
          exports.getHash = getHash;
          function getMurmurHash(key, seed) {
            if (!seed) seed = 0;
            var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;
            remainder = key.length & 3; // key.length % 4
            bytes = key.length - remainder;
            h1 = seed;
            c1 = 0xcc9e2d51;
            c2 = 0x1b873593;
            i = 0;
            while (i < bytes) {
              k1 =
                (key.charCodeAt(i) & 0xff) |
                ((key.charCodeAt(++i) & 0xff) << 8) |
                ((key.charCodeAt(++i) & 0xff) << 16) |
                ((key.charCodeAt(++i) & 0xff) << 24);
              ++i;
              k1 =
                ((k1 & 0xffff) * c1 + ((((k1 >>> 16) * c1) & 0xffff) << 16)) &
                0xffffffff;
              k1 = (k1 << 15) | (k1 >>> 17);
              k1 =
                ((k1 & 0xffff) * c2 + ((((k1 >>> 16) * c2) & 0xffff) << 16)) &
                0xffffffff;
              h1 ^= k1;
              h1 = (h1 << 13) | (h1 >>> 19);
              h1b =
                ((h1 & 0xffff) * 5 + ((((h1 >>> 16) * 5) & 0xffff) << 16)) &
                0xffffffff;
              h1 =
                (h1b & 0xffff) +
                0x6b64 +
                ((((h1b >>> 16) + 0xe654) & 0xffff) << 16);
            }
            k1 = 0;
            switch (remainder) {
              case 3:
                k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
              case 2:
                k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
              case 1:
                k1 ^= key.charCodeAt(i) & 0xff;
                k1 =
                  ((k1 & 0xffff) * c1 + ((((k1 >>> 16) * c1) & 0xffff) << 16)) &
                  0xffffffff;
                k1 = (k1 << 15) | (k1 >>> 17);
                k1 =
                  ((k1 & 0xffff) * c2 + ((((k1 >>> 16) * c2) & 0xffff) << 16)) &
                  0xffffffff;
                h1 ^= k1;
            }
            h1 ^= key.length;
            h1 ^= h1 >>> 16;
            h1 =
              ((h1 & 0xffff) * 0x85ebca6b +
                ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) &
              0xffffffff;
            h1 ^= h1 >>> 13;
            h1 =
              ((h1 & 0xffff) * 0xc2b2ae35 +
                ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16)) &
              0xffffffff;
            h1 ^= h1 >>> 16;
            return h1 >>> 0;
          }
          exports.getMurmurHash = getMurmurHash;
          function clone(
            obj,
            deepCopy,
            ignoreFunctions,
            maxLevel,
            level,
            ignoreContext
          ) {
            if (maxLevel === void 0) {
              maxLevel = 20;
            }
            if (level === void 0) {
              level = 0;
            }
            if (obj === window) return window; // do not clone the window object
            if (level > maxLevel) return null; // Too deep
            if (typeof obj == 'undefined' || obj == null) {
              return toggles_1.default.isOn('removeUndefinedProperties')
                ? obj
                : null;
            } else if (typeof obj == 'function' && ignoreFunctions) {
              return null;
            } else if (obj.constructor == Array) {
              var ar = [];
              for (var i = 0; i < obj.length; i++) {
                if (!ignoreFunctions || typeof obj[i] != 'function') {
                  if (deepCopy) {
                    ar[i] = clone(
                      obj[i],
                      deepCopy,
                      ignoreFunctions,
                      maxLevel,
                      level + 1,
                      ignoreContext
                    );
                  } else {
                    ar[i] = obj[i];
                  }
                }
              }
              return ar;
            } else if (typeof obj == 'object') {
              var o = {};
              for (var p in obj) {
                if (ignoreContext && p == 'context') continue;
                if (!ignoreFunctions || typeof obj[p] != 'function') {
                  if (deepCopy) {
                    o[p] = clone(
                      obj[p],
                      deepCopy,
                      ignoreFunctions,
                      maxLevel,
                      level + 1,
                      ignoreContext
                    );
                  } else {
                    o[p] = obj[p];
                  }
                }
              }
              return o;
            } else {
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
              } else {
                // Merge objects.
                if (!isDeepMerge) {
                  // Flat merge.
                  for (var p in args[i]) {
                    o[p] = args[i][p];
                  }
                } else {
                  // Deep merge.
                  for (var p in args[i]) {
                    //we override primitive / array
                    if (typeof o[p] !== 'object' || o[p] instanceof Array) {
                      o[p] = args[i][p];
                    } else {
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
            if (withBracket === void 0) {
              withBracket = false;
            }
            var result = {};
            function recurse(cur, prop) {
              if (Object(cur) !== cur) {
                result[prop] = cur;
              } else if (Array.isArray(cur)) {
                var l = cur.length;
                for (var i = 0; i < l; i++) {
                  var nestedProperty = withBracket
                    ? prop + '[' + i + ']'
                    : prop + '.' + i;
                  recurse(cur[i], prop ? nestedProperty : String(i));
                }
                if (l === 0) {
                  result[prop] = [];
                }
              } else {
                var isEmpty = true;
                for (var p in cur) {
                  isEmpty = false;
                  recurse(cur[p], prop ? prop + '.' + p : p);
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
            if (src == null) return;
            if (dest == null) dest = {};
            if (src.constructor == Array) {
              for (var iSrc = 0; iSrc < src.length; iSrc++) {
                extractProperties(src[iSrc], dest, schema);
              }
            } else if (schema) {
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
            } else {
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
            } catch (e) {}
            return undefined;
          }
          exports.parseToObject = parseToObject;
          function removePropertiesPrefix(obj, prefix) {
            if (obj === void 0) {
              obj = {};
            }
            if (prefix === void 0) {
              prefix = '';
            }
            return Object.keys(obj).reduce(function (acc, curr) {
              var _a;
              return __webpack_provided_Object_dot_assign(
                acc,
                ((_a = {}), (_a[curr.replace(prefix, '')] = obj[curr]), _a)
              );
            }, {});
          }
          exports.removePropertiesPrefix = removePropertiesPrefix;
          function addPrefixToProperties(obj, prefix) {
            if (obj === void 0) {
              obj = {};
            }
            if (prefix === void 0) {
              prefix = '';
            }
            return Object.keys(obj).reduce(function (acc, key) {
              if (key.indexOf(prefix) !== 0) {
                acc['' + prefix + key] = obj[key];
              } else {
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
          exports.normalizeObjectKeysToLowerCase =
            normalizeObjectKeysToLowerCase;
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

          /* WEBPACK VAR INJECTION */
        }).call(
          this,
          __webpack_require__(
            /*! tslib */ '../node_modules/tslib/tslib.es6.js'
          )['__assign']
        );

        /***/
      },

    /***/ './src/core/Gigya.Js/app/Utils/queue.ts':
      /*!**********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/queue.ts ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
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
            } else {
              services[service] = {
                active: false,
              };
            }
          }
          return services;
        }
        exports._servicesStatus = _servicesStatus;
        function isActive(service) {
          if (!_q[service]) return false;
          for (var id in _q[service].ids) return true;
          return false;
        }
        exports.isActive = isActive;
        function release(id, service) {
          window.gigya.logger.debug('releasing ' + service + ' queue by ' + id);
          if (!_q[service]) return;
          delete _q[service].ids[id];
          if (!isActive(service)) {
            var q = _q[service].q;
            _q[service].q = [];
            while (q.length > 0) {
              var o = q.splice(0, 1)[0];
              try {
                o.func.apply(this, o.args);
              } catch (ex) {
                if (typeof console == 'object' && console.log) {
                  console.log(
                    'Gigya: Exception while invoking queued method (' +
                      service +
                      ': ' +
                      id +
                      ')'
                  );
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
          window.gigya.logger.debug('locking queue ' + service + ' by ' + id);
          if (!_q[service]) _q[service] = { q: [], ids: {} };
          _q[service].ids[id] = true;
        }
        exports.hold = hold;
        function waitFor(service, fnc, args) {
          if (!_q[service]) _q[service] = { q: [], ids: {} };
          _q[service].q.push({ func: fnc, args: args });
        }
        exports.waitFor = waitFor;
        function queueForExecution(service, func, args) {
          args = args || [];
          if (isActive(service)) {
            waitFor(service, func, args);
          } else {
            func.apply(this, args);
          }
        }
        exports.queueForExecution = queueForExecution;

        /***/
      },

    /***/ './src/core/Gigya.Js/app/Utils/sessionCache.ts':
      /*!*****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/sessionCache.ts ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var JSONUtils = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/JSON */ './src/core/Gigya.Js/app/Utils/JSON.ts'
        );
        var queueUtils = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/queue */ './src/core/Gigya.Js/app/Utils/queue.ts'
        );
        var FlagService_1 = __webpack_require__(
          /*! ../Services/FlagService */ './src/core/Gigya.Js/app/Services/FlagService.ts'
        );
        var sessionStorageEnabled;
        try {
          sessionStorageEnabled = Boolean(window.sessionStorage); // when 3pc blocked, chrome throws when trying to access session storage.
        } catch (ex) {
          sessionStorageEnabled = false;
        }
        function set(key, response) {
          if (!sessionStorageEnabled) return;
          var oGigya;
          try {
            oGigya = JSONUtils.deserialize(
              window.sessionStorage.getItem('gigyaCache')
            );
            if (response == null && oGigya[key]) {
              delete oGigya[key];
            } else {
              var time = new Date().getTime();
              oGigya[key] = { response: response, time: time };
              if (key.indexOf('gig_oidcContext_') >= 0) {
                window.gigya.logger.report(
                  'oidc storage logs - set',
                  {
                    key: key,
                    value: oGigya[key],
                  },
                  false,
                  FlagService_1.FlagService.forceErrorReport
                );
              }
            }
            window.sessionStorage.setItem(
              'gigyaCache',
              JSONUtils.serialize(oGigya)
            );
          } catch (ex) {}
          queueUtils.release('cache', 'cache_' + key);
        }
        exports.set = set;
        function get(key, cacheTimeout) {
          if (cacheTimeout === void 0) {
            cacheTimeout = -1;
          }
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
                if (
                  cacheTimeout < 0 ||
                  cacheTimeout + cached.time > currentTime
                ) {
                  //cached
                  return cached.response;
                } else {
                  if (key.indexOf('gig_oidcContext_') >= 0) {
                    window.gigya.logger.report(
                      'oidc storage logs - get',
                      {
                        key: key,
                        value: oGigya[key],
                        cacheTime: cached.time,
                        currentTime: currentTime,
                      },
                      false,
                      FlagService_1.FlagService.forceErrorReport
                    );
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
            } else {
              //wait for first response
              queueUtils.waitFor('cache_' + key, get, arguments);
              return null;
            }
          } catch (ex) {}
          return null;
        }
        exports.get = get;
        function remove(key) {
          set(key, null);
        }
        exports.remove = remove;

        /***/
      },

    /***/ './src/core/Gigya.Js/app/Utils/stringUtils.ts':
      /*!****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/stringUtils.ts ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
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
          if (!find) return str;
          return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
        }
        exports.replaceAll = replaceAll;
        function mergeCommaSeparatedValues(str1, str2) {
          if (str1 === void 0) {
            str1 = '';
          }
          if (str2 === void 0) {
            str2 = '';
          }
          var arr = str1.concat(',', str2).split(',');
          return window.gigya.utils.array
            .getUniqueValues(arr)
            .filter(function (x) {
              return x;
            })
            .join(',');
        }
        exports.mergeCommaSeparatedValues = mergeCommaSeparatedValues;

        /***/
      },

    /***/ './src/core/Gigya.Js/app/Utils/toggles.ts':
      /*!************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/toggles.ts ***!
  \************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var objectUtils = __webpack_require__(
          /*! ./object */ './src/core/Gigya.Js/app/Utils/object.ts'
        );
        var WebSDKToggles = /** @class */ (function () {
          function WebSDKToggles() {}
          WebSDKToggles.prototype.has = function (key) {
            return typeof this._toggles[key] != 'undefined';
          };
          WebSDKToggles.prototype.get = function (key) {
            return this._toggles[key];
          };
          WebSDKToggles.prototype.isOn = function (key) {
            return this.has(key) && this.get(key);
          };
          Object.defineProperty(WebSDKToggles.prototype, '_toggles', {
            get: function () {
              return objectUtils.merge([
                this._globalConfToggles,
                this._webSdkConfigToggles,
              ]);
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(WebSDKToggles.prototype, '_globalConfToggles', {
            get: function () {
              var _a, _b;
              return (
                ((_b =
                  (_a = window.gigya.thisScript) === null || _a === void 0
                    ? void 0
                    : _a.globalConf) === null || _b === void 0
                  ? void 0
                  : _b.toggles) || {}
              );
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(
            WebSDKToggles.prototype,
            '_webSdkConfigToggles',
            {
              get: function () {
                var _a, _b;
                var toggles =
                  ((_b =
                    (_a = window.gigya._) === null || _a === void 0
                      ? void 0
                      : _a.config) === null || _b === void 0
                    ? void 0
                    : _b.toggles) || {};
                return Object.keys(toggles).reduce(function (newToggles, key) {
                  newToggles[key] = toggles[key] === 'on';
                  return newToggles;
                }, {});
              },
              enumerable: true,
              configurable: true,
            }
          );
          return WebSDKToggles;
        })();
        exports.default = new WebSDKToggles();

        /***/
      },

    /***/ './src/core/Gigya.Js/app/Utils/validation.ts':
      /*!***************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/validation.ts ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
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
          var anyUndefined = args.some(function (x) {
            return typeof x === 'undefined';
          });
          var anyDefined = args.some(function (x) {
            return typeof x !== 'undefined';
          });
          return (anyDefined && !anyUndefined) || (!anyDefined && anyUndefined);
        }
        exports.allDefinedOrAllUndefined = allDefinedOrAllUndefined;

        /***/
      },

    /***/ './src/core/ServiceProxy/ServiceProxy.ts':
      /*!***********************************************!*\
  !*** ./src/core/ServiceProxy/ServiceProxy.ts ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var utils = __webpack_require__(
          /*! src/core/ServiceProxy/utils */ './src/core/ServiceProxy/utils.ts'
        );
        var ServiceProxy = /** @class */ (function () {
          function ServiceProxy(
            url,
            timeout,
            _idCreator,
            _iframeCreator,
            getIframeHost,
            _win
          ) {
            var _this = this;
            if (timeout === void 0) {
              timeout = 60000;
            }
            if (_idCreator === void 0) {
              _idCreator = utils.generateId;
            }
            if (_iframeCreator === void 0) {
              _iframeCreator = utils.createIframe;
            }
            if (getIframeHost === void 0) {
              getIframeHost = function () {
                return new gigya.Promise(function (resolve) {
                  if (document.body) resolve(document.body);
                  else
                    document.addEventListener('DOMContentLoaded', function () {
                      return resolve(document.body);
                    });
                });
              };
            }
            if (_win === void 0) {
              _win = window;
            }
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
              if (
                msg &&
                _this._pendingReqs[msg.id] &&
                _this.validateOrigin(e.origin)
              ) {
                _this._pendingReqs[msg.id](msg);
                delete _this._pendingReqs[msg.id];
              }
            };
          }
          Object.defineProperty(ServiceProxy.prototype, 'isInit', {
            get: function () {
              return Boolean(this._iframe);
            },
            enumerable: true,
            configurable: true,
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
                  var timeoutId = _this._win.setTimeout(function () {
                    return reject('proxy init timeout');
                  }, _this.timeout);
                  var onInitResponse = function (e) {
                    if (_this.validateOrigin(e.origin)) {
                      var response = _this._tryParseResponse(e.data);
                      if (
                        response === null || response === void 0
                          ? void 0
                          : response.signal
                      ) {
                        _this._win.clearTimeout(timeoutId);
                        _this._win.removeEventListener(
                          'message',
                          onInitResponse,
                          true
                        );
                        switch (response.signal) {
                          case 'listening':
                            _this._win.addEventListener(
                              'message',
                              _this.onResponse,
                              true
                            );
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
            if (timeout === void 0) {
              timeout = this.timeout;
            }
            return new gigya.Promise(function (resolve, reject) {
              var timeoutId = _this._win.setTimeout(function () {
                reject('proxy request timeout');
              }, timeout);
              _this._pendingReqs[req.id] = function (e) {
                _this._win.clearTimeout(timeoutId);
                if (e.signal === 'error') {
                  reject(e.res);
                } else {
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
            if (forceClose === void 0) {
              forceClose = false;
            }
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
                    return [
                      4 /*yield*/,
                      this.postToIFrame({
                        id: this._idCreator(),
                        signal: 'stop',
                      }),
                    ];
                  case 3:
                    return [2 /*return*/, _a.sent()];
                  case 4:
                    e_1 = _a.sent();
                    error = e_1;
                    throw e_1;
                  case 5:
                    if (!error || forceClose) {
                      if (
                        this._mutationObservers &&
                        this._mutationObservers.length
                      ) {
                        // disconnect mutation observers, if any.
                        this.stopObservingIFrameRemoval();
                      }
                      this._win.removeEventListener(
                        'message',
                        this.onResponse,
                        true
                      );
                      this._iframeHost.removeChild(this._iframe);
                      delete this._iframe;
                    }
                    return [7 /*endfinally*/];
                  case 6:
                    return [2 /*return*/];
                }
              });
            });
          };
          ServiceProxy.prototype.wrapWith = function (type) {
            var keys;
            if (typeof type === 'function')
              keys = utils.getAllClassMethodsNames(type);
            else if (type instanceof Array) keys = type;
            else if (typeof type === 'object') keys = Object.keys(type);
            //.concat(getAllClassMethodsNames(Object.getPrototypeOf(type)));
            else throw 'unsupported type for wrapper';
            return this.proxyFromKeys(keys);
          };
          ServiceProxy.prototype.proxyFromKeys = function (keys) {
            var _this = this;
            var proxy = {};
            keys.forEach(function (key) {
              return (proxy[key] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
                }
                return _this.sendRequest(key, args);
              });
            });
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
              for (
                var _i = 0, mutationsList_1 = mutationsList;
                _i < mutationsList_1.length;
                _i++
              ) {
                var mutation = mutationsList_1[_i];
                if (
                  mutation.type == 'childList' &&
                  mutation.removedNodes.length
                ) {
                  // A child node has been removed.
                  for (var i = 0; i < mutation.removedNodes.length; i++) {
                    var removedNode = mutation.removedNodes.item(i);
                    if (removedNode === targetNode) {
                      window.gigya.logger.warn(
                        "### Gigya's service proxy has been unexpectedly detached from the DOM. " +
                          'This may cause unexpected behavior including a complete loss of service. ###'
                      );
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
            } catch (e) {
              window.gigya.logger.warn('received message with invalid format', {
                data: dataStr,
              });
            }
          };
          return ServiceProxy;
        })();
        exports.ServiceProxy = ServiceProxy;

        /***/
      },

    /***/ './src/core/ServiceProxy/utils.ts':
      /*!****************************************!*\
  !*** ./src/core/ServiceProxy/utils.ts ***!
  \****************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.getParentUrl = function (win, doc) {
          if (win === void 0) {
            win = window;
          }
          if (doc === void 0) {
            doc = document;
          }
          return win.location != win.parent.location
            ? doc.referrer
            : doc.location.href;
        };
        exports.getBodyElement = function (doc) {
          if (doc === void 0) {
            doc = document;
          }
          return new gigya.Promise(function (resolve) {
            if (doc.body) resolve(doc.body);
            else
              doc.addEventListener('DOMContentLoaded', function () {
                return resolve(doc.body);
              });
          });
        };
        exports.validateOrigin = function (origin, checked) {
          var _a;
          return (
            ((_a =
              origin === null || origin === void 0
                ? void 0
                : origin.toLowerCase()) === null || _a === void 0
              ? void 0
              : _a.indexOf(
                  checked === null || checked === void 0
                    ? void 0
                    : checked.toLowerCase()
                )) === 0
          );
        };
        exports.createIframe = function (title, doc) {
          if (title === void 0) {
            title = 'Gigya Frame';
          }
          if (doc === void 0) {
            doc = document;
          }
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
                .map(function (s) {
                  return s.toString();
                })
                .sort()
                .filter(function (p, i, arr) {
                  return (
                    typeof proto[p] === 'function' && //only the methods
                    p !== 'constructor' && //not the constructor
                    (i == 0 || p !== arr[i - 1]) && //not overriding in this prototype
                    props.indexOf(p) === -1
                  );
                });
              props = props.concat(l);
            } catch (e) {
              /** bug fix implementation - using custom our own filter logic
             case of Array.filter polyfill causing "can not read property '0' of undefined" **/
              var arr = Object.getOwnPropertyNames(proto)
                // .concat(Object.getOwnPropertySymbols(proto).map(s => s.toString()))
                .map(function (s) {
                  return s.toString();
                })
                .sort();
              var l = [];
              for (var i = 0; i < arr.length; i++) {
                var p = arr[i];
                if (
                  typeof proto[p] === 'function' && //only the methods
                  p !== 'constructor' && //not the constructor
                  (i == 0 || p !== arr[i - 1]) && //not overriding in this prototype
                  props.indexOf(p) === -1
                ) {
                  //not overridden in a child
                  l.push(p);
                }
              }
              props = props.concat(l);
            }
          } while (
            (proto = Object.getPrototypeOf(proto)) && //walk-up the prototype chain
            Object.getPrototypeOf(proto) //not the the Object prototype methods (hasOwnProperty, etc...)
          );
          return props;
        };

        /***/
      },

    /***/ './src/fidm/Gigya.JS.SSO/app/globalProvider.ts':
      /*!*****************************************************!*\
  !*** ./src/fidm/Gigya.JS.SSO/app/globalProvider.ts ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var GlobalProvider = /** @class */ (function () {
          function GlobalProvider() {}
          GlobalProvider.prototype.documentLocation = function () {
            return document.location;
          };
          GlobalProvider.prototype.postMessageToParent = function (
            message,
            targetOrigin,
            transfer
          ) {
            window.parent.postMessage(message, targetOrigin, transfer);
          };
          return GlobalProvider;
        })();
        exports.GlobalProvider = GlobalProvider;
        exports.default = new GlobalProvider();

        /***/
      },

    /***/ './src/fidm/Gigya.JS.SSO/app/sso.ts':
      /*!******************************************!*\
  !*** ./src/fidm/Gigya.JS.SSO/app/sso.ts ***!
  \******************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var GSErrors_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/GSErrors */ './src/core/Gigya.Js/app/GSErrors.ts'
        );
        var ssoUtils_1 = __webpack_require__(
          /*! src/fidm/Gigya.JS.SSO/app/ssoUtils */ './src/fidm/Gigya.JS.SSO/app/ssoUtils.ts'
        );
        var Sso = /** @class */ (function () {
          function Sso(
            _apiKey,
            _siteApiKey,
            _ssoSegment,
            _ssoConfig,
            _utils,
            _storage
          ) {
            var _this = this;
            if (_ssoConfig === void 0) {
              _ssoConfig = {
                validDomains: [],
                logoutURLs: {},
                canaryCookiesNames: {
                  isCanary: 'gig_isCanary',
                  version: 'gig_canary_ver',
                },
              };
            }
            if (_utils === void 0) {
              _utils = new ssoUtils_1.SsoUtils();
            }
            if (_storage === void 0) {
              _storage = _utils.getCookiesStorage();
            }
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
                      console.log('gigya sso: invalid use');
                      return [2 /*return*/];
                    } else if (
                      !this._utils.isValidDomain(
                        this._ssoConfig.validDomains,
                        this._requestDomain
                      )
                    ) {
                      console.log(
                        'gigya sso: ' +
                          this._requestDomain +
                          ' is not in valid domain: ' +
                          this._ssoConfig.validDomains.join(',')
                      );
                      return [2 /*return*/];
                    }
                    _a = params.m;
                    switch (_a) {
                      case 'logout':
                        return [3 /*break*/, 1];
                      case 'removeToken':
                        return [3 /*break*/, 3];
                      case 'getToken':
                        return [3 /*break*/, 5];
                      case 'setToken':
                        return [3 /*break*/, 7];
                      case 'setGroupContext':
                        return [3 /*break*/, 9];
                      case 'setLoginTokenExp':
                        return [3 /*break*/, 11];
                      case 'getLoginTokenExp':
                        return [3 /*break*/, 13];
                      case 'checkTokenRenew':
                        return [3 /*break*/, 15];
                      case 'syncCanaryIndication':
                        return [3 /*break*/, 17];
                      case 'setGroupApiDomain':
                        return [3 /*break*/, 19];
                      case 'getGroupApiDomain':
                        return [3 /*break*/, 21];
                    }
                    return [3 /*break*/, 23];
                  case 1:
                    return [4 /*yield*/, this.logout()];
                  case 2:
                    response = _b.sent();
                    return [3 /*break*/, 24];
                  case 3:
                    return [4 /*yield*/, this.removeToken()];
                  case 4:
                    _b.sent();
                    return [3 /*break*/, 24];
                  case 5:
                    return [4 /*yield*/, this.getToken()];
                  case 6:
                    response = _b.sent();
                    return [3 /*break*/, 24];
                  case 7:
                    return [
                      4 /*yield*/,
                      this.setToken(
                        params.lt,
                        String(params.expiration),
                        params.gltexp
                      ),
                    ];
                  case 8:
                    _b.sent();
                    return [3 /*break*/, 24];
                  case 9:
                    return [
                      4 /*yield*/,
                      this.setGroupContext(params.groupContext),
                    ];
                  case 10:
                    _b.sent();
                    return [3 /*break*/, 24];
                  case 11:
                    return [
                      4 /*yield*/,
                      this.setTokenExpiration(params.loginTokenExp),
                    ];
                  case 12:
                    response = _b.sent();
                    return [3 /*break*/, 24];
                  case 13:
                    return [4 /*yield*/, this.getTokenExpiration()];
                  case 14:
                    response = _b.sent();
                    return [3 /*break*/, 24];
                  case 15:
                    return [
                      4 /*yield*/,
                      this.checkTokenRenew(params.loginToken),
                    ];
                  case 16:
                    response = _b.sent();
                    return [3 /*break*/, 24];
                  case 17:
                    return [
                      4 /*yield*/,
                      this.syncCanaryIndication(
                        params.isCanary,
                        params.canaryVersion
                      ),
                    ];
                  case 18:
                    response = _b.sent();
                    return [3 /*break*/, 24];
                  case 19:
                    return [4 /*yield*/, this.setGroupApiDomain(params.domain)];
                  case 20:
                    _b.sent();
                    return [3 /*break*/, 24];
                  case 21:
                    return [4 /*yield*/, this.getGroupApiDomain()];
                  case 22:
                    response = _b.sent();
                    return [3 /*break*/, 24];
                  case 23:
                    response = {
                      errorCode: GSErrors_1.GSErrors.INVALID_API_METHOD,
                    };
                    _b.label = 24;
                  case 24:
                    this._utils.sendMessage(
                      response,
                      this._callbackID,
                      this._requestDomain
                    );
                    return [2 /*return*/];
                }
              });
            });
          };
          Sso.prototype.getGroupApiDomain = function () {
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var domain;
              return tslib_1.__generator(this, function (_a) {
                domain = this._storage.getItem('apiDomain_' + this._apiKey);
                return [
                  2 /*return*/,
                  {
                    errorCode: GSErrors_1.GSErrors.OK,
                    domain: domain,
                  },
                ];
              });
            });
          };
          Sso.prototype.setGroupApiDomain = function (domain) {
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              return tslib_1.__generator(this, function (_a) {
                this._storage.setItem('apiDomain_' + this._apiKey, domain);
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
                    this._storage.removeItem(this._storageKey + '_visited');
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
                this._storage.removeItem(this._storageKey + '_exp');
                this._storage.removeItem(this._storageKey + '_gltexp');
                this._storage.removeItem(this._storageKey + '_session');
                this._storage.removeItem(this._storageKey + '_context');
                return [2 /*return*/];
              });
            });
          };
          Sso.prototype.getToken = function () {
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var errorCode,
                lt,
                storageExp,
                exp,
                twoYearFromNow,
                gltexp,
                groupContext,
                inSession,
                response;
              return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    errorCode = 0;
                    lt = this._storage.getItem(this._storageKey);
                    storageExp = this._storage.getItem(
                      this._storageKey + '_exp'
                    );
                    if (storageExp === 'undefined') {
                      exp = Date.now() - 1000;
                    } else {
                      exp = Number(storageExp);
                      twoYearFromNow =
                        Date.now() + 1000 * 60 * 60 * 24 * 365 * 2;
                      if (exp > twoYearFromNow) {
                        exp = Date.now() - 1000;
                      }
                    }
                    gltexp = this._storage.getItem(
                      this._storageKey + '_gltexp'
                    );
                    groupContext = this._storage.getItem(
                      this._storageKey + '_context'
                    );
                    inSession =
                      gltexp ||
                      this._storage.getItem(this._storageKey + '_session') ===
                        '1';
                    if (
                      !(
                        !isNaN(exp) &&
                        ((exp === 0 && !inSession) ||
                          (exp > 0 && new Date().getTime() > exp))
                      )
                    )
                      return [3 /*break*/, 2];
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
                      return [
                        2 /*return*/,
                        {
                          errorCode: GSErrors_1.GSErrors.UNAUTHORIZED_USER,
                        },
                      ];
                    } else {
                      this._markSiteVisited();
                    }
                    response = {
                      errorCode: errorCode,
                      login_token: lt,
                      expires_in:
                        exp === 0
                          ? 0
                          : Math.round((exp - new Date().getTime()) / 1000),
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
                    oldToken =
                      (_a = this._storage.getItem(this._storageKey)) === null ||
                      _a === void 0
                        ? void 0
                        : _a.split('|')[0];
                    if (lt !== oldToken) {
                      this._markRevokedLoginToken(oldToken);
                    }
                    if (lt) {
                      this._storage.setItem(this._storageKey, lt);
                    }
                    if (expiration) {
                      expiresIn =
                        typeof expiration === 'string' && expiration
                          ? Number(expiration)
                          : expiration;
                      if (expiresIn === 0) {
                        // Session cookie or dynamic session cookie.
                        // Either way, flag the expiration as 0.
                        expiration = 0;
                      } else {
                        expiresInMs = void 0;
                        if (!expiresIn || expiresIn === -2) {
                          expiresInMs = 1000 * 60 * 60 * 24 * 365;
                        } else {
                          expiresInMs = Number(expiresIn) * 1000;
                        }
                        // Convert expires in milliseconds to an a timestamp (also milliseconds).
                        expiresIn = Date.now() + expiresInMs;
                      }
                      this._storage.setItem(
                        this._storageKey + '_exp',
                        '' + expiresIn
                      );
                      if (expiration === 0) {
                        this._storage.setItem(
                          this._storageKey + '_session',
                          '1',
                          0
                        );
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
                  case 4:
                    return [2 /*return*/];
                }
              });
            });
          };
          Sso.prototype.setGroupContext = function (groupContext) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              return tslib_1.__generator(this, function (_a) {
                this._storage.setItem(
                  this._storageKey + '_context',
                  JSON.stringify(groupContext)
                );
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
                    if (!!this._utils.isValidGltExp(gltexp))
                      return [3 /*break*/, 1];
                    this._storage.removeItem(this._storageKey + '_gltexp');
                    gltexp = null;
                    return [3 /*break*/, 3];
                  case 1:
                    _b = (_a = this._utils).getMaxGltExp;
                    _c = [gltexp];
                    return [4 /*yield*/, this.getTokenExpiration()];
                  case 2:
                    gltexp = _b.apply(_a, _c.concat([_d.sent().gltexp]));
                    this._storage.setItem(this._storageKey + '_gltexp', gltexp);
                    this._storage.removeItem(this._storageKey + '_exp');
                    _d.label = 3;
                  case 3:
                    return [
                      2 /*return*/,
                      {
                        errorCode: GSErrors_1.GSErrors.OK,
                        gltexp: gltexp,
                      },
                    ];
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
                  return [
                    2 /*return*/,
                    {
                      errorCode: GSErrors_1.GSErrors.UNAUTHORIZED_USER,
                    },
                  ];
                }
                return [
                  2 /*return*/,
                  {
                    errorCode: GSErrors_1.GSErrors.OK,
                    gltexp: this._storage.getItem(this._storageKey + '_gltexp'),
                  },
                ];
              });
            });
          };
          Sso.prototype.checkTokenRenew = function (loginToken) {
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var groupToken, invalidTokens, isInvalid;
              return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4 /*yield*/, this.getToken()];
                  case 1:
                    groupToken = _a.sent();
                    invalidTokens =
                      this._storage.getItem(
                        this._storageKey + '_revoked_tokens'
                      ) || '';
                    isInvalid = invalidTokens.indexOf(loginToken) >= 0;
                    if (!!isInvalid) return [3 /*break*/, 3];
                    return [4 /*yield*/, this.setToken(loginToken)];
                  case 2:
                    _a.sent();
                    return [
                      2 /*return*/,
                      { errorCode: GSErrors_1.GSErrors.OK },
                    ];
                  case 3:
                    if (
                      groupToken.errorCode === GSErrors_1.GSErrors.OK &&
                      invalidTokens.indexOf(groupToken.login_token) < 0
                    ) {
                      // just changing the error code - but returning the same session info of the group
                      groupToken.errorCode =
                        GSErrors_1.GSErrors.TOKEN_HAS_RENEWED;
                      return [2 /*return*/, groupToken];
                    } else {
                      return [
                        2 /*return*/,
                        { errorCode: GSErrors_1.GSErrors.INVALID_TOKEN },
                      ];
                    }
                    _a.label = 4;
                  case 4:
                    return [2 /*return*/];
                }
              });
            });
          };
          Sso.prototype.syncCanaryIndication = function (
            isCanary,
            versionSignature
          ) {
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var SSOIsCanary,
                SSOVersionSignature,
                response,
                siteCanaryVersion,
                SSOCanaryVersion;
              return tslib_1.__generator(this, function (_a) {
                if (!this._canaryKey || !this._canaryVerKey) {
                  return [
                    2 /*return*/,
                    {
                      errorCode: GSErrors_1.GSErrors.INVALID_ENVIRONMENT_CONFIG,
                    },
                  ];
                }
                SSOIsCanary = this._storage.getItem(this._canaryKey);
                SSOVersionSignature = this._storage.getItem(this._canaryVerKey);
                response = {
                  errorCode: GSErrors_1.GSErrors.OK,
                  isCanary: isCanary,
                  canaryVersion: versionSignature,
                };
                if (
                  !this._utils
                    .validations()
                    .allDefinedOrAllUndefined(SSOIsCanary, SSOVersionSignature)
                ) {
                  // not legal
                  response.errorCode =
                    GSErrors_1.GSErrors.INVALID_PARAMETER_VALUE;
                  return [2 /*return*/, response];
                }
                if (
                  !this._utils
                    .validations()
                    .allDefinedOrAllUndefined(isCanary, versionSignature)
                ) {
                  // not legal
                  return [
                    2 /*return*/,
                    {
                      errorCode: GSErrors_1.GSErrors.INVALID_PARAMETER_VALUE,
                      isCanary: SSOIsCanary,
                      canaryVersion: SSOVersionSignature,
                    },
                  ];
                }
                siteCanaryVersion =
                  this._parseCanaryVersionSignature(versionSignature);
                SSOCanaryVersion =
                  this._parseCanaryVersionSignature(SSOVersionSignature);
                if (siteCanaryVersion.timestamp > SSOCanaryVersion.timestamp) {
                  this._storage.setItem(this._canaryKey, isCanary);
                  this._storage.setItem(this._canaryVerKey, versionSignature);
                } else {
                  response.isCanary = SSOIsCanary;
                  response.canaryVersion = SSOVersionSignature;
                }
                return [2 /*return*/, response];
              });
            });
          };
          Sso.prototype._markSiteVisited = function () {
            var visitedStorageKey = this._storageKey + '_visited';
            var visited = this._storage.getItem(visitedStorageKey) || '';
            if (visited.indexOf(this._siteApiKey) === -1) {
              visited += ',' + this._siteApiKey;
            }
            this._storage.setItem(visitedStorageKey, visited);
          };
          Sso.prototype._markRevokedLoginToken = function (loginToken) {
            if (!loginToken) return;
            var invalidTokensStorageKey = this._storageKey + '_revoked_tokens';
            var invalidTokens =
              this._storage.getItem(invalidTokensStorageKey) || '';
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
            var visited = this._storage.getItem(this._storageKey + '_visited');
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
            return (
              name +
              '_' +
              this._apiKey +
              (this._ssoSegment ? '_' + this._ssoSegment : '')
            );
          };
          Sso.prototype._parseCanaryVersionSignature = function (
            canaryVersionSig
          ) {
            var defaultData = { build: 0, probability: 0, timestamp: -1 };
            if (!canaryVersionSig) return defaultData;
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
        })();
        exports.Sso = Sso;

        /***/
      },

    /***/ './src/fidm/Gigya.JS.SSO/app/ssoUtils.ts':
      /*!***********************************************!*\
  !*** ./src/fidm/Gigya.JS.SSO/app/ssoUtils.ts ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var Uri_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/Uri */ './src/core/Gigya.Js/app/Utils/Uri.ts'
        );
        var validationUtils = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/validation */ './src/core/Gigya.Js/app/Utils/validation.ts'
        );
        var globalProvider_1 = __webpack_require__(
          /*! ./globalProvider */ './src/fidm/Gigya.JS.SSO/app/globalProvider.ts'
        );
        var localStorage_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/localStorage */ './src/core/Gigya.Js/app/Utils/localStorage.ts'
        );
        var keyValue_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/keyValue */ './src/core/Gigya.Js/app/Utils/keyValue.ts'
        );
        var gltexp_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/gltexp */ './src/core/Gigya.Js/app/Utils/gltexp.ts'
        );
        var URL_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/URL */ './src/core/Gigya.Js/app/Utils/URL.ts'
        );
        var defaultValidDomains = [
          'gigya-api.com',
          'gigya-api.cn',
          'gigya.com',
          'my.gigya-ext.com',
          'localhost',
        ];
        var SsoUtils = /** @class */ (function () {
          function SsoUtils(_global, _defaultValidDomains) {
            if (_global === void 0) {
              _global = globalProvider_1.default;
            }
            if (_defaultValidDomains === void 0) {
              _defaultValidDomains = defaultValidDomains;
            }
            this._global = _global;
            this._defaultValidDomains = _defaultValidDomains;
          }
          SsoUtils.prototype.getPageUrl = function () {
            return this._global.documentLocation().toString();
          };
          SsoUtils.prototype.isValidDomain = function (
            validDomains,
            candidate
          ) {
            var domain = Uri_1.Uri.parse(candidate).domain;
            var arValidDomains = validDomains.concat(this._defaultValidDomains);
            for (var i = 0; i < arValidDomains.length; i++) {
              var validDomain = arValidDomains[i]
                .replace('*', '')
                .split(':')[0];
              var indexOfValidDomain = domain.indexOf(validDomain);
              if (
                indexOfValidDomain >= 0 &&
                indexOfValidDomain === domain.length - validDomain.length &&
                (indexOfValidDomain === 0 ||
                  domain.charAt(indexOfValidDomain - 1) === '.' ||
                  domain.charAt(indexOfValidDomain - 1) === '/')
              ) {
                return true;
              }
            }
            return false;
          };
          SsoUtils.prototype.sendMessage = function (
            res,
            callbackID,
            requestDomain
          ) {
            var strMessage = '';
            for (var p in res) {
              if (res[p] != null) {
                strMessage += escape(
                  p + '=' + encodeURIComponent(res[p]) + '&'
                );
              }
            }
            this._global.postMessageToParent(
              callbackID + '=' + strMessage,
              requestDomain
            );
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
            return localStorage_1.initializeAdapter(
              localStorage_1.CookieStorageAdapter
            );
          };
          SsoUtils.prototype.validations = function () {
            return validationUtils;
          };
          SsoUtils.prototype.UriFactory = function (url, isAbsolute) {
            if (isAbsolute === void 0) {
              isAbsolute = true;
            }
            return new Uri_1.Uri(url, isAbsolute);
          };
          SsoUtils.prototype.getFragment = function () {
            var pageURL = this.getPageUrl();
            if (pageURL.indexOf('#') !== -1) {
              return pageURL.split('#')[1];
            }
            return null;
          };
          return SsoUtils;
        })();
        exports.SsoUtils = SsoUtils;

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5QYWdlcy9hcHAvUGFnZXNQbHVnaW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5QYWdlcy9hcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5QYWdlcy9hcHAvcGFnZXMvQmFzZVBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5QYWdlcy9hcHAvcGFnZXMvRGV2aWNlUmVnaXN0cmF0aW9uUGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlBhZ2VzL2FwcC9wYWdlcy9HZW5lcmljUGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlBhZ2VzL2FwcC9wYWdlcy9PSURDTG9naW5QYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uUGFnZXMvYXBwL3BhZ2VzL1Byb2ZpbGVVcGRhdGVQYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uUGFnZXMvYXBwL3BhZ2VzL1JlcXVpcmVTZXNzaW9uUGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlBhZ2VzL2FwcC9wYWdlcy9SZXNldFBhc3N3b3JkUGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlBhZ2VzL2FwcC9wYWdlcy9TQU1MTG9naW5QYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uUGFnZXMvYXBwL3BhZ2VzL1NTT0xvZ2luUGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlBhZ2VzL2FwcC9wYWdlcy9TaXRlTG9naW5QYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uUGFnZXMvYXBwL3BhZ2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uUGFnZXMvYXBwL3R5cGVzL2NvbnN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlBhZ2VzL2FwcC90eXBlcy90ZW1sYXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlBhZ2VzL2FwcC91dGlscy9BbmFseXRpY3MvSG9zdGVkUGFnZUFuYWx5dGljcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlBhZ2VzL2FwcC91dGlscy9BbmFseXRpY3MvSG9zdGVkUGFnZUFuYWx5dGljc0V2ZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlBhZ2VzL2FwcC91dGlscy9kb21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9BcGlTZXJ2aWNlL2FwcC9SZXF1ZXN0UHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuQWRhcHRlcnMuV2ViL2FwcC9Tc29TZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLkFkYXB0ZXJzLldlYi9hcHAvVG9rZW5TdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1BsdWdpblN0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvQmFzZU9iamVjdC9JQmFzZU9iamVjdENvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvRmxvdy9GbG93LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9GbG93L2FjdGl2aXRpZXMvQWN0aXZpdHlMaWJyYXJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9GbG93L2FjdGl2aXRpZXMvQmFzZUFjdGl2aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9GbG93L2FjdGl2aXRpZXMvRXZlbnRBY3Rpdml0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvRmxvdy9hY3Rpdml0aWVzL0luaXRBY3Rpdml0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvRmxvdy9hY3Rpdml0aWVzL1NjcmVlblNldEFjdGl2aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9GbG93L2ludGVyZmFjZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL0dTRXJyb3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Hb29nbGVBbmFseXRpY3MvR29vZ2xlQW5hbHl0aWNzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2NhbEluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1NlcnZpY2VzL0ZsYWdTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9TZXJ2aWNlcy9TZXNzaW9uU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvSlNPTi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvVVJMLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9VcmkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2Nvb2tpZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvZG9tYWlucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvZ2xvYmFsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9nbHRleHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2tleVZhbHVlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9sb2NhbFN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL29iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvcXVldWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3Nlc3Npb25DYWNoZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvc3RyaW5nVXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3RvZ2dsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3ZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvU2VydmljZVByb3h5L1NlcnZpY2VQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9TZXJ2aWNlUHJveHkvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZG0vR2lneWEuSlMuU1NPL2FwcC9nbG9iYWxQcm92aWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlkbS9HaWd5YS5KUy5TU08vYXBwL3Nzby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlkbS9HaWd5YS5KUy5TU08vYXBwL3Nzb1V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLHlCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTs7QUFFTztBQUNQO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBOztB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QUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUV2RCxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7SUFDN0MsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQy9CLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDVixFQUFFLEdBQUcsVUFBVSxDQUFDO0lBQ2hCLEVBQUUsR0FBRyxVQUFVLENBQUM7SUFDaEIsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVOLE9BQU8sQ0FBQyxHQUFHLEtBQUssRUFBRTtRQUNkLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDcEosRUFBRSxDQUFDLENBQUM7UUFFSixFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDL0UsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUUvRSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ1QsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUM5RSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQzdFO0lBRUQsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUVQLFFBQVEsU0FBUyxFQUFFO1FBQ2YsS0FBSyxDQUFDO1lBQ0YsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9DLEtBQUssQ0FBQztZQUNGLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxLQUFLLENBQUM7WUFDRixFQUFFLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7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O1FBQzFCLE9BQU8sd0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLDhCQUFXLEdBQWxCLFVBQW1CLEtBQWE7UUFDNUIsT0FBTyxzQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSxvQ0FBaUIsR0FBeEI7UUFDSSxPQUFPLGdDQUFpQixDQUFDLG1DQUFvQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLDhCQUFXLEdBQWxCO1FBQ0ksT0FBTyxlQUFlLENBQUM7SUFDM0IsQ0FBQztJQUVNLDZCQUFVLEdBQWpCLFVBQWtCLEdBQVcsRUFBRSxVQUFpQjtRQUFqQiw4Q0FBaUI7UUFDNUMsT0FBTyxJQUFJLFNBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLDhCQUFXLEdBQWxCO1FBQ0ksSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWxDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM3QixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEM7UUFFQSxPQUFPLElBQUksQ0FBQztJQUNqQixDQUFDO0lBQUEsQ0FBQztJQUNOLGVBQUM7QUFBRCxDQUFDO0FBeEVZLDRCQUFRIiwiZmlsZSI6ImdpZ3lhLnNlcnZpY2VzLmFjY291bnRzLnBsdWdpbnMucGFnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uUGFnZXMvYXBwL2luZGV4LnRzXCIpO1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZVBsdWdpbiB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvQmFzZVBsdWdpbic7XG5pbXBvcnQgeyBJUGx1Z2luQ29uZmlnIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9pbnRlcmZhY2VzL0lQbHVnaW5Db25maWcnO1xuaW1wb3J0IHsgSVBsdWdpbkNTUyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luQ1NTJztcbmltcG9ydCB7IElQbHVnaW5UZW1wbGF0ZXMgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2ludGVyZmFjZXMvSVBsdWdpblRlbXBsYXRlcyc7XG5pbXBvcnQgeyBQbHVnaW5TdHlsZSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvUGx1Z2luU3R5bGVzJztcbmltcG9ydCB7IElJbmplY3Rpb25JbmZvIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0FQSS9VaUFwaSc7XG5pbXBvcnQgeyBEZXZpY2VUeXBlcyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9CYXNlT2JqZWN0L0lCYXNlT2JqZWN0Q29uZmlnJztcbmltcG9ydCB7IEdvb2dsZUFuYWx5dGljcyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Hb29nbGVBbmFseXRpY3MvR29vZ2xlQW5hbHl0aWNzJztcbmltcG9ydCB7IEJhc2VQYWdlIH0gZnJvbSAnLi9wYWdlcy9CYXNlUGFnZSc7XG5pbXBvcnQgeyBMb2dpblR5cGUsIFBhZ2VUeXBlIH0gZnJvbSAnLi90eXBlcy9jb25zdHMnO1xuaW1wb3J0IHsgSG9zdGVkUGFnZUFuYWx5dGljcyB9IGZyb20gJy4vdXRpbHMvQW5hbHl0aWNzL0hvc3RlZFBhZ2VBbmFseXRpY3MnO1xuaW1wb3J0IHsgSUlkZW50aXR5Rmxvd3NDb25maWcsIElQYWdlQW5hbHl0aWNzQ29uZmlnIH0gZnJvbSAnLi91dGlscy9BbmFseXRpY3MvSUhvc3RlZFBhZ2VBbmFseXRpY3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQYWdlIHtcbiAgICBuZXcocGFyYW1zOiBJUGFnZXNQYXJhbXMpOiBCYXNlUGFnZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUGFnZXNQYXJhbXMge1xuICAgIHR5cGU6IFBhZ2VUeXBlO1xuICAgIHNjcmVlblNldDogc3RyaW5nO1xuICAgIGNvbnRhaW5lcklEOiBzdHJpbmc7XG4gICAgc3RhcnRTY3JlZW4/OiBzdHJpbmc7XG4gICAgbG9naW5Vcmk/OiBzdHJpbmc7XG4gICAgZ29vZ2xlQW5hbHl0aWNzQ29uZmlnPzogSVBhZ2VBbmFseXRpY3NDb25maWc7XG4gICAgaWRlbnRpdHlGbG93c0NvbmZpZz86IElJZGVudGl0eUZsb3dzQ29uZmlnO1xuICAgIGVycm9yVXJpPzogc3RyaW5nO1xufVxuXG5jb25zdCBCYXNlUGx1Z2luR2xvYmFsOiB0eXBlb2YgQmFzZVBsdWdpbiA9IGdpZ3lhLl8ucGx1Z2lucy5CYXNlUGx1Z2luO1xuZXhwb3J0IGNsYXNzIFBhZ2VzUGx1Z2luIGV4dGVuZHMgQmFzZVBsdWdpbkdsb2JhbDxJUGFnZXNQYXJhbXMsIElQbHVnaW5UZW1wbGF0ZXMsIElQbHVnaW5DU1M+e1xuICAgIHByaXZhdGUgc3RhdGljIFBhZ2VMaWJyYXJ5ID0gbmV3IE1hcDxzdHJpbmcsIElQYWdlPigpO1xuXG4gICAgcHVibGljIHN0YXRpYyBpbmplY3Rpb25JbmZvKCk6IElJbmplY3Rpb25JbmZvIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICdwYWdlcycsXG4gICAgICAgICAgICBuYW1lc3BhY2U6ICdhY2NvdW50cycsXG4gICAgICAgICAgICBtZXRob2ROYW1lOiAnaW5pdEhvc3RlZFBhZ2UnLFxuICAgICAgICAgICAganNOYW1lOiAnZ2lneWEuc2VydmljZXMuYWNjb3VudHMucGx1Z2lucy5wYWdlcycsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvbmZpZygpOiBJUGx1Z2luQ29uZmlnPElQYWdlc1BhcmFtcz4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVxdWlyZWRQYXJhbXM6IFsndHlwZScsICdzY3JlZW5TZXQnLCAnY29udGFpbmVySUQnXSxcbiAgICAgICAgICAgIGRlZmF1bHRQYXJhbXM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBQYWdlVHlwZS5Mb2dpbixcbiAgICAgICAgICAgICAgICBzY3JlZW5TZXQ6ICcnLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcklEOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZmF1bHREZXZpY2VUeXBlOiBEZXZpY2VUeXBlcy5hdXRvLFxuICAgICAgICAgICAgaGFzTW9iaWxlVUk6IGZhbHNlLFxuICAgICAgICAgICAgYWxsb3dNb2RhbDogdHJ1ZSxcbiAgICAgICAgICAgIGRpc2FibGVNb2RhbENvbnRhaW5lckluaXQ6IHRydWUsXG4gICAgICAgICAgICBkZWZhdWx0RGlhbG9nU3R5bGU6IFBsdWdpblN0eWxlLm1vZGVybixcbiAgICAgICAgICAgIHN1cHBvcnRzUmVzcG9uc2l2ZTogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBpbml0KGNhbGxiYWNrOiAoaXNTdWNjZXNzOiBib29sZWFuKSA9PiB2b2lkKSB7XG5cbiAgICAgICAgY29uc3QgeyBnb29nbGVBbmFseXRpY3NDb25maWcgfSA9IHRoaXMucGFyYW1zID8/IHt9O1xuXG4gICAgICAgIGlmIChnb29nbGVBbmFseXRpY3NDb25maWc/LmlzQWN0aXZlID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEdBbmFseXRpY3MoZ29vZ2xlQW5hbHl0aWNzQ29uZmlnKVxuICAgICAgICB9ICAgICAgICBcbiAgICAgICBcbiAgICAgICAgY29uc3QgUGFnZSA9IFBhZ2VzUGx1Z2luLmdldFBhZ2VJbXBsZW1lbnRhdGlvbih0aGlzLnBhcmFtcy50eXBlKTtcblxuICAgICAgICBuZXcgUGFnZSh0aGlzLnBhcmFtcykuc3RhcnQoY2FsbGJhY2spO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhZGRQYWdlVG9MaWJyYXJ5KHR5cGU6IHN0cmluZywgcGFnZTogSVBhZ2UpIHtcbiAgICAgICAgUGFnZXNQbHVnaW4uUGFnZUxpYnJhcnlbdHlwZV0gPSBwYWdlO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldFBhZ2VJbXBsZW1lbnRhdGlvbih0eXBlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09IFBhZ2VUeXBlLkxvZ2luKSB7XG4gICAgICAgICAgICByZXR1cm4gUGFnZXNQbHVnaW4uUGFnZUxpYnJhcnlbUGFnZXNQbHVnaW4uZ2V0TG9naW5UeXBlKCldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQYWdlc1BsdWdpbi5QYWdlTGlicmFyeVt0eXBlXSB8fCBQYWdlc1BsdWdpbi5QYWdlTGlicmFyeVtQYWdlVHlwZS5HZW5lcmljXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRMb2dpblR5cGUoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gZ2lneWEudXRpbHMuVVJMLmdldFBhcmFtc0Zyb21VUkwoZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh1cmxQYXJhbXNbJ2dpZ19zc29Ub2tlbiddKSB7XG4gICAgICAgICAgICByZXR1cm4gTG9naW5UeXBlLlNTTztcbiAgICAgICAgfVxuICAgICAgICBpZiAodXJsUGFyYW1zWydzYW1sQ29udGV4dCddKSB7XG4gICAgICAgICAgICByZXR1cm4gTG9naW5UeXBlLlNBTUw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVybFBhcmFtc1snY29udGV4dCddKSB7XG4gICAgICAgICAgICByZXR1cm4gTG9naW5UeXBlLk9JREM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIExvZ2luVHlwZS5TaXRlTG9naW47XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0R0FuYWx5dGljcyhnb29nbGVBbmFseXRpY3NDb25maWc6IElQYWdlQW5hbHl0aWNzQ29uZmlnKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgcGFnZUFuYWx5dGljc0NvbmZpZyA9IG5ldyBIb3N0ZWRQYWdlQW5hbHl0aWNzKGdvb2dsZUFuYWx5dGljc0NvbmZpZywgZ2lneWEpXG5cbiAgICAgICAgbmV3IEdvb2dsZUFuYWx5dGljcyhnb29nbGVBbmFseXRpY3NDb25maWcsIFtwYWdlQW5hbHl0aWNzQ29uZmlnXSkuc3RhcnQoKVxuICAgIH1cbn1cbiIsImltcG9ydCB7UGFnZXNQbHVnaW59IGZyb20gJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uUGFnZXMvYXBwL1BhZ2VzUGx1Z2luJztcbmltcG9ydCAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5QYWdlcy9hcHAvcGFnZXMvR2VuZXJpY1BhZ2UnO1xuaW1wb3J0ICdzcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlBhZ2VzL2FwcC9wYWdlcy9TaXRlTG9naW5QYWdlJztcbmltcG9ydCAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5QYWdlcy9hcHAvcGFnZXMvU1NPTG9naW5QYWdlJztcbmltcG9ydCAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5QYWdlcy9hcHAvcGFnZXMvU0FNTExvZ2luUGFnZSc7XG5pbXBvcnQgJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uUGFnZXMvYXBwL3BhZ2VzL09JRENMb2dpblBhZ2UnO1xuaW1wb3J0ICdzcmMvYWNjb3VudHMvR2lneWEuSnMuUGx1Z2luLlBhZ2VzL2FwcC9wYWdlcy9Qcm9maWxlVXBkYXRlUGFnZSc7XG5pbXBvcnQgJ3NyYy9hY2NvdW50cy9HaWd5YS5Kcy5QbHVnaW4uUGFnZXMvYXBwL3BhZ2VzL1Jlc2V0UGFzc3dvcmRQYWdlJztcbmltcG9ydCAnc3JjL2FjY291bnRzL0dpZ3lhLkpzLlBsdWdpbi5QYWdlcy9hcHAvcGFnZXMvRGV2aWNlUmVnaXN0cmF0aW9uUGFnZSc7XG5cbmRlY2xhcmUgY29uc3QgZ2lneWE6IGFueTtcbmlmICghZ2lneWEuXykge1xuICAgIGdpZ3lhLl8gPSB7fTtcbn1cbmlmICghZ2lneWEuXy5wbHVnaW5zKSB7XG4gICAgZ2lneWEuXy5wbHVnaW5zID0ge307XG59XG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy5QYWdlcykge1xuICAgIGdpZ3lhLl8ucGx1Z2lucy5QYWdlcyA9IHt9O1xufVxuXG5PYmplY3QuYXNzaWduKGdpZ3lhLl8ucGx1Z2lucy5QYWdlcywge1xuICAgIFBhZ2VzUGx1Z2luXG59KTtcblxuZXhwb3J0IHtJUGFnZXNQYXJhbXMsIElQYWdlfSBmcm9tICcuL1BhZ2VzUGx1Z2luJztcbmV4cG9ydCB7UGFnZVR5cGV9IGZyb20gJy4vdHlwZXMvY29uc3RzJztcbmV4cG9ydCB7R2VuZXJpY1BhZ2UsIFNpdGVMb2dpblBhZ2UsIFNTT0xvZ2luUGFnZSwgU0FNTExvZ2luUGFnZSwgT0lEQ0xvZ2luUGFnZSwgUHJvZmlsZVVwZGF0ZVBhZ2UsIFJlc2V0UGFzc3dvcmRQYWdlLCBEZXZpY2VSZWdpc3RyYXRpb25QYWdlICwgUmVxdWlyZVNlc3Npb25QYWdlLCBCYXNlUGFnZX0gZnJvbSAnLi9wYWdlcyc7XG5leHBvcnQgY29uc3QgcGFnZXM9ICgpPT4gZ2lneWEuXy5wbHVnaW5zLlBhZ2VzIGFzIFBhZ2VzUGx1Z2luO1xuZXhwb3J0IGRlZmF1bHQgUGFnZXNQbHVnaW47XG5cbiIsImltcG9ydCB7SVBhZ2VzUGFyYW1zfSBmcm9tICcuLi9QYWdlc1BsdWdpbic7XG5pbXBvcnQge2Vycm9yTWVzc2FnZVRlbXBsYXRlfSBmcm9tICcuLi90eXBlcy90ZW1sYXRlcyc7XG5pbXBvcnQge0lFdmVudE1hcENvbmZpZ30gZnJvbSAnLi4vdXRpbHMvQW5hbHl0aWNzL0lIb3N0ZWRQYWdlQW5hbHl0aWNzJztcbmltcG9ydCBHU0Vycm9ycyA9IGdpZ3lhLkdTRXJyb3JzO1xuaW1wb3J0IHtpc1RydXN0ZWREb21haW59IGZyb20gJy4uL3V0aWxzL2RvbWFpbic7XG5pbXBvcnQgeyBGbG93IH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0Zsb3cvRmxvdyc7XG5pbXBvcnQgeyByZW1vdmVVbmRlZmluZWQgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvb2JqZWN0JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VQYWdlIHtcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIHBhcmFtczogSVBhZ2VzUGFyYW1zKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IHN0YXJ0KGNhbGxiYWNrOiAoaXNTdWNjZXNzOiBib29sZWFuKSA9PiB2b2lkKTtcblxuICAgIHByb3RlY3RlZCBzaG93UGFnZVNjcmVlblNldChwYXJhbXM6IGFueSwgY2FsbGJhY2s6IChpc1N1Y2Nlc3M6IGJvb2xlYW4pID0+IHZvaWQpIHtcbiAgICAgICAgY29uc3Qge3N0YXJ0U2NyZWVuLCBzY3JlZW5TZXR9ID0gdGhpcy5wYXJhbXM7ICAgICAgICBcblxuICAgICAgICB0aGlzLmFkZEhvc3RlZFBhZ2VzRXZlbnRzTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgY29uc3Qgc2hvd1NjcmVlblNldFBhcmFtcyA9IHtcbiAgICAgICAgICAgIHN0YXJ0U2NyZWVuLFxuICAgICAgICAgICAgc2NyZWVuU2V0LFxuICAgICAgICAgICAgLi4udGhpcy5nZXRCYXNpY1NjcmVlblNldFBhcmFtcygpLFxuICAgICAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICAgICAgY2FsbGJhY2s6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5lcnJvckNvZGUgIT09IEdTRXJyb3JzLk9LKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKHJlcy5lcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMuZXJyb3JDb2RlID09PSAwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGdpZ3lhLmFjY291bnRzLnNob3dTY3JlZW5TZXQoe1xuICAgICAgICAgICAgLi4uc2hvd1NjcmVlblNldFBhcmFtc1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgZ2V0QmFzaWNTY3JlZW5TZXRQYXJhbXMoKSB7ICAgICAgXG4gICAgICAgIGNvbnN0IHBhcmFtc0Zyb21VUkwgPSBnaWd5YS51dGlscy5VUkwuZ2V0UGFyYW1zRnJvbVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7IFxuXG4gICAgICAgIHJldHVybiByZW1vdmVVbmRlZmluZWQoe1xuICAgICAgICAgICAgY29udGFpbmVySUQ6IHRoaXMucGFyYW1zPy5jb250YWluZXJJRCxcbiAgICAgICAgICAgIGxhbmc6IHBhcmFtc0Zyb21VUkxbXCJsYW5nXCJdXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVkaXJlY3RUb1JlZGlyZWN0VXJpKCkge1xuICAgICAgICBjb25zdCB1cmxQYXJhbSA9IGdpZ3lhLmdldFVybFBhcmFtKCdyZWRpcmVjdFVSSScpO1xuICAgICAgICBpZiAodXJsUGFyYW0pIHtcbiAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0VVJJID0gZGVjb2RlVVJJQ29tcG9uZW50KHVybFBhcmFtKTtcbiAgICAgICAgICAgIGlmIChpc1RydXN0ZWREb21haW4ocmVkaXJlY3RVUkkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdChyZWRpcmVjdFVSSSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKCdJbnZhbGlkIHJlZGlyZWN0IFVSSScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2hvd0Vycm9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5wYXJhbXMuZXJyb3JVcmkpIHtcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3QodGhpcy5wYXJhbXMuZXJyb3JVcmkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qge3NjcmVlblNldCwgY29udGFpbmVySUR9ID0gdGhpcy5wYXJhbXM7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NvbnRhaW5lcklEfWApO1xuICAgICAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGdpZ3lhLmFjY291bnRzLmhpZGVTY3JlZW5TZXQoe3NjcmVlblNldCwgY29udGFpbmVySUR9KTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwoZXJyb3JNZXNzYWdlVGVtcGxhdGUsIHttZXNzYWdlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25TdWNjZXNzKGV2ZW50OiBhbnkpIHtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25FcnJvcihldmVudDogYW55KSB7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uTG9naW4oZXZlbnQ6IGFueSkge1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkxvZ291dChldmVudDogYW55KSB7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZGlyZWN0KHBhdGg6IHN0cmluZykge1xuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRoO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBvbkFmdGVyTG9naW4oZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnBhcmFtcz8uaWRlbnRpdHlGbG93c0NvbmZpZz8uc2VsZWN0ZWRGbG93Py5pZCkge1xuICAgICAgICBjb25zdCBmbG93SWQgPSB0aGlzLnBhcmFtcy5pZGVudGl0eUZsb3dzQ29uZmlnLnNlbGVjdGVkRmxvdy5pZDtcbiAgICAgICAgY29uc3Qgc2NyZWVuU2V0UGFyYW1zID0gdGhpcy5nZXRCYXNpY1NjcmVlblNldFBhcmFtcygpO1xuICAgICAgICBjb25zdCBsb2dpbkhhbmRsZXIgPSB0aGlzLm9uTG9naW4uYmluZCh0aGlzLCBldmVudCk7IC8vIEJpbmQgdGhlIGZ1bmN0aW9uIHRvIHRoZSBCYXNlUGFnZSBpbnN0YW5jZVxuICAgICAgICBjb25zdCBmbG93ID0gbmV3IEZsb3coZmxvd0lkLCB7IHNjcmVlblNldFBhcmFtcyB9LCBsb2dpbkhhbmRsZXIpO1xuXG4gICAgICAgIGZsb3cuZXhlY3V0ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vbkxvZ2luKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgICAgIFxuXG4gICAgcHJpdmF0ZSBvbkFmdGVyU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudD8ucmVzcG9uc2U/LmVycm9yQ29kZSA9PT0gR1NFcnJvcnMuT0spIHtcbiAgICAgICAgICAgIHRoaXMub25TdWNjZXNzKGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25FcnJvcihldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEhvc3RlZFBhZ2VzRXZlbnRzTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb25maWc6IElFdmVudE1hcENvbmZpZyA9IHtcbiAgICAgICAgICAgIGlkOiAnaG9zdGVkLXBhZ2VzLWV2ZW50cy1saXN0ZW5lcnMnLFxuICAgICAgICAgICAgZGVmYXVsdE1ldGhvZDogKGV2ZW50KSA9PiB7fSxcbiAgICAgICAgICAgIGV2ZW50TWFwOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBldmVudHM6ICdhZnRlclN1Ym1pdCcsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3M6IFtlID0+IGVdLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFmdGVyU3VibWl0KGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuXG4gICAgICAgIGdpZ3lhLmRlZmF1bHRFdmVudE1hcHM/LnB1c2goY29uZmlnKTtcblxuICAgICAgICBnaWd5YS5hY2NvdW50cy5hZGRFdmVudEhhbmRsZXJzKHtcbiAgICAgICAgICAgIG9uTG9naW46IGUgPT4gdGhpcy5vbkFmdGVyTG9naW4oZSksXG4gICAgICAgICAgICBvbkxvZ291dDogZSA9PiB0aGlzLm9uTG9nb3V0KGUpXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7SVBhZ2VzUGFyYW1zLCBQYWdlc1BsdWdpbn0gZnJvbSAnLi4vUGFnZXNQbHVnaW4nO1xuaW1wb3J0IHtQYWdlVHlwZX0gZnJvbSAnLi4vdHlwZXMvY29uc3RzJztcbmltcG9ydCB7UmVxdWlyZVNlc3Npb25QYWdlfSBmcm9tICcuL1JlcXVpcmVTZXNzaW9uUGFnZSc7XG5cbmV4cG9ydCBjbGFzcyBEZXZpY2VSZWdpc3RyYXRpb25QYWdlIGV4dGVuZHMgUmVxdWlyZVNlc3Npb25QYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IElQYWdlc1BhcmFtcykge1xuICAgICAgICBzdXBlcihwYXJhbXMpO1xuICAgIH1cbn1cblxuUGFnZXNQbHVnaW4uYWRkUGFnZVRvTGlicmFyeShQYWdlVHlwZS5EZXZpY2VSZWdpc3RyYXRpb24sIERldmljZVJlZ2lzdHJhdGlvblBhZ2UpO1xuIiwiaW1wb3J0IHtCYXNlUGFnZX0gZnJvbSAnLi9CYXNlUGFnZSc7XG5pbXBvcnQge0lQYWdlc1BhcmFtcywgUGFnZXNQbHVnaW59IGZyb20gJy4uL1BhZ2VzUGx1Z2luJztcbmltcG9ydCB7UGFnZVR5cGV9IGZyb20gJy4uL3R5cGVzL2NvbnN0cyc7XG5cbmV4cG9ydCBjbGFzcyBHZW5lcmljUGFnZSBleHRlbmRzIEJhc2VQYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IElQYWdlc1BhcmFtcykge1xuICAgICAgICBzdXBlcihwYXJhbXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydChjYWxsYmFjazogKGlzU3VjY2VzczogYm9vbGVhbikgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLnNob3dQYWdlU2NyZWVuU2V0KHt9LCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlZGlyZWN0VG9Mb2dpblBhZ2Uod2l0aFJldHVyblVybCA9IGZhbHNlKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5sb2dpblVyaSkge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gdGhpcy5wYXJhbXMubG9naW5VcmkgKyAod2l0aFJldHVyblVybCA/IGA/cmVkaXJlY3RVUkk9JHtlbmNvZGVVUklDb21wb25lbnQodGhpcy5jdXJyZW50TG9jYXRpb24pfWA6ICcnKTtcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3QodXJsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKCdNaXNzaW5nIGxvZ2luIFVSSScpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRMb2NhdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uU3VjY2VzcyhldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMucmVkaXJlY3RUb1JlZGlyZWN0VXJpKClcbiAgICB9XG59XG5cblBhZ2VzUGx1Z2luLmFkZFBhZ2VUb0xpYnJhcnkoUGFnZVR5cGUuR2VuZXJpYywgR2VuZXJpY1BhZ2UpO1xuIiwiaW1wb3J0IHtCYXNlUGFnZX0gZnJvbSAnLi9CYXNlUGFnZSc7XG5pbXBvcnQge0lQYWdlc1BhcmFtcywgUGFnZXNQbHVnaW59IGZyb20gJy4uL1BhZ2VzUGx1Z2luJztcbmltcG9ydCB7TG9naW5UeXBlfSBmcm9tICcuLi90eXBlcy9jb25zdHMnO1xuXG5leHBvcnQgY2xhc3MgT0lEQ0xvZ2luUGFnZSBleHRlbmRzIEJhc2VQYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IElQYWdlc1BhcmFtcykge1xuICAgICAgICBzdXBlcihwYXJhbXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzdGFydChjYWxsYmFjazogKGlzU3VjY2VzczogYm9vbGVhbikgPT4gdm9pZCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2lneWEuZ2V0VXJsUGFyYW0oJ21vZGUnKTtcblxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJmb3JjZUxvZ2luXCI6XG4gICAgICAgICAgICAgICAgYXdhaXQgZ2lneWEuXy5hcGlBZGFwdGVycy53ZWIudG9rZW5TdG9yZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNhc2UgXCJsb2dpblwiOlxuICAgICAgICAgICAgY2FzZSBcInBhc3NpdmVMb2dpblwiOlxuICAgICAgICAgICAgICAgIHRoaXMub2lkY0xvZ2luKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImFmdGVyQ29uc2VudFwiOlxuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gaGFuZGxlIGNvbnNlbnQgaW4gdGhlIGZlYXR1cmUuLi5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImVycm9yXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yKHF1ZXJ5UGFyYW1zLmdldCgnZXJyb3JNZXNzYWdlJykpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uTG9naW4oZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLm9pZGNDb250aW51ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb2lkY0xvZ2luKGNhbGxiYWNrOiAoaXNTdWNjZXNzOiBib29sZWFuKSA9PiB2b2lkKSB7XG4gICAgICAgIGdpZ3lhLmhhc1Nlc3Npb24oKS50aGVuKHNlc3Npb25FeGlzdCA9PiB7XG4gICAgICAgICAgICBpZiAoc2Vzc2lvbkV4aXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vaWRjQ29udGludWUoKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UGFnZVNjcmVlblNldCh7fSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9pZGNDb250aW51ZSgpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGdpZ3lhLmdldFVybFBhcmFtKCdjb250ZXh0Jyk7XG4gICAgICAgIGNvbnN0IGxvZ2luVG9rZW4gPSBnaWd5YS5fLmFwaUFkYXB0ZXJzLndlYi50b2tlblN0b3JlLmdldCgpO1xuICAgICAgICBnaWd5YS5maWRtLm9pZGMub3AucmVkaXJlY3RUb0NvbnRpbnVlKHtcbiAgICAgICAgICAgIG9wS2V5OiBnaWd5YS5hcGlLZXksXG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgbG9naW5fdG9rZW46IGxvZ2luVG9rZW5cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5QYWdlc1BsdWdpbi5hZGRQYWdlVG9MaWJyYXJ5KExvZ2luVHlwZS5PSURDLCBPSURDTG9naW5QYWdlKTtcbiIsImltcG9ydCB7SVBhZ2VzUGFyYW1zLCBQYWdlc1BsdWdpbn0gZnJvbSAnLi4vUGFnZXNQbHVnaW4nO1xuaW1wb3J0IHtQYWdlVHlwZX0gZnJvbSAnLi4vdHlwZXMvY29uc3RzJztcbmltcG9ydCB7UmVxdWlyZVNlc3Npb25QYWdlfSBmcm9tICcuL1JlcXVpcmVTZXNzaW9uUGFnZSc7XG5cbmV4cG9ydCBjbGFzcyBQcm9maWxlVXBkYXRlUGFnZSBleHRlbmRzIFJlcXVpcmVTZXNzaW9uUGFnZSB7XG4gICAgY29uc3RydWN0b3IocGFyYW1zOiBJUGFnZXNQYXJhbXMpIHtcbiAgICAgICAgc3VwZXIocGFyYW1zKTtcbiAgICB9XG59XG5cblBhZ2VzUGx1Z2luLmFkZFBhZ2VUb0xpYnJhcnkoUGFnZVR5cGUuUHJvZmlsZVVwZGF0ZSwgUHJvZmlsZVVwZGF0ZVBhZ2UpO1xuIiwiaW1wb3J0IHtJUGFnZXNQYXJhbXN9IGZyb20gJy4uL1BhZ2VzUGx1Z2luJztcbmltcG9ydCB7R2VuZXJpY1BhZ2V9IGZyb20gJy4vR2VuZXJpY1BhZ2UnO1xuXG5leHBvcnQgY2xhc3MgUmVxdWlyZVNlc3Npb25QYWdlIGV4dGVuZHMgR2VuZXJpY1BhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogSVBhZ2VzUGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN0YXJ0KGNhbGxiYWNrOiAoaXNTdWNjZXNzOiBib29sZWFuKSA9PiB2b2lkKSB7XG4gICAgICAgIGdpZ3lhLmhhc1Nlc3Npb24oKS50aGVuKHNlc3Npb25FeGlzdCA9PiB7XG4gICAgICAgICAgICBpZiAoc2Vzc2lvbkV4aXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UGFnZVNjcmVlblNldCh7fSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0VG9Mb2dpblBhZ2UodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkxvZ291dChldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMucmVkaXJlY3RUb0xvZ2luUGFnZSh0cnVlKVxuICAgIH1cbn1cbiIsImltcG9ydCB7SVBhZ2VzUGFyYW1zLCBQYWdlc1BsdWdpbn0gZnJvbSAnLi4vUGFnZXNQbHVnaW4nO1xuaW1wb3J0IHtHZW5lcmljUGFnZX0gZnJvbSAnLi9HZW5lcmljUGFnZSc7XG5pbXBvcnQge1BhZ2VUeXBlfSBmcm9tICcuLi90eXBlcy9jb25zdHMnO1xuXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZFBhZ2UgZXh0ZW5kcyBHZW5lcmljUGFnZSB7XG4gICAgY29uc3RydWN0b3IocGFyYW1zOiBJUGFnZXNQYXJhbXMpIHtcbiAgICAgICAgc3VwZXIocGFyYW1zKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoY2FsbGJhY2s6IChpc1N1Y2Nlc3M6IGJvb2xlYW4pID0+IHZvaWQpIHtcbiAgICAgICAgY29uc3QgcHdydCA9IGdpZ3lhLmdldFVybFBhcmFtKCdwd3J0Jyk7XG4gICAgICAgIGlmICghcHdydCkge1xuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2VTY3JlZW5TZXQoe30sIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuUGFnZXNQbHVnaW4uYWRkUGFnZVRvTGlicmFyeShQYWdlVHlwZS5SZXNldFBhc3N3b3JkLCBSZXNldFBhc3N3b3JkUGFnZSk7XG4iLCJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tICcuL0Jhc2VQYWdlJztcbmltcG9ydCB7SVBhZ2VzUGFyYW1zLCBQYWdlc1BsdWdpbn0gZnJvbSAnLi4vUGFnZXNQbHVnaW4nO1xuaW1wb3J0IElDYW5jZWxTU09QYXJhbXMgPSBnaWd5YS5maWRtLnNhbWwuSUNhbmNlbFNTT1BhcmFtcztcbmltcG9ydCB7TG9naW5UeXBlfSBmcm9tICcuLi90eXBlcy9jb25zdHMnO1xuXG5leHBvcnQgY2xhc3MgU0FNTExvZ2luUGFnZSBleHRlbmRzIEJhc2VQYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXM6IElQYWdlc1BhcmFtcykge1xuICAgICAgICBzdXBlcihwYXJhbXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzdGFydChjYWxsYmFjazogKGlzU3VjY2VzczogYm9vbGVhbikgPT4gdm9pZCkge1xuICAgICAgICBjb25zdCBtb2RlID0gZ2lneWEuZ2V0VXJsUGFyYW0oJ21vZGUnKTtcbiAgICAgICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICAgICAgICBjYXNlICdsb2dpbic6XG4gICAgICAgICAgICBjYXNlICdwYXNzaXZlTG9naW4nOlxuICAgICAgICAgICAgICAgIHRoaXMuc2FtbExvZ2luKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FmdGVyTG9naW4nOlxuICAgICAgICAgICAgICAgIHRoaXMuc2FtbENvbnRpbnVlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ2ZvcmNlTG9naW4nOlxuICAgICAgICAgICAgICAgIGF3YWl0IGdpZ3lhLl8uYXBpQWRhcHRlcnMud2ViLnRva2VuU3RvcmUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UGFnZVNjcmVlblNldCh7fSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdjYW5jZWwnOlxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbmNlbFBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQ29kZTogZ2lneWEuZ2V0VXJsUGFyYW0oJ2NhbmNlbENvZGUnKSB8fCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiBnaWd5YS5nZXRVcmxQYXJhbSgnc3RhdHVzQ29kZScpIHx8IG51bGwsXG4gICAgICAgICAgICAgICAgfSBhcyBJQ2FuY2VsU1NPUGFyYW1zO1xuICAgICAgICAgICAgICAgIGdpZ3lhLmZpZG0uc2FtbC5jYW5jZWxTU08oY2FuY2VsUGFyYW1zLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ2xvZ291dCc6XG4gICAgICAgICAgICAgICAgZ2lneWEuZmlkbS5zYW1sLmxvZ291dFNTTyh7fSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkxvZ2luKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5zYW1sQ29udGludWUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNhbWxMb2dpbihjYWxsYmFjazogKGlzU3VjY2VzczogYm9vbGVhbikgPT4gdm9pZCkge1xuICAgICAgICBnaWd5YS5oYXNTZXNzaW9uKCkudGhlbihzZXNzaW9uRXhpc3QgPT4ge1xuICAgICAgICAgICAgaWYgKHNlc3Npb25FeGlzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2FtbENvbnRpbnVlKCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2VTY3JlZW5TZXQoe30sIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzYW1sQ29udGludWUoKSB7XG4gICAgICAgIGdpZ3lhLmZpZG0uc2FtbC5jb250aW51ZVNTTyh7fSwgZmFsc2UpO1xuICAgIH1cbn1cblxuUGFnZXNQbHVnaW4uYWRkUGFnZVRvTGlicmFyeShMb2dpblR5cGUuU0FNTCwgU0FNTExvZ2luUGFnZSk7XG4iLCJpbXBvcnQge0Jhc2VQYWdlfSBmcm9tICcuL0Jhc2VQYWdlJztcbmltcG9ydCB7SVBhZ2VzUGFyYW1zLCBQYWdlc1BsdWdpbn0gZnJvbSAnLi4vUGFnZXNQbHVnaW4nO1xuaW1wb3J0IHtMb2dpblR5cGV9IGZyb20gJy4uL3R5cGVzL2NvbnN0cyc7XG5cbmV4cG9ydCBjbGFzcyBTU09Mb2dpblBhZ2UgZXh0ZW5kcyBCYXNlUGFnZSB7XG4gICAgY29uc3RydWN0b3IocGFyYW1zOiBJUGFnZXNQYXJhbXMpIHtcbiAgICAgICAgc3VwZXIocGFyYW1zKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoY2FsbGJhY2s6IChpc1N1Y2Nlc3M6IGJvb2xlYW4pID0+IHZvaWQpIHtcbiAgICAgICAgZ2lneWEuaGFzU2Vzc2lvbigpLnRoZW4oc2Vzc2lvbkV4aXN0ID0+IHtcbiAgICAgICAgICAgaWYgKHNlc3Npb25FeGlzdCkge1xuICAgICAgICAgICAgICAgZ2lneWEuc3NvLmNvbnRpbnVlKCk7XG4gICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIGNvbnN0IGdpZ1BhcmFtcyA9IGdpZ3lhLnV0aWxzLlVSTC5nZXRHaWdQYXJhbXNGcm9tVVJMKHsgdXJsOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLCByZW1vdmVQcmVmaXg6IHRydWUgfSk7XG4gICAgICAgICAgICAgICBkZWxldGUgZ2lnUGFyYW1zWydzc29Ub2tlbiddO1xuICAgICAgICAgICAgICAgdGhpcy5zaG93UGFnZVNjcmVlblNldChnaWdQYXJhbXMsIGNhbGxiYWNrKVxuICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkxvZ2luKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgZ2lneWEuc3NvLmNvbnRpbnVlKCk7XG4gICAgfVxufVxuXG5QYWdlc1BsdWdpbi5hZGRQYWdlVG9MaWJyYXJ5KExvZ2luVHlwZS5TU08sIFNTT0xvZ2luUGFnZSk7XG4iLCJpbXBvcnQge0lQYWdlc1BhcmFtcywgUGFnZXNQbHVnaW59IGZyb20gJy4uL1BhZ2VzUGx1Z2luJztcbmltcG9ydCB7TG9naW5UeXBlfSBmcm9tICcuLi90eXBlcy9jb25zdHMnO1xuaW1wb3J0IHtCYXNlUGFnZX0gZnJvbSAnLi9CYXNlUGFnZSc7XG5cbmV4cG9ydCBjbGFzcyBTaXRlTG9naW5QYWdlIGV4dGVuZHMgQmFzZVBhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtczogSVBhZ2VzUGFyYW1zKSB7XG4gICAgICAgIHN1cGVyKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KGNhbGxiYWNrOiAoaXNTdWNjZXNzOiBib29sZWFuKSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuc2hvd1BhZ2VTY3JlZW5TZXQoe30sIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2dpbihldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMucmVkaXJlY3RUb1JlZGlyZWN0VXJpKCk7XG4gICAgfVxufVxuXG5QYWdlc1BsdWdpbi5hZGRQYWdlVG9MaWJyYXJ5KExvZ2luVHlwZS5TaXRlTG9naW4sIFNpdGVMb2dpblBhZ2UpO1xuIiwiZXhwb3J0IHtCYXNlUGFnZX0gZnJvbSAnLi9CYXNlUGFnZSc7XG5leHBvcnQge0dlbmVyaWNQYWdlfSBmcm9tICcuL0dlbmVyaWNQYWdlJztcbmV4cG9ydCB7UmVxdWlyZVNlc3Npb25QYWdlfSBmcm9tICcuL1JlcXVpcmVTZXNzaW9uUGFnZSc7XG5leHBvcnQge0RldmljZVJlZ2lzdHJhdGlvblBhZ2V9IGZyb20gJy4vRGV2aWNlUmVnaXN0cmF0aW9uUGFnZSc7XG5leHBvcnQge09JRENMb2dpblBhZ2V9IGZyb20gJy4vT0lEQ0xvZ2luUGFnZSc7XG5leHBvcnQge1NBTUxMb2dpblBhZ2V9IGZyb20gJy4vU0FNTExvZ2luUGFnZSc7XG5leHBvcnQge1NpdGVMb2dpblBhZ2V9IGZyb20gJy4vU2l0ZUxvZ2luUGFnZSc7XG5leHBvcnQge1NTT0xvZ2luUGFnZX0gZnJvbSAnLi9TU09Mb2dpblBhZ2UnO1xuZXhwb3J0IHtQcm9maWxlVXBkYXRlUGFnZX0gZnJvbSAnLi9Qcm9maWxlVXBkYXRlUGFnZSc7XG5leHBvcnQge1Jlc2V0UGFzc3dvcmRQYWdlfSBmcm9tICcuL1Jlc2V0UGFzc3dvcmRQYWdlJztcbiIsImV4cG9ydCBlbnVtIFBhZ2VUeXBlIHtcbiAgICBHZW5lcmljID0gJ2dlbmVyaWMnLFxuICAgIExvZ2luID0gJ2xvZ2luJyxcbiAgICBQcm9maWxlVXBkYXRlID0gJ3Byb2ZpbGVVcGRhdGUnLFxuICAgIFJlc2V0UGFzc3dvcmQgPSAncmVzZXRQYXNzd29yZCcsXG4gICAgRGV2aWNlUmVnaXN0cmF0aW9uID0gJ2RldmljZVJlZ2lzdHJhdGlvbicsXG4gICAgRXJyb3IgPSAnZXJyb3InXG59XG5cbmV4cG9ydCBlbnVtIExvZ2luVHlwZSB7XG4gICAgU2l0ZUxvZ2luID0gJ3NpdGVMb2dpbicsXG4gICAgU1NPID0gJ3Nzb0xvZ2luJyxcbiAgICBPSURDID0gJ29pZGNMb2dpbicsXG4gICAgU0FNTCA9ICdzYW1sTG9naW4nXG59XG4iLCJleHBvcnQgY29uc3QgZXJyb3JNZXNzYWdlVGVtcGxhdGUgPWBcbjxzdHlsZT5cbiAgICAuY29udGFpbmVyLWVycm9ye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA0MWVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgLmNvbnRhaW5lci1lcnJvciBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICc3Mic7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgY29sb3I6ICMzMjM2M0E7XG4gICAgfVxuICAgIC5jb250YWluZXItZXJyb3IgaDJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICc3Mic7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgY29sb3I6ICM3NTc4N0M7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLmNvbnRhaW5lci1lcnJvciBpbWcge1xuICAgICAgICB3aWR0aDogMzIwcHg7XG4gICAgICAgIGhlaWdodDoyNDBweDtcbiAgICB9XG48L3N0eWxlPlxuPGRpdiBjbGFzcz1cImNvbnRhaW5lci1lcnJvclwiPlxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9zdGF0aWMuZ2lneWEuY29tL2hvc3RlZC1wYWdlcy9wYWdlLW5vdC1mb3VuZC5wbmdcIiBhbHQ9XCJFcnJvclwiPlxuICAgIDxoMT5Pb3BzLCBTb21ldGhpbmcgd2VudCB3cm9uZy48L2gxPlxuICAgIDxoMj4kbWVzc2FnZTwvaDI+XG48L2Rpdj5gO1xuIiwiaW1wb3J0IHsgSUFuYWx5dGljcywgSVNlbmRBbmFseXRpY3NGbiwgSUFuYWx5dGljc1BheWxvYWQgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvR29vZ2xlQW5hbHl0aWNzL0dvb2dsZUFuYWx5dGljcyc7XG5pbXBvcnQgeyBHaWd5YUV2ZW50SGFuZGxlcnNNYXAsIEdpZ3lhRXZlbnRUaXRsZU1hcCB9IGZyb20gJy4vSG9zdGVkUGFnZUFuYWx5dGljc0V2ZW50cyc7XG5pbXBvcnQgeyBJRXZlbnRNYXBDb25maWcsIElQYWdlQW5hbHl0aWNzQ29uZmlnIH0gZnJvbSAnLi9JSG9zdGVkUGFnZUFuYWx5dGljcyc7XG5cblxuZXhwb3J0IGNsYXNzIEhvc3RlZFBhZ2VBbmFseXRpY3MgaW1wbGVtZW50cyBJQW5hbHl0aWNzIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogSVBhZ2VBbmFseXRpY3NDb25maWcsIHByaXZhdGUgZXZlbnRzOiBQaWNrPHR5cGVvZiBnaWd5YSwgJ2RlZmF1bHRFdmVudE1hcHMnPikgeyB9XG5cbiAgcHVibGljIHJlZ2lzdGVyKHNlbmRBbmFseXRpY3M6IElTZW5kQW5hbHl0aWNzRm4pOiB2b2lkIHtcblxuICAgIGNvbnN0IGhvc3RlZFBhZ2VBbmFseXRpY3NDb25maWc6IElFdmVudE1hcENvbmZpZyA9IHtcbiAgICAgIGlkOiAnaG9zdGVkLXBhZ2UtZXZlbnRzLWFuYWx5dGljcycsXG4gICAgICBkZWZhdWx0TWV0aG9kOiAoZXZlbnQpID0+IHtcblxuICAgICAgICBjb25zdCBldmVudE5hbWUgPSBldmVudD8uZnVsbEV2ZW50TmFtZSA/PyBldmVudD8uZXZlbnROYW1lO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50VGl0bGUgPSBHaWd5YUV2ZW50VGl0bGVNYXAuZ2V0KGV2ZW50TmFtZSk7XG5cbiAgICAgICAgY29uc3QgZXZlbnRIYW5kbGVyID0gR2lneWFFdmVudEhhbmRsZXJzTWFwLmdldChldmVudE5hbWUpO1xuXG4gICAgICAgIGlmICghZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXlsb2FkOiBJQW5hbHl0aWNzUGF5bG9hZCA9IGV2ZW50SGFuZGxlcihldmVudClcblxuICAgICAgICBzZW5kQW5hbHl0aWNzKCdldmVudCcsIGV2ZW50VGl0bGUsIHBheWxvYWQpXG5cbiAgICAgIH0sXG4gICAgICBldmVudE1hcDogW1xuICAgICAgICB7XG4gICAgICAgICAgZXZlbnRzOiB0aGlzLmNvbmZpZz8uZXZlbnRzLFxuICAgICAgICAgIGFyZ3M6IFtmdW5jdGlvbiAoZSkgeyByZXR1cm4gZSB9XVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHMuZGVmYXVsdEV2ZW50TWFwcz8ucHVzaChob3N0ZWRQYWdlQW5hbHl0aWNzQ29uZmlnKTtcblxuICB9O1xuXG59IiwiaW1wb3J0IHtcbiAgQWZ0ZXJTdWJtaXRSZXNwb25zZVBheWxvYWQsXG4gIEVycm9yRXZlbnRQYXlsb2FkLFxuICBJQWZ0ZXJTdWJtaXRFdmVudCxcbiAgSUJhc2VFdmVudCxcbiAgSUVycm9yRXZlbnQsXG4gIElFdmVudEhhbmRsZXIsXG4gIElFdmVudFBheWxvYWQsXG4gIElMb2dpbkV2ZW50LFxuICBJTG9nb3V0RXZlbnQsXG4gIExvZ2luRXZlbnRQYXlsb2FkLFxuICBMb2dvdXRFdmVudFBheWxvYWQsXG4gIFNjcmVlblNldEV2ZW50UGF5bG9hZFxufSBmcm9tICcuL0lIb3N0ZWRQYWdlQW5hbHl0aWNzJztcblxuZXhwb3J0IGVudW0gR2lneWFFdmVudCB7XG4gIG9uTG9naW4gPSAnbG9naW4nLFxuICBvbkxvZ291dCA9ICdsb2dvdXQnLFxuICBvbkVycm9yID0gJ2Vycm9yJyxcbiAgb25BZnRlclNjcmVlbkxvYWQgPSAnYWZ0ZXJTY3JlZW5Mb2FkJyxcbiAgb25BZnRlclN1Ym1pdCA9ICdhZnRlclN1Ym1pdCcsXG4gIG9uSGlkZSA9ICdoaWRlJyxcbn1cblxuZXhwb3J0IGNvbnN0IEdpZ3lhRXZlbnRUaXRsZU1hcCA9IG5ldyBNYXA8R2lneWFFdmVudCwgc3RyaW5nPihbXG4gIFtHaWd5YUV2ZW50Lm9uTG9naW4sICdMb2dpbiddLFxuICBbR2lneWFFdmVudC5vbkxvZ291dCwgJ0xvZ291dCddLFxuICBbR2lneWFFdmVudC5vbkVycm9yLCAnRXJyb3InXSxcbiAgW0dpZ3lhRXZlbnQub25BZnRlclNjcmVlbkxvYWQsICdTY3JlZW4gTG9hZCddLFxuICBbR2lneWFFdmVudC5vbkFmdGVyU3VibWl0LCAnU3VibWl0J10sXG4gIFtHaWd5YUV2ZW50Lm9uSGlkZSwgJ0hpZGUnXSxcbl0pO1xuXG5cbmNvbnN0IGxvZ2luRXZlbnRIYW5kbGVyID0gKGV2ZW50OiBJTG9naW5FdmVudCk6IExvZ2luRXZlbnRQYXlsb2FkID0+IHtcblxuICBpZiAoIWV2ZW50KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV2ZW50TmFtZTogZXZlbnQuZXZlbnROYW1lLFxuICAgIHByb3ZpZGVyOiBldmVudC5wcm92aWRlcixcbiAgICBsb2dpbk1vZGU6IGV2ZW50LmxvZ2luTW9kZSxcbiAgICBuZXdVc2VyOiBldmVudC5uZXdVc2VyLFxuICAgIHNvdXJjZTogZXZlbnQuc291cmNlLFxuICAgIFVJRDogZXZlbnQuVUlEXG4gIH1cbn1cblxuY29uc3QgZXJyb3JFdmVudEhhbmRsZXIgPSAoZXZlbnQ6IElFcnJvckV2ZW50KTogRXJyb3JFdmVudFBheWxvYWQgPT4ge1xuXG4gIGlmICghZXZlbnQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXZlbnROYW1lOiBldmVudC5ldmVudE5hbWUsXG4gICAgZXJyb3JNZXNzYWdlOiBldmVudC5lcnJvck1lc3NhZ2UsXG4gICAgZXJyb3JDb2RlOiBldmVudC5lcnJvckNvZGUsXG4gICAgc291cmNlOiBldmVudC5zb3VyY2VcbiAgfVxufVxuXG5jb25zdCBsb2dvdXRFdmVudEhhbmRsZXIgPSAoZXZlbnQ6IElMb2dvdXRFdmVudCk6IExvZ291dEV2ZW50UGF5bG9hZCA9PiB7XG4gIHJldHVybiB7XG4gICAgZXZlbnROYW1lOiBldmVudD8uZXZlbnROYW1lXG4gIH1cbn1cblxuY29uc3Qgc2NyZWVuU2V0RXZlbnRIYW5kbGVyID0gKGV2ZW50OiBJQmFzZUV2ZW50ICYgeyBzY3JlZW46IHN0cmluZywgY3VycmVudFNjcmVlbj86IHN0cmluZywgc2NyZWVuU2V0SUQ6IHN0cmluZyB9KTogU2NyZWVuU2V0RXZlbnRQYXlsb2FkID0+IHtcblxuICBpZiAoIWV2ZW50KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV2ZW50TmFtZTogZXZlbnQuZXZlbnROYW1lLFxuICAgIHNjcmVlbjogZXZlbnQuc2NyZWVuIHx8IGV2ZW50LmN1cnJlbnRTY3JlZW4sXG4gICAgc2NyZWVuU2V0SUQ6IGV2ZW50LnNjcmVlblNldElELFxuICAgIHNvdXJjZTogZXZlbnQuc291cmNlXG4gIH1cbn1cblxuY29uc3QgYWZ0ZXJTdWJtaXRFdmVudEhhbmRsZXIgPSAoZXZlbnQ6IElBZnRlclN1Ym1pdEV2ZW50KTogSUV2ZW50UGF5bG9hZCAmIEFmdGVyU3VibWl0UmVzcG9uc2VQYXlsb2FkID0+IHtcblxuICBpZiAoIWV2ZW50KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBiYXNpY1BheWxvYWQgPSBzY3JlZW5TZXRFdmVudEhhbmRsZXIoZXZlbnQpXG5cbiAgY29uc3Qge1xuICAgIGVycm9yQ29kZSxcbiAgICBlcnJvckRldGFpbHMsXG4gICAgZXJyb3JNZXNzYWdlLFxuICAgIG9wZXJhdGlvbixcbiAgfSA9IGV2ZW50Py5yZXNwb25zZSA/PyB7fVxuXG4gIHJldHVybiB7XG4gICAgLi4uYmFzaWNQYXlsb2FkLFxuICAgIGVycm9yQ29kZSxcbiAgICBlcnJvckRldGFpbHMsXG4gICAgZXJyb3JNZXNzYWdlLFxuICAgIG9wZXJhdGlvblxuICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IEdpZ3lhRXZlbnRIYW5kbGVyc01hcCA9IG5ldyBNYXA8R2lneWFFdmVudCwgSUV2ZW50SGFuZGxlcj4oW1xuICBbR2lneWFFdmVudC5vbkxvZ2luLCBsb2dpbkV2ZW50SGFuZGxlcl0sXG4gIFtHaWd5YUV2ZW50Lm9uTG9nb3V0LCBsb2dvdXRFdmVudEhhbmRsZXJdLFxuICBbR2lneWFFdmVudC5vbkVycm9yLCBlcnJvckV2ZW50SGFuZGxlcl0sXG4gIFtHaWd5YUV2ZW50Lm9uQWZ0ZXJTY3JlZW5Mb2FkLCBzY3JlZW5TZXRFdmVudEhhbmRsZXJdLFxuICBbR2lneWFFdmVudC5vbkFmdGVyU3VibWl0LCBhZnRlclN1Ym1pdEV2ZW50SGFuZGxlcl0sXG4gIFtHaWd5YUV2ZW50Lm9uSGlkZSwgc2NyZWVuU2V0RXZlbnRIYW5kbGVyXSxcbl0pO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzVHJ1c3RlZERvbWFpbih1cmw6IHN0cmluZywgaG9zdGVkUGFnZXNEb21haW46IHN0cmluZyA9IGdpZ3lhLl8uY29uZmlnLmhvc3RlZFBhZ2VzRG9tYWluKTogYm9vbGVhbiB7XG4gIGNvbnN0IGRvbWFpbiA9IHVybC5tYXRjaCgvXig/Omh0dHBzPzpcXC9cXC8pKD86d3d3XFwuKT8oW146XFwvP10rKS8pO1xuICBpZiAoZG9tYWluICYmIGRvbWFpblsxXSkge1xuICAgICAgbGV0IGJhc2VEb21haW5zID0gZ2lneWEuXy5jb25maWcuYXBpLmJhc2VEb21haW5zO1xuICAgICAgYmFzZURvbWFpbnMgPSBiYXNlRG9tYWlucy5tYXAoZCA9PiBkLnJlcGxhY2UoJyonLCAnJykpO1xuICAgICAgYmFzZURvbWFpbnMucHVzaChob3N0ZWRQYWdlc0RvbWFpbik7XG4gICAgICByZXR1cm4gYmFzZURvbWFpbnMuZmlsdGVyKGQgPT4gZ2lneWEudXRpbHMuc3RyaW5nVXRpbHMuZW5kc1dpdGgoZG9tYWluWzFdLCBkKSkubGVuZ3RoID4gMDtcbiAgfVxuICAvLyBpZiB0aGVyZSBpcyBubyBtYXRjaCwgc28gaXQncyByZWxhdGl2ZSB1cmxcbiAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZW51bSBFZGl0YWJsZVRmYVByb3ZpZGVyc1R5cGVzIHtcbiAgICBnaWd5YVBob25lLFxuICAgIGdpZ3lhVG90cCxcbiAgICBnaWd5YVB1c2gsXG4gICAgbGl2ZWxpbmssXG59XG5leHBvcnQgY29uc3QgZ2lneWFBc3NlcnRpb25FeHBpcmF0aW9uID0gNjAgKiA1ICogMTAwMDtcbmV4cG9ydCBjb25zdCBzZW5zaXRpdmVQYXJhbXNPdmVycmlkZSA9ICdsb2dpbl90b2tlbic7XG5cbmV4cG9ydCBjb25zdCBHSUdZQV9QQVJBTV9QUkVGSVggPSAnZ2lnXydcblxuZXhwb3J0IGNvbnN0IEdJR1lBX0lOVEVSTkFMX1BBUkFNX1BSRUZJWCA9IGAke0dJR1lBX1BBUkFNX1BSRUZJWH1pX2BcblxuZXhwb3J0IGNvbnN0IEdJR1lBX0lOVEVSTkFMX1BBUkFNUyA9IGAke0dJR1lBX1BBUkFNX1BSRUZJWH1hY3Rpb25zYFxuIiwiXG5leHBvcnQgY2xhc3MgUmVxdWVzdFByb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfeGhyUmVxdWVzdCA9IGdpZ3lhLlhoclJlcXVlc3QsXG4gICAgICAgIHB1YmxpYyB0aW1lb3V0ID0gMTUwMDAsXG4gICAgICAgIHByaXZhdGUgX3dpbiA9IHdpbmRvd1xuICAgICkge31cblxuICAgIGFzeW5jIHNlbmQoYmFzZURvbWFpbiwgbWV0aG9kTmFtZSwgcGFyYW1zLCBzZXR0aW5ncywgaGVhZGVycyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IHRoaXMuX3hoclJlcXVlc3QoYmFzZURvbWFpbiwgbWV0aG9kTmFtZSwgcGFyYW1zLCBzZXR0aW5ncywgaGVhZGVycyk7XG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0SWQgPSB0aGlzLl93aW4uc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KCdBUEkgcmVxdWVzdCB0aW1lb3V0Jyk7XG4gICAgICAgICAgICB9LCB0aGlzLnRpbWVvdXQpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoYXdhaXQgcmVxdWVzdC5zZW5kKCkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgZ2lneWEubG9nZ2VyLnJlcG9ydCgnWEhSIHJlcXVlc3QgZmFpbGVkJywge21ldGhvZE5hbWUsIHBhcmFtcywgc2V0dGluZ3MsIGVycn0pO1xuICAgICAgICAgICAgICAgIHJlamVjdChgUmVxdWVzdCBmb3IgJHttZXRob2ROYW1lfSBmYWlsZWRgKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2luLmNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIE1vZGUsXG4gICAgU0RLU2V0R3JvdXBUb2tlblBhcmFtcyxcbiAgICBTREtHZXRHcm91cFRva2VuUGFyYW1zLFxuICAgIFNES0xvZ291dFBhcmFtcyxcbiAgICBTREtSZW1vdmVHcm91cFRva2VuUGFyYW1zLFxuICAgIFNES1NldExvZ2luVG9rZW5FeHBQYXJhbXMsXG4gICAgU0RLR2V0TG9naW5Ub2tlbkV4cFBhcmFtcyxcbiAgICBTREtDaGVja1Rva2VuUmVuZXdQYXJhbXMsXG4gICAgU0RLQ2FuYXJ5SW5kaWNhdGlvblBhcmFtcyxcbiAgICBTREtCYXNlUGFyYW1zLFxuICAgIEZyYW1lQmFzZVBhcmFtcyxcbiAgICBHZXRHcm91cFRva2VuUmVzcG9uc2UsXG4gICAgU0RLU2V0R3JvdXBDb250ZXh0LFxuICAgIElTc29TZXJ2aWNlLFxuICAgIEdldExvZ2luVG9rZW5FeHBSZXNwb25zZSxcbiAgICBDYW5hcnlJbmRpY2F0aW9uUmVzcG9uc2UsXG4gICAgU2V0TG9naW5Ub2tlbkV4cFJlc3BvbnNlLFxuICAgIEdldEdyb3VwQXBpRG9tYWluUmVzcG9uc2UsXG4gICAgU2V0R3JvdXBBcGlEb21haW5QYXJhbXMsXG4gICAgU0RLR2V0R3JvdXBBcGlEb21haW5QYXJhbXMsXG4gICAgU0RLU2V0R3JvdXBBcGlEb21haW5QYXJhbXMsXG4gICAgU0RLTG9nb3V0UmVzcG9uc2UsXG59IGZyb20gJ3NyYy9maWRtL0dpZ3lhLkpTLlNTTy9hcHAvaW50ZXJmYWNlcyc7XG5pbXBvcnQge1Nzb30gZnJvbSAnc3JjL2ZpZG0vR2lneWEuSlMuU1NPL2FwcC9zc28nO1xuaW1wb3J0IHtnZXRTdG9yYWdlRG9tYWlufSBmcm9tICcuLi8uLi9HaWd5YS5Kcy9hcHAvVXRpbHMvZG9tYWlucyc7XG5pbXBvcnQge2NyZWF0ZUlmcmFtZX0gZnJvbSBcIi4uLy4uL1NlcnZpY2VQcm94eS91dGlsc1wiO1xuaW1wb3J0IHtGbGFnU2VydmljZX0gZnJvbSBcIi4uLy4uL0dpZ3lhLkpzL2FwcC9TZXJ2aWNlcy9GbGFnU2VydmljZVwiO1xuaW1wb3J0IHtTZXJ2aWNlUHJveHl9IGZyb20gJy4uLy4uL1NlcnZpY2VQcm94eS9TZXJ2aWNlUHJveHknO1xuXG4vLyAjIyMgU2luZ2xlIFNpZ24gT24gYWNyb3NzIG11bHRpcGxlIGRvbWFpbnMgIyMjXG5cbmxldCBjYWxsYmFja0NvdW50ZXIgPSAwO1xuZXhwb3J0IHZhciBfc3RvcmVkTG9naW5Ub2tlbkV4cDogc3RyaW5nO1xuZXhwb3J0IGxldCBfcmVxdWVzdFRpbWVvdXQ6IG51bWJlciA9IDMwMDA7XG5cbmV4cG9ydCBjbGFzcyBTc29TZXJ2aWNlIGltcGxlbWVudHMgSVNzb1NlcnZpY2Uge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogSVNzb1NlcnZpY2U7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0SW5zdGFuY2Uoc3NvS2V5OiBzdHJpbmcgPSBnaWd5YS5wYXJ0bmVyU2V0dGluZ3Muc3NvS2V5KTogUHJvbWlzZTxJU3NvU2VydmljZT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICBpZiAoIXNzb0tleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChGbGFnU2VydmljZS5sb2FkU3NvRnJhbWVPbmx5T25jZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHFzID0gZ2lneWEudXRpbHMua2V5VmFsdWUuc2VyaWFsaXplKHtcbiAgICAgICAgICAgICAgICAgICAgQVBJS2V5OiBzc29LZXksXG4gICAgICAgICAgICAgICAgICAgIHZlcnNpb246IGdpZ3lhLmJ1aWxkLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgIGJ1aWxkOiBnaWd5YS5idWlsZC5udW1iZXIgfHwgLTEsXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZUtleTogZ2lneWEudGhpc1NjcmlwdC5BUElLZXksXG4gICAgICAgICAgICAgICAgICAgIG9uZUZyYW1lOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW46IGAke2dpZ3lhLmxvY2FsSW5mby5wcm90b2NvbH06Ly8ke2RvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lfWAsXG4gICAgICAgICAgICAgICAgICAgIHNzb1NlZ21lbnQ6IGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5zc29TZWdtZW50IHx8ICcnXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly8ke2dldFN0b3JhZ2VEb21haW4oKX0vZ3Mvc3NvLmh0bT8ke3FzfWA7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzc29BZGFwdGVyID0gbmV3IFNlcnZpY2VQcm94eSh1cmwpXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHNzb0FkYXB0ZXIuaW5pdCgnU1NPJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gc3NvQWRhcHRlci53cmFwV2l0aDxJU3NvU2VydmljZT4oU3NvKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuZXJyb3IoYGVycm9yIGluaXRpYWxpemUgc3NvIGZyYW1lYCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU6ICdTc29TZXJ2aWNlLmluaXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgU3NvU2VydmljZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBTc29TZXJ2aWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGVja1Rva2VuUmVuZXcobG9naW5Ub2tlbjogc3RyaW5nKTogUHJvbWlzZTxHZXRHcm91cFRva2VuUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgY2hlY2tUb2tlblJlbmV3KHtsb2dpblRva2VuLCBjYWxsYmFjazogcmVzb2x2ZX0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VG9rZW4oKTogUHJvbWlzZTxHZXRHcm91cFRva2VuUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgZ2V0R3JvdXBUb2tlbih7Y2FsbGJhY2s6IHJlc29sdmV9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRva2VuRXhwaXJhdGlvbigpOiBQcm9taXNlPEdldExvZ2luVG9rZW5FeHBSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBnZXRMb2dpblRva2VuRXhwKHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogcmVzb2x2ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGxvZ291dCgpOiBQcm9taXNlPFNES0xvZ291dFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIGxvZ291dCh7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IHJlc29sdmVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVUb2tlbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gIHtcbiAgICAgICAgICAgIHJlbW92ZUdyb3VwVG9rZW4oe2NhbGxiYWNrOiByZXNvbHZlfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEdyb3VwQ29udGV4dChncm91cENvbnRleHQ6IGFueSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBzZXRHcm91cENvbnRleHRDb29raWUoe2dyb3VwQ29udGV4dCwgY2FsbGJhY2s6IHJlc29sdmV9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VG9rZW4obHQ6IHN0cmluZywgZXhwaXJhdGlvbj86IG51bWJlciB8IHN0cmluZywgZ2x0ZXhwPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHNldEdyb3VwVG9rZW4oe1xuICAgICAgICAgICAgICAgIGx0LCBleHBpcmF0aW9uLCBnbHRleHAsIGNhbGxiYWNrOiByZXNvbHZlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VG9rZW5FeHBpcmF0aW9uKGxvZ2luVG9rZW5FeHA6IHN0cmluZywgdXNlQ2FjaGU6IGJvb2xlYW4gPSB0cnVlKTogUHJvbWlzZTxTZXRMb2dpblRva2VuRXhwUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgc2V0TG9naW5Ub2tlbkV4cCh7XG4gICAgICAgICAgICAgICAgbG9naW5Ub2tlbkV4cCxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogcmVzb2x2ZVxuICAgICAgICAgICAgfSwgdXNlQ2FjaGUpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIHN5bmNDYW5hcnlJbmRpY2F0aW9uKGlzQ2FuYXJ5OiBzdHJpbmcsIGNhbmFyeVZlcnNpb246IHN0cmluZyk6IFByb21pc2U8Q2FuYXJ5SW5kaWNhdGlvblJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHN5bmNDYW5hcnlJbmRpY2F0aW9uKHtpc0NhbmFyeSwgY2FuYXJ5VmVyc2lvbiwgY2FsbGJhY2s6IHJlc29sdmV9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEdyb3VwQXBpRG9tYWluKCk6IFByb21pc2U8R2V0R3JvdXBBcGlEb21haW5SZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBnZXRHcm91cEFwaURvbWFpbih7Y2FsbGJhY2s6IHJlc29sdmV9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEdyb3VwQXBpRG9tYWluKGRvbWFpbjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHNldEdyb3VwQXBpRG9tYWluKHtjYWxsYmFjazogcmVzb2x2ZSwgZG9tYWlufSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gX3JlcXVlc3QoXG4gICAgbW9kZTogTW9kZSxcbiAgICBwOlxuICAgICAgICB8IFNES1NldEdyb3VwVG9rZW5QYXJhbXNcbiAgICAgICAgfCBTREtHZXRHcm91cFRva2VuUGFyYW1zXG4gICAgICAgIHwgU0RLTG9nb3V0UGFyYW1zXG4gICAgICAgIHwgU0RLUmVtb3ZlR3JvdXBUb2tlblBhcmFtc1xuICAgICAgICB8IFNES1NldExvZ2luVG9rZW5FeHBQYXJhbXNcbiAgICAgICAgfCBTREtHZXRMb2dpblRva2VuRXhwUGFyYW1zXG4gICAgICAgIHwgU0RLQ2hlY2tUb2tlblJlbmV3UGFyYW1zXG4gICAgICAgIHwgU0RLQ2FuYXJ5SW5kaWNhdGlvblBhcmFtc1xuICAgICAgICB8IFNES1NldEdyb3VwQ29udGV4dFxuKSB7XG4gICAgaWYgKCFnaWd5YS5wYXJ0bmVyU2V0dGluZ3Muc3NvS2V5KSB7XG4gICAgICAgIGlmIChwICYmIHAuY2FsbGJhY2spIHtcbiAgICAgICAgICAgIChwIGFzIFNES0Jhc2VQYXJhbXMpLmNhbGxiYWNrKHt9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHBhcmFtczogRnJhbWVCYXNlUGFyYW1zO1xuICAgIGlmICghcCkge1xuICAgICAgICBwYXJhbXMgPSB7fSBhcyBhbnk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRW5zdXJlIHRoZSBwYXJhbXMgcGFzc2VkIGFyZSBub3QgbW9kaWZpZWQgYnkgcmVmZXJlbmNlLlxuICAgICAgICBwYXJhbXMgPSBnaWd5YS51dGlscy5vYmplY3QuY2xvbmUocCk7XG4gICAgfVxuXG4gICAgbGV0IGlmcjogSFRNTElGcmFtZUVsZW1lbnQ7XG4gICAgbGV0IHJlcXVlc3RUaW1lb3V0SWQ7XG5cbiAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIGdpZ3lhLmxvZ2dlci5kZWJ1ZyhgY2xlYW5pbmcgc3NvIGlmcmFtZWApO1xuXG4gICAgICAgIC8vIGNsZWFudXAgaWZyYW1lXG4gICAgICAgIGlmci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGlmcik7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHJlcXVlc3RUaW1lb3V0SWQpO1xuXG4gICAgICAgIC8vIFR5cGVjYXN0IHJlc3BvbnNlLlxuICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvckNvZGUgJiYgdHlwZW9mIHJlc3BvbnNlLmVycm9yQ29kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5lcnJvckNvZGUgPSBOdW1iZXIocmVzcG9uc2UuZXJyb3JDb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5leHBpcmVzX2luICYmIHR5cGVvZiByZXNwb25zZS5leHBpcmVzX2luID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmV4cGlyZXNfaW4gPSBOdW1iZXIocmVzcG9uc2UuZXhwaXJlc19pbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocCAmJiBwLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICAocCBhcyBTREtCYXNlUGFyYW1zKS5jYWxsYmFjayhyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHBhcmFtcy5tID0gbW9kZTtcbiAgICBwYXJhbXMuZCA9IGAke2dpZ3lhLmxvY2FsSW5mby5wcm90b2NvbH06Ly8ke2RvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lfWA7XG5cbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24ucG9ydCkge1xuICAgICAgICBwYXJhbXMuZCArPSAnOicgKyBkb2N1bWVudC5sb2NhdGlvbi5wb3J0O1xuICAgIH1cblxuICAgIC8vIENocm9tZSBjYWNoZXMgdGhlIGZyYWdtZW50IHdoZW4gbG9hZGVkIGZvciB0aGUgZmlyc3QgdGltZS4gd29ya2Fyb3VuZDpcbiAgICBwYXJhbXMuY2FsbGJhY2tJRCA9ICdnaWdfc3NvX2NiJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgJ18nICsgY2FsbGJhY2tDb3VudGVyKys7XG4gICAgcGFyYW1zLnNBUElLZXkgPSBnaWd5YS50aGlzU2NyaXB0LkFQSUtleTtcbiAgICBwYXJhbXNbZ2lneWEubG9nZ2VyLmNvbmZpZ0tleV0gPSBKU09OLnN0cmluZ2lmeShnaWd5YS5sb2dnZXIuZ2V0Q29uZmlnKCkpO1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZ2lneWEudXRpbHMua2V5VmFsdWUuc2VyaWFsaXplKHBhcmFtcyk7XG5cbiAgICBjb25zdCBpZnJhbWVMb2FkZXIgPSAocmV0cmllcyA9IDApID0+IHtcblxuICAgICAgICBnaWd5YS51dGlscy54ZC5hZGRNZXNzYWdlTGlzdGVuZXIocGFyYW1zLmNhbGxiYWNrSUQsIHt9LCBmYWxzZSwgY2FsbGJhY2ssIGdpZ3lhLl8uTWVzc2FnaW5nTWV0aG9kLlBvc3RNZXNzYWdlKTtcbiAgICAgICAgaWZyID0gX2dldElmcmFtZShwYXJhbXMuY2FsbGJhY2tJRCk7XG5cbiAgICAgICAgY29uc3QgZm5PbkxvYWQgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIHJlcXVlc3RUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgICAgIC8vIHRvdGFsIGZhaWx1cmVcbiAgICAgICAgICAgICAgICBpZiAocmV0cmllcyA8PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmVycm9yKGBTU08gQ29tbXVuaWNhdGlvbiBUaW1lb3V0YCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgSUUxMVByaXZhdGVNb2RlOiBnaWd5YS5sb2NhbEluZm8uaXNJRTExICYmICF3aW5kb3cuaW5kZXhlZERCLCBtb2RlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gcmVzZXRcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy54ZC5yZW1vdmVNZXNzYWdlTGlzdGVuZXIocGFyYW1zLmNhbGxiYWNrSUQpO1xuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVFbGVtZW50KGlmcik7XG5cbiAgICAgICAgICAgICAgICAvLyByZXRyeVxuICAgICAgICAgICAgICAgIGlmcmFtZUxvYWRlcihyZXRyaWVzIC0gMSk7XG5cbiAgICAgICAgICAgIH0sIF9yZXF1ZXN0VGltZW91dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHFzID0gZ2lneWEudXRpbHMua2V5VmFsdWUuc2VyaWFsaXplKHtcbiAgICAgICAgICAgICAgICBBUElLZXk6IGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5zc29LZXksXG4gICAgICAgICAgICAgICAgc3NvU2VnbWVudDogZ2lneWEucGFydG5lclNldHRpbmdzLnNzb1NlZ21lbnQgfHwgJycsIC8vIFRoZXJlIGlzIG5vIGRlZmF1bHQgc2VnbWVudCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAgICAgICAgICAgICAgdmVyc2lvbjogZ2lneWEuYnVpbGQudmVyc2lvbixcbiAgICAgICAgICAgICAgICBidWlsZDogZ2lneWEuYnVpbGQubnVtYmVyIHx8IC0xLCAvLyBUbyBjbGVhciBDRE4gY2FjaGUuLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHNob3VsZCBhbHdheXMgbG9hZCBmcm9tIGdpZ3lhJ3MgZG9tYWluIGV4Y2VwdCB3aGVuIG92ZXJyaWRlbiBmb3IgIzUwMjYxLlxuICAgICAgICAgICAgaWZyLnNyYyA9IGBodHRwczovLyR7Z2V0U3RvcmFnZURvbWFpbigpfS9ncy9zc28uaHRtPyR7cXN9IyR7ZnJhZ21lbnR9YDtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVFdmVudExpc3RlbmVyKGlmciwgJ2xvYWQnLCBmbk9uTG9hZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoaWZyLCAnbG9hZCcsIGZuT25Mb2FkKTtcblxuICAgICAgICBnaWd5YS5sb2dnZXIuZGVidWcoYG9wZW5pbmcgc3NvIGlmcmFtZWAsIHBhcmFtcyk7XG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYXBwZW5kVG9Cb2R5KGlmcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnaWd5YS51dGlscy5mdW5jdGlvbnMuaW52b2tlT25QYWdlTG9hZCgoKSA9PiBnaWd5YS51dGlscy5ET00uYXBwZW5kVG9Cb2R5KGlmcikpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGlmcmFtZUxvYWRlcigzKTtcbn1cbmZ1bmN0aW9uIF9nZXRJZnJhbWUocmVxdWVzdElkOiBzdHJpbmcpOiBIVE1MSUZyYW1lRWxlbWVudCB7XG4gICAgbGV0IGlmcjtcbiAgICBpZiAoRmxhZ1NlcnZpY2UuaGlkZVNTT0ZyYW1lKSB7XG4gICAgICAgIGlmciA9IGNyZWF0ZUlmcmFtZSgnU1NPIEZyYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWZyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgIC8vIEFic29sdXRlIHBvc2l0aW9uIHdpdGggLTEwMDBweCBjYXVzZXMgc2Nyb2xsaW5nIHNsb3dkb3ducyBvbiBtb2JpbGUgZGV2aWNlcy5cbiAgICAgICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5pc0lPUyB8fCBnaWd5YS5sb2NhbEluZm8uaXNJT1NDaHJvbWUgfHwgZ2lneWEubG9jYWxJbmZvLmlzQW5kcm9pZCkge1xuICAgICAgICAgICAgaWZyLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgICAgICBpZnIuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgICAgICAgICBpZnIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmci5zdHlsZS53aWR0aCA9ICczMHB4JztcbiAgICAgICAgICAgIGlmci5zdHlsZS5oZWlnaHQgPSAnMTBweCc7XG4gICAgICAgICAgICBpZnIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgaWZyLnN0eWxlLnRvcCA9ICctMTAwMHB4JztcbiAgICAgICAgICAgIGlmci5zdHlsZS5sZWZ0ID0gJy0xMDAwcHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWZyLmlkID0gJ2dpZ19zc29fJyArIHJlcXVlc3RJZDtcbiAgICBnaWd5YS51dGlscy5mdW5jdGlvbnMuYWRkU3JjVG9JRnJhbWVJZk5lZWRlZChpZnIpO1xuXG4gICAgcmV0dXJuIGlmcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRHcm91cFRva2VuKHBhcmFtcz86IFNES0dldEdyb3VwVG9rZW5QYXJhbXMpOiB2b2lkIHtcbiAgICBnaWd5YS5sb2dnZXIuaW5mbyhgdHJ5aW5nIHRvIGdldCBzc28gZ3JvdXAgbG9naW4gdG9rZW5gKTtcblxuICAgIF9yZXF1ZXN0KCdnZXRUb2tlbicsIHtcbiAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogR2V0R3JvdXBUb2tlblJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBfc3RvcmVkTG9naW5Ub2tlbkV4cCA9IHJlc3BvbnNlLmdsdGV4cDtcbiAgICAgICAgICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmNhbGxiYWNrKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEdyb3VwVG9rZW4ocGFyYW1zOiBTREtTZXRHcm91cFRva2VuUGFyYW1zKTogdm9pZCB7XG4gICAgLy8gQWRkIGN1cnJlbnQgZ2x0ZXhwIGNvb2tpZSB0byB0aGUgcGFyYW1ldGVycyBhdXRvbWF0aWNhbGx5LlxuICAgIGlmICghcGFyYW1zLmdsdGV4cCkge1xuICAgICAgICBwYXJhbXMuZ2x0ZXhwID0gZ2lneWEudXRpbHMuY29va2llLmdldChgZ2x0ZXhwXyR7Z2lneWEudGhpc1NjcmlwdC5BUElLZXl9YCk7XG4gICAgfVxuICAgIF9yZXF1ZXN0KCdzZXRUb2tlbicsIHBhcmFtcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXQocGFyYW1zPzogU0RLTG9nb3V0UGFyYW1zKTogdm9pZCB7XG4gICAgX3JlcXVlc3QoJ2xvZ291dCcsIHBhcmFtcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVHcm91cFRva2VuKHBhcmFtcz86IFNES1JlbW92ZUdyb3VwVG9rZW5QYXJhbXMpOiB2b2lkIHtcbiAgICBfcmVxdWVzdCgncmVtb3ZlVG9rZW4nLCBwYXJhbXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9naW5Ub2tlbkV4cChwYXJhbXM6IFNES1NldExvZ2luVG9rZW5FeHBQYXJhbXMsIHVzZUNhY2hlID0gdHJ1ZSk6IHZvaWQge1xuICAgIC8vIERvbid0IHN0b3JlIHRoZSBsb2dpbiB0b2tlbiBhZ2FpbiBpZiB3ZSd2ZSBhbHJlYWR5IHN0b3JlZCBpdC5cbiAgICBpZiAodXNlQ2FjaGUgJiYgX3N0b3JlZExvZ2luVG9rZW5FeHAgJiYgcGFyYW1zLmxvZ2luVG9rZW5FeHAgPT09IF9zdG9yZWRMb2dpblRva2VuRXhwKSB7XG4gICAgICAgIGlmIChwYXJhbXMuY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHBhcmFtcy5jYWxsYmFjayh7IGdsdGV4cDogX3N0b3JlZExvZ2luVG9rZW5FeHAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfc3RvcmVkTG9naW5Ub2tlbkV4cCA9IHBhcmFtcy5sb2dpblRva2VuRXhwO1xuICAgIF9yZXF1ZXN0KCdzZXRMb2dpblRva2VuRXhwJywgcGFyYW1zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ2luVG9rZW5FeHAocGFyYW1zOiBTREtHZXRMb2dpblRva2VuRXhwUGFyYW1zKTogdm9pZCB7XG4gICAgX3JlcXVlc3QoJ2dldExvZ2luVG9rZW5FeHAnLCBwYXJhbXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tUb2tlblJlbmV3KHBhcmFtczogU0RLQ2hlY2tUb2tlblJlbmV3UGFyYW1zKTogdm9pZCB7XG4gICAgZ2lneWEubG9nZ2VyLmluZm8oYHZlcmlmeWluZyBsb2dpbiB0b2tlbiB3aXRoIHNzbyBncm91cGApO1xuICAgIF9yZXF1ZXN0KCdjaGVja1Rva2VuUmVuZXcnLCBwYXJhbXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3luY0NhbmFyeUluZGljYXRpb24ocGFyYW1zOiBTREtDYW5hcnlJbmRpY2F0aW9uUGFyYW1zKTogdm9pZCB7XG4gICAgX3JlcXVlc3QoJ3N5bmNDYW5hcnlJbmRpY2F0aW9uJywgcGFyYW1zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEdyb3VwQ29udGV4dENvb2tpZShwYXJhbXM6IFNES1NldEdyb3VwQ29udGV4dCl7XG4gICAgX3JlcXVlc3QoJ3NldEdyb3VwQ29udGV4dCcsIHBhcmFtcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRHcm91cEFwaURvbWFpbihwYXJhbXM6IFNES1NldEdyb3VwQXBpRG9tYWluUGFyYW1zKTogdm9pZCB7XG4gICAgX3JlcXVlc3QoJ3NldEdyb3VwQXBpRG9tYWluJywgcGFyYW1zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyb3VwQXBpRG9tYWluKHBhcmFtczogU0RLR2V0R3JvdXBBcGlEb21haW5QYXJhbXMpe1xuICAgIF9yZXF1ZXN0KCdnZXRHcm91cEFwaURvbWFpbicsIHBhcmFtcyk7XG59XG4iLCJpbXBvcnQgeyBHZXRHcm91cFRva2VuUmVzcG9uc2UgfSBmcm9tICdzcmMvZmlkbS9HaWd5YS5KUy5TU08vYXBwL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgU3NvU2VydmljZSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLkFkYXB0ZXJzLldlYi9hcHAvU3NvU2VydmljZSc7XG5pbXBvcnQgeyBHU0Vycm9ycyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9HU0Vycm9ycyc7XG5pbXBvcnQgeyBzZXNzaW9uRGF0YSB9ICBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvU2VydmljZXMvU2Vzc2lvblNlcnZpY2UnO1xuaW1wb3J0IHtGbGFnU2VydmljZX0gZnJvbSAgJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9TZXJ2aWNlcy9GbGFnU2VydmljZSc7XG5cbi8vIExvYWQgYW5kIHNhdmUgdG9rZW5zIGJhc2VkIG9uIEFQSSBrZXlzXG5sZXQgX2N1clNlc3Npb25FeHBpcmF0aW9uOiBudW1iZXI7XG5sZXQgX2JlYXJlclRva2VuID0gbnVsbDtcbmNvbnN0IF90cmllZEdBQ3MgPSB7fTtcbmV4cG9ydCBjb25zdCBhY3RpdmVOYW1lc3BhY2VzID0ge307XG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZEdsdEV4cChnbHRleHA6IHN0cmluZyA9IGdldEdsdGV4cENvb2tpZSgpKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFnbHRleHAgfHwgZ2lneWEudXRpbHMuZ2x0ZXhwLmlzVmFsaWQoZ2x0ZXhwKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRHbHRleHBDb29raWUoQVBJS2V5OiBzdHJpbmcgPSBnaWd5YS50aGlzU2NyaXB0LkFQSUtleSkge1xuICAgIHJldHVybiBnaWd5YS51dGlscy5jb29raWUuZ2V0KGdldEdsdENvb2tpZUtleShBUElLZXkpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRHbHRleHAoZ2x0ZXhwOiBzdHJpbmcsIEFQSUtleTogc3RyaW5nID0gZ2lneWEudGhpc1NjcmlwdC5BUElLZXkpIHtcbiAgICBpZiAoZ2x0ZXhwICYmICFpc0dpZ3lhQ29va2llRG9tYWluKCkpIHtcbiAgICAgICAgZ2lneWEudXRpbHMuY29va2llLnJlbW92ZShnZXRHbHRDb29raWVLZXkoQVBJS2V5KSk7XG5cbiAgICAgICAgaWYoRmxhZ1NlcnZpY2Uuc2V0Q29va2llU2FtZVNpdGVMYXhTZXNzaW9uKSB7XG4gICAgICAgICAgICBnaWd5YS51dGlscy5jb29raWUuc2V0KGdldEdsdENvb2tpZUtleShBUElLZXkpLCBnbHRleHAsIG51bGwsIG51bGwsIG51bGwsICdMYXgnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLmNvb2tpZS5zZXQoZ2V0R2x0Q29va2llS2V5KEFQSUtleSksIGdsdGV4cCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldEdsdENvb2tpZUtleShBUElLZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBnbHRleHBfJHtBUElLZXl9YDtcbn1cblxuZnVuY3Rpb24gX2dldFRva2VuQ29va2llTmFtZShBUElLZXkgPSBnaWd5YS50aGlzU2NyaXB0LkFQSUtleSkge1xuICAgIGlmIChBUElLZXkpIHtcbiAgICAgICAgcmV0dXJuICdnbHRfJyArIEFQSUtleTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ19naWdfbHQnO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXQoQVBJS2V5ID0gZ2lneWEudGhpc1NjcmlwdC5BUElLZXkpIHtcbiAgICBjb25zdCBsdCA9IGdpZ3lhLnV0aWxzLmNvb2tpZS5nZXQoX2dldFRva2VuQ29va2llTmFtZShBUElLZXkpKTtcbiAgICBpZiAobHQpIHtcbiAgICAgICAgcmV0dXJuIGx0LnNwbGl0KCd8JylbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNldChBUElLZXk6IHN0cmluZywgbG9naW5fdG9rZW46IHN0cmluZywgZXhwaXJlc19pbj86IG51bWJlciB8IHN0cmluZywgc2Vzc2lvbkV4cGlyYXRpb24/OiBudW1iZXIpIHtcbiAgICBnaWd5YS51dGlscy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZ2lneWFTZXR0aW5ncycpO1xuXG4gICAgZ2lneWEubG9nZ2VyLmluZm8oYHNldHRpbmcgYSBuZXcgbG9naW4gdG9rZW5gKTtcblxuICAgIGlmICghQVBJS2V5KSB7XG4gICAgICAgIEFQSUtleSA9IGdpZ3lhLnRoaXNTY3JpcHQuQVBJS2V5O1xuICAgIH1cbiAgICBpZiAoQVBJS2V5KSB7XG4gICAgICAgIGlmKEZsYWdTZXJ2aWNlLnNldENvb2tpZVNhbWVTaXRlTGF4U2Vzc2lvbikge1xuICAgICAgICAgICAgZ2lneWEudXRpbHMuY29va2llLnNldCgnZ2x0XycgKyBBUElLZXksIGxvZ2luX3Rva2VuLCBleHBpcmVzX2luLCBudWxsLCBudWxsLCAnTGF4Jyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLmNvb2tpZS5zZXQoJ2dsdF8nICsgQVBJS2V5LCBsb2dpbl90b2tlbiwgZXhwaXJlc19pbik7XG4gICAgICAgIH1cbiAgICAgICAgZ2lneWEudXRpbHMuY29va2llLnJlbW92ZSgnZ2FjXycgKyBBUElLZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmKEZsYWdTZXJ2aWNlLnNldENvb2tpZVNhbWVTaXRlTGF4U2Vzc2lvbikge1xuICAgICAgICAgICAgZ2lneWEudXRpbHMuY29va2llLnNldCgnX2dpZ19sdCcsIGxvZ2luX3Rva2VuLCBleHBpcmVzX2luLCBudWxsLCBudWxsLCAnTGF4Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnaWd5YS51dGlscy5jb29raWUuc2V0KCdfZ2lnX2x0JywgbG9naW5fdG9rZW4sIGV4cGlyZXNfaW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2N1clNlc3Npb25FeHBpcmF0aW9uID0gc2Vzc2lvbkV4cGlyYXRpb247XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFNlc3Npb25FeHBpcmF0aW9uKCkge1xuICAgIHJldHVybiBfY3VyU2Vzc2lvbkV4cGlyYXRpb247XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0R0FDQ29va2llKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdpZ3lhLnRoaXNTY3JpcHQuQVBJS2V5ICYmIGdpZ3lhLnV0aWxzLmNvb2tpZS5nZXQoJ2dhY18nICsgZ2lneWEudGhpc1NjcmlwdC5BUElLZXkpXG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0RnJvbUF1dGhDb2RlKGF1dGhDb2RlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIHNldEZyb21HQUMoe30sIHJlc29sdmUsIGF1dGhDb2RlKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRGcm9tR0FDKHBhcmFtczogT2JqZWN0LCBjYWxsYmFjazogRnVuY3Rpb24sIGdhYzogc3RyaW5nID0gZ2V0R0FDQ29va2llKCkpIHtcbiAgICBpZiAoZ2lneWEudGhpc1NjcmlwdC5BUElLZXkpIHtcbiAgICAgICAgaWYgKGdhYyAmJiAhcGFyYW1zWyduZXZlclRyeUdBQyddKSB7XG4gICAgICAgICAgICAvLyBTb21ldGltZXMgZ2FjIGlzIHNldCB3aXRoIHN1cnJvdW5kaW5nIGRvdWJsZS1xdW90ZXMgKGxpa2UgaW4gamF2YSkuIFN0cmlwIHF1b3Rlcy5cbiAgICAgICAgICAgIGlmIChnYWMuY2hhckF0KDApID09PSAnXCInICYmIGdhYy5jaGFyQXQoZ2FjLmxlbmd0aCAtIDEpID09PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgZ2FjID0gZ2FjLnN1YnN0cmluZygxLCBnYWMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfdHJpZWRHQUNzW2dhY10pIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpOyAvLyBBbHJlYWR5IHRyaWVkLCBkb24ndCB0cnkgYWdhaW4uXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RyaWVkR0FDc1tnYWNdID0gdHJ1ZTtcblxuICAgICAgICAgICAgZ2lneWEuc29jaWFsaXplLnVwZGF0ZVJlZlVJRCgpO1xuXG4gICAgICAgICAgICBnaWd5YS5zb2NpYWxpemUubm90aWZ5TG9naW4oXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZ25vcmVBcGlRdWV1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmV2ZXJUcnlHQUM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGF1dGhDb2RlOiBnYWMsXG4gICAgICAgICAgICAgICAgICAgIEFQSUtleTogZ2lneWEudGhpc1NjcmlwdC5BUElLZXksXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudF9pZDogZ2lneWEudGhpc1NjcmlwdC5BUElLZXlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW50ZW50aW9uYWxseSB3ZSdyZSBub3QgcmFpc2luZyBvbkxvZ2luIGV2ZW50LCBhcyBubyBsb2dpbiB3YXMgbWFkZSwganVzdCBlc3RhYmxpc2hlZCAodmVyaWZpZWQgaW4gYnVnIDQzNDE5KS5cbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuY29va2llLnJlbW92ZSgnZ2FjXycgKyBnaWd5YS50aGlzU2NyaXB0LkFQSUtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXZlclRyeUdBQyBpcyB1c2VkIHRvIGF2b2lkIHRyeWluZyBzZXRGcm9tR2FjIGZvcmV2ZXIgaWYgdGhlIGNvb2tpZSB3YXNuJ3QgcmVtb3ZlZCAod2hlbiBhIHdyb25nIGJhc2VEb21haW4gaXMgdXNlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5yZWZyZXNoVUkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldmVyVHJ5R0FDOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH1cbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRGcm9tU3NvUmVzcG9uc2UocmVzOiBHZXRHcm91cFRva2VuUmVzcG9uc2UsIEFQSUtleTogc3RyaW5nID0gZ2lneWEudGhpc1NjcmlwdC5BUElLZXkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgcmVzb2x2ZSA9PiB7XG4gICAgICAgIGlmICghcmVzKSByZXR1cm47XG4gICAgICAgIHN3aXRjaCAocmVzLmVycm9yQ29kZSkge1xuICAgICAgICAgICAgY2FzZSBHU0Vycm9ycy5VTkFVVEhPUklaRURfVVNFUjpcbiAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbyhgbm8gZ3JvdXAgc2Vzc2lvbiBmb3VuZGApO1xuICAgICAgICAgICAgICAgIHJlbW92ZShBUElLZXkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHU0Vycm9ycy5JTlZBTElEX1RPS0VOOlxuICAgICAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGBleGlzdGluZyBncm91cCBzZXNzaW9uIHdhcyByZXZva2VkYCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlKEFQSUtleSk7XG4gICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmdsb2JhbC5kaXNwYXRjaFdoZW5IYW5kbGVyQWRkZWQoe2V2ZW50TmFtZTogJ2FjY291bnRzLmxvZ291dCd9KTtcbiAgICAgICAgICAgICAgICBnaWd5YS5ldmVudHMuZ2xvYmFsLmRpc3BhdGNoV2hlbkhhbmRsZXJBZGRlZCh7ZXZlbnROYW1lOiAnbG9nb3V0J30pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHU0Vycm9ycy5UT0tFTl9IQVNfUkVORVdFRDpcbiAgICAgICAgICAgIGNhc2UgR1NFcnJvcnMuT0s6XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMubG9naW5fdG9rZW4pIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGBuZXcgc2Vzc2lvbiBmcm9tIGdyb3VwYCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgZXhwaXJlc19pbjogbnVtYmVyIHwgc3RyaW5nO1xuICAgICAgICAgICAgICAgIGxldCBncm91cENvbnRleHQ6IGFueTtcbiAgICAgICAgICAgICAgICBpZiAocmVzLmdyb3VwQ29udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBncm91cENvbnRleHQgPSBKU09OLnBhcnNlKHJlcy5ncm91cENvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWlzR2lneWFDb29raWVEb21haW4oKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJdCBzaG91bGQgbmV2ZXIgZXhwaXJlIGlmIGEgZ2x0ZXhwIGlzIHByZXNlbnQuXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZXNfaW4gPSAhcmVzLmdsdGV4cCA/IHJlcy5leHBpcmVzX2luIDogZ2lneWEudXRpbHMuY29va2llLmdldEluZmluaXRlRXhwaXJhdGlvblRpbWVJblNlY29uZHMoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgbG9naW4gdG9rZW4gY29va2llXG4gICAgICAgICAgICAgICAgICAgIHNldChBUElLZXksIHJlcy5sb2dpbl90b2tlbiwgZXhwaXJlc19pbik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2x0ZXhwQ29va2llTmFtZSA9IGBnbHRleHBfJHtBUElLZXl9YDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5nbHRleHAgJiYgIWdpZ3lhLnV0aWxzLmNvb2tpZS5nZXQoZ2x0ZXhwQ29va2llTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLmNvb2tpZS5zZXQoZ2x0ZXhwQ29va2llTmFtZSwgcmVzLmdsdGV4cCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBkaXNwYXRjaExvZ2luRXZlbnQoe2V4cGlyZXNfaW4sIGdyb3VwQ29udGV4dH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHU0Vycm9ycy5ORVRXT1JLX0VSUk9SOlxuICAgICAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci5lcnJvcihgZ2lneWE6IGVycm9yIGxvYWRpbmcgc3NvIGZyYW1lYCwge3Jlc30pO1xuICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5nbG9iYWwuZGlzcGF0Y2hXaGVuSGFuZGxlcnNBZGRlZChbJ2FjY291bnRzLmVycm9yJywgJ3NvY2lhbGl6ZS5lcnJvciddLCByZXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuZXJyb3IoYHNzbzogdW5zdXBwb3J0ZWQgcmVzcG9uc2VgKTtcbiAgICAgICAgICAgICAgICB0aHJvdyAnZ2lneWE6IHVuc3VwcG9ydGVkIHJlc3BvbnNlIGZyb20gc3NvJztcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGlzcGF0Y2hMb2dpbkV2ZW50KGV2ZW50UGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIGdpZ3lhLnV0aWxzLnF1ZXVlLmhvbGQoJ3ZlcmlmeUxvZ2luJywgJ0FQSScpO1xuICAgICAgICBnaWd5YS5hY2NvdW50cy52ZXJpZnlMb2dpbih7XG4gICAgICAgICAgICBpZ25vcmVBcGlRdWV1ZTogdHJ1ZSwgLy8gaWdub3JlIHRoZSBhcGkgcXVldWVcbiAgICAgICAgICAgIHN1cHByZXNzTG9naW5FdmVudDogdHJ1ZSwgLy8gdGhlIGNhbGxiYWNrIGJlbG93IHdpbGwgdHJpZ2dlciB0aGUgbG9naW4gZXZlbnRzXG4gICAgICAgICAgICBpbmNsdWRlOiBnaWd5YS51dGlscy5zdHJpbmdVdGlscy5tZXJnZUNvbW1hU2VwYXJhdGVkVmFsdWVzKCdwcm9maWxlLGRhdGEnLCBnaWd5YS50aGlzU2NyaXB0Lmdsb2JhbENvbmZbJ2luY2x1ZGUnXSksXG4gICAgICAgICAgICBleHRyYVByb2ZpbGVGaWVsZHM6ICdzYW1sRGF0YScsXG4gICAgICAgICAgICBjYWxsYmFjazogYWNjb3VudEluZm9SZXMgPT4ge1xuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLnF1ZXVlLnJlbGVhc2UoJ3ZlcmlmeUxvZ2luJywgJ0FQSScpOyAvLyByZWxlYXNlIHRoZSBhcGkgcXVldWVcbiAgICAgICAgICAgICAgICBzZXNzaW9uRGF0YS5zZXRJc1Nlc3Npb25WZXJpZmllZChnZXQoKSwgYWNjb3VudEluZm9SZXMuZXJyb3JDb2RlID09IEdTRXJyb3JzLk9LKTtcblxuICAgICAgICAgICAgICAgIC8vIHVzZSB3aGF0ZXZlciBmaWVsZCB5b3UgbmVlZCBmcm9tIGFjY291bnRJbmZvUmVzIG5vdyBiZWZvcmUgYWNjb3VudEluZm9SZXMgd2lsbCBiZSBvdmVycmlkZGVuIChzdWNoIGFzICdzb3VyY2UnKVxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGFjY291bnRJbmZvUmVzLnNvdXJjZTtcblxuICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5nbG9iYWwuZGlzcGF0Y2hXaGVuSGFuZGxlckFkZGVkKHsgZXZlbnROYW1lOiAnc29jaWFsaXplLmxvZ2luJyB9LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAoZXZlbnRPYmo6IE9iamVjdCwgY2FsbGJhY2s6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWV2ZW50T2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRPYmogPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50T2JqID0gZ2lneWEudXRpbHMub2JqZWN0Lm1lcmdlKFtldmVudE9iaiwgZXZlbnRQYXJhbXNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY2NvdW50SW5mb1Jlcy5lcnJvckNvZGUgPT0gR1NFcnJvcnMuT0spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5zb2NpYWxpemUuZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduSURzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYUZpZWxkczogJ3NhbWxEYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IHVzZXJJbmZvUmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VySW5mb1Jlcy5lcnJvckNvZGUgPT0gR1NFcnJvcnMuT0spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE9iaiA9IGdpZ3lhLl8uYWRkVXNlckluZm9Ub0V2ZW50KHVzZXJJbmZvUmVzLCB7ZXZlbnROYW1lOiAnbG9naW4nfSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub3JtYWxpemluZyBldmVudCBmaWVsZHMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRPYmpbJ3NvdXJjZSddID0gc291cmNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50T2JqWyduZXdVc2VyJ10gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE9ialsncHJvdmlkZXInXSA9ICdzaXRlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE9ialsnbG9naW5Nb2RlJ10gPSAnc3RhbmRhcmQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudE9ialsndXNlciddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50T2JqWyd1c2VyJ10uZXJyb3JDb2RlID0gdXNlckluZm9SZXMuZXJyb3JDb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE9ialsndXNlciddLmNhbGxJZCA9IHVzZXJJbmZvUmVzLmNhbGxJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50SW5mb1Jlcy5pZF90b2tlbiAmJiAoZXZlbnRPYmpbJ2lkX3Rva2VuJ10gPSBhY2NvdW50SW5mb1Jlcy5pZF90b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50T2JqWydjYW5jZWwnXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhldmVudE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRPYmpbJ2NhbmNlbCddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhldmVudE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmdsb2JhbC5kaXNwYXRjaFdoZW5IYW5kbGVyQWRkZWQoeyBldmVudE5hbWU6ICdhY2NvdW50cy5sb2dpbicgfSwgbnVsbCwgYXN5bmMgKGV2ZW50T2JqOiBPYmplY3QsIGNhbGxiYWNrOiBGdW5jdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWV2ZW50T2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudE9iaiA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZXZlbnRPYmogPSBnaWd5YS51dGlscy5vYmplY3QubWVyZ2UoW2V2ZW50T2JqLCBldmVudFBhcmFtc10pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY2NvdW50SW5mb1Jlcy5lcnJvckNvZGUgPT0gR1NFcnJvcnMuT0spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50T2JqWydldmVudE5hbWUnXSA9ICdhY2NvdW50cy5sb2dpbic7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFjY291bnRJbmZvUmVzLlVJRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRJbmZvUmVzID0gYXdhaXQgbmV3IFByb21pc2U8YW55PihyID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLmFjY291bnRzLmdldEFjY291bnRJbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiByLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogZ2lneWEudXRpbHMuc3RyaW5nVXRpbHMubWVyZ2VDb21tYVNlcGFyYXRlZFZhbHVlcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncHJvZmlsZSxkYXRhJywgZ2lneWEudGhpc1NjcmlwdC5nbG9iYWxDb25mWydpbmNsdWRlJ10pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMub2JqZWN0LmV4dHJhY3RQcm9wZXJ0aWVzKGFjY291bnRJbmZvUmVzLCBldmVudE9iaiwgJ3NpZ25hdHVyZXxVSURTaWd8dGltZXN0YW1wfFVJRFNpZ25hdHVyZXxzaWduYXR1cmVUaW1lc3RhbXB8VUlEfHByb2ZpbGV8ZGF0YXxkYXRhQ2VudGVyfGlkX3Rva2VufGdyb3VwcycpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRPYmpbJ2NhbmNlbCddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhldmVudE9iaik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmUoQVBJS2V5ID0gZ2lneWEudGhpc1NjcmlwdC5BUElLZXkpIHtcbiAgICBpZiAoZ2V0KEFQSUtleSkpIHtcbiAgICAgICAgZ2lneWEubG9nZ2VyLmluZm8oYHJlbW92aW5nIGxvZ2luIHRva2VuYCk7XG4gICAgfVxuICAgIGdpZ3lhLnV0aWxzLmNvb2tpZS5yZW1vdmUoYGdsdF8ke0FQSUtleX1gKTtcbiAgICBnaWd5YS51dGlscy5jb29raWUucmVtb3ZlKCdfZ2lnX2x0Jyk7XG4gICAgZ2lneWEudXRpbHMuY29va2llLnJlbW92ZShgZ2x0ZXhwXyR7QVBJS2V5fWApO1xuICAgIGlmIChnaWd5YS5wYXJ0bmVyU2V0dGluZ3Muc3NvS2V5KSB7XG4gICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGByZW1vdmluZyBncm91cCBsb2dpbiB0b2tlbmApO1xuICAgICAgICBjb25zdCBzZXJ2aWNlID0gYXdhaXQgU3NvU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICByZXR1cm4gc2VydmljZS5yZW1vdmVUb2tlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9rZW5QYXJhbShBUElLZXk6IHN0cmluZywgcGFyYW1OYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBsdCA9IGdpZ3lhLnV0aWxzLmNvb2tpZS5nZXQoX2dldFRva2VuQ29va2llTmFtZShBUElLZXkpKTtcbiAgICBpZiAobHQpIHtcbiAgICAgICAgY29uc3QgbHRTZWdzID0gbHQuc3BsaXQoJ3wnKTtcbiAgICAgICAgaWYgKGx0U2Vncy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2lneWEudXRpbHMua2V5VmFsdWUuZGVzZXJpYWxpemUobHRTZWdzWzFdKVtwYXJhbU5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBpc0dpZ3lhQ29va2llRG9tYWluKCkge1xuICAgIGNvbnN0IGNvb2tpZURvbWFpbiA9IGdpZ3lhLnV0aWxzLmNvb2tpZS5nZXREZWZhdWx0RG9tYWluKCk7XG4gICAgcmV0dXJuIGdpZ3lhLnV0aWxzLnN0cmluZ1V0aWxzLmVuZHNXaXRoKGNvb2tpZURvbWFpbiwgZ2lneWEuZGVmYXVsdEFwaURvbWFpbik7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0QmVhcmVyVG9rZW4oYmVhcmVyVG9rZW46IHN0cmluZykge1xuICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGBzZXR0aW5nIGEgbmV3IEJlYXJlciB0b2tlbmApO1xuICAgIF9iZWFyZXJUb2tlbiA9ICdCZWFyZXIgJyArIGJlYXJlclRva2VuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEJlYXJlclRva2VuKCkge1xuICAgIHJldHVybiBfYmVhcmVyVG9rZW47XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQmVhcmVyVG9rZW4oKSB7XG4gICAgZ2lneWEubG9nZ2VyLmluZm8oYEJlYXJlciB0b2tlbiByZW1vdmVkYCk7XG4gICAgX2JlYXJlclRva2VuID0gbnVsbDtcbn1cbiIsImV4cG9ydCBlbnVtIFBsdWdpblN0eWxlIHtcbiAgICBfdW5kZWZpbmVkID0gMCxcbiAgICBub25lLFxuICAgIGxlZ2FjeSxcbiAgICBtb2Rlcm4sXG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UGx1Z2luU3R5bGVDbGFzcyhzdHlsZTogUGx1Z2luU3R5bGUpOiBzdHJpbmcge1xuICAgIHJldHVybiAnZ2lneWEtc3R5bGUtJyArIFBsdWdpblN0eWxlW3N0eWxlXTtcbn1cbiIsImltcG9ydCB7IElCYXNlT2JqZWN0UGFyYW0gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvQmFzZU9iamVjdC9CYXNlT2JqZWN0JztcblxuZXhwb3J0IGVudW0gRGV2aWNlVHlwZXMge1xuICAgIF91bmRlZmluZWQsXG4gICAgZGVza3RvcCxcbiAgICBtb2JpbGUsXG4gICAgYXV0byxcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSUJhc2VPYmplY3RDb25maWc8UCBleHRlbmRzIElCYXNlT2JqZWN0UGFyYW0+IHtcbiAgICAvLyBNZXJnZWQgZnJvbSBJSW5qZWN0aW9uSW5mb1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgbmFtZXNwYWNlPzogc3RyaW5nO1xuICAgIG1ldGhvZE5hbWU/OiBzdHJpbmc7XG4gICAganNOYW1lPzogc3RyaW5nO1xuICAgIGRlZmF1bHREZXZpY2VUeXBlPzogRGV2aWNlVHlwZXM7XG5cbiAgICAvLyBEZWZhdWx0IHBhcmFtcyB0aGF0IHdpbGwgYmUgbWVyZ2VkIHRvIHRoZSBmaW5hbCBwYXJhbXMgb2JqZWN0XG4gICAgZGVmYXVsdFBhcmFtczogUDtcblxuICAgIC8vIFJlcXVpcmVkIHBhcmFtcy4gSWYgb25lIG9mIHRoZXNlIGlzbid0IHByb3ZpZGVkIChhbmQgaXNuJ3QgaW4gdGhlIGRlZmF1bHRQYXJhbXMpLCBhbiBlcnJvciB3aWxsIGJlIGludm9rZWQuXG4gICAgcmVxdWlyZWRQYXJhbXM6IEFycmF5PHN0cmluZz47XG59XG4iLCJpbXBvcnQgeyBBY3Rpdml0eVR5cGUsIEVycm9yRXZlbnRIYW5kbGVyLCBFdmVudEhhbmRsZXIsIElGbG93UGFyYW1zIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xuaW1wb3J0IHsgcXVldWVGb3JFeGVjdXRpb24gfSBmcm9tIFwiLi4vVXRpbHMvcXVldWVcIjtcbmltcG9ydCB7IEluaXRBY3Rpdml0eSB9IGZyb20gXCIuL2FjdGl2aXRpZXMvSW5pdEFjdGl2aXR5XCI7XG5pbXBvcnQgeyBBY3Rpdml0eUxpYnJhcnkgfSBmcm9tIFwiLi9hY3Rpdml0aWVzL0FjdGl2aXR5TGlicmFyeVwiO1xuaW1wb3J0IHsgU2NyZWVuU2V0QWN0aXZpdHkgfSBmcm9tIFwiLi9hY3Rpdml0aWVzL1NjcmVlblNldEFjdGl2aXR5XCI7XG5pbXBvcnQgeyBFdmVudEFjdGl2aXR5IH0gZnJvbSBcIi4vYWN0aXZpdGllcy9FdmVudEFjdGl2aXR5XCI7XG5cbmV4cG9ydCBjbGFzcyBGbG93IHtcbiAgcHVibGljIGV2ZW50TWFwOiBNYXA8c3RyaW5nLCBFdmVudEhhbmRsZXI+O1xuICBwdWJsaWMgZXJyb3JIYW5kbGVyPzogRXJyb3JFdmVudEhhbmRsZXI7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGlkZW50aXR5Rmxvd0lkOiBzdHJpbmcsIHB1YmxpYyBmbG93UGFyYW1zPzogSUZsb3dQYXJhbXMsIHByaXZhdGUgb25Db21wbGV0ZT86ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLmV2ZW50TWFwID0gbmV3IE1hcDxzdHJpbmcsIEV2ZW50SGFuZGxlcj4oKTtcbiAgfVxuXG4gIHB1YmxpYyBvbihldmVudE5hbWU6IHN0cmluZywgZXZlbnRIYW5kbGVyOiBFdmVudEhhbmRsZXIpOiBGbG93IHtcbiAgICB0aGlzLmV2ZW50TWFwLnNldChldmVudE5hbWUsIGV2ZW50SGFuZGxlcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgZXJyb3IoZXZlbnRIYW5kbGVyOiBFcnJvckV2ZW50SGFuZGxlcik6IEZsb3cge1xuICAgIHRoaXMuZXJyb3JIYW5kbGVyID0gZXZlbnRIYW5kbGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGV4ZWN1dGUoKSB7XG4gICAgaWYgKEFjdGl2aXR5TGlicmFyeS5pc0VtcHR5KCkpIHtcbiAgICAgIEFjdGl2aXR5TGlicmFyeS5yZWdpc3RlckFjdGl2aXR5KEFjdGl2aXR5VHlwZS5TY3JlZW5TZXQsIFNjcmVlblNldEFjdGl2aXR5KTtcbiAgICAgIEFjdGl2aXR5TGlicmFyeS5yZWdpc3RlckFjdGl2aXR5KEFjdGl2aXR5VHlwZS5FdmVudCwgRXZlbnRBY3Rpdml0eSk7XG4gICAgfVxuICAgIHF1ZXVlRm9yRXhlY3V0aW9uKFwiQVBJXCIsICgpID0+IHtcbiAgICAgIG5ldyBJbml0QWN0aXZpdHkodGhpcywgbnVsbCkucnVuKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZmluaXNoKCkge1xuICAgIHRoaXMub25Db21wbGV0ZSAmJiB0aGlzLm9uQ29tcGxldGUoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxvdyhmbG93SWQ6IHN0cmluZywgcGFyYW1zPzogSUZsb3dQYXJhbXMsIG9uQ29tcGxldGU/OiAoKSA9PiB2b2lkKSB7XG4gIHJldHVybiBuZXcgRmxvdyhmbG93SWQsIHBhcmFtcywgb25Db21wbGV0ZSk7XG59XG4iLCJpbXBvcnQge0Jhc2VBY3Rpdml0eX0gZnJvbSAnLi9CYXNlQWN0aXZpdHknO1xuaW1wb3J0IHtBY3Rpdml0eVR5cGUsIElGbG93UmVzcG9uc2V9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtGbG93fSBmcm9tICcuLi9GbG93JztcblxudHlwZSBBY3Rpdml0eSA9IHsgbmV3IChmbG93OiBGbG93LCBwYXJhbXM6IElGbG93UmVzcG9uc2UpOiBCYXNlQWN0aXZpdHkgfTtcblxuZXhwb3J0IGNsYXNzIEFjdGl2aXR5TGlicmFyeSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgYWN0aXZpdHlNYXAgPSBuZXcgTWFwPEFjdGl2aXR5VHlwZSwgQWN0aXZpdHk+KCk7XG4gICAgXG4gICAgcHVibGljIHN0YXRpYyBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5hY3Rpdml0eU1hcCkubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyQWN0aXZpdHkodHlwZTogQWN0aXZpdHlUeXBlLCBhY3Rpdml0eTogQWN0aXZpdHkpIHtcbiAgICAgICAgdGhpcy5hY3Rpdml0eU1hcC5zZXQodHlwZSwgYWN0aXZpdHkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0QWN0aXZpdHkoZmxvdzogRmxvdywgcGFyYW1zPzogSUZsb3dSZXNwb25zZSk6IEJhc2VBY3Rpdml0eSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2aXR5TWFwLmhhcyhwYXJhbXM/LmFjdGl2aXR5VHlwZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IEFjdGl2aXR5ID0gdGhpcy5hY3Rpdml0eU1hcC5nZXQocGFyYW1zLmFjdGl2aXR5VHlwZSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFjdGl2aXR5KGZsb3csIHBhcmFtcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyB0b2tlblN0b3JlIGZyb20gJy4uLy4uLy4uLy4uL0dpZ3lhLkpzLkFkYXB0ZXJzLldlYi9hcHAvVG9rZW5TdG9yZSc7XG5pbXBvcnQge1JlcXVlc3RQcm92aWRlcn0gZnJvbSAnc3JjL2NvcmUvQXBpU2VydmljZS9hcHAvUmVxdWVzdFByb3ZpZGVyJztcbmltcG9ydCB7SUZsb3dSZXNwb25zZX0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQge0FjdGl2aXR5TGlicmFyeX0gZnJvbSAnLi9BY3Rpdml0eUxpYnJhcnknO1xuaW1wb3J0IHtHU0Vycm9yc30gZnJvbSAnLi4vLi4vR1NFcnJvcnMnO1xuaW1wb3J0IHtGbG93fSBmcm9tICcuLi9GbG93JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VBY3Rpdml0eSB7XG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGZsb3c6IEZsb3csXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIHBhcmFtczogSUZsb3dSZXNwb25zZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yZXF1ZXN0UHJvdmlkZXIgPSBuZXcgUmVxdWVzdFByb3ZpZGVyKCkpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgYXN5bmMgcnVuKCk7XG5cbiAgICBwdWJsaWMgYXN5bmMgbmV4dCh1cmw6IHN0cmluZykgeyAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZmV0Y2godXJsKTtcblxuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgIC8vIFdoZW4gcmVzcG9uc2UgaXMgbnVsbCBpdCBtZWFucyBubyBhY3Rpdml0eSB0byBydW4gbmV4dCwgc28gZmxvdyBjb25zaWRlcmVkIGFzIGRvbmVcbiAgICAgICAgICB0aGlzLmZsb3cuZmluaXNoKCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9yQ29kZSA9PT0gR1NFcnJvcnMuT0spIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2aXR5ID0gQWN0aXZpdHlMaWJyYXJ5LmdldEFjdGl2aXR5KHRoaXMuZmxvdywgcmVzdWx0KTtcblxuICAgICAgICAgICAgYWN0aXZpdHkgPyBhY3Rpdml0eS5ydW4oKSA6IHRoaXMuZmxvdy5maW5pc2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmxvdy5lcnJvckhhbmRsZXIocmVzdWx0KTsgICAgICAgICBcbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFJlcXVlc3RQYXJhbXMoKSB7XG4gICAgICAgIGNvbnN0IGFwaUtleSA9IGdpZ3lhLnRoaXNTY3JpcHQuQVBJS2V5O1xuICAgICAgICBjb25zdCBsb2dpblRva2VuID0gdG9rZW5TdG9yZS5nZXQoYXBpS2V5KTtcblxuICAgICAgICBsZXQgcGFyYW1zID0ge307XG4gICAgICAgIHBhcmFtc1snQVBJS2V5J10gPSBhcGlLZXk7XG5cbiAgICAgICAgaWYgKGxvZ2luVG9rZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGxvZ2luVG9rZW5FeHAgPSB0b2tlblN0b3JlLmdldEdsdGV4cENvb2tpZShhcGlLZXkpO1xuICAgICAgICAgICAgaWYgKGxvZ2luVG9rZW5FeHAgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbJ2xvZ2luVG9rZW5FeHAnXSA9IGxvZ2luVG9rZW5FeHA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhcmFtc1snbG9naW5fdG9rZW4nXSA9IGxvZ2luVG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgcGFyYW1zWydhdXRoTW9kZSddID0gJ2Nvb2tpZSc7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgYXN5bmMgZmV0Y2godXJsOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBiYXNlRG9tYWluID0gYGh0dHBzOi8vJHtnaWd5YS5fLmdldEFwaURvbWFpbignYWNjb3VudHMnKX1gO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5fcmVxdWVzdFByb3ZpZGVyLnNlbmQoYmFzZURvbWFpbiwgYHdvcmtmbG93JHt1cmx9YCwgdGhpcy5nZXRSZXF1ZXN0UGFyYW1zKCksIHt9LCB7fSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci5yZXBvcnQoJ0Zsb3cgcmVxdWVzdCBmYWlsJywge3VybCwgZX0pO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQge0Jhc2VBY3Rpdml0eX0gZnJvbSAnLi9CYXNlQWN0aXZpdHknO1xuaW1wb3J0IHtBY3Rpdml0eVR5cGV9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtBY3Rpdml0eUxpYnJhcnl9IGZyb20gJy4vQWN0aXZpdHlMaWJyYXJ5JztcblxuZXhwb3J0IGNsYXNzIEV2ZW50QWN0aXZpdHkgZXh0ZW5kcyBCYXNlQWN0aXZpdHkge1xuICAgIHB1YmxpYyBhc3luYyBydW4oKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmZsb3cuZXZlbnRNYXAuZ2V0KHRoaXMucGFyYW1zLmV2ZW50TmFtZSk7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGhhbmRsZXIoe1xuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWU6IHRoaXMucGFyYW1zLmV2ZW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgd29ya2Zsb3dEZWZpbml0aW9uSWQ6IHRoaXMuZmxvdy5pZGVudGl0eUZsb3dJZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLmFmdGVyRXZlbnRVcmwgJiYgdGhpcy5uZXh0KHRoaXMucGFyYW1zLmFmdGVyRXZlbnRVcmwpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmxvdy5lcnJvckhhbmRsZXIoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkFjdGl2aXR5TGlicmFyeS5yZWdpc3RlckFjdGl2aXR5KEFjdGl2aXR5VHlwZS5FdmVudCwgRXZlbnRBY3Rpdml0eSk7XG4iLCJpbXBvcnQge0Jhc2VBY3Rpdml0eX0gZnJvbSAnLi9CYXNlQWN0aXZpdHknO1xuXG5leHBvcnQgY2xhc3MgSW5pdEFjdGl2aXR5IGV4dGVuZHMgQmFzZUFjdGl2aXR5IHtcbiAgICBwdWJsaWMgYXN5bmMgcnVuKCkge1xuICAgICAgICBhd2FpdCB0aGlzLm5leHQoYC9ydW50aW1lL3YxL3dvcmtmbG93RGVmaW5pdGlvbnMvJHt0aGlzLmZsb3cuaWRlbnRpdHlGbG93SWR9L2Rpc3BhdGNoYCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtCYXNlQWN0aXZpdHl9IGZyb20gJy4vQmFzZUFjdGl2aXR5JztcbmltcG9ydCB7QWN0aXZpdHlUeXBlfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7R1NFcnJvcnN9IGZyb20gJy4uLy4uL0dTRXJyb3JzJztcbmltcG9ydCB7QWN0aXZpdHlMaWJyYXJ5fSBmcm9tICcuL0FjdGl2aXR5TGlicmFyeSc7XG5cbmV4cG9ydCBjbGFzcyBTY3JlZW5TZXRBY3Rpdml0eSBleHRlbmRzIEJhc2VBY3Rpdml0eSB7XG4gICAgcHVibGljIGFzeW5jIHJ1bigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhcmFtcy5zY3JlZW5TZXQgfHwgIXRoaXMucGFyYW1zLnN0YXJ0U2NyZWVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZ2lneWEuYWNjb3VudHMuc2hvd1NjcmVlblNldCh7XG4gICAgICAgICAgICAuLi50aGlzLmZsb3cuZmxvd1BhcmFtcz8uc2NyZWVuU2V0UGFyYW1zLFxuICAgICAgICAgICAgc2NyZWVuU2V0OiB0aGlzLnBhcmFtcy5zY3JlZW5TZXQsXG4gICAgICAgICAgICBzdGFydFNjcmVlbjogdGhpcy5wYXJhbXMuc3RhcnRTY3JlZW4sXG4gICAgICAgICAgICBvbkFmdGVyU3VibWl0OiAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQucmVzcG9uc2U/LmVycm9yQ29kZSA9PT0gR1NFcnJvcnMuT0spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbXMub25TdWJtaXRVcmwgJiYgdGhpcy5uZXh0KHRoaXMucGFyYW1zLm9uU3VibWl0VXJsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZsb3cuZXJyb3JIYW5kbGVyKGV2ZW50LnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuQWN0aXZpdHlMaWJyYXJ5LnJlZ2lzdGVyQWN0aXZpdHkoQWN0aXZpdHlUeXBlLlNjcmVlblNldCwgU2NyZWVuU2V0QWN0aXZpdHkpO1xuIiwiaW1wb3J0IHtJR2lneWFSZXNwb25zZX0gZnJvbSAnLi4vLi4vLi4vLi4vYWNjb3VudHMvR2lneWEuSlMuUGx1Z2luLnNjcmVlblNldDIvYXBwL1NjcmVlblNldFBsdWdpbic7XG5cbmV4cG9ydCB0eXBlIEV2ZW50SGFuZGxlciA9IChldmVudERhdGE6IElFdmVudERhdGEpID0+IHZvaWQ7XG5leHBvcnQgdHlwZSBFcnJvckV2ZW50SGFuZGxlciA9IChlcnJvckRhdGE6IGFueSkgPT4gdm9pZDtcblxuZXhwb3J0IGVudW0gQWN0aXZpdHlUeXBlIHtcbiAgICBFdmVudCA9ICdFdmVudCcsXG4gICAgU2NyZWVuU2V0ID0gJ1NjcmVlblNldCdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmxvd1Jlc3BvbnNlIGV4dGVuZHMgSUdpZ3lhUmVzcG9uc2Uge1xuICAgIGFjdGl2aXR5VHlwZTogQWN0aXZpdHlUeXBlO1xuICAgIHdvcmtmbG93RGVmaW5pdGlvbklkOiBzdHJpbmc7XG4gICAgcmVzcG9uc2VUZXh0Pzogc3RyaW5nO1xuICAgIHNjcmVlblNldD86IHN0cmluZztcbiAgICBzdGFydFNjcmVlbj86IHN0cmluZztcbiAgICBldmVudE5hbWU/OiBzdHJpbmc7XG4gICAgb25TdWJtaXRVcmw/OiBzdHJpbmc7XG4gICAgYWZ0ZXJFdmVudFVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnREYXRhIHtcbiAgICB3b3JrZmxvd0RlZmluaXRpb25JZDogc3RyaW5nO1xuICAgIGV2ZW50TmFtZTogc3RyaW5nO1xuICAgIGRhdGE/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZsb3dQYXJhbXN7XG4gICAgc2NyZWVuU2V0UGFyYW1zPzphbnk7XG59IiwiZXhwb3J0IGNvbnN0IGVudW0gR1NFcnJvcnMge1xuICAgIE9LID0gMCxcbiAgICBEYXRhX1BlbmRpbmcgPSAxMDAwMDEsIC8vIERhdGEgaXMgc3RpbGwgYmVpbmcgcHJvY2Vzc2VkLCBxdWVyeSBhZ2FpbiBmb3IgdGhlIHJlc3BvbnNlXG4gICAgTkVUV09SS19FUlJPUiA9IDUwMDAyNixcbiAgICBEQVRBX1BFTkRJTkcgPSAxMDAwMDEsIC8vIERhdGEgaXMgc3RpbGwgYmVpbmcgcHJvY2Vzc2VkLCBxdWVyeSBhZ2FpbiBmb3IgdGhlIHJlc3BvbnNlXG4gICAgT1BFUkFUSU9OX0NBTkNFTEVEID0gMjAwMDAxLCAvLyB1c2VyIGNhbmNlbGVkLCBpbiBsb2dpbiBwcm9jZXNzXG4gICAgUEVSTUlTU0lPTl9HUkFOVEVEID0gMjAwMDAyLCAvLyBJbm5lciBjb2RlXG4gICAgUEVSTUlTU0lPTl9OT1RfR1JBTlRFRCA9IDIwMDAwMywgLy8gSW5uZXIgY29kZVxuICAgIFJFRElSRUNUID0gMjAwMDA0LCAvLyBJbm5lciBjb2RlXG4gICAgTkVXX1VTRVIgPSAyMDAwMDUsIC8vIElubmVyIGNvZGVcbiAgICBPUEVSQVRJT05fRE9ORSA9IDIwMDAwNiwgLy8gSW5uZXIgY29kZVxuICAgIFVQREFURV9VU0VSID0gMjAwMDA3LCAvLyBJbm5lciBjb2RlXG4gICAgT0tfV0lUSF9FUlJPUlMgPSAyMDAwMDgsIC8vIEZvciByZXBvcnRzIC0gd2hlbiB3ZSByZXR1cm4gb2sgdG8gY2xpZW50IGJ1dCBoYWQgYWNjZXB0YWJsZSBlcnJvcnMgKHRoYXQgd2Ugd2FudCB0byBrbm93IGFib3V0KSBvbiB0aGUgd2F5XG4gICAgQUNDT1VOVFNfTElOS0VEID0gMjAwMDA5LCAvLyBBZnRlciBsaW5raWduIGFjY291dG5zIHZpYSBsb2dpbiwgcmV0dXJuIHRoaXMgZXJyb3IgY29kZVxuICAgIE9LX1dJVEhfRVJST1JfTE9HSU5fSURFTlRJRklFUl9FWElTVFMgPSAyMDAwMTAsIC8vIEZvciBzZXRBY2NvdW50SW5mbyB1c2luZyB0aGUgY29uZmxpY3RIYW5kbGluZyBwYXJhbSAtIHByb2ZpbGUgd2FzIHNhdmVkLCBidXQgdGhlIGVtYWlsIGNvbmZsaWN0cyB3aXRoIGFub3RoZXIgdXNlclxuICAgIEFDQ09VTlRfUEVORElOR19SRUdJU1RSQVRJT04gPSAyMDYwMDEsIC8vIEZvciBhY2NvdW50cyBBUEksXG4gICAgQUNDT1VOVF9QRU5ESU5HX1ZFUklGSUNBVElPTiA9IDIwNjAwMiwgLy8gRm9yIGFjY291bnRzIEFQSTsgY29uc2lkZXIgbW92aW5nIHRvIDQwM3h4eCBzZWN0aW9uIGluIHRoZSBmdXR1cmUuXG4gICAgQUNDT1VOVF9NSVNTSU5HX0xPR0lOSUQgPSAyMDYwMDMsIC8vIEZvciBhY2NvdW50cyBBUElcbiAgICBJREVOVElUWV9BTFJFQURZX0FTU0lHTkVEID0gMjA2MDA0LCAvLyBGb3IgaW1wb3J0IGFjY291bnRzIEFQSVxuICAgIEFGVEVSX0VNQUlMX1ZFUklGSUNBVElPTiA9IDIwNjAwNSxcbiAgICBQRU5ESU5HX0NPREVfVkVSSUZJQ0FUSU9OID0gMjA2MDA2LFxuICAgIENMSUVOVF9MT0cgPSAzMDAwMDEsIC8vIGludGVybmFsLCBmb3IgcmVwb3J0aW5nIGVyb3JycyBpbiBjbGllbnQgU0RLU1xuICAgIElOVkFMSURfREFUQV9DRU5URVIgPSAzMDEwMDEsIC8vIFwiSW52YWxpZCBkYXRhLWNlbnRlclwiLiB3aXRoIGVycm9yIGRldGFpbHMgb2Y6IFwiVGhpcyBBUEkga2V5IGlzIHNlcnZlZCBieSBhbm90aGVyIGRhdGEgY2VudGVyXCIuXG4gICAgSU5WQUxJRF9SRVFVRVNUX0ZPUk1BVCA9IDQwMDAwMSwgLy8gY291bGQgYmUgYWxsIGtpbmQgb2YgZXJyb3JzIHdpdGggd3JvbmcgcmVxdWVzdCAobm9uIHNlY3VyZSB3aGVuIHNob3VsZCBiZSBzZWN1cmUsIHdyb25nIGF1dGhlbnRpY2F0aW9uIGhlYWRlcilcbiAgICBNSVNTSU5HX1JFUVVJUkVEX1BBUkFNRVRFUiA9IDQwMDAwMixcbiAgICBVTklRVUVfSURFTlRJRklFUl9FWElTVFMgPSA0MDAwMDMsXG4gICAgSU5WQUxJRF9QQVJBTUVURVJfRk9STUFUID0gNDAwMDA0LFxuICAgIElOVkFMSURfUEFSQU1FVEVSX1ZBTFVFID0gNDAwMDA2LFxuICAgIERVUExJQ0FURV9WQUxVRSA9IDQwMDAwNyxcbiAgICBJTlZBTElEX0FVVEhFTlRJQ0FUSU9OX0hFQURFUiA9IDQwMDAwOCwgLy8gT0F1dGgyXG4gICAgVkFMSURBVElPTl9FUlJPUiA9IDQwMDAwOSwgLy8gSW4gYWNjb3VudHMucmVnaXN0ZXIsIHdoZW5ldmVyIHRoZXJlIGlzIGEgdmFsaWRhdGlvbiBlcnJvclxuICAgIElOVkFMSURfUkVESVJFQ1RfVVJJID0gNDAwMDExLCAvLyBPQXV0aDJcbiAgICBJTlZBTElEX1JFU1BPTlNFX1RZUEUgPSA0MDAwMTIsIC8vIE9BdXRoMlxuICAgIFVOU1VQUE9SVEVEX0dSQU5UX1RZUEUgPSA0MDAwMTMsIC8vIE9BdXRoMlxuICAgIElOVkFMSURfR1JBTlQgPSA0MDAwMTQsIC8vIE9BdXRoMlxuICAgIENPREVfRVhQSVJFRCA9IDQwMDAxNSwgLy8gT0F1dGgyXG4gICAgU0NIRU1BX1ZBTElEQVRJT05fRkFJTEVEID0gNDAwMDIwLFxuICAgIENBUFRDSEFfVkVSSUZJQ0FUSU9OX0ZBSUxFRCA9IDQwMDAyMSxcbiAgICBVTklRVUVfSU5ERVhfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyMixcbiAgICBJTlZBTElEX1RZUEVfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyMyxcbiAgICBEWU5BTUlDX0ZJRUxEU19WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI0LFxuICAgIFdSSVRFX0FDQ0VTU19WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI1LFxuICAgIElOVkFMSURfRk9STUFUX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjYsXG4gICAgUkVRVUlSRURfVkFMVUVfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyNyxcbiAgICBFTUFJTF9OT1RfVkVSSUZJRUQgPSA0MDAwMjgsXG4gICAgU0NIRU1BX0NPTkZMSUNUX0VSUk9SID0gNDAwMDI5LCAvLyBUbyBoYW5kbGUgVXNlciBzdG9yeSAzNDMzMC4gSW1wcm92ZSBFbGFzdGljU2VhcmNoTWFwcGluZ0V4Y2VwdGlvbiBoYW5kbGluZyBpbiBEUy5JbmRleE9iamVjdFxuICAgIE9QRVJBVElPTl9OT1RfQUxMT1dFRCA9IDQwMDAzMCwgLy8gVXNlciBzdG9yeSAzNDMxMSAtIElmIGFkZENvbm5lY3Rpb24gaXMgY2FsbGVkIHJldHVybiBhbiBlcnJvciAoXCJvcGVyYXRpb24gbm90IGFsbG93ZWQgZm9yIHRoaXMgYWNjb3VudFwiLCA0MDBYWFggZXJyb3IpLlxuICAgIFNFQ1VSSVRZX1ZFUklGSUNBVElPTl9GQUlMRUQgPSA0MDAwNTAsXG4gICAgSU5WQUxJRF9BUElLRVlfUEFSQU1FVEVSID0gNDAwMDkzLFxuICAgIE5PVF9TVVBQT1JURUQgPSA0MDAwOTYsIC8vIHRoZSBmdW5jdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGJ5IGFueSBvZiB0aGUgY3VycmVudGx5IGNvbm5lY3RlZCBwcm92aWRlcnNcbiAgICBVTlNVUFBPUlRFRF9VU0VSX0FHRU5UID0gNDAwMDk3LCAvL1xuICAgIE5PX1BST1ZJREVSUyA9IDQwMDEwMCwgLy8gY2xpZW50P1xuICAgIFBPUFVQX0JMT0NLRUQgPSA0MDAxMDEsIC8vIGNsaWVudFxuICAgIElOVkFMSURfRVZFTlRfSEFORExFUiA9IDQwMDEwMiwgLy8gY2xpZW50XG4gICAgSU5WQUxJRF9DT05UQUlORVJJRCA9IDQwMDEwMywgLy8gY2xpZW50XG4gICAgTk9UX0NPTk5FQ1RFRCA9IDQwMDEwNiwgLy8gdXNlciBpcyBub3QgY29ubmVjdGVkIHRvIHRoZSByZXF1aXJlZCBuZXR3b3JrIG9yIHRvIGFueSBuZXR3b3JrXG4gICAgSU5WQUxJRF9TSVRFX0RPTUFJTiA9IDQwMDEyMCwgLy8gdGhlIGN1cnJlbnQgZG9tYWluIGRvZXMgbm90IG1hdGNoIHRoZSBkb21haW4gY29uZmlndXJlZCBmb3IgdGhlIGFwaSBrZXlcbiAgICBQUk9WSURFUl9DT05GSUdVUkFUSU9OX0VSUk9SID0gNDAwMTIyLCAvLyB0aGUgY3VycmVudCBkb21haW4gZG9lcyBub3QgbWF0Y2ggdGhlIGRvbWFpbiBjb25maWd1cmVkIGZvciB0aGUgYXBpIGtleVxuICAgIExJTUlUX1JFQUNIRUQgPSA0MDAxMjQsIC8vIEdhbWVNZWNoYW5pY3MgLSBDYXAgd2FzIHJlYWNoZWRcbiAgICBGUkVRVUVOQ1lfTElNSVRfUkVBQ0hFRCA9IDQwMDEyNSwgLy8gQ29tbWVudHMvRmVlZCAtIFNwYW0gQ2FwcyB3YXMgcmVhY2hlZFxuICAgIElOVkFMSURfQUNUSU9OID0gNDAwMTI2LCAvLyBHYW1lTWVjaGFuaWNzIC0gSW52YWxpZCBhY3Rpb24uIFRyaWdnZXJlZCBhY3Rpb24gY2FuJ3QgYmUgaW5pdGlhdGVkIGV4dGVybmFsbHlcbiAgICBJTlNVRkZJQ0lFTlRfUE9JTlRTX1RPX1JFREVFTSA9IDQwMDEyNywgLy8gR2FtZU1lY2hhbmljcyAtIEluc3VmZmljaWVudF9wb2ludHNfdG9fcmVkZWVtXG4gICAgU0lHTkFUVVJFX1RJTUVTVEFNUF9FWFBJUkVEID0gNDAwMTI4LCAvLyB0aGUgdGltZXN0YW1wIGluc2lkZSB0aGUgc2lnbmF0dXJlIGlzIGV4cGlyZWRcbiAgICBFcnJvcl9EdXJpbmdfRXh0ZW5zaW9uc19PcGVyYXRpb24gPSA0MDAzMDIsXG4gICAgRXh0ZW5zaW9uX1BvaW50X0N1c3RvbV9FcnJvciA9IDQwMDMwMywgLy8gRXh0ZW5zaW9uIHBvaW50IHJldHVybiBhIHVzZXJGYWNpbmdFcnJvck1lc3NhZ2VcbiAgICBJTlZBTElEX1BPTElDWV9DT05GSUdVUkFUSU9OID0gNDAxMDAwLCAvLyBQb2xpY3kgY29uZmlndXJhdGlvbiBpcyBpbnZhbGlkIChpLmUuIHByZXZlbnQgcmVnaXRyYXRpb24pXG4gICAgU1VTUEVDVEVEX1NQQU0gPSA0MDEwMTAsIC8vIFNvbWVvbmUgaXMgdHJ5aW5nIHRvIHVzZSBHaWd5YSB0byBzZW5kIGEgZW1haWwgd2l0aCBhIFVSTCB0aGF0IGRvZXMgbm90IG1hdGNoIGFueSBvZiB0aGUgY2xpZW50J3MgZG9tYWluczsgc3VzcGVjdGVkIHNwYW0uXG4gICAgTE9HSU5fRkFJTEVEX0NBUFRDSEFfUkVRVUlSRUQgPSA0MDEwMjAsIC8vIGFjY291bnRzLmxvZ2luIC0gY2FwdGNoYSByZXF1aXJlZFxuICAgIFJFUVVFU1RfRkFJTEVEX0NBUFRDSEFfUkVRVUlSRUQgPSA0MDEwMjMsIC8vIGFjY291bnRzLmxvZ2luIC0gY2FwdGNoYSByZXF1aXJlZFxuICAgIExPR0lOX0ZBSUxFRF9XUk9OR19DQVBUQ0hBID0gNDAxMDIxLCAvLyBhY2NvdW50cy5sb2dpbiAtIHdyb25nIGNhcHRjaGEgY29kZVxuICAgIE9MRF9QQVNTV09SRF9VU0VEID0gNDAxMDMwLCAvLyBUaGUgdXNlciBwcm92aWRlZCBoaXMgcHJldmlvdXMgcGFzc3dvcmQsIG5vdCB0aGUgY3VycmVudCBvbmVcbiAgICBGT1JCSURERU4gPSA0MDMwMDAsXG4gICAgSU5WQUxJRF9TRVNTSU9OX1RPS0VOID0gNDAzMDAxLCAvLyBpbnRlcm5hbFxuICAgIFJFUVVFU1RfSEFTX0VYUElSRUQgPSA0MDMwMDIsIC8vIHRoZSB0aW1lc3RhbXAgb3IgZXhwaXJhdGlvbiBvZiB0aGUgdG9rZW4gdXNlZCBleGNlZWRlZCB0aGUgYWxsb3dlZCB0aW1lIHdpbmRvd1xuICAgIElOVkFMSURfUkVRVUVTVF9TSUdOQVRVUkUgPSA0MDMwMDMsXG4gICAgRFVQTElDQVRFX05PTkNFID0gNDAzMDA0LFxuICAgIFVOQVVUSE9SSVpFRF9VU0VSID0gNDAzMDA1LCAvLyB0aGUgdXNlciBpZCBwYXNzZWQgaXMgbm90IHZhbGlkIGZvciB0aGlzIHNpdGVcbiAgICBTRU5TSVRJVkVfREFUQV9TRU5UX09WRVJfSFRUUCA9IDQwMzAwNiwgLy8gd2hlbiBzZW5kaW5nIHRoZSBzZWNyZXQga2V5IGluIFJFU1QgaXQgaGFzIHRvIGJlIG92ZXIgSFRUUFNcbiAgICBQRVJNSVNTSU9OX0RFTklFRCA9IDQwMzAwNywgLy8gQ29tbWVudHMgc2VydmVyIC0gUGVybWlzc2lvbiBkZW5pZWQgKHJlYWRPbmx5LG1vZGVyYXRpb24gc2l0ZSkuXG4gICAgSU5WQUxJRF9PUEVOSURfVVJMID0gNDAzMDA4LCAvLyBjYW5ub3QgZmluZCBhbiBvcGVuSWQgZW5kcG9pbnQgb24gdGhlIHVybCBvciB1c2VybmFtZSBnaXZlbiBmb3Igb3BlbklkIGxvZ2luXG4gICAgUFJPVklERVJfU0VTU0lPTl9FWFBJUkVEID0gNDAzMDA5LCAvLyB0aGUgdXNlciBzZXNzaW9uIGZvciB0aGlzIHByb3ZpZGVyIGlzIGV4cGlyZWRcbiAgICBJTlZBTElEX1NFQ1JFVCA9IDQwMzAxMCwgLy8gdGhlIHJlcXVlc3QgaGFzIGFuIGludmFsaWQgc2VjcmV0IGtleVxuICAgIFNFU1NJT05fSEFTX0VYUElSRUQgPSA0MDMwMTEsIC8vIHRoZSBzZXNzaW9uIGZvciB0aGlzIHVzZXIgaGFzIGV4cGlyZWRcbiAgICBOT19WQUxJRF9TRVNTSU9OID0gNDAzMDEyLCAvLyByZXF1ZXN0ZWQgdXNlciBoYXMgbm8gdmFsaWQgc2Vzc2lvblxuICAgIFVOVkVSSUZJRURfVVNFUiA9IDQwMzAxMywgLy8gdGhlIHVzZXIgaXMgbm90IHZlcmlmaWVkIGluIFNTTyBzZXNzaW9uXG4gICAgTUlTU0lOR19SRVFVRVNUX1JFRkVSUkVSID0gNDAzMDE1LCAvLyB3ZSBjYW4ndCB2YWxpZGF0ZSB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSByZWZlcnJlciBoZWFkZXIgaXMgbWlzc2luZ1xuICAgIFVORVhQRUNURURfUFJPVklERVJfVVNFUiA9IDQwMzAxNywgLy8gdGhlIGxvZ2dlZCBpbiB1c2VyIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBvbmUgZXhwZWN0ZWRcbiAgICBQRVJNSVNTSU9OX05PVF9SRVFVRVNURUQgPSA0MDMwMjIsIC8vIHRoZSBhY3Rpb24gbmVlZHMgYSB1c2VyIHBlcm1pc3Npb24gYW5kIGl0IHdhcyBub3QgcmVxdWVzdGVkXG4gICAgTk9fVVNFUl9QRVJNSVNTSU9OID0gNDAzMDIzLCAvLyB0aGUgYWN0aW9uIG5lZWRzIGEgdXNlciBwZXJtaXNzaW9uIGFuZCB3ZSBkb24ndCBoYXZlIG9uZVxuICAgIFBST1ZJREVSX0xJTUlUX1JFQUNIRUQgPSA0MDMwMjQsIC8vIHRoZSBwcm92aWRlciBsaW1pdCBmb3IgdGhpcyBhY3Rpb24gd2FzIGV4Y2VlZGVkXG4gICAgSU5WQUxJRF9UT0tFTiA9IDQwMzAyNSwgLy8gT0F1dGgyXG4gICAgVU5BVVRIT1JJWkVEX0FDQ0VTU19FUlJPUiA9IDQwMzAyNiwgLy8gQ2FsbHMgdG8gYWNjb3VudHMuaXNBdmFpbGFibGVMb2dpbklEIFdoZW4gcHJldmVudExvZ2luSURIYXJ2ZXN0aW5nID0gdHJ1ZSBzaG91bGQgcmV0dXJuIGFuIGFwcHJvcHJpYXRlIDQwM3h4eCB1bmF1dGhvcml6ZWQgYWNjZXNzIGVycm9yLlxuICAgIERJRkZFUkVOVF9VU0VSX0ZPUl9SRUFVVEggPSA0MDMwMjcsIC8vIERpZmZlcmVudCB1c2VyIHRyaWVkIHRvIHJlLWF1dGhvcml6ZS5cbiAgICBTRVNTSU9OX0VYUElSRURfUkVUUlkgPSA0MDMwMzAsIC8vIElubmVyIGNvZGUgLSB3aGVuIHRoZSBmYWNlYm9vayBzZXNzaW9uIGlzIGV4cGlyZWQgYW5kIHRoZSBjbGllbnQgd2FpdHMgZm9yIEZCIG9uIHBhZ2UgdG8gbG9hZFxuICAgIEFQUFJPVkVEX0JZX01PREVSQVRPUiA9IDQwMzAzMSwgLy8gY29tbWVudHMgLSBjYW50IGZsYWcgY29tbWVudCwgaXQgd2FzIGFwcHJvdmVkIGJ5IHRoZSBtb2RlcmF0b3IgYWxyZWFkeS5cbiAgICBUT0tFTl9IQVNfUkVORVdFRCA9IDQwMzAzMiwgLy8gdGhlIHRva2VuIGlzIG5vIGxvbmdlciB2YWxpZCwgYnV0IHdlIGhhdmUgbmV3IHRva2VuIHRvIHByb3ZpZGVcbiAgICBOT19VU0VSX0NPT0tJRSA9IDQwMzAzNSwgLy8gbm8gdXNlciBjb29raWVcbiAgICBVTkFVVEhPUklaRURfUEFSVE5FUiA9IDQwMzAzNiwgLy8gcGFydG5lciBpcyBkaXNhYmxlZFxuICAgIFBPU1RfREVOSUVEID0gNDAzMDM3LCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBQb3N0IGRlbmllZCB3aGVuIHRoZSB1c2VyIHRyaWVkIHRvIHJldmlldyB0d2ljZS5cbiAgICBOT19MT0dJTl9USUNLRVQgPSA0MDMwNDAsIC8vIG5vIGxvZ2luIHRpY2tldCBpbiBjYWxsYmFjayB1cmxcbiAgICBBQ0NPVU5UX0RJU0FCTEVEID0gNDAzMDQxLCAvLyBGb3IgYWNjb3VudHMgLSB3aGVuIGdzLmFjY291bnRzLklzQWN0aXZlPWZhbHNlXG4gICAgSU5WQUxJRF9MT0dJTklEID0gNDAzMDQyLCAvLyBGb3IgYWNjb3VudHMgLSB3aGVuIHRyeWluZyB0byBsb2dpbiB3aXRoIGEgbG9naW5JRCB0aGF0IGRvIG5vdCBleGlzdHNcbiAgICBMT0dJTl9JREVOVElGSUVSX0VYSVNUUyA9IDQwMzA0MywgLy8gRm9yIGFjY291bnQ6IElmIHByb3ZpZGVyRW1haWwgaXMgZGVmaW5lZCBhcyBhIGxvZ2luSWRlbnRpZmllciBpbiB0aGUgcG9saWN5LCBhbmQgdGhlIGVtYWlsIGFkZHJlc3MgcmVjZWl2ZWQgZnJvbSB0aGUgcHJvdmlkZXIgZXhpc3RzIGluIHRoZSBncy5sb2dpbklkZW50aWZpZXJzIGNvbGxlY3Rpb24gYnV0IGFzc29jaWF0ZWQgd2l0aCBhIGRpZmZlcmVudCBVVUlEIHRoYW4gdGhlIGN1cnJlbnQgdXNlciwgdGhlbiByZXR1cm4gXCJMb2dpbiBpZGVudGlmaWVyIGV4aXN0c1wiIGVycm9yIGNvZGUgKDQwM3h4eCkuXG4gICAgVU5ERVJBR0VfVVNFUiA9IDQwMzA0NCwgLy8gRm9yIENPUFBBIGNvbXBsaWFuY2UgKENoaWxkcmVuJ3MgT25saW5lIFByaXZhY3kgUHJvdGVjdGlvbiBBY3QpXG4gICAgSU5WQUxJRF9TSVRFX0NPTkZJR1VSQVRJT05fRVJST1IgPSA0MDMwNDUsIC8vIEZvciBhY2NvdW50cyAtIHNpdGUgRFMgaXMgZW5hYmxlZCB0aG91Z2ggbm8gRFNTaXplIHdhcyBjb25maWd1cmVkLlxuICAgIExPR0lOSURfRE9FU19OT1RfRVhJU1QgPSA0MDMwNDcsIC8vIEZvciBhY2NvdW50cyAtIHdoZW4gdHJ5aW5nIHRvIHJlc2V0IHBhc3N3b3JkIHdpdGggYSBsb2dpbklEIHRoYXQgZG8gbm90IGV4aXN0c1xuICAgIEFQSV9SQVRFX0xJTUlUX0VYQ0VFREVEID0gNDAzMDQ4LFxuICAgIFBFTkRJTkdfUEFTU1dPUkRfQ0hBTkdFID0gNDAzMTAwLCAvLyBUaGUgdXNlcidzIHBhc3N3b3JkIG5lZWRzIHRvIGJlIGNoYW5nZWRcbiAgICBBQ0NPVU5UX1BFTkRJTkdfVEZBX1ZFUklGSUNBVElPTiA9IDQwMzEwMSxcbiAgICBBQ0NPVU5UX1BFTkRJTkdfVEZBX1JFR0lTVFJBVElPTiA9IDQwMzEwMixcbiAgICBBQ0NPVU5UX1BFTkRJTkdfUkVDRU5UX0xPR0lOID0gNDAzMTEwLFxuICAgIEFDQ09VTlRfVEVNUE9SQVJJTFlfTE9DS0VEX09VVCA9IDQwMzEyMCwgLy8gVG9vIG1hbnkgbG9naW4gYXR0ZW1wdHM7IGFjY291bnQgbG9ja2VkLW91dFxuICAgIFJFRFVOREFOVF9PUEVSQVRJT04gPSA0MDMyMDAsIC8vIFRoZSBjbGllbnQgcGVyZm9ybWVkIGFuIG9wZXJhdGlvbiB0aGF0IGlzIHJlZHVuZGFudFxuICAgIElOVkFMSURfQVBQTElDQVRJT05fSUQgPSA0MDMyMDEsIC8vIFRoZSBhcHAgaWQgcHJvdmlkZWQgaXMgZGlmZmVyZW50IHRoYW4gdGhlIG9uZSBjb25maWd1cmVkIGZvciB0aGUgc2l0ZVxuICAgIE5PVF9GT1VORCA9IDQwNDAwMCwgLy8gQ29tbWVudHMgc2VydmVyIC0gQ2F0ZWdvcnkgbm90IGZvdW5kLiBBY2NvdW50cyAtIGVtYWlsIHZlcmlmaWNhdGlvbiBmYWlsZWQsIHV1aWQgbm90IGZvdW5kLlxuICAgIEZSSUVORF9OT1RfRk9VTkQgPSA0MDQwMDEsIC8vIHRoZSB1c2VyIGlkIHByb3ZpZGVkIGFzIGEgdGFyZ2V0IGlzIG5vdCBhIGZyaWVuZCBmb3IgdGhlIGN1cnJlbnQgdXNlclxuICAgIENBVEVHT1JZX05PVF9GT1VORCA9IDQwNDAwMiwgLy8gQ29tbWVudHMgc2VydmVyIC0gQ2F0ZWdvcnkgbm90IGZvdW5kLlxuICAgIFVJRF9OT1RfRk9VTkQgPSA0MDQwMDMsXG4gICAgUkVTT1VSQ0VfTk9UX0ZPVU5EID0gNDA0MDA0LCAvLyBDbGllbnQgc2lkZSAtIGltYWdlIG5vdCBmb3VuZCBhZnRlciB1cGxvYWRcbiAgICBJTlZBTElEX0FQSV9NRVRIT0QgPSA0MDUwMDEsIC8vIGludGVybmFsIGZvciBvdXIgSlMgQVBJXG4gICAgSURFTlRJVFlfRVhJU1RTID0gNDA5MDAxLCAvLyB3aGVuIHRyeWluZyB0byBjb25uZWN0IHRvIGEgcHJvdmlkZXIgdGhhdCBpcyBhbHJlYWR5IGNvbm5lY3RlZCBvciBsaW5rIHRvIGFuIGFscmVhZHkgbGlua2VkIGFjY291bnRcbiAgICBHT05FID0gNDEwMDAwLCAvLyBSZXNvdXJjZSBubyBsb25nZXIgYXZhaWxhYmxlLiBEYXRhIEtleSBTZXJ2ZXIgLSBrZXkgcmV2b2tlZC9leHBpcmVkLlxuICAgIFJFUVVFU1RfRU5USVRZX1RPT19MQVJHRSA9IDQxMzAwMSwgLy8gQ29tbWVudHMgc2VydmVyIC0gUmVxdWVzdCB0byBsYXJnZVxuICAgIENPTU1FTlRfVEVYVF9UT09fTEFSR0UgPSA0MTMwMDIsIC8vIENvbW1lbnRzIHNlcnZlciAtIENvbW1lbnQgVGV4dCB0byBsYXJnZS5cbiAgICBPQkpFQ1RfVE9PX0xBUkdFID0gNDEzMDAzLCAvLyBEYXRhU3RvcmUgb2JqZWN0IGlzIHRvbyBsYXJnZVxuICAgIFBST0ZJTEVfUEhPVE9fVE9PX0xBUkdFID0gNDEzMDA0LCAvLyBQcm9maWxlIHBob3RvIGlzIHRvbyBsYXJnZSwgZXhjZWVkcyBtYXhpbXVtIGFsbG93ZWQgY29udGVudCBsZW5ndGhcbiAgICBSRVFVRVNUX1VSSV9UT09fTE9ORyA9IDQxNDAwMCwgLy9UaGUgVVJJIHByb3ZpZGVkIHdhcyB0b28gbG9uZyBmb3IgdGhlIHNlcnZlciB0byBwcm9jZXNzLlxuICAgIE1JU1NJTkdfVVNFUl9QSE9UTyA9IDQwOTAxMCwgLy8gRXJyb3IgLSBtaXNzaW5nIHVzZXIgcGhvdG9cbiAgICBDT1VOVEVSX05PVF9SRUdJU1RFUkVEID0gNDA5MDExLCAvLyBDb3VudGVyIG5vdCByZWdpc3RlcmVkXG4gICAgSU5WQUxJRF9HTUlEX1RJQ0tFVCA9IDQwOTAxMiwgLy8gZ21pZCB0aWNrZXQgaXMgbm90IHZhbGlkXG4gICAgU0FNTF9NQVBQRURfQVRUUklCVVRFX05PVF9GT1VORCA9IDQwOTAxMywgLy8gVXNlZCB3aGVuIG1hcHBlZCBhdHRyaWJ1dGUgdmFsdWUgZm9yIHByb3ZpZGVyVUlEIGNhbm5vdCBiZSByZXRyZWl2ZWRcbiAgICBTQU1MX0NFUlRJRklDQVRFX05PVF9GT1VORCA9IDQwOTAxNCwgLy8gVXNlZCB3aGVuIFNBTUwgY2VydGlmaWNhdGUgY291bGQgbm90IGJlIHJldHJlaXZlZC5cbiAgICBTQU1MX01FU1NBR0VfTk9UX0ZPVU5EID0gNDA5MDE1LCAvLyBVc2VkIHdoZW4gY2FjaGVkIFNBTUwgbWVzc2FnZSBjb3VsZCBub3QgYmUgcmV0cmVpdmVkLlxuICAgIEdFTkVSQUxfU0VSVkVSX0VSUk9SID0gNTAwMDAxLFxuICAgIFNFUlZFUl9MT0dJTl9FUlJPUiA9IDUwMDAwMiwgLy8gZ2VuZXJhbCBlcnJvciBkdXJpbmcgdGhlIGxvZ2luIHByb2Nlc3NcbiAgICBERUZBVUxUX0FQUExJQ0FUSU9OX0NPTkZJR1VSQVRJT05fRVJST1IgPSA1MDAwMDMsIC8vIEZvciBtdWx0aXBsZSBEQyAtIHdoZW4gbm8gZGVmYXVsdCBhcHBsaWNhdGlvbiBjYW4gYmUgZm91bmQgaW4gRGVmYXVsdEFwcGxpY2F0aW9ucy5jb25maWcuIFdpdGggZXJyb3IgZGV0YWlscyBvZjogXCJEZWZhdWx0IGFwcGxpY2F0aW9uIGlzbid0IGNvbmZpZ3VyZWQgZm9yIGRhdGFDZW50ZXJcIlxuICAgIFNFU1NJT05fTUlHUkFUSU9OX0VSUk9SID0gNTAwMDE0LCAvLyBlcnJvciBpbiBtaWdyYXRpbmcgb2xkIHRvIG5ldyBmYWNlYm9vayBzZXNzaW9uXG4gICAgUFJPVklERVJfRVJST1IgPSA1MDAwMjMsIC8vIGdlbmVyYWwgZXJyb3IgZnJvbSB0aGUgcHJvdmlkZXJcbiAgICBEQVRBQkFTRV9FUlJPUiA9IDUwMDAyOCxcbiAgICBVU0VSTkFNRV9SRVFVSVJFRCA9IDUwMDAyOSwgLy8gSW5uZXIgY29kZVxuICAgIE5PX1BST1ZJREVSX0FQUExJQ0FUSU9OID0gNTAwMDMxLCAvLyB0aGUgYXBwbGljYXRpb24gZm9yIHRoaXMgcHJvdmlkZXIgaXMgbm90IGRlZmluZWQgZm9yIHRoaXMgc2l0ZVxuICAgIExPQURfRkFJTEVEID0gNTAwMDMyLCAvLyBjbGllbnQgZXJyb3JcbiAgICBJTlZBTElEX0VOVklST05NRU5UX0NPTkZJRyA9IDUwMDAzMywgLy8gSW4gY2FzZSB0aGVyZSBpcyBubyB0YXJnZXQgZW52aXJvbm1lbnQgaW4gdGhlIGNvbmZpZyBmaWxlIHdlJ2QgcmV0dXJuIHdpdGggIGludmFsaWRfZW52aXJvbm1lbnRfY29uZmlnIGVycm9yLlxuICAgIEVSUk9SX0RVUklOR19CQUNLRU5EX09QRVJBVElPTiA9IDUwMDAzNCxcbiAgICBUSU1FT1VUID0gNTA0MDAxLCAvLyBvdXRnb2luZyByZXF1ZXN0IGhhZCB0aW1lZCBvdXRcbiAgICBDTElFTlRUSU1FT1VUID0gNTA0MDAyLCAvLyBGb3Igc2VydmVyIFNES3MgLSBhIGNsaWVudCBzaWRlIHRpbWVvdXRcbiAgICBJTlZBTElEX1VSTCA9IDQwNDAwNCwgLy8gZW1iZWQubHkgNDA0IGVycm9yIG1lc3NhZ2UgLSB1cmwgaXMgbm90IHZhbGlkXG4gICAgTUVESUFfSVRFTVNfTk9UX1NVUFBPUlRFRCA9IDQwMTAwMSwgLy8gTWVkaWEgaXRlbXMgYSBub3QgYWxsb3dlZCBmb3IgdGhpcyBjYXRlZ29yeVxuICAgIE1JU1NJTkdfRVJST1JfQ09ERSA9IDU5OTk5OSxcbiAgICBUSElTX0FVVEhFTlRJQ0FUSU9OX01FVEhPRF9JU19DVVJSRU5UTFlfRElTQUJMRUQgID0gNDAzMzAwLFxuICAgIEZPUkNFX0xJTktfTE9HSU5fSURFTlRJRklFUl9FWElTVFMgPSA0MDkwMDMsXG4gICAgUEFTU0tFWV9BVVRIRU5USUNBVE9SX1JFR0lTVEVSRUQgPSA0MDAxMzAsXG4gICAgUEFTU0tFWV9BQk9SVEVEID0gNDAwMTMxLFxuICAgIFBBU1NLRVlfRVJST1IgPSA1MDAxMzFcbn1cbmV4cG9ydCBjb25zdCBlbnVtIEdTRXJyb3JEZXRhaWxzIHtcbiAgICBOb25lID0gMCxcbiAgICBTYW1lX3Bhc3N3b3JkID0gMTAwMDAxLCAvLyBSZXNldCBQYXNzd29yZCAtIFwiJ29sZFBhc3N3b3JkJyBjYW5ub3QgYmUgdGhlIHNhbWUgYXMgJ25ld1Bhc3N3b3JkJ1wiXG4gICAgSW52YWxpZF9wYXNzd29yZCA9IDEwMDAwMiwgLy8gUmVzZXQgUGFzc3dvcmQgLSBjdXJyZW50IHBhc3N3b3JkIGlzIHdyb25nL2ludmFsaWRcbiAgICBJbnZhbGlkX2NvdW50ZXJzX3F1ZXJ5X3dpdGhfY3Vyc29yID0gMTAwMDAzLFxufVxuIiwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlQW5hbHl0aWNzQ29uZmlnIHtcbiAgZ29vZ2xlQW5hbHl0aWNzR1RhZzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBJQW5hbHl0aWNzIHtcbiAgcmVnaXN0ZXI6IChzZW5kQW5hbHl0aWNzOiBJU2VuZEFuYWx5dGljc0ZuKSA9PiB2b2lkXG59XG5cbmV4cG9ydCB0eXBlIElBbmFseXRpY3NQYXlsb2FkID0gUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcj5cblxuZXhwb3J0IHR5cGUgSVNlbmRBbmFseXRpY3NGbiA9IChjb21tYW5kOiBzdHJpbmcsIGNvbW1hbmRQYXJhbWV0ZXJzOiBzdHJpbmcgfCBEYXRlLCBwYXlsb2FkPzogSUFuYWx5dGljc1BheWxvYWQpID0+IHZvaWRcblxuZXhwb3J0IGNsYXNzIEdvb2dsZUFuYWx5dGljcyB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IEdvb2dsZUFuYWx5dGljc0NvbmZpZywgcHJpdmF0ZSBhbmFseXRpY3M6IElBbmFseXRpY3NbXSkge1xuICAgIHRoaXMuZGVmaW5lR1RhZygpXG4gIH1cblxuICBwcml2YXRlIGdldCBndGFnKCk6IElTZW5kQW5hbHl0aWNzRm4ge1xuICAgIHJldHVybiB3aW5kb3dbJ2d0YWcnXVxuICB9XG5cbiAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xuXG4gICAgaWYgKCF0aGlzLmNvbmZpZz8uZ29vZ2xlQW5hbHl0aWNzR1RhZyB8fCAhdGhpcy5hbmFseXRpY3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBnbG9iYWxTY3JpcHQgPSB0aGlzLmNyZWF0ZUdBR2xvYmFsU2NyaXB0KHRoaXMuY29uZmlnLmdvb2dsZUFuYWx5dGljc0dUYWcpXG5cbiAgICBnbG9iYWxTY3JpcHQub25sb2FkID0gKCkgPT4ge1xuXG4gICAgICB0aGlzLmFkZE1hbmRhdG9yeUdBQ29uZmlnKHRoaXMuY29uZmlnLmdvb2dsZUFuYWx5dGljc0dUYWcpXG5cbiAgICAgIHRoaXMuYW5hbHl0aWNzLmZvckVhY2goYW5hbHl0aWNzQ29uZmlnID0+IHtcbiAgICAgICAgYW5hbHl0aWNzQ29uZmlnLnJlZ2lzdGVyKHRoaXMuc2VuZEFuYWx5dGljcylcbiAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGdsb2JhbFNjcmlwdClcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlR0FHbG9iYWxTY3JpcHQodHJhY2tpbmdJZDogc3RyaW5nKTogSFRNTFNjcmlwdEVsZW1lbnQge1xuXG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlXG4gICAgc2NyaXB0LnNyYyA9IGBodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7dHJhY2tpbmdJZH1gXG5cbiAgICByZXR1cm4gc2NyaXB0O1xuICB9XG5cbiAgcHJpdmF0ZSBkZWZpbmVHVGFnKCk6IHZvaWQge1xuICAgIHdpbmRvd1snZGF0YUxheWVyJ10gPSB3aW5kb3dbJ2RhdGFMYXllciddIHx8IFtdO1xuXG4gICAgd2luZG93WydndGFnJ10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3dbJ2RhdGFMYXllciddPy5wdXNoKGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRNYW5kYXRvcnlHQUNvbmZpZyh0cmFja2luZ0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG4gICAgdGhpcy5ndGFnKCdjb25maWcnLCBgJHt0cmFja2luZ0lkfWApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZW5kQW5hbHl0aWNzKGNvbW1hbmQ6IHN0cmluZywgY29tbWFuZFBhcmFtZXRlcnM6IHN0cmluZyB8IERhdGUsIHBheWxvYWQ/OiBJQW5hbHl0aWNzUGF5bG9hZCkge1xuICAgIHRoaXMuZ3RhZyhjb21tYW5kLCBjb21tYW5kUGFyYW1ldGVycywgcGF5bG9hZClcbiAgfVxuXG59XG4iLCIvLyBMb2NhbCBlbnZpcm9ubWVudCBpbmZvIChicm93c2VyLCBjYXBhYmlsaXRpZXMsIGhvc3RpbmcgZG9tYWluKVxuXG5kZWNsYXJlIGNvbnN0IEFjdGl2ZVhPYmplY3Q6IGFueTtcblxudmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbmV4cG9ydCB2YXIgbG9jYWxJbmZvID0ge1xuICAgIGJhc2VEb21haW46ICcnLCAvLyBjYWxjdWxhdGVkIGxhdGVyIG9uXG4gICAgaXNCcm93c2VyU3VwcG9ydHNGaWxlc0FQSTogKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBGaWxlUmVhZGVyID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBGaWxlUmVhZGVyID09PSAnb2JqZWN0JztcbiAgICB9KSgpLFxuICAgIGluaXRUaW1lOiBuZXcgRGF0ZSgpLFxuICAgIHZlcnNpb246IDAsIC8vVE9ET1xuICAgIHBhZ2VEb21haW46IGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lLFxuICAgIHByb3RvY29sOiBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCA9PSAnaHR0cDonID8gJ2h0dHAnIDogJ2h0dHBzJyxcbiAgICB1c2VyQWdlbnQ6IHVzZXJBZ2VudCxcbiAgICBpc1dpbjogdXNlckFnZW50LmluZGV4T2YoJ3dpbicpICE9IC0xLFxuICAgIGlzSUU6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llJykgIT0gLTEgfHwgKHVzZXJBZ2VudC5pbmRleE9mKCdtb3ppbGxhJykgIT0gLTEgJiYgdXNlckFnZW50LmluZGV4T2YoJ3RyaWRlbnQnKSAhPSAtMSksXG4gICAgaXNJRTY6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llIDYuJykgIT0gLTEsXG4gICAgaXNJRTc6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llIDcuJykgIT0gLTEsXG4gICAgaXNJRTg6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llIDguJykgIT0gLTEsXG4gICAgaXNJRTk6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llIDkuJykgIT0gLTEsXG4gICAgaXNJRTEwOiB1c2VyQWdlbnQuaW5kZXhPZignbXNpZSAxMC4nKSAhPSAtMSxcbiAgICBpc0lFMTE6IHVzZXJBZ2VudC5pbmRleE9mKCdtb3ppbGxhJykgIT0gLTEgJiYgdXNlckFnZW50LmluZGV4T2YoJ3RyaWRlbnQvNy4wJykgIT0gLTEsXG4gICAgaXNFZGdlTGVnYWN5OiB1c2VyQWdlbnQuaW5kZXhPZignZWRnZScpICE9IC0xLFxuICAgIGlzRWRnZTogUmVnRXhwKC9lZGcoPyFlKS8pLnRlc3QodXNlckFnZW50KSxcbiAgICBpc0lPUzogdXNlckFnZW50LmluZGV4T2YoJ2lwaG9uZScpICE9IC0xIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdpcGFkJykgIT0gLTEgfHwgdXNlckFnZW50LmluZGV4T2YoJ2lwb2QnKSAhPSAtMSxcbiAgICBpc1NhZmFyaTUzNDogdXNlckFnZW50LmluZGV4T2YoJ3NhZmFyaS81MzQnKSAhPSAtMSxcbiAgICBpc1dlQ2hhdDogdXNlckFnZW50LmluZGV4T2YoJ21pY3JvbWVzc2VuZ2VyJykgIT0gLTEsXG4gICAgaW9zVmVyc2lvbjogKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ2FwcGxld2Via2l0JykgIT0gLTEgJiYgdXNlckFnZW50LmluZGV4T2YoJ3ZlcnNpb24vJykgIT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh1c2VyQWdlbnQuc3BsaXQoJ3ZlcnNpb24vJylbMV0uc3BsaXQoJyAnKVswXSk7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gMDtcbiAgICB9KSgpLFxuICAgIGlzQW5kcm9pZDogdXNlckFnZW50LmluZGV4T2YoJ2FuZHJvaWQnKSAhPSAtMSxcbiAgICBpc0FuZHJvaWRCcm93c2VyOiAodXNlckFnZW50ID0+IHtcbiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdtb3ppbGxhLzUuMCcpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ2FuZHJvaWQgNCcpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ2FwcGxld2Via2l0JykgPT09IC0xKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCd3aW5kb3dzIHBob25lJykgIT09IC0xKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgLy8gU3BlY2lhbCB1c2VyIGFnZW50cyBmb3VuZCBzbyBmYXIgdGhhdCB2aW9sYXRlIHRoZSBleGlzdGFuY2Ugb2YgY2hyb21lIHJ1bGVcbiAgICAgICAgLy8gQnVnIDM4MzY3IEFuZHJvaWQgQnJvd3NlcjogTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDQuMi4yOyBlbi11czsgU0FNU1VORyBHVC1JOTUwMCBCdWlsZC9KRFEzOSkgQXBwbGVXZWJLaXQvNTM1LjE5IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi8xLjAgQ2hyb21lLzE4LjAuMTAyNS4zMDggTW9iaWxlIFNhZmFyaS81MzUuMTlcbiAgICAgICAgLy8gQnVnIDQwMjA5IENocm9tZSBCcm93c2VyOiBNb3ppbGxhLzUuMCAoTGludXg7IEFuZHJvaWQgNC4yLjI7IFNBTVNVTkcgU0dULUk3NDcgQnVpbGQvS09UNDlIKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMzkuMC4yMTcxLjkzIE1vYmlsZSBTYWZhcmkvNTM3LjM2XG4gICAgICAgIC8vIFdpbmRvd3MgUGhvbmUgQnJvd3NlcjogTW96aWxsYS81LjAgKE1vYmlsZTsgV2luZG93cyBQaG9uZSA4LjE7IEFuZHJvaWQgNC4wOyBBUk07IFRyaWRlbnQvNy4wOyBUb3VjaDsgcnY6MTEuMDsgSUVNb2JpbGUvMTEuMDsgTk9LSUE7IEx1bWlhIDkyMCkgbGlrZSBpUGhvbmUgT1MgN18wXzMgTWFjIE9TIFggQXBwbGVXZWJLaXQvNTM3IChLSFRNTCwgbGlrZSBHZWNrbykgTW9iaWxlIFNhZmFyaS81MzdcbiAgICAgICAgLy8gQ2hyb21lIEJyb3dzZXI6IE1vemlsbGEvNS4wIChMaW51eDsgQW5kcm9pZCA0LjIuMjsgZW4tZ2I7IFNBTVNVTkcgR1QtSTk1MDAgQnVpbGQvS09UNDlIKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzEuNSBDaHJvbWUvMjguMC4xNTAwLjk0IE1vYmlsZSBTYWZhcmkvNTM3LjM2XG5cbiAgICAgICAgdmFyIGNocm9tZUluZm8gPSAvY2hyb21lXFwvKFxcZCspLy5leGVjKHVzZXJBZ2VudCk7XG5cbiAgICAgICAgaWYgKCFjaHJvbWVJbmZvKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICB2YXIgY2hyb21lVmVyc2lvbiA9IHBhcnNlSW50KGNocm9tZUluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiBjaHJvbWVWZXJzaW9uIDwgMjA7XG4gICAgfSkodXNlckFnZW50KSxcbiAgICBjdXJyZW50QnJvd3NlcjogJycsXG4gICAgYW5kcm9pZFZlcnNpb246IChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdhbmRyb2lkJykgIT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHVzZXJBZ2VudC5zbGljZSh1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCcpICsgOCkpO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIDA7XG4gICAgfSkoKSxcbiAgICBpc0Nocm9tZTogdXNlckFnZW50LmluZGV4T2YoJ2Nocm9tZScpICE9IC0xICYmIHVzZXJBZ2VudC5pbmRleE9mKCdlZGcnKSA9PSAtMSwgLy8gZWRnZSBicm93c2VyIGFsc28gdXNlcyBDaHJvbWUgaW4gaXRzIFVBIHN0cmluZy5cbiAgICBpc0dvb2dsZUJvdDogdXNlckFnZW50LmluZGV4T2YoJ2dvb2dsZWJvdCcpICE9IC0xLFxuICAgIGlzRkY6IHVzZXJBZ2VudC5pbmRleE9mKCdmaXJlZm94JykgIT0gLTEsXG4gICAgaXNPcGVyYTogdXNlckFnZW50LmluZGV4T2YoJ29wZXJhJykgIT0gLTEsXG4gICAgaXNTYWZhcmk6XG4gICAgICAgIG5hdmlnYXRvci5hcHBWZXJzaW9uICYmXG4gICAgICAgIG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignc2FmYXJpJykgIT0gLTEgJiZcbiAgICAgICAgbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdjaHJvbWUnKSA9PSAtMSAmJlxuICAgICAgICB1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCcpID09IC0xLFxuICAgIGlzSU9TV2ViVmlldzogLyhpUGhvbmV8aVBvZHxpUGFkKS4qQXBwbGVXZWJLaXQoPyEuKlNhZmFyaSkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLFxuICAgIGlzSU9TQ2hyb21lOiB1c2VyQWdlbnQuaW5kZXhPZignY3Jpb3MnKSAhPSAtMSxcbiAgICBpc01BQzogbmF2aWdhdG9yLmFwcFZlcnNpb24gJiYgbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdtYWMnKSAhPSAtMSxcbiAgICBpc1dpbmRvd3NQaG9uZTogdXNlckFnZW50LmluZGV4T2YoJ3dpbmRvd3MgcGhvbmUnKSAhPSAtMSxcbiAgICBpc0ZhY2Vib29rQnJvd3NlcjogdXNlckFnZW50LmluZGV4T2YoJ2ZiYW4nKSAhPSAtMSB8fCB1c2VyQWdlbnQuaW5kZXhPZignZmJhdicpICE9IC0xLFxuICAgIHN1cHBvcnRzUG9zdE1lc3NhZ2U6IHdpbmRvdy5wb3N0TWVzc2FnZSAhPSBudWxsICYmICh1c2VyQWdlbnQuaW5kZXhPZignbXNpZScpID09IC0xIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdpZW1vYmlsZScpICE9IC0xKSxcbiAgICBzdXBwb3J0c0xvY2FsU3RvcmFnZTogZmFsc2UsXG4gICAgc3VwcG9ydHNTZXNzaW9uU3RvcmFnZTogZmFsc2UsXG4gICAgc3VwcG9ydHNGbGFzaDogKCgpID0+IHtcbiAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy85OTgyNDUvaG93LWNhbi1pLWRldGVjdC1pZi1mbGFzaC1pcy1pbnN0YWxsZWQtYW5kLWlmLW5vdC1kaXNwbGF5LWEtaGlkZGVuLWRpdi10aGF0LWluZlxuICAgICAgICBsZXQgc3VwcG9ydHNGbGFzaCA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5taW1lVHlwZXMgJiZcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubWltZVR5cGVzWydhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCddICE9IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5taW1lVHlwZXNbJ2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJ10uZW5hYmxlZFBsdWdpblxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc3VwcG9ydHNGbGFzaCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvID0gbmV3IEFjdGl2ZVhPYmplY3QoJ1Nob2Nrd2F2ZUZsYXNoLlNob2Nrd2F2ZUZsYXNoJyk7XG4gICAgICAgICAgICAgICAgaWYgKGZvKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzRmxhc2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgcmV0dXJuIHN1cHBvcnRzRmxhc2g7XG4gICAgfSkoKSxcbiAgICBxdWlya3NNb2RlOiBkb2N1bWVudC5jb21wYXRNb2RlID09ICdCYWNrQ29tcGF0JyAmJiB1c2VyQWdlbnQuaW5kZXhPZignbXNpZScpICE9IC0xLFxuICAgIGJhY2tDb21wYXQ6IGRvY3VtZW50LmNvbXBhdE1vZGUgPT0gJ0JhY2tDb21wYXQnLFxuICAgIC8vIFRPRE86IEFkZCBpc1RhYmxldCBmdW5jdGlvbiBmb3IgZGV2aWNlcyBub24tTW9iaWxlXG4gICAgaXNNb2JpbGU6IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1vYmlsZUNsaWVudHMgPSBbXG4gICAgICAgICAgICAnaXBob25lJyxcbiAgICAgICAgICAgICdpcG9kJyxcbiAgICAgICAgICAgICdhbmRyb2lkJyxcbiAgICAgICAgICAgICdtaWRwJyxcbiAgICAgICAgICAgICcyNDB4MzIwJyxcbiAgICAgICAgICAgICdibGFja2JlcnJ5JyxcbiAgICAgICAgICAgICduZXRmcm9udCcsXG4gICAgICAgICAgICAnbm9raWEnLFxuICAgICAgICAgICAgJ3BhbmFzb25pYycsXG4gICAgICAgICAgICAncG9ydGFsbW1tJyxcbiAgICAgICAgICAgICdzaGFycCcsXG4gICAgICAgICAgICAnc2llLScsXG4gICAgICAgICAgICAnc29ueWVyaWNzc29uJyxcbiAgICAgICAgICAgICdzeW1iaWFuJyxcbiAgICAgICAgICAgICd3aW5kb3dzIGNlJyxcbiAgICAgICAgICAgICdiZW5xJyxcbiAgICAgICAgICAgICdtZGEnLFxuICAgICAgICAgICAgJ21vdC0nLFxuICAgICAgICAgICAgJ29wZXJhIG1pbmknLFxuICAgICAgICAgICAgJ3BoaWxpcHMnLFxuICAgICAgICAgICAgJ3BvY2tldCBwYycsXG4gICAgICAgICAgICAnc2FnZW0nLFxuICAgICAgICAgICAgJ3NhbXN1bmcnLFxuICAgICAgICAgICAgJ2h0YycsXG4gICAgICAgIF07XG4gICAgICAgIGZvciAodmFyIGkgaW4gbW9iaWxlQ2xpZW50cykge1xuICAgICAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKG1vYmlsZUNsaWVudHNbaV0pICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pKCksXG4gICAgaXNNb2JpbGVBcHA6ICgoKSA9PiB7XG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUpXG4gICAgICAgICAgICAvLyBmb3Igb2xkIElFXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1ldGFUYWdzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtZXRhJykgYXMgYW55O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWV0YVRhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChtZXRhVGFnc1tpXS5nZXRBdHRyaWJ1dGUoJ25hbWUnKSA9PSAndmlld3BvcnQnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBtZXRhVGFnc1tpXS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcblxuICAgICAgICAgICAgICAgIGlmIChjb250ZW50ICYmIGNvbnRlbnQuaW5kZXhPZignd2lkdGg9ZGV2aWNlLXdpZHRoJykgIT09IC0xKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KSgpLFxuICAgIGlzTmF0aXZlTW9iaWxlQXBwOiBmYWxzZSwgLy8gd2lsbCBjaGFuZ2UgaWYgbW9iaWxlIGFkYXB0ZXIgd2lsbCBsb2FkIFtpbiBpdHMgJ2luaXQnIG1ldGhvZF0uXG4gICAgaXNUb3VjaDogKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KVxuICAgICAgICAgICAgLy8gd29ya3Mgb24gbW9zdCBicm93c2Vyc1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgaWYgKCdvbm1zZ2VzdHVyZWNoYW5nZScgaW4gd2luZG93KSB7XG4gICAgICAgICAgICAvLyB3b3JrcyBvbiBpZTEwXG4gICAgICAgICAgICAvLyBUcnkgdG8gZGV0ZXJtaW5lIGlmIElFIGlzIG9wZW4gaW4gbWV0cm8gbW9kZS4gTWV0cm8gZG9lc24ndCBhbGxvdyBhY3RpdmVYLCB0aGF0J3MgdGhlIGJlc3QgdGVzdCBhdmFpbGFibGUgYXMgb2YgSUUxMS5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pKCksXG4gICAgaXNPbkxpbmU6ICgpID0+IG5hdmlnYXRvci5vbkxpbmUsXG4gICAgbWVzc2FnaW5nTWV0aG9kOiAxXG59O1xuY29uc3QgaXNTdG9yYWdlRW5hYmxlZCA9IChzdG9yYWdlTmFtZTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHdpbmRvd1tzdG9yYWdlTmFtZV07XG4gICAgICAgIGlmICghc3RvcmFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGVzdE5hbWUgPSAnX2dpZ19sb2NhbFN0b3JhZ2VfdGVzdCc7XG4gICAgICAgIGNvbnN0IHRlc3RWYWx1ZSA9ICdqdXN0IGNoZWNraW5nIGZvciBsb2NhbFN0b3JhZ2UnO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0odGVzdE5hbWUsIHRlc3RWYWx1ZSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN0b3JhZ2UuZ2V0SXRlbSh0ZXN0TmFtZSkgPT09IHRlc3RWYWx1ZTtcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHRlc3ROYW1lKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAvLyBSZWFzb25zOlxuICAgICAgICAvLyAtIEluc2lkZSAzcmQgcGFydHkgQVBJIHByb3h5IGlGcmFtZS5cbiAgICAgICAgLy8gLSBTYWZhcmkgaW4gaW5jb2duaXRvIG1vZGUgd2lsbCBlcnJvciB3aXRoIFwicXVvdGEgZXhjZWVkZWRcIi5cbiAgICAgICAgLy8gLSBDaHJvbWUgd2l0aCAzcmQgcGFydHkgY29va2llcyBkaXNhYmxlZCB3aWxsIHRocm93IGFuIGVycm9yIGlmIHlvdSBhY2Nlc3MgdGhlIHdpbmRvdy5sb2NhbFN0b3JhZ2Ugb2JqZWN0IGluIEFOWSB3YXkuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xubG9jYWxJbmZvLnN1cHBvcnRzTG9jYWxTdG9yYWdlID0gaXNTdG9yYWdlRW5hYmxlZCgnbG9jYWxTdG9yYWdlJyk7XG5sb2NhbEluZm8uc3VwcG9ydHNTZXNzaW9uU3RvcmFnZSA9IGlzU3RvcmFnZUVuYWJsZWQoJ3Nlc3Npb25TdG9yYWdlJyk7XG5sb2NhbEluZm8uaXNNQUMgPSBsb2NhbEluZm8uaXNNQUMgJiYgIWxvY2FsSW5mby5pc0lPUztcbnZhciBvcyA9IGxvY2FsSW5mby5pc1dpblxuICAgID8gJ3dpbmRvd3MnXG4gICAgOiBsb2NhbEluZm8uaXNXaW5kb3dzUGhvbmVcbiAgICAgICAgPyAnd2lucGhvbmUnXG4gICAgICAgIDogbG9jYWxJbmZvLmlzSU9TXG4gICAgICAgICAgICA/ICdpb3MtdicgKyBsb2NhbEluZm8uaW9zVmVyc2lvblxuICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNNQUNcbiAgICAgICAgICAgICAgICA/ICdtYWMnXG4gICAgICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNBbmRyb2lkXG4gICAgICAgICAgICAgICAgICAgID8gJ2FuZHJvaWQnXG4gICAgICAgICAgICAgICAgICAgIDogJyc7XG5pZiAob3MpIG9zICs9ICcgJztcbnZhciBicm93c2VyID0gbG9jYWxJbmZvLmlzQ2hyb21lXG4gICAgPyAnY2hyb21lJ1xuICAgIDogbG9jYWxJbmZvLmlzRkZcbiAgICAgICAgPyAnZmlyZWZveCdcbiAgICAgICAgOiBsb2NhbEluZm8uaXNTYWZhcmlcbiAgICAgICAgICAgID8gJ3NhZmFyaSdcbiAgICAgICAgICAgIDogbG9jYWxJbmZvLmlzRWRnZVxuICAgICAgICAgICAgICAgID8gJ2VkZ2UnXG4gICAgICAgICAgICA6IGxvY2FsSW5mby5pc0VkZ2VMZWdhY3lcbiAgICAgICAgICAgICAgICA/ICdlZGdlIGxlZ2FjeSdcbiAgICAgICAgICAgICAgICA6IGxvY2FsSW5mby5pc0lFMTFcbiAgICAgICAgICAgICAgICAgICAgPyAnaWUxMSdcbiAgICAgICAgICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNJRTEwXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdpZTEwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNJRTlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdpZTknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNJRThcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnaWU4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xubG9jYWxJbmZvLmN1cnJlbnRCcm93c2VyID0gb3MgKyBicm93c2VyO1xuXG50eXBlIEJhdHRlcnlJbmZvID0ge1xuICAgIGNoYXJnaW5nOiBib29sZWFuO1xuICAgIGNoYXJnaW5nVGltZTogbnVtYmVyO1xuICAgIGRpc2NoYXJnaW5nVGltZTogbnVtYmVyO1xuICAgIGxldmVsOiBudW1iZXI7XG59O1xudHlwZSBQbHVnaW4gPSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGZpbGVuYW1lOiBzdHJpbmc7XG4gICAgbGVuZ3RoOiBudW1iZXI7XG59O1xuZXhwb3J0IGNsYXNzIENsaWVudEZlYXR1cmUge1xuICAgIHB1YmxpYyB1c2VyQWdlbnQ/OiBzdHJpbmc7XG4gICAgcHVibGljIHBsdWdpbnM/OiBQbHVnaW5bXTtcbiAgICBwdWJsaWMgbG9jYWxUaW1lPzogc3RyaW5nO1xuICAgIHB1YmxpYyB0aW1lem9uZU9mZnNldD86IG51bWJlcjtcbiAgICBwdWJsaWMgcGVybWlzc2lvblN0YXR1cz86IHsgc3RhdGU6IHN0cmluZyB9O1xuICAgIHB1YmxpYyB3ZWJkcml2ZXI/OiBib29sZWFuO1xuICAgIHB1YmxpYyBiYXR0ZXJ5SW5mbz86IEJhdHRlcnlJbmZvO1xuICAgIHB1YmxpYyBmZWF0dXJlcz86IFtudW1iZXIsIHN0cmluZywgYm9vbGVhbiwgYm9vbGVhbl07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdmlnYXRvcjogTmF2aWdhdG9yID0gZ2lneWEuXy5XaW5kb3dQcm92aWRlci5uYXZpZ2F0b3IoKSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHNjcmVlbjogU2NyZWVuID0gZ2lneWEuXy5XaW5kb3dQcm92aWRlci5zY3JlZW4oKSkge1xuICAgICAgICB0aGlzLmNvbGxlY3REYXRhKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBjb2xsZWN0RGF0YSgpIHtcbiAgICAgICAgdGhpcy51c2VyQWdlbnQgPSB0aGlzLm5hdmlnYXRvcj8udXNlckFnZW50O1xuICAgICAgICB0aGlzLnBsdWdpbnMgPSBBcnJheS5mcm9tKHRoaXMubmF2aWdhdG9yPy5wbHVnaW5zIHx8IFtdKS5tYXAoKHtuYW1lLCBmaWxlbmFtZSwgbGVuZ3RofSkgPT4gKHsgbmFtZSwgZmlsZW5hbWUsIGxlbmd0aCB9KSk7XG4gICAgICAgIHRoaXMubG9jYWxUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgdGhpcy50aW1lem9uZU9mZnNldCA9IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICAgICAgY29uc3QgcGVybWlzc2lvblN0YXR1cyA9IGF3YWl0IHRoaXMubmF2aWdhdG9yPy5wZXJtaXNzaW9ucz8ucXVlcnkoeyBuYW1lOidub3RpZmljYXRpb25zJyB9KTtcbiAgICAgICAgaWYgKHBlcm1pc3Npb25TdGF0dXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHtzdGF0ZX0gPSBwZXJtaXNzaW9uU3RhdHVzO1xuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9uU3RhdHVzID0ge3N0YXRlfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndlYmRyaXZlciA9IHRoaXMubmF2aWdhdG9yPy53ZWJkcml2ZXI7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgYmF0dGVyeUluZm8gPSB0aGlzLm5hdmlnYXRvci5nZXRCYXR0ZXJ5ICYmIGF3YWl0IHRoaXMubmF2aWdhdG9yLmdldEJhdHRlcnkoKTtcbiAgICAgICAgaWYgKGJhdHRlcnlJbmZvKSB7XG4gICAgICAgICAgICBjb25zdCB7Y2hhcmdpbmcsIGNoYXJnaW5nVGltZSwgZGlzY2hhcmdpbmdUaW1lLCBsZXZlbH0gPSBiYXR0ZXJ5SW5mbztcbiAgICAgICAgICAgIHRoaXMuYmF0dGVyeUluZm8gPSB7Y2hhcmdpbmcsIGNoYXJnaW5nVGltZSwgZGlzY2hhcmdpbmdUaW1lLCBsZXZlbH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mZWF0dXJlcyA9IFtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdG9yPy5tYXhUb3VjaFBvaW50cyB8fCB0aGlzLm5hdmlnYXRvcj8ubXNNYXhUb3VjaFBvaW50cyxcbiAgICAgICAgICAgIGAke3RoaXMuc2NyZWVuLndpZHRofXwke3RoaXMuc2NyZWVuLmhlaWdodH18JHt0aGlzLnNjcmVlbi5jb2xvckRlcHRofWAsXG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRvci5qYXZhRW5hYmxlZCgpLFxuICAgICAgICAgICAgJ3NlbmRCZWFjb24nIGluIHRoaXMubmF2aWdhdG9yXG4gICAgICAgIF07XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEZsYWdTZXJ2aWNlIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBmb3JjZVdlYlNka0Jvb3RzdHJhcCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdmb3JjZVdlYlNka0Jvb3RzdHJhcCcpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCB1c2VHaWd5YUpzQmFzZURvbWFpbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd1c2VHaWd5YUpzQmFzZURvbWFpbicpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGhpZGVTU09GcmFtZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdoaWRlU1NPRnJhbWUnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCB3Y2FnQ29udHJhc3RGaXgoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnd2NhZ0NvbnRyYXN0Rml4Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbmV3Rm9ybUxpbmtJbnN0YW5jZUVsZW1lbnQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnbmV3Rm9ybUxpbmtJbnN0YW5jZUVsZW1lbnQnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBzdG9wU2VuZGluZ1JlcG9ydHMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnc3RvcFNlbmRpbmdSZXBvcnRzJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc2V0R3JvdXBBcGlEb21haW5BZnRlckxvZ2luKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3NldEdyb3VwQXBpRG9tYWluQWZ0ZXJMb2dpbicpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHVzZUh0dHBTdGF0dXNDb2RlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3VzZUh0dHBTdGF0dXNDb2RlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgYWx3YXlzQ2hlY2tDb29raWVTYXZlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2Fsd2F5c0NoZWNrQ29va2llU2F2ZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGZpeFBob25lVEZBVHJhbnNsYXRpb25zKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2ZpeFBob25lVEZBVHJhbnNsYXRpb25zJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbG9hZFNzb0ZyYW1lT25seU9uY2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnbG9hZFNzb0ZyYW1lT25seU9uY2UnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCB2ZXJpZnlMb2dpbk9ubHlPbmNlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3ZlcmlmeUxvZ2luT25seU9uY2UnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBzZW5kTGFuZ0ZvckVtYWlsT1RQKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3NlbmRMYW5nRm9yRW1haWxPVFAnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBzZXRQcm92aWRlckZyb21SZXNwb25zZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdzZXRQcm92aWRlckZyb21SZXNwb25zZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNldENvb2tpZVNhbWVTaXRlTGF4U2Vzc2lvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdzZXRDb29raWVTYW1lU2l0ZUxheFNlc3Npb24nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBzZXRDb29raWVTYW1lU2l0ZUxheFNvY2lhbCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdzZXRDb29raWVTYW1lU2l0ZUxheFNvY2lhbCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNldENvb2tpZVNhbWVTaXRlTGF4TG93UHJpb3JpdHkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnc2V0Q29va2llU2FtZVNpdGVMYXhMb3dQcmlvcml0eScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGZvcmNlRXJyb3JSZXBvcnQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnZm9yY2VFcnJvclJlcG9ydCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNraXBTYW1lU2NyZWVuQ2hlY2tPblN3aXRjaCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdza2lwU2FtZVNjcmVlbkNoZWNrT25Td2l0Y2gnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBnZXRPbmx5VmlzaWJsZUZpZWxkICgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdnZXRPbmx5VmlzaWJsZUZpZWxkJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdXBkYXRlQWNjb3VudEluZm9Bc3luYyAoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgndXBkYXRlQWNjb3VudEluZm9Bc3luYycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNhbml0aXplRXZhbHVhdGVkVmFsdWUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdzYW5pdGl6ZUV2YWx1YXRlZFZhbHVlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdXNlU2Vzc2lvblZlcmlmeSAoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgndXNlU2Vzc2lvblZlcmlmeScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHVzZUV4dGVuZGVkUGhvbmVOdW1iZXJSZWdleCAoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgndXNlRXh0ZW5kZWRQaG9uZU51bWJlclJlZ2V4Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgZ2VuZXJhdGVOZXdDb2RlV2NhZ0NvbXBsaWFuY2UgKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2dlbmVyYXRlTmV3Q29kZVdjYWdDb21wbGlhbmNlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgZW5mb3JjZUF1dGhGbG93UmVkaXJlY3RGb3JTb2NpYWwgKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2VuZm9yY2VBdXRoRmxvd1JlZGlyZWN0Rm9yU29jaWFsJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdXNlRGVjb2RlVVJJQ29tcG9uZW50KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3VzZURlY29kZVVSSUNvbXBvbmVudCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHVzZU9pZGNHZXRQYXJhbUhhc2hPbGRTdHlsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd1c2VPaWRjR2V0UGFyYW1IYXNoT2xkU3R5bGUnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCB1c2VWaWV3cG9ydFBvbGxlckFjdGlvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd1c2VWaWV3cG9ydFBvbGxlckFjdGlvbicpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGlnbm9yZUludGVycnVwdGlvbnNJbk9pZGNQYXNzaXZlTG9naW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnaWdub3JlSW50ZXJydXB0aW9uc0luT2lkY1Bhc3NpdmVMb2dpbicpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG92ZXJyaWRlQWxsQ2hpbGRDb250ZXh0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ292ZXJyaWRlQWxsQ2hpbGRDb250ZXh0Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgZGlzcGF0Y2hMb2dpbkV2ZW50V2hlbkhhbmRsZXJBZGRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdkaXNwYXRjaExvZ2luRXZlbnRXaGVuSGFuZGxlckFkZGVkJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoZ2lneWEuXy5jb25maWc/LmZsYWdzICYmIGdpZ3lhLl8uY29uZmlnPy5mbGFnc1tuYW1lXSkgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gRXZlcnkgZmxhZyB0aGF0IGlzIGFzc29jaWF0ZWQgd2l0aCBkYXRhIG1vZGlmaWNhdGlvbiByZWxhdGVkIHRvIHRoZSBhcGkgbGF5ZXJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBhcGlGbGFncygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG4iLCJpbXBvcnQge2dldCwgc2V0fSBmcm9tICcuLi9VdGlscy9zZXNzaW9uQ2FjaGUnO1xuaW1wb3J0IHtnZXRNdXJtdXJIYXNofSBmcm9tIFwiLi4vVXRpbHMvb2JqZWN0XCI7XG5cbmludGVyZmFjZSBJU2Vzc2lvblNlcnZpY2Uge1xuICAgIGlzU2Vzc2lvblZlcmlmaWVkKGdsdDogc3RyaW5nKTogYm9vbGVhbjtcbiAgICBzZXRJc1Nlc3Npb25WZXJpZmllZChnbHQ6IHN0cmluZywgdmVyaWZ5OiBib29sZWFuKTtcbn1cblxuY2xhc3MgU2Vzc2lvblNlcnZpY2UgaW1wbGVtZW50cyBJU2Vzc2lvblNlcnZpY2Uge1xuICAgIHB1YmxpYyBpc1Nlc3Npb25WZXJpZmllZChnbHQ6IHN0cmluZywgYXBpS2V5OiBzdHJpbmcgPSBnaWd5YS50aGlzU2NyaXB0LkFQSUtleSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmNyZWF0ZUtleShnbHQsIGFwaUtleSk7XG4gICAgICAgIHJldHVybiBnZXQoa2V5KSA9PT0gJ3RydWUnO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJc1Nlc3Npb25WZXJpZmllZChnbHQ6IHN0cmluZywgdmVyaWZpZWQ6IGJvb2xlYW4sIGFwaUtleTogc3RyaW5nID0gZ2lneWEudGhpc1NjcmlwdC5BUElLZXkpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5jcmVhdGVLZXkoZ2x0LCBhcGlLZXkpO1xuICAgICAgICBzZXQoa2V5LCBgJHt2ZXJpZmllZH1gKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUtleShnbHQsIGFwaUtleSl7XG4gICAgICAgIGxldCBrZXkgPSBnZXRNdXJtdXJIYXNoKGAke2dsdH1fJHthcGlLZXl9YCwgMTUpLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBidG9hKGtleSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2Vzc2lvbkRhdGEgPSBuZXcgU2Vzc2lvblNlcnZpY2UoKTtcbiIsIlxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZShvYmo6IGFueSwgaW5jbHVkZUZ1bmN0aW9ucyA9IGZhbHNlLCBwcmV0dHlQcmludCA9IGZhbHNlLCBsID0gMCwgbWF4TGV2ZWwgPSAyMCk6IHN0cmluZyB7XG4gICAgaWYgKCFnaWd5YS5sb2NhbEluZm8uaXNJRTgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvd1snSlNPTiddLnN0cmluZ2lmeShvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghbCkgbCA9IDA7XG5cbiAgICAgICAgaWYgKGwgPiBtYXhMZXZlbCkgcmV0dXJuICdbVG9vIGRlZXBdJztcblxuICAgICAgICB2YXIgcHJlZml4ID0gJyc7XG4gICAgICAgIHZhciBuZXdsaW5lID0gJyc7XG4gICAgICAgIHZhciB0YWIgPSAnJztcbiAgICAgICAgaWYgKHByZXR0eVByaW50KSB7XG4gICAgICAgICAgICB0YWIgPSAnXFx0JztcbiAgICAgICAgICAgIG5ld2xpbmUgPSAnXFxuJztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbCArIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHByZWZpeCArPSB0YWI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHQgPSB0eXBlb2Ygb2JqO1xuICAgICAgICBpZiAodCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0ICE9ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gc2ltcGxlIGRhdGEgdHlwZVxuXG4gICAgICAgICAgICBpZiAodCA9PSAnc3RyaW5nJykgb2JqID0gJ1wiJyArIG9iai5yZXBsYWNlKC8oXFxcInxcXFxcKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvXFxyXFxufFxccnxcXG4vZywgJ1xcXFxuJykgKyAnXCInO1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhvYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG4sXG4gICAgICAgICAgICAgICAgdixcbiAgICAgICAgICAgICAgICBqc29uID0gW10sXG4gICAgICAgICAgICAgICAgYXJyID0gb2JqICYmIG9iai5jb25zdHJ1Y3RvciA9PSBBcnJheTtcbiAgICAgICAgICAgIGlmIChhcnIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2ID0gb2JqW2ldO1xuICAgICAgICAgICAgICAgICAgICB0ID0gdHlwZW9mIHY7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2ID09IG51bGwgfHwgdCA9PSAndW5kZWZpbmVkJykgdiA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ID09ICdzdHJpbmcnKSB2ID0gJ1wiJyArIHYucmVwbGFjZSgvKFxcXCJ8XFxcXCkvZywgJ1xcXFwkMScpLnJlcGxhY2UoL1xcclxcbnxcXHJ8XFxuL2csICdcXFxcbicpICsgJ1wiJztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5jbHVkZUZ1bmN0aW9ucykgdiA9ICdGdW5jdGlvbic7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHYgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2LnBhcmVudE5vZGUgJiYgdi5pbm5lckhUTUwpIHYgPSAnSFRNTEVsZW1lbnQnO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2LmNvbnN0cnVjdG9yID09IERhdGUpIHYgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodCA9PSAnb2JqZWN0JyAmJiB2ICE9PSBudWxsKSB2ID0gc2VyaWFsaXplKHYsIGluY2x1ZGVGdW5jdGlvbnMsIHByZXR0eVByaW50LCBsICsgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFN0cmluZyh2KSAhPSAnJykganNvbi5wdXNoKHByZWZpeCArIHRhYiArIFN0cmluZyh2KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKG4gaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBvYmpbbl07XG4gICAgICAgICAgICAgICAgICAgIHQgPSB0eXBlb2YgdjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYgPT0gbnVsbCB8fCB0ID09ICd1bmRlZmluZWQnKSB2ID0gU3RyaW5nKHYpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ID09ICdzdHJpbmcnKSB2ID0gJ1wiJyArIHYucmVwbGFjZSgvKFxcXCJ8XFxcXCkvZywgJ1xcXFwkMScpLnJlcGxhY2UoL1xcclxcbnxcXHJ8XFxuL2csICdcXFxcbicpICsgJ1wiJztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5jbHVkZUZ1bmN0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgPSAnRnVuY3Rpb24nO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodi5wYXJlbnROb2RlICYmIHYuaW5uZXJIVE1MKSB2ID0gJ0hUTUxFbGVtZW50JztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodi5jb25zdHJ1Y3RvciA9PSBEYXRlKSB2ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHQgPT0gJ29iamVjdCcgJiYgdiAhPT0gbnVsbCkgdiA9IG5ld2xpbmUgKyBzZXJpYWxpemUodiwgaW5jbHVkZUZ1bmN0aW9ucywgcHJldHR5UHJpbnQsIGwgKyAxKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoU3RyaW5nKHYpICE9ICcnKSBqc29uLnB1c2gocHJlZml4ICsgdGFiICsgJ1wiJyArIG4ucmVwbGFjZSgvKFxcXCJ8XFxcXCkvZywgJ1xcXFwkMScpLnJlcGxhY2UoL1xcclxcbnxcXHJ8XFxuL2csICdcXFxcbicpICsgJ1wiOicgKyBTdHJpbmcodikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdsaW5lICsgcHJlZml4ICsgKGFyciA/ICdbJyA6ICd7JykgKyBuZXdsaW5lICsganNvbi5qb2luKCcsJyArIG5ld2xpbmUpICsgbmV3bGluZSArIHByZWZpeCArIChhcnIgPyAnXScgOiAnfScpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplPFQ+KGpzb246IHN0cmluZywgZGVmYXVsdFZhbHVlPzogVCwgc2NvcGU/OiBhbnkpOiBUIHtcbiAgICAvLyBSZXR1cm4gZGVmYXVsdCB2YWx1ZSBpZiBpcyBlbXB0eSBzdHJpbmcgKG9yIHNpbWlsYXIpLlxuICAgIGlmICghanNvbiB8fCAhanNvbi5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJykpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCAoe30gYXMgVCk7XG4gICAgfVxuXG4gICAgLy8gQXR0ZW1wdCB0byBwYXJzZS4gT24gZXJyb3IsIHdhcm4gaW4gY29uc29sZSBhbmQgcmV0dXJuIGRlZmF1bHQgdmFsdWUuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qga2V5cyA9IFtdO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICAgICAgaWYgKHNjb3BlKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzY29wZSkge1xuICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHNjb3BlW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZm46IEZ1bmN0aW9uID0gZXZhbChgKGZ1bmN0aW9uKCR7a2V5cy5qb2luKCcsJyl9KSB7IHJldHVybiAke2pzb24udHJpbSgpfTsgfSlgKTtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHVuZGVmaW5lZCwgdmFsdWVzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignRXJyb3IgZGVzZXJpYWxpemluZyBKYXZhU2NyaXB0JywgZSk7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWUgfHwgKHt9IGFzIFQpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZTxUPihqc29uOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IFQpOiBUIHtcbiAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzSUU4KSB7XG4gICAgICAgIHJldHVybiBkZXNlcmlhbGl6ZTxUPihqc29uLCBkZWZhdWx0VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93WydKU09OJ10ucGFyc2UoanNvbik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWUgfHwgKHt9IGFzIFQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgR0lHWUFfUEFSQU1fUFJFRklYIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9hY2NvdW50cy9jb25zdGFudHMnO1xuaW1wb3J0ICogYXMga2V5VmFsdWVVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMva2V5VmFsdWUnO1xuaW1wb3J0ICogYXMgb2JqZWN0VXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL29iamVjdCc7XG5cbnR5cGUgSUdldEdpZ1BhcmFtc0Zyb21VcmxDb25maWcgPSBnaWd5YS51dGlscy5VUkwuSUdldEdpZ1BhcmFtc0Zyb21VcmxDb25maWc7XG50eXBlIElHZXRDb250ZXh0UGFyYW1zRnJvbVVybENvbmZpZyA9IGdpZ3lhLnV0aWxzLlVSTC5JR2V0Q29udGV4dFBhcmFtc0Zyb21VcmxDb25maWdcblxuZXhwb3J0IGZ1bmN0aW9uIFVSTEVuY29kZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBVUkxEZWNvZGUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gVVJMRGVjb2RlUmVjdXJzaXZlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCBwcmV2RGVjb2RpbmdSZXMgPSAnJztcbiAgICBsZXQgY3VyckRlY29kaW5nUmVzID0gdmFsdWU7XG5cbiAgICAvLyBrZWVwIGRlY29kaW5nIHVudGlsIHdlIGNhbid0IGRlY29kZSBhbnltb3JlXG4gICAgd2hpbGUgKGN1cnJEZWNvZGluZ1JlcyAhPSBwcmV2RGVjb2RpbmdSZXMpIHtcbiAgICAgICAgLy8gc3RvcmUgdGhlIGxhc3QgZGVjb2RpbmcgcmVzdWx0XG4gICAgICAgIHByZXZEZWNvZGluZ1JlcyA9IGN1cnJEZWNvZGluZ1JlcztcblxuICAgICAgICAvLyBkZWNvZGUgdGhlIHN0cmluZyBvbmNlIGFnYWluXG4gICAgICAgIGN1cnJEZWNvZGluZ1JlcyA9IFVSTERlY29kZShwcmV2RGVjb2RpbmdSZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyRGVjb2RpbmdSZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJhbXNGcm9tVVJMKHVybDogc3RyaW5nLCBrZXlzVG9Mb3dlcj86IGJvb2xlYW4pOiBPYmplY3Qge1xuICAgIGlmICghdXJsIHx8IHVybC5pbmRleE9mKCc/JykgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgcmV0dXJuIGtleVZhbHVlVXRpbHMuZGVzZXJpYWxpemUodXJsLnNwbGl0KCcjJylbMF0uc3BsaXQoJz8nKVsxXSwgJyYnLCBrZXlzVG9Mb3dlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHaWdQYXJhbXNGcm9tVVJMKGNvbmZpZzogSUdldEdpZ1BhcmFtc0Zyb21VcmxDb25maWcpIHtcblxuICAgIGNvbnN0IHsgdXJsLCBwYXJhbVByZWZpeCwga2V5c1RvTG93ZXIsIHJlbW92ZVByZWZpeCB9ID0gY29uZmlnIHx8IHt9XG5cbiAgICBjb25zdCBwcmVmaXggPSBwYXJhbVByZWZpeCB8fCBHSUdZQV9QQVJBTV9QUkVGSVg7XG4gICAgY29uc3QgdXJsUGFyYW1zID0gZ2V0UGFyYW1zRnJvbVVSTCh1cmwsIGtleXNUb0xvd2VyKTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModXJsUGFyYW1zKVxuICAgICAgICAuZmlsdGVyKGtleSA9PiBrZXkuaW5kZXhPZihwcmVmaXgpID09PSAwICYmIGtleSAhPT0gcHJlZml4KVxuICAgICAgICAucmVkdWNlPGFueT4oKG9iaiwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdLZXkgPSByZW1vdmVQcmVmaXggPyBrZXkuc2xpY2UoNCkgOiBrZXk7XG4gICAgICAgICAgICBvYmpbbmV3S2V5XSA9IHVybFBhcmFtc1trZXldO1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSwge30pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyYW1WYWx1ZUZyb21VUkwocGFyYW06IHN0cmluZywgdXJsOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAobnVsbCA9PSB1cmwgfHwgJycgPT0gdXJsKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgaXFtID0gdXJsLmluZGV4T2YoJz8nKTtcbiAgICBpZiAoaXFtID09PSAtMSkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IHFzID0gJyYnICsgdXJsLnN1YnN0cihpcW0gKyAxKTtcblxuICAgIGxldCBpZHggPSBxcy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJyYnICsgcGFyYW0udG9Mb3dlckNhc2UoKSArICc9Jyk7XG4gICAgaWYgKGlkeCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWxBbmRNb3JlID0gcXMuc3Vic3RyKGlkeCArICgxICsgcGFyYW0ubGVuZ3RoICsgMSkpICsgJyYnO1xuICAgIGlkeCA9IHZhbEFuZE1vcmUuaW5kZXhPZignJicpO1xuXG4gICAgcmV0dXJuIHZhbEFuZE1vcmUuc3Vic3RyKDAsIGlkeCk7XG59XG5leHBvcnQgZnVuY3Rpb24gYWRkUGFyYW1zVG9VUkwodXJsOiBzdHJpbmcsIG9QYXJhbXM6IE9iamVjdCk6IHN0cmluZyB7XG4gICAgY29uc3QgcGFyYW1zID0gZ2V0UGFyYW1zRnJvbVVSTCh1cmwpO1xuICAgIG9iamVjdFV0aWxzLmFkZChwYXJhbXMsIG9QYXJhbXMpO1xuICAgIGNvbnN0IHVybEhhc2hTcGxpdCA9IHVybC5zcGxpdCgnIycpO1xuICAgIGxldCBmaW5hbFVybCA9IHVybEhhc2hTcGxpdFswXS5zcGxpdCgnPycpWzBdICsgJz8nICsga2V5VmFsdWVVdGlscy5zZXJpYWxpemUocGFyYW1zLCAnJicpO1xuICAgIGlmICh1cmxIYXNoU3BsaXQubGVuZ3RoID4gMSkge1xuICAgICAgICBmaW5hbFVybCArPSAnIycgKyB1cmxIYXNoU3BsaXRbMV07XG4gICAgfVxuICAgIHJldHVybiBmaW5hbFVybDtcbn1cblxuXG5jb25zdCByZW1vdmVVbmFjY2VwdGFibGVQYXJhbXMgPSA8VD4ocGFyYW1zOiBULCB1bmFjY2VwdGFibGVQYXJhbXM6IFJlZ0V4cCk6IFBhcnRpYWw8VD4gPT4ge1xuXG4gICAgaWYgKCF1bmFjY2VwdGFibGVQYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9XG5cbiAgICBjb25zdCB2YWxpZFBhcmFtczogUGFydGlhbDxUPiA9IHt9O1xuXG4gICAgT2JqZWN0LmVudHJpZXMocGFyYW1zIHx8IHt9KVxuICAgICAgICAuZmlsdGVyKChbcGFyYW1OYW1lXSkgPT4gIXVuYWNjZXB0YWJsZVBhcmFtcy50ZXN0KHBhcmFtTmFtZSkpXG4gICAgICAgIC5mb3JFYWNoKChbcGFyYW1OYW1lLCBwYXJhbVZhbHVlXTogW3N0cmluZywgc3RyaW5nXSkgPT4gdmFsaWRQYXJhbXNbcGFyYW1OYW1lXSA9IHBhcmFtVmFsdWUpXG5cbiAgICByZXR1cm4gdmFsaWRQYXJhbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZXh0UGFyYW1zRnJvbVVybDxUID0geyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfT4oY29uZmlnOiBJR2V0Q29udGV4dFBhcmFtc0Zyb21VcmxDb25maWcpOiBQYXJ0aWFsPFQ+IHtcblxuICAgIGNvbnN0IHsgdXJsLCBwYXJhbVByZWZpeCwgdW5hY2NlcHRhYmxlUGFyYW1zIH0gPSBjb25maWcgfHwge31cblxuICAgIGlmKCF1cmwpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtcyA9IGdpZ3lhLnV0aWxzLlVSTC5nZXRHaWdQYXJhbXNGcm9tVVJMKHsgdXJsLCBwYXJhbVByZWZpeCB9KSBhcyBUO1xuXG4gICAgcmV0dXJuIHJlbW92ZVVuYWNjZXB0YWJsZVBhcmFtcyhwYXJhbXMsIHVuYWNjZXB0YWJsZVBhcmFtcyk7XG59XG4iLCJpbXBvcnQgKiBhcyBzdHJpbmdVdGlsc1V0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9zdHJpbmdVdGlscyc7XG5cbmV4cG9ydCBjbGFzcyBVcmkge1xuICAgIHByaXZhdGUgX2FuY2hvcjogSFRNTEFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICBjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZywgaXNBYnNvbHV0ZSA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgcHJvdG9jb2wgPSBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCA9PSAnaHR0cDonID8gJ2h0dHAnIDogJ2h0dHBzJztcbiAgICAgICAgaWYgKGlzQWJzb2x1dGUgJiYgdXJsLmluZGV4T2YoJzovLycpID09PSAtMSAmJiB1cmwuY2hhckF0KDApICE9PSAnLycpIHVybCA9IGAke3Byb3RvY29sfTovLyR7dXJsfWA7XG4gICAgICAgIHRoaXMuX2FuY2hvci5ocmVmID0gdXJsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZG9tYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yLmhvc3RuYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvci5wYXRobmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhyZWYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbmNob3IuaHJlZjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHNlYXJjaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvci5zZWFyY2guc2xpY2UoMSk7XG4gICAgfSAvLyBkcm9wcGluZyAnPydcbiAgICBwdWJsaWMgZ2V0IGhhc2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbmNob3IuaGFzaC5zbGljZSgxKTtcbiAgICB9IC8vIGRyb3BwaW5nICcjJ1xuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yLmhyZWY7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZFRvU2VhcmNoKHBhcmFtczogT2JqZWN0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBwYXJhbXNbbmFtZV07XG4gICAgICAgICAgICBpZiAoKHR5cGVvZiB2YWwgPT0gJ2Jvb2xlYW4nIHx8IHR5cGVvZiB2YWwgPT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbCA9PSAnc3RyaW5nJykgJiYgbmFtZSAhPSAnZXZlbnROYW1lJykge1xuICAgICAgICAgICAgICAgIGxldCBhZGRpdGlvbiA9IHRoaXMuX2FuY2hvci5zZWFyY2ggPyAnJicgOiAnJztcbiAgICAgICAgICAgICAgICB0aGlzLl9hbmNob3Iuc2VhcmNoICs9IGAke2FkZGl0aW9ufSR7bmFtZX09JHtlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW25hbWVdKX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBmZXRjaDxUPihyZXRyaWVzID0gMCk6IFByb21pc2U8VD4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5mZXRjaCA/IGF3YWl0IHRoaXMuYnJvd3NlckZldGNoPFQ+KCkgOiBhd2FpdCB0aGlzLnhocjxUPigpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAocmV0cmllcyA8PSAwKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZmV0Y2ggZmFpbGVkOiAke2V9YCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmRlbGF5KDEpO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2gocmV0cmllcyAtIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGlzQmFzZU9mKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBVcmkucGFyc2UodXJsKS5pc0luKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0luKGJhc2U6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgcHVibGljIGlzSW4oYmFzZTogVXJpKTogYm9vbGVhbjtcbiAgICBwdWJsaWMgaXNJbihiYXNlOiBVcmkgfCBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiYXNlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgYmFzZSA9IFVyaS5wYXJzZShiYXNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAodGhpcy5kb21haW4gPT0gYmFzZS5kb21haW4gfHwgLy8gcGFnZSBpcyB0aGUgYmFzZSBkb21haW5cbiAgICAgICAgICAgICAgICB0aGlzLmlzU3ViRG9tYWluT2YoYmFzZSkpICYmIC8vIG9yIHN1Yi1kb21haW4gb2YgaXRcbiAgICAgICAgICAgICghYmFzZS5wYXRoIHx8IHRoaXMucGF0aC5pbmRleE9mKGJhc2UucGF0aCkgPT0gMClcbiAgICAgICAgKTsgLy8gcGFnZSBpcyBhbHNvIGluIGJhc2UncyBkZWZpbmVkIHBhdGg7XG4gICAgfVxuXG4gICAgcHVibGljIGlzRm9yU3ViRG9tYWlucygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9tYWluLmluZGV4T2YoJy4nKSA9PSAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1N1YkRvbWFpbk9mKGJhc2U6IFVyaSk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgZG9tYWluID0gJyc7XG5cbiAgICAgICAgaWYgKCFiYXNlLmlzRm9yU3ViRG9tYWlucygpKSBkb21haW4gPSAnLic7XG5cbiAgICAgICAgZG9tYWluICs9IGJhc2UuZG9tYWluO1xuXG4gICAgICAgIHJldHVybiBzdHJpbmdVdGlsc1V0aWxzLmVuZHNXaXRoKHRoaXMuZG9tYWluLCBkb21haW4pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcGFyc2UodXJsOiBzdHJpbmcsIGlzQWJzb2x1dGUgPSB0cnVlKSB7XG4gICAgICAgIGlmICghdXJsKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICAgIHJldHVybiBuZXcgVXJpKHVybCwgaXNBYnNvbHV0ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBicm93c2VyRmV0Y2g8VD4oKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaylcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZmV0Y2ggZmFpbGVkYCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB4aHI8VD4oKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgICAgICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gNCB8fCB4aHIuc3RhdHVzICE9PSAyMDApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGB4aHIgZmFpbGVkIC0gJHt4aHIuc3RhdHVzfSAtICR7eGhyLnN0YXR1c1RleHR9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGpzb25SZXNwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGpzb25SZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZGVsYXkobXM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UociA9PiBzZXRUaW1lb3V0KHIsIG1zKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgbG9jYWxJbmZvIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvY2FsSW5mbyc7XG5pbXBvcnQge0Nvb2tpZVN0b3JlfSBmcm9tIFwiLi9nbG9iYWxcIjtcblxuZXhwb3J0IHR5cGUgU2FtZVNpdGUgPSAnTm9uZScgfCAnU3RyaWN0JyB8ICdMYXgnO1xuXG5leHBvcnQgY2xhc3MgQ29va2llVXRpbHMge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgdGVzdENvb2tpZU5hbWUgPSAnZ2lnM3BjdGVzdCc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb29raWVTdG9yZTogQ29va2llU3RvcmUgPSBuZXcgQ29va2llU3RvcmUoKSkgeyB9XG5cbiAgICBwdWJsaWMgc2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXhwaXJlc19pbj86IGFueSwgY29va2llRG9tYWluPzogc3RyaW5nLCBkb250VXNlUm9vdFBhdGg/OiBib29sZWFuLCBzYW1lU2l0ZT86IFNhbWVTaXRlKTogYm9vbGVhbiB7XG5cbiAgICAgICAgaWYgKGNvb2tpZURvbWFpbiA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb29raWVEb21haW4gPSB0aGlzLmdldERlZmF1bHREb21haW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhdGggPSBkb250VXNlUm9vdFBhdGggPyAnJyA6ICcvJztcblxuICAgICAgICBjb25zdCBleHBpcmVNcyA9IHRoaXMuX2dldEV4cGlyYXRpb25Jbk1zKGV4cGlyZXNfaW4pO1xuXG4gICAgICAgIGxldCBleHBpcmVzID0gbnVsbDtcbiAgICAgICAgaWYoZXhwaXJlTXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgZXhwaXJlcyA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBleHBpcmVzLnNldFRpbWUoZXhwaXJlcy5nZXRUaW1lKCkgKyBleHBpcmVNcyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29va2llRXhpc3QgPSB0aGlzLl9zZXRDb29raWVJbnRlcm5hbChuYW1lLCB2YWx1ZSwgcGF0aCwgZXhwaXJlcywgY29va2llRG9tYWluLCBzYW1lU2l0ZSk7XG5cbiAgICAgICAgY29uc3Qgc2hvdWxkQ29va2llRXhpc3QgPSAhZXhwaXJlTXMgfHwgZXhwaXJlTXMgPiAwO1xuXG4gICAgICAgIGlmIChzaG91bGRDb29raWVFeGlzdCA9PT0gY29va2llRXhpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgZmFpbGVkIHRvIHNldCBjb29raWUsIHJldHJ5O1xuICAgICAgICAvLyBpdCBtaWdodCBiZSBiZWNhdXNlIHRoZSBkb21haW4gaXMgbGlzdGVkIGFzIFRMRCBodHRwczovL2RhdGEuaWFuYS5vcmcvVExEL3RsZHMtYWxwaGEtYnktZG9tYWluLnR4dFxuICAgICAgICBjb25zdCBwYWdlRG9tYWluID0gbG9jYWxJbmZvLnBhZ2VEb21haW47XG4gICAgICAgIGNvb2tpZUV4aXN0ID0gdGhpcy5fc2V0Q29va2llSW50ZXJuYWwobmFtZSwgdmFsdWUsIHBhdGgsIGV4cGlyZXMsIHBhZ2VEb21haW4sIHNhbWVTaXRlKTtcblxuICAgICAgICByZXR1cm4gY29va2llRXhpc3QgPT09IHNob3VsZENvb2tpZUV4aXN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvb2tpZVN0b3JlLmdldENvb2tpZShuYW1lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlKG5hbWU6IHN0cmluZywgZG9tYWluID0gbG9jYWxJbmZvLnBhZ2VEb21haW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRnJvbUJhc2VEb21haW5zKG5hbWUsIGRvbWFpbik7XG4gICAgICAgIHRoaXMuc2V0KG5hbWUsICcnLCAtMSwgJycsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXQobmFtZSwgJycsIC0xLCAnJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEluZmluaXRlRXhwaXJhdGlvblRpbWVJblNlY29uZHMoKSB7XG4gICAgICAgIC8vIFNldCBleHBpcmF0aW9uIHRpbWUgdG8gMSB5ZWFyc1xuICAgICAgICByZXR1cm4gNjAgKiA2MCAqIDI0ICogMzY1O1xuICAgIH1cblxuICAgIHB1YmxpYyBjYW5TYXZlQ29va2llKGNvb2tpZURvbWFpbiA9IG51bGwpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldChDb29raWVVdGlscy50ZXN0Q29va2llTmFtZSwgJ3RydWUnLCAxLCBjb29raWVEb21haW4sIG51bGwpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBpT1MgMTAgd2VidmlldyB0aHJvd3MgaW4gc29tZSBzY2VuYXJpb3NcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXREZWZhdWx0RG9tYWluKHBhZ2VEb21haW4gPSBsb2NhbEluZm8ucGFnZURvbWFpbiwgYmFzZURvbWFpbiA9IGxvY2FsSW5mby5iYXNlRG9tYWluIHx8ICcnKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGJhc2VEb21haW4ubGVuZ3RoID4gMCAmJiBwYWdlRG9tYWluLmxlbmd0aCA+PSBiYXNlRG9tYWluLmxlbmd0aCAmJiBwYWdlRG9tYWluLmxhc3RJbmRleE9mKGJhc2VEb21haW4pID09PSBwYWdlRG9tYWluLmxlbmd0aCAtIGJhc2VEb21haW4ubGVuZ3RoXG4gICAgICAgICAgICA/IGJhc2VEb21haW5cbiAgICAgICAgICAgIDogcGFnZURvbWFpbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRFeHBpcmF0aW9uSW5NcyhleHBpcmVzSW46IGFueSkge1xuXG4gICAgICAgIGxldCBleHBpcmVNczogbnVtYmVyO1xuICAgICAgICBpZiAoZXhwaXJlc0luID09IG51bGwgfHwgZXhwaXJlc0luID09PSAnJyB8fCBpc05hTihleHBpcmVzSW4pKSB7XG4gICAgICAgICAgICBleHBpcmVNcyA9IDEwMDAgKiB0aGlzLmdldEluZmluaXRlRXhwaXJhdGlvblRpbWVJblNlY29uZHMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChleHBpcmVzSW4gPT0gMCkge1xuICAgICAgICAgICAgLy8gMCBtZWFucyBTZXNzaW9uXG4gICAgICAgICAgICBleHBpcmVNcyA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBbnkgb3RoZXIgdmFsdWUgaXMgbnVtYmVyIG9mIHNlY29uZHMgKEEgbmVnYXRpdmUgdmFsdWUgd291bGQgbWVhbiBleHBpcmUgbm93ISlcbiAgICAgICAgICAgIGV4cGlyZU1zID0gZXhwaXJlc0luICogMTAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBleHBpcmVNcztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZXRDb29raWVJbnRlcm5hbChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgZXhwaXJlczogRGF0ZSwgY29va2llRG9tYWluOiBzdHJpbmcsIHNhbWVTaXRlTW9kZSA9IENvb2tpZVV0aWxzLl9nZXRTYW1lU2l0ZU1vZGUoKSkge1xuICAgICAgICBjb25zdCBwcm90b2NvbCA9IGxvY2FsSW5mbz8ucHJvdG9jb2wgPz8gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2w7XG4gICAgICAgIGNvbnN0IGlzU2VjdXJlZCA9IHByb3RvY29sLmluZGV4T2YoJ2h0dHBzJykgPT09IDA7XG5cbiAgICAgICAgdGhpcy5fY29va2llU3RvcmUuc2V0Q29va2llKG5hbWUsIHZhbHVlLCB7XG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgZXhwaXJlcyxcbiAgICAgICAgICAgIGRvbWFpbjogY29va2llRG9tYWluLFxuICAgICAgICAgICAgc2FtZVNpdGU6IHNhbWVTaXRlTW9kZSxcbiAgICAgICAgICAgIHNlY3VyZTogaXNTZWN1cmVkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmdldChuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNhbWVTaXRlTW9kZSkge1xuICAgICAgICAgICAgLy9pZiBmYWlsZWQgdG8gd3JpdGUgY29va2llIHdpdGhvdXQgc2FtZVNpdGUgbW9kZSwgdGhlbiBzdG9wIGhlcmVcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzYW1lU2l0ZU1vZGUgIT09ICdOb25lJykge1xuICAgICAgICAgICAgdGhpcy5fZmFsbGJhY2tUb1NhbWVTaXRlTm9uZShuYW1lLCB2YWx1ZSwgcGF0aCwgZXhwaXJlcywgY29va2llRG9tYWluLCBpc1NlY3VyZWQpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nZXQobmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlcG9ydEZhbGxiYWNrKCdTZXR0aW5nIFNhbWVTaXRlPU5vbmUnLCB7bmFtZSwgdmFsdWUsIHNhbWVTaXRlTW9kZX0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBmYWlsZWQgdG8gd3JpdGUgY29va2llIHdpdGggc2FtZVNpdGUgbW9kZSwgcmV0cnkgd2l0aG91dDtcbiAgICAgICAgdGhpcy5fY29va2llU3RvcmUuc2V0Q29va2llKG5hbWUsIHZhbHVlLCB7XG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgZXhwaXJlcyxcbiAgICAgICAgICAgIGRvbWFpbjogY29va2llRG9tYWluLFxuICAgICAgICAgICAgc2VjdXJlOiBpc1NlY3VyZWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0KG5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXBvcnRGYWxsYmFjaygnQ29va2llIGVzdGFibGlzaGVkIG9ubHkgd2l0aG91dCBzYW1lU2l0ZSBtb2RlJywge25hbWUsIHZhbHVlLCBzYW1lU2l0ZU1vZGV9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3JlbW92ZUZyb21CYXNlRG9tYWlucyhuYW1lOiBzdHJpbmcsIGRvbWFpbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGRvbWFpblBhcnRzID0gZG9tYWluLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgLy8gd2hlbiBjbGVhcmluZyBmcm9tIGEuYi5jLmQuY29tIC0tPiBjbGVhciBmcm9tIGEuYi5jLmQuY29tLCBiLmMuZC5jb20sIGMuZC5jb20sIGQuY29tXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZG9tYWluUGFydHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkb21haW4gPSBkb21haW5QYXJ0cy5zbGljZShpKS5qb2luKCcuJyk7XG4gICAgICAgICAgICB0aGlzLnNldChuYW1lLCAnJywgLTEsIGRvbWFpbiwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5zZXQobmFtZSwgJycsIC0xLCBkb21haW4sIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2dldFNhbWVTaXRlTW9kZSgpIDogU2FtZVNpdGUge1xuICAgICAgICBpZiAoIUNvb2tpZVV0aWxzLl9kaXNhbGxvd1NhbWVTaXRlTW9kZSgpKSByZXR1cm4gJ05vbmUnO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIF9kaXNhbGxvd1NhbWVTaXRlTW9kZSgpIHtcbiAgICAgICAgY29uc3QgcHJvdG9jb2wgPSBsb2NhbEluZm8/LnByb3RvY29sID8/IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sO1xuICAgICAgICBjb25zdCB1YSA9IGxvY2FsSW5mbz8udXNlckFnZW50ID8/IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgaXNTZWN1cmVkID0gcHJvdG9jb2wuaW5kZXhPZignaHR0cHMnKSA9PT0gMDtcblxuICAgICAgICByZXR1cm4gIWlzU2VjdXJlZCB8fCAhdWEgfHxcbiAgICAgICAgICAgIC8vIENvdmVyIGFsbCBpT1MgYmFzZWQgYnJvd3NlcnMgaGVyZS4gVGhpcyBpbmNsdWRlczpcbiAgICAgICAgICAgIC8vIC0gU2FmYXJpIG9uIGlPUyAxMiBmb3IgaVBob25lLCBpUG9kIFRvdWNoLCBpUGFkXG4gICAgICAgICAgICAvLyAtIFdrV2VidmlldyBvbiBpT1MgMTIgZm9yIGlQaG9uZSwgaVBvZCBUb3VjaCwgaVBhZFxuICAgICAgICAgICAgLy8gLSBDaHJvbWUgb24gaU9TIDEyIGZvciBpUGhvbmUsIGlQb2QgVG91Y2gsIGlQYWRcbiAgICAgICAgICAgIC8vIEFsbCBvZiB3aGljaCBhcmUgYnJva2VuIGJ5IFNhbWVTaXRlPU5vbmUsIGJlY2F1c2UgdGhleSB1c2UgdGhlIGlPUyBuZXR3b3JraW5nIHN0YWNrXG4gICAgICAgICAgICAoKHVhLmluZGV4T2YoJ0NQVSBpUGhvbmUgT1MgMTInKSA+IC0xIHx8IHVhLmluZGV4T2YoJ2lQYWQ7IENQVSBPUyAxMicpID4gLTEpIHx8XG4gICAgICAgICAgICAgICAgLy8gQ292ZXIgTWFjIE9TIFggYmFzZWQgYnJvd3NlcnMgdGhhdCB1c2UgdGhlIE1hYyBPUyBuZXR3b3JraW5nIHN0YWNrLiBUaGlzIGluY2x1ZGVzOlxuICAgICAgICAgICAgICAgIC8vIC0gU2FmYXJpIG9uIE1hYyBPUyBYLlxuICAgICAgICAgICAgICAgIC8vIFRoaXMgZG9lcyBub3QgaW5jbHVkZTpcbiAgICAgICAgICAgICAgICAvLyAtIENocm9tZSBvbiBNYWMgT1MgWFxuICAgICAgICAgICAgICAgIC8vIEJlY2F1c2UgdGhleSBkbyBub3QgdXNlIHRoZSBNYWMgT1MgbmV0d29ya2luZyBzdGFjay5cbiAgICAgICAgICAgICAgICAodWEuaW5kZXhPZignTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xNCcpID4gLTEgJiYgdWEuaW5kZXhPZignVmVyc2lvbi8nKSA+IC0xICYmIHVhLmluZGV4T2YoJ1NhZmFyaScpID4gLTEpIHx8XG4gICAgICAgICAgICAgICAgLy8gQ292ZXIgQ2hyb21lIDUwLTY5LCBiZWNhdXNlIHNvbWUgdmVyc2lvbnMgYXJlIGJyb2tlbiBieSBTYW1lU2l0ZT1Ob25lLFxuICAgICAgICAgICAgICAgIC8vIGFuZCBub25lIGluIHRoaXMgcmFuZ2UgcmVxdWlyZSBpdC5cbiAgICAgICAgICAgICAgICAvLyBOb3RlOiB0aGlzIGNvdmVycyBzb21lIHByZS1DaHJvbWl1bSBFZGdlIHZlcnNpb25zLFxuICAgICAgICAgICAgICAgIC8vIGJ1dCBwcmUtQ2hyb21pdW0gRWRnZSBkb2VzIG5vdCByZXF1aXJlIFNhbWVTaXRlPU5vbmUuXG4gICAgICAgICAgICAgICAgKHVhLmluZGV4T2YoJ0Nocm9tZS81JykgPiAtMSAmJiB1YS5pbmRleE9mKCdDaHJvbWUvNicpID4gLTEpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9mYWxsYmFja1RvU2FtZVNpdGVOb25lKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgcGF0aDogc3RyaW5nLCBleHBpcmVzOiBEYXRlLCBjb29raWVEb21haW46IHN0cmluZywgc2VjdXJlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2Nvb2tpZVN0b3JlLnNldENvb2tpZShuYW1lLCB2YWx1ZSwge1xuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIGV4cGlyZXMsXG4gICAgICAgICAgICBkb21haW46IGNvb2tpZURvbWFpbixcbiAgICAgICAgICAgIHNhbWVTaXRlOiAnTm9uZScsXG4gICAgICAgICAgICBzZWN1cmVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVwb3J0RmFsbGJhY2sobWVzc2FnZTogc3RyaW5nLCBkZXRhaWxzOiB7XG4gICAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgICAgdmFsdWU6IHN0cmluZztcbiAgICAgICAgc2FtZVNpdGVNb2RlOiBzdHJpbmc7XG4gICAgICAgIGlzU3VjY2Vzc2Z1bD86IGJvb2xlYW47XG4gICAgICAgIGlzSWZyYW1lPzogYm9vbGVhbjtcbiAgICB9KSB7XG4gICAgICAgIGdpZ3lhLmxvZ2dlci5yZXBvcnQoYENvb2tpZSBQb2xpY3kgRmFsbGJhY2s6ICR7bWVzc2FnZX1gLCB7Li4uZGV0YWlscywgaXNJZnJhbWU6IHRoaXMuX2lzSUZyYW1lKCl9LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSAgX2lzSUZyYW1lKCk6IGJvb2xlYW4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdz8ubG9jYXRpb24gIT09IHdpbmRvdz8ucGFyZW50Py5sb2NhdGlvbjtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENvb2tpZVV0aWxzKCk7XG4iLCJpbXBvcnQgeyBVcmkgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvVXJpJztcbmltcG9ydCAqIGFzIHN0cmluZ1V0aWxzVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3N0cmluZ1V0aWxzJztcbmltcG9ydCB7IGxvY2FsSW5mbyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2NhbEluZm8nO1xuaW1wb3J0IHtGbGFnU2VydmljZX0gZnJvbSAnLi4vU2VydmljZXMvRmxhZ1NlcnZpY2UnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICcuL2Nvb2tpZSc7XG5cbi8vIFRPRE86IG1vdmUgdG8gY29uZmlnXG5sZXQgYmFzZURvbWFpbnM6IHN0cmluZ1tdfHN0cmluZztcbmlmIChnaWd5YS5wYXJ0bmVyU2V0dGluZ3M/LmJhc2VEb21haW5zPy5sZW5ndGgpIHtcbiAgICBiYXNlRG9tYWlucyA9IGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5iYXNlRG9tYWlucyBhcyBzdHJpbmdbXXxzdHJpbmc7XG59IGVsc2Uge1xuICAgIGlmICh3aW5kb3cuc2VsZiA9PT0gd2luZG93LnRvcCkge1xuICAgICAgICAvLyBvbmx5IGluIHRoZSB0b3AgZnJhbWVcbiAgICAgICAgZ2lneWEubG9nZ2VyLndhcm4oJ2dpZ3lhOiBtaXNzaW5nIGJhc2UgZG9tYWlucyBmb3Igc2l0ZScpO1xuICAgIH1cbiAgICBiYXNlRG9tYWlucyA9IFtkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZV07XG59XG5sb2NhbEluZm8uYmFzZURvbWFpbiA9IGdldEJhc2VEb21haW4oYmFzZURvbWFpbnMpO1xuZXhwb3J0IGRlY2xhcmUgdmFyIGdldEFwaURvbWFpbjogKG5hbWVzcGFjZT86IHN0cmluZykgPT4gc3RyaW5nO1xuY29uc3QgZ2lneWFEb21haW5OYW1lc3BhY2VzID0gWydzb2NpYWxpemUnLCAnYWNjb3VudHMnLCAnZmlkbScsICdnbScsICdjb21tZW50cycsICdnY3MnLCAnaWRzJywgJ2RzJywgJ2dzY291bnRlcnMnLCAncmVwb3J0cyddO1xuZXhwb3J0IGZ1bmN0aW9uIGFwaURvbWFpbkZhY3RvcnkoYXBpRG9tYWluID0gcmVzb2x2ZUFwaURvbWFpbigpLCBkZWZhdWx0QXBpRG9tYWluID0gZ2lneWEuZGVmYXVsdEFwaURvbWFpbik6IChuYW1lc3BhY2U/OiBzdHJpbmcpID0+IHN0cmluZyB7XG5cbiAgICBjb25zdCBzaG91bGRBZGROYW1lc3BhY2UgPSBVcmkucGFyc2UoYXBpRG9tYWluKS5pc0luKFVyaS5wYXJzZShkZWZhdWx0QXBpRG9tYWluKSk7XG5cbiAgICByZXR1cm4gKG5hbWVzcGFjZT86IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAobmFtZXNwYWNlICYmIHNob3VsZEFkZE5hbWVzcGFjZSkge1xuICAgICAgICAgICAgbGV0IHN1YkRvbWFpbiA9IG5hbWVzcGFjZS5zcGxpdCgnLicpWzBdO1xuICAgICAgICAgICAgaWYgKHN1YkRvbWFpbiA9PT0gJ3NkaycgfHwgc3ViRG9tYWluID09PSAnb2F1dGgnKSB7XG4gICAgICAgICAgICAgICAgc3ViRG9tYWluID0gJ2FjY291bnRzJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2lneWFEb21haW5OYW1lc3BhY2VzLmluZGV4T2Yoc3ViRG9tYWluKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci5lcnJvcihgdHJ5aW5nIHRvIHNlbmQgcmVxdWVzdCB0byBhbiBpbnZhbGlkIGRvbWFpbmApO1xuICAgICAgICAgICAgICAgIHN1YkRvbWFpbiA9IGdpZ3lhRG9tYWluTmFtZXNwYWNlc1swXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGAke3N1YkRvbWFpbn0uJHthcGlEb21haW59YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhcGlEb21haW47XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEdpZ3lhRG9tYWluKG5hbWVzcGFjZT86IHN0cmluZywgZGF0YUNlbnRlciA9IGdpZ3lhLmRhdGFDZW50ZXIsIGRlZmF1bHREb21haW4gPSBnaWd5YS5kZWZhdWx0QXBpRG9tYWluKSB7XG4gICAgaWYoZGVmYXVsdERvbWFpbiA9PT0gJ3NhcGNkbS5jbicgJiYgZGF0YUNlbnRlciAhPT0gJ2NuMScpIHtcbiAgICAgICAgZGVmYXVsdERvbWFpbiA9IGBjbjEuJHtkZWZhdWx0RG9tYWlufWA7IC8vRml4IGZvciBjbjEtc3QxLiBpdCBzaG91bGQgYmUgY24xLXN0MS5jbjEuc2FwY2RtLmNuIGFuZCBub3QgY24xLXN0MS5zYXBjZG0uY25cbiAgICB9XG4gICAgY29uc3QgZG9tYWluID0gYCR7ZGF0YUNlbnRlcn0uJHtkZWZhdWx0RG9tYWlufWA7XG5cbiAgICBpZiAobmFtZXNwYWNlKSByZXR1cm4gYCR7bmFtZXNwYWNlfS4ke2RvbWFpbn1gO1xuICAgIGVsc2UgcmV0dXJuIGRvbWFpbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXNlRG9tYWluKFxuICAgIGJhc2VEb21haW5zOiBzdHJpbmdbXXxzdHJpbmcgPSBnaWd5YS5wYXJ0bmVyU2V0dGluZ3MuYmFzZURvbWFpbnMsXG4gICAgY3VycmVudERvbWFpbiA9IGxvY2F0aW9uLmhvc3RuYW1lLFxuICAgIGRlZmF1bHREb21haW5zID0gWydnaWd5YS5jb20nLCAnY24xLnNhcGNkbS5jbicsICdsb2NhbGhvc3QnLCBnaWd5YS5kZWZhdWx0QXBpRG9tYWluXSxcbik6IHN0cmluZyB7XG4gICAgLy8gIzQ5Nzg2IC0gU3VwcG9ydCB3ZWJ2aWV3IHdpdGhvdXQgaG9zdG5hbWUuXG4gICAgaWYgKCFjdXJyZW50RG9tYWluKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGJhc2VEb21haW5zID09ICdzdHJpbmcnKSB7XG4gICAgICAgIGJhc2VEb21haW5zID0gYmFzZURvbWFpbnMuc3BsaXQoJywnKTtcbiAgICB9XG5cbiAgICBsZXQgb3JpZ2luVVJJID0gVXJpLnBhcnNlKGN1cnJlbnREb21haW4pO1xuXG4gICAgaWYgKGRlZmF1bHREb21haW5zKSB7XG4gICAgICAgIGJhc2VEb21haW5zID0gYmFzZURvbWFpbnMuY29uY2F0KGRlZmF1bHREb21haW5zKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCByYXdEb21haW4gb2YgYmFzZURvbWFpbnMpIHtcbiAgICAgICAgLy8gVGhpcyBkb2VzIG5vdCB0YWtlIGNhcmUgb2Ygd2lsZGNhcmRzIGluIHRoZSBtaWRkbGUgb2Ygc3RyaW5nLlxuICAgICAgICBjb25zdCBiYXNlRG9tYWluID0gc3RyaW5nVXRpbHNVdGlscy5yZXBsYWNlQWxsKHJhd0RvbWFpbiwgJyonLCAnJyk7XG4gICAgICAgIGNvbnN0IGJhc2VVcmkgPSBVcmkucGFyc2UoYmFzZURvbWFpbik7XG4gICAgICAgIGlmIChiYXNlVXJpICYmIG9yaWdpblVSSS5pc0luKGJhc2VVcmkpKSB7XG4gICAgICAgICAgICBpZiAoIWdpZ3lhLl8pIHtcbiAgICAgICAgICAgICAgICBnaWd5YS5fID0ge30gYXMgYW55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2lneWEuXy5pc1RydXN0ZWREb21haW49IHRydWU7XG4gICAgICAgICAgICBpZiAoYmFzZVVyaS5pc0ZvclN1YkRvbWFpbnMoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5VUkkuZG9tYWluO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZVVyaS5kb21haW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBmYWxsYmFjayB0byB0aGUgcGFyZW50J3Mgd2luZG93IGRvbWFpbiAoZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkpLlxuICAgIHJldHVybiBvcmlnaW5VUkkuZG9tYWluO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUFwaURvbWFpbihcbiAgICBjdXN0b21BcGlEb21haW5QcmVmaXggPSBnaWd5YS5wYXJ0bmVyU2V0dGluZ3MgJiYgZ2lneWEucGFydG5lclNldHRpbmdzLmN1c3RvbUFQSURvbWFpblByZWZpeCxcbiAgICBiYXNlRG9tYWluID0gbG9jYWxJbmZvLmJhc2VEb21haW4sXG4gICAgZGF0YUNlbnRlciA9IGdpZ3lhLmRhdGFDZW50ZXIsXG4gICAgZGVmYXVsdEFwaURvbWFpbiA9IGdpZ3lhLmRlZmF1bHRBcGlEb21haW4sXG4pIHtcbiAgICBjb25zdCBhcGlEb21haW4gPSBnZXRIb3N0ZWRQYWdlc0FwaURvbWFpbkNvb2tpZSgpO1xuICAgIGlmIChhcGlEb21haW4pIHtcbiAgICAgICAgcmV0dXJuIGFwaURvbWFpbjtcbiAgICB9XG4gICAgLy8gVE9ETzogcmVtb3ZlIG9uY2UgYSBzb2x1dGlvbiB3aWxsIGJlIGZvdW5kIGZvciBob3N0ZWQgcGFnZXNcbiAgICBpZiAoYmFzZURvbWFpbi5lbmRzV2l0aChnaWd5YS5fLmNvbmZpZz8uaG9zdGVkUGFnZXNEb21haW4gfHwgJ215LmdpZ3lhLWV4dC5jb20nKSkge1xuICAgICAgICByZXR1cm4gYmFzZURvbWFpbjtcbiAgICB9XG4gICAgaWYgKGN1c3RvbUFwaURvbWFpblByZWZpeCAmJiBiYXNlRG9tYWluICYmIGJhc2VEb21haW4gIT09IGRlZmF1bHRBcGlEb21haW4pIHtcbiAgICAgICAgcmV0dXJuIGAke2N1c3RvbUFwaURvbWFpblByZWZpeH0uJHtiYXNlRG9tYWlufWA7XG4gICAgfVxuICAgIHJldHVybiBnZXRHaWd5YURvbWFpbih1bmRlZmluZWQsIGRhdGFDZW50ZXIsIGRlZmF1bHRBcGlEb21haW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmFnZURvbWFpbigpIHtcbiAgICBjb25zdCBhcGlEb21haW4gPSBnZXRIb3N0ZWRQYWdlc0FwaURvbWFpbkNvb2tpZSgpO1xuICAgIGlmIChhcGlEb21haW4pIHtcbiAgICAgICAgcmV0dXJuIGFwaURvbWFpbjtcbiAgICB9XG4gICAgaWYgKGdpZ3lhLnRoaXNTY3JpcHQ/Lmdsb2JhbENvbmY/Llsnc3RvcmFnZURvbWFpbk92ZXJyaWRlJ10pIHtcbiAgICAgICAgcmV0dXJuIGdpZ3lhLnRoaXNTY3JpcHQuZ2xvYmFsQ29uZlsnc3RvcmFnZURvbWFpbk92ZXJyaWRlJ107XG4gICAgfVxuICAgIGlmIChnaWd5YS50aGlzU2NyaXB0Py5iYXNlRG9tYWluICYmIEZsYWdTZXJ2aWNlLnVzZUdpZ3lhSnNCYXNlRG9tYWluKSB7XG4gICAgICAgIHJldHVybiBnaWd5YS50aGlzU2NyaXB0LmJhc2VEb21haW47XG4gICAgfVxuICAgIGxldCBkb21haW4gPSBnaWd5YS5kZWZhdWx0QXBpRG9tYWluXG4gICAgaWYgKGdpZ3lhLnV0aWxzLnN0cmluZ1V0aWxzLmVuZHNXaXRoKGRvbWFpbiwgJ3NhcGNkbS5jbicpICYmIGdpZ3lhLmRhdGFDZW50ZXIgIT09ICdjbjEnKSB7IC8vIHNwZWNpYWwgY2FzZSB3aXRoIGNoaW5hIGRvbWFpbiBzdGFnaW5nXG4gICAgICAgIGRvbWFpbiA9IGBjbjEuc2FwY2RtLmNuYDtcbiAgICB9XG4gICAgY29uc3QgcHJlZml4ID0gZ2lneWEuZGF0YUNlbnRlciAhPT0gJ2dsb2JhbCcgPyBgY2Rucy4ke2dpZ3lhLmRhdGFDZW50ZXJ9YCA6IGBjZG5zYDtcbiAgICByZXR1cm4gYCR7cHJlZml4fS4ke2RvbWFpbn1gO1xufVxuXG5mdW5jdGlvbiBnZXRIb3N0ZWRQYWdlc0FwaURvbWFpbkNvb2tpZSgpIHtcbiAgICByZXR1cm4gY29va2llLmdldChgcGFnZXNfYXBpRG9tYWluXyR7Z2lneWEuYXBpS2V5fWApO1xufVxuIiwiZXhwb3J0IGludGVyZmFjZSBJQ29va2llT3B0aW9ucyB7XG4gICAgcGF0aD86IHN0cmluZztcbiAgICBkb21haW4/OiBzdHJpbmc7XG4gICAgZXhwaXJlcz86IERhdGU7XG4gICAgc2FtZVNpdGU/OiAnTm9uZScgfCAnU3RyaWN0JyB8ICdMYXgnO1xuICAgIHNlY3VyZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBDb29raWVTdG9yZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93aW46IFdpbmRvdyA9IHdpbmRvdykgeyB9XG5cbiAgICBzZXRDb29raWUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBvcHRpb25zOiBJQ29va2llT3B0aW9ucykge1xuICAgICAgICBsZXQgY29va2llU3RyaW5nID0gYCR7bmFtZX09JHtlc2NhcGUodmFsdWUpfWA7XG4gICAgICAgIGlmKG9wdGlvbnMucGF0aCkgY29va2llU3RyaW5nICs9IGA7IHBhdGg9JHtvcHRpb25zLnBhdGh9YDtcbiAgICAgICAgaWYob3B0aW9ucy5leHBpcmVzKSBjb29raWVTdHJpbmcgKz0gYDsgZXhwaXJlcz0ke29wdGlvbnMuZXhwaXJlcy50b1VUQ1N0cmluZygpfWA7XG4gICAgICAgIGlmKG9wdGlvbnMuZG9tYWluICYmIG9wdGlvbnMuZG9tYWluLmluZGV4T2YoJy4nKSAhPSAtMSkgY29va2llU3RyaW5nICs9IGA7IGRvbWFpbj0ke29wdGlvbnMuZG9tYWlufWA7XG4gICAgICAgIGlmKG9wdGlvbnMuc2FtZVNpdGUpIGNvb2tpZVN0cmluZyArPSBgOyBzYW1lU2l0ZT0ke29wdGlvbnMuc2FtZVNpdGV9YDtcbiAgICAgICAgaWYob3B0aW9ucy5zZWN1cmUpIGNvb2tpZVN0cmluZyArPSBgOyBzZWN1cmVgO1xuICAgICAgICB0aGlzLl93aW4uZG9jdW1lbnQuY29va2llID0gY29va2llU3RyaW5nO1xuICAgIH1cblxuICAgIGdldENvb2tpZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8W1xcXVxcL1xcXFxdKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvXlsgXFx0XSt8WyBcXHRdKyQvZywgJycpO1xuICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJyg/Ol58OylcXFxccz8nICsgbmFtZSArICc9KC4qPykoPzo7fCQpJyk7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5fd2luLmRvY3VtZW50LmNvb2tpZS5tYXRjaChyZWdleCk7XG4gICAgICAgIHJldHVybiBtYXRjaCAmJiB1bmVzY2FwZShtYXRjaFsxXSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWQoZ2x0ZXhwOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZ2V0TWlsbGlzKGdsdGV4cCkgPiBEYXRlLm5vdygpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE1heCguLi5nbHRleHBzOiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgaWYgKCFnbHRleHBzIHx8ICFnbHRleHBzLmxlbmd0aCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gZ2x0ZXhwcy5zb3J0KChnbHRleHBBLCBnbHRleHBCKSA9PiBnZXRNaWxsaXMoZ2x0ZXhwQikgLSBnZXRNaWxsaXMoZ2x0ZXhwQSkpWzBdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE1pbGxpcyhnbHRFeHA6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAhZ2x0RXhwID8gMCA6IE51bWJlcihnbHRFeHAuc3Vic3RyKDAsIGdsdEV4cC5pbmRleE9mKCdfJykpKSAqIDEwMDA7XG59XG4iLCJpbXBvcnQgKiBhcyBVUkxVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvVVJMJztcbmltcG9ydCAqIGFzIEpTT05VdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvSlNPTic7XG5pbXBvcnQge0ZsYWdTZXJ2aWNlfSBmcm9tIFwiLi4vU2VydmljZXMvRmxhZ1NlcnZpY2VcIjtcbmRlY2xhcmUgZnVuY3Rpb24gdW5lc2NhcGUoZXNjYXBlZFN0cjogc3RyaW5nKTogc3RyaW5nO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplKG9LZXlWYWx1ZTogT2JqZWN0LCBkZWxpbWl0ZXI/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGEgPSBbXTtcbiAgICBpZiAoIWRlbGltaXRlcikge1xuICAgICAgICBkZWxpbWl0ZXIgPSAnJic7XG4gICAgfVxuICAgIGZvciAoY29uc3QgcCBpbiBvS2V5VmFsdWUpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlb2Ygb0tleVZhbHVlW3BdKSB7XG4gICAgICAgICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICAgICAgaWYgKG9LZXlWYWx1ZVtwXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGEucHVzaChwICsgJz0nICsgVVJMVXRpbHMuVVJMRW5jb2RlKEpTT05VdGlscy5zZXJpYWxpemUob0tleVZhbHVlW3BdKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBhLnB1c2gocCArICc9JyArIFVSTFV0aWxzLlVSTEVuY29kZShvS2V5VmFsdWVbcF0pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzID0gYS5qb2luKGRlbGltaXRlcik7XG4gICAgcmV0dXJuIHM7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVzZXJpYWxpemUodXJsRW5jb2RlZFN0cmluZzogc3RyaW5nLCBkZWxpbWl0ZXI/OiBzdHJpbmcsIGtleXNUb0xvd2VyPzogYm9vbGVhbiwgdXNlVW5lc2NhcGU/OiBib29sZWFuKTogYW55IHtcbiAgICBjb25zdCBvID0ge307XG4gICAgaWYgKCF1cmxFbmNvZGVkU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBvO1xuICAgIH1cbiAgICBpZiAoIWRlbGltaXRlcikge1xuICAgICAgICBkZWxpbWl0ZXIgPSAnJic7XG4gICAgfVxuICAgIGNvbnN0IHBhaXJzID0gdXJsRW5jb2RlZFN0cmluZy5zcGxpdChkZWxpbWl0ZXIpO1xuICAgIGZvciAobGV0IGlQYWlyID0gMDsgaVBhaXIgPCBwYWlycy5sZW5ndGg7IGlQYWlyKyspIHtcbiAgICAgICAgY29uc3QgcGFpciA9IHBhaXJzW2lQYWlyXTtcbiAgICAgICAgY29uc3QgZXFQb3MgPSBwYWlyLmluZGV4T2YoJz0nKTtcbiAgICAgICAgaWYgKGVxUG9zID09PSAtMSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5c1RvTG93ZXIgPyBwYWlyLnRvTG93ZXJDYXNlKCkgOiBwYWlyO1xuICAgICAgICAgICAgb1trZXldID0gJzEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGtleSA9IHBhaXIuc3Vic3RyKDAsIGVxUG9zKTtcbiAgICAgICAgICAgIGlmIChrZXlzVG9Mb3dlcikge1xuICAgICAgICAgICAgICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZFZhbHVlID0gcGFpci5zdWJzdHIoZXFQb3MgKyAxKS5yZXBsYWNlKC9cXCsvZywgJyAnKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZVVuZXNjYXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ba2V5XSA9IEZsYWdTZXJ2aWNlLnVzZURlY29kZVVSSUNvbXBvbmVudCA/IGNvbXBhcmVSZXN1bHRzQW5kUmV0dXJuVVJMRGVjb2RlKHNlcmlhbGl6ZWRWYWx1ZSkgOiB1bmVzY2FwZShzZXJpYWxpemVkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9ba2V5XSA9IFVSTFV0aWxzLlVSTERlY29kZShzZXJpYWxpemVkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICBvW2tleV0gPSBGbGFnU2VydmljZS51c2VEZWNvZGVVUklDb21wb25lbnQgPyBVUkxVdGlscy5VUkxEZWNvZGUoc2VyaWFsaXplZFZhbHVlKSA6IHVuZXNjYXBlKHNlcmlhbGl6ZWRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG87XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmVSZXN1bHRzQW5kUmV0dXJuVVJMRGVjb2RlKHNlcmlhbGl6ZWRWYWx1ZSl7XG4gICAgY29uc3QgdW5lc2NhcGVkUmVzdWx0ID0gdW5lc2NhcGUoc2VyaWFsaXplZFZhbHVlKTtcbiAgICBjb25zdCB1cmxEZWNvZGVSZXN1bHQgPSBVUkxVdGlscy5VUkxEZWNvZGUoc2VyaWFsaXplZFZhbHVlKTtcbiAgICB1bmVzY2FwZWRSZXN1bHQubG9jYWxlQ29tcGFyZSh1cmxEZWNvZGVSZXN1bHQpICE9PSAwICYmIGdpZ3lhLmxvZ2dlci5yZXBvcnQoJ3VybERlY29kZXIgYW5kIHVuZXNjYXBlZCBoYXZlIGRpZmZlcmVudCB2YWx1ZXMnLCB7XG4gICAgICAgIHVuZXNjYXBlZFJlc3VsdCxcbiAgICAgICAgdXJsRGVjb2RlUmVzdWx0XG4gICAgfSk7XG4gICAgcmV0dXJuIHVybERlY29kZVJlc3VsdDtcbn1cbiIsImltcG9ydCAqIGFzIEpTT05VdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvSlNPTic7XG5pbXBvcnQgeyBsb2NhbEluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvJztcbmltcG9ydCBjb29raWVVdGlscywge1NhbWVTaXRlfSBmcm9tICcuL2Nvb2tpZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdBYnN0cmFjdEFkYXB0ZXInO1xuICAgIH1cblxuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nO1xuXG4gICAgcHVibGljIGFic3RyYWN0IHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZXNJbj86IG51bWJlciwgZG9tYWluPzogc3RyaW5nKTogdm9pZDtcblxuICAgIHB1YmxpYyBhYnN0cmFjdCByZW1vdmVJdGVtKGtleTogc3RyaW5nKTtcblxuICAgIC8qKlxuICAgICAqIFNldCBvYmplY3QgdG8gc3RvcmFnZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0T2JqZWN0KGtleTogc3RyaW5nLCBvOiBPYmplY3QpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtKGtleSwgSlNPTlV0aWxzLnNlcmlhbGl6ZShvKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG9iamVjdCBmcm9tIGxvY2FsIHN0b3JhZ2UuXG4gICAgICovXG4gICAgcHVibGljIGdldE9iamVjdChrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KTogT2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIEpTT05VdGlscy5kZXNlcmlhbGl6ZSh0aGlzLmdldEl0ZW0oa2V5KSwgZGVmYXVsdFZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJcyBwZXJzaXN0ZW50IHN0b3JhZ2UuIFJldHVybnMgZmFsc2Ugd2hlbiBkYXRhIGlzIG5vdCBwZXJzaXN0ZWQuXG4gICAgICovXG4gICAgcHVibGljIGlzUGVyc2lzdGVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0QXN5bmNMb2NhbFN0b3JhZ2VBZGFwdGVyIGV4dGVuZHMgQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIHtcbiAgICBwcm90ZWN0ZWQgaXNMb2FkZWQ6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1JlYWR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0xvYWRlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIHdoZW4gdGhlcmUgaXMgaW5pdGlhbGl6YXRpb24gdGltZSBvbiB0aGUgbG9jYWwgc3RvcmFnZSBhZGFwdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyB3YWl0Rm9yU2VydmljZShjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc1JlYWR5KCkpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMud2FpdEZvclNlcnZpY2UoY2FsbGJhY2spLCA1MCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5hYnN0cmFjdCBjbGFzcyBTdG9yYWdlQWRhcHRlciBleHRlbmRzIEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlciB7XG4gICAgcHJvdGVjdGVkIHN0b3JhZ2U6IGFueTtcblxuICAgIHB1YmxpYyBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZVtrZXldO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzSW4/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7fVxuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgfVxufVxuY2xhc3MgTG9jYWxTdG9yYWdlQWRhcHRlciBleHRlbmRzIFN0b3JhZ2VBZGFwdGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnTG9jYWxTdG9yYWdlQWRhcHRlcic7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc0F2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsSW5mby5zdXBwb3J0c0xvY2FsU3RvcmFnZTtcbiAgICB9XG59XG5jbGFzcyBTZXNzaW9uU3RvcmFnZUFkYXB0ZXIgZXh0ZW5kcyBTdG9yYWdlQWRhcHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnU2Vzc2lvblN0b3JhZ2VBZGFwdGVyJztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gbG9jYWxJbmZvLnN1cHBvcnRzU2Vzc2lvblN0b3JhZ2U7XG4gICAgfVxufVxuY2xhc3MgRmlyZWZveFN0b3JhZ2VBZGFwdGVyIGV4dGVuZHMgQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIGlzQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gbG9jYWxJbmZvLmlzRkYgJiYgd2luZG93WydnbG9iYWxTdG9yYWdlJ107XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ0ZpcmVmb3hTdG9yYWdlQWRhcHRlcic7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gd2luZG93WydnbG9iYWxTdG9yYWdlJ11bbG9jYXRpb24uaG9zdG5hbWVdW2tleV07XG4gICAgfVxuXG4gICAgcHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZXNJbj86IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgd2luZG93WydnbG9iYWxTdG9yYWdlJ11bbG9jYXRpb24uaG9zdG5hbWVdW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHt9XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgZGVsZXRlIHdpbmRvd1snZ2xvYmFsU3RvcmFnZSddW2xvY2F0aW9uLmhvc3RuYW1lXVtrZXldO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb29raWVTdG9yYWdlQWRhcHRlciBleHRlbmRzIEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlciB7XG4gICAgcHVibGljIHN0YXRpYyBpc0F2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGNvb2tpZVV0aWxzLmNhblNhdmVDb29raWUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnQ29va2llU3RvcmFnZUFkYXB0ZXInO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGNvb2tpZVV0aWxzLmdldChrZXkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzSW4/OiBudW1iZXIsIGRvbWFpbj86IHN0cmluZywgYWRkaXRpb25hbFBhcmFtczoge2RvbnRVc2VSb290UGF0aD86IGJvb2xlYW4sIHNhbWVTaXRlPzogU2FtZVNpdGV9ID0ge30pOiB2b2lkIHtcbiAgICAgICAgY29va2llVXRpbHMuc2V0KGtleSwgdmFsdWUsIGV4cGlyZXNJbiwgZG9tYWluLCBhZGRpdGlvbmFsUGFyYW1zLmRvbnRVc2VSb290UGF0aCwgYWRkaXRpb25hbFBhcmFtcy5zYW1lU2l0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgY29va2llVXRpbHMucmVtb3ZlKGtleSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1lbW9yeVN0b3JhZ2VBZGFwdGVyIGV4dGVuZHMgQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIGlzQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWVtb3J5OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubWVtb3J5ID0ge307XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ01lbW9yeVN0b3JhZ2VBZGFwdGVyJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lbW9yeVtrZXldO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzSW4/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tZW1vcnlba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLm1lbW9yeVtrZXldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElzIHBlcnNpc3RlbnQgc3RvcmFnZS4gUmV0dXJucyBmYWxzZSB3aGVuIGRhdGEgaXMgbm90IHBlcnNpc3RlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNQZXJzaXN0ZW50KCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGFkYXB0ZXJzOiBBcnJheTxhbnk+ID0gW1xuICAgIExvY2FsU3RvcmFnZUFkYXB0ZXIsXG4gICAgU2Vzc2lvblN0b3JhZ2VBZGFwdGVyLFxuICAgIEZpcmVmb3hTdG9yYWdlQWRhcHRlcixcbiAgICBDb29raWVTdG9yYWdlQWRhcHRlcixcbiAgICBNZW1vcnlTdG9yYWdlQWRhcHRlcixcbl07XG5leHBvcnQgY29uc3QgaW5zdGFuY2VzOiB7IFtrZXk6IHN0cmluZ106IEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlciB9ID0ge307XG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFkYXB0ZXIoYWRhcHRlcjogeyBuYW1lPzogc3RyaW5nOyBnZXROYW1lOiAoKSA9PiBzdHJpbmcgfSAmIChuZXcgKCkgPT4gQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyKSkge1xuICAgIGNvbnN0IGFkYXB0ZXJOYW1lID0gYWRhcHRlci5nZXROYW1lKCkgfHwgYWRhcHRlci5uYW1lO1xuICAgIGlmICghaW5zdGFuY2VzW2FkYXB0ZXJOYW1lXSkge1xuICAgICAgICBpbnN0YW5jZXNbYWRhcHRlck5hbWVdID0gbmV3IGFkYXB0ZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIGluc3RhbmNlc1thZGFwdGVyTmFtZV07XG59XG5leHBvcnQgZnVuY3Rpb24gd2FpdEZvclNlcnZpY2UoKTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyO1xuZXhwb3J0IGZ1bmN0aW9uIHdhaXRGb3JTZXJ2aWNlKGNhbGxiYWNrOiAoc3RvcmFnZTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyKSA9PiB2b2lkKTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyO1xuZXhwb3J0IGZ1bmN0aW9uIHdhaXRGb3JTZXJ2aWNlKGNhbGxiYWNrPzogKHN0b3JhZ2U6IEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlcikgPT4gdm9pZCk6IEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlciB7XG4gICAgLy8gU2VsZWN0IGNvbXBhdGlibGUgYWRhcHRlci5cbiAgICBsZXQgc3RvcmFnZTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyO1xuICAgIGZvciAoY29uc3QgYWRhcHRlciBvZiBhZGFwdGVycykge1xuICAgICAgICBpZiAoYWRhcHRlci5pc0F2YWlsYWJsZSgpKSB7XG4gICAgICAgICAgICAvLyBEb24ndCBzZWxlY3QgYWRhcHRlciBpZiBpdCdzIGFzeW5jIGFuZCBhIGNhbGxiYWNrIHdhc24ndCBwcm92aWRlZC5cbiAgICAgICAgICAgIGlmIChhZGFwdGVyLnByb3RvdHlwZSBpbnN0YW5jZW9mIEFic3RyYWN0QXN5bmNMb2NhbFN0b3JhZ2VBZGFwdGVyICYmICFjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdG9yYWdlID0gaW5pdGlhbGl6ZUFkYXB0ZXIoYWRhcHRlcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIHRvIG1lbW9yeS1iYXNlZCBub24tcGVyc2lzdGVudCBzdG9yYWdlLlxuICAgIGlmICghc3RvcmFnZSkge1xuICAgICAgICBzdG9yYWdlID0gaW5pdGlhbGl6ZUFkYXB0ZXIoTWVtb3J5U3RvcmFnZUFkYXB0ZXIpO1xuICAgIH1cblxuICAgIC8vIFRyaWdnZXIgY2FsbGJhY2sgd2hlbiBhZGFwdGVyIGZpbmlzaGVzIGxvYWRpbmcgKG9yIGluc3RhbnRseSwgaWYgbm90IHJlcXVpcmVkIHRvIHdhaXQpLlxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBpZiAoc3RvcmFnZSBpbnN0YW5jZW9mIEFic3RyYWN0QXN5bmNMb2NhbFN0b3JhZ2VBZGFwdGVyKSB7XG4gICAgICAgICAgICBzdG9yYWdlLndhaXRGb3JTZXJ2aWNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhzdG9yYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2soc3RvcmFnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0b3JhZ2U7XG59XG5jb25zdCBhZGFwdGVyID0gd2FpdEZvclNlcnZpY2UoKTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYWRhcHRlci5nZXRJdGVtKGtleSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXhwaXJlc0luPzogbnVtYmVyKTogdm9pZCB7XG4gICAgcmV0dXJuIGFkYXB0ZXIuc2V0SXRlbShrZXksIHZhbHVlLCBleHBpcmVzSW4pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICByZXR1cm4gYWRhcHRlci5yZW1vdmVJdGVtKGtleSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0T2JqZWN0KGtleTogc3RyaW5nLCBvOiBPYmplY3QpOiB2b2lkIHtcbiAgICByZXR1cm4gYWRhcHRlci5zZXRPYmplY3Qoa2V5LCBvKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRPYmplY3Qoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSk6IE9iamVjdCB7XG4gICAgcmV0dXJuIGFkYXB0ZXIuZ2V0T2JqZWN0KGtleSwgZGVmYXVsdFZhbHVlKTtcbn1cbiIsImltcG9ydCAqIGFzIEpTT05VdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvSlNPTic7XG5pbXBvcnQgV2ViU0RLVG9nZ2xlcyBmcm9tIFwiLi90b2dnbGVzXCI7XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVW5kZWZpbmVkKG86IE9iamVjdCk6IE9iamVjdCB7XG4gICAgdmFyIG8yID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBvKSB7XG4gICAgICAgIGlmIChvW3BdICE9IG51bGwgJiYgb1twXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG8yW3BdID0gb1twXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbzI7XG59XG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbkhlbHBlcihjb250ZXh0KSB7XG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwge307XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0RmllbGQ6IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgICAgICAgIGlmICghcGF0aCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBwYXRocyA9IHBhdGguc3BsaXQoJy4nKSxcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY29udGV4dCxcbiAgICAgICAgICAgICAgICBpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFtwYXRoc1tpXV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnRbcGF0aHNbaV1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydHlCeVNlcmlhbGl6ZWROYW1lKG86IE9iamVjdCwgbmFtZTogc3RyaW5nLCBjcmVhdGVNaXNzaW5nT2JqZWN0czogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFuYW1lKSByZXR1cm4gbztcbiAgICB2YXIgb1Jlc3VsdCA9IG87XG4gICAgdmFyIGFyTmFtZVNlZ21lbnRzID0gbmFtZS5zcGxpdCgnLicpO1xuICAgIGZvciAodmFyIGlTZWdtZW50ID0gMDsgaVNlZ21lbnQgPCBhck5hbWVTZWdtZW50cy5sZW5ndGg7IGlTZWdtZW50KyspIHtcbiAgICAgICAgdmFyIHNTZWdtZW50ID0gYXJOYW1lU2VnbWVudHNbaVNlZ21lbnRdO1xuICAgICAgICB2YXIgc0luZGV4ID0gbnVsbDtcbiAgICAgICAgLy9TdXBwb3J0IGZvciBhcnJheSBhY2Nlc3MuIGkuZS4gXCJvYmoucHJvcDFbMF0ucHJvcDJcIlxuICAgICAgICBpZiAoc1NlZ21lbnQubWF0Y2goL1xcW1swLTldK10vKSkge1xuICAgICAgICAgICAgc0luZGV4ID0gTnVtYmVyKHNTZWdtZW50Lm1hdGNoKC9cXFtbMC05XStdLylbMF0ucmVwbGFjZSgvW1xcW1xcXV0vZywgJycpKTtcbiAgICAgICAgfVxuICAgICAgICBzU2VnbWVudCA9IHNTZWdtZW50LnNwbGl0KC9cXFtbMC05XStdLykuam9pbignJyk7XG4gICAgICAgIHZhciByZXMgPSAoc0luZGV4IHx8IHNJbmRleCA9PT0gMCkgJiYgb1Jlc3VsdFtzU2VnbWVudF0gPyBvUmVzdWx0W3NTZWdtZW50XVtzSW5kZXhdIDogb1Jlc3VsdFtzU2VnbWVudF07XG4gICAgICAgIGlmIChjcmVhdGVNaXNzaW5nT2JqZWN0cyAmJiAhb1Jlc3VsdFtzU2VnbWVudF0pIHtcbiAgICAgICAgICAgIG9SZXN1bHRbc1NlZ21lbnRdID0ge307XG4gICAgICAgIH0gZWxzZSBpZiAoY3JlYXRlTWlzc2luZ09iamVjdHMgJiYgIXJlcyAmJiByZXMgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBvUmVzdWx0W3NTZWdtZW50XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXMgfHwgcmVzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgb1Jlc3VsdCA9IHJlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvUmVzdWx0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb3BlcnR5QnlTZXJpYWxpemVkTmFtZShvOiBPYmplY3QsIG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHZhciBhck5hbWVTZWdtZW50cyA9IG5hbWUuc3BsaXQoJy4nKTtcbiAgICB2YXIgcHJvcGVydHlOYW1lID0gYXJOYW1lU2VnbWVudHMucG9wKCk7XG4gICAgZ2V0UHJvcGVydHlCeVNlcmlhbGl6ZWROYW1lKG8sIGFyTmFtZVNlZ21lbnRzLmpvaW4oJy4nKSwgdHJ1ZSlbcHJvcGVydHlOYW1lXSA9IHZhbHVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFkZChvVGFyZ2V0OiBPYmplY3QsIG86IE9iamVjdCwgZG9udE92ZXJyaWRlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIGZvciAodmFyIHAgaW4gbykge1xuICAgICAgICBpZiAoIWRvbnRPdmVycmlkZSB8fCB0eXBlb2Ygb1RhcmdldFtwXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9UYXJnZXRbcF0gPSBvW3BdO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEhhc2gobzogYW55KTogc3RyaW5nIHtcbiAgICB2YXIgYXIgPSBbXTtcbiAgICBmb3IgKHZhciBwIGluIG8pIHtcbiAgICAgICAgdmFyIHM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvW3BdID09ICdvYmplY3QnKSBzID0gSlNPTlV0aWxzLnNlcmlhbGl6ZShvW3BdLCBmYWxzZSk7XG4gICAgICAgIGVsc2UgaWYgKG9bcF0pIHMgPSBvW3BdLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgYXIucHVzaChwICsgJz0nICsgcyk7XG4gICAgfVxuICAgIHJldHVybiBhci5zb3J0KCkuam9pbignJicpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE11cm11ckhhc2goa2V5OiBzdHJpbmcsIHNlZWQ/OiBudW1iZXIpIHtcbiAgICBpZiAoIXNlZWQpIHNlZWQgPSAwO1xuICAgIHZhciByZW1haW5kZXIsIGJ5dGVzLCBoMSwgaDFiLCBjMSwgYzFiLCBjMiwgYzJiLCBrMSwgaTtcblxuICAgIHJlbWFpbmRlciA9IGtleS5sZW5ndGggJiAzOyAvLyBrZXkubGVuZ3RoICUgNFxuICAgIGJ5dGVzID0ga2V5Lmxlbmd0aCAtIHJlbWFpbmRlcjtcbiAgICBoMSA9IHNlZWQ7XG4gICAgYzEgPSAweGNjOWUyZDUxO1xuICAgIGMyID0gMHgxYjg3MzU5MztcbiAgICBpID0gMDtcblxuICAgIHdoaWxlIChpIDwgYnl0ZXMpIHtcbiAgICAgICAgazEgPSAoa2V5LmNoYXJDb2RlQXQoaSkgJiAweGZmKSB8ICgoa2V5LmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDgpIHwgKChrZXkuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMTYpIHwgKChrZXkuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMjQpO1xuICAgICAgICArK2k7XG5cbiAgICAgICAgazEgPSAoKGsxICYgMHhmZmZmKSAqIGMxICsgKCgoKGsxID4+PiAxNikgKiBjMSkgJiAweGZmZmYpIDw8IDE2KSkgJiAweGZmZmZmZmZmO1xuICAgICAgICBrMSA9IChrMSA8PCAxNSkgfCAoazEgPj4+IDE3KTtcbiAgICAgICAgazEgPSAoKGsxICYgMHhmZmZmKSAqIGMyICsgKCgoKGsxID4+PiAxNikgKiBjMikgJiAweGZmZmYpIDw8IDE2KSkgJiAweGZmZmZmZmZmO1xuXG4gICAgICAgIGgxIF49IGsxO1xuICAgICAgICBoMSA9IChoMSA8PCAxMykgfCAoaDEgPj4+IDE5KTtcbiAgICAgICAgaDFiID0gKChoMSAmIDB4ZmZmZikgKiA1ICsgKCgoKGgxID4+PiAxNikgKiA1KSAmIDB4ZmZmZikgPDwgMTYpKSAmIDB4ZmZmZmZmZmY7XG4gICAgICAgIGgxID0gKGgxYiAmIDB4ZmZmZikgKyAweDZiNjQgKyAoKCgoaDFiID4+PiAxNikgKyAweGU2NTQpICYgMHhmZmZmKSA8PCAxNik7XG4gICAgfVxuXG4gICAgazEgPSAwO1xuXG4gICAgc3dpdGNoIChyZW1haW5kZXIpIHtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgazEgXj0gKGtleS5jaGFyQ29kZUF0KGkgKyAyKSAmIDB4ZmYpIDw8IDE2O1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBrMSBePSAoa2V5LmNoYXJDb2RlQXQoaSArIDEpICYgMHhmZikgPDwgODtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgazEgXj0ga2V5LmNoYXJDb2RlQXQoaSkgJiAweGZmO1xuXG4gICAgICAgICAgICBrMSA9ICgoazEgJiAweGZmZmYpICogYzEgKyAoKCgoazEgPj4+IDE2KSAqIGMxKSAmIDB4ZmZmZikgPDwgMTYpKSAmIDB4ZmZmZmZmZmY7XG4gICAgICAgICAgICBrMSA9IChrMSA8PCAxNSkgfCAoazEgPj4+IDE3KTtcbiAgICAgICAgICAgIGsxID0gKChrMSAmIDB4ZmZmZikgKiBjMiArICgoKChrMSA+Pj4gMTYpICogYzIpICYgMHhmZmZmKSA8PCAxNikpICYgMHhmZmZmZmZmZjtcbiAgICAgICAgICAgIGgxIF49IGsxO1xuICAgIH1cblxuICAgIGgxIF49IGtleS5sZW5ndGg7XG5cbiAgICBoMSBePSBoMSA+Pj4gMTY7XG4gICAgaDEgPSAoKGgxICYgMHhmZmZmKSAqIDB4ODVlYmNhNmIgKyAoKCgoaDEgPj4+IDE2KSAqIDB4ODVlYmNhNmIpICYgMHhmZmZmKSA8PCAxNikpICYgMHhmZmZmZmZmZjtcbiAgICBoMSBePSBoMSA+Pj4gMTM7XG4gICAgaDEgPSAoKGgxICYgMHhmZmZmKSAqIDB4YzJiMmFlMzUgKyAoKCgoaDEgPj4+IDE2KSAqIDB4YzJiMmFlMzUpICYgMHhmZmZmKSA8PCAxNikpICYgMHhmZmZmZmZmZjtcbiAgICBoMSBePSBoMSA+Pj4gMTY7XG5cbiAgICByZXR1cm4gaDEgPj4+IDA7XG59XG5leHBvcnQgZnVuY3Rpb24gY2xvbmUob2JqOiBhbnksIGRlZXBDb3B5PzogYm9vbGVhbiwgaWdub3JlRnVuY3Rpb25zPzogYm9vbGVhbiwgbWF4TGV2ZWw6IG51bWJlciA9IDIwLCBsZXZlbDogbnVtYmVyID0gMCwgaWdub3JlQ29udGV4dD86IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmIChvYmogPT09IHdpbmRvdykgcmV0dXJuIHdpbmRvdzsgLy8gZG8gbm90IGNsb25lIHRoZSB3aW5kb3cgb2JqZWN0XG4gICAgaWYgKGxldmVsID4gbWF4TGV2ZWwpIHJldHVybiBudWxsOyAvLyBUb28gZGVlcFxuICAgIGlmICh0eXBlb2Ygb2JqID09ICd1bmRlZmluZWQnIHx8IG9iaiA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBXZWJTREtUb2dnbGVzLmlzT24oJ3JlbW92ZVVuZGVmaW5lZFByb3BlcnRpZXMnKSA/IG9iaiA6IG51bGw7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09ICdmdW5jdGlvbicgJiYgaWdub3JlRnVuY3Rpb25zKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSBpZiAob2JqLmNvbnN0cnVjdG9yID09IEFycmF5KSB7XG4gICAgICAgIHZhciBhciA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFpZ25vcmVGdW5jdGlvbnMgfHwgdHlwZW9mIG9ialtpXSAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlZXBDb3B5KSB7XG4gICAgICAgICAgICAgICAgICAgIGFyW2ldID0gY2xvbmUob2JqW2ldLCBkZWVwQ29weSwgaWdub3JlRnVuY3Rpb25zLCBtYXhMZXZlbCwgbGV2ZWwgKyAxLCBpZ25vcmVDb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhcltpXSA9IG9ialtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PSAnb2JqZWN0Jykge1xuICAgICAgICB2YXIgbyA9IHt9O1xuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKGlnbm9yZUNvbnRleHQgJiYgcCA9PSAnY29udGV4dCcpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFpZ25vcmVGdW5jdGlvbnMgfHwgdHlwZW9mIG9ialtwXSAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlZXBDb3B5KSB7XG4gICAgICAgICAgICAgICAgICAgIG9bcF0gPSBjbG9uZShvYmpbcF0sIGRlZXBDb3B5LCBpZ25vcmVGdW5jdGlvbnMsIG1heExldmVsLCBsZXZlbCArIDEsIGlnbm9yZUNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9bcF0gPSBvYmpbcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGFyZ3M6IE9iamVjdFtdLCBpc0RlZXBNZXJnZT86IGJvb2xlYW4pOiBPYmplY3Q7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYXJnczogYW55W10sIGlzRGVlcE1lcmdlPzogYm9vbGVhbik6IE9iamVjdCB7XG4gICAgdmFyIG8gPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFyZ3NbaV0gJiYgYXJnc1tpXS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHUgPSAwOyB1IDwgYXJnc1tpXS5sZW5ndGg7IHUrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHAgaW4gYXJnc1tpXVt1XSkge1xuICAgICAgICAgICAgICAgICAgICBvW3BdID0gYXJnc1tpXVt1XVtwXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBNZXJnZSBvYmplY3RzLlxuICAgICAgICAgICAgaWYgKCFpc0RlZXBNZXJnZSkge1xuICAgICAgICAgICAgICAgIC8vIEZsYXQgbWVyZ2UuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBhcmdzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIG9bcF0gPSBhcmdzW2ldW3BdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRGVlcCBtZXJnZS5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwIGluIGFyZ3NbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy93ZSBvdmVycmlkZSBwcmltaXRpdmUgLyBhcnJheVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9bcF0gIT09ICdvYmplY3QnIHx8IG9bcF0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb1twXSA9IGFyZ3NbaV1bcF07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvW3BdID0gbWVyZ2UoW29bcF0sIGFyZ3NbaV1bcF1dLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbztcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bmZsYXR0ZW4oZGF0YTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBib29sZWFuIH0pOiBPYmplY3Qge1xuICAgIGlmIChPYmplY3QoZGF0YSkgIT09IGRhdGEgfHwgQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChsZXQgcCBpbiBkYXRhKSB7XG4gICAgICAgIGxldCBjdXIgPSByZXN1bHQ7XG4gICAgICAgIGxldCBwcm9wID0gJyc7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gcC5yZXBsYWNlKC9cXFsoWzAtOV0pXS8sICcuJDEnKS5zcGxpdCgnLicpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpZHggPSAhaXNOYU4oTnVtYmVyKHBhcnRzW2ldKSk7XG4gICAgICAgICAgICBjdXIgPSBjdXJbcHJvcF0gfHwgKGN1cltwcm9wXSA9IGlkeCA/IFtdIDoge30pO1xuICAgICAgICAgICAgcHJvcCA9IHBhcnRzW2ldO1xuICAgICAgICB9XG4gICAgICAgIGN1cltwcm9wXSA9IGRhdGFbcF07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRbJyddIHx8IHt9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oZGF0YTogYW55LCB3aXRoQnJhY2tldCA9IGZhbHNlKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBib29sZWFuIH0ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZ1bmN0aW9uIHJlY3Vyc2UoY3VyOiBhbnksIHByb3A6IHN0cmluZykge1xuICAgICAgICBpZiAoT2JqZWN0KGN1cikgIT09IGN1cikge1xuICAgICAgICAgICAgcmVzdWx0W3Byb3BdID0gY3VyO1xuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY3VyKSkge1xuICAgICAgICAgICAgY29uc3QgbCA9IGN1ci5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBuZXN0ZWRQcm9wZXJ0eSA9IHdpdGhCcmFja2V0ID8gYCR7cHJvcH1bJHtpfV1gIDogYCR7cHJvcH0uJHtpfWA7XG4gICAgICAgICAgICAgICAgcmVjdXJzZShjdXJbaV0sIHByb3AgPyBuZXN0ZWRQcm9wZXJ0eSA6IFN0cmluZyhpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtwcm9wXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGlzRW1wdHkgPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChjb25zdCBwIGluIGN1cikge1xuICAgICAgICAgICAgICAgIGlzRW1wdHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZWN1cnNlKGN1cltwXSwgcHJvcCA/IGAke3Byb3B9LiR7cH1gIDogcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNFbXB0eSAmJiBwcm9wICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtwcm9wXSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlY3Vyc2UoZGF0YSwgJycpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFByb3BlcnRpZXMoc3JjOiBhbnksIGRlc3Q/OiBhbnksIHNjaGVtYT86IFN0cmluZyk6IE9iamVjdCB7XG4gICAgaWYgKHNyYyA9PSBudWxsKSByZXR1cm47XG4gICAgaWYgKGRlc3QgPT0gbnVsbCkgZGVzdCA9IHt9O1xuICAgIGlmIChzcmMuY29uc3RydWN0b3IgPT0gQXJyYXkpIHtcbiAgICAgICAgZm9yICh2YXIgaVNyYyA9IDA7IGlTcmMgPCBzcmMubGVuZ3RoOyBpU3JjKyspIHtcbiAgICAgICAgICAgIGV4dHJhY3RQcm9wZXJ0aWVzKHNyY1tpU3JjXSwgZGVzdCwgc2NoZW1hKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hKSB7XG4gICAgICAgIHZhciBhclNjaGVtYSA9IHNjaGVtYS5zcGxpdCgnfCcpO1xuICAgICAgICB2YXIgc3JjTENhc2UgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgZmllbGROYW1lIGluIHNyYykge1xuICAgICAgICAgICAgc3JjTENhc2VbZmllbGROYW1lLnRvTG93ZXJDYXNlKCldID0gMTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyU2NoZW1hLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZmllbGROYW1lMiA9IGFyU2NoZW1hW2ldO1xuICAgICAgICAgICAgaWYgKHNyY0xDYXNlW2ZpZWxkTmFtZTIudG9Mb3dlckNhc2UoKV0pIGRlc3RbZmllbGROYW1lMl0gPSBzcmNbZmllbGROYW1lMl07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBkZXN0ID0gY2xvbmUoc3JjLCBmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybiBkZXN0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RQcm9wZXJ0eShzcmM6IGFueSwgcGFyYW1OYW1lOiBzdHJpbmcpOiBhbnkge1xuICAgIHZhciBwYXJhbXM7XG4gICAgcmV0dXJuIGV4dHJhY3RQcm9wZXJ0aWVzKHNyYywgcGFyYW1zLCBwYXJhbU5hbWUpW3BhcmFtTmFtZV07XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUb09iamVjdChzdHI6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFZhbCA9IHdpbmRvd1snSlNPTiddLnBhcnNlKHN0cik7XG4gICAgICAgIGlmICh0eXBlb2YgcGFyc2VkVmFsID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkVmFsO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvcGVydGllc1ByZWZpeChvYmo6IE9iamVjdCA9IHt9LCBwcmVmaXg6IHN0cmluZyB8IFJlZ0V4cCA9ICcnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikucmVkdWNlKChhY2MsIGN1cnIpID0+IChPYmplY3QuYXNzaWduKGFjYywge1tjdXJyLnJlcGxhY2UocHJlZml4LCcnKV06IG9ialtjdXJyXX0pKSx7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByZWZpeFRvUHJvcGVydGllcyhvYmo6IE9iamVjdCA9IHt9LCBwcmVmaXg6IHN0cmluZyA9ICcnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5LmluZGV4T2YocHJlZml4KSAhPT0gMCkge1xuICAgICAgICAgICAgYWNjW2Ake3ByZWZpeH0ke2tleX1gXSA9IG9ialtrZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWNjW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgfVxuICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplT2JqZWN0S2V5c1RvTG93ZXJDYXNlKG9iamVjdDogT2JqZWN0KTogT2JqZWN0IHtcbiAgICAvLyBOb3JtYWxpemUgYWxsIGtleXMgdG8gbG93ZXJjYXNlIGluIGFkZGl0aW9uIHRvIHRoZWlyIG9yaWdpbmFsIGNhc2luZy5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgb2JqZWN0W2tleS50b0xvd2VyQ2FzZSgpXSA9IG9iamVjdFtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiBvYmplY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVPYmplY3RLZXlzKG9iajogT2JqZWN0KTogT2JqZWN0IHtcbiAgICBsZXQgZGVjb2RlT2JqZWN0S2V5cyA9IHt9O1xuICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgICAgbGV0IGRlY29kZWRLZXkgPSBrZXk7XG4gICAgICAgIHdoaWxlIChkZWNvZGVkS2V5LmluZGV4T2YoJyUnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGRlY29kZWRLZXkgPSBkZWNvZGVVUklDb21wb25lbnQoZGVjb2RlZEtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVjb2RlT2JqZWN0S2V5c1tkZWNvZGVkS2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gZGVjb2RlT2JqZWN0S2V5cztcbn1cbiIsIlxudmFyIF9xID0ge307XG5leHBvcnQgZnVuY3Rpb24gX3NlcnZpY2VzU3RhdHVzKCkge1xuICAgIHZhciBzZXJ2aWNlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgc2VydmljZSBpbiBfcSkge1xuICAgICAgICB2YXIgYWN0aXZlID0gaXNBY3RpdmUoc2VydmljZSk7XG5cbiAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgc2VydmljZXNbc2VydmljZV0gPSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdhaXRpbmdGb3I6IF9xW3NlcnZpY2VdLmlkcyxcbiAgICAgICAgICAgICAgICBxdWV1ZWRDb3VudDogX3Fbc2VydmljZV0ucS5sZW5ndGgsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VydmljZXNbc2VydmljZV0gPSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VydmljZXM7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBY3RpdmUoc2VydmljZTogc3RyaW5nKSB7XG4gICAgaWYgKCFfcVtzZXJ2aWNlXSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yICh2YXIgaWQgaW4gX3Fbc2VydmljZV0uaWRzKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVsZWFzZShpZDogc3RyaW5nLCBzZXJ2aWNlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBnaWd5YS5sb2dnZXIuZGVidWcoYHJlbGVhc2luZyAke3NlcnZpY2V9IHF1ZXVlIGJ5ICR7aWR9YCk7XG4gICAgaWYgKCFfcVtzZXJ2aWNlXSkgcmV0dXJuO1xuICAgIGRlbGV0ZSBfcVtzZXJ2aWNlXS5pZHNbaWRdO1xuICAgIGlmICghaXNBY3RpdmUoc2VydmljZSkpIHtcbiAgICAgICAgdmFyIHEgPSBfcVtzZXJ2aWNlXS5xO1xuICAgICAgICBfcVtzZXJ2aWNlXS5xID0gW107XG4gICAgICAgIHdoaWxlIChxLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBvID0gcS5zcGxpY2UoMCwgMSlbMF07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG8uZnVuYy5hcHBseSh0aGlzLCBvLmFyZ3MpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT0gJ29iamVjdCcgJiYgY29uc29sZS5sb2cpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dpZ3lhOiBFeGNlcHRpb24gd2hpbGUgaW52b2tpbmcgcXVldWVkIG1ldGhvZCAoJyArIHNlcnZpY2UgKyAnOiAnICsgaWQgKyAnKScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0FjdGl2ZShzZXJ2aWNlKSkge1xuICAgICAgICAgICAgICAgIC8vcXVldWUgYmVjYW1lIGluYWN0aXZlXG4gICAgICAgICAgICAgICAgX3Fbc2VydmljZV0ucSA9IHE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaG9sZChpZDogc3RyaW5nLCBzZXJ2aWNlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBnaWd5YS5sb2dnZXIuZGVidWcoYGxvY2tpbmcgcXVldWUgJHtzZXJ2aWNlfSBieSAke2lkfWApO1xuXG4gICAgaWYgKCFfcVtzZXJ2aWNlXSkgX3Fbc2VydmljZV0gPSB7IHE6IFtdLCBpZHM6IHt9IH07XG4gICAgX3Fbc2VydmljZV0uaWRzW2lkXSA9IHRydWU7XG59XG5leHBvcnQgZnVuY3Rpb24gd2FpdEZvcihzZXJ2aWNlOiBzdHJpbmcsIGZuYzogRnVuY3Rpb24sIGFyZ3M6IGFueVtdKTogdm9pZDtcbmV4cG9ydCBmdW5jdGlvbiB3YWl0Rm9yKHNlcnZpY2U6IHN0cmluZywgZm5jOiBGdW5jdGlvbiwgYXJnczogSUFyZ3VtZW50cyk6IHZvaWQ7XG5leHBvcnQgZnVuY3Rpb24gd2FpdEZvcihzZXJ2aWNlOiBzdHJpbmcsIGZuYzogRnVuY3Rpb24sIGFyZ3M6IGFueSk6IHZvaWQge1xuICAgIGlmICghX3Fbc2VydmljZV0pIF9xW3NlcnZpY2VdID0geyBxOiBbXSwgaWRzOiB7fSB9O1xuICAgIF9xW3NlcnZpY2VdLnEucHVzaCh7IGZ1bmM6IGZuYywgYXJnczogYXJncyB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBxdWV1ZUZvckV4ZWN1dGlvbihzZXJ2aWNlOiBzdHJpbmcsIGZ1bmM6IEZ1bmN0aW9uLCBhcmdzPzogYW55W10pIHtcbiAgICBhcmdzID0gYXJncyB8fCBbXTtcbiAgICBpZiAoaXNBY3RpdmUoc2VydmljZSkpIHtcbiAgICAgICAgd2FpdEZvcihzZXJ2aWNlLCBmdW5jLCBhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIEpTT05VdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvSlNPTic7XG5pbXBvcnQgKiBhcyBxdWV1ZVV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9xdWV1ZSc7XG5pbXBvcnQge0ZsYWdTZXJ2aWNlfSBmcm9tICcuLi9TZXJ2aWNlcy9GbGFnU2VydmljZSc7XG52YXIgc2Vzc2lvblN0b3JhZ2VFbmFibGVkO1xudHJ5IHtcbiAgICBzZXNzaW9uU3RvcmFnZUVuYWJsZWQgPSBCb29sZWFuKHdpbmRvdy5zZXNzaW9uU3RvcmFnZSk7IC8vIHdoZW4gM3BjIGJsb2NrZWQsIGNocm9tZSB0aHJvd3Mgd2hlbiB0cnlpbmcgdG8gYWNjZXNzIHNlc3Npb24gc3RvcmFnZS5cbn0gY2F0Y2ggKGV4KSB7XG4gICAgc2Vzc2lvblN0b3JhZ2VFbmFibGVkID0gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0KGtleTogc3RyaW5nLCByZXNwb25zZTogT2JqZWN0KSB7XG4gICAgaWYgKCFzZXNzaW9uU3RvcmFnZUVuYWJsZWQpIHJldHVybjtcbiAgICB2YXIgb0dpZ3lhO1xuICAgIHRyeSB7XG4gICAgICAgIG9HaWd5YSA9IEpTT05VdGlscy5kZXNlcmlhbGl6ZSh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZ2lneWFDYWNoZScpKTtcblxuICAgICAgICBpZiAocmVzcG9uc2UgPT0gbnVsbCAmJiBvR2lneWFba2V5XSkge1xuICAgICAgICAgICAgZGVsZXRlIG9HaWd5YVtrZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgb0dpZ3lhW2tleV0gPSB7IHJlc3BvbnNlLCB0aW1lIH07XG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ2dpZ19vaWRjQ29udGV4dF8nKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgZ2lneWEubG9nZ2VyLnJlcG9ydCgnb2lkYyBzdG9yYWdlIGxvZ3MgLSBzZXQnLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9HaWd5YVtrZXldXG4gICAgICAgICAgICAgICAgfSwgZmFsc2UsIEZsYWdTZXJ2aWNlLmZvcmNlRXJyb3JSZXBvcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2dpZ3lhQ2FjaGUnLCBKU09OVXRpbHMuc2VyaWFsaXplKG9HaWd5YSkpO1xuICAgIH0gY2F0Y2ggKGV4KSB7fVxuXG4gICAgcXVldWVVdGlscy5yZWxlYXNlKCdjYWNoZScsICdjYWNoZV8nICsga2V5KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXQoa2V5OiBzdHJpbmcsIGNhY2hlVGltZW91dDogbnVtYmVyID0gLTEpOiBPYmplY3Qge1xuICAgIGlmICghc2Vzc2lvblN0b3JhZ2VFbmFibGVkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGlmICghcXVldWVVdGlscy5pc0FjdGl2ZSgnY2FjaGVfJyArIGtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNHaWd5YUNhY2hlID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dpZ3lhQ2FjaGUnKTtcbiAgICAgICAgICAgIGNvbnN0IG9HaWd5YSA9IEpTT05VdGlscy5kZXNlcmlhbGl6ZShzR2lneWFDYWNoZSk7XG4gICAgICAgICAgICBjb25zdCBjYWNoZWQgPSBvR2lneWFba2V5XTtcbiAgICAgICAgICAgIGlmIChjYWNoZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIGlmIChjYWNoZVRpbWVvdXQgPCAwIHx8IGNhY2hlVGltZW91dCArIGNhY2hlZC50aW1lID4gY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9jYWNoZWRcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlZC5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ2dpZ19vaWRjQ29udGV4dF8nKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIucmVwb3J0KCdvaWRjIHN0b3JhZ2UgbG9ncyAtIGdldCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9HaWd5YVtrZXldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlVGltZTogY2FjaGVkLnRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZhbHNlLCBGbGFnU2VydmljZS5mb3JjZUVycm9yUmVwb3J0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2V4cGlyZWRcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFjYWNoZWQpIHtcbiAgICAgICAgICAgICAgICAvL25vdCBjYWNoZWQgKGZpcnN0IHRpbWUpXG4gICAgICAgICAgICAgICAgcXVldWVVdGlscy5ob2xkKCdjYWNoZScsICdjYWNoZV8nICsga2V5KTsgLy9zbyB0aGF0IGZ1dHVyZSByZXF1ZXN0cyB3aWxsIHdhaXQgZm9yIHRoZSBmaXJzdCBvbmUncyByZXNwb25zZS5cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vd2FpdCBmb3IgZmlyc3QgcmVzcG9uc2VcbiAgICAgICAgICAgIHF1ZXVlVXRpbHMud2FpdEZvcignY2FjaGVfJyArIGtleSwgZ2V0LCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChleCkge31cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBzZXQoa2V5LCBudWxsKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB0cmltKHM6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHMucmVwbGFjZSgvXlxccyooXFxTKiguKlxcUyk/KVxccyokLywgJyQxJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KHM6IHN0cmluZywgLi4ucmVzdDogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBpZiAoYXJndW1lbnRzW2kgKyAxXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzID0gcy5zcGxpdCgneycgKyBpICsgJ30nKS5qb2luKGFyZ3VtZW50c1tpICsgMV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUoczogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcy5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHMuc3Vic3RyaW5nKDEpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuZHNXaXRoKHM6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcy5pbmRleE9mKHN1ZmZpeCwgcy5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLiorP149IToke30oKXxcXFtcXF1cXC9cXFxcXSkvZywgJ1xcXFwkMScpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VBbGwoc3RyOiBzdHJpbmcsIGZpbmQ6IHN0cmluZywgcmVwbGFjZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIWZpbmQpIHJldHVybiBzdHI7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKGZpbmQpLCAnZycpLCByZXBsYWNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ29tbWFTZXBhcmF0ZWRWYWx1ZXMoc3RyMTogc3RyaW5nID0gJycsIHN0cjI6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcbiAgICBjb25zdCBhcnIgPSBzdHIxLmNvbmNhdCgnLCcsIHN0cjIpLnNwbGl0KCcsJyk7XG4gICAgcmV0dXJuIGdpZ3lhLnV0aWxzLmFycmF5LmdldFVuaXF1ZVZhbHVlcyhhcnIpLmZpbHRlcih4ID0+IHgpLmpvaW4oJywnKTtcbn1cbiIsImltcG9ydCAqIGFzIG9iamVjdFV0aWxzIGZyb20gJy4vb2JqZWN0JztcblxuY2xhc3MgV2ViU0RLVG9nZ2xlcyB7XG4gICAgaGFzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5fdG9nZ2xlc1trZXldICE9ICd1bmRlZmluZWQnO1xuICAgIH1cblxuICAgIGdldDxUID0gYW55PihrZXk6IHN0cmluZyk6IFQge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG9nZ2xlc1trZXldIGFzIFQ7XG4gICAgfVxuXG4gICAgaXNPbihrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiB0aGlzLmdldChrZXkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IF90b2dnbGVzKCkge1xuICAgICAgICByZXR1cm4gb2JqZWN0VXRpbHMubWVyZ2UoW1xuICAgICAgICAgICAgdGhpcy5fZ2xvYmFsQ29uZlRvZ2dsZXMsXG4gICAgICAgICAgICB0aGlzLl93ZWJTZGtDb25maWdUb2dnbGVzXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IF9nbG9iYWxDb25mVG9nZ2xlcygpIHtcbiAgICAgICAgcmV0dXJuIGdpZ3lhLnRoaXNTY3JpcHQ/Lmdsb2JhbENvbmY/LnRvZ2dsZXMgfHwge307XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgX3dlYlNka0NvbmZpZ1RvZ2dsZXMoKSB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZXMgPSBnaWd5YS5fPy5jb25maWc/LnRvZ2dsZXMgfHwge307XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0b2dnbGVzKS5yZWR1Y2UoKG5ld1RvZ2dsZXMsIGtleSkgPT4ge1xuICAgICAgICAgICAgbmV3VG9nZ2xlc1trZXldID0gdG9nZ2xlc1trZXldID09PSAnb24nO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3VG9nZ2xlcztcbiAgICAgICAgfSwge30pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBXZWJTREtUb2dnbGVzKCk7XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNFeHBsaWNpdFRydWUodmFsOiBhbnkpOiBib29sZWFuIHtcbiAgICB2YXIgbGMgPSAoJycgKyB2YWwpLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGxjID09ICd0cnVlJyB8fCBsYyA9PSAnMSc7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNFeHBsaWNpdEZhbHNlKHZhbDogYW55KTogYm9vbGVhbiB7XG4gICAgdmFyIGxjID0gKCcnICsgdmFsKS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBsYyA9PSAnZmFsc2UnIHx8IGxjID09ICcwJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0xhdGVyVGhhbk5vdyhleHBpcmF0aW9uVGltZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGV4cGlyYXRpb25UaW1lID4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gYWxsRGVmaW5lZE9yQWxsVW5kZWZpbmVkKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBhbnlVbmRlZmluZWQgPSBhcmdzLnNvbWUoeCA9PiB0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgIGNvbnN0IGFueURlZmluZWQgPSBhcmdzLnNvbWUoeCA9PiB0eXBlb2YgeCAhPT0gJ3VuZGVmaW5lZCcpO1xuICAgIHJldHVybiAoYW55RGVmaW5lZCAmJiAhYW55VW5kZWZpbmVkKSB8fCAoIWFueURlZmluZWQgJiYgYW55VW5kZWZpbmVkKTtcbn1cbiIsImltcG9ydCB7IElQcm94eVJlc3BvbnNlLCBJUHJveHlNZXNzYWdlLCBJUHJveHlSZXF1ZXN0LCBJUHJveHlTaWduYWxSZXF1ZXN0IH0gZnJvbSAnc3JjL2NvcmUvU2VydmljZVByb3h5L2ludGVyZmFjZXMnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnc3JjL2NvcmUvU2VydmljZVByb3h5L3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIFNlcnZpY2VQcm94eSB7XG4gICAgcHJpdmF0ZSBfaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudDtcbiAgICBwcml2YXRlIF9wZW5kaW5nUmVxczogKChlOiBNZXNzYWdlRXZlbnQgJiB7IGRhdGE6IElQcm94eVJlc3BvbnNlIH0pID0+IHZvaWQpW10gPSBbXTtcbiAgICBwcml2YXRlIF9pZnJhbWVIb3N0OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIF9tdXRhdGlvbk9ic2VydmVyczogTXV0YXRpb25PYnNlcnZlcltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHVybDogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgdGltZW91dCA9IDYwMDAwLFxuICAgICAgICBwcml2YXRlIF9pZENyZWF0b3IgPSB1dGlscy5nZW5lcmF0ZUlkLFxuICAgICAgICBwcml2YXRlIF9pZnJhbWVDcmVhdG9yID0gdXRpbHMuY3JlYXRlSWZyYW1lLFxuICAgICAgICBwcml2YXRlIGdldElmcmFtZUhvc3QgPSAoKSA9PlxuICAgICAgICAgICAgbmV3IFByb21pc2U8SFRNTEVsZW1lbnQ+KHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5ib2R5KSByZXNvbHZlKGRvY3VtZW50LmJvZHkpO1xuICAgICAgICAgICAgICAgIGVsc2UgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHJlc29sdmUoZG9jdW1lbnQuYm9keSkpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgIHByaXZhdGUgX3dpbiA9IHdpbmRvdyxcbiAgICApIHt9XG5cbiAgICBwdWJsaWMgZ2V0IGlzSW5pdCgpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5faWZyYW1lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdDxUPih0aXRsZTogc3RyaW5nKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIGlmICh0aGlzLmlzSW5pdCkgcmV0dXJuIFByb21pc2UucmVqZWN0KCdwcm94eSBhbHJlYWR5IGluaXRpYWxpemVkJykgYXMgYW55O1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lmcmFtZSA9IHRoaXMuX2lmcmFtZUNyZWF0b3IodGl0bGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2lmcmFtZS5zcmMgPSB0aGlzLnVybDtcbiAgICAgICAgICAgICAgICB0aGlzLmdldElmcmFtZUhvc3QoKS50aGVuKGhvc3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pZnJhbWVIb3N0ID0gaG9zdDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faWZyYW1lSG9zdC5hcHBlbmRDaGlsZCh0aGlzLl9pZnJhbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChnaWd5YS5sb2dnZXIuaXNFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvYnNlcnZlIGlmcmFtZSByZW1vdmFsIG9ubHkgaWYgZ2lneWEubG9nZ2VyIGlzIGV4cGxpY2l0bHkgZW5hYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydE9ic2VydmluZ0lGcmFtZVJlbW92YWwoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHRoaXMuX3dpbi5zZXRUaW1lb3V0KCgpID0+IHJlamVjdCgncHJveHkgaW5pdCB0aW1lb3V0JyksIHRoaXMudGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9uSW5pdFJlc3BvbnNlID0gKGU6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVPcmlnaW4oZS5vcmlnaW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLl90cnlQYXJzZVJlc3BvbnNlKGUuZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2U/LnNpZ25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl93aW4uY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3dpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25Jbml0UmVzcG9uc2UsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzcG9uc2Uuc2lnbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdsaXN0ZW5pbmcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3dpbi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5vblJlc3BvbnNlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLnJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzdG9wJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UucmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCd1bnN1cHBvcnRlZCByZXNwb25zZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dpbi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25Jbml0UmVzcG9uc2UsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZU9yaWdpbihjaGVja2VkOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLnZhbGlkYXRlT3JpZ2luKHRoaXMuX2lmcmFtZS5zcmMsIGNoZWNrZWQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25SZXNwb25zZSA9IChlOiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgICAgLy8gYXJyb3cgZnVuY3Rpb24gdG8gcHJlc2VydmUgY29udGV4dFxuICAgICAgICBjb25zdCBtc2cgPSBnaWd5YS51dGlscy5KU09OLnBhcnNlKGUuZGF0YSkgYXMgSVByb3h5UmVzcG9uc2U7XG4gICAgICAgIGlmIChtc2cgJiYgdGhpcy5fcGVuZGluZ1JlcXNbbXNnLmlkXSAmJiB0aGlzLnZhbGlkYXRlT3JpZ2luKGUub3JpZ2luKSkge1xuICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1JlcXNbbXNnLmlkXShtc2cpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3BlbmRpbmdSZXFzW21zZy5pZF07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBwb3N0VG9JRnJhbWU8VD4ocmVxOiBJUHJveHlNZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IG9uTXNnUmVzcG9uc2UgPSB0aGlzLnJlZ2lzdGVyTWVzc2FnZTxUPihyZXEpO1xuICAgICAgICBjb25zdCBtZXNzYWdlOiBzdHJpbmcgPSB0eXBlb2YgcmVxID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHJlcSkgOiByZXE7XG4gICAgICAgIHRoaXMuX2lmcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKG1lc3NhZ2UsIHRoaXMuX2lmcmFtZS5zcmMpO1xuICAgICAgICByZXR1cm4gb25Nc2dSZXNwb25zZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZ2lzdGVyTWVzc2FnZTxUPihyZXE6IElQcm94eU1lc3NhZ2UsIHRpbWVvdXQgPSB0aGlzLnRpbWVvdXQpOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHRoaXMuX3dpbi5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoJ3Byb3h5IHJlcXVlc3QgdGltZW91dCcpO1xuICAgICAgICAgICAgfSwgdGltZW91dCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdSZXFzW3JlcS5pZF0gPSAoZTogSVByb3h5UmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl93aW4uY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgICAgICAgICAgaWYgKGUuc2lnbmFsID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlLnJlcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShlLnJlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbmRSZXF1ZXN0PFQ+KG1ldGhvZE5hbWU6IHN0cmluZywgcGFyYW1zPzogYW55W10pOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdFRvSUZyYW1lPFQ+KHtcbiAgICAgICAgICAgIGlkOiB0aGlzLl9pZENyZWF0b3IoKSxcbiAgICAgICAgICAgIG1ldGhvZE5hbWUsXG4gICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgIH0gYXMgSVByb3h5UmVxdWVzdCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN0b3A8VD4oZm9yY2VDbG9zZSA9IGZhbHNlKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIGlmICghdGhpcy5pc0luaXQpIHtcbiAgICAgICAgICAgIHRocm93ICdwcm94eSBpcyBub3QgYWN0aXZlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlcnJvcjtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5wb3N0VG9JRnJhbWU8VD4oe1xuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5faWRDcmVhdG9yKCksXG4gICAgICAgICAgICAgICAgICAgIHNpZ25hbDogJ3N0b3AnLFxuICAgICAgICAgICAgICAgIH0gYXMgSVByb3h5U2lnbmFsUmVxdWVzdCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmICghZXJyb3IgfHwgZm9yY2VDbG9zZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbXV0YXRpb25PYnNlcnZlcnMgJiYgdGhpcy5fbXV0YXRpb25PYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNjb25uZWN0IG11dGF0aW9uIG9ic2VydmVycywgaWYgYW55LlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wT2JzZXJ2aW5nSUZyYW1lUmVtb3ZhbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5vblJlc3BvbnNlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faWZyYW1lSG9zdC5yZW1vdmVDaGlsZCh0aGlzLl9pZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5faWZyYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB3cmFwV2l0aDxUPih0eXBlOiBuZXcgKCkgPT4gVCk6IFQ7XG4gICAgcHVibGljIHdyYXBXaXRoPFQ+KHR5cGU6IE9iamVjdCk6IFQ7XG4gICAgcHVibGljIHdyYXBXaXRoPFQ+KGtleXM6IHN0cmluZ1tdKTogVDtcbiAgICBwdWJsaWMgd3JhcFdpdGg8VD4odHlwZTogKG5ldyAoKSA9PiBUKSB8IE9iamVjdCB8IHN0cmluZ1tdKTogVCB7XG4gICAgICAgIGxldCBrZXlzOiBzdHJpbmdbXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSBrZXlzID0gdXRpbHMuZ2V0QWxsQ2xhc3NNZXRob2RzTmFtZXModHlwZSBhcyBhbnkpO1xuICAgICAgICBlbHNlIGlmICh0eXBlIGluc3RhbmNlb2YgQXJyYXkpIGtleXMgPSB0eXBlO1xuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIGtleXMgPSBPYmplY3Qua2V5cyh0eXBlKTtcbiAgICAgICAgLy8uY29uY2F0KGdldEFsbENsYXNzTWV0aG9kc05hbWVzKE9iamVjdC5nZXRQcm90b3R5cGVPZih0eXBlKSkpO1xuICAgICAgICBlbHNlIHRocm93ICd1bnN1cHBvcnRlZCB0eXBlIGZvciB3cmFwcGVyJztcblxuICAgICAgICByZXR1cm4gdGhpcy5wcm94eUZyb21LZXlzPFQ+KGtleXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHJveHlGcm9tS2V5czxUPihrZXlzOiBzdHJpbmdbXSk6IFQge1xuICAgICAgICBjb25zdCBwcm94eSA9IHt9O1xuICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IChwcm94eVtrZXldID0gKC4uLmFyZ3MpID0+IHRoaXMuc2VuZFJlcXVlc3Qoa2V5LCBhcmdzKSkpO1xuICAgICAgICByZXR1cm4gcHJveHkgYXMgVDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0T2JzZXJ2aW5nSUZyYW1lUmVtb3ZhbCgpIHtcbiAgICAgICAgbGV0IHRhcmdldE5vZGUgPSB0aGlzLl9pZnJhbWUgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIHdoaWxlICh0YXJnZXROb2RlLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIG9ic2VydmUgdGhlIGlmcmFtZSBhbmQgaXRzIHBhcmVudHMgKGlmcmFtZSxib2R5KVxuICAgICAgICAgICAgdGhpcy5hZGRNdXRhdGlvbk9ic2VydmVyKHRhcmdldE5vZGUpO1xuICAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IHRhcmdldE5vZGUucGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RvcE9ic2VydmluZ0lGcmFtZVJlbW92YWwoKSB7XG4gICAgICAgIHRoaXMuX211dGF0aW9uT2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgICAgICAgaWYgKG9ic2VydmVyICYmIG9ic2VydmVyLmRpc2Nvbm5lY3QpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9tdXRhdGlvbk9ic2VydmVycyA9IFtdO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkTXV0YXRpb25PYnNlcnZlcih0YXJnZXROb2RlOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBjb25zdCBtdXRhdGlvbkNhbGxiYWNrOiBNdXRhdGlvbkNhbGxiYWNrID0gbXV0YXRpb25zTGlzdCA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBtdXRhdGlvbiBvZiBtdXRhdGlvbnNMaXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT0gJ2NoaWxkTGlzdCcgJiYgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBIGNoaWxkIG5vZGUgaGFzIGJlZW4gcmVtb3ZlZC5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5yZW1vdmVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZWROb2RlID0gbXV0YXRpb24ucmVtb3ZlZE5vZGVzLml0ZW0oaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVtb3ZlZE5vZGUgPT09IHRhcmdldE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIud2FybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjIyMgR2lneWEncyBzZXJ2aWNlIHByb3h5IGhhcyBiZWVuIHVuZXhwZWN0ZWRseSBkZXRhY2hlZCBmcm9tIHRoZSBET00uIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdUaGlzIG1heSBjYXVzZSB1bmV4cGVjdGVkIGJlaGF2aW9yIGluY2x1ZGluZyBhIGNvbXBsZXRlIGxvc3Mgb2Ygc2VydmljZS4gIyMjJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcE9ic2VydmluZ0lGcmFtZVJlbW92YWwoKTsgLy8gY2FuIHN0b3Agb2JzZXJ2aW5nIGZvciBpZnJhbWUgcmVtb3ZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gc3RvcCB0aGUgbG9vcFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIENyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZSBsaW5rZWQgdG8gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiBtdXRhdGlvbnMgYXJlIG9ic2VydmVkXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25DYWxsYmFjayk7XG5cbiAgICAgICAgLy8gU3RhcnQgb2JzZXJ2aW5nIHRoZSB0aGUgdGFyZ2V0LW5vZGUncyBwYXJlbnQgZWxlbWVudCBmb3IgY29uZmlndXJlZCBtdXRhdGlvbnNcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLnBhcmVudEVsZW1lbnQsIHtcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSwgLy8gbW9uaXRvcnMgdGhlIHRhcmdldCBub2RlIGZvciB0aGUgYWRkaXRpb24gb3IgcmVtb3ZhbCBvZiBuZXcgY2hpbGQgbm9kZXNcbiAgICAgICAgICAgIHN1YnRyZWU6IGZhbHNlLCAvLyBkbyBub3QgZXh0ZW5kIG1vbml0b3JpbmcgdG8gdGhlIGVudGlyZSBzdWJ0cmVlIG9mIG5vZGVzIHJvb3RlZCBhdCB0aGUgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fbXV0YXRpb25PYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdHJ5UGFyc2VSZXNwb25zZShkYXRhU3RyOiBzdHJpbmcpOiBJUHJveHlSZXNwb25zZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhU3RyKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZ2lneWEubG9nZ2VyLndhcm4oYHJlY2VpdmVkIG1lc3NhZ2Ugd2l0aCBpbnZhbGlkIGZvcm1hdGAsIHtcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhU3RyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBnZXRQYXJlbnRVcmwgPSAod2luID0gd2luZG93LCBkb2MgPSBkb2N1bWVudCkgPT4gKHdpbi5sb2NhdGlvbiAhPSB3aW4ucGFyZW50LmxvY2F0aW9uID8gZG9jLnJlZmVycmVyIDogZG9jLmxvY2F0aW9uLmhyZWYpO1xuZXhwb3J0IGNvbnN0IGdldEJvZHlFbGVtZW50ID0gKGRvYyA9IGRvY3VtZW50KSA9PlxuICAgIG5ldyBQcm9taXNlPEhUTUxFbGVtZW50PihyZXNvbHZlID0+IHtcbiAgICAgICAgaWYgKGRvYy5ib2R5KSByZXNvbHZlKGRvYy5ib2R5KTtcbiAgICAgICAgZWxzZSBkb2MuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHJlc29sdmUoZG9jLmJvZHkpKTtcbiAgICB9KTtcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZU9yaWdpbiA9IChvcmlnaW46IHN0cmluZywgY2hlY2tlZDogc3RyaW5nKSA9PiBvcmlnaW4/LnRvTG93ZXJDYXNlKCk/LmluZGV4T2YoY2hlY2tlZD8udG9Mb3dlckNhc2UoKSkgPT09IDA7XG5leHBvcnQgY29uc3QgY3JlYXRlSWZyYW1lID0gKHRpdGxlOiBzdHJpbmcgPSAnR2lneWEgRnJhbWUnLCBkb2MgPSBkb2N1bWVudCkgPT4ge1xuICAgIGNvbnN0IGlmcmFtZSA9IGRvYy5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICBpZnJhbWUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGlmcmFtZS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICBpZnJhbWUuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBpZnJhbWUudGl0bGUgPSB0aXRsZTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgcmV0dXJuIGlmcmFtZTtcbn07XG5sZXQgX2NvdW50ZXIgPSAxO1xuZXhwb3J0IGNvbnN0IGdlbmVyYXRlSWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFN0cmluZyhfY291bnRlcisrKTtcbn07XG5mdW5jdGlvbiBpc0NsYXNzKHR5cGU6IGFueXwobmV3ICgpID0+IGFueSkpOiB0eXBlIGlzIG5ldyAoKSA9PiBhbnkge1xuICAgIHJldHVybiAhIXR5cGUucHJvdG90eXBlO1xufVxuZXhwb3J0IGNvbnN0IGdldEFsbENsYXNzTWV0aG9kc05hbWVzID0gKHR5cGU6IE9iamVjdHwobmV3ICgpID0+IGFueSkpOiBzdHJpbmdbXSA9PiB7XG4gICAgbGV0IHByb3BzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgbGV0IHByb3RvID0gaXNDbGFzcyh0eXBlKSA/IHR5cGUucHJvdG90eXBlIDogdHlwZTtcbiAgICBkbyB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvKiogaW5pdGlhbCBpbXBsZW1lbnRhdGlvbiAtIHVzaW5nIGZpbHRlciAqKi9cbiAgICAgICAgICAgIGNvbnN0IGwgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm90bylcbiAgICAgICAgICAgICAgICAvLyAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocHJvdG8pLm1hcChzID0+IHMudG9TdHJpbmcoKSkpXG4gICAgICAgICAgICAgICAgLm1hcChzID0+IHMudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAuc29ydCgpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgKHAsIGksIGFycikgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBwcm90b1twXSA9PT0gJ2Z1bmN0aW9uJyAmJiAvL29ubHkgdGhlIG1ldGhvZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgIT09ICdjb25zdHJ1Y3RvcicgJiYgLy9ub3QgdGhlIGNvbnN0cnVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAoaSA9PSAwIHx8IHAgIT09IGFycltpIC0gMV0pICYmIC8vbm90IG92ZXJyaWRpbmcgaW4gdGhpcyBwcm90b3R5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmluZGV4T2YocCkgPT09IC0xLCAvL25vdCBvdmVycmlkZGVuIGluIGEgY2hpbGRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgcHJvcHMgPSBwcm9wcy5jb25jYXQobCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8qKiBidWcgZml4IGltcGxlbWVudGF0aW9uIC0gdXNpbmcgY3VzdG9tIG91ciBvd24gZmlsdGVyIGxvZ2ljXG4gICAgICAgICAgICAgY2FzZSBvZiBBcnJheS5maWx0ZXIgcG9seWZpbGwgY2F1c2luZyBcImNhbiBub3QgcmVhZCBwcm9wZXJ0eSAnMCcgb2YgdW5kZWZpbmVkXCIgKiovXG4gICAgICAgICAgICBjb25zdCBhcnIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm90bylcbiAgICAgICAgICAgICAgICAvLyAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocHJvdG8pLm1hcChzID0+IHMudG9TdHJpbmcoKSkpXG4gICAgICAgICAgICAgICAgLm1hcChzID0+IHMudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAuc29ydCgpO1xuXG4gICAgICAgICAgICBjb25zdCBsID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBhcnJbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBwcm90b1twXSA9PT0gJ2Z1bmN0aW9uJyAmJiAvL29ubHkgdGhlIG1ldGhvZHNcbiAgICAgICAgICAgICAgICAgICAgcCAhPT0gJ2NvbnN0cnVjdG9yJyAmJiAvL25vdCB0aGUgY29uc3RydWN0b3JcbiAgICAgICAgICAgICAgICAgICAgKGkgPT0gMCB8fCBwICE9PSBhcnJbaSAtIDFdKSAmJiAvL25vdCBvdmVycmlkaW5nIGluIHRoaXMgcHJvdG90eXBlXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmluZGV4T2YocCkgPT09IC0xXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbm90IG92ZXJyaWRkZW4gaW4gYSBjaGlsZFxuXG4gICAgICAgICAgICAgICAgICAgIGwucHVzaChwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9wcyA9IHByb3BzLmNvbmNhdChsKTtcbiAgICAgICAgfVxuICAgIH0gd2hpbGUgKFxuICAgICAgICAocHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pKSAmJiAvL3dhbGstdXAgdGhlIHByb3RvdHlwZSBjaGFpblxuICAgICAgICBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pIC8vbm90IHRoZSB0aGUgT2JqZWN0IHByb3RvdHlwZSBtZXRob2RzIChoYXNPd25Qcm9wZXJ0eSwgZXRjLi4uKVxuICAgICk7XG5cbiAgICByZXR1cm4gcHJvcHM7XG59O1xuIiwiZXhwb3J0IGNsYXNzIEdsb2JhbFByb3ZpZGVyIHtcbiAgICBwdWJsaWMgZG9jdW1lbnRMb2NhdGlvbigpOiBMb2NhdGlvbiB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5sb2NhdGlvbjtcbiAgICB9XG4gICAgcHVibGljIHBvc3RNZXNzYWdlVG9QYXJlbnQobWVzc2FnZTogYW55LCB0YXJnZXRPcmlnaW46IHN0cmluZywgdHJhbnNmZXI/OiBUcmFuc2ZlcmFibGVbXSk6IHZvaWQge1xuICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKG1lc3NhZ2UsIHRhcmdldE9yaWdpbiwgdHJhbnNmZXIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEdsb2JhbFByb3ZpZGVyKClcbiIsImltcG9ydCB7XG4gICAgR2V0R3JvdXBUb2tlblJlc3BvbnNlLFxuICAgIENhbmFyeUluZGljYXRpb25SZXNwb25zZSxcbiAgICBHZXRMb2dpblRva2VuRXhwUmVzcG9uc2UsXG4gICAgRnJhbWVTZXRHcm91cFRva2VuUGFyYW1zLFxuICAgIEZyYW1lTG9nb3V0UGFyYW1zLFxuICAgIEZyYW1lUmVtb3ZlVG9rZW5QYXJhbXMsXG4gICAgRnJhbWVHZXRHcm91cFRva2VuUGFyYW1zLFxuICAgIEZyYW1lU2V0TG9naW5Ub2tlbkV4cFBhcmFtcyxcbiAgICBGcmFtZUdldExvZ2luVG9rZW5FeHBQYXJhbXMsXG4gICAgRnJhbWVDaGVja1Rva2VuUmVuZXdQYXJhbXMsXG4gICAgRnJhbWVTeW5jQ2FuYXJ5SW5kaWNhdGlvbixcbiAgICBDYW5hcnlWZXJzaW9uLFxuICAgIEZyYW1lU2V0R3JvdXBDb250ZXh0LFxuICAgIElTc29TZXJ2aWNlLFxuICAgIFNldExvZ2luVG9rZW5FeHBSZXNwb25zZSxcbiAgICBHZXRHcm91cEFwaURvbWFpblJlc3BvbnNlLFxuICAgIEZyYW1lU2V0R3JvdXBBcGlEb21haW4sXG4gICAgRnJhbWVHZXRHcm91cEFwaURvbWFpbixcbiAgICBTREtMb2dvdXRSZXNwb25zZVxufSBmcm9tICdzcmMvZmlkbS9HaWd5YS5KUy5TU08vYXBwL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtHU0Vycm9yc30gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0dTRXJyb3JzJztcbmltcG9ydCB7U3NvVXRpbHN9IGZyb20gXCJzcmMvZmlkbS9HaWd5YS5KUy5TU08vYXBwL3Nzb1V0aWxzXCI7XG5pbXBvcnQge0lTc29Db25maWd9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2ludGVyZmFjZXMvSVdlYlNka0NvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBTc28gaW1wbGVtZW50cyBJU3NvU2VydmljZSB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfc3RvcmFnZUtleTogc3RyaW5nO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NhbmFyeUtleTogc3RyaW5nO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NhbmFyeVZlcktleTogc3RyaW5nO1xuICAgIHByaXZhdGUgX2N1cnJlbnRGcmFnbWVudDogc3RyaW5nO1xuICAgIHByaXZhdGUgX21vZGU6IHN0cmluZztcbiAgICBwcml2YXRlIF9yZXF1ZXN0RG9tYWluOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbGlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfY2FsbGJhY2tJRDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXBpS2V5OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfc2l0ZUFwaUtleTogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3Nzb1NlZ21lbnQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9zc29Db25maWc6IElTc29Db25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkRG9tYWluczogW10sXG4gICAgICAgICAgICAgICAgICAgIGxvZ291dFVSTHM6IHt9LFxuICAgICAgICAgICAgICAgICAgICBjYW5hcnlDb29raWVzTmFtZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2FuYXJ5OiAnZ2lnX2lzQ2FuYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb246ICdnaWdfY2FuYXJ5X3ZlcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfdXRpbHMgPSBuZXcgU3NvVXRpbHMoKSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9zdG9yYWdlID0gX3V0aWxzLmdldENvb2tpZXNTdG9yYWdlKCkpIHtcblxuICAgICAgICB0aGlzLl9zdG9yYWdlS2V5ID0gdGhpcy5fY3JlYXRlS2V5KCdnaWdfbG9naW5Ub2tlbicpO1xuICAgICAgICBjb25zdCBjYW5hcnlDb29raWVzTmFtZXMgPSB0aGlzLl9zc29Db25maWcuY2FuYXJ5Q29va2llc05hbWVzO1xuICAgICAgICBpZiAodHlwZW9mIGNhbmFyeUNvb2tpZXNOYW1lcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbmFyeUtleSA9IHRoaXMuX2NyZWF0ZUtleShjYW5hcnlDb29raWVzTmFtZXMuaXNDYW5hcnkpO1xuICAgICAgICAgICAgdGhpcy5fY2FuYXJ5VmVyS2V5ID0gdGhpcy5fY3JlYXRlS2V5KGNhbmFyeUNvb2tpZXNOYW1lcy52ZXJzaW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KCkge1xuICAgICAgICAvLyBTdGFydCByZXBlYXRlZGx5IGNoZWNraW5nIGZyYWdtZW50IGZvciBhIG5ldyBjYWxsLlxuICAgICAgICB0aGlzLl9jaGVja0ZyYWdtZW50KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY2hlY2tGcmFnbWVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZnJhZ21lbnQ6IHN0cmluZyA9IHRoaXMuX3V0aWxzLmdldEZyYWdtZW50KCk7XG4gICAgICAgIGlmIChmcmFnbWVudCAmJiBmcmFnbWVudCAhPT0gdGhpcy5fY3VycmVudEZyYWdtZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50RnJhZ21lbnQgPSBmcmFnbWVudDtcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0KHRoaXMuX3V0aWxzLmRlc2VyaWFsaXplKGZyYWdtZW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQodGhpcy5fY2hlY2tGcmFnbWVudCwgMjAwKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBhc3luYyBfc3RhcnQoXG4gICAgICAgIHBhcmFtczpcbiAgICAgICAgICAgIHwgRnJhbWVTZXRHcm91cFRva2VuUGFyYW1zXG4gICAgICAgICAgICB8IEZyYW1lTG9nb3V0UGFyYW1zXG4gICAgICAgICAgICB8IEZyYW1lUmVtb3ZlVG9rZW5QYXJhbXNcbiAgICAgICAgICAgIHwgRnJhbWVHZXRHcm91cFRva2VuUGFyYW1zXG4gICAgICAgICAgICB8IEZyYW1lU2V0TG9naW5Ub2tlbkV4cFBhcmFtc1xuICAgICAgICAgICAgfCBGcmFtZUdldExvZ2luVG9rZW5FeHBQYXJhbXNcbiAgICAgICAgICAgIHwgRnJhbWVDaGVja1Rva2VuUmVuZXdQYXJhbXNcbiAgICAgICAgICAgIHwgRnJhbWVTeW5jQ2FuYXJ5SW5kaWNhdGlvblxuICAgICAgICAgICAgfCBGcmFtZVNldEdyb3VwQ29udGV4dFxuICAgICAgICAgICAgfCBGcmFtZVNldEdyb3VwQXBpRG9tYWluXG4gICAgICAgICAgICB8IEZyYW1lR2V0R3JvdXBBcGlEb21haW5cbiAgICApIHtcbiAgICAgICAgdGhpcy5fbW9kZSA9IHBhcmFtcy5tO1xuICAgICAgICB0aGlzLl9yZXF1ZXN0RG9tYWluID0gcGFyYW1zLmQ7IC8vIFJlY2VpdmluZyBkb21haW4uXG4gICAgICAgIHRoaXMuX2xpZCA9IHBhcmFtcy5saWQ7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrSUQgPSBwYXJhbXMuY2FsbGJhY2tJRDtcbiAgICAgICAgdGhpcy5fc2l0ZUFwaUtleSA9IHBhcmFtcy5zQVBJS2V5O1xuXG4gICAgICAgIC8vIEFib3J0IGlmIG5vdCBpbiBpRnJhbWVcbiAgICAgICAgaWYgKCF3aW5kb3cucGFyZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgZ2lneWEgc3NvOiBpbnZhbGlkIHVzZWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLl91dGlscy5pc1ZhbGlkRG9tYWluKHRoaXMuX3Nzb0NvbmZpZy52YWxpZERvbWFpbnMsIHRoaXMuX3JlcXVlc3REb21haW4pKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgZ2lneWEgc3NvOiAke3RoaXMuX3JlcXVlc3REb21haW59IGlzIG5vdCBpbiB2YWxpZCBkb21haW46ICR7dGhpcy5fc3NvQ29uZmlnLnZhbGlkRG9tYWlucy5qb2luKCcsJyl9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzcG9uc2U6IGFueTtcbiAgICAgICAgc3dpdGNoIChwYXJhbXMubSkge1xuICAgICAgICAgICAgY2FzZSAnbG9nb3V0JzpcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMubG9nb3V0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3JlbW92ZVRva2VuJzpcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJlbW92ZVRva2VuKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2dldFRva2VuJzpcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMuZ2V0VG9rZW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnc2V0VG9rZW4nOlxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0VG9rZW4ocGFyYW1zLmx0LCBTdHJpbmcocGFyYW1zLmV4cGlyYXRpb24pLCBwYXJhbXMuZ2x0ZXhwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnc2V0R3JvdXBDb250ZXh0JzpcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNldEdyb3VwQ29udGV4dChwYXJhbXMuZ3JvdXBDb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnc2V0TG9naW5Ub2tlbkV4cCc6XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNldFRva2VuRXhwaXJhdGlvbihwYXJhbXMubG9naW5Ub2tlbkV4cCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2dldExvZ2luVG9rZW5FeHAnOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgdGhpcy5nZXRUb2tlbkV4cGlyYXRpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnY2hlY2tUb2tlblJlbmV3JzpcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMuY2hlY2tUb2tlblJlbmV3KHBhcmFtcy5sb2dpblRva2VuKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnc3luY0NhbmFyeUluZGljYXRpb24nOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zeW5jQ2FuYXJ5SW5kaWNhdGlvbihwYXJhbXMuaXNDYW5hcnksIHBhcmFtcy5jYW5hcnlWZXJzaW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnc2V0R3JvdXBBcGlEb21haW4nOlxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0R3JvdXBBcGlEb21haW4ocGFyYW1zLmRvbWFpbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2dldEdyb3VwQXBpRG9tYWluJzpcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMuZ2V0R3JvdXBBcGlEb21haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JDb2RlOiBHU0Vycm9ycy5JTlZBTElEX0FQSV9NRVRIT0QsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3V0aWxzLnNlbmRNZXNzYWdlKHJlc3BvbnNlLCB0aGlzLl9jYWxsYmFja0lELCB0aGlzLl9yZXF1ZXN0RG9tYWluKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0R3JvdXBBcGlEb21haW4oKTogUHJvbWlzZTxHZXRHcm91cEFwaURvbWFpblJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IGRvbWFpbiA9IHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbShgYXBpRG9tYWluXyR7dGhpcy5fYXBpS2V5fWApXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlcnJvckNvZGU6IEdTRXJyb3JzLk9LLFxuICAgICAgICAgICAgZG9tYWluXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHNldEdyb3VwQXBpRG9tYWluKGRvbWFpbjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRoaXMuX3N0b3JhZ2Uuc2V0SXRlbShgYXBpRG9tYWluXyR7dGhpcy5fYXBpS2V5fWAsIGRvbWFpbik7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGxvZ291dCgpOiBQcm9taXNlPFNES0xvZ291dFJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IGxvZ291dFVSTHMgPSB0aGlzLl9nZXRMb2dvdXRVUkxzKCk7XG4gICAgICAgIGF3YWl0IHRoaXMucmVtb3ZlVG9rZW4oKTtcbiAgICAgICAgdGhpcy5fc3RvcmFnZS5yZW1vdmVJdGVtKGAke3RoaXMuX3N0b3JhZ2VLZXl9X3Zpc2l0ZWRgKTtcbiAgICAgICAgcmV0dXJuIHsgbG9nb3V0VVJMcyB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyByZW1vdmVUb2tlbigpIHtcbiAgICAgICAgbGV0IGxvZ2luVG9rZW4gPSB0aGlzLl9zdG9yYWdlLmdldEl0ZW0odGhpcy5fc3RvcmFnZUtleSk7XG4gICAgICAgIGlmIChsb2dpblRva2VuKSB7XG4gICAgICAgICAgICB0aGlzLl9tYXJrUmV2b2tlZExvZ2luVG9rZW4obG9naW5Ub2tlbik7XG4gICAgICAgICAgICB0aGlzLl9zdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5fc3RvcmFnZUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RvcmFnZS5yZW1vdmVJdGVtKGAke3RoaXMuX3N0b3JhZ2VLZXl9X2V4cGApO1xuICAgICAgICB0aGlzLl9zdG9yYWdlLnJlbW92ZUl0ZW0oYCR7dGhpcy5fc3RvcmFnZUtleX1fZ2x0ZXhwYCk7XG4gICAgICAgIHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbShgJHt0aGlzLl9zdG9yYWdlS2V5fV9zZXNzaW9uYCk7XG4gICAgICAgIHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbShgJHt0aGlzLl9zdG9yYWdlS2V5fV9jb250ZXh0YCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldFRva2VuKCk6IFByb21pc2U8R2V0R3JvdXBUb2tlblJlc3BvbnNlPiB7XG4gICAgICAgIGxldCBlcnJvckNvZGUgPSAwO1xuICAgICAgICBsZXQgbHQgPSB0aGlzLl9zdG9yYWdlLmdldEl0ZW0odGhpcy5fc3RvcmFnZUtleSk7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2VFeHAgPSB0aGlzLl9zdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5fc3RvcmFnZUtleX1fZXhwYCk7XG4gICAgICAgIGxldCBleHA7XG4gICAgICAgIGlmIChzdG9yYWdlRXhwID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZXhwID0gRGF0ZS5ub3coKSAtIDEwMDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBleHAgPSBOdW1iZXIoc3RvcmFnZUV4cCk7XG4gICAgICAgICAgICBjb25zdCB0d29ZZWFyRnJvbU5vdyA9IERhdGUubm93KCkgKyAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDM2NSAqIDIpO1xuICAgICAgICAgICAgaWYgKGV4cCA+IHR3b1llYXJGcm9tTm93KSB7XG4gICAgICAgICAgICAgICAgZXhwID0gRGF0ZS5ub3coKSAtIDEwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ2x0ZXhwID0gdGhpcy5fc3RvcmFnZS5nZXRJdGVtKGAke3RoaXMuX3N0b3JhZ2VLZXl9X2dsdGV4cGApO1xuICAgICAgICBjb25zdCBncm91cENvbnRleHQgPSB0aGlzLl9zdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5fc3RvcmFnZUtleX1fY29udGV4dGApO1xuICAgICAgICBjb25zdCBpblNlc3Npb24gPSBnbHRleHAgfHwgdGhpcy5fc3RvcmFnZS5nZXRJdGVtKGAke3RoaXMuX3N0b3JhZ2VLZXl9X3Nlc3Npb25gKSA9PT0gJzEnO1xuICAgICAgICBpZiAoIWlzTmFOKGV4cCkgJiYgKChleHAgPT09IDAgJiYgIWluU2Vzc2lvbikgfHwgKGV4cCA+IDAgJiYgbmV3IERhdGUoKS5nZXRUaW1lKCkgPiBleHApKSkge1xuICAgICAgICAgICAgLy8gZXhwaXJlZCFcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVtb3ZlVG9rZW4oKTtcbiAgICAgICAgICAgIGx0ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbHQpIHtcbiAgICAgICAgICAgIC8vIG5vIHVzZXJcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZXJyb3JDb2RlOiBHU0Vycm9ycy5VTkFVVEhPUklaRURfVVNFUixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tYXJrU2l0ZVZpc2l0ZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBHZXRHcm91cFRva2VuUmVzcG9uc2UgPSB7XG4gICAgICAgICAgICBlcnJvckNvZGU6IGVycm9yQ29kZSxcbiAgICAgICAgICAgIGxvZ2luX3Rva2VuOiBsdCxcbiAgICAgICAgICAgIGV4cGlyZXNfaW46IGV4cCA9PT0gMCA/IDAgOiBNYXRoLnJvdW5kKChleHAgLSBuZXcgRGF0ZSgpLmdldFRpbWUoKSkgLyAxMDAwKSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZihncm91cENvbnRleHQpe1xuICAgICAgICAgICAgcmVzcG9uc2UuZ3JvdXBDb250ZXh0ID0gZ3JvdXBDb250ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4cCA9PT0gMCAmJiBnbHRleHApIHtcbiAgICAgICAgICAgIHJlc3BvbnNlLmdsdGV4cCA9IGdsdGV4cDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHNldFRva2VuKGx0OiBzdHJpbmcsIGV4cGlyYXRpb24/OiBzdHJpbmcgfCBudW1iZXIsIGdsdGV4cD86IHN0cmluZykge1xuICAgICAgICBsdCA9IGx0LnNwbGl0KCd8JylbMF07XG4gICAgICAgIGNvbnN0IG9sZFRva2VuID0gdGhpcy5fc3RvcmFnZS5nZXRJdGVtKHRoaXMuX3N0b3JhZ2VLZXkpPy5zcGxpdCgnfCcpWzBdO1xuICAgICAgICBpZiAobHQgIT09IG9sZFRva2VuKSB7XG4gICAgICAgICAgICB0aGlzLl9tYXJrUmV2b2tlZExvZ2luVG9rZW4ob2xkVG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGx0KSB7XG4gICAgICAgICAgICB0aGlzLl9zdG9yYWdlLnNldEl0ZW0odGhpcy5fc3RvcmFnZUtleSwgbHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChleHBpcmF0aW9uKSB7XG4gICAgICAgICAgICBsZXQgZXhwaXJlc0luID0gdHlwZW9mIGV4cGlyYXRpb24gPT09ICdzdHJpbmcnICYmIGV4cGlyYXRpb24gPyBOdW1iZXIoZXhwaXJhdGlvbikgOiBleHBpcmF0aW9uO1xuXG4gICAgICAgICAgICBpZiAoZXhwaXJlc0luID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gU2Vzc2lvbiBjb29raWUgb3IgZHluYW1pYyBzZXNzaW9uIGNvb2tpZS5cbiAgICAgICAgICAgICAgICAvLyBFaXRoZXIgd2F5LCBmbGFnIHRoZSBleHBpcmF0aW9uIGFzIDAuXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvbiA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIG5vdyB3aGVuIHRoZSBjb29raWUgc2hvdWxkIGV4cGlyZS5cbiAgICAgICAgICAgICAgICBsZXQgZXhwaXJlc0luTXM6IG51bWJlcjtcbiAgICAgICAgICAgICAgICBpZiAoIWV4cGlyZXNJbiB8fCBleHBpcmVzSW4gPT09IC0yKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZXNJbk1zID0gMTAwMCAqIDYwICogNjAgKiAyNCAqIDM2NTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleHBpcmVzSW5NcyA9IE51bWJlcihleHBpcmVzSW4pICogMTAwMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IGV4cGlyZXMgaW4gbWlsbGlzZWNvbmRzIHRvIGFuIGEgdGltZXN0YW1wIChhbHNvIG1pbGxpc2Vjb25kcykuXG4gICAgICAgICAgICAgICAgZXhwaXJlc0luID0gRGF0ZS5ub3coKSArIGV4cGlyZXNJbk1zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fc3RvcmFnZS5zZXRJdGVtKGAke3RoaXMuX3N0b3JhZ2VLZXl9X2V4cGAsIGAke2V4cGlyZXNJbn1gKTtcbiAgICAgICAgICAgIGlmIChleHBpcmF0aW9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RvcmFnZS5zZXRJdGVtKGAke3RoaXMuX3N0b3JhZ2VLZXl9X3Nlc3Npb25gLCAnMScsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChnbHRleHAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRUb2tlbkV4cGlyYXRpb24oZ2x0ZXhwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsdCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fbWFya1NpdGVWaXNpdGVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2V0R3JvdXBDb250ZXh0KGdyb3VwQ29udGV4dDogYW55KSB7XG4gICAgICAgIHRoaXMuX3N0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLl9zdG9yYWdlS2V5fV9jb250ZXh0YCwgSlNPTi5zdHJpbmdpZnkoZ3JvdXBDb250ZXh0KSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHNldFRva2VuRXhwaXJhdGlvbihnbHRleHA6IHN0cmluZyk6IFByb21pc2U8U2V0TG9naW5Ub2tlbkV4cFJlc3BvbnNlPiB7XG4gICAgICAgIGlmICghdGhpcy5fdXRpbHMuaXNWYWxpZEdsdEV4cChnbHRleHApKSB7XG4gICAgICAgICAgICB0aGlzLl9zdG9yYWdlLnJlbW92ZUl0ZW0oYCR7dGhpcy5fc3RvcmFnZUtleX1fZ2x0ZXhwYCk7XG4gICAgICAgICAgICBnbHRleHAgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2x0ZXhwID0gdGhpcy5fdXRpbHMuZ2V0TWF4R2x0RXhwKGdsdGV4cCwgKGF3YWl0IHRoaXMuZ2V0VG9rZW5FeHBpcmF0aW9uKCkpLmdsdGV4cCk7XG4gICAgICAgICAgICB0aGlzLl9zdG9yYWdlLnNldEl0ZW0oYCR7dGhpcy5fc3RvcmFnZUtleX1fZ2x0ZXhwYCwgZ2x0ZXhwKTtcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbShgJHt0aGlzLl9zdG9yYWdlS2V5fV9leHBgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlcnJvckNvZGU6IEdTRXJyb3JzLk9LLFxuICAgICAgICAgICAgZ2x0ZXhwLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRUb2tlbkV4cGlyYXRpb24oKTogUHJvbWlzZTxHZXRMb2dpblRva2VuRXhwUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgbHQgPSB0aGlzLl9zdG9yYWdlLmdldEl0ZW0odGhpcy5fc3RvcmFnZUtleSk7XG4gICAgICAgIGlmICghbHQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZXJyb3JDb2RlOiBHU0Vycm9ycy5VTkFVVEhPUklaRURfVVNFUixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXJyb3JDb2RlOiBHU0Vycm9ycy5PSyxcbiAgICAgICAgICAgIGdsdGV4cDogdGhpcy5fc3RvcmFnZS5nZXRJdGVtKGAke3RoaXMuX3N0b3JhZ2VLZXl9X2dsdGV4cGApLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjaGVja1Rva2VuUmVuZXcobG9naW5Ub2tlbjogc3RyaW5nKTogUHJvbWlzZTxHZXRHcm91cFRva2VuUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBUb2tlbiA9IGF3YWl0IHRoaXMuZ2V0VG9rZW4oKTtcbiAgICAgICAgY29uc3QgaW52YWxpZFRva2VucyA9IHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLl9zdG9yYWdlS2V5fV9yZXZva2VkX3Rva2Vuc2ApIHx8ICcnO1xuICAgICAgICBjb25zdCBpc0ludmFsaWQgPSBpbnZhbGlkVG9rZW5zLmluZGV4T2YobG9naW5Ub2tlbikgPj0gMDtcbiAgICAgICAgaWYgKCFpc0ludmFsaWQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0VG9rZW4obG9naW5Ub2tlbik7XG4gICAgICAgICAgICByZXR1cm4ge2Vycm9yQ29kZTogR1NFcnJvcnMuT0t9O1xuICAgICAgICB9IGVsc2UgaWYgKGdyb3VwVG9rZW4uZXJyb3JDb2RlID09PSBHU0Vycm9ycy5PSyAmJiBpbnZhbGlkVG9rZW5zLmluZGV4T2YoZ3JvdXBUb2tlbi5sb2dpbl90b2tlbikgPCAwKSB7XG4gICAgICAgICAgICAvLyBqdXN0IGNoYW5naW5nIHRoZSBlcnJvciBjb2RlIC0gYnV0IHJldHVybmluZyB0aGUgc2FtZSBzZXNzaW9uIGluZm8gb2YgdGhlIGdyb3VwXG4gICAgICAgICAgICBncm91cFRva2VuLmVycm9yQ29kZSA9IEdTRXJyb3JzLlRPS0VOX0hBU19SRU5FV0VEO1xuICAgICAgICAgICAgcmV0dXJuIGdyb3VwVG9rZW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4ge2Vycm9yQ29kZTogR1NFcnJvcnMuSU5WQUxJRF9UT0tFTn07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3luY0NhbmFyeUluZGljYXRpb24oaXNDYW5hcnk6IHN0cmluZywgdmVyc2lvblNpZ25hdHVyZTogc3RyaW5nKTogUHJvbWlzZTxDYW5hcnlJbmRpY2F0aW9uUmVzcG9uc2U+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYW5hcnlLZXkgfHwgIXRoaXMuX2NhbmFyeVZlcktleSkge1xuICAgICAgICAgICAgcmV0dXJuIHtlcnJvckNvZGU6IEdTRXJyb3JzLklOVkFMSURfRU5WSVJPTk1FTlRfQ09ORklHfSBhcyBDYW5hcnlJbmRpY2F0aW9uUmVzcG9uc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBTU09Jc0NhbmFyeSA9IHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9jYW5hcnlLZXkpO1xuICAgICAgICBjb25zdCBTU09WZXJzaW9uU2lnbmF0dXJlID0gdGhpcy5fc3RvcmFnZS5nZXRJdGVtKHRoaXMuX2NhbmFyeVZlcktleSk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IENhbmFyeUluZGljYXRpb25SZXNwb25zZSA9IHtcbiAgICAgICAgICAgIGVycm9yQ29kZTogR1NFcnJvcnMuT0ssXG4gICAgICAgICAgICBpc0NhbmFyeSxcbiAgICAgICAgICAgIGNhbmFyeVZlcnNpb246IHZlcnNpb25TaWduYXR1cmUsXG4gICAgICAgIH07XG4gICAgICAgIGlmICghdGhpcy5fdXRpbHMudmFsaWRhdGlvbnMoKS5hbGxEZWZpbmVkT3JBbGxVbmRlZmluZWQoU1NPSXNDYW5hcnksIFNTT1ZlcnNpb25TaWduYXR1cmUpKSB7XG4gICAgICAgICAgICAvLyBub3QgbGVnYWxcbiAgICAgICAgICAgIHJlc3BvbnNlLmVycm9yQ29kZSA9IEdTRXJyb3JzLklOVkFMSURfUEFSQU1FVEVSX1ZBTFVFO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl91dGlscy52YWxpZGF0aW9ucygpLmFsbERlZmluZWRPckFsbFVuZGVmaW5lZChpc0NhbmFyeSwgdmVyc2lvblNpZ25hdHVyZSkpIHtcbiAgICAgICAgICAgIC8vIG5vdCBsZWdhbFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlcnJvckNvZGU6IEdTRXJyb3JzLklOVkFMSURfUEFSQU1FVEVSX1ZBTFVFLFxuICAgICAgICAgICAgICAgIGlzQ2FuYXJ5OiBTU09Jc0NhbmFyeSxcbiAgICAgICAgICAgICAgICBjYW5hcnlWZXJzaW9uOiBTU09WZXJzaW9uU2lnbmF0dXJlLFxuICAgICAgICAgICAgfSBhcyBDYW5hcnlJbmRpY2F0aW9uUmVzcG9uc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaXRlQ2FuYXJ5VmVyc2lvbiA9IHRoaXMuX3BhcnNlQ2FuYXJ5VmVyc2lvblNpZ25hdHVyZSh2ZXJzaW9uU2lnbmF0dXJlKTtcbiAgICAgICAgY29uc3QgU1NPQ2FuYXJ5VmVyc2lvbiA9IHRoaXMuX3BhcnNlQ2FuYXJ5VmVyc2lvblNpZ25hdHVyZShTU09WZXJzaW9uU2lnbmF0dXJlKTtcblxuICAgICAgICBpZiAoc2l0ZUNhbmFyeVZlcnNpb24udGltZXN0YW1wID4gU1NPQ2FuYXJ5VmVyc2lvbi50aW1lc3RhbXApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9jYW5hcnlLZXksIGlzQ2FuYXJ5KTtcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9jYW5hcnlWZXJLZXksIHZlcnNpb25TaWduYXR1cmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzcG9uc2UuaXNDYW5hcnkgPSBTU09Jc0NhbmFyeTtcbiAgICAgICAgICAgIHJlc3BvbnNlLmNhbmFyeVZlcnNpb24gPSBTU09WZXJzaW9uU2lnbmF0dXJlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX21hcmtTaXRlVmlzaXRlZCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdmlzaXRlZFN0b3JhZ2VLZXkgPSBgJHt0aGlzLl9zdG9yYWdlS2V5fV92aXNpdGVkYDtcbiAgICAgICAgbGV0IHZpc2l0ZWQgPSB0aGlzLl9zdG9yYWdlLmdldEl0ZW0odmlzaXRlZFN0b3JhZ2VLZXkpIHx8ICcnO1xuICAgICAgICBpZiAodmlzaXRlZC5pbmRleE9mKHRoaXMuX3NpdGVBcGlLZXkpID09PSAtMSkge1xuICAgICAgICAgICAgdmlzaXRlZCArPSAnLCcgKyB0aGlzLl9zaXRlQXBpS2V5O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0b3JhZ2Uuc2V0SXRlbSh2aXNpdGVkU3RvcmFnZUtleSwgdmlzaXRlZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbWFya1Jldm9rZWRMb2dpblRva2VuKGxvZ2luVG9rZW46IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAoIWxvZ2luVG9rZW4pIHJldHVybjtcbiAgICAgICAgY29uc3QgaW52YWxpZFRva2Vuc1N0b3JhZ2VLZXkgPSBgJHt0aGlzLl9zdG9yYWdlS2V5fV9yZXZva2VkX3Rva2Vuc2A7XG4gICAgICAgIGxldCBpbnZhbGlkVG9rZW5zID0gdGhpcy5fc3RvcmFnZS5nZXRJdGVtKGludmFsaWRUb2tlbnNTdG9yYWdlS2V5KSB8fCAnJztcbiAgICAgICAgbGV0IGFyckludmFsaWRUb2tlbnMgPSBpbnZhbGlkVG9rZW5zLnNwbGl0KCcsJyk7XG4gICAgICAgIGlmIChhcnJJbnZhbGlkVG9rZW5zLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIC8vZGVsZXRlIG9uZSBvbGQgcmV2b2tlZCB0b2tlblxuICAgICAgICAgICAgYXJySW52YWxpZFRva2Vucy5zcGxpY2UoMSwgMSk7IC8vIGZpcnN0IGVsZW1lbnQgaXMgYWx3YXlzIGVtcHR5XG4gICAgICAgIH1cbiAgICAgICAgaW52YWxpZFRva2VucyA9IGFyckludmFsaWRUb2tlbnMuam9pbignLCcpO1xuICAgICAgICBpZiAoaW52YWxpZFRva2Vucy5pbmRleE9mKGxvZ2luVG9rZW4pIDwgMCkge1xuICAgICAgICAgICAgaW52YWxpZFRva2VucyArPSAnLCcgKyBsb2dpblRva2VuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0b3JhZ2Uuc2V0SXRlbShpbnZhbGlkVG9rZW5zU3RvcmFnZUtleSwgaW52YWxpZFRva2Vucyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0TG9nb3V0VVJMcygpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB2aXNpdGVkID0gdGhpcy5fc3RvcmFnZS5nZXRJdGVtKGAke3RoaXMuX3N0b3JhZ2VLZXl9X3Zpc2l0ZWRgKTtcbiAgICAgICAgaWYgKCF2aXNpdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXJMb2dvdXRVUkxzID0gW107XG4gICAgICAgIGZvciAoY29uc3Qgc2l0ZUtleSBpbiB0aGlzLl9zc29Db25maWcubG9nb3V0VVJMcykge1xuICAgICAgICAgICAgaWYgKHZpc2l0ZWQuaW5kZXhPZignLCcgKyBzaXRlS2V5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBhckxvZ291dFVSTHMucHVzaCh0aGlzLl9zc29Db25maWcubG9nb3V0VVJMc1tzaXRlS2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyTG9nb3V0VVJMcy5qb2luKCcsJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfY3JlYXRlS2V5KG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHtuYW1lfV8ke3RoaXMuX2FwaUtleX0ke3RoaXMuX3Nzb1NlZ21lbnQgPyBgXyR7dGhpcy5fc3NvU2VnbWVudH1gIDogJyd9YDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9wYXJzZUNhbmFyeVZlcnNpb25TaWduYXR1cmUoY2FuYXJ5VmVyc2lvblNpZzogc3RyaW5nKTogQ2FuYXJ5VmVyc2lvbiB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHREYXRhID0ge2J1aWxkOiAwLCBwcm9iYWJpbGl0eTogMCwgdGltZXN0YW1wOiAtMX0gYXMgQ2FuYXJ5VmVyc2lvbjtcbiAgICAgICAgaWYgKCFjYW5hcnlWZXJzaW9uU2lnKSByZXR1cm4gZGVmYXVsdERhdGE7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gY2FuYXJ5VmVyc2lvblNpZy5zcGxpdCgnLScpO1xuICAgICAgICBpZiAocGFydHMubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHREYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBidWlsZDogTnVtYmVyKHBhcnRzWzBdKSxcbiAgICAgICAgICAgIHByb2JhYmlsaXR5OiBOdW1iZXIocGFydHNbMV0pLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBOdW1iZXIocGFydHNbMl0pLFxuICAgICAgICB9IGFzIENhbmFyeVZlcnNpb247XG4gICAgfVxufVxuIiwiaW1wb3J0IHtVcml9IGZyb20gXCJzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvVXJpXCI7XG5pbXBvcnQgKiBhcyB2YWxpZGF0aW9uVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3ZhbGlkYXRpb24nO1xuaW1wb3J0IEdsb2JhbFByb3ZpZGVyIGZyb20gXCIuL2dsb2JhbFByb3ZpZGVyXCI7XG5pbXBvcnQge0Nvb2tpZVN0b3JhZ2VBZGFwdGVyLCBpbml0aWFsaXplQWRhcHRlcn0gZnJvbSBcInNyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7ZGVzZXJpYWxpemV9IGZyb20gXCJzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMva2V5VmFsdWVcIjtcbmltcG9ydCB7Z2V0TWF4IGFzIGdldE1heEdsdEV4cCwgaXNWYWxpZCBhcyBpc1ZhbGlkR2x0RXhwfSBmcm9tIFwic3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2dsdGV4cFwiO1xuaW1wb3J0IHtVUkxEZWNvZGVSZWN1cnNpdmV9IGZyb20gXCJzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvVVJMXCI7XG5cbmNvbnN0IGRlZmF1bHRWYWxpZERvbWFpbnMgPSBbJ2dpZ3lhLWFwaS5jb20nLCAnZ2lneWEtYXBpLmNuJywgJ2dpZ3lhLmNvbScsICdteS5naWd5YS1leHQuY29tJywgJ2xvY2FsaG9zdCddO1xuXG5leHBvcnQgY2xhc3MgU3NvVXRpbHMge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZ2xvYmFsID0gR2xvYmFsUHJvdmlkZXIsIHByaXZhdGUgX2RlZmF1bHRWYWxpZERvbWFpbnMgPSBkZWZhdWx0VmFsaWREb21haW5zKSB7fVxuXG4gICAgZ2V0UGFnZVVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2xvYmFsLmRvY3VtZW50TG9jYXRpb24oKS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1ZhbGlkRG9tYWluKHZhbGlkRG9tYWluczogc3RyaW5nW10sIGNhbmRpZGF0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGRvbWFpbiA9IFVyaS5wYXJzZShjYW5kaWRhdGUpLmRvbWFpbjtcbiAgICAgICAgY29uc3QgYXJWYWxpZERvbWFpbnMgPSB2YWxpZERvbWFpbnMuY29uY2F0KHRoaXMuX2RlZmF1bHRWYWxpZERvbWFpbnMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyVmFsaWREb21haW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZERvbWFpbiA9IGFyVmFsaWREb21haW5zW2ldLnJlcGxhY2UoJyonLCAnJykuc3BsaXQoJzonKVswXTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4T2ZWYWxpZERvbWFpbiA9IGRvbWFpbi5pbmRleE9mKHZhbGlkRG9tYWluKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBpbmRleE9mVmFsaWREb21haW4gPj0gMCAmJlxuICAgICAgICAgICAgICAgIGluZGV4T2ZWYWxpZERvbWFpbiA9PT0gZG9tYWluLmxlbmd0aCAtIHZhbGlkRG9tYWluLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgIChpbmRleE9mVmFsaWREb21haW4gPT09IDAgfHwgZG9tYWluLmNoYXJBdChpbmRleE9mVmFsaWREb21haW4gLSAxKSA9PT0gJy4nIHx8IGRvbWFpbi5jaGFyQXQoaW5kZXhPZlZhbGlkRG9tYWluIC0gMSkgPT09ICcvJylcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VuZE1lc3NhZ2UocmVzOiBPYmplY3QsIGNhbGxiYWNrSUQ6IHN0cmluZywgcmVxdWVzdERvbWFpbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGxldCBzdHJNZXNzYWdlID0gJyc7XG4gICAgICAgIGZvciAoY29uc3QgcCBpbiByZXMpIHtcbiAgICAgICAgICAgIGlmIChyZXNbcF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0ck1lc3NhZ2UgKz0gZXNjYXBlKHAgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocmVzW3BdKSArICcmJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZ2xvYmFsLnBvc3RNZXNzYWdlVG9QYXJlbnQoY2FsbGJhY2tJRCArICc9JyArIHN0ck1lc3NhZ2UsIHJlcXVlc3REb21haW4pO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1ZhbGlkR2x0RXhwKGdsdEV4cDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBpc1ZhbGlkR2x0RXhwKGdsdEV4cCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE1heEdsdEV4cChnbHRFeHAxOiBzdHJpbmcsIGdsdEV4cDI6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gZ2V0TWF4R2x0RXhwKGdsdEV4cDEsIGdsdEV4cDIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWNvZGVVcmwodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBVUkxEZWNvZGVSZWN1cnNpdmUodmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXNlcmlhbGl6ZSh2YWx1ZTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgcmV0dXJuIGRlc2VyaWFsaXplKHZhbHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29va2llc1N0b3JhZ2UoKSB7XG4gICAgICAgIHJldHVybiBpbml0aWFsaXplQWRhcHRlcihDb29raWVTdG9yYWdlQWRhcHRlcik7XG4gICAgfVxuXG4gICAgcHVibGljIHZhbGlkYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGlvblV0aWxzO1xuICAgIH1cblxuICAgIHB1YmxpYyBVcmlGYWN0b3J5KHVybDogc3RyaW5nLCBpc0Fic29sdXRlID0gdHJ1ZSk6IFVyaSB7XG4gICAgICAgIHJldHVybiBuZXcgVXJpKHVybCwgaXNBYnNvbHV0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEZyYWdtZW50KCkge1xuICAgICAgICBjb25zdCBwYWdlVVJMID0gdGhpcy5nZXRQYWdlVXJsKCk7XG5cbiAgICAgICAgaWYgKHBhZ2VVUkwuaW5kZXhPZignIycpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhZ2VVUkwuc3BsaXQoJyMnKVsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
