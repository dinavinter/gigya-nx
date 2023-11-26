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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/core/ApiService/app/main.ts");
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

/***/ "../node_modules/lodash.merge/index.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash.merge/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
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
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

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
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
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
  return function(value) {
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
  return function(arg) {
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
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
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

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

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
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

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
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
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
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
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
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
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
  var data = this.__data__ = new ListCache(entries);
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
  this.__data__ = new ListCache;
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
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
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
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
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
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
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
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
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
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
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
  return (symToStringTag && symToStringTag in Object(value))
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
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
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
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
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
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
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
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
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
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
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
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
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
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

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
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
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
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
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
  return function(object, iteratee, keysFunc) {
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
  return (typeof object.constructor == 'function' && !isPrototype(object))
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

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
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
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
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
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
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
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

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
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
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

  return function() {
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
      return (func + '');
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
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
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
  return value != null && isLength(value.length) && !isFunction(value);
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
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
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
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
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
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
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
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

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
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
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
var merge = createAssigner(function(object, source, srcIndex) {
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
  return function() {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

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

/***/ "../node_modules/webpack/buildin/module.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


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

/***/ "./src/core/ApiService/app/ApiService.ts":
/*!***********************************************!*\
  !*** ./src/core/ApiService/app/ApiService.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var GroupApiDomainService_1 = __webpack_require__(/*! src/core/ApiService/app/GroupApiDomainService */ "./src/core/ApiService/app/GroupApiDomainService.ts");
var RequestProvider_1 = __webpack_require__(/*! ./RequestProvider */ "./src/core/ApiService/app/RequestProvider.ts");
var GmidProvider_1 = __webpack_require__(/*! ./GmidProvider */ "./src/core/ApiService/app/GmidProvider.ts");
var HasGmid = GmidProvider_1.GmidProvider.HasGmid;
var FlagService_1 = __webpack_require__(/*! ../../Gigya.Js/app/Services/FlagService */ "./src/core/Gigya.Js/app/Services/FlagService.ts");
var GMID_TICKET_EXPIRATION_INTERVAL = 1;
exports.TokenKeys = {
    GMID: 'gig_gmid',
    UCID: 'gig_ucid',
    GMID_TICKET: 'gmidTicket',
    GMID_TICKET_EXPIRATION_TIME: 'gmidTicketExpiration',
};
var ApiService = /** @class */ (function () {
    function ApiService(_apiKey, _hasGmid, _domainResolver, _groupApiDomainService, _requestProvider, _storage) {
        if (_groupApiDomainService === void 0) { _groupApiDomainService = new GroupApiDomainService_1.GroupApiDomainService(); }
        if (_requestProvider === void 0) { _requestProvider = new RequestProvider_1.RequestProvider(); }
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
                return [2 /*return*/, this._domainResolver.getApiDomain(methodName)];
            });
        });
    };
    ApiService.prototype.bootstrap = function (forceBootstrap) {
        if (forceBootstrap === void 0) { forceBootstrap = false; }
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var log, _a, webSDKBootstrapResponse, ex_1, ticketInfo, hasGmid;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        log = window.gigya.logger.group("bootstrap api service");
                        if (!!this._storage) return [3 /*break*/, 2];
                        window.gigya.logger.debug("init storage");
                        _a = this;
                        return [4 /*yield*/, new gigya.Promise(function (resolve) {
                                window.gigya.utils.localStorage.waitForService(function (adapter) {
                                    resolve(adapter);
                                });
                            })];
                    case 1:
                        _a._storage = _b.sent();
                        _b.label = 2;
                    case 2:
                        if (!(this._hasGmid && !forceBootstrap)) return [3 /*break*/, 3];
                        window.gigya.logger.info("already has gmid");
                        return [3 /*break*/, 10];
                    case 3:
                        window.gigya.logger.info(!this._hasGmid ? "no gmid set" : "forcing bootstrap");
                        if (!(!this._useStorage && this.canSaveGmidAsCookie())) return [3 /*break*/, 8];
                        window.gigya.logger.info("save gmid as cookie");
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.sendRequest({
                                methodName: 'accounts.webSdkBootstrap',
                                params: { apiKey: this._apiKey }
                            })];
                    case 5:
                        webSDKBootstrapResponse = _b.sent();
                        if (webSDKBootstrapResponse.errorCode !== 0) {
                            throw 'error bootstrapping sdk\n' + JSON.stringify(webSDKBootstrapResponse, null, 4);
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        ex_1 = _b.sent();
                        throw new Error("accounts.webSdkBootstrap failed: " + ex_1);
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        window.gigya.logger.info("save gmid in storage");
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
                        hasGmid = window.gigya.utils.cookie.get('hasGmid') || (webSDKBootstrapResponse === null || webSDKBootstrapResponse === void 0 ? void 0 : webSDKBootstrapResponse.hasGmid);
                        this.cleanStorage();
                        _b.label = 13;
                    case 13:
                        log.end();
                        return [2 /*return*/, {
                                ticketInfo: ticketInfo,
                                hasGmid: hasGmid
                            }];
                }
            });
        });
    };
    ApiService.prototype.setGroupApiDomain = function (apiDomain) {
        var baseDomain = window.gigya._.getBaseDomain(window.gigya.partnerSettings.baseDomains, this._domainResolver.originDomain, ['gigya.com', 'cn1.sapcdm.cn', window.gigya.defaultApiDomain]);
        if (baseDomain !== window.gigya.defaultApiDomain) {
            this._groupApiDomainService.set(apiDomain);
        }
    };
    ApiService.prototype.canSaveGmidAsCookie = function () {
        // api domain will be first party when site has a custom api domain prefix.
        if (FlagService_1.FlagService.alwaysCheckCookieSave) {
            return this._domainResolver.isApiDomainFirstParty || this._domainResolver.canSaveGmidAsCookie;
        }
        return this._domainResolver.isApiDomainFirstParty || window.gigya.utils.cookie.canSaveCookie();
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
                            window.gigya.logger.error('ApiService: request data must has methodName and params');
                            return [2 /*return*/];
                        }
                        methodName = data.methodName;
                        params = window.gigya.utils.object.clone(data.params, true, true);
                        params.pageURL = this._domainResolver.originDomain;
                        if (this._useStorage) {
                            params.gmid = this._storage.getItem(exports.TokenKeys.GMID);
                            params.ucid = this._storage.getItem(exports.TokenKeys.UCID);
                        }
                        _c = "https://";
                        return [4 /*yield*/, this.getApiDomain((_b = (_a = data.settings) === null || _a === void 0 ? void 0 : _a.namespace) !== null && _b !== void 0 ? _b : data.methodName)];
                    case 1:
                        baseDomain = _c + (_d.sent());
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this._requestProvider.send(baseDomain, methodName, params, data.settings, data.headers)];
                    case 3:
                        res = _d.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _d.sent();
                        if (this.didFallback) {
                            res = err_1;
                        }
                        else {
                            this.didFallback = true;
                            res = this.sendRequestFallback(baseDomain, methodName, params, data, err_1);
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, res];
                }
            });
        });
    };
    ApiService.prototype.setupWithStorage = function (forceBootstrap) {
        var _a;
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var storageGmid, expirationTime, isGmidExistsInStorage, gmidVersion, tokens, ticketRes;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        storageGmid = this._storage.getItem(exports.TokenKeys.GMID);
                        expirationTime = parseInt(this._storage.getItem(exports.TokenKeys.GMID_TICKET_EXPIRATION_TIME));
                        isGmidExistsInStorage = Boolean(storageGmid);
                        gmidVersion = (_a = window.gigya.utils.array.getArrayFromString(storageGmid, '.')) === null || _a === void 0 ? void 0 : _a[1];
                        if (!((forceBootstrap && gmidVersion !== HasGmid.ver4) || !isGmidExistsInStorage)) return [3 /*break*/, 2];
                        window.gigya.logger.info("getting gmid by endpoint");
                        return [4 /*yield*/, this.getIds()];
                    case 1:
                        tokens = _b.sent();
                        if (!tokens.gcid || !tokens.ucid) {
                            throw "ApiService getIDs: the request to the endpoint failed";
                        }
                        else {
                            window.gigya.logger.info("setting gmid in storage");
                            this._storage.setItem(exports.TokenKeys.GMID, tokens.gcid);
                            this._storage.setItem(exports.TokenKeys.UCID, tokens.ucid);
                            ticketRes = this.createTicketResponse(tokens.gmidTicket);
                            this.updateGmidTicket(ticketRes);
                        }
                        return [3 /*break*/, 5];
                    case 2:
                        if (!!window.gigya.utils.validation.isLaterThanNow(expirationTime)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.refreshGmidTicketFromServer()];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        window.gigya.logger.info("already has gmid in storage");
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    // createNew - if no gmidTicket exists, then create a new one instead of returning undefined
    ApiService.prototype.getGmidTicket = function (createNew) {
        if (createNew === void 0) { createNew = false; }
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var gmidTicket, expirationTime;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gmidTicket = this._storage.getItem(exports.TokenKeys.GMID_TICKET);
                        if (!(!gmidTicket && !createNew)) return [3 /*break*/, 1];
                        return [2 /*return*/, undefined];
                    case 1:
                        expirationTime = parseInt(this._storage.getItem(exports.TokenKeys.GMID_TICKET_EXPIRATION_TIME));
                        if (!(!createNew && gmidTicket && window.gigya.utils.validation.isLaterThanNow(expirationTime))) return [3 /*break*/, 2];
                        return [2 /*return*/, {
                                gmidTicket: gmidTicket,
                                expirationTime: parseInt(this._storage.getItem(exports.TokenKeys.GMID_TICKET_EXPIRATION_TIME)),
                            }];
                    case 2:
                        this.deleteGmidTicket();
                        return [4 /*yield*/, this.refreshGmidTicketFromServer()];
                    case 3: return [2 /*return*/, _a.sent()];
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
                        window.gigya.logger.info("refreshing gmid ticket");
                        return [4 /*yield*/, this.createGmidTicket(this._storage.getItem(exports.TokenKeys.GMID))];
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
        window.gigya.logger.info("updating gmid ticket", ticket);
        this._storage.setItem(exports.TokenKeys.GMID_TICKET, ticket.gmidTicket);
        this._storage.setItem(exports.TokenKeys.GMID_TICKET_EXPIRATION_TIME, String(ticket.expirationTime));
    };
    ApiService.prototype.deleteGmidTicket = function () {
        this._storage.removeItem(exports.TokenKeys.GMID_TICKET);
        this._storage.removeItem(exports.TokenKeys.GMID_TICKET_EXPIRATION_TIME);
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
            }
        });
    };
    ApiService.prototype.createGmidTicket = function (gmid, expires) {
        var _this = this;
        if (expires === void 0) { expires = window.gigya.partnerSettings.gmidTicketExpiration || 3600; }
        var params = {
            apiKey: this._apiKey,
            expires: expires,
        };
        if (gmid)
            params.gmid = gmid;
        return this.sendRequest({
            methodName: 'socialize.getGmidTicket',
            params: params
        }).then(function (res) {
            if (res && res.gmidTicket) {
                return _this.createTicketResponse(res.gmidTicket);
            }
            else {
                window.gigya.logger.error('Failed to establish gmidTicket', { response: JSON.stringify(res), method: 'socialize.getGmidTicket' });
                _this.deleteGmidTicket();
            }
        });
    };
    ApiService.prototype.createTicketResponse = function (gmidTicket) {
        var currentGmidTicketDate = new Date();
        currentGmidTicketDate.setHours(currentGmidTicketDate.getHours() + GMID_TICKET_EXPIRATION_INTERVAL);
        var expirationTime = currentGmidTicketDate.getTime();
        return {
            gmidTicket: gmidTicket,
            expirationTime: expirationTime,
        };
    };
    ApiService.prototype.sendRequestFallback = function (baseDomain, methodName, params, data, err) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var _i, _a, flag;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        window.gigya.logger.report('ApiService: Fallback with api flags turned off', { baseDomain: baseDomain, methodName: methodName, params: params, data: data, err: err });
                        for (_i = 0, _a = FlagService_1.FlagService.apiFlags; _i < _a.length; _i++) {
                            flag = _a[_i];
                            window.gigya._.config.flags[flag] = false;
                        }
                        return [4 /*yield*/, this._requestProvider.send(baseDomain, methodName, params, data.settings, data.headers)];
                    case 1: return [2 /*return*/, (_b.sent())];
                }
            });
        });
    };
    return ApiService;
}());
exports.ApiService = ApiService;


