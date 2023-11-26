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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/plugins/gigya.services.socialize.plugins.shareCounts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/plugins/gigya.services.socialize.plugins.shareCounts.js":
/*!****************************************************************************!*\
  !*** ./src/legacy/plugins/gigya.services.socialize.plugins.shareCounts.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/// <reference path="gigya.services.socialize.plugins.js" />
(function () {



    if (typeof window.gigya.services.socialize.plugins == 'undefined') window.gigya.services.socialize.plugins = {};
    var _pi = window.gigya.services.socialize.plugins;
    var privateScope = {
        get: function (url, onLoad) {
            var script = document.createElement('script');
            script.src = url;
            script.charset = 'UTF-8';
            script.setAttribute('async','async');
            script.onreadystatechange = function (args) {
                if (script.readyState == 'loaded' || script.readyState == 'complete') {
                    script.onreadystatechange = null;
                    if (onLoad) onLoad();
                }
            }
            script.onload = script.onerror = function () {
                script.onload = null;
                if (onLoad) onLoad();
            }
            var head = document.getElementsByTagName('head')[0];
            window.gigya.utils.functions.invokeOnPageLoad(
                function () {
                (head || document.body || document.documentElement).appendChild(script);
                },
                true // make sure to get counter only on the ready state, and not in the interactive state
            );
        },
        getCacheKey: function (provider, url) {
            return 'getProviderShareCount_' + provider.toLowerCase() + '_' + encodeURIComponent(url);
        },
        getProviderResponse: function (provider, url, callback, cacheTimeout) {
            provider = provider.toLowerCase();
            window.gigya.utils.sessionCache.get(privateScope.getCacheKey(provider, url), cacheTimeout, function (response) {
                if (response != null) {
                    callback(response, provider, false, true, url);
                } else {
                    privateScope.getProviderShareCount(provider, url, callback);
                }
            });
        },
        getProviderShareCount: function (provider, url, callback) {
            var jsonpURL;
            provider = provider.toLowerCase();
            var callbackName = 'gig_pc_' + provider + '_' + (new Date()).getTime() + '_' + Math.random().toString().split('.')[1];
            var countFieldPath = [];
            var encodedURL = encodeURIComponent(url);
            switch (provider) {

                case 'vkontakte':
                    jsonpURL = 'https://vk.com/share.php?act=count&index=1&url=' + encodedURL;
                    break;

                case 'facebook':
                    const countFields = ['og_object', 'engagement', 'count'];
                    // facebook field format: og_object{engagement{count}}
                    const facebookCountFields =
                        countFields.slice()
                            .reverse()
                            .reduce((res, cur) => !res ? cur : `${cur}{${res}}`, '');

                    jsonpURL = `https://graph.facebook.com/?ids=${encodedURL}&fields=${facebookCountFields}&callback=${callbackName}`;
                    countFieldPath = [url].concat(countFields);
                    break;
                case 'twitter':
                    jsonpURL = 'http://cdn.api.twitter.com/1/urls/count.json?url=' + encodedURL + '&callback=' + callbackName;
                    if (window.gigya.localInfo.protocol == 'https') jsonpURL = jsonpURL.replace('http:', 'https:');
                    countFieldPath = ['count'];
                    break;
                case 'stumbleupon':
                    jsonpURL = 'http://www.stumbleupon.com/services/1.1/badge.getinfo?url=' + encodedURL + '&format=jsonp&callback=' + callbackName;
                    countFieldPath = ['result', 'views'];
                    break;
                case 'pinterest':
                    jsonpURL = 'http://api.pinterest.com/v1/urls/count.json?url=' + encodedURL + '&callback=' + callbackName;
                    countFieldPath = ['count'];
                    break;
                case 'linkedin':
                    jsonpURL = 'https://www.linkedin.com/countserv/count/share?format=jsonp&url=' + encodedURL + '&callback=' + callbackName;
                    countFieldPath = ['count'];
                    break;
            }
            if (window.gigya.localInfo.protocol == 'https' && jsonpURL.indexOf('http:') == 0) jsonpURL = null;
            if (jsonpURL) {
                window[callbackName] = function (res) {

                    var count;
                    try {
                        count = countFieldPath.reduce(function (obj, fieldName) {
                            if (!obj) return 0;
                            return obj[fieldName];
                        }, res);
                    } catch (ex) { }

                    if (count !== 0 && (!count || isNaN(count))) {
                        count = null;
                    }
                    callback(count, provider, null, null, url);
                    window[callbackName] = null

                }

                if (provider == 'vkontakte') {
                    window.VK = window.VK || {};
                    window.VK.Share = window.VK.Share || {};

                    var origCount = window.VK.Share.count;
                    window.VK.Share.count = function (idx, count) {

                        callback(count, provider, null, null, url);
                        // prevent the overide for the count
                        // by the generic callback.
                        window[callbackName] = null;

                        // revert to the original
                        if (origCount) {
                            window.VK.Share.count = origCount;
                        }
                    }
                }

                this.get(jsonpURL, function () {
                    if (window[callbackName]) {
                        callback(null, provider, true, null, url);
                        window[callbackName] = null;
                    }
                });
            } else {
                callback(0, provider, null, null, url);
            }
        }
    }

    _pi.shareCounts = {
        getProviderShareCounts: function (p) {

            var providers = [{ name: 'facebook' }, { name: 'stumbleUpon' }, { name: 'pinterest' }, { name: 'linkedin' }, { name: 'vkontakte' }];

            var enabledProviders = p['enabledProviders'] ? p['enabledProviders'] : '*';
            var disabledProviders = p['disabledProviders'] ? p['disabledProviders'] : '';

            var arProviders = window.gigya.services.socialize.getProvidersByName(enabledProviders, providers);
            arProviders = window.gigya.services.socialize.hideProvidersByName(arProviders, disabledProviders, providers);

            var doneProviders = 0;
            var response = {
                errorCode: 0,
                errorMessage: '',
                operation: 'getProviderShareCounts',
                context: p['context'],
                shareCounts: {}
            }

            var cacheTimeout = p.cacheTimeout;
            for (var i = 0; i < arProviders.length; i++) {
                var url = p[arProviders[i].name.toLowerCase() + 'URL'];
                if (!url) url = p['URL'];
                if (!url) {
                    var metas = document.getElementsByTagName('meta');
                    for (var u = 0; u < metas.length; u++) {
                        if (metas[u].getAttribute('property') == 'og:url' && metas[u].getAttribute('content')) {
                            url = metas[u].getAttribute('content');
                            break;
                        }
                    }
                }
                if (!url) url = document.location.href;

                var fnOnResponse = function (count, provider, failed, cached, url) {
                    if (count !== null) {
                        response.shareCounts[provider] = count = parseInt(count);
                        if (!cached) {
                            window.gigya.utils.sessionCache.set(privateScope.getCacheKey(provider, url), count);
                        }
                    }

                    doneProviders++;
                    if (doneProviders === arProviders.length) {
                        if (p['callback']) {
                            p['callback'](response);
                        }
                    }
                }
                privateScope.getProviderResponse(arProviders[i].name, url, fnOnResponse, cacheTimeout);
            }
        }
    }

})();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLnNoYXJlQ291bnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBOzs7O0FBSUEsZUFBZSxZQUFLLDRDQUE0QyxZQUFLO0FBQ3JFLGNBQWMsWUFBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxZQUFLO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxZQUFZLFlBQUs7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdEQUF3RCxXQUFXO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxLQUFLLEVBQUUsS0FBSzs7QUFFOUUsa0VBQWtFLFdBQVcsVUFBVSxvQkFBb0IsWUFBWSxhQUFhO0FBQ3BJO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFlBQUs7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQixhQUFhOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhCQUE4QixtQkFBbUIsR0FBRyxzQkFBc0IsR0FBRyxvQkFBb0IsR0FBRyxtQkFBbUIsR0FBRyxvQkFBb0I7O0FBRTlJO0FBQ0E7O0FBRUEsOEJBQThCLFlBQUs7QUFDbkMsMEJBQTBCLFlBQUs7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsd0JBQXdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGtCQUFrQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixZQUFLO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEkiLCJmaWxlIjoiZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMuc2hhcmVDb3VudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9sZWdhY3kvcGx1Z2lucy9naWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5zaGFyZUNvdW50cy5qc1wiKTtcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5qc1wiIC8+XG4oZnVuY3Rpb24gKCkge1xuXG5cblxuICAgIGlmICh0eXBlb2YgZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMgPT0gJ3VuZGVmaW5lZCcpIGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zID0ge307XG4gICAgdmFyIF9waSA9IGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zO1xuICAgIHZhciBwcml2YXRlU2NvcGUgPSB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKHVybCwgb25Mb2FkKSB7XG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICBzY3JpcHQuc3JjID0gdXJsO1xuICAgICAgICAgICAgc2NyaXB0LmNoYXJzZXQgPSAnVVRGLTgnO1xuICAgICAgICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnYXN5bmMnLCdhc3luYycpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNjcmlwdC5yZWFkeVN0YXRlID09ICdsb2FkZWQnIHx8IHNjcmlwdC5yZWFkeVN0YXRlID09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkxvYWQpIG9uTG9hZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25sb2FkID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAob25Mb2FkKSBvbkxvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLmZ1bmN0aW9ucy5pbnZva2VPblBhZ2VMb2FkKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAoaGVhZCB8fCBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRydWUgLy8gbWFrZSBzdXJlIHRvIGdldCBjb3VudGVyIG9ubHkgb24gdGhlIHJlYWR5IHN0YXRlLCBhbmQgbm90IGluIHRoZSBpbnRlcmFjdGl2ZSBzdGF0ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q2FjaGVLZXk6IGZ1bmN0aW9uIChwcm92aWRlciwgdXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2dldFByb3ZpZGVyU2hhcmVDb3VudF8nICsgcHJvdmlkZXIudG9Mb3dlckNhc2UoKSArICdfJyArIGVuY29kZVVSSUNvbXBvbmVudCh1cmwpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm92aWRlclJlc3BvbnNlOiBmdW5jdGlvbiAocHJvdmlkZXIsIHVybCwgY2FsbGJhY2ssIGNhY2hlVGltZW91dCkge1xuICAgICAgICAgICAgcHJvdmlkZXIgPSBwcm92aWRlci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgZ2lneWEudXRpbHMuc2Vzc2lvbkNhY2hlLmdldChwcml2YXRlU2NvcGUuZ2V0Q2FjaGVLZXkocHJvdmlkZXIsIHVybCksIGNhY2hlVGltZW91dCwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UsIHByb3ZpZGVyLCBmYWxzZSwgdHJ1ZSwgdXJsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcml2YXRlU2NvcGUuZ2V0UHJvdmlkZXJTaGFyZUNvdW50KHByb3ZpZGVyLCB1cmwsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvdmlkZXJTaGFyZUNvdW50OiBmdW5jdGlvbiAocHJvdmlkZXIsIHVybCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBqc29ucFVSTDtcbiAgICAgICAgICAgIHByb3ZpZGVyID0gcHJvdmlkZXIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHZhciBjYWxsYmFja05hbWUgPSAnZ2lnX3BjXycgKyBwcm92aWRlciArICdfJyArIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgKyAnXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgICAgIHZhciBjb3VudEZpZWxkUGF0aCA9IFtdO1xuICAgICAgICAgICAgdmFyIGVuY29kZWRVUkwgPSBlbmNvZGVVUklDb21wb25lbnQodXJsKTtcbiAgICAgICAgICAgIHN3aXRjaCAocHJvdmlkZXIpIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3Zrb250YWt0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGpzb25wVVJMID0gJ2h0dHBzOi8vdmsuY29tL3NoYXJlLnBocD9hY3Q9Y291bnQmaW5kZXg9MSZ1cmw9JyArIGVuY29kZWRVUkw7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZmFjZWJvb2snOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudEZpZWxkcyA9IFsnb2dfb2JqZWN0JywgJ2VuZ2FnZW1lbnQnLCAnY291bnQnXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmFjZWJvb2sgZmllbGQgZm9ybWF0OiBvZ19vYmplY3R7ZW5nYWdlbWVudHtjb3VudH19XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhY2Vib29rQ291bnRGaWVsZHMgPVxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRGaWVsZHMuc2xpY2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChyZXMsIGN1cikgPT4gIXJlcyA/IGN1ciA6IGAke2N1cn17JHtyZXN9fWAsICcnKTtcblxuICAgICAgICAgICAgICAgICAgICBqc29ucFVSTCA9IGBodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS8/aWRzPSR7ZW5jb2RlZFVSTH0mZmllbGRzPSR7ZmFjZWJvb2tDb3VudEZpZWxkc30mY2FsbGJhY2s9JHtjYWxsYmFja05hbWV9YDtcbiAgICAgICAgICAgICAgICAgICAgY291bnRGaWVsZFBhdGggPSBbdXJsXS5jb25jYXQoY291bnRGaWVsZHMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICd0d2l0dGVyJzpcbiAgICAgICAgICAgICAgICAgICAganNvbnBVUkwgPSAnaHR0cDovL2Nkbi5hcGkudHdpdHRlci5jb20vMS91cmxzL2NvdW50Lmpzb24/dXJsPScgKyBlbmNvZGVkVVJMICsgJyZjYWxsYmFjaz0nICsgY2FsbGJhY2tOYW1lO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2lneWEubG9jYWxJbmZvLnByb3RvY29sID09ICdodHRwcycpIGpzb25wVVJMID0ganNvbnBVUkwucmVwbGFjZSgnaHR0cDonLCAnaHR0cHM6Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50RmllbGRQYXRoID0gWydjb3VudCddO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzdHVtYmxldXBvbic6XG4gICAgICAgICAgICAgICAgICAgIGpzb25wVVJMID0gJ2h0dHA6Ly93d3cuc3R1bWJsZXVwb24uY29tL3NlcnZpY2VzLzEuMS9iYWRnZS5nZXRpbmZvP3VybD0nICsgZW5jb2RlZFVSTCArICcmZm9ybWF0PWpzb25wJmNhbGxiYWNrPScgKyBjYWxsYmFja05hbWU7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50RmllbGRQYXRoID0gWydyZXN1bHQnLCAndmlld3MnXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncGludGVyZXN0JzpcbiAgICAgICAgICAgICAgICAgICAganNvbnBVUkwgPSAnaHR0cDovL2FwaS5waW50ZXJlc3QuY29tL3YxL3VybHMvY291bnQuanNvbj91cmw9JyArIGVuY29kZWRVUkwgKyAnJmNhbGxiYWNrPScgKyBjYWxsYmFja05hbWU7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50RmllbGRQYXRoID0gWydjb3VudCddO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdsaW5rZWRpbic6XG4gICAgICAgICAgICAgICAgICAgIGpzb25wVVJMID0gJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb3VudHNlcnYvY291bnQvc2hhcmU/Zm9ybWF0PWpzb25wJnVybD0nICsgZW5jb2RlZFVSTCArICcmY2FsbGJhY2s9JyArIGNhbGxiYWNrTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgY291bnRGaWVsZFBhdGggPSBbJ2NvdW50J107XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5wcm90b2NvbCA9PSAnaHR0cHMnICYmIGpzb25wVVJMLmluZGV4T2YoJ2h0dHA6JykgPT0gMCkganNvbnBVUkwgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGpzb25wVVJMKSB7XG4gICAgICAgICAgICAgICAgd2luZG93W2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbiAocmVzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50O1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQgPSBjb3VudEZpZWxkUGF0aC5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgZmllbGROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvYmopIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmpbZmllbGROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7IH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgIT09IDAgJiYgKCFjb3VudCB8fCBpc05hTihjb3VudCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soY291bnQsIHByb3ZpZGVyLCBudWxsLCBudWxsLCB1cmwpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3dbY2FsbGJhY2tOYW1lXSA9IG51bGxcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwcm92aWRlciA9PSAndmtvbnRha3RlJykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuVksgPSB3aW5kb3cuVksgfHwge307XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5WSy5TaGFyZSA9IHdpbmRvdy5WSy5TaGFyZSB8fCB7fTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ0NvdW50ID0gd2luZG93LlZLLlNoYXJlLmNvdW50O1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuVksuU2hhcmUuY291bnQgPSBmdW5jdGlvbiAoaWR4LCBjb3VudCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhjb3VudCwgcHJvdmlkZXIsIG51bGwsIG51bGwsIHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IHRoZSBvdmVyaWRlIGZvciB0aGUgY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ5IHRoZSBnZW5lcmljIGNhbGxiYWNrLlxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93W2NhbGxiYWNrTmFtZV0gPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIG9yaWdpbmFsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ0NvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LlZLLlNoYXJlLmNvdW50ID0gb3JpZ0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5nZXQoanNvbnBVUkwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvd1tjYWxsYmFja05hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBwcm92aWRlciwgdHJ1ZSwgbnVsbCwgdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1tjYWxsYmFja05hbWVdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygwLCBwcm92aWRlciwgbnVsbCwgbnVsbCwgdXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9waS5zaGFyZUNvdW50cyA9IHtcbiAgICAgICAgZ2V0UHJvdmlkZXJTaGFyZUNvdW50czogZnVuY3Rpb24gKHApIHtcblxuICAgICAgICAgICAgdmFyIHByb3ZpZGVycyA9IFt7IG5hbWU6ICdmYWNlYm9vaycgfSwgeyBuYW1lOiAnc3R1bWJsZVVwb24nIH0sIHsgbmFtZTogJ3BpbnRlcmVzdCcgfSwgeyBuYW1lOiAnbGlua2VkaW4nIH0sIHsgbmFtZTogJ3Zrb250YWt0ZScgfV07XG5cbiAgICAgICAgICAgIHZhciBlbmFibGVkUHJvdmlkZXJzID0gcFsnZW5hYmxlZFByb3ZpZGVycyddID8gcFsnZW5hYmxlZFByb3ZpZGVycyddIDogJyonO1xuICAgICAgICAgICAgdmFyIGRpc2FibGVkUHJvdmlkZXJzID0gcFsnZGlzYWJsZWRQcm92aWRlcnMnXSA/IHBbJ2Rpc2FibGVkUHJvdmlkZXJzJ10gOiAnJztcblxuICAgICAgICAgICAgdmFyIGFyUHJvdmlkZXJzID0gZ2lneWEuc2VydmljZXMuc29jaWFsaXplLmdldFByb3ZpZGVyc0J5TmFtZShlbmFibGVkUHJvdmlkZXJzLCBwcm92aWRlcnMpO1xuICAgICAgICAgICAgYXJQcm92aWRlcnMgPSBnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuaGlkZVByb3ZpZGVyc0J5TmFtZShhclByb3ZpZGVycywgZGlzYWJsZWRQcm92aWRlcnMsIHByb3ZpZGVycyk7XG5cbiAgICAgICAgICAgIHZhciBkb25lUHJvdmlkZXJzID0gMDtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICBlcnJvckNvZGU6IDAsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246ICdnZXRQcm92aWRlclNoYXJlQ291bnRzJyxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBwWydjb250ZXh0J10sXG4gICAgICAgICAgICAgICAgc2hhcmVDb3VudHM6IHt9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjYWNoZVRpbWVvdXQgPSBwLmNhY2hlVGltZW91dDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJQcm92aWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gcFthclByb3ZpZGVyc1tpXS5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnVVJMJ107XG4gICAgICAgICAgICAgICAgaWYgKCF1cmwpIHVybCA9IHBbJ1VSTCddO1xuICAgICAgICAgICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXRhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtZXRhJyk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHUgPSAwOyB1IDwgbWV0YXMubGVuZ3RoOyB1KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXRhc1t1XS5nZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JykgPT0gJ29nOnVybCcgJiYgbWV0YXNbdV0uZ2V0QXR0cmlidXRlKCdjb250ZW50JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSBtZXRhc1t1XS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXVybCkgdXJsID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcblxuICAgICAgICAgICAgICAgIHZhciBmbk9uUmVzcG9uc2UgPSBmdW5jdGlvbiAoY291bnQsIHByb3ZpZGVyLCBmYWlsZWQsIGNhY2hlZCwgdXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2hhcmVDb3VudHNbcHJvdmlkZXJdID0gY291bnQgPSBwYXJzZUludChjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhY2hlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLnNlc3Npb25DYWNoZS5zZXQocHJpdmF0ZVNjb3BlLmdldENhY2hlS2V5KHByb3ZpZGVyLCB1cmwpLCBjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBkb25lUHJvdmlkZXJzKys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb25lUHJvdmlkZXJzID09PSBhclByb3ZpZGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwWydjYWxsYmFjayddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcFsnY2FsbGJhY2snXShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJpdmF0ZVNjb3BlLmdldFByb3ZpZGVyUmVzcG9uc2UoYXJQcm92aWRlcnNbaV0ubmFtZSwgdXJsLCBmbk9uUmVzcG9uc2UsIGNhY2hlVGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==