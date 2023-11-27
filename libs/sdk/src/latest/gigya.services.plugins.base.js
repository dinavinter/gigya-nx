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
    (__webpack_require__.s = './src/core/Gigya.Js.Plugin/app/index.ts')
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ '../node_modules/css-loader/dist/cjs.js!./src/accounts/Gigya.JS.Plugin.screenSet2/app/style/defaultCSS.css':
      /*!*****************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./src/accounts/Gigya.JS.Plugin.screenSet2/app/style/defaultCSS.css ***!
  \*****************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // Imports
        var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
          /*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ '../node_modules/css-loader/dist/runtime/api.js'
        );
        exports = ___CSS_LOADER_API_IMPORT___(false);
        // Module
        exports.push([
          module.i,
          '.gigya-consent-title {\n  font-weight: bold;\n  display: block;\n  font-weight: 700;\n  font-size: 15px;\n  font-family: arial;\n}\n.gigya-consent-subtitle {\n  font-weight: bold;\n  display: block;\n  font-weight: 700;\n  font-size: 13px;\n  font-family: arial;\n}\n\n.consent .gigya-version-content {\n  margin-top: 0.5rem;\n}\n\n.gigya-screen .gigya-disabled-color {\n  color: #b2b2b2;\n}\n.gigya-consent-text {\n  display: inline-block;\n}\n.gigya-composite-control-captcha-widget iframe {\n  width: 100%;\n}\n#FunCaptcha {\n  text-align: center;\n}\n.gigya-reset *,\ndiv.gigya-reset,\n.gigya-reset span,\n.gigya-reset a:hover,\n.gigya-reset a:visited,\n.gigya-reset a:link,\n.gigya-reset a:active {\n  border: none;\n  padding: 0px;\n  margin: 0px;\n  color: inherit;\n  text-decoration: none;\n  width: auto;\n  float: none;\n  -moz-border-radius: 0;\n  border-radius: 0;\n  font-family: arial;\n  font-size: 12px;\n  color: #333333;\n  text-align: left;\n}\n\n.gigya-screen .gigya-error-msg {\n  color: #ce4635;\n  font-size: 11px;\n  display: block;\n  visibility: hidden;\n}\n\n.gigya-screen .gigya-error-msg.gigya-error-msg-active {\n  color: #ce4635;\n  font-size: 11px;\n  display: block;\n  visibility: visible;\n}\n.gigya-screen .gigya-error-msg.gigya-warn {\n  color: #b45a0b !important;\n}\n\n.gigya-screen .gigya-terms-error,\n.gigya-screen input.gigya-error,\n.gigya-screen input[type="text"].gigya-error,\n.gigya-screen input[type="password"].gigya-error,\n.gigya-screen input[type="email"].gigya-error,\n.gigya-screen select.gigya-error {\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #ce4635;\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n\n.gigya-screen input.gigya-warn,\n.gigya-screen input[type="text"].gigya-warn,\n.gigya-screen select.gigya-warn {\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #b45a0b !important;\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n\n.gigya-screen input.gigya-error[type="checkbox"],\n.gigya-screen input.gigya-error[type="radio"] {\n  padding: 0;\n}\n\n.gigya-screen input[disabled],\n.gigya-screen input:disabled {\n  background-color: #e1e1e1;\n  color: #4a4a4a;\n  border-color: #cccccc;\n}\n\ndiv.gigya-attach-file-upload-form {\n  position: absolute;\n  overflow: hidden;\n  font-size: 50px;\n  cursor: pointer;\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n\ndiv.gigya-photo-upload-form > input {\n  font-size: 500px;\n  direction: rtl;\n  height: 100%;\n  cursor: pointer;\n}\n\n.gigya-password-strength-bubble .gig-balloon-nub {\n  background-image: url("${imgBase}/screenSet/triangle_left.png");\n  height: 16px;\n  width: 10px;\n  left: +2px;\n}\n.gigya-password-strength-bubble .gig-balloon-nub-up {\n  background-image: url("${imgBase}/screenSet/triangle_up.png");\n  height: 10px;\n  width: 16px;\n  top: +2px;\n}\n.gigya-password-strength-bubble .gig-balloon-nub-right {\n  background-image: url("${imgBase}/screenSet/triangle_right.png");\n  height: 16px;\n  width: 10px;\n  left: -2px;\n}\n.gigya-password-strength-bubble .gig-balloon-nub-down {\n  background-image: url("${imgBase}/screenSet/triangle_down.png");\n  height: 10px;\n  width: 16px;\n  top: -2px;\n}\n.gigya-password-strength-bubble .gig-balloon-frame {\n  background-color: #f3f5f6;\n  -webkit-border-radius: 2px;\n  -moz-border-radius: 2px;\n  border-radius: 2px;\n  border: 1px solid #bfcfda;\n  -webkit-box-shadow: inset 0 0 1px 1px RGBA(0, 0, 0, 0.05);\n  -moz-box-shadow: inset 0 0 1px 1px RGBA(0, 0, 0, 0.05);\n  box-shadow: inset 0 0 1px 1px RGBA(0, 0, 0, 0.05);\n}\n\n.gigya-password-strength-bubble .gig-balloon {\n  position: relative;\n}\n.gigya-password-strength-bubble.gig-balloon-left .gig-balloon {\n  left: +10px;\n  top: +3px;\n}\n.gigya-password-strength-bubble.gig-balloon-right .gig-balloon {\n  left: -10px;\n  top: +3px;\n}\n.gigya-password-strength-bubble.gig-balloon-up .gig-balloon {\n  left: -5px;\n  top: +17px;\n}\n.gigya-password-strength-bubble.gig-balloon-down .gig-balloon {\n  left: -5px;\n  top: -12px;\n}\n\n.gigya-passwordStrength-text {\n  text-align: center;\n}\n\nspan.gigya-passwordStrength-text {\n  font-weight: bold;\n  display: inline-block;\n}\n\ndiv.gigya-passwordStrength-text-requirements {\n  text-align: center;\n  width: 100%;\n  margin-top: 8px;\n}\n\nspan.gigya-passwordStrength-scoreText {\n  margin-left: 3px;\n}\n\n.gigya-passwordStrength-too_weak .gigya-passwordStrength-scoreText {\n  color: #e76468;\n}\n.gigya-passwordStrength-weak .gigya-passwordStrength-scoreText {\n  color: #e76468;\n}\n.gigya-passwordStrength-fair .gigya-passwordStrength-scoreText {\n  color: #d99b4b;\n}\n.gigya-passwordStrength-strong .gigya-passwordStrength-scoreText {\n  color: #4ababc;\n}\n.gigya-passwordStrength-very_strong .gigya-passwordStrength-scoreText {\n  color: #4ababc;\n}\n\ndiv.gigya-passwordStrength-bar {\n  width: 100%;\n  height: 1px;\n  background-color: #b6b6b6;\n  margin-top: 8px;\n}\n\ndiv.gigya-passwordStrength-bar-too_weak {\n  width: 20%;\n  height: 100%;\n  background-color: #e76468;\n}\n\ndiv.gigya-passwordStrength-bar-weak {\n  width: 40%;\n  height: 100%;\n  background-color: #e76468;\n}\n\ndiv.gigya-passwordStrength-bar-fair {\n  width: 60%;\n  height: 100%;\n  background-color: #d99b4b;\n}\n\ndiv.gigya-passwordStrength-bar-strong {\n  width: 80%;\n  height: 100%;\n  background-color: #4ababc;\n}\n\ndiv.gigya-passwordStrength-bar-very_strong {\n  width: 100%;\n  height: 100%;\n  background-color: #4ababc;\n}\n\n.gigya-calculate-size {\n  position: absolute !important;\n  -ms-zoom: 1 !important;\n  zoom: 1 !important;\n  left: 10px !important;\n  top: -1000px !important;\n}\n\n.gigya-calculate-size div.gigya-captcha {\n  min-width: 318px;\n  min-height: 80px;\n  _width: 318px;\n  _height: 80px;\n}\n.gigya-calculate-size div.gigya-captcha.v2 {\n  min-height: 80px;\n  _height: 80px;\n}\n\n.gigya-calculate-size div.gigya-social-login {\n  min-width: 110px;\n  min-height: 120px;\n  _width: 110px;\n  _height: 120px;\n}\n\n.gigya-calculate-size div.gigya-tfa {\n  min-width: 325px;\n  min-height: 200px;\n  _width: 325px;\n  _height: 200px;\n}\n\ndiv.gigya-container {\n  display: none;\n}\n\ndiv.gigya-container.gigya-container-enabled {\n  display: block;\n}\n\ndiv.gigya-loginID-availability {\n  line-height: 18px;\n  background-repeat: no-repeat;\n  background-position: left center;\n}\n\ndiv.gigya-loginID-availability-available {\n  padding-left: 17px;\n  background-image: url("${imgBase}/accounts/ok.png");\n  color: #4fa373;\n}\n\ndiv.gigya-loginID-availability-not-available {\n  padding-left: 16px;\n  background-image: url("${imgBase}/accounts/error.png");\n  color: #ce4635;\n}\n\ndiv.gigya-loginID-availability-progress {\n  padding-left: 20px;\n  background-image: url("${imgBase}/accounts/smallLoader.gif");\n  color: #666666;\n}\n\ndiv.gigya-profile-photo {\n  border-radius: 3px;\n}\n\n.gigya-calculate-size div.gigya-profile-photo {\n  min-width: 64px;\n  min-height: 64px;\n}\n\ndiv.gigya-screen-dimmer {\n  position: absolute;\n  opacity: 0.5;\n  filter: "alpha(opacity=50)";\n  background-color: #ffffff;\n}\n\ndiv.gigya-screen-loader {\n  position: absolute;\n  background: transparent url("${imgBase}/accounts/bigLoader.gif") no-repeat center center;\n  min-height: 32px;\n  min-width: 32px;\n}\n\ndiv.gigya-screen-dialog-content {\n  overflow: auto;\n  padding: 25px;\n}\n\ndiv.gigya-screen-dialog-mobile div.gigya-composite-control-captcha-widget {\n  padding: 0;\n}\n\ndiv.gigya-screen-dialog-mobile .gigya-screen {\n  width: 100%;\n}\n\ndiv.gigya-secret-question {\n  display: none;\n}\n\ndiv.gigya-photo-upload {\n  height: 63px;\n  width: 300px;\n  zoom: 1;\n}\n\ndiv.gigya-photo-upload-button {\n  display: inline-block;\n  zoom: 1;\n  margin: 0 8px 8px 0;\n  font-weight: normal;\n  border: 1px solid #cecece;\n  cursor: pointer;\n  padding: 0 12px;\n  color: #333333;\n  font-weight: bold;\n  border-radius: 4px;\n  line-height: 28px;\n  background: #f2f2f2;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#FFFFFF", endColorstr="#F2F2F2");\n  background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#f2f2f2));\n  background: -moz-linear-gradient(top, #ffffff, #f2f2f2);\n}\n\ndiv.gigya-photo-upload-button:hover {\n  background: #ffffff;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#F2F2F2", endColorstr="#FFFFFF");\n  background: -webkit-gradient(linear, left top, left bottom, from(#f2f2f2), to(#ffffff));\n  background: -moz-linear-gradient(top, #f2f2f2, #ffffff);\n}\n\ndiv.gigya-photo-upload-text {\n  font-size: 11px;\n  color: #666666;\n}\n\ndiv.gigya-photo-upload-image {\n  border-radius: 6px;\n  background-position: center center;\n  background-repeat: no-repeat;\n  width: 64px;\n  height: 64px;\n  background-color: #f2f2f2;\n  float: left;\n  margin-right: 8px;\n}\n\ndiv.gigya-photo-upload-path {\n  white-space: nowrap;\n  width: 107px;\n  vertical-align: middle;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  padding-right: 10px;\n  background-position: right;\n  background-repeat: no-repeat;\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding-right: 20px;\n}\n\nh1.gigya-screen-caption {\n  border-bottom: 1px solid #dbdbdb;\n  font-size: 16px;\n  font-weight: bold;\n  color: #333;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  margin: 0 auto;\n}\n\n.gigya-error-display {\n  display: none;\n}\n\n.gigya-error-display.gigya-error-display-active {\n  display: block;\n}\n\n.gigya-hidden {\n  display: none !important;\n}\n\n.gigya-screen .gigya-tfa input[type="text"] {\n  margin: 5px 0px;\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #cccccc;\n}\n\n.gigya-screen .gigya-tfa input[type="text"]:focus,\n.gigya-screen .gigya-tfa input[type="text"]:focus {\n  border-color: #87b9ea;\n}\n\n.gigya-show-checkmark.gigya-valid {\n  background-image: url("${imgBase}/screenSet/checkmarkValid.png");\n  background-position-x: 100%;\n  background-position-y: 50%;\n  background-position: right 5px center;\n  background-repeat: no-repeat;\n  padding-right: 25px;\n}\n\n.gigya-show-checkmark.gigya-valid.gigya-empty {\n  background-image: none;\n  padding-right: 5px;\n}\n\n.gigya-show-checkmark.gigya-pending {\n  background-image: url("${imgBase}/screenSet/checkmarkPending.gif");\n  background-position-x: 100%;\n  background-position-y: 50%;\n  background-position: right 5px center;\n  background-repeat: no-repeat;\n  padding-right: 25px;\n}\n\n/* If changed, update UI Builder too. */\n.gigya-screen .gigya-composite-control-image {\n  overflow: hidden;\n}\n.gigya-image {\n  background-repeat: no-repeat;\n  box-sizing: content-box;\n  background-position: center;\n  min-height: 10px;\n}\n.gigya-image[data-background-size="fit"] {\n  background-size: contain;\n}\n.gigya-image[data-background-size="fit-horizontally"] {\n  background-size: 100% auto;\n}\n.gigya-image[data-background-size="fit-vertically"] {\n  background-size: auto 100%;\n}\n.gigya-image[data-background-size="stretch"] {\n  background-size: 100% 100%;\n}\n\n/*IE8*/\n.gigya-ie8 .gigya-layout-cell {\n  overflow: hidden;\n  margin-left: -1px !important;\n}\n\n.gigya-ie8 .gigya-attach-file-upload-form .gigya-attach-file-upload-file-input {\n  width: 1000px;\n}\n\n.gigya-ie8 .gigya-calculate-size div.gigya-profile-photo {\n  _width: 64px;\n  _height: 64px;\n}\n\n.gigya-ie8 div.gigya-photo-upload {\n  *display: inline;\n}\n\n.gigya-ie8 div.gigya-photo-upload-button {\n  *display: inline;\n}\n.gigya-ie8 .gigya-screen .gigya-placeholder {\n  color: #a9a9bb;\n  padding-left: 5px;\n  text-indent: 0;\n}\n.gigya-ie8 .gigya-placeholder:focus {\n  padding-left: 5px;\n}\n.gigya-ie8 .gigya-screen .gigya-input-text:focus {\n  padding-left: 5px;\n  text-indent: 0;\n}\n.gigya-ie8 .gigya-screen.gigya-input-text,\n.gigya-ie8 .gigya-screen .gigya-input-text.gigya-error {\n  padding-top: 12px;\n}\n\n/*IE9*/\n.gigya-ie9 .gigya-screen input.gigya-input-text,\n.gigya-ie9 .gigya-screen input.gigya-input-password {\n  padding-top: 1px;\n  text-indent: 0;\n  padding-bottom: 5px;\n}\n\n.gigya-ie9 .gigya-screen .gigya-input-text:focus,\n.gigya-ie9 .gigya-screen .gigya-input-password:focus {\n  box-shadow: 0px 0px 5px 0px #1d87ff;\n  border: 1px solid #87b9ea;\n  /*padding-left: 5px;*/\n  text-indent: 0;\n}\n\n.gigya-ie9 .gigya-screen input.gigya-input-text.gigya-placeholder,\n.gigya-ie9 .gigya-screen input.gigya-input-password.gigya-placeholder {\n  color: #a9a9bb;\n  padding-top: 5px;\n  text-indent: 0;\n  /*padding-left: 4px;*/\n}\n\n/*IE10*/\n.gigya-ie10 .gigya-screen input.gigya-input-text,\n.gigya-ie10 .gigya-screen input.gigya-input-password {\n  padding-top: 1px;\n}\n\n/*remove bottom padding for outline when focused (not needed anyway)*/\n.gigya-screen .forgot-password-cell a,\n.gigya-screen .gigya-composite-control.gigya-forgotPassword,\n.gigya-screen .gigya-composite-control.gigya-change-password-link,\n.gigya-screen .gigya-composite-control.gigya-composite-control-link {\n  padding-bottom: 0px;\n}\n.gigya-screen .gigya-array-manager.disable-delete > .gigya-array-template > .buttons-wrapper button.gigya-array-remove-btn {\n  display: none;\n}\n.gigya-screen .gigya-composite-control-array-widget {\n  margin: 10px 0;\n}\n.gigya-screen .gigya-composite-control-array-widget .gigya-composite-control-array-widget {\n  margin: 10px;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template {\n  padding: 10px 0 10px 0;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template:not(:last-of-type) {\n  border-bottom: 1px #c1c1c1 solid;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template .buttons-wrapper {\n  text-align: right;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template button {\n  background: none;\n  outline: none !important;\n  color: #1371b9;\n  padding: 10px;\n  cursor: pointer;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template button.hidden {\n  display: none;\n}\n.gigya-screen a.gigya-disabled {\n  color: #757575;\n  cursor: default;\n  pointer-events: none;\n  text-decoration: none;\n}\n\n.gigya-screen input[type="button"].gigya-disabled {\n  background: #757575 !important;\n  cursor: default;\n}\n.gigya-screen .gigya-disabled:hover {\n  text-decoration: none;\n  cursor: default;\n}\n\n.gigya-screen .gigya-disabled:active {\n  color: #757575;\n  cursor: default;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.justify-content-space {\n  justify-content: space-between;\n}\n\n.gigya-myPhoto-form-wrapper {\n  width: 100% !important;\n}\n.gigya-myPhoto-uploadForm {\n  opacity: 1 !important;\n}\n\n.gigya-myPhoto-profile-box-wrapper input.gigya-myPhoto-upload {\n  width: 100% !important;\n}\n\n.gigya-myPhoto-status-icon {\n  opacity: 0 !important;\n}\n\n.gigya-myPhoto-uploadForm > input {\n  border: 0 !important;\n  background-color: transparent !important;\n}\n.gigya-myPhoto-upload {\n  opacity: 0 !important;\n}\n.gigya-dummyPhoto-upload {\n  width: 100% !important;\n  height: 100% !important;\n}\n.gigya-composite-control-link:focus,\n.gigya-composite-control select:focus,\n.gigya-composite-control input[type="checkbox"]:focus,\n.gigya-myPhoto-delete-button:focus,\n.gigya-myPhoto-uploadForm input:focus,\n.gigya-dummyPhoto-upload:focus {\n  border: 1px solid #2378cd !important;\n  outline: none !important;\n  box-shadow: 0 0 5px 0 #0070f0 !important;\n}\n\n.gigya-screen .gigya-composite-control.gigya-composite-control-phone-number-widget .gigya-phone-verified-status-image {\n  width: 16px;\n  height: 16px;\n  background-image: url("${imgBase}/screenSet/checkmarkValid.png");\n  background-position-x: 100%;\n  background-position-y: 50%;\n  background-repeat: no-repeat;\n}\n',
          '',
        ]);
        // Exports
        module.exports = exports;

        /***/
      },

    /***/ '../node_modules/css-loader/dist/cjs.js!./src/core/Gigya.Js.Plugin/app/css/legacy_modal.css':
      /*!**************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./src/core/Gigya.Js.Plugin/app/css/legacy_modal.css ***!
  \**************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // Imports
        var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
          /*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ '../node_modules/css-loader/dist/runtime/api.js'
        );
        exports = ___CSS_LOADER_API_IMPORT___(false);
        // Module
        exports.push([
          module.i,
          "/* legacy modal */\n\ndiv.gigya-screen-dialog {\n    position: absolute;\n    display: inline-block;\n    top: 25px;\n    left: 25px;\n    border: 8px solid #CCCCCC;\n    border-radius: 8px;\n    background-color: #FFFFFF;\n    outline: none;\n}\n\ndiv.gigya-screen-dialog-inner {\n    border: 1px solid #AAAAAA;\n}\n\ndiv.gigya-screen-dialog-close {\n    line-height: 33px;\n    height: 33px;\n    width: 20px;\n    float: right;\n    cursor: pointer;\n    background-image: url('${imgBase}/accounts/close_dialog.png');\n    background-position: right;\n    background-repeat: no-repeat;\n}\n\ndiv.gigya-screen-dialog-caption {\n    float: left;\n    font-weight: bold;\n    font-size: 16px;\n    font-family: arial;\n}\n\ndiv.gigya-screen-dialog-mobile {\n    position: absolute;\n    display: inline-block;\n    top: 0;\n    left: 0;\n    background-color: #FFFFFF;\n    width: 100%;\n}\n\ndiv.gigya-screen-dialog-top {\n    overflow: hidden;\n    zoom: 1;\n    background-color: #F3F3F3;\n    line-height: 33px;\n    padding: 0 10px 0 11px;\n}\n\n#gigya-screen-dialog-page-overlay {\n        width : 100vw;\n        height : 100vh;\n        background : black;\n        position : fixed;\n        top : 0;\n        left : 0;\n        z-index : -1;\n        filter : alpha(opacity=20);\n        opacity : 0.2;\n    }",
          '',
        ]);
        // Exports
        module.exports = exports;

        /***/
      },

    /***/ '../node_modules/css-loader/dist/cjs.js!./src/core/Gigya.Js.Plugin/app/css/modern_modal.css':
      /*!**************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./src/core/Gigya.Js.Plugin/app/css/modern_modal.css ***!
  \**************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // Imports
        var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
          /*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ '../node_modules/css-loader/dist/runtime/api.js'
        );
        exports = ___CSS_LOADER_API_IMPORT___(false);
        // Module
        exports.push([
          module.i,
          '/*modern modal*/\n.gigya-style-modern #gigya-screen-dialog-page-overlay {\n    width: 100vw;\n    height: 100vh;\n    background: black;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    filter: alpha(opacity=20);\n    opacity: 0.2;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-main {\n    border: 0.5px;\n    border-radius: 3px;\n    background-color: transparent;\n    -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.5);\n    -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.5);\n    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.5);\n    max-height: 99vh;\n    max-width: 99vw;\n    overflow: auto;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-top {\n    overflow: hidden;\n    zoom: 1;\n    background-color: #1371B9;\n    line-height: 38px;\n    padding: 0 10px 0 11px;\n    border-radius: 3px 3px 0px 0px;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-close {\n    background-image: initial;\n    background-position: initial;\n    background-repeat: initial;\n    float: right;\n    cursor: pointer;\n}\n.gigya-style-modern div.gigya-screen-dialog-close > a{\n    padding: 4px;\n}\n.gigya-style-modern div.gigya-screen-dialog-close > a > img {\n    margin-top: 11px;\n    vertical-align: initial;\n    border: 0px;\n    width: auto;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-caption {\n    float: left;\n    font-size: 19px;\n    font-family: arial;\n    color: #FFFFFF;\n    padding-right: 20px;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-inner {\n    padding: 0px;\n    overflow: hidden;\n    min-width: 32px;\n    min-height: 64px;\n    background-color: white;\n}\n\n.gigya-style-modern div.gigya-screen-dimmer {\n    position: absolute;\n    opacity: 0.2;\n    filter: alpha(opacity=20);\n    background-color: #FFFFFF;\n}\n\n.gigya-style-modern div.gigya-screen-loader {\n    position: absolute;\n    background: transparent url("${imgBase}/accounts/bigLoader.gif") no-repeat center center;\n    min-height: 32px;\n    min-width: 32px;\n}\n\n.gigya-style-modern.gigya-screen-dialog {\n    position: fixed;\n    border: none;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile {\n    position: absolute;\n    display: inline-block;\n    top: 0;\n    left: 0;\n    background-color: white;\n    width: 100%;\n    height: 100%;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-main {\n    max-height: 100vh;\n    max-width: 100vw;\n    box-shadow: initial;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-top {\n    position: fixed;\n    top: 0px;\n    border-radius: 0px;\n    line-height: 27px;\n    box-sizing: border-box;\n    width: 100%;\n    z-index: 1;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-caption {\n    font-size: 14px;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-close > a > img {\n    margin-top: 5px;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-inner {\n    border: 0px;\n    margin-top: 27px;\n    box-sizing: border-box;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-inner > div {\n    margin: 0 auto;\n}\n\n.gigya-style-modern.gigya-ios.gigya-screen-dialog, .gigya-style-modern.gigya-ios.gigya-screen-dialog.gigya-ios-v7.gigya-screen-dialog-mobile div.gigya-screen-dialog-top {\n    position: absolute;\n}\n\n.gigya-style-modern.gigya-android.gigya-screen-dialog-mobile {\n    overflow: auto;\n}\n\n.gigya-style-modern.gigya-ie8 #gigya-screen-dialog-page-overlay {\n    width: 100%;\n    height: 100%;\n}\n\nhtml.gigya-mobile-modal-mode {\n    overflow: hidden;\n}\nhtml.gigya-mobile-modal-mode body {\n    height: 0px;\n    overflow: hidden;\n}\n',
          '',
        ]);
        // Exports
        module.exports = exports;

        /***/
      },

    /***/ '../node_modules/css-loader/dist/runtime/api.js':
      /*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
        // css base code, injected by the css-loader
        // eslint-disable-next-line func-names
        module.exports = function (useSourceMap) {
          var list = []; // return the list of modules as css string

          list.toString = function toString() {
            return this.map(function (item) {
              var content = cssWithMappingToString(item, useSourceMap);

              if (item[2]) {
                return '@media '.concat(item[2], ' {').concat(content, '}');
              }

              return content;
            }).join('');
          }; // import a list of modules into the list
          // eslint-disable-next-line func-names

          list.i = function (modules, mediaQuery, dedupe) {
            if (typeof modules === 'string') {
              // eslint-disable-next-line no-param-reassign
              modules = [[null, modules, '']];
            }

            var alreadyImportedModules = {};

            if (dedupe) {
              for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];

                if (id != null) {
                  alreadyImportedModules[id] = true;
                }
              }
            }

            for (var _i = 0; _i < modules.length; _i++) {
              var item = [].concat(modules[_i]);

              if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
              }

              if (mediaQuery) {
                if (!item[2]) {
                  item[2] = mediaQuery;
                } else {
                  item[2] = ''.concat(mediaQuery, ' and ').concat(item[2]);
                }
              }

              list.push(item);
            }
          };

          return list;
        };

        function cssWithMappingToString(item, useSourceMap) {
          var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

          var cssMapping = item[3];

          if (!cssMapping) {
            return content;
          }

          if (useSourceMap && typeof btoa === 'function') {
            var sourceMapping = toComment(cssMapping);
            var sourceURLs = cssMapping.sources.map(function (source) {
              return '/*# sourceURL='
                .concat(cssMapping.sourceRoot || '')
                .concat(source, ' */');
            });
            return [content]
              .concat(sourceURLs)
              .concat([sourceMapping])
              .join('\n');
          }

          return [content].join('\n');
        } // Adapted from convert-source-map (MIT)

        function toComment(sourceMap) {
          // eslint-disable-next-line no-undef
          var base64 = btoa(
            unescape(encodeURIComponent(JSON.stringify(sourceMap)))
          );
          var data =
            'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
              base64
            );
          return '/*# '.concat(data, ' */');
        }

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

    /***/ './src/accounts/Gigya.JS.Plugin.screenSet2/app/style/defaultCSS.css':
      /*!**************************************************************************!*\
  !*** ./src/accounts/Gigya.JS.Plugin.screenSet2/app/style/defaultCSS.css ***!
  \**************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var result = __webpack_require__(
          /*! !../../../../../../node_modules/css-loader/dist/cjs.js!./defaultCSS.css */ '../node_modules/css-loader/dist/cjs.js!./src/accounts/Gigya.JS.Plugin.screenSet2/app/style/defaultCSS.css'
        );

        if (typeof result === 'string') {
          module.exports = result;
        } else {
          module.exports = result.toString();
        }

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/BasePlugin.ts':
      /*!****************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/BasePlugin.ts ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var ModalDialog_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/helpers/ModalDialog */ './src/core/Gigya.Js.Plugin/app/helpers/ModalDialog.ts'
        );
        var PluginStyles_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/PluginStyles */ './src/core/Gigya.Js.Plugin/app/PluginStyles.ts'
        );
        var LoadDimmer_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/helpers/LoadDimmer */ './src/core/Gigya.Js.Plugin/app/helpers/LoadDimmer.ts'
        );
        var Poller_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/helpers/Poller */ './src/core/Gigya.Js.Plugin/app/helpers/Poller.ts'
        );
        var resources_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/Utils/UI/resources */ './src/core/Gigya.Js.Plugin/app/Utils/UI/resources.ts'
        );
        var PollerActions_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/helpers/PollerActions */ './src/core/Gigya.Js.Plugin/app/helpers/PollerActions.ts'
        );
        var DOM_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/Utils/UI/DOM */ './src/core/Gigya.Js.Plugin/app/Utils/UI/DOM.ts'
        );
        var CloseReasons_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/CloseReasons */ './src/core/Gigya.Js.Plugin/app/CloseReasons.ts'
        );
        var CssUtils_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/CssUtils */ './src/core/Gigya.Js.Plugin/app/CssUtils.ts'
        );
        var language_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/Utils/languages/language */ './src/core/Gigya.Js.Plugin/app/Utils/languages/language.ts'
        );
        var GSErrors_1 = __webpack_require__(
          /*! ../../Gigya.Js/app/GSErrors */ './src/core/Gigya.Js/app/GSErrors.ts'
        );
        var keyboard_1 = __webpack_require__(
          /*! ../../Gigya.Js/app/Utils/keyboard */ './src/core/Gigya.Js/app/Utils/keyboard.ts'
        );
        var FlagService_1 = __webpack_require__(
          /*! src/core/Gigya.Js/app/Services/FlagService */ './src/core/Gigya.Js/app/Services/FlagService.ts'
        );
        exports.cssFlags = {};
        var BasePlugin = /** @class */ (function (_super) {
          tslib_1.__extends(BasePlugin, _super);
          // constructing
          function BasePlugin(params, explicitParams, injectionInfo) {
            var _this =
              _super.call(this, params, explicitParams, false) || this;
            _this.params = params;
            _this.explicitParams = explicitParams;
            _this.injectionInfo = injectionInfo;
            _this._pixelRatio = BasePlugin.globalPixelRatio;
            _this._imgBase = BasePlugin.globalImgBase;
            _this._imgExt = 'png';
            _this.MOBILE_MODAL_MIN_WIDTH = 400;
            _this.lang = _this.params.lang;
            _this._style = PluginStyles_1.PluginStyle.modern;
            // Polling
            _this._poller = new Poller_1.Poller();
            _this.POLL_INTERVAL = 150;
            _this.config = window.gigya.utils.object.merge([
              _this.injectionInfo,
              _this.getConfig(),
            ]);
            _this.localizedJsName = _this.getTranslationJsName();
            return _this;
          }
          // Events
          BasePlugin.prototype.onRefreshExternalComponentsEvent = function () {
            // this should be protected [after rewrite of screensetPlugin]
            return this.getEvent('onRefreshExternalComponentsEvent');
          };
          BasePlugin.prototype.refreshExternalComponents = function () {
            this.dispatchPluginEvent('onRefreshExternalComponentsEvent');
          };
          BasePlugin.prototype.getTranslationJsName = function () {
            var jsName = this.config.jsName;
            jsName = jsName.split('_v')[0]; // remove version specific
            if (jsName.indexOf('.js') === -1) jsName = jsName + '.js';
            return jsName;
          };
          /// ** starting plugin process - start ***
          BasePlugin.prototype.start = function () {
            var _this = this;
            if (!this.params.containerID && !this.config.allowModal) {
              this.dispatchInvalidParamError('containerID');
            } else {
              // Check if the container exists or the plugin should be drawn as modal
              if (!this.params.containerID) {
                this.isModal = true;
                this.params = window.gigya.utils.object.merge([
                  this.config.defaultModalParams,
                  this.params,
                ]);
              } else {
                this.container = document.getElementById(
                  this.params.containerID
                );
                if (this.container) {
                  this.container.innerHTML = '';
                  this.containerID = this.params.containerID;
                } else {
                  this.dispatchInvalidParamError('containerID');
                  return;
                }
              }
            }
            // If required params are missing, dispatch an error and stop plugin initialization
            if (!this.validateParams()) return;
            window.gigya.logger
              .group(
                'init ' +
                  this.injectionInfo.name +
                  ' (' +
                  this.containerID +
                  ')'
              )
              .endWhen(
                new gigya.Promise(function (r) {
                  _this.initUI();
                  if (_this.params._noInit) {
                    _this.loadComplete();
                    r();
                  } else {
                    // Abstract initialization, invoking 'onLoad' event when finished
                    _this.init(function (isSucceed) {
                      _this.loadComplete(isSucceed);
                      r();
                    });
                  }
                })
              );
          };
          BasePlugin.prototype.initUI = function () {
            var _this = this;
            // Initializing templates & css.
            this._templates = resources_1.getTemplates([
              'base',
              this.config.name,
            ]);
            this._css = resources_1.getCss(['base', this.config.name]);
            // Calculating if mobile ui.
            var deviceType = window.gigya._.DeviceTypes._undefined;
            if (this.params.deviceType)
              deviceType =
                window.gigya._.DeviceTypes[
                  this.params.deviceType.toLowerCase()
                ];
            deviceType =
              deviceType ||
              this.getConfig().defaultDeviceType ||
              window.gigya._.DeviceTypes.desktop;
            this.params.deviceType = window.gigya._.DeviceTypes[deviceType];
            this.isMobileUI =
              deviceType == window.gigya._.DeviceTypes.mobile ||
              (deviceType == window.gigya._.DeviceTypes.auto &&
                window.gigya.localInfo.isMobile &&
                window.gigya.localInfo.isMobileApp);
            // Getting reading direction.
            this.isRtl = this.lang == 'he' || this.lang == 'ar';
            this.initContainer();
            if (this._style != PluginStyles_1.PluginStyle.none)
              this.injectCss();
            // Setting poller for auto-dispose.
            this._poller.addActions(
              new PollerActions_1.InvalidPropertyAction(
                this,
                'container',
                function () {
                  return _this.dispose();
                }
              )
            );
          };
          BasePlugin.prototype.loadComplete = function (isSucceed) {
            var _this = this;
            if (isSucceed === void 0) {
              isSucceed = true;
            }
            if (!isSucceed) {
              return;
            }
            this.dispatchPluginEvent('load');
            if (this.container) {
              if (this.isModal) {
                if (this._modalDialog && !this.config.disableModalContainerInit)
                  this._modalDialog.showAll();
                if (this.config.enableViewportPolling) {
                  this._poller.addActions(
                    new PollerActions_1.ViewportSizeAction(function (
                      old,
                      curr
                    ) {
                      /// changing modal to mobile-modal when viewport's small enough
                      //if (curr.width < this.MOBILE_MODAL_MIN_WIDTH)
                      //    this._modalDialog.changeToMobile();
                      //else
                      //    this._modalDialog.changeToWeb();
                      _this.onViewportSizeChanged(old, curr);
                      _this.centerModal();
                      _this.refreshExternalComponents();
                    })
                  );
                }
              } else {
                // If the plugin is not modal, the width is set, size polling is enabled, and width ends with '%' character, start polling for container size change
                if (
                  this.config.enableSizePolling &&
                  (!this.params.width ||
                    this.params.width
                      .toString()
                      .indexOf('%', this.params.width.length - 1) !== -1)
                ) {
                  this._poller.addActions(
                    new PollerActions_1.ContainerSizeAction(
                      this.container,
                      function (old, curr) {
                        _this.resizePlugin(old, curr); // calling abstract method.
                        _this.refreshExternalComponents();
                      }
                    )
                  );
                  if (
                    FlagService_1.FlagService.useViewportPollerAction &&
                    this.config.enableViewportPolling
                  ) {
                    this._poller.addActions(
                      new PollerActions_1.ViewportSizeAction(function (
                        old,
                        curr
                      ) {
                        _this.onViewportSizeChanged(old, curr);
                        _this.refreshExternalComponents();
                      })
                    );
                  }
                }
              }
              // Start polling!
              if (this._poller.hasActions())
                this._poller.start(this.POLL_INTERVAL);
            }
          };
          BasePlugin.prototype.initContainer = function () {
            // Create the popup container if needed, otherwise use containerID
            if (this.isModal) {
              this.initModalContainer();
            } else {
              // Set the container size
              window.gigya.utils.DOM.setSize(
                this.container,
                this.params.width,
                this.params.height,
                false
              );
              this.addMetaDataClasses(this.container);
              if (this.params.responsive) this.container.style.width = 'auto';
              this._loadingIndicator = new LoadDimmer_1.LoadDimmer(
                this.container
              );
            }
          };
          BasePlugin.prototype.initModalContainer = function () {
            this._style = this.getPluginStyle();
            this.createModalDialog();
            this._captionElement = this._modalDialog.getCaptionContainer();
            this.container = this._modalDialog.getContentContainer();
            this.containerID = this.container.id;
            this._loadingIndicator = this._modalDialog.getLoadingIndicator();
          };
          // adding meta-data classes [for CSS selectors] for the top element of the plugin .
          BasePlugin.prototype.addMetaDataClasses = function (topElement) {
            var style = this.getPluginStyle();
            switch (style) {
              case PluginStyles_1.PluginStyle.legacy:
              case PluginStyles_1.PluginStyle.modern:
                window.gigya.utils.DOM.addClassToElement(
                  topElement,
                  PluginStyles_1.getPluginStyleClass(style)
                );
                break;
              default:
                break;
            }
            DOM_1.addBrowserInfoClassesToElement(topElement);
          };
          BasePlugin.prototype.getPluginStyle = function () {
            return (
              PluginStyles_1.PluginStyle[this.params.dialogStyle] ||
              this.config.defaultDialogStyle ||
              this._style
            );
          };
          BasePlugin.prototype.setContainerMinSize = function () {
            if (
              this.params.height &&
              this.params.height != 'auto' &&
              this.params.height.indexOf('%') == -1
            )
              this.container.style.minHeight = this.params.height + 'px';
            if (
              this.params.width &&
              this.params.width != 'auto' &&
              this.params.width.indexOf('%') == -1
            )
              this.container.style.minWidth = this.params.width + 'px';
          };
          BasePlugin.prototype.createModalDialog = function () {
            var _this = this;
            // Getting caption
            var title;
            if (this.params.captionText) title = this.params.captionText;
            else if (this.params.captionTextKey)
              title = this.getText(this.params.captionTextKey);
            else title = '&nbsp;';
            var closeImage;
            // Getting dim effect.
            var dimModal;
            if (typeof this.params.dimDialogBackground != 'undefined') {
              dimModal = this.params.dimDialogBackground;
            } else if (
              this.config.defaultModalParams &&
              typeof this.config.defaultModalParams.dimDialogBackground !=
                'undefined'
            ) {
              dimModal = this.config.defaultModalParams.dimDialogBackground;
            } else {
              dimModal = false;
            }
            var photoUrl;
            var css = this.params.modalCss;
            var isLegacy = false;
            if (!css) {
              switch (this._style) {
                case PluginStyles_1.PluginStyle.modern:
                  css = this.getCss().modern_modal;
                  photoUrl = this.getPhotoFullName('gm/close');
                  break;
                case PluginStyles_1.PluginStyle.legacy:
                  isLegacy = true;
                  css = this.getCss().legacy_modal;
                  photoUrl = this._imgBase + 'gm/CloseButton.' + this._imgExt;
                  break;
                case PluginStyles_1.PluginStyle.none:
                  css = '';
                  photoUrl = this.getPhotoFullName('gm/close');
                  break;
                default:
                  throw new Error('unrecognized dialog style');
              }
            }
            css = window.gigya.utils.templates.fill(css, {
              imgBase: this._imgBase,
            });
            // Getting close-image
            if (this.params.closeImage) {
              closeImage = this.params.closeImage;
            } else {
              closeImage = window.gigya.utils.templates.fill(
                this.getTemplates().modalCloseButton,
                {
                  imgUrl: this.params['closeImageUrl'] || photoUrl,
                  imgHeight: this.params['closeImageHeight'] || 15,
                  imgWidth: this.params['closeImageWidth'] || 15,
                }
              );
            }
            this._modalDialog = new ModalDialog_1.ModalDialog(
              this.injectionInfo.methodName,
              this.isMobileUI,
              {
                modalTemplate:
                  this.params.modalTemplate ||
                  (isLegacy
                    ? this.getTemplates().legacyModal
                    : this.getTemplates().modal),
                modalCss: css,
                captionText: title,
                closeImage: closeImage,
                dimDialogBackground: dimModal,
                newModal: this.params.newModal,
                onModalClose: function (reason) {
                  return _this.close(CloseReasons_1.CloseReasons[reason]);
                },
              },
              isLegacy
            );
            this.addMetaDataClasses(
              this._modalDialog.getModalDialogContainer()
            );
            var hotKeyData = {
              key: keyboard_1.Keys.escape,
            };
            this.hotKeyEvent = window.gigya.utils.keyboard.onHotKeyClicked(
              hotKeyData,
              function () {
                _this.close();
              }
            );
          };
          BasePlugin.prototype.injectCss = function () {
            /// TODO: can we get rid of this function?
            var finalCss = '';
            var cssPrefix = this.params['cssPrefix'];
            var defaultCss = this.getCss();
            var jsName = this.config.jsName;
            if (!exports.cssFlags[jsName]) exports.cssFlags[jsName] = {};
            var cssDidLoadFlags = exports.cssFlags[jsName];
            if (cssPrefix || !this.addedCss) {
              finalCss = this.addCssIfDidntLoad(
                'reset',
                defaultCss,
                cssDidLoadFlags,
                finalCss
              );
              if (this.isRtl)
                finalCss = this.addCssIfDidntLoad(
                  'resetRtl',
                  defaultCss,
                  cssDidLoadFlags,
                  finalCss
                );
              finalCss = this.addCssIfDidntLoad(
                'global',
                defaultCss,
                cssDidLoadFlags,
                finalCss
              );
              if (this.isRtl)
                finalCss = this.addCssIfDidntLoad(
                  'globalRtl',
                  defaultCss,
                  cssDidLoadFlags,
                  finalCss
                );
              if (this.isMobileUI) {
                finalCss = this.addCssIfDidntLoad(
                  'mobile',
                  defaultCss,
                  cssDidLoadFlags,
                  finalCss
                );
                if (this.isRtl)
                  finalCss = this.addCssIfDidntLoad(
                    'mobileRtl',
                    defaultCss,
                    cssDidLoadFlags,
                    finalCss
                  );
              } else {
                finalCss = this.addCssIfDidntLoad(
                  'nonMobile',
                  defaultCss,
                  cssDidLoadFlags,
                  finalCss
                );
                if (this.isRtl)
                  finalCss = this.addCssIfDidntLoad(
                    'nonMobileRtl',
                    defaultCss,
                    cssDidLoadFlags,
                    finalCss
                  );
              }
              if (finalCss) CssUtils_1.addCss(finalCss, cssPrefix);
              this.addedCss = true;
            }
            if (this.config.hasMobileUI && this.isMobileUI && this.container) {
              this.container.style.width = '100%';
            }
          };
          /// ** starting plugin process - end ***
          /// ** "Abstract" methods  - start ***
          BasePlugin.prototype.init = function (loadedCallback) {
            this.error(
              window.gigya._.BaseObject.NOT_IMPLEMENTED_ERROR,
              GSErrors_1.GSErrors.NOT_SUPPORTED
            );
            loadedCallback(false);
          };
          BasePlugin.prototype.resizePlugin = function (old, curr) {
            // override to make plugin responsive to container resize
          };
          BasePlugin.prototype.onViewportSizeChanged = function (old, curr) {
            // override to make plugin responsive to viewport (window) resize
          };
          /// ** "Abstract" methods  - end ***
          /// ** Virtual methods - start ***
          BasePlugin.prototype.shouldClose = function () {
            return true;
          };
          /// ** Virtual methods - end ***
          /// ** Service methods - start ***
          BasePlugin.prototype.centerModal = function () {
            if (this._modalDialog && !this.isMobileUI) {
              this._modalDialog.center();
            }
          };
          BasePlugin.prototype.resizeModal = function (size) {
            if (this.isModal && this._modalDialog && !this.isMobileUI) {
              if (this.getPluginStyle() === PluginStyles_1.PluginStyle.legacy) {
                // revert size to only work with pixel sizes, and in use min-height/width
                if (size.height) {
                  size.minHeight = parseInt(size.height) + 'px';
                  delete size.height;
                }
                if (size.width) {
                  size.minWidth = parseInt(size.width) + 'px';
                  delete size.width;
                }
              }
              var prevSize = {
                height: this.container.clientHeight,
                width: this.container.clientWidth,
              };
              this._modalDialog.resize(size);
              var newSize = {
                height: this.container.clientHeight,
                width: this.container.clientWidth,
              };
              //this.resizePlugin(prevSize, newSize); // The plugin should handle this himself since he is the one that initiated the resize
              if (!this.config.disableModalContainerInit) this.centerModal();
            }
          };
          BasePlugin.prototype.getPhotoFullName = function (
            photoName,
            pixelRatio,
            ext,
            imgBase
          ) {
            if (pixelRatio === void 0) {
              pixelRatio = this._pixelRatio;
            }
            if (ext === void 0) {
              ext = this._imgExt;
            }
            if (imgBase === void 0) {
              imgBase = this._imgBase;
            }
            return imgBase + photoName + '_x' + pixelRatio + '.' + ext;
          };
          BasePlugin.prototype.dispatchPluginEvent = function (name, eventObj) {
            if (eventObj === void 0) {
              eventObj = {};
            }
            window.gigya.logger.info(
              this.injectionInfo.name + ' dispatches ' + name + ' event:',
              eventObj
            );
            return this.dispatchEvent(name, eventObj);
          };
          BasePlugin.prototype.getTemplates = function () {
            return this._templates;
          };
          BasePlugin.prototype.getCss = function () {
            return this._css;
          };
          BasePlugin.prototype.addCssIfDidntLoad = function (
            cssName,
            defaultCss,
            loadingFlags,
            currentCss
          ) {
            if (defaultCss[cssName] && !loadingFlags[cssName]) {
              loadingFlags[cssName] = true;
              return (currentCss += ' ' + defaultCss[cssName]);
            }
            return currentCss;
          };
          // Translations
          BasePlugin.prototype.getText = function (key, replaceStr, withStr) {
            var text;
            var customLang = tslib_1.__assign(
              {},
              window.gigya.utils.object.normalizeObjectKeysToLowerCase(
                this.params.customLang || {}
              )
            );
            if (customLang[key.toLowerCase()]) {
              text = customLang[key.toLowerCase()];
            } else {
              text = language_1.getLocalizedText(
                this.localizedJsName,
                key,
                this.lang
              );
            }
            return text === null || text === void 0
              ? void 0
              : text.replace(replaceStr, withStr);
          };
          BasePlugin.prototype.toString = function () {
            return this.params.containerID
              ? this.params.containerID + '.' + this.injectionInfo.name
              : this.injectionInfo.name;
          };
          BasePlugin.prototype.error = function (msg, errorCode, e) {
            if (errorCode === void 0) {
              errorCode = GSErrors_1.GSErrors.CLIENT_LOG;
            }
            var statusMessage = e && e.response && e.response.statusMessage;
            var errorInfo = {
              statusMessage: statusMessage,
              errorMessage: msg,
              errorCode: errorCode,
              errorDetails: this.toString(),
              containerID: this.params.containerID,
              params: this.params,
              info: e,
            };
            this.warn(msg, e);
            return this.dispatchErrorFromResponse(errorInfo);
          };
          // Closes the plugin - raises the 'hide' event and enable cancelling by derived plugins with overriding of 'shouldClose'
          BasePlugin.prototype.close = function (reason, eventObj) {
            if (!eventObj) {
              eventObj = {};
            }
            eventObj.reason = reason;
            this.dispatchPluginEvent('hide', eventObj);
            window.gigya.logger.info(
              'closing ' + this.injectionInfo.name + ' (reason: ' + reason + ')'
            );
            if (this.shouldClose()) {
              this.dispose();
            }
          };
          /// ** Service methods - end ***
          /// Lifecycle
          BasePlugin.prototype.dispose = function () {
            if (this._isDisposed) {
              return;
            }
            this._poller.dispose();
            if (this.container) {
              this.container.innerHTML = '';
            }
            if (this._modalDialog) {
              this._modalDialog.dispose();
            }
            if (this._loadingIndicator) {
              this._loadingIndicator.dispose();
            }
            if (this.hotKeyEvent) {
              this.hotKeyEvent.unsubscribe();
            }
            this.container = null;
            window.gigya._.plugins.removePluginInstance(
              this.params,
              this.injectionInfo
            );
            _super.prototype.dispose.call(this);
          };
          // Images
          BasePlugin.globalPixelRatio = window['devicePixelRatio']
            ? Math.min(Math.ceil(window['devicePixelRatio']), 3)
            : 1;
          BasePlugin.globalImgBase = window.gigya._.getImgCdnResource();
          return BasePlugin;
        })(window.gigya._.BaseObject);
        exports.BasePlugin = BasePlugin;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/CloseReasons.ts':
      /*!******************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/CloseReasons.ts ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var CloseReasons;
        (function (CloseReasons) {
          CloseReasons[(CloseReasons['pendingError'] = 0)] = 'pendingError';
          CloseReasons[(CloseReasons['missing'] = 1)] = 'missing';
          CloseReasons[(CloseReasons['finished'] = 2)] = 'finished';
          CloseReasons[(CloseReasons['canceled'] = 3)] = 'canceled';
          CloseReasons[(CloseReasons['backButton'] = 4)] = 'backButton';
          CloseReasons[(CloseReasons['canceledByParent'] = 5)] =
            'canceledByParent';
          CloseReasons[(CloseReasons['skip'] = 6)] = 'skip';
          CloseReasons[(CloseReasons['error'] = 7)] = 'error';
          CloseReasons[(CloseReasons['cancel'] = 8)] = 'cancel';
        })(
          (CloseReasons = exports.CloseReasons || (exports.CloseReasons = {}))
        );

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/CollectionUtils.ts':
      /*!*********************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/CollectionUtils.ts ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
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
          for (var i = 0; i < arr.length; ++i) action(arr[i], i, arr);
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
        function FirstIndex(arr, condition) {
          var result;
          Some(arr, function (item, index, arr) {
            if (condition(item, index, arr)) {
              result = index;
              return true;
            }
            return false;
          });
          return result;
        }
        exports.FirstIndex = FirstIndex;
        function First(arr, condition) {
          return arr[FirstIndex(arr, condition)];
        }
        exports.First = First;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/CssResources.ts':
      /*!******************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/CssResources.ts ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.legacy_modal = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/css/legacy_modal.css */ './src/core/Gigya.Js.Plugin/app/css/legacy_modal.css'
        );
        exports.modern_modal = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/css/modern_modal.css */ './src/core/Gigya.Js.Plugin/app/css/modern_modal.css'
        );
        exports.defaultCSS = __webpack_require__(
          /*! src/accounts/Gigya.JS.Plugin.screenSet2/app/style/defaultCSS.css */ './src/accounts/Gigya.JS.Plugin.screenSet2/app/style/defaultCSS.css'
        );

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/CssUtils.ts':
      /*!**************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/CssUtils.ts ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function fixCss(css) {
          if (
            window.gigya.localInfo.isIE7 ||
            (window.gigya.localInfo.isIE && window.gigya.localInfo.quirksMode)
          ) {
            css = css.replace(
              /display:inline-block/g,
              'display:inline-block;zoom:1;*display:inline'
            );
          }
          return css.replace(
            /gradient\((.*?),(.*?)\)/g,
            'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="$1", endColorstr="$2");' +
              'background: linear-gradient(top,  $1,  $2);' +
              'background: -ms-linear-gradient(top left, $1, $2);' +
              'background: -webkit-gradient(linear, left top, left bottom, from($1), to($2));' +
              'background: -moz-linear-gradient(top,  $1,  $2)'
          );
        }
        exports.fixCss = fixCss;
        function addCss(rules, prefix) {
          if (!rules || rules == '') return;
          if (rules instanceof Array) rules = rules.join(' ');
          //    rules = fixCss(rules);
          if (prefix) rules = rules.replace(/([^\s}]*\.gig)/g, prefix + ' $1');
          var style = document.createElement('style');
          style.type = 'text/css';
          var rulesNode = document.createTextNode(rules);
          if (style.styleSheet) {
            if (rulesNode.value != null) {
              style.styleSheet.cssText = rulesNode.value;
            } else {
              style.styleSheet.cssText = rulesNode.nodeValue;
            }
          } else {
            style.appendChild(rulesNode);
          }
          var head = document.getElementsByTagName('head');
          var body = document.body;
          (head.length > 0 ? head[0] : body).appendChild(style);
        }
        exports.addCss = addCss;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/DOMUtils.ts':
      /*!**************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/DOMUtils.ts ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function replaceLinksWithHTMLElements(textData) {
          var regex =
            /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/g;
          var links = textData.match(regex);
          if (links)
            for (var i = 0; i < links.length; i++) {
              var sanitizedLink = window.gigya.utils.sanitize.sanitizeAttribute(
                links[i]
              );
              textData = textData.replace(
                sanitizedLink,
                '<a href="' +
                  sanitizedLink +
                  '" target="_blank" rel="nofollow">' +
                  sanitizedLink +
                  '</a>'
              );
            }
          return textData;
        }
        exports.replaceLinksWithHTMLElements = replaceLinksWithHTMLElements;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/HtmlResources.ts':
      /*!*******************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/HtmlResources.ts ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.legacyModal = __webpack_require__(
          /*! ./html/legacyModal.html */ './src/core/Gigya.Js.Plugin/app/html/legacyModal.html'
        );
        exports.modal = __webpack_require__(
          /*! ./html/modal.html */ './src/core/Gigya.Js.Plugin/app/html/modal.html'
        );
        exports.modalCloseButton = __webpack_require__(
          /*! ./html/modalCloseButton.html */ './src/core/Gigya.Js.Plugin/app/html/modalCloseButton.html'
        );

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

    /***/ './src/core/Gigya.Js.Plugin/app/PluginUtils0.ts':
      /*!******************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/PluginUtils0.ts ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var CssUtils_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/CssUtils */ './src/core/Gigya.Js.Plugin/app/CssUtils.ts'
        );
        window.gigya.utils.functions.createAlias(
          'gigya.global.addCSS',
          CssUtils_1.addCss
        );
        window.gigya.utils.functions.createAlias(
          'gigya.pluginUtils.css.fixCss',
          CssUtils_1.fixCss
        );

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/URLUtils.ts':
      /*!**************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/URLUtils.ts ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function addOrReplaceHashFragment(url, param, value) {
          url = removeHashFragment(url, param);
          url = addHashFragment(url, param, value);
          return url;
        }
        exports.addOrReplaceHashFragment = addOrReplaceHashFragment;
        function addHashFragment(url, param, value) {
          var sign = '#';
          // Check if there is already an hashfragment exist
          if (url.indexOf('#') != -1)
            if (url.indexOf(param) == -1)
              // Check if the exist hashfragment is the same as we want to add - so we need or reaplce it
              sign = '&';
            else {
              var oldValue = param + '=' + this.getHashParamValue(url, param);
              url.replace(oldValue, param + '=' + value);
              return url;
            }
          return url + sign + param + '=' + value;
        }
        exports.addHashFragment = addHashFragment;
        function removeHashFragment(url, param) {
          // Check if the url conatin hash fragment
          if (url.indexOf('#') == -1) return url;
          // Get the hash value if exist
          var fullHashQuery = url.split('#')[1];
          var hashParamValue = getHashParamValue(url, param);
          if (hashParamValue)
            fullHashQuery = fullHashQuery.replace(
              param + '=' + hashParamValue,
              ''
            );
          // Remove the hash param in case it was a hash param without '='
          fullHashQuery = fullHashQuery.replace('&' + param, '');
          fullHashQuery = fullHashQuery.replace('#' + param, '#');
          if (fullHashQuery.length > 0 && (fullHashQuery[0] += '&'))
            fullHashQuery = fullHashQuery.substring(1, fullHashQuery.length);
          // Replace the current full Hash Query with the new one without the given param to removed and it's value if exist
          var URLWithoutHash = url.split('#')[0];
          // Chekc if the hash query left with no params
          if (fullHashQuery.length == 0) return URLWithoutHash;
          return URLWithoutHash + '#' + fullHashQuery;
        }
        exports.removeHashFragment = removeHashFragment;
        function getHashParamValue(url, param) {
          // Add the '=' sign to match the param and not maybe the same string in the URL not as a param
          param += '=';
          if (
            url.indexOf('#') == -1 ||
            url.indexOf(param, url.indexOf('#')) == -1
          )
            return null;
          // find the next & or the end of the param string
          var startOfParam = url.indexOf(param, url.indexOf('#'));
          var endOfParam = url.indexOf('&', startOfParam);
          // If the param was untill the end of the string - set the endOfParam to the end of the string too
          if (endOfParam == -1) endOfParam = url.length;
          return url.substring(startOfParam + param.length, endOfParam);
        }
        exports.getHashParamValue = getHashParamValue;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/UI/DOM.ts':
      /*!******************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/DOM.ts ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var CssUtils_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/CssUtils */ './src/core/Gigya.Js.Plugin/app/CssUtils.ts'
        );
        function addBrowserInfoClassesToElement(el) {
          // add prefix for each browser property: ('chrome ios')=> 'gigya-chrome gigya-ios'
          var browserClasses = 'gigya-' + window.gigya.localInfo.currentBrowser;
          if (window.gigya.localInfo.isIOS) {
            browserClasses += ' ios'; // added global ios class [for all versions]
          }
          browserClasses = browserClasses.replace(/ /g, ' gigya-');
          if (window.gigya.localInfo.isNativeMobileApp)
            browserClasses = 'gigya-native-mobile-app ' + browserClasses;
          window.gigya.utils.DOM.addClassToElement(el, browserClasses);
        }
        exports.addBrowserInfoClassesToElement = addBrowserInfoClassesToElement;
        function setTextboxSubmitButton(elTextbox, elButton) {
          var fnOnPress = function (e) {
            var charCode;
            if (e && e.which) {
              e = e;
              charCode = e.which;
            } else {
              e = event;
              charCode = e.keyCode;
            }
            if (charCode == 13) {
              elButton.click();
            }
          };
          window.gigya.utils.DOM.addEventListener(
            elTextbox,
            'keyup',
            fnOnPress
          );
          window.gigya.utils.DOM.addEventListener(elButton, 'keyup', fnOnPress);
        }
        exports.setTextboxSubmitButton = setTextboxSubmitButton;
        function getRelativePosition(position, size, direction, margin, flip) {
          var relativePosition = { top: 0, left: 0, bottom: 0, right: 0 };
          if (direction === 'bottom') {
            relativePosition.top = position.bottom + margin;
            relativePosition.left = flip
              ? position.right - size.w
              : position.left;
          } else if (direction === 'top') {
            relativePosition.top = position.top - size.h - margin;
            relativePosition.left = flip
              ? position.right - size.w
              : position.left;
          } else if (direction === 'left') {
            relativePosition.top = flip
              ? position.bottom - size.h
              : position.top;
            relativePosition.left = position.left - size.w - margin;
          } else {
            relativePosition.top = flip
              ? position.bottom - size.h
              : position.top;
            relativePosition.left = position.right + margin;
          }
          relativePosition.bottom = relativePosition.top + size.h;
          relativePosition.right = relativePosition.left + size.w;
          return relativePosition;
        }
        exports.getRelativePosition = getRelativePosition;
        function placePopoverNearElement(
          elTarget,
          container,
          direction,
          margin,
          flip,
          adjustDirection
        ) {
          var targetPosition =
            window.gigya.utils.DOM.getElementPosition(elTarget);
          var size = { w: container.offsetWidth, h: container.offsetHeight };
          var position = getRelativePosition(
            targetPosition,
            size,
            direction,
            margin,
            flip
          );
          if (
            adjustDirection &&
            !window.gigya.utils.viewport.isRectFullyVisible(position)
          ) {
            var opposite = {
              bottom: 'top',
              left: 'right',
              right: 'left',
              top: 'bottom',
            };
            var newPosition = getRelativePosition(
              targetPosition,
              size,
              opposite[direction],
              margin,
              false
            );
            if (
              window.gigya.utils.viewport.isRectHorizontallyVisible(newPosition)
            )
              position = newPosition;
          }
          if (
            !window.gigya.utils.viewport.isRectHorizontallyVisible(position)
          ) {
            var newPosition = getRelativePosition(
              targetPosition,
              size,
              direction,
              margin,
              !flip
            );
            if (
              window.gigya.utils.viewport.isRectHorizontallyVisible(newPosition)
            )
              position = newPosition;
          }
          container.style.left = '' + position.left + 'px';
          container.style.top = '' + position.top + 'px';
          //container.style.minWidth = elPopover.offsetWidth + 'px';
        }
        exports.placePopoverNearElement = placePopoverNearElement;
        function addPopoverNearElement(
          elTarget,
          elPopover,
          direction,
          margin,
          flip,
          adjustDirection,
          animation,
          fnWhenRemoved,
          removeOnClickExlcludedElements
        ) {
          if (direction === void 0) {
            direction = 'bottom';
          }
          if (margin === void 0) {
            margin = 0;
          }
          if (flip === void 0) {
            flip = false;
          }
          if (adjustDirection === void 0) {
            adjustDirection = true;
          }
          if (animation === void 0) {
            animation = null;
          }
          if (fnWhenRemoved === void 0) {
            fnWhenRemoved = null;
          }
          if (removeOnClickExlcludedElements === void 0) {
            removeOnClickExlcludedElements = null;
          }
          if (!elTarget || !elPopover) {
            return;
          }
          var container = document.createElement('div');
          container.appendChild(elPopover);
          container.style.position = 'absolute';
          container.style.zIndex =
            window.gigya.utils.DOM.getNextZIndex().toString();
          container.style.left = '-1000px'; // Draw outside of screen to get the size
          document.body.appendChild(container);
          placePopoverNearElement(
            elTarget,
            container,
            direction,
            margin,
            flip,
            adjustDirection
          );
          removeElementOnDocClickOrEscape(
            container,
            function (e) {
              elTarget.focus();
              fnWhenRemoved(e);
            },
            removeOnClickExlcludedElements
          );
          if (
            animation &&
            typeof window.gigya.pluginUtils.animation[animation] === 'function'
          )
            window.gigya.pluginUtils.animation[animation](elPopover);
          return container;
        }
        exports.addPopoverNearElement = addPopoverNearElement;
        function removeElementOnDocClickOrEscape(
          el,
          fnCallback,
          excludedElements
        ) {
          if (fnCallback === void 0) {
            fnCallback = null;
          }
          if (excludedElements === void 0) {
            excludedElements = null;
          }
          if (!el) {
            return;
          }
          var fnRemove = function (e) {
            var wasOpen = el && el.parentNode;
            if (wasOpen) el.parentNode.removeChild(el);
            if (fnCallback) fnCallback(e, wasOpen);
          };
          var arAllExcluded = [el];
          if (excludedElements) {
            arAllExcluded = arAllExcluded.concat(excludedElements);
          }
          performOnDocClickOrEscape(fnRemove, arAllExcluded);
        }
        exports.removeElementOnDocClickOrEscape =
          removeElementOnDocClickOrEscape;
        function hideElementOnDocClick(el, fnCallback, excludedElements) {
          if (fnCallback === void 0) {
            fnCallback = null;
          }
          if (excludedElements === void 0) {
            excludedElements = null;
          }
          if (!el) return;
          var fnHide = function () {
            el.style.display = 'none';
            if (fnCallback) fnCallback();
          };
          var arAllExcluded = [el];
          if (excludedElements) arAllExcluded.concat(excludedElements);
          performOnDocClickOrEscape(fnHide, arAllExcluded);
        }
        exports.hideElementOnDocClick = hideElementOnDocClick;
        var _clickableCssAdded = false;
        function performOnDocClickOrEscape(fnCallback, excludedElements) {
          if (fnCallback === void 0) {
            fnCallback = null;
          }
          if (excludedElements === void 0) {
            excludedElements = null;
          }
          var fnOnPerform = function (e) {
            window.gigya.utils.DOM.removeClassFromElement(
              document.body,
              'gig-clickable'
            );
            window.gigya.utils.DOM.removeEventListener(
              document,
              'mousedown',
              fnOnDocClick
            );
            window.gigya.utils.DOM.removeEventListener(
              document,
              'keydown',
              fnOnDocKeydown
            );
            if (fnCallback) fnCallback(e);
          };
          var fnOnDocClick = function (e) {
            var target = e.target || e.srcElement;
            var clickInDiv = false;
            while (target && target.parentNode) {
              if (excludedElements && excludedElements.indexOf(target) != -1) {
                clickInDiv = true;
                break;
              }
              target = target.parentNode;
            }
            if (!clickInDiv) {
              fnOnPerform(e);
            }
          };
          var fnOnDocKeydown = function (e) {
            if ((e.which || e.keyCode) == 27) {
              fnOnPerform(e);
            }
          };
          if (
            (window.gigya.localInfo.isIOS && window.gigya.localInfo.isSafari) ||
            window.gigya.localInfo.isIOSWebView
          ) {
            if (!_clickableCssAdded) {
              CssUtils_1.addCss('*.gig-clickable {cursor: pointer;}', null);
              _clickableCssAdded = true;
            }
            window.gigya.utils.DOM.addClassToElement(
              document.body,
              'gig-clickable'
            );
          }
          window.gigya.utils.DOM.addEventListener(
            document,
            'mousedown',
            fnOnDocClick
          );
          window.gigya.utils.DOM.addEventListener(
            document,
            'keydown',
            fnOnDocKeydown
          );
        }
        exports.performOnDocClickOrEscape = performOnDocClickOrEscape;
        function hideElement(el) {
          el.style.display = 'none';
        }
        exports.hideElement = hideElement;
        function showElement(el) {
          el.style.display = 'block';
        }
        exports.showElement = showElement;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/UI/DomAttributes.ts':
      /*!****************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/DomAttributes.ts ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function replaceLinksWithHTMLElements(textData, className) {
          var regex =
            /(?:(?:https?):\/\/|www\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.;]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.;])*(?:\([-A-Z0-9+&@#\/%=~_;|$?!:,.;]*\)|[A-Z0-9+&@#\/%=~_|;$])/gim;
          var links = textData.match(regex);
          var resText = '';
          if (links) {
            for (var i = 0; i < links.length; i++) {
              var startLink = '';
              if (
                links[i].indexOf('http:') === -1 &&
                links[i].indexOf('https:') === -1
              ) {
                startLink = 'http://';
              }
              var classAttr = '';
              if (className) {
                classAttr = ' class="' + className + '"';
              }
              var tempText = textData.substr(
                0,
                textData.indexOf(links[i]) + links[i].length
              );
              textData = textData.substr(
                tempText.length,
                textData.length - tempText.length
              );
              var cleanLink = links[i].replace(/&#173;/g, '');
              resText += tempText.replace(
                links[i],
                '<a' +
                  classAttr +
                  ' href="' +
                  startLink +
                  cleanLink +
                  '" target="_blank" rel="nofollow">' +
                  links[i] +
                  '</a>'
              );
            }
          }
          if (textData.length > 0) {
            resText += textData;
          }
          return resText;
        }
        exports.replaceLinksWithHTMLElements = replaceLinksWithHTMLElements;
        function setAttribute(el, attrName, attrVal) {
          if (attrName === 'class') {
            el.className = attrVal;
            return;
          }
          // IE11 cannot remove "value" attribute and possibly other attributes. Calling "removeAttribute" on IE does nothing in some cases.
          // For this reason we first set the attribute and then call removeAttribute if it was null.
          // In all browsers, the final result is that the attribute continues to exist and returns an empty string.
          // This is because NO browser can remove the "value" attribute (and possibly some other attributes).
          // Instead, the non-IE browsers just set the value to an empty string.
          el.setAttribute(attrName, attrVal);
          if (attrVal === null) {
            el.removeAttribute(attrName);
          }
        }
        exports.setAttribute = setAttribute;
        function getAttribute(el, attrName) {
          var attributeResult;
          if (window.gigya.localInfo.isIE8) {
            attributeResult = el.getAttribute(attrName);
          } else {
            // #77595 - IE "getAttributeNS" returns empty string instead of null when attribute does not exist.
            if (!el.hasAttributeNS('', attrName)) {
              return null;
            }
            attributeResult = el.getAttributeNS('', attrName);
          }
          return attributeResult;
        }
        exports.getAttribute = getAttribute;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/UI/GlobalDOM.ts':
      /*!************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/GlobalDOM.ts ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var imagePositions_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/Utils/UI/imagePositions */ './src/core/Gigya.Js.Plugin/app/Utils/UI/imagePositions.ts'
        );
        function addIframeShim(el, parent) {
          if (el['shim']) return;
          var shim = document.createElement('IFRAME');
          shim['frameborder'] = '0';
          shim['frameBorder'] = '0';
          shim['allowtransparency'] = true;
          shim.style.position = 'absolute';
          shim['update'] = function (updateDimensions) {
            if (shim && el) {
              if (parent) {
                shim.style.left = el.offsetLeft + 'px';
                shim.style.top = el.offsetTop + 'px';
              } else {
                var pos = imagePositions_1._GetElementPos(el);
                shim.style.left = pos.left + 'px';
                shim.style.top = pos.top + 'px';
              }
              if (updateDimensions) {
                shim.style.width = el.offsetWidth + 'px';
                shim.style.height = el.offsetHeight + 'px';
              }
            }
          };
          shim['update'](true);
          if (parent) {
            shim.style.zIndex =
              window.gigya.utils.DOM.getNextZIndex().toString();
            el.style.zIndex = window.gigya.utils.DOM.getNextZIndex().toString();
            parent.appendChild(shim);
          } else {
            window.gigya.utils.DOM.prependToBody(shim);
          }
          el['shim'] = shim;
        }
        exports.addIframeShim = addIframeShim;
        function removeIframeShim(el) {
          if (el && el.shim && el.shim.parentNode) {
            el.shim.parentNode.removeChild(el.shim);
            el.shim = null;
          }
        }
        exports.removeIframeShim = removeIframeShim;
        function scaleImage(img, size, dontCenter, fnOnImgLoad) {
          var imgObj = img;
          if (!img.width || !img.height) {
            var imgObj = new Image();
            imgObj.src = img.src;
          }
          var fnOnLoad = function () {
            if (imgObj.width == 0) {
              window.setTimeout(fnOnLoad, 100);
            } else {
              if (imgObj.width > imgObj.height) {
                img.style.width = size + 'px';
              } else {
                img.style.height = size + 'px';
              }
              img.style.display = '';
              if (fnOnImgLoad) fnOnImgLoad(img);
              if (!dontCenter) {
                img.style.marginTop = (size - img.offsetHeight) / 2 + 'px';
                img.style.marginLeft = (size - img.offsetWidth) / 2 + 'px';
              }
            }
          };
          if (imgObj.width > 0) {
            fnOnLoad();
          } else {
            img.style.display = 'none';
            imgObj.onload = function () {
              window.setTimeout(fnOnLoad, 50);
            };
          }
        }
        exports.scaleImage = scaleImage;
        function fillUserActionTemplate(userAction, o) {
          for (var p in userAction) {
            var field = userAction[p];
            if (typeof field == 'string') {
              userAction[p] = window.gigya.utils.templates.fill(
                userAction[p],
                o
              );
            }
            if (p == 'mediaItems') {
              for (var i = 0; i < field.length; i++) {
                if (field[i].src) {
                  field[i].src = window.gigya.utils.templates.fill(
                    field[i].src,
                    o
                  );
                }
              }
            }
          }
          return userAction;
        }
        exports.fillUserActionTemplate = fillUserActionTemplate;
        function setPlaceholder(textbox, placeholder, className) {
          if (!textbox) return;
          var onblur = function () {
            if (this.value == '') {
              if (className) {
                window.gigya.utils.DOM.addClassToElement(textbox, className);
              } else {
                textbox.style.color = '#585858';
              }
              this.value = placeholder;
              this.placeholderCleared = false;
            }
          };
          var onfocus = function () {
            if (!this.placeholderCleared) {
              if (className) {
                window.gigya.utils.DOM.removeClassFromElement(
                  textbox,
                  className
                );
              } else {
                textbox.style.color = '';
              }
              this.value = '';
              this.placeholderCleared = true;
              if (textbox.setSelectionRange) {
                //to fix a bug where sometimes the caret disappears while the textbox is focused.
                textbox.focus();
                textbox.setSelectionRange(0, 0);
              } else if (textbox.createTextRange) {
                var range = textbox.createTextRange();
                range.collapse(true);
                range.moveEnd('character', 0);
                range.moveStart('character', 0);
                range.select();
              }
            }
          };
          textbox.refreshPlaceholder = function () {
            if (textbox.value) {
              if (className)
                window.gigya.utils.DOM.removeClassFromElement(
                  textbox,
                  className
                );
              else textbox.style.color = '';
              this.placeholderCleared = true;
            } else {
              if (className)
                window.gigya.utils.DOM.addClassToElement(textbox, className);
              else textbox.style.color = '#585858';
              textbox.value = placeholder;
              this.placeholderCleared = false;
            }
          };
          window.gigya.utils.DOM.addEventListener(textbox, 'blur', onblur);
          window.gigya.utils.DOM.addEventListener(textbox, 'focus', onfocus);
          window.gigya.utils.DOM.addEventListener(textbox, 'change', onblur);
          textbox.refreshPlaceholder();
        }
        exports.setPlaceholder = setPlaceholder;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/UI/UI.ts':
      /*!*****************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/UI.ts ***!
  \*****************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        exports._closeComponent = function (rid, dispatchCloseEvent) {
          var oRID = window.gigya.socialize._parseRID(rid);
          var req = oRID.req;
          if (window.gigya.socialize.GrayOut)
            window.gigya.socialize.GrayOut(false);
          var ifr = document.getElementById('gigya_ifr_' + req.container.id);
          if (ifr != null) ifr.style.display = 'none';
          if (dispatchCloseEvent) {
            window.gigya.events.dispatchForWidget(
              { eventName: 'close' },
              req.p
            );
          }
          req.container.style.display = 'none';
        };

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/UI/UIHelpers.ts':
      /*!************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/UIHelpers.ts ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function addOrReplaceHashFragment(url, param, value) {
          url = removeHashFragment(url, param);
          url = addHashFragment(url, param, value);
          return url;
        }
        exports.addOrReplaceHashFragment = addOrReplaceHashFragment;
        function addHashFragment(url, param, value) {
          var sign = '#';
          // Check if there is already an hashfragment exist
          if (url.indexOf('#') != -1)
            if (url.indexOf(param) == -1)
              // Check if the exist hashfragment is the same as we want to add - so we need or reaplce it
              sign = '&';
            else {
              var oldValue = param + '=' + this.getHashParamValue(url, param);
              url.replace(oldValue, param + '=' + value);
              return url;
            }
          return url + sign + param + '=' + value;
        }
        exports.addHashFragment = addHashFragment;
        function removeHashFragment(url, param) {
          // Check if the url contains hash fragment.
          if (url.indexOf('#') == -1) return url;
          // Get the hash value if exist
          var fullHashQuery = url.split('#')[1];
          var hashParamValue = getHashParamValue(url, param);
          if (hashParamValue)
            fullHashQuery = fullHashQuery.replace(
              param + '=' + hashParamValue,
              ''
            );
          // Remove the hash param in case it was a hash param without '='
          fullHashQuery = fullHashQuery.replace('&' + param, '');
          fullHashQuery = fullHashQuery.replace('#' + param, '#');
          if (fullHashQuery.length > 0)
            fullHashQuery = fullHashQuery.substring(1, fullHashQuery.length);
          // Replace the current full Hash Query with the new one without the given param to removed and it's value if exist
          var URLWithoutHash = url.split('#')[0];
          // Check if the hash query left with no params
          if (fullHashQuery.length == 0) return URLWithoutHash;
          return URLWithoutHash + '#' + fullHashQuery;
        }
        exports.removeHashFragment = removeHashFragment;
        function getHashParamValue(url, param) {
          // Add the '=' sign to match the param and not maybe the same string in the URL not as a param
          param += '=';
          if (
            url.indexOf('#') == -1 ||
            url.indexOf(param, url.indexOf('#')) == -1
          )
            return null;
          // find the next & or the end of the param string
          var startOfParam = url.indexOf(param, url.indexOf('#'));
          var endOfParam = url.indexOf('&', startOfParam);
          // If the param was untill the end of the string - set the endOfParam to the end of the string too
          if (endOfParam == -1) endOfParam = url.length;
          return url.substring(startOfParam + param.length, endOfParam);
        }
        exports.getHashParamValue = getHashParamValue;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/UI/UIPopup.ts':
      /*!**********************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/UIPopup.ts ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var layoutStyles_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/Utils/UI/layoutStyles */ './src/core/Gigya.Js.Plugin/app/Utils/UI/layoutStyles.ts'
        );
        var layoutText_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/Utils/UI/layoutText */ './src/core/Gigya.Js.Plugin/app/Utils/UI/layoutText.ts'
        );
        function _fixGrayPosition() {
          var dark = document.getElementById('darkenScreenObject');
          if (dark) {
            var de = document.documentElement;
            var db = document.body;
            var scrollTop = de.scrollTop;
            if (scrollTop == 0) scrollTop = db.scrollTop;
            var scrollLeft = de.scrollLeft;
            if (scrollLeft == 0) scrollLeft = db.scrollLeft;
            var clientHeight = de.clientHeight;
            if (clientHeight == 0) clientHeight = db.clientHeight;
            var clientWidth = de.clientWidth;
            if (clientWidth == 0) clientWidth = db.clientWidth;
            if (window.gigya.localInfo.isIE6) clientWidth -= 1;
            dark.style.top = scrollTop.toString();
            dark.style.left = scrollLeft.toString();
          }
        }
        exports._fixGrayPosition = _fixGrayPosition;
        function _fixGraySize() {
          var dark = document.getElementById('darkenScreenObject');
          if (dark) {
            var de = document.documentElement;
            var db = document.body;
            var clientHeight = de.clientHeight;
            if (clientHeight == 0) clientHeight = db.clientHeight;
            var clientWidth = de.clientWidth;
            if (clientWidth == 0) clientWidth = db.clientWidth;
            if (window.gigya.localInfo.isIE6) clientWidth -= 1;
            dark.style.width = '' + clientWidth + 'px';
            dark.style.height = '' + clientHeight + 'px';
          }
        }
        exports._fixGraySize = _fixGraySize;
        function _createJSPopup(rid, resolver, captionText, noCaption) {
          var oRID = _parseRID(rid);
          var req = oRID.req;
          var params = req.p;
          var conf = req.c;
          if (
            window.gigya.utils.validation.isExplicitFalse(params['showCaption'])
          )
            noCaption = true;
          var container = document.getElementById(params['containerID']);
          req.container = container;
          var oBgStyle = resolver.Resolve('+/config/body/background');
          var oCaptionStyle = resolver.Resolve('+/config/body/captions');
          var s =
            '<table role="presentation" style="' +
            layoutStyles_1.getStyleString(oBgStyle) +
            ';empty-cells:show;" cellpadding="0" cellspacing="0" >';
          if (!noCaption) {
            s +=
              '<tr style="' +
              layoutStyles_1.getStyleString(oCaptionStyle) +
              '"><td><table role="presentation" style="width:100%" width="100%" cellpadding="0" cellspacing="0"><tr id="' +
              params['containerID'] +
              '_caption"><td style="vertical-align:middle"><div style="' +
              layoutStyles_1.getStyleString(oCaptionStyle) +
              ';padding:7px">' +
              captionText +
              '</div></td><td style="vertical-align:middle">';
            s +=
              '<div align="right" style="padding-right: 7px; cursor: pointer;' +
              layoutStyles_1.getStyleString(oCaptionStyle) +
              '"><img tabindex="0" onclick="gigya.services.socialize._closeComponent(\'' +
              rid +
              '\', true);"  src="' +
              window.gigya._.getCdnResource('/gs/i/HTMLLogin/closeIcon.gif') +
              '" alt="" /></div></td></tr></table></td></tr><tr><td colspan="2">';
          } else {
            s += '<tr><td>';
          }
          s +=
            '<div id="' +
            params['containerID'] +
            '_container"></div></td></tr></table>';
          container.innerHTML = s;
          var p = {};
          var c = {};
          for (var param in params) {
            p[param] = params[param];
          }
          for (param in conf) {
            c[param] = conf[param];
          }
          var caption = document.getElementById(p['containerID'] + '_caption');
          p['height'] = p['height'] - oBgStyle['frame-thickness'] * 2;
          if (!noCaption) p['height'] -= caption.offsetHeight;
          p['width'] = p['width'] - oBgStyle['frame-thickness'] * 2;
          window.gigya.utils.DOM._popupContainers[p['containerID']] = container;
          p['containerID'] = p['containerID'] + '_container';
          return { c: c, p: p };
        }
        exports._createJSPopup = _createJSPopup;
        function _createJSPopup2(
          rid,
          resolver,
          borderSize,
          base,
          captionText,
          addBorder
        ) {
          var oRID = _parseRID(rid);
          var req = oRID.req;
          var params = req.p;
          var conf = req.c;
          var container = document.getElementById(params['containerID']);
          req.container = container;
          var oCaptionStyle = resolver.Resolve('+/config/body/captions');
          if (!borderSize) borderSize = 10;
          if (!base)
            base = window.gigya._.getCdnResource('/gs/i/Dialog/DialogBg_');
          var imgStyle =
            'width:' + borderSize + 'px;height:' + borderSize + 'px';
          var borderString;
          if (addBorder) {
            borderString = '1px solid #555555';
          }
          var s =
            '<table role="presentation" style="font-size:1px;padding:0px;margin:0px;vertical-align:middle;font-size:1px;line-height:1px;empty-cells:show;" cellpadding="0" cellspacing="0" >';
          s +=
            '<tr><td height="' +
            borderSize +
            '" style="font-size:1px"><div style="height:' +
            borderSize +
            'px"><img src="' +
            base +
            'TopLeft.png" style="' +
            imgStyle +
            '" alt="" /></div></td><td height="' +
            borderSize +
            '" style="background-image:url(\'' +
            base +
            'filler.png\');bakground-repeat:repeat"></td><td height="' +
            borderSize +
            '" style="font-size:1px;"><div style="height:' +
            borderSize +
            'px"><img style="' +
            imgStyle +
            '" src="' +
            base +
            'TopRight.png" alt="" /></div></td></tr>';
          if (captionText) {
            s +=
              '<tr><td style="background-image:url(\'' +
              base +
              'filler.png\');background-repeat:repeat"></td><td><table width="100%" cellspacing="0" cellpadding="0" style="border-top:' +
              borderString +
              ';border-left:' +
              borderString +
              ';border-right:' +
              borderString +
              ';width:100%;background-color:#FFFFFF"><tr><td style="padding-top:10px;padding-left:10px;' +
              layoutStyles_1.getStyleString(oCaptionStyle) +
              '">' +
              captionText +
              '</td><td align="right" valign="top" style="' +
              layoutStyles_1.getStyleString(oCaptionStyle) +
              '"><div style="padding-right:5px;padding-top:5px;text-align:right;"><img tabindex="0" style="cursor:pointer" onclick="gigya.services.socialize._closeComponent(\'' +
              rid +
              '\', true);" src="' +
              base +
              'close.png" alt="" /></div></td></tr></table></td><td style="background-image:url(\'' +
              base +
              'filler.png\');background-repeat:repeat"></td></tr>';
          }
          s +=
            '<tr><td style="background-image:url(\'' +
            base +
            'filler.png\');background-repeat:repeat"></td><td><div style="border-bottom:' +
            borderString +
            ';border-left:' +
            borderString +
            ';border-right:' +
            borderString +
            ';background-color:#FFFFFF" id="' +
            params['containerID'] +
            '_container"></div></td><td style="background-image:url(\'' +
            base +
            'filler.png\');background-repeat:repeat"></td></tr>';
          s +=
            '<tr><td height="' +
            borderSize +
            '" style="font-size:1px;"><div style="height:' +
            borderSize +
            'px"><img style="' +
            imgStyle +
            '" src="' +
            base +
            'BottomLeft.png" alt="" /></div></td><td height="' +
            borderSize +
            '" style="background-image:url(\'' +
            base +
            'filler.png\');bakground-repeat:repeat"></td><td height="' +
            borderSize +
            '" style="font-size:1px;"><div style="height:' +
            borderSize +
            'px"><img style="' +
            imgStyle +
            '" src="' +
            base +
            'BottomRight.png" alt="" /></div></td></tr></table>';
          container.innerHTML = s;
          var p = {};
          var c = {};
          for (var param in params) {
            p[param] = params[param];
          }
          for (param in conf) {
            c[param] = conf[param];
          }
          window.gigya.utils.DOM._popupContainers[p['containerID']] = container;
          p['containerID'] = p['containerID'] + '_container';
          p['height'] = p['height'] - borderSize * 2;
          if (captionText) {
            if (captionText.replace(/ /g, '') == '') {
              p['height'] -= 10;
            } else {
              p['height'] -=
                layoutText_1.measureText(captionText, oCaptionStyle)['h'] + 10;
            }
          }
          p['width'] = p['width'] - borderSize * 2;
          return { c: c, p: p };
        }
        exports._createJSPopup2 = _createJSPopup2;
        function _parseRID(rid) {
          var ridp = rid.split('@');
          var swf = document.getElementById(ridp[2] + '_' + ridp[1]);
          var containerID = ridp[2];
          var container;
          if (
            null ==
            (container = window.gigya.utils.DOM._pseudoContainers[containerID])
          ) {
            container = document.getElementById(ridp[2]);
          }
          var Reqs = null;
          if (container != null) Reqs = container.Reqs;
          var req = null;
          if (Reqs != null) req = Reqs[parseInt(ridp[0])];
          return {
            rid: rid,
            container: container,
            Reqs: Reqs,
            req: req,
            swf: swf,
          };
        }
        exports._parseRID = _parseRID;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/UI/animation.ts':
      /*!************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/animation.ts ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var layoutSprites_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/Utils/UI/layoutSprites */ './src/core/Gigya.Js.Plugin/app/Utils/UI/layoutSprites.ts'
        );
        function fadeIn(el, opacity) {
          if (opacity === void 0) {
            opacity = 1;
          }
          if (el.style.opacity == undefined) {
            el.style.filter = 'alpha(opacity=' + 0 * 100 + ')';
          } else {
            el.style.opacity = '0';
          }
          window.setTimeout(function () {
            if (el.style.opacity == undefined) {
              el.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
            } else {
              el.style.opacity = opacity + '';
            }
          }, 10);
        }
        exports.fadeIn = fadeIn;
        function slideDown(el) {
          var bp = layoutSprites_1.getClassBordersAndPaddings(el.className);
          var h = el.offsetHeight - bp['h'];
          var originalTransitionProperty = el.style.transitionProperty;
          el.style.maxHeight = '1px';
          el.style.transitionProperty = el.style.webkitTransitionProperty =
            'max-height';
          window.setTimeout(function () {
            el.style.maxHeight = h + 'px';
            el.style.transitionProperty = el.style.webkitTransitionProperty =
              originalTransitionProperty;
          }, 100);
          var fnOnTransitionEnd = function () {
            el.style.maxHeight = '999px';
            window.gigya.utils.DOM.removeEventListener(
              el,
              'transitionend',
              fnOnTransitionEnd
            );
            window.gigya.utils.DOM.removeEventListener(
              el,
              'webkitTransitionEnd',
              fnOnTransitionEnd
            );
          };
          window.gigya.utils.DOM.addEventListener(
            el,
            'transitionend',
            fnOnTransitionEnd
          );
          window.gigya.utils.DOM.addEventListener(
            el,
            'webkitTransitionEnd',
            fnOnTransitionEnd
          );
          window.setTimeout(fnOnTransitionEnd, 500);
        }
        exports.slideDown = slideDown;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/UI/animationService.ts':
      /*!*******************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/animationService.ts ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var UIPopup_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/Utils/UI/UIPopup */ './src/core/Gigya.Js.Plugin/app/Utils/UI/UIPopup.ts'
        );
        function GrayOut(vis, opt) {
          var options = opt || {};
          var zindex = options.zindex || 50;
          var opacity = options.opacity || 70;
          var opaque = opacity / 100;
          var bgcolor = options.bgcolor || '#000000';
          var dark = document.getElementById('darkenScreenObject');
          var tbody = document.body;
          if (!dark) {
            var isCompMode =
              window.gigya.localInfo.isMobile ||
              window.gigya.localInfo.isIE6 ||
              document.compatMode == 'BackCompat';
            var scrollTop = document.documentElement.scrollTop;
            if (scrollTop == 0) scrollTop = document.body.scrollTop;
            var tnode = document.createElement('div');
            if (isCompMode) {
              tnode.style.position = 'absolute';
              tnode.style.top = '' + scrollTop + 'px';
            } else {
              tnode.style.position = 'fixed';
              tnode.style.top = '0px';
            }
            tnode.style.overflow = 'hidden';
            tnode.style.left = '0px';
            tnode.style.display = 'none';
            tnode.id = 'darkenScreenObject';
            tnode.innerHTML = '&#160;';
            tbody.appendChild(tnode);
            dark = document.getElementById('darkenScreenObject');
            if (!window.gigya['attachedFixGray']) {
              window.gigya['attachedFixGray'] = true;
              if (window.addEventListener) {
                window.addEventListener(
                  'resize',
                  UIPopup_1._fixGraySize,
                  false
                );
              }
              if (window['attachEvent']) {
                window['attachEvent']('onresize', UIPopup_1._fixGraySize);
              }
              if (isCompMode) {
                if (window.addEventListener) {
                  window.addEventListener(
                    'scroll',
                    UIPopup_1._fixGrayPosition,
                    false
                  );
                }
                if (window['attachEvent']) {
                  window['attachEvent']('onscroll', UIPopup_1._fixGrayPosition);
                }
              }
            }
          }
          if (vis) {
            var vph;
            var vpw;
            if (window.innerHeight) {
              vph = window.innerHeight;
              vpw = window.innerWidth;
            }
            if (typeof vph == 'undefined') {
              var de = document.documentElement;
              vph = de.clientHeight;
              vpw = de.clientWidth;
            }
            if (vpw == 0) vpw = tbody.clientWidth;
            if (vph == 0) vph = tbody.clientHeight;
            dark.style.opacity = opaque.toString();
            dark.style['MozOpacity'] = opaque;
            dark.style.width = '' + vpw + 'px';
            dark.style.height = '' + vph + 'px';
            dark.style.filter = 'alpha(opacity=' + opacity + ')';
            dark.style.zIndex = zindex;
            dark.style.backgroundColor = bgcolor;
            dark.style.display = 'block';
          } else {
            tbody.removeChild(dark);
          }
        }
        exports.GrayOut = GrayOut;
        function hideUI() {
          var params = window.gigya.utils.object.merge([
            window.gigya.thisScript.globalConf,
            arguments,
          ]);
          GrayOut(false);
          // plugins that extend BasePlugin
          for (var pluginName in window.gigya._.plugins.instances) {
            var plugin = window.gigya._.plugins.instances[pluginName];
            if (plugin['isModal']) plugin.dispose();
          }
          // legacy
          for (var containerID in window.gigya.utils.DOM._popupContainers) {
            var container =
              window.gigya.utils.DOM._popupContainers[containerID];
            if (container != null) {
              container.innerHTML = '';
              if (container.parentNode) container.style.display = 'none';
            }
            var ifrel = document.getElementById('gigya_ifr_' + containerID);
            if (null != ifrel) {
              //ifrel.parentNode.removeChild(ifrel);
              ifrel.style.display = 'none';
            }
          }
          //// if no-one makes a big fuss about this being commented out - delete!
          //var fbRoot = document.getElementById('fb-root');
          //if (fbRoot) fbRoot.style.visibility = 'hidden';
          window.gigya.events.global.dispatch({ eventName: 'HideUIRequested' });
          if (typeof params['callback'] == 'function') {
            var oResponse = {
              status: 'OK',
              statusMessage: '',
              operation: 'hideUI',
              context: params['context'],
              errorMessage: '',
              errorCode: 0,
            };
            params['callback'](oResponse);
          }
        }
        exports.hideUI = hideUI;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/UI/enableSafeCopy.ts':
      /*!*****************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/enableSafeCopy.ts ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function enableSafeCopy(el) {
          if (el.addedSafeCopy) return;
          window.gigya.utils.DOM.addEventListener(el, 'copy', function (e) {
            //to let users copy URLs without soft hyphens
            e = e || window.event;
            var target = e.target || e.srcElement;
            var nodename =
              target && target.nodeName ? target.nodeName.toLowerCase() : '';
            if (nodename == 'textarea' || nodename == 'input') return;
            var divCopy = document.createElement('div');
            divCopy.style.color = window.getComputedStyle
              ? window.getComputedStyle(document.body).backgroundColor
              : '#FFFFFF';
            divCopy.style.fontSize = '0px';
            window.gigya.utils.DOM.prependToBody(divCopy);
            var shyRegex = new RegExp(
              '(&shy;|' + String.fromCharCode(173) + ')',
              'g'
            );
            var selection, range2;
            if (window.getSelection) {
              e.stopPropagation();
              selection = window.getSelection();
              var range = selection.getRangeAt(0);
              divCopy.appendChild(range.cloneContents());
              divCopy.innerHTML = divCopy.innerHTML.replace(shyRegex, ''); //it's the soft hyphen char
              selection.selectAllChildren(divCopy);
              var fnRestore = function () {
                divCopy.parentNode.removeChild(divCopy);
                selection.removeAllRanges();
                selection.addRange(range);
              };
            } else {
              e.cancelBubble = true;
              selection = window.document['selection'];
              range = selection.createRange();
              divCopy.innerHTML = range['htmlText'];
              divCopy.innerHTML = divCopy.innerHTML.replace(shyRegex, ''); //it's the soft hyphen char
              range2 = document.body['createTextRange']();
              range2.moveToElementText(divCopy);
              range2.select();
              fnRestore = function () {
                divCopy.parentNode.removeChild(divCopy);
                if (range['text'] !== '') {
                  range['select']();
                }
              };
            }
            window.setTimeout(fnRestore, 0);
          });
          el.addedSafeCopy = true;
        }
        exports.enableSafeCopy = enableSafeCopy;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/UI/globalAnimation.ts':
      /*!******************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/globalAnimation.ts ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var layoutSprites_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/Utils/UI/layoutSprites */ './src/core/Gigya.Js.Plugin/app/Utils/UI/layoutSprites.ts'
        );
        var DOM_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/Utils/UI/DOM */ './src/core/Gigya.Js.Plugin/app/Utils/UI/DOM.ts'
        );
        var GlobalDOM_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/Utils/UI/GlobalDOM */ './src/core/Gigya.Js.Plugin/app/Utils/UI/GlobalDOM.ts'
        );
        var imagePositions_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/Utils/UI/imagePositions */ './src/core/Gigya.Js.Plugin/app/Utils/UI/imagePositions.ts'
        );
        function showLoader(container, className, h) {
          if (className === void 0) {
            className = '';
          }
          if (h === void 0) {
            h = undefined;
          }
          if (container) {
            if (!h) h = parseInt(layoutSprites_1.getStyle(container, 'height'));
            container.innerHTML =
              '<div class="' +
              className +
              '" style="height:' +
              h +
              "px;background-image:url('" +
              window.gigya._.getCdnResource('/gs/i/gm/loader.gif') +
              '\'); background-repeat:no-repeat;background-position:center center"></div>';
          }
        }
        exports.showLoader = showLoader;
        function fadeIn(el) {
          if (el.interval) {
            clearInterval(el.interval);
          }
          el.style.opacity = '0';
          el.interval = setInterval(function () {
            var op = parseFloat(el.style.opacity);
            if (op >= 1) clearInterval(el.interval);
            el.style.opacity = op + 0.1;
          }, 10);
        }
        exports.fadeIn = fadeIn;
        function getBalloonHTML(
          body,
          captionText,
          w,
          h,
          nubY,
          nubPosition,
          hideClose,
          sOnClose,
          frameID
        ) {
          var nubW = 13;
          var nubH = 25;
          if (!window.gigya.global['addedBalloonCSS']) {
            window.gigya.global['addCSS']([
              '.gig-balloons *, div.gig-balloons, .gig-balloons span, .gig-balloons a:hover, .gig-balloons a:visited, .gig-balloons a:link, .gig-balloons a:active{',
              'border:none; line-height:normal;padding:0px;margin:0px;color:inherit;text-decoration:none;width:auto;float:none;-moz-border-radius:0;border-radius:0;',
              'font-family:arial;font-size:10px;color:#797979;background:none;text-align:left}',
              'div.gig-balloon-frame {',
              'zoom:1;padding:15px 10px 10px 10px; border:1px solid #b4b4b4; min-height:80px; background-color:#FFFFFF; z-index:' +
                window.gigya.utils.DOM.getNextZIndex() +
                ';',
              'box-shadow:0 0 5px RGBA(0,0,0,0.6);-webkit-box-shadow:0 0 5px RGBA(0,0,0,0.6);-moz-box-shadow:0 0 5px RGBA(0,0,0,0.6);}',
              'div.gig-balloon-nub {left:+1px; position:relative;background-image:url("' +
                window.gigya._.getCdnResource('/gs/i/gm/nub.png') +
                '");width:' +
                nubW +
                'px;height:' +
                nubH +
                'px; z-index:' +
                window.gigya.utils.DOM.getNextZIndex() +
                ' }',
              'div.gig-balloon-nub-right { left:-1px; position:relative;background-image:url("' +
                window.gigya._.getCdnResource('/gs/i/gm/nub_right.png') +
                '");width:' +
                nubW +
                'px;height:' +
                nubH +
                'px; z-index:' +
                window.gigya.utils.DOM.getNextZIndex() +
                ' }',
              'div.gig-balloon-nub-up { top:+1px; position:relative;background-image:url("' +
                window.gigya._.getCdnResource('/gs/i/gm/nub_up.png') +
                '");width:' +
                nubH +
                'px;height:' +
                nubW +
                'px; z-index:' +
                window.gigya.utils.DOM.getNextZIndex() +
                ' }',
              'div.gig-balloon-nub-down { top:-1px; position:relative;background-image:url("' +
                window.gigya._.getCdnResource('/gs/i/gm/nub_down.png') +
                '");width:' +
                nubH +
                'px;height:' +
                nubW +
                'px; z-index:' +
                window.gigya.utils.DOM.getNextZIndex() +
                ' }',
              'span.gig-balloon-closeImage { cursor:pointer; float:right;background-image:url("' +
                window.gigya._.getCdnResource('/gs/i/gm/CloseButton.png') +
                '"); width:14px;height:14px; margin:-7px -2px 0 0  }',
              'div.gig-balloon-caption {font-family:arial; font-size: 12px; font-weight:bold; color: #0b81c1; border-bottom: 1px solid #e8e8e8;padding-bottom:2px;}',
              'span.gig-balloon-caption-text {float:left}',
            ]);
            if (
              window.gigya.localInfo.isIE &&
              !(
                !window.gigya.localInfo.quirksMode &&
                window.gigya.localInfo.isIE9
              )
            ) {
              window.gigya.global['addCSS']([
                'div.gig-balloon-frame {',
                '-ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color=\'#B4B4B4\');";',
                "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color='#B4B4B4');}",
                '}',
                'div.gig-balloon-nub-right { left:-5px;}',
              ]);
            }
            window.gigya.global['addedBalloonCSS'] = true;
          }
          var frameStyle = '';
          if (window.gigya.localInfo.quirksMode) {
            var bordersAndPaddings =
              layoutSprites_1.getClassBordersAndPaddings('gig-balloon-frame');
            if (w) w = w + bordersAndPaddings.w;
            if (h) h = h + bordersAndPaddings.h;
          }
          if (w) frameStyle += 'width: ' + w + 'px;';
          if (h) frameStyle += 'height: ' + h + 'px;';
          var nubStyle = '';
          if (nubY) {
            if (nubPosition === 'left' || nubPosition === 'right')
              nubStyle += 'top: ' + nubY + 'px;';
            // ((nubPosition === 'up') || (nubPosition === 'down'))
            else nubStyle += 'left: ' + nubY + 'px;';
          }
          var innerHTML = '';
          if (captionText) {
            innerHTML +=
              '<div class="gig-balloon-caption"><span class="gig-balloon-caption-text" style="width:' +
              (w - 20) +
              'px">' +
              captionText +
              '</span>';
          } else {
            innerHTML +=
              '<div class="gig-balloon-caption" style="border-bottom:none">';
          }
          if (!hideClose && sOnClose) {
            innerHTML +=
              '<span tabindex="0" role="button" class="gig-balloon-closeImage" onclick="' +
              sOnClose +
              '" onkeydown="if((event.which || event.keyCode) == 13) ' +
              sOnClose +
              '"></span>';
          }
          innerHTML +=
            '<div style="clear:both;height:0;width:0;font-size:1px;"><!-- empty divs=100% height IE --></div></div><div class="gig-balloon-body">' +
            body +
            '</div>';
          var s;
          if (!nubY) {
            s =
              '<div class="gig-balloon gig-balloon-frame" style="' +
              frameStyle +
              '">' +
              innerHTML +
              '</div>';
          } else {
            s =
              '<table role="presentation" cellpadding="0" cellspacing="0" class="gig-balloon"><tr>';
            if (nubPosition === 'up') {
              s +=
                '<td style=""><div class="gig-balloon-nub-up" style="' +
                nubStyle +
                '"></div></td></tr><tr>';
            }
            if (nubPosition === 'left') {
              // check for other values
              s +=
                '<td style="vertical-align:top"><div class="gig-balloon-nub" style="' +
                nubStyle +
                '"></div></td>';
            }
            s +=
              '<td style="vertical-align:top"><div id="' +
              frameID +
              '" class="gig-balloon-frame" style="' +
              frameStyle +
              '">' +
              innerHTML +
              '</div></td>';
            if (nubPosition === 'right') {
              s +=
                '<td style="vertical-align:top"><div class="gig-balloon-nub-right" style="' +
                nubStyle +
                '"></div></td>';
            }
            if (nubPosition === 'down') {
              s +=
                '</tr><tr><td style="vertical-align:top"><div class="gig-balloon-nub-down" style="' +
                nubStyle +
                '"></div></td>';
            }
            s += '</tr></table>';
            s +=
              '<div style="clear:both;height:0;width:0;font-size:1px;"><!-- empty divs=100% height IE --></div>';
          }
          return s;
        }
        exports.getBalloonHTML = getBalloonHTML;
        function createGMBalloon(
          body,
          captionText,
          w,
          h,
          nubY,
          nubPosition,
          hideClose,
          id,
          dontHideOnClick,
          balloonClass
        ) {
          balloonClass = balloonClass
            ? 'gig-balloon ' + balloonClass
            : 'gig-balloon';
          removeGMBalloon();
          var now = new Date().getTime();
          var balloonID = 'gig_gmBalloon_' + now;
          if (id) balloonID = id;
          var frameID = balloonID + '_frame';
          var balloonHTML = getBalloonHTML(
            body,
            captionText,
            w,
            h,
            nubY,
            nubPosition,
            hideClose,
            'gigya.global.removeGMBalloon()',
            frameID
          );
          var div = document.createElement('div');
          div.className = balloonClass;
          div.style.position = 'absolute';
          div.style.zIndex = window.gigya.utils.DOM.getNextZIndex().toString();
          div.innerHTML = balloonHTML;
          div.id = balloonID;
          // When the balloon is shown, read immediately. This is set to "assertive" instead of "polite" because in all cases where this is used,
          // the text that the user is focusing when the balloon is shown does not need to be read. We need the balloon to be read immediately for good UX.
          // The assertive setting means that the redundant text is not read when the user focuses a GM element.
          div.setAttribute('role', 'alert');
          div.setAttribute('aria-live', 'assertive');
          div.setAttribute('aria-atomic', 'true');
          fadeIn(div);
          window.gigya.utils.DOM.prependToBody(div);
          window.gigya.global['divGMBalloon'] = div;
          if (!dontHideOnClick) {
            window.setTimeout(function () {
              DOM_1.removeElementOnDocClickOrEscape(div);
            }, 50);
          }
          return div;
        }
        exports.createGMBalloon = createGMBalloon;
        function removeGMBalloon(e) {
          var a;
          if (e) {
            a = e.target;
            if (!a) a = e.srcElement;
            while (
              a != null &&
              a.offsetParent &&
              a.id.indexOf(window.gigya.global['divGMBalloon'].id) == -1
            ) {
              a = a['offsetParent'];
            }
          }
          if (
            !a ||
            a.id.indexOf(window.gigya.global['divGMBalloon'].id) == -1
          ) {
            //to make sure this wasn't triggered by click inside
            try {
              GlobalDOM_1.removeIframeShim(
                document.getElementById(
                  window.gigya.global['divGMBalloon'].id + '_frame'
                )
              );
              window.gigya.global['divGMBalloon'].parentNode.removeChild(
                window.gigya.global['divGMBalloon']
              );
              if (document['detachEvent']) {
                document['detachEvent']('onclick', removeGMBalloon);
              } else if (document.removeEventListener) {
                document.removeEventListener('click', removeGMBalloon, false);
              }
            } catch (ex) {}
          }
        }
        exports.removeGMBalloon = removeGMBalloon;
        function putGMBalloonNextTo(
          el,
          body,
          caption,
          w,
          h,
          hideClose,
          id,
          dontHideOnClick,
          preferredOrientations,
          balloonClass
        ) {
          if (preferredOrientations === void 0) {
            preferredOrientations = ['left', 'right', 'up', 'down'];
          }
          if (balloonClass === void 0) {
            balloonClass = '';
          }
          var options = {
            body: body,
            caption: caption,
            w: w,
            h: h,
            hideClose: hideClose,
            id: id,
            dontHideOnClick: dontHideOnClick,
            balloonClass: balloonClass,
          };
          for (var i = 0; i < preferredOrientations.length; i++) {
            if (
              this.positionGMBalloonNextTo(
                el,
                preferredOrientations[i],
                options
              )
            )
              break;
          }
        }
        exports.putGMBalloonNextTo = putGMBalloonNextTo;
        function positionGMBalloonNextTo(el, orientation, options) {
          if (orientation === 'left' || orientation === 'right')
            createGMBalloon(
              options.body,
              options.caption,
              options.w,
              options.h,
              47,
              'left',
              options.hideClose,
              options.id,
              options.dontHideOnClick,
              options.balloonClass
            );
          // up or down orientations
          else
            createGMBalloon(
              options.body,
              options.caption,
              options.w,
              options.h,
              10,
              'down',
              options.hideClose,
              options.id,
              options.dontHideOnClick,
              options.balloonClass
            );
          var offsetWidth = window.gigya.global['divGMBalloon'].offsetWidth;
          var offsetHeight = window.gigya.global['divGMBalloon'].offsetHeight;
          var pos = imagePositions_1._GetElementPos(el);
          var left;
          var top;
          //var dst = el.style;
          var de = document.documentElement;
          var db = document.body;
          var clientHeight = de.clientHeight;
          if (clientHeight == 0) clientHeight = db.clientHeight;
          var clientWidth = de.clientWidth;
          if (clientWidth == 0) clientWidth = db.clientWidth;
          if (window.innerHeight) {
            clientHeight =
              db.scrollHeight && db.scrollHeight < window.innerHeight
                ? db.scrollHeight
                : window.innerHeight;
            clientWidth =
              db.scrollWidth && db.scrollWidth < window.innerWidth
                ? db.scrollWidth
                : window.innerWidth;
          }
          var scrl = window.gigya.utils.viewport.getScroll();
          var vpt = scrl.top;
          //var vpl = scrl.left;
          var bottomRightTop = vpt + clientHeight;
          //var bottomRightLeft = vpl + clientWidth;
          var arrowDirection;
          var arrowOffset;
          if (orientation === 'left' || orientation === 'right') {
            arrowOffset = 47;
            top = pos.top + el.offsetHeight / 2 - 47 - 25 / 2;
            if (top + offsetHeight > bottomRightTop) {
              top = bottomRightTop - offsetHeight - 10;
            }
            var leftWithLeftOrientation = pos.left - offsetWidth - 5;
            var leftWithRightOrientation = pos.left + el.offsetWidth + 5;
            if (orientation === 'left') {
              // check that there's enough space on the left
              if (leftWithLeftOrientation > 10) {
                left = leftWithLeftOrientation;
                arrowDirection = 'right';
                options.balloonClass += ' gig-balloon-left';
              } else {
                // not enough space for left orientation
                return null;
              }
            } else if (
              clientWidth - leftWithRightOrientation - offsetWidth >
              10
            ) {
              // right orientation (bug: https://gigya.tpondemand.com/entity/40001)
              left = leftWithRightOrientation;
              arrowDirection = 'left';
              options.balloonClass += ' gig-balloon-right';
            } else {
              return null;
            }
          } else if (orientation === 'up' || orientation === 'down') {
            arrowOffset = 10;
            left = pos.left;
            var topWithUpOrientation = pos.top - offsetHeight - 10;
            var topWithDownOrientation = pos.top + el.offsetHeight + 5;
            if (orientation === 'up') {
              if (topWithUpOrientation > 5) {
                top = topWithUpOrientation;
                arrowDirection = 'down';
                options.balloonClass += ' gig-balloon-up';
              } else {
                return null;
              }
            } else {
              // down orientation - assume there is always enough space down
              top = topWithDownOrientation;
              arrowDirection = 'up';
              options.balloonClass += ' gig-balloon-down';
            }
          } else {
            return null;
          }
          var balloonDiv = createGMBalloon(
            options.body,
            options.caption,
            options.w,
            options.h,
            arrowOffset,
            arrowDirection,
            options.hideClose,
            options.id,
            options.dontHideOnClick,
            options.balloonClass
          );
          if (left < 10) left = 10;
          if (top < 10) top = 10;
          window.gigya.global['divGMBalloon'].style.left = left + 'px';
          window.gigya.global['divGMBalloon'].style.top = top + 'px';
          if (window.gigya.localInfo.isIE) {
            var frame = document.getElementById(
              window.gigya.global['divGMBalloon'].id + '_frame'
            );
            if (frame) GlobalDOM_1.addIframeShim(frame);
          }
          return balloonDiv;
        }
        exports.positionGMBalloonNextTo = positionGMBalloonNextTo;
        function scrollToElement(el) {
          if (el) {
            var pos = imagePositions_1._GetElementPos(el);
            window.scrollTo(pos.left, pos.top);
          }
        }
        exports.scrollToElement = scrollToElement;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/UI/imagePositions.ts':
      /*!*****************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/imagePositions.ts ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function preloadImages(arImages, fnCallback) {
          var arImageObjects = [];
          var loaded = 0;
          var fncImgOnload = function () {
            loaded++;
            if (loaded == arImages.length) {
              fnCallback();
            }
          };
          for (var i = 0; i < arImages.length; i++) {
            if (arImages[i] == null) {
              fncImgOnload();
            } else {
              var img = new Image();
              img.onload = fncImgOnload;
              img.onerror = fncImgOnload;
              img.src = arImages[i];
              arImageObjects.push(img);
            }
          }
        }
        exports.preloadImages = preloadImages;
        function applyEllipsis(text, maxRealChars) {
          var pfx = '';
          var tagstack = [];
          var reTag = /\<(\/)?([^ \/>]+)[ ]?[^>]*(\/)?\>/i;
          var realChars = 0;
          for (
            var i = 0;
            i < text.length && (realChars < maxRealChars || maxRealChars == 0);

          ) {
            var ch = text.substr(i, 1);
            if (ch == '<') {
              var idxCloseTag = text.indexOf('>', i);
              var tag = text.substring(i, idxCloseTag + 1);
              reTag.lastIndex = 0;
              var matches = reTag.exec(tag); // 1=/? 2=tagname 3=trailing / 0=all
              /*if (matches == null) {
                //alert(tag + '\n Is MALFORMED');
                }*/
              var tagname = matches[2].toLowerCase();
              if (matches[1] == '/') {
                //closing tag
                if (
                  tagstack.length > 0 &&
                  tagstack[tagstack.length - 1].tagname == tagname
                ) {
                  tagstack.pop();
                }
              } else {
                //new tag
                if (matches[3] == '/') {
                  //nothing to do (nothing to push onto the stack), rest is common
                } else {
                  var clAll = '</' + matches[2] + '>';
                  if (tagstack.length > 0)
                    clAll += tagstack[tagstack.length - 1].cl;
                  tagstack.push({ tagname: matches[2], cl: clAll });
                }
              }
              pfx += matches[0];
              i += matches[0].length - 1;
            } else if (ch == '&') {
              var idxCloseEntity = text.indexOf(';', i);
              if (idxCloseEntity - i > 8) {
                pfx += '&';
              } else {
                pfx += text.substring(i, idxCloseEntity + 1);
                i = idxCloseEntity;
              }
              realChars++;
            } else {
              pfx += ch;
              realChars++;
            }
            i++;
          }
          if (realChars < maxRealChars) {
            return text;
          } else {
            return (
              pfx +
              '&#133;' +
              (tagstack.length > 0 ? tagstack[tagstack.length - 1].cl : '')
            );
          }
        }
        exports.applyEllipsis = applyEllipsis;
        function getPhotoURL(url, defaultURL) {
          // Use default URL if no URL provided.
          if (defaultURL && !url) {
            url = defaultURL;
          }
          // Abort if no URL.
          if (!url) {
            return url;
          }
          // Parse URL using A element.
          // See: https://gist.github.com/jlong/2428561
          var parser = document.createElement('a');
          parser.href = url;
          // Check for insecure URL on secure page.
          if (
            parser.protocol === 'http:' &&
            window.gigya.localInfo.protocol === 'https'
          ) {
            if (
              window.gigya.utils.array.indexOf(
                window.gigya._.CDN_HOSTS.http,
                parser.host
              ) !== -1
            ) {
              // Gigya CDN URL needs to be converted to HTTPS.
              return window.gigya._.getCdnResource(
                parser.pathname + parser.search + parser.hash
              );
            } else {
              // Photo URL needs to be proxied through secure server.
              return window.gigya._.getCdnResource(
                '/proxy/photos.ashx?u=' + window.gigya.utils.URL.URLEncode(url)
              );
            }
          }
          return url;
        }
        exports.getPhotoURL = getPhotoURL;
        function wbr(s, n) {
          s = s.replace(/\n/g, '\n ');
          var arWords = s.split(' ');
          var chHyphen = '&#173;';
          for (var i = 0; i < arWords.length; i++) {
            if (arWords[i].length > n) {
              var chHyphenCurrent = chHyphen;
              var arWord = arWords[i].split('');
              var stop = false;
              var stopEndChar;
              var currentN = -1;
              for (var u = 0; u < arWord.length; u += 1) {
                if (!stop) currentN++;
                if (currentN == n) {
                  arWord.splice(u, 0, chHyphenCurrent);
                  currentN = -1;
                }
                if (arWord[u] == '&') {
                  stop = true;
                  stopEndChar = ';';
                } else if (arWord[u] == '<') {
                  stop = true;
                  stopEndChar = '>';
                }
                if (stop && arWord[u] == stopEndChar) stop = false;
              }
              arWords[i] = arWord.join('');
            }
          }
          return arWords.join(' ').replace(/\n /g, '\n');
        }
        exports.wbr = wbr;
        function getPos(el) {
          var ua = navigator.userAgent.toLowerCase();
          var isOpera = ua.indexOf('opera') != -1;
          var isIE = ua.indexOf('msie') != -1 && !isOpera; // not opera spoof
          if (el.parentNode === null || el.style.display == 'none') {
            return false;
          }
          var parent = null;
          var pos = [];
          var box;
          if (el.getBoundingClientRect) {
            //IE
            box = el.getBoundingClientRect();
            var scrollTop = Math.max(
              document.documentElement.scrollTop,
              document.body.scrollTop
            );
            var scrollLeft = Math.max(
              document.documentElement.scrollLeft,
              document.body.scrollLeft
            );
            return { x: box.left + scrollLeft, y: box.top + scrollTop };
          } else if (document['getBoxObjectFor']) {
            // gecko
            box = document['getBoxObjectFor'](el);
            var borderLeft = el.style.borderLeftWidth
              ? parseInt(el.style.borderLeftWidth)
              : 0;
            var borderTop = el.style.borderTopWidth
              ? parseInt(el.style.borderTopWidth)
              : 0;
            pos = [box.x - borderLeft, box.y - borderTop];
          } // safari & opera
          else {
            pos = [el.offsetLeft, el.offsetTop];
            parent = el.offsetParent;
            if (parent != el) {
              while (parent) {
                pos[0] += parent.offsetLeft;
                pos[1] += parent.offsetTop;
                parent = parent['offsetParent'];
              }
            }
            if (
              ua.indexOf('opera') != -1 ||
              (ua.indexOf('safari') != -1 && el.style.position == 'absolute')
            ) {
              pos[0] -= document.body.offsetLeft;
              pos[1] -= document.body.offsetTop;
            }
          }
          if (el.parentNode) {
            parent = el.parentNode;
          } else {
            parent = null;
          }
          while (
            parent &&
            parent['tagName'] != 'BODY' &&
            parent['tagName'] != 'HTML'
          ) {
            // account for any scrolled ancestors
            pos[0] -= parent['scrollLeft'];
            pos[1] -= parent['scrollTop'];
            if (parent.parentNode) {
              parent = parent.parentNode;
            } else {
              parent = null;
            }
          }
          return { x: pos[0], y: pos[1] };
        }
        exports.getPos = getPos;
        function _GetElementPos(obj) {
          var pos = getPos(obj);
          return { left: pos.x, top: pos.y };
        }
        exports._GetElementPos = _GetElementPos;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/UI/layout5.ts':
      /*!**********************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/layout5.ts ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var CssUtils_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/CssUtils */ './src/core/Gigya.Js.Plugin/app/CssUtils.ts'
        );
        window.gigya.utils.functions.createAlias(
          'gigya.global.addCSS',
          CssUtils_1.addCss
        );
        window.gigya.utils.functions.createAlias(
          'gigya.pluginUtils.css.fixCss',
          CssUtils_1.fixCss
        );

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/UI/layoutCss.ts':
      /*!************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutCss.ts ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function fixCss(css) {
          if (
            window.gigya.localInfo.isIE7 ||
            (window.gigya.localInfo.isIE && window.gigya.localInfo.quirksMode)
          ) {
            css = css.replace(
              /display:inline-block/g,
              'display:inline-block;zoom:1;*display:inline'
            );
          }
          return css.replace(
            /gradient\((.*?),(.*?)\)/g,
            'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="$1", endColorstr="$2");' +
              'background: linear-gradient(top,  $1,  $2);' +
              'background: -ms-linear-gradient(top left, $1, $2);' +
              'background: -webkit-gradient(linear, left top, left bottom, from($1), to($2));' +
              'background: -moz-linear-gradient(top,  $1,  $2)'
          );
        }
        exports.fixCss = fixCss;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/UI/layoutCssFixerUtils.ts':
      /*!**********************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutCssFixerUtils.ts ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function fixCss(css) {
          if (
            window.gigya.localInfo.isIE7 ||
            (window.gigya.localInfo.isIE && window.gigya.localInfo.quirksMode)
          ) {
            css = css.replace(
              /display:inline-block/g,
              'display:inline-block;zoom:1;*display:inline'
            );
          }
          return css.replace(
            /gradient\((.*?),(.*?)\)/g,
            'filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="$1", endColorstr="$2");' +
              'background: linear-gradient(top,  $1,  $2);' +
              'background: -ms-linear-gradient(top left, $1, $2);' +
              'background: -webkit-gradient(linear, left top, left bottom, from($1), to($2));' +
              'background: -moz-linear-gradient(top,  $1,  $2)'
          );
        }
        exports.fixCss = fixCss;
        var injectedRules = {};
        function addCss(rules, prefix, override, hash) {
          if (override === void 0) {
            override = true;
          }
          if (!rules || rules == '') return;
          if (rules instanceof Array) rules = rules.join(' ');
          //    rules = fixCss(rules);
          if (prefix) rules = rules.replace(/([^\s}]*\.gig)/g, prefix + ' $1');
          if (!hash)
            hash = window.gigya.utils.object.getMurmurHash(rules).toString();
          if (!injectedRules[hash] || override) {
            injectedRules[hash] = true;
            var style = document.createElement('style');
            style.type = 'text/css';
            var rulesNode = document.createTextNode(rules);
            if (style.styleSheet) {
              if (rulesNode.value != null) {
                style.styleSheet.cssText = rulesNode.value;
              } else {
                style.styleSheet.cssText = rulesNode.nodeValue;
              }
            } else {
              style.appendChild(rulesNode);
            }
            var head = document.getElementsByTagName('head');
            var body = document.body;
            (head.length > 0 ? head[0] : body).appendChild(style);
          }
        }
        exports.addCss = addCss;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/UI/layoutSprites.ts':
      /*!****************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutSprites.ts ***!
  \****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var GlobalDOM_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/Utils/UI/GlobalDOM */ './src/core/Gigya.Js.Plugin/app/Utils/UI/GlobalDOM.ts'
        );
        var arrayUtils_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/Utils/general/arrayUtils */ './src/core/Gigya.Js.Plugin/app/Utils/general/arrayUtils.ts'
        );
        function getClassBordersAndPaddings(className) {
          var el = document.createElement('div');
          el.className = className;
          window.gigya.utils.DOM.prependToBody(el);
          var bordersAndPaddings = getBordersAndPaddings(el);
          el.parentNode.removeChild(el);
          return bordersAndPaddings;
        }
        exports.getClassBordersAndPaddings = getClassBordersAndPaddings;
        function getBordersAndPaddings(el) {
          var style = function (name) {
            var n = parseInt(getStyle(el, name));
            if (isNaN(n)) n = 0;
            return n;
          };
          return {
            w:
              style('border-left-width') +
              style('border-right-width') +
              style('padding-right') +
              style('padding-left'),
            h:
              style('border-top-width') +
              style('border-bottom-width') +
              style('padding-top') +
              style('padding-bottom'),
          };
        }
        exports.getBordersAndPaddings = getBordersAndPaddings;
        function getStyle(obj, styleProp) {
          if (obj['currentStyle']) return obj['currentStyle'][styleProp];
          else if (window.getComputedStyle)
            return document.defaultView
              .getComputedStyle(obj, null)
              .getPropertyValue(styleProp);
        }
        exports.getStyle = getStyle;
        function scaleImageToContainer(img, dontCenter, fnOnImgLoad) {
          if (!dontCenter) {
            img.parentNode.style.textAlign = 'left';
            img.parentNode.style.verticalAlign = 'top';
          }
          var style = function (name) {
            var node = img.parentNode;
            var dim = getStyle(node, name);
            while (dim == 'auto') {
              node = node.parentNode;
              dim = getStyle(node, name);
            }
            var n = parseInt(dim);
            if (isNaN(n)) n = 0;
            return n;
          };
          //var size = Math.min(img.parentNode.offsetWidth, img.parentNode.offsetHeight);
          var size = Math.min(style('width'), style('height'));
          if (window.gigya.localInfo.quirksMode) {
            var bordersAndPaddings = getBordersAndPaddings(img.parentNode);
            var w = style('width') - bordersAndPaddings.w;
            var h = style('height') - bordersAndPaddings.h;
            size = Math.min(w, h);
          }
          GlobalDOM_1.scaleImage(img, size, dontCenter, fnOnImgLoad);
        }
        exports.scaleImageToContainer = scaleImageToContainer;
        function getClassInnerSize(className, w, h) {
          var el = document.createElement('div');
          el.className = className;
          window.gigya.utils.DOM.prependToBody(el);
          var bordersAndPaddings = getBordersAndPaddings(el);
          w -= bordersAndPaddings.w;
          h -= bordersAndPaddings.h;
          el.parentNode.removeChild(el);
          return { w: w, h: h };
        }
        exports.getClassInnerSize = getClassInnerSize;
        function SpriteRenderer(
          src,
          srcTemplate,
          spriteData,
          spriteW,
          spriteH,
          pixelRatio,
          spriteLength
        ) {
          this.src = src;
          this.srcTemplate = srcTemplate;
          this.spriteData = spriteData;
          this.spriteW = spriteW;
          this.spriteH = spriteH;
          this.pixelRatio = pixelRatio;
          this.spriteLength = spriteLength;
        }
        exports.SpriteRenderer = SpriteRenderer;
        SpriteRenderer.prototype = {
          getSpriteData: function (id, dontUseSprites) {
            var oSprite = this.spriteData[id];
            if (oSprite && !dontUseSprites) {
              return this.spriteData[id];
            } else {
              var i = 0;
              var params = id.split('-');
              var regexp = /\{(.*?)\}/g;
              var src = this.srcTemplate.replace(regexp, function (_, group) {
                var param = params[i++];
                if (param) {
                  return param;
                } else {
                  return '';
                }
              });
              return {
                isSingleImage: true,
                src: src,
              };
            }
          },
          getStyleString: function (spriteId, autoMargin) {
            var oSprite = this.getSpriteData(spriteId);
            var arStyle = [];
            if (oSprite) {
              arStyle.push("background-image:url('" + this.src + "');");
              arStyle.push('background-position:-' + oSprite.x + 'px 0px;');
              if (this.pixelRatio > 1) {
                arStyle.push(
                  'background-size:' +
                    this.spriteLength * this.spriteW +
                    'px ' +
                    this.spriteH +
                    'px;'
                );
              }
              if (autoMargin) {
                arStyle.push('margin: 0 auto;');
              }
              arStyle.push('width: ' + this.spriteW + 'px;');
              arStyle.push(
                'height: ' +
                  this.spriteH +
                  'px;line-height: ' +
                  this.spriteH +
                  'px;'
              );
              arStyle.push('background-repeat:no-repeat;');
              //arStyle.push("font-size:1px;");
              arStyle.push('position:static;');
            }
            return arStyle.join('');
          },
          getHTML: function (
            spriteId,
            autoMargin,
            dontUseSprites,
            elID,
            altText,
            tabindex,
            title,
            ariaLabel
          ) {
            if (elID === void 0) {
              elID = '';
            }
            if (altText === void 0) {
              altText = '';
            }
            if (tabindex === void 0) {
              tabindex = undefined;
            }
            /* ----------------------------------------------------------------------------------------*/
            // see bug: 33448
            //var disableSpriteOnChrome = ((this.pixelRatio > 1) && gigya.localInfo.isChrome);
            //dontUseSprites = dontUseSprites || disableSpriteOnChrome;
            /* ----------------------------------------------------------------------------------------*/
            var oSprite = this.getSpriteData(spriteId, dontUseSprites);
            var arHTML = [];
            var tabindexAttr =
              tabindex !== undefined ? 'tabindex="' + tabindex + '"' : '';
            var aria = ariaLabel || altText;
            arHTML.push(
              '<button aria-label="' +
                aria +
                '" ' +
                (title ? 'title="' + title + '"' : '') +
                ' alt="' +
                altText +
                '" type="button" class="tabbing-button" ' +
                tabindexAttr +
                ' style="height:' +
                this.spriteH +
                'px;">'
            );
            if (oSprite) {
              if (oSprite.isSingleImage) {
                arHTML.push(
                  '<img src="' +
                    oSprite.src +
                    '" style="width:' +
                    this.spriteW +
                    'px;height:' +
                    this.spriteH +
                    'px;position:static;margin:0" alt="' +
                    altText +
                    '" aria-hidden="true" />'
                );
              } else {
                arHTML.push('<div aria-hidden="true" style="');
                arHTML.push(this.getStyleString(spriteId, autoMargin));
                arHTML.push('"');
                if (elID) {
                  arHTML.push(' id="' + elID + '"');
                }
                arHTML.push('></div>');
              }
            }
            arHTML.push('</button>');
            return arHTML.join('');
          },
        };
        function getSpriteRenderers(oGroups) {
          //group: {path,w,h}
          var arPaths = [];
          var x = 0;
          var renderers = {};
          for (var groupID in oGroups) {
            var group = oGroups[groupID];
            if (!group.pixelRatio) group.pixelRatio = 1;
            arPaths.push(
              group.path +
                '|' +
                group.w * group.pixelRatio +
                ',' +
                group.h * group.pixelRatio
            );
          }
          var src = window.gigya._.getCdnResource(
            '/gs/GetSprite.ashx?path=' +
              encodeURIComponent(arPaths.join('^').replace(/\[\]/, ''))
          );
          for (var groupID in oGroups) {
            var group = oGroups[groupID];
            var spriteGroupData = {};
            spriteGroupData['spriteData'] = {};
            var regexp = /\[(.*?)\]/g;
            var arMatches = [];
            var iMatch = 0;
            spriteGroupData['srcTemplate'] = window.gigya._.getCdnResource(
              '/gs/i' +
                group.path.replace(regexp, function (_, placeholder) {
                  arMatches.push(placeholder.split(','));
                  return '{' + iMatch++ + '}';
                })
            );
            var arSpriteIDs = arrayUtils_1.getCombination(arMatches);
            if (arSpriteIDs.length == 0) arSpriteIDs.push(['']);
            for (var u = 0; u < arSpriteIDs.length; u++) {
              var id = arSpriteIDs[u].join('-');
              if (id == '') {
                id = 'default';
              }
              spriteGroupData['spriteData'][id] = {
                groupId: groupID,
                id: id,
                x: x,
                w: group.w,
                h: group.h,
              };
              x += group.w;
            }
            renderers[groupID] = new SpriteRenderer(
              src,
              spriteGroupData['srcTemplate'],
              spriteGroupData['spriteData'],
              group.w,
              group.h,
              group.pixelRatio,
              arSpriteIDs.length
            );
          }
          return renderers;
        }
        exports.getSpriteRenderers = getSpriteRenderers;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/UI/layoutStyles.ts':
      /*!***************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutStyles.ts ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function getStyleString(oStyle, blnIsLink) {
          var s = '';
          s += 'line-height: normal;';
          if (blnIsLink) s += 'cursor:pointer;';
          if (oStyle.underline) s += 'text-decoration:underline;';
          if (oStyle.font) s += 'font-family:' + oStyle.font + ';';
          if (oStyle.size) s += 'font-size:' + oStyle.size + 'px;';
          if (oStyle.color) s += 'color:' + oStyle.color + ';';
          if (oStyle.bold) s += 'font-weight:bold;';
          if (oStyle['frame-thickness'])
            s +=
              'border-style:solid; border-width:' +
              oStyle['frame-thickness'] +
              'px;';
          if (oStyle['frame-color'])
            s += 'border-color:' + oStyle['frame-color'] + ';';
          if (oStyle['background-color'])
            s += 'background-color:' + oStyle['background-color'] + ';';
          return s;
        }
        exports.getStyleString = getStyleString;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/UI/layoutText.ts':
      /*!*************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutText.ts ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function measureText(text, oStyle, maxW) {
          if (maxW === void 0) {
            maxW = 0;
          }
          if (isNaN(maxW) || maxW < 0) maxW = 0;
          var ruler = document.getElementById('gigya_ruler');
          var rulerText = document.getElementById('gigya_ruler_text');
          if (ruler == null) {
            ruler = document.createElement('div');
            rulerText = document.createElement('span');
            ruler.id = 'gigya_ruler';
            rulerText.id = 'gigya_ruler_text';
            ruler.style.visibility = 'hidden';
            ruler.style.position = 'absolute';
            ruler.style.margin = '0px';
            ruler.style.padding = '0px';
            ruler.appendChild(rulerText);
            window.gigya.utils.DOM.prependToBody(ruler);
          }
          if (oStyle) {
            ruler.style.lineHeight = oStyle.size + 'px';
            ruler.style.fontFamily = oStyle.font;
            ruler.style.fontSize = oStyle.size + 'px';
            ruler.style.fontWeight =
              ('' + oStyle.bold).toLowerCase() == 'true' ? 'bold' : '';
          }
          if (maxW) {
            ruler.style.whiteSpace = '';
            ruler.style.width = '' + maxW + 'px';
          } else {
            ruler.style.whiteSpace = 'nowrap';
            ruler.style.width = 'auto';
          }
          ruler.style.overflow = 'hidden';
          ruler.style.display = '';
          rulerText.innerHTML = text;
          var w = rulerText.offsetWidth;
          var h = rulerText.offsetHeight;
          if (w == 0 || h == 0) {
            w = ruler.offsetWidth;
            h = ruler.offsetHeight;
          }
          ruler.style.display = 'none';
          return { w: w, h: h };
        }
        exports.measureText = measureText;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/UI/layoutTextFixer.ts':
      /*!******************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/layoutTextFixer.ts ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function normalizeLinebreaks(t) {
          if (t === void 0) {
            t = undefined;
          }
          if (!t || !t.replace) return t;
          return t.replace(/\r/, '').replace(/\n/g, '\r\n');
        }
        exports.normalizeLinebreaks = normalizeLinebreaks;
        function fixTextWidows(text) {
          var lastSpace = text.lastIndexOf(' ');
          if (lastSpace === -1) {
            return text;
          }
          return (
            text.substr(0, lastSpace) + '&nbsp;' + text.substr(lastSpace + 1)
          );
        }
        exports.fixTextWidows = fixTextWidows;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/UI/resources.ts':
      /*!************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/resources.ts ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function getTemplates(plugins) {
          var templates = [];
          for (var i in plugins) {
            templates.push(window.gigya._.plugins.resources.html[plugins[i]]);
          }
          return window.gigya.utils.object.merge(templates);
        }
        exports.getTemplates = getTemplates;
        function getCss(plugins) {
          var csses = [];
          for (var i in plugins) {
            csses.push(window.gigya._.plugins.resources.css[plugins[i]]);
          }
          return window.gigya.utils.object.merge(csses);
        }
        exports.getCss = getCss;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/UI/validation/emailValidation.ts':
      /*!*****************************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/validation/emailValidation.ts ***!
  \*****************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function isValidEmailLoginID(email) {
          var emailPattern =
            "^(?=(.{1,64}@.{1,255}))([!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9}]{1,64}(\\.[!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9]{1,}){0,})@((\\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\\])|([a-zA-Z0-9-]{1,63}(\\.[a-zA-Z0-9-]{1,63}){1,}))$";
          var regex = new RegExp(emailPattern, 'ig');
          var valid = regex.test(email);
          window.gigya.logger.info(
            'LoginID validation with email : ' + email + ', passed : ' + valid
          );
          return valid;
        }
        exports.isValidEmailLoginID = isValidEmailLoginID;
        function isEmailValid(email) {
          return isEmailListValid(email);
        }
        exports.isEmailValid = isEmailValid;
        function isEmailListValid(emails) {
          var _email =
            "((?=([^.].{0,63}@.{1,255}))([!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9}]{1,64}(\\.[!#$%&'*+\\-\\/=?\\^_`{|}~a-zA-Z0-9]{1,}){0,})@((\\[(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}\\])|([a-zA-Z0-9-]{1,63}(\\.[a-zA-Z0-9-]{1,63}){1,})))";
          var _nameAndEmail =
            '(("[^<]+<(' +
            _email +
            ')>")|(("[^"]*" *)?<(' +
            _email +
            ')>)|(' +
            _email +
            '))';
          var regex = new RegExp(_nameAndEmail);
          var arEmails = emails.split(',');
          for (var i = 0; i < arEmails.length; i++) {
            if (!regex.test(arEmails[i])) return false;
          }
          return true;
        }
        exports.isEmailListValid = isEmailListValid;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/UI/validation/isEmail.ts':
      /*!*********************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/validation/isEmail.ts ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function isEmail(s) {
          if (s.indexOf(' ') >= 0) return false;
          var emailParts = s.split('@');
          if (emailParts.length != 2) return false;
          if (emailParts[0].length == 0) return false;
          if (emailParts[1].length == 0) return false;
          var domainParts = emailParts[1].split('.');
          if (domainParts.length < 2) return false;
          for (var d = 0; d < domainParts.length; d++) {
            if (domainParts[d].length == 0 || domainParts[d].indexOf(' ') > 0)
              return false;
          }
          return true;
        }
        exports.isEmail = isEmail;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/UI/validation/isInDomain.ts':
      /*!************************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/UI/validation/isInDomain.ts ***!
  \************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function isInDomain(domain, topDomain) {
          if (domain === void 0) {
            domain = undefined;
          }
          if (topDomain === void 0) {
            topDomain =
              window.gigya.thisScript.globalConf['topDomain'] ||
              document.domain;
          }
          if (!domain) return;
          var regexString =
            '^' +
            domain
              .replace(/\./g, '\\.')
              .replace(/\*\\./g, '([a-zA-Z0-9]+\\.)*') +
            '$';
          var regex = new RegExp(regexString);
          return regex.test(topDomain);
        }
        exports.isInDomain = isInDomain;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/general/arrayUtils.ts':
      /*!******************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/general/arrayUtils.ts ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function getCombination(ar, index) {
          if (index === void 0) {
            index = 0;
          }
          if (!index) index = 0;
          if (!ar || ar.length == 0) return [];
          var currentArray = ar[index];
          if (index == ar.length - 1) {
            var arCombinations = [];
            for (var i = 0; i < currentArray.length; i++) {
              arCombinations.push([currentArray[i]]);
            }
            return arCombinations;
          } else {
            var arCombinations = [];
            var arCombination = getCombination(ar, index + 1);
            if (currentArray) {
              for (var i = 0; i < currentArray.length; i++) {
                for (var u = 0; u < arCombination.length; u++) {
                  arCombinations.push(
                    [currentArray[i]].concat(arCombination[u])
                  );
                }
              }
            }
            return arCombinations;
          }
        }
        exports.getCombination = getCombination;
        function resolveProviders(
          enabledProviders,
          disabledProviders,
          requiredCapabilities
        ) {
          // setting the providers array.
          // setting the array of the providers:
          var eProviders = window.gigya.utils.array.getArrayFromString(
            enabledProviders,
            ',',
            true
          );
          var dProviders = window.gigya.utils.array.getArrayFromString(
            disabledProviders,
            ',',
            true
          );
          var rCapabilities = window.gigya.utils.array.getArrayFromString(
            requiredCapabilities,
            ',',
            true
          );
          // removing the disabled providers.
          for (var i = 0; i < dProviders.length; i++) {
            window.gigya.utils.array.removeByValue(eProviders, dProviders[i]);
          }
          // converting the providrs string into the providers Object from the array of providers in the internal '_' sdk.
          var providers = window.gigya._.providers.getProvidersByName(
            eProviders.join(',')
          );
          // removing the disabled providers.
          for (var i = 0; i < dProviders.length; i++) {
            window.gigya.utils.array.removeByProperty(
              providers,
              'name',
              dProviders[i]
            );
          }
          // only providers that support the capabilities will remain.
          return window.gigya.socialize.getProvidersForRequiredCapabilities(
            providers,
            rCapabilities
          );
        }
        exports.resolveProviders = resolveProviders;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/general/date.ts':
      /*!************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/general/date.ts ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function getISODate(date) {
          var dateResult = null;
          if (window.gigya.localInfo.isIE8) {
            dateResult = getIE8Date(date);
          } else {
            var isoRegex =
              /^(\d{4}\-\d\d\-\d\d([tT ][\d:\.]*)?)([zZ]|([+\-])(\d\d):(\d\d))?$/;
            var captures = isoRegex.exec(date) || [];
            if (captures[1]) {
              var millisecondsTime = Date.parse(date);
              dateResult = new Date(millisecondsTime);
            }
          }
          return dateResult;
        }
        exports.getISODate = getISODate;
        function getIE8Date(date) {
          var day,
            tz,
            rx =
              /^(\d{4}\-\d\d\-\d\d([tT ][\d:\.]*)?)([zZ]|([+\-])(\d\d):(\d\d))?$/,
            p = rx.exec(date) || [];
          if (p[1]) {
            day = p[1].split(/\D/);
            for (var i = 0, L = day.length; i < L; i++) {
              day[i] = parseInt(day[i], 10) || 0;
            }
            day[1] -= 1;
            day = new Date(Date.UTC.apply(Date, day));
            if (!day.getDate()) return null;
            if (p[5]) {
              tz = parseInt(p[5], 10) * 60;
              if (p[6]) tz += parseInt(p[6], 10);
              if (p[4] == '+') tz *= -1;
              if (tz) day.setUTCMinutes(day.getUTCMinutes() + tz);
            }
            return day;
          }
          return null;
        }

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/general/objectUtils.ts':
      /*!*******************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/general/objectUtils.ts ***!
  \*******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function cloneParamsForPlugin(params) {
          var newParams = window.gigya.utils.object.clone(params);
          delete newParams.instanceID;
          delete newParams.getInstance;
          return newParams;
        }
        exports.cloneParamsForPlugin = cloneParamsForPlugin;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/languages/language.ts':
      /*!******************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/languages/language.ts ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var defaultLang = 'en';
        function getLocalizedText(plugin, textKey, lang, replaceStr, withStr) {
          var _a, _b, _c;
          // region # test-helper
          if (lang == 'te-st') return 'TEST_' + textKey.substring(0, 10);
          // endregion # test-helper
          if (!lang) lang = defaultLang;
          var translations = window.gigya.i18n[plugin][lang];
          if (!translations) {
            var fallbackLang = getFallbackLang(lang, defaultLang);
            return getLocalizedText(
              plugin,
              textKey,
              fallbackLang,
              replaceStr,
              withStr
            );
          }
          var res = translations[textKey];
          var screensetPlugin = 'gigya.services.accounts.plugins.screenSet.js';
          var fallbackTranslation =
            (_c =
              (_b =
                (_a = window.gigya.i18n) === null || _a === void 0
                  ? void 0
                  : _a[screensetPlugin]) === null || _b === void 0
                ? void 0
                : _b[lang]) === null || _c === void 0
              ? void 0
              : _c[textKey];
          if (!res && fallbackTranslation) {
            res = fallbackTranslation;
          }
          if (res && replaceStr) res = res.replace(replaceStr, withStr);
          return res;
        }
        exports.getLocalizedText = getLocalizedText;
        function getTranslationsFromContainer(
          container,
          lang,
          fallbackEnabled,
          defaultTranslationsLang
        ) {
          if (fallbackEnabled === void 0) {
            fallbackEnabled = true;
          }
          if (defaultTranslationsLang === void 0) {
            defaultTranslationsLang = defaultLang;
          }
          if (!container || !container.translations) return undefined;
          var langKeys =
            (lang === null || lang === void 0
              ? void 0
              : lang.split(',').map(function (k) {
                  return k.trim();
                })) || [];
          for (
            var _i = 0, langKeys_1 = langKeys;
            _i < langKeys_1.length;
            _i++
          ) {
            var langKey = langKeys_1[_i];
            if (container.translations[langKey]) {
              return {
                langKey: langKey,
                translations: container.translations[langKey],
              };
            }
            var fallbackLang_1 = getFallbackLang(langKey, langKey);
            if (fallbackLang_1) {
              var translation = getTranslationsFromContainer(
                container,
                fallbackLang_1
              );
              if (fallbackEnabled && translation) {
                return translation;
              }
            }
          }
          var fallbackLang = getFallbackLang(
            langKeys[0],
            defaultTranslationsLang
          );
          return fallbackEnabled && fallbackLang
            ? getTranslationsFromContainer(container, fallbackLang)
            : undefined;
        }
        exports.getTranslationsFromContainer = getTranslationsFromContainer;
        function getFallbackLang(lang, defaultLang) {
          var hyphenIndex = lang.indexOf('-');
          if (hyphenIndex > 0) {
            return lang.substr(0, hyphenIndex); // the substring before the first occurrence of the hyphen
          }
          return lang !== defaultLang
            ? defaultLang // fallback to the default lang
            : undefined; // we dont have a fallback lang if the lang is the same as the default lang
        }
        exports.getFallbackLang = getFallbackLang;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/xml/defaultXmlProcessor.ts':
      /*!***********************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/xml/defaultXmlProcessor.ts ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function defaultPreprocessor(PropertyName, PropertyValue) {
          var lcasePropertyName = PropertyName.toLowerCase();
          var lastDashIndex = lcasePropertyName.indexOf('-');
          if (lastDashIndex != -1) {
            lcasePropertyName = lcasePropertyName.substring(
              lastDashIndex + 1,
              lcasePropertyName.length
            );
          }
          switch (lcasePropertyName) {
            case 'bold':
            case 'italic':
            case 'underline':
              return PropertyValue.toString().toLowerCase() == 'true';
            case 'width':
            case 'height':
              return PropertyValue.replace('%', '');
            case 'size':
              return parseInt(PropertyValue);
            default:
              return PropertyValue;
          }
        }
        exports.defaultPreprocessor = defaultPreprocessor;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/xml/xml.ts':
      /*!*******************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/xml/xml.ts ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function CreateXMLFromString(sXML) {
          var doc = null;
          if (
            window['ActiveXObject'] &&
            (window.gigya.localInfo.isIE8 || window.gigya.localInfo.isIE9)
          ) {
            try {
              doc = new ActiveXObject('Microsoft.XMLDOM');
              doc.async = 'false';
              doc.loadXML(sXML);
            } catch (e) {
              window.gigya.log.addLog(
                'Failed to create Microsoft.XMLDOM ActiveX parser',
                e
              );
            }
          } else {
            var parser = new DOMParser();
            doc = parser.parseFromString(sXML, 'text/xml');
          }
          return doc;
        }
        exports.CreateXMLFromString = CreateXMLFromString;
        function CopyProperties(propBag, targetBag, pfx, Proccesor) {
          if (typeof pfx == 'undefined') pfx = '';
          if (typeof targetBag == 'undefined') targetBag = {};
          if (Proccesor != null) {
            for (var propName1 in propBag) {
              targetBag[pfx + propName1] = Proccesor(
                propName1,
                propBag[propName1]
              );
            }
          } else {
            for (var propName2 in propBag) {
              targetBag[pfx + propName2] = propBag[propName2];
            }
          }
          return targetBag;
        }
        exports.CopyProperties = CopyProperties;
        function CollectAttributesFromXMLPathToObject(
          xmlobjResource,
          ResourceNodePathSegments,
          res,
          blnCollectFromAncestors,
          processor
        ) {
          for (
            var iPathSegment = 0;
            iPathSegment < ResourceNodePathSegments.length &&
            typeof xmlobjResource != 'undefined';
            iPathSegment++
          ) {
            xmlobjResource =
              xmlobjResource.childNodes[ResourceNodePathSegments[iPathSegment]];
            if (xmlobjResource != null && blnCollectFromAncestors) {
              this.CopyProperties(
                xmlobjResource.attributes,
                res,
                '',
                processor
              );
            }
          }
          if (typeof xmlobjResource != 'undefined') {
            this.CopyProperties(xmlobjResource.attributes, res, '', processor);
          }
        }
        exports.CollectAttributesFromXMLPathToObject =
          CollectAttributesFromXMLPathToObject;
        function mergeNodes(srcNode, targetObject) {
          if (typeof targetObject.attributes == 'undefined')
            targetObject.attributes = {};
          if (typeof targetObject.childNodes == 'undefined')
            targetObject.childNodes = {};
          var targetAttributes = targetObject.attributes;
          var srcNodeAttributes = srcNode.attributes;
          /* for (var attName in srcNodeAttributes) {
        targetAttributes[attName] = srcNodeAttributes[attName];
        }*/
          if (srcNodeAttributes) {
            //this.CopyAttributesToObject(srcNodeAttributes, targetAttributes, '');
            for (var i = 0; i < srcNodeAttributes.length; i++) {
              if (srcNodeAttributes[i].value != null) {
                targetAttributes[srcNodeAttributes[i].nodeName] =
                  srcNodeAttributes[i].value;
              } else {
                targetAttributes[srcNodeAttributes[i].nodeName] =
                  srcNodeAttributes[i].nodeValue;
              }
            }
          }
          var targetChildNode;
          for (var u = 0; u < srcNode.childNodes.length; u++) {
            //add missing child nodes
            var srcChildNode = srcNode.childNodes[u];
            targetChildNode = targetObject.childNodes[srcChildNode.nodeName];
            if (typeof targetChildNode == 'undefined') {
              targetChildNode = targetObject.childNodes[srcChildNode.nodeName] =
                { attributes: {}, childNodes: {} };
            }
            this.mergeNodes(srcChildNode, targetChildNode);
          }
          return targetObject;
        }
        exports.mergeNodes = mergeNodes;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/Utils/xml/xmlResolver.ts':
      /*!***************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/Utils/xml/xmlResolver.ts ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var xml_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/Utils/xml/xml */ './src/core/Gigya.Js.Plugin/app/Utils/xml/xml.ts'
        );
        function resolver(proccessor) {
          this.configurations = [];
          this.mergedConfig = {};
          this.isMerged = true;
          this._processor = proccessor;
          this.merge = function () {
            if (!this.isMerged) {
              this.mergedConfig = { attributes: {}, childNodes: {} };
              for (var i = 0; i < this.configurations.length; i++) {
                var xmlDoc = this.configurations[i];
                xml_1.mergeNodes(xmlDoc, this.mergedConfig);
              }
              this.isMerged = true;
            }
          };
          this.Resolve = function (ar, r) {
            if (this.merge) this.merge();
            var res = {};
            if (typeof arguments[arguments.length - 1] == 'object') {
              res = arguments[arguments.length - 1];
            }
            for (var u = 0; u < arguments.length; u++) {
              var arg = arguments[u];
              var ctor = arg.constructor;
              if (ctor == String) {
                var arPaths = arg.split('|');
                for (var i = arPaths.length - 1; i >= 0; i--) {
                  var path = this.trimCharsAtSuffix(
                    this.trimCharsAtPrefix(arPaths[i], ' \n\r\t'),
                    ' \n\r\t'
                  );
                  var recur = path.charAt(0) == '+';
                  var arPath = path.split('/').slice(1);
                  if (recur) {
                    path = path.substring(1);
                  }
                  xml_1.CollectAttributesFromXMLPathToObject(
                    this.mergedConfig,
                    arPath,
                    res,
                    recur,
                    this._processor
                  );
                }
              } else if (ctor == Array) {
                for (var n = 0; n < arg.length; n++) {
                  this.Resolve(arg[n], res);
                }
              }
            }
            return res;
          };
          this.trimCharsAtPrefix = function (s, chars) {
            var idx = 0;
            if (typeof s == 'undefined' || s.length == 0) return '';
            var sl = s.length;
            while (idx <= sl && chars.indexOf(s.charAt(idx)) > -1) {
              idx++;
            }
            return s.substring(idx, sl);
          };
          this.trimCharsAtSuffix = function (s, chars) {
            if (typeof s == 'undefined' || s.length == 0) return '';
            var idx = s.length - 1;
            while (idx >= 0 && chars.indexOf(s.charAt(idx)) > -1) {
              idx--;
            }
            return s.substring(0, idx + 1);
          };
          this.addConfig = function (sXML) {
            if (typeof sXML == 'string') {
              this.configurations.push(xml_1.CreateXMLFromString(sXML));
              this.isMerged = false;
            }
          };
          this.getTextFromKey = function (textKey) {
            return this.Resolve('/config/lang/' + textKey)['text'];
          };
        }
        exports.resolver = resolver;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/css/legacy_modal.css':
      /*!***********************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/css/legacy_modal.css ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var result = __webpack_require__(
          /*! !../../../../../../node_modules/css-loader/dist/cjs.js!./legacy_modal.css */ '../node_modules/css-loader/dist/cjs.js!./src/core/Gigya.Js.Plugin/app/css/legacy_modal.css'
        );

        if (typeof result === 'string') {
          module.exports = result;
        } else {
          module.exports = result.toString();
        }

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/css/modern_modal.css':
      /*!***********************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/css/modern_modal.css ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var result = __webpack_require__(
          /*! !../../../../../../node_modules/css-loader/dist/cjs.js!./modern_modal.css */ '../node_modules/css-loader/dist/cjs.js!./src/core/Gigya.Js.Plugin/app/css/modern_modal.css'
        );

        if (typeof result === 'string') {
          module.exports = result;
        } else {
          module.exports = result.toString();
        }

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/defaultProcessor.ts':
      /*!**********************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/defaultProcessor.ts ***!
  \**********************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        function defaultProccessor(PropertyName, PropertyValue) {
          var lcasePropertyName = PropertyName.toLowerCase();
          var lastDashIndex = lcasePropertyName.indexOf('-');
          if (lastDashIndex != -1) {
            lcasePropertyName = lcasePropertyName.substring(
              lastDashIndex + 1,
              lcasePropertyName.length
            );
          }
          switch (lcasePropertyName) {
            case 'bold':
            case 'italic':
            case 'underline':
              return PropertyValue.toString().toLowerCase() == 'true';
              break;
            case 'width':
            case 'height':
              return PropertyValue.replace('%', '');
              break;
            case 'size':
              return parseInt(PropertyValue);
              break;
            default:
              return PropertyValue;
          }
        }
        exports.defaultProccessor = defaultProccessor;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/helpers/AsyncManager.ts':
      /*!**************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/helpers/AsyncManager.ts ***!
  \**************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        /* CURRENTLY INACTIVE!!! to activate, go to _refernces.ts  */
        var BaseObjectGlobal = window.gigya._.BaseObject;
        var AsyncManager = /** @class */ (function (_super) {
          tslib_1.__extends(AsyncManager, _super);
          function AsyncManager() {
            var _this = _super.call(this, undefined, false) || this;
            _this._actions = [];
            return _this;
          }
          AsyncManager.prototype.onActionRegisterEvent = function () {
            return this.getEvent(AsyncManager._eventNames.onActionRegister);
          };
          AsyncManager.prototype.onActionUnRegisterEvent = function () {
            return this.getEvent(AsyncManager._eventNames.onActionUnRegister);
          };
          AsyncManager.prototype.onNoActionsPendingEvent = function () {
            return this.getEvent(AsyncManager._eventNames.onNoActionsPending);
          };
          AsyncManager.prototype.register = function (func) {
            this._actions.push(func);
            this.dispatchEvent(AsyncManager._eventNames.onActionRegister);
          };
          AsyncManager.prototype.unregister = function (func) {
            window.gigya.utils.array.removeByValue(this._actions, func);
            this.dispatchEvent(AsyncManager._eventNames.onActionUnRegister);
            if (!this.isActive())
              this.dispatchEvent(AsyncManager._eventNames.onNoActionsPending);
          };
          AsyncManager.prototype.call = function (func, params, callbackField) {
            var _this = this;
            if (callbackField === void 0) {
              callbackField = 'callback';
            }
            this.register(func);
            var originalCb = params[callbackField];
            params[callbackField] = function () {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              if (typeof originalCb == 'function') originalCb.call(_this, args);
              _this.unregister(func);
            };
            func(params);
          };
          AsyncManager.prototype.isActive = function () {
            return this._actions && this._actions.length > 0;
          };
          AsyncManager._eventNames = {
            onActionRegister: 'onActionRegister',
            onActionUnRegister: 'onActionUnRegister',
            onNoActionsPending: 'onNoActionsPending',
          };
          return AsyncManager;
        })(BaseObjectGlobal);
        exports.AsyncManager = AsyncManager;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/helpers/LoadDimmer.ts':
      /*!************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/helpers/LoadDimmer.ts ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var LoadDimmer = /** @class */ (function () {
          function LoadDimmer(_container) {
            this._container = _container;
            this._isActive = false;
            this._dimmer = document.createElement('div');
            this._dimmer.className = 'gigya-screen-dimmer';
            this._loader = document.createElement('div');
            this._loader.className = 'gigya-screen-loader';
          }
          LoadDimmer.prototype.show = function () {
            if (!this._isActive) {
              window.gigya.logger.debug('showing loading indication');
              this.setElementOverContainer(this._dimmer);
              this.setElementOverContainer(this._loader);
              this._container.insertBefore(
                this._dimmer,
                this._container.firstChild
              );
              this._container.insertBefore(
                this._loader,
                this._container.firstChild
              );
              this._isActive = true;
            }
          };
          LoadDimmer.prototype.setElementOverContainer = function (el) {
            var pos = window.gigya.global.getPos(this._container); // TODO: remove cast
            el.style.width = this._container.offsetWidth + 'px';
            el.style.height = this._container.offsetHeight + 'px';
            el.style.zIndex = '' + window.gigya.utils.DOM.getNextZIndex();
          };
          LoadDimmer.prototype.isActive = function () {
            return this._isActive;
          };
          LoadDimmer.prototype.hide = function () {
            if (this._isActive) {
              window.gigya.logger.debug('hiding loading indication');
              this.unlinkElement(this._loader);
              this.unlinkElement(this._dimmer);
              this._isActive = false;
            }
          };
          LoadDimmer.prototype.unlinkElement = function (el) {
            if (el && el.parentNode) el.parentNode.removeChild(el);
          };
          LoadDimmer.prototype.dispose = function () {
            this.hide();
            delete this._container;
          };
          return LoadDimmer;
        })();
        exports.LoadDimmer = LoadDimmer;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/helpers/ModalDialog.ts':
      /*!*************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/helpers/ModalDialog.ts ***!
  \*************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var ModalDialogClasses_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/helpers/ModalDialogClasses */ './src/core/Gigya.Js.Plugin/app/helpers/ModalDialogClasses.ts'
        );
        var LoadDimmer_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/helpers/LoadDimmer */ './src/core/Gigya.Js.Plugin/app/helpers/LoadDimmer.ts'
        );
        var layoutSprites_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/Utils/UI/layoutSprites */ './src/core/Gigya.Js.Plugin/app/Utils/UI/layoutSprites.ts'
        );
        var CloseReasons_1 = __webpack_require__(
          /*! src/core/Gigya.Js.Plugin/app/CloseReasons */ './src/core/Gigya.Js.Plugin/app/CloseReasons.ts'
        );
        var layoutCssFixerUtils_1 = __webpack_require__(
          /*! ../Utils/UI/layoutCssFixerUtils */ './src/core/Gigya.Js.Plugin/app/Utils/UI/layoutCssFixerUtils.ts'
        );
        var MODAL_CONTENT_CONTAINER_ID = 'gigya-modal-plugin-container';
        var BaseObjectGlobal = window.gigya._.BaseObject;
        var ModalDialog = /** @class */ (function (_super) {
          tslib_1.__extends(ModalDialog, _super);
          // Methods
          function ModalDialog(
            _triggerMethod,
            isMobileUI,
            params,
            isLegacy,
            hide
          ) {
            if (isLegacy === void 0) {
              isLegacy = false;
            }
            var _this = _super.call(this, params) || this;
            _this._triggerMethod = _triggerMethod;
            _this.isMobileUI = isMobileUI;
            _this.isLegacy = isLegacy;
            _this.onWindowResizeEvent = _this.onWindowResize.bind(_this);
            _this._dialogClasses = _this.isLegacy
              ? ModalDialogClasses_1.legacyDialogClasses
              : ModalDialogClasses_1.dialogClasses;
            _this.create(hide);
            return _this;
          }
          // Events
          ModalDialog.prototype.onAfterCenterEvent = function () {
            return this.getEvent('onAfterModalCenter');
          };
          ModalDialog.prototype.getConfig = function () {
            return {
              defaultParams: {},
              requiredParams: ['modalTemplate'],
            };
          };
          ModalDialog.prototype.showAll = function () {
            if (!this._allContainer) {
              this.create();
            }
            this.center();
            if (this.isMobileUI)
              window.gigya.utils.DOM.addClassToElement(
                document.documentElement,
                this._dialogClasses.document_mobile
              );
            this._allContainer.style.visibility = 'visible';
            // WCAG: Focus dialog but not any specific element within the dialog.
            //       If a specific element is focused, the screen-reader will not read any text prior to it.
            //       If the first form element is focused and it's a text input with a placeholder, old IE versions will hide the placeholder text.
            this._allContainer.focus();
            window.gigya.utils.tabbable.bindTabLooping(
              this.getModalDialogContainer()
            );
          };
          ModalDialog.prototype.hideAll = function () {
            if (this._allContainer) {
              this._allContainer.style.visibility = 'hidden';
              if (this.isMobileUI) {
                this.removeWindowResizeListener();
                document.documentElement.style.height = '';
                window.gigya.utils.DOM.removeClassFromElement(
                  document.documentElement,
                  this._dialogClasses.document_mobile
                );
              }
              window.gigya.utils.tabbable.unbindTabLooping(
                this._contentContainer
              );
            }
          };
          ModalDialog.prototype.showMainDialog = function () {
            if (this._mainContainer) {
              this._mainContainer.style.visibility = 'visible';
            }
          };
          ModalDialog.prototype.hideMainDialog = function () {
            if (this._mainContainer) {
              this._mainContainer.style.visibility = 'visibile';
            }
          };
          ModalDialog.prototype.showLoading = function () {
            if (this._loader) {
              this._loader.show();
            }
          };
          ModalDialog.prototype.hideLoading = function () {
            if (this._loader) {
              this._loader.hide();
            }
          };
          ModalDialog.prototype.changeToMobile = function () {
            this._allContainer.className = this._dialogClasses.all_mobile;
          };
          ModalDialog.prototype.changeToWeb = function () {
            this._allContainer.className = this._dialogClasses.all_web;
          };
          ModalDialog.prototype.isLoading = function () {
            return this._loader && this._loader.isActive();
          };
          ModalDialog.prototype.resize = function (size) {
            if (size) {
              window.gigya.logger.debug('resizing and centering modal dialog');
              this.applyStyle('height', size.height);
              this.applyStyle('minHeight', size.minHeight);
              this.applyStyle('width', size.width);
              this.applyStyle('minWidth', size.minWidth);
              this.center();
            }
          };
          ModalDialog.prototype.applyStyle = function (property, value) {
            if (value === null) this._mainContainer.style[property] = '';
            else if (value) this._mainContainer.style[property] = value;
          };
          ModalDialog.prototype.addWindowResizeListener = function () {
            window.gigya.utils.DOM.addEventListener(
              window,
              'resize',
              this.onWindowResizeEvent
            );
          };
          ModalDialog.prototype.removeWindowResizeListener = function () {
            window.gigya.utils.DOM.removeEventListener(
              window,
              'resize',
              this.onWindowResizeEvent
            );
          };
          ModalDialog.prototype.onWindowResize = function () {
            if (this.isMobileUI) this.adjustWindowHeight();
          };
          ModalDialog.prototype.adjustWindowHeight = function () {
            document.documentElement.style.height = window.getComputedStyle(
              this._allContainer
            ).height;
          };
          ModalDialog.prototype.center = function () {
            if (this.isMobileUI) {
              this.adjustWindowHeight();
              this.addWindowResizeListener();
            } else {
              var restoreLoading = false;
              if (this.isLoading()) {
                this.hideLoading();
                restoreLoading = true;
              }
              if (
                layoutSprites_1.getStyle(this._allContainer, 'position') ==
                'absolute'
              ) {
                // legacy's center.
                var middleCenter =
                  window.gigya.utils.viewport.getMiddleCenter();
                var dialogWidth = this._allContainer.offsetWidth;
                var dialogHeight = this._allContainer.offsetHeight;
                var dialogTop = middleCenter.top - Math.floor(dialogHeight / 2);
                var dialogLeft =
                  middleCenter.left - Math.round(dialogWidth / 2);
                if (dialogTop < 10) dialogTop = 10;
                if (dialogLeft < 10) dialogLeft = 10;
                this._allContainer.style.top = dialogTop + 'px';
                this._allContainer.style.left = dialogLeft + 'px';
              } else {
                var vp = window.gigya.utils.viewport.getInnerSize();
                var top = Math.max(
                  0,
                  (vp.h - this._allContainer.clientHeight) / 2
                );
                var left = Math.max(
                  0,
                  (vp.w - this._allContainer.clientWidth) / 2
                );
                this._allContainer.style.top = top.toString() + 'px';
                this._allContainer.style.left = left.toString() + 'px';
              }
              if (restoreLoading) this.showLoading();
            }
            this.dispatchEvent('onAfterModalCenter');
          };
          ModalDialog.prototype.create = function (hide) {
            var _this = this;
            if (hide === void 0) {
              hide = true;
            }
            var _a;
            // Creating the new container
            var modalID = window.gigya.utils.DOM.getCenteredDivID(
              this._triggerMethod
            );
            if (this.params.newModal) modalID += new Date().getTime();
            this._allContainer =
              window.gigya.utils.DOM.createTopLevelDiv(modalID);
            if (hide) this.hideAll();
            this._allContainer.innerHTML = window.gigya.utils.templates.fill(
              this.params.modalTemplate,
              {
                modalID: modalID,
                title: this.params.captionText,
                closeImage: this.params.closeImage,
                overlayDisplay:
                  !this.isMobileUI && this.params.dimDialogBackground
                    ? 'block'
                    : 'none',
              }
            );
            // WCAG compliance.
            this._allContainer.setAttribute('role', 'dialog');
            this._allContainer.setAttribute(
              'aria-labelledby',
              'gigya-screen-dialog-caption-' + modalID
            );
            this._allContainer.setAttribute('tabindex', '-1');
            layoutCssFixerUtils_1.addCss(
              this.params.modalCss,
              undefined,
              false
            );
            this._mainContainer = window.gigya.utils.DOM.getElementsByClass(
              this._allContainer,
              this._dialogClasses.main
            )[0];
            this._captionContainer = window.gigya.utils.DOM.getElementsByClass(
              this._mainContainer,
              this._dialogClasses.caption
            )[0];
            (_a = this._captionContainer) === null || _a === void 0
              ? void 0
              : _a.removeAttribute('tabindex');
            // Adding modal events
            this._closeButtonElement =
              window.gigya.utils.DOM.getElementsByClass(
                this._mainContainer,
                this._dialogClasses.closeButton
              )[0];
            if (this._closeButtonElement) {
              window.gigya.utils.DOM.addEventListener(
                this._closeButtonElement,
                'click',
                function (event) {
                  window.gigya.utils.DOM.disableDefaultEventHandling(event);
                  _this.hideAll();
                  if (_this.params.onModalClose)
                    _this.params.onModalClose(
                      CloseReasons_1.CloseReasons.canceled
                    );
                }
              );
            }
            // Creating the plugin container and adding it to the modal
            this._contentContainer = window.gigya.utils.DOM.getElementsByClass(
              this._mainContainer,
              this._dialogClasses.content,
              true
            )[0];
            this._contentContainer.id =
              MODAL_CONTENT_CONTAINER_ID + '-' + this._triggerMethod;
            this._loader = new LoadDimmer_1.LoadDimmer(this._contentContainer);
            // Add the modal template
            if (this.isMobileUI) {
              //gigya.utils.DOM.addDialogBackListener(() => { this.close(CloseReasons.backButton); }); // canceled by clicking on the dialog close button at the top
              window.gigya.utils.DOM.addClassToElement(
                this._allContainer,
                this._dialogClasses.all_mobile
              );
              /// remove this asap.
              //var bodyStyle = window.getComputedStyle(document.body); /// we don't support mobile in ie8.
              //var outerHeight = document.body.offsetHeight + parseInt(bodyStyle.getPropertyValue("margin-top")) + parseInt(bodyStyle.getPropertyValue("margin-bottom"));
              //this._allContainer.style.minHeight = outerHeight + 'px';
            } else {
              window.gigya.utils.DOM.addClassToElement(
                this._allContainer,
                this._dialogClasses.all_web
              );
            }
            this.center();
          };
          ModalDialog.prototype.getMainContainer = function () {
            return this._mainContainer;
          };
          ModalDialog.prototype.getContentContainer = function () {
            return this._contentContainer;
          };
          ModalDialog.prototype.getCaptionContainer = function () {
            return this._captionContainer;
          };
          ModalDialog.prototype.getModalDialogContainer = function () {
            return this._allContainer;
          };
          ModalDialog.prototype.getLoadingIndicator = function () {
            return this._loader;
          };
          ModalDialog.prototype.dispose = function () {
            this.hideAll();
            if (this._allContainer && this._allContainer.parentElement)
              this._allContainer.parentElement.removeChild(this._allContainer);
            if (this._loader) {
              this._loader.dispose();
            }
            delete this.params;
            _super.prototype.dispose.call(this);
          };
          return ModalDialog;
        })(BaseObjectGlobal);
        exports.ModalDialog = ModalDialog;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/helpers/ModalDialogClasses.ts':
      /*!********************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/helpers/ModalDialogClasses.ts ***!
  \********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.dialogClasses = {
          document_mobile: 'gigya-mobile-modal-mode',
          all_web: 'gigya-screen-dialog',
          all_mobile:
            'gigya-screen-dialog-mobile' /* can't combine these two to one+mobile decorator, because of backwards compatability */,
          main: 'gigya-screen-dialog-main',
          caption: 'gigya-screen-dialog-caption',
          closeButton: 'gigya-screen-dialog-close',
          content: 'gigya-screen-dialog-inner',
        };
        exports.legacyDialogClasses = window.gigya.utils.object.clone(
          exports.dialogClasses
        );
        exports.legacyDialogClasses.main = exports.legacyDialogClasses.content;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/helpers/Poller.ts':
      /*!********************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/helpers/Poller.ts ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var PollerStartResult;
        (function (PollerStartResult) {
          PollerStartResult[(PollerStartResult['OK'] = 0)] = 'OK';
          PollerStartResult[(PollerStartResult['AlreadyStarted'] = 1)] =
            'AlreadyStarted';
        })(
          (PollerStartResult =
            exports.PollerStartResult || (exports.PollerStartResult = {}))
        );
        var Poller = /** @class */ (function () {
          function Poller(_logger) {
            if (_logger === void 0) {
              _logger =
                typeof console == 'object' && console.log
                  ? console.log
                  : function () {};
            }
            this._logger = _logger;
            this._intervalID = undefined;
            this._actions = [];
          }
          Poller.prototype.addActions = function () {
            var _this = this;
            var actions = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              actions[_i] = arguments[_i];
            }
            window.gigya.utils.array.forEach(actions, function (action) {
              _this._actions.push(action);
            });
          };
          Poller.prototype.hasActions = function () {
            return this._actions.length > 0;
          };
          Poller.prototype.start = function (interval, force) {
            var _this = this;
            if (force === void 0) {
              force = false;
            }
            if (this.isStarted()) {
              return PollerStartResult.AlreadyStarted;
            } else if (!this.hasActions && !force) {
              throw 'Poller has no actions to perform on interval';
            } else {
              this._intervalID = setInterval(function () {
                window.gigya.utils.array.forEach(
                  _this._actions,
                  function (action) {
                    if (action instanceof Function) action();
                    else action.act();
                  }
                );
              }, interval);
            }
          };
          Poller.prototype.stop = function () {
            if (this._intervalID) {
              clearInterval(this._intervalID);
              delete this._intervalID;
            }
          };
          Poller.prototype.isStarted = function () {
            return Boolean(this._intervalID);
          };
          Poller.prototype.dispose = function () {
            this.stop();
            for (var i in this._actions) {
              if (
                !(this._actions[i] instanceof Function) &&
                this._actions.hasOwnProperty(i)
              )
                this._actions[i].dispose();
            }
            delete this._actions;
            delete this._logger;
          };
          return Poller;
        })();
        exports.Poller = Poller;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/helpers/PollerActions.ts':
      /*!***************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/helpers/PollerActions.ts ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        Object.defineProperty(exports, '__esModule', { value: true });
        var tslib_1 = __webpack_require__(
          /*! tslib */ '../node_modules/tslib/tslib.es6.js'
        );
        var InvalidPropertyAction = /** @class */ (function () {
          function InvalidPropertyAction(_object, _propery, callback) {
            this._object = _object;
            this._propery = _propery;
            this.callback = callback;
          }
          InvalidPropertyAction.prototype.act = function () {
            if (!this._object[this._propery]) {
              this.callback();
            }
          };
          InvalidPropertyAction.prototype.dispose = function () {
            delete this._object;
            delete this.callback;
          };
          return InvalidPropertyAction;
        })();
        exports.InvalidPropertyAction = InvalidPropertyAction;
        var SizeChangeAction = /** @class */ (function () {
          function SizeChangeAction(callback) {
            this.callback = callback;
            this._last = { width: undefined, height: undefined };
          }
          SizeChangeAction.prototype.act = function () {
            var curr = this.getCurrSize();
            if (this.isChanged(this._last, curr))
              this.callback(this._last, curr);
            this._last = curr;
          };
          SizeChangeAction.prototype.dispose = function () {
            delete this.callback;
          };
          SizeChangeAction.prototype.getCurrSize = function () {
            /// abstract - override this.
            return undefined;
          };
          /// Virtual
          SizeChangeAction.prototype.isChanged = function (last, curr) {
            return (
              curr.width != this._last.width || curr.height != this._last.height
            );
          };
          return SizeChangeAction;
        })();
        exports.SizeChangeAction = SizeChangeAction;
        var ContainerSizeAction = /** @class */ (function (_super) {
          tslib_1.__extends(ContainerSizeAction, _super);
          function ContainerSizeAction(_container, callback) {
            var _this = _super.call(this, callback) || this;
            _this._container = _container;
            return _this;
          }
          ContainerSizeAction.prototype.getCurrSize = function () {
            return {
              width:
                this._container && this._container.style
                  ? this._container.clientWidth
                  : undefined,
              height:
                this._container && this._container.style
                  ? this._container.clientHeight
                  : undefined,
            };
          };
          ContainerSizeAction.prototype.dispose = function () {
            delete this._container;
            _super.prototype.dispose.call(this);
          };
          return ContainerSizeAction;
        })(SizeChangeAction);
        exports.ContainerSizeAction = ContainerSizeAction;
        var ViewportSizeAction = /** @class */ (function (_super) {
          tslib_1.__extends(ViewportSizeAction, _super);
          function ViewportSizeAction(callback) {
            return _super.call(this, callback) || this;
          }
          ViewportSizeAction.prototype.getCurrSize = function () {
            var viewport = window.gigya.utils.viewport.getInnerSize();
            var outerViewport = window.gigya.utils.viewport.getOuterSize();
            var orientation = window.gigya.utils.viewport.getOrientation();
            return {
              width: viewport.w,
              height: viewport.h,
              outerWidth: outerViewport.w,
              outerHeight: outerViewport.h,
              orientation: orientation,
            };
          };
          ViewportSizeAction.prototype.isChanged = function (last, curr) {
            return (
              _super.prototype.isChanged.call(this, last, curr) ||
              last.orientation != curr.orientation
            );
          };
          return ViewportSizeAction;
        })(SizeChangeAction);
        exports.ViewportSizeAction = ViewportSizeAction;

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/html/legacyModal.html':
      /*!************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/html/legacyModal.html ***!
  \************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports =
          '<div id="gigya-screen-dialog-page-overlay" style="display:${overlayDisplay}"></div>\n<div class="gigya-screen-dialog-inner">\n    <div class="gigya-screen-dialog-top">\n        <div class="gigya-screen-dialog-caption" id="gigya-screen-dialog-caption-${modalID}">$title</div>\n        <div class="gigya-screen-dialog-close"></div>\n    </div>\n</div>';

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/html/modal.html':
      /*!******************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/html/modal.html ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports =
          '<div id="gigya-screen-dialog-page-overlay" style="display:${overlayDisplay}"></div>\r\n<div class="gigya-screen-dialog-main">\r\n    <div class="gigya-screen-dialog-top">\r\n        <div class="gigya-screen-dialog-caption" tabindex="0" id="gigya-screen-dialog-caption-${modalID}">$title</div>\r\n        <div class="gigya-screen-dialog-close">\r\n            <a aria-label="close window" role="button" tabindex="0" >${closeImage}</a>\r\n        </div>\r\n    </div>\r\n    <div class="gigya-screen-dialog-inner">\r\n    </div>\r\n</div>\r\n';

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/html/modalCloseButton.html':
      /*!*****************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/html/modalCloseButton.html ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports =
          '<img src="${imgUrl}" alt="close" height="${imgHeight}" width="${imgWidth}" />\n';

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/index.ts':
      /*!***********************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/index.ts ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function (
          __webpack_provided_Object_dot_assign
        ) {
          Object.defineProperty(exports, '__esModule', { value: true });
          var BasePlugin = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/BasePlugin */ './src/core/Gigya.Js.Plugin/app/BasePlugin.ts'
          );
          var HtmlResources = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/HtmlResources */ './src/core/Gigya.Js.Plugin/app/HtmlResources.ts'
          );
          var CssResources = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/CssResources */ './src/core/Gigya.Js.Plugin/app/CssResources.ts'
          );
          var CloseReasons = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/CloseReasons */ './src/core/Gigya.Js.Plugin/app/CloseReasons.ts'
          );
          var PluginStyles = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/PluginStyles */ './src/core/Gigya.Js.Plugin/app/PluginStyles.ts'
          );
          var pluginTester = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/pluginTester */ './src/core/Gigya.Js.Plugin/app/pluginTester.ts'
          );
          var CollectionUtils = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/CollectionUtils */ './src/core/Gigya.Js.Plugin/app/CollectionUtils.ts'
          );
          var CssUtils = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/CssUtils */ './src/core/Gigya.Js.Plugin/app/CssUtils.ts'
          );
          var URLUtils = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/URLUtils */ './src/core/Gigya.Js.Plugin/app/URLUtils.ts'
          );
          var DOMUtils = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/DOMUtils */ './src/core/Gigya.Js.Plugin/app/DOMUtils.ts'
          );
          var defaultProcessor = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/defaultProcessor */ './src/core/Gigya.Js.Plugin/app/defaultProcessor.ts'
          );
          var AsyncManager = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/helpers/AsyncManager */ './src/core/Gigya.Js.Plugin/app/helpers/AsyncManager.ts'
          );
          var LoadDimmer = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/helpers/LoadDimmer */ './src/core/Gigya.Js.Plugin/app/helpers/LoadDimmer.ts'
          );
          var ModalDialog = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/helpers/ModalDialog */ './src/core/Gigya.Js.Plugin/app/helpers/ModalDialog.ts'
          );
          var ModalDialogClasses = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/helpers/ModalDialogClasses */ './src/core/Gigya.Js.Plugin/app/helpers/ModalDialogClasses.ts'
          );
          var Poller = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/helpers/Poller */ './src/core/Gigya.Js.Plugin/app/helpers/Poller.ts'
          );
          var PollerActions = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/helpers/PollerActions */ './src/core/Gigya.Js.Plugin/app/helpers/PollerActions.ts'
          );
          var IModalDialogParams = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/interfaces/IModalDialogParams */ './src/core/Gigya.Js.Plugin/app/interfaces/IModalDialogParams.ts'
          );
          var IPluginConfig = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/interfaces/IPluginConfig */ './src/core/Gigya.Js.Plugin/app/interfaces/IPluginConfig.ts'
          );
          var IPluginCSS = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/interfaces/IPluginCSS */ './src/core/Gigya.Js.Plugin/app/interfaces/IPluginCSS.ts'
          );
          var IPluginParams = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/interfaces/IPluginParams */ './src/core/Gigya.Js.Plugin/app/interfaces/IPluginParams.ts'
          );
          var IPluginTemplates = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/interfaces/IPluginTemplates */ './src/core/Gigya.Js.Plugin/app/interfaces/IPluginTemplates.ts'
          );
          var GigyaGlobalDate = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/general/date */ './src/core/Gigya.Js.Plugin/app/Utils/general/date.ts'
          );
          var arrayUtils = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/general/arrayUtils */ './src/core/Gigya.Js.Plugin/app/Utils/general/arrayUtils.ts'
          );
          var objectUtils = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/general/objectUtils */ './src/core/Gigya.Js.Plugin/app/Utils/general/objectUtils.ts'
          );
          var GigyaPluginUtilsLang = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/languages/language */ './src/core/Gigya.Js.Plugin/app/Utils/languages/language.ts'
          );
          var GigyaPluginUtilsAnimation = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/UI/animation */ './src/core/Gigya.Js.Plugin/app/Utils/UI/animation.ts'
          );
          var globalAnimation = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/UI/globalAnimation */ './src/core/Gigya.Js.Plugin/app/Utils/UI/globalAnimation.ts'
          );
          var animationService = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/UI/animationService */ './src/core/Gigya.Js.Plugin/app/Utils/UI/animationService.ts'
          );
          var DOM = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/UI/DOM */ './src/core/Gigya.Js.Plugin/app/Utils/UI/DOM.ts'
          );
          var GlobalDOM = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/UI/GlobalDOM */ './src/core/Gigya.Js.Plugin/app/Utils/UI/GlobalDOM.ts'
          );
          var DomAttributes = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/UI/DomAttributes */ './src/core/Gigya.Js.Plugin/app/Utils/UI/DomAttributes.ts'
          );
          var enableSafeCopy = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/UI/enableSafeCopy */ './src/core/Gigya.Js.Plugin/app/Utils/UI/enableSafeCopy.ts'
          );
          var layoutCss = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/UI/layoutCss */ './src/core/Gigya.Js.Plugin/app/Utils/UI/layoutCss.ts'
          );
          var layoutText = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/UI/layoutText */ './src/core/Gigya.Js.Plugin/app/Utils/UI/layoutText.ts'
          );
          var layoutTextFixer = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/UI/layoutTextFixer */ './src/core/Gigya.Js.Plugin/app/Utils/UI/layoutTextFixer.ts'
          );
          var layoutSprites = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/UI/layoutSprites */ './src/core/Gigya.Js.Plugin/app/Utils/UI/layoutSprites.ts'
          );
          var layoutCssFixerUtils = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/UI/layoutCssFixerUtils */ './src/core/Gigya.Js.Plugin/app/Utils/UI/layoutCssFixerUtils.ts'
          );
          var layoutStyles = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/UI/layoutStyles */ './src/core/Gigya.Js.Plugin/app/Utils/UI/layoutStyles.ts'
          );
          var resources = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/UI/resources */ './src/core/Gigya.Js.Plugin/app/Utils/UI/resources.ts'
          );
          var imagePositions = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/UI/imagePositions */ './src/core/Gigya.Js.Plugin/app/Utils/UI/imagePositions.ts'
          );
          var UIHelpers = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/UI/UIHelpers */ './src/core/Gigya.Js.Plugin/app/Utils/UI/UIHelpers.ts'
          );
          var UIPopup = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/UI/UIPopup */ './src/core/Gigya.Js.Plugin/app/Utils/UI/UIPopup.ts'
          );
          var xml = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/xml/xml */ './src/core/Gigya.Js.Plugin/app/Utils/xml/xml.ts'
          );
          var xmlResolver = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/xml/xmlResolver */ './src/core/Gigya.Js.Plugin/app/Utils/xml/xmlResolver.ts'
          );
          var defaultXmlProcessor = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/xml/defaultXmlProcessor */ './src/core/Gigya.Js.Plugin/app/Utils/xml/defaultXmlProcessor.ts'
          );
          var emailValidation = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/UI/validation/emailValidation */ './src/core/Gigya.Js.Plugin/app/Utils/UI/validation/emailValidation.ts'
          );
          var isInDomain = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/UI/validation/isInDomain */ './src/core/Gigya.Js.Plugin/app/Utils/UI/validation/isInDomain.ts'
          );
          var isEmail = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/UI/validation/isEmail */ './src/core/Gigya.Js.Plugin/app/Utils/UI/validation/isEmail.ts'
          );
          var UI = __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/UI/UI */ './src/core/Gigya.Js.Plugin/app/Utils/UI/UI.ts'
          );
          __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/PluginUtils0 */ './src/core/Gigya.Js.Plugin/app/PluginUtils0.ts'
          );
          __webpack_require__(
            /*! src/core/Gigya.Js.Plugin/app/Utils/UI/layout5 */ './src/core/Gigya.Js.Plugin/app/Utils/UI/layout5.ts'
          );
          if (!window.gigya._) {
            window.gigya._ = {};
          }
          if (!window.gigya._.plugins) {
            window.gigya._.plugins = {};
          }
          if (!window.gigya._.plugins.resources) {
            window.gigya._.plugins.resources = {};
          }
          if (!window.gigya._.plugins.resources.html) {
            window.gigya._.plugins.resources.html = {};
          }
          if (!window.gigya._.plugins.resources.html.base) {
            window.gigya._.plugins.resources.html.base = {};
          }
          if (!window.gigya._.plugins.resources.css) {
            window.gigya._.plugins.resources.css = {};
          }
          if (!window.gigya._.plugins.resources.css.base) {
            window.gigya._.plugins.resources.css.base = {};
          }
          if (!window.gigya._.plugins.utUtils) {
            window.gigya._.plugins.utUtils = {};
          }
          if (!window.gigya._.plugins.utils) {
            window.gigya._.plugins.utils = {};
          }
          if (!window.gigya._.plugins.utils.Collections) {
            window.gigya._.plugins.utils.Collections = {};
          }
          if (!window.gigya._.plugins.utils.css) {
            window.gigya._.plugins.utils.css = {};
          }
          if (!window.gigya._.plugins.utils.URL) {
            window.gigya._.plugins.utils.URL = {};
          }
          if (!window.gigya._.plugins.utils.DOM) {
            window.gigya._.plugins.utils.DOM = {};
          }
          if (!window['resolver']) {
            window['resolver'] = {};
          }
          var resolver = window['resolver'];
          if (!window.gigya._.plugins.modal) {
            window.gigya._.plugins.modal = {};
          }
          if (!window.gigya._.plugins.pollerActions) {
            window.gigya._.plugins.pollerActions = {};
          }
          if (!window.gigya.global) {
            window.gigya.global = {};
          }
          if (!window.gigya.global.date) {
            window.gigya.global.date = {};
          }
          if (!window.gigya.utils) {
            window.gigya.utils = {};
          }
          if (!window.gigya.utils.object) {
            window.gigya.utils.object = {};
          }
          if (!window.gigya.pluginUtils) {
            window.gigya.pluginUtils = {};
          }
          if (!window.gigya.pluginUtils.lang) {
            window.gigya.pluginUtils.lang = {};
          }
          if (!window.gigya.pluginUtils.animation) {
            window.gigya.pluginUtils.animation = {};
          }
          if (!window.gigya.services) {
            window.gigya.services = {};
          }
          if (!window.gigya.services.socialize) {
            window.gigya.services.socialize = {};
          }
          if (!window.gigya.pluginUtils.DOM) {
            window.gigya.pluginUtils.DOM = {};
          }
          if (!window.gigya.utils.DOM) {
            window.gigya.utils.DOM = {};
          }
          if (!window.gigya.pluginUtils.css) {
            window.gigya.pluginUtils.css = {};
          }
          if (!window.gigya.pluginUtils.layout) {
            window.gigya.pluginUtils.layout = {};
          }
          if (!window.gigya.pluginUtils.text) {
            window.gigya.pluginUtils.text = {};
          }
          if (!window.gigya.global.XMLUtils) {
            window.gigya.global.XMLUtils = {};
          }
          if (!window.gigya.global.resolver) {
            window.gigya.global.resolver = {};
          }
          if (!window.gigya.pluginUtils.validation) {
            window.gigya.pluginUtils.validation = {};
          }
          if (!window.gigya.pluginUtils.domain) {
            window.gigya.pluginUtils.domain = {};
          }
          __webpack_provided_Object_dot_assign(
            window.gigya._.plugins,
            BasePlugin,
            CloseReasons,
            PluginStyles,
            AsyncManager,
            LoadDimmer,
            IModalDialogParams,
            IPluginConfig,
            IPluginCSS,
            IPluginParams,
            IPluginTemplates
          );
          __webpack_provided_Object_dot_assign(
            window.gigya._.plugins.resources.html.base,
            HtmlResources
          );
          __webpack_provided_Object_dot_assign(
            window.gigya._.plugins.resources.css.base,
            CssResources
          );
          __webpack_provided_Object_dot_assign(
            window.gigya._.plugins.utUtils,
            pluginTester
          );
          __webpack_provided_Object_dot_assign(
            window.gigya._.plugins.utils.Collections,
            CollectionUtils
          );
          __webpack_provided_Object_dot_assign(
            window.gigya._.plugins.utils.css,
            CssUtils,
            layoutCssFixerUtils
          );
          __webpack_provided_Object_dot_assign(
            window.gigya._.plugins.utils.URL,
            URLUtils,
            UIHelpers
          );
          __webpack_provided_Object_dot_assign(
            window.gigya._.plugins.utils.DOM,
            DOMUtils,
            DomAttributes
          );
          __webpack_provided_Object_dot_assign(resolver, defaultProcessor);
          __webpack_provided_Object_dot_assign(
            window.gigya._.plugins.modal,
            ModalDialog,
            ModalDialogClasses
          );
          __webpack_provided_Object_dot_assign(window.gigya._, Poller);
          __webpack_provided_Object_dot_assign(
            window.gigya._.plugins.pollerActions,
            PollerActions
          );
          __webpack_provided_Object_dot_assign(
            window.gigya.global.date,
            GigyaGlobalDate
          );
          __webpack_provided_Object_dot_assign(
            window.gigya.global,
            arrayUtils,
            globalAnimation,
            GlobalDOM,
            layoutSprites,
            imagePositions,
            xmlResolver,
            isEmail
          );
          __webpack_provided_Object_dot_assign(
            window.gigya.utils.object,
            objectUtils
          );
          __webpack_provided_Object_dot_assign(
            window.gigya.pluginUtils.lang,
            GigyaPluginUtilsLang
          );
          __webpack_provided_Object_dot_assign(
            window.gigya.pluginUtils.animation,
            GigyaPluginUtilsAnimation
          );
          __webpack_provided_Object_dot_assign(
            window.gigya.services.socialize,
            animationService,
            layoutStyles,
            UIPopup
          );
          __webpack_provided_Object_dot_assign(
            window.gigya.pluginUtils.DOM,
            DOM
          );
          __webpack_provided_Object_dot_assign(
            window.gigya.utils.DOM,
            enableSafeCopy
          );
          __webpack_provided_Object_dot_assign(
            window.gigya.pluginUtils.css,
            layoutCss
          );
          __webpack_provided_Object_dot_assign(
            window.gigya.pluginUtils.layout,
            layoutText
          );
          __webpack_provided_Object_dot_assign(
            window.gigya.pluginUtils.text,
            layoutTextFixer
          );
          __webpack_provided_Object_dot_assign(
            window.gigya._.plugins.resources,
            resources
          );
          __webpack_provided_Object_dot_assign(
            window.gigya.global.XMLUtils,
            xml
          );
          __webpack_provided_Object_dot_assign(
            window.gigya.global.resolver,
            defaultXmlProcessor
          );
          __webpack_provided_Object_dot_assign(
            window.gigya.pluginUtils.validation,
            emailValidation
          );
          __webpack_provided_Object_dot_assign(
            window.gigya.pluginUtils.domain,
            isInDomain
          );
          window.gigya.utils.object.add(window.gigya.pluginUtils.lang, {
            getDateString: function (widgetParams, date) {
              if (!widgetParams || !widgetParams['dateFormat']) return;
              var monthNames = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
              ];
              var dateFormat = widgetParams['dateFormat'];
              var d = date.getDate();
              var m = date.getMonth() + 1;
              var monthName = monthNames[date.getMonth()];
              var y = date.getFullYear();
              return dateFormat
                .replace(/%dd/g, ('0' + d).slice(-2))
                .replace(/%d/g, d)
                .replace(/%MMMM/g, monthName)
                .replace(/%MMM/g, monthName.substr(0, 3))
                .replace(/%MM/g, ('0' + m).slice(-2))
                .replace(/%M/g, m)
                .replace(/%yyyy/g, y)
                .replace(/%yy/g, y.toString().slice(-2));
            },
          });
          if (!window.gigya.socialize) {
            window.gigya.socialize = {};
          }
          __webpack_provided_Object_dot_assign(window.gigya.socialize, UI);

          /* WEBPACK VAR INJECTION */
        }).call(
          this,
          __webpack_require__(
            /*! tslib */ '../node_modules/tslib/tslib.es6.js'
          )['__assign']
        );

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/interfaces/IModalDialogParams.ts':
      /*!***********************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/interfaces/IModalDialogParams.ts ***!
  \***********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/interfaces/IPluginCSS.ts':
      /*!***************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/interfaces/IPluginCSS.ts ***!
  \***************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/interfaces/IPluginConfig.ts':
      /*!******************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/interfaces/IPluginConfig.ts ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/interfaces/IPluginParams.ts':
      /*!******************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/interfaces/IPluginParams.ts ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/interfaces/IPluginTemplates.ts':
      /*!*********************************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/interfaces/IPluginTemplates.ts ***!
  \*********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });

        /***/
      },

    /***/ './src/core/Gigya.Js.Plugin/app/pluginTester.ts':
      /*!******************************************************!*\
  !*** ./src/core/Gigya.Js.Plugin/app/pluginTester.ts ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        Object.defineProperty(exports, '__esModule', { value: true });
        (function mockBasePlugin(destination) {
          if (!destination.gigya) destination.gigya = {};
          if (!destination.gigya._) destination.gigya._ = {};
          if (!destination.gigya._.plugins) destination.gigya._.plugins = {};
          if (!destination.gigya._.plugins.BasePlugin) {
            destination.gigya._.plugins.BasePlugin = function (p, t, c) {};
            destination.gigya._.plugins.BasePlugin.isMock = true;
          }
        })(window);
        var PluginTester = /** @class */ (function () {
          function PluginTester(pluginType, defaultContainerID, injectionInfo) {
            var _this = this;
            if (defaultContainerID === void 0) {
              defaultContainerID = null;
            }
            this.defaultContainerID = defaultContainerID;
            this._instanceCount = 0;
            this.injector = new Map();
            this.disposeInstanceAfterTest = true;
            this.neverInit = false;
            beforeAll(function (done) {
              window.gigya.boot.ensureJsSdkLoaded(
                PluginTester.apiKey,
                function () {
                  if (!injectionInfo) {
                    injectionInfo = pluginType['injectionInfo']();
                  }
                  _this._loadPlugin = PluginTester.getLoadFunc(injectionInfo);
                  if (!_this.defaultContainerID) {
                    var container = document.createElement('div');
                    container.id = injectionInfo.name + 'Ut';
                    document.body.appendChild(container);
                  }
                  done();
                }
              );
            });
            afterEach(function (done) {
              if (_this._instance && _this.disposeInstanceAfterTest) {
                _this._instance.dispose();
                delete _this._instance;
              }
              done();
            });
          }
          PluginTester.prototype.getInstance = function (
            params,
            templates,
            css,
            callback
          ) {
            var _this = this;
            if (this._instance) {
              if (callback) {
                callback(this._instance);
              }
            } else {
              this.loadNewInstance(params, templates, css, function (instance) {
                _this._instance = instance;
                PluginTester.setMocks(_this._instance, _this.injector);
                if (callback) {
                  callback(_this._instance);
                }
              });
            }
          };
          PluginTester.setMocks = function (instance, injector) {
            injector.forEach(function (v, k) {
              if (typeof instance[k] !== 'undefined') {
                instance[k] = v;
              }
            });
          };
          PluginTester.prototype.isInstanceLoaded = function () {
            return Boolean(this._instance);
          };
          PluginTester.prototype.loadNewInstance = function (
            params,
            templates,
            css,
            callback
          ) {
            if (!params) {
              params = {};
            }
            var originalGetInstance = params.getInstance;
            var onPluginLoaded = function (instance) {
              if (originalGetInstance) originalGetInstance(instance);
              if (callback) callback(instance);
            };
            params.getInstance = onPluginLoaded;
            if (this.neverInit && typeof params._noInit == 'undefined')
              params._noInit = true;
            if (!params.containerID)
              params.containerID = this.defaultContainerID;
            params['utInstanceCount'] = ++this._instanceCount;
            this._loadPlugin(params, templates, css);
          };
          PluginTester.getLoadFunc = function (injectionInfo) {
            var funcName =
              'gigya.' +
              window.gigya._.UiApi.getApiName(
                injectionInfo.jsName,
                injectionInfo.methodName
              );
            var func = eval(funcName);
            if (!func) {
              if (typeof console == 'object' && console.warn) {
                console.warn(
                  injectionInfo.name +
                    "'s method could not be found in the api-list: " +
                    funcName
                );
              }
            }
            return func;
          };
          PluginTester.apiKey =
            '3_9mGTgVStj1nTVaUGCQsP4GSNLl6gsHSoTSzd1MdhZ4cjDrYqKYra3fxqfAO5CFSE';
          return PluginTester;
        })();
        exports.PluginTester = PluginTester;

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

    /***/ './src/core/Gigya.Js/app/Utils/keyboard.ts':
      /*!*************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/keyboard.ts ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var _a;
        Object.defineProperty(exports, '__esModule', { value: true });
        var DOMUtils = __webpack_require__(
          /*! src/core/Gigya.Js/app/Utils/DOM */ './src/core/Gigya.Js/app/Utils/DOM.ts'
        );
        var Keys;
        (function (Keys) {
          Keys[(Keys['escape'] = 27)] = 'escape';
          Keys[(Keys['backspace'] = 8)] = 'backspace';
          Keys[(Keys['enter'] = 13)] = 'enter';
        })((Keys = exports.Keys || (exports.Keys = {})));
        exports.keyCodes =
          ((_a = {}),
          (_a[Keys.escape] = 'Escape'),
          (_a[Keys.backspace] = 'Backspace'),
          (_a[Keys.enter] = 'Enter'),
          _a);
        function onHotKeyClicked(hotKeyData, handler) {
          return new HotKeyEvent(hotKeyData, handler);
        }
        exports.onHotKeyClicked = onHotKeyClicked;
        var HotKeyEvent = /** @class */ (function () {
          function HotKeyEvent(hotKeyData, handler) {
            this.el = hotKeyData.elementContext
              ? hotKeyData.elementContext
              : document.body;
            this.eventHandler = function (event) {
              if (
                event.which === hotKeyData.key ||
                event.key === exports.keyCodes[hotKeyData.key]
              ) {
                handler();
              }
            };
            DOMUtils.addEventListener(this.el, 'keyup', this.eventHandler);
          }
          HotKeyEvent.prototype.unsubscribe = function () {
            DOMUtils.removeEventListener(this.el, 'keyup', this.eventHandler);
          };
          return HotKeyEvent;
        })();

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

    /******/
  }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpTLlBsdWdpbi5zY3JlZW5TZXQyL2FwcC9zdHlsZS9kZWZhdWx0Q1NTLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2Nzcy9sZWdhY3lfbW9kYWwuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvY3NzL21vZGVybl9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL0dpZ3lhLkpTLlBsdWdpbi5zY3JlZW5TZXQyL2FwcC9zdHlsZS9kZWZhdWx0Q1NTLmNzcz85YTQ2Iiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvQmFzZVBsdWdpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL0Nsb3NlUmVhc29ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL0NvbGxlY3Rpb25VdGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL0Nzc1Jlc291cmNlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL0Nzc1V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvRE9NVXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9IdG1sUmVzb3VyY2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvUGx1Z2luU3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvUGx1Z2luVXRpbHMwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVVJMVXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9ET00udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9Eb21BdHRyaWJ1dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvR2xvYmFsRE9NLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvVUkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9VSUhlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9VSVBvcHVwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvYW5pbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvYW5pbWF0aW9uU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL2VuYWJsZVNhZmVDb3B5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvZ2xvYmFsQW5pbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvaW1hZ2VQb3NpdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9sYXlvdXQ1LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvbGF5b3V0Q3NzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvbGF5b3V0Q3NzRml4ZXJVdGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL2xheW91dFNwcml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9sYXlvdXRTdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9sYXlvdXRUZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvbGF5b3V0VGV4dEZpeGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvcmVzb3VyY2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvdmFsaWRhdGlvbi9lbWFpbFZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS92YWxpZGF0aW9uL2lzRW1haWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS92YWxpZGF0aW9uL2lzSW5Eb21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9nZW5lcmFsL2FycmF5VXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9nZW5lcmFsL2RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9nZW5lcmFsL29iamVjdFV0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvbGFuZ3VhZ2VzL2xhbmd1YWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMveG1sL2RlZmF1bHRYbWxQcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy94bWwveG1sLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMveG1sL3htbFJlc29sdmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvY3NzL2xlZ2FjeV9tb2RhbC5jc3M/YTQ4NiIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2Nzcy9tb2Rlcm5fbW9kYWwuY3NzP2E4MTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9kZWZhdWx0UHJvY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaGVscGVycy9Bc3luY01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9oZWxwZXJzL0xvYWREaW1tZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9oZWxwZXJzL01vZGFsRGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaGVscGVycy9Nb2RhbERpYWxvZ0NsYXNzZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9oZWxwZXJzL1BvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2hlbHBlcnMvUG9sbGVyQWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2h0bWwvbGVnYWN5TW9kYWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2h0bWwvbW9kYWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2h0bWwvbW9kYWxDbG9zZUJ1dHRvbi5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9wbHVnaW5UZXN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL0dTRXJyb3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2NhbEluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1NlcnZpY2VzL0ZsYWdTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9ET00udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMva2V5Ym9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3ZpZXdwb3J0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9jZG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUhBQStEO0FBQ3pHO0FBQ0E7QUFDQSxjQUFjLFFBQVMseUJBQXlCLHNCQUFzQixtQkFBbUIscUJBQXFCLG9CQUFvQix1QkFBdUIsR0FBRywyQkFBMkIsc0JBQXNCLG1CQUFtQixxQkFBcUIsb0JBQW9CLHVCQUF1QixHQUFHLHFDQUFxQyx1QkFBdUIsR0FBRyx5Q0FBeUMsbUJBQW1CLEdBQUcsdUJBQXVCLDBCQUEwQixHQUFHLGtEQUFrRCxnQkFBZ0IsR0FBRyxlQUFlLHVCQUF1QixHQUFHLHNKQUFzSixpQkFBaUIsaUJBQWlCLGdCQUFnQixtQkFBbUIsMEJBQTBCLGdCQUFnQixnQkFBZ0IsMEJBQTBCLHFCQUFxQix1QkFBdUIsb0JBQW9CLG1CQUFtQixxQkFBcUIsR0FBRyxvQ0FBb0MsbUJBQW1CLG9CQUFvQixtQkFBbUIsdUJBQXVCLEdBQUcsMkRBQTJELG1CQUFtQixvQkFBb0IsbUJBQW1CLHdCQUF3QixHQUFHLDZDQUE2Qyw4QkFBOEIsR0FBRyxtUUFBbVEsaUJBQWlCLHVCQUF1Qiw4QkFBOEIsd0NBQXdDLHFDQUFxQyxnQ0FBZ0MsR0FBRyxzSEFBc0gsaUJBQWlCLHVCQUF1Qix5Q0FBeUMsd0NBQXdDLHFDQUFxQyxnQ0FBZ0MsR0FBRywwR0FBMEcsZUFBZSxHQUFHLGtFQUFrRSw4QkFBOEIsbUJBQW1CLDBCQUEwQixHQUFHLHVDQUF1Qyx1QkFBdUIscUJBQXFCLG9CQUFvQixvQkFBb0IsNkJBQTZCLGVBQWUsR0FBRyx5Q0FBeUMscUJBQXFCLG1CQUFtQixpQkFBaUIsb0JBQW9CLEdBQUcsc0RBQXNELDhCQUE4QixRQUFRLGdDQUFnQyxpQkFBaUIsZ0JBQWdCLGVBQWUsR0FBRyx1REFBdUQsOEJBQThCLFFBQVEsOEJBQThCLGlCQUFpQixnQkFBZ0IsY0FBYyxHQUFHLDBEQUEwRCw4QkFBOEIsUUFBUSxpQ0FBaUMsaUJBQWlCLGdCQUFnQixlQUFlLEdBQUcseURBQXlELDhCQUE4QixRQUFRLGdDQUFnQyxpQkFBaUIsZ0JBQWdCLGNBQWMsR0FBRyxzREFBc0QsOEJBQThCLCtCQUErQiw0QkFBNEIsdUJBQXVCLDhCQUE4Qiw4REFBOEQsMkRBQTJELHNEQUFzRCxHQUFHLGtEQUFrRCx1QkFBdUIsR0FBRyxpRUFBaUUsZ0JBQWdCLGNBQWMsR0FBRyxrRUFBa0UsZ0JBQWdCLGNBQWMsR0FBRywrREFBK0QsZUFBZSxlQUFlLEdBQUcsaUVBQWlFLGVBQWUsZUFBZSxHQUFHLGtDQUFrQyx1QkFBdUIsR0FBRyxzQ0FBc0Msc0JBQXNCLDBCQUEwQixHQUFHLGtEQUFrRCx1QkFBdUIsZ0JBQWdCLG9CQUFvQixHQUFHLDJDQUEyQyxxQkFBcUIsR0FBRyx3RUFBd0UsbUJBQW1CLEdBQUcsa0VBQWtFLG1CQUFtQixHQUFHLGtFQUFrRSxtQkFBbUIsR0FBRyxvRUFBb0UsbUJBQW1CLEdBQUcseUVBQXlFLG1CQUFtQixHQUFHLG9DQUFvQyxnQkFBZ0IsZ0JBQWdCLDhCQUE4QixvQkFBb0IsR0FBRyw2Q0FBNkMsZUFBZSxpQkFBaUIsOEJBQThCLEdBQUcseUNBQXlDLGVBQWUsaUJBQWlCLDhCQUE4QixHQUFHLHlDQUF5QyxlQUFlLGlCQUFpQiw4QkFBOEIsR0FBRywyQ0FBMkMsZUFBZSxpQkFBaUIsOEJBQThCLEdBQUcsZ0RBQWdELGdCQUFnQixpQkFBaUIsOEJBQThCLEdBQUcsMkJBQTJCLGtDQUFrQywyQkFBMkIsdUJBQXVCLDBCQUEwQiw0QkFBNEIsR0FBRyw2Q0FBNkMscUJBQXFCLHFCQUFxQixrQkFBa0Isa0JBQWtCLEdBQUcsOENBQThDLHFCQUFxQixrQkFBa0IsR0FBRyxrREFBa0QscUJBQXFCLHNCQUFzQixrQkFBa0IsbUJBQW1CLEdBQUcseUNBQXlDLHFCQUFxQixzQkFBc0Isa0JBQWtCLG1CQUFtQixHQUFHLHlCQUF5QixrQkFBa0IsR0FBRyxpREFBaUQsbUJBQW1CLEdBQUcsb0NBQW9DLHNCQUFzQixpQ0FBaUMscUNBQXFDLEdBQUcsOENBQThDLHVCQUF1Qiw4QkFBOEIsUUFBUSxvQkFBb0IsbUJBQW1CLEdBQUcsa0RBQWtELHVCQUF1Qiw4QkFBOEIsUUFBUSx1QkFBdUIsbUJBQW1CLEdBQUcsNkNBQTZDLHVCQUF1Qiw4QkFBOEIsUUFBUSw2QkFBNkIsbUJBQW1CLEdBQUcsNkJBQTZCLHVCQUF1QixHQUFHLG1EQUFtRCxvQkFBb0IscUJBQXFCLEdBQUcsNkJBQTZCLHVCQUF1QixpQkFBaUIsa0NBQWtDLDhCQUE4QixHQUFHLDZCQUE2Qix1QkFBdUIsb0NBQW9DLFFBQVEsbURBQW1ELHFCQUFxQixvQkFBb0IsR0FBRyxxQ0FBcUMsbUJBQW1CLGtCQUFrQixHQUFHLCtFQUErRSxlQUFlLEdBQUcsa0RBQWtELGdCQUFnQixHQUFHLCtCQUErQixrQkFBa0IsR0FBRyw0QkFBNEIsaUJBQWlCLGlCQUFpQixZQUFZLEdBQUcsbUNBQW1DLDBCQUEwQixZQUFZLHdCQUF3Qix3QkFBd0IsOEJBQThCLG9CQUFvQixvQkFBb0IsbUJBQW1CLHNCQUFzQix1QkFBdUIsc0JBQXNCLHdCQUF3QiwyR0FBMkcsNEZBQTRGLDREQUE0RCxHQUFHLHlDQUF5Qyx3QkFBd0IsMkdBQTJHLDRGQUE0Riw0REFBNEQsR0FBRyxpQ0FBaUMsb0JBQW9CLG1CQUFtQixHQUFHLGtDQUFrQyx1QkFBdUIsdUNBQXVDLGlDQUFpQyxnQkFBZ0IsaUJBQWlCLDhCQUE4QixnQkFBZ0Isc0JBQXNCLEdBQUcsaUNBQWlDLHdCQUF3QixpQkFBaUIsMkJBQTJCLDRCQUE0QixxQkFBcUIsd0JBQXdCLCtCQUErQixpQ0FBaUMsMEJBQTBCLHFCQUFxQixZQUFZLHdCQUF3QixHQUFHLDZCQUE2QixxQ0FBcUMsb0JBQW9CLHNCQUFzQixnQkFBZ0Isd0JBQXdCLHFCQUFxQixtQkFBbUIsR0FBRywwQkFBMEIsa0JBQWtCLEdBQUcscURBQXFELG1CQUFtQixHQUFHLG1CQUFtQiw2QkFBNkIsR0FBRyxtREFBbUQsb0JBQW9CLGlCQUFpQix1QkFBdUIsOEJBQThCLEdBQUcsK0dBQStHLDBCQUEwQixHQUFHLHVDQUF1Qyw4QkFBOEIsUUFBUSxpQ0FBaUMsZ0NBQWdDLCtCQUErQiwwQ0FBMEMsaUNBQWlDLHdCQUF3QixHQUFHLG1EQUFtRCwyQkFBMkIsdUJBQXVCLEdBQUcseUNBQXlDLDhCQUE4QixRQUFRLG1DQUFtQyxnQ0FBZ0MsK0JBQStCLDBDQUEwQyxpQ0FBaUMsd0JBQXdCLEdBQUcsNEZBQTRGLHFCQUFxQixHQUFHLGdCQUFnQixpQ0FBaUMsNEJBQTRCLGdDQUFnQyxxQkFBcUIsR0FBRyw4Q0FBOEMsNkJBQTZCLEdBQUcsMkRBQTJELCtCQUErQixHQUFHLHlEQUF5RCwrQkFBK0IsR0FBRyxrREFBa0QsK0JBQStCLEdBQUcsNENBQTRDLHFCQUFxQixpQ0FBaUMsR0FBRyxvRkFBb0Ysa0JBQWtCLEdBQUcsOERBQThELGlCQUFpQixrQkFBa0IsR0FBRyx1Q0FBdUMscUJBQXFCLEdBQUcsOENBQThDLHFCQUFxQixHQUFHLCtDQUErQyxtQkFBbUIsc0JBQXNCLG1CQUFtQixHQUFHLHVDQUF1QyxzQkFBc0IsR0FBRyxvREFBb0Qsc0JBQXNCLG1CQUFtQixHQUFHLHNHQUFzRyxzQkFBc0IsR0FBRyxvSEFBb0gscUJBQXFCLG1CQUFtQix3QkFBd0IsR0FBRyw2R0FBNkcsd0NBQXdDLDhCQUE4Qix3QkFBd0IscUJBQXFCLEdBQUcsK0lBQStJLG1CQUFtQixxQkFBcUIsbUJBQW1CLHdCQUF3QixLQUFLLHVIQUF1SCxxQkFBcUIsR0FBRywyVEFBMlQsd0JBQXdCLEdBQUcsOEhBQThILGtCQUFrQixHQUFHLHVEQUF1RCxtQkFBbUIsR0FBRyw2RkFBNkYsaUJBQWlCLEdBQUcsZ0ZBQWdGLDJCQUEyQixHQUFHLG1HQUFtRyxxQ0FBcUMsR0FBRyxpR0FBaUcsc0JBQXNCLEdBQUcsdUZBQXVGLHFCQUFxQiw2QkFBNkIsbUJBQW1CLGtCQUFrQixvQkFBb0IsR0FBRyw4RkFBOEYsa0JBQWtCLEdBQUcsa0NBQWtDLG1CQUFtQixvQkFBb0IseUJBQXlCLDBCQUEwQixHQUFHLHlEQUF5RCxtQ0FBbUMsb0JBQW9CLEdBQUcsdUNBQXVDLDBCQUEwQixvQkFBb0IsR0FBRywwQ0FBMEMsbUJBQW1CLG9CQUFvQixHQUFHLGFBQWEsa0JBQWtCLEdBQUcsNEJBQTRCLG1DQUFtQyxHQUFHLGlDQUFpQywyQkFBMkIsR0FBRyw2QkFBNkIsMEJBQTBCLEdBQUcsbUVBQW1FLDJCQUEyQixHQUFHLGdDQUFnQywwQkFBMEIsR0FBRyx1Q0FBdUMseUJBQXlCLDZDQUE2QyxHQUFHLHlCQUF5QiwwQkFBMEIsR0FBRyw0QkFBNEIsMkJBQTJCLDRCQUE0QixHQUFHLHVQQUF1UCx5Q0FBeUMsNkJBQTZCLDZDQUE2QyxHQUFHLDJIQUEySCxnQkFBZ0IsaUJBQWlCLDhCQUE4QixRQUFRLGlDQUFpQyxnQ0FBZ0MsK0JBQStCLGlDQUFpQyxHQUFHO0FBQ3ZtZjtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFIQUErRDtBQUN6RztBQUNBO0FBQ0EsY0FBYyxRQUFTLGtEQUFrRCx5QkFBeUIsNEJBQTRCLGdCQUFnQixpQkFBaUIsZ0NBQWdDLHlCQUF5QixnQ0FBZ0Msb0JBQW9CLEdBQUcsbUNBQW1DLGdDQUFnQyxHQUFHLG1DQUFtQyx3QkFBd0IsbUJBQW1CLGtCQUFrQixtQkFBbUIsc0JBQXNCLCtCQUErQixRQUFRLDZCQUE2QixpQ0FBaUMsbUNBQW1DLEdBQUcscUNBQXFDLGtCQUFrQix3QkFBd0Isc0JBQXNCLHlCQUF5QixHQUFHLG9DQUFvQyx5QkFBeUIsNEJBQTRCLGFBQWEsY0FBYyxnQ0FBZ0Msa0JBQWtCLEdBQUcsaUNBQWlDLHVCQUF1QixjQUFjLGdDQUFnQyx3QkFBd0IsNkJBQTZCLEdBQUcsdUNBQXVDLHdCQUF3Qix5QkFBeUIsNkJBQTZCLDJCQUEyQixrQkFBa0IsbUJBQW1CLHVCQUF1QixxQ0FBcUMsd0JBQXdCLE9BQU87QUFDajBDO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUhBQStEO0FBQ3pHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsNEVBQTRFLG1CQUFtQixvQkFBb0Isd0JBQXdCLHNCQUFzQixhQUFhLGNBQWMsa0JBQWtCLGdDQUFnQyxtQkFBbUIsR0FBRyxzREFBc0Qsb0JBQW9CLHlCQUF5QixvQ0FBb0MsNkRBQTZELDBEQUEwRCxxREFBcUQsdUJBQXVCLHNCQUFzQixxQkFBcUIsR0FBRyxxREFBcUQsdUJBQXVCLGNBQWMsZ0NBQWdDLHdCQUF3Qiw2QkFBNkIscUNBQXFDLEdBQUcsdURBQXVELGdDQUFnQyxtQ0FBbUMsaUNBQWlDLG1CQUFtQixzQkFBc0IsR0FBRyx3REFBd0QsbUJBQW1CLEdBQUcsK0RBQStELHVCQUF1Qiw4QkFBOEIsa0JBQWtCLGtCQUFrQixHQUFHLHlEQUF5RCxrQkFBa0Isc0JBQXNCLHlCQUF5QixxQkFBcUIsMEJBQTBCLEdBQUcsdURBQXVELG1CQUFtQix1QkFBdUIsc0JBQXNCLHVCQUF1Qiw4QkFBOEIsR0FBRyxpREFBaUQseUJBQXlCLG1CQUFtQixnQ0FBZ0MsZ0NBQWdDLEdBQUcsaURBQWlELHlCQUF5QixzQ0FBc0MsUUFBUSxtREFBbUQsdUJBQXVCLHNCQUFzQixHQUFHLDZDQUE2QyxzQkFBc0IsbUJBQW1CLEdBQUcsb0RBQW9ELHlCQUF5Qiw0QkFBNEIsYUFBYSxjQUFjLDhCQUE4QixrQkFBa0IsbUJBQW1CLEdBQUcsaUZBQWlGLHdCQUF3Qix1QkFBdUIsMEJBQTBCLEdBQUcsZ0ZBQWdGLHNCQUFzQixlQUFlLHlCQUF5Qix3QkFBd0IsNkJBQTZCLGtCQUFrQixpQkFBaUIsR0FBRyxvRkFBb0Ysc0JBQXNCLEdBQUcsNEZBQTRGLHNCQUFzQixHQUFHLGtGQUFrRixrQkFBa0IsdUJBQXVCLDZCQUE2QixHQUFHLHdGQUF3RixxQkFBcUIsR0FBRyw4S0FBOEsseUJBQXlCLEdBQUcsa0VBQWtFLHFCQUFxQixHQUFHLHFFQUFxRSxrQkFBa0IsbUJBQW1CLEdBQUcsa0NBQWtDLHVCQUF1QixHQUFHLHFDQUFxQyxrQkFBa0IsdUJBQXVCLEdBQUc7QUFDcHFIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM3RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLHlCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTs7QUFFTztBQUNQO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBOztBQUVPO0FBQ1AsZUFBZSxvQ0FBYTtBQUM1QixnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGNBQWM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBOztBQUVPO0FBQ1AsbUNBQW1DLG9DQUFvQztBQUN2RTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUCwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUcsMEJBQTBCLGFBQU87QUFDakMsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTSxnQkFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBOztBQUVPO0FBQ1AsaURBQWlELFFBQVE7QUFDekQsd0NBQXdDLFFBQVE7QUFDaEQsd0RBQXdELFFBQVE7QUFDaEU7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxpQkFBaUIsc0ZBQXNGLGFBQWEsRUFBRTtBQUN0SCxzQkFBc0IsZ0NBQWdDLFlBQVksYUFBTyxrQkFBa0IsMENBQTBDLEVBQUUsRUFBRSxHQUFHO0FBQzVJLDJCQUEyQixNQUFNLGVBQWUsRUFBRSxZQUFZLG9CQUFvQixFQUFFO0FBQ3BGLHNCQUFzQiw4QkFBOEIsYUFBTywrREFBK0Q7QUFDMUgsNkJBQTZCLHVCQUF1QjtBQUNwRCw0QkFBNEIsd0JBQXdCO0FBQ3BELDJCQUEyQix5REFBeUQ7QUFDcEY7O0FBRU87QUFDUDtBQUNBLGlCQUFpQiw0Q0FBNEMsU0FBUyxFQUFFLHFEQUFxRCxhQUFhLEVBQUU7QUFDNUkseUJBQXlCLDZCQUE2QixvQkFBb0IsZ0RBQWdELGdCQUFnQixFQUFFLEtBQUs7QUFDako7O0FBRU87QUFDUDtBQUNBO0FBQ0EsMkdBQTJHLHNGQUFzRixhQUFhLEVBQUU7QUFDaE4sc0JBQXNCLDhCQUE4QixZQUFZLGFBQU8sNkJBQTZCLHVEQUF1RCxFQUFFLEVBQUUsR0FBRztBQUNsSyw0Q0FBNEMsQ0FBQyxhQUFPLDhCQUE4QixVQUFVLG9CQUFvQixFQUFFLEVBQUUsVUFBVTtBQUM5SDs7QUFFTztBQUNQLGdDQUFnQyx1Q0FBdUMsYUFBYSxFQUFFLEVBQUUsT0FBTyxrQkFBa0I7QUFDakg7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDRDQUE0QztBQUM1Qzs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbk5BLHFCQUFxQixtQkFBTyxDQUFDLDBMQUEwRTs7QUFFdkc7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBLHlKQUErRTtBQUMvRSw0SUFBNkY7QUFDN0Ysc0pBQTZFO0FBRTdFLDBJQUFxRTtBQUNyRSxxSkFBdUY7QUFDdkYsK0pBQW9JO0FBQ3BJLG1JQUEyRjtBQUMzRiw0SUFBeUU7QUFDekUsZ0lBQStEO0FBQy9ELGdLQUF5RjtBQUN6RiwrR0FBdUQ7QUFDdkQsMkhBQThFO0FBQzlFLDZJQUF1RTtBQUUxRCxnQkFBUSxHQUFxQyxFQUFFLENBQUM7QUFDN0Q7SUFBNkcsc0NBQWlDO0lBa0QxSSxlQUFlO0lBQ2Ysb0JBQW1CLE1BQVMsRUFBUyxjQUFpQixFQUFTLGFBQTZCO1FBQTVGLFlBQ0ksa0JBQU0sTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsU0FHdkM7UUFKa0IsWUFBTSxHQUFOLE1BQU0sQ0FBRztRQUFTLG9CQUFjLEdBQWQsY0FBYyxDQUFHO1FBQVMsbUJBQWEsR0FBYixhQUFhLENBQWdCO1FBekNsRixpQkFBVyxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMxQyxjQUFRLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNwQyxhQUFPLEdBQUcsS0FBSyxDQUFDO1FBVWhCLDRCQUFzQixHQUFHLEdBQUcsQ0FBQztRQU1oQyxVQUFJLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDckIsWUFBTSxHQUFnQiwwQkFBVyxDQUFDLE1BQU0sQ0FBQztRQU9uRCxVQUFVO1FBQ0EsYUFBTyxHQUFXLElBQUksZUFBTSxFQUFFLENBQUM7UUFDL0IsbUJBQWEsR0FBRyxHQUFHLENBQUM7UUFlMUIsS0FBSSxDQUFDLE1BQU0sR0FBcUIsWUFBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSSxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pHLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7O0lBQ3ZELENBQUM7SUFmRCxTQUFTO0lBQ0YscURBQWdDLEdBQXZDO1FBQ0ksOERBQThEO1FBQzlELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFUyw4Q0FBeUIsR0FBbkM7UUFDSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsa0NBQWtDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBU08seUNBQW9CLEdBQTVCO1FBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFFaEMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQywwQkFBMEI7UUFFMUQsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUFFLE1BQU0sR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRTFELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCwwQ0FBMEM7SUFFbkMsMEJBQUssR0FBWjtRQUFBLGlCQXVDQztRQXRDRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUNyRCxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNILHVFQUF1RTtZQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLFlBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFNLENBQUM7YUFDOUY7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2xFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO29CQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO2lCQUM5QztxQkFBTTtvQkFDSCxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzlDLE9BQU87aUJBQ1Y7YUFDSjtTQUNKO1FBRUQsbUZBQW1GO1FBQ25GLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQUUsT0FBTztRQUVuQyxZQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFRLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxVQUFLLElBQUksQ0FBQyxXQUFXLE1BQUcsQ0FBQyxDQUFDLE9BQU8sQ0FDL0UsSUFBSSxhQUFPLENBQUMsV0FBQztZQUNULEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUVkLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7Z0JBQ3JCLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQyxFQUFFLENBQUM7YUFDUDtpQkFBTTtnQkFDSCxpRUFBaUU7Z0JBQ2pFLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxTQUFtQjtvQkFDMUIsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDN0IsQ0FBQyxFQUFFLENBQUM7Z0JBQ1IsQ0FBQyxDQUFDLENBQUM7YUFDTjtRQUNMLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDO0lBRU8sMkJBQU0sR0FBZDtRQUFBLGlCQXVCQztRQXRCRyxnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyx3QkFBWSxDQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsSUFBSSxHQUFHLGtCQUFNLENBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRW5ELDRCQUE0QjtRQUM1QixJQUFJLFVBQVUsR0FBRyxZQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7UUFDaEQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVU7WUFBRSxVQUFVLEdBQUcsWUFBSyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNuRyxVQUFVLEdBQUcsVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsSUFBSSxZQUFLLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFFN0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsWUFBSyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLElBQUksWUFBSyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxJQUFJLENBQUMsVUFBVSxJQUFJLFlBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxZQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsSUFBSSxZQUFLLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWxLLDZCQUE2QjtRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO1FBRXBELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksMEJBQVcsQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXRELG1DQUFtQztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLHFDQUFxQixDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsY0FBTSxZQUFJLENBQUMsT0FBTyxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBRU8saUNBQVksR0FBcEIsVUFBcUIsU0FBeUI7UUFBOUMsaUJBa0RDO1FBbERvQiw0Q0FBeUI7UUFDMUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNaLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVqQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNkLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMseUJBQXlCO29CQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBRTdGLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRTtvQkFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQ25CLElBQUksa0NBQWtCLENBQUMsVUFBQyxHQUFHLEVBQUUsSUFBSTt3QkFDN0IsK0RBQStEO3dCQUMvRCwrQ0FBK0M7d0JBQy9DLHlDQUF5Qzt3QkFDekMsTUFBTTt3QkFDTixzQ0FBc0M7d0JBRXRDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ3RDLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFFbkIsS0FBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7b0JBQ3JDLENBQUMsQ0FBQyxDQUNMLENBQUM7aUJBQ0w7YUFDSjtpQkFBTTtnQkFDSCxvSkFBb0o7Z0JBQ3BKLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDekksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQ25CLElBQUksbUNBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBRSxJQUFJO3dCQUM5QyxLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLDJCQUEyQjt3QkFDekQsS0FBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7b0JBQ3JDLENBQUMsQ0FBQyxDQUNMLENBQUM7b0JBQ0YsSUFBRyx5QkFBVyxDQUFDLHVCQUF1QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUM7d0JBQ3hFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUNuQixJQUFJLGtDQUFrQixDQUFDLFVBQUMsR0FBRyxFQUFFLElBQUk7NEJBQzdCLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7NEJBQ3RDLEtBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO3dCQUNyQyxDQUFDLENBQUMsQ0FDTCxDQUFDO3FCQUNMO2lCQUNKO2FBQ0o7WUFFRCxpQkFBaUI7WUFDakIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDekU7SUFDTCxDQUFDO0lBRVMsa0NBQWEsR0FBdkI7UUFDSSxrRUFBa0U7UUFDbEUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDN0I7YUFBTTtZQUNILHlCQUF5QjtZQUN6QixZQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUV0RixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRXhDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVO2dCQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7WUFFaEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksdUJBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0Q7SUFDTCxDQUFDO0lBRVMsdUNBQWtCLEdBQTVCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFcEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQ3JFLENBQUM7SUFFRCxtRkFBbUY7SUFDekUsdUNBQWtCLEdBQTVCLFVBQTZCLFVBQXVCO1FBQ2hELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNsQyxRQUFRLEtBQUssRUFBRTtZQUNYLEtBQUssMEJBQVcsQ0FBQyxNQUFNLENBQUM7WUFDeEIsS0FBSywwQkFBVyxDQUFDLE1BQU07Z0JBQ25CLFlBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxrQ0FBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMxRSxNQUFNO1lBQ1Y7Z0JBQ0ksTUFBTTtTQUNiO1FBRUQsb0NBQThCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLG1DQUFjLEdBQXJCO1FBQ0ksT0FBTywwQkFBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2pHLENBQUM7SUFFTyx3Q0FBbUIsR0FBM0I7UUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNGLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFL0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDM0osQ0FBQztJQUVPLHNDQUFpQixHQUF6QjtRQUFBLGlCQStFQztRQTlFRyxrQkFBa0I7UUFDbEIsSUFBSSxLQUFhLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVc7WUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7YUFDeEQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWM7WUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDOztZQUNqRixLQUFLLEdBQUcsUUFBUSxDQUFDO1FBRXRCLElBQUksVUFBa0IsQ0FBQztRQUV2QixzQkFBc0I7UUFDdEIsSUFBSSxRQUFRLENBQUM7UUFDYixJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsSUFBSSxXQUFXLEVBQUU7WUFDdkQsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUM7U0FDOUM7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixJQUFJLFdBQVcsRUFBRTtZQUNuSCxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQztTQUNqRTthQUFNO1lBQ0gsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUNwQjtRQUVELElBQUksUUFBUSxDQUFDO1FBQ2IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXJCLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDTixRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pCLEtBQUssMEJBQVcsQ0FBQyxNQUFNO29CQUNuQixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDakMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDN0MsTUFBTTtnQkFDVixLQUFLLDBCQUFXLENBQUMsTUFBTTtvQkFDbkIsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDaEIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ2pDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFpQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQzVELE1BQU07Z0JBQ1YsS0FBSywwQkFBVyxDQUFDLElBQUk7b0JBQ2pCLEdBQUcsR0FBRyxFQUFFLENBQUM7b0JBQ1QsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDN0MsTUFBTTtnQkFDVjtvQkFDSSxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7YUFDcEQ7U0FDSjtRQUVELEdBQUcsR0FBRyxZQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRWxFLHNCQUFzQjtRQUN0QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQ3hCLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztTQUN2QzthQUFNO1lBQ0gsVUFBVSxHQUFHLFlBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLFFBQVE7Z0JBQ2hELFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRTtnQkFDaEQsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFO2FBQ2pELENBQUMsQ0FBQztTQUNOO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHlCQUFXLENBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUM3QixJQUFJLENBQUMsVUFBVSxFQUNmO1lBQ0ksYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3BILFFBQVEsRUFBRSxHQUFHO1lBQ2IsV0FBVyxFQUFFLEtBQUs7WUFDbEIsVUFBVSxFQUFFLFVBQVU7WUFDdEIsbUJBQW1CLEVBQUUsUUFBUTtZQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzlCLFlBQVksRUFBRSxnQkFBTSxJQUFJLFlBQUksQ0FBQyxLQUFLLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFoQyxDQUFnQztTQUMzRCxFQUNELFFBQVEsQ0FDWCxDQUFDO1FBRUYsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLElBQU0sVUFBVSxHQUFZO1lBQ3hCLEdBQUcsRUFBRSxlQUFJLENBQUMsTUFBTTtTQUNuQixDQUFDO1FBRUYsSUFBSSxDQUFDLFdBQVcsR0FBRyxZQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsVUFBaUIsRUFBRTtZQUN2RSxLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sOEJBQVMsR0FBakI7UUFDSSwwQ0FBMEM7UUFFMUMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRS9CLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxnQkFBUSxDQUFDLE1BQU0sQ0FBQztZQUFFLGdCQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzdDLElBQUksZUFBZSxHQUFHLGdCQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdkMsSUFBSSxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzdCLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbEYsSUFBSSxJQUFJLENBQUMsS0FBSztnQkFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRXJHLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbkYsSUFBSSxJQUFJLENBQUMsS0FBSztnQkFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRXRHLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDakIsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDbkYsSUFBSSxJQUFJLENBQUMsS0FBSztvQkFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3pHO2lCQUFNO2dCQUNILFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ3RGLElBQUksSUFBSSxDQUFDLEtBQUs7b0JBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUM1RztZQUVELElBQUksUUFBUTtnQkFBRSxpQkFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN4QjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzlELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7U0FDdkM7SUFDTCxDQUFDO0lBRUQsd0NBQXdDO0lBRXhDLHNDQUFzQztJQUU1Qix5QkFBSSxHQUFkLFVBQWUsY0FBNkM7UUFDeEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRSxtQkFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdFLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRVMsaUNBQVksR0FBdEIsVUFBdUIsR0FBNkIsRUFBRSxJQUE4QjtRQUNoRix5REFBeUQ7SUFDN0QsQ0FBQztJQUVTLDBDQUFxQixHQUEvQixVQUFnQyxHQUF3QixFQUFFLElBQXlCO1FBQy9FLGlFQUFpRTtJQUNyRSxDQUFDO0lBRUQsb0NBQW9DO0lBRXBDLGtDQUFrQztJQUV4QixnQ0FBVyxHQUFyQjtRQUNJLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxnQ0FBZ0M7SUFFaEMsa0NBQWtDO0lBRTNCLGdDQUFXLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzlCO0lBQ0wsQ0FBQztJQUVNLGdDQUFXLEdBQWxCLFVBQW1CLElBQXdCO1FBQ3ZDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN2RCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSywwQkFBVyxDQUFDLE1BQU0sRUFBRTtnQkFDOUMseUVBQXlFO2dCQUN6RSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDOUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO2lCQUN0QjtnQkFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDNUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUNyQjthQUNKO1lBRUQsSUFBSSxRQUFRLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDMUYsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsSUFBSSxPQUFPLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDekYsOEhBQThIO1lBRTlILElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHlCQUF5QjtnQkFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbEU7SUFDTCxDQUFDO0lBRU0scUNBQWdCLEdBQXZCLFVBQXdCLFNBQWlCLEVBQUUsVUFBNkIsRUFBRSxHQUFrQixFQUFFLE9BQXVCO1FBQTFFLDBDQUFhLElBQUksQ0FBQyxXQUFXO1FBQUUsNEJBQU0sSUFBSSxDQUFDLE9BQU87UUFBRSxvQ0FBVSxJQUFJLENBQUMsUUFBUTtRQUNqSCxPQUFPLE9BQU8sR0FBRyxTQUFTLEdBQUcsSUFBSSxHQUFHLFVBQVUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQy9ELENBQUM7SUFFUyx3Q0FBbUIsR0FBN0IsVUFBOEIsSUFBWSxFQUFFLFFBQXFCO1FBQXJCLHdDQUFxQjtRQUM3RCxZQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksb0JBQWUsSUFBSSxZQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEYsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0saUNBQVksR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVNLDJCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVTLHNDQUFpQixHQUEzQixVQUE0QixPQUFlLEVBQUUsVUFBc0IsRUFBRSxZQUFvQixFQUFFLFVBQWtCO1FBQ3pHLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQy9DLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDN0IsT0FBTyxDQUFDLFVBQVUsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDcEQ7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZUFBZTtJQUNSLDRCQUFPLEdBQWQsVUFBZSxHQUFXLEVBQUUsVUFBbUIsRUFBRSxPQUFnQjtRQUM3RCxJQUFJLElBQVksQ0FBQztRQUVqQixJQUFNLFVBQVUsd0JBQU8sWUFBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTtZQUMvQixJQUFJLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDSCxJQUFJLEdBQUcsMkJBQWdCLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsT0FBTyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUU7SUFDOUMsQ0FBQztJQUVNLDZCQUFRLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3ZILENBQUM7SUFFUywwQkFBSyxHQUFmLFVBQWdCLEdBQVcsRUFBRSxTQUErQixFQUFFLENBQU87UUFBeEMsd0NBQVksbUJBQVEsQ0FBQyxVQUFVO1FBQ3hELElBQU0sYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQ2xFLElBQU0sU0FBUyxHQUFHO1lBQ2QsYUFBYSxFQUFFLGFBQWE7WUFDNUIsWUFBWSxFQUFFLEdBQUc7WUFDakIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDN0IsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVztZQUNwQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsSUFBSSxFQUFFLENBQUM7U0FDVixDQUFDO1FBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFbEIsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELHdIQUF3SDtJQUM5RywwQkFBSyxHQUFmLFVBQWdCLE1BQWUsRUFBRSxRQUFjO1FBQzNDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCxRQUFRLEdBQUcsRUFBRSxDQUFDO1NBQ2pCO1FBRUQsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFekIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMzQyxZQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFXLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxrQkFBYSxNQUFNLE1BQUcsQ0FBQyxDQUFDO1FBRTVFLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsQjtJQUNMLENBQUM7SUFFRCxnQ0FBZ0M7SUFFaEMsYUFBYTtJQUNOLDRCQUFPLEdBQWQ7UUFDSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUV2QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDL0I7UUFFRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDcEM7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNsQztRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLFlBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXRFLGlCQUFNLE9BQU8sV0FBRSxDQUFDO0lBQ3BCLENBQUM7SUFuZ0JELFNBQVM7SUFDSywyQkFBZ0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2Ryx3QkFBYSxHQUFHLFlBQUssQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQWtnQjlELGlCQUFDO0NBQUEsQ0ExZ0I0RyxZQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0EwZ0I5SDtBQTFnQlksZ0NBQVU7Ozs7Ozs7Ozs7Ozs7QUNwQnZCLElBQVksWUFVWDtBQVZELFdBQVksWUFBWTtJQUNwQiwrREFBWTtJQUNaLHFEQUFPO0lBQ1AsdURBQVE7SUFDUix1REFBUTtJQUNSLDJEQUFVO0lBQ1YsdUVBQWdCO0lBQ2hCLCtDQUFJO0lBQ0osaURBQUs7SUFDTCxtREFBTTtBQUNWLENBQUMsRUFWVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQVV2Qjs7Ozs7Ozs7Ozs7OztBQ0FELFNBQWdCLFdBQVcsQ0FBSSxHQUFtQixFQUFFLEdBQU0sRUFBRSxTQUFhO0lBQWIseUNBQWE7SUFDckUsS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLFNBQVMsR0FBSTtRQUN6QyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHO1lBQUUsT0FBTyxDQUFDLENBQUM7S0FDaEM7SUFFRCxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ2QsQ0FBQztBQU5ELGtDQU1DO0FBQ0QsU0FBZ0IsT0FBTyxDQUFJLEdBQW1CLEVBQUUsTUFBa0U7SUFDOUcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO1FBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDaEUsQ0FBQztBQUZELDBCQUVDO0FBR0QsU0FBZ0IsV0FBVyxDQUFDLEdBQVcsRUFBRSxNQUFzRDtJQUMzRixLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRTtRQUNsQixJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDOUQ7QUFDTCxDQUFDO0FBSkQsa0NBSUM7QUFDRCxTQUFnQixJQUFJLENBQUksR0FBbUIsRUFBRSxTQUF3RTtJQUNqSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtRQUNqQyxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO0tBQzlDO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQU5ELG9CQU1DO0FBQ0QsU0FBZ0IsS0FBSyxDQUFJLEdBQW1CLEVBQUUsU0FBd0U7SUFDbEgsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO0tBQ2hEO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQU5ELHNCQU1DO0FBR0QsU0FBZ0IsU0FBUyxDQUFDLEdBQVcsRUFBRSxTQUF1RDtJQUMxRixLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRTtRQUNsQixJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztLQUNsRjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFORCw4QkFNQztBQUNELFNBQWdCLEdBQUcsQ0FBTyxHQUFtQixFQUFFLE1BQStEO0lBQzFHLElBQUksTUFBTSxHQUFHLElBQUksS0FBSyxFQUFLLENBQUM7SUFFNUIsT0FBTyxDQUFDLEdBQUcsRUFBRSxVQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFLLGFBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDO0lBRXRFLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFORCxrQkFNQztBQUNELFNBQWdCLFVBQVUsQ0FBSSxHQUFtQixFQUFFLFNBQXdFO0lBQ3ZILElBQUksTUFBYyxDQUFDO0lBQ25CLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUc7UUFDdkIsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRTtZQUM3QixNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQVpELGdDQVlDO0FBQ0QsU0FBZ0IsS0FBSyxDQUFJLEdBQW1CLEVBQUUsU0FBd0U7SUFDbEgsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFGRCxzQkFFQzs7Ozs7Ozs7Ozs7OztBQ3hFWSxvQkFBWSxHQUFHLG1CQUFPLENBQUMsOEdBQW1ELENBQUMsQ0FBQztBQUM1RSxvQkFBWSxHQUFHLG1CQUFPLENBQUMsOEdBQW1ELENBQUMsQ0FBQztBQUM1RSxrQkFBVSxHQUFHLG1CQUFPLENBQUMsNElBQWtFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ0Z0RyxTQUFnQixNQUFNLENBQUMsR0FBVztJQUM5QixJQUFJLFlBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLENBQUMsWUFBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksWUFBSyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUMvRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSw2Q0FBNkMsQ0FBQyxDQUFDO0tBQzdGO0lBRUQsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUNkLDBCQUEwQixFQUMxQiwyRkFBMkY7UUFDdkYsNkNBQTZDO1FBQzdDLG9EQUFvRDtRQUNwRCxnRkFBZ0Y7UUFDaEYsaURBQWlELENBQ3hELENBQUM7QUFDTixDQUFDO0FBYkQsd0JBYUM7QUFDRCxTQUFnQixNQUFNLENBQUMsS0FBVSxFQUFFLE1BQWU7SUFDOUMsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksRUFBRTtRQUFFLE9BQU87SUFDbEMsSUFBSSxLQUFLLFlBQVksS0FBSztRQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELDRCQUE0QjtJQUM1QixJQUFJLE1BQU07UUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDckUsSUFBSSxLQUFLLEdBQVEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqRCxLQUFLLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztJQUN4QixJQUFJLFNBQVMsR0FBUSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BELElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtRQUNsQixJQUFJLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ3pCLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FDOUM7YUFBTTtZQUNILEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7U0FDbEQ7S0FDSjtTQUFNO1FBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNoQztJQUNELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFwQkQsd0JBb0JDOzs7Ozs7Ozs7Ozs7O0FDbENELFNBQWdCLDRCQUE0QixDQUFDLFFBQVE7SUFDakQsSUFBSSxLQUFLLEdBQUcsZ0ZBQWdGLENBQUM7SUFDN0YsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxJQUFJLEtBQUs7UUFDTCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxJQUFJLGFBQWEsR0FBRyxZQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRSxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxHQUFHLGFBQWEsR0FBRyxtQ0FBbUMsR0FBRyxhQUFhLEdBQUcsTUFBTSxDQUFDLENBQUM7U0FDMUk7SUFFTCxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDO0FBVkQsb0VBVUM7Ozs7Ozs7Ozs7Ozs7QUNWWSxtQkFBVyxHQUFHLG1CQUFPLENBQUMscUZBQXlCLENBQUMsQ0FBQztBQUNqRCxhQUFLLEdBQUcsbUJBQU8sQ0FBQyx5RUFBbUIsQ0FBQyxDQUFDO0FBQ3JDLHdCQUFnQixHQUFHLG1CQUFPLENBQUMsK0ZBQThCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ0Z4RSxJQUFZLFdBS1g7QUFMRCxXQUFZLFdBQVc7SUFDbkIseURBQWM7SUFDZCw2Q0FBSTtJQUNKLGlEQUFNO0lBQ04saURBQU07QUFDVixDQUFDLEVBTFcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFLdEI7QUFDRCxTQUFnQixtQkFBbUIsQ0FBQyxLQUFrQjtJQUNsRCxPQUFPLGNBQWMsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUZELGtEQUVDOzs7Ozs7Ozs7Ozs7O0FDUkQsZ0lBQXVFO0FBRXZFLFlBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxpQkFBTSxDQUFDLENBQUM7QUFDakUsWUFBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLDhCQUE4QixFQUFFLGlCQUFNLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ0gxRSxTQUFnQix3QkFBd0IsQ0FBQyxHQUFXLEVBQUUsS0FBYSxFQUFFLEtBQWE7SUFDOUUsR0FBRyxHQUFHLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxHQUFHLEdBQUcsZUFBZSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekMsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBSkQsNERBSUM7QUFDRCxTQUFnQixlQUFlLENBQUMsR0FBVyxFQUFFLEtBQWEsRUFBRSxLQUFhO0lBQ3JFLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNmLGtEQUFrRDtJQUNsRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsMkZBQTJGO1lBQzNGLElBQUksR0FBRyxHQUFHLENBQUM7YUFDVjtZQUNELElBQUksUUFBUSxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNoRSxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQzNDLE9BQU8sR0FBRyxDQUFDO1NBQ2Q7SUFFTCxPQUFPLEdBQUcsR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDNUMsQ0FBQztBQWRELDBDQWNDO0FBQ0QsU0FBZ0Isa0JBQWtCLENBQUMsR0FBVyxFQUFFLEtBQWE7SUFDekQseUNBQXlDO0lBQ3pDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFBRSxPQUFPLEdBQUcsQ0FBQztJQUV2Qyw4QkFBOEI7SUFDOUIsSUFBSSxhQUFhLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxJQUFJLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkQsSUFBSSxjQUFjO1FBQUUsYUFBYSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFNUYsZ0VBQWdFO0lBQ2hFLGFBQWEsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkQsYUFBYSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUV4RCxJQUFJLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUUsYUFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7UUFBRSxhQUFhLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXJJLGtIQUFrSDtJQUNsSCxJQUFJLGNBQWMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLDhDQUE4QztJQUM5QyxJQUFJLGFBQWEsQ0FBQyxNQUFNLElBQUksQ0FBQztRQUFFLE9BQU8sY0FBYyxDQUFDO0lBRXJELE9BQU8sY0FBYyxHQUFHLEdBQUcsR0FBRyxhQUFhLENBQUM7QUFDaEQsQ0FBQztBQXJCRCxnREFxQkM7QUFDRCxTQUFnQixpQkFBaUIsQ0FBQyxHQUFXLEVBQUUsS0FBYTtJQUN4RCw4RkFBOEY7SUFDOUYsS0FBSyxJQUFJLEdBQUcsQ0FBQztJQUNiLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFdEYsaURBQWlEO0lBQ2pELElBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4RCxJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUVoRCxrR0FBa0c7SUFDbEcsSUFBSSxVQUFVLElBQUksQ0FBQyxDQUFDO1FBQUUsVUFBVSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFOUMsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ2xFLENBQUM7QUFiRCw4Q0FhQzs7Ozs7Ozs7Ozs7OztBQ3ZERCxnSUFBK0Q7QUFFL0QsU0FBZ0IsOEJBQThCLENBQUMsRUFBZTtJQUMxRCxrRkFBa0Y7SUFDbEYsSUFBSSxjQUFjLEdBQUcsUUFBUSxHQUFHLFlBQUssQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO0lBRS9ELElBQUksWUFBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUU7UUFDdkIsY0FBYyxJQUFJLE1BQU0sQ0FBQyxDQUFDLDRDQUE0QztLQUN6RTtJQUVELGNBQWMsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUV6RCxJQUFJLFlBQUssQ0FBQyxTQUFTLENBQUMsaUJBQWlCO1FBQUUsY0FBYyxHQUFHLDBCQUEwQixHQUFHLGNBQWMsQ0FBQztJQUVwRyxZQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDMUQsQ0FBQztBQWJELHdFQWFDO0FBQ0QsU0FBZ0Isc0JBQXNCLENBQUMsU0FBc0IsRUFBRSxRQUFxQjtJQUNoRixJQUFJLFNBQVMsR0FBRyxVQUFTLENBQUM7UUFDdEIsSUFBSSxRQUFRLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ2QsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNOLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ3RCO2FBQU07WUFDSCxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ1YsUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDeEI7UUFDRCxJQUFJLFFBQVEsSUFBSSxFQUFFLEVBQUU7WUFDaEIsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQyxDQUFDO0lBRUYsWUFBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNoRSxZQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ25FLENBQUM7QUFqQkQsd0RBaUJDO0FBQ0QsU0FBZ0IsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUk7SUFDdkUsSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUVoRSxJQUFJLFNBQVMsS0FBSyxRQUFRLEVBQUU7UUFDeEIsZ0JBQWdCLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2hELGdCQUFnQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztLQUMxRTtTQUFNLElBQUksU0FBUyxLQUFLLEtBQUssRUFBRTtRQUM1QixnQkFBZ0IsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUN0RCxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7S0FDMUU7U0FBTSxJQUFJLFNBQVMsS0FBSyxNQUFNLEVBQUU7UUFDN0IsZ0JBQWdCLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQ3RFLGdCQUFnQixDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO0tBQzNEO1NBQU07UUFDSCxnQkFBZ0IsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDdEUsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0tBQ25EO0lBRUQsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hELGdCQUFnQixDQUFDLEtBQUssR0FBRyxnQkFBZ0Is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QUFtQztJQUNuQyxJQUFJLElBQUksRUFBRTtRQUNOLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7U0FDckI7S0FDSjtJQUVELE9BQU8sUUFBUSxHQUFHLEtBQUssR0FBRyxVQUFVLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEQsQ0FBQztBQXZCRCx3Q0F1QkM7QUFDRCxTQUFnQixpQkFBaUI7SUFDN0IsT0FBTyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUZELDhDQUVDIiwiZmlsZSI6ImdpZ3lhLnNlcnZpY2VzLnBsdWdpbnMuYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9pbmRleC50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZ2lneWEtY29uc2VudC10aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcXG59XFxuLmdpZ3lhLWNvbnNlbnQtc3VidGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LWZhbWlseTogYXJpYWw7XFxufVxcblxcbi5jb25zZW50IC5naWd5YS12ZXJzaW9uLWNvbnRlbnQge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4uZ2lneWEtc2NyZWVuIC5naWd5YS1kaXNhYmxlZC1jb2xvciB7XFxuICBjb2xvcjogI2IyYjJiMjtcXG59XFxuLmdpZ3lhLWNvbnNlbnQtdGV4dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5naWd5YS1jb21wb3NpdGUtY29udHJvbC1jYXB0Y2hhLXdpZGdldCBpZnJhbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiNGdW5DYXB0Y2hhIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmdpZ3lhLXJlc2V0ICosXFxuZGl2LmdpZ3lhLXJlc2V0LFxcbi5naWd5YS1yZXNldCBzcGFuLFxcbi5naWd5YS1yZXNldCBhOmhvdmVyLFxcbi5naWd5YS1yZXNldCBhOnZpc2l0ZWQsXFxuLmdpZ3lhLXJlc2V0IGE6bGluayxcXG4uZ2lneWEtcmVzZXQgYTphY3RpdmUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgZmxvYXQ6IG5vbmU7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uZ2lneWEtc2NyZWVuIC5naWd5YS1lcnJvci1tc2cge1xcbiAgY29sb3I6ICNjZTQ2MzU7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmdpZ3lhLXNjcmVlbiAuZ2lneWEtZXJyb3ItbXNnLmdpZ3lhLWVycm9yLW1zZy1hY3RpdmUge1xcbiAgY29sb3I6ICNjZTQ2MzU7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5naWd5YS1zY3JlZW4gLmdpZ3lhLWVycm9yLW1zZy5naWd5YS13YXJuIHtcXG4gIGNvbG9yOiAjYjQ1YTBiICFpbXBvcnRhbnQ7XFxufVxcblxcbi5naWd5YS1zY3JlZW4gLmdpZ3lhLXRlcm1zLWVycm9yLFxcbi5naWd5YS1zY3JlZW4gaW5wdXQuZ2lneWEtZXJyb3IsXFxuLmdpZ3lhLXNjcmVlbiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0uZ2lneWEtZXJyb3IsXFxuLmdpZ3lhLXNjcmVlbiBpbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdLmdpZ3lhLWVycm9yLFxcbi5naWd5YS1zY3JlZW4gaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXS5naWd5YS1lcnJvcixcXG4uZ2lneWEtc2NyZWVuIHNlbGVjdC5naWd5YS1lcnJvciB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2U0NjM1O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxuICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmdpZ3lhLXNjcmVlbiBpbnB1dC5naWd5YS13YXJuLFxcbi5naWd5YS1zY3JlZW4gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLmdpZ3lhLXdhcm4sXFxuLmdpZ3lhLXNjcmVlbiBzZWxlY3QuZ2lneWEtd2FybiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYjQ1YTBiICFpbXBvcnRhbnQ7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZ2lneWEtc2NyZWVuIGlucHV0LmdpZ3lhLWVycm9yW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuLmdpZ3lhLXNjcmVlbiBpbnB1dC5naWd5YS1lcnJvclt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5naWd5YS1zY3JlZW4gaW5wdXRbZGlzYWJsZWRdLFxcbi5naWd5YS1zY3JlZW4gaW5wdXQ6ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTFlMTtcXG4gIGNvbG9yOiAjNGE0YTRhO1xcbiAgYm9yZGVyLWNvbG9yOiAjY2NjY2NjO1xcbn1cXG5cXG5kaXYuZ2lneWEtYXR0YWNoLWZpbGUtdXBsb2FkLWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbmRpdi5naWd5YS1waG90by11cGxvYWQtZm9ybSA+IGlucHV0IHtcXG4gIGZvbnQtc2l6ZTogNTAwcHg7XFxuICBkaXJlY3Rpb246IHJ0bDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdpZ3lhLXBhc3N3b3JkLXN0cmVuZ3RoLWJ1YmJsZSAuZ2lnLWJhbGxvb24tbnViIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiJHtpbWdCYXNlfS9zY3JlZW5TZXQvdHJpYW5nbGVfbGVmdC5wbmdcXFwiKTtcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgbGVmdDogKzJweDtcXG59XFxuLmdpZ3lhLXBhc3N3b3JkLXN0cmVuZ3RoLWJ1YmJsZSAuZ2lnLWJhbGxvb24tbnViLXVwIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiJHtpbWdCYXNlfS9zY3JlZW5TZXQvdHJpYW5nbGVfdXAucG5nXFxcIik7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB3aWR0aDogMTZweDtcXG4gIHRvcDogKzJweDtcXG59XFxuLmdpZ3lhLXBhc3N3b3JkLXN0cmVuZ3RoLWJ1YmJsZSAuZ2lnLWJhbGxvb24tbnViLXJpZ2h0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiJHtpbWdCYXNlfS9zY3JlZW5TZXQvdHJpYW5nbGVfcmlnaHQucG5nXFxcIik7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB3aWR0aDogMTBweDtcXG4gIGxlZnQ6IC0ycHg7XFxufVxcbi5naWd5YS1wYXNzd29yZC1zdHJlbmd0aC1idWJibGUgLmdpZy1iYWxsb29uLW51Yi1kb3duIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiJHtpbWdCYXNlfS9zY3JlZW5TZXQvdHJpYW5nbGVfZG93bi5wbmdcXFwiKTtcXG4gIGhlaWdodDogMTBweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgdG9wOiAtMnB4O1xcbn1cXG4uZ2lneWEtcGFzc3dvcmQtc3RyZW5ndGgtYnViYmxlIC5naWctYmFsbG9vbi1mcmFtZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNWY2O1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmNmZGE7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggMXB4IFJHQkEoMCwgMCwgMCwgMC4wNSk7XFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggMXB4IFJHQkEoMCwgMCwgMCwgMC4wNSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4IDFweCBSR0JBKDAsIDAsIDAsIDAuMDUpO1xcbn1cXG5cXG4uZ2lneWEtcGFzc3dvcmQtc3RyZW5ndGgtYnViYmxlIC5naWctYmFsbG9vbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5naWd5YS1wYXNzd29yZC1zdHJlbmd0aC1idWJibGUuZ2lnLWJhbGxvb24tbGVmdCAuZ2lnLWJhbGxvb24ge1xcbiAgbGVmdDogKzEwcHg7XFxuICB0b3A6ICszcHg7XFxufVxcbi5naWd5YS1wYXNzd29yZC1zdHJlbmd0aC1idWJibGUuZ2lnLWJhbGxvb24tcmlnaHQgLmdpZy1iYWxsb29uIHtcXG4gIGxlZnQ6IC0xMHB4O1xcbiAgdG9wOiArM3B4O1xcbn1cXG4uZ2lneWEtcGFzc3dvcmQtc3RyZW5ndGgtYnViYmxlLmdpZy1iYWxsb29uLXVwIC5naWctYmFsbG9vbiB7XFxuICBsZWZ0OiAtNXB4O1xcbiAgdG9wOiArMTdweDtcXG59XFxuLmdpZ3lhLXBhc3N3b3JkLXN0cmVuZ3RoLWJ1YmJsZS5naWctYmFsbG9vbi1kb3duIC5naWctYmFsbG9vbiB7XFxuICBsZWZ0OiAtNXB4O1xcbiAgdG9wOiAtMTJweDtcXG59XFxuXFxuLmdpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtdGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnNwYW4uZ2lneWEtcGFzc3dvcmRTdHJlbmd0aC10ZXh0IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG5kaXYuZ2lneWEtcGFzc3dvcmRTdHJlbmd0aC10ZXh0LXJlcXVpcmVtZW50cyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuXFxuc3Bhbi5naWd5YS1wYXNzd29yZFN0cmVuZ3RoLXNjb3JlVGV4dCB7XFxuICBtYXJnaW4tbGVmdDogM3B4O1xcbn1cXG5cXG4uZ2lneWEtcGFzc3dvcmRTdHJlbmd0aC10b29fd2VhayAuZ2lneWEtcGFzc3dvcmRTdHJlbmd0aC1zY29yZVRleHQge1xcbiAgY29sb3I6ICNlNzY0Njg7XFxufVxcbi5naWd5YS1wYXNzd29yZFN0cmVuZ3RoLXdlYWsgLmdpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtc2NvcmVUZXh0IHtcXG4gIGNvbG9yOiAjZTc2NDY4O1xcbn1cXG4uZ2lneWEtcGFzc3dvcmRTdHJlbmd0aC1mYWlyIC5naWd5YS1wYXNzd29yZFN0cmVuZ3RoLXNjb3JlVGV4dCB7XFxuICBjb2xvcjogI2Q5OWI0YjtcXG59XFxuLmdpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtc3Ryb25nIC5naWd5YS1wYXNzd29yZFN0cmVuZ3RoLXNjb3JlVGV4dCB7XFxuICBjb2xvcjogIzRhYmFiYztcXG59XFxuLmdpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtdmVyeV9zdHJvbmcgLmdpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtc2NvcmVUZXh0IHtcXG4gIGNvbG9yOiAjNGFiYWJjO1xcbn1cXG5cXG5kaXYuZ2lneWEtcGFzc3dvcmRTdHJlbmd0aC1iYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNmI2YjY7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcblxcbmRpdi5naWd5YS1wYXNzd29yZFN0cmVuZ3RoLWJhci10b29fd2VhayB7XFxuICB3aWR0aDogMjAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NjQ2ODtcXG59XFxuXFxuZGl2LmdpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtYmFyLXdlYWsge1xcbiAgd2lkdGg6IDQwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzY0Njg7XFxufVxcblxcbmRpdi5naWd5YS1wYXNzd29yZFN0cmVuZ3RoLWJhci1mYWlyIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk5YjRiO1xcbn1cXG5cXG5kaXYuZ2lneWEtcGFzc3dvcmRTdHJlbmd0aC1iYXItc3Ryb25nIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGFiYWJjO1xcbn1cXG5cXG5kaXYuZ2lneWEtcGFzc3dvcmRTdHJlbmd0aC1iYXItdmVyeV9zdHJvbmcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGFiYWJjO1xcbn1cXG5cXG4uZ2lneWEtY2FsY3VsYXRlLXNpemUge1xcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XFxuICAtbXMtem9vbTogMSAhaW1wb3J0YW50O1xcbiAgem9vbTogMSAhaW1wb3J0YW50O1xcbiAgbGVmdDogMTBweCAhaW1wb3J0YW50O1xcbiAgdG9wOiAtMTAwMHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5naWd5YS1jYWxjdWxhdGUtc2l6ZSBkaXYuZ2lneWEtY2FwdGNoYSB7XFxuICBtaW4td2lkdGg6IDMxOHB4O1xcbiAgbWluLWhlaWdodDogODBweDtcXG4gIF93aWR0aDogMzE4cHg7XFxuICBfaGVpZ2h0OiA4MHB4O1xcbn1cXG4uZ2lneWEtY2FsY3VsYXRlLXNpemUgZGl2LmdpZ3lhLWNhcHRjaGEudjIge1xcbiAgbWluLWhlaWdodDogODBweDtcXG4gIF9oZWlnaHQ6IDgwcHg7XFxufVxcblxcbi5naWd5YS1jYWxjdWxhdGUtc2l6ZSBkaXYuZ2lneWEtc29jaWFsLWxvZ2luIHtcXG4gIG1pbi13aWR0aDogMTEwcHg7XFxuICBtaW4taGVpZ2h0OiAxMjBweDtcXG4gIF93aWR0aDogMTEwcHg7XFxuICBfaGVpZ2h0OiAxMjBweDtcXG59XFxuXFxuLmdpZ3lhLWNhbGN1bGF0ZS1zaXplIGRpdi5naWd5YS10ZmEge1xcbiAgbWluLXdpZHRoOiAzMjVweDtcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgX3dpZHRoOiAzMjVweDtcXG4gIF9oZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG5kaXYuZ2lneWEtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmRpdi5naWd5YS1jb250YWluZXIuZ2lneWEtY29udGFpbmVyLWVuYWJsZWQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmRpdi5naWd5YS1sb2dpbklELWF2YWlsYWJpbGl0eSB7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXG59XFxuXFxuZGl2LmdpZ3lhLWxvZ2luSUQtYXZhaWxhYmlsaXR5LWF2YWlsYWJsZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDE3cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIiR7aW1nQmFzZX0vYWNjb3VudHMvb2sucG5nXFxcIik7XFxuICBjb2xvcjogIzRmYTM3MztcXG59XFxuXFxuZGl2LmdpZ3lhLWxvZ2luSUQtYXZhaWxhYmlsaXR5LW5vdC1hdmFpbGFibGUge1xcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIke2ltZ0Jhc2V9L2FjY291bnRzL2Vycm9yLnBuZ1xcXCIpO1xcbiAgY29sb3I6ICNjZTQ2MzU7XFxufVxcblxcbmRpdi5naWd5YS1sb2dpbklELWF2YWlsYWJpbGl0eS1wcm9ncmVzcyB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIiR7aW1nQmFzZX0vYWNjb3VudHMvc21hbGxMb2FkZXIuZ2lmXFxcIik7XFxuICBjb2xvcjogIzY2NjY2NjtcXG59XFxuXFxuZGl2LmdpZ3lhLXByb2ZpbGUtcGhvdG8ge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uZ2lneWEtY2FsY3VsYXRlLXNpemUgZGl2LmdpZ3lhLXByb2ZpbGUtcGhvdG8ge1xcbiAgbWluLXdpZHRoOiA2NHB4O1xcbiAgbWluLWhlaWdodDogNjRweDtcXG59XFxuXFxuZGl2LmdpZ3lhLXNjcmVlbi1kaW1tZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgZmlsdGVyOiBcXFwiYWxwaGEob3BhY2l0eT01MClcXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuZGl2LmdpZ3lhLXNjcmVlbi1sb2FkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKFxcXCIke2ltZ0Jhc2V9L2FjY291bnRzL2JpZ0xvYWRlci5naWZcXFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDMycHg7XFxuICBtaW4td2lkdGg6IDMycHg7XFxufVxcblxcbmRpdi5naWd5YS1zY3JlZW4tZGlhbG9nLWNvbnRlbnQge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nOiAyNXB4O1xcbn1cXG5cXG5kaXYuZ2lneWEtc2NyZWVuLWRpYWxvZy1tb2JpbGUgZGl2LmdpZ3lhLWNvbXBvc2l0ZS1jb250cm9sLWNhcHRjaGEtd2lkZ2V0IHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmRpdi5naWd5YS1zY3JlZW4tZGlhbG9nLW1vYmlsZSAuZ2lneWEtc2NyZWVuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5kaXYuZ2lneWEtc2VjcmV0LXF1ZXN0aW9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmRpdi5naWd5YS1waG90by11cGxvYWQge1xcbiAgaGVpZ2h0OiA2M3B4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgem9vbTogMTtcXG59XFxuXFxuZGl2LmdpZ3lhLXBob3RvLXVwbG9hZC1idXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgem9vbTogMTtcXG4gIG1hcmdpbjogMCA4cHggOHB4IDA7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlY2VjZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAgMTJweDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPVxcXCIjRkZGRkZGXFxcIiwgZW5kQ29sb3JzdHI9XFxcIiNGMkYyRjJcXFwiKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI2ZmZmZmZiksIHRvKCNmMmYyZjIpKTtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiwgI2YyZjJmMik7XFxufVxcblxcbmRpdi5naWd5YS1waG90by11cGxvYWQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPVxcXCIjRjJGMkYyXFxcIiwgZW5kQ29sb3JzdHI9XFxcIiNGRkZGRkZcXFwiKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI2YyZjJmMiksIHRvKCNmZmZmZmYpKTtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2YyZjJmMiwgI2ZmZmZmZik7XFxufVxcblxcbmRpdi5naWd5YS1waG90by11cGxvYWQtdGV4dCB7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBjb2xvcjogIzY2NjY2NjtcXG59XFxuXFxuZGl2LmdpZ3lhLXBob3RvLXVwbG9hZC1pbWFnZSB7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHdpZHRoOiA2NHB4O1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxufVxcblxcbmRpdi5naWd5YS1waG90by11cGxvYWQtcGF0aCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgd2lkdGg6IDEwN3B4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAqZGlzcGxheTogaW5saW5lO1xcbiAgem9vbTogMTtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbmgxLmdpZ3lhLXNjcmVlbi1jYXB0aW9uIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGJkYmRiO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzMzMztcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5naWd5YS1lcnJvci1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5naWd5YS1lcnJvci1kaXNwbGF5LmdpZ3lhLWVycm9yLWRpc3BsYXktYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZ2lneWEtaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmdpZ3lhLXNjcmVlbiAuZ2lneWEtdGZhIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBtYXJnaW46IDVweCAwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xcbn1cXG5cXG4uZ2lneWEtc2NyZWVuIC5naWd5YS10ZmEgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzLFxcbi5naWd5YS1zY3JlZW4gLmdpZ3lhLXRmYSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjODdiOWVhO1xcbn1cXG5cXG4uZ2lneWEtc2hvdy1jaGVja21hcmsuZ2lneWEtdmFsaWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIke2ltZ0Jhc2V9L3NjcmVlblNldC9jaGVja21hcmtWYWxpZC5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogNTAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgNXB4IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbn1cXG5cXG4uZ2lneWEtc2hvdy1jaGVja21hcmsuZ2lneWEtdmFsaWQuZ2lneWEtZW1wdHkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XFxuXFxuLmdpZ3lhLXNob3ctY2hlY2ttYXJrLmdpZ3lhLXBlbmRpbmcge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIke2ltZ0Jhc2V9L3NjcmVlblNldC9jaGVja21hcmtQZW5kaW5nLmdpZlxcXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA1MCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCA1cHggY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxufVxcblxcbi8qIElmIGNoYW5nZWQsIHVwZGF0ZSBVSSBCdWlsZGVyIHRvby4gKi9cXG4uZ2lneWEtc2NyZWVuIC5naWd5YS1jb21wb3NpdGUtY29udHJvbC1pbWFnZSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uZ2lneWEtaW1hZ2Uge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMTBweDtcXG59XFxuLmdpZ3lhLWltYWdlW2RhdGEtYmFja2dyb3VuZC1zaXplPVxcXCJmaXRcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcbi5naWd5YS1pbWFnZVtkYXRhLWJhY2tncm91bmQtc2l6ZT1cXFwiZml0LWhvcml6b250YWxseVxcXCJdIHtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xcbn1cXG4uZ2lneWEtaW1hZ2VbZGF0YS1iYWNrZ3JvdW5kLXNpemU9XFxcImZpdC12ZXJ0aWNhbGx5XFxcIl0ge1xcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XFxufVxcbi5naWd5YS1pbWFnZVtkYXRhLWJhY2tncm91bmQtc2l6ZT1cXFwic3RyZXRjaFxcXCJdIHtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG5cXG4vKklFOCovXFxuLmdpZ3lhLWllOCAuZ2lneWEtbGF5b3V0LWNlbGwge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5naWd5YS1pZTggLmdpZ3lhLWF0dGFjaC1maWxlLXVwbG9hZC1mb3JtIC5naWd5YS1hdHRhY2gtZmlsZS11cGxvYWQtZmlsZS1pbnB1dCB7XFxuICB3aWR0aDogMTAwMHB4O1xcbn1cXG5cXG4uZ2lneWEtaWU4IC5naWd5YS1jYWxjdWxhdGUtc2l6ZSBkaXYuZ2lneWEtcHJvZmlsZS1waG90byB7XFxuICBfd2lkdGg6IDY0cHg7XFxuICBfaGVpZ2h0OiA2NHB4O1xcbn1cXG5cXG4uZ2lneWEtaWU4IGRpdi5naWd5YS1waG90by11cGxvYWQge1xcbiAgKmRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmdpZ3lhLWllOCBkaXYuZ2lneWEtcGhvdG8tdXBsb2FkLWJ1dHRvbiB7XFxuICAqZGlzcGxheTogaW5saW5lO1xcbn1cXG4uZ2lneWEtaWU4IC5naWd5YS1zY3JlZW4gLmdpZ3lhLXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjYTlhOWJiO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICB0ZXh0LWluZGVudDogMDtcXG59XFxuLmdpZ3lhLWllOCAuZ2lneWEtcGxhY2Vob2xkZXI6Zm9jdXMge1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcbi5naWd5YS1pZTggLmdpZ3lhLXNjcmVlbiAuZ2lneWEtaW5wdXQtdGV4dDpmb2N1cyB7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIHRleHQtaW5kZW50OiAwO1xcbn1cXG4uZ2lneWEtaWU4IC5naWd5YS1zY3JlZW4uZ2lneWEtaW5wdXQtdGV4dCxcXG4uZ2lneWEtaWU4IC5naWd5YS1zY3JlZW4gLmdpZ3lhLWlucHV0LXRleHQuZ2lneWEtZXJyb3Ige1xcbiAgcGFkZGluZy10b3A6IDEycHg7XFxufVxcblxcbi8qSUU5Ki9cXG4uZ2lneWEtaWU5IC5naWd5YS1zY3JlZW4gaW5wdXQuZ2lneWEtaW5wdXQtdGV4dCxcXG4uZ2lneWEtaWU5IC5naWd5YS1zY3JlZW4gaW5wdXQuZ2lneWEtaW5wdXQtcGFzc3dvcmQge1xcbiAgcGFkZGluZy10b3A6IDFweDtcXG4gIHRleHQtaW5kZW50OiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmdpZ3lhLWllOSAuZ2lneWEtc2NyZWVuIC5naWd5YS1pbnB1dC10ZXh0OmZvY3VzLFxcbi5naWd5YS1pZTkgLmdpZ3lhLXNjcmVlbiAuZ2lneWEtaW5wdXQtcGFzc3dvcmQ6Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4ICMxZDg3ZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODdiOWVhO1xcbiAgLypwYWRkaW5nLWxlZnQ6IDVweDsqL1xcbiAgdGV4dC1pbmRlbnQ6IDA7XFxufVxcblxcbi5naWd5YS1pZTkgLmdpZ3lhLXNjcmVlbiBpbnB1dC5naWd5YS1pbnB1dC10ZXh0LmdpZ3lhLXBsYWNlaG9sZGVyLFxcbi5naWd5YS1pZTkgLmdpZ3lhLXNjcmVlbiBpbnB1dC5naWd5YS1pbnB1dC1wYXNzd29yZC5naWd5YS1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI2E5YTliYjtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICB0ZXh0LWluZGVudDogMDtcXG4gIC8qcGFkZGluZy1sZWZ0OiA0cHg7Ki9cXG59XFxuXFxuLypJRTEwKi9cXG4uZ2lneWEtaWUxMCAuZ2lneWEtc2NyZWVuIGlucHV0LmdpZ3lhLWlucHV0LXRleHQsXFxuLmdpZ3lhLWllMTAgLmdpZ3lhLXNjcmVlbiBpbnB1dC5naWd5YS1pbnB1dC1wYXNzd29yZCB7XFxuICBwYWRkaW5nLXRvcDogMXB4O1xcbn1cXG5cXG4vKnJlbW92ZSBib3R0b20gcGFkZGluZyBmb3Igb3V0bGluZSB3aGVuIGZvY3VzZWQgKG5vdCBuZWVkZWQgYW55d2F5KSovXFxuLmdpZ3lhLXNjcmVlbiAuZm9yZ290LXBhc3N3b3JkLWNlbGwgYSxcXG4uZ2lneWEtc2NyZWVuIC5naWd5YS1jb21wb3NpdGUtY29udHJvbC5naWd5YS1mb3Jnb3RQYXNzd29yZCxcXG4uZ2lneWEtc2NyZWVuIC5naWd5YS1jb21wb3NpdGUtY29udHJvbC5naWd5YS1jaGFuZ2UtcGFzc3dvcmQtbGluayxcXG4uZ2lneWEtc2NyZWVuIC5naWd5YS1jb21wb3NpdGUtY29udHJvbC5naWd5YS1jb21wb3NpdGUtY29udHJvbC1saW5rIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XFxufVxcbi5naWd5YS1zY3JlZW4gLmdpZ3lhLWFycmF5LW1hbmFnZXIuZGlzYWJsZS1kZWxldGUgPiAuZ2lneWEtYXJyYXktdGVtcGxhdGUgPiAuYnV0dG9ucy13cmFwcGVyIGJ1dHRvbi5naWd5YS1hcnJheS1yZW1vdmUtYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5naWd5YS1zY3JlZW4gLmdpZ3lhLWNvbXBvc2l0ZS1jb250cm9sLWFycmF5LXdpZGdldCB7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuLmdpZ3lhLXNjcmVlbiAuZ2lneWEtY29tcG9zaXRlLWNvbnRyb2wtYXJyYXktd2lkZ2V0IC5naWd5YS1jb21wb3NpdGUtY29udHJvbC1hcnJheS13aWRnZXQge1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG4uZ2lneWEtc2NyZWVuIC5naWd5YS1jb21wb3NpdGUtY29udHJvbC1hcnJheS13aWRnZXQgZGl2LmdpZ3lhLWFycmF5LXRlbXBsYXRlIHtcXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XFxufVxcbi5naWd5YS1zY3JlZW4gLmdpZ3lhLWNvbXBvc2l0ZS1jb250cm9sLWFycmF5LXdpZGdldCBkaXYuZ2lneWEtYXJyYXktdGVtcGxhdGU6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCAjYzFjMWMxIHNvbGlkO1xcbn1cXG4uZ2lneWEtc2NyZWVuIC5naWd5YS1jb21wb3NpdGUtY29udHJvbC1hcnJheS13aWRnZXQgZGl2LmdpZ3lhLWFycmF5LXRlbXBsYXRlIC5idXR0b25zLXdyYXBwZXIge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi5naWd5YS1zY3JlZW4gLmdpZ3lhLWNvbXBvc2l0ZS1jb250cm9sLWFycmF5LXdpZGdldCBkaXYuZ2lneWEtYXJyYXktdGVtcGxhdGUgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogIzEzNzFiOTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5naWd5YS1zY3JlZW4gLmdpZ3lhLWNvbXBvc2l0ZS1jb250cm9sLWFycmF5LXdpZGdldCBkaXYuZ2lneWEtYXJyYXktdGVtcGxhdGUgYnV0dG9uLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZ2lneWEtc2NyZWVuIGEuZ2lneWEtZGlzYWJsZWQge1xcbiAgY29sb3I6ICM3NTc1NzU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmdpZ3lhLXNjcmVlbiBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXS5naWd5YS1kaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kOiAjNzU3NTc1ICFpbXBvcnRhbnQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5naWd5YS1zY3JlZW4gLmdpZ3lhLWRpc2FibGVkOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmdpZ3lhLXNjcmVlbiAuZ2lneWEtZGlzYWJsZWQ6YWN0aXZlIHtcXG4gIGNvbG9yOiAjNzU3NTc1O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uZC1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtc3BhY2Uge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZ2lneWEtbXlQaG90by1mb3JtLXdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG59XFxuLmdpZ3lhLW15UGhvdG8tdXBsb2FkRm9ybSB7XFxuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XFxufVxcblxcbi5naWd5YS1teVBob3RvLXByb2ZpbGUtYm94LXdyYXBwZXIgaW5wdXQuZ2lneWEtbXlQaG90by11cGxvYWQge1xcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG59XFxuXFxuLmdpZ3lhLW15UGhvdG8tc3RhdHVzLWljb24ge1xcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZ2lneWEtbXlQaG90by11cGxvYWRGb3JtID4gaW5wdXQge1xcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbn1cXG4uZ2lneWEtbXlQaG90by11cGxvYWQge1xcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xcbn1cXG4uZ2lneWEtZHVtbXlQaG90by11cGxvYWQge1xcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xcbn1cXG4uZ2lneWEtY29tcG9zaXRlLWNvbnRyb2wtbGluazpmb2N1cyxcXG4uZ2lneWEtY29tcG9zaXRlLWNvbnRyb2wgc2VsZWN0OmZvY3VzLFxcbi5naWd5YS1jb21wb3NpdGUtY29udHJvbCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmZvY3VzLFxcbi5naWd5YS1teVBob3RvLWRlbGV0ZS1idXR0b246Zm9jdXMsXFxuLmdpZ3lhLW15UGhvdG8tdXBsb2FkRm9ybSBpbnB1dDpmb2N1cyxcXG4uZ2lneWEtZHVtbXlQaG90by11cGxvYWQ6Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzIzNzhjZCAhaW1wb3J0YW50O1xcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAwICMwMDcwZjAgIWltcG9ydGFudDtcXG59XFxuXFxuLmdpZ3lhLXNjcmVlbiAuZ2lneWEtY29tcG9zaXRlLWNvbnRyb2wuZ2lneWEtY29tcG9zaXRlLWNvbnRyb2wtcGhvbmUtbnVtYmVyLXdpZGdldCAuZ2lneWEtcGhvbmUtdmVyaWZpZWQtc3RhdHVzLWltYWdlIHtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIke2ltZ0Jhc2V9L3NjcmVlblNldC9jaGVja21hcmtWYWxpZC5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogNTAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBsZWdhY3kgbW9kYWwgKi9cXG5cXG5kaXYuZ2lneWEtc2NyZWVuLWRpYWxvZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0b3A6IDI1cHg7XFxuICAgIGxlZnQ6IDI1cHg7XFxuICAgIGJvcmRlcjogOHB4IHNvbGlkICNDQ0NDQ0M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuZGl2LmdpZ3lhLXNjcmVlbi1kaWFsb2ctaW5uZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQUFBQUFBO1xcbn1cXG5cXG5kaXYuZ2lneWEtc2NyZWVuLWRpYWxvZy1jbG9zZSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xcbiAgICBoZWlnaHQ6IDMzcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke2ltZ0Jhc2V9L2FjY291bnRzL2Nsb3NlX2RpYWxvZy5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbmRpdi5naWd5YS1zY3JlZW4tZGlhbG9nLWNhcHRpb24ge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xcbn1cXG5cXG5kaXYuZ2lneWEtc2NyZWVuLWRpYWxvZy1tb2JpbGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZGl2LmdpZ3lhLXNjcmVlbi1kaWFsb2ctdG9wIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgem9vbTogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjNGMztcXG4gICAgbGluZS1oZWlnaHQ6IDMzcHg7XFxuICAgIHBhZGRpbmc6IDAgMTBweCAwIDExcHg7XFxufVxcblxcbiNnaWd5YS1zY3JlZW4tZGlhbG9nLXBhZ2Utb3ZlcmxheSB7XFxuICAgICAgICB3aWR0aCA6IDEwMHZ3O1xcbiAgICAgICAgaGVpZ2h0IDogMTAwdmg7XFxuICAgICAgICBiYWNrZ3JvdW5kIDogYmxhY2s7XFxuICAgICAgICBwb3NpdGlvbiA6IGZpeGVkO1xcbiAgICAgICAgdG9wIDogMDtcXG4gICAgICAgIGxlZnQgOiAwO1xcbiAgICAgICAgei1pbmRleCA6IC0xO1xcbiAgICAgICAgZmlsdGVyIDogYWxwaGEob3BhY2l0eT0yMCk7XFxuICAgICAgICBvcGFjaXR5IDogMC4yO1xcbiAgICB9XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKm1vZGVybiBtb2RhbCovXFxuLmdpZ3lhLXN0eWxlLW1vZGVybiAjZ2lneWEtc2NyZWVuLWRpYWxvZy1wYWdlLW92ZXJsYXkge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0yMCk7XFxuICAgIG9wYWNpdHk6IDAuMjtcXG59XFxuXFxuLmdpZ3lhLXN0eWxlLW1vZGVybiBkaXYuZ2lneWEtc2NyZWVuLWRpYWxvZy1tYWluIHtcXG4gICAgYm9yZGVyOiAwLjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAzcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIG1heC1oZWlnaHQ6IDk5dmg7XFxuICAgIG1heC13aWR0aDogOTl2dztcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5naWd5YS1zdHlsZS1tb2Rlcm4gZGl2LmdpZ3lhLXNjcmVlbi1kaWFsb2ctdG9wIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgem9vbTogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzNzFCOTtcXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XFxuICAgIHBhZGRpbmc6IDAgMTBweCAwIDExcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMHB4IDBweDtcXG59XFxuXFxuLmdpZ3lhLXN0eWxlLW1vZGVybiBkaXYuZ2lneWEtc2NyZWVuLWRpYWxvZy1jbG9zZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGluaXRpYWw7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGluaXRpYWw7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBpbml0aWFsO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmdpZ3lhLXN0eWxlLW1vZGVybiBkaXYuZ2lneWEtc2NyZWVuLWRpYWxvZy1jbG9zZSA+IGF7XFxuICAgIHBhZGRpbmc6IDRweDtcXG59XFxuLmdpZ3lhLXN0eWxlLW1vZGVybiBkaXYuZ2lneWEtc2NyZWVuLWRpYWxvZy1jbG9zZSA+IGEgPiBpbWcge1xcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5pdGlhbDtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uZ2lneWEtc3R5bGUtbW9kZXJuIGRpdi5naWd5YS1zY3JlZW4tZGlhbG9nLWNhcHRpb24ge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgZm9udC1zaXplOiAxOXB4O1xcbiAgICBmb250LWZhbWlseTogYXJpYWw7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uZ2lneWEtc3R5bGUtbW9kZXJuIGRpdi5naWd5YS1zY3JlZW4tZGlhbG9nLWlubmVyIHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtaW4td2lkdGg6IDMycHg7XFxuICAgIG1pbi1oZWlnaHQ6IDY0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZ2lneWEtc3R5bGUtbW9kZXJuIGRpdi5naWd5YS1zY3JlZW4tZGltbWVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBvcGFjaXR5OiAwLjI7XFxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0yMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxufVxcblxcbi5naWd5YS1zdHlsZS1tb2Rlcm4gZGl2LmdpZ3lhLXNjcmVlbi1sb2FkZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybChcXFwiJHtpbWdCYXNlfS9hY2NvdW50cy9iaWdMb2FkZXIuZ2lmXFxcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDMycHg7XFxuICAgIG1pbi13aWR0aDogMzJweDtcXG59XFxuXFxuLmdpZ3lhLXN0eWxlLW1vZGVybi5naWd5YS1zY3JlZW4tZGlhbG9nIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5naWd5YS1zdHlsZS1tb2Rlcm4uZ2lneWEtc2NyZWVuLWRpYWxvZy1tb2JpbGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmdpZ3lhLXN0eWxlLW1vZGVybi5naWd5YS1zY3JlZW4tZGlhbG9nLW1vYmlsZSBkaXYuZ2lneWEtc2NyZWVuLWRpYWxvZy1tYWluIHtcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxuICAgIGJveC1zaGFkb3c6IGluaXRpYWw7XFxufVxcblxcbi5naWd5YS1zdHlsZS1tb2Rlcm4uZ2lneWEtc2NyZWVuLWRpYWxvZy1tb2JpbGUgZGl2LmdpZ3lhLXNjcmVlbi1kaWFsb2ctdG9wIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjdweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5naWd5YS1zdHlsZS1tb2Rlcm4uZ2lneWEtc2NyZWVuLWRpYWxvZy1tb2JpbGUgZGl2LmdpZ3lhLXNjcmVlbi1kaWFsb2ctY2FwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmdpZ3lhLXN0eWxlLW1vZGVybi5naWd5YS1zY3JlZW4tZGlhbG9nLW1vYmlsZSBkaXYuZ2lneWEtc2NyZWVuLWRpYWxvZy1jbG9zZSA+IGEgPiBpbWcge1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi5naWd5YS1zdHlsZS1tb2Rlcm4uZ2lneWEtc2NyZWVuLWRpYWxvZy1tb2JpbGUgZGl2LmdpZ3lhLXNjcmVlbi1kaWFsb2ctaW5uZXIge1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgbWFyZ2luLXRvcDogMjdweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmdpZ3lhLXN0eWxlLW1vZGVybi5naWd5YS1zY3JlZW4tZGlhbG9nLW1vYmlsZSBkaXYuZ2lneWEtc2NyZWVuLWRpYWxvZy1pbm5lciA+IGRpdiB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uZ2lneWEtc3R5bGUtbW9kZXJuLmdpZ3lhLWlvcy5naWd5YS1zY3JlZW4tZGlhbG9nLCAuZ2lneWEtc3R5bGUtbW9kZXJuLmdpZ3lhLWlvcy5naWd5YS1zY3JlZW4tZGlhbG9nLmdpZ3lhLWlvcy12Ny5naWd5YS1zY3JlZW4tZGlhbG9nLW1vYmlsZSBkaXYuZ2lneWEtc2NyZWVuLWRpYWxvZy10b3Age1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5naWd5YS1zdHlsZS1tb2Rlcm4uZ2lneWEtYW5kcm9pZC5naWd5YS1zY3JlZW4tZGlhbG9nLW1vYmlsZSB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uZ2lneWEtc3R5bGUtbW9kZXJuLmdpZ3lhLWllOCAjZ2lneWEtc2NyZWVuLWRpYWxvZy1wYWdlLW92ZXJsYXkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5odG1sLmdpZ3lhLW1vYmlsZS1tb2RhbC1tb2RlIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuaHRtbC5naWd5YS1tb2JpbGUtbW9kYWwtbW9kZSBib2R5IHtcXG4gICAgaGVpZ2h0OiAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVmYXVsdENTUy5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICIsImltcG9ydCB7IElQbHVnaW4sIElJbmplY3Rpb25JbmZvIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0FQSS9VaUFwaSc7XG5pbXBvcnQgeyBJUGx1Z2luUGFyYW1zIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9pbnRlcmZhY2VzL0lQbHVnaW5QYXJhbXMnO1xuaW1wb3J0IHsgSVBsdWdpblRlbXBsYXRlcyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luVGVtcGxhdGVzJztcbmltcG9ydCB7IElQbHVnaW5DU1MgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2ludGVyZmFjZXMvSVBsdWdpbkNTUyc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaGVscGVycy9Nb2RhbERpYWxvZyc7XG5pbXBvcnQgeyBQbHVnaW5TdHlsZSwgZ2V0UGx1Z2luU3R5bGVDbGFzcyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvUGx1Z2luU3R5bGVzJztcbmltcG9ydCB7IExvYWREaW1tZXIgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2hlbHBlcnMvTG9hZERpbW1lcic7XG5pbXBvcnQgeyBJUGx1Z2luQ29uZmlnIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9pbnRlcmZhY2VzL0lQbHVnaW5Db25maWcnO1xuaW1wb3J0IHsgUG9sbGVyIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9oZWxwZXJzL1BvbGxlcic7XG5pbXBvcnQgeyBnZXRUZW1wbGF0ZXMsIGdldENzcyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvcmVzb3VyY2VzJztcbmltcG9ydCB7IEludmFsaWRQcm9wZXJ0eUFjdGlvbiwgVmlld3BvcnRTaXplQWN0aW9uLCBDb250YWluZXJTaXplQWN0aW9uIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9oZWxwZXJzL1BvbGxlckFjdGlvbnMnO1xuaW1wb3J0IHsgYWRkQnJvd3NlckluZm9DbGFzc2VzVG9FbGVtZW50IH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9ET00nO1xuaW1wb3J0IHsgQ2xvc2VSZWFzb25zIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9DbG9zZVJlYXNvbnMnO1xuaW1wb3J0IHsgYWRkQ3NzIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9Dc3NVdGlscyc7XG5pbXBvcnQgeyBnZXRMb2NhbGl6ZWRUZXh0IH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9sYW5ndWFnZXMvbGFuZ3VhZ2UnO1xuaW1wb3J0IHsgR1NFcnJvcnMgfSBmcm9tICcuLi8uLi9HaWd5YS5Kcy9hcHAvR1NFcnJvcnMnO1xuaW1wb3J0IHtJSG90S2V5LCBJSG90S2V5RXZlbnQsIEtleXN9IGZyb20gJy4uLy4uL0dpZ3lhLkpzL2FwcC9VdGlscy9rZXlib2FyZCc7XG5pbXBvcnQge0ZsYWdTZXJ2aWNlfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvU2VydmljZXMvRmxhZ1NlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgY3NzRmxhZ3M6IHsgW3BsdWdpbk5hbWU6IHN0cmluZ106IE9iamVjdCB9ID0ge307XG5leHBvcnQgY2xhc3MgQmFzZVBsdWdpbjxQIGV4dGVuZHMgSVBsdWdpblBhcmFtcywgSFQgZXh0ZW5kcyBJUGx1Z2luVGVtcGxhdGVzLCBDVCBleHRlbmRzIElQbHVnaW5DU1M+IGV4dGVuZHMgZ2lneWEuXy5CYXNlT2JqZWN0PElQbHVnaW5QYXJhbXM+XG4gICAgaW1wbGVtZW50cyBJUGx1Z2luIHtcbiAgICAvLyBDb250YWluZXJcbiAgICBwdWJsaWMgY29udGFpbmVySUQ6IHN0cmluZztcbiAgICBwdWJsaWMgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcblxuICAgIC8vIEltYWdlc1xuICAgIHB1YmxpYyBzdGF0aWMgZ2xvYmFsUGl4ZWxSYXRpbyA9IHdpbmRvd1snZGV2aWNlUGl4ZWxSYXRpbyddID8gTWF0aC5taW4oTWF0aC5jZWlsKHdpbmRvd1snZGV2aWNlUGl4ZWxSYXRpbyddKSwgMykgOiAxO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2xvYmFsSW1nQmFzZSA9IGdpZ3lhLl8uZ2V0SW1nQ2RuUmVzb3VyY2UoKTtcblxuICAgIHByb3RlY3RlZCBfcGl4ZWxSYXRpbyA9IEJhc2VQbHVnaW4uZ2xvYmFsUGl4ZWxSYXRpbztcbiAgICBwcm90ZWN0ZWQgX2ltZ0Jhc2UgPSBCYXNlUGx1Z2luLmdsb2JhbEltZ0Jhc2U7XG4gICAgcHJvdGVjdGVkIF9pbWdFeHQgPSAncG5nJztcblxuICAgIC8vIFRlbXBsYXRlcyAmIENTU1xuICAgIHByaXZhdGUgX3RlbXBsYXRlczogSFQ7XG4gICAgcHJpdmF0ZSBfY3NzOiBDVDtcblxuICAgIC8vIE1vZGFsXG4gICAgcHJvdGVjdGVkIF9tb2RhbERpYWxvZzogTW9kYWxEaWFsb2c7XG4gICAgcHJvdGVjdGVkIF9jYXB0aW9uRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHVibGljIGlzTW9kYWw6IGJvb2xlYW47XG4gICAgcHJvdGVjdGVkIE1PQklMRV9NT0RBTF9NSU5fV0lEVEggPSA0MDA7XG5cbiAgICAvLyBVSVxuICAgIHB1YmxpYyBpc1J0bDogYm9vbGVhbjtcbiAgICBwdWJsaWMgaXNNb2JpbGVVSTogYm9vbGVhbjtcbiAgICBwcml2YXRlIGFkZGVkQ3NzOiBib29sZWFuO1xuICAgIHB1YmxpYyBsYW5nID0gdGhpcy5wYXJhbXMubGFuZztcbiAgICBwcm90ZWN0ZWQgX3N0eWxlOiBQbHVnaW5TdHlsZSA9IFBsdWdpblN0eWxlLm1vZGVybjtcbiAgICBwcm90ZWN0ZWQgX2xvYWRpbmdJbmRpY2F0b3I6IExvYWREaW1tZXI7XG5cbiAgICAvLyBjb25maWd1cmF0aW9uXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogSVBsdWdpbkNvbmZpZzxQPjtcbiAgICBwdWJsaWMgbG9jYWxpemVkSnNOYW1lOiBzdHJpbmc7XG5cbiAgICAvLyBQb2xsaW5nXG4gICAgcHJvdGVjdGVkIF9wb2xsZXI6IFBvbGxlciA9IG5ldyBQb2xsZXIoKTtcbiAgICBwcm90ZWN0ZWQgUE9MTF9JTlRFUlZBTCA9IDE1MDtcblxuICAgIC8vIEV2ZW50c1xuICAgIHB1YmxpYyBvblJlZnJlc2hFeHRlcm5hbENvbXBvbmVudHNFdmVudCgpOiBnaWd5YS5fLkV2ZW50V3JhcHBlcjwoKSA9PiB2b2lkPiB7XG4gICAgICAgIC8vIHRoaXMgc2hvdWxkIGJlIHByb3RlY3RlZCBbYWZ0ZXIgcmV3cml0ZSBvZiBzY3JlZW5zZXRQbHVnaW5dXG4gICAgICAgIHJldHVybiB0aGlzLmdldEV2ZW50KCdvblJlZnJlc2hFeHRlcm5hbENvbXBvbmVudHNFdmVudCcpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWZyZXNoRXh0ZXJuYWxDb21wb25lbnRzKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoUGx1Z2luRXZlbnQoJ29uUmVmcmVzaEV4dGVybmFsQ29tcG9uZW50c0V2ZW50Jyk7XG4gICAgfVxuXG4gICAgLy8gY29uc3RydWN0aW5nXG4gICAgY29uc3RydWN0b3IocHVibGljIHBhcmFtczogUCwgcHVibGljIGV4cGxpY2l0UGFyYW1zOiBQLCBwdWJsaWMgaW5qZWN0aW9uSW5mbzogSUluamVjdGlvbkluZm8pIHtcbiAgICAgICAgc3VwZXIocGFyYW1zLCBleHBsaWNpdFBhcmFtcywgZmFsc2UpO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IDxJUGx1Z2luQ29uZmlnPFA+PmdpZ3lhLnV0aWxzLm9iamVjdC5tZXJnZShbdGhpcy5pbmplY3Rpb25JbmZvLCB0aGlzLmdldENvbmZpZygpXSk7XG4gICAgICAgIHRoaXMubG9jYWxpemVkSnNOYW1lID0gdGhpcy5nZXRUcmFuc2xhdGlvbkpzTmFtZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VHJhbnNsYXRpb25Kc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIGpzTmFtZSA9IHRoaXMuY29uZmlnLmpzTmFtZTtcblxuICAgICAgICBqc05hbWUgPSBqc05hbWUuc3BsaXQoJ192JylbMF07IC8vIHJlbW92ZSB2ZXJzaW9uIHNwZWNpZmljXG5cbiAgICAgICAgaWYgKGpzTmFtZS5pbmRleE9mKCcuanMnKSA9PT0gLTEpIGpzTmFtZSA9IGpzTmFtZSArICcuanMnO1xuXG4gICAgICAgIHJldHVybiBqc05hbWU7XG4gICAgfVxuXG4gICAgLy8vICoqIHN0YXJ0aW5nIHBsdWdpbiBwcm9jZXNzIC0gc3RhcnQgKioqXG5cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5wYXJhbXMuY29udGFpbmVySUQgJiYgIXRoaXMuY29uZmlnLmFsbG93TW9kYWwpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hJbnZhbGlkUGFyYW1FcnJvcignY29udGFpbmVySUQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjb250YWluZXIgZXhpc3RzIG9yIHRoZSBwbHVnaW4gc2hvdWxkIGJlIGRyYXduIGFzIG1vZGFsXG4gICAgICAgICAgICBpZiAoIXRoaXMucGFyYW1zLmNvbnRhaW5lcklEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc01vZGFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmFtcyA9IGdpZ3lhLnV0aWxzLm9iamVjdC5tZXJnZShbdGhpcy5jb25maWcuZGVmYXVsdE1vZGFsUGFyYW1zLCB0aGlzLnBhcmFtc10pIGFzIFA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5wYXJhbXMuY29udGFpbmVySUQpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXJJRCA9IHRoaXMucGFyYW1zLmNvbnRhaW5lcklEO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hJbnZhbGlkUGFyYW1FcnJvcignY29udGFpbmVySUQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHJlcXVpcmVkIHBhcmFtcyBhcmUgbWlzc2luZywgZGlzcGF0Y2ggYW4gZXJyb3IgYW5kIHN0b3AgcGx1Z2luIGluaXRpYWxpemF0aW9uXG4gICAgICAgIGlmICghdGhpcy52YWxpZGF0ZVBhcmFtcygpKSByZXR1cm47XG5cbiAgICAgICAgZ2lneWEubG9nZ2VyLmdyb3VwKGBpbml0ICR7dGhpcy5pbmplY3Rpb25JbmZvLm5hbWV9ICgke3RoaXMuY29udGFpbmVySUR9KWApLmVuZFdoZW4oXG4gICAgICAgICAgICBuZXcgUHJvbWlzZShyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRVSSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1zLl9ub0luaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQ29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFic3RyYWN0IGluaXRpYWxpemF0aW9uLCBpbnZva2luZyAnb25Mb2FkJyBldmVudCB3aGVuIGZpbmlzaGVkXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdCgoaXNTdWNjZWVkPzogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQ29tcGxldGUoaXNTdWNjZWVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0VUkoKSB7XG4gICAgICAgIC8vIEluaXRpYWxpemluZyB0ZW1wbGF0ZXMgJiBjc3MuXG4gICAgICAgIHRoaXMuX3RlbXBsYXRlcyA9IGdldFRlbXBsYXRlczxIVD4oWydiYXNlJywgdGhpcy5jb25maWcubmFtZV0pO1xuICAgICAgICB0aGlzLl9jc3MgPSBnZXRDc3M8Q1Q+KFsnYmFzZScsIHRoaXMuY29uZmlnLm5hbWVdKTtcblxuICAgICAgICAvLyBDYWxjdWxhdGluZyBpZiBtb2JpbGUgdWkuXG4gICAgICAgIHZhciBkZXZpY2VUeXBlID0gZ2lneWEuXy5EZXZpY2VUeXBlcy5fdW5kZWZpbmVkO1xuICAgICAgICBpZiAodGhpcy5wYXJhbXMuZGV2aWNlVHlwZSkgZGV2aWNlVHlwZSA9IGdpZ3lhLl8uRGV2aWNlVHlwZXNbdGhpcy5wYXJhbXMuZGV2aWNlVHlwZS50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgZGV2aWNlVHlwZSA9IGRldmljZVR5cGUgfHwgdGhpcy5nZXRDb25maWcoKS5kZWZhdWx0RGV2aWNlVHlwZSB8fCBnaWd5YS5fLkRldmljZVR5cGVzLmRlc2t0b3A7XG5cbiAgICAgICAgdGhpcy5wYXJhbXMuZGV2aWNlVHlwZSA9IGdpZ3lhLl8uRGV2aWNlVHlwZXNbZGV2aWNlVHlwZV07XG5cbiAgICAgICAgdGhpcy5pc01vYmlsZVVJID0gZGV2aWNlVHlwZSA9PSBnaWd5YS5fLkRldmljZVR5cGVzLm1vYmlsZSB8fCAoZGV2aWNlVHlwZSA9PSBnaWd5YS5fLkRldmljZVR5cGVzLmF1dG8gJiYgZ2lneWEubG9jYWxJbmZvLmlzTW9iaWxlICYmIGdpZ3lhLmxvY2FsSW5mby5pc01vYmlsZUFwcCk7XG5cbiAgICAgICAgLy8gR2V0dGluZyByZWFkaW5nIGRpcmVjdGlvbi5cbiAgICAgICAgdGhpcy5pc1J0bCA9IHRoaXMubGFuZyA9PSAnaGUnIHx8IHRoaXMubGFuZyA9PSAnYXInO1xuXG4gICAgICAgIHRoaXMuaW5pdENvbnRhaW5lcigpO1xuXG4gICAgICAgIGlmICh0aGlzLl9zdHlsZSAhPSBQbHVnaW5TdHlsZS5ub25lKSB0aGlzLmluamVjdENzcygpO1xuXG4gICAgICAgIC8vIFNldHRpbmcgcG9sbGVyIGZvciBhdXRvLWRpc3Bvc2UuXG4gICAgICAgIHRoaXMuX3BvbGxlci5hZGRBY3Rpb25zKG5ldyBJbnZhbGlkUHJvcGVydHlBY3Rpb24odGhpcywgJ2NvbnRhaW5lcicsICgpID0+IHRoaXMuZGlzcG9zZSgpKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkQ29tcGxldGUoaXNTdWNjZWVkOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBpZiAoIWlzU3VjY2VlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaFBsdWdpbkV2ZW50KCdsb2FkJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc01vZGFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21vZGFsRGlhbG9nICYmICF0aGlzLmNvbmZpZy5kaXNhYmxlTW9kYWxDb250YWluZXJJbml0KSB0aGlzLl9tb2RhbERpYWxvZy5zaG93QWxsKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWcuZW5hYmxlVmlld3BvcnRQb2xsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BvbGxlci5hZGRBY3Rpb25zKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFZpZXdwb3J0U2l6ZUFjdGlvbigob2xkLCBjdXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vIGNoYW5naW5nIG1vZGFsIHRvIG1vYmlsZS1tb2RhbCB3aGVuIHZpZXdwb3J0J3Mgc21hbGwgZW5vdWdoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiAoY3Vyci53aWR0aCA8IHRoaXMuTU9CSUxFX01PREFMX01JTl9XSURUSClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICB0aGlzLl9tb2RhbERpYWxvZy5jaGFuZ2VUb01vYmlsZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIHRoaXMuX21vZGFsRGlhbG9nLmNoYW5nZVRvV2ViKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uVmlld3BvcnRTaXplQ2hhbmdlZChvbGQsIGN1cnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyTW9kYWwoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEV4dGVybmFsQ29tcG9uZW50cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcGx1Z2luIGlzIG5vdCBtb2RhbCwgdGhlIHdpZHRoIGlzIHNldCwgc2l6ZSBwb2xsaW5nIGlzIGVuYWJsZWQsIGFuZCB3aWR0aCBlbmRzIHdpdGggJyUnIGNoYXJhY3Rlciwgc3RhcnQgcG9sbGluZyBmb3IgY29udGFpbmVyIHNpemUgY2hhbmdlXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmVuYWJsZVNpemVQb2xsaW5nICYmICghdGhpcy5wYXJhbXMud2lkdGggfHwgdGhpcy5wYXJhbXMud2lkdGgudG9TdHJpbmcoKS5pbmRleE9mKCclJywgdGhpcy5wYXJhbXMud2lkdGgubGVuZ3RoIC0gMSkgIT09IC0xKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wb2xsZXIuYWRkQWN0aW9ucyhcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb250YWluZXJTaXplQWN0aW9uKHRoaXMuY29udGFpbmVyLCAob2xkLCBjdXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNpemVQbHVnaW4ob2xkLCBjdXJyKTsgLy8gY2FsbGluZyBhYnN0cmFjdCBtZXRob2QuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoRXh0ZXJuYWxDb21wb25lbnRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoRmxhZ1NlcnZpY2UudXNlVmlld3BvcnRQb2xsZXJBY3Rpb24gJiYgdGhpcy5jb25maWcuZW5hYmxlVmlld3BvcnRQb2xsaW5nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BvbGxlci5hZGRBY3Rpb25zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBWaWV3cG9ydFNpemVBY3Rpb24oKG9sZCwgY3VycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uVmlld3BvcnRTaXplQ2hhbmdlZChvbGQsIGN1cnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hFeHRlcm5hbENvbXBvbmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0YXJ0IHBvbGxpbmchXG4gICAgICAgICAgICBpZiAodGhpcy5fcG9sbGVyLmhhc0FjdGlvbnMoKSkgdGhpcy5fcG9sbGVyLnN0YXJ0KHRoaXMuUE9MTF9JTlRFUlZBTCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdENvbnRhaW5lcigpOiB2b2lkIHtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBwb3B1cCBjb250YWluZXIgaWYgbmVlZGVkLCBvdGhlcndpc2UgdXNlIGNvbnRhaW5lcklEXG4gICAgICAgIGlmICh0aGlzLmlzTW9kYWwpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdE1vZGFsQ29udGFpbmVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTZXQgdGhlIGNvbnRhaW5lciBzaXplXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uc2V0U2l6ZSh0aGlzLmNvbnRhaW5lciwgdGhpcy5wYXJhbXMud2lkdGgsIHRoaXMucGFyYW1zLmhlaWdodCwgZmFsc2UpO1xuXG4gICAgICAgICAgICB0aGlzLmFkZE1ldGFEYXRhQ2xhc3Nlcyh0aGlzLmNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtcy5yZXNwb25zaXZlKSB0aGlzLmNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICdhdXRvJztcblxuICAgICAgICAgICAgdGhpcy5fbG9hZGluZ0luZGljYXRvciA9IG5ldyBMb2FkRGltbWVyKHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0TW9kYWxDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMuX3N0eWxlID0gdGhpcy5nZXRQbHVnaW5TdHlsZSgpO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlTW9kYWxEaWFsb2coKTtcblxuICAgICAgICB0aGlzLl9jYXB0aW9uRWxlbWVudCA9IHRoaXMuX21vZGFsRGlhbG9nLmdldENhcHRpb25Db250YWluZXIoKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLl9tb2RhbERpYWxvZy5nZXRDb250ZW50Q29udGFpbmVyKCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVySUQgPSB0aGlzLmNvbnRhaW5lci5pZDtcbiAgICAgICAgdGhpcy5fbG9hZGluZ0luZGljYXRvciA9IHRoaXMuX21vZGFsRGlhbG9nLmdldExvYWRpbmdJbmRpY2F0b3IoKTtcbiAgICB9XG5cbiAgICAvLyBhZGRpbmcgbWV0YS1kYXRhIGNsYXNzZXMgW2ZvciBDU1Mgc2VsZWN0b3JzXSBmb3IgdGhlIHRvcCBlbGVtZW50IG9mIHRoZSBwbHVnaW4gLlxuICAgIHByb3RlY3RlZCBhZGRNZXRhRGF0YUNsYXNzZXModG9wRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHN0eWxlID0gdGhpcy5nZXRQbHVnaW5TdHlsZSgpO1xuICAgICAgICBzd2l0Y2ggKHN0eWxlKSB7XG4gICAgICAgICAgICBjYXNlIFBsdWdpblN0eWxlLmxlZ2FjeTpcbiAgICAgICAgICAgIGNhc2UgUGx1Z2luU3R5bGUubW9kZXJuOlxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudCh0b3BFbGVtZW50LCBnZXRQbHVnaW5TdHlsZUNsYXNzKHN0eWxlKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkQnJvd3NlckluZm9DbGFzc2VzVG9FbGVtZW50KHRvcEVsZW1lbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQbHVnaW5TdHlsZSgpOiBQbHVnaW5TdHlsZSB7XG4gICAgICAgIHJldHVybiBQbHVnaW5TdHlsZVt0aGlzLnBhcmFtcy5kaWFsb2dTdHlsZV0gfHwgdGhpcy5jb25maWcuZGVmYXVsdERpYWxvZ1N0eWxlIHx8IHRoaXMuX3N0eWxlO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0Q29udGFpbmVyTWluU2l6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyYW1zLmhlaWdodCAmJiB0aGlzLnBhcmFtcy5oZWlnaHQgIT0gJ2F1dG8nICYmIHRoaXMucGFyYW1zLmhlaWdodC5pbmRleE9mKCclJykgPT0gLTEpXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5taW5IZWlnaHQgPSB0aGlzLnBhcmFtcy5oZWlnaHQgKyAncHgnO1xuXG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy53aWR0aCAmJiB0aGlzLnBhcmFtcy53aWR0aCAhPSAnYXV0bycgJiYgdGhpcy5wYXJhbXMud2lkdGguaW5kZXhPZignJScpID09IC0xKSB0aGlzLmNvbnRhaW5lci5zdHlsZS5taW5XaWR0aCA9IHRoaXMucGFyYW1zLndpZHRoICsgJ3B4JztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZU1vZGFsRGlhbG9nKCkge1xuICAgICAgICAvLyBHZXR0aW5nIGNhcHRpb25cbiAgICAgICAgdmFyIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5jYXB0aW9uVGV4dCkgdGl0bGUgPSB0aGlzLnBhcmFtcy5jYXB0aW9uVGV4dDtcbiAgICAgICAgZWxzZSBpZiAodGhpcy5wYXJhbXMuY2FwdGlvblRleHRLZXkpIHRpdGxlID0gdGhpcy5nZXRUZXh0KHRoaXMucGFyYW1zLmNhcHRpb25UZXh0S2V5KTtcbiAgICAgICAgZWxzZSB0aXRsZSA9ICcmbmJzcDsnO1xuXG4gICAgICAgIHZhciBjbG9zZUltYWdlOiBzdHJpbmc7XG5cbiAgICAgICAgLy8gR2V0dGluZyBkaW0gZWZmZWN0LlxuICAgICAgICB2YXIgZGltTW9kYWw7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wYXJhbXMuZGltRGlhbG9nQmFja2dyb3VuZCAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZGltTW9kYWwgPSB0aGlzLnBhcmFtcy5kaW1EaWFsb2dCYWNrZ3JvdW5kO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnLmRlZmF1bHRNb2RhbFBhcmFtcyAmJiB0eXBlb2YgdGhpcy5jb25maWcuZGVmYXVsdE1vZGFsUGFyYW1zLmRpbURpYWxvZ0JhY2tncm91bmQgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRpbU1vZGFsID0gdGhpcy5jb25maWcuZGVmYXVsdE1vZGFsUGFyYW1zLmRpbURpYWxvZ0JhY2tncm91bmQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaW1Nb2RhbCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBob3RvVXJsO1xuICAgICAgICB2YXIgY3NzID0gdGhpcy5wYXJhbXMubW9kYWxDc3M7XG4gICAgICAgIHZhciBpc0xlZ2FjeSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghY3NzKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3N0eWxlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBQbHVnaW5TdHlsZS5tb2Rlcm46XG4gICAgICAgICAgICAgICAgICAgIGNzcyA9IHRoaXMuZ2V0Q3NzKCkubW9kZXJuX21vZGFsO1xuICAgICAgICAgICAgICAgICAgICBwaG90b1VybCA9IHRoaXMuZ2V0UGhvdG9GdWxsTmFtZSgnZ20vY2xvc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBQbHVnaW5TdHlsZS5sZWdhY3k6XG4gICAgICAgICAgICAgICAgICAgIGlzTGVnYWN5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY3NzID0gdGhpcy5nZXRDc3MoKS5sZWdhY3lfbW9kYWw7XG4gICAgICAgICAgICAgICAgICAgIHBob3RvVXJsID0gdGhpcy5faW1nQmFzZSArICdnbS9DbG9zZUJ1dHRvbi4nICsgdGhpcy5faW1nRXh0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFBsdWdpblN0eWxlLm5vbmU6XG4gICAgICAgICAgICAgICAgICAgIGNzcyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBwaG90b1VybCA9IHRoaXMuZ2V0UGhvdG9GdWxsTmFtZSgnZ20vY2xvc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnJlY29nbml6ZWQgZGlhbG9nIHN0eWxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjc3MgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbChjc3MsIHsgaW1nQmFzZTogdGhpcy5faW1nQmFzZSB9KTtcblxuICAgICAgICAvLyBHZXR0aW5nIGNsb3NlLWltYWdlXG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5jbG9zZUltYWdlKSB7XG4gICAgICAgICAgICBjbG9zZUltYWdlID0gdGhpcy5wYXJhbXMuY2xvc2VJbWFnZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsb3NlSW1hZ2UgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLmdldFRlbXBsYXRlcygpLm1vZGFsQ2xvc2VCdXR0b24sIHtcbiAgICAgICAgICAgICAgICBpbWdVcmw6IHRoaXMucGFyYW1zWydjbG9zZUltYWdlVXJsJ10gfHwgcGhvdG9VcmwsXG4gICAgICAgICAgICAgICAgaW1nSGVpZ2h0OiB0aGlzLnBhcmFtc1snY2xvc2VJbWFnZUhlaWdodCddIHx8IDE1LFxuICAgICAgICAgICAgICAgIGltZ1dpZHRoOiB0aGlzLnBhcmFtc1snY2xvc2VJbWFnZVdpZHRoJ10gfHwgMTUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX21vZGFsRGlhbG9nID0gbmV3IE1vZGFsRGlhbG9nKFxuICAgICAgICAgICAgdGhpcy5pbmplY3Rpb25JbmZvLm1ldGhvZE5hbWUsXG4gICAgICAgICAgICB0aGlzLmlzTW9iaWxlVUksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbW9kYWxUZW1wbGF0ZTogdGhpcy5wYXJhbXMubW9kYWxUZW1wbGF0ZSB8fCAoaXNMZWdhY3kgPyB0aGlzLmdldFRlbXBsYXRlcygpLmxlZ2FjeU1vZGFsIDogdGhpcy5nZXRUZW1wbGF0ZXMoKS5tb2RhbCksXG4gICAgICAgICAgICAgICAgbW9kYWxDc3M6IGNzcyxcbiAgICAgICAgICAgICAgICBjYXB0aW9uVGV4dDogdGl0bGUsXG4gICAgICAgICAgICAgICAgY2xvc2VJbWFnZTogY2xvc2VJbWFnZSxcbiAgICAgICAgICAgICAgICBkaW1EaWFsb2dCYWNrZ3JvdW5kOiBkaW1Nb2RhbCxcbiAgICAgICAgICAgICAgICBuZXdNb2RhbDogdGhpcy5wYXJhbXMubmV3TW9kYWwsXG4gICAgICAgICAgICAgICAgb25Nb2RhbENsb3NlOiByZWFzb24gPT4gdGhpcy5jbG9zZShDbG9zZVJlYXNvbnNbcmVhc29uXSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNMZWdhY3ksXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5hZGRNZXRhRGF0YUNsYXNzZXModGhpcy5fbW9kYWxEaWFsb2cuZ2V0TW9kYWxEaWFsb2dDb250YWluZXIoKSk7XG4gICAgICAgIGNvbnN0IGhvdEtleURhdGE6IElIb3RLZXkgPSB7XG4gICAgICAgICAgICBrZXk6IEtleXMuZXNjYXBlLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaG90S2V5RXZlbnQgPSBnaWd5YS51dGlscy5rZXlib2FyZC5vbkhvdEtleUNsaWNrZWQoaG90S2V5RGF0YSBhcyBhbnksICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbmplY3RDc3MoKSB7XG4gICAgICAgIC8vLyBUT0RPOiBjYW4gd2UgZ2V0IHJpZCBvZiB0aGlzIGZ1bmN0aW9uP1xuXG4gICAgICAgIHZhciBmaW5hbENzcyA9ICcnO1xuICAgICAgICB2YXIgY3NzUHJlZml4ID0gdGhpcy5wYXJhbXNbJ2Nzc1ByZWZpeCddO1xuICAgICAgICB2YXIgZGVmYXVsdENzcyA9IHRoaXMuZ2V0Q3NzKCk7XG5cbiAgICAgICAgdmFyIGpzTmFtZSA9IHRoaXMuY29uZmlnLmpzTmFtZTtcbiAgICAgICAgaWYgKCFjc3NGbGFnc1tqc05hbWVdKSBjc3NGbGFnc1tqc05hbWVdID0ge307XG4gICAgICAgIHZhciBjc3NEaWRMb2FkRmxhZ3MgPSBjc3NGbGFnc1tqc05hbWVdO1xuXG4gICAgICAgIGlmIChjc3NQcmVmaXggfHwgIXRoaXMuYWRkZWRDc3MpIHtcbiAgICAgICAgICAgIGZpbmFsQ3NzID0gdGhpcy5hZGRDc3NJZkRpZG50TG9hZCgncmVzZXQnLCBkZWZhdWx0Q3NzLCBjc3NEaWRMb2FkRmxhZ3MsIGZpbmFsQ3NzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUnRsKSBmaW5hbENzcyA9IHRoaXMuYWRkQ3NzSWZEaWRudExvYWQoJ3Jlc2V0UnRsJywgZGVmYXVsdENzcywgY3NzRGlkTG9hZEZsYWdzLCBmaW5hbENzcyk7XG5cbiAgICAgICAgICAgIGZpbmFsQ3NzID0gdGhpcy5hZGRDc3NJZkRpZG50TG9hZCgnZ2xvYmFsJywgZGVmYXVsdENzcywgY3NzRGlkTG9hZEZsYWdzLCBmaW5hbENzcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1J0bCkgZmluYWxDc3MgPSB0aGlzLmFkZENzc0lmRGlkbnRMb2FkKCdnbG9iYWxSdGwnLCBkZWZhdWx0Q3NzLCBjc3NEaWRMb2FkRmxhZ3MsIGZpbmFsQ3NzKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSkge1xuICAgICAgICAgICAgICAgIGZpbmFsQ3NzID0gdGhpcy5hZGRDc3NJZkRpZG50TG9hZCgnbW9iaWxlJywgZGVmYXVsdENzcywgY3NzRGlkTG9hZEZsYWdzLCBmaW5hbENzcyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSdGwpIGZpbmFsQ3NzID0gdGhpcy5hZGRDc3NJZkRpZG50TG9hZCgnbW9iaWxlUnRsJywgZGVmYXVsdENzcywgY3NzRGlkTG9hZEZsYWdzLCBmaW5hbENzcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpbmFsQ3NzID0gdGhpcy5hZGRDc3NJZkRpZG50TG9hZCgnbm9uTW9iaWxlJywgZGVmYXVsdENzcywgY3NzRGlkTG9hZEZsYWdzLCBmaW5hbENzcyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSdGwpIGZpbmFsQ3NzID0gdGhpcy5hZGRDc3NJZkRpZG50TG9hZCgnbm9uTW9iaWxlUnRsJywgZGVmYXVsdENzcywgY3NzRGlkTG9hZEZsYWdzLCBmaW5hbENzcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmaW5hbENzcykgYWRkQ3NzKGZpbmFsQ3NzLCBjc3NQcmVmaXgpO1xuICAgICAgICAgICAgdGhpcy5hZGRlZENzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb25maWcuaGFzTW9iaWxlVUkgJiYgdGhpcy5pc01vYmlsZVVJICYmIHRoaXMuY29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vLyAqKiBzdGFydGluZyBwbHVnaW4gcHJvY2VzcyAtIGVuZCAqKipcblxuICAgIC8vLyAqKiBcIkFic3RyYWN0XCIgbWV0aG9kcyAgLSBzdGFydCAqKipcblxuICAgIHByb3RlY3RlZCBpbml0KGxvYWRlZENhbGxiYWNrOiAoaXNTdWNjZWVkPzogYm9vbGVhbikgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVycm9yKGdpZ3lhLl8uQmFzZU9iamVjdC5OT1RfSU1QTEVNRU5URURfRVJST1IsIEdTRXJyb3JzLk5PVF9TVVBQT1JURUQpO1xuICAgICAgICBsb2FkZWRDYWxsYmFjayhmYWxzZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlc2l6ZVBsdWdpbihvbGQ6IGdpZ3lhLklFbGVtZW50QWN0dWFsU2l6ZSwgY3VycjogZ2lneWEuSUVsZW1lbnRBY3R1YWxTaXplKTogdm9pZCB7XG4gICAgICAgIC8vIG92ZXJyaWRlIHRvIG1ha2UgcGx1Z2luIHJlc3BvbnNpdmUgdG8gY29udGFpbmVyIHJlc2l6ZVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblZpZXdwb3J0U2l6ZUNoYW5nZWQob2xkOiBnaWd5YS5JVmlld3BvcnRTaXplLCBjdXJyOiBnaWd5YS5JVmlld3BvcnRTaXplKTogdm9pZCB7XG4gICAgICAgIC8vIG92ZXJyaWRlIHRvIG1ha2UgcGx1Z2luIHJlc3BvbnNpdmUgdG8gdmlld3BvcnQgKHdpbmRvdykgcmVzaXplXG4gICAgfVxuXG4gICAgLy8vICoqIFwiQWJzdHJhY3RcIiBtZXRob2RzICAtIGVuZCAqKipcblxuICAgIC8vLyAqKiBWaXJ0dWFsIG1ldGhvZHMgLSBzdGFydCAqKipcblxuICAgIHByb3RlY3RlZCBzaG91bGRDbG9zZSgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8vICoqIFZpcnR1YWwgbWV0aG9kcyAtIGVuZCAqKipcblxuICAgIC8vLyAqKiBTZXJ2aWNlIG1ldGhvZHMgLSBzdGFydCAqKipcblxuICAgIHB1YmxpYyBjZW50ZXJNb2RhbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX21vZGFsRGlhbG9nICYmICF0aGlzLmlzTW9iaWxlVUkpIHtcbiAgICAgICAgICAgIHRoaXMuX21vZGFsRGlhbG9nLmNlbnRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2l6ZU1vZGFsKHNpemU6IGdpZ3lhLklFbGVtZW50U2l6ZSkge1xuICAgICAgICBpZiAodGhpcy5pc01vZGFsICYmIHRoaXMuX21vZGFsRGlhbG9nICYmICF0aGlzLmlzTW9iaWxlVUkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldFBsdWdpblN0eWxlKCkgPT09IFBsdWdpblN0eWxlLmxlZ2FjeSkge1xuICAgICAgICAgICAgICAgIC8vIHJldmVydCBzaXplIHRvIG9ubHkgd29yayB3aXRoIHBpeGVsIHNpemVzLCBhbmQgaW4gdXNlIG1pbi1oZWlnaHQvd2lkdGhcbiAgICAgICAgICAgICAgICBpZiAoc2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2l6ZS5taW5IZWlnaHQgPSBwYXJzZUludChzaXplLmhlaWdodCkgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzaXplLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpemUubWluV2lkdGggPSBwYXJzZUludChzaXplLndpZHRoKSArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzaXplLndpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHByZXZTaXplID0geyBoZWlnaHQ6IHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCwgd2lkdGg6IHRoaXMuY29udGFpbmVyLmNsaWVudFdpZHRoIH07XG4gICAgICAgICAgICB0aGlzLl9tb2RhbERpYWxvZy5yZXNpemUoc2l6ZSk7XG4gICAgICAgICAgICB2YXIgbmV3U2l6ZSA9IHsgaGVpZ2h0OiB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQsIHdpZHRoOiB0aGlzLmNvbnRhaW5lci5jbGllbnRXaWR0aCB9O1xuICAgICAgICAgICAgLy90aGlzLnJlc2l6ZVBsdWdpbihwcmV2U2l6ZSwgbmV3U2l6ZSk7IC8vIFRoZSBwbHVnaW4gc2hvdWxkIGhhbmRsZSB0aGlzIGhpbXNlbGYgc2luY2UgaGUgaXMgdGhlIG9uZSB0aGF0IGluaXRpYXRlZCB0aGUgcmVzaXplXG5cbiAgICAgICAgICAgIGlmICghdGhpcy5jb25maWcuZGlzYWJsZU1vZGFsQ29udGFpbmVySW5pdCkgdGhpcy5jZW50ZXJNb2RhbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBob3RvRnVsbE5hbWUocGhvdG9OYW1lOiBzdHJpbmcsIHBpeGVsUmF0aW8gPSB0aGlzLl9waXhlbFJhdGlvLCBleHQgPSB0aGlzLl9pbWdFeHQsIGltZ0Jhc2UgPSB0aGlzLl9pbWdCYXNlKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGltZ0Jhc2UgKyBwaG90b05hbWUgKyAnX3gnICsgcGl4ZWxSYXRpbyArICcuJyArIGV4dDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZGlzcGF0Y2hQbHVnaW5FdmVudChuYW1lOiBzdHJpbmcsIGV2ZW50T2JqOiBPYmplY3QgPSB7fSkge1xuICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbyhgJHt0aGlzLmluamVjdGlvbkluZm8ubmFtZX0gZGlzcGF0Y2hlcyAke25hbWV9IGV2ZW50OmAsIGV2ZW50T2JqKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2hFdmVudChuYW1lLCBldmVudE9iaik7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRlbXBsYXRlcygpOiBIVCB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENzcygpOiBDVCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jc3M7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZENzc0lmRGlkbnRMb2FkKGNzc05hbWU6IHN0cmluZywgZGVmYXVsdENzczogSVBsdWdpbkNTUywgbG9hZGluZ0ZsYWdzOiBPYmplY3QsIGN1cnJlbnRDc3M6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmIChkZWZhdWx0Q3NzW2Nzc05hbWVdICYmICFsb2FkaW5nRmxhZ3NbY3NzTmFtZV0pIHtcbiAgICAgICAgICAgIGxvYWRpbmdGbGFnc1tjc3NOYW1lXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gKGN1cnJlbnRDc3MgKz0gJyAnICsgZGVmYXVsdENzc1tjc3NOYW1lXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3VycmVudENzcztcbiAgICB9XG5cbiAgICAvLyBUcmFuc2xhdGlvbnNcbiAgICBwdWJsaWMgZ2V0VGV4dChrZXk6IHN0cmluZywgcmVwbGFjZVN0cj86IHN0cmluZywgd2l0aFN0cj86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHZhciB0ZXh0OiBzdHJpbmc7XG5cbiAgICAgICAgY29uc3QgY3VzdG9tTGFuZyA9IHsuLi5naWd5YS51dGlscy5vYmplY3Qubm9ybWFsaXplT2JqZWN0S2V5c1RvTG93ZXJDYXNlKHRoaXMucGFyYW1zLmN1c3RvbUxhbmcgfHwge30pfTtcbiAgICAgICAgaWYgKGN1c3RvbUxhbmdba2V5LnRvTG93ZXJDYXNlKCldKSB7XG4gICAgICAgICAgICB0ZXh0ID0gY3VzdG9tTGFuZ1trZXkudG9Mb3dlckNhc2UoKV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0ID0gZ2V0TG9jYWxpemVkVGV4dCh0aGlzLmxvY2FsaXplZEpzTmFtZSwga2V5LCB0aGlzLmxhbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRleHQ/LnJlcGxhY2UocmVwbGFjZVN0ciwgd2l0aFN0cik7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtcy5jb250YWluZXJJRCA/IHRoaXMucGFyYW1zLmNvbnRhaW5lcklEICsgJy4nICsgdGhpcy5pbmplY3Rpb25JbmZvLm5hbWUgOiB0aGlzLmluamVjdGlvbkluZm8ubmFtZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZXJyb3IobXNnOiBzdHJpbmcsIGVycm9yQ29kZSA9IEdTRXJyb3JzLkNMSUVOVF9MT0csIGU/OiBhbnkpIHtcbiAgICAgICAgY29uc3Qgc3RhdHVzTWVzc2FnZSA9IGUgJiYgZS5yZXNwb25zZSAmJiBlLnJlc3BvbnNlLnN0YXR1c01lc3NhZ2U7XG4gICAgICAgIGNvbnN0IGVycm9ySW5mbyA9IHtcbiAgICAgICAgICAgIHN0YXR1c01lc3NhZ2U6IHN0YXR1c01lc3NhZ2UsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IG1zZyxcbiAgICAgICAgICAgIGVycm9yQ29kZTogZXJyb3JDb2RlLFxuICAgICAgICAgICAgZXJyb3JEZXRhaWxzOiB0aGlzLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBjb250YWluZXJJRDogdGhpcy5wYXJhbXMuY29udGFpbmVySUQsXG4gICAgICAgICAgICBwYXJhbXM6IHRoaXMucGFyYW1zLFxuICAgICAgICAgICAgaW5mbzogZSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLndhcm4obXNnLCBlKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5kaXNwYXRjaEVycm9yRnJvbVJlc3BvbnNlKGVycm9ySW5mbyk7XG4gICAgfVxuXG4gICAgLy8gQ2xvc2VzIHRoZSBwbHVnaW4gLSByYWlzZXMgdGhlICdoaWRlJyBldmVudCBhbmQgZW5hYmxlIGNhbmNlbGxpbmcgYnkgZGVyaXZlZCBwbHVnaW5zIHdpdGggb3ZlcnJpZGluZyBvZiAnc2hvdWxkQ2xvc2UnXG4gICAgcHJvdGVjdGVkIGNsb3NlKHJlYXNvbj86IHN0cmluZywgZXZlbnRPYmo/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFldmVudE9iaikge1xuICAgICAgICAgICAgZXZlbnRPYmogPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50T2JqLnJlYXNvbiA9IHJlYXNvbjtcblxuICAgICAgICB0aGlzLmRpc3BhdGNoUGx1Z2luRXZlbnQoJ2hpZGUnLCBldmVudE9iaik7XG4gICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGBjbG9zaW5nICR7dGhpcy5pbmplY3Rpb25JbmZvLm5hbWV9IChyZWFzb246ICR7cmVhc29ufSlgKTtcblxuICAgICAgICBpZiAodGhpcy5zaG91bGRDbG9zZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vLyAqKiBTZXJ2aWNlIG1ldGhvZHMgLSBlbmQgKioqXG5cbiAgICAvLy8gTGlmZWN5Y2xlXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9pc0Rpc3Bvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9wb2xsZXIuZGlzcG9zZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fbW9kYWxEaWFsb2cpIHtcbiAgICAgICAgICAgIHRoaXMuX21vZGFsRGlhbG9nLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9sb2FkaW5nSW5kaWNhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkaW5nSW5kaWNhdG9yLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhvdEtleUV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmhvdEtleUV2ZW50LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gICAgICAgIGdpZ3lhLl8ucGx1Z2lucy5yZW1vdmVQbHVnaW5JbnN0YW5jZSh0aGlzLnBhcmFtcywgdGhpcy5pbmplY3Rpb25JbmZvKTtcblxuICAgICAgICBzdXBlci5kaXNwb3NlKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGVudW0gQ2xvc2VSZWFzb25zIHtcbiAgICBwZW5kaW5nRXJyb3IsIC8vIGFuIHVuaGFuZGxlZCBwZW5kaW5nIGVycm9yIGZyb20gdGhlIHNlcnZlciBub3QgaGFuZGxlZCBpbnRlcm5hbGx5IGJ5IHRoZSBzY3JlZW5zZXRcbiAgICBtaXNzaW5nLCAvLyBhdHRlbXB0IHRvIG1vdmUgdG8gYSBzY3JlZW4gc2V0IG5hbWUgdGhhdCBkb2VzIG5vdCBleGlzdHNcbiAgICBmaW5pc2hlZCwgLy8gc2NyZWVuU2V0IGZsb3cgZmluaXNoZWQgKG1vdmUgdG8gX2ZpbmlzaCBzY3JlZW4gb3Igbm8gbW9yZSBmb3JtcylcbiAgICBjYW5jZWxlZCwgLy8gc2NyZWVuU2V0IGZsb3cgY2FuY2VsZWQgKGJ5IHggaW4gdGhlIGRpYWxvZyBvciBieSBjbGllbnQgc2NyaXB0KVxuICAgIGJhY2tCdXR0b24sIC8vIG1vYmlsZSBkaWFsb2cgaXMgY2xvc2VkIGJ5IGJhY2sgaW4gdGhlIGJyb3dzZXJcbiAgICBjYW5jZWxlZEJ5UGFyZW50LCAvLyB1c2VkIGludGVybmFsbHkgdG8gcGFyZW50IGNoaWxkIHRvIGNsb3NlIGl0cyBjaGlsZFxuICAgIHNraXAsIC8vIHNjcmVlblNldCBmbG93IGZpbmlzaGVkIGR1ZSB0byBfc2tpcFxuICAgIGVycm9yLCAvLyBlcnJvciBmcm9tIHNlcnZlciBiZWZvcmUgd2UgaGF2ZSBhIHNjcmVlbiB0byBzaG93IHRoZW0gb24sXG4gICAgY2FuY2VsLC8vIHNjcmVlblNldCBmbG93IGNhbmNlbGVkKGNsb3NlIHRoZSBzY3JlZW4gd2l0aG91dCBmaW5lbGl6aW5nIHBlbmRpbmcgcHJvY2Vzc2VzKVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBJTnVtZXJpY01hcDxUPiB7XG4gICAgW2tleTogbnVtYmVyXTogVDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSU1hcDxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSUVudW1lcmFibGU8VD4ge1xuICAgIGxlbmd0aDogbnVtYmVyO1xuICAgIFtpOiBudW1iZXJdOiBUO1xufVxuZXhwb3J0IGZ1bmN0aW9uIExhc3RJbmRleE9mPFQ+KGFycjogSUVudW1lcmFibGU8VD4sIHZhbDogVCwgZnJvbUluZGV4ID0gMCk6IG51bWJlciB7XG4gICAgZm9yICh2YXIgaSA9IGFyci5sZW5ndGg7IC0taSA+PSBmcm9tSW5kZXg7ICkge1xuICAgICAgICBpZiAoYXJyW2ldID09PSB2YWwpIHJldHVybiBpO1xuICAgIH1cblxuICAgIHJldHVybiAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBGb3JFYWNoPFQ+KGFycjogSUVudW1lcmFibGU8VD4sIGFjdGlvbjogKGVsZW1lbnQ6IFQsIGluZGV4PzogbnVtYmVyLCBhcnI/OiBJRW51bWVyYWJsZTxUPikgPT4gdm9pZCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSBhY3Rpb24oYXJyW2ldLCBpLCBhcnIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEZvckVhY2hQcm9wPFQ+KG9iajogSU1hcDxUPiwgYWN0aW9uOiAocHJvcDogVCwgbmFtZTogc3RyaW5nLCBvYmo6IElNYXA8VD4pID0+IHZvaWQpO1xuZXhwb3J0IGZ1bmN0aW9uIEZvckVhY2hQcm9wPFQgZXh0ZW5kcyBPYmplY3Q+KG9iajogVCwgYWN0aW9uOiAocHJvcDogYW55LCBuYW1lOiBzdHJpbmcsIG9iajogVCkgPT4gdm9pZCk7XG5leHBvcnQgZnVuY3Rpb24gRm9yRWFjaFByb3Aob2JqOiBPYmplY3QsIGFjdGlvbjogKHByb3A6IGFueSwgbmFtZTogc3RyaW5nLCBvYmo6IE9iamVjdCkgPT4gdm9pZCkge1xuICAgIGZvciAodmFyIG5hbWUgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkobmFtZSkpIGFjdGlvbihvYmpbbmFtZV0sIG5hbWUsIG9iaik7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIFNvbWU8VD4oYXJyOiBJRW51bWVyYWJsZTxUPiwgY29uZGl0aW9uOiAoZWxlbWVudDogVCwgaW5kZXg/OiBudW1iZXIsIGFycj86IElFbnVtZXJhYmxlPFQ+KSA9PiBib29sZWFuKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKGNvbmRpdGlvbihhcnJbaV0sIGksIGFycikpIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBFdmVyeTxUPihhcnI6IElFbnVtZXJhYmxlPFQ+LCBjb25kaXRpb246IChlbGVtZW50OiBULCBpbmRleD86IG51bWJlciwgYXJyPzogSUVudW1lcmFibGU8VD4pID0+IGJvb2xlYW4pIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAoIWNvbmRpdGlvbihhcnJbaV0sIGksIGFycikpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBFdmVyeVByb3A8VD4ob2JqOiBJTWFwPFQ+LCBjb25kaXRpb246IChwcm9wOiBULCBuYW1lOiBzdHJpbmcsIG9iajogSU1hcDxUPikgPT4gYm9vbGVhbik7XG5leHBvcnQgZnVuY3Rpb24gRXZlcnlQcm9wPFQ+KG9iajogVCwgY29uZGl0aW9uOiAocHJvcCwgbmFtZTogc3RyaW5nLCBvYmo6IFQpID0+IGJvb2xlYW4pO1xuZXhwb3J0IGZ1bmN0aW9uIEV2ZXJ5UHJvcChvYmo6IE9iamVjdCwgY29uZGl0aW9uOiAocHJvcCwgbmFtZTogc3RyaW5nLCBvYmo6IE9iamVjdCkgPT4gYm9vbGVhbikge1xuICAgIGZvciAodmFyIG5hbWUgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkobmFtZSkgJiYgIWNvbmRpdGlvbihvYmpbbmFtZV0sIG5hbWUsIG9iaikpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBNYXA8UywgVD4oYXJyOiBJRW51bWVyYWJsZTxTPiwgYWN0aW9uOiAoZWxlbWVudDogUywgaW5kZXg/OiBudW1iZXIsIGFycj86IElFbnVtZXJhYmxlPFM+KSA9PiBUKSB7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheTxUPigpO1xuXG4gICAgRm9yRWFjaChhcnIsIChpdGVtLCBpZHgsIGFycikgPT4gcmVzdWx0LnB1c2goYWN0aW9uKGl0ZW0sIGlkeCwgYXJyKSkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBGaXJzdEluZGV4PFQ+KGFycjogSUVudW1lcmFibGU8VD4sIGNvbmRpdGlvbjogKGVsZW1lbnQ6IFQsIGluZGV4PzogbnVtYmVyLCBhcnI/OiBJRW51bWVyYWJsZTxUPikgPT4gYm9vbGVhbik6IG51bWJlciB7XG4gICAgdmFyIHJlc3VsdDogbnVtYmVyO1xuICAgIFNvbWUoYXJyLCAoaXRlbSwgaW5kZXgsIGFycikgPT4ge1xuICAgICAgICBpZiAoY29uZGl0aW9uKGl0ZW0sIGluZGV4LCBhcnIpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBpbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBGaXJzdDxUPihhcnI6IElFbnVtZXJhYmxlPFQ+LCBjb25kaXRpb246IChlbGVtZW50OiBULCBpbmRleD86IG51bWJlciwgYXJyPzogSUVudW1lcmFibGU8VD4pID0+IGJvb2xlYW4pOiBUIHtcbiAgICByZXR1cm4gYXJyW0ZpcnN0SW5kZXgoYXJyLCBjb25kaXRpb24pXTtcbn1cbiIsImV4cG9ydCBjb25zdCBsZWdhY3lfbW9kYWwgPSByZXF1aXJlKCdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2Nzcy9sZWdhY3lfbW9kYWwuY3NzJyk7XG5leHBvcnQgY29uc3QgbW9kZXJuX21vZGFsID0gcmVxdWlyZSgnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9jc3MvbW9kZXJuX21vZGFsLmNzcycpO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRDU1MgPSByZXF1aXJlKCdzcmMvYWNjb3VudHMvR2lneWEuSlMuUGx1Z2luLnNjcmVlblNldDIvYXBwL3N0eWxlL2RlZmF1bHRDU1MuY3NzJyk7XG4iLCJleHBvcnQgZnVuY3Rpb24gZml4Q3NzKGNzczogc3RyaW5nKSB7XG4gICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5pc0lFNyB8fCAoZ2lneWEubG9jYWxJbmZvLmlzSUUgJiYgZ2lneWEubG9jYWxJbmZvLnF1aXJrc01vZGUpKSB7XG4gICAgICAgIGNzcyA9IGNzcy5yZXBsYWNlKC9kaXNwbGF5OmlubGluZS1ibG9jay9nLCAnZGlzcGxheTppbmxpbmUtYmxvY2s7em9vbToxOypkaXNwbGF5OmlubGluZScpO1xuICAgIH1cblxuICAgIHJldHVybiBjc3MucmVwbGFjZShcbiAgICAgICAgL2dyYWRpZW50XFwoKC4qPyksKC4qPylcXCkvZyxcbiAgICAgICAgJ2ZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9XCIkMVwiLCBlbmRDb2xvcnN0cj1cIiQyXCIpOycgK1xuICAgICAgICAgICAgJ2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0b3AsICAkMSwgICQyKTsnICtcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCBsZWZ0LCAkMSwgJDIpOycgK1xuICAgICAgICAgICAgJ2JhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oJDEpLCB0bygkMikpOycgK1xuICAgICAgICAgICAgJ2JhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICQxLCAgJDIpJyxcbiAgICApO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFkZENzcyhydWxlczogYW55LCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgICBpZiAoIXJ1bGVzIHx8IHJ1bGVzID09ICcnKSByZXR1cm47XG4gICAgaWYgKHJ1bGVzIGluc3RhbmNlb2YgQXJyYXkpIHJ1bGVzID0gcnVsZXMuam9pbignICcpO1xuICAgIC8vICAgIHJ1bGVzID0gZml4Q3NzKHJ1bGVzKTtcbiAgICBpZiAocHJlZml4KSBydWxlcyA9IHJ1bGVzLnJlcGxhY2UoLyhbXlxcc31dKlxcLmdpZykvZywgcHJlZml4ICsgJyAkMScpO1xuICAgIHZhciBzdHlsZTogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbiAgICB2YXIgcnVsZXNOb2RlOiBhbnkgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShydWxlcyk7XG4gICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgaWYgKHJ1bGVzTm9kZS52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBydWxlc05vZGUudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBydWxlc05vZGUubm9kZVZhbHVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQocnVsZXNOb2RlKTtcbiAgICB9XG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpO1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAoaGVhZC5sZW5ndGggPiAwID8gaGVhZFswXSA6IGJvZHkpLmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiByZXBsYWNlTGlua3NXaXRoSFRNTEVsZW1lbnRzKHRleHREYXRhKSB7XG4gICAgdmFyIHJlZ2V4ID0gLyhodHRwfGh0dHBzKTpcXC9cXC8oXFx3Kzp7MCwxfVxcdypAKT8oXFxTKykoOlswLTldKyk/KFxcL3xcXC8oW1xcdyMhOi4/Kz0mJUAhXFwtXFwvXSkpPy9nO1xuICAgIHZhciBsaW5rcyA9IHRleHREYXRhLm1hdGNoKHJlZ2V4KTtcbiAgICBpZiAobGlua3MpXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzYW5pdGl6ZWRMaW5rID0gZ2lneWEudXRpbHMuc2FuaXRpemUuc2FuaXRpemVBdHRyaWJ1dGUobGlua3NbaV0pO1xuICAgICAgICAgICAgdGV4dERhdGEgPSB0ZXh0RGF0YS5yZXBsYWNlKHNhbml0aXplZExpbmssICc8YSBocmVmPVwiJyArIHNhbml0aXplZExpbmsgKyAnXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3dcIj4nICsgc2FuaXRpemVkTGluayArICc8L2E+Jyk7XG4gICAgICAgIH1cblxuICAgIHJldHVybiB0ZXh0RGF0YTtcbn1cbiIsImV4cG9ydCBjb25zdCBsZWdhY3lNb2RhbCA9IHJlcXVpcmUoJy4vaHRtbC9sZWdhY3lNb2RhbC5odG1sJyk7XG5leHBvcnQgY29uc3QgbW9kYWwgPSByZXF1aXJlKCcuL2h0bWwvbW9kYWwuaHRtbCcpO1xuZXhwb3J0IGNvbnN0IG1vZGFsQ2xvc2VCdXR0b24gPSByZXF1aXJlKCcuL2h0bWwvbW9kYWxDbG9zZUJ1dHRvbi5odG1sJyk7XG4iLCJleHBvcnQgZW51bSBQbHVnaW5TdHlsZSB7XG4gICAgX3VuZGVmaW5lZCA9IDAsXG4gICAgbm9uZSxcbiAgICBsZWdhY3ksXG4gICAgbW9kZXJuLFxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFBsdWdpblN0eWxlQ2xhc3Moc3R5bGU6IFBsdWdpblN0eWxlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2dpZ3lhLXN0eWxlLScgKyBQbHVnaW5TdHlsZVtzdHlsZV07XG59XG4iLCJpbXBvcnQgeyBhZGRDc3MsIGZpeENzcyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvQ3NzVXRpbHMnO1xuXG5naWd5YS51dGlscy5mdW5jdGlvbnMuY3JlYXRlQWxpYXMoJ2dpZ3lhLmdsb2JhbC5hZGRDU1MnLCBhZGRDc3MpO1xuZ2lneWEudXRpbHMuZnVuY3Rpb25zLmNyZWF0ZUFsaWFzKCdnaWd5YS5wbHVnaW5VdGlscy5jc3MuZml4Q3NzJywgZml4Q3NzKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBhZGRPclJlcGxhY2VIYXNoRnJhZ21lbnQodXJsOiBzdHJpbmcsIHBhcmFtOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHVybCA9IHJlbW92ZUhhc2hGcmFnbWVudCh1cmwsIHBhcmFtKTtcbiAgICB1cmwgPSBhZGRIYXNoRnJhZ21lbnQodXJsLCBwYXJhbSwgdmFsdWUpO1xuICAgIHJldHVybiB1cmw7XG59XG5leHBvcnQgZnVuY3Rpb24gYWRkSGFzaEZyYWdtZW50KHVybDogc3RyaW5nLCBwYXJhbTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICB2YXIgc2lnbiA9ICcjJztcbiAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhbHJlYWR5IGFuIGhhc2hmcmFnbWVudCBleGlzdFxuICAgIGlmICh1cmwuaW5kZXhPZignIycpICE9IC0xKVxuICAgICAgICBpZiAodXJsLmluZGV4T2YocGFyYW0pID09IC0xKVxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGV4aXN0IGhhc2hmcmFnbWVudCBpcyB0aGUgc2FtZSBhcyB3ZSB3YW50IHRvIGFkZCAtIHNvIHdlIG5lZWQgb3IgcmVhcGxjZSBpdFxuICAgICAgICAgICAgc2lnbiA9ICcmJztcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgb2xkVmFsdWUgPSBwYXJhbSArICc9JyArIHRoaXMuZ2V0SGFzaFBhcmFtVmFsdWUodXJsLCBwYXJhbSk7XG4gICAgICAgICAgICB1cmwucmVwbGFjZShvbGRWYWx1ZSwgcGFyYW0gKyAnPScgKyB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG5cbiAgICByZXR1cm4gdXJsICsgc2lnbiArIHBhcmFtICsgJz0nICsgdmFsdWU7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSGFzaEZyYWdtZW50KHVybDogc3RyaW5nLCBwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgdXJsIGNvbmF0aW4gaGFzaCBmcmFnbWVudFxuICAgIGlmICh1cmwuaW5kZXhPZignIycpID09IC0xKSByZXR1cm4gdXJsO1xuXG4gICAgLy8gR2V0IHRoZSBoYXNoIHZhbHVlIGlmIGV4aXN0XG4gICAgdmFyIGZ1bGxIYXNoUXVlcnkgPSB1cmwuc3BsaXQoJyMnKVsxXTtcbiAgICB2YXIgaGFzaFBhcmFtVmFsdWUgPSBnZXRIYXNoUGFyYW1WYWx1ZSh1cmwsIHBhcmFtKTtcbiAgICBpZiAoaGFzaFBhcmFtVmFsdWUpIGZ1bGxIYXNoUXVlcnkgPSBmdWxsSGFzaFF1ZXJ5LnJlcGxhY2UocGFyYW0gKyAnPScgKyBoYXNoUGFyYW1WYWx1ZSwgJycpO1xuXG4gICAgLy8gUmVtb3ZlIHRoZSBoYXNoIHBhcmFtIGluIGNhc2UgaXQgd2FzIGEgaGFzaCBwYXJhbSB3aXRob3V0ICc9J1xuICAgIGZ1bGxIYXNoUXVlcnkgPSBmdWxsSGFzaFF1ZXJ5LnJlcGxhY2UoJyYnICsgcGFyYW0sICcnKTtcbiAgICBmdWxsSGFzaFF1ZXJ5ID0gZnVsbEhhc2hRdWVyeS5yZXBsYWNlKCcjJyArIHBhcmFtLCAnIycpO1xuXG4gICAgaWYgKGZ1bGxIYXNoUXVlcnkubGVuZ3RoID4gMCAmJiAoKGZ1bGxIYXNoUXVlcnkgYXMgYW55KVswXSArPSAnJicpKSBmdWxsSGFzaFF1ZXJ5ID0gZnVsbEhhc2hRdWVyeS5zdWJzdHJpbmcoMSwgZnVsbEhhc2hRdWVyeS5sZW5ndGgpO1xuXG4gICAgLy8gUmVwbGFjZSB0aGUgY3VycmVudCBmdWxsIEhhc2ggUXVlcnkgd2l0aCB0aGUgbmV3IG9uZSB3aXRob3V0IHRoZSBnaXZlbiBwYXJhbSB0byByZW1vdmVkIGFuZCBpdCdzIHZhbHVlIGlmIGV4aXN0XG4gICAgdmFyIFVSTFdpdGhvdXRIYXNoID0gdXJsLnNwbGl0KCcjJylbMF07XG4gICAgLy8gQ2hla2MgaWYgdGhlIGhhc2ggcXVlcnkgbGVmdCB3aXRoIG5vIHBhcmFtc1xuICAgIGlmIChmdWxsSGFzaFF1ZXJ5Lmxlbmd0aCA9PSAwKSByZXR1cm4gVVJMV2l0aG91dEhhc2g7XG5cbiAgICByZXR1cm4gVVJMV2l0aG91dEhhc2ggKyAnIycgKyBmdWxsSGFzaFF1ZXJ5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEhhc2hQYXJhbVZhbHVlKHVybDogc3RyaW5nLCBwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAvLyBBZGQgdGhlICc9JyBzaWduIHRvIG1hdGNoIHRoZSBwYXJhbSBhbmQgbm90IG1heWJlIHRoZSBzYW1lIHN0cmluZyBpbiB0aGUgVVJMIG5vdCBhcyBhIHBhcmFtXG4gICAgcGFyYW0gKz0gJz0nO1xuICAgIGlmICh1cmwuaW5kZXhPZignIycpID09IC0xIHx8IHVybC5pbmRleE9mKHBhcmFtLCB1cmwuaW5kZXhPZignIycpKSA9PSAtMSkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyBmaW5kIHRoZSBuZXh0ICYgb3IgdGhlIGVuZCBvZiB0aGUgcGFyYW0gc3RyaW5nXG4gICAgdmFyIHN0YXJ0T2ZQYXJhbSA9IHVybC5pbmRleE9mKHBhcmFtLCB1cmwuaW5kZXhPZignIycpKTtcbiAgICB2YXIgZW5kT2ZQYXJhbSA9IHVybC5pbmRleE9mKCcmJywgc3RhcnRPZlBhcmFtKTtcblxuICAgIC8vIElmIHRoZSBwYXJhbSB3YXMgdW50aWxsIHRoZSBlbmQgb2YgdGhlIHN0cmluZyAtIHNldCB0aGUgZW5kT2ZQYXJhbSB0byB0aGUgZW5kIG9mIHRoZSBzdHJpbmcgdG9vXG4gICAgaWYgKGVuZE9mUGFyYW0gPT0gLTEpIGVuZE9mUGFyYW0gPSB1cmwubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHVybC5zdWJzdHJpbmcoc3RhcnRPZlBhcmFtICsgcGFyYW0ubGVuZ3RoLCBlbmRPZlBhcmFtKTtcbn1cbiIsImltcG9ydCB7IGFkZENzcyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvQ3NzVXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQnJvd3NlckluZm9DbGFzc2VzVG9FbGVtZW50KGVsOiBIVE1MRWxlbWVudCkge1xuICAgIC8vIGFkZCBwcmVmaXggZm9yIGVhY2ggYnJvd3NlciBwcm9wZXJ0eTogKCdjaHJvbWUgaW9zJyk9PiAnZ2lneWEtY2hyb21lIGdpZ3lhLWlvcydcbiAgICB2YXIgYnJvd3NlckNsYXNzZXMgPSAnZ2lneWEtJyArIGdpZ3lhLmxvY2FsSW5mby5jdXJyZW50QnJvd3NlcjtcblxuICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNJT1MpIHtcbiAgICAgICAgYnJvd3NlckNsYXNzZXMgKz0gJyBpb3MnOyAvLyBhZGRlZCBnbG9iYWwgaW9zIGNsYXNzIFtmb3IgYWxsIHZlcnNpb25zXVxuICAgIH1cblxuICAgIGJyb3dzZXJDbGFzc2VzID0gYnJvd3NlckNsYXNzZXMucmVwbGFjZSgvIC9nLCAnIGdpZ3lhLScpO1xuXG4gICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5pc05hdGl2ZU1vYmlsZUFwcCkgYnJvd3NlckNsYXNzZXMgPSAnZ2lneWEtbmF0aXZlLW1vYmlsZS1hcHAgJyArIGJyb3dzZXJDbGFzc2VzO1xuXG4gICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KGVsLCBicm93c2VyQ2xhc3Nlcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0VGV4dGJveFN1Ym1pdEJ1dHRvbihlbFRleHRib3g6IEhUTUxFbGVtZW50LCBlbEJ1dHRvbjogSFRNTEVsZW1lbnQpIHtcbiAgICB2YXIgZm5PblByZXNzID0gZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgY2hhckNvZGU7XG4gICAgICAgIGlmIChlICYmIGUud2hpY2gpIHtcbiAgICAgICAgICAgIGUgPSBlO1xuICAgICAgICAgICAgY2hhckNvZGUgPSBlLndoaWNoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZSA9IGV2ZW50O1xuICAgICAgICAgICAgY2hhckNvZGUgPSBlLmtleUNvZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXJDb2RlID09IDEzKSB7XG4gICAgICAgICAgICBlbEJ1dHRvbi5jbGljaygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGVsVGV4dGJveCwgJ2tleXVwJywgZm5PblByZXNzKTtcbiAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihlbEJ1dHRvbiwgJ2tleXVwJywgZm5PblByZXNzKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWxhdGl2ZVBvc2l0aW9uKHBvc2l0aW9uLCBzaXplLCBkaXJlY3Rpb24sIG1hcmdpbiwgZmxpcCkge1xuICAgIHZhciByZWxhdGl2ZVBvc2l0aW9uID0geyB0b3A6IDAsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAgfTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdib3R0b20nKSB7XG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24udG9wID0gcG9zaXRpb24uYm90dG9tICsgbWFyZ2luO1xuICAgICAgICByZWxhdGl2ZVBvc2l0aW9uLmxlZnQgPSBmbGlwID8gcG9zaXRpb24ucmlnaHQgLSBzaXplLncgOiBwb3NpdGlvbi5sZWZ0O1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndG9wJykge1xuICAgICAgICByZWxhdGl2ZVBvc2l0aW9uLnRvcCA9IHBvc2l0aW9uLnRvcCAtIHNpemUuaCAtIG1hcmdpbjtcbiAgICAgICAgcmVsYXRpdmVQb3NpdGlvbi5sZWZ0ID0gZmxpcCA/IHBvc2l0aW9uLnJpZ2h0IC0gc2l6ZS53IDogcG9zaXRpb24ubGVmdDtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24udG9wID0gZmxpcCA/IHBvc2l0aW9uLmJvdHRvbSAtIHNpemUuaCA6IHBvc2l0aW9uLnRvcDtcbiAgICAgICAgcmVsYXRpdmVQb3NpdGlvbi5sZWZ0ID0gcG9zaXRpb24ubGVmdCAtIHNpemUudyAtIG1hcmdpbjtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZWxhdGl2ZVBvc2l0aW9uLnRvcCA9IGZsaXAgPyBwb3NpdGlvbi5ib3R0b20gLSBzaXplLmggOiBwb3NpdGlvbi50b3A7XG4gICAgICAgIHJlbGF0aXZlUG9zaXRpb24ubGVmdCA9IHBvc2l0aW9uLnJpZ2h0ICsgbWFyZ2luO1xuICAgIH1cblxuICAgIHJlbGF0aXZlUG9zaXRpb24uYm90dG9tID0gcmVsYXRpdmVQb3NpdGlvbi50b3AgKyBzaXplLmg7XG4gICAgcmVsYXRpdmVQb3NpdGlvbi5yaWdodCA9IHJlbGF0aXZlUG9zaXRpb24ubGVmdCArIHNpemUudztcblxuICAgIHJldHVybiByZWxhdGl2ZVBvc2l0aW9uO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlUG9wb3Zlck5lYXJFbGVtZW50KGVsVGFyZ2V0LCBjb250YWluZXIsIGRpcmVjdGlvbiwgbWFyZ2luLCBmbGlwLCBhZGp1c3REaXJlY3Rpb24pIHtcbiAgICB2YXIgdGFyZ2V0UG9zaXRpb24gPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudFBvc2l0aW9uKGVsVGFyZ2V0KTtcbiAgICB2YXIgc2l6ZSA9IHsgdzogY29udGFpbmVyLm9mZnNldFdpZHRoLCBoOiBjb250YWluZXIub2Zmc2V0SGVpZ2h0IH07XG4gICAgdmFyIHBvc2l0aW9uID0gZ2V0UmVsYXRpdmVQb3NpdGlvbih0YXJnZXRQb3NpdGlvbiwgc2l6ZSwgZGlyZWN0aW9uLCBtYXJnaW4sIGZsaXApO1xuXG4gICAgaWYgKGFkanVzdERpcmVjdGlvbiAmJiAhZ2lneWEudXRpbHMudmlld3BvcnQuaXNSZWN0RnVsbHlWaXNpYmxlKHBvc2l0aW9uKSkge1xuICAgICAgICB2YXIgb3Bwb3NpdGUgPSB7XG4gICAgICAgICAgICBib3R0b206ICd0b3AnLFxuICAgICAgICAgICAgbGVmdDogJ3JpZ2h0JyxcbiAgICAgICAgICAgIHJpZ2h0OiAnbGVmdCcsXG4gICAgICAgICAgICB0b3A6ICdib3R0b20nLFxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBuZXdQb3NpdGlvbiA9IGdldFJlbGF0aXZlUG9zaXRpb24odGFyZ2V0UG9zaXRpb24sIHNpemUsIG9wcG9zaXRlW2RpcmVjdGlvbl0sIG1hcmdpbiwgZmFsc2UpO1xuICAgICAgICBpZiAoZ2lneWEudXRpbHMudmlld3BvcnQuaXNSZWN0SG9yaXpvbnRhbGx5VmlzaWJsZShuZXdQb3NpdGlvbikpIHBvc2l0aW9uID0gbmV3UG9zaXRpb247XG4gICAgfVxuXG4gICAgaWYgKCFnaWd5YS51dGlscy52aWV3cG9ydC5pc1JlY3RIb3Jpem9udGFsbHlWaXNpYmxlKHBvc2l0aW9uKSkge1xuICAgICAgICB2YXIgbmV3UG9zaXRpb24gPSBnZXRSZWxhdGl2ZVBvc2l0aW9uKHRhcmdldFBvc2l0aW9uLCBzaXplLCBkaXJlY3Rpb24sIG1hcmdpbiwgIWZsaXApO1xuICAgICAgICBpZiAoZ2lneWEudXRpbHMudmlld3BvcnQuaXNSZWN0SG9yaXpvbnRhbGx5VmlzaWJsZShuZXdQb3NpdGlvbikpIHBvc2l0aW9uID0gbmV3UG9zaXRpb247XG4gICAgfVxuXG4gICAgY29udGFpbmVyLnN0eWxlLmxlZnQgPSAnJyArIHBvc2l0aW9uLmxlZnQgKyAncHgnO1xuICAgIGNvbnRhaW5lci5zdHlsZS50b3AgPSAnJyArIHBvc2l0aW9uLnRvcCArICdweCc7XG4gICAgLy9jb250YWluZXIuc3R5bGUubWluV2lkdGggPSBlbFBvcG92ZXIub2Zmc2V0V2lkdGggKyAncHgnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBvcG92ZXJOZWFyRWxlbWVudChcbiAgICBlbFRhcmdldDogSFRNTEVsZW1lbnQsXG4gICAgZWxQb3BvdmVyOiBIVE1MRWxlbWVudCxcbiAgICBkaXJlY3Rpb24gPSAnYm90dG9tJyxcbiAgICBtYXJnaW4gPSAwLFxuICAgIGZsaXAgPSBmYWxzZSxcbiAgICBhZGp1c3REaXJlY3Rpb24gPSB0cnVlLFxuICAgIGFuaW1hdGlvbjogc3RyaW5nID0gbnVsbCxcbiAgICBmbldoZW5SZW1vdmVkOiBGdW5jdGlvbiA9IG51bGwsXG4gICAgcmVtb3ZlT25DbGlja0V4bGNsdWRlZEVsZW1lbnRzOiBIVE1MRWxlbWVudFtdID0gbnVsbCxcbikge1xuICAgIGlmICghZWxUYXJnZXQgfHwgIWVsUG9wb3Zlcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsUG9wb3Zlcik7XG4gICAgY29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBjb250YWluZXIuc3R5bGUuekluZGV4ID0gZ2lneWEudXRpbHMuRE9NLmdldE5leHRaSW5kZXgoKS50b1N0cmluZygpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJy0xMDAwcHgnOyAvLyBEcmF3IG91dHNpZGUgb2Ygc2NyZWVuIHRvIGdldCB0aGUgc2l6ZVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBwbGFjZVBvcG92ZXJOZWFyRWxlbWVudChlbFRhcmdldCwgY29udGFpbmVyLCBkaXJlY3Rpb24sIG1hcmdpbiwgZmxpcCwgYWRqdXN0RGlyZWN0aW9uKTtcblxuICAgIHJlbW92ZUVsZW1lbnRPbkRvY0NsaWNrT3JFc2NhcGUoXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgZSA9PiB7XG4gICAgICAgICAgICBlbFRhcmdldC5mb2N1cygpO1xuICAgICAgICAgICAgZm5XaGVuUmVtb3ZlZChlKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlT25DbGlja0V4bGNsdWRlZEVsZW1lbnRzLFxuICAgICk7XG5cbiAgICBpZiAoYW5pbWF0aW9uICYmIHR5cGVvZiBnaWd5YS5wbHVnaW5VdGlscy5hbmltYXRpb25bYW5pbWF0aW9uXSA9PT0gJ2Z1bmN0aW9uJykgZ2lneWEucGx1Z2luVXRpbHMuYW5pbWF0aW9uW2FuaW1hdGlvbl0oZWxQb3BvdmVyKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudE9uRG9jQ2xpY2tPckVzY2FwZShlbDogSFRNTEVsZW1lbnQsIGZuQ2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCwgZXhjbHVkZWRFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IG51bGwpIHtcbiAgICBpZiAoIWVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmblJlbW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIHdhc09wZW4gPSBlbCAmJiBlbC5wYXJlbnROb2RlO1xuXG4gICAgICAgIGlmICh3YXNPcGVuKSBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcblxuICAgICAgICBpZiAoZm5DYWxsYmFjaykgZm5DYWxsYmFjayhlLCB3YXNPcGVuKTtcbiAgICB9O1xuXG4gICAgbGV0IGFyQWxsRXhjbHVkZWQgPSBbZWxdO1xuICAgIGlmIChleGNsdWRlZEVsZW1lbnRzKSB7XG4gICAgICAgIGFyQWxsRXhjbHVkZWQgPSBhckFsbEV4Y2x1ZGVkLmNvbmNhdChleGNsdWRlZEVsZW1lbnRzKTtcbiAgICB9XG5cbiAgICBwZXJmb3JtT25Eb2NDbGlja09yRXNjYXBlKGZuUmVtb3ZlLCBhckFsbEV4Y2x1ZGVkKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoaWRlRWxlbWVudE9uRG9jQ2xpY2soZWw6IEhUTUxFbGVtZW50LCBmbkNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwsIGV4Y2x1ZGVkRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBudWxsKSB7XG4gICAgaWYgKCFlbCkgcmV0dXJuO1xuXG4gICAgdmFyIGZuSGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBpZiAoZm5DYWxsYmFjaykgZm5DYWxsYmFjaygpO1xuICAgIH07XG5cbiAgICB2YXIgYXJBbGxFeGNsdWRlZCA9IFtlbF07XG4gICAgaWYgKGV4Y2x1ZGVkRWxlbWVudHMpIGFyQWxsRXhjbHVkZWQuY29uY2F0KGV4Y2x1ZGVkRWxlbWVudHMpO1xuXG4gICAgcGVyZm9ybU9uRG9jQ2xpY2tPckVzY2FwZShmbkhpZGUsIGFyQWxsRXhjbHVkZWQpO1xufVxudmFyIF9jbGlja2FibGVDc3NBZGRlZCA9IGZhbHNlO1xuZXhwb3J0IGZ1bmN0aW9uIHBlcmZvcm1PbkRvY0NsaWNrT3JFc2NhcGUoZm5DYWxsYmFjazogRnVuY3Rpb24gPSBudWxsLCBleGNsdWRlZEVsZW1lbnRzOiBIVE1MRWxlbWVudFtdID0gbnVsbCk6IHZvaWQge1xuICAgIGNvbnN0IGZuT25QZXJmb3JtID0gZSA9PiB7XG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVDbGFzc0Zyb21FbGVtZW50KGRvY3VtZW50LmJvZHksICdnaWctY2xpY2thYmxlJyk7XG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVFdmVudExpc3RlbmVyKGRvY3VtZW50LCAnbW91c2Vkb3duJywgZm5PbkRvY0NsaWNrKTtcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsICdrZXlkb3duJywgZm5PbkRvY0tleWRvd24pO1xuICAgICAgICBpZiAoZm5DYWxsYmFjaykgZm5DYWxsYmFjayhlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZm5PbkRvY0NsaWNrID0gZSA9PiB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG4gICAgICAgIHZhciBjbGlja0luRGl2ID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICh0YXJnZXQgJiYgdGFyZ2V0LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIGlmIChleGNsdWRlZEVsZW1lbnRzICYmIGV4Y2x1ZGVkRWxlbWVudHMuaW5kZXhPZih0YXJnZXQpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgY2xpY2tJbkRpdiA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNsaWNrSW5EaXYpIHtcbiAgICAgICAgICAgIGZuT25QZXJmb3JtKGUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGZuT25Eb2NLZXlkb3duID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKChlLndoaWNoIHx8IGUua2V5Q29kZSkgPT0gMjcpIHtcbiAgICAgICAgICAgIGZuT25QZXJmb3JtKGUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGlmICgoZ2lneWEubG9jYWxJbmZvLmlzSU9TICYmIGdpZ3lhLmxvY2FsSW5mby5pc1NhZmFyaSkgfHwgZ2lneWEubG9jYWxJbmZvLmlzSU9TV2ViVmlldykge1xuICAgICAgICBpZiAoIV9jbGlja2FibGVDc3NBZGRlZCkge1xuICAgICAgICAgICAgYWRkQ3NzKCcqLmdpZy1jbGlja2FibGUge2N1cnNvcjogcG9pbnRlcjt9JywgbnVsbCk7XG4gICAgICAgICAgICBfY2xpY2thYmxlQ3NzQWRkZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KGRvY3VtZW50LmJvZHksICdnaWctY2xpY2thYmxlJyk7XG4gICAgfVxuXG4gICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsICdtb3VzZWRvd24nLCBmbk9uRG9jQ2xpY2spO1xuICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LCAna2V5ZG93bicsIGZuT25Eb2NLZXlkb3duKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoaWRlRWxlbWVudChlbDogSFRNTEVsZW1lbnQpIHtcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNob3dFbGVtZW50KGVsOiBIVE1MRWxlbWVudCkge1xuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VMaW5rc1dpdGhIVE1MRWxlbWVudHModGV4dERhdGE6IHN0cmluZywgY2xhc3NOYW1lPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCByZWdleDogUmVnRXhwID0gLyg/Oig/Omh0dHBzPyk6XFwvXFwvfHd3d1xcLikoPzpcXChbLUEtWjAtOSsmQCNcXC8lPX5ffCQ/ITosLjtdKlxcKXxbLUEtWjAtOSsmQCNcXC8lPX5ffCQ/ITosLjtdKSooPzpcXChbLUEtWjAtOSsmQCNcXC8lPX5fO3wkPyE6LC47XSpcXCl8W0EtWjAtOSsmQCNcXC8lPX5ffDskXSkvZ2ltO1xuXG4gICAgY29uc3QgbGlua3MgPSB0ZXh0RGF0YS5tYXRjaChyZWdleCk7XG4gICAgbGV0IHJlc1RleHQgPSAnJztcbiAgICBpZiAobGlua3MpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHN0YXJ0TGluayA9ICcnO1xuICAgICAgICAgICAgaWYgKGxpbmtzW2ldLmluZGV4T2YoJ2h0dHA6JykgPT09IC0xICYmIGxpbmtzW2ldLmluZGV4T2YoJ2h0dHBzOicpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0TGluayA9ICdodHRwOi8vJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNsYXNzQXR0ciA9ICcnO1xuICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIGNsYXNzQXR0ciA9IGAgY2xhc3M9XCIke2NsYXNzTmFtZX1cImA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRlbXBUZXh0ID0gdGV4dERhdGEuc3Vic3RyKDAsIHRleHREYXRhLmluZGV4T2YobGlua3NbaV0pICsgbGlua3NbaV0ubGVuZ3RoKTtcbiAgICAgICAgICAgIHRleHREYXRhID0gdGV4dERhdGEuc3Vic3RyKHRlbXBUZXh0Lmxlbmd0aCwgdGV4dERhdGEubGVuZ3RoIC0gdGVtcFRleHQubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IGNsZWFuTGluayA9IGxpbmtzW2ldLnJlcGxhY2UoLyYjMTczOy9nLCAnJyk7XG4gICAgICAgICAgICByZXNUZXh0ICs9IHRlbXBUZXh0LnJlcGxhY2UobGlua3NbaV0sIGA8YSR7Y2xhc3NBdHRyfSBocmVmPVwiJHtzdGFydExpbmt9JHtjbGVhbkxpbmt9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3dcIj4ke2xpbmtzW2ldfTwvYT5gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXh0RGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlc1RleHQgKz0gdGV4dERhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc1RleHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0QXR0cmlidXRlKGVsOiBIVE1MRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZywgYXR0clZhbDogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgIGlmIChhdHRyTmFtZSA9PT0gJ2NsYXNzJykge1xuICAgICAgICBlbC5jbGFzc05hbWUgPSBhdHRyVmFsO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSUUxMSBjYW5ub3QgcmVtb3ZlIFwidmFsdWVcIiBhdHRyaWJ1dGUgYW5kIHBvc3NpYmx5IG90aGVyIGF0dHJpYnV0ZXMuIENhbGxpbmcgXCJyZW1vdmVBdHRyaWJ1dGVcIiBvbiBJRSBkb2VzIG5vdGhpbmcgaW4gc29tZSBjYXNlcy5cbiAgICAvLyBGb3IgdGhpcyByZWFzb24gd2UgZmlyc3Qgc2V0IHRoZSBhdHRyaWJ1dGUgYW5kIHRoZW4gY2FsbCByZW1vdmVBdHRyaWJ1dGUgaWYgaXQgd2FzIG51bGwuXG4gICAgLy8gSW4gYWxsIGJyb3dzZXJzLCB0aGUgZmluYWwgcmVzdWx0IGlzIHRoYXQgdGhlIGF0dHJpYnV0ZSBjb250aW51ZXMgdG8gZXhpc3QgYW5kIHJldHVybnMgYW4gZW1wdHkgc3RyaW5nLlxuICAgIC8vIFRoaXMgaXMgYmVjYXVzZSBOTyBicm93c2VyIGNhbiByZW1vdmUgdGhlIFwidmFsdWVcIiBhdHRyaWJ1dGUgKGFuZCBwb3NzaWJseSBzb21lIG90aGVyIGF0dHJpYnV0ZXMpLlxuICAgIC8vIEluc3RlYWQsIHRoZSBub24tSUUgYnJvd3NlcnMganVzdCBzZXQgdGhlIHZhbHVlIHRvIGFuIGVtcHR5IHN0cmluZy5cbiAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJWYWwpO1xuICAgIGlmIChhdHRyVmFsID09PSBudWxsKSB7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZShlbDogSFRNTEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBsZXQgYXR0cmlidXRlUmVzdWx0OiBzdHJpbmcgfCBudWxsO1xuXG4gICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5pc0lFOCkge1xuICAgICAgICBhdHRyaWJ1dGVSZXN1bHQgPSBlbC5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICM3NzU5NSAtIElFIFwiZ2V0QXR0cmlidXRlTlNcIiByZXR1cm5zIGVtcHR5IHN0cmluZyBpbnN0ZWFkIG9mIG51bGwgd2hlbiBhdHRyaWJ1dGUgZG9lcyBub3QgZXhpc3QuXG4gICAgICAgIGlmICghZWwuaGFzQXR0cmlidXRlTlMoJycsIGF0dHJOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBhdHRyaWJ1dGVSZXN1bHQgPSBlbC5nZXRBdHRyaWJ1dGVOUygnJywgYXR0ck5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBhdHRyaWJ1dGVSZXN1bHQ7XG59XG4iLCJpbXBvcnQgeyBfR2V0RWxlbWVudFBvcyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvaW1hZ2VQb3NpdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkSWZyYW1lU2hpbShlbDogSFRNTEVsZW1lbnQsIHBhcmVudD86IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKGVsWydzaGltJ10pIHJldHVybjtcbiAgICB2YXIgc2hpbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lGUkFNRScpO1xuICAgIHNoaW1bJ2ZyYW1lYm9yZGVyJ10gPSAnMCc7XG4gICAgc2hpbVsnZnJhbWVCb3JkZXInXSA9ICcwJztcbiAgICBzaGltWydhbGxvd3RyYW5zcGFyZW5jeSddID0gdHJ1ZTtcbiAgICBzaGltLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBzaGltWyd1cGRhdGUnXSA9IGZ1bmN0aW9uKHVwZGF0ZURpbWVuc2lvbnMpIHtcbiAgICAgICAgaWYgKHNoaW0gJiYgZWwpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBzaGltLnN0eWxlLmxlZnQgPSBlbC5vZmZzZXRMZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgICAgICBzaGltLnN0eWxlLnRvcCA9IGVsLm9mZnNldFRvcCArICdweCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBwb3MgPSBfR2V0RWxlbWVudFBvcyhlbCk7XG4gICAgICAgICAgICAgICAgc2hpbS5zdHlsZS5sZWZ0ID0gcG9zLmxlZnQgKyAncHgnO1xuICAgICAgICAgICAgICAgIHNoaW0uc3R5bGUudG9wID0gcG9zLnRvcCArICdweCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodXBkYXRlRGltZW5zaW9ucykge1xuICAgICAgICAgICAgICAgIHNoaW0uc3R5bGUud2lkdGggPSBlbC5vZmZzZXRXaWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgc2hpbS5zdHlsZS5oZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBzaGltWyd1cGRhdGUnXSh0cnVlKTtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHNoaW0uc3R5bGUuekluZGV4ID0gZ2lneWEudXRpbHMuRE9NLmdldE5leHRaSW5kZXgoKS50b1N0cmluZygpO1xuICAgICAgICBlbC5zdHlsZS56SW5kZXggPSBnaWd5YS51dGlscy5ET00uZ2V0TmV4dFpJbmRleCgpLnRvU3RyaW5nKCk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChzaGltKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBnaWd5YS51dGlscy5ET00ucHJlcGVuZFRvQm9keShzaGltKTtcbiAgICB9XG5cbiAgICBlbFsnc2hpbSddID0gc2hpbTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJZnJhbWVTaGltKGVsOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoZWwgJiYgZWwuc2hpbSAmJiBlbC5zaGltLnBhcmVudE5vZGUpIHtcbiAgICAgICAgZWwuc2hpbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsLnNoaW0pO1xuICAgICAgICBlbC5zaGltID0gbnVsbDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2NhbGVJbWFnZShpbWc6IEhUTUxJbWFnZUVsZW1lbnQsIHNpemU6IG51bWJlciwgZG9udENlbnRlcjogYm9vbGVhbiwgZm5PbkltZ0xvYWQ6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdmFyIGltZ09iaiA9IGltZztcbiAgICBpZiAoIWltZy53aWR0aCB8fCAhaW1nLmhlaWdodCkge1xuICAgICAgICB2YXIgaW1nT2JqID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZ09iai5zcmMgPSBpbWcuc3JjO1xuICAgIH1cbiAgICB2YXIgZm5PbkxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGltZ09iai53aWR0aCA9PSAwKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmbk9uTG9hZCwgMTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpbWdPYmoud2lkdGggPiBpbWdPYmouaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gc2l6ZSArICdweCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBzaXplICsgJ3B4JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1nLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgIGlmIChmbk9uSW1nTG9hZCkgZm5PbkltZ0xvYWQoaW1nKTtcbiAgICAgICAgICAgIGlmICghZG9udENlbnRlcikge1xuICAgICAgICAgICAgICAgIGltZy5zdHlsZS5tYXJnaW5Ub3AgPSAoc2l6ZSAtIGltZy5vZmZzZXRIZWlnaHQpIC8gMiArICdweCc7XG4gICAgICAgICAgICAgICAgaW1nLnN0eWxlLm1hcmdpbkxlZnQgPSAoc2l6ZSAtIGltZy5vZmZzZXRXaWR0aCkgLyAyICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGltZ09iai53aWR0aCA+IDApIHtcbiAgICAgICAgZm5PbkxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgaW1nT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZm5PbkxvYWQsIDUwKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZmlsbFVzZXJBY3Rpb25UZW1wbGF0ZSh1c2VyQWN0aW9uOiBPYmplY3QsIG86IGFueSkge1xuICAgIGZvciAodmFyIHAgaW4gdXNlckFjdGlvbikge1xuICAgICAgICB2YXIgZmllbGQgPSB1c2VyQWN0aW9uW3BdO1xuICAgICAgICBpZiAodHlwZW9mIGZpZWxkID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB1c2VyQWN0aW9uW3BdID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodXNlckFjdGlvbltwXSwgbyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHAgPT0gJ21lZGlhSXRlbXMnKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkW2ldLnNyYykge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZFtpXS5zcmMgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbChmaWVsZFtpXS5zcmMsIG8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXNlckFjdGlvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRQbGFjZWhvbGRlcih0ZXh0Ym94OiBhbnksIHBsYWNlaG9sZGVyOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKCF0ZXh0Ym94KSByZXR1cm47XG5cbiAgICB2YXIgb25ibHVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09ICcnKSB7XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KHRleHRib3gsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRleHRib3guc3R5bGUuY29sb3IgPSAnIzU4NTg1OCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gcGxhY2Vob2xkZXI7XG4gICAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyQ2xlYXJlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBvbmZvY3VzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5wbGFjZWhvbGRlckNsZWFyZWQpIHtcbiAgICAgICAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlQ2xhc3NGcm9tRWxlbWVudCh0ZXh0Ym94LCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZXh0Ym94LnN0eWxlLmNvbG9yID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyQ2xlYXJlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGV4dGJveC5zZXRTZWxlY3Rpb25SYW5nZSkge1xuICAgICAgICAgICAgICAgIC8vdG8gZml4IGEgYnVnIHdoZXJlIHNvbWV0aW1lcyB0aGUgY2FyZXQgZGlzYXBwZWFycyB3aGlsZSB0aGUgdGV4dGJveCBpcyBmb2N1c2VkLlxuICAgICAgICAgICAgICAgIHRleHRib3guZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB0ZXh0Ym94LnNldFNlbGVjdGlvblJhbmdlKDAsIDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0ZXh0Ym94LmNyZWF0ZVRleHRSYW5nZSkge1xuICAgICAgICAgICAgICAgIHZhciByYW5nZSA9IHRleHRib3guY3JlYXRlVGV4dFJhbmdlKCk7XG4gICAgICAgICAgICAgICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmFuZ2UubW92ZUVuZCgnY2hhcmFjdGVyJywgMCk7XG4gICAgICAgICAgICAgICAgcmFuZ2UubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCAwKTtcbiAgICAgICAgICAgICAgICByYW5nZS5zZWxlY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0ZXh0Ym94LnJlZnJlc2hQbGFjZWhvbGRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGV4dGJveC52YWx1ZSkge1xuICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSkgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUNsYXNzRnJvbUVsZW1lbnQodGV4dGJveCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIGVsc2UgdGV4dGJveC5zdHlsZS5jb2xvciA9ICcnO1xuXG4gICAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyQ2xlYXJlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSBnaWd5YS51dGlscy5ET00uYWRkQ2xhc3NUb0VsZW1lbnQodGV4dGJveCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIGVsc2UgdGV4dGJveC5zdHlsZS5jb2xvciA9ICcjNTg1ODU4JztcblxuICAgICAgICAgICAgdGV4dGJveC52YWx1ZSA9IHBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgdGhpcy5wbGFjZWhvbGRlckNsZWFyZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcih0ZXh0Ym94LCAnYmx1cicsIG9uYmx1cik7XG4gICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIodGV4dGJveCwgJ2ZvY3VzJywgb25mb2N1cyk7XG4gICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIodGV4dGJveCwgJ2NoYW5nZScsIG9uYmx1cik7XG4gICAgdGV4dGJveC5yZWZyZXNoUGxhY2Vob2xkZXIoKTtcbn1cbiIsImV4cG9ydCBjb25zdCBfY2xvc2VDb21wb25lbnQgPSBmdW5jdGlvbihyaWQ6IHN0cmluZywgZGlzcGF0Y2hDbG9zZUV2ZW50OiBib29sZWFuKTogdm9pZCB7XG4gICAgdmFyIG9SSUQgPSBnaWd5YS5zb2NpYWxpemUuX3BhcnNlUklEKHJpZCk7XG4gICAgdmFyIHJlcSA9IG9SSUQucmVxO1xuICAgIGlmIChnaWd5YS5zb2NpYWxpemUuR3JheU91dCkgZ2lneWEuc29jaWFsaXplLkdyYXlPdXQoZmFsc2UpO1xuICAgIHZhciBpZnIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2lneWFfaWZyXycgKyByZXEuY29udGFpbmVyLmlkKTtcbiAgICBpZiAoaWZyICE9IG51bGwpIGlmci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgaWYgKGRpc3BhdGNoQ2xvc2VFdmVudCkge1xuICAgICAgICBnaWd5YS5ldmVudHMuZGlzcGF0Y2hGb3JXaWRnZXQoeyBldmVudE5hbWU6ICdjbG9zZScgfSwgcmVxLnApO1xuICAgIH1cbiAgICByZXEuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZE9yUmVwbGFjZUhhc2hGcmFnbWVudCh1cmw6IHN0cmluZywgcGFyYW06IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgdXJsID0gcmVtb3ZlSGFzaEZyYWdtZW50KHVybCwgcGFyYW0pO1xuICAgIHVybCA9IGFkZEhhc2hGcmFnbWVudCh1cmwsIHBhcmFtLCB2YWx1ZSk7XG4gICAgcmV0dXJuIHVybDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRIYXNoRnJhZ21lbnQodXJsOiBzdHJpbmcsIHBhcmFtOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHZhciBzaWduID0gJyMnO1xuICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGFscmVhZHkgYW4gaGFzaGZyYWdtZW50IGV4aXN0XG4gICAgaWYgKHVybC5pbmRleE9mKCcjJykgIT0gLTEpXG4gICAgICAgIGlmICh1cmwuaW5kZXhPZihwYXJhbSkgPT0gLTEpXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgZXhpc3QgaGFzaGZyYWdtZW50IGlzIHRoZSBzYW1lIGFzIHdlIHdhbnQgdG8gYWRkIC0gc28gd2UgbmVlZCBvciByZWFwbGNlIGl0XG4gICAgICAgICAgICBzaWduID0gJyYnO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IHBhcmFtICsgJz0nICsgdGhpcy5nZXRIYXNoUGFyYW1WYWx1ZSh1cmwsIHBhcmFtKTtcbiAgICAgICAgICAgIHVybC5yZXBsYWNlKG9sZFZhbHVlLCBwYXJhbSArICc9JyArIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cblxuICAgIHJldHVybiB1cmwgKyBzaWduICsgcGFyYW0gKyAnPScgKyB2YWx1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVIYXNoRnJhZ21lbnQodXJsOiBzdHJpbmcsIHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vIENoZWNrIGlmIHRoZSB1cmwgY29udGFpbnMgaGFzaCBmcmFnbWVudC5cbiAgICBpZiAodXJsLmluZGV4T2YoJyMnKSA9PSAtMSkgcmV0dXJuIHVybDtcblxuICAgIC8vIEdldCB0aGUgaGFzaCB2YWx1ZSBpZiBleGlzdFxuICAgIHZhciBmdWxsSGFzaFF1ZXJ5ID0gdXJsLnNwbGl0KCcjJylbMV07XG4gICAgdmFyIGhhc2hQYXJhbVZhbHVlID0gZ2V0SGFzaFBhcmFtVmFsdWUodXJsLCBwYXJhbSk7XG4gICAgaWYgKGhhc2hQYXJhbVZhbHVlKSBmdWxsSGFzaFF1ZXJ5ID0gZnVsbEhhc2hRdWVyeS5yZXBsYWNlKHBhcmFtICsgJz0nICsgaGFzaFBhcmFtVmFsdWUsICcnKTtcblxuICAgIC8vIFJlbW92ZSB0aGUgaGFzaCBwYXJhbSBpbiBjYXNlIGl0IHdhcyBhIGhhc2ggcGFyYW0gd2l0aG91dCAnPSdcbiAgICBmdWxsSGFzaFF1ZXJ5ID0gZnVsbEhhc2hRdWVyeS5yZXBsYWNlKCcmJyArIHBhcmFtLCAnJyk7XG4gICAgZnVsbEhhc2hRdWVyeSA9IGZ1bGxIYXNoUXVlcnkucmVwbGFjZSgnIycgKyBwYXJhbSwgJyMnKTtcblxuICAgIGlmIChmdWxsSGFzaFF1ZXJ5Lmxlbmd0aCA+IDApIGZ1bGxIYXNoUXVlcnkgPSBmdWxsSGFzaFF1ZXJ5LnN1YnN0cmluZygxLCBmdWxsSGFzaFF1ZXJ5Lmxlbmd0aCk7XG5cbiAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IGZ1bGwgSGFzaCBRdWVyeSB3aXRoIHRoZSBuZXcgb25lIHdpdGhvdXQgdGhlIGdpdmVuIHBhcmFtIHRvIHJlbW92ZWQgYW5kIGl0J3MgdmFsdWUgaWYgZXhpc3RcbiAgICB2YXIgVVJMV2l0aG91dEhhc2ggPSB1cmwuc3BsaXQoJyMnKVswXTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBoYXNoIHF1ZXJ5IGxlZnQgd2l0aCBubyBwYXJhbXNcbiAgICBpZiAoZnVsbEhhc2hRdWVyeS5sZW5ndGggPT0gMCkgcmV0dXJuIFVSTFdpdGhvdXRIYXNoO1xuXG4gICAgcmV0dXJuIFVSTFdpdGhvdXRIYXNoICsgJyMnICsgZnVsbEhhc2hRdWVyeTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRIYXNoUGFyYW1WYWx1ZSh1cmw6IHN0cmluZywgcGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gQWRkIHRoZSAnPScgc2lnbiB0byBtYXRjaCB0aGUgcGFyYW0gYW5kIG5vdCBtYXliZSB0aGUgc2FtZSBzdHJpbmcgaW4gdGhlIFVSTCBub3QgYXMgYSBwYXJhbVxuICAgIHBhcmFtICs9ICc9JztcbiAgICBpZiAodXJsLmluZGV4T2YoJyMnKSA9PSAtMSB8fCB1cmwuaW5kZXhPZihwYXJhbSwgdXJsLmluZGV4T2YoJyMnKSkgPT0gLTEpIHJldHVybiBudWxsO1xuXG4gICAgLy8gZmluZCB0aGUgbmV4dCAmIG9yIHRoZSBlbmQgb2YgdGhlIHBhcmFtIHN0cmluZ1xuICAgIHZhciBzdGFydE9mUGFyYW0gPSB1cmwuaW5kZXhPZihwYXJhbSwgdXJsLmluZGV4T2YoJyMnKSk7XG4gICAgdmFyIGVuZE9mUGFyYW0gPSB1cmwuaW5kZXhPZignJicsIHN0YXJ0T2ZQYXJhbSk7XG5cbiAgICAvLyBJZiB0aGUgcGFyYW0gd2FzIHVudGlsbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcgLSBzZXQgdGhlIGVuZE9mUGFyYW0gdG8gdGhlIGVuZCBvZiB0aGUgc3RyaW5nIHRvb1xuICAgIGlmIChlbmRPZlBhcmFtID09IC0xKSBlbmRPZlBhcmFtID0gdXJsLmxlbmd0aDtcblxuICAgIHJldHVybiB1cmwuc3Vic3RyaW5nKHN0YXJ0T2ZQYXJhbSArIHBhcmFtLmxlbmd0aCwgZW5kT2ZQYXJhbSk7XG59XG4iLCJpbXBvcnQgeyBnZXRTdHlsZVN0cmluZyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvbGF5b3V0U3R5bGVzJztcbmltcG9ydCB7IG1lYXN1cmVUZXh0IH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9sYXlvdXRUZXh0JztcblxuZXhwb3J0IGZ1bmN0aW9uIF9maXhHcmF5UG9zaXRpb24oKTogdm9pZCB7XG4gICAgdmFyIGRhcmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFya2VuU2NyZWVuT2JqZWN0Jyk7XG4gICAgaWYgKGRhcmspIHtcbiAgICAgICAgdmFyIGRlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB2YXIgZGIgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gZGUuc2Nyb2xsVG9wO1xuICAgICAgICBpZiAoc2Nyb2xsVG9wID09IDApIHNjcm9sbFRvcCA9IGRiLnNjcm9sbFRvcDtcbiAgICAgICAgdmFyIHNjcm9sbExlZnQgPSBkZS5zY3JvbGxMZWZ0O1xuICAgICAgICBpZiAoc2Nyb2xsTGVmdCA9PSAwKSBzY3JvbGxMZWZ0ID0gZGIuc2Nyb2xsTGVmdDtcbiAgICAgICAgdmFyIGNsaWVudEhlaWdodCA9IGRlLmNsaWVudEhlaWdodDtcbiAgICAgICAgaWYgKGNsaWVudEhlaWdodCA9PSAwKSBjbGllbnRIZWlnaHQgPSBkYi5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHZhciBjbGllbnRXaWR0aCA9IGRlLmNsaWVudFdpZHRoO1xuICAgICAgICBpZiAoY2xpZW50V2lkdGggPT0gMCkgY2xpZW50V2lkdGggPSBkYi5jbGllbnRXaWR0aDtcbiAgICAgICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5pc0lFNikgY2xpZW50V2lkdGggLT0gMTtcbiAgICAgICAgZGFyay5zdHlsZS50b3AgPSBzY3JvbGxUb3AudG9TdHJpbmcoKTtcbiAgICAgICAgZGFyay5zdHlsZS5sZWZ0ID0gc2Nyb2xsTGVmdC50b1N0cmluZygpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBfZml4R3JheVNpemUoKTogdm9pZCB7XG4gICAgdmFyIGRhcmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFya2VuU2NyZWVuT2JqZWN0Jyk7XG4gICAgaWYgKGRhcmspIHtcbiAgICAgICAgdmFyIGRlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB2YXIgZGIgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICB2YXIgY2xpZW50SGVpZ2h0ID0gZGUuY2xpZW50SGVpZ2h0O1xuICAgICAgICBpZiAoY2xpZW50SGVpZ2h0ID09IDApIGNsaWVudEhlaWdodCA9IGRiLmNsaWVudEhlaWdodDtcbiAgICAgICAgdmFyIGNsaWVudFdpZHRoID0gZGUuY2xpZW50V2lkdGg7XG4gICAgICAgIGlmIChjbGllbnRXaWR0aCA9PSAwKSBjbGllbnRXaWR0aCA9IGRiLmNsaWVudFdpZHRoO1xuICAgICAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzSUU2KSBjbGllbnRXaWR0aCAtPSAxO1xuXG4gICAgICAgIGRhcmsuc3R5bGUud2lkdGggPSAnJyArIGNsaWVudFdpZHRoICsgJ3B4JztcbiAgICAgICAgZGFyay5zdHlsZS5oZWlnaHQgPSAnJyArIGNsaWVudEhlaWdodCArICdweCc7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIF9jcmVhdGVKU1BvcHVwKHJpZDogc3RyaW5nLCByZXNvbHZlciwgY2FwdGlvblRleHQ6IHN0cmluZywgbm9DYXB0aW9uOiBib29sZWFuKTogT2JqZWN0IHtcbiAgICB2YXIgb1JJRCA9IF9wYXJzZVJJRChyaWQpO1xuXG4gICAgdmFyIHJlcSA9IG9SSUQucmVxO1xuICAgIHZhciBwYXJhbXMgPSByZXEucDtcbiAgICB2YXIgY29uZiA9IHJlcS5jO1xuICAgIGlmIChnaWd5YS51dGlscy52YWxpZGF0aW9uLmlzRXhwbGljaXRGYWxzZShwYXJhbXNbJ3Nob3dDYXB0aW9uJ10pKSBub0NhcHRpb24gPSB0cnVlO1xuXG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmFtc1snY29udGFpbmVySUQnXSk7XG4gICAgcmVxLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgIHZhciBvQmdTdHlsZSA9IHJlc29sdmVyLlJlc29sdmUoJysvY29uZmlnL2JvZHkvYmFja2dyb3VuZCcpO1xuICAgIHZhciBvQ2FwdGlvblN0eWxlID0gcmVzb2x2ZXIuUmVzb2x2ZSgnKy9jb25maWcvYm9keS9jYXB0aW9ucycpO1xuXG4gICAgdmFyIHMgPSAnPHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzdHlsZT1cIicgKyBnZXRTdHlsZVN0cmluZyhvQmdTdHlsZSkgKyAnO2VtcHR5LWNlbGxzOnNob3c7XCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgPic7XG4gICAgaWYgKCFub0NhcHRpb24pIHtcbiAgICAgICAgcyArPVxuICAgICAgICAgICAgJzx0ciBzdHlsZT1cIicgK1xuICAgICAgICAgICAgZ2V0U3R5bGVTdHJpbmcob0NhcHRpb25TdHlsZSkgK1xuICAgICAgICAgICAgJ1wiPjx0ZD48dGFibGUgcm9sZT1cInByZXNlbnRhdGlvblwiIHN0eWxlPVwid2lkdGg6MTAwJVwiIHdpZHRoPVwiMTAwJVwiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiPjx0ciBpZD1cIicgK1xuICAgICAgICAgICAgcGFyYW1zWydjb250YWluZXJJRCddICtcbiAgICAgICAgICAgICdfY2FwdGlvblwiPjx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOm1pZGRsZVwiPjxkaXYgc3R5bGU9XCInICtcbiAgICAgICAgICAgIGdldFN0eWxlU3RyaW5nKG9DYXB0aW9uU3R5bGUpICtcbiAgICAgICAgICAgICc7cGFkZGluZzo3cHhcIj4nICtcbiAgICAgICAgICAgIGNhcHRpb25UZXh0ICtcbiAgICAgICAgICAgICc8L2Rpdj48L3RkPjx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOm1pZGRsZVwiPic7XG4gICAgICAgIHMgKz1cbiAgICAgICAgICAgICc8ZGl2IGFsaWduPVwicmlnaHRcIiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDdweDsgY3Vyc29yOiBwb2ludGVyOycgK1xuICAgICAgICAgICAgZ2V0U3R5bGVTdHJpbmcob0NhcHRpb25TdHlsZSkgK1xuICAgICAgICAgICAgJ1wiPjxpbWcgdGFiaW5kZXg9XCIwXCIgb25jbGljaz1cImdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5fY2xvc2VDb21wb25lbnQoXFwnJyArXG4gICAgICAgICAgICByaWQgK1xuICAgICAgICAgICAgJ1xcJywgdHJ1ZSk7XCIgIHNyYz1cIicgK1xuICAgICAgICAgICAgZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvSFRNTExvZ2luL2Nsb3NlSWNvbi5naWYnKSArXG4gICAgICAgICAgICAnXCIgYWx0PVwiXCIgLz48L2Rpdj48L3RkPjwvdHI+PC90YWJsZT48L3RkPjwvdHI+PHRyPjx0ZCBjb2xzcGFuPVwiMlwiPic7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcyArPSAnPHRyPjx0ZD4nO1xuICAgIH1cbiAgICBzICs9ICc8ZGl2IGlkPVwiJyArIHBhcmFtc1snY29udGFpbmVySUQnXSArICdfY29udGFpbmVyXCI+PC9kaXY+PC90ZD48L3RyPjwvdGFibGU+JztcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gcztcbiAgICB2YXIgcCA9IHt9O1xuICAgIHZhciBjID0ge307XG4gICAgZm9yICh2YXIgcGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgICAgIHBbcGFyYW1dID0gcGFyYW1zW3BhcmFtXTtcbiAgICB9XG5cbiAgICBmb3IgKHBhcmFtIGluIGNvbmYpIHtcbiAgICAgICAgY1twYXJhbV0gPSBjb25mW3BhcmFtXTtcbiAgICB9XG5cbiAgICB2YXIgY2FwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBbJ2NvbnRhaW5lcklEJ10gKyAnX2NhcHRpb24nKTtcblxuICAgIHBbJ2hlaWdodCddID0gcFsnaGVpZ2h0J10gLSBvQmdTdHlsZVsnZnJhbWUtdGhpY2tuZXNzJ10gKiAyO1xuICAgIGlmICghbm9DYXB0aW9uKSBwWydoZWlnaHQnXSAtPSBjYXB0aW9uLm9mZnNldEhlaWdodDtcbiAgICBwWyd3aWR0aCddID0gcFsnd2lkdGgnXSAtIG9CZ1N0eWxlWydmcmFtZS10aGlja25lc3MnXSAqIDI7XG5cbiAgICBnaWd5YS51dGlscy5ET00uX3BvcHVwQ29udGFpbmVyc1twWydjb250YWluZXJJRCddXSA9IGNvbnRhaW5lcjtcbiAgICBwWydjb250YWluZXJJRCddID0gcFsnY29udGFpbmVySUQnXSArICdfY29udGFpbmVyJztcbiAgICByZXR1cm4geyBjOiBjLCBwOiBwIH07XG59XG5leHBvcnQgZnVuY3Rpb24gX2NyZWF0ZUpTUG9wdXAyKHJpZDogc3RyaW5nLCByZXNvbHZlciwgYm9yZGVyU2l6ZTogbnVtYmVyLCBiYXNlOiBzdHJpbmcsIGNhcHRpb25UZXh0OiBzdHJpbmcsIGFkZEJvcmRlcjogYm9vbGVhbikge1xuICAgIHZhciBvUklEID0gX3BhcnNlUklEKHJpZCk7XG5cbiAgICB2YXIgcmVxID0gb1JJRC5yZXE7XG4gICAgdmFyIHBhcmFtcyA9IHJlcS5wO1xuICAgIHZhciBjb25mID0gcmVxLmM7XG5cbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyYW1zWydjb250YWluZXJJRCddKTtcbiAgICByZXEuY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgdmFyIG9DYXB0aW9uU3R5bGUgPSByZXNvbHZlci5SZXNvbHZlKCcrL2NvbmZpZy9ib2R5L2NhcHRpb25zJyk7XG5cbiAgICBpZiAoIWJvcmRlclNpemUpIGJvcmRlclNpemUgPSAxMDtcbiAgICBpZiAoIWJhc2UpIGJhc2UgPSBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9EaWFsb2cvRGlhbG9nQmdfJyk7XG4gICAgdmFyIGltZ1N0eWxlID0gJ3dpZHRoOicgKyBib3JkZXJTaXplICsgJ3B4O2hlaWdodDonICsgYm9yZGVyU2l6ZSArICdweCc7XG5cbiAgICB2YXIgYm9yZGVyU3RyaW5nO1xuICAgIGlmIChhZGRCb3JkZXIpIHtcbiAgICAgICAgYm9yZGVyU3RyaW5nID0gJzFweCBzb2xpZCAjNTU1NTU1JztcbiAgICB9XG5cbiAgICB2YXIgcyA9XG4gICAgICAgICc8dGFibGUgcm9sZT1cInByZXNlbnRhdGlvblwiIHN0eWxlPVwiZm9udC1zaXplOjFweDtwYWRkaW5nOjBweDttYXJnaW46MHB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtmb250LXNpemU6MXB4O2xpbmUtaGVpZ2h0OjFweDtlbXB0eS1jZWxsczpzaG93O1wiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiID4nO1xuICAgIHMgKz1cbiAgICAgICAgJzx0cj48dGQgaGVpZ2h0PVwiJyArXG4gICAgICAgIGJvcmRlclNpemUgK1xuICAgICAgICAnXCIgc3R5bGU9XCJmb250LXNpemU6MXB4XCI+PGRpdiBzdHlsZT1cImhlaWdodDonICtcbiAgICAgICAgYm9yZGVyU2l6ZSArXG4gICAgICAgICdweFwiPjxpbWcgc3JjPVwiJyArXG4gICAgICAgIGJhc2UgK1xuICAgICAgICAnVG9wTGVmdC5wbmdcIiBzdHlsZT1cIicgK1xuICAgICAgICBpbWdTdHlsZSArXG4gICAgICAgICdcIiBhbHQ9XCJcIiAvPjwvZGl2PjwvdGQ+PHRkIGhlaWdodD1cIicgK1xuICAgICAgICBib3JkZXJTaXplICtcbiAgICAgICAgJ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArXG4gICAgICAgIGJhc2UgK1xuICAgICAgICAnZmlsbGVyLnBuZ1xcJyk7YmFrZ3JvdW5kLXJlcGVhdDpyZXBlYXRcIj48L3RkPjx0ZCBoZWlnaHQ9XCInICtcbiAgICAgICAgYm9yZGVyU2l6ZSArXG4gICAgICAgICdcIiBzdHlsZT1cImZvbnQtc2l6ZToxcHg7XCI+PGRpdiBzdHlsZT1cImhlaWdodDonICtcbiAgICAgICAgYm9yZGVyU2l6ZSArXG4gICAgICAgICdweFwiPjxpbWcgc3R5bGU9XCInICtcbiAgICAgICAgaW1nU3R5bGUgK1xuICAgICAgICAnXCIgc3JjPVwiJyArXG4gICAgICAgIGJhc2UgK1xuICAgICAgICAnVG9wUmlnaHQucG5nXCIgYWx0PVwiXCIgLz48L2Rpdj48L3RkPjwvdHI+JztcbiAgICBpZiAoY2FwdGlvblRleHQpIHtcbiAgICAgICAgcyArPVxuICAgICAgICAgICAgJzx0cj48dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybChcXCcnICtcbiAgICAgICAgICAgIGJhc2UgK1xuICAgICAgICAgICAgJ2ZpbGxlci5wbmdcXCcpO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdFwiPjwvdGQ+PHRkPjx0YWJsZSB3aWR0aD1cIjEwMCVcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiBzdHlsZT1cImJvcmRlci10b3A6JyArXG4gICAgICAgICAgICBib3JkZXJTdHJpbmcgK1xuICAgICAgICAgICAgJztib3JkZXItbGVmdDonICtcbiAgICAgICAgICAgIGJvcmRlclN0cmluZyArXG4gICAgICAgICAgICAnO2JvcmRlci1yaWdodDonICtcbiAgICAgICAgICAgIGJvcmRlclN0cmluZyArXG4gICAgICAgICAgICAnO3dpZHRoOjEwMCU7YmFja2dyb3VuZC1jb2xvcjojRkZGRkZGXCI+PHRyPjx0ZCBzdHlsZT1cInBhZGRpbmctdG9wOjEwcHg7cGFkZGluZy1sZWZ0OjEwcHg7JyArXG4gICAgICAgICAgICBnZXRTdHlsZVN0cmluZyhvQ2FwdGlvblN0eWxlKSArXG4gICAgICAgICAgICAnXCI+JyArXG4gICAgICAgICAgICBjYXB0aW9uVGV4dCArXG4gICAgICAgICAgICAnPC90ZD48dGQgYWxpZ249XCJyaWdodFwiIHZhbGlnbj1cInRvcFwiIHN0eWxlPVwiJyArXG4gICAgICAgICAgICBnZXRTdHlsZVN0cmluZyhvQ2FwdGlvblN0eWxlKSArXG4gICAgICAgICAgICAnXCI+PGRpdiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6NXB4O3BhZGRpbmctdG9wOjVweDt0ZXh0LWFsaWduOnJpZ2h0O1wiPjxpbWcgdGFiaW5kZXg9XCIwXCIgc3R5bGU9XCJjdXJzb3I6cG9pbnRlclwiIG9uY2xpY2s9XCJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUuX2Nsb3NlQ29tcG9uZW50KFxcJycgK1xuICAgICAgICAgICAgcmlkICtcbiAgICAgICAgICAgICdcXCcsIHRydWUpO1wiIHNyYz1cIicgK1xuICAgICAgICAgICAgYmFzZSArXG4gICAgICAgICAgICAnY2xvc2UucG5nXCIgYWx0PVwiXCIgLz48L2Rpdj48L3RkPjwvdHI+PC90YWJsZT48L3RkPjx0ZCBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6dXJsKFxcJycgK1xuICAgICAgICAgICAgYmFzZSArXG4gICAgICAgICAgICAnZmlsbGVyLnBuZ1xcJyk7YmFja2dyb3VuZC1yZXBlYXQ6cmVwZWF0XCI+PC90ZD48L3RyPic7XG4gICAgfVxuICAgIHMgKz1cbiAgICAgICAgJzx0cj48dGQgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybChcXCcnICtcbiAgICAgICAgYmFzZSArXG4gICAgICAgICdmaWxsZXIucG5nXFwnKTtiYWNrZ3JvdW5kLXJlcGVhdDpyZXBlYXRcIj48L3RkPjx0ZD48ZGl2IHN0eWxlPVwiYm9yZGVyLWJvdHRvbTonICtcbiAgICAgICAgYm9yZGVyU3RyaW5nICtcbiAgICAgICAgJztib3JkZXItbGVmdDonICtcbiAgICAgICAgYm9yZGVyU3RyaW5nICtcbiAgICAgICAgJztib3JkZXItcmlnaHQ6JyArXG4gICAgICAgIGJvcmRlclN0cmluZyArXG4gICAgICAgICc7YmFja2dyb3VuZC1jb2xvcjojRkZGRkZGXCIgaWQ9XCInICtcbiAgICAgICAgcGFyYW1zWydjb250YWluZXJJRCddICtcbiAgICAgICAgJ19jb250YWluZXJcIj48L2Rpdj48L3RkPjx0ZCBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6dXJsKFxcJycgK1xuICAgICAgICBiYXNlICtcbiAgICAgICAgJ2ZpbGxlci5wbmdcXCcpO2JhY2tncm91bmQtcmVwZWF0OnJlcGVhdFwiPjwvdGQ+PC90cj4nO1xuICAgIHMgKz1cbiAgICAgICAgJzx0cj48dGQgaGVpZ2h0PVwiJyArXG4gICAgICAgIGJvcmRlclNpemUgK1xuICAgICAgICAnXCIgc3R5bGU9XCJmb250LXNpemU6MXB4O1wiPjxkaXYgc3R5bGU9XCJoZWlnaHQ6JyArXG4gICAgICAgIGJvcmRlclNpemUgK1xuICAgICAgICAncHhcIj48aW1nIHN0eWxlPVwiJyArXG4gICAgICAgIGltZ1N0eWxlICtcbiAgICAgICAgJ1wiIHNyYz1cIicgK1xuICAgICAgICBiYXNlICtcbiAgICAgICAgJ0JvdHRvbUxlZnQucG5nXCIgYWx0PVwiXCIgLz48L2Rpdj48L3RkPjx0ZCBoZWlnaHQ9XCInICtcbiAgICAgICAgYm9yZGVyU2l6ZSArXG4gICAgICAgICdcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6dXJsKFxcJycgK1xuICAgICAgICBiYXNlICtcbiAgICAgICAgJ2ZpbGxlci5wbmdcXCcpO2Jha2dyb3VuZC1yZXBlYXQ6cmVwZWF0XCI+PC90ZD48dGQgaGVpZ2h0PVwiJyArXG4gICAgICAgIGJvcmRlclNpemUgK1xuICAgICAgICAnXCIgc3R5bGU9XCJmb250LXNpemU6MXB4O1wiPjxkaXYgc3R5bGU9XCJoZWlnaHQ6JyArXG4gICAgICAgIGJvcmRlclNpemUgK1xuICAgICAgICAncHhcIj48aW1nIHN0eWxlPVwiJyArXG4gICAgICAgIGltZ1N0eWxlICtcbiAgICAgICAgJ1wiIHNyYz1cIicgK1xuICAgICAgICBiYXNlICtcbiAgICAgICAgJ0JvdHRvbVJpZ2h0LnBuZ1wiIGFsdD1cIlwiIC8+PC9kaXY+PC90ZD48L3RyPjwvdGFibGU+JztcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gcztcbiAgICB2YXIgcCA9IHt9O1xuICAgIHZhciBjID0ge307XG4gICAgZm9yICh2YXIgcGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgICAgIHBbcGFyYW1dID0gcGFyYW1zW3BhcmFtXTtcbiAgICB9XG5cbiAgICBmb3IgKHBhcmFtIGluIGNvbmYpIHtcbiAgICAgICAgY1twYXJhbV0gPSBjb25mW3BhcmFtXTtcbiAgICB9XG5cbiAgICBnaWd5YS51dGlscy5ET00uX3BvcHVwQ29udGFpbmVyc1twWydjb250YWluZXJJRCddXSA9IGNvbnRhaW5lcjtcbiAgICBwWydjb250YWluZXJJRCddID0gcFsnY29udGFpbmVySUQnXSArICdfY29udGFpbmVyJztcblxuICAgIHBbJ2hlaWdodCddID0gcFsnaGVpZ2h0J10gLSBib3JkZXJTaXplICogMjtcbiAgICBpZiAoY2FwdGlvblRleHQpIHtcbiAgICAgICAgaWYgKGNhcHRpb25UZXh0LnJlcGxhY2UoLyAvZywgJycpID09ICcnKSB7XG4gICAgICAgICAgICBwWydoZWlnaHQnXSAtPSAxMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBbJ2hlaWdodCddIC09IG1lYXN1cmVUZXh0KGNhcHRpb25UZXh0LCBvQ2FwdGlvblN0eWxlKVsnaCddICsgMTA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcFsnd2lkdGgnXSA9IHBbJ3dpZHRoJ10gLSBib3JkZXJTaXplICogMjtcblxuICAgIHJldHVybiB7IGM6IGMsIHA6IHAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBfcGFyc2VSSUQocmlkOiBzdHJpbmcpIHtcbiAgICB2YXIgcmlkcCA9IHJpZC5zcGxpdCgnQCcpO1xuICAgIHZhciBzd2YgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyaWRwWzJdICsgJ18nICsgcmlkcFsxXSk7XG4gICAgdmFyIGNvbnRhaW5lcklEID0gcmlkcFsyXTtcbiAgICB2YXIgY29udGFpbmVyO1xuXG4gICAgaWYgKG51bGwgPT0gKGNvbnRhaW5lciA9IGdpZ3lhLnV0aWxzLkRPTS5fcHNldWRvQ29udGFpbmVyc1tjb250YWluZXJJRF0pKSB7XG4gICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJpZHBbMl0pO1xuICAgIH1cblxuICAgIHZhciBSZXFzID0gbnVsbDtcbiAgICBpZiAoY29udGFpbmVyICE9IG51bGwpIFJlcXMgPSBjb250YWluZXIuUmVxcztcbiAgICB2YXIgcmVxID0gbnVsbDtcbiAgICBpZiAoUmVxcyAhPSBudWxsKSByZXEgPSBSZXFzW3BhcnNlSW50KHJpZHBbMF0pXTtcblxuICAgIHJldHVybiB7IHJpZDogcmlkLCBjb250YWluZXI6IGNvbnRhaW5lciwgUmVxczogUmVxcywgcmVxOiByZXEsIHN3Zjogc3dmIH07XG59XG4iLCJpbXBvcnQgeyBnZXRDbGFzc0JvcmRlcnNBbmRQYWRkaW5ncyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvbGF5b3V0U3ByaXRlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmYWRlSW4oZWw6IEhUTUxFbGVtZW50LCBvcGFjaXR5OiBudW1iZXIgPSAxKTogdm9pZCB7XG4gICAgaWYgKGVsLnN0eWxlLm9wYWNpdHkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGVsLnN0eWxlLmZpbHRlciA9ICdhbHBoYShvcGFjaXR5PScgKyAwICogMTAwICsgJyknO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgfVxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoZWwuc3R5bGUub3BhY2l0eSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVsLnN0eWxlLmZpbHRlciA9ICdhbHBoYShvcGFjaXR5PScgKyBvcGFjaXR5ICogMTAwICsgJyknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHkgKyAnJztcbiAgICAgICAgfVxuICAgIH0sIDEwKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzbGlkZURvd24oZWwpOiB2b2lkIHtcbiAgICB2YXIgYnAgPSBnZXRDbGFzc0JvcmRlcnNBbmRQYWRkaW5ncyhlbC5jbGFzc05hbWUpO1xuICAgIHZhciBoID0gZWwub2Zmc2V0SGVpZ2h0IC0gYnBbJ2gnXTtcbiAgICB2YXIgb3JpZ2luYWxUcmFuc2l0aW9uUHJvcGVydHkgPSBlbC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHk7XG4gICAgZWwuc3R5bGUubWF4SGVpZ2h0ID0gJzFweCc7XG4gICAgZWwuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gZWwuc3R5bGUud2Via2l0VHJhbnNpdGlvblByb3BlcnR5ID0gJ21heC1oZWlnaHQnO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBlbC5zdHlsZS5tYXhIZWlnaHQgPSBoICsgJ3B4JztcbiAgICAgICAgZWwuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gZWwuc3R5bGUud2Via2l0VHJhbnNpdGlvblByb3BlcnR5ID0gb3JpZ2luYWxUcmFuc2l0aW9uUHJvcGVydHk7XG4gICAgfSwgMTAwKTtcbiAgICB2YXIgZm5PblRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZWwuc3R5bGUubWF4SGVpZ2h0ID0gJzk5OXB4JztcbiAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUV2ZW50TGlzdGVuZXIoZWwsICd0cmFuc2l0aW9uZW5kJywgZm5PblRyYW5zaXRpb25FbmQpO1xuICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBmbk9uVHJhbnNpdGlvbkVuZCk7XG4gICAgfTtcbiAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihlbCwgJ3RyYW5zaXRpb25lbmQnLCBmbk9uVHJhbnNpdGlvbkVuZCk7XG4gICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoZWwsICd3ZWJraXRUcmFuc2l0aW9uRW5kJywgZm5PblRyYW5zaXRpb25FbmQpO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZuT25UcmFuc2l0aW9uRW5kLCA1MDApO1xufVxuIiwiaW1wb3J0IHsgX2ZpeEdyYXlTaXplLCBfZml4R3JheVBvc2l0aW9uIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9VSVBvcHVwJztcblxuZXhwb3J0IGZ1bmN0aW9uIEdyYXlPdXQodmlzOiBib29sZWFuLCBvcHQ/KTogdm9pZCB7XG4gICAgdmFyIG9wdGlvbnMgPSBvcHQgfHwge307XG4gICAgdmFyIHppbmRleCA9IG9wdGlvbnMuemluZGV4IHx8IDUwO1xuICAgIHZhciBvcGFjaXR5ID0gb3B0aW9ucy5vcGFjaXR5IHx8IDcwO1xuICAgIHZhciBvcGFxdWUgPSBvcGFjaXR5IC8gMTAwO1xuICAgIHZhciBiZ2NvbG9yID0gb3B0aW9ucy5iZ2NvbG9yIHx8ICcjMDAwMDAwJztcbiAgICB2YXIgZGFyayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrZW5TY3JlZW5PYmplY3QnKTtcbiAgICB2YXIgdGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIGlmICghZGFyaykge1xuICAgICAgICB2YXIgaXNDb21wTW9kZSA9IGdpZ3lhLmxvY2FsSW5mby5pc01vYmlsZSB8fCBnaWd5YS5sb2NhbEluZm8uaXNJRTYgfHwgZG9jdW1lbnQuY29tcGF0TW9kZSA9PSAnQmFja0NvbXBhdCc7XG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICBpZiAoc2Nyb2xsVG9wID09IDApIHNjcm9sbFRvcCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICB2YXIgdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWYgKGlzQ29tcE1vZGUpIHtcbiAgICAgICAgICAgIHRub2RlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIHRub2RlLnN0eWxlLnRvcCA9ICcnICsgc2Nyb2xsVG9wICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRub2RlLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgICAgIHRub2RlLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgICAgICB9XG4gICAgICAgIHRub2RlLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIHRub2RlLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICAgICAgdG5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdG5vZGUuaWQgPSAnZGFya2VuU2NyZWVuT2JqZWN0JztcbiAgICAgICAgdG5vZGUuaW5uZXJIVE1MID0gJyYjMTYwOyc7XG4gICAgICAgIHRib2R5LmFwcGVuZENoaWxkKHRub2RlKTtcbiAgICAgICAgZGFyayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrZW5TY3JlZW5PYmplY3QnKTtcbiAgICAgICAgaWYgKCFnaWd5YVsnYXR0YWNoZWRGaXhHcmF5J10pIHtcbiAgICAgICAgICAgIGdpZ3lhWydhdHRhY2hlZEZpeEdyYXknXSA9IHRydWU7XG4gICAgICAgICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgX2ZpeEdyYXlTaXplLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2luZG93WydhdHRhY2hFdmVudCddKSB7XG4gICAgICAgICAgICAgICAgd2luZG93WydhdHRhY2hFdmVudCddKCdvbnJlc2l6ZScsIF9maXhHcmF5U2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNDb21wTW9kZSkge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgX2ZpeEdyYXlQb3NpdGlvbiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAod2luZG93WydhdHRhY2hFdmVudCddKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1snYXR0YWNoRXZlbnQnXSgnb25zY3JvbGwnLCBfZml4R3JheVBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZpcykge1xuICAgICAgICB2YXIgdnBoO1xuICAgICAgICB2YXIgdnB3O1xuICAgICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgICAgICB2cGggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICB2cHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHZwaCA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdmFyIGRlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgICAgdnBoID0gZGUuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgdnB3ID0gZGUuY2xpZW50V2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZwdyA9PSAwKSB2cHcgPSB0Ym9keS5jbGllbnRXaWR0aDtcbiAgICAgICAgaWYgKHZwaCA9PSAwKSB2cGggPSB0Ym9keS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGRhcmsuc3R5bGUub3BhY2l0eSA9IG9wYXF1ZS50b1N0cmluZygpO1xuICAgICAgICBkYXJrLnN0eWxlWydNb3pPcGFjaXR5J10gPSBvcGFxdWU7XG4gICAgICAgIGRhcmsuc3R5bGUud2lkdGggPSAnJyArIHZwdyArICdweCc7XG4gICAgICAgIGRhcmsuc3R5bGUuaGVpZ2h0ID0gJycgKyB2cGggKyAncHgnO1xuICAgICAgICBkYXJrLnN0eWxlLmZpbHRlciA9ICdhbHBoYShvcGFjaXR5PScgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICBkYXJrLnN0eWxlLnpJbmRleCA9IHppbmRleDtcbiAgICAgICAgZGFyay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiZ2NvbG9yO1xuICAgICAgICBkYXJrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRib2R5LnJlbW92ZUNoaWxkKGRhcmspO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBoaWRlVUkoKTogdm9pZCB7XG4gICAgdmFyIHBhcmFtcyA9IGdpZ3lhLnV0aWxzLm9iamVjdC5tZXJnZShbZ2lneWEudGhpc1NjcmlwdC5nbG9iYWxDb25mLCBhcmd1bWVudHNdKTtcbiAgICBHcmF5T3V0KGZhbHNlKTtcblxuICAgIC8vIHBsdWdpbnMgdGhhdCBleHRlbmQgQmFzZVBsdWdpblxuICAgIGZvciAodmFyIHBsdWdpbk5hbWUgaW4gZ2lneWEuXy5wbHVnaW5zLmluc3RhbmNlcykge1xuICAgICAgICB2YXIgcGx1Z2luID0gZ2lneWEuXy5wbHVnaW5zLmluc3RhbmNlc1twbHVnaW5OYW1lXTtcbiAgICAgICAgaWYgKHBsdWdpblsnaXNNb2RhbCddKSBwbHVnaW4uZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIC8vIGxlZ2FjeVxuICAgIGZvciAodmFyIGNvbnRhaW5lcklEIGluIGdpZ3lhLnV0aWxzLkRPTS5fcG9wdXBDb250YWluZXJzKSB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBnaWd5YS51dGlscy5ET00uX3BvcHVwQ29udGFpbmVyc1tjb250YWluZXJJRF07XG4gICAgICAgIGlmIChjb250YWluZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5wYXJlbnROb2RlKSBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpZnJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWd5YV9pZnJfJyArIGNvbnRhaW5lcklEKTtcbiAgICAgICAgaWYgKG51bGwgIT0gaWZyZWwpIHtcbiAgICAgICAgICAgIC8vaWZyZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpZnJlbCk7XG4gICAgICAgICAgICBpZnJlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8vLyBpZiBuby1vbmUgbWFrZXMgYSBiaWcgZnVzcyBhYm91dCB0aGlzIGJlaW5nIGNvbW1lbnRlZCBvdXQgLSBkZWxldGUhXG4gICAgLy92YXIgZmJSb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZiLXJvb3QnKTtcbiAgICAvL2lmIChmYlJvb3QpIGZiUm9vdC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cbiAgICBnaWd5YS5ldmVudHMuZ2xvYmFsLmRpc3BhdGNoKHsgZXZlbnROYW1lOiAnSGlkZVVJUmVxdWVzdGVkJyB9KTtcbiAgICBpZiAodHlwZW9mIHBhcmFtc1snY2FsbGJhY2snXSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBvUmVzcG9uc2UgPSB7XG4gICAgICAgICAgICBzdGF0dXM6ICdPSycsXG4gICAgICAgICAgICBzdGF0dXNNZXNzYWdlOiAnJyxcbiAgICAgICAgICAgIG9wZXJhdGlvbjogJ2hpZGVVSScsXG4gICAgICAgICAgICBjb250ZXh0OiBwYXJhbXNbJ2NvbnRleHQnXSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJycsXG4gICAgICAgICAgICBlcnJvckNvZGU6IDAsXG4gICAgICAgIH07XG4gICAgICAgIHBhcmFtc1snY2FsbGJhY2snXShvUmVzcG9uc2UpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBlbmFibGVTYWZlQ29weShlbDogYW55KTogdm9pZCB7XG4gICAgaWYgKGVsLmFkZGVkU2FmZUNvcHkpIHJldHVybjtcbiAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihlbCwgJ2NvcHknLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIC8vdG8gbGV0IHVzZXJzIGNvcHkgVVJMcyB3aXRob3V0IHNvZnQgaHlwaGVuc1xuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG4gICAgICAgIHZhciBub2RlbmFtZSA9IHRhcmdldCAmJiB0YXJnZXQubm9kZU5hbWUgPyB0YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA6ICcnO1xuICAgICAgICBpZiAobm9kZW5hbWUgPT0gJ3RleHRhcmVhJyB8fCBub2RlbmFtZSA9PSAnaW5wdXQnKSByZXR1cm47XG4gICAgICAgIHZhciBkaXZDb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdkNvcHkuc3R5bGUuY29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmJhY2tncm91bmRDb2xvciA6ICcjRkZGRkZGJztcbiAgICAgICAgZGl2Q29weS5zdHlsZS5mb250U2l6ZSA9ICcwcHgnO1xuICAgICAgICBnaWd5YS51dGlscy5ET00ucHJlcGVuZFRvQm9keShkaXZDb3B5KTtcbiAgICAgICAgdmFyIHNoeVJlZ2V4ID0gbmV3IFJlZ0V4cCgnKCZzaHk7fCcgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKDE3MykgKyAnKScsICdnJyk7XG4gICAgICAgIHZhciBzZWxlY3Rpb24sIHJhbmdlMjtcbiAgICAgICAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcbiAgICAgICAgICAgIGRpdkNvcHkuYXBwZW5kQ2hpbGQocmFuZ2UuY2xvbmVDb250ZW50cygpKTtcbiAgICAgICAgICAgIGRpdkNvcHkuaW5uZXJIVE1MID0gZGl2Q29weS5pbm5lckhUTUwucmVwbGFjZShzaHlSZWdleCwgJycpOyAvL2l0J3MgdGhlIHNvZnQgaHlwaGVuIGNoYXJcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zZWxlY3RBbGxDaGlsZHJlbihkaXZDb3B5KTtcbiAgICAgICAgICAgIHZhciBmblJlc3RvcmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBkaXZDb3B5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2Q29weSk7XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZWN0aW9uID0gd2luZG93LmRvY3VtZW50WydzZWxlY3Rpb24nXTtcbiAgICAgICAgICAgIHJhbmdlID0gc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgICAgICBkaXZDb3B5LmlubmVySFRNTCA9IHJhbmdlWydodG1sVGV4dCddO1xuICAgICAgICAgICAgZGl2Q29weS5pbm5lckhUTUwgPSBkaXZDb3B5LmlubmVySFRNTC5yZXBsYWNlKHNoeVJlZ2V4LCAnJyk7IC8vaXQncyB0aGUgc29mdCBoeXBoZW4gY2hhclxuICAgICAgICAgICAgcmFuZ2UyID0gZG9jdW1lbnQuYm9keVsnY3JlYXRlVGV4dFJhbmdlJ10oKTtcbiAgICAgICAgICAgIHJhbmdlMi5tb3ZlVG9FbGVtZW50VGV4dChkaXZDb3B5KTtcbiAgICAgICAgICAgIHJhbmdlMi5zZWxlY3QoKTtcbiAgICAgICAgICAgIGZuUmVzdG9yZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGRpdkNvcHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXZDb3B5KTtcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VbJ3RleHQnXSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2VbJ3NlbGVjdCddKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmblJlc3RvcmUsIDApO1xuICAgIH0pO1xuICAgIGVsLmFkZGVkU2FmZUNvcHkgPSB0cnVlO1xufVxuIiwiaW1wb3J0IHsgZ2V0U3R5bGUsIGdldENsYXNzQm9yZGVyc0FuZFBhZGRpbmdzIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9sYXlvdXRTcHJpdGVzJztcbmltcG9ydCB7IHJlbW92ZUVsZW1lbnRPbkRvY0NsaWNrT3JFc2NhcGUgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL0RPTSc7XG5pbXBvcnQgeyByZW1vdmVJZnJhbWVTaGltLCBhZGRJZnJhbWVTaGltIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9HbG9iYWxET00nO1xuaW1wb3J0IHsgX0dldEVsZW1lbnRQb3MgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL2ltYWdlUG9zaXRpb25zJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dMb2FkZXIoY29udGFpbmVyPzogSFRNTEVsZW1lbnQsIGNsYXNzTmFtZSA9ICcnLCBoOiBudW1iZXIgPSB1bmRlZmluZWQpOiB2b2lkIHtcbiAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgIGlmICghaCkgaCA9IHBhcnNlSW50KGdldFN0eWxlKGNvbnRhaW5lciwgJ2hlaWdodCcpKTtcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9XG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cIicgK1xuICAgICAgICAgICAgY2xhc3NOYW1lICtcbiAgICAgICAgICAgICdcIiBzdHlsZT1cImhlaWdodDonICtcbiAgICAgICAgICAgIGggK1xuICAgICAgICAgICAgXCJweDtiYWNrZ3JvdW5kLWltYWdlOnVybCgnXCIgK1xuICAgICAgICAgICAgZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvZ20vbG9hZGVyLmdpZicpICtcbiAgICAgICAgICAgICdcXCcpOyBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXIgY2VudGVyXCI+PC9kaXY+JztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZmFkZUluKGVsOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoZWwuaW50ZXJ2YWwpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChlbC5pbnRlcnZhbCk7XG4gICAgfVxuICAgIGVsLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgZWwuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG9wID0gcGFyc2VGbG9hdChlbC5zdHlsZS5vcGFjaXR5KTtcbiAgICAgICAgaWYgKG9wID49IDEpIGNsZWFySW50ZXJ2YWwoZWwuaW50ZXJ2YWwpO1xuICAgICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gb3AgKyAwLjE7XG4gICAgfSwgMTApO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhbGxvb25IVE1MKFxuICAgIGJvZHksXG4gICAgY2FwdGlvblRleHQ6IHN0cmluZyxcbiAgICB3OiBudW1iZXIsXG4gICAgaDogbnVtYmVyLFxuICAgIG51Ylk6IG51bWJlcixcbiAgICBudWJQb3NpdGlvbjogc3RyaW5nLFxuICAgIGhpZGVDbG9zZTogYm9vbGVhbixcbiAgICBzT25DbG9zZTogc3RyaW5nLFxuICAgIGZyYW1lSUQ6IHN0cmluZyxcbik6IHN0cmluZyB7XG4gICAgdmFyIG51YlcgPSAxMztcbiAgICB2YXIgbnViSCA9IDI1O1xuICAgIGlmICghZ2lneWEuZ2xvYmFsWydhZGRlZEJhbGxvb25DU1MnXSkge1xuICAgICAgICAoZ2lneWEuZ2xvYmFsWydhZGRDU1MnXSBhcyBGdW5jdGlvbikoW1xuICAgICAgICAgICAgJy5naWctYmFsbG9vbnMgKiwgZGl2LmdpZy1iYWxsb29ucywgLmdpZy1iYWxsb29ucyBzcGFuLCAuZ2lnLWJhbGxvb25zIGE6aG92ZXIsIC5naWctYmFsbG9vbnMgYTp2aXNpdGVkLCAuZ2lnLWJhbGxvb25zIGE6bGluaywgLmdpZy1iYWxsb29ucyBhOmFjdGl2ZXsnLFxuICAgICAgICAgICAgJ2JvcmRlcjpub25lOyBsaW5lLWhlaWdodDpub3JtYWw7cGFkZGluZzowcHg7bWFyZ2luOjBweDtjb2xvcjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjpub25lO3dpZHRoOmF1dG87ZmxvYXQ6bm9uZTstbW96LWJvcmRlci1yYWRpdXM6MDtib3JkZXItcmFkaXVzOjA7JyxcbiAgICAgICAgICAgICdmb250LWZhbWlseTphcmlhbDtmb250LXNpemU6MTBweDtjb2xvcjojNzk3OTc5O2JhY2tncm91bmQ6bm9uZTt0ZXh0LWFsaWduOmxlZnR9JyxcbiAgICAgICAgICAgICdkaXYuZ2lnLWJhbGxvb24tZnJhbWUgeycsXG4gICAgICAgICAgICAnem9vbToxO3BhZGRpbmc6MTVweCAxMHB4IDEwcHggMTBweDsgYm9yZGVyOjFweCBzb2xpZCAjYjRiNGI0OyBtaW4taGVpZ2h0OjgwcHg7IGJhY2tncm91bmQtY29sb3I6I0ZGRkZGRjsgei1pbmRleDonICtcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uZ2V0TmV4dFpJbmRleCgpICtcbiAgICAgICAgICAgICAgICAnOycsXG4gICAgICAgICAgICAnYm94LXNoYWRvdzowIDAgNXB4IFJHQkEoMCwwLDAsMC42KTstd2Via2l0LWJveC1zaGFkb3c6MCAwIDVweCBSR0JBKDAsMCwwLDAuNik7LW1vei1ib3gtc2hhZG93OjAgMCA1cHggUkdCQSgwLDAsMCwwLjYpO30nLFxuICAgICAgICAgICAgJ2Rpdi5naWctYmFsbG9vbi1udWIge2xlZnQ6KzFweDsgcG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCInICtcbiAgICAgICAgICAgICAgICBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9nbS9udWIucG5nJykgK1xuICAgICAgICAgICAgICAgICdcIik7d2lkdGg6JyArXG4gICAgICAgICAgICAgICAgbnViVyArXG4gICAgICAgICAgICAgICAgJ3B4O2hlaWdodDonICtcbiAgICAgICAgICAgICAgICBudWJIICtcbiAgICAgICAgICAgICAgICAncHg7IHotaW5kZXg6JyArXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmdldE5leHRaSW5kZXgoKSArXG4gICAgICAgICAgICAgICAgJyB9JyxcbiAgICAgICAgICAgICdkaXYuZ2lnLWJhbGxvb24tbnViLXJpZ2h0IHsgbGVmdDotMXB4OyBwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kLWltYWdlOnVybChcIicgK1xuICAgICAgICAgICAgICAgIGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL2dtL251Yl9yaWdodC5wbmcnKSArXG4gICAgICAgICAgICAgICAgJ1wiKTt3aWR0aDonICtcbiAgICAgICAgICAgICAgICBudWJXICtcbiAgICAgICAgICAgICAgICAncHg7aGVpZ2h0OicgK1xuICAgICAgICAgICAgICAgIG51YkggK1xuICAgICAgICAgICAgICAgICdweDsgei1pbmRleDonICtcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uZ2V0TmV4dFpJbmRleCgpICtcbiAgICAgICAgICAgICAgICAnIH0nLFxuICAgICAgICAgICAgJ2Rpdi5naWctYmFsbG9vbi1udWItdXAgeyB0b3A6KzFweDsgcG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCInICtcbiAgICAgICAgICAgICAgICBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9nbS9udWJfdXAucG5nJykgK1xuICAgICAgICAgICAgICAgICdcIik7d2lkdGg6JyArXG4gICAgICAgICAgICAgICAgbnViSCArXG4gICAgICAgICAgICAgICAgJ3B4O2hlaWdodDonICtcbiAgICAgICAgICAgICAgICBudWJXICtcbiAgICAgICAgICAgICAgICAncHg7IHotaW5kZXg6JyArXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmdldE5leHRaSW5kZXgoKSArXG4gICAgICAgICAgICAgICAgJyB9JyxcbiAgICAgICAgICAgICdkaXYuZ2lnLWJhbGxvb24tbnViLWRvd24geyB0b3A6LTFweDsgcG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZC1pbWFnZTp1cmwoXCInICtcbiAgICAgICAgICAgICAgICBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9nbS9udWJfZG93bi5wbmcnKSArXG4gICAgICAgICAgICAgICAgJ1wiKTt3aWR0aDonICtcbiAgICAgICAgICAgICAgICBudWJIICtcbiAgICAgICAgICAgICAgICAncHg7aGVpZ2h0OicgK1xuICAgICAgICAgICAgICAgIG51YlcgK1xuICAgICAgICAgICAgICAgICdweDsgei1pbmRleDonICtcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uZ2V0TmV4dFpJbmRleCgpICtcbiAgICAgICAgICAgICAgICAnIH0nLFxuICAgICAgICAgICAgJ3NwYW4uZ2lnLWJhbGxvb24tY2xvc2VJbWFnZSB7IGN1cnNvcjpwb2ludGVyOyBmbG9hdDpyaWdodDtiYWNrZ3JvdW5kLWltYWdlOnVybChcIicgK1xuICAgICAgICAgICAgICAgIGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL2dtL0Nsb3NlQnV0dG9uLnBuZycpICtcbiAgICAgICAgICAgICAgICAnXCIpOyB3aWR0aDoxNHB4O2hlaWdodDoxNHB4OyBtYXJnaW46LTdweCAtMnB4IDAgMCAgfScsXG4gICAgICAgICAgICAnZGl2LmdpZy1iYWxsb29uLWNhcHRpb24ge2ZvbnQtZmFtaWx5OmFyaWFsOyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OmJvbGQ7IGNvbG9yOiAjMGI4MWMxOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtwYWRkaW5nLWJvdHRvbToycHg7fScsXG4gICAgICAgICAgICAnc3Bhbi5naWctYmFsbG9vbi1jYXB0aW9uLXRleHQge2Zsb2F0OmxlZnR9JyxcbiAgICAgICAgXSk7XG4gICAgICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNJRSAmJiAhKCFnaWd5YS5sb2NhbEluZm8ucXVpcmtzTW9kZSAmJiBnaWd5YS5sb2NhbEluZm8uaXNJRTkpKSB7XG4gICAgICAgICAgICAoZ2lneWEuZ2xvYmFsWydhZGRDU1MnXSBhcyBGdW5jdGlvbikoW1xuICAgICAgICAgICAgICAgICdkaXYuZ2lnLWJhbGxvb24tZnJhbWUgeycsXG4gICAgICAgICAgICAgICAgJy1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LlNoYWRvdyhTdHJlbmd0aD00LCBEaXJlY3Rpb249MTM1LCBDb2xvcj1cXCcjQjRCNEI0XFwnKTtcIjsnLFxuICAgICAgICAgICAgICAgIFwiZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuU2hhZG93KFN0cmVuZ3RoPTQsIERpcmVjdGlvbj0xMzUsIENvbG9yPScjQjRCNEI0Jyk7fVwiLFxuICAgICAgICAgICAgICAgICd9JyxcbiAgICAgICAgICAgICAgICAnZGl2LmdpZy1iYWxsb29uLW51Yi1yaWdodCB7IGxlZnQ6LTVweDt9JyxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9XG4gICAgICAgIGdpZ3lhLmdsb2JhbFsnYWRkZWRCYWxsb29uQ1NTJ10gPSB0cnVlO1xuICAgIH1cbiAgICB2YXIgZnJhbWVTdHlsZSA9ICcnO1xuICAgIGlmIChnaWd5YS5sb2NhbEluZm8ucXVpcmtzTW9kZSkge1xuICAgICAgICB2YXIgYm9yZGVyc0FuZFBhZGRpbmdzID0gZ2V0Q2xhc3NCb3JkZXJzQW5kUGFkZGluZ3MoJ2dpZy1iYWxsb29uLWZyYW1lJyk7XG4gICAgICAgIGlmICh3KSB3ID0gdyArIGJvcmRlcnNBbmRQYWRkaW5ncy53O1xuICAgICAgICBpZiAoaCkgaCA9IGggKyBib3JkZXJzQW5kUGFkZGluZ3MuaDtcbiAgICB9XG4gICAgaWYgKHcpIGZyYW1lU3R5bGUgKz0gJ3dpZHRoOiAnICsgdyArICdweDsnO1xuICAgIGlmIChoKSBmcmFtZVN0eWxlICs9ICdoZWlnaHQ6ICcgKyBoICsgJ3B4Oyc7XG4gICAgdmFyIG51YlN0eWxlID0gJyc7XG4gICAgaWYgKG51YlkpIHtcbiAgICAgICAgaWYgKG51YlBvc2l0aW9uID09PSAnbGVmdCcgfHwgbnViUG9zaXRpb24gPT09ICdyaWdodCcpIG51YlN0eWxlICs9ICd0b3A6ICcgKyBudWJZICsgJ3B4Oyc7XG4gICAgICAgIC8vICgobnViUG9zaXRpb24gPT09ICd1cCcpIHx8IChudWJQb3NpdGlvbiA9PT0gJ2Rvd24nKSlcbiAgICAgICAgZWxzZSBudWJTdHlsZSArPSAnbGVmdDogJyArIG51YlkgKyAncHg7JztcbiAgICB9XG5cbiAgICB2YXIgaW5uZXJIVE1MID0gJyc7XG4gICAgaWYgKGNhcHRpb25UZXh0KSB7XG4gICAgICAgIGlubmVySFRNTCArPSAnPGRpdiBjbGFzcz1cImdpZy1iYWxsb29uLWNhcHRpb25cIj48c3BhbiBjbGFzcz1cImdpZy1iYWxsb29uLWNhcHRpb24tdGV4dFwiIHN0eWxlPVwid2lkdGg6JyArICh3IC0gMjApICsgJ3B4XCI+JyArIGNhcHRpb25UZXh0ICsgJzwvc3Bhbj4nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlubmVySFRNTCArPSAnPGRpdiBjbGFzcz1cImdpZy1iYWxsb29uLWNhcHRpb25cIiBzdHlsZT1cImJvcmRlci1ib3R0b206bm9uZVwiPic7XG4gICAgfVxuICAgIGlmICghaGlkZUNsb3NlICYmIHNPbkNsb3NlKSB7XG4gICAgICAgIGlubmVySFRNTCArPVxuICAgICAgICAgICAgJzxzcGFuIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJidXR0b25cIiBjbGFzcz1cImdpZy1iYWxsb29uLWNsb3NlSW1hZ2VcIiBvbmNsaWNrPVwiJyArXG4gICAgICAgICAgICBzT25DbG9zZSArXG4gICAgICAgICAgICAnXCIgb25rZXlkb3duPVwiaWYoKGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGUpID09IDEzKSAnICtcbiAgICAgICAgICAgIHNPbkNsb3NlICtcbiAgICAgICAgICAgICdcIj48L3NwYW4+JztcbiAgICB9XG4gICAgaW5uZXJIVE1MICs9XG4gICAgICAgICc8ZGl2IHN0eWxlPVwiY2xlYXI6Ym90aDtoZWlnaHQ6MDt3aWR0aDowO2ZvbnQtc2l6ZToxcHg7XCI+PCEtLSBlbXB0eSBkaXZzPTEwMCUgaGVpZ2h0IElFIC0tPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJnaWctYmFsbG9vbi1ib2R5XCI+JyArXG4gICAgICAgIGJvZHkgK1xuICAgICAgICAnPC9kaXY+JztcbiAgICB2YXIgcztcbiAgICBpZiAoIW51YlkpIHtcbiAgICAgICAgcyA9ICc8ZGl2IGNsYXNzPVwiZ2lnLWJhbGxvb24gZ2lnLWJhbGxvb24tZnJhbWVcIiBzdHlsZT1cIicgKyBmcmFtZVN0eWxlICsgJ1wiPicgKyBpbm5lckhUTUwgKyAnPC9kaXY+JztcbiAgICB9IGVsc2Uge1xuICAgICAgICBzID0gJzx0YWJsZSByb2xlPVwicHJlc2VudGF0aW9uXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2xhc3M9XCJnaWctYmFsbG9vblwiPjx0cj4nO1xuICAgICAgICBpZiAobnViUG9zaXRpb24gPT09ICd1cCcpIHtcbiAgICAgICAgICAgIHMgKz0gJzx0ZCBzdHlsZT1cIlwiPjxkaXYgY2xhc3M9XCJnaWctYmFsbG9vbi1udWItdXBcIiBzdHlsZT1cIicgKyBudWJTdHlsZSArICdcIj48L2Rpdj48L3RkPjwvdHI+PHRyPic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51YlBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBvdGhlciB2YWx1ZXNcbiAgICAgICAgICAgIHMgKz0gJzx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOnRvcFwiPjxkaXYgY2xhc3M9XCJnaWctYmFsbG9vbi1udWJcIiBzdHlsZT1cIicgKyBudWJTdHlsZSArICdcIj48L2Rpdj48L3RkPic7XG4gICAgICAgIH1cbiAgICAgICAgcyArPSAnPHRkIHN0eWxlPVwidmVydGljYWwtYWxpZ246dG9wXCI+PGRpdiBpZD1cIicgKyBmcmFtZUlEICsgJ1wiIGNsYXNzPVwiZ2lnLWJhbGxvb24tZnJhbWVcIiBzdHlsZT1cIicgKyBmcmFtZVN0eWxlICsgJ1wiPicgKyBpbm5lckhUTUwgKyAnPC9kaXY+PC90ZD4nO1xuICAgICAgICBpZiAobnViUG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIHMgKz0gJzx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOnRvcFwiPjxkaXYgY2xhc3M9XCJnaWctYmFsbG9vbi1udWItcmlnaHRcIiBzdHlsZT1cIicgKyBudWJTdHlsZSArICdcIj48L2Rpdj48L3RkPic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51YlBvc2l0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgICAgIHMgKz0gJzwvdHI+PHRyPjx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOnRvcFwiPjxkaXYgY2xhc3M9XCJnaWctYmFsbG9vbi1udWItZG93blwiIHN0eWxlPVwiJyArIG51YlN0eWxlICsgJ1wiPjwvZGl2PjwvdGQ+JztcbiAgICAgICAgfVxuICAgICAgICBzICs9ICc8L3RyPjwvdGFibGU+JztcbiAgICAgICAgcyArPSAnPGRpdiBzdHlsZT1cImNsZWFyOmJvdGg7aGVpZ2h0OjA7d2lkdGg6MDtmb250LXNpemU6MXB4O1wiPjwhLS0gZW1wdHkgZGl2cz0xMDAlIGhlaWdodCBJRSAtLT48L2Rpdj4nO1xuICAgIH1cbiAgICByZXR1cm4gcztcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHTUJhbGxvb24oXG4gICAgYm9keSxcbiAgICBjYXB0aW9uVGV4dDogc3RyaW5nLFxuICAgIHc6IG51bWJlcixcbiAgICBoOiBudW1iZXIsXG4gICAgbnViWTogbnVtYmVyLFxuICAgIG51YlBvc2l0aW9uOiBzdHJpbmcsXG4gICAgaGlkZUNsb3NlOiBib29sZWFuLFxuICAgIGlkOiBzdHJpbmcsXG4gICAgZG9udEhpZGVPbkNsaWNrOiBib29sZWFuLFxuICAgIGJhbGxvb25DbGFzczogc3RyaW5nLFxuKTogSFRNTEVsZW1lbnQge1xuICAgIGJhbGxvb25DbGFzcyA9IGJhbGxvb25DbGFzcyA/ICdnaWctYmFsbG9vbiAnICsgYmFsbG9vbkNsYXNzIDogJ2dpZy1iYWxsb29uJztcbiAgICByZW1vdmVHTUJhbGxvb24oKTtcbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdmFyIGJhbGxvb25JRCA9ICdnaWdfZ21CYWxsb29uXycgKyBub3c7XG4gICAgaWYgKGlkKSBiYWxsb29uSUQgPSBpZDtcbiAgICB2YXIgZnJhbWVJRCA9IGJhbGxvb25JRCArICdfZnJhbWUnO1xuICAgIHZhciBiYWxsb29uSFRNTCA9IGdldEJhbGxvb25IVE1MKGJvZHksIGNhcHRpb25UZXh0LCB3LCBoLCBudWJZLCBudWJQb3NpdGlvbiwgaGlkZUNsb3NlLCAnZ2lneWEuZ2xvYmFsLnJlbW92ZUdNQmFsbG9vbigpJywgZnJhbWVJRCk7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSBiYWxsb29uQ2xhc3M7XG4gICAgZGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBkaXYuc3R5bGUuekluZGV4ID0gZ2lneWEudXRpbHMuRE9NLmdldE5leHRaSW5kZXgoKS50b1N0cmluZygpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBiYWxsb29uSFRNTDtcbiAgICBkaXYuaWQgPSBiYWxsb29uSUQ7XG5cbiAgICAvLyBXaGVuIHRoZSBiYWxsb29uIGlzIHNob3duLCByZWFkIGltbWVkaWF0ZWx5LiBUaGlzIGlzIHNldCB0byBcImFzc2VydGl2ZVwiIGluc3RlYWQgb2YgXCJwb2xpdGVcIiBiZWNhdXNlIGluIGFsbCBjYXNlcyB3aGVyZSB0aGlzIGlzIHVzZWQsXG4gICAgLy8gdGhlIHRleHQgdGhhdCB0aGUgdXNlciBpcyBmb2N1c2luZyB3aGVuIHRoZSBiYWxsb29uIGlzIHNob3duIGRvZXMgbm90IG5lZWQgdG8gYmUgcmVhZC4gV2UgbmVlZCB0aGUgYmFsbG9vbiB0byBiZSByZWFkIGltbWVkaWF0ZWx5IGZvciBnb29kIFVYLlxuICAgIC8vIFRoZSBhc3NlcnRpdmUgc2V0dGluZyBtZWFucyB0aGF0IHRoZSByZWR1bmRhbnQgdGV4dCBpcyBub3QgcmVhZCB3aGVuIHRoZSB1c2VyIGZvY3VzZXMgYSBHTSBlbGVtZW50LlxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYWxlcnQnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAnYXNzZXJ0aXZlJyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnYXJpYS1hdG9taWMnLCAndHJ1ZScpO1xuXG4gICAgZmFkZUluKGRpdik7XG4gICAgZ2lneWEudXRpbHMuRE9NLnByZXBlbmRUb0JvZHkoZGl2KTtcbiAgICBnaWd5YS5nbG9iYWxbJ2RpdkdNQmFsbG9vbiddID0gZGl2O1xuXG4gICAgaWYgKCFkb250SGlkZU9uQ2xpY2spIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZW1vdmVFbGVtZW50T25Eb2NDbGlja09yRXNjYXBlKGRpdik7XG4gICAgICAgIH0sIDUwKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpdjtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVHTUJhbGxvb24oZT86IEV2ZW50KTogdm9pZCB7XG4gICAgdmFyIGE7XG4gICAgaWYgKGUpIHtcbiAgICAgICAgYSA9IGUudGFyZ2V0O1xuICAgICAgICBpZiAoIWEpIGEgPSBlLnNyY0VsZW1lbnQ7XG4gICAgICAgIHdoaWxlIChhICE9IG51bGwgJiYgYS5vZmZzZXRQYXJlbnQgJiYgYS5pZC5pbmRleE9mKGdpZ3lhLmdsb2JhbFsnZGl2R01CYWxsb29uJ10uaWQpID09IC0xKSB7XG4gICAgICAgICAgICBhID0gYVsnb2Zmc2V0UGFyZW50J107XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFhIHx8IGEuaWQuaW5kZXhPZihnaWd5YS5nbG9iYWxbJ2RpdkdNQmFsbG9vbiddLmlkKSA9PSAtMSkge1xuICAgICAgICAvL3RvIG1ha2Ugc3VyZSB0aGlzIHdhc24ndCB0cmlnZ2VyZWQgYnkgY2xpY2sgaW5zaWRlXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZW1vdmVJZnJhbWVTaGltKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdpZ3lhLmdsb2JhbFsnZGl2R01CYWxsb29uJ10uaWQgKyAnX2ZyYW1lJykpO1xuICAgICAgICAgICAgZ2lneWEuZ2xvYmFsWydkaXZHTUJhbGxvb24nXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdpZ3lhLmdsb2JhbFsnZGl2R01CYWxsb29uJ10pO1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50WydkZXRhY2hFdmVudCddKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRbJ2RldGFjaEV2ZW50J10oJ29uY2xpY2snLCByZW1vdmVHTUJhbGxvb24pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVHTUJhbGxvb24sIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXgpIHt9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHB1dEdNQmFsbG9vbk5leHRUbyhcbiAgICBlbDogSFRNTEVsZW1lbnQsXG4gICAgYm9keSxcbiAgICBjYXB0aW9uOiBzdHJpbmcsXG4gICAgdzogbnVtYmVyLFxuICAgIGg6IG51bWJlcixcbiAgICBoaWRlQ2xvc2U/OiBib29sZWFuLFxuICAgIGlkPzogc3RyaW5nLFxuICAgIGRvbnRIaWRlT25DbGljaz86IGJvb2xlYW4sXG4gICAgcHJlZmVycmVkT3JpZW50YXRpb25zID0gWydsZWZ0JywgJ3JpZ2h0JywgJ3VwJywgJ2Rvd24nXSxcbiAgICBiYWxsb29uQ2xhc3MgPSAnJyxcbik6IHZvaWQge1xuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICBjYXB0aW9uOiBjYXB0aW9uLFxuICAgICAgICB3OiB3LFxuICAgICAgICBoOiBoLFxuICAgICAgICBoaWRlQ2xvc2U6IGhpZGVDbG9zZSxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBkb250SGlkZU9uQ2xpY2s6IGRvbnRIaWRlT25DbGljayxcbiAgICAgICAgYmFsbG9vbkNsYXNzOiBiYWxsb29uQ2xhc3MsXG4gICAgfTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZmVycmVkT3JpZW50YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uR01CYWxsb29uTmV4dFRvKGVsLCBwcmVmZXJyZWRPcmllbnRhdGlvbnNbaV0sIG9wdGlvbnMpKSBicmVhaztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25HTUJhbGxvb25OZXh0VG8oZWw6IEhUTUxFbGVtZW50LCBvcmllbnRhdGlvbjogc3RyaW5nLCBvcHRpb25zOiBhbnkpIHtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdsZWZ0JyB8fCBvcmllbnRhdGlvbiA9PT0gJ3JpZ2h0JylcbiAgICAgICAgY3JlYXRlR01CYWxsb29uKFxuICAgICAgICAgICAgb3B0aW9ucy5ib2R5LFxuICAgICAgICAgICAgb3B0aW9ucy5jYXB0aW9uLFxuICAgICAgICAgICAgb3B0aW9ucy53LFxuICAgICAgICAgICAgb3B0aW9ucy5oLFxuICAgICAgICAgICAgNDcsXG4gICAgICAgICAgICAnbGVmdCcsXG4gICAgICAgICAgICBvcHRpb25zLmhpZGVDbG9zZSxcbiAgICAgICAgICAgIG9wdGlvbnMuaWQsXG4gICAgICAgICAgICBvcHRpb25zLmRvbnRIaWRlT25DbGljayxcbiAgICAgICAgICAgIG9wdGlvbnMuYmFsbG9vbkNsYXNzLFxuICAgICAgICApO1xuICAgIC8vIHVwIG9yIGRvd24gb3JpZW50YXRpb25zXG4gICAgZWxzZVxuICAgICAgICBjcmVhdGVHTUJhbGxvb24oXG4gICAgICAgICAgICBvcHRpb25zLmJvZHksXG4gICAgICAgICAgICBvcHRpb25zLmNhcHRpb24sXG4gICAgICAgICAgICBvcHRpb25zLncsXG4gICAgICAgICAgICBvcHRpb25zLmgsXG4gICAgICAgICAgICAxMCxcbiAgICAgICAgICAgICdkb3duJyxcbiAgICAgICAgICAgIG9wdGlvbnMuaGlkZUNsb3NlLFxuICAgICAgICAgICAgb3B0aW9ucy5pZCxcbiAgICAgICAgICAgIG9wdGlvbnMuZG9udEhpZGVPbkNsaWNrLFxuICAgICAgICAgICAgb3B0aW9ucy5iYWxsb29uQ2xhc3MsXG4gICAgICAgICk7XG5cbiAgICB2YXIgb2Zmc2V0V2lkdGggPSBnaWd5YS5nbG9iYWxbJ2RpdkdNQmFsbG9vbiddLm9mZnNldFdpZHRoO1xuICAgIHZhciBvZmZzZXRIZWlnaHQgPSBnaWd5YS5nbG9iYWxbJ2RpdkdNQmFsbG9vbiddLm9mZnNldEhlaWdodDtcbiAgICB2YXIgcG9zID0gX0dldEVsZW1lbnRQb3MoZWwpO1xuICAgIHZhciBsZWZ0O1xuICAgIHZhciB0b3A7XG5cbiAgICAvL3ZhciBkc3QgPSBlbC5zdHlsZTtcblxuICAgIHZhciBkZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB2YXIgZGIgPSBkb2N1bWVudC5ib2R5O1xuXG4gICAgdmFyIGNsaWVudEhlaWdodCA9IGRlLmNsaWVudEhlaWdodDtcbiAgICBpZiAoY2xpZW50SGVpZ2h0ID09IDApIGNsaWVudEhlaWdodCA9IGRiLmNsaWVudEhlaWdodDtcbiAgICB2YXIgY2xpZW50V2lkdGggPSBkZS5jbGllbnRXaWR0aDtcbiAgICBpZiAoY2xpZW50V2lkdGggPT0gMCkgY2xpZW50V2lkdGggPSBkYi5jbGllbnRXaWR0aDtcblxuICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgY2xpZW50SGVpZ2h0ID0gZGIuc2Nyb2xsSGVpZ2h0ICYmIGRiLnNjcm9sbEhlaWdodCA8IHdpbmRvdy5pbm5lckhlaWdodCA/IGRiLnNjcm9sbEhlaWdodCA6IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgY2xpZW50V2lkdGggPSBkYi5zY3JvbGxXaWR0aCAmJiBkYi5zY3JvbGxXaWR0aCA8IHdpbmRvdy5pbm5lcldpZHRoID8gZGIuc2Nyb2xsV2lkdGggOiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB9XG5cbiAgICB2YXIgc2NybCA9IGdpZ3lhLnV0aWxzLnZpZXdwb3J0LmdldFNjcm9sbCgpO1xuICAgIHZhciB2cHQgPSBzY3JsLnRvcDtcbiAgICAvL3ZhciB2cGwgPSBzY3JsLmxlZnQ7XG4gICAgdmFyIGJvdHRvbVJpZ2h0VG9wID0gdnB0ICsgY2xpZW50SGVpZ2h0O1xuICAgIC8vdmFyIGJvdHRvbVJpZ2h0TGVmdCA9IHZwbCArIGNsaWVudFdpZHRoO1xuXG4gICAgdmFyIGFycm93RGlyZWN0aW9uO1xuICAgIHZhciBhcnJvd09mZnNldDtcblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2xlZnQnIHx8IG9yaWVudGF0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgIGFycm93T2Zmc2V0ID0gNDc7XG5cbiAgICAgICAgdG9wID0gcG9zLnRvcCArIGVsLm9mZnNldEhlaWdodCAvIDIgLSA0NyAtIDI1IC8gMjtcbiAgICAgICAgaWYgKHRvcCArIG9mZnNldEhlaWdodCA+IGJvdHRvbVJpZ2h0VG9wKSB7XG4gICAgICAgICAgICB0b3AgPSBib3R0b21SaWdodFRvcCAtIG9mZnNldEhlaWdodCAtIDEwO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxlZnRXaXRoTGVmdE9yaWVudGF0aW9uID0gcG9zLmxlZnQgLSBvZmZzZXRXaWR0aCAtIDU7XG4gICAgICAgIHZhciBsZWZ0V2l0aFJpZ2h0T3JpZW50YXRpb24gPSBwb3MubGVmdCArIGVsLm9mZnNldFdpZHRoICsgNTtcblxuICAgICAgICBpZiAob3JpZW50YXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgLy8gY2hlY2sgdGhhdCB0aGVyZSdzIGVub3VnaCBzcGFjZSBvbiB0aGUgbGVmdFxuICAgICAgICAgICAgaWYgKGxlZnRXaXRoTGVmdE9yaWVudGF0aW9uID4gMTApIHtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdFdpdGhMZWZ0T3JpZW50YXRpb247XG4gICAgICAgICAgICAgICAgYXJyb3dEaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuYmFsbG9vbkNsYXNzICs9ICcgZ2lnLWJhbGxvb24tbGVmdCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG5vdCBlbm91Z2ggc3BhY2UgZm9yIGxlZnQgb3JpZW50YXRpb25cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjbGllbnRXaWR0aCAtIGxlZnRXaXRoUmlnaHRPcmllbnRhdGlvbiAtIG9mZnNldFdpZHRoID4gMTApIHtcbiAgICAgICAgICAgIC8vIHJpZ2h0IG9yaWVudGF0aW9uIChidWc6IGh0dHBzOi8vZ2lneWEudHBvbmRlbWFuZC5jb20vZW50aXR5LzQwMDAxKVxuICAgICAgICAgICAgbGVmdCA9IGxlZnRXaXRoUmlnaHRPcmllbnRhdGlvbjtcbiAgICAgICAgICAgIGFycm93RGlyZWN0aW9uID0gJ2xlZnQnO1xuICAgICAgICAgICAgb3B0aW9ucy5iYWxsb29uQ2xhc3MgKz0gJyBnaWctYmFsbG9vbi1yaWdodCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09ICd1cCcgfHwgb3JpZW50YXRpb24gPT09ICdkb3duJykge1xuICAgICAgICBhcnJvd09mZnNldCA9IDEwO1xuICAgICAgICBsZWZ0ID0gcG9zLmxlZnQ7XG5cbiAgICAgICAgdmFyIHRvcFdpdGhVcE9yaWVudGF0aW9uID0gcG9zLnRvcCAtIG9mZnNldEhlaWdodCAtIDEwO1xuICAgICAgICB2YXIgdG9wV2l0aERvd25PcmllbnRhdGlvbiA9IHBvcy50b3AgKyBlbC5vZmZzZXRIZWlnaHQgKyA1O1xuXG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3VwJykge1xuICAgICAgICAgICAgaWYgKHRvcFdpdGhVcE9yaWVudGF0aW9uID4gNSkge1xuICAgICAgICAgICAgICAgIHRvcCA9IHRvcFdpdGhVcE9yaWVudGF0aW9uO1xuICAgICAgICAgICAgICAgIGFycm93RGlyZWN0aW9uID0gJ2Rvd24nO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuYmFsbG9vbkNsYXNzICs9ICcgZ2lnLWJhbGxvb24tdXAnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGRvd24gb3JpZW50YXRpb24gLSBhc3N1bWUgdGhlcmUgaXMgYWx3YXlzIGVub3VnaCBzcGFjZSBkb3duXG4gICAgICAgICAgICB0b3AgPSB0b3BXaXRoRG93bk9yaWVudGF0aW9uO1xuICAgICAgICAgICAgYXJyb3dEaXJlY3Rpb24gPSAndXAnO1xuICAgICAgICAgICAgb3B0aW9ucy5iYWxsb29uQ2xhc3MgKz0gJyBnaWctYmFsbG9vbi1kb3duJztcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBiYWxsb29uRGl2ID0gY3JlYXRlR01CYWxsb29uKFxuICAgICAgICBvcHRpb25zLmJvZHksXG4gICAgICAgIG9wdGlvbnMuY2FwdGlvbixcbiAgICAgICAgb3B0aW9ucy53LFxuICAgICAgICBvcHRpb25zLmgsXG4gICAgICAgIGFycm93T2Zmc2V0LFxuICAgICAgICBhcnJvd0RpcmVjdGlvbixcbiAgICAgICAgb3B0aW9ucy5oaWRlQ2xvc2UsXG4gICAgICAgIG9wdGlvbnMuaWQsXG4gICAgICAgIG9wdGlvbnMuZG9udEhpZGVPbkNsaWNrLFxuICAgICAgICBvcHRpb25zLmJhbGxvb25DbGFzcyxcbiAgICApO1xuXG4gICAgaWYgKGxlZnQgPCAxMCkgbGVmdCA9IDEwO1xuICAgIGlmICh0b3AgPCAxMCkgdG9wID0gMTA7XG4gICAgZ2lneWEuZ2xvYmFsWydkaXZHTUJhbGxvb24nXS5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XG4gICAgZ2lneWEuZ2xvYmFsWydkaXZHTUJhbGxvb24nXS5zdHlsZS50b3AgPSB0b3AgKyAncHgnO1xuICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNJRSkge1xuICAgICAgICB2YXIgZnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnaWd5YS5nbG9iYWxbJ2RpdkdNQmFsbG9vbiddLmlkICsgJ19mcmFtZScpO1xuICAgICAgICBpZiAoZnJhbWUpIGFkZElmcmFtZVNoaW0oZnJhbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBiYWxsb29uRGl2O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbFRvRWxlbWVudChlbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoZWwpIHtcbiAgICAgICAgdmFyIHBvcyA9IF9HZXRFbGVtZW50UG9zKGVsKTtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHBvcy5sZWZ0LCBwb3MudG9wKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcHJlbG9hZEltYWdlcyhhckltYWdlczogc3RyaW5nW10sIGZuQ2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgdmFyIGFySW1hZ2VPYmplY3RzID0gW107XG4gICAgdmFyIGxvYWRlZCA9IDA7XG4gICAgdmFyIGZuY0ltZ09ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsb2FkZWQrKztcbiAgICAgICAgaWYgKGxvYWRlZCA9PSBhckltYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZuQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhckltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJJbWFnZXNbaV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgZm5jSW1nT25sb2FkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWcub25sb2FkID0gZm5jSW1nT25sb2FkO1xuICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSBmbmNJbWdPbmxvYWQ7XG4gICAgICAgICAgICBpbWcuc3JjID0gYXJJbWFnZXNbaV07XG4gICAgICAgICAgICBhckltYWdlT2JqZWN0cy5wdXNoKGltZyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlFbGxpcHNpcyh0ZXh0OiBzdHJpbmcsIG1heFJlYWxDaGFyczogbnVtYmVyKSB7XG4gICAgdmFyIHBmeCA9ICcnO1xuICAgIHZhciB0YWdzdGFjayA9IFtdO1xuICAgIHZhciByZVRhZyA9IC9cXDwoXFwvKT8oW14gXFwvPl0rKVsgXT9bXj5dKihcXC8pP1xcPi9pO1xuICAgIHZhciByZWFsQ2hhcnMgPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aCAmJiAocmVhbENoYXJzIDwgbWF4UmVhbENoYXJzIHx8IG1heFJlYWxDaGFycyA9PSAwKTsgKSB7XG4gICAgICAgIHZhciBjaCA9IHRleHQuc3Vic3RyKGksIDEpO1xuICAgICAgICBpZiAoY2ggPT0gJzwnKSB7XG4gICAgICAgICAgICB2YXIgaWR4Q2xvc2VUYWcgPSB0ZXh0LmluZGV4T2YoJz4nLCBpKTtcbiAgICAgICAgICAgIHZhciB0YWcgPSB0ZXh0LnN1YnN0cmluZyhpLCBpZHhDbG9zZVRhZyArIDEpO1xuICAgICAgICAgICAgcmVUYWcubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gcmVUYWcuZXhlYyh0YWcpOyAvLyAxPS8/IDI9dGFnbmFtZSAzPXRyYWlsaW5nIC8gMD1hbGxcbiAgICAgICAgICAgIC8qaWYgKG1hdGNoZXMgPT0gbnVsbCkge1xuXHRcdFx0XHQvL2FsZXJ0KHRhZyArICdcXG4gSXMgTUFMRk9STUVEJyk7XG5cdFx0XHRcdH0qL1xuICAgICAgICAgICAgdmFyIHRhZ25hbWUgPSBtYXRjaGVzWzJdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAobWF0Y2hlc1sxXSA9PSAnLycpIHtcbiAgICAgICAgICAgICAgICAvL2Nsb3NpbmcgdGFnXG4gICAgICAgICAgICAgICAgaWYgKHRhZ3N0YWNrLmxlbmd0aCA+IDAgJiYgdGFnc3RhY2tbdGFnc3RhY2subGVuZ3RoIC0gMV0udGFnbmFtZSA9PSB0YWduYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhZ3N0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9uZXcgdGFnXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZXNbM10gPT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbm90aGluZyB0byBkbyAobm90aGluZyB0byBwdXNoIG9udG8gdGhlIHN0YWNrKSwgcmVzdCBpcyBjb21tb25cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2xBbGwgPSAnPC8nICsgbWF0Y2hlc1syXSArICc+JztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhZ3N0YWNrLmxlbmd0aCA+IDApIGNsQWxsICs9IHRhZ3N0YWNrW3RhZ3N0YWNrLmxlbmd0aCAtIDFdLmNsO1xuICAgICAgICAgICAgICAgICAgICB0YWdzdGFjay5wdXNoKHsgdGFnbmFtZTogbWF0Y2hlc1syXSwgY2w6IGNsQWxsIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBmeCArPSBtYXRjaGVzWzBdO1xuICAgICAgICAgICAgaSArPSBtYXRjaGVzWzBdLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoY2ggPT0gJyYnKSB7XG4gICAgICAgICAgICB2YXIgaWR4Q2xvc2VFbnRpdHkgPSB0ZXh0LmluZGV4T2YoJzsnLCBpKTtcbiAgICAgICAgICAgIGlmIChpZHhDbG9zZUVudGl0eSAtIGkgPiA4KSB7XG4gICAgICAgICAgICAgICAgcGZ4ICs9ICcmJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGZ4ICs9IHRleHQuc3Vic3RyaW5nKGksIGlkeENsb3NlRW50aXR5ICsgMSk7XG4gICAgICAgICAgICAgICAgaSA9IGlkeENsb3NlRW50aXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVhbENoYXJzKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwZnggKz0gY2g7XG4gICAgICAgICAgICByZWFsQ2hhcnMrKztcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIGlmIChyZWFsQ2hhcnMgPCBtYXhSZWFsQ2hhcnMpIHtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBmeCArICcmIzEzMzsnICsgKHRhZ3N0YWNrLmxlbmd0aCA+IDAgPyB0YWdzdGFja1t0YWdzdGFjay5sZW5ndGggLSAxXS5jbCA6ICcnKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UGhvdG9VUkwodXJsOiBzdHJpbmcsIGRlZmF1bHRVUkw/OiBzdHJpbmcpIHtcbiAgICAvLyBVc2UgZGVmYXVsdCBVUkwgaWYgbm8gVVJMIHByb3ZpZGVkLlxuICAgIGlmIChkZWZhdWx0VVJMICYmICF1cmwpIHtcbiAgICAgICAgdXJsID0gZGVmYXVsdFVSTDtcbiAgICB9XG5cbiAgICAvLyBBYm9ydCBpZiBubyBVUkwuXG4gICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvLyBQYXJzZSBVUkwgdXNpbmcgQSBlbGVtZW50LlxuICAgIC8vIFNlZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vamxvbmcvMjQyODU2MVxuICAgIHZhciBwYXJzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgcGFyc2VyLmhyZWYgPSB1cmw7XG5cbiAgICAvLyBDaGVjayBmb3IgaW5zZWN1cmUgVVJMIG9uIHNlY3VyZSBwYWdlLlxuICAgIGlmIChwYXJzZXIucHJvdG9jb2wgPT09ICdodHRwOicgJiYgZ2lneWEubG9jYWxJbmZvLnByb3RvY29sID09PSAnaHR0cHMnKSB7XG4gICAgICAgIGlmIChnaWd5YS51dGlscy5hcnJheS5pbmRleE9mKGdpZ3lhLl8uQ0ROX0hPU1RTLmh0dHAsIHBhcnNlci5ob3N0KSAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIEdpZ3lhIENETiBVUkwgbmVlZHMgdG8gYmUgY29udmVydGVkIHRvIEhUVFBTLlxuICAgICAgICAgICAgcmV0dXJuIGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UocGFyc2VyLnBhdGhuYW1lICsgcGFyc2VyLnNlYXJjaCArIHBhcnNlci5oYXNoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFBob3RvIFVSTCBuZWVkcyB0byBiZSBwcm94aWVkIHRocm91Z2ggc2VjdXJlIHNlcnZlci5cbiAgICAgICAgICAgIHJldHVybiBnaWd5YS5fLmdldENkblJlc291cmNlKCcvcHJveHkvcGhvdG9zLmFzaHg/dT0nICsgZ2lneWEudXRpbHMuVVJMLlVSTEVuY29kZSh1cmwpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1cmw7XG59XG5leHBvcnQgZnVuY3Rpb24gd2JyKHM6IHN0cmluZywgbjogbnVtYmVyKSB7XG4gICAgcyA9IHMucmVwbGFjZSgvXFxuL2csICdcXG4gJyk7XG4gICAgdmFyIGFyV29yZHMgPSBzLnNwbGl0KCcgJyk7XG4gICAgdmFyIGNoSHlwaGVuID0gJyYjMTczOyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcldvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhcldvcmRzW2ldLmxlbmd0aCA+IG4pIHtcbiAgICAgICAgICAgIHZhciBjaEh5cGhlbkN1cnJlbnQgPSBjaEh5cGhlbjtcbiAgICAgICAgICAgIHZhciBhcldvcmQgPSBhcldvcmRzW2ldLnNwbGl0KCcnKTtcbiAgICAgICAgICAgIHZhciBzdG9wID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgc3RvcEVuZENoYXI7XG4gICAgICAgICAgICB2YXIgY3VycmVudE4gPSAtMTtcbiAgICAgICAgICAgIGZvciAodmFyIHUgPSAwOyB1IDwgYXJXb3JkLmxlbmd0aDsgdSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzdG9wKSBjdXJyZW50TisrO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50TiA9PSBuKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyV29yZC5zcGxpY2UodSwgMCwgY2hIeXBoZW5DdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE4gPSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGFyV29yZFt1XSA9PSAnJicpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHN0b3BFbmRDaGFyID0gJzsnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJXb3JkW3VdID09ICc8Jykge1xuICAgICAgICAgICAgICAgICAgICBzdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcEVuZENoYXIgPSAnPic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdG9wICYmIGFyV29yZFt1XSA9PSBzdG9wRW5kQ2hhcikgc3RvcCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJXb3Jkc1tpXSA9IGFyV29yZC5qb2luKCcnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJXb3Jkcy5qb2luKCcgJykucmVwbGFjZSgvXFxuIC9nLCAnXFxuJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zKGVsOiBIVE1MRWxlbWVudCk6IGFueSB7XG4gICAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBpc09wZXJhID0gdWEuaW5kZXhPZignb3BlcmEnKSAhPSAtMTtcbiAgICB2YXIgaXNJRSA9IHVhLmluZGV4T2YoJ21zaWUnKSAhPSAtMSAmJiAhaXNPcGVyYTsgLy8gbm90IG9wZXJhIHNwb29mXG4gICAgaWYgKGVsLnBhcmVudE5vZGUgPT09IG51bGwgfHwgZWwuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgcGFyZW50ID0gbnVsbDtcbiAgICB2YXIgcG9zID0gW107XG4gICAgdmFyIGJveDtcblxuICAgIGlmIChlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgLy9JRVxuICAgICAgICBib3ggPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKTtcbiAgICAgICAgdmFyIHNjcm9sbExlZnQgPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0KTtcbiAgICAgICAgcmV0dXJuIHsgeDogYm94LmxlZnQgKyBzY3JvbGxMZWZ0LCB5OiBib3gudG9wICsgc2Nyb2xsVG9wIH07XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudFsnZ2V0Qm94T2JqZWN0Rm9yJ10pIHtcbiAgICAgICAgLy8gZ2Vja29cbiAgICAgICAgYm94ID0gZG9jdW1lbnRbJ2dldEJveE9iamVjdEZvciddKGVsKTtcbiAgICAgICAgdmFyIGJvcmRlckxlZnQgPSBlbC5zdHlsZS5ib3JkZXJMZWZ0V2lkdGggPyBwYXJzZUludChlbC5zdHlsZS5ib3JkZXJMZWZ0V2lkdGgpIDogMDtcbiAgICAgICAgdmFyIGJvcmRlclRvcCA9IGVsLnN0eWxlLmJvcmRlclRvcFdpZHRoID8gcGFyc2VJbnQoZWwuc3R5bGUuYm9yZGVyVG9wV2lkdGgpIDogMDtcbiAgICAgICAgcG9zID0gW2JveC54IC0gYm9yZGVyTGVmdCwgYm94LnkgLSBib3JkZXJUb3BdO1xuICAgIH0gLy8gc2FmYXJpICYgb3BlcmFcbiAgICBlbHNlIHtcbiAgICAgICAgcG9zID0gW2VsLm9mZnNldExlZnQsIGVsLm9mZnNldFRvcF07XG4gICAgICAgIHBhcmVudCA9IGVsLm9mZnNldFBhcmVudDtcbiAgICAgICAgaWYgKHBhcmVudCAhPSBlbCkge1xuICAgICAgICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIHBvc1swXSArPSBwYXJlbnQub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgICAgICBwb3NbMV0gKz0gcGFyZW50Lm9mZnNldFRvcDtcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnRbJ29mZnNldFBhcmVudCddO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh1YS5pbmRleE9mKCdvcGVyYScpICE9IC0xIHx8ICh1YS5pbmRleE9mKCdzYWZhcmknKSAhPSAtMSAmJiBlbC5zdHlsZS5wb3NpdGlvbiA9PSAnYWJzb2x1dGUnKSkge1xuICAgICAgICAgICAgcG9zWzBdIC09IGRvY3VtZW50LmJvZHkub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIHBvc1sxXSAtPSBkb2N1bWVudC5ib2R5Lm9mZnNldFRvcDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZWwucGFyZW50Tm9kZSkge1xuICAgICAgICBwYXJlbnQgPSBlbC5wYXJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudCA9IG51bGw7XG4gICAgfVxuICAgIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50Wyd0YWdOYW1lJ10gIT0gJ0JPRFknICYmIHBhcmVudFsndGFnTmFtZSddICE9ICdIVE1MJykge1xuICAgICAgICAvLyBhY2NvdW50IGZvciBhbnkgc2Nyb2xsZWQgYW5jZXN0b3JzXG4gICAgICAgIHBvc1swXSAtPSBwYXJlbnRbJ3Njcm9sbExlZnQnXTtcbiAgICAgICAgcG9zWzFdIC09IHBhcmVudFsnc2Nyb2xsVG9wJ107XG4gICAgICAgIGlmIChwYXJlbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHg6IHBvc1swXSwgeTogcG9zWzFdIH07XG59XG5leHBvcnQgZnVuY3Rpb24gX0dldEVsZW1lbnRQb3Mob2JqOiBIVE1MRWxlbWVudCkge1xuICAgIHZhciBwb3MgPSBnZXRQb3Mob2JqKTtcbiAgICByZXR1cm4geyBsZWZ0OiBwb3MueCwgdG9wOiBwb3MueSB9O1xufVxuIiwiaW1wb3J0IHsgYWRkQ3NzLCBmaXhDc3MgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL0Nzc1V0aWxzJztcblxuZ2lneWEudXRpbHMuZnVuY3Rpb25zLmNyZWF0ZUFsaWFzKCdnaWd5YS5nbG9iYWwuYWRkQ1NTJywgYWRkQ3NzKTtcbmdpZ3lhLnV0aWxzLmZ1bmN0aW9ucy5jcmVhdGVBbGlhcygnZ2lneWEucGx1Z2luVXRpbHMuY3NzLmZpeENzcycsIGZpeENzcyk7XG4iLCJleHBvcnQgZnVuY3Rpb24gZml4Q3NzKGNzczogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzSUU3IHx8IChnaWd5YS5sb2NhbEluZm8uaXNJRSAmJiBnaWd5YS5sb2NhbEluZm8ucXVpcmtzTW9kZSkpIHtcbiAgICAgICAgY3NzID0gY3NzLnJlcGxhY2UoL2Rpc3BsYXk6aW5saW5lLWJsb2NrL2csICdkaXNwbGF5OmlubGluZS1ibG9jazt6b29tOjE7KmRpc3BsYXk6aW5saW5lJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcy5yZXBsYWNlKFxuICAgICAgICAvZ3JhZGllbnRcXCgoLio/KSwoLio/KVxcKS9nLFxuICAgICAgICAnZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj1cIiQxXCIsIGVuZENvbG9yc3RyPVwiJDJcIik7JyArXG4gICAgICAgICAgICAnYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvcCwgICQxLCAgJDIpOycgK1xuICAgICAgICAgICAgJ2JhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wIGxlZnQsICQxLCAkMik7JyArXG4gICAgICAgICAgICAnYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgkMSksIHRvKCQyKSk7JyArXG4gICAgICAgICAgICAnYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgJDEsICAkMiknLFxuICAgICk7XG59XG4iLCJpbXBvcnQgeyBJTWFwIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2FycmF5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGZpeENzcyhjc3M6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5pc0lFNyB8fCAoZ2lneWEubG9jYWxJbmZvLmlzSUUgJiYgZ2lneWEubG9jYWxJbmZvLnF1aXJrc01vZGUpKSB7XG4gICAgICAgIGNzcyA9IGNzcy5yZXBsYWNlKC9kaXNwbGF5OmlubGluZS1ibG9jay9nLCAnZGlzcGxheTppbmxpbmUtYmxvY2s7em9vbToxOypkaXNwbGF5OmlubGluZScpO1xuICAgIH1cblxuICAgIHJldHVybiBjc3MucmVwbGFjZShcbiAgICAgICAgL2dyYWRpZW50XFwoKC4qPyksKC4qPylcXCkvZyxcbiAgICAgICAgJ2ZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9XCIkMVwiLCBlbmRDb2xvcnN0cj1cIiQyXCIpOycgK1xuICAgICAgICAgICAgJ2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0b3AsICAkMSwgICQyKTsnICtcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCBsZWZ0LCAkMSwgJDIpOycgK1xuICAgICAgICAgICAgJ2JhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oJDEpLCB0bygkMikpOycgK1xuICAgICAgICAgICAgJ2JhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICQxLCAgJDIpJyxcbiAgICApO1xufVxudmFyIGluamVjdGVkUnVsZXM6IElNYXA8Ym9vbGVhbj4gPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBhZGRDc3MocnVsZXM6IGFueSwgcHJlZml4Pzogc3RyaW5nLCBvdmVycmlkZSA9IHRydWUsIGhhc2g/OiBzdHJpbmcpIHtcbiAgICBpZiAoIXJ1bGVzIHx8IHJ1bGVzID09ICcnKSByZXR1cm47XG4gICAgaWYgKHJ1bGVzIGluc3RhbmNlb2YgQXJyYXkpIHJ1bGVzID0gcnVsZXMuam9pbignICcpO1xuICAgIC8vICAgIHJ1bGVzID0gZml4Q3NzKHJ1bGVzKTtcbiAgICBpZiAocHJlZml4KSBydWxlcyA9IHJ1bGVzLnJlcGxhY2UoLyhbXlxcc31dKlxcLmdpZykvZywgcHJlZml4ICsgJyAkMScpO1xuXG4gICAgaWYgKCFoYXNoKSBoYXNoID0gZ2lneWEudXRpbHMub2JqZWN0LmdldE11cm11ckhhc2gocnVsZXMpLnRvU3RyaW5nKCk7XG5cbiAgICBpZiAoIWluamVjdGVkUnVsZXNbaGFzaF0gfHwgb3ZlcnJpZGUpIHtcbiAgICAgICAgaW5qZWN0ZWRSdWxlc1toYXNoXSA9IHRydWU7XG5cbiAgICAgICAgdmFyIHN0eWxlOiBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgICAgdmFyIHJ1bGVzTm9kZTogYW55ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocnVsZXMpO1xuICAgICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICAgICAgaWYgKHJ1bGVzTm9kZS52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcnVsZXNOb2RlLnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBydWxlc05vZGUubm9kZVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQocnVsZXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJyk7XG4gICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgKGhlYWQubGVuZ3RoID4gMCA/IGhlYWRbMF0gOiBib2R5KS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgc2NhbGVJbWFnZSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvR2xvYmFsRE9NJztcbmltcG9ydCB7IGdldENvbWJpbmF0aW9uIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9nZW5lcmFsL2FycmF5VXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElCb3JkZXJQYWRkaW5nVG90YWwge1xuICAgIHc6IG51bWJlcjtcbiAgICBoOiBudW1iZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xhc3NCb3JkZXJzQW5kUGFkZGluZ3MoY2xhc3NOYW1lOiBzdHJpbmcpOiBJQm9yZGVyUGFkZGluZ1RvdGFsIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgZ2lneWEudXRpbHMuRE9NLnByZXBlbmRUb0JvZHkoZWwpO1xuICAgIHZhciBib3JkZXJzQW5kUGFkZGluZ3MgPSBnZXRCb3JkZXJzQW5kUGFkZGluZ3MoZWwpO1xuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIHJldHVybiBib3JkZXJzQW5kUGFkZGluZ3M7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm9yZGVyc0FuZFBhZGRpbmdzKGVsOiBIVE1MRWxlbWVudCk6IElCb3JkZXJQYWRkaW5nVG90YWwge1xuICAgIHZhciBzdHlsZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdmFyIG4gPSBwYXJzZUludChnZXRTdHlsZShlbCwgbmFtZSkpO1xuICAgICAgICBpZiAoaXNOYU4obikpIG4gPSAwO1xuICAgICAgICByZXR1cm4gbjtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHc6IHN0eWxlKCdib3JkZXItbGVmdC13aWR0aCcpICsgc3R5bGUoJ2JvcmRlci1yaWdodC13aWR0aCcpICsgc3R5bGUoJ3BhZGRpbmctcmlnaHQnKSArIHN0eWxlKCdwYWRkaW5nLWxlZnQnKSxcbiAgICAgICAgaDogc3R5bGUoJ2JvcmRlci10b3Atd2lkdGgnKSArIHN0eWxlKCdib3JkZXItYm90dG9tLXdpZHRoJykgKyBzdHlsZSgncGFkZGluZy10b3AnKSArIHN0eWxlKCdwYWRkaW5nLWJvdHRvbScpLFxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGUob2JqOiBIVE1MRWxlbWVudCwgc3R5bGVQcm9wOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChvYmpbJ2N1cnJlbnRTdHlsZSddKSByZXR1cm4gb2JqWydjdXJyZW50U3R5bGUnXVtzdHlsZVByb3BdO1xuICAgIGVsc2UgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSByZXR1cm4gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShvYmosIG51bGwpLmdldFByb3BlcnR5VmFsdWUoc3R5bGVQcm9wKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZUltYWdlVG9Db250YWluZXIoaW1nOiBhbnksIGRvbnRDZW50ZXI6IGJvb2xlYW4sIGZuT25JbWdMb2FkOiBGdW5jdGlvbikge1xuICAgIGlmICghZG9udENlbnRlcikge1xuICAgICAgICBpbWcucGFyZW50Tm9kZS5zdHlsZS50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gICAgICAgIGltZy5wYXJlbnROb2RlLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSAndG9wJztcbiAgICB9XG4gICAgdmFyIHN0eWxlID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB2YXIgbm9kZSA9IGltZy5wYXJlbnROb2RlO1xuICAgICAgICB2YXIgZGltID0gZ2V0U3R5bGUobm9kZSwgbmFtZSk7XG4gICAgICAgIHdoaWxlIChkaW0gPT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgZGltID0gZ2V0U3R5bGUobm9kZSwgbmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG4gPSBwYXJzZUludChkaW0pO1xuICAgICAgICBpZiAoaXNOYU4obikpIG4gPSAwO1xuICAgICAgICByZXR1cm4gbjtcbiAgICB9O1xuICAgIC8vdmFyIHNpemUgPSBNYXRoLm1pbihpbWcucGFyZW50Tm9kZS5vZmZzZXRXaWR0aCwgaW1nLnBhcmVudE5vZGUub2Zmc2V0SGVpZ2h0KTtcbiAgICB2YXIgc2l6ZSA9IE1hdGgubWluKHN0eWxlKCd3aWR0aCcpLCBzdHlsZSgnaGVpZ2h0JykpO1xuICAgIGlmIChnaWd5YS5sb2NhbEluZm8ucXVpcmtzTW9kZSkge1xuICAgICAgICB2YXIgYm9yZGVyc0FuZFBhZGRpbmdzID0gZ2V0Qm9yZGVyc0FuZFBhZGRpbmdzKGltZy5wYXJlbnROb2RlKTtcbiAgICAgICAgdmFyIHcgPSBzdHlsZSgnd2lkdGgnKSAtIGJvcmRlcnNBbmRQYWRkaW5ncy53O1xuICAgICAgICB2YXIgaCA9IHN0eWxlKCdoZWlnaHQnKSAtIGJvcmRlcnNBbmRQYWRkaW5ncy5oO1xuICAgICAgICBzaXplID0gTWF0aC5taW4odywgaCk7XG4gICAgfVxuICAgIHNjYWxlSW1hZ2UoaW1nLCBzaXplLCBkb250Q2VudGVyLCBmbk9uSW1nTG9hZCk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xhc3NJbm5lclNpemUoY2xhc3NOYW1lOiBzdHJpbmcsIHc6IG51bWJlciwgaDogbnVtYmVyKTogSUJvcmRlclBhZGRpbmdUb3RhbCB7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWwuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIGdpZ3lhLnV0aWxzLkRPTS5wcmVwZW5kVG9Cb2R5KGVsKTtcbiAgICB2YXIgYm9yZGVyc0FuZFBhZGRpbmdzID0gZ2V0Qm9yZGVyc0FuZFBhZGRpbmdzKGVsKTtcbiAgICB3IC09IGJvcmRlcnNBbmRQYWRkaW5ncy53O1xuICAgIGggLT0gYm9yZGVyc0FuZFBhZGRpbmdzLmg7XG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgcmV0dXJuIHsgdzogdywgaDogaCB9O1xufVxuZXhwb3J0IGludGVyZmFjZSBJU3ByaXRlSW5mbyB7XG4gICAgaXNTaW5nbGVJbWFnZTogYm9vbGVhbjtcbiAgICBzcmM6IHN0cmluZztcbn1cbmV4cG9ydCBmdW5jdGlvbiBTcHJpdGVSZW5kZXJlcihzcmM6IHN0cmluZywgc3JjVGVtcGxhdGU6IHN0cmluZywgc3ByaXRlRGF0YSwgc3ByaXRlVzogbnVtYmVyLCBzcHJpdGVIOiBudW1iZXIsIHBpeGVsUmF0aW86IG51bWJlciwgc3ByaXRlTGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNyYyA9IHNyYztcbiAgICB0aGlzLnNyY1RlbXBsYXRlID0gc3JjVGVtcGxhdGU7XG4gICAgdGhpcy5zcHJpdGVEYXRhID0gc3ByaXRlRGF0YTtcbiAgICB0aGlzLnNwcml0ZVcgPSBzcHJpdGVXO1xuICAgIHRoaXMuc3ByaXRlSCA9IHNwcml0ZUg7XG4gICAgdGhpcy5waXhlbFJhdGlvID0gcGl4ZWxSYXRpbztcbiAgICB0aGlzLnNwcml0ZUxlbmd0aCA9IHNwcml0ZUxlbmd0aDtcbn1cblNwcml0ZVJlbmRlcmVyLnByb3RvdHlwZSA9IHtcbiAgICBnZXRTcHJpdGVEYXRhOiBmdW5jdGlvbihpZDogc3RyaW5nLCBkb250VXNlU3ByaXRlcz86IGJvb2xlYW4pOiBJU3ByaXRlSW5mbyB7XG4gICAgICAgIHZhciBvU3ByaXRlID0gdGhpcy5zcHJpdGVEYXRhW2lkXTtcbiAgICAgICAgaWYgKG9TcHJpdGUgJiYgIWRvbnRVc2VTcHJpdGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGVEYXRhW2lkXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSBpZC5zcGxpdCgnLScpO1xuICAgICAgICAgICAgdmFyIHJlZ2V4cCA9IC9cXHsoLio/KVxcfS9nO1xuICAgICAgICAgICAgdmFyIHNyYyA9IHRoaXMuc3JjVGVtcGxhdGUucmVwbGFjZShyZWdleHAsIGZ1bmN0aW9uKF8sIGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtID0gcGFyYW1zW2krK107XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaXNTaW5nbGVJbWFnZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzcmM6IHNyYyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0U3R5bGVTdHJpbmc6IGZ1bmN0aW9uKHNwcml0ZUlkOiBzdHJpbmcsIGF1dG9NYXJnaW46IGJvb2xlYW4pIHtcbiAgICAgICAgdmFyIG9TcHJpdGUgPSB0aGlzLmdldFNwcml0ZURhdGEoc3ByaXRlSWQpO1xuICAgICAgICB2YXIgYXJTdHlsZSA9IFtdO1xuXG4gICAgICAgIGlmIChvU3ByaXRlKSB7XG4gICAgICAgICAgICBhclN0eWxlLnB1c2goXCJiYWNrZ3JvdW5kLWltYWdlOnVybCgnXCIgKyB0aGlzLnNyYyArIFwiJyk7XCIpO1xuICAgICAgICAgICAgYXJTdHlsZS5wdXNoKCdiYWNrZ3JvdW5kLXBvc2l0aW9uOi0nICsgb1Nwcml0ZS54ICsgJ3B4IDBweDsnKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucGl4ZWxSYXRpbyA+IDEpIHtcbiAgICAgICAgICAgICAgICBhclN0eWxlLnB1c2goJ2JhY2tncm91bmQtc2l6ZTonICsgdGhpcy5zcHJpdGVMZW5ndGggKiB0aGlzLnNwcml0ZVcgKyAncHggJyArIHRoaXMuc3ByaXRlSCArICdweDsnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGF1dG9NYXJnaW4pIHtcbiAgICAgICAgICAgICAgICBhclN0eWxlLnB1c2goJ21hcmdpbjogMCBhdXRvOycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJTdHlsZS5wdXNoKCd3aWR0aDogJyArIHRoaXMuc3ByaXRlVyArICdweDsnKTtcbiAgICAgICAgICAgIGFyU3R5bGUucHVzaCgnaGVpZ2h0OiAnICsgdGhpcy5zcHJpdGVIICsgJ3B4O2xpbmUtaGVpZ2h0OiAnICsgdGhpcy5zcHJpdGVIICsgJ3B4OycpO1xuICAgICAgICAgICAgYXJTdHlsZS5wdXNoKCdiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7Jyk7XG4gICAgICAgICAgICAvL2FyU3R5bGUucHVzaChcImZvbnQtc2l6ZToxcHg7XCIpO1xuICAgICAgICAgICAgYXJTdHlsZS5wdXNoKCdwb3NpdGlvbjpzdGF0aWM7Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyU3R5bGUuam9pbignJyk7XG4gICAgfSxcblxuICAgIGdldEhUTUw6IGZ1bmN0aW9uKFxuICAgICAgICBzcHJpdGVJZDogc3RyaW5nLFxuICAgICAgICBhdXRvTWFyZ2luOiBib29sZWFuLFxuICAgICAgICBkb250VXNlU3ByaXRlczogYm9vbGVhbixcbiAgICAgICAgZWxJRDogc3RyaW5nID0gJycsXG4gICAgICAgIGFsdFRleHQ6IHN0cmluZyA9ICcnLFxuICAgICAgICB0YWJpbmRleDogbnVtYmVyID0gdW5kZWZpbmVkLFxuICAgICAgICB0aXRsZT86IHN0cmluZyxcbiAgICAgICAgYXJpYUxhYmVsPzogc3RyaW5nXG4gICAgKSB7XG4gICAgICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICAgICAvLyBzZWUgYnVnOiAzMzQ0OFxuICAgICAgICAvL3ZhciBkaXNhYmxlU3ByaXRlT25DaHJvbWUgPSAoKHRoaXMucGl4ZWxSYXRpbyA+IDEpICYmIGdpZ3lhLmxvY2FsSW5mby5pc0Nocm9tZSk7XG4gICAgICAgIC8vZG9udFVzZVNwcml0ZXMgPSBkb250VXNlU3ByaXRlcyB8fCBkaXNhYmxlU3ByaXRlT25DaHJvbWU7XG4gICAgICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgICAgICB2YXIgb1Nwcml0ZSA9IHRoaXMuZ2V0U3ByaXRlRGF0YShzcHJpdGVJZCwgZG9udFVzZVNwcml0ZXMpO1xuICAgICAgICB2YXIgYXJIVE1MID0gW107XG4gICAgICAgIHZhciB0YWJpbmRleEF0dHIgPSB0YWJpbmRleCAhPT0gdW5kZWZpbmVkID8gYHRhYmluZGV4PVwiJHt0YWJpbmRleH1cImAgOiAnJztcbiAgICAgICAgdmFyIGFyaWEgPSBhcmlhTGFiZWwgfHwgYWx0VGV4dDtcbiAgICAgICAgYXJIVE1MLnB1c2goXG4gICAgICAgICAgICBgPGJ1dHRvbiBhcmlhLWxhYmVsPVwiJHthcmlhfVwiICR7dGl0bGUgPyBgdGl0bGU9XCIke3RpdGxlfVwiYCA6ICcnfSBhbHQ9XCIke2FsdFRleHR9XCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidGFiYmluZy1idXR0b25cIiAke3RhYmluZGV4QXR0cn0gc3R5bGU9XCJoZWlnaHQ6JHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUhcbiAgICAgICAgICAgIH1weDtcIj5gLFxuICAgICAgICApO1xuICAgICAgICBpZiAob1Nwcml0ZSkge1xuICAgICAgICAgICAgaWYgKG9TcHJpdGUuaXNTaW5nbGVJbWFnZSkge1xuICAgICAgICAgICAgICAgIGFySFRNTC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBgPGltZyBzcmM9XCIke29TcHJpdGUuc3JjfVwiIHN0eWxlPVwid2lkdGg6JHt0aGlzLnNwcml0ZVd9cHg7aGVpZ2h0OiR7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUhcbiAgICAgICAgICAgICAgICAgICAgfXB4O3Bvc2l0aW9uOnN0YXRpYzttYXJnaW46MFwiIGFsdD1cIiR7YWx0VGV4dH1cIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPmAsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJIVE1MLnB1c2goYDxkaXYgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3R5bGU9XCJgKTtcbiAgICAgICAgICAgICAgICBhckhUTUwucHVzaCh0aGlzLmdldFN0eWxlU3RyaW5nKHNwcml0ZUlkLCBhdXRvTWFyZ2luKSk7XG4gICAgICAgICAgICAgICAgYXJIVE1MLnB1c2goJ1wiJyk7XG4gICAgICAgICAgICAgICAgaWYgKGVsSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJIVE1MLnB1c2goYCBpZD1cIiR7ZWxJRH1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhckhUTUwucHVzaChgPjwvZGl2PmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFySFRNTC5wdXNoKCc8L2J1dHRvbj4nKTtcbiAgICAgICAgcmV0dXJuIGFySFRNTC5qb2luKCcnKTtcbiAgICB9LFxufTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRTcHJpdGVSZW5kZXJlcnMob0dyb3Vwcykge1xuICAgIC8vZ3JvdXA6IHtwYXRoLHcsaH1cbiAgICB2YXIgYXJQYXRocyA9IFtdO1xuICAgIHZhciB4ID0gMDtcbiAgICB2YXIgcmVuZGVyZXJzID0ge307XG4gICAgZm9yICh2YXIgZ3JvdXBJRCBpbiBvR3JvdXBzKSB7XG4gICAgICAgIHZhciBncm91cCA9IG9Hcm91cHNbZ3JvdXBJRF07XG4gICAgICAgIGlmICghZ3JvdXAucGl4ZWxSYXRpbykgZ3JvdXAucGl4ZWxSYXRpbyA9IDE7XG4gICAgICAgIGFyUGF0aHMucHVzaChncm91cC5wYXRoICsgJ3wnICsgZ3JvdXAudyAqIGdyb3VwLnBpeGVsUmF0aW8gKyAnLCcgKyBncm91cC5oICogZ3JvdXAucGl4ZWxSYXRpbyk7XG4gICAgfVxuICAgIHZhciBzcmMgPSBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvR2V0U3ByaXRlLmFzaHg/cGF0aD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGFyUGF0aHMuam9pbignXicpLnJlcGxhY2UoL1xcW1xcXS8sICcnKSkpO1xuICAgIGZvciAodmFyIGdyb3VwSUQgaW4gb0dyb3Vwcykge1xuICAgICAgICB2YXIgZ3JvdXAgPSBvR3JvdXBzW2dyb3VwSURdO1xuICAgICAgICB2YXIgc3ByaXRlR3JvdXBEYXRhID0ge307XG4gICAgICAgIHNwcml0ZUdyb3VwRGF0YVsnc3ByaXRlRGF0YSddID0ge307XG5cbiAgICAgICAgdmFyIHJlZ2V4cCA9IC9cXFsoLio/KVxcXS9nO1xuICAgICAgICB2YXIgYXJNYXRjaGVzID0gW107XG4gICAgICAgIHZhciBpTWF0Y2ggPSAwO1xuICAgICAgICBzcHJpdGVHcm91cERhdGFbJ3NyY1RlbXBsYXRlJ10gPSBnaWd5YS5fLmdldENkblJlc291cmNlKFxuICAgICAgICAgICAgJy9ncy9pJyArXG4gICAgICAgICAgICAgICAgZ3JvdXAucGF0aC5yZXBsYWNlKHJlZ2V4cCwgZnVuY3Rpb24oXywgcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJNYXRjaGVzLnB1c2gocGxhY2Vob2xkZXIuc3BsaXQoJywnKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAneycgKyBpTWF0Y2grKyArICd9JztcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgICAgdmFyIGFyU3ByaXRlSURzID0gZ2V0Q29tYmluYXRpb24oYXJNYXRjaGVzKTtcbiAgICAgICAgaWYgKGFyU3ByaXRlSURzLmxlbmd0aCA9PSAwKSBhclNwcml0ZUlEcy5wdXNoKFsnJ10pO1xuXG4gICAgICAgIGZvciAodmFyIHUgPSAwOyB1IDwgYXJTcHJpdGVJRHMubGVuZ3RoOyB1KyspIHtcbiAgICAgICAgICAgIHZhciBpZCA9IGFyU3ByaXRlSURzW3VdLmpvaW4oJy0nKTtcbiAgICAgICAgICAgIGlmIChpZCA9PSAnJykge1xuICAgICAgICAgICAgICAgIGlkID0gJ2RlZmF1bHQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3ByaXRlR3JvdXBEYXRhWydzcHJpdGVEYXRhJ11baWRdID0ge1xuICAgICAgICAgICAgICAgIGdyb3VwSWQ6IGdyb3VwSUQsXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICAgICAgdzogZ3JvdXAudyxcbiAgICAgICAgICAgICAgICBoOiBncm91cC5oLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHggKz0gZ3JvdXAudztcbiAgICAgICAgfVxuICAgICAgICByZW5kZXJlcnNbZ3JvdXBJRF0gPSBuZXcgU3ByaXRlUmVuZGVyZXIoXG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBzcHJpdGVHcm91cERhdGFbJ3NyY1RlbXBsYXRlJ10sXG4gICAgICAgICAgICBzcHJpdGVHcm91cERhdGFbJ3Nwcml0ZURhdGEnXSxcbiAgICAgICAgICAgIGdyb3VwLncsXG4gICAgICAgICAgICBncm91cC5oLFxuICAgICAgICAgICAgZ3JvdXAucGl4ZWxSYXRpbyxcbiAgICAgICAgICAgIGFyU3ByaXRlSURzLmxlbmd0aCxcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlbmRlcmVycztcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZVN0cmluZyhvU3R5bGUsIGJsbklzTGluaz86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIHZhciBzID0gJyc7XG4gICAgcyArPSAnbGluZS1oZWlnaHQ6IG5vcm1hbDsnO1xuICAgIGlmIChibG5Jc0xpbmspIHMgKz0gJ2N1cnNvcjpwb2ludGVyOyc7XG4gICAgaWYgKG9TdHlsZS51bmRlcmxpbmUpIHMgKz0gJ3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7JztcbiAgICBpZiAob1N0eWxlLmZvbnQpIHMgKz0gJ2ZvbnQtZmFtaWx5OicgKyBvU3R5bGUuZm9udCArICc7JztcbiAgICBpZiAob1N0eWxlLnNpemUpIHMgKz0gJ2ZvbnQtc2l6ZTonICsgb1N0eWxlLnNpemUgKyAncHg7JztcbiAgICBpZiAob1N0eWxlLmNvbG9yKSBzICs9ICdjb2xvcjonICsgb1N0eWxlLmNvbG9yICsgJzsnO1xuICAgIGlmIChvU3R5bGUuYm9sZCkgcyArPSAnZm9udC13ZWlnaHQ6Ym9sZDsnO1xuICAgIGlmIChvU3R5bGVbJ2ZyYW1lLXRoaWNrbmVzcyddKSBzICs9ICdib3JkZXItc3R5bGU6c29saWQ7IGJvcmRlci13aWR0aDonICsgb1N0eWxlWydmcmFtZS10aGlja25lc3MnXSArICdweDsnO1xuICAgIGlmIChvU3R5bGVbJ2ZyYW1lLWNvbG9yJ10pIHMgKz0gJ2JvcmRlci1jb2xvcjonICsgb1N0eWxlWydmcmFtZS1jb2xvciddICsgJzsnO1xuICAgIGlmIChvU3R5bGVbJ2JhY2tncm91bmQtY29sb3InXSkgcyArPSAnYmFja2dyb3VuZC1jb2xvcjonICsgb1N0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gKyAnOyc7XG4gICAgcmV0dXJuIHM7XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIElUZXh0RGltZW50aW9ucyB7XG4gICAgdzogbnVtYmVyO1xuICAgIGg6IG51bWJlcjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtZWFzdXJlVGV4dCh0ZXh0OiBzdHJpbmcsIG9TdHlsZTogYW55LCBtYXhXOiBudW1iZXIgPSAwKTogSVRleHREaW1lbnRpb25zIHtcbiAgICBpZiAoaXNOYU4obWF4VykgfHwgbWF4VyA8IDApIG1heFcgPSAwO1xuICAgIHZhciBydWxlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWd5YV9ydWxlcicpO1xuICAgIHZhciBydWxlclRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2lneWFfcnVsZXJfdGV4dCcpO1xuICAgIGlmIChydWxlciA9PSBudWxsKSB7XG4gICAgICAgIHJ1bGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJ1bGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICBydWxlci5pZCA9ICdnaWd5YV9ydWxlcic7XG4gICAgICAgIHJ1bGVyVGV4dC5pZCA9ICdnaWd5YV9ydWxlcl90ZXh0JztcbiAgICAgICAgcnVsZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBydWxlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHJ1bGVyLnN0eWxlLm1hcmdpbiA9ICcwcHgnO1xuICAgICAgICBydWxlci5zdHlsZS5wYWRkaW5nID0gJzBweCc7XG4gICAgICAgIHJ1bGVyLmFwcGVuZENoaWxkKHJ1bGVyVGV4dCk7XG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5wcmVwZW5kVG9Cb2R5KHJ1bGVyKTtcbiAgICB9XG4gICAgaWYgKG9TdHlsZSkge1xuICAgICAgICBydWxlci5zdHlsZS5saW5lSGVpZ2h0ID0gb1N0eWxlLnNpemUgKyAncHgnO1xuICAgICAgICBydWxlci5zdHlsZS5mb250RmFtaWx5ID0gb1N0eWxlLmZvbnQ7XG4gICAgICAgIHJ1bGVyLnN0eWxlLmZvbnRTaXplID0gb1N0eWxlLnNpemUgKyAncHgnO1xuICAgICAgICBydWxlci5zdHlsZS5mb250V2VpZ2h0ID0gKCcnICsgb1N0eWxlLmJvbGQpLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnID8gJ2JvbGQnIDogJyc7XG4gICAgfVxuICAgIGlmIChtYXhXKSB7XG4gICAgICAgIHJ1bGVyLnN0eWxlLndoaXRlU3BhY2UgPSAnJztcbiAgICAgICAgcnVsZXIuc3R5bGUud2lkdGggPSAnJyArIG1heFcgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJ1bGVyLnN0eWxlLndoaXRlU3BhY2UgPSAnbm93cmFwJztcbiAgICAgICAgcnVsZXIuc3R5bGUud2lkdGggPSAnYXV0byc7XG4gICAgfVxuICAgIHJ1bGVyLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgcnVsZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIHJ1bGVyVGV4dC5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIHZhciB3ID0gcnVsZXJUZXh0Lm9mZnNldFdpZHRoO1xuICAgIHZhciBoID0gcnVsZXJUZXh0Lm9mZnNldEhlaWdodDtcbiAgICBpZiAodyA9PSAwIHx8IGggPT0gMCkge1xuICAgICAgICB3ID0gcnVsZXIub2Zmc2V0V2lkdGg7XG4gICAgICAgIGggPSBydWxlci5vZmZzZXRIZWlnaHQ7XG4gICAgfVxuICAgIHJ1bGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcmV0dXJuIHsgdzogdywgaDogaCB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxpbmVicmVha3ModCA9IHVuZGVmaW5lZCkge1xuICAgIGlmICghdCB8fCAhdC5yZXBsYWNlKSByZXR1cm4gdDtcbiAgICByZXR1cm4gdC5yZXBsYWNlKC9cXHIvLCAnJykucmVwbGFjZSgvXFxuL2csICdcXHJcXG4nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaXhUZXh0V2lkb3dzKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbGFzdFNwYWNlID0gdGV4dC5sYXN0SW5kZXhPZignICcpO1xuICAgIGlmIChsYXN0U3BhY2UgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdGV4dC5zdWJzdHIoMCwgbGFzdFNwYWNlKSArICcmbmJzcDsnICsgdGV4dC5zdWJzdHIobGFzdFNwYWNlICsgMSk7XG59XG4iLCJpbXBvcnQgeyBJUGx1Z2luVGVtcGxhdGVzIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9pbnRlcmZhY2VzL0lQbHVnaW5UZW1wbGF0ZXMnO1xuaW1wb3J0IHsgSVBsdWdpbkNTUyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luQ1NTJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlbXBsYXRlczxQVCBleHRlbmRzIElQbHVnaW5UZW1wbGF0ZXM+KHBsdWdpbnM6IHN0cmluZ1tdKTogUFQge1xuICAgIHZhciB0ZW1wbGF0ZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgaW4gcGx1Z2lucykge1xuICAgICAgICB0ZW1wbGF0ZXMucHVzaChnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmh0bWxbcGx1Z2luc1tpXV0pO1xuICAgIH1cblxuICAgIHJldHVybiBnaWd5YS51dGlscy5vYmplY3QubWVyZ2UodGVtcGxhdGVzKSBhcyBQVDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDc3M8UEMgZXh0ZW5kcyBJUGx1Z2luQ1NTPihwbHVnaW5zOiBzdHJpbmdbXSk6IFBDIHtcbiAgICB2YXIgY3NzZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgaW4gcGx1Z2lucykge1xuICAgICAgICBjc3Nlcy5wdXNoKGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuY3NzW3BsdWdpbnNbaV1dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2lneWEudXRpbHMub2JqZWN0Lm1lcmdlKGNzc2VzKSBhcyBQQztcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkRW1haWxMb2dpbklEKGVtYWlsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBsZXQgZW1haWxQYXR0ZXJuID1cbiAgICAgICAgXCJeKD89KC57MSw2NH1ALnsxLDI1NX0pKShbISMkJSYnKitcXFxcLVxcXFwvPT9cXFxcXl9ge3x9fmEtekEtWjAtOX1dezEsNjR9KFxcXFwuWyEjJCUmJyorXFxcXC1cXFxcLz0/XFxcXF5fYHt8fX5hLXpBLVowLTldezEsfSl7MCx9KUAoKFxcXFxbKDI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPykoXFxcXC4oMjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KSl7M31cXFxcXSl8KFthLXpBLVowLTktXXsxLDYzfShcXFxcLlthLXpBLVowLTktXXsxLDYzfSl7MSx9KSkkXCI7XG4gICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChlbWFpbFBhdHRlcm4sICdpZycpO1xuICAgIGxldCB2YWxpZCA9IHJlZ2V4LnRlc3QoZW1haWwpO1xuICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGBMb2dpbklEIHZhbGlkYXRpb24gd2l0aCBlbWFpbCA6ICR7ZW1haWx9LCBwYXNzZWQgOiAke3ZhbGlkfWApO1xuICAgIHJldHVybiB2YWxpZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0VtYWlsVmFsaWQoZW1haWw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0VtYWlsTGlzdFZhbGlkKGVtYWlsKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0VtYWlsTGlzdFZhbGlkKGVtYWlsczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgdmFyIF9lbWFpbCA9XG4gICAgICAgIFwiKCg/PShbXi5dLnswLDYzfUAuezEsMjU1fSkpKFshIyQlJicqK1xcXFwtXFxcXC89P1xcXFxeX2B7fH1+YS16QS1aMC05fV17MSw2NH0oXFxcXC5bISMkJSYnKitcXFxcLVxcXFwvPT9cXFxcXl9ge3x9fmEtekEtWjAtOV17MSx9KXswLH0pQCgoXFxcXFsoMjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KShcXFxcLigyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pKXszfVxcXFxdKXwoW2EtekEtWjAtOS1dezEsNjN9KFxcXFwuW2EtekEtWjAtOS1dezEsNjN9KXsxLH0pKSlcIjtcblxuICAgIHZhciBfbmFtZUFuZEVtYWlsID0gJygoXCJbXjxdKzwoJyArIF9lbWFpbCArICcpPlwiKXwoKFwiW15cIl0qXCIgKik/PCgnICsgX2VtYWlsICsgJyk+KXwoJyArIF9lbWFpbCArICcpKSc7XG5cbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKF9uYW1lQW5kRW1haWwpO1xuICAgIHZhciBhckVtYWlscyA9IGVtYWlscy5zcGxpdCgnLCcpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhckVtYWlscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXJlZ2V4LnRlc3QoYXJFbWFpbHNbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzRW1haWwoczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHMuaW5kZXhPZignICcpID49IDApIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBlbWFpbFBhcnRzID0gcy5zcGxpdCgnQCcpO1xuICAgIGlmIChlbWFpbFBhcnRzLmxlbmd0aCAhPSAyKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGVtYWlsUGFydHNbMF0ubGVuZ3RoID09IDApIHJldHVybiBmYWxzZTtcbiAgICBpZiAoZW1haWxQYXJ0c1sxXS5sZW5ndGggPT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBkb21haW5QYXJ0cyA9IGVtYWlsUGFydHNbMV0uc3BsaXQoJy4nKTtcbiAgICBpZiAoZG9tYWluUGFydHMubGVuZ3RoIDwgMikgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZG9tYWluUGFydHMubGVuZ3RoOyBkKyspIHtcbiAgICAgICAgaWYgKGRvbWFpblBhcnRzW2RdLmxlbmd0aCA9PSAwIHx8IGRvbWFpblBhcnRzW2RdLmluZGV4T2YoJyAnKSA+IDApIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNJbkRvbWFpbihkb21haW4gPSB1bmRlZmluZWQsIHRvcERvbWFpbiA9IGdpZ3lhLnRoaXNTY3JpcHQuZ2xvYmFsQ29uZlsndG9wRG9tYWluJ10gfHwgZG9jdW1lbnQuZG9tYWluKSB7XG4gICAgaWYgKCFkb21haW4pIHJldHVybjtcbiAgICB2YXIgcmVnZXhTdHJpbmcgPSAnXicgKyBkb21haW4ucmVwbGFjZSgvXFwuL2csICdcXFxcLicpLnJlcGxhY2UoL1xcKlxcXFwuL2csICcoW2EtekEtWjAtOV0rXFxcXC4pKicpICsgJyQnO1xuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAocmVnZXhTdHJpbmcpO1xuICAgIHJldHVybiByZWdleC50ZXN0KHRvcERvbWFpbik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Q29tYmluYXRpb24oYXIsIGluZGV4OiBudW1iZXIgPSAwKSB7XG4gICAgaWYgKCFpbmRleCkgaW5kZXggPSAwO1xuICAgIGlmICghYXIgfHwgYXIubGVuZ3RoID09IDApIHJldHVybiBbXTtcbiAgICB2YXIgY3VycmVudEFycmF5ID0gYXJbaW5kZXhdO1xuICAgIGlmIChpbmRleCA9PSBhci5sZW5ndGggLSAxKSB7XG4gICAgICAgIHZhciBhckNvbWJpbmF0aW9ucyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJDb21iaW5hdGlvbnMucHVzaChbY3VycmVudEFycmF5W2ldXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyQ29tYmluYXRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBhckNvbWJpbmF0aW9ucyA9IFtdO1xuICAgICAgICB2YXIgYXJDb21iaW5hdGlvbiA9IGdldENvbWJpbmF0aW9uKGFyLCBpbmRleCArIDEpO1xuICAgICAgICBpZiAoY3VycmVudEFycmF5KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHUgPSAwOyB1IDwgYXJDb21iaW5hdGlvbi5sZW5ndGg7IHUrKykge1xuICAgICAgICAgICAgICAgICAgICBhckNvbWJpbmF0aW9ucy5wdXNoKFtjdXJyZW50QXJyYXlbaV1dLmNvbmNhdChhckNvbWJpbmF0aW9uW3VdKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhckNvbWJpbmF0aW9ucztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVByb3ZpZGVycyhlbmFibGVkUHJvdmlkZXJzOiBzdHJpbmcsIGRpc2FibGVkUHJvdmlkZXJzOiBzdHJpbmcsIHJlcXVpcmVkQ2FwYWJpbGl0aWVzOiBzdHJpbmcpIHtcbiAgICAvLyBzZXR0aW5nIHRoZSBwcm92aWRlcnMgYXJyYXkuXG4gICAgLy8gc2V0dGluZyB0aGUgYXJyYXkgb2YgdGhlIHByb3ZpZGVyczpcbiAgICB2YXIgZVByb3ZpZGVycyA9IGdpZ3lhLnV0aWxzLmFycmF5LmdldEFycmF5RnJvbVN0cmluZyhlbmFibGVkUHJvdmlkZXJzLCAnLCcsIHRydWUpO1xuICAgIHZhciBkUHJvdmlkZXJzID0gZ2lneWEudXRpbHMuYXJyYXkuZ2V0QXJyYXlGcm9tU3RyaW5nKGRpc2FibGVkUHJvdmlkZXJzLCAnLCcsIHRydWUpO1xuICAgIHZhciByQ2FwYWJpbGl0aWVzID0gZ2lneWEudXRpbHMuYXJyYXkuZ2V0QXJyYXlGcm9tU3RyaW5nKHJlcXVpcmVkQ2FwYWJpbGl0aWVzLCAnLCcsIHRydWUpO1xuXG4gICAgLy8gcmVtb3ZpbmcgdGhlIGRpc2FibGVkIHByb3ZpZGVycy5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRQcm92aWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZ2lneWEudXRpbHMuYXJyYXkucmVtb3ZlQnlWYWx1ZShlUHJvdmlkZXJzLCBkUHJvdmlkZXJzW2ldKTtcbiAgICB9XG5cbiAgICAvLyBjb252ZXJ0aW5nIHRoZSBwcm92aWRycyBzdHJpbmcgaW50byB0aGUgcHJvdmlkZXJzIE9iamVjdCBmcm9tIHRoZSBhcnJheSBvZiBwcm92aWRlcnMgaW4gdGhlIGludGVybmFsICdfJyBzZGsuXG4gICAgdmFyIHByb3ZpZGVycyA9IGdpZ3lhLl8ucHJvdmlkZXJzLmdldFByb3ZpZGVyc0J5TmFtZShlUHJvdmlkZXJzLmpvaW4oJywnKSk7XG5cbiAgICAvLyByZW1vdmluZyB0aGUgZGlzYWJsZWQgcHJvdmlkZXJzLlxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZFByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBnaWd5YS51dGlscy5hcnJheS5yZW1vdmVCeVByb3BlcnR5KHByb3ZpZGVycywgJ25hbWUnLCBkUHJvdmlkZXJzW2ldKTtcbiAgICB9XG5cbiAgICAvLyBvbmx5IHByb3ZpZGVycyB0aGF0IHN1cHBvcnQgdGhlIGNhcGFiaWxpdGllcyB3aWxsIHJlbWFpbi5cbiAgICByZXR1cm4gZ2lneWEuc29jaWFsaXplLmdldFByb3ZpZGVyc0ZvclJlcXVpcmVkQ2FwYWJpbGl0aWVzKHByb3ZpZGVycywgckNhcGFiaWxpdGllcyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0SVNPRGF0ZShkYXRlOiBzdHJpbmcpOiBEYXRlIHwgbnVsbCB7XG4gICAgbGV0IGRhdGVSZXN1bHQgPSBudWxsO1xuICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNJRTgpIHtcbiAgICAgICAgZGF0ZVJlc3VsdCA9IGdldElFOERhdGUoZGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaXNvUmVnZXggPSAvXihcXGR7NH1cXC1cXGRcXGRcXC1cXGRcXGQoW3RUIF1bXFxkOlxcLl0qKT8pKFt6Wl18KFsrXFwtXSkoXFxkXFxkKTooXFxkXFxkKSk/JC87XG4gICAgICAgIGNvbnN0IGNhcHR1cmVzID0gaXNvUmVnZXguZXhlYyhkYXRlKSB8fCBbXTtcbiAgICAgICAgaWYgKGNhcHR1cmVzWzFdKSB7XG4gICAgICAgICAgICBsZXQgbWlsbGlzZWNvbmRzVGltZSA9IERhdGUucGFyc2UoZGF0ZSk7XG4gICAgICAgICAgICBkYXRlUmVzdWx0ID0gbmV3IERhdGUobWlsbGlzZWNvbmRzVGltZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGVSZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXRJRThEYXRlKGRhdGU6IHN0cmluZyk6IERhdGUgfCBudWxsIHtcbiAgICB2YXIgZGF5LFxuICAgICAgICB0eixcbiAgICAgICAgcnggPSAvXihcXGR7NH1cXC1cXGRcXGRcXC1cXGRcXGQoW3RUIF1bXFxkOlxcLl0qKT8pKFt6Wl18KFsrXFwtXSkoXFxkXFxkKTooXFxkXFxkKSk/JC8sXG4gICAgICAgIHAgPSByeC5leGVjKGRhdGUpIHx8IFtdO1xuICAgIGlmIChwWzFdKSB7XG4gICAgICAgIGRheSA9IHBbMV0uc3BsaXQoL1xcRC8pO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgTCA9IGRheS5sZW5ndGg7IGkgPCBMOyBpKyspIHtcbiAgICAgICAgICAgIGRheVtpXSA9IHBhcnNlSW50KGRheVtpXSwgMTApIHx8IDA7XG4gICAgICAgIH1cbiAgICAgICAgZGF5WzFdIC09IDE7XG4gICAgICAgIGRheSA9IG5ldyBEYXRlKERhdGUuVVRDLmFwcGx5KERhdGUsIGRheSkpO1xuICAgICAgICBpZiAoIWRheS5nZXREYXRlKCkpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAocFs1XSkge1xuICAgICAgICAgICAgdHogPSBwYXJzZUludChwWzVdLCAxMCkgKiA2MDtcbiAgICAgICAgICAgIGlmIChwWzZdKSB0eiArPSBwYXJzZUludChwWzZdLCAxMCk7XG4gICAgICAgICAgICBpZiAocFs0XSA9PSAnKycpIHR6ICo9IC0xO1xuICAgICAgICAgICAgaWYgKHR6KSBkYXkuc2V0VVRDTWludXRlcyhkYXkuZ2V0VVRDTWludXRlcygpICsgdHopO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNsb25lUGFyYW1zRm9yUGx1Z2luKHBhcmFtcykge1xuICAgIHZhciBuZXdQYXJhbXMgPSBnaWd5YS51dGlscy5vYmplY3QuY2xvbmUocGFyYW1zKTtcblxuICAgIGRlbGV0ZSBuZXdQYXJhbXMuaW5zdGFuY2VJRDtcbiAgICBkZWxldGUgbmV3UGFyYW1zLmdldEluc3RhbmNlO1xuXG4gICAgcmV0dXJuIG5ld1BhcmFtcztcbn1cbiIsImV4cG9ydCB0eXBlIFRyYW5zbGF0aW9ucyA9IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG5leHBvcnQgdHlwZSBUcmFuc2xhdGlvbnNDb250YWluZXIgPSB7IFtsYW5nQ29kZTogc3RyaW5nXTogVHJhbnNsYXRpb25zIH07XG5leHBvcnQgdHlwZSBUcmFuc2xhdGlvbldyYXBwZXIgPSB7XG4gICAgbGFuZ0tleTogc3RyaW5nLFxuICAgIHRyYW5zbGF0aW9uczogVHJhbnNsYXRpb25zXG59O1xuXG5jb25zdCBkZWZhdWx0TGFuZyA9ICdlbic7XG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxpemVkVGV4dChwbHVnaW46IHN0cmluZywgdGV4dEtleTogc3RyaW5nLCBsYW5nOiBzdHJpbmcsIHJlcGxhY2VTdHI/OiBzdHJpbmcsIHdpdGhTdHI/OiBzdHJpbmcpIHtcblxuICAgIC8vIHJlZ2lvbiAjIHRlc3QtaGVscGVyXG4gICAgaWYgKGxhbmcgPT0gJ3RlLXN0JylcbiAgICAgICAgcmV0dXJuICdURVNUXycgKyB0ZXh0S2V5LnN1YnN0cmluZygwLCAxMCk7XG4gICAgLy8gZW5kcmVnaW9uICMgdGVzdC1oZWxwZXJcblxuICAgIGlmICghbGFuZylcbiAgICAgICAgbGFuZyA9IGRlZmF1bHRMYW5nO1xuXG4gICAgY29uc3QgdHJhbnNsYXRpb25zID0gZ2lneWEuaTE4bltwbHVnaW5dW2xhbmddO1xuICAgIGlmICghdHJhbnNsYXRpb25zKSB7XG4gICAgICAgIGNvbnN0IGZhbGxiYWNrTGFuZyA9IGdldEZhbGxiYWNrTGFuZyhsYW5nLCBkZWZhdWx0TGFuZyk7XG4gICAgICAgIHJldHVybiBnZXRMb2NhbGl6ZWRUZXh0KHBsdWdpbiwgdGV4dEtleSwgZmFsbGJhY2tMYW5nLCByZXBsYWNlU3RyLCB3aXRoU3RyKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzID0gdHJhbnNsYXRpb25zW3RleHRLZXldO1xuICAgIGNvbnN0IHNjcmVlbnNldFBsdWdpbiA9ICdnaWd5YS5zZXJ2aWNlcy5hY2NvdW50cy5wbHVnaW5zLnNjcmVlblNldC5qcydcbiAgICBjb25zdCBmYWxsYmFja1RyYW5zbGF0aW9uID0gZ2lneWEuaTE4bj8uW3NjcmVlbnNldFBsdWdpbl0/LltsYW5nXT8uW3RleHRLZXldO1xuXG4gICAgaWYoIXJlcyAmJiBmYWxsYmFja1RyYW5zbGF0aW9uKSB7XG4gICAgICAgIHJlcyA9IGZhbGxiYWNrVHJhbnNsYXRpb247XG4gICAgfVxuICAgIGlmIChyZXMgJiYgcmVwbGFjZVN0cilcbiAgICAgICAgcmVzID0gcmVzLnJlcGxhY2UocmVwbGFjZVN0ciwgd2l0aFN0cik7XG5cbiAgICByZXR1cm4gcmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNsYXRpb25zRnJvbUNvbnRhaW5lcihcbiAgICBjb250YWluZXI6IHsgdHJhbnNsYXRpb25zOiBUcmFuc2xhdGlvbnNDb250YWluZXIgfSxcbiAgICBsYW5nOiBzdHJpbmcsXG4gICAgZmFsbGJhY2tFbmFibGVkOiBib29sZWFuID0gdHJ1ZSxcbiAgICBkZWZhdWx0VHJhbnNsYXRpb25zTGFuZzogc3RyaW5nID0gZGVmYXVsdExhbmcpXG4gICAgOiBUcmFuc2xhdGlvbldyYXBwZXJ8dW5kZWZpbmVkIHtcblxuICAgIGlmICghY29udGFpbmVyIHx8ICFjb250YWluZXIudHJhbnNsYXRpb25zKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgbGFuZ0tleXMgPSBsYW5nPy5zcGxpdCgnLCcpLm1hcChrID0+IGsudHJpbSgpKSB8fCBbXTtcblxuICAgIGZvciAoY29uc3QgbGFuZ0tleSBvZiBsYW5nS2V5cykge1xuICAgICAgICBpZiAoY29udGFpbmVyLnRyYW5zbGF0aW9uc1tsYW5nS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsYW5nS2V5LFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uczogY29udGFpbmVyLnRyYW5zbGF0aW9uc1tsYW5nS2V5XVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZhbGxiYWNrTGFuZyA9IGdldEZhbGxiYWNrTGFuZyhsYW5nS2V5LCBsYW5nS2V5KTtcbiAgICAgICAgaWYgKGZhbGxiYWNrTGFuZykge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRpb24gPSBnZXRUcmFuc2xhdGlvbnNGcm9tQ29udGFpbmVyKGNvbnRhaW5lciwgZmFsbGJhY2tMYW5nKVxuICAgICAgICAgICAgaWYgKGZhbGxiYWNrRW5hYmxlZCAmJiB0cmFuc2xhdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZmFsbGJhY2tMYW5nID0gZ2V0RmFsbGJhY2tMYW5nKGxhbmdLZXlzWzBdLCBkZWZhdWx0VHJhbnNsYXRpb25zTGFuZyk7XG4gICAgcmV0dXJuIGZhbGxiYWNrRW5hYmxlZCAmJiBmYWxsYmFja0xhbmdcbiAgICAgICAgPyBnZXRUcmFuc2xhdGlvbnNGcm9tQ29udGFpbmVyKGNvbnRhaW5lciwgZmFsbGJhY2tMYW5nKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZhbGxiYWNrTGFuZyhsYW5nOiBzdHJpbmcsIGRlZmF1bHRMYW5nOiBzdHJpbmcpOiBzdHJpbmd8dW5kZWZpbmVkIHtcblxuICAgIGNvbnN0IGh5cGhlbkluZGV4ID0gbGFuZy5pbmRleE9mKFwiLVwiKTtcbiAgICBpZiAoaHlwaGVuSW5kZXggPiAwKSB7XG4gICAgICAgIHJldHVybiBsYW5nLnN1YnN0cigwLCBoeXBoZW5JbmRleCk7IC8vIHRoZSBzdWJzdHJpbmcgYmVmb3JlIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIHRoZSBoeXBoZW5cbiAgICB9XG5cbiAgICByZXR1cm4gbGFuZyAhPT0gZGVmYXVsdExhbmdcbiAgICAgICAgPyBkZWZhdWx0TGFuZyAvLyBmYWxsYmFjayB0byB0aGUgZGVmYXVsdCBsYW5nXG4gICAgICAgIDogdW5kZWZpbmVkOyAvLyB3ZSBkb250IGhhdmUgYSBmYWxsYmFjayBsYW5nIGlmIHRoZSBsYW5nIGlzIHRoZSBzYW1lIGFzIHRoZSBkZWZhdWx0IGxhbmdcbn1cblxuIiwiXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFByZXByb2Nlc3NvcihQcm9wZXJ0eU5hbWU6IHN0cmluZywgUHJvcGVydHlWYWx1ZTogYW55KTogYW55IHtcbiAgICB2YXIgbGNhc2VQcm9wZXJ0eU5hbWUgPSBQcm9wZXJ0eU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgbGFzdERhc2hJbmRleCA9IGxjYXNlUHJvcGVydHlOYW1lLmluZGV4T2YoJy0nKTtcbiAgICBpZiAobGFzdERhc2hJbmRleCAhPSAtMSkge1xuICAgICAgICBsY2FzZVByb3BlcnR5TmFtZSA9IGxjYXNlUHJvcGVydHlOYW1lLnN1YnN0cmluZyhsYXN0RGFzaEluZGV4ICsgMSwgbGNhc2VQcm9wZXJ0eU5hbWUubGVuZ3RoKTtcbiAgICB9XG4gICAgc3dpdGNoIChsY2FzZVByb3BlcnR5TmFtZSkge1xuICAgICAgICBjYXNlICdib2xkJzpcbiAgICAgICAgY2FzZSAnaXRhbGljJzpcbiAgICAgICAgY2FzZSAndW5kZXJsaW5lJzpcbiAgICAgICAgICAgIHJldHVybiBQcm9wZXJ0eVZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PSAndHJ1ZSc7XG4gICAgICAgIGNhc2UgJ3dpZHRoJzpcbiAgICAgICAgY2FzZSAnaGVpZ2h0JzpcbiAgICAgICAgICAgIHJldHVybiBQcm9wZXJ0eVZhbHVlLnJlcGxhY2UoJyUnLCAnJyk7XG4gICAgICAgIGNhc2UgJ3NpemUnOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KFByb3BlcnR5VmFsdWUpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFByb3BlcnR5VmFsdWU7XG4gICAgfVxufVxuIiwiZGVjbGFyZSBjb25zdCBBY3RpdmVYT2JqZWN0OiBhbnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVYTUxGcm9tU3RyaW5nKHNYTUw6IHN0cmluZykge1xuICAgIHZhciBkb2MgPSBudWxsO1xuXG4gICAgaWYgKHdpbmRvd1snQWN0aXZlWE9iamVjdCddICYmIChnaWd5YS5sb2NhbEluZm8uaXNJRTggfHwgZ2lneWEubG9jYWxJbmZvLmlzSUU5KSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZG9jID0gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxET00nKTtcbiAgICAgICAgICAgIGRvYy5hc3luYyA9ICdmYWxzZSc7XG4gICAgICAgICAgICBkb2MubG9hZFhNTChzWE1MKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZ2lneWEubG9nLmFkZExvZygnRmFpbGVkIHRvIGNyZWF0ZSBNaWNyb3NvZnQuWE1MRE9NIEFjdGl2ZVggcGFyc2VyJywgZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHNYTUwsICd0ZXh0L3htbCcpO1xuICAgIH1cblxuICAgIHJldHVybiBkb2M7XG59XG5leHBvcnQgZnVuY3Rpb24gQ29weVByb3BlcnRpZXMocHJvcEJhZzogT2JqZWN0LCB0YXJnZXRCYWc6IE9iamVjdCwgcGZ4OiBzdHJpbmcsIFByb2NjZXNvcikge1xuICAgIGlmICh0eXBlb2YgcGZ4ID09ICd1bmRlZmluZWQnKSBwZnggPSAnJztcbiAgICBpZiAodHlwZW9mIHRhcmdldEJhZyA9PSAndW5kZWZpbmVkJykgdGFyZ2V0QmFnID0ge307XG4gICAgaWYgKFByb2NjZXNvciAhPSBudWxsKSB7XG4gICAgICAgIGZvciAodmFyIHByb3BOYW1lMSBpbiBwcm9wQmFnKSB7XG4gICAgICAgICAgICB0YXJnZXRCYWdbcGZ4ICsgcHJvcE5hbWUxXSA9IFByb2NjZXNvcihwcm9wTmFtZTEsIHByb3BCYWdbcHJvcE5hbWUxXSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBwcm9wTmFtZTIgaW4gcHJvcEJhZykge1xuICAgICAgICAgICAgdGFyZ2V0QmFnW3BmeCArIHByb3BOYW1lMl0gPSBwcm9wQmFnW3Byb3BOYW1lMl07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldEJhZztcbn1cbmV4cG9ydCBmdW5jdGlvbiBDb2xsZWN0QXR0cmlidXRlc0Zyb21YTUxQYXRoVG9PYmplY3QoXG4gICAgeG1sb2JqUmVzb3VyY2U6IGFueSxcbiAgICBSZXNvdXJjZU5vZGVQYXRoU2VnbWVudHM6IHN0cmluZyxcbiAgICByZXM6IE9iamVjdCxcbiAgICBibG5Db2xsZWN0RnJvbUFuY2VzdG9yczogYm9vbGVhbixcbiAgICBwcm9jZXNzb3IsXG4pOiB2b2lkIHtcbiAgICBmb3IgKHZhciBpUGF0aFNlZ21lbnQgPSAwOyBpUGF0aFNlZ21lbnQgPCBSZXNvdXJjZU5vZGVQYXRoU2VnbWVudHMubGVuZ3RoICYmIHR5cGVvZiB4bWxvYmpSZXNvdXJjZSAhPSAndW5kZWZpbmVkJzsgaVBhdGhTZWdtZW50KyspIHtcbiAgICAgICAgeG1sb2JqUmVzb3VyY2UgPSB4bWxvYmpSZXNvdXJjZS5jaGlsZE5vZGVzW1Jlc291cmNlTm9kZVBhdGhTZWdtZW50c1tpUGF0aFNlZ21lbnRdXTtcbiAgICAgICAgaWYgKHhtbG9ialJlc291cmNlICE9IG51bGwgJiYgYmxuQ29sbGVjdEZyb21BbmNlc3RvcnMpIHtcbiAgICAgICAgICAgIHRoaXMuQ29weVByb3BlcnRpZXMoeG1sb2JqUmVzb3VyY2UuYXR0cmlidXRlcywgcmVzLCAnJywgcHJvY2Vzc29yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgeG1sb2JqUmVzb3VyY2UgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5Db3B5UHJvcGVydGllcyh4bWxvYmpSZXNvdXJjZS5hdHRyaWJ1dGVzLCByZXMsICcnLCBwcm9jZXNzb3IpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU5vZGVzKHNyY05vZGU6IE5vZGUsIHRhcmdldE9iamVjdDogYW55KSB7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXRPYmplY3QuYXR0cmlidXRlcyA9PSAndW5kZWZpbmVkJykgdGFyZ2V0T2JqZWN0LmF0dHJpYnV0ZXMgPSB7fTtcbiAgICBpZiAodHlwZW9mIHRhcmdldE9iamVjdC5jaGlsZE5vZGVzID09ICd1bmRlZmluZWQnKSB0YXJnZXRPYmplY3QuY2hpbGROb2RlcyA9IHt9O1xuXG4gICAgdmFyIHRhcmdldEF0dHJpYnV0ZXMgPSB0YXJnZXRPYmplY3QuYXR0cmlidXRlcztcbiAgICB2YXIgc3JjTm9kZUF0dHJpYnV0ZXMgPSAoc3JjTm9kZSBhcyBhbnkpLmF0dHJpYnV0ZXM7XG4gICAgLyogZm9yICh2YXIgYXR0TmFtZSBpbiBzcmNOb2RlQXR0cmlidXRlcykge1xuXHRcdHRhcmdldEF0dHJpYnV0ZXNbYXR0TmFtZV0gPSBzcmNOb2RlQXR0cmlidXRlc1thdHROYW1lXTtcblx0XHR9Ki9cblxuICAgIGlmIChzcmNOb2RlQXR0cmlidXRlcykge1xuICAgICAgICAvL3RoaXMuQ29weUF0dHJpYnV0ZXNUb09iamVjdChzcmNOb2RlQXR0cmlidXRlcywgdGFyZ2V0QXR0cmlidXRlcywgJycpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNyY05vZGVBdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3JjTm9kZUF0dHJpYnV0ZXNbaV0udmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRhcmdldEF0dHJpYnV0ZXNbc3JjTm9kZUF0dHJpYnV0ZXNbaV0ubm9kZU5hbWVdID0gc3JjTm9kZUF0dHJpYnV0ZXNbaV0udmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldEF0dHJpYnV0ZXNbc3JjTm9kZUF0dHJpYnV0ZXNbaV0ubm9kZU5hbWVdID0gc3JjTm9kZUF0dHJpYnV0ZXNbaV0ubm9kZVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHZhciB0YXJnZXRDaGlsZE5vZGU7XG4gICAgZm9yICh2YXIgdSA9IDA7IHUgPCBzcmNOb2RlLmNoaWxkTm9kZXMubGVuZ3RoOyB1KyspIHtcbiAgICAgICAgLy9hZGQgbWlzc2luZyBjaGlsZCBub2Rlc1xuICAgICAgICB2YXIgc3JjQ2hpbGROb2RlID0gc3JjTm9kZS5jaGlsZE5vZGVzW3VdO1xuICAgICAgICB0YXJnZXRDaGlsZE5vZGUgPSB0YXJnZXRPYmplY3QuY2hpbGROb2Rlc1tzcmNDaGlsZE5vZGUubm9kZU5hbWVdO1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldENoaWxkTm9kZSA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGFyZ2V0Q2hpbGROb2RlID0gdGFyZ2V0T2JqZWN0LmNoaWxkTm9kZXNbc3JjQ2hpbGROb2RlLm5vZGVOYW1lXSA9IHsgYXR0cmlidXRlczoge30sIGNoaWxkTm9kZXM6IHt9IH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZXJnZU5vZGVzKHNyY0NoaWxkTm9kZSwgdGFyZ2V0Q2hpbGROb2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldE9iamVjdDtcbn1cbiIsImltcG9ydCB7IG1lcmdlTm9kZXMsIENvbGxlY3RBdHRyaWJ1dGVzRnJvbVhNTFBhdGhUb09iamVjdCwgQ3JlYXRlWE1MRnJvbVN0cmluZyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMveG1sL3htbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlcihwcm9jY2Vzc29yOiBhbnkpIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb25zID0gW107XG4gICAgdGhpcy5tZXJnZWRDb25maWcgPSB7fTtcbiAgICB0aGlzLmlzTWVyZ2VkID0gdHJ1ZTtcbiAgICB0aGlzLl9wcm9jZXNzb3IgPSBwcm9jY2Vzc29yO1xuICAgIHRoaXMubWVyZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTWVyZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLm1lcmdlZENvbmZpZyA9IHsgYXR0cmlidXRlczoge30sIGNoaWxkTm9kZXM6IHt9IH07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29uZmlndXJhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgeG1sRG9jID0gdGhpcy5jb25maWd1cmF0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICBtZXJnZU5vZGVzKHhtbERvYywgdGhpcy5tZXJnZWRDb25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc01lcmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuUmVzb2x2ZSA9IGZ1bmN0aW9uKGFyLCByKSB7XG4gICAgICAgIGlmICh0aGlzLm1lcmdlKSB0aGlzLm1lcmdlKCk7XG4gICAgICAgIHZhciByZXMgPSB7fTtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXMgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIHUgPSAwOyB1IDwgYXJndW1lbnRzLmxlbmd0aDsgdSsrKSB7XG4gICAgICAgICAgICB2YXIgYXJnID0gYXJndW1lbnRzW3VdO1xuICAgICAgICAgICAgdmFyIGN0b3IgPSBhcmcuY29uc3RydWN0b3I7XG4gICAgICAgICAgICBpZiAoY3RvciA9PSBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJQYXRocyA9IGFyZy5zcGxpdCgnfCcpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBhclBhdGhzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXRoID0gdGhpcy50cmltQ2hhcnNBdFN1ZmZpeCh0aGlzLnRyaW1DaGFyc0F0UHJlZml4KGFyUGF0aHNbaV0sICcgXFxuXFxyXFx0JyksICcgXFxuXFxyXFx0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWN1ciA9IHBhdGguY2hhckF0KDApID09ICcrJztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyUGF0aCA9IHBhdGguc3BsaXQoJy8nKS5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlY3VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBDb2xsZWN0QXR0cmlidXRlc0Zyb21YTUxQYXRoVG9PYmplY3QodGhpcy5tZXJnZWRDb25maWcsIGFyUGF0aCwgcmVzLCByZWN1ciwgdGhpcy5fcHJvY2Vzc29yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN0b3IgPT0gQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGFyZy5sZW5ndGg7IG4rKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlJlc29sdmUoYXJnW25dLCByZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH07XG5cbiAgICB0aGlzLnRyaW1DaGFyc0F0UHJlZml4ID0gZnVuY3Rpb24ocywgY2hhcnMpIHtcbiAgICAgICAgdmFyIGlkeCA9IDA7XG4gICAgICAgIGlmICh0eXBlb2YgcyA9PSAndW5kZWZpbmVkJyB8fCBzLmxlbmd0aCA9PSAwKSByZXR1cm4gJyc7XG4gICAgICAgIHZhciBzbCA9IHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaWR4IDw9IHNsICYmIGNoYXJzLmluZGV4T2Yocy5jaGFyQXQoaWR4KSkgPiAtMSkge1xuICAgICAgICAgICAgaWR4Kys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHMuc3Vic3RyaW5nKGlkeCwgc2wpO1xuICAgIH07XG4gICAgdGhpcy50cmltQ2hhcnNBdFN1ZmZpeCA9IGZ1bmN0aW9uKHMsIGNoYXJzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcyA9PSAndW5kZWZpbmVkJyB8fCBzLmxlbmd0aCA9PSAwKSByZXR1cm4gJyc7XG4gICAgICAgIHZhciBpZHggPSBzLmxlbmd0aCAtIDE7XG4gICAgICAgIHdoaWxlIChpZHggPj0gMCAmJiBjaGFycy5pbmRleE9mKHMuY2hhckF0KGlkeCkpID4gLTEpIHtcbiAgICAgICAgICAgIGlkeC0tO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzLnN1YnN0cmluZygwLCBpZHggKyAxKTtcbiAgICB9O1xuICAgIHRoaXMuYWRkQ29uZmlnID0gZnVuY3Rpb24oc1hNTCkge1xuICAgICAgICBpZiAodHlwZW9mIHNYTUwgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbnMucHVzaChDcmVhdGVYTUxGcm9tU3RyaW5nKHNYTUwpKTtcbiAgICAgICAgICAgIHRoaXMuaXNNZXJnZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5nZXRUZXh0RnJvbUtleSA9IGZ1bmN0aW9uKHRleHRLZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuUmVzb2x2ZSgnL2NvbmZpZy9sYW5nLycgKyB0ZXh0S2V5KVsndGV4dCddO1xuICAgIH07XG59XG4iLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGVnYWN5X21vZGFsLmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGVybl9tb2RhbC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICIsImV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0UHJvY2Nlc3NvcihQcm9wZXJ0eU5hbWUsIFByb3BlcnR5VmFsdWUpIHtcbiAgICB2YXIgbGNhc2VQcm9wZXJ0eU5hbWUgPSBQcm9wZXJ0eU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgbGFzdERhc2hJbmRleCA9IGxjYXNlUHJvcGVydHlOYW1lLmluZGV4T2YoJy0nKTtcbiAgICBpZiAobGFzdERhc2hJbmRleCAhPSAtMSkge1xuICAgICAgICBsY2FzZVByb3BlcnR5TmFtZSA9IGxjYXNlUHJvcGVydHlOYW1lLnN1YnN0cmluZyhsYXN0RGFzaEluZGV4ICsgMSwgbGNhc2VQcm9wZXJ0eU5hbWUubGVuZ3RoKTtcbiAgICB9XG4gICAgc3dpdGNoIChsY2FzZVByb3BlcnR5TmFtZSkge1xuICAgICAgICBjYXNlICdib2xkJzpcbiAgICAgICAgY2FzZSAnaXRhbGljJzpcbiAgICAgICAgY2FzZSAndW5kZXJsaW5lJzpcbiAgICAgICAgICAgIHJldHVybiBQcm9wZXJ0eVZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSA9PSAndHJ1ZSc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnd2lkdGgnOlxuICAgICAgICBjYXNlICdoZWlnaHQnOlxuICAgICAgICAgICAgcmV0dXJuIFByb3BlcnR5VmFsdWUucmVwbGFjZSgnJScsICcnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzaXplJzpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChQcm9wZXJ0eVZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFByb3BlcnR5VmFsdWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSUJhc2VPYmplY3RQYXJhbSwgQmFzZU9iamVjdCB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9CYXNlT2JqZWN0L0Jhc2VPYmplY3QnO1xuaW1wb3J0IHsgRXZlbnRXcmFwcGVyIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0Jhc2VPYmplY3QvRXZlbnRXcmFwcGVyJztcblxuLyogQ1VSUkVOVExZIElOQUNUSVZFISEhIHRvIGFjdGl2YXRlLCBnbyB0byBfcmVmZXJuY2VzLnRzICAqL1xuXG5jb25zdCBCYXNlT2JqZWN0R2xvYmFsID0gZ2lneWEuXy5CYXNlT2JqZWN0IGFzIHR5cGVvZiBCYXNlT2JqZWN0O1xuZXhwb3J0IGNsYXNzIEFzeW5jTWFuYWdlciBleHRlbmRzIEJhc2VPYmplY3RHbG9iYWw8SUJhc2VPYmplY3RQYXJhbT4ge1xuICAgIHByaXZhdGUgX2FjdGlvbnM6IEFycmF5PEZ1bmN0aW9uPiA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHVuZGVmaW5lZCwgZmFsc2UgYXMgYW55KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfZXZlbnROYW1lcyA9IHtcbiAgICAgICAgb25BY3Rpb25SZWdpc3RlcjogJ29uQWN0aW9uUmVnaXN0ZXInLFxuICAgICAgICBvbkFjdGlvblVuUmVnaXN0ZXI6ICdvbkFjdGlvblVuUmVnaXN0ZXInLFxuICAgICAgICBvbk5vQWN0aW9uc1BlbmRpbmc6ICdvbk5vQWN0aW9uc1BlbmRpbmcnLFxuICAgIH07XG5cbiAgICBwdWJsaWMgb25BY3Rpb25SZWdpc3RlckV2ZW50KCk6IEV2ZW50V3JhcHBlcjwoKSA9PiB2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEV2ZW50KEFzeW5jTWFuYWdlci5fZXZlbnROYW1lcy5vbkFjdGlvblJlZ2lzdGVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25BY3Rpb25VblJlZ2lzdGVyRXZlbnQoKTogRXZlbnRXcmFwcGVyPCgpID0+IHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXZlbnQoQXN5bmNNYW5hZ2VyLl9ldmVudE5hbWVzLm9uQWN0aW9uVW5SZWdpc3Rlcik7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTm9BY3Rpb25zUGVuZGluZ0V2ZW50KCk6IEV2ZW50V3JhcHBlcjwoKSA9PiB2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEV2ZW50KEFzeW5jTWFuYWdlci5fZXZlbnROYW1lcy5vbk5vQWN0aW9uc1BlbmRpbmcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVnaXN0ZXIoZnVuYzogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5fYWN0aW9ucy5wdXNoKGZ1bmMpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQXN5bmNNYW5hZ2VyLl9ldmVudE5hbWVzLm9uQWN0aW9uUmVnaXN0ZXIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdW5yZWdpc3RlcihmdW5jOiBGdW5jdGlvbikge1xuICAgICAgICBnaWd5YS51dGlscy5hcnJheS5yZW1vdmVCeVZhbHVlKHRoaXMuX2FjdGlvbnMsIGZ1bmMpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoQXN5bmNNYW5hZ2VyLl9ldmVudE5hbWVzLm9uQWN0aW9uVW5SZWdpc3Rlcik7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHRoaXMuZGlzcGF0Y2hFdmVudChBc3luY01hbmFnZXIuX2V2ZW50TmFtZXMub25Ob0FjdGlvbnNQZW5kaW5nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2FsbChmdW5jOiAocGFyYW1zOiBPYmplY3QpID0+IGFueSwgcGFyYW1zOiBPYmplY3QsIGNhbGxiYWNrRmllbGQgPSAnY2FsbGJhY2snKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIoZnVuYyk7XG5cbiAgICAgICAgdmFyIG9yaWdpbmFsQ2IgPSBwYXJhbXNbY2FsbGJhY2tGaWVsZF0gYXMgRnVuY3Rpb247XG5cbiAgICAgICAgcGFyYW1zW2NhbGxiYWNrRmllbGRdID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxDYiA9PSAnZnVuY3Rpb24nKSBvcmlnaW5hbENiLmNhbGwodGhpcywgYXJncyk7XG5cbiAgICAgICAgICAgIHRoaXMudW5yZWdpc3RlcihmdW5jKTtcbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzQWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aW9ucyAmJiB0aGlzLl9hY3Rpb25zLmxlbmd0aCA+IDA7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSURpc3Bvc2FibGUgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9pbnRlcmZhY2VzL0lEaXNwb3NhYmxlJztcblxuZXhwb3J0IGNsYXNzIExvYWREaW1tZXIgaW1wbGVtZW50cyBJRGlzcG9zYWJsZSB7XG4gICAgcHJpdmF0ZSBfaXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9kaW1tZXI6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgX2xvYWRlcjogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2RpbW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLl9kaW1tZXIuY2xhc3NOYW1lID0gJ2dpZ3lhLXNjcmVlbi1kaW1tZXInO1xuXG4gICAgICAgIHRoaXMuX2xvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLl9sb2FkZXIuY2xhc3NOYW1lID0gJ2dpZ3lhLXNjcmVlbi1sb2FkZXInO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93KCkge1xuICAgICAgICBpZiAoIXRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICAgICAgICBnaWd5YS5sb2dnZXIuZGVidWcoYHNob3dpbmcgbG9hZGluZyBpbmRpY2F0aW9uYCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0RWxlbWVudE92ZXJDb250YWluZXIodGhpcy5fZGltbWVyKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RWxlbWVudE92ZXJDb250YWluZXIodGhpcy5fbG9hZGVyKTtcblxuICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyLmluc2VydEJlZm9yZSh0aGlzLl9kaW1tZXIsIHRoaXMuX2NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lci5pbnNlcnRCZWZvcmUodGhpcy5fbG9hZGVyLCB0aGlzLl9jb250YWluZXIuZmlyc3RDaGlsZCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RWxlbWVudE92ZXJDb250YWluZXIoZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHZhciBwb3MgPSAoZ2lneWEuZ2xvYmFsIGFzIGFueSkuZ2V0UG9zKHRoaXMuX2NvbnRhaW5lcik7IC8vIFRPRE86IHJlbW92ZSBjYXN0XG5cbiAgICAgICAgZWwuc3R5bGUud2lkdGggPSB0aGlzLl9jb250YWluZXIub2Zmc2V0V2lkdGggKyAncHgnO1xuICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSB0aGlzLl9jb250YWluZXIub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgZWwuc3R5bGUuekluZGV4ID0gJycgKyBnaWd5YS51dGlscy5ET00uZ2V0TmV4dFpJbmRleCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0FjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlKCkge1xuICAgICAgICBpZiAodGhpcy5faXNBY3RpdmUpIHtcbiAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci5kZWJ1ZyhgaGlkaW5nIGxvYWRpbmcgaW5kaWNhdGlvbmApO1xuXG4gICAgICAgICAgICB0aGlzLnVubGlua0VsZW1lbnQodGhpcy5fbG9hZGVyKTtcbiAgICAgICAgICAgIHRoaXMudW5saW5rRWxlbWVudCh0aGlzLl9kaW1tZXIpO1xuICAgICAgICAgICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdW5saW5rRWxlbWVudChlbDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsICYmIGVsLnBhcmVudE5vZGUpIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2NvbnRhaW5lcjtcbiAgICB9XG59XG4iLCJpbXBvcnQge0lNb2RhbERpYWxvZ1BhcmFtc30gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9pbnRlcmZhY2VzL0lNb2RhbERpYWxvZ1BhcmFtcyc7XG5pbXBvcnQge1xuICAgIElEaWFsb2dDbGFzc2VzLFxuICAgIGxlZ2FjeURpYWxvZ0NsYXNzZXMsXG4gICAgZGlhbG9nQ2xhc3Nlc1xufSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2hlbHBlcnMvTW9kYWxEaWFsb2dDbGFzc2VzJztcbmltcG9ydCB7TG9hZERpbW1lcn0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9oZWxwZXJzL0xvYWREaW1tZXInO1xuaW1wb3J0IHtJQmFzZU9iamVjdENvbmZpZ30gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0Jhc2VPYmplY3QvSUJhc2VPYmplY3RDb25maWcnO1xuaW1wb3J0IHtJRWxlbWVudFNpemV9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9JbnRlcmZhY2VzJztcbmltcG9ydCB7Z2V0U3R5bGV9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvbGF5b3V0U3ByaXRlcyc7XG5pbXBvcnQge0Nsb3NlUmVhc29uc30gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9DbG9zZVJlYXNvbnMnO1xuaW1wb3J0IHthZGRDc3N9IGZyb20gJy4uL1V0aWxzL1VJL2xheW91dENzc0ZpeGVyVXRpbHMnO1xuXG5jb25zdCBNT0RBTF9DT05URU5UX0NPTlRBSU5FUl9JRCA9ICdnaWd5YS1tb2RhbC1wbHVnaW4tY29udGFpbmVyJztcblxuY29uc3QgQmFzZU9iamVjdEdsb2JhbCA9IGdpZ3lhLl8uQmFzZU9iamVjdCBhcyB0eXBlb2YgZ2lneWEuXy5CYXNlT2JqZWN0O1xuXG5leHBvcnQgY2xhc3MgTW9kYWxEaWFsb2cgZXh0ZW5kcyBCYXNlT2JqZWN0R2xvYmFsPElNb2RhbERpYWxvZ1BhcmFtcz4ge1xuICAgIHByaXZhdGUgX2RpYWxvZ0NsYXNzZXM6IElEaWFsb2dDbGFzc2VzO1xuXG4gICAgcHJpdmF0ZSBfYWxsQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIF9tYWluQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIF9jYXB0aW9uQ29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIF9jb250ZW50Q29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIF9jbG9zZUJ1dHRvbkVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBfbG9hZGVyOiBMb2FkRGltbWVyO1xuXG4gICAgcHJpdmF0ZSBvbldpbmRvd1Jlc2l6ZUV2ZW50ID0gdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgLy8gRXZlbnRzXG5cbiAgICBwdWJsaWMgb25BZnRlckNlbnRlckV2ZW50KCk6IGdpZ3lhLl8uRXZlbnRXcmFwcGVyPCgpID0+IHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RXZlbnQoJ29uQWZ0ZXJNb2RhbENlbnRlcicpO1xuICAgIH1cblxuICAgIC8vIE1ldGhvZHNcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RyaWdnZXJNZXRob2Q6IHN0cmluZywgcHVibGljIGlzTW9iaWxlVUksIHBhcmFtczogSU1vZGFsRGlhbG9nUGFyYW1zLCBwdWJsaWMgaXNMZWdhY3k6IGJvb2xlYW4gPSBmYWxzZSwgaGlkZT86IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIocGFyYW1zKTtcblxuICAgICAgICB0aGlzLl9kaWFsb2dDbGFzc2VzID0gdGhpcy5pc0xlZ2FjeSA/IGxlZ2FjeURpYWxvZ0NsYXNzZXMgOiBkaWFsb2dDbGFzc2VzO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlKGhpZGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb25maWcoKTogSUJhc2VPYmplY3RDb25maWc8SU1vZGFsRGlhbG9nUGFyYW1zPiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZWZhdWx0UGFyYW1zOiB7fSxcbiAgICAgICAgICAgIHJlcXVpcmVkUGFyYW1zOiBbJ21vZGFsVGVtcGxhdGUnXSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0FsbCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9hbGxDb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jZW50ZXIoKTtcblxuICAgICAgICBpZiAodGhpcy5pc01vYmlsZVVJKSBnaWd5YS51dGlscy5ET00uYWRkQ2xhc3NUb0VsZW1lbnQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB0aGlzLl9kaWFsb2dDbGFzc2VzLmRvY3VtZW50X21vYmlsZSk7XG5cbiAgICAgICAgdGhpcy5fYWxsQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cbiAgICAgICAgLy8gV0NBRzogRm9jdXMgZGlhbG9nIGJ1dCBub3QgYW55IHNwZWNpZmljIGVsZW1lbnQgd2l0aGluIHRoZSBkaWFsb2cuXG4gICAgICAgIC8vICAgICAgIElmIGEgc3BlY2lmaWMgZWxlbWVudCBpcyBmb2N1c2VkLCB0aGUgc2NyZWVuLXJlYWRlciB3aWxsIG5vdCByZWFkIGFueSB0ZXh0IHByaW9yIHRvIGl0LlxuICAgICAgICAvLyAgICAgICBJZiB0aGUgZmlyc3QgZm9ybSBlbGVtZW50IGlzIGZvY3VzZWQgYW5kIGl0J3MgYSB0ZXh0IGlucHV0IHdpdGggYSBwbGFjZWhvbGRlciwgb2xkIElFIHZlcnNpb25zIHdpbGwgaGlkZSB0aGUgcGxhY2Vob2xkZXIgdGV4dC5cbiAgICAgICAgdGhpcy5fYWxsQ29udGFpbmVyLmZvY3VzKCk7XG5cbiAgICAgICAgZ2lneWEudXRpbHMudGFiYmFibGUuYmluZFRhYkxvb3BpbmcodGhpcy5nZXRNb2RhbERpYWxvZ0NvbnRhaW5lcigpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZUFsbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FsbENvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy5fYWxsQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlV2luZG93UmVzaXplTGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUNsYXNzRnJvbUVsZW1lbnQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB0aGlzLl9kaWFsb2dDbGFzc2VzLmRvY3VtZW50X21vYmlsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLnRhYmJhYmxlLnVuYmluZFRhYkxvb3BpbmcodGhpcy5fY29udGVudENvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd01haW5EaWFsb2coKSB7XG4gICAgICAgIGlmICh0aGlzLl9tYWluQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9tYWluQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaGlkZU1haW5EaWFsb2coKSB7XG4gICAgICAgIGlmICh0aGlzLl9tYWluQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9tYWluQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJpbGUnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dMb2FkaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5fbG9hZGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGVMb2FkaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5fbG9hZGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZVRvTW9iaWxlKCkge1xuICAgICAgICB0aGlzLl9hbGxDb250YWluZXIuY2xhc3NOYW1lID0gdGhpcy5fZGlhbG9nQ2xhc3Nlcy5hbGxfbW9iaWxlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VUb1dlYigpIHtcbiAgICAgICAgdGhpcy5fYWxsQ29udGFpbmVyLmNsYXNzTmFtZSA9IHRoaXMuX2RpYWxvZ0NsYXNzZXMuYWxsX3dlYjtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNMb2FkaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyICYmIHRoaXMuX2xvYWRlci5pc0FjdGl2ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNpemUoc2l6ZTogSUVsZW1lbnRTaXplKSB7XG4gICAgICAgIGlmIChzaXplKSB7XG4gICAgICAgICAgICBnaWd5YS5sb2dnZXIuZGVidWcoYHJlc2l6aW5nIGFuZCBjZW50ZXJpbmcgbW9kYWwgZGlhbG9nYCk7XG4gICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGUoJ2hlaWdodCcsIHNpemUuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuYXBwbHlTdHlsZSgnbWluSGVpZ2h0Jywgc2l6ZS5taW5IZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKCd3aWR0aCcsIHNpemUud2lkdGgpO1xuICAgICAgICAgICAgdGhpcy5hcHBseVN0eWxlKCdtaW5XaWR0aCcsIHNpemUubWluV2lkdGgpO1xuXG4gICAgICAgICAgICB0aGlzLmNlbnRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBseVN0eWxlKHByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB0aGlzLl9tYWluQ29udGFpbmVyLnN0eWxlW3Byb3BlcnR5XSA9ICcnO1xuICAgICAgICBlbHNlIGlmICh2YWx1ZSkgdGhpcy5fbWFpbkNvbnRhaW5lci5zdHlsZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFdpbmRvd1Jlc2l6ZUxpc3RlbmVyKCkge1xuICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplRXZlbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlV2luZG93UmVzaXplTGlzdGVuZXIoKSB7XG4gICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemVFdmVudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbldpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGVVSSkgdGhpcy5hZGp1c3RXaW5kb3dIZWlnaHQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkanVzdFdpbmRvd0hlaWdodCgpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuX2FsbENvbnRhaW5lcikuaGVpZ2h0O1xuICAgIH1cblxuICAgIHB1YmxpYyBjZW50ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTW9iaWxlVUkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRqdXN0V2luZG93SGVpZ2h0KCk7XG4gICAgICAgICAgICB0aGlzLmFkZFdpbmRvd1Jlc2l6ZUxpc3RlbmVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgcmVzdG9yZUxvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2FkaW5nKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgcmVzdG9yZUxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZ2V0U3R5bGUodGhpcy5fYWxsQ29udGFpbmVyLCAncG9zaXRpb24nKSA9PSAnYWJzb2x1dGUnKSB7XG4gICAgICAgICAgICAgICAgLy8gbGVnYWN5J3MgY2VudGVyLlxuICAgICAgICAgICAgICAgIHZhciBtaWRkbGVDZW50ZXIgPSBnaWd5YS51dGlscy52aWV3cG9ydC5nZXRNaWRkbGVDZW50ZXIoKTtcbiAgICAgICAgICAgICAgICB2YXIgZGlhbG9nV2lkdGggPSB0aGlzLl9hbGxDb250YWluZXIub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgdmFyIGRpYWxvZ0hlaWdodCA9IHRoaXMuX2FsbENvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICB2YXIgZGlhbG9nVG9wID0gbWlkZGxlQ2VudGVyLnRvcCAtIE1hdGguZmxvb3IoZGlhbG9nSGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgICAgdmFyIGRpYWxvZ0xlZnQgPSBtaWRkbGVDZW50ZXIubGVmdCAtIE1hdGgucm91bmQoZGlhbG9nV2lkdGggLyAyKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlhbG9nVG9wIDwgMTApIGRpYWxvZ1RvcCA9IDEwO1xuICAgICAgICAgICAgICAgIGlmIChkaWFsb2dMZWZ0IDwgMTApIGRpYWxvZ0xlZnQgPSAxMDtcbiAgICAgICAgICAgICAgICB0aGlzLl9hbGxDb250YWluZXIuc3R5bGUudG9wID0gZGlhbG9nVG9wICsgJ3B4JztcbiAgICAgICAgICAgICAgICB0aGlzLl9hbGxDb250YWluZXIuc3R5bGUubGVmdCA9IGRpYWxvZ0xlZnQgKyAncHgnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgdnAgPSBnaWd5YS51dGlscy52aWV3cG9ydC5nZXRJbm5lclNpemUoKTtcbiAgICAgICAgICAgICAgICB2YXIgdG9wID0gTWF0aC5tYXgoMCwgKHZwLmggLSB0aGlzLl9hbGxDb250YWluZXIuY2xpZW50SGVpZ2h0KSAvIDIpO1xuICAgICAgICAgICAgICAgIHZhciBsZWZ0ID0gTWF0aC5tYXgoMCwgKHZwLncgLSB0aGlzLl9hbGxDb250YWluZXIuY2xpZW50V2lkdGgpIC8gMik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9hbGxDb250YWluZXIuc3R5bGUudG9wID0gdG9wLnRvU3RyaW5nKCkgKyAncHgnO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FsbENvbnRhaW5lci5zdHlsZS5sZWZ0ID0gbGVmdC50b1N0cmluZygpICsgJ3B4JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3RvcmVMb2FkaW5nKSB0aGlzLnNob3dMb2FkaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ29uQWZ0ZXJNb2RhbENlbnRlcicpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlKGhpZGU6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIC8vIENyZWF0aW5nIHRoZSBuZXcgY29udGFpbmVyXG4gICAgICAgIHZhciBtb2RhbElEID0gZ2lneWEudXRpbHMuRE9NLmdldENlbnRlcmVkRGl2SUQodGhpcy5fdHJpZ2dlck1ldGhvZCk7XG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5uZXdNb2RhbCkgbW9kYWxJRCArPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICB0aGlzLl9hbGxDb250YWluZXIgPSBnaWd5YS51dGlscy5ET00uY3JlYXRlVG9wTGV2ZWxEaXYobW9kYWxJRCk7XG5cbiAgICAgICAgaWYgKGhpZGUpIHRoaXMuaGlkZUFsbCgpO1xuXG4gICAgICAgIHRoaXMuX2FsbENvbnRhaW5lci5pbm5lckhUTUwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0aGlzLnBhcmFtcy5tb2RhbFRlbXBsYXRlLCB7XG4gICAgICAgICAgICBtb2RhbElEOiBtb2RhbElELFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMucGFyYW1zLmNhcHRpb25UZXh0LFxuICAgICAgICAgICAgY2xvc2VJbWFnZTogdGhpcy5wYXJhbXMuY2xvc2VJbWFnZSxcbiAgICAgICAgICAgIG92ZXJsYXlEaXNwbGF5OiAhdGhpcy5pc01vYmlsZVVJICYmIHRoaXMucGFyYW1zLmRpbURpYWxvZ0JhY2tncm91bmQgPyAnYmxvY2snIDogJ25vbmUnLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBXQ0FHIGNvbXBsaWFuY2UuXG4gICAgICAgIHRoaXMuX2FsbENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XG4gICAgICAgIHRoaXMuX2FsbENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIGBnaWd5YS1zY3JlZW4tZGlhbG9nLWNhcHRpb24tJHttb2RhbElEfWApO1xuICAgICAgICB0aGlzLl9hbGxDb250YWluZXIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuXG4gICAgICAgIGFkZENzcyh0aGlzLnBhcmFtcy5tb2RhbENzcywgdW5kZWZpbmVkLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5fbWFpbkNvbnRhaW5lciA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3ModGhpcy5fYWxsQ29udGFpbmVyLCB0aGlzLl9kaWFsb2dDbGFzc2VzLm1haW4pWzBdO1xuICAgICAgICB0aGlzLl9jYXB0aW9uQ29udGFpbmVyID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLl9tYWluQ29udGFpbmVyLCB0aGlzLl9kaWFsb2dDbGFzc2VzLmNhcHRpb24pWzBdO1xuICAgICAgICB0aGlzLl9jYXB0aW9uQ29udGFpbmVyPy5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG5cbiAgICAgICAgLy8gQWRkaW5nIG1vZGFsIGV2ZW50c1xuICAgICAgICB0aGlzLl9jbG9zZUJ1dHRvbkVsZW1lbnQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuX21haW5Db250YWluZXIsIHRoaXMuX2RpYWxvZ0NsYXNzZXMuY2xvc2VCdXR0b24pWzBdO1xuXG4gICAgICAgIGlmICh0aGlzLl9jbG9zZUJ1dHRvbkVsZW1lbnQpIHtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKHRoaXMuX2Nsb3NlQnV0dG9uRWxlbWVudCwgJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5kaXNhYmxlRGVmYXVsdEV2ZW50SGFuZGxpbmcoZXZlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZUFsbCgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtcy5vbk1vZGFsQ2xvc2UpIHRoaXMucGFyYW1zLm9uTW9kYWxDbG9zZShDbG9zZVJlYXNvbnMuY2FuY2VsZWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGluZyB0aGUgcGx1Z2luIGNvbnRhaW5lciBhbmQgYWRkaW5nIGl0IHRvIHRoZSBtb2RhbFxuICAgICAgICB0aGlzLl9jb250ZW50Q29udGFpbmVyID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLl9tYWluQ29udGFpbmVyLCB0aGlzLl9kaWFsb2dDbGFzc2VzLmNvbnRlbnQsIHRydWUpWzBdO1xuICAgICAgICB0aGlzLl9jb250ZW50Q29udGFpbmVyLmlkID0gTU9EQUxfQ09OVEVOVF9DT05UQUlORVJfSUQgKyAnLScgKyB0aGlzLl90cmlnZ2VyTWV0aG9kO1xuICAgICAgICB0aGlzLl9sb2FkZXIgPSBuZXcgTG9hZERpbW1lcih0aGlzLl9jb250ZW50Q29udGFpbmVyKTtcblxuICAgICAgICAvLyBBZGQgdGhlIG1vZGFsIHRlbXBsYXRlXG4gICAgICAgIGlmICh0aGlzLmlzTW9iaWxlVUkpIHtcbiAgICAgICAgICAgIC8vZ2lneWEudXRpbHMuRE9NLmFkZERpYWxvZ0JhY2tMaXN0ZW5lcigoKSA9PiB7IHRoaXMuY2xvc2UoQ2xvc2VSZWFzb25zLmJhY2tCdXR0b24pOyB9KTsgLy8gY2FuY2VsZWQgYnkgY2xpY2tpbmcgb24gdGhlIGRpYWxvZyBjbG9zZSBidXR0b24gYXQgdGhlIHRvcFxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KHRoaXMuX2FsbENvbnRhaW5lciwgdGhpcy5fZGlhbG9nQ2xhc3Nlcy5hbGxfbW9iaWxlKTtcblxuICAgICAgICAgICAgLy8vIHJlbW92ZSB0aGlzIGFzYXAuXG4gICAgICAgICAgICAvL3ZhciBib2R5U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KTsgLy8vIHdlIGRvbid0IHN1cHBvcnQgbW9iaWxlIGluIGllOC5cbiAgICAgICAgICAgIC8vdmFyIG91dGVySGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQgKyBwYXJzZUludChib2R5U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIm1hcmdpbi10b3BcIikpICsgcGFyc2VJbnQoYm9keVN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJtYXJnaW4tYm90dG9tXCIpKTtcbiAgICAgICAgICAgIC8vdGhpcy5fYWxsQ29udGFpbmVyLnN0eWxlLm1pbkhlaWdodCA9IG91dGVySGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudCh0aGlzLl9hbGxDb250YWluZXIsIHRoaXMuX2RpYWxvZ0NsYXNzZXMuYWxsX3dlYik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNlbnRlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRNYWluQ29udGFpbmVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21haW5Db250YWluZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvbnRlbnRDb250YWluZXIoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29udGVudENvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2FwdGlvbkNvbnRhaW5lcigpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXB0aW9uQ29udGFpbmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRNb2RhbERpYWxvZ0NvbnRhaW5lcigpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbGxDb250YWluZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldExvYWRpbmdJbmRpY2F0b3IoKTogTG9hZERpbW1lciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XG4gICAgICAgIHRoaXMuaGlkZUFsbCgpO1xuXG4gICAgICAgIGlmICh0aGlzLl9hbGxDb250YWluZXIgJiYgdGhpcy5fYWxsQ29udGFpbmVyLnBhcmVudEVsZW1lbnQpIHRoaXMuX2FsbENvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuX2FsbENvbnRhaW5lcik7XG5cbiAgICAgICAgaWYgKHRoaXMuX2xvYWRlcikge1xuICAgICAgICAgICAgdGhpcy5fbG9hZGVyLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSB0aGlzLnBhcmFtcztcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgSURpYWxvZ0NsYXNzZXMge1xuICAgIGRvY3VtZW50X21vYmlsZTogc3RyaW5nO1xuICAgIGFsbF93ZWI6IHN0cmluZztcbiAgICBhbGxfbW9iaWxlOiBzdHJpbmc7XG4gICAgbWFpbjogc3RyaW5nO1xuICAgIGNhcHRpb246IHN0cmluZztcbiAgICBjbG9zZUJ1dHRvbjogc3RyaW5nO1xuICAgIGNvbnRlbnQ6IHN0cmluZztcbn1cbmV4cG9ydCB2YXIgZGlhbG9nQ2xhc3NlczogSURpYWxvZ0NsYXNzZXMgPSB7XG4gICAgZG9jdW1lbnRfbW9iaWxlOiAnZ2lneWEtbW9iaWxlLW1vZGFsLW1vZGUnLFxuICAgIGFsbF93ZWI6ICdnaWd5YS1zY3JlZW4tZGlhbG9nJyxcbiAgICBhbGxfbW9iaWxlOiAnZ2lneWEtc2NyZWVuLWRpYWxvZy1tb2JpbGUnIC8qIGNhbid0IGNvbWJpbmUgdGhlc2UgdHdvIHRvIG9uZSttb2JpbGUgZGVjb3JhdG9yLCBiZWNhdXNlIG9mIGJhY2t3YXJkcyBjb21wYXRhYmlsaXR5ICovLFxuICAgIG1haW46ICdnaWd5YS1zY3JlZW4tZGlhbG9nLW1haW4nLFxuICAgIGNhcHRpb246ICdnaWd5YS1zY3JlZW4tZGlhbG9nLWNhcHRpb24nLFxuICAgIGNsb3NlQnV0dG9uOiAnZ2lneWEtc2NyZWVuLWRpYWxvZy1jbG9zZScsXG4gICAgY29udGVudDogJ2dpZ3lhLXNjcmVlbi1kaWFsb2ctaW5uZXInLFxufTtcbmV4cG9ydCB2YXIgbGVnYWN5RGlhbG9nQ2xhc3NlczogSURpYWxvZ0NsYXNzZXMgPSBnaWd5YS51dGlscy5vYmplY3QuY2xvbmUoZGlhbG9nQ2xhc3Nlcyk7XG5sZWdhY3lEaWFsb2dDbGFzc2VzLm1haW4gPSBsZWdhY3lEaWFsb2dDbGFzc2VzLmNvbnRlbnQ7XG4iLCJpbXBvcnQgeyBJRGlzcG9zYWJsZSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2ludGVyZmFjZXMvSURpc3Bvc2FibGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQb2xsZXIgZXh0ZW5kcyBJRGlzcG9zYWJsZSB7XG4gICAgYWRkQWN0aW9ucyguLi5hY3Rpb25zOiAoSVBvbGxlckFjdGlvbiB8IEZ1bmN0aW9uKVtdKTtcbiAgICBoYXNBY3Rpb25zKCk6IGJvb2xlYW47XG4gICAgc3RhcnQoaW50ZXJ2YWw6IG51bWJlciwgZm9yY2U/OiBib29sZWFuKTtcbiAgICBzdG9wKCk7XG4gICAgaXNTdGFydGVkKCk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvbGxlckFjdGlvbiBleHRlbmRzIElEaXNwb3NhYmxlIHtcbiAgICBhY3Q6ICgpID0+IHZvaWQ7XG59XG5leHBvcnQgY29uc3QgZW51bSBQb2xsZXJTdGFydFJlc3VsdCB7XG4gICAgT0ssXG4gICAgQWxyZWFkeVN0YXJ0ZWQsXG59XG5leHBvcnQgY2xhc3MgUG9sbGVyIGltcGxlbWVudHMgSVBvbGxlciB7XG4gICAgcHJpdmF0ZSBfaW50ZXJ2YWxJRDogbnVtYmVyID0gdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX2FjdGlvbnM6IChJUG9sbGVyQWN0aW9uIHwgRnVuY3Rpb24pW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvZ2dlciA9IHR5cGVvZiBjb25zb2xlID09ICdvYmplY3QnICYmIGNvbnNvbGUubG9nID8gY29uc29sZS5sb2cgOiAoKSA9PiB7fSkge31cblxuICAgIHB1YmxpYyBhZGRBY3Rpb25zKC4uLmFjdGlvbnM6IChJUG9sbGVyQWN0aW9uIHwgRnVuY3Rpb24pW10pIHtcbiAgICAgICAgZ2lneWEudXRpbHMuYXJyYXkuZm9yRWFjaChhY3Rpb25zLCBhY3Rpb24gPT4ge1xuICAgICAgICAgICAgdGhpcy5fYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYXNBY3Rpb25zKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aW9ucy5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydChpbnRlcnZhbDogbnVtYmVyLCBmb3JjZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RhcnRlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gUG9sbGVyU3RhcnRSZXN1bHQuQWxyZWFkeVN0YXJ0ZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaGFzQWN0aW9ucyAmJiAhZm9yY2UpIHtcbiAgICAgICAgICAgIHRocm93ICdQb2xsZXIgaGFzIG5vIGFjdGlvbnMgdG8gcGVyZm9ybSBvbiBpbnRlcnZhbCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9pbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLmFycmF5LmZvckVhY2godGhpcy5fYWN0aW9ucywgYWN0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSAoYWN0aW9uIGFzIEZ1bmN0aW9uKSgpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIChhY3Rpb24gYXMgSVBvbGxlckFjdGlvbikuYWN0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBpbnRlcnZhbCkgYXMgYW55O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0b3AoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbnRlcnZhbElEKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsSUQpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2ludGVydmFsSUQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaXNTdGFydGVkKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLl9pbnRlcnZhbElEKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLl9hY3Rpb25zKSB7XG4gICAgICAgICAgICBpZiAoISh0aGlzLl9hY3Rpb25zW2ldIGluc3RhbmNlb2YgRnVuY3Rpb24pICYmIHRoaXMuX2FjdGlvbnMuaGFzT3duUHJvcGVydHkoaSkpICh0aGlzLl9hY3Rpb25zW2ldIGFzIElQb2xsZXJBY3Rpb24pLmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgdGhpcy5fYWN0aW9ucztcbiAgICAgICAgZGVsZXRlIHRoaXMuX2xvZ2dlcjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJUG9sbGVyQWN0aW9uIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9oZWxwZXJzL1BvbGxlcic7XG5pbXBvcnQgeyBJRWxlbWVudEFjdHVhbFNpemUsIElWaWV3cG9ydFNpemUgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvSW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBJbnZhbGlkUHJvcGVydHlBY3Rpb24gaW1wbGVtZW50cyBJUG9sbGVyQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vYmplY3Q6IGFueSwgcHJpdmF0ZSBfcHJvcGVyeTogc3RyaW5nLCBwdWJsaWMgY2FsbGJhY2s6ICgpID0+IHZvaWQpIHt9XG5cbiAgICBwdWJsaWMgYWN0KCkge1xuICAgICAgICBpZiAoIXRoaXMuX29iamVjdFt0aGlzLl9wcm9wZXJ5XSkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9vYmplY3Q7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNhbGxiYWNrO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTaXplQ2hhbmdlQWN0aW9uIGltcGxlbWVudHMgSVBvbGxlckFjdGlvbiB7XG4gICAgcHJpdmF0ZSBfbGFzdDogSUVsZW1lbnRBY3R1YWxTaXplID0geyB3aWR0aDogdW5kZWZpbmVkLCBoZWlnaHQ6IHVuZGVmaW5lZCB9O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGNhbGxiYWNrOiAob2xkOiBJRWxlbWVudEFjdHVhbFNpemUsIGN1cnI6IElFbGVtZW50QWN0dWFsU2l6ZSkgPT4gdm9pZCkge31cblxuICAgIHB1YmxpYyBhY3QoKSB7XG4gICAgICAgIHZhciBjdXJyOiBJRWxlbWVudEFjdHVhbFNpemUgPSB0aGlzLmdldEN1cnJTaXplKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNDaGFuZ2VkKHRoaXMuX2xhc3QsIGN1cnIpKSB0aGlzLmNhbGxiYWNrKHRoaXMuX2xhc3QsIGN1cnIpO1xuXG4gICAgICAgIHRoaXMuX2xhc3QgPSBjdXJyO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xuICAgICAgICBkZWxldGUgdGhpcy5jYWxsYmFjaztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0Q3VyclNpemUoKTogSUVsZW1lbnRBY3R1YWxTaXplIHtcbiAgICAgICAgLy8vIGFic3RyYWN0IC0gb3ZlcnJpZGUgdGhpcy5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvLy8gVmlydHVhbFxuICAgIHByb3RlY3RlZCBpc0NoYW5nZWQobGFzdDogSUVsZW1lbnRBY3R1YWxTaXplLCBjdXJyOiBJRWxlbWVudEFjdHVhbFNpemUpIHtcbiAgICAgICAgcmV0dXJuIGN1cnIud2lkdGggIT0gdGhpcy5fbGFzdC53aWR0aCB8fCBjdXJyLmhlaWdodCAhPSB0aGlzLl9sYXN0LmhlaWdodDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29udGFpbmVyU2l6ZUFjdGlvbiBleHRlbmRzIFNpemVDaGFuZ2VBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGNhbGxiYWNrOiAob2xkOiBJRWxlbWVudEFjdHVhbFNpemUsIGN1cnI6IElFbGVtZW50QWN0dWFsU2l6ZSkgPT4gdm9pZCkge1xuICAgICAgICBzdXBlcihjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldEN1cnJTaXplKCk6IElFbGVtZW50QWN0dWFsU2l6ZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy5fY29udGFpbmVyICYmIHRoaXMuX2NvbnRhaW5lci5zdHlsZSA/IHRoaXMuX2NvbnRhaW5lci5jbGllbnRXaWR0aCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5fY29udGFpbmVyICYmIHRoaXMuX2NvbnRhaW5lci5zdHlsZSA/IHRoaXMuX2NvbnRhaW5lci5jbGllbnRIZWlnaHQgOiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jb250YWluZXI7XG4gICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVmlld3BvcnRTaXplQWN0aW9uIGV4dGVuZHMgU2l6ZUNoYW5nZUFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2s6IChvbGQ6IElWaWV3cG9ydFNpemUsIGN1cnI6IElWaWV3cG9ydFNpemUpID0+IHZvaWQpIHtcbiAgICAgICAgc3VwZXIoY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRDdXJyU2l6ZSgpOiBJVmlld3BvcnRTaXplIHtcbiAgICAgICAgdmFyIHZpZXdwb3J0ID0gZ2lneWEudXRpbHMudmlld3BvcnQuZ2V0SW5uZXJTaXplKCk7XG4gICAgICAgIHZhciBvdXRlclZpZXdwb3J0ID0gZ2lneWEudXRpbHMudmlld3BvcnQuZ2V0T3V0ZXJTaXplKCk7XG4gICAgICAgIHZhciBvcmllbnRhdGlvbiA9IGdpZ3lhLnV0aWxzLnZpZXdwb3J0LmdldE9yaWVudGF0aW9uKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aDogdmlld3BvcnQudyxcbiAgICAgICAgICAgIGhlaWdodDogdmlld3BvcnQuaCxcbiAgICAgICAgICAgIG91dGVyV2lkdGg6IG91dGVyVmlld3BvcnQudyxcbiAgICAgICAgICAgIG91dGVySGVpZ2h0OiBvdXRlclZpZXdwb3J0LmgsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogb3JpZW50YXRpb24sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGlzQ2hhbmdlZChsYXN0OiBJVmlld3BvcnRTaXplLCBjdXJyOiBJVmlld3BvcnRTaXplKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5pc0NoYW5nZWQobGFzdCwgY3VycikgfHwgbGFzdC5vcmllbnRhdGlvbiAhPSBjdXJyLm9yaWVudGF0aW9uO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGlkPVxcXCJnaWd5YS1zY3JlZW4tZGlhbG9nLXBhZ2Utb3ZlcmxheVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6JHtvdmVybGF5RGlzcGxheX1cXFwiPjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcImdpZ3lhLXNjcmVlbi1kaWFsb2ctaW5uZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJnaWd5YS1zY3JlZW4tZGlhbG9nLXRvcFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnaWd5YS1zY3JlZW4tZGlhbG9nLWNhcHRpb25cXFwiIGlkPVxcXCJnaWd5YS1zY3JlZW4tZGlhbG9nLWNhcHRpb24tJHttb2RhbElEfVxcXCI+JHRpdGxlPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJnaWd5YS1zY3JlZW4tZGlhbG9nLWNsb3NlXFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcImdpZ3lhLXNjcmVlbi1kaWFsb2ctcGFnZS1vdmVybGF5XFxcIiBzdHlsZT1cXFwiZGlzcGxheToke292ZXJsYXlEaXNwbGF5fVxcXCI+PC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiZ2lneWEtc2NyZWVuLWRpYWxvZy1tYWluXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZ2lneWEtc2NyZWVuLWRpYWxvZy10b3BcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ2lneWEtc2NyZWVuLWRpYWxvZy1jYXB0aW9uXFxcIiB0YWJpbmRleD1cXFwiMFxcXCIgaWQ9XFxcImdpZ3lhLXNjcmVlbi1kaWFsb2ctY2FwdGlvbi0ke21vZGFsSUR9XFxcIj4kdGl0bGU8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImdpZ3lhLXNjcmVlbi1kaWFsb2ctY2xvc2VcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGFyaWEtbGFiZWw9XFxcImNsb3NlIHdpbmRvd1xcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiB0YWJpbmRleD1cXFwiMFxcXCIgPiR7Y2xvc2VJbWFnZX08L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImdpZ3lhLXNjcmVlbi1kaWFsb2ctaW5uZXJcXFwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGltZyBzcmM9XFxcIiR7aW1nVXJsfVxcXCIgYWx0PVxcXCJjbG9zZVxcXCIgaGVpZ2h0PVxcXCIke2ltZ0hlaWdodH1cXFwiIHdpZHRoPVxcXCIke2ltZ1dpZHRofVxcXCIgLz5cXG5cIjsiLCJpbXBvcnQgKiBhcyBCYXNlUGx1Z2luIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvQmFzZVBsdWdpbic7XG5pbXBvcnQgKiBhcyBIdG1sUmVzb3VyY2VzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvSHRtbFJlc291cmNlcyc7XG5pbXBvcnQgKiBhcyBDc3NSZXNvdXJjZXMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9Dc3NSZXNvdXJjZXMnO1xuaW1wb3J0ICogYXMgQ2xvc2VSZWFzb25zIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvQ2xvc2VSZWFzb25zJztcbmltcG9ydCAqIGFzIFBsdWdpblN0eWxlcyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1BsdWdpblN0eWxlcyc7XG5pbXBvcnQgKiBhcyBwbHVnaW5UZXN0ZXIgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9wbHVnaW5UZXN0ZXInO1xuaW1wb3J0ICogYXMgQ29sbGVjdGlvblV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvQ29sbGVjdGlvblV0aWxzJztcbmltcG9ydCAqIGFzIENzc1V0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvQ3NzVXRpbHMnO1xuaW1wb3J0ICogYXMgVVJMVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VUkxVdGlscyc7XG5pbXBvcnQgKiBhcyBET01VdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL0RPTVV0aWxzJztcbmltcG9ydCAqIGFzIGRlZmF1bHRQcm9jZXNzb3IgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9kZWZhdWx0UHJvY2Vzc29yJztcbmltcG9ydCAqIGFzIEFzeW5jTWFuYWdlciBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2hlbHBlcnMvQXN5bmNNYW5hZ2VyJztcbmltcG9ydCAqIGFzIExvYWREaW1tZXIgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9oZWxwZXJzL0xvYWREaW1tZXInO1xuaW1wb3J0ICogYXMgTW9kYWxEaWFsb2cgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9oZWxwZXJzL01vZGFsRGlhbG9nJztcbmltcG9ydCAqIGFzIE1vZGFsRGlhbG9nQ2xhc3NlcyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2hlbHBlcnMvTW9kYWxEaWFsb2dDbGFzc2VzJztcbmltcG9ydCAqIGFzIFBvbGxlciBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2hlbHBlcnMvUG9sbGVyJztcbmltcG9ydCAqIGFzIFBvbGxlckFjdGlvbnMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9oZWxwZXJzL1BvbGxlckFjdGlvbnMnO1xuaW1wb3J0ICogYXMgSU1vZGFsRGlhbG9nUGFyYW1zIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JTW9kYWxEaWFsb2dQYXJhbXMnO1xuaW1wb3J0ICogYXMgSVBsdWdpbkNvbmZpZyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2ludGVyZmFjZXMvSVBsdWdpbkNvbmZpZyc7XG5pbXBvcnQgKiBhcyBJUGx1Z2luQ1NTIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luQ1NTJztcbmltcG9ydCAqIGFzIElQbHVnaW5QYXJhbXMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9pbnRlcmZhY2VzL0lQbHVnaW5QYXJhbXMnO1xuaW1wb3J0ICogYXMgSVBsdWdpblRlbXBsYXRlcyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2ludGVyZmFjZXMvSVBsdWdpblRlbXBsYXRlcyc7XG5pbXBvcnQgKiBhcyBHaWd5YUdsb2JhbERhdGUgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9nZW5lcmFsL2RhdGUnO1xuaW1wb3J0ICogYXMgYXJyYXlVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL2dlbmVyYWwvYXJyYXlVdGlscyc7XG5pbXBvcnQgKiBhcyBvYmplY3RVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL2dlbmVyYWwvb2JqZWN0VXRpbHMnO1xuaW1wb3J0ICogYXMgR2lneWFQbHVnaW5VdGlsc0xhbmcgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9sYW5ndWFnZXMvbGFuZ3VhZ2UnO1xuaW1wb3J0ICogYXMgR2lneWFQbHVnaW5VdGlsc0FuaW1hdGlvbiBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL2FuaW1hdGlvbic7XG5pbXBvcnQgKiBhcyBnbG9iYWxBbmltYXRpb24gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9nbG9iYWxBbmltYXRpb24nO1xuaW1wb3J0ICogYXMgYW5pbWF0aW9uU2VydmljZSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL2FuaW1hdGlvblNlcnZpY2UnO1xuaW1wb3J0ICogYXMgRE9NIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvRE9NJztcbmltcG9ydCAqIGFzIEdsb2JhbERPTSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL0dsb2JhbERPTSc7XG5pbXBvcnQgKiBhcyBEb21BdHRyaWJ1dGVzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvRG9tQXR0cmlidXRlcyc7XG5pbXBvcnQgKiBhcyBlbmFibGVTYWZlQ29weSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL2VuYWJsZVNhZmVDb3B5JztcbmltcG9ydCAqIGFzIGxheW91dENzcyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL2xheW91dENzcyc7XG5pbXBvcnQgKiBhcyBsYXlvdXRUZXh0IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvbGF5b3V0VGV4dCc7XG5pbXBvcnQgKiBhcyBsYXlvdXRUZXh0Rml4ZXIgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9sYXlvdXRUZXh0Rml4ZXInO1xuaW1wb3J0ICogYXMgbGF5b3V0U3ByaXRlcyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL2xheW91dFNwcml0ZXMnO1xuaW1wb3J0ICogYXMgbGF5b3V0Q3NzRml4ZXJVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL2xheW91dENzc0ZpeGVyVXRpbHMnO1xuaW1wb3J0ICogYXMgbGF5b3V0U3R5bGVzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvbGF5b3V0U3R5bGVzJztcbmltcG9ydCAqIGFzIHJlc291cmNlcyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL3Jlc291cmNlcyc7XG5pbXBvcnQgKiBhcyBpbWFnZVBvc2l0aW9ucyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL2ltYWdlUG9zaXRpb25zJztcbmltcG9ydCAqIGFzIFVJSGVscGVycyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL1V0aWxzL1VJL1VJSGVscGVycyc7XG5pbXBvcnQgKiBhcyBVSVBvcHVwIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvVUlQb3B1cCc7XG5pbXBvcnQgKiBhcyB4bWwgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy94bWwveG1sJztcbmltcG9ydCAqIGFzIHhtbFJlc29sdmVyIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMveG1sL3htbFJlc29sdmVyJztcbmltcG9ydCAqIGFzIGRlZmF1bHRYbWxQcm9jZXNzb3IgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy94bWwvZGVmYXVsdFhtbFByb2Nlc3Nvcic7XG5pbXBvcnQgKiBhcyBlbWFpbFZhbGlkYXRpb24gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS92YWxpZGF0aW9uL2VtYWlsVmFsaWRhdGlvbic7XG5pbXBvcnQgKiBhcyBpc0luRG9tYWluIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvVXRpbHMvVUkvdmFsaWRhdGlvbi9pc0luRG9tYWluJztcbmltcG9ydCAqIGFzIGlzRW1haWwgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS92YWxpZGF0aW9uL2lzRW1haWwnO1xuaW1wb3J0ICogYXMgVUkgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9VSSc7XG5pbXBvcnQgJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvUGx1Z2luVXRpbHMwJztcbmltcG9ydCAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9VdGlscy9VSS9sYXlvdXQ1JztcblxuXG5kZWNsYXJlIGNvbnN0IGdpZ3lhOiBhbnk7XG5pZiAoIWdpZ3lhLl8pIHtcbiAgICBnaWd5YS5fID0ge307XG59XG5pZiAoIWdpZ3lhLl8ucGx1Z2lucykge1xuICAgIGdpZ3lhLl8ucGx1Z2lucyA9IHt9O1xufVxuaWYgKCFnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzKSB7XG4gICAgZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcyA9IHt9O1xufVxuaWYgKCFnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmh0bWwpIHtcbiAgICBnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmh0bWwgPSB7fTtcbn1cbmlmICghZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5odG1sLmJhc2UpIHtcbiAgICBnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmh0bWwuYmFzZSA9IHt9O1xufVxuaWYgKCFnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmNzcykge1xuICAgIGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuY3NzID0ge307XG59XG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMuY3NzLmJhc2UpIHtcbiAgICBnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmNzcy5iYXNlID0ge307XG59XG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy51dFV0aWxzKSB7XG4gICAgZ2lneWEuXy5wbHVnaW5zLnV0VXRpbHMgPSB7fTtcbn1cbmlmICghZ2lneWEuXy5wbHVnaW5zLnV0aWxzKSB7XG4gICAgZ2lneWEuXy5wbHVnaW5zLnV0aWxzID0ge307XG59XG5pZiAoIWdpZ3lhLl8ucGx1Z2lucy51dGlscy5Db2xsZWN0aW9ucykge1xuICAgIGdpZ3lhLl8ucGx1Z2lucy51dGlscy5Db2xsZWN0aW9ucyA9IHt9O1xufVxuaWYgKCFnaWd5YS5fLnBsdWdpbnMudXRpbHMuY3NzKSB7XG4gICAgZ2lneWEuXy5wbHVnaW5zLnV0aWxzLmNzcyA9IHt9O1xufVxuaWYgKCFnaWd5YS5fLnBsdWdpbnMudXRpbHMuVVJMKSB7XG4gICAgZ2lneWEuXy5wbHVnaW5zLnV0aWxzLlVSTCA9IHt9O1xufVxuaWYgKCFnaWd5YS5fLnBsdWdpbnMudXRpbHMuRE9NKSB7XG4gICAgZ2lneWEuXy5wbHVnaW5zLnV0aWxzLkRPTSA9IHt9O1xufVxuaWYgKCF3aW5kb3dbJ3Jlc29sdmVyJ10pIHtcbiAgICB3aW5kb3dbJ3Jlc29sdmVyJ10gPSB7fTtcbn1cbmNvbnN0IHJlc29sdmVyID0gd2luZG93WydyZXNvbHZlciddO1xuaWYgKCFnaWd5YS5fLnBsdWdpbnMubW9kYWwpIHtcbiAgICBnaWd5YS5fLnBsdWdpbnMubW9kYWwgPSB7fTtcbn1cbmlmICghZ2lneWEuXy5wbHVnaW5zLnBvbGxlckFjdGlvbnMpIHtcbiAgICBnaWd5YS5fLnBsdWdpbnMucG9sbGVyQWN0aW9ucyA9IHt9O1xufVxuaWYgKCFnaWd5YS5nbG9iYWwpIHtcbiAgICBnaWd5YS5nbG9iYWwgPSB7fTtcbn1cbmlmICghZ2lneWEuZ2xvYmFsLmRhdGUpIHtcbiAgICBnaWd5YS5nbG9iYWwuZGF0ZSA9IHt9O1xufVxuaWYgKCFnaWd5YS51dGlscykge1xuICAgIGdpZ3lhLnV0aWxzID0ge307XG59XG5pZiAoIWdpZ3lhLnV0aWxzLm9iamVjdCkge1xuICAgIGdpZ3lhLnV0aWxzLm9iamVjdCA9IHt9O1xufVxuaWYgKCFnaWd5YS5wbHVnaW5VdGlscykge1xuICAgIGdpZ3lhLnBsdWdpblV0aWxzID0ge307XG59XG5pZiAoIWdpZ3lhLnBsdWdpblV0aWxzLmxhbmcpIHtcbiAgICBnaWd5YS5wbHVnaW5VdGlscy5sYW5nID0ge307XG59XG5pZiAoIWdpZ3lhLnBsdWdpblV0aWxzLmFuaW1hdGlvbikge1xuICAgIGdpZ3lhLnBsdWdpblV0aWxzLmFuaW1hdGlvbiA9IHt9O1xufVxuaWYgKCFnaWd5YS5zZXJ2aWNlcykge1xuICAgIGdpZ3lhLnNlcnZpY2VzID0ge307XG59XG5pZiAoIWdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZSkge1xuICAgIGdpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZSA9IHt9O1xufVxuaWYgKCFnaWd5YS5wbHVnaW5VdGlscy5ET00pIHtcbiAgICBnaWd5YS5wbHVnaW5VdGlscy5ET00gPSB7fTtcbn1cbmlmICghZ2lneWEudXRpbHMuRE9NKSB7XG4gICAgZ2lneWEudXRpbHMuRE9NID0ge307XG59XG5pZiAoIWdpZ3lhLnBsdWdpblV0aWxzLmNzcykge1xuICAgIGdpZ3lhLnBsdWdpblV0aWxzLmNzcyA9IHt9O1xufVxuaWYgKCFnaWd5YS5wbHVnaW5VdGlscy5sYXlvdXQpIHtcbiAgICBnaWd5YS5wbHVnaW5VdGlscy5sYXlvdXQgPSB7fTtcbn1cbmlmICghZ2lneWEucGx1Z2luVXRpbHMudGV4dCkge1xuICAgIGdpZ3lhLnBsdWdpblV0aWxzLnRleHQgPSB7fTtcbn1cbmlmICghZ2lneWEuZ2xvYmFsLlhNTFV0aWxzKSB7XG4gICAgZ2lneWEuZ2xvYmFsLlhNTFV0aWxzID0ge307XG59XG5pZiAoIWdpZ3lhLmdsb2JhbC5yZXNvbHZlcikge1xuICAgIGdpZ3lhLmdsb2JhbC5yZXNvbHZlciA9IHt9O1xufVxuaWYgKCFnaWd5YS5wbHVnaW5VdGlscy52YWxpZGF0aW9uKSB7XG4gICAgZ2lneWEucGx1Z2luVXRpbHMudmFsaWRhdGlvbiA9IHt9O1xufVxuaWYgKCFnaWd5YS5wbHVnaW5VdGlscy5kb21haW4pIHtcbiAgICBnaWd5YS5wbHVnaW5VdGlscy5kb21haW4gPSB7fTtcbn1cblxuT2JqZWN0LmFzc2lnbihcbiAgICBnaWd5YS5fLnBsdWdpbnMsXG4gICAgQmFzZVBsdWdpbixcbiAgICBDbG9zZVJlYXNvbnMsXG4gICAgUGx1Z2luU3R5bGVzLFxuICAgIEFzeW5jTWFuYWdlcixcbiAgICBMb2FkRGltbWVyLFxuICAgIElNb2RhbERpYWxvZ1BhcmFtcyxcbiAgICBJUGx1Z2luQ29uZmlnLFxuICAgIElQbHVnaW5DU1MsXG4gICAgSVBsdWdpblBhcmFtcyxcbiAgICBJUGx1Z2luVGVtcGxhdGVzLFxuKTtcbk9iamVjdC5hc3NpZ24oZ2lneWEuXy5wbHVnaW5zLnJlc291cmNlcy5odG1sLmJhc2UsIEh0bWxSZXNvdXJjZXMpO1xuT2JqZWN0LmFzc2lnbihnaWd5YS5fLnBsdWdpbnMucmVzb3VyY2VzLmNzcy5iYXNlLCBDc3NSZXNvdXJjZXMpO1xuT2JqZWN0LmFzc2lnbihnaWd5YS5fLnBsdWdpbnMudXRVdGlscywgcGx1Z2luVGVzdGVyKTtcbk9iamVjdC5hc3NpZ24oZ2lneWEuXy5wbHVnaW5zLnV0aWxzLkNvbGxlY3Rpb25zLCBDb2xsZWN0aW9uVXRpbHMpO1xuT2JqZWN0LmFzc2lnbihnaWd5YS5fLnBsdWdpbnMudXRpbHMuY3NzLCBDc3NVdGlscywgbGF5b3V0Q3NzRml4ZXJVdGlscyk7XG5PYmplY3QuYXNzaWduKGdpZ3lhLl8ucGx1Z2lucy51dGlscy5VUkwsIFVSTFV0aWxzLCBVSUhlbHBlcnMpO1xuT2JqZWN0LmFzc2lnbihnaWd5YS5fLnBsdWdpbnMudXRpbHMuRE9NLCBET01VdGlscywgRG9tQXR0cmlidXRlcyk7XG5PYmplY3QuYXNzaWduKHJlc29sdmVyLCBkZWZhdWx0UHJvY2Vzc29yKTtcbk9iamVjdC5hc3NpZ24oZ2lneWEuXy5wbHVnaW5zLm1vZGFsLCBNb2RhbERpYWxvZywgTW9kYWxEaWFsb2dDbGFzc2VzKTtcbk9iamVjdC5hc3NpZ24oZ2lneWEuXywgUG9sbGVyKTtcbk9iamVjdC5hc3NpZ24oZ2lneWEuXy5wbHVnaW5zLnBvbGxlckFjdGlvbnMsIFBvbGxlckFjdGlvbnMpO1xuT2JqZWN0LmFzc2lnbihnaWd5YS5nbG9iYWwuZGF0ZSwgR2lneWFHbG9iYWxEYXRlKTtcbk9iamVjdC5hc3NpZ24oZ2lneWEuZ2xvYmFsLCBhcnJheVV0aWxzLCBnbG9iYWxBbmltYXRpb24sIEdsb2JhbERPTSwgbGF5b3V0U3ByaXRlcywgaW1hZ2VQb3NpdGlvbnMsIHhtbFJlc29sdmVyLCBpc0VtYWlsKTtcbk9iamVjdC5hc3NpZ24oZ2lneWEudXRpbHMub2JqZWN0LCBvYmplY3RVdGlscyk7XG5PYmplY3QuYXNzaWduKGdpZ3lhLnBsdWdpblV0aWxzLmxhbmcsIEdpZ3lhUGx1Z2luVXRpbHNMYW5nKTtcbk9iamVjdC5hc3NpZ24oZ2lneWEucGx1Z2luVXRpbHMuYW5pbWF0aW9uLCBHaWd5YVBsdWdpblV0aWxzQW5pbWF0aW9uKTtcbk9iamVjdC5hc3NpZ24oZ2lneWEuc2VydmljZXMuc29jaWFsaXplLCBhbmltYXRpb25TZXJ2aWNlLCBsYXlvdXRTdHlsZXMsIFVJUG9wdXApO1xuT2JqZWN0LmFzc2lnbihnaWd5YS5wbHVnaW5VdGlscy5ET00sIERPTSk7XG5PYmplY3QuYXNzaWduKGdpZ3lhLnV0aWxzLkRPTSwgZW5hYmxlU2FmZUNvcHkpO1xuT2JqZWN0LmFzc2lnbihnaWd5YS5wbHVnaW5VdGlscy5jc3MsIGxheW91dENzcyk7XG5PYmplY3QuYXNzaWduKGdpZ3lhLnBsdWdpblV0aWxzLmxheW91dCwgbGF5b3V0VGV4dCk7XG5PYmplY3QuYXNzaWduKGdpZ3lhLnBsdWdpblV0aWxzLnRleHQsIGxheW91dFRleHRGaXhlcik7XG5PYmplY3QuYXNzaWduKGdpZ3lhLl8ucGx1Z2lucy5yZXNvdXJjZXMsIHJlc291cmNlcyk7XG5PYmplY3QuYXNzaWduKGdpZ3lhLmdsb2JhbC5YTUxVdGlscywgeG1sKTtcbk9iamVjdC5hc3NpZ24oZ2lneWEuZ2xvYmFsLnJlc29sdmVyLCBkZWZhdWx0WG1sUHJvY2Vzc29yKTtcbk9iamVjdC5hc3NpZ24oZ2lneWEucGx1Z2luVXRpbHMudmFsaWRhdGlvbiwgZW1haWxWYWxpZGF0aW9uKTtcbk9iamVjdC5hc3NpZ24oZ2lneWEucGx1Z2luVXRpbHMuZG9tYWluLCBpc0luRG9tYWluKTtcblxuZ2lneWEudXRpbHMub2JqZWN0LmFkZChnaWd5YS5wbHVnaW5VdGlscy5sYW5nLCB7XG4gICAgZ2V0RGF0ZVN0cmluZzogZnVuY3Rpb24od2lkZ2V0UGFyYW1zOiBPYmplY3QsIGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXdpZGdldFBhcmFtcyB8fCAhd2lkZ2V0UGFyYW1zWydkYXRlRm9ybWF0J10pIHJldHVybjtcbiAgICAgICAgdmFyIG1vbnRoTmFtZXMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcbiAgICAgICAgdmFyIGRhdGVGb3JtYXQgPSB3aWRnZXRQYXJhbXNbJ2RhdGVGb3JtYXQnXTtcbiAgICAgICAgdmFyIGQgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgdmFyIG0gPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICB2YXIgbW9udGhOYW1lID0gbW9udGhOYW1lc1tkYXRlLmdldE1vbnRoKCldO1xuICAgICAgICB2YXIgeSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblxuICAgICAgICByZXR1cm4gZGF0ZUZvcm1hdFxuICAgICAgICAgICAgLnJlcGxhY2UoLyVkZC9nLCAoJzAnICsgZCkuc2xpY2UoLTIpKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVkL2csIGQpXG4gICAgICAgICAgICAucmVwbGFjZSgvJU1NTU0vZywgbW9udGhOYW1lKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyVNTU0vZywgbW9udGhOYW1lLnN1YnN0cigwLCAzKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTU0vZywgKCcwJyArIG0pLnNsaWNlKC0yKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lTS9nLCBtKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyV5eXl5L2csIHkpXG4gICAgICAgICAgICAucmVwbGFjZSgvJXl5L2csIHkudG9TdHJpbmcoKS5zbGljZSgtMikpO1xuICAgIH0sXG59KTtcblxuaWYgKCFnaWd5YS5zb2NpYWxpemUpe1xuICAgIGdpZ3lhLnNvY2lhbGl6ZSA9IHt9O1xufVxuT2JqZWN0LmFzc2lnbihnaWd5YS5zb2NpYWxpemUsIFVJKTtcbiIsImltcG9ydCB7IEJhc2VQbHVnaW4gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL0Jhc2VQbHVnaW4nO1xuaW1wb3J0IHsgSVBsdWdpblBhcmFtcyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzLlBsdWdpbi9hcHAvaW50ZXJmYWNlcy9JUGx1Z2luUGFyYW1zJztcbmltcG9ydCB7IElQbHVnaW5UZW1wbGF0ZXMgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy5QbHVnaW4vYXBwL2ludGVyZmFjZXMvSVBsdWdpblRlbXBsYXRlcyc7XG5pbXBvcnQgeyBJUGx1Z2luQ1NTIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMuUGx1Z2luL2FwcC9pbnRlcmZhY2VzL0lQbHVnaW5DU1MnO1xuaW1wb3J0IHsgSUluamVjdGlvbkluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvQVBJL1VpQXBpJztcblxuZGVjbGFyZSBjb25zdCBiZWZvcmVBbGw6IGFueTtcbmRlY2xhcmUgY29uc3QgYWZ0ZXJFYWNoOiBhbnk7XG5cbihmdW5jdGlvbiBtb2NrQmFzZVBsdWdpbihkZXN0aW5hdGlvbjogYW55KSB7XG4gICAgaWYgKCFkZXN0aW5hdGlvbi5naWd5YSkgZGVzdGluYXRpb24uZ2lneWEgPSB7fTtcblxuICAgIGlmICghZGVzdGluYXRpb24uZ2lneWEuXykgZGVzdGluYXRpb24uZ2lneWEuXyA9IHt9O1xuXG4gICAgaWYgKCFkZXN0aW5hdGlvbi5naWd5YS5fLnBsdWdpbnMpIGRlc3RpbmF0aW9uLmdpZ3lhLl8ucGx1Z2lucyA9IHt9O1xuXG4gICAgaWYgKCFkZXN0aW5hdGlvbi5naWd5YS5fLnBsdWdpbnMuQmFzZVBsdWdpbikge1xuICAgICAgICBkZXN0aW5hdGlvbi5naWd5YS5fLnBsdWdpbnMuQmFzZVBsdWdpbiA9IGZ1bmN0aW9uKHAsIHQsIGMpIHt9O1xuICAgICAgICBkZXN0aW5hdGlvbi5naWd5YS5fLnBsdWdpbnMuQmFzZVBsdWdpbi5pc01vY2sgPSB0cnVlO1xuICAgIH1cbn0pKHdpbmRvdyk7XG5leHBvcnQgY2xhc3MgUGx1Z2luVGVzdGVyPFBMIGV4dGVuZHMgQmFzZVBsdWdpbjxJUGx1Z2luUGFyYW1zLCBJUGx1Z2luVGVtcGxhdGVzLCBJUGx1Z2luQ1NTPj4ge1xuICAgIHB1YmxpYyBzdGF0aWMgYXBpS2V5ID0gJzNfOW1HVGdWU3RqMW5UVmFVR0NRc1A0R1NOTGw2Z3NIU29UU3pkMU1kaFo0Y2pEcllxS1lyYTNmeHFmQU81Q0ZTRSc7XG5cbiAgICBwcml2YXRlIF9pbnN0YW5jZTogUEw7XG4gICAgcHJpdmF0ZSBfbG9hZFBsdWdpbjogKElQbHVnaW5QYXJhbXMsIElQbHVnaW5UZW1wbGF0ZXMsIElQbHVnaW5DU1MpID0+IHZvaWQ7XG4gICAgcHJpdmF0ZSBfaW5zdGFuY2VDb3VudDogbnVtYmVyID0gMDtcblxuICAgIHB1YmxpYyBpbmplY3RvciA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCk7XG4gICAgcHVibGljIGRpc3Bvc2VJbnN0YW5jZUFmdGVyVGVzdDogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIG5ldmVySW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocGx1Z2luVHlwZTogeyBuZXcgKHAsIHQsIGMpOiBQTCB9LCBwdWJsaWMgZGVmYXVsdENvbnRhaW5lcklEID0gbnVsbCwgaW5qZWN0aW9uSW5mbz86IElJbmplY3Rpb25JbmZvKSB7XG4gICAgICAgIGJlZm9yZUFsbChkb25lID0+IHtcbiAgICAgICAgICAgIGdpZ3lhLmJvb3QuZW5zdXJlSnNTZGtMb2FkZWQoUGx1Z2luVGVzdGVyLmFwaUtleSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghaW5qZWN0aW9uSW5mbykge1xuICAgICAgICAgICAgICAgICAgICBpbmplY3Rpb25JbmZvID0gcGx1Z2luVHlwZVsnaW5qZWN0aW9uSW5mbyddKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRQbHVnaW4gPSBQbHVnaW5UZXN0ZXIuZ2V0TG9hZEZ1bmMoaW5qZWN0aW9uSW5mbyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGVmYXVsdENvbnRhaW5lcklEKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmlkID0gaW5qZWN0aW9uSW5mby5uYW1lICsgJ1V0JztcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBhZnRlckVhY2goZG9uZSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgJiYgdGhpcy5kaXNwb3NlSW5zdGFuY2VBZnRlclRlc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2luc3RhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SW5zdGFuY2UocGFyYW1zOiBJUGx1Z2luUGFyYW1zLCB0ZW1wbGF0ZXM/OiBJUGx1Z2luVGVtcGxhdGVzLCBjc3M/OiBJUGx1Z2luQ1NTLCBjYWxsYmFjaz86IChpbnN0YW5jZTogUEwpID0+IHZvaWQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzLl9pbnN0YW5jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvYWROZXdJbnN0YW5jZShwYXJhbXMsIHRlbXBsYXRlcywgY3NzLCBpbnN0YW5jZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgICAgICAgICBQbHVnaW5UZXN0ZXIuc2V0TW9ja3ModGhpcy5faW5zdGFuY2UsIHRoaXMuaW5qZWN0b3IpO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzLl9pbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldE1vY2tzKGluc3RhbmNlLCBpbmplY3RvcjogTWFwPHN0cmluZywgYW55Pikge1xuICAgICAgICBpbmplY3Rvci5mb3JFYWNoKCh2LCBrKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGluc3RhbmNlW2tdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlW2tdID0gdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzSW5zdGFuY2VMb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuX2luc3RhbmNlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZE5ld0luc3RhbmNlKHBhcmFtczogSVBsdWdpblBhcmFtcywgdGVtcGxhdGVzPzogSVBsdWdpblRlbXBsYXRlcywgY3NzPzogSVBsdWdpbkNTUywgY2FsbGJhY2s/OiAoaW5zdGFuY2U6IFBMKSA9PiB2b2lkKSB7XG4gICAgICAgIGlmICghcGFyYW1zKSB7XG4gICAgICAgICAgICBwYXJhbXMgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvcmlnaW5hbEdldEluc3RhbmNlID0gcGFyYW1zLmdldEluc3RhbmNlO1xuICAgICAgICB2YXIgb25QbHVnaW5Mb2FkZWQgPSBpbnN0YW5jZSA9PiB7XG4gICAgICAgICAgICBpZiAob3JpZ2luYWxHZXRJbnN0YW5jZSkgb3JpZ2luYWxHZXRJbnN0YW5jZShpbnN0YW5jZSk7XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soaW5zdGFuY2UgYXMgUEwpO1xuICAgICAgICB9O1xuICAgICAgICBwYXJhbXMuZ2V0SW5zdGFuY2UgPSBvblBsdWdpbkxvYWRlZDtcblxuICAgICAgICBpZiAodGhpcy5uZXZlckluaXQgJiYgdHlwZW9mIHBhcmFtcy5fbm9Jbml0ID09ICd1bmRlZmluZWQnKSBwYXJhbXMuX25vSW5pdCA9IHRydWU7XG5cbiAgICAgICAgaWYgKCFwYXJhbXMuY29udGFpbmVySUQpIHBhcmFtcy5jb250YWluZXJJRCA9IHRoaXMuZGVmYXVsdENvbnRhaW5lcklEO1xuXG4gICAgICAgIHBhcmFtc1sndXRJbnN0YW5jZUNvdW50J10gPSArK3RoaXMuX2luc3RhbmNlQ291bnQ7XG5cbiAgICAgICAgdGhpcy5fbG9hZFBsdWdpbihwYXJhbXMsIHRlbXBsYXRlcywgY3NzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldExvYWRGdW5jKGluamVjdGlvbkluZm86IElJbmplY3Rpb25JbmZvKTogKElQbHVnaW5QYXJhbXMsIElQbHVnaW5UZW1wbGF0ZXMsIElQbHVnaW5DU1MpID0+IHZvaWQge1xuICAgICAgICB2YXIgZnVuY05hbWUgPSAnZ2lneWEuJyArIGdpZ3lhLl8uVWlBcGkuZ2V0QXBpTmFtZShpbmplY3Rpb25JbmZvLmpzTmFtZSwgaW5qZWN0aW9uSW5mby5tZXRob2ROYW1lKTtcbiAgICAgICAgdmFyIGZ1bmMgPSBldmFsKGZ1bmNOYW1lKTtcbiAgICAgICAgaWYgKCFmdW5jKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT0gJ29iamVjdCcgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGluamVjdGlvbkluZm8ubmFtZSArIFwiJ3MgbWV0aG9kIGNvdWxkIG5vdCBiZSBmb3VuZCBpbiB0aGUgYXBpLWxpc3Q6IFwiICsgZnVuY05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmdW5jO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBlbnVtIEdTRXJyb3JzIHtcbiAgICBPSyA9IDAsXG4gICAgRGF0YV9QZW5kaW5nID0gMTAwMDAxLCAvLyBEYXRhIGlzIHN0aWxsIGJlaW5nIHByb2Nlc3NlZCwgcXVlcnkgYWdhaW4gZm9yIHRoZSByZXNwb25zZVxuICAgIE5FVFdPUktfRVJST1IgPSA1MDAwMjYsXG4gICAgREFUQV9QRU5ESU5HID0gMTAwMDAxLCAvLyBEYXRhIGlzIHN0aWxsIGJlaW5nIHByb2Nlc3NlZCwgcXVlcnkgYWdhaW4gZm9yIHRoZSByZXNwb25zZVxuICAgIE9QRVJBVElPTl9DQU5DRUxFRCA9IDIwMDAwMSwgLy8gdXNlciBjYW5jZWxlZCwgaW4gbG9naW4gcHJvY2Vzc1xuICAgIFBFUk1JU1NJT05fR1JBTlRFRCA9IDIwMDAwMiwgLy8gSW5uZXIgY29kZVxuICAgIFBFUk1JU1NJT05fTk9UX0dSQU5URUQgPSAyMDAwMDMsIC8vIElubmVyIGNvZGVcbiAgICBSRURJUkVDVCA9IDIwMDAwNCwgLy8gSW5uZXIgY29kZVxuICAgIE5FV19VU0VSID0gMjAwMDA1LCAvLyBJbm5lciBjb2RlXG4gICAgT1BFUkFUSU9OX0RPTkUgPSAyMDAwMDYsIC8vIElubmVyIGNvZGVcbiAgICBVUERBVEVfVVNFUiA9IDIwMDAwNywgLy8gSW5uZXIgY29kZVxuICAgIE9LX1dJVEhfRVJST1JTID0gMjAwMDA4LCAvLyBGb3IgcmVwb3J0cyAtIHdoZW4gd2UgcmV0dXJuIG9rIHRvIGNsaWVudCBidXQgaGFkIGFjY2VwdGFibGUgZXJyb3JzICh0aGF0IHdlIHdhbnQgdG8ga25vdyBhYm91dCkgb24gdGhlIHdheVxuICAgIEFDQ09VTlRTX0xJTktFRCA9IDIwMDAwOSwgLy8gQWZ0ZXIgbGlua2lnbiBhY2NvdXRucyB2aWEgbG9naW4sIHJldHVybiB0aGlzIGVycm9yIGNvZGVcbiAgICBPS19XSVRIX0VSUk9SX0xPR0lOX0lERU5USUZJRVJfRVhJU1RTID0gMjAwMDEwLCAvLyBGb3Igc2V0QWNjb3VudEluZm8gdXNpbmcgdGhlIGNvbmZsaWN0SGFuZGxpbmcgcGFyYW0gLSBwcm9maWxlIHdhcyBzYXZlZCwgYnV0IHRoZSBlbWFpbCBjb25mbGljdHMgd2l0aCBhbm90aGVyIHVzZXJcbiAgICBBQ0NPVU5UX1BFTkRJTkdfUkVHSVNUUkFUSU9OID0gMjA2MDAxLCAvLyBGb3IgYWNjb3VudHMgQVBJLFxuICAgIEFDQ09VTlRfUEVORElOR19WRVJJRklDQVRJT04gPSAyMDYwMDIsIC8vIEZvciBhY2NvdW50cyBBUEk7IGNvbnNpZGVyIG1vdmluZyB0byA0MDN4eHggc2VjdGlvbiBpbiB0aGUgZnV0dXJlLlxuICAgIEFDQ09VTlRfTUlTU0lOR19MT0dJTklEID0gMjA2MDAzLCAvLyBGb3IgYWNjb3VudHMgQVBJXG4gICAgSURFTlRJVFlfQUxSRUFEWV9BU1NJR05FRCA9IDIwNjAwNCwgLy8gRm9yIGltcG9ydCBhY2NvdW50cyBBUElcbiAgICBBRlRFUl9FTUFJTF9WRVJJRklDQVRJT04gPSAyMDYwMDUsXG4gICAgUEVORElOR19DT0RFX1ZFUklGSUNBVElPTiA9IDIwNjAwNixcbiAgICBDTElFTlRfTE9HID0gMzAwMDAxLCAvLyBpbnRlcm5hbCwgZm9yIHJlcG9ydGluZyBlcm9ycnMgaW4gY2xpZW50IFNES1NcbiAgICBJTlZBTElEX0RBVEFfQ0VOVEVSID0gMzAxMDAxLCAvLyBcIkludmFsaWQgZGF0YS1jZW50ZXJcIi4gd2l0aCBlcnJvciBkZXRhaWxzIG9mOiBcIlRoaXMgQVBJIGtleSBpcyBzZXJ2ZWQgYnkgYW5vdGhlciBkYXRhIGNlbnRlclwiLlxuICAgIElOVkFMSURfUkVRVUVTVF9GT1JNQVQgPSA0MDAwMDEsIC8vIGNvdWxkIGJlIGFsbCBraW5kIG9mIGVycm9ycyB3aXRoIHdyb25nIHJlcXVlc3QgKG5vbiBzZWN1cmUgd2hlbiBzaG91bGQgYmUgc2VjdXJlLCB3cm9uZyBhdXRoZW50aWNhdGlvbiBoZWFkZXIpXG4gICAgTUlTU0lOR19SRVFVSVJFRF9QQVJBTUVURVIgPSA0MDAwMDIsXG4gICAgVU5JUVVFX0lERU5USUZJRVJfRVhJU1RTID0gNDAwMDAzLFxuICAgIElOVkFMSURfUEFSQU1FVEVSX0ZPUk1BVCA9IDQwMDAwNCxcbiAgICBJTlZBTElEX1BBUkFNRVRFUl9WQUxVRSA9IDQwMDAwNixcbiAgICBEVVBMSUNBVEVfVkFMVUUgPSA0MDAwMDcsXG4gICAgSU5WQUxJRF9BVVRIRU5USUNBVElPTl9IRUFERVIgPSA0MDAwMDgsIC8vIE9BdXRoMlxuICAgIFZBTElEQVRJT05fRVJST1IgPSA0MDAwMDksIC8vIEluIGFjY291bnRzLnJlZ2lzdGVyLCB3aGVuZXZlciB0aGVyZSBpcyBhIHZhbGlkYXRpb24gZXJyb3JcbiAgICBJTlZBTElEX1JFRElSRUNUX1VSSSA9IDQwMDAxMSwgLy8gT0F1dGgyXG4gICAgSU5WQUxJRF9SRVNQT05TRV9UWVBFID0gNDAwMDEyLCAvLyBPQXV0aDJcbiAgICBVTlNVUFBPUlRFRF9HUkFOVF9UWVBFID0gNDAwMDEzLCAvLyBPQXV0aDJcbiAgICBJTlZBTElEX0dSQU5UID0gNDAwMDE0LCAvLyBPQXV0aDJcbiAgICBDT0RFX0VYUElSRUQgPSA0MDAwMTUsIC8vIE9BdXRoMlxuICAgIFNDSEVNQV9WQUxJREFUSU9OX0ZBSUxFRCA9IDQwMDAyMCxcbiAgICBDQVBUQ0hBX1ZFUklGSUNBVElPTl9GQUlMRUQgPSA0MDAwMjEsXG4gICAgVU5JUVVFX0lOREVYX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjIsXG4gICAgSU5WQUxJRF9UWVBFX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjMsXG4gICAgRFlOQU1JQ19GSUVMRFNfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyNCxcbiAgICBXUklURV9BQ0NFU1NfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyNSxcbiAgICBJTlZBTElEX0ZPUk1BVF9WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI2LFxuICAgIFJFUVVJUkVEX1ZBTFVFX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjcsXG4gICAgRU1BSUxfTk9UX1ZFUklGSUVEID0gNDAwMDI4LFxuICAgIFNDSEVNQV9DT05GTElDVF9FUlJPUiA9IDQwMDAyOSwgLy8gVG8gaGFuZGxlIFVzZXIgc3RvcnkgMzQzMzAuIEltcHJvdmUgRWxhc3RpY1NlYXJjaE1hcHBpbmdFeGNlcHRpb24gaGFuZGxpbmcgaW4gRFMuSW5kZXhPYmplY3RcbiAgICBPUEVSQVRJT05fTk9UX0FMTE9XRUQgPSA0MDAwMzAsIC8vIFVzZXIgc3RvcnkgMzQzMTEgLSBJZiBhZGRDb25uZWN0aW9uIGlzIGNhbGxlZCByZXR1cm4gYW4gZXJyb3IgKFwib3BlcmF0aW9uIG5vdCBhbGxvd2VkIGZvciB0aGlzIGFjY291bnRcIiwgNDAwWFhYIGVycm9yKS5cbiAgICBTRUNVUklUWV9WRVJJRklDQVRJT05fRkFJTEVEID0gNDAwMDUwLFxuICAgIElOVkFMSURfQVBJS0VZX1BBUkFNRVRFUiA9IDQwMDA5MyxcbiAgICBOT1RfU1VQUE9SVEVEID0gNDAwMDk2LCAvLyB0aGUgZnVuY3Rpb24gaXMgbm90IHN1cHBvcnRlZCBieSBhbnkgb2YgdGhlIGN1cnJlbnRseSBjb25uZWN0ZWQgcHJvdmlkZXJzXG4gICAgVU5TVVBQT1JURURfVVNFUl9BR0VOVCA9IDQwMDA5NywgLy9cbiAgICBOT19QUk9WSURFUlMgPSA0MDAxMDAsIC8vIGNsaWVudD9cbiAgICBQT1BVUF9CTE9DS0VEID0gNDAwMTAxLCAvLyBjbGllbnRcbiAgICBJTlZBTElEX0VWRU5UX0hBTkRMRVIgPSA0MDAxMDIsIC8vIGNsaWVudFxuICAgIElOVkFMSURfQ09OVEFJTkVSSUQgPSA0MDAxMDMsIC8vIGNsaWVudFxuICAgIE5PVF9DT05ORUNURUQgPSA0MDAxMDYsIC8vIHVzZXIgaXMgbm90IGNvbm5lY3RlZCB0byB0aGUgcmVxdWlyZWQgbmV0d29yayBvciB0byBhbnkgbmV0d29ya1xuICAgIElOVkFMSURfU0lURV9ET01BSU4gPSA0MDAxMjAsIC8vIHRoZSBjdXJyZW50IGRvbWFpbiBkb2VzIG5vdCBtYXRjaCB0aGUgZG9tYWluIGNvbmZpZ3VyZWQgZm9yIHRoZSBhcGkga2V5XG4gICAgUFJPVklERVJfQ09ORklHVVJBVElPTl9FUlJPUiA9IDQwMDEyMiwgLy8gdGhlIGN1cnJlbnQgZG9tYWluIGRvZXMgbm90IG1hdGNoIHRoZSBkb21haW4gY29uZmlndXJlZCBmb3IgdGhlIGFwaSBrZXlcbiAgICBMSU1JVF9SRUFDSEVEID0gNDAwMTI0LCAvLyBHYW1lTWVjaGFuaWNzIC0gQ2FwIHdhcyByZWFjaGVkXG4gICAgRlJFUVVFTkNZX0xJTUlUX1JFQUNIRUQgPSA0MDAxMjUsIC8vIENvbW1lbnRzL0ZlZWQgLSBTcGFtIENhcHMgd2FzIHJlYWNoZWRcbiAgICBJTlZBTElEX0FDVElPTiA9IDQwMDEyNiwgLy8gR2FtZU1lY2hhbmljcyAtIEludmFsaWQgYWN0aW9uLiBUcmlnZ2VyZWQgYWN0aW9uIGNhbid0IGJlIGluaXRpYXRlZCBleHRlcm5hbGx5XG4gICAgSU5TVUZGSUNJRU5UX1BPSU5UU19UT19SRURFRU0gPSA0MDAxMjcsIC8vIEdhbWVNZWNoYW5pY3MgLSBJbnN1ZmZpY2llbnRfcG9pbnRzX3RvX3JlZGVlbVxuICAgIFNJR05BVFVSRV9USU1FU1RBTVBfRVhQSVJFRCA9IDQwMDEyOCwgLy8gdGhlIHRpbWVzdGFtcCBpbnNpZGUgdGhlIHNpZ25hdHVyZSBpcyBleHBpcmVkXG4gICAgRXJyb3JfRHVyaW5nX0V4dGVuc2lvbnNfT3BlcmF0aW9uID0gNDAwMzAyLFxuICAgIEV4dGVuc2lvbl9Qb2ludF9DdXN0b21fRXJyb3IgPSA0MDAzMDMsIC8vIEV4dGVuc2lvbiBwb2ludCByZXR1cm4gYSB1c2VyRmFjaW5nRXJyb3JNZXNzYWdlXG4gICAgSU5WQUxJRF9QT0xJQ1lfQ09ORklHVVJBVElPTiA9IDQwMTAwMCwgLy8gUG9saWN5IGNvbmZpZ3VyYXRpb24gaXMgaW52YWxpZCAoaS5lLiBwcmV2ZW50IHJlZ2l0cmF0aW9uKVxuICAgIFNVU1BFQ1RFRF9TUEFNID0gNDAxMDEwLCAvLyBTb21lb25lIGlzIHRyeWluZyB0byB1c2UgR2lneWEgdG8gc2VuZCBhIGVtYWlsIHdpdGggYSBVUkwgdGhhdCBkb2VzIG5vdCBtYXRjaCBhbnkgb2YgdGhlIGNsaWVudCdzIGRvbWFpbnM7IHN1c3BlY3RlZCBzcGFtLlxuICAgIExPR0lOX0ZBSUxFRF9DQVBUQ0hBX1JFUVVJUkVEID0gNDAxMDIwLCAvLyBhY2NvdW50cy5sb2dpbiAtIGNhcHRjaGEgcmVxdWlyZWRcbiAgICBSRVFVRVNUX0ZBSUxFRF9DQVBUQ0hBX1JFUVVJUkVEID0gNDAxMDIzLCAvLyBhY2NvdW50cy5sb2dpbiAtIGNhcHRjaGEgcmVxdWlyZWRcbiAgICBMT0dJTl9GQUlMRURfV1JPTkdfQ0FQVENIQSA9IDQwMTAyMSwgLy8gYWNjb3VudHMubG9naW4gLSB3cm9uZyBjYXB0Y2hhIGNvZGVcbiAgICBPTERfUEFTU1dPUkRfVVNFRCA9IDQwMTAzMCwgLy8gVGhlIHVzZXIgcHJvdmlkZWQgaGlzIHByZXZpb3VzIHBhc3N3b3JkLCBub3QgdGhlIGN1cnJlbnQgb25lXG4gICAgRk9SQklEREVOID0gNDAzMDAwLFxuICAgIElOVkFMSURfU0VTU0lPTl9UT0tFTiA9IDQwMzAwMSwgLy8gaW50ZXJuYWxcbiAgICBSRVFVRVNUX0hBU19FWFBJUkVEID0gNDAzMDAyLCAvLyB0aGUgdGltZXN0YW1wIG9yIGV4cGlyYXRpb24gb2YgdGhlIHRva2VuIHVzZWQgZXhjZWVkZWQgdGhlIGFsbG93ZWQgdGltZSB3aW5kb3dcbiAgICBJTlZBTElEX1JFUVVFU1RfU0lHTkFUVVJFID0gNDAzMDAzLFxuICAgIERVUExJQ0FURV9OT05DRSA9IDQwMzAwNCxcbiAgICBVTkFVVEhPUklaRURfVVNFUiA9IDQwMzAwNSwgLy8gdGhlIHVzZXIgaWQgcGFzc2VkIGlzIG5vdCB2YWxpZCBmb3IgdGhpcyBzaXRlXG4gICAgU0VOU0lUSVZFX0RBVEFfU0VOVF9PVkVSX0hUVFAgPSA0MDMwMDYsIC8vIHdoZW4gc2VuZGluZyB0aGUgc2VjcmV0IGtleSBpbiBSRVNUIGl0IGhhcyB0byBiZSBvdmVyIEhUVFBTXG4gICAgUEVSTUlTU0lPTl9ERU5JRUQgPSA0MDMwMDcsIC8vIENvbW1lbnRzIHNlcnZlciAtIFBlcm1pc3Npb24gZGVuaWVkIChyZWFkT25seSxtb2RlcmF0aW9uIHNpdGUpLlxuICAgIElOVkFMSURfT1BFTklEX1VSTCA9IDQwMzAwOCwgLy8gY2Fubm90IGZpbmQgYW4gb3BlbklkIGVuZHBvaW50IG9uIHRoZSB1cmwgb3IgdXNlcm5hbWUgZ2l2ZW4gZm9yIG9wZW5JZCBsb2dpblxuICAgIFBST1ZJREVSX1NFU1NJT05fRVhQSVJFRCA9IDQwMzAwOSwgLy8gdGhlIHVzZXIgc2Vzc2lvbiBmb3IgdGhpcyBwcm92aWRlciBpcyBleHBpcmVkXG4gICAgSU5WQUxJRF9TRUNSRVQgPSA0MDMwMTAsIC8vIHRoZSByZXF1ZXN0IGhhcyBhbiBpbnZhbGlkIHNlY3JldCBrZXlcbiAgICBTRVNTSU9OX0hBU19FWFBJUkVEID0gNDAzMDExLCAvLyB0aGUgc2Vzc2lvbiBmb3IgdGhpcyB1c2VyIGhhcyBleHBpcmVkXG4gICAgTk9fVkFMSURfU0VTU0lPTiA9IDQwMzAxMiwgLy8gcmVxdWVzdGVkIHVzZXIgaGFzIG5vIHZhbGlkIHNlc3Npb25cbiAgICBVTlZFUklGSUVEX1VTRVIgPSA0MDMwMTMsIC8vIHRoZSB1c2VyIGlzIG5vdCB2ZXJpZmllZCBpbiBTU08gc2Vzc2lvblxuICAgIE1JU1NJTkdfUkVRVUVTVF9SRUZFUlJFUiA9IDQwMzAxNSwgLy8gd2UgY2FuJ3QgdmFsaWRhdGUgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgcmVmZXJyZXIgaGVhZGVyIGlzIG1pc3NpbmdcbiAgICBVTkVYUEVDVEVEX1BST1ZJREVSX1VTRVIgPSA0MDMwMTcsIC8vIHRoZSBsb2dnZWQgaW4gdXNlciBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgb25lIGV4cGVjdGVkXG4gICAgUEVSTUlTU0lPTl9OT1RfUkVRVUVTVEVEID0gNDAzMDIyLCAvLyB0aGUgYWN0aW9uIG5lZWRzIGEgdXNlciBwZXJtaXNzaW9uIGFuZCBpdCB3YXMgbm90IHJlcXVlc3RlZFxuICAgIE5PX1VTRVJfUEVSTUlTU0lPTiA9IDQwMzAyMywgLy8gdGhlIGFjdGlvbiBuZWVkcyBhIHVzZXIgcGVybWlzc2lvbiBhbmQgd2UgZG9uJ3QgaGF2ZSBvbmVcbiAgICBQUk9WSURFUl9MSU1JVF9SRUFDSEVEID0gNDAzMDI0LCAvLyB0aGUgcHJvdmlkZXIgbGltaXQgZm9yIHRoaXMgYWN0aW9uIHdhcyBleGNlZWRlZFxuICAgIElOVkFMSURfVE9LRU4gPSA0MDMwMjUsIC8vIE9BdXRoMlxuICAgIFVOQVVUSE9SSVpFRF9BQ0NFU1NfRVJST1IgPSA0MDMwMjYsIC8vIENhbGxzIHRvIGFjY291bnRzLmlzQXZhaWxhYmxlTG9naW5JRCBXaGVuIHByZXZlbnRMb2dpbklESGFydmVzdGluZyA9IHRydWUgc2hvdWxkIHJldHVybiBhbiBhcHByb3ByaWF0ZSA0MDN4eHggdW5hdXRob3JpemVkIGFjY2VzcyBlcnJvci5cbiAgICBESUZGRVJFTlRfVVNFUl9GT1JfUkVBVVRIID0gNDAzMDI3LCAvLyBEaWZmZXJlbnQgdXNlciB0cmllZCB0byByZS1hdXRob3JpemUuXG4gICAgU0VTU0lPTl9FWFBJUkVEX1JFVFJZID0gNDAzMDMwLCAvLyBJbm5lciBjb2RlIC0gd2hlbiB0aGUgZmFjZWJvb2sgc2Vzc2lvbiBpcyBleHBpcmVkIGFuZCB0aGUgY2xpZW50IHdhaXRzIGZvciBGQiBvbiBwYWdlIHRvIGxvYWRcbiAgICBBUFBST1ZFRF9CWV9NT0RFUkFUT1IgPSA0MDMwMzEsIC8vIGNvbW1lbnRzIC0gY2FudCBmbGFnIGNvbW1lbnQsIGl0IHdhcyBhcHByb3ZlZCBieSB0aGUgbW9kZXJhdG9yIGFscmVhZHkuXG4gICAgVE9LRU5fSEFTX1JFTkVXRUQgPSA0MDMwMzIsIC8vIHRoZSB0b2tlbiBpcyBubyBsb25nZXIgdmFsaWQsIGJ1dCB3ZSBoYXZlIG5ldyB0b2tlbiB0byBwcm92aWRlXG4gICAgTk9fVVNFUl9DT09LSUUgPSA0MDMwMzUsIC8vIG5vIHVzZXIgY29va2llXG4gICAgVU5BVVRIT1JJWkVEX1BBUlRORVIgPSA0MDMwMzYsIC8vIHBhcnRuZXIgaXMgZGlzYWJsZWRcbiAgICBQT1NUX0RFTklFRCA9IDQwMzAzNywgLy8gQ29tbWVudHMgc2VydmVyIC0gUG9zdCBkZW5pZWQgd2hlbiB0aGUgdXNlciB0cmllZCB0byByZXZpZXcgdHdpY2UuXG4gICAgTk9fTE9HSU5fVElDS0VUID0gNDAzMDQwLCAvLyBubyBsb2dpbiB0aWNrZXQgaW4gY2FsbGJhY2sgdXJsXG4gICAgQUNDT1VOVF9ESVNBQkxFRCA9IDQwMzA0MSwgLy8gRm9yIGFjY291bnRzIC0gd2hlbiBncy5hY2NvdW50cy5Jc0FjdGl2ZT1mYWxzZVxuICAgIElOVkFMSURfTE9HSU5JRCA9IDQwMzA0MiwgLy8gRm9yIGFjY291bnRzIC0gd2hlbiB0cnlpbmcgdG8gbG9naW4gd2l0aCBhIGxvZ2luSUQgdGhhdCBkbyBub3QgZXhpc3RzXG4gICAgTE9HSU5fSURFTlRJRklFUl9FWElTVFMgPSA0MDMwNDMsIC8vIEZvciBhY2NvdW50OiBJZiBwcm92aWRlckVtYWlsIGlzIGRlZmluZWQgYXMgYSBsb2dpbklkZW50aWZpZXIgaW4gdGhlIHBvbGljeSwgYW5kIHRoZSBlbWFpbCBhZGRyZXNzIHJlY2VpdmVkIGZyb20gdGhlIHByb3ZpZGVyIGV4aXN0cyBpbiB0aGUgZ3MubG9naW5JZGVudGlmaWVycyBjb2xsZWN0aW9uIGJ1dCBhc3NvY2lhdGVkIHdpdGggYSBkaWZmZXJlbnQgVVVJRCB0aGFuIHRoZSBjdXJyZW50IHVzZXIsIHRoZW4gcmV0dXJuIFwiTG9naW4gaWRlbnRpZmllciBleGlzdHNcIiBlcnJvciBjb2RlICg0MDN4eHgpLlxuICAgIFVOREVSQUdFX1VTRVIgPSA0MDMwNDQsIC8vIEZvciBDT1BQQSBjb21wbGlhbmNlIChDaGlsZHJlbidzIE9ubGluZSBQcml2YWN5IFByb3RlY3Rpb24gQWN0KVxuICAgIElOVkFMSURfU0lURV9DT05GSUdVUkFUSU9OX0VSUk9SID0gNDAzMDQ1LCAvLyBGb3IgYWNjb3VudHMgLSBzaXRlIERTIGlzIGVuYWJsZWQgdGhvdWdoIG5vIERTU2l6ZSB3YXMgY29uZmlndXJlZC5cbiAgICBMT0dJTklEX0RPRVNfTk9UX0VYSVNUID0gNDAzMDQ3LCAvLyBGb3IgYWNjb3VudHMgLSB3aGVuIHRyeWluZyB0byByZXNldCBwYXNzd29yZCB3aXRoIGEgbG9naW5JRCB0aGF0IGRvIG5vdCBleGlzdHNcbiAgICBBUElfUkFURV9MSU1JVF9FWENFRURFRCA9IDQwMzA0OCxcbiAgICBQRU5ESU5HX1BBU1NXT1JEX0NIQU5HRSA9IDQwMzEwMCwgLy8gVGhlIHVzZXIncyBwYXNzd29yZCBuZWVkcyB0byBiZSBjaGFuZ2VkXG4gICAgQUNDT1VOVF9QRU5ESU5HX1RGQV9WRVJJRklDQVRJT04gPSA0MDMxMDEsXG4gICAgQUNDT1VOVF9QRU5ESU5HX1RGQV9SRUdJU1RSQVRJT04gPSA0MDMxMDIsXG4gICAgQUNDT1VOVF9QRU5ESU5HX1JFQ0VOVF9MT0dJTiA9IDQwMzExMCxcbiAgICBBQ0NPVU5UX1RFTVBPUkFSSUxZX0xPQ0tFRF9PVVQgPSA0MDMxMjAsIC8vIFRvbyBtYW55IGxvZ2luIGF0dGVtcHRzOyBhY2NvdW50IGxvY2tlZC1vdXRcbiAgICBSRURVTkRBTlRfT1BFUkFUSU9OID0gNDAzMjAwLCAvLyBUaGUgY2xpZW50IHBlcmZvcm1lZCBhbiBvcGVyYXRpb24gdGhhdCBpcyByZWR1bmRhbnRcbiAgICBJTlZBTElEX0FQUExJQ0FUSU9OX0lEID0gNDAzMjAxLCAvLyBUaGUgYXBwIGlkIHByb3ZpZGVkIGlzIGRpZmZlcmVudCB0aGFuIHRoZSBvbmUgY29uZmlndXJlZCBmb3IgdGhlIHNpdGVcbiAgICBOT1RfRk9VTkQgPSA0MDQwMDAsIC8vIENvbW1lbnRzIHNlcnZlciAtIENhdGVnb3J5IG5vdCBmb3VuZC4gQWNjb3VudHMgLSBlbWFpbCB2ZXJpZmljYXRpb24gZmFpbGVkLCB1dWlkIG5vdCBmb3VuZC5cbiAgICBGUklFTkRfTk9UX0ZPVU5EID0gNDA0MDAxLCAvLyB0aGUgdXNlciBpZCBwcm92aWRlZCBhcyBhIHRhcmdldCBpcyBub3QgYSBmcmllbmQgZm9yIHRoZSBjdXJyZW50IHVzZXJcbiAgICBDQVRFR09SWV9OT1RfRk9VTkQgPSA0MDQwMDIsIC8vIENvbW1lbnRzIHNlcnZlciAtIENhdGVnb3J5IG5vdCBmb3VuZC5cbiAgICBVSURfTk9UX0ZPVU5EID0gNDA0MDAzLFxuICAgIFJFU09VUkNFX05PVF9GT1VORCA9IDQwNDAwNCwgLy8gQ2xpZW50IHNpZGUgLSBpbWFnZSBub3QgZm91bmQgYWZ0ZXIgdXBsb2FkXG4gICAgSU5WQUxJRF9BUElfTUVUSE9EID0gNDA1MDAxLCAvLyBpbnRlcm5hbCBmb3Igb3VyIEpTIEFQSVxuICAgIElERU5USVRZX0VYSVNUUyA9IDQwOTAwMSwgLy8gd2hlbiB0cnlpbmcgdG8gY29ubmVjdCB0byBhIHByb3ZpZGVyIHRoYXQgaXMgYWxyZWFkeSBjb25uZWN0ZWQgb3IgbGluayB0byBhbiBhbHJlYWR5IGxpbmtlZCBhY2NvdW50XG4gICAgR09ORSA9IDQxMDAwMCwgLy8gUmVzb3VyY2Ugbm8gbG9uZ2VyIGF2YWlsYWJsZS4gRGF0YSBLZXkgU2VydmVyIC0ga2V5IHJldm9rZWQvZXhwaXJlZC5cbiAgICBSRVFVRVNUX0VOVElUWV9UT09fTEFSR0UgPSA0MTMwMDEsIC8vIENvbW1lbnRzIHNlcnZlciAtIFJlcXVlc3QgdG8gbGFyZ2VcbiAgICBDT01NRU5UX1RFWFRfVE9PX0xBUkdFID0gNDEzMDAyLCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBDb21tZW50IFRleHQgdG8gbGFyZ2UuXG4gICAgT0JKRUNUX1RPT19MQVJHRSA9IDQxMzAwMywgLy8gRGF0YVN0b3JlIG9iamVjdCBpcyB0b28gbGFyZ2VcbiAgICBQUk9GSUxFX1BIT1RPX1RPT19MQVJHRSA9IDQxMzAwNCwgLy8gUHJvZmlsZSBwaG90byBpcyB0b28gbGFyZ2UsIGV4Y2VlZHMgbWF4aW11bSBhbGxvd2VkIGNvbnRlbnQgbGVuZ3RoXG4gICAgUkVRVUVTVF9VUklfVE9PX0xPTkcgPSA0MTQwMDAsIC8vVGhlIFVSSSBwcm92aWRlZCB3YXMgdG9vIGxvbmcgZm9yIHRoZSBzZXJ2ZXIgdG8gcHJvY2Vzcy5cbiAgICBNSVNTSU5HX1VTRVJfUEhPVE8gPSA0MDkwMTAsIC8vIEVycm9yIC0gbWlzc2luZyB1c2VyIHBob3RvXG4gICAgQ09VTlRFUl9OT1RfUkVHSVNURVJFRCA9IDQwOTAxMSwgLy8gQ291bnRlciBub3QgcmVnaXN0ZXJlZFxuICAgIElOVkFMSURfR01JRF9USUNLRVQgPSA0MDkwMTIsIC8vIGdtaWQgdGlja2V0IGlzIG5vdCB2YWxpZFxuICAgIFNBTUxfTUFQUEVEX0FUVFJJQlVURV9OT1RfRk9VTkQgPSA0MDkwMTMsIC8vIFVzZWQgd2hlbiBtYXBwZWQgYXR0cmlidXRlIHZhbHVlIGZvciBwcm92aWRlclVJRCBjYW5ub3QgYmUgcmV0cmVpdmVkXG4gICAgU0FNTF9DRVJUSUZJQ0FURV9OT1RfRk9VTkQgPSA0MDkwMTQsIC8vIFVzZWQgd2hlbiBTQU1MIGNlcnRpZmljYXRlIGNvdWxkIG5vdCBiZSByZXRyZWl2ZWQuXG4gICAgU0FNTF9NRVNTQUdFX05PVF9GT1VORCA9IDQwOTAxNSwgLy8gVXNlZCB3aGVuIGNhY2hlZCBTQU1MIG1lc3NhZ2UgY291bGQgbm90IGJlIHJldHJlaXZlZC5cbiAgICBHRU5FUkFMX1NFUlZFUl9FUlJPUiA9IDUwMDAwMSxcbiAgICBTRVJWRVJfTE9HSU5fRVJST1IgPSA1MDAwMDIsIC8vIGdlbmVyYWwgZXJyb3IgZHVyaW5nIHRoZSBsb2dpbiBwcm9jZXNzXG4gICAgREVGQVVMVF9BUFBMSUNBVElPTl9DT05GSUdVUkFUSU9OX0VSUk9SID0gNTAwMDAzLCAvLyBGb3IgbXVsdGlwbGUgREMgLSB3aGVuIG5vIGRlZmF1bHQgYXBwbGljYXRpb24gY2FuIGJlIGZvdW5kIGluIERlZmF1bHRBcHBsaWNhdGlvbnMuY29uZmlnLiBXaXRoIGVycm9yIGRldGFpbHMgb2Y6IFwiRGVmYXVsdCBhcHBsaWNhdGlvbiBpc24ndCBjb25maWd1cmVkIGZvciBkYXRhQ2VudGVyXCJcbiAgICBTRVNTSU9OX01JR1JBVElPTl9FUlJPUiA9IDUwMDAxNCwgLy8gZXJyb3IgaW4gbWlncmF0aW5nIG9sZCB0byBuZXcgZmFjZWJvb2sgc2Vzc2lvblxuICAgIFBST1ZJREVSX0VSUk9SID0gNTAwMDIzLCAvLyBnZW5lcmFsIGVycm9yIGZyb20gdGhlIHByb3ZpZGVyXG4gICAgREFUQUJBU0VfRVJST1IgPSA1MDAwMjgsXG4gICAgVVNFUk5BTUVfUkVRVUlSRUQgPSA1MDAwMjksIC8vIElubmVyIGNvZGVcbiAgICBOT19QUk9WSURFUl9BUFBMSUNBVElPTiA9IDUwMDAzMSwgLy8gdGhlIGFwcGxpY2F0aW9uIGZvciB0aGlzIHByb3ZpZGVyIGlzIG5vdCBkZWZpbmVkIGZvciB0aGlzIHNpdGVcbiAgICBMT0FEX0ZBSUxFRCA9IDUwMDAzMiwgLy8gY2xpZW50IGVycm9yXG4gICAgSU5WQUxJRF9FTlZJUk9OTUVOVF9DT05GSUcgPSA1MDAwMzMsIC8vIEluIGNhc2UgdGhlcmUgaXMgbm8gdGFyZ2V0IGVudmlyb25tZW50IGluIHRoZSBjb25maWcgZmlsZSB3ZSdkIHJldHVybiB3aXRoICBpbnZhbGlkX2Vudmlyb25tZW50X2NvbmZpZyBlcnJvci5cbiAgICBFUlJPUl9EVVJJTkdfQkFDS0VORF9PUEVSQVRJT04gPSA1MDAwMzQsXG4gICAgVElNRU9VVCA9IDUwNDAwMSwgLy8gb3V0Z29pbmcgcmVxdWVzdCBoYWQgdGltZWQgb3V0XG4gICAgQ0xJRU5UVElNRU9VVCA9IDUwNDAwMiwgLy8gRm9yIHNlcnZlciBTREtzIC0gYSBjbGllbnQgc2lkZSB0aW1lb3V0XG4gICAgSU5WQUxJRF9VUkwgPSA0MDQwMDQsIC8vIGVtYmVkLmx5IDQwNCBlcnJvciBtZXNzYWdlIC0gdXJsIGlzIG5vdCB2YWxpZFxuICAgIE1FRElBX0lURU1TX05PVF9TVVBQT1JURUQgPSA0MDEwMDEsIC8vIE1lZGlhIGl0ZW1zIGEgbm90IGFsbG93ZWQgZm9yIHRoaXMgY2F0ZWdvcnlcbiAgICBNSVNTSU5HX0VSUk9SX0NPREUgPSA1OTk5OTksXG4gICAgVEhJU19BVVRIRU5USUNBVElPTl9NRVRIT0RfSVNfQ1VSUkVOVExZX0RJU0FCTEVEICA9IDQwMzMwMCxcbiAgICBGT1JDRV9MSU5LX0xPR0lOX0lERU5USUZJRVJfRVhJU1RTID0gNDA5MDAzLFxuICAgIFBBU1NLRVlfQVVUSEVOVElDQVRPUl9SRUdJU1RFUkVEID0gNDAwMTMwLFxuICAgIFBBU1NLRVlfQUJPUlRFRCA9IDQwMDEzMSxcbiAgICBQQVNTS0VZX0VSUk9SID0gNTAwMTMxXG59XG5leHBvcnQgY29uc3QgZW51bSBHU0Vycm9yRGV0YWlscyB7XG4gICAgTm9uZSA9IDAsXG4gICAgU2FtZV9wYXNzd29yZCA9IDEwMDAwMSwgLy8gUmVzZXQgUGFzc3dvcmQgLSBcIidvbGRQYXNzd29yZCcgY2Fubm90IGJlIHRoZSBzYW1lIGFzICduZXdQYXNzd29yZCdcIlxuICAgIEludmFsaWRfcGFzc3dvcmQgPSAxMDAwMDIsIC8vIFJlc2V0IFBhc3N3b3JkIC0gY3VycmVudCBwYXNzd29yZCBpcyB3cm9uZy9pbnZhbGlkXG4gICAgSW52YWxpZF9jb3VudGVyc19xdWVyeV93aXRoX2N1cnNvciA9IDEwMDAwMyxcbn1cbiIsIi8vIExvY2FsIGVudmlyb25tZW50IGluZm8gKGJyb3dzZXIsIGNhcGFiaWxpdGllcywgaG9zdGluZyBkb21haW4pXG5cbmRlY2xhcmUgY29uc3QgQWN0aXZlWE9iamVjdDogYW55O1xuXG52YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuZXhwb3J0IHZhciBsb2NhbEluZm8gPSB7XG4gICAgYmFzZURvbWFpbjogJycsIC8vIGNhbGN1bGF0ZWQgbGF0ZXIgb25cbiAgICBpc0Jyb3dzZXJTdXBwb3J0c0ZpbGVzQVBJOiAoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdHlwZW9mIEZpbGVSZWFkZXIgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIEZpbGVSZWFkZXIgPT09ICdvYmplY3QnO1xuICAgIH0pKCksXG4gICAgaW5pdFRpbWU6IG5ldyBEYXRlKCksXG4gICAgdmVyc2lvbjogMCwgLy9UT0RPXG4gICAgcGFnZURvbWFpbjogZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUsXG4gICAgcHJvdG9jb2w6IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sID09ICdodHRwOicgPyAnaHR0cCcgOiAnaHR0cHMnLFxuICAgIHVzZXJBZ2VudDogdXNlckFnZW50LFxuICAgIGlzV2luOiB1c2VyQWdlbnQuaW5kZXhPZignd2luJykgIT0gLTEsXG4gICAgaXNJRTogdXNlckFnZW50LmluZGV4T2YoJ21zaWUnKSAhPSAtMSB8fCAodXNlckFnZW50LmluZGV4T2YoJ21vemlsbGEnKSAhPSAtMSAmJiB1c2VyQWdlbnQuaW5kZXhPZigndHJpZGVudCcpICE9IC0xKSxcbiAgICBpc0lFNjogdXNlckFnZW50LmluZGV4T2YoJ21zaWUgNi4nKSAhPSAtMSxcbiAgICBpc0lFNzogdXNlckFnZW50LmluZGV4T2YoJ21zaWUgNy4nKSAhPSAtMSxcbiAgICBpc0lFODogdXNlckFnZW50LmluZGV4T2YoJ21zaWUgOC4nKSAhPSAtMSxcbiAgICBpc0lFOTogdXNlckFnZW50LmluZGV4T2YoJ21zaWUgOS4nKSAhPSAtMSxcbiAgICBpc0lFMTA6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llIDEwLicpICE9IC0xLFxuICAgIGlzSUUxMTogdXNlckFnZW50LmluZGV4T2YoJ21vemlsbGEnKSAhPSAtMSAmJiB1c2VyQWdlbnQuaW5kZXhPZigndHJpZGVudC83LjAnKSAhPSAtMSxcbiAgICBpc0VkZ2VMZWdhY3k6IHVzZXJBZ2VudC5pbmRleE9mKCdlZGdlJykgIT0gLTEsXG4gICAgaXNFZGdlOiBSZWdFeHAoL2VkZyg/IWUpLykudGVzdCh1c2VyQWdlbnQpLFxuICAgIGlzSU9TOiB1c2VyQWdlbnQuaW5kZXhPZignaXBob25lJykgIT0gLTEgfHwgdXNlckFnZW50LmluZGV4T2YoJ2lwYWQnKSAhPSAtMSB8fCB1c2VyQWdlbnQuaW5kZXhPZignaXBvZCcpICE9IC0xLFxuICAgIGlzU2FmYXJpNTM0OiB1c2VyQWdlbnQuaW5kZXhPZignc2FmYXJpLzUzNCcpICE9IC0xLFxuICAgIGlzV2VDaGF0OiB1c2VyQWdlbnQuaW5kZXhPZignbWljcm9tZXNzZW5nZXInKSAhPSAtMSxcbiAgICBpb3NWZXJzaW9uOiAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignYXBwbGV3ZWJraXQnKSAhPSAtMSAmJiB1c2VyQWdlbnQuaW5kZXhPZigndmVyc2lvbi8nKSAhPSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHVzZXJBZ2VudC5zcGxpdCgndmVyc2lvbi8nKVsxXS5zcGxpdCgnICcpWzBdKTtcbiAgICAgICAgfSBlbHNlIHJldHVybiAwO1xuICAgIH0pKCksXG4gICAgaXNBbmRyb2lkOiB1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCcpICE9IC0xLFxuICAgIGlzQW5kcm9pZEJyb3dzZXI6ICh1c2VyQWdlbnQgPT4ge1xuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ21vemlsbGEvNS4wJykgPT09IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCA0JykgPT09IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignYXBwbGV3ZWJraXQnKSA9PT0gLTEpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ3dpbmRvd3MgcGhvbmUnKSAhPT0gLTEpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAvLyBTcGVjaWFsIHVzZXIgYWdlbnRzIGZvdW5kIHNvIGZhciB0aGF0IHZpb2xhdGUgdGhlIGV4aXN0YW5jZSBvZiBjaHJvbWUgcnVsZVxuICAgICAgICAvLyBCdWcgMzgzNjcgQW5kcm9pZCBCcm93c2VyOiBNb3ppbGxhLzUuMCAoTGludXg7IEFuZHJvaWQgNC4yLjI7IGVuLXVzOyBTQU1TVU5HIEdULUk5NTAwIEJ1aWxkL0pEUTM5KSBBcHBsZVdlYktpdC81MzUuMTkgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzEuMCBDaHJvbWUvMTguMC4xMDI1LjMwOCBNb2JpbGUgU2FmYXJpLzUzNS4xOVxuICAgICAgICAvLyBCdWcgNDAyMDkgQ2hyb21lIEJyb3dzZXI6IE1vemlsbGEvNS4wIChMaW51eDsgQW5kcm9pZCA0LjIuMjsgU0FNU1VORyBTR1QtSTc0NyBCdWlsZC9LT1Q0OUgpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8zOS4wLjIxNzEuOTMgTW9iaWxlIFNhZmFyaS81MzcuMzZcbiAgICAgICAgLy8gV2luZG93cyBQaG9uZSBCcm93c2VyOiBNb3ppbGxhLzUuMCAoTW9iaWxlOyBXaW5kb3dzIFBob25lIDguMTsgQW5kcm9pZCA0LjA7IEFSTTsgVHJpZGVudC83LjA7IFRvdWNoOyBydjoxMS4wOyBJRU1vYmlsZS8xMS4wOyBOT0tJQTsgTHVtaWEgOTIwKSBsaWtlIGlQaG9uZSBPUyA3XzBfMyBNYWMgT1MgWCBBcHBsZVdlYktpdC81MzcgKEtIVE1MLCBsaWtlIEdlY2tvKSBNb2JpbGUgU2FmYXJpLzUzN1xuICAgICAgICAvLyBDaHJvbWUgQnJvd3NlcjogTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDQuMi4yOyBlbi1nYjsgU0FNU1VORyBHVC1JOTUwMCBCdWlsZC9LT1Q0OUgpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vMS41IENocm9tZS8yOC4wLjE1MDAuOTQgTW9iaWxlIFNhZmFyaS81MzcuMzZcblxuICAgICAgICB2YXIgY2hyb21lSW5mbyA9IC9jaHJvbWVcXC8oXFxkKykvLmV4ZWModXNlckFnZW50KTtcblxuICAgICAgICBpZiAoIWNocm9tZUluZm8pIHJldHVybiB0cnVlO1xuXG4gICAgICAgIHZhciBjaHJvbWVWZXJzaW9uID0gcGFyc2VJbnQoY2hyb21lSW5mb1sxXSk7XG5cbiAgICAgICAgcmV0dXJuIGNocm9tZVZlcnNpb24gPCAyMDtcbiAgICB9KSh1c2VyQWdlbnQpLFxuICAgIGN1cnJlbnRCcm93c2VyOiAnJyxcbiAgICBhbmRyb2lkVmVyc2lvbjogKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ2FuZHJvaWQnKSAhPSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodXNlckFnZW50LnNsaWNlKHVzZXJBZ2VudC5pbmRleE9mKCdhbmRyb2lkJykgKyA4KSk7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gMDtcbiAgICB9KSgpLFxuICAgIGlzQ2hyb21lOiB1c2VyQWdlbnQuaW5kZXhPZignY2hyb21lJykgIT0gLTEgJiYgdXNlckFnZW50LmluZGV4T2YoJ2VkZycpID09IC0xLCAvLyBlZGdlIGJyb3dzZXIgYWxzbyB1c2VzIENocm9tZSBpbiBpdHMgVUEgc3RyaW5nLlxuICAgIGlzR29vZ2xlQm90OiB1c2VyQWdlbnQuaW5kZXhPZignZ29vZ2xlYm90JykgIT0gLTEsXG4gICAgaXNGRjogdXNlckFnZW50LmluZGV4T2YoJ2ZpcmVmb3gnKSAhPSAtMSxcbiAgICBpc09wZXJhOiB1c2VyQWdlbnQuaW5kZXhPZignb3BlcmEnKSAhPSAtMSxcbiAgICBpc1NhZmFyaTpcbiAgICAgICAgbmF2aWdhdG9yLmFwcFZlcnNpb24gJiZcbiAgICAgICAgbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzYWZhcmknKSAhPSAtMSAmJlxuICAgICAgICBuYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2Nocm9tZScpID09IC0xICYmXG4gICAgICAgIHVzZXJBZ2VudC5pbmRleE9mKCdhbmRyb2lkJykgPT0gLTEsXG4gICAgaXNJT1NXZWJWaWV3OiAvKGlQaG9uZXxpUG9kfGlQYWQpLipBcHBsZVdlYktpdCg/IS4qU2FmYXJpKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksXG4gICAgaXNJT1NDaHJvbWU6IHVzZXJBZ2VudC5pbmRleE9mKCdjcmlvcycpICE9IC0xLFxuICAgIGlzTUFDOiBuYXZpZ2F0b3IuYXBwVmVyc2lvbiAmJiBuYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ21hYycpICE9IC0xLFxuICAgIGlzV2luZG93c1Bob25lOiB1c2VyQWdlbnQuaW5kZXhPZignd2luZG93cyBwaG9uZScpICE9IC0xLFxuICAgIGlzRmFjZWJvb2tCcm93c2VyOiB1c2VyQWdlbnQuaW5kZXhPZignZmJhbicpICE9IC0xIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdmYmF2JykgIT0gLTEsXG4gICAgc3VwcG9ydHNQb3N0TWVzc2FnZTogd2luZG93LnBvc3RNZXNzYWdlICE9IG51bGwgJiYgKHVzZXJBZ2VudC5pbmRleE9mKCdtc2llJykgPT0gLTEgfHwgdXNlckFnZW50LmluZGV4T2YoJ2llbW9iaWxlJykgIT0gLTEpLFxuICAgIHN1cHBvcnRzTG9jYWxTdG9yYWdlOiBmYWxzZSxcbiAgICBzdXBwb3J0c1Nlc3Npb25TdG9yYWdlOiBmYWxzZSxcbiAgICBzdXBwb3J0c0ZsYXNoOiAoKCkgPT4ge1xuICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzk5ODI0NS9ob3ctY2FuLWktZGV0ZWN0LWlmLWZsYXNoLWlzLWluc3RhbGxlZC1hbmQtaWYtbm90LWRpc3BsYXktYS1oaWRkZW4tZGl2LXRoYXQtaW5mXG4gICAgICAgIGxldCBzdXBwb3J0c0ZsYXNoID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLm1pbWVUeXBlcyAmJlxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5taW1lVHlwZXNbJ2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJ10gIT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLm1pbWVUeXBlc1snYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnXS5lbmFibGVkUGx1Z2luXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0c0ZsYXNoID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZm8gPSBuZXcgQWN0aXZlWE9iamVjdCgnU2hvY2t3YXZlRmxhc2guU2hvY2t3YXZlRmxhc2gnKTtcbiAgICAgICAgICAgICAgICBpZiAoZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydHNGbGFzaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICByZXR1cm4gc3VwcG9ydHNGbGFzaDtcbiAgICB9KSgpLFxuICAgIHF1aXJrc01vZGU6IGRvY3VtZW50LmNvbXBhdE1vZGUgPT0gJ0JhY2tDb21wYXQnICYmIHVzZXJBZ2VudC5pbmRleE9mKCdtc2llJykgIT0gLTEsXG4gICAgYmFja0NvbXBhdDogZG9jdW1lbnQuY29tcGF0TW9kZSA9PSAnQmFja0NvbXBhdCcsXG4gICAgLy8gVE9ETzogQWRkIGlzVGFibGV0IGZ1bmN0aW9uIGZvciBkZXZpY2VzIG5vbi1Nb2JpbGVcbiAgICBpc01vYmlsZTogKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbW9iaWxlQ2xpZW50cyA9IFtcbiAgICAgICAgICAgICdpcGhvbmUnLFxuICAgICAgICAgICAgJ2lwb2QnLFxuICAgICAgICAgICAgJ2FuZHJvaWQnLFxuICAgICAgICAgICAgJ21pZHAnLFxuICAgICAgICAgICAgJzI0MHgzMjAnLFxuICAgICAgICAgICAgJ2JsYWNrYmVycnknLFxuICAgICAgICAgICAgJ25ldGZyb250JyxcbiAgICAgICAgICAgICdub2tpYScsXG4gICAgICAgICAgICAncGFuYXNvbmljJyxcbiAgICAgICAgICAgICdwb3J0YWxtbW0nLFxuICAgICAgICAgICAgJ3NoYXJwJyxcbiAgICAgICAgICAgICdzaWUtJyxcbiAgICAgICAgICAgICdzb255ZXJpY3Nzb24nLFxuICAgICAgICAgICAgJ3N5bWJpYW4nLFxuICAgICAgICAgICAgJ3dpbmRvd3MgY2UnLFxuICAgICAgICAgICAgJ2JlbnEnLFxuICAgICAgICAgICAgJ21kYScsXG4gICAgICAgICAgICAnbW90LScsXG4gICAgICAgICAgICAnb3BlcmEgbWluaScsXG4gICAgICAgICAgICAncGhpbGlwcycsXG4gICAgICAgICAgICAncG9ja2V0IHBjJyxcbiAgICAgICAgICAgICdzYWdlbScsXG4gICAgICAgICAgICAnc2Ftc3VuZycsXG4gICAgICAgICAgICAnaHRjJyxcbiAgICAgICAgXTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBtb2JpbGVDbGllbnRzKSB7XG4gICAgICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YobW9iaWxlQ2xpZW50c1tpXSkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSkoKSxcbiAgICBpc01vYmlsZUFwcDogKCgpID0+IHtcbiAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSlcbiAgICAgICAgICAgIC8vIGZvciBvbGQgSUVcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICB2YXIgbWV0YVRhZ3M6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21ldGEnKSBhcyBhbnk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXRhVGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG1ldGFUYWdzW2ldLmdldEF0dHJpYnV0ZSgnbmFtZScpID09ICd2aWV3cG9ydCcpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IG1ldGFUYWdzW2ldLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgJiYgY29udGVudC5pbmRleE9mKCd3aWR0aD1kZXZpY2Utd2lkdGgnKSAhPT0gLTEpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pKCksXG4gICAgaXNOYXRpdmVNb2JpbGVBcHA6IGZhbHNlLCAvLyB3aWxsIGNoYW5nZSBpZiBtb2JpbGUgYWRhcHRlciB3aWxsIGxvYWQgW2luIGl0cyAnaW5pdCcgbWV0aG9kXS5cbiAgICBpc1RvdWNoOiAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpXG4gICAgICAgICAgICAvLyB3b3JrcyBvbiBtb3N0IGJyb3dzZXJzXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICBpZiAoJ29ubXNnZXN0dXJlY2hhbmdlJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIC8vIHdvcmtzIG9uIGllMTBcbiAgICAgICAgICAgIC8vIFRyeSB0byBkZXRlcm1pbmUgaWYgSUUgaXMgb3BlbiBpbiBtZXRybyBtb2RlLiBNZXRybyBkb2Vzbid0IGFsbG93IGFjdGl2ZVgsIHRoYXQncyB0aGUgYmVzdCB0ZXN0IGF2YWlsYWJsZSBhcyBvZiBJRTExLlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBuZXcgQWN0aXZlWE9iamVjdCgnaHRtbGZpbGUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSkoKSxcbiAgICBpc09uTGluZTogKCkgPT4gbmF2aWdhdG9yLm9uTGluZSxcbiAgICBtZXNzYWdpbmdNZXRob2Q6IDFcbn07XG5jb25zdCBpc1N0b3JhZ2VFbmFibGVkID0gKHN0b3JhZ2VOYW1lOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gd2luZG93W3N0b3JhZ2VOYW1lXTtcbiAgICAgICAgaWYgKCFzdG9yYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0ZXN0TmFtZSA9ICdfZ2lnX2xvY2FsU3RvcmFnZV90ZXN0JztcbiAgICAgICAgY29uc3QgdGVzdFZhbHVlID0gJ2p1c3QgY2hlY2tpbmcgZm9yIGxvY2FsU3RvcmFnZSc7XG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh0ZXN0TmFtZSwgdGVzdFZhbHVlKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3RvcmFnZS5nZXRJdGVtKHRlc3ROYW1lKSA9PT0gdGVzdFZhbHVlO1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0odGVzdE5hbWUpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIC8vIFJlYXNvbnM6XG4gICAgICAgIC8vIC0gSW5zaWRlIDNyZCBwYXJ0eSBBUEkgcHJveHkgaUZyYW1lLlxuICAgICAgICAvLyAtIFNhZmFyaSBpbiBpbmNvZ25pdG8gbW9kZSB3aWxsIGVycm9yIHdpdGggXCJxdW90YSBleGNlZWRlZFwiLlxuICAgICAgICAvLyAtIENocm9tZSB3aXRoIDNyZCBwYXJ0eSBjb29raWVzIGRpc2FibGVkIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgeW91IGFjY2VzcyB0aGUgd2luZG93LmxvY2FsU3RvcmFnZSBvYmplY3QgaW4gQU5ZIHdheS5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG5sb2NhbEluZm8uc3VwcG9ydHNMb2NhbFN0b3JhZ2UgPSBpc1N0b3JhZ2VFbmFibGVkKCdsb2NhbFN0b3JhZ2UnKTtcbmxvY2FsSW5mby5zdXBwb3J0c1Nlc3Npb25TdG9yYWdlID0gaXNTdG9yYWdlRW5hYmxlZCgnc2Vzc2lvblN0b3JhZ2UnKTtcbmxvY2FsSW5mby5pc01BQyA9IGxvY2FsSW5mby5pc01BQyAmJiAhbG9jYWxJbmZvLmlzSU9TO1xudmFyIG9zID0gbG9jYWxJbmZvLmlzV2luXG4gICAgPyAnd2luZG93cydcbiAgICA6IGxvY2FsSW5mby5pc1dpbmRvd3NQaG9uZVxuICAgICAgICA/ICd3aW5waG9uZSdcbiAgICAgICAgOiBsb2NhbEluZm8uaXNJT1NcbiAgICAgICAgICAgID8gJ2lvcy12JyArIGxvY2FsSW5mby5pb3NWZXJzaW9uXG4gICAgICAgICAgICA6IGxvY2FsSW5mby5pc01BQ1xuICAgICAgICAgICAgICAgID8gJ21hYydcbiAgICAgICAgICAgICAgICA6IGxvY2FsSW5mby5pc0FuZHJvaWRcbiAgICAgICAgICAgICAgICAgICAgPyAnYW5kcm9pZCdcbiAgICAgICAgICAgICAgICAgICAgOiAnJztcbmlmIChvcykgb3MgKz0gJyAnO1xudmFyIGJyb3dzZXIgPSBsb2NhbEluZm8uaXNDaHJvbWVcbiAgICA/ICdjaHJvbWUnXG4gICAgOiBsb2NhbEluZm8uaXNGRlxuICAgICAgICA/ICdmaXJlZm94J1xuICAgICAgICA6IGxvY2FsSW5mby5pc1NhZmFyaVxuICAgICAgICAgICAgPyAnc2FmYXJpJ1xuICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNFZGdlXG4gICAgICAgICAgICAgICAgPyAnZWRnZSdcbiAgICAgICAgICAgIDogbG9jYWxJbmZvLmlzRWRnZUxlZ2FjeVxuICAgICAgICAgICAgICAgID8gJ2VkZ2UgbGVnYWN5J1xuICAgICAgICAgICAgICAgIDogbG9jYWxJbmZvLmlzSUUxMVxuICAgICAgICAgICAgICAgICAgICA/ICdpZTExJ1xuICAgICAgICAgICAgICAgICAgICA6IGxvY2FsSW5mby5pc0lFMTBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2llMTAnXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGxvY2FsSW5mby5pc0lFOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2llOSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxvY2FsSW5mby5pc0lFOFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdpZTgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyc7XG5sb2NhbEluZm8uY3VycmVudEJyb3dzZXIgPSBvcyArIGJyb3dzZXI7XG5cbnR5cGUgQmF0dGVyeUluZm8gPSB7XG4gICAgY2hhcmdpbmc6IGJvb2xlYW47XG4gICAgY2hhcmdpbmdUaW1lOiBudW1iZXI7XG4gICAgZGlzY2hhcmdpbmdUaW1lOiBudW1iZXI7XG4gICAgbGV2ZWw6IG51bWJlcjtcbn07XG50eXBlIFBsdWdpbiA9IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZmlsZW5hbWU6IHN0cmluZztcbiAgICBsZW5ndGg6IG51bWJlcjtcbn07XG5leHBvcnQgY2xhc3MgQ2xpZW50RmVhdHVyZSB7XG4gICAgcHVibGljIHVzZXJBZ2VudD86IHN0cmluZztcbiAgICBwdWJsaWMgcGx1Z2lucz86IFBsdWdpbltdO1xuICAgIHB1YmxpYyBsb2NhbFRpbWU/OiBzdHJpbmc7XG4gICAgcHVibGljIHRpbWV6b25lT2Zmc2V0PzogbnVtYmVyO1xuICAgIHB1YmxpYyBwZXJtaXNzaW9uU3RhdHVzPzogeyBzdGF0ZTogc3RyaW5nIH07XG4gICAgcHVibGljIHdlYmRyaXZlcj86IGJvb2xlYW47XG4gICAgcHVibGljIGJhdHRlcnlJbmZvPzogQmF0dGVyeUluZm87XG4gICAgcHVibGljIGZlYXR1cmVzPzogW251bWJlciwgc3RyaW5nLCBib29sZWFuLCBib29sZWFuXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF2aWdhdG9yOiBOYXZpZ2F0b3IgPSBnaWd5YS5fLldpbmRvd1Byb3ZpZGVyLm5hdmlnYXRvcigpLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgc2NyZWVuOiBTY3JlZW4gPSBnaWd5YS5fLldpbmRvd1Byb3ZpZGVyLnNjcmVlbigpKSB7XG4gICAgICAgIHRoaXMuY29sbGVjdERhdGEoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGNvbGxlY3REYXRhKCkge1xuICAgICAgICB0aGlzLnVzZXJBZ2VudCA9IHRoaXMubmF2aWdhdG9yPy51c2VyQWdlbnQ7XG4gICAgICAgIHRoaXMucGx1Z2lucyA9IEFycmF5LmZyb20odGhpcy5uYXZpZ2F0b3I/LnBsdWdpbnMgfHwgW10pLm1hcCgoe25hbWUsIGZpbGVuYW1lLCBsZW5ndGh9KSA9PiAoeyBuYW1lLCBmaWxlbmFtZSwgbGVuZ3RoIH0pKTtcbiAgICAgICAgdGhpcy5sb2NhbFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgICAgICB0aGlzLnRpbWV6b25lT2Zmc2V0ID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgICAgICBjb25zdCBwZXJtaXNzaW9uU3RhdHVzID0gYXdhaXQgdGhpcy5uYXZpZ2F0b3I/LnBlcm1pc3Npb25zPy5xdWVyeSh7IG5hbWU6J25vdGlmaWNhdGlvbnMnIH0pO1xuICAgICAgICBpZiAocGVybWlzc2lvblN0YXR1cykge1xuICAgICAgICAgICAgY29uc3Qge3N0YXRlfSA9IHBlcm1pc3Npb25TdGF0dXM7XG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25TdGF0dXMgPSB7c3RhdGV9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud2ViZHJpdmVyID0gdGhpcy5uYXZpZ2F0b3I/LndlYmRyaXZlcjtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBiYXR0ZXJ5SW5mbyA9IHRoaXMubmF2aWdhdG9yLmdldEJhdHRlcnkgJiYgYXdhaXQgdGhpcy5uYXZpZ2F0b3IuZ2V0QmF0dGVyeSgpO1xuICAgICAgICBpZiAoYmF0dGVyeUluZm8pIHtcbiAgICAgICAgICAgIGNvbnN0IHtjaGFyZ2luZywgY2hhcmdpbmdUaW1lLCBkaXNjaGFyZ2luZ1RpbWUsIGxldmVsfSA9IGJhdHRlcnlJbmZvO1xuICAgICAgICAgICAgdGhpcy5iYXR0ZXJ5SW5mbyA9IHtjaGFyZ2luZywgY2hhcmdpbmdUaW1lLCBkaXNjaGFyZ2luZ1RpbWUsIGxldmVsfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZlYXR1cmVzID0gW1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0b3I/Lm1heFRvdWNoUG9pbnRzIHx8IHRoaXMubmF2aWdhdG9yPy5tc01heFRvdWNoUG9pbnRzLFxuICAgICAgICAgICAgYCR7dGhpcy5zY3JlZW4ud2lkdGh9fCR7dGhpcy5zY3JlZW4uaGVpZ2h0fXwke3RoaXMuc2NyZWVuLmNvbG9yRGVwdGh9YCxcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdG9yLmphdmFFbmFibGVkKCksXG4gICAgICAgICAgICAnc2VuZEJlYWNvbicgaW4gdGhpcy5uYXZpZ2F0b3JcbiAgICAgICAgXTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRmxhZ1NlcnZpY2Uge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGZvcmNlV2ViU2RrQm9vdHN0cmFwKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2ZvcmNlV2ViU2RrQm9vdHN0cmFwJyk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHVzZUdpZ3lhSnNCYXNlRG9tYWluKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3VzZUdpZ3lhSnNCYXNlRG9tYWluJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaGlkZVNTT0ZyYW1lKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2hpZGVTU09GcmFtZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHdjYWdDb250cmFzdEZpeCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd3Y2FnQ29udHJhc3RGaXgnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBuZXdGb3JtTGlua0luc3RhbmNlRWxlbWVudCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCduZXdGb3JtTGlua0luc3RhbmNlRWxlbWVudCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHN0b3BTZW5kaW5nUmVwb3J0cygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdzdG9wU2VuZGluZ1JlcG9ydHMnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBzZXRHcm91cEFwaURvbWFpbkFmdGVyTG9naW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnc2V0R3JvdXBBcGlEb21haW5BZnRlckxvZ2luJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdXNlSHR0cFN0YXR1c0NvZGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgndXNlSHR0cFN0YXR1c0NvZGUnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBhbHdheXNDaGVja0Nvb2tpZVNhdmUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnYWx3YXlzQ2hlY2tDb29raWVTYXZlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgZml4UGhvbmVURkFUcmFuc2xhdGlvbnMoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnZml4UGhvbmVURkFUcmFuc2xhdGlvbnMnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBsb2FkU3NvRnJhbWVPbmx5T25jZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdsb2FkU3NvRnJhbWVPbmx5T25jZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHZlcmlmeUxvZ2luT25seU9uY2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgndmVyaWZ5TG9naW5Pbmx5T25jZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNlbmRMYW5nRm9yRW1haWxPVFAoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnc2VuZExhbmdGb3JFbWFpbE9UUCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNldFByb3ZpZGVyRnJvbVJlc3BvbnNlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3NldFByb3ZpZGVyRnJvbVJlc3BvbnNlJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc2V0Q29va2llU2FtZVNpdGVMYXhTZXNzaW9uKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3NldENvb2tpZVNhbWVTaXRlTGF4U2Vzc2lvbicpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNldENvb2tpZVNhbWVTaXRlTGF4U29jaWFsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3NldENvb2tpZVNhbWVTaXRlTGF4U29jaWFsJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc2V0Q29va2llU2FtZVNpdGVMYXhMb3dQcmlvcml0eSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdzZXRDb29raWVTYW1lU2l0ZUxheExvd1ByaW9yaXR5Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgZm9yY2VFcnJvclJlcG9ydCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdmb3JjZUVycm9yUmVwb3J0Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc2tpcFNhbWVTY3JlZW5DaGVja09uU3dpdGNoKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3NraXBTYW1lU2NyZWVuQ2hlY2tPblN3aXRjaCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGdldE9ubHlWaXNpYmxlRmllbGQgKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2dldE9ubHlWaXNpYmxlRmllbGQnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCB1cGRhdGVBY2NvdW50SW5mb0FzeW5jICgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd1cGRhdGVBY2NvdW50SW5mb0FzeW5jJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc2FuaXRpemVFdmFsdWF0ZWRWYWx1ZSAoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoJ3Nhbml0aXplRXZhbHVhdGVkVmFsdWUnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCB1c2VTZXNzaW9uVmVyaWZ5ICgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd1c2VTZXNzaW9uVmVyaWZ5Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdXNlRXh0ZW5kZWRQaG9uZU51bWJlclJlZ2V4ICgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd1c2VFeHRlbmRlZFBob25lTnVtYmVyUmVnZXgnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBnZW5lcmF0ZU5ld0NvZGVXY2FnQ29tcGxpYW5jZSAoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnZ2VuZXJhdGVOZXdDb2RlV2NhZ0NvbXBsaWFuY2UnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBlbmZvcmNlQXV0aEZsb3dSZWRpcmVjdEZvclNvY2lhbCAoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnZW5mb3JjZUF1dGhGbG93UmVkaXJlY3RGb3JTb2NpYWwnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCB1c2VEZWNvZGVVUklDb21wb25lbnQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgndXNlRGVjb2RlVVJJQ29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdXNlT2lkY0dldFBhcmFtSGFzaE9sZFN0eWxlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3VzZU9pZGNHZXRQYXJhbUhhc2hPbGRTdHlsZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHVzZVZpZXdwb3J0UG9sbGVyQWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ3VzZVZpZXdwb3J0UG9sbGVyQWN0aW9uJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaWdub3JlSW50ZXJydXB0aW9uc0luT2lkY1Bhc3NpdmVMb2dpbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCdpZ25vcmVJbnRlcnJ1cHRpb25zSW5PaWRjUGFzc2l2ZUxvZ2luJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgb3ZlcnJpZGVBbGxDaGlsZENvbnRleHQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgnb3ZlcnJpZGVBbGxDaGlsZENvbnRleHQnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBkaXNwYXRjaExvZ2luRXZlbnRXaGVuSGFuZGxlckFkZGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoJ2Rpc3BhdGNoTG9naW5FdmVudFdoZW5IYW5kbGVyQWRkZWQnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIChnaWd5YS5fLmNvbmZpZz8uZmxhZ3MgJiYgZ2lneWEuXy5jb25maWc/LmZsYWdzW25hbWVdKSB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBFdmVyeSBmbGFnIHRoYXQgaXMgYXNzb2NpYXRlZCB3aXRoIGRhdGEgbW9kaWZpY2F0aW9uIHJlbGF0ZWQgdG8gdGhlIGFwaSBsYXllclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGFwaUZsYWdzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGxvY2FsSW5mbyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2NhbEluZm8nO1xuaW1wb3J0ICogYXMgdmlld3BvcnRVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvdmlld3BvcnQnO1xuaW1wb3J0ICogYXMgZnVuY3Rpb25zVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2Z1bmN0aW9ucyc7XG5cbmV4cG9ydCB2YXIgX3BvcHVwQ29udGFpbmVycyA9IFtdO1xuZXhwb3J0IHZhciBfcHNldWRvQ29udGFpbmVycyA9IFtdO1xubGV0IF9uZXh0WkluZGV4ID0gOTk5OTk5OTk5O1xudmFyIGJhY2tMaXN0ZW5lciA9IG51bGw7XG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dFpJbmRleCgpIHtcbiAgICBfbmV4dFpJbmRleCsrO1xuICAgIHJldHVybiBfbmV4dFpJbmRleDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRHaWd5YVNjcmlwdEVsZW1lbnQoZmlsZU5hbWVzOiBzdHJpbmdbXSk6IEhUTUxTY3JpcHRFbGVtZW50IHtcbiAgICB2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcbiAgICB2YXIgc2NyaXB0RWxlbWVudDogSFRNTFNjcmlwdEVsZW1lbnQ7XG4gICAgdmFyIGdpZ3lhQ2RuUmVnZXggPSAvXFwvXFwvY2RuKHMpP1xcLihydTFcXC4pP2dpZ3lhLmNvbS87XG4gICAgZm9yICh2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdmFyIHNjcmlwdCA9IHNjcmlwdHNbaV07XG4gICAgICAgIHZhciBzcmMgPSBzY3JpcHQuc3JjLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChzcmMgIT09ICcnKSB7XG4gICAgICAgICAgICBpZiAoZ2lneWFDZG5SZWdleC50ZXN0KHNyYykgfHwgc3JjLmluZGV4T2YoJz9hcGlrZXk9JykgPiAtMSkge1xuICAgICAgICAgICAgICAgIHZhciBpc0ZpbGVOYW1lRXhpc3RJblNyYyA9IGZpbGVOYW1lcy5sZW5ndGggPT09IDAgfHwgZmlsZU5hbWVzLnNvbWUoZmlsZU5hbWUgPT4gc3JjLmluZGV4T2YoZmlsZU5hbWUpID4gLTEpO1xuICAgICAgICAgICAgICAgIGlmIChpc0ZpbGVOYW1lRXhpc3RJblNyYykge1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHRFbGVtZW50ID0gc2NyaXB0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNjcmlwdEVsZW1lbnQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2goZWw6IEhUTUxFbGVtZW50LCBldmVudE5hbWU6IHN0cmluZykge1xuICAgIHZhciBldmVudDtcblxuICAgIHRyeSB7XG4gICAgICAgIGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50TmFtZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBJRTEwIGFuZCBiZWxvdyBzdXBwb3J0XG4gICAgICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICAgIGV2ZW50LmluaXRDdXN0b21FdmVudChldmVudE5hbWUsIHRydWUsIHRydWUsIHt9KTtcbiAgICB9XG5cbiAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRCdXR0b25TdWJtaXRMaXN0ZW5lcihlbDogSFRNTEVsZW1lbnQsIGhhbmRsZXI6IEZ1bmN0aW9uLCBldmVudDogJ2NsaWNrJyB8ICd0b3VjaGVuZCcgPSAnY2xpY2snLCBkZWJ1Z05hbWU/OiBzdHJpbmcpIHtcbiAgICAvLyBKdXN0IGluIGNhc2UgdGhlIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QuXG4gICAgaWYgKCFlbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWwuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xuICAgIGlmIChlbC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgIT0gJy0xJykge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICB9XG4gICAgYWRkRXZlbnRMaXN0ZW5lcihlbCwgZXZlbnQsIChlOiBNb3VzZUV2ZW50KSA9PiBoYW5kbGVyKGUpKTtcbiAgICBhZGRFdmVudExpc3RlbmVyKGVsLCAna2V5ZG93bicsIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgIGlmICgoZS53aGljaCB8fCBlLmtleUNvZGUpID09IDEzKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBoYW5kbGVyKGUpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoZWw6IGFueSwgZXZlbnROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgaWYgKCFlbCB8fCAhaGFuZGxlcikgcmV0dXJuO1xuXG4gICAgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEFjdGl2YXRpb25IYW5kbGVyKGVsOkhUTUxFbGVtZW50LCBoYW5kbGVyOkZ1bmN0aW9uKTogdm9pZHtcbiAgICBpZiAoIWVsIHx8ICFoYW5kbGVyKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGVsLCAna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdTcGFjZScgfHwgZXZlbnQuY29kZSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihlbCwgJ2NsaWNrJywgaGFuZGxlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKGVsOiBhbnksIGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGlmICghZWwgfHwgIWhhbmRsZXIpIHJldHVybjtcbiAgICBpZiAoZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWwuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVEZWZhdWx0RXZlbnRIYW5kbGluZyhldmVudCkge1xuICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSBpZiAod2luZG93LmV2ZW50KSB7XG4gICAgICAgIHdpbmRvdy5ldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGREaWFsb2dCYWNrTGlzdGVuZXIoaGFuZGxlcjogKGU6IEV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgX3JlbW92ZURpYWxvZ0JhY2tMaXN0ZW5lcigpO1xuXG4gICAgLy8gVGhpcyBzaG91bGQgZmlyZSB3aGVuIGJhY2sgaXMgY2xpY2tlZFxuICAgIGJhY2tMaXN0ZW5lciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUgJiYgZS5uZXdVUkwgJiYgZS5uZXdVUkwuaW5kZXhPZignfGdpZ3lhTW9iaWxlRGlhbG9nJykgPT0gLTEpIHtcbiAgICAgICAgICAgIGhhbmRsZXIoZSk7XG4gICAgICAgICAgICBfcmVtb3ZlRGlhbG9nQmFja0xpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gaGFzaCBjb3VsZCBjaGFuZ2UgcmlnaHQgYWZ0ZXIgdGhlIGNhbGwgaWYgaXQgd2FzIGluaXRpYXRlZCBmcm9tIGEgbGluayB0aGF0IGRpZG4ndCByZXR1cm4gZmFsc2VcbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJ3xnaWd5YU1vYmlsZURpYWxvZycpID09IC0xKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoICsgJ3xnaWd5YU1vYmlsZURpYWxvZyc7XG4gICAgICAgIH1cbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdoYXNoY2hhbmdlJywgYmFja0xpc3RlbmVyKTtcbiAgICB9LCA1MCk7XG59XG5leHBvcnQgZnVuY3Rpb24gX3JlbW92ZURpYWxvZ0JhY2tMaXN0ZW5lcigpIHtcbiAgICBpZiAoIWJhY2tMaXN0ZW5lcikgcmV0dXJuO1xuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAnaGFzaGNoYW5nZScsIGJhY2tMaXN0ZW5lcik7XG4gICAgYmFja0xpc3RlbmVyID0gbnVsbDtcbiAgICAvL3Jlc3RvcmUgcHJldmlvdXMgaGFzaFxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnfGdpZ3lhTW9iaWxlRGlhbG9nJywgJycpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHByZXBlbmRUb0JvZHkoZWw6IEhUTUxFbGVtZW50LCBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudCk6IHZvaWQge1xuICAgIGlmICghZG9jdW1lbnQuYm9keSkgcmV0dXJuO1xuICAgIGlmIChkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZSAmJiBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoZWwsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kVG9Cb2R5KGVsOiBIVE1MRWxlbWVudCwgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoIWRvY3VtZW50LmJvZHkpIHJldHVybjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbGVtZW50KGVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGlmIChlbCAmJiBlbC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0NoaWxkT2YoY2hpbGQ6IE5vZGUsIHBhcmVudDogTm9kZSkge1xuICAgIHZhciBkaXJlY3RQYXJlbnQgPSBjaGlsZC5wYXJlbnROb2RlO1xuXG4gICAgd2hpbGUgKGRpcmVjdFBhcmVudCkge1xuICAgICAgICBpZiAocGFyZW50ID09IGRpcmVjdFBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBkaXJlY3RQYXJlbnQgPSBkaXJlY3RQYXJlbnQucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNWaXNpYmxlKGVsOiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgICAgICBpZiAoY29tcHV0ZWRTdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgfHwgY29tcHV0ZWRTdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENlbnRlcmVkRGl2SUQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuICdnaWdfJyArIGxvY2FsSW5mby5pbml0VGltZS5nZXRUaW1lKCkudG9TdHJpbmcoKSArICdfJyArIG5hbWU7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhBdHRyaWJ1dGVzKGRvbUVsZW1OYW1lOiBzdHJpbmcsIGRvbUVsZW1BdHRycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgbmV3RG9tRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZG9tRWxlbU5hbWUpO1xuXG4gICAgaWYgKGRvbUVsZW1BdHRycykge1xuICAgICAgICBmb3IgKGxldCBlbGVtQXR0ciBpbiBkb21FbGVtQXR0cnMpIHtcbiAgICAgICAgICAgIG5ld0RvbUVsZW1bZWxlbUF0dHJdID0gZG9tRWxlbUF0dHJzW2VsZW1BdHRyXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXdEb21FbGVtO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvcExldmVsRGl2KGlkPzogc3RyaW5nKTogSFRNTERpdkVsZW1lbnQge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgaWYgKGVsLnN0eWxlLnpJbmRleCAhPSBudWxsKSB7XG4gICAgICAgIGVsLnN0eWxlLnpJbmRleCA9ICcnICsgZ2V0TmV4dFpJbmRleCgpO1xuICAgIH1cblxuICAgIGVsLmlubmVySFRNTCA9ICcnO1xuICAgIGlmIChpZCkge1xuICAgICAgICBlbC5pZCA9IGlkO1xuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZSAmJiBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGVsLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQnlJRChpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGlmIChlbCkge1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93QnlJRChpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGlmIChlbCkge1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gbG9jYWxJbmZvLmlzSUU2ID8gKGVsLnRhZ05hbWUgPT0gJ1REJyA/ICd0YWJsZS1jZWxsJyA6IGVsLnRhZ05hbWUgPT0gJ1RSJyA/ICcnIDogZWwudGFnTmFtZSA9PSAnVEFCTEUnID8gJycgOiAnYmxvY2snKSA6ICcnO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckJ5SUQoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICBpZiAoYyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge31cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRIVE1MU2l6ZShodG1sOiBzdHJpbmcsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB7IHc6IG51bWJlcjsgaDogbnVtYmVyIH0ge1xuICAgIHZhciBkaXZNZWFzdXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2TWVhc3VyZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZGl2TWVhc3VyZS5zdHlsZS5sZWZ0ID0gJy0xMDAwcHgnO1xuICAgIGRpdk1lYXN1cmUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2TWVhc3VyZSk7XG4gICAgdmFyIHcgPSBkaXZNZWFzdXJlLm9mZnNldFdpZHRoO1xuICAgIHZhciBoID0gZGl2TWVhc3VyZS5vZmZzZXRIZWlnaHQ7XG4gICAgZGl2TWVhc3VyZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdk1lYXN1cmUpO1xuICAgIHJldHVybiB7IHc6IHcsIGg6IGggfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50c0J5Q2xhc3MocGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nLCBpbmNsdWRlUGFyZW50PzogYm9vbGVhbik6IEhUTUxFbGVtZW50W10ge1xuICAgIGlmICghcGFyZW50RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHZhciBhckVscyA9IFtdO1xuXG4gICAgaWYgKGluY2x1ZGVQYXJlbnQgJiYgaXNFbGVtZW50Q2xhc3MocGFyZW50RWxlbWVudCwgY2xhc3NOYW1lKSkge1xuICAgICAgICBhckVscy5wdXNoKHBhcmVudEVsZW1lbnQpO1xuICAgIH1cblxuICAgIHZhciBlbHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gcGFyZW50RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpIGFzIGFueTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXNFbGVtZW50Q2xhc3MoZWxzW2ldLCBjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICBhckVscy5wdXNoKGVsc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFyRWxzIHx8IFtdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRzQnlBdHRyaWJ1dGUocGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQsIHRhZ05hbWU6IHN0cmluZywgYXR0cmlidXRlTmFtZTogc3RyaW5nLCBhdHRyaWJ1dGVWYWx1ZTogc3RyaW5nKTogSFRNTEVsZW1lbnRbXSB7XG4gICAgdmFyIGFyRWxzID0gW107XG4gICAgdmFyIGVsczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBwYXJlbnRFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ05hbWUpIGFzIGFueTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZWxzW2ldLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSA9PSBhdHRyaWJ1dGVWYWx1ZSkge1xuICAgICAgICAgICAgYXJFbHMucHVzaChlbHNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhckVscztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50UG9zaXRpb24oZWw6IEhUTUxFbGVtZW50KTogeyBsZWZ0OiBudW1iZXI7IHRvcDogbnVtYmVyOyByaWdodDogbnVtYmVyOyBib3R0b206IG51bWJlciB9IHtcbiAgICBpZiAoIWVsKSB7XG4gICAgICAgIHJldHVybiB7IGxlZnQ6IDAsIHRvcDogMCwgYm90dG9tOiAwLCByaWdodDogMCB9O1xuICAgIH1cblxuICAgIHZhciByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIHNjcm9sbCA9IHZpZXdwb3J0VXRpbHMuZ2V0U2Nyb2xsKCk7XG4gICAgdmFyIGxlZnQgPSByZWN0LmxlZnQgKyBzY3JvbGwubGVmdDtcbiAgICB2YXIgdG9wID0gcmVjdC50b3AgKyBzY3JvbGwudG9wO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgIHJpZ2h0OiBsZWZ0ICsgcmVjdC53aWR0aCxcbiAgICAgICAgYm90dG9tOiB0b3AgKyByZWN0LmhlaWdodCxcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzVG9FbGVtZW50KGVsOiBIVE1MRWxlbWVudCwgY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIWVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZXhpc3RpbmdDbGFzc2VzID0gZWwuY2xhc3NOYW1lID8gZ2V0Q2xhc3NOYW1lcyhlbCkgOiBbXTtcbiAgICB2YXIgZXhpc3RpbmdPcmlnaW5hbExlbmd0aCA9IGV4aXN0aW5nQ2xhc3Nlcy5sZW5ndGg7XG4gICAgdmFyIG5ld0NsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcblxuICAgIGZvciAodmFyIGogaW4gbmV3Q2xhc3Nlcykge1xuICAgICAgICB2YXIgZXhpc3RzID0gZmFsc2U7XG4gICAgICAgIGlmICghbmV3Q2xhc3Nlc1tqXSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gZXhpc3RpbmdDbGFzc2VzKSB7XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdDbGFzc2VzW2ldID09PSBuZXdDbGFzc2VzW2pdKSB7XG4gICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgICAgICBleGlzdGluZ0NsYXNzZXMucHVzaChuZXdDbGFzc2VzW2pdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChleGlzdGluZ0NsYXNzZXMubGVuZ3RoICE9PSBleGlzdGluZ09yaWdpbmFsTGVuZ3RoKSB7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IGV4aXN0aW5nQ2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzRnJvbUVsZW1lbnQoZWw6IEhUTUxFbGVtZW50LCBjbGFzc05hbWU6IHN0cmluZywgc3Vic3RyaW5nOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAoIWVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGFyQ2xhc3MgPSBnZXRDbGFzc05hbWVzKGVsKTtcbiAgICBmb3IgKHZhciBpID0gYXJDbGFzcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAoYXJDbGFzc1tpXSA9PT0gY2xhc3NOYW1lIHx8IChzdWJzdHJpbmcgJiYgYXJDbGFzc1tpXS5pbmRleE9mKGNsYXNzTmFtZSkgIT09IC0xKSkge1xuICAgICAgICAgICAgYXJDbGFzcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWwuY2xhc3NOYW1lID0gYXJDbGFzcy5qb2luKCcgJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lcyhlbDogSFRNTEVsZW1lbnQpOiBBcnJheTxzdHJpbmc+IHtcbiAgICB2YXIgY2xhc3NlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIGlmICh0eXBlb2YgZWwuY2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICBjbGFzc2VzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgfVxuICAgIHJldHVybiBjbGFzc2VzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudENsYXNzKGVsOiBIVE1MRWxlbWVudCwgY2xhc3NOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIWVsKSByZXR1cm4gZmFsc2U7XG4gICAgZWxzZSBpZiAoIWNsYXNzTmFtZSkgcmV0dXJuIHRydWU7XG4gICAgZWxzZSBpZiAoIWVsLmNsYXNzTmFtZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdmFyIGV4aXN0cyA9IGZhbHNlO1xuICAgIHZhciBhckNsYXNzID0gZ2V0Q2xhc3NOYW1lcyhlbCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhckNsYXNzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChhckNsYXNzW2ldID09PSBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXhpc3RzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbEV2ZW50KGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoIWV2ZW50KSByZXR1cm47XG4gICAgaWYgKCdjYW5jZWxhYmxlJyBpbiBldmVudClcbiAgICAgICAgLy8gQWxsIGJyb3dzZXJzIGV4Y2VwdCA8SUU5XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZWxzZSBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcbiAgICB2YXIgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZSA9IG5hbWUgfHwgJyc7XG4gICAgZGl2Q29udGFpbmVyLmlubmVySFRNTCA9ICc8JyArIHR5cGUgKyAnIG5hbWU9XCInICsgbmFtZSArICdcIiBpZD1cIicgKyBuYW1lICsgJ1wiPjwvJyArIHR5cGUgKyAnPic7XG4gICAgcmV0dXJuIGRpdkNvbnRhaW5lci5maXJzdENoaWxkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFNpemUoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgdzogYW55LCBoOiBhbnksIGNlbnRlcj86IGJvb2xlYW4pIHtcbiAgICBpZiAoY29udGFpbmVyID09IG51bGwgfHwgY29udGFpbmVyLnN0eWxlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh3KSB7XG4gICAgICAgIHcgPSAnJyArIHc7XG4gICAgICAgIHZhciBpc1dpZHRoUHJlY2VudGFnZSA9IHcuaW5kZXhPZignJScpID4gMDtcblxuICAgICAgICBpZiAoIWlzTmFOKHcpIHx8IGlzV2lkdGhQcmVjZW50YWdlKSB7XG4gICAgICAgICAgICB2YXIgd2lkdGhWYWx1ZTogc3RyaW5nID0gJycgKyAoaXNXaWR0aFByZWNlbnRhZ2UgPyB3IDogdyArICdweCcpO1xuXG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLnN0eWxlLndpZHRoICE9IHdpZHRoVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSB3aWR0aFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGgpIHtcbiAgICAgICAgaCA9ICcnICsgaDtcbiAgICAgICAgdmFyIGlzSGVpZ2h0UHJlY2VudGFnZSA9IGguaW5kZXhPZignJScpID4gMDtcblxuICAgICAgICBpZiAoIWlzTmFOKHcpIHx8IGlzSGVpZ2h0UHJlY2VudGFnZSkge1xuICAgICAgICAgICAgdmFyIGhlaWdodFZhbHVlOiBzdHJpbmcgPSAnJyArIChpc0hlaWdodFByZWNlbnRhZ2UgPyBoIDogaCArICdweCcpO1xuXG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLnN0eWxlLmhlaWdodCAhPT0gaGVpZ2h0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2VudGVyICYmIHcgJiYgaCkge1xuICAgICAgICBpZiAoY29udGFpbmVyLnN0eWxlLnpJbmRleCA9PSBudWxsIHx8IGNlbnRlcikge1xuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLnpJbmRleCA9ICcnICsgZ2V0TmV4dFpJbmRleCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHZwID0gdmlld3BvcnRVdGlscy5nZXRJbm5lclNpemUoKTtcbiAgICAgICAgdmFyIHNjcmwgPSB2aWV3cG9ydFV0aWxzLmdldFNjcm9sbCgpO1xuXG4gICAgICAgIHZhciB2cHQgPSBzY3JsLnRvcDtcbiAgICAgICAgdmFyIHZwbCA9IHNjcmwubGVmdDtcblxuICAgICAgICBjb250YWluZXIuc3R5bGUudG9wID0gJycgKyBNYXRoLm1heCgwLCB2cHQgKyBNYXRoLmZsb29yKCh2cC5oIC0gaCkgLyAyKSkgKyAncHgnO1xuICAgICAgICBjb250YWluZXIuc3R5bGUubGVmdCA9ICcnICsgTWF0aC5tYXgoMCwgdnBsICsgTWF0aC5mbG9vcigodnAudyAtIHcpIC8gMikpICsgJ3B4JztcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnJztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGlkZGVuSWZyYW1lKHNyYzogc3RyaW5nKTogSFRNTElGcmFtZUVsZW1lbnQge1xuICAgIHZhciBpZnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICBpZnIuc3JjID0gc3JjO1xuICAgIGlmci5zdHlsZS53aWR0aCA9ICczMHB4JztcbiAgICBpZnIuc3R5bGUuaGVpZ2h0ID0gJzEwcHgnO1xuICAgIGlmci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgaWZyLnN0eWxlLnRvcCA9ICctMTAwMHB4JztcbiAgICBpZnIuc3R5bGUubGVmdCA9ICctMTAwMHB4JztcblxuICAgIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIGFwcGVuZFRvQm9keShpZnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZ1bmN0aW9uc1V0aWxzLmludm9rZU9uUGFnZUxvYWQoKCkgPT4ge1xuICAgICAgICAgICAgYXBwZW5kVG9Cb2R5KGlmcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpZnI7XG59XG5leHBvcnQgZnVuY3Rpb24gYXR0cmlidXRlRW5jb2RlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgICAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgICAgIC5yZXBsYWNlKC9cXFwiL2csICcmcXVvdDsnKVxuICAgICAgICAucmVwbGFjZSgvXFwnL2csICcmIzM5OycpOyAvLyBJRTggZG9lc24ndCBzdXBwb3J0ICZhcG9zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hbmlwdWxhdGVBdHRyaWJ1dGVzKFxuICAgIGVsZW1lbnRzOiBFbGVtZW50W10sXG4gICAgbWF0Y2hlcjogUmVnRXhwLFxuICAgIHJlcGxhY2VQcmVkaWNhdGU6IChtYXRjaDogc3RyaW5nKSA9PiB2b2lkLFxuICAgIGNyaXRlcmlhOiAoYXR0cj86IEF0dHIpID0+IGJvb2xlYW4gPSAoKSA9PiB0cnVlLFxuKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGlmICghZWwuYXR0cmlidXRlcykgcmV0dXJuO1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbC5hdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgICAgICAgaWYgKGNyaXRlcmlhKGF0dHIpKSB7XG4gICAgICAgICAgICAgICAgYXR0ci52YWx1ZSA9IGF0dHIudmFsdWUucmVwbGFjZShtYXRjaGVyLCByZXBsYWNlUHJlZGljYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdGV4dE5vZGVzVW5kZXIoZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgbGV0IG47XG4gICAgY29uc3QgdGV4dE5vZGVzOiBUZXh0W10gPSBbXTtcbiAgICBjb25zdCB0cmVlV2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihlbCwgTm9kZUZpbHRlci5TSE9XX1RFWFQsIG51bGwsIGZhbHNlKTtcbiAgICB3aGlsZSAoKG4gPSB0cmVlV2Fsa2VyLm5leHROb2RlKCkgYXMgVGV4dCkpIHtcbiAgICAgICAgdGV4dE5vZGVzLnB1c2gobik7XG4gICAgfVxuICAgIHJldHVybiB0ZXh0Tm9kZXM7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNIVE1MQm9vbGVhbkF0dHJpYnV0ZShhdHRyTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIFsnYXV0b2NvbXBsZXRlJywgJ2F1dG9mb2N1cycsICdjaGVja2VkJywgJ2Rpc2FibGVkJywgJ2hpZGRlbicsICdyZWFkb25seScsICdyZXF1aXJlZCcsICdzZWxlY3RlZCddLmluZGV4T2YoYXR0ck5hbWUpID4gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNCZWxvbmdUb0dpZ3lhRmllbGRzZXQoZWw6IEVsZW1lbnQpOiBib29sZWFuIHtcblxuICAgIGlmICghZWwgfHwgZWwgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBlbmQgb2YgcmVjdXJzaW9uIC0gZWxlbWVudCBpcyBub3QgYSBjaGlsZCBvZiBhIGZpZWxkc2V0XG4gICAgfVxuXG4gICAgaWYgKGlzRWxlbWVudENsYXNzKGVsLnBhcmVudEVsZW1lbnQsICdnaWd5YS1maWVsZHNldCcpKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzQmVsb25nVG9HaWd5YUZpZWxkc2V0KGVsLnBhcmVudEVsZW1lbnQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENsb3Nlc3RFbGVtZW50KGVsZW0sIHNlbGVjdG9yLCBwYXJlbnQgPSBkb2N1bWVudCkge1xuICAgIHNldE1hdGNoZXNQb2x5ZmlsbCgpO1xuXG4gICAgLy8gR2V0IHRoZSBjbG9zZXN0IG1hdGNoaW5nIGVsZW1lbnRcbiAgICBmb3IgKCA7IGVsZW0gJiYgZWxlbSAhPT0gcGFyZW50OyBlbGVtID0gZWxlbS5wYXJlbnROb2RlICkge1xuICAgICAgICBpZiAoZWxlbT8ubWF0Y2hlcyhzZWxlY3RvcikpIHJldHVybiBlbGVtO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRGcm9tVGVtcGxhdGUodGVtcGxhdGU6IHN0cmluZyA9ICcnKTogQ2hpbGROb2RlIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gdGVtcGxhdGU/LnRyaW0oKTtcbiAgICByZXR1cm4gZGl2LmZpcnN0Q2hpbGQgPz8gZGl2O1xufVxuZnVuY3Rpb24gc2V0TWF0Y2hlc1BvbHlmaWxsKCkge1xuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1BhcmVudEhhc0NsYXNzKG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGFzc05hbWUgOnN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmIChuYXRpdmVFbGVtZW50Py5jbGFzc0xpc3Q/LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghbmF0aXZlRWxlbWVudD8ucGFyZW50RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBpc1BhcmVudEhhc0NsYXNzKG5hdGl2ZUVsZW1lbnQ/LnBhcmVudEVsZW1lbnQsIGNsYXNzTmFtZSk7XG59XG4iLCJpbXBvcnQgKiBhcyBET01VdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvRE9NJztcbmltcG9ydCB7IGdldENkblJlc291cmNlIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL2Nkbic7XG5pbXBvcnQgeyBsb2NhbEluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbGxBc3luYzxUPihtZXRob2ROYW1lOiBzdHJpbmcsIHBhcmFtcyA9IHt9KTogUHJvbWlzZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KHJlc29sdmUgPT4ge1xuICAgICAgICBjYWxsRnVuY3Rpb24oYGdpZ3lhLiR7bWV0aG9kTmFtZX1gLCBbey4uLnBhcmFtcywgY2FsbGJhY2s6IHJlc29sdmV9XSk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxGdW5jdGlvbihuYW1lOiBzdHJpbmcsIGFyUGFyYW1zOiBhbnlbXSk6IHZvaWQge1xuICAgIHZhciBmbiA9IGV2YWwobmFtZSk7XG4gICAgdmFyIGFyUGFydHMgPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgYXJQYXJ0cy5zcGxpY2UoYXJQYXJ0cy5sZW5ndGggLSAxLCAxKTtcbiAgICB2YXIgc2NvcGUgPSBldmFsKGFyUGFydHMuam9pbignLicpKTtcbiAgICBmbi5hcHBseShzY29wZSwgYXJQYXJhbXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlT25QYWdlTG9hZChmdW5jOiBGdW5jdGlvbiwgY29tcGxldGVPbmx5PzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChcbiAgICAgICAgKCFkb2N1bWVudC5yZWFkeVN0YXRlICYmIGRvY3VtZW50LmJvZHkpIHx8XG4gICAgICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHxcbiAgICAgICAgKCFjb21wbGV0ZU9ubHkgJiYgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJyAmJiBkb2N1bWVudC5ib2R5KVxuICAgICkge1xuICAgICAgICBmdW5jKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNhbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBmbk9uTG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZ1bmMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmbk9uTG9hZCwgMjAwMDApOyAvLyBmYWxsYmFjayAtIHNvbWV0aW1lcyByZWFkeXN0YXRlIHN0YXlzIHN0dWNrIG9uIGludGVyYWN0aXZlXG5cbiAgICAgICAgRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdsb2FkJywgZm5PbkxvYWQpO1xuICAgICAgICBET01VdGlscy5hZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LCAnRE9NQ29udGVudExvYWRlZCcsIGZuT25Mb2FkKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWxpYXMocHVibGljTmFtZTogc3RyaW5nLCBmbmM6IEZ1bmN0aW9uIHwgeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IHZvaWQge1xuICAgIGNvbnN0IGFyTmFtZVNlZ21lbnRzID0gcHVibGljTmFtZS5zcGxpdCgnLicpO1xuICAgIGxldCBvQ3VycmVudFNlZ21lbnQgPSB3aW5kb3c7XG4gICAgZm9yIChsZXQgaVNlZ21lbnQgPSAwOyBpU2VnbWVudCA8IGFyTmFtZVNlZ21lbnRzLmxlbmd0aCAtIDE7IGlTZWdtZW50KyspIHtcbiAgICAgICAgY29uc3Qgc1NlZ21lbnQgPSBhck5hbWVTZWdtZW50c1tpU2VnbWVudF07XG4gICAgICAgIGlmICghb0N1cnJlbnRTZWdtZW50W3NTZWdtZW50XSkge1xuICAgICAgICAgICAgb0N1cnJlbnRTZWdtZW50W3NTZWdtZW50XSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIG9DdXJyZW50U2VnbWVudCA9IG9DdXJyZW50U2VnbWVudFtzU2VnbWVudF07XG4gICAgfVxuICAgIG9DdXJyZW50U2VnbWVudFthck5hbWVTZWdtZW50c1thck5hbWVTZWdtZW50cy5sZW5ndGggLSAxXV0gPSBmbmM7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZm46ICgpID0+IHZvaWQsIGRlbGF5TWlsbGlzZWNvbmRzOiBudW1iZXIpOiAoKSA9PiB2b2lkIHtcbiAgICBsZXQgdGltZXI6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aW1lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aW1lciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGZuKCk7XG4gICAgICAgIH0sIGRlbGF5TWlsbGlzZWNvbmRzKSBhcyBhbnk7XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRTcmNUb0lGcmFtZUlmTmVlZGVkKGlmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQsIHNyYzogc3RyaW5nID0gZ2V0Q2RuUmVzb3VyY2UoJy8nKSkge1xuICAgIGlmIChsb2NhbEluZm8uaXNJT1NXZWJWaWV3IHx8IChsb2NhbEluZm8uaXNJT1MgJiYgbG9jYWxJbmZvLmlzV2VDaGF0KSkge1xuICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIERPTVV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9ET00nO1xuXG5leHBvcnQgaW50ZXJmYWNlIElIb3RLZXlFdmVudCB7XG4gICAgdW5zdWJzY3JpYmUoKTogdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gS2V5cyB7XG4gICAgZXNjYXBlID0gMjcsXG4gICAgYmFja3NwYWNlID0gOCxcbiAgICBlbnRlciA9IDEzLFxufVxuXG5leHBvcnQgY29uc3Qga2V5Q29kZXMgPSB7XG4gICAgW0tleXMuZXNjYXBlXTogJ0VzY2FwZScsXG4gICAgW0tleXMuYmFja3NwYWNlXTogJ0JhY2tzcGFjZScsXG4gICAgW0tleXMuZW50ZXJdOiAnRW50ZXInLFxufTtcblxuZXhwb3J0IGludGVyZmFjZSBJSG90S2V5IHtcbiAgICBrZXk6IEtleXM7XG4gICAgZWxlbWVudENvbnRleHQ/OiBIVE1MRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uSG90S2V5Q2xpY2tlZChob3RLZXlEYXRhOiBJSG90S2V5LCBoYW5kbGVyOiAoKSA9PiB2b2lkKTogSUhvdEtleUV2ZW50IHtcbiAgICByZXR1cm4gbmV3IEhvdEtleUV2ZW50KGhvdEtleURhdGEsIGhhbmRsZXIpO1xufVxuXG5jbGFzcyBIb3RLZXlFdmVudCBpbXBsZW1lbnRzIElIb3RLZXlFdmVudCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBlbDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBldmVudEhhbmRsZXI6IEZ1bmN0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoaG90S2V5RGF0YSwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLmVsID0gaG90S2V5RGF0YS5lbGVtZW50Q29udGV4dCA/IGhvdEtleURhdGEuZWxlbWVudENvbnRleHQgOiBkb2N1bWVudC5ib2R5O1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gaG90S2V5RGF0YS5rZXkgfHwgZXZlbnQua2V5ID09PSBrZXlDb2Rlc1tob3RLZXlEYXRhLmtleV0pIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmVsLCAna2V5dXAnLCB0aGlzLmV2ZW50SGFuZGxlcik7XG4gICAgfVxuXG4gICAgcHVibGljIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICBET01VdGlscy5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuZWwsICdrZXl1cCcsIHRoaXMuZXZlbnRIYW5kbGVyKVxuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGwoKTogeyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH0ge1xuICAgIHZhciBzY3JPZlggPSAwLFxuICAgICAgICBzY3JPZlkgPSAwO1xuICAgIGlmICh0eXBlb2Ygd2luZG93LnBhZ2VZT2Zmc2V0ID09ICdudW1iZXInKSB7XG4gICAgICAgIHNjck9mWSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgc2NyT2ZYID0gd2luZG93LnBhZ2VYT2Zmc2V0O1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keSAmJiAoZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKSkge1xuICAgICAgICBzY3JPZlkgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgICAgc2NyT2ZYID0gZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSkge1xuICAgICAgICBzY3JPZlkgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICBzY3JPZlggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB9XG4gICAgcmV0dXJuIHsgbGVmdDogc2NyT2ZYLCB0b3A6IHNjck9mWSB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEZ1bGxTaXplKCk6IHsgdzogbnVtYmVyOyBoOiBudW1iZXIgfSB7XG4gICAgdmFyIGRlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHZhciBkYiA9IGRvY3VtZW50LmJvZHk7XG5cbiAgICB2YXIgaCA9IGRlLmNsaWVudEhlaWdodDtcbiAgICBpZiAoaCA9PSAwKSBoID0gZGIuY2xpZW50SGVpZ2h0O1xuICAgIHZhciB3ID0gZGUuY2xpZW50V2lkdGg7XG4gICAgaWYgKHcgPT0gMCkgdyA9IGRiLmNsaWVudFdpZHRoO1xuICAgIHJldHVybiB7IHc6IHcsIGg6IGggfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcmllbnRhdGlvbigpOiBudW1iZXIge1xuICAgIHZhciBvcmllbnRhdGlvbiA9IHBhcnNlSW50KCh3aW5kb3dbJ29yaWVudGF0aW9uJ10gYXMgc3RyaW5nKSB8fCAnMCcpO1xuICAgIGlmIChvcmllbnRhdGlvbiA8IDApIG9yaWVudGF0aW9uICs9IDM2MDtcblxuICAgIHJldHVybiBvcmllbnRhdGlvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRPdXRlclNpemUoKTogeyB3OiBudW1iZXI7IGg6IG51bWJlciB9IHtcbiAgICB2YXIgaDtcbiAgICB2YXIgdztcblxuICAgIHZhciBkZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB2YXIgZGIgPSBkb2N1bWVudC5ib2R5O1xuXG4gICAgaWYgKHdpbmRvdy5vdXRlckhlaWdodCkge1xuICAgICAgICBoID0gd2luZG93Lm91dGVySGVpZ2h0O1xuICAgICAgICB3ID0gd2luZG93Lm91dGVyV2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaCA9IGRlLmNsaWVudEhlaWdodDtcbiAgICAgICAgaWYgKGggPT0gMCkgaCA9IGRiLmNsaWVudEhlaWdodDtcbiAgICAgICAgdyA9IGRlLmNsaWVudFdpZHRoO1xuICAgICAgICBpZiAodyA9PSAwKSB3ID0gZGIuY2xpZW50V2lkdGg7XG4gICAgfVxuICAgIHJldHVybiB7IHc6IHcsIGg6IGggfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbm5lclNpemUoKTogeyB3OiBudW1iZXI7IGg6IG51bWJlciB9IHtcbiAgICB2YXIgaDtcbiAgICB2YXIgdztcblxuICAgIHZhciBkZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB2YXIgZGIgPSBkb2N1bWVudC5ib2R5O1xuXG4gICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICBoID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaCA9IGRlLmNsaWVudEhlaWdodDtcbiAgICAgICAgaWYgKGggPT0gMCkgaCA9IGRiLmNsaWVudEhlaWdodDtcbiAgICAgICAgdyA9IGRlLmNsaWVudFdpZHRoO1xuICAgICAgICBpZiAodyA9PSAwKSB3ID0gZGIuY2xpZW50V2lkdGg7XG4gICAgfVxuICAgIHJldHVybiB7IHc6IHcsIGg6IGggfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRNaWRkbGVDZW50ZXIoKTogeyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH0ge1xuICAgIHZhciBzY3JvbGwgPSBnZXRTY3JvbGwoKTtcbiAgICB2YXIgc2l6ZSA9IGdldElubmVyU2l6ZSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogc2Nyb2xsLnRvcCArIE1hdGguZmxvb3Ioc2l6ZS5oIC8gMiksXG4gICAgICAgIGxlZnQ6IHNjcm9sbC5sZWZ0ICsgTWF0aC5mbG9vcihzaXplLncgLyAyKSxcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVjdEhvcml6b250YWxseVZpc2libGUocmVjdDogeyB0b3A6IG51bWJlcjsgYm90dG9tOiBudW1iZXI7IGxlZnQ6IG51bWJlcjsgcmlnaHQ6IG51bWJlciB9KSB7XG4gICAgdmFyIHNjcm9sbCA9IGdldFNjcm9sbCgpO1xuICAgIHZhciBzaXplID0gZ2V0SW5uZXJTaXplKCk7XG4gICAgcmV0dXJuIHJlY3QubGVmdCA+PSBzY3JvbGwubGVmdCAmJiByZWN0LnJpZ2h0IDw9IHNjcm9sbC5sZWZ0ICsgc2l6ZS53O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVjdEZ1bGx5VmlzaWJsZShyZWN0OiB7IHRvcDogbnVtYmVyOyBib3R0b206IG51bWJlcjsgbGVmdDogbnVtYmVyOyByaWdodDogbnVtYmVyIH0pIHtcbiAgICB2YXIgc2Nyb2xsID0gZ2V0U2Nyb2xsKCk7XG4gICAgdmFyIHNpemUgPSBnZXRJbm5lclNpemUoKTtcbiAgICByZXR1cm4gcmVjdC50b3AgPj0gc2Nyb2xsLnRvcCAmJiByZWN0LmJvdHRvbSA8PSBzY3JvbGwudG9wICsgc2l6ZS5oICYmIHJlY3QubGVmdCA+PSBzY3JvbGwubGVmdCAmJiByZWN0LnJpZ2h0IDw9IHNjcm9sbC5sZWZ0ICsgc2l6ZS53O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbEludG9WaWV3KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5zY3JvbGxJbnRvVmlldykge1xuICAgICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KCk7XG4gICAgfVxufVxuIiwiXG5sZXQgc2VsZWN0ZWRDZG5Ib3N0c0luZGV4ID0gMDtcbmV4cG9ydCBjb25zdCBDRE5fSE9TVFMgPSB7XG4gICAgaHR0cDogWydjZG4uZ2lneWEuY29tJywgJ2NkbjEuZ2lneWEuY29tJywgJ2NkbjIuZ2lneWEuY29tJywgJ2NkbjMuZ2lneWEuY29tJ10sXG4gICAgaHR0cHM6IFsnY2Rucy5naWd5YS5jb20nLCAnY2RuczEuZ2lneWEuY29tJywgJ2NkbnMyLmdpZ3lhLmNvbScsICdjZG5zMy5naWd5YS5jb20nXSxcbn07XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2RuUmVzb3VyY2UocGF0aD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gZ2lneWEudGhpc1NjcmlwdCBtYXkgbm90IGV4aXN0IGlmIGxvYWRlZCBmb3Igc3NvT3JpZy5cbiAgICBsZXQgYmFzZURvbWFpbiA9IGdpZ3lhLnRoaXNTY3JpcHQ/LmJhc2VEb21haW4gPz8gJyc7XG4gICAgY29uc3QgcHJvdG9jb2wgPSBnaWd5YS50aGlzU2NyaXB0Py5wcm90b2NvbCA/PyAnaHR0cHMnO1xuXG4gICAgLy8gSWYgbm8gYmFzZSBkb21haW4gb3IgaWYgYmFzZSBkb21haW4gZW5kcyB3aXRoIC5naWd5YS5jb20sIHVzZSBHaWd5YSBDRE4uXG4gICAgLy8gT3RoZXJ3aXNlIHVzZSB0aGUgYmFzZSBkb21haW4uXG4gICAgaWYgKCFiYXNlRG9tYWluIHx8IC9jZG5zP1xcLmdpZ3lhXFwuY29tJC8udGVzdChiYXNlRG9tYWluKSkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFNjaGVtYVJlcG9zaXRvcnkgPSBDRE5fSE9TVFNbcHJvdG9jb2xdO1xuICAgICAgICBpZiAoc2VsZWN0ZWRTY2hlbWFSZXBvc2l0b3J5Lmxlbmd0aCA8PSBzZWxlY3RlZENkbkhvc3RzSW5kZXgpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkQ2RuSG9zdHNJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgYmFzZURvbWFpbiA9IHNlbGVjdGVkU2NoZW1hUmVwb3NpdG9yeVtzZWxlY3RlZENkbkhvc3RzSW5kZXgrK107XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlIHRoZSBwYXRoIHN0YXJ0cyB3aXRoIFwiL1wiLlxuICAgIGlmIChwYXRoKSB7XG4gICAgICAgIGlmIChwYXRoLmluZGV4T2YoJy8nKSAhPT0gMCkge1xuICAgICAgICAgICAgcGF0aCA9ICcvJyArIHBhdGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvdG9jb2wgKyAnOi8vJyArIGJhc2VEb21haW4gKyAocGF0aCB8fCAnJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0SW1nQ2RuUmVzb3VyY2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pLycpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