/***/ }),

/***/ "./src/core/ApiService/app/DomainResolver.ts":
/*!***************************************************!*\
  !*** ./src/core/ApiService/app/DomainResolver.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var GroupApiDomainService_1 = __webpack_require__(/*! src/core/ApiService/app/GroupApiDomainService */ "./src/core/ApiService/app/GroupApiDomainService.ts");
var Uri_1 = __webpack_require__(/*! ../../Gigya.Js/app/Utils/Uri */ "./src/core/Gigya.Js/app/Utils/Uri.ts");
var FlagService_1 = __webpack_require__(/*! ../../Gigya.Js/app/Services/FlagService */ "./src/core/Gigya.Js/app/Services/FlagService.ts");
exports.LoginTokenPrefix = 'gig_loginToken';
function shouldResetGroupApiDomain(customApiDomainPrefix, cachedApiDomain, ssoKey, trustedDomains, storage) {
    if (storage === void 0) { storage = window.gigya.utils.localStorage.initializeAdapter(window.gigya.utils.localStorage.CookieStorageAdapter); }
    // We should reset the cached groupApiDomain if
    // A. cachedApiDomain is in trusted urls list.
    // B. Or (#!)ALL(!#) of the requirements below are met:
    //   1. we have customAPIDomainPrefix defined for this site
    //   2. the customApiDomainPrefix is not the same as the one stored in cache (the most recent customApiDomainPrefix is not being used)
    //   3. user is not logged-in (loginToken "gig_loginToken_{ssoKey}" doesn't exists)
    var hasGroupLoginToken = Boolean(ssoKey && storage.getItem(exports.LoginTokenPrefix + "_" + ssoKey));
    if (!isTrustedDomain(cachedApiDomain, trustedDomains) && !hasGroupLoginToken) {
        return true;
    }
    if (!customApiDomainPrefix) {
        window.gigya.logger.info("no custom api domain prefix so..");
    }
    else {
        window.gigya.logger.info("has custom api domain prefix: " + customApiDomainPrefix);
        var cachedCustomApiDomainPrefix = cachedApiDomain && cachedApiDomain.split('.')[0];
        var hasCustomPrefixChanged = customApiDomainPrefix !== cachedCustomApiDomainPrefix;
        if (!hasCustomPrefixChanged) {
            window.gigya.logger.info("..and it already matches group api domain's (" + cachedApiDomain + ") so..");
        }
        else {
            window.gigya.logger.info("..and it's different from existing group api domain's (" + cachedApiDomain + ")");
            if (hasGroupLoginToken) {
                window.gigya.logger.info("..but a group session exists so..");
            }
            else {
                window.gigya.logger.debug("..and no group session -> resetting group api domain");
                return true;
            }
        }
    }
    // return customApiDomainPrefix && hasCustomPrefixChanged && !hasLoginToken;
    return false;
}
exports.shouldResetGroupApiDomain = shouldResetGroupApiDomain;
function createDomainResolver(dataCenter, trustedDomains, originDomain, defaultDomain, customApiDomainPrefix, groupApiDomainService, ssoKey) {
    if (groupApiDomainService === void 0) { groupApiDomainService = new GroupApiDomainService_1.GroupApiDomainService(); }
    if (ssoKey === void 0) { ssoKey = window.gigya.partnerSettings.ssoKey; }
    var log = window.gigya.logger.group("api domain resolver");
    var groupApiDomain = groupApiDomainService.get();
    var isGroupApiDomain = Boolean(groupApiDomain);
    var shouldResetApiDomain = isGroupApiDomain && shouldResetGroupApiDomain(customApiDomainPrefix, groupApiDomain, ssoKey, trustedDomains); // no stored api domain for group (first time in group or a non-group site)
    var effectiveApiDomain;
    if (isGroupApiDomain && !shouldResetApiDomain) {
        window.gigya.logger.info("using existing group api domain: " + groupApiDomain);
        effectiveApiDomain = groupApiDomain;
    }
    else {
        window.gigya.logger.info("resolving api domain");
        window.gigya.logger.info("trusted domains", trustedDomains);
        var baseDomain = window.gigya._.getBaseDomain(trustedDomains, originDomain, ['gigya.com', 'cn1.sapcdm.cn', defaultDomain]);
        window.gigya.logger.info("base domain: " + baseDomain);
        var resolvedApiDomain = window.gigya._.resolveApiDomain(customApiDomainPrefix, baseDomain, dataCenter, defaultDomain);
        window.gigya.logger.info("resolved api domain: " + resolvedApiDomain);
        if (ssoKey) {
            isGroupApiDomain = true;
        }
        effectiveApiDomain = resolvedApiDomain;
    }
    if (!FlagService_1.FlagService.setGroupApiDomainAfterLogin) {
        groupApiDomainService.set(effectiveApiDomain);
    }
    log.end();
    return {
        originDomain: originDomain,
        isGroupApiDomain: isGroupApiDomain,
        getApiDomain: window.gigya._.apiDomainFactory(effectiveApiDomain, defaultDomain),
        isApiDomainFirstParty: Boolean(customApiDomainPrefix),
        hasGroupApiDomainChanged: ssoKey && shouldResetApiDomain,
        canSaveGmidAsCookie: window.gigya.utils.cookie.canSaveCookie()
    };
}
exports.createDomainResolver = createDomainResolver;
function isTrustedDomain(domain, trustedUrls) {
    return !!window.gigya.utils.array.first(trustedUrls, function (trustedUrls) { return trustedUrls && Uri_1.Uri.parse(domain).isIn(trustedUrls); });
}


