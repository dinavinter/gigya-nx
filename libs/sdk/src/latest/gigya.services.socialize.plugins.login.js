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
      './src/legacy/plugins/gigya.services.socialize.plugins.login.js')
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './src/legacy/plugins/gigya.services.socialize.plugins.login.js':
      /*!**********************************************************************!*\
  !*** ./src/legacy/plugins/gigya.services.socialize.plugins.login.js ***!
  \**********************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        (function () {
          if (typeof window.gigya.socialize.plugins == 'undefined')
            window.gigya.socialize.plugins = {};
          var _pi = window.gigya.socialize.plugins;

          if (typeof _pi.common == 'undefined') {
            _pi.common = _pi.common || {};
            _pi.common.addCSS = function (css) {
              if (!css || css == '') return;
              if (css instanceof Array) css = css.join('');

              var style = document.createElement('style');
              style.type = 'text/css';
              var rulesNode = document.createTextNode(css);

              if (style.styleSheet)
                style.styleSheet.cssText = rulesNode.nodeValue;
              else style.appendChild(rulesNode);

              var head = document.getElementsByTagName('head');
              var body = document.body;
              (head.length > 0 ? head[0] : body).appendChild(style);
            };
          }

          if (
            typeof _pi.login == 'undefined' ||
            typeof _pi.login.showLoginUI_v1 == 'undefined'
          ) {
            _pi.login = _pi.login || {};
            _pi.login.modules = {};
            _pi.login.redraw = function (containerID) {
              if (
                document.getElementById(containerID) &&
                document.getElementById(containerID).innerHTML != '&#160;'
              ) {
                var m = this.modules[containerID];
                if (m.i.isConnect) {
                  this.showAddConnectionsUI_v1(
                    m.originalC,
                    m.originalP,
                    m.i,
                    true
                  );
                } else {
                  //this.showLoginUI_v1(m.originalC,m.originalP,m.i,true);
                }
              }
            };

            _pi.login.getStyle = function (style) {
              var oStyle = {};
              switch (style.toLowerCase()) {
                case 'fulllogocolored':
                  return {
                    ratio: 2.6,
                    base: 'FullLogoColored/',
                    ext: '.png',
                    noConnected: true,
                  };
                case 'fulllogo':
                  return {
                    ratio: 2.6,
                    base: 'FullLogo/',
                    ext: '.png',
                    noConnected: true,
                  };
                case 'signinwith':
                  return {
                    ratio: 7.05,
                    base: 'SignInWith/',
                    ext: '.png',
                    noLastLogin: true,
                    noConnected: true,
                    minSize: 20,
                  };
                default:
                  return {
                    ratio: 1,
                    ext: '.png',
                  };
              }
            };

            _pi.login.getSingleLineHeight = function (oStyle) {
              return (
                window.gigya.pluginUtils.layout.measureText('Wg', oStyle).h + 4
              );
            };

            _pi.login.isTrue = function (v, def) {
              if (v == null) return def;
              return v && (v == true || v.toLowerCase() == 'true');
            };
            _pi.login.showLoginUI_v1 = function (c, p, internals, isEvent) {
              internals.isConnect = false;
              this.showUI(c, p, internals);
              if (!isEvent) {
                window.gigya.events.dispatchForWidget(
                  { eventName: 'load', containerID: p['containerID'] },
                  p
                );
              }
            };
            _pi.login.showAddConnectionsUI_v1 = function (
              c,
              p,
              internals,
              isEvent
            ) {
              internals.isConnect = true;
              if (p.requiredCapabilities == null)
                p.requiredCapabilities = 'friends';
              this.showUI(c, p, internals);
              var params = {
                cid: p.cid,
                callback: this.afterGetInfo,
                context: {
                  This: this,
                  conf: c,
                  params: p,
                  internals: internals,
                },
                enabledProviders: p.enabledProviders,
                disabledProviders: p.disabledProviders,
                requiredCapabilities: p.requiredCapabilities,
                oauth_token: p.oauth_token,
              };
              window.gigya.socialize.getUserInfo(c, params);
              if (!isEvent)
                window.gigya.events.dispatchForWidget(
                  { eventName: 'load', containerID: p['containerID'] },
                  p
                );
            };
            _pi.login.afterGetInfo = function (res, overideContext) {
              var GS = window.gigya.socialize;
              var context = res.context;
              if (overideContext) context = overideContext;
              if (res.errorCode != 0 && !res.user) {
                delete res.requestParams.getInfoResponse;
                delete res.requestParams.context;
                delete res.context;
                window.gigya.events.dispatchErrorFromResponse(
                  context.params,
                  res
                );
                //GS._closeComponent(context.internals.rid,context.internals.isPopup);
                return;
              }
              context.internals.getInfoResponse = res;

              context.This.showUI.apply(context.This, [
                context.conf,
                context.params,
                context.internals,
              ]);
            };
            _pi.login.TEXT = function (lang, textKey, replaceStr, withStr) {
              return window.gigya.pluginUtils.lang.getLocalizedText(
                'gigya.services.socialize.plugins.login.js',
                textKey,
                lang,
                replaceStr,
                withStr
              );
            };
            _pi.login.showUI = function (c, p, internals) {
              if (document.getElementById(p['containerID']) == null) return;
              var GS = window.gigya.socialize;
              var rid = internals['rid'];
              var This = this;

              var tdStyle = 'margin:0px;padding:0px;border:0px;';

              var resolver = new window.gigya.global.resolver(
                window.gigya.global.resolver.defaultProccessor
              );
              resolver.addConfig(
                '<config><body font="arial"><captions bold="true" size="16" color="#4c4c4c" /><controls size="11"><snbuttons type="" buttonsize="30" color="#9b9b9b" /></controls><background background-color="transparent" /><texts size="11"><links color="#1371b9" /></texts></body></config>'
              );
              if (internals['isPopup']) {
                resolver.addConfig(
                  '<config><body><background frame-thickness="5" frame-color="#999999" /><controls size="11"><snbuttons type="textUnder" buttonsize="35" color="#9b9b9b" /></controls></body></config>'
                );
              }
              resolver.addConfig(c['UIConfig']);
              resolver.addConfig(p['UIConfig']);

              var lang = c['lang'];
              if (typeof p['lang'] != 'undefined') lang = p['lang'];

              var originalC = c;
              var originalP = p;
              if (internals['isPopup']) {
                var captionText;
                if (p['captionText']) {
                  captionText = p['captionText'];
                } else {
                  if (internals.isConnect) {
                    captionText = this.TEXT(lang, 'connect_with_your_friends');
                  } else {
                    captionText = this.TEXT(lang, 'login');
                  }
                }

                var oPopup = window.gigya.socialize._createJSPopup2(
                  rid,
                  resolver,
                  5,
                  window.gigya._.getCdnResource(
                    '/gs/i/HTMLLogin/Dialog/Dialog_'
                  ),
                  captionText
                );
                c = oPopup.c;
                p = oPopup.p;
              }

              var base = window.gigya._.getCdnResource('/gs/i/HTMLLogin/');
              var gsLogin = 'gigya.socialize.plugins.login';
              var lastLoginProvider = this.getLastLogin();
              var lastLoginIndication = p['lastLoginIndication']
                ? p['lastLoginIndication'].toLowerCase()
                : 'border';
              var facebookSuggestEnabled =
                p.autoDetectUserProviders &&
                p.autoDetectUserProviders.toLowerCase() == 'facebook' &&
                (!lastLoginProvider || lastLoginIndication != 'welcome');
              var hiddenProviders = [];

              if (
                !internals.isConnect &&
                window.gigya.external.facebook.isLoggedIn
              ) {
                var htmlLoginPlugin =
                  '<div id="' + p['containerID'] + '_container"></div>';
                var htmlSuggestFacebook =
                  '<div tabindex="0" onkeydown="' +
                  gsLogin +
                  '.KeyDownHandler(event,this)" role="button" onmouseover="this.style.opacity=0.75;this.style.filter=\'alpha(opacity=75)\'" onmouseout="this.style.opacity=1;this.style.filter=\'alpha(opacity=100)\'" id="' +
                  originalP['containerID'] +
                  '_suggestFB" style="text-align:left;border:0;padding:0;margin:0;cursor:pointer" onclick="' +
                  gsLogin +
                  ".providerClick('" +
                  p.containerID +
                  '_container\',\'Facebook\')"><img alt="" src="' +
                  base +
                  'FB_Button.gif" /></div>';
                var htmlSpacer =
                  '<div style="height:10px;font-size:1px">&#160;</div>';
                var outerHTML = htmlLoginPlugin;

                /// maybe delete all this?
                if (facebookSuggestEnabled) {
                  document.getElementById(originalP.containerID).style.height =
                    '';
                  hiddenProviders.push('facebook');
                  outerHTML = outerHTML + htmlSpacer + htmlSuggestFacebook;
                }

                if (outerHTML != htmlLoginPlugin) {
                  document.getElementById(p.containerID).innerHTML = outerHTML;
                  window.setTimeout(function () {
                    FB.XFBML.parse();
                  }, 300);
                  p = window.gigya.utils.object.clone(p);
                  p.containerID = p.containerID + '_container';
                }
              }
              var alignToLeft;

              var containerID = p['containerID'];
              if (this.modules[containerID] == null) {
                var fnUserChanged = function (e) {
                  if (internals.isConnect || e.eventName == 'logout') {
                    This.afterGetInfo(e, {
                      This: This,
                      conf: originalC,
                      params: originalP,
                      internals: internals,
                    });
                  }
                };
                window.gigya.socialize.addEventHandlers(
                  { listenerType: 'component' },
                  {
                    listenerDescription:
                      'listener for updating a connect widget',
                    onLogout: function () {
                      This.redraw(containerID);
                    },
                    onLogin: fnUserChanged,
                    onConnect: fnUserChanged,
                    onDisconnect: fnUserChanged,
                  }
                );
                if (facebookSuggestEnabled) {
                  alignToLeft = true;
                  window.gigya.socialize.addEventHandlers(
                    { listenerType: 'component' },
                    {
                      onFacebookLoaded: function () {
                        if (window.gigya.external.facebook.isLoggedIn)
                          This.showUI(originalC, originalP, internals);
                      },
                    }
                  );
                }
              }

              var buttonsStyle = p['buttonsStyle'];
              if (typeof buttonsStyle == 'undefined') buttonsStyle = '';
              var oStyle = this.getStyle(buttonsStyle);
              //if (internals.isConnect && oStyle.noConnected) oStyle = this.getStyle(''); //Will get default style

              var styleBase = '';
              if (oStyle.base) styleBase = oStyle.base;

              this.modules[containerID] = {
                originalC: originalC,
                originalP: originalP,
                i: internals,
                page: 0,
              };
              this.modules[containerID].c = c;
              this.modules[containerID].p = p;
              var arHTML = [];
              var a = 0;

              var requiredCapabilities = p['requiredCapabilities'];
              if (!requiredCapabilities) requiredCapabilities = 'login';
              requiredCapabilities = requiredCapabilities
                .replace(/ /g, '')
                .split(',');

              var connected = false;
              var arProviders = [];

              var enabledProviders = p['enabledProviders'];
              if (!enabledProviders) enabledProviders = c['enabledProviders'];
              if (!enabledProviders) enabledProviders = '*';
              var disabledProviders = p['disabledProviders'];
              if (!disabledProviders)
                disabledProviders = c['disabledProviders'];
              if (!disabledProviders) disabledProviders = '';

              arProviders = GS.getProvidersByName(enabledProviders);
              arProviders = GS.hideProvidersByName(
                arProviders,
                disabledProviders
              );
              arProviders = GS.hideProvidersByName(
                arProviders,
                hiddenProviders.join(',')
              );
              arProviders = GS.hideProvidersByName(arProviders, 'customopenid');

              var oButton = p['customButton'];
              if (
                !oButton &&
                p['customButtons'] &&
                p['customButtons'].length > 0
              )
                oButton = p['customButtons'][0];

              var pCustomProvider;
              if (
                oButton &&
                (!oButton.type ||
                  oButton.type.toLowerCase() == 'openid' ||
                  oButton.type.toLowerCase() == 'eventonly')
              ) {
                pCustomProvider = GS._getProviderByID(4121);
                pCustomProvider.imgName = 'openID';
              } else if (
                oButton &&
                oButton.type &&
                oButton.type.toLowerCase() == 'saml'
              ) {
                pCustomProvider = GS._getProviderByID(4122);
                pCustomProvider.name = 'saml-' + oButton.idpName;
                pCustomProvider.imgName = 'saml';
              }

              if (pCustomProvider) {
                if (!oButton.providerName) oButton.providerName = '';
                pCustomProvider.displayName = oButton.providerName;
                pCustomProvider.buttonData = oButton;

                arProviders[i] = pCustomProvider;
                arProviders.splice(
                  oButton.position && oButton.position > 1
                    ? oButton.position - 1
                    : 0,
                  0,
                  pCustomProvider
                );
              }

              for (var i = 0; i < arProviders.length; i++) {
                arProviders[i].context = {};
              }

              if (
                internals.getInfoResponse &&
                internals.getInfoResponse.user &&
                internals.getInfoResponse.user.identities
              ) {
                var identities = internals.getInfoResponse.user.identities;
                for (var identityName in identities) {
                  var identity = identities[identityName];
                  identity.connected = true;
                  var providerObj = GS._getProviderByName(identity.provider);
                  if (providerObj) {
                    if (!connected) connected = true;
                    providerObj.context = identity;
                  }
                }
              }

              var arConnectedProviders = [];
              for (var i = 0; i < arProviders.length; i++) {
                var arRequiredPermissions = [];
                if (
                  arProviders[i].context &&
                  arProviders[i].context.connected
                ) {
                  var hasAllRequiredPermissions = true;
                  if (arProviders[i].context.missingPermissions) {
                    var missingPermissionsString =
                      ',' +
                      arProviders[i].context.missingPermissions
                        .toLowerCase()
                        .replace(/ /g, '') +
                      ',';
                    var neededPermissions =
                      window.gigya.utils.object.extractProperty(
                        [c, p, internals],
                        arProviders[i].name + 'ExtraPermissions'
                      );
                    if (!neededPermissions)
                      neededPermissions =
                        window.gigya.utils.object.extractProperty(
                          [c, p, internals],
                          'extraPermissions'
                        );
                    if (!neededPermissions) neededPermissions = '';
                    neededPermissions = neededPermissions.toLowerCase();
                    var arNeededPermissions = neededPermissions.split(',');
                    for (
                      var iPermission = 0;
                      iPermission < arNeededPermissions.length;
                      iPermission++
                    ) {
                      if (
                        missingPermissionsString &&
                        missingPermissionsString
                          .toLowerCase()
                          .indexOf(
                            ',' + arNeededPermissions[iPermission] + ','
                          ) != -1
                      ) {
                        hasAllRequiredPermissions = false;
                        arRequiredPermissions.push(
                          arNeededPermissions[iPermission]
                        );
                      }
                    }
                  }
                  arProviders[i].context.requiredPermissions =
                    arRequiredPermissions.join(',');
                  if (hasAllRequiredPermissions) {
                    arConnectedProviders.push(arProviders[i]);
                  }
                }
              }

              arProviders = arConnectedProviders.concat(
                GS.hideProvidersByName(
                  arProviders,
                  arConnectedProviders.join(',')
                )
              );

              arProviders = GS.getProvidersForRequiredCapabilities(
                arProviders,
                requiredCapabilities
              );
              if (arProviders.length == 0 && !facebookSuggestEnabled) {
                window.gigya.events.dispatchErrorFromResponse(p, {
                  status: 'ERR_NO_PROVIDERS',
                  statusMessage: 'No providers',
                  errorCode: 400100,
                  errorMessage: 'No providers',
                });
                return;
              }

              var w = parseInt(p['width']);
              if (window.gigya.localInfo.isMobile) {
                var div = document.createElement('div');
                document.body.appendChild(div);
                var viewWidth = div.offsetWidth;
                div.parentNode.removeChild(div);
                w = Math.min(viewWidth, w);
              }
              var h = parseInt(p['height']);

              if (internals['isConnect']) lastLoginIndication = '';
              if (!internals['isConnect'] && lastLoginIndication == 'border') {
                for (var i = 0; i < arProviders.length; i++) {
                  var provider = arProviders[i];
                  if (arProviders[i].name == lastLoginProvider) {
                    arProviders.splice(i, 1);
                    arProviders.unshift(provider);
                    break;
                  }
                }
              }

              this.modules[containerID].arProviders = arProviders;

              var arrowW = 7;
              var arrowH = 12;

              var oSnButtonsStyle = resolver.Resolve(
                '+/config/body/controls/snbuttons'
              );
              var textUnder =
                buttonsStyle == '' && oSnButtonsStyle['type'] == 'textUnder';

              var buttonsize = p.buttonSize
                ? p.buttonSize
                : oSnButtonsStyle['buttonsize'];
              buttonsize = parseInt(buttonsize);

              if (buttonsize > h) buttonsize = h;
              if (arrowH > h) {
                arrowW = Math.floor((arrowW * h) / arrowH);
                arrowH = Math.floor((h * arrowW) / 7);
              }

              var iconSize = buttonsize;

              var oBgStyle = resolver.Resolve('+/config/body/background');

              if (internals['isPopup']) {
                oBgStyle['frame-thickness'] = 0;
              }
              var oLinkStyle = resolver.Resolve('+/config/body/texts/links');
              var linkHeight = this.getSingleLineHeight(oLinkStyle);
              var oTextStyle = resolver.Resolve('+/config/body/texts');

              var textStyle = GS.getStyleString(oTextStyle);
              var linkStyle = GS.getStyleString(oLinkStyle, true);
              var bgStyle = GS.getStyleString(oBgStyle);
              var snButtonsStyle = GS.getStyleString(oSnButtonsStyle);

              if (typeof iconSize == 'undefined' || isNaN(iconSize))
                iconSize = 30;

              if (!oStyle.minSize) oStyle.minSize = 15;
              if (!oStyle.maxSize) oStyle.maxSize = 65;
              var imgIconSize = Math.floor(iconSize / 5) * 5;
              //if (imgIconSize < 20 && oS)
              if (imgIconSize < oStyle.minSize) imgIconSize = oStyle.minSize;
              if (imgIconSize > oStyle.maxSize) imgIconSize = oStyle.maxSize;

              var scrollingLeftPath = base + 'paging/scrollingarrow_left.gif';
              var scrollingLeftDisablePath =
                base + 'paging/scrollingarrow_disable_left.gif';
              var scrollingRightPath = base + 'paging/scrollingarrow_right.gif';
              var scrollingRightDisablePath =
                base + 'paging/scrollingarrow_disable_right.gif';

              if (iconSize > 25) {
                scrollingLeftPath = base + 'paging/scrollingarrowl_left.gif';
                scrollingLeftDisablePath =
                  base + 'paging/scrollingarrowl_disable_left.gif';
                scrollingRightPath = base + 'paging/scrollingarrowl_right.gif';
                scrollingRightDisablePath =
                  base + 'paging/scrollingarrowl_disable_right.gif';
                if (arrowW == 7) arrowW = 10;
              }

              if (p.useLargeArrows) {
                scrollingLeftPath = base + 'paging/scrollingarrowll_left.gif';
                scrollingLeftDisablePath =
                  base + 'paging/scrollingarrowll_disable_left.gif';
                scrollingRightPath = base + 'paging/scrollingarrowll_right.gif';
                scrollingRightDisablePath =
                  base + 'paging/scrollingarrowll_disable_right.gif';
                arrowW = 20;
                arrowH = 40;
              }

              var maxRows = 1;
              var maxLines = 1;

              var hintW = 149;
              var hintH = 55;

              var headerText = p['headerText'];
              if (h < 50) headerText = null;
              var showHint =
                this.isTrue(p['showWhatsThis']) &&
                w > hintW &&
                h - linkHeight > hintH;
              internals.showHint = showHint;
              var showGigyaBranding =
                !this.isTrue(p['hideGigya'], false) &&
                !this.isTrue(p['hideGigyaLink'], false);
              var showWhatsThis = !showGigyaBranding && showHint;
              var showTerms = !window.gigya.utils.validation.isExplicitFalse(
                p['showTermsLink']
              );
              var showEdit =
                internals.isConnect &&
                connected &&
                !window.gigya.utils.validation.isExplicitFalse(
                  p['showEditLink']
                );
              var b = arProviders.length;

              //button size (image only)
              var pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
              var btnImgW = Math.round(iconSize * oStyle.ratio);
              var btnImgH = iconSize;

              var states = [''];
              var sStates = '[' + states.join(',') + ']';
              var resize = imgIconSize != iconSize || pixelRatio > 1;
              var arSpritesProviders = [];
              for (var i = 0; i < arProviders.length; i++) {
                arSpritesProviders[i] = arProviders[i].toString().split('-')[0];
              }
              arSpritesProviders = arSpritesProviders.sort(); //array is sorted for caching
              var spriteRenderer = window.gigya.global.getSpriteRenderers({
                loginIcons: {
                  path:
                    '/HTMLLogin/' +
                    styleBase +
                    '[' +
                    arSpritesProviders.join(',') +
                    ']_' +
                    sStates +
                    imgIconSize * pixelRatio +
                    oStyle.ext,
                  w: btnImgW,
                  h: btnImgH,
                  pixelRatio: pixelRatio,
                },
              });

              //div.innerHTML=sd.getHTML(div, 'yahoo_connected');

              //full button size (including image and text)
              var btnW = btnImgW;
              var btnH = btnImgH;

              //buttons spacing
              var bhs = 5;
              var bvs = 5;

              //outer margins
              var hm = 0; //arrows width
              var vm = 0; //bottom link height

              var outerFrameThickness = resolver.Resolve(
                '+/config/body/background'
              )['frame-thickness'];
              if (typeof outerFrameThickness == 'undefined')
                outerFrameThickness = 0;

              hm += outerFrameThickness * 2;
              vm += outerFrameThickness * 2;

              /*if (internals['isPopup']) {
             vm+=10;
             }*/

              if (showGigyaBranding || showWhatsThis || showTerms || showEdit) {
                vm += linkHeight;
              }
              if (headerText) {
                vm +=
                  window.gigya.pluginUtils.layout.measureText(
                    headerText,
                    oTextStyle
                  ).h + 4;
              }
              if (textUnder) {
                btnH += this.getSingleLineHeight(oSnButtonsStyle);
                for (var i = 0; i < arProviders.length; i++) {
                  btnW = Math.max(
                    btnW,
                    window.gigya.pluginUtils.layout.measureText(
                      arProviders[i].displayName,
                      oSnButtonsStyle
                    ).w + 4
                  );
                }
              }
              var maxButtonsInRow = Math.floor((w - hm + bhs) / (bhs + btnW));
              var maxButtonsInCol = Math.floor((h - vm + bvs) / (bvs + btnH));

              if (maxButtonsInCol < 1) {
                vm = 0;
                if (headerText) {
                  vm +=
                    window.gigya.pluginUtils.layout.measureText(
                      headerText,
                      oTextStyle
                    ).h + 4;
                }
                maxButtonsInCol = Math.floor((h - vm + bvs) / (bvs + btnH));
                if (maxButtonsInCol < 1) {
                  //Error?
                } else {
                  showGigyaBranding = false;
                  showWhatsThis = false;
                  showEdit = false;
                  showTerms = false;
                }
              }

              if (maxButtonsInCol * maxButtonsInRow < b) {
                // paging is needed, add arrowWidth to h margin and recalculate buttons in a row.
                hm += (arrowW + bhs) * 2;
                maxButtonsInRow = Math.floor((w - hm + bhs) / (bhs + btnW));
              }
              var totalb = b;
              b = b % (maxButtonsInRow * maxButtonsInCol);
              var optimalLastRowButtons = 0;
              var optimalRowButtons = 0;

              for (var r = maxButtonsInRow; r * maxButtonsInCol >= b; r--) {
                var lastRowButtons = b - r * Math.floor(b / r);
                if (lastRowButtons == 0) lastRowButtons = r;
                if (lastRowButtons > optimalLastRowButtons) {
                  optimalLastRowButtons = lastRowButtons;
                  optimalRowButtons = r;
                }
              }

              var iProvider = 0;
              if (maxButtonsInCol * maxButtonsInRow == 0) return;
              var pages = Math.ceil(
                totalb / (maxButtonsInCol * maxButtonsInRow)
              );
              if (pages == 1) maxButtonsInRow = optimalRowButtons;
              var pageWidth =
                Math.min(maxButtonsInRow, totalb) * (btnW + bhs) - bhs;

              var showWelcome = false;
              if (
                !internals['isConnect'] &&
                lastLoginProvider &&
                lastLoginIndication == 'welcome'
              ) {
                for (var i = 0; i < arProviders.length; i++) {
                  var provider = arProviders[i];
                  if (arProviders[i].name == lastLoginProvider) {
                    showWelcome = true;
                    break;
                  }
                }
              }

              var escapedID = containerID.replace(/[.]/g, '\\.');
              _pi.common.addCSS([
                '#',
                escapedID,
                ' td, #',
                escapedID,
                ' table {width:auto;font-size:1px;vertical-align:top;border-collapse:separate;border:none; padding:0px;margin:0px;} #',
                escapedID,
                ' {}',
                ' .tabbing-button{font-size: 0px;border: none;padding: 0;background-color: transparent;cursor: pointer;}',
              ]);

              if (typeof providers == 'undefined')
                providers = c['enabledProviders'];
              arHTML[a++] =
                '<table width="100%" cellspacing="0" cellpadding="0" style="' +
                tdStyle +
                bgStyle +
                'vertical-align: middle; width: ' +
                w +
                'px; height: ' +
                h +
                'px;"><tr><td style="vertical-align:middle;' +
                tdStyle +
                '"><center><table style="' +
                tdStyle +
                'vertical-align:middle; height: ' +
                h +
                'px;width:100%" align="center" cellspacing="0" cellpadding="0">';
              if (!showWelcome) {
                if (headerText) {
                  arHTML[a++] =
                    '<tr><td colspan="3"><div style="' +
                    textStyle +
                    ';padding-left:5px">' +
                    headerText +
                    '</div></td></tr>';
                }
                arHTML[a++] =
                  '<tr style="height:99%"><td  align="right" style="' +
                  tdStyle +
                  'vertical-align:middle;' +
                  (!alignToLeft ? 'width:48%;' : '') +
                  'text-align:right"><div align="right" style="text-align:right;width:auto">';
                if (pages > 1) {
                  arHTML[a++] =
                    '<div align="left" style="margin-left: auto;width:' +
                    (arrowW + bhs) +
                    'px; text-align: left"><div style="text-align:right;width: ' +
                    arrowW +
                    'px;"><img tabindex="0" aria-label="previous" title="previous" alt="previous" onkeydown="' +
                    gsLogin +
                    '.KeyDownHandler(event,this)" alt="" onclick="' +
                    gsLogin +
                    ".prevPage('" +
                    containerID +
                    '\')" style="cursor:pointer;display:none;width:' +
                    arrowW +
                    'px;" id="' +
                    containerID +
                    '_arrow_left" src="' +
                    scrollingLeftPath +
                    '" /><img title="previous button disabled" alt="previous button disabled" style="display:none;width:' +
                    arrowW +
                    'px;" id="' +
                    containerID +
                    '_arrow_left_disable" src="' +
                    scrollingLeftDisablePath +
                    '" /></div></div>';
                }
                arHTML[a++] = '</div></td>';
                arHTML[a++] =
                  '<td align="center" style="width:' +
                  pageWidth +
                  'px;' +
                  tdStyle +
                  'vertical-align:middle;white-space:nowrap" id="' +
                  containerID +
                  '_page">';
              } else {
                arHTML[a++] = '<td></td>';
                arHTML[a++] =
                  '<td align="left" style="' +
                  tdStyle +
                  'vertical-align:middle;white-space:nowrap" id="' +
                  containerID +
                  '_page">';
              }

              if (showWelcome) {
                var username = window.gigya.utils.sanitize.sanitizeHTML(
                  this.getLastLoginName()
                );

                var welcomeBtnSize = p['lastLoginButtonSize']
                  ? p['lastLoginButtonSize']
                  : 30;
                welcomeBtnSize = parseInt(welcomeBtnSize);

                var welcomeImgSize = Math.floor(welcomeBtnSize / 5) * 5;
                if (welcomeImgSize < 25) welcomeImgSize = 20;
                if (welcomeImgSize > 35) welcomeImgSize = 40;

                var hideNotYou = false;

                var notYou_text = this.TEXT(lang, 'not_you', '%user', username);
                var notYouWidth = window.gigya.pluginUtils.layout.measureText(
                  notYou_text,
                  oLinkStyle
                ).w;
                var welcome_back_username_text = this.TEXT(
                  lang,
                  'welcome_back_user',
                  '%user',
                  username
                );
                var welcomeBackWidth =
                  window.gigya.pluginUtils.layout.measureText(
                    welcome_back_username_text,
                    {
                      size: 16,
                      font: 'arial',
                      bold: true,
                    }
                  ).w;
                if (
                  welcomeBackWidth +
                    17 +
                    notYouWidth +
                    (internals['isPopup'] ? 25 : 0) >
                  w
                ) {
                  hideNotYou = true;
                  if (welcomeBackWidth > w) username = '';
                }

                var welcomeBackHTML =
                  '<span style="' +
                  textStyle +
                  ';font-size:16px;font-weight:bold;color:#4C4C4C">' +
                  this.TEXT(lang, 'welcome_back') +
                  '</span>';
                if (
                  typeof username != 'undefined' &&
                  username != '' &&
                  username != null
                ) {
                  welcomeBackHTML =
                    '<table cellspacing="0" cellpadding="0" style="vertical-align:middle"><tr><td style="' +
                    textStyle +
                    ';font-size:16px;font-weight:bold;color:#4C4C4C;white-space:nowrap">' +
                    welcome_back_username_text +
                    '</td>';
                  welcomeBackHTML +=
                    '<td style="padding-left:5px;white-space:nowrap" onclick="' +
                    gsLogin +
                    ".hideWelcome('" +
                    containerID +
                    '\');">';
                  if (!hideNotYou) {
                    welcomeBackHTML +=
                      '<table cellspacing="0" cellpadding="0" style="vertical-align:middle"><tr><td><img alt="" src="' +
                      base +
                      'NotYou_Left.png" /></td><td style="white-space:nowrap;vertical-align:middle;background-image:url(\'' +
                      base +
                      'NotYou_Mid.png\')"><div style="' +
                      linkStyle +
                      'font-size:10px">' +
                      notYou_text +
                      '</div></td><td><img alt="" src="' +
                      base +
                      'NotYou_Right.png" /></td></tr></table>';
                  }
                  welcomeBackHTML += '</td></tr></table>';
                }

                var btnSrc =
                  base +
                  'SignInWith/' +
                  lastLoginProvider +
                  '_' +
                  welcomeImgSize +
                  '.png';
                //var btnOverSrc = base + 'SignInWith/' + lastLoginProvider + '_' + welcomeImgSize + '_over.png';
                if (
                  lastLoginProvider == 'customopenid' ||
                  lastLoginProvider.indexOf('saml-') == 0
                ) {
                  var pCustomProvider = GS._getProviderByID(4121);
                  if (lastLoginProvider.indexOf('saml-') == 0)
                    pCustomProvider = GS._getProviderByID(4122);

                  if (
                    pCustomProvider.buttonData &&
                    pCustomProvider.buttonData.lastLoginIconURL
                  ) {
                    btnSrc = btnOverSrc =
                      pCustomProvider.buttonData.lastLoginIconURL;
                  } else {
                    btnSrc =
                      base + 'SignInWith/openid_' + welcomeImgSize + '.png';
                    //btnOverSrc = base + 'SignInWith/openid_' + welcomeImgSize + '_over.gif';
                  }
                }
                var SignInUsingADifferentNetwork_text = this.TEXT(
                  lang,
                  'sign_in_using_a_different_network'
                );
                var extraStyle = '';
                if (internals['isPopup']) extraStyle = 'padding-left:25px;';
                arHTML[a++] =
                  '<table id="' +
                  containerID +
                  '_welcome" cellspacing="0" cellpadding="0" style="width:100%;' +
                  tdStyle +
                  ';' +
                  extraStyle +
                  '">';

                arHTML[a++] =
                  '<tr><td style="' +
                  tdStyle +
                  'padding-bottom:13px;vertical-align:bottom"><div>' +
                  welcomeBackHTML +
                  '</div></td></tr>';
                arHTML[a++] =
                  '<tr><td height="' +
                  welcomeBtnSize +
                  '" style="' +
                  tdStyle +
                  'padding-bottom:15px;"><span tabindex="0" role="button" style="cursor:pointer" onkeydown="' +
                  gsLogin +
                  '.KeyDownHandler(event,this)" onclick="' +
                  gsLogin +
                  ".providerClick('" +
                  containerID +
                  "','" +
                  lastLoginProvider +
                  '\')"><img gigid="' +
                  provider +
                  '" alt="" height="' +
                  welcomeBtnSize +
                  '" src="' +
                  btnSrc +
                  '"  /></span></td></tr>';
                arHTML[a++] =
                  '<tr><td style="' +
                  tdStyle +
                  ';vertical-align:top"><span style="' +
                  linkStyle +
                  '" onclick="' +
                  gsLogin +
                  ".hideWelcome('" +
                  containerID +
                  '\');">' +
                  SignInUsingADifferentNetwork_text +
                  '</span></div></td></tr>';
                arHTML[a++] = '</table>';
              } else {
                for (var iPage = 0; iPage < pages; iPage++) {
                  arHTML[a++] =
                    '<table align="center" cellspacing="0" cellpadding="0" style="' +
                    tdStyle +
                    'display:none" id="' +
                    containerID +
                    '_p' +
                    iPage +
                    '">';
                  for (var iCol = 0; iCol < maxButtonsInCol; iCol++) {
                    var align = 'left';
                    if (
                      pages == 1 &&
                      iProvider + maxButtonsInRow > arProviders.length
                    )
                      align = 'center';
                    arHTML[a++] =
                      '<tr><td align="center" style="' +
                      tdStyle +
                      'vertical-align:middle"><table align="' +
                      align +
                      '" cellspacing="0" cellpadding="0" style="' +
                      tdStyle +
                      '"><tr>';
                    for (var iRow = 0; iRow < maxButtonsInRow; iRow++) {
                      var provider = arProviders[iProvider];
                      var paddingRules = '';
                      if (
                        iProvider + 1 < arProviders.length ||
                        (pages > 1 && iRow + 1 < maxButtonsInRow)
                      ) {
                        if (iRow < maxButtonsInRow - 1)
                          paddingRules += 'padding-right:' + bhs + 'px;';
                        if (iCol < maxButtonsInCol - 1)
                          paddingRules += 'padding-bottom:' + bvs + 'px;';
                      }
                      var disabled = false;
                      if (provider != null) {
                        var imgId =
                          (provider.imgName
                            ? provider.imgName
                            : provider.name) + '-';
                        if (
                          internals.isConnect &&
                          provider.context &&
                          provider.context.connected &&
                          provider.context.requiredPermissions == '' &&
                          !oStyle.noConnected
                        ) {
                          imgId += 'connected_';
                          disabled = true;
                        } else if (
                          lastLoginIndication == 'border' &&
                          provider.name == lastLoginProvider &&
                          !oStyle.noLastLogin
                        ) {
                          imgId += 'lastlogin_';
                        }
                        /*var imgSrc=styleBase+provider.name+'_'+imgIconSize;
                                 if (internals.isConnect && provider.context && (provider.context.connected && provider.context.requiredPermissions=='') && !oStyle.noConnected) {
                                 imgSrc += '_Connected';
                                 disabled=true;
                                 } else if (lastLoginIndication=='border' && provider.name==lastLoginProvider && !oStyle.noLastLogin) {
                                 imgSrc+='_LastLogin';
                                 }
                                 imgSrc+=oStyle.ext;*/

                        var title = provider.displayName;
                        var ariaLabel = provider.context.connected
                          ? `${provider.displayName} Connected`
                          : provider.displayName;
                        if (
                          window.gigya.utils.validation.isExplicitFalse(
                            p['showTooltips']
                          )
                        )
                          title = '';
                        //var dontUseSprites=(oStyle.dontUseSprites || imgIconSize!=iconSize)
                        var imgHTML = spriteRenderer.loginIcons.getHTML(
                          imgId,
                          false,
                          oStyle.dontUseSprites,
                          '',
                          title,
                          undefined,
                          title,
                          ariaLabel
                        );

                        var oButton = provider.buttonData;
                        if (
                          (provider.ID == 4121 || provider.ID == 4122) &&
                          oButton &&
                          oButton.iconURL
                        ) {
                          var iconURL = oButton.iconURL;
                          if (
                            internals.isConnect &&
                            provider.context &&
                            provider.context.connected &&
                            provider.context.requiredPermissions == '' &&
                            !oStyle.noConnected
                          ) {
                            iconURL = oButton.connectedIconURL
                              ? oButton.connectedIconURL
                              : window.gigya._.getCdnResource(
                                  '/gs/i/HTMLLogin/' +
                                    styleBase +
                                    'openid_' +
                                    imgIconSize +
                                    (disabled ? '_connected' : '') +
                                    '.png'
                                );
                            disabled = true;
                          } else if (provider.name == lastLoginProvider) {
                            iconURL = oButton.lastLoginIconURL;
                          }
                          if (iconURL) {
                            imgHTML =
                              '<div style="width:' +
                              btnImgW +
                              'px;height:' +
                              btnImgH +
                              "px;background-image:url('" +
                              iconURL +
                              '\');background-position:center;background-repeat:no-repeat;">&#160;</div>';
                          }
                        }

                        if (disabled) {
                          arHTML[a++] =
                            '<td style="' +
                            tdStyle +
                            snButtonsStyle +
                            paddingRules +
                            'text-align:center;vertical-align:top"><center><div title="' +
                            title +
                            '" style="width:' +
                            btnW +
                            'px;"><div gigid="' +
                            provider +
                            '" style="width:' +
                            btnImgW +
                            'px; height:' +
                            btnImgH +
                            'px">' +
                            imgHTML +
                            '</div>';
                        } else {
                          arHTML[a++] =
                            '<td style="' +
                            tdStyle +
                            snButtonsStyle +
                            paddingRules +
                            'text-align:center;vertical-align:top"><center><div onkeydown="' +
                            gsLogin +
                            '.KeyDownHandler(event,this)"  onclick="' +
                            gsLogin +
                            ".providerClick('" +
                            containerID +
                            "','" +
                            provider.name +
                            '\')" title="' +
                            title +
                            '" alt="' +
                            title +
                            '" style="zoom:1;cursor:pointer; width:' +
                            btnW +
                            'px;"><div gigid="' +
                            provider +
                            '" style="width:' +
                            btnImgW +
                            'px; height:' +
                            btnImgH +
                            'px">' +
                            imgHTML +
                            '</div>';
                        }

                        if (textUnder) {
                          arHTML[a++] =
                            '<div style="margin:0px;padding-top:2px;' +
                            snButtonsStyle +
                            '">' +
                            provider.displayName +
                            '</div>';
                        }
                        arHTML[a++] = '</div></center></td>';
                        iProvider++;
                      } else if (pages > 1) {
                        arHTML[a++] =
                          '<td style="' +
                          tdStyle +
                          snButtonsStyle +
                          paddingRules +
                          'vertical-align:top;"><div style="width:' +
                          btnW +
                          'px;height:' +
                          btnH +
                          'px">&#160;</div></td>';
                      }
                    }
                    arHTML[a++] = '</tr></table></td></tr>';
                  }
                  arHTML[a++] = '</table>';
                }
              }
              arHTML[a++] = '</td>';
              if (!showWelcome) {
                arHTML[a++] =
                  '<td align="left" style="' +
                  tdStyle +
                  'vertical-align:middle;width:48%">';
                if (pages > 1 && !showWelcome) {
                  arHTML[a++] =
                    '<div style="' +
                    tdStyle +
                    'text-align:right; width:' +
                    (arrowW + bhs) +
                    'px;"><img tabindex="0" aria-label="next" title="next" alt="next" onkeydown="' +
                    gsLogin +
                    '.KeyDownHandler(event,this)"  onclick="' +
                    gsLogin +
                    ".nextPage('" +
                    containerID +
                    '\')" style="cursor:pointer;display:none;width:' +
                    arrowW +
                    'px;" id="' +
                    containerID +
                    '_arrow_right" src="' +
                    scrollingRightPath +
                    '" /><img title="next button disabled" alt="next button disabled" style="display:none;width:' +
                    arrowW +
                    'px;" id="' +
                    containerID +
                    '_arrow_right_disable" src="' +
                    scrollingRightDisablePath +
                    '" /></div>';
                }
                arHTML[a++] = '</td>';
              } else {
                arHTML[a++] = '<td></td>';
              }
              arHTML[a++] = '</tr>';

              var leftBottomLinkHTML = '';
              if (showTerms) {
                leftBottomLinkHTML =
                  '<a target="_blank" href="http://www.gigya.com/terms-of-service/" style="' +
                  linkStyle +
                  ';padding-right:5px;text-decoration:none;font-size:11px">' +
                  this.TEXT(lang, 'terms') +
                  '</a>';
              }
              if (showEdit) {
                if (showTerms)
                  leftBottomLinkHTML +=
                    '<span style="' + linkStyle + ';cursor:default;">|</span>';
                leftBottomLinkHTML +=
                  '<span tabindex="0" style="' +
                  linkStyle +
                  ';padding-right:5px;padding-left:5px;text-decoration:none;font-size:11px" onkeydown="' +
                  gsLogin +
                  '.KeyDownHandler(event,this)" onclick="' +
                  gsLogin +
                  ".showEdit('" +
                  containerID +
                  '\')">' +
                  this.TEXT(lang, 'edit') +
                  '</span>';
              }
              var rightBottomLinkHTML = '';
              if (showGigyaBranding) {
                rightBottomLinkHTML +=
                  '<a target="_blank" tabindex="0" href="http://www.gigya.com/"  style="color:#005997;font-weight:bold; font-size:11px;cursor:pointer" onfocusin="' +
                  gsLogin +
                  ".showWhatsThis('" +
                  containerID +
                  '\')" onfocusout="' +
                  gsLogin +
                  ".hideWhatsThis('" +
                  containerID +
                  '\')" onMouseOut="' +
                  gsLogin +
                  ".hideWhatsThis('" +
                  containerID +
                  '\')" onMouseOver="' +
                  gsLogin +
                  ".showWhatsThis('" +
                  containerID +
                  '\')"><span style="color:#6E6E6E;font-weight:bold; font-size:11px;cursor:pointer">Social by </span>Gigya</a>';
              } else if (
                showWhatsThis &&
                navigator.userAgent.toLowerCase().indexOf('iphone') == -1
              ) {
                rightBottomLinkHTML +=
                  '<span style="' +
                  linkStyle +
                  ';text-decoration:underline;" onMouseOut="' +
                  gsLogin +
                  ".hideWhatsThis('" +
                  containerID +
                  '\')" onMouseOver="' +
                  gsLogin +
                  ".showWhatsThis('" +
                  containerID +
                  '\')">' +
                  this.TEXT(lang, 'whats_this') +
                  '</span>';
              }

              var linksWidth =
                window.gigya.pluginUtils.layout.measureText(leftBottomLinkHTML)
                  .w +
                window.gigya.pluginUtils.layout.measureText(rightBottomLinkHTML)
                  .w;
              if (linksWidth > w) {
                rightBottomLinkHTML = '';
                linksWidth =
                  window.gigya.pluginUtils.layout.measureText(
                    leftBottomLinkHTML
                  ).w;
              }
              if (
                (showEdit || showTerms || showGigyaBranding || showWhatsThis) &&
                linksWidth < w &&
                oLinkStyle.color.toLowerCase() != 'transparent'
              ) {
                if (!internals.isPopup && linksWidth + 10 < pageWidth) {
                  arHTML[a++] =
                    '<tr height="' +
                    linkHeight +
                    '"><td></td><td align="right" style="vertical-align:bottom"><div id="' +
                    containerID +
                    '_bottomLink">';
                  arHTML[a++] =
                    '<table cellspacing="0" cellpadding="0" style="' +
                    tdStyle +
                    'width:100%"><tr><td align="left">' +
                    leftBottomLinkHTML +
                    '</td><td style="white-space:nowrap" align="right">' +
                    rightBottomLinkHTML +
                    '</td></tr></table>';
                  arHTML[a++] = '</div></td><td></td></tr>';
                } else {
                  arHTML[a++] =
                    '<tr height="' +
                    linkHeight +
                    '"><td colspan="3" align="right" style="text-align:right;vertical-align:bottom"><center><div id="' +
                    containerID +
                    '_bottomLink" style="margin:0px;padding-top:0px;padding-bottom:2px;width:100%">';
                  arHTML[a++] =
                    '<table style="width:100%;" cellspacing="0" cellpadding="0"><tr>';
                  arHTML[a++] = '<td style="width:5px;"></td>';
                  if (leftBottomLinkHTML != '') {
                    arHTML[a++] =
                      '<td align="left">' + leftBottomLinkHTML + '</td>';
                  }
                  if (rightBottomLinkHTML != '') {
                    arHTML[a++] =
                      '<td align="right" style="text-align:right;white-space:nowrap">' +
                      rightBottomLinkHTML +
                      '</td>';
                  }
                  arHTML[a++] = '<td style="width:5px;"></td>';
                  arHTML[a++] = '</tr></table>';
                  arHTML[a++] = '</div></center></td></tr>';
                }
              }
              arHTML[a++] = '</table></center></td></tr></table>';
              if (showHint) {
                var whatsThisDiv = document.getElementById(
                  containerID + '_whatsThis'
                );
                if (!whatsThisDiv) {
                  whatsThisDiv = document.createElement('div');
                  whatsThisDiv.id = containerID + '_whatsThis';
                  whatsThisDiv.style.visibility = 'hidden';
                  whatsThisDiv.style.position = 'absolute';
                  document.body.appendChild(whatsThisDiv);
                }
                whatsThisDiv.style.zIndex =
                  window.gigya.utils.DOM.getNextZIndex();
                var whatsThisText = p['whatsThisText'];
                //if (!whatsThisText) whatsThisText = 'You can use your account from one of these services to sign into the site';
                if (!whatsThisText) {
                  if (internals.isConnect) {
                    whatsThisText = this.TEXT(
                      lang,
                      'add_more_connections_to_your_account'
                    );
                  } else {
                    whatsThisText = this.TEXT(
                      lang,
                      'you_can_use_your_account_from_one_of_these_services_to_sign_into_the_site'
                    );
                  }
                }
                whatsThisDiv.innerHTML =
                  '<table style="padding: 5px; background-color:#FFFFFF;border: 1px solid #767676;width:' +
                  hintW +
                  'px;height:' +
                  hintH +
                  'px" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle; text-align:center"><span align="left" style="' +
                  textStyle +
                  ';width: ' +
                  (hintW - 8) +
                  'px; color:#262626; ">' +
                  whatsThisText +
                  '</span></td></tr></table>';
              }

              var container = document.getElementById(containerID);
              container.innerHTML = arHTML.join('');
              container.style.width = '' + w + 'px';
              container.style.height = '' + h + 'px';

              this.modules[containerID].pages = pages;
              if (!showWelcome) {
                this.updatePage(containerID);
              }
            };
            _pi.login.nextPage = function (id) {
              this.modules[id].page++;
              this.updatePage(id);
            };
            _pi.login.prevPage = function (id) {
              this.modules[id].page--;
              this.updatePage(id);
            };
            _pi.login.KeyDownHandler = function (event, el) {
              if (!el || !event) return;

              if (event.code === 'Space' || event.code === 'Enter') {
                el.click();
              }
            };
            _pi.login.showEdit = function (id) {
              var params = window.gigya.utils.object.clone(this.modules[id].p);
              delete params.width;
              delete params.height;
              delete params.containerID;
              window.gigya.socialize.showEditConnectionsUI(params);
            };
            _pi.login.showWhatsThis = function (id) {
              if (this.modules[id].i.showHint) {
                var el = document.getElementById(id + '_whatsThis');
                if (el) {
                  var container = document.getElementById(id);
                  var pos = window.gigya.global._GetElementPos(container);
                  el.style.left =
                    pos.left +
                    (parseInt(container.style.width) - el.offsetWidth) / 2 +
                    'px';
                  el.style.top =
                    pos.top +
                    (parseInt(container.style.height) - el.offsetHeight) / 2 +
                    'px';
                  el.style.visibility = 'visible';
                }
              }
            };
            _pi.login.hideWhatsThis = function (id) {
              var el = document.getElementById(id + '_whatsThis');
              if (el) {
                el.style.visibility = 'hidden';
              }
            };
            _pi.login.hideWelcome = function (id) {
              window.gigya.utils.cookie.remove('_gig_llp');
              window.gigya.utils.cookie.remove('_gig_llu');
              var m = this.modules[id];
              window.gigya.thisScript.globalConf.alwaysForceAuthentication = true; //feature #7643
              this.showLoginUI_v1(m.originalC, m.originalP, m.i, true);
            };
            _pi.login.updatePage = function (id) {
              var m = this.modules[id];
              if (m.pageDiv) m.pageDiv.style.display = 'none';
              m.pageDiv = document.getElementById(id + '_p' + m.page);
              if (m.pageDiv) m.pageDiv.style.display = '';
              if (m.pages > 1) {
                var r = document.getElementById(id + '_arrow_right');
                var rd = document.getElementById(id + '_arrow_right_disable');
                var l = document.getElementById(id + '_arrow_left');
                var ld = document.getElementById(id + '_arrow_left_disable');
                if (m.page == 0) {
                  l.style.display = 'none';
                  ld.style.display = '';
                } else {
                  l.style.display = '';
                  ld.style.display = 'none';
                }
                if (m.page == m.pages - 1) {
                  r.style.display = 'none';
                  rd.style.display = '';
                } else {
                  r.style.display = '';
                  rd.style.display = 'none';
                }
              }
            };

            _pi.login.getLastLogin = function () {
              return window.gigya.utils.cookie.get('_gig_llp');
            };
            _pi.login.getLastLoginName = function () {
              return window.gigya.utils.cookie.get('_gig_llu');
            };
            _pi.login.providerClick = function (id, provider) {
              var o = this.modules[id];
              var providerObj = window.gigya.socialize._getProviderByName(
                provider,
                o.arProviders
              );
              if (!providerObj)
                providerObj =
                  window.gigya.socialize._getProviderByName(provider);
              var params = {
                provider: provider,
                callback: function (res) {
                  if (res.errorCode != 0) {
                    delete res.requestParams.getInfoResponse;
                    delete res.requestParams.context;
                    delete res.context;
                    window.gigya.events.dispatchErrorFromResponse(o.p, res);
                  } else {
                    if (o.i.isPopup) {
                      window.gigya.socialize._closeComponent(o.i.rid, true);
                    }
                    var eventName = o.i.isConnect ? 'connectionAdded' : 'login';
                    var oEvent = window.gigya._.addUserInfoToEvent(
                      res,
                      {
                        eventName: eventName,
                        provider: provider,
                        response: res,
                      },
                      true
                    );
                    window.gigya.events.dispatchForWidget(oEvent, o.p);
                  }
                },
              };

              //Will always get ALL of the permissions
              //if (providerObj.context && !providerObj.context.connected && providerObj.context.requiredPermissions) o.p[provider+'ExtraPermissions']=providerObj.context.requiredPermissions;
              var This = this;

              if (providerObj.ID == 4121) {
                var oButton = providerObj.buttonData;
                params['openIDProviderName'] = oButton.providerName;
                params['openIDProviderLogo'] = oButton.logoURL;
                params['openIDURL'] = oButton.openIDURL;
              }

              if (
                providerObj.ID != 4121 ||
                providerObj.buttonData.type == 'openID'
              ) {
                if (o.i.isConnect) {
                  if (providerObj.context && providerObj.context.connected) {
                    var This = this;
                    params.callback = function () {
                      window.gigya.events.dispatchForWidget(
                        { eventName: 'permissions', provider: provider },
                        o.p
                      );
                      This.redraw(id);
                    };
                    window.gigya.socialize.requestPermissions(o.c, o.p, params);
                  } else {
                    window.gigya.socialize.connect(o.c, o.p, params);
                  }
                } else if (o.p.accountsSocialLogin) {
                  window.gigya.accounts.socialLogin(o.c, o.p, params);
                } else {
                  window.gigya.socialize.login(o.c, o.p, params);
                }
              }
              var evt = { eventName: 'buttonClicked' };
              if (providerObj.buttonData) evt.button = providerObj.buttonData;
              window.gigya.events.dispatchForWidget(evt, o.p);
            };
          }
        })();

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLmxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGVBQWUsWUFBSyxtQ0FBbUMsWUFBSztBQUM1RCxjQUFjLFlBQUs7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpSEFBaUg7QUFDakg7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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c0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbGVnYWN5L3BsdWdpbnMvZ2lneWEuc2VydmljZXMuc29jaWFsaXplLnBsdWdpbnMubG9naW4uanNcIik7XG4iLCIoZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgZ2lneWEuc29jaWFsaXplLnBsdWdpbnMgPT0gJ3VuZGVmaW5lZCcpIGdpZ3lhLnNvY2lhbGl6ZS5wbHVnaW5zID0ge307XG4gICAgdmFyIF9waSA9IGdpZ3lhLnNvY2lhbGl6ZS5wbHVnaW5zO1xuXG4gICAgaWYgKHR5cGVvZiBfcGkuY29tbW9uID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIF9waS5jb21tb24gPSBfcGkuY29tbW9uIHx8IHt9O1xuICAgICAgICBfcGkuY29tbW9uLmFkZENTUyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgICAgICAgICAgIGlmICghY3NzIHx8IGNzcyA9PSBcIlwiKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoY3NzIGluc3RhbmNlb2YgQXJyYXkpIGNzcyA9IGNzcy5qb2luKCcnKTtcblxuICAgICAgICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgICAgICAgdmFyIHJ1bGVzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cbiAgICAgICAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KVxuICAgICAgICAgICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJ1bGVzTm9kZS5ub2RlVmFsdWU7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQocnVsZXNOb2RlKTtcblxuICAgICAgICAgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIik7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICAoaGVhZC5sZW5ndGggPiAwID8gaGVhZFswXSA6IGJvZHkpLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoKHR5cGVvZiBfcGkubG9naW4gPT0gJ3VuZGVmaW5lZCcpIHx8ICh0eXBlb2YgX3BpLmxvZ2luLnNob3dMb2dpblVJX3YxID09ICd1bmRlZmluZWQnKSkge1xuICAgICAgICBfcGkubG9naW4gPSBfcGkubG9naW4gfHwge307XG4gICAgICAgIF9waS5sb2dpbi5tb2R1bGVzID0ge307XG4gICAgICAgIF9waS5sb2dpbi5yZWRyYXcgPSBmdW5jdGlvbiAoY29udGFpbmVySUQpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJRCkgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySUQpLmlubmVySFRNTCAhPSAnJiMxNjA7Jykge1xuICAgICAgICAgICAgICAgIHZhciBtID0gdGhpcy5tb2R1bGVzW2NvbnRhaW5lcklEXTtcbiAgICAgICAgICAgICAgICBpZiAobS5pLmlzQ29ubmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dBZGRDb25uZWN0aW9uc1VJX3YxKG0ub3JpZ2luYWxDLCBtLm9yaWdpbmFsUCwgbS5pLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuc2hvd0xvZ2luVUlfdjEobS5vcmlnaW5hbEMsbS5vcmlnaW5hbFAsbS5pLHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBfcGkubG9naW4uZ2V0U3R5bGUgPSBmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgICAgICAgIHZhciBvU3R5bGUgPSB7fTtcbiAgICAgICAgICAgIHN3aXRjaCAoc3R5bGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Z1bGxsb2dvY29sb3JlZCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByYXRpbzogMi42LFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogJ0Z1bGxMb2dvQ29sb3JlZC8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0OiAnLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBub0Nvbm5lY3RlZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnZnVsbGxvZ28nOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW86IDIuNixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6ICdGdWxsTG9nby8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0OiAnLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBub0Nvbm5lY3RlZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnc2lnbmlud2l0aCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByYXRpbzogNy4wNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6ICdTaWduSW5XaXRoLycsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHQ6ICcucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vTGFzdExvZ2luOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9Db25uZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5TaXplOiAyMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhdGlvOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0OiAnLnBuZydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIF9waS5sb2dpbi5nZXRTaW5nbGVMaW5lSGVpZ2h0ID0gZnVuY3Rpb24gKG9TdHlsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGdpZ3lhLnBsdWdpblV0aWxzLmxheW91dC5tZWFzdXJlVGV4dCgnV2cnLCBvU3R5bGUpLmggKyA0O1xuICAgICAgICB9O1xuXG4gICAgICAgIF9waS5sb2dpbi5pc1RydWUgPSBmdW5jdGlvbiAodiwgZGVmKSB7XG4gICAgICAgICAgICBpZiAodiA9PSBudWxsKSByZXR1cm4gZGVmO1xuICAgICAgICAgICAgcmV0dXJuICh2ICYmICh2ID09IHRydWUgfHwgdi50b0xvd2VyQ2FzZSgpID09ICd0cnVlJykpO1xuICAgICAgICB9O1xuICAgICAgICBfcGkubG9naW4uc2hvd0xvZ2luVUlfdjEgPSBmdW5jdGlvbiAoYywgcCwgaW50ZXJuYWxzLCBpc0V2ZW50KSB7XG4gICAgICAgICAgICBpbnRlcm5hbHMuaXNDb25uZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNob3dVSShjLCBwLCBpbnRlcm5hbHMpO1xuICAgICAgICAgICAgaWYgKCFpc0V2ZW50KSB7XG4gICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KHtldmVudE5hbWU6ICdsb2FkJywgY29udGFpbmVySUQ6IHBbJ2NvbnRhaW5lcklEJ119LCBwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3BpLmxvZ2luLnNob3dBZGRDb25uZWN0aW9uc1VJX3YxID0gZnVuY3Rpb24gKGMsIHAsIGludGVybmFscywgaXNFdmVudCkge1xuICAgICAgICAgICAgaW50ZXJuYWxzLmlzQ29ubmVjdCA9IHRydWU7XG4gICAgICAgICAgICBpZiAocC5yZXF1aXJlZENhcGFiaWxpdGllcyA9PSBudWxsKSBwLnJlcXVpcmVkQ2FwYWJpbGl0aWVzID0gJ2ZyaWVuZHMnO1xuICAgICAgICAgICAgdGhpcy5zaG93VUkoYywgcCwgaW50ZXJuYWxzKTtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgY2lkOiBwLmNpZCxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogdGhpcy5hZnRlckdldEluZm8sXG4gICAgICAgICAgICAgICAgY29udGV4dDoge1RoaXM6IHRoaXMsIGNvbmY6IGMsIHBhcmFtczogcCwgaW50ZXJuYWxzOiBpbnRlcm5hbHN9LFxuICAgICAgICAgICAgICAgIGVuYWJsZWRQcm92aWRlcnM6IHAuZW5hYmxlZFByb3ZpZGVycyxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFByb3ZpZGVyczogcC5kaXNhYmxlZFByb3ZpZGVycyxcbiAgICAgICAgICAgICAgICByZXF1aXJlZENhcGFiaWxpdGllczogcC5yZXF1aXJlZENhcGFiaWxpdGllcyxcbiAgICAgICAgICAgICAgICBvYXV0aF90b2tlbjogcC5vYXV0aF90b2tlblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2lneWEuc29jaWFsaXplLmdldFVzZXJJbmZvKGMsIHBhcmFtcyk7XG4gICAgICAgICAgICBpZiAoIWlzRXZlbnQpIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldCh7ZXZlbnROYW1lOiAnbG9hZCcsIGNvbnRhaW5lcklEOiBwWydjb250YWluZXJJRCddfSwgcCk7XG4gICAgICAgIH07XG4gICAgICAgIF9waS5sb2dpbi5hZnRlckdldEluZm8gPSBmdW5jdGlvbiAocmVzLCBvdmVyaWRlQ29udGV4dCkge1xuICAgICAgICAgICAgdmFyIEdTID0gZ2lneWEuc29jaWFsaXplO1xuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSByZXMuY29udGV4dDtcbiAgICAgICAgICAgIGlmIChvdmVyaWRlQ29udGV4dCkgY29udGV4dCA9IG92ZXJpZGVDb250ZXh0O1xuICAgICAgICAgICAgaWYgKHJlcy5lcnJvckNvZGUgIT0gMCAmJiAhcmVzLnVzZXIpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzLnJlcXVlc3RQYXJhbXMuZ2V0SW5mb1Jlc3BvbnNlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXMucmVxdWVzdFBhcmFtcy5jb250ZXh0O1xuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXMuY29udGV4dDtcbiAgICAgICAgICAgICAgICBnaWd5YS5ldmVudHMuZGlzcGF0Y2hFcnJvckZyb21SZXNwb25zZShjb250ZXh0LnBhcmFtcywgcmVzKTtcbiAgICAgICAgICAgICAgICAvL0dTLl9jbG9zZUNvbXBvbmVudChjb250ZXh0LmludGVybmFscy5yaWQsY29udGV4dC5pbnRlcm5hbHMuaXNQb3B1cCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5pbnRlcm5hbHMuZ2V0SW5mb1Jlc3BvbnNlID0gcmVzO1xuXG4gICAgICAgICAgICBjb250ZXh0LlRoaXMuc2hvd1VJLmFwcGx5KGNvbnRleHQuVGhpcywgW2NvbnRleHQuY29uZiwgY29udGV4dC5wYXJhbXMsIGNvbnRleHQuaW50ZXJuYWxzXSk7XG4gICAgICAgIH07XG4gICAgICAgIF9waS5sb2dpbi5URVhUID0gZnVuY3Rpb24gKGxhbmcsIHRleHRLZXksIHJlcGxhY2VTdHIsIHdpdGhTdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBnaWd5YS5wbHVnaW5VdGlscy5sYW5nLmdldExvY2FsaXplZFRleHQoJ2dpZ3lhLnNlcnZpY2VzLnNvY2lhbGl6ZS5wbHVnaW5zLmxvZ2luLmpzJywgdGV4dEtleSwgbGFuZywgcmVwbGFjZVN0ciwgd2l0aFN0cik7XG4gICAgICAgIH07XG4gICAgICAgIF9waS5sb2dpbi5zaG93VUkgPSBmdW5jdGlvbiAoYywgcCwgaW50ZXJuYWxzKSB7XG5cblxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBbJ2NvbnRhaW5lcklEJ10pID09IG51bGwpIHJldHVybjtcbiAgICAgICAgICAgIHZhciBHUyA9IGdpZ3lhLnNvY2lhbGl6ZTtcbiAgICAgICAgICAgIHZhciByaWQgPSBpbnRlcm5hbHNbJ3JpZCddO1xuICAgICAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgdGRTdHlsZSA9ICdtYXJnaW46MHB4O3BhZGRpbmc6MHB4O2JvcmRlcjowcHg7JztcblxuICAgICAgICAgICAgdmFyIHJlc29sdmVyID0gbmV3IGdpZ3lhLmdsb2JhbC5yZXNvbHZlcihnaWd5YS5nbG9iYWwucmVzb2x2ZXIuZGVmYXVsdFByb2NjZXNzb3IpO1xuICAgICAgICAgICAgcmVzb2x2ZXIuYWRkQ29uZmlnKCc8Y29uZmlnPjxib2R5IGZvbnQ9XCJhcmlhbFwiPjxjYXB0aW9ucyBib2xkPVwidHJ1ZVwiIHNpemU9XCIxNlwiIGNvbG9yPVwiIzRjNGM0Y1wiIC8+PGNvbnRyb2xzIHNpemU9XCIxMVwiPjxzbmJ1dHRvbnMgdHlwZT1cIlwiIGJ1dHRvbnNpemU9XCIzMFwiIGNvbG9yPVwiIzliOWI5YlwiIC8+PC9jb250cm9scz48YmFja2dyb3VuZCBiYWNrZ3JvdW5kLWNvbG9yPVwidHJhbnNwYXJlbnRcIiAvPjx0ZXh0cyBzaXplPVwiMTFcIj48bGlua3MgY29sb3I9XCIjMTM3MWI5XCIgLz48L3RleHRzPjwvYm9keT48L2NvbmZpZz4nKTtcbiAgICAgICAgICAgIGlmIChpbnRlcm5hbHNbJ2lzUG9wdXAnXSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmVyLmFkZENvbmZpZygnPGNvbmZpZz48Ym9keT48YmFja2dyb3VuZCBmcmFtZS10aGlja25lc3M9XCI1XCIgZnJhbWUtY29sb3I9XCIjOTk5OTk5XCIgLz48Y29udHJvbHMgc2l6ZT1cIjExXCI+PHNuYnV0dG9ucyB0eXBlPVwidGV4dFVuZGVyXCIgYnV0dG9uc2l6ZT1cIjM1XCIgY29sb3I9XCIjOWI5YjliXCIgLz48L2NvbnRyb2xzPjwvYm9keT48L2NvbmZpZz4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmVyLmFkZENvbmZpZyhjWydVSUNvbmZpZyddKTtcbiAgICAgICAgICAgIHJlc29sdmVyLmFkZENvbmZpZyhwWydVSUNvbmZpZyddKTtcblxuICAgICAgICAgICAgdmFyIGxhbmcgPSBjWydsYW5nJ107XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBbJ2xhbmcnXSAhPSAndW5kZWZpbmVkJykgbGFuZyA9IHBbJ2xhbmcnXTtcblxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsQyA9IGM7XG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxQID0gcDtcbiAgICAgICAgICAgIGlmIChpbnRlcm5hbHNbJ2lzUG9wdXAnXSkge1xuICAgICAgICAgICAgICAgIHZhciBjYXB0aW9uVGV4dDtcbiAgICAgICAgICAgICAgICBpZiAocFsnY2FwdGlvblRleHQnXSkge1xuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uVGV4dCA9IHBbJ2NhcHRpb25UZXh0J107XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGludGVybmFscy5pc0Nvbm5lY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcHRpb25UZXh0ID0gdGhpcy5URVhUKGxhbmcsICdjb25uZWN0X3dpdGhfeW91cl9mcmllbmRzJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uVGV4dCA9IHRoaXMuVEVYVChsYW5nLCAnbG9naW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIG9Qb3B1cCA9IGdpZ3lhLnNvY2lhbGl6ZS5fY3JlYXRlSlNQb3B1cDIocmlkLCByZXNvbHZlciwgNSwgZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvSFRNTExvZ2luL0RpYWxvZy9EaWFsb2dfJyksIGNhcHRpb25UZXh0KTtcbiAgICAgICAgICAgICAgICBjID0gb1BvcHVwLmM7XG4gICAgICAgICAgICAgICAgcCA9IG9Qb3B1cC5wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgYmFzZSA9IGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoJy9ncy9pL0hUTUxMb2dpbi8nKTtcbiAgICAgICAgICAgIHZhciBnc0xvZ2luID0gJ2dpZ3lhLnNvY2lhbGl6ZS5wbHVnaW5zLmxvZ2luJztcbiAgICAgICAgICAgIHZhciBsYXN0TG9naW5Qcm92aWRlciA9IHRoaXMuZ2V0TGFzdExvZ2luKCk7XG4gICAgICAgICAgICB2YXIgbGFzdExvZ2luSW5kaWNhdGlvbiA9IChwWydsYXN0TG9naW5JbmRpY2F0aW9uJ10gPyBwWydsYXN0TG9naW5JbmRpY2F0aW9uJ10udG9Mb3dlckNhc2UoKSA6ICdib3JkZXInKTtcbiAgICAgICAgICAgIHZhciBmYWNlYm9va1N1Z2dlc3RFbmFibGVkID0gKHAuYXV0b0RldGVjdFVzZXJQcm92aWRlcnMgJiYgcC5hdXRvRGV0ZWN0VXNlclByb3ZpZGVycy50b0xvd2VyQ2FzZSgpID09ICdmYWNlYm9vaycgJiYgKCFsYXN0TG9naW5Qcm92aWRlciB8fCBsYXN0TG9naW5JbmRpY2F0aW9uICE9ICd3ZWxjb21lJykpXG4gICAgICAgICAgICB2YXIgaGlkZGVuUHJvdmlkZXJzID0gW107XG5cbiAgICAgICAgICAgIGlmICghaW50ZXJuYWxzLmlzQ29ubmVjdCAmJiBnaWd5YS5leHRlcm5hbC5mYWNlYm9vay5pc0xvZ2dlZEluKSB7XG4gICAgICAgICAgICAgICAgdmFyIGh0bWxMb2dpblBsdWdpbiA9ICc8ZGl2IGlkPVwiJyArIHBbJ2NvbnRhaW5lcklEJ10gKyAnX2NvbnRhaW5lclwiPjwvZGl2Pic7XG4gICAgICAgICAgICAgICAgdmFyIGh0bWxTdWdnZXN0RmFjZWJvb2sgPSAnPGRpdiB0YWJpbmRleD1cIjBcIiBvbmtleWRvd249XCInICsgZ3NMb2dpbiArICcuS2V5RG93bkhhbmRsZXIoZXZlbnQsdGhpcylcIiByb2xlPVwiYnV0dG9uXCIgb25tb3VzZW92ZXI9XCJ0aGlzLnN0eWxlLm9wYWNpdHk9MC43NTt0aGlzLnN0eWxlLmZpbHRlcj1cXCdhbHBoYShvcGFjaXR5PTc1KVxcJ1wiIG9ubW91c2VvdXQ9XCJ0aGlzLnN0eWxlLm9wYWNpdHk9MTt0aGlzLnN0eWxlLmZpbHRlcj1cXCdhbHBoYShvcGFjaXR5PTEwMClcXCdcIiBpZD1cIicgKyBvcmlnaW5hbFBbJ2NvbnRhaW5lcklEJ10gKyAnX3N1Z2dlc3RGQlwiIHN0eWxlPVwidGV4dC1hbGlnbjpsZWZ0O2JvcmRlcjowO3BhZGRpbmc6MDttYXJnaW46MDtjdXJzb3I6cG9pbnRlclwiIG9uY2xpY2s9XCInICsgZ3NMb2dpbiArICcucHJvdmlkZXJDbGljayhcXCcnICsgcC5jb250YWluZXJJRCArICdfY29udGFpbmVyXFwnLFxcJ0ZhY2Vib29rXFwnKVwiPjxpbWcgYWx0PVwiXCIgc3JjPVwiJyArIGJhc2UgKyAnRkJfQnV0dG9uLmdpZlwiIC8+PC9kaXY+JztcbiAgICAgICAgICAgICAgICB2YXIgaHRtbFNwYWNlciA9ICc8ZGl2IHN0eWxlPVwiaGVpZ2h0OjEwcHg7Zm9udC1zaXplOjFweFwiPiYjMTYwOzwvZGl2Pic7XG4gICAgICAgICAgICAgICAgdmFyIG91dGVySFRNTCA9IGh0bWxMb2dpblBsdWdpbjtcblxuICAgICAgICAgICAgICAgIC8vLyBtYXliZSBkZWxldGUgYWxsIHRoaXM/XG4gICAgICAgICAgICAgICAgaWYgKGZhY2Vib29rU3VnZ2VzdEVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3JpZ2luYWxQLmNvbnRhaW5lcklEKS5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuUHJvdmlkZXJzLnB1c2goJ2ZhY2Vib29rJyk7XG4gICAgICAgICAgICAgICAgICAgIG91dGVySFRNTCA9IG91dGVySFRNTCArIGh0bWxTcGFjZXIgKyBodG1sU3VnZ2VzdEZhY2Vib29rO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChvdXRlckhUTUwgIT0gaHRtbExvZ2luUGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHAuY29udGFpbmVySUQpLmlubmVySFRNTCA9IG91dGVySFRNTDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgRkIuWEZCTUwucGFyc2UoKVxuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICBwID0gZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKHApO1xuICAgICAgICAgICAgICAgICAgICBwLmNvbnRhaW5lcklEID0gcC5jb250YWluZXJJRCArICdfY29udGFpbmVyJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYWxpZ25Ub0xlZnQ7XG5cblxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lcklEID0gcFsnY29udGFpbmVySUQnXTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZHVsZXNbY29udGFpbmVySURdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm5Vc2VyQ2hhbmdlZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnRlcm5hbHMuaXNDb25uZWN0IHx8IGUuZXZlbnROYW1lID09ICdsb2dvdXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzLmFmdGVyR2V0SW5mbyhlLCB7VGhpczogVGhpcywgY29uZjogb3JpZ2luYWxDLCBwYXJhbXM6IG9yaWdpbmFsUCwgaW50ZXJuYWxzOiBpbnRlcm5hbHN9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5hZGRFdmVudEhhbmRsZXJzKHtsaXN0ZW5lclR5cGU6ICdjb21wb25lbnQnfSwge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lckRlc2NyaXB0aW9uOiAnbGlzdGVuZXIgZm9yIHVwZGF0aW5nIGEgY29ubmVjdCB3aWRnZXQnLFxuICAgICAgICAgICAgICAgICAgICBvbkxvZ291dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5yZWRyYXcoY29udGFpbmVySUQpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uTG9naW46IGZuVXNlckNoYW5nZWQsXG4gICAgICAgICAgICAgICAgICAgIG9uQ29ubmVjdDogZm5Vc2VyQ2hhbmdlZCxcbiAgICAgICAgICAgICAgICAgICAgb25EaXNjb25uZWN0OiBmblVzZXJDaGFuZ2VkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGZhY2Vib29rU3VnZ2VzdEVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25Ub0xlZnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBnaWd5YS5zb2NpYWxpemUuYWRkRXZlbnRIYW5kbGVycyh7bGlzdGVuZXJUeXBlOiAnY29tcG9uZW50J30sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRmFjZWJvb2tMb2FkZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2lneWEuZXh0ZXJuYWwuZmFjZWJvb2suaXNMb2dnZWRJbikgVGhpcy5zaG93VUkob3JpZ2luYWxDLCBvcmlnaW5hbFAsIGludGVybmFscyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGJ1dHRvbnNTdHlsZSA9IHBbJ2J1dHRvbnNTdHlsZSddO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBidXR0b25zU3R5bGUgPT0gJ3VuZGVmaW5lZCcpIGJ1dHRvbnNTdHlsZSA9ICcnO1xuICAgICAgICAgICAgdmFyIG9TdHlsZSA9IHRoaXMuZ2V0U3R5bGUoYnV0dG9uc1N0eWxlKTtcbiAgICAgICAgICAgIC8vaWYgKGludGVybmFscy5pc0Nvbm5lY3QgJiYgb1N0eWxlLm5vQ29ubmVjdGVkKSBvU3R5bGUgPSB0aGlzLmdldFN0eWxlKCcnKTsgLy9XaWxsIGdldCBkZWZhdWx0IHN0eWxlXG5cblxuICAgICAgICAgICAgdmFyIHN0eWxlQmFzZSA9ICcnO1xuICAgICAgICAgICAgaWYgKG9TdHlsZS5iYXNlKSBzdHlsZUJhc2UgPSBvU3R5bGUuYmFzZTtcblxuICAgICAgICAgICAgdGhpcy5tb2R1bGVzW2NvbnRhaW5lcklEXSA9IHtvcmlnaW5hbEM6IG9yaWdpbmFsQywgb3JpZ2luYWxQOiBvcmlnaW5hbFAsIGk6IGludGVybmFscywgcGFnZTogMH07XG4gICAgICAgICAgICB0aGlzLm1vZHVsZXNbY29udGFpbmVySURdLmMgPSBjO1xuICAgICAgICAgICAgdGhpcy5tb2R1bGVzW2NvbnRhaW5lcklEXS5wID0gcDtcbiAgICAgICAgICAgIHZhciBhckhUTUwgPSBbXTtcbiAgICAgICAgICAgIHZhciBhID0gMDtcblxuICAgICAgICAgICAgdmFyIHJlcXVpcmVkQ2FwYWJpbGl0aWVzID0gcFsncmVxdWlyZWRDYXBhYmlsaXRpZXMnXTtcbiAgICAgICAgICAgIGlmICghcmVxdWlyZWRDYXBhYmlsaXRpZXMpIHJlcXVpcmVkQ2FwYWJpbGl0aWVzID0gJ2xvZ2luJztcbiAgICAgICAgICAgIHJlcXVpcmVkQ2FwYWJpbGl0aWVzID0gcmVxdWlyZWRDYXBhYmlsaXRpZXMucmVwbGFjZSgvIC9nLCAnJykuc3BsaXQoJywnKTtcblxuICAgICAgICAgICAgdmFyIGNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGFyUHJvdmlkZXJzID0gW107XG5cbiAgICAgICAgICAgIHZhciBlbmFibGVkUHJvdmlkZXJzID0gcFsnZW5hYmxlZFByb3ZpZGVycyddO1xuICAgICAgICAgICAgaWYgKCFlbmFibGVkUHJvdmlkZXJzKSBlbmFibGVkUHJvdmlkZXJzID0gY1snZW5hYmxlZFByb3ZpZGVycyddO1xuICAgICAgICAgICAgaWYgKCFlbmFibGVkUHJvdmlkZXJzKSBlbmFibGVkUHJvdmlkZXJzID0gJyonO1xuICAgICAgICAgICAgdmFyIGRpc2FibGVkUHJvdmlkZXJzID0gcFsnZGlzYWJsZWRQcm92aWRlcnMnXTtcbiAgICAgICAgICAgIGlmICghZGlzYWJsZWRQcm92aWRlcnMpIGRpc2FibGVkUHJvdmlkZXJzID0gY1snZGlzYWJsZWRQcm92aWRlcnMnXTtcbiAgICAgICAgICAgIGlmICghZGlzYWJsZWRQcm92aWRlcnMpIGRpc2FibGVkUHJvdmlkZXJzID0gJyc7XG5cbiAgICAgICAgICAgIGFyUHJvdmlkZXJzID0gR1MuZ2V0UHJvdmlkZXJzQnlOYW1lKGVuYWJsZWRQcm92aWRlcnMpO1xuICAgICAgICAgICAgYXJQcm92aWRlcnMgPSBHUy5oaWRlUHJvdmlkZXJzQnlOYW1lKGFyUHJvdmlkZXJzLCBkaXNhYmxlZFByb3ZpZGVycyk7XG4gICAgICAgICAgICBhclByb3ZpZGVycyA9IEdTLmhpZGVQcm92aWRlcnNCeU5hbWUoYXJQcm92aWRlcnMsIGhpZGRlblByb3ZpZGVycy5qb2luKCcsJykpO1xuICAgICAgICAgICAgYXJQcm92aWRlcnMgPSBHUy5oaWRlUHJvdmlkZXJzQnlOYW1lKGFyUHJvdmlkZXJzLCAnY3VzdG9tb3BlbmlkJyk7XG5cbiAgICAgICAgICAgIHZhciBvQnV0dG9uID0gcFsnY3VzdG9tQnV0dG9uJ107XG4gICAgICAgICAgICBpZiAoIW9CdXR0b24gJiYgcFsnY3VzdG9tQnV0dG9ucyddICYmIHBbJ2N1c3RvbUJ1dHRvbnMnXS5sZW5ndGggPiAwKSBvQnV0dG9uID0gcFsnY3VzdG9tQnV0dG9ucyddWzBdO1xuXG4gICAgICAgICAgICB2YXIgcEN1c3RvbVByb3ZpZGVyO1xuICAgICAgICAgICAgaWYgKG9CdXR0b24gJiYgKCFvQnV0dG9uLnR5cGUgfHwgb0J1dHRvbi50eXBlLnRvTG93ZXJDYXNlKCkgPT0gJ29wZW5pZCcgfHwgb0J1dHRvbi50eXBlLnRvTG93ZXJDYXNlKCkgPT0gJ2V2ZW50b25seScpKSB7XG4gICAgICAgICAgICAgICAgcEN1c3RvbVByb3ZpZGVyID0gR1MuX2dldFByb3ZpZGVyQnlJRCg0MTIxKTtcbiAgICAgICAgICAgICAgICBwQ3VzdG9tUHJvdmlkZXIuaW1nTmFtZSA9ICdvcGVuSUQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob0J1dHRvbiAmJiBvQnV0dG9uLnR5cGUgJiYgb0J1dHRvbi50eXBlLnRvTG93ZXJDYXNlKCkgPT0gJ3NhbWwnKSB7XG4gICAgICAgICAgICAgICAgcEN1c3RvbVByb3ZpZGVyID0gR1MuX2dldFByb3ZpZGVyQnlJRCg0MTIyKTtcbiAgICAgICAgICAgICAgICBwQ3VzdG9tUHJvdmlkZXIubmFtZSA9ICdzYW1sLScgKyBvQnV0dG9uLmlkcE5hbWU7XG4gICAgICAgICAgICAgICAgcEN1c3RvbVByb3ZpZGVyLmltZ05hbWUgPSAnc2FtbCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwQ3VzdG9tUHJvdmlkZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW9CdXR0b24ucHJvdmlkZXJOYW1lKSBvQnV0dG9uLnByb3ZpZGVyTmFtZSA9ICcnO1xuICAgICAgICAgICAgICAgIHBDdXN0b21Qcm92aWRlci5kaXNwbGF5TmFtZSA9IG9CdXR0b24ucHJvdmlkZXJOYW1lO1xuICAgICAgICAgICAgICAgIHBDdXN0b21Qcm92aWRlci5idXR0b25EYXRhID0gb0J1dHRvbjtcblxuICAgICAgICAgICAgICAgIGFyUHJvdmlkZXJzW2ldID0gcEN1c3RvbVByb3ZpZGVyO1xuICAgICAgICAgICAgICAgIGFyUHJvdmlkZXJzLnNwbGljZShvQnV0dG9uLnBvc2l0aW9uICYmIG9CdXR0b24ucG9zaXRpb24gPiAxID8gb0J1dHRvbi5wb3NpdGlvbiAtIDEgOiAwLCAwLCBwQ3VzdG9tUHJvdmlkZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyUHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJQcm92aWRlcnNbaV0uY29udGV4dCA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW50ZXJuYWxzLmdldEluZm9SZXNwb25zZSAmJiBpbnRlcm5hbHMuZ2V0SW5mb1Jlc3BvbnNlLnVzZXIgJiYgaW50ZXJuYWxzLmdldEluZm9SZXNwb25zZS51c2VyLmlkZW50aXRpZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWRlbnRpdGllcyA9IGludGVybmFscy5nZXRJbmZvUmVzcG9uc2UudXNlci5pZGVudGl0aWVzO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGlkZW50aXR5TmFtZSBpbiBpZGVudGl0aWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpZGVudGl0eSA9IGlkZW50aXRpZXNbaWRlbnRpdHlOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgaWRlbnRpdHkuY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyT2JqID0gR1MuX2dldFByb3ZpZGVyQnlOYW1lKGlkZW50aXR5LnByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ZpZGVyT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbm5lY3RlZCkgY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyT2JqLmNvbnRleHQgPSBpZGVudGl0eTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGFyQ29ubmVjdGVkUHJvdmlkZXJzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyUHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyUmVxdWlyZWRQZXJtaXNzaW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChhclByb3ZpZGVyc1tpXS5jb250ZXh0ICYmIGFyUHJvdmlkZXJzW2ldLmNvbnRleHQuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYXNBbGxSZXF1aXJlZFBlcm1pc3Npb25zID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyUHJvdmlkZXJzW2ldLmNvbnRleHQubWlzc2luZ1Blcm1pc3Npb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWlzc2luZ1Blcm1pc3Npb25zU3RyaW5nID0gJywnICsgYXJQcm92aWRlcnNbaV0uY29udGV4dC5taXNzaW5nUGVybWlzc2lvbnMudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gL2csICcnKSArICcsJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZWVkZWRQZXJtaXNzaW9ucyA9IGdpZ3lhLnV0aWxzLm9iamVjdC5leHRyYWN0UHJvcGVydHkoW2MsIHAsIGludGVybmFsc10sIGFyUHJvdmlkZXJzW2ldLm5hbWUgKyAnRXh0cmFQZXJtaXNzaW9ucycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuZWVkZWRQZXJtaXNzaW9ucykgbmVlZGVkUGVybWlzc2lvbnMgPSBnaWd5YS51dGlscy5vYmplY3QuZXh0cmFjdFByb3BlcnR5KFtjLCBwLCBpbnRlcm5hbHNdLCAnZXh0cmFQZXJtaXNzaW9ucycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuZWVkZWRQZXJtaXNzaW9ucykgbmVlZGVkUGVybWlzc2lvbnMgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZWRlZFBlcm1pc3Npb25zID0gbmVlZGVkUGVybWlzc2lvbnMudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhck5lZWRlZFBlcm1pc3Npb25zID0gbmVlZGVkUGVybWlzc2lvbnMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGlQZXJtaXNzaW9uID0gMDsgaVBlcm1pc3Npb24gPCBhck5lZWRlZFBlcm1pc3Npb25zLmxlbmd0aDsgaVBlcm1pc3Npb24rKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGVybWlzc2lvbnNTdHJpbmcgJiYgbWlzc2luZ1Blcm1pc3Npb25zU3RyaW5nLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignLCcgKyBhck5lZWRlZFBlcm1pc3Npb25zW2lQZXJtaXNzaW9uXSArICcsJykgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQWxsUmVxdWlyZWRQZXJtaXNzaW9ucyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhclJlcXVpcmVkUGVybWlzc2lvbnMucHVzaChhck5lZWRlZFBlcm1pc3Npb25zW2lQZXJtaXNzaW9uXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyUHJvdmlkZXJzW2ldLmNvbnRleHQucmVxdWlyZWRQZXJtaXNzaW9ucyA9IGFyUmVxdWlyZWRQZXJtaXNzaW9ucy5qb2luKCcsJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNBbGxSZXF1aXJlZFBlcm1pc3Npb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhckNvbm5lY3RlZFByb3ZpZGVycy5wdXNoKGFyUHJvdmlkZXJzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXJQcm92aWRlcnMgPSBhckNvbm5lY3RlZFByb3ZpZGVycy5jb25jYXQoR1MuaGlkZVByb3ZpZGVyc0J5TmFtZShhclByb3ZpZGVycywgYXJDb25uZWN0ZWRQcm92aWRlcnMuam9pbignLCcpKSk7XG5cbiAgICAgICAgICAgIGFyUHJvdmlkZXJzID0gR1MuZ2V0UHJvdmlkZXJzRm9yUmVxdWlyZWRDYXBhYmlsaXRpZXMoYXJQcm92aWRlcnMsIHJlcXVpcmVkQ2FwYWJpbGl0aWVzKTtcbiAgICAgICAgICAgIGlmIChhclByb3ZpZGVycy5sZW5ndGggPT0gMCAmJiAhZmFjZWJvb2tTdWdnZXN0RW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEVycm9yRnJvbVJlc3BvbnNlKHAsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnRVJSX05PX1BST1ZJREVSUycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c01lc3NhZ2U6ICdObyBwcm92aWRlcnMnLFxuICAgICAgICAgICAgICAgICAgICBlcnJvckNvZGU6IDQwMDEwMCxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTm8gcHJvdmlkZXJzJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHcgPSBwYXJzZUludChwWyd3aWR0aCddKTtcbiAgICAgICAgICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgICAgIHZhciB2aWV3V2lkdGggPSBkaXYub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgICAgICB3ID0gTWF0aC5taW4odmlld1dpZHRoLCB3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoID0gcGFyc2VJbnQocFsnaGVpZ2h0J10pO1xuXG5cbiAgICAgICAgICAgIGlmIChpbnRlcm5hbHNbJ2lzQ29ubmVjdCddKSBsYXN0TG9naW5JbmRpY2F0aW9uID0gJyc7XG4gICAgICAgICAgICBpZiAoIWludGVybmFsc1snaXNDb25uZWN0J10gJiYgbGFzdExvZ2luSW5kaWNhdGlvbiA9PSAnYm9yZGVyJykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJQcm92aWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gYXJQcm92aWRlcnNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChhclByb3ZpZGVyc1tpXS5uYW1lID09IGxhc3RMb2dpblByb3ZpZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhclByb3ZpZGVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhclByb3ZpZGVycy51bnNoaWZ0KHByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm1vZHVsZXNbY29udGFpbmVySURdLmFyUHJvdmlkZXJzID0gYXJQcm92aWRlcnM7XG5cbiAgICAgICAgICAgIHZhciBhcnJvd1cgPSA3O1xuICAgICAgICAgICAgdmFyIGFycm93SCA9IDEyO1xuXG4gICAgICAgICAgICB2YXIgb1NuQnV0dG9uc1N0eWxlID0gcmVzb2x2ZXIuUmVzb2x2ZSgnKy9jb25maWcvYm9keS9jb250cm9scy9zbmJ1dHRvbnMnKTtcbiAgICAgICAgICAgIHZhciB0ZXh0VW5kZXIgPSAoYnV0dG9uc1N0eWxlID09ICcnICYmIG9TbkJ1dHRvbnNTdHlsZVsndHlwZSddID09ICd0ZXh0VW5kZXInKTtcblxuICAgICAgICAgICAgdmFyIGJ1dHRvbnNpemUgPSBwLmJ1dHRvblNpemUgPyBwLmJ1dHRvblNpemUgOiBvU25CdXR0b25zU3R5bGVbJ2J1dHRvbnNpemUnXTtcbiAgICAgICAgICAgIGJ1dHRvbnNpemUgPSBwYXJzZUludChidXR0b25zaXplKTtcblxuICAgICAgICAgICAgaWYgKGJ1dHRvbnNpemUgPiBoKSBidXR0b25zaXplID0gaDtcbiAgICAgICAgICAgIGlmIChhcnJvd0ggPiBoKSB7XG4gICAgICAgICAgICAgICAgYXJyb3dXID0gTWF0aC5mbG9vcihhcnJvd1cgKiBoIC8gYXJyb3dIKTtcbiAgICAgICAgICAgICAgICBhcnJvd0ggPSBNYXRoLmZsb29yKGggKiBhcnJvd1cgLyA3KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGljb25TaXplID0gYnV0dG9uc2l6ZTtcblxuXG4gICAgICAgICAgICB2YXIgb0JnU3R5bGUgPSByZXNvbHZlci5SZXNvbHZlKCcrL2NvbmZpZy9ib2R5L2JhY2tncm91bmQnKTtcblxuICAgICAgICAgICAgaWYgKGludGVybmFsc1snaXNQb3B1cCddKSB7XG4gICAgICAgICAgICAgICAgb0JnU3R5bGVbJ2ZyYW1lLXRoaWNrbmVzcyddID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvTGlua1N0eWxlID0gcmVzb2x2ZXIuUmVzb2x2ZSgnKy9jb25maWcvYm9keS90ZXh0cy9saW5rcycpO1xuICAgICAgICAgICAgdmFyIGxpbmtIZWlnaHQgPSB0aGlzLmdldFNpbmdsZUxpbmVIZWlnaHQob0xpbmtTdHlsZSk7XG4gICAgICAgICAgICB2YXIgb1RleHRTdHlsZSA9IHJlc29sdmVyLlJlc29sdmUoJysvY29uZmlnL2JvZHkvdGV4dHMnKTtcblxuXG4gICAgICAgICAgICB2YXIgdGV4dFN0eWxlID0gR1MuZ2V0U3R5bGVTdHJpbmcob1RleHRTdHlsZSk7XG4gICAgICAgICAgICB2YXIgbGlua1N0eWxlID0gR1MuZ2V0U3R5bGVTdHJpbmcob0xpbmtTdHlsZSwgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgYmdTdHlsZSA9IEdTLmdldFN0eWxlU3RyaW5nKG9CZ1N0eWxlKTtcbiAgICAgICAgICAgIHZhciBzbkJ1dHRvbnNTdHlsZSA9IEdTLmdldFN0eWxlU3RyaW5nKG9TbkJ1dHRvbnNTdHlsZSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgaWNvblNpemUgPT0gJ3VuZGVmaW5lZCcgfHwgaXNOYU4oaWNvblNpemUpKSBpY29uU2l6ZSA9IDMwO1xuXG4gICAgICAgICAgICBpZiAoIW9TdHlsZS5taW5TaXplKSBvU3R5bGUubWluU2l6ZSA9IDE1O1xuICAgICAgICAgICAgaWYgKCFvU3R5bGUubWF4U2l6ZSkgb1N0eWxlLm1heFNpemUgPSA2NTtcbiAgICAgICAgICAgIHZhciBpbWdJY29uU2l6ZSA9IE1hdGguZmxvb3IoaWNvblNpemUgLyA1KSAqIDU7XG4gICAgICAgICAgICAvL2lmIChpbWdJY29uU2l6ZSA8IDIwICYmIG9TKVxuICAgICAgICAgICAgaWYgKGltZ0ljb25TaXplIDwgb1N0eWxlLm1pblNpemUpIGltZ0ljb25TaXplID0gb1N0eWxlLm1pblNpemU7XG4gICAgICAgICAgICBpZiAoaW1nSWNvblNpemUgPiBvU3R5bGUubWF4U2l6ZSkgaW1nSWNvblNpemUgPSBvU3R5bGUubWF4U2l6ZTtcblxuICAgICAgICAgICAgdmFyIHNjcm9sbGluZ0xlZnRQYXRoID0gYmFzZSArICdwYWdpbmcvc2Nyb2xsaW5nYXJyb3dfbGVmdC5naWYnO1xuICAgICAgICAgICAgdmFyIHNjcm9sbGluZ0xlZnREaXNhYmxlUGF0aCA9IGJhc2UgKyAncGFnaW5nL3Njcm9sbGluZ2Fycm93X2Rpc2FibGVfbGVmdC5naWYnO1xuICAgICAgICAgICAgdmFyIHNjcm9sbGluZ1JpZ2h0UGF0aCA9IGJhc2UgKyAncGFnaW5nL3Njcm9sbGluZ2Fycm93X3JpZ2h0LmdpZic7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsaW5nUmlnaHREaXNhYmxlUGF0aCA9IGJhc2UgKyAncGFnaW5nL3Njcm9sbGluZ2Fycm93X2Rpc2FibGVfcmlnaHQuZ2lmJztcblxuICAgICAgICAgICAgaWYgKGljb25TaXplID4gMjUpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmdMZWZ0UGF0aCA9IGJhc2UgKyAncGFnaW5nL3Njcm9sbGluZ2Fycm93bF9sZWZ0LmdpZic7XG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nTGVmdERpc2FibGVQYXRoID0gYmFzZSArICdwYWdpbmcvc2Nyb2xsaW5nYXJyb3dsX2Rpc2FibGVfbGVmdC5naWYnO1xuICAgICAgICAgICAgICAgIHNjcm9sbGluZ1JpZ2h0UGF0aCA9IGJhc2UgKyAncGFnaW5nL3Njcm9sbGluZ2Fycm93bF9yaWdodC5naWYnO1xuICAgICAgICAgICAgICAgIHNjcm9sbGluZ1JpZ2h0RGlzYWJsZVBhdGggPSBiYXNlICsgJ3BhZ2luZy9zY3JvbGxpbmdhcnJvd2xfZGlzYWJsZV9yaWdodC5naWYnO1xuICAgICAgICAgICAgICAgIGlmIChhcnJvd1cgPT0gNykgYXJyb3dXID0gMTA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwLnVzZUxhcmdlQXJyb3dzKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nTGVmdFBhdGggPSBiYXNlICsgJ3BhZ2luZy9zY3JvbGxpbmdhcnJvd2xsX2xlZnQuZ2lmJztcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmdMZWZ0RGlzYWJsZVBhdGggPSBiYXNlICsgJ3BhZ2luZy9zY3JvbGxpbmdhcnJvd2xsX2Rpc2FibGVfbGVmdC5naWYnO1xuICAgICAgICAgICAgICAgIHNjcm9sbGluZ1JpZ2h0UGF0aCA9IGJhc2UgKyAncGFnaW5nL3Njcm9sbGluZ2Fycm93bGxfcmlnaHQuZ2lmJztcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmdSaWdodERpc2FibGVQYXRoID0gYmFzZSArICdwYWdpbmcvc2Nyb2xsaW5nYXJyb3dsbF9kaXNhYmxlX3JpZ2h0LmdpZic7XG4gICAgICAgICAgICAgICAgYXJyb3dXID0gMjA7XG4gICAgICAgICAgICAgICAgYXJyb3dIID0gNDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBtYXhSb3dzID0gMTtcbiAgICAgICAgICAgIHZhciBtYXhMaW5lcyA9IDE7XG5cbiAgICAgICAgICAgIHZhciBoaW50VyA9IDE0OTtcbiAgICAgICAgICAgIHZhciBoaW50SCA9IDU1O1xuXG4gICAgICAgICAgICB2YXIgaGVhZGVyVGV4dCA9IHBbJ2hlYWRlclRleHQnXTtcbiAgICAgICAgICAgIGlmIChoIDwgNTApIGhlYWRlclRleHQgPSBudWxsO1xuICAgICAgICAgICAgdmFyIHNob3dIaW50ID0gKHRoaXMuaXNUcnVlKHBbJ3Nob3dXaGF0c1RoaXMnXSkgJiYgdyA+IGhpbnRXICYmIGggLSBsaW5rSGVpZ2h0ID4gaGludEgpO1xuICAgICAgICAgICAgaW50ZXJuYWxzLnNob3dIaW50ID0gc2hvd0hpbnQ7XG4gICAgICAgICAgICB2YXIgc2hvd0dpZ3lhQnJhbmRpbmcgPSAoIXRoaXMuaXNUcnVlKHBbJ2hpZGVHaWd5YSddLCBmYWxzZSkgJiYgIXRoaXMuaXNUcnVlKHBbJ2hpZGVHaWd5YUxpbmsnXSwgZmFsc2UpKTtcbiAgICAgICAgICAgIHZhciBzaG93V2hhdHNUaGlzID0gKCFzaG93R2lneWFCcmFuZGluZyAmJiBzaG93SGludCk7XG4gICAgICAgICAgICB2YXIgc2hvd1Rlcm1zID0gIWdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdEZhbHNlKHBbJ3Nob3dUZXJtc0xpbmsnXSk7XG4gICAgICAgICAgICB2YXIgc2hvd0VkaXQgPSAoaW50ZXJuYWxzLmlzQ29ubmVjdCAmJiBjb25uZWN0ZWQgJiYgIWdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdEZhbHNlKHBbJ3Nob3dFZGl0TGluayddKSk7XG4gICAgICAgICAgICB2YXIgYiA9IGFyUHJvdmlkZXJzLmxlbmd0aDtcblxuICAgICAgICAgICAgLy9idXR0b24gc2l6ZSAoaW1hZ2Ugb25seSlcbiAgICAgICAgICAgIHZhciBwaXhlbFJhdGlvID0gKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID4gMSA/IDIgOiAxKTtcbiAgICAgICAgICAgIHZhciBidG5JbWdXID0gTWF0aC5yb3VuZChpY29uU2l6ZSAqIG9TdHlsZS5yYXRpbyk7XG4gICAgICAgICAgICB2YXIgYnRuSW1nSCA9IGljb25TaXplO1xuXG4gICAgICAgICAgICB2YXIgc3RhdGVzID0gWycnXTtcbiAgICAgICAgICAgIHZhciBzU3RhdGVzID0gJ1snICsgc3RhdGVzLmpvaW4oJywnKSArICddJztcbiAgICAgICAgICAgIHZhciByZXNpemUgPSAoaW1nSWNvblNpemUgIT0gaWNvblNpemUpIHx8IHBpeGVsUmF0aW8gPiAxO1xuICAgICAgICAgICAgdmFyIGFyU3ByaXRlc1Byb3ZpZGVycyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhclByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFyU3ByaXRlc1Byb3ZpZGVyc1tpXSA9IGFyUHJvdmlkZXJzW2ldLnRvU3RyaW5nKCkuc3BsaXQoJy0nKVswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyU3ByaXRlc1Byb3ZpZGVycyA9IGFyU3ByaXRlc1Byb3ZpZGVycy5zb3J0KCk7IC8vYXJyYXkgaXMgc29ydGVkIGZvciBjYWNoaW5nXG4gICAgICAgICAgICB2YXIgc3ByaXRlUmVuZGVyZXIgPSBnaWd5YS5nbG9iYWwuZ2V0U3ByaXRlUmVuZGVyZXJzKHtcbiAgICAgICAgICAgICAgICBsb2dpbkljb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvSFRNTExvZ2luLycgKyBzdHlsZUJhc2UgKyAnWycgKyBhclNwcml0ZXNQcm92aWRlcnMuam9pbignLCcpICsgJ11fJyArIHNTdGF0ZXMgKyBpbWdJY29uU2l6ZSAqIHBpeGVsUmF0aW8gKyBvU3R5bGUuZXh0LFxuICAgICAgICAgICAgICAgICAgICB3OiBidG5JbWdXLFxuICAgICAgICAgICAgICAgICAgICBoOiBidG5JbWdILFxuICAgICAgICAgICAgICAgICAgICBwaXhlbFJhdGlvOiBwaXhlbFJhdGlvXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vZGl2LmlubmVySFRNTD1zZC5nZXRIVE1MKGRpdiwgJ3lhaG9vX2Nvbm5lY3RlZCcpO1xuXG4gICAgICAgICAgICAvL2Z1bGwgYnV0dG9uIHNpemUgKGluY2x1ZGluZyBpbWFnZSBhbmQgdGV4dClcbiAgICAgICAgICAgIHZhciBidG5XID0gYnRuSW1nVztcbiAgICAgICAgICAgIHZhciBidG5IID0gYnRuSW1nSDtcblxuICAgICAgICAgICAgLy9idXR0b25zIHNwYWNpbmdcbiAgICAgICAgICAgIHZhciBiaHMgPSA1O1xuICAgICAgICAgICAgdmFyIGJ2cyA9IDU7XG5cbiAgICAgICAgICAgIC8vb3V0ZXIgbWFyZ2luc1xuICAgICAgICAgICAgdmFyIGhtID0gMDsgIC8vYXJyb3dzIHdpZHRoXG4gICAgICAgICAgICB2YXIgdm0gPSAwOyAvL2JvdHRvbSBsaW5rIGhlaWdodFxuXG4gICAgICAgICAgICB2YXIgb3V0ZXJGcmFtZVRoaWNrbmVzcyA9IHJlc29sdmVyLlJlc29sdmUoJysvY29uZmlnL2JvZHkvYmFja2dyb3VuZCcpWydmcmFtZS10aGlja25lc3MnXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3V0ZXJGcmFtZVRoaWNrbmVzcyA9PSAndW5kZWZpbmVkJykgb3V0ZXJGcmFtZVRoaWNrbmVzcyA9IDA7XG5cbiAgICAgICAgICAgIGhtICs9IG91dGVyRnJhbWVUaGlja25lc3MgKiAyXG4gICAgICAgICAgICB2bSArPSBvdXRlckZyYW1lVGhpY2tuZXNzICogMlxuXG4gICAgICAgICAgICAvKmlmIChpbnRlcm5hbHNbJ2lzUG9wdXAnXSkge1xuICAgICAgICAgICAgIHZtKz0xMDtcbiAgICAgICAgICAgICB9Ki9cblxuICAgICAgICAgICAgaWYgKHNob3dHaWd5YUJyYW5kaW5nIHx8IHNob3dXaGF0c1RoaXMgfHwgc2hvd1Rlcm1zIHx8IHNob3dFZGl0KSB7XG4gICAgICAgICAgICAgICAgdm0gKz0gbGlua0hlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoZWFkZXJUZXh0KSB7XG4gICAgICAgICAgICAgICAgdm0gKz0gZ2lneWEucGx1Z2luVXRpbHMubGF5b3V0Lm1lYXN1cmVUZXh0KGhlYWRlclRleHQsIG9UZXh0U3R5bGUpLmggKyA0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRleHRVbmRlcikge1xuICAgICAgICAgICAgICAgIGJ0bkggKz0gdGhpcy5nZXRTaW5nbGVMaW5lSGVpZ2h0KG9TbkJ1dHRvbnNTdHlsZSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhclByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBidG5XID0gTWF0aC5tYXgoYnRuVywgZ2lneWEucGx1Z2luVXRpbHMubGF5b3V0Lm1lYXN1cmVUZXh0KGFyUHJvdmlkZXJzW2ldLmRpc3BsYXlOYW1lLCBvU25CdXR0b25zU3R5bGUpLncgKyA0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbWF4QnV0dG9uc0luUm93ID0gTWF0aC5mbG9vcigodyAtIGhtICsgYmhzKSAvIChiaHMgKyBidG5XKSlcbiAgICAgICAgICAgIHZhciBtYXhCdXR0b25zSW5Db2wgPSBNYXRoLmZsb29yKChoIC0gdm0gKyBidnMpIC8gKGJ2cyArIGJ0bkgpKVxuXG4gICAgICAgICAgICBpZiAobWF4QnV0dG9uc0luQ29sIDwgMSkge1xuICAgICAgICAgICAgICAgIHZtID0gMFxuICAgICAgICAgICAgICAgIGlmIChoZWFkZXJUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZtICs9IGdpZ3lhLnBsdWdpblV0aWxzLmxheW91dC5tZWFzdXJlVGV4dChoZWFkZXJUZXh0LCBvVGV4dFN0eWxlKS5oICsgNDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWF4QnV0dG9uc0luQ29sID0gTWF0aC5mbG9vcigoaCAtIHZtICsgYnZzKSAvIChidnMgKyBidG5IKSlcbiAgICAgICAgICAgICAgICBpZiAobWF4QnV0dG9uc0luQ29sIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAvL0Vycm9yP1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0dpZ3lhQnJhbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1doYXRzVGhpcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWRpdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzaG93VGVybXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtYXhCdXR0b25zSW5Db2wgKiBtYXhCdXR0b25zSW5Sb3cgPCBiKSB7IC8vIHBhZ2luZyBpcyBuZWVkZWQsIGFkZCBhcnJvd1dpZHRoIHRvIGggbWFyZ2luIGFuZCByZWNhbGN1bGF0ZSBidXR0b25zIGluIGEgcm93LlxuICAgICAgICAgICAgICAgIGhtICs9IChhcnJvd1cgKyBiaHMpICogMjtcbiAgICAgICAgICAgICAgICBtYXhCdXR0b25zSW5Sb3cgPSBNYXRoLmZsb29yKCh3IC0gaG0gKyBiaHMpIC8gKGJocyArIGJ0blcpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRvdGFsYiA9IGI7XG4gICAgICAgICAgICBiID0gYiAlIChtYXhCdXR0b25zSW5Sb3cgKiBtYXhCdXR0b25zSW5Db2wpO1xuICAgICAgICAgICAgdmFyIG9wdGltYWxMYXN0Um93QnV0dG9ucyA9IDA7XG4gICAgICAgICAgICB2YXIgb3B0aW1hbFJvd0J1dHRvbnMgPSAwO1xuXG4gICAgICAgICAgICBmb3IgKHZhciByID0gbWF4QnV0dG9uc0luUm93OyByICogbWF4QnV0dG9uc0luQ29sID49IGI7IHItLSkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGxhc3RSb3dCdXR0b25zID0gYiAtIChyICogTWF0aC5mbG9vcihiIC8gcikpO1xuICAgICAgICAgICAgICAgIGlmIChsYXN0Um93QnV0dG9ucyA9PSAwKSBsYXN0Um93QnV0dG9ucyA9IHI7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RSb3dCdXR0b25zID4gb3B0aW1hbExhc3RSb3dCdXR0b25zKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGltYWxMYXN0Um93QnV0dG9ucyA9IGxhc3RSb3dCdXR0b25zO1xuICAgICAgICAgICAgICAgICAgICBvcHRpbWFsUm93QnV0dG9ucyA9IHI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaVByb3ZpZGVyID0gMDtcbiAgICAgICAgICAgIGlmIChtYXhCdXR0b25zSW5Db2wgKiBtYXhCdXR0b25zSW5Sb3cgPT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIHBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsYiAvIChtYXhCdXR0b25zSW5Db2wgKiBtYXhCdXR0b25zSW5Sb3cpKTtcbiAgICAgICAgICAgIGlmIChwYWdlcyA9PSAxKSBtYXhCdXR0b25zSW5Sb3cgPSBvcHRpbWFsUm93QnV0dG9ucztcbiAgICAgICAgICAgIHZhciBwYWdlV2lkdGggPSBNYXRoLm1pbihtYXhCdXR0b25zSW5Sb3csIHRvdGFsYikgKiAoYnRuVyArIGJocykgLSBiaHM7XG5cblxuICAgICAgICAgICAgdmFyIHNob3dXZWxjb21lID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIWludGVybmFsc1snaXNDb25uZWN0J10gJiYgbGFzdExvZ2luUHJvdmlkZXIgJiYgbGFzdExvZ2luSW5kaWNhdGlvbiA9PSAnd2VsY29tZScpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyUHJvdmlkZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm92aWRlciA9IGFyUHJvdmlkZXJzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJQcm92aWRlcnNbaV0ubmFtZSA9PSBsYXN0TG9naW5Qcm92aWRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1dlbGNvbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBlc2NhcGVkSUQgPSBjb250YWluZXJJRC5yZXBsYWNlKC9bLl0vZywgJ1xcXFwuJyk7XG4gICAgICAgICAgICBfcGkuY29tbW9uLmFkZENTUyhbJyMnLCBlc2NhcGVkSUQsICcgdGQsICMnLCBlc2NhcGVkSUQsICcgdGFibGUge3dpZHRoOmF1dG87Zm9udC1zaXplOjFweDt2ZXJ0aWNhbC1hbGlnbjp0b3A7Ym9yZGVyLWNvbGxhcHNlOnNlcGFyYXRlO2JvcmRlcjpub25lOyBwYWRkaW5nOjBweDttYXJnaW46MHB4O30gIycsIGVzY2FwZWRJRCwgJyB7fScsICcgLnRhYmJpbmctYnV0dG9ue2ZvbnQtc2l6ZTogMHB4O2JvcmRlcjogbm9uZTtwYWRkaW5nOiAwO2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O2N1cnNvcjogcG9pbnRlcjt9J10pO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3ZpZGVycyA9PSAndW5kZWZpbmVkJykgcHJvdmlkZXJzID0gY1snZW5hYmxlZFByb3ZpZGVycyddO1xuICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRhYmxlIHdpZHRoPVwiMTAwJVwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHN0eWxlPVwiJyArIHRkU3R5bGUgKyBiZ1N0eWxlICsgJ3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IHdpZHRoOiAnICsgdyArICdweDsgaGVpZ2h0OiAnICsgaCArICdweDtcIj48dHI+PHRkIHN0eWxlPVwidmVydGljYWwtYWxpZ246bWlkZGxlOycgKyB0ZFN0eWxlICsgJ1wiPjxjZW50ZXI+PHRhYmxlIHN0eWxlPVwiJyArIHRkU3R5bGUgKyAndmVydGljYWwtYWxpZ246bWlkZGxlOyBoZWlnaHQ6ICcgKyBoICsgJ3B4O3dpZHRoOjEwMCVcIiBhbGlnbj1cImNlbnRlclwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiPic7XG4gICAgICAgICAgICBpZiAoIXNob3dXZWxjb21lKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhlYWRlclRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRyPjx0ZCBjb2xzcGFuPVwiM1wiPjxkaXYgc3R5bGU9XCInICsgdGV4dFN0eWxlICsgJztwYWRkaW5nLWxlZnQ6NXB4XCI+JyArIGhlYWRlclRleHQgKyAnPC9kaXY+PC90ZD48L3RyPic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0ciBzdHlsZT1cImhlaWdodDo5OSVcIj48dGQgIGFsaWduPVwicmlnaHRcIiBzdHlsZT1cIicgKyB0ZFN0eWxlICsgJ3ZlcnRpY2FsLWFsaWduOm1pZGRsZTsnICsgKCFhbGlnblRvTGVmdCA/ICd3aWR0aDo0OCU7JyA6ICcnKSArICd0ZXh0LWFsaWduOnJpZ2h0XCI+PGRpdiBhbGlnbj1cInJpZ2h0XCIgc3R5bGU9XCJ0ZXh0LWFsaWduOnJpZ2h0O3dpZHRoOmF1dG9cIj4nO1xuICAgICAgICAgICAgICAgIGlmIChwYWdlcyA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPGRpdiBhbGlnbj1cImxlZnRcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiBhdXRvO3dpZHRoOicgKyAoYXJyb3dXICsgYmhzKSArICdweDsgdGV4dC1hbGlnbjogbGVmdFwiPjxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOnJpZ2h0O3dpZHRoOiAnICsgKGFycm93VykgKyAncHg7XCI+PGltZyB0YWJpbmRleD1cIjBcIiBhcmlhLWxhYmVsPVwicHJldmlvdXNcIiB0aXRsZT1cInByZXZpb3VzXCIgYWx0PVwicHJldmlvdXNcIiBvbmtleWRvd249XCInICsgZ3NMb2dpbiArICcuS2V5RG93bkhhbmRsZXIoZXZlbnQsdGhpcylcIiBhbHQ9XCJcIiBvbmNsaWNrPVwiJyArIGdzTG9naW4gKyAnLnByZXZQYWdlKFxcJycgKyBjb250YWluZXJJRCArICdcXCcpXCIgc3R5bGU9XCJjdXJzb3I6cG9pbnRlcjtkaXNwbGF5Om5vbmU7d2lkdGg6JyArIChhcnJvd1cpICsgJ3B4O1wiIGlkPVwiJyArIGNvbnRhaW5lcklEICsgJ19hcnJvd19sZWZ0XCIgc3JjPVwiJyArIHNjcm9sbGluZ0xlZnRQYXRoICsgJ1wiIC8+PGltZyB0aXRsZT1cInByZXZpb3VzIGJ1dHRvbiBkaXNhYmxlZFwiIGFsdD1cInByZXZpb3VzIGJ1dHRvbiBkaXNhYmxlZFwiIHN0eWxlPVwiZGlzcGxheTpub25lO3dpZHRoOicgKyAoYXJyb3dXKSArICdweDtcIiBpZD1cIicgKyBjb250YWluZXJJRCArICdfYXJyb3dfbGVmdF9kaXNhYmxlXCIgc3JjPVwiJyArIHNjcm9sbGluZ0xlZnREaXNhYmxlUGF0aCArICdcIiAvPjwvZGl2PjwvZGl2Pic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzwvZGl2PjwvdGQ+JztcbiAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dGQgYWxpZ249XCJjZW50ZXJcIiBzdHlsZT1cIndpZHRoOicgKyBwYWdlV2lkdGggKyAncHg7JyArIHRkU3R5bGUgKyAndmVydGljYWwtYWxpZ246bWlkZGxlO3doaXRlLXNwYWNlOm5vd3JhcFwiIGlkPVwiJyArIGNvbnRhaW5lcklEICsgJ19wYWdlXCI+JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRkPjwvdGQ+JztcbiAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dGQgYWxpZ249XCJsZWZ0XCIgc3R5bGU9XCInICsgdGRTdHlsZSArICd2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7d2hpdGUtc3BhY2U6bm93cmFwXCIgaWQ9XCInICsgY29udGFpbmVySUQgKyAnX3BhZ2VcIj4nO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGlmIChzaG93V2VsY29tZSkge1xuICAgICAgICAgICAgICAgIHZhciB1c2VybmFtZSA9IGdpZ3lhLnV0aWxzLnNhbml0aXplLnNhbml0aXplSFRNTCh0aGlzLmdldExhc3RMb2dpbk5hbWUoKSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgd2VsY29tZUJ0blNpemUgPSAocFsnbGFzdExvZ2luQnV0dG9uU2l6ZSddID8gcFsnbGFzdExvZ2luQnV0dG9uU2l6ZSddIDogMzApO1xuICAgICAgICAgICAgICAgIHdlbGNvbWVCdG5TaXplID0gcGFyc2VJbnQod2VsY29tZUJ0blNpemUpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHdlbGNvbWVJbWdTaXplID0gTWF0aC5mbG9vcih3ZWxjb21lQnRuU2l6ZSAvIDUpICogNVxuICAgICAgICAgICAgICAgIGlmICh3ZWxjb21lSW1nU2l6ZSA8IDI1KSB3ZWxjb21lSW1nU2l6ZSA9IDIwO1xuICAgICAgICAgICAgICAgIGlmICh3ZWxjb21lSW1nU2l6ZSA+IDM1KSB3ZWxjb21lSW1nU2l6ZSA9IDQwO1xuXG4gICAgICAgICAgICAgICAgdmFyIGhpZGVOb3RZb3UgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHZhciBub3RZb3VfdGV4dCA9IHRoaXMuVEVYVChsYW5nLCAnbm90X3lvdScsICcldXNlcicsIHVzZXJuYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgbm90WW91V2lkdGggPSBnaWd5YS5wbHVnaW5VdGlscy5sYXlvdXQubWVhc3VyZVRleHQobm90WW91X3RleHQsIG9MaW5rU3R5bGUpLnc7XG4gICAgICAgICAgICAgICAgdmFyIHdlbGNvbWVfYmFja191c2VybmFtZV90ZXh0ID0gdGhpcy5URVhUKGxhbmcsICd3ZWxjb21lX2JhY2tfdXNlcicsICcldXNlcicsIHVzZXJuYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgd2VsY29tZUJhY2tXaWR0aCA9IGdpZ3lhLnBsdWdpblV0aWxzLmxheW91dC5tZWFzdXJlVGV4dCh3ZWxjb21lX2JhY2tfdXNlcm5hbWVfdGV4dCwge1xuICAgICAgICAgICAgICAgICAgICBzaXplOiAxNixcbiAgICAgICAgICAgICAgICAgICAgZm9udDogJ2FyaWFsJyxcbiAgICAgICAgICAgICAgICAgICAgYm9sZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pLnc7XG4gICAgICAgICAgICAgICAgaWYgKHdlbGNvbWVCYWNrV2lkdGggKyAxNyArIG5vdFlvdVdpZHRoICsgKGludGVybmFsc1snaXNQb3B1cCddID8gMjUgOiAwKSA+IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZU5vdFlvdSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3ZWxjb21lQmFja1dpZHRoID4gdykgdXNlcm5hbWUgPSAnJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgd2VsY29tZUJhY2tIVE1MID0gJzxzcGFuIHN0eWxlPVwiJyArIHRleHRTdHlsZSArICc7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6Ym9sZDtjb2xvcjojNEM0QzRDXCI+JyArIHRoaXMuVEVYVChsYW5nLCAnd2VsY29tZV9iYWNrJykgKyAnPC9zcGFuPic7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1c2VybmFtZSAhPSAndW5kZWZpbmVkJyAmJiB1c2VybmFtZSAhPSAnJyAmJiB1c2VybmFtZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHdlbGNvbWVCYWNrSFRNTCA9ICc8dGFibGUgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjptaWRkbGVcIj48dHI+PHRkIHN0eWxlPVwiJyArIHRleHRTdHlsZSArICc7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6Ym9sZDtjb2xvcjojNEM0QzRDO3doaXRlLXNwYWNlOm5vd3JhcFwiPicgKyB3ZWxjb21lX2JhY2tfdXNlcm5hbWVfdGV4dCArICc8L3RkPic7XG4gICAgICAgICAgICAgICAgICAgIHdlbGNvbWVCYWNrSFRNTCArPSAnPHRkIHN0eWxlPVwicGFkZGluZy1sZWZ0OjVweDt3aGl0ZS1zcGFjZTpub3dyYXBcIiBvbmNsaWNrPVwiJyArIGdzTG9naW4gKyAnLmhpZGVXZWxjb21lKFxcJycgKyBjb250YWluZXJJRCArICdcXCcpO1wiPic7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGlkZU5vdFlvdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VsY29tZUJhY2tIVE1MICs9ICc8dGFibGUgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjptaWRkbGVcIj48dHI+PHRkPjxpbWcgYWx0PVwiXCIgc3JjPVwiJyArIGJhc2UgKyAnTm90WW91X0xlZnQucG5nXCIgLz48L3RkPjx0ZCBzdHlsZT1cIndoaXRlLXNwYWNlOm5vd3JhcDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGJhc2UgKyAnTm90WW91X01pZC5wbmdcXCcpXCI+PGRpdiBzdHlsZT1cIicgKyBsaW5rU3R5bGUgKyAnZm9udC1zaXplOjEwcHhcIj4nICsgbm90WW91X3RleHQgKyAnPC9kaXY+PC90ZD48dGQ+PGltZyBhbHQ9XCJcIiBzcmM9XCInICsgYmFzZSArICdOb3RZb3VfUmlnaHQucG5nXCIgLz48L3RkPjwvdHI+PC90YWJsZT4nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdlbGNvbWVCYWNrSFRNTCArPSAnPC90ZD48L3RyPjwvdGFibGU+JztcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIHZhciBidG5TcmMgPSBiYXNlICsgJ1NpZ25JbldpdGgvJyArIGxhc3RMb2dpblByb3ZpZGVyICsgJ18nICsgd2VsY29tZUltZ1NpemUgKyAnLnBuZyc7XG4gICAgICAgICAgICAgICAgLy92YXIgYnRuT3ZlclNyYyA9IGJhc2UgKyAnU2lnbkluV2l0aC8nICsgbGFzdExvZ2luUHJvdmlkZXIgKyAnXycgKyB3ZWxjb21lSW1nU2l6ZSArICdfb3Zlci5wbmcnO1xuICAgICAgICAgICAgICAgIGlmIChsYXN0TG9naW5Qcm92aWRlciA9PSAnY3VzdG9tb3BlbmlkJyB8fCBsYXN0TG9naW5Qcm92aWRlci5pbmRleE9mKFwic2FtbC1cIikgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcEN1c3RvbVByb3ZpZGVyID0gR1MuX2dldFByb3ZpZGVyQnlJRCg0MTIxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RMb2dpblByb3ZpZGVyLmluZGV4T2YoXCJzYW1sLVwiKSA9PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgcEN1c3RvbVByb3ZpZGVyID0gR1MuX2dldFByb3ZpZGVyQnlJRCg0MTIyKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocEN1c3RvbVByb3ZpZGVyLmJ1dHRvbkRhdGEgJiYgcEN1c3RvbVByb3ZpZGVyLmJ1dHRvbkRhdGEubGFzdExvZ2luSWNvblVSTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuU3JjID0gYnRuT3ZlclNyYyA9IHBDdXN0b21Qcm92aWRlci5idXR0b25EYXRhLmxhc3RMb2dpbkljb25VUkw7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG5TcmMgPSBiYXNlICsgJ1NpZ25JbldpdGgvb3BlbmlkXycgKyB3ZWxjb21lSW1nU2l6ZSArICcucG5nJztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYnRuT3ZlclNyYyA9IGJhc2UgKyAnU2lnbkluV2l0aC9vcGVuaWRfJyArIHdlbGNvbWVJbWdTaXplICsgJ19vdmVyLmdpZic7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgU2lnbkluVXNpbmdBRGlmZmVyZW50TmV0d29ya190ZXh0ID0gdGhpcy5URVhUKGxhbmcsICdzaWduX2luX3VzaW5nX2FfZGlmZmVyZW50X25ldHdvcmsnKTtcbiAgICAgICAgICAgICAgICB2YXIgZXh0cmFTdHlsZSA9ICcnO1xuICAgICAgICAgICAgICAgIGlmIChpbnRlcm5hbHNbJ2lzUG9wdXAnXSkgZXh0cmFTdHlsZSA9ICdwYWRkaW5nLWxlZnQ6MjVweDsnO1xuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0YWJsZSBpZD1cIicgKyBjb250YWluZXJJRCArICdfd2VsY29tZVwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHN0eWxlPVwid2lkdGg6MTAwJTsnICsgdGRTdHlsZSArICc7JyArIGV4dHJhU3R5bGUgKyAnXCI+JztcblxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0cj48dGQgc3R5bGU9XCInICsgdGRTdHlsZSArICdwYWRkaW5nLWJvdHRvbToxM3B4O3ZlcnRpY2FsLWFsaWduOmJvdHRvbVwiPjxkaXY+JyArIHdlbGNvbWVCYWNrSFRNTCArICc8L2Rpdj48L3RkPjwvdHI+JztcbiAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dHI+PHRkIGhlaWdodD1cIicgKyB3ZWxjb21lQnRuU2l6ZSArICdcIiBzdHlsZT1cIicgKyB0ZFN0eWxlICsgJ3BhZGRpbmctYm90dG9tOjE1cHg7XCI+PHNwYW4gdGFiaW5kZXg9XCIwXCIgcm9sZT1cImJ1dHRvblwiIHN0eWxlPVwiY3Vyc29yOnBvaW50ZXJcIiBvbmtleWRvd249XCInICsgZ3NMb2dpbiArICcuS2V5RG93bkhhbmRsZXIoZXZlbnQsdGhpcylcIiBvbmNsaWNrPVwiJyArIGdzTG9naW4gKyAnLnByb3ZpZGVyQ2xpY2soXFwnJyArIGNvbnRhaW5lcklEICsgJ1xcJyxcXCcnICsgbGFzdExvZ2luUHJvdmlkZXIgKyAnXFwnKVwiPjxpbWcgZ2lnaWQ9XCInICsgcHJvdmlkZXIgKyAnXCIgYWx0PVwiXCIgaGVpZ2h0PVwiJyArIHdlbGNvbWVCdG5TaXplICsgJ1wiIHNyYz1cIicgKyBidG5TcmMgKyAnXCIgIC8+PC9zcGFuPjwvdGQ+PC90cj4nO1xuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0cj48dGQgc3R5bGU9XCInICsgdGRTdHlsZSArICc7dmVydGljYWwtYWxpZ246dG9wXCI+PHNwYW4gc3R5bGU9XCInICsgbGlua1N0eWxlICsgJ1wiIG9uY2xpY2s9XCInICsgZ3NMb2dpbiArICcuaGlkZVdlbGNvbWUoXFwnJyArIGNvbnRhaW5lcklEICsgJ1xcJyk7XCI+JyArIFNpZ25JblVzaW5nQURpZmZlcmVudE5ldHdvcmtfdGV4dCArICc8L3NwYW4+PC9kaXY+PC90ZD48L3RyPidcbiAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8L3RhYmxlPic7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaVBhZ2UgPSAwOyBpUGFnZSA8IHBhZ2VzOyBpUGFnZSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0YWJsZSBhbGlnbj1cImNlbnRlclwiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHN0eWxlPVwiJyArIHRkU3R5bGUgKyAnZGlzcGxheTpub25lXCIgaWQ9XCInICsgY29udGFpbmVySUQgKyAnX3AnICsgaVBhZ2UgKyAnXCI+JztcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaUNvbCA9IDA7IGlDb2wgPCBtYXhCdXR0b25zSW5Db2w7IGlDb2wrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFsaWduID0gJ2xlZnQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhZ2VzID09IDEgJiYgaVByb3ZpZGVyICsgbWF4QnV0dG9uc0luUm93ID4gYXJQcm92aWRlcnMubGVuZ3RoKSBhbGlnbiA9ICdjZW50ZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRyPjx0ZCBhbGlnbj1cImNlbnRlclwiIHN0eWxlPVwiJyArIHRkU3R5bGUgKyAndmVydGljYWwtYWxpZ246bWlkZGxlXCI+PHRhYmxlIGFsaWduPVwiJyArIGFsaWduICsgJ1wiIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHN0eWxlPVwiJyArIHRkU3R5bGUgKyAnXCI+PHRyPic7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpUm93ID0gMDsgaVJvdyA8IG1heEJ1dHRvbnNJblJvdzsgaVJvdysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gYXJQcm92aWRlcnNbaVByb3ZpZGVyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFkZGluZ1J1bGVzID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlQcm92aWRlciArIDEgPCBhclByb3ZpZGVycy5sZW5ndGggfHwgKHBhZ2VzID4gMSAmJiBpUm93ICsgMSA8IG1heEJ1dHRvbnNJblJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlSb3cgPCBtYXhCdXR0b25zSW5Sb3cgLSAxKSBwYWRkaW5nUnVsZXMgKz0gJ3BhZGRpbmctcmlnaHQ6JyArIGJocyArICdweDsnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaUNvbCA8IG1heEJ1dHRvbnNJbkNvbCAtIDEpIHBhZGRpbmdSdWxlcyArPSAncGFkZGluZy1ib3R0b206JyArIGJ2cyArICdweDsnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvdmlkZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1nSWQgPSAocHJvdmlkZXIuaW1nTmFtZSA/IHByb3ZpZGVyLmltZ05hbWUgOiBwcm92aWRlci5uYW1lKSArICctJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGludGVybmFscy5pc0Nvbm5lY3QgJiYgcHJvdmlkZXIuY29udGV4dCAmJiAocHJvdmlkZXIuY29udGV4dC5jb25uZWN0ZWQgJiYgcHJvdmlkZXIuY29udGV4dC5yZXF1aXJlZFBlcm1pc3Npb25zID09ICcnKSAmJiAhb1N0eWxlLm5vQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdJZCArPSAnY29ubmVjdGVkXyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGFzdExvZ2luSW5kaWNhdGlvbiA9PSAnYm9yZGVyJyAmJiBwcm92aWRlci5uYW1lID09IGxhc3RMb2dpblByb3ZpZGVyICYmICFvU3R5bGUubm9MYXN0TG9naW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ0lkICs9ICdsYXN0bG9naW5fJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKnZhciBpbWdTcmM9c3R5bGVCYXNlK3Byb3ZpZGVyLm5hbWUrJ18nK2ltZ0ljb25TaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGludGVybmFscy5pc0Nvbm5lY3QgJiYgcHJvdmlkZXIuY29udGV4dCAmJiAocHJvdmlkZXIuY29udGV4dC5jb25uZWN0ZWQgJiYgcHJvdmlkZXIuY29udGV4dC5yZXF1aXJlZFBlcm1pc3Npb25zPT0nJykgJiYgIW9TdHlsZS5ub0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nU3JjICs9ICdfQ29ubmVjdGVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxhc3RMb2dpbkluZGljYXRpb249PSdib3JkZXInICYmIHByb3ZpZGVyLm5hbWU9PWxhc3RMb2dpblByb3ZpZGVyICYmICFvU3R5bGUubm9MYXN0TG9naW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1NyYys9J19MYXN0TG9naW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nU3JjKz1vU3R5bGUuZXh0OyovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gcHJvdmlkZXIuZGlzcGxheU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmlhTGFiZWwgPSBwcm92aWRlci5jb250ZXh0LmNvbm5lY3RlZCA/IGAke3Byb3ZpZGVyLmRpc3BsYXlOYW1lfSBDb25uZWN0ZWRgOiBwcm92aWRlci5kaXNwbGF5TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdEZhbHNlKHBbJ3Nob3dUb29sdGlwcyddKSkgdGl0bGUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy92YXIgZG9udFVzZVNwcml0ZXM9KG9TdHlsZS5kb250VXNlU3ByaXRlcyB8fCBpbWdJY29uU2l6ZSE9aWNvblNpemUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbWdIVE1MID0gc3ByaXRlUmVuZGVyZXIubG9naW5JY29ucy5nZXRIVE1MKGltZ0lkLCBmYWxzZSwgb1N0eWxlLmRvbnRVc2VTcHJpdGVzLCcnLHRpdGxlLHVuZGVmaW5lZCx0aXRsZSxhcmlhTGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvQnV0dG9uID0gcHJvdmlkZXIuYnV0dG9uRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChwcm92aWRlci5JRCA9PSA0MTIxIHx8IHByb3ZpZGVyLklEID09IDQxMjIpICYmIG9CdXR0b24gJiYgb0J1dHRvbi5pY29uVVJMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWNvblVSTCA9IG9CdXR0b24uaWNvblVSTDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnRlcm5hbHMuaXNDb25uZWN0ICYmIHByb3ZpZGVyLmNvbnRleHQgJiYgKHByb3ZpZGVyLmNvbnRleHQuY29ubmVjdGVkICYmIHByb3ZpZGVyLmNvbnRleHQucmVxdWlyZWRQZXJtaXNzaW9ucyA9PSAnJykgJiYgIW9TdHlsZS5ub0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25VUkwgPSBvQnV0dG9uLmNvbm5lY3RlZEljb25VUkwgPyBvQnV0dG9uLmNvbm5lY3RlZEljb25VUkwgOiBnaWd5YS5fLmdldENkblJlc291cmNlKCcvZ3MvaS9IVE1MTG9naW4vJyArIHN0eWxlQmFzZSArICdvcGVuaWRfJyArIGltZ0ljb25TaXplICsgKGRpc2FibGVkID8gJ19jb25uZWN0ZWQnIDogJycpICsgJy5wbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3ZpZGVyLm5hbWUgPT0gbGFzdExvZ2luUHJvdmlkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uVVJMID0gb0J1dHRvbi5sYXN0TG9naW5JY29uVVJMO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGljb25VUkwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdIVE1MID0gJzxkaXYgc3R5bGU9XCJ3aWR0aDonICsgYnRuSW1nVyArICdweDtoZWlnaHQ6JyArIGJ0bkltZ0ggKyAncHg7YmFja2dyb3VuZC1pbWFnZTp1cmwoXFwnJyArIGljb25VUkwgKyAnXFwnKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XCI+JiMxNjA7PC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dGQgc3R5bGU9XCInICsgdGRTdHlsZSArIHNuQnV0dG9uc1N0eWxlICsgcGFkZGluZ1J1bGVzICsgJ3RleHQtYWxpZ246Y2VudGVyO3ZlcnRpY2FsLWFsaWduOnRvcFwiPjxjZW50ZXI+PGRpdiB0aXRsZT1cIicgKyB0aXRsZSArICdcIiBzdHlsZT1cIndpZHRoOicgKyBidG5XICsgJ3B4O1wiPjxkaXYgZ2lnaWQ9XCInICsgcHJvdmlkZXIgKyAnXCIgc3R5bGU9XCJ3aWR0aDonICsgYnRuSW1nVyArICdweDsgaGVpZ2h0OicgKyBidG5JbWdIICsgJ3B4XCI+JyArIGltZ0hUTUwgKyAnPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0ZCBzdHlsZT1cIicgKyB0ZFN0eWxlICsgc25CdXR0b25zU3R5bGUgKyBwYWRkaW5nUnVsZXMgKyAndGV4dC1hbGlnbjpjZW50ZXI7dmVydGljYWwtYWxpZ246dG9wXCI+PGNlbnRlcj48ZGl2IG9ua2V5ZG93bj1cIicgKyBnc0xvZ2luICsgJy5LZXlEb3duSGFuZGxlcihldmVudCx0aGlzKVwiICBvbmNsaWNrPVwiJyArIGdzTG9naW4gKyAnLnByb3ZpZGVyQ2xpY2soXFwnJyArIGNvbnRhaW5lcklEICsgJ1xcJyxcXCcnICsgcHJvdmlkZXIubmFtZSArICdcXCcpXCIgdGl0bGU9XCInICsgdGl0bGUgKyAnXCIgYWx0PVwiJyArIHRpdGxlICsgJ1wiIHN0eWxlPVwiem9vbToxO2N1cnNvcjpwb2ludGVyOyB3aWR0aDonICsgYnRuVyArICdweDtcIj48ZGl2IGdpZ2lkPVwiJyArIHByb3ZpZGVyICsgJ1wiIHN0eWxlPVwid2lkdGg6JyArIGJ0bkltZ1cgKyAncHg7IGhlaWdodDonICsgYnRuSW1nSCArICdweFwiPicgKyBpbWdIVE1MICsgJzwvZGl2Pic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dFVuZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8ZGl2IHN0eWxlPVwibWFyZ2luOjBweDtwYWRkaW5nLXRvcDoycHg7JyArIHNuQnV0dG9uc1N0eWxlICsgJ1wiPicgKyBwcm92aWRlci5kaXNwbGF5TmFtZSArICc8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzwvZGl2PjwvY2VudGVyPjwvdGQ+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaVByb3ZpZGVyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYWdlcyA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRkIHN0eWxlPVwiJyArIHRkU3R5bGUgKyBzbkJ1dHRvbnNTdHlsZSArIHBhZGRpbmdSdWxlcyArICd2ZXJ0aWNhbC1hbGlnbjp0b3A7XCI+PGRpdiBzdHlsZT1cIndpZHRoOicgKyBidG5XICsgJ3B4O2hlaWdodDonICsgYnRuSCArICdweFwiPiYjMTYwOzwvZGl2PjwvdGQ+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8L3RyPjwvdGFibGU+PC90ZD48L3RyPic7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8L3RhYmxlPic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPC90ZD4nO1xuICAgICAgICAgICAgaWYgKCFzaG93V2VsY29tZSkge1xuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzx0ZCBhbGlnbj1cImxlZnRcIiBzdHlsZT1cIicgKyB0ZFN0eWxlICsgJ3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt3aWR0aDo0OCVcIj4nO1xuICAgICAgICAgICAgICAgIGlmIChwYWdlcyA+IDEgJiYgIXNob3dXZWxjb21lKSB7XG4gICAgICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzxkaXYgc3R5bGU9XCInICsgdGRTdHlsZSArICd0ZXh0LWFsaWduOnJpZ2h0OyB3aWR0aDonICsgKGFycm93VyArIGJocykgKyAncHg7XCI+PGltZyB0YWJpbmRleD1cIjBcIiBhcmlhLWxhYmVsPVwibmV4dFwiIHRpdGxlPVwibmV4dFwiIGFsdD1cIm5leHRcIiBvbmtleWRvd249XCInICsgZ3NMb2dpbiArICcuS2V5RG93bkhhbmRsZXIoZXZlbnQsdGhpcylcIiAgb25jbGljaz1cIicgKyBnc0xvZ2luICsgJy5uZXh0UGFnZShcXCcnICsgY29udGFpbmVySUQgKyAnXFwnKVwiIHN0eWxlPVwiY3Vyc29yOnBvaW50ZXI7ZGlzcGxheTpub25lO3dpZHRoOicgKyAoYXJyb3dXKSArICdweDtcIiBpZD1cIicgKyBjb250YWluZXJJRCArICdfYXJyb3dfcmlnaHRcIiBzcmM9XCInICsgc2Nyb2xsaW5nUmlnaHRQYXRoICsgJ1wiIC8+PGltZyB0aXRsZT1cIm5leHQgYnV0dG9uIGRpc2FibGVkXCIgYWx0PVwibmV4dCBidXR0b24gZGlzYWJsZWRcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTt3aWR0aDonICsgKGFycm93VykgKyAncHg7XCIgaWQ9XCInICsgY29udGFpbmVySUQgKyAnX2Fycm93X3JpZ2h0X2Rpc2FibGVcIiBzcmM9XCInICsgc2Nyb2xsaW5nUmlnaHREaXNhYmxlUGF0aCArICdcIiAvPjwvZGl2Pic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzwvdGQ+JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRkPjwvdGQ+JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFySFRNTFthKytdID0gJzwvdHI+JztcblxuICAgICAgICAgICAgdmFyIGxlZnRCb3R0b21MaW5rSFRNTCA9ICcnO1xuICAgICAgICAgICAgaWYgKHNob3dUZXJtcykge1xuICAgICAgICAgICAgICAgIGxlZnRCb3R0b21MaW5rSFRNTCA9ICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL3d3dy5naWd5YS5jb20vdGVybXMtb2Ytc2VydmljZS9cIiBzdHlsZT1cIicgKyBsaW5rU3R5bGUgKyAnO3BhZGRpbmctcmlnaHQ6NXB4O3RleHQtZGVjb3JhdGlvbjpub25lO2ZvbnQtc2l6ZToxMXB4XCI+JyArIHRoaXMuVEVYVChsYW5nLCAndGVybXMnKSArICc8L2E+JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzaG93RWRpdCkge1xuICAgICAgICAgICAgICAgIGlmIChzaG93VGVybXMpIGxlZnRCb3R0b21MaW5rSFRNTCArPSAnPHNwYW4gc3R5bGU9XCInICsgbGlua1N0eWxlICsgJztjdXJzb3I6ZGVmYXVsdDtcIj58PC9zcGFuPic7XG4gICAgICAgICAgICAgICAgbGVmdEJvdHRvbUxpbmtIVE1MICs9ICc8c3BhbiB0YWJpbmRleD1cIjBcIiBzdHlsZT1cIicgKyBsaW5rU3R5bGUgKyAnO3BhZGRpbmctcmlnaHQ6NXB4O3BhZGRpbmctbGVmdDo1cHg7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Zm9udC1zaXplOjExcHhcIiBvbmtleWRvd249XCInICsgZ3NMb2dpbiArICcuS2V5RG93bkhhbmRsZXIoZXZlbnQsdGhpcylcIiBvbmNsaWNrPVwiJyArIGdzTG9naW4gKyAnLnNob3dFZGl0KFxcJycgKyBjb250YWluZXJJRCArICdcXCcpXCI+JyArIHRoaXMuVEVYVChsYW5nLCAnZWRpdCcpICsgJzwvc3Bhbj4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJpZ2h0Qm90dG9tTGlua0hUTUwgPSAnJzsgIFxuICAgICAgICAgICAgaWYgKHNob3dHaWd5YUJyYW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgcmlnaHRCb3R0b21MaW5rSFRNTCArPSAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgdGFiaW5kZXg9XCIwXCIgaHJlZj1cImh0dHA6Ly93d3cuZ2lneWEuY29tL1wiICBzdHlsZT1cImNvbG9yOiMwMDU5OTc7Zm9udC13ZWlnaHQ6Ym9sZDsgZm9udC1zaXplOjExcHg7Y3Vyc29yOnBvaW50ZXJcIiBvbmZvY3VzaW49XCInICsgZ3NMb2dpbiArICcuc2hvd1doYXRzVGhpcyhcXCcnICsgY29udGFpbmVySUQgKyAnXFwnKVwiIG9uZm9jdXNvdXQ9XCInICsgZ3NMb2dpbiArICcuaGlkZVdoYXRzVGhpcyhcXCcnICsgY29udGFpbmVySUQgKyAnXFwnKVwiIG9uTW91c2VPdXQ9XCInICsgZ3NMb2dpbiArICcuaGlkZVdoYXRzVGhpcyhcXCcnICsgY29udGFpbmVySUQgKyAnXFwnKVwiIG9uTW91c2VPdmVyPVwiJyArIGdzTG9naW4gKyAnLnNob3dXaGF0c1RoaXMoXFwnJyArIGNvbnRhaW5lcklEICsgJ1xcJylcIj48c3BhbiBzdHlsZT1cImNvbG9yOiM2RTZFNkU7Zm9udC13ZWlnaHQ6Ym9sZDsgZm9udC1zaXplOjExcHg7Y3Vyc29yOnBvaW50ZXJcIj5Tb2NpYWwgYnkgPC9zcGFuPkdpZ3lhPC9hPic7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3dXaGF0c1RoaXMgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJpcGhvbmVcIikgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByaWdodEJvdHRvbUxpbmtIVE1MICs9ICc8c3BhbiBzdHlsZT1cIicgKyBsaW5rU3R5bGUgKyAnO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XCIgb25Nb3VzZU91dD1cIicgKyBnc0xvZ2luICsgJy5oaWRlV2hhdHNUaGlzKFxcJycgKyBjb250YWluZXJJRCArICdcXCcpXCIgb25Nb3VzZU92ZXI9XCInICsgZ3NMb2dpbiArICcuc2hvd1doYXRzVGhpcyhcXCcnICsgY29udGFpbmVySUQgKyAnXFwnKVwiPicgKyB0aGlzLlRFWFQobGFuZywgJ3doYXRzX3RoaXMnKSArICc8L3NwYW4+JztcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB2YXIgbGlua3NXaWR0aCA9IGdpZ3lhLnBsdWdpblV0aWxzLmxheW91dC5tZWFzdXJlVGV4dChsZWZ0Qm90dG9tTGlua0hUTUwpLncgKyBnaWd5YS5wbHVnaW5VdGlscy5sYXlvdXQubWVhc3VyZVRleHQocmlnaHRCb3R0b21MaW5rSFRNTCkudztcbiAgICAgICAgICAgIGlmIChsaW5rc1dpZHRoID4gdykge1xuICAgICAgICAgICAgICAgIHJpZ2h0Qm90dG9tTGlua0hUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBsaW5rc1dpZHRoID0gZ2lneWEucGx1Z2luVXRpbHMubGF5b3V0Lm1lYXN1cmVUZXh0KGxlZnRCb3R0b21MaW5rSFRNTCkudztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoc2hvd0VkaXQgfHwgc2hvd1Rlcm1zIHx8IHNob3dHaWd5YUJyYW5kaW5nIHx8IHNob3dXaGF0c1RoaXMpICYmIGxpbmtzV2lkdGggPCB3ICYmIG9MaW5rU3R5bGUuY29sb3IudG9Mb3dlckNhc2UoKSAhPSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnRlcm5hbHMuaXNQb3B1cCAmJiBsaW5rc1dpZHRoICsgMTAgPCBwYWdlV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRyIGhlaWdodD1cIicgKyBsaW5rSGVpZ2h0ICsgJ1wiPjx0ZD48L3RkPjx0ZCBhbGlnbj1cInJpZ2h0XCIgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjpib3R0b21cIj48ZGl2IGlkPVwiJyArIGNvbnRhaW5lcklEICsgJ19ib3R0b21MaW5rXCI+JztcbiAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRhYmxlIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIHN0eWxlPVwiJyArIHRkU3R5bGUgKyAnd2lkdGg6MTAwJVwiPjx0cj48dGQgYWxpZ249XCJsZWZ0XCI+JyArIGxlZnRCb3R0b21MaW5rSFRNTCArICc8L3RkPjx0ZCBzdHlsZT1cIndoaXRlLXNwYWNlOm5vd3JhcFwiIGFsaWduPVwicmlnaHRcIj4nICsgcmlnaHRCb3R0b21MaW5rSFRNTCArICc8L3RkPjwvdHI+PC90YWJsZT4nO1xuICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8L2Rpdj48L3RkPjx0ZD48L3RkPjwvdHI+JztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dHIgaGVpZ2h0PVwiJyArIGxpbmtIZWlnaHQgKyAnXCI+PHRkIGNvbHNwYW49XCIzXCIgYWxpZ249XCJyaWdodFwiIHN0eWxlPVwidGV4dC1hbGlnbjpyaWdodDt2ZXJ0aWNhbC1hbGlnbjpib3R0b21cIj48Y2VudGVyPjxkaXYgaWQ9XCInICsgY29udGFpbmVySUQgKyAnX2JvdHRvbUxpbmtcIiBzdHlsZT1cIm1hcmdpbjowcHg7cGFkZGluZy10b3A6MHB4O3BhZGRpbmctYm90dG9tOjJweDt3aWR0aDoxMDAlXCI+JztcbiAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRhYmxlIHN0eWxlPVwid2lkdGg6MTAwJTtcIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIj48dHI+JztcbiAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRkIHN0eWxlPVwid2lkdGg6NXB4O1wiPjwvdGQ+JztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxlZnRCb3R0b21MaW5rSFRNTCAhPSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRkIGFsaWduPVwibGVmdFwiPicgKyBsZWZ0Qm90dG9tTGlua0hUTUwgKyAnPC90ZD4nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChyaWdodEJvdHRvbUxpbmtIVE1MICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhckhUTUxbYSsrXSA9ICc8dGQgYWxpZ249XCJyaWdodFwiIHN0eWxlPVwidGV4dC1hbGlnbjpyaWdodDt3aGl0ZS1zcGFjZTpub3dyYXBcIj4nICsgcmlnaHRCb3R0b21MaW5rSFRNTCArICc8L3RkPic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPHRkIHN0eWxlPVwid2lkdGg6NXB4O1wiPjwvdGQ+JztcbiAgICAgICAgICAgICAgICAgICAgYXJIVE1MW2ErK10gPSAnPC90cj48L3RhYmxlPic7XG4gICAgICAgICAgICAgICAgICAgIGFySFRNTFthKytdID0gJzwvZGl2PjwvY2VudGVyPjwvdGQ+PC90cj4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFySFRNTFthKytdID0gJzwvdGFibGU+PC9jZW50ZXI+PC90ZD48L3RyPjwvdGFibGU+JztcbiAgICAgICAgICAgIGlmIChzaG93SGludCkge1xuICAgICAgICAgICAgICAgIHZhciB3aGF0c1RoaXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJRCArICdfd2hhdHNUaGlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCF3aGF0c1RoaXNEaXYpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hhdHNUaGlzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHdoYXRzVGhpc0Rpdi5pZCA9IGNvbnRhaW5lcklEICsgJ193aGF0c1RoaXMnO1xuICAgICAgICAgICAgICAgICAgICB3aGF0c1RoaXNEaXYuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgICAgICB3aGF0c1RoaXNEaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdoYXRzVGhpc0Rpdik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdoYXRzVGhpc0Rpdi5zdHlsZS56SW5kZXggPSBnaWd5YS51dGlscy5ET00uZ2V0TmV4dFpJbmRleCgpO1xuICAgICAgICAgICAgICAgIHZhciB3aGF0c1RoaXNUZXh0ID0gcFsnd2hhdHNUaGlzVGV4dCddO1xuICAgICAgICAgICAgICAgIC8vaWYgKCF3aGF0c1RoaXNUZXh0KSB3aGF0c1RoaXNUZXh0ID0gJ1lvdSBjYW4gdXNlIHlvdXIgYWNjb3VudCBmcm9tIG9uZSBvZiB0aGVzZSBzZXJ2aWNlcyB0byBzaWduIGludG8gdGhlIHNpdGUnO1xuICAgICAgICAgICAgICAgIGlmICghd2hhdHNUaGlzVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW50ZXJuYWxzLmlzQ29ubmVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hhdHNUaGlzVGV4dCA9IHRoaXMuVEVYVChsYW5nLCAnYWRkX21vcmVfY29ubmVjdGlvbnNfdG9feW91cl9hY2NvdW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGF0c1RoaXNUZXh0ID0gdGhpcy5URVhUKGxhbmcsICd5b3VfY2FuX3VzZV95b3VyX2FjY291bnRfZnJvbV9vbmVfb2ZfdGhlc2Vfc2VydmljZXNfdG9fc2lnbl9pbnRvX3RoZV9zaXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2hhdHNUaGlzRGl2LmlubmVySFRNTCA9ICc8dGFibGUgc3R5bGU9XCJwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQtY29sb3I6I0ZGRkZGRjtib3JkZXI6IDFweCBzb2xpZCAjNzY3Njc2O3dpZHRoOicgKyBoaW50VyArICdweDtoZWlnaHQ6JyArIGhpbnRIICsgJ3B4XCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCI+PHRyPjx0ZCBzdHlsZT1cInZlcnRpY2FsLWFsaWduOm1pZGRsZTsgdGV4dC1hbGlnbjpjZW50ZXJcIj48c3BhbiBhbGlnbj1cImxlZnRcIiBzdHlsZT1cIicgKyB0ZXh0U3R5bGUgKyAnO3dpZHRoOiAnICsgKGhpbnRXIC0gOCkgKyAncHg7IGNvbG9yOiMyNjI2MjY7IFwiPicgKyB3aGF0c1RoaXNUZXh0ICsgJzwvc3Bhbj48L3RkPjwvdHI+PC90YWJsZT4nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySUQpO1xuICAgICAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGFySFRNTC5qb2luKCcnKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcnICsgdyArICdweCc7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJycgKyBoICsgJ3B4JztcblxuXG4gICAgICAgICAgICB0aGlzLm1vZHVsZXNbY29udGFpbmVySURdLnBhZ2VzID0gcGFnZXM7XG4gICAgICAgICAgICBpZiAoIXNob3dXZWxjb21lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQYWdlKGNvbnRhaW5lcklEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3BpLmxvZ2luLm5leHRQYWdlID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICB0aGlzLm1vZHVsZXNbaWRdLnBhZ2UrKztcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGFnZShpZCk7XG4gICAgICAgIH07XG4gICAgICAgIF9waS5sb2dpbi5wcmV2UGFnZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgdGhpcy5tb2R1bGVzW2lkXS5wYWdlLS07XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBhZ2UoaWQpO1xuICAgICAgICB9O1xuICAgICAgICBfcGkubG9naW4uS2V5RG93bkhhbmRsZXIgPSBmdW5jdGlvbihldmVudCxlbCl7XG4gICAgICAgICAgICBpZiAoIWVsIHx8ICFldmVudCkgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ1NwYWNlJyB8fCBldmVudC5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgZWwuY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3BpLmxvZ2luLnNob3dFZGl0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW1zID0gZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKHRoaXMubW9kdWxlc1tpZF0ucCk7XG4gICAgICAgICAgICBkZWxldGUgcGFyYW1zLndpZHRoO1xuICAgICAgICAgICAgZGVsZXRlIHBhcmFtcy5oZWlnaHQ7XG4gICAgICAgICAgICBkZWxldGUgcGFyYW1zLmNvbnRhaW5lcklEO1xuICAgICAgICAgICAgZ2lneWEuc29jaWFsaXplLnNob3dFZGl0Q29ubmVjdGlvbnNVSShwYXJhbXMpO1xuICAgICAgICB9O1xuICAgICAgICBfcGkubG9naW4uc2hvd1doYXRzVGhpcyA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubW9kdWxlc1tpZF0uaS5zaG93SGludCkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkICsgJ193aGF0c1RoaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IGdpZ3lhLmdsb2JhbC5fR2V0RWxlbWVudFBvcyhjb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gcG9zLmxlZnQgKyAocGFyc2VJbnQoY29udGFpbmVyLnN0eWxlLndpZHRoKSAtIGVsLm9mZnNldFdpZHRoKSAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS50b3AgPSBwb3MudG9wICsgKHBhcnNlSW50KGNvbnRhaW5lci5zdHlsZS5oZWlnaHQpIC0gZWwub2Zmc2V0SGVpZ2h0KSAvIDIgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3BpLmxvZ2luLmhpZGVXaGF0c1RoaXMgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkICsgJ193aGF0c1RoaXMnKTtcbiAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgIGVsLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3BpLmxvZ2luLmhpZGVXZWxjb21lID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICBnaWd5YS51dGlscy5jb29raWUucmVtb3ZlKCdfZ2lnX2xscCcpO1xuICAgICAgICAgICAgZ2lneWEudXRpbHMuY29va2llLnJlbW92ZSgnX2dpZ19sbHUnKTtcbiAgICAgICAgICAgIHZhciBtID0gdGhpcy5tb2R1bGVzW2lkXTtcbiAgICAgICAgICAgIGdpZ3lhLnRoaXNTY3JpcHQuZ2xvYmFsQ29uZi5hbHdheXNGb3JjZUF1dGhlbnRpY2F0aW9uID0gdHJ1ZTsgLy9mZWF0dXJlICM3NjQzXG4gICAgICAgICAgICB0aGlzLnNob3dMb2dpblVJX3YxKG0ub3JpZ2luYWxDLCBtLm9yaWdpbmFsUCwgbS5pLCB0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3BpLmxvZ2luLnVwZGF0ZVBhZ2UgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIHZhciBtID0gdGhpcy5tb2R1bGVzW2lkXVxuICAgICAgICAgICAgaWYgKG0ucGFnZURpdikgbS5wYWdlRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBtLnBhZ2VEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArICdfcCcgKyBtLnBhZ2UpO1xuICAgICAgICAgICAgaWYgKG0ucGFnZURpdikgbS5wYWdlRGl2LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgIGlmIChtLnBhZ2VzID4gMSkge1xuICAgICAgICAgICAgICAgIHZhciByID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyAnX2Fycm93X3JpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgdmFyIHJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyAnX2Fycm93X3JpZ2h0X2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkICsgJ19hcnJvd19sZWZ0Jyk7XG4gICAgICAgICAgICAgICAgdmFyIGxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyAnX2Fycm93X2xlZnRfZGlzYWJsZScpO1xuICAgICAgICAgICAgICAgIGlmIChtLnBhZ2UgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGxkLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgbGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG0ucGFnZSA9PSBtLnBhZ2VzIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICByLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIHJkLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgX3BpLmxvZ2luLmdldExhc3RMb2dpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBnaWd5YS51dGlscy5jb29raWUuZ2V0KCdfZ2lnX2xscCcpO1xuICAgICAgICB9O1xuICAgICAgICBfcGkubG9naW4uZ2V0TGFzdExvZ2luTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBnaWd5YS51dGlscy5jb29raWUuZ2V0KCdfZ2lnX2xsdScpO1xuICAgICAgICB9O1xuICAgICAgICBfcGkubG9naW4ucHJvdmlkZXJDbGljayA9IGZ1bmN0aW9uIChpZCwgcHJvdmlkZXIpIHtcbiAgICAgICAgICAgIHZhciBvID0gdGhpcy5tb2R1bGVzW2lkXTtcbiAgICAgICAgICAgIHZhciBwcm92aWRlck9iaiA9IGdpZ3lhLnNvY2lhbGl6ZS5fZ2V0UHJvdmlkZXJCeU5hbWUocHJvdmlkZXIsIG8uYXJQcm92aWRlcnMpO1xuICAgICAgICAgICAgaWYgKCFwcm92aWRlck9iaikgcHJvdmlkZXJPYmogPSBnaWd5YS5zb2NpYWxpemUuX2dldFByb3ZpZGVyQnlOYW1lKHByb3ZpZGVyKTtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgcHJvdmlkZXI6IHByb3ZpZGVyLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3JDb2RlICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXMucmVxdWVzdFBhcmFtcy5nZXRJbmZvUmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVzLnJlcXVlc3RQYXJhbXMuY29udGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXMuY29udGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEVycm9yRnJvbVJlc3BvbnNlKG8ucCwgcmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvLmkuaXNQb3B1cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5fY2xvc2VDb21wb25lbnQoby5pLnJpZCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gby5pLmlzQ29ubmVjdCA/ICdjb25uZWN0aW9uQWRkZWQnIDogJ2xvZ2luJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvRXZlbnQgPSBnaWd5YS5fLmFkZFVzZXJJbmZvVG9FdmVudChyZXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE5hbWU6IGV2ZW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcjogcHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IHJlc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5ldmVudHMuZGlzcGF0Y2hGb3JXaWRnZXQob0V2ZW50LCBvLnApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL1dpbGwgYWx3YXlzIGdldCBBTEwgb2YgdGhlIHBlcm1pc3Npb25zXG4gICAgICAgICAgICAvL2lmIChwcm92aWRlck9iai5jb250ZXh0ICYmICFwcm92aWRlck9iai5jb250ZXh0LmNvbm5lY3RlZCAmJiBwcm92aWRlck9iai5jb250ZXh0LnJlcXVpcmVkUGVybWlzc2lvbnMpIG8ucFtwcm92aWRlcisnRXh0cmFQZXJtaXNzaW9ucyddPXByb3ZpZGVyT2JqLmNvbnRleHQucmVxdWlyZWRQZXJtaXNzaW9ucztcbiAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHByb3ZpZGVyT2JqLklEID09IDQxMjEpIHtcbiAgICAgICAgICAgICAgICB2YXIgb0J1dHRvbiA9IHByb3ZpZGVyT2JqLmJ1dHRvbkRhdGE7XG4gICAgICAgICAgICAgICAgcGFyYW1zWydvcGVuSURQcm92aWRlck5hbWUnXSA9IG9CdXR0b24ucHJvdmlkZXJOYW1lO1xuICAgICAgICAgICAgICAgIHBhcmFtc1snb3BlbklEUHJvdmlkZXJMb2dvJ10gPSBvQnV0dG9uLmxvZ29VUkw7XG4gICAgICAgICAgICAgICAgcGFyYW1zWydvcGVuSURVUkwnXSA9IG9CdXR0b24ub3BlbklEVVJMO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJvdmlkZXJPYmouSUQgIT0gNDEyMSB8fCBwcm92aWRlck9iai5idXR0b25EYXRhLnR5cGUgPT0gJ29wZW5JRCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoby5pLmlzQ29ubmVjdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvdmlkZXJPYmouY29udGV4dCAmJiBwcm92aWRlck9iai5jb250ZXh0LmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldCh7ZXZlbnROYW1lOiAncGVybWlzc2lvbnMnLCBwcm92aWRlcjogcHJvdmlkZXJ9LCBvLnApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMucmVkcmF3KGlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnNvY2lhbGl6ZS5yZXF1ZXN0UGVybWlzc2lvbnMoby5jLCBvLnAsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5zb2NpYWxpemUuY29ubmVjdChvLmMsIG8ucCwgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoby5wLmFjY291bnRzU29jaWFsTG9naW4pIHtcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEuYWNjb3VudHMuc29jaWFsTG9naW4oby5jLCBvLnAsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEuc29jaWFsaXplLmxvZ2luKG8uYywgby5wLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBldnQgPSB7ZXZlbnROYW1lOiAnYnV0dG9uQ2xpY2tlZCd9O1xuICAgICAgICAgICAgaWYgKHByb3ZpZGVyT2JqLmJ1dHRvbkRhdGEpIGV2dC5idXR0b24gPSBwcm92aWRlck9iai5idXR0b25EYXRhO1xuICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KGV2dCwgby5wKTtcbiAgICAgICAgfTtcbiAgICB9XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
