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
    (__webpack_require__.s = './src/fidm/Gigya.Js.SamlProxy/app/index.ts')
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

    /***/ './src/fidm/Gigya.Js.SamlProxy/app/bootstrap.ts':
      /*!******************************************************!*\
  !*** ./src/fidm/Gigya.Js.SamlProxy/app/bootstrap.ts ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var parseUrl_1 = __webpack_require__(
          /*! src/fidm/Gigya.Js.SamlProxy/app/parseUrl */ './src/fidm/Gigya.Js.SamlProxy/app/parseUrl.ts'
        );
        var configuration_1 = __webpack_require__(
          /*! src/fidm/Gigya.Js.SamlProxy/app/configuration */ './src/fidm/Gigya.Js.SamlProxy/app/configuration.ts'
        );
        var boot_1 = __webpack_require__(
          /*! src/utils/Gigya.Js.Boot/app/boot */ './src/utils/Gigya.Js.Boot/app/boot.ts'
        );
        //** This is intentional! we want to package gigya.boot within the gigyaSaml.proxy . **
        function bootstrap(done) {
          var action = parseUrl_1.parseUrl(location.search);
          var unparsedConfig = configuration_1.findConfiguration();
          boot_1.ensureJsSdkLoaded(
            unparsedConfig.apiKey,
            function () {
              var configuration =
                configuration_1.parseConfiguration(unparsedConfig);
              changeLogoutBehaviour();
              done(action, configuration);
            },
            true,
            true
          );
        }
        exports.bootstrap = bootstrap;
        function changeLogoutBehaviour() {
          // change socializeLogout not to logout before the server response, and to always go to the server
          window.gigya._.logoutBehaviour.logoutBeforeServerResponse = false;
          window.gigya._.logoutBehaviour.alwaysSendLogoutToServer = true;
        }

        /***/
      },

    /***/ './src/fidm/Gigya.Js.SamlProxy/app/configuration.ts':
      /*!**********************************************************!*\
  !*** ./src/fidm/Gigya.Js.SamlProxy/app/configuration.ts ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var utils_1 = __webpack_require__(
          /*! src/fidm/Gigya.Js.SamlProxy/app/utils */ './src/fidm/Gigya.Js.SamlProxy/app/utils.ts'
        );
        function findScriptElement() {
          var scripts = document.getElementsByTagName('script');
          var scriptElement;
          for (var i = scripts.length - 1; i >= 0; i--) {
            var script = scripts[i];
            var src = script.src.toLowerCase();
            if (src != '') {
              if (
                (src.indexOf('//cdnd*.gigya.com') > -1 ||
                  src.indexOf('//cdnsd*.gigya.com') > -1 ||
                  src.indexOf('?apikey=') > -1) &&
                src.indexOf('gigya.saml.js') > -1
              ) {
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
          if (!scriptElement) throw new Error('failed to find script element');
          var apiKey = utils_1.urlParams(scriptElement.src)['apiKey'];
          var configJson = scriptElement.innerHTML.replace(/^\s+|\s+$/g, '');
          if (!configJson) throw new Error('No object params was found.');
          if (!apiKey) throw new Error('failed to find api key');
          return {
            apiKey: apiKey,
            configJson: configJson,
          };
        }
        exports.findConfiguration = findConfiguration;
        function parseConfiguration(unparsedConfig) {
          var scriptConf = utils_1.deserializeJSON(unparsedConfig.configJson);
          if (!scriptConf) throw new Error('The params object is not valid.');
          var configurationObj = utils_1.objectMerge(
            {
              apiKey: unparsedConfig.apiKey,
            },
            scriptConf
          );
          if (!configurationObj.loginURL)
            throw new Error("The 'loginURL' param is not valid.");
          return configurationObj;
        }
        exports.parseConfiguration = parseConfiguration;

        /***/
      },

    /***/ './src/fidm/Gigya.Js.SamlProxy/app/index.ts':
      /*!**************************************************!*\
  !*** ./src/fidm/Gigya.Js.SamlProxy/app/index.ts ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var bootstrap_1 = __webpack_require__(
          /*! src/fidm/Gigya.Js.SamlProxy/app/bootstrap */ './src/fidm/Gigya.Js.SamlProxy/app/bootstrap.ts'
        );
        exports.bootstrap = bootstrap_1.bootstrap;
        var configuration_1 = __webpack_require__(
          /*! src/fidm/Gigya.Js.SamlProxy/app/configuration */ './src/fidm/Gigya.Js.SamlProxy/app/configuration.ts'
        );
        exports.findConfiguration = configuration_1.findConfiguration;
        exports.parseConfiguration = configuration_1.parseConfiguration;
        var login_1 = __webpack_require__(
          /*! src/fidm/Gigya.Js.SamlProxy/app/login */ './src/fidm/Gigya.Js.SamlProxy/app/login.ts'
        );
        exports.processAfterLogin = login_1.processAfterLogin;
        exports.processForceLogin = login_1.processForceLogin;
        exports.processInitSSO = login_1.processInitSSO;
        exports.processLogin = login_1.processLogin;
        exports.processPassiveLogin = login_1.processPassiveLogin;
        var logout_1 = __webpack_require__(
          /*! src/fidm/Gigya.Js.SamlProxy/app/logout */ './src/fidm/Gigya.Js.SamlProxy/app/logout.ts'
        );
        exports.processLogout = logout_1.processLogout;
        var parseUrl_1 = __webpack_require__(
          /*! src/fidm/Gigya.Js.SamlProxy/app/parseUrl */ './src/fidm/Gigya.Js.SamlProxy/app/parseUrl.ts'
        );
        exports.parseUrl = parseUrl_1.parseUrl;
        exports.ProxyMode = parseUrl_1.ProxyMode;
        var samlProxy_1 = __webpack_require__(
          /*! src/fidm/Gigya.Js.SamlProxy/app/samlProxy */ './src/fidm/Gigya.Js.SamlProxy/app/samlProxy.ts'
        );
        exports.processRequest = samlProxy_1.processRequest;
        var utils_1 = __webpack_require__(
          /*! ./utils */ './src/fidm/Gigya.Js.SamlProxy/app/utils.ts'
        );
        exports.deserializeJSON = utils_1.deserializeJSON;
        exports.getLoginToken = utils_1.getLoginToken;
        exports.isLoggedIn = utils_1.isLoggedIn;
        exports.loadContext = utils_1.loadContext;
        exports.logout = utils_1.logout;
        exports.objectMerge = utils_1.objectMerge;
        exports.openIframe = utils_1.openIframe;
        exports.redirectToSamlEndPont = utils_1.redirectToSamlEndPont;
        exports.reportError = utils_1.reportError;
        exports.saveContext = utils_1.saveContext;
        exports.setUrlParams = utils_1.setUrlParams;
        exports.templateFill = utils_1.templateFill;
        exports.urlParams = utils_1.urlParams;
        if (!window['gigya']) {
          window['gigya'] = {};
        }
        if (!window['gigyaSaml']) {
          window['gigyaSaml'] = {};
        }
        var gigyaSaml = window['gigyaSaml'];
        if (!gigyaSaml.proxy) {
          gigyaSaml.proxy = {
            bootstrap: bootstrap_1.bootstrap,
            findConfiguration: configuration_1.findConfiguration,
            parseConfiguration: configuration_1.parseConfiguration,
            processLogin: login_1.processLogin,
            processForceLogin: login_1.processForceLogin,
            processAfterLogin: login_1.processAfterLogin,
            processPassiveLogin: login_1.processPassiveLogin,
            processInitSSO: login_1.processInitSSO,
            processLogout: logout_1.processLogout,
            ProxyMode: parseUrl_1.ProxyMode,
            parseUrl: parseUrl_1.parseUrl,
            processRequest: samlProxy_1.processRequest,
          };
        }
        if (!gigyaSaml.proxy.utils) {
          gigyaSaml.proxy.utils = {
            urlParams: utils_1.urlParams,
            openIframe: utils_1.openIframe,
            reportError: utils_1.reportError,
            redirectToSamlEndPont: utils_1.redirectToSamlEndPont,
            setUrlParams: utils_1.setUrlParams,
            getLoginToken: utils_1.getLoginToken,
            saveContext: utils_1.saveContext,
            loadContext: utils_1.loadContext,
            templateFill: utils_1.templateFill,
            deserializeJSON: utils_1.deserializeJSON,
            objectMerge: utils_1.objectMerge,
            isLoggedIn: utils_1.isLoggedIn,
            logout: utils_1.logout,
          };
        }
        gigyaSaml.proxy.bootstrap(samlProxy_1.processRequest);
        var proxy = gigyaSaml.proxy;
        exports.proxy = proxy;

        /***/
      },

    /***/ './src/fidm/Gigya.Js.SamlProxy/app/login.ts':
      /*!**************************************************!*\
  !*** ./src/fidm/Gigya.Js.SamlProxy/app/login.ts ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var utils_1 = __webpack_require__(
          /*! src/fidm/Gigya.Js.SamlProxy/app/utils */ './src/fidm/Gigya.Js.SamlProxy/app/utils.ts'
        );
        function processLogin(action, configuration) {
          utils_1.isLoggedIn(function (loggedIn) {
            var _a;
            if (loggedIn) {
              var loginTokenExp =
                (_a = action.params['loginTokenExp']) !== null && _a !== void 0
                  ? _a
                  : utils_1.getLoginTokenExpiration(configuration.apiKey);
              utils_1.redirectToSamlEndPont(
                'idp/sso/continue',
                {
                  samlContext: action.samlContext,
                  loginToken: utils_1.getLoginToken(configuration.apiKey),
                  loginTokenExp: loginTokenExp,
                },
                configuration.apiKey
              );
            }
            // not logged in
            else processForceLogin(action, configuration);
          }, configuration.apiKey);
        }
        exports.processLogin = processLogin;
        function processForceLogin(action, configuration) {
          return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [
                    4 /*yield*/,
                    window.gigya._.apiAdapters.web.tokenStore.remove(),
                  ];
                case 1:
                  _a.sent();
                  // save samlContext to retrieve it if necessary
                  utils_1.saveContext(
                    configuration.apiKey,
                    action,
                    function () {
                      // Parameters to loginURL might be supported in the future
                      //var backTo = utils.setUrlParams(location.toString(), { mode: ProxyMode[ProxyMode._afterLogin] });
                      utils_1.redirect(configuration.loginURL, action, {
                        samlContext: action.samlContext,
                      });
                    }
                  );
                  return [2 /*return*/];
              }
            });
          });
        }
        exports.processForceLogin = processForceLogin;
        function processAfterLogin(action, configuration) {
          utils_1.loadContext(configuration.apiKey, function (savedContext) {
            action.samlContext = action.samlContext || savedContext.samlContext;
            action.spName = action.spName || savedContext.spName;
            processPassiveLogin(action, configuration);
          });
        }
        exports.processAfterLogin = processAfterLogin;
        function processPassiveLogin(action, configuration) {
          utils_1.isLoggedIn(function (loggedIn) {
            var _a;
            var loginToken = loggedIn
              ? utils_1.getLoginToken(configuration.apiKey)
              : null;
            var loginTokenExp =
              (_a = action.params['loginTokenExp']) !== null && _a !== void 0
                ? _a
                : utils_1.getLoginTokenExpiration(configuration.apiKey);
            utils_1.redirectToSamlEndPont(
              'idp/sso/continue',
              {
                samlContext: action.samlContext,
                loginToken: loginToken,
                loginTokenExp: loginTokenExp,
              },
              configuration.apiKey
            );
          }, configuration.apiKey);
        }
        exports.processPassiveLogin = processPassiveLogin;
        function processInitSSO(action, configuration) {
          utils_1.isLoggedIn(function (loggedIn) {
            var _a;
            var loginToken = loggedIn
              ? utils_1.getLoginToken(configuration.apiKey)
              : null;
            var loginTokenExp =
              (_a = action.params['loginTokenExp']) !== null && _a !== void 0
                ? _a
                : utils_1.getLoginTokenExpiration(configuration.apiKey);
            utils_1.redirectToSamlEndPont(
              'idp/sso/init',
              {
                spName: action.params['spName'],
                redirectURL: action.params['redirectURL'],
                loginToken: loginToken,
                loginTokenExp: loginTokenExp,
              },
              configuration.apiKey
            );
          }, configuration.apiKey);
        }
        exports.processInitSSO = processInitSSO;
        function processCancel(action, configuration) {
          action.params && action.params.statusCode !== undefined
            ? encodeURIComponent(action.params.statusCode)
            : null;
          utils_1.redirectToSamlEndPont(
            'idp/sso/cancel',
            {
              samlContext: action.samlContext,
              statusCode:
                action.params && action.params.statusCode !== undefined
                  ? encodeURIComponent(action.params.statusCode)
                  : null,
              cancelCode:
                action.params && action.params.cancelCode != undefined
                  ? encodeURIComponent(action.params.cancelCode)
                  : null,
            },
            configuration.apiKey
          );
        }
        exports.processCancel = processCancel;

        /***/
      },

    /***/ './src/fidm/Gigya.Js.SamlProxy/app/logout.ts':
      /*!***************************************************!*\
  !*** ./src/fidm/Gigya.Js.SamlProxy/app/logout.ts ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var utils_1 = __webpack_require__(
          /*! src/fidm/Gigya.Js.SamlProxy/app/utils */ './src/fidm/Gigya.Js.SamlProxy/app/utils.ts'
        );
        var GSErrors_1 = __webpack_require__(
          /*! ../../../core/Gigya.Js/app/GSErrors */ './src/core/Gigya.Js/app/GSErrors.ts'
        );
        function processLogout(action, configuration) {
          // call socialize.logout that will handle the rest
          // get response from server
          // if necesary invalidate client session, and call logoutUrl
          // call every SP session that is needed
          // when it is finished, redirect to finalize endpoint
          var onLogoutResponse = function (response) {
            var singleSPTimeout = 4000; // 4s
            if (response.errorCode !== GSErrors_1.GSErrors.OK)
              return utils_1.reportError(
                {
                  errorCode: response.errorCode,
                  errorMessage: response.errorMessage,
                  response: response,
                  action: action,
                  configuration: configuration,
                },
                action
              );
            if (response.samlContext) {
              var callFinalize = function () {
                return utils_1.redirectToSamlEndPont(
                  'idp/slo/finalize',
                  {
                    samlContext: response.samlContext,
                  },
                  configuration.apiKey
                );
              };
              if (configuration.logoutURL)
                utils_1.openIframe(
                  configuration.logoutURL,
                  callFinalize,
                  singleSPTimeout
                );
              else callFinalize();
            }
          };
          utils_1.logout(action.samlContext, function (response) {
            if (
              response.errorCode === GSErrors_1.GSErrors.OK &&
              response.originalResponse &&
              response.originalResponse.errorCode ===
                GSErrors_1.GSErrors.UNAUTHORIZED_USER
            ) {
              // try logout again - this time without the login token
              return utils_1.logout(action.samlContext, onLogoutResponse);
            }
            return onLogoutResponse(response);
          });
        }
        exports.processLogout = processLogout;

        /***/
      },

    /***/ './src/fidm/Gigya.Js.SamlProxy/app/parseUrl.ts':
      /*!*****************************************************!*\
  !*** ./src/fidm/Gigya.Js.SamlProxy/app/parseUrl.ts ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var utils_1 = __webpack_require__(
          /*! src/fidm/Gigya.Js.SamlProxy/app/utils */ './src/fidm/Gigya.Js.SamlProxy/app/utils.ts'
        );
        var ProxyMode;
        (function (ProxyMode) {
          ProxyMode[(ProxyMode['_undefined'] = 0)] = '_undefined';
          // SSO
          ProxyMode[(ProxyMode['login'] = 1)] = 'login';
          ProxyMode[(ProxyMode['forceLogin'] = 2)] = 'forceLogin';
          ProxyMode[(ProxyMode['passiveLogin'] = 3)] = 'passiveLogin';
          ProxyMode[(ProxyMode['afterLogin'] = 4)] = 'afterLogin';
          ProxyMode[(ProxyMode['initSSO'] = 5)] = 'initSSO';
          ProxyMode[(ProxyMode['cancel'] = 6)] = 'cancel';
          // SLO
          ProxyMode[(ProxyMode['logout'] = 7)] = 'logout';
          // internal
          ProxyMode[(ProxyMode['_debug'] = 8)] = '_debug';
        })((ProxyMode = exports.ProxyMode || (exports.ProxyMode = {})));
        function parseUrl(query) {
          var params = utils_1.urlParams(query);
          var mode = ProxyMode[params['mode']];
          var samlContext = params['samlContext'];
          var spName = params['spName'];
          // _afterLogin can come without samlContext or mode
          return {
            mode: mode,
            samlContext: samlContext,
            params: params,
            spName: spName,
          };
        }
        exports.parseUrl = parseUrl;

        /***/
      },

    /***/ './src/fidm/Gigya.Js.SamlProxy/app/samlProxy.ts':
      /*!******************************************************!*\
  !*** ./src/fidm/Gigya.Js.SamlProxy/app/samlProxy.ts ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var parseUrl_1 = __webpack_require__(
          /*! src/fidm/Gigya.Js.SamlProxy/app/parseUrl */ './src/fidm/Gigya.Js.SamlProxy/app/parseUrl.ts'
        );
        var login_1 = __webpack_require__(
          /*! src/fidm/Gigya.Js.SamlProxy/app/login */ './src/fidm/Gigya.Js.SamlProxy/app/login.ts'
        );
        var logout_1 = __webpack_require__(
          /*! src/fidm/Gigya.Js.SamlProxy/app/logout */ './src/fidm/Gigya.Js.SamlProxy/app/logout.ts'
        );
        function processRequest(action, configuration) {
          action.mode = action.mode || parseUrl_1.ProxyMode.afterLogin;
          switch (action.mode) {
            // SSO - sp initiated login
            case parseUrl_1.ProxyMode.login:
              login_1.processLogin(action, configuration);
              break;
            case parseUrl_1.ProxyMode.forceLogin:
              login_1.processForceLogin(action, configuration);
              break;
            case parseUrl_1.ProxyMode.afterLogin: // handling responses from loginUrl after login performed
              login_1.processAfterLogin(action, configuration);
              break;
            case parseUrl_1.ProxyMode.passiveLogin:
              login_1.processPassiveLogin(action, configuration);
              break;
            case parseUrl_1.ProxyMode.cancel:
              login_1.processCancel(action, configuration);
              break;
            // SSO - idp initiated login
            case parseUrl_1.ProxyMode.initSSO: // idp initiated login
              login_1.processInitSSO(action, configuration);
              break;
            // SLO - sp initiated logout
            case parseUrl_1.ProxyMode.logout:
              logout_1.processLogout(action, configuration);
              break;
            default:
              throw new Error('Unimplemented mode');
          }
        }
        exports.processRequest = processRequest;

        /***/
      },

    /***/ './src/fidm/Gigya.Js.SamlProxy/app/utils.ts':
      /*!**************************************************!*\
  !*** ./src/fidm/Gigya.Js.SamlProxy/app/utils.ts ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        function urlParams(query) {
          if (query.indexOf('?') > -1)
            query = query.substring(query.indexOf('?') + 1);
          var queryParts = query.split(/&/);
          var params = {};
          for (var i = 0; i < queryParts.length; ++i) {
            var param = queryParts[i];
            if (param.indexOf('=') === -1) continue;
            var paramParts = param.split('=');
            if (paramParts.length !== 2) continue;
            params[paramParts[0]] = decodeURIComponent(paramParts[1]);
          }
          return params;
        }
        exports.urlParams = urlParams;
        function openIframe(url, done, timeout) {
          var handlerCalled = false;
          var loadHandler = function () {
            if (!handlerCalled) {
              handlerCalled = true;
              done();
            }
          };
          window.gigya.utils.script.triggerResource(
            url,
            loadHandler,
            window.gigya.utils.script.ResourceTypes.iframe,
            false
          );
          if (timeout) setTimeout(loadHandler, timeout);
        }
        exports.openIframe = openIframe;
        function reportError(errorInfo, context) {
          // TODO redirect an internal endpoint so that the server will have a chance to deal with errors in its flow correctly
          if (window.gigya.samlConfig.errorPageURL) {
            return redirect(window.gigya.samlConfig.errorPageURL, context, {
              error: errorInfo,
            });
          }
        }
        exports.reportError = reportError;
        function redirectToSamlEndPont(endPoint, params, apiKey) {
          return tslib_1.__awaiter(this, void 0, void 0, function () {
            var domain, url, gmidTicket;
            return tslib_1.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  domain = window.gigya._.getApiDomain('fidm');
                  url =
                    'https://' +
                    domain +
                    '/saml/v2.0/' +
                    apiKey +
                    '/' +
                    endPoint;
                  return [
                    4 /*yield*/,
                    window.gigya._.apiAdapter.getGmidTicket(),
                  ];
                case 1:
                  gmidTicket = _a.sent();
                  if (gmidTicket) params.gmidTicket = gmidTicket;
                  redirect(
                    url,
                    {
                      domain: domain,
                      apiKey: apiKey,
                      endPoint: endPoint,
                    },
                    params
                  );
                  return [2 /*return*/];
              }
            });
          });
        }
        exports.redirectToSamlEndPont = redirectToSamlEndPont;
        function setUrlParams(url, params) {
          return window.gigya.utils.URL.addParamsToURL(url, params);
        }
        exports.setUrlParams = setUrlParams;
        function redirect(url, urlValues, params) {
          // redirect to any given url
          url = templateFill(url, urlValues);
          url = setUrlParams(url, params);
          location.href = url;
          //window.open(url, '_self'); // This breaks postMessage messaging - replace the window.opener
        }
        exports.redirect = redirect;
        function getLoginToken(apiKey) {
          // returns current login token directly from the web adapter
          return window.gigya._.apiAdapters.web.tokenStore.get(apiKey);
        }
        exports.getLoginToken = getLoginToken;
        function getLoginTokenExpiration(apiKey) {
          // returns current login token directly from the web adapter
          return window.gigya._.apiAdapters.web.tokenStore.getGltexpCookie(
            apiKey
          );
        }
        exports.getLoginTokenExpiration = getLoginTokenExpiration;
        function contextKey(apiKey) {
          return 'gig_samlContext_' + apiKey;
        }
        var sessionStorageTimeout = 10 * 60 * 1000;
        function saveContext(apiKey, context, done) {
          // save context for next retrival, if not returned from loginUrl
          var key = contextKey(apiKey);
          var savedContexts =
            window.gigya.utils.sessionCache.get(key, sessionStorageTimeout) ||
            [];
          savedContexts.push(context);
          window.gigya.utils.sessionCache.set(key, savedContexts);
          done();
        }
        exports.saveContext = saveContext;
        function loadContext(apiKey, callback) {
          // load context if was not provided in url
          var key = contextKey(apiKey);
          var savedContexts =
            window.gigya.utils.sessionCache.get(key, sessionStorageTimeout) ||
            [];
          var lastContext = savedContexts.pop() || {};
          window.gigya.utils.sessionCache.set(key, savedContexts);
          callback(lastContext);
        }
        exports.loadContext = loadContext;
        function templateFill(template, params) {
          return window.gigya.utils.templates.fill(template, params);
        }
        exports.templateFill = templateFill;
        function deserializeJSON(json) {
          return window.gigya.utils.JSON.deserialize(json, '');
        }
        exports.deserializeJSON = deserializeJSON;
        function objectMerge() {
          var objects = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
          }
          return window.gigya.utils.object.merge(objects);
        }
        exports.objectMerge = objectMerge;
        function isLoggedIn(callback, apiKey) {
          if (hasSession(apiKey)) {
            window.gigya.accounts.getAccountInfo({
              callback: function (response) {
                callback(
                  (response === null || response === void 0
                    ? void 0
                    : response.errorCode) === 0
                );
              },
            });
          } else callback(false);
        }
        exports.isLoggedIn = isLoggedIn;
        function logout(samlContext, callback) {
          window.gigya.socialize.logout({
            callback: callback,
            samlContext: samlContext,
          });
        }
        exports.logout = logout;
        function hasSession(apiKey) {
          var userKey = getLoginToken(apiKey);
          return Boolean(userKey);
        }

        /***/
      },

    /***/ './src/utils/Gigya.Js.Boot/app/boot.ts':
      /*!*********************************************!*\
  !*** ./src/utils/Gigya.Js.Boot/app/boot.ts ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.debug = false;
        function getGigyaScriptElement(fileNames) {
          var scripts = document.getElementsByTagName('script');
          var scriptElement;
          var gigyaCdnRegex = /\/\/cdn(s)?\.(ru1\.)?gigya.com/;
          for (var i = scripts.length - 1; i >= 0; i--) {
            var script = scripts[i];
            var src = script.src.toLowerCase();
            if (src !== '') {
              if (gigyaCdnRegex.test(src) || src.indexOf('?apikey=') > -1) {
                var isFileNameExistInSrc =
                  fileNames.length === 0 ||
                  fileNames.some(function (fileName) {
                    return src.indexOf(fileName) > -1;
                  });
                if (isFileNameExistInSrc) {
                  scriptElement = script;
                  break;
                }
              }
            }
          }
          return scriptElement;
        }
        exports.getGigyaScriptElement = getGigyaScriptElement;
        function ensureJsSdkLoaded(
          apiKey,
          done,
          async,
          useExistingGigyaDomain,
          useXMLHTTPRequest,
          useRelativePath
        ) {
          if (async === void 0) {
            async = true;
          }
          if (useExistingGigyaDomain === void 0) {
            useExistingGigyaDomain = false;
          }
          if (useXMLHTTPRequest === void 0) {
            useXMLHTTPRequest = false;
          }
          if (useRelativePath === void 0) {
            useRelativePath = false;
          }
          if (window.gigya['isGigya']) {
            // we have gigya on page
            if (exports.debug) console.debug('$G gigya-jsSdk already loaded.');
            if (!window.gigya['isReady']) {
              // bootstrap in process - wait for bootstrap to finish
              waitForGigyaServiceReady(done);
            } else {
              // finished bootstrap - gigya service is ready
              done();
            }
          } else {
            // gigya is not on page
            loadGigyaJS(
              apiKey,
              async,
              useExistingGigyaDomain,
              useXMLHTTPRequest,
              useRelativePath
            );
            waitForGigyaServiceReady(done);
          }
        }
        exports.ensureJsSdkLoaded = ensureJsSdkLoaded;
        function loadGigyaJS(
          apiKey,
          async,
          useExistingGigyaDomain,
          useXMLHTTPRequest,
          useRelativePath
        ) {
          window.gigya['isGigya'] = true; /// important! so won't discard current modules.
          var server;
          if (useExistingGigyaDomain) {
            var a = document.createElement('a');
            a.href = getGigyaScriptElement([]).src;
            server = a.protocol + '//' + a.host;
          } else {
            server = 'https://cdns.gigya.com';
          }
          var src =
            (useRelativePath ? '' : server) + '/js/gigya.js?apiKey=' + apiKey;
          var scriptElement = document.createElement('script');
          scriptElement.type = 'text/javascript'; // application/ecmascript is not supported by IE8
          if (!useXMLHTTPRequest) {
            scriptElement.src = src;
            scriptElement.async = async;
          } else {
            /// Note that cross-domain XMLHttpRequest requires the server to return the header: "Access-Control-Allow-Origin: <origin> | *"
            var xhrObj = new XMLHttpRequest();
            xhrObj.open('GET', src, async);
            xhrObj.send('');
            scriptElement.text = xhrObj.responseText;
          }
          if (exports.debug) console.debug('$G loading gigya-jsSdk...');
          document.getElementsByTagName('head')[0].appendChild(scriptElement);
        }
        function waitForGigyaServiceReady(done) {
          // set socialize.js load handler
          var prevHandler = null;
          if (typeof window['onGigyaServiceReady'] !== 'undefined')
            prevHandler = window['onGigyaServiceReady'];
          window['onGigyaServiceReady'] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            if (prevHandler) prevHandler.apply(this, args);
            if (exports.debug) console.debug('$G gigya-jsSdk loaded!');
            done();
          };
        }
        function ensureBasePluginLoaded(
          apiKey,
          done,
          async,
          useXMLHTTPRequest
        ) {
          if (async === void 0) {
            async = true;
          }
          if (useXMLHTTPRequest === void 0) {
            useXMLHTTPRequest = false;
          }
          ensureJsSdkLoaded(
            apiKey,
            function () {
              if (
                window.gigya['_']['plugins']['BasePlugin'] &&
                !window.gigya['_']['plugins']['BasePlugin']['isMock']
              ) {
                done();
              } else {
                window.gigya['_']['loadBasePlugin']({ onLoad: done });
              }
            },
            async,
            useXMLHTTPRequest
          );
        }
        exports.ensureBasePluginLoaded = ensureBasePluginLoaded;

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL0dTRXJyb3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9maWRtL0dpZ3lhLkpzLlNhbWxQcm94eS9hcHAvYm9vdHN0cmFwLnRzIiwid2VicGFjazovLy8uL3NyYy9maWRtL0dpZ3lhLkpzLlNhbWxQcm94eS9hcHAvY29uZmlndXJhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlkbS9HaWd5YS5Kcy5TYW1sUHJveHkvYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9maWRtL0dpZ3lhLkpzLlNhbWxQcm94eS9hcHAvbG9naW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZG0vR2lneWEuSnMuU2FtbFByb3h5L2FwcC9sb2dvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZG0vR2lneWEuSnMuU2FtbFByb3h5L2FwcC9wYXJzZVVybC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlkbS9HaWd5YS5Kcy5TYW1sUHJveHkvYXBwL3NhbWxQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlkbS9HaWd5YS5Kcy5TYW1sUHJveHkvYXBwL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9HaWd5YS5Kcy5Cb290L2FwcC9ib290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLHlCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTs7QUFFTztBQUNQO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBOztBQUVPO0FBQ1AsZUFBZSxvQ0FBYTtBQUM1QixnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGNBQWM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBOztBQUVPO0FBQ1AsbUNBQW1DLG9DQUFvQztBQUN2RTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUCwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUcsMEJBQTBCLGFBQU87QUFDakMsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTSxnQkFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBOztBQUVPO0FBQ1AsaURBQWlELFFBQVE7QUFDekQsd0NBQXdDLFFBQVE7QUFDaEQsd0RBQXdELFFBQVE7QUFDaEU7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxpQkFBaUIsc0ZBQXNGLGFBQWEsRUFBRTtBQUN0SCxzQkFBc0IsZ0NBQWdDLFlBQVksYUFBTyxrQkFBa0IsMENBQTBDLEVBQUUsRUFBRSxHQUFHO0FBQzVJLDJCQUEyQixNQUFNLGVBQWUsRUFBRSxZQUFZLG9CQUFvQixFQUFFO0FBQ3BGLHNCQUFzQiw4QkFBOEIsYUFBTywrREFBK0Q7QUFDMUgsNkJBQTZCLHVCQUF1QjtBQUNwRCw0QkFBNEIsd0JBQXdCO0FBQ3BELDJCQUEyQix5REFBeUQ7QUFDcEY7O0FBRU87QUFDUDtBQUNBLGlCQUFpQiw0Q0FBNEMsU0FBUyxFQUFFLHFEQUFxRCxhQUFhLEVBQUU7QUFDNUkseUJBQXlCLDZCQUE2QixvQkFBb0IsZ0RBQWdELGdCQUFnQixFQUFFLEtBQUs7QUFDako7O0FBRU87QUFDUDtBQUNBO0FBQ0EsMkdBQTJHLHNGQUFzRixhQUFhLEVBQUU7QUFDaE4sc0JBQXNCLDhCQUE4QixZQUFZLGFBQU8sNkJBQTZCLHVEQUF1RCxFQUFFLEVBQUUsR0FBRztBQUNsSyw0Q0FBNEMsQ0FBQyxhQUFPLDhCQUE4QixVQUFVLG9CQUFvQixFQUFFLEVBQUUsVUFBVTtBQUM5SDs7QUFFTztBQUNQLGdDQUFnQyx1Q0FBdUMsYUFBYSxFQUFFLEVBQUUsT0FBTyxrQkFBa0I7QUFDakg7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDRDQUE0QztBQUM1Qzs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcE5BLElBQWtCLFFBMEpqQjtBQTFKRCxXQUFrQixRQUFRO0lBQ3RCLG1DQUFNO0lBQ04sNERBQXFCO0lBQ3JCLDhEQUFzQjtJQUN0Qiw0REFBcUI7SUFDckIsd0VBQTJCO0lBQzNCLHdFQUEyQjtJQUMzQixnRkFBK0I7SUFDL0Isb0RBQWlCO0lBQ2pCLG9EQUFpQjtJQUNqQixnRUFBdUI7SUFDdkIsMERBQW9CO0lBQ3BCLGdFQUF1QjtJQUN2QixrRUFBd0I7SUFDeEIsOEdBQThDO0lBQzlDLDRGQUFxQztJQUNyQyw0RkFBcUM7SUFDckMsa0ZBQWdDO0lBQ2hDLHNGQUFrQztJQUNsQyxvRkFBaUM7SUFDakMsc0ZBQWtDO0lBQ2xDLHdEQUFtQjtJQUNuQiwwRUFBNEI7SUFDNUIsZ0ZBQStCO0lBQy9CLHdGQUFtQztJQUNuQyxvRkFBaUM7SUFDakMsb0ZBQWlDO0lBQ2pDLGtGQUFnQztJQUNoQyxrRUFBd0I7SUFDeEIsOEZBQXNDO0lBQ3RDLG9FQUF5QjtJQUN6Qiw0RUFBNkI7SUFDN0IsOEVBQThCO0lBQzlCLGdGQUErQjtJQUMvQiw4REFBc0I7SUFDdEIsNERBQXFCO0lBQ3JCLG9GQUFpQztJQUNqQywwRkFBb0M7SUFDcEMsOEZBQXNDO0lBQ3RDLDhGQUFzQztJQUN0QyxrR0FBd0M7SUFDeEMsOEZBQXNDO0lBQ3RDLGtHQUF3QztJQUN4QyxrR0FBd0M7SUFDeEMsd0VBQTJCO0lBQzNCLDhFQUE4QjtJQUM5Qiw4RUFBOEI7SUFDOUIsNEZBQXFDO0lBQ3JDLG9GQUFpQztJQUNqQyw4REFBc0I7SUFDdEIsZ0ZBQStCO0lBQy9CLDREQUFxQjtJQUNyQiw4REFBc0I7SUFDdEIsOEVBQThCO0lBQzlCLDBFQUE0QjtJQUM1Qiw4REFBc0I7SUFDdEIsMEVBQTRCO0lBQzVCLDRGQUFxQztJQUNyQyw4REFBc0I7SUFDdEIsa0ZBQWdDO0lBQ2hDLGdFQUF1QjtJQUN2Qiw4RkFBc0M7SUFDdEMsMEZBQW9DO0lBQ3BDLHNHQUEwQztJQUMxQyw0RkFBcUM7SUFDckMsNEZBQXFDO0lBQ3JDLGdFQUF1QjtJQUN2Qiw4RkFBc0M7SUFDdEMsa0dBQXdDO0lBQ3hDLHdGQUFtQztJQUNuQyxzRUFBMEI7SUFDMUIsc0RBQWtCO0lBQ2xCLDhFQUE4QjtJQUM5QiwwRUFBNEI7SUFDNUIsc0ZBQWtDO0lBQ2xDLGtFQUF3QjtJQUN4QixzRUFBMEI7SUFDMUIsOEZBQXNDO0lBQ3RDLHNFQUEwQjtJQUMxQix3RUFBMkI7SUFDM0Isb0ZBQWlDO0lBQ2pDLGdFQUF1QjtJQUN2QiwwRUFBNEI7SUFDNUIsb0VBQXlCO0lBQ3pCLGtFQUF3QjtJQUN4QixvRkFBaUM7SUFDakMsb0ZBQWlDO0lBQ2pDLG9GQUFpQztJQUNqQyx3RUFBMkI7SUFDM0IsZ0ZBQStCO0lBQy9CLDhEQUFzQjtJQUN0QixzRkFBa0M7SUFDbEMsc0ZBQWtDO0lBQ2xDLDhFQUE4QjtJQUM5Qiw4RUFBOEI7SUFDOUIsc0VBQTBCO0lBQzFCLGdFQUF1QjtJQUN2Qiw0RUFBNkI7SUFDN0IsMERBQW9CO0lBQ3BCLGtFQUF3QjtJQUN4QixvRUFBeUI7SUFDekIsa0VBQXdCO0lBQ3hCLGtGQUFnQztJQUNoQyw4REFBc0I7SUFDdEIsb0dBQXlDO0lBQ3pDLGdGQUErQjtJQUMvQixrRkFBZ0M7SUFDaEMsa0ZBQWdDO0lBQ2hDLG9HQUF5QztJQUN6QyxvR0FBeUM7SUFDekMsNEZBQXFDO0lBQ3JDLGdHQUF1QztJQUN2QywwRUFBNEI7SUFDNUIsZ0ZBQStCO0lBQy9CLHNEQUFrQjtJQUNsQixvRUFBeUI7SUFDekIsd0VBQTJCO0lBQzNCLDhEQUFzQjtJQUN0Qix3RUFBMkI7SUFDM0Isd0VBQTJCO0lBQzNCLGtFQUF3QjtJQUN4Qiw0Q0FBYTtJQUNiLG9GQUFpQztJQUNqQyxnRkFBK0I7SUFDL0Isb0VBQXlCO0lBQ3pCLGtGQUFnQztJQUNoQyw0RUFBNkI7SUFDN0Isd0VBQTJCO0lBQzNCLGdGQUErQjtJQUMvQiwwRUFBNEI7SUFDNUIsa0dBQXdDO0lBQ3hDLHdGQUFtQztJQUNuQyxnRkFBK0I7SUFDL0IsNEVBQTZCO0lBQzdCLHdFQUEyQjtJQUMzQixrSEFBZ0Q7SUFDaEQsa0ZBQWdDO0lBQ2hDLGdFQUF1QjtJQUN2QixnRUFBdUI7SUFDdkIsc0VBQTBCO0lBQzFCLGtGQUFnQztJQUNoQywwREFBb0I7SUFDcEIsd0ZBQW1DO0lBQ25DLGdHQUF1QztJQUN2QyxrREFBZ0I7SUFDaEIsOERBQXNCO0lBQ3RCLDBEQUFvQjtJQUNwQixzRkFBa0M7SUFDbEMsd0VBQTJCO0lBQzNCLG9JQUEwRDtJQUMxRCx3R0FBMkM7SUFDM0Msb0dBQXlDO0lBQ3pDLGtFQUF3QjtJQUN4Qiw4REFBc0I7QUFDMUIsQ0FBQyxFQTFKaUIsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUEwSnpCO0FBQ0QsSUFBa0IsY0FLakI7QUFMRCxXQUFrQixjQUFjO0lBQzVCLG1EQUFRO0lBQ1IsMEVBQXNCO0lBQ3RCLGdGQUF5QjtJQUN6QixvSEFBMkM7QUFDL0MsQ0FBQyxFQUxpQixjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQUsvQjs7Ozs7Ozs7Ozs7OztBQy9KRCxzSUFBa0Y7QUFDbEYscUpBQXNHO0FBQ3RHLGtIQUFxRTtBQUVyRSx1RkFBdUY7QUFFdkYsU0FBZ0IsU0FBUyxDQUFDLElBQW1FO0lBQ3pGLElBQUksTUFBTSxHQUFHLG1CQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLElBQUksY0FBYyxHQUFHLGlDQUFpQixFQUFFLENBQUM7SUFDekMsd0JBQWlCLENBQ2IsY0FBYyxDQUFDLE1BQU0sRUFDckI7UUFDSSxJQUFJLGFBQWEsR0FBRyxrQ0FBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN2RCxxQkFBcUIsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxFQUNELElBQUksRUFDSixJQUFJLENBQ1AsQ0FBQztBQUNOLENBQUM7QUFiRCw4QkFhQztBQUNELFNBQVMscUJBQXFCO0lBQzFCLGtHQUFrRztJQUNsRyxZQUFLLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQywwQkFBMEIsR0FBRyxLQUFLLENBQUM7SUFDM0QsWUFBSyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDO0FBQzVELENBQUM7Ozs7Ozs7Ozs7Ozs7QUN4QkQsNkhBQWdHO0FBTWhHLFNBQVMsaUJBQWlCO0lBQ3RCLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxJQUFJLGFBQWdDLENBQUM7SUFFckMsS0FBSyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzFDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRTtZQUNYLElBQ0ksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pILEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ25DO2dCQUNFLGFBQWEsR0FBRyxNQUFNLENBQUM7Z0JBQ3ZCLE1BQU07YUFDVDtTQUNKO0tBQ0o7SUFFRCxPQUFPLGFBQWEsQ0FBQztBQUN6QixDQUFDO0FBQ0QsU0FBZ0IsaUJBQWlCO0lBQzdCLHNCQUFzQjtJQUN0QixJQUFJLGFBQWEsR0FBRyxpQkFBaUIsRUFBRSxDQUFDO0lBRXhDLElBQUksQ0FBQyxhQUFhO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBRXJFLElBQUksTUFBTSxHQUFHLGlCQUFTLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELElBQUksVUFBVSxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVuRSxJQUFJLENBQUMsVUFBVTtRQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUVoRSxJQUFJLENBQUMsTUFBTTtRQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUV2RCxPQUFPO1FBQ0gsTUFBTSxFQUFFLE1BQU07UUFDZCxVQUFVLEVBQUUsVUFBVTtLQUN6QixDQUFDO0FBQ04sQ0FBQztBQWpCRCw4Q0FpQkM7QUFDRCxTQUFnQixrQkFBa0IsQ0FBQyxjQUFzQztJQUNyRSxJQUFJLFVBQVUsR0FBRyx1QkFBZSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUU1RCxJQUFJLENBQUMsVUFBVTtRQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztJQUVwRSxJQUFJLGdCQUFnQixHQUFHLG1CQUFXLENBQzlCO1FBQ0ksTUFBTSxFQUFFLGNBQWMsQ0FBQyxNQUFNO0tBQ2hDLEVBQ0QsVUFBVSxDQUNiLENBQUM7SUFFRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUTtRQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztJQUV0RixPQUFPLGdCQUFnQixDQUFDO0FBQzVCLENBQUM7QUFmRCxnREFlQzs7Ozs7Ozs7Ozs7OztBQzVERCx5SUFBc0U7QUFtRWxFLG9CQW5FSyxxQkFBUyxDQW1FTDtBQWxFYixxSkFBc0c7QUFtRWxHLDRCQW5FSyxpQ0FBaUIsQ0FtRUw7QUFDakIsNkJBcEV3QixrQ0FBa0IsQ0FvRXhCO0FBbkV0Qiw2SEFLK0M7QUFpRTNDLDRCQXJFQSx5QkFBaUIsQ0FxRUE7QUFEakIsNEJBbkVBLHlCQUFpQixDQW1FQTtBQUdqQix5QkF0RW1CLHNCQUFjLENBc0VuQjtBQUpkLHVCQWpFQSxvQkFBWSxDQWlFQTtBQUdaLDhCQW5FQSwyQkFBbUIsQ0FtRUE7QUFqRXZCLGdJQUF1RTtBQW1FbkUsd0JBbkVLLHNCQUFhLENBbUVMO0FBbEVqQixzSUFBK0U7QUFvRTNFLG1CQXBFSyxtQkFBUSxDQW9FTDtBQURSLG9CQW5FZSxvQkFBUyxDQW1FZjtBQWxFYix5SUFBMkU7QUFvRXZFLHlCQXBFSywwQkFBYyxDQW9FTDtBQW5FbEIsK0ZBU2lCO0FBb0ViLDBCQTVFQSx1QkFBZSxDQTRFQTtBQUpmLHdCQXZFQSxxQkFBYSxDQXVFQTtBQU1iLHFCQTdFZSxrQkFBVSxDQTZFZjtBQUpWLHNCQXpFMkIsbUJBQVcsQ0F5RTNCO0FBS1gsaUJBOUV3QyxjQUFNLENBOEV4QztBQUZOLHNCQTVFZ0QsbUJBQVcsQ0E0RWhEO0FBVFgscUJBbEVBLGtCQUFVLENBa0VBO0FBRVYsZ0NBbkVBLDZCQUFxQixDQW1FQTtBQURyQixzQkFqRUEsbUJBQVcsQ0FpRUE7QUFJWCxzQkFwRUEsbUJBQVcsQ0FvRUE7QUFGWCx1QkFqRUEsb0JBQVksQ0FpRUE7QUFJWix1QkFyRWMsb0JBQVksQ0FxRWQ7QUFSWixvQkE1REEsaUJBQVMsQ0E0REE7QUF6RGIsSUFBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtJQUNqQixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBUyxDQUFDO0NBQy9CO0FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtJQUN0QixNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO0NBQzVCO0FBQ0QsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFO0lBQ2xCLFNBQVMsQ0FBQyxLQUFLLEdBQUc7UUFDZCxTQUFTO1FBQ1QsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLGFBQWE7UUFDYixTQUFTO1FBQ1QsUUFBUTtRQUNSLGNBQWM7S0FDakIsQ0FBQztDQUNMO0FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO0lBQ3hCLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHO1FBQ3BCLFNBQVM7UUFDVCxVQUFVO1FBQ1YsV0FBVztRQUNYLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osYUFBYTtRQUNiLFdBQVc7UUFDWCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGVBQWU7UUFDZixXQUFXO1FBQ1gsVUFBVTtRQUNWLE1BQU07S0FDVCxDQUFDO0NBQ0w7QUFDRCxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQywwQkFBYyxDQUFDLENBQUM7QUFFMUMsSUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztBQUUxQixzQkFBSzs7Ozs7Ozs7Ozs7Ozs7QUNoRVQsNkhBUStDO0FBRS9DLFNBQWdCLFlBQVksQ0FBQyxNQUFvQixFQUFFLGFBQTZCO0lBQzVFLGtCQUFVLENBQUMsa0JBQVE7O1FBQ2YsSUFBSSxRQUFRLEVBQUM7WUFDVCxJQUFNLGFBQWEsU0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxtQ0FBSSwrQkFBdUIsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEcsNkJBQXFCLENBQ2pCLGtCQUFrQixFQUNsQjtnQkFDSSxXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7Z0JBQy9CLFVBQVUsRUFBRSxxQkFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Z0JBQy9DLGFBQWEsRUFBRSxhQUFhO2FBQy9CLEVBQ0QsYUFBYSxDQUFDLE1BQU0sQ0FDdkIsQ0FBQztTQUNMO1FBQ0QsZ0JBQWdCOztZQUNYLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNsRCxDQUFDLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFqQkQsb0NBaUJDO0FBRUQsU0FBc0IsaUJBQWlCLENBQUMsTUFBb0IsRUFBRSxhQUE2Qjs7Ozt3QkFDdkYscUJBQU0sWUFBSyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7O29CQUFqRCxTQUFpRCxDQUFDO29CQUNsRCwrQ0FBK0M7b0JBQy9DLG1CQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7d0JBQ3RDLDBEQUEwRDt3QkFDMUQsbUdBQW1HO3dCQUNuRyxnQkFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFOzRCQUNyQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7eUJBRWxDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUMsQ0FBQzs7Ozs7Q0FDTjtBQVhELDhDQVdDO0FBRUQsU0FBZ0IsaUJBQWlCLENBQUMsTUFBb0IsRUFBRSxhQUE2QjtJQUNqRixtQkFBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsc0JBQVk7UUFDMUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxJQUFJLFlBQVksQ0FBQyxXQUFXLENBQUM7UUFDcEUsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDckQsbUJBQW1CLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQU5ELDhDQU1DO0FBQ0QsU0FBZ0IsbUJBQW1CLENBQUMsTUFBb0IsRUFBRSxhQUE2QjtJQUNuRixrQkFBVSxDQUFDLGtCQUFROztRQUNmLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMscUJBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN2RSxJQUFNLGFBQWEsU0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxtQ0FBSywrQkFBdUIsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkcsNkJBQXFCLENBQ2pCLGtCQUFrQixFQUNsQjtZQUNJLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVztZQUMvQixVQUFVLEVBQUUsVUFBVTtZQUN0QixhQUFhLEVBQUUsYUFBYTtTQUMvQixFQUNELGFBQWEsQ0FBQyxNQUFNLENBQ3ZCLENBQUM7SUFDTixDQUFDLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFkRCxrREFjQztBQUNELFNBQWdCLGNBQWMsQ0FBQyxNQUFvQixFQUFFLGFBQTZCO0lBQzlFLGtCQUFVLENBQUMsa0JBQVE7O1FBQ2YsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxxQkFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3ZFLElBQU0sYUFBYSxTQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLG1DQUFLLCtCQUF1QixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2Ryw2QkFBcUIsQ0FDakIsY0FBYyxFQUNkO1lBQ0ksTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQy9CLFdBQVcsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztZQUN6QyxVQUFVLEVBQUUsVUFBVTtZQUN0QixhQUFhLEVBQUUsYUFBYTtTQUMvQixFQUNELGFBQWEsQ0FBQyxNQUFNLENBQ3ZCLENBQUM7SUFDTixDQUFDLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFmRCx3Q0FlQztBQUVELFNBQWdCLGFBQWEsQ0FBQyxNQUFvQixFQUFFLGFBQTZCO0lBQzdFLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO0lBRTdHLDZCQUFxQixDQUNqQixnQkFBZ0IsRUFDaEI7UUFDSSxXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7UUFDL0IsVUFBVSxFQUFFLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ3pILFVBQVUsRUFBRSxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtLQUMzSCxFQUNELGFBQWEsQ0FBQyxNQUFNLENBQ3ZCLENBQUM7QUFDTixDQUFDO0FBWkQsc0NBWUM7Ozs7Ozs7Ozs7Ozs7QUM3RkQsNkhBQStHO0FBQy9HLHVIQUErRDtBQUUvRCxTQUFnQixhQUFhLENBQUMsTUFBb0IsRUFBRSxhQUE2QjtJQUM3RSxrREFBa0Q7SUFDbEQsMkJBQTJCO0lBQzNCLDREQUE0RDtJQUM1RCx1Q0FBdUM7SUFDdkMscURBQXFEO0lBQ3JELElBQUksZ0JBQWdCLEdBQUcsa0JBQVE7UUFDM0IsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLENBQUMsS0FBSztRQUVuQyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEtBQUssbUJBQVEsQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sbUJBQVcsQ0FDZDtnQkFDSSxTQUFTLEVBQUUsUUFBUSxDQUFDLFNBQVM7Z0JBQzdCLFlBQVksRUFBRSxRQUFRLENBQUMsWUFBWTtnQkFDbkMsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLGFBQWEsRUFBRSxhQUFhO2FBQy9CLEVBQ0QsTUFBTSxDQUNULENBQUM7UUFFTixJQUFJLFFBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDdEIsSUFBSSxZQUFZLEdBQUc7Z0JBQ2Ysb0NBQXFCLENBQ2pCLGtCQUFrQixFQUNsQjtvQkFDSSxXQUFXLEVBQUUsUUFBUSxDQUFDLFdBQVc7aUJBQ3BDLEVBQ0QsYUFBYSxDQUFDLE1BQU0sQ0FDdkI7WUFORCxDQU1DLENBQUM7WUFFTixJQUFJLGFBQWEsQ0FBQyxTQUFTO2dCQUFFLGtCQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUM7O2dCQUMzRixZQUFZLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUMsQ0FBQztJQUVGLGNBQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGtCQUFRO1FBQy9CLElBQUksUUFBUSxDQUFDLFNBQVMsS0FBSyxtQkFBUSxDQUFDLEVBQUUsSUFBSSxRQUFRLENBQUMsZ0JBQWdCLElBQUksUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsS0FBSyxtQkFBUSxDQUFDLGlCQUFpQixFQUFFO1lBQ3ZJLHVEQUF1RDtZQUN2RCxPQUFPLGNBQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDdkQ7UUFFRCxPQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQTVDRCxzQ0E0Q0M7Ozs7Ozs7Ozs7Ozs7QUNqREQsNkhBQXdFO0FBRXhFLElBQVksU0FjWDtBQWRELFdBQVksU0FBUztJQUNqQixxREFBVTtJQUNWLE1BQU07SUFDTiwyQ0FBSztJQUNMLHFEQUFVO0lBQ1YseURBQVk7SUFDWixxREFBVTtJQUNWLCtDQUFPO0lBQ1AsNkNBQU07SUFDTixNQUFNO0lBQ04sNkNBQU07SUFFTixXQUFXO0lBQ1gsNkNBQU07QUFDVixDQUFDLEVBZFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFjcEI7QUFPRCxTQUFnQixRQUFRLENBQUMsS0FBYTtJQUNsQyxJQUFJLE1BQU0sR0FBRyxpQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTlCLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNyQyxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEMsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTlCLG1EQUFtRDtJQUVuRCxPQUFPO1FBQ0gsSUFBSSxFQUFFLElBQUk7UUFDVixXQUFXLEVBQUUsV0FBVztRQUN4QixNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sRUFBRSxNQUFNO0tBQ2pCLENBQUM7QUFDTixDQUFDO0FBZkQsNEJBZUM7Ozs7Ozs7Ozs7Ozs7QUNyQ0Qsc0lBQWlGO0FBQ2pGLDZIQUE2SjtBQUM3SixnSUFBcUU7QUFFckUsU0FBZ0IsY0FBYyxDQUFDLE1BQW9CLEVBQUUsYUFBNkI7SUFDOUUsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLG9CQUFTLENBQUMsVUFBVSxDQUFDO0lBRWxELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNqQiwyQkFBMkI7UUFDM0IsS0FBSyxvQkFBUyxDQUFDLEtBQUs7WUFDaEIsb0JBQVksQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDcEMsTUFBTTtRQUNWLEtBQUssb0JBQVMsQ0FBQyxVQUFVO1lBQ3JCLHlCQUFpQixDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztZQUN6QyxNQUFNO1FBQ1YsS0FBSyxvQkFBUyxDQUFDLFVBQVUsRUFBRSx5REFBeUQ7WUFDaEYseUJBQWlCLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ3pDLE1BQU07UUFDVixLQUFLLG9CQUFTLENBQUMsWUFBWTtZQUN2QiwyQkFBbUIsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDM0MsTUFBTTtRQUNWLEtBQUssb0JBQVMsQ0FBQyxNQUFNO1lBQ2pCLHFCQUFhLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ3JDLE1BQU07UUFFViw0QkFBNEI7UUFDNUIsS0FBSyxvQkFBUyxDQUFDLE9BQU8sRUFBRSxzQkFBc0I7WUFDMUMsc0JBQWMsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFDdEMsTUFBTTtRQUVWLDRCQUE0QjtRQUM1QixLQUFLLG9CQUFTLENBQUMsTUFBTTtZQUNqQixzQkFBYSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztZQUNyQyxNQUFNO1FBRVY7WUFDSSxNQUFNLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7S0FDN0M7QUFDTCxDQUFDO0FBbENELHdDQWtDQzs7Ozs7Ozs7Ozs7Ozs7QUNwQ0QsU0FBZ0IsU0FBUyxDQUFDLEtBQWE7SUFDbkMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFN0UsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVsQyxJQUFJLE1BQU0sR0FBaUIsRUFBRSxDQUFDO0lBRTlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1FBQ3hDLElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUxQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQUUsU0FBUztRQUV4QyxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWxDLElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsU0FBUztRQUV0QyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDN0Q7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBcEJELDhCQW9CQztBQUNELFNBQWdCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBYyxFQUFFLE9BQWU7SUFDM0QsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzFCLElBQUksV0FBVyxHQUFHO1FBQ2QsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNoQixhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksRUFBRSxDQUFDO1NBQ1Y7SUFDTCxDQUFDLENBQUM7SUFFRixZQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxZQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JHLElBQUksT0FBTztRQUFFLFVBQVUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbEQsQ0FBQztBQVhELGdDQVdDO0FBQ0QsU0FBZ0IsV0FBVyxDQUFDLFNBQVMsRUFBRSxPQUFPO0lBQzFDLHFIQUFxSDtJQUVySCxJQUFJLFlBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFO1FBQy9CLE9BQU8sUUFBUSxDQUFDLFlBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRTtZQUNwRCxLQUFLLEVBQUUsU0FBUztTQUNuQixDQUFDLENBQUM7S0FDTjtBQUNMLENBQUM7QUFSRCxrQ0FRQztBQUNELFNBQXNCLHFCQUFxQixDQUFDLFFBQWdCLEVBQUUsTUFBVyxFQUFFLE1BQWM7Ozs7OztvQkFFakYsTUFBTSxHQUFHLFlBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUV0QyxHQUFHLEdBQUcsYUFBVyxNQUFNLG1CQUFjLE1BQU0sU0FBSSxRQUFVLENBQUM7b0JBRTNDLHFCQUFNLFlBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTs7b0JBQXJELFVBQVUsR0FBRyxTQUF3QztvQkFDM0QsSUFBSSxVQUFVO3dCQUFFLE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO29CQUUvQyxRQUFRLENBQ0osR0FBRyxFQUNIO3dCQUNJLE1BQU0sRUFBRSxNQUFNO3dCQUNkLE1BQU0sRUFBRSxNQUFNO3dCQUNkLFFBQVEsRUFBRSxRQUFRO3FCQUNyQixFQUNELE1BQU0sQ0FDVCxDQUFDOzs7OztDQUNMO0FBbEJELHNEQWtCQztBQUNELFNBQWdCLFlBQVksQ0FBQyxHQUFXLEVBQUUsTUFBVztJQUNqRCxPQUFPLFlBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUZELG9DQUVDO0FBQ0QsU0FBZ0IsUUFBUSxDQUFDLEdBQVcsRUFBRSxTQUFjLEVBQUUsTUFBVztJQUM3RCw0QkFBNEI7SUFDNUIsR0FBRyxHQUFHLFlBQVksQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbkMsR0FBRyxHQUFHLFlBQVksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFaEMsUUFBUSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDcEIsNkZBQTZGO0FBQ2pHLENBQUM7QUFQRCw0QkFPQztBQUNELFNBQWdCLGFBQWEsQ0FBQyxNQUFjO0lBQ3hDLDREQUE0RDtJQUM1RCxPQUFPLFlBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFIRCxzQ0FHQztBQUNELFNBQWdCLHVCQUF1QixDQUFDLE1BQWM7SUFDbEQsNERBQTREO0lBQzVELE9BQU8sWUFBSyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEUsQ0FBQztBQUhELDBEQUdDO0FBQ0QsU0FBUyxVQUFVLENBQUMsTUFBYztJQUM5QixPQUFPLGtCQUFrQixHQUFHLE1BQU0sQ0FBQztBQUN2QyxDQUFDO0FBQ0QsSUFBTSxxQkFBcUIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztBQUs3QyxTQUFnQixXQUFXLENBQUMsTUFBYyxFQUFFLE9BQXVCLEVBQUUsSUFBZ0I7SUFDakYsZ0VBQWdFO0lBQ2hFLElBQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUUvQixJQUFNLGFBQWEsR0FBRyxZQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLHFCQUFxQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JGLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFNUIsWUFBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNqRCxJQUFJLEVBQUUsQ0FBQztBQUNYLENBQUM7QUFURCxrQ0FTQztBQUNELFNBQWdCLFdBQVcsQ0FBQyxNQUFjLEVBQUUsUUFBMkM7SUFDbkYsMENBQTBDO0lBQzFDLElBQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUUvQixJQUFNLGFBQWEsR0FBRyxZQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLHFCQUFxQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JGLElBQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQyxHQUFHLEVBQUUsSUFBb0IsRUFBRSxDQUFDO0lBRTlELFlBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDakQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzFCLENBQUM7QUFURCxrQ0FTQztBQUNELFNBQWdCLFlBQVksQ0FBQyxRQUFnQixFQUFFLE1BQVc7SUFDdEQsT0FBTyxZQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUFGRCxvQ0FFQztBQUNELFNBQWdCLGVBQWUsQ0FBQyxJQUFZO0lBQ3hDLE9BQU8sWUFBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRkQsMENBRUM7QUFDRCxTQUFnQixXQUFXO0lBQUksaUJBQWlCO1NBQWpCLFVBQWlCLEVBQWpCLHFCQUFpQixFQUFqQixJQUFpQjtRQUFqQiw0QkFBaUI7O0lBQzVDLE9BQVUsWUFBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFGRCxrQ0FFQztBQUNELFNBQWdCLFVBQVUsQ0FBQyxRQUFxQyxFQUFFLE1BQWM7SUFDNUUsSUFBRyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbkIsWUFBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBQyxRQUFRLEVBQUUsa0JBQVE7Z0JBQzdDLFFBQVEsQ0FBQyxTQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsU0FBUyxNQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLENBQUMsRUFBQyxDQUFDLENBQUM7S0FDUDs7UUFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQU5ELGdDQU1DO0FBQ0QsU0FBZ0IsTUFBTSxDQUFDLFdBQW1CLEVBQUUsUUFBNEI7SUFDcEUsWUFBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLFdBQVc7S0FDM0IsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUxELHdCQUtDO0FBQ0QsU0FBUyxVQUFVLENBQUMsTUFBYztJQUM5QixJQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDNUIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3hJVSxhQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLFNBQWdCLHFCQUFxQixDQUFDLFNBQW1CO0lBQ3JELElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RCxJQUFJLGFBQWdDLENBQUM7SUFDckMsSUFBSSxhQUFhLEdBQUcsZ0NBQWdDLENBQUM7SUFDckQsS0FBSyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzFDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUNaLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUN6RCxJQUFJLG9CQUFvQixHQUFHLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQVEsSUFBSSxVQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUM7Z0JBQzVHLElBQUksb0JBQW9CLEVBQUU7b0JBQ3RCLGFBQWEsR0FBRyxNQUFNLENBQUM7b0JBQ3ZCLE1BQU07aUJBQ1Q7YUFDSjtTQUNKO0tBQ0o7SUFDRCxPQUFPLGFBQWEsQ0FBQztBQUN6QixDQUFDO0FBbEJELHNEQWtCQztBQUNELFNBQWdCLGlCQUFpQixDQUM3QixNQUFjLEVBQ2QsSUFBZ0IsRUFDaEIsS0FBcUIsRUFDckIsc0JBQThCLEVBQzlCLGlCQUFrQyxFQUNsQyxlQUFnQztJQUhoQyxvQ0FBcUI7SUFDckIsdUVBQThCO0lBQzlCLDZEQUFrQztJQUNsQyx5REFBZ0M7SUFFaEMsSUFBSSxZQUFLLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFDbEIsd0JBQXdCO1FBQ3hCLElBQUksYUFBSztZQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsWUFBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ25CLHNEQUFzRDtZQUN0RCx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQzthQUFNO1lBQ0gsOENBQThDO1lBQzlDLElBQUksRUFBRSxDQUFDO1NBQ1Y7S0FDSjtTQUFNO1FBQ0gsdUJBQXVCO1FBQ3ZCLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixFQUFFLGlCQUFpQixFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZGLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xDO0FBQ0wsQ0FBQztBQXZCRCw4Q0F1QkM7QUFDRCxTQUFTLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixFQUFFLGlCQUFpQixFQUFFLGVBQWU7SUFDMUYsWUFBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLGdEQUFnRDtJQUV6RSxJQUFJLE1BQU0sQ0FBQztJQUNYLElBQUksc0JBQXNCLEVBQUU7UUFDeEIsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN2QyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUN2QztTQUFNO1FBQ0gsTUFBTSxHQUFHLHdCQUF3QixDQUFDO0tBQ3JDO0lBQ0QsSUFBSSxHQUFHLEdBQUcsQ0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSw2QkFBdUIsTUFBUSxDQUFDO0lBQzFFLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsYUFBYSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLGlEQUFpRDtJQUV6RixJQUFJLENBQUMsaUJBQWlCLEVBQUU7UUFDcEIsYUFBYSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDeEIsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDL0I7U0FBTTtRQUNILCtIQUErSDtRQUMvSCxJQUFJLE1BQU0sR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLGFBQWEsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztLQUM1QztJQUVELElBQUksYUFBSztRQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUN0RCxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3hFLENBQUM7QUFDRCxTQUFTLHdCQUF3QixDQUFDLElBQUk7SUFDbEMsZ0NBQWdDO0lBQ2hDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQztJQUN2QixJQUFJLE9BQU8sTUFBTSxDQUFDLHFCQUFxQixDQUFDLEtBQUssV0FBVztRQUFFLFdBQVcsR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUV0RyxNQUFNLENBQUMscUJBQXFCLENBQUMsR0FBRztRQUFTLGNBQU87YUFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1lBQVAseUJBQU87O1FBQzVDLElBQUksV0FBVztZQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRS9DLElBQUksYUFBSztZQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNuRCxJQUFJLEVBQUUsQ0FBQztJQUNYLENBQUMsQ0FBQztBQUNOLENBQUM7QUFDRCxTQUFnQixzQkFBc0IsQ0FBQyxNQUFjLEVBQUUsSUFBZ0IsRUFBRSxLQUFxQixFQUFFLGlCQUFrQztJQUF6RCxvQ0FBcUI7SUFBRSw2REFBa0M7SUFDOUgsaUJBQWlCLENBQ2IsTUFBTSxFQUNOO1FBQ0ksSUFBSSxZQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdkYsSUFBSSxFQUFFLENBQUM7U0FDVjthQUFNO1lBQ0gsWUFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNsRDtJQUNMLENBQUMsRUFDRCxLQUFLLEVBQ0wsaUJBQWlCLENBQ3BCLENBQUM7QUFDTixDQUFDO0FBYkQsd0RBYUMiLCJmaWxlIjoiZ2lneWEuc2FtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2ZpZG0vR2lneWEuSnMuU2FtbFByb3h5L2FwcC9pbmRleC50c1wiKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBlbnVtIEdTRXJyb3JzIHtcbiAgICBPSyA9IDAsXG4gICAgRGF0YV9QZW5kaW5nID0gMTAwMDAxLCAvLyBEYXRhIGlzIHN0aWxsIGJlaW5nIHByb2Nlc3NlZCwgcXVlcnkgYWdhaW4gZm9yIHRoZSByZXNwb25zZVxuICAgIE5FVFdPUktfRVJST1IgPSA1MDAwMjYsXG4gICAgREFUQV9QRU5ESU5HID0gMTAwMDAxLCAvLyBEYXRhIGlzIHN0aWxsIGJlaW5nIHByb2Nlc3NlZCwgcXVlcnkgYWdhaW4gZm9yIHRoZSByZXNwb25zZVxuICAgIE9QRVJBVElPTl9DQU5DRUxFRCA9IDIwMDAwMSwgLy8gdXNlciBjYW5jZWxlZCwgaW4gbG9naW4gcHJvY2Vzc1xuICAgIFBFUk1JU1NJT05fR1JBTlRFRCA9IDIwMDAwMiwgLy8gSW5uZXIgY29kZVxuICAgIFBFUk1JU1NJT05fTk9UX0dSQU5URUQgPSAyMDAwMDMsIC8vIElubmVyIGNvZGVcbiAgICBSRURJUkVDVCA9IDIwMDAwNCwgLy8gSW5uZXIgY29kZVxuICAgIE5FV19VU0VSID0gMjAwMDA1LCAvLyBJbm5lciBjb2RlXG4gICAgT1BFUkFUSU9OX0RPTkUgPSAyMDAwMDYsIC8vIElubmVyIGNvZGVcbiAgICBVUERBVEVfVVNFUiA9IDIwMDAwNywgLy8gSW5uZXIgY29kZVxuICAgIE9LX1dJVEhfRVJST1JTID0gMjAwMDA4LCAvLyBGb3IgcmVwb3J0cyAtIHdoZW4gd2UgcmV0dXJuIG9rIHRvIGNsaWVudCBidXQgaGFkIGFjY2VwdGFibGUgZXJyb3JzICh0aGF0IHdlIHdhbnQgdG8ga25vdyBhYm91dCkgb24gdGhlIHdheVxuICAgIEFDQ09VTlRTX0xJTktFRCA9IDIwMDAwOSwgLy8gQWZ0ZXIgbGlua2lnbiBhY2NvdXRucyB2aWEgbG9naW4sIHJldHVybiB0aGlzIGVycm9yIGNvZGVcbiAgICBPS19XSVRIX0VSUk9SX0xPR0lOX0lERU5USUZJRVJfRVhJU1RTID0gMjAwMDEwLCAvLyBGb3Igc2V0QWNjb3VudEluZm8gdXNpbmcgdGhlIGNvbmZsaWN0SGFuZGxpbmcgcGFyYW0gLSBwcm9maWxlIHdhcyBzYXZlZCwgYnV0IHRoZSBlbWFpbCBjb25mbGljdHMgd2l0aCBhbm90aGVyIHVzZXJcbiAgICBBQ0NPVU5UX1BFTkRJTkdfUkVHSVNUUkFUSU9OID0gMjA2MDAxLCAvLyBGb3IgYWNjb3VudHMgQVBJLFxuICAgIEFDQ09VTlRfUEVORElOR19WRVJJRklDQVRJT04gPSAyMDYwMDIsIC8vIEZvciBhY2NvdW50cyBBUEk7IGNvbnNpZGVyIG1vdmluZyB0byA0MDN4eHggc2VjdGlvbiBpbiB0aGUgZnV0dXJlLlxuICAgIEFDQ09VTlRfTUlTU0lOR19MT0dJTklEID0gMjA2MDAzLCAvLyBGb3IgYWNjb3VudHMgQVBJXG4gICAgSURFTlRJVFlfQUxSRUFEWV9BU1NJR05FRCA9IDIwNjAwNCwgLy8gRm9yIGltcG9ydCBhY2NvdW50cyBBUElcbiAgICBBRlRFUl9FTUFJTF9WRVJJRklDQVRJT04gPSAyMDYwMDUsXG4gICAgUEVORElOR19DT0RFX1ZFUklGSUNBVElPTiA9IDIwNjAwNixcbiAgICBDTElFTlRfTE9HID0gMzAwMDAxLCAvLyBpbnRlcm5hbCwgZm9yIHJlcG9ydGluZyBlcm9ycnMgaW4gY2xpZW50IFNES1NcbiAgICBJTlZBTElEX0RBVEFfQ0VOVEVSID0gMzAxMDAxLCAvLyBcIkludmFsaWQgZGF0YS1jZW50ZXJcIi4gd2l0aCBlcnJvciBkZXRhaWxzIG9mOiBcIlRoaXMgQVBJIGtleSBpcyBzZXJ2ZWQgYnkgYW5vdGhlciBkYXRhIGNlbnRlclwiLlxuICAgIElOVkFMSURfUkVRVUVTVF9GT1JNQVQgPSA0MDAwMDEsIC8vIGNvdWxkIGJlIGFsbCBraW5kIG9mIGVycm9ycyB3aXRoIHdyb25nIHJlcXVlc3QgKG5vbiBzZWN1cmUgd2hlbiBzaG91bGQgYmUgc2VjdXJlLCB3cm9uZyBhdXRoZW50aWNhdGlvbiBoZWFkZXIpXG4gICAgTUlTU0lOR19SRVFVSVJFRF9QQVJBTUVURVIgPSA0MDAwMDIsXG4gICAgVU5JUVVFX0lERU5USUZJRVJfRVhJU1RTID0gNDAwMDAzLFxuICAgIElOVkFMSURfUEFSQU1FVEVSX0ZPUk1BVCA9IDQwMDAwNCxcbiAgICBJTlZBTElEX1BBUkFNRVRFUl9WQUxVRSA9IDQwMDAwNixcbiAgICBEVVBMSUNBVEVfVkFMVUUgPSA0MDAwMDcsXG4gICAgSU5WQUxJRF9BVVRIRU5USUNBVElPTl9IRUFERVIgPSA0MDAwMDgsIC8vIE9BdXRoMlxuICAgIFZBTElEQVRJT05fRVJST1IgPSA0MDAwMDksIC8vIEluIGFjY291bnRzLnJlZ2lzdGVyLCB3aGVuZXZlciB0aGVyZSBpcyBhIHZhbGlkYXRpb24gZXJyb3JcbiAgICBJTlZBTElEX1JFRElSRUNUX1VSSSA9IDQwMDAxMSwgLy8gT0F1dGgyXG4gICAgSU5WQUxJRF9SRVNQT05TRV9UWVBFID0gNDAwMDEyLCAvLyBPQXV0aDJcbiAgICBVTlNVUFBPUlRFRF9HUkFOVF9UWVBFID0gNDAwMDEzLCAvLyBPQXV0aDJcbiAgICBJTlZBTElEX0dSQU5UID0gNDAwMDE0LCAvLyBPQXV0aDJcbiAgICBDT0RFX0VYUElSRUQgPSA0MDAwMTUsIC8vIE9BdXRoMlxuICAgIFNDSEVNQV9WQUxJREFUSU9OX0ZBSUxFRCA9IDQwMDAyMCxcbiAgICBDQVBUQ0hBX1ZFUklGSUNBVElPTl9GQUlMRUQgPSA0MDAwMjEsXG4gICAgVU5JUVVFX0lOREVYX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjIsXG4gICAgSU5WQUxJRF9UWVBFX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjMsXG4gICAgRFlOQU1JQ19GSUVMRFNfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyNCxcbiAgICBXUklURV9BQ0NFU1NfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyNSxcbiAgICBJTlZBTElEX0ZPUk1BVF9WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI2LFxuICAgIFJFUVVJUkVEX1ZBTFVFX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjcsXG4gICAgRU1BSUxfTk9UX1ZFUklGSUVEID0gNDAwMDI4LFxuICAgIFNDSEVNQV9DT05GTElDVF9FUlJPUiA9IDQwMDAyOSwgLy8gVG8gaGFuZGxlIFVzZXIgc3RvcnkgMzQzMzAuIEltcHJvdmUgRWxhc3RpY1NlYXJjaE1hcHBpbmdFeGNlcHRpb24gaGFuZGxpbmcgaW4gRFMuSW5kZXhPYmplY3RcbiAgICBPUEVSQVRJT05fTk9UX0FMTE9XRUQgPSA0MDAwMzAsIC8vIFVzZXIgc3RvcnkgMzQzMTEgLSBJZiBhZGRDb25uZWN0aW9uIGlzIGNhbGxlZCByZXR1cm4gYW4gZXJyb3IgKFwib3BlcmF0aW9uIG5vdCBhbGxvd2VkIGZvciB0aGlzIGFjY291bnRcIiwgNDAwWFhYIGVycm9yKS5cbiAgICBTRUNVUklUWV9WRVJJRklDQVRJT05fRkFJTEVEID0gNDAwMDUwLFxuICAgIElOVkFMSURfQVBJS0VZX1BBUkFNRVRFUiA9IDQwMDA5MyxcbiAgICBOT1RfU1VQUE9SVEVEID0gNDAwMDk2LCAvLyB0aGUgZnVuY3Rpb24gaXMgbm90IHN1cHBvcnRlZCBieSBhbnkgb2YgdGhlIGN1cnJlbnRseSBjb25uZWN0ZWQgcHJvdmlkZXJzXG4gICAgVU5TVVBQT1JURURfVVNFUl9BR0VOVCA9IDQwMDA5NywgLy9cbiAgICBOT19QUk9WSURFUlMgPSA0MDAxMDAsIC8vIGNsaWVudD9cbiAgICBQT1BVUF9CTE9DS0VEID0gNDAwMTAxLCAvLyBjbGllbnRcbiAgICBJTlZBTElEX0VWRU5UX0hBTkRMRVIgPSA0MDAxMDIsIC8vIGNsaWVudFxuICAgIElOVkFMSURfQ09OVEFJTkVSSUQgPSA0MDAxMDMsIC8vIGNsaWVudFxuICAgIE5PVF9DT05ORUNURUQgPSA0MDAxMDYsIC8vIHVzZXIgaXMgbm90IGNvbm5lY3RlZCB0byB0aGUgcmVxdWlyZWQgbmV0d29yayBvciB0byBhbnkgbmV0d29ya1xuICAgIElOVkFMSURfU0lURV9ET01BSU4gPSA0MDAxMjAsIC8vIHRoZSBjdXJyZW50IGRvbWFpbiBkb2VzIG5vdCBtYXRjaCB0aGUgZG9tYWluIGNvbmZpZ3VyZWQgZm9yIHRoZSBhcGkga2V5XG4gICAgUFJPVklERVJfQ09ORklHVVJBVElPTl9FUlJPUiA9IDQwMDEyMiwgLy8gdGhlIGN1cnJlbnQgZG9tYWluIGRvZXMgbm90IG1hdGNoIHRoZSBkb21haW4gY29uZmlndXJlZCBmb3IgdGhlIGFwaSBrZXlcbiAgICBMSU1JVF9SRUFDSEVEID0gNDAwMTI0LCAvLyBHYW1lTWVjaGFuaWNzIC0gQ2FwIHdhcyByZWFjaGVkXG4gICAgRlJFUVVFTkNZX0xJTUlUX1JFQUNIRUQgPSA0MDAxMjUsIC8vIENvbW1lbnRzL0ZlZWQgLSBTcGFtIENhcHMgd2FzIHJlYWNoZWRcbiAgICBJTlZBTElEX0FDVElPTiA9IDQwMDEyNiwgLy8gR2FtZU1lY2hhbmljcyAtIEludmFsaWQgYWN0aW9uLiBUcmlnZ2VyZWQgYWN0aW9uIGNhbid0IGJlIGluaXRpYXRlZCBleHRlcm5hbGx5XG4gICAgSU5TVUZGSUNJRU5UX1BPSU5UU19UT19SRURFRU0gPSA0MDAxMjcsIC8vIEdhbWVNZWNoYW5pY3MgLSBJbnN1ZmZpY2llbnRfcG9pbnRzX3RvX3JlZGVlbVxuICAgIFNJR05BVFVSRV9USU1FU1RBTVBfRVhQSVJFRCA9IDQwMDEyOCwgLy8gdGhlIHRpbWVzdGFtcCBpbnNpZGUgdGhlIHNpZ25hdHVyZSBpcyBleHBpcmVkXG4gICAgRXJyb3JfRHVyaW5nX0V4dGVuc2lvbnNfT3BlcmF0aW9uID0gNDAwMzAyLFxuICAgIEV4dGVuc2lvbl9Qb2ludF9DdXN0b21fRXJyb3IgPSA0MDAzMDMsIC8vIEV4dGVuc2lvbiBwb2ludCByZXR1cm4gYSB1c2VyRmFjaW5nRXJyb3JNZXNzYWdlXG4gICAgSU5WQUxJRF9QT0xJQ1lfQ09ORklHVVJBVElPTiA9IDQwMTAwMCwgLy8gUG9saWN5IGNvbmZpZ3VyYXRpb24gaXMgaW52YWxpZCAoaS5lLiBwcmV2ZW50IHJlZ2l0cmF0aW9uKVxuICAgIFNVU1BFQ1RFRF9TUEFNID0gNDAxMDEwLCAvLyBTb21lb25lIGlzIHRyeWluZyB0byB1c2UgR2lneWEgdG8gc2VuZCBhIGVtYWlsIHdpdGggYSBVUkwgdGhhdCBkb2VzIG5vdCBtYXRjaCBhbnkgb2YgdGhlIGNsaWVudCdzIGRvbWFpbnM7IHN1c3BlY3RlZCBzcGFtLlxuICAgIExPR0lOX0ZBSUxFRF9DQVBUQ0hBX1JFUVVJUkVEID0gNDAxMDIwLCAvLyBhY2NvdW50cy5sb2dpbiAtIGNhcHRjaGEgcmVxdWlyZWRcbiAgICBSRVFVRVNUX0ZBSUxFRF9DQVBUQ0hBX1JFUVVJUkVEID0gNDAxMDIzLCAvLyBhY2NvdW50cy5sb2dpbiAtIGNhcHRjaGEgcmVxdWlyZWRcbiAgICBMT0dJTl9GQUlMRURfV1JPTkdfQ0FQVENIQSA9IDQwMTAyMSwgLy8gYWNjb3VudHMubG9naW4gLSB3cm9uZyBjYXB0Y2hhIGNvZGVcbiAgICBPTERfUEFTU1dPUkRfVVNFRCA9IDQwMTAzMCwgLy8gVGhlIHVzZXIgcHJvdmlkZWQgaGlzIHByZXZpb3VzIHBhc3N3b3JkLCBub3QgdGhlIGN1cnJlbnQgb25lXG4gICAgRk9SQklEREVOID0gNDAzMDAwLFxuICAgIElOVkFMSURfU0VTU0lPTl9UT0tFTiA9IDQwMzAwMSwgLy8gaW50ZXJuYWxcbiAgICBSRVFVRVNUX0hBU19FWFBJUkVEID0gNDAzMDAyLCAvLyB0aGUgdGltZXN0YW1wIG9yIGV4cGlyYXRpb24gb2YgdGhlIHRva2VuIHVzZWQgZXhjZWVkZWQgdGhlIGFsbG93ZWQgdGltZSB3aW5kb3dcbiAgICBJTlZBTElEX1JFUVVFU1RfU0lHTkFUVVJFID0gNDAzMDAzLFxuICAgIERVUExJQ0FURV9OT05DRSA9IDQwMzAwNCxcbiAgICBVTkFVVEhPUklaRURfVVNFUiA9IDQwMzAwNSwgLy8gdGhlIHVzZXIgaWQgcGFzc2VkIGlzIG5vdCB2YWxpZCBmb3IgdGhpcyBzaXRlXG4gICAgU0VOU0lUSVZFX0RBVEFfU0VOVF9PVkVSX0hUVFAgPSA0MDMwMDYsIC8vIHdoZW4gc2VuZGluZyB0aGUgc2VjcmV0IGtleSBpbiBSRVNUIGl0IGhhcyB0byBiZSBvdmVyIEhUVFBTXG4gICAgUEVSTUlTU0lPTl9ERU5JRUQgPSA0MDMwMDcsIC8vIENvbW1lbnRzIHNlcnZlciAtIFBlcm1pc3Npb24gZGVuaWVkIChyZWFkT25seSxtb2RlcmF0aW9uIHNpdGUpLlxuICAgIElOVkFMSURfT1BFTklEX1VSTCA9IDQwMzAwOCwgLy8gY2Fubm90IGZpbmQgYW4gb3BlbklkIGVuZHBvaW50IG9uIHRoZSB1cmwgb3IgdXNlcm5hbWUgZ2l2ZW4gZm9yIG9wZW5JZCBsb2dpblxuICAgIFBST1ZJREVSX1NFU1NJT05fRVhQSVJFRCA9IDQwMzAwOSwgLy8gdGhlIHVzZXIgc2Vzc2lvbiBmb3IgdGhpcyBwcm92aWRlciBpcyBleHBpcmVkXG4gICAgSU5WQUxJRF9TRUNSRVQgPSA0MDMwMTAsIC8vIHRoZSByZXF1ZXN0IGhhcyBhbiBpbnZhbGlkIHNlY3JldCBrZXlcbiAgICBTRVNTSU9OX0hBU19FWFBJUkVEID0gNDAzMDExLCAvLyB0aGUgc2Vzc2lvbiBmb3IgdGhpcyB1c2VyIGhhcyBleHBpcmVkXG4gICAgTk9fVkFMSURfU0VTU0lPTiA9IDQwMzAxMiwgLy8gcmVxdWVzdGVkIHVzZXIgaGFzIG5vIHZhbGlkIHNlc3Npb25cbiAgICBVTlZFUklGSUVEX1VTRVIgPSA0MDMwMTMsIC8vIHRoZSB1c2VyIGlzIG5vdCB2ZXJpZmllZCBpbiBTU08gc2Vzc2lvblxuICAgIE1JU1NJTkdfUkVRVUVTVF9SRUZFUlJFUiA9IDQwMzAxNSwgLy8gd2UgY2FuJ3QgdmFsaWRhdGUgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgcmVmZXJyZXIgaGVhZGVyIGlzIG1pc3NpbmdcbiAgICBVTkVYUEVDVEVEX1BST1ZJREVSX1VTRVIgPSA0MDMwMTcsIC8vIHRoZSBsb2dnZWQgaW4gdXNlciBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgb25lIGV4cGVjdGVkXG4gICAgUEVSTUlTU0lPTl9OT1RfUkVRVUVTVEVEID0gNDAzMDIyLCAvLyB0aGUgYWN0aW9uIG5lZWRzIGEgdXNlciBwZXJtaXNzaW9uIGFuZCBpdCB3YXMgbm90IHJlcXVlc3RlZFxuICAgIE5PX1VTRVJfUEVSTUlTU0lPTiA9IDQwMzAyMywgLy8gdGhlIGFjdGlvbiBuZWVkcyBhIHVzZXIgcGVybWlzc2lvbiBhbmQgd2UgZG9uJ3QgaGF2ZSBvbmVcbiAgICBQUk9WSURFUl9MSU1JVF9SRUFDSEVEID0gNDAzMDI0LCAvLyB0aGUgcHJvdmlkZXIgbGltaXQgZm9yIHRoaXMgYWN0aW9uIHdhcyBleGNlZWRlZFxuICAgIElOVkFMSURfVE9LRU4gPSA0MDMwMjUsIC8vIE9BdXRoMlxuICAgIFVOQVVUSE9SSVpFRF9BQ0NFU1NfRVJST1IgPSA0MDMwMjYsIC8vIENhbGxzIHRvIGFjY291bnRzLmlzQXZhaWxhYmxlTG9naW5JRCBXaGVuIHByZXZlbnRMb2dpbklESGFydmVzdGluZyA9IHRydWUgc2hvdWxkIHJldHVybiBhbiBhcHByb3ByaWF0ZSA0MDN4eHggdW5hdXRob3JpemVkIGFjY2VzcyBlcnJvci5cbiAgICBESUZGRVJFTlRfVVNFUl9GT1JfUkVBVVRIID0gNDAzMDI3LCAvLyBEaWZmZXJlbnQgdXNlciB0cmllZCB0byByZS1hdXRob3JpemUuXG4gICAgU0VTU0lPTl9FWFBJUkVEX1JFVFJZID0gNDAzMDMwLCAvLyBJbm5lciBjb2RlIC0gd2hlbiB0aGUgZmFjZWJvb2sgc2Vzc2lvbiBpcyBleHBpcmVkIGFuZCB0aGUgY2xpZW50IHdhaXRzIGZvciBGQiBvbiBwYWdlIHRvIGxvYWRcbiAgICBBUFBST1ZFRF9CWV9NT0RFUkFUT1IgPSA0MDMwMzEsIC8vIGNvbW1lbnRzIC0gY2FudCBmbGFnIGNvbW1lbnQsIGl0IHdhcyBhcHByb3ZlZCBieSB0aGUgbW9kZXJhdG9yIGFscmVhZHkuXG4gICAgVE9LRU5fSEFTX1JFTkVXRUQgPSA0MDMwMzIsIC8vIHRoZSB0b2tlbiBpcyBubyBsb25nZXIgdmFsaWQsIGJ1dCB3ZSBoYXZlIG5ldyB0b2tlbiB0byBwcm92aWRlXG4gICAgTk9fVVNFUl9DT09LSUUgPSA0MDMwMzUsIC8vIG5vIHVzZXIgY29va2llXG4gICAgVU5BVVRIT1JJWkVEX1BBUlRORVIgPSA0MDMwMzYsIC8vIHBhcnRuZXIgaXMgZGlzYWJsZWRcbiAgICBQT1NUX0RFTklFRCA9IDQwMzAzNywgLy8gQ29tbWVudHMgc2VydmVyIC0gUG9zdCBkZW5pZWQgd2hlbiB0aGUgdXNlciB0cmllZCB0byByZXZpZXcgdHdpY2UuXG4gICAgTk9fTE9HSU5fVElDS0VUID0gNDAzMDQwLCAvLyBubyBsb2dpbiB0aWNrZXQgaW4gY2FsbGJhY2sgdXJsXG4gICAgQUNDT1VOVF9ESVNBQkxFRCA9IDQwMzA0MSwgLy8gRm9yIGFjY291bnRzIC0gd2hlbiBncy5hY2NvdW50cy5Jc0FjdGl2ZT1mYWxzZVxuICAgIElOVkFMSURfTE9HSU5JRCA9IDQwMzA0MiwgLy8gRm9yIGFjY291bnRzIC0gd2hlbiB0cnlpbmcgdG8gbG9naW4gd2l0aCBhIGxvZ2luSUQgdGhhdCBkbyBub3QgZXhpc3RzXG4gICAgTE9HSU5fSURFTlRJRklFUl9FWElTVFMgPSA0MDMwNDMsIC8vIEZvciBhY2NvdW50OiBJZiBwcm92aWRlckVtYWlsIGlzIGRlZmluZWQgYXMgYSBsb2dpbklkZW50aWZpZXIgaW4gdGhlIHBvbGljeSwgYW5kIHRoZSBlbWFpbCBhZGRyZXNzIHJlY2VpdmVkIGZyb20gdGhlIHByb3ZpZGVyIGV4aXN0cyBpbiB0aGUgZ3MubG9naW5JZGVudGlmaWVycyBjb2xsZWN0aW9uIGJ1dCBhc3NvY2lhdGVkIHdpdGggYSBkaWZmZXJlbnQgVVVJRCB0aGFuIHRoZSBjdXJyZW50IHVzZXIsIHRoZW4gcmV0dXJuIFwiTG9naW4gaWRlbnRpZmllciBleGlzdHNcIiBlcnJvciBjb2RlICg0MDN4eHgpLlxuICAgIFVOREVSQUdFX1VTRVIgPSA0MDMwNDQsIC8vIEZvciBDT1BQQSBjb21wbGlhbmNlIChDaGlsZHJlbidzIE9ubGluZSBQcml2YWN5IFByb3RlY3Rpb24gQWN0KVxuICAgIElOVkFMSURfU0lURV9DT05GSUdVUkFUSU9OX0VSUk9SID0gNDAzMDQ1LCAvLyBGb3IgYWNjb3VudHMgLSBzaXRlIERTIGlzIGVuYWJsZWQgdGhvdWdoIG5vIERTU2l6ZSB3YXMgY29uZmlndXJlZC5cbiAgICBMT0dJTklEX0RPRVNfTk9UX0VYSVNUID0gNDAzMDQ3LCAvLyBGb3IgYWNjb3VudHMgLSB3aGVuIHRyeWluZyB0byByZXNldCBwYXNzd29yZCB3aXRoIGEgbG9naW5JRCB0aGF0IGRvIG5vdCBleGlzdHNcbiAgICBBUElfUkFURV9MSU1JVF9FWENFRURFRCA9IDQwMzA0OCxcbiAgICBQRU5ESU5HX1BBU1NXT1JEX0NIQU5HRSA9IDQwMzEwMCwgLy8gVGhlIHVzZXIncyBwYXNzd29yZCBuZWVkcyB0byBiZSBjaGFuZ2VkXG4gICAgQUNDT1VOVF9QRU5ESU5HX1RGQV9WRVJJRklDQVRJT04gPSA0MDMxMDEsXG4gICAgQUNDT1VOVF9QRU5ESU5HX1RGQV9SRUdJU1RSQVRJT04gPSA0MDMxMDIsXG4gICAgQUNDT1VOVF9QRU5ESU5HX1JFQ0VOVF9MT0dJTiA9IDQwMzExMCxcbiAgICBBQ0NPVU5UX1RFTVBPUkFSSUxZX0xPQ0tFRF9PVVQgPSA0MDMxMjAsIC8vIFRvbyBtYW55IGxvZ2luIGF0dGVtcHRzOyBhY2NvdW50IGxvY2tlZC1vdXRcbiAgICBSRURVTkRBTlRfT1BFUkFUSU9OID0gNDAzMjAwLCAvLyBUaGUgY2xpZW50IHBlcmZvcm1lZCBhbiBvcGVyYXRpb24gdGhhdCBpcyByZWR1bmRhbnRcbiAgICBJTlZBTElEX0FQUExJQ0FUSU9OX0lEID0gNDAzMjAxLCAvLyBUaGUgYXBwIGlkIHByb3ZpZGVkIGlzIGRpZmZlcmVudCB0aGFuIHRoZSBvbmUgY29uZmlndXJlZCBmb3IgdGhlIHNpdGVcbiAgICBOT1RfRk9VTkQgPSA0MDQwMDAsIC8vIENvbW1lbnRzIHNlcnZlciAtIENhdGVnb3J5IG5vdCBmb3VuZC4gQWNjb3VudHMgLSBlbWFpbCB2ZXJpZmljYXRpb24gZmFpbGVkLCB1dWlkIG5vdCBmb3VuZC5cbiAgICBGUklFTkRfTk9UX0ZPVU5EID0gNDA0MDAxLCAvLyB0aGUgdXNlciBpZCBwcm92aWRlZCBhcyBhIHRhcmdldCBpcyBub3QgYSBmcmllbmQgZm9yIHRoZSBjdXJyZW50IHVzZXJcbiAgICBDQVRFR09SWV9OT1RfRk9VTkQgPSA0MDQwMDIsIC8vIENvbW1lbnRzIHNlcnZlciAtIENhdGVnb3J5IG5vdCBmb3VuZC5cbiAgICBVSURfTk9UX0ZPVU5EID0gNDA0MDAzLFxuICAgIFJFU09VUkNFX05PVF9GT1VORCA9IDQwNDAwNCwgLy8gQ2xpZW50IHNpZGUgLSBpbWFnZSBub3QgZm91bmQgYWZ0ZXIgdXBsb2FkXG4gICAgSU5WQUxJRF9BUElfTUVUSE9EID0gNDA1MDAxLCAvLyBpbnRlcm5hbCBmb3Igb3VyIEpTIEFQSVxuICAgIElERU5USVRZX0VYSVNUUyA9IDQwOTAwMSwgLy8gd2hlbiB0cnlpbmcgdG8gY29ubmVjdCB0byBhIHByb3ZpZGVyIHRoYXQgaXMgYWxyZWFkeSBjb25uZWN0ZWQgb3IgbGluayB0byBhbiBhbHJlYWR5IGxpbmtlZCBhY2NvdW50XG4gICAgR09ORSA9IDQxMDAwMCwgLy8gUmVzb3VyY2Ugbm8gbG9uZ2VyIGF2YWlsYWJsZS4gRGF0YSBLZXkgU2VydmVyIC0ga2V5IHJldm9rZWQvZXhwaXJlZC5cbiAgICBSRVFVRVNUX0VOVElUWV9UT09fTEFSR0UgPSA0MTMwMDEsIC8vIENvbW1lbnRzIHNlcnZlciAtIFJlcXVlc3QgdG8gbGFyZ2VcbiAgICBDT01NRU5UX1RFWFRfVE9PX0xBUkdFID0gNDEzMDAyLCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBDb21tZW50IFRleHQgdG8gbGFyZ2UuXG4gICAgT0JKRUNUX1RPT19MQVJHRSA9IDQxMzAwMywgLy8gRGF0YVN0b3JlIG9iamVjdCBpcyB0b28gbGFyZ2VcbiAgICBQUk9GSUxFX1BIT1RPX1RPT19MQVJHRSA9IDQxMzAwNCwgLy8gUHJvZmlsZSBwaG90byBpcyB0b28gbGFyZ2UsIGV4Y2VlZHMgbWF4aW11bSBhbGxvd2VkIGNvbnRlbnQgbGVuZ3RoXG4gICAgUkVRVUVTVF9VUklfVE9PX0xPTkcgPSA0MTQwMDAsIC8vVGhlIFVSSSBwcm92aWRlZCB3YXMgdG9vIGxvbmcgZm9yIHRoZSBzZXJ2ZXIgdG8gcHJvY2Vzcy5cbiAgICBNSVNTSU5HX1VTRVJfUEhPVE8gPSA0MDkwMTAsIC8vIEVycm9yIC0gbWlzc2luZyB1c2VyIHBob3RvXG4gICAgQ09VTlRFUl9OT1RfUkVHSVNURVJFRCA9IDQwOTAxMSwgLy8gQ291bnRlciBub3QgcmVnaXN0ZXJlZFxuICAgIElOVkFMSURfR01JRF9USUNLRVQgPSA0MDkwMTIsIC8vIGdtaWQgdGlja2V0IGlzIG5vdCB2YWxpZFxuICAgIFNBTUxfTUFQUEVEX0FUVFJJQlVURV9OT1RfRk9VTkQgPSA0MDkwMTMsIC8vIFVzZWQgd2hlbiBtYXBwZWQgYXR0cmlidXRlIHZhbHVlIGZvciBwcm92aWRlclVJRCBjYW5ub3QgYmUgcmV0cmVpdmVkXG4gICAgU0FNTF9DRVJUSUZJQ0FURV9OT1RfRk9VTkQgPSA0MDkwMTQsIC8vIFVzZWQgd2hlbiBTQU1MIGNlcnRpZmljYXRlIGNvdWxkIG5vdCBiZSByZXRyZWl2ZWQuXG4gICAgU0FNTF9NRVNTQUdFX05PVF9GT1VORCA9IDQwOTAxNSwgLy8gVXNlZCB3aGVuIGNhY2hlZCBTQU1MIG1lc3NhZ2UgY291bGQgbm90IGJlIHJldHJlaXZlZC5cbiAgICBHRU5FUkFMX1NFUlZFUl9FUlJPUiA9IDUwMDAwMSxcbiAgICBTRVJWRVJfTE9HSU5fRVJST1IgPSA1MDAwMDIsIC8vIGdlbmVyYWwgZXJyb3IgZHVyaW5nIHRoZSBsb2dpbiBwcm9jZXNzXG4gICAgREVGQVVMVF9BUFBMSUNBVElPTl9DT05GSUdVUkFUSU9OX0VSUk9SID0gNTAwMDAzLCAvLyBGb3IgbXVsdGlwbGUgREMgLSB3aGVuIG5vIGRlZmF1bHQgYXBwbGljYXRpb24gY2FuIGJlIGZvdW5kIGluIERlZmF1bHRBcHBsaWNhdGlvbnMuY29uZmlnLiBXaXRoIGVycm9yIGRldGFpbHMgb2Y6IFwiRGVmYXVsdCBhcHBsaWNhdGlvbiBpc24ndCBjb25maWd1cmVkIGZvciBkYXRhQ2VudGVyXCJcbiAgICBTRVNTSU9OX01JR1JBVElPTl9FUlJPUiA9IDUwMDAxNCwgLy8gZXJyb3IgaW4gbWlncmF0aW5nIG9sZCB0byBuZXcgZmFjZWJvb2sgc2Vzc2lvblxuICAgIFBST1ZJREVSX0VSUk9SID0gNTAwMDIzLCAvLyBnZW5lcmFsIGVycm9yIGZyb20gdGhlIHByb3ZpZGVyXG4gICAgREFUQUJBU0VfRVJST1IgPSA1MDAwMjgsXG4gICAgVVNFUk5BTUVfUkVRVUlSRUQgPSA1MDAwMjksIC8vIElubmVyIGNvZGVcbiAgICBOT19QUk9WSURFUl9BUFBMSUNBVElPTiA9IDUwMDAzMSwgLy8gdGhlIGFwcGxpY2F0aW9uIGZvciB0aGlzIHByb3ZpZGVyIGlzIG5vdCBkZWZpbmVkIGZvciB0aGlzIHNpdGVcbiAgICBMT0FEX0ZBSUxFRCA9IDUwMDAzMiwgLy8gY2xpZW50IGVycm9yXG4gICAgSU5WQUxJRF9FTlZJUk9OTUVOVF9DT05GSUcgPSA1MDAwMzMsIC8vIEluIGNhc2UgdGhlcmUgaXMgbm8gdGFyZ2V0IGVudmlyb25tZW50IGluIHRoZSBjb25maWcgZmlsZSB3ZSdkIHJldHVybiB3aXRoICBpbnZhbGlkX2Vudmlyb25tZW50X2NvbmZpZyBlcnJvci5cbiAgICBFUlJPUl9EVVJJTkdfQkFDS0VORF9PUEVSQVRJT04gPSA1MDAwMzQsXG4gICAgVElNRU9VVCA9IDUwNDAwMSwgLy8gb3V0Z29pbmcgcmVxdWVzdCBoYWQgdGltZWQgb3V0XG4gICAgQ0xJRU5UVElNRU9VVCA9IDUwNDAwMiwgLy8gRm9yIHNlcnZlciBTREtzIC0gYSBjbGllbnQgc2lkZSB0aW1lb3V0XG4gICAgSU5WQUxJRF9VUkwgPSA0MDQwMDQsIC8vIGVtYmVkLmx5IDQwNCBlcnJvciBtZXNzYWdlIC0gdXJsIGlzIG5vdCB2YWxpZFxuICAgIE1FRElBX0lURU1TX05PVF9TVVBQT1JURUQgPSA0MDEwMDEsIC8vIE1lZGlhIGl0ZW1zIGEgbm90IGFsbG93ZWQgZm9yIHRoaXMgY2F0ZWdvcnlcbiAgICBNSVNTSU5HX0VSUk9SX0NPREUgPSA1OTk5OTksXG4gICAgVEhJU19BVVRIRU5USUNBVElPTl9NRVRIT0RfSVNfQ1VSUkVOVExZX0RJU0FCTEVEICA9IDQwMzMwMCxcbiAgICBGT1JDRV9MSU5LX0xPR0lOX0lERU5USUZJRVJfRVhJU1RTID0gNDA5MDAzLFxuICAgIFBBU1NLRVlfQVVUSEVOVElDQVRPUl9SRUdJU1RFUkVEID0gNDAwMTMwLFxuICAgIFBBU1NLRVlfQUJPUlRFRCA9IDQwMDEzMSxcbiAgICBQQVNTS0VZX0VSUk9SID0gNTAwMTMxXG59XG5leHBvcnQgY29uc3QgZW51bSBHU0Vycm9yRGV0YWlscyB7XG4gICAgTm9uZSA9IDAsXG4gICAgU2FtZV9wYXNzd29yZCA9IDEwMDAwMSwgLy8gUmVzZXQgUGFzc3dvcmQgLSBcIidvbGRQYXNzd29yZCcgY2Fubm90IGJlIHRoZSBzYW1lIGFzICduZXdQYXNzd29yZCdcIlxuICAgIEludmFsaWRfcGFzc3dvcmQgPSAxMDAwMDIsIC8vIFJlc2V0IFBhc3N3b3JkIC0gY3VycmVudCBwYXNzd29yZCBpcyB3cm9uZy9pbnZhbGlkXG4gICAgSW52YWxpZF9jb3VudGVyc19xdWVyeV93aXRoX2N1cnNvciA9IDEwMDAwMyxcbn1cbiIsImltcG9ydCB7IElDb25maWd1cmF0aW9uIH0gZnJvbSAnc3JjL2ZpZG0vR2lneWEuSnMuU2FtbFByb3h5L2FwcC9JQ29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBJUHJveHlBY3Rpb24sIHBhcnNlVXJsIH0gZnJvbSAnc3JjL2ZpZG0vR2lneWEuSnMuU2FtbFByb3h5L2FwcC9wYXJzZVVybCc7XG5pbXBvcnQgeyBmaW5kQ29uZmlndXJhdGlvbiwgcGFyc2VDb25maWd1cmF0aW9uIH0gZnJvbSAnc3JjL2ZpZG0vR2lneWEuSnMuU2FtbFByb3h5L2FwcC9jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IGVuc3VyZUpzU2RrTG9hZGVkIH0gZnJvbSAnc3JjL3V0aWxzL0dpZ3lhLkpzLkJvb3QvYXBwL2Jvb3QnO1xuXG4vLyoqIFRoaXMgaXMgaW50ZW50aW9uYWwhIHdlIHdhbnQgdG8gcGFja2FnZSBnaWd5YS5ib290IHdpdGhpbiB0aGUgZ2lneWFTYW1sLnByb3h5IC4gKipcblxuZXhwb3J0IGZ1bmN0aW9uIGJvb3RzdHJhcChkb25lOiAoYWN0aW9uOiBJUHJveHlBY3Rpb24sIGNvbmZpZ3VyYXRpb246IElDb25maWd1cmF0aW9uKSA9PiB2b2lkKSB7XG4gICAgdmFyIGFjdGlvbiA9IHBhcnNlVXJsKGxvY2F0aW9uLnNlYXJjaCk7XG4gICAgdmFyIHVucGFyc2VkQ29uZmlnID0gZmluZENvbmZpZ3VyYXRpb24oKTtcbiAgICBlbnN1cmVKc1Nka0xvYWRlZChcbiAgICAgICAgdW5wYXJzZWRDb25maWcuYXBpS2V5LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgY29uZmlndXJhdGlvbiA9IHBhcnNlQ29uZmlndXJhdGlvbih1bnBhcnNlZENvbmZpZyk7XG4gICAgICAgICAgICBjaGFuZ2VMb2dvdXRCZWhhdmlvdXIoKTtcbiAgICAgICAgICAgIGRvbmUoYWN0aW9uLCBjb25maWd1cmF0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgdHJ1ZSxcbiAgICApO1xufVxuZnVuY3Rpb24gY2hhbmdlTG9nb3V0QmVoYXZpb3VyKCkge1xuICAgIC8vIGNoYW5nZSBzb2NpYWxpemVMb2dvdXQgbm90IHRvIGxvZ291dCBiZWZvcmUgdGhlIHNlcnZlciByZXNwb25zZSwgYW5kIHRvIGFsd2F5cyBnbyB0byB0aGUgc2VydmVyXG4gICAgZ2lneWEuXy5sb2dvdXRCZWhhdmlvdXIubG9nb3V0QmVmb3JlU2VydmVyUmVzcG9uc2UgPSBmYWxzZTtcbiAgICBnaWd5YS5fLmxvZ291dEJlaGF2aW91ci5hbHdheXNTZW5kTG9nb3V0VG9TZXJ2ZXIgPSB0cnVlO1xufVxuIiwiaW1wb3J0IHsgSUNvbmZpZ3VyYXRpb24gfSBmcm9tICdzcmMvZmlkbS9HaWd5YS5Kcy5TYW1sUHJveHkvYXBwL0lDb25maWd1cmF0aW9uJztcbmltcG9ydCB7IHVybFBhcmFtcywgZGVzZXJpYWxpemVKU09OLCBvYmplY3RNZXJnZSB9IGZyb20gJ3NyYy9maWRtL0dpZ3lhLkpzLlNhbWxQcm94eS9hcHAvdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElVbnBhcnNlY0NvbmZpZ3VyYXRpb24ge1xuICAgIGFwaUtleTogc3RyaW5nO1xuICAgIGNvbmZpZ0pzb246IHN0cmluZztcbn1cbmZ1bmN0aW9uIGZpbmRTY3JpcHRFbGVtZW50KCk6IEhUTUxTY3JpcHRFbGVtZW50IHtcbiAgICB2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcbiAgICB2YXIgc2NyaXB0RWxlbWVudDogSFRNTFNjcmlwdEVsZW1lbnQ7XG5cbiAgICBmb3IgKHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICB2YXIgc2NyaXB0ID0gc2NyaXB0c1tpXTtcbiAgICAgICAgdmFyIHNyYyA9IHNjcmlwdC5zcmMudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHNyYyAhPSAnJykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChzcmMuaW5kZXhPZignLy9jZG5kKi5naWd5YS5jb20nKSA+IC0xIHx8IHNyYy5pbmRleE9mKCcvL2NkbnNkKi5naWd5YS5jb20nKSA+IC0xIHx8IHNyYy5pbmRleE9mKCc/YXBpa2V5PScpID4gLTEpICYmXG4gICAgICAgICAgICAgICAgc3JjLmluZGV4T2YoJ2dpZ3lhLnNhbWwuanMnKSA+IC0xXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzY3JpcHRFbGVtZW50ID0gc2NyaXB0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjcmlwdEVsZW1lbnQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZmluZENvbmZpZ3VyYXRpb24oKTogSVVucGFyc2VjQ29uZmlndXJhdGlvbiB7XG4gICAgLy8gZmluZCBzY3JpcHQgZWxlbWVudFxuICAgIHZhciBzY3JpcHRFbGVtZW50ID0gZmluZFNjcmlwdEVsZW1lbnQoKTtcblxuICAgIGlmICghc2NyaXB0RWxlbWVudCkgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQgdG8gZmluZCBzY3JpcHQgZWxlbWVudCcpO1xuXG4gICAgdmFyIGFwaUtleSA9IHVybFBhcmFtcyhzY3JpcHRFbGVtZW50LnNyYylbJ2FwaUtleSddO1xuICAgIHZhciBjb25maWdKc29uID0gc2NyaXB0RWxlbWVudC5pbm5lckhUTUwucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xuXG4gICAgaWYgKCFjb25maWdKc29uKSB0aHJvdyBuZXcgRXJyb3IoJ05vIG9iamVjdCBwYXJhbXMgd2FzIGZvdW5kLicpO1xuXG4gICAgaWYgKCFhcGlLZXkpIHRocm93IG5ldyBFcnJvcignZmFpbGVkIHRvIGZpbmQgYXBpIGtleScpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXBpS2V5OiBhcGlLZXksXG4gICAgICAgIGNvbmZpZ0pzb246IGNvbmZpZ0pzb24sXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbmZpZ3VyYXRpb24odW5wYXJzZWRDb25maWc6IElVbnBhcnNlY0NvbmZpZ3VyYXRpb24pOiBJQ29uZmlndXJhdGlvbiB7XG4gICAgdmFyIHNjcmlwdENvbmYgPSBkZXNlcmlhbGl6ZUpTT04odW5wYXJzZWRDb25maWcuY29uZmlnSnNvbik7XG5cbiAgICBpZiAoIXNjcmlwdENvbmYpIHRocm93IG5ldyBFcnJvcignVGhlIHBhcmFtcyBvYmplY3QgaXMgbm90IHZhbGlkLicpO1xuXG4gICAgdmFyIGNvbmZpZ3VyYXRpb25PYmogPSBvYmplY3RNZXJnZTxJQ29uZmlndXJhdGlvbj4oXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFwaUtleTogdW5wYXJzZWRDb25maWcuYXBpS2V5LFxuICAgICAgICB9LFxuICAgICAgICBzY3JpcHRDb25mLFxuICAgICk7XG5cbiAgICBpZiAoIWNvbmZpZ3VyYXRpb25PYmoubG9naW5VUkwpIHRocm93IG5ldyBFcnJvcihcIlRoZSAnbG9naW5VUkwnIHBhcmFtIGlzIG5vdCB2YWxpZC5cIik7XG5cbiAgICByZXR1cm4gY29uZmlndXJhdGlvbk9iajtcbn1cbiIsImltcG9ydCB7IGJvb3RzdHJhcCB9IGZyb20gJ3NyYy9maWRtL0dpZ3lhLkpzLlNhbWxQcm94eS9hcHAvYm9vdHN0cmFwJztcbmltcG9ydCB7IGZpbmRDb25maWd1cmF0aW9uLCBwYXJzZUNvbmZpZ3VyYXRpb24gfSBmcm9tICdzcmMvZmlkbS9HaWd5YS5Kcy5TYW1sUHJveHkvYXBwL2NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHtcbiAgICBwcm9jZXNzQWZ0ZXJMb2dpbixcbiAgICBwcm9jZXNzRm9yY2VMb2dpbiwgcHJvY2Vzc0luaXRTU08sXG4gICAgcHJvY2Vzc0xvZ2luLFxuICAgIHByb2Nlc3NQYXNzaXZlTG9naW4sXG59IGZyb20gJ3NyYy9maWRtL0dpZ3lhLkpzLlNhbWxQcm94eS9hcHAvbG9naW4nO1xuaW1wb3J0IHsgcHJvY2Vzc0xvZ291dCB9IGZyb20gJ3NyYy9maWRtL0dpZ3lhLkpzLlNhbWxQcm94eS9hcHAvbG9nb3V0JztcbmltcG9ydCB7IHBhcnNlVXJsLCBQcm94eU1vZGUgfSBmcm9tICdzcmMvZmlkbS9HaWd5YS5Kcy5TYW1sUHJveHkvYXBwL3BhcnNlVXJsJztcbmltcG9ydCB7IHByb2Nlc3NSZXF1ZXN0IH0gZnJvbSAnc3JjL2ZpZG0vR2lneWEuSnMuU2FtbFByb3h5L2FwcC9zYW1sUHJveHknO1xuaW1wb3J0IHtcbiAgICBkZXNlcmlhbGl6ZUpTT04sXG4gICAgZ2V0TG9naW5Ub2tlbiwgaXNMb2dnZWRJbiwgbG9hZENvbnRleHQsIGxvZ291dCwgb2JqZWN0TWVyZ2UsXG4gICAgb3BlbklmcmFtZSxcbiAgICByZWRpcmVjdFRvU2FtbEVuZFBvbnQsXG4gICAgcmVwb3J0RXJyb3IsXG4gICAgc2F2ZUNvbnRleHQsXG4gICAgc2V0VXJsUGFyYW1zLCB0ZW1wbGF0ZUZpbGwsXG4gICAgdXJsUGFyYW1zLFxufSBmcm9tICcuL3V0aWxzJztcblxuaWYoIXdpbmRvd1snZ2lneWEnXSkge1xuICAgIHdpbmRvd1snZ2lneWEnXSA9IHt9IGFzIGFueTtcbn1cbmlmICghd2luZG93WydnaWd5YVNhbWwnXSkge1xuICAgIHdpbmRvd1snZ2lneWFTYW1sJ10gPSB7fTtcbn1cbmNvbnN0IGdpZ3lhU2FtbCA9IHdpbmRvd1snZ2lneWFTYW1sJ107XG5pZiAoIWdpZ3lhU2FtbC5wcm94eSkge1xuICAgIGdpZ3lhU2FtbC5wcm94eSA9IHtcbiAgICAgICAgYm9vdHN0cmFwLFxuICAgICAgICBmaW5kQ29uZmlndXJhdGlvbixcbiAgICAgICAgcGFyc2VDb25maWd1cmF0aW9uLFxuICAgICAgICBwcm9jZXNzTG9naW4sXG4gICAgICAgIHByb2Nlc3NGb3JjZUxvZ2luLFxuICAgICAgICBwcm9jZXNzQWZ0ZXJMb2dpbixcbiAgICAgICAgcHJvY2Vzc1Bhc3NpdmVMb2dpbixcbiAgICAgICAgcHJvY2Vzc0luaXRTU08sXG4gICAgICAgIHByb2Nlc3NMb2dvdXQsXG4gICAgICAgIFByb3h5TW9kZSxcbiAgICAgICAgcGFyc2VVcmwsXG4gICAgICAgIHByb2Nlc3NSZXF1ZXN0XG4gICAgfTtcbn1cbmlmICghZ2lneWFTYW1sLnByb3h5LnV0aWxzKSB7XG4gICAgZ2lneWFTYW1sLnByb3h5LnV0aWxzID0ge1xuICAgICAgICB1cmxQYXJhbXMsXG4gICAgICAgIG9wZW5JZnJhbWUsXG4gICAgICAgIHJlcG9ydEVycm9yLFxuICAgICAgICByZWRpcmVjdFRvU2FtbEVuZFBvbnQsXG4gICAgICAgIHNldFVybFBhcmFtcyxcbiAgICAgICAgZ2V0TG9naW5Ub2tlbixcbiAgICAgICAgc2F2ZUNvbnRleHQsXG4gICAgICAgIGxvYWRDb250ZXh0LFxuICAgICAgICB0ZW1wbGF0ZUZpbGwsXG4gICAgICAgIGRlc2VyaWFsaXplSlNPTixcbiAgICAgICAgb2JqZWN0TWVyZ2UsXG4gICAgICAgIGlzTG9nZ2VkSW4sXG4gICAgICAgIGxvZ291dFxuICAgIH07XG59XG5naWd5YVNhbWwucHJveHkuYm9vdHN0cmFwKHByb2Nlc3NSZXF1ZXN0KTtcblxuY29uc3QgcHJveHkgPSBnaWd5YVNhbWwucHJveHk7XG5leHBvcnQge1xuICAgIHByb3h5LFxuICAgIGJvb3RzdHJhcCxcbiAgICBmaW5kQ29uZmlndXJhdGlvbixcbiAgICBwYXJzZUNvbmZpZ3VyYXRpb24sXG4gICAgcHJvY2Vzc0xvZ2luLFxuICAgIHByb2Nlc3NGb3JjZUxvZ2luLFxuICAgIHByb2Nlc3NBZnRlckxvZ2luLFxuICAgIHByb2Nlc3NQYXNzaXZlTG9naW4sXG4gICAgcHJvY2Vzc0luaXRTU08sXG4gICAgcHJvY2Vzc0xvZ291dCxcbiAgICBQcm94eU1vZGUsXG4gICAgcGFyc2VVcmwsXG4gICAgcHJvY2Vzc1JlcXVlc3QsXG4gICAgdXJsUGFyYW1zLFxuICAgIG9wZW5JZnJhbWUsXG4gICAgcmVwb3J0RXJyb3IsXG4gICAgcmVkaXJlY3RUb1NhbWxFbmRQb250LFxuICAgIHNldFVybFBhcmFtcyxcbiAgICBnZXRMb2dpblRva2VuLFxuICAgIHNhdmVDb250ZXh0LFxuICAgIGxvYWRDb250ZXh0LFxuICAgIHRlbXBsYXRlRmlsbCxcbiAgICBkZXNlcmlhbGl6ZUpTT04sXG4gICAgb2JqZWN0TWVyZ2UsXG4gICAgaXNMb2dnZWRJbixcbiAgICBsb2dvdXRcbn07IiwiaW1wb3J0IHsgSUNvbmZpZ3VyYXRpb24gfSBmcm9tICdzcmMvZmlkbS9HaWd5YS5Kcy5TYW1sUHJveHkvYXBwL0lDb25maWd1cmF0aW9uJztcbmltcG9ydCB7IElQcm94eUFjdGlvbiB9IGZyb20gJ3NyYy9maWRtL0dpZ3lhLkpzLlNhbWxQcm94eS9hcHAvcGFyc2VVcmwnO1xuaW1wb3J0IHtcbiAgICBpc0xvZ2dlZEluLFxuICAgIHJlZGlyZWN0VG9TYW1sRW5kUG9udCxcbiAgICBnZXRMb2dpblRva2VuLFxuICAgIHNhdmVDb250ZXh0LFxuICAgIHJlZGlyZWN0LFxuICAgIGxvYWRDb250ZXh0LFxuICAgIGdldExvZ2luVG9rZW5FeHBpcmF0aW9uXG59IGZyb20gJ3NyYy9maWRtL0dpZ3lhLkpzLlNhbWxQcm94eS9hcHAvdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0xvZ2luKGFjdGlvbjogSVByb3h5QWN0aW9uLCBjb25maWd1cmF0aW9uOiBJQ29uZmlndXJhdGlvbikge1xuICAgIGlzTG9nZ2VkSW4obG9nZ2VkSW4gPT4ge1xuICAgICAgICBpZiAobG9nZ2VkSW4pe1xuICAgICAgICAgICAgY29uc3QgbG9naW5Ub2tlbkV4cCA9IGFjdGlvbi5wYXJhbXNbXCJsb2dpblRva2VuRXhwXCJdID8/IGdldExvZ2luVG9rZW5FeHBpcmF0aW9uKGNvbmZpZ3VyYXRpb24uYXBpS2V5KTtcbiAgICAgICAgICAgIHJlZGlyZWN0VG9TYW1sRW5kUG9udChcbiAgICAgICAgICAgICAgICAnaWRwL3Nzby9jb250aW51ZScsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzYW1sQ29udGV4dDogYWN0aW9uLnNhbWxDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICBsb2dpblRva2VuOiBnZXRMb2dpblRva2VuKGNvbmZpZ3VyYXRpb24uYXBpS2V5KSxcbiAgICAgICAgICAgICAgICAgICAgbG9naW5Ub2tlbkV4cDogbG9naW5Ub2tlbkV4cFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29uZmlndXJhdGlvbi5hcGlLZXksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIC8vIG5vdCBsb2dnZWQgaW5cbiAgICAgICAgZWxzZSBwcm9jZXNzRm9yY2VMb2dpbihhY3Rpb24sIGNvbmZpZ3VyYXRpb24pO1xuICAgIH0sIGNvbmZpZ3VyYXRpb24uYXBpS2V5KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NGb3JjZUxvZ2luKGFjdGlvbjogSVByb3h5QWN0aW9uLCBjb25maWd1cmF0aW9uOiBJQ29uZmlndXJhdGlvbikge1xuICAgIGF3YWl0IGdpZ3lhLl8uYXBpQWRhcHRlcnMud2ViLnRva2VuU3RvcmUucmVtb3ZlKCk7XG4gICAgLy8gc2F2ZSBzYW1sQ29udGV4dCB0byByZXRyaWV2ZSBpdCBpZiBuZWNlc3NhcnlcbiAgICBzYXZlQ29udGV4dChjb25maWd1cmF0aW9uLmFwaUtleSwgYWN0aW9uLCAoKSA9PiB7XG4gICAgICAgIC8vIFBhcmFtZXRlcnMgdG8gbG9naW5VUkwgbWlnaHQgYmUgc3VwcG9ydGVkIGluIHRoZSBmdXR1cmVcbiAgICAgICAgLy92YXIgYmFja1RvID0gdXRpbHMuc2V0VXJsUGFyYW1zKGxvY2F0aW9uLnRvU3RyaW5nKCksIHsgbW9kZTogUHJveHlNb2RlW1Byb3h5TW9kZS5fYWZ0ZXJMb2dpbl0gfSk7XG4gICAgICAgIHJlZGlyZWN0KGNvbmZpZ3VyYXRpb24ubG9naW5VUkwsIGFjdGlvbiwge1xuICAgICAgICAgICAgc2FtbENvbnRleHQ6IGFjdGlvbi5zYW1sQ29udGV4dCxcbiAgICAgICAgICAgIC8vcmVkaXJlY3RVUkw6IGJhY2tUb1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NBZnRlckxvZ2luKGFjdGlvbjogSVByb3h5QWN0aW9uLCBjb25maWd1cmF0aW9uOiBJQ29uZmlndXJhdGlvbikge1xuICAgIGxvYWRDb250ZXh0KGNvbmZpZ3VyYXRpb24uYXBpS2V5LCBzYXZlZENvbnRleHQgPT4ge1xuICAgICAgICBhY3Rpb24uc2FtbENvbnRleHQgPSBhY3Rpb24uc2FtbENvbnRleHQgfHwgc2F2ZWRDb250ZXh0LnNhbWxDb250ZXh0O1xuICAgICAgICBhY3Rpb24uc3BOYW1lID0gYWN0aW9uLnNwTmFtZSB8fCBzYXZlZENvbnRleHQuc3BOYW1lO1xuICAgICAgICBwcm9jZXNzUGFzc2l2ZUxvZ2luKGFjdGlvbiwgY29uZmlndXJhdGlvbik7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc1Bhc3NpdmVMb2dpbihhY3Rpb246IElQcm94eUFjdGlvbiwgY29uZmlndXJhdGlvbjogSUNvbmZpZ3VyYXRpb24pIHtcbiAgICBpc0xvZ2dlZEluKGxvZ2dlZEluID0+IHtcbiAgICAgICAgdmFyIGxvZ2luVG9rZW4gPSBsb2dnZWRJbiA/IGdldExvZ2luVG9rZW4oY29uZmlndXJhdGlvbi5hcGlLZXkpIDogbnVsbDtcbiAgICAgICAgY29uc3QgbG9naW5Ub2tlbkV4cCA9IGFjdGlvbi5wYXJhbXNbXCJsb2dpblRva2VuRXhwXCJdICA/PyBnZXRMb2dpblRva2VuRXhwaXJhdGlvbihjb25maWd1cmF0aW9uLmFwaUtleSk7XG4gICAgICAgIHJlZGlyZWN0VG9TYW1sRW5kUG9udChcbiAgICAgICAgICAgICdpZHAvc3NvL2NvbnRpbnVlJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzYW1sQ29udGV4dDogYWN0aW9uLnNhbWxDb250ZXh0LFxuICAgICAgICAgICAgICAgIGxvZ2luVG9rZW46IGxvZ2luVG9rZW4sXG4gICAgICAgICAgICAgICAgbG9naW5Ub2tlbkV4cDogbG9naW5Ub2tlbkV4cFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24uYXBpS2V5LFxuICAgICAgICApO1xuICAgIH0sIGNvbmZpZ3VyYXRpb24uYXBpS2V5KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzSW5pdFNTTyhhY3Rpb246IElQcm94eUFjdGlvbiwgY29uZmlndXJhdGlvbjogSUNvbmZpZ3VyYXRpb24pIHtcbiAgICBpc0xvZ2dlZEluKGxvZ2dlZEluID0+IHtcbiAgICAgICAgdmFyIGxvZ2luVG9rZW4gPSBsb2dnZWRJbiA/IGdldExvZ2luVG9rZW4oY29uZmlndXJhdGlvbi5hcGlLZXkpIDogbnVsbDtcbiAgICAgICAgY29uc3QgbG9naW5Ub2tlbkV4cCA9IGFjdGlvbi5wYXJhbXNbXCJsb2dpblRva2VuRXhwXCJdICA/PyBnZXRMb2dpblRva2VuRXhwaXJhdGlvbihjb25maWd1cmF0aW9uLmFwaUtleSk7XG4gICAgICAgIHJlZGlyZWN0VG9TYW1sRW5kUG9udChcbiAgICAgICAgICAgICdpZHAvc3NvL2luaXQnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNwTmFtZTogYWN0aW9uLnBhcmFtc1snc3BOYW1lJ10sXG4gICAgICAgICAgICAgICAgcmVkaXJlY3RVUkw6IGFjdGlvbi5wYXJhbXNbJ3JlZGlyZWN0VVJMJ10sXG4gICAgICAgICAgICAgICAgbG9naW5Ub2tlbjogbG9naW5Ub2tlbixcbiAgICAgICAgICAgICAgICBsb2dpblRva2VuRXhwOiBsb2dpblRva2VuRXhwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlndXJhdGlvbi5hcGlLZXksXG4gICAgICAgICk7XG4gICAgfSwgY29uZmlndXJhdGlvbi5hcGlLZXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0NhbmNlbChhY3Rpb246IElQcm94eUFjdGlvbiwgY29uZmlndXJhdGlvbjogSUNvbmZpZ3VyYXRpb24pIHtcbiAgICBhY3Rpb24ucGFyYW1zICYmIGFjdGlvbi5wYXJhbXMuc3RhdHVzQ29kZSAhPT0gdW5kZWZpbmVkID8gZW5jb2RlVVJJQ29tcG9uZW50KGFjdGlvbi5wYXJhbXMuc3RhdHVzQ29kZSkgOiBudWxsXG5cbiAgICByZWRpcmVjdFRvU2FtbEVuZFBvbnQoXG4gICAgICAgICdpZHAvc3NvL2NhbmNlbCcsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNhbWxDb250ZXh0OiBhY3Rpb24uc2FtbENvbnRleHQsXG4gICAgICAgICAgICBzdGF0dXNDb2RlOiBhY3Rpb24ucGFyYW1zICYmIGFjdGlvbi5wYXJhbXMuc3RhdHVzQ29kZSAhPT0gdW5kZWZpbmVkID8gZW5jb2RlVVJJQ29tcG9uZW50KGFjdGlvbi5wYXJhbXMuc3RhdHVzQ29kZSkgOiBudWxsLFxuICAgICAgICAgICAgY2FuY2VsQ29kZTogYWN0aW9uLnBhcmFtcyAmJiBhY3Rpb24ucGFyYW1zLmNhbmNlbENvZGUgIT0gdW5kZWZpbmVkID8gZW5jb2RlVVJJQ29tcG9uZW50KGFjdGlvbi5wYXJhbXMuY2FuY2VsQ29kZSkgOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpZ3VyYXRpb24uYXBpS2V5LFxuICAgICk7XG59XG5cbiIsImltcG9ydCB7IElDb25maWd1cmF0aW9uIH0gZnJvbSAnc3JjL2ZpZG0vR2lneWEuSnMuU2FtbFByb3h5L2FwcC9JQ29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBJUHJveHlBY3Rpb24gfSBmcm9tICdzcmMvZmlkbS9HaWd5YS5Kcy5TYW1sUHJveHkvYXBwL3BhcnNlVXJsJztcbmltcG9ydCB7IHJlcG9ydEVycm9yLCByZWRpcmVjdFRvU2FtbEVuZFBvbnQsIG9wZW5JZnJhbWUsIGxvZ291dCB9IGZyb20gJ3NyYy9maWRtL0dpZ3lhLkpzLlNhbWxQcm94eS9hcHAvdXRpbHMnO1xuaW1wb3J0IHsgR1NFcnJvcnMgfSBmcm9tICcuLi8uLi8uLi9jb3JlL0dpZ3lhLkpzL2FwcC9HU0Vycm9ycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzTG9nb3V0KGFjdGlvbjogSVByb3h5QWN0aW9uLCBjb25maWd1cmF0aW9uOiBJQ29uZmlndXJhdGlvbikge1xuICAgIC8vIGNhbGwgc29jaWFsaXplLmxvZ291dCB0aGF0IHdpbGwgaGFuZGxlIHRoZSByZXN0XG4gICAgLy8gZ2V0IHJlc3BvbnNlIGZyb20gc2VydmVyXG4gICAgLy8gaWYgbmVjZXNhcnkgaW52YWxpZGF0ZSBjbGllbnQgc2Vzc2lvbiwgYW5kIGNhbGwgbG9nb3V0VXJsXG4gICAgLy8gY2FsbCBldmVyeSBTUCBzZXNzaW9uIHRoYXQgaXMgbmVlZGVkXG4gICAgLy8gd2hlbiBpdCBpcyBmaW5pc2hlZCwgcmVkaXJlY3QgdG8gZmluYWxpemUgZW5kcG9pbnRcbiAgICB2YXIgb25Mb2dvdXRSZXNwb25zZSA9IHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc3Qgc2luZ2xlU1BUaW1lb3V0ID0gNDAwMDsgLy8gNHNcblxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3JDb2RlICE9PSBHU0Vycm9ycy5PSylcbiAgICAgICAgICAgIHJldHVybiByZXBvcnRFcnJvcihcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ29kZTogcmVzcG9uc2UuZXJyb3JDb2RlLFxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHJlc3BvbnNlLmVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhdGlvbjogY29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLnNhbWxDb250ZXh0KSB7XG4gICAgICAgICAgICB2YXIgY2FsbEZpbmFsaXplID0gKCkgPT5cbiAgICAgICAgICAgICAgICByZWRpcmVjdFRvU2FtbEVuZFBvbnQoXG4gICAgICAgICAgICAgICAgICAgICdpZHAvc2xvL2ZpbmFsaXplJyxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2FtbENvbnRleHQ6IHJlc3BvbnNlLnNhbWxDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uLmFwaUtleSxcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbi5sb2dvdXRVUkwpIG9wZW5JZnJhbWUoY29uZmlndXJhdGlvbi5sb2dvdXRVUkwsIGNhbGxGaW5hbGl6ZSwgc2luZ2xlU1BUaW1lb3V0KTtcbiAgICAgICAgICAgIGVsc2UgY2FsbEZpbmFsaXplKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbG9nb3V0KGFjdGlvbi5zYW1sQ29udGV4dCwgcmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3JDb2RlID09PSBHU0Vycm9ycy5PSyAmJiByZXNwb25zZS5vcmlnaW5hbFJlc3BvbnNlICYmIHJlc3BvbnNlLm9yaWdpbmFsUmVzcG9uc2UuZXJyb3JDb2RlID09PSBHU0Vycm9ycy5VTkFVVEhPUklaRURfVVNFUikge1xuICAgICAgICAgICAgLy8gdHJ5IGxvZ291dCBhZ2FpbiAtIHRoaXMgdGltZSB3aXRob3V0IHRoZSBsb2dpbiB0b2tlblxuICAgICAgICAgICAgcmV0dXJuIGxvZ291dChhY3Rpb24uc2FtbENvbnRleHQsIG9uTG9nb3V0UmVzcG9uc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9uTG9nb3V0UmVzcG9uc2UocmVzcG9uc2UpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgSU1hcCwgdXJsUGFyYW1zIH0gZnJvbSAnc3JjL2ZpZG0vR2lneWEuSnMuU2FtbFByb3h5L2FwcC91dGlscyc7XG5cbmV4cG9ydCBlbnVtIFByb3h5TW9kZSB7XG4gICAgX3VuZGVmaW5lZCxcbiAgICAvLyBTU09cbiAgICBsb2dpbixcbiAgICBmb3JjZUxvZ2luLFxuICAgIHBhc3NpdmVMb2dpbixcbiAgICBhZnRlckxvZ2luLCAvLyB1c2VkIGludGVybmFsbHkgYnkganNTZGtcbiAgICBpbml0U1NPLCAvLyB1c2VkIGludGVybmFsbHkgYnkganNTZGtcbiAgICBjYW5jZWwsXG4gICAgLy8gU0xPXG4gICAgbG9nb3V0LFxuXG4gICAgLy8gaW50ZXJuYWxcbiAgICBfZGVidWcsXG59XG5leHBvcnQgaW50ZXJmYWNlIElQcm94eUFjdGlvbiB7XG4gICAgbW9kZTogUHJveHlNb2RlO1xuICAgIHNhbWxDb250ZXh0OiBzdHJpbmc7XG4gICAgc3BOYW1lOiBzdHJpbmc7XG4gICAgcGFyYW1zOiBJTWFwPHN0cmluZz47XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVcmwocXVlcnk6IHN0cmluZyk6IElQcm94eUFjdGlvbiB7XG4gICAgdmFyIHBhcmFtcyA9IHVybFBhcmFtcyhxdWVyeSk7XG5cbiAgICB2YXIgbW9kZSA9IFByb3h5TW9kZVtwYXJhbXNbJ21vZGUnXV07XG4gICAgdmFyIHNhbWxDb250ZXh0ID0gcGFyYW1zWydzYW1sQ29udGV4dCddO1xuICAgIHZhciBzcE5hbWUgPSBwYXJhbXNbJ3NwTmFtZSddO1xuXG4gICAgLy8gX2FmdGVyTG9naW4gY2FuIGNvbWUgd2l0aG91dCBzYW1sQ29udGV4dCBvciBtb2RlXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtb2RlOiBtb2RlLFxuICAgICAgICBzYW1sQ29udGV4dDogc2FtbENvbnRleHQsXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICBzcE5hbWU6IHNwTmFtZSxcbiAgICB9O1xufVxuIiwiaW1wb3J0IHtJQ29uZmlndXJhdGlvbn0gZnJvbSAnc3JjL2ZpZG0vR2lneWEuSnMuU2FtbFByb3h5L2FwcC9JQ29uZmlndXJhdGlvbic7XG5pbXBvcnQge0lQcm94eUFjdGlvbiwgUHJveHlNb2RlfSBmcm9tICdzcmMvZmlkbS9HaWd5YS5Kcy5TYW1sUHJveHkvYXBwL3BhcnNlVXJsJztcbmltcG9ydCB7cHJvY2Vzc0xvZ2luLCBwcm9jZXNzRm9yY2VMb2dpbiwgcHJvY2Vzc0FmdGVyTG9naW4sIHByb2Nlc3NQYXNzaXZlTG9naW4sIHByb2Nlc3NJbml0U1NPLCBwcm9jZXNzQ2FuY2VsfSBmcm9tICdzcmMvZmlkbS9HaWd5YS5Kcy5TYW1sUHJveHkvYXBwL2xvZ2luJztcbmltcG9ydCB7cHJvY2Vzc0xvZ291dH0gZnJvbSAnc3JjL2ZpZG0vR2lneWEuSnMuU2FtbFByb3h5L2FwcC9sb2dvdXQnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc1JlcXVlc3QoYWN0aW9uOiBJUHJveHlBY3Rpb24sIGNvbmZpZ3VyYXRpb246IElDb25maWd1cmF0aW9uKSB7XG4gICAgYWN0aW9uLm1vZGUgPSBhY3Rpb24ubW9kZSB8fCBQcm94eU1vZGUuYWZ0ZXJMb2dpbjtcblxuICAgIHN3aXRjaCAoYWN0aW9uLm1vZGUpIHtcbiAgICAgICAgLy8gU1NPIC0gc3AgaW5pdGlhdGVkIGxvZ2luXG4gICAgICAgIGNhc2UgUHJveHlNb2RlLmxvZ2luOlxuICAgICAgICAgICAgcHJvY2Vzc0xvZ2luKGFjdGlvbiwgY29uZmlndXJhdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBQcm94eU1vZGUuZm9yY2VMb2dpbjpcbiAgICAgICAgICAgIHByb2Nlc3NGb3JjZUxvZ2luKGFjdGlvbiwgY29uZmlndXJhdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBQcm94eU1vZGUuYWZ0ZXJMb2dpbjogLy8gaGFuZGxpbmcgcmVzcG9uc2VzIGZyb20gbG9naW5VcmwgYWZ0ZXIgbG9naW4gcGVyZm9ybWVkXG4gICAgICAgICAgICBwcm9jZXNzQWZ0ZXJMb2dpbihhY3Rpb24sIGNvbmZpZ3VyYXRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgUHJveHlNb2RlLnBhc3NpdmVMb2dpbjpcbiAgICAgICAgICAgIHByb2Nlc3NQYXNzaXZlTG9naW4oYWN0aW9uLCBjb25maWd1cmF0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFByb3h5TW9kZS5jYW5jZWw6XG4gICAgICAgICAgICBwcm9jZXNzQ2FuY2VsKGFjdGlvbiwgY29uZmlndXJhdGlvbik7ICAgICAgICAgICAgXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBTU08gLSBpZHAgaW5pdGlhdGVkIGxvZ2luXG4gICAgICAgIGNhc2UgUHJveHlNb2RlLmluaXRTU086IC8vIGlkcCBpbml0aWF0ZWQgbG9naW5cbiAgICAgICAgICAgIHByb2Nlc3NJbml0U1NPKGFjdGlvbiwgY29uZmlndXJhdGlvbik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAvLyBTTE8gLSBzcCBpbml0aWF0ZWQgbG9nb3V0XG4gICAgICAgIGNhc2UgUHJveHlNb2RlLmxvZ291dDpcbiAgICAgICAgICAgIHByb2Nlc3NMb2dvdXQoYWN0aW9uLCBjb25maWd1cmF0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaW1wbGVtZW50ZWQgbW9kZScpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgSU1hcDxUPiB7XG4gICAgW25hbWU6IHN0cmluZ106IFQ7XG59XG5leHBvcnQgZnVuY3Rpb24gdXJsUGFyYW1zKHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICBpZiAocXVlcnkuaW5kZXhPZignPycpID4gLTEpIHF1ZXJ5ID0gcXVlcnkuc3Vic3RyaW5nKHF1ZXJ5LmluZGV4T2YoJz8nKSArIDEpO1xuXG4gICAgdmFyIHF1ZXJ5UGFydHMgPSBxdWVyeS5zcGxpdCgvJi8pO1xuXG4gICAgdmFyIHBhcmFtczogSU1hcDxzdHJpbmc+ID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXJ5UGFydHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIHBhcmFtID0gcXVlcnlQYXJ0c1tpXTtcblxuICAgICAgICBpZiAocGFyYW0uaW5kZXhPZignPScpID09PSAtMSkgY29udGludWU7XG5cbiAgICAgICAgdmFyIHBhcmFtUGFydHMgPSBwYXJhbS5zcGxpdCgnPScpO1xuXG4gICAgICAgIGlmIChwYXJhbVBhcnRzLmxlbmd0aCAhPT0gMikgY29udGludWU7XG5cbiAgICAgICAgcGFyYW1zW3BhcmFtUGFydHNbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtUGFydHNbMV0pO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbXM7XG59XG5leHBvcnQgZnVuY3Rpb24gb3BlbklmcmFtZSh1cmwsIGRvbmU6IEZ1bmN0aW9uLCB0aW1lb3V0OiBudW1iZXIpIHtcbiAgICB2YXIgaGFuZGxlckNhbGxlZCA9IGZhbHNlO1xuICAgIHZhciBsb2FkSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFoYW5kbGVyQ2FsbGVkKSB7XG4gICAgICAgICAgICBoYW5kbGVyQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBnaWd5YS51dGlscy5zY3JpcHQudHJpZ2dlclJlc291cmNlKHVybCwgbG9hZEhhbmRsZXIsIGdpZ3lhLnV0aWxzLnNjcmlwdC5SZXNvdXJjZVR5cGVzLmlmcmFtZSwgZmFsc2UpO1xuICAgIGlmICh0aW1lb3V0KSBzZXRUaW1lb3V0KGxvYWRIYW5kbGVyLCB0aW1lb3V0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnJvckluZm8sIGNvbnRleHQpIHtcbiAgICAvLyBUT0RPIHJlZGlyZWN0IGFuIGludGVybmFsIGVuZHBvaW50IHNvIHRoYXQgdGhlIHNlcnZlciB3aWxsIGhhdmUgYSBjaGFuY2UgdG8gZGVhbCB3aXRoIGVycm9ycyBpbiBpdHMgZmxvdyBjb3JyZWN0bHlcblxuICAgIGlmIChnaWd5YS5zYW1sQ29uZmlnLmVycm9yUGFnZVVSTCkge1xuICAgICAgICByZXR1cm4gcmVkaXJlY3QoZ2lneWEuc2FtbENvbmZpZy5lcnJvclBhZ2VVUkwsIGNvbnRleHQsIHtcbiAgICAgICAgICAgIGVycm9yOiBlcnJvckluZm8sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWRpcmVjdFRvU2FtbEVuZFBvbnQoZW5kUG9pbnQ6IHN0cmluZywgcGFyYW1zOiBhbnksIGFwaUtleTogc3RyaW5nKSB7XG4gICAgLy8gcmVkaXJlY3RzIHRvIGFuIGludGVybmFsIHNhbWwgZW5kcG9pbnQgd2l0aCB0aGUgZ2l2ZW4gcGFyYW1ldGVyc1xuICAgIHZhciBkb21haW4gPSBnaWd5YS5fLmdldEFwaURvbWFpbignZmlkbScpO1xuXG4gICAgdmFyIHVybCA9IGBodHRwczovLyR7ZG9tYWlufS9zYW1sL3YyLjAvJHthcGlLZXl9LyR7ZW5kUG9pbnR9YDtcblxuICAgIGNvbnN0IGdtaWRUaWNrZXQgPSBhd2FpdCBnaWd5YS5fLmFwaUFkYXB0ZXIuZ2V0R21pZFRpY2tldCgpO1xuICAgIGlmIChnbWlkVGlja2V0KSBwYXJhbXMuZ21pZFRpY2tldCA9IGdtaWRUaWNrZXQ7XG5cbiAgICByZWRpcmVjdChcbiAgICAgICAgdXJsLFxuICAgICAgICB7XG4gICAgICAgICAgICBkb21haW46IGRvbWFpbixcbiAgICAgICAgICAgIGFwaUtleTogYXBpS2V5LFxuICAgICAgICAgICAgZW5kUG9pbnQ6IGVuZFBvaW50LFxuICAgICAgICB9LFxuICAgICAgICBwYXJhbXMsXG4gICAgKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRVcmxQYXJhbXModXJsOiBzdHJpbmcsIHBhcmFtczogYW55KSB7XG4gICAgcmV0dXJuIGdpZ3lhLnV0aWxzLlVSTC5hZGRQYXJhbXNUb1VSTCh1cmwsIHBhcmFtcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVkaXJlY3QodXJsOiBzdHJpbmcsIHVybFZhbHVlczogYW55LCBwYXJhbXM6IGFueSkge1xuICAgIC8vIHJlZGlyZWN0IHRvIGFueSBnaXZlbiB1cmxcbiAgICB1cmwgPSB0ZW1wbGF0ZUZpbGwodXJsLCB1cmxWYWx1ZXMpO1xuICAgIHVybCA9IHNldFVybFBhcmFtcyh1cmwsIHBhcmFtcyk7XG5cbiAgICBsb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgIC8vd2luZG93Lm9wZW4odXJsLCAnX3NlbGYnKTsgLy8gVGhpcyBicmVha3MgcG9zdE1lc3NhZ2UgbWVzc2FnaW5nIC0gcmVwbGFjZSB0aGUgd2luZG93Lm9wZW5lclxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldExvZ2luVG9rZW4oYXBpS2V5OiBzdHJpbmcpIHtcbiAgICAvLyByZXR1cm5zIGN1cnJlbnQgbG9naW4gdG9rZW4gZGlyZWN0bHkgZnJvbSB0aGUgd2ViIGFkYXB0ZXJcbiAgICByZXR1cm4gZ2lneWEuXy5hcGlBZGFwdGVycy53ZWIudG9rZW5TdG9yZS5nZXQoYXBpS2V5KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2dpblRva2VuRXhwaXJhdGlvbihhcGlLZXk6IHN0cmluZykge1xuICAgIC8vIHJldHVybnMgY3VycmVudCBsb2dpbiB0b2tlbiBkaXJlY3RseSBmcm9tIHRoZSB3ZWIgYWRhcHRlclxuICAgIHJldHVybiBnaWd5YS5fLmFwaUFkYXB0ZXJzLndlYi50b2tlblN0b3JlLmdldEdsdGV4cENvb2tpZShhcGlLZXkpO1xufVxuZnVuY3Rpb24gY29udGV4dEtleShhcGlLZXk6IHN0cmluZykge1xuICAgIHJldHVybiAnZ2lnX3NhbWxDb250ZXh0XycgKyBhcGlLZXk7XG59XG5jb25zdCBzZXNzaW9uU3RvcmFnZVRpbWVvdXQgPSAxMCAqIDYwICogMTAwMDtcbmV4cG9ydCBpbnRlcmZhY2UgSVN0b3JlZENvbnRleHQge1xuICAgIHNhbWxDb250ZXh0OiBzdHJpbmc7XG4gICAgc3BOYW1lOiBzdHJpbmc7XG59XG5leHBvcnQgZnVuY3Rpb24gc2F2ZUNvbnRleHQoYXBpS2V5OiBzdHJpbmcsIGNvbnRleHQ6IElTdG9yZWRDb250ZXh0LCBkb25lOiAoKSA9PiB2b2lkKSB7XG4gICAgLy8gc2F2ZSBjb250ZXh0IGZvciBuZXh0IHJldHJpdmFsLCBpZiBub3QgcmV0dXJuZWQgZnJvbSBsb2dpblVybFxuICAgIGNvbnN0IGtleSA9IGNvbnRleHRLZXkoYXBpS2V5KTtcblxuICAgIGNvbnN0IHNhdmVkQ29udGV4dHMgPSBnaWd5YS51dGlscy5zZXNzaW9uQ2FjaGUuZ2V0KGtleSwgc2Vzc2lvblN0b3JhZ2VUaW1lb3V0KSB8fCBbXTtcbiAgICBzYXZlZENvbnRleHRzLnB1c2goY29udGV4dCk7XG5cbiAgICBnaWd5YS51dGlscy5zZXNzaW9uQ2FjaGUuc2V0KGtleSwgc2F2ZWRDb250ZXh0cyk7XG4gICAgZG9uZSgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250ZXh0KGFwaUtleTogc3RyaW5nLCBjYWxsYmFjazogKGNvbnRleHQ6IElTdG9yZWRDb250ZXh0KSA9PiB2b2lkKSB7XG4gICAgLy8gbG9hZCBjb250ZXh0IGlmIHdhcyBub3QgcHJvdmlkZWQgaW4gdXJsXG4gICAgY29uc3Qga2V5ID0gY29udGV4dEtleShhcGlLZXkpO1xuXG4gICAgY29uc3Qgc2F2ZWRDb250ZXh0cyA9IGdpZ3lhLnV0aWxzLnNlc3Npb25DYWNoZS5nZXQoa2V5LCBzZXNzaW9uU3RvcmFnZVRpbWVvdXQpIHx8IFtdO1xuICAgIGNvbnN0IGxhc3RDb250ZXh0ID0gc2F2ZWRDb250ZXh0cy5wb3AoKSB8fCA8SVN0b3JlZENvbnRleHQ+e307XG5cbiAgICBnaWd5YS51dGlscy5zZXNzaW9uQ2FjaGUuc2V0KGtleSwgc2F2ZWRDb250ZXh0cyk7XG4gICAgY2FsbGJhY2sobGFzdENvbnRleHQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlRmlsbCh0ZW1wbGF0ZTogc3RyaW5nLCBwYXJhbXM6IGFueSkge1xuICAgIHJldHVybiBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0ZW1wbGF0ZSwgcGFyYW1zKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZUpTT04oanNvbjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGdpZ3lhLnV0aWxzLkpTT04uZGVzZXJpYWxpemUoanNvbiwgJycpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdE1lcmdlPFQ+KC4uLm9iamVjdHM6IGFueVtdKSB7XG4gICAgcmV0dXJuIDxUPmdpZ3lhLnV0aWxzLm9iamVjdC5tZXJnZShvYmplY3RzKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0xvZ2dlZEluKGNhbGxiYWNrOiAobG9nZ2VkSW46IGJvb2xlYW4pID0+IHZvaWQsIGFwaUtleTogc3RyaW5nKSB7XG4gICAgaWYoaGFzU2Vzc2lvbihhcGlLZXkpKSB7XG4gICAgICAgIGdpZ3lhLmFjY291bnRzLmdldEFjY291bnRJbmZvKHtjYWxsYmFjazogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2U/LmVycm9yQ29kZSA9PT0gMCk7XG4gICAgICAgIH19KTtcbiAgICB9IGVsc2UgY2FsbGJhY2soZmFsc2UpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dChzYW1sQ29udGV4dDogc3RyaW5nLCBjYWxsYmFjazogKHJlc3BvbnNlKSA9PiB2b2lkKSB7XG4gICAgZ2lneWEuc29jaWFsaXplLmxvZ291dCh7XG4gICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgc2FtbENvbnRleHQ6IHNhbWxDb250ZXh0LFxuICAgIH0pO1xufVxuZnVuY3Rpb24gaGFzU2Vzc2lvbihhcGlLZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHVzZXJLZXkgPSBnZXRMb2dpblRva2VuKGFwaUtleSk7XG4gICAgcmV0dXJuIEJvb2xlYW4odXNlcktleSk7XG59XG4iLCJleHBvcnQgdmFyIGRlYnVnID0gZmFsc2U7XG5leHBvcnQgZnVuY3Rpb24gZ2V0R2lneWFTY3JpcHRFbGVtZW50KGZpbGVOYW1lczogc3RyaW5nW10pOiBIVE1MU2NyaXB0RWxlbWVudCB7XG4gICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG4gICAgdmFyIHNjcmlwdEVsZW1lbnQ6IEhUTUxTY3JpcHRFbGVtZW50O1xuICAgIHZhciBnaWd5YUNkblJlZ2V4ID0gL1xcL1xcL2NkbihzKT9cXC4ocnUxXFwuKT9naWd5YS5jb20vO1xuICAgIGZvciAodmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBzY3JpcHQgPSBzY3JpcHRzW2ldO1xuICAgICAgICB2YXIgc3JjID0gc2NyaXB0LnNyYy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoc3JjICE9PSAnJykge1xuICAgICAgICAgICAgaWYgKGdpZ3lhQ2RuUmVnZXgudGVzdChzcmMpIHx8IHNyYy5pbmRleE9mKCc/YXBpa2V5PScpID4gLTEpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNGaWxlTmFtZUV4aXN0SW5TcmMgPSBmaWxlTmFtZXMubGVuZ3RoID09PSAwIHx8IGZpbGVOYW1lcy5zb21lKGZpbGVOYW1lID0+IHNyYy5pbmRleE9mKGZpbGVOYW1lKSA+IC0xKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNGaWxlTmFtZUV4aXN0SW5TcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0RWxlbWVudCA9IHNjcmlwdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzY3JpcHRFbGVtZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZUpzU2RrTG9hZGVkKFxuICAgIGFwaUtleTogc3RyaW5nLFxuICAgIGRvbmU6ICgpID0+IHZvaWQsXG4gICAgYXN5bmM6IGJvb2xlYW4gPSB0cnVlLFxuICAgIHVzZUV4aXN0aW5nR2lneWFEb21haW4gPSBmYWxzZSxcbiAgICB1c2VYTUxIVFRQUmVxdWVzdDogYm9vbGVhbiA9IGZhbHNlLFxuICAgIHVzZVJlbGF0aXZlUGF0aDogYm9vbGVhbiA9IGZhbHNlLFxuKSB7XG4gICAgaWYgKGdpZ3lhWydpc0dpZ3lhJ10pIHtcbiAgICAgICAgLy8gd2UgaGF2ZSBnaWd5YSBvbiBwYWdlXG4gICAgICAgIGlmIChkZWJ1ZykgY29uc29sZS5kZWJ1ZygnJEcgZ2lneWEtanNTZGsgYWxyZWFkeSBsb2FkZWQuJyk7XG4gICAgICAgIGlmICghZ2lneWFbJ2lzUmVhZHknXSkge1xuICAgICAgICAgICAgLy8gYm9vdHN0cmFwIGluIHByb2Nlc3MgLSB3YWl0IGZvciBib290c3RyYXAgdG8gZmluaXNoXG4gICAgICAgICAgICB3YWl0Rm9yR2lneWFTZXJ2aWNlUmVhZHkoZG9uZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBmaW5pc2hlZCBib290c3RyYXAgLSBnaWd5YSBzZXJ2aWNlIGlzIHJlYWR5XG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBnaWd5YSBpcyBub3Qgb24gcGFnZVxuICAgICAgICBsb2FkR2lneWFKUyhhcGlLZXksIGFzeW5jLCB1c2VFeGlzdGluZ0dpZ3lhRG9tYWluLCB1c2VYTUxIVFRQUmVxdWVzdCwgdXNlUmVsYXRpdmVQYXRoKTtcbiAgICAgICAgd2FpdEZvckdpZ3lhU2VydmljZVJlYWR5KGRvbmUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxvYWRHaWd5YUpTKGFwaUtleSwgYXN5bmMsIHVzZUV4aXN0aW5nR2lneWFEb21haW4sIHVzZVhNTEhUVFBSZXF1ZXN0LCB1c2VSZWxhdGl2ZVBhdGgpIHtcbiAgICBnaWd5YVsnaXNHaWd5YSddID0gdHJ1ZTsgLy8vIGltcG9ydGFudCEgc28gd29uJ3QgZGlzY2FyZCBjdXJyZW50IG1vZHVsZXMuXG5cbiAgICB2YXIgc2VydmVyO1xuICAgIGlmICh1c2VFeGlzdGluZ0dpZ3lhRG9tYWluKSB7XG4gICAgICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBhLmhyZWYgPSBnZXRHaWd5YVNjcmlwdEVsZW1lbnQoW10pLnNyYztcbiAgICAgICAgc2VydmVyID0gYS5wcm90b2NvbCArICcvLycgKyBhLmhvc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2VydmVyID0gJ2h0dHBzOi8vY2Rucy5naWd5YS5jb20nO1xuICAgIH1cbiAgICB2YXIgc3JjID0gYCR7dXNlUmVsYXRpdmVQYXRoID8gJycgOiBzZXJ2ZXJ9L2pzL2dpZ3lhLmpzP2FwaUtleT0ke2FwaUtleX1gO1xuICAgIHZhciBzY3JpcHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0RWxlbWVudC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7IC8vIGFwcGxpY2F0aW9uL2VjbWFzY3JpcHQgaXMgbm90IHN1cHBvcnRlZCBieSBJRThcblxuICAgIGlmICghdXNlWE1MSFRUUFJlcXVlc3QpIHtcbiAgICAgICAgc2NyaXB0RWxlbWVudC5zcmMgPSBzcmM7XG4gICAgICAgIHNjcmlwdEVsZW1lbnQuYXN5bmMgPSBhc3luYztcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLy8gTm90ZSB0aGF0IGNyb3NzLWRvbWFpbiBYTUxIdHRwUmVxdWVzdCByZXF1aXJlcyB0aGUgc2VydmVyIHRvIHJldHVybiB0aGUgaGVhZGVyOiBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbjogPG9yaWdpbj4gfCAqXCJcbiAgICAgICAgdmFyIHhock9iaiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHJPYmoub3BlbignR0VUJywgc3JjLCBhc3luYyk7XG4gICAgICAgIHhock9iai5zZW5kKCcnKTtcbiAgICAgICAgc2NyaXB0RWxlbWVudC50ZXh0ID0geGhyT2JqLnJlc3BvbnNlVGV4dDtcbiAgICB9XG5cbiAgICBpZiAoZGVidWcpIGNvbnNvbGUuZGVidWcoJyRHIGxvYWRpbmcgZ2lneWEtanNTZGsuLi4nKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdEVsZW1lbnQpO1xufVxuZnVuY3Rpb24gd2FpdEZvckdpZ3lhU2VydmljZVJlYWR5KGRvbmUpIHtcbiAgICAvLyBzZXQgc29jaWFsaXplLmpzIGxvYWQgaGFuZGxlclxuICAgIHZhciBwcmV2SGFuZGxlciA9IG51bGw7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3dbJ29uR2lneWFTZXJ2aWNlUmVhZHknXSAhPT0gJ3VuZGVmaW5lZCcpIHByZXZIYW5kbGVyID0gd2luZG93WydvbkdpZ3lhU2VydmljZVJlYWR5J107XG5cbiAgICB3aW5kb3dbJ29uR2lneWFTZXJ2aWNlUmVhZHknXSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHByZXZIYW5kbGVyKSBwcmV2SGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcblxuICAgICAgICBpZiAoZGVidWcpIGNvbnNvbGUuZGVidWcoJyRHIGdpZ3lhLWpzU2RrIGxvYWRlZCEnKTtcbiAgICAgICAgZG9uZSgpO1xuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlQmFzZVBsdWdpbkxvYWRlZChhcGlLZXk6IHN0cmluZywgZG9uZTogKCkgPT4gdm9pZCwgYXN5bmM6IGJvb2xlYW4gPSB0cnVlLCB1c2VYTUxIVFRQUmVxdWVzdDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgZW5zdXJlSnNTZGtMb2FkZWQoXG4gICAgICAgIGFwaUtleSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGdpZ3lhWydfJ11bJ3BsdWdpbnMnXVsnQmFzZVBsdWdpbiddICYmICFnaWd5YVsnXyddWydwbHVnaW5zJ11bJ0Jhc2VQbHVnaW4nXVsnaXNNb2NrJ10pIHtcbiAgICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdpZ3lhWydfJ11bJ2xvYWRCYXNlUGx1Z2luJ10oeyBvbkxvYWQ6IGRvbmUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jLFxuICAgICAgICB1c2VYTUxIVFRQUmVxdWVzdCxcbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