/***/ }),

/***/ "./src/core/ApiService/app/GmidProvider.ts":
/*!*************************************************!*\
  !*** ./src/core/ApiService/app/GmidProvider.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var FlagService_1 = __webpack_require__(/*! ../../Gigya.Js/app/Services/FlagService */ "./src/core/Gigya.Js/app/Services/FlagService.ts");
var SiteData_1 = __webpack_require__(/*! ../../Gigya.Js/app/Services/SiteData */ "./src/core/Gigya.Js/app/Services/SiteData.ts");
var GmidProvider;
(function (GmidProvider) {
    /**
     * Gmid version.
     */
    var HasGmid;
    (function (HasGmid) {
        HasGmid["ver2"] = "ver2";
        HasGmid["ver3"] = "ver3";
        HasGmid["ver4"] = "ver4";
    })(HasGmid = GmidProvider.HasGmid || (GmidProvider.HasGmid = {}));
    /**
     * Search actual version in cookies or from backend configuration
     * (it is set up for client on the backend side as gigya.gmidVersion).
     */
    var VersionSearchStrategy;
    (function (VersionSearchStrategy) {
        VersionSearchStrategy["cookieFirst"] = "cookieFirst";
        VersionSearchStrategy["configFirst"] = "configFirst";
    })(VersionSearchStrategy = GmidProvider.VersionSearchStrategy || (GmidProvider.VersionSearchStrategy = {}));
    /**
     * Return HasGmid context with all useful info.
     * @param gigyaObj Gigya global object.
     */
    function getHasGmidParam(gigyaObj) {
        var hasGmid = gigyaObj.utils.getParamValue(document.cookie, 'hasGmid', ';') || getGmidBootstrapParam(gigyaObj);
        return {
            isV3: hasGmid === HasGmid.ver3,
            isV4: hasGmid === HasGmid.ver4,
            hasGmid: hasGmid
        };
    }
    GmidProvider.getHasGmidParam = getHasGmidParam;
    /**
     * Return indication whether bootstrap need or not.
     * @param gigyaObj Gigya global object.
     * @param strategy Search actual version in cookies or from backend configuration.
     */
    function getGmidBootstrapIndicationToken(gigyaObj, strategy) {
        if (strategy === void 0) { strategy = VersionSearchStrategy.cookieFirst; }
        var version = getActualGmidVersion(gigyaObj, strategy);
        return convertHasGmidToBootstrapIndication(gigyaObj, version);
    }
    GmidProvider.getGmidBootstrapIndicationToken = getGmidBootstrapIndicationToken;
    /**
     * Return actual version of the gmid version cookie (ver3, ver4, etc).
     * @param gigyaObj Gigya global object.
     * @param strategy Search actual version in cookies or from backend configuration.
     */
    function getActualGmidVersion(gigyaObj, strategy) {
        if (strategy === void 0) { strategy = VersionSearchStrategy.cookieFirst; }
        var hasGmidContext = getHasGmidParam(gigyaObj);
        return strategy == VersionSearchStrategy.cookieFirst
            ? (hasGmidContext.hasGmid || gigyaObj.gmidVersion || 'ver3')
            : (gigyaObj.gmidVersion || hasGmidContext.hasGmid || 'ver3');
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
        return !isSessionActive && (shouldForceBootstrap() || !hasLatestVer4Gmid);
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
        return (gigyaObj.partnerSettings.customAPIDomainPrefix || '_gigya') + ("_" + gmidVersion);
    }
    GmidProvider.convertHasGmidToBootstrapIndication = convertHasGmidToBootstrapIndication;
    function getGmidBootstrapParam(gigyaObj) {
        var _a;
        var gmidBootstrapCookie = gigyaObj.utils.cookie.get("gig_bootstrap_" + gigyaObj.apiKey);
        return (_a = gigyaObj.utils.array.getArrayFromString(gmidBootstrapCookie, '_')) === null || _a === void 0 ? void 0 : _a.pop();
    }
    function shouldForceBootstrap() {
        return FlagService_1.FlagService.forceWebSdkBootstrap && !SiteData_1.siteData.didForcedBootstrap;
    }
    GmidProvider.shouldForceBootstrap = shouldForceBootstrap;
})(GmidProvider = exports.GmidProvider || (exports.GmidProvider = {}));


/***/ }),

/***/ "./src/core/ApiService/app/GroupApiDomainService.ts":
/*!**********************************************************!*\
  !*** ./src/core/ApiService/app/GroupApiDomainService.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var LocalInfo_1 = __webpack_require__(/*! ../../Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var GroupApiDomainKey = 'apiDomain';
var GroupApiDomainService = /** @class */ (function () {
    function GroupApiDomainService(_ssoKey, _storage, _pageDomain) {
        if (_ssoKey === void 0) { _ssoKey = window.gigya.partnerSettings.ssoKey; }
        if (_storage === void 0) { _storage = window.gigya.utils.localStorage.initializeAdapter(window.gigya.utils.localStorage.CookieStorageAdapter); }
        if (_pageDomain === void 0) { _pageDomain = LocalInfo_1.localInfo.pageDomain; }
        this._ssoKey = _ssoKey;
        this._storage = _storage;
        this._pageDomain = _pageDomain;
        this._cookieName = GroupApiDomainKey + "_" + this._ssoKey;
    }
    GroupApiDomainService.prototype.get = function () {
        return this._ssoKey ? this._storage.getItem(this._cookieName) : undefined;
    };
    GroupApiDomainService.prototype.set = function (apiDomain) {
        if (this._ssoKey) {
            window.gigya.logger.info("setting as group api domain for " + this._ssoKey);
            this._storage.removeItem(this._cookieName);
            this._storage.setItem(this._cookieName, apiDomain, undefined, this._pageDomain);
        }
    };
    return GroupApiDomainService;
}());
exports.GroupApiDomainService = GroupApiDomainService;


/***/ }),

/***/ "./src/core/ApiService/app/Request.ts":
/*!********************************************!*\
  !*** ./src/core/ApiService/app/Request.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var GSErrors_1 = __webpack_require__(/*! ../../Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var interfaces_1 = __webpack_require__(/*! ./interfaces */ "./src/core/ApiService/app/interfaces.ts");
var LocalInfo_1 = __webpack_require__(/*! ../../Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var constants_1 = __webpack_require__(/*! ../../../accounts/constants */ "./src/accounts/constants.ts");
var Request = /** @class */ (function () {
    function Request(baseDomain, method, params, settings) {
        var _this = this;
        if (settings === void 0) { settings = {}; }
        this.baseDomain = baseDomain;
        this.method = method;
        this.params = params;
        this.settings = settings;
        this.retry = 0;
        this.getUrl = function () { return window.gigya._.Uri.parse(_this.baseDomain + "/" + _this.method); };
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
                            window.gigya.logger.warn("Aborting Request for " + this.method + ". Path manipulation detected.");
                            return [2 /*return*/];
                        }
                        try {
                            this.params = window.gigya.utils.object.decodeObjectKeys(this.params);
                        }
                        catch (ex) {
                            window.gigya.logger.error('Request API Error - Failed to decode object keys', {
                                exception: ex,
                                requestParams: JSON.stringify(this.params)
                            });
                            return [2 /*return*/];
                        }
                        this.addDefaultParams();
                        return [4 /*yield*/, this.performSend(this.getRequestType(), ignoreCacheTimeout)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    Request.prototype.handleResponse = function (response) {
        var _this = this;
        if (this.settings.cacheTimeout) {
            window.gigya.utils.sessionCache.set(this.getCacheKey(), response['errorCode'] == GSErrors_1.GSErrors.OK ? response : null);
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
        }
        else {
            this.dispose();
            return response;
        }
    };
    Request.prototype.getCacheKey = function () {
        return this.method + "_" + window.gigya.utils.keyValue.serialize(this.params);
    };
    Request.prototype.getFullUrl = function () {
        var url = this.getUrl();
        return url.addToSearch(this.getFlattenParams()).href;
    };
    Request.prototype.addDefaultParams = function () {
        var _a, _b;
        this.params['sdk'] = 'js_' + (((_a = window.gigya.build) === null || _a === void 0 ? void 0 : _a.version) || '');
        this.params['sdkBuild'] = ((_b = window.gigya.build) === null || _b === void 0 ? void 0 : _b.number) || 0;
    };
    Request.prototype.isRequestPathManipulated = function () {
        return this.getUrl().href.toLowerCase() !== (this.baseDomain + "/" + this.method).toLowerCase() || this.getUrl().search.length > 0;
    };
    Request.prototype.getDataPendingTimeout = function (retry) {
        if (retry <= 4)
            return 500;
        if (retry <= 4 + 4)
            return 1000;
        if (retry <= 4 + 4 + 13)
            return 2000;
        if (retry <= 4 + 4 + 13 + 18)
            return 5000;
        return -1;
    };
    Request.prototype.getRequestType = function () {
        if (this.isForcePost || this.haveSensitiveParams() || this.requestOversize()) {
            return interfaces_1.RequestType.POST;
        }
        return interfaces_1.RequestType.GET;
    };
    Object.defineProperty(Request.prototype, "isForcePost", {
        get: function () {
            return this.settings.forcePost;
        },
        enumerable: true,
        configurable: true
    });
    Request.prototype.requestOversize = function () {
        var reqUrlLength = this.getRequestUrlLength();
        var _a = this.getUrlLengthFields(), extraLength = _a.extraLength, maxLength = _a.maxLength;
        return reqUrlLength + extraLength > maxLength;
    };
    Request.prototype.getRequestUrlLength = function () {
        var url = this.getUrl();
        return (url.href + window.gigya.utils.keyValue.serialize(this.getFlattenParams())).length;
    };
    Request.prototype.getUrlLengthFields = function () {
        var extraLength = 0; //8000;
        var maxLength = 4 * 1024;
        if (window.gigya.localInfo.isIE || window.gigya.localInfo.isEdgeLegacy) {
            extraLength = 2 * 1024;
        }
        return { extraLength: extraLength, maxLength: maxLength };
    };
    Request.prototype.getFlattenParams = function () {
        return window.gigya.utils.keyValue.deserialize(window.gigya.utils.keyValue.serialize(this.params));
    };
    Request.prototype.haveSensitiveParams = function () {
        var _a;
        for (var _i = 0, _b = constants_1.sensitiveParamsOverride === null || constants_1.sensitiveParamsOverride === void 0 ? void 0 : constants_1.sensitiveParamsOverride.split('|'); _i < _b.length; _i++) {
            var param = _b[_i];
            if ((_a = this.params) === null || _a === void 0 ? void 0 : _a.hasOwnProperty(param)) {
                return true;
            }
        }
    };
    return Request;
}());
exports.Request = Request;


/***/ }),

