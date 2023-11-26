e{
    css: {
        fixCss: function(e){return(window.gigya.localInfo.isIE7||window.gigya.localInfo.isIE&&window.gigya.localInfo.quirksMode)&&(e=e.replace(/display:inline-block/g,"display:inline-block;zoom:1;*display:inline")),e.replace(/gradient\((.*?),(.*?)\)/g,'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="$1", endColorstr="$2");background: linear-gradient(top,  $1,  $2);background: -ms-linear-gradient(top left, $1, $2);background: -webkit-gradient(linear, left top, left bottom, from($1), to($2));background: -moz-linear-gradient(top,  $1,  $2)')}
    },
    lang: {
        getLocalizedText: function e(n,i,o,a,r){var l,s,g;if("te-st"==o)return"TEST_"+i.substring(0,10);o||(o="en");var d=window.gigya.i18n[n][o];if(!d)return e(n,i,t(o,"en"),a,r);var c=d[i],u=null===(g=null===(s=null===(l=window.gigya.i18n)||void 0===l?void 0:l["gigya.services.accounts.plugins.screenSet.js"])||void 0===s?void 0:s[o])||void 0===g?void 0:g[i];return!c&&u&&(c=u),c&&a&&(c=c.replace(a,r)),c},
        getTranslationsFromContainer: function e(n,i,o,a){if(void 0===o&&(o=!0),void 0===a&&(a="en"),n&&n.translations){for(var r=(null==i?void 0:i.split(",").map((function(e){return e.trim()})))||[],l=0,s=r;l<s.length;l++){var g=s[l];if(n.translations[g])return{langKey:g,translations:n.translations[g]};var d=t(g,g);if(d){var c=e(n,d);if(o&&c)return c}}var u=t(r[0],a);return o&&u?e(n,u):void 0}},
        getFallbackLang: function t(e,n){var t=e.indexOf("-");return t>0?e.substr(0,t):e!==n?n:void 0},
        getDateString: function(e,n){if(e&&e.dateFormat){var t=e.dateFormat,i=n.getDate(),o=n.getMonth()+1,a=["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()],r=n.getFullYear();return t.replace(/%dd/g,("0"+i).slice(-2)).replace(/%d/g,i).replace(/%MMMM/g,a).replace(/%MMM/g,a.substr(0,3)).replace(/%MM/g,("0"+o).slice(-2)).replace(/%M/g,o).replace(/%yyyy/g,r).replace(/%yy/g,r.toString().slice(-2))}}
    },
    animation: {
        fadeIn: function(e,n){void 0===n&&(n=1),null==e.style.opacity?e.style.filter="alpha(opacity=0)":e.style.opacity="0",window.setTimeout((function(){null==e.style.opacity?e.style.filter="alpha(opacity="+100*n+")":e.style.opacity=n+""}),10)},
        slideDown: function(e){var n=i.getClassBordersAndPaddings(e.className),t=e.offsetHeight-n.h,o=e.style.transitionProperty;e.style.maxHeight="1px",e.style.transitionProperty=e.style.webkitTransitionProperty="max-height",window.setTimeout((function(){e.style.maxHeight=t+"px",e.style.transitionProperty=e.style.webkitTransitionProperty=o}),100);var a=function(){e.style.maxHeight="999px",window.gigya.utils.DOM.removeEventListener(e,"transitionend",a),window.gigya.utils.DOM.removeEventListener(e,"webkitTransitionEnd",a)};window.gigya.utils.DOM.addEventListener(e,"transitionend",a),window.gigya.utils.DOM.addEventListener(e,"webkitTransitionEnd",a),window.setTimeout(a,500)}
    },
    DOM: {
        addBrowserInfoClassesToElement: function(e){var n="gigya-"+window.gigya.localInfo.currentBrowser;window.gigya.localInfo.isIOS&&(n+=" ios"),n=n.replace(/ /g," gigya-"),window.gigya.localInfo.isNativeMobileApp&&(n="gigya-native-mobile-app "+n),window.gigya.utils.DOM.addClassToElement(e,n)},
        setTextboxSubmitButton: function(e,n){var t=function(e){13==(e&&e.which?(e=e).which:(e=event).keyCode)&&n.click()};window.gigya.utils.DOM.addEventListener(e,"keyup",t),window.gigya.utils.DOM.addEventListener(n,"keyup",t)},
        getRelativePosition: function o(e,n,t,i,o){var a={top:0,left:0,bottom:0,right:0};return"bottom"===t?(a.top=e.bottom+i,a.left=o?e.right-n.w:e.left):"top"===t?(a.top=e.top-n.h-i,a.left=o?e.right-n.w:e.left):"left"===t?(a.top=o?e.bottom-n.h:e.top,a.left=e.left-n.w-i):(a.top=o?e.bottom-n.h:e.top,a.left=e.right+i),a.bottom=a.top+n.h,a.right=a.left+n.w,a},
        placePopoverNearElement: function a(e,n,t,i,a,r){var l=window.gigya.utils.DOM.getElementPosition(e),s={w:n.offsetWidth,h:n.offsetHeight},g=o(l,s,t,i,a);if(r&&!window.gigya.utils.viewport.isRectFullyVisible(g)){var d=o(l,s,{bottom:"top",left:"right",right:"left",top:"bottom"}[t],i,!1);window.gigya.utils.viewport.isRectHorizontallyVisible(d)&&(g=d)}if(!window.gigya.utils.viewport.isRectHorizontallyVisible(g)){d=o(l,s,t,i,!a);window.gigya.utils.viewport.isRectHorizontallyVisible(d)&&(g=d)}n.style.left=g.left+"px",n.style.top=g.top+"px"},
        addPopoverNearElement: function(e,n,t,i,o,l,s,g,d){if(void 0===t&&(t="bottom"),void 0===i&&(i=0),void 0===o&&(o=!1),void 0===l&&(l=!0),void 0===s&&(s=null),void 0===g&&(g=null),void 0===d&&(d=null),e&&n){var c=document.createElement("div");return c.appendChild(n),c.style.position="absolute",c.style.zIndex=window.gigya.utils.DOM.getNextZIndex().toString(),c.style.left="-1000px",document.body.appendChild(c),a(e,c,t,i,o,l),r(c,(function(n){e.focus(),g(n)}),d),s&&"function"==typeof window.gigya.pluginUtils.animation[s]&&window.gigya.pluginUtils.animation[s](n),c}},
        removeElementOnDocClickOrEscape: function r(e,n,t){if(void 0===n&&(n=null),void 0===t&&(t=null),e){var i=[e];t&&(i=i.concat(t)),s((function(t){var i=e&&e.parentNode;i&&e.parentNode.removeChild(e),n&&n(t,i)}),i)}},
        hideElementOnDocClick: function(e,n,t){if(void 0===n&&(n=null),void 0===t&&(t=null),e){var i=[e];t&&i.concat(t),s((function(){e.style.display="none",n&&n()}),i)}},
        performOnDocClickOrEscape: function s(e,n){void 0===e&&(e=null),void 0===n&&(n=null);var t=function(n){window.gigya.utils.DOM.removeClassFromElement(document.body,"gig-clickable"),window.gigya.utils.DOM.removeEventListener(document,"mousedown",o),window.gigya.utils.DOM.removeEventListener(document,"keydown",a),e&&e(n)},o=function(e){for(var i=e.target||e.srcElement,o=!1;i&&i.parentNode;){if(n&&-1!=n.indexOf(i)){o=!0;break}i=i.parentNode}o||t(e)},a=function(e){27==(e.which||e.keyCode)&&t(e)};(window.gigya.localInfo.isIOS&&window.gigya.localInfo.isSafari||window.gigya.localInfo.isIOSWebView)&&(l||(i.addCss("*.gig-clickable {cursor: pointer;}",null),l=!0),window.gigya.utils.DOM.addClassToElement(document.body,"gig-clickable")),window.gigya.utils.DOM.addEventListener(document,"mousedown",o),window.gigya.utils.DOM.addEventListener(document,"keydown",a)},
        hideElement: function(e){e.style.display="none"},
        showElement: function(e){e.style.display="block"}
    },
    layout: {
        measureText: function(e,n,t){void 0===t&&(t=0),(isNaN(t)||t<0)&&(t=0);var i=document.getElementById("gigya_ruler"),o=document.getElementById("gigya_ruler_text");null==i&&(i=document.createElement("div"),o=document.createElement("span"),i.id="gigya_ruler",o.id="gigya_ruler_text",i.style.visibility="hidden",i.style.position="absolute",i.style.margin="0px",i.style.padding="0px",i.appendChild(o),window.gigya.utils.DOM.prependToBody(i)),n&&(i.style.lineHeight=n.size+"px",i.style.fontFamily=n.font,i.style.fontSize=n.size+"px",i.style.fontWeight="true"==(""+n.bold).toLowerCase()?"bold":""),t?(i.style.whiteSpace="",i.style.width=t+"px"):(i.style.whiteSpace="nowrap",i.style.width="auto"),i.style.overflow="hidden",i.style.display="",o.innerHTML=e;var a=o.offsetWidth,r=o.offsetHeight;return 0!=a&&0!=r||(a=i.offsetWidth,r=i.offsetHeight),i.style.display="none",{w:a,h:r}}
    },
    text: {
        normalizeLinebreaks: function(e){return void 0===e&&(e=void 0),e&&e.replace?e.replace(/\r/,"").replace(/\n/g,"\r\n"):e},
        fixTextWidows: function(e){var n=e.lastIndexOf(" ");return-1===n?e:e.substr(0,n)+"&nbsp;"+e.substr(n+1)}
    },
    validation: {
        isValidEmailLoginID: function(e){var n=new RegExp("^(?=(.{1,64}@.{1,255}))([!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9}]{1,64}(\\.[!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9]{1,}){0,})@((\\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\\])|([a-zA-Z0-9-]{1,63}(\\.[a-zA-Z0-9-]{1,63}){1,}))$","ig").test(e);return window.gigya.logger.info("LoginID validation with email : "+e+", passed : "+n),n},
        isEmailValid: function(e){return t(e)},
        isEmailListValid: function t(e){for(var n=new RegExp("((\"[^<]+<(((?=([^.].{0,63}@.{1,255}))([!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9}]{1,64}(\\.[!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9]{1,}){0,})@((\\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\\])|([a-zA-Z0-9-]{1,63}(\\.[a-zA-Z0-9-]{1,63}){1,}))))>\")|((\"[^\"]*\" *)?<(((?=([^.].{0,63}@.{1,255}))([!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9}]{1,64}(\\.[!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9]{1,}){0,})@((\\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\\])|([a-zA-Z0-9-]{1,63}(\\.[a-zA-Z0-9-]{1,63}){1,}))))>)|(((?=([^.].{0,63}@.{1,255}))([!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9}]{1,64}(\\.[!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9]{1,}){0,})@((\\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\\])|([a-zA-Z0-9-]{1,63}(\\.[a-zA-Z0-9-]{1,63}){1,})))))"),t=e.split(","),i=0;i<t.length;i++)if(!n.test(t[i]))return!1;return!0}
    },
    domain: {
        isInDomain: function(e,n){if(void 0===e&&(e=void 0),void 0===n&&(n=window.gigya.thisScript.globalConf.topDomain||document.domain),e){var t="^"+e.replace(/\./g,"\\.").replace(/\*\\./g,"([a-zA-Z0-9]+\\.)*")+"$";return new RegExp(t).test(n)}}
    }
}export default {
    css: {
        fixCss: function(e){return(window.gigya.localInfo.isIE7||window.gigya.localInfo.isIE&&window.gigya.localInfo.quirksMode)&&(e=e.replace(/display:inline-block/g,"display:inline-block;zoom:1;*display:inline")),e.replace(/gradient\((.*?),(.*?)\)/g,'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="$1", endColorstr="$2");background: linear-gradient(top,  $1,  $2);background: -ms-linear-gradient(top left, $1, $2);background: -webkit-gradient(linear, left top, left bottom, from($1), to($2));background: -moz-linear-gradient(top,  $1,  $2)')}
    },
    lang: {
        getLocalizedText: function e(n,i,o,a,r){var l,s,g;if("te-st"==o)return"TEST_"+i.substring(0,10);o||(o="en");var d=window.gigya.i18n[n][o];if(!d)return e(n,i,t(o,"en"),a,r);var c=d[i],u=null===(g=null===(s=null===(l=window.gigya.i18n)||void 0===l?void 0:l["gigya.services.accounts.plugins.screenSet.js"])||void 0===s?void 0:s[o])||void 0===g?void 0:g[i];return!c&&u&&(c=u),c&&a&&(c=c.replace(a,r)),c},
        getTranslationsFromContainer: function e(n,i,o,a){if(void 0===o&&(o=!0),void 0===a&&(a="en"),n&&n.translations){for(var r=(null==i?void 0:i.split(",").map((function(e){return e.trim()})))||[],l=0,s=r;l<s.length;l++){var g=s[l];if(n.translations[g])return{langKey:g,translations:n.translations[g]};var d=t(g,g);if(d){var c=e(n,d);if(o&&c)return c}}var u=t(r[0],a);return o&&u?e(n,u):void 0}},
        getFallbackLang: function t(e,n){var t=e.indexOf("-");return t>0?e.substr(0,t):e!==n?n:void 0},
        getDateString: function(e,n){if(e&&e.dateFormat){var t=e.dateFormat,i=n.getDate(),o=n.getMonth()+1,a=["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()],r=n.getFullYear();return t.replace(/%dd/g,("0"+i).slice(-2)).replace(/%d/g,i).replace(/%MMMM/g,a).replace(/%MMM/g,a.substr(0,3)).replace(/%MM/g,("0"+o).slice(-2)).replace(/%M/g,o).replace(/%yyyy/g,r).replace(/%yy/g,r.toString().slice(-2))}}
    },
    animation: {
        fadeIn: function(e,n){void 0===n&&(n=1),null==e.style.opacity?e.style.filter="alpha(opacity=0)":e.style.opacity="0",window.setTimeout((function(){null==e.style.opacity?e.style.filter="alpha(opacity="+100*n+")":e.style.opacity=n+""}),10)},
        slideDown: function(e){var n=i.getClassBordersAndPaddings(e.className),t=e.offsetHeight-n.h,o=e.style.transitionProperty;e.style.maxHeight="1px",e.style.transitionProperty=e.style.webkitTransitionProperty="max-height",window.setTimeout((function(){e.style.maxHeight=t+"px",e.style.transitionProperty=e.style.webkitTransitionProperty=o}),100);var a=function(){e.style.maxHeight="999px",window.gigya.utils.DOM.removeEventListener(e,"transitionend",a),window.gigya.utils.DOM.removeEventListener(e,"webkitTransitionEnd",a)};window.gigya.utils.DOM.addEventListener(e,"transitionend",a),window.gigya.utils.DOM.addEventListener(e,"webkitTransitionEnd",a),window.setTimeout(a,500)}
    },
    DOM: {
        addBrowserInfoClassesToElement: function(e){var n="gigya-"+window.gigya.localInfo.currentBrowser;window.gigya.localInfo.isIOS&&(n+=" ios"),n=n.replace(/ /g," gigya-"),window.gigya.localInfo.isNativeMobileApp&&(n="gigya-native-mobile-app "+n),window.gigya.utils.DOM.addClassToElement(e,n)},
        setTextboxSubmitButton: function(e,n){var t=function(e){13==(e&&e.which?(e=e).which:(e=event).keyCode)&&n.click()};window.gigya.utils.DOM.addEventListener(e,"keyup",t),window.gigya.utils.DOM.addEventListener(n,"keyup",t)},
        getRelativePosition: function o(e,n,t,i,o){var a={top:0,left:0,bottom:0,right:0};return"bottom"===t?(a.top=e.bottom+i,a.left=o?e.right-n.w:e.left):"top"===t?(a.top=e.top-n.h-i,a.left=o?e.right-n.w:e.left):"left"===t?(a.top=o?e.bottom-n.h:e.top,a.left=e.left-n.w-i):(a.top=o?e.bottom-n.h:e.top,a.left=e.right+i),a.bottom=a.top+n.h,a.right=a.left+n.w,a},
        placePopoverNearElement: function a(e,n,t,i,a,r){var l=window.gigya.utils.DOM.getElementPosition(e),s={w:n.offsetWidth,h:n.offsetHeight},g=o(l,s,t,i,a);if(r&&!window.gigya.utils.viewport.isRectFullyVisible(g)){var d=o(l,s,{bottom:"top",left:"right",right:"left",top:"bottom"}[t],i,!1);window.gigya.utils.viewport.isRectHorizontallyVisible(d)&&(g=d)}if(!window.gigya.utils.viewport.isRectHorizontallyVisible(g)){d=o(l,s,t,i,!a);window.gigya.utils.viewport.isRectHorizontallyVisible(d)&&(g=d)}n.style.left=g.left+"px",n.style.top=g.top+"px"},
        addPopoverNearElement: function(e,n,t,i,o,l,s,g,d){if(void 0===t&&(t="bottom"),void 0===i&&(i=0),void 0===o&&(o=!1),void 0===l&&(l=!0),void 0===s&&(s=null),void 0===g&&(g=null),void 0===d&&(d=null),e&&n){var c=document.createElement("div");return c.appendChild(n),c.style.position="absolute",c.style.zIndex=window.gigya.utils.DOM.getNextZIndex().toString(),c.style.left="-1000px",document.body.appendChild(c),a(e,c,t,i,o,l),r(c,(function(n){e.focus(),g(n)}),d),s&&"function"==typeof window.gigya.pluginUtils.animation[s]&&window.gigya.pluginUtils.animation[s](n),c}},
        removeElementOnDocClickOrEscape: function r(e,n,t){if(void 0===n&&(n=null),void 0===t&&(t=null),e){var i=[e];t&&(i=i.concat(t)),s((function(t){var i=e&&e.parentNode;i&&e.parentNode.removeChild(e),n&&n(t,i)}),i)}},
        hideElementOnDocClick: function(e,n,t){if(void 0===n&&(n=null),void 0===t&&(t=null),e){var i=[e];t&&i.concat(t),s((function(){e.style.display="none",n&&n()}),i)}},
        performOnDocClickOrEscape: function s(e,n){void 0===e&&(e=null),void 0===n&&(n=null);var t=function(n){window.gigya.utils.DOM.removeClassFromElement(document.body,"gig-clickable"),window.gigya.utils.DOM.removeEventListener(document,"mousedown",o),window.gigya.utils.DOM.removeEventListener(document,"keydown",a),e&&e(n)},o=function(e){for(var i=e.target||e.srcElement,o=!1;i&&i.parentNode;){if(n&&-1!=n.indexOf(i)){o=!0;break}i=i.parentNode}o||t(e)},a=function(e){27==(e.which||e.keyCode)&&t(e)};(window.gigya.localInfo.isIOS&&window.gigya.localInfo.isSafari||window.gigya.localInfo.isIOSWebView)&&(l||(i.addCss("*.gig-clickable {cursor: pointer;}",null),l=!0),window.gigya.utils.DOM.addClassToElement(document.body,"gig-clickable")),window.gigya.utils.DOM.addEventListener(document,"mousedown",o),window.gigya.utils.DOM.addEventListener(document,"keydown",a)},
        hideElement: function(e){e.style.display="none"},
        showElement: function(e){e.style.display="block"}
    },
    layout: {
        measureText: function(e,n,t){void 0===t&&(t=0),(isNaN(t)||t<0)&&(t=0);var i=document.getElementById("gigya_ruler"),o=document.getElementById("gigya_ruler_text");null==i&&(i=document.createElement("div"),o=document.createElement("span"),i.id="gigya_ruler",o.id="gigya_ruler_text",i.style.visibility="hidden",i.style.position="absolute",i.style.margin="0px",i.style.padding="0px",i.appendChild(o),window.gigya.utils.DOM.prependToBody(i)),n&&(i.style.lineHeight=n.size+"px",i.style.fontFamily=n.font,i.style.fontSize=n.size+"px",i.style.fontWeight="true"==(""+n.bold).toLowerCase()?"bold":""),t?(i.style.whiteSpace="",i.style.width=t+"px"):(i.style.whiteSpace="nowrap",i.style.width="auto"),i.style.overflow="hidden",i.style.display="",o.innerHTML=e;var a=o.offsetWidth,r=o.offsetHeight;return 0!=a&&0!=r||(a=i.offsetWidth,r=i.offsetHeight),i.style.display="none",{w:a,h:r}}
    },
    text: {
        normalizeLinebreaks: function(e){return void 0===e&&(e=void 0),e&&e.replace?e.replace(/\r/,"").replace(/\n/g,"\r\n"):e},
        fixTextWidows: function(e){var n=e.lastIndexOf(" ");return-1===n?e:e.substr(0,n)+"&nbsp;"+e.substr(n+1)}
    },
    validation: {
        isValidEmailLoginID: function(e){var n=new RegExp("^(?=(.{1,64}@.{1,255}))([!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9}]{1,64}(\\.[!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9]{1,}){0,})@((\\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\\])|([a-zA-Z0-9-]{1,63}(\\.[a-zA-Z0-9-]{1,63}){1,}))$","ig").test(e);return window.gigya.logger.info("LoginID validation with email : "+e+", passed : "+n),n},
        isEmailValid: function(e){return t(e)},
        isEmailListValid: function t(e){for(var n=new RegExp("((\"[^<]+<(((?=([^.].{0,63}@.{1,255}))([!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9}]{1,64}(\\.[!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9]{1,}){0,})@((\\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\\])|([a-zA-Z0-9-]{1,63}(\\.[a-zA-Z0-9-]{1,63}){1,}))))>\")|((\"[^\"]*\" *)?<(((?=([^.].{0,63}@.{1,255}))([!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9}]{1,64}(\\.[!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9]{1,}){0,})@((\\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\\])|([a-zA-Z0-9-]{1,63}(\\.[a-zA-Z0-9-]{1,63}){1,}))))>)|(((?=([^.].{0,63}@.{1,255}))([!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9}]{1,64}(\\.[!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9]{1,}){0,})@((\\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\\])|([a-zA-Z0-9-]{1,63}(\\.[a-zA-Z0-9-]{1,63}){1,})))))"),t=e.split(","),i=0;i<t.length;i++)if(!n.test(t[i]))return!1;return!0}
    },
    domain: {
        isInDomain: function(e,n){if(void 0===e&&(e=void 0),void 0===n&&(n=window.gigya.thisScript.globalConf.topDomain||document.domain),e){var t="^"+e.replace(/\./g,"\\.").replace(/\*\\./g,"([a-zA-Z0-9]+\\.)*")+"$";return new RegExp(t).test(n)}}
    }
};