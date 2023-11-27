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
      './src/socialize/Gigya.Js.Plugin.SimpleShare/app/index.ts')
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

    /***/ './src/socialize/Gigya.Js.Plugin.SimpleShare/app/SimpleSharePlugin0.ts':
      /*!*****************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.SimpleShare/app/SimpleSharePlugin0.ts ***!
  \*****************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function addCSS(rules, prefix) {
          if (!rules || rules == '') return;
          if (rules instanceof Array) rules = rules.join(' ');
          if (prefix) rules = rules.replace(/([^\s]*\.gig)/g, prefix + ' $1');
          var style = document.createElement('style');
          style['type'] = 'text/css';
          var rulesNode = document.createTextNode(rules);
          if (style['styleSheet']) {
            if (rulesNode['value'] != null) {
              style['styleSheet'].cssText = rulesNode['value'];
            } else {
              style['styleSheet'].cssText = rulesNode.nodeValue;
            }
          } else {
            style.appendChild(rulesNode);
          }
          var head = document.getElementsByTagName('head');
          var body = document.body;
          (head.length > 0 ? head[0] : body).appendChild(style);
        }
        exports.addCSS = addCSS;

        /***/
      },

    /***/ './src/socialize/Gigya.Js.Plugin.SimpleShare/app/SimpleSharePlugin1.ts':
      /*!*****************************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.SimpleShare/app/SimpleSharePlugin1.ts ***!
  \*****************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var SimpleSharePlugin0_1 = __webpack_require__(
          /*! src/socialize/Gigya.Js.Plugin.SimpleShare/app/SimpleSharePlugin0 */ './src/socialize/Gigya.Js.Plugin.SimpleShare/app/SimpleSharePlugin0.ts'
        );
        var arProvidersTemp =
          'Facebook,Twitter,Google+,Microsoft,LinkedIn,Digg,StumbleUpon,Hyves,Baidu,Google Bookmarks,Skyrock,QQ,Sina,Kaixin,Renren,VZNet,FriendFeed,VKontakte,Spiceworks,Viadeo,nk.pl,Xing,Tuenti,Reddit,Formspring,Box.net,Tumblr,Pinterest,Plaxo,Technorati,Faves,Newsvine,Fark,Bit.ly,Hatena,Douban,Odnoklassniki,Amazon,Gmail,NetLog,Evernote,AOL Mail,Current TV,Yardbarker,BlinkList,Diigo,DropJack,Segnalo,LinkaGoGo,Kaboodle,Skimbit,Whatsapp'.split(
            ','
          );
        var arExplicitProvidersTemp =
          "100zakladok,A1-Webmarks,Adifni,Aero,AIM Share,Amen Me!,Arto,Aviary Capture,BizSugar,Blip,Blogmarks,Bobrdobr,BonzoBox,Bordom,Brainify,BuddyMarks,Camyoo,Care2,Cirip,CiteULike,ClassicalPlace,Clickazoo,Colivia.de,Connotea,COSMiQ,DesignBump,Designmoo,Diggita,Diglog,Digo,Diigo,Dipdive,DoMelhor,Doower,Dosti,DotNetKicks,Dzone,Edelight,eKudos,eLert Gadget,Embarkons,euCliquei,Fabulously40,Farkinda,FAVable,Favoritus,Floss.pro,Fnews,Fresqui,funP,fwisp,Gabbr,Gacetilla,GamesN,GluvSnap,Google Reader,Gravee,Grumper,Haber.gen.tr,Hacker News,Hadash Hot,Hatena,Hazarkor,Hedgehogs.net,HelloTxt,HEMiDEMi,Hipstr,Hitmarks,Hot Bookmark,Hotklix,HTML Validator,Identi.ca,Instapaper,InvestorLinks,Jamespot,Jumptags,Kaevur,KiRTSY,Kledy,koornk,Kudos,Laaikit,Librerio,Link Ninja,Linkuj.cz,Livefavoris,Lunch.com,Meccho,meinVZ,Memori.ru,Meneame,Mindbodygreen,Mylinkvault,N4G,Netvouz,Nujij,OKNOtizie,Oneview,Osmosus,Oyyla,PDF Online,PimpThisBlog,Ping.fm,Planypus,Plurk,Polladium,Posterous,Pusha,Quantcast,Read It Later,Scoop.at,Sekoman,Shaveh,She Told Me,Smak News,SodaHead,Sonico,Speedtile,springpad,Spruzer,Startaid,Startlap,Strands,studiVZ,Stuffpit,Stumpedia,Stylehive,Surfpeople,Svejo,Symbaloo,Tagza,TellMyPolitician,ThisNext,Tip'd,Tulinq,Tusul,Viadeo,Virb,Vyoom,Whois Lookup,Windy Citizen,WireFan,Worio,Wovre,Wykop,Yammer,Yazzem,Yigg,Yoolink,Yorumcuyum,Youbookmarks,YouMob,Mixi,Naver,Wanelo".split(
            ','
          );
        var arExplicitBookmarksWithIcons = 'mixi,naver,hatena'.split(',');
        var wasCSSInjected = false;
        var BookmarkProvider = /** @class */ (function () {
          function BookmarkProvider(displayName, isExplicit) {
            this.displayName = displayName;
            this.isExplicit = isExplicit;
            this.id = displayName
              .replace(/ /g, '')
              .replace(/!/g, '')
              .replace(/\./g, '')
              .replace(/\+/g, 'plus')
              .replace('Microsoft', 'messenger')
              .toLowerCase();
            this.displayName = displayName.replace('Google+', 'Google');
            if (
              this.isExplicit &&
              window.gigya.utils.array.indexOf(
                arExplicitBookmarksWithIcons,
                this.id
              ) == -1
            ) {
              this.iconURL = '/gs/i/SimpleShare/defaultBMSIcon.png';
              this.mobileIconURL = '/gs/i/SimpleShare/defaultBMSIcon_35.png';
            } else {
              this.iconURL = window.gigya._.getCdnResource(
                '/gs/i/SimpleShare/' + this.id + '.png'
              );
              this.mobileIconURL = window.gigya._.getCdnResource(
                '/gs/i/SimpleShare/' + this.id + '_35.png'
              );
            }
          }
          return BookmarkProvider;
        })();
        var BookmarkProviders = /** @class */ (function () {
          function BookmarkProviders() {}
          BookmarkProviders.getProvider = function (sProvider) {
            var id = sProvider
              .replace(/ /g, '')
              .replace(/!/g, '')
              .replace(/\./g, '')
              .replace(/\+/g, 'plus')
              .replace('Microsoft', 'messenger')
              .toLowerCase();
            return BookmarkProviders.oProvidersHash[id];
          };
          BookmarkProviders.getProviders = function (
            enabledProviders,
            disabledProviders
          ) {
            if (enabledProviders === void 0) {
              enabledProviders = '*';
            }
            if (disabledProviders === void 0) {
              disabledProviders = '';
            }
            var arProviders = [];
            var arEnabledProviders = enabledProviders
              .replace(/ /g, '')
              .replace(/!/g, '')
              .replace(/\./g, '')
              .replace(/\+/g, 'plus')
              .replace('Microsoft', 'messenger')
              .toLowerCase()
              .split(',');
            var arDisabledProviders = disabledProviders
              .replace(/ /g, '')
              .replace(/!/g, '')
              .replace(/\./g, '')
              .replace(/\+/g, 'plus')
              .replace('Microsoft', 'messenger')
              .toLowerCase()
              .split(',');
            for (var i = 0; i < arEnabledProviders.length; i++) {
              var sProvider = arEnabledProviders[i];
              if (!sProvider) continue;
              if (sProvider == '*') {
                for (var bookmarkId in BookmarkProviders.oProvidersHash) {
                  var bookmarkProvider =
                    BookmarkProviders.oProvidersHash[bookmarkId];
                  if (
                    !bookmarkProvider.isExplicit &&
                    window.gigya.utils.array.indexOf(
                      arEnabledProviders,
                      bookmarkId
                    ) == -1 &&
                    window.gigya.utils.array.indexOf(
                      arDisabledProviders,
                      bookmarkId
                    ) == -1
                  ) {
                    arProviders.push(bookmarkProvider);
                  }
                }
              } else {
                var provider = BookmarkProviders.getProvider(sProvider);
                if (
                  provider &&
                  window.gigya.utils.array.indexOf(
                    arDisabledProviders,
                    sProvider
                  ) == -1
                )
                  arProviders.push(provider);
              }
            }
            return arProviders;
          };
          BookmarkProviders.oProvidersHash = {};
          return BookmarkProviders;
        })();
        for (var i = 0; i < arProvidersTemp.length; i++) {
          var bookmark = new BookmarkProvider(arProvidersTemp[i], false);
          BookmarkProviders.oProvidersHash[bookmark.id] = bookmark;
        }
        for (var i = 0; i < arExplicitProvidersTemp.length; i++) {
          var bookmark = new BookmarkProvider(arExplicitProvidersTemp[i], true);
          BookmarkProviders.oProvidersHash[bookmark.id] = bookmark;
        }
        var SimpleSharePlugin = /** @class */ (function () {
          function SimpleSharePlugin(params, refString) {
            var _this = this;
            this.params = params;
            this.refString = refString;
            this.isDrawing = false;
            this.lastProviderShownIndex = 0;
            this.uniqueID = String(Date.now());
            this.providers = BookmarkProviders.getProviders(
              this.params['moreEnabledProviders'],
              this.params['moreDisabledProviders']
            );
            var deviceType = this.params['deviceType']
              ? this.params['deviceType'].toLowerCase()
              : 'desktop';
            this.isMobileUI =
              deviceType == 'mobile' ||
              (deviceType == 'auto' && window.gigya.localInfo.isMobile);
            this.injectDefaultCSS();
            this.container = this.getContainer();
            window.gigya.socialize.getUserInfo(this.params, {
              callback: function (res) {
                _this.user = res['user'];
              },
            });
            this.onBodyMouseDownDelegate = function (e) {
              return _this.onBodyMouseDown(e);
            };
            window.gigya.utils.DOM.addEventListener(
              document,
              'mousedown',
              this.onBodyMouseDownDelegate
            );
            this.onBodyKeyDownDelegate = function (e) {
              return _this.onBodyKeyDown(e);
            };
            window.gigya.utils.DOM.addEventListener(
              document,
              'keydown',
              this.onBodyKeyDownDelegate
            );
            if (this.isMobileUI) {
              window.gigya.utils.DOM.addDialogBackListener(function () {
                _this.close();
              });
            }
            this.draw();
            window.gigya.events.dispatchForWidget(
              {
                eventName: 'load',
              },
              this.params
            );
          }
          SimpleSharePlugin.prototype.injectDefaultCSS = function (params) {
            if (params === void 0) {
              params = {};
            }
            if (!wasCSSInjected) {
              var css = SimpleSharePlugin.defaultCSS;
              if (this.isMobileUI) {
                css += SimpleSharePlugin.mobileCSS;
              } else {
                css += SimpleSharePlugin.nonMobileCSS;
              }
              SimpleSharePlugin0_1.addCSS(css, params['cssPrefix']);
              wasCSSInjected = true;
            }
          };
          SimpleSharePlugin.prototype.getText = function (
            textKey,
            replaceStr,
            withStr
          ) {
            var lang = this.params['lang'];
            var plugin = 'gigya.services.socialize.plugins.simpleShare.js';
            if (lang == 'te-st') return 'TEST_' + textKey.substring(0, 10);
            if (!lang) lang = 'en';
            var t = window.gigya['i18n'][plugin][lang][textKey];
            if (t && replaceStr) t = t.replace(replaceStr, withStr);
            return t;
          };
          SimpleSharePlugin.prototype.getContentHeight = function () {
            var h;
            if (this.isMobileUI) {
              h =
                window.gigya.utils.viewport.getInnerSize().h -
                window.gigya.utils.DOM.getHTMLSize(
                  SimpleSharePlugin.templates['mobileCaption'],
                  this.container
                ).h;
            } else {
              h =
                this.params['height'] -
                window.gigya.utils.DOM.getHTMLSize(
                  SimpleSharePlugin.templates['caption'],
                  this.container
                ).h;
            }
            return h;
          };
          SimpleSharePlugin.prototype.getMaxItemsToPerPage = function () {
            var w = this.container.offsetWidth;
            var h = this.getContentHeight();
            var buttonTemplate = this.isMobileUI
              ? SimpleSharePlugin.templates['mobileBookmarkButton']
              : SimpleSharePlugin.templates['bookmarkButton'];
            var fakeItemHTML = window.gigya.utils.templates.fill(
              buttonTemplate,
              { styleOverride: '' }
            );
            var itemSize = window.gigya.utils.DOM.getHTMLSize(
              fakeItemHTML,
              this.container
            );
            var itemsPerRow = Math.floor(w / itemSize.w);
            var itemsPerCol = Math.floor(h / itemSize.h);
            if (this.isMobileUI) itemsPerCol *= 3;
            return itemsPerRow * itemsPerCol;
          };
          SimpleSharePlugin.prototype.drawNextPage = function () {
            this.isDrawing = true;
            var itemsToShow = Math.min(
              this.getMaxItemsToPerPage(),
              this.providers.length
            );
            for (
              var i = this.lastProviderShownIndex;
              i < this.providers.length &&
              i - this.lastProviderShownIndex < itemsToShow;
              i++
            ) {
              var provider = this.providers[i];
              var buttonContentTemplate = this.isMobileUI
                ? SimpleSharePlugin.templates['mobileBookmarkButtonContent']
                : SimpleSharePlugin.templates['bookmarkButtonContent'];
              var buttonTextClassName =
                'gig-simpleShareUI-buttonText gig-simpleShareUI-buttonText-' +
                provider.id;
              var displayName =
                this.getText(provider.id) || provider.displayName;
              var buttonContent = window.gigya.utils.templates.fill(
                buttonContentTemplate,
                {
                  buttonTextCSS: '',
                  buttonTextClassName: buttonTextClassName,
                  displayName: displayName,
                }
              );
              var textWidth = window.gigya.utils.DOM.getHTMLSize(
                buttonContent,
                this.container
              ).w;
              if (this.isMobileUI) {
                var maxTextWidth = 85;
                var fontSize = 16;
                while (textWidth > maxTextWidth && fontSize >= 14) {
                  buttonContent = window.gigya.utils.templates.fill(
                    buttonContentTemplate,
                    {
                      buttonTextCSS: 'font-size:' + fontSize-- + 'px;',
                      buttonTextClassName: buttonTextClassName,
                      displayName: provider.displayName,
                    }
                  );
                  textWidth = window.gigya.utils.DOM.getHTMLSize(
                    buttonContent,
                    this.container
                  ).w;
                }
              }
              var backgroundImage = this.isMobileUI
                ? provider.mobileIconURL
                : provider.iconURL;
              var item = window.gigya.utils.object.merge([
                this.providers[i],
                {
                  buttonContent: buttonContent,
                },
              ]);
              var buttonTemplate = this.isMobileUI
                ? SimpleSharePlugin.templates['mobileBookmarkButton']
                : SimpleSharePlugin.templates['bookmarkButton'];
              var sButtonContent = window.gigya.utils.templates.fill(
                buttonTemplate,
                item
              );
              var buttonDiv = document.createElement('div');
              buttonDiv.innerHTML = sButtonContent;
              buttonDiv = buttonDiv.firstChild;
              buttonDiv.setAttribute('provider', provider.id);
              if (backgroundImage) {
                window.gigya.utils.DOM.getElementsByClass(
                  buttonDiv,
                  'gig-simpleShareUI-button-inner'
                )[0].style.backgroundImage = "url('" + backgroundImage + "')";
              }
              this.contentContainer.appendChild(buttonDiv);
              this.addEventsToButton(buttonDiv);
            }
            this.lastProviderShownIndex = i;
            this.isDrawing = false;
          };
          SimpleSharePlugin.prototype.addEventsToButton = function (buttonDiv) {
            var _this = this;
            if (this.isMobileUI) {
              window.gigya.utils.DOM.addEventListener(
                buttonDiv,
                'touchstart',
                function (e) {
                  buttonDiv.className =
                    'gig-simpleShareUI-button gig-simpleShareUI-button-touchdown';
                }
              );
              window.gigya.utils.DOM.addEventListener(
                buttonDiv,
                'touchmove',
                function (e) {
                  buttonDiv.className = 'gig-simpleShareUI-button';
                }
              );
              window.gigya.utils.DOM.addButtonSubmitListener(
                buttonDiv,
                function () {
                  if (buttonDiv.className.indexOf('touchdown') != -1) {
                    _this.onProviderClick(buttonDiv.getAttribute('provider'));
                  }
                  buttonDiv.className = 'gig-simpleShareUI-button';
                },
                'touchend'
              );
            } else {
              window.gigya.utils.DOM.addButtonSubmitListener(
                buttonDiv,
                function () {
                  return _this.onProviderClick(
                    buttonDiv.getAttribute('provider')
                  );
                }
              );
            }
          };
          SimpleSharePlugin.prototype.draw = function () {
            var _this = this;
            if (!this.isMobileUI) this.container.style.height = 'auto';
            this.container.setAttribute('role', 'dialog');
            this.container.setAttribute(
              'aria-labelledby',
              'gig-simpleShareUI-caption-text-' + this.uniqueID
            );
            this.container.setAttribute('tabindex', '-1');
            this.container.className = 'gig-simpleShareUI';
            var template = this.isMobileUI
              ? SimpleSharePlugin.templates['mobileContainer']
              : SimpleSharePlugin.templates['container'];
            var templateFiller = {
              caption: this.isMobileUI
                ? SimpleSharePlugin.templates['mobileCaption']
                : SimpleSharePlugin.templates['caption'],
              captionText: this.getText('share_with_your_friends'),
              id: this.uniqueID,
              closeText: '',
            };
            this.container.innerHTML = window.gigya.utils.templates.fill(
              template,
              templateFiller
            );
            if (
              !window.gigya.utils.validation.isExplicitFalse(
                this.params['showEmailButton']
              )
            ) {
              var emailProvider = new BookmarkProvider('email', false);
              this.providers.splice(1, 0, emailProvider);
            }
            if (!this.isMobileUI) {
              var maxItemsPerPage = this.getMaxItemsToPerPage();
              if (
                !window.gigya.utils.validation.isExplicitFalse(
                  this.params['showMoreButton']
                ) &&
                this.providers.length > maxItemsPerPage
              ) {
                var moreProvider = new BookmarkProvider('more', false);
                this.providers.splice(maxItemsPerPage - 1, 0, moreProvider);
              }
            }
            this.contentContainer = window.gigya.utils.DOM.getElementsByClass(
              this.container,
              'gig-simpleShareUI-content'
            )[0];
            if (this.isMobileUI && this.contentContainer) {
              window.gigya.utils.DOM.addEventListener(
                this.contentContainer,
                'scroll',
                function (event) {
                  //load more content when scrolling has reached the end minus one page
                  if (
                    !_this.isDrawing &&
                    _this.contentContainer.scrollTop +
                      _this.contentContainer.offsetHeight >=
                      _this.contentContainer.scrollHeight -
                        _this.contentContainer.offsetHeight / 2
                  ) {
                    _this.drawNextPage();
                  }
                }
              );
            }
            this.setContentArea(true);
            this.drawNextPage();
            var closeButton = window.gigya.utils.DOM.getElementsByClass(
              this.container,
              'gig-simpleShareUI-closeButton'
            )[0];
            if (closeButton) {
              window.gigya.utils.DOM.addButtonSubmitListener(
                closeButton,
                function () {
                  return _this.close();
                }
              );
            }
            //iOS5 workaround (one finger scroll stopped working)
            if (
              window.gigya.localInfo.isIOS &&
              window.gigya.localInfo.iosVersion <= 5
            ) {
              this.contentContainer.style['webkitOverflowScrolling'] = 'auto';
            }
            if (!this.isMobileUI) {
              if (this.params['snapToElementID']) {
                this.snapToElement(
                  document.getElementById(this.params['snapToElementID'])
                );
              } else {
                var mousePos = window.gigya.utils.mouse.getPosition();
                if (mousePos) {
                  this.container.style.top = mousePos.y + 'px';
                  this.container.style.left = mousePos.x + 'px';
                  var ifrel = document.getElementById(
                    'gigya_ifr_' + this.container.id
                  );
                  if (ifrel) {
                    ifrel.style.top = mousePos.y + 'px';
                    ifrel.style.left = mousePos.x + 'px';
                  }
                }
              }
            }
            this.container.focus();
          };
          SimpleSharePlugin.prototype.onProviderClick = function (provider) {
            var params = window.gigya.utils.object.clone(
              this.params,
              false,
              true
            );
            var userAction = this.params[provider + 'UserAction'];
            if (!userAction) userAction = this.params['userAction'];
            params['hideSidebar'] = true;
            params['operationMode'] = 'multiSelect';
            params['onSendDone'] = this.params['onSendDone'];
            if (provider == 'email') {
              if (this.isMobileUI) {
                var subject = userAction['title'] || '';
                var body = userAction['linkBack'] || '';
                document.location.href =
                  'mailto:?to=&subject=' + subject + '&body=' + body;
              } else {
                params['initialView'] = 'email';
                delete params['containerID'];
                params['containerID'] = '';
                window.gigya.socialize.showShareUI(params);
              }
            } else if (provider == 'more') {
              params['initialView'] = 'more';
              delete params['containerID'];
              window.gigya.socialize.showShareUI(params);
            } else {
              params['provider'] = provider;
              params['userAction'] = userAction;
              params['providerKey'] = this.params[provider + 'Key'];
              var mediaItems = userAction['mediaItems'];
              var media;
              if (mediaItems) {
                for (var u = 0; u < mediaItems.length; u++) {
                  var mediaItem = mediaItems[u];
                  if (mediaItem != null) {
                    if (mediaItem.type == 'image') {
                      media = mediaItem.src;
                      break;
                    }
                    if (
                      mediaItem.type == 'video' ||
                      mediaItem.type == 'flash'
                    ) {
                      media = mediaItem.previewImageURL;
                      break;
                    }
                  }
                }
              }
              if (media) params['thumbnailURL'] = media;
              window.gigya.socialize.postBookmark(params);
              window.gigya.events.dispatchForWidget(
                {
                  eventName: 'sendDone',
                  providers: provider,
                  userMessage: userAction['userMessage'],
                  targetURL: userAction['linkBack'],
                },
                this.params
              );
            }
            var oProvider = window.gigya.socialize._getProviderByName(provider);
            if (
              !this.isMobileUI &&
              this.user &&
              this.user.identities &&
              !this.user.identities[provider] &&
              !window.gigya.utils.localStorage.getItem(
                'postShareAction_' + this.params['APIKey']
              ) &&
              oProvider &&
              this.params['simpleShareConfig'] &&
              this.params['simpleShareConfig']['postShareAction'] == 'connect'
            ) {
              this.showAfterBookmarkUI(
                oProvider,
                this.params['simpleShareConfig']
              );
            } else {
              this.close();
            }
          };
          SimpleSharePlugin.prototype.close = function () {
            window.gigya.utils.DOM.removeEventListener(
              document,
              'mousedown',
              this.onBodyMouseDownDelegate
            );
            window.gigya.utils.DOM.removeEventListener(
              document,
              'keydown',
              this.onBodyKeyDownDelegate
            );
            window.gigya.utils.DOM.removeEventListener(
              window,
              'resize',
              this.onResizeDelegate
            );
            window.gigya.utils.DOM.removeEventListener(
              window,
              'scroll',
              this.onScrollDelegate
            );
            this.container.parentNode.removeChild(this.container);
            var ifr = document.getElementById('gigya_ifr_' + this.container.id);
            if (ifr) ifr.parentNode.removeChild(ifr);
            window.gigya.events.dispatchForWidget(
              {
                eventName: 'close',
              },
              this.params
            );
          };
          SimpleSharePlugin.prototype.snapToElement = function (el) {
            if (!el) return;
            var w = this.container.offsetWidth;
            var h = this.container.offsetHeight;
            var dst = this.container.style;
            var de = document.documentElement;
            var db = document.body;
            var clientHeight = de.clientHeight;
            if (clientHeight == 0) clientHeight = db.clientHeight;
            var clientWidth = de.clientWidth;
            if (clientWidth == 0) clientWidth = db.clientWidth;
            if (window.innerHeight) {
              clientHeight = window.innerHeight;
              clientWidth = window.innerWidth;
            }
            var scrl = window.gigya.utils.viewport.getScroll();
            var vpt = scrl.top;
            var vpl = scrl.left;
            var middlePointTop = vpt + Math.floor(clientHeight / 2);
            var middlePointLeft = vpl + Math.floor(clientWidth / 2);
            var btnPos = window.gigya.utils.DOM.getElementPosition(el);
            if (btnPos.top > middlePointTop) {
              dst.top = btnPos.top - h - 5 + 'px';
            } else {
              dst.top = btnPos.top + el.offsetHeight + 5 + 'px';
            }
            if (btnPos.left > middlePointLeft) {
              dst.left = btnPos.left + el.offsetWidth - w + 'px';
            } else {
              dst.left = btnPos.left + 'px';
            }
            var ifrel = document.getElementById(
              'gigya_ifr_' + this.container.id
            );
            if (ifrel != null) {
              ifrel.style.top = dst.top;
              ifrel.style.left = dst.left;
            }
          };
          SimpleSharePlugin.prototype.showAfterBookmarkUI = function (
            oProvider,
            config
          ) {
            var _this = this;
            var captionText =
              config['postShareConnectCaptionText'] ||
              this.getText('thanks_for_sharing');
            var bodyText =
              config['postShareConnectBodyText'] ||
              'To make sharing even simpler';
            var neverShowtext = this.getText('never_show_this');
            var btnSrc = window.gigya._.getCdnResource(
              '/gs/i/HTMLLogin/SignInWith/' + oProvider['name'] + '_30.gif'
            );
            var template =
              SimpleSharePlugin.templates['postShareAction-connect'];
            var caption = window.gigya.utils.DOM.getElementsByClass(
              this.container,
              'gig-simpleShareUI-caption'
            )[0];
            if (caption) caption.innerHTML = captionText;
            this.contentContainer.innerHTML = window.gigya.utils.templates.fill(
              template,
              { body: bodyText, btnSrc: btnSrc, neverShowText: neverShowtext }
            );
            var btnConnect = window.gigya.utils.DOM.getElementsByClass(
              this.contentContainer,
              'gig-simpleShareUI-postShare-connectButton'
            )[0];
            var lnkNeverShow = window.gigya.utils.DOM.getElementsByClass(
              this.contentContainer,
              'gig-simpleShareUI-postShare-neverShowLink'
            )[0];
            window.gigya.utils.DOM.addEventListener(
              btnConnect,
              'click',
              function () {
                window.gigya.socialize.connect(_this.params, {
                  provider: oProvider['name'],
                });
                _this.close();
              }
            );
            window.gigya.utils.DOM.addEventListener(
              lnkNeverShow,
              'click',
              function () {
                window.gigya.utils.localStorage.setItem(
                  'postShareAction_' + _this.params['APIKey'],
                  'true'
                );
                _this.close();
              }
            );
          };
          SimpleSharePlugin.prototype.onBodyMouseDown = function (e) {
            var a;
            if (e) {
              a = e.target;
              if (!a) a = e.srcElement;
              while (a != null && a.offsetParent && a != this.container) {
                a = a.offsetParent;
              }
            }
            if (!a || a != this.container) {
              this.close();
            }
          };
          SimpleSharePlugin.prototype.onBodyKeyDown = function (e) {
            if ((e.which || e.keyCode) == 27) {
              this.close();
            }
          };
          SimpleSharePlugin.prototype.setContentArea = function (first) {
            var _this = this;
            if (this.isMobileUI && this.contentContainer) {
              var startY, startTopScroll;
              if (first) {
                this.contentContainer.style.height =
                  this.getContentHeight() + 'px';
                var scrollBodyToContent = function (e) {
                  window.scrollTo(
                    _this.container.offsetLeft,
                    _this.container.offsetTop
                  );
                };
                window.gigya.utils.DOM.addEventListener(
                  this.contentContainer,
                  'touchstart',
                  function (event) {
                    // prevent scrolling the page
                    startY = event['touches'][0].pageY;
                    startTopScroll = _this.contentContainer.scrollTop;
                    if (startTopScroll <= 0) {
                      _this.contentContainer.scrollTop = 1;
                    }
                    if (
                      startTopScroll + _this.contentContainer.offsetHeight >=
                      _this.contentContainer.scrollHeight
                    ) {
                      _this.contentContainer.scrollTop =
                        _this.contentContainer.scrollHeight -
                        _this.contentContainer.offsetHeight -
                        1;
                    }
                  }
                );
                this.onResizeDelegate = function () {
                  return _this.onResize();
                };
                this.onScrollDelegate = function () {
                  return _this.onScroll();
                };
                window.gigya.utils.DOM.addEventListener(
                  window,
                  'resize',
                  this.onResizeDelegate
                );
                window.gigya.utils.DOM.addEventListener(
                  window,
                  'scroll',
                  this.onScrollDelegate
                );
                /*gigya.utils.DOM.addEventListener(this.contentContainer, 'touchmove', function (event) {
                        document.removeEventListener('touchstart', preventDefault,false);
                        document.removeEventListener('touchmove', preventDefault,false);
                    });
                    var bodyTopScroll = document.body.scrollTop;
                    var bodyLeftScroll = document.body.scrollLeft;
                    gigya.utils.DOM.addEventListener(document.body, 'touchmove', function (event) {
                        window.scrollTo(bodyLeftScroll, bodyTopScroll);
                    });*/
              }
            }
          };
          SimpleSharePlugin.prototype.getContainer = function () {
            if (!this.container) {
              if (this.params['containerID']) {
                this.container = document.getElementById(
                  this.params['containerID']
                );
              } else {
                this.container = window.gigya.utils.DOM.createTopLevelDiv();
                this.container.style.width = this.params['width'] + 'px';
                this.container.style.height = this.params['height'] + 'px';
              }
              var container = this.container;
              if (this.isMobileUI) {
                var viewportSize = window.gigya.utils.viewport.getInnerSize();
                container.style.width = '100%';
                container.style.height = viewportSize.h.toString() + 'px';
                container.style.top = document.body.scrollTop + 'px';
                container.style.left = '0px';
                container.style.position = 'absolute';
              }
            }
            return this.container;
          };
          SimpleSharePlugin.prototype.onResize = function () {
            var viewportSize = window.gigya.utils.viewport.getInnerSize();
            this.container.style.height = viewportSize.h.toString() + 'px';
            if (this.contentContainer)
              this.contentContainer.style.height =
                this.getContentHeight() + 'px';
            window.scrollTo(
              this.container.offsetLeft,
              this.container.offsetTop
            );
          };
          SimpleSharePlugin.prototype.onScroll = function () {
            window.scrollTo(
              this.container.offsetLeft,
              this.container.offsetTop
            );
            if (window.gigya.localInfo.isIOS) this.onResize();
          };
          SimpleSharePlugin.defaultCSS = [
            '.gig-simpleShareUI *, div.gig-simpleShareUI, span.gig-simpleShareUI, .gig-simpleShareUI span, .gig-simpleShareUI a:hover, .gig-simpleShareUI a:visited, .gig-simpleShareUI a:link, .gig-simpleShareUI a:active {',
            'none;text-align:left;font-family:arial;background-color:transparent;font-weight:normal;font-size:11px;border:none; padding:0px;margin:0px;color:inherit;text-decoration:none;width:auto;float:none;-moz-border-radius:0;border-radius:0;line-height:normal;',
            '}',
          ].join('');
          SimpleSharePlugin.nonMobileCSS = [
            'div.gig-simpleShareUI {border: 5px solid #858585; border-radius: 5px;}',
            'div.gig-simpleShareUI-inner {border: 1px solid #636363; background-color: #FFFFFF}',
            'div.gig-simpleShareUI-caption {overflow:hidden;border-bottom: 1px solid #E0E0E0; height:19px;padding-left: 5px;}',
            'div.gig-simpleShareUI-caption, div.gig-simpleShareUI-caption-text {font-weight: bold;background-color:#F7F7F7; color:#555555;line-height:19px;}',
            'div.gig-simpleShareUI-caption-text {float:left;}',
            'div.gig-simpleShareUI-button {width: 119px; margin: 0 5px 7px 0;  height:16px; cursor:pointer; display: inline-block; *display:inline; zoom:1; }',
            'div.gig-simpleShareUI-button-inner {background-repeat:no-repeat;background-position:center left;padding-left: 20px;line-height:16px;height:16px;}',
            'div.gig-simpleShareUI-content {line-height:0;padding: 7px 10px 0}',
            'div.gig-simpleShareUI-button:hover {opacity: 0.7}',
            'span.gig-simpleShareUI-buttonText-facebook, span.gig-simpleShareUI-buttonText-twitter {font-weight: bold;}',
            'span.gig-simpleShareUI-buttonText {line-height:16px;}',
            "div.gig-simpleShareUI-closeButton {background-repeat:no-repeat;background-position:center;center;float:right;cursor:pointer;margin: 0 4px;width:7px;height:19px;display:inline-block;*display:inline; zoom:1;background-image: url('" +
              window.gigya._.getCdnResource(
                '/gs/i/Share/Mini/Dialog/Dialog_Close.png'
              ) +
              "')}",
            'div.gig-simpleShareUI-postShare-connectBodyText {color: #555555;font-size: 14px;font-weight: bold;height: 18px;margin: 20px 20px 10px;overflow: hidden;text-align: center;}',
            'div.gig-simpleShareUI-postShare-neverShowLink {margin-top: 40px;color: #0086F1;cursor: pointer;font-size: 10px;margin-bottom: 4px;text-align: center;}',
            'div.gig-simpleShareUI-postShare-connectButton {cursor: pointer;width: 212px; height: 30px;background-repeat:no-repeat;margin: 0 auto;background-position:center center;}',
            'div.gig-simpleShareUI-postShare-connectButton:hover {opacity: 0.7}',
          ].join('');
          SimpleSharePlugin.mobileCSS = [
            'div.gig-simpleShareUI * {font-size: 16px;-webkit-text-size-adjust:none; -webkit-touch-callout: none; -webkit-user-select: none;font-family:sans-serif}',
            'div.gig-simpleShareUI {background-color:#f5f5f5;}',
            'div.gig-simpleShareUI-inner {}',
            'div.gig-simpleShareUI-caption {padding: 4px 0;text-align: center; background-color: #373737; font-size: 18px; font-weight: bold; color: #cbcbcb}',
            'div.gig-simpleShareUI-button {',
            window.gigya.localInfo.isIOS
              ? '-webkit-backface-visibility: hidden;-webkit-perspective: 1000;-webkit-transform: translate3d(0,0,0);'
              : '',
            'line-height:0px; border: 1px solid #dcdcdc; border-radius: 5px;text-align:left;width: 139px; margin: 8px 6px 0; overflow:hidden; display: inline-block; ',
            'background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#ededed));',
            'background: -webkit-linear-gradient(top, #ffffff 0%,#ededed 100%);',
            'background: linear-gradient(to bottom,  #ffffff 0%,#ededed 100%);',
            '}',
            'div.gig-simpleShareUI-button-touchdown {',
            'background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#777777), color-stop(100%,#5e5e5e));',
            'background: -webkit-linear-gradient(top, #777777 0%,#5e5e5e 100%);',
            'background: linear-gradient(to bottom,  #777777 0%,#5e5e5e 100%);',
            '}',
            'div.gig-simpleShareUI-button-touchdown .gig-simpleShareUI-buttonText {color: #FFFFFF;}',
            'div.gig-simpleShareUI-button-inner {font-size: 16px; color: #333333; padding-left: 45px;line-height:15px;display: table-cell; vertical-align:middle; height: 45px;background-repeat:no-repeat;background-position:5px center}',
            'div.gig-simpleShareUI-content-container {}',
            'div.gig-simpleShareUI-content {',
            window.gigya.localInfo.isIOS
              ? '-webkit-backface-visibility: hidden;-webkit-perspective: 1000;-webkit-transform: translate3d(0,0,0);-webkit-overflow-scrolling:touch; overflow-scrolling: touch'
              : '',
            'line-height:0;overflow:scroll;text-align:center;}',
            'span.gig-simpleShareUI-buttonText-facebook, span.gig-simpleShareUI-buttonText-twitter {font-weight: bold;}',
          ].join('');
          SimpleSharePlugin.templates = {
            mobileContainer: [
              '<div class="gig-simpleShareUI-inner">',
              '$caption',
              '<div class="gig-simpleShareUI-content-container"><div class="gig-simpleShareUI-content"></div></div>',
              '</div>',
            ].join(''),
            mobileBookmarkButton:
              '<div class="gig-simpleShareUI-button"><div class="gig-simpleShareUI-button-inner">$buttonContent</div></div>',
            mobileBookmarkButtonContent:
              '<span style="${buttonTextCSS}" class="${buttonTextClassName}">${displayName}</span>',
            mobileCaption:
              '<div class="gig-simpleShareUI-caption" id="gig-simpleShareUI-caption-text-$id">$captionText</div>',
            container: [
              '<div class="gig-simpleShareUI-inner">',
              '$caption',
              '<div class="gig-simpleShareUI-content"></div>',
              '</div>',
            ].join(''),
            caption:
              '<div class="gig-simpleShareUI-caption"><div class="gig-simpleShareUI-caption-text" id="gig-simpleShareUI-caption-text-$id">$captionText</div><div class="gig-simpleShareUI-closeButton" aria-label="$closeText"></div></div>',
            bookmarkButton:
              '<div class="gig-simpleShareUI-button"><div class="gig-simpleShareUI-button-inner">$buttonContent</div></div>',
            bookmarkButtonContent:
              '<span style="${buttonTextCSS}" class="${buttonTextClassName}">${displayName}</span>',
            'postShareAction-connect': [
              '<div class="gig-simpleShareUI-postShare-connectBodyText">$body</div>',
              '<div class="gig-simpleShareUI-postShare-connectButton" style="background-image:url(\'$btnSrc\')"></div>',
              '<div class="gig-simpleShareUI-postShare-neverShowLink">$neverShowText</div>',
            ].join(''),
          };
          return SimpleSharePlugin;
        })();
        window.gigya._.UI.attachPlugin(
          SimpleSharePlugin,
          'socialize',
          'simpleShare',
          'showSimpleShareUI'
        );

        /***/
      },

    /***/ './src/socialize/Gigya.Js.Plugin.SimpleShare/app/index.ts':
      /*!****************************************************************!*\
  !*** ./src/socialize/Gigya.Js.Plugin.SimpleShare/app/index.ts ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function (
          __webpack_provided_Object_dot_assign
        ) {
          Object.defineProperty(exports, '__esModule', { value: true });
          var GigyaGlobal = __webpack_require__(
            /*! src/socialize/Gigya.Js.Plugin.SimpleShare/app/SimpleSharePlugin0 */ './src/socialize/Gigya.Js.Plugin.SimpleShare/app/SimpleSharePlugin0.ts'
          );
          __webpack_require__(
            /*! src/socialize/Gigya.Js.Plugin.SimpleShare/app/SimpleSharePlugin1 */ './src/socialize/Gigya.Js.Plugin.SimpleShare/app/SimpleSharePlugin1.ts'
          );
          if (!window.gigya.global) {
            window.gigya.global = {};
          }
          __webpack_provided_Object_dot_assign(
            window.gigya.global,
            GigyaGlobal
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

    /******/
  }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5QbHVnaW4uU2ltcGxlU2hhcmUvYXBwL1NpbXBsZVNoYXJlUGx1Z2luMC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc29jaWFsaXplL0dpZ3lhLkpzLlBsdWdpbi5TaW1wbGVTaGFyZS9hcHAvU2ltcGxlU2hhcmVQbHVnaW4xLnRzIiwid2VicGFjazovLy8uL3NyYy9zb2NpYWxpemUvR2lneWEuSnMuUGx1Z2luLlNpbXBsZVNoYXJlL2FwcC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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RjtRQUNsSCxhQUFhLEVBQUUsbUdBQW1HO1FBRWxILFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxFQUFFLFVBQVUsRUFBRSwrQ0FBK0MsRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRXBJLE9BQU8sRUFDSCw4TkFBOE47UUFDbE8sY0FBYyxFQUFFLDhHQUE4RztRQUM5SCxxQkFBcUIsRUFBRSxxRkFBcUY7UUFDNUcseUJBQXlCLEVBQUU7WUFDdkIsc0VBQXNFO1lBQ3RFLHlHQUF5RztZQUN6Ryw2RUFBNkU7U0FDaEYsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0tBQ2IsQ0FBQztJQTBlTix3QkFBQztDQUFBO0FBQ0QsWUFBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3ZwQjVGLHVMQUFnRztBQUNoRyxxS0FBMEU7QUFHMUUsSUFBSSxDQUFDLFlBQUssQ0FBQyxNQUFNLEVBQUU7SUFDZixZQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztDQUNyQjtBQUVELG9DQUFhLENBQUMsWUFBSyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQyIsImZpbGUiOiJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5zaW1wbGVzaGFyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5QbHVnaW4uU2ltcGxlU2hhcmUvYXBwL2luZGV4LnRzXCIpO1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZENTUyhydWxlczogYW55LCBwcmVmaXgpIHtcbiAgICBpZiAoIXJ1bGVzIHx8IHJ1bGVzID09ICcnKSByZXR1cm47XG4gICAgaWYgKHJ1bGVzIGluc3RhbmNlb2YgQXJyYXkpIHJ1bGVzID0gcnVsZXMuam9pbignICcpO1xuICAgIGlmIChwcmVmaXgpIHJ1bGVzID0gcnVsZXMucmVwbGFjZSgvKFteXFxzXSpcXC5naWcpL2csIHByZWZpeCArICcgJDEnKTtcbiAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpIGFzIGFueTtcbiAgICBzdHlsZVsndHlwZSddID0gJ3RleHQvY3NzJztcbiAgICB2YXIgcnVsZXNOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocnVsZXMpO1xuICAgIGlmIChzdHlsZVsnc3R5bGVTaGVldCddKSB7XG4gICAgICAgIGlmIChydWxlc05vZGVbJ3ZhbHVlJ10gIT0gbnVsbCkge1xuICAgICAgICAgICAgc3R5bGVbJ3N0eWxlU2hlZXQnXS5jc3NUZXh0ID0gcnVsZXNOb2RlWyd2YWx1ZSddO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVbJ3N0eWxlU2hlZXQnXS5jc3NUZXh0ID0gcnVsZXNOb2RlLm5vZGVWYWx1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKHJ1bGVzTm9kZSk7XG4gICAgfVxuICAgIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKTtcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgKGhlYWQubGVuZ3RoID4gMCA/IGhlYWRbMF0gOiBib2R5KS5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG4iLCJpbXBvcnQgeyBhZGRDU1MgfSBmcm9tICdzcmMvc29jaWFsaXplL0dpZ3lhLkpzLlBsdWdpbi5TaW1wbGVTaGFyZS9hcHAvU2ltcGxlU2hhcmVQbHVnaW4wJztcblxudmFyIGFyUHJvdmlkZXJzVGVtcDogc3RyaW5nW10gPSAnRmFjZWJvb2ssVHdpdHRlcixHb29nbGUrLE1pY3Jvc29mdCxMaW5rZWRJbixEaWdnLFN0dW1ibGVVcG9uLEh5dmVzLEJhaWR1LEdvb2dsZSBCb29rbWFya3MsU2t5cm9jayxRUSxTaW5hLEthaXhpbixSZW5yZW4sVlpOZXQsRnJpZW5kRmVlZCxWS29udGFrdGUsU3BpY2V3b3JrcyxWaWFkZW8sbmsucGwsWGluZyxUdWVudGksUmVkZGl0LEZvcm1zcHJpbmcsQm94Lm5ldCxUdW1ibHIsUGludGVyZXN0LFBsYXhvLFRlY2hub3JhdGksRmF2ZXMsTmV3c3ZpbmUsRmFyayxCaXQubHksSGF0ZW5hLERvdWJhbixPZG5va2xhc3NuaWtpLEFtYXpvbixHbWFpbCxOZXRMb2csRXZlcm5vdGUsQU9MIE1haWwsQ3VycmVudCBUVixZYXJkYmFya2VyLEJsaW5rTGlzdCxEaWlnbyxEcm9wSmFjayxTZWduYWxvLExpbmthR29HbyxLYWJvb2RsZSxTa2ltYml0LFdoYXRzYXBwJy5zcGxpdChcbiAgICAnLCcsXG4pO1xudmFyIGFyRXhwbGljaXRQcm92aWRlcnNUZW1wOiBzdHJpbmdbXSA9IFwiMTAwemFrbGFkb2ssQTEtV2VibWFya3MsQWRpZm5pLEFlcm8sQUlNIFNoYXJlLEFtZW4gTWUhLEFydG8sQXZpYXJ5wqBDYXB0dXJlLEJpelN1Z2FyLEJsaXAsQmxvZ21hcmtzLEJvYnJkb2JyLEJvbnpvQm94LEJvcmRvbSxCcmFpbmlmeSxCdWRkeU1hcmtzLENhbXlvbyxDYXJlMixDaXJpcCxDaXRlVUxpa2UsQ2xhc3NpY2FsUGxhY2UsQ2xpY2them9vLENvbGl2aWEuZGUsQ29ubm90ZWEsQ09TTWlRLERlc2lnbkJ1bXAsRGVzaWdubW9vLERpZ2dpdGEsRGlnbG9nLERpZ28sRGlpZ28sRGlwZGl2ZSxEb01lbGhvcixEb293ZXIsRG9zdGksRG90TmV0S2lja3MsRHpvbmUsRWRlbGlnaHQsZUt1ZG9zLGVMZXJ0IEdhZGdldCxFbWJhcmtvbnMsZXVDbGlxdWVpLEZhYnVsb3VzbHk0MCxGYXJraW5kYSxGQVZhYmxlLEZhdm9yaXR1cyxGbG9zcy5wcm8sRm5ld3MsRnJlc3F1aSxmdW5QLGZ3aXNwLEdhYmJyLEdhY2V0aWxsYSxHYW1lc04sR2x1dlNuYXAsR29vZ2xlwqBSZWFkZXIsR3JhdmVlLEdydW1wZXIsSGFiZXIuZ2VuLnRyLEhhY2tlciBOZXdzLEhhZGFzaCBIb3QsSGF0ZW5hLEhhemFya29yLEhlZGdlaG9ncy5uZXQsSGVsbG9UeHQsSEVNaURFTWksSGlwc3RyLEhpdG1hcmtzLEhvdCBCb29rbWFyayxIb3RrbGl4LEhUTUzCoFZhbGlkYXRvcixJZGVudGkuY2EsSW5zdGFwYXBlcixJbnZlc3RvckxpbmtzLEphbWVzcG90LEp1bXB0YWdzLEthZXZ1cixLaVJUU1ksS2xlZHksa29vcm5rLEt1ZG9zLExhYWlraXQsTGlicmVyaW8sTGluayBOaW5qYSxMaW5rdWouY3osTGl2ZWZhdm9yaXMsTHVuY2guY29tLE1lY2NobyxtZWluVlosTWVtb3JpLnJ1LE1lbmVhbWUsTWluZGJvZHlncmVlbixNeWxpbmt2YXVsdCxONEcsTmV0dm91eixOdWppaixPS05PdGl6aWUsT25ldmlldyxPc21vc3VzLE95eWxhLFBERiBPbmxpbmUsUGltcFRoaXNCbG9nLFBpbmcuZm0sUGxhbnlwdXMsUGx1cmssUG9sbGFkaXVtLFBvc3Rlcm91cyxQdXNoYSxRdWFudGNhc3QsUmVhZCBJdCBMYXRlcixTY29vcC5hdCxTZWtvbWFuLFNoYXZlaCxTaGUgVG9sZCBNZSxTbWFrIE5ld3MsU29kYUhlYWQsU29uaWNvLFNwZWVkdGlsZSxzcHJpbmdwYWQsU3BydXplcixTdGFydGFpZCxTdGFydGxhcCxTdHJhbmRzLHN0dWRpVlosU3R1ZmZwaXQsU3R1bXBlZGlhLFN0eWxlaGl2ZSxTdXJmcGVvcGxlLFN2ZWpvLFN5bWJhbG9vLFRhZ3phLFRlbGxNeVBvbGl0aWNpYW4sVGhpc05leHQsVGlwJ2QsVHVsaW5xLFR1c3VsLFZpYWRlbyxWaXJiLFZ5b29tLFdob2lzwqBMb29rdXAsV2luZHnCoENpdGl6ZW4sV2lyZUZhbixXb3JpbyxXb3ZyZSxXeWtvcCxZYW1tZXIsWWF6emVtLFlpZ2csWW9vbGluayxZb3J1bWN1eXVtLFlvdWJvb2ttYXJrcyxZb3VNb2IsTWl4aSxOYXZlcixXYW5lbG9cIi5zcGxpdChcbiAgICAnLCcsXG4pO1xudmFyIGFyRXhwbGljaXRCb29rbWFya3NXaXRoSWNvbnM6IHN0cmluZ1tdID0gJ21peGksbmF2ZXIsaGF0ZW5hJy5zcGxpdCgnLCcpO1xudmFyIHdhc0NTU0luamVjdGVkOiBib29sZWFuID0gZmFsc2U7XG5jbGFzcyBCb29rbWFya1Byb3ZpZGVyIHtcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiAgICBwdWJsaWMgaWNvblVSTDogc3RyaW5nO1xuICAgIHB1YmxpYyBtb2JpbGVJY29uVVJMOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocHVibGljIGRpc3BsYXlOYW1lOiBzdHJpbmcsIHB1YmxpYyBpc0V4cGxpY2l0OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaWQgPSBkaXNwbGF5TmFtZVxuICAgICAgICAgICAgLnJlcGxhY2UoLyAvZywgJycpXG4gICAgICAgICAgICAucmVwbGFjZSgvIS9nLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXC4vZywgJycpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwrL2csICdwbHVzJylcbiAgICAgICAgICAgIC5yZXBsYWNlKCdNaWNyb3NvZnQnLCAnbWVzc2VuZ2VyJylcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZS5yZXBsYWNlKCdHb29nbGUrJywgJ0dvb2dsZScpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRXhwbGljaXQgJiYgZ2lneWEudXRpbHMuYXJyYXkuaW5kZXhPZihhckV4cGxpY2l0Qm9va21hcmtzV2l0aEljb25zLCB0aGlzLmlkKSA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5pY29uVVJMID0gJy9ncy9pL1NpbXBsZVNoYXJlL2RlZmF1bHRCTVNJY29uLnBuZyc7XG4gICAgICAgICAgICB0aGlzLm1vYmlsZUljb25VUkwgPSAnL2dzL2kvU2ltcGxlU2hhcmUvZGVmYXVsdEJNU0ljb25fMzUucG5nJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaWNvblVSTCA9IGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL1NpbXBsZVNoYXJlLycgKyB0aGlzLmlkICsgJy5wbmcnKTtcbiAgICAgICAgICAgIHRoaXMubW9iaWxlSWNvblVSTCA9IGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL1NpbXBsZVNoYXJlLycgKyB0aGlzLmlkICsgJ18zNS5wbmcnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIEJvb2ttYXJrUHJvdmlkZXJzIHtcbiAgICBzdGF0aWMgb1Byb3ZpZGVyc0hhc2g6IE9iamVjdCA9IHt9O1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UHJvdmlkZXIoc1Byb3ZpZGVyOiBzdHJpbmcpOiBCb29rbWFya1Byb3ZpZGVyIHtcbiAgICAgICAgdmFyIGlkOiBzdHJpbmcgPSBzUHJvdmlkZXJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8gL2csICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyEvZywgJycpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwuL2csICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcKy9nLCAncGx1cycpXG4gICAgICAgICAgICAucmVwbGFjZSgnTWljcm9zb2Z0JywgJ21lc3NlbmdlcicpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIEJvb2ttYXJrUHJvdmlkZXJzLm9Qcm92aWRlcnNIYXNoW2lkXTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXRQcm92aWRlcnMoZW5hYmxlZFByb3ZpZGVyczogc3RyaW5nID0gJyonLCBkaXNhYmxlZFByb3ZpZGVyczogc3RyaW5nID0gJycpOiBCb29rbWFya1Byb3ZpZGVyW10ge1xuICAgICAgICB2YXIgYXJQcm92aWRlcnM6IEJvb2ttYXJrUHJvdmlkZXJbXSA9IFtdO1xuICAgICAgICB2YXIgYXJFbmFibGVkUHJvdmlkZXJzOiBzdHJpbmdbXSA9IGVuYWJsZWRQcm92aWRlcnNcbiAgICAgICAgICAgIC5yZXBsYWNlKC8gL2csICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyEvZywgJycpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwuL2csICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcKy9nLCAncGx1cycpXG4gICAgICAgICAgICAucmVwbGFjZSgnTWljcm9zb2Z0JywgJ21lc3NlbmdlcicpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgLnNwbGl0KCcsJyk7XG4gICAgICAgIHZhciBhckRpc2FibGVkUHJvdmlkZXJzOiBzdHJpbmdbXSA9IGRpc2FibGVkUHJvdmlkZXJzXG4gICAgICAgICAgICAucmVwbGFjZSgvIC9nLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC8hL2csICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXCsvZywgJ3BsdXMnKVxuICAgICAgICAgICAgLnJlcGxhY2UoJ01pY3Jvc29mdCcsICdtZXNzZW5nZXInKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC5zcGxpdCgnLCcpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJFbmFibGVkUHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc1Byb3ZpZGVyOiBzdHJpbmcgPSBhckVuYWJsZWRQcm92aWRlcnNbaV07XG4gICAgICAgICAgICBpZiAoIXNQcm92aWRlcikgY29udGludWU7XG4gICAgICAgICAgICBpZiAoc1Byb3ZpZGVyID09ICcqJykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGJvb2ttYXJrSWQgaW4gQm9va21hcmtQcm92aWRlcnMub1Byb3ZpZGVyc0hhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvb2ttYXJrUHJvdmlkZXI6IEJvb2ttYXJrUHJvdmlkZXIgPSBCb29rbWFya1Byb3ZpZGVycy5vUHJvdmlkZXJzSGFzaFtib29rbWFya0lkXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgIWJvb2ttYXJrUHJvdmlkZXIuaXNFeHBsaWNpdCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuYXJyYXkuaW5kZXhPZihhckVuYWJsZWRQcm92aWRlcnMsIGJvb2ttYXJrSWQpID09IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5hcnJheS5pbmRleE9mKGFyRGlzYWJsZWRQcm92aWRlcnMsIGJvb2ttYXJrSWQpID09IC0xXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJQcm92aWRlcnMucHVzaChib29rbWFya1Byb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyOiBCb29rbWFya1Byb3ZpZGVyID0gQm9va21hcmtQcm92aWRlcnMuZ2V0UHJvdmlkZXIoc1Byb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvdmlkZXIgJiYgZ2lneWEudXRpbHMuYXJyYXkuaW5kZXhPZihhckRpc2FibGVkUHJvdmlkZXJzLCBzUHJvdmlkZXIpID09IC0xKSBhclByb3ZpZGVycy5wdXNoKHByb3ZpZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhclByb3ZpZGVycztcbiAgICB9XG59XG5mb3IgKHZhciBpID0gMDsgaSA8IGFyUHJvdmlkZXJzVGVtcC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBib29rbWFyazogQm9va21hcmtQcm92aWRlciA9IG5ldyBCb29rbWFya1Byb3ZpZGVyKGFyUHJvdmlkZXJzVGVtcFtpXSwgZmFsc2UpO1xuICAgIEJvb2ttYXJrUHJvdmlkZXJzLm9Qcm92aWRlcnNIYXNoW2Jvb2ttYXJrLmlkXSA9IGJvb2ttYXJrO1xufVxuZm9yICh2YXIgaSA9IDA7IGkgPCBhckV4cGxpY2l0UHJvdmlkZXJzVGVtcC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBib29rbWFyazogQm9va21hcmtQcm92aWRlciA9IG5ldyBCb29rbWFya1Byb3ZpZGVyKGFyRXhwbGljaXRQcm92aWRlcnNUZW1wW2ldLCB0cnVlKTtcbiAgICBCb29rbWFya1Byb3ZpZGVycy5vUHJvdmlkZXJzSGFzaFtib29rbWFyay5pZF0gPSBib29rbWFyaztcbn1cbmNsYXNzIFNpbXBsZVNoYXJlUGx1Z2luIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbmplY3RlZENTUzogYm9vbGVhbjtcbiAgICBwcml2YXRlIHN0YXRpYyBkZWZhdWx0Q1NTOiBzdHJpbmcgPSBbXG4gICAgICAgICcuZ2lnLXNpbXBsZVNoYXJlVUkgKiwgZGl2LmdpZy1zaW1wbGVTaGFyZVVJLCBzcGFuLmdpZy1zaW1wbGVTaGFyZVVJLCAuZ2lnLXNpbXBsZVNoYXJlVUkgc3BhbiwgLmdpZy1zaW1wbGVTaGFyZVVJIGE6aG92ZXIsIC5naWctc2ltcGxlU2hhcmVVSSBhOnZpc2l0ZWQsIC5naWctc2ltcGxlU2hhcmVVSSBhOmxpbmssIC5naWctc2ltcGxlU2hhcmVVSSBhOmFjdGl2ZSB7JyxcbiAgICAgICAgJ25vbmU7dGV4dC1hbGlnbjpsZWZ0O2ZvbnQtZmFtaWx5OmFyaWFsO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToxMXB4O2JvcmRlcjpub25lOyBwYWRkaW5nOjBweDttYXJnaW46MHB4O2NvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7d2lkdGg6YXV0bztmbG9hdDpub25lOy1tb3otYm9yZGVyLXJhZGl1czowO2JvcmRlci1yYWRpdXM6MDtsaW5lLWhlaWdodDpub3JtYWw7JyxcbiAgICAgICAgJ30nLFxuICAgIF0uam9pbignJyk7XG4gICAgcHJpdmF0ZSBzdGF0aWMgbm9uTW9iaWxlQ1NTOiBzdHJpbmcgPSBbXG4gICAgICAgICdkaXYuZ2lnLXNpbXBsZVNoYXJlVUkge2JvcmRlcjogNXB4IHNvbGlkICM4NTg1ODU7IGJvcmRlci1yYWRpdXM6IDVweDt9JyxcbiAgICAgICAgJ2Rpdi5naWctc2ltcGxlU2hhcmVVSS1pbm5lciB7Ym9yZGVyOiAxcHggc29saWQgIzYzNjM2MzsgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRn0nLFxuICAgICAgICAnZGl2LmdpZy1zaW1wbGVTaGFyZVVJLWNhcHRpb24ge292ZXJmbG93OmhpZGRlbjtib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UwRTBFMDsgaGVpZ2h0OjE5cHg7cGFkZGluZy1sZWZ0OiA1cHg7fScsXG4gICAgICAgICdkaXYuZ2lnLXNpbXBsZVNoYXJlVUktY2FwdGlvbiwgZGl2LmdpZy1zaW1wbGVTaGFyZVVJLWNhcHRpb24tdGV4dCB7Zm9udC13ZWlnaHQ6IGJvbGQ7YmFja2dyb3VuZC1jb2xvcjojRjdGN0Y3OyBjb2xvcjojNTU1NTU1O2xpbmUtaGVpZ2h0OjE5cHg7fScsXG4gICAgICAgICdkaXYuZ2lnLXNpbXBsZVNoYXJlVUktY2FwdGlvbi10ZXh0IHtmbG9hdDpsZWZ0O30nLFxuICAgICAgICAnZGl2LmdpZy1zaW1wbGVTaGFyZVVJLWJ1dHRvbiB7d2lkdGg6IDExOXB4OyBtYXJnaW46IDAgNXB4IDdweCAwOyAgaGVpZ2h0OjE2cHg7IGN1cnNvcjpwb2ludGVyOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICpkaXNwbGF5OmlubGluZTsgem9vbToxOyB9JyxcbiAgICAgICAgJ2Rpdi5naWctc2ltcGxlU2hhcmVVSS1idXR0b24taW5uZXIge2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBsZWZ0O3BhZGRpbmctbGVmdDogMjBweDtsaW5lLWhlaWdodDoxNnB4O2hlaWdodDoxNnB4O30nLFxuICAgICAgICAnZGl2LmdpZy1zaW1wbGVTaGFyZVVJLWNvbnRlbnQge2xpbmUtaGVpZ2h0OjA7cGFkZGluZzogN3B4IDEwcHggMH0nLFxuICAgICAgICAnZGl2LmdpZy1zaW1wbGVTaGFyZVVJLWJ1dHRvbjpob3ZlciB7b3BhY2l0eTogMC43fScsXG4gICAgICAgICdzcGFuLmdpZy1zaW1wbGVTaGFyZVVJLWJ1dHRvblRleHQtZmFjZWJvb2ssIHNwYW4uZ2lnLXNpbXBsZVNoYXJlVUktYnV0dG9uVGV4dC10d2l0dGVyIHtmb250LXdlaWdodDogYm9sZDt9JyxcbiAgICAgICAgJ3NwYW4uZ2lnLXNpbXBsZVNoYXJlVUktYnV0dG9uVGV4dCB7bGluZS1oZWlnaHQ6MTZweDt9JyxcbiAgICAgICAgXCJkaXYuZ2lnLXNpbXBsZVNoYXJlVUktY2xvc2VCdXR0b24ge2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtjZW50ZXI7ZmxvYXQ6cmlnaHQ7Y3Vyc29yOnBvaW50ZXI7bWFyZ2luOiAwIDRweDt3aWR0aDo3cHg7aGVpZ2h0OjE5cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7KmRpc3BsYXk6aW5saW5lOyB6b29tOjE7YmFja2dyb3VuZC1pbWFnZTogdXJsKCdcIiArXG4gICAgICAgICAgICBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9TaGFyZS9NaW5pL0RpYWxvZy9EaWFsb2dfQ2xvc2UucG5nJykgK1xuICAgICAgICAgICAgXCInKX1cIixcbiAgICAgICAgJ2Rpdi5naWctc2ltcGxlU2hhcmVVSS1wb3N0U2hhcmUtY29ubmVjdEJvZHlUZXh0IHtjb2xvcjogIzU1NTU1NTtmb250LXNpemU6IDE0cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7aGVpZ2h0OiAxOHB4O21hcmdpbjogMjBweCAyMHB4IDEwcHg7b3ZlcmZsb3c6IGhpZGRlbjt0ZXh0LWFsaWduOiBjZW50ZXI7fScsXG4gICAgICAgICdkaXYuZ2lnLXNpbXBsZVNoYXJlVUktcG9zdFNoYXJlLW5ldmVyU2hvd0xpbmsge21hcmdpbi10b3A6IDQwcHg7Y29sb3I6ICMwMDg2RjE7Y3Vyc29yOiBwb2ludGVyO2ZvbnQtc2l6ZTogMTBweDttYXJnaW4tYm90dG9tOiA0cHg7dGV4dC1hbGlnbjogY2VudGVyO30nLFxuICAgICAgICAnZGl2LmdpZy1zaW1wbGVTaGFyZVVJLXBvc3RTaGFyZS1jb25uZWN0QnV0dG9uIHtjdXJzb3I6IHBvaW50ZXI7d2lkdGg6IDIxMnB4OyBoZWlnaHQ6IDMwcHg7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O21hcmdpbjogMCBhdXRvO2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyIGNlbnRlcjt9JyxcbiAgICAgICAgJ2Rpdi5naWctc2ltcGxlU2hhcmVVSS1wb3N0U2hhcmUtY29ubmVjdEJ1dHRvbjpob3ZlciB7b3BhY2l0eTogMC43fScsXG4gICAgXS5qb2luKCcnKTtcbiAgICBwcml2YXRlIHN0YXRpYyBtb2JpbGVDU1M6IHN0cmluZyA9IFtcbiAgICAgICAgJ2Rpdi5naWctc2ltcGxlU2hhcmVVSSAqIHtmb250LXNpemU6IDE2cHg7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0Om5vbmU7IC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtmb250LWZhbWlseTpzYW5zLXNlcmlmfScsXG4gICAgICAgICdkaXYuZ2lnLXNpbXBsZVNoYXJlVUkge2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTt9JyxcbiAgICAgICAgJ2Rpdi5naWctc2ltcGxlU2hhcmVVSS1pbm5lciB7fScsXG4gICAgICAgICdkaXYuZ2lnLXNpbXBsZVNoYXJlVUktY2FwdGlvbiB7cGFkZGluZzogNHB4IDA7dGV4dC1hbGlnbjogY2VudGVyOyBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczNzM3OyBmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogI2NiY2JjYn0nLFxuICAgICAgICAnZGl2LmdpZy1zaW1wbGVTaGFyZVVJLWJ1dHRvbiB7JyxcbiAgICAgICAgZ2lneWEubG9jYWxJbmZvLmlzSU9TID8gJy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOy13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDA7LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTsnIDogJycsXG4gICAgICAgICdsaW5lLWhlaWdodDowcHg7IGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7IGJvcmRlci1yYWRpdXM6IDVweDt0ZXh0LWFsaWduOmxlZnQ7d2lkdGg6IDEzOXB4OyBtYXJnaW46IDhweCA2cHggMDsgb3ZlcmZsb3c6aGlkZGVuOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICcsXG4gICAgICAgICdiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCNmZmZmZmYpLCBjb2xvci1zdG9wKDEwMCUsI2VkZWRlZCkpOycsXG4gICAgICAgICdiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgMCUsI2VkZWRlZCAxMDAlKTsnLFxuICAgICAgICAnYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgICNmZmZmZmYgMCUsI2VkZWRlZCAxMDAlKTsnLFxuICAgICAgICAnfScsXG4gICAgICAgICdkaXYuZ2lnLXNpbXBsZVNoYXJlVUktYnV0dG9uLXRvdWNoZG93biB7JyxcbiAgICAgICAgJ2JhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIzc3Nzc3NyksIGNvbG9yLXN0b3AoMTAwJSwjNWU1ZTVlKSk7JyxcbiAgICAgICAgJ2JhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzc3Nzc3NyAwJSwjNWU1ZTVlIDEwMCUpOycsXG4gICAgICAgICdiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgIzc3Nzc3NyAwJSwjNWU1ZTVlIDEwMCUpOycsXG4gICAgICAgICd9JyxcbiAgICAgICAgJ2Rpdi5naWctc2ltcGxlU2hhcmVVSS1idXR0b24tdG91Y2hkb3duIC5naWctc2ltcGxlU2hhcmVVSS1idXR0b25UZXh0IHtjb2xvcjogI0ZGRkZGRjt9JyxcbiAgICAgICAgJ2Rpdi5naWctc2ltcGxlU2hhcmVVSS1idXR0b24taW5uZXIge2ZvbnQtc2l6ZTogMTZweDsgY29sb3I6ICMzMzMzMzM7IHBhZGRpbmctbGVmdDogNDVweDtsaW5lLWhlaWdodDoxNXB4O2Rpc3BsYXk6IHRhYmxlLWNlbGw7IHZlcnRpY2FsLWFsaWduOm1pZGRsZTsgaGVpZ2h0OiA0NXB4O2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOjVweCBjZW50ZXJ9JyxcbiAgICAgICAgJ2Rpdi5naWctc2ltcGxlU2hhcmVVSS1jb250ZW50LWNvbnRhaW5lciB7fScsXG4gICAgICAgICdkaXYuZ2lnLXNpbXBsZVNoYXJlVUktY29udGVudCB7JyxcbiAgICAgICAgZ2lneWEubG9jYWxJbmZvLmlzSU9TXG4gICAgICAgICAgICA/ICctd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjstd2Via2l0LXBlcnNwZWN0aXZlOiAxMDAwOy13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7IG92ZXJmbG93LXNjcm9sbGluZzogdG91Y2gnXG4gICAgICAgICAgICA6ICcnLFxuICAgICAgICAnbGluZS1oZWlnaHQ6MDtvdmVyZmxvdzpzY3JvbGw7dGV4dC1hbGlnbjpjZW50ZXI7fScsXG4gICAgICAgICdzcGFuLmdpZy1zaW1wbGVTaGFyZVVJLWJ1dHRvblRleHQtZmFjZWJvb2ssIHNwYW4uZ2lnLXNpbXBsZVNoYXJlVUktYnV0dG9uVGV4dC10d2l0dGVyIHtmb250LXdlaWdodDogYm9sZDt9JyxcbiAgICBdLmpvaW4oJycpO1xuICAgIHByaXZhdGUgc3RhdGljIHRlbXBsYXRlczogT2JqZWN0ID0ge1xuICAgICAgICBtb2JpbGVDb250YWluZXI6IFtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXNpbXBsZVNoYXJlVUktaW5uZXJcIj4nLFxuICAgICAgICAgICAgJyRjYXB0aW9uJyxcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZ2lnLXNpbXBsZVNoYXJlVUktY29udGVudC1jb250YWluZXJcIj48ZGl2IGNsYXNzPVwiZ2lnLXNpbXBsZVNoYXJlVUktY29udGVudFwiPjwvZGl2PjwvZGl2PicsXG4gICAgICAgICAgICAnPC9kaXY+JyxcbiAgICAgICAgXS5qb2luKCcnKSxcbiAgICAgICAgbW9iaWxlQm9va21hcmtCdXR0b246ICc8ZGl2IGNsYXNzPVwiZ2lnLXNpbXBsZVNoYXJlVUktYnV0dG9uXCI+PGRpdiBjbGFzcz1cImdpZy1zaW1wbGVTaGFyZVVJLWJ1dHRvbi1pbm5lclwiPiRidXR0b25Db250ZW50PC9kaXY+PC9kaXY+JyxcbiAgICAgICAgbW9iaWxlQm9va21hcmtCdXR0b25Db250ZW50OiAnPHNwYW4gc3R5bGU9XCIke2J1dHRvblRleHRDU1N9XCIgY2xhc3M9XCIke2J1dHRvblRleHRDbGFzc05hbWV9XCI+JHtkaXNwbGF5TmFtZX08L3NwYW4+JyxcbiAgICAgICAgbW9iaWxlQ2FwdGlvbjogJzxkaXYgY2xhc3M9XCJnaWctc2ltcGxlU2hhcmVVSS1jYXB0aW9uXCIgaWQ9XCJnaWctc2ltcGxlU2hhcmVVSS1jYXB0aW9uLXRleHQtJGlkXCI+JGNhcHRpb25UZXh0PC9kaXY+JyxcblxuICAgICAgICBjb250YWluZXI6IFsnPGRpdiBjbGFzcz1cImdpZy1zaW1wbGVTaGFyZVVJLWlubmVyXCI+JywgJyRjYXB0aW9uJywgJzxkaXYgY2xhc3M9XCJnaWctc2ltcGxlU2hhcmVVSS1jb250ZW50XCI+PC9kaXY+JywgJzwvZGl2PiddLmpvaW4oJycpLFxuXG4gICAgICAgIGNhcHRpb246XG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1zaW1wbGVTaGFyZVVJLWNhcHRpb25cIj48ZGl2IGNsYXNzPVwiZ2lnLXNpbXBsZVNoYXJlVUktY2FwdGlvbi10ZXh0XCIgaWQ9XCJnaWctc2ltcGxlU2hhcmVVSS1jYXB0aW9uLXRleHQtJGlkXCI+JGNhcHRpb25UZXh0PC9kaXY+PGRpdiBjbGFzcz1cImdpZy1zaW1wbGVTaGFyZVVJLWNsb3NlQnV0dG9uXCIgYXJpYS1sYWJlbD1cIiRjbG9zZVRleHRcIj48L2Rpdj48L2Rpdj4nLFxuICAgICAgICBib29rbWFya0J1dHRvbjogJzxkaXYgY2xhc3M9XCJnaWctc2ltcGxlU2hhcmVVSS1idXR0b25cIj48ZGl2IGNsYXNzPVwiZ2lnLXNpbXBsZVNoYXJlVUktYnV0dG9uLWlubmVyXCI+JGJ1dHRvbkNvbnRlbnQ8L2Rpdj48L2Rpdj4nLFxuICAgICAgICBib29rbWFya0J1dHRvbkNvbnRlbnQ6ICc8c3BhbiBzdHlsZT1cIiR7YnV0dG9uVGV4dENTU31cIiBjbGFzcz1cIiR7YnV0dG9uVGV4dENsYXNzTmFtZX1cIj4ke2Rpc3BsYXlOYW1lfTwvc3Bhbj4nLFxuICAgICAgICAncG9zdFNoYXJlQWN0aW9uLWNvbm5lY3QnOiBbXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1zaW1wbGVTaGFyZVVJLXBvc3RTaGFyZS1jb25uZWN0Qm9keVRleHRcIj4kYm9keTwvZGl2PicsXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1zaW1wbGVTaGFyZVVJLXBvc3RTaGFyZS1jb25uZWN0QnV0dG9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybChcXCckYnRuU3JjXFwnKVwiPjwvZGl2PicsXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImdpZy1zaW1wbGVTaGFyZVVJLXBvc3RTaGFyZS1uZXZlclNob3dMaW5rXCI+JG5ldmVyU2hvd1RleHQ8L2Rpdj4nLFxuICAgICAgICBdLmpvaW4oJycpLFxuICAgIH07XG4gICAgcHJpdmF0ZSBpbmplY3REZWZhdWx0Q1NTKHBhcmFtczogT2JqZWN0ID0ge30pOiB2b2lkIHtcbiAgICAgICAgaWYgKCF3YXNDU1NJbmplY3RlZCkge1xuICAgICAgICAgICAgdmFyIGNzcyA9IFNpbXBsZVNoYXJlUGx1Z2luLmRlZmF1bHRDU1M7XG4gICAgICAgICAgICBpZiAodGhpcy5pc01vYmlsZVVJKSB7XG4gICAgICAgICAgICAgICAgY3NzICs9IFNpbXBsZVNoYXJlUGx1Z2luLm1vYmlsZUNTUztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3NzICs9IFNpbXBsZVNoYXJlUGx1Z2luLm5vbk1vYmlsZUNTUztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZENTUyhjc3MsIHBhcmFtc1snY3NzUHJlZml4J10gYXMgc3RyaW5nKTtcbiAgICAgICAgICAgIHdhc0NTU0luamVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjb250YWluZXI6IEhUTUxFbGVtZW50O1xuICAgIHB1YmxpYyBpc01vYmlsZVVJOiBib29sZWFuO1xuICAgIHByaXZhdGUgaXNEcmF3aW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGNvbnRlbnRDb250YWluZXI6IEhUTUxFbGVtZW50O1xuICAgIHB1YmxpYyBwcm92aWRlcnM6IEJvb2ttYXJrUHJvdmlkZXJbXTtcbiAgICBwcml2YXRlIGxhc3RQcm92aWRlclNob3duSW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB1c2VyOiBhbnk7XG4gICAgcHJpdmF0ZSB1bmlxdWVJRDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXJhbXM6IE9iamVjdCwgcHJpdmF0ZSByZWZTdHJpbmc6IHN0cmluZykge1xuICAgICAgICB0aGlzLnVuaXF1ZUlEID0gU3RyaW5nKERhdGUubm93KCkpO1xuICAgICAgICB0aGlzLnByb3ZpZGVycyA9IEJvb2ttYXJrUHJvdmlkZXJzLmdldFByb3ZpZGVycyh0aGlzLnBhcmFtc1snbW9yZUVuYWJsZWRQcm92aWRlcnMnXSwgdGhpcy5wYXJhbXNbJ21vcmVEaXNhYmxlZFByb3ZpZGVycyddKTtcbiAgICAgICAgdmFyIGRldmljZVR5cGUgPSB0aGlzLnBhcmFtc1snZGV2aWNlVHlwZSddID8gdGhpcy5wYXJhbXNbJ2RldmljZVR5cGUnXS50b0xvd2VyQ2FzZSgpIDogJ2Rlc2t0b3AnO1xuICAgICAgICB0aGlzLmlzTW9iaWxlVUkgPSBkZXZpY2VUeXBlID09ICdtb2JpbGUnIHx8IChkZXZpY2VUeXBlID09ICdhdXRvJyAmJiBnaWd5YS5sb2NhbEluZm8uaXNNb2JpbGUpO1xuICAgICAgICB0aGlzLmluamVjdERlZmF1bHRDU1MoKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmdldENvbnRhaW5lcigpO1xuXG4gICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5nZXRVc2VySW5mbyh0aGlzLnBhcmFtcywge1xuICAgICAgICAgICAgY2FsbGJhY2s6IChyZXM6IE9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHJlc1sndXNlciddO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub25Cb2R5TW91c2VEb3duRGVsZWdhdGUgPSBlID0+IHRoaXMub25Cb2R5TW91c2VEb3duKGUpO1xuICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgJ21vdXNlZG93bicsIHRoaXMub25Cb2R5TW91c2VEb3duRGVsZWdhdGUpO1xuICAgICAgICB0aGlzLm9uQm9keUtleURvd25EZWxlZ2F0ZSA9IGUgPT4gdGhpcy5vbkJvZHlLZXlEb3duKGUpO1xuICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgJ2tleWRvd24nLCB0aGlzLm9uQm9keUtleURvd25EZWxlZ2F0ZSk7XG4gICAgICAgIGlmICh0aGlzLmlzTW9iaWxlVUkpIHtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGREaWFsb2dCYWNrTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBldmVudE5hbWU6ICdsb2FkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLnBhcmFtcyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFRleHQodGV4dEtleTogc3RyaW5nLCByZXBsYWNlU3RyPzogc3RyaW5nLCB3aXRoU3RyPzogc3RyaW5nKSB7XG4gICAgICAgIHZhciBsYW5nID0gdGhpcy5wYXJhbXNbJ2xhbmcnXTtcbiAgICAgICAgdmFyIHBsdWdpbiA9ICdnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5zaW1wbGVTaGFyZS5qcyc7XG4gICAgICAgIGlmIChsYW5nID09ICd0ZS1zdCcpIHJldHVybiAnVEVTVF8nICsgdGV4dEtleS5zdWJzdHJpbmcoMCwgMTApO1xuICAgICAgICBpZiAoIWxhbmcpIGxhbmcgPSAnZW4nO1xuICAgICAgICB2YXIgdCA9IGdpZ3lhWydpMThuJ11bcGx1Z2luXVtsYW5nXVt0ZXh0S2V5XTtcbiAgICAgICAgaWYgKHQgJiYgcmVwbGFjZVN0cikgdCA9IHQucmVwbGFjZShyZXBsYWNlU3RyLCB3aXRoU3RyKTtcblxuICAgICAgICByZXR1cm4gdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRDb250ZW50SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHZhciBoOiBudW1iZXI7XG4gICAgICAgIGlmICh0aGlzLmlzTW9iaWxlVUkpIHtcbiAgICAgICAgICAgIGggPSBnaWd5YS51dGlscy52aWV3cG9ydC5nZXRJbm5lclNpemUoKS5oIC0gZ2lneWEudXRpbHMuRE9NLmdldEhUTUxTaXplKFNpbXBsZVNoYXJlUGx1Z2luLnRlbXBsYXRlc1snbW9iaWxlQ2FwdGlvbiddLCB0aGlzLmNvbnRhaW5lcikuaDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGggPSB0aGlzLnBhcmFtc1snaGVpZ2h0J10gLSBnaWd5YS51dGlscy5ET00uZ2V0SFRNTFNpemUoU2ltcGxlU2hhcmVQbHVnaW4udGVtcGxhdGVzWydjYXB0aW9uJ10sIHRoaXMuY29udGFpbmVyKS5oO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoO1xuICAgIH1cbiAgICBwcml2YXRlIGdldE1heEl0ZW1zVG9QZXJQYWdlKCk6IG51bWJlciB7XG4gICAgICAgIHZhciB3OiBudW1iZXIgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aDtcbiAgICAgICAgdmFyIGg6IG51bWJlciA9IHRoaXMuZ2V0Q29udGVudEhlaWdodCgpO1xuICAgICAgICB2YXIgYnV0dG9uVGVtcGxhdGU6IHN0cmluZyA9IHRoaXMuaXNNb2JpbGVVSSA/IFNpbXBsZVNoYXJlUGx1Z2luLnRlbXBsYXRlc1snbW9iaWxlQm9va21hcmtCdXR0b24nXSA6IFNpbXBsZVNoYXJlUGx1Z2luLnRlbXBsYXRlc1snYm9va21hcmtCdXR0b24nXTtcbiAgICAgICAgdmFyIGZha2VJdGVtSFRNTDogc3RyaW5nID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwoYnV0dG9uVGVtcGxhdGUsIHsgc3R5bGVPdmVycmlkZTogJycgfSk7XG4gICAgICAgIHZhciBpdGVtU2l6ZSA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRIVE1MU2l6ZShmYWtlSXRlbUhUTUwsIHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgdmFyIGl0ZW1zUGVyUm93OiBudW1iZXIgPSBNYXRoLmZsb29yKHcgLyBpdGVtU2l6ZS53KTtcbiAgICAgICAgdmFyIGl0ZW1zUGVyQ29sOiBudW1iZXIgPSBNYXRoLmZsb29yKGggLyBpdGVtU2l6ZS5oKTtcblxuICAgICAgICBpZiAodGhpcy5pc01vYmlsZVVJKSBpdGVtc1BlckNvbCAqPSAzO1xuICAgICAgICByZXR1cm4gaXRlbXNQZXJSb3cgKiBpdGVtc1BlckNvbDtcbiAgICB9XG4gICAgcHVibGljIGRyYXdOZXh0UGFnZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc0RyYXdpbmcgPSB0cnVlO1xuXG4gICAgICAgIHZhciBpdGVtc1RvU2hvdzogbnVtYmVyID0gTWF0aC5taW4odGhpcy5nZXRNYXhJdGVtc1RvUGVyUGFnZSgpLCB0aGlzLnByb3ZpZGVycy5sZW5ndGgpO1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5sYXN0UHJvdmlkZXJTaG93bkluZGV4OyBpIDwgdGhpcy5wcm92aWRlcnMubGVuZ3RoICYmIGkgLSB0aGlzLmxhc3RQcm92aWRlclNob3duSW5kZXggPCBpdGVtc1RvU2hvdzsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXI6IEJvb2ttYXJrUHJvdmlkZXIgPSB0aGlzLnByb3ZpZGVyc1tpXTtcbiAgICAgICAgICAgIHZhciBidXR0b25Db250ZW50VGVtcGxhdGU6IHN0cmluZyA9IHRoaXMuaXNNb2JpbGVVSVxuICAgICAgICAgICAgICAgID8gU2ltcGxlU2hhcmVQbHVnaW4udGVtcGxhdGVzWydtb2JpbGVCb29rbWFya0J1dHRvbkNvbnRlbnQnXVxuICAgICAgICAgICAgICAgIDogU2ltcGxlU2hhcmVQbHVnaW4udGVtcGxhdGVzWydib29rbWFya0J1dHRvbkNvbnRlbnQnXTtcbiAgICAgICAgICAgIHZhciBidXR0b25UZXh0Q2xhc3NOYW1lID0gJ2dpZy1zaW1wbGVTaGFyZVVJLWJ1dHRvblRleHQgZ2lnLXNpbXBsZVNoYXJlVUktYnV0dG9uVGV4dC0nICsgcHJvdmlkZXIuaWQ7XG4gICAgICAgICAgICB2YXIgZGlzcGxheU5hbWU6IHN0cmluZyA9IHRoaXMuZ2V0VGV4dChwcm92aWRlci5pZCkgfHwgcHJvdmlkZXIuZGlzcGxheU5hbWU7XG5cbiAgICAgICAgICAgIHZhciBidXR0b25Db250ZW50ID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwoYnV0dG9uQ29udGVudFRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dENTUzogJycsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dENsYXNzTmFtZTogYnV0dG9uVGV4dENsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciB0ZXh0V2lkdGg6IG51bWJlciA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRIVE1MU2l6ZShidXR0b25Db250ZW50LCB0aGlzLmNvbnRhaW5lcikudztcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSkge1xuICAgICAgICAgICAgICAgIHZhciBtYXhUZXh0V2lkdGg6IG51bWJlciA9IDg1O1xuICAgICAgICAgICAgICAgIHZhciBmb250U2l6ZTogbnVtYmVyID0gMTY7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAodGV4dFdpZHRoID4gbWF4VGV4dFdpZHRoICYmIGZvbnRTaXplID49IDE0KSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbnRlbnQgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbChidXR0b25Db250ZW50VGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblRleHRDU1M6ICdmb250LXNpemU6JyArIGZvbnRTaXplLS0gKyAncHg7JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblRleHRDbGFzc05hbWU6IGJ1dHRvblRleHRDbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogcHJvdmlkZXIuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0V2lkdGggPSBnaWd5YS51dGlscy5ET00uZ2V0SFRNTFNpemUoYnV0dG9uQ29udGVudCwgdGhpcy5jb250YWluZXIpLnc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGJhY2tncm91bmRJbWFnZSA9IHRoaXMuaXNNb2JpbGVVSSA/IHByb3ZpZGVyLm1vYmlsZUljb25VUkwgOiBwcm92aWRlci5pY29uVVJMO1xuICAgICAgICAgICAgdmFyIGl0ZW06IE9iamVjdCA9IGdpZ3lhLnV0aWxzLm9iamVjdC5tZXJnZShbXG4gICAgICAgICAgICAgICAgdGhpcy5wcm92aWRlcnNbaV0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBidXR0b25Db250ZW50OiBidXR0b25Db250ZW50LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIHZhciBidXR0b25UZW1wbGF0ZTogc3RyaW5nID0gdGhpcy5pc01vYmlsZVVJID8gU2ltcGxlU2hhcmVQbHVnaW4udGVtcGxhdGVzWydtb2JpbGVCb29rbWFya0J1dHRvbiddIDogU2ltcGxlU2hhcmVQbHVnaW4udGVtcGxhdGVzWydib29rbWFya0J1dHRvbiddO1xuICAgICAgICAgICAgdmFyIHNCdXR0b25Db250ZW50OiBzdHJpbmcgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbChidXR0b25UZW1wbGF0ZSwgaXRlbSk7XG4gICAgICAgICAgICB2YXIgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBidXR0b25EaXYuaW5uZXJIVE1MID0gc0J1dHRvbkNvbnRlbnQ7XG4gICAgICAgICAgICBidXR0b25EaXYgPSBidXR0b25EaXYuZmlyc3RDaGlsZCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgICAgIGJ1dHRvbkRpdi5zZXRBdHRyaWJ1dGUoJ3Byb3ZpZGVyJywgcHJvdmlkZXIuaWQpO1xuXG4gICAgICAgICAgICBpZiAoYmFja2dyb3VuZEltYWdlKSB7XG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyhidXR0b25EaXYsICdnaWctc2ltcGxlU2hhcmVVSS1idXR0b24taW5uZXInKVswXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnXCIgKyBiYWNrZ3JvdW5kSW1hZ2UgKyBcIicpXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRzVG9CdXR0b24oYnV0dG9uRGl2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGFzdFByb3ZpZGVyU2hvd25JbmRleCA9IGk7XG4gICAgICAgIHRoaXMuaXNEcmF3aW5nID0gZmFsc2U7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRFdmVudHNUb0J1dHRvbihidXR0b25EaXY6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzTW9iaWxlVUkpIHtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGJ1dHRvbkRpdiwgJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uRGl2LmNsYXNzTmFtZSA9ICdnaWctc2ltcGxlU2hhcmVVSS1idXR0b24gZ2lnLXNpbXBsZVNoYXJlVUktYnV0dG9uLXRvdWNoZG93bic7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGJ1dHRvbkRpdiwgJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBidXR0b25EaXYuY2xhc3NOYW1lID0gJ2dpZy1zaW1wbGVTaGFyZVVJLWJ1dHRvbic7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRCdXR0b25TdWJtaXRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBidXR0b25EaXYsXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnV0dG9uRGl2LmNsYXNzTmFtZS5pbmRleE9mKCd0b3VjaGRvd24nKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblByb3ZpZGVyQ2xpY2soYnV0dG9uRGl2LmdldEF0dHJpYnV0ZSgncHJvdmlkZXInKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uRGl2LmNsYXNzTmFtZSA9ICdnaWctc2ltcGxlU2hhcmVVSS1idXR0b24nO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3RvdWNoZW5kJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQnV0dG9uU3VibWl0TGlzdGVuZXIoYnV0dG9uRGl2LCAoKSA9PiB0aGlzLm9uUHJvdmlkZXJDbGljayhidXR0b25EaXYuZ2V0QXR0cmlidXRlKCdwcm92aWRlcicpKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGRyYXcoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5pc01vYmlsZVVJKSB0aGlzLmNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIGBnaWctc2ltcGxlU2hhcmVVSS1jYXB0aW9uLXRleHQtJHt0aGlzLnVuaXF1ZUlEfWApO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NOYW1lID0gJ2dpZy1zaW1wbGVTaGFyZVVJJztcblxuICAgICAgICB2YXIgdGVtcGxhdGU6IHN0cmluZyA9IHRoaXMuaXNNb2JpbGVVSSA/IFNpbXBsZVNoYXJlUGx1Z2luLnRlbXBsYXRlc1snbW9iaWxlQ29udGFpbmVyJ10gOiBTaW1wbGVTaGFyZVBsdWdpbi50ZW1wbGF0ZXNbJ2NvbnRhaW5lciddO1xuICAgICAgICB2YXIgdGVtcGxhdGVGaWxsZXI6IE9iamVjdCA9IHtcbiAgICAgICAgICAgIGNhcHRpb246IHRoaXMuaXNNb2JpbGVVSSA/IFNpbXBsZVNoYXJlUGx1Z2luLnRlbXBsYXRlc1snbW9iaWxlQ2FwdGlvbiddIDogU2ltcGxlU2hhcmVQbHVnaW4udGVtcGxhdGVzWydjYXB0aW9uJ10sXG4gICAgICAgICAgICBjYXB0aW9uVGV4dDogdGhpcy5nZXRUZXh0KCdzaGFyZV93aXRoX3lvdXJfZnJpZW5kcycpLFxuICAgICAgICAgICAgaWQ6IHRoaXMudW5pcXVlSUQsXG4gICAgICAgICAgICBjbG9zZVRleHQ6ICcnLCAvLyBUT0RPOiBMb2NhbGl6ZWQgY2xvc2UgdGV4dC5cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGVtcGxhdGUsIHRlbXBsYXRlRmlsbGVyKTtcblxuICAgICAgICBpZiAoIWdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdEZhbHNlKHRoaXMucGFyYW1zWydzaG93RW1haWxCdXR0b24nXSkpIHtcbiAgICAgICAgICAgIHZhciBlbWFpbFByb3ZpZGVyOiBCb29rbWFya1Byb3ZpZGVyID0gbmV3IEJvb2ttYXJrUHJvdmlkZXIoJ2VtYWlsJywgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5wcm92aWRlcnMuc3BsaWNlKDEsIDAsIGVtYWlsUHJvdmlkZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc01vYmlsZVVJKSB7XG4gICAgICAgICAgICB2YXIgbWF4SXRlbXNQZXJQYWdlOiBudW1iZXIgPSB0aGlzLmdldE1heEl0ZW1zVG9QZXJQYWdlKCk7XG4gICAgICAgICAgICBpZiAoIWdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdEZhbHNlKHRoaXMucGFyYW1zWydzaG93TW9yZUJ1dHRvbiddKSAmJiB0aGlzLnByb3ZpZGVycy5sZW5ndGggPiBtYXhJdGVtc1BlclBhZ2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgbW9yZVByb3ZpZGVyOiBCb29rbWFya1Byb3ZpZGVyID0gbmV3IEJvb2ttYXJrUHJvdmlkZXIoJ21vcmUnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm92aWRlcnMuc3BsaWNlKG1heEl0ZW1zUGVyUGFnZSAtIDEsIDAsIG1vcmVQcm92aWRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy1zaW1wbGVTaGFyZVVJLWNvbnRlbnQnKVswXTtcbiAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSAmJiB0aGlzLmNvbnRlbnRDb250YWluZXIpIHtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHRoaXMuY29udGVudENvbnRhaW5lciwgJ3Njcm9sbCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAvL2xvYWQgbW9yZSBjb250ZW50IHdoZW4gc2Nyb2xsaW5nIGhhcyByZWFjaGVkIHRoZSBlbmQgbWludXMgb25lIHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmlzRHJhd2luZyAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRDb250YWluZXIuc2Nyb2xsVG9wICsgdGhpcy5jb250ZW50Q29udGFpbmVyLm9mZnNldEhlaWdodCA+PVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyLnNjcm9sbEhlaWdodCAtIHRoaXMuY29udGVudENvbnRhaW5lci5vZmZzZXRIZWlnaHQgLyAyXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd05leHRQYWdlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRDb250ZW50QXJlYSh0cnVlKTtcbiAgICAgICAgdGhpcy5kcmF3TmV4dFBhZ2UoKTtcbiAgICAgICAgdmFyIGNsb3NlQnV0dG9uOiBIVE1MRWxlbWVudCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5jb250YWluZXIsICdnaWctc2ltcGxlU2hhcmVVSS1jbG9zZUJ1dHRvbicpWzBdO1xuICAgICAgICBpZiAoY2xvc2VCdXR0b24pIHtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRCdXR0b25TdWJtaXRMaXN0ZW5lcihjbG9zZUJ1dHRvbiwgKCkgPT4gdGhpcy5jbG9zZSgpKTtcbiAgICAgICAgfVxuICAgICAgICAvL2lPUzUgd29ya2Fyb3VuZCAob25lIGZpbmdlciBzY3JvbGwgc3RvcHBlZCB3b3JraW5nKVxuICAgICAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzSU9TICYmIGdpZ3lhLmxvY2FsSW5mby5pb3NWZXJzaW9uIDw9IDUpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudENvbnRhaW5lci5zdHlsZVsnd2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcnXSA9ICdhdXRvJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNNb2JpbGVVSSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1zWydzbmFwVG9FbGVtZW50SUQnXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc25hcFRvRWxlbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnBhcmFtc1snc25hcFRvRWxlbWVudElEJ10pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vdXNlUG9zID0gZ2lneWEudXRpbHMubW91c2UuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAobW91c2VQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudG9wID0gbW91c2VQb3MueSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmxlZnQgPSBtb3VzZVBvcy54ICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlmcmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpZ3lhX2lmcl8nICsgdGhpcy5jb250YWluZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaWZyZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmVsLnN0eWxlLnRvcCA9IG1vdXNlUG9zLnkgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWZyZWwuc3R5bGUubGVmdCA9IG1vdXNlUG9zLnggKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uUHJvdmlkZXJDbGljayhwcm92aWRlcjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHZhciBwYXJhbXM6IE9iamVjdCA9IGdpZ3lhLnV0aWxzLm9iamVjdC5jbG9uZSh0aGlzLnBhcmFtcywgZmFsc2UsIHRydWUpO1xuICAgICAgICB2YXIgdXNlckFjdGlvbiA9IHRoaXMucGFyYW1zW3Byb3ZpZGVyICsgJ1VzZXJBY3Rpb24nXTtcbiAgICAgICAgaWYgKCF1c2VyQWN0aW9uKSB1c2VyQWN0aW9uID0gdGhpcy5wYXJhbXNbJ3VzZXJBY3Rpb24nXTtcbiAgICAgICAgcGFyYW1zWydoaWRlU2lkZWJhciddID0gdHJ1ZTtcbiAgICAgICAgcGFyYW1zWydvcGVyYXRpb25Nb2RlJ10gPSAnbXVsdGlTZWxlY3QnO1xuICAgICAgICBwYXJhbXNbJ29uU2VuZERvbmUnXSA9IHRoaXMucGFyYW1zWydvblNlbmREb25lJ107XG4gICAgICAgIGlmIChwcm92aWRlciA9PSAnZW1haWwnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc01vYmlsZVVJKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1YmplY3QgPSB1c2VyQWN0aW9uWyd0aXRsZSddIHx8ICcnO1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gdXNlckFjdGlvblsnbGlua0JhY2snXSB8fCAnJztcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAnbWFpbHRvOj90bz0mc3ViamVjdD0nICsgc3ViamVjdCArICcmYm9keT0nICsgYm9keTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zWydpbml0aWFsVmlldyddID0gJ2VtYWlsJztcbiAgICAgICAgICAgICAgICBkZWxldGUgcGFyYW1zWydjb250YWluZXJJRCddO1xuICAgICAgICAgICAgICAgIHBhcmFtc1snY29udGFpbmVySUQnXSA9ICcnO1xuICAgICAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5zaG93U2hhcmVVSShwYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHByb3ZpZGVyID09ICdtb3JlJykge1xuICAgICAgICAgICAgcGFyYW1zWydpbml0aWFsVmlldyddID0gJ21vcmUnO1xuICAgICAgICAgICAgZGVsZXRlIHBhcmFtc1snY29udGFpbmVySUQnXTtcbiAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5zaG93U2hhcmVVSShwYXJhbXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyYW1zWydwcm92aWRlciddID0gcHJvdmlkZXI7XG4gICAgICAgICAgICBwYXJhbXNbJ3VzZXJBY3Rpb24nXSA9IHVzZXJBY3Rpb247XG4gICAgICAgICAgICBwYXJhbXNbJ3Byb3ZpZGVyS2V5J10gPSB0aGlzLnBhcmFtc1twcm92aWRlciArICdLZXknXTtcblxuICAgICAgICAgICAgdmFyIG1lZGlhSXRlbXMgPSB1c2VyQWN0aW9uWydtZWRpYUl0ZW1zJ107XG4gICAgICAgICAgICB2YXIgbWVkaWE7XG4gICAgICAgICAgICBpZiAobWVkaWFJdGVtcykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHUgPSAwOyB1IDwgbWVkaWFJdGVtcy5sZW5ndGg7IHUrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWVkaWFJdGVtID0gbWVkaWFJdGVtc1t1XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lZGlhSXRlbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVkaWFJdGVtLnR5cGUgPT0gJ2ltYWdlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhID0gbWVkaWFJdGVtLnNyYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZWRpYUl0ZW0udHlwZSA9PSAndmlkZW8nIHx8IG1lZGlhSXRlbS50eXBlID09ICdmbGFzaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpYSA9IG1lZGlhSXRlbS5wcmV2aWV3SW1hZ2VVUkw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWVkaWEpIHBhcmFtc1sndGh1bWJuYWlsVVJMJ10gPSBtZWRpYTtcbiAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5wb3N0Qm9va21hcmsocGFyYW1zKTtcbiAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldChcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogJ3NlbmREb25lJyxcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBwcm92aWRlcixcbiAgICAgICAgICAgICAgICAgICAgdXNlck1lc3NhZ2U6IHVzZXJBY3Rpb25bJ3VzZXJNZXNzYWdlJ10sXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFVSTDogdXNlckFjdGlvblsnbGlua0JhY2snXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb1Byb3ZpZGVyID0gZ2lneWEuc29jaWFsaXplLl9nZXRQcm92aWRlckJ5TmFtZShwcm92aWRlcik7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF0aGlzLmlzTW9iaWxlVUkgJiZcbiAgICAgICAgICAgIHRoaXMudXNlciAmJlxuICAgICAgICAgICAgdGhpcy51c2VyLmlkZW50aXRpZXMgJiZcbiAgICAgICAgICAgICF0aGlzLnVzZXIuaWRlbnRpdGllc1twcm92aWRlcl0gJiZcbiAgICAgICAgICAgICFnaWd5YS51dGlscy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9zdFNoYXJlQWN0aW9uXycgKyB0aGlzLnBhcmFtc1snQVBJS2V5J10pICYmXG4gICAgICAgICAgICBvUHJvdmlkZXIgJiZcbiAgICAgICAgICAgIHRoaXMucGFyYW1zWydzaW1wbGVTaGFyZUNvbmZpZyddICYmXG4gICAgICAgICAgICB0aGlzLnBhcmFtc1snc2ltcGxlU2hhcmVDb25maWcnXVsncG9zdFNoYXJlQWN0aW9uJ10gPT0gJ2Nvbm5lY3QnXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5zaG93QWZ0ZXJCb29rbWFya1VJKG9Qcm92aWRlciwgdGhpcy5wYXJhbXNbJ3NpbXBsZVNoYXJlQ29uZmlnJ10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbG9zZSgpOiB2b2lkIHtcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsICdtb3VzZWRvd24nLCB0aGlzLm9uQm9keU1vdXNlRG93bkRlbGVnYXRlKTtcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsICdrZXlkb3duJywgdGhpcy5vbkJvZHlLZXlEb3duRGVsZWdhdGUpO1xuICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCB0aGlzLm9uUmVzaXplRGVsZWdhdGUpO1xuICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsRGVsZWdhdGUpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgdmFyIGlmciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWd5YV9pZnJfJyArIHRoaXMuY29udGFpbmVyLmlkKTtcbiAgICAgICAgaWYgKGlmcikgaWZyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaWZyKTtcbiAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogJ2Nsb3NlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLnBhcmFtcyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNuYXBUb0VsZW1lbnQoZWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGlmICghZWwpIHJldHVybjtcbiAgICAgICAgdmFyIHc6IG51bWJlciA9IHRoaXMuY29udGFpbmVyLm9mZnNldFdpZHRoO1xuICAgICAgICB2YXIgaDogbnVtYmVyID0gdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB2YXIgZHN0ID0gdGhpcy5jb250YWluZXIuc3R5bGU7XG4gICAgICAgIHZhciBkZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgdmFyIGRiID0gZG9jdW1lbnQuYm9keTtcblxuICAgICAgICB2YXIgY2xpZW50SGVpZ2h0ID0gZGUuY2xpZW50SGVpZ2h0O1xuICAgICAgICBpZiAoY2xpZW50SGVpZ2h0ID09IDApIGNsaWVudEhlaWdodCA9IGRiLmNsaWVudEhlaWdodDtcbiAgICAgICAgdmFyIGNsaWVudFdpZHRoID0gZGUuY2xpZW50V2lkdGg7XG4gICAgICAgIGlmIChjbGllbnRXaWR0aCA9PSAwKSBjbGllbnRXaWR0aCA9IGRiLmNsaWVudFdpZHRoO1xuXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIGNsaWVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIGNsaWVudFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNjcmwgPSBnaWd5YS51dGlscy52aWV3cG9ydC5nZXRTY3JvbGwoKTtcbiAgICAgICAgdmFyIHZwdCA9IHNjcmwudG9wO1xuICAgICAgICB2YXIgdnBsID0gc2NybC5sZWZ0O1xuXG4gICAgICAgIHZhciBtaWRkbGVQb2ludFRvcCA9IHZwdCArIE1hdGguZmxvb3IoY2xpZW50SGVpZ2h0IC8gMik7XG4gICAgICAgIHZhciBtaWRkbGVQb2ludExlZnQgPSB2cGwgKyBNYXRoLmZsb29yKGNsaWVudFdpZHRoIC8gMik7XG4gICAgICAgIHZhciBidG5Qb3MgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudFBvc2l0aW9uKGVsKTtcbiAgICAgICAgaWYgKGJ0blBvcy50b3AgPiBtaWRkbGVQb2ludFRvcCkge1xuICAgICAgICAgICAgZHN0LnRvcCA9IGJ0blBvcy50b3AgLSBoIC0gNSArICdweCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkc3QudG9wID0gYnRuUG9zLnRvcCArIGVsLm9mZnNldEhlaWdodCArIDUgKyAncHgnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChidG5Qb3MubGVmdCA+IG1pZGRsZVBvaW50TGVmdCkge1xuICAgICAgICAgICAgZHN0LmxlZnQgPSBidG5Qb3MubGVmdCArIGVsLm9mZnNldFdpZHRoIC0gdyArICdweCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkc3QubGVmdCA9IGJ0blBvcy5sZWZ0ICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpZnJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWd5YV9pZnJfJyArIHRoaXMuY29udGFpbmVyLmlkKTtcbiAgICAgICAgaWYgKGlmcmVsICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmcmVsLnN0eWxlLnRvcCA9IGRzdC50b3A7XG4gICAgICAgICAgICBpZnJlbC5zdHlsZS5sZWZ0ID0gZHN0LmxlZnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dBZnRlckJvb2ttYXJrVUkob1Byb3ZpZGVyOiBPYmplY3QsIGNvbmZpZzogT2JqZWN0KTogdm9pZCB7XG4gICAgICAgIHZhciBjYXB0aW9uVGV4dDogc3RyaW5nID0gY29uZmlnWydwb3N0U2hhcmVDb25uZWN0Q2FwdGlvblRleHQnXSB8fCB0aGlzLmdldFRleHQoJ3RoYW5rc19mb3Jfc2hhcmluZycpO1xuICAgICAgICB2YXIgYm9keVRleHQ6IHN0cmluZyA9IGNvbmZpZ1sncG9zdFNoYXJlQ29ubmVjdEJvZHlUZXh0J10gfHwgJ1RvIG1ha2Ugc2hhcmluZyBldmVuIHNpbXBsZXInO1xuICAgICAgICB2YXIgbmV2ZXJTaG93dGV4dDogc3RyaW5nID0gdGhpcy5nZXRUZXh0KCduZXZlcl9zaG93X3RoaXMnKTtcbiAgICAgICAgdmFyIGJ0blNyYzogc3RyaW5nID0gZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvSFRNTExvZ2luL1NpZ25JbldpdGgvJyArIG9Qcm92aWRlclsnbmFtZSddICsgJ18zMC5naWYnKTtcbiAgICAgICAgdmFyIHRlbXBsYXRlOiBzdHJpbmcgPSBTaW1wbGVTaGFyZVBsdWdpbi50ZW1wbGF0ZXNbJ3Bvc3RTaGFyZUFjdGlvbi1jb25uZWN0J107XG5cbiAgICAgICAgdmFyIGNhcHRpb246IEhUTUxFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRhaW5lciwgJ2dpZy1zaW1wbGVTaGFyZVVJLWNhcHRpb24nKVswXTtcbiAgICAgICAgaWYgKGNhcHRpb24pIGNhcHRpb24uaW5uZXJIVE1MID0gY2FwdGlvblRleHQ7XG5cbiAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRlbXBsYXRlLCB7IGJvZHk6IGJvZHlUZXh0LCBidG5TcmM6IGJ0blNyYywgbmV2ZXJTaG93VGV4dDogbmV2ZXJTaG93dGV4dCB9KTtcblxuICAgICAgICB2YXIgYnRuQ29ubmVjdDogSFRNTEVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuY29udGVudENvbnRhaW5lciwgJ2dpZy1zaW1wbGVTaGFyZVVJLXBvc3RTaGFyZS1jb25uZWN0QnV0dG9uJylbMF07XG4gICAgICAgIHZhciBsbmtOZXZlclNob3c6IEhUTUxFbGVtZW50ID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLmNvbnRlbnRDb250YWluZXIsICdnaWctc2ltcGxlU2hhcmVVSS1wb3N0U2hhcmUtbmV2ZXJTaG93TGluaycpWzBdO1xuICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihidG5Db25uZWN0LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBnaWd5YS5zb2NpYWxpemUuY29ubmVjdChcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcyxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGVyOiBvUHJvdmlkZXJbJ25hbWUnXSB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGxua05ldmVyU2hvdywgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZ2lneWEudXRpbHMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bvc3RTaGFyZUFjdGlvbl8nICsgdGhpcy5wYXJhbXNbJ0FQSUtleSddLCAndHJ1ZScpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQm9keU1vdXNlRG93bkRlbGVnYXRlOiBGdW5jdGlvbjtcbiAgICBwcml2YXRlIG9uQm9keU1vdXNlRG93bihlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIHZhciBhO1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgYSA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKCFhKSBhID0gZS5zcmNFbGVtZW50O1xuICAgICAgICAgICAgd2hpbGUgKGEgIT0gbnVsbCAmJiBhLm9mZnNldFBhcmVudCAmJiBhICE9IHRoaXMuY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgYSA9IGEub2Zmc2V0UGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghYSB8fCBhICE9IHRoaXMuY29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQm9keUtleURvd25EZWxlZ2F0ZTogRnVuY3Rpb247XG4gICAgcHJpdmF0ZSBvbkJvZHlLZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKChlLndoaWNoIHx8IGUua2V5Q29kZSkgPT0gMjcpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Q29udGVudEFyZWEoZmlyc3QpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSAmJiB0aGlzLmNvbnRlbnRDb250YWluZXIpIHtcbiAgICAgICAgICAgIHZhciBzdGFydFksIHN0YXJ0VG9wU2Nyb2xsO1xuICAgICAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHRoaXMuZ2V0Q29udGVudEhlaWdodCgpICsgJ3B4JztcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsQm9keVRvQ29udGVudCA9IGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8odGhpcy5jb250YWluZXIub2Zmc2V0TGVmdCwgdGhpcy5jb250YWluZXIub2Zmc2V0VG9wKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHRoaXMuY29udGVudENvbnRhaW5lciwgJ3RvdWNoc3RhcnQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHByZXZlbnQgc2Nyb2xsaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0WSA9IGV2ZW50Wyd0b3VjaGVzJ11bMF0ucGFnZVk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VG9wU2Nyb2xsID0gdGhpcy5jb250ZW50Q29udGFpbmVyLnNjcm9sbFRvcDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRUb3BTY3JvbGwgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyLnNjcm9sbFRvcCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRUb3BTY3JvbGwgKyB0aGlzLmNvbnRlbnRDb250YWluZXIub2Zmc2V0SGVpZ2h0ID49IHRoaXMuY29udGVudENvbnRhaW5lci5zY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudENvbnRhaW5lci5zY3JvbGxUb3AgPSB0aGlzLmNvbnRlbnRDb250YWluZXIuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5jb250ZW50Q29udGFpbmVyLm9mZnNldEhlaWdodCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMub25SZXNpemVEZWxlZ2F0ZSA9ICgpID0+IHRoaXMub25SZXNpemUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2Nyb2xsRGVsZWdhdGUgPSAoKSA9PiB0aGlzLm9uU2Nyb2xsKCk7XG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncmVzaXplJywgdGhpcy5vblJlc2l6ZURlbGVnYXRlKTtcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsRGVsZWdhdGUpO1xuXG4gICAgICAgICAgICAgICAgLypnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmNvbnRlbnRDb250YWluZXIsICd0b3VjaG1vdmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBwcmV2ZW50RGVmYXVsdCxmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50RGVmYXVsdCxmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYm9keVRvcFNjcm9sbCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYm9keUxlZnRTY3JvbGwgPSBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LmJvZHksICd0b3VjaG1vdmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyhib2R5TGVmdFNjcm9sbCwgYm9keVRvcFNjcm9sbCk7XG4gICAgICAgICAgICAgICAgICAgIH0pOyovXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29udGFpbmVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1zWydjb250YWluZXJJRCddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnBhcmFtc1snY29udGFpbmVySUQnXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZ2lneWEudXRpbHMuRE9NLmNyZWF0ZVRvcExldmVsRGl2KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUud2lkdGggPSB0aGlzLnBhcmFtc1snd2lkdGgnXSArICdweCc7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5wYXJhbXNbJ2hlaWdodCddICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW9iaWxlVUkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmlld3BvcnRTaXplID0gZ2lneWEudXRpbHMudmlld3BvcnQuZ2V0SW5uZXJTaXplKCk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB2aWV3cG9ydFNpemUuaC50b1N0cmluZygpICsgJ3B4JztcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUudG9wID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKyAncHgnO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gICAgfVxuICAgIHByaXZhdGUgb25SZXNpemVEZWxlZ2F0ZTogRnVuY3Rpb247XG4gICAgcHJpdmF0ZSBvblJlc2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgdmFyIHZpZXdwb3J0U2l6ZSA9IGdpZ3lhLnV0aWxzLnZpZXdwb3J0LmdldElubmVyU2l6ZSgpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB2aWV3cG9ydFNpemUuaC50b1N0cmluZygpICsgJ3B4JztcbiAgICAgICAgaWYgKHRoaXMuY29udGVudENvbnRhaW5lcikgdGhpcy5jb250ZW50Q29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHRoaXMuZ2V0Q29udGVudEhlaWdodCgpICsgJ3B4JztcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHRoaXMuY29udGFpbmVyLm9mZnNldExlZnQsIHRoaXMuY29udGFpbmVyLm9mZnNldFRvcCk7XG4gICAgfVxuICAgIHByaXZhdGUgb25TY3JvbGxEZWxlZ2F0ZTogRnVuY3Rpb247XG4gICAgcHJpdmF0ZSBvblNjcm9sbCgpOiB2b2lkIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHRoaXMuY29udGFpbmVyLm9mZnNldExlZnQsIHRoaXMuY29udGFpbmVyLm9mZnNldFRvcCk7XG4gICAgICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNJT1MpIHRoaXMub25SZXNpemUoKTtcbiAgICB9XG59XG5naWd5YS5fLlVJLmF0dGFjaFBsdWdpbihTaW1wbGVTaGFyZVBsdWdpbiwgJ3NvY2lhbGl6ZScsICdzaW1wbGVTaGFyZScsICdzaG93U2ltcGxlU2hhcmVVSScpO1xuIiwiaW1wb3J0ICogYXMgR2lneWFHbG9iYWwgZnJvbSAnc3JjL3NvY2lhbGl6ZS9HaWd5YS5Kcy5QbHVnaW4uU2ltcGxlU2hhcmUvYXBwL1NpbXBsZVNoYXJlUGx1Z2luMCc7XG5pbXBvcnQgJ3NyYy9zb2NpYWxpemUvR2lneWEuSnMuUGx1Z2luLlNpbXBsZVNoYXJlL2FwcC9TaW1wbGVTaGFyZVBsdWdpbjEnO1xuXG5kZWNsYXJlIGNvbnN0IGdpZ3lhOiBhbnk7XG5pZiAoIWdpZ3lhLmdsb2JhbCkge1xuICAgIGdpZ3lhLmdsb2JhbCA9IHt9O1xufVxuXG5PYmplY3QuYXNzaWduKGdpZ3lhLmdsb2JhbCwgR2lneWFHbG9iYWwpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