/***/ "./src/core/ApiService/app/RequestProvider.ts":
/*!****************************************************!*\
  !*** ./src/core/ApiService/app/RequestProvider.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var RequestProvider = /** @class */ (function () {
    function RequestProvider(_xhrRequest, timeout, _win) {
        if (_xhrRequest === void 0) { _xhrRequest = window.gigya.XhrRequest; }
        if (timeout === void 0) { timeout = 15000; }
        if (_win === void 0) { _win = window; }
        this._xhrRequest = _xhrRequest;
        this.timeout = timeout;
        this._win = _win;
    }
    RequestProvider.prototype.send = function (baseDomain, methodName, params, settings, headers) {
        if (headers === void 0) { headers = {}; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new gigya.Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        var request, timeoutId, _a, err_1;
                        return tslib_1.__generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    request = new this._xhrRequest(baseDomain, methodName, params, settings, headers);
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
                                    window.gigya.logger.report('XHR request failed', { methodName: methodName, params: params, settings: settings, err: err_1 });
                                    reject("Request for " + methodName + " failed");
                                    return [3 /*break*/, 5];
                                case 4:
                                    this._win.clearTimeout(timeoutId);
                                    return [7 /*endfinally*/];
                                case 5: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    return RequestProvider;
}());
exports.RequestProvider = RequestProvider;


/***/ }),

/***/ "./src/core/ApiService/app/XhrRequest.ts":
/*!***********************************************!*\
  !*** ./src/core/ApiService/app/XhrRequest.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var Request_1 = __webpack_require__(/*! ./Request */ "./src/core/ApiService/app/Request.ts");
var GSErrors_1 = __webpack_require__(/*! ../../Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var interfaces_1 = __webpack_require__(/*! ./interfaces */ "./src/core/ApiService/app/interfaces.ts");
var FlagService_1 = __webpack_require__(/*! ../../Gigya.Js/app/Services/FlagService */ "./src/core/Gigya.Js/app/Services/FlagService.ts");
var XhrRequest = /** @class */ (function (_super) {
    tslib_1.__extends(XhrRequest, _super);
    function XhrRequest(baseDomain, method, params, settings, requestHeaders) {
        if (settings === void 0) { settings = {}; }
        if (requestHeaders === void 0) { requestHeaders = {}; }
        var _this = _super.call(this, baseDomain, method, params, settings) || this;
        _this.headers = {};
        _this.xhttp = new XMLHttpRequest();
        _this.setRequestHeaders(requestHeaders);
        return _this;
    }
    ;
    XhrRequest.prototype.performSend = function (requestType, ignoreCacheTimeout) {
        var _this = this;
        return new gigya.Promise(function (resolve, reject) {
            var requestPostParams;
            var reqUrl = _this.getFullUrl();
            // Set request on load
            _this.xhttp.onload = function () { return _this.onRequestLoad(resolve, reject); };
            // Set request on error
            _this.xhttp.onerror = function () { return reject(_this.createErrorFromResponse('XHR_FAILURE - http request onerror event')); };
            // Allow XMLHttp request to attach cookies
            _this.xhttp.withCredentials = true;
            if (requestType === interfaces_1.RequestType.POST) {
                reqUrl = _this.getUrl().href;
                // Option request go out without apiKey and fails
                // we add it in case headers has change
                if (_this.hasHeaders()) {
                    reqUrl += "?APIKey=" + _this.params['APIKey'];
                }
                requestPostParams = window.gigya.utils.keyValue.serialize(_this.params);
                _this.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            }
            _this.xhttp.open(requestType, reqUrl, true);
            // Add required headers to the request
            Object.keys(_this.headers).forEach(function (header) {
                _this.xhttp.setRequestHeader(header, _this.headers[header]);
            });
            _this.xhttp.send(requestPostParams);
        });
    };
    ;
    XhrRequest.prototype.hasHeaders = function () {
        return !!Object.keys(this.headers).length;
    };
    XhrRequest.prototype.onRequestLoad = function (resolve, reject) {
        var jsonResponse;
        try {
            jsonResponse = JSON.parse(this.xhttp.responseText);
        }
        catch (e) {
            window.gigya.logger.report('XHR_FAILURE - failed to parse the response object', { responseText: this.xhttp.responseText });
        }
        if (this.xhttp.readyState !== 4 || !(jsonResponse === null || jsonResponse === void 0 ? void 0 : jsonResponse.statusCode)) {
            reject(this.createErrorFromResponse('XHR_FAILURE - http request failed'));
            return;
        }
        resolve(this.handleResponse(jsonResponse));
    };
    ;
    XhrRequest.prototype.createErrorFromResponse = function (message) {
        return {
            errorMessage: message,
            status: this.xhttp.status,
            readyState: this.xhttp.readyState,
            responseText: this.xhttp.responseText
        };
    };
    XhrRequest.prototype.addDefaultParams = function () {
        _super.prototype.addDefaultParams.call(this);
        this.params['format'] = 'json';
        if (FlagService_1.FlagService.useHttpStatusCode && this.settings.useHttpStatusCodes) {
            this.params['httpStatusCodes'] = true;
        }
    };
    XhrRequest.prototype.networkErrorResponse = function () {
        return this.handleResponse({
            errorCode: GSErrors_1.GSErrors.NETWORK_ERROR,
            errorMessage: 'Network_error',
        });
    };
    XhrRequest.prototype.dispose = function () { };
    ;
    XhrRequest.prototype.setRequestHeaders = function (requestHeaders) {
        var _this = this;
        var supportedHeaders = ['Authorization'];
        Object.keys(requestHeaders).filter(function (header) { return supportedHeaders.indexOf(header) !== -1; }).forEach(function (header) {
            var headerValue = requestHeaders[header];
            if (Boolean(headerValue) && typeof headerValue === 'string') {
                _this.headers[header] = headerValue;
            }
        });
    };
    return XhrRequest;
}(Request_1.Request));
exports.XhrRequest = XhrRequest;


/***/ }),

/***/ "./src/core/ApiService/app/gigyaUtils.ts":
/*!***********************************************!*\
  !*** ./src/core/ApiService/app/gigyaUtils.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var cookie_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/cookie */ "./src/core/Gigya.Js/app/Utils/cookie.ts");
