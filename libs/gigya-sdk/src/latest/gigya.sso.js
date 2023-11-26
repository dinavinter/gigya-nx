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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/fidm/Gigya.JS.SSO/app/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/es6-promise/dist/es6-promise.js":
/*!*******************************************************!*\
  !*** ../node_modules/es6-promise/dist/es6-promise.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    var then$$1 = void 0;
    try {
      then$$1 = value.then;
    } catch (error) {
      reject(promise, error);
      return;
    }
    handleMaybeThenable(promise, value, then$$1);
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = true;

  if (hasCallback) {
    try {
      value = callback(detail);
    } catch (e) {
      succeeded = false;
      error = e;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (succeeded === false) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = void 0;
      var error = void 0;
      var didError = false;
      try {
        _then = entry.then;
      } catch (e) {
        didError = true;
        error = e;
      }

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        if (didError) {
          reject(promise, error);
        } else {
          handleMaybeThenable(promise, entry, _then);
        }
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));




/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "../node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/process/browser.js":
/*!******************************************!*\
  !*** ../node_modules/process/browser.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


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

/***/ "./src/accounts/constants.ts":
/*!***********************************!*\
  !*** ./src/accounts/constants.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var EditableTfaProvidersTypes;
(function (EditableTfaProvidersTypes) {
    EditableTfaProvidersTypes[EditableTfaProvidersTypes["gigyaPhone"] = 0] = "gigyaPhone";
    EditableTfaProvidersTypes[EditableTfaProvidersTypes["gigyaTotp"] = 1] = "gigyaTotp";
    EditableTfaProvidersTypes[EditableTfaProvidersTypes["gigyaPush"] = 2] = "gigyaPush";
    EditableTfaProvidersTypes[EditableTfaProvidersTypes["livelink"] = 3] = "livelink";
})(EditableTfaProvidersTypes = exports.EditableTfaProvidersTypes || (exports.EditableTfaProvidersTypes = {}));
exports.gigyaAssertionExpiration = 60 * 5 * 1000;
exports.sensitiveParamsOverride = 'login_token';
exports.GIGYA_PARAM_PREFIX = 'gig_';
exports.GIGYA_INTERNAL_PARAM_PREFIX = exports.GIGYA_PARAM_PREFIX + "i_";
exports.GIGYA_INTERNAL_PARAMS = exports.GIGYA_PARAM_PREFIX + "actions";


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


/***/ }),

/***/ "./src/core/Gigya.Js/app/GigyaGlobals.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/GigyaGlobals.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var ES6Promise = __webpack_require__(/*! es6-promise */ "../node_modules/es6-promise/dist/es6-promise.js");
__webpack_provided_Object_dot_assign(window.gigya, { Promise: ES6Promise });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/core/Gigya.Js/app/LocalInfo.ts":
/*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/LocalInfo.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Local environment info (browser, capabilities, hosting domain)
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var userAgent = navigator.userAgent.toLowerCase();
exports.localInfo = {
    baseDomain: '',
    isBrowserSupportsFilesAPI: (function () {
        return typeof FileReader === 'function' || typeof FileReader === 'object';
    })(),
    initTime: new Date(),
    version: 0,
    pageDomain: document.location.hostname,
    protocol: document.location.protocol == 'http:' ? 'http' : 'https',
    userAgent: userAgent,
    isWin: userAgent.indexOf('win') != -1,
    isIE: userAgent.indexOf('msie') != -1 || (userAgent.indexOf('mozilla') != -1 && userAgent.indexOf('trident') != -1),
    isIE6: userAgent.indexOf('msie 6.') != -1,
    isIE7: userAgent.indexOf('msie 7.') != -1,
    isIE8: userAgent.indexOf('msie 8.') != -1,
    isIE9: userAgent.indexOf('msie 9.') != -1,
    isIE10: userAgent.indexOf('msie 10.') != -1,
    isIE11: userAgent.indexOf('mozilla') != -1 && userAgent.indexOf('trident/7.0') != -1,
    isEdgeLegacy: userAgent.indexOf('edge') != -1,
    isEdge: RegExp(/edg(?!e)/).test(userAgent),
    isIOS: userAgent.indexOf('iphone') != -1 || userAgent.indexOf('ipad') != -1 || userAgent.indexOf('ipod') != -1,
    isSafari534: userAgent.indexOf('safari/534') != -1,
    isWeChat: userAgent.indexOf('micromessenger') != -1,
    iosVersion: (function () {
        if (userAgent.indexOf('applewebkit') != -1 && userAgent.indexOf('version/') != -1) {
            return parseInt(userAgent.split('version/')[1].split(' ')[0]);
        }
        else
            return 0;
    })(),
    isAndroid: userAgent.indexOf('android') != -1,
    isAndroidBrowser: (function (userAgent) {
        if (userAgent.indexOf('mozilla/5.0') === -1)
            return false;
        if (userAgent.indexOf('android 4') === -1)
            return false;
        if (userAgent.indexOf('applewebkit') === -1)
            return false;
        if (userAgent.indexOf('windows phone') !== -1)
            return false;
        // Special user agents found so far that violate the existance of chrome rule
        // Bug 38367 Android Browser: Mozilla/5.0 (Linux; Android 4.2.2; en-us; SAMSUNG GT-I9500 Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Version/1.0 Chrome/18.0.1025.308 Mobile Safari/535.19
        // Bug 40209 Chrome Browser: Mozilla/5.0 (Linux; Android 4.2.2; SAMSUNG SGT-I747 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.93 Mobile Safari/537.36
        // Windows Phone Browser: Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 920) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537
        // Chrome Browser: Mozilla/5.0 (Linux; Android 4.2.2; en-gb; SAMSUNG GT-I9500 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/1.5 Chrome/28.0.1500.94 Mobile Safari/537.36
        var chromeInfo = /chrome\/(\d+)/.exec(userAgent);
        if (!chromeInfo)
            return true;
        var chromeVersion = parseInt(chromeInfo[1]);
        return chromeVersion < 20;
    })(userAgent),
    currentBrowser: '',
    androidVersion: (function () {
        if (userAgent.indexOf('android') != -1) {
            return parseFloat(userAgent.slice(userAgent.indexOf('android') + 8));
        }
        else
            return 0;
    })(),
    isChrome: userAgent.indexOf('chrome') != -1 && userAgent.indexOf('edg') == -1,
    isGoogleBot: userAgent.indexOf('googlebot') != -1,
    isFF: userAgent.indexOf('firefox') != -1,
    isOpera: userAgent.indexOf('opera') != -1,
    isSafari: navigator.appVersion &&
        navigator.appVersion.toLowerCase().indexOf('safari') != -1 &&
        navigator.appVersion.toLowerCase().indexOf('chrome') == -1 &&
        userAgent.indexOf('android') == -1,
    isIOSWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
    isIOSChrome: userAgent.indexOf('crios') != -1,
    isMAC: navigator.appVersion && navigator.appVersion.toLowerCase().indexOf('mac') != -1,
    isWindowsPhone: userAgent.indexOf('windows phone') != -1,
    isFacebookBrowser: userAgent.indexOf('fban') != -1 || userAgent.indexOf('fbav') != -1,
    supportsPostMessage: window.postMessage != null && (userAgent.indexOf('msie') == -1 || userAgent.indexOf('iemobile') != -1),
    supportsLocalStorage: false,
    supportsSessionStorage: false,
    supportsFlash: (function () {
        // http://stackoverflow.com/questions/998245/how-can-i-detect-if-flash-is-installed-and-if-not-display-a-hidden-div-that-inf
        var supportsFlash = false;
        try {
            if (navigator.mimeTypes &&
                navigator.mimeTypes['application/x-shockwave-flash'] != undefined &&
                navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
                supportsFlash = true;
            }
            else {
                var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                if (fo) {
                    supportsFlash = true;
                }
            }
        }
        catch (e) { }
        return supportsFlash;
    })(),
    quirksMode: document.compatMode == 'BackCompat' && userAgent.indexOf('msie') != -1,
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
            }
            catch (e) {
                return true;
            }
        }
        return false;
    })(),
    isOnLine: function () { return navigator.onLine; },
    messagingMethod: 1
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
    }
    catch (ex) {
        // Reasons:
        // - Inside 3rd party API proxy iFrame.
        // - Safari in incognito mode will error with "quota exceeded".
        // - Chrome with 3rd party cookies disabled will throw an error if you access the window.localStorage object in ANY way.
        return false;
    }
};
exports.localInfo.supportsLocalStorage = isStorageEnabled('localStorage');
exports.localInfo.supportsSessionStorage = isStorageEnabled('sessionStorage');
exports.localInfo.isMAC = exports.localInfo.isMAC && !exports.localInfo.isIOS;
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
if (os)
    os += ' ';
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
        if (navigator === void 0) { navigator = window.gigya._.WindowProvider.navigator(); }
        if (screen === void 0) { screen = window.gigya._.WindowProvider.screen(); }
        this.navigator = navigator;
        this.screen = screen;
        this.collectData();
    }
    ClientFeature.prototype.collectData = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var permissionStatus, state, batteryInfo, _h, charging, chargingTime, dischargingTime, level;
            return tslib_1.__generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        this.userAgent = (_a = this.navigator) === null || _a === void 0 ? void 0 : _a.userAgent;
                        this.plugins = Array.from(((_b = this.navigator) === null || _b === void 0 ? void 0 : _b.plugins) || []).map(function (_a) {
                            var name = _a.name, filename = _a.filename, length = _a.length;
                            return ({ name: name, filename: filename, length: length });
                        });
                        this.localTime = new Date().toLocaleTimeString();
                        this.timezoneOffset = new Date().getTimezoneOffset();
                        return [4 /*yield*/, ((_d = (_c = this.navigator) === null || _c === void 0 ? void 0 : _c.permissions) === null || _d === void 0 ? void 0 : _d.query({ name: 'notifications' }))];
                    case 1:
                        permissionStatus = _j.sent();
                        if (permissionStatus) {
                            state = permissionStatus.state;
                            this.permissionStatus = { state: state };
                        }
                        this.webdriver = (_e = this.navigator) === null || _e === void 0 ? void 0 : _e.webdriver;
                        _h = this.navigator.getBattery;
                        if (!_h) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.navigator.getBattery()];
                    case 2:
                        _h = (_j.sent());
                        _j.label = 3;
                    case 3:
                        batteryInfo = _h;
                        if (batteryInfo) {
                            charging = batteryInfo.charging, chargingTime = batteryInfo.chargingTime, dischargingTime = batteryInfo.dischargingTime, level = batteryInfo.level;
                            this.batteryInfo = { charging: charging, chargingTime: chargingTime, dischargingTime: dischargingTime, level: level };
                        }
                        this.features = [
                            ((_f = this.navigator) === null || _f === void 0 ? void 0 : _f.maxTouchPoints) || ((_g = this.navigator) === null || _g === void 0 ? void 0 : _g.msMaxTouchPoints),
                            this.screen.width + "|" + this.screen.height + "|" + this.screen.colorDepth,
                            this.navigator.javaEnabled(),
                            'sendBeacon' in this.navigator
                        ];
                        return [2 /*return*/];
                }
            });
        });
    };
    return ClientFeature;
}());
exports.ClientFeature = ClientFeature;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Logger/baseLogger.ts":
/*!****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Logger/baseLogger.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var interfaces_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Logger/interfaces */ "./src/core/Gigya.Js/app/Logger/interfaces.ts");
var stringParams_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/stringParams */ "./src/core/Gigya.Js/app/Utils/stringParams.ts");
exports.gigErrorReport = 'gigErrorReport';
var defaultLoggerConfig = {
    logLevel: interfaces_1.LogLevel.disabled,
    clientMuteLevel: interfaces_1.ClientMuteLevel.none,
    logTheme: interfaces_1.LogTheme.dark,
};
var themes = (_a = {},
    _a[interfaces_1.LogTheme.none] = [''],
    _a[interfaces_1.LogTheme.dark] = [
        '38f689',
        '009FD4',
        'b381b3',
        '71b6ef',
        '64c162',
        '977bd8',
        'd168a4',
        '4c71d2',
        '84b466',
        '7d638a',
        '799fb7',
        '8fdf98',
        'dc7767',
        '0a70f5',
        '38b159',
        'af721b',
        'bfaf6f',
    ],
    _a[interfaces_1.LogTheme.light] = [
        '40806A',
        '003636',
        '9B59B6',
        'DB0A5B',
        '7928A1',
        '522032',
        '0000E0',
        '00202A',
        '000036',
        '005555',
        '1D781D',
        '4F5A65',
        '765AB0',
        '000000',
        '3C1362',
        '000060',
        '591D77',
    ],
    _a);
var selfLogsCss = 'color: #b0b0b0b0;';
var noCss = '';
var severityThreshold = interfaces_1.LogLevel.warn;
var defaultGroupBehavior = interfaces_1.GroupBehavior.collapsed;
var noopLoggerFn = function (message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
    }
};
var BaseLogger = /** @class */ (function () {
    function BaseLogger(_global) {
        this._global = _global;
        this._groupsStack = [];
        this._currColorIdx = 0;
        this.configKey = 'gig_loggerConfig';
        this._console = this._global.console;
        if (this.isEnabled) {
            this.overrideClientLogs();
        }
    }
    BaseLogger.prototype.getConfig = function () {
        if (!this._config) {
            this._config =
                this.readLoggerConfigFromHash() || // inner frames reads config from hash
                    this.readLoggerConfigFromCookie() || // top frames reads config from cookie
                    defaultLoggerConfig;
        }
        return this._config;
    };
    Object.defineProperty(BaseLogger.prototype, "isEnabled", {
        get: function () {
            return this.getConfig().logLevel > interfaces_1.LogLevel.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLogger.prototype, "logLevel", {
        get: function () {
            return this.getConfig().logLevel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLogger.prototype, "palette", {
        get: function () {
            return themes[this.getConfig().logTheme];
        },
        enumerable: true,
        configurable: true
    });
    BaseLogger.prototype.getNextColor = function () {
        if (this.getConfig().logTheme === interfaces_1.LogTheme.none) {
            return '';
        }
        if (this._currColorIdx >= this.palette.length) {
            this._currColorIdx = 0;
        }
        return "#" + this.palette[this._currColorIdx++];
    };
    Object.defineProperty(BaseLogger.prototype, "currentGroup", {
        get: function () {
            return this._groupsStack[this._groupsStack.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    BaseLogger.prototype.readLoggerConfigFromHash = function () {
        var res = null;
        var loggerConfigStr = stringParams_1.getReqParamValue(location.hash, this.configKey);
        if (loggerConfigStr) {
            try {
                res = JSON.parse(decodeURIComponent(loggerConfigStr));
            }
            catch (e) {
                console.error("[Gigya]: exception while trying to parse logger config from hash", e);
            }
        }
        return res;
    };
    BaseLogger.prototype.readLoggerConfigFromCookie = function () {
        try {
            var res = null;
            var cookie = stringParams_1.getParamValue(document.cookie, this.configKey, ';');
            if (cookie) {
                try {
                    res = JSON.parse(cookie);
                }
                catch (e) {
                    console.error("[Gigya]: exception while trying to parse logger config from cookie", e);
                }
            }
            return res;
        }
        catch (e) {
            // iOS 10 webview throws in some scenarios
            return undefined;
        }
    };
    BaseLogger.prototype.setLoggerConfigCookie = function (loggerConfig) {
        document.cookie = this.configKey + "=" + JSON.stringify(loggerConfig);
    };
    BaseLogger.prototype.overrideClientLogs = function () {
        var _this = this;
        var Proxy = this._global['Proxy'];
        if (!Proxy) {
            return;
        }
        switch (this.getConfig().clientMuteLevel) {
            // do nothing
            case interfaces_1.ClientMuteLevel.none:
                break;
            // replace native console with a dummy
            case interfaces_1.ClientMuteLevel.all:
                this._global.console = new Proxy(this._global.console, {
                    get: function () { return noopLoggerFn; },
                });
                break;
            // override the group api and output a prefixed client log
            case interfaces_1.ClientMuteLevel.normal:
            default:
                this._global.console = new Proxy(this._global.console, {
                    get: function (target, property) {
                        return ['group', 'groupCollapsed', 'groupEnd'].indexOf(property) !== -1
                            ? function () {
                                var _a;
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return (_a = _this._console).log.apply(_a, tslib_1.__spreadArrays(["client has called console." + property], args));
                            }
                            : target[property];
                    },
                });
                break;
        }
    };
    BaseLogger.prototype.getFormattedLogArgs = function (text, logGroup) {
        if (text === void 0) { text = ''; }
        if (logGroup === void 0) { logGroup = this.currentGroup; }
        return {
            text: logGroup ? "%c\u2588" + text : "%c" + text,
            css: logGroup ? "color: " + logGroup.color + ";" : '',
        };
    };
    BaseLogger.prototype.restoreHangingGroups = function (hangingGroups) {
        // restore groups stack after a parent group has ended
        while (hangingGroups.length) {
            // restore the groups stack
            var group = hangingGroups.shift();
            this._groupsStack.push(group);
            // indicate group has been restored
            var logArgs = this.getFormattedLogArgs(" %c[RESTORED - " + group.groupTitle + "]");
            this._console.groupCollapsed(logArgs.text, logArgs.css, selfLogsCss);
        }
    };
    BaseLogger.prototype.endGroup = function (group) {
        var logArgs = this.getFormattedLogArgs(" [END - " + group.groupTitle + "]", group);
        this._console.log(logArgs.text, logArgs.css);
        this._console.groupEnd();
    };
    BaseLogger.prototype.log = function (severity) {
        // log if one of the following
        // [1] logging is enabled and the log's severity is greater or equal to the configured logLevel
        // [2] severity is greater than the threshold but the configured logLevel is not greater than the threshold
        if ((this.isEnabled && severity >= this.logLevel) || // log
            (severity >= severityThreshold && this.logLevel < severityThreshold)) {
            // normalize log level
            var originalLogLevel = interfaces_1.LogLevel[severity];
            var normalizedLogLevel = severity === interfaces_1.LogLevel.debug
                ? interfaces_1.LogLevel[interfaces_1.LogLevel.info] // using console.info for debug level
                : originalLogLevel;
            // get formatted args and return the bound log function
            var logArgs = this.getFormattedLogArgs(" %c[" + originalLogLevel + "]");
            return this._console[normalizedLogLevel].bind(this._console, logArgs.text, logArgs.css, severity <= interfaces_1.LogLevel.info ? selfLogsCss : noCss);
        }
        return noopLoggerFn;
    };
    BaseLogger.prototype.getJsonFromError = function (err) {
        return {
            name: err.name,
            message: err.message,
            stack: err.stack,
        };
    };
    BaseLogger.prototype.errorParser = function (details) {
        var _this = this;
        var formatter = function (k, v) { return v instanceof Error ? _this.getJsonFromError(v) : v; };
        return JSON.parse(JSON.stringify(details, formatter));
    };
    Object.defineProperty(BaseLogger.prototype, "debug", {
        get: function () {
            return this.log(interfaces_1.LogLevel.debug);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLogger.prototype, "info", {
        get: function () {
            return this.log(interfaces_1.LogLevel.info);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLogger.prototype, "warn", {
        get: function () {
            return this.log(interfaces_1.LogLevel.warn);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLogger.prototype, "error", {
        get: function () {
            var _this = this;
            return function (message, details) {
                if (details && typeof details === 'object') {
                    details = _this.errorParser(details);
                }
                _this.log(interfaces_1.LogLevel.error).apply(_this, [message].concat([details]));
                _this.report(message, details);
            };
        },
        enumerable: true,
        configurable: true
    });
    BaseLogger.prototype.group = function (groupTitle, collapsed) {
        var _this = this;
        if (collapsed === void 0) { collapsed = defaultGroupBehavior === interfaces_1.GroupBehavior.collapsed; }
        if (this.isEnabled) {
            var color = this.getNextColor();
            var groupLog = function () {
                var _a, _b;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return (collapsed ? (_a = _this._console).groupCollapsed.apply(_a, args) : (_b = _this._console).group.apply(_b, args));
            };
            this._groupsStack.push({ groupTitle: groupTitle, color: color });
            var logArgs = this.getFormattedLogArgs(" [START - " + groupTitle + "]");
            groupLog(logArgs.text, logArgs.css);
        }
        return {
            end: function () { return _this.groupEnd(groupTitle); },
            endWhen: function (done) {
                if (typeof done == 'function') {
                    done = done();
                }
                if (done && done.then) {
                    done.then(function () { return _this.groupEnd(groupTitle); });
                }
                else {
                    // sync
                    _this.groupEnd(groupTitle);
                }
            },
        };
    };
    BaseLogger.prototype.groupEnd = function (groupTitle) {
        if (this.isEnabled) {
            var hangingGroups = [];
            var currGroup = this._groupsStack.pop(); // get the current active group
            // while the current group is not the same as the one that we want to end and we have other groups in the stack
            while (currGroup.groupTitle !== groupTitle && this._groupsStack.length) {
                hangingGroups.unshift(currGroup); // [1] push it the current group into the temp 'hanging groups' stack
                currGroup = this._groupsStack.pop(); // [2] get the next group in stack
                this._console.groupEnd(); // [3] groupEnd for each group that is not the current group
            }
            // end the group
            this.endGroup(currGroup);
            // resume child groups
            if (hangingGroups.length) {
                this.restoreHangingGroups(hangingGroups);
            }
        }
    };
    BaseLogger.prototype.enable = function (logLevel, clientMuteLevel, logTheme) {
        if (logLevel === void 0) { logLevel = interfaces_1.LogLevel.info; }
        if (clientMuteLevel === void 0) { clientMuteLevel = interfaces_1.ClientMuteLevel.normal; }
        if (logTheme === void 0) { logTheme = interfaces_1.LogTheme.dark; }
        this.setLoggerConfigCookie({ logLevel: logLevel, clientMuteLevel: clientMuteLevel, logTheme: logTheme });
    };
    BaseLogger.prototype.disable = function () {
        this.setLoggerConfigCookie({
            logLevel: interfaces_1.LogLevel.disabled,
            clientMuteLevel: defaultLoggerConfig.clientMuteLevel,
            logTheme: defaultLoggerConfig.logTheme,
        });
    };
    return BaseLogger;
}());
exports.BaseLogger = BaseLogger;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Logger/iFrameLogger.ts":
/*!******************************************************!*\
  !*** ./src/core/Gigya.Js/app/Logger/iFrameLogger.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var baseLogger_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Logger/baseLogger */ "./src/core/Gigya.Js/app/Logger/baseLogger.ts");
var stringParams_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/stringParams */ "./src/core/Gigya.Js/app/Utils/stringParams.ts");
var IFrameLogger = /** @class */ (function (_super) {
    tslib_1.__extends(IFrameLogger, _super);
    function IFrameLogger(_global) {
        if (_global === void 0) { _global = window; }
        var _this = _super.call(this, _global) || this;
        _this._global = _global;
        return _this;
    }
    IFrameLogger.prototype.report = function (message, details, includeStack) {
        if (includeStack === void 0) { includeStack = true; }
        // send the report from the top frame
        try {
            // calculate the top frame origin
            var a = document.createElement('a');
            var domain = stringParams_1.getReqParamValue(location.hash, 'origin') || stringParams_1.getReqParamValue(location.hash, 'd');
            if (!domain)
                return;
            a.href = domain;
            var targetOrigin = a.protocol + "//" + a.hostname + (a.port ? ":" + a.port : '');
            // post message
            this._global.top.postMessage(JSON.stringify({ type: baseLogger_1.gigErrorReport, message: message, details: details, includeStack: includeStack }), targetOrigin);
        }
        catch (e) {
            console.error(e);
        }
    };
    return IFrameLogger;
}(baseLogger_1.BaseLogger));
exports.IFrameLogger = IFrameLogger;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Logger/interfaces.ts":
/*!****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Logger/interfaces.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["disabled"] = 0] = "disabled";
    LogLevel[LogLevel["debug"] = 1] = "debug";
    LogLevel[LogLevel["info"] = 2] = "info";
    LogLevel[LogLevel["warn"] = 3] = "warn";
    LogLevel[LogLevel["error"] = 4] = "error";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var ClientMuteLevel;
(function (ClientMuteLevel) {
    ClientMuteLevel[ClientMuteLevel["none"] = 0] = "none";
    ClientMuteLevel[ClientMuteLevel["normal"] = 1] = "normal";
    ClientMuteLevel[ClientMuteLevel["all"] = 2] = "all";
})(ClientMuteLevel = exports.ClientMuteLevel || (exports.ClientMuteLevel = {}));
var LogTheme;
(function (LogTheme) {
    LogTheme[LogTheme["none"] = 0] = "none";
    LogTheme[LogTheme["dark"] = 1] = "dark";
    LogTheme[LogTheme["light"] = 2] = "light";
})(LogTheme = exports.LogTheme || (exports.LogTheme = {}));
var GroupBehavior;
(function (GroupBehavior) {
    GroupBehavior[GroupBehavior["expanded"] = 0] = "expanded";
    GroupBehavior[GroupBehavior["collapsed"] = 1] = "collapsed";
})(GroupBehavior = exports.GroupBehavior || (exports.GroupBehavior = {}));


/***/ }),

/***/ "./src/core/Gigya.Js/app/Logger/loggerJsonp.ts":
/*!*****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Logger/loggerJsonp.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function loggerJsonp(endpoint, params) {
    var script = document.createElement('script');
    script.src = endpoint + "?" + params;
    script.type = 'text/javascript';
    script.onload = function () {
        document.getElementsByTagName('head')[0].removeChild(script);
    };
    document.getElementsByTagName('head')[0].appendChild(script);
}
exports.loggerJsonp = loggerJsonp;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Logger/main.ts":
/*!**********************************************!*\
  !*** ./src/core/Gigya.Js/app/Logger/main.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var parentLogger_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Logger/parentLogger */ "./src/core/Gigya.Js/app/Logger/parentLogger.ts");
var iFrameLogger_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Logger/iFrameLogger */ "./src/core/Gigya.Js/app/Logger/iFrameLogger.ts");
if (!window.gigya.logger) {
    __webpack_provided_Object_dot_assign(window.gigya, { logger: window === window.top ? new parentLogger_1.ParentLogger() : new iFrameLogger_1.IFrameLogger() });
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/core/Gigya.Js/app/Logger/parentLogger.ts":
/*!******************************************************!*\
  !*** ./src/core/Gigya.Js/app/Logger/parentLogger.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var baseLogger_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Logger/baseLogger */ "./src/core/Gigya.Js/app/Logger/baseLogger.ts");
var loggerJsonp_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Logger/loggerJsonp */ "./src/core/Gigya.Js/app/Logger/loggerJsonp.ts");
var gigyaScriptEl_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/gigyaScriptEl */ "./src/core/Gigya.Js/app/Utils/gigyaScriptEl.ts");
var URLUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/URL */ "./src/core/Gigya.Js/app/Utils/URL.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var Uri_1 = __webpack_require__(/*! ../Utils/Uri */ "./src/core/Gigya.Js/app/Utils/Uri.ts");
var ParentLogger = /** @class */ (function (_super) {
    tslib_1.__extends(ParentLogger, _super);
    function ParentLogger(_global, _errorReportConfig, _canaryConfig, _random, _jsonp) {
        if (_global === void 0) { _global = window; }
        if (_errorReportConfig === void 0) { _errorReportConfig = window.gigya.errorReport; }
        if (_canaryConfig === void 0) { _canaryConfig = window.gigya.canary; }
        if (_random === void 0) { _random = function () { return Math.random() * 100; }; }
        if (_jsonp === void 0) { _jsonp = loggerJsonp_1.loggerJsonp; }
        var _this = _super.call(this, _global) || this;
        _this._global = _global;
        _this._errorReportConfig = _errorReportConfig;
        _this._canaryConfig = _canaryConfig;
        _this._random = _random;
        _this._jsonp = _jsonp;
        var errorReportEnabled = _this._errorReportConfig && _this._errorReportConfig.enabled;
        var runningAsCanary = _this._canaryConfig && _this._canaryConfig.isActive;
        var enrolledToReportErrors = _this.enrollErrorReporting();
        if (errorReportEnabled && (runningAsCanary || enrolledToReportErrors)) {
            _this._isErrorReporter = true;
            _this.setupMessageListener();
            _this._guid = _this.generateGUID();
        }
        return _this;
    }
    ParentLogger.prototype.enrollErrorReporting = function () {
        return (this._errorReportConfig && this._errorReportConfig.probability) >= this._random();
    };
    ParentLogger.prototype.setupMessageListener = function () {
        var _this = this;
        var errorReportMessageListener = function (event) {
            var dc = window.gigya.dataCenter;
            var gigyaDomain = window.gigya.defaultApiDomain.replace(/\./g, '.'); // replace all '.' with '\.'
            var allowedOriginRegex = new RegExp("cdns?." + dc + "." + gigyaDomain + "$");
            if (!event.origin.match(allowedOriginRegex)) {
                return;
            }
            try {
                var data = JSON.parse(event.data);
                if (data.type === baseLogger_1.gigErrorReport) {
                    _this.report(data.message, data.details, data.includeStack);
                }
            }
            catch (e) { } // unexpected event.data
        };
        this._global.addEventListener('message', errorReportMessageListener, false);
    };
    ParentLogger.prototype.getApiKey = function () {
        var apiKey = window.gigya['thisScript'] && window.gigya['thisScript'].APIKey;
        if (!apiKey) {
            var scriptElement = gigyaScriptEl_1.getGigyaScriptElement();
            var URLParams = URLUtils.getParamsFromURL(scriptElement && scriptElement.src, true) || {};
            apiKey = URLParams['apikey'];
        }
        return apiKey;
    };
    ParentLogger.prototype.createReportParams = function (message, details, includeStack) {
        if (details === void 0) { details = {}; }
        if (includeStack === void 0) { includeStack = false; }
        var params = {
            message: message,
            apiKey: this.getApiKey(),
            stack: includeStack ? new Error().stack : '',
            page: LocalInfo_1.localInfo && LocalInfo_1.localInfo.pageDomain,
            browser: LocalInfo_1.localInfo && LocalInfo_1.localInfo.currentBrowser,
            buildVersion: window.gigya.build.version,
            buildNumber: window.gigya.build.number,
            format: 'json',
            sdk: 'web',
        };
        if (typeof details == 'string') {
            details = { message: details };
        }
        details['guid'] = this._guid;
        params['details'] = JSON.stringify(details);
        return params;
    };
    ParentLogger.prototype.report = function (message, details, includeStack, forceReport) {
        if (includeStack === void 0) { includeStack = false; }
        if (forceReport === void 0) { forceReport = false; }
        if (!(forceReport || this._isErrorReporter)) {
            // don't continue if we don't need to report
            return;
        }
        try {
            var reportParams = this.createReportParams(message, details, includeStack);
            var sdkErrorReportEndpoint = location.protocol + "//" + this.apiDomain + "/sdk.errorReport";
            Uri_1.Uri.parse(sdkErrorReportEndpoint)
                .addToSearch(reportParams)
                .fetch(0);
        }
        catch (e) { }
    };
    ParentLogger.prototype.generateGUID = function () {
        try { // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
        catch (e) {
            return '';
        }
    };
    Object.defineProperty(ParentLogger.prototype, "apiDomain", {
        get: function () {
            var _a, _b;
            if (((_a = window.gigya.partnerSettings) === null || _a === void 0 ? void 0 : _a.customAPIDomainPrefix) && (LocalInfo_1.localInfo === null || LocalInfo_1.localInfo === void 0 ? void 0 : LocalInfo_1.localInfo.baseDomain.endsWith(window.gigya._.config.hostedPagesDomain))) {
                return LocalInfo_1.localInfo.baseDomain;
            }
            if (((_b = window.gigya.partnerSettings) === null || _b === void 0 ? void 0 : _b.customAPIDomainPrefix) && LocalInfo_1.localInfo.baseDomain && LocalInfo_1.localInfo.baseDomain !== window.gigya.defaultApiDomain) {
                return window.gigya.partnerSettings.customAPIDomainPrefix + "." + LocalInfo_1.localInfo.baseDomain;
            }
            else {
                return "accounts." + window.gigya.dataCenter + "." + window.gigya.defaultApiDomain;
            }
        },
        enumerable: true,
        configurable: true
    });
    return ParentLogger;
}(baseLogger_1.BaseLogger));
exports.ParentLogger = ParentLogger;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Services/FlagService.ts":
/*!*******************************************************!*\
  !*** ./src/core/Gigya.Js/app/Services/FlagService.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var FlagService = /** @class */ (function () {
    function FlagService() {
    }
    Object.defineProperty(FlagService, "forceWebSdkBootstrap", {
        get: function () {
            return this.get('forceWebSdkBootstrap');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "useGigyaJsBaseDomain", {
        get: function () {
            return this.get('useGigyaJsBaseDomain');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "hideSSOFrame", {
        get: function () {
            return this.get('hideSSOFrame');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "wcagContrastFix", {
        get: function () {
            return this.get('wcagContrastFix');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "newFormLinkInstanceElement", {
        get: function () {
            return this.get('newFormLinkInstanceElement');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "stopSendingReports", {
        get: function () {
            return this.get('stopSendingReports');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "setGroupApiDomainAfterLogin", {
        get: function () {
            return this.get('setGroupApiDomainAfterLogin');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "useHttpStatusCode", {
        get: function () {
            return this.get('useHttpStatusCode');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "alwaysCheckCookieSave", {
        get: function () {
            return this.get('alwaysCheckCookieSave');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "fixPhoneTFATranslations", {
        get: function () {
            return this.get('fixPhoneTFATranslations');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "loadSsoFrameOnlyOnce", {
        get: function () {
            return this.get('loadSsoFrameOnlyOnce');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "verifyLoginOnlyOnce", {
        get: function () {
            return this.get('verifyLoginOnlyOnce');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "sendLangForEmailOTP", {
        get: function () {
            return this.get('sendLangForEmailOTP');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "setProviderFromResponse", {
        get: function () {
            return this.get('setProviderFromResponse');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "setCookieSameSiteLaxSession", {
        get: function () {
            return this.get('setCookieSameSiteLaxSession');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "setCookieSameSiteLaxSocial", {
        get: function () {
            return this.get('setCookieSameSiteLaxSocial');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "setCookieSameSiteLaxLowPriority", {
        get: function () {
            return this.get('setCookieSameSiteLaxLowPriority');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "forceErrorReport", {
        get: function () {
            return this.get('forceErrorReport');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "skipSameScreenCheckOnSwitch", {
        get: function () {
            return this.get('skipSameScreenCheckOnSwitch');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "getOnlyVisibleField", {
        get: function () {
            return this.get('getOnlyVisibleField');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "updateAccountInfoAsync", {
        get: function () {
            return this.get('updateAccountInfoAsync');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "sanitizeEvaluatedValue", {
        get: function () {
            return this.get('sanitizeEvaluatedValue');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "useSessionVerify", {
        get: function () {
            return this.get('useSessionVerify');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "useExtendedPhoneNumberRegex", {
        get: function () {
            return this.get('useExtendedPhoneNumberRegex');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "generateNewCodeWcagCompliance", {
        get: function () {
            return this.get('generateNewCodeWcagCompliance');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "enforceAuthFlowRedirectForSocial", {
        get: function () {
            return this.get('enforceAuthFlowRedirectForSocial');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "useDecodeURIComponent", {
        get: function () {
            return this.get('useDecodeURIComponent');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "useOidcGetParamHashOldStyle", {
        get: function () {
            return this.get('useOidcGetParamHashOldStyle');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "useViewportPollerAction", {
        get: function () {
            return this.get('useViewportPollerAction');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "ignoreInterruptionsInOidcPassiveLogin", {
        get: function () {
            return this.get('ignoreInterruptionsInOidcPassiveLogin');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "overrideAllChildContext", {
        get: function () {
            return this.get('overrideAllChildContext');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlagService, "dispatchLoginEventWhenHandlerAdded", {
        get: function () {
            return this.get('dispatchLoginEventWhenHandlerAdded');
        },
        enumerable: true,
        configurable: true
    });
    FlagService.get = function (name) {
        var _a, _b;
        return (((_a = window.gigya._.config) === null || _a === void 0 ? void 0 : _a.flags) && ((_b = window.gigya._.config) === null || _b === void 0 ? void 0 : _b.flags[name])) || false;
    };
    Object.defineProperty(FlagService, "apiFlags", {
        // Every flag that is associated with data modification related to the api layer
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    return FlagService;
}());
exports.FlagService = FlagService;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/DOM.ts":
/*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/DOM.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var viewportUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/viewport */ "./src/core/Gigya.Js/app/Utils/viewport.ts");
var functionsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/functions */ "./src/core/Gigya.Js/app/Utils/functions.ts");
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
                var isFileNameExistInSrc = fileNames.length === 0 || fileNames.some(function (fileName) { return src.indexOf(fileName) > -1; });
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
    }
    catch (e) {
        // IE10 and below support
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, {});
    }
    el.dispatchEvent(event);
}
exports.dispatch = dispatch;
function addButtonSubmitListener(el, handler, event, debugName) {
    if (event === void 0) { event = 'click'; }
    // Just in case the element does not exist.
    if (!el) {
        return;
    }
    el.setAttribute('role', 'button');
    if (el.getAttribute('tabindex') != '-1') {
        el.setAttribute('tabindex', '0');
    }
    addEventListener(el, event, function (e) { return handler(e); });
    addEventListener(el, 'keydown', function (e) {
        if ((e.which || e.keyCode) == 13) {
            e.preventDefault();
            handler(e);
        }
    });
}
exports.addButtonSubmitListener = addButtonSubmitListener;
function addEventListener(el, eventName, handler) {
    if (!el || !handler)
        return;
    if (el.addEventListener) {
        el.addEventListener(eventName, handler, true);
    }
    else {
        el.attachEvent('on' + eventName, handler);
    }
}
exports.addEventListener = addEventListener;
function addActivationHandler(el, handler) {
    if (!el || !handler)
        return;
    this.addEventListener(el, 'keydown', function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            handler();
        }
    });
    this.addEventListener(el, 'click', handler);
}
exports.addActivationHandler = addActivationHandler;
function removeEventListener(el, eventName, handler) {
    if (!el || !handler)
        return;
    if (el.removeEventListener) {
        el.removeEventListener(eventName, handler, true);
    }
    else {
        el.detachEvent('on' + eventName, handler);
    }
}
exports.removeEventListener = removeEventListener;
function disableDefaultEventHandling(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }
    else if (window.event) {
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
            window.location.hash = window.location.hash + '|gigyaMobileDialog';
        }
        addEventListener(window, 'hashchange', backListener);
    }, 50);
}
exports.addDialogBackListener = addDialogBackListener;
function _removeDialogBackListener() {
    if (!backListener)
        return;
    removeEventListener(window, 'hashchange', backListener);
    backListener = null;
    //restore previous hash
    window.location.hash = window.location.hash.replace('|gigyaMobileDialog', '');
}
exports._removeDialogBackListener = _removeDialogBackListener;
function prependToBody(el, document) {
    if (document === void 0) { document = window.document; }
    if (!document.body)
        return;
    if (document.body.insertBefore && document.body.firstChild) {
        document.body.insertBefore(el, document.body.firstChild);
    }
    else {
        // Backward compatibility
        document.body.appendChild(el);
    }
}
exports.prependToBody = prependToBody;
function appendToBody(el, document) {
    if (document === void 0) { document = window.document; }
    if (!document.body)
        return;
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
        if (computedStyle.display === 'none' || computedStyle.visibility === 'hidden') {
            return false;
        }
        else {
            el = el.parentElement;
        }
    }
    return true;
}
exports.isVisible = isVisible;
function getCenteredDivID(name) {
    return 'gig_' + LocalInfo_1.localInfo.initTime.getTime().toString() + '_' + name;
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
        }
        else if (document.body.appendChild) {
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
        el.style.display = LocalInfo_1.localInfo.isIE6 ? (el.tagName == 'TD' ? 'table-cell' : el.tagName == 'TR' ? '' : el.tagName == 'TABLE' ? '' : 'block') : '';
    }
}
exports.showByID = showByID;
function clearByID(id) {
    try {
        var c = document.getElementById(id);
        if (c != null) {
            c.innerHTML = '';
        }
    }
    catch (e) { }
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
function getElementsByAttribute(parentElement, tagName, attributeName, attributeValue) {
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
    if (substring === void 0) { substring = false; }
    if (!el) {
        return;
    }
    var arClass = getClassNames(el);
    for (var i = arClass.length - 1; i >= 0; i--) {
        if (arClass[i] === className || (substring && arClass[i].indexOf(className) !== -1)) {
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
    if (!el)
        return false;
    else if (!className)
        return true;
    else if (!el.className)
        return false;
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
    if (!event)
        return;
    if ('cancelable' in event)
        // All browsers except <IE9
        event.preventDefault();
    else
        event.returnValue = false;
}
exports.cancelEvent = cancelEvent;
function createElement(type, name) {
    var divContainer = document.createElement('div');
    name = name || '';
    divContainer.innerHTML = '<' + type + ' name="' + name + '" id="' + name + '"></' + type + '>';
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
        container.style.top = '' + Math.max(0, vpt + Math.floor((vp.h - h) / 2)) + 'px';
        container.style.left = '' + Math.max(0, vpl + Math.floor((vp.w - w) / 2)) + 'px';
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
    }
    else {
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
function manipulateAttributes(elements, matcher, replacePredicate, criteria) {
    if (criteria === void 0) { criteria = function () { return true; }; }
    elements.forEach(function (el) {
        if (!el.attributes)
            return;
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
    var treeWalker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
    while ((n = treeWalker.nextNode())) {
        textNodes.push(n);
    }
    return textNodes;
}
exports.textNodesUnder = textNodesUnder;
function isHTMLBooleanAttribute(attrName) {
    return ['autocomplete', 'autofocus', 'checked', 'disabled', 'hidden', 'readonly', 'required', 'selected'].indexOf(attrName) > -1;
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
    if (parent === void 0) { parent = document; }
    setMatchesPolyfill();
    // Get the closest matching element
    for (; elem && elem !== parent; elem = elem.parentNode) {
        if (elem === null || elem === void 0 ? void 0 : elem.matches(selector))
            return elem;
    }
    return null;
}
exports.getClosestElement = getClosestElement;
function createElementFromTemplate(template) {
    if (template === void 0) { template = ''; }
    var _a;
    var div = document.createElement('div');
    div.innerHTML = template === null || template === void 0 ? void 0 : template.trim();
    return (_a = div.firstChild) !== null && _a !== void 0 ? _a : div;
}
exports.createElementFromTemplate = createElementFromTemplate;
function setMatchesPolyfill() {
    if (!Element.prototype.matches) {
        // @ts-ignore
        Element.prototype.matches = Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector;
    }
}
function isParentHasClass(nativeElement, className) {
    var _a;
    if ((_a = nativeElement === null || nativeElement === void 0 ? void 0 : nativeElement.classList) === null || _a === void 0 ? void 0 : _a.contains(className)) {
        return true;
    }
    if (!(nativeElement === null || nativeElement === void 0 ? void 0 : nativeElement.parentElement)) {
        return false;
    }
    return isParentHasClass(nativeElement === null || nativeElement === void 0 ? void 0 : nativeElement.parentElement, className);
}
exports.isParentHasClass = isParentHasClass;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/JSON.ts":
/*!*********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/JSON.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function serialize(obj, includeFunctions, prettyPrint, l, maxLevel) {
    if (includeFunctions === void 0) { includeFunctions = false; }
    if (prettyPrint === void 0) { prettyPrint = false; }
    if (l === void 0) { l = 0; }
    if (maxLevel === void 0) { maxLevel = 20; }
    if (!window.gigya.localInfo.isIE8) {
        return window['JSON'].stringify(obj);
    }
    else {
        if (!l)
            l = 0;
        if (l > maxLevel)
            return '[Too deep]';
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
                obj = '"' + obj.replace(/(\"|\\)/g, '\\$1').replace(/\r\n|\r|\n/g, '\\n') + '"';
            return String(obj);
        }
        else {
            var n, v, json = [], arr = obj && obj.constructor == Array;
            if (arr) {
                for (var i = 0; i < obj.length; i++) {
                    v = obj[i];
                    t = typeof v;
                    if (v == null || t == 'undefined')
                        v = '';
                    else if (t == 'string')
                        v = '"' + v.replace(/(\"|\\)/g, '\\$1').replace(/\r\n|\r|\n/g, '\\n') + '"';
                    else if (t == 'function') {
                        if (includeFunctions)
                            v = 'Function';
                        else
                            v = '';
                    }
                    else if (v.parentNode && v.innerHTML)
                        v = 'HTMLElement';
                    else if (v.constructor == Date)
                        v = '';
                    else if (t == 'object' && v !== null)
                        v = serialize(v, includeFunctions, prettyPrint, l + 1);
                    if (String(v) != '')
                        json.push(prefix + tab + String(v));
                }
            }
            else {
                for (n in obj) {
                    v = obj[n];
                    t = typeof v;
                    if (v == null || t == 'undefined')
                        v = String(v);
                    else if (t == 'string')
                        v = '"' + v.replace(/(\"|\\)/g, '\\$1').replace(/\r\n|\r|\n/g, '\\n') + '"';
                    else if (t == 'function') {
                        if (includeFunctions) {
                            v = 'Function';
                        }
                        else {
                            v = '';
                        }
                    }
                    else if (v.parentNode && v.innerHTML)
                        v = 'HTMLElement';
                    else if (v.constructor == Date)
                        v = '';
                    else if (t == 'object' && v !== null)
                        v = newline + serialize(v, includeFunctions, prettyPrint, l + 1);
                    if (String(v) != '')
                        json.push(prefix + tab + '"' + n.replace(/(\"|\\)/g, '\\$1').replace(/\r\n|\r|\n/g, '\\n') + '":' + String(v));
                }
            }
            return newline + prefix + (arr ? '[' : '{') + newline + json.join(',' + newline) + newline + prefix + (arr ? ']' : '}');
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
        var fn = eval("(function(" + keys.join(',') + ") { return " + json.trim() + "; })");
        return fn.apply(undefined, values);
    }
    catch (e) {
        console.warn('Error deserializing JavaScript', e);
        return defaultValue || {};
    }
}
exports.deserialize = deserialize;
function parse(json, defaultValue) {
    if (window.gigya.localInfo.isIE8) {
        return deserialize(json, defaultValue);
    }
    else {
        try {
            return window['JSON'].parse(json);
        }
        catch (e) {
            return defaultValue || {};
        }
    }
}
exports.parse = parse;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/URL.ts":
/*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/URL.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ./../../../../accounts/constants */ "./src/accounts/constants.ts");
var keyValueUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/keyValue */ "./src/core/Gigya.Js/app/Utils/keyValue.ts");
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
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
    return keyValueUtils.deserialize(url.split('#')[0].split('?')[1], '&', keysToLower);
}
exports.getParamsFromURL = getParamsFromURL;
function getGigParamsFromURL(config) {
    var _a = config || {}, url = _a.url, paramPrefix = _a.paramPrefix, keysToLower = _a.keysToLower, removePrefix = _a.removePrefix;
    var prefix = paramPrefix || constants_1.GIGYA_PARAM_PREFIX;
    var urlParams = getParamsFromURL(url, keysToLower);
    return Object.keys(urlParams)
        .filter(function (key) { return key.indexOf(prefix) === 0 && key !== prefix; })
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
    var finalUrl = urlHashSplit[0].split('?')[0] + '?' + keyValueUtils.serialize(params, '&');
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
        var paramName = _a[0], paramValue = _a[1];
        return validParams[paramName] = paramValue;
    });
    return validParams;
};
function getContextParamsFromUrl(config) {
    var _a = config || {}, url = _a.url, paramPrefix = _a.paramPrefix, unacceptableParams = _a.unacceptableParams;
    if (!url) {
        return {};
    }
    var params = window.gigya.utils.URL.getGigParamsFromURL({ url: url, paramPrefix: paramPrefix });
    return removeUnacceptableParams(params, unacceptableParams);
}
exports.getContextParamsFromUrl = getContextParamsFromUrl;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/Uri.ts":
/*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/Uri.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var stringUtilsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/stringUtils */ "./src/core/Gigya.Js/app/Utils/stringUtils.ts");
var Uri = /** @class */ (function () {
    function Uri(url, isAbsolute) {
        if (isAbsolute === void 0) { isAbsolute = true; }
        this._anchor = document.createElement('a');
        var protocol = document.location.protocol == 'http:' ? 'http' : 'https';
        if (isAbsolute && url.indexOf('://') === -1 && url.charAt(0) !== '/')
            url = protocol + "://" + url;
        this._anchor.href = url;
    }
    Object.defineProperty(Uri.prototype, "domain", {
        get: function () {
            return this._anchor.hostname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "path", {
        get: function () {
            return this._anchor.pathname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "href", {
        get: function () {
            return this._anchor.href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "search", {
        get: function () {
            return this._anchor.search.slice(1);
        } // dropping '?'
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "hash", {
        get: function () {
            return this._anchor.hash.slice(1);
        } // dropping '#'
        ,
        enumerable: true,
        configurable: true
    });
    Uri.prototype.toString = function () {
        return this._anchor.href;
    };
    Uri.prototype.addToSearch = function (params) {
        for (var name in params) {
            var val = params[name];
            if ((typeof val == 'boolean' || typeof val == 'number' || typeof val == 'string') && name != 'eventName') {
                var addition = this._anchor.search ? '&' : '';
                this._anchor.search += "" + addition + name + "=" + encodeURIComponent(params[name]);
            }
        }
        return this;
    };
    Uri.prototype.fetch = function (retries) {
        if (retries === void 0) { retries = 0; }
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
                    case 2: return [4 /*yield*/, this.xhr()];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/, _a];
                    case 5:
                        e_1 = _b.sent();
                        if (retries <= 0)
                            throw new Error("fetch failed: " + e_1);
                        return [4 /*yield*/, this.delay(1)];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, this.fetch(retries - 1)];
                    case 7: return [2 /*return*/, _b.sent()];
                    case 8: return [2 /*return*/];
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
        return ((this.domain == base.domain || // page is the base domain
            this.isSubDomainOf(base)) && // or sub-domain of it
            (!base.path || this.path.indexOf(base.path) == 0)); // page is also in base's defined path;
    };
    Uri.prototype.isForSubDomains = function () {
        return this.domain.indexOf('.') == 0;
    };
    Uri.prototype.isSubDomainOf = function (base) {
        var domain = '';
        if (!base.isForSubDomains())
            domain = '.';
        domain += base.domain;
        return stringUtilsUtils.endsWith(this.domain, domain);
    };
    Uri.parse = function (url, isAbsolute) {
        if (isAbsolute === void 0) { isAbsolute = true; }
        if (!url)
            return undefined;
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
                        if (!response.ok)
                            throw new Error("fetch failed");
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
                    return reject("xhr failed - " + xhr.status + " - " + xhr.statusText);
                }
                try {
                    var jsonResponse = JSON.parse(xhr.responseText);
                    return resolve(jsonResponse);
                }
                catch (e) {
                    return reject(e);
                }
            };
        });
    };
    Uri.prototype.delay = function (ms) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new gigya.Promise(function (r) { return setTimeout(r, ms); })];
            });
        });
    };
    return Uri;
}());
exports.Uri = Uri;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/cookie.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/cookie.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var global_1 = __webpack_require__(/*! ./global */ "./src/core/Gigya.Js/app/Utils/global.ts");
var CookieUtils = /** @class */ (function () {
    function CookieUtils(_cookieStore) {
        if (_cookieStore === void 0) { _cookieStore = new global_1.CookieStore(); }
        this._cookieStore = _cookieStore;
    }
    CookieUtils.prototype.set = function (name, value, expires_in, cookieDomain, dontUseRootPath, sameSite) {
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
        var cookieExist = this._setCookieInternal(name, value, path, expires, cookieDomain, sameSite);
        var shouldCookieExist = !expireMs || expireMs > 0;
        if (shouldCookieExist === cookieExist) {
            return true;
        }
        // If failed to set cookie, retry;
        // it might be because the domain is listed as TLD https://data.iana.org/TLD/tlds-alpha-by-domain.txt
        var pageDomain = LocalInfo_1.localInfo.pageDomain;
        cookieExist = this._setCookieInternal(name, value, path, expires, pageDomain, sameSite);
        return cookieExist === shouldCookieExist;
    };
    CookieUtils.prototype.get = function (name) {
        return this._cookieStore.getCookie(name);
    };
    CookieUtils.prototype.remove = function (name, domain) {
        if (domain === void 0) { domain = LocalInfo_1.localInfo.pageDomain; }
        this._removeFromBaseDomains(name, domain);
        this.set(name, '', -1, '', false);
        this.set(name, '', -1, '', true);
    };
    CookieUtils.prototype.getInfiniteExpirationTimeInSeconds = function () {
        // Set expiration time to 1 years
        return 60 * 60 * 24 * 365;
    };
    CookieUtils.prototype.canSaveCookie = function (cookieDomain) {
        if (cookieDomain === void 0) { cookieDomain = null; }
        try {
            return this.set(CookieUtils.testCookieName, 'true', 1, cookieDomain, null);
        }
        catch (e) {
            // iOS 10 webview throws in some scenarios
            return false;
        }
    };
    CookieUtils.prototype.getDefaultDomain = function (pageDomain, baseDomain) {
        if (pageDomain === void 0) { pageDomain = LocalInfo_1.localInfo.pageDomain; }
        if (baseDomain === void 0) { baseDomain = LocalInfo_1.localInfo.baseDomain || ''; }
        return baseDomain.length > 0 && pageDomain.length >= baseDomain.length && pageDomain.lastIndexOf(baseDomain) === pageDomain.length - baseDomain.length
            ? baseDomain
            : pageDomain;
    };
    CookieUtils.prototype._getExpirationInMs = function (expiresIn) {
        var expireMs;
        if (expiresIn == null || expiresIn === '' || isNaN(expiresIn)) {
            expireMs = 1000 * this.getInfiniteExpirationTimeInSeconds();
        }
        else if (expiresIn == 0) {
            // 0 means Session
            expireMs = null;
        }
        else {
            // Any other value is number of seconds (A negative value would mean expire now!)
            expireMs = expiresIn * 1000;
        }
        return expireMs;
    };
    CookieUtils.prototype._setCookieInternal = function (name, value, path, expires, cookieDomain, sameSiteMode) {
        if (sameSiteMode === void 0) { sameSiteMode = CookieUtils._getSameSiteMode(); }
        var _a;
        var protocol = (_a = LocalInfo_1.localInfo === null || LocalInfo_1.localInfo === void 0 ? void 0 : LocalInfo_1.localInfo.protocol) !== null && _a !== void 0 ? _a : document.location.protocol;
        var isSecured = protocol.indexOf('https') === 0;
        this._cookieStore.setCookie(name, value, {
            path: path,
            expires: expires,
            domain: cookieDomain,
            sameSite: sameSiteMode,
            secure: isSecured
        });
        if (this.get(name)) {
            return true;
        }
        if (!sameSiteMode) {
            //if failed to write cookie without sameSite mode, then stop here
            return false;
        }
        if (sameSiteMode !== 'None') {
            this._fallbackToSameSiteNone(name, value, path, expires, cookieDomain, isSecured);
        }
        if (this.get(name)) {
            this._reportFallback('Setting SameSite=None', { name: name, value: value, sameSiteMode: sameSiteMode });
            return true;
        }
        // If failed to write cookie with sameSite mode, retry without;
        this._cookieStore.setCookie(name, value, {
            path: path,
            expires: expires,
            domain: cookieDomain,
            secure: isSecured
        });
        if (this.get(name)) {
            this._reportFallback('Cookie established only without sameSite mode', { name: name, value: value, sameSiteMode: sameSiteMode });
            return true;
        }
        return false;
    };
    CookieUtils.prototype._removeFromBaseDomains = function (name, domain) {
        var domainParts = domain.split('.');
        // when clearing from a.b.c.d.com --> clear from a.b.c.d.com, b.c.d.com, c.d.com, d.com
        for (var i = 0; i < domainParts.length - 1; i++) {
            var domain_1 = domainParts.slice(i).join('.');
            this.set(name, '', -1, domain_1, false);
            this.set(name, '', -1, domain_1, true);
        }
    };
    CookieUtils._getSameSiteMode = function () {
        if (!CookieUtils._disallowSameSiteMode())
            return 'None';
    };
    CookieUtils._disallowSameSiteMode = function () {
        var _a, _b;
        var protocol = (_a = LocalInfo_1.localInfo === null || LocalInfo_1.localInfo === void 0 ? void 0 : LocalInfo_1.localInfo.protocol) !== null && _a !== void 0 ? _a : document.location.protocol;
        var ua = (_b = LocalInfo_1.localInfo === null || LocalInfo_1.localInfo === void 0 ? void 0 : LocalInfo_1.localInfo.userAgent) !== null && _b !== void 0 ? _b : navigator.userAgent.toLowerCase();
        var isSecured = protocol.indexOf('https') === 0;
        return !isSecured || !ua ||
            // Cover all iOS based browsers here. This includes:
            // - Safari on iOS 12 for iPhone, iPod Touch, iPad
            // - WkWebview on iOS 12 for iPhone, iPod Touch, iPad
            // - Chrome on iOS 12 for iPhone, iPod Touch, iPad
            // All of which are broken by SameSite=None, because they use the iOS networking stack
            ((ua.indexOf('CPU iPhone OS 12') > -1 || ua.indexOf('iPad; CPU OS 12') > -1) ||
                // Cover Mac OS X based browsers that use the Mac OS networking stack. This includes:
                // - Safari on Mac OS X.
                // This does not include:
                // - Chrome on Mac OS X
                // Because they do not use the Mac OS networking stack.
                (ua.indexOf('Macintosh; Intel Mac OS X 10_14') > -1 && ua.indexOf('Version/') > -1 && ua.indexOf('Safari') > -1) ||
                // Cover Chrome 50-69, because some versions are broken by SameSite=None,
                // and none in this range require it.
                // Note: this covers some pre-Chromium Edge versions,
                // but pre-Chromium Edge does not require SameSite=None.
                (ua.indexOf('Chrome/5') > -1 && ua.indexOf('Chrome/6') > -1));
    };
    CookieUtils.prototype._fallbackToSameSiteNone = function (name, value, path, expires, cookieDomain, secure) {
        this._cookieStore.setCookie(name, value, {
            path: path,
            expires: expires,
            domain: cookieDomain,
            sameSite: 'None',
            secure: secure
        });
    };
    CookieUtils.prototype._reportFallback = function (message, details) {
        window.gigya.logger.report("Cookie Policy Fallback: " + message, tslib_1.__assign(tslib_1.__assign({}, details), { isIframe: this._isIFrame() }), false);
    };
    CookieUtils.prototype._isIFrame = function () {
        var _a;
        try {
            return (window === null || window === void 0 ? void 0 : window.location) !== ((_a = window === null || window === void 0 ? void 0 : window.parent) === null || _a === void 0 ? void 0 : _a.location);
        }
        catch (e) {
            return true;
        }
    };
    CookieUtils.testCookieName = 'gig3pctest';
    return CookieUtils;
}());
exports.CookieUtils = CookieUtils;
exports.default = new CookieUtils();


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/domains.ts":
/*!************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/domains.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var Uri_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/Uri */ "./src/core/Gigya.Js/app/Utils/Uri.ts");
var stringUtilsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/stringUtils */ "./src/core/Gigya.Js/app/Utils/stringUtils.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var FlagService_1 = __webpack_require__(/*! ../Services/FlagService */ "./src/core/Gigya.Js/app/Services/FlagService.ts");
var cookie_1 = __webpack_require__(/*! ./cookie */ "./src/core/Gigya.Js/app/Utils/cookie.ts");
// TODO: move to config
var baseDomains;
if ((_b = (_a = window.gigya.partnerSettings) === null || _a === void 0 ? void 0 : _a.baseDomains) === null || _b === void 0 ? void 0 : _b.length) {
    baseDomains = window.gigya.partnerSettings.baseDomains;
}
else {
    if (window.self === window.top) {
        // only in the top frame
        window.gigya.logger.warn('gigya: missing base domains for site');
    }
    baseDomains = [document.location.hostname];
}
LocalInfo_1.localInfo.baseDomain = getBaseDomain(baseDomains);
var gigyaDomainNamespaces = ['socialize', 'accounts', 'fidm', 'gm', 'comments', 'gcs', 'ids', 'ds', 'gscounters', 'reports'];
function apiDomainFactory(apiDomain, defaultApiDomain) {
    if (apiDomain === void 0) { apiDomain = resolveApiDomain(); }
    if (defaultApiDomain === void 0) { defaultApiDomain = window.gigya.defaultApiDomain; }
    var shouldAddNamespace = Uri_1.Uri.parse(apiDomain).isIn(Uri_1.Uri.parse(defaultApiDomain));
    return function (namespace) {
        if (namespace && shouldAddNamespace) {
            var subDomain = namespace.split('.')[0];
            if (subDomain === 'sdk' || subDomain === 'oauth') {
                subDomain = 'accounts';
            }
            else if (gigyaDomainNamespaces.indexOf(subDomain) == -1) {
                window.gigya.logger.error("trying to send request to an invalid domain");
                subDomain = gigyaDomainNamespaces[0];
            }
            return subDomain + "." + apiDomain;
        }
        else {
            return apiDomain;
        }
    };
}
exports.apiDomainFactory = apiDomainFactory;
function getGigyaDomain(namespace, dataCenter, defaultDomain) {
    if (dataCenter === void 0) { dataCenter = window.gigya.dataCenter; }
    if (defaultDomain === void 0) { defaultDomain = window.gigya.defaultApiDomain; }
    if (defaultDomain === 'sapcdm.cn' && dataCenter !== 'cn1') {
        defaultDomain = "cn1." + defaultDomain; //Fix for cn1-st1. it should be cn1-st1.cn1.sapcdm.cn and not cn1-st1.sapcdm.cn
    }
    var domain = dataCenter + "." + defaultDomain;
    if (namespace)
        return namespace + "." + domain;
    else
        return domain;
}
exports.getGigyaDomain = getGigyaDomain;
function getBaseDomain(baseDomains, currentDomain, defaultDomains) {
    if (baseDomains === void 0) { baseDomains = window.gigya.partnerSettings.baseDomains; }
    if (currentDomain === void 0) { currentDomain = location.hostname; }
    if (defaultDomains === void 0) { defaultDomains = ['gigya.com', 'cn1.sapcdm.cn', 'localhost', window.gigya.defaultApiDomain]; }
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
    for (var _i = 0, baseDomains_1 = baseDomains; _i < baseDomains_1.length; _i++) {
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
            }
            else {
                return baseUri.domain;
            }
        }
    }
    // fallback to the parent's window domain (for backward compatibility).
    return originURI.domain;
}
exports.getBaseDomain = getBaseDomain;
function resolveApiDomain(customApiDomainPrefix, baseDomain, dataCenter, defaultApiDomain) {
    if (customApiDomainPrefix === void 0) { customApiDomainPrefix = window.gigya.partnerSettings && window.gigya.partnerSettings.customAPIDomainPrefix; }
    if (baseDomain === void 0) { baseDomain = LocalInfo_1.localInfo.baseDomain; }
    if (dataCenter === void 0) { dataCenter = window.gigya.dataCenter; }
    if (defaultApiDomain === void 0) { defaultApiDomain = window.gigya.defaultApiDomain; }
    var _a;
    var apiDomain = getHostedPagesApiDomainCookie();
    if (apiDomain) {
        return apiDomain;
    }
    // TODO: remove once a solution will be found for hosted pages
    if (baseDomain.endsWith(((_a = window.gigya._.config) === null || _a === void 0 ? void 0 : _a.hostedPagesDomain) || 'my.gigya-ext.com')) {
        return baseDomain;
    }
    if (customApiDomainPrefix && baseDomain && baseDomain !== defaultApiDomain) {
        return customApiDomainPrefix + "." + baseDomain;
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
    if ((_b = (_a = window.gigya.thisScript) === null || _a === void 0 ? void 0 : _a.globalConf) === null || _b === void 0 ? void 0 : _b['storageDomainOverride']) {
        return window.gigya.thisScript.globalConf['storageDomainOverride'];
    }
    if (((_c = window.gigya.thisScript) === null || _c === void 0 ? void 0 : _c.baseDomain) && FlagService_1.FlagService.useGigyaJsBaseDomain) {
        return window.gigya.thisScript.baseDomain;
    }
    var domain = window.gigya.defaultApiDomain;
    if (window.gigya.utils.stringUtils.endsWith(domain, 'sapcdm.cn') && window.gigya.dataCenter !== 'cn1') { // special case with china domain staging
        domain = "cn1.sapcdm.cn";
    }
    var prefix = window.gigya.dataCenter !== 'global' ? "cdns." + window.gigya.dataCenter : "cdns";
    return prefix + "." + domain;
}
exports.getStorageDomain = getStorageDomain;
function getHostedPagesApiDomainCookie() {
    return cookie_1.default.get("pages_apiDomain_" + window.gigya.apiKey);
}


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/functions.ts":
/*!**************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/functions.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var DOMUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/DOM */ "./src/core/Gigya.Js/app/Utils/DOM.ts");
var cdn_1 = __webpack_require__(/*! src/core/Gigya.Js/app/cdn */ "./src/core/Gigya.Js/app/cdn.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
function callAsync(methodName, params) {
    if (params === void 0) { params = {}; }
    return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
        return tslib_1.__generator(this, function (_a) {
            return [2 /*return*/, new gigya.Promise(function (resolve) {
                    callFunction("gigya." + methodName, [tslib_1.__assign(tslib_1.__assign({}, params), { callback: resolve })]);
                })];
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
    if ((!document.readyState && document.body) ||
        document.readyState === 'complete' ||
        (!completeOnly && document.readyState === 'interactive' && document.body)) {
        func();
    }
    else {
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
    for (var iSegment = 0; iSegment < arNameSegments.length - 1; iSegment++) {
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
    if (src === void 0) { src = cdn_1.getCdnResource('/'); }
    if (LocalInfo_1.localInfo.isIOSWebView || (LocalInfo_1.localInfo.isIOS && LocalInfo_1.localInfo.isWeChat)) {
        iframe.setAttribute('src', src);
    }
}
exports.addSrcToIFrameIfNeeded = addSrcToIFrameIfNeeded;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/gigyaScriptEl.ts":
/*!******************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/gigyaScriptEl.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = __webpack_require__(/*! ./functions */ "./src/core/Gigya.Js/app/Utils/functions.ts");
var gigyaCdnRegex = /\/\/cdn(s)?\.(ru1\.)?gigya.com/;
var fileNames = ['gigya.js', 'socialize.js', 'socialize2.js', 'gsjssdk.js'];
function getGigyaScriptElement() {
    var scriptElement;
    var scripts = document.getElementsByTagName('script');
    var _loop_1 = function (i) {
        var script = scripts[i];
        var src = script.src.toLowerCase();
        if (src !== '') {
            if (gigyaCdnRegex.test(src) || src.indexOf('?apikey=') > -1) {
                var isFileNameExistInSrc = fileNames.length === 0 || fileNames.some(function (fileName) { return src.indexOf(fileName) > -1; });
                if (isFileNameExistInSrc) {
                    scriptElement = script;
                    return "break";
                }
            }
        }
    };
    for (var i = scripts.length - 1; i >= 0; i--) {
        var state_1 = _loop_1(i);
        if (state_1 === "break")
            break;
    }
    return scriptElement;
}
exports.getGigyaScriptElement = getGigyaScriptElement;
function updateConfiguration(config) {
    if (config === void 0) { config = {}; }
    window.gigya.logger.info("globalConf is updated", {
        updateObject: config
    });
    __webpack_provided_Object_dot_assign(window.gigya.thisScript.globalConf || {}, config);
}
exports.updateConfiguration = updateConfiguration;
functions_1.createAlias('gigya.updateConfiguration', updateConfiguration);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/global.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/global.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var CookieStore = /** @class */ (function () {
    function CookieStore(_win) {
        if (_win === void 0) { _win = window; }
        this._win = _win;
    }
    CookieStore.prototype.setCookie = function (name, value, options) {
        var cookieString = name + "=" + escape(value);
        if (options.path)
            cookieString += "; path=" + options.path;
        if (options.expires)
            cookieString += "; expires=" + options.expires.toUTCString();
        if (options.domain && options.domain.indexOf('.') != -1)
            cookieString += "; domain=" + options.domain;
        if (options.sameSite)
            cookieString += "; sameSite=" + options.sameSite;
        if (options.secure)
            cookieString += "; secure";
        this._win.document.cookie = cookieString;
    };
    CookieStore.prototype.getCookie = function (name) {
        name = name.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1').replace(/^[ \t]+|[ \t]+$/g, '');
        var regex = new RegExp('(?:^|;)\\s?' + name + '=(.*?)(?:;|$)');
        var match = this._win.document.cookie.match(regex);
        return match && unescape(match[1]);
    };
    return CookieStore;
}());
exports.CookieStore = CookieStore;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/gltexp.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/gltexp.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function isValid(gltexp) {
    return getMillis(gltexp) > Date.now();
}
exports.isValid = isValid;
function getMax() {
    var gltexps = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        gltexps[_i] = arguments[_i];
    }
    if (!gltexps || !gltexps.length)
        return undefined;
    return gltexps.sort(function (gltexpA, gltexpB) { return getMillis(gltexpB) - getMillis(gltexpA); })[0];
}
exports.getMax = getMax;
function getMillis(gltExp) {
    return !gltExp ? 0 : Number(gltExp.substr(0, gltExp.indexOf('_'))) * 1000;
}
exports.getMillis = getMillis;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/keyValue.ts":
/*!*************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/keyValue.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var URLUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/URL */ "./src/core/Gigya.Js/app/Utils/URL.ts");
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var FlagService_1 = __webpack_require__(/*! ../Services/FlagService */ "./src/core/Gigya.Js/app/Services/FlagService.ts");
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
                    a.push(p + '=' + URLUtils.URLEncode(JSONUtils.serialize(oKeyValue[p])));
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
function deserialize(urlEncodedString, delimiter, keysToLower, useUnescape) {
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
        }
        else {
            var key = pair.substr(0, eqPos);
            if (keysToLower) {
                key = key.toLowerCase();
            }
            var serializedValue = pair.substr(eqPos + 1).replace(/\+/g, ' ');
            try {
                if (useUnescape) {
                    o[key] = FlagService_1.FlagService.useDecodeURIComponent ? compareResultsAndReturnURLDecode(serializedValue) : unescape(serializedValue);
                }
                else {
                    o[key] = URLUtils.URLDecode(serializedValue);
                }
            }
            catch (ex) {
                o[key] = FlagService_1.FlagService.useDecodeURIComponent ? URLUtils.URLDecode(serializedValue) : unescape(serializedValue);
            }
        }
    }
    return o;
}
exports.deserialize = deserialize;
function compareResultsAndReturnURLDecode(serializedValue) {
    var unescapedResult = unescape(serializedValue);
    var urlDecodeResult = URLUtils.URLDecode(serializedValue);
    unescapedResult.localeCompare(urlDecodeResult) !== 0 && window.gigya.logger.report('urlDecoder and unescaped have different values', {
        unescapedResult: unescapedResult,
        urlDecodeResult: urlDecodeResult
    });
    return urlDecodeResult;
}


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/localStorage.ts":
/*!*****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/localStorage.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var cookie_1 = __webpack_require__(/*! ./cookie */ "./src/core/Gigya.Js/app/Utils/cookie.ts");
var AbstractLocalStorageAdapter = /** @class */ (function () {
    function AbstractLocalStorageAdapter() {
    }
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
    AbstractLocalStorageAdapter.prototype.getObject = function (key, defaultValue) {
        return JSONUtils.deserialize(this.getItem(key), defaultValue);
    };
    /**
     * Is persistent storage. Returns false when data is not persisted.
     */
    AbstractLocalStorageAdapter.prototype.isPersistent = function () {
        return true;
    };
    return AbstractLocalStorageAdapter;
}());
exports.AbstractLocalStorageAdapter = AbstractLocalStorageAdapter;
var AbstractAsyncLocalStorageAdapter = /** @class */ (function (_super) {
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
    AbstractAsyncLocalStorageAdapter.prototype.waitForService = function (callback) {
        var _this = this;
        if (this.isReady()) {
            callback();
            return;
        }
        else {
            setTimeout(function () { return _this.waitForService(callback); }, 50);
        }
    };
    return AbstractAsyncLocalStorageAdapter;
}(AbstractLocalStorageAdapter));
exports.AbstractAsyncLocalStorageAdapter = AbstractAsyncLocalStorageAdapter;
var StorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(StorageAdapter, _super);
    function StorageAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StorageAdapter.prototype.getItem = function (key) {
        return this.storage[key];
    };
    StorageAdapter.prototype.setItem = function (key, value, expiresIn) {
        try {
            this.storage[key] = value;
        }
        catch (ex) { }
    };
    StorageAdapter.prototype.removeItem = function (key) {
        this.storage.removeItem(key);
    };
    return StorageAdapter;
}(AbstractLocalStorageAdapter));
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
}(StorageAdapter));
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
}(StorageAdapter));
var FirefoxStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(FirefoxStorageAdapter, _super);
    function FirefoxStorageAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    FirefoxStorageAdapter.prototype.setItem = function (key, value, expiresIn) {
        try {
            window['globalStorage'][location.hostname][key] = value;
        }
        catch (ex) { }
    };
    FirefoxStorageAdapter.prototype.removeItem = function (key) {
        delete window['globalStorage'][location.hostname][key];
    };
    return FirefoxStorageAdapter;
}(AbstractLocalStorageAdapter));
var CookieStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(CookieStorageAdapter, _super);
    function CookieStorageAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    CookieStorageAdapter.prototype.setItem = function (key, value, expiresIn, domain, additionalParams) {
        if (additionalParams === void 0) { additionalParams = {}; }
        cookie_1.default.set(key, value, expiresIn, domain, additionalParams.dontUseRootPath, additionalParams.sameSite);
    };
    CookieStorageAdapter.prototype.removeItem = function (key) {
        cookie_1.default.remove(key);
    };
    return CookieStorageAdapter;
}(AbstractLocalStorageAdapter));
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
    MemoryStorageAdapter.prototype.setItem = function (key, value, expiresIn) {
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
}(AbstractLocalStorageAdapter));
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
    for (var _i = 0, adapters_1 = exports.adapters; _i < adapters_1.length; _i++) {
        var adapter_1 = adapters_1[_i];
        if (adapter_1.isAvailable()) {
            // Don't select adapter if it's async and a callback wasn't provided.
            if (adapter_1.prototype instanceof AbstractAsyncLocalStorageAdapter && !callback) {
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
        }
        else {
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


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/object.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/object.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var toggles_1 = __webpack_require__(/*! ./toggles */ "./src/core/Gigya.Js/app/Utils/toggles.ts");
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
            if (!path)
                return undefined;
            var paths = path.split('.'), current = context, i;
            for (i = 0; i < paths.length; ++i) {
                if (current[paths[i]] == undefined) {
                    return undefined;
                }
                else {
                    current = current[paths[i]];
                }
            }
            return current;
        },
    };
}
exports.expressionHelper = expressionHelper;
function getPropertyBySerializedName(o, name, createMissingObjects) {
    if (!name)
        return o;
    var oResult = o;
    var arNameSegments = name.split('.');
    for (var iSegment = 0; iSegment < arNameSegments.length; iSegment++) {
        var sSegment = arNameSegments[iSegment];
        var sIndex = null;
        //Support for array access. i.e. "obj.prop1[0].prop2"
        if (sSegment.match(/\[[0-9]+]/)) {
            sIndex = Number(sSegment.match(/\[[0-9]+]/)[0].replace(/[\[\]]/g, ''));
        }
        sSegment = sSegment.split(/\[[0-9]+]/).join('');
        var res = (sIndex || sIndex === 0) && oResult[sSegment] ? oResult[sSegment][sIndex] : oResult[sSegment];
        if (createMissingObjects && !oResult[sSegment]) {
            oResult[sSegment] = {};
        }
        else if (createMissingObjects && !res && res !== false) {
            oResult[sSegment] = [];
        }
        if (res || res === false) {
            oResult = res;
        }
        else {
            return null;
        }
    }
    return oResult;
}
exports.getPropertyBySerializedName = getPropertyBySerializedName;
function setPropertyBySerializedName(o, name, value) {
    var arNameSegments = name.split('.');
    var propertyName = arNameSegments.pop();
    getPropertyBySerializedName(o, arNameSegments.join('.'), true)[propertyName] = value;
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
        if (typeof o[p] == 'object')
            s = JSONUtils.serialize(o[p], false);
        else if (o[p])
            s = o[p].toString();
        ar.push(p + '=' + s);
    }
    return ar.sort().join('&');
}
exports.getHash = getHash;
function getMurmurHash(key, seed) {
    if (!seed)
        seed = 0;
    var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;
    remainder = key.length & 3; // key.length % 4
    bytes = key.length - remainder;
    h1 = seed;
    c1 = 0xcc9e2d51;
    c2 = 0x1b873593;
    i = 0;
    while (i < bytes) {
        k1 = (key.charCodeAt(i) & 0xff) | ((key.charCodeAt(++i) & 0xff) << 8) | ((key.charCodeAt(++i) & 0xff) << 16) | ((key.charCodeAt(++i) & 0xff) << 24);
        ++i;
        k1 = ((k1 & 0xffff) * c1 + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
        k1 = (k1 << 15) | (k1 >>> 17);
        k1 = ((k1 & 0xffff) * c2 + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
        h1 ^= k1;
        h1 = (h1 << 13) | (h1 >>> 19);
        h1b = ((h1 & 0xffff) * 5 + ((((h1 >>> 16) * 5) & 0xffff) << 16)) & 0xffffffff;
        h1 = (h1b & 0xffff) + 0x6b64 + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16);
    }
    k1 = 0;
    switch (remainder) {
        case 3:
            k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
        case 2:
            k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
        case 1:
            k1 ^= key.charCodeAt(i) & 0xff;
            k1 = ((k1 & 0xffff) * c1 + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
            k1 = (k1 << 15) | (k1 >>> 17);
            k1 = ((k1 & 0xffff) * c2 + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
            h1 ^= k1;
    }
    h1 ^= key.length;
    h1 ^= h1 >>> 16;
    h1 = ((h1 & 0xffff) * 0x85ebca6b + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
    h1 ^= h1 >>> 13;
    h1 = ((h1 & 0xffff) * 0xc2b2ae35 + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16)) & 0xffffffff;
    h1 ^= h1 >>> 16;
    return h1 >>> 0;
}
exports.getMurmurHash = getMurmurHash;
function clone(obj, deepCopy, ignoreFunctions, maxLevel, level, ignoreContext) {
    if (maxLevel === void 0) { maxLevel = 20; }
    if (level === void 0) { level = 0; }
    if (obj === window)
        return window; // do not clone the window object
    if (level > maxLevel)
        return null; // Too deep
    if (typeof obj == 'undefined' || obj == null) {
        return toggles_1.default.isOn('removeUndefinedProperties') ? obj : null;
    }
    else if (typeof obj == 'function' && ignoreFunctions) {
        return null;
    }
    else if (obj.constructor == Array) {
        var ar = [];
        for (var i = 0; i < obj.length; i++) {
            if (!ignoreFunctions || typeof obj[i] != 'function') {
                if (deepCopy) {
                    ar[i] = clone(obj[i], deepCopy, ignoreFunctions, maxLevel, level + 1, ignoreContext);
                }
                else {
                    ar[i] = obj[i];
                }
            }
        }
        return ar;
    }
    else if (typeof obj == 'object') {
        var o = {};
        for (var p in obj) {
            if (ignoreContext && p == 'context')
                continue;
            if (!ignoreFunctions || typeof obj[p] != 'function') {
                if (deepCopy) {
                    o[p] = clone(obj[p], deepCopy, ignoreFunctions, maxLevel, level + 1, ignoreContext);
                }
                else {
                    o[p] = obj[p];
                }
            }
        }
        return o;
    }
    else {
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
        }
        else {
            // Merge objects.
            if (!isDeepMerge) {
                // Flat merge.
                for (var p in args[i]) {
                    o[p] = args[i][p];
                }
            }
            else {
                // Deep merge.
                for (var p in args[i]) {
                    //we override primitive / array
                    if (typeof o[p] !== 'object' || o[p] instanceof Array) {
                        o[p] = args[i][p];
                    }
                    else {
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
    if (withBracket === void 0) { withBracket = false; }
    var result = {};
    function recurse(cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        }
        else if (Array.isArray(cur)) {
            var l = cur.length;
            for (var i = 0; i < l; i++) {
                var nestedProperty = withBracket ? prop + "[" + i + "]" : prop + "." + i;
                recurse(cur[i], prop ? nestedProperty : String(i));
            }
            if (l === 0) {
                result[prop] = [];
            }
        }
        else {
            var isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop + "." + p : p);
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
    if (src == null)
        return;
    if (dest == null)
        dest = {};
    if (src.constructor == Array) {
        for (var iSrc = 0; iSrc < src.length; iSrc++) {
            extractProperties(src[iSrc], dest, schema);
        }
    }
    else if (schema) {
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
    }
    else {
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
    }
    catch (e) { }
    return undefined;
}
exports.parseToObject = parseToObject;
function removePropertiesPrefix(obj, prefix) {
    if (obj === void 0) { obj = {}; }
    if (prefix === void 0) { prefix = ''; }
    return Object.keys(obj).reduce(function (acc, curr) {
        var _a;
        return (__webpack_provided_Object_dot_assign(acc, (_a = {}, _a[curr.replace(prefix, '')] = obj[curr], _a)));
    }, {});
}
exports.removePropertiesPrefix = removePropertiesPrefix;
function addPrefixToProperties(obj, prefix) {
    if (obj === void 0) { obj = {}; }
    if (prefix === void 0) { prefix = ''; }
    return Object.keys(obj).reduce(function (acc, key) {
        if (key.indexOf(prefix) !== 0) {
            acc["" + prefix + key] = obj[key];
        }
        else {
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
exports.normalizeObjectKeysToLowerCase = normalizeObjectKeysToLowerCase;
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/stringParams.ts":
/*!*****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/stringParams.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function getParamValue(str, key, del) {
    if (del === void 0) { del = '&'; }
    // http://stackoverflow.com/questions/11920697/how-to-get-hash-value-in-a-url-in-js
    var matches = str.match(new RegExp(key + "=([^" + del + "]*)"));
    return matches ? matches[1] : null;
}
exports.getParamValue = getParamValue;
function getReqParamValue(str, key) {
    var val = getParamValue(str, key);
    return val ? decodeURIComponent(val) : null;
}
exports.getReqParamValue = getReqParamValue;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/stringUtils.ts":
/*!****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/stringUtils.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
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
    if (!find)
        return str;
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
exports.replaceAll = replaceAll;
function mergeCommaSeparatedValues(str1, str2) {
    if (str1 === void 0) { str1 = ''; }
    if (str2 === void 0) { str2 = ''; }
    var arr = str1.concat(',', str2).split(',');
    return window.gigya.utils.array.getUniqueValues(arr).filter(function (x) { return x; }).join(',');
}
exports.mergeCommaSeparatedValues = mergeCommaSeparatedValues;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/toggles.ts":
/*!************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/toggles.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var objectUtils = __webpack_require__(/*! ./object */ "./src/core/Gigya.Js/app/Utils/object.ts");
var WebSDKToggles = /** @class */ (function () {
    function WebSDKToggles() {
    }
    WebSDKToggles.prototype.has = function (key) {
        return typeof this._toggles[key] != 'undefined';
    };
    WebSDKToggles.prototype.get = function (key) {
        return this._toggles[key];
    };
    WebSDKToggles.prototype.isOn = function (key) {
        return this.has(key) && this.get(key);
    };
    Object.defineProperty(WebSDKToggles.prototype, "_toggles", {
        get: function () {
            return objectUtils.merge([
                this._globalConfToggles,
                this._webSdkConfigToggles
            ]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebSDKToggles.prototype, "_globalConfToggles", {
        get: function () {
            var _a, _b;
            return ((_b = (_a = window.gigya.thisScript) === null || _a === void 0 ? void 0 : _a.globalConf) === null || _b === void 0 ? void 0 : _b.toggles) || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebSDKToggles.prototype, "_webSdkConfigToggles", {
        get: function () {
            var _a, _b;
            var toggles = ((_b = (_a = window.gigya._) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.toggles) || {};
            return Object.keys(toggles).reduce(function (newToggles, key) {
                newToggles[key] = toggles[key] === 'on';
                return newToggles;
            }, {});
        },
        enumerable: true,
        configurable: true
    });
    return WebSDKToggles;
}());
exports.default = new WebSDKToggles();


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/validation.ts":
/*!***************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/validation.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
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
    var anyUndefined = args.some(function (x) { return typeof x === 'undefined'; });
    var anyDefined = args.some(function (x) { return typeof x !== 'undefined'; });
    return (anyDefined && !anyUndefined) || (!anyDefined && anyUndefined);
}
exports.allDefinedOrAllUndefined = allDefinedOrAllUndefined;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/viewport.ts":
/*!*************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/viewport.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function getScroll() {
    var scrOfX = 0, scrOfY = 0;
    if (typeof window.pageYOffset == 'number') {
        scrOfY = window.pageYOffset;
        scrOfX = window.pageXOffset;
    }
    else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
        scrOfY = document.body.scrollTop;
        scrOfX = document.body.scrollLeft;
    }
    else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
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
    if (h == 0)
        h = db.clientHeight;
    var w = de.clientWidth;
    if (w == 0)
        w = db.clientWidth;
    return { w: w, h: h };
}
exports.getFullSize = getFullSize;
function getOrientation() {
    var orientation = parseInt(window['orientation'] || '0');
    if (orientation < 0)
        orientation += 360;
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
    }
    else {
        h = de.clientHeight;
        if (h == 0)
            h = db.clientHeight;
        w = de.clientWidth;
        if (w == 0)
            w = db.clientWidth;
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
    }
    else {
        h = de.clientHeight;
        if (h == 0)
            h = db.clientHeight;
        w = de.clientWidth;
        if (w == 0)
            w = db.clientWidth;
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
    return rect.top >= scroll.top && rect.bottom <= scroll.top + size.h && rect.left >= scroll.left && rect.right <= scroll.left + size.w;
}
exports.isRectFullyVisible = isRectFullyVisible;
function scrollIntoView(element) {
    if (element && element.scrollIntoView) {
        element.scrollIntoView();
    }
}
exports.scrollIntoView = scrollIntoView;


/***/ }),

/***/ "./src/core/Gigya.Js/app/apiBootstrap.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/apiBootstrap.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var domains_1 = __webpack_require__(/*! ./Utils/domains */ "./src/core/Gigya.Js/app/Utils/domains.ts");
var Uri_1 = __webpack_require__(/*! ./Utils/Uri */ "./src/core/Gigya.Js/app/Utils/Uri.ts");
var defaultStorageDomain = function () { return (window.gigya === null || window.gigya === void 0 ? void 0 : window.gigya.configHostnameOverride) || domains_1.getStorageDomain(); };
var defaultApiDomain = function () { return domains_1.resolveApiDomain(); };
function getSdkConfig(domain, retries) {
    if (domain === void 0) { domain = defaultStorageDomain(); }
    if (retries === void 0) { retries = 0; }
    return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
        var apiKey;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiKey = window.gigya.apiKey;
                    return [4 /*yield*/, Uri_1.Uri.parse(domain + "/sdk.config.get")
                            .addToSearch({ apiKey: apiKey, httpStatusCodes: true })
                            .fetch(retries)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getSdkConfig = getSdkConfig;
function getSsoContext(ssoToken, domain, retries) {
    if (domain === void 0) { domain = defaultApiDomain(); }
    if (retries === void 0) { retries = 0; }
    return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
        var APIKey, e_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    APIKey = window.gigya.apiKey;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, Uri_1.Uri.parse(domain + "/accounts.sso.getContext")
                            .addToSearch({ APIKey: APIKey, ssoToken: ssoToken, format: 'json' })
                            .fetch(retries)];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    e_1 = _a.sent();
                    return [2 /*return*/, {}];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getSsoContext = getSsoContext;
// Consent status currently return only by api domain because the configuration is set by minor DC( should be save on major always)
// We should change the gigya._.getApiDomain('accounts') to defaultStorageDomain once the config is updated.
function getConsentStatus(config) {
    return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
        var domain, retries, apiKey, url;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    domain = (config === null || config === void 0 ? void 0 : config.domain) || window.gigya._.getApiDomain('accounts');
                    retries = (config === null || config === void 0 ? void 0 : config.retries) || 0;
                    apiKey = window.gigya.apiKey;
                    url = domain + "/sdk.getConsentStatus";
                    return [4 /*yield*/, Uri_1.Uri.parse(url)
                            .addToSearch({ apiKey: apiKey })
                            .fetch(retries)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getConsentStatus = getConsentStatus;


/***/ }),

/***/ "./src/core/Gigya.Js/app/cdn.ts":
/*!**************************************!*\
  !*** ./src/core/Gigya.Js/app/cdn.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var selectedCdnHostsIndex = 0;
exports.CDN_HOSTS = {
    http: ['cdn.gigya.com', 'cdn1.gigya.com', 'cdn2.gigya.com', 'cdn3.gigya.com'],
    https: ['cdns.gigya.com', 'cdns1.gigya.com', 'cdns2.gigya.com', 'cdns3.gigya.com'],
};
function getCdnResource(path) {
    var _a, _b, _c, _d;
    // gigya.thisScript may not exist if loaded for ssoOrig.
    var baseDomain = (_b = (_a = window.gigya.thisScript) === null || _a === void 0 ? void 0 : _a.baseDomain) !== null && _b !== void 0 ? _b : '';
    var protocol = (_d = (_c = window.gigya.thisScript) === null || _c === void 0 ? void 0 : _c.protocol) !== null && _d !== void 0 ? _d : 'https';
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


/***/ }),

/***/ "./src/core/ServiceProxy/ProxyListener.ts":
/*!************************************************!*\
  !*** ./src/core/ServiceProxy/ProxyListener.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var utils = __webpack_require__(/*! src/core/ServiceProxy/utils */ "./src/core/ServiceProxy/utils.ts");
var interfaces_1 = __webpack_require__(/*! src/core/ServiceProxy/interfaces */ "./src/core/ServiceProxy/interfaces.ts");
var ProxyListener = /** @class */ (function () {
    function ProxyListener(_service, origin, _allowedMethods, _target, _win) {
        var _this = this;
        if (origin === void 0) { origin = utils.getParentUrl(); }
        if (_allowedMethods === void 0) { _allowedMethods = utils.getAllClassMethodsNames(_service); }
        if (_target === void 0) { _target = window.parent; }
        if (_win === void 0) { _win = window; }
        this._service = _service;
        this.origin = origin;
        this._allowedMethods = _allowedMethods;
        this._target = _target;
        this._win = _win;
        this.stopCancellers = [];
        this._listening = false;
        this.onRequest = function (e) { return tslib_1.__awaiter(_this, void 0, gigya.Promise, function () {
            var req, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!utils.validateOrigin(this.origin, e.origin)) return [3 /*break*/, 7];
                        req = JSON.parse(e.data);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (!interfaces_1.isSignalRequest(req)) return [3 /*break*/, 3];
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
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_1 = _a.sent();
                        this.postError({ res: e_1.message || e_1, id: req.id });
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
    }
    Object.defineProperty(ProxyListener.prototype, "isListening", {
        get: function () {
            return this._listening;
        },
        enumerable: true,
        configurable: true
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
                            case 'stop': return [3 /*break*/, 1];
                        }
                        return [3 /*break*/, 7];
                    case 1: return [4 /*yield*/, this.getCancelResult()];
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
                    case 8: return [2 /*return*/];
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
                        _i = 0, _a = this.stopCancellers;
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
                        if (res)
                            return [2 /*return*/, res];
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/, undefined];
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
        if (!req.id || !req.methodName || this._allowedMethods.indexOf(req.methodName) < 0) {
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
                    case 2: return [2 /*return*/, result];
                }
            });
        });
    };
    ProxyListener.prototype.postMessage = function (msg) {
        var message = typeof msg === 'object' ? JSON.stringify(msg) : msg;
        this._target.postMessage(message, this.origin);
    };
    return ProxyListener;
}());
exports.ProxyListener = ProxyListener;


/***/ }),

/***/ "./src/core/ServiceProxy/interfaces.ts":
/*!*********************************************!*\
  !*** ./src/core/ServiceProxy/interfaces.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function isSignalRequest(req) {
    return Boolean(req.signal);
}
exports.isSignalRequest = isSignalRequest;


/***/ }),

/***/ "./src/core/ServiceProxy/utils.ts":
/*!****************************************!*\
  !*** ./src/core/ServiceProxy/utils.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getParentUrl = function (win, doc) {
    if (win === void 0) { win = window; }
    if (doc === void 0) { doc = document; }
    return (win.location != win.parent.location ? doc.referrer : doc.location.href);
};
exports.getBodyElement = function (doc) {
    if (doc === void 0) { doc = document; }
    return new gigya.Promise(function (resolve) {
        if (doc.body)
            resolve(doc.body);
        else
            doc.addEventListener('DOMContentLoaded', function () { return resolve(doc.body); });
    });
};
exports.validateOrigin = function (origin, checked) { var _a; return ((_a = origin === null || origin === void 0 ? void 0 : origin.toLowerCase()) === null || _a === void 0 ? void 0 : _a.indexOf(checked === null || checked === void 0 ? void 0 : checked.toLowerCase())) === 0; };
exports.createIframe = function (title, doc) {
    if (title === void 0) { title = 'Gigya Frame'; }
    if (doc === void 0) { doc = document; }
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
                .map(function (s) { return s.toString(); })
                .sort()
                .filter(function (p, i, arr) {
                return typeof proto[p] === 'function' && //only the methods
                    p !== 'constructor' && //not the constructor
                    (i == 0 || p !== arr[i - 1]) && //not overriding in this prototype
                    props.indexOf(p) === -1;
            });
            props = props.concat(l);
        }
        catch (e) {
            /** bug fix implementation - using custom our own filter logic
             case of Array.filter polyfill causing "can not read property '0' of undefined" **/
            var arr = Object.getOwnPropertyNames(proto)
                // .concat(Object.getOwnPropertySymbols(proto).map(s => s.toString()))
                .map(function (s) { return s.toString(); })
                .sort();
            var l = [];
            for (var i = 0; i < arr.length; i++) {
                var p = arr[i];
                if (typeof proto[p] === 'function' && //only the methods
                    p !== 'constructor' && //not the constructor
                    (i == 0 || p !== arr[i - 1]) && //not overriding in this prototype
                    props.indexOf(p) === -1) {
                    //not overridden in a child
                    l.push(p);
                }
            }
            props = props.concat(l);
        }
    } while ((proto = Object.getPrototypeOf(proto)) && //walk-up the prototype chain
        Object.getPrototypeOf(proto) //not the the Object prototype methods (hasOwnProperty, etc...)
    );
    return props;
};


/***/ }),

/***/ "./src/fidm/Gigya.JS.SSO/app/globalProvider.ts":
/*!*****************************************************!*\
  !*** ./src/fidm/Gigya.JS.SSO/app/globalProvider.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var GlobalProvider = /** @class */ (function () {
    function GlobalProvider() {
    }
    GlobalProvider.prototype.documentLocation = function () {
        return document.location;
    };
    GlobalProvider.prototype.postMessageToParent = function (message, targetOrigin, transfer) {
        window.parent.postMessage(message, targetOrigin, transfer);
    };
    return GlobalProvider;
}());
exports.GlobalProvider = GlobalProvider;
exports.default = new GlobalProvider();


/***/ }),

/***/ "./src/fidm/Gigya.JS.SSO/app/index.ts":
/*!********************************************!*\
  !*** ./src/fidm/Gigya.JS.SSO/app/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
__webpack_require__(/*! src/core/Gigya.Js/app/GigyaGlobals */ "./src/core/Gigya.Js/app/GigyaGlobals.ts");
__webpack_require__(/*! src/core/Gigya.Js/app/Logger/main */ "./src/core/Gigya.Js/app/Logger/main.ts");
var functions_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/functions */ "./src/core/Gigya.Js/app/Utils/functions.ts");
var sso_1 = __webpack_require__(/*! ./sso */ "./src/fidm/Gigya.JS.SSO/app/sso.ts");
exports.Sso = sso_1.Sso;
var Uri_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/Uri */ "./src/core/Gigya.Js/app/Utils/Uri.ts");
var ssoUtils_1 = __webpack_require__(/*! ./ssoUtils */ "./src/fidm/Gigya.JS.SSO/app/ssoUtils.ts");
exports.SsoUtils = ssoUtils_1.SsoUtils;
var GSErrors_1 = __webpack_require__(/*! src/core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var domains_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/domains */ "./src/core/Gigya.Js/app/Utils/domains.ts");
var apiBootstrap_1 = __webpack_require__(/*! src/core/Gigya.Js/app/apiBootstrap */ "./src/core/Gigya.Js/app/apiBootstrap.ts");
var ProxyListener_1 = __webpack_require__(/*! src/core/ServiceProxy/ProxyListener */ "./src/core/ServiceProxy/ProxyListener.ts");
(function main() {
    var _a, _b, _c, _d;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var webSdkConfig, ssoUtils, uri, qs, fullyDecodedQueryString, params, apiKey, configHostname, ssoService, listener, e_1, fragment;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    ssoUtils = new ssoUtils_1.SsoUtils();
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 4, , 5]);
                    uri = Uri_1.Uri.parse(ssoUtils.getPageUrl());
                    qs = uri.search;
                    if (!qs) {
                        if (typeof console === 'object' && console.log) {
                            console.log('Failed to init SSO iFrame.');
                        }
                        return [2 /*return*/];
                    }
                    fullyDecodedQueryString = ssoUtils.decodeUrl(qs);
                    if (fullyDecodedQueryString.match(/apikey=/gi).length > 1) {
                        window.gigya.logger.error('multiple apiKeys in query string are not allowed');
                        return [2 /*return*/];
                    }
                    params = ssoUtils.deserialize(qs);
                    if (!window.gigya.apiKey) // falling back to apiKey from query string in case something went wrong on our back end.
                        window.gigya.apiKey = params.APIKey;
                    apiKey = window.gigya.apiKey;
                    configHostname = ((_a = window.location) === null || _a === void 0 ? void 0 : _a.hostname) || domains_1.getStorageDomain();
                    return [4 /*yield*/, apiBootstrap_1.getSdkConfig(configHostname, 3)];
                case 2:
                    webSdkConfig = _e.sent();
                    if (!window.gigya._) {
                        window.gigya._ = {};
                    }
                    window.gigya._.config = {
                        flags: webSdkConfig.flags,
                        sso: webSdkConfig.sso,
                        plugins: webSdkConfig.plugins,
                        hostedPagesDomain: webSdkConfig.hostedPagesDomain,
                        toggles: {
                            linkAccountV2: (_b = webSdkConfig.toggles) === null || _b === void 0 ? void 0 : _b.linkAccountV2,
                            httpStatusCodes: (_c = webSdkConfig.toggles) === null || _c === void 0 ? void 0 : _c.httpStatusCodes
                        },
                        consent: {
                            hasLicense: (_d = webSdkConfig.hasConsentLicense) !== null && _d !== void 0 ? _d : false,
                        }
                    };
                    // waiting for async page load (we want to preserve stack trace in case of exceptions during sso.init)
                    return [4 /*yield*/, new gigya.Promise(function (r) { return functions_1.invokeOnPageLoad(r); })];
                case 3:
                    // waiting for async page load (we want to preserve stack trace in case of exceptions during sso.init)
                    _e.sent();
                    ssoService = new sso_1.Sso(apiKey, params.sourceKey, params.ssoSegment, webSdkConfig.sso, ssoUtils);
                    if (params.oneFrame) {
                        listener = new ProxyListener_1.ProxyListener(ssoService, params.origin);
                        listener.listen();
                    }
                    else {
                        ssoService.init();
                    }
                    return [3 /*break*/, 5];
                case 4:
                    e_1 = _e.sent();
                    fragment = ssoUtils.deserialize(ssoUtils.getFragment());
                    if (fragment.callbackID || fragment.d) {
                        ssoUtils.sendMessage({
                            status: 'FAILED_TO_LOAD_SSO',
                            errorCode: GSErrors_1.GSErrors.NETWORK_ERROR,
                            errorMessage: 'gigya: error loading sso frame',
                            e: e_1,
                            ssoConfig: webSdkConfig.sso
                        }, fragment.callbackID, fragment.d);
                    }
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
})();


/***/ }),

/***/ "./src/fidm/Gigya.JS.SSO/app/sso.ts":
/*!******************************************!*\
  !*** ./src/fidm/Gigya.JS.SSO/app/sso.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var GSErrors_1 = __webpack_require__(/*! src/core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var ssoUtils_1 = __webpack_require__(/*! src/fidm/Gigya.JS.SSO/app/ssoUtils */ "./src/fidm/Gigya.JS.SSO/app/ssoUtils.ts");
var Sso = /** @class */ (function () {
    function Sso(_apiKey, _siteApiKey, _ssoSegment, _ssoConfig, _utils, _storage) {
        var _this = this;
        if (_ssoConfig === void 0) { _ssoConfig = {
            validDomains: [],
            logoutURLs: {},
            canaryCookiesNames: {
                isCanary: 'gig_isCanary',
                version: 'gig_canary_ver'
            }
        }; }
        if (_utils === void 0) { _utils = new ssoUtils_1.SsoUtils(); }
        if (_storage === void 0) { _storage = _utils.getCookiesStorage(); }
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
                            console.log("gigya sso: invalid use");
                            return [2 /*return*/];
                        }
                        else if (!this._utils.isValidDomain(this._ssoConfig.validDomains, this._requestDomain)) {
                            console.log("gigya sso: " + this._requestDomain + " is not in valid domain: " + this._ssoConfig.validDomains.join(','));
                            return [2 /*return*/];
                        }
                        _a = params.m;
                        switch (_a) {
                            case 'logout': return [3 /*break*/, 1];
                            case 'removeToken': return [3 /*break*/, 3];
                            case 'getToken': return [3 /*break*/, 5];
                            case 'setToken': return [3 /*break*/, 7];
                            case 'setGroupContext': return [3 /*break*/, 9];
                            case 'setLoginTokenExp': return [3 /*break*/, 11];
                            case 'getLoginTokenExp': return [3 /*break*/, 13];
                            case 'checkTokenRenew': return [3 /*break*/, 15];
                            case 'syncCanaryIndication': return [3 /*break*/, 17];
                            case 'setGroupApiDomain': return [3 /*break*/, 19];
                            case 'getGroupApiDomain': return [3 /*break*/, 21];
                        }
                        return [3 /*break*/, 23];
                    case 1: return [4 /*yield*/, this.logout()];
                    case 2:
                        response = _b.sent();
                        return [3 /*break*/, 24];
                    case 3: return [4 /*yield*/, this.removeToken()];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 24];
                    case 5: return [4 /*yield*/, this.getToken()];
                    case 6:
                        response = _b.sent();
                        return [3 /*break*/, 24];
                    case 7: return [4 /*yield*/, this.setToken(params.lt, String(params.expiration), params.gltexp)];
                    case 8:
                        _b.sent();
                        return [3 /*break*/, 24];
                    case 9: return [4 /*yield*/, this.setGroupContext(params.groupContext)];
                    case 10:
                        _b.sent();
                        return [3 /*break*/, 24];
                    case 11: return [4 /*yield*/, this.setTokenExpiration(params.loginTokenExp)];
                    case 12:
                        response = _b.sent();
                        return [3 /*break*/, 24];
                    case 13: return [4 /*yield*/, this.getTokenExpiration()];
                    case 14:
                        response = _b.sent();
                        return [3 /*break*/, 24];
                    case 15: return [4 /*yield*/, this.checkTokenRenew(params.loginToken)];
                    case 16:
                        response = _b.sent();
                        return [3 /*break*/, 24];
                    case 17: return [4 /*yield*/, this.syncCanaryIndication(params.isCanary, params.canaryVersion)];
                    case 18:
                        response = _b.sent();
                        return [3 /*break*/, 24];
                    case 19: return [4 /*yield*/, this.setGroupApiDomain(params.domain)];
                    case 20:
                        _b.sent();
                        return [3 /*break*/, 24];
                    case 21: return [4 /*yield*/, this.getGroupApiDomain()];
                    case 22:
                        response = _b.sent();
                        return [3 /*break*/, 24];
                    case 23:
                        response = {
                            errorCode: GSErrors_1.GSErrors.INVALID_API_METHOD,
                        };
                        _b.label = 24;
                    case 24:
                        this._utils.sendMessage(response, this._callbackID, this._requestDomain);
                        return [2 /*return*/];
                }
            });
        });
    };
    Sso.prototype.getGroupApiDomain = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var domain;
            return tslib_1.__generator(this, function (_a) {
                domain = this._storage.getItem("apiDomain_" + this._apiKey);
                return [2 /*return*/, {
                        errorCode: GSErrors_1.GSErrors.OK,
                        domain: domain
                    }];
            });
        });
    };
    Sso.prototype.setGroupApiDomain = function (domain) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            return tslib_1.__generator(this, function (_a) {
                this._storage.setItem("apiDomain_" + this._apiKey, domain);
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
                        this._storage.removeItem(this._storageKey + "_visited");
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
                this._storage.removeItem(this._storageKey + "_exp");
                this._storage.removeItem(this._storageKey + "_gltexp");
                this._storage.removeItem(this._storageKey + "_session");
                this._storage.removeItem(this._storageKey + "_context");
                return [2 /*return*/];
            });
        });
    };
    Sso.prototype.getToken = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var errorCode, lt, storageExp, exp, twoYearFromNow, gltexp, groupContext, inSession, response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        errorCode = 0;
                        lt = this._storage.getItem(this._storageKey);
                        storageExp = this._storage.getItem(this._storageKey + "_exp");
                        if (storageExp === 'undefined') {
                            exp = Date.now() - 1000;
                        }
                        else {
                            exp = Number(storageExp);
                            twoYearFromNow = Date.now() + (1000 * 60 * 60 * 24 * 365 * 2);
                            if (exp > twoYearFromNow) {
                                exp = Date.now() - 1000;
                            }
                        }
                        gltexp = this._storage.getItem(this._storageKey + "_gltexp");
                        groupContext = this._storage.getItem(this._storageKey + "_context");
                        inSession = gltexp || this._storage.getItem(this._storageKey + "_session") === '1';
                        if (!(!isNaN(exp) && ((exp === 0 && !inSession) || (exp > 0 && new Date().getTime() > exp)))) return [3 /*break*/, 2];
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
                            return [2 /*return*/, {
                                    errorCode: GSErrors_1.GSErrors.UNAUTHORIZED_USER,
                                }];
                        }
                        else {
                            this._markSiteVisited();
                        }
                        response = {
                            errorCode: errorCode,
                            login_token: lt,
                            expires_in: exp === 0 ? 0 : Math.round((exp - new Date().getTime()) / 1000),
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
                        oldToken = (_a = this._storage.getItem(this._storageKey)) === null || _a === void 0 ? void 0 : _a.split('|')[0];
                        if (lt !== oldToken) {
                            this._markRevokedLoginToken(oldToken);
                        }
                        if (lt) {
                            this._storage.setItem(this._storageKey, lt);
                        }
                        if (expiration) {
                            expiresIn = typeof expiration === 'string' && expiration ? Number(expiration) : expiration;
                            if (expiresIn === 0) {
                                // Session cookie or dynamic session cookie.
                                // Either way, flag the expiration as 0.
                                expiration = 0;
                            }
                            else {
                                expiresInMs = void 0;
                                if (!expiresIn || expiresIn === -2) {
                                    expiresInMs = 1000 * 60 * 60 * 24 * 365;
                                }
                                else {
                                    expiresInMs = Number(expiresIn) * 1000;
                                }
                                // Convert expires in milliseconds to an a timestamp (also milliseconds).
                                expiresIn = Date.now() + expiresInMs;
                            }
                            this._storage.setItem(this._storageKey + "_exp", "" + expiresIn);
                            if (expiration === 0) {
                                this._storage.setItem(this._storageKey + "_session", '1', 0);
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
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Sso.prototype.setGroupContext = function (groupContext) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this._storage.setItem(this._storageKey + "_context", JSON.stringify(groupContext));
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
                        if (!!this._utils.isValidGltExp(gltexp)) return [3 /*break*/, 1];
                        this._storage.removeItem(this._storageKey + "_gltexp");
                        gltexp = null;
                        return [3 /*break*/, 3];
                    case 1:
                        _b = (_a = this._utils).getMaxGltExp;
                        _c = [gltexp];
                        return [4 /*yield*/, this.getTokenExpiration()];
                    case 2:
                        gltexp = _b.apply(_a, _c.concat([(_d.sent()).gltexp]));
                        this._storage.setItem(this._storageKey + "_gltexp", gltexp);
                        this._storage.removeItem(this._storageKey + "_exp");
                        _d.label = 3;
                    case 3: return [2 /*return*/, {
                            errorCode: GSErrors_1.GSErrors.OK,
                            gltexp: gltexp,
                        }];
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
                    return [2 /*return*/, {
                            errorCode: GSErrors_1.GSErrors.UNAUTHORIZED_USER,
                        }];
                }
                return [2 /*return*/, {
                        errorCode: GSErrors_1.GSErrors.OK,
                        gltexp: this._storage.getItem(this._storageKey + "_gltexp"),
                    }];
            });
        });
    };
    Sso.prototype.checkTokenRenew = function (loginToken) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var groupToken, invalidTokens, isInvalid;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getToken()];
                    case 1:
                        groupToken = _a.sent();
                        invalidTokens = this._storage.getItem(this._storageKey + "_revoked_tokens") || '';
                        isInvalid = invalidTokens.indexOf(loginToken) >= 0;
                        if (!!isInvalid) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.setToken(loginToken)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { errorCode: GSErrors_1.GSErrors.OK }];
                    case 3:
                        if (groupToken.errorCode === GSErrors_1.GSErrors.OK && invalidTokens.indexOf(groupToken.login_token) < 0) {
                            // just changing the error code - but returning the same session info of the group
                            groupToken.errorCode = GSErrors_1.GSErrors.TOKEN_HAS_RENEWED;
                            return [2 /*return*/, groupToken];
                        }
                        else {
                            return [2 /*return*/, { errorCode: GSErrors_1.GSErrors.INVALID_TOKEN }];
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Sso.prototype.syncCanaryIndication = function (isCanary, versionSignature) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var SSOIsCanary, SSOVersionSignature, response, siteCanaryVersion, SSOCanaryVersion;
            return tslib_1.__generator(this, function (_a) {
                if (!this._canaryKey || !this._canaryVerKey) {
                    return [2 /*return*/, { errorCode: GSErrors_1.GSErrors.INVALID_ENVIRONMENT_CONFIG }];
                }
                SSOIsCanary = this._storage.getItem(this._canaryKey);
                SSOVersionSignature = this._storage.getItem(this._canaryVerKey);
                response = {
                    errorCode: GSErrors_1.GSErrors.OK,
                    isCanary: isCanary,
                    canaryVersion: versionSignature,
                };
                if (!this._utils.validations().allDefinedOrAllUndefined(SSOIsCanary, SSOVersionSignature)) {
                    // not legal
                    response.errorCode = GSErrors_1.GSErrors.INVALID_PARAMETER_VALUE;
                    return [2 /*return*/, response];
                }
                if (!this._utils.validations().allDefinedOrAllUndefined(isCanary, versionSignature)) {
                    // not legal
                    return [2 /*return*/, {
                            errorCode: GSErrors_1.GSErrors.INVALID_PARAMETER_VALUE,
                            isCanary: SSOIsCanary,
                            canaryVersion: SSOVersionSignature,
                        }];
                }
                siteCanaryVersion = this._parseCanaryVersionSignature(versionSignature);
                SSOCanaryVersion = this._parseCanaryVersionSignature(SSOVersionSignature);
                if (siteCanaryVersion.timestamp > SSOCanaryVersion.timestamp) {
                    this._storage.setItem(this._canaryKey, isCanary);
                    this._storage.setItem(this._canaryVerKey, versionSignature);
                }
                else {
                    response.isCanary = SSOIsCanary;
                    response.canaryVersion = SSOVersionSignature;
                }
                return [2 /*return*/, response];
            });
        });
    };
    Sso.prototype._markSiteVisited = function () {
        var visitedStorageKey = this._storageKey + "_visited";
        var visited = this._storage.getItem(visitedStorageKey) || '';
        if (visited.indexOf(this._siteApiKey) === -1) {
            visited += ',' + this._siteApiKey;
        }
        this._storage.setItem(visitedStorageKey, visited);
    };
    Sso.prototype._markRevokedLoginToken = function (loginToken) {
        if (!loginToken)
            return;
        var invalidTokensStorageKey = this._storageKey + "_revoked_tokens";
        var invalidTokens = this._storage.getItem(invalidTokensStorageKey) || '';
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
        var visited = this._storage.getItem(this._storageKey + "_visited");
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
        return name + "_" + this._apiKey + (this._ssoSegment ? "_" + this._ssoSegment : '');
    };
    Sso.prototype._parseCanaryVersionSignature = function (canaryVersionSig) {
        var defaultData = { build: 0, probability: 0, timestamp: -1 };
        if (!canaryVersionSig)
            return defaultData;
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
}());
exports.Sso = Sso;


/***/ }),

/***/ "./src/fidm/Gigya.JS.SSO/app/ssoUtils.ts":
/*!***********************************************!*\
  !*** ./src/fidm/Gigya.JS.SSO/app/ssoUtils.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var Uri_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/Uri */ "./src/core/Gigya.Js/app/Utils/Uri.ts");
var validationUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/validation */ "./src/core/Gigya.Js/app/Utils/validation.ts");
var globalProvider_1 = __webpack_require__(/*! ./globalProvider */ "./src/fidm/Gigya.JS.SSO/app/globalProvider.ts");
var localStorage_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/localStorage */ "./src/core/Gigya.Js/app/Utils/localStorage.ts");
var keyValue_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/keyValue */ "./src/core/Gigya.Js/app/Utils/keyValue.ts");
var gltexp_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/gltexp */ "./src/core/Gigya.Js/app/Utils/gltexp.ts");
var URL_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/URL */ "./src/core/Gigya.Js/app/Utils/URL.ts");
var defaultValidDomains = ['gigya-api.com', 'gigya-api.cn', 'gigya.com', 'my.gigya-ext.com', 'localhost'];
var SsoUtils = /** @class */ (function () {
    function SsoUtils(_global, _defaultValidDomains) {
        if (_global === void 0) { _global = globalProvider_1.default; }
        if (_defaultValidDomains === void 0) { _defaultValidDomains = defaultValidDomains; }
        this._global = _global;
        this._defaultValidDomains = _defaultValidDomains;
    }
    SsoUtils.prototype.getPageUrl = function () {
        return this._global.documentLocation().toString();
    };
    SsoUtils.prototype.isValidDomain = function (validDomains, candidate) {
        var domain = Uri_1.Uri.parse(candidate).domain;
        var arValidDomains = validDomains.concat(this._defaultValidDomains);
        for (var i = 0; i < arValidDomains.length; i++) {
            var validDomain = arValidDomains[i].replace('*', '').split(':')[0];
            var indexOfValidDomain = domain.indexOf(validDomain);
            if (indexOfValidDomain >= 0 &&
                indexOfValidDomain === domain.length - validDomain.length &&
                (indexOfValidDomain === 0 || domain.charAt(indexOfValidDomain - 1) === '.' || domain.charAt(indexOfValidDomain - 1) === '/')) {
                return true;
            }
        }
        return false;
    };
    SsoUtils.prototype.sendMessage = function (res, callbackID, requestDomain) {
        var strMessage = '';
        for (var p in res) {
            if (res[p] != null) {
                strMessage += escape(p + '=' + encodeURIComponent(res[p]) + '&');
            }
        }
        this._global.postMessageToParent(callbackID + '=' + strMessage, requestDomain);
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
        return localStorage_1.initializeAdapter(localStorage_1.CookieStorageAdapter);
    };
    SsoUtils.prototype.validations = function () {
        return validationUtils;
    };
    SsoUtils.prototype.UriFactory = function (url, isAbsolute) {
        if (isAbsolute === void 0) { isAbsolute = true; }
        return new Uri_1.Uri(url, isAbsolute);
    };
    SsoUtils.prototype.getFragment = function () {
        var pageURL = this.getPageUrl();
        if (pageURL.indexOf('#') !== -1) {
            return pageURL.split('#')[1];
        }
        return null;
    };
    ;
    return SsoUtils;
}());
exports.SsoUtils = SsoUtils;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2NvbmZpZy92ZXJzaW9uVGVtcGxhdGUudHh0Iiwid2VicGFjazovLy9saWIvZXM2LXByb21pc2UvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2xpYi9lczYtcHJvbWlzZS9hc2FwLmpzIiwid2VicGFjazovLy9saWIvZXM2LXByb21pc2UvdGhlbi5qcyIsIndlYnBhY2s6Ly8vbGliL2VzNi1wcm9taXNlL3Byb21pc2UvcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vbGliL2VzNi1wcm9taXNlLy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vbGliL2VzNi1wcm9taXNlL2VudW1lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vL2xpYi9lczYtcHJvbWlzZS9wcm9taXNlL2FsbC5qcyIsIndlYnBhY2s6Ly8vbGliL2VzNi1wcm9taXNlL3Byb21pc2UvcmFjZS5qcyIsIndlYnBhY2s6Ly8vbGliL2VzNi1wcm9taXNlL3Byb21pc2UvcmVqZWN0LmpzIiwid2VicGFjazovLy9saWIvZXM2LXByb21pc2UvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vbGliL2VzNi1wcm9taXNlL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy9saWIvZXM2LXByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL0dTRXJyb3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9HaWd5YUdsb2JhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvY2FsSW5mby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9nZ2VyL2Jhc2VMb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvZ2dlci9pRnJhbWVMb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvZ2dlci9pbnRlcmZhY2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2dnZXIvbG9nZ2VySnNvbnAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvZ2dlci9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2dnZXIvcGFyZW50TG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9TZXJ2aWNlcy9GbGFnU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvRE9NLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9KU09OLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9VUkwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL1VyaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvY29va2llLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9kb21haW5zLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9mdW5jdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2dpZ3lhU2NyaXB0RWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2dsb2JhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvZ2x0ZXhwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9rZXlWYWx1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvbG9jYWxTdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3N0cmluZ1BhcmFtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvc3RyaW5nVXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3RvZ2dsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3ZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3ZpZXdwb3J0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9hcGlCb290c3RyYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL2Nkbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9TZXJ2aWNlUHJveHkvUHJveHlMaXN0ZW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9TZXJ2aWNlUHJveHkvaW50ZXJmYWNlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9TZXJ2aWNlUHJveHkvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZG0vR2lneWEuSlMuU1NPL2FwcC9nbG9iYWxQcm92aWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlkbS9HaWd5YS5KUy5TU08vYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9maWRtL0dpZ3lhLkpTLlNTTy9hcHAvc3NvLnRzIiwid2VicGFjazovLy8uL3NyYy9maWRtL0dpZ3lhLkpTLlNTTy9hcHAvc3NvVXRpbHMudHMiXSwibmFtZXMiOlsicmVzb2x2ZSIsIl9yZXNvbHZlIiwidGhlbiIsIm9yaWdpbmFsVGhlbiIsIm9yaWdpbmFsUmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJfcmVqZWN0IiwiUmVzb2x2ZSIsIlJlamVjdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTk8sU0FBUyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUU7RUFDbEMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUM7RUFDcEIsT0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDO0NBQ2pFOztBQUVNLFNB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QUMsR0FBRyxVQUFVLENBQUM7UUFFL0UsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNULEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUM5QixHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDOUUsRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUM3RTtJQUVELEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFUCxRQUFRLFNBQVMsRUFBRTtRQUNmLEtBQUssQ0FBQztZQUNGLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQyxLQUFLLENBQUM7WUFDRixFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsS0FBSyxDQUFDO1lBQ0YsRUFBRSxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBRS9CLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMs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QUFDO0lBRU0sNkJBQVUsR0FBakIsVUFBa0IsR0FBVyxFQUFFLFVBQWlCO1FBQWpCLDhDQUFpQjtRQUM1QyxPQUFPLElBQUksU0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sOEJBQVcsR0FBbEI7UUFDSSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzdCLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQztRQUVBLE9BQU8sSUFBSSxDQUFDO0lBQ2pCLENBQUM7SUFBQSxDQUFDO0lBQ04sZUFBQztBQUFELENBQUM7QUF4RVksNEJBQVEiLCJmaWxlIjoiZ2lneWEuc3NvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZmlkbS9HaWd5YS5KUy5TU08vYXBwL2luZGV4LnRzXCIpO1xuIiwiLyohXG4gKiBAb3ZlcnZpZXcgZXM2LXByb21pc2UgLSBhIHRpbnkgaW1wbGVtZW50YXRpb24gb2YgUHJvbWlzZXMvQSsuXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNCBZZWh1ZGEgS2F0eiwgVG9tIERhbGUsIFN0ZWZhbiBQZW5uZXIgYW5kIGNvbnRyaWJ1dG9ycyAoQ29udmVyc2lvbiB0byBFUzYgQVBJIGJ5IEpha2UgQXJjaGliYWxkKVxuICogQGxpY2Vuc2UgICBMaWNlbnNlZCB1bmRlciBNSVQgbGljZW5zZVxuICogICAgICAgICAgICBTZWUgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3N0ZWZhbnBlbm5lci9lczYtcHJvbWlzZS9tYXN0ZXIvTElDRU5TRVxuICogQHZlcnNpb24gICB2NC4yLjgrMWU2OGRjZTZcbiAqL1xuIiwiZXhwb3J0IGZ1bmN0aW9uIG9iamVjdE9yRnVuY3Rpb24oeCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB4O1xuICByZXR1cm4geCAhPT0gbnVsbCAmJiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNYXliZVRoZW5hYmxlKHgpIHtcbiAgcmV0dXJuIHggIT09IG51bGwgJiYgdHlwZW9mIHggPT09ICdvYmplY3QnO1xufVxuXG52YXIgX2lzQXJyYXkgPSB2b2lkIDA7XG5pZiAoQXJyYXkuaXNBcnJheSkge1xuICBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG59IGVsc2Uge1xuICBfaXNBcnJheSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfTtcbn1cblxuZXhwb3J0IHZhciBpc0FycmF5ID0gX2lzQXJyYXk7IiwidmFyIGxlbiA9IDA7XG52YXIgdmVydHhOZXh0ID0gdm9pZCAwO1xudmFyIGN1c3RvbVNjaGVkdWxlckZuID0gdm9pZCAwO1xuXG5leHBvcnQgdmFyIGFzYXAgPSBmdW5jdGlvbiBhc2FwKGNhbGxiYWNrLCBhcmcpIHtcbiAgcXVldWVbbGVuXSA9IGNhbGxiYWNrO1xuICBxdWV1ZVtsZW4gKyAxXSA9IGFyZztcbiAgbGVuICs9IDI7XG4gIGlmIChsZW4gPT09IDIpIHtcbiAgICAvLyBJZiBsZW4gaXMgMiwgdGhhdCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gc2NoZWR1bGUgYW4gYXN5bmMgZmx1c2guXG4gICAgLy8gSWYgYWRkaXRpb25hbCBjYWxsYmFja3MgYXJlIHF1ZXVlZCBiZWZvcmUgdGhlIHF1ZXVlIGlzIGZsdXNoZWQsIHRoZXlcbiAgICAvLyB3aWxsIGJlIHByb2Nlc3NlZCBieSB0aGlzIGZsdXNoIHRoYXQgd2UgYXJlIHNjaGVkdWxpbmcuXG4gICAgaWYgKGN1c3RvbVNjaGVkdWxlckZuKSB7XG4gICAgICBjdXN0b21TY2hlZHVsZXJGbihmbHVzaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjaGVkdWxlRmx1c2goKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTY2hlZHVsZXIoc2NoZWR1bGVGbikge1xuICBjdXN0b21TY2hlZHVsZXJGbiA9IHNjaGVkdWxlRm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBc2FwKGFzYXBGbikge1xuICBhc2FwID0gYXNhcEZuO1xufVxuXG52YXIgYnJvd3NlcldpbmRvdyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdW5kZWZpbmVkO1xudmFyIGJyb3dzZXJHbG9iYWwgPSBicm93c2VyV2luZG93IHx8IHt9O1xudmFyIEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyID0gYnJvd3Nlckdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGJyb3dzZXJHbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBpc05vZGUgPSB0eXBlb2Ygc2VsZiA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHt9LnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJztcblxuLy8gdGVzdCBmb3Igd2ViIHdvcmtlciBidXQgbm90IGluIElFMTBcbnZhciBpc1dvcmtlciA9IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGltcG9ydFNjcmlwdHMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8vIG5vZGVcbmZ1bmN0aW9uIHVzZU5leHRUaWNrKCkge1xuICAvLyBub2RlIHZlcnNpb24gMC4xMC54IGRpc3BsYXlzIGEgZGVwcmVjYXRpb24gd2FybmluZyB3aGVuIG5leHRUaWNrIGlzIHVzZWQgcmVjdXJzaXZlbHlcbiAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jdWpvanMvd2hlbi9pc3N1ZXMvNDEwIGZvciBkZXRhaWxzXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICB9O1xufVxuXG4vLyB2ZXJ0eFxuZnVuY3Rpb24gdXNlVmVydHhUaW1lcigpIHtcbiAgaWYgKHR5cGVvZiB2ZXJ0eE5leHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZlcnR4TmV4dChmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB1c2VTZXRUaW1lb3V0KCk7XG59XG5cbmZ1bmN0aW9uIHVzZU11dGF0aW9uT2JzZXJ2ZXIoKSB7XG4gIHZhciBpdGVyYXRpb25zID0gMDtcbiAgdmFyIG9ic2VydmVyID0gbmV3IEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKGZsdXNoKTtcbiAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gIG9ic2VydmVyLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgbm9kZS5kYXRhID0gaXRlcmF0aW9ucyA9ICsraXRlcmF0aW9ucyAlIDI7XG4gIH07XG59XG5cbi8vIHdlYiB3b3JrZXJcbmZ1bmN0aW9uIHVzZU1lc3NhZ2VDaGFubmVsKCkge1xuICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZsdXNoO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VTZXRUaW1lb3V0KCkge1xuICAvLyBTdG9yZSBzZXRUaW1lb3V0IHJlZmVyZW5jZSBzbyBlczYtcHJvbWlzZSB3aWxsIGJlIHVuYWZmZWN0ZWQgYnlcbiAgLy8gb3RoZXIgY29kZSBtb2RpZnlpbmcgc2V0VGltZW91dCAobGlrZSBzaW5vbi51c2VGYWtlVGltZXJzKCkpXG4gIHZhciBnbG9iYWxTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2xvYmFsU2V0VGltZW91dChmbHVzaCwgMSk7XG4gIH07XG59XG5cbnZhciBxdWV1ZSA9IG5ldyBBcnJheSgxMDAwKTtcbmZ1bmN0aW9uIGZsdXNoKCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgdmFyIGNhbGxiYWNrID0gcXVldWVbaV07XG4gICAgdmFyIGFyZyA9IHF1ZXVlW2kgKyAxXTtcblxuICAgIGNhbGxiYWNrKGFyZyk7XG5cbiAgICBxdWV1ZVtpXSA9IHVuZGVmaW5lZDtcbiAgICBxdWV1ZVtpICsgMV0gPSB1bmRlZmluZWQ7XG4gIH1cblxuICBsZW4gPSAwO1xufVxuXG5mdW5jdGlvbiBhdHRlbXB0VmVydHgoKSB7XG4gIHRyeSB7XG4gICAgdmFyIHZlcnR4ID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKS5yZXF1aXJlKCd2ZXJ0eCcpO1xuICAgIHZlcnR4TmV4dCA9IHZlcnR4LnJ1bk9uTG9vcCB8fCB2ZXJ0eC5ydW5PbkNvbnRleHQ7XG4gICAgcmV0dXJuIHVzZVZlcnR4VGltZXIoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB1c2VTZXRUaW1lb3V0KCk7XG4gIH1cbn1cblxudmFyIHNjaGVkdWxlRmx1c2ggPSB2b2lkIDA7XG4vLyBEZWNpZGUgd2hhdCBhc3luYyBtZXRob2QgdG8gdXNlIHRvIHRyaWdnZXJpbmcgcHJvY2Vzc2luZyBvZiBxdWV1ZWQgY2FsbGJhY2tzOlxuaWYgKGlzTm9kZSkge1xuICBzY2hlZHVsZUZsdXNoID0gdXNlTmV4dFRpY2soKTtcbn0gZWxzZSBpZiAoQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgc2NoZWR1bGVGbHVzaCA9IHVzZU11dGF0aW9uT2JzZXJ2ZXIoKTtcbn0gZWxzZSBpZiAoaXNXb3JrZXIpIHtcbiAgc2NoZWR1bGVGbHVzaCA9IHVzZU1lc3NhZ2VDaGFubmVsKCk7XG59IGVsc2UgaWYgKGJyb3dzZXJXaW5kb3cgPT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICBzY2hlZHVsZUZsdXNoID0gYXR0ZW1wdFZlcnR4KCk7XG59IGVsc2Uge1xuICBzY2hlZHVsZUZsdXNoID0gdXNlU2V0VGltZW91dCgpO1xufSIsImltcG9ydCB7IGludm9rZUNhbGxiYWNrLCBzdWJzY3JpYmUsIEZVTEZJTExFRCwgUkVKRUNURUQsIG5vb3AsIG1ha2VQcm9taXNlLCBQUk9NSVNFX0lEIH0gZnJvbSAnLi8taW50ZXJuYWwnO1xuXG5pbXBvcnQgeyBhc2FwIH0gZnJvbSAnLi9hc2FwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICB2YXIgcGFyZW50ID0gdGhpcztcblxuICB2YXIgY2hpbGQgPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihub29wKTtcblxuICBpZiAoY2hpbGRbUFJPTUlTRV9JRF0gPT09IHVuZGVmaW5lZCkge1xuICAgIG1ha2VQcm9taXNlKGNoaWxkKTtcbiAgfVxuXG4gIHZhciBfc3RhdGUgPSBwYXJlbnQuX3N0YXRlO1xuXG5cbiAgaWYgKF9zdGF0ZSkge1xuICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1tfc3RhdGUgLSAxXTtcbiAgICBhc2FwKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBpbnZva2VDYWxsYmFjayhfc3RhdGUsIGNoaWxkLCBjYWxsYmFjaywgcGFyZW50Ll9yZXN1bHQpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbik7XG4gIH1cblxuICByZXR1cm4gY2hpbGQ7XG59IiwiaW1wb3J0IHsgbm9vcCwgcmVzb2x2ZSBhcyBfcmVzb2x2ZSB9IGZyb20gJy4uLy1pbnRlcm5hbCc7XG5cbi8qKlxuICBgUHJvbWlzZS5yZXNvbHZlYCByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgYmVjb21lIHJlc29sdmVkIHdpdGggdGhlXG4gIHBhc3NlZCBgdmFsdWVgLiBJdCBpcyBzaG9ydGhhbmQgZm9yIHRoZSBmb2xsb3dpbmc6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgcmVzb2x2ZSgxKTtcbiAgfSk7XG5cbiAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAvLyB2YWx1ZSA9PT0gMVxuICB9KTtcbiAgYGBgXG5cbiAgSW5zdGVhZCBvZiB3cml0aW5nIHRoZSBhYm92ZSwgeW91ciBjb2RlIG5vdyBzaW1wbHkgYmVjb21lcyB0aGUgZm9sbG93aW5nOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoMSk7XG5cbiAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAvLyB2YWx1ZSA9PT0gMVxuICB9KTtcbiAgYGBgXG5cbiAgQG1ldGhvZCByZXNvbHZlXG4gIEBzdGF0aWNcbiAgQHBhcmFtIHtBbnl9IHZhbHVlIHZhbHVlIHRoYXQgdGhlIHJldHVybmVkIHByb21pc2Ugd2lsbCBiZSByZXNvbHZlZCB3aXRoXG4gIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgQHJldHVybiB7UHJvbWlzZX0gYSBwcm9taXNlIHRoYXQgd2lsbCBiZWNvbWUgZnVsZmlsbGVkIHdpdGggdGhlIGdpdmVuXG4gIGB2YWx1ZWBcbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlKG9iamVjdCkge1xuICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuXG4gIGlmIChvYmplY3QgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0LmNvbnN0cnVjdG9yID09PSBDb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cblxuICB2YXIgcHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3Rvcihub29wKTtcbiAgX3Jlc29sdmUocHJvbWlzZSwgb2JqZWN0KTtcbiAgcmV0dXJuIHByb21pc2U7XG59IiwiaW1wb3J0IHsgb2JqZWN0T3JGdW5jdGlvbiwgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5pbXBvcnQgeyBhc2FwIH0gZnJvbSAnLi9hc2FwJztcblxuaW1wb3J0IG9yaWdpbmFsVGhlbiBmcm9tICcuL3RoZW4nO1xuaW1wb3J0IG9yaWdpbmFsUmVzb2x2ZSBmcm9tICcuL3Byb21pc2UvcmVzb2x2ZSc7XG5cbmV4cG9ydCB2YXIgUFJPTUlTRV9JRCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyKTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBQRU5ESU5HID0gdm9pZCAwO1xudmFyIEZVTEZJTExFRCA9IDE7XG52YXIgUkVKRUNURUQgPSAyO1xuXG5mdW5jdGlvbiBzZWxmRnVsZmlsbG1lbnQoKSB7XG4gIHJldHVybiBuZXcgVHlwZUVycm9yKFwiWW91IGNhbm5vdCByZXNvbHZlIGEgcHJvbWlzZSB3aXRoIGl0c2VsZlwiKTtcbn1cblxuZnVuY3Rpb24gY2Fubm90UmV0dXJuT3duKCkge1xuICByZXR1cm4gbmV3IFR5cGVFcnJvcignQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLicpO1xufVxuXG5mdW5jdGlvbiB0cnlUaGVuKHRoZW4sIHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpIHtcbiAgdHJ5IHtcbiAgICB0aGVuLmNhbGwodmFsdWUsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVGb3JlaWduVGhlbmFibGUocHJvbWlzZSwgdGhlbmFibGUsIHRoZW4pIHtcbiAgYXNhcChmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgIHZhciBzZWFsZWQgPSBmYWxzZTtcbiAgICB2YXIgZXJyb3IgPSB0cnlUaGVuKHRoZW4sIHRoZW5hYmxlLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmIChzZWFsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2VhbGVkID0gdHJ1ZTtcbiAgICAgIGlmICh0aGVuYWJsZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICBpZiAoc2VhbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNlYWxlZCA9IHRydWU7XG5cbiAgICAgIHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgIH0sICdTZXR0bGU6ICcgKyAocHJvbWlzZS5fbGFiZWwgfHwgJyB1bmtub3duIHByb21pc2UnKSk7XG5cbiAgICBpZiAoIXNlYWxlZCAmJiBlcnJvcikge1xuICAgICAgc2VhbGVkID0gdHJ1ZTtcbiAgICAgIHJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgfVxuICB9LCBwcm9taXNlKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlT3duVGhlbmFibGUocHJvbWlzZSwgdGhlbmFibGUpIHtcbiAgaWYgKHRoZW5hYmxlLl9zdGF0ZSA9PT0gRlVMRklMTEVEKSB7XG4gICAgZnVsZmlsbChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcbiAgfSBlbHNlIGlmICh0aGVuYWJsZS5fc3RhdGUgPT09IFJFSkVDVEVEKSB7XG4gICAgcmVqZWN0KHByb21pc2UsIHRoZW5hYmxlLl9yZXN1bHQpO1xuICB9IGVsc2Uge1xuICAgIHN1YnNjcmliZSh0aGVuYWJsZSwgdW5kZWZpbmVkLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiByZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICByZXR1cm4gcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlLCB0aGVuKSB7XG4gIGlmIChtYXliZVRoZW5hYmxlLmNvbnN0cnVjdG9yID09PSBwcm9taXNlLmNvbnN0cnVjdG9yICYmIHRoZW4gPT09IG9yaWdpbmFsVGhlbiAmJiBtYXliZVRoZW5hYmxlLmNvbnN0cnVjdG9yLnJlc29sdmUgPT09IG9yaWdpbmFsUmVzb2x2ZSkge1xuICAgIGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICB9IGVsc2Uge1xuICAgIGlmICh0aGVuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZ1bGZpbGwocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoZW4pKSB7XG4gICAgICBoYW5kbGVGb3JlaWduVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSwgdGhlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZ1bGZpbGwocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpIHtcbiAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgcmVqZWN0KHByb21pc2UsIHNlbGZGdWxmaWxsbWVudCgpKTtcbiAgfSBlbHNlIGlmIChvYmplY3RPckZ1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciB0aGVuID0gdm9pZCAwO1xuICAgIHRyeSB7XG4gICAgICB0aGVuID0gdmFsdWUudGhlbjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCB2YWx1ZSwgdGhlbik7XG4gIH0gZWxzZSB7XG4gICAgZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHVibGlzaFJlamVjdGlvbihwcm9taXNlKSB7XG4gIGlmIChwcm9taXNlLl9vbmVycm9yKSB7XG4gICAgcHJvbWlzZS5fb25lcnJvcihwcm9taXNlLl9yZXN1bHQpO1xuICB9XG5cbiAgcHVibGlzaChwcm9taXNlKTtcbn1cblxuZnVuY3Rpb24gZnVsZmlsbChwcm9taXNlLCB2YWx1ZSkge1xuICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IFBFTkRJTkcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBwcm9taXNlLl9yZXN1bHQgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fc3RhdGUgPSBGVUxGSUxMRUQ7XG5cbiAgaWYgKHByb21pc2UuX3N1YnNjcmliZXJzLmxlbmd0aCAhPT0gMCkge1xuICAgIGFzYXAocHVibGlzaCwgcHJvbWlzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVqZWN0KHByb21pc2UsIHJlYXNvbikge1xuICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IFBFTkRJTkcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcHJvbWlzZS5fc3RhdGUgPSBSRUpFQ1RFRDtcbiAgcHJvbWlzZS5fcmVzdWx0ID0gcmVhc29uO1xuXG4gIGFzYXAocHVibGlzaFJlamVjdGlvbiwgcHJvbWlzZSk7XG59XG5cbmZ1bmN0aW9uIHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuICB2YXIgX3N1YnNjcmliZXJzID0gcGFyZW50Ll9zdWJzY3JpYmVycztcbiAgdmFyIGxlbmd0aCA9IF9zdWJzY3JpYmVycy5sZW5ndGg7XG5cblxuICBwYXJlbnQuX29uZXJyb3IgPSBudWxsO1xuXG4gIF9zdWJzY3JpYmVyc1tsZW5ndGhdID0gY2hpbGQ7XG4gIF9zdWJzY3JpYmVyc1tsZW5ndGggKyBGVUxGSUxMRURdID0gb25GdWxmaWxsbWVudDtcbiAgX3N1YnNjcmliZXJzW2xlbmd0aCArIFJFSkVDVEVEXSA9IG9uUmVqZWN0aW9uO1xuXG4gIGlmIChsZW5ndGggPT09IDAgJiYgcGFyZW50Ll9zdGF0ZSkge1xuICAgIGFzYXAocHVibGlzaCwgcGFyZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwdWJsaXNoKHByb21pc2UpIHtcbiAgdmFyIHN1YnNjcmliZXJzID0gcHJvbWlzZS5fc3Vic2NyaWJlcnM7XG4gIHZhciBzZXR0bGVkID0gcHJvbWlzZS5fc3RhdGU7XG5cbiAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjaGlsZCA9IHZvaWQgMCxcbiAgICAgIGNhbGxiYWNrID0gdm9pZCAwLFxuICAgICAgZGV0YWlsID0gcHJvbWlzZS5fcmVzdWx0O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICBjaGlsZCA9IHN1YnNjcmliZXJzW2ldO1xuICAgIGNhbGxiYWNrID0gc3Vic2NyaWJlcnNbaSArIHNldHRsZWRdO1xuXG4gICAgaWYgKGNoaWxkKSB7XG4gICAgICBpbnZva2VDYWxsYmFjayhzZXR0bGVkLCBjaGlsZCwgY2FsbGJhY2ssIGRldGFpbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKGRldGFpbCk7XG4gICAgfVxuICB9XG5cbiAgcHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoID0gMDtcbn1cblxuZnVuY3Rpb24gaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgcHJvbWlzZSwgY2FsbGJhY2ssIGRldGFpbCkge1xuICB2YXIgaGFzQ2FsbGJhY2sgPSBpc0Z1bmN0aW9uKGNhbGxiYWNrKSxcbiAgICAgIHZhbHVlID0gdm9pZCAwLFxuICAgICAgZXJyb3IgPSB2b2lkIDAsXG4gICAgICBzdWNjZWVkZWQgPSB0cnVlO1xuXG4gIGlmIChoYXNDYWxsYmFjaykge1xuICAgIHRyeSB7XG4gICAgICB2YWx1ZSA9IGNhbGxiYWNrKGRldGFpbCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgc3VjY2VlZGVkID0gZmFsc2U7XG4gICAgICBlcnJvciA9IGU7XG4gICAgfVxuXG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICByZWplY3QocHJvbWlzZSwgY2Fubm90UmV0dXJuT3duKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IGRldGFpbDtcbiAgfVxuXG4gIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gUEVORElORykge1xuICAgIC8vIG5vb3BcbiAgfSBlbHNlIGlmIChoYXNDYWxsYmFjayAmJiBzdWNjZWVkZWQpIHtcbiAgICByZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgfSBlbHNlIGlmIChzdWNjZWVkZWQgPT09IGZhbHNlKSB7XG4gICAgcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgfSBlbHNlIGlmIChzZXR0bGVkID09PSBGVUxGSUxMRUQpIHtcbiAgICBmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgfSBlbHNlIGlmIChzZXR0bGVkID09PSBSRUpFQ1RFRCkge1xuICAgIHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVByb21pc2UocHJvbWlzZSwgcmVzb2x2ZXIpIHtcbiAgdHJ5IHtcbiAgICByZXNvbHZlcihmdW5jdGlvbiByZXNvbHZlUHJvbWlzZSh2YWx1ZSkge1xuICAgICAgcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgfSwgZnVuY3Rpb24gcmVqZWN0UHJvbWlzZShyZWFzb24pIHtcbiAgICAgIHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmVqZWN0KHByb21pc2UsIGUpO1xuICB9XG59XG5cbnZhciBpZCA9IDA7XG5mdW5jdGlvbiBuZXh0SWQoKSB7XG4gIHJldHVybiBpZCsrO1xufVxuXG5mdW5jdGlvbiBtYWtlUHJvbWlzZShwcm9taXNlKSB7XG4gIHByb21pc2VbUFJPTUlTRV9JRF0gPSBpZCsrO1xuICBwcm9taXNlLl9zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgcHJvbWlzZS5fcmVzdWx0ID0gdW5kZWZpbmVkO1xuICBwcm9taXNlLl9zdWJzY3JpYmVycyA9IFtdO1xufVxuXG5leHBvcnQgeyBuZXh0SWQsIG1ha2VQcm9taXNlLCBub29wLCByZXNvbHZlLCByZWplY3QsIGZ1bGZpbGwsIHN1YnNjcmliZSwgcHVibGlzaCwgcHVibGlzaFJlamVjdGlvbiwgaW5pdGlhbGl6ZVByb21pc2UsIGludm9rZUNhbGxiYWNrLCBGVUxGSUxMRUQsIFJFSkVDVEVELCBQRU5ESU5HLCBoYW5kbGVNYXliZVRoZW5hYmxlIH07IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuaW1wb3J0IHsgaXNBcnJheSwgaXNNYXliZVRoZW5hYmxlIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBub29wLCByZWplY3QsIGZ1bGZpbGwsIHN1YnNjcmliZSwgRlVMRklMTEVELCBSRUpFQ1RFRCwgUEVORElORywgaGFuZGxlTWF5YmVUaGVuYWJsZSB9IGZyb20gJy4vLWludGVybmFsJztcblxuaW1wb3J0IHRoZW4gZnJvbSAnLi90aGVuJztcbmltcG9ydCBQcm9taXNlIGZyb20gJy4vcHJvbWlzZSc7XG5pbXBvcnQgb3JpZ2luYWxSZXNvbHZlIGZyb20gJy4vcHJvbWlzZS9yZXNvbHZlJztcbmltcG9ydCBvcmlnaW5hbFRoZW4gZnJvbSAnLi90aGVuJztcbmltcG9ydCB7IG1ha2VQcm9taXNlLCBQUk9NSVNFX0lEIH0gZnJvbSAnLi8taW50ZXJuYWwnO1xuXG5mdW5jdGlvbiB2YWxpZGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBuZXcgRXJyb3IoJ0FycmF5IE1ldGhvZHMgbXVzdCBiZSBwcm92aWRlZCBhbiBBcnJheScpO1xufTtcblxudmFyIEVudW1lcmF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEVudW1lcmF0b3IoQ29uc3RydWN0b3IsIGlucHV0KSB7XG4gICAgdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuICAgIHRoaXMucHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3Rvcihub29wKTtcblxuICAgIGlmICghdGhpcy5wcm9taXNlW1BST01JU0VfSURdKSB7XG4gICAgICBtYWtlUHJvbWlzZSh0aGlzLnByb21pc2UpO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KGlucHV0KSkge1xuICAgICAgdGhpcy5sZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gICAgICB0aGlzLl9yZW1haW5pbmcgPSBpbnB1dC5sZW5ndGg7XG5cbiAgICAgIHRoaXMuX3Jlc3VsdCA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aCk7XG5cbiAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBmdWxmaWxsKHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5sZW5ndGggfHwgMDtcbiAgICAgICAgdGhpcy5fZW51bWVyYXRlKGlucHV0KTtcbiAgICAgICAgaWYgKHRoaXMuX3JlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgIGZ1bGZpbGwodGhpcy5wcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlamVjdCh0aGlzLnByb21pc2UsIHZhbGlkYXRpb25FcnJvcigpKTtcbiAgICB9XG4gIH1cblxuICBFbnVtZXJhdG9yLnByb3RvdHlwZS5fZW51bWVyYXRlID0gZnVuY3Rpb24gX2VudW1lcmF0ZShpbnB1dCkge1xuICAgIGZvciAodmFyIGkgPSAwOyB0aGlzLl9zdGF0ZSA9PT0gUEVORElORyAmJiBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX2VhY2hFbnRyeShpbnB1dFtpXSwgaSk7XG4gICAgfVxuICB9O1xuXG4gIEVudW1lcmF0b3IucHJvdG90eXBlLl9lYWNoRW50cnkgPSBmdW5jdGlvbiBfZWFjaEVudHJ5KGVudHJ5LCBpKSB7XG4gICAgdmFyIGMgPSB0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yO1xuICAgIHZhciByZXNvbHZlID0gYy5yZXNvbHZlO1xuXG5cbiAgICBpZiAocmVzb2x2ZSA9PT0gb3JpZ2luYWxSZXNvbHZlKSB7XG4gICAgICB2YXIgX3RoZW4gPSB2b2lkIDA7XG4gICAgICB2YXIgZXJyb3IgPSB2b2lkIDA7XG4gICAgICB2YXIgZGlkRXJyb3IgPSBmYWxzZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIF90aGVuID0gZW50cnkudGhlbjtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZGlkRXJyb3IgPSB0cnVlO1xuICAgICAgICBlcnJvciA9IGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhlbiA9PT0gb3JpZ2luYWxUaGVuICYmIGVudHJ5Ll9zdGF0ZSAhPT0gUEVORElORykge1xuICAgICAgICB0aGlzLl9zZXR0bGVkQXQoZW50cnkuX3N0YXRlLCBpLCBlbnRyeS5fcmVzdWx0KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIF90aGVuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuX3JlbWFpbmluZy0tO1xuICAgICAgICB0aGlzLl9yZXN1bHRbaV0gPSBlbnRyeTtcbiAgICAgIH0gZWxzZSBpZiAoYyA9PT0gUHJvbWlzZSkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBjKG5vb3ApO1xuICAgICAgICBpZiAoZGlkRXJyb3IpIHtcbiAgICAgICAgICByZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgZW50cnksIF90aGVuKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl93aWxsU2V0dGxlQXQocHJvbWlzZSwgaSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl93aWxsU2V0dGxlQXQobmV3IGMoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShlbnRyeSk7XG4gICAgICAgIH0pLCBpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KHJlc29sdmUoZW50cnkpLCBpKTtcbiAgICB9XG4gIH07XG5cbiAgRW51bWVyYXRvci5wcm90b3R5cGUuX3NldHRsZWRBdCA9IGZ1bmN0aW9uIF9zZXR0bGVkQXQoc3RhdGUsIGksIHZhbHVlKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLnByb21pc2U7XG5cblxuICAgIGlmIChwcm9taXNlLl9zdGF0ZSA9PT0gUEVORElORykge1xuICAgICAgdGhpcy5fcmVtYWluaW5nLS07XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gUkVKRUNURUQpIHtcbiAgICAgICAgcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdFtpXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9yZW1haW5pbmcgPT09IDApIHtcbiAgICAgIGZ1bGZpbGwocHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICB9XG4gIH07XG5cbiAgRW51bWVyYXRvci5wcm90b3R5cGUuX3dpbGxTZXR0bGVBdCA9IGZ1bmN0aW9uIF93aWxsU2V0dGxlQXQocHJvbWlzZSwgaSkge1xuICAgIHZhciBlbnVtZXJhdG9yID0gdGhpcztcblxuICAgIHN1YnNjcmliZShwcm9taXNlLCB1bmRlZmluZWQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGVudW1lcmF0b3IuX3NldHRsZWRBdChGVUxGSUxMRUQsIGksIHZhbHVlKTtcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICByZXR1cm4gZW51bWVyYXRvci5fc2V0dGxlZEF0KFJFSkVDVEVELCBpLCByZWFzb24pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBFbnVtZXJhdG9yO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBFbnVtZXJhdG9yO1xuOyIsImltcG9ydCBFbnVtZXJhdG9yIGZyb20gJy4uL2VudW1lcmF0b3InO1xuXG4vKipcbiAgYFByb21pc2UuYWxsYCBhY2NlcHRzIGFuIGFycmF5IG9mIHByb21pc2VzLCBhbmQgcmV0dXJucyBhIG5ldyBwcm9taXNlIHdoaWNoXG4gIGlzIGZ1bGZpbGxlZCB3aXRoIGFuIGFycmF5IG9mIGZ1bGZpbGxtZW50IHZhbHVlcyBmb3IgdGhlIHBhc3NlZCBwcm9taXNlcywgb3JcbiAgcmVqZWN0ZWQgd2l0aCB0aGUgcmVhc29uIG9mIHRoZSBmaXJzdCBwYXNzZWQgcHJvbWlzZSB0byBiZSByZWplY3RlZC4gSXQgY2FzdHMgYWxsXG4gIGVsZW1lbnRzIG9mIHRoZSBwYXNzZWQgaXRlcmFibGUgdG8gcHJvbWlzZXMgYXMgaXQgcnVucyB0aGlzIGFsZ29yaXRobS5cblxuICBFeGFtcGxlOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UxID0gcmVzb2x2ZSgxKTtcbiAgbGV0IHByb21pc2UyID0gcmVzb2x2ZSgyKTtcbiAgbGV0IHByb21pc2UzID0gcmVzb2x2ZSgzKTtcbiAgbGV0IHByb21pc2VzID0gWyBwcm9taXNlMSwgcHJvbWlzZTIsIHByb21pc2UzIF07XG5cbiAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oYXJyYXkpe1xuICAgIC8vIFRoZSBhcnJheSBoZXJlIHdvdWxkIGJlIFsgMSwgMiwgMyBdO1xuICB9KTtcbiAgYGBgXG5cbiAgSWYgYW55IG9mIHRoZSBgcHJvbWlzZXNgIGdpdmVuIHRvIGBhbGxgIGFyZSByZWplY3RlZCwgdGhlIGZpcnN0IHByb21pc2VcbiAgdGhhdCBpcyByZWplY3RlZCB3aWxsIGJlIGdpdmVuIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSByZXR1cm5lZCBwcm9taXNlcydzXG4gIHJlamVjdGlvbiBoYW5kbGVyLiBGb3IgZXhhbXBsZTpcblxuICBFeGFtcGxlOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UxID0gcmVzb2x2ZSgxKTtcbiAgbGV0IHByb21pc2UyID0gcmVqZWN0KG5ldyBFcnJvcihcIjJcIikpO1xuICBsZXQgcHJvbWlzZTMgPSByZWplY3QobmV3IEVycm9yKFwiM1wiKSk7XG4gIGxldCBwcm9taXNlcyA9IFsgcHJvbWlzZTEsIHByb21pc2UyLCBwcm9taXNlMyBdO1xuXG4gIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKGFycmF5KXtcbiAgICAvLyBDb2RlIGhlcmUgbmV2ZXIgcnVucyBiZWNhdXNlIHRoZXJlIGFyZSByZWplY3RlZCBwcm9taXNlcyFcbiAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAvLyBlcnJvci5tZXNzYWdlID09PSBcIjJcIlxuICB9KTtcbiAgYGBgXG5cbiAgQG1ldGhvZCBhbGxcbiAgQHN0YXRpY1xuICBAcGFyYW0ge0FycmF5fSBlbnRyaWVzIGFycmF5IG9mIHByb21pc2VzXG4gIEBwYXJhbSB7U3RyaW5nfSBsYWJlbCBvcHRpb25hbCBzdHJpbmcgZm9yIGxhYmVsaW5nIHRoZSBwcm9taXNlLlxuICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gIEByZXR1cm4ge1Byb21pc2V9IHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2hlbiBhbGwgYHByb21pc2VzYCBoYXZlIGJlZW5cbiAgZnVsZmlsbGVkLCBvciByZWplY3RlZCBpZiBhbnkgb2YgdGhlbSBiZWNvbWUgcmVqZWN0ZWQuXG4gIEBzdGF0aWNcbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbGwoZW50cmllcykge1xuICByZXR1cm4gbmV3IEVudW1lcmF0b3IodGhpcywgZW50cmllcykucHJvbWlzZTtcbn0iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbi8qKlxuICBgUHJvbWlzZS5yYWNlYCByZXR1cm5zIGEgbmV3IHByb21pc2Ugd2hpY2ggaXMgc2V0dGxlZCBpbiB0aGUgc2FtZSB3YXkgYXMgdGhlXG4gIGZpcnN0IHBhc3NlZCBwcm9taXNlIHRvIHNldHRsZS5cblxuICBFeGFtcGxlOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UxID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICByZXNvbHZlKCdwcm9taXNlIDEnKTtcbiAgICB9LCAyMDApO1xuICB9KTtcblxuICBsZXQgcHJvbWlzZTIgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHJlc29sdmUoJ3Byb21pc2UgMicpO1xuICAgIH0sIDEwMCk7XG4gIH0pO1xuXG4gIFByb21pc2UucmFjZShbcHJvbWlzZTEsIHByb21pc2UyXSkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xuICAgIC8vIHJlc3VsdCA9PT0gJ3Byb21pc2UgMicgYmVjYXVzZSBpdCB3YXMgcmVzb2x2ZWQgYmVmb3JlIHByb21pc2UxXG4gICAgLy8gd2FzIHJlc29sdmVkLlxuICB9KTtcbiAgYGBgXG5cbiAgYFByb21pc2UucmFjZWAgaXMgZGV0ZXJtaW5pc3RpYyBpbiB0aGF0IG9ubHkgdGhlIHN0YXRlIG9mIHRoZSBmaXJzdFxuICBzZXR0bGVkIHByb21pc2UgbWF0dGVycy4gRm9yIGV4YW1wbGUsIGV2ZW4gaWYgb3RoZXIgcHJvbWlzZXMgZ2l2ZW4gdG8gdGhlXG4gIGBwcm9taXNlc2AgYXJyYXkgYXJndW1lbnQgYXJlIHJlc29sdmVkLCBidXQgdGhlIGZpcnN0IHNldHRsZWQgcHJvbWlzZSBoYXNcbiAgYmVjb21lIHJlamVjdGVkIGJlZm9yZSB0aGUgb3RoZXIgcHJvbWlzZXMgYmVjYW1lIGZ1bGZpbGxlZCwgdGhlIHJldHVybmVkXG4gIHByb21pc2Ugd2lsbCBiZWNvbWUgcmVqZWN0ZWQ6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZTEgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHJlc29sdmUoJ3Byb21pc2UgMScpO1xuICAgIH0sIDIwMCk7XG4gIH0pO1xuXG4gIGxldCBwcm9taXNlMiA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcigncHJvbWlzZSAyJykpO1xuICAgIH0sIDEwMCk7XG4gIH0pO1xuXG4gIFByb21pc2UucmFjZShbcHJvbWlzZTEsIHByb21pc2UyXSkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xuICAgIC8vIENvZGUgaGVyZSBuZXZlciBydW5zXG4gIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgLy8gcmVhc29uLm1lc3NhZ2UgPT09ICdwcm9taXNlIDInIGJlY2F1c2UgcHJvbWlzZSAyIGJlY2FtZSByZWplY3RlZCBiZWZvcmVcbiAgICAvLyBwcm9taXNlIDEgYmVjYW1lIGZ1bGZpbGxlZFxuICB9KTtcbiAgYGBgXG5cbiAgQW4gZXhhbXBsZSByZWFsLXdvcmxkIHVzZSBjYXNlIGlzIGltcGxlbWVudGluZyB0aW1lb3V0czpcblxuICBgYGBqYXZhc2NyaXB0XG4gIFByb21pc2UucmFjZShbYWpheCgnZm9vLmpzb24nKSwgdGltZW91dCg1MDAwKV0pXG4gIGBgYFxuXG4gIEBtZXRob2QgcmFjZVxuICBAc3RhdGljXG4gIEBwYXJhbSB7QXJyYXl9IHByb21pc2VzIGFycmF5IG9mIHByb21pc2VzIHRvIG9ic2VydmVcbiAgVXNlZnVsIGZvciB0b29saW5nLlxuICBAcmV0dXJuIHtQcm9taXNlfSBhIHByb21pc2Ugd2hpY2ggc2V0dGxlcyBpbiB0aGUgc2FtZSB3YXkgYXMgdGhlIGZpcnN0IHBhc3NlZFxuICBwcm9taXNlIHRvIHNldHRsZS5cbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYWNlKGVudHJpZXMpIHtcbiAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICBpZiAoIWlzQXJyYXkoZW50cmllcykpIHtcbiAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uIChfLCByZWplY3QpIHtcbiAgICAgIHJldHVybiByZWplY3QobmV3IFR5cGVFcnJvcignWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byByYWNlLicpKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBsZW5ndGggPSBlbnRyaWVzLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgQ29uc3RydWN0b3IucmVzb2x2ZShlbnRyaWVzW2ldKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQgeyBub29wLCByZWplY3QgYXMgX3JlamVjdCB9IGZyb20gJy4uLy1pbnRlcm5hbCc7XG5cbi8qKlxuICBgUHJvbWlzZS5yZWplY3RgIHJldHVybnMgYSBwcm9taXNlIHJlamVjdGVkIHdpdGggdGhlIHBhc3NlZCBgcmVhc29uYC5cbiAgSXQgaXMgc2hvcnRoYW5kIGZvciB0aGUgZm9sbG93aW5nOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgIHJlamVjdChuZXcgRXJyb3IoJ1dIT09QUycpKTtcbiAgfSk7XG5cbiAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAvLyBDb2RlIGhlcmUgZG9lc24ndCBydW4gYmVjYXVzZSB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCFcbiAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAvLyByZWFzb24ubWVzc2FnZSA9PT0gJ1dIT09QUydcbiAgfSk7XG4gIGBgYFxuXG4gIEluc3RlYWQgb2Ygd3JpdGluZyB0aGUgYWJvdmUsIHlvdXIgY29kZSBub3cgc2ltcGx5IGJlY29tZXMgdGhlIGZvbGxvd2luZzpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlID0gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdXSE9PUFMnKSk7XG5cbiAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAvLyBDb2RlIGhlcmUgZG9lc24ndCBydW4gYmVjYXVzZSB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCFcbiAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAvLyByZWFzb24ubWVzc2FnZSA9PT0gJ1dIT09QUydcbiAgfSk7XG4gIGBgYFxuXG4gIEBtZXRob2QgcmVqZWN0XG4gIEBzdGF0aWNcbiAgQHBhcmFtIHtBbnl9IHJlYXNvbiB2YWx1ZSB0aGF0IHRoZSByZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aC5cbiAgVXNlZnVsIGZvciB0b29saW5nLlxuICBAcmV0dXJuIHtQcm9taXNlfSBhIHByb21pc2UgcmVqZWN0ZWQgd2l0aCB0aGUgZ2l2ZW4gYHJlYXNvbmAuXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVqZWN0KHJlYXNvbikge1xuICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuICB2YXIgcHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3Rvcihub29wKTtcbiAgX3JlamVjdChwcm9taXNlLCByZWFzb24pO1xuICByZXR1cm4gcHJvbWlzZTtcbn0iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBub29wLCBuZXh0SWQsIFBST01JU0VfSUQsIGluaXRpYWxpemVQcm9taXNlIH0gZnJvbSAnLi8taW50ZXJuYWwnO1xuaW1wb3J0IHsgYXNhcCwgc2V0QXNhcCwgc2V0U2NoZWR1bGVyIH0gZnJvbSAnLi9hc2FwJztcblxuaW1wb3J0IGFsbCBmcm9tICcuL3Byb21pc2UvYWxsJztcbmltcG9ydCByYWNlIGZyb20gJy4vcHJvbWlzZS9yYWNlJztcbmltcG9ydCBSZXNvbHZlIGZyb20gJy4vcHJvbWlzZS9yZXNvbHZlJztcbmltcG9ydCBSZWplY3QgZnJvbSAnLi9wcm9taXNlL3JlamVjdCc7XG5pbXBvcnQgdGhlbiBmcm9tICcuL3RoZW4nO1xuXG5mdW5jdGlvbiBuZWVkc1Jlc29sdmVyKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGEgcmVzb2x2ZXIgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBwcm9taXNlIGNvbnN0cnVjdG9yJyk7XG59XG5cbmZ1bmN0aW9uIG5lZWRzTmV3KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUHJvbWlzZSc6IFBsZWFzZSB1c2UgdGhlICduZXcnIG9wZXJhdG9yLCB0aGlzIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uXCIpO1xufVxuXG4vKipcbiAgUHJvbWlzZSBvYmplY3RzIHJlcHJlc2VudCB0aGUgZXZlbnR1YWwgcmVzdWx0IG9mIGFuIGFzeW5jaHJvbm91cyBvcGVyYXRpb24uIFRoZVxuICBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLCB3aGljaFxuICByZWdpc3RlcnMgY2FsbGJhY2tzIHRvIHJlY2VpdmUgZWl0aGVyIGEgcHJvbWlzZSdzIGV2ZW50dWFsIHZhbHVlIG9yIHRoZSByZWFzb25cbiAgd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG5cbiAgVGVybWlub2xvZ3lcbiAgLS0tLS0tLS0tLS1cblxuICAtIGBwcm9taXNlYCBpcyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24gd2l0aCBhIGB0aGVuYCBtZXRob2Qgd2hvc2UgYmVoYXZpb3IgY29uZm9ybXMgdG8gdGhpcyBzcGVjaWZpY2F0aW9uLlxuICAtIGB0aGVuYWJsZWAgaXMgYW4gb2JqZWN0IG9yIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyBhIGB0aGVuYCBtZXRob2QuXG4gIC0gYHZhbHVlYCBpcyBhbnkgbGVnYWwgSmF2YVNjcmlwdCB2YWx1ZSAoaW5jbHVkaW5nIHVuZGVmaW5lZCwgYSB0aGVuYWJsZSwgb3IgYSBwcm9taXNlKS5cbiAgLSBgZXhjZXB0aW9uYCBpcyBhIHZhbHVlIHRoYXQgaXMgdGhyb3duIHVzaW5nIHRoZSB0aHJvdyBzdGF0ZW1lbnQuXG4gIC0gYHJlYXNvbmAgaXMgYSB2YWx1ZSB0aGF0IGluZGljYXRlcyB3aHkgYSBwcm9taXNlIHdhcyByZWplY3RlZC5cbiAgLSBgc2V0dGxlZGAgdGhlIGZpbmFsIHJlc3Rpbmcgc3RhdGUgb2YgYSBwcm9taXNlLCBmdWxmaWxsZWQgb3IgcmVqZWN0ZWQuXG5cbiAgQSBwcm9taXNlIGNhbiBiZSBpbiBvbmUgb2YgdGhyZWUgc3RhdGVzOiBwZW5kaW5nLCBmdWxmaWxsZWQsIG9yIHJlamVjdGVkLlxuXG4gIFByb21pc2VzIHRoYXQgYXJlIGZ1bGZpbGxlZCBoYXZlIGEgZnVsZmlsbG1lbnQgdmFsdWUgYW5kIGFyZSBpbiB0aGUgZnVsZmlsbGVkXG4gIHN0YXRlLiAgUHJvbWlzZXMgdGhhdCBhcmUgcmVqZWN0ZWQgaGF2ZSBhIHJlamVjdGlvbiByZWFzb24gYW5kIGFyZSBpbiB0aGVcbiAgcmVqZWN0ZWQgc3RhdGUuICBBIGZ1bGZpbGxtZW50IHZhbHVlIGlzIG5ldmVyIGEgdGhlbmFibGUuXG5cbiAgUHJvbWlzZXMgY2FuIGFsc28gYmUgc2FpZCB0byAqcmVzb2x2ZSogYSB2YWx1ZS4gIElmIHRoaXMgdmFsdWUgaXMgYWxzbyBhXG4gIHByb21pc2UsIHRoZW4gdGhlIG9yaWdpbmFsIHByb21pc2UncyBzZXR0bGVkIHN0YXRlIHdpbGwgbWF0Y2ggdGhlIHZhbHVlJ3NcbiAgc2V0dGxlZCBzdGF0ZS4gIFNvIGEgcHJvbWlzZSB0aGF0ICpyZXNvbHZlcyogYSBwcm9taXNlIHRoYXQgcmVqZWN0cyB3aWxsXG4gIGl0c2VsZiByZWplY3QsIGFuZCBhIHByb21pc2UgdGhhdCAqcmVzb2x2ZXMqIGEgcHJvbWlzZSB0aGF0IGZ1bGZpbGxzIHdpbGxcbiAgaXRzZWxmIGZ1bGZpbGwuXG5cblxuICBCYXNpYyBVc2FnZTpcbiAgLS0tLS0tLS0tLS0tXG5cbiAgYGBganNcbiAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAvLyBvbiBzdWNjZXNzXG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG5cbiAgICAvLyBvbiBmYWlsdXJlXG4gICAgcmVqZWN0KHJlYXNvbik7XG4gIH0pO1xuXG4gIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgIC8vIG9uIGZ1bGZpbGxtZW50XG4gIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgIC8vIG9uIHJlamVjdGlvblxuICB9KTtcbiAgYGBgXG5cbiAgQWR2YW5jZWQgVXNhZ2U6XG4gIC0tLS0tLS0tLS0tLS0tLVxuXG4gIFByb21pc2VzIHNoaW5lIHdoZW4gYWJzdHJhY3RpbmcgYXdheSBhc3luY2hyb25vdXMgaW50ZXJhY3Rpb25zIHN1Y2ggYXNcbiAgYFhNTEh0dHBSZXF1ZXN0YHMuXG5cbiAgYGBganNcbiAgZnVuY3Rpb24gZ2V0SlNPTih1cmwpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gaGFuZGxlcjtcbiAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgIHhoci5zZW5kKCk7XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IHRoaXMuRE9ORSkge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMucmVzcG9uc2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdnZXRKU09OOiBgJyArIHVybCArICdgIGZhaWxlZCB3aXRoIHN0YXR1czogWycgKyB0aGlzLnN0YXR1cyArICddJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEpTT04oJy9wb3N0cy5qc29uJykudGhlbihmdW5jdGlvbihqc29uKSB7XG4gICAgLy8gb24gZnVsZmlsbG1lbnRcbiAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgLy8gb24gcmVqZWN0aW9uXG4gIH0pO1xuICBgYGBcblxuICBVbmxpa2UgY2FsbGJhY2tzLCBwcm9taXNlcyBhcmUgZ3JlYXQgY29tcG9zYWJsZSBwcmltaXRpdmVzLlxuXG4gIGBgYGpzXG4gIFByb21pc2UuYWxsKFtcbiAgICBnZXRKU09OKCcvcG9zdHMnKSxcbiAgICBnZXRKU09OKCcvY29tbWVudHMnKVxuICBdKS50aGVuKGZ1bmN0aW9uKHZhbHVlcyl7XG4gICAgdmFsdWVzWzBdIC8vID0+IHBvc3RzSlNPTlxuICAgIHZhbHVlc1sxXSAvLyA9PiBjb21tZW50c0pTT05cblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH0pO1xuICBgYGBcblxuICBAY2xhc3MgUHJvbWlzZVxuICBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlclxuICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gIEBjb25zdHJ1Y3RvclxuKi9cblxudmFyIFByb21pc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFByb21pc2UocmVzb2x2ZXIpIHtcbiAgICB0aGlzW1BST01JU0VfSURdID0gbmV4dElkKCk7XG4gICAgdGhpcy5fcmVzdWx0ID0gdGhpcy5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMgPSBbXTtcblxuICAgIGlmIChub29wICE9PSByZXNvbHZlcikge1xuICAgICAgdHlwZW9mIHJlc29sdmVyICE9PSAnZnVuY3Rpb24nICYmIG5lZWRzUmVzb2x2ZXIoKTtcbiAgICAgIHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlID8gaW5pdGlhbGl6ZVByb21pc2UodGhpcywgcmVzb2x2ZXIpIDogbmVlZHNOZXcoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgVGhlIHByaW1hcnkgd2F5IG9mIGludGVyYWN0aW5nIHdpdGggYSBwcm9taXNlIGlzIHRocm91Z2ggaXRzIGB0aGVuYCBtZXRob2QsXG4gIHdoaWNoIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNlJ3MgZXZlbnR1YWwgdmFsdWUgb3IgdGhlXG4gIHJlYXNvbiB3aHkgdGhlIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZC5cbiAgIGBgYGpzXG4gIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbih1c2VyKXtcbiAgICAvLyB1c2VyIGlzIGF2YWlsYWJsZVxuICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgIC8vIHVzZXIgaXMgdW5hdmFpbGFibGUsIGFuZCB5b3UgYXJlIGdpdmVuIHRoZSByZWFzb24gd2h5XG4gIH0pO1xuICBgYGBcbiAgIENoYWluaW5nXG4gIC0tLS0tLS0tXG4gICBUaGUgcmV0dXJuIHZhbHVlIG9mIGB0aGVuYCBpcyBpdHNlbGYgYSBwcm9taXNlLiAgVGhpcyBzZWNvbmQsICdkb3duc3RyZWFtJ1xuICBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZmlyc3QgcHJvbWlzZSdzIGZ1bGZpbGxtZW50XG4gIG9yIHJlamVjdGlvbiBoYW5kbGVyLCBvciByZWplY3RlZCBpZiB0aGUgaGFuZGxlciB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuICAgYGBganNcbiAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgcmV0dXJuIHVzZXIubmFtZTtcbiAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIHJldHVybiAnZGVmYXVsdCBuYW1lJztcbiAgfSkudGhlbihmdW5jdGlvbiAodXNlck5hbWUpIHtcbiAgICAvLyBJZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHVzZXJOYW1lYCB3aWxsIGJlIHRoZSB1c2VyJ3MgbmFtZSwgb3RoZXJ3aXNlIGl0XG4gICAgLy8gd2lsbCBiZSBgJ2RlZmF1bHQgbmFtZSdgXG4gIH0pO1xuICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScpO1xuICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jyk7XG4gIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgLy8gbmV2ZXIgcmVhY2hlZFxuICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgLy8gaWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGByZWFzb25gIHdpbGwgYmUgJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jy5cbiAgICAvLyBJZiBgZmluZFVzZXJgIHJlamVjdGVkLCBgcmVhc29uYCB3aWxsIGJlICdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jy5cbiAgfSk7XG4gIGBgYFxuICBJZiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIGRvZXMgbm90IHNwZWNpZnkgYSByZWplY3Rpb24gaGFuZGxlciwgcmVqZWN0aW9uIHJlYXNvbnMgd2lsbCBiZSBwcm9wYWdhdGVkIGZ1cnRoZXIgZG93bnN0cmVhbS5cbiAgIGBgYGpzXG4gIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgIHRocm93IG5ldyBQZWRhZ29naWNhbEV4Y2VwdGlvbignVXBzdHJlYW0gZXJyb3InKTtcbiAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAvLyBuZXZlciByZWFjaGVkXG4gIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgLy8gbmV2ZXIgcmVhY2hlZFxuICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgLy8gVGhlIGBQZWRnYWdvY2lhbEV4Y2VwdGlvbmAgaXMgcHJvcGFnYXRlZCBhbGwgdGhlIHdheSBkb3duIHRvIGhlcmVcbiAgfSk7XG4gIGBgYFxuICAgQXNzaW1pbGF0aW9uXG4gIC0tLS0tLS0tLS0tLVxuICAgU29tZXRpbWVzIHRoZSB2YWx1ZSB5b3Ugd2FudCB0byBwcm9wYWdhdGUgdG8gYSBkb3duc3RyZWFtIHByb21pc2UgY2FuIG9ubHkgYmVcbiAgcmV0cmlldmVkIGFzeW5jaHJvbm91c2x5LiBUaGlzIGNhbiBiZSBhY2hpZXZlZCBieSByZXR1cm5pbmcgYSBwcm9taXNlIGluIHRoZVxuICBmdWxmaWxsbWVudCBvciByZWplY3Rpb24gaGFuZGxlci4gVGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIHRoZW4gYmUgcGVuZGluZ1xuICB1bnRpbCB0aGUgcmV0dXJuZWQgcHJvbWlzZSBpcyBzZXR0bGVkLiBUaGlzIGlzIGNhbGxlZCAqYXNzaW1pbGF0aW9uKi5cbiAgIGBgYGpzXG4gIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcbiAgfSkudGhlbihmdW5jdGlvbiAoY29tbWVudHMpIHtcbiAgICAvLyBUaGUgdXNlcidzIGNvbW1lbnRzIGFyZSBub3cgYXZhaWxhYmxlXG4gIH0pO1xuICBgYGBcbiAgIElmIHRoZSBhc3NpbWxpYXRlZCBwcm9taXNlIHJlamVjdHMsIHRoZW4gdGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIGFsc28gcmVqZWN0LlxuICAgYGBganNcbiAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuICB9KS50aGVuKGZ1bmN0aW9uIChjb21tZW50cykge1xuICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgZnVsZmlsbHMsIHdlJ2xsIGhhdmUgdGhlIHZhbHVlIGhlcmVcbiAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgcmVqZWN0cywgd2UnbGwgaGF2ZSB0aGUgcmVhc29uIGhlcmVcbiAgfSk7XG4gIGBgYFxuICAgU2ltcGxlIEV4YW1wbGVcbiAgLS0tLS0tLS0tLS0tLS1cbiAgIFN5bmNocm9ub3VzIEV4YW1wbGVcbiAgIGBgYGphdmFzY3JpcHRcbiAgbGV0IHJlc3VsdDtcbiAgIHRyeSB7XG4gICAgcmVzdWx0ID0gZmluZFJlc3VsdCgpO1xuICAgIC8vIHN1Y2Nlc3NcbiAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAvLyBmYWlsdXJlXG4gIH1cbiAgYGBgXG4gICBFcnJiYWNrIEV4YW1wbGVcbiAgIGBgYGpzXG4gIGZpbmRSZXN1bHQoZnVuY3Rpb24ocmVzdWx0LCBlcnIpe1xuICAgIGlmIChlcnIpIHtcbiAgICAgIC8vIGZhaWx1cmVcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc3VjY2Vzc1xuICAgIH1cbiAgfSk7XG4gIGBgYFxuICAgUHJvbWlzZSBFeGFtcGxlO1xuICAgYGBgamF2YXNjcmlwdFxuICBmaW5kUmVzdWx0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xuICAgIC8vIHN1Y2Nlc3NcbiAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAvLyBmYWlsdXJlXG4gIH0pO1xuICBgYGBcbiAgIEFkdmFuY2VkIEV4YW1wbGVcbiAgLS0tLS0tLS0tLS0tLS1cbiAgIFN5bmNocm9ub3VzIEV4YW1wbGVcbiAgIGBgYGphdmFzY3JpcHRcbiAgbGV0IGF1dGhvciwgYm9va3M7XG4gICB0cnkge1xuICAgIGF1dGhvciA9IGZpbmRBdXRob3IoKTtcbiAgICBib29rcyAgPSBmaW5kQm9va3NCeUF1dGhvcihhdXRob3IpO1xuICAgIC8vIHN1Y2Nlc3NcbiAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAvLyBmYWlsdXJlXG4gIH1cbiAgYGBgXG4gICBFcnJiYWNrIEV4YW1wbGVcbiAgIGBgYGpzXG4gICBmdW5jdGlvbiBmb3VuZEJvb2tzKGJvb2tzKSB7XG4gICB9XG4gICBmdW5jdGlvbiBmYWlsdXJlKHJlYXNvbikge1xuICAgfVxuICAgZmluZEF1dGhvcihmdW5jdGlvbihhdXRob3IsIGVycil7XG4gICAgaWYgKGVycikge1xuICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgLy8gZmFpbHVyZVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBmaW5kQm9vb2tzQnlBdXRob3IoYXV0aG9yLCBmdW5jdGlvbihib29rcywgZXJyKSB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3VuZEJvb2tzKGJvb2tzKTtcbiAgICAgICAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgICAgICAgIGZhaWx1cmUocmVhc29uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICB9XG4gICAgICAvLyBzdWNjZXNzXG4gICAgfVxuICB9KTtcbiAgYGBgXG4gICBQcm9taXNlIEV4YW1wbGU7XG4gICBgYGBqYXZhc2NyaXB0XG4gIGZpbmRBdXRob3IoKS5cbiAgICB0aGVuKGZpbmRCb29rc0J5QXV0aG9yKS5cbiAgICB0aGVuKGZ1bmN0aW9uKGJvb2tzKXtcbiAgICAgIC8vIGZvdW5kIGJvb2tzXG4gIH0pLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgfSk7XG4gIGBgYFxuICAgQG1ldGhvZCB0aGVuXG4gIEBwYXJhbSB7RnVuY3Rpb259IG9uRnVsZmlsbGVkXG4gIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0ZWRcbiAgVXNlZnVsIGZvciB0b29saW5nLlxuICBAcmV0dXJuIHtQcm9taXNlfVxuICAqL1xuXG4gIC8qKlxuICBgY2F0Y2hgIGlzIHNpbXBseSBzdWdhciBmb3IgYHRoZW4odW5kZWZpbmVkLCBvblJlamVjdGlvbilgIHdoaWNoIG1ha2VzIGl0IHRoZSBzYW1lXG4gIGFzIHRoZSBjYXRjaCBibG9jayBvZiBhIHRyeS9jYXRjaCBzdGF0ZW1lbnQuXG4gIGBgYGpzXG4gIGZ1bmN0aW9uIGZpbmRBdXRob3IoKXtcbiAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZG4ndCBmaW5kIHRoYXQgYXV0aG9yJyk7XG4gIH1cbiAgLy8gc3luY2hyb25vdXNcbiAgdHJ5IHtcbiAgZmluZEF1dGhvcigpO1xuICB9IGNhdGNoKHJlYXNvbikge1xuICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICB9XG4gIC8vIGFzeW5jIHdpdGggcHJvbWlzZXNcbiAgZmluZEF1dGhvcigpLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gIH0pO1xuICBgYGBcbiAgQG1ldGhvZCBjYXRjaFxuICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGlvblxuICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gIEByZXR1cm4ge1Byb21pc2V9XG4gICovXG5cblxuICBQcm9taXNlLnByb3RvdHlwZS5jYXRjaCA9IGZ1bmN0aW9uIF9jYXRjaChvblJlamVjdGlvbikge1xuICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3Rpb24pO1xuICB9O1xuXG4gIC8qKlxuICAgIGBmaW5hbGx5YCB3aWxsIGJlIGludm9rZWQgcmVnYXJkbGVzcyBvZiB0aGUgcHJvbWlzZSdzIGZhdGUganVzdCBhcyBuYXRpdmVcbiAgICB0cnkvY2F0Y2gvZmluYWxseSBiZWhhdmVzXG4gIFxuICAgIFN5bmNocm9ub3VzIGV4YW1wbGU6XG4gIFxuICAgIGBgYGpzXG4gICAgZmluZEF1dGhvcigpIHtcbiAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBBdXRob3IoKTtcbiAgICB9XG4gIFxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZmluZEF1dGhvcigpOyAvLyBzdWNjZWVkIG9yIGZhaWxcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICByZXR1cm4gZmluZE90aGVyQXV0aGVyKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIC8vIGFsd2F5cyBydW5zXG4gICAgICAvLyBkb2Vzbid0IGFmZmVjdCB0aGUgcmV0dXJuIHZhbHVlXG4gICAgfVxuICAgIGBgYFxuICBcbiAgICBBc3luY2hyb25vdXMgZXhhbXBsZTpcbiAgXG4gICAgYGBganNcbiAgICBmaW5kQXV0aG9yKCkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgIHJldHVybiBmaW5kT3RoZXJBdXRoZXIoKTtcbiAgICB9KS5maW5hbGx5KGZ1bmN0aW9uKCl7XG4gICAgICAvLyBhdXRob3Igd2FzIGVpdGhlciBmb3VuZCwgb3Igbm90XG4gICAgfSk7XG4gICAgYGBgXG4gIFxuICAgIEBtZXRob2QgZmluYWxseVxuICAgIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgQHJldHVybiB7UHJvbWlzZX1cbiAgKi9cblxuXG4gIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbiBfZmluYWxseShjYWxsYmFjaykge1xuICAgIHZhciBwcm9taXNlID0gdGhpcztcbiAgICB2YXIgY29uc3RydWN0b3IgPSBwcm9taXNlLmNvbnN0cnVjdG9yO1xuXG4gICAgaWYgKGlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICByZXR1cm4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aHJvdyByZWFzb247XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2UudGhlbihjYWxsYmFjaywgY2FsbGJhY2spO1xuICB9O1xuXG4gIHJldHVybiBQcm9taXNlO1xufSgpO1xuXG5Qcm9taXNlLnByb3RvdHlwZS50aGVuID0gdGhlbjtcbmV4cG9ydCBkZWZhdWx0IFByb21pc2U7XG5Qcm9taXNlLmFsbCA9IGFsbDtcblByb21pc2UucmFjZSA9IHJhY2U7XG5Qcm9taXNlLnJlc29sdmUgPSBSZXNvbHZlO1xuUHJvbWlzZS5yZWplY3QgPSBSZWplY3Q7XG5Qcm9taXNlLl9zZXRTY2hlZHVsZXIgPSBzZXRTY2hlZHVsZXI7XG5Qcm9taXNlLl9zZXRBc2FwID0gc2V0QXNhcDtcblByb21pc2UuX2FzYXAgPSBhc2FwOyIsIi8qZ2xvYmFsIHNlbGYqL1xuaW1wb3J0IFByb21pc2UgZnJvbSAnLi9wcm9taXNlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9seWZpbGwoKSB7XG4gIHZhciBsb2NhbCA9IHZvaWQgMDtcblxuICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsb2NhbCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsb2NhbCA9IHNlbGY7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BvbHlmaWxsIGZhaWxlZCBiZWNhdXNlIGdsb2JhbCBvYmplY3QgaXMgdW5hdmFpbGFibGUgaW4gdGhpcyBlbnZpcm9ubWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBQID0gbG9jYWwuUHJvbWlzZTtcblxuICBpZiAoUCkge1xuICAgIHZhciBwcm9taXNlVG9TdHJpbmcgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICBwcm9taXNlVG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUC5yZXNvbHZlKCkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIHNpbGVudGx5IGlnbm9yZWRcbiAgICB9XG5cbiAgICBpZiAocHJvbWlzZVRvU3RyaW5nID09PSAnW29iamVjdCBQcm9taXNlXScgJiYgIVAuY2FzdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGxvY2FsLlByb21pc2UgPSBQcm9taXNlO1xufSIsImltcG9ydCBQcm9taXNlIGZyb20gJy4vZXM2LXByb21pc2UvcHJvbWlzZSc7XG5pbXBvcnQgcG9seWZpbGwgZnJvbSAnLi9lczYtcHJvbWlzZS9wb2x5ZmlsbCc7XG5cbi8vIFN0cmFuZ2UgY29tcGF0Li5cblByb21pc2UucG9seWZpbGwgPSBwb2x5ZmlsbDtcblByb21pc2UuUHJvbWlzZSA9IFByb21pc2U7XG5leHBvcnQgZGVmYXVsdCBQcm9taXNlOyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJleHBvcnQgZW51bSBFZGl0YWJsZVRmYVByb3ZpZGVyc1R5cGVzIHtcbiAgICBnaWd5YVBob25lLFxuICAgIGdpZ3lhVG90cCxcbiAgICBnaWd5YVB1c2gsXG4gICAgbGl2ZWxpbmssXG59XG5leHBvcnQgY29uc3QgZ2lneWFBc3NlcnRpb25FeHBpcmF0aW9uID0gNjAgKiA1ICogMTAwMDtcbmV4cG9ydCBjb25zdCBzZW5zaXRpdmVQYXJhbXNPdmVycmlkZSA9ICdsb2dpbl90b2tlbic7XG5cbmV4cG9ydCBjb25zdCBHSUdZQV9QQVJBTV9QUkVGSVggPSAnZ2lnXydcblxuZXhwb3J0IGNvbnN0IEdJR1lBX0lOVEVSTkFMX1BBUkFNX1BSRUZJWCA9IGAke0dJR1lBX1BBUkFNX1BSRUZJWH1pX2BcblxuZXhwb3J0IGNvbnN0IEdJR1lBX0lOVEVSTkFMX1BBUkFNUyA9IGAke0dJR1lBX1BBUkFNX1BSRUZJWH1hY3Rpb25zYFxuIiwiZXhwb3J0IGNvbnN0IGVudW0gR1NFcnJvcnMge1xuICAgIE9LID0gMCxcbiAgICBEYXRhX1BlbmRpbmcgPSAxMDAwMDEsIC8vIERhdGEgaXMgc3RpbGwgYmVpbmcgcHJvY2Vzc2VkLCBxdWVyeSBhZ2FpbiBmb3IgdGhlIHJlc3BvbnNlXG4gICAgTkVUV09SS19FUlJPUiA9IDUwMDAyNixcbiAgICBEQVRBX1BFTkRJTkcgPSAxMDAwMDEsIC8vIERhdGEgaXMgc3RpbGwgYmVpbmcgcHJvY2Vzc2VkLCBxdWVyeSBhZ2FpbiBmb3IgdGhlIHJlc3BvbnNlXG4gICAgT1BFUkFUSU9OX0NBTkNFTEVEID0gMjAwMDAxLCAvLyB1c2VyIGNhbmNlbGVkLCBpbiBsb2dpbiBwcm9jZXNzXG4gICAgUEVSTUlTU0lPTl9HUkFOVEVEID0gMjAwMDAyLCAvLyBJbm5lciBjb2RlXG4gICAgUEVSTUlTU0lPTl9OT1RfR1JBTlRFRCA9IDIwMDAwMywgLy8gSW5uZXIgY29kZVxuICAgIFJFRElSRUNUID0gMjAwMDA0LCAvLyBJbm5lciBjb2RlXG4gICAgTkVXX1VTRVIgPSAyMDAwMDUsIC8vIElubmVyIGNvZGVcbiAgICBPUEVSQVRJT05fRE9ORSA9IDIwMDAwNiwgLy8gSW5uZXIgY29kZVxuICAgIFVQREFURV9VU0VSID0gMjAwMDA3LCAvLyBJbm5lciBjb2RlXG4gICAgT0tfV0lUSF9FUlJPUlMgPSAyMDAwMDgsIC8vIEZvciByZXBvcnRzIC0gd2hlbiB3ZSByZXR1cm4gb2sgdG8gY2xpZW50IGJ1dCBoYWQgYWNjZXB0YWJsZSBlcnJvcnMgKHRoYXQgd2Ugd2FudCB0byBrbm93IGFib3V0KSBvbiB0aGUgd2F5XG4gICAgQUNDT1VOVFNfTElOS0VEID0gMjAwMDA5LCAvLyBBZnRlciBsaW5raWduIGFjY291dG5zIHZpYSBsb2dpbiwgcmV0dXJuIHRoaXMgZXJyb3IgY29kZVxuICAgIE9LX1dJVEhfRVJST1JfTE9HSU5fSURFTlRJRklFUl9FWElTVFMgPSAyMDAwMTAsIC8vIEZvciBzZXRBY2NvdW50SW5mbyB1c2luZyB0aGUgY29uZmxpY3RIYW5kbGluZyBwYXJhbSAtIHByb2ZpbGUgd2FzIHNhdmVkLCBidXQgdGhlIGVtYWlsIGNvbmZsaWN0cyB3aXRoIGFub3RoZXIgdXNlclxuICAgIEFDQ09VTlRfUEVORElOR19SRUdJU1RSQVRJT04gPSAyMDYwMDEsIC8vIEZvciBhY2NvdW50cyBBUEksXG4gICAgQUNDT1VOVF9QRU5ESU5HX1ZFUklGSUNBVElPTiA9IDIwNjAwMiwgLy8gRm9yIGFjY291bnRzIEFQSTsgY29uc2lkZXIgbW92aW5nIHRvIDQwM3h4eCBzZWN0aW9uIGluIHRoZSBmdXR1cmUuXG4gICAgQUNDT1VOVF9NSVNTSU5HX0xPR0lOSUQgPSAyMDYwMDMsIC8vIEZvciBhY2NvdW50cyBBUElcbiAgICBJREVOVElUWV9BTFJFQURZX0FTU0lHTkVEID0gMjA2MDA0LCAvLyBGb3IgaW1wb3J0IGFjY291bnRzIEFQSVxuICAgIEFGVEVSX0VNQUlMX1ZFUklGSUNBVElPTiA9IDIwNjAwNSxcbiAgICBQRU5ESU5HX0NPREVfVkVSSUZJQ0FUSU9OID0gMjA2MDA2LFxuICAgIENMSUVOVF9MT0cgPSAzMDAwMDEsIC8vIGludGVybmFsLCBmb3IgcmVwb3J0aW5nIGVyb3JycyBpbiBjbGllbnQgU0RLU1xuICAgIElOVkFMSURfREFUQV9DRU5URVIgPSAzMDEwMDEsIC8vIFwiSW52YWxpZCBkYXRhLWNlbnRlclwiLiB3aXRoIGVycm9yIGRldGFpbHMgb2Y6IFwiVGhpcyBBUEkga2V5IGlzIHNlcnZlZCBieSBhbm90aGVyIGRhdGEgY2VudGVyXCIuXG4gICAgSU5WQUxJRF9SRVFVRVNUX0ZPUk1BVCA9IDQwMDAwMSwgLy8gY291bGQgYmUgYWxsIGtpbmQgb2YgZXJyb3JzIHdpdGggd3JvbmcgcmVxdWVzdCAobm9uIHNlY3VyZSB3aGVuIHNob3VsZCBiZSBzZWN1cmUsIHdyb25nIGF1dGhlbnRpY2F0aW9uIGhlYWRlcilcbiAgICBNSVNTSU5HX1JFUVVJUkVEX1BBUkFNRVRFUiA9IDQwMDAwMixcbiAgICBVTklRVUVfSURFTlRJRklFUl9FWElTVFMgPSA0MDAwMDMsXG4gICAgSU5WQUxJRF9QQVJBTUVURVJfRk9STUFUID0gNDAwMDA0LFxuICAgIElOVkFMSURfUEFSQU1FVEVSX1ZBTFVFID0gNDAwMDA2LFxuICAgIERVUExJQ0FURV9WQUxVRSA9IDQwMDAwNyxcbiAgICBJTlZBTElEX0FVVEhFTlRJQ0FUSU9OX0hFQURFUiA9IDQwMDAwOCwgLy8gT0F1dGgyXG4gICAgVkFMSURBVElPTl9FUlJPUiA9IDQwMDAwOSwgLy8gSW4gYWNjb3VudHMucmVnaXN0ZXIsIHdoZW5ldmVyIHRoZXJlIGlzIGEgdmFsaWRhdGlvbiBlcnJvclxuICAgIElOVkFMSURfUkVESVJFQ1RfVVJJID0gNDAwMDExLCAvLyBPQXV0aDJcbiAgICBJTlZBTElEX1JFU1BPTlNFX1RZUEUgPSA0MDAwMTIsIC8vIE9BdXRoMlxuICAgIFVOU1VQUE9SVEVEX0dSQU5UX1RZUEUgPSA0MDAwMTMsIC8vIE9BdXRoMlxuICAgIElOVkFMSURfR1JBTlQgPSA0MDAwMTQsIC8vIE9BdXRoMlxuICAgIENPREVfRVhQSVJFRCA9IDQwMDAxNSwgLy8gT0F1dGgyXG4gICAgU0NIRU1BX1ZBTElEQVRJT05fRkFJTEVEID0gNDAwMDIwLFxuICAgIENBUFRDSEFfVkVSSUZJQ0FUSU9OX0ZBSUxFRCA9IDQwMDAyMSxcbiAgICBVTklRVUVfSU5ERVhfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyMixcbiAgICBJTlZBTElEX1RZUEVfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyMyxcbiAgICBEWU5BTUlDX0ZJRUxEU19WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI0LFxuICAgIFdSSVRFX0FDQ0VTU19WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI1LFxuICAgIElOVkFMSURfRk9STUFUX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjYsXG4gICAgUkVRVUlSRURfVkFMVUVfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyNyxcbiAgICBFTUFJTF9OT1RfVkVSSUZJRUQgPSA0MDAwMjgsXG4gICAgU0NIRU1BX0NPTkZMSUNUX0VSUk9SID0gNDAwMDI5LCAvLyBUbyBoYW5kbGUgVXNlciBzdG9yeSAzNDMzMC4gSW1wcm92ZSBFbGFzdGljU2VhcmNoTWFwcGluZ0V4Y2VwdGlvbiBoYW5kbGluZyBpbiBEUy5JbmRleE9iamVjdFxuICAgIE9QRVJBVElPTl9OT1RfQUxMT1dFRCA9IDQwMDAzMCwgLy8gVXNlciBzdG9yeSAzNDMxMSAtIElmIGFkZENvbm5lY3Rpb24gaXMgY2FsbGVkIHJldHVybiBhbiBlcnJvciAoXCJvcGVyYXRpb24gbm90IGFsbG93ZWQgZm9yIHRoaXMgYWNjb3VudFwiLCA0MDBYWFggZXJyb3IpLlxuICAgIFNFQ1VSSVRZX1ZFUklGSUNBVElPTl9GQUlMRUQgPSA0MDAwNTAsXG4gICAgSU5WQUxJRF9BUElLRVlfUEFSQU1FVEVSID0gNDAwMDkzLFxuICAgIE5PVF9TVVBQT1JURUQgPSA0MDAwOTYsIC8vIHRoZSBmdW5jdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGJ5IGFueSBvZiB0aGUgY3VycmVudGx5IGNvbm5lY3RlZCBwcm92aWRlcnNcbiAgICBVTlNVUFBPUlRFRF9VU0VSX0FHRU5UID0gNDAwMDk3LCAvL1xuICAgIE5PX1BST1ZJREVSUyA9IDQwMDEwMCwgLy8gY2xpZW50P1xuICAgIFBPUFVQX0JMT0NLRUQgPSA0MDAxMDEsIC8vIGNsaWVudFxuICAgIElOVkFMSURfRVZFTlRfSEFORExFUiA9IDQwMDEwMiwgLy8gY2xpZW50XG4gICAgSU5WQUxJRF9DT05UQUlORVJJRCA9IDQwMDEwMywgLy8gY2xpZW50XG4gICAgTk9UX0NPTk5FQ1RFRCA9IDQwMDEwNiwgLy8gdXNlciBpcyBub3QgY29ubmVjdGVkIHRvIHRoZSByZXF1aXJlZCBuZXR3b3JrIG9yIHRvIGFueSBuZXR3b3JrXG4gICAgSU5WQUxJRF9TSVRFX0RPTUFJTiA9IDQwMDEyMCwgLy8gdGhlIGN1cnJlbnQgZG9tYWluIGRvZXMgbm90IG1hdGNoIHRoZSBkb21haW4gY29uZmlndXJlZCBmb3IgdGhlIGFwaSBrZXlcbiAgICBQUk9WSURFUl9DT05GSUdVUkFUSU9OX0VSUk9SID0gNDAwMTIyLCAvLyB0aGUgY3VycmVudCBkb21haW4gZG9lcyBub3QgbWF0Y2ggdGhlIGRvbWFpbiBjb25maWd1cmVkIGZvciB0aGUgYXBpIGtleVxuICAgIExJTUlUX1JFQUNIRUQgPSA0MDAxMjQsIC8vIEdhbWVNZWNoYW5pY3MgLSBDYXAgd2FzIHJlYWNoZWRcbiAgICBGUkVRVUVOQ1lfTElNSVRfUkVBQ0hFRCA9IDQwMDEyNSwgLy8gQ29tbWVudHMvRmVlZCAtIFNwYW0gQ2FwcyB3YXMgcmVhY2hlZFxuICAgIElOVkFMSURfQUNUSU9OID0gNDAwMTI2LCAvLyBHYW1lTWVjaGFuaWNzIC0gSW52YWxpZCBhY3Rpb24uIFRyaWdnZXJlZCBhY3Rpb24gY2FuJ3QgYmUgaW5pdGlhdGVkIGV4dGVybmFsbHlcbiAgICBJTlNVRkZJQ0lFTlRfUE9JTlRTX1RPX1JFREVFTSA9IDQwMDEyNywgLy8gR2FtZU1lY2hhbmljcyAtIEluc3VmZmljaWVudF9wb2ludHNfdG9fcmVkZWVtXG4gICAgU0lHTkFUVVJFX1RJTUVTVEFNUF9FWFBJUkVEID0gNDAwMTI4LCAvLyB0aGUgdGltZXN0YW1wIGluc2lkZSB0aGUgc2lnbmF0dXJlIGlzIGV4cGlyZWRcbiAgICBFcnJvcl9EdXJpbmdfRXh0ZW5zaW9uc19PcGVyYXRpb24gPSA0MDAzMDIsXG4gICAgRXh0ZW5zaW9uX1BvaW50X0N1c3RvbV9FcnJvciA9IDQwMDMwMywgLy8gRXh0ZW5zaW9uIHBvaW50IHJldHVybiBhIHVzZXJGYWNpbmdFcnJvck1lc3NhZ2VcbiAgICBJTlZBTElEX1BPTElDWV9DT05GSUdVUkFUSU9OID0gNDAxMDAwLCAvLyBQb2xpY3kgY29uZmlndXJhdGlvbiBpcyBpbnZhbGlkIChpLmUuIHByZXZlbnQgcmVnaXRyYXRpb24pXG4gICAgU1VTUEVDVEVEX1NQQU0gPSA0MDEwMTAsIC8vIFNvbWVvbmUgaXMgdHJ5aW5nIHRvIHVzZSBHaWd5YSB0byBzZW5kIGEgZW1haWwgd2l0aCBhIFVSTCB0aGF0IGRvZXMgbm90IG1hdGNoIGFueSBvZiB0aGUgY2xpZW50J3MgZG9tYWluczsgc3VzcGVjdGVkIHNwYW0uXG4gICAgTE9HSU5fRkFJTEVEX0NBUFRDSEFfUkVRVUlSRUQgPSA0MDEwMjAsIC8vIGFjY291bnRzLmxvZ2luIC0gY2FwdGNoYSByZXF1aXJlZFxuICAgIFJFUVVFU1RfRkFJTEVEX0NBUFRDSEFfUkVRVUlSRUQgPSA0MDEwMjMsIC8vIGFjY291bnRzLmxvZ2luIC0gY2FwdGNoYSByZXF1aXJlZFxuICAgIExPR0lOX0ZBSUxFRF9XUk9OR19DQVBUQ0hBID0gNDAxMDIxLCAvLyBhY2NvdW50cy5sb2dpbiAtIHdyb25nIGNhcHRjaGEgY29kZVxuICAgIE9MRF9QQVNTV09SRF9VU0VEID0gNDAxMDMwLCAvLyBUaGUgdXNlciBwcm92aWRlZCBoaXMgcHJldmlvdXMgcGFzc3dvcmQsIG5vdCB0aGUgY3VycmVudCBvbmVcbiAgICBGT1JCSURERU4gPSA0MDMwMDAsXG4gICAgSU5WQUxJRF9TRVNTSU9OX1RPS0VOID0gNDAzMDAxLCAvLyBpbnRlcm5hbFxuICAgIFJFUVVFU1RfSEFTX0VYUElSRUQgPSA0MDMwMDIsIC8vIHRoZSB0aW1lc3RhbXAgb3IgZXhwaXJhdGlvbiBvZiB0aGUgdG9rZW4gdXNlZCBleGNlZWRlZCB0aGUgYWxsb3dlZCB0aW1lIHdpbmRvd1xuICAgIElOVkFMSURfUkVRVUVTVF9TSUdOQVRVUkUgPSA0MDMwMDMsXG4gICAgRFVQTElDQVRFX05PTkNFID0gNDAzMDA0LFxuICAgIFVOQVVUSE9SSVpFRF9VU0VSID0gNDAzMDA1LCAvLyB0aGUgdXNlciBpZCBwYXNzZWQgaXMgbm90IHZhbGlkIGZvciB0aGlzIHNpdGVcbiAgICBTRU5TSVRJVkVfREFUQV9TRU5UX09WRVJfSFRUUCA9IDQwMzAwNiwgLy8gd2hlbiBzZW5kaW5nIHRoZSBzZWNyZXQga2V5IGluIFJFU1QgaXQgaGFzIHRvIGJlIG92ZXIgSFRUUFNcbiAgICBQRVJNSVNTSU9OX0RFTklFRCA9IDQwMzAwNywgLy8gQ29tbWVudHMgc2VydmVyIC0gUGVybWlzc2lvbiBkZW5pZWQgKHJlYWRPbmx5LG1vZGVyYXRpb24gc2l0ZSkuXG4gICAgSU5WQUxJRF9PUEVOSURfVVJMID0gNDAzMDA4LCAvLyBjYW5ub3QgZmluZCBhbiBvcGVuSWQgZW5kcG9pbnQgb24gdGhlIHVybCBvciB1c2VybmFtZSBnaXZlbiBmb3Igb3BlbklkIGxvZ2luXG4gICAgUFJPVklERVJfU0VTU0lPTl9FWFBJUkVEID0gNDAzMDA5LCAvLyB0aGUgdXNlciBzZXNzaW9uIGZvciB0aGlzIHByb3ZpZGVyIGlzIGV4cGlyZWRcbiAgICBJTlZBTElEX1NFQ1JFVCA9IDQwMzAxMCwgLy8gdGhlIHJlcXVlc3QgaGFzIGFuIGludmFsaWQgc2VjcmV0IGtleVxuICAgIFNFU1NJT05fSEFTX0VYUElSRUQgPSA0MDMwMTEsIC8vIHRoZSBzZXNzaW9uIGZvciB0aGlzIHVzZXIgaGFzIGV4cGlyZWRcbiAgICBOT19WQUxJRF9TRVNTSU9OID0gNDAzMDEyLCAvLyByZXF1ZXN0ZWQgdXNlciBoYXMgbm8gdmFsaWQgc2Vzc2lvblxuICAgIFVOVkVSSUZJRURfVVNFUiA9IDQwMzAxMywgLy8gdGhlIHVzZXIgaXMgbm90IHZlcmlmaWVkIGluIFNTTyBzZXNzaW9uXG4gICAgTUlTU0lOR19SRVFVRVNUX1JFRkVSUkVSID0gNDAzMDE1LCAvLyB3ZSBjYW4ndCB2YWxpZGF0ZSB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSByZWZlcnJlciBoZWFkZXIgaXMgbWlzc2luZ1xuICAgIFVORVhQRUNURURfUFJPVklERVJfVVNFUiA9IDQwMzAxNywgLy8gdGhlIGxvZ2dlZCBpbiB1c2VyIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBvbmUgZXhwZWN0ZWRcbiAgICBQRVJNSVNTSU9OX05PVF9SRVFVRVNURUQgPSA0MDMwMjIsIC8vIHRoZSBhY3Rpb24gbmVlZHMgYSB1c2VyIHBlcm1pc3Npb24gYW5kIGl0IHdhcyBub3QgcmVxdWVzdGVkXG4gICAgTk9fVVNFUl9QRVJNSVNTSU9OID0gNDAzMDIzLCAvLyB0aGUgYWN0aW9uIG5lZWRzIGEgdXNlciBwZXJtaXNzaW9uIGFuZCB3ZSBkb24ndCBoYXZlIG9uZVxuICAgIFBST1ZJREVSX0xJTUlUX1JFQUNIRUQgPSA0MDMwMjQsIC8vIHRoZSBwcm92aWRlciBsaW1pdCBmb3IgdGhpcyBhY3Rpb24gd2FzIGV4Y2VlZGVkXG4gICAgSU5WQUxJRF9UT0tFTiA9IDQwMzAyNSwgLy8gT0F1dGgyXG4gICAgVU5BVVRIT1JJWkVEX0FDQ0VTU19FUlJPUiA9IDQwMzAyNiwgLy8gQ2FsbHMgdG8gYWNjb3VudHMuaXNBdmFpbGFibGVMb2dpbklEIFdoZW4gcHJldmVudExvZ2luSURIYXJ2ZXN0aW5nID0gdHJ1ZSBzaG91bGQgcmV0dXJuIGFuIGFwcHJvcHJpYXRlIDQwM3h4eCB1bmF1dGhvcml6ZWQgYWNjZXNzIGVycm9yLlxuICAgIERJRkZFUkVOVF9VU0VSX0ZPUl9SRUFVVEggPSA0MDMwMjcsIC8vIERpZmZlcmVudCB1c2VyIHRyaWVkIHRvIHJlLWF1dGhvcml6ZS5cbiAgICBTRVNTSU9OX0VYUElSRURfUkVUUlkgPSA0MDMwMzAsIC8vIElubmVyIGNvZGUgLSB3aGVuIHRoZSBmYWNlYm9vayBzZXNzaW9uIGlzIGV4cGlyZWQgYW5kIHRoZSBjbGllbnQgd2FpdHMgZm9yIEZCIG9uIHBhZ2UgdG8gbG9hZFxuICAgIEFQUFJPVkVEX0JZX01PREVSQVRPUiA9IDQwMzAzMSwgLy8gY29tbWVudHMgLSBjYW50IGZsYWcgY29tbWVudCwgaXQgd2FzIGFwcHJvdmVkIGJ5IHRoZSBtb2RlcmF0b3IgYWxyZWFkeS5cbiAgICBUT0tFTl9IQVNfUkVORVdFRCA9IDQwMzAzMiwgLy8gdGhlIHRva2VuIGlzIG5vIGxvbmdlciB2YWxpZCwgYnV0IHdlIGhhdmUgbmV3IHRva2VuIHRvIHByb3ZpZGVcbiAgICBOT19VU0VSX0NPT0tJRSA9IDQwMzAzNSwgLy8gbm8gdXNlciBjb29raWVcbiAgICBVTkFVVEhPUklaRURfUEFSVE5FUiA9IDQwMzAzNiwgLy8gcGFydG5lciBpcyBkaXNhYmxlZFxuICAgIFBPU1RfREVOSUVEID0gNDAzMDM3LCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBQb3N0IGRlbmllZCB3aGVuIHRoZSB1c2VyIHRyaWVkIHRvIHJldmlldyB0d2ljZS5cbiAgICBOT19MT0dJTl9USUNLRVQgPSA0MDMwNDAsIC8vIG5vIGxvZ2luIHRpY2tldCBpbiBjYWxsYmFjayB1cmxcbiAgICBBQ0NPVU5UX0RJU0FCTEVEID0gNDAzMDQxLCAvLyBGb3IgYWNjb3VudHMgLSB3aGVuIGdzLmFjY291bnRzLklzQWN0aXZlPWZhbHNlXG4gICAgSU5WQUxJRF9MT0dJTklEID0gNDAzMDQyLCAvLyBGb3IgYWNjb3VudHMgLSB3aGVuIHRyeWluZyB0byBsb2dpbiB3aXRoIGEgbG9naW5JRCB0aGF0IGRvIG5vdCBleGlzdHNcbiAgICBMT0dJTl9JREVOVElGSUVSX0VYSVNUUyA9IDQwMzA0MywgLy8gRm9yIGFjY291bnQ6IElmIHByb3ZpZGVyRW1haWwgaXMgZGVmaW5lZCBhcyBhIGxvZ2luSWRlbnRpZmllciBpbiB0aGUgcG9saWN5LCBhbmQgdGhlIGVtYWlsIGFkZHJlc3MgcmVjZWl2ZWQgZnJvbSB0aGUgcHJvdmlkZXIgZXhpc3RzIGluIHRoZSBncy5sb2dpbklkZW50aWZpZXJzIGNvbGxlY3Rpb24gYnV0IGFzc29jaWF0ZWQgd2l0aCBhIGRpZmZlcmVudCBVVUlEIHRoYW4gdGhlIGN1cnJlbnQgdXNlciwgdGhlbiByZXR1cm4gXCJMb2dpbiBpZGVudGlmaWVyIGV4aXN0c1wiIGVycm9yIGNvZGUgKDQwM3h4eCkuXG4gICAgVU5ERVJBR0VfVVNFUiA9IDQwMzA0NCwgLy8gRm9yIENPUFBBIGNvbXBsaWFuY2UgKENoaWxkcmVuJ3MgT25saW5lIFByaXZhY3kgUHJvdGVjdGlvbiBBY3QpXG4gICAgSU5WQUxJRF9TSVRFX0NPTkZJR1VSQVRJT05fRVJST1IgPSA0MDMwNDUsIC8vIEZvciBhY2NvdW50cyAtIHNpdGUgRFMgaXMgZW5hYmxlZCB0aG91Z2ggbm8gRFNTaXplIHdhcyBjb25maWd1cmVkLlxuICAgIExPR0lOSURfRE9FU19OT1RfRVhJU1QgPSA0MDMwNDcsIC8vIEZvciBhY2NvdW50cyAtIHdoZW4gdHJ5aW5nIHRvIHJlc2V0IHBhc3N3b3JkIHdpdGggYSBsb2dpbklEIHRoYXQgZG8gbm90IGV4aXN0c1xuICAgIEFQSV9SQVRFX0xJTUlUX0VYQ0VFREVEID0gNDAzMDQ4LFxuICAgIFBFTkRJTkdfUEFTU1dPUkRfQ0hBTkdFID0gNDAzMTAwLCAvLyBUaGUgdXNlcidzIHBhc3N3b3JkIG5lZWRzIHRvIGJlIGNoYW5nZWRcbiAgICBBQ0NPVU5UX1BFTkRJTkdfVEZBX1ZFUklGSUNBVElPTiA9IDQwMzEwMSxcbiAgICBBQ0NPVU5UX1BFTkRJTkdfVEZBX1JFR0lTVFJBVElPTiA9IDQwMzEwMixcbiAgICBBQ0NPVU5UX1BFTkRJTkdfUkVDRU5UX0xPR0lOID0gNDAzMTEwLFxuICAgIEFDQ09VTlRfVEVNUE9SQVJJTFlfTE9DS0VEX09VVCA9IDQwMzEyMCwgLy8gVG9vIG1hbnkgbG9naW4gYXR0ZW1wdHM7IGFjY291bnQgbG9ja2VkLW91dFxuICAgIFJFRFVOREFOVF9PUEVSQVRJT04gPSA0MDMyMDAsIC8vIFRoZSBjbGllbnQgcGVyZm9ybWVkIGFuIG9wZXJhdGlvbiB0aGF0IGlzIHJlZHVuZGFudFxuICAgIElOVkFMSURfQVBQTElDQVRJT05fSUQgPSA0MDMyMDEsIC8vIFRoZSBhcHAgaWQgcHJvdmlkZWQgaXMgZGlmZmVyZW50IHRoYW4gdGhlIG9uZSBjb25maWd1cmVkIGZvciB0aGUgc2l0ZVxuICAgIE5PVF9GT1VORCA9IDQwNDAwMCwgLy8gQ29tbWVudHMgc2VydmVyIC0gQ2F0ZWdvcnkgbm90IGZvdW5kLiBBY2NvdW50cyAtIGVtYWlsIHZlcmlmaWNhdGlvbiBmYWlsZWQsIHV1aWQgbm90IGZvdW5kLlxuICAgIEZSSUVORF9OT1RfRk9VTkQgPSA0MDQwMDEsIC8vIHRoZSB1c2VyIGlkIHByb3ZpZGVkIGFzIGEgdGFyZ2V0IGlzIG5vdCBhIGZyaWVuZCBmb3IgdGhlIGN1cnJlbnQgdXNlclxuICAgIENBVEVHT1JZX05PVF9GT1VORCA9IDQwNDAwMiwgLy8gQ29tbWVudHMgc2VydmVyIC0gQ2F0ZWdvcnkgbm90IGZvdW5kLlxuICAgIFVJRF9OT1RfRk9VTkQgPSA0MDQwMDMsXG4gICAgUkVTT1VSQ0VfTk9UX0ZPVU5EID0gNDA0MDA0LCAvLyBDbGllbnQgc2lkZSAtIGltYWdlIG5vdCBmb3VuZCBhZnRlciB1cGxvYWRcbiAgICBJTlZBTElEX0FQSV9NRVRIT0QgPSA0MDUwMDEsIC8vIGludGVybmFsIGZvciBvdXIgSlMgQVBJXG4gICAgSURFTlRJVFlfRVhJU1RTID0gNDA5MDAxLCAvLyB3aGVuIHRyeWluZyB0byBjb25uZWN0IHRvIGEgcHJvdmlkZXIgdGhhdCBpcyBhbHJlYWR5IGNvbm5lY3RlZCBvciBsaW5rIHRvIGFuIGFscmVhZHkgbGlua2VkIGFjY291bnRcbiAgICBHT05FID0gNDEwMDAwLCAvLyBSZXNvdXJjZSBubyBsb25nZXIgYXZhaWxhYmxlLiBEYXRhIEtleSBTZXJ2ZXIgLSBrZXkgcmV2b2tlZC9leHBpcmVkLlxuICAgIFJFUVVFU1RfRU5USVRZX1RPT19MQVJHRSA9IDQxMzAwMSwgLy8gQ29tbWVudHMgc2VydmVyIC0gUmVxdWVzdCB0byBsYXJnZVxuICAgIENPTU1FTlRfVEVYVF9UT09fTEFSR0UgPSA0MTMwMDIsIC8vIENvbW1lbnRzIHNlcnZlciAtIENvbW1lbnQgVGV4dCB0byBsYXJnZS5cbiAgICBPQkpFQ1RfVE9PX0xBUkdFID0gNDEzMDAzLCAvLyBEYXRhU3RvcmUgb2JqZWN0IGlzIHRvbyBsYXJnZVxuICAgIFBST0ZJTEVfUEhPVE9fVE9PX0xBUkdFID0gNDEzMDA0LCAvLyBQcm9maWxlIHBob3RvIGlzIHRvbyBsYXJnZSwgZXhjZWVkcyBtYXhpbXVtIGFsbG93ZWQgY29udGVudCBsZW5ndGhcbiAgICBSRVFVRVNUX1VSSV9UT09fTE9ORyA9IDQxNDAwMCwgLy9UaGUgVVJJIHByb3ZpZGVkIHdhcyB0b28gbG9uZyBmb3IgdGhlIHNlcnZlciB0byBwcm9jZXNzLlxuICAgIE1JU1NJTkdfVVNFUl9QSE9UTyA9IDQwOTAxMCwgLy8gRXJyb3IgLSBtaXNzaW5nIHVzZXIgcGhvdG9cbiAgICBDT1VOVEVSX05PVF9SRUdJU1RFUkVEID0gNDA5MDExLCAvLyBDb3VudGVyIG5vdCByZWdpc3RlcmVkXG4gICAgSU5WQUxJRF9HTUlEX1RJQ0tFVCA9IDQwOTAxMiwgLy8gZ21pZCB0aWNrZXQgaXMgbm90IHZhbGlkXG4gICAgU0FNTF9NQVBQRURfQVRUUklCVVRFX05PVF9GT1VORCA9IDQwOTAxMywgLy8gVXNlZCB3aGVuIG1hcHBlZCBhdHRyaWJ1dGUgdmFsdWUgZm9yIHByb3ZpZGVyVUlEIGNhbm5vdCBiZSByZXRyZWl2ZWRcbiAgICBTQU1MX0NFUlRJRklDQVRFX05PVF9GT1VORCA9IDQwOTAxNCwgLy8gVXNlZCB3aGVuIFNBTUwgY2VydGlmaWNhdGUgY291bGQgbm90IGJlIHJldHJlaXZlZC5cbiAgICBTQU1MX01FU1NBR0VfTk9UX0ZPVU5EID0gNDA5MDE1LCAvLyBVc2VkIHdoZW4gY2FjaGVkIFNBTUwgbWVzc2FnZSBjb3VsZCBub3QgYmUgcmV0cmVpdmVkLlxuICAgIEdFTkVSQUxfU0VSVkVSX0VSUk9SID0gNTAwMDAxLFxuICAgIFNFUlZFUl9MT0dJTl9FUlJPUiA9IDUwMDAwMiwgLy8gZ2VuZXJhbCBlcnJvciBkdXJpbmcgdGhlIGxvZ2luIHByb2Nlc3NcbiAgICBERUZBVUxUX0FQUExJQ0FUSU9OX0NPTkZJR1VSQVRJT05fRVJST1IgPSA1MDAwMDMsIC8vIEZvciBtdWx0aXBsZSBEQyAtIHdoZW4gbm8gZGVmYXVsdCBhcHBsaWNhdGlvbiBjYW4gYmUgZm91bmQgaW4gRGVmYXVsdEFwcGxpY2F0aW9ucy5jb25maWcuIFdpdGggZXJyb3IgZGV0YWlscyBvZjogXCJEZWZhdWx0IGFwcGxpY2F0aW9uIGlzbid0IGNvbmZpZ3VyZWQgZm9yIGRhdGFDZW50ZXJcIlxuICAgIFNFU1NJT05fTUlHUkFUSU9OX0VSUk9SID0gNTAwMDE0LCAvLyBlcnJvciBpbiBtaWdyYXRpbmcgb2xkIHRvIG5ldyBmYWNlYm9vayBzZXNzaW9uXG4gICAgUFJPVklERVJfRVJST1IgPSA1MDAwMjMsIC8vIGdlbmVyYWwgZXJyb3IgZnJvbSB0aGUgcHJvdmlkZXJcbiAgICBEQVRBQkFTRV9FUlJPUiA9IDUwMDAyOCxcbiAgICBVU0VSTkFNRV9SRVFVSVJFRCA9IDUwMDAyOSwgLy8gSW5uZXIgY29kZVxuICAgIE5PX1BST1ZJREVSX0FQUExJQ0FUSU9OID0gNTAwMDMxLCAvLyB0aGUgYXBwbGljYXRpb24gZm9yIHRoaXMgcHJvdmlkZXIgaXMgbm90IGRlZmluZWQgZm9yIHRoaXMgc2l0ZVxuICAgIExPQURfRkFJTEVEID0gNTAwMDMyLCAvLyBjbGllbnQgZXJyb3JcbiAgICBJTlZBTElEX0VOVklST05NRU5UX0NPTkZJRyA9IDUwMDAzMywgLy8gSW4gY2FzZSB0aGVyZSBpcyBubyB0YXJnZXQgZW52aXJvbm1lbnQgaW4gdGhlIGNvbmZpZyBmaWxlIHdlJ2QgcmV0dXJuIHdpdGggIGludmFsaWRfZW52aXJvbm1lbnRfY29uZmlnIGVycm9yLlxuICAgIEVSUk9SX0RVUklOR19CQUNLRU5EX09QRVJBVElPTiA9IDUwMDAzNCxcbiAgICBUSU1FT1VUID0gNTA0MDAxLCAvLyBvdXRnb2luZyByZXF1ZXN0IGhhZCB0aW1lZCBvdXRcbiAgICBDTElFTlRUSU1FT1VUID0gNTA0MDAyLCAvLyBGb3Igc2VydmVyIFNES3MgLSBhIGNsaWVudCBzaWRlIHRpbWVvdXRcbiAgICBJTlZBTElEX1VSTCA9IDQwNDAwNCwgLy8gZW1iZWQubHkgNDA0IGVycm9yIG1lc3NhZ2UgLSB1cmwgaXMgbm90IHZhbGlkXG4gICAgTUVESUFfSVRFTVNfTk9UX1NVUFBPUlRFRCA9IDQwMTAwMSwgLy8gTWVkaWEgaXRlbXMgYSBub3QgYWxsb3dlZCBmb3IgdGhpcyBjYXRlZ29yeVxuICAgIE1JU1NJTkdfRVJST1JfQ09ERSA9IDU5OTk5OSxcbiAgICBUSElTX0FVVEhFTlRJQ0FUSU9OX01FVEhPRF9JU19DVVJSRU5UTFlfRElTQUJMRUQgID0gNDAzMzAwLFxuICAgIEZPUkNFX0xJTktfTE9HSU5fSURFTlRJRklFUl9FWElTVFMgPSA0MDkwMDMsXG4gICAgUEFTU0tFWV9BVVRIRU5USUNBVE9SX1JFR0lTVEVSRUQgPSA0MDAxMzAsXG4gICAgUEFTU0tFWV9BQk9SVEVEID0gNDAwMTMxLFxuICAgIFBBU1NLRVlfRVJST1IgPSA1MDAxMzFcbn1cbmV4cG9ydCBjb25zdCBlbnVtIEdTRXJyb3JEZXRhaWxzIHtcbiAgICBOb25lID0gMCxcbiAgICBTYW1lX3Bhc3N3b3JkID0gMTAwMDAxLCAvLyBSZXNldCBQYXNzd29yZCAtIFwiJ29sZFBhc3N3b3JkJyBjYW5ub3QgYmUgdGhlIHNhbWUgYXMgJ25ld1Bhc3N3b3JkJ1wiXG4gICAgSW52YWxpZF9wYXNzd29yZCA9IDEwMDAwMiwgLy8gUmVzZXQgUGFzc3dvcmQgLSBjdXJyZW50IHBhc3N3b3JkIGlzIHdyb25nL2ludmFsaWRcbiAgICBJbnZhbGlkX2NvdW50ZXJzX3F1ZXJ5X3dpdGhfY3Vyc29yID0gMTAwMDAzLFxufVxuIiwiaW1wb3J0ICogYXMgRVM2UHJvbWlzZSBmcm9tICdlczYtcHJvbWlzZSdcblxuT2JqZWN0LmFzc2lnbihnaWd5YSwgeyBQcm9taXNlOiBFUzZQcm9taXNlIH0pO1xuIiwiLy8gTG9jYWwgZW52aXJvbm1lbnQgaW5mbyAoYnJvd3NlciwgY2FwYWJpbGl0aWVzLCBob3N0aW5nIGRvbWFpbilcblxuZGVjbGFyZSBjb25zdCBBY3RpdmVYT2JqZWN0OiBhbnk7XG5cbnZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG5leHBvcnQgdmFyIGxvY2FsSW5mbyA9IHtcbiAgICBiYXNlRG9tYWluOiAnJywgLy8gY2FsY3VsYXRlZCBsYXRlciBvblxuICAgIGlzQnJvd3NlclN1cHBvcnRzRmlsZXNBUEk6ICgoKSA9PiB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgRmlsZVJlYWRlciA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgRmlsZVJlYWRlciA9PT0gJ29iamVjdCc7XG4gICAgfSkoKSxcbiAgICBpbml0VGltZTogbmV3IERhdGUoKSxcbiAgICB2ZXJzaW9uOiAwLCAvL1RPRE9cbiAgICBwYWdlRG9tYWluOiBkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSxcbiAgICBwcm90b2NvbDogZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgPT0gJ2h0dHA6JyA/ICdodHRwJyA6ICdodHRwcycsXG4gICAgdXNlckFnZW50OiB1c2VyQWdlbnQsXG4gICAgaXNXaW46IHVzZXJBZ2VudC5pbmRleE9mKCd3aW4nKSAhPSAtMSxcbiAgICBpc0lFOiB1c2VyQWdlbnQuaW5kZXhPZignbXNpZScpICE9IC0xIHx8ICh1c2VyQWdlbnQuaW5kZXhPZignbW96aWxsYScpICE9IC0xICYmIHVzZXJBZ2VudC5pbmRleE9mKCd0cmlkZW50JykgIT0gLTEpLFxuICAgIGlzSUU2OiB1c2VyQWdlbnQuaW5kZXhPZignbXNpZSA2LicpICE9IC0xLFxuICAgIGlzSUU3OiB1c2VyQWdlbnQuaW5kZXhPZignbXNpZSA3LicpICE9IC0xLFxuICAgIGlzSUU4OiB1c2VyQWdlbnQuaW5kZXhPZignbXNpZSA4LicpICE9IC0xLFxuICAgIGlzSUU5OiB1c2VyQWdlbnQuaW5kZXhPZignbXNpZSA5LicpICE9IC0xLFxuICAgIGlzSUUxMDogdXNlckFnZW50LmluZGV4T2YoJ21zaWUgMTAuJykgIT0gLTEsXG4gICAgaXNJRTExOiB1c2VyQWdlbnQuaW5kZXhPZignbW96aWxsYScpICE9IC0xICYmIHVzZXJBZ2VudC5pbmRleE9mKCd0cmlkZW50LzcuMCcpICE9IC0xLFxuICAgIGlzRWRnZUxlZ2FjeTogdXNlckFnZW50LmluZGV4T2YoJ2VkZ2UnKSAhPSAtMSxcbiAgICBpc0VkZ2U6IFJlZ0V4cCgvZWRnKD8hZSkvKS50ZXN0KHVzZXJBZ2VudCksXG4gICAgaXNJT1M6IHVzZXJBZ2VudC5pbmRleE9mKCdpcGhvbmUnKSAhPSAtMSB8fCB1c2VyQWdlbnQuaW5kZXhPZignaXBhZCcpICE9IC0xIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdpcG9kJykgIT0gLTEsXG4gICAgaXNTYWZhcmk1MzQ6IHVzZXJBZ2VudC5pbmRleE9mKCdzYWZhcmkvNTM0JykgIT0gLTEsXG4gICAgaXNXZUNoYXQ6IHVzZXJBZ2VudC5pbmRleE9mKCdtaWNyb21lc3NlbmdlcicpICE9IC0xLFxuICAgIGlvc1ZlcnNpb246IChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdhcHBsZXdlYmtpdCcpICE9IC0xICYmIHVzZXJBZ2VudC5pbmRleE9mKCd2ZXJzaW9uLycpICE9IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodXNlckFnZW50LnNwbGl0KCd2ZXJzaW9uLycpWzFdLnNwbGl0KCcgJylbMF0pO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIDA7XG4gICAgfSkoKSxcbiAgICBpc0FuZHJvaWQ6IHVzZXJBZ2VudC5pbmRleE9mKCdhbmRyb2lkJykgIT0gLTEsXG4gICAgaXNBbmRyb2lkQnJvd3NlcjogKHVzZXJBZ2VudCA9PiB7XG4gICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignbW96aWxsYS81LjAnKSA9PT0gLTEpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdhbmRyb2lkIDQnKSA9PT0gLTEpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdhcHBsZXdlYmtpdCcpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignd2luZG93cyBwaG9uZScpICE9PSAtMSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vIFNwZWNpYWwgdXNlciBhZ2VudHMgZm91bmQgc28gZmFyIHRoYXQgdmlvbGF0ZSB0aGUgZXhpc3RhbmNlIG9mIGNocm9tZSBydWxlXG4gICAgICAgIC8vIEJ1ZyAzODM2NyBBbmRyb2lkIEJyb3dzZXI6IE1vemlsbGEvNS4wIChMaW51eDsgQW5kcm9pZCA0LjIuMjsgZW4tdXM7IFNBTVNVTkcgR1QtSTk1MDAgQnVpbGQvSkRRMzkpIEFwcGxlV2ViS2l0LzUzNS4xOSAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vMS4wIENocm9tZS8xOC4wLjEwMjUuMzA4IE1vYmlsZSBTYWZhcmkvNTM1LjE5XG4gICAgICAgIC8vIEJ1ZyA0MDIwOSBDaHJvbWUgQnJvd3NlcjogTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDQuMi4yOyBTQU1TVU5HIFNHVC1JNzQ3IEJ1aWxkL0tPVDQ5SCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzM5LjAuMjE3MS45MyBNb2JpbGUgU2FmYXJpLzUzNy4zNlxuICAgICAgICAvLyBXaW5kb3dzIFBob25lIEJyb3dzZXI6IE1vemlsbGEvNS4wIChNb2JpbGU7IFdpbmRvd3MgUGhvbmUgOC4xOyBBbmRyb2lkIDQuMDsgQVJNOyBUcmlkZW50LzcuMDsgVG91Y2g7IHJ2OjExLjA7IElFTW9iaWxlLzExLjA7IE5PS0lBOyBMdW1pYSA5MjApIGxpa2UgaVBob25lIE9TIDdfMF8zIE1hYyBPUyBYIEFwcGxlV2ViS2l0LzUzNyAoS0hUTUwsIGxpa2UgR2Vja28pIE1vYmlsZSBTYWZhcmkvNTM3XG4gICAgICAgIC8vIENocm9tZSBCcm93c2VyOiBNb3ppbGxhLzUuMCAoTGludXg7IEFuZHJvaWQgNC4yLjI7IGVuLWdiOyBTQU1TVU5HIEdULUk5NTAwIEJ1aWxkL0tPVDQ5SCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi8xLjUgQ2hyb21lLzI4LjAuMTUwMC45NCBNb2JpbGUgU2FmYXJpLzUzNy4zNlxuXG4gICAgICAgIHZhciBjaHJvbWVJbmZvID0gL2Nocm9tZVxcLyhcXGQrKS8uZXhlYyh1c2VyQWdlbnQpO1xuXG4gICAgICAgIGlmICghY2hyb21lSW5mbykgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgdmFyIGNocm9tZVZlcnNpb24gPSBwYXJzZUludChjaHJvbWVJbmZvWzFdKTtcblxuICAgICAgICByZXR1cm4gY2hyb21lVmVyc2lvbiA8IDIwO1xuICAgIH0pKHVzZXJBZ2VudCksXG4gICAgY3VycmVudEJyb3dzZXI6ICcnLFxuICAgIGFuZHJvaWRWZXJzaW9uOiAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCcpICE9IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh1c2VyQWdlbnQuc2xpY2UodXNlckFnZW50LmluZGV4T2YoJ2FuZHJvaWQnKSArIDgpKTtcbiAgICAgICAgfSBlbHNlIHJldHVybiAwO1xuICAgIH0pKCksXG4gICAgaXNDaHJvbWU6IHVzZXJBZ2VudC5pbmRleE9mKCdjaHJvbWUnKSAhPSAtMSAmJiB1c2VyQWdlbnQuaW5kZXhPZignZWRnJykgPT0gLTEsIC8vIGVkZ2UgYnJvd3NlciBhbHNvIHVzZXMgQ2hyb21lIGluIGl0cyBVQSBzdHJpbmcuXG4gICAgaXNHb29nbGVCb3Q6IHVzZXJBZ2VudC5pbmRleE9mKCdnb29nbGVib3QnKSAhPSAtMSxcbiAgICBpc0ZGOiB1c2VyQWdlbnQuaW5kZXhPZignZmlyZWZveCcpICE9IC0xLFxuICAgIGlzT3BlcmE6IHVzZXJBZ2VudC5pbmRleE9mKCdvcGVyYScpICE9IC0xLFxuICAgIGlzU2FmYXJpOlxuICAgICAgICBuYXZpZ2F0b3IuYXBwVmVyc2lvbiAmJlxuICAgICAgICBuYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3NhZmFyaScpICE9IC0xICYmXG4gICAgICAgIG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignY2hyb21lJykgPT0gLTEgJiZcbiAgICAgICAgdXNlckFnZW50LmluZGV4T2YoJ2FuZHJvaWQnKSA9PSAtMSxcbiAgICBpc0lPU1dlYlZpZXc6IC8oaVBob25lfGlQb2R8aVBhZCkuKkFwcGxlV2ViS2l0KD8hLipTYWZhcmkpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxcbiAgICBpc0lPU0Nocm9tZTogdXNlckFnZW50LmluZGV4T2YoJ2NyaW9zJykgIT0gLTEsXG4gICAgaXNNQUM6IG5hdmlnYXRvci5hcHBWZXJzaW9uICYmIG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignbWFjJykgIT0gLTEsXG4gICAgaXNXaW5kb3dzUGhvbmU6IHVzZXJBZ2VudC5pbmRleE9mKCd3aW5kb3dzIHBob25lJykgIT0gLTEsXG4gICAgaXNGYWNlYm9va0Jyb3dzZXI6IHVzZXJBZ2VudC5pbmRleE9mKCdmYmFuJykgIT0gLTEgfHwgdXNlckFnZW50LmluZGV4T2YoJ2ZiYXYnKSAhPSAtMSxcbiAgICBzdXBwb3J0c1Bvc3RNZXNzYWdlOiB3aW5kb3cucG9zdE1lc3NhZ2UgIT0gbnVsbCAmJiAodXNlckFnZW50LmluZGV4T2YoJ21zaWUnKSA9PSAtMSB8fCB1c2VyQWdlbnQuaW5kZXhPZignaWVtb2JpbGUnKSAhPSAtMSksXG4gICAgc3VwcG9ydHNMb2NhbFN0b3JhZ2U6IGZhbHNlLFxuICAgIHN1cHBvcnRzU2Vzc2lvblN0b3JhZ2U6IGZhbHNlLFxuICAgIHN1cHBvcnRzRmxhc2g6ICgoKSA9PiB7XG4gICAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvOTk4MjQ1L2hvdy1jYW4taS1kZXRlY3QtaWYtZmxhc2gtaXMtaW5zdGFsbGVkLWFuZC1pZi1ub3QtZGlzcGxheS1hLWhpZGRlbi1kaXYtdGhhdC1pbmZcbiAgICAgICAgbGV0IHN1cHBvcnRzRmxhc2ggPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubWltZVR5cGVzICYmXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLm1pbWVUeXBlc1snYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnXSAhPSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubWltZVR5cGVzWydhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCddLmVuYWJsZWRQbHVnaW5cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHN1cHBvcnRzRmxhc2ggPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmbyA9IG5ldyBBY3RpdmVYT2JqZWN0KCdTaG9ja3dhdmVGbGFzaC5TaG9ja3dhdmVGbGFzaCcpO1xuICAgICAgICAgICAgICAgIGlmIChmbykge1xuICAgICAgICAgICAgICAgICAgICBzdXBwb3J0c0ZsYXNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIHJldHVybiBzdXBwb3J0c0ZsYXNoO1xuICAgIH0pKCksXG4gICAgcXVpcmtzTW9kZTogZG9jdW1lbnQuY29tcGF0TW9kZSA9PSAnQmFja0NvbXBhdCcgJiYgdXNlckFnZW50LmluZGV4T2YoJ21zaWUnKSAhPSAtMSxcbiAgICBiYWNrQ29tcGF0OiBkb2N1bWVudC5jb21wYXRNb2RlID09ICdCYWNrQ29tcGF0JyxcbiAgICAvLyBUT0RPOiBBZGQgaXNUYWJsZXQgZnVuY3Rpb24gZm9yIGRldmljZXMgbm9uLU1vYmlsZVxuICAgIGlzTW9iaWxlOiAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtb2JpbGVDbGllbnRzID0gW1xuICAgICAgICAgICAgJ2lwaG9uZScsXG4gICAgICAgICAgICAnaXBvZCcsXG4gICAgICAgICAgICAnYW5kcm9pZCcsXG4gICAgICAgICAgICAnbWlkcCcsXG4gICAgICAgICAgICAnMjQweDMyMCcsXG4gICAgICAgICAgICAnYmxhY2tiZXJyeScsXG4gICAgICAgICAgICAnbmV0ZnJvbnQnLFxuICAgICAgICAgICAgJ25va2lhJyxcbiAgICAgICAgICAgICdwYW5hc29uaWMnLFxuICAgICAgICAgICAgJ3BvcnRhbG1tbScsXG4gICAgICAgICAgICAnc2hhcnAnLFxuICAgICAgICAgICAgJ3NpZS0nLFxuICAgICAgICAgICAgJ3Nvbnllcmljc3NvbicsXG4gICAgICAgICAgICAnc3ltYmlhbicsXG4gICAgICAgICAgICAnd2luZG93cyBjZScsXG4gICAgICAgICAgICAnYmVucScsXG4gICAgICAgICAgICAnbWRhJyxcbiAgICAgICAgICAgICdtb3QtJyxcbiAgICAgICAgICAgICdvcGVyYSBtaW5pJyxcbiAgICAgICAgICAgICdwaGlsaXBzJyxcbiAgICAgICAgICAgICdwb2NrZXQgcGMnLFxuICAgICAgICAgICAgJ3NhZ2VtJyxcbiAgICAgICAgICAgICdzYW1zdW5nJyxcbiAgICAgICAgICAgICdodGMnLFxuICAgICAgICBdO1xuICAgICAgICBmb3IgKHZhciBpIGluIG1vYmlsZUNsaWVudHMpIHtcbiAgICAgICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZihtb2JpbGVDbGllbnRzW2ldKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KSgpLFxuICAgIGlzTW9iaWxlQXBwOiAoKCkgPT4ge1xuICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKVxuICAgICAgICAgICAgLy8gZm9yIG9sZCBJRVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHZhciBtZXRhVGFnczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWV0YScpIGFzIGFueTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1ldGFUYWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobWV0YVRhZ3NbaV0uZ2V0QXR0cmlidXRlKCduYW1lJykgPT0gJ3ZpZXdwb3J0Jykge1xuICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gbWV0YVRhZ3NbaV0uZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29udGVudCAmJiBjb250ZW50LmluZGV4T2YoJ3dpZHRoPWRldmljZS13aWR0aCcpICE9PSAtMSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSkoKSxcbiAgICBpc05hdGl2ZU1vYmlsZUFwcDogZmFsc2UsIC8vIHdpbGwgY2hhbmdlIGlmIG1vYmlsZSBhZGFwdGVyIHdpbGwgbG9hZCBbaW4gaXRzICdpbml0JyBtZXRob2RdLlxuICAgIGlzVG91Y2g6IChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdylcbiAgICAgICAgICAgIC8vIHdvcmtzIG9uIG1vc3QgYnJvd3NlcnNcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgIGlmICgnb25tc2dlc3R1cmVjaGFuZ2UnIGluIHdpbmRvdykge1xuICAgICAgICAgICAgLy8gd29ya3Mgb24gaWUxMFxuICAgICAgICAgICAgLy8gVHJ5IHRvIGRldGVybWluZSBpZiBJRSBpcyBvcGVuIGluIG1ldHJvIG1vZGUuIE1ldHJvIGRvZXNuJ3QgYWxsb3cgYWN0aXZlWCwgdGhhdCdzIHRoZSBiZXN0IHRlc3QgYXZhaWxhYmxlIGFzIG9mIElFMTEuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KSgpLFxuICAgIGlzT25MaW5lOiAoKSA9PiBuYXZpZ2F0b3Iub25MaW5lLFxuICAgIG1lc3NhZ2luZ01ldGhvZDogMVxufTtcbmNvbnN0IGlzU3RvcmFnZUVuYWJsZWQgPSAoc3RvcmFnZU5hbWU6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3dbc3RvcmFnZU5hbWVdO1xuICAgICAgICBpZiAoIXN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRlc3ROYW1lID0gJ19naWdfbG9jYWxTdG9yYWdlX3Rlc3QnO1xuICAgICAgICBjb25zdCB0ZXN0VmFsdWUgPSAnanVzdCBjaGVja2luZyBmb3IgbG9jYWxTdG9yYWdlJztcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHRlc3ROYW1lLCB0ZXN0VmFsdWUpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdG9yYWdlLmdldEl0ZW0odGVzdE5hbWUpID09PSB0ZXN0VmFsdWU7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh0ZXN0TmFtZSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgLy8gUmVhc29uczpcbiAgICAgICAgLy8gLSBJbnNpZGUgM3JkIHBhcnR5IEFQSSBwcm94eSBpRnJhbWUuXG4gICAgICAgIC8vIC0gU2FmYXJpIGluIGluY29nbml0byBtb2RlIHdpbGwgZXJyb3Igd2l0aCBcInF1b3RhIGV4Y2VlZGVkXCIuXG4gICAgICAgIC8vIC0gQ2hyb21lIHdpdGggM3JkIHBhcnR5IGNvb2tpZXMgZGlzYWJsZWQgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB5b3UgYWNjZXNzIHRoZSB3aW5kb3cubG9jYWxTdG9yYWdlIG9iamVjdCBpbiBBTlkgd2F5LlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufTtcbmxvY2FsSW5mby5zdXBwb3J0c0xvY2FsU3RvcmFnZSA9IGlzU3RvcmFnZUVuYWJsZWQoJ2xvY2FsU3RvcmFnZScpO1xubG9jYWxJbmZvLnN1cHBvcnRzU2Vzc2lvblN0b3JhZ2UgPSBpc1N0b3JhZ2VFbmFibGVkKCdzZXNzaW9uU3RvcmFnZScpO1xubG9jYWxJbmZvLmlzTUFDID0gbG9jYWxJbmZvLmlzTUFDICYmICFsb2NhbEluZm8uaXNJT1M7XG52YXIgb3MgPSBsb2NhbEluZm8uaXNXaW5cbiAgICA/ICd3aW5kb3dzJ1xuICAgIDogbG9jYWxJbmZvLmlzV2luZG93c1Bob25lXG4gICAgICAgID8gJ3dpbnBob25lJ1xuICAgICAgICA6IGxvY2FsSW5mby5pc0lPU1xuICAgICAgICAgICAgPyAnaW9zLXYnICsgbG9jYWxJbmZvLmlvc1ZlcnNpb25cbiAgICAgICAgICAgIDogbG9jYWxJbmZvLmlzTUFDXG4gICAgICAgICAgICAgICAgPyAnbWFjJ1xuICAgICAgICAgICAgICAgIDogbG9jYWxJbmZvLmlzQW5kcm9pZFxuICAgICAgICAgICAgICAgICAgICA/ICdhbmRyb2lkJ1xuICAgICAgICAgICAgICAgICAgICA6ICcnO1xuaWYgKG9zKSBvcyArPSAnICc7XG52YXIgYnJvd3NlciA9IGxvY2FsSW5mby5pc0Nocm9tZVxuICAgID8gJ2Nocm9tZSdcbiAgICA6IGxvY2FsSW5mby5pc0ZGXG4gICAgICAgID8gJ2ZpcmVmb3gnXG4gICAgICAgIDogbG9jYWxJbmZvLmlzU2FmYXJpXG4gICAgICAgICAgICA/ICdzYWZhcmknXG4gICAgICAgICAgICA6IGxvY2FsSW5mby5pc0VkZ2VcbiAgICAgICAgICAgICAgICA/ICdlZGdlJ1xuICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNFZGdlTGVnYWN5XG4gICAgICAgICAgICAgICAgPyAnZWRnZSBsZWdhY3knXG4gICAgICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNJRTExXG4gICAgICAgICAgICAgICAgICAgID8gJ2llMTEnXG4gICAgICAgICAgICAgICAgICAgIDogbG9jYWxJbmZvLmlzSUUxMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnaWUxMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbG9jYWxJbmZvLmlzSUU5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnaWU5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbG9jYWxJbmZvLmlzSUU4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2llOCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJztcbmxvY2FsSW5mby5jdXJyZW50QnJvd3NlciA9IG9zICsgYnJvd3NlcjtcblxudHlwZSBCYXR0ZXJ5SW5mbyA9IHtcbiAgICBjaGFyZ2luZzogYm9vbGVhbjtcbiAgICBjaGFyZ2luZ1RpbWU6IG51bWJlcjtcbiAgICBkaXNjaGFyZ2luZ1RpbWU6IG51bWJlcjtcbiAgICBsZXZlbDogbnVtYmVyO1xufTtcbnR5cGUgUGx1Z2luID0ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBmaWxlbmFtZTogc3RyaW5nO1xuICAgIGxlbmd0aDogbnVtYmVyO1xufTtcbmV4cG9ydCBjbGFzcyBDbGllbnRGZWF0dXJlIHtcbiAgICBwdWJsaWMgdXNlckFnZW50Pzogc3RyaW5nO1xuICAgIHB1YmxpYyBwbHVnaW5zPzogUGx1Z2luW107XG4gICAgcHVibGljIGxvY2FsVGltZT86IHN0cmluZztcbiAgICBwdWJsaWMgdGltZXpvbmVPZmZzZXQ/OiBudW1iZXI7XG4gICAgcHVibGljIHBlcm1pc3Npb25TdGF0dXM/OiB7IHN0YXRlOiBzdHJpbmcgfTtcbiAgICBwdWJsaWMgd2ViZHJpdmVyPzogYm9vbGVhbjtcbiAgICBwdWJsaWMgYmF0dGVyeUluZm8/OiBCYXR0ZXJ5SW5mbztcbiAgICBwdWJsaWMgZmVhdHVyZXM/OiBbbnVtYmVyLCBzdHJpbmcsIGJvb2xlYW4sIGJvb2xlYW5dO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuYXZpZ2F0b3I6IE5hdmlnYXRvciA9IGdpZ3lhLl8uV2luZG93UHJvdmlkZXIubmF2aWdhdG9yKCksXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBzY3JlZW46IFNjcmVlbiA9IGdpZ3lhLl8uV2luZG93UHJvdmlkZXIuc2NyZWVuKCkpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0RGF0YSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgY29sbGVjdERhdGEoKSB7XG4gICAgICAgIHRoaXMudXNlckFnZW50ID0gdGhpcy5uYXZpZ2F0b3I/LnVzZXJBZ2VudDtcbiAgICAgICAgdGhpcy5wbHVnaW5zID0gQXJyYXkuZnJvbSh0aGlzLm5hdmlnYXRvcj8ucGx1Z2lucyB8fCBbXSkubWFwKCh7bmFtZSwgZmlsZW5hbWUsIGxlbmd0aH0pID0+ICh7IG5hbWUsIGZpbGVuYW1lLCBsZW5ndGggfSkpO1xuICAgICAgICB0aGlzLmxvY2FsVGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgICAgIHRoaXMudGltZXpvbmVPZmZzZXQgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgICAgIGNvbnN0IHBlcm1pc3Npb25TdGF0dXMgPSBhd2FpdCB0aGlzLm5hdmlnYXRvcj8ucGVybWlzc2lvbnM/LnF1ZXJ5KHsgbmFtZTonbm90aWZpY2F0aW9ucycgfSk7XG4gICAgICAgIGlmIChwZXJtaXNzaW9uU3RhdHVzKSB7XG4gICAgICAgICAgICBjb25zdCB7c3RhdGV9ID0gcGVybWlzc2lvblN0YXR1cztcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvblN0YXR1cyA9IHtzdGF0ZX07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53ZWJkcml2ZXIgPSB0aGlzLm5hdmlnYXRvcj8ud2ViZHJpdmVyO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGJhdHRlcnlJbmZvID0gdGhpcy5uYXZpZ2F0b3IuZ2V0QmF0dGVyeSAmJiBhd2FpdCB0aGlzLm5hdmlnYXRvci5nZXRCYXR0ZXJ5KCk7XG4gICAgICAgIGlmIChiYXR0ZXJ5SW5mbykge1xuICAgICAgICAgICAgY29uc3Qge2NoYXJnaW5nLCBjaGFyZ2luZ1RpbWUsIGRpc2NoYXJnaW5nVGltZSwgbGV2ZWx9ID0gYmF0dGVyeUluZm87XG4gICAgICAgICAgICB0aGlzLmJhdHRlcnlJbmZvID0ge2NoYXJnaW5nLCBjaGFyZ2luZ1RpbWUsIGRpc2NoYXJnaW5nVGltZSwgbGV2ZWx9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSBbXG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRvcj8ubWF4VG91Y2hQb2ludHMgfHwgdGhpcy5uYXZpZ2F0b3I/Lm1zTWF4VG91Y2hQb2ludHMsXG4gICAgICAgICAgICBgJHt0aGlzLnNjcmVlbi53aWR0aH18JHt0aGlzLnNjcmVlbi5oZWlnaHR9fCR7dGhpcy5zY3JlZW4uY29sb3JEZXB0aH1gLFxuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0b3IuamF2YUVuYWJsZWQoKSxcbiAgICAgICAgICAgICdzZW5kQmVhY29uJyBpbiB0aGlzLm5hdmlnYXRvclxuICAgICAgICBdO1xuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgSUxvZ2dlckNvbmZpZyxcbiAgICBMb2dMZXZlbCxcbiAgICBDbGllbnRNdXRlTGV2ZWwsXG4gICAgTG9nVGhlbWUsXG4gICAgR3JvdXBCZWhhdmlvcixcbiAgICBJTG9nZ2VyLFxuICAgIElMb2dHcm91cCxcbiAgICBHaWdHbG9iYWwsXG4gICAgSUZvcm1hdHRlZExvZ0FyZ3MsXG4gICAgSUdyb3VwQ2xvc2VyLFxuICAgIElMb2dGdW5jLFxufSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9nZ2VyL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgZ2V0UmVxUGFyYW1WYWx1ZSwgZ2V0UGFyYW1WYWx1ZSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9zdHJpbmdQYXJhbXMnO1xuXG5leHBvcnQgY29uc3QgZ2lnRXJyb3JSZXBvcnQgPSAnZ2lnRXJyb3JSZXBvcnQnO1xuY29uc3QgZGVmYXVsdExvZ2dlckNvbmZpZzogSUxvZ2dlckNvbmZpZyA9IHtcbiAgICBsb2dMZXZlbDogTG9nTGV2ZWwuZGlzYWJsZWQsXG4gICAgY2xpZW50TXV0ZUxldmVsOiBDbGllbnRNdXRlTGV2ZWwubm9uZSxcbiAgICBsb2dUaGVtZTogTG9nVGhlbWUuZGFyayxcbn07XG5jb25zdCB0aGVtZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW10gfSA9IHtcbiAgICBbTG9nVGhlbWUubm9uZV06IFsnJ10sXG4gICAgW0xvZ1RoZW1lLmRhcmtdOiBbXG4gICAgICAgICczOGY2ODknLFxuICAgICAgICAnMDA5RkQ0JyxcbiAgICAgICAgJ2IzODFiMycsXG4gICAgICAgICc3MWI2ZWYnLFxuICAgICAgICAnNjRjMTYyJyxcbiAgICAgICAgJzk3N2JkOCcsXG4gICAgICAgICdkMTY4YTQnLFxuICAgICAgICAnNGM3MWQyJyxcbiAgICAgICAgJzg0YjQ2NicsXG4gICAgICAgICc3ZDYzOGEnLFxuICAgICAgICAnNzk5ZmI3JyxcbiAgICAgICAgJzhmZGY5OCcsXG4gICAgICAgICdkYzc3NjcnLFxuICAgICAgICAnMGE3MGY1JyxcbiAgICAgICAgJzM4YjE1OScsXG4gICAgICAgICdhZjcyMWInLFxuICAgICAgICAnYmZhZjZmJyxcbiAgICBdLFxuICAgIFtMb2dUaGVtZS5saWdodF06IFtcbiAgICAgICAgJzQwODA2QScsXG4gICAgICAgICcwMDM2MzYnLFxuICAgICAgICAnOUI1OUI2JyxcbiAgICAgICAgJ0RCMEE1QicsXG4gICAgICAgICc3OTI4QTEnLFxuICAgICAgICAnNTIyMDMyJyxcbiAgICAgICAgJzAwMDBFMCcsXG4gICAgICAgICcwMDIwMkEnLFxuICAgICAgICAnMDAwMDM2JyxcbiAgICAgICAgJzAwNTU1NScsXG4gICAgICAgICcxRDc4MUQnLFxuICAgICAgICAnNEY1QTY1JyxcbiAgICAgICAgJzc2NUFCMCcsXG4gICAgICAgICcwMDAwMDAnLFxuICAgICAgICAnM0MxMzYyJyxcbiAgICAgICAgJzAwMDA2MCcsXG4gICAgICAgICc1OTFENzcnLFxuICAgIF0sXG59O1xuY29uc3Qgc2VsZkxvZ3NDc3M6IHN0cmluZyA9ICdjb2xvcjogI2IwYjBiMGIwOyc7XG5jb25zdCBub0NzcyA9ICcnO1xuY29uc3Qgc2V2ZXJpdHlUaHJlc2hvbGQ6IExvZ0xldmVsID0gTG9nTGV2ZWwud2FybjtcbmNvbnN0IGRlZmF1bHRHcm91cEJlaGF2aW9yOiBHcm91cEJlaGF2aW9yID0gR3JvdXBCZWhhdmlvci5jb2xsYXBzZWQ7XG5jb25zdCBub29wTG9nZ2VyRm4gPSAobWVzc2FnZTogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pID0+IHt9O1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VMb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyIHtcbiAgICBwcml2YXRlIF9jb25maWc6IElMb2dnZXJDb25maWc7XG4gICAgcHJpdmF0ZSBfZ3JvdXBzU3RhY2s6IElMb2dHcm91cFtdID0gW107XG4gICAgcHJpdmF0ZSBfY3VyckNvbG9ySWR4OiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY29uc29sZTogQ29uc29sZTtcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29uZmlnS2V5OiBzdHJpbmcgPSAnZ2lnX2xvZ2dlckNvbmZpZyc7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJvdGVjdGVkIF9nbG9iYWw6IEdpZ0dsb2JhbCkge1xuICAgICAgICB0aGlzLl9jb25zb2xlID0gdGhpcy5fZ2xvYmFsLmNvbnNvbGU7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5vdmVycmlkZUNsaWVudExvZ3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhYnN0cmFjdCByZXBvcnQobWVzc2FnZTogc3RyaW5nLCBkZXRhaWxzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSwgaW5jbHVkZVN0YWNrPzogYm9vbGVhbik7XG5cbiAgICBwdWJsaWMgZ2V0Q29uZmlnKCk6IElMb2dnZXJDb25maWcge1xuICAgICAgICBpZiAoIXRoaXMuX2NvbmZpZykge1xuICAgICAgICAgICAgdGhpcy5fY29uZmlnID1cbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRMb2dnZXJDb25maWdGcm9tSGFzaCgpIHx8IC8vIGlubmVyIGZyYW1lcyByZWFkcyBjb25maWcgZnJvbSBoYXNoXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkTG9nZ2VyQ29uZmlnRnJvbUNvb2tpZSgpIHx8IC8vIHRvcCBmcmFtZXMgcmVhZHMgY29uZmlnIGZyb20gY29va2llXG4gICAgICAgICAgICAgICAgZGVmYXVsdExvZ2dlckNvbmZpZztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb25maWcoKS5sb2dMZXZlbCA+IExvZ0xldmVsLmRpc2FibGVkO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IGxvZ0xldmVsKCk6IExvZ0xldmVsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29uZmlnKCkubG9nTGV2ZWw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgcGFsZXR0ZSgpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiB0aGVtZXNbdGhpcy5nZXRDb25maWcoKS5sb2dUaGVtZV07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXROZXh0Q29sb3IoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q29uZmlnKCkubG9nVGhlbWUgPT09IExvZ1RoZW1lLm5vbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY3VyckNvbG9ySWR4ID49IHRoaXMucGFsZXR0ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJDb2xvcklkeCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAjJHt0aGlzLnBhbGV0dGVbdGhpcy5fY3VyckNvbG9ySWR4KytdfWA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgY3VycmVudEdyb3VwKCk6IElMb2dHcm91cCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ncm91cHNTdGFja1t0aGlzLl9ncm91cHNTdGFjay5sZW5ndGggLSAxXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlYWRMb2dnZXJDb25maWdGcm9tSGFzaCgpOiBJTG9nZ2VyQ29uZmlnIHtcbiAgICAgICAgbGV0IHJlczogSUxvZ2dlckNvbmZpZyA9IG51bGw7XG4gICAgICAgIGNvbnN0IGxvZ2dlckNvbmZpZ1N0ciA9IGdldFJlcVBhcmFtVmFsdWUobG9jYXRpb24uaGFzaCwgdGhpcy5jb25maWdLZXkpO1xuICAgICAgICBpZiAobG9nZ2VyQ29uZmlnU3RyKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlcyA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KGxvZ2dlckNvbmZpZ1N0cikpIGFzIElMb2dnZXJDb25maWc7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgW0dpZ3lhXTogZXhjZXB0aW9uIHdoaWxlIHRyeWluZyB0byBwYXJzZSBsb2dnZXIgY29uZmlnIGZyb20gaGFzaGAsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWFkTG9nZ2VyQ29uZmlnRnJvbUNvb2tpZSgpOiBJTG9nZ2VyQ29uZmlnIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCByZXM6IElMb2dnZXJDb25maWcgPSBudWxsO1xuICAgICAgICAgICAgY29uc3QgY29va2llID0gZ2V0UGFyYW1WYWx1ZShkb2N1bWVudC5jb29raWUsIHRoaXMuY29uZmlnS2V5LCAnOycpO1xuICAgICAgICAgICAgaWYgKGNvb2tpZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IEpTT04ucGFyc2UoY29va2llKSBhcyBJTG9nZ2VyQ29uZmlnO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgW0dpZ3lhXTogZXhjZXB0aW9uIHdoaWxlIHRyeWluZyB0byBwYXJzZSBsb2dnZXIgY29uZmlnIGZyb20gY29va2llYCwgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gaU9TIDEwIHdlYnZpZXcgdGhyb3dzIGluIHNvbWUgc2NlbmFyaW9zXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRMb2dnZXJDb25maWdDb29raWUobG9nZ2VyQ29uZmlnOiBJTG9nZ2VyQ29uZmlnKSB7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke3RoaXMuY29uZmlnS2V5fT0ke0pTT04uc3RyaW5naWZ5KGxvZ2dlckNvbmZpZyl9YDtcbiAgICB9XG5cbiAgICBwcml2YXRlIG92ZXJyaWRlQ2xpZW50TG9ncygpIHtcbiAgICAgICAgbGV0IFByb3h5ID0gdGhpcy5fZ2xvYmFsWydQcm94eSddO1xuXG4gICAgICAgIGlmICghUHJveHkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAodGhpcy5nZXRDb25maWcoKS5jbGllbnRNdXRlTGV2ZWwpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIGNhc2UgQ2xpZW50TXV0ZUxldmVsLm5vbmU6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIHJlcGxhY2UgbmF0aXZlIGNvbnNvbGUgd2l0aCBhIGR1bW15XG4gICAgICAgICAgICBjYXNlIENsaWVudE11dGVMZXZlbC5hbGw6XG4gICAgICAgICAgICAgICAgdGhpcy5fZ2xvYmFsLmNvbnNvbGUgPSBuZXcgUHJveHkodGhpcy5fZ2xvYmFsLmNvbnNvbGUsIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiBub29wTG9nZ2VyRm4sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIG92ZXJyaWRlIHRoZSBncm91cCBhcGkgYW5kIG91dHB1dCBhIHByZWZpeGVkIGNsaWVudCBsb2dcbiAgICAgICAgICAgIGNhc2UgQ2xpZW50TXV0ZUxldmVsLm5vcm1hbDpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5fZ2xvYmFsLmNvbnNvbGUgPSBuZXcgUHJveHkodGhpcy5fZ2xvYmFsLmNvbnNvbGUsIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiAodGFyZ2V0OiBhbnksIHByb3BlcnR5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbJ2dyb3VwJywgJ2dyb3VwQ29sbGFwc2VkJywgJ2dyb3VwRW5kJ10uaW5kZXhPZihwcm9wZXJ0eSkgIT09IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoLi4uYXJncykgPT4gdGhpcy5fY29uc29sZS5sb2coYGNsaWVudCBoYXMgY2FsbGVkIGNvbnNvbGUuJHtwcm9wZXJ0eX1gLCAuLi5hcmdzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGFyZ2V0W3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Rm9ybWF0dGVkTG9nQXJncyh0ZXh0OiBzdHJpbmcgPSAnJywgbG9nR3JvdXA6IElMb2dHcm91cCA9IHRoaXMuY3VycmVudEdyb3VwKTogSUZvcm1hdHRlZExvZ0FyZ3Mge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGV4dDogbG9nR3JvdXAgPyBgJWPilogke3RleHR9YCA6IGAlYyR7dGV4dH1gLFxuICAgICAgICAgICAgY3NzOiBsb2dHcm91cCA/IGBjb2xvcjogJHtsb2dHcm91cC5jb2xvcn07YCA6ICcnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzdG9yZUhhbmdpbmdHcm91cHMoaGFuZ2luZ0dyb3VwczogSUxvZ0dyb3VwW10pIHtcbiAgICAgICAgLy8gcmVzdG9yZSBncm91cHMgc3RhY2sgYWZ0ZXIgYSBwYXJlbnQgZ3JvdXAgaGFzIGVuZGVkXG4gICAgICAgIHdoaWxlIChoYW5naW5nR3JvdXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gcmVzdG9yZSB0aGUgZ3JvdXBzIHN0YWNrXG4gICAgICAgICAgICBjb25zdCBncm91cCA9IGhhbmdpbmdHcm91cHMuc2hpZnQoKTtcbiAgICAgICAgICAgIHRoaXMuX2dyb3Vwc1N0YWNrLnB1c2goZ3JvdXApO1xuXG4gICAgICAgICAgICAvLyBpbmRpY2F0ZSBncm91cCBoYXMgYmVlbiByZXN0b3JlZFxuICAgICAgICAgICAgY29uc3QgbG9nQXJncyA9IHRoaXMuZ2V0Rm9ybWF0dGVkTG9nQXJncyhgICVjW1JFU1RPUkVEIC0gJHtncm91cC5ncm91cFRpdGxlfV1gKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnNvbGUuZ3JvdXBDb2xsYXBzZWQobG9nQXJncy50ZXh0LCBsb2dBcmdzLmNzcywgc2VsZkxvZ3NDc3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbmRHcm91cChncm91cDogSUxvZ0dyb3VwKSB7XG4gICAgICAgIGNvbnN0IGxvZ0FyZ3MgPSB0aGlzLmdldEZvcm1hdHRlZExvZ0FyZ3MoYCBbRU5EIC0gJHtncm91cC5ncm91cFRpdGxlfV1gLCBncm91cCk7XG4gICAgICAgIHRoaXMuX2NvbnNvbGUubG9nKGxvZ0FyZ3MudGV4dCwgbG9nQXJncy5jc3MpO1xuICAgICAgICB0aGlzLl9jb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2coc2V2ZXJpdHk6IExvZ0xldmVsKTogSUxvZ0Z1bmMge1xuICAgICAgICAvLyBsb2cgaWYgb25lIG9mIHRoZSBmb2xsb3dpbmdcbiAgICAgICAgLy8gWzFdIGxvZ2dpbmcgaXMgZW5hYmxlZCBhbmQgdGhlIGxvZydzIHNldmVyaXR5IGlzIGdyZWF0ZXIgb3IgZXF1YWwgdG8gdGhlIGNvbmZpZ3VyZWQgbG9nTGV2ZWxcbiAgICAgICAgLy8gWzJdIHNldmVyaXR5IGlzIGdyZWF0ZXIgdGhhbiB0aGUgdGhyZXNob2xkIGJ1dCB0aGUgY29uZmlndXJlZCBsb2dMZXZlbCBpcyBub3QgZ3JlYXRlciB0aGFuIHRoZSB0aHJlc2hvbGRcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHRoaXMuaXNFbmFibGVkICYmIHNldmVyaXR5ID49IHRoaXMubG9nTGV2ZWwpIHx8IC8vIGxvZ1xuICAgICAgICAgICAgKHNldmVyaXR5ID49IHNldmVyaXR5VGhyZXNob2xkICYmIHRoaXMubG9nTGV2ZWwgPCBzZXZlcml0eVRocmVzaG9sZClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBub3JtYWxpemUgbG9nIGxldmVsXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbExvZ0xldmVsID0gTG9nTGV2ZWxbc2V2ZXJpdHldO1xuICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZExvZ0xldmVsID1cbiAgICAgICAgICAgICAgICBzZXZlcml0eSA9PT0gTG9nTGV2ZWwuZGVidWdcbiAgICAgICAgICAgICAgICAgICAgPyBMb2dMZXZlbFtMb2dMZXZlbC5pbmZvXSAvLyB1c2luZyBjb25zb2xlLmluZm8gZm9yIGRlYnVnIGxldmVsXG4gICAgICAgICAgICAgICAgICAgIDogb3JpZ2luYWxMb2dMZXZlbDtcblxuICAgICAgICAgICAgLy8gZ2V0IGZvcm1hdHRlZCBhcmdzIGFuZCByZXR1cm4gdGhlIGJvdW5kIGxvZyBmdW5jdGlvblxuICAgICAgICAgICAgY29uc3QgbG9nQXJncyA9IHRoaXMuZ2V0Rm9ybWF0dGVkTG9nQXJncyhgICVjWyR7b3JpZ2luYWxMb2dMZXZlbH1dYCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29uc29sZVtub3JtYWxpemVkTG9nTGV2ZWxdLmJpbmQodGhpcy5fY29uc29sZSwgbG9nQXJncy50ZXh0LCBsb2dBcmdzLmNzcywgc2V2ZXJpdHkgPD0gTG9nTGV2ZWwuaW5mbyA/IHNlbGZMb2dzQ3NzIDogbm9Dc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vb3BMb2dnZXJGbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEpzb25Gcm9tRXJyb3IoZXJyOiBFcnJvcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogZXJyLm5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZSxcbiAgICAgICAgICAgIHN0YWNrOiBlcnIuc3RhY2ssXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlcnJvclBhcnNlcihkZXRhaWxzOiB7W2tleTogc3RyaW5nXTogYW55fSkge1xuICAgICAgICBjb25zdCBmb3JtYXR0ZXIgPSAoaywgdikgPT4gdiBpbnN0YW5jZW9mIEVycm9yID8gdGhpcy5nZXRKc29uRnJvbUVycm9yKHYpIDogdjtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGV0YWlscywgZm9ybWF0dGVyKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkZWJ1ZygpOiBJTG9nRnVuYyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhMb2dMZXZlbC5kZWJ1Zyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpbmZvKCk6IElMb2dGdW5jIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nKExvZ0xldmVsLmluZm8pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgd2FybigpOiBJTG9nRnVuYyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhMb2dMZXZlbC53YXJuKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGVycm9yKCk6IElMb2dGdW5jIHtcbiAgICAgICAgcmV0dXJuIChtZXNzYWdlOiBhbnksIGRldGFpbHM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KTogdm9pZCA9PiB7XG4gICAgICAgICAgICBpZiAoZGV0YWlscyAmJiB0eXBlb2YgZGV0YWlscyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzID0gdGhpcy5lcnJvclBhcnNlcihkZXRhaWxzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sb2coTG9nTGV2ZWwuZXJyb3IpLmFwcGx5KHRoaXMsIFttZXNzYWdlXS5jb25jYXQoW2RldGFpbHNdKSk7XG4gICAgICAgICAgICB0aGlzLnJlcG9ydChtZXNzYWdlLCBkZXRhaWxzKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ3JvdXAoZ3JvdXBUaXRsZTogc3RyaW5nLCBjb2xsYXBzZWQ6IGJvb2xlYW4gPSBkZWZhdWx0R3JvdXBCZWhhdmlvciA9PT0gR3JvdXBCZWhhdmlvci5jb2xsYXBzZWQpOiBJR3JvdXBDbG9zZXIge1xuICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5nZXROZXh0Q29sb3IoKTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwTG9nID0gKC4uLmFyZ3MpID0+IChjb2xsYXBzZWQgPyB0aGlzLl9jb25zb2xlLmdyb3VwQ29sbGFwc2VkKC4uLmFyZ3MpIDogdGhpcy5fY29uc29sZS5ncm91cCguLi5hcmdzKSk7XG4gICAgICAgICAgICB0aGlzLl9ncm91cHNTdGFjay5wdXNoKHsgZ3JvdXBUaXRsZSwgY29sb3IgfSk7XG4gICAgICAgICAgICBjb25zdCBsb2dBcmdzID0gdGhpcy5nZXRGb3JtYXR0ZWRMb2dBcmdzKGAgW1NUQVJUIC0gJHtncm91cFRpdGxlfV1gKTtcbiAgICAgICAgICAgIGdyb3VwTG9nKGxvZ0FyZ3MudGV4dCwgbG9nQXJncy5jc3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbmQ6ICgpID0+IHRoaXMuZ3JvdXBFbmQoZ3JvdXBUaXRsZSksXG4gICAgICAgICAgICBlbmRXaGVuOiAoZG9uZTogUHJvbWlzZTxhbnk+IHwgKCgpID0+IHZvaWQgfCBQcm9taXNlPGFueT4pKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkb25lID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSA9IGRvbmUoKSBhcyBQcm9taXNlPGFueT4gfCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRvbmUgJiYgZG9uZS50aGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUudGhlbigoKSA9PiB0aGlzLmdyb3VwRW5kKGdyb3VwVGl0bGUpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBzeW5jXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXBFbmQoZ3JvdXBUaXRsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ3JvdXBFbmQoZ3JvdXBUaXRsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCkge1xuICAgICAgICAgICAgY29uc3QgaGFuZ2luZ0dyb3VwczogSUxvZ0dyb3VwW10gPSBbXTtcbiAgICAgICAgICAgIGxldCBjdXJyR3JvdXAgPSB0aGlzLl9ncm91cHNTdGFjay5wb3AoKTsgLy8gZ2V0IHRoZSBjdXJyZW50IGFjdGl2ZSBncm91cFxuXG4gICAgICAgICAgICAvLyB3aGlsZSB0aGUgY3VycmVudCBncm91cCBpcyBub3QgdGhlIHNhbWUgYXMgdGhlIG9uZSB0aGF0IHdlIHdhbnQgdG8gZW5kIGFuZCB3ZSBoYXZlIG90aGVyIGdyb3VwcyBpbiB0aGUgc3RhY2tcbiAgICAgICAgICAgIHdoaWxlIChjdXJyR3JvdXAuZ3JvdXBUaXRsZSAhPT0gZ3JvdXBUaXRsZSAmJiB0aGlzLl9ncm91cHNTdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBoYW5naW5nR3JvdXBzLnVuc2hpZnQoY3Vyckdyb3VwKTsgLy8gWzFdIHB1c2ggaXQgdGhlIGN1cnJlbnQgZ3JvdXAgaW50byB0aGUgdGVtcCAnaGFuZ2luZyBncm91cHMnIHN0YWNrXG4gICAgICAgICAgICAgICAgY3Vyckdyb3VwID0gdGhpcy5fZ3JvdXBzU3RhY2sucG9wKCk7IC8vIFsyXSBnZXQgdGhlIG5leHQgZ3JvdXAgaW4gc3RhY2tcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25zb2xlLmdyb3VwRW5kKCk7IC8vIFszXSBncm91cEVuZCBmb3IgZWFjaCBncm91cCB0aGF0IGlzIG5vdCB0aGUgY3VycmVudCBncm91cFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBlbmQgdGhlIGdyb3VwXG4gICAgICAgICAgICB0aGlzLmVuZEdyb3VwKGN1cnJHcm91cCk7XG5cbiAgICAgICAgICAgIC8vIHJlc3VtZSBjaGlsZCBncm91cHNcbiAgICAgICAgICAgIGlmIChoYW5naW5nR3JvdXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdG9yZUhhbmdpbmdHcm91cHMoaGFuZ2luZ0dyb3Vwcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZW5hYmxlKGxvZ0xldmVsID0gTG9nTGV2ZWwuaW5mbywgY2xpZW50TXV0ZUxldmVsID0gQ2xpZW50TXV0ZUxldmVsLm5vcm1hbCwgbG9nVGhlbWUgPSBMb2dUaGVtZS5kYXJrKSB7XG4gICAgICAgIHRoaXMuc2V0TG9nZ2VyQ29uZmlnQ29va2llKHsgbG9nTGV2ZWwsIGNsaWVudE11dGVMZXZlbCwgbG9nVGhlbWUgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRpc2FibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0TG9nZ2VyQ29uZmlnQ29va2llKHtcbiAgICAgICAgICAgIGxvZ0xldmVsOiBMb2dMZXZlbC5kaXNhYmxlZCxcbiAgICAgICAgICAgIGNsaWVudE11dGVMZXZlbDogZGVmYXVsdExvZ2dlckNvbmZpZy5jbGllbnRNdXRlTGV2ZWwsXG4gICAgICAgICAgICBsb2dUaGVtZTogZGVmYXVsdExvZ2dlckNvbmZpZy5sb2dUaGVtZSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZUxvZ2dlciwgZ2lnRXJyb3JSZXBvcnQgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9nZ2VyL2Jhc2VMb2dnZXInO1xuaW1wb3J0IHsgR2lnR2xvYmFsIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvZ2dlci9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGdldFJlcVBhcmFtVmFsdWUgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvc3RyaW5nUGFyYW1zJztcblxuZXhwb3J0IGNsYXNzIElGcmFtZUxvZ2dlciBleHRlbmRzIEJhc2VMb2dnZXIge1xuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfZ2xvYmFsOiBHaWdHbG9iYWwgPSB3aW5kb3cpIHtcbiAgICAgICAgc3VwZXIoX2dsb2JhbCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlcG9ydChtZXNzYWdlOiBzdHJpbmcsIGRldGFpbHM6IHsgW2tleTogc3RyaW5nXTogYW55IH0sIGluY2x1ZGVTdGFjazogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgLy8gc2VuZCB0aGUgcmVwb3J0IGZyb20gdGhlIHRvcCBmcmFtZVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSB0b3AgZnJhbWUgb3JpZ2luXG4gICAgICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgY29uc3QgZG9tYWluID0gZ2V0UmVxUGFyYW1WYWx1ZShsb2NhdGlvbi5oYXNoLCAnb3JpZ2luJykgfHwgZ2V0UmVxUGFyYW1WYWx1ZShsb2NhdGlvbi5oYXNoLCAnZCcpO1xuICAgICAgICAgICAgaWYoIWRvbWFpbikgcmV0dXJuO1xuICAgICAgICAgICAgYS5ocmVmID0gZG9tYWluO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0T3JpZ2luID0gYCR7YS5wcm90b2NvbH0vLyR7YS5ob3N0bmFtZX0ke2EucG9ydCA/IGA6JHthLnBvcnR9YCA6ICcnfWA7XG5cbiAgICAgICAgICAgIC8vIHBvc3QgbWVzc2FnZVxuICAgICAgICAgICAgdGhpcy5fZ2xvYmFsLnRvcC5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7IHR5cGU6IGdpZ0Vycm9yUmVwb3J0LCBtZXNzYWdlLCBkZXRhaWxzLCBpbmNsdWRlU3RhY2sgfSksIHRhcmdldE9yaWdpbik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdpZ0dsb2JhbCB7XG4gICAgY29uc29sZTogQ29uc29sZTtcbiAgICBQcm94eT86IGFueTtcbiAgICBhZGRFdmVudExpc3RlbmVyPzogYW55O1xuICAgIHRvcD86IGFueTtcbn1cbmV4cG9ydCBlbnVtIExvZ0xldmVsIHtcbiAgICBkaXNhYmxlZCA9IDAsXG4gICAgZGVidWcsXG4gICAgaW5mbyxcbiAgICB3YXJuLFxuICAgIGVycm9yLFxufVxuZXhwb3J0IGNvbnN0IGVudW0gQ2xpZW50TXV0ZUxldmVsIHtcbiAgICBub25lID0gMCxcbiAgICBub3JtYWwsXG4gICAgYWxsLFxufVxuZXhwb3J0IGNvbnN0IGVudW0gTG9nVGhlbWUge1xuICAgIG5vbmUgPSAwLFxuICAgIGRhcmssXG4gICAgbGlnaHQsXG59XG5leHBvcnQgaW50ZXJmYWNlIElMb2dnZXJDb25maWcge1xuICAgIGxvZ0xldmVsOiBMb2dMZXZlbDtcbiAgICBjbGllbnRNdXRlTGV2ZWw6IENsaWVudE11dGVMZXZlbDtcbiAgICBsb2dUaGVtZTogTG9nVGhlbWU7XG59XG5leHBvcnQgaW50ZXJmYWNlIElMb2dHcm91cCB7XG4gICAgZ3JvdXBUaXRsZTogc3RyaW5nO1xuICAgIGNvbG9yOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIElGb3JtYXR0ZWRMb2dBcmdzIHtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgY3NzOiBzdHJpbmc7XG59XG5leHBvcnQgY29uc3QgZW51bSBHcm91cEJlaGF2aW9yIHtcbiAgICBleHBhbmRlZCA9IDAsXG4gICAgY29sbGFwc2VkLFxufVxuZXhwb3J0IGludGVyZmFjZSBJR3JvdXBDbG9zZXIge1xuICAgIGVuZCgpOiB2b2lkO1xuICAgIGVuZFdoZW4oZG9uZVdoZW46IFByb21pc2U8YW55PiB8ICgoKSA9PiB2b2lkIHwgUHJvbWlzZTxhbnk+KSk6IHZvaWQ7XG59XG5leHBvcnQgdHlwZSBJTG9nRnVuYyA9IChtZXNzYWdlOiBzdHJpbmcsIGRldGFpbHM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSA9PiB2b2lkO1xuZXhwb3J0IGludGVyZmFjZSBJTG9nZ2VyIHtcbiAgICBkaXNhYmxlKCk6IHZvaWQ7XG4gICAgZW5hYmxlKGxvZ0xldmVsPzogTG9nTGV2ZWwsIGNsaWVudE11dGVMZXZlbD86IENsaWVudE11dGVMZXZlbCwgbG9nVGhlbWU/OiBMb2dUaGVtZSk6IHZvaWQ7XG4gICAgZ3JvdXAoZ3JvdXBUaXRsZTogc3RyaW5nLCBjb2xsYXBzZWQ/OiBib29sZWFuKTogSUdyb3VwQ2xvc2VyO1xuICAgIGdyb3VwRW5kKGdyb3VwVGl0bGU6IHN0cmluZyk6IHZvaWQ7XG4gICAgZGVidWcobWVzc2FnZTogc3RyaW5nLCBkZXRhaWxzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IHZvaWQ7XG4gICAgaW5mbyhtZXNzYWdlOiBzdHJpbmcsIGRldGFpbHM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KTogdm9pZDtcbiAgICB3YXJuKG1lc3NhZ2U6IHN0cmluZywgZGV0YWlscz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiB2b2lkO1xuICAgIGVycm9yKG1lc3NhZ2U6IHN0cmluZywgZGV0YWlscz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiB2b2lkO1xuICAgIHJlcG9ydChtZXNzYWdlOiBzdHJpbmcsIGRldGFpbHM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9LCBpbmNsdWRlU3RhY2s/OiBib29sZWFuKTogdm9pZDtcbiAgICBnZXRDb25maWcoKTogSUxvZ2dlckNvbmZpZztcbiAgICBpc0VuYWJsZWQ6IGJvb2xlYW47XG4gICAgY29uZmlnS2V5OiBzdHJpbmc7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbG9nZ2VySnNvbnAoZW5kcG9pbnQ6IHN0cmluZywgcGFyYW1zOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuc3JjID0gYCR7ZW5kcG9pbnR9PyR7cGFyYW1zfWA7XG4gICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcblxuICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0ucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xufVxuIiwiaW1wb3J0IHsgUGFyZW50TG9nZ2VyIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvZ2dlci9wYXJlbnRMb2dnZXInO1xuaW1wb3J0IHsgSUZyYW1lTG9nZ2VyIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvZ2dlci9pRnJhbWVMb2dnZXInO1xuXG5pZighZ2lneWEubG9nZ2VyKSB7XG4gICAgT2JqZWN0LmFzc2lnbihnaWd5YSwge2xvZ2dlcjogIHdpbmRvdyA9PT0gd2luZG93LnRvcCA/IG5ldyBQYXJlbnRMb2dnZXIoKSA6IG5ldyBJRnJhbWVMb2dnZXIoKX0pO1xufVxuIiwiaW1wb3J0IHsgQmFzZUxvZ2dlciwgZ2lnRXJyb3JSZXBvcnQgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9nZ2VyL2Jhc2VMb2dnZXInO1xuaW1wb3J0IHsgR2lnR2xvYmFsIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvZ2dlci9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGxvZ2dlckpzb25wIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvZ2dlci9sb2dnZXJKc29ucCc7XG5pbXBvcnQgeyBnZXRHaWd5YVNjcmlwdEVsZW1lbnQgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvZ2lneWFTY3JpcHRFbCc7XG5pbXBvcnQgKiBhcyBVUkxVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvVVJMJztcbmltcG9ydCB7IGxvY2FsSW5mbyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2NhbEluZm8nO1xuaW1wb3J0IHtVcml9IGZyb20gXCIuLi9VdGlscy9VcmlcIjtcblxuZXhwb3J0IGNsYXNzIFBhcmVudExvZ2dlciBleHRlbmRzIEJhc2VMb2dnZXIge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lzRXJyb3JSZXBvcnRlcjogYm9vbGVhbjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ndWlkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIF9nbG9iYWw6IEdpZ0dsb2JhbCA9IHdpbmRvdyxcbiAgICAgICAgcHJpdmF0ZSBfZXJyb3JSZXBvcnRDb25maWc6IHsgZW5hYmxlZDogYm9vbGVhbjsgcHJvYmFiaWxpdHk6IG51bWJlciB9ID0gZ2lneWEuZXJyb3JSZXBvcnQsXG4gICAgICAgIHByaXZhdGUgX2NhbmFyeUNvbmZpZzogeyBpc0FjdGl2ZTogYm9vbGVhbiB9ID0gZ2lneWEuY2FuYXJ5LFxuICAgICAgICBwcml2YXRlIF9yYW5kb20gPSAoKSA9PiBNYXRoLnJhbmRvbSgpICogMTAwLFxuICAgICAgICBwcml2YXRlIF9qc29ucCA9IGxvZ2dlckpzb25wLFxuICAgICkge1xuICAgICAgICBzdXBlcihfZ2xvYmFsKTtcblxuICAgICAgICBjb25zdCBlcnJvclJlcG9ydEVuYWJsZWQgPSB0aGlzLl9lcnJvclJlcG9ydENvbmZpZyAmJiB0aGlzLl9lcnJvclJlcG9ydENvbmZpZy5lbmFibGVkO1xuICAgICAgICBjb25zdCBydW5uaW5nQXNDYW5hcnkgPSB0aGlzLl9jYW5hcnlDb25maWcgJiYgdGhpcy5fY2FuYXJ5Q29uZmlnLmlzQWN0aXZlO1xuICAgICAgICBjb25zdCBlbnJvbGxlZFRvUmVwb3J0RXJyb3JzID0gdGhpcy5lbnJvbGxFcnJvclJlcG9ydGluZygpO1xuXG4gICAgICAgIGlmIChlcnJvclJlcG9ydEVuYWJsZWQgJiYgKHJ1bm5pbmdBc0NhbmFyeSB8fCBlbnJvbGxlZFRvUmVwb3J0RXJyb3JzKSkge1xuICAgICAgICAgICAgdGhpcy5faXNFcnJvclJlcG9ydGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0dXBNZXNzYWdlTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX2d1aWQgPSB0aGlzLmdlbmVyYXRlR1VJRCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGVucm9sbEVycm9yUmVwb3J0aW5nKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX2Vycm9yUmVwb3J0Q29uZmlnICYmIHRoaXMuX2Vycm9yUmVwb3J0Q29uZmlnLnByb2JhYmlsaXR5KSA+PSB0aGlzLl9yYW5kb20oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldHVwTWVzc2FnZUxpc3RlbmVyKCkge1xuICAgICAgICBjb25zdCBlcnJvclJlcG9ydE1lc3NhZ2VMaXN0ZW5lciA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRjID0gZ2lneWEuZGF0YUNlbnRlcjtcbiAgICAgICAgICAgIGNvbnN0IGdpZ3lhRG9tYWluID0gZ2lneWEuZGVmYXVsdEFwaURvbWFpbi5yZXBsYWNlKC9cXC4vZywgJy4nKTsgLy8gcmVwbGFjZSBhbGwgJy4nIHdpdGggJ1xcLidcbiAgICAgICAgICAgIGNvbnN0IGFsbG93ZWRPcmlnaW5SZWdleCA9IG5ldyBSZWdFeHAoYGNkbnM/XFwuJHtkY31cXC4ke2dpZ3lhRG9tYWlufSRgKTtcblxuICAgICAgICAgICAgaWYgKCFldmVudC5vcmlnaW4ubWF0Y2goYWxsb3dlZE9yaWdpblJlZ2V4KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSBnaWdFcnJvclJlcG9ydCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcG9ydChkYXRhLm1lc3NhZ2UsIGRhdGEuZGV0YWlscywgZGF0YS5pbmNsdWRlU3RhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9IC8vIHVuZXhwZWN0ZWQgZXZlbnQuZGF0YVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX2dsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZXJyb3JSZXBvcnRNZXNzYWdlTGlzdGVuZXIsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEFwaUtleSgpIHtcbiAgICAgICAgbGV0IGFwaUtleSA9IGdpZ3lhWyd0aGlzU2NyaXB0J10gJiYgZ2lneWFbJ3RoaXNTY3JpcHQnXS5BUElLZXk7XG5cbiAgICAgICAgaWYgKCFhcGlLZXkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjcmlwdEVsZW1lbnQgPSBnZXRHaWd5YVNjcmlwdEVsZW1lbnQoKTtcbiAgICAgICAgICAgIGNvbnN0IFVSTFBhcmFtcyA9IFVSTFV0aWxzLmdldFBhcmFtc0Zyb21VUkwoc2NyaXB0RWxlbWVudCAmJiBzY3JpcHRFbGVtZW50LnNyYywgdHJ1ZSkgfHwge307XG4gICAgICAgICAgICBhcGlLZXkgPSBVUkxQYXJhbXNbJ2FwaWtleSddO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFwaUtleTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVJlcG9ydFBhcmFtcyhtZXNzYWdlOiBzdHJpbmcsIGRldGFpbHM6IHN0cmluZyB8IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fSwgaW5jbHVkZVN0YWNrOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIGFwaUtleTogdGhpcy5nZXRBcGlLZXkoKSxcbiAgICAgICAgICAgIHN0YWNrOiBpbmNsdWRlU3RhY2sgPyBuZXcgRXJyb3IoKS5zdGFjayA6ICcnLFxuICAgICAgICAgICAgcGFnZTogbG9jYWxJbmZvICYmIGxvY2FsSW5mby5wYWdlRG9tYWluLFxuICAgICAgICAgICAgYnJvd3NlcjogbG9jYWxJbmZvICYmIGxvY2FsSW5mby5jdXJyZW50QnJvd3NlcixcbiAgICAgICAgICAgIGJ1aWxkVmVyc2lvbjogZ2lneWEuYnVpbGQudmVyc2lvbixcbiAgICAgICAgICAgIGJ1aWxkTnVtYmVyOiBnaWd5YS5idWlsZC5udW1iZXIsXG4gICAgICAgICAgICBmb3JtYXQ6ICdqc29uJyxcbiAgICAgICAgICAgIHNkazogJ3dlYicsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkZXRhaWxzID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBkZXRhaWxzID0ge21lc3NhZ2U6IGRldGFpbHN9O1xuICAgICAgICB9XG5cbiAgICAgICAgZGV0YWlsc1snZ3VpZCddID0gdGhpcy5fZ3VpZDtcbiAgICAgICAgcGFyYW1zWydkZXRhaWxzJ10gPSBKU09OLnN0cmluZ2lmeShkZXRhaWxzKTtcblxuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXBvcnQobWVzc2FnZTogc3RyaW5nLCBkZXRhaWxzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LCBpbmNsdWRlU3RhY2s6IGJvb2xlYW4gPSBmYWxzZSwgZm9yY2VSZXBvcnQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBpZiAoIShmb3JjZVJlcG9ydCB8fCB0aGlzLl9pc0Vycm9yUmVwb3J0ZXIpKSB7XG4gICAgICAgICAgICAvLyBkb24ndCBjb250aW51ZSBpZiB3ZSBkb24ndCBuZWVkIHRvIHJlcG9ydFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcG9ydFBhcmFtcyA9IHRoaXMuY3JlYXRlUmVwb3J0UGFyYW1zKG1lc3NhZ2UsIGRldGFpbHMsIGluY2x1ZGVTdGFjayk7XG4gICAgICAgICAgICBjb25zdCBzZGtFcnJvclJlcG9ydEVuZHBvaW50ID0gYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke3RoaXMuYXBpRG9tYWlufS9zZGsuZXJyb3JSZXBvcnRgO1xuICAgICAgICAgICAgVXJpLnBhcnNlKHNka0Vycm9yUmVwb3J0RW5kcG9pbnQpXG4gICAgICAgICAgICAgICAgLmFkZFRvU2VhcmNoKHJlcG9ydFBhcmFtcylcbiAgICAgICAgICAgICAgICAuZmV0Y2g8bnVsbD4oMCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZUdVSUQoKTogc3RyaW5nIHtcbiAgICAgICAgdHJ5IHsgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2NyZWF0ZS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdFxuICAgICAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oYykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBhcGlEb21haW4oKSB7XG4gICAgICAgIGlmIChnaWd5YS5wYXJ0bmVyU2V0dGluZ3M/LmN1c3RvbUFQSURvbWFpblByZWZpeCAmJiBsb2NhbEluZm8/LmJhc2VEb21haW4uZW5kc1dpdGgoZ2lneWEuXy5jb25maWcuaG9zdGVkUGFnZXNEb21haW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxJbmZvLmJhc2VEb21haW47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdpZ3lhLnBhcnRuZXJTZXR0aW5ncz8uY3VzdG9tQVBJRG9tYWluUHJlZml4ICYmIGxvY2FsSW5mby5iYXNlRG9tYWluICYmIGxvY2FsSW5mby5iYXNlRG9tYWluICE9PSBnaWd5YS5kZWZhdWx0QXBpRG9tYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7Z2lneWEucGFydG5lclNldHRpbmdzLmN1c3RvbUFQSURvbWFpblByZWZpeH0uJHtsb2NhbEluZm8uYmFzZURvbWFpbn1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGBhY2NvdW50cy4ke2dpZ3lhLmRhdGFDZW50ZXJ9LiR7Z2lneWEuZGVmYXVsdEFwaURvbWFpbn1gO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEZsYWdTZXJ2aWNlIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBmb3JjZVdlYlNka0Jvb3RzdHJhcCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdmb3JjZVdlYlNka0Jvb3RzdHJhcCcpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCB1c2VHaWd5YUpzQmFzZURvbWFpbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd1c2VHaWd5YUpzQmFzZURvbWFpbicpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGhpZGVTU09GcmFtZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdoaWRlU1NPRnJhbWUnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCB3Y2FnQ29udHJhc3RGaXgoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnd2NhZ0NvbnRyYXN0Rml4Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbmV3Rm9ybUxpbmtJbnN0YW5jZUVsZW1lbnQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnbmV3Rm9ybUxpbmtJbnN0YW5jZUVsZW1lbnQnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBzdG9wU2VuZGluZ1JlcG9ydHMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnc3RvcFNlbmRpbmdSZXBvcnRzJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc2V0R3JvdXBBcGlEb21haW5BZnRlckxvZ2luKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3NldEdyb3VwQXBpRG9tYWluQWZ0ZXJMb2dpbicpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHVzZUh0dHBTdGF0dXNDb2RlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3VzZUh0dHBTdGF0dXNDb2RlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgYWx3YXlzQ2hlY2tDb29raWVTYXZlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2Fsd2F5c0NoZWNrQ29va2llU2F2ZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGZpeFBob25lVEZBVHJhbnNsYXRpb25zKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2ZpeFBob25lVEZBVHJhbnNsYXRpb25zJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgbG9hZFNzb0ZyYW1lT25seU9uY2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnbG9hZFNzb0ZyYW1lT25seU9uY2UnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCB2ZXJpZnlMb2dpbk9ubHlPbmNlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3ZlcmlmeUxvZ2luT25seU9uY2UnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBzZW5kTGFuZ0ZvckVtYWlsT1RQKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3NlbmRMYW5nRm9yRW1haWxPVFAnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBzZXRQcm92aWRlckZyb21SZXNwb25zZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdzZXRQcm92aWRlckZyb21SZXNwb25zZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNldENvb2tpZVNhbWVTaXRlTGF4U2Vzc2lvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdzZXRDb29raWVTYW1lU2l0ZUxheFNlc3Npb24nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBzZXRDb29raWVTYW1lU2l0ZUxheFNvY2lhbCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdzZXRDb29raWVTYW1lU2l0ZUxheFNvY2lhbCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNldENvb2tpZVNhbWVTaXRlTGF4TG93UHJpb3JpdHkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnc2V0Q29va2llU2FtZVNpdGVMYXhMb3dQcmlvcml0eScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGZvcmNlRXJyb3JSZXBvcnQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnZm9yY2VFcnJvclJlcG9ydCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNraXBTYW1lU2NyZWVuQ2hlY2tPblN3aXRjaCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdza2lwU2FtZVNjcmVlbkNoZWNrT25Td2l0Y2gnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBnZXRPbmx5VmlzaWJsZUZpZWxkICgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdnZXRPbmx5VmlzaWJsZUZpZWxkJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdXBkYXRlQWNjb3VudEluZm9Bc3luYyAoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgndXBkYXRlQWNjb3VudEluZm9Bc3luYycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNhbml0aXplRXZhbHVhdGVkVmFsdWUgKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdzYW5pdGl6ZUV2YWx1YXRlZFZhbHVlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdXNlU2Vzc2lvblZlcmlmeSAoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgndXNlU2Vzc2lvblZlcmlmeScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHVzZUV4dGVuZGVkUGhvbmVOdW1iZXJSZWdleCAoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgndXNlRXh0ZW5kZWRQaG9uZU51bWJlclJlZ2V4Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgZ2VuZXJhdGVOZXdDb2RlV2NhZ0NvbXBsaWFuY2UgKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2dlbmVyYXRlTmV3Q29kZVdjYWdDb21wbGlhbmNlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgZW5mb3JjZUF1dGhGbG93UmVkaXJlY3RGb3JTb2NpYWwgKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2VuZm9yY2VBdXRoRmxvd1JlZGlyZWN0Rm9yU29jaWFsJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdXNlRGVjb2RlVVJJQ29tcG9uZW50KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3VzZURlY29kZVVSSUNvbXBvbmVudCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHVzZU9pZGNHZXRQYXJhbUhhc2hPbGRTdHlsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd1c2VPaWRjR2V0UGFyYW1IYXNoT2xkU3R5bGUnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCB1c2VWaWV3cG9ydFBvbGxlckFjdGlvbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd1c2VWaWV3cG9ydFBvbGxlckFjdGlvbicpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGlnbm9yZUludGVycnVwdGlvbnNJbk9pZGNQYXNzaXZlTG9naW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnaWdub3JlSW50ZXJydXB0aW9uc0luT2lkY1Bhc3NpdmVMb2dpbicpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IG92ZXJyaWRlQWxsQ2hpbGRDb250ZXh0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ292ZXJyaWRlQWxsQ2hpbGRDb250ZXh0Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgZGlzcGF0Y2hMb2dpbkV2ZW50V2hlbkhhbmRsZXJBZGRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdkaXNwYXRjaExvZ2luRXZlbnRXaGVuSGFuZGxlckFkZGVkJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAoZ2lneWEuXy5jb25maWc/LmZsYWdzICYmIGdpZ3lhLl8uY29uZmlnPy5mbGFnc1tuYW1lXSkgfHwgZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gRXZlcnkgZmxhZyB0aGF0IGlzIGFzc29jaWF0ZWQgd2l0aCBkYXRhIG1vZGlmaWNhdGlvbiByZWxhdGVkIHRvIHRoZSBhcGkgbGF5ZXJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBhcGlGbGFncygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBsb2NhbEluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvJztcbmltcG9ydCAqIGFzIHZpZXdwb3J0VXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3ZpZXdwb3J0JztcbmltcG9ydCAqIGFzIGZ1bmN0aW9uc1V0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9mdW5jdGlvbnMnO1xuXG5leHBvcnQgdmFyIF9wb3B1cENvbnRhaW5lcnMgPSBbXTtcbmV4cG9ydCB2YXIgX3BzZXVkb0NvbnRhaW5lcnMgPSBbXTtcbmxldCBfbmV4dFpJbmRleCA9IDk5OTk5OTk5OTtcbnZhciBiYWNrTGlzdGVuZXIgPSBudWxsO1xuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRaSW5kZXgoKSB7XG4gICAgX25leHRaSW5kZXgrKztcbiAgICByZXR1cm4gX25leHRaSW5kZXg7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0R2lneWFTY3JpcHRFbGVtZW50KGZpbGVOYW1lczogc3RyaW5nW10pOiBIVE1MU2NyaXB0RWxlbWVudCB7XG4gICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG4gICAgdmFyIHNjcmlwdEVsZW1lbnQ6IEhUTUxTY3JpcHRFbGVtZW50O1xuICAgIHZhciBnaWd5YUNkblJlZ2V4ID0gL1xcL1xcL2NkbihzKT9cXC4ocnUxXFwuKT9naWd5YS5jb20vO1xuICAgIGZvciAodmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHZhciBzY3JpcHQgPSBzY3JpcHRzW2ldO1xuICAgICAgICB2YXIgc3JjID0gc2NyaXB0LnNyYy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoc3JjICE9PSAnJykge1xuICAgICAgICAgICAgaWYgKGdpZ3lhQ2RuUmVnZXgudGVzdChzcmMpIHx8IHNyYy5pbmRleE9mKCc/YXBpa2V5PScpID4gLTEpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNGaWxlTmFtZUV4aXN0SW5TcmMgPSBmaWxlTmFtZXMubGVuZ3RoID09PSAwIHx8IGZpbGVOYW1lcy5zb21lKGZpbGVOYW1lID0+IHNyYy5pbmRleE9mKGZpbGVOYW1lKSA+IC0xKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNGaWxlTmFtZUV4aXN0SW5TcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0RWxlbWVudCA9IHNjcmlwdDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzY3JpcHRFbGVtZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoKGVsOiBIVE1MRWxlbWVudCwgZXZlbnROYW1lOiBzdHJpbmcpIHtcbiAgICB2YXIgZXZlbnQ7XG5cbiAgICB0cnkge1xuICAgICAgICBldmVudCA9IG5ldyBFdmVudChldmVudE5hbWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gSUUxMCBhbmQgYmVsb3cgc3VwcG9ydFxuICAgICAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgICBldmVudC5pbml0Q3VzdG9tRXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlLCB7fSk7XG4gICAgfVxuXG4gICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5leHBvcnQgZnVuY3Rpb24gYWRkQnV0dG9uU3VibWl0TGlzdGVuZXIoZWw6IEhUTUxFbGVtZW50LCBoYW5kbGVyOiBGdW5jdGlvbiwgZXZlbnQ6ICdjbGljaycgfCAndG91Y2hlbmQnID0gJ2NsaWNrJywgZGVidWdOYW1lPzogc3RyaW5nKSB7XG4gICAgLy8gSnVzdCBpbiBjYXNlIHRoZSBlbGVtZW50IGRvZXMgbm90IGV4aXN0LlxuICAgIGlmICghZWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsLnNldEF0dHJpYnV0ZSgncm9sZScsICdidXR0b24nKTtcbiAgICBpZiAoZWwuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpICE9ICctMScpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgfVxuICAgIGFkZEV2ZW50TGlzdGVuZXIoZWwsIGV2ZW50LCAoZTogTW91c2VFdmVudCkgPT4gaGFuZGxlcihlKSk7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcihlbCwgJ2tleWRvd24nLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICBpZiAoKGUud2hpY2ggfHwgZS5rZXlDb2RlKSA9PSAxMykge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaGFuZGxlcihlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGVsOiBhbnksIGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGlmICghZWwgfHwgIWhhbmRsZXIpIHJldHVybjtcblxuICAgIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRBY3RpdmF0aW9uSGFuZGxlcihlbDpIVE1MRWxlbWVudCwgaGFuZGxlcjpGdW5jdGlvbik6IHZvaWR7XG4gICAgaWYgKCFlbCB8fCAhaGFuZGxlcikgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihlbCwgJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5jb2RlID09PSAnU3BhY2UnIHx8IGV2ZW50LmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZWwsICdjbGljaycsIGhhbmRsZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihlbDogYW55LCBldmVudE5hbWU6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBpZiAoIWVsIHx8ICFoYW5kbGVyKSByZXR1cm47XG4gICAgaWYgKGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmRldGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlRGVmYXVsdEV2ZW50SGFuZGxpbmcoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5ldmVudCkge1xuICAgICAgICB3aW5kb3cuZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYWRkRGlhbG9nQmFja0xpc3RlbmVyKGhhbmRsZXI6IChlOiBFdmVudCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIF9yZW1vdmVEaWFsb2dCYWNrTGlzdGVuZXIoKTtcblxuICAgIC8vIFRoaXMgc2hvdWxkIGZpcmUgd2hlbiBiYWNrIGlzIGNsaWNrZWRcbiAgICBiYWNrTGlzdGVuZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChlICYmIGUubmV3VVJMICYmIGUubmV3VVJMLmluZGV4T2YoJ3xnaWd5YU1vYmlsZURpYWxvZycpID09IC0xKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGUpO1xuICAgICAgICAgICAgX3JlbW92ZURpYWxvZ0JhY2tMaXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGhhc2ggY291bGQgY2hhbmdlIHJpZ2h0IGFmdGVyIHRoZSBjYWxsIGlmIGl0IHdhcyBpbml0aWF0ZWQgZnJvbSBhIGxpbmsgdGhhdCBkaWRuJ3QgcmV0dXJuIGZhbHNlXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCd8Z2lneWFNb2JpbGVEaWFsb2cnKSA9PSAtMSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaCArICd8Z2lneWFNb2JpbGVEaWFsb2cnO1xuICAgICAgICB9XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnaGFzaGNoYW5nZScsIGJhY2tMaXN0ZW5lcik7XG4gICAgfSwgNTApO1xufVxuZXhwb3J0IGZ1bmN0aW9uIF9yZW1vdmVEaWFsb2dCYWNrTGlzdGVuZXIoKSB7XG4gICAgaWYgKCFiYWNrTGlzdGVuZXIpIHJldHVybjtcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ2hhc2hjaGFuZ2UnLCBiYWNrTGlzdGVuZXIpO1xuICAgIGJhY2tMaXN0ZW5lciA9IG51bGw7XG4gICAgLy9yZXN0b3JlIHByZXZpb3VzIGhhc2hcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJ3xnaWd5YU1vYmlsZURpYWxvZycsICcnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwcmVwZW5kVG9Cb2R5KGVsOiBIVE1MRWxlbWVudCwgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoIWRvY3VtZW50LmJvZHkpIHJldHVybjtcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUgJiYgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGVsLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRvQm9keShlbDogSFRNTEVsZW1lbnQsIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50KTogdm9pZCB7XG4gICAgaWYgKCFkb2N1bWVudC5ib2R5KSByZXR1cm47XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoZWwgJiYgZWwucGFyZW50RWxlbWVudCkge1xuICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaXNDaGlsZE9mKGNoaWxkOiBOb2RlLCBwYXJlbnQ6IE5vZGUpIHtcbiAgICB2YXIgZGlyZWN0UGFyZW50ID0gY2hpbGQucGFyZW50Tm9kZTtcblxuICAgIHdoaWxlIChkaXJlY3RQYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudCA9PSBkaXJlY3RQYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlyZWN0UGFyZW50ID0gZGlyZWN0UGFyZW50LnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVmlzaWJsZShlbDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICAgICAgaWYgKGNvbXB1dGVkU3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnIHx8IGNvbXB1dGVkU3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDZW50ZXJlZERpdklEKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiAnZ2lnXycgKyBsb2NhbEluZm8uaW5pdFRpbWUuZ2V0VGltZSgpLnRvU3RyaW5nKCkgKyAnXycgKyBuYW1lO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoQXR0cmlidXRlcyhkb21FbGVtTmFtZTogc3RyaW5nLCBkb21FbGVtQXR0cnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IG5ld0RvbUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGRvbUVsZW1OYW1lKTtcblxuICAgIGlmIChkb21FbGVtQXR0cnMpIHtcbiAgICAgICAgZm9yIChsZXQgZWxlbUF0dHIgaW4gZG9tRWxlbUF0dHJzKSB7XG4gICAgICAgICAgICBuZXdEb21FbGVtW2VsZW1BdHRyXSA9IGRvbUVsZW1BdHRyc1tlbGVtQXR0cl07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RG9tRWxlbTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb3BMZXZlbERpdihpZD86IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGlmIChlbC5zdHlsZS56SW5kZXggIT0gbnVsbCkge1xuICAgICAgICBlbC5zdHlsZS56SW5kZXggPSAnJyArIGdldE5leHRaSW5kZXgoKTtcbiAgICB9XG5cbiAgICBlbC5pbm5lckhUTUwgPSAnJztcbiAgICBpZiAoaWQpIHtcbiAgICAgICAgZWwuaWQgPSBpZDtcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUgJiYgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShlbCwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWw7XG59XG5leHBvcnQgZnVuY3Rpb24gaGlkZUJ5SUQoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAoZWwpIHtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvd0J5SUQoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAoZWwpIHtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IGxvY2FsSW5mby5pc0lFNiA/IChlbC50YWdOYW1lID09ICdURCcgPyAndGFibGUtY2VsbCcgOiBlbC50YWdOYW1lID09ICdUUicgPyAnJyA6IGVsLnRhZ05hbWUgPT0gJ1RBQkxFJyA/ICcnIDogJ2Jsb2NrJykgOiAnJztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2xlYXJCeUlEKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgaWYgKGMgIT0gbnVsbCkge1xuICAgICAgICAgICAgYy5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0SFRNTFNpemUoaHRtbDogc3RyaW5nLCBjb250YWluZXI6IEhUTUxFbGVtZW50KTogeyB3OiBudW1iZXI7IGg6IG51bWJlciB9IHtcbiAgICB2YXIgZGl2TWVhc3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdk1lYXN1cmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGRpdk1lYXN1cmUuc3R5bGUubGVmdCA9ICctMTAwMHB4JztcbiAgICBkaXZNZWFzdXJlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdk1lYXN1cmUpO1xuICAgIHZhciB3ID0gZGl2TWVhc3VyZS5vZmZzZXRXaWR0aDtcbiAgICB2YXIgaCA9IGRpdk1lYXN1cmUub2Zmc2V0SGVpZ2h0O1xuICAgIGRpdk1lYXN1cmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXZNZWFzdXJlKTtcbiAgICByZXR1cm4geyB3OiB3LCBoOiBoIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudHNCeUNsYXNzKHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGFzc05hbWU6IHN0cmluZywgaW5jbHVkZVBhcmVudD86IGJvb2xlYW4pOiBIVE1MRWxlbWVudFtdIHtcbiAgICBpZiAoIXBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICB2YXIgYXJFbHMgPSBbXTtcblxuICAgIGlmIChpbmNsdWRlUGFyZW50ICYmIGlzRWxlbWVudENsYXNzKHBhcmVudEVsZW1lbnQsIGNsYXNzTmFtZSkpIHtcbiAgICAgICAgYXJFbHMucHVzaChwYXJlbnRFbGVtZW50KTtcbiAgICB9XG5cbiAgICB2YXIgZWxzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IHBhcmVudEVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKSBhcyBhbnk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzRWxlbWVudENsYXNzKGVsc1tpXSwgY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgYXJFbHMucHVzaChlbHNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhckVscyB8fCBbXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50c0J5QXR0cmlidXRlKHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0YWdOYW1lOiBzdHJpbmcsIGF0dHJpYnV0ZU5hbWU6IHN0cmluZywgYXR0cmlidXRlVmFsdWU6IHN0cmluZyk6IEhUTUxFbGVtZW50W10ge1xuICAgIHZhciBhckVscyA9IFtdO1xuICAgIHZhciBlbHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gcGFyZW50RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKSBhcyBhbnk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGVsc1tpXS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSkgPT0gYXR0cmlidXRlVmFsdWUpIHtcbiAgICAgICAgICAgIGFyRWxzLnB1c2goZWxzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJFbHM7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudFBvc2l0aW9uKGVsOiBIVE1MRWxlbWVudCk6IHsgbGVmdDogbnVtYmVyOyB0b3A6IG51bWJlcjsgcmlnaHQ6IG51bWJlcjsgYm90dG9tOiBudW1iZXIgfSB7XG4gICAgaWYgKCFlbCkge1xuICAgICAgICByZXR1cm4geyBsZWZ0OiAwLCB0b3A6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAgfTtcbiAgICB9XG5cbiAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBzY3JvbGwgPSB2aWV3cG9ydFV0aWxzLmdldFNjcm9sbCgpO1xuICAgIHZhciBsZWZ0ID0gcmVjdC5sZWZ0ICsgc2Nyb2xsLmxlZnQ7XG4gICAgdmFyIHRvcCA9IHJlY3QudG9wICsgc2Nyb2xsLnRvcDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICByaWdodDogbGVmdCArIHJlY3Qud2lkdGgsXG4gICAgICAgIGJvdHRvbTogdG9wICsgcmVjdC5oZWlnaHQsXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzc1RvRWxlbWVudChlbDogSFRNTEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCFlbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGV4aXN0aW5nQ2xhc3NlcyA9IGVsLmNsYXNzTmFtZSA/IGdldENsYXNzTmFtZXMoZWwpIDogW107XG4gICAgdmFyIGV4aXN0aW5nT3JpZ2luYWxMZW5ndGggPSBleGlzdGluZ0NsYXNzZXMubGVuZ3RoO1xuICAgIHZhciBuZXdDbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG5cbiAgICBmb3IgKHZhciBqIGluIG5ld0NsYXNzZXMpIHtcbiAgICAgICAgdmFyIGV4aXN0cyA9IGZhbHNlO1xuICAgICAgICBpZiAoIW5ld0NsYXNzZXNbal0pIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBpIGluIGV4aXN0aW5nQ2xhc3Nlcykge1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nQ2xhc3Nlc1tpXSA9PT0gbmV3Q2xhc3Nlc1tqXSkge1xuICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWV4aXN0cykge1xuICAgICAgICAgICAgZXhpc3RpbmdDbGFzc2VzLnB1c2gobmV3Q2xhc3Nlc1tqXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXhpc3RpbmdDbGFzc2VzLmxlbmd0aCAhPT0gZXhpc3RpbmdPcmlnaW5hbExlbmd0aCkge1xuICAgICAgICBlbC5jbGFzc05hbWUgPSBleGlzdGluZ0NsYXNzZXMuam9pbignICcpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzc0Zyb21FbGVtZW50KGVsOiBIVE1MRWxlbWVudCwgY2xhc3NOYW1lOiBzdHJpbmcsIHN1YnN0cmluZzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKCFlbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBhckNsYXNzID0gZ2V0Q2xhc3NOYW1lcyhlbCk7XG4gICAgZm9yICh2YXIgaSA9IGFyQ2xhc3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgaWYgKGFyQ2xhc3NbaV0gPT09IGNsYXNzTmFtZSB8fCAoc3Vic3RyaW5nICYmIGFyQ2xhc3NbaV0uaW5kZXhPZihjbGFzc05hbWUpICE9PSAtMSkpIHtcbiAgICAgICAgICAgIGFyQ2xhc3Muc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsLmNsYXNzTmFtZSA9IGFyQ2xhc3Muam9pbignICcpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENsYXNzTmFtZXMoZWw6IEhUTUxFbGVtZW50KTogQXJyYXk8c3RyaW5nPiB7XG4gICAgdmFyIGNsYXNzZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBpZiAodHlwZW9mIGVsLmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2xhc3NlcyA9IGVsLmNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3Nlcztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnRDbGFzcyhlbDogSFRNTEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCFlbCkgcmV0dXJuIGZhbHNlO1xuICAgIGVsc2UgaWYgKCFjbGFzc05hbWUpIHJldHVybiB0cnVlO1xuICAgIGVsc2UgaWYgKCFlbC5jbGFzc05hbWUpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBleGlzdHMgPSBmYWxzZTtcbiAgICB2YXIgYXJDbGFzcyA9IGdldENsYXNzTmFtZXMoZWwpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJDbGFzcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJDbGFzc1tpXSA9PT0gY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGV4aXN0cztcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYW5jZWxFdmVudChldmVudDogYW55KTogdm9pZCB7XG4gICAgaWYgKCFldmVudCkgcmV0dXJuO1xuICAgIGlmICgnY2FuY2VsYWJsZScgaW4gZXZlbnQpXG4gICAgICAgIC8vIEFsbCBicm93c2VycyBleGNlcHQgPElFOVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGVsc2UgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGU6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG4gICAgdmFyIGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWUgPSBuYW1lIHx8ICcnO1xuICAgIGRpdkNvbnRhaW5lci5pbm5lckhUTUwgPSAnPCcgKyB0eXBlICsgJyBuYW1lPVwiJyArIG5hbWUgKyAnXCIgaWQ9XCInICsgbmFtZSArICdcIj48LycgKyB0eXBlICsgJz4nO1xuICAgIHJldHVybiBkaXZDb250YWluZXIuZmlyc3RDaGlsZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRTaXplKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHc6IGFueSwgaDogYW55LCBjZW50ZXI/OiBib29sZWFuKSB7XG4gICAgaWYgKGNvbnRhaW5lciA9PSBudWxsIHx8IGNvbnRhaW5lci5zdHlsZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodykge1xuICAgICAgICB3ID0gJycgKyB3O1xuICAgICAgICB2YXIgaXNXaWR0aFByZWNlbnRhZ2UgPSB3LmluZGV4T2YoJyUnKSA+IDA7XG5cbiAgICAgICAgaWYgKCFpc05hTih3KSB8fCBpc1dpZHRoUHJlY2VudGFnZSkge1xuICAgICAgICAgICAgdmFyIHdpZHRoVmFsdWU6IHN0cmluZyA9ICcnICsgKGlzV2lkdGhQcmVjZW50YWdlID8gdyA6IHcgKyAncHgnKTtcblxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5zdHlsZS53aWR0aCAhPSB3aWR0aFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gd2lkdGhWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoKSB7XG4gICAgICAgIGggPSAnJyArIGg7XG4gICAgICAgIHZhciBpc0hlaWdodFByZWNlbnRhZ2UgPSBoLmluZGV4T2YoJyUnKSA+IDA7XG5cbiAgICAgICAgaWYgKCFpc05hTih3KSB8fCBpc0hlaWdodFByZWNlbnRhZ2UpIHtcbiAgICAgICAgICAgIHZhciBoZWlnaHRWYWx1ZTogc3RyaW5nID0gJycgKyAoaXNIZWlnaHRQcmVjZW50YWdlID8gaCA6IGggKyAncHgnKTtcblxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgIT09IGhlaWdodFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGhlaWdodFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNlbnRlciAmJiB3ICYmIGgpIHtcbiAgICAgICAgaWYgKGNvbnRhaW5lci5zdHlsZS56SW5kZXggPT0gbnVsbCB8fCBjZW50ZXIpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS56SW5kZXggPSAnJyArIGdldE5leHRaSW5kZXgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB2cCA9IHZpZXdwb3J0VXRpbHMuZ2V0SW5uZXJTaXplKCk7XG4gICAgICAgIHZhciBzY3JsID0gdmlld3BvcnRVdGlscy5nZXRTY3JvbGwoKTtcblxuICAgICAgICB2YXIgdnB0ID0gc2NybC50b3A7XG4gICAgICAgIHZhciB2cGwgPSBzY3JsLmxlZnQ7XG5cbiAgICAgICAgY29udGFpbmVyLnN0eWxlLnRvcCA9ICcnICsgTWF0aC5tYXgoMCwgdnB0ICsgTWF0aC5mbG9vcigodnAuaCAtIGgpIC8gMikpICsgJ3B4JztcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmxlZnQgPSAnJyArIE1hdGgubWF4KDAsIHZwbCArIE1hdGguZmxvb3IoKHZwLncgLSB3KSAvIDIpKSArICdweCc7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhpZGRlbklmcmFtZShzcmM6IHN0cmluZyk6IEhUTUxJRnJhbWVFbGVtZW50IHtcbiAgICB2YXIgaWZyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgaWZyLnNyYyA9IHNyYztcbiAgICBpZnIuc3R5bGUud2lkdGggPSAnMzBweCc7XG4gICAgaWZyLnN0eWxlLmhlaWdodCA9ICcxMHB4JztcbiAgICBpZnIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGlmci5zdHlsZS50b3AgPSAnLTEwMDBweCc7XG4gICAgaWZyLnN0eWxlLmxlZnQgPSAnLTEwMDBweCc7XG5cbiAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgICBhcHBlbmRUb0JvZHkoaWZyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmdW5jdGlvbnNVdGlscy5pbnZva2VPblBhZ2VMb2FkKCgpID0+IHtcbiAgICAgICAgICAgIGFwcGVuZFRvQm9keShpZnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaWZyO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJpYnV0ZUVuY29kZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gICAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgICAgICAucmVwbGFjZSgvXFxcIi9nLCAnJnF1b3Q7JylcbiAgICAgICAgLnJlcGxhY2UoL1xcJy9nLCAnJiMzOTsnKTsgLy8gSUU4IGRvZXNuJ3Qgc3VwcG9ydCAmYXBvcztcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYW5pcHVsYXRlQXR0cmlidXRlcyhcbiAgICBlbGVtZW50czogRWxlbWVudFtdLFxuICAgIG1hdGNoZXI6IFJlZ0V4cCxcbiAgICByZXBsYWNlUHJlZGljYXRlOiAobWF0Y2g6IHN0cmluZykgPT4gdm9pZCxcbiAgICBjcml0ZXJpYTogKGF0dHI/OiBBdHRyKSA9PiBib29sZWFuID0gKCkgPT4gdHJ1ZSxcbik6IHZvaWQge1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBpZiAoIWVsLmF0dHJpYnV0ZXMpIHJldHVybjtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWwuYXR0cmlidXRlcykuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgICAgICAgIGlmIChjcml0ZXJpYShhdHRyKSkge1xuICAgICAgICAgICAgICAgIGF0dHIudmFsdWUgPSBhdHRyLnZhbHVlLnJlcGxhY2UobWF0Y2hlciwgcmVwbGFjZVByZWRpY2F0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRleHROb2Rlc1VuZGVyKGVsOiBIVE1MRWxlbWVudCkge1xuICAgIGxldCBuO1xuICAgIGNvbnN0IHRleHROb2RlczogVGV4dFtdID0gW107XG4gICAgY29uc3QgdHJlZVdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZWwsIE5vZGVGaWx0ZXIuU0hPV19URVhULCBudWxsLCBmYWxzZSk7XG4gICAgd2hpbGUgKChuID0gdHJlZVdhbGtlci5uZXh0Tm9kZSgpIGFzIFRleHQpKSB7XG4gICAgICAgIHRleHROb2Rlcy5wdXNoKG4pO1xuICAgIH1cbiAgICByZXR1cm4gdGV4dE5vZGVzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzSFRNTEJvb2xlYW5BdHRyaWJ1dGUoYXR0ck5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBbJ2F1dG9jb21wbGV0ZScsICdhdXRvZm9jdXMnLCAnY2hlY2tlZCcsICdkaXNhYmxlZCcsICdoaWRkZW4nLCAncmVhZG9ubHknLCAncmVxdWlyZWQnLCAnc2VsZWN0ZWQnXS5pbmRleE9mKGF0dHJOYW1lKSA+IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQmVsb25nVG9HaWd5YUZpZWxkc2V0KGVsOiBFbGVtZW50KTogYm9vbGVhbiB7XG5cbiAgICBpZiAoIWVsIHx8IGVsIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gZW5kIG9mIHJlY3Vyc2lvbiAtIGVsZW1lbnQgaXMgbm90IGEgY2hpbGQgb2YgYSBmaWVsZHNldFxuICAgIH1cblxuICAgIGlmIChpc0VsZW1lbnRDbGFzcyhlbC5wYXJlbnRFbGVtZW50LCAnZ2lneWEtZmllbGRzZXQnKSl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBpc0JlbG9uZ1RvR2lneWFGaWVsZHNldChlbC5wYXJlbnRFbGVtZW50KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbG9zZXN0RWxlbWVudChlbGVtLCBzZWxlY3RvciwgcGFyZW50ID0gZG9jdW1lbnQpIHtcbiAgICBzZXRNYXRjaGVzUG9seWZpbGwoKTtcblxuICAgIC8vIEdldCB0aGUgY2xvc2VzdCBtYXRjaGluZyBlbGVtZW50XG4gICAgZm9yICggOyBlbGVtICYmIGVsZW0gIT09IHBhcmVudDsgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSApIHtcbiAgICAgICAgaWYgKGVsZW0/Lm1hdGNoZXMoc2VsZWN0b3IpKSByZXR1cm4gZWxlbTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50RnJvbVRlbXBsYXRlKHRlbXBsYXRlOiBzdHJpbmcgPSAnJyk6IENoaWxkTm9kZSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IHRlbXBsYXRlPy50cmltKCk7XG4gICAgcmV0dXJuIGRpdi5maXJzdENoaWxkID8/IGRpdjtcbn1cbmZ1bmN0aW9uIHNldE1hdGNoZXNQb2x5ZmlsbCgpIHtcbiAgICBpZiAoIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQYXJlbnRIYXNDbGFzcyhuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCwgY2xhc3NOYW1lIDpzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAobmF0aXZlRWxlbWVudD8uY2xhc3NMaXN0Py5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIW5hdGl2ZUVsZW1lbnQ/LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gaXNQYXJlbnRIYXNDbGFzcyhuYXRpdmVFbGVtZW50Py5wYXJlbnRFbGVtZW50LCBjbGFzc05hbWUpO1xufVxuIiwiXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplKG9iajogYW55LCBpbmNsdWRlRnVuY3Rpb25zID0gZmFsc2UsIHByZXR0eVByaW50ID0gZmFsc2UsIGwgPSAwLCBtYXhMZXZlbCA9IDIwKTogc3RyaW5nIHtcbiAgICBpZiAoIWdpZ3lhLmxvY2FsSW5mby5pc0lFOCkge1xuICAgICAgICByZXR1cm4gd2luZG93WydKU09OJ10uc3RyaW5naWZ5KG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFsKSBsID0gMDtcblxuICAgICAgICBpZiAobCA+IG1heExldmVsKSByZXR1cm4gJ1tUb28gZGVlcF0nO1xuXG4gICAgICAgIHZhciBwcmVmaXggPSAnJztcbiAgICAgICAgdmFyIG5ld2xpbmUgPSAnJztcbiAgICAgICAgdmFyIHRhYiA9ICcnO1xuICAgICAgICBpZiAocHJldHR5UHJpbnQpIHtcbiAgICAgICAgICAgIHRhYiA9ICdcXHQnO1xuICAgICAgICAgICAgbmV3bGluZSA9ICdcXG4nO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsICsgMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcHJlZml4ICs9IHRhYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgdCA9IHR5cGVvZiBvYmo7XG4gICAgICAgIGlmICh0ID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQgIT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBzaW1wbGUgZGF0YSB0eXBlXG5cbiAgICAgICAgICAgIGlmICh0ID09ICdzdHJpbmcnKSBvYmogPSAnXCInICsgb2JqLnJlcGxhY2UoLyhcXFwifFxcXFwpL2csICdcXFxcJDEnKS5yZXBsYWNlKC9cXHJcXG58XFxyfFxcbi9nLCAnXFxcXG4nKSArICdcIic7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKG9iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgbixcbiAgICAgICAgICAgICAgICB2LFxuICAgICAgICAgICAgICAgIGpzb24gPSBbXSxcbiAgICAgICAgICAgICAgICBhcnIgPSBvYmogJiYgb2JqLmNvbnN0cnVjdG9yID09IEFycmF5O1xuICAgICAgICAgICAgaWYgKGFycikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBvYmpbaV07XG4gICAgICAgICAgICAgICAgICAgIHQgPSB0eXBlb2YgdjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYgPT0gbnVsbCB8fCB0ID09ICd1bmRlZmluZWQnKSB2ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHQgPT0gJ3N0cmluZycpIHYgPSAnXCInICsgdi5yZXBsYWNlKC8oXFxcInxcXFxcKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvXFxyXFxufFxccnxcXG4vZywgJ1xcXFxuJykgKyAnXCInO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlRnVuY3Rpb25zKSB2ID0gJ0Z1bmN0aW9uJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdiA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHYucGFyZW50Tm9kZSAmJiB2LmlubmVySFRNTCkgdiA9ICdIVE1MRWxlbWVudCc7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHYuY29uc3RydWN0b3IgPT0gRGF0ZSkgdiA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ID09ICdvYmplY3QnICYmIHYgIT09IG51bGwpIHYgPSBzZXJpYWxpemUodiwgaW5jbHVkZUZ1bmN0aW9ucywgcHJldHR5UHJpbnQsIGwgKyAxKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoU3RyaW5nKHYpICE9ICcnKSBqc29uLnB1c2gocHJlZml4ICsgdGFiICsgU3RyaW5nKHYpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobiBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IG9ialtuXTtcbiAgICAgICAgICAgICAgICAgICAgdCA9IHR5cGVvZiB2O1xuICAgICAgICAgICAgICAgICAgICBpZiAodiA9PSBudWxsIHx8IHQgPT0gJ3VuZGVmaW5lZCcpIHYgPSBTdHJpbmcodik7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHQgPT0gJ3N0cmluZycpIHYgPSAnXCInICsgdi5yZXBsYWNlKC8oXFxcInxcXFxcKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvXFxyXFxufFxccnxcXG4vZywgJ1xcXFxuJykgKyAnXCInO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlRnVuY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdiA9ICdGdW5jdGlvbic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2LnBhcmVudE5vZGUgJiYgdi5pbm5lckhUTUwpIHYgPSAnSFRNTEVsZW1lbnQnO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2LmNvbnN0cnVjdG9yID09IERhdGUpIHYgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodCA9PSAnb2JqZWN0JyAmJiB2ICE9PSBudWxsKSB2ID0gbmV3bGluZSArIHNlcmlhbGl6ZSh2LCBpbmNsdWRlRnVuY3Rpb25zLCBwcmV0dHlQcmludCwgbCArIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChTdHJpbmcodikgIT0gJycpIGpzb24ucHVzaChwcmVmaXggKyB0YWIgKyAnXCInICsgbi5yZXBsYWNlKC8oXFxcInxcXFxcKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvXFxyXFxufFxccnxcXG4vZywgJ1xcXFxuJykgKyAnXCI6JyArIFN0cmluZyh2KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld2xpbmUgKyBwcmVmaXggKyAoYXJyID8gJ1snIDogJ3snKSArIG5ld2xpbmUgKyBqc29uLmpvaW4oJywnICsgbmV3bGluZSkgKyBuZXdsaW5lICsgcHJlZml4ICsgKGFyciA/ICddJyA6ICd9Jyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZGVzZXJpYWxpemU8VD4oanNvbjogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBULCBzY29wZT86IGFueSk6IFQge1xuICAgIC8vIFJldHVybiBkZWZhdWx0IHZhbHVlIGlmIGlzIGVtcHR5IHN0cmluZyAob3Igc2ltaWxhcikuXG4gICAgaWYgKCFqc29uIHx8ICFqc29uLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKSkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8ICh7fSBhcyBUKTtcbiAgICB9XG5cbiAgICAvLyBBdHRlbXB0IHRvIHBhcnNlLiBPbiBlcnJvciwgd2FybiBpbiBjb25zb2xlIGFuZCByZXR1cm4gZGVmYXVsdCB2YWx1ZS5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBrZXlzID0gW107XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgICAgICBpZiAoc2NvcGUpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNjb3BlKSB7XG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goc2NvcGVba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmbjogRnVuY3Rpb24gPSBldmFsKGAoZnVuY3Rpb24oJHtrZXlzLmpvaW4oJywnKX0pIHsgcmV0dXJuICR7anNvbi50cmltKCl9OyB9KWApO1xuICAgICAgICByZXR1cm4gZm4uYXBwbHkodW5kZWZpbmVkLCB2YWx1ZXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdFcnJvciBkZXNlcmlhbGl6aW5nIEphdmFTY3JpcHQnLCBlKTtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCAoe30gYXMgVCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlPFQ+KGpzb246IHN0cmluZywgZGVmYXVsdFZhbHVlPzogVCk6IFQge1xuICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNJRTgpIHtcbiAgICAgICAgcmV0dXJuIGRlc2VyaWFsaXplPFQ+KGpzb24sIGRlZmF1bHRWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbJ0pTT04nXS5wYXJzZShqc29uKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCAoe30gYXMgVCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBHSUdZQV9QQVJBTV9QUkVGSVggfSBmcm9tICcuLy4uLy4uLy4uLy4uL2FjY291bnRzL2NvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyBrZXlWYWx1ZVV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9rZXlWYWx1ZSc7XG5pbXBvcnQgKiBhcyBvYmplY3RVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvb2JqZWN0JztcblxudHlwZSBJR2V0R2lnUGFyYW1zRnJvbVVybENvbmZpZyA9IGdpZ3lhLnV0aWxzLlVSTC5JR2V0R2lnUGFyYW1zRnJvbVVybENvbmZpZztcbnR5cGUgSUdldENvbnRleHRQYXJhbXNGcm9tVXJsQ29uZmlnID0gZ2lneWEudXRpbHMuVVJMLklHZXRDb250ZXh0UGFyYW1zRnJvbVVybENvbmZpZ1xuXG5leHBvcnQgZnVuY3Rpb24gVVJMRW5jb2RlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIFVSTERlY29kZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBVUkxEZWNvZGVSZWN1cnNpdmUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHByZXZEZWNvZGluZ1JlcyA9ICcnO1xuICAgIGxldCBjdXJyRGVjb2RpbmdSZXMgPSB2YWx1ZTtcblxuICAgIC8vIGtlZXAgZGVjb2RpbmcgdW50aWwgd2UgY2FuJ3QgZGVjb2RlIGFueW1vcmVcbiAgICB3aGlsZSAoY3VyckRlY29kaW5nUmVzICE9IHByZXZEZWNvZGluZ1Jlcykge1xuICAgICAgICAvLyBzdG9yZSB0aGUgbGFzdCBkZWNvZGluZyByZXN1bHRcbiAgICAgICAgcHJldkRlY29kaW5nUmVzID0gY3VyckRlY29kaW5nUmVzO1xuXG4gICAgICAgIC8vIGRlY29kZSB0aGUgc3RyaW5nIG9uY2UgYWdhaW5cbiAgICAgICAgY3VyckRlY29kaW5nUmVzID0gVVJMRGVjb2RlKHByZXZEZWNvZGluZ1Jlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJEZWNvZGluZ1Jlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmFtc0Zyb21VUkwodXJsOiBzdHJpbmcsIGtleXNUb0xvd2VyPzogYm9vbGVhbik6IE9iamVjdCB7XG4gICAgaWYgKCF1cmwgfHwgdXJsLmluZGV4T2YoJz8nKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICByZXR1cm4ga2V5VmFsdWVVdGlscy5kZXNlcmlhbGl6ZSh1cmwuc3BsaXQoJyMnKVswXS5zcGxpdCgnPycpWzFdLCAnJicsIGtleXNUb0xvd2VyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdpZ1BhcmFtc0Zyb21VUkwoY29uZmlnOiBJR2V0R2lnUGFyYW1zRnJvbVVybENvbmZpZykge1xuXG4gICAgY29uc3QgeyB1cmwsIHBhcmFtUHJlZml4LCBrZXlzVG9Mb3dlciwgcmVtb3ZlUHJlZml4IH0gPSBjb25maWcgfHwge31cblxuICAgIGNvbnN0IHByZWZpeCA9IHBhcmFtUHJlZml4IHx8IEdJR1lBX1BBUkFNX1BSRUZJWDtcbiAgICBjb25zdCB1cmxQYXJhbXMgPSBnZXRQYXJhbXNGcm9tVVJMKHVybCwga2V5c1RvTG93ZXIpO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh1cmxQYXJhbXMpXG4gICAgICAgIC5maWx0ZXIoa2V5ID0+IGtleS5pbmRleE9mKHByZWZpeCkgPT09IDAgJiYga2V5ICE9PSBwcmVmaXgpXG4gICAgICAgIC5yZWR1Y2U8YW55Pigob2JqLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0tleSA9IHJlbW92ZVByZWZpeCA/IGtleS5zbGljZSg0KSA6IGtleTtcbiAgICAgICAgICAgIG9ialtuZXdLZXldID0gdXJsUGFyYW1zW2tleV07XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9LCB7fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJhbVZhbHVlRnJvbVVSTChwYXJhbTogc3RyaW5nLCB1cmw6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChudWxsID09IHVybCB8fCAnJyA9PSB1cmwpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBpcW0gPSB1cmwuaW5kZXhPZignPycpO1xuICAgIGlmIChpcW0gPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgcXMgPSAnJicgKyB1cmwuc3Vic3RyKGlxbSArIDEpO1xuXG4gICAgbGV0IGlkeCA9IHFzLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignJicgKyBwYXJhbS50b0xvd2VyQ2FzZSgpICsgJz0nKTtcbiAgICBpZiAoaWR4ID09PSAtMSkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbEFuZE1vcmUgPSBxcy5zdWJzdHIoaWR4ICsgKDEgKyBwYXJhbS5sZW5ndGggKyAxKSkgKyAnJic7XG4gICAgaWR4ID0gdmFsQW5kTW9yZS5pbmRleE9mKCcmJyk7XG5cbiAgICByZXR1cm4gdmFsQW5kTW9yZS5zdWJzdHIoMCwgaWR4KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRQYXJhbXNUb1VSTCh1cmw6IHN0cmluZywgb1BhcmFtczogT2JqZWN0KTogc3RyaW5nIHtcbiAgICBjb25zdCBwYXJhbXMgPSBnZXRQYXJhbXNGcm9tVVJMKHVybCk7XG4gICAgb2JqZWN0VXRpbHMuYWRkKHBhcmFtcywgb1BhcmFtcyk7XG4gICAgY29uc3QgdXJsSGFzaFNwbGl0ID0gdXJsLnNwbGl0KCcjJyk7XG4gICAgbGV0IGZpbmFsVXJsID0gdXJsSGFzaFNwbGl0WzBdLnNwbGl0KCc/JylbMF0gKyAnPycgKyBrZXlWYWx1ZVV0aWxzLnNlcmlhbGl6ZShwYXJhbXMsICcmJyk7XG4gICAgaWYgKHVybEhhc2hTcGxpdC5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZpbmFsVXJsICs9ICcjJyArIHVybEhhc2hTcGxpdFsxXTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbmFsVXJsO1xufVxuXG5cbmNvbnN0IHJlbW92ZVVuYWNjZXB0YWJsZVBhcmFtcyA9IDxUPihwYXJhbXM6IFQsIHVuYWNjZXB0YWJsZVBhcmFtczogUmVnRXhwKTogUGFydGlhbDxUPiA9PiB7XG5cbiAgICBpZiAoIXVuYWNjZXB0YWJsZVBhcmFtcykge1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbGlkUGFyYW1zOiBQYXJ0aWFsPFQ+ID0ge307XG5cbiAgICBPYmplY3QuZW50cmllcyhwYXJhbXMgfHwge30pXG4gICAgICAgIC5maWx0ZXIoKFtwYXJhbU5hbWVdKSA9PiAhdW5hY2NlcHRhYmxlUGFyYW1zLnRlc3QocGFyYW1OYW1lKSlcbiAgICAgICAgLmZvckVhY2goKFtwYXJhbU5hbWUsIHBhcmFtVmFsdWVdOiBbc3RyaW5nLCBzdHJpbmddKSA9PiB2YWxpZFBhcmFtc1twYXJhbU5hbWVdID0gcGFyYW1WYWx1ZSlcblxuICAgIHJldHVybiB2YWxpZFBhcmFtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRleHRQYXJhbXNGcm9tVXJsPFQgPSB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9Pihjb25maWc6IElHZXRDb250ZXh0UGFyYW1zRnJvbVVybENvbmZpZyk6IFBhcnRpYWw8VD4ge1xuXG4gICAgY29uc3QgeyB1cmwsIHBhcmFtUHJlZml4LCB1bmFjY2VwdGFibGVQYXJhbXMgfSA9IGNvbmZpZyB8fCB7fVxuXG4gICAgaWYoIXVybCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1zID0gZ2lneWEudXRpbHMuVVJMLmdldEdpZ1BhcmFtc0Zyb21VUkwoeyB1cmwsIHBhcmFtUHJlZml4IH0pIGFzIFQ7XG5cbiAgICByZXR1cm4gcmVtb3ZlVW5hY2NlcHRhYmxlUGFyYW1zKHBhcmFtcywgdW5hY2NlcHRhYmxlUGFyYW1zKTtcbn1cbiIsImltcG9ydCAqIGFzIHN0cmluZ1V0aWxzVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3N0cmluZ1V0aWxzJztcblxuZXhwb3J0IGNsYXNzIFVyaSB7XG4gICAgcHJpdmF0ZSBfYW5jaG9yOiBIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nLCBpc0Fic29sdXRlID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBwcm90b2NvbCA9IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sID09ICdodHRwOicgPyAnaHR0cCcgOiAnaHR0cHMnO1xuICAgICAgICBpZiAoaXNBYnNvbHV0ZSAmJiB1cmwuaW5kZXhPZignOi8vJykgPT09IC0xICYmIHVybC5jaGFyQXQoMCkgIT09ICcvJykgdXJsID0gYCR7cHJvdG9jb2x9Oi8vJHt1cmx9YDtcbiAgICAgICAgdGhpcy5fYW5jaG9yLmhyZWYgPSB1cmw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkb21haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbmNob3IuaG9zdG5hbWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yLnBhdGhuYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaHJlZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvci5ocmVmO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2VhcmNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yLnNlYXJjaC5zbGljZSgxKTtcbiAgICB9IC8vIGRyb3BwaW5nICc/J1xuICAgIHB1YmxpYyBnZXQgaGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvci5oYXNoLnNsaWNlKDEpO1xuICAgIH0gLy8gZHJvcHBpbmcgJyMnXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbmNob3IuaHJlZjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkVG9TZWFyY2gocGFyYW1zOiBPYmplY3QpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IHBhcmFtc1tuYW1lXTtcbiAgICAgICAgICAgIGlmICgodHlwZW9mIHZhbCA9PSAnYm9vbGVhbicgfHwgdHlwZW9mIHZhbCA9PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsID09ICdzdHJpbmcnKSAmJiBuYW1lICE9ICdldmVudE5hbWUnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFkZGl0aW9uID0gdGhpcy5fYW5jaG9yLnNlYXJjaCA/ICcmJyA6ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FuY2hvci5zZWFyY2ggKz0gYCR7YWRkaXRpb259JHtuYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudChwYXJhbXNbbmFtZV0pfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGZldGNoPFQ+KHJldHJpZXMgPSAwKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmZldGNoID8gYXdhaXQgdGhpcy5icm93c2VyRmV0Y2g8VD4oKSA6IGF3YWl0IHRoaXMueGhyPFQ+KCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChyZXRyaWVzIDw9IDApXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBmZXRjaCBmYWlsZWQ6ICR7ZX1gKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZGVsYXkoMSk7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaChyZXRyaWVzIC0gMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaXNCYXNlT2YodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIFVyaS5wYXJzZSh1cmwpLmlzSW4odGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzSW4oYmFzZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICBwdWJsaWMgaXNJbihiYXNlOiBVcmkpOiBib29sZWFuO1xuICAgIHB1YmxpYyBpc0luKGJhc2U6IFVyaSB8IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodHlwZW9mIGJhc2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBiYXNlID0gVXJpLnBhcnNlKGJhc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICh0aGlzLmRvbWFpbiA9PSBiYXNlLmRvbWFpbiB8fCAvLyBwYWdlIGlzIHRoZSBiYXNlIGRvbWFpblxuICAgICAgICAgICAgICAgIHRoaXMuaXNTdWJEb21haW5PZihiYXNlKSkgJiYgLy8gb3Igc3ViLWRvbWFpbiBvZiBpdFxuICAgICAgICAgICAgKCFiYXNlLnBhdGggfHwgdGhpcy5wYXRoLmluZGV4T2YoYmFzZS5wYXRoKSA9PSAwKVxuICAgICAgICApOyAvLyBwYWdlIGlzIGFsc28gaW4gYmFzZSdzIGRlZmluZWQgcGF0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNGb3JTdWJEb21haW5zKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kb21haW4uaW5kZXhPZignLicpID09IDA7XG4gICAgfVxuXG4gICAgcHVibGljIGlzU3ViRG9tYWluT2YoYmFzZTogVXJpKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciBkb21haW4gPSAnJztcblxuICAgICAgICBpZiAoIWJhc2UuaXNGb3JTdWJEb21haW5zKCkpIGRvbWFpbiA9ICcuJztcblxuICAgICAgICBkb21haW4gKz0gYmFzZS5kb21haW47XG5cbiAgICAgICAgcmV0dXJuIHN0cmluZ1V0aWxzVXRpbHMuZW5kc1dpdGgodGhpcy5kb21haW4sIGRvbWFpbik7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBwYXJzZSh1cmw6IHN0cmluZywgaXNBYnNvbHV0ZSA9IHRydWUpIHtcbiAgICAgICAgaWYgKCF1cmwpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBVcmkodXJsLCBpc0Fic29sdXRlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGJyb3dzZXJGZXRjaDxUPigpOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy50b1N0cmluZygpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBmZXRjaCBmYWlsZWRgKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHhocjxUPigpOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICB4aHIub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSA0IHx8IHhoci5zdGF0dXMgIT09IDIwMCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoYHhociBmYWlsZWQgLSAke3hoci5zdGF0dXN9IC0gJHt4aHIuc3RhdHVzVGV4dH1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QganNvblJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoanNvblJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBkZWxheShtczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyID0+IHNldFRpbWVvdXQociwgbXMpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBsb2NhbEluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvJztcbmltcG9ydCB7Q29va2llU3RvcmV9IGZyb20gXCIuL2dsb2JhbFwiO1xuXG5leHBvcnQgdHlwZSBTYW1lU2l0ZSA9ICdOb25lJyB8ICdTdHJpY3QnIHwgJ0xheCc7XG5cbmV4cG9ydCBjbGFzcyBDb29raWVVdGlscyB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyB0ZXN0Q29va2llTmFtZSA9ICdnaWczcGN0ZXN0JztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Nvb2tpZVN0b3JlOiBDb29raWVTdG9yZSA9IG5ldyBDb29raWVTdG9yZSgpKSB7IH1cblxuICAgIHB1YmxpYyBzZXQobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzX2luPzogYW55LCBjb29raWVEb21haW4/OiBzdHJpbmcsIGRvbnRVc2VSb290UGF0aD86IGJvb2xlYW4sIHNhbWVTaXRlPzogU2FtZVNpdGUpOiBib29sZWFuIHtcblxuICAgICAgICBpZiAoY29va2llRG9tYWluID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvb2tpZURvbWFpbiA9IHRoaXMuZ2V0RGVmYXVsdERvbWFpbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IGRvbnRVc2VSb290UGF0aCA/ICcnIDogJy8nO1xuXG4gICAgICAgIGNvbnN0IGV4cGlyZU1zID0gdGhpcy5fZ2V0RXhwaXJhdGlvbkluTXMoZXhwaXJlc19pbik7XG5cbiAgICAgICAgbGV0IGV4cGlyZXMgPSBudWxsO1xuICAgICAgICBpZihleHBpcmVNcyAhPSBudWxsKSB7XG4gICAgICAgICAgICBleHBpcmVzID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGV4cGlyZXMuc2V0VGltZShleHBpcmVzLmdldFRpbWUoKSArIGV4cGlyZU1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb29raWVFeGlzdCA9IHRoaXMuX3NldENvb2tpZUludGVybmFsKG5hbWUsIHZhbHVlLCBwYXRoLCBleHBpcmVzLCBjb29raWVEb21haW4sIHNhbWVTaXRlKTtcblxuICAgICAgICBjb25zdCBzaG91bGRDb29raWVFeGlzdCA9ICFleHBpcmVNcyB8fCBleHBpcmVNcyA+IDA7XG5cbiAgICAgICAgaWYgKHNob3VsZENvb2tpZUV4aXN0ID09PSBjb29raWVFeGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBmYWlsZWQgdG8gc2V0IGNvb2tpZSwgcmV0cnk7XG4gICAgICAgIC8vIGl0IG1pZ2h0IGJlIGJlY2F1c2UgdGhlIGRvbWFpbiBpcyBsaXN0ZWQgYXMgVExEIGh0dHBzOi8vZGF0YS5pYW5hLm9yZy9UTEQvdGxkcy1hbHBoYS1ieS1kb21haW4udHh0XG4gICAgICAgIGNvbnN0IHBhZ2VEb21haW4gPSBsb2NhbEluZm8ucGFnZURvbWFpbjtcbiAgICAgICAgY29va2llRXhpc3QgPSB0aGlzLl9zZXRDb29raWVJbnRlcm5hbChuYW1lLCB2YWx1ZSwgcGF0aCwgZXhwaXJlcywgcGFnZURvbWFpbiwgc2FtZVNpdGUpO1xuXG4gICAgICAgIHJldHVybiBjb29raWVFeGlzdCA9PT0gc2hvdWxkQ29va2llRXhpc3Q7XG4gICAgfVxuXG4gICAgcHVibGljIGdldChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29va2llU3RvcmUuZ2V0Q29va2llKG5hbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmUobmFtZTogc3RyaW5nLCBkb21haW4gPSBsb2NhbEluZm8ucGFnZURvbWFpbik6IHZvaWQge1xuICAgICAgICB0aGlzLl9yZW1vdmVGcm9tQmFzZURvbWFpbnMobmFtZSwgZG9tYWluKTtcbiAgICAgICAgdGhpcy5zZXQobmFtZSwgJycsIC0xLCAnJywgZmFsc2UpO1xuICAgICAgICB0aGlzLnNldChuYW1lLCAnJywgLTEsICcnLCB0cnVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SW5maW5pdGVFeHBpcmF0aW9uVGltZUluU2Vjb25kcygpIHtcbiAgICAgICAgLy8gU2V0IGV4cGlyYXRpb24gdGltZSB0byAxIHllYXJzXG4gICAgICAgIHJldHVybiA2MCAqIDYwICogMjQgKiAzNjU7XG4gICAgfVxuXG4gICAgcHVibGljIGNhblNhdmVDb29raWUoY29va2llRG9tYWluID0gbnVsbCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0KENvb2tpZVV0aWxzLnRlc3RDb29raWVOYW1lLCAndHJ1ZScsIDEsIGNvb2tpZURvbWFpbiwgbnVsbCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIGlPUyAxMCB3ZWJ2aWV3IHRocm93cyBpbiBzb21lIHNjZW5hcmlvc1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldERlZmF1bHREb21haW4ocGFnZURvbWFpbiA9IGxvY2FsSW5mby5wYWdlRG9tYWluLCBiYXNlRG9tYWluID0gbG9jYWxJbmZvLmJhc2VEb21haW4gfHwgJycpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYmFzZURvbWFpbi5sZW5ndGggPiAwICYmIHBhZ2VEb21haW4ubGVuZ3RoID49IGJhc2VEb21haW4ubGVuZ3RoICYmIHBhZ2VEb21haW4ubGFzdEluZGV4T2YoYmFzZURvbWFpbikgPT09IHBhZ2VEb21haW4ubGVuZ3RoIC0gYmFzZURvbWFpbi5sZW5ndGhcbiAgICAgICAgICAgID8gYmFzZURvbWFpblxuICAgICAgICAgICAgOiBwYWdlRG9tYWluO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldEV4cGlyYXRpb25Jbk1zKGV4cGlyZXNJbjogYW55KSB7XG5cbiAgICAgICAgbGV0IGV4cGlyZU1zOiBudW1iZXI7XG4gICAgICAgIGlmIChleHBpcmVzSW4gPT0gbnVsbCB8fCBleHBpcmVzSW4gPT09ICcnIHx8IGlzTmFOKGV4cGlyZXNJbikpIHtcbiAgICAgICAgICAgIGV4cGlyZU1zID0gMTAwMCAqIHRoaXMuZ2V0SW5maW5pdGVFeHBpcmF0aW9uVGltZUluU2Vjb25kcygpO1xuICAgICAgICB9IGVsc2UgaWYgKGV4cGlyZXNJbiA9PSAwKSB7XG4gICAgICAgICAgICAvLyAwIG1lYW5zIFNlc3Npb25cbiAgICAgICAgICAgIGV4cGlyZU1zID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFueSBvdGhlciB2YWx1ZSBpcyBudW1iZXIgb2Ygc2Vjb25kcyAoQSBuZWdhdGl2ZSB2YWx1ZSB3b3VsZCBtZWFuIGV4cGlyZSBub3chKVxuICAgICAgICAgICAgZXhwaXJlTXMgPSBleHBpcmVzSW4gKiAxMDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV4cGlyZU1zO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldENvb2tpZUludGVybmFsKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgcGF0aDogc3RyaW5nLCBleHBpcmVzOiBEYXRlLCBjb29raWVEb21haW46IHN0cmluZywgc2FtZVNpdGVNb2RlID0gQ29va2llVXRpbHMuX2dldFNhbWVTaXRlTW9kZSgpKSB7XG4gICAgICAgIGNvbnN0IHByb3RvY29sID0gbG9jYWxJbmZvPy5wcm90b2NvbCA/PyBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbDtcbiAgICAgICAgY29uc3QgaXNTZWN1cmVkID0gcHJvdG9jb2wuaW5kZXhPZignaHR0cHMnKSA9PT0gMDtcblxuICAgICAgICB0aGlzLl9jb29raWVTdG9yZS5zZXRDb29raWUobmFtZSwgdmFsdWUsIHtcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBleHBpcmVzLFxuICAgICAgICAgICAgZG9tYWluOiBjb29raWVEb21haW4sXG4gICAgICAgICAgICBzYW1lU2l0ZTogc2FtZVNpdGVNb2RlLFxuICAgICAgICAgICAgc2VjdXJlOiBpc1NlY3VyZWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0KG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc2FtZVNpdGVNb2RlKSB7XG4gICAgICAgICAgICAvL2lmIGZhaWxlZCB0byB3cml0ZSBjb29raWUgd2l0aG91dCBzYW1lU2l0ZSBtb2RlLCB0aGVuIHN0b3AgaGVyZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNhbWVTaXRlTW9kZSAhPT0gJ05vbmUnKSB7XG4gICAgICAgICAgICB0aGlzLl9mYWxsYmFja1RvU2FtZVNpdGVOb25lKG5hbWUsIHZhbHVlLCBwYXRoLCBleHBpcmVzLCBjb29raWVEb21haW4sIGlzU2VjdXJlZClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdldChuYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5fcmVwb3J0RmFsbGJhY2soJ1NldHRpbmcgU2FtZVNpdGU9Tm9uZScsIHtuYW1lLCB2YWx1ZSwgc2FtZVNpdGVNb2RlfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGZhaWxlZCB0byB3cml0ZSBjb29raWUgd2l0aCBzYW1lU2l0ZSBtb2RlLCByZXRyeSB3aXRob3V0O1xuICAgICAgICB0aGlzLl9jb29raWVTdG9yZS5zZXRDb29raWUobmFtZSwgdmFsdWUsIHtcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICBleHBpcmVzLFxuICAgICAgICAgICAgZG9tYWluOiBjb29raWVEb21haW4sXG4gICAgICAgICAgICBzZWN1cmU6IGlzU2VjdXJlZFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5nZXQobmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlcG9ydEZhbGxiYWNrKCdDb29raWUgZXN0YWJsaXNoZWQgb25seSB3aXRob3V0IHNhbWVTaXRlIG1vZGUnLCB7bmFtZSwgdmFsdWUsIHNhbWVTaXRlTW9kZX0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVtb3ZlRnJvbUJhc2VEb21haW5zKG5hbWU6IHN0cmluZywgZG9tYWluOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZG9tYWluUGFydHMgPSBkb21haW4uc3BsaXQoJy4nKTtcblxuICAgICAgICAvLyB3aGVuIGNsZWFyaW5nIGZyb20gYS5iLmMuZC5jb20gLS0+IGNsZWFyIGZyb20gYS5iLmMuZC5jb20sIGIuYy5kLmNvbSwgYy5kLmNvbSwgZC5jb21cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb21haW5QYXJ0cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRvbWFpbiA9IGRvbWFpblBhcnRzLnNsaWNlKGkpLmpvaW4oJy4nKTtcbiAgICAgICAgICAgIHRoaXMuc2V0KG5hbWUsICcnLCAtMSwgZG9tYWluLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnNldChuYW1lLCAnJywgLTEsIGRvbWFpbiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfZ2V0U2FtZVNpdGVNb2RlKCkgOiBTYW1lU2l0ZSB7XG4gICAgICAgIGlmICghQ29va2llVXRpbHMuX2Rpc2FsbG93U2FtZVNpdGVNb2RlKCkpIHJldHVybiAnTm9uZSc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2Rpc2FsbG93U2FtZVNpdGVNb2RlKCkge1xuICAgICAgICBjb25zdCBwcm90b2NvbCA9IGxvY2FsSW5mbz8ucHJvdG9jb2wgPz8gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2w7XG4gICAgICAgIGNvbnN0IHVhID0gbG9jYWxJbmZvPy51c2VyQWdlbnQgPz8gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBpc1NlY3VyZWQgPSBwcm90b2NvbC5pbmRleE9mKCdodHRwcycpID09PSAwO1xuXG4gICAgICAgIHJldHVybiAhaXNTZWN1cmVkIHx8ICF1YSB8fFxuICAgICAgICAgICAgLy8gQ292ZXIgYWxsIGlPUyBiYXNlZCBicm93c2VycyBoZXJlLiBUaGlzIGluY2x1ZGVzOlxuICAgICAgICAgICAgLy8gLSBTYWZhcmkgb24gaU9TIDEyIGZvciBpUGhvbmUsIGlQb2QgVG91Y2gsIGlQYWRcbiAgICAgICAgICAgIC8vIC0gV2tXZWJ2aWV3IG9uIGlPUyAxMiBmb3IgaVBob25lLCBpUG9kIFRvdWNoLCBpUGFkXG4gICAgICAgICAgICAvLyAtIENocm9tZSBvbiBpT1MgMTIgZm9yIGlQaG9uZSwgaVBvZCBUb3VjaCwgaVBhZFxuICAgICAgICAgICAgLy8gQWxsIG9mIHdoaWNoIGFyZSBicm9rZW4gYnkgU2FtZVNpdGU9Tm9uZSwgYmVjYXVzZSB0aGV5IHVzZSB0aGUgaU9TIG5ldHdvcmtpbmcgc3RhY2tcbiAgICAgICAgICAgICgodWEuaW5kZXhPZignQ1BVIGlQaG9uZSBPUyAxMicpID4gLTEgfHwgdWEuaW5kZXhPZignaVBhZDsgQ1BVIE9TIDEyJykgPiAtMSkgfHxcbiAgICAgICAgICAgICAgICAvLyBDb3ZlciBNYWMgT1MgWCBiYXNlZCBicm93c2VycyB0aGF0IHVzZSB0aGUgTWFjIE9TIG5ldHdvcmtpbmcgc3RhY2suIFRoaXMgaW5jbHVkZXM6XG4gICAgICAgICAgICAgICAgLy8gLSBTYWZhcmkgb24gTWFjIE9TIFguXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBkb2VzIG5vdCBpbmNsdWRlOlxuICAgICAgICAgICAgICAgIC8vIC0gQ2hyb21lIG9uIE1hYyBPUyBYXG4gICAgICAgICAgICAgICAgLy8gQmVjYXVzZSB0aGV5IGRvIG5vdCB1c2UgdGhlIE1hYyBPUyBuZXR3b3JraW5nIHN0YWNrLlxuICAgICAgICAgICAgICAgICh1YS5pbmRleE9mKCdNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE0JykgPiAtMSAmJiB1YS5pbmRleE9mKCdWZXJzaW9uLycpID4gLTEgJiYgdWEuaW5kZXhPZignU2FmYXJpJykgPiAtMSkgfHxcbiAgICAgICAgICAgICAgICAvLyBDb3ZlciBDaHJvbWUgNTAtNjksIGJlY2F1c2Ugc29tZSB2ZXJzaW9ucyBhcmUgYnJva2VuIGJ5IFNhbWVTaXRlPU5vbmUsXG4gICAgICAgICAgICAgICAgLy8gYW5kIG5vbmUgaW4gdGhpcyByYW5nZSByZXF1aXJlIGl0LlxuICAgICAgICAgICAgICAgIC8vIE5vdGU6IHRoaXMgY292ZXJzIHNvbWUgcHJlLUNocm9taXVtIEVkZ2UgdmVyc2lvbnMsXG4gICAgICAgICAgICAgICAgLy8gYnV0IHByZS1DaHJvbWl1bSBFZGdlIGRvZXMgbm90IHJlcXVpcmUgU2FtZVNpdGU9Tm9uZS5cbiAgICAgICAgICAgICAgICAodWEuaW5kZXhPZignQ2hyb21lLzUnKSA+IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZS82JykgPiAtMSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ZhbGxiYWNrVG9TYW1lU2l0ZU5vbmUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIGV4cGlyZXM6IERhdGUsIGNvb2tpZURvbWFpbjogc3RyaW5nLCBzZWN1cmU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29va2llU3RvcmUuc2V0Q29va2llKG5hbWUsIHZhbHVlLCB7XG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgZXhwaXJlcyxcbiAgICAgICAgICAgIGRvbWFpbjogY29va2llRG9tYWluLFxuICAgICAgICAgICAgc2FtZVNpdGU6ICdOb25lJyxcbiAgICAgICAgICAgIHNlY3VyZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yZXBvcnRGYWxsYmFjayhtZXNzYWdlOiBzdHJpbmcsIGRldGFpbHM6IHtcbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICB2YWx1ZTogc3RyaW5nO1xuICAgICAgICBzYW1lU2l0ZU1vZGU6IHN0cmluZztcbiAgICAgICAgaXNTdWNjZXNzZnVsPzogYm9vbGVhbjtcbiAgICAgICAgaXNJZnJhbWU/OiBib29sZWFuO1xuICAgIH0pIHtcbiAgICAgICAgZ2lneWEubG9nZ2VyLnJlcG9ydChgQ29va2llIFBvbGljeSBGYWxsYmFjazogJHttZXNzYWdlfWAsIHsuLi5kZXRhaWxzLCBpc0lmcmFtZTogdGhpcy5faXNJRnJhbWUoKX0sIGZhbHNlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlICBfaXNJRnJhbWUoKTogYm9vbGVhbiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93Py5sb2NhdGlvbiAhPT0gd2luZG93Py5wYXJlbnQ/LmxvY2F0aW9uO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29va2llVXRpbHMoKTtcbiIsImltcG9ydCB7IFVyaSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9VcmknO1xuaW1wb3J0ICogYXMgc3RyaW5nVXRpbHNVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvc3RyaW5nVXRpbHMnO1xuaW1wb3J0IHsgbG9jYWxJbmZvIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvY2FsSW5mbyc7XG5pbXBvcnQge0ZsYWdTZXJ2aWNlfSBmcm9tICcuLi9TZXJ2aWNlcy9GbGFnU2VydmljZSc7XG5pbXBvcnQgY29va2llIGZyb20gJy4vY29va2llJztcblxuLy8gVE9ETzogbW92ZSB0byBjb25maWdcbmxldCBiYXNlRG9tYWluczogc3RyaW5nW118c3RyaW5nO1xuaWYgKGdpZ3lhLnBhcnRuZXJTZXR0aW5ncz8uYmFzZURvbWFpbnM/Lmxlbmd0aCkge1xuICAgIGJhc2VEb21haW5zID0gZ2lneWEucGFydG5lclNldHRpbmdzLmJhc2VEb21haW5zIGFzIHN0cmluZ1tdfHN0cmluZztcbn0gZWxzZSB7XG4gICAgaWYgKHdpbmRvdy5zZWxmID09PSB3aW5kb3cudG9wKSB7XG4gICAgICAgIC8vIG9ubHkgaW4gdGhlIHRvcCBmcmFtZVxuICAgICAgICBnaWd5YS5sb2dnZXIud2FybignZ2lneWE6IG1pc3NpbmcgYmFzZSBkb21haW5zIGZvciBzaXRlJyk7XG4gICAgfVxuICAgIGJhc2VEb21haW5zID0gW2RvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lXTtcbn1cbmxvY2FsSW5mby5iYXNlRG9tYWluID0gZ2V0QmFzZURvbWFpbihiYXNlRG9tYWlucyk7XG5leHBvcnQgZGVjbGFyZSB2YXIgZ2V0QXBpRG9tYWluOiAobmFtZXNwYWNlPzogc3RyaW5nKSA9PiBzdHJpbmc7XG5jb25zdCBnaWd5YURvbWFpbk5hbWVzcGFjZXMgPSBbJ3NvY2lhbGl6ZScsICdhY2NvdW50cycsICdmaWRtJywgJ2dtJywgJ2NvbW1lbnRzJywgJ2djcycsICdpZHMnLCAnZHMnLCAnZ3Njb3VudGVycycsICdyZXBvcnRzJ107XG5leHBvcnQgZnVuY3Rpb24gYXBpRG9tYWluRmFjdG9yeShhcGlEb21haW4gPSByZXNvbHZlQXBpRG9tYWluKCksIGRlZmF1bHRBcGlEb21haW4gPSBnaWd5YS5kZWZhdWx0QXBpRG9tYWluKTogKG5hbWVzcGFjZT86IHN0cmluZykgPT4gc3RyaW5nIHtcblxuICAgIGNvbnN0IHNob3VsZEFkZE5hbWVzcGFjZSA9IFVyaS5wYXJzZShhcGlEb21haW4pLmlzSW4oVXJpLnBhcnNlKGRlZmF1bHRBcGlEb21haW4pKTtcblxuICAgIHJldHVybiAobmFtZXNwYWNlPzogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgc2hvdWxkQWRkTmFtZXNwYWNlKSB7XG4gICAgICAgICAgICBsZXQgc3ViRG9tYWluID0gbmFtZXNwYWNlLnNwbGl0KCcuJylbMF07XG4gICAgICAgICAgICBpZiAoc3ViRG9tYWluID09PSAnc2RrJyB8fCBzdWJEb21haW4gPT09ICdvYXV0aCcpIHtcbiAgICAgICAgICAgICAgICBzdWJEb21haW4gPSAnYWNjb3VudHMnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChnaWd5YURvbWFpbk5hbWVzcGFjZXMuaW5kZXhPZihzdWJEb21haW4pID09IC0xKSB7XG4gICAgICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmVycm9yKGB0cnlpbmcgdG8gc2VuZCByZXF1ZXN0IHRvIGFuIGludmFsaWQgZG9tYWluYCk7XG4gICAgICAgICAgICAgICAgc3ViRG9tYWluID0gZ2lneWFEb21haW5OYW1lc3BhY2VzWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYCR7c3ViRG9tYWlufS4ke2FwaURvbWFpbn1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGFwaURvbWFpbjtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0R2lneWFEb21haW4obmFtZXNwYWNlPzogc3RyaW5nLCBkYXRhQ2VudGVyID0gZ2lneWEuZGF0YUNlbnRlciwgZGVmYXVsdERvbWFpbiA9IGdpZ3lhLmRlZmF1bHRBcGlEb21haW4pIHtcbiAgICBpZihkZWZhdWx0RG9tYWluID09PSAnc2FwY2RtLmNuJyAmJiBkYXRhQ2VudGVyICE9PSAnY24xJykge1xuICAgICAgICBkZWZhdWx0RG9tYWluID0gYGNuMS4ke2RlZmF1bHREb21haW59YDsgLy9GaXggZm9yIGNuMS1zdDEuIGl0IHNob3VsZCBiZSBjbjEtc3QxLmNuMS5zYXBjZG0uY24gYW5kIG5vdCBjbjEtc3QxLnNhcGNkbS5jblxuICAgIH1cbiAgICBjb25zdCBkb21haW4gPSBgJHtkYXRhQ2VudGVyfS4ke2RlZmF1bHREb21haW59YDtcblxuICAgIGlmIChuYW1lc3BhY2UpIHJldHVybiBgJHtuYW1lc3BhY2V9LiR7ZG9tYWlufWA7XG4gICAgZWxzZSByZXR1cm4gZG9tYWluO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhc2VEb21haW4oXG4gICAgYmFzZURvbWFpbnM6IHN0cmluZ1tdfHN0cmluZyA9IGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5iYXNlRG9tYWlucyxcbiAgICBjdXJyZW50RG9tYWluID0gbG9jYXRpb24uaG9zdG5hbWUsXG4gICAgZGVmYXVsdERvbWFpbnMgPSBbJ2dpZ3lhLmNvbScsICdjbjEuc2FwY2RtLmNuJywgJ2xvY2FsaG9zdCcsIGdpZ3lhLmRlZmF1bHRBcGlEb21haW5dLFxuKTogc3RyaW5nIHtcbiAgICAvLyAjNDk3ODYgLSBTdXBwb3J0IHdlYnZpZXcgd2l0aG91dCBob3N0bmFtZS5cbiAgICBpZiAoIWN1cnJlbnREb21haW4pIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYmFzZURvbWFpbnMgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgYmFzZURvbWFpbnMgPSBiYXNlRG9tYWlucy5zcGxpdCgnLCcpO1xuICAgIH1cblxuICAgIGxldCBvcmlnaW5VUkkgPSBVcmkucGFyc2UoY3VycmVudERvbWFpbik7XG5cbiAgICBpZiAoZGVmYXVsdERvbWFpbnMpIHtcbiAgICAgICAgYmFzZURvbWFpbnMgPSBiYXNlRG9tYWlucy5jb25jYXQoZGVmYXVsdERvbWFpbnMpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHJhd0RvbWFpbiBvZiBiYXNlRG9tYWlucykge1xuICAgICAgICAvLyBUaGlzIGRvZXMgbm90IHRha2UgY2FyZSBvZiB3aWxkY2FyZHMgaW4gdGhlIG1pZGRsZSBvZiBzdHJpbmcuXG4gICAgICAgIGNvbnN0IGJhc2VEb21haW4gPSBzdHJpbmdVdGlsc1V0aWxzLnJlcGxhY2VBbGwocmF3RG9tYWluLCAnKicsICcnKTtcbiAgICAgICAgY29uc3QgYmFzZVVyaSA9IFVyaS5wYXJzZShiYXNlRG9tYWluKTtcbiAgICAgICAgaWYgKGJhc2VVcmkgJiYgb3JpZ2luVVJJLmlzSW4oYmFzZVVyaSkpIHtcbiAgICAgICAgICAgIGlmICghZ2lneWEuXykge1xuICAgICAgICAgICAgICAgIGdpZ3lhLl8gPSB7fSBhcyBhbnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnaWd5YS5fLmlzVHJ1c3RlZERvbWFpbj0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChiYXNlVXJpLmlzRm9yU3ViRG9tYWlucygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpblVSSS5kb21haW47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBiYXNlVXJpLmRvbWFpbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZhbGxiYWNrIHRvIHRoZSBwYXJlbnQncyB3aW5kb3cgZG9tYWluIChmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSkuXG4gICAgcmV0dXJuIG9yaWdpblVSSS5kb21haW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQXBpRG9tYWluKFxuICAgIGN1c3RvbUFwaURvbWFpblByZWZpeCA9IGdpZ3lhLnBhcnRuZXJTZXR0aW5ncyAmJiBnaWd5YS5wYXJ0bmVyU2V0dGluZ3MuY3VzdG9tQVBJRG9tYWluUHJlZml4LFxuICAgIGJhc2VEb21haW4gPSBsb2NhbEluZm8uYmFzZURvbWFpbixcbiAgICBkYXRhQ2VudGVyID0gZ2lneWEuZGF0YUNlbnRlcixcbiAgICBkZWZhdWx0QXBpRG9tYWluID0gZ2lneWEuZGVmYXVsdEFwaURvbWFpbixcbikge1xuICAgIGNvbnN0IGFwaURvbWFpbiA9IGdldEhvc3RlZFBhZ2VzQXBpRG9tYWluQ29va2llKCk7XG4gICAgaWYgKGFwaURvbWFpbikge1xuICAgICAgICByZXR1cm4gYXBpRG9tYWluO1xuICAgIH1cbiAgICAvLyBUT0RPOiByZW1vdmUgb25jZSBhIHNvbHV0aW9uIHdpbGwgYmUgZm91bmQgZm9yIGhvc3RlZCBwYWdlc1xuICAgIGlmIChiYXNlRG9tYWluLmVuZHNXaXRoKGdpZ3lhLl8uY29uZmlnPy5ob3N0ZWRQYWdlc0RvbWFpbiB8fCAnbXkuZ2lneWEtZXh0LmNvbScpKSB7XG4gICAgICAgIHJldHVybiBiYXNlRG9tYWluO1xuICAgIH1cbiAgICBpZiAoY3VzdG9tQXBpRG9tYWluUHJlZml4ICYmIGJhc2VEb21haW4gJiYgYmFzZURvbWFpbiAhPT0gZGVmYXVsdEFwaURvbWFpbikge1xuICAgICAgICByZXR1cm4gYCR7Y3VzdG9tQXBpRG9tYWluUHJlZml4fS4ke2Jhc2VEb21haW59YDtcbiAgICB9XG4gICAgcmV0dXJuIGdldEdpZ3lhRG9tYWluKHVuZGVmaW5lZCwgZGF0YUNlbnRlciwgZGVmYXVsdEFwaURvbWFpbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yYWdlRG9tYWluKCkge1xuICAgIGNvbnN0IGFwaURvbWFpbiA9IGdldEhvc3RlZFBhZ2VzQXBpRG9tYWluQ29va2llKCk7XG4gICAgaWYgKGFwaURvbWFpbikge1xuICAgICAgICByZXR1cm4gYXBpRG9tYWluO1xuICAgIH1cbiAgICBpZiAoZ2lneWEudGhpc1NjcmlwdD8uZ2xvYmFsQ29uZj8uWydzdG9yYWdlRG9tYWluT3ZlcnJpZGUnXSkge1xuICAgICAgICByZXR1cm4gZ2lneWEudGhpc1NjcmlwdC5nbG9iYWxDb25mWydzdG9yYWdlRG9tYWluT3ZlcnJpZGUnXTtcbiAgICB9XG4gICAgaWYgKGdpZ3lhLnRoaXNTY3JpcHQ/LmJhc2VEb21haW4gJiYgRmxhZ1NlcnZpY2UudXNlR2lneWFKc0Jhc2VEb21haW4pIHtcbiAgICAgICAgcmV0dXJuIGdpZ3lhLnRoaXNTY3JpcHQuYmFzZURvbWFpbjtcbiAgICB9XG4gICAgbGV0IGRvbWFpbiA9IGdpZ3lhLmRlZmF1bHRBcGlEb21haW5cbiAgICBpZiAoZ2lneWEudXRpbHMuc3RyaW5nVXRpbHMuZW5kc1dpdGgoZG9tYWluLCAnc2FwY2RtLmNuJykgJiYgZ2lneWEuZGF0YUNlbnRlciAhPT0gJ2NuMScpIHsgLy8gc3BlY2lhbCBjYXNlIHdpdGggY2hpbmEgZG9tYWluIHN0YWdpbmdcbiAgICAgICAgZG9tYWluID0gYGNuMS5zYXBjZG0uY25gO1xuICAgIH1cbiAgICBjb25zdCBwcmVmaXggPSBnaWd5YS5kYXRhQ2VudGVyICE9PSAnZ2xvYmFsJyA/IGBjZG5zLiR7Z2lneWEuZGF0YUNlbnRlcn1gIDogYGNkbnNgO1xuICAgIHJldHVybiBgJHtwcmVmaXh9LiR7ZG9tYWlufWA7XG59XG5cbmZ1bmN0aW9uIGdldEhvc3RlZFBhZ2VzQXBpRG9tYWluQ29va2llKCkge1xuICAgIHJldHVybiBjb29raWUuZ2V0KGBwYWdlc19hcGlEb21haW5fJHtnaWd5YS5hcGlLZXl9YCk7XG59XG4iLCJpbXBvcnQgKiBhcyBET01VdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvRE9NJztcbmltcG9ydCB7IGdldENkblJlc291cmNlIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL2Nkbic7XG5pbXBvcnQgeyBsb2NhbEluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGxBc3luYzxUPihtZXRob2ROYW1lOiBzdHJpbmcsIHBhcmFtcyA9IHt9KTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KHJlc29sdmUgPT4ge1xuICAgICAgICBjYWxsRnVuY3Rpb24oYGdpZ3lhLiR7bWV0aG9kTmFtZX1gLCBbey4uLnBhcmFtcywgY2FsbGJhY2s6IHJlc29sdmV9XSk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxGdW5jdGlvbihuYW1lOiBzdHJpbmcsIGFyUGFyYW1zOiBhbnlbXSk6IHZvaWQge1xuICAgIHZhciBmbiA9IGV2YWwobmFtZSk7XG4gICAgdmFyIGFyUGFydHMgPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgYXJQYXJ0cy5zcGxpY2UoYXJQYXJ0cy5sZW5ndGggLSAxLCAxKTtcbiAgICB2YXIgc2NvcGUgPSBldmFsKGFyUGFydHMuam9pbignLicpKTtcbiAgICBmbi5hcHBseShzY29wZSwgYXJQYXJhbXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlT25QYWdlTG9hZChmdW5jOiBGdW5jdGlvbiwgY29tcGxldGVPbmx5PzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChcbiAgICAgICAgKCFkb2N1bWVudC5yZWFkeVN0YXRlICYmIGRvY3VtZW50LmJvZHkpIHx8XG4gICAgICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHxcbiAgICAgICAgKCFjb21wbGV0ZU9ubHkgJiYgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJyAmJiBkb2N1bWVudC5ib2R5KVxuICAgICkge1xuICAgICAgICBmdW5jKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNhbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBmbk9uTG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZ1bmMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmbk9uTG9hZCwgMjAwMDApOyAvLyBmYWxsYmFjayAtIHNvbWV0aW1lcyByZWFkeXN0YXRlIHN0YXlzIHN0dWNrIG9uIGludGVyYWN0aXZlXG5cbiAgICAgICAgRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdsb2FkJywgZm5PbkxvYWQpO1xuICAgICAgICBET01VdGlscy5hZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LCAnRE9NQ29udGVudExvYWRlZCcsIGZuT25Mb2FkKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWxpYXMocHVibGljTmFtZTogc3RyaW5nLCBmbmM6IEZ1bmN0aW9uIHwgeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IHZvaWQge1xuICAgIGNvbnN0IGFyTmFtZVNlZ21lbnRzID0gcHVibGljTmFtZS5zcGxpdCgnLicpO1xuICAgIGxldCBvQ3VycmVudFNlZ21lbnQgPSB3aW5kb3c7XG4gICAgZm9yIChsZXQgaVNlZ21lbnQgPSAwOyBpU2VnbWVudCA8IGFyTmFtZVNlZ21lbnRzLmxlbmd0aCAtIDE7IGlTZWdtZW50KyspIHtcbiAgICAgICAgY29uc3Qgc1NlZ21lbnQgPSBhck5hbWVTZWdtZW50c1tpU2VnbWVudF07XG4gICAgICAgIGlmICghb0N1cnJlbnRTZWdtZW50W3NTZWdtZW50XSkge1xuICAgICAgICAgICAgb0N1cnJlbnRTZWdtZW50W3NTZWdtZW50XSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIG9DdXJyZW50U2VnbWVudCA9IG9DdXJyZW50U2VnbWVudFtzU2VnbWVudF07XG4gICAgfVxuICAgIG9DdXJyZW50U2VnbWVudFthck5hbWVTZWdtZW50c1thck5hbWVTZWdtZW50cy5sZW5ndGggLSAxXV0gPSBmbmM7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZm46ICgpID0+IHZvaWQsIGRlbGF5TWlsbGlzZWNvbmRzOiBudW1iZXIpOiAoKSA9PiB2b2lkIHtcbiAgICBsZXQgdGltZXI6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aW1lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aW1lciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGZuKCk7XG4gICAgICAgIH0sIGRlbGF5TWlsbGlzZWNvbmRzKSBhcyBhbnk7XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRTcmNUb0lGcmFtZUlmTmVlZGVkKGlmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQsIHNyYzogc3RyaW5nID0gZ2V0Q2RuUmVzb3VyY2UoJy8nKSkge1xuICAgIGlmIChsb2NhbEluZm8uaXNJT1NXZWJWaWV3IHx8IChsb2NhbEluZm8uaXNJT1MgJiYgbG9jYWxJbmZvLmlzV2VDaGF0KSkge1xuICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7Y3JlYXRlQWxpYXN9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuXG5jb25zdCBnaWd5YUNkblJlZ2V4ID0gL1xcL1xcL2NkbihzKT9cXC4ocnUxXFwuKT9naWd5YS5jb20vO1xuY29uc3QgZmlsZU5hbWVzID0gWydnaWd5YS5qcycsICdzb2NpYWxpemUuanMnLCAnc29jaWFsaXplMi5qcycsICdnc2pzc2RrLmpzJ107XG5leHBvcnQgZnVuY3Rpb24gZ2V0R2lneWFTY3JpcHRFbGVtZW50KCk6IEhUTUxTY3JpcHRFbGVtZW50IHtcbiAgICBsZXQgc2NyaXB0RWxlbWVudDogSFRNTFNjcmlwdEVsZW1lbnQ7XG4gICAgY29uc3Qgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcbiAgICBmb3IgKGxldCBpID0gc2NyaXB0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBsZXQgc2NyaXB0ID0gc2NyaXB0c1tpXTtcbiAgICAgICAgbGV0IHNyYyA9IHNjcmlwdC5zcmMudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHNyYyAhPT0gJycpIHtcbiAgICAgICAgICAgIGlmIChnaWd5YUNkblJlZ2V4LnRlc3Qoc3JjKSB8fCBzcmMuaW5kZXhPZignP2FwaWtleT0nKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlzRmlsZU5hbWVFeGlzdEluU3JjID0gZmlsZU5hbWVzLmxlbmd0aCA9PT0gMCB8fCBmaWxlTmFtZXMuc29tZShmaWxlTmFtZSA9PiBzcmMuaW5kZXhPZihmaWxlTmFtZSkgPiAtMSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzRmlsZU5hbWVFeGlzdEluU3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdEVsZW1lbnQgPSBzY3JpcHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2NyaXB0RWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNvbmZpZ3VyYXRpb24oY29uZmlnOiBPYmplY3QgPSB7fSkge1xuICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGBnbG9iYWxDb25mIGlzIHVwZGF0ZWRgLCB7XG4gICAgICAgIHVwZGF0ZU9iamVjdDogY29uZmlnXG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbihnaWd5YS50aGlzU2NyaXB0Lmdsb2JhbENvbmYgfHwge30sIGNvbmZpZyk7XG59XG5cbmNyZWF0ZUFsaWFzKCdnaWd5YS51cGRhdGVDb25maWd1cmF0aW9uJywgdXBkYXRlQ29uZmlndXJhdGlvbik7XG4iLCJleHBvcnQgaW50ZXJmYWNlIElDb29raWVPcHRpb25zIHtcbiAgICBwYXRoPzogc3RyaW5nO1xuICAgIGRvbWFpbj86IHN0cmluZztcbiAgICBleHBpcmVzPzogRGF0ZTtcbiAgICBzYW1lU2l0ZT86ICdOb25lJyB8ICdTdHJpY3QnIHwgJ0xheCc7XG4gICAgc2VjdXJlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIENvb2tpZVN0b3JlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dpbjogV2luZG93ID0gd2luZG93KSB7IH1cblxuICAgIHNldENvb2tpZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIG9wdGlvbnM6IElDb29raWVPcHRpb25zKSB7XG4gICAgICAgIGxldCBjb29raWVTdHJpbmcgPSBgJHtuYW1lfT0ke2VzY2FwZSh2YWx1ZSl9YDtcbiAgICAgICAgaWYob3B0aW9ucy5wYXRoKSBjb29raWVTdHJpbmcgKz0gYDsgcGF0aD0ke29wdGlvbnMucGF0aH1gO1xuICAgICAgICBpZihvcHRpb25zLmV4cGlyZXMpIGNvb2tpZVN0cmluZyArPSBgOyBleHBpcmVzPSR7b3B0aW9ucy5leHBpcmVzLnRvVVRDU3RyaW5nKCl9YDtcbiAgICAgICAgaWYob3B0aW9ucy5kb21haW4gJiYgb3B0aW9ucy5kb21haW4uaW5kZXhPZignLicpICE9IC0xKSBjb29raWVTdHJpbmcgKz0gYDsgZG9tYWluPSR7b3B0aW9ucy5kb21haW59YDtcbiAgICAgICAgaWYob3B0aW9ucy5zYW1lU2l0ZSkgY29va2llU3RyaW5nICs9IGA7IHNhbWVTaXRlPSR7b3B0aW9ucy5zYW1lU2l0ZX1gO1xuICAgICAgICBpZihvcHRpb25zLnNlY3VyZSkgY29va2llU3RyaW5nICs9IGA7IHNlY3VyZWA7XG4gICAgICAgIHRoaXMuX3dpbi5kb2N1bWVudC5jb29raWUgPSBjb29raWVTdHJpbmc7XG4gICAgfVxuXG4gICAgZ2V0Q29va2llKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLyhbLiorP149IToke30oKXxbXFxdXFwvXFxcXF0pL2csICdcXFxcJDEnKS5yZXBsYWNlKC9eWyBcXHRdK3xbIFxcdF0rJC9nLCAnJyk7XG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnKD86Xnw7KVxcXFxzPycgKyBuYW1lICsgJz0oLio/KSg/Ojt8JCknKTtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLl93aW4uZG9jdW1lbnQuY29va2llLm1hdGNoKHJlZ2V4KTtcbiAgICAgICAgcmV0dXJuIG1hdGNoICYmIHVuZXNjYXBlKG1hdGNoWzFdKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNWYWxpZChnbHRleHA6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBnZXRNaWxsaXMoZ2x0ZXhwKSA+IERhdGUubm93KCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TWF4KC4uLmdsdGV4cHM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICBpZiAoIWdsdGV4cHMgfHwgIWdsdGV4cHMubGVuZ3RoKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHJldHVybiBnbHRleHBzLnNvcnQoKGdsdGV4cEEsIGdsdGV4cEIpID0+IGdldE1pbGxpcyhnbHRleHBCKSAtIGdldE1pbGxpcyhnbHRleHBBKSlbMF07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TWlsbGlzKGdsdEV4cDogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICFnbHRFeHAgPyAwIDogTnVtYmVyKGdsdEV4cC5zdWJzdHIoMCwgZ2x0RXhwLmluZGV4T2YoJ18nKSkpICogMTAwMDtcbn1cbiIsImltcG9ydCAqIGFzIFVSTFV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9VUkwnO1xuaW1wb3J0ICogYXMgSlNPTlV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9KU09OJztcbmltcG9ydCB7RmxhZ1NlcnZpY2V9IGZyb20gXCIuLi9TZXJ2aWNlcy9GbGFnU2VydmljZVwiO1xuZGVjbGFyZSBmdW5jdGlvbiB1bmVzY2FwZShlc2NhcGVkU3RyOiBzdHJpbmcpOiBzdHJpbmc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemUob0tleVZhbHVlOiBPYmplY3QsIGRlbGltaXRlcj86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgYSA9IFtdO1xuICAgIGlmICghZGVsaW1pdGVyKSB7XG4gICAgICAgIGRlbGltaXRlciA9ICcmJztcbiAgICB9XG4gICAgZm9yIChjb25zdCBwIGluIG9LZXlWYWx1ZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGVvZiBvS2V5VmFsdWVbcF0pIHtcbiAgICAgICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICBpZiAob0tleVZhbHVlW3BdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYS5wdXNoKHAgKyAnPScgKyBVUkxVdGlscy5VUkxFbmNvZGUoSlNPTlV0aWxzLnNlcmlhbGl6ZShvS2V5VmFsdWVbcF0pKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGEucHVzaChwICsgJz0nICsgVVJMVXRpbHMuVVJMRW5jb2RlKG9LZXlWYWx1ZVtwXSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHMgPSBhLmpvaW4oZGVsaW1pdGVyKTtcbiAgICByZXR1cm4gcztcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZSh1cmxFbmNvZGVkU3RyaW5nOiBzdHJpbmcsIGRlbGltaXRlcj86IHN0cmluZywga2V5c1RvTG93ZXI/OiBib29sZWFuLCB1c2VVbmVzY2FwZT86IGJvb2xlYW4pOiBhbnkge1xuICAgIGNvbnN0IG8gPSB7fTtcbiAgICBpZiAoIXVybEVuY29kZWRTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgfVxuICAgIGlmICghZGVsaW1pdGVyKSB7XG4gICAgICAgIGRlbGltaXRlciA9ICcmJztcbiAgICB9XG4gICAgY29uc3QgcGFpcnMgPSB1cmxFbmNvZGVkU3RyaW5nLnNwbGl0KGRlbGltaXRlcik7XG4gICAgZm9yIChsZXQgaVBhaXIgPSAwOyBpUGFpciA8IHBhaXJzLmxlbmd0aDsgaVBhaXIrKykge1xuICAgICAgICBjb25zdCBwYWlyID0gcGFpcnNbaVBhaXJdO1xuICAgICAgICBjb25zdCBlcVBvcyA9IHBhaXIuaW5kZXhPZignPScpO1xuICAgICAgICBpZiAoZXFQb3MgPT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlzVG9Mb3dlciA/IHBhaXIudG9Mb3dlckNhc2UoKSA6IHBhaXI7XG4gICAgICAgICAgICBvW2tleV0gPSAnMSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQga2V5ID0gcGFpci5zdWJzdHIoMCwgZXFQb3MpO1xuICAgICAgICAgICAgaWYgKGtleXNUb0xvd2VyKSB7XG4gICAgICAgICAgICAgICAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkVmFsdWUgPSBwYWlyLnN1YnN0cihlcVBvcyArIDEpLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodXNlVW5lc2NhcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgb1trZXldID0gRmxhZ1NlcnZpY2UudXNlRGVjb2RlVVJJQ29tcG9uZW50ID8gY29tcGFyZVJlc3VsdHNBbmRSZXR1cm5VUkxEZWNvZGUoc2VyaWFsaXplZFZhbHVlKSA6IHVuZXNjYXBlKHNlcmlhbGl6ZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb1trZXldID0gVVJMVXRpbHMuVVJMRGVjb2RlKHNlcmlhbGl6ZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIG9ba2V5XSA9IEZsYWdTZXJ2aWNlLnVzZURlY29kZVVSSUNvbXBvbmVudCA/IFVSTFV0aWxzLlVSTERlY29kZShzZXJpYWxpemVkVmFsdWUpIDogdW5lc2NhcGUoc2VyaWFsaXplZFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbztcbn1cblxuZnVuY3Rpb24gY29tcGFyZVJlc3VsdHNBbmRSZXR1cm5VUkxEZWNvZGUoc2VyaWFsaXplZFZhbHVlKXtcbiAgICBjb25zdCB1bmVzY2FwZWRSZXN1bHQgPSB1bmVzY2FwZShzZXJpYWxpemVkVmFsdWUpO1xuICAgIGNvbnN0IHVybERlY29kZVJlc3VsdCA9IFVSTFV0aWxzLlVSTERlY29kZShzZXJpYWxpemVkVmFsdWUpO1xuICAgIHVuZXNjYXBlZFJlc3VsdC5sb2NhbGVDb21wYXJlKHVybERlY29kZVJlc3VsdCkgIT09IDAgJiYgZ2lneWEubG9nZ2VyLnJlcG9ydCgndXJsRGVjb2RlciBhbmQgdW5lc2NhcGVkIGhhdmUgZGlmZmVyZW50IHZhbHVlcycsIHtcbiAgICAgICAgdW5lc2NhcGVkUmVzdWx0LFxuICAgICAgICB1cmxEZWNvZGVSZXN1bHRcbiAgICB9KTtcbiAgICByZXR1cm4gdXJsRGVjb2RlUmVzdWx0O1xufVxuIiwiaW1wb3J0ICogYXMgSlNPTlV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9KU09OJztcbmltcG9ydCB7IGxvY2FsSW5mbyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2NhbEluZm8nO1xuaW1wb3J0IGNvb2tpZVV0aWxzLCB7U2FtZVNpdGV9IGZyb20gJy4vY29va2llJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlciB7XG4gICAgcHVibGljIHN0YXRpYyBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ0Fic3RyYWN0QWRhcHRlcic7XG4gICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgYWJzdHJhY3Qgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXhwaXJlc0luPzogbnVtYmVyLCBkb21haW4/OiBzdHJpbmcpOiB2b2lkO1xuXG4gICAgcHVibGljIGFic3RyYWN0IHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpO1xuXG4gICAgLyoqXG4gICAgICogU2V0IG9iamVjdCB0byBzdG9yYWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRPYmplY3Qoa2V5OiBzdHJpbmcsIG86IE9iamVjdCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldEl0ZW0oa2V5LCBKU09OVXRpbHMuc2VyaWFsaXplKG8pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgb2JqZWN0IGZyb20gbG9jYWwgc3RvcmFnZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0T2JqZWN0KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBhbnkpOiBPYmplY3Qge1xuICAgICAgICByZXR1cm4gSlNPTlV0aWxzLmRlc2VyaWFsaXplKHRoaXMuZ2V0SXRlbShrZXkpLCBkZWZhdWx0VmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElzIHBlcnNpc3RlbnQgc3RvcmFnZS4gUmV0dXJucyBmYWxzZSB3aGVuIGRhdGEgaXMgbm90IHBlcnNpc3RlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNQZXJzaXN0ZW50KCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RBc3luY0xvY2FsU3RvcmFnZUFkYXB0ZXIgZXh0ZW5kcyBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIge1xuICAgIHByb3RlY3RlZCBpc0xvYWRlZDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGlzUmVhZHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzTG9hZGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZWQgd2hlbiB0aGVyZSBpcyBpbml0aWFsaXphdGlvbiB0aW1lIG9uIHRoZSBsb2NhbCBzdG9yYWdlIGFkYXB0ZXIuXG4gICAgICovXG4gICAgcHVibGljIHdhaXRGb3JTZXJ2aWNlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzUmVhZHkoKSkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy53YWl0Rm9yU2VydmljZShjYWxsYmFjayksIDUwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmFic3RyYWN0IGNsYXNzIFN0b3JhZ2VBZGFwdGVyIGV4dGVuZHMgQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIHtcbiAgICBwcm90ZWN0ZWQgc3RvcmFnZTogYW55O1xuXG4gICAgcHVibGljIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlW2tleV07XG4gICAgfVxuXG4gICAgcHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZXNJbj86IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHt9XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICB9XG59XG5jbGFzcyBMb2NhbFN0b3JhZ2VBZGFwdGVyIGV4dGVuZHMgU3RvcmFnZUFkYXB0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdMb2NhbFN0b3JhZ2VBZGFwdGVyJztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gbG9jYWxJbmZvLnN1cHBvcnRzTG9jYWxTdG9yYWdlO1xuICAgIH1cbn1cbmNsYXNzIFNlc3Npb25TdG9yYWdlQWRhcHRlciBleHRlbmRzIFN0b3JhZ2VBZGFwdGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gd2luZG93LnNlc3Npb25TdG9yYWdlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdTZXNzaW9uU3RvcmFnZUFkYXB0ZXInO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaXNBdmFpbGFibGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBsb2NhbEluZm8uc3VwcG9ydHNTZXNzaW9uU3RvcmFnZTtcbiAgICB9XG59XG5jbGFzcyBGaXJlZm94U3RvcmFnZUFkYXB0ZXIgZXh0ZW5kcyBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgaXNBdmFpbGFibGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBsb2NhbEluZm8uaXNGRiAmJiB3aW5kb3dbJ2dsb2JhbFN0b3JhZ2UnXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnRmlyZWZveFN0b3JhZ2VBZGFwdGVyJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB3aW5kb3dbJ2dsb2JhbFN0b3JhZ2UnXVtsb2NhdGlvbi5ob3N0bmFtZV1ba2V5XTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXhwaXJlc0luPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB3aW5kb3dbJ2dsb2JhbFN0b3JhZ2UnXVtsb2NhdGlvbi5ob3N0bmFtZV1ba2V5XSA9IHZhbHVlO1xuICAgICAgICB9IGNhdGNoIChleCkge31cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShrZXk6IHN0cmluZykge1xuICAgICAgICBkZWxldGUgd2luZG93WydnbG9iYWxTdG9yYWdlJ11bbG9jYXRpb24uaG9zdG5hbWVdW2tleV07XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvb2tpZVN0b3JhZ2VBZGFwdGVyIGV4dGVuZHMgQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIGlzQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gY29va2llVXRpbHMuY2FuU2F2ZUNvb2tpZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdDb29raWVTdG9yYWdlQWRhcHRlcic7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gY29va2llVXRpbHMuZ2V0KGtleSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZXNJbj86IG51bWJlciwgZG9tYWluPzogc3RyaW5nLCBhZGRpdGlvbmFsUGFyYW1zOiB7ZG9udFVzZVJvb3RQYXRoPzogYm9vbGVhbiwgc2FtZVNpdGU/OiBTYW1lU2l0ZX0gPSB7fSk6IHZvaWQge1xuICAgICAgICBjb29raWVVdGlscy5zZXQoa2V5LCB2YWx1ZSwgZXhwaXJlc0luLCBkb21haW4sIGFkZGl0aW9uYWxQYXJhbXMuZG9udFVzZVJvb3RQYXRoLCBhZGRpdGlvbmFsUGFyYW1zLnNhbWVTaXRlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShrZXk6IHN0cmluZykge1xuICAgICAgICBjb29raWVVdGlscy5yZW1vdmUoa2V5KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVtb3J5U3RvcmFnZUFkYXB0ZXIgZXh0ZW5kcyBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgaXNBdmFpbGFibGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtZW1vcnk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tZW1vcnkgPSB7fTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnTWVtb3J5U3RvcmFnZUFkYXB0ZXInO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVtb3J5W2tleV07XG4gICAgfVxuXG4gICAgcHVibGljIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZXNJbj86IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLm1lbW9yeVtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgZGVsZXRlIHRoaXMubWVtb3J5W2tleV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXMgcGVyc2lzdGVudCBzdG9yYWdlLiBSZXR1cm5zIGZhbHNlIHdoZW4gZGF0YSBpcyBub3QgcGVyc2lzdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBpc1BlcnNpc3RlbnQoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgYWRhcHRlcnM6IEFycmF5PGFueT4gPSBbXG4gICAgTG9jYWxTdG9yYWdlQWRhcHRlcixcbiAgICBTZXNzaW9uU3RvcmFnZUFkYXB0ZXIsXG4gICAgRmlyZWZveFN0b3JhZ2VBZGFwdGVyLFxuICAgIENvb2tpZVN0b3JhZ2VBZGFwdGVyLFxuICAgIE1lbW9yeVN0b3JhZ2VBZGFwdGVyLFxuXTtcbmV4cG9ydCBjb25zdCBpbnN0YW5jZXM6IHsgW2tleTogc3RyaW5nXTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIH0gPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQWRhcHRlcihhZGFwdGVyOiB7IG5hbWU/OiBzdHJpbmc7IGdldE5hbWU6ICgpID0+IHN0cmluZyB9ICYgKG5ldyAoKSA9PiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIpKSB7XG4gICAgY29uc3QgYWRhcHRlck5hbWUgPSBhZGFwdGVyLmdldE5hbWUoKSB8fCBhZGFwdGVyLm5hbWU7XG4gICAgaWYgKCFpbnN0YW5jZXNbYWRhcHRlck5hbWVdKSB7XG4gICAgICAgIGluc3RhbmNlc1thZGFwdGVyTmFtZV0gPSBuZXcgYWRhcHRlcigpO1xuICAgIH1cbiAgICByZXR1cm4gaW5zdGFuY2VzW2FkYXB0ZXJOYW1lXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3YWl0Rm9yU2VydmljZSgpOiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXI7XG5leHBvcnQgZnVuY3Rpb24gd2FpdEZvclNlcnZpY2UoY2FsbGJhY2s6IChzdG9yYWdlOiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIpID0+IHZvaWQpOiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXI7XG5leHBvcnQgZnVuY3Rpb24gd2FpdEZvclNlcnZpY2UoY2FsbGJhY2s/OiAoc3RvcmFnZTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyKSA9PiB2b2lkKTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIHtcbiAgICAvLyBTZWxlY3QgY29tcGF0aWJsZSBhZGFwdGVyLlxuICAgIGxldCBzdG9yYWdlOiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXI7XG4gICAgZm9yIChjb25zdCBhZGFwdGVyIG9mIGFkYXB0ZXJzKSB7XG4gICAgICAgIGlmIChhZGFwdGVyLmlzQXZhaWxhYmxlKCkpIHtcbiAgICAgICAgICAgIC8vIERvbid0IHNlbGVjdCBhZGFwdGVyIGlmIGl0J3MgYXN5bmMgYW5kIGEgY2FsbGJhY2sgd2Fzbid0IHByb3ZpZGVkLlxuICAgICAgICAgICAgaWYgKGFkYXB0ZXIucHJvdG90eXBlIGluc3RhbmNlb2YgQWJzdHJhY3RBc3luY0xvY2FsU3RvcmFnZUFkYXB0ZXIgJiYgIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0b3JhZ2UgPSBpbml0aWFsaXplQWRhcHRlcihhZGFwdGVyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgdG8gbWVtb3J5LWJhc2VkIG5vbi1wZXJzaXN0ZW50IHN0b3JhZ2UuXG4gICAgaWYgKCFzdG9yYWdlKSB7XG4gICAgICAgIHN0b3JhZ2UgPSBpbml0aWFsaXplQWRhcHRlcihNZW1vcnlTdG9yYWdlQWRhcHRlcik7XG4gICAgfVxuXG4gICAgLy8gVHJpZ2dlciBjYWxsYmFjayB3aGVuIGFkYXB0ZXIgZmluaXNoZXMgbG9hZGluZyAob3IgaW5zdGFudGx5LCBpZiBub3QgcmVxdWlyZWQgdG8gd2FpdCkuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChzdG9yYWdlIGluc3RhbmNlb2YgQWJzdHJhY3RBc3luY0xvY2FsU3RvcmFnZUFkYXB0ZXIpIHtcbiAgICAgICAgICAgIHN0b3JhZ2Uud2FpdEZvclNlcnZpY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHN0b3JhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjayhzdG9yYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RvcmFnZTtcbn1cbmNvbnN0IGFkYXB0ZXIgPSB3YWl0Rm9yU2VydmljZSgpO1xuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBhZGFwdGVyLmdldEl0ZW0oa2V5KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzSW4/OiBudW1iZXIpOiB2b2lkIHtcbiAgICByZXR1cm4gYWRhcHRlci5zZXRJdGVtKGtleSwgdmFsdWUsIGV4cGlyZXNJbik7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIHJldHVybiBhZGFwdGVyLnJlbW92ZUl0ZW0oa2V5KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRPYmplY3Qoa2V5OiBzdHJpbmcsIG86IE9iamVjdCk6IHZvaWQge1xuICAgIHJldHVybiBhZGFwdGVyLnNldE9iamVjdChrZXksIG8pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE9iamVjdChrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KTogT2JqZWN0IHtcbiAgICByZXR1cm4gYWRhcHRlci5nZXRPYmplY3Qoa2V5LCBkZWZhdWx0VmFsdWUpO1xufVxuIiwiaW1wb3J0ICogYXMgSlNPTlV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9KU09OJztcbmltcG9ydCBXZWJTREtUb2dnbGVzIGZyb20gXCIuL3RvZ2dsZXNcIjtcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVVbmRlZmluZWQobzogT2JqZWN0KTogT2JqZWN0IHtcbiAgICB2YXIgbzIgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIG8pIHtcbiAgICAgICAgaWYgKG9bcF0gIT0gbnVsbCAmJiBvW3BdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbzJbcF0gPSBvW3BdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvMjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uSGVscGVyKGNvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCB7fTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRGaWVsZDogZnVuY3Rpb24ocGF0aCkge1xuICAgICAgICAgICAgaWYgKCFwYXRoKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIHBhdGhzID0gcGF0aC5zcGxpdCgnLicpLFxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjb250ZXh0LFxuICAgICAgICAgICAgICAgIGk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXRocy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50W3BhdGhzW2ldXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudFtwYXRoc1tpXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eUJ5U2VyaWFsaXplZE5hbWUobzogT2JqZWN0LCBuYW1lOiBzdHJpbmcsIGNyZWF0ZU1pc3NpbmdPYmplY3RzOiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIW5hbWUpIHJldHVybiBvO1xuICAgIHZhciBvUmVzdWx0ID0gbztcbiAgICB2YXIgYXJOYW1lU2VnbWVudHMgPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgZm9yICh2YXIgaVNlZ21lbnQgPSAwOyBpU2VnbWVudCA8IGFyTmFtZVNlZ21lbnRzLmxlbmd0aDsgaVNlZ21lbnQrKykge1xuICAgICAgICB2YXIgc1NlZ21lbnQgPSBhck5hbWVTZWdtZW50c1tpU2VnbWVudF07XG4gICAgICAgIHZhciBzSW5kZXggPSBudWxsO1xuICAgICAgICAvL1N1cHBvcnQgZm9yIGFycmF5IGFjY2Vzcy4gaS5lLiBcIm9iai5wcm9wMVswXS5wcm9wMlwiXG4gICAgICAgIGlmIChzU2VnbWVudC5tYXRjaCgvXFxbWzAtOV0rXS8pKSB7XG4gICAgICAgICAgICBzSW5kZXggPSBOdW1iZXIoc1NlZ21lbnQubWF0Y2goL1xcW1swLTldK10vKVswXS5yZXBsYWNlKC9bXFxbXFxdXS9nLCAnJykpO1xuICAgICAgICB9XG4gICAgICAgIHNTZWdtZW50ID0gc1NlZ21lbnQuc3BsaXQoL1xcW1swLTldK10vKS5qb2luKCcnKTtcbiAgICAgICAgdmFyIHJlcyA9IChzSW5kZXggfHwgc0luZGV4ID09PSAwKSAmJiBvUmVzdWx0W3NTZWdtZW50XSA/IG9SZXN1bHRbc1NlZ21lbnRdW3NJbmRleF0gOiBvUmVzdWx0W3NTZWdtZW50XTtcbiAgICAgICAgaWYgKGNyZWF0ZU1pc3NpbmdPYmplY3RzICYmICFvUmVzdWx0W3NTZWdtZW50XSkge1xuICAgICAgICAgICAgb1Jlc3VsdFtzU2VnbWVudF0gPSB7fTtcbiAgICAgICAgfSBlbHNlIGlmIChjcmVhdGVNaXNzaW5nT2JqZWN0cyAmJiAhcmVzICYmIHJlcyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG9SZXN1bHRbc1NlZ21lbnRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcyB8fCByZXMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBvUmVzdWx0ID0gcmVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9SZXN1bHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcGVydHlCeVNlcmlhbGl6ZWROYW1lKG86IE9iamVjdCwgbmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdmFyIGFyTmFtZVNlZ21lbnRzID0gbmFtZS5zcGxpdCgnLicpO1xuICAgIHZhciBwcm9wZXJ0eU5hbWUgPSBhck5hbWVTZWdtZW50cy5wb3AoKTtcbiAgICBnZXRQcm9wZXJ0eUJ5U2VyaWFsaXplZE5hbWUobywgYXJOYW1lU2VnbWVudHMuam9pbignLicpLCB0cnVlKVtwcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG59XG5leHBvcnQgZnVuY3Rpb24gYWRkKG9UYXJnZXQ6IE9iamVjdCwgbzogT2JqZWN0LCBkb250T3ZlcnJpZGU/OiBib29sZWFuKTogdm9pZCB7XG4gICAgZm9yICh2YXIgcCBpbiBvKSB7XG4gICAgICAgIGlmICghZG9udE92ZXJyaWRlIHx8IHR5cGVvZiBvVGFyZ2V0W3BdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb1RhcmdldFtwXSA9IG9bcF07XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0SGFzaChvOiBhbnkpOiBzdHJpbmcge1xuICAgIHZhciBhciA9IFtdO1xuICAgIGZvciAodmFyIHAgaW4gbykge1xuICAgICAgICB2YXIgcztcblxuICAgICAgICBpZiAodHlwZW9mIG9bcF0gPT0gJ29iamVjdCcpIHMgPSBKU09OVXRpbHMuc2VyaWFsaXplKG9bcF0sIGZhbHNlKTtcbiAgICAgICAgZWxzZSBpZiAob1twXSkgcyA9IG9bcF0udG9TdHJpbmcoKTtcblxuICAgICAgICBhci5wdXNoKHAgKyAnPScgKyBzKTtcbiAgICB9XG4gICAgcmV0dXJuIGFyLnNvcnQoKS5qb2luKCcmJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0TXVybXVySGFzaChrZXk6IHN0cmluZywgc2VlZD86IG51bWJlcikge1xuICAgIGlmICghc2VlZCkgc2VlZCA9IDA7XG4gICAgdmFyIHJlbWFpbmRlciwgYnl0ZXMsIGgxLCBoMWIsIGMxLCBjMWIsIGMyLCBjMmIsIGsxLCBpO1xuXG4gICAgcmVtYWluZGVyID0ga2V5Lmxlbmd0aCAmIDM7IC8vIGtleS5sZW5ndGggJSA0XG4gICAgYnl0ZXMgPSBrZXkubGVuZ3RoIC0gcmVtYWluZGVyO1xuICAgIGgxID0gc2VlZDtcbiAgICBjMSA9IDB4Y2M5ZTJkNTE7XG4gICAgYzIgPSAweDFiODczNTkzO1xuICAgIGkgPSAwO1xuXG4gICAgd2hpbGUgKGkgPCBieXRlcykge1xuICAgICAgICBrMSA9IChrZXkuY2hhckNvZGVBdChpKSAmIDB4ZmYpIHwgKChrZXkuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgOCkgfCAoKGtleS5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAxNikgfCAoKGtleS5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAyNCk7XG4gICAgICAgICsraTtcblxuICAgICAgICBrMSA9ICgoazEgJiAweGZmZmYpICogYzEgKyAoKCgoazEgPj4+IDE2KSAqIGMxKSAmIDB4ZmZmZikgPDwgMTYpKSAmIDB4ZmZmZmZmZmY7XG4gICAgICAgIGsxID0gKGsxIDw8IDE1KSB8IChrMSA+Pj4gMTcpO1xuICAgICAgICBrMSA9ICgoazEgJiAweGZmZmYpICogYzIgKyAoKCgoazEgPj4+IDE2KSAqIGMyKSAmIDB4ZmZmZikgPDwgMTYpKSAmIDB4ZmZmZmZmZmY7XG5cbiAgICAgICAgaDEgXj0gazE7XG4gICAgICAgIGgxID0gKGgxIDw8IDEzKSB8IChoMSA+Pj4gMTkpO1xuICAgICAgICBoMWIgPSAoKGgxICYgMHhmZmZmKSAqIDUgKyAoKCgoaDEgPj4+IDE2KSAqIDUpICYgMHhmZmZmKSA8PCAxNikpICYgMHhmZmZmZmZmZjtcbiAgICAgICAgaDEgPSAoaDFiICYgMHhmZmZmKSArIDB4NmI2NCArICgoKChoMWIgPj4+IDE2KSArIDB4ZTY1NCkgJiAweGZmZmYpIDw8IDE2KTtcbiAgICB9XG5cbiAgICBrMSA9IDA7XG5cbiAgICBzd2l0Y2ggKHJlbWFpbmRlcikge1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBrMSBePSAoa2V5LmNoYXJDb2RlQXQoaSArIDIpICYgMHhmZikgPDwgMTY7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGsxIF49IChrZXkuY2hhckNvZGVBdChpICsgMSkgJiAweGZmKSA8PCA4O1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBrMSBePSBrZXkuY2hhckNvZGVBdChpKSAmIDB4ZmY7XG5cbiAgICAgICAgICAgIGsxID0gKChrMSAmIDB4ZmZmZikgKiBjMSArICgoKChrMSA+Pj4gMTYpICogYzEpICYgMHhmZmZmKSA8PCAxNikpICYgMHhmZmZmZmZmZjtcbiAgICAgICAgICAgIGsxID0gKGsxIDw8IDE1KSB8IChrMSA+Pj4gMTcpO1xuICAgICAgICAgICAgazEgPSAoKGsxICYgMHhmZmZmKSAqIGMyICsgKCgoKGsxID4+PiAxNikgKiBjMikgJiAweGZmZmYpIDw8IDE2KSkgJiAweGZmZmZmZmZmO1xuICAgICAgICAgICAgaDEgXj0gazE7XG4gICAgfVxuXG4gICAgaDEgXj0ga2V5Lmxlbmd0aDtcblxuICAgIGgxIF49IGgxID4+PiAxNjtcbiAgICBoMSA9ICgoaDEgJiAweGZmZmYpICogMHg4NWViY2E2YiArICgoKChoMSA+Pj4gMTYpICogMHg4NWViY2E2YikgJiAweGZmZmYpIDw8IDE2KSkgJiAweGZmZmZmZmZmO1xuICAgIGgxIF49IGgxID4+PiAxMztcbiAgICBoMSA9ICgoaDEgJiAweGZmZmYpICogMHhjMmIyYWUzNSArICgoKChoMSA+Pj4gMTYpICogMHhjMmIyYWUzNSkgJiAweGZmZmYpIDw8IDE2KSkgJiAweGZmZmZmZmZmO1xuICAgIGgxIF49IGgxID4+PiAxNjtcblxuICAgIHJldHVybiBoMSA+Pj4gMDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShvYmo6IGFueSwgZGVlcENvcHk/OiBib29sZWFuLCBpZ25vcmVGdW5jdGlvbnM/OiBib29sZWFuLCBtYXhMZXZlbDogbnVtYmVyID0gMjAsIGxldmVsOiBudW1iZXIgPSAwLCBpZ25vcmVDb250ZXh0PzogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKG9iaiA9PT0gd2luZG93KSByZXR1cm4gd2luZG93OyAvLyBkbyBub3QgY2xvbmUgdGhlIHdpbmRvdyBvYmplY3RcbiAgICBpZiAobGV2ZWwgPiBtYXhMZXZlbCkgcmV0dXJuIG51bGw7IC8vIFRvbyBkZWVwXG4gICAgaWYgKHR5cGVvZiBvYmogPT0gJ3VuZGVmaW5lZCcgfHwgb2JqID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFdlYlNES1RvZ2dsZXMuaXNPbigncmVtb3ZlVW5kZWZpbmVkUHJvcGVydGllcycpID8gb2JqIDogbnVsbDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT0gJ2Z1bmN0aW9uJyAmJiBpZ25vcmVGdW5jdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIGlmIChvYmouY29uc3RydWN0b3IgPT0gQXJyYXkpIHtcbiAgICAgICAgdmFyIGFyID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIWlnbm9yZUZ1bmN0aW9ucyB8fCB0eXBlb2Ygb2JqW2ldICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVlcENvcHkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJbaV0gPSBjbG9uZShvYmpbaV0sIGRlZXBDb3B5LCBpZ25vcmVGdW5jdGlvbnMsIG1heExldmVsLCBsZXZlbCArIDEsIGlnbm9yZUNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFyW2ldID0gb2JqW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXI7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09ICdvYmplY3QnKSB7XG4gICAgICAgIHZhciBvID0ge307XG4gICAgICAgIGZvciAodmFyIHAgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoaWdub3JlQ29udGV4dCAmJiBwID09ICdjb250ZXh0JykgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIWlnbm9yZUZ1bmN0aW9ucyB8fCB0eXBlb2Ygb2JqW3BdICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVlcENvcHkpIHtcbiAgICAgICAgICAgICAgICAgICAgb1twXSA9IGNsb25lKG9ialtwXSwgZGVlcENvcHksIGlnbm9yZUZ1bmN0aW9ucywgbWF4TGV2ZWwsIGxldmVsICsgMSwgaWdub3JlQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb1twXSA9IG9ialtwXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG87XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoYXJnczogT2JqZWN0W10sIGlzRGVlcE1lcmdlPzogYm9vbGVhbik6IE9iamVjdDtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShhcmdzOiBhbnlbXSwgaXNEZWVwTWVyZ2U/OiBib29sZWFuKTogT2JqZWN0IHtcbiAgICB2YXIgbyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJnc1tpXSAmJiBhcmdzW2ldLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yICh2YXIgdSA9IDA7IHUgPCBhcmdzW2ldLmxlbmd0aDsgdSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBhcmdzW2ldW3VdKSB7XG4gICAgICAgICAgICAgICAgICAgIG9bcF0gPSBhcmdzW2ldW3VdW3BdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE1lcmdlIG9iamVjdHMuXG4gICAgICAgICAgICBpZiAoIWlzRGVlcE1lcmdlKSB7XG4gICAgICAgICAgICAgICAgLy8gRmxhdCBtZXJnZS5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwIGluIGFyZ3NbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgb1twXSA9IGFyZ3NbaV1bcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBEZWVwIG1lcmdlLlxuICAgICAgICAgICAgICAgIGZvciAodmFyIHAgaW4gYXJnc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICAvL3dlIG92ZXJyaWRlIHByaW1pdGl2ZSAvIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb1twXSAhPT0gJ29iamVjdCcgfHwgb1twXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvW3BdID0gYXJnc1tpXVtwXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9bcF0gPSBtZXJnZShbb1twXSwgYXJnc1tpXVtwXV0sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVuZmxhdHRlbihkYXRhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW4gfSk6IE9iamVjdCB7XG4gICAgaWYgKE9iamVjdChkYXRhKSAhPT0gZGF0YSB8fCBBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGxldCBwIGluIGRhdGEpIHtcbiAgICAgICAgbGV0IGN1ciA9IHJlc3VsdDtcbiAgICAgICAgbGV0IHByb3AgPSAnJztcbiAgICAgICAgY29uc3QgcGFydHMgPSBwLnJlcGxhY2UoL1xcWyhbMC05XSldLywgJy4kMScpLnNwbGl0KCcuJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9ICFpc05hTihOdW1iZXIocGFydHNbaV0pKTtcbiAgICAgICAgICAgIGN1ciA9IGN1cltwcm9wXSB8fCAoY3VyW3Byb3BdID0gaWR4ID8gW10gOiB7fSk7XG4gICAgICAgICAgICBwcm9wID0gcGFydHNbaV07XG4gICAgICAgIH1cbiAgICAgICAgY3VyW3Byb3BdID0gZGF0YVtwXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFsnJ10gfHwge307XG59XG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihkYXRhOiBhbnksIHdpdGhCcmFja2V0ID0gZmFsc2UpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW4gfSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZnVuY3Rpb24gcmVjdXJzZShjdXI6IGFueSwgcHJvcDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChPYmplY3QoY3VyKSAhPT0gY3VyKSB7XG4gICAgICAgICAgICByZXN1bHRbcHJvcF0gPSBjdXI7XG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjdXIpKSB7XG4gICAgICAgICAgICBjb25zdCBsID0gY3VyLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5lc3RlZFByb3BlcnR5ID0gd2l0aEJyYWNrZXQgPyBgJHtwcm9wfVske2l9XWAgOiBgJHtwcm9wfS4ke2l9YDtcbiAgICAgICAgICAgICAgICByZWN1cnNlKGN1cltpXSwgcHJvcCA/IG5lc3RlZFByb3BlcnR5IDogU3RyaW5nKGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W3Byb3BdID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaXNFbXB0eSA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHAgaW4gY3VyKSB7XG4gICAgICAgICAgICAgICAgaXNFbXB0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJlY3Vyc2UoY3VyW3BdLCBwcm9wID8gYCR7cHJvcH0uJHtwfWAgOiBwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0VtcHR5ICYmIHByb3AgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W3Byb3BdID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVjdXJzZShkYXRhLCAnJyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0UHJvcGVydGllcyhzcmM6IGFueSwgZGVzdD86IGFueSwgc2NoZW1hPzogU3RyaW5nKTogT2JqZWN0IHtcbiAgICBpZiAoc3JjID09IG51bGwpIHJldHVybjtcbiAgICBpZiAoZGVzdCA9PSBudWxsKSBkZXN0ID0ge307XG4gICAgaWYgKHNyYy5jb25zdHJ1Y3RvciA9PSBBcnJheSkge1xuICAgICAgICBmb3IgKHZhciBpU3JjID0gMDsgaVNyYyA8IHNyYy5sZW5ndGg7IGlTcmMrKykge1xuICAgICAgICAgICAgZXh0cmFjdFByb3BlcnRpZXMoc3JjW2lTcmNdLCBkZXN0LCBzY2hlbWEpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChzY2hlbWEpIHtcbiAgICAgICAgdmFyIGFyU2NoZW1hID0gc2NoZW1hLnNwbGl0KCd8Jyk7XG4gICAgICAgIHZhciBzcmNMQ2FzZSA9IHt9O1xuICAgICAgICBmb3IgKHZhciBmaWVsZE5hbWUgaW4gc3JjKSB7XG4gICAgICAgICAgICBzcmNMQ2FzZVtmaWVsZE5hbWUudG9Mb3dlckNhc2UoKV0gPSAxO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJTY2hlbWEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBmaWVsZE5hbWUyID0gYXJTY2hlbWFbaV07XG4gICAgICAgICAgICBpZiAoc3JjTENhc2VbZmllbGROYW1lMi50b0xvd2VyQ2FzZSgpXSkgZGVzdFtmaWVsZE5hbWUyXSA9IHNyY1tmaWVsZE5hbWUyXTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRlc3QgPSBjbG9uZShzcmMsIGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc3Q7XG59XG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFByb3BlcnR5KHNyYzogYW55LCBwYXJhbU5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgdmFyIHBhcmFtcztcbiAgICByZXR1cm4gZXh0cmFjdFByb3BlcnRpZXMoc3JjLCBwYXJhbXMsIHBhcmFtTmFtZSlbcGFyYW1OYW1lXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRvT2JqZWN0KHN0cjogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGFyc2VkVmFsID0gd2luZG93WydKU09OJ10ucGFyc2Uoc3RyKTtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWRWYWwgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWRWYWw7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9wZXJ0aWVzUHJlZml4KG9iajogT2JqZWN0ID0ge30sIHByZWZpeDogc3RyaW5nIHwgUmVnRXhwID0gJycpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKGFjYywgY3VycikgPT4gKE9iamVjdC5hc3NpZ24oYWNjLCB7W2N1cnIucmVwbGFjZShwcmVmaXgsJycpXTogb2JqW2N1cnJdfSkpLHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJlZml4VG9Qcm9wZXJ0aWVzKG9iajogT2JqZWN0ID0ge30sIHByZWZpeDogc3RyaW5nID0gJycpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICAgIGlmIChrZXkuaW5kZXhPZihwcmVmaXgpICE9PSAwKSB7XG4gICAgICAgICAgICBhY2NbYCR7cHJlZml4fSR7a2V5fWBdID0gb2JqW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IG9ialtrZXldO1xuICAgICAgICB9XG4gICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVPYmplY3RLZXlzVG9Mb3dlckNhc2Uob2JqZWN0OiBPYmplY3QpOiBPYmplY3Qge1xuICAgIC8vIE5vcm1hbGl6ZSBhbGwga2V5cyB0byBsb3dlcmNhc2UgaW4gYWRkaXRpb24gdG8gdGhlaXIgb3JpZ2luYWwgY2FzaW5nLlxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgICAgICBvYmplY3Rba2V5LnRvTG93ZXJDYXNlKCldID0gb2JqZWN0W2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZU9iamVjdEtleXMob2JqOiBPYmplY3QpOiBPYmplY3Qge1xuICAgIGxldCBkZWNvZGVPYmplY3RLZXlzID0ge307XG4gICAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgICAgICBsZXQgZGVjb2RlZEtleSA9IGtleTtcbiAgICAgICAgd2hpbGUgKGRlY29kZWRLZXkuaW5kZXhPZignJScpICE9PSAtMSkge1xuICAgICAgICAgICAgZGVjb2RlZEtleSA9IGRlY29kZVVSSUNvbXBvbmVudChkZWNvZGVkS2V5KTtcbiAgICAgICAgfVxuICAgICAgICBkZWNvZGVPYmplY3RLZXlzW2RlY29kZWRLZXldID0gb2JqW2tleV07XG4gICAgfVxuICAgIHJldHVybiBkZWNvZGVPYmplY3RLZXlzO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmFtVmFsdWUoc3RyOiBzdHJpbmcsIGtleTogc3RyaW5nLCBkZWw6IHN0cmluZyA9ICcmJyk6IHN0cmluZyB7XG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTkyMDY5Ny9ob3ctdG8tZ2V0LWhhc2gtdmFsdWUtaW4tYS11cmwtaW4tanNcbiAgICBjb25zdCBtYXRjaGVzID0gc3RyLm1hdGNoKG5ldyBSZWdFeHAoYCR7a2V5fT0oW14ke2RlbH1dKilgKSk7XG4gICAgcmV0dXJuIG1hdGNoZXMgPyBtYXRjaGVzWzFdIDogbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXFQYXJhbVZhbHVlKHN0cjogc3RyaW5nLCBrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgdmFsID0gZ2V0UGFyYW1WYWx1ZShzdHIsIGtleSk7XG4gICAgcmV0dXJuIHZhbCA/IGRlY29kZVVSSUNvbXBvbmVudCh2YWwpIDogbnVsbDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB0cmltKHM6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHMucmVwbGFjZSgvXlxccyooXFxTKiguKlxcUyk/KVxccyokLywgJyQxJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KHM6IHN0cmluZywgLi4ucmVzdDogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBpZiAoYXJndW1lbnRzW2kgKyAxXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzID0gcy5zcGxpdCgneycgKyBpICsgJ30nKS5qb2luKGFyZ3VtZW50c1tpICsgMV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUoczogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcy5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHMuc3Vic3RyaW5nKDEpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuZHNXaXRoKHM6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcy5pbmRleE9mKHN1ZmZpeCwgcy5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLiorP149IToke30oKXxcXFtcXF1cXC9cXFxcXSkvZywgJ1xcXFwkMScpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VBbGwoc3RyOiBzdHJpbmcsIGZpbmQ6IHN0cmluZywgcmVwbGFjZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIWZpbmQpIHJldHVybiBzdHI7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKGZpbmQpLCAnZycpLCByZXBsYWNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ29tbWFTZXBhcmF0ZWRWYWx1ZXMoc3RyMTogc3RyaW5nID0gJycsIHN0cjI6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcbiAgICBjb25zdCBhcnIgPSBzdHIxLmNvbmNhdCgnLCcsIHN0cjIpLnNwbGl0KCcsJyk7XG4gICAgcmV0dXJuIGdpZ3lhLnV0aWxzLmFycmF5LmdldFVuaXF1ZVZhbHVlcyhhcnIpLmZpbHRlcih4ID0+IHgpLmpvaW4oJywnKTtcbn1cbiIsImltcG9ydCAqIGFzIG9iamVjdFV0aWxzIGZyb20gJy4vb2JqZWN0JztcblxuY2xhc3MgV2ViU0RLVG9nZ2xlcyB7XG4gICAgaGFzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5fdG9nZ2xlc1trZXldICE9ICd1bmRlZmluZWQnO1xuICAgIH1cblxuICAgIGdldDxUID0gYW55PihrZXk6IHN0cmluZyk6IFQge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG9nZ2xlc1trZXldIGFzIFQ7XG4gICAgfVxuXG4gICAgaXNPbihrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiB0aGlzLmdldChrZXkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IF90b2dnbGVzKCkge1xuICAgICAgICByZXR1cm4gb2JqZWN0VXRpbHMubWVyZ2UoW1xuICAgICAgICAgICAgdGhpcy5fZ2xvYmFsQ29uZlRvZ2dsZXMsXG4gICAgICAgICAgICB0aGlzLl93ZWJTZGtDb25maWdUb2dnbGVzXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IF9nbG9iYWxDb25mVG9nZ2xlcygpIHtcbiAgICAgICAgcmV0dXJuIGdpZ3lhLnRoaXNTY3JpcHQ/Lmdsb2JhbENvbmY/LnRvZ2dsZXMgfHwge307XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgX3dlYlNka0NvbmZpZ1RvZ2dsZXMoKSB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZXMgPSBnaWd5YS5fPy5jb25maWc/LnRvZ2dsZXMgfHwge307XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0b2dnbGVzKS5yZWR1Y2UoKG5ld1RvZ2dsZXMsIGtleSkgPT4ge1xuICAgICAgICAgICAgbmV3VG9nZ2xlc1trZXldID0gdG9nZ2xlc1trZXldID09PSAnb24nO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3VG9nZ2xlcztcbiAgICAgICAgfSwge30pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBXZWJTREtUb2dnbGVzKCk7XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNFeHBsaWNpdFRydWUodmFsOiBhbnkpOiBib29sZWFuIHtcbiAgICB2YXIgbGMgPSAoJycgKyB2YWwpLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGxjID09ICd0cnVlJyB8fCBsYyA9PSAnMSc7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNFeHBsaWNpdEZhbHNlKHZhbDogYW55KTogYm9vbGVhbiB7XG4gICAgdmFyIGxjID0gKCcnICsgdmFsKS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBsYyA9PSAnZmFsc2UnIHx8IGxjID09ICcwJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0xhdGVyVGhhbk5vdyhleHBpcmF0aW9uVGltZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGV4cGlyYXRpb25UaW1lID4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gYWxsRGVmaW5lZE9yQWxsVW5kZWZpbmVkKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBhbnlVbmRlZmluZWQgPSBhcmdzLnNvbWUoeCA9PiB0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgIGNvbnN0IGFueURlZmluZWQgPSBhcmdzLnNvbWUoeCA9PiB0eXBlb2YgeCAhPT0gJ3VuZGVmaW5lZCcpO1xuICAgIHJldHVybiAoYW55RGVmaW5lZCAmJiAhYW55VW5kZWZpbmVkKSB8fCAoIWFueURlZmluZWQgJiYgYW55VW5kZWZpbmVkKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGwoKTogeyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH0ge1xuICAgIHZhciBzY3JPZlggPSAwLFxuICAgICAgICBzY3JPZlkgPSAwO1xuICAgIGlmICh0eXBlb2Ygd2luZG93LnBhZ2VZT2Zmc2V0ID09ICdudW1iZXInKSB7XG4gICAgICAgIHNjck9mWSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgc2NyT2ZYID0gd2luZG93LnBhZ2VYT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keSAmJiAoZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKSkge1xuICAgICAgICBzY3JPZlkgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgc2NyT2ZYID0gZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSkge1xuICAgICAgICBzY3JPZlkgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICBzY3JPZlggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB9XG4gICAgcmV0dXJuIHsgbGVmdDogc2NyT2ZYLCB0b3A6IHNjck9mWSB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEZ1bGxTaXplKCk6IHsgdzogbnVtYmVyOyBoOiBudW1iZXIgfSB7XG4gICAgdmFyIGRlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHZhciBkYiA9IGRvY3VtZW50LmJvZHk7XG5cbiAgICB2YXIgaCA9IGRlLmNsaWVudEhlaWdodDtcbiAgICBpZiAoaCA9PSAwKSBoID0gZGIuY2xpZW50SGVpZ2h0O1xuICAgIHZhciB3ID0gZGUuY2xpZW50V2lkdGg7XG4gICAgaWYgKHcgPT0gMCkgdyA9IGRiLmNsaWVudFdpZHRoO1xuICAgIHJldHVybiB7IHc6IHcsIGg6IGggfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcmllbnRhdGlvbigpOiBudW1iZXIge1xuICAgIHZhciBvcmllbnRhdGlvbiA9IHBhcnNlSW50KCh3aW5kb3dbJ29yaWVudGF0aW9uJ10gYXMgc3RyaW5nKSB8fCAnMCcpO1xuICAgIGlmIChvcmllbnRhdGlvbiA8IDApIG9yaWVudGF0aW9uICs9IDM2MDtcblxuICAgIHJldHVybiBvcmllbnRhdGlvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRPdXRlclNpemUoKTogeyB3OiBudW1iZXI7IGg6IG51bWJlciB9IHtcbiAgICB2YXIgaDtcbiAgICB2YXIgdztcblxuICAgIHZhciBkZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB2YXIgZGIgPSBkb2N1bWVudC5ib2R5O1xuXG4gICAgaWYgKHdpbmRvdy5vdXRlckhlaWdodCkge1xuICAgICAgICBoID0gd2luZG93Lm91dGVySGVpZ2h0O1xuICAgICAgICB3ID0gd2luZG93Lm91dGVyV2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaCA9IGRlLmNsaWVudEhlaWdodDtcbiAgICAgICAgaWYgKGggPT0gMCkgaCA9IGRiLmNsaWVudEhlaWdodDtcbiAgICAgICAgdyA9IGRlLmNsaWVudFdpZHRoO1xuICAgICAgICBpZiAodyA9PSAwKSB3ID0gZGIuY2xpZW50V2lkdGg7XG4gICAgfVxuICAgIHJldHVybiB7IHc6IHcsIGg6IGggfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbm5lclNpemUoKTogeyB3OiBudW1iZXI7IGg6IG51bWJlciB9IHtcbiAgICB2YXIgaDtcbiAgICB2YXIgdztcblxuICAgIHZhciBkZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB2YXIgZGIgPSBkb2N1bWVudC5ib2R5O1xuXG4gICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICBoID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaCA9IGRlLmNsaWVudEhlaWdodDtcbiAgICAgICAgaWYgKGggPT0gMCkgaCA9IGRiLmNsaWVudEhlaWdodDtcbiAgICAgICAgdyA9IGRlLmNsaWVudFdpZHRoO1xuICAgICAgICBpZiAodyA9PSAwKSB3ID0gZGIuY2xpZW50V2lkdGg7XG4gICAgfVxuICAgIHJldHVybiB7IHc6IHcsIGg6IGggfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRNaWRkbGVDZW50ZXIoKTogeyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH0ge1xuICAgIHZhciBzY3JvbGwgPSBnZXRTY3JvbGwoKTtcbiAgICB2YXIgc2l6ZSA9IGdldElubmVyU2l6ZSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogc2Nyb2xsLnRvcCArIE1hdGguZmxvb3Ioc2l6ZS5oIC8gMiksXG4gICAgICAgIGxlZnQ6IHNjcm9sbC5sZWZ0ICsgTWF0aC5mbG9vcihzaXplLncgLyAyKSxcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVjdEhvcml6b250YWxseVZpc2libGUocmVjdDogeyB0b3A6IG51bWJlcjsgYm90dG9tOiBudW1iZXI7IGxlZnQ6IG51bWJlcjsgcmlnaHQ6IG51bWJlciB9KSB7XG4gICAgdmFyIHNjcm9sbCA9IGdldFNjcm9sbCgpO1xuICAgIHZhciBzaXplID0gZ2V0SW5uZXJTaXplKCk7XG4gICAgcmV0dXJuIHJlY3QubGVmdCA+PSBzY3JvbGwubGVmdCAmJiByZWN0LnJpZ2h0IDw9IHNjcm9sbC5sZWZ0ICsgc2l6ZS53O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVjdEZ1bGx5VmlzaWJsZShyZWN0OiB7IHRvcDogbnVtYmVyOyBib3R0b206IG51bWJlcjsgbGVmdDogbnVtYmVyOyByaWdodDogbnVtYmVyIH0pIHtcbiAgICB2YXIgc2Nyb2xsID0gZ2V0U2Nyb2xsKCk7XG4gICAgdmFyIHNpemUgPSBnZXRJbm5lclNpemUoKTtcbiAgICByZXR1cm4gcmVjdC50b3AgPj0gc2Nyb2xsLnRvcCAmJiByZWN0LmJvdHRvbSA8PSBzY3JvbGwudG9wICsgc2l6ZS5oICYmIHJlY3QubGVmdCA+PSBzY3JvbGwubGVmdCAmJiByZWN0LnJpZ2h0IDw9IHNjcm9sbC5sZWZ0ICsgc2l6ZS53O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbEludG9WaWV3KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5zY3JvbGxJbnRvVmlldykge1xuICAgICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtnZXRTdG9yYWdlRG9tYWluLCByZXNvbHZlQXBpRG9tYWlufSBmcm9tICcuL1V0aWxzL2RvbWFpbnMnO1xuaW1wb3J0IHtJV2ViU2RrQ29uZmlnfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lXZWJTZGtDb25maWcnO1xuaW1wb3J0IHtVcml9IGZyb20gJy4vVXRpbHMvVXJpJztcblxuY29uc3QgZGVmYXVsdFN0b3JhZ2VEb21haW4gPSAoKSA9PiBnaWd5YT8uY29uZmlnSG9zdG5hbWVPdmVycmlkZSB8fCBnZXRTdG9yYWdlRG9tYWluKCk7XG5jb25zdCBkZWZhdWx0QXBpRG9tYWluID0gKCkgPT4gcmVzb2x2ZUFwaURvbWFpbigpXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNzb0NvbmZpZ1Jlc3BvbnNlIHtcbiAgICBhcGlLZXk/OiBzdHJpbmc7XG4gICAgcnBDb250ZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb25zZW50U3RhdHVzUmVzcG9uc2Uge1xuICBjb25zZW50U3RhdHVzOiB7XG4gICAgaXNNaWdyYXRlZDogYm9vbGVhbjtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2RrQ29uZmlnKGRvbWFpbjogc3RyaW5nID0gZGVmYXVsdFN0b3JhZ2VEb21haW4oKSwgcmV0cmllczogbnVtYmVyID0gMCk6IFByb21pc2U8SVdlYlNka0NvbmZpZz4ge1xuICAgIGNvbnN0IHthcGlLZXl9ID0gZ2lneWE7XG4gICAgcmV0dXJuIGF3YWl0IFVyaS5wYXJzZShgJHtkb21haW59L3Nkay5jb25maWcuZ2V0YClcbiAgICAgICAgLmFkZFRvU2VhcmNoKHthcGlLZXksIGh0dHBTdGF0dXNDb2RlczogdHJ1ZX0pXG4gICAgICAgIC5mZXRjaDxJV2ViU2RrQ29uZmlnPihyZXRyaWVzKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNzb0NvbnRleHQoc3NvVG9rZW46IHN0cmluZywgZG9tYWluOiBzdHJpbmcgPSBkZWZhdWx0QXBpRG9tYWluKCksIHJldHJpZXM6IG51bWJlciA9IDApOiBQcm9taXNlPElTc29Db25maWdSZXNwb25zZT4ge1xuICAgIGNvbnN0IHthcGlLZXk6IEFQSUtleX0gPSBnaWd5YTtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgVXJpLnBhcnNlKGAke2RvbWFpbn0vYWNjb3VudHMuc3NvLmdldENvbnRleHRgKVxuICAgICAgICAgICAgLmFkZFRvU2VhcmNoKHtBUElLZXksIHNzb1Rva2VuLCBmb3JtYXQ6ICdqc29uJ30pXG4gICAgICAgICAgICAuZmV0Y2g8SVNzb0NvbmZpZ1Jlc3BvbnNlPihyZXRyaWVzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgIH1cbn1cblxuLy8gQ29uc2VudCBzdGF0dXMgY3VycmVudGx5IHJldHVybiBvbmx5IGJ5IGFwaSBkb21haW4gYmVjYXVzZSB0aGUgY29uZmlndXJhdGlvbiBpcyBzZXQgYnkgbWlub3IgREMoIHNob3VsZCBiZSBzYXZlIG9uIG1ham9yIGFsd2F5cylcbi8vIFdlIHNob3VsZCBjaGFuZ2UgdGhlIGdpZ3lhLl8uZ2V0QXBpRG9tYWluKCdhY2NvdW50cycpIHRvIGRlZmF1bHRTdG9yYWdlRG9tYWluIG9uY2UgdGhlIGNvbmZpZyBpcyB1cGRhdGVkLlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvbnNlbnRTdGF0dXMoY29uZmlnPzogeyBkb21haW46IHN0cmluZywgcmV0cmllczogbnVtYmVyIH0pOiBQcm9taXNlPElDb25zZW50U3RhdHVzUmVzcG9uc2U+e1xuICAgIGNvbnN0IGRvbWFpbiA9IGNvbmZpZz8uZG9tYWluIHx8IGdpZ3lhLl8uZ2V0QXBpRG9tYWluKCdhY2NvdW50cycpXG4gICAgY29uc3QgcmV0cmllcyA9IGNvbmZpZz8ucmV0cmllcyB8fCAwXG4gICAgY29uc3QgeyBhcGlLZXkgfSA9IGdpZ3lhO1xuICAgIGNvbnN0IHVybCA9IGAke2RvbWFpbn0vc2RrLmdldENvbnNlbnRTdGF0dXNgXG4gICAgXG4gICAgcmV0dXJuIGF3YWl0IFVyaS5wYXJzZSh1cmwpXG4gICAgICAuYWRkVG9TZWFyY2goeyBhcGlLZXkgfSlcbiAgICAgIC5mZXRjaDxJQ29uc2VudFN0YXR1c1Jlc3BvbnNlPihyZXRyaWVzKVxufVxuIiwiXG5sZXQgc2VsZWN0ZWRDZG5Ib3N0c0luZGV4ID0gMDtcbmV4cG9ydCBjb25zdCBDRE5fSE9TVFMgPSB7XG4gICAgaHR0cDogWydjZG4uZ2lneWEuY29tJywgJ2NkbjEuZ2lneWEuY29tJywgJ2NkbjIuZ2lneWEuY29tJywgJ2NkbjMuZ2lneWEuY29tJ10sXG4gICAgaHR0cHM6IFsnY2Rucy5naWd5YS5jb20nLCAnY2RuczEuZ2lneWEuY29tJywgJ2NkbnMyLmdpZ3lhLmNvbScsICdjZG5zMy5naWd5YS5jb20nXSxcbn07XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2RuUmVzb3VyY2UocGF0aD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gZ2lneWEudGhpc1NjcmlwdCBtYXkgbm90IGV4aXN0IGlmIGxvYWRlZCBmb3Igc3NvT3JpZy5cbiAgICBsZXQgYmFzZURvbWFpbiA9IGdpZ3lhLnRoaXNTY3JpcHQ/LmJhc2VEb21haW4gPz8gJyc7XG4gICAgY29uc3QgcHJvdG9jb2wgPSBnaWd5YS50aGlzU2NyaXB0Py5wcm90b2NvbCA/PyAnaHR0cHMnO1xuXG4gICAgLy8gSWYgbm8gYmFzZSBkb21haW4gb3IgaWYgYmFzZSBkb21haW4gZW5kcyB3aXRoIC5naWd5YS5jb20sIHVzZSBHaWd5YSBDRE4uXG4gICAgLy8gT3RoZXJ3aXNlIHVzZSB0aGUgYmFzZSBkb21haW4uXG4gICAgaWYgKCFiYXNlRG9tYWluIHx8IC9jZG5zP1xcLmdpZ3lhXFwuY29tJC8udGVzdChiYXNlRG9tYWluKSkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFNjaGVtYVJlcG9zaXRvcnkgPSBDRE5fSE9TVFNbcHJvdG9jb2xdO1xuICAgICAgICBpZiAoc2VsZWN0ZWRTY2hlbWFSZXBvc2l0b3J5Lmxlbmd0aCA8PSBzZWxlY3RlZENkbkhvc3RzSW5kZXgpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkQ2RuSG9zdHNJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgYmFzZURvbWFpbiA9IHNlbGVjdGVkU2NoZW1hUmVwb3NpdG9yeVtzZWxlY3RlZENkbkhvc3RzSW5kZXgrK107XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlIHRoZSBwYXRoIHN0YXJ0cyB3aXRoIFwiL1wiLlxuICAgIGlmIChwYXRoKSB7XG4gICAgICAgIGlmIChwYXRoLmluZGV4T2YoJy8nKSAhPT0gMCkge1xuICAgICAgICAgICAgcGF0aCA9ICcvJyArIHBhdGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvdG9jb2wgKyAnOi8vJyArIGJhc2VEb21haW4gKyAocGF0aCB8fCAnJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0SW1nQ2RuUmVzb3VyY2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pLycpO1xufVxuIiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnc3JjL2NvcmUvU2VydmljZVByb3h5L3V0aWxzJztcbmltcG9ydCB7IElQcm94eVJlc3BvbnNlLCBJUHJveHlSZXF1ZXN0LCBpc1NpZ25hbFJlcXVlc3QsIElQcm94eVNpZ25hbFJlcXVlc3QgfSBmcm9tICdzcmMvY29yZS9TZXJ2aWNlUHJveHkvaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCB0eXBlIE1heWJlUHJvbWlzZUFueSA9IGFueSB8IFByb21pc2U8YW55PjtcbmV4cG9ydCB0eXBlIFN0b3BDYW5jZWxsZXJzID0gKCkgPT4gTWF5YmVQcm9taXNlQW55O1xuZXhwb3J0IGNsYXNzIFByb3h5TGlzdGVuZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlcnZpY2U6IE9iamVjdCxcbiAgICAgICAgICAgICAgICBwdWJsaWMgb3JpZ2luID0gdXRpbHMuZ2V0UGFyZW50VXJsKCksXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfYWxsb3dlZE1ldGhvZHMgPSB1dGlscy5nZXRBbGxDbGFzc01ldGhvZHNOYW1lcyhfc2VydmljZSksXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfdGFyZ2V0ID0gd2luZG93LnBhcmVudCxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF93aW4gPSB3aW5kb3cpIHt9XG5cbiAgICBwdWJsaWMgc3RvcENhbmNlbGxlcnM6IFN0b3BDYW5jZWxsZXJzW10gPSBbXTtcbiAgICBwdWJsaWMgb25TdG9wOiAoKSA9PiBNYXliZVByb21pc2VBbnk7XG5cbiAgICBwcml2YXRlIF9saXN0ZW5pbmcgPSBmYWxzZTtcblxuICAgIHB1YmxpYyBnZXQgaXNMaXN0ZW5pbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saXN0ZW5pbmc7XG4gICAgfVxuXG4gICAgcHVibGljIGxpc3RlbihwYXlsb2FkPzogYW55KSB7XG4gICAgICAgIGlmICghdGhpcy5pc0xpc3RlbmluZykge1xuICAgICAgICAgICAgdGhpcy5fd2luLnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQgd29ya2Fyb3VuZCBmb3IgSUU5LiBlbHNlIHdlJ2xsIGdldCBKU09OIGlzIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIHRoaXMuX3dpbi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5vblJlcXVlc3QsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBpZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICBzaWduYWw6ICdsaXN0ZW5pbmcnLFxuICAgICAgICAgICAgICAgICAgICByZXM6IHBheWxvYWQsXG4gICAgICAgICAgICAgICAgfSBhcyBJUHJveHlSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGlzdGVuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHBvc3RFcnJvcihyZXM6IElQcm94eVJlc3BvbnNlKSB7XG4gICAgICAgIHJlcy5zaWduYWwgPSAnZXJyb3InO1xuICAgICAgICB0aGlzLnBvc3RNZXNzYWdlKHJlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdG9wTGlzdGVuKCkge1xuICAgICAgICBpZiAodGhpcy5pc0xpc3RlbmluZykge1xuICAgICAgICAgICAgdGhpcy5fd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLm9uUmVxdWVzdCwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5pbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25SZXF1ZXN0ID0gYXN5bmMgKGU6IE1lc3NhZ2VFdmVudCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgICAvLyB0byBwcmVzZXJ2ZSBjb250ZXh0XG4gICAgICAgIGlmICh1dGlscy52YWxpZGF0ZU9yaWdpbih0aGlzLm9yaWdpbiwgZS5vcmlnaW4pKSB7XG4gICAgICAgICAgICBjb25zdCByZXEgPSBKU09OLnBhcnNlKGUuZGF0YSkgYXMgSVByb3h5UmVxdWVzdDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoaXNTaWduYWxSZXF1ZXN0KHJlcSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVTaWduYWxSZXF1ZXN0KHJlcSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9ybWFsIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVQcm94eVJlcXVlc3QocmVxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0RXJyb3IoeyByZXM6IGUubWVzc2FnZSB8fCBlLCBpZDogcmVxLmlkIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHByaXZhdGUgYXN5bmMgaGFuZGxlU2lnbmFsUmVxdWVzdChyZXE6IElQcm94eVNpZ25hbFJlcXVlc3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgc3dpdGNoIChyZXEuc2lnbmFsKSB7XG4gICAgICAgICAgICBjYXNlICdzdG9wJzpcbiAgICAgICAgICAgICAgICBjb25zdCBjYW5jZWwgPSBhd2FpdCB0aGlzLmdldENhbmNlbFJlc3VsdCgpO1xuICAgICAgICAgICAgICAgIGxldCByZXM6IElQcm94eVJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIGlmICghY2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcExpc3RlbigpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcGF5bG9hZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub25TdG9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkID0gdGhpcy5vblN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLnRoZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkID0gYXdhaXQgcGF5bG9hZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogcmVxLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmFsOiAnc3RvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXM6IHBheWxvYWQsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJlcS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hbDogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlczogY2FuY2VsLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RNZXNzYWdlKHJlcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRDYW5jZWxSZXN1bHQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgZm9yIChjb25zdCBzaG91bGRDYW5jZWxTdG9wIG9mIHRoaXMuc3RvcENhbmNlbGxlcnMpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBzaG91bGRDYW5jZWxTdG9wKCkgYXMgTWF5YmVQcm9taXNlQW55O1xuICAgICAgICAgICAgaWYgKHJlcy50aGVuKSB7XG4gICAgICAgICAgICAgICAgcmVzID0gYXdhaXQgcmVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzKSByZXR1cm4gcmVzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZVByb3h5UmVxdWVzdChyZXE6IElQcm94eVJlcXVlc3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZVJlcXVlc3QocmVxKTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5mb3J3YXJkVG9TZXJ2aWNlKHJlcSk7XG5cbiAgICAgICAgdGhpcy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBpZDogcmVxLmlkLFxuICAgICAgICAgICAgcmVzLFxuICAgICAgICB9IGFzIElQcm94eVJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHZhbGlkYXRlUmVxdWVzdChyZXE6IElQcm94eVJlcXVlc3QpIHtcbiAgICAgICAgaWYgKCFyZXEuaWQgfHwgIXJlcS5tZXRob2ROYW1lIHx8IHRoaXMuX2FsbG93ZWRNZXRob2RzLmluZGV4T2YocmVxLm1ldGhvZE5hbWUpIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgJ3Byb3h5IHJlcXVlc3QgaW4gaW52YWxpZCBmb3JtYXQnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBmb3J3YXJkVG9TZXJ2aWNlKHJlcTogSVByb3h5UmVxdWVzdCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IHRoaXMuX3NlcnZpY2VbcmVxLm1ldGhvZE5hbWVdIGFzIEZ1bmN0aW9uO1xuICAgICAgICBsZXQgcmVzdWx0ID0gbWV0aG9kLmFwcGx5KHRoaXMuX3NlcnZpY2UsIHJlcS5wYXJhbXMpIGFzIE1heWJlUHJvbWlzZUFueTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHBvc3RNZXNzYWdlKG1zZzogYW55KSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IHN0cmluZyA9IHR5cGVvZiBtc2cgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkobXNnKSA6IG1zZztcbiAgICAgICAgdGhpcy5fdGFyZ2V0LnBvc3RNZXNzYWdlKG1lc3NhZ2UsIHRoaXMub3JpZ2luKTtcbiAgICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIElQcm94eU1lc3NhZ2Uge1xuICAgIGlkOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIElQcm94eVJlcXVlc3QgZXh0ZW5kcyBJUHJveHlNZXNzYWdlIHtcbiAgICBtZXRob2ROYW1lOiBzdHJpbmc7XG4gICAgcGFyYW1zPzogYW55W107XG4gICAgaGVhZGVycz86IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9XG59XG5leHBvcnQgdHlwZSBQcm94eVNpZ25hbCA9ICdsaXN0ZW5pbmcnIHwgJ3N0b3AnIHwgJ2Vycm9yJztcbmV4cG9ydCBpbnRlcmZhY2UgSVByb3h5U2lnbmFsUmVxdWVzdCBleHRlbmRzIElQcm94eU1lc3NhZ2Uge1xuICAgIHNpZ25hbDogUHJveHlTaWduYWw7XG59XG5leHBvcnQgaW50ZXJmYWNlIElQcm94eVJlc3BvbnNlIGV4dGVuZHMgSVByb3h5TWVzc2FnZSB7XG4gICAgcmVzOiBhbnk7XG4gICAgc2lnbmFsPzogUHJveHlTaWduYWw7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTaWduYWxSZXF1ZXN0KHJlcTogSVByb3h5TWVzc2FnZSk6IHJlcSBpcyBJUHJveHlTaWduYWxSZXF1ZXN0IHtcbiAgICByZXR1cm4gQm9vbGVhbigocmVxIGFzIElQcm94eVNpZ25hbFJlcXVlc3QpLnNpZ25hbCk7XG59XG4iLCJleHBvcnQgY29uc3QgZ2V0UGFyZW50VXJsID0gKHdpbiA9IHdpbmRvdywgZG9jID0gZG9jdW1lbnQpID0+ICh3aW4ubG9jYXRpb24gIT0gd2luLnBhcmVudC5sb2NhdGlvbiA/IGRvYy5yZWZlcnJlciA6IGRvYy5sb2NhdGlvbi5ocmVmKTtcbmV4cG9ydCBjb25zdCBnZXRCb2R5RWxlbWVudCA9IChkb2MgPSBkb2N1bWVudCkgPT5cbiAgICBuZXcgUHJvbWlzZTxIVE1MRWxlbWVudD4ocmVzb2x2ZSA9PiB7XG4gICAgICAgIGlmIChkb2MuYm9keSkgcmVzb2x2ZShkb2MuYm9keSk7XG4gICAgICAgIGVsc2UgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiByZXNvbHZlKGRvYy5ib2R5KSk7XG4gICAgfSk7XG5leHBvcnQgY29uc3QgdmFsaWRhdGVPcmlnaW4gPSAob3JpZ2luOiBzdHJpbmcsIGNoZWNrZWQ6IHN0cmluZykgPT4gb3JpZ2luPy50b0xvd2VyQ2FzZSgpPy5pbmRleE9mKGNoZWNrZWQ/LnRvTG93ZXJDYXNlKCkpID09PSAwO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUlmcmFtZSA9ICh0aXRsZTogc3RyaW5nID0gJ0dpZ3lhIEZyYW1lJywgZG9jID0gZG9jdW1lbnQpID0+IHtcbiAgICBjb25zdCBpZnJhbWUgPSBkb2MuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgaWZyYW1lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBpZnJhbWUuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgaWZyYW1lLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgaWZyYW1lLnRpdGxlID0gdGl0bGU7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIHJldHVybiBpZnJhbWU7XG59O1xubGV0IF9jb3VudGVyID0gMTtcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUlkID0gKCkgPT4ge1xuICAgIHJldHVybiBTdHJpbmcoX2NvdW50ZXIrKyk7XG59O1xuZnVuY3Rpb24gaXNDbGFzcyh0eXBlOiBhbnl8KG5ldyAoKSA9PiBhbnkpKTogdHlwZSBpcyBuZXcgKCkgPT4gYW55IHtcbiAgICByZXR1cm4gISF0eXBlLnByb3RvdHlwZTtcbn1cbmV4cG9ydCBjb25zdCBnZXRBbGxDbGFzc01ldGhvZHNOYW1lcyA9ICh0eXBlOiBPYmplY3R8KG5ldyAoKSA9PiBhbnkpKTogc3RyaW5nW10gPT4ge1xuICAgIGxldCBwcm9wczogc3RyaW5nW10gPSBbXTtcblxuICAgIGxldCBwcm90byA9IGlzQ2xhc3ModHlwZSkgPyB0eXBlLnByb3RvdHlwZSA6IHR5cGU7XG4gICAgZG8ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLyoqIGluaXRpYWwgaW1wbGVtZW50YXRpb24gLSB1c2luZyBmaWx0ZXIgKiovXG4gICAgICAgICAgICBjb25zdCBsID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvdG8pXG4gICAgICAgICAgICAgICAgLy8gLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHByb3RvKS5tYXAocyA9PiBzLnRvU3RyaW5nKCkpKVxuICAgICAgICAgICAgICAgIC5tYXAocyA9PiBzLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgLnNvcnQoKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIChwLCBpLCBhcnIpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcHJvdG9bcF0gPT09ICdmdW5jdGlvbicgJiYgLy9vbmx5IHRoZSBtZXRob2RzXG4gICAgICAgICAgICAgICAgICAgICAgICBwICE9PSAnY29uc3RydWN0b3InICYmIC8vbm90IHRoZSBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgKGkgPT0gMCB8fCBwICE9PSBhcnJbaSAtIDFdKSAmJiAvL25vdCBvdmVycmlkaW5nIGluIHRoaXMgcHJvdG90eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pbmRleE9mKHApID09PSAtMSwgLy9ub3Qgb3ZlcnJpZGRlbiBpbiBhIGNoaWxkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHByb3BzID0gcHJvcHMuY29uY2F0KGwpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvKiogYnVnIGZpeCBpbXBsZW1lbnRhdGlvbiAtIHVzaW5nIGN1c3RvbSBvdXIgb3duIGZpbHRlciBsb2dpY1xuICAgICAgICAgICAgIGNhc2Ugb2YgQXJyYXkuZmlsdGVyIHBvbHlmaWxsIGNhdXNpbmcgXCJjYW4gbm90IHJlYWQgcHJvcGVydHkgJzAnIG9mIHVuZGVmaW5lZFwiICoqL1xuICAgICAgICAgICAgY29uc3QgYXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvdG8pXG4gICAgICAgICAgICAgICAgLy8gLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHByb3RvKS5tYXAocyA9PiBzLnRvU3RyaW5nKCkpKVxuICAgICAgICAgICAgICAgIC5tYXAocyA9PiBzLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgLnNvcnQoKTtcblxuICAgICAgICAgICAgY29uc3QgbCA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwID0gYXJyW2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcHJvdG9bcF0gPT09ICdmdW5jdGlvbicgJiYgLy9vbmx5IHRoZSBtZXRob2RzXG4gICAgICAgICAgICAgICAgICAgIHAgIT09ICdjb25zdHJ1Y3RvcicgJiYgLy9ub3QgdGhlIGNvbnN0cnVjdG9yXG4gICAgICAgICAgICAgICAgICAgIChpID09IDAgfHwgcCAhPT0gYXJyW2kgLSAxXSkgJiYgLy9ub3Qgb3ZlcnJpZGluZyBpbiB0aGlzIHByb3RvdHlwZVxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5pbmRleE9mKHApID09PSAtMVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAvL25vdCBvdmVycmlkZGVuIGluIGEgY2hpbGRcblxuICAgICAgICAgICAgICAgICAgICBsLnB1c2gocCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvcHMgPSBwcm9wcy5jb25jYXQobCk7XG4gICAgICAgIH1cbiAgICB9IHdoaWxlIChcbiAgICAgICAgKHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSkgJiYgLy93YWxrLXVwIHRoZSBwcm90b3R5cGUgY2hhaW5cbiAgICAgICAgT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSAvL25vdCB0aGUgdGhlIE9iamVjdCBwcm90b3R5cGUgbWV0aG9kcyAoaGFzT3duUHJvcGVydHksIGV0Yy4uLilcbiAgICApO1xuXG4gICAgcmV0dXJuIHByb3BzO1xufTtcbiIsImV4cG9ydCBjbGFzcyBHbG9iYWxQcm92aWRlciB7XG4gICAgcHVibGljIGRvY3VtZW50TG9jYXRpb24oKTogTG9jYXRpb24ge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb247XG4gICAgfVxuICAgIHB1YmxpYyBwb3N0TWVzc2FnZVRvUGFyZW50KG1lc3NhZ2U6IGFueSwgdGFyZ2V0T3JpZ2luOiBzdHJpbmcsIHRyYW5zZmVyPzogVHJhbnNmZXJhYmxlW10pOiB2b2lkIHtcbiAgICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZShtZXNzYWdlLCB0YXJnZXRPcmlnaW4sIHRyYW5zZmVyKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBHbG9iYWxQcm92aWRlcigpXG4iLCJpbXBvcnQgJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9HaWd5YUdsb2JhbHMnO1xuaW1wb3J0ICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9nZ2VyL21haW4nO1xuaW1wb3J0IHtpbnZva2VPblBhZ2VMb2FkfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvZnVuY3Rpb25zJztcbmltcG9ydCB7SVdlYlNka0NvbmZpZ30gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvaW50ZXJmYWNlcy9JV2ViU2RrQ29uZmlnJztcbmltcG9ydCB7U3NvfSBmcm9tICcuL3Nzbyc7XG5pbXBvcnQge1VyaX0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL1VyaSc7XG5pbXBvcnQge1Nzb1V0aWxzfSBmcm9tICcuL3Nzb1V0aWxzJztcbmltcG9ydCB7R1NFcnJvcnN9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9HU0Vycm9ycyc7XG5pbXBvcnQge2dldFN0b3JhZ2VEb21haW59IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9kb21haW5zJztcbmltcG9ydCB7Z2V0U2RrQ29uZmlnfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvYXBpQm9vdHN0cmFwJztcbmltcG9ydCB7UHJveHlMaXN0ZW5lcn0gZnJvbSAnc3JjL2NvcmUvU2VydmljZVByb3h5L1Byb3h5TGlzdGVuZXInO1xuXG5cbmludGVyZmFjZSBJU1NPUGFyYW1zIHtcbiAgICBBUElLZXk6IHN0cmluZztcbiAgICBzc29TZWdtZW50OiBzdHJpbmc7XG4gICAgc291cmNlS2V5OiBzdHJpbmc7XG4gICAgb3JpZ2luOiBzdHJpbmc7XG4gICAgb25lRnJhbWU/OiBib29sZWFuO1xufVxuXG4oYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcblxuICAgIGxldCB3ZWJTZGtDb25maWc6IElXZWJTZGtDb25maWc7XG4gICAgY29uc3Qgc3NvVXRpbHMgPSBuZXcgU3NvVXRpbHMoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVyaSA9IFVyaS5wYXJzZShzc29VdGlscy5nZXRQYWdlVXJsKCkpO1xuICAgICAgICBjb25zdCBxcyA9IHVyaS5zZWFyY2g7XG4gICAgICAgIGlmICghcXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZSA9PT0gJ29iamVjdCcgJiYgY29uc29sZS5sb2cpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGluaXQgU1NPIGlGcmFtZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRvIG5vdCBhbGxvdyBtdWx0aXBsZSBhcGlLZXlzIGluIHF1ZXJ5IHN0cmluZyAtIHNlY3VyaXR5IHZ1bG5lcmFiaWxpdHkgLSAjNzQ3MTIsICM3OTk0MVxuICAgICAgICBjb25zdCBmdWxseURlY29kZWRRdWVyeVN0cmluZyA9IHNzb1V0aWxzLmRlY29kZVVybChxcyk7XG4gICAgICAgIGlmIChmdWxseURlY29kZWRRdWVyeVN0cmluZy5tYXRjaCgvYXBpa2V5PS9naSkubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmVycm9yKCdtdWx0aXBsZSBhcGlLZXlzIGluIHF1ZXJ5IHN0cmluZyBhcmUgbm90IGFsbG93ZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBhcnNlIHBhcmFtcywgd2hpY2ggYXJlIHNldCBwZXJtYW5lbnRseS5cbiAgICAgICAgY29uc3QgcGFyYW1zOiBJU1NPUGFyYW1zID0gc3NvVXRpbHMuZGVzZXJpYWxpemUocXMpO1xuXG4gICAgICAgIGlmICghZ2lneWEuYXBpS2V5KSAvLyBmYWxsaW5nIGJhY2sgdG8gYXBpS2V5IGZyb20gcXVlcnkgc3RyaW5nIGluIGNhc2Ugc29tZXRoaW5nIHdlbnQgd3Jvbmcgb24gb3VyIGJhY2sgZW5kLlxuICAgICAgICAgICAgZ2lneWEuYXBpS2V5ID0gcGFyYW1zLkFQSUtleTtcblxuICAgICAgICBjb25zdCB7YXBpS2V5fSA9IGdpZ3lhO1xuXG4gICAgICAgIGNvbnN0IGNvbmZpZ0hvc3RuYW1lID0gd2luZG93LmxvY2F0aW9uPy5ob3N0bmFtZSB8fCBnZXRTdG9yYWdlRG9tYWluKCk7XG5cbiAgICAgICAgd2ViU2RrQ29uZmlnID0gYXdhaXQgZ2V0U2RrQ29uZmlnKGNvbmZpZ0hvc3RuYW1lLCAzKTtcbiAgICAgICAgaWYgKCFnaWd5YS5fKSB7XG4gICAgICAgICAgICBnaWd5YS5fID0ge30gYXMgYW55O1xuICAgICAgICB9XG4gICAgICAgIGdpZ3lhLl8uY29uZmlnID0ge1xuICAgICAgICAgICAgZmxhZ3M6IHdlYlNka0NvbmZpZy5mbGFncyxcbiAgICAgICAgICAgIHNzbzogd2ViU2RrQ29uZmlnLnNzbyxcbiAgICAgICAgICAgIHBsdWdpbnM6IHdlYlNka0NvbmZpZy5wbHVnaW5zLFxuICAgICAgICAgICAgaG9zdGVkUGFnZXNEb21haW46IHdlYlNka0NvbmZpZy5ob3N0ZWRQYWdlc0RvbWFpbixcbiAgICAgICAgICAgIHRvZ2dsZXM6IHtcbiAgICAgICAgICAgICAgICBsaW5rQWNjb3VudFYyOiB3ZWJTZGtDb25maWcudG9nZ2xlcz8ubGlua0FjY291bnRWMixcbiAgICAgICAgICAgICAgICBodHRwU3RhdHVzQ29kZXM6IHdlYlNka0NvbmZpZy50b2dnbGVzPy5odHRwU3RhdHVzQ29kZXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25zZW50OiB7XG4gICAgICAgICAgICAgICAgaGFzTGljZW5zZTogd2ViU2RrQ29uZmlnLmhhc0NvbnNlbnRMaWNlbnNlID8/IGZhbHNlLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gd2FpdGluZyBmb3IgYXN5bmMgcGFnZSBsb2FkICh3ZSB3YW50IHRvIHByZXNlcnZlIHN0YWNrIHRyYWNlIGluIGNhc2Ugb2YgZXhjZXB0aW9ucyBkdXJpbmcgc3NvLmluaXQpXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHIgPT4gaW52b2tlT25QYWdlTG9hZChyKSk7XG5cbiAgICAgICAgY29uc3Qgc3NvU2VydmljZSA9IG5ldyBTc28oYXBpS2V5LCBwYXJhbXMuc291cmNlS2V5LCBwYXJhbXMuc3NvU2VnbWVudCwgd2ViU2RrQ29uZmlnLnNzbywgc3NvVXRpbHMpO1xuXG4gICAgICAgIGlmKHBhcmFtcy5vbmVGcmFtZSkge1xuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBuZXcgUHJveHlMaXN0ZW5lcihzc29TZXJ2aWNlLCBwYXJhbXMub3JpZ2luKTtcbiAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3NvU2VydmljZS5pbml0KCk7XG4gICAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBzc29VdGlscy5kZXNlcmlhbGl6ZShzc29VdGlscy5nZXRGcmFnbWVudCgpKTtcbiAgICAgICAgaWYgKGZyYWdtZW50LmNhbGxiYWNrSUQgfHwgZnJhZ21lbnQuZCkge1xuICAgICAgICAgICAgc3NvVXRpbHMuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHN0YXR1czogJ0ZBSUxFRF9UT19MT0FEX1NTTycsXG4gICAgICAgICAgICAgICAgZXJyb3JDb2RlOiBHU0Vycm9ycy5ORVRXT1JLX0VSUk9SLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ2dpZ3lhOiBlcnJvciBsb2FkaW5nIHNzbyBmcmFtZScsXG4gICAgICAgICAgICAgICAgZSxcbiAgICAgICAgICAgICAgICBzc29Db25maWc6IHdlYlNka0NvbmZpZy5zc29cbiAgICAgICAgICAgIH0sIGZyYWdtZW50LmNhbGxiYWNrSUQsIGZyYWdtZW50LmQpO1xuICAgICAgICB9XG4gICAgfVxufSkoKTtcblxuZXhwb3J0IHtTc29VdGlscywgSVNTT1BhcmFtcywgU3NvIH07IiwiaW1wb3J0IHtcbiAgICBHZXRHcm91cFRva2VuUmVzcG9uc2UsXG4gICAgQ2FuYXJ5SW5kaWNhdGlvblJlc3BvbnNlLFxuICAgIEdldExvZ2luVG9rZW5FeHBSZXNwb25zZSxcbiAgICBGcmFtZVNldEdyb3VwVG9rZW5QYXJhbXMsXG4gICAgRnJhbWVMb2dvdXRQYXJhbXMsXG4gICAgRnJhbWVSZW1vdmVUb2tlblBhcmFtcyxcbiAgICBGcmFtZUdldEdyb3VwVG9rZW5QYXJhbXMsXG4gICAgRnJhbWVTZXRMb2dpblRva2VuRXhwUGFyYW1zLFxuICAgIEZyYW1lR2V0TG9naW5Ub2tlbkV4cFBhcmFtcyxcbiAgICBGcmFtZUNoZWNrVG9rZW5SZW5ld1BhcmFtcyxcbiAgICBGcmFtZVN5bmNDYW5hcnlJbmRpY2F0aW9uLFxuICAgIENhbmFyeVZlcnNpb24sXG4gICAgRnJhbWVTZXRHcm91cENvbnRleHQsXG4gICAgSVNzb1NlcnZpY2UsXG4gICAgU2V0TG9naW5Ub2tlbkV4cFJlc3BvbnNlLFxuICAgIEdldEdyb3VwQXBpRG9tYWluUmVzcG9uc2UsXG4gICAgRnJhbWVTZXRHcm91cEFwaURvbWFpbixcbiAgICBGcmFtZUdldEdyb3VwQXBpRG9tYWluLFxuICAgIFNES0xvZ291dFJlc3BvbnNlXG59IGZyb20gJ3NyYy9maWRtL0dpZ3lhLkpTLlNTTy9hcHAvaW50ZXJmYWNlcyc7XG5pbXBvcnQge0dTRXJyb3JzfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvR1NFcnJvcnMnO1xuaW1wb3J0IHtTc29VdGlsc30gZnJvbSBcInNyYy9maWRtL0dpZ3lhLkpTLlNTTy9hcHAvc3NvVXRpbHNcIjtcbmltcG9ydCB7SVNzb0NvbmZpZ30gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvaW50ZXJmYWNlcy9JV2ViU2RrQ29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFNzbyBpbXBsZW1lbnRzIElTc29TZXJ2aWNlIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9zdG9yYWdlS2V5OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2FuYXJ5S2V5OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2FuYXJ5VmVyS2V5OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfY3VycmVudEZyYWdtZW50OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfbW9kZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX3JlcXVlc3REb21haW46IHN0cmluZztcbiAgICBwcml2YXRlIF9saWQ6IHN0cmluZztcbiAgICBwcml2YXRlIF9jYWxsYmFja0lEOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hcGlLZXk6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9zaXRlQXBpS2V5OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfc3NvU2VnbWVudDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3Nzb0NvbmZpZzogSVNzb0NvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWREb21haW5zOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgbG9nb3V0VVJMczoge30sXG4gICAgICAgICAgICAgICAgICAgIGNhbmFyeUNvb2tpZXNOYW1lczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNDYW5hcnk6ICdnaWdfaXNDYW5hcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogJ2dpZ19jYW5hcnlfdmVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF91dGlscyA9IG5ldyBTc29VdGlscygpLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3N0b3JhZ2UgPSBfdXRpbHMuZ2V0Q29va2llc1N0b3JhZ2UoKSkge1xuXG4gICAgICAgIHRoaXMuX3N0b3JhZ2VLZXkgPSB0aGlzLl9jcmVhdGVLZXkoJ2dpZ19sb2dpblRva2VuJyk7XG4gICAgICAgIGNvbnN0IGNhbmFyeUNvb2tpZXNOYW1lcyA9IHRoaXMuX3Nzb0NvbmZpZy5jYW5hcnlDb29raWVzTmFtZXM7XG4gICAgICAgIGlmICh0eXBlb2YgY2FuYXJ5Q29va2llc05hbWVzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5fY2FuYXJ5S2V5ID0gdGhpcy5fY3JlYXRlS2V5KGNhbmFyeUNvb2tpZXNOYW1lcy5pc0NhbmFyeSk7XG4gICAgICAgICAgICB0aGlzLl9jYW5hcnlWZXJLZXkgPSB0aGlzLl9jcmVhdGVLZXkoY2FuYXJ5Q29va2llc05hbWVzLnZlcnNpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKSB7XG4gICAgICAgIC8vIFN0YXJ0IHJlcGVhdGVkbHkgY2hlY2tpbmcgZnJhZ21lbnQgZm9yIGEgbmV3IGNhbGwuXG4gICAgICAgIHRoaXMuX2NoZWNrRnJhZ21lbnQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jaGVja0ZyYWdtZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmcmFnbWVudDogc3RyaW5nID0gdGhpcy5fdXRpbHMuZ2V0RnJhZ21lbnQoKTtcbiAgICAgICAgaWYgKGZyYWdtZW50ICYmIGZyYWdtZW50ICE9PSB0aGlzLl9jdXJyZW50RnJhZ21lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRGcmFnbWVudCA9IGZyYWdtZW50O1xuICAgICAgICAgICAgdGhpcy5fc3RhcnQodGhpcy5fdXRpbHMuZGVzZXJpYWxpemUoZnJhZ21lbnQpKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCh0aGlzLl9jaGVja0ZyYWdtZW50LCAyMDApO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGFzeW5jIF9zdGFydChcbiAgICAgICAgcGFyYW1zOlxuICAgICAgICAgICAgfCBGcmFtZVNldEdyb3VwVG9rZW5QYXJhbXNcbiAgICAgICAgICAgIHwgRnJhbWVMb2dvdXRQYXJhbXNcbiAgICAgICAgICAgIHwgRnJhbWVSZW1vdmVUb2tlblBhcmFtc1xuICAgICAgICAgICAgfCBGcmFtZUdldEdyb3VwVG9rZW5QYXJhbXNcbiAgICAgICAgICAgIHwgRnJhbWVTZXRMb2dpblRva2VuRXhwUGFyYW1zXG4gICAgICAgICAgICB8IEZyYW1lR2V0TG9naW5Ub2tlbkV4cFBhcmFtc1xuICAgICAgICAgICAgfCBGcmFtZUNoZWNrVG9rZW5SZW5ld1BhcmFtc1xuICAgICAgICAgICAgfCBGcmFtZVN5bmNDYW5hcnlJbmRpY2F0aW9uXG4gICAgICAgICAgICB8IEZyYW1lU2V0R3JvdXBDb250ZXh0XG4gICAgICAgICAgICB8IEZyYW1lU2V0R3JvdXBBcGlEb21haW5cbiAgICAgICAgICAgIHwgRnJhbWVHZXRHcm91cEFwaURvbWFpblxuICAgICkge1xuICAgICAgICB0aGlzLl9tb2RlID0gcGFyYW1zLm07XG4gICAgICAgIHRoaXMuX3JlcXVlc3REb21haW4gPSBwYXJhbXMuZDsgLy8gUmVjZWl2aW5nIGRvbWFpbi5cbiAgICAgICAgdGhpcy5fbGlkID0gcGFyYW1zLmxpZDtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tJRCA9IHBhcmFtcy5jYWxsYmFja0lEO1xuICAgICAgICB0aGlzLl9zaXRlQXBpS2V5ID0gcGFyYW1zLnNBUElLZXk7XG5cbiAgICAgICAgLy8gQWJvcnQgaWYgbm90IGluIGlGcmFtZVxuICAgICAgICBpZiAoIXdpbmRvdy5wYXJlbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBnaWd5YSBzc286IGludmFsaWQgdXNlYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX3V0aWxzLmlzVmFsaWREb21haW4odGhpcy5fc3NvQ29uZmlnLnZhbGlkRG9tYWlucywgdGhpcy5fcmVxdWVzdERvbWFpbikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBnaWd5YSBzc286ICR7dGhpcy5fcmVxdWVzdERvbWFpbn0gaXMgbm90IGluIHZhbGlkIGRvbWFpbjogJHt0aGlzLl9zc29Db25maWcudmFsaWREb21haW5zLmpvaW4oJywnKX1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXNwb25zZTogYW55O1xuICAgICAgICBzd2l0Y2ggKHBhcmFtcy5tKSB7XG4gICAgICAgICAgICBjYXNlICdsb2dvdXQnOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgdGhpcy5sb2dvdXQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncmVtb3ZlVG9rZW4nOlxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucmVtb3ZlVG9rZW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZ2V0VG9rZW4nOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgdGhpcy5nZXRUb2tlbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdzZXRUb2tlbic6XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRUb2tlbihwYXJhbXMubHQsIFN0cmluZyhwYXJhbXMuZXhwaXJhdGlvbiksIHBhcmFtcy5nbHRleHApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdzZXRHcm91cENvbnRleHQnOlxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0R3JvdXBDb250ZXh0KHBhcmFtcy5ncm91cENvbnRleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdzZXRMb2dpblRva2VuRXhwJzpcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2V0VG9rZW5FeHBpcmF0aW9uKHBhcmFtcy5sb2dpblRva2VuRXhwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZ2V0TG9naW5Ub2tlbkV4cCc6XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmdldFRva2VuRXhwaXJhdGlvbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdjaGVja1Rva2VuUmVuZXcnOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgdGhpcy5jaGVja1Rva2VuUmVuZXcocGFyYW1zLmxvZ2luVG9rZW4pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdzeW5jQ2FuYXJ5SW5kaWNhdGlvbic6XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnN5bmNDYW5hcnlJbmRpY2F0aW9uKHBhcmFtcy5pc0NhbmFyeSwgcGFyYW1zLmNhbmFyeVZlcnNpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdzZXRHcm91cEFwaURvbWFpbic6XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRHcm91cEFwaURvbWFpbihwYXJhbXMuZG9tYWluKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZ2V0R3JvdXBBcGlEb21haW4nOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgdGhpcy5nZXRHcm91cEFwaURvbWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvckNvZGU6IEdTRXJyb3JzLklOVkFMSURfQVBJX01FVEhPRCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdXRpbHMuc2VuZE1lc3NhZ2UocmVzcG9uc2UsIHRoaXMuX2NhbGxiYWNrSUQsIHRoaXMuX3JlcXVlc3REb21haW4pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRHcm91cEFwaURvbWFpbigpOiBQcm9taXNlPEdldEdyb3VwQXBpRG9tYWluUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgZG9tYWluID0gdGhpcy5fc3RvcmFnZS5nZXRJdGVtKGBhcGlEb21haW5fJHt0aGlzLl9hcGlLZXl9YClcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVycm9yQ29kZTogR1NFcnJvcnMuT0ssXG4gICAgICAgICAgICBkb21haW5cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2V0R3JvdXBBcGlEb21haW4oZG9tYWluOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5fc3RvcmFnZS5zZXRJdGVtKGBhcGlEb21haW5fJHt0aGlzLl9hcGlLZXl9YCwgZG9tYWluKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgbG9nb3V0KCk6IFByb21pc2U8U0RLTG9nb3V0UmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgbG9nb3V0VVJMcyA9IHRoaXMuX2dldExvZ291dFVSTHMoKTtcbiAgICAgICAgYXdhaXQgdGhpcy5yZW1vdmVUb2tlbigpO1xuICAgICAgICB0aGlzLl9zdG9yYWdlLnJlbW92ZUl0ZW0oYCR7dGhpcy5fc3RvcmFnZUtleX1fdmlzaXRlZGApO1xuICAgICAgICByZXR1cm4geyBsb2dvdXRVUkxzIH07XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHJlbW92ZVRva2VuKCkge1xuICAgICAgICBsZXQgbG9naW5Ub2tlbiA9IHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9zdG9yYWdlS2V5KTtcbiAgICAgICAgaWYgKGxvZ2luVG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMuX21hcmtSZXZva2VkTG9naW5Ub2tlbihsb2dpblRva2VuKTtcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLl9zdG9yYWdlS2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdG9yYWdlLnJlbW92ZUl0ZW0oYCR7dGhpcy5fc3RvcmFnZUtleX1fZXhwYCk7XG4gICAgICAgIHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbShgJHt0aGlzLl9zdG9yYWdlS2V5fV9nbHRleHBgKTtcbiAgICAgICAgdGhpcy5fc3RvcmFnZS5yZW1vdmVJdGVtKGAke3RoaXMuX3N0b3JhZ2VLZXl9X3Nlc3Npb25gKTtcbiAgICAgICAgdGhpcy5fc3RvcmFnZS5yZW1vdmVJdGVtKGAke3RoaXMuX3N0b3JhZ2VLZXl9X2NvbnRleHRgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0VG9rZW4oKTogUHJvbWlzZTxHZXRHcm91cFRva2VuUmVzcG9uc2U+IHtcbiAgICAgICAgbGV0IGVycm9yQ29kZSA9IDA7XG4gICAgICAgIGxldCBsdCA9IHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9zdG9yYWdlS2V5KTtcbiAgICAgICAgY29uc3Qgc3RvcmFnZUV4cCA9IHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLl9zdG9yYWdlS2V5fV9leHBgKTtcbiAgICAgICAgbGV0IGV4cDtcbiAgICAgICAgaWYgKHN0b3JhZ2VFeHAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBleHAgPSBEYXRlLm5vdygpIC0gMTAwMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4cCA9IE51bWJlcihzdG9yYWdlRXhwKTtcbiAgICAgICAgICAgIGNvbnN0IHR3b1llYXJGcm9tTm93ID0gRGF0ZS5ub3coKSArICgxMDAwICogNjAgKiA2MCAqIDI0ICogMzY1ICogMik7XG4gICAgICAgICAgICBpZiAoZXhwID4gdHdvWWVhckZyb21Ob3cpIHtcbiAgICAgICAgICAgICAgICBleHAgPSBEYXRlLm5vdygpIC0gMTAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnbHRleHAgPSB0aGlzLl9zdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5fc3RvcmFnZUtleX1fZ2x0ZXhwYCk7XG4gICAgICAgIGNvbnN0IGdyb3VwQ29udGV4dCA9IHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLl9zdG9yYWdlS2V5fV9jb250ZXh0YCk7XG4gICAgICAgIGNvbnN0IGluU2Vzc2lvbiA9IGdsdGV4cCB8fCB0aGlzLl9zdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5fc3RvcmFnZUtleX1fc2Vzc2lvbmApID09PSAnMSc7XG4gICAgICAgIGlmICghaXNOYU4oZXhwKSAmJiAoKGV4cCA9PT0gMCAmJiAhaW5TZXNzaW9uKSB8fCAoZXhwID4gMCAmJiBuZXcgRGF0ZSgpLmdldFRpbWUoKSA+IGV4cCkpKSB7XG4gICAgICAgICAgICAvLyBleHBpcmVkIVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZW1vdmVUb2tlbigpO1xuICAgICAgICAgICAgbHQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsdCkge1xuICAgICAgICAgICAgLy8gbm8gdXNlclxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlcnJvckNvZGU6IEdTRXJyb3JzLlVOQVVUSE9SSVpFRF9VU0VSLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX21hcmtTaXRlVmlzaXRlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IEdldEdyb3VwVG9rZW5SZXNwb25zZSA9IHtcbiAgICAgICAgICAgIGVycm9yQ29kZTogZXJyb3JDb2RlLFxuICAgICAgICAgICAgbG9naW5fdG9rZW46IGx0LFxuICAgICAgICAgICAgZXhwaXJlc19pbjogZXhwID09PSAwID8gMCA6IE1hdGgucm91bmQoKGV4cCAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpKSAvIDEwMDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmKGdyb3VwQ29udGV4dCl7XG4gICAgICAgICAgICByZXNwb25zZS5ncm91cENvbnRleHQgPSBncm91cENvbnRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhwID09PSAwICYmIGdsdGV4cCkge1xuICAgICAgICAgICAgcmVzcG9uc2UuZ2x0ZXhwID0gZ2x0ZXhwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2V0VG9rZW4obHQ6IHN0cmluZywgZXhwaXJhdGlvbj86IHN0cmluZyB8IG51bWJlciwgZ2x0ZXhwPzogc3RyaW5nKSB7XG4gICAgICAgIGx0ID0gbHQuc3BsaXQoJ3wnKVswXTtcbiAgICAgICAgY29uc3Qgb2xkVG9rZW4gPSB0aGlzLl9zdG9yYWdlLmdldEl0ZW0odGhpcy5fc3RvcmFnZUtleSk/LnNwbGl0KCd8JylbMF07XG4gICAgICAgIGlmIChsdCAhPT0gb2xkVG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMuX21hcmtSZXZva2VkTG9naW5Ub2tlbihvbGRUb2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobHQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9zdG9yYWdlS2V5LCBsdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV4cGlyYXRpb24pIHtcbiAgICAgICAgICAgIGxldCBleHBpcmVzSW4gPSB0eXBlb2YgZXhwaXJhdGlvbiA9PT0gJ3N0cmluZycgJiYgZXhwaXJhdGlvbiA/IE51bWJlcihleHBpcmF0aW9uKSA6IGV4cGlyYXRpb247XG5cbiAgICAgICAgICAgIGlmIChleHBpcmVzSW4gPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBTZXNzaW9uIGNvb2tpZSBvciBkeW5hbWljIHNlc3Npb24gY29va2llLlxuICAgICAgICAgICAgICAgIC8vIEVpdGhlciB3YXksIGZsYWcgdGhlIGV4cGlyYXRpb24gYXMgMC5cbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gbm93IHdoZW4gdGhlIGNvb2tpZSBzaG91bGQgZXhwaXJlLlxuICAgICAgICAgICAgICAgIGxldCBleHBpcmVzSW5NczogbnVtYmVyO1xuICAgICAgICAgICAgICAgIGlmICghZXhwaXJlc0luIHx8IGV4cGlyZXNJbiA9PT0gLTIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJlc0luTXMgPSAxMDAwICogNjAgKiA2MCAqIDI0ICogMzY1O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZXNJbk1zID0gTnVtYmVyKGV4cGlyZXNJbikgKiAxMDAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgZXhwaXJlcyBpbiBtaWxsaXNlY29uZHMgdG8gYW4gYSB0aW1lc3RhbXAgKGFsc28gbWlsbGlzZWNvbmRzKS5cbiAgICAgICAgICAgICAgICBleHBpcmVzSW4gPSBEYXRlLm5vdygpICsgZXhwaXJlc0luTXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zdG9yYWdlLnNldEl0ZW0oYCR7dGhpcy5fc3RvcmFnZUtleX1fZXhwYCwgYCR7ZXhwaXJlc0lufWApO1xuICAgICAgICAgICAgaWYgKGV4cGlyYXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdG9yYWdlLnNldEl0ZW0oYCR7dGhpcy5fc3RvcmFnZUtleX1fc2Vzc2lvbmAsICcxJywgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdsdGV4cCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldFRva2VuRXhwaXJhdGlvbihnbHRleHApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGx0KSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9tYXJrU2l0ZVZpc2l0ZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzZXRHcm91cENvbnRleHQoZ3JvdXBDb250ZXh0OiBhbnkpIHtcbiAgICAgICAgdGhpcy5fc3RvcmFnZS5zZXRJdGVtKGAke3RoaXMuX3N0b3JhZ2VLZXl9X2NvbnRleHRgLCBKU09OLnN0cmluZ2lmeShncm91cENvbnRleHQpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2V0VG9rZW5FeHBpcmF0aW9uKGdsdGV4cDogc3RyaW5nKTogUHJvbWlzZTxTZXRMb2dpblRva2VuRXhwUmVzcG9uc2U+IHtcbiAgICAgICAgaWYgKCF0aGlzLl91dGlscy5pc1ZhbGlkR2x0RXhwKGdsdGV4cCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbShgJHt0aGlzLl9zdG9yYWdlS2V5fV9nbHRleHBgKTtcbiAgICAgICAgICAgIGdsdGV4cCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbHRleHAgPSB0aGlzLl91dGlscy5nZXRNYXhHbHRFeHAoZ2x0ZXhwLCAoYXdhaXQgdGhpcy5nZXRUb2tlbkV4cGlyYXRpb24oKSkuZ2x0ZXhwKTtcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLl9zdG9yYWdlS2V5fV9nbHRleHBgLCBnbHRleHApO1xuICAgICAgICAgICAgdGhpcy5fc3RvcmFnZS5yZW1vdmVJdGVtKGAke3RoaXMuX3N0b3JhZ2VLZXl9X2V4cGApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVycm9yQ29kZTogR1NFcnJvcnMuT0ssXG4gICAgICAgICAgICBnbHRleHAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldFRva2VuRXhwaXJhdGlvbigpOiBQcm9taXNlPEdldExvZ2luVG9rZW5FeHBSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCBsdCA9IHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9zdG9yYWdlS2V5KTtcbiAgICAgICAgaWYgKCFsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlcnJvckNvZGU6IEdTRXJyb3JzLlVOQVVUSE9SSVpFRF9VU0VSLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlcnJvckNvZGU6IEdTRXJyb3JzLk9LLFxuICAgICAgICAgICAgZ2x0ZXhwOiB0aGlzLl9zdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5fc3RvcmFnZUtleX1fZ2x0ZXhwYCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNoZWNrVG9rZW5SZW5ldyhsb2dpblRva2VuOiBzdHJpbmcpOiBQcm9taXNlPEdldEdyb3VwVG9rZW5SZXNwb25zZT4ge1xuICAgICAgICBjb25zdCBncm91cFRva2VuID0gYXdhaXQgdGhpcy5nZXRUb2tlbigpO1xuICAgICAgICBjb25zdCBpbnZhbGlkVG9rZW5zID0gdGhpcy5fc3RvcmFnZS5nZXRJdGVtKGAke3RoaXMuX3N0b3JhZ2VLZXl9X3Jldm9rZWRfdG9rZW5zYCkgfHwgJyc7XG4gICAgICAgIGNvbnN0IGlzSW52YWxpZCA9IGludmFsaWRUb2tlbnMuaW5kZXhPZihsb2dpblRva2VuKSA+PSAwO1xuICAgICAgICBpZiAoIWlzSW52YWxpZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRUb2tlbihsb2dpblRva2VuKTtcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3JDb2RlOiBHU0Vycm9ycy5PS307XG4gICAgICAgIH0gZWxzZSBpZiAoZ3JvdXBUb2tlbi5lcnJvckNvZGUgPT09IEdTRXJyb3JzLk9LICYmIGludmFsaWRUb2tlbnMuaW5kZXhPZihncm91cFRva2VuLmxvZ2luX3Rva2VuKSA8IDApIHtcbiAgICAgICAgICAgIC8vIGp1c3QgY2hhbmdpbmcgdGhlIGVycm9yIGNvZGUgLSBidXQgcmV0dXJuaW5nIHRoZSBzYW1lIHNlc3Npb24gaW5mbyBvZiB0aGUgZ3JvdXBcbiAgICAgICAgICAgIGdyb3VwVG9rZW4uZXJyb3JDb2RlID0gR1NFcnJvcnMuVE9LRU5fSEFTX1JFTkVXRUQ7XG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBUb2tlbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3JDb2RlOiBHU0Vycm9ycy5JTlZBTElEX1RPS0VOfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzeW5jQ2FuYXJ5SW5kaWNhdGlvbihpc0NhbmFyeTogc3RyaW5nLCB2ZXJzaW9uU2lnbmF0dXJlOiBzdHJpbmcpOiBQcm9taXNlPENhbmFyeUluZGljYXRpb25SZXNwb25zZT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2NhbmFyeUtleSB8fCAhdGhpcy5fY2FuYXJ5VmVyS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4ge2Vycm9yQ29kZTogR1NFcnJvcnMuSU5WQUxJRF9FTlZJUk9OTUVOVF9DT05GSUd9IGFzIENhbmFyeUluZGljYXRpb25SZXNwb25zZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IFNTT0lzQ2FuYXJ5ID0gdGhpcy5fc3RvcmFnZS5nZXRJdGVtKHRoaXMuX2NhbmFyeUtleSk7XG4gICAgICAgIGNvbnN0IFNTT1ZlcnNpb25TaWduYXR1cmUgPSB0aGlzLl9zdG9yYWdlLmdldEl0ZW0odGhpcy5fY2FuYXJ5VmVyS2V5KTtcblxuICAgICAgICBjb25zdCByZXNwb25zZTogQ2FuYXJ5SW5kaWNhdGlvblJlc3BvbnNlID0ge1xuICAgICAgICAgICAgZXJyb3JDb2RlOiBHU0Vycm9ycy5PSyxcbiAgICAgICAgICAgIGlzQ2FuYXJ5LFxuICAgICAgICAgICAgY2FuYXJ5VmVyc2lvbjogdmVyc2lvblNpZ25hdHVyZSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF0aGlzLl91dGlscy52YWxpZGF0aW9ucygpLmFsbERlZmluZWRPckFsbFVuZGVmaW5lZChTU09Jc0NhbmFyeSwgU1NPVmVyc2lvblNpZ25hdHVyZSkpIHtcbiAgICAgICAgICAgIC8vIG5vdCBsZWdhbFxuICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3JDb2RlID0gR1NFcnJvcnMuSU5WQUxJRF9QQVJBTUVURVJfVkFMVUU7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX3V0aWxzLnZhbGlkYXRpb25zKCkuYWxsRGVmaW5lZE9yQWxsVW5kZWZpbmVkKGlzQ2FuYXJ5LCB2ZXJzaW9uU2lnbmF0dXJlKSkge1xuICAgICAgICAgICAgLy8gbm90IGxlZ2FsXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVycm9yQ29kZTogR1NFcnJvcnMuSU5WQUxJRF9QQVJBTUVURVJfVkFMVUUsXG4gICAgICAgICAgICAgICAgaXNDYW5hcnk6IFNTT0lzQ2FuYXJ5LFxuICAgICAgICAgICAgICAgIGNhbmFyeVZlcnNpb246IFNTT1ZlcnNpb25TaWduYXR1cmUsXG4gICAgICAgICAgICB9IGFzIENhbmFyeUluZGljYXRpb25SZXNwb25zZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNpdGVDYW5hcnlWZXJzaW9uID0gdGhpcy5fcGFyc2VDYW5hcnlWZXJzaW9uU2lnbmF0dXJlKHZlcnNpb25TaWduYXR1cmUpO1xuICAgICAgICBjb25zdCBTU09DYW5hcnlWZXJzaW9uID0gdGhpcy5fcGFyc2VDYW5hcnlWZXJzaW9uU2lnbmF0dXJlKFNTT1ZlcnNpb25TaWduYXR1cmUpO1xuXG4gICAgICAgIGlmIChzaXRlQ2FuYXJ5VmVyc2lvbi50aW1lc3RhbXAgPiBTU09DYW5hcnlWZXJzaW9uLnRpbWVzdGFtcCkge1xuICAgICAgICAgICAgdGhpcy5fc3RvcmFnZS5zZXRJdGVtKHRoaXMuX2NhbmFyeUtleSwgaXNDYW5hcnkpO1xuICAgICAgICAgICAgdGhpcy5fc3RvcmFnZS5zZXRJdGVtKHRoaXMuX2NhbmFyeVZlcktleSwgdmVyc2lvblNpZ25hdHVyZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNwb25zZS5pc0NhbmFyeSA9IFNTT0lzQ2FuYXJ5O1xuICAgICAgICAgICAgcmVzcG9uc2UuY2FuYXJ5VmVyc2lvbiA9IFNTT1ZlcnNpb25TaWduYXR1cmU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbWFya1NpdGVWaXNpdGVkKCk6IHZvaWQge1xuICAgICAgICBjb25zdCB2aXNpdGVkU3RvcmFnZUtleSA9IGAke3RoaXMuX3N0b3JhZ2VLZXl9X3Zpc2l0ZWRgO1xuICAgICAgICBsZXQgdmlzaXRlZCA9IHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbSh2aXNpdGVkU3RvcmFnZUtleSkgfHwgJyc7XG4gICAgICAgIGlmICh2aXNpdGVkLmluZGV4T2YodGhpcy5fc2l0ZUFwaUtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICB2aXNpdGVkICs9ICcsJyArIHRoaXMuX3NpdGVBcGlLZXk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RvcmFnZS5zZXRJdGVtKHZpc2l0ZWRTdG9yYWdlS2V5LCB2aXNpdGVkKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9tYXJrUmV2b2tlZExvZ2luVG9rZW4obG9naW5Ub2tlbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICghbG9naW5Ub2tlbikgcmV0dXJuO1xuICAgICAgICBjb25zdCBpbnZhbGlkVG9rZW5zU3RvcmFnZUtleSA9IGAke3RoaXMuX3N0b3JhZ2VLZXl9X3Jldm9rZWRfdG9rZW5zYDtcbiAgICAgICAgbGV0IGludmFsaWRUb2tlbnMgPSB0aGlzLl9zdG9yYWdlLmdldEl0ZW0oaW52YWxpZFRva2Vuc1N0b3JhZ2VLZXkpIHx8ICcnO1xuICAgICAgICBsZXQgYXJySW52YWxpZFRva2VucyA9IGludmFsaWRUb2tlbnMuc3BsaXQoJywnKTtcbiAgICAgICAgaWYgKGFyckludmFsaWRUb2tlbnMubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgLy9kZWxldGUgb25lIG9sZCByZXZva2VkIHRva2VuXG4gICAgICAgICAgICBhcnJJbnZhbGlkVG9rZW5zLnNwbGljZSgxLCAxKTsgLy8gZmlyc3QgZWxlbWVudCBpcyBhbHdheXMgZW1wdHlcbiAgICAgICAgfVxuICAgICAgICBpbnZhbGlkVG9rZW5zID0gYXJySW52YWxpZFRva2Vucy5qb2luKCcsJyk7XG4gICAgICAgIGlmIChpbnZhbGlkVG9rZW5zLmluZGV4T2YobG9naW5Ub2tlbikgPCAwKSB7XG4gICAgICAgICAgICBpbnZhbGlkVG9rZW5zICs9ICcsJyArIGxvZ2luVG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RvcmFnZS5zZXRJdGVtKGludmFsaWRUb2tlbnNTdG9yYWdlS2V5LCBpbnZhbGlkVG9rZW5zKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRMb2dvdXRVUkxzKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHZpc2l0ZWQgPSB0aGlzLl9zdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5fc3RvcmFnZUtleX1fdmlzaXRlZGApO1xuICAgICAgICBpZiAoIXZpc2l0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhckxvZ291dFVSTHMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBzaXRlS2V5IGluIHRoaXMuX3Nzb0NvbmZpZy5sb2dvdXRVUkxzKSB7XG4gICAgICAgICAgICBpZiAodmlzaXRlZC5pbmRleE9mKCcsJyArIHNpdGVLZXkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGFyTG9nb3V0VVJMcy5wdXNoKHRoaXMuX3Nzb0NvbmZpZy5sb2dvdXRVUkxzW3NpdGVLZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJMb2dvdXRVUkxzLmpvaW4oJywnKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jcmVhdGVLZXkobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke25hbWV9XyR7dGhpcy5fYXBpS2V5fSR7dGhpcy5fc3NvU2VnbWVudCA/IGBfJHt0aGlzLl9zc29TZWdtZW50fWAgOiAnJ31gO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3BhcnNlQ2FuYXJ5VmVyc2lvblNpZ25hdHVyZShjYW5hcnlWZXJzaW9uU2lnOiBzdHJpbmcpOiBDYW5hcnlWZXJzaW9uIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdERhdGEgPSB7YnVpbGQ6IDAsIHByb2JhYmlsaXR5OiAwLCB0aW1lc3RhbXA6IC0xfSBhcyBDYW5hcnlWZXJzaW9uO1xuICAgICAgICBpZiAoIWNhbmFyeVZlcnNpb25TaWcpIHJldHVybiBkZWZhdWx0RGF0YTtcbiAgICAgICAgY29uc3QgcGFydHMgPSBjYW5hcnlWZXJzaW9uU2lnLnNwbGl0KCctJyk7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdERhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJ1aWxkOiBOdW1iZXIocGFydHNbMF0pLFxuICAgICAgICAgICAgcHJvYmFiaWxpdHk6IE51bWJlcihwYXJ0c1sxXSksXG4gICAgICAgICAgICB0aW1lc3RhbXA6IE51bWJlcihwYXJ0c1syXSksXG4gICAgICAgIH0gYXMgQ2FuYXJ5VmVyc2lvbjtcbiAgICB9XG59XG4iLCJpbXBvcnQge1VyaX0gZnJvbSBcInNyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9VcmlcIjtcbmltcG9ydCAqIGFzIHZhbGlkYXRpb25VdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvdmFsaWRhdGlvbic7XG5pbXBvcnQgR2xvYmFsUHJvdmlkZXIgZnJvbSBcIi4vZ2xvYmFsUHJvdmlkZXJcIjtcbmltcG9ydCB7Q29va2llU3RvcmFnZUFkYXB0ZXIsIGluaXRpYWxpemVBZGFwdGVyfSBmcm9tIFwic3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHtkZXNlcmlhbGl6ZX0gZnJvbSBcInNyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9rZXlWYWx1ZVwiO1xuaW1wb3J0IHtnZXRNYXggYXMgZ2V0TWF4R2x0RXhwLCBpc1ZhbGlkIGFzIGlzVmFsaWRHbHRFeHB9IGZyb20gXCJzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvZ2x0ZXhwXCI7XG5pbXBvcnQge1VSTERlY29kZVJlY3Vyc2l2ZX0gZnJvbSBcInNyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9VUkxcIjtcblxuY29uc3QgZGVmYXVsdFZhbGlkRG9tYWlucyA9IFsnZ2lneWEtYXBpLmNvbScsICdnaWd5YS1hcGkuY24nLCAnZ2lneWEuY29tJywgJ215LmdpZ3lhLWV4dC5jb20nLCAnbG9jYWxob3N0J107XG5cbmV4cG9ydCBjbGFzcyBTc29VdGlscyB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9nbG9iYWwgPSBHbG9iYWxQcm92aWRlciwgcHJpdmF0ZSBfZGVmYXVsdFZhbGlkRG9tYWlucyA9IGRlZmF1bHRWYWxpZERvbWFpbnMpIHt9XG5cbiAgICBnZXRQYWdlVXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nbG9iYWwuZG9jdW1lbnRMb2NhdGlvbigpLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzVmFsaWREb21haW4odmFsaWREb21haW5zOiBzdHJpbmdbXSwgY2FuZGlkYXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZG9tYWluID0gVXJpLnBhcnNlKGNhbmRpZGF0ZSkuZG9tYWluO1xuICAgICAgICBjb25zdCBhclZhbGlkRG9tYWlucyA9IHZhbGlkRG9tYWlucy5jb25jYXQodGhpcy5fZGVmYXVsdFZhbGlkRG9tYWlucyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJWYWxpZERvbWFpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkRG9tYWluID0gYXJWYWxpZERvbWFpbnNbaV0ucmVwbGFjZSgnKicsICcnKS5zcGxpdCgnOicpWzBdO1xuICAgICAgICAgICAgY29uc3QgaW5kZXhPZlZhbGlkRG9tYWluID0gZG9tYWluLmluZGV4T2YodmFsaWREb21haW4pO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGluZGV4T2ZWYWxpZERvbWFpbiA+PSAwICYmXG4gICAgICAgICAgICAgICAgaW5kZXhPZlZhbGlkRG9tYWluID09PSBkb21haW4ubGVuZ3RoIC0gdmFsaWREb21haW4ubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgKGluZGV4T2ZWYWxpZERvbWFpbiA9PT0gMCB8fCBkb21haW4uY2hhckF0KGluZGV4T2ZWYWxpZERvbWFpbiAtIDEpID09PSAnLicgfHwgZG9tYWluLmNoYXJBdChpbmRleE9mVmFsaWREb21haW4gLSAxKSA9PT0gJy8nKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kTWVzc2FnZShyZXM6IE9iamVjdCwgY2FsbGJhY2tJRDogc3RyaW5nLCByZXF1ZXN0RG9tYWluOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbGV0IHN0ck1lc3NhZ2UgPSAnJztcbiAgICAgICAgZm9yIChjb25zdCBwIGluIHJlcykge1xuICAgICAgICAgICAgaWYgKHJlc1twXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3RyTWVzc2FnZSArPSBlc2NhcGUocCArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChyZXNbcF0pICsgJyYnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9nbG9iYWwucG9zdE1lc3NhZ2VUb1BhcmVudChjYWxsYmFja0lEICsgJz0nICsgc3RyTWVzc2FnZSwgcmVxdWVzdERvbWFpbik7XG4gICAgfVxuXG4gICAgcHVibGljIGlzVmFsaWRHbHRFeHAoZ2x0RXhwOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGlzVmFsaWRHbHRFeHAoZ2x0RXhwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TWF4R2x0RXhwKGdsdEV4cDE6IHN0cmluZywgZ2x0RXhwMjogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBnZXRNYXhHbHRFeHAoZ2x0RXhwMSwgZ2x0RXhwMik7XG4gICAgfVxuXG4gICAgcHVibGljIGRlY29kZVVybCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFVSTERlY29kZVJlY3Vyc2l2ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlc2VyaWFsaXplKHZhbHVlOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICByZXR1cm4gZGVzZXJpYWxpemUodmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb29raWVzU3RvcmFnZSgpIHtcbiAgICAgICAgcmV0dXJuIGluaXRpYWxpemVBZGFwdGVyKENvb2tpZVN0b3JhZ2VBZGFwdGVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmFsaWRhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0aW9uVXRpbHM7XG4gICAgfVxuXG4gICAgcHVibGljIFVyaUZhY3RvcnkodXJsOiBzdHJpbmcsIGlzQWJzb2x1dGUgPSB0cnVlKTogVXJpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVcmkodXJsLCBpc0Fic29sdXRlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RnJhZ21lbnQoKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VVUkwgPSB0aGlzLmdldFBhZ2VVcmwoKTtcblxuICAgICAgICBpZiAocGFnZVVSTC5pbmRleE9mKCcjJykgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFnZVVSTC5zcGxpdCgnIycpWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9