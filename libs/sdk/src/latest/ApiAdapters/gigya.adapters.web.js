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
    (__webpack_require__.s = './src/core/Gigya.Js.Adapters.Web/index.ts')
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ '../node_modules/lodash.merge/index.js':
      /*!*********************************************!*\
  !*** ../node_modules/lodash.merge/index.js ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function (global, module) {
          /**
           * Lodash (Custom Build) <https://lodash.com/>
           * Build: `lodash modularize exports="npm" -o ./`
           * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
           * Released under MIT license <https://lodash.com/license>
           * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
           * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
           */

          /** Used as the size to enable large array optimizations. */
          var LARGE_ARRAY_SIZE = 200;

          /** Used to stand-in for `undefined` hash values. */
          var HASH_UNDEFINED = '__lodash_hash_undefined__';

          /** Used to detect hot functions by number of calls within a span of milliseconds. */
          var HOT_COUNT = 800,
            HOT_SPAN = 16;

          /** Used as references for various `Number` constants. */
          var MAX_SAFE_INTEGER = 9007199254740991;

          /** `Object#toString` result references. */
          var argsTag = '[object Arguments]',
            arrayTag = '[object Array]',
            asyncTag = '[object AsyncFunction]',
            boolTag = '[object Boolean]',
            dateTag = '[object Date]',
            errorTag = '[object Error]',
            funcTag = '[object Function]',
            genTag = '[object GeneratorFunction]',
            mapTag = '[object Map]',
            numberTag = '[object Number]',
            nullTag = '[object Null]',
            objectTag = '[object Object]',
            proxyTag = '[object Proxy]',
            regexpTag = '[object RegExp]',
            setTag = '[object Set]',
            stringTag = '[object String]',
            undefinedTag = '[object Undefined]',
            weakMapTag = '[object WeakMap]';

          var arrayBufferTag = '[object ArrayBuffer]',
            dataViewTag = '[object DataView]',
            float32Tag = '[object Float32Array]',
            float64Tag = '[object Float64Array]',
            int8Tag = '[object Int8Array]',
            int16Tag = '[object Int16Array]',
            int32Tag = '[object Int32Array]',
            uint8Tag = '[object Uint8Array]',
            uint8ClampedTag = '[object Uint8ClampedArray]',
            uint16Tag = '[object Uint16Array]',
            uint32Tag = '[object Uint32Array]';

          /**
           * Used to match `RegExp`
           * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
           */
          var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

          /** Used to detect host constructors (Safari). */
          var reIsHostCtor = /^\[object .+?Constructor\]$/;

          /** Used to detect unsigned integer values. */
          var reIsUint = /^(?:0|[1-9]\d*)$/;

          /** Used to identify `toStringTag` values of typed arrays. */
          var typedArrayTags = {};
          typedArrayTags[float32Tag] =
            typedArrayTags[float64Tag] =
            typedArrayTags[int8Tag] =
            typedArrayTags[int16Tag] =
            typedArrayTags[int32Tag] =
            typedArrayTags[uint8Tag] =
            typedArrayTags[uint8ClampedTag] =
            typedArrayTags[uint16Tag] =
            typedArrayTags[uint32Tag] =
              true;
          typedArrayTags[argsTag] =
            typedArrayTags[arrayTag] =
            typedArrayTags[arrayBufferTag] =
            typedArrayTags[boolTag] =
            typedArrayTags[dataViewTag] =
            typedArrayTags[dateTag] =
            typedArrayTags[errorTag] =
            typedArrayTags[funcTag] =
            typedArrayTags[mapTag] =
            typedArrayTags[numberTag] =
            typedArrayTags[objectTag] =
            typedArrayTags[regexpTag] =
            typedArrayTags[setTag] =
            typedArrayTags[stringTag] =
            typedArrayTags[weakMapTag] =
              false;

          /** Detect free variable `global` from Node.js. */
          var freeGlobal =
            typeof global == 'object' &&
            global &&
            global.Object === Object &&
            global;

          /** Detect free variable `self`. */
          var freeSelf =
            typeof self == 'object' && self && self.Object === Object && self;

          /** Used as a reference to the global object. */
          var root = freeGlobal || freeSelf || Function('return this')();

          /** Detect free variable `exports`. */
          var freeExports = true && exports && !exports.nodeType && exports;

          /** Detect free variable `module`. */
          var freeModule =
            freeExports &&
            typeof module == 'object' &&
            module &&
            !module.nodeType &&
            module;

          /** Detect the popular CommonJS extension `module.exports`. */
          var moduleExports = freeModule && freeModule.exports === freeExports;

          /** Detect free variable `process` from Node.js. */
          var freeProcess = moduleExports && freeGlobal.process;

          /** Used to access faster Node.js helpers. */
          var nodeUtil = (function () {
            try {
              // Use `util.types` for Node.js 10+.
              var types =
                freeModule &&
                freeModule.require &&
                freeModule.require('util').types;

              if (types) {
                return types;
              }

              // Legacy `process.binding('util')` for Node.js < 10.
              return (
                freeProcess &&
                freeProcess.binding &&
                freeProcess.binding('util')
              );
            } catch (e) {}
          })();

          /* Node.js helper references. */
          var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

          /**
           * A faster alternative to `Function#apply`, this function invokes `func`
           * with the `this` binding of `thisArg` and the arguments of `args`.
           *
           * @private
           * @param {Function} func The function to invoke.
           * @param {*} thisArg The `this` binding of `func`.
           * @param {Array} args The arguments to invoke `func` with.
           * @returns {*} Returns the result of `func`.
           */
          function apply(func, thisArg, args) {
            switch (args.length) {
              case 0:
                return func.call(thisArg);
              case 1:
                return func.call(thisArg, args[0]);
              case 2:
                return func.call(thisArg, args[0], args[1]);
              case 3:
                return func.call(thisArg, args[0], args[1], args[2]);
            }
            return func.apply(thisArg, args);
          }

          /**
           * The base implementation of `_.times` without support for iteratee shorthands
           * or max array length checks.
           *
           * @private
           * @param {number} n The number of times to invoke `iteratee`.
           * @param {Function} iteratee The function invoked per iteration.
           * @returns {Array} Returns the array of results.
           */
          function baseTimes(n, iteratee) {
            var index = -1,
              result = Array(n);

            while (++index < n) {
              result[index] = iteratee(index);
            }
            return result;
          }

          /**
           * The base implementation of `_.unary` without support for storing metadata.
           *
           * @private
           * @param {Function} func The function to cap arguments for.
           * @returns {Function} Returns the new capped function.
           */
          function baseUnary(func) {
            return function (value) {
              return func(value);
            };
          }

          /**
           * Gets the value at `key` of `object`.
           *
           * @private
           * @param {Object} [object] The object to query.
           * @param {string} key The key of the property to get.
           * @returns {*} Returns the property value.
           */
          function getValue(object, key) {
            return object == null ? undefined : object[key];
          }

          /**
           * Creates a unary function that invokes `func` with its argument transformed.
           *
           * @private
           * @param {Function} func The function to wrap.
           * @param {Function} transform The argument transform.
           * @returns {Function} Returns the new function.
           */
          function overArg(func, transform) {
            return function (arg) {
              return func(transform(arg));
            };
          }

          /** Used for built-in method references. */
          var arrayProto = Array.prototype,
            funcProto = Function.prototype,
            objectProto = Object.prototype;

          /** Used to detect overreaching core-js shims. */
          var coreJsData = root['__core-js_shared__'];

          /** Used to resolve the decompiled source of functions. */
          var funcToString = funcProto.toString;

          /** Used to check objects for own properties. */
          var hasOwnProperty = objectProto.hasOwnProperty;

          /** Used to detect methods masquerading as native. */
          var maskSrcKey = (function () {
            var uid = /[^.]+$/.exec(
              (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || ''
            );
            return uid ? 'Symbol(src)_1.' + uid : '';
          })();

          /**
           * Used to resolve the
           * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
           * of values.
           */
          var nativeObjectToString = objectProto.toString;

          /** Used to infer the `Object` constructor. */
          var objectCtorString = funcToString.call(Object);

          /** Used to detect if a method is native. */
          var reIsNative = RegExp(
            '^' +
              funcToString
                .call(hasOwnProperty)
                .replace(reRegExpChar, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          );

          /** Built-in value references. */
          var Buffer = moduleExports ? root.Buffer : undefined,
            Symbol = root.Symbol,
            Uint8Array = root.Uint8Array,
            allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
            getPrototype = overArg(Object.getPrototypeOf, Object),
            objectCreate = Object.create,
            propertyIsEnumerable = objectProto.propertyIsEnumerable,
            splice = arrayProto.splice,
            symToStringTag = Symbol ? Symbol.toStringTag : undefined;

          var defineProperty = (function () {
            try {
              var func = getNative(Object, 'defineProperty');
              func({}, '', {});
              return func;
            } catch (e) {}
          })();

          /* Built-in method references for those with the same name as other `lodash` methods. */
          var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
            nativeMax = Math.max,
            nativeNow = Date.now;

          /* Built-in method references that are verified to be native. */
          var Map = getNative(root, 'Map'),
            nativeCreate = getNative(Object, 'create');

          /**
           * The base implementation of `_.create` without support for assigning
           * properties to the created object.
           *
           * @private
           * @param {Object} proto The object to inherit from.
           * @returns {Object} Returns the new object.
           */
          var baseCreate = (function () {
            function object() {}
            return function (proto) {
              if (!isObject(proto)) {
                return {};
              }
              if (objectCreate) {
                return objectCreate(proto);
              }
              object.prototype = proto;
              var result = new object();
              object.prototype = undefined;
              return result;
            };
          })();

          /**
           * Creates a hash object.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */
          function Hash(entries) {
            var index = -1,
              length = entries == null ? 0 : entries.length;

            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }

          /**
           * Removes all key-value entries from the hash.
           *
           * @private
           * @name clear
           * @memberOf Hash
           */
          function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
            this.size = 0;
          }

          /**
           * Removes `key` and its value from the hash.
           *
           * @private
           * @name delete
           * @memberOf Hash
           * @param {Object} hash The hash to modify.
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */
          function hashDelete(key) {
            var result = this.has(key) && delete this.__data__[key];
            this.size -= result ? 1 : 0;
            return result;
          }

          /**
           * Gets the hash value for `key`.
           *
           * @private
           * @name get
           * @memberOf Hash
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */
          function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
              var result = data[key];
              return result === HASH_UNDEFINED ? undefined : result;
            }
            return hasOwnProperty.call(data, key) ? data[key] : undefined;
          }

          /**
           * Checks if a hash value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf Hash
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */
          function hashHas(key) {
            var data = this.__data__;
            return nativeCreate
              ? data[key] !== undefined
              : hasOwnProperty.call(data, key);
          }

          /**
           * Sets the hash `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf Hash
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the hash instance.
           */
          function hashSet(key, value) {
            var data = this.__data__;
            this.size += this.has(key) ? 0 : 1;
            data[key] =
              nativeCreate && value === undefined ? HASH_UNDEFINED : value;
            return this;
          }

          // Add methods to `Hash`.
          Hash.prototype.clear = hashClear;
          Hash.prototype['delete'] = hashDelete;
          Hash.prototype.get = hashGet;
          Hash.prototype.has = hashHas;
          Hash.prototype.set = hashSet;

          /**
           * Creates an list cache object.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */
          function ListCache(entries) {
            var index = -1,
              length = entries == null ? 0 : entries.length;

            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }

          /**
           * Removes all key-value entries from the list cache.
           *
           * @private
           * @name clear
           * @memberOf ListCache
           */
          function listCacheClear() {
            this.__data__ = [];
            this.size = 0;
          }

          /**
           * Removes `key` and its value from the list cache.
           *
           * @private
           * @name delete
           * @memberOf ListCache
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */
          function listCacheDelete(key) {
            var data = this.__data__,
              index = assocIndexOf(data, key);

            if (index < 0) {
              return false;
            }
            var lastIndex = data.length - 1;
            if (index == lastIndex) {
              data.pop();
            } else {
              splice.call(data, index, 1);
            }
            --this.size;
            return true;
          }

          /**
           * Gets the list cache value for `key`.
           *
           * @private
           * @name get
           * @memberOf ListCache
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */
          function listCacheGet(key) {
            var data = this.__data__,
              index = assocIndexOf(data, key);

            return index < 0 ? undefined : data[index][1];
          }

          /**
           * Checks if a list cache value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf ListCache
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */
          function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
          }

          /**
           * Sets the list cache `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf ListCache
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the list cache instance.
           */
          function listCacheSet(key, value) {
            var data = this.__data__,
              index = assocIndexOf(data, key);

            if (index < 0) {
              ++this.size;
              data.push([key, value]);
            } else {
              data[index][1] = value;
            }
            return this;
          }

          // Add methods to `ListCache`.
          ListCache.prototype.clear = listCacheClear;
          ListCache.prototype['delete'] = listCacheDelete;
          ListCache.prototype.get = listCacheGet;
          ListCache.prototype.has = listCacheHas;
          ListCache.prototype.set = listCacheSet;

          /**
           * Creates a map cache object to store key-value pairs.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */
          function MapCache(entries) {
            var index = -1,
              length = entries == null ? 0 : entries.length;

            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }

          /**
           * Removes all key-value entries from the map.
           *
           * @private
           * @name clear
           * @memberOf MapCache
           */
          function mapCacheClear() {
            this.size = 0;
            this.__data__ = {
              hash: new Hash(),
              map: new (Map || ListCache)(),
              string: new Hash(),
            };
          }

          /**
           * Removes `key` and its value from the map.
           *
           * @private
           * @name delete
           * @memberOf MapCache
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */
          function mapCacheDelete(key) {
            var result = getMapData(this, key)['delete'](key);
            this.size -= result ? 1 : 0;
            return result;
          }

          /**
           * Gets the map value for `key`.
           *
           * @private
           * @name get
           * @memberOf MapCache
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */
          function mapCacheGet(key) {
            return getMapData(this, key).get(key);
          }

          /**
           * Checks if a map value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf MapCache
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */
          function mapCacheHas(key) {
            return getMapData(this, key).has(key);
          }

          /**
           * Sets the map `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf MapCache
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the map cache instance.
           */
          function mapCacheSet(key, value) {
            var data = getMapData(this, key),
              size = data.size;

            data.set(key, value);
            this.size += data.size == size ? 0 : 1;
            return this;
          }

          // Add methods to `MapCache`.
          MapCache.prototype.clear = mapCacheClear;
          MapCache.prototype['delete'] = mapCacheDelete;
          MapCache.prototype.get = mapCacheGet;
          MapCache.prototype.has = mapCacheHas;
          MapCache.prototype.set = mapCacheSet;

          /**
           * Creates a stack cache object to store key-value pairs.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */
          function Stack(entries) {
            var data = (this.__data__ = new ListCache(entries));
            this.size = data.size;
          }

          /**
           * Removes all key-value entries from the stack.
           *
           * @private
           * @name clear
           * @memberOf Stack
           */
          function stackClear() {
            this.__data__ = new ListCache();
            this.size = 0;
          }

          /**
           * Removes `key` and its value from the stack.
           *
           * @private
           * @name delete
           * @memberOf Stack
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */
          function stackDelete(key) {
            var data = this.__data__,
              result = data['delete'](key);

            this.size = data.size;
            return result;
          }

          /**
           * Gets the stack value for `key`.
           *
           * @private
           * @name get
           * @memberOf Stack
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */
          function stackGet(key) {
            return this.__data__.get(key);
          }

          /**
           * Checks if a stack value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf Stack
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */
          function stackHas(key) {
            return this.__data__.has(key);
          }

          /**
           * Sets the stack `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf Stack
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the stack cache instance.
           */
          function stackSet(key, value) {
            var data = this.__data__;
            if (data instanceof ListCache) {
              var pairs = data.__data__;
              if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
                pairs.push([key, value]);
                this.size = ++data.size;
                return this;
              }
              data = this.__data__ = new MapCache(pairs);
            }
            data.set(key, value);
            this.size = data.size;
            return this;
          }

          // Add methods to `Stack`.
          Stack.prototype.clear = stackClear;
          Stack.prototype['delete'] = stackDelete;
          Stack.prototype.get = stackGet;
          Stack.prototype.has = stackHas;
          Stack.prototype.set = stackSet;

          /**
           * Creates an array of the enumerable property names of the array-like `value`.
           *
           * @private
           * @param {*} value The value to query.
           * @param {boolean} inherited Specify returning inherited property names.
           * @returns {Array} Returns the array of property names.
           */
          function arrayLikeKeys(value, inherited) {
            var isArr = isArray(value),
              isArg = !isArr && isArguments(value),
              isBuff = !isArr && !isArg && isBuffer(value),
              isType = !isArr && !isArg && !isBuff && isTypedArray(value),
              skipIndexes = isArr || isArg || isBuff || isType,
              result = skipIndexes ? baseTimes(value.length, String) : [],
              length = result.length;

            for (var key in value) {
              if (
                (inherited || hasOwnProperty.call(value, key)) &&
                !(
                  skipIndexes &&
                  // Safari 9 has enumerable `arguments.length` in strict mode.
                  (key == 'length' ||
                    // Node.js 0.10 has enumerable non-index properties on buffers.
                    (isBuff && (key == 'offset' || key == 'parent')) ||
                    // PhantomJS 2 has enumerable non-index properties on typed arrays.
                    (isType &&
                      (key == 'buffer' ||
                        key == 'byteLength' ||
                        key == 'byteOffset')) ||
                    // Skip index properties.
                    isIndex(key, length))
                )
              ) {
                result.push(key);
              }
            }
            return result;
          }

          /**
           * This function is like `assignValue` except that it doesn't assign
           * `undefined` values.
           *
           * @private
           * @param {Object} object The object to modify.
           * @param {string} key The key of the property to assign.
           * @param {*} value The value to assign.
           */
          function assignMergeValue(object, key, value) {
            if (
              (value !== undefined && !eq(object[key], value)) ||
              (value === undefined && !(key in object))
            ) {
              baseAssignValue(object, key, value);
            }
          }

          /**
           * Assigns `value` to `key` of `object` if the existing value is not equivalent
           * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
           * for equality comparisons.
           *
           * @private
           * @param {Object} object The object to modify.
           * @param {string} key The key of the property to assign.
           * @param {*} value The value to assign.
           */
          function assignValue(object, key, value) {
            var objValue = object[key];
            if (
              !(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
              (value === undefined && !(key in object))
            ) {
              baseAssignValue(object, key, value);
            }
          }

          /**
           * Gets the index at which the `key` is found in `array` of key-value pairs.
           *
           * @private
           * @param {Array} array The array to inspect.
           * @param {*} key The key to search for.
           * @returns {number} Returns the index of the matched value, else `-1`.
           */
          function assocIndexOf(array, key) {
            var length = array.length;
            while (length--) {
              if (eq(array[length][0], key)) {
                return length;
              }
            }
            return -1;
          }

          /**
           * The base implementation of `assignValue` and `assignMergeValue` without
           * value checks.
           *
           * @private
           * @param {Object} object The object to modify.
           * @param {string} key The key of the property to assign.
           * @param {*} value The value to assign.
           */
          function baseAssignValue(object, key, value) {
            if (key == '__proto__' && defineProperty) {
              defineProperty(object, key, {
                configurable: true,
                enumerable: true,
                value: value,
                writable: true,
              });
            } else {
              object[key] = value;
            }
          }

          /**
           * The base implementation of `baseForOwn` which iterates over `object`
           * properties returned by `keysFunc` and invokes `iteratee` for each property.
           * Iteratee functions may exit iteration early by explicitly returning `false`.
           *
           * @private
           * @param {Object} object The object to iterate over.
           * @param {Function} iteratee The function invoked per iteration.
           * @param {Function} keysFunc The function to get the keys of `object`.
           * @returns {Object} Returns `object`.
           */
          var baseFor = createBaseFor();

          /**
           * The base implementation of `getTag` without fallbacks for buggy environments.
           *
           * @private
           * @param {*} value The value to query.
           * @returns {string} Returns the `toStringTag`.
           */
          function baseGetTag(value) {
            if (value == null) {
              return value === undefined ? undefinedTag : nullTag;
            }
            return symToStringTag && symToStringTag in Object(value)
              ? getRawTag(value)
              : objectToString(value);
          }

          /**
           * The base implementation of `_.isArguments`.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an `arguments` object,
           */
          function baseIsArguments(value) {
            return isObjectLike(value) && baseGetTag(value) == argsTag;
          }

          /**
           * The base implementation of `_.isNative` without bad shim checks.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a native function,
           *  else `false`.
           */
          function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) {
              return false;
            }
            var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
          }

          /**
           * The base implementation of `_.isTypedArray` without Node.js optimizations.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
           */
          function baseIsTypedArray(value) {
            return (
              isObjectLike(value) &&
              isLength(value.length) &&
              !!typedArrayTags[baseGetTag(value)]
            );
          }

          /**
           * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
           *
           * @private
           * @param {Object} object The object to query.
           * @returns {Array} Returns the array of property names.
           */
          function baseKeysIn(object) {
            if (!isObject(object)) {
              return nativeKeysIn(object);
            }
            var isProto = isPrototype(object),
              result = [];

            for (var key in object) {
              if (
                !(
                  key == 'constructor' &&
                  (isProto || !hasOwnProperty.call(object, key))
                )
              ) {
                result.push(key);
              }
            }
            return result;
          }

          /**
           * The base implementation of `_.merge` without support for multiple sources.
           *
           * @private
           * @param {Object} object The destination object.
           * @param {Object} source The source object.
           * @param {number} srcIndex The index of `source`.
           * @param {Function} [customizer] The function to customize merged values.
           * @param {Object} [stack] Tracks traversed source values and their merged
           *  counterparts.
           */
          function baseMerge(object, source, srcIndex, customizer, stack) {
            if (object === source) {
              return;
            }
            baseFor(
              source,
              function (srcValue, key) {
                stack || (stack = new Stack());
                if (isObject(srcValue)) {
                  baseMergeDeep(
                    object,
                    source,
                    key,
                    srcIndex,
                    baseMerge,
                    customizer,
                    stack
                  );
                } else {
                  var newValue = customizer
                    ? customizer(
                        safeGet(object, key),
                        srcValue,
                        key + '',
                        object,
                        source,
                        stack
                      )
                    : undefined;

                  if (newValue === undefined) {
                    newValue = srcValue;
                  }
                  assignMergeValue(object, key, newValue);
                }
              },
              keysIn
            );
          }

          /**
           * A specialized version of `baseMerge` for arrays and objects which performs
           * deep merges and tracks traversed objects enabling objects with circular
           * references to be merged.
           *
           * @private
           * @param {Object} object The destination object.
           * @param {Object} source The source object.
           * @param {string} key The key of the value to merge.
           * @param {number} srcIndex The index of `source`.
           * @param {Function} mergeFunc The function to merge values.
           * @param {Function} [customizer] The function to customize assigned values.
           * @param {Object} [stack] Tracks traversed source values and their merged
           *  counterparts.
           */
          function baseMergeDeep(
            object,
            source,
            key,
            srcIndex,
            mergeFunc,
            customizer,
            stack
          ) {
            var objValue = safeGet(object, key),
              srcValue = safeGet(source, key),
              stacked = stack.get(srcValue);

            if (stacked) {
              assignMergeValue(object, key, stacked);
              return;
            }
            var newValue = customizer
              ? customizer(objValue, srcValue, key + '', object, source, stack)
              : undefined;

            var isCommon = newValue === undefined;

            if (isCommon) {
              var isArr = isArray(srcValue),
                isBuff = !isArr && isBuffer(srcValue),
                isTyped = !isArr && !isBuff && isTypedArray(srcValue);

              newValue = srcValue;
              if (isArr || isBuff || isTyped) {
                if (isArray(objValue)) {
                  newValue = objValue;
                } else if (isArrayLikeObject(objValue)) {
                  newValue = copyArray(objValue);
                } else if (isBuff) {
                  isCommon = false;
                  newValue = cloneBuffer(srcValue, true);
                } else if (isTyped) {
                  isCommon = false;
                  newValue = cloneTypedArray(srcValue, true);
                } else {
                  newValue = [];
                }
              } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
                newValue = objValue;
                if (isArguments(objValue)) {
                  newValue = toPlainObject(objValue);
                } else if (!isObject(objValue) || isFunction(objValue)) {
                  newValue = initCloneObject(srcValue);
                }
              } else {
                isCommon = false;
              }
            }
            if (isCommon) {
              // Recursively merge objects and arrays (susceptible to call stack limits).
              stack.set(srcValue, newValue);
              mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
              stack['delete'](srcValue);
            }
            assignMergeValue(object, key, newValue);
          }

          /**
           * The base implementation of `_.rest` which doesn't validate or coerce arguments.
           *
           * @private
           * @param {Function} func The function to apply a rest parameter to.
           * @param {number} [start=func.length-1] The start position of the rest parameter.
           * @returns {Function} Returns the new function.
           */
          function baseRest(func, start) {
            return setToString(overRest(func, start, identity), func + '');
          }

          /**
           * The base implementation of `setToString` without support for hot loop shorting.
           *
           * @private
           * @param {Function} func The function to modify.
           * @param {Function} string The `toString` result.
           * @returns {Function} Returns `func`.
           */
          var baseSetToString = !defineProperty
            ? identity
            : function (func, string) {
                return defineProperty(func, 'toString', {
                  configurable: true,
                  enumerable: false,
                  value: constant(string),
                  writable: true,
                });
              };

          /**
           * Creates a clone of  `buffer`.
           *
           * @private
           * @param {Buffer} buffer The buffer to clone.
           * @param {boolean} [isDeep] Specify a deep clone.
           * @returns {Buffer} Returns the cloned buffer.
           */
          function cloneBuffer(buffer, isDeep) {
            if (isDeep) {
              return buffer.slice();
            }
            var length = buffer.length,
              result = allocUnsafe
                ? allocUnsafe(length)
                : new buffer.constructor(length);

            buffer.copy(result);
            return result;
          }

          /**
           * Creates a clone of `arrayBuffer`.
           *
           * @private
           * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
           * @returns {ArrayBuffer} Returns the cloned array buffer.
           */
          function cloneArrayBuffer(arrayBuffer) {
            var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
            new Uint8Array(result).set(new Uint8Array(arrayBuffer));
            return result;
          }

          /**
           * Creates a clone of `typedArray`.
           *
           * @private
           * @param {Object} typedArray The typed array to clone.
           * @param {boolean} [isDeep] Specify a deep clone.
           * @returns {Object} Returns the cloned typed array.
           */
          function cloneTypedArray(typedArray, isDeep) {
            var buffer = isDeep
              ? cloneArrayBuffer(typedArray.buffer)
              : typedArray.buffer;
            return new typedArray.constructor(
              buffer,
              typedArray.byteOffset,
              typedArray.length
            );
          }

          /**
           * Copies the values of `source` to `array`.
           *
           * @private
           * @param {Array} source The array to copy values from.
           * @param {Array} [array=[]] The array to copy values to.
           * @returns {Array} Returns `array`.
           */
          function copyArray(source, array) {
            var index = -1,
              length = source.length;

            array || (array = Array(length));
            while (++index < length) {
              array[index] = source[index];
            }
            return array;
          }

          /**
           * Copies properties of `source` to `object`.
           *
           * @private
           * @param {Object} source The object to copy properties from.
           * @param {Array} props The property identifiers to copy.
           * @param {Object} [object={}] The object to copy properties to.
           * @param {Function} [customizer] The function to customize copied values.
           * @returns {Object} Returns `object`.
           */
          function copyObject(source, props, object, customizer) {
            var isNew = !object;
            object || (object = {});

            var index = -1,
              length = props.length;

            while (++index < length) {
              var key = props[index];

              var newValue = customizer
                ? customizer(object[key], source[key], key, object, source)
                : undefined;

              if (newValue === undefined) {
                newValue = source[key];
              }
              if (isNew) {
                baseAssignValue(object, key, newValue);
              } else {
                assignValue(object, key, newValue);
              }
            }
            return object;
          }

          /**
           * Creates a function like `_.assign`.
           *
           * @private
           * @param {Function} assigner The function to assign values.
           * @returns {Function} Returns the new assigner function.
           */
          function createAssigner(assigner) {
            return baseRest(function (object, sources) {
              var index = -1,
                length = sources.length,
                customizer = length > 1 ? sources[length - 1] : undefined,
                guard = length > 2 ? sources[2] : undefined;

              customizer =
                assigner.length > 3 && typeof customizer == 'function'
                  ? (length--, customizer)
                  : undefined;

              if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                customizer = length < 3 ? undefined : customizer;
                length = 1;
              }
              object = Object(object);
              while (++index < length) {
                var source = sources[index];
                if (source) {
                  assigner(object, source, index, customizer);
                }
              }
              return object;
            });
          }

          /**
           * Creates a base function for methods like `_.forIn` and `_.forOwn`.
           *
           * @private
           * @param {boolean} [fromRight] Specify iterating from right to left.
           * @returns {Function} Returns the new base function.
           */
          function createBaseFor(fromRight) {
            return function (object, iteratee, keysFunc) {
              var index = -1,
                iterable = Object(object),
                props = keysFunc(object),
                length = props.length;

              while (length--) {
                var key = props[fromRight ? length : ++index];
                if (iteratee(iterable[key], key, iterable) === false) {
                  break;
                }
              }
              return object;
            };
          }

          /**
           * Gets the data for `map`.
           *
           * @private
           * @param {Object} map The map to query.
           * @param {string} key The reference key.
           * @returns {*} Returns the map data.
           */
          function getMapData(map, key) {
            var data = map.__data__;
            return isKeyable(key)
              ? data[typeof key == 'string' ? 'string' : 'hash']
              : data.map;
          }

          /**
           * Gets the native function at `key` of `object`.
           *
           * @private
           * @param {Object} object The object to query.
           * @param {string} key The key of the method to get.
           * @returns {*} Returns the function if it's native, else `undefined`.
           */
          function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined;
          }

          /**
           * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
           *
           * @private
           * @param {*} value The value to query.
           * @returns {string} Returns the raw `toStringTag`.
           */
          function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag),
              tag = value[symToStringTag];

            try {
              value[symToStringTag] = undefined;
              var unmasked = true;
            } catch (e) {}

            var result = nativeObjectToString.call(value);
            if (unmasked) {
              if (isOwn) {
                value[symToStringTag] = tag;
              } else {
                delete value[symToStringTag];
              }
            }
            return result;
          }

          /**
           * Initializes an object clone.
           *
           * @private
           * @param {Object} object The object to clone.
           * @returns {Object} Returns the initialized clone.
           */
          function initCloneObject(object) {
            return typeof object.constructor == 'function' &&
              !isPrototype(object)
              ? baseCreate(getPrototype(object))
              : {};
          }

          /**
           * Checks if `value` is a valid array-like index.
           *
           * @private
           * @param {*} value The value to check.
           * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
           * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
           */
          function isIndex(value, length) {
            var type = typeof value;
            length = length == null ? MAX_SAFE_INTEGER : length;

            return (
              !!length &&
              (type == 'number' ||
                (type != 'symbol' && reIsUint.test(value))) &&
              value > -1 &&
              value % 1 == 0 &&
              value < length
            );
          }

          /**
           * Checks if the given arguments are from an iteratee call.
           *
           * @private
           * @param {*} value The potential iteratee value argument.
           * @param {*} index The potential iteratee index or key argument.
           * @param {*} object The potential iteratee object argument.
           * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
           *  else `false`.
           */
          function isIterateeCall(value, index, object) {
            if (!isObject(object)) {
              return false;
            }
            var type = typeof index;
            if (
              type == 'number'
                ? isArrayLike(object) && isIndex(index, object.length)
                : type == 'string' && index in object
            ) {
              return eq(object[index], value);
            }
            return false;
          }

          /**
           * Checks if `value` is suitable for use as unique object key.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
           */
          function isKeyable(value) {
            var type = typeof value;
            return type == 'string' ||
              type == 'number' ||
              type == 'symbol' ||
              type == 'boolean'
              ? value !== '__proto__'
              : value === null;
          }

          /**
           * Checks if `func` has its source masked.
           *
           * @private
           * @param {Function} func The function to check.
           * @returns {boolean} Returns `true` if `func` is masked, else `false`.
           */
          function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
          }

          /**
           * Checks if `value` is likely a prototype object.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
           */
          function isPrototype(value) {
            var Ctor = value && value.constructor,
              proto =
                (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

            return value === proto;
          }

          /**
           * This function is like
           * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
           * except that it includes inherited enumerable properties.
           *
           * @private
           * @param {Object} object The object to query.
           * @returns {Array} Returns the array of property names.
           */
          function nativeKeysIn(object) {
            var result = [];
            if (object != null) {
              for (var key in Object(object)) {
                result.push(key);
              }
            }
            return result;
          }

          /**
           * Converts `value` to a string using `Object.prototype.toString`.
           *
           * @private
           * @param {*} value The value to convert.
           * @returns {string} Returns the converted string.
           */
          function objectToString(value) {
            return nativeObjectToString.call(value);
          }

          /**
           * A specialized version of `baseRest` which transforms the rest array.
           *
           * @private
           * @param {Function} func The function to apply a rest parameter to.
           * @param {number} [start=func.length-1] The start position of the rest parameter.
           * @param {Function} transform The rest array transform.
           * @returns {Function} Returns the new function.
           */
          function overRest(func, start, transform) {
            start = nativeMax(start === undefined ? func.length - 1 : start, 0);
            return function () {
              var args = arguments,
                index = -1,
                length = nativeMax(args.length - start, 0),
                array = Array(length);

              while (++index < length) {
                array[index] = args[start + index];
              }
              index = -1;
              var otherArgs = Array(start + 1);
              while (++index < start) {
                otherArgs[index] = args[index];
              }
              otherArgs[start] = transform(array);
              return apply(func, this, otherArgs);
            };
          }

          /**
           * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
           *
           * @private
           * @param {Object} object The object to query.
           * @param {string} key The key of the property to get.
           * @returns {*} Returns the property value.
           */
          function safeGet(object, key) {
            if (key === 'constructor' && typeof object[key] === 'function') {
              return;
            }

            if (key == '__proto__') {
              return;
            }

            return object[key];
          }

          /**
           * Sets the `toString` method of `func` to return `string`.
           *
           * @private
           * @param {Function} func The function to modify.
           * @param {Function} string The `toString` result.
           * @returns {Function} Returns `func`.
           */
          var setToString = shortOut(baseSetToString);

          /**
           * Creates a function that'll short out and invoke `identity` instead
           * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
           * milliseconds.
           *
           * @private
           * @param {Function} func The function to restrict.
           * @returns {Function} Returns the new shortable function.
           */
          function shortOut(func) {
            var count = 0,
              lastCalled = 0;

            return function () {
              var stamp = nativeNow(),
                remaining = HOT_SPAN - (stamp - lastCalled);

              lastCalled = stamp;
              if (remaining > 0) {
                if (++count >= HOT_COUNT) {
                  return arguments[0];
                }
              } else {
                count = 0;
              }
              return func.apply(undefined, arguments);
            };
          }

          /**
           * Converts `func` to its source code.
           *
           * @private
           * @param {Function} func The function to convert.
           * @returns {string} Returns the source code.
           */
          function toSource(func) {
            if (func != null) {
              try {
                return funcToString.call(func);
              } catch (e) {}
              try {
                return func + '';
              } catch (e) {}
            }
            return '';
          }

          /**
           * Performs a
           * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
           * comparison between two values to determine if they are equivalent.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to compare.
           * @param {*} other The other value to compare.
           * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
           * @example
           *
           * var object = { 'a': 1 };
           * var other = { 'a': 1 };
           *
           * _.eq(object, object);
           * // => true
           *
           * _.eq(object, other);
           * // => false
           *
           * _.eq('a', 'a');
           * // => true
           *
           * _.eq('a', Object('a'));
           * // => false
           *
           * _.eq(NaN, NaN);
           * // => true
           */
          function eq(value, other) {
            return value === other || (value !== value && other !== other);
          }

          /**
           * Checks if `value` is likely an `arguments` object.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an `arguments` object,
           *  else `false`.
           * @example
           *
           * _.isArguments(function() { return arguments; }());
           * // => true
           *
           * _.isArguments([1, 2, 3]);
           * // => false
           */
          var isArguments = baseIsArguments(
            (function () {
              return arguments;
            })()
          )
            ? baseIsArguments
            : function (value) {
                return (
                  isObjectLike(value) &&
                  hasOwnProperty.call(value, 'callee') &&
                  !propertyIsEnumerable.call(value, 'callee')
                );
              };

          /**
           * Checks if `value` is classified as an `Array` object.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an array, else `false`.
           * @example
           *
           * _.isArray([1, 2, 3]);
           * // => true
           *
           * _.isArray(document.body.children);
           * // => false
           *
           * _.isArray('abc');
           * // => false
           *
           * _.isArray(_.noop);
           * // => false
           */
          var isArray = Array.isArray;

          /**
           * Checks if `value` is array-like. A value is considered array-like if it's
           * not a function and has a `value.length` that's an integer greater than or
           * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
           * @example
           *
           * _.isArrayLike([1, 2, 3]);
           * // => true
           *
           * _.isArrayLike(document.body.children);
           * // => true
           *
           * _.isArrayLike('abc');
           * // => true
           *
           * _.isArrayLike(_.noop);
           * // => false
           */
          function isArrayLike(value) {
            return (
              value != null && isLength(value.length) && !isFunction(value)
            );
          }

          /**
           * This method is like `_.isArrayLike` except that it also checks if `value`
           * is an object.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an array-like object,
           *  else `false`.
           * @example
           *
           * _.isArrayLikeObject([1, 2, 3]);
           * // => true
           *
           * _.isArrayLikeObject(document.body.children);
           * // => true
           *
           * _.isArrayLikeObject('abc');
           * // => false
           *
           * _.isArrayLikeObject(_.noop);
           * // => false
           */
          function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value);
          }

          /**
           * Checks if `value` is a buffer.
           *
           * @static
           * @memberOf _
           * @since 4.3.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
           * @example
           *
           * _.isBuffer(new Buffer(2));
           * // => true
           *
           * _.isBuffer(new Uint8Array(2));
           * // => false
           */
          var isBuffer = nativeIsBuffer || stubFalse;

          /**
           * Checks if `value` is classified as a `Function` object.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a function, else `false`.
           * @example
           *
           * _.isFunction(_);
           * // => true
           *
           * _.isFunction(/abc/);
           * // => false
           */
          function isFunction(value) {
            if (!isObject(value)) {
              return false;
            }
            // The use of `Object#toString` avoids issues with the `typeof` operator
            // in Safari 9 which returns 'object' for typed arrays and other constructors.
            var tag = baseGetTag(value);
            return (
              tag == funcTag ||
              tag == genTag ||
              tag == asyncTag ||
              tag == proxyTag
            );
          }

          /**
           * Checks if `value` is a valid array-like length.
           *
           * **Note:** This method is loosely based on
           * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
           * @example
           *
           * _.isLength(3);
           * // => true
           *
           * _.isLength(Number.MIN_VALUE);
           * // => false
           *
           * _.isLength(Infinity);
           * // => false
           *
           * _.isLength('3');
           * // => false
           */
          function isLength(value) {
            return (
              typeof value == 'number' &&
              value > -1 &&
              value % 1 == 0 &&
              value <= MAX_SAFE_INTEGER
            );
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
            return value != null && (type == 'object' || type == 'function');
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
            return value != null && typeof value == 'object';
          }

          /**
           * Checks if `value` is a plain object, that is, an object created by the
           * `Object` constructor or one with a `[[Prototype]]` of `null`.
           *
           * @static
           * @memberOf _
           * @since 0.8.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
           * @example
           *
           * function Foo() {
           *   this.a = 1;
           * }
           *
           * _.isPlainObject(new Foo);
           * // => false
           *
           * _.isPlainObject([1, 2, 3]);
           * // => false
           *
           * _.isPlainObject({ 'x': 0, 'y': 0 });
           * // => true
           *
           * _.isPlainObject(Object.create(null));
           * // => true
           */
          function isPlainObject(value) {
            if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
              return false;
            }
            var proto = getPrototype(value);
            if (proto === null) {
              return true;
            }
            var Ctor =
              hasOwnProperty.call(proto, 'constructor') && proto.constructor;
            return (
              typeof Ctor == 'function' &&
              Ctor instanceof Ctor &&
              funcToString.call(Ctor) == objectCtorString
            );
          }

          /**
           * Checks if `value` is classified as a typed array.
           *
           * @static
           * @memberOf _
           * @since 3.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
           * @example
           *
           * _.isTypedArray(new Uint8Array);
           * // => true
           *
           * _.isTypedArray([]);
           * // => false
           */
          var isTypedArray = nodeIsTypedArray
            ? baseUnary(nodeIsTypedArray)
            : baseIsTypedArray;

          /**
           * Converts `value` to a plain object flattening inherited enumerable string
           * keyed properties of `value` to own properties of the plain object.
           *
           * @static
           * @memberOf _
           * @since 3.0.0
           * @category Lang
           * @param {*} value The value to convert.
           * @returns {Object} Returns the converted plain object.
           * @example
           *
           * function Foo() {
           *   this.b = 2;
           * }
           *
           * Foo.prototype.c = 3;
           *
           * _.assign({ 'a': 1 }, new Foo);
           * // => { 'a': 1, 'b': 2 }
           *
           * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
           * // => { 'a': 1, 'b': 2, 'c': 3 }
           */
          function toPlainObject(value) {
            return copyObject(value, keysIn(value));
          }

          /**
           * Creates an array of the own and inherited enumerable property names of `object`.
           *
           * **Note:** Non-object values are coerced to objects.
           *
           * @static
           * @memberOf _
           * @since 3.0.0
           * @category Object
           * @param {Object} object The object to query.
           * @returns {Array} Returns the array of property names.
           * @example
           *
           * function Foo() {
           *   this.a = 1;
           *   this.b = 2;
           * }
           *
           * Foo.prototype.c = 3;
           *
           * _.keysIn(new Foo);
           * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
           */
          function keysIn(object) {
            return isArrayLike(object)
              ? arrayLikeKeys(object, true)
              : baseKeysIn(object);
          }

          /**
           * This method is like `_.assign` except that it recursively merges own and
           * inherited enumerable string keyed properties of source objects into the
           * destination object. Source properties that resolve to `undefined` are
           * skipped if a destination value exists. Array and plain object properties
           * are merged recursively. Other objects and value types are overridden by
           * assignment. Source objects are applied from left to right. Subsequent
           * sources overwrite property assignments of previous sources.
           *
           * **Note:** This method mutates `object`.
           *
           * @static
           * @memberOf _
           * @since 0.5.0
           * @category Object
           * @param {Object} object The destination object.
           * @param {...Object} [sources] The source objects.
           * @returns {Object} Returns `object`.
           * @example
           *
           * var object = {
           *   'a': [{ 'b': 2 }, { 'd': 4 }]
           * };
           *
           * var other = {
           *   'a': [{ 'c': 3 }, { 'e': 5 }]
           * };
           *
           * _.merge(object, other);
           * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
           */
          var merge = createAssigner(function (object, source, srcIndex) {
            baseMerge(object, source, srcIndex);
          });

          /**
           * Creates a function that returns `value`.
           *
           * @static
           * @memberOf _
           * @since 2.4.0
           * @category Util
           * @param {*} value The value to return from the new function.
           * @returns {Function} Returns the new constant function.
           * @example
           *
           * var objects = _.times(2, _.constant({ 'a': 1 }));
           *
           * console.log(objects);
           * // => [{ 'a': 1 }, { 'a': 1 }]
           *
           * console.log(objects[0] === objects[1]);
           * // => true
           */
          function constant(value) {
            return function () {
              return value;
            };
          }

          /**
           * This method returns the first argument it receives.
           *
           * @static
           * @since 0.1.0
           * @memberOf _
           * @category Util
           * @param {*} value Any value.
           * @returns {*} Returns `value`.
           * @example
           *
           * var object = { 'a': 1 };
           *
           * console.log(_.identity(object) === object);
           * // => true
           */
          function identity(value) {
            return value;
          }

          /**
           * This method returns `false`.
           *
           * @static
           * @memberOf _
           * @since 4.13.0
           * @category Util
           * @returns {boolean} Returns `false`.
           * @example
           *
           * _.times(2, _.stubFalse);
           * // => [false, false]
           */
          function stubFalse() {
            return false;
          }

          module.exports = merge;

          /* WEBPACK VAR INJECTION */
        }).call(
          this,
          __webpack_require__(
            /*! ./../webpack/buildin/global.js */ '../node_modules/webpack/buildin/global.js'
          ),
          __webpack_require__(
            /*! ./../webpack/buildin/module.js */ '../node_modules/webpack/buildin/module.js'
          )(module)
        );

        /***/
      },

    /***/ '../node_modules/lodash.set/index.js':
      /*!*******************************************!*\
  !*** ../node_modules/lodash.set/index.js ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function (global) {
          /**
           * lodash (Custom Build) <https://lodash.com/>
           * Build: `lodash modularize exports="npm" -o ./`
           * Copyright jQuery Foundation and other contributors <https://jquery.org/>
           * Released under MIT license <https://lodash.com/license>
           * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
           * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
           */

          /** Used as the `TypeError` message for "Functions" methods. */
          var FUNC_ERROR_TEXT = 'Expected a function';

          /** Used to stand-in for `undefined` hash values. */
          var HASH_UNDEFINED = '__lodash_hash_undefined__';

          /** Used as references for various `Number` constants. */
          var INFINITY = 1 / 0,
            MAX_SAFE_INTEGER = 9007199254740991;

          /** `Object#toString` result references. */
          var funcTag = '[object Function]',
            genTag = '[object GeneratorFunction]',
            symbolTag = '[object Symbol]';

          /** Used to match property names within property paths. */
          var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            reIsPlainProp = /^\w*$/,
            reLeadingDot = /^\./,
            rePropName =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

          /**
           * Used to match `RegExp`
           * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
           */
          var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

          /** Used to match backslashes in property paths. */
          var reEscapeChar = /\\(\\)?/g;

          /** Used to detect host constructors (Safari). */
          var reIsHostCtor = /^\[object .+?Constructor\]$/;

          /** Used to detect unsigned integer values. */
          var reIsUint = /^(?:0|[1-9]\d*)$/;

          /** Detect free variable `global` from Node.js. */
          var freeGlobal =
            typeof global == 'object' &&
            global &&
            global.Object === Object &&
            global;

          /** Detect free variable `self`. */
          var freeSelf =
            typeof self == 'object' && self && self.Object === Object && self;

          /** Used as a reference to the global object. */
          var root = freeGlobal || freeSelf || Function('return this')();

          /**
           * Gets the value at `key` of `object`.
           *
           * @private
           * @param {Object} [object] The object to query.
           * @param {string} key The key of the property to get.
           * @returns {*} Returns the property value.
           */
          function getValue(object, key) {
            return object == null ? undefined : object[key];
          }

          /**
           * Checks if `value` is a host object in IE < 9.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
           */
          function isHostObject(value) {
            // Many host objects are `Object` objects that can coerce to strings
            // despite having improperly defined `toString` methods.
            var result = false;
            if (value != null && typeof value.toString != 'function') {
              try {
                result = !!(value + '');
              } catch (e) {}
            }
            return result;
          }

          /** Used for built-in method references. */
          var arrayProto = Array.prototype,
            funcProto = Function.prototype,
            objectProto = Object.prototype;

          /** Used to detect overreaching core-js shims. */
          var coreJsData = root['__core-js_shared__'];

          /** Used to detect methods masquerading as native. */
          var maskSrcKey = (function () {
            var uid = /[^.]+$/.exec(
              (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || ''
            );
            return uid ? 'Symbol(src)_1.' + uid : '';
          })();

          /** Used to resolve the decompiled source of functions. */
          var funcToString = funcProto.toString;

          /** Used to check objects for own properties. */
          var hasOwnProperty = objectProto.hasOwnProperty;

          /**
           * Used to resolve the
           * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
           * of values.
           */
          var objectToString = objectProto.toString;

          /** Used to detect if a method is native. */
          var reIsNative = RegExp(
            '^' +
              funcToString
                .call(hasOwnProperty)
                .replace(reRegExpChar, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          );

          /** Built-in value references. */
          var Symbol = root.Symbol,
            splice = arrayProto.splice;

          /* Built-in method references that are verified to be native. */
          var Map = getNative(root, 'Map'),
            nativeCreate = getNative(Object, 'create');

          /** Used to convert symbols to primitives and strings. */
          var symbolProto = Symbol ? Symbol.prototype : undefined,
            symbolToString = symbolProto ? symbolProto.toString : undefined;

          /**
           * Creates a hash object.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */
          function Hash(entries) {
            var index = -1,
              length = entries ? entries.length : 0;

            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }

          /**
           * Removes all key-value entries from the hash.
           *
           * @private
           * @name clear
           * @memberOf Hash
           */
          function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
          }

          /**
           * Removes `key` and its value from the hash.
           *
           * @private
           * @name delete
           * @memberOf Hash
           * @param {Object} hash The hash to modify.
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */
          function hashDelete(key) {
            return this.has(key) && delete this.__data__[key];
          }

          /**
           * Gets the hash value for `key`.
           *
           * @private
           * @name get
           * @memberOf Hash
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */
          function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
              var result = data[key];
              return result === HASH_UNDEFINED ? undefined : result;
            }
            return hasOwnProperty.call(data, key) ? data[key] : undefined;
          }

          /**
           * Checks if a hash value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf Hash
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */
          function hashHas(key) {
            var data = this.__data__;
            return nativeCreate
              ? data[key] !== undefined
              : hasOwnProperty.call(data, key);
          }

          /**
           * Sets the hash `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf Hash
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the hash instance.
           */
          function hashSet(key, value) {
            var data = this.__data__;
            data[key] =
              nativeCreate && value === undefined ? HASH_UNDEFINED : value;
            return this;
          }

          // Add methods to `Hash`.
          Hash.prototype.clear = hashClear;
          Hash.prototype['delete'] = hashDelete;
          Hash.prototype.get = hashGet;
          Hash.prototype.has = hashHas;
          Hash.prototype.set = hashSet;

          /**
           * Creates an list cache object.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */
          function ListCache(entries) {
            var index = -1,
              length = entries ? entries.length : 0;

            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }

          /**
           * Removes all key-value entries from the list cache.
           *
           * @private
           * @name clear
           * @memberOf ListCache
           */
          function listCacheClear() {
            this.__data__ = [];
          }

          /**
           * Removes `key` and its value from the list cache.
           *
           * @private
           * @name delete
           * @memberOf ListCache
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */
          function listCacheDelete(key) {
            var data = this.__data__,
              index = assocIndexOf(data, key);

            if (index < 0) {
              return false;
            }
            var lastIndex = data.length - 1;
            if (index == lastIndex) {
              data.pop();
            } else {
              splice.call(data, index, 1);
            }
            return true;
          }

          /**
           * Gets the list cache value for `key`.
           *
           * @private
           * @name get
           * @memberOf ListCache
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */
          function listCacheGet(key) {
            var data = this.__data__,
              index = assocIndexOf(data, key);

            return index < 0 ? undefined : data[index][1];
          }

          /**
           * Checks if a list cache value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf ListCache
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */
          function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
          }

          /**
           * Sets the list cache `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf ListCache
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the list cache instance.
           */
          function listCacheSet(key, value) {
            var data = this.__data__,
              index = assocIndexOf(data, key);

            if (index < 0) {
              data.push([key, value]);
            } else {
              data[index][1] = value;
            }
            return this;
          }

          // Add methods to `ListCache`.
          ListCache.prototype.clear = listCacheClear;
          ListCache.prototype['delete'] = listCacheDelete;
          ListCache.prototype.get = listCacheGet;
          ListCache.prototype.has = listCacheHas;
          ListCache.prototype.set = listCacheSet;

          /**
           * Creates a map cache object to store key-value pairs.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */
          function MapCache(entries) {
            var index = -1,
              length = entries ? entries.length : 0;

            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }

          /**
           * Removes all key-value entries from the map.
           *
           * @private
           * @name clear
           * @memberOf MapCache
           */
          function mapCacheClear() {
            this.__data__ = {
              hash: new Hash(),
              map: new (Map || ListCache)(),
              string: new Hash(),
            };
          }

          /**
           * Removes `key` and its value from the map.
           *
           * @private
           * @name delete
           * @memberOf MapCache
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */
          function mapCacheDelete(key) {
            return getMapData(this, key)['delete'](key);
          }

          /**
           * Gets the map value for `key`.
           *
           * @private
           * @name get
           * @memberOf MapCache
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */
          function mapCacheGet(key) {
            return getMapData(this, key).get(key);
          }

          /**
           * Checks if a map value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf MapCache
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */
          function mapCacheHas(key) {
            return getMapData(this, key).has(key);
          }

          /**
           * Sets the map `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf MapCache
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the map cache instance.
           */
          function mapCacheSet(key, value) {
            getMapData(this, key).set(key, value);
            return this;
          }

          // Add methods to `MapCache`.
          MapCache.prototype.clear = mapCacheClear;
          MapCache.prototype['delete'] = mapCacheDelete;
          MapCache.prototype.get = mapCacheGet;
          MapCache.prototype.has = mapCacheHas;
          MapCache.prototype.set = mapCacheSet;

          /**
           * Assigns `value` to `key` of `object` if the existing value is not equivalent
           * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
           * for equality comparisons.
           *
           * @private
           * @param {Object} object The object to modify.
           * @param {string} key The key of the property to assign.
           * @param {*} value The value to assign.
           */
          function assignValue(object, key, value) {
            var objValue = object[key];
            if (
              !(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
              (value === undefined && !(key in object))
            ) {
              object[key] = value;
            }
          }

          /**
           * Gets the index at which the `key` is found in `array` of key-value pairs.
           *
           * @private
           * @param {Array} array The array to inspect.
           * @param {*} key The key to search for.
           * @returns {number} Returns the index of the matched value, else `-1`.
           */
          function assocIndexOf(array, key) {
            var length = array.length;
            while (length--) {
              if (eq(array[length][0], key)) {
                return length;
              }
            }
            return -1;
          }

          /**
           * The base implementation of `_.isNative` without bad shim checks.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a native function,
           *  else `false`.
           */
          function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) {
              return false;
            }
            var pattern =
              isFunction(value) || isHostObject(value)
                ? reIsNative
                : reIsHostCtor;
            return pattern.test(toSource(value));
          }

          /**
           * The base implementation of `_.set`.
           *
           * @private
           * @param {Object} object The object to modify.
           * @param {Array|string} path The path of the property to set.
           * @param {*} value The value to set.
           * @param {Function} [customizer] The function to customize path creation.
           * @returns {Object} Returns `object`.
           */
          function baseSet(object, path, value, customizer) {
            if (!isObject(object)) {
              return object;
            }
            path = isKey(path, object) ? [path] : castPath(path);

            var index = -1,
              length = path.length,
              lastIndex = length - 1,
              nested = object;

            while (nested != null && ++index < length) {
              var key = toKey(path[index]),
                newValue = value;

              if (index != lastIndex) {
                var objValue = nested[key];
                newValue = customizer
                  ? customizer(objValue, key, nested)
                  : undefined;
                if (newValue === undefined) {
                  newValue = isObject(objValue)
                    ? objValue
                    : isIndex(path[index + 1])
                    ? []
                    : {};
                }
              }
              assignValue(nested, key, newValue);
              nested = nested[key];
            }
            return object;
          }

          /**
           * The base implementation of `_.toString` which doesn't convert nullish
           * values to empty strings.
           *
           * @private
           * @param {*} value The value to process.
           * @returns {string} Returns the string.
           */
          function baseToString(value) {
            // Exit early for strings to avoid a performance hit in some environments.
            if (typeof value == 'string') {
              return value;
            }
            if (isSymbol(value)) {
              return symbolToString ? symbolToString.call(value) : '';
            }
            var result = value + '';
            return result == '0' && 1 / value == -INFINITY ? '-0' : result;
          }

          /**
           * Casts `value` to a path array if it's not one.
           *
           * @private
           * @param {*} value The value to inspect.
           * @returns {Array} Returns the cast property path array.
           */
          function castPath(value) {
            return isArray(value) ? value : stringToPath(value);
          }

          /**
           * Gets the data for `map`.
           *
           * @private
           * @param {Object} map The map to query.
           * @param {string} key The reference key.
           * @returns {*} Returns the map data.
           */
          function getMapData(map, key) {
            var data = map.__data__;
            return isKeyable(key)
              ? data[typeof key == 'string' ? 'string' : 'hash']
              : data.map;
          }

          /**
           * Gets the native function at `key` of `object`.
           *
           * @private
           * @param {Object} object The object to query.
           * @param {string} key The key of the method to get.
           * @returns {*} Returns the function if it's native, else `undefined`.
           */
          function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined;
          }

          /**
           * Checks if `value` is a valid array-like index.
           *
           * @private
           * @param {*} value The value to check.
           * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
           * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
           */
          function isIndex(value, length) {
            length = length == null ? MAX_SAFE_INTEGER : length;
            return (
              !!length &&
              (typeof value == 'number' || reIsUint.test(value)) &&
              value > -1 &&
              value % 1 == 0 &&
              value < length
            );
          }

          /**
           * Checks if `value` is a property name and not a property path.
           *
           * @private
           * @param {*} value The value to check.
           * @param {Object} [object] The object to query keys on.
           * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
           */
          function isKey(value, object) {
            if (isArray(value)) {
              return false;
            }
            var type = typeof value;
            if (
              type == 'number' ||
              type == 'symbol' ||
              type == 'boolean' ||
              value == null ||
              isSymbol(value)
            ) {
              return true;
            }
            return (
              reIsPlainProp.test(value) ||
              !reIsDeepProp.test(value) ||
              (object != null && value in Object(object))
            );
          }

          /**
           * Checks if `value` is suitable for use as unique object key.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
           */
          function isKeyable(value) {
            var type = typeof value;
            return type == 'string' ||
              type == 'number' ||
              type == 'symbol' ||
              type == 'boolean'
              ? value !== '__proto__'
              : value === null;
          }

          /**
           * Checks if `func` has its source masked.
           *
           * @private
           * @param {Function} func The function to check.
           * @returns {boolean} Returns `true` if `func` is masked, else `false`.
           */
          function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
          }

          /**
           * Converts `string` to a property path array.
           *
           * @private
           * @param {string} string The string to convert.
           * @returns {Array} Returns the property path array.
           */
          var stringToPath = memoize(function (string) {
            string = toString(string);

            var result = [];
            if (reLeadingDot.test(string)) {
              result.push('');
            }
            string.replace(rePropName, function (match, number, quote, string) {
              result.push(
                quote ? string.replace(reEscapeChar, '$1') : number || match
              );
            });
            return result;
          });

          /**
           * Converts `value` to a string key if it's not a string or symbol.
           *
           * @private
           * @param {*} value The value to inspect.
           * @returns {string|symbol} Returns the key.
           */
          function toKey(value) {
            if (typeof value == 'string' || isSymbol(value)) {
              return value;
            }
            var result = value + '';
            return result == '0' && 1 / value == -INFINITY ? '-0' : result;
          }

          /**
           * Converts `func` to its source code.
           *
           * @private
           * @param {Function} func The function to process.
           * @returns {string} Returns the source code.
           */
          function toSource(func) {
            if (func != null) {
              try {
                return funcToString.call(func);
              } catch (e) {}
              try {
                return func + '';
              } catch (e) {}
            }
            return '';
          }

          /**
           * Creates a function that memoizes the result of `func`. If `resolver` is
           * provided, it determines the cache key for storing the result based on the
           * arguments provided to the memoized function. By default, the first argument
           * provided to the memoized function is used as the map cache key. The `func`
           * is invoked with the `this` binding of the memoized function.
           *
           * **Note:** The cache is exposed as the `cache` property on the memoized
           * function. Its creation may be customized by replacing the `_.memoize.Cache`
           * constructor with one whose instances implement the
           * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
           * method interface of `delete`, `get`, `has`, and `set`.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Function
           * @param {Function} func The function to have its output memoized.
           * @param {Function} [resolver] The function to resolve the cache key.
           * @returns {Function} Returns the new memoized function.
           * @example
           *
           * var object = { 'a': 1, 'b': 2 };
           * var other = { 'c': 3, 'd': 4 };
           *
           * var values = _.memoize(_.values);
           * values(object);
           * // => [1, 2]
           *
           * values(other);
           * // => [3, 4]
           *
           * object.a = 2;
           * values(object);
           * // => [1, 2]
           *
           * // Modify the result cache.
           * values.cache.set(object, ['a', 'b']);
           * values(object);
           * // => ['a', 'b']
           *
           * // Replace `_.memoize.Cache`.
           * _.memoize.Cache = WeakMap;
           */
          function memoize(func, resolver) {
            if (
              typeof func != 'function' ||
              (resolver && typeof resolver != 'function')
            ) {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            var memoized = function () {
              var args = arguments,
                key = resolver ? resolver.apply(this, args) : args[0],
                cache = memoized.cache;

              if (cache.has(key)) {
                return cache.get(key);
              }
              var result = func.apply(this, args);
              memoized.cache = cache.set(key, result);
              return result;
            };
            memoized.cache = new (memoize.Cache || MapCache)();
            return memoized;
          }

          // Assign cache to `_.memoize`.
          memoize.Cache = MapCache;

          /**
           * Performs a
           * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
           * comparison between two values to determine if they are equivalent.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to compare.
           * @param {*} other The other value to compare.
           * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
           * @example
           *
           * var object = { 'a': 1 };
           * var other = { 'a': 1 };
           *
           * _.eq(object, object);
           * // => true
           *
           * _.eq(object, other);
           * // => false
           *
           * _.eq('a', 'a');
           * // => true
           *
           * _.eq('a', Object('a'));
           * // => false
           *
           * _.eq(NaN, NaN);
           * // => true
           */
          function eq(value, other) {
            return value === other || (value !== value && other !== other);
          }

          /**
           * Checks if `value` is classified as an `Array` object.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an array, else `false`.
           * @example
           *
           * _.isArray([1, 2, 3]);
           * // => true
           *
           * _.isArray(document.body.children);
           * // => false
           *
           * _.isArray('abc');
           * // => false
           *
           * _.isArray(_.noop);
           * // => false
           */
          var isArray = Array.isArray;

          /**
           * Checks if `value` is classified as a `Function` object.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a function, else `false`.
           * @example
           *
           * _.isFunction(_);
           * // => true
           *
           * _.isFunction(/abc/);
           * // => false
           */
          function isFunction(value) {
            // The use of `Object#toString` avoids issues with the `typeof` operator
            // in Safari 8-9 which returns 'object' for typed array and other constructors.
            var tag = isObject(value) ? objectToString.call(value) : '';
            return tag == funcTag || tag == genTag;
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
            return (
              typeof value == 'symbol' ||
              (isObjectLike(value) && objectToString.call(value) == symbolTag)
            );
          }

          /**
           * Converts `value` to a string. An empty string is returned for `null`
           * and `undefined` values. The sign of `-0` is preserved.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to process.
           * @returns {string} Returns the string.
           * @example
           *
           * _.toString(null);
           * // => ''
           *
           * _.toString(-0);
           * // => '-0'
           *
           * _.toString([1, 2, 3]);
           * // => '1,2,3'
           */
          function toString(value) {
            return value == null ? '' : baseToString(value);
          }

          /**
           * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
           * it's created. Arrays are created for missing index properties while objects
           * are created for all other missing properties. Use `_.setWith` to customize
           * `path` creation.
           *
           * **Note:** This method mutates `object`.
           *
           * @static
           * @memberOf _
           * @since 3.7.0
           * @category Object
           * @param {Object} object The object to modify.
           * @param {Array|string} path The path of the property to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns `object`.
           * @example
           *
           * var object = { 'a': [{ 'b': { 'c': 3 } }] };
           *
           * _.set(object, 'a[0].b.c', 4);
           * console.log(object.a[0].b.c);
           * // => 4
           *
           * _.set(object, ['x', '0', 'y', 'z'], 5);
           * console.log(object.x[0].y.z);
           * // => 5
           */
          function set(object, path, value) {
            return object == null ? object : baseSet(object, path, value);
          }

          module.exports = set;

          /* WEBPACK VAR INJECTION */
        }).call(
          this,
          __webpack_require__(
            /*! ./../webpack/buildin/global.js */ '../node_modules/webpack/buildin/global.js'
          )
        );

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

    /***/ '../node_modules/webpack/buildin/global.js':
      /*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        var g;

        // This works in non-strict mode
        g = (function () {
          return this;
        })();

        try {
          // This works if eval is allowed (see CSP)
          g = g || new Function('return this')();
        } catch (e) {
          // This works if the window reference is available
          if (typeof window === 'object') g = window;
        }

        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}

        module.exports = g;

        /***/
      },

    /***/ '../node_modules/webpack/buildin/module.js':
      /*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = function (module) {
          if (!module.webpackPolyfill) {
            module.deprecate = function () {};
            module.paths = [];
            // module.parent = undefined by default
            if (!module.children) module.children = [];
            Object.defineProperty(module, 'loaded', {
              enumerable: true,
              get: function () {
                return module.l;
              },
            });
            Object.defineProperty(module, 'id', {
              enumerable: true,
              get: function () {
                return module.i;
              },
            });
            module.webpackPolyfill = 1;
          }
          return module;
        };

        /***/
      },

    /***/ './src/accounts/Gigya.JS.Plugin.screenSet2/app/LoginModes.ts':
      /*!*******************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/LoginModes.ts ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var utils_1 = __webpack_require__(
          /*! src/accounts/Gigya.JS.Plugin.screenSet2/app/utils */ './src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts'
        );
        var ConflictHandling;
        (function (ConflictHandling) {
          ConflictHandling[(ConflictHandling['fail'] = 0)] = 'fail';
          ConflictHandling[(ConflictHandling['saveProfileAndFail'] = 1)] =
            'saveProfileAndFail';
        })(
          (ConflictHandling =
            exports.ConflictHandling || (exports.ConflictHandling = {}))
        );
        exports.LoginModes = {
          connect: {
            name: 'connect',
          },
          standard: {
            name: 'standard',
            getLoginProviders: function (apiData, params, regToken) {
              var enabledProviders = params['enabledProviders'];
              if (typeof enabledProviders !== 'string') return null;
              return enabledProviders.toLowerCase();
            },
            filterParams: function (params) {
              delete params.regToken;
              delete params.instanceID;
              delete params.getInstance;
              return params;
            },
          },
          reAuth: {
            name: 'reAuth',
            getLoginProviders: function (apiData, params, regToken) {
              var currentProviders =
                apiData.getAccountInfo &&
                apiData.getAccountInfo.socialProviders;
              var identities =
                apiData.getAccountInfo && apiData.getAccountInfo.identities;
              if (!currentProviders) return null;
              currentProviders = currentProviders.toLowerCase();
              var providers = currentProviders.split(',');
              if (identities) {
                // remove identities that are allowLogin false
                utils_1.ForEach(identities, function (identity) {
                  if (!identity.allowsLogin) {
                    var idx = providers.indexOf(
                      identity.provider.toLowerCase()
                    );
                    if (idx > -1) providers.splice(idx, 1);
                  }
                });
              }
              return providers.join(',');
            },
            filterParams: function (params) {
              delete params.instanceID;
              delete params.getInstance;
              return params;
            },
          },
          link: {
            name: 'link',
            getLoginProviders: function (apiData, params, regToken) {
              var _a, _b, _c, _d;
              if (!regToken) return null;
              return (_d =
                (_c =
                  (_b =
                    (_a =
                      apiData === null || apiData === void 0
                        ? void 0
                        : apiData.getConflictingAccount) === null ||
                    _a === void 0
                      ? void 0
                      : _a.conflictingAccount) === null || _b === void 0
                    ? void 0
                    : _b.loginProviders) === null || _c === void 0
                  ? void 0
                  : _c.join(',')) === null || _d === void 0
                ? void 0
                : _d.toLowerCase();
            },
            filterParams: function (params) {
              delete params.instanceID;
              delete params.getInstance;
              return params;
            },
          },
        };
        utils_1.DeepFreeze(exports.LoginModes);

        /***/
      },

    /***/ './src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenConsts.ts':
      /*!*********************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenConsts.ts ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.Screen_CONSTS = {
          gigyaClass: 'gigya-screen',
          conditionalAttributePrefix: 'gigya-conditional',
          expressionAttributePrefix: 'gigya-expression',
          cssClass: 'data-css-class',
          dataVariantPercentage: 'data-variant-percentage',
          dataVariantGroup: 'data-variant-group',
          dataVariantOriginalScreen: 'data-variant-original-screen',
          dataVariantTestId: 'data-variant-test-id',
        };

        /***/
      },

    /***/ './src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts':
      /*!**************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/utils.ts ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var ScreenConsts_1 = __webpack_require__(
          /*! src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenConsts */ './src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenConsts.ts'
        );
        function isHidden(el) {
          while (el && el.parentElement) {
            if (
              el.style.visibility === 'hidden' || // hidden element
              el.style.display === 'none' || // hidden element
              (window.gigya.utils.DOM.isElementClass(
                el,
                'gigya-error-display'
              ) &&
                !window.gigya.utils.DOM.isElementClass(
                  el,
                  'gigya-error-display-active'
                )) || // hidden error message
              window.gigya.utils.DOM.isElementClass(el, 'ng-hide')
            ) {
              // angular hidden element
              return true;
            } else {
              el = el.parentElement;
            }
          }
          return false;
        }
        exports.isHidden = isHidden;
        function inIFrame() {
          try {
            return window.self !== window.top;
          } catch (e) {
            return true;
          }
        }
        exports.inIFrame = inIFrame;
        function isFieldInHiddenContainer(el) {
          var curr = el;
          while (curr) {
            if (
              window.gigya.utils.DOM.isElementClass(curr, 'gigya-container') &&
              !window.gigya.utils.DOM.isElementClass(
                curr,
                'gigya-container-enabled'
              )
            )
              return true;
            curr = curr.parentElement;
          }
          return false;
        }
        exports.isFieldInHiddenContainer = isFieldInHiddenContainer;
        function hasParentAttribute(el, attrName, attrValue) {
          var curr = el;
          while (curr) {
            if (curr.getAttribute(attrName) === attrValue) {
              return true;
            }
            curr = curr.parentElement;
          }
          return false;
        }
        exports.hasParentAttribute = hasParentAttribute;
        function firstPart(str, seperator) {
          var index = str.indexOf(seperator);
          return index > -1 ? str.substring(0, index) : str;
        }
        exports.firstPart = firstPart;
        function LastIndexOf(arr, val, fromIndex) {
          if (fromIndex === void 0) {
            fromIndex = 0;
          }
          for (var i = arr.length; --i >= fromIndex; ) {
            if (arr[i] === val) return i;
          }
          return -1;
        }
        exports.LastIndexOf = LastIndexOf;
        function ForEach(arr, action) {
          for (var i = 0; i < arr.length; ++i) {
            action(arr[i], i, arr);
          }
        }
        exports.ForEach = ForEach;
        function ForEachProp(obj, action) {
          for (var name in obj) {
            if (obj.hasOwnProperty(name)) action(obj[name], name, obj);
          }
        }
        exports.ForEachProp = ForEachProp;
        function Some(arr, condition) {
          for (var i = 0; i < arr.length; ++i) {
            if (condition(arr[i], i, arr)) return true;
          }
          return false;
        }
        exports.Some = Some;
        function Every(arr, condition) {
          for (var i = 0; i < arr.length; ++i) {
            if (!condition(arr[i], i, arr)) return false;
          }
          return true;
        }
        exports.Every = Every;
        function EveryProp(obj, condition) {
          for (var name in obj) {
            if (obj.hasOwnProperty(name) && !condition(obj[name], name, obj))
              return false;
          }
          return true;
        }
        exports.EveryProp = EveryProp;
        function Map(arr, action) {
          var result = new Array();
          ForEach(arr, function (item, idx, arr) {
            return result.push(action(item, idx, arr));
          });
          return result;
        }
        exports.Map = Map;
        function DeepFreeze(obj) {
          // Only once IE9 is the minimum - currently IE7 is supported
          /*
        if (obj instanceof Object && !Object.isFrozen(obj[key])) {
            ForEachProp(obj, (prop) => DeepFreeze(prop));

            Object.freeze(obj);
        }
        */
        }
        exports.DeepFreeze = DeepFreeze;
        function getElementsByHavingAttribute(
          parentElement,
          tagName,
          attributeName
        ) {
          var arEls = new Array();
          var els = parentElement.getElementsByTagName(tagName);
          ForEach(els, function (el) {
            if (el.getAttribute(attributeName)) {
              arEls.push(el);
            }
          });
          return arEls;
        }
        exports.getElementsByHavingAttribute = getElementsByHavingAttribute;
        function getElementsByHavingAttributePrefix(
          parentElement,
          attributePrefixes,
          tagNamesExceptions
        ) {
          if (tagNamesExceptions === void 0) {
            tagNamesExceptions = [];
          }
          if (typeof attributePrefixes === 'string') {
            attributePrefixes = [attributePrefixes];
          }
          var elements = parentElement.getElementsByTagName('*');
          var matchingElements = new Array();
          for (var i = 0; i <= elements.length - 1; i++) {
            var el = elements.item(i);
            if (
              window.gigya.utils.array.indexOf(
                tagNamesExceptions,
                el.tagName.toLowerCase()
              ) !== -1
            ) {
              continue;
            }
            for (
              var _i = 0, attributePrefixes_1 = attributePrefixes;
              _i < attributePrefixes_1.length;
              _i++
            ) {
              var attributePrefix = attributePrefixes_1[_i];
              if (
                isElementContainAttributePrefix(elements[i], attributePrefix)
              ) {
                matchingElements.push(elements[i]);
                continue;
              }
            }
          }
          return matchingElements;
        }
        exports.getElementsByHavingAttributePrefix =
          getElementsByHavingAttributePrefix;
        function isElementContainAttributePrefix(el, subString) {
          var elementAttributes = el.attributes;
          var containConditionalAttribute = false;
          if (elementAttributes) {
            for (var i = 0; i < elementAttributes.length; i++) {
              if (elementAttributes[i].nodeName.indexOf(subString) !== -1) {
                containConditionalAttribute = true;
                break;
              }
            }
          }
          return containConditionalAttribute;
        }
        exports.isElementContainAttributePrefix =
          isElementContainAttributePrefix;
        function getConditionalAttributeExpressions(element, isWidgetContext) {
          if (isWidgetContext === void 0) {
            isWidgetContext = false;
          }
          if (!element) {
            return [];
          }
          var conditionalExpressions = new Array();
          var conditionalDefaultValue;
          var lastAttributeValue;
          var isParamTag = false;
          var attributes = getAttributesAsArray(element);
          ForEach(attributes, function (at) {
            try {
              // Check for conditional attribute prefix which determines if this attribute be evaluated.
              var isConditionalAttribute =
                at.nodeName.indexOf(
                  ScreenConsts_1.Screen_CONSTS.conditionalAttributePrefix
                ) !== -1;
              var isExpressionAttribute =
                at.nodeName.indexOf(
                  ScreenConsts_1.Screen_CONSTS.expressionAttributePrefix
                ) !== -1;
              if (isConditionalAttribute || isExpressionAttribute) {
                var colonIndex = at.nodeName.indexOf(':');
                if (colonIndex !== -1) {
                  var targetAttribute = void 0;
                  if (isWidgetContext) {
                    conditionalDefaultValue =
                      window.gigya._.plugins.utils.DOM.getAttribute(
                        element,
                        'value'
                      );
                    targetAttribute =
                      window.gigya._.plugins.utils.DOM.getAttribute(
                        element,
                        'name'
                      );
                    isParamTag = element.tagName.toLowerCase() === 'param';
                  } else {
                    targetAttribute = at.nodeName.substring(
                      colonIndex + 1,
                      at.nodeName.length
                    );
                    lastAttributeValue =
                      window.gigya._.plugins.utils.DOM.getAttribute(
                        element,
                        targetAttribute
                      );
                    var defaultValueAttribute =
                      'gigya-default-' + targetAttribute;
                    if (
                      !window.gigya._.plugins.utils.DOM.getAttribute(
                        element,
                        defaultValueAttribute
                      )
                    ) {
                      window.gigya._.plugins.utils.DOM.setAttribute(
                        element,
                        defaultValueAttribute,
                        lastAttributeValue !== null
                          ? lastAttributeValue
                          : 'null'
                      );
                    }
                    var val = window.gigya._.plugins.utils.DOM.getAttribute(
                      element,
                      defaultValueAttribute
                    );
                    conditionalDefaultValue = val !== 'null' ? val : null;
                  }
                  // Conditionals are always ternary with special escaping and parsing done.
                  // In: expression ? value : otherValue
                  // Out: expression ? 'value' : 'otherValue'
                  //
                  // Expressions are parsed as-is and the returned value is set.
                  var conditionalExpression = !isExpressionAttribute
                    ? setupConditionalExpressionValue(
                        at.nodeValue,
                        conditionalDefaultValue
                      )
                    : at.nodeValue;
                  var conditional = {
                    attributeName: targetAttribute,
                    condition: conditionalExpression,
                    defaultValue: conditionalDefaultValue,
                    lastAttributeValue: lastAttributeValue,
                    isWidgetParamTag: isParamTag,
                  };
                  conditionalExpressions.push(conditional);
                }
              }
            } catch (e) {
              throw new Error('Conditional format error: ' + e);
            }
          });
          return conditionalExpressions;
        }
        exports.getConditionalAttributeExpressions =
          getConditionalAttributeExpressions;
        function setupConditionalExpressionValue(
          conditionalValue,
          defaultValue
        ) {
          var expressionWithFalseValue = setupConditionalFalseValue(
            conditionalValue,
            defaultValue
          );
          var expressionWithEscaping = escapeCharactersInConditionalValue(
            expressionWithFalseValue
          );
          var finalConditionalExpression = setUpLastFalseValue(
            expressionWithEscaping
          );
          if (!defaultValue) {
            // fix default value to be a falsy value instead of a string literal
            var defaultValueLocation = finalConditionalExpression.lastIndexOf(
              ":'" + defaultValue + "'"
            );
            if (defaultValueLocation > -1) {
              finalConditionalExpression =
                finalConditionalExpression.substring(0, defaultValueLocation) +
                ':null';
            }
          }
          return finalConditionalExpression;
        }
        exports.setupConditionalExpressionValue =
          setupConditionalExpressionValue;
        function setupConditionalFalseValue(conditionalValue, defaultValue) {
          // Make sure that the last 'false' value has a ':' sign and if it doesn't, add it and assign the default value, if there's one.
          var indexOfLastConditionResults = conditionalValue.lastIndexOf('?');
          var subStringOfLastConditionResults = conditionalValue.substr(
            indexOfLastConditionResults + 1,
            conditionalValue.length
          );
          var indexOfLastConditionResultsDivider =
            subStringOfLastConditionResults.indexOf(':');
          if (indexOfLastConditionResultsDivider === -1) {
            conditionalValue += ':';
            if (defaultValue) {
              conditionalValue += defaultValue;
            }
          } else {
            // check if there's a 'false' value or just an empty string
            var emptyFalseValue = subStringOfLastConditionResults.substr(
              indexOfLastConditionResultsDivider + 1,
              subStringOfLastConditionResults.length
            );
            if (emptyFalseValue === '') {
              conditionalValue =
                conditionalValue.substr(0, conditionalValue.length) +
                defaultValue;
            }
          }
          return conditionalValue;
        }
        function escapeCharactersInConditionalValue(conditionalValue) {
          // Escape any "'" signs.
          conditionalValue = conditionalValue.replace(/\'/g, "'");
          // Enclose all the 'true' values in ''
          conditionalValue = conditionalValue.replace(/\?/g, "?'");
          conditionalValue = conditionalValue.replace(/:/g, "':");
          return conditionalValue;
        }
        function setUpLastFalseValue(conditionalValue) {
          // Set an aphostrophe in the last 'false' if there isn't one
          // First: trim the last 'false' value for the aphostrophe insertion
          var indexOfLastConditionResults = conditionalValue.lastIndexOf('?');
          var subStringOfLastConditionResults = conditionalValue.substr(
            indexOfLastConditionResults + 1,
            conditionalValue.length
          );
          var falseResultStartIndex =
            subStringOfLastConditionResults.indexOf(':') + 1;
          var lastFalseResultValue = subStringOfLastConditionResults.substr(
            falseResultStartIndex,
            subStringOfLastConditionResults.length
          );
          lastFalseResultValue =
            window.gigya.utils.stringUtils.trim(lastFalseResultValue);
          if (lastFalseResultValue[0] != "'") {
            lastFalseResultValue = "'" + lastFalseResultValue;
          }
          if (lastFalseResultValue[lastFalseResultValue.length] != "'") {
            lastFalseResultValue += "'";
          }
          var lastTrueResultValue = subStringOfLastConditionResults.substr(
            0,
            falseResultStartIndex - 1
          );
          conditionalValue =
            conditionalValue.substr(0, indexOfLastConditionResults + 1) +
            lastTrueResultValue +
            ':' +
            lastFalseResultValue;
          return conditionalValue;
        }
        function isKeyCodeDisplayable(keycode) {
          return (
            (keycode > 47 && keycode < 58) || // number keys
            keycode == 32 ||
            keycode == 13 || // spacebar & return key(s)
            (keycode > 64 && keycode < 91) || // letter keys
            (keycode > 95 && keycode < 112) || // numpad keys
            (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
            (keycode > 218 && keycode < 223)
          ); // [\]' (in order)
        }
        exports.isKeyCodeDisplayable = isKeyCodeDisplayable;
        exports.UnitMeasurementType = {
          pixel: 'px',
          percentage: '%',
          auto: '',
        };
        function getUnitMeasurementType(value) {
          if (value === void 0) {
            value = '';
          }
          var unitType;
          if (value === null || value == 'auto') {
            unitType = exports.UnitMeasurementType.auto;
          } else {
            unitType =
              value.indexOf('%') != -1
                ? exports.UnitMeasurementType.percentage
                : exports.UnitMeasurementType.pixel;
          }
          return unitType;
        }
        exports.getUnitMeasurementType = getUnitMeasurementType;
        function getAttributesAsArray(el) {
          var attributes = [];
          var elementAttributes = el.attributes;
          // A workaround for IE8
          for (var i = 0; i < elementAttributes.length; i++) {
            attributes.push(elementAttributes[i]);
          }
          return attributes;
        }
        exports.getAttributesAsArray = getAttributesAsArray;
        function endsWith(s, suffix) {
          return s.indexOf(suffix, s.length - suffix.length) !== -1;
        }
        exports.endsWith = endsWith;
        function hasIndex(key) {
          return /\[[0-9]]|\.[0-9]/.test(key);
        }
        exports.hasIndex = hasIndex;
        function removeSerializedKeyLastEnumerator(key) {
          return key
            .replace(/[0-9]\.(?=[^.]*$)/, '')
            .replace(/\[[0-9]](?=[^\[]*$)/, '');
        }
        exports.removeSerializedKeyLastEnumerator =
          removeSerializedKeyLastEnumerator;
        function removeSerializedKeyEdgeProperty(key) {
          return key.substr(0, key.lastIndexOf('.'));
        }
        exports.removeSerializedKeyEdgeProperty =
          removeSerializedKeyEdgeProperty;
        function IETemplateElementPolyfill(doc) {
          if (doc === void 0) {
            doc = document;
          }
          var support = 'content' in document.createElement('template');
          // Set the content property if missing
          if (!support) {
            var /**
               * Prefer an array to a NodeList
               * Otherwise, updating the content property of a node
               * will update the NodeList and we'll loose the nested <template>
               */ templates = Array.prototype.slice.call(
                document.getElementsByTagName('template')
              ),
              template,
              content,
              fragment,
              node,
              i = 0,
              j;
            // For each <template> element get its content and wrap it in a document fragment
            while ((template = templates[i++]) && !template.content) {
              content = template.children;
              fragment = document.createDocumentFragment();
              while (content[0]) {
                fragment.appendChild(content[0]);
              }
              template.content = fragment;
            }
          }
        }
        exports.IETemplateElementPolyfill = IETemplateElementPolyfill;
        function replaceAttribute(htmlElement, fromAttribute, toAttribute) {
          try {
            var templateEls =
              htmlElement === null || htmlElement === void 0
                ? void 0
                : htmlElement.querySelectorAll('[' + fromAttribute + ']');
            ForEach(templateEls, function (el) {
              el.setAttribute(toAttribute, el.getAttribute(fromAttribute));
              el.removeAttribute(fromAttribute);
            });
          } catch (ex) {}
        }
        exports.replaceAttribute = replaceAttribute;
        function isDOMXSS(text) {
          var dummyDomElement = document.createElement('span');
          dummyDomElement.innerText = text;
          return dummyDomElement.innerHTML !== text;
        }
        exports.isDOMXSS = isDOMXSS;

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

    /***/ './src/core/ApiService/app/ApiService.ts':
      /*!***********************************************!*\
  !*** ./src/core/ApiService/app/ApiService.ts ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var GroupApiDomainService_1 = __webpack_require__(
          /*! src/core/ApiService/app/GroupApiDomainService */ './src/core/ApiService/app/GroupApiDomainService.ts'
        );
        var RequestProvider_1 = __webpack_require__(
          /*! ./RequestProvider */ './src/core/ApiService/app/RequestProvider.ts'
        );
        var GmidProvider_1 = __webpack_require__(
          /*! ./GmidProvider */ './src/core/ApiService/app/GmidProvider.ts'
        );
        var HasGmid = GmidProvider_1.GmidProvider.HasGmid;
        var FlagService_1 = __webpack_require__(
          /*! ../../Gigya.Js/app/Services/FlagService */ './src/core/Gigya.Js/app/Services/FlagService.ts'
        );
        var GMID_TICKET_EXPIRATION_INTERVAL = 1;
        exports.TokenKeys = {
          GMID: 'gig_gmid',
          UCID: 'gig_ucid',
          GMID_TICKET: 'gmidTicket',
          GMID_TICKET_EXPIRATION_TIME: 'gmidTicketExpiration',
        };
        var ApiService = /** @class */ (function () {
          function ApiService(
            _apiKey,
            _hasGmid,
            _domainResolver,
            _groupApiDomainService,
            _requestProvider,
            _storage
          ) {
            if (_groupApiDomainService === void 0) {
              _groupApiDomainService =
                new GroupApiDomainService_1.GroupApiDomainService();
            }
            if (_requestProvider === void 0) {
              _requestProvider = new RequestProvider_1.RequestProvider();
            }
            this._apiKey = _apiKey;
            this._hasGmid = _hasGmid;
            this._domainResolver = _domainResolver;
            this._groupApiDomainService = _groupApiDomainService;
            this._requestProvider = _requestProvider;
            this.didFallback = false;
            if (_storage) {
              this._storage = _storage;
            }
          }
          ApiService.prototype.getApiDomain = function (methodName) {
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              return tslib_1.__generator(this, function (_a) {
                return [
                  2 /*return*/,
                  this._domainResolver.getApiDomain(methodName),
                ];
              });
            });
          };
          ApiService.prototype.bootstrap = function (forceBootstrap) {
            if (forceBootstrap === void 0) {
              forceBootstrap = false;
            }
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var log, _a, webSDKBootstrapResponse, ex_1, ticketInfo, hasGmid;
              return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                  case 0:
                    log = window.gigya.logger.group('bootstrap api service');
                    if (!!this._storage) return [3 /*break*/, 2];
                    window.gigya.logger.debug('init storage');
                    _a = this;
                    return [
                      4 /*yield*/,
                      new gigya.Promise(function (resolve) {
                        window.gigya.utils.localStorage.waitForService(
                          function (adapter) {
                            resolve(adapter);
                          }
                        );
                      }),
                    ];
                  case 1:
                    _a._storage = _b.sent();
                    _b.label = 2;
                  case 2:
                    if (!(this._hasGmid && !forceBootstrap))
                      return [3 /*break*/, 3];
                    window.gigya.logger.info('already has gmid');
                    return [3 /*break*/, 10];
                  case 3:
                    window.gigya.logger.info(
                      !this._hasGmid ? 'no gmid set' : 'forcing bootstrap'
                    );
                    if (!(!this._useStorage && this.canSaveGmidAsCookie()))
                      return [3 /*break*/, 8];
                    window.gigya.logger.info('save gmid as cookie');
                    _b.label = 4;
                  case 4:
                    _b.trys.push([4, 6, , 7]);
                    return [
                      4 /*yield*/,
                      this.sendRequest({
                        methodName: 'accounts.webSdkBootstrap',
                        params: { apiKey: this._apiKey },
                      }),
                    ];
                  case 5:
                    webSDKBootstrapResponse = _b.sent();
                    if (webSDKBootstrapResponse.errorCode !== 0) {
                      throw (
                        'error bootstrapping sdk\n' +
                        JSON.stringify(webSDKBootstrapResponse, null, 4)
                      );
                    }
                    return [3 /*break*/, 7];
                  case 6:
                    ex_1 = _b.sent();
                    throw new Error('accounts.webSdkBootstrap failed: ' + ex_1);
                  case 7:
                    return [3 /*break*/, 10];
                  case 8:
                    window.gigya.logger.info('save gmid in storage');
                    return [4 /*yield*/, this.setupWithStorage(forceBootstrap)];
                  case 9:
                    _b.sent();
                    this._useStorage = true;
                    _b.label = 10;
                  case 10:
                    if (!this._useStorage) return [3 /*break*/, 12];
                    return [4 /*yield*/, this.getGmidTicket()];
                  case 11:
                    ticketInfo = _b.sent();
                    return [3 /*break*/, 13];
                  case 12:
                    hasGmid =
                      window.gigya.utils.cookie.get('hasGmid') ||
                      (webSDKBootstrapResponse === null ||
                      webSDKBootstrapResponse === void 0
                        ? void 0
                        : webSDKBootstrapResponse.hasGmid);
                    this.cleanStorage();
                    _b.label = 13;
                  case 13:
                    log.end();
                    return [
                      2 /*return*/,
                      {
                        ticketInfo: ticketInfo,
                        hasGmid: hasGmid,
                      },
                    ];
                }
              });
            });
          };
          ApiService.prototype.setGroupApiDomain = function (apiDomain) {
            var baseDomain = window.gigya._.getBaseDomain(
              window.gigya.partnerSettings.baseDomains,
              this._domainResolver.originDomain,
              ['gigya.com', 'cn1.sapcdm.cn', window.gigya.defaultApiDomain]
            );
            if (baseDomain !== window.gigya.defaultApiDomain) {
              this._groupApiDomainService.set(apiDomain);
            }
          };
          ApiService.prototype.canSaveGmidAsCookie = function () {
            // api domain will be first party when site has a custom api domain prefix.
            if (FlagService_1.FlagService.alwaysCheckCookieSave) {
              return (
                this._domainResolver.isApiDomainFirstParty ||
                this._domainResolver.canSaveGmidAsCookie
              );
            }
            return (
              this._domainResolver.isApiDomainFirstParty ||
              window.gigya.utils.cookie.canSaveCookie()
            );
          };
          ApiService.prototype.sendRequest = function (data) {
            var _a, _b;
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var methodName, params, baseDomain, _c, res, err_1;
              return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                  case 0:
                    //TODO: handle timeout
                    if (!data) {
                      window.gigya.logger.error(
                        'ApiService: request data must has methodName and params'
                      );
                      return [2 /*return*/];
                    }
                    methodName = data.methodName;
                    params = window.gigya.utils.object.clone(
                      data.params,
                      true,
                      true
                    );
                    params.pageURL = this._domainResolver.originDomain;
                    if (this._useStorage) {
                      params.gmid = this._storage.getItem(
                        exports.TokenKeys.GMID
                      );
                      params.ucid = this._storage.getItem(
                        exports.TokenKeys.UCID
                      );
                    }
                    _c = 'https://';
                    return [
                      4 /*yield*/,
                      this.getApiDomain(
                        (_b =
                          (_a = data.settings) === null || _a === void 0
                            ? void 0
                            : _a.namespace) !== null && _b !== void 0
                          ? _b
                          : data.methodName
                      ),
                    ];
                  case 1:
                    baseDomain = _c + _d.sent();
                    _d.label = 2;
                  case 2:
                    _d.trys.push([2, 4, , 5]);
                    return [
                      4 /*yield*/,
                      this._requestProvider.send(
                        baseDomain,
                        methodName,
                        params,
                        data.settings,
                        data.headers
                      ),
                    ];
                  case 3:
                    res = _d.sent();
                    return [3 /*break*/, 5];
                  case 4:
                    err_1 = _d.sent();
                    if (this.didFallback) {
                      res = err_1;
                    } else {
                      this.didFallback = true;
                      res = this.sendRequestFallback(
                        baseDomain,
                        methodName,
                        params,
                        data,
                        err_1
                      );
                    }
                    return [3 /*break*/, 5];
                  case 5:
                    return [2 /*return*/, res];
                }
              });
            });
          };
          ApiService.prototype.setupWithStorage = function (forceBootstrap) {
            var _a;
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var storageGmid,
                expirationTime,
                isGmidExistsInStorage,
                gmidVersion,
                tokens,
                ticketRes;
              return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                  case 0:
                    storageGmid = this._storage.getItem(exports.TokenKeys.GMID);
                    expirationTime = parseInt(
                      this._storage.getItem(
                        exports.TokenKeys.GMID_TICKET_EXPIRATION_TIME
                      )
                    );
                    isGmidExistsInStorage = Boolean(storageGmid);
                    gmidVersion =
                      (_a = window.gigya.utils.array.getArrayFromString(
                        storageGmid,
                        '.'
                      )) === null || _a === void 0
                        ? void 0
                        : _a[1];
                    if (
                      !(
                        (forceBootstrap && gmidVersion !== HasGmid.ver4) ||
                        !isGmidExistsInStorage
                      )
                    )
                      return [3 /*break*/, 2];
                    window.gigya.logger.info('getting gmid by endpoint');
                    return [4 /*yield*/, this.getIds()];
                  case 1:
                    tokens = _b.sent();
                    if (!tokens.gcid || !tokens.ucid) {
                      throw 'ApiService getIDs: the request to the endpoint failed';
                    } else {
                      window.gigya.logger.info('setting gmid in storage');
                      this._storage.setItem(
                        exports.TokenKeys.GMID,
                        tokens.gcid
                      );
                      this._storage.setItem(
                        exports.TokenKeys.UCID,
                        tokens.ucid
                      );
                      ticketRes = this.createTicketResponse(tokens.gmidTicket);
                      this.updateGmidTicket(ticketRes);
                    }
                    return [3 /*break*/, 5];
                  case 2:
                    if (
                      !!window.gigya.utils.validation.isLaterThanNow(
                        expirationTime
                      )
                    )
                      return [3 /*break*/, 4];
                    return [4 /*yield*/, this.refreshGmidTicketFromServer()];
                  case 3:
                    _b.sent();
                    return [3 /*break*/, 5];
                  case 4:
                    window.gigya.logger.info('already has gmid in storage');
                    _b.label = 5;
                  case 5:
                    return [2 /*return*/];
                }
              });
            });
          };
          // createNew - if no gmidTicket exists, then create a new one instead of returning undefined
          ApiService.prototype.getGmidTicket = function (createNew) {
            if (createNew === void 0) {
              createNew = false;
            }
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var gmidTicket, expirationTime;
              return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    gmidTicket = this._storage.getItem(
                      exports.TokenKeys.GMID_TICKET
                    );
                    if (!(!gmidTicket && !createNew)) return [3 /*break*/, 1];
                    return [2 /*return*/, undefined];
                  case 1:
                    expirationTime = parseInt(
                      this._storage.getItem(
                        exports.TokenKeys.GMID_TICKET_EXPIRATION_TIME
                      )
                    );
                    if (
                      !(
                        !createNew &&
                        gmidTicket &&
                        window.gigya.utils.validation.isLaterThanNow(
                          expirationTime
                        )
                      )
                    )
                      return [3 /*break*/, 2];
                    return [
                      2 /*return*/,
                      {
                        gmidTicket: gmidTicket,
                        expirationTime: parseInt(
                          this._storage.getItem(
                            exports.TokenKeys.GMID_TICKET_EXPIRATION_TIME
                          )
                        ),
                      },
                    ];
                  case 2:
                    this.deleteGmidTicket();
                    return [4 /*yield*/, this.refreshGmidTicketFromServer()];
                  case 3:
                    return [2 /*return*/, _a.sent()];
                }
              });
            });
          };
          // this should be removed in the feature, it's only use in case we need to send remove
          // and the top domain is not trusted
          ApiService.prototype.sendReport = function (message, details) {
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var params, request;
              return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    if (Math.floor(Math.random() * 100) <= 5)
                      return [2 /*return*/];
                    params = {
                      message: message,
                      apiKey: window.gigya.apiKey,
                      page: this._domainResolver.originDomain,
                      buildVersion: window.gigya.build.version,
                      format: 'json',
                      sdk: 'web',
                    };
                    if (details) {
                      params['details'] = JSON.stringify(details);
                    }
                    request = {
                      methodName: 'sdk.errorReport',
                      params: params,
                    };
                    return [4 /*yield*/, this.sendRequest(request)];
                  case 1:
                    _a.sent();
                    return [2 /*return*/];
                }
              });
            });
          };
          ApiService.prototype.refreshGmidTicketFromServer = function () {
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var res;
              return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    window.gigya.logger.info('refreshing gmid ticket');
                    return [
                      4 /*yield*/,
                      this.createGmidTicket(
                        this._storage.getItem(exports.TokenKeys.GMID)
                      ),
                    ];
                  case 1:
                    res = _a.sent();
                    if (res && res.gmidTicket) {
                      this.updateGmidTicket(res);
                    }
                    return [2 /*return*/, res];
                }
              });
            });
          };
          ApiService.prototype.updateGmidTicket = function (ticket) {
            window.gigya.logger.info('updating gmid ticket', ticket);
            this._storage.setItem(
              exports.TokenKeys.GMID_TICKET,
              ticket.gmidTicket
            );
            this._storage.setItem(
              exports.TokenKeys.GMID_TICKET_EXPIRATION_TIME,
              String(ticket.expirationTime)
            );
          };
          ApiService.prototype.deleteGmidTicket = function () {
            this._storage.removeItem(exports.TokenKeys.GMID_TICKET);
            this._storage.removeItem(
              exports.TokenKeys.GMID_TICKET_EXPIRATION_TIME
            );
          };
          ApiService.prototype.cleanStorage = function () {
            this._storage.removeItem(exports.TokenKeys.GMID);
            this._storage.removeItem(exports.TokenKeys.UCID);
            this.deleteGmidTicket();
          };
          ApiService.prototype.getIds = function () {
            return this.sendRequest({
              methodName: 'socialize.getIDs',
              params: {
                APIKey: this._apiKey,
                includeTicket: true,
              },
            });
          };
          ApiService.prototype.createGmidTicket = function (gmid, expires) {
            var _this = this;
            if (expires === void 0) {
              expires =
                window.gigya.partnerSettings.gmidTicketExpiration || 3600;
            }
            var params = {
              apiKey: this._apiKey,
              expires: expires,
            };
            if (gmid) params.gmid = gmid;
            return this.sendRequest({
              methodName: 'socialize.getGmidTicket',
              params: params,
            }).then(function (res) {
              if (res && res.gmidTicket) {
                return _this.createTicketResponse(res.gmidTicket);
              } else {
                window.gigya.logger.error('Failed to establish gmidTicket', {
                  response: JSON.stringify(res),
                  method: 'socialize.getGmidTicket',
                });
                _this.deleteGmidTicket();
              }
            });
          };
          ApiService.prototype.createTicketResponse = function (gmidTicket) {
            var currentGmidTicketDate = new Date();
            currentGmidTicketDate.setHours(
              currentGmidTicketDate.getHours() + GMID_TICKET_EXPIRATION_INTERVAL
            );
            var expirationTime = currentGmidTicketDate.getTime();
            return {
              gmidTicket: gmidTicket,
              expirationTime: expirationTime,
            };
          };
          ApiService.prototype.sendRequestFallback = function (
            baseDomain,
            methodName,
            params,
            data,
            err
          ) {
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var _i, _a, flag;
              return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                  case 0:
                    window.gigya.logger.report(
                      'ApiService: Fallback with api flags turned off',
                      {
                        baseDomain: baseDomain,
                        methodName: methodName,
                        params: params,
                        data: data,
                        err: err,
                      }
                    );
                    for (
                      _i = 0, _a = FlagService_1.FlagService.apiFlags;
                      _i < _a.length;
                      _i++
                    ) {
                      flag = _a[_i];
                      window.gigya._.config.flags[flag] = false;
                    }
                    return [
                      4 /*yield*/,
                      this._requestProvider.send(
                        baseDomain,
                        methodName,
                        params,
                        data.settings,
                        data.headers
                      ),
                    ];
                  case 1:
                    return [2 /*return*/, _b.sent()];
                }
              });
            });
          };
          return ApiService;
        })();
        exports.ApiService = ApiService;

        /***/
      },

    /***/ './src/core/ApiService/app/GmidProvider.ts':
      /*!*************************************************!*\
  !*** ./src/core/ApiService/app/GmidProvider.ts ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var FlagService_1 = __webpack_require__(
          /*! ../../Gigya.Js/app/Services/FlagService */ './src/core/Gigya.Js/app/Services/FlagService.ts'
        );
        var SiteData_1 = __webpack_require__(
          /*! ../../Gigya.Js/app/Services/SiteData */ './src/core/Gigya.Js/app/Services/SiteData.ts'
        );
        var GmidProvider;
        (function (GmidProvider) {
          /**
           * Gmid version.
           */
          var HasGmid;
          (function (HasGmid) {
            HasGmid['ver2'] = 'ver2';
            HasGmid['ver3'] = 'ver3';
            HasGmid['ver4'] = 'ver4';
          })((HasGmid = GmidProvider.HasGmid || (GmidProvider.HasGmid = {})));
          /**
           * Search actual version in cookies or from backend configuration
           * (it is set up for client on the backend side as gigya.gmidVersion).
           */
          var VersionSearchStrategy;
          (function (VersionSearchStrategy) {
            VersionSearchStrategy['cookieFirst'] = 'cookieFirst';
            VersionSearchStrategy['configFirst'] = 'configFirst';
          })(
            (VersionSearchStrategy =
              GmidProvider.VersionSearchStrategy ||
              (GmidProvider.VersionSearchStrategy = {}))
          );
          /**
           * Return HasGmid context with all useful info.
           * @param gigyaObj Gigya global object.
           */
          function getHasGmidParam(gigyaObj) {
            var hasGmid =
              gigyaObj.utils.getParamValue(document.cookie, 'hasGmid', ';') ||
              getGmidBootstrapParam(gigyaObj);
            return {
              isV3: hasGmid === HasGmid.ver3,
              isV4: hasGmid === HasGmid.ver4,
              hasGmid: hasGmid,
            };
          }
          GmidProvider.getHasGmidParam = getHasGmidParam;
          /**
           * Return indication whether bootstrap need or not.
           * @param gigyaObj Gigya global object.
           * @param strategy Search actual version in cookies or from backend configuration.
           */
          function getGmidBootstrapIndicationToken(gigyaObj, strategy) {
            if (strategy === void 0) {
              strategy = VersionSearchStrategy.cookieFirst;
            }
            var version = getActualGmidVersion(gigyaObj, strategy);
            return convertHasGmidToBootstrapIndication(gigyaObj, version);
          }
          GmidProvider.getGmidBootstrapIndicationToken =
            getGmidBootstrapIndicationToken;
          /**
           * Return actual version of the gmid version cookie (ver3, ver4, etc).
           * @param gigyaObj Gigya global object.
           * @param strategy Search actual version in cookies or from backend configuration.
           */
          function getActualGmidVersion(gigyaObj, strategy) {
            if (strategy === void 0) {
              strategy = VersionSearchStrategy.cookieFirst;
            }
            var hasGmidContext = getHasGmidParam(gigyaObj);
            return strategy == VersionSearchStrategy.cookieFirst
              ? hasGmidContext.hasGmid || gigyaObj.gmidVersion || 'ver3'
              : gigyaObj.gmidVersion || hasGmidContext.hasGmid || 'ver3';
          }
          GmidProvider.getActualGmidVersion = getActualGmidVersion;
          /**
           * Return flag if the token is allowed to be regenerated.
           * (Allowed only in case when session is not active and gmid token is not latest.)
           * @param gigyaObj Gigya global object.
           * @param isSessionActive Is session active indicator.
           */
          function shouldRegenerateGmid(gigyaObj, isSessionActive) {
            var hasLatestVer4Gmid = hasLatestGmidVersion(gigyaObj);
            return (
              !isSessionActive && (shouldForceBootstrap() || !hasLatestVer4Gmid)
            );
          }
          GmidProvider.shouldRegenerateGmid = shouldRegenerateGmid;
          /**
           * Return flag whether hasGmid cookie has latest version.
           * @param gigyaObj Gigya global object.
           */
          function hasLatestGmidVersion(gigyaObj) {
            var hasGmidContext = getHasGmidParam(gigyaObj);
            return Boolean(hasGmidContext.hasGmid) && hasGmidContext.isV4;
          }
          GmidProvider.hasLatestGmidVersion = hasLatestGmidVersion;
          function convertHasGmidToBootstrapIndication(gigyaObj, gmidVersion) {
            return (
              (gigyaObj.partnerSettings.customAPIDomainPrefix || '_gigya') +
              ('_' + gmidVersion)
            );
          }
          GmidProvider.convertHasGmidToBootstrapIndication =
            convertHasGmidToBootstrapIndication;
          function getGmidBootstrapParam(gigyaObj) {
            var _a;
            var gmidBootstrapCookie = gigyaObj.utils.cookie.get(
              'gig_bootstrap_' + gigyaObj.apiKey
            );
            return (_a = gigyaObj.utils.array.getArrayFromString(
              gmidBootstrapCookie,
              '_'
            )) === null || _a === void 0
              ? void 0
              : _a.pop();
          }
          function shouldForceBootstrap() {
            return (
              FlagService_1.FlagService.forceWebSdkBootstrap &&
              !SiteData_1.siteData.didForcedBootstrap
            );
          }
          GmidProvider.shouldForceBootstrap = shouldForceBootstrap;
        })(
          (GmidProvider = exports.GmidProvider || (exports.GmidProvider = {}))
        );

        /***/
      },

    /***/ './src/core/ApiService/app/GroupApiDomainService.ts':
      /*!**********************************************************!*\
  !*** ./src/core/ApiService/app/GroupApiDomainService.ts ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var LocalInfo_1 = __webpack_require__(
          /*! ../../Gigya.Js/app/LocalInfo */ './src/core/Gigya.Js/app/LocalInfo.ts'
        );
        var GroupApiDomainKey = 'apiDomain';
        var GroupApiDomainService = /** @class */ (function () {
          function GroupApiDomainService(_ssoKey, _storage, _pageDomain) {
            if (_ssoKey === void 0) {
              _ssoKey = window.gigya.partnerSettings.ssoKey;
            }
            if (_storage === void 0) {
              _storage = window.gigya.utils.localStorage.initializeAdapter(
                window.gigya.utils.localStorage.CookieStorageAdapter
              );
            }
            if (_pageDomain === void 0) {
              _pageDomain = LocalInfo_1.localInfo.pageDomain;
            }
            this._ssoKey = _ssoKey;
            this._storage = _storage;
            this._pageDomain = _pageDomain;
            this._cookieName = GroupApiDomainKey + '_' + this._ssoKey;
          }
          GroupApiDomainService.prototype.get = function () {
            return this._ssoKey
              ? this._storage.getItem(this._cookieName)
              : undefined;
          };
          GroupApiDomainService.prototype.set = function (apiDomain) {
            if (this._ssoKey) {
              window.gigya.logger.info(
                'setting as group api domain for ' + this._ssoKey
              );
              this._storage.removeItem(this._cookieName);
              this._storage.setItem(
                this._cookieName,
                apiDomain,
                undefined,
                this._pageDomain
              );
            }
          };
          return GroupApiDomainService;
        })();
        exports.GroupApiDomainService = GroupApiDomainService;

        /***/
      },

    /***/ './src/core/ApiService/app/Request.ts':
      /*!********************************************!*\
  !*** ./src/core/ApiService/app/Request.ts ***!
  \********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var GSErrors_1 = __webpack_require__(
          /*! ../../Gigya.Js/app/GSErrors */ './src/core/Gigya.Js/app/GSErrors.ts'
        );
        var interfaces_1 = __webpack_require__(
          /*! ./interfaces */ './src/core/ApiService/app/interfaces.ts'
        );
        var LocalInfo_1 = __webpack_require__(
          /*! ../../Gigya.Js/app/LocalInfo */ './src/core/Gigya.Js/app/LocalInfo.ts'
        );
        var constants_1 = __webpack_require__(
          /*! ../../../accounts/constants */ './src/accounts/constants.ts'
        );
        var Request = /** @class */ (function () {
          function Request(baseDomain, method, params, settings) {
            var _this = this;
            if (settings === void 0) {
              settings = {};
            }
            this.baseDomain = baseDomain;
            this.method = method;
            this.params = params;
            this.settings = settings;
            this.retry = 0;
            this.getUrl = function () {
              return window.gigya._.Uri.parse(
                _this.baseDomain + '/' + _this.method
              );
            };
          }
          Request.prototype.send = function (ignoreCacheTimeout) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    if (!LocalInfo_1.localInfo.isOnLine()) {
                      return [2 /*return*/, this.networkErrorResponse()];
                    }
                    if (this.isRequestPathManipulated()) {
                      window.gigya.logger.warn(
                        'Aborting Request for ' +
                          this.method +
                          '. Path manipulation detected.'
                      );
                      return [2 /*return*/];
                    }
                    try {
                      this.params = window.gigya.utils.object.decodeObjectKeys(
                        this.params
                      );
                    } catch (ex) {
                      window.gigya.logger.error(
                        'Request API Error - Failed to decode object keys',
                        {
                          exception: ex,
                          requestParams: JSON.stringify(this.params),
                        }
                      );
                      return [2 /*return*/];
                    }
                    this.addDefaultParams();
                    return [
                      4 /*yield*/,
                      this.performSend(
                        this.getRequestType(),
                        ignoreCacheTimeout
                      ),
                    ];
                  case 1:
                    return [2 /*return*/, _a.sent()];
                }
              });
            });
          };
          Request.prototype.handleResponse = function (response) {
            var _this = this;
            if (this.settings.cacheTimeout) {
              window.gigya.utils.sessionCache.set(
                this.getCacheKey(),
                response['errorCode'] == GSErrors_1.GSErrors.OK
                  ? response
                  : null
              );
            }
            if (this.retryTimerID != null) {
              window.clearTimeout(this.retryTimerID);
            }
            if (response['errorCode'] == GSErrors_1.GSErrors.Data_Pending) {
              var t = this.getDataPendingTimeout(this.retry++);
              if (t > 0) {
                // retry
                window.setTimeout(function () {
                  _this.send();
                }, t);
                return;
              }
            } else {
              this.dispose();
              return response;
            }
          };
          Request.prototype.getCacheKey = function () {
            return (
              this.method +
              '_' +
              window.gigya.utils.keyValue.serialize(this.params)
            );
          };
          Request.prototype.getFullUrl = function () {
            var url = this.getUrl();
            return url.addToSearch(this.getFlattenParams()).href;
          };
          Request.prototype.addDefaultParams = function () {
            var _a, _b;
            this.params['sdk'] =
              'js_' +
              (((_a = window.gigya.build) === null || _a === void 0
                ? void 0
                : _a.version) || '');
            this.params['sdkBuild'] =
              ((_b = window.gigya.build) === null || _b === void 0
                ? void 0
                : _b.number) || 0;
          };
          Request.prototype.isRequestPathManipulated = function () {
            return (
              this.getUrl().href.toLowerCase() !==
                (this.baseDomain + '/' + this.method).toLowerCase() ||
              this.getUrl().search.length > 0
            );
          };
          Request.prototype.getDataPendingTimeout = function (retry) {
            if (retry <= 4) return 500;
            if (retry <= 4 + 4) return 1000;
            if (retry <= 4 + 4 + 13) return 2000;
            if (retry <= 4 + 4 + 13 + 18) return 5000;
            return -1;
          };
          Request.prototype.getRequestType = function () {
            if (
              this.isForcePost ||
              this.haveSensitiveParams() ||
              this.requestOversize()
            ) {
              return interfaces_1.RequestType.POST;
            }
            return interfaces_1.RequestType.GET;
          };
          Object.defineProperty(Request.prototype, 'isForcePost', {
            get: function () {
              return this.settings.forcePost;
            },
            enumerable: true,
            configurable: true,
          });
          Request.prototype.requestOversize = function () {
            var reqUrlLength = this.getRequestUrlLength();
            var _a = this.getUrlLengthFields(),
              extraLength = _a.extraLength,
              maxLength = _a.maxLength;
            return reqUrlLength + extraLength > maxLength;
          };
          Request.prototype.getRequestUrlLength = function () {
            var url = this.getUrl();
            return (
              url.href +
              window.gigya.utils.keyValue.serialize(this.getFlattenParams())
            ).length;
          };
          Request.prototype.getUrlLengthFields = function () {
            var extraLength = 0; //8000;
            var maxLength = 4 * 1024;
            if (
              window.gigya.localInfo.isIE ||
              window.gigya.localInfo.isEdgeLegacy
            ) {
              extraLength = 2 * 1024;
            }
            return { extraLength: extraLength, maxLength: maxLength };
          };
          Request.prototype.getFlattenParams = function () {
            return window.gigya.utils.keyValue.deserialize(
              window.gigya.utils.keyValue.serialize(this.params)
            );
          };
          Request.prototype.haveSensitiveParams = function () {
            var _a;
            for (
              var _i = 0,
                _b =
                  constants_1.sensitiveParamsOverride === null ||
                  constants_1.sensitiveParamsOverride === void 0
                    ? void 0
                    : constants_1.sensitiveParamsOverride.split('|');
              _i < _b.length;
              _i++
            ) {
              var param = _b[_i];
              if (
                (_a = this.params) === null || _a === void 0
                  ? void 0
                  : _a.hasOwnProperty(param)
              ) {
                return true;
              }
            }
          };
          return Request;
        })();
        exports.Request = Request;

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

    /***/ './src/core/ApiService/app/XhrRequest.ts':
      /*!***********************************************!*\
  !*** ./src/core/ApiService/app/XhrRequest.ts ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var Request_1 = __webpack_require__(
          /*! ./Request */ './src/core/ApiService/app/Request.ts'
        );
        var GSErrors_1 = __webpack_require__(
          /*! ../../Gigya.Js/app/GSErrors */ './src/core/Gigya.Js/app/GSErrors.ts'
        );
        var interfaces_1 = __webpack_require__(
          /*! ./interfaces */ './src/core/ApiService/app/interfaces.ts'
        );
        var FlagService_1 = __webpack_require__(
          /*! ../../Gigya.Js/app/Services/FlagService */ './src/core/Gigya.Js/app/Services/FlagService.ts'
        );
        var XhrRequest = /** @class */ (function (_super) {
          tslib_1.__extends(XhrRequest, _super);
          function XhrRequest(
            baseDomain,
            method,
            params,
            settings,
            requestHeaders
          ) {
            if (settings === void 0) {
              settings = {};
            }
            if (requestHeaders === void 0) {
              requestHeaders = {};
            }
            var _this =
              _super.call(this, baseDomain, method, params, settings) || this;
            _this.headers = {};
            _this.xhttp = new XMLHttpRequest();
            _this.setRequestHeaders(requestHeaders);
            return _this;
          }
          XhrRequest.prototype.performSend = function (
            requestType,
            ignoreCacheTimeout
          ) {
            var _this = this;
            return new gigya.Promise(function (resolve, reject) {
              var requestPostParams;
              var reqUrl = _this.getFullUrl();
              // Set request on load
              _this.xhttp.onload = function () {
                return _this.onRequestLoad(resolve, reject);
              };
              // Set request on error
              _this.xhttp.onerror = function () {
                return reject(
                  _this.createErrorFromResponse(
                    'XHR_FAILURE - http request onerror event'
                  )
                );
              };
              // Allow XMLHttp request to attach cookies
              _this.xhttp.withCredentials = true;
              if (requestType === interfaces_1.RequestType.POST) {
                reqUrl = _this.getUrl().href;
                // Option request go out without apiKey and fails
                // we add it in case headers has change
                if (_this.hasHeaders()) {
                  reqUrl += '?APIKey=' + _this.params['APIKey'];
                }
                requestPostParams = window.gigya.utils.keyValue.serialize(
                  _this.params
                );
                _this.headers['Content-Type'] =
                  'application/x-www-form-urlencoded';
              }
              _this.xhttp.open(requestType, reqUrl, true);
              // Add required headers to the request
              Object.keys(_this.headers).forEach(function (header) {
                _this.xhttp.setRequestHeader(header, _this.headers[header]);
              });
              _this.xhttp.send(requestPostParams);
            });
          };
          XhrRequest.prototype.hasHeaders = function () {
            return !!Object.keys(this.headers).length;
          };
          XhrRequest.prototype.onRequestLoad = function (resolve, reject) {
            var jsonResponse;
            try {
              jsonResponse = JSON.parse(this.xhttp.responseText);
            } catch (e) {
              window.gigya.logger.report(
                'XHR_FAILURE - failed to parse the response object',
                { responseText: this.xhttp.responseText }
              );
            }
            if (
              this.xhttp.readyState !== 4 ||
              !(jsonResponse === null || jsonResponse === void 0
                ? void 0
                : jsonResponse.statusCode)
            ) {
              reject(
                this.createErrorFromResponse(
                  'XHR_FAILURE - http request failed'
                )
              );
              return;
            }
            resolve(this.handleResponse(jsonResponse));
          };
          XhrRequest.prototype.createErrorFromResponse = function (message) {
            return {
              errorMessage: message,
              status: this.xhttp.status,
              readyState: this.xhttp.readyState,
              responseText: this.xhttp.responseText,
            };
          };
          XhrRequest.prototype.addDefaultParams = function () {
            _super.prototype.addDefaultParams.call(this);
            this.params['format'] = 'json';
            if (
              FlagService_1.FlagService.useHttpStatusCode &&
              this.settings.useHttpStatusCodes
            ) {
              this.params['httpStatusCodes'] = true;
            }
          };
          XhrRequest.prototype.networkErrorResponse = function () {
            return this.handleResponse({
              errorCode: GSErrors_1.GSErrors.NETWORK_ERROR,
              errorMessage: 'Network_error',
            });
          };
          XhrRequest.prototype.dispose = function () {};
          XhrRequest.prototype.setRequestHeaders = function (requestHeaders) {
            var _this = this;
            var supportedHeaders = ['Authorization'];
            Object.keys(requestHeaders)
              .filter(function (header) {
                return supportedHeaders.indexOf(header) !== -1;
              })
              .forEach(function (header) {
                var headerValue = requestHeaders[header];
                if (Boolean(headerValue) && typeof headerValue === 'string') {
                  _this.headers[header] = headerValue;
                }
              });
          };
          return XhrRequest;
        })(Request_1.Request);
        exports.XhrRequest = XhrRequest;

        /***/
      },

    /***/ './src/core/ApiService/app/interfaces.ts':
      /*!***********************************************!*\
  !*** ./src/core/ApiService/app/interfaces.ts ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var RequestType;
        (function (RequestType) {
          RequestType['GET'] = 'GET';
          RequestType['POST'] = 'POST';
        })((RequestType = exports.RequestType || (exports.RequestType = {})));

        /***/
      },

    /***/ './src/core/Gigya.Js.Adapters.Web/app/ApiRequest.ts':
      /*!**********************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Web/app/ApiRequest.ts ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var BaseRequest_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Adapters.Web/app/BaseRequest */ './src/core/Gigya.Js.Adapters.Web/app/BaseRequest.ts'
        );
        var ApiRequest = /** @class */ (function (_super) {
          tslib_1.__extends(ApiRequest, _super);
          function ApiRequest(methodName, params, callback, settings) {
            if (settings === void 0) {
              settings = {};
            }
            var _this =
              _super.call(
                this,
                window.gigya.defaultApiDomain,
                methodName,
                params,
                settings
              ) || this;
            _this.methodName = methodName;
            _this.params = params;
            _this.callback = callback;
            _this.settings = settings;
            return _this;
          }
          ApiRequest.prototype.sendAction = function (ignoreCacheTimeout) {
            window.gigya.utils.object.add(this.params, this.getAuthParams());
            window.gigya._.apiAdapters.web.apiService
              .sendRequest(this.json())
              .then(this.callback)
              .catch(function (err) {
                return console.error(err);
              });
          };
          ApiRequest.prototype.json = function () {
            return {
              methodName: this.methodName,
              params: this.params,
              settings: this.settings,
              headers: this.getHeaders(),
            };
          };
          return ApiRequest;
        })(BaseRequest_1.BaseRequest);
        exports.ApiRequest = ApiRequest;

        /***/
      },

    /***/ './src/core/Gigya.Js.Adapters.Web/app/BaseRequest.ts':
      /*!***********************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Web/app/BaseRequest.ts ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var TokenStore_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Adapters.Web/app/TokenStore */ './src/core/Gigya.Js.Adapters.Web/app/TokenStore.ts'
        );
        var REQ_MAX_RETRIES = 5;
        var BaseRequest = /** @class */ (function () {
          function BaseRequest(
            baseUrl,
            methodName,
            params,
            settings,
            _maxTries
          ) {
            if (settings === void 0) {
              settings = {};
            }
            if (_maxTries === void 0) {
              _maxTries = REQ_MAX_RETRIES;
            }
            this.baseUrl = baseUrl;
            this.methodName = methodName;
            this.params = params;
            this.settings = settings;
            this._maxTries = _maxTries;
            this._tries = 0;
            this.params['sdk'] = 'js_' + window.gigya.build.version;
          }
          BaseRequest.prototype.getUrl = function () {
            return this.baseUrl + '/' + this.methodName;
          };
          BaseRequest.prototype.send = function (maxRetriesCallback) {
            this._tries++;
            if (this._tries <= this._maxTries) {
              this.sendAction();
            } else if (maxRetriesCallback) {
              maxRetriesCallback();
            }
          };
          BaseRequest.prototype.getAuthParams = function () {
            var authParams = {};
            if (this.params['oauth_token']) {
              this.params['authMode'] = 'token';
              // The regToken takes priority over the login token because of SSO.
              // An account may be logged in (login_token) but still be pending reg because of child site schema requirements.
            } else if (!this.params['noAuth'] && !this.params['regToken']) {
              var loginToken = TokenStore_1.get(this.params['APIKey']);
              if (loginToken) {
                this.sentLoginToken = loginToken;
                var loginTokenExp = TokenStore_1.getGltexpCookie(
                  this.params['APIKey']
                );
                if (loginTokenExp != null) {
                  authParams['loginTokenExp'] = loginTokenExp;
                }
                authParams['login_token'] = loginToken;
              }
              authParams['authMode'] = 'cookie';
            }
            delete this.params['noAuth'];
            if (window.gigya.localInfo.isAndroidBrowser) {
              delete this.params['login_token'];
              delete this.params['loginTokenExp'];
              delete this.params['authMode'];
            }
            return authParams;
          };
          BaseRequest.prototype.getHeaders = function () {
            if (this.settings.useBearerToken) {
              return {
                Authorization: TokenStore_1.getBearerToken(),
              };
            }
            return {};
          };
          return BaseRequest;
        })();
        exports.BaseRequest = BaseRequest;

        /***/
      },

    /***/ './src/core/Gigya.Js.Adapters.Web/app/ExternalMethods/accountResidency.ts':
      /*!********************************************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Web/app/ExternalMethods/accountResidency.ts ***!
  \********************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var allowedResidencies = ['us1', 'eu1', 'au1', 'ru1', 'cn1', 'il1'];
        function setAccountResidency(dataCenter) {
          if (
            dataCenter &&
            allowedResidencies.indexOf(dataCenter.toLowerCase()) == -1
          )
            return window.gigya.logger.warn('invalid residency', {
              dataCenter: dataCenter,
            });
          window.gigya.globalAccount.dataCenter = dataCenter;
        }
        exports.setAccountResidency = setAccountResidency;

        /***/
      },

    /***/ './src/core/Gigya.Js.Adapters.Web/app/ExternalMethods/centralizedSSO.ts':
      /*!******************************************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Web/app/ExternalMethods/centralizedSSO.ts ***!
  \******************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var TokenStore_1 = __webpack_require__(
          /*! ../TokenStore */ './src/core/Gigya.Js.Adapters.Web/app/TokenStore.ts'
        );
        var sessionHelpers_1 = __webpack_require__(
          /*! ./sessionHelpers */ './src/core/Gigya.Js.Adapters.Web/app/ExternalMethods/sessionHelpers.ts'
        );
        var HTTP_1 = __webpack_require__(
          /*! ../../../Gigya.Js/app/Utils/HTTP */ './src/core/Gigya.Js/app/Utils/HTTP.ts'
        );
        var queue_1 = __webpack_require__(
          /*! ../../../Gigya.Js/app/Utils/queue */ './src/core/Gigya.Js/app/Utils/queue.ts'
        );
        var constants_1 = __webpack_require__(
          /*! ../../../../accounts/constants */ './src/accounts/constants.ts'
        );
        var UrlParamsHelper_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/UrlParamsHelper */ './src/core/Gigya.Js/app/Utils/UrlParamsHelper.ts'
        );
        function ssoLogin(params) {
          if (params === void 0) {
            params = {};
          }
          if (!verifySiteConfiguration()) {
            return;
          }
          if (!window.gigya.utils.toggles.isOn('keepSessionOnSSOLogin')) {
            TokenStore_1.remove();
          }
          window.gigya.accounts.sso.login(params);
        }
        exports.ssoLogin = ssoLogin;
        function continueSso(params) {
          if (params === void 0) {
            params = {};
          }
          var _a, _b, _c, _d, _e;
          return tslib_1.__awaiter(this, void 0, void 0, function () {
            var log,
              endFlow,
              ssoToken,
              scope,
              APIKey,
              login_token,
              _f,
              serverParams,
              serverParams;
            return tslib_1.__generator(this, function (_g) {
              switch (_g.label) {
                case 0:
                  queue_1.hold('ssoContinue', 'API');
                  log = window.gigya.logger.group('sso.continue');
                  endFlow = function (warningMessage) {
                    warningMessage && window.gigya.logger.warn(warningMessage);
                    queue_1.release('ssoContinue', 'API');
                    return log.end();
                  };
                  if (!verifySiteConfiguration()) {
                    return [2 /*return*/, endFlow()];
                  }
                  ssoToken = window.gigya.getUrlParam('ssoToken');
                  scope = window.gigya.getUrlParam('scope');
                  if (!ssoToken) {
                    return [
                      2 /*return*/,
                      endFlow('ssoToken must be present in the url'),
                    ];
                  }
                  APIKey =
                    ((_b =
                      (_a = window.gigya.thisScript) === null || _a === void 0
                        ? void 0
                        : _a.globalConf) === null || _b === void 0
                      ? void 0
                      : _b.APIKey) ||
                    ((_c = window.gigya.thisScript) === null || _c === void 0
                      ? void 0
                      : _c.APIKey);
                  _f = TokenStore_1.get(APIKey);
                  if (_f) return [3 /*break*/, 2];
                  return [4 /*yield*/, sessionHelpers_1.syncGroupToken(APIKey)];
                case 1:
                  _f = _g.sent();
                  _g.label = 2;
                case 2:
                  login_token = _f;
                  if (!login_token) {
                    return [
                      2 /*return*/,
                      endFlow(
                        "can't continue with SSO login, missing local session"
                      ),
                    ];
                  }
                  params['sdk'] =
                    'js_' +
                    (((_d = window.gigya.build) === null || _d === void 0
                      ? void 0
                      : _d.version) || '');
                  params['sdkBuild'] =
                    ((_e = window.gigya.build) === null || _e === void 0
                      ? void 0
                      : _e.number) || 0;
                  log.end();
                  if (scope === 'device_sso') {
                    serverParams = tslib_1.__assign(
                      { context: ssoToken, login_token: login_token },
                      params
                    );
                    window.gigya.logger.info(
                      'redirect to oidc continue with params: ',
                      serverParams
                    );
                    window.gigya.fidm.oidc.op.redirectToContinue(
                      tslib_1.__assign(
                        { opKey: window.gigya.partnerSettings.ssoKey },
                        serverParams
                      )
                    );
                  } else {
                    serverParams = {
                      ssoToken: ssoToken,
                      login_token: login_token,
                      APIKey: APIKey,
                    };
                    window.gigya.logger.info(
                      'redirect to sso.continue with params: ',
                      serverParams
                    );
                    HTTP_1.redirect(
                      'https://' +
                        window.gigya._.getApiDomain() +
                        '/accounts.sso.continue',
                      [serverParams, params],
                      'POST'
                    );
                  }
                  return [2 /*return*/];
              }
            });
          });
        }
        exports.continueSso = continueSso;
        function getSsoContext(params) {
          var _a;
          params === null || params === void 0
            ? void 0
            : params.callback(
                ((_a = window.gigya._.sso) === null || _a === void 0
                  ? void 0
                  : _a.context) || {}
              );
        }
        exports.getSsoContext = getSsoContext;
        function setSsoContext(context) {
          try {
            var urlParams = getUrlContextParams();
            var rpContext = (
              context === null || context === void 0
                ? void 0
                : context.rpContext
            )
              ? JSON.parse(context.rpContext)
              : {};
            window.gigya._.sso.context = tslib_1.__assign(
              tslib_1.__assign({}, urlParams),
              rpContext
            );
          } catch (e) {
            window.gigya.logger.report('failed to set sso context');
          }
        }
        exports.setSsoContext = setSsoContext;
        function verifySiteConfiguration() {
          var _a, _b;
          if (!window.gigya.partnerSettings.ssoKey) {
            window.gigya.logger.warn('Not in SSO Group');
            return false;
          }
          if (
            !((_b =
              (_a = window.gigya.thisScript) === null || _a === void 0
                ? void 0
                : _a.globalConf) === null || _b === void 0
              ? void 0
              : _b['storageDomainOverride'])
          ) {
            window.gigya.logger.warn(
              'Central login page must configure storageDomainOverride in webSDK Configuration'
            );
            return false;
          }
          return true;
        }
        function getUrlContextParams() {
          return new UrlParamsHelper_1.default()
            .getGigParamsFromURL()
            .removeUnacceptableParams(
              new RegExp(
                constants_1.GIGYA_INTERNAL_PARAM_PREFIX +
                  '|' +
                  constants_1.GIGYA_INTERNAL_PARAMS +
                  '|gig_ssoToken'
              )
            )
            .removePrefix()
            .toObject();
        }

        /***/
      },

    /***/ './src/core/Gigya.Js.Adapters.Web/app/ExternalMethods/index.ts':
      /*!*********************************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Web/app/ExternalMethods/index.ts ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var _this = this;
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var functions_1 = __webpack_require__(
          /*! ../../../Gigya.Js/app/Utils/functions */ './src/core/Gigya.Js/app/Utils/functions.ts'
        );
        var accountResidency_1 = __webpack_require__(
          /*! ./accountResidency */ './src/core/Gigya.Js.Adapters.Web/app/ExternalMethods/accountResidency.ts'
        );
        var seamlessSSO_1 = __webpack_require__(
          /*! ./seamlessSSO */ './src/core/Gigya.Js.Adapters.Web/app/ExternalMethods/seamlessSSO.ts'
        );
        var sessionHelpers_1 = __webpack_require__(
          /*! ./sessionHelpers */ './src/core/Gigya.Js.Adapters.Web/app/ExternalMethods/sessionHelpers.ts'
        );
        var centralizedSSO_1 = __webpack_require__(
          /*! ./centralizedSSO */ './src/core/Gigya.Js.Adapters.Web/app/ExternalMethods/centralizedSSO.ts'
        );
        functions_1.createAlias(
          'gigya.setAccountResidency',
          accountResidency_1.setAccountResidency
        );
        functions_1.createAlias(
          'gigya.setGroupContext',
          seamlessSSO_1.setGroupContext
        );
        functions_1.createAlias('gigya.setSSOToken', seamlessSSO_1.setSSOToken);
        functions_1.createAlias(
          'gigya.syncGroupGltExp',
          seamlessSSO_1.syncGroupGltExp
        );
        functions_1.createAlias('gigya.hasSession', function () {
          return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
              return [
                2 /*return*/,
                new gigya.Promise(function (resolve) {
                  if (!window.gigya.isReady) {
                    console.warn(
                      '**** gigya.hasSession must be called AFTER gigya service ready ****'
                    );
                    window.gigya.logger.report(
                      'Bad Implementation: gigya.hasSession'
                    );
                  }
                  window.gigya.utils.queue.queueForExecution(
                    'API',
                    function () {
                      return sessionHelpers_1.hasSession().then(resolve);
                    }
                  );
                }),
              ];
            });
          });
        });
        functions_1.createAlias(
          'gigya.sso.getContext',
          centralizedSSO_1.getSsoContext
        );
        functions_1.createAlias('gigya.sso.login', centralizedSSO_1.ssoLogin);
        functions_1.createAlias('gigya.sso.continue', function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          window.gigya.utils.queue.queueForExecution(
            'API',
            centralizedSSO_1.continueSso,
            args
          );
        });

        /***/
      },

    /***/ './src/core/Gigya.Js.Adapters.Web/app/ExternalMethods/seamlessSSO.ts':
      /*!***************************************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Web/app/ExternalMethods/seamlessSSO.ts ***!
  \***************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var SsoService_1 = __webpack_require__(
          /*! ../SsoService */ './src/core/Gigya.Js.Adapters.Web/app/SsoService.ts'
        );
        var TokenStore_1 = __webpack_require__(
          /*! ../TokenStore */ './src/core/Gigya.Js.Adapters.Web/app/TokenStore.ts'
        );
        function setGroupContext(groupContext) {
          return tslib_1.__awaiter(this, void 0, void 0, function () {
            var service;
            return tslib_1.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4 /*yield*/, SsoService_1.SsoService.getInstance()];
                case 1:
                  service = _a.sent();
                  return [
                    4 /*yield*/,
                    service === null || service === void 0
                      ? void 0
                      : service.setGroupContext(groupContext),
                  ];
                case 2:
                  _a.sent();
                  return [2 /*return*/];
              }
            });
          });
        }
        exports.setGroupContext = setGroupContext;
        function setSSOToken() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var params, redirectURL;
            return tslib_1.__generator(this, function (_a) {
              params = window.gigya.utils.object.merge([
                window.gigya.thisScript.globalConf,
                args,
              ]);
              redirectURL = params['redirectURL'] || document.location.href;
              window.gigya.utils.HTTP.redirect(
                redirectURL,
                [{}],
                'GET',
                '_top'
              );
              return [2 /*return*/];
            });
          });
        }
        exports.setSSOToken = setSSOToken;
        function syncGroupGltExp(gltexp) {
          if (gltexp === void 0) {
            gltexp = TokenStore_1.getGltexpCookie();
          }
          return tslib_1.__awaiter(this, void 0, void 0, function () {
            var service, res, hasChanged;
            return tslib_1.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (!window.gigya.partnerSettings.ssoKey)
                    return [2 /*return*/, gigya.Promise.resolve()];
                  return [4 /*yield*/, SsoService_1.SsoService.getInstance()];
                case 1:
                  service = _a.sent();
                  return [
                    4 /*yield*/,
                    service === null || service === void 0
                      ? void 0
                      : service.setTokenExpiration(gltexp, false),
                  ];
                case 2:
                  res = _a.sent();
                  hasChanged =
                    (res === null || res === void 0 ? void 0 : res.gltexp) !==
                    gltexp;
                  if (hasChanged) {
                    TokenStore_1.setGltexp(res.gltexp);
                  }
                  return [
                    2 /*return*/,
                    {
                      hasChanged: hasChanged,
                      oldExpiration:
                        window.gigya.utils.gltexp.getMillis(gltexp),
                      newExpiration: window.gigya.utils.gltexp.getMillis(
                        res.gltexp || gltexp
                      ),
                    },
                  ];
              }
            });
          });
        }
        exports.syncGroupGltExp = syncGroupGltExp;

        /***/
      },

    /***/ './src/core/Gigya.Js.Adapters.Web/app/ExternalMethods/sessionHelpers.ts':
      /*!******************************************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Web/app/ExternalMethods/sessionHelpers.ts ***!
  \******************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var TokenStore_1 = __webpack_require__(
          /*! ../TokenStore */ './src/core/Gigya.Js.Adapters.Web/app/TokenStore.ts'
        );
        var GSErrors_1 = __webpack_require__(
          /*! ../../../Gigya.Js/app/GSErrors */ './src/core/Gigya.Js/app/GSErrors.ts'
        );
        var SessionService_1 = __webpack_require__(
          /*! ../../../Gigya.Js/app/Services/SessionService */ './src/core/Gigya.Js/app/Services/SessionService.ts'
        );
        var SsoService_1 = __webpack_require__(
          /*! ../SsoService */ './src/core/Gigya.Js.Adapters.Web/app/SsoService.ts'
        );
        var promise_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/promise */ './src/core/Gigya.Js/app/Utils/promise.ts'
        );
        function hasSession() {
          var _a, _b, _c, _d;
          return tslib_1.__awaiter(this, void 0, void 0, function () {
            var log, apiKey, gltToken, response, isSessionVerified, oURLParams;
            return tslib_1.__generator(this, function (_e) {
              switch (_e.label) {
                case 0:
                  log = window.gigya.logger.group('hasSession');
                  apiKey =
                    ((_b =
                      (_a = window.gigya.thisScript) === null || _a === void 0
                        ? void 0
                        : _a.globalConf) === null || _b === void 0
                      ? void 0
                      : _b['APIKey']) ||
                    ((_c = window.gigya.thisScript) === null || _c === void 0
                      ? void 0
                      : _c.APIKey);
                  window.gigya.logger.info(
                    'checking session exist for apiKey: ' + apiKey
                  );
                  if (
                    ((_d = window.gigya.thisScript) === null || _d === void 0
                      ? void 0
                      : _d.APIKey) !== apiKey
                  ) {
                    window.gigya.logger.info(
                      'effective apiKey for checking session and the apiKey that the script was loaded with are different'
                    );
                  }
                  gltToken = TokenStore_1.get();
                  if (!(!gltToken && window.gigya.partnerSettings.ssoKey))
                    return [3 /*break*/, 2];
                  window.gigya.logger.info(
                    'SSO group, sync login token from group'
                  );
                  return [4 /*yield*/, syncGroupToken(apiKey)];
                case 1:
                  gltToken = _e.sent();
                  _e.label = 2;
                case 2:
                  if (!gltToken) return [3 /*break*/, 6];
                  if (!SessionService_1.sessionData.isSessionVerified(gltToken))
                    return [3 /*break*/, 3];
                  window.gigya.logger.info(
                    'login token exist and session is already verified, session is valid'
                  );
                  log.end();
                  return [2 /*return*/, true];
                case 3:
                  window.gigya.logger.info(
                    'login token exist and session is not verified, verifying session...'
                  );
                  return [
                    4 /*yield*/,
                    promise_1.promisify(window.gigya.accounts.verifyLogin),
                  ];
                case 4:
                  response = _e.sent();
                  isSessionVerified =
                    (response === null || response === void 0
                      ? void 0
                      : response.errorCode) == GSErrors_1.GSErrors.OK;
                  SessionService_1.sessionData.setIsSessionVerified(
                    gltToken,
                    isSessionVerified
                  );
                  window.gigya.logger.info(
                    isSessionVerified
                      ? 'session verified'
                      : 'session is not verified'
                  );
                  log.end();
                  return [2 /*return*/, isSessionVerified];
                case 5:
                  return [3 /*break*/, 7];
                case 6:
                  oURLParams = window.gigya.utils.URL.getParamsFromURL(
                    document.location.href
                  );
                  if (oURLParams['errorCode'] && oURLParams['regToken']) {
                    window.gigya.logger.info(
                      'user is returned from redirect, wait for login completion'
                    );
                    log.end();
                    return [
                      2 /*return*/,
                      new gigya.Promise(function (resolve) {
                        window.gigya.accounts.addEventHandlers({
                          onLogin: function () {
                            return resolve(true);
                          },
                        });
                      }),
                    ];
                  }
                  window.gigya.logger.info("login token doesn't exist");
                  log.end();
                  return [2 /*return*/, false];
                case 7:
                  return [2 /*return*/];
              }
            });
          });
        }
        exports.hasSession = hasSession;
        function syncGroupToken(localApiKey) {
          if (localApiKey === void 0) {
            localApiKey = window.gigya.thisScript.APIKey;
          }
          return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var service, token;
            return tslib_1.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  window.gigya.logger.info('sync login token from group');
                  return [4 /*yield*/, SsoService_1.SsoService.getInstance()];
                case 1:
                  service = _a.sent();
                  return [
                    4 /*yield*/,
                    service === null || service === void 0
                      ? void 0
                      : service.getToken(),
                  ];
                case 2:
                  token = _a.sent();
                  return [
                    4 /*yield*/,
                    TokenStore_1.setFromSsoResponse(token, localApiKey),
                  ];
                case 3:
                  _a.sent();
                  return [2 /*return*/, TokenStore_1.get(localApiKey)];
              }
            });
          });
        }
        exports.syncGroupToken = syncGroupToken;

        /***/
      },

    /***/ './src/core/Gigya.Js.Adapters.Web/app/OauthRequest.ts':
      /*!************************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Web/app/OauthRequest.ts ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function (
          __webpack_provided_Object_dot_assign
        ) {
          Object.defineProperty(exports, '__esModule', { value: true });
          var tslib_1 = __webpack_require__(
            /*! tslib */ '../node_modules/tslib/tslib.es6.js'
          );
          var BaseRequest_1 = __webpack_require__(
            /*! src/core/Gigya.Js.Adapters.Web/app/BaseRequest */ './src/core/Gigya.Js.Adapters.Web/app/BaseRequest.ts'
          );
          var IApiAdapter_1 = __webpack_require__(
            /*! src/core/Gigya.Js/interfaces/IApiAdapter */ './src/core/Gigya.Js/interfaces/IApiAdapter.ts'
          );
          var FlagService_1 = __webpack_require__(
            /*! src/core/Gigya.Js/app/Services/FlagService */ './src/core/Gigya.Js/app/Services/FlagService.ts'
          );
          var linkAccountsHelper_1 = __webpack_require__(
            /*! ../../Gigya.Js.Plugin/app/Utils/general/linkAccountsHelper */ './src/core/Gigya.Js.Plugin/app/Utils/general/linkAccountsHelper.ts'
          );
          var REDIRECT_ONLY_PROVIDERS = ['twitter'];
          var OauthRequest = /** @class */ (function (_super) {
            tslib_1.__extends(OauthRequest, _super);
            function OauthRequest(
              id,
              baseUrl,
              methodName,
              params,
              callback,
              settings
            ) {
              if (settings === void 0) {
                settings = {};
              }
              var _this =
                _super.call(this, baseUrl, methodName, params, settings) ||
                this;
              _this.id = id;
              _this.baseUrl = baseUrl;
              _this.methodName = methodName;
              _this.params = params;
              _this.callback = callback;
              _this.settings = settings;
              _this.windowName =
                _this.methodName.replace(/\./g, '_').replace(/\//g, '') +
                '_' +
                new Date().getTime();
              _this.requestID = _this.windowName + new Date().getTime();
              return _this;
            }
            OauthRequest.prototype.beforeRequest = function () {};
            OauthRequest.prototype.afterResponse = function (response) {
              if (!response['dontClose'] || response['dontClose'] === 'false') {
                window.gigya.utils.win.close(this.windowName);
              }
              this.callback(response);
            };
            OauthRequest.prototype.getAuthFlow = function () {
              // Force authFlow redirect on Windows Phone.
              if (
                window.gigya.localInfo.isWindowsPhone ||
                window.gigya.localInfo.isFacebookBrowser
              ) {
                return 'redirect';
              }
              if (this.enforceRedirectForSocial) {
                return 'redirect';
              }
              return this.params['authFlow']
                ? this.params['authFlow']
                : 'popup';
            };
            OauthRequest.prototype.getServerParamsString = function (provider) {
              return tslib_1.__awaiter(
                this,
                void 0,
                gigya.Promise,
                function () {
                  var serverParams, gmidTicket, urlParams;
                  return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        serverParams = this.getServerParams();
                        serverParams['state'] = this.getState(
                          this.requestID,
                          this.methodName,
                          this.getAuthFlow()
                        );
                        if (
                          this.settings.oauthMode ===
                          IApiAdapter_1.OAuthMode.Sso
                        ) {
                          delete serverParams['context']; // already included in state param
                          if (
                            this.getAuthFlow() != 'redirect' &&
                            serverParams['redirectURL']
                          ) {
                            window.gigya.logger.warn(
                              'redirectURL is valid only for "Redirect" auth flow'
                            );
                          }
                        }
                        window.gigya.utils.object.add(
                          serverParams,
                          this.getAuthParams()
                        );
                        return [
                          4 /*yield*/,
                          window.gigya._.apiAdapter.getGmidTicket(),
                        ];
                      case 1:
                        gmidTicket = _a.sent();
                        if (gmidTicket) {
                          serverParams['gmidTicket'] = gmidTicket;
                        }
                        this.sentLoginToken = serverParams['login_token'];
                        urlParams = window.gigya.utils.URL.getParamsFromURL(
                          window.location.href
                        );
                        if (
                          urlParams['scope'] === 'device_sso' &&
                          (provider === null || provider === void 0
                            ? void 0
                            : provider.name) === 'line'
                        ) {
                          serverParams['x_forceAuthentication'] = true;
                        }
                        return [
                          2 /*return*/,
                          window.gigya.utils.keyValue.serialize(serverParams),
                        ];
                    }
                  });
                }
              );
            };
            OauthRequest.prototype.sendAction = function () {
              return tslib_1.__awaiter(
                this,
                void 0,
                gigya.Promise,
                function () {
                  var provider,
                    serverParamsQuerystring,
                    windowOptions,
                    methodNameSplit,
                    methodName,
                    fullUrl;
                  var _this = this;
                  return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        this.beforeRequest();
                        if (this.params['provider']) {
                          provider = window.gigya.socialize._getProviderByName(
                            this.params['provider']
                          );
                        }
                        return [
                          4 /*yield*/,
                          this.getServerParamsString(provider),
                        ];
                      case 1:
                        serverParamsQuerystring = _a.sent();
                        windowOptions = {
                          menubar: 0,
                          resizable: 1,
                          scrollbars: 1,
                          width: provider ? provider.width : undefined,
                          height: provider ? provider.height : undefined,
                        };
                        if (this.params['enablePopupLocation']) {
                          windowOptions.location = 1;
                          windowOptions.toolbar = 1;
                        } else {
                          windowOptions.toolbar = 0;
                        }
                        methodNameSplit = this.methodName.split('.');
                        methodName =
                          this.params['originalMethodName'] ||
                          methodNameSplit[methodNameSplit.length - 1];
                        window.gigya.legacyReports.report(
                          methodName,
                          this.params['APIKey'],
                          this.params['cid'],
                          this.params['source'],
                          this.params['sourceData'],
                          {
                            sn: provider ? provider.toString() : null,
                          }
                        );
                        fullUrl = this.getUrl() + '?' + serverParamsQuerystring;
                        if (this.getAuthFlow() === 'redirect') {
                          window.gigya._.WindowProvider.top().document.location.href =
                            fullUrl;
                        } else {
                          window.gigya.utils.xd.addMessageListener(
                            this.requestID,
                            this.params,
                            true,
                            function (response) {
                              _this.afterResponse(response);
                            }
                          );
                          window.gigya.utils.win.open(
                            fullUrl,
                            this.windowName,
                            windowOptions
                          );
                        }
                        return [2 /*return*/];
                    }
                  });
                }
              );
            };
            Object.defineProperty(OauthRequest.prototype, 'domain', {
              get: function () {
                return document.location.href.split('?')[0].split('#')[0];
              },
              enumerable: true,
              configurable: true,
            });
            OauthRequest.prototype.getServerParams = function () {
              var _a;
              switch (
                (_a = this.settings) === null || _a === void 0
                  ? void 0
                  : _a.oauthMode
              ) {
                case IApiAdapter_1.OAuthMode.Sso:
                  return this._normalizeParamsForSSO();
                case IApiAdapter_1.OAuthMode.Social:
                default:
                  return this._normalizeParamsForSocial();
              }
            };
            OauthRequest.prototype.getState = function (
              requestID,
              methodName,
              authFlow
            ) {
              var _a;
              switch (
                (_a = this.settings) === null || _a === void 0
                  ? void 0
                  : _a.oauthMode
              ) {
                case IApiAdapter_1.OAuthMode.Sso:
                  return this._createSSOStateParam(
                    requestID,
                    methodName,
                    authFlow
                  );
                case IApiAdapter_1.OAuthMode.Social:
                default:
                  return this._createSocialStateParam(
                    requestID,
                    methodName,
                    authFlow
                  );
              }
            };
            OauthRequest.prototype._normalizeParamsForSSO = function () {
              return __webpack_provided_Object_dot_assign(
                {
                  APIKey: window.gigya.apiKey,
                  redirectURL: window.top.document.location.href,
                },
                this.params
              );
            };
            OauthRequest.prototype._normalizeParamsForSocial = function () {
              var serverParams = {};
              for (var paramName in this.params) {
                if (
                  paramName.indexOf('x_') !== 0 &&
                  this.params[paramName] != null
                ) {
                  serverParams['x_' + paramName] = this.params[paramName];
                  delete serverParams[paramName];
                }
              }
              if (serverParams['x_APIKey']) {
                serverParams['client_id'] = serverParams['x_APIKey'];
                delete serverParams['x_APIKey'];
              }
              if (serverParams['x_oauth_token']) {
                serverParams['oauth_token'] = serverParams['x_oauth_token'];
                delete serverParams['x_oauth_token'];
              }
              serverParams['redirect_uri'] = '/GS/AfterLogin.aspx';
              serverParams['response_type'] = this.params['authCodeOnly']
                ? 'code'
                : 'server_token';
              serverParams['x_sdk'] = 'js_' + window.gigya.build.version;
              if (FlagService_1.FlagService.enforceAuthFlowRedirectForSocial) {
                serverParams['x_authFlow'] = this.getAuthFlow();
              }
              var refUID = window.gigya.utils.cookie.get(
                '_gigRefUid_' + this.params['APIKey']
              );
              if (refUID) {
                serverParams['x_refUID'] = refUID;
              }
              delete serverParams['redirectURL']; // we don't need it since it's passed in state params
              return serverParams;
            };
            OauthRequest.prototype._createSSOStateParam = function (
              requestID,
              methodName,
              authFlow
            ) {
              var state = this._state;
              state['id'] = requestID;
              state['context'] = this.params['context'] || {};
              state['gig_actions'] = 'sso.login';
              state['authFlow'] = authFlow || 'redirect';
              return decodeURIComponent(JSON.stringify(state));
            };
            OauthRequest.prototype._createSocialStateParam = function (
              requestID,
              methodName,
              authFlow
            ) {
              var state = this._state;
              state['id'] = requestID;
              if (authFlow === 'redirect') {
                var sourceURL =
                  window.gigya._.WindowProvider.top().document.location.href;
                state['sourceURL'] = sourceURL;
                if (this.params['redirectURL']) {
                  state['redirectURL'] = window.gigya.utils.URL.addParamsToURL(
                    this.params['redirectURL'],
                    {
                      gig_events:
                        window.gigya.events.global.getEventsForOperation(
                          methodName
                        ),
                    }
                  );
                  if (this.params['redirectMethod']) {
                    state['redirectMethod'] = this.params['redirectMethod'];
                  }
                  // See #46301 - addUserInfo must only be passed when the user explictly passes a redirectURL.
                  state['addUserInfo'] = true;
                } else {
                  state['sourceURL'] = window.gigya.utils.URL.addParamsToURL(
                    state['sourceURL'],
                    {
                      gig_events:
                        window.gigya.events.global.getEventsForOperation(
                          methodName
                        ),
                    }
                  );
                }
                if (this.isLinkAccountsV2Flow(sourceURL)) {
                  state[
                    linkAccountsHelper_1.LinkAccountsWithRedirectParam.Provider
                  ] = this.extractProviderSessionForLinkAccounts(sourceURL);
                }
              }
              if (
                this.params['provider'] &&
                this.params['provider'].toLowerCase() == 'facebook'
              ) {
                state['invite'] = this.params['invite'];
              }
              return window.gigya.utils.keyValue.serialize(state);
            };
            Object.defineProperty(OauthRequest.prototype, '_messagingMethod', {
              get: function () {
                if (window.gigya.localInfo.isIE11 && window.indexedDB) {
                  return window.gigya._.MessagingMethod.LocalStorageListener;
                }
                // [#67641] - https://gigya.tpondemand.com/entity/67641-loccitane-social-login-to-line-hangs
                // if provider is Line, use LocalStorageListener because if Line's native app is installed on the device
                // it may "hijack" (deep-link) the OAuth request and prevent the PostMessage mechanism from working.
                if (
                  window.gigya.localInfo.isAndroid &&
                  this.params['provider'] &&
                  this.params['provider'].toLowerCase() == 'line'
                ) {
                  return window.gigya._.MessagingMethod.LocalStorageListener;
                }
                return window.gigya.localInfo.messagingMethod;
              },
              enumerable: true,
              configurable: true,
            });
            Object.defineProperty(OauthRequest.prototype, '_lid', {
              get: function () {
                if (
                  (window.gigya.thisScript.globalConf[
                    'legacyCrossSiteMethod'
                  ] &&
                    window.gigya.thisScript.globalConf[
                      'legacyCrossSiteMethod'
                    ].toLowerCase() !== 'localstorage') ||
                  (window.gigya.localInfo.isIE &&
                    window.navigator['msDoNotTrack'])
                ) {
                  return (
                    window.gigya.thisScript.globalConf[
                      'legacyCrossSiteMethod'
                    ] +
                    ':' +
                    window.gigya.utils.xd._flashListenerID
                  );
                }
                return window.gigya.utils.xd._flashListenerID;
              },
              enumerable: true,
              configurable: true,
            });
            Object.defineProperty(OauthRequest.prototype, '_state', {
              get: function () {
                return {
                  domain: this._domain,
                  lid: this._lid,
                  messaging: this._messagingMethod,
                };
              },
              enumerable: true,
              configurable: true,
            });
            Object.defineProperty(OauthRequest.prototype, '_domain', {
              get: function () {
                return document.location.href.split('?')[0].split('#')[0];
              },
              enumerable: true,
              configurable: true,
            });
            Object.defineProperty(
              OauthRequest.prototype,
              'enforceRedirectForSocial',
              {
                get: function () {
                  return (
                    FlagService_1.FlagService
                      .enforceAuthFlowRedirectForSocial &&
                    window.gigya.utils.array.includes(
                      REDIRECT_ONLY_PROVIDERS,
                      this.params['provider']
                    )
                  );
                },
                enumerable: true,
                configurable: true,
              }
            );
            OauthRequest.prototype.isLinkAccountsV2Flow = function (url) {
              var _a = window.gigya.utils.URL.getParamsFromURL(url) || {},
                errorCode = _a.errorCode,
                restParams = tslib_1.__rest(_a, ['errorCode']);
              return (
                linkAccountsHelper_1.isLinkAccountsV2Interruption(errorCode) &&
                linkAccountsHelper_1.isProviderSessionValid(restParams)
              );
            };
            OauthRequest.prototype.extractProviderSessionForLinkAccounts =
              function (sourceURL) {
                var params = window.gigya.utils.URL.getParamsFromURL(sourceURL);
                var providerSession =
                  linkAccountsHelper_1.getProviderSessionFromParams(params);
                return window.gigya.utils.JSON.serialize(providerSession);
              };
            return OauthRequest;
          })(BaseRequest_1.BaseRequest);
          exports.OauthRequest = OauthRequest;

          /* WEBPACK VAR INJECTION */
        }).call(
          this,
          __webpack_require__(
            /*! tslib */ '../node_modules/tslib/tslib.es6.js'
          )['__assign']
        );

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

    /***/ './src/core/Gigya.Js.Adapters.Web/app/WebAdapter.ts':
      /*!**********************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Web/app/WebAdapter.ts ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var tokenStore = __webpack_require__(
          /*! src/core/Gigya.Js.Adapters.Web/app/TokenStore */ './src/core/Gigya.Js.Adapters.Web/app/TokenStore.ts'
        );
        var ApiRequest_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Adapters.Web/app/ApiRequest */ './src/core/Gigya.Js.Adapters.Web/app/ApiRequest.ts'
        );
        var OauthRequest_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Adapters.Web/app/OauthRequest */ './src/core/Gigya.Js.Adapters.Web/app/OauthRequest.ts'
        );
        var ServiceProxy_1 = __webpack_require__(
          /*! src/core/ServiceProxy/ServiceProxy */ './src/core/ServiceProxy/ServiceProxy.ts'
        );
        var ApiService_1 = __webpack_require__(
          /*! src/core/ApiService/app/ApiService */ './src/core/ApiService/app/ApiService.ts'
        );
        var GSErrors_1 = __webpack_require__(
          /*! ../../Gigya.Js/app/GSErrors */ './src/core/Gigya.Js/app/GSErrors.ts'
        );
        var localStorage_1 = __webpack_require__(
          /*! ../../Gigya.Js/app/Utils/localStorage */ './src/core/Gigya.Js/app/Utils/localStorage.ts'
        );
        var GmidProvider_1 = __webpack_require__(
          /*! src/core/ApiService/app/GmidProvider */ './src/core/ApiService/app/GmidProvider.ts'
        );
        var domains_1 = __webpack_require__(
          /*! ../../Gigya.Js/app/Utils/domains */ './src/core/Gigya.Js/app/Utils/domains.ts'
        );
        var FlagService_1 = __webpack_require__(
          /*! ../../Gigya.Js/app/Services/FlagService */ './src/core/Gigya.Js/app/Services/FlagService.ts'
        );
        var SessionService_1 = __webpack_require__(
          /*! ../../Gigya.Js/app/Services/SessionService */ './src/core/Gigya.Js/app/Services/SessionService.ts'
        );
        var SiteData_1 = __webpack_require__(
          /*! ../../Gigya.Js/app/Services/SiteData */ './src/core/Gigya.Js/app/Services/SiteData.ts'
        );
        var SsoService_1 = __webpack_require__(
          /*! ./SsoService */ './src/core/Gigya.Js.Adapters.Web/app/SsoService.ts'
        );
        var InternalFlows_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/InternalFlows */ './src/core/Gigya.Js/app/InternalFlows.ts'
        );
        var constants_1 = __webpack_require__(
          /*! src/accounts/constants */ './src/accounts/constants.ts'
        );
        var promise_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/promise */ './src/core/Gigya.Js/app/Utils/promise.ts'
        );
        var LoginModes_1 = __webpack_require__(
          /*! ../../../accounts/Gigya.JS.Plugin.screenSet2/app/LoginModes */ './src/accounts/Gigya.JS.Plugin.screenSet2/app/LoginModes.ts'
        );
        var linkAccountsHelper_1 = __webpack_require__(
          /*! ../../Gigya.Js.Plugin/app/Utils/general/linkAccountsHelper */ './src/core/Gigya.Js.Plugin/app/Utils/general/linkAccountsHelper.ts'
        );
        var consts_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/consts */ './src/core/Gigya.Js/app/consts.ts'
        );
        if (!window.gigya.isGigya) window.gigya.isGigya = true;
        exports.webAdapterName = 'Web';
        function newApiAdapter(adapterSettings) {
          return new WebAdapter(
            adapterSettings,
            new localStorage_1.CookieStorageAdapter()
          );
        }
        exports.newApiAdapter = newApiAdapter;
        var WebAdapter = /** @class */ (function () {
          function WebAdapter(adapterSettings, _storage) {
            this.adapterSettings = adapterSettings;
            this._storage = _storage;
            this.name = exports.webAdapterName;
            this._reBootstrapCount = 0;
          }
          WebAdapter.prototype.getStorage = function () {
            return this._storage;
          };
          WebAdapter.prototype.init = function (initCallback, retries) {
            if (retries === void 0) {
              retries = 0;
            }
            var _a, _b;
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var actualIndication,
                currentIndication,
                hasBootstrapped,
                log,
                _c,
                _d,
                _e,
                regenerateGmid,
                isValidSession,
                callback,
                res,
                tokenInfo,
                _f,
                error_1,
                responseEventObject;
              return tslib_1.__generator(this, function (_g) {
                switch (_g.label) {
                  case 0:
                    _g.trys.push([0, 14, , 17]);
                    actualIndication =
                      GmidProvider_1.GmidProvider.getGmidBootstrapIndicationToken(
                        window.gigya
                      );
                    currentIndication = this.getStorage().getItem(
                      WebAdapter.bootstrapIndicationCookieName(
                        window.gigya.thisScript.APIKey
                      )
                    );
                    hasBootstrapped = currentIndication === actualIndication;
                    window.gigya.logger.info(
                      'has bootstrapped: ' + hasBootstrapped
                    );
                    log = window.gigya.logger.group('create api service');
                    _c = this;
                    return [4 /*yield*/, SsoService_1.SsoService.getInstance()];
                  case 1:
                    _c._ssoService = _g.sent();
                    _d = window.gigya._.apiAdapters.web;
                    _e = this;
                    return [
                      4 /*yield*/,
                      this.createApiService(hasBootstrapped),
                    ];
                  case 2:
                    _d.apiService = _e._apiService = _g.sent();
                    log.end();
                    regenerateGmid =
                      GmidProvider_1.GmidProvider.shouldRegenerateGmid(
                        window.gigya,
                        this.hasSessionToken()
                      );
                    return [
                      4 /*yield*/,
                      this.bootstrapApiService(regenerateGmid),
                    ];
                  case 3:
                    _g.sent();
                    window.gigya.utils.functions.createAlias(
                      'gigya.auth.loginToken.get',
                      tokenStore.get
                    ); // TODO can this be removed?
                    if (
                      window.gigya.partnerSettings.ssoKey &&
                      window.gigya.canary &&
                      window.gigya.canary.config.probability
                    ) {
                      this.syncCanaryWithSSO();
                    }
                    return [4 /*yield*/, this.establishSession()];
                  case 4:
                    isValidSession = _g.sent();
                    if (isValidSession) {
                      window.gigya.services.accountService
                        .verifyLogin()
                        .then(function (loginVerified) {
                          if (!loginVerified)
                            window.gigya.events.global.dispatch({
                              eventName: 'logout,accounts.logout',
                            });
                        });
                    }
                    return [4 /*yield*/, this.checkReturnFromURL()];
                  case 5:
                    _g.sent();
                    if (!window.gigya._.isTrustedDomain) {
                      try {
                        this._apiService.sendReport('untrusted domain', {
                          domain: location.hostname,
                          trustedDomains:
                            window.gigya.partnerSettings.baseDomains,
                        });
                      } catch (e) {
                        console.error(e);
                      }
                    }
                    window.gigya.logger.info(
                      'user is ' + (isValidSession ? '' : 'not ') + 'logged-in'
                    );
                    if (!!window.gigya.partnerSettings.ssoKey)
                      return [3 /*break*/, 6];
                    initCallback();
                    return [3 /*break*/, 13];
                  case 6:
                    window.gigya.logger.info(
                      'sso group sync - ' + window.gigya.partnerSettings.ssoKey
                    );
                    callback = function (e) {
                      tokenStore.setFromSsoResponse(e);
                      initCallback();
                    };
                    if (
                      !(
                        SessionService_1.sessionData.isSessionVerified(
                          tokenStore.get()
                        ) &&
                        isValidSession &&
                        FlagService_1.FlagService.useSessionVerify
                      )
                    )
                      return [3 /*break*/, 8];
                    return [
                      4 /*yield*/,
                      promise_1.promisify(
                        window.gigya.accounts.session.verify,
                        { ignoreApiQueue: true }
                      ),
                    ];
                  case 7:
                    res = _g.sent();
                    isValidSession = res.errorCode === GSErrors_1.GSErrors.OK;
                    _g.label = 8;
                  case 8:
                    if (!isValidSession) return [3 /*break*/, 10];
                    return [
                      4 /*yield*/,
                      (_a = this._ssoService) === null || _a === void 0
                        ? void 0
                        : _a.checkTokenRenew(tokenStore.get()),
                    ];
                  case 9:
                    _f = _g.sent();
                    return [3 /*break*/, 12];
                  case 10:
                    return [
                      4 /*yield*/,
                      (_b = this._ssoService) === null || _b === void 0
                        ? void 0
                        : _b.getToken(),
                    ];
                  case 11:
                    _f = _g.sent();
                    _g.label = 12;
                  case 12:
                    tokenInfo = _f;
                    callback(tokenInfo);
                    _g.label = 13;
                  case 13:
                    return [3 /*break*/, 17];
                  case 14:
                    error_1 = _g.sent();
                    if (!(retries > 0)) return [3 /*break*/, 16];
                    return [4 /*yield*/, this.init(initCallback, retries - 1)];
                  case 15:
                    return [2 /*return*/, _g.sent()];
                  case 16:
                    window.gigya.logger.error('error bootstrapping sdk', {
                      type: 'bootstrap failed',
                      scope: 'WebAdapter.init',
                      error: error_1,
                    });
                    window.gigya.logger.debug('removing bootstrap indication');
                    this.getStorage().removeItem(
                      WebAdapter.bootstrapIndicationCookieName(
                        window.gigya.thisScript.APIKey
                      )
                    );
                    responseEventObject = {
                      status: 'FAIL_TO_BOOTSTRAP',
                      statusMessage: 'Web SDK failed to bootstrap',
                      errorCode: GSErrors_1.GSErrors.NETWORK_ERROR,
                      errorMessage:
                        'Web SDK failed to bootstrap: ' +
                        (error_1.message || error_1),
                    };
                    window.gigya.events.dispatchErrorFromResponse(
                      { eventName: 'init' },
                      responseEventObject
                    );
                    window.gigya.events.global.dispatchWhenHandlersAdded(
                      ['accounts.error', 'socialize.error'],
                      responseEventObject
                    );
                    initCallback();
                    return [3 /*break*/, 17];
                  case 17:
                    return [2 /*return*/];
                }
              });
            });
          };
          WebAdapter.prototype.bootstrapApiService = function (force) {
            if (force === void 0) {
              force = false;
            }
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              var info, ex_1;
              return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, this._apiService.bootstrap(force)];
                  case 1:
                    info = _a.sent();
                    return [3 /*break*/, 3];
                  case 2:
                    ex_1 = _a.sent();
                    window.gigya.logger.error('error bootstrapping sdk', {
                      type: 'webSdkBootstrap failed',
                      scope: 'ApiService.bootstrap',
                      ex: ex_1,
                    });
                    window.gigya.events.global.dispatchWhenHandlersAdded(
                      ['accounts.error', 'socialize.error'],
                      {
                        status: 'FAIL_TO_BOOTSTRAP',
                        statusMessage:
                          'Web SDK bootstrap failure - APIService bootstrap',
                        errorCode: GSErrors_1.GSErrors.NETWORK_ERROR,
                        errorMessage:
                          'Web SDK bootstrap failure: ' +
                          (ex_1.message || ex_1),
                      }
                    );
                    return [3 /*break*/, 3];
                  case 3:
                    if (
                      info === null || info === void 0
                        ? void 0
                        : info.ticketInfo
                    ) {
                      this.setGmidTicket(info.ticketInfo);
                    } else if (
                      info === null || info === void 0 ? void 0 : info.hasGmid
                    ) {
                      this.bootstrapIndication = info.hasGmid;
                      SiteData_1.siteData.didForcedBootstrap = FlagService_1
                        .FlagService.forceWebSdkBootstrap
                        ? info.hasGmid
                        : null;
                    }
                    return [2 /*return*/];
                }
              });
            });
          };
          WebAdapter.prototype.syncCanaryWithSSO = function () {
            var _a;
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              var isCanary, canaryVersion, canaryInfo;
              return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                  case 0:
                    isCanary = this.getStorage().getItem(
                      window.gigya.canary.config.cookiesNames.isCanary
                    );
                    canaryVersion = this.getStorage().getItem(
                      window.gigya.canary.config.cookiesNames.version
                    );
                    return [
                      4 /*yield*/,
                      (_a = this._ssoService) === null || _a === void 0
                        ? void 0
                        : _a.syncCanaryIndication(isCanary, canaryVersion),
                    ];
                  case 1:
                    canaryInfo = _b.sent();
                    if (
                      (canaryInfo === null || canaryInfo === void 0
                        ? void 0
                        : canaryInfo.errorCode) === GSErrors_1.GSErrors.OK
                    ) {
                      if (
                        canaryInfo.isCanary &&
                        canaryInfo.isCanary !== isCanary
                      ) {
                        this.getStorage().setItem(
                          window.gigya.canary.config.cookiesNames.isCanary,
                          canaryInfo.isCanary
                        );
                      }
                      if (
                        canaryInfo.canaryVersion &&
                        canaryInfo.canaryVersion !== canaryVersion
                      ) {
                        this.getStorage().setItem(
                          window.gigya.canary.config.cookiesNames.version,
                          canaryInfo.canaryVersion
                        );
                      }
                    }
                    return [2 /*return*/];
                }
              });
            });
          };
          WebAdapter.prototype.createApiService = function (hasBootstrapped) {
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var storageProtocol,
                loggerConfig,
                apiServiceUrl,
                apiServiceProxy,
                initInfo,
                apiDomain,
                forceSkipBootstrap,
                isApiDomainFirstParty;
              return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    storageProtocol =
                      window.gigya.thisScript.globalConf[
                        'storageProtocolOverride'
                      ] || 'https';
                    loggerConfig =
                      window.gigya.logger.configKey +
                      '=' +
                      encodeURIComponent(
                        JSON.stringify(window.gigya.logger.getConfig())
                      );
                    apiServiceUrl =
                      storageProtocol +
                      '://' +
                      domains_1.getStorageDomain() +
                      '/gs/webSdk/Api.aspx?apiKey=' +
                      encodeURIComponent(window.gigya.thisScript.APIKey) +
                      '&version=' +
                      window.gigya.build.version +
                      '&build=' +
                      window.gigya.build.number +
                      '#origin=' +
                      document.location.href +
                      '&' +
                      loggerConfig;
                    window.gigya.logger.info('opening api frame');
                    apiServiceProxy = new ServiceProxy_1.ServiceProxy(
                      apiServiceUrl
                    );
                    window.gigya.logger.info('creating api service');
                    return [4 /*yield*/, apiServiceProxy.init('Api Service')];
                  case 1:
                    initInfo = _a.sent();
                    window.gigya.partnerSettings.plugins.apiDomain =
                      initInfo.apiDomain;
                    window.gigya._.getApiDomain =
                      window.gigya._.apiDomainFactory(
                        initInfo.apiDomain,
                        window.gigya.defaultApiDomain
                      );
                    apiDomain = window.gigya._.Uri.parse(initInfo.apiDomain);
                    window.gigya.logger.info('api domain is: ' + apiDomain);
                    window.gigya.logger.info(
                      'api domain is ' +
                        (initInfo.isGroupApiDomain ? '' : 'not ') +
                        'group domain'
                    );
                    forceSkipBootstrap =
                      window.gigya.thisScript.URLParams['bootstrap'] ===
                      'false';
                    // in gigya's domain
                    if (
                      apiDomain.isBaseOf(apiServiceUrl) &&
                      !forceSkipBootstrap &&
                      !window.gigya.thisScript.globalConf[
                        'storageDomainOverride'
                      ]
                    ) {
                      window.gigya.logger.info(
                        "api domain is gigya's so keep working with frame"
                      );
                      return [
                        2 /*return*/,
                        apiServiceProxy.wrapWith(ApiService_1.ApiService),
                      ];
                    }
                    // either prefixed domain or group domain
                    else {
                      window.gigya.logger.info('closing api frame');
                      apiServiceProxy.stop(true).then(function () {
                        return window.gigya.logger.info('api frame closed');
                      }); // no need to wait for this
                      if (forceSkipBootstrap) {
                        hasBootstrapped = true;
                      } else if (initInfo.hasGroupApiDomainChanged) {
                        // if group api domain changed, we need to re-bootstrap
                        // (it won't change if the site isn't in sso group)
                        hasBootstrapped = false;
                      }
                      isApiDomainFirstParty = true;
                      if (FlagService_1.FlagService.alwaysCheckCookieSave) {
                        try {
                          isApiDomainFirstParty = window.gigya._.Uri.parse(
                            window.gigya.localInfo.baseDomain || ''
                          ).isBaseOf(apiDomain.domain);
                        } catch (e) {
                          window.gigya.logger.report(
                            'Error evaluating first party domain',
                            {
                              baseDomain: window.gigya.localInfo.baseDomain,
                              apiDomain: apiDomain.domain,
                            }
                          );
                        }
                      }
                      window.gigya.logger.info(
                        'create and work with api service from top frame'
                      );
                      return [
                        2 /*return*/,
                        new ApiService_1.ApiService(
                          window.gigya.thisScript.APIKey,
                          hasBootstrapped,
                          {
                            originDomain: location.href,
                            isGroupApiDomain: initInfo.isGroupApiDomain,
                            getApiDomain: window.gigya._.getApiDomain,
                            isApiDomainFirstParty: isApiDomainFirstParty,
                            hasGroupApiDomainChanged: false,
                            canSaveGmidAsCookie: initInfo.canSaveGmidAsCookie,
                          }
                        ),
                      ];
                    }
                    return [2 /*return*/];
                }
              });
            });
          };
          WebAdapter.prototype.isSessionValid = function (params, callback) {
            var _this = this;
            if (params === void 0) {
              params = {};
            }
            tokenStore.setFromGAC(params, function () {
              if (callback) {
                callback(_this.hasSessionToken(params));
              }
            });
          };
          WebAdapter.prototype.hasSessionToken = function (params) {
            if (params === void 0) {
              params = {};
            }
            return (
              tokenStore.get(params['APIKey']) != null ||
              params['oauth_token'] != null
            );
          };
          WebAdapter.prototype.registerForNamespaceEvents = function (
            namespace
          ) {};
          WebAdapter.prototype.onPluginEvent = function (event) {};
          WebAdapter.prototype.onJSLog = function (logType, logInfo) {};
          WebAdapter.prototype.sendRequest = function (
            methodName,
            params,
            callback,
            settings
          ) {
            if (settings === void 0) {
              settings = {};
            }
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              var fnAfterResponse, proxyReqCallback, proxyReq;
              var _this = this;
              return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [
                      4 /*yield*/,
                      this.beforeRequest(methodName, params, settings),
                    ];
                  case 1:
                    _a.sent();
                    fnAfterResponse = function (response, callback) {
                      _this.afterResponse(proxyReq, response, function () {
                        if (typeof callback === 'function') {
                          callback(
                            window.gigya.utils.object.clone(response, true)
                          );
                        }
                      });
                    };
                    proxyReqCallback = function (response) {
                      fnAfterResponse(response, callback);
                    };
                    proxyReq = new ApiRequest_1.ApiRequest(
                      methodName,
                      params,
                      proxyReqCallback,
                      settings
                    );
                    proxyReq.send();
                    if (
                      window.gigya._.logoutMethods[methodName] &&
                      window.gigya._.logoutBehaviour.logoutBeforeServerResponse
                    ) {
                      this.clearSession(params);
                    }
                    return [2 /*return*/];
                }
              });
            });
          };
          WebAdapter.prototype.clearSession = function (params, callback) {
            tokenStore.remove(params['APIKey']);
            if (callback) {
              callback();
            }
          };
          WebAdapter.prototype.setGltexpFromSSO = function (apiKey) {
            if (apiKey === void 0) {
              apiKey = window.gigya.thisScript.APIKey;
            }
            var _a;
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var res;
              return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                  case 0:
                    if (
                      !(
                        window.gigya.partnerSettings.ssoKey &&
                        !tokenStore.isValidGltExp()
                      )
                    )
                      return [3 /*break*/, 2];
                    return [
                      4 /*yield*/,
                      (_a = this._ssoService) === null || _a === void 0
                        ? void 0
                        : _a.getTokenExpiration(),
                    ];
                  case 1:
                    res = _b.sent();
                    if (
                      (res === null || res === void 0
                        ? void 0
                        : res.errorCode) === GSErrors_1.GSErrors.OK &&
                      res.gltexp &&
                      tokenStore.isValidGltExp(res.gltexp)
                    ) {
                      tokenStore.setGltexp(res.gltexp);
                      return [2 /*return*/, true];
                    }
                    _b.label = 2;
                  case 2:
                    return [2 /*return*/, false];
                }
              });
            });
          };
          WebAdapter.prototype.sendOauthRequest = function (
            methodName,
            params,
            callback,
            settings
          ) {
            var _this = this;
            this.beforeRequest(methodName, params, settings);
            var baseUrl = 'https://' + window.gigya._.getApiDomain('socialize');
            var req = new OauthRequest_1.OauthRequest(
              '',
              baseUrl,
              methodName,
              params,
              function (response) {
                _this.afterResponse(req, response, function (res) {
                  if (res.errorCode != '0') {
                    callback(res);
                  } else {
                    // social login (oauth request) makes gigya's domain visited so we re-bootstrap.
                    _this.bootstrapApiService().then(function () {
                      return callback(res);
                    });
                  }
                });
              },
              settings
            );
            req.send();
          };
          WebAdapter.prototype.beforeRequest = function (
            methodName,
            params,
            settings
          ) {
            if (settings === void 0) {
              settings = {};
            }
            var _a, _b;
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              return tslib_1.__generator(this, function (_c) {
                if (
                  settings.clearSession ||
                  (settings.clearSessionCondition &&
                    settings.clearSessionCondition(params))
                ) {
                  window.gigya.logger.info(
                    'clearing session before request for ' + methodName
                  );
                  tokenStore.remove(params['APIKey']);
                }
                if (
                  Number(params['sessionExpiration']) === -2 &&
                  ((_b =
                    (_a = window.gigya.thisScript) === null || _a === void 0
                      ? void 0
                      : _a.globalConf) === null || _b === void 0
                    ? void 0
                    : _b['storageDomainOverride'])
                ) {
                  window.gigya.logger.info(
                    'session expiration -2 was converted to 1 year fixed expiration'
                  );
                  params['sessionExpiration'] =
                    window.gigya.utils.cookie.getInfiniteExpirationTimeInSeconds();
                }
                return [2 /*return*/];
              });
            });
          };
          WebAdapter.prototype.afterResponse = function (
            req,
            response,
            callback
          ) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              var _this = this;
              return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    if (
                      !(
                        response.errorDetails == 'Missing cookie' ||
                        response.errorDetails ==
                          'Session is invalid (Missing DeviceId)' ||
                        response.errorDetails ==
                          'Missing required parameter: gcid or ucid cookie' ||
                        (response.errorCode ===
                          GSErrors_1.GSErrors.INVALID_PARAMETER_VALUE &&
                          response.errorFlags === 'missingKey')
                      )
                    )
                      return [3 /*break*/, 2];
                    window.gigya.logger.info(
                      'missing cookie error - forcing bootstrap'
                    );
                    if (this._reBootstrapCount >= 2) {
                      window.gigya.logger.report('multiple reBootstrap error');
                      this._reBootstrapCount = 0;
                      callback(response);
                      return [2 /*return*/];
                    }
                    this._reBootstrapCount++;
                    return [4 /*yield*/, this.bootstrapApiService(true)];
                  case 1:
                    _a.sent();
                    window.gigya.logger.info('resending request');
                    req.send();
                    return [2 /*return*/];
                  case 2:
                    this._reBootstrapCount = 0;
                    this.handleTokenResponse(req, response, function () {
                      _this.logoutSsoIfNeeded(req, response, function () {
                        callback(response);
                      });
                    });
                    _a.label = 3;
                  case 3:
                    return [2 /*return*/];
                }
              });
            });
          };
          WebAdapter.prototype.onSDKEvent = function (eventObject) {};
          WebAdapter.prototype.getTokenParam = function (APIKey, paramName) {
            return tokenStore.getTokenParam(APIKey, paramName);
          };
          WebAdapter.prototype.establishSession = function () {
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var oURLParams;
              var _this = this;
              return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    oURLParams = window.gigya.utils.URL.getParamsFromURL(
                      document.location.href
                    );
                    if (
                      !(
                        oURLParams['gig_actions'] === 'sso.login' &&
                        !this.hasSessionToken() &&
                        oURLParams['authCode']
                      )
                    )
                      return [3 /*break*/, 2];
                    return [
                      4 /*yield*/,
                      tokenStore.setFromAuthCode(oURLParams['authCode']),
                    ];
                  case 1:
                    _a.sent();
                    return [2 /*return*/, this.hasSessionToken()];
                  case 2:
                    return [
                      4 /*yield*/,
                      new gigya.Promise(function (resolve) {
                        return _this.isSessionValid(
                          undefined,
                          function (isValid) {
                            return resolve(isValid);
                          }
                        );
                      }),
                    ];
                  case 3:
                    return [2 /*return*/, _a.sent()];
                }
              });
            });
          };
          WebAdapter.prototype.checkReturnFromURL = function () {
            var _a;
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              var oURLParams, GIGYA_PREFIXES, params, gigActions, events_1;
              var _this = this;
              return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                  case 0:
                    oURLParams = window.gigya.utils.URL.getParamsFromURL(
                      document.location.href
                    );
                    GIGYA_PREFIXES = new RegExp(
                      constants_1.GIGYA_INTERNAL_PARAM_PREFIX +
                        '|' +
                        constants_1.GIGYA_PARAM_PREFIX
                    );
                    params = window.gigya.utils.object.removePropertiesPrefix(
                      oURLParams,
                      GIGYA_PREFIXES
                    );
                    gigActions = oURLParams['gig_actions'];
                    if (gigActions === 'sso.login' && !oURLParams['authCode']) {
                      this.syncSsoLogin(params);
                    }
                    if (!(gigActions === 'magicLink')) return [3 /*break*/, 2];
                    return [4 /*yield*/, this.handleMagicLink(params)];
                  case 1:
                    _b.sent();
                    _b.label = 2;
                  case 2:
                    if (gigActions === 'confirmInvite') {
                      InternalFlows_1.checkGroupInvitation(params);
                    }
                    if (!this.shouldFinalizeLinkAccountsV2(oURLParams))
                      return [3 /*break*/, 4];
                    return [4 /*yield*/, this.finalizeLinkAccounts(oURLParams)];
                  case 3:
                    _b.sent();
                    _b.label = 4;
                  case 4:
                    if (!oURLParams['gig_events']) {
                      return [2 /*return*/];
                    }
                    if (
                      oURLParams['errorCode'] ==
                      GSErrors_1.GSErrors.ACCOUNTS_LINKED
                    ) {
                      window.gigya.accounts.finalizeRegistration({
                        regToken: oURLParams['regToken'],
                        callback: function () {
                          var _a;
                          return (_a = _this._ssoService) === null ||
                            _a === void 0
                            ? void 0
                            : _a.setToken(
                                tokenStore.get(),
                                oURLParams['expires_in'] ||
                                  consts_1.SessionExpiration.Forever
                              );
                        },
                      });
                    }
                    if (
                      !(
                        oURLParams['errorCode'] == GSErrors_1.GSErrors.OK &&
                        tokenStore.get() != null
                      )
                    )
                      return [3 /*break*/, 6];
                    window.gigya.logger.info(
                      'returned from redirection with error code'
                    );
                    return [
                      4 /*yield*/,
                      (_a = this._ssoService) === null || _a === void 0
                        ? void 0
                        : _a.setToken(
                            tokenStore.get(),
                            oURLParams['expires_in'] ||
                              consts_1.SessionExpiration.Forever
                          ),
                    ];
                  case 5:
                    _b.sent();
                    events_1 = oURLParams['gig_events'].split(',');
                    // Accounts is enabled
                    if (
                      window.gigya.utils.array.indexOf(
                        events_1,
                        'accounts.login'
                      ) !== -1
                    ) {
                      window.gigya.accounts.getAccountInfo({
                        extraProfileFields: 'samlData',
                        include:
                          window.gigya.utils.stringUtils.mergeCommaSeparatedValues(
                            'profile,data,userinfo',
                            window.gigya.thisScript.globalConf['include']
                          ),
                        callback: function (accountInfoRes) {
                          var accountsEvent = {
                            errorCode: 0,
                            eventName: 'accounts.login',
                          };
                          window.gigya.utils.object.extractProperties(
                            accountInfoRes,
                            accountsEvent,
                            'signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|profile|data|id_token'
                          );
                          window.gigya.events.global.dispatchWhenHandlerAdded(
                            accountsEvent
                          );
                          if (
                            window.gigya.utils.array.indexOf(
                              events_1,
                              'socialize.login'
                            ) !== -1
                          ) {
                            var socializeEvent =
                              window.gigya._.addUserInfoToEvent(
                                accountInfoRes,
                                {
                                  errorCode: 0,
                                  eventName: 'socialize.login',
                                },
                                true
                              );
                            window.gigya.events.global.dispatchWhenHandlerAdded(
                              socializeEvent
                            );
                          }
                        },
                      });
                    } else {
                      window.gigya.socialize.getUserInfo({
                        signIDs: true,
                        extraFields: 'samlData',
                        callback: function (userInfoRes) {
                          for (var i = 0; i < events_1.length; i++) {
                            var oEvent = window.gigya._.addUserInfoToEvent(
                              userInfoRes,
                              {
                                errorCode: 0,
                                eventName: events_1[i],
                              },
                              true
                            );
                            window.gigya.events.global.dispatchWhenHandlerAdded(
                              oEvent
                            );
                          }
                        },
                      });
                    }
                    _b.label = 6;
                  case 6:
                    return [2 /*return*/];
                }
              });
            });
          };
          WebAdapter.prototype.handleMagicLink = function (magicLinkParams) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              return tslib_1.__generator(this, function (_a) {
                return [
                  2 /*return*/,
                  new gigya.Promise(function (resolve) {
                    window.gigya.accounts.auth.magiclink.email.login(
                      tslib_1.__assign(tslib_1.__assign({}, magicLinkParams), {
                        ignoreApiQueue: true,
                        callback: function (response) {
                          if (
                            (response === null || response === void 0
                              ? void 0
                              : response.errorCode) !== GSErrors_1.GSErrors.OK
                          ) {
                            window.gigya.events.global.dispatchWhenHandlersAdded(
                              ['accounts.error', 'socialize.error'],
                              response
                            );
                          }
                          resolve();
                        },
                      })
                    );
                  }),
                ];
              });
            });
          };
          WebAdapter.prototype.finalizeLinkAccounts = function (params) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              var providerSession, payload, response, error_2;
              return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    _a.trys.push([0, 2, , 3]);
                    providerSession =
                      linkAccountsHelper_1.getProviderSessionForLinkAccountsAfterRedirect(
                        params
                      );
                    payload = {
                      ignoreApiQueue: true,
                      ignoreInterruptions: true,
                      loginMode: LoginModes_1.LoginModes.connect.name,
                      providerSessions:
                        linkAccountsHelper_1.extractProviderSessions(
                          providerSession
                        ),
                    };
                    return [
                      4 /*yield*/,
                      promise_1.promisify(
                        window.gigya.accounts.notifySocialLogin,
                        payload
                      ),
                    ];
                  case 1:
                    response = _a.sent();
                    if (response.errorCode !== GSErrors_1.GSErrors.OK) {
                      window.gigya.events.global.dispatchWhenHandlersAdded(
                        ['accounts.error', 'socialize.error'],
                        response
                      );
                    }
                    return [3 /*break*/, 3];
                  case 2:
                    error_2 = _a.sent();
                    window.gigya.events.global.dispatchWhenHandlersAdded(
                      ['accounts.error', 'socialize.error'],
                      error_2
                    );
                    return [3 /*break*/, 3];
                  case 3:
                    return [2 /*return*/];
                }
              });
            });
          };
          WebAdapter.prototype.shouldFinalizeLinkAccountsV2 = function (
            urlParams
          ) {
            return (
              Number(urlParams.errorCode) === GSErrors_1.GSErrors.OK &&
              linkAccountsHelper_1.hasProviderSessionForLinkAccountsInParamsAfterRedirect(
                urlParams
              )
            );
          };
          WebAdapter.prototype.setNewLoginTokenFromResponse = function (
            req,
            response,
            callback
          ) {
            var _a;
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              var newLoginToken, expiresIn, sessionExpiration, apiKey;
              return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                  case 0:
                    newLoginToken = response['sessionInfo']
                      ? response['sessionInfo']['login_token']
                      : response['login_token'];
                    if (!newLoginToken) return [3 /*break*/, 6];
                    if (!this.isFakeToken(newLoginToken))
                      return [3 /*break*/, 2];
                    window.gigya.logger.info(
                      'fake login token returned (no gmid) - forcing bootstrap'
                    );
                    return [4 /*yield*/, this.bootstrapApiService(true)];
                  case 1:
                    _b.sent();
                    window.gigya.logger.info('resending the login request');
                    req.send();
                    return [2 /*return*/];
                  case 2:
                    expiresIn =
                      response['sessionInfo'] != null
                        ? response['sessionInfo']['expires_in']
                        : response['expires_in'];
                    sessionExpiration = req.params['sessionExpiration'];
                    if (
                      (!expiresIn || expiresIn == 0) &&
                      sessionExpiration < 0
                    ) {
                      expiresIn =
                        window.gigya.utils.cookie.getInfiniteExpirationTimeInSeconds();
                    }
                    apiKey = req.params['APIKey'];
                    if (
                      window.gigya.utils.toggles.isOn(
                        WebAdapter.serverGltToggleName
                      )
                    ) {
                      this.setLoginTokenIfNotExist(
                        apiKey,
                        newLoginToken,
                        expiresIn,
                        sessionExpiration
                      );
                    } else {
                      tokenStore.set(
                        apiKey,
                        newLoginToken,
                        expiresIn,
                        sessionExpiration
                      );
                    }
                    this.getStorage().removeItem(
                      'gltexp_' + req.params['APIKey']
                    ); // Clear cookie, will propagate into SSO store.
                    window.gigya.legacyReports.trackAddressBarShares();
                    if (
                      !(
                        window.gigya.partnerSettings.ssoKey &&
                        FlagService_1.FlagService.setGroupApiDomainAfterLogin
                      )
                    )
                      return [3 /*break*/, 4];
                    return [
                      4 /*yield*/,
                      this._ssoService.setGroupApiDomain(
                        window.gigya._.getApiDomain()
                      ),
                    ];
                  case 3:
                    _b.sent();
                    _b.label = 4;
                  case 4:
                    return [
                      4 /*yield*/,
                      (_a = this._ssoService) === null || _a === void 0
                        ? void 0
                        : _a.setToken(newLoginToken, expiresIn),
                    ];
                  case 5:
                    _b.sent();
                    _b.label = 6;
                  case 6:
                    callback();
                    return [2 /*return*/];
                }
              });
            });
          };
          WebAdapter.prototype.setLoginTokenIfNotExist = function (
            apiKey,
            login_token,
            expiresIn,
            sessionExpiration
          ) {
            if (
              !tokenStore.get(apiKey) ||
              tokenStore.get(apiKey) !== login_token
            ) {
              tokenStore.set(apiKey, login_token, expiresIn, sessionExpiration);
              window.gigya.logger.info('glt cookie was set by javascript', {
                login_token: login_token,
              });
            } else {
              window.gigya.logger.info('glt cookie was set by server', {
                login_token: login_token,
              });
            }
          };
          WebAdapter.prototype.isFakeToken = function (token) {
            return token.split('.')[1] == 'ffs';
          };
          WebAdapter.prototype.onInvalidTokenResponse = function (
            req,
            callback
          ) {
            var _a;
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              var tokenResponse;
              return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                  case 0:
                    if (req.paramsLoginToken) {
                      // Do not attempt to retry if loginToken was provided from the parameters
                      callback();
                      return [2 /*return*/];
                    }
                    return [
                      4 /*yield*/,
                      (_a = this._ssoService) === null || _a === void 0
                        ? void 0
                        : _a.getToken(),
                    ];
                  case 1:
                    tokenResponse = _b.sent();
                    if (
                      !(
                        tokenResponse &&
                        tokenResponse.login_token &&
                        tokenResponse.login_token.split('|')[0] !==
                          req.sentLoginToken &&
                        !req.paramsLoginToken
                      )
                    )
                      return [3 /*break*/, 3];
                    return [4 /*yield*/, this.bootstrapApiService()];
                  case 2:
                    _b.sent();
                    tokenStore.setFromSsoResponse(
                      tokenResponse,
                      req.params['APIKey']
                    );
                    req.params['login_token'] = undefined; // remove the login token from previous attempt
                    req.send();
                    return [3 /*break*/, 4];
                  case 3:
                    tokenStore.remove(req.params['APIKey']);
                    // If the method doesn't require a session, try again without a login token.
                    if (!req.settings.requiresSession()) {
                      delete req.params['login_token'];
                      delete req.sentLoginToken;
                      req.send(callback);
                    } else {
                      callback();
                    }
                    _b.label = 4;
                  case 4:
                    return [2 /*return*/];
                }
              });
            });
          };
          WebAdapter.prototype.handleTokenResponse = function (
            req,
            res,
            callback
          ) {
            var _a;
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              var _this = this;
              return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                  case 0:
                    res = window.gigya.utils.object.clone(res);
                    if (
                      res['errorCode'] ==
                      GSErrors_1.GSErrors.SESSION_EXPIRED_RETRY
                    ) {
                      // Session_expired_retry - when a provider session expires.
                      // The method should deal with retry when provider SDK is up.
                      if (this.shouldWaitForService(req, res)) {
                        return [2 /*return*/];
                      }
                    } else if (
                      res['errorCode'] ==
                      GSErrors_1.GSErrors.INVALID_GMID_TICKET
                    ) {
                      // Invalid_gmid_ticket
                      this._gmidTicket = null;
                      window.gigya.utils.localStorage.removeItem('_gig_gmidt');
                    }
                    if (
                      req.sentLoginToken &&
                      window.gigya._.logoutMethods[req.methodName] &&
                      res['errorCode'] == GSErrors_1.GSErrors.OK &&
                      res['logoutActiveSession']
                    ) {
                      this.clearSession(req.params);
                    }
                    // Persist dynamic expiration signature to SSO if necessary.
                    if (
                      window.gigya.partnerSettings.ssoKey &&
                      req.sentLoginToken &&
                      res['errorCode'] == GSErrors_1.GSErrors.OK &&
                      req.params['loginTokenExp']
                    ) {
                      (_a = this._ssoService) === null || _a === void 0
                        ? void 0
                        : _a.setTokenExpiration(req.params['loginTokenExp']);
                    }
                    if (!(!this.hasSessionToken() && res['authCode']))
                      return [3 /*break*/, 2];
                    return [
                      4 /*yield*/,
                      tokenStore.setFromAuthCode(res['authCode']),
                    ];
                  case 1:
                    _b.sent();
                    return [3 /*break*/, 3];
                  case 2:
                    this.setNewLoginTokenFromResponse(req, res, function () {
                      if (
                        req.sentLoginToken &&
                        res['errorCode'] ==
                          GSErrors_1.GSErrors.UNAUTHORIZED_USER
                      ) {
                        _this.onInvalidTokenResponse(req, callback);
                      } else {
                        callback();
                      }
                    });
                    _b.label = 3;
                  case 3:
                    return [2 /*return*/];
                }
              });
            });
          };
          WebAdapter.prototype.logoutSsoIfNeeded = function (
            req,
            res,
            callback
          ) {
            var _a;
            return tslib_1.__awaiter(this, void 0, void 0, function () {
              var logoutRes, removeAfter;
              return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                  case 0:
                    if (
                      !(
                        window.gigya.partnerSettings.ssoKey &&
                        window.gigya._.logoutMethods[req.methodName] &&
                        res['errorCode'] == GSErrors_1.GSErrors.OK &&
                        res['logoutActiveSession']
                      )
                    )
                      return [3 /*break*/, 4];
                    if (
                      !(
                        document.location.href !=
                        window.gigya.partnerSettings.ssoLogoutUrl
                      )
                    )
                      return [3 /*break*/, 2];
                    return [
                      4 /*yield*/,
                      (_a = this._ssoService) === null || _a === void 0
                        ? void 0
                        : _a.logout(),
                    ];
                  case 1:
                    logoutRes = _b.sent();
                    removeAfter = void 0;
                    if (req.params['sustainLogoutURLs'] !== undefined) {
                      removeAfter = !req.params['sustainLogoutURLs'];
                    }
                    this.loadLogoutUrls(
                      logoutRes['logoutURLs'],
                      callback,
                      {
                        UID: res['UID'],
                        UIDSignature: res['UIDSignature'],
                        signatureTimestamp: res['signatureTimestamp'],
                      },
                      removeAfter
                    );
                    return [3 /*break*/, 3];
                  case 2:
                    callback();
                    _b.label = 3;
                  case 3:
                    return [3 /*break*/, 5];
                  case 4:
                    callback();
                    _b.label = 5;
                  case 5:
                    return [2 /*return*/];
                }
              });
            });
          };
          WebAdapter.prototype.loadLogoutUrls = function (
            logoutUrlsList,
            callback,
            queryStringParams,
            removeAfter
          ) {
            var loadedLength = 0;
            var logoutUrls = logoutUrlsList ? logoutUrlsList.split(',') : [];
            var fnLoaded = function () {
              loadedLength++;
              if (loadedLength > logoutUrls.length) {
                callback();
              }
            };
            for (var i = 0; i < logoutUrls.length; i++) {
              if (!logoutUrls[i]) {
                fnLoaded(); // mark site as loaded if no url to go to
                continue;
              }
              var url = window.gigya.utils.URL.addParamsToURL(
                logoutUrls[i],
                queryStringParams
              );
              this.loadLogoutUrl(url, fnLoaded, removeAfter);
            }
            fnLoaded(); // make sure call is made at least once even if logout URLs list is empty
          };
          WebAdapter.prototype.loadLogoutUrl = function (
            url,
            callback,
            removeAfter
          ) {
            if (removeAfter === void 0) {
              removeAfter = 5000;
            }
            var ifr = document.createElement('iframe');
            ifr.src = url;
            ifr.style.position = 'absolute';
            ifr.style.top = '-1000px';
            ifr.style.left = '-1000px';
            var loaded = false;
            var onIfrLoaded = function () {
              loaded = true;
              if (removeAfter !== false) {
                ifr.parentElement.removeChild(ifr);
              }
              callback();
            };
            window.setTimeout(function () {
              if (!loaded) {
                onIfrLoaded();
              }
            }, removeAfter);
            ifr.onload = function () {
              onIfrLoaded();
            };
            window.gigya.utils.DOM.prependToBody(ifr);
          };
          WebAdapter.prototype.shouldWaitForService = function (
            request,
            response
          ) {
            if (request.params['retryPossible']) {
              request.params['retryPossible'] = false;
              window.gigya.external.facebook.runWhenLoaded(function () {
                request.send();
              });
              return true;
            }
            return false;
          };
          WebAdapter.prototype.getGmidTicket = function () {
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              return tslib_1.__generator(this, function (_a) {
                if (this._gmidTicket) {
                  // if it exists, each time we use gmidTicket we need to refresh it.
                  this.refreshGmidTicket();
                }
                return [2 /*return*/, this._gmidTicket];
              });
            });
          };
          WebAdapter.prototype.refreshGmidTicket = function () {
            var _this = this;
            this._apiService
              .getGmidTicket(true)
              .then(function (gmidTicketData) {
                return _this.setGmidTicket(gmidTicketData);
              });
          };
          WebAdapter.prototype.setGmidTicket = function (gmidTicketData) {
            var _this = this;
            if (!gmidTicketData || !gmidTicketData.gmidTicket) {
              window.gigya.logger.info('clean gmidTicket');
              delete this._gmidTicket;
            } else {
              window.gigya.logger.info('set gmidTicket (set auto-refresh)');
              this._gmidTicket = gmidTicketData.gmidTicket;
              var nextRuntimeInterval = this.calculateGmidTicketNextRun(
                gmidTicketData.expirationTime
              );
              setTimeout(function () {
                return _this.refreshGmidTicket();
              }, nextRuntimeInterval);
            }
          };
          Object.defineProperty(WebAdapter.prototype, 'bootstrapIndication', {
            get: function () {
              return this.getStorage().getItem(
                WebAdapter.bootstrapIndicationCookieName(
                  window.gigya.thisScript.APIKey
                )
              );
            },
            set: function (hasGmid) {
              var cookieName = WebAdapter.bootstrapIndicationCookieName(
                window.gigya.thisScript.APIKey
              );
              var cookieValue =
                GmidProvider_1.GmidProvider.convertHasGmidToBootstrapIndication(
                  window.gigya,
                  hasGmid
                );
              this.getStorage().setItem(cookieName, cookieValue);
              window.gigya.logger.debug(
                'set bootstrap indication on top frame: ' + cookieValue
              );
            },
            enumerable: true,
            configurable: true,
          });
          WebAdapter.prototype.calculateGmidTicketNextRun = function (
            expirationTime
          ) {
            var gmidTicketExpirationTime = new Date(expirationTime).getTime();
            return gmidTicketExpirationTime - new Date().getTime();
          };
          WebAdapter.prototype.syncSsoLogin = function (ssoLoginParams) {
            var context;
            for (var loginParam in ssoLoginParams) {
              if (typeof context === 'undefined') context = {};
              context[loginParam] = ssoLoginParams[loginParam];
            }
            if (
              FlagService_1.FlagService.verifyLoginOnlyOnce &&
              SessionService_1.sessionData.isSessionVerified(tokenStore.get())
            ) {
              return;
            }
            tokenStore.dispatchLoginEvent({ context: context });
          };
          WebAdapter.serverGltToggleName = 'enableServerGLT';
          WebAdapter.bootstrapIndicationCookieName = function (apiKey) {
            return 'gig_bootstrap_' + apiKey;
          };
          return WebAdapter;
        })();
        exports.WebAdapter = WebAdapter;

        /***/
      },

    /***/ './src/core/Gigya.Js.Adapters.Web/index.ts':
      /*!*************************************************!*\
  !*** ./src/core/Gigya.Js.Adapters.Web/index.ts ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function (
          __webpack_provided_Object_dot_assign
        ) {
          Object.defineProperty(exports, '__esModule', { value: true });
          var ServicesProxyInterfaces = __webpack_require__(
            /*! src/core/ServiceProxy/interfaces */ './src/core/ServiceProxy/interfaces.ts'
          );
          var ProxyListener = __webpack_require__(
            /*! src/core/ServiceProxy/ProxyListener */ './src/core/ServiceProxy/ProxyListener.ts'
          );
          var ServiceProxy = __webpack_require__(
            /*! src/core/ServiceProxy/ServiceProxy */ './src/core/ServiceProxy/ServiceProxy.ts'
          );
          var ServicesProxyUtils = __webpack_require__(
            /*! src/core/ServiceProxy/utils */ './src/core/ServiceProxy/utils.ts'
          );
          var ApiService = __webpack_require__(
            /*! src/core/ApiService/app/ApiService */ './src/core/ApiService/app/ApiService.ts'
          );
          var GroupApiDomainService = __webpack_require__(
            /*! src/core/ApiService/app/GroupApiDomainService */ './src/core/ApiService/app/GroupApiDomainService.ts'
          );
          var ApiServiceInterfaces = __webpack_require__(
            /*! src/core/ApiService/app/interfaces */ './src/core/ApiService/app/interfaces.ts'
          );
          var XhrRequest = __webpack_require__(
            /*! src/core/ApiService/app/XhrRequest */ './src/core/ApiService/app/XhrRequest.ts'
          );
          var Request = __webpack_require__(
            /*! src/core/ApiService/app/Request */ './src/core/ApiService/app/Request.ts'
          );
          var ApiRequest = __webpack_require__(
            /*! src/core/Gigya.Js.Adapters.Web/app/ApiRequest */ './src/core/Gigya.Js.Adapters.Web/app/ApiRequest.ts'
          );
          var BaseRequest = __webpack_require__(
            /*! src/core/Gigya.Js.Adapters.Web/app/BaseRequest */ './src/core/Gigya.Js.Adapters.Web/app/BaseRequest.ts'
          );
          var OauthRequest = __webpack_require__(
            /*! src/core/Gigya.Js.Adapters.Web/app/OauthRequest */ './src/core/Gigya.Js.Adapters.Web/app/OauthRequest.ts'
          );
          var SSOBridge = __webpack_require__(
            /*! src/core/Gigya.Js.Adapters.Web/app/SsoService */ './src/core/Gigya.Js.Adapters.Web/app/SsoService.ts'
          );
          var TokenStore = __webpack_require__(
            /*! src/core/Gigya.Js.Adapters.Web/app/TokenStore */ './src/core/Gigya.Js.Adapters.Web/app/TokenStore.ts'
          );
          var WebAdapter = __webpack_require__(
            /*! src/core/Gigya.Js.Adapters.Web/app/WebAdapter */ './src/core/Gigya.Js.Adapters.Web/app/WebAdapter.ts'
          );
          __webpack_require__(
            /*! src/core/Gigya.Js.Adapters.Web/app/ExternalMethods */ './src/core/Gigya.Js.Adapters.Web/app/ExternalMethods/index.ts'
          );
          if (!window.gigya.services) {
            window.gigya.services = {};
          }
          if (!window.gigya.services.proxy) {
            window.gigya.services.proxy = {};
          }
          if (!window.gigya.services.proxy.utils) {
            window.gigya.services.proxy.utils = {};
          }
          if (!window.gigya._) {
            window.gigya._ = {};
          }
          if (!window.gigya._.apiAdapters) {
            window.gigya._.apiAdapters = {};
          }
          if (!window.gigya._.apiAdapters.web) {
            window.gigya._.apiAdapters.web = {};
          }
          if (!window.gigya._.apiAdapters.web.sso) {
            window.gigya._.apiAdapters.web.sso = {};
          }
          if (!window.gigya._.apiAdapters.web.tokenStore) {
            window.gigya._.apiAdapters.web.tokenStore = {};
          }
          __webpack_provided_Object_dot_assign(
            window.gigya.services.proxy,
            ServicesProxyInterfaces,
            ProxyListener,
            ServiceProxy
          );
          __webpack_provided_Object_dot_assign(
            window.gigya.services.proxy.utils,
            ServicesProxyUtils
          );
          __webpack_provided_Object_dot_assign(
            window.gigya.services,
            ApiService,
            GroupApiDomainService,
            ApiServiceInterfaces
          );
          __webpack_provided_Object_dot_assign(
            window.gigya,
            Request,
            XhrRequest
          );
          __webpack_provided_Object_dot_assign(
            window.gigya._.apiAdapters.web,
            ApiRequest,
            BaseRequest,
            OauthRequest,
            WebAdapter
          );
          __webpack_provided_Object_dot_assign(
            window.gigya._.apiAdapters.web.sso,
            SSOBridge
          );
          __webpack_provided_Object_dot_assign(
            window.gigya._.apiAdapters.web.tokenStore,
            TokenStore
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

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/general/linkAccountsHelper.ts':
      /*!**************************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/general/linkAccountsHelper.ts ***!
  \**************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var GSErrors_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/GSErrors */ './src/core/Gigya.Js/app/GSErrors.ts'
        );
        var promise_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/promise */ './src/core/Gigya.Js/app/Utils/promise.ts'
        );
        var phoneNumberUtil_1 = __webpack_require__(
          /*! ./phoneNumberUtil */ './src/core/Gigya.Js.Plugin/app/Utils/general/phoneNumberUtil.ts'
        );
        var LinkAccountsWithRedirectParam;
        (function (LinkAccountsWithRedirectParam) {
          LinkAccountsWithRedirectParam['Provider'] = 'gig_provider';
          LinkAccountsWithRedirectParam['AccessToken'] = 'gig_access_token';
        })(
          (LinkAccountsWithRedirectParam =
            exports.LinkAccountsWithRedirectParam ||
            (exports.LinkAccountsWithRedirectParam = {}))
        );
        function connectAccounts(providerSessionInfo, requestParams) {
          if (requestParams === void 0) {
            requestParams = {};
          }
          return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var providerSessions;
            return tslib_1.__generator(this, function (_a) {
              providerSessions = extractProviderSessions(providerSessionInfo);
              return [
                2 /*return*/,
                promise_1.promisify(
                  window.gigya.accounts.notifySocialLogin,
                  tslib_1.__assign(tslib_1.__assign({}, requestParams), {
                    loginMode: 'connect',
                    providerSessions: providerSessions,
                    ignoreApiQueue: true,
                  })
                ),
              ];
            });
          });
        }
        exports.connectAccounts = connectAccounts;
        function extractProviderSessions(providerSessionInfo) {
          var _a;
          var idToken = providerSessionInfo.idToken,
            provider = providerSessionInfo.provider,
            code = providerSessionInfo.code,
            access_token = providerSessionInfo.access_token,
            lastName = providerSessionInfo.lastName,
            firstName = providerSessionInfo.firstName;
          return (
            (_a = {}),
            (_a[provider] = {
              authToken: access_token,
              idToken: idToken,
              code: code,
              lastName: lastName,
              firstName: firstName,
            }),
            _a
          );
        }
        exports.extractProviderSessions = extractProviderSessions;
        function extractProviderInfoFromResponse(response) {
          if (
            response.errorCode !=
            GSErrors_1.GSErrors.FORCE_LINK_LOGIN_IDENTIFIER_EXISTS
          ) {
            return response;
          }
          var providerSessionInfo = getProviderSessionFromParams(response);
          return tslib_1.__assign(tslib_1.__assign({}, response), {
            providerSessionInfo: providerSessionInfo,
          });
        }
        exports.extractProviderInfoFromResponse =
          extractProviderInfoFromResponse;
        function getLoginId(conflictingAccount) {
          var _a;
          return (
            (conflictingAccount === null || conflictingAccount === void 0
              ? void 0
              : conflictingAccount.loginID) ||
            ((_a =
              conflictingAccount === null || conflictingAccount === void 0
                ? void 0
                : conflictingAccount.emails) === null || _a === void 0
              ? void 0
              : _a[0])
          );
        }
        exports.getLoginId = getLoginId;
        function getObfuscatedPhone(conflictingAccount) {
          var phone = getPhone(conflictingAccount);
          return phoneNumberUtil_1.formatObfuscatedPhoneNumber(phone);
        }
        exports.getObfuscatedPhone = getObfuscatedPhone;
        function getPhone(conflictingAccount) {
          var _a;
          return (_a =
            conflictingAccount === null || conflictingAccount === void 0
              ? void 0
              : conflictingAccount.phones) === null || _a === void 0
            ? void 0
            : _a[0];
        }
        exports.getPhone = getPhone;
        function isLinkAccountsV2Interruption(errorCode) {
          return (
            Number(errorCode) ===
            GSErrors_1.GSErrors.FORCE_LINK_LOGIN_IDENTIFIER_EXISTS
          );
        }
        exports.isLinkAccountsV2Interruption = isLinkAccountsV2Interruption;
        function hasProviderSessionForLinkAccountsInParamsAfterRedirect(
          params
        ) {
          var providerSession =
            getProviderSessionForLinkAccountsAfterRedirect(params);
          return isProviderSessionValid(providerSession);
        }
        exports.hasProviderSessionForLinkAccountsInParamsAfterRedirect =
          hasProviderSessionForLinkAccountsInParamsAfterRedirect;
        function getProviderSessionForLinkAccountsAfterRedirect(params) {
          try {
            var gig_provider = params.gig_provider;
            if (!gig_provider) return {};
            var providerSession =
              window.gigya.utils.JSON.deserialize(gig_provider);
            return providerSession;
          } catch (error) {
            window.gigya.logger.error(
              'Error while getting provider session from params after redirect',
              error
            );
            return {};
          }
        }
        exports.getProviderSessionForLinkAccountsAfterRedirect =
          getProviderSessionForLinkAccountsAfterRedirect;
        function getProviderSessionFromParams(params) {
          if (!params) return null;
          var providerSessionInfo = {
            access_token: params.access_token,
            provider: params.provider,
            provider_uid: params.provider_uid,
            idToken: params.id_token,
            code: params.code,
            lastName: params.lastName,
            firstName: params.firstName,
          };
          return providerSessionInfo;
        }
        exports.getProviderSessionFromParams = getProviderSessionFromParams;
        function isProviderSessionValid(params) {
          return Boolean(
            (params === null || params === void 0 ? void 0 : params.provider) &&
              (params === null || params === void 0
                ? void 0
                : params.access_token)
          );
        }
        exports.isProviderSessionValid = isProviderSessionValid;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/general/phoneNumberUtil.ts':
      /*!***********************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/general/phoneNumberUtil.ts ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function formatObfuscatedPhoneNumber(phoneData) {
          var phone =
            phoneData === null || phoneData === void 0
              ? void 0
              : phoneData.obfuscated;
          return phone === null || phone === void 0
            ? void 0
            : phone.replace(/#/g, '*').replace(/(\*+)/, ' $1 ');
        }
        exports.formatObfuscatedPhoneNumber = formatObfuscatedPhoneNumber;

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

    /***/ './src/core/Gigya.Js/app/InternalFlows.ts':
      /*!************************************************!*\
  !*** ./src/core/Gigya.Js/app/InternalFlows.ts ***!
  \************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var GSErrors_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/GSErrors */ './src/core/Gigya.Js/app/GSErrors.ts'
        );
        var LocalInfo_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/LocalInfo */ './src/core/Gigya.Js/app/LocalInfo.ts'
        );
        var tokenStore = __webpack_require__(
          /*! src/core/Gigya.Js.Adapters.Web/app/TokenStore */ './src/core/Gigya.Js.Adapters.Web/app/TokenStore.ts'
        );
        var localStorageUtils = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/localStorage */ './src/core/Gigya.Js/app/Utils/localStorage.ts'
        );
        var JSONUtils = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/JSON */ './src/core/Gigya.Js/app/Utils/JSON.ts'
        );
        var objectUtils = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/object */ './src/core/Gigya.Js/app/Utils/object.ts'
        );
        var URLUtils = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/URL */ './src/core/Gigya.Js/app/Utils/URL.ts'
        );
        var MessagingMethod;
        (function (MessagingMethod) {
          MessagingMethod[(MessagingMethod['LocalStorageListener'] = 0)] =
            'LocalStorageListener';
          MessagingMethod[(MessagingMethod['PostMessage'] = 1)] = 'PostMessage';
          MessagingMethod[(MessagingMethod['Flash'] = 2)] = 'Flash';
        })(
          (MessagingMethod =
            exports.MessagingMethod || (exports.MessagingMethod = {}))
        );
        function checkCompleteRegistration(res, params, methodName, callback) {
          var screenSet;
          var retry;
          var pending = false;
          var providerSessionInfo;
          if (
            res['errorCode'] == GSErrors_1.GSErrors.AFTER_EMAIL_VERIFICATION
          ) {
            // Handle autoLogin from registration link
            window.gigya.logger.info(
              'finalizing registration after email verification'
            );
            pending = true;
            window.gigya.accounts.finalizeRegistration({
              regToken: res['regToken'],
              ignoreApiQueue: true,
              callback: callback,
            });
          } else if (
            !params['ignoreInterruptions'] &&
            !params['dontHandleScreenSet'] &&
            (((res['regToken'] || params['regToken']) && // has regToken
              (res['errorCode'] ==
                GSErrors_1.GSErrors.OK_WITH_ERROR_LOGIN_IDENTIFIER_EXISTS || // socialLogin/setAccountInfo saved with loginID exist error
                res['errorCode'] ==
                  GSErrors_1.GSErrors.FORCE_LINK_LOGIN_IDENTIFIER_EXISTS || //forceLinking loginId exists
                res['errorCode'] ==
                  GSErrors_1.GSErrors.LOGIN_IDENTIFIER_EXISTS)) || // loginID exists
              res['errorCode'] ==
                GSErrors_1.GSErrors.ACCOUNT_PENDING_REGISTRATION || // pending registration
              res['errorCode'] ==
                GSErrors_1.GSErrors.ACCOUNT_PENDING_VERIFICATION || // pending email verification
              res['errorCode'] == GSErrors_1.GSErrors.ACCOUNT_MISSING_LOGINID || // pending LoginID
              res['errorCode'] ==
                GSErrors_1.GSErrors.ACCOUNT_PENDING_TFA_VERIFICATION || // pending TFA verification
              res['errorCode'] ==
                GSErrors_1.GSErrors.ACCOUNT_PENDING_TFA_REGISTRATION || // pending TFA registration
              res['errorCode'] ==
                GSErrors_1.GSErrors.ACCOUNT_PENDING_RECENT_LOGIN || // pending recent login
              res['errorCode'] == GSErrors_1.GSErrors.PENDING_PASSWORD_CHANGE || // pending password change
              res['errorCode'] == GSErrors_1.GSErrors.PENDING_CODE_VERIFICATION) // pending code verification
          ) {
            if (
              res['errorCode'] ==
              GSErrors_1.GSErrors.FORCE_LINK_LOGIN_IDENTIFIER_EXISTS
            ) {
              providerSessionInfo = {
                access_token: res['access_token'],
                provider: res['provider'],
                provider_uid: res['provider_uid'],
                idToken: res['id_token'],
                code: res['code'],
                lastName: res['lastName'],
                firstName: res['firstName'],
              };
            }
            var newModal;
            if (
              res['errorCode'] ==
              GSErrors_1.GSErrors.ACCOUNT_PENDING_RECENT_LOGIN
            ) {
              retry = true;
              newModal = true;
            }
            if (
              params['defaultMobileRegScreenSet'] &&
              LocalInfo_1.localInfo.isMobile
            ) {
              screenSet = params['defaultMobileRegScreenSet'];
            } else if (params['defaultRegScreenSet']) {
              screenSet = params['defaultRegScreenSet'];
            }
          }
          if (screenSet) {
            window.gigya.logger.info(
              "showing screenset '" +
                screenSet +
                "' for errorCode " +
                res['errorCode']
            );
            window.gigya.logger.group(screenSet);
            window.gigya.accounts.showScreenSet({
              ignoreApiQueue: true,
              newModal: newModal,
              screenSet: screenSet,
              initialMethod: methodName,
              initialResponse: res,
              suppressLoginEvent: params['suppressLoginEvent'],
              providerSessionInfo: providerSessionInfo,
              onError: function (e) {
                callback(res);
              },
              onHide: function (e) {
                window.gigya.logger.groupEnd(screenSet);
                if (e.reason === 'finished' && e.user) {
                  var successResponse = {
                    errorCode: 0,
                    userInfo: e.user,
                    source: e.source,
                  };
                  callback(successResponse, true, retry);
                } else {
                  callback(res);
                }
              },
            });
          } else if (!pending) {
            callback(res);
          }
        }
        exports.checkCompleteRegistration = checkCompleteRegistration;
        function checkGroupInvitation(params) {
          return tslib_1.__awaiter(this, void 0, void 0, function () {
            var confirmation, screenSet;
            return tslib_1.__generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (!params.invitationId) {
                    window.gigya.events.global.dispatchWhenHandlersAdded(
                      ['accounts.error', 'socialize.error'],
                      {
                        status: 'MISSING_REQUIRED_PARAMETER',
                        statusMessage:
                          'Missing required parameter: invitationId',
                        errorCode:
                          GSErrors_1.GSErrors.MISSING_REQUIRED_PARAMETER,
                        errorMessage:
                          'Missing required parameter: invitationId',
                      }
                    );
                  }
                  return [
                    4 /*yield*/,
                    confirmGroupInvitation(params.invitationId),
                  ];
                case 1:
                  confirmation = _a.sent();
                  if (!!confirmation.token) return [3 /*break*/, 2];
                  window.gigya.events.global.dispatchWhenHandlersAdded(
                    ['accounts.error', 'socialize.error'],
                    confirmation
                  );
                  return [3 /*break*/, 5];
                case 2:
                  if (!(tokenStore.get() === null)) return [3 /*break*/, 3];
                  window.gigya.accounts.addEventHandlers({
                    onLogin: function () {
                      return tslib_1.__awaiter(
                        this,
                        void 0,
                        void 0,
                        function () {
                          return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                              case 0:
                                return [
                                  4 /*yield*/,
                                  finalizeGroupInvitation(confirmation.token),
                                ];
                              case 1:
                                _a.sent();
                                return [2 /*return*/];
                            }
                          });
                        }
                      );
                    },
                  });
                  screenSet = LocalInfo_1.localInfo.isMobile
                    ? window.gigya.thisScript.globalConf
                        .defaultMobileRegScreenSet
                    : window.gigya.thisScript.globalConf.defaultRegScreenSet;
                  window.gigya.accounts.showScreenSet({
                    ignoreApiQueue: true,
                    screenSet: screenSet,
                  });
                  return [3 /*break*/, 5];
                case 3:
                  return [
                    4 /*yield*/,
                    finalizeGroupInvitation(confirmation.token),
                  ];
                case 4:
                  _a.sent();
                  _a.label = 5;
                case 5:
                  return [2 /*return*/];
              }
            });
          });
        }
        exports.checkGroupInvitation = checkGroupInvitation;
        function confirmGroupInvitation(invitationId) {
          return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            return tslib_1.__generator(this, function (_a) {
              return [
                2 /*return*/,
                new gigya.Promise(function (resolve) {
                  window.gigya.accounts.groups.invitationConfirm({
                    ignoreApiQueue: true,
                    invitationId: invitationId,
                    callback: resolve,
                  });
                }),
              ];
            });
          });
        }
        function finalizeGroupInvitation(token) {
          return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
              return [
                2 /*return*/,
                new gigya.Promise(function (resolve) {
                  window.gigya.accounts.groups.finalizeInvitation({
                    ignoreApiQueue: true,
                    token: token,
                    callback: function (result) {
                      if (result.errorCode !== GSErrors_1.GSErrors.OK) {
                        window.gigya.events.global.dispatchWhenHandlersAdded(
                          ['accounts.error', 'socialize.error'],
                          result
                        );
                      } else {
                        window.gigya.events.global.dispatchWhenHandlersAdded(
                          [
                            'accounts.finalizeGroupInvitation',
                            'socialize.finalizeGroupInvitation',
                          ],
                          result
                        );
                      }
                      resolve();
                    },
                  });
                }),
              ];
            });
          });
        }
        function getGigyaSettings(group) {
          var gigyaSettings = localStorageUtils.getObject('gigyaSettings');
          return JSONUtils.serialize(gigyaSettings[group]);
        }
        exports.getGigyaSettings = getGigyaSettings;
        function setGigyaSettings(group, settings) {
          var _a;
          var gigyaSettings = localStorageUtils.getObject(
            'gigyaSettings',
            ((_a = {}), (_a[group] = {}), _a)
          );
          for (var p in settings) {
            gigyaSettings[group][p] = settings[p];
          }
          localStorageUtils.setItem(
            'gigyaSettings',
            JSONUtils.serialize(gigyaSettings)
          );
        }
        exports.setGigyaSettings = setGigyaSettings;
        function delGigyaSettings(group) {
          if (!group) {
            localStorageUtils.removeItem('gigyaSettings');
          } else {
            var gigyaSettings = localStorageUtils.getObject('gigyaSettings');
            if (gigyaSettings) {
              delete gigyaSettings[group];
              localStorageUtils.setItem(
                'gigyaSettings',
                JSONUtils.serialize(gigyaSettings)
              );
            }
          }
        }
        exports.delGigyaSettings = delGigyaSettings;
        function handleSpecialFields(o) {
          var collection = window.gigya.socialize.Collection;
          var toTyped = function (arr, ctor) {
            var oarr = [];
            var i = 0;
            var el = arr[i];
            while (el) {
              oarr.push(new ctor(el));
              if (oarr[i].identities) {
                convertIdentitiesArrayToObject(oarr[i]);
              }
              el = arr[++i];
            }
            return oarr;
          };
          if (o.photos) o.photos = new collection(o.photos, 'photoID');
          if (o.albums) o.albums = new collection(o.albums, 'albumID');
          if (o.contacts)
            o.contacts = new collection(
              toTyped(o.contacts, window.gigya.socialize.Contact),
              'email'
            );
          if (o.friend)
            o.friend = new collection(
              toTyped(o.friend, window.gigya.socialize.Friend),
              'UID'
            );
          if (o.user) o.user = new window.gigya.socialize.User(o.user);
          if (o.friends && o.friends instanceof Array) {
            var arUIDs = [];
            for (var i = 0; i < o.friends.length; i++) {
              arUIDs.push(o.friends[i].UID);
            }
            o.UIDs = arUIDs.join(',');
            o.friends = new collection(
              toTyped(o.friends, window.gigya.socialize.Friend),
              'UID'
            );
          }
        }
        exports.handleSpecialFields = handleSpecialFields;
        function convertIdentitiesArrayToObject(o) {
          if (o.identities == null) {
            o.identities = {};
            return;
          }
          if (o.identities.constructor != Array) {
            return;
          }
          var identitiesArray = o.identities;
          o.identities = {};
          for (var i = 0; i < identitiesArray.length; i++) {
            o.identities[identitiesArray[i].provider] =
              new window.gigya.socialize.Identity(identitiesArray[i]);
          }
        }
        exports.convertIdentitiesArrayToObject = convertIdentitiesArrayToObject;
        function addUserInfoToEvent(
          response,
          targetObject,
          addLoginProperties,
          useBasePhotoURL
        ) {
          var oUser = response['user'] || response['userInfo'];
          if (targetObject == null) targetObject = {};
          if (oUser != null) {
            targetObject['user'] = objectUtils.clone(oUser);
            if (response['isLoggedIn'] != null)
              targetObject['user']['isLoggedIn'] = response['isLoggedIn'];
            if (response['isSiteUID'] != null)
              targetObject['user']['isSiteUID'] = response['isSiteUID'];
            if (response['iRank'] != null)
              targetObject['user']['iRank'] = response['iRank'];
          }
          if (addLoginProperties) {
            objectUtils.extractProperties(
              response,
              targetObject,
              'signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|signKeysUIDSignature|dataCenter|id_token|groups'
            );
            if (targetObject['user'] != null) {
              targetObject['UID'] = oUser.UID;
              targetObject['isSiteUID'] = oUser.isSiteUID;
              // isSiteUID is temporary for https://gigya.my.salesforce.com/5004000000T3qcZ
            }
          }
          return targetObject;
        }
        exports.addUserInfoToEvent = addUserInfoToEvent;
        function sendEmailNative(params) {
          var userAction = params['userAction'] || {};
          var subject = userAction['title'] || '';
          var body = userAction['linkBack'] || '';
          document.location.href =
            'mailto:?to=&subject=' +
            URLUtils.URLEncode(subject) +
            '&body=' +
            URLUtils.URLEncode(body);
          window.gigya.socialize.sendEmail(params, { dontSendEmail: true }); // To report that send without sending it
        }
        exports.sendEmailNative = sendEmailNative;

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

    /***/ './src/core/Gigya.Js/app/Services/SiteData.ts':
      /*!****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Services/SiteData.ts ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var localStorage_1 = __webpack_require__(
          /*! ../Utils/localStorage */ './src/core/Gigya.Js/app/Utils/localStorage.ts'
        );
        var object_1 = __webpack_require__(
          /*! ../Utils/object */ './src/core/Gigya.Js/app/Utils/object.ts'
        );
        var _merge = __webpack_require__(
          /*! lodash.merge */ '../node_modules/lodash.merge/index.js'
        );
        var MAX_LIMIT_OF_USERS_PREFERRED_LOGIN_METHODS_PER_SITE = 10;
        var SiteDataService = /** @class */ (function () {
          function SiteDataService() {}
          Object.defineProperty(SiteDataService, 'SITE_PREFERENCES_KEY', {
            get: function () {
              return window.gigya.apiKey + '_preferences';
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(SiteDataService, 'SITE_GIG_KEY', {
            get: function () {
              return window.gigya.apiKey + '_gig';
            },
            enumerable: true,
            configurable: true,
          });
          Object.defineProperty(
            SiteDataService.prototype,
            'didForcedBootstrap',
            {
              get: function () {
                return (
                  this.getDataByKey(SiteDataService.SITE_GIG_KEY)
                    .didForcedBootstrap || null
                );
              },
              set: function (didForcedBootstrap) {
                this.setDataByKey(SiteDataService.SITE_GIG_KEY, {
                  didForcedBootstrap: didForcedBootstrap,
                });
              },
              enumerable: true,
              configurable: true,
            }
          );
          SiteDataService.prototype.getPreferredLoginMethod = function (
            identifier
          ) {
            var _a, _b, _c, _d;
            if (!identifier) {
              return '';
            }
            var userPreferences = this.getDataByKey(
              SiteDataService.SITE_PREFERENCES_KEY
            );
            var usersPreferredLoginMethods =
              (_b =
                (_a =
                  userPreferences === null || userPreferences === void 0
                    ? void 0
                    : userPreferences.authentication) === null || _a === void 0
                  ? void 0
                  : _a.usersPreferredLoginMethods) !== null && _b !== void 0
                ? _b
                : [];
            return (_d =
              (_c = usersPreferredLoginMethods.find(function (user) {
                return user.identifier === identifier;
              })) === null || _c === void 0
                ? void 0
                : _c.preferredLoginMethod) !== null && _d !== void 0
              ? _d
              : '';
          };
          SiteDataService.prototype.setPreferredLoginMethod = function (
            authMethod,
            identifier
          ) {
            var _a, _b, _c, _d;
            if (!identifier) {
              return;
            }
            var userPreferences = this.getDataByKey(
              SiteDataService.SITE_PREFERENCES_KEY
            );
            var usersPreferredLoginMethods = tslib_1.__spreadArrays(
              (_b =
                (_a =
                  userPreferences === null || userPreferences === void 0
                    ? void 0
                    : userPreferences.authentication) === null || _a === void 0
                  ? void 0
                  : _a.usersPreferredLoginMethods) !== null && _b !== void 0
                ? _b
                : []
            );
            var tfaPreferredMethod =
              (_d =
                (_c =
                  userPreferences === null || userPreferences === void 0
                    ? void 0
                    : userPreferences.authentication) === null || _c === void 0
                  ? void 0
                  : _c.tfaPreferredMethod) !== null && _d !== void 0
                ? _d
                : '';
            var isUserExists = usersPreferredLoginMethods.some(function (user) {
              return user.identifier === identifier;
            });
            if (
              this.isMaxLimitUsersPreferredLoginMethodsReached(
                usersPreferredLoginMethods
              ) &&
              !isUserExists
            ) {
              usersPreferredLoginMethods =
                this.removeOldestUserPreferredLoginMethod(
                  usersPreferredLoginMethods
                );
            }
            if (!isUserExists) {
              usersPreferredLoginMethods = this.addUserPreferredLoginMethod(
                usersPreferredLoginMethods,
                { identifier: identifier, preferredLoginMethod: authMethod }
              );
            }
            if (isUserExists) {
              usersPreferredLoginMethods =
                this.refreshExistingUserPreferredLoginMethod({
                  authMethod: authMethod,
                  identifier: identifier,
                  usersPreferredLoginMethods: usersPreferredLoginMethods,
                });
            }
            this.setDataByKey(SiteDataService.SITE_PREFERENCES_KEY, {
              authentication: {
                usersPreferredLoginMethods: usersPreferredLoginMethods,
                tfaPreferredMethod: tfaPreferredMethod,
              },
            });
          };
          SiteDataService.prototype.setScreenVariant = function (
            screenSetId,
            screenId,
            testId,
            variantId
          ) {
            var _a, _b, _c;
            this.setDataByKey(
              SiteDataService.SITE_PREFERENCES_KEY,
              ((_a = {}),
              (_a[screenSetId] = {
                screens:
                  ((_b = {}),
                  (_b[screenId] =
                    ((_c = {}), (_c[testId] = { variant: variantId }), _c)),
                  _b),
              }),
              _a)
            );
          };
          SiteDataService.prototype.getScreenVariant = function (
            screenSetId,
            screenId,
            testId
          ) {
            var _a, _b, _c, _d;
            var preferences = this.getDataByKey(
              SiteDataService.SITE_PREFERENCES_KEY
            );
            return (_d =
              (_c =
                (_b =
                  (_a =
                    preferences === null || preferences === void 0
                      ? void 0
                      : preferences[screenSetId]) === null || _a === void 0
                    ? void 0
                    : _a.screens) === null || _b === void 0
                  ? void 0
                  : _b[screenId]) === null || _c === void 0
                ? void 0
                : _c[testId]) === null || _d === void 0
              ? void 0
              : _d.variant;
          };
          SiteDataService.prototype.getDataByKey = function (key) {
            return localStorage_1.getObject(key, {});
          };
          SiteDataService.prototype.setDataByKey = function (key, newData) {
            var oldData = this.getDataByKey(key);
            try {
              localStorage_1.setObject(
                key,
                object_1.removeUndefined(_merge(oldData, newData))
              );
            } catch (error) {
              window.gigya.logger.report('Failed to save local site data', {
                error: error,
                key: key,
              });
            }
          };
          SiteDataService.prototype.refreshExistingUserPreferredLoginMethod =
            function (_a) {
              var usersPreferredLoginMethods = _a.usersPreferredLoginMethods,
                identifier = _a.identifier,
                authMethod = _a.authMethod;
              var remainingMethods = this.removeUserPreferredLoginMethod(
                usersPreferredLoginMethods,
                identifier
              );
              return this.addUserPreferredLoginMethod(remainingMethods, {
                identifier: identifier,
                preferredLoginMethod: authMethod,
              });
            };
          SiteDataService.prototype.removeUserPreferredLoginMethod = function (
            usersPreferredLoginMethods,
            identifier
          ) {
            return usersPreferredLoginMethods.filter(function (
              userLoginMethod
            ) {
              return userLoginMethod.identifier !== identifier;
            });
          };
          SiteDataService.prototype.isMaxLimitUsersPreferredLoginMethodsReached =
            function (usersPreferredLoginMethods) {
              return (
                usersPreferredLoginMethods.length ===
                MAX_LIMIT_OF_USERS_PREFERRED_LOGIN_METHODS_PER_SITE
              );
            };
          SiteDataService.prototype.removeOldestUserPreferredLoginMethod =
            function (usersPreferredLoginMethods) {
              var oldestMethod = usersPreferredLoginMethods[0];
              return this.removeUserPreferredLoginMethod(
                usersPreferredLoginMethods,
                oldestMethod === null || oldestMethod === void 0
                  ? void 0
                  : oldestMethod.identifier
              );
            };
          SiteDataService.prototype.addUserPreferredLoginMethod = function (
            usersPreferredLoginMethods,
            userPreferredLogin
          ) {
            return tslib_1.__spreadArrays(usersPreferredLoginMethods, [
              userPreferredLogin,
            ]);
          };
          return SiteDataService;
        })();
        exports.SiteDataService = SiteDataService;
        exports.siteData = new SiteDataService();

        /***/
      },

    /***/ './src/core/Gigya.Js/app/Utils/DOM.ts':
      /*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/DOM.ts ***!
  \********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var LocalInfo_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/LocalInfo */ './src/core/Gigya.Js/app/LocalInfo.ts'
        );
        var viewportUtils = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/viewport */ './src/core/Gigya.Js/app/Utils/viewport.ts'
        );
        var functionsUtils = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/functions */ './src/core/Gigya.Js/app/Utils/functions.ts'
        );
        exports._popupContainers = [];
        exports._pseudoContainers = [];
        var _nextZIndex = 999999999;
        var backListener = null;
        function getNextZIndex() {
          _nextZIndex++;
          return _nextZIndex;
        }
        exports.getNextZIndex = getNextZIndex;
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
        function dispatch(el, eventName) {
          var event;
          try {
            event = new Event(eventName);
          } catch (e) {
            // IE10 and below support
            event = document.createEvent('CustomEvent');
            event.initCustomEvent(eventName, true, true, {});
          }
          el.dispatchEvent(event);
        }
        exports.dispatch = dispatch;
        function addButtonSubmitListener(el, handler, event, debugName) {
          if (event === void 0) {
            event = 'click';
          }
          // Just in case the element does not exist.
          if (!el) {
            return;
          }
          el.setAttribute('role', 'button');
          if (el.getAttribute('tabindex') != '-1') {
            el.setAttribute('tabindex', '0');
          }
          addEventListener(el, event, function (e) {
            return handler(e);
          });
          addEventListener(el, 'keydown', function (e) {
            if ((e.which || e.keyCode) == 13) {
              e.preventDefault();
              handler(e);
            }
          });
        }
        exports.addButtonSubmitListener = addButtonSubmitListener;
        function addEventListener(el, eventName, handler) {
          if (!el || !handler) return;
          if (el.addEventListener) {
            el.addEventListener(eventName, handler, true);
          } else {
            el.attachEvent('on' + eventName, handler);
          }
        }
        exports.addEventListener = addEventListener;
        function addActivationHandler(el, handler) {
          if (!el || !handler) return;
          this.addEventListener(el, 'keydown', function (event) {
            if (event.code === 'Space' || event.code === 'Enter') {
              handler();
            }
          });
          this.addEventListener(el, 'click', handler);
        }
        exports.addActivationHandler = addActivationHandler;
        function removeEventListener(el, eventName, handler) {
          if (!el || !handler) return;
          if (el.removeEventListener) {
            el.removeEventListener(eventName, handler, true);
          } else {
            el.detachEvent('on' + eventName, handler);
          }
        }
        exports.removeEventListener = removeEventListener;
        function disableDefaultEventHandling(event) {
          if (event.preventDefault) {
            event.preventDefault();
          } else if (window.event) {
            window.event.returnValue = false;
          }
        }
        exports.disableDefaultEventHandling = disableDefaultEventHandling;
        function addDialogBackListener(handler) {
          _removeDialogBackListener();
          // This should fire when back is clicked
          backListener = function (e) {
            if (e && e.newURL && e.newURL.indexOf('|gigyaMobileDialog') == -1) {
              handler(e);
              _removeDialogBackListener();
            }
          };
          // hash could change right after the call if it was initiated from a link that didn't return false
          window.setTimeout(function () {
            if (window.location.hash.indexOf('|gigyaMobileDialog') == -1) {
              window.location.hash =
                window.location.hash + '|gigyaMobileDialog';
            }
            addEventListener(window, 'hashchange', backListener);
          }, 50);
        }
        exports.addDialogBackListener = addDialogBackListener;
        function _removeDialogBackListener() {
          if (!backListener) return;
          removeEventListener(window, 'hashchange', backListener);
          backListener = null;
          //restore previous hash
          window.location.hash = window.location.hash.replace(
            '|gigyaMobileDialog',
            ''
          );
        }
        exports._removeDialogBackListener = _removeDialogBackListener;
        function prependToBody(el, document) {
          if (document === void 0) {
            document = window.document;
          }
          if (!document.body) return;
          if (document.body.insertBefore && document.body.firstChild) {
            document.body.insertBefore(el, document.body.firstChild);
          } else {
            // Backward compatibility
            document.body.appendChild(el);
          }
        }
        exports.prependToBody = prependToBody;
        function appendToBody(el, document) {
          if (document === void 0) {
            document = window.document;
          }
          if (!document.body) return;
          document.body.appendChild(el);
        }
        exports.appendToBody = appendToBody;
        function removeElement(el) {
          if (el && el.parentElement) {
            el.parentElement.removeChild(el);
          }
        }
        exports.removeElement = removeElement;
        function isChildOf(child, parent) {
          var directParent = child.parentNode;
          while (directParent) {
            if (parent == directParent) {
              return true;
            }
            directParent = directParent.parentNode;
          }
          return false;
        }
        exports.isChildOf = isChildOf;
        function isVisible(el) {
          while (el) {
            var computedStyle = getComputedStyle(el);
            if (
              computedStyle.display === 'none' ||
              computedStyle.visibility === 'hidden'
            ) {
              return false;
            } else {
              el = el.parentElement;
            }
          }
          return true;
        }
        exports.isVisible = isVisible;
        function getCenteredDivID(name) {
          return (
            'gig_' +
            LocalInfo_1.localInfo.initTime.getTime().toString() +
            '_' +
            name
          );
        }
        exports.getCenteredDivID = getCenteredDivID;
        function createElementWithAttributes(domElemName, domElemAttrs) {
          var newDomElem = document.createElement(domElemName);
          if (domElemAttrs) {
            for (var elemAttr in domElemAttrs) {
              newDomElem[elemAttr] = domElemAttrs[elemAttr];
            }
          }
          return newDomElem;
        }
        exports.createElementWithAttributes = createElementWithAttributes;
        function createTopLevelDiv(id) {
          var el = document.createElement('div');
          if (el.style.zIndex != null) {
            el.style.zIndex = '' + getNextZIndex();
          }
          el.innerHTML = '';
          if (id) {
            el.id = id;
          }
          if (document.body) {
            if (document.body.insertBefore && document.body.firstChild) {
              document.body.insertBefore(el, document.body.firstChild);
            } else if (document.body.appendChild) {
              document.body.appendChild(el);
            }
          }
          return el;
        }
        exports.createTopLevelDiv = createTopLevelDiv;
        function hideByID(id) {
          var el = document.getElementById(id);
          if (el) {
            el.style.display = 'none';
          }
        }
        exports.hideByID = hideByID;
        function showByID(id) {
          var el = document.getElementById(id);
          if (el) {
            el.style.display = LocalInfo_1.localInfo.isIE6
              ? el.tagName == 'TD'
                ? 'table-cell'
                : el.tagName == 'TR'
                ? ''
                : el.tagName == 'TABLE'
                ? ''
                : 'block'
              : '';
          }
        }
        exports.showByID = showByID;
        function clearByID(id) {
          try {
            var c = document.getElementById(id);
            if (c != null) {
              c.innerHTML = '';
            }
          } catch (e) {}
        }
        exports.clearByID = clearByID;
        function getHTMLSize(html, container) {
          var divMeasure = document.createElement('div');
          divMeasure.style.position = 'absolute';
          divMeasure.style.left = '-1000px';
          divMeasure.innerHTML = html;
          container.appendChild(divMeasure);
          var w = divMeasure.offsetWidth;
          var h = divMeasure.offsetHeight;
          divMeasure.parentNode.removeChild(divMeasure);
          return { w: w, h: h };
        }
        exports.getHTMLSize = getHTMLSize;
        function getElementsByClass(parentElement, className, includeParent) {
          if (!parentElement) {
            return [];
          }
          var arEls = [];
          if (includeParent && isElementClass(parentElement, className)) {
            arEls.push(parentElement);
          }
          var els = parentElement.getElementsByTagName('*');
          for (var i = 0; i < els.length; i++) {
            if (isElementClass(els[i], className)) {
              arEls.push(els[i]);
            }
          }
          return arEls || [];
        }
        exports.getElementsByClass = getElementsByClass;
        function getElementsByAttribute(
          parentElement,
          tagName,
          attributeName,
          attributeValue
        ) {
          var arEls = [];
          var els = parentElement.getElementsByTagName(tagName);
          for (var i = 0; i < els.length; i++) {
            if (els[i].getAttribute(attributeName) == attributeValue) {
              arEls.push(els[i]);
            }
          }
          return arEls;
        }
        exports.getElementsByAttribute = getElementsByAttribute;
        function getElementPosition(el) {
          if (!el) {
            return { left: 0, top: 0, bottom: 0, right: 0 };
          }
          var rect = el.getBoundingClientRect();
          var scroll = viewportUtils.getScroll();
          var left = rect.left + scroll.left;
          var top = rect.top + scroll.top;
          return {
            left: left,
            top: top,
            right: left + rect.width,
            bottom: top + rect.height,
          };
        }
        exports.getElementPosition = getElementPosition;
        function addClassToElement(el, className) {
          if (!el) {
            return;
          }
          var existingClasses = el.className ? getClassNames(el) : [];
          var existingOriginalLength = existingClasses.length;
          var newClasses = className.split(' ');
          for (var j in newClasses) {
            var exists = false;
            if (!newClasses[j]) {
              break;
            }
            for (var i in existingClasses) {
              if (existingClasses[i] === newClasses[j]) {
                exists = true;
                break;
              }
            }
            if (!exists) {
              existingClasses.push(newClasses[j]);
            }
          }
          if (existingClasses.length !== existingOriginalLength) {
            el.className = existingClasses.join(' ');
          }
        }
        exports.addClassToElement = addClassToElement;
        function removeClassFromElement(el, className, substring) {
          if (substring === void 0) {
            substring = false;
          }
          if (!el) {
            return;
          }
          var arClass = getClassNames(el);
          for (var i = arClass.length - 1; i >= 0; i--) {
            if (
              arClass[i] === className ||
              (substring && arClass[i].indexOf(className) !== -1)
            ) {
              arClass.splice(i, 1);
            }
          }
          el.className = arClass.join(' ');
        }
        exports.removeClassFromElement = removeClassFromElement;
        function getClassNames(el) {
          var classes = [];
          if (typeof el.className === 'string') {
            classes = el.className.split(' ');
          }
          return classes;
        }
        exports.getClassNames = getClassNames;
        function isElementClass(el, className) {
          if (!el) return false;
          else if (!className) return true;
          else if (!el.className) return false;
          var exists = false;
          var arClass = getClassNames(el);
          for (var i = 0; i < arClass.length; i++) {
            if (arClass[i] === className) {
              exists = true;
              break;
            }
          }
          return exists;
        }
        exports.isElementClass = isElementClass;
        function cancelEvent(event) {
          if (!event) return;
          if ('cancelable' in event)
            // All browsers except <IE9
            event.preventDefault();
          else event.returnValue = false;
        }
        exports.cancelEvent = cancelEvent;
        function createElement(type, name) {
          var divContainer = document.createElement('div');
          name = name || '';
          divContainer.innerHTML =
            '<' +
            type +
            ' name="' +
            name +
            '" id="' +
            name +
            '"></' +
            type +
            '>';
          return divContainer.firstChild;
        }
        exports.createElement = createElement;
        function setSize(container, w, h, center) {
          if (container == null || container.style == null) {
            return;
          }
          if (w) {
            w = '' + w;
            var isWidthPrecentage = w.indexOf('%') > 0;
            if (!isNaN(w) || isWidthPrecentage) {
              var widthValue = '' + (isWidthPrecentage ? w : w + 'px');
              if (container.style.width != widthValue) {
                container.style.width = widthValue;
              }
            }
          }
          if (h) {
            h = '' + h;
            var isHeightPrecentage = h.indexOf('%') > 0;
            if (!isNaN(w) || isHeightPrecentage) {
              var heightValue = '' + (isHeightPrecentage ? h : h + 'px');
              if (container.style.height !== heightValue) {
                container.style.height = heightValue;
              }
            }
          }
          if (center && w && h) {
            if (container.style.zIndex == null || center) {
              container.style.zIndex = '' + getNextZIndex();
            }
            var vp = viewportUtils.getInnerSize();
            var scrl = viewportUtils.getScroll();
            var vpt = scrl.top;
            var vpl = scrl.left;
            container.style.top =
              '' + Math.max(0, vpt + Math.floor((vp.h - h) / 2)) + 'px';
            container.style.left =
              '' + Math.max(0, vpl + Math.floor((vp.w - w) / 2)) + 'px';
            container.style.visibility = '';
          }
        }
        exports.setSize = setSize;
        function createHiddenIframe(src) {
          var ifr = document.createElement('iframe');
          ifr.src = src;
          ifr.style.width = '30px';
          ifr.style.height = '10px';
          ifr.style.position = 'absolute';
          ifr.style.top = '-1000px';
          ifr.style.left = '-1000px';
          if (document.body) {
            appendToBody(ifr);
          } else {
            functionsUtils.invokeOnPageLoad(function () {
              appendToBody(ifr);
            });
          }
          return ifr;
        }
        exports.createHiddenIframe = createHiddenIframe;
        function attributeEncode(value) {
          return value
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\"/g, '&quot;')
            .replace(/\'/g, '&#39;'); // IE8 doesn't support &apos;
        }
        exports.attributeEncode = attributeEncode;
        function manipulateAttributes(
          elements,
          matcher,
          replacePredicate,
          criteria
        ) {
          if (criteria === void 0) {
            criteria = function () {
              return true;
            };
          }
          elements.forEach(function (el) {
            if (!el.attributes) return;
            Array.prototype.slice.call(el.attributes).forEach(function (attr) {
              if (criteria(attr)) {
                attr.value = attr.value.replace(matcher, replacePredicate);
              }
            });
          });
        }
        exports.manipulateAttributes = manipulateAttributes;
        function textNodesUnder(el) {
          var n;
          var textNodes = [];
          var treeWalker = document.createTreeWalker(
            el,
            NodeFilter.SHOW_TEXT,
            null,
            false
          );
          while ((n = treeWalker.nextNode())) {
            textNodes.push(n);
          }
          return textNodes;
        }
        exports.textNodesUnder = textNodesUnder;
        function isHTMLBooleanAttribute(attrName) {
          return (
            [
              'autocomplete',
              'autofocus',
              'checked',
              'disabled',
              'hidden',
              'readonly',
              'required',
              'selected',
            ].indexOf(attrName) > -1
          );
        }
        exports.isHTMLBooleanAttribute = isHTMLBooleanAttribute;
        function isBelongToGigyaFieldset(el) {
          if (!el || el instanceof HTMLFormElement) {
            return false; // end of recursion - element is not a child of a fieldset
          }
          if (isElementClass(el.parentElement, 'gigya-fieldset')) {
            return true;
          }
          return isBelongToGigyaFieldset(el.parentElement);
        }
        exports.isBelongToGigyaFieldset = isBelongToGigyaFieldset;
        function getClosestElement(elem, selector, parent) {
          if (parent === void 0) {
            parent = document;
          }
          setMatchesPolyfill();
          // Get the closest matching element
          for (; elem && elem !== parent; elem = elem.parentNode) {
            if (
              elem === null || elem === void 0 ? void 0 : elem.matches(selector)
            )
              return elem;
          }
          return null;
        }
        exports.getClosestElement = getClosestElement;
        function createElementFromTemplate(template) {
          if (template === void 0) {
            template = '';
          }
          var _a;
          var div = document.createElement('div');
          div.innerHTML =
            template === null || template === void 0 ? void 0 : template.trim();
          return (_a = div.firstChild) !== null && _a !== void 0 ? _a : div;
        }
        exports.createElementFromTemplate = createElementFromTemplate;
        function setMatchesPolyfill() {
          if (!Element.prototype.matches) {
            // @ts-ignore
            Element.prototype.matches =
              Element.prototype.msMatchesSelector ||
              Element.prototype.webkitMatchesSelector;
          }
        }
        function isParentHasClass(nativeElement, className) {
          var _a;
          if (
            (_a =
              nativeElement === null || nativeElement === void 0
                ? void 0
                : nativeElement.classList) === null || _a === void 0
              ? void 0
              : _a.contains(className)
          ) {
            return true;
          }
          if (
            !(nativeElement === null || nativeElement === void 0
              ? void 0
              : nativeElement.parentElement)
          ) {
            return false;
          }
          return isParentHasClass(
            nativeElement === null || nativeElement === void 0
              ? void 0
              : nativeElement.parentElement,
            className
          );
        }
        exports.isParentHasClass = isParentHasClass;

        /***/
      },

    /***/ './src/core/Gigya.Js/app/Utils/HTTP.ts':
      /*!*********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/HTTP.ts ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var objectUtils = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/object */ './src/core/Gigya.Js/app/Utils/object.ts'
        );
        var DOMUtils = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/DOM */ './src/core/Gigya.Js/app/Utils/DOM.ts'
        );
        var Uri_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/Uri */ './src/core/Gigya.Js/app/Utils/Uri.ts'
        );
        function redirect(url, arParams, method, target, workDocument) {
          if (workDocument === void 0) {
            workDocument = window.document;
          }
          if (method && method.toLowerCase() == 'post') {
            var form = workDocument.createElement('form');
            var arFieldsHTML = [];
            form.setAttribute('accept-charset', 'UTF-8');
            form.setAttribute('method', 'POST');
            form.setAttribute('action', url);
            if (target) form.setAttribute('target', target);
            var params = objectUtils.merge(arParams);
            for (var p in params) {
              if (
                (typeof params[p] == 'number' ||
                  typeof params[p] == 'boolean' ||
                  typeof params[p] == 'string') &&
                p != 'eventName'
              ) {
                arFieldsHTML.push(
                  '<textarea name="' +
                    encodeURIComponent(p) +
                    '">' +
                    params[p].toString().replace(/\&/g, '&amp;') +
                    '</textarea>'
                );
              }
            }
            form.innerHTML = arFieldsHTML.join('');
            form.style.display = 'none';
            DOMUtils.appendToBody(form, workDocument);
            form.submit();
          } else {
            var uri = new Uri_1.Uri(url);
            var query = {};
            for (var i = 0; i < arParams.length; i++) {
              var params_1 = arParams[i];
              for (var name in params_1) {
                if (params_1.hasOwnProperty(name)) {
                  var val = params_1[name];
                  query[name] = val;
                }
              }
            }
            uri.addToSearch(query);
            workDocument.location.href = uri.toString();
          }
        }
        exports.redirect = redirect;

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

    /***/ './src/core/Gigya.Js/app/Utils/UrlParamsHelper.ts':
      /*!********************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/UrlParamsHelper.ts ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var constants_1 = __webpack_require__(
          /*! ../../../../accounts/constants */ './src/accounts/constants.ts'
        );
        var _set = __webpack_require__(
          /*! lodash.set */ '../node_modules/lodash.set/index.js'
        );
        var URL_1 = __webpack_require__(
          /*! ./URL */ './src/core/Gigya.Js/app/Utils/URL.ts'
        );
        var UrlParamsHelper = /** @class */ (function () {
          function UrlParamsHelper(_win) {
            var _this = this;
            if (_win === void 0) {
              _win = window.gigya._.WindowProvider;
            }
            this._win = _win;
            this.currentParams = [];
            var params = new URLSearchParams(_win.location().search);
            params.forEach(function (value, key) {
              var urlParam;
              try {
                var decodedKey = URL_1.URLDecode(key);
                var decodedValue = URL_1.URLDecode(value);
                urlParam = { key: decodedKey, value: decodedValue };
              } catch (e) {
                urlParam = { key: key, value: value };
                window.gigya.logger.report('failed to decode url param', {
                  urlParam: urlParam,
                });
              }
              _this.currentParams.push(urlParam);
            });
          }
          UrlParamsHelper.prototype.getGigParamsFromURL = function (
            paramPrefix
          ) {
            if (paramPrefix === void 0) {
              paramPrefix = constants_1.GIGYA_PARAM_PREFIX;
            }
            this.currentParams = this.currentParams.filter(function (param) {
              return (
                param.key.indexOf(paramPrefix) === 0 &&
                param.key !== paramPrefix
              );
            });
            return this;
          };
          UrlParamsHelper.prototype.removePrefix = function (prefix) {
            if (prefix === void 0) {
              prefix = constants_1.GIGYA_PARAM_PREFIX;
            }
            this.currentParams.forEach(function (param) {
              if (param.key.startsWith(prefix)) {
                param.key = param.key.slice(prefix.length);
              }
            });
            return this;
          };
          UrlParamsHelper.prototype.keysToLower = function () {
            this.currentParams.forEach(function (param) {
              param.key = param.key.toLowerCase();
            });
            return this;
          };
          UrlParamsHelper.prototype.removeUnacceptableParams = function (
            unacceptableParams
          ) {
            if (!unacceptableParams) {
              return this;
            }
            this.currentParams = this.currentParams.filter(function (param) {
              return !unacceptableParams.test(param.key);
            });
            return this;
          };
          UrlParamsHelper.prototype.toObject = function () {
            var result = {};
            this.currentParams.forEach(function (param) {
              _set(result, param.key, param.value);
            });
            return result;
          };
          return UrlParamsHelper;
        })();
        exports.default = UrlParamsHelper;

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

    /***/ './src/core/Gigya.Js/app/Utils/functions.ts':
      /*!**************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/functions.ts ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var DOMUtils = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/DOM */ './src/core/Gigya.Js/app/Utils/DOM.ts'
        );
        var cdn_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/cdn */ './src/core/Gigya.Js/app/cdn.ts'
        );
        var LocalInfo_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/LocalInfo */ './src/core/Gigya.Js/app/LocalInfo.ts'
        );
        function callAsync(methodName, params) {
          if (params === void 0) {
            params = {};
          }
          return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            return tslib_1.__generator(this, function (_a) {
              return [
                2 /*return*/,
                new gigya.Promise(function (resolve) {
                  callFunction('gigya.' + methodName, [
                    tslib_1.__assign(tslib_1.__assign({}, params), {
                      callback: resolve,
                    }),
                  ]);
                }),
              ];
            });
          });
        }
        exports.callAsync = callAsync;
        function callFunction(name, arParams) {
          var fn = eval(name);
          var arParts = name.split('.');
          arParts.splice(arParts.length - 1, 1);
          var scope = eval(arParts.join('.'));
          fn.apply(scope, arParams);
        }
        exports.callFunction = callFunction;
        function invokeOnPageLoad(func, completeOnly) {
          if (
            (!document.readyState && document.body) ||
            document.readyState === 'complete' ||
            (!completeOnly &&
              document.readyState === 'interactive' &&
              document.body)
          ) {
            func();
          } else {
            var called_1 = false;
            var fnOnLoad = function () {
              if (!called_1) {
                called_1 = true;
                func();
              }
            };
            window.setTimeout(fnOnLoad, 20000); // fallback - sometimes readystate stays stuck on interactive
            DOMUtils.addEventListener(window, 'load', fnOnLoad);
            DOMUtils.addEventListener(document, 'DOMContentLoaded', fnOnLoad);
          }
        }
        exports.invokeOnPageLoad = invokeOnPageLoad;
        function createAlias(publicName, fnc) {
          var arNameSegments = publicName.split('.');
          var oCurrentSegment = window;
          for (
            var iSegment = 0;
            iSegment < arNameSegments.length - 1;
            iSegment++
          ) {
            var sSegment = arNameSegments[iSegment];
            if (!oCurrentSegment[sSegment]) {
              oCurrentSegment[sSegment] = {};
            }
            oCurrentSegment = oCurrentSegment[sSegment];
          }
          oCurrentSegment[arNameSegments[arNameSegments.length - 1]] = fnc;
        }
        exports.createAlias = createAlias;
        function debounce(fn, delayMilliseconds) {
          var timer = undefined;
          return function () {
            if (timer !== undefined) {
              clearTimeout(timer);
            }
            timer = setTimeout(function () {
              timer = undefined;
              fn();
            }, delayMilliseconds);
          };
        }
        exports.debounce = debounce;
        function addSrcToIFrameIfNeeded(iframe, src) {
          if (src === void 0) {
            src = cdn_1.getCdnResource('/');
          }
          if (
            LocalInfo_1.localInfo.isIOSWebView ||
            (LocalInfo_1.localInfo.isIOS && LocalInfo_1.localInfo.isWeChat)
          ) {
            iframe.setAttribute('src', src);
          }
        }
        exports.addSrcToIFrameIfNeeded = addSrcToIFrameIfNeeded;

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

    /***/ './src/core/Gigya.Js/app/Utils/promise.ts':
      /*!************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/promise.ts ***!
  \************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        function promisify(method, params) {
          if (params === void 0) {
            params = {};
          }
          return new gigya.Promise(function (resolve) {
            method(
              tslib_1.__assign(tslib_1.__assign({}, params), {
                callback: function (response) {
                  resolve(response);
                },
              })
            );
          });
        }
        exports.promisify = promisify;

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

    /***/ './src/core/Gigya.Js/app/Utils/viewport.ts':
      /*!*************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/viewport.ts ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function getScroll() {
          var scrOfX = 0,
            scrOfY = 0;
          if (typeof window.pageYOffset == 'number') {
            scrOfY = window.pageYOffset;
            scrOfX = window.pageXOffset;
          } else if (
            document.body &&
            (document.body.scrollLeft || document.body.scrollTop)
          ) {
            scrOfY = document.body.scrollTop;
            scrOfX = document.body.scrollLeft;
          } else if (
            document.documentElement &&
            (document.documentElement.scrollLeft ||
              document.documentElement.scrollTop)
          ) {
            scrOfY = document.documentElement.scrollTop;
            scrOfX = document.documentElement.scrollLeft;
          }
          return { left: scrOfX, top: scrOfY };
        }
        exports.getScroll = getScroll;
        function getFullSize() {
          var de = document.documentElement;
          var db = document.body;
          var h = de.clientHeight;
          if (h == 0) h = db.clientHeight;
          var w = de.clientWidth;
          if (w == 0) w = db.clientWidth;
          return { w: w, h: h };
        }
        exports.getFullSize = getFullSize;
        function getOrientation() {
          var orientation = parseInt(window['orientation'] || '0');
          if (orientation < 0) orientation += 360;
          return orientation;
        }
        exports.getOrientation = getOrientation;
        function getOuterSize() {
          var h;
          var w;
          var de = document.documentElement;
          var db = document.body;
          if (window.outerHeight) {
            h = window.outerHeight;
            w = window.outerWidth;
          } else {
            h = de.clientHeight;
            if (h == 0) h = db.clientHeight;
            w = de.clientWidth;
            if (w == 0) w = db.clientWidth;
          }
          return { w: w, h: h };
        }
        exports.getOuterSize = getOuterSize;
        function getInnerSize() {
          var h;
          var w;
          var de = document.documentElement;
          var db = document.body;
          if (window.innerHeight) {
            h = window.innerHeight;
            w = window.innerWidth;
          } else {
            h = de.clientHeight;
            if (h == 0) h = db.clientHeight;
            w = de.clientWidth;
            if (w == 0) w = db.clientWidth;
          }
          return { w: w, h: h };
        }
        exports.getInnerSize = getInnerSize;
        function getMiddleCenter() {
          var scroll = getScroll();
          var size = getInnerSize();
          return {
            top: scroll.top + Math.floor(size.h / 2),
            left: scroll.left + Math.floor(size.w / 2),
          };
        }
        exports.getMiddleCenter = getMiddleCenter;
        function isRectHorizontallyVisible(rect) {
          var scroll = getScroll();
          var size = getInnerSize();
          return rect.left >= scroll.left && rect.right <= scroll.left + size.w;
        }
        exports.isRectHorizontallyVisible = isRectHorizontallyVisible;
        function isRectFullyVisible(rect) {
          var scroll = getScroll();
          var size = getInnerSize();
          return (
            rect.top >= scroll.top &&
            rect.bottom <= scroll.top + size.h &&
            rect.left >= scroll.left &&
            rect.right <= scroll.left + size.w
          );
        }
        exports.isRectFullyVisible = isRectFullyVisible;
        function scrollIntoView(element) {
          if (element && element.scrollIntoView) {
            element.scrollIntoView();
          }
        }
        exports.scrollIntoView = scrollIntoView;

        /***/
      },

    /***/ './src/core/Gigya.Js/app/cdn.ts':
      /*!**************************************!*\
  !*** ./src/core/Gigya.Js/app/cdn.ts ***!
  \**************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var selectedCdnHostsIndex = 0;
        exports.CDN_HOSTS = {
          http: [
            'cdn.gigya.com',
            'cdn1.gigya.com',
            'cdn2.gigya.com',
            'cdn3.gigya.com',
          ],
          https: [
            'cdns.gigya.com',
            'cdns1.gigya.com',
            'cdns2.gigya.com',
            'cdns3.gigya.com',
          ],
        };
        function getCdnResource(path) {
          var _a, _b, _c, _d;
          // gigya.thisScript may not exist if loaded for ssoOrig.
          var baseDomain =
            (_b =
              (_a = window.gigya.thisScript) === null || _a === void 0
                ? void 0
                : _a.baseDomain) !== null && _b !== void 0
              ? _b
              : '';
          var protocol =
            (_d =
              (_c = window.gigya.thisScript) === null || _c === void 0
                ? void 0
                : _c.protocol) !== null && _d !== void 0
              ? _d
              : 'https';
          // If no base domain or if base domain ends with .gigya.com, use Gigya CDN.
          // Otherwise use the base domain.
          if (!baseDomain || /cdns?\.gigya\.com$/.test(baseDomain)) {
            var selectedSchemaRepository = exports.CDN_HOSTS[protocol];
            if (selectedSchemaRepository.length <= selectedCdnHostsIndex) {
              selectedCdnHostsIndex = 0;
            }
            baseDomain = selectedSchemaRepository[selectedCdnHostsIndex++];
          }
          // Ensure the path starts with "/".
          if (path) {
            if (path.indexOf('/') !== 0) {
              path = '/' + path;
            }
          }
          return protocol + '://' + baseDomain + (path || '');
        }
        exports.getCdnResource = getCdnResource;
        function getImgCdnResource() {
          return getCdnResource('/gs/i/');
        }
        exports.getImgCdnResource = getImgCdnResource;

        /***/
      },

    /***/ './src/core/Gigya.Js/app/consts.ts':
      /*!*****************************************!*\
  !*** ./src/core/Gigya.Js/app/consts.ts ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var SessionExpiration;
        (function (SessionExpiration) {
          SessionExpiration[(SessionExpiration['Session'] = 0)] = 'Session';
          SessionExpiration[(SessionExpiration['Dynamic'] = -1)] = 'Dynamic';
          SessionExpiration[(SessionExpiration['Forever'] = -2)] = 'Forever'; // one year
        })(
          (SessionExpiration =
            exports.SessionExpiration || (exports.SessionExpiration = {}))
        );

        /***/
      },

    /***/ './src/core/Gigya.Js/interfaces/IApiAdapter.ts':
      /*!*****************************************************!*\
  !*** ./src/core/Gigya.Js/interfaces/IApiAdapter.ts ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var OAuthMode;
        (function (OAuthMode) {
          OAuthMode[(OAuthMode['Social'] = 0)] = 'Social';
          OAuthMode[(OAuthMode['Sso'] = 1)] = 'Sso';
        })((OAuthMode = exports.OAuthMode || (exports.OAuthMode = {})));

        /***/
      },

    /***/ './src/core/ServiceProxy/ProxyListener.ts':
      /*!************************************************!*\
  !*** ./src/core/ServiceProxy/ProxyListener.ts ***!
  \************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var utils = __webpack_require__(
          /*! src/core/ServiceProxy/utils */ './src/core/ServiceProxy/utils.ts'
        );
        var interfaces_1 = __webpack_require__(
          /*! src/core/ServiceProxy/interfaces */ './src/core/ServiceProxy/interfaces.ts'
        );
        var ProxyListener = /** @class */ (function () {
          function ProxyListener(
            _service,
            origin,
            _allowedMethods,
            _target,
            _win
          ) {
            var _this = this;
            if (origin === void 0) {
              origin = utils.getParentUrl();
            }
            if (_allowedMethods === void 0) {
              _allowedMethods = utils.getAllClassMethodsNames(_service);
            }
            if (_target === void 0) {
              _target = window.parent;
            }
            if (_win === void 0) {
              _win = window;
            }
            this._service = _service;
            this.origin = origin;
            this._allowedMethods = _allowedMethods;
            this._target = _target;
            this._win = _win;
            this.stopCancellers = [];
            this._listening = false;
            this.onRequest = function (e) {
              return tslib_1.__awaiter(
                _this,
                void 0,
                gigya.Promise,
                function () {
                  var req, e_1;
                  return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        if (!utils.validateOrigin(this.origin, e.origin))
                          return [3 /*break*/, 7];
                        req = JSON.parse(e.data);
                        _a.label = 1;
                      case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (!interfaces_1.isSignalRequest(req))
                          return [3 /*break*/, 3];
                        return [4 /*yield*/, this.handleSignalRequest(req)];
                      case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                      case 3:
                        // normal request
                        return [4 /*yield*/, this.handleProxyRequest(req)];
                      case 4:
                        // normal request
                        _a.sent();
                        _a.label = 5;
                      case 5:
                        return [3 /*break*/, 7];
                      case 6:
                        e_1 = _a.sent();
                        this.postError({ res: e_1.message || e_1, id: req.id });
                        return [3 /*break*/, 7];
                      case 7:
                        return [2 /*return*/];
                    }
                  });
                }
              );
            };
          }
          Object.defineProperty(ProxyListener.prototype, 'isListening', {
            get: function () {
              return this._listening;
            },
            enumerable: true,
            configurable: true,
          });
          ProxyListener.prototype.listen = function (payload) {
            var _this = this;
            if (!this.isListening) {
              this._win.setTimeout(function () {
                // setTimeout workaround for IE9. else we'll get JSON is undefined
                _this._win.addEventListener('message', _this.onRequest, true);
                _this.postMessage({
                  id: undefined,
                  signal: 'listening',
                  res: payload,
                });
                _this._listening = true;
              }, 1);
            }
          };
          ProxyListener.prototype.postError = function (res) {
            res.signal = 'error';
            this.postMessage(res);
          };
          ProxyListener.prototype.stopListen = function () {
            if (this.isListening) {
              this._win.removeEventListener('message', this.onRequest, true);
              this._listening = false;
            }
          };
          ProxyListener.prototype.handleSignalRequest = function (req) {
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var _a, cancel, res, payload;
              return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                  case 0:
                    _a = req.signal;
                    switch (_a) {
                      case 'stop':
                        return [3 /*break*/, 1];
                    }
                    return [3 /*break*/, 7];
                  case 1:
                    return [4 /*yield*/, this.getCancelResult()];
                  case 2:
                    cancel = _b.sent();
                    res = void 0;
                    if (!!cancel) return [3 /*break*/, 5];
                    this.stopListen();
                    payload = void 0;
                    if (!this.onStop) return [3 /*break*/, 4];
                    payload = this.onStop();
                    if (!payload.then) return [3 /*break*/, 4];
                    return [4 /*yield*/, payload];
                  case 3:
                    payload = _b.sent();
                    _b.label = 4;
                  case 4:
                    res = {
                      id: req.id,
                      signal: 'stop',
                      res: payload,
                    };
                    return [3 /*break*/, 6];
                  case 5:
                    res = {
                      id: req.id,
                      signal: 'error',
                      res: cancel,
                    };
                    _b.label = 6;
                  case 6:
                    this.postMessage(res);
                    return [3 /*break*/, 8];
                  case 7:
                    // ignore
                    return [3 /*break*/, 8];
                  case 8:
                    return [2 /*return*/];
                }
              });
            });
          };
          ProxyListener.prototype.getCancelResult = function () {
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var _i, _a, shouldCancelStop, res;
              return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                  case 0:
                    (_i = 0), (_a = this.stopCancellers);
                    _b.label = 1;
                  case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 5];
                    shouldCancelStop = _a[_i];
                    res = shouldCancelStop();
                    if (!res.then) return [3 /*break*/, 3];
                    return [4 /*yield*/, res];
                  case 2:
                    res = _b.sent();
                    _b.label = 3;
                  case 3:
                    if (res) return [2 /*return*/, res];
                    _b.label = 4;
                  case 4:
                    _i++;
                    return [3 /*break*/, 1];
                  case 5:
                    return [2 /*return*/, undefined];
                }
              });
            });
          };
          ProxyListener.prototype.handleProxyRequest = function (req) {
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var res;
              return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    this.validateRequest(req);
                    return [4 /*yield*/, this.forwardToService(req)];
                  case 1:
                    res = _a.sent();
                    this.postMessage({
                      id: req.id,
                      res: res,
                    });
                    return [2 /*return*/];
                }
              });
            });
          };
          ProxyListener.prototype.validateRequest = function (req) {
            if (
              !req.id ||
              !req.methodName ||
              this._allowedMethods.indexOf(req.methodName) < 0
            ) {
              throw 'proxy request in invalid format';
            }
          };
          ProxyListener.prototype.forwardToService = function (req) {
            return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
              var method, result;
              return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    method = this._service[req.methodName];
                    result = method.apply(this._service, req.params);
                    if (!(result && result.then)) return [3 /*break*/, 2];
                    return [4 /*yield*/, result];
                  case 1:
                    result = _a.sent();
                    _a.label = 2;
                  case 2:
                    return [2 /*return*/, result];
                }
              });
            });
          };
          ProxyListener.prototype.postMessage = function (msg) {
            var message = typeof msg === 'object' ? JSON.stringify(msg) : msg;
            this._target.postMessage(message, this.origin);
          };
          return ProxyListener;
        })();
        exports.ProxyListener = ProxyListener;

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

    /***/ './src/core/ServiceProxy/interfaces.ts':
      /*!*********************************************!*\
  !*** ./src/core/ServiceProxy/interfaces.ts ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function isSignalRequest(req) {
          return Boolean(req.signal);
        }
        exports.isSignalRequest = isSignalRequest;

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