var GigyaUtilsDOM = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/DOM */ "./src/core/Gigya.Js/app/Utils/DOM.ts");
var GigyaUtilsDomains = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/domains */ "./src/core/Gigya.Js/app/Utils/domains.ts");
var GigyaUtilsFunctions = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/functions */ "./src/core/Gigya.Js/app/Utils/functions.ts");
var GigyaUtilsJSON = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var GigyaUtilsKeyValue = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/keyValue */ "./src/core/Gigya.Js/app/Utils/keyValue.ts");
var GigyaUtilsLocalStorage = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/localStorage */ "./src/core/Gigya.Js/app/Utils/localStorage.ts");
var GigyaUtilsStringParams = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/stringParams */ "./src/core/Gigya.Js/app/Utils/stringParams.ts");
var GigyaUtilsObject = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
var GigyaUtilsScript = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/script */ "./src/core/Gigya.Js/app/Utils/script.ts");
var GigyaUtilsSessionCache = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/sessionCache */ "./src/core/Gigya.Js/app/Utils/sessionCache.ts");
var GigyaUtilsLocalCache = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/localCache */ "./src/core/Gigya.Js/app/Utils/localCache.ts");
var GigyaUtilsUri = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/Uri */ "./src/core/Gigya.Js/app/Utils/Uri.ts");
var GigyaUtilsURL = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/URL */ "./src/core/Gigya.Js/app/Utils/URL.ts");
var GigyaUtilsValidation = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/validation */ "./src/core/Gigya.Js/app/Utils/validation.ts");
var GigyaUtilsArray = __webpack_require__(/*! ../../Gigya.Js/app/Utils/array */ "./src/core/Gigya.Js/app/Utils/array.ts");
if (!window.gigya._) {
    window.gigya._ = {};
}
if (!window.gigya.utils) {
    window.gigya.utils = {};
}
if (!window.gigya.utils.array) {
    window.gigya.utils.array = {};
}
if (!window.gigya.utils.cookie) {
    window.gigya.utils.cookie = cookie_1.default;
}
if (!window.gigya.utils.DOM) {
    window.gigya.utils.DOM = {};
}
if (!window.gigya.utils.functions) {
    window.gigya.utils.functions = {};
}
if (!window.gigya.utils.JSON) {
    window.gigya.utils.JSON = {};
}
if (!window.gigya.utils.keyValue) {
    window.gigya.utils.keyValue = {};
}
if (!window.gigya.utils.localStorage) {
    window.gigya.utils.localStorage = {};
}
if (!window.gigya.utils.object) {
    window.gigya.utils.object = {};
}
if (!window.gigya.utils.script) {
    window.gigya.utils.script = {};
}
if (!window.gigya.utils.sessionCache) {
    window.gigya.utils.sessionCache = {};
}
if (!window.gigya.utils.localCache) {
    window.gigya.utils.localCache = {};
}
if (!window.gigya.utils.stringUtils) {
    window.gigya.utils.stringUtils = {};
}
if (!window.gigya.utils.URL) {
    window.gigya.utils.URL = {};
}
if (!window.gigya.utils.validation) {
    window.gigya.utils.validation = {};
}
__webpack_provided_Object_dot_assign(window.gigya._, GigyaUtilsUri, GigyaUtilsDomains);
__webpack_provided_Object_dot_assign(window.gigya.utils.array, GigyaUtilsArray);
__webpack_provided_Object_dot_assign(window.gigya.utils.DOM, GigyaUtilsDOM);
__webpack_provided_Object_dot_assign(window.gigya.utils.functions, GigyaUtilsFunctions);
__webpack_provided_Object_dot_assign(window.gigya.utils.JSON, GigyaUtilsJSON);
__webpack_provided_Object_dot_assign(window.gigya.utils.keyValue, GigyaUtilsKeyValue);
__webpack_provided_Object_dot_assign(window.gigya.utils.localStorage, GigyaUtilsLocalStorage);
__webpack_provided_Object_dot_assign(window.gigya.utils.object, GigyaUtilsObject);
__webpack_provided_Object_dot_assign(window.gigya.utils.script, GigyaUtilsScript);
__webpack_provided_Object_dot_assign(window.gigya.utils.sessionCache, GigyaUtilsSessionCache);
__webpack_provided_Object_dot_assign(window.gigya.utils.localCache, GigyaUtilsLocalCache);
__webpack_provided_Object_dot_assign(window.gigya.utils.URL, GigyaUtilsURL);
__webpack_provided_Object_dot_assign(window.gigya.utils.validation, GigyaUtilsValidation);
__webpack_provided_Object_dot_assign(window.gigya.utils, GigyaUtilsStringParams);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/core/ApiService/app/interfaces.ts":
/*!***********************************************!*\
  !*** ./src/core/ApiService/app/interfaces.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var RequestType;
(function (RequestType) {
    RequestType["GET"] = "GET";
    RequestType["POST"] = "POST";
})(RequestType = exports.RequestType || (exports.RequestType = {}));


/***/ }),

/***/ "./src/core/ApiService/app/main.ts":
/*!*****************************************!*\
  !*** ./src/core/ApiService/app/main.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
__webpack_require__(/*! src/core/Gigya.Js/app/GigyaGlobals */ "./src/core/Gigya.Js/app/GigyaGlobals.ts");
__webpack_require__(/*! src/core/Gigya.Js/app/Logger/main */ "./src/core/Gigya.Js/app/Logger/main.ts");
__webpack_require__(/*! src/core/ApiService/app/gigyaUtils */ "./src/core/ApiService/app/gigyaUtils.ts");
__webpack_require__(/*! src/core/Gigya.Js/app/Logger/main */ "./src/core/Gigya.Js/app/Logger/main.ts");
var LocalInfo = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var XhrRequest = __webpack_require__(/*! ./XhrRequest */ "./src/core/ApiService/app/XhrRequest.ts");
var Request = __webpack_require__(/*! ./Request */ "./src/core/ApiService/app/Request.ts");
var GroupApiDomainService_1 = __webpack_require__(/*! src/core/ApiService/app/GroupApiDomainService */ "./src/core/ApiService/app/GroupApiDomainService.ts");
var DomainResolver_1 = __webpack_require__(/*! src/core/ApiService/app/DomainResolver */ "./src/core/ApiService/app/DomainResolver.ts");
var ApiService_1 = __webpack_require__(/*! src/core/ApiService/app/ApiService */ "./src/core/ApiService/app/ApiService.ts");
var ProxyListener_1 = __webpack_require__(/*! src/core/ServiceProxy/ProxyListener */ "./src/core/ServiceProxy/ProxyListener.ts");
var domains_1 = __webpack_require__(/*! ../../Gigya.Js/app/Utils/domains */ "./src/core/Gigya.Js/app/Utils/domains.ts");
var GmidProvider_1 = __webpack_require__(/*! ./GmidProvider */ "./src/core/ApiService/app/GmidProvider.ts");
var apiBootstrap_1 = __webpack_require__(/*! src/core/Gigya.Js/app/apiBootstrap */ "./src/core/Gigya.Js/app/apiBootstrap.ts");
var array_1 = __webpack_require__(/*! ../../Gigya.Js/app/Utils/array */ "./src/core/Gigya.Js/app/Utils/array.ts");
/**
 * this file will be inject into api.aspx
 */
if (!window.gigya.apiKey) // falling back to apiKey from query string in case something went wrong on our back end.
    window.gigya.apiKey = window.gigya.utils.getReqParamValue(location.search, 'apiKey');
