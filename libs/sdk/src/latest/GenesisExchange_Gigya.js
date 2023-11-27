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
    (__webpack_require__.s = './src/legacy/others/GenesisExchange_Gigya.js')
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './src/legacy/others/GenesisExchange_Gigya.js':
      /*!****************************************************!*\
  !*** ./src/legacy/others/GenesisExchange_Gigya.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function GenesisExchange_Gigya(c) {
          this.conf = c;

          this.processAction = function (evt) {
            if (
              typeof this.conf == 'undefined' ||
              typeof this.conf.eventMap == 'undefined'
            )
              return null;

            var eventMap = this.eventLookup(evt);

            if (typeof eventMap == 'object' && eventMap != null) {
              var genConf = {};
              if (typeof eventMap.mapVars == 'object') {
                genConf = this.genEVarMap(evt, eventMap.mapVars);
              }
              if (typeof eventMap.omtrEvents == 'string') {
                genConf['events'] = eventMap.omtrEvents;
              } else if (typeof eventMap.omtrEvents == 'object') {
                genConf['events'] = eventMap.omtrEvents.join(',');
              }
              this.slb(genConf);
            }
          };

          this.eventLookup = function (evt) {
            var en = '',
              es = '';

            // get the event name and source of the current event
            if (typeof evt.eventName != 'undefined') {
              en = evt.eventName;
            } else {
              return null;
            }
            if (typeof evt.source != 'undefined') {
              es = evt.source;
            }

            // Look for this event in the config, first matching event is used
            for (var i = 0; i < this.conf.eventMap.length; i++) {
              var c = this.conf.eventMap[i];
              if (
                (c.gigEvent.toLowerCase() == en.toLowerCase() ||
                  c.gigEvent.toLowerCase() == 'on' + en.toLowerCase()) &&
                (typeof c.gigSource != 'string' ||
                  c.gigSource.toLowerCase() == es.toLowerCase())
              ) {
                return c;
              }
            }
            return null;
          };

          this.genEVarMap = function (evt, map) {
            var evars = {};
            for (var i = 0; i < map.length; i++) {
              var parts = map[i].split('=');
              if (parts.length == 2) {
                var evar = parts[0].replace(/^\s+|\s+$/g, '');
                var val = parts[1].replace(/^\s+|\s+$/g, '');
                val =
                  val.substr(val.length - 2) == '()'
                    ? val.substr(0, val.length - 2)
                    : val;
                var fv = this.getFieldValue(evt, val);
                if (typeof evars[evar] != 'undefined' && evars[evar] != '')
                  evars[evar] = evars[evar] + ':' + fv;
                else evars[evar] = fv;
              } else {
                evars[parts[0]] = '';
              }
            }
            return evars;
          };
          this.getFieldValue = function (evt, field) {
            if (typeof this.conf[field] == 'function') {
              // The field is a custom user function
              return this.conf[field].call(this.conf, evt);
            } else if (typeof this[field] == 'function') {
              // The field is a built-in function
              return this[field].call(this, evt);
            } else {
              var pathParts = field.split('.'),
                obj = evt;
              for (var i = 0; i < pathParts.length; i++) {
                if (typeof obj[pathParts[i]] != 'undefined') {
                  obj = obj[pathParts[i]];
                } else return field;
              }
              if (typeof obj == 'string' || typeof obj == 'number') return obj;
              // attempt to extract data from complex objects
              if (typeof obj.length == 'number') {
                var r = '';
                for (var i = 0; i < obj.length; i++) {
                  r += (r ? ',' : '') + obj[i];
                }
                return r;
              }
              if (typeof obj == 'object') {
                var r = '';
                for (var f in obj) {
                  r += (r ? ',' : '') + f;
                }
                return r;
              }
              return field;
            }
          };

          this.slb = function (st) {
            if (typeof s_gi != 'undefined') {
              var s_a = this.conf['omtrAccount']
                ? this.conf['omtrAccount']
                : window.s_account;
              var s = s_gi(s_a),
                vl = '',
                ltvo = '',
                lteo = '',
                g = {};
              ltvo = s.linkTrackVars;
              lteo = s.linkTrackEvents;
              for (var p in st) {
                g[p] = s[p] ? s[p] : '';
                if (st[p]) s[p] = st[p];
                vl += (vl ? ',' : '') + p;
                if (p == 'events') {
                  s.linkTrackEvents = s.events = s[p];
                }
              }
              if (vl) {
                s.linkTrackVars = vl;
              } else {
                s.linkTrackVars = s.linkTrackEvents = 'None';
              }
              s.tl(true, 'o', this.conf.linkName);
              s.linkTrackVars = ltvo;
              s.linkTrackEvents = lteo;
              for (var p2 in g) {
                s[p2] = g[p2];
              }
            }
          };

          // start built-in data extraction functions
          this.precision = function (p, v) {
            if (typeof v == 'string') return parseFloat(v).toFixed(p);
            else return v;
          };

          this.providerList = function (evt) {
            var r = '';
            if (
              typeof evt == 'object' &&
              typeof evt.user == 'object' &&
              typeof evt.user.identities == 'object'
            ) {
              for (var p in evt.user.identities) r += (r ? ',' : '') + p;
            }
            return r;
          };
          // end built-in data extraction functions
        } //end class GenesisExchange

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9vdGhlcnMvR2VuZXNpc0V4Y2hhbmdlX0dpZ3lhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEc7QUFDQTtBQUNBO0FBQ0EsRzs7QUFFQTtBQUNBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0JBQW9CLE87QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixhQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxZQUFZO0FBQ1osU0FBUztBQUNUO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiR2VuZXNpc0V4Y2hhbmdlX0dpZ3lhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbGVnYWN5L290aGVycy9HZW5lc2lzRXhjaGFuZ2VfR2lneWEuanNcIik7XG4iLCJcbmZ1bmN0aW9uIEdlbmVzaXNFeGNoYW5nZV9HaWd5YShjKXtcblx0dGhpcy5jb25mPWM7XG5cdFxuXHR0aGlzLnByb2Nlc3NBY3Rpb249ZnVuY3Rpb24oZXZ0KXtcblx0XHRpZiAodHlwZW9mKHRoaXMuY29uZik9PSd1bmRlZmluZWQnIHx8IHR5cGVvZih0aGlzLmNvbmYuZXZlbnRNYXApPT0ndW5kZWZpbmVkJykgXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFxuXHRcdHZhciBldmVudE1hcCA9IHRoaXMuZXZlbnRMb29rdXAoZXZ0KTtcblx0XHRcdFx0XG5cdFx0aWYodHlwZW9mKGV2ZW50TWFwKT09J29iamVjdCcgJiYgZXZlbnRNYXAhPW51bGwpIHtcblx0XHRcdHZhciBnZW5Db25mPXt9O1xuXHRcdFx0aWYodHlwZW9mKGV2ZW50TWFwLm1hcFZhcnMpPT0nb2JqZWN0Jyl7XG5cdFx0XHRcdGdlbkNvbmY9dGhpcy5nZW5FVmFyTWFwKGV2dCxldmVudE1hcC5tYXBWYXJzKTtcblx0XHRcdH1cblx0XHRcdGlmKHR5cGVvZihldmVudE1hcC5vbXRyRXZlbnRzKT09J3N0cmluZycpIHtcblx0XHRcdFx0Z2VuQ29uZltcImV2ZW50c1wiXSA9IGV2ZW50TWFwLm9tdHJFdmVudHM7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmKHR5cGVvZihldmVudE1hcC5vbXRyRXZlbnRzKT09J29iamVjdCcpIHtcblx0XHRcdFx0Z2VuQ29uZltcImV2ZW50c1wiXSA9IGV2ZW50TWFwLm9tdHJFdmVudHMuam9pbignLCcpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zbGIoZ2VuQ29uZik7XG5cdFx0fVxuXHR9XG5cdFxuXHR0aGlzLmV2ZW50TG9va3VwPWZ1bmN0aW9uKGV2dCl7XG5cdFx0dmFyIGVuPVwiXCIsIGVzPVwiXCI7XG5cdFx0XG5cdFx0Ly8gZ2V0IHRoZSBldmVudCBuYW1lIGFuZCBzb3VyY2Ugb2YgdGhlIGN1cnJlbnQgZXZlbnRcblx0XHRpZih0eXBlb2YoZXZ0LmV2ZW50TmFtZSkhPSd1bmRlZmluZWQnKSB7XG5cdFx0XHRlbj1ldnQuZXZlbnROYW1lO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XHRcdFxuXHRcdGlmKHR5cGVvZihldnQuc291cmNlKSE9J3VuZGVmaW5lZCcpIHtcblx0XHRcdGVzPWV2dC5zb3VyY2U7XG5cdFx0fSBcblx0XHRcblx0XHQvLyBMb29rIGZvciB0aGlzIGV2ZW50IGluIHRoZSBjb25maWcsIGZpcnN0IG1hdGNoaW5nIGV2ZW50IGlzIHVzZWRcblx0XHRmb3IgKHZhciBpPTA7IGk8dGhpcy5jb25mLmV2ZW50TWFwLmxlbmd0aDsgaSsrKSB7XG5cdFx0ICAgIHZhciBjID0gdGhpcy5jb25mLmV2ZW50TWFwW2ldO1xuXHRcdFx0aWYgKCAoYy5naWdFdmVudC50b0xvd2VyQ2FzZSgpPT1lbi50b0xvd2VyQ2FzZSgpIHx8IGMuZ2lnRXZlbnQudG9Mb3dlckNhc2UoKT09XCJvblwiK2VuLnRvTG93ZXJDYXNlKCkpIFxuXHRcdFx0XHRcdCYmICh0eXBlb2YoYy5naWdTb3VyY2UpIT1cInN0cmluZ1wiIHx8IGMuZ2lnU291cmNlLnRvTG93ZXJDYXNlKCk9PWVzLnRvTG93ZXJDYXNlKCkpKSB7XG5cdFx0XHRcdHJldHVybiBjO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRcblxuXHR0aGlzLmdlbkVWYXJNYXA9ZnVuY3Rpb24oZXZ0LCBtYXApIHtcblx0XHR2YXIgZXZhcnM9e307XG5cdFx0Zm9yKHZhciBpPTA7aTxtYXAubGVuZ3RoO2krKykge1xuXHRcdFx0dmFyIHBhcnRzPW1hcFtpXS5zcGxpdCgnPScpO1xuXHRcdFx0aWYgKHBhcnRzLmxlbmd0aD09Mikge1xuXHRcdFx0XHR2YXIgZXZhcj1wYXJ0c1swXS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLFwiXCIpO1xuXHRcdFx0XHR2YXIgdmFsID0gcGFydHNbMV0ucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgXCJcIik7XG5cdFx0XHRcdHZhbD12YWwuc3Vic3RyKHZhbC5sZW5ndGgtMik9PVwiKClcIiA/IHZhbC5zdWJzdHIoMCx2YWwubGVuZ3RoLTIpIDogdmFsO1xuXHRcdFx0XHR2YXIgZnYgPSB0aGlzLmdldEZpZWxkVmFsdWUoZXZ0LHZhbCk7XG5cdFx0XHRcdGlmICh0eXBlb2YoZXZhcnNbZXZhcl0pIT0ndW5kZWZpbmVkJyAmJiBldmFyc1tldmFyXSE9JycpIFxuXHRcdFx0XHRcdGV2YXJzW2V2YXJdPWV2YXJzW2V2YXJdKyc6Jytmdjtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGV2YXJzW2V2YXJdPWZ2O1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGV2YXJzW3BhcnRzWzBdXT0nJztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGV2YXJzO1xuXHR9XG5cdHRoaXMuZ2V0RmllbGRWYWx1ZT1mdW5jdGlvbihldnQsZmllbGQpIHtcblx0XHRpZih0eXBlb2YodGhpcy5jb25mW2ZpZWxkXSk9PSdmdW5jdGlvbicpIHtcblx0XHRcdC8vIFRoZSBmaWVsZCBpcyBhIGN1c3RvbSB1c2VyIGZ1bmN0aW9uXG5cdFx0XHRyZXR1cm4gdGhpcy5jb25mW2ZpZWxkXS5jYWxsKHRoaXMuY29uZixldnQpO1xuXHRcdH1cblx0XHRlbHNlIGlmKHR5cGVvZih0aGlzW2ZpZWxkXSk9PSdmdW5jdGlvbicpIHtcblx0XHRcdC8vIFRoZSBmaWVsZCBpcyBhIGJ1aWx0LWluIGZ1bmN0aW9uXG5cdFx0XHRyZXR1cm4gdGhpc1tmaWVsZF0uY2FsbCh0aGlzLGV2dCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dmFyIHBhdGhQYXJ0cz1maWVsZC5zcGxpdCgnLicpLCBvYmo9ZXZ0O1xuXHRcdFx0Zm9yICh2YXIgaT0wOyBpPHBhdGhQYXJ0cy5sZW5ndGg7IGkrKykge1x0XHRcdFx0XG5cdFx0XHRcdGlmICh0eXBlb2Yob2JqW3BhdGhQYXJ0c1tpXV0pIT0ndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdG9iaj1vYmpbcGF0aFBhcnRzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0cmV0dXJuIGZpZWxkO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZihvYmopPT1cInN0cmluZ1wiIHx8IHR5cGVvZihvYmopPT1cIm51bWJlclwiKSBcblx0XHRcdFx0cmV0dXJuIG9iajtcblx0XHRcdC8vIGF0dGVtcHQgdG8gZXh0cmFjdCBkYXRhIGZyb20gY29tcGxleCBvYmplY3RzXG5cdFx0XHRpZiAodHlwZW9mKG9iai5sZW5ndGgpPT1cIm51bWJlclwiKSB7XG5cdFx0XHRcdHZhciByPVwiXCI7XG5cdFx0XHRcdGZvcih2YXIgaT0wO2k8b2JqLmxlbmd0aDtpKyspIHtcblx0XHRcdFx0XHRyKz0ocj8nLCc6JycpK29ialtpXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gclxuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZihvYmopPT1cIm9iamVjdFwiKSB7XG5cdFx0XHRcdHZhciByPVwiXCI7XG5cdFx0XHRcdGZvcih2YXIgZiBpbiBvYmopIHtcblx0XHRcdFx0XHRyKz0ocj8nLCc6JycpK2Y7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmllbGQ7XG5cdFx0fVxuXHR9XG5cblx0dGhpcy5zbGIgPSBmdW5jdGlvbiAoc3QpIHtcblx0XHRpZiAodHlwZW9mIChzX2dpKSAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0dmFyIHNfYSA9ICh0aGlzLmNvbmZbJ29tdHJBY2NvdW50J10gPyB0aGlzLmNvbmZbJ29tdHJBY2NvdW50J10gOiB3aW5kb3cuc19hY2NvdW50KTtcblx0XHRcdHZhciBzID0gc19naShzX2EpLCB2bCA9ICcnLCBsdHZvID0gJycsIGx0ZW8gPSAnJywgZyA9IHt9O1xuXHRcdFx0bHR2byA9IHMubGlua1RyYWNrVmFyczsgbHRlbyA9IHMubGlua1RyYWNrRXZlbnRzO1xuXHRcdFx0Zm9yICh2YXIgcCBpbiBzdCkge1xuXHRcdFx0XHRnW3BdID0gKHNbcF0gPyBzW3BdIDogXCJcIik7XG5cdFx0XHRcdGlmIChzdFtwXSkgc1twXSA9IHN0W3BdO1xuXHRcdFx0XHR2bCArPSAodmwgPyAnLCcgOiAnJykgKyBwO1xuXHRcdFx0XHRpZiAocCA9PSAnZXZlbnRzJykgeyBzLmxpbmtUcmFja0V2ZW50cyA9IHMuZXZlbnRzID0gc1twXSB9XG5cdFx0XHR9XG5cdFx0XHRpZiAodmwpIHsgcy5saW5rVHJhY2tWYXJzID0gdmwgfVxuXHRcdFx0ZWxzZSB7IHMubGlua1RyYWNrVmFycyA9IHMubGlua1RyYWNrRXZlbnRzID0gJ05vbmUnIH1cblx0XHRcdHMudGwodHJ1ZSwgJ28nLCB0aGlzLmNvbmYubGlua05hbWUpO1xuXHRcdFx0cy5saW5rVHJhY2tWYXJzID0gbHR2bzsgcy5saW5rVHJhY2tFdmVudHMgPSBsdGVvO1xuXHRcdFx0Zm9yICh2YXIgcDIgaW4gZykge1xuXHRcdFx0XHRzW3AyXSA9IGdbcDJdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cblx0Ly8gc3RhcnQgYnVpbHQtaW4gZGF0YSBleHRyYWN0aW9uIGZ1bmN0aW9uc1xuXHR0aGlzLnByZWNpc2lvbj1mdW5jdGlvbihwLHYpe1xuXHRcdGlmKHR5cGVvZih2KT09XCJzdHJpbmdcIilcblx0XHRcdHJldHVybiBwYXJzZUZsb2F0KHYpLnRvRml4ZWQocCk7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIHY7XG5cdH1cblx0XG5cdHRoaXMucHJvdmlkZXJMaXN0PWZ1bmN0aW9uKGV2dCl7XG5cdFx0dmFyIHI9Jyc7XG5cdFx0aWYodHlwZW9mKGV2dCk9PSdvYmplY3QnICYmIHR5cGVvZihldnQudXNlcik9PSdvYmplY3QnICYmIHR5cGVvZihldnQudXNlci5pZGVudGl0aWVzKT09J29iamVjdCcpIHtcblx0XHRcdGZvcih2YXIgcCBpbiBldnQudXNlci5pZGVudGl0aWVzKVxuXHRcdFx0XHRyKz0ocj8nLCc6JycpK3A7XG5cdFx0fVxuXHRcdHJldHVybiByO1xuXHR9XG5cdC8vIGVuZCBidWlsdC1pbiBkYXRhIGV4dHJhY3Rpb24gZnVuY3Rpb25zXG59Ly9lbmQgY2xhc3MgR2VuZXNpc0V4Y2hhbmdlXG4iXSwic291cmNlUm9vdCI6IiJ9
