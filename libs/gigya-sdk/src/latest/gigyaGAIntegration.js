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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/others/gigyaGAIntegration.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/others/gigyaGAIntegration.js":
/*!*************************************************!*\
  !*** ./src/legacy/others/gigyaGAIntegration.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof window.gigya == 'undefined') window.gigya = { isGigya: true };
if (!window.gigya.defaultEventMaps) window.gigya.defaultEventMaps = [];

// Support for Google Analytics

// ga.js queue creation
var _gaq = _gaq || [];

// mapp gigya events to ga,js events
; (function () {
	var getCategoryFunction = function (apiName) {
		return function (e) { return (e.source ? 'Gigya ' + e.source : 'Gigya ' + apiName + ' API') }
	}
	var _gaq_trackSocial = function() {
		_gaq.push(['_trackSocial'].concat(Array.prototype.slice.call(arguments)));
	}
	var _gaq_trackEvent = function() {
		_gaq.push(['_trackEvent'].concat(Array.prototype.slice.call(arguments)));
	}
	var onSendDone = function(a,b,c) {
		var arProviders = a.split(',');
		for (var i=0; i<arProviders.length; i++) {
			_gaq_trackSocial(arProviders[i],b,c);
		}
	}
	window.gigya.defaultEventMaps.push(
	{
		defaultMethod: _gaq_trackEvent,
		eventMap: [
			{ events: "sendDone", method: onSendDone, args: ['$providers', 'Gigya $source - Share Published', '$targetURL', document.location.href] },
			{ events: "followClicked", method: _gaq_trackSocial, args: ['$button.provider', 'Gigya Follow - button clicked', '$button.actionURL', document.location.href] },
			{ events: "reactionClicked", args: ['Gigya Reaction Bar', 'Button Clicked', '$reaction.text'] },
			{ events: "reactionUnclicked", args: ['Gigya Reaction Bar', 'Button Unclicked', '$reaction.text'] },
			{ events: "commentSubmitted", args: [function (e) {return (e.mode == 'reviews' ? 'Gigya Reviews' : 'Gigya Comments') }, function (e) { return (e.mode == 'reviews' ? 'Review Published' : 'Comment Published') }, '$streamID'] },
			{ events: "commentVoted", args: [function (e) {return (e.mode == 'reviews' ? 'Gigya Reviews' : 'Gigya Comments') }, function (e) { return (e.mode == 'reviews' ? 'Review Voted' : 'Comment Voted')}, '$streamID']},
			{ events: "login", args: [getCategoryFunction('Login'), 'Social Login', '$provider'] },
			{ events: "logout", args: [getCategoryFunction('Logout'), 'Logout'] },
			{ events: "connectionAdded", args: [getCategoryFunction('Add Connection'), 'Social Connection Added', '$provider'] },
			{ events: "connectionRemoved", args: [getCategoryFunction('Remove Connection'), 'Social Connection Removed', '$provider'] }
		]
	});
})();

// Support for Google Universal Analytics

// analytics.js queue creation
(function (_win, _doc, _ga) {
    _win['GoogleAnalyticsObject'] = _ga;
    _win[_ga] = _win[_ga] || function () {
        (_win[_ga].q = _win[_ga].q || []).push(arguments);
    };
})(window, document, 'ga');

// map gigya events to analytics.js events
; (function () {
    var getCategoryFunction = function (apiName) {
        return function (e) {
            return (e.source ? 'Gigya ' + e.source : 'Gigya ' + apiName + ' API');
        };
    };

    var _gaq_trackSocial = function (socialNetwork, actionDescription, actionURL, currentPageURL) {
        ga('send', {
            'hitType': 'social',
            'socialNetwork': socialNetwork,
            'socialAction': actionDescription,
            'socialTarget': actionURL,
            'page': currentPageURL
        });
    };

    var _gaq_trackEvent = function (category, actionDescription, target, currentPageURL) {
        ga('send', {
            'hitType': 'event',
            'eventCategory': category,
            'eventAction': actionDescription,
            'eventLabel': target,
            'eventValue': currentPageURL
        });
    };

    var onSendDone = function (a, b, c) {
        var arProviders = a.split(',');
        for (var i = 0; i < arProviders.length; i++) {
            _gaq_trackSocial(arProviders[i], b, c);
        }
    };

    window.gigya.defaultEventMaps.push(
	{
	    defaultMethod: _gaq_trackEvent,
	    eventMap: [
			{ events: "sendDone", method: onSendDone, args: ['$providers', 'Gigya $source - Share Published', '$targetURL', document.location.href] },
			{ events: "followClicked", method: _gaq_trackSocial, args: ['$button.provider', 'Gigya Follow - button clicked', '$button.actionURL', document.location.href] },
			{ events: "reactionClicked", args: ['Gigya Reaction Bar', 'Button Clicked', '$reaction.text'] },
			{ events: "reactionUnclicked", args: ['Gigya Reaction Bar', 'Button Unclicked', '$reaction.text'] },
			{ events: "commentSubmitted", args: [function (e) { return (e.mode == 'reviews' ? 'Gigya Reviews' : 'Gigya Comments') }, function (e) { return (e.mode == 'reviews' ? 'Review Published' : 'Comment Published') }, '$streamID'] },
			{ events: "commentVoted", args: [function (e) { return (e.mode == 'reviews' ? 'Gigya Reviews' : 'Gigya Comments') }, function (e) { return (e.mode == 'reviews' ? 'Review Voted' : 'Comment Voted') }, '$streamID'] },
			{ events: "login", args: [getCategoryFunction('Login'), 'Social Login', '$provider'] },
			{ events: "logout", args: [getCategoryFunction('Logout'), 'Logout'] },
			{ events: "connectionAdded", args: [getCategoryFunction('Add Connection'), 'Social Connection Added', '$provider'] },
			{ events: "connectionRemoved", args: [getCategoryFunction('Remove Connection'), 'Social Connection Removed', '$provider'] }
	    ]
	});
})();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9vdGhlcnMvZ2lneWFHQUludGVncmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxXQUFXLFlBQUssaUJBQWlCLFlBQUssSUFBSTtBQUMxQyxLQUFLLFlBQUssbUJBQW1CLFlBQUs7O0FBRWxDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQkFBc0I7QUFDckM7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxZQUFLO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSSx3SUFBd0k7QUFDNUksSUFBSSw4SkFBOEo7QUFDbEssSUFBSSw4RkFBOEY7QUFDbEcsSUFBSSxrR0FBa0c7QUFDdEcsSUFBSSxrREFBa0QsbUVBQW1FLGdCQUFnQiwwRUFBMEUsZ0JBQWdCO0FBQ25PLElBQUksOENBQThDLG1FQUFtRSxnQkFBZ0IsaUVBQWlFLGVBQWU7QUFDck4sSUFBSSxxRkFBcUY7QUFDekYsSUFBSSxvRUFBb0U7QUFDeEUsSUFBSSxtSEFBbUg7QUFDdkgsSUFBSTtBQUNKO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLFlBQUs7QUFDVDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdJQUF3STtBQUM1SSxJQUFJLDhKQUE4SjtBQUNsSyxJQUFJLDhGQUE4RjtBQUNsRyxJQUFJLGtHQUFrRztBQUN0RyxJQUFJLGtEQUFrRCxvRUFBb0UsZ0JBQWdCLDBFQUEwRSxnQkFBZ0I7QUFDcE8sSUFBSSw4Q0FBOEMsb0VBQW9FLGdCQUFnQixrRUFBa0UsZ0JBQWdCO0FBQ3hOLElBQUkscUZBQXFGO0FBQ3pGLElBQUksb0VBQW9FO0FBQ3hFLElBQUksbUhBQW1IO0FBQ3ZILElBQUk7QUFDSjtBQUNBLEVBQUU7QUFDRixDQUFDIiwiZmlsZSI6ImdpZ3lhR0FJbnRlZ3JhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xlZ2FjeS9vdGhlcnMvZ2lneWFHQUludGVncmF0aW9uLmpzXCIpO1xuIiwiaWYgKHR5cGVvZiBnaWd5YSA9PSAndW5kZWZpbmVkJykgZ2lneWEgPSB7IGlzR2lneWE6IHRydWUgfTtcbmlmICghZ2lneWEuZGVmYXVsdEV2ZW50TWFwcykgZ2lneWEuZGVmYXVsdEV2ZW50TWFwcyA9IFtdO1xuXG4vLyBTdXBwb3J0IGZvciBHb29nbGUgQW5hbHl0aWNzXG5cbi8vIGdhLmpzIHF1ZXVlIGNyZWF0aW9uXG52YXIgX2dhcSA9IF9nYXEgfHwgW107XG5cbi8vIG1hcHAgZ2lneWEgZXZlbnRzIHRvIGdhLGpzIGV2ZW50c1xuOyAoZnVuY3Rpb24gKCkge1xuXHR2YXIgZ2V0Q2F0ZWdvcnlGdW5jdGlvbiA9IGZ1bmN0aW9uIChhcGlOYW1lKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChlKSB7IHJldHVybiAoZS5zb3VyY2UgPyAnR2lneWEgJyArIGUuc291cmNlIDogJ0dpZ3lhICcgKyBhcGlOYW1lICsgJyBBUEknKSB9XG5cdH1cblx0dmFyIF9nYXFfdHJhY2tTb2NpYWwgPSBmdW5jdGlvbigpIHtcblx0XHRfZ2FxLnB1c2goWydfdHJhY2tTb2NpYWwnXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuXHR9XG5cdHZhciBfZ2FxX3RyYWNrRXZlbnQgPSBmdW5jdGlvbigpIHtcblx0XHRfZ2FxLnB1c2goWydfdHJhY2tFdmVudCddLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG5cdH1cblx0dmFyIG9uU2VuZERvbmUgPSBmdW5jdGlvbihhLGIsYykge1xuXHRcdHZhciBhclByb3ZpZGVycyA9IGEuc3BsaXQoJywnKTtcblx0XHRmb3IgKHZhciBpPTA7IGk8YXJQcm92aWRlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdF9nYXFfdHJhY2tTb2NpYWwoYXJQcm92aWRlcnNbaV0sYixjKTtcblx0XHR9XG5cdH1cblx0Z2lneWEuZGVmYXVsdEV2ZW50TWFwcy5wdXNoKFxuXHR7XG5cdFx0ZGVmYXVsdE1ldGhvZDogX2dhcV90cmFja0V2ZW50LFxuXHRcdGV2ZW50TWFwOiBbXG5cdFx0XHR7IGV2ZW50czogXCJzZW5kRG9uZVwiLCBtZXRob2Q6IG9uU2VuZERvbmUsIGFyZ3M6IFsnJHByb3ZpZGVycycsICdHaWd5YSAkc291cmNlIC0gU2hhcmUgUHVibGlzaGVkJywgJyR0YXJnZXRVUkwnLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmXSB9LFxuXHRcdFx0eyBldmVudHM6IFwiZm9sbG93Q2xpY2tlZFwiLCBtZXRob2Q6IF9nYXFfdHJhY2tTb2NpYWwsIGFyZ3M6IFsnJGJ1dHRvbi5wcm92aWRlcicsICdHaWd5YSBGb2xsb3cgLSBidXR0b24gY2xpY2tlZCcsICckYnV0dG9uLmFjdGlvblVSTCcsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWZdIH0sXG5cdFx0XHR7IGV2ZW50czogXCJyZWFjdGlvbkNsaWNrZWRcIiwgYXJnczogWydHaWd5YSBSZWFjdGlvbiBCYXInLCAnQnV0dG9uIENsaWNrZWQnLCAnJHJlYWN0aW9uLnRleHQnXSB9LFxuXHRcdFx0eyBldmVudHM6IFwicmVhY3Rpb25VbmNsaWNrZWRcIiwgYXJnczogWydHaWd5YSBSZWFjdGlvbiBCYXInLCAnQnV0dG9uIFVuY2xpY2tlZCcsICckcmVhY3Rpb24udGV4dCddIH0sXG5cdFx0XHR7IGV2ZW50czogXCJjb21tZW50U3VibWl0dGVkXCIsIGFyZ3M6IFtmdW5jdGlvbiAoZSkge3JldHVybiAoZS5tb2RlID09ICdyZXZpZXdzJyA/ICdHaWd5YSBSZXZpZXdzJyA6ICdHaWd5YSBDb21tZW50cycpIH0sIGZ1bmN0aW9uIChlKSB7IHJldHVybiAoZS5tb2RlID09ICdyZXZpZXdzJyA/ICdSZXZpZXcgUHVibGlzaGVkJyA6ICdDb21tZW50IFB1Ymxpc2hlZCcpIH0sICckc3RyZWFtSUQnXSB9LFxuXHRcdFx0eyBldmVudHM6IFwiY29tbWVudFZvdGVkXCIsIGFyZ3M6IFtmdW5jdGlvbiAoZSkge3JldHVybiAoZS5tb2RlID09ICdyZXZpZXdzJyA/ICdHaWd5YSBSZXZpZXdzJyA6ICdHaWd5YSBDb21tZW50cycpIH0sIGZ1bmN0aW9uIChlKSB7IHJldHVybiAoZS5tb2RlID09ICdyZXZpZXdzJyA/ICdSZXZpZXcgVm90ZWQnIDogJ0NvbW1lbnQgVm90ZWQnKX0sICckc3RyZWFtSUQnXX0sXG5cdFx0XHR7IGV2ZW50czogXCJsb2dpblwiLCBhcmdzOiBbZ2V0Q2F0ZWdvcnlGdW5jdGlvbignTG9naW4nKSwgJ1NvY2lhbCBMb2dpbicsICckcHJvdmlkZXInXSB9LFxuXHRcdFx0eyBldmVudHM6IFwibG9nb3V0XCIsIGFyZ3M6IFtnZXRDYXRlZ29yeUZ1bmN0aW9uKCdMb2dvdXQnKSwgJ0xvZ291dCddIH0sXG5cdFx0XHR7IGV2ZW50czogXCJjb25uZWN0aW9uQWRkZWRcIiwgYXJnczogW2dldENhdGVnb3J5RnVuY3Rpb24oJ0FkZCBDb25uZWN0aW9uJyksICdTb2NpYWwgQ29ubmVjdGlvbiBBZGRlZCcsICckcHJvdmlkZXInXSB9LFxuXHRcdFx0eyBldmVudHM6IFwiY29ubmVjdGlvblJlbW92ZWRcIiwgYXJnczogW2dldENhdGVnb3J5RnVuY3Rpb24oJ1JlbW92ZSBDb25uZWN0aW9uJyksICdTb2NpYWwgQ29ubmVjdGlvbiBSZW1vdmVkJywgJyRwcm92aWRlciddIH1cblx0XHRdXG5cdH0pO1xufSkoKTtcblxuLy8gU3VwcG9ydCBmb3IgR29vZ2xlIFVuaXZlcnNhbCBBbmFseXRpY3NcblxuLy8gYW5hbHl0aWNzLmpzIHF1ZXVlIGNyZWF0aW9uXG4oZnVuY3Rpb24gKF93aW4sIF9kb2MsIF9nYSkge1xuICAgIF93aW5bJ0dvb2dsZUFuYWx5dGljc09iamVjdCddID0gX2dhO1xuICAgIF93aW5bX2dhXSA9IF93aW5bX2dhXSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIChfd2luW19nYV0ucSA9IF93aW5bX2dhXS5xIHx8IFtdKS5wdXNoKGFyZ3VtZW50cyk7XG4gICAgfTtcbn0pKHdpbmRvdywgZG9jdW1lbnQsICdnYScpO1xuXG4vLyBtYXAgZ2lneWEgZXZlbnRzIHRvIGFuYWx5dGljcy5qcyBldmVudHNcbjsgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2V0Q2F0ZWdvcnlGdW5jdGlvbiA9IGZ1bmN0aW9uIChhcGlOYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIChlLnNvdXJjZSA/ICdHaWd5YSAnICsgZS5zb3VyY2UgOiAnR2lneWEgJyArIGFwaU5hbWUgKyAnIEFQSScpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICB2YXIgX2dhcV90cmFja1NvY2lhbCA9IGZ1bmN0aW9uIChzb2NpYWxOZXR3b3JrLCBhY3Rpb25EZXNjcmlwdGlvbiwgYWN0aW9uVVJMLCBjdXJyZW50UGFnZVVSTCkge1xuICAgICAgICBnYSgnc2VuZCcsIHtcbiAgICAgICAgICAgICdoaXRUeXBlJzogJ3NvY2lhbCcsXG4gICAgICAgICAgICAnc29jaWFsTmV0d29yayc6IHNvY2lhbE5ldHdvcmssXG4gICAgICAgICAgICAnc29jaWFsQWN0aW9uJzogYWN0aW9uRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAnc29jaWFsVGFyZ2V0JzogYWN0aW9uVVJMLFxuICAgICAgICAgICAgJ3BhZ2UnOiBjdXJyZW50UGFnZVVSTFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIF9nYXFfdHJhY2tFdmVudCA9IGZ1bmN0aW9uIChjYXRlZ29yeSwgYWN0aW9uRGVzY3JpcHRpb24sIHRhcmdldCwgY3VycmVudFBhZ2VVUkwpIHtcbiAgICAgICAgZ2EoJ3NlbmQnLCB7XG4gICAgICAgICAgICAnaGl0VHlwZSc6ICdldmVudCcsXG4gICAgICAgICAgICAnZXZlbnRDYXRlZ29yeSc6IGNhdGVnb3J5LFxuICAgICAgICAgICAgJ2V2ZW50QWN0aW9uJzogYWN0aW9uRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAnZXZlbnRMYWJlbCc6IHRhcmdldCxcbiAgICAgICAgICAgICdldmVudFZhbHVlJzogY3VycmVudFBhZ2VVUkxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBvblNlbmREb25lID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgdmFyIGFyUHJvdmlkZXJzID0gYS5zcGxpdCgnLCcpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyUHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfZ2FxX3RyYWNrU29jaWFsKGFyUHJvdmlkZXJzW2ldLCBiLCBjKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBnaWd5YS5kZWZhdWx0RXZlbnRNYXBzLnB1c2goXG5cdHtcblx0ICAgIGRlZmF1bHRNZXRob2Q6IF9nYXFfdHJhY2tFdmVudCxcblx0ICAgIGV2ZW50TWFwOiBbXG5cdFx0XHR7IGV2ZW50czogXCJzZW5kRG9uZVwiLCBtZXRob2Q6IG9uU2VuZERvbmUsIGFyZ3M6IFsnJHByb3ZpZGVycycsICdHaWd5YSAkc291cmNlIC0gU2hhcmUgUHVibGlzaGVkJywgJyR0YXJnZXRVUkwnLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmXSB9LFxuXHRcdFx0eyBldmVudHM6IFwiZm9sbG93Q2xpY2tlZFwiLCBtZXRob2Q6IF9nYXFfdHJhY2tTb2NpYWwsIGFyZ3M6IFsnJGJ1dHRvbi5wcm92aWRlcicsICdHaWd5YSBGb2xsb3cgLSBidXR0b24gY2xpY2tlZCcsICckYnV0dG9uLmFjdGlvblVSTCcsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWZdIH0sXG5cdFx0XHR7IGV2ZW50czogXCJyZWFjdGlvbkNsaWNrZWRcIiwgYXJnczogWydHaWd5YSBSZWFjdGlvbiBCYXInLCAnQnV0dG9uIENsaWNrZWQnLCAnJHJlYWN0aW9uLnRleHQnXSB9LFxuXHRcdFx0eyBldmVudHM6IFwicmVhY3Rpb25VbmNsaWNrZWRcIiwgYXJnczogWydHaWd5YSBSZWFjdGlvbiBCYXInLCAnQnV0dG9uIFVuY2xpY2tlZCcsICckcmVhY3Rpb24udGV4dCddIH0sXG5cdFx0XHR7IGV2ZW50czogXCJjb21tZW50U3VibWl0dGVkXCIsIGFyZ3M6IFtmdW5jdGlvbiAoZSkgeyByZXR1cm4gKGUubW9kZSA9PSAncmV2aWV3cycgPyAnR2lneWEgUmV2aWV3cycgOiAnR2lneWEgQ29tbWVudHMnKSB9LCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gKGUubW9kZSA9PSAncmV2aWV3cycgPyAnUmV2aWV3IFB1Ymxpc2hlZCcgOiAnQ29tbWVudCBQdWJsaXNoZWQnKSB9LCAnJHN0cmVhbUlEJ10gfSxcblx0XHRcdHsgZXZlbnRzOiBcImNvbW1lbnRWb3RlZFwiLCBhcmdzOiBbZnVuY3Rpb24gKGUpIHsgcmV0dXJuIChlLm1vZGUgPT0gJ3Jldmlld3MnID8gJ0dpZ3lhIFJldmlld3MnIDogJ0dpZ3lhIENvbW1lbnRzJykgfSwgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIChlLm1vZGUgPT0gJ3Jldmlld3MnID8gJ1JldmlldyBWb3RlZCcgOiAnQ29tbWVudCBWb3RlZCcpIH0sICckc3RyZWFtSUQnXSB9LFxuXHRcdFx0eyBldmVudHM6IFwibG9naW5cIiwgYXJnczogW2dldENhdGVnb3J5RnVuY3Rpb24oJ0xvZ2luJyksICdTb2NpYWwgTG9naW4nLCAnJHByb3ZpZGVyJ10gfSxcblx0XHRcdHsgZXZlbnRzOiBcImxvZ291dFwiLCBhcmdzOiBbZ2V0Q2F0ZWdvcnlGdW5jdGlvbignTG9nb3V0JyksICdMb2dvdXQnXSB9LFxuXHRcdFx0eyBldmVudHM6IFwiY29ubmVjdGlvbkFkZGVkXCIsIGFyZ3M6IFtnZXRDYXRlZ29yeUZ1bmN0aW9uKCdBZGQgQ29ubmVjdGlvbicpLCAnU29jaWFsIENvbm5lY3Rpb24gQWRkZWQnLCAnJHByb3ZpZGVyJ10gfSxcblx0XHRcdHsgZXZlbnRzOiBcImNvbm5lY3Rpb25SZW1vdmVkXCIsIGFyZ3M6IFtnZXRDYXRlZ29yeUZ1bmN0aW9uKCdSZW1vdmUgQ29ubmVjdGlvbicpLCAnU29jaWFsIENvbm5lY3Rpb24gUmVtb3ZlZCcsICckcHJvdmlkZXInXSB9XG5cdCAgICBdXG5cdH0pO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=