var apiKey = window.gigya.apiKey, dataCenter = window.gigya.dataCenter, configHostnameOverride = window.gigya.configHostnameOverride;
(function main() {
    var _a, _b, _c, _d;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var webSdkConfig, originDomain, configHostname, groupApiDomainService, trustedDomains, domainResolver, hasGmidContext, hasGmid, apiService, listener, e_1;
        return tslib_1.__generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 2, , 3]);
                    originDomain = getOriginDomain();
                    configHostname = configHostnameOverride || getOriginHostName() || "https://" + domains_1.getStorageDomain();
                    return [4 /*yield*/, getConfig(originDomain, configHostname)];
                case 1:
                    webSdkConfig = _e.sent();
                    window.gigya._.config = {
                        flags: webSdkConfig.flags,
                        api: webSdkConfig.api,
                        plugins: webSdkConfig.plugins,
                        hostedPagesDomain: webSdkConfig.hostedPagesDomain,
                        toggles: {
                            linkAccountV2: (_a = webSdkConfig.toggles) === null || _a === void 0 ? void 0 : _a.linkAccountV2,
                            httpStatusCodes: (_b = webSdkConfig.toggles) === null || _b === void 0 ? void 0 : _b.httpStatusCodes
                        },
                        consent: {
                            hasLicense: (_c = webSdkConfig.hasConsentLicense) !== null && _c !== void 0 ? _c : false
                        }
                    };
                    LocalInfo.localInfo.baseDomain = domains_1.getBaseDomain(webSdkConfig.api.baseDomains);
                    __webpack_provided_Object_dot_assign(window.gigya, LocalInfo, Request, XhrRequest);
                    groupApiDomainService = new GroupApiDomainService_1.GroupApiDomainService();
                    trustedDomains = array_1.getUniqueValues(webSdkConfig.api.baseDomains.concat(((_d = webSdkConfig.sso) === null || _d === void 0 ? void 0 : _d.validDomains) || []));
                    domainResolver = DomainResolver_1.createDomainResolver(dataCenter, trustedDomains, originDomain, window.gigya.defaultApiDomain, webSdkConfig.api.customAPIDomainPrefix, groupApiDomainService);
                    hasGmidContext = GmidProvider_1.GmidProvider.getHasGmidParam(window.gigya);
                    hasGmid = hasGmidContext.isV3 || hasGmidContext.isV4;
                    apiService = new ApiService_1.ApiService(apiKey, hasGmid, domainResolver, groupApiDomainService);
                    listener = new ProxyListener_1.ProxyListener(apiService, originDomain);
                    listener.listen({
                        apiDomain: domainResolver.getApiDomain(),
                        isGroupApiDomain: domainResolver.isGroupApiDomain,
                        hasGroupApiDomainChanged: domainResolver.hasGroupApiDomainChanged,
                        canSaveGmidAsCookie: window.gigya.utils.cookie.canSaveCookie()
                    });
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _e.sent();
                    window.gigya.logger.error("gigya: error loading api frame", { e: e_1 });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
})();
function getConfig(originDomain, configHostname) {
    return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
        var webSdkConfig, ex_1, listener;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, apiBootstrap_1.getSdkConfig(configHostname)];
                case 1:
                    webSdkConfig = _a.sent();
                    if (webSdkConfig.statusCode !== 200 || webSdkConfig.errorCode !== 0) {
                        throw new Error("config.get failed with statusCode: " + webSdkConfig.statusCode + " and errorCode: " + webSdkConfig.errorCode);
                    }
                    return [2 /*return*/, webSdkConfig];
                case 2:
                    ex_1 = _a.sent();
                    listener = new ProxyListener_1.ProxyListener({}, originDomain);
                    listener.postError({ res: 'Bootstrap failed on: get config', id: '0' });
                    throw new Error('Bootstrap failed on: get config');
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getOriginDomain() {
    // in iframe
    if (window.location != window.parent.location) {
        return window.document.referrer || window.gigya.utils.getReqParamValue(location.hash, 'origin');
    }
    else {
        return window.document.location.href;
    }
}
function getOriginHostName() {
    var _a;
    return (_a = window.location) === null || _a === void 0 ? void 0 : _a.hostname;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js")["__assign"]))

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

/***/ "./src/core/Gigya.Js/app/Services/SiteData.ts":
/*!****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Services/SiteData.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var localStorage_1 = __webpack_require__(/*! ../Utils/localStorage */ "./src/core/Gigya.Js/app/Utils/localStorage.ts");
var object_1 = __webpack_require__(/*! ../Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
var _merge = __webpack_require__(/*! lodash.merge */ "../node_modules/lodash.merge/index.js");
var MAX_LIMIT_OF_USERS_PREFERRED_LOGIN_METHODS_PER_SITE = 10;
var SiteDataService = /** @class */ (function () {
    function SiteDataService() {
    }
    Object.defineProperty(SiteDataService, "SITE_PREFERENCES_KEY", {
        get: function () {
            return window.gigya.apiKey + "_preferences";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteDataService, "SITE_GIG_KEY", {
        get: function () {
            return window.gigya.apiKey + "_gig";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteDataService.prototype, "didForcedBootstrap", {
        get: function () {
            return this.getDataByKey(SiteDataService.SITE_GIG_KEY).didForcedBootstrap || null;
        },
        set: function (didForcedBootstrap) {
            this.setDataByKey(SiteDataService.SITE_GIG_KEY, { didForcedBootstrap: didForcedBootstrap });
        },
        enumerable: true,
        configurable: true
    });
    SiteDataService.prototype.getPreferredLoginMethod = function (identifier) {
        var _a, _b, _c, _d;
        if (!identifier) {
            return '';
        }
        var userPreferences = this.getDataByKey(SiteDataService.SITE_PREFERENCES_KEY);
        var usersPreferredLoginMethods = (_b = (_a = userPreferences === null || userPreferences === void 0 ? void 0 : userPreferences.authentication) === null || _a === void 0 ? void 0 : _a.usersPreferredLoginMethods) !== null && _b !== void 0 ? _b : [];
        return (_d = (_c = usersPreferredLoginMethods.find(function (user) { return user.identifier === identifier; })) === null || _c === void 0 ? void 0 : _c.preferredLoginMethod) !== null && _d !== void 0 ? _d : '';
    };
    SiteDataService.prototype.setPreferredLoginMethod = function (authMethod, identifier) {
        var _a, _b, _c, _d;
        if (!identifier) {
            return;
        }
        var userPreferences = this.getDataByKey(SiteDataService.SITE_PREFERENCES_KEY);
        var usersPreferredLoginMethods = tslib_1.__spreadArrays((_b = (_a = userPreferences === null || userPreferences === void 0 ? void 0 : userPreferences.authentication) === null || _a === void 0 ? void 0 : _a.usersPreferredLoginMethods) !== null && _b !== void 0 ? _b : []);
        var tfaPreferredMethod = (_d = (_c = userPreferences === null || userPreferences === void 0 ? void 0 : userPreferences.authentication) === null || _c === void 0 ? void 0 : _c.tfaPreferredMethod) !== null && _d !== void 0 ? _d : '';
        var isUserExists = usersPreferredLoginMethods.some(function (user) { return user.identifier === identifier; });
        if (this.isMaxLimitUsersPreferredLoginMethodsReached(usersPreferredLoginMethods) && !isUserExists) {
            usersPreferredLoginMethods = this.removeOldestUserPreferredLoginMethod(usersPreferredLoginMethods);
        }
        if (!isUserExists) {
            usersPreferredLoginMethods = this.addUserPreferredLoginMethod(usersPreferredLoginMethods, { identifier: identifier, preferredLoginMethod: authMethod });
        }
        if (isUserExists) {
            usersPreferredLoginMethods = this.refreshExistingUserPreferredLoginMethod({ authMethod: authMethod, identifier: identifier, usersPreferredLoginMethods: usersPreferredLoginMethods });
        }
        this.setDataByKey(SiteDataService.SITE_PREFERENCES_KEY, { authentication: { usersPreferredLoginMethods: usersPreferredLoginMethods, tfaPreferredMethod: tfaPreferredMethod } });
    };
    SiteDataService.prototype.setScreenVariant = function (screenSetId, screenId, testId, variantId) {
        var _a, _b, _c;
        this.setDataByKey(SiteDataService.SITE_PREFERENCES_KEY, (_a = {},
            _a[screenSetId] = {
                screens: (_b = {},
                    _b[screenId] = (_c = {}, _c[testId] = { variant: variantId }, _c),
                    _b)
            },
            _a));
    };
    SiteDataService.prototype.getScreenVariant = function (screenSetId, screenId, testId) {
        var _a, _b, _c, _d;
        var preferences = this.getDataByKey(SiteDataService.SITE_PREFERENCES_KEY);
        return (_d = (_c = (_b = (_a = preferences === null || preferences === void 0 ? void 0 : preferences[screenSetId]) === null || _a === void 0 ? void 0 : _a.screens) === null || _b === void 0 ? void 0 : _b[screenId]) === null || _c === void 0 ? void 0 : _c[testId]) === null || _d === void 0 ? void 0 : _d.variant;
    };
    SiteDataService.prototype.getDataByKey = function (key) {
        return localStorage_1.getObject(key, {});
    };
    SiteDataService.prototype.setDataByKey = function (key, newData) {
        var oldData = this.getDataByKey(key);
        try {
            localStorage_1.setObject(key, object_1.removeUndefined(_merge(oldData, newData)));
        }
        catch (error) {
            window.gigya.logger.report('Failed to save local site data', { error: error, key: key });
        }
    };
    SiteDataService.prototype.refreshExistingUserPreferredLoginMethod = function (_a) {
        var usersPreferredLoginMethods = _a.usersPreferredLoginMethods, identifier = _a.identifier, authMethod = _a.authMethod;
        var remainingMethods = this.removeUserPreferredLoginMethod(usersPreferredLoginMethods, identifier);
        return this.addUserPreferredLoginMethod(remainingMethods, { identifier: identifier, preferredLoginMethod: authMethod });
    };
    SiteDataService.prototype.removeUserPreferredLoginMethod = function (usersPreferredLoginMethods, identifier) {
        return usersPreferredLoginMethods.filter(function (userLoginMethod) { return userLoginMethod.identifier !== identifier; });
    };
    SiteDataService.prototype.isMaxLimitUsersPreferredLoginMethodsReached = function (usersPreferredLoginMethods) {
        return usersPreferredLoginMethods.length === MAX_LIMIT_OF_USERS_PREFERRED_LOGIN_METHODS_PER_SITE;
    };
    SiteDataService.prototype.removeOldestUserPreferredLoginMethod = function (usersPreferredLoginMethods) {
        var oldestMethod = usersPreferredLoginMethods[0];
        return this.removeUserPreferredLoginMethod(usersPreferredLoginMethods, oldestMethod === null || oldestMethod === void 0 ? void 0 : oldestMethod.identifier);
    };
    SiteDataService.prototype.addUserPreferredLoginMethod = function (usersPreferredLoginMethods, userPreferredLogin) {
        return tslib_1.__spreadArrays(usersPreferredLoginMethods, [userPreferredLogin]);
    };
    return SiteDataService;
}());
exports.SiteDataService = SiteDataService;
exports.siteData = new SiteDataService();


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

/***/ "./src/core/Gigya.Js/app/Utils/array.ts":
/*!**********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/array.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function indexOf(ar, o) {
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] == o)
            return i;
    }
    return -1;
}
exports.indexOf = indexOf;
function clone(ar) {
    var ar2 = [];
    for (var i = 0; i < ar.length; i++) {
        ar2[i] = ar[i];
    }
    return ar2;
}
exports.clone = clone;
function removeByValue(ar, value) {
    if (!ar)
        return;
    for (var i = ar.length - 1; i >= 0; i--) {
        if (ar[i] == value) {
            ar.splice(i, 1);
        }
    }
}
exports.removeByValue = removeByValue;
function removeByProperty(ar, property, value) {
    if (!ar)
        return;
    for (var i = ar.length - 1; i >= 0; i--) {
        if (ar[i][property] == value) {
            ar.splice(i, 1);
        }
    }
}
exports.removeByProperty = removeByProperty;
function getArrayFromString(str, delimiter, lowerCase) {
    // check for string type in the input and not empty.
    if (!str || typeof str != 'string')
        return [];
    // lowercase if demended
    if (lowerCase)
        str = str.toLowerCase();
    // clean the string:
    str = str.replace(/[ ]/g, '').replace(/,,/g, ',');
    // if string empty
    if (!str)
        return [];
    // return array from string
    return str.split(delimiter);
}
exports.getArrayFromString = getArrayFromString;
function intersect(array) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (array == null)
        return [];
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = array.length; i < length; i++) {
        var item = array[i];
        if (this.indexOf(result, item) != -1)
            continue;
        for (var j = 1; j < argsLength; j++) {
            var arr = arguments[j];
            if (arr == null || this.indexOf(arr, item) == -1)
                break;
        }
        if (j === argsLength)
            result.push(item);
    }
    return result;
}
exports.intersect = intersect;
function lastIndexOf(arr, val, fromIndex) {
    if (fromIndex === void 0) { fromIndex = 0; }
    for (var i = arr.length; --i >= fromIndex;) {
        if (arr[i] === val)
            return i;
    }
    return -1;
}
exports.lastIndexOf = lastIndexOf;
function forEach(arr, action) {
    for (var i = 0; i < arr.length; ++i)
        action(arr[i], i, arr);
}
exports.forEach = forEach;
function forEachProp(obj, action) {
    for (var name in obj) {
        if (obj.hasOwnProperty(name))
            action(obj[name], name, obj);
    }
}
exports.forEachProp = forEachProp;
function some(arr, condition) {
    for (var i = 0; i < arr.length; ++i) {
        if (condition(arr[i], i, arr))
            return true;
    }
    return false;
}
exports.some = some;
function every(arr, condition) {
    for (var i = 0; i < arr.length; ++i) {
        if (!condition(arr[i], i, arr))
            return false;
    }
    return true;
}
exports.every = every;
function everyProp(obj, condition) {
    for (var name in obj) {
        if (obj.hasOwnProperty(name) && !condition(obj[name], name, obj))
            return false;
    }
    return true;
}
exports.everyProp = everyProp;
function map(arr, action) {
    var result = new Array();
    forEach(arr, function (item, idx, arr) { return result.push(action(item, idx, arr)); });
    return result;
}
exports.map = map;
function firstIndex(arr, condition) {
    var result = -1;
    some(arr, function (item, index, arr) {
        if (condition(item, index, arr)) {
            result = index;
            return true;
        }
        return false;
    });
    return result;
}
exports.firstIndex = firstIndex;
function first(arr, condition) {
    return arr[firstIndex(arr, condition)];
}
exports.first = first;
function getAllEnumValues(enumType) {
    var results = [];
    for (var i in enumType)
        if (typeof enumType[i] == 'number')
            results.push(enumType[i]);
    return results;
}
exports.getAllEnumValues = getAllEnumValues;
function getUniqueValues(arr) {
    for (var i = 0; i < arr.length; ++i) {
        for (var j = i + 1; j < arr.length; j++)
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
            }
    }
    return arr;
}
exports.getUniqueValues = getUniqueValues;
function includes(arr, item) {
    if (arr === void 0) { arr = []; }
    return (arr === null || arr === void 0 ? void 0 : arr.indexOf(item)) >= 0;
}
exports.includes = includes;
function containsOnly(arr1, arr2) {
    if (!arr1 || !arr2)
        return false;
    if (arr1.length !== arr2.length)
        return false;
    if (arr1.length === 0 && arr2.length === 0)
        return true;
    return !arr1.some(function (elem) { return !includes(arr2, elem); });
}
exports.containsOnly = containsOnly;


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

/***/ "./src/core/Gigya.Js/app/Utils/localCache.ts":
/*!***************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/localCache.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var queueUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/queue */ "./src/core/Gigya.Js/app/Utils/queue.ts");
var FlagService_1 = __webpack_require__(/*! ../Services/FlagService */ "./src/core/Gigya.Js/app/Services/FlagService.ts");
var localStorageEnabled;
try {
    localStorageEnabled = Boolean(window.localStorage); // when 3pc blocked, chrome throws when trying to access local storage.
}
catch (ex) {
    localStorageEnabled = false;
}
function set(key, response) {
    if (!localStorageEnabled)
        return;
    var oGigya;
    try {
        oGigya = JSONUtils.deserialize(window.localStorage.getItem('gigyaCache'));
        if (response == null && oGigya[key]) {
            delete oGigya[key];
        }
        else {
            var time = new Date().getTime();
            oGigya[key] = { response: response, time: time };
            if (key.indexOf('gig_oidcContext_') >= 0) {
                window.gigya.logger.report('oidc storage logs - set', {
                    key: key,
                    value: oGigya[key]
                }, false, FlagService_1.FlagService.forceErrorReport);
            }
        }
        window.localStorage.setItem('gigyaCache', JSONUtils.serialize(oGigya));
    }
    catch (ex) { }
    queueUtils.release('cache', 'cache_' + key);
}
exports.set = set;
function get(key, cacheTimeout) {
    if (cacheTimeout === void 0) { cacheTimeout = -1; }
    if (!localStorageEnabled) {
        return null;
    }
    try {
        if (!queueUtils.isActive('cache_' + key)) {
            var sGigyaCache = window.localStorage.getItem('gigyaCache');
            var oGigya = JSONUtils.deserialize(sGigyaCache);
            var cached = oGigya[key];
            if (cached) {
                var currentTime = new Date().getTime();
                if (cacheTimeout < 0 || cacheTimeout + cached.time > currentTime) {
                    //cached
                    return cached.response;
                }
                else {
                    if (key.indexOf('gig_oidcContext_') >= 0) {
                        window.gigya.logger.report('oidc storage logs - get', {
                            key: key,
                            value: oGigya[key],
                            cacheTime: cached.time,
                            currentTime: currentTime
                        }, false, FlagService_1.FlagService.forceErrorReport);
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
        }
        else {
            //wait for first response
            queueUtils.waitFor('cache_' + key, get, arguments);
            return null;
        }
    }
    catch (ex) { }
    return null;
}
exports.get = get;
function remove(key) {
    set(key, null);
}
exports.remove = remove;


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

/***/ "./src/core/Gigya.Js/app/Utils/queue.ts":
/*!**********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/queue.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
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
        }
        else {
            services[service] = {
                active: false,
            };
        }
    }
    return services;
}
exports._servicesStatus = _servicesStatus;
function isActive(service) {
    if (!_q[service])
        return false;
    for (var id in _q[service].ids)
        return true;
    return false;
}
exports.isActive = isActive;
function release(id, service) {
    window.gigya.logger.debug("releasing " + service + " queue by " + id);
    if (!_q[service])
        return;
    delete _q[service].ids[id];
    if (!isActive(service)) {
        var q = _q[service].q;
        _q[service].q = [];
        while (q.length > 0) {
            var o = q.splice(0, 1)[0];
            try {
                o.func.apply(this, o.args);
            }
            catch (ex) {
                if (typeof console == 'object' && console.log) {
                    console.log('Gigya: Exception while invoking queued method (' + service + ': ' + id + ')');
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
    window.gigya.logger.debug("locking queue " + service + " by " + id);
    if (!_q[service])
        _q[service] = { q: [], ids: {} };
    _q[service].ids[id] = true;
}
exports.hold = hold;
function waitFor(service, fnc, args) {
    if (!_q[service])
        _q[service] = { q: [], ids: {} };
    _q[service].q.push({ func: fnc, args: args });
}
exports.waitFor = waitFor;
function queueForExecution(service, func, args) {
    args = args || [];
    if (isActive(service)) {
        waitFor(service, func, args);
    }
    else {
        func.apply(this, args);
    }
}
exports.queueForExecution = queueForExecution;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/script.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/script.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var Uri_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/Uri */ "./src/core/Gigya.Js/app/Utils/Uri.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var arrayUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/array */ "./src/core/Gigya.Js/app/Utils/array.ts");
var functionsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/functions */ "./src/core/Gigya.Js/app/Utils/functions.ts");
var DOMUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/DOM */ "./src/core/Gigya.Js/app/Utils/DOM.ts");
var cdn_1 = __webpack_require__(/*! src/core/Gigya.Js/app/cdn */ "./src/core/Gigya.Js/app/cdn.ts");
var pending = {};
function addSdkVersion(url) {
    var scriptUrl = Uri_1.Uri.parse(url);
    scriptUrl.addToSearch({ version: window.gigya.build.version });
    return scriptUrl.toString();
}
function formatSrcUrl(src) {
    // remove cdn domain number
    return src.replace(/^http(s?):\/\/cdn(s?)[0-9]*.gigya.com\//, 'http$1://cdn$2.gigya.com/');
}
function isLoaded(src) {
    var pendingSrc = formatSrcUrl(src);
    return Boolean(pending[pendingSrc] && pending[pendingSrc].loaded);
}
exports.isLoaded = isLoaded;
function load(src, fnOnError, fnOnLoad, loadOnce, removeAfter, treatTogether) {
    if (removeAfter === void 0) { removeAfter = 5000; }
    var oScript;
    if (src.indexOf('//') === 0) {
        src = LocalInfo_1.localInfo.protocol + ':' + src;
    }
    if (loadOnce) {
        var pendingSrc = formatSrcUrl(src);
        if (pending[pendingSrc]) {
            if (pending[pendingSrc].loaded) {
                window.gigya.logger.debug("script was already loaded:", { src: src });
                if (fnOnLoad) {
                    fnOnLoad();
                }
            }
            else {
                pending[pendingSrc].onLoad.push(fnOnLoad);
                pending[pendingSrc].onError.push(fnOnError);
            }
            return;
        }
        oScript = pending[pendingSrc] = { loaded: false, onLoad: [fnOnLoad], onError: [fnOnError] };
        if (treatTogether && treatTogether.length > 0) {
            arrayUtils.forEach(treatTogether, function (url) {
                pending[url] = oScript;
            });
        }
    }
    else {
        // multiple loads
        oScript = { loaded: false, onLoad: [fnOnLoad], onError: [fnOnError] };
    }
    var scriptLoader = function () {
        var script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.charset = 'UTF-8';
        var done = false;
        var fnOnScriptLoad = function () {
            if (!done) {
                if (oScript.onLoad && oScript.onLoad.length) {
                    for (var i = 0; i < oScript.onLoad.length; i++) {
                        if (typeof oScript.onLoad[i] === 'function') {
                            oScript.onLoad[i]();
                        }
                    }
                }
                oScript.loaded = true;
                oScript.onError = oScript.onLoad = null; // remove memory leak
                done = true;
                if (removeAfter === true) {
                    removeAfter = 0;
                }
                if (removeAfter !== false) {
                    setTimeout(function () {
                        if (script.parentNode) {
                            script.parentNode.removeChild(script);
                        }
                    }, removeAfter);
                }
            }
        };
        script.onload = fnOnScriptLoad;
        script['onreadystatechange'] = function () {
            if (this.readyState === 'loaded') {
                fnOnScriptLoad();
            }
        };
        script.onerror = function () {
            for (var i = 0; i < oScript.onError.length; i++) {
                if (typeof oScript.onError[i] === 'function') {
                    oScript.onError[i]();
                }
            }
            delete pending[src];
        };
        var head = document.getElementsByTagName('head');
        if (head && head.length > 0) {
            head[0].appendChild(script);
        }
        var fnSetScriptSrc = function () {
            var webSdkResourcesDomain = new RegExp("^https?://cdns?.*" + window.gigya.defaultApiDomain + "/.*gigya.js");
            var scriptSrc = webSdkResourcesDomain.test(src) ? addSdkVersion(src) : src;
            script.src = scriptSrc;
        };
        if (LocalInfo_1.localInfo.iosVersion >= 6) {
            // iOS 6 breaks setTimeout when animation is active (switching tabs back from a login sequence)
            fnSetScriptSrc();
        }
        else {
            setTimeout(fnSetScriptSrc, 1); // Doing this async gives better performance in older browsers
        }
    };
    if (LocalInfo_1.localInfo.isIE) {
        functionsUtils.invokeOnPageLoad(scriptLoader);
    }
    else {
        scriptLoader();
    }
}
exports.load = load;
var ResourceTypes;
(function (ResourceTypes) {
    ResourceTypes[ResourceTypes["script"] = 0] = "script";
    ResourceTypes[ResourceTypes["image"] = 1] = "image";
    ResourceTypes[ResourceTypes["iframe"] = 2] = "iframe";
})(ResourceTypes = exports.ResourceTypes || (exports.ResourceTypes = {}));
function triggerResource(url, callback, resourceType, removeAfter) {
    if (resourceType === void 0) { resourceType = ResourceTypes.image; }
    if (removeAfter === void 0) { removeAfter = 5000; }
    switch (resourceType) {
        case ResourceTypes.script:
            load(url, callback, callback, false, removeAfter);
            break;
        case ResourceTypes.image:
            loadImage(url, callback);
            break;
        case ResourceTypes.iframe:
            loadIframe(url, callback, removeAfter);
            break;
        default:
            throw new Error('Unsupported resource type');
    }
}
exports.triggerResource = triggerResource;
function loadImage(url, callback) {
    var img = new Image();
    var loaded = false;
    var fnOnLoad = function () {
        if (!loaded) {
            loaded = true;
            callback();
        }
    };
    img.onload = img.onerror = fnOnLoad;
    img.src = url;
}
function loadIframe(url, callback, removeAfter) {
    if (removeAfter === void 0) { removeAfter = 5000; }
    var ifr = document.createElement('iframe');
    ifr.style.width = '30px';
    ifr.style.height = '10px';
    ifr.style.position = 'absolute';
    ifr.style.top = '-1000px';
    ifr.style.left = '-1000px';
    if (removeAfter === true) {
        removeAfter = 0;
    }
    var fnOnLoad = function (e) {
        var el;
        if (e && e.srcElement) {
            el = e.srcElement;
        }
        else if (e && e.target) {
            el = e.target;
        }
        else {
            el = this;
        }
        if (!el.loaded && el.parentNode) {
            el.loaded = true;
            callback();
            if (removeAfter !== false) {
                window.setTimeout(function () {
                    try {
                        document.body.removeChild(el);
                    }
                    catch (ex) { }
                }, removeAfter);
            }
        }
    };
    DOMUtils.addEventListener(ifr, 'load', fnOnLoad);
    DOMUtils.addEventListener(ifr, 'error', fnOnLoad);
    ifr.onload = function (e) {
        fnOnLoad(e);
    };
    ifr.onerror = fnOnLoad;
    ifr.src = url;
    DOMUtils.appendToBody(ifr);
}
function loadService(serviceName, fnOnError, fnOnLoad) {
    var url = cdn_1.getCdnResource() + '/js/gigya.services.' + serviceName + '.js';
    load(url, function () {
        if (typeof console === 'object' && console.error) {
            console.error('error loading gigya service ' + serviceName + ' from url: ' + url);
            if (fnOnError) {
                fnOnError();
            }
        }
    }, fnOnLoad, true);
}
exports.loadService = loadService;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/sessionCache.ts":
/*!*****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/sessionCache.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var queueUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/queue */ "./src/core/Gigya.Js/app/Utils/queue.ts");
var FlagService_1 = __webpack_require__(/*! ../Services/FlagService */ "./src/core/Gigya.Js/app/Services/FlagService.ts");
var sessionStorageEnabled;
try {
    sessionStorageEnabled = Boolean(window.sessionStorage); // when 3pc blocked, chrome throws when trying to access session storage.
}
catch (ex) {
    sessionStorageEnabled = false;
}
function set(key, response) {
    if (!sessionStorageEnabled)
        return;
    var oGigya;
    try {
        oGigya = JSONUtils.deserialize(window.sessionStorage.getItem('gigyaCache'));
        if (response == null && oGigya[key]) {
            delete oGigya[key];
        }
        else {
            var time = new Date().getTime();
            oGigya[key] = { response: response, time: time };
            if (key.indexOf('gig_oidcContext_') >= 0) {
                window.gigya.logger.report('oidc storage logs - set', {
                    key: key,
                    value: oGigya[key]
                }, false, FlagService_1.FlagService.forceErrorReport);
            }
        }
        window.sessionStorage.setItem('gigyaCache', JSONUtils.serialize(oGigya));
    }
    catch (ex) { }
    queueUtils.release('cache', 'cache_' + key);
}
exports.set = set;
function get(key, cacheTimeout) {
    if (cacheTimeout === void 0) { cacheTimeout = -1; }
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
                if (cacheTimeout < 0 || cacheTimeout + cached.time > currentTime) {
                    //cached
                    return cached.response;
                }
                else {
                    if (key.indexOf('gig_oidcContext_') >= 0) {
                        window.gigya.logger.report('oidc storage logs - get', {
                            key: key,
                            value: oGigya[key],
                            cacheTime: cached.time,
                            currentTime: currentTime
                        }, false, FlagService_1.FlagService.forceErrorReport);
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
        }
        else {
            //wait for first response
            queueUtils.waitFor('cache_' + key, get, arguments);
            return null;
        }
    }
    catch (ex) { }
    return null;
}
exports.get = get;
function remove(key) {
    set(key, null);
}
exports.remove = remove;


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


/***/ })

/******/ });