export const gigya = {
    isGigya: true,
    apiKey: "4_aeFS_UyzRnmP5k_MI59ejg",
    defaultApiDomain: "gigya.com",
    dataCenter: "eu1",
    build: {
        number: 15617,
        version: "canary"
    },
    gmidVersion: "ver4",
    partnerSettings: {
        authMode: "cookie",
        captchaProvider: "Google",
        plugins: {
            connectWithoutLoginBehavior: "alwaysLogin",
            defaultRegScreenSet: "Default-RegistrationLogin",
            defaultMobileRegScreenSet: "Default-RegistrationLogin",
            sessionExpiration: 0,
            rememberSessionExpiration: 0,
            apiDomain: "gigya.local.pyzlo.in",
            workflow: {
                path: "workflow/resources/js/entryPoint.js"
            }
        },
        baseDomains: "local.pyzlo.in",
        customAPIDomainPrefix: "gigya"
    },
    providersConfig: {},
    samlConfig: {
        errorPageURL: null,
        proxyPageURL: null
    },
    canary: {
        isActive: true,
        config: {
            version: "15617-3-28360530",
            isEnabled: true,
            probability: 3,
            cookiesNames: {
                isCanary: "gig_canary",
                version: "gig_canary_ver"
            }
        },
        Canary: function Canary() {},
        isLoaded: true
    },
    errorReport: {
        enabled: true,
        probability: 1
    },
    bypassCaptchaV1: true,
    __initialized: true,
    _: {
        isTrustedDomain: true,
        apiAdapters: {
            web: {
                sso: {
                    _requestTimeout: 3000,
                    SsoService: function SsoService() {},
                    _request: function _request() {},
                    getGroupToken: function getGroupToken() {},
                    setGroupToken: function setGroupToken() {},
                    logout: function logout() {},
                    removeGroupToken: function removeGroupToken() {},
                    setLoginTokenExp: function setLoginTokenExp() {},
                    getLoginTokenExp: function getLoginTokenExp() {},
                    checkTokenRenew: function checkTokenRenew() {},
                    syncCanaryIndication: function syncCanaryIndication() {},
                    setGroupContextCookie: function setGroupContextCookie() {},
                    setGroupApiDomain: function setGroupApiDomain() {},
                    getGroupApiDomain: function getGroupApiDomain() {}
                },
                tokenStore: {
                    activeNamespaces: {},
                    isValidGltExp: function isValidGltExp() {},
                    getGltexpCookie: function getGltexpCookie() {},
                    setGltexp: function setGltexp() {},
                    get: function get() {},
                    set: function set() {},
                    getCurrentSessionExpiration: function getCurrentSessionExpiration() {},
                    getGACCookie: function getGACCookie() {},
                    setFromAuthCode: function setFromAuthCode() {},
                    setFromGAC: function setFromGAC() {},
                    setFromSsoResponse: function setFromSsoResponse() {},
                    dispatchLoginEvent: function dispatchLoginEvent() {},
                    remove: function remove() {},
                    getTokenParam: function getTokenParam() {},
                    setBearerToken: function setBearerToken() {},
                    getBearerToken: function getBearerToken() {},
                    removeBearerToken: function removeBearerToken() {}
                },
                ApiRequest: function ApiRequest() {},
                BaseRequest: function BaseRequest() {},
                OauthRequest: function OauthRequest() {},
                webAdapterName: "Web",
                newApiAdapter: function newApiAdapter() {},
                WebAdapter: function WebAdapter() {},
                apiService: {
                    _apiKey: "4_aeFS_UyzRnmP5k_MI59ejg",
                    _hasGmid: true,
                    _domainResolver: {
                        originDomain: "https://local.pyzlo.in/",
                        isGroupApiDomain: false,
                        getApiDomain: function getApiDomain() {},
                        isApiDomainFirstParty: true,
                        hasGroupApiDomainChanged: false,
                        canSaveGmidAsCookie: true
                    },
                    _groupApiDomainService: {
                        _storage: {},
                        _pageDomain: "local.pyzlo.in",
                        _cookieName: "apiDomain_undefined"
                    },
                    _requestProvider: {
                        _xhrRequest: function _xhrRequest() {},
                        timeout: 15000
                    },
                    didFallback: false,
                    _storage: {
                        storage: {}
                    }
                }
            },
            mobile: {
                newApiAdapter: function newApiAdapter() {},
                mobileCallbacks: {},
                MobileAdapter: function MobileAdapter() {},
                showPlugin: function showPlugin() {}
            },
            OAuthMode: {
                0: "Social",
                1: "Sso",
                Social: 0,
                Sso: 1
            }
        },
        Uri: function Uri() {},
        apiDomainFactory: function apiDomainFactory() {},
        getGigyaDomain: function getGigyaDomain() {},
        getBaseDomain: function getBaseDomain() {},
        resolveApiDomain: function resolveApiDomain() {},
        getStorageDomain: function getStorageDomain() {},
        providers: {
            _aliases: {
                google: "googleplus",
                googleplus: "googleplus",
                messenger: "messenger",
                microsoft: "messenger",
                wechat: "wechat",
                weixin: "wechat"
            },
            Provider: function Provider() {},
            arProviders: [
                {
                    ID: 64,
                    displayName: "Facebook",
                    width: 650,
                    height: 400,
                    arDefaultCapabilities: [
                        "login",
                        "friends",
                        "places",
                        "status",
                        "actions",
                        "photos"
                    ],
                    name: "facebook"
                },
                {
                    ID: 9012,
                    displayName: "Twitter",
                    width: 800,
                    height: 440,
                    arDefaultCapabilities: [
                        "login",
                        "friends",
                        "notifications",
                        "actions",
                        "status",
                        "places",
                        "checkins"
                    ],
                    name: "twitter"
                },
                {
                    ID: 72,
                    displayName: "Google",
                    width: 560,
                    height: 600,
                    explicitOnly: false,
                    aliases: "google|googleplus",
                    arDefaultCapabilities: [
                        "login",
                        "contacts"
                    ],
                    name: "googleplus"
                },
                {
                    ID: 9042,
                    displayName: "LinkedIn",
                    width: 865,
                    height: 450,
                    arDefaultCapabilities: [
                        "login",
                        "friends",
                        "status",
                        "actions",
                        "notifications",
                        "contacts"
                    ],
                    name: "linkedin"
                },
                {
                    ID: 9058,
                    displayName: "Amazon",
                    width: 785,
                    height: 510,
                    arDefaultCapabilities: [
                        "login"
                    ],
                    name: "amazon"
                },
                {
                    ID: 9803,
                    displayName: "Yahoo",
                    width: 500,
                    height: 567,
                    arDefaultCapabilities: [
                        "login",
                        "friends",
                        "contacts",
                        "notifications"
                    ],
                    name: "yahoo"
                },
                {
                    ID: 1047,
                    displayName: "Microsoft",
                    width: 380,
                    height: 540,
                    explicitOnly: false,
                    aliases: "messenger|microsoft",
                    arDefaultCapabilities: [
                        "login",
                        " friends"
                    ],
                    name: "messenger"
                },
                {
                    ID: 9222,
                    displayName: "Odnoklassniki",
                    width: 888,
                    height: 425,
                    arDefaultCapabilities: [
                        "login"
                    ],
                    name: "odnoklassniki"
                },
                {
                    ID: 9007,
                    displayName: "FourSquare",
                    width: 1000,
                    height: 650,
                    arDefaultCapabilities: [
                        "login",
                        "friends",
                        "places",
                        "checkins"
                    ],
                    name: "foursquare"
                },
                {
                    ID: 8191,
                    displayName: "Renren",
                    width: 450,
                    height: 350,
                    arDefaultCapabilities: [
                        "login",
                        "friends",
                        "status",
                        "actions"
                    ],
                    name: "renren"
                },
                {
                    ID: 8203,
                    displayName: "QQ",
                    width: 570,
                    height: 460,
                    arDefaultCapabilities: [
                        "login",
                        "actions"
                    ],
                    name: "qq"
                },
                {
                    ID: 9821,
                    displayName: "Sina",
                    width: 640,
                    height: 380,
                    arDefaultCapabilities: [
                        "login",
                        "status",
                        "actions"
                    ],
                    name: "sina"
                },
                {
                    ID: 4228,
                    displayName: "Mixi",
                    width: 1000,
                    height: 720,
                    explicitOnly: true,
                    arDefaultCapabilities: [
                        "login",
                        "friends",
                        "actions",
                        "photos"
                    ],
                    name: "mixi"
                },
                {
                    ID: 9830,
                    displayName: "Yahoo! JAPAN",
                    width: 980,
                    height: 700,
                    explicitOnly: true,
                    arDefaultCapabilities: [
                        "login"
                    ],
                    name: "yahoojapan"
                },
                {
                    ID: 8205,
                    displayName: "Spiceworks",
                    width: 640,
                    height: 380,
                    explicitOnly: true,
                    arDefaultCapabilities: [
                        "login"
                    ],
                    name: "spiceworks"
                },
                {
                    ID: 9041,
                    displayName: "VKontakte",
                    width: 610,
                    height: 510,
                    arDefaultCapabilities: [
                        "login",
                        "friends",
                        "photos",
                        "status",
                        "actions"
                    ],
                    name: "vkontakte"
                },
                {
                    ID: 4096,
                    displayName: "WordPress",
                    width: 700,
                    height: 540,
                    arDefaultCapabilities: [
                        "login"
                    ],
                    name: "wordpress"
                },
                {
                    ID: 256,
                    displayName: "Blogger",
                    width: 760,
                    height: 400,
                    arDefaultCapabilities: [
                        "login"
                    ],
                    name: "blogger"
                },
                {
                    ID: 4218,
                    displayName: "Netlog",
                    width: 730,
                    height: 590,
                    explicitOnly: true,
                    arDefaultCapabilities: [
                        "login"
                    ],
                    name: "netlog"
                },
                {
                    ID: 5002,
                    displayName: "Livedoor",
                    width: 970,
                    height: 700,
                    explicitOnly: true,
                    arDefaultCapabilities: [
                        "login"
                    ],
                    name: "livedoor"
                },
                {
                    ID: 5004,
                    displayName: "Fox News",
                    width: 730,
                    height: 590,
                    explicitOnly: true,
                    arDefaultCapabilities: [
                        "login"
                    ],
                    name: "foxnews"
                },
                {
                    ID: 1051,
                    displayName: "PayPal",
                    width: 400,
                    height: 550,
                    explicitOnly: true,
                    arDefaultCapabilities: [
                        "login"
                    ],
                    name: "paypal"
                },
                {
                    ID: 9219,
                    displayName: "Xing",
                    width: 785,
                    height: 510,
                    explicitOnly: true,
                    arDefaultCapabilities: [
                        "login",
                        "friends"
                    ],
                    name: "xing"
                },
                {
                    ID: 8206,
                    displayName: "WeChat",
                    width: 730,
                    height: 590,
                    explicitOnly: false,
                    aliases: "wechat|weixin",
                    arDefaultCapabilities: [
                        "login"
                    ],
                    name: "wechat"
                },
                {
                    ID: 4121,
                    displayName: "OpenID",
                    width: 730,
                    height: 590,
                    explicitOnly: true,
                    arDefaultCapabilities: [
                        "login"
                    ],
                    name: "customopenid"
                },
                {
                    ID: 4122,
                    displayName: "Custom SAML",
                    width: 730,
                    height: 590,
                    explicitOnly: true,
                    arDefaultCapabilities: [
                        "login"
                    ],
                    name: "customsaml"
                },
                {
                    ID: 10001,
                    displayName: "OpenID Connect",
                    width: 730,
                    height: 590,
                    explicitOnly: true,
                    arDefaultCapabilities: [
                        "login"
                    ],
                    name: "openidconnect"
                },
                {
                    ID: 6002,
                    displayName: "Site",
                    width: 730,
                    height: 590,
                    explicitOnly: true,
                    arDefaultCapabilities: [
                        ""
                    ],
                    name: "site"
                },
                {
                    ID: 1052,
                    displayName: "PayPal",
                    width: 730,
                    height: 590,
                    explicitOnly: true,
                    arDefaultCapabilities: [
                        "login"
                    ],
                    name: "paypaloauth"
                },
                {
                    ID: 8207,
                    displayName: "Line",
                    width: 730,
                    height: 590,
                    arDefaultCapabilities: [
                        "login"
                    ],
                    name: "line"
                },
                {
                    ID: 20001,
                    displayName: "Kakao",
                    width: 500,
                    height: 600,
                    explicitOnly: true,
                    arDefaultCapabilities: [
                        "login"
                    ],
                    name: "kakao"
                },
                {
                    ID: 20002,
                    displayName: "Naver",
                    width: 780,
                    height: 555,
                    explicitOnly: true,
                    arDefaultCapabilities: [
                        "login"
                    ],
                    name: "naver"
                },
                {
                    ID: 20003,
                    displayName: "DocCheck",
                    width: 874,
                    height: 844,
                    explicitOnly: true,
                    arDefaultCapabilities: [
                        "login"
                    ],
                    name: "doccheck"
                },
                {
                    ID: 20004,
                    displayName: "Apple",
                    width: 874,
                    height: 844,
                    explicitOnly: true,
                    arDefaultCapabilities: [
                        "login"
                    ],
                    name: "apple"
                }
            ],
            getProviderByName: function getProviderByName() {},
            replaceProviderAliases: function replaceProviderAliases() {},
            getProviderById: function getProviderById() {},
            hideProvidersByName: function hideProvidersByName() {},
            getProvidersForRequiredCapabilities: function getProvidersForRequiredCapabilities() {},
            getAllProviders: function getAllProviders() {},
            getProvidersByName: function getProvidersByName() {},
            replaceWildcard: function replaceWildcard() {}
        },
        plugins: {
            instances: {},
            getPluginInstance: function getPluginInstance() {},
            setPluginInstance: function setPluginInstance() {},
            removePluginInstance: function removePluginInstance() {},
            BasePlugin: function BasePlugin() {},
            resources: {
                html: {
                    base: {
                        legacyModal: '<div id="gigya-screen-dialog-page-overlay" style="display:${overlayDisplay}"></div>\n<div class="gigya-screen-dialog-inner">\n    <div class="gigya-screen-dialog-top">\n        <div class="gigya-screen-dialog-caption" id="gigya-screen-dialog-caption-${modalID}">$title</div>\n        <div class="gigya-screen-dialog-close"></div>\n    </div>\n</div>',
                        modal: '<div id="gigya-screen-dialog-page-overlay" style="display:${overlayDisplay}"></div>\r\n<div class="gigya-screen-dialog-main">\r\n    <div class="gigya-screen-dialog-top">\r\n        <div class="gigya-screen-dialog-caption" tabindex="0" id="gigya-screen-dialog-caption-${modalID}">$title</div>\r\n        <div class="gigya-screen-dialog-close">\r\n            <a aria-label="close window" role="button" tabindex="0" >${closeImage}</a>\r\n        </div>\r\n    </div>\r\n    <div class="gigya-screen-dialog-inner">\r\n    </div>\r\n</div>\r\n',
                        modalCloseButton: '<img src="${imgUrl}" alt="close" height="${imgHeight}" width="${imgWidth}" />\n'
                    },
                    screenSet: {
                        passwordStrength: '<div class="${scoreClass}" aria-atomic="true" aria-live="polite">${content}</div>\n',
                        passwordStrength_strengthMeter: '<div class="gigya-passwordStrength-text">\n    <span class="gigya-passwordStrength-text">$TEXT(\'password_strength_colon\')</span>\n    <span class="gigya-passwordStrength-text gigya-passwordStrength-scoreText">${scoreText}</span>\n</div>\n<div class="gigya-passwordStrength-bar">\n    <div class="${barIndicatorClass}"></div>\n</div>\n',
                        passwordStrength_minimumRequirements: '<div class="gigya-passwordStrength-text-requirements">$requirements</div>\n',
                        screenSet_dialog: '<div id="${innerContainerID}" class="gigya-screen-content"></div>',
                        screenSet: '<h1 class="gigya-screen-caption" id="${innerContainerID}_caption"></h1>\r\n<div id="${childContainerID}" class="gigya-hidden"></div>\r\n<div id="${innerContainerID}" class="gigya-screen-content"></div>\r\n',
                        photoUpload_ui: '<div class="gigya-photo-upload-image" id="${photoElementID}"></div>\n<div>\n    <div class="gigya-photo-upload-button">$choose_file</div>\n    <div class="gigya-photo-upload-path" id="${pathContainerID}">$no_file_chosen</div>\n    <div class="gigya-photo-upload-text">$tip</div>\n</div>\n',
                        photoUpload_form: '<form enctype="multipart/form-data" method="post" class="gigya-photo-upload-form" target="${formTarget}" action="">\n    <input type="file" accept="image/*" name="_profilePhoto" />\n</form>\n',
                        inlinedPasswordStrength: '<div class="gigya-password-strength" data-on-focus-bubble="true" data-bubble-orientation="${orientation}"></div>\n',
                        consent: '<div class="consent" data-id="v1">\n\n  <div class="gigya-consent-title">${label}</div>\n  <div class="gigya-consent-subtitle" >${docId}</div>\n  <span class="gigya-consent-text">${approvedOnLabel}</span> <span class="gigya-consent-text">${approved}</span>\n\n</div>\n\n<div class="consent" data-id="v2">\n\n  <div class="gigya-consent-title">${label}</div>\n\n  <div class="gigya-version-content">\n    <span class="gigya-consent-text version-label">${versionLabel}</span> <span class="gigya-consent-text version">${docId}</span>\n  </div>\n\n  <div class="gigya-locale-content">\n    <span class="gigya-consent-text locale-label">${localeLabel}</span> <span class="gigya-consent-text locale">${locale}</span>\n  </div>\n\n  <div class="gigya-approved-on-content">\n    <span class="gigya-consent-text gigya-disabled-color approved-on-label">${approvedOnLabel}</span> <span class="gigya-consent-text gigya-disabled-color approved-on">${approved}</span>\n  </div>\n\n</div>',
                        communicationCheckbox: '<div class="subs-widget-container" aria-invalid="false">\n    <input class="gigya-input-checkbox subscription-checkbox"\n           id="subs-checkbox-${topic}-${channel}" name="${gigyaName}" type="checkbox"\n           ${checked}\n           data-communication-status="${status}"\n           data-communication-topic="${topic}"\n           data-communication-channel="${channel}"\n    >\n    <label class="subscription-name-label" for="subs-checkbox-${topic}-${channel}"\n           style="display: inline-block; vertical-align: middle; padding-left: 5px;">\n        ${label}\n    </label>\n</div>\n'
                    },
                    login_v2: {
                        arrow: '<div class="gigya-wrapper-login-providers-arrow-marker">\n    <button type="button"\n            tabindex="${tabindex}"\n            class="tabbing-button gigya-login-providers-arrow-marker"\n            aria-label="${label}">\n    </button>\n</div>\n',
                        footer: '<div class="gigya-login-footer"></div>',
                        footerBrandLong: '<a class="gigya-login-footer-social-by" href="https://www.gigya.com" target="_blank">${socialBy} <img alt="Gigya" class="gigya-logo" src="${logoUrl}" /></a>\n',
                        footerBrandShort: '<a class="gigya-login-footer-social-by" href="https://www.gigya.com" target="_blank"><img alt="Gigya" class="gigya-logo" src="${logoUrl}" /></a>\n',
                        footerBrandWhatIsThis: '<table cellpadding="0" cellspacing="0" class="gigya-login-footer-whatsthis" role="presentation">\n    <tbody>\n        <tr>\n            <td style="vertical-align: middle; text-align: center"><span>$whatsthistext</span></td>\n        </tr>\n    </tbody>\n</table>\n',
                        footerDivider: '<span class="gigya-login-footer-divider">|</span>',
                        footerEdit: '<span class="gigya-login-footer-edit-link">$edit</span>\n',
                        footerTerms: '<a class="gigya-login-footer-terms" target="_blank" href="https://www.gigya.com/terms-of-service/">$terms</a>\n',
                        header: '<div class="gigya-login-header">${headerText}</div>\n',
                        login: '<div class="gigya-login-providers">\n    <label id="social-buttons-login-caption" aria-label="Sign in with"></label>\n    <table class="gigya-login-providers-container" role="presentation">\n        <tr>\n            <td class="gigya-login-providers-arrow-left"></td>\n            <td class="gigya-login-providers-list-container"></td>\n            <td class="gigya-login-providers-arrow-right"></td>\n        </tr>\n    </table>\n</div>\n',
                        providerImage: '<img style="width:${buttonWidth}px;height:${buttonHeight}px;" src="${imageUrl}" />\r\n',
                        uiContainer: '<div id="${containerID}_uiContainer"></div>',
                        welcome: '<div class="gigya-login-welcome-container">\n    <div class="gigya-login-welcome-user"></div>\n    <div class="gigya-login-welcome-provider"></div>\n    <div class="gigya-login-welcome-signin-link"></div>\n</div>\n',
                        welcomeBubble: '<div class="gigya-login-welcome-bubble" tabindex="0" role="button">\n    <div class="gigya-login-welcome-bubble-left"></div>\n    <div class="gigya-login-welcome-bubble-center">\n        <div class="gigya-login-welcome-bubble-text">$notYou</div>\n    </div>\n    <div class="gigya-login-welcome-bubble-right"></div>\n</div>\n',
                        welcomeGreeting: '<div class="gigya-login-welcome-greeting">$welcomeBack</div>\n',
                        welcomeSignInLink: '<a class="gigya-link" href="javascript:void(0);">$singInUsingDifferentNetwork</a>\n'
                    }
                },
                css: {
                    base: {
                        legacy_modal: "/* legacy modal */\n\ndiv.gigya-screen-dialog {\n    position: absolute;\n    display: inline-block;\n    top: 25px;\n    left: 25px;\n    border: 8px solid #CCCCCC;\n    border-radius: 8px;\n    background-color: #FFFFFF;\n    outline: none;\n}\n\ndiv.gigya-screen-dialog-inner {\n    border: 1px solid #AAAAAA;\n}\n\ndiv.gigya-screen-dialog-close {\n    line-height: 33px;\n    height: 33px;\n    width: 20px;\n    float: right;\n    cursor: pointer;\n    background-image: url('${imgBase}/accounts/close_dialog.png');\n    background-position: right;\n    background-repeat: no-repeat;\n}\n\ndiv.gigya-screen-dialog-caption {\n    float: left;\n    font-weight: bold;\n    font-size: 16px;\n    font-family: arial;\n}\n\ndiv.gigya-screen-dialog-mobile {\n    position: absolute;\n    display: inline-block;\n    top: 0;\n    left: 0;\n    background-color: #FFFFFF;\n    width: 100%;\n}\n\ndiv.gigya-screen-dialog-top {\n    overflow: hidden;\n    zoom: 1;\n    background-color: #F3F3F3;\n    line-height: 33px;\n    padding: 0 10px 0 11px;\n}\n\n#gigya-screen-dialog-page-overlay {\n        width : 100vw;\n        height : 100vh;\n        background : black;\n        position : fixed;\n        top : 0;\n        left : 0;\n        z-index : -1;\n        filter : alpha(opacity=20);\n        opacity : 0.2;\n    }",
                        modern_modal: '/*modern modal*/\n.gigya-style-modern #gigya-screen-dialog-page-overlay {\n    width: 100vw;\n    height: 100vh;\n    background: black;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    filter: alpha(opacity=20);\n    opacity: 0.2;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-main {\n    border: 0.5px;\n    border-radius: 3px;\n    background-color: transparent;\n    -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.5);\n    -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.5);\n    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.5);\n    max-height: 99vh;\n    max-width: 99vw;\n    overflow: auto;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-top {\n    overflow: hidden;\n    zoom: 1;\n    background-color: #1371B9;\n    line-height: 38px;\n    padding: 0 10px 0 11px;\n    border-radius: 3px 3px 0px 0px;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-close {\n    background-image: initial;\n    background-position: initial;\n    background-repeat: initial;\n    float: right;\n    cursor: pointer;\n}\n.gigya-style-modern div.gigya-screen-dialog-close > a{\n    padding: 4px;\n}\n.gigya-style-modern div.gigya-screen-dialog-close > a > img {\n    margin-top: 11px;\n    vertical-align: initial;\n    border: 0px;\n    width: auto;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-caption {\n    float: left;\n    font-size: 19px;\n    font-family: arial;\n    color: #FFFFFF;\n    padding-right: 20px;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-inner {\n    padding: 0px;\n    overflow: hidden;\n    min-width: 32px;\n    min-height: 64px;\n    background-color: white;\n}\n\n.gigya-style-modern div.gigya-screen-dimmer {\n    position: absolute;\n    opacity: 0.2;\n    filter: alpha(opacity=20);\n    background-color: #FFFFFF;\n}\n\n.gigya-style-modern div.gigya-screen-loader {\n    position: absolute;\n    background: transparent url("${imgBase}/accounts/bigLoader.gif") no-repeat center center;\n    min-height: 32px;\n    min-width: 32px;\n}\n\n.gigya-style-modern.gigya-screen-dialog {\n    position: fixed;\n    border: none;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile {\n    position: absolute;\n    display: inline-block;\n    top: 0;\n    left: 0;\n    background-color: white;\n    width: 100%;\n    height: 100%;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-main {\n    max-height: 100vh;\n    max-width: 100vw;\n    box-shadow: initial;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-top {\n    position: fixed;\n    top: 0px;\n    border-radius: 0px;\n    line-height: 27px;\n    box-sizing: border-box;\n    width: 100%;\n    z-index: 1;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-caption {\n    font-size: 14px;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-close > a > img {\n    margin-top: 5px;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-inner {\n    border: 0px;\n    margin-top: 27px;\n    box-sizing: border-box;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-inner > div {\n    margin: 0 auto;\n}\n\n.gigya-style-modern.gigya-ios.gigya-screen-dialog, .gigya-style-modern.gigya-ios.gigya-screen-dialog.gigya-ios-v7.gigya-screen-dialog-mobile div.gigya-screen-dialog-top {\n    position: absolute;\n}\n\n.gigya-style-modern.gigya-android.gigya-screen-dialog-mobile {\n    overflow: auto;\n}\n\n.gigya-style-modern.gigya-ie8 #gigya-screen-dialog-page-overlay {\n    width: 100%;\n    height: 100%;\n}\n\nhtml.gigya-mobile-modal-mode {\n    overflow: hidden;\n}\nhtml.gigya-mobile-modal-mode body {\n    height: 0px;\n    overflow: hidden;\n}\n',
                        defaultCSS: '.gigya-consent-title {\n  font-weight: bold;\n  display: block;\n  font-weight: 700;\n  font-size: 15px;\n  font-family: arial;\n}\n.gigya-consent-subtitle {\n  font-weight: bold;\n  display: block;\n  font-weight: 700;\n  font-size: 13px;\n  font-family: arial;\n}\n\n.consent .gigya-version-content {\n  margin-top: 0.5rem;\n}\n\n.gigya-screen .gigya-disabled-color {\n  color: #b2b2b2;\n}\n.gigya-consent-text {\n  display: inline-block;\n}\n.gigya-composite-control-captcha-widget iframe {\n  width: 100%;\n}\n#FunCaptcha {\n  text-align: center;\n}\n.gigya-reset *,\ndiv.gigya-reset,\n.gigya-reset span,\n.gigya-reset a:hover,\n.gigya-reset a:visited,\n.gigya-reset a:link,\n.gigya-reset a:active {\n  border: none;\n  padding: 0px;\n  margin: 0px;\n  color: inherit;\n  text-decoration: none;\n  width: auto;\n  float: none;\n  -moz-border-radius: 0;\n  border-radius: 0;\n  font-family: arial;\n  font-size: 12px;\n  color: #333333;\n  text-align: left;\n}\n\n.gigya-screen .gigya-error-msg {\n  color: #ce4635;\n  font-size: 11px;\n  display: block;\n  visibility: hidden;\n}\n\n.gigya-screen .gigya-error-msg.gigya-error-msg-active {\n  color: #ce4635;\n  font-size: 11px;\n  display: block;\n  visibility: visible;\n}\n.gigya-screen .gigya-error-msg.gigya-warn {\n  color: #b45a0b !important;\n}\n\n.gigya-screen .gigya-terms-error,\n.gigya-screen input.gigya-error,\n.gigya-screen input[type="text"].gigya-error,\n.gigya-screen input[type="password"].gigya-error,\n.gigya-screen input[type="email"].gigya-error,\n.gigya-screen select.gigya-error {\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #ce4635;\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n\n.gigya-screen input.gigya-warn,\n.gigya-screen input[type="text"].gigya-warn,\n.gigya-screen select.gigya-warn {\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #b45a0b !important;\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n\n.gigya-screen input.gigya-error[type="checkbox"],\n.gigya-screen input.gigya-error[type="radio"] {\n  padding: 0;\n}\n\n.gigya-screen input[disabled],\n.gigya-screen input:disabled {\n  background-color: #e1e1e1;\n  color: #4a4a4a;\n  border-color: #cccccc;\n}\n\ndiv.gigya-attach-file-upload-form {\n  position: absolute;\n  overflow: hidden;\n  font-size: 50px;\n  cursor: pointer;\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n\ndiv.gigya-photo-upload-form > input {\n  font-size: 500px;\n  direction: rtl;\n  height: 100%;\n  cursor: pointer;\n}\n\n.gigya-password-strength-bubble .gig-balloon-nub {\n  background-image: url("${imgBase}/screenSet/triangle_left.png");\n  height: 16px;\n  width: 10px;\n  left: +2px;\n}\n.gigya-password-strength-bubble .gig-balloon-nub-up {\n  background-image: url("${imgBase}/screenSet/triangle_up.png");\n  height: 10px;\n  width: 16px;\n  top: +2px;\n}\n.gigya-password-strength-bubble .gig-balloon-nub-right {\n  background-image: url("${imgBase}/screenSet/triangle_right.png");\n  height: 16px;\n  width: 10px;\n  left: -2px;\n}\n.gigya-password-strength-bubble .gig-balloon-nub-down {\n  background-image: url("${imgBase}/screenSet/triangle_down.png");\n  height: 10px;\n  width: 16px;\n  top: -2px;\n}\n.gigya-password-strength-bubble .gig-balloon-frame {\n  background-color: #f3f5f6;\n  -webkit-border-radius: 2px;\n  -moz-border-radius: 2px;\n  border-radius: 2px;\n  border: 1px solid #bfcfda;\n  -webkit-box-shadow: inset 0 0 1px 1px RGBA(0, 0, 0, 0.05);\n  -moz-box-shadow: inset 0 0 1px 1px RGBA(0, 0, 0, 0.05);\n  box-shadow: inset 0 0 1px 1px RGBA(0, 0, 0, 0.05);\n}\n\n.gigya-password-strength-bubble .gig-balloon {\n  position: relative;\n}\n.gigya-password-strength-bubble.gig-balloon-left .gig-balloon {\n  left: +10px;\n  top: +3px;\n}\n.gigya-password-strength-bubble.gig-balloon-right .gig-balloon {\n  left: -10px;\n  top: +3px;\n}\n.gigya-password-strength-bubble.gig-balloon-up .gig-balloon {\n  left: -5px;\n  top: +17px;\n}\n.gigya-password-strength-bubble.gig-balloon-down .gig-balloon {\n  left: -5px;\n  top: -12px;\n}\n\n.gigya-passwordStrength-text {\n  text-align: center;\n}\n\nspan.gigya-passwordStrength-text {\n  font-weight: bold;\n  display: inline-block;\n}\n\ndiv.gigya-passwordStrength-text-requirements {\n  text-align: center;\n  width: 100%;\n  margin-top: 8px;\n}\n\nspan.gigya-passwordStrength-scoreText {\n  margin-left: 3px;\n}\n\n.gigya-passwordStrength-too_weak .gigya-passwordStrength-scoreText {\n  color: #e76468;\n}\n.gigya-passwordStrength-weak .gigya-passwordStrength-scoreText {\n  color: #e76468;\n}\n.gigya-passwordStrength-fair .gigya-passwordStrength-scoreText {\n  color: #d99b4b;\n}\n.gigya-passwordStrength-strong .gigya-passwordStrength-scoreText {\n  color: #4ababc;\n}\n.gigya-passwordStrength-very_strong .gigya-passwordStrength-scoreText {\n  color: #4ababc;\n}\n\ndiv.gigya-passwordStrength-bar {\n  width: 100%;\n  height: 1px;\n  background-color: #b6b6b6;\n  margin-top: 8px;\n}\n\ndiv.gigya-passwordStrength-bar-too_weak {\n  width: 20%;\n  height: 100%;\n  background-color: #e76468;\n}\n\ndiv.gigya-passwordStrength-bar-weak {\n  width: 40%;\n  height: 100%;\n  background-color: #e76468;\n}\n\ndiv.gigya-passwordStrength-bar-fair {\n  width: 60%;\n  height: 100%;\n  background-color: #d99b4b;\n}\n\ndiv.gigya-passwordStrength-bar-strong {\n  width: 80%;\n  height: 100%;\n  background-color: #4ababc;\n}\n\ndiv.gigya-passwordStrength-bar-very_strong {\n  width: 100%;\n  height: 100%;\n  background-color: #4ababc;\n}\n\n.gigya-calculate-size {\n  position: absolute !important;\n  -ms-zoom: 1 !important;\n  zoom: 1 !important;\n  left: 10px !important;\n  top: -1000px !important;\n}\n\n.gigya-calculate-size div.gigya-captcha {\n  min-width: 318px;\n  min-height: 80px;\n  _width: 318px;\n  _height: 80px;\n}\n.gigya-calculate-size div.gigya-captcha.v2 {\n  min-height: 80px;\n  _height: 80px;\n}\n\n.gigya-calculate-size div.gigya-social-login {\n  min-width: 110px;\n  min-height: 120px;\n  _width: 110px;\n  _height: 120px;\n}\n\n.gigya-calculate-size div.gigya-tfa {\n  min-width: 325px;\n  min-height: 200px;\n  _width: 325px;\n  _height: 200px;\n}\n\ndiv.gigya-container {\n  display: none;\n}\n\ndiv.gigya-container.gigya-container-enabled {\n  display: block;\n}\n\ndiv.gigya-loginID-availability {\n  line-height: 18px;\n  background-repeat: no-repeat;\n  background-position: left center;\n}\n\ndiv.gigya-loginID-availability-available {\n  padding-left: 17px;\n  background-image: url("${imgBase}/accounts/ok.png");\n  color: #4fa373;\n}\n\ndiv.gigya-loginID-availability-not-available {\n  padding-left: 16px;\n  background-image: url("${imgBase}/accounts/error.png");\n  color: #ce4635;\n}\n\ndiv.gigya-loginID-availability-progress {\n  padding-left: 20px;\n  background-image: url("${imgBase}/accounts/smallLoader.gif");\n  color: #666666;\n}\n\ndiv.gigya-profile-photo {\n  border-radius: 3px;\n}\n\n.gigya-calculate-size div.gigya-profile-photo {\n  min-width: 64px;\n  min-height: 64px;\n}\n\ndiv.gigya-screen-dimmer {\n  position: absolute;\n  opacity: 0.5;\n  filter: "alpha(opacity=50)";\n  background-color: #ffffff;\n}\n\ndiv.gigya-screen-loader {\n  position: absolute;\n  background: transparent url("${imgBase}/accounts/bigLoader.gif") no-repeat center center;\n  min-height: 32px;\n  min-width: 32px;\n}\n\ndiv.gigya-screen-dialog-content {\n  overflow: auto;\n  padding: 25px;\n}\n\ndiv.gigya-screen-dialog-mobile div.gigya-composite-control-captcha-widget {\n  padding: 0;\n}\n\ndiv.gigya-screen-dialog-mobile .gigya-screen {\n  width: 100%;\n}\n\ndiv.gigya-secret-question {\n  display: none;\n}\n\ndiv.gigya-photo-upload {\n  height: 63px;\n  width: 300px;\n  zoom: 1;\n}\n\ndiv.gigya-photo-upload-button {\n  display: inline-block;\n  zoom: 1;\n  margin: 0 8px 8px 0;\n  font-weight: normal;\n  border: 1px solid #cecece;\n  cursor: pointer;\n  padding: 0 12px;\n  color: #333333;\n  font-weight: bold;\n  border-radius: 4px;\n  line-height: 28px;\n  background: #f2f2f2;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#FFFFFF", endColorstr="#F2F2F2");\n  background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#f2f2f2));\n  background: -moz-linear-gradient(top, #ffffff, #f2f2f2);\n}\n\ndiv.gigya-photo-upload-button:hover {\n  background: #ffffff;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#F2F2F2", endColorstr="#FFFFFF");\n  background: -webkit-gradient(linear, left top, left bottom, from(#f2f2f2), to(#ffffff));\n  background: -moz-linear-gradient(top, #f2f2f2, #ffffff);\n}\n\ndiv.gigya-photo-upload-text {\n  font-size: 11px;\n  color: #666666;\n}\n\ndiv.gigya-photo-upload-image {\n  border-radius: 6px;\n  background-position: center center;\n  background-repeat: no-repeat;\n  width: 64px;\n  height: 64px;\n  background-color: #f2f2f2;\n  float: left;\n  margin-right: 8px;\n}\n\ndiv.gigya-photo-upload-path {\n  white-space: nowrap;\n  width: 107px;\n  vertical-align: middle;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  padding-right: 10px;\n  background-position: right;\n  background-repeat: no-repeat;\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding-right: 20px;\n}\n\nh1.gigya-screen-caption {\n  border-bottom: 1px solid #dbdbdb;\n  font-size: 16px;\n  font-weight: bold;\n  color: #333;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  margin: 0 auto;\n}\n\n.gigya-error-display {\n  display: none;\n}\n\n.gigya-error-display.gigya-error-display-active {\n  display: block;\n}\n\n.gigya-hidden {\n  display: none !important;\n}\n\n.gigya-screen .gigya-tfa input[type="text"] {\n  margin: 5px 0px;\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #cccccc;\n}\n\n.gigya-screen .gigya-tfa input[type="text"]:focus,\n.gigya-screen .gigya-tfa input[type="text"]:focus {\n  border-color: #87b9ea;\n}\n\n.gigya-show-checkmark.gigya-valid {\n  background-image: url("${imgBase}/screenSet/checkmarkValid.png");\n  background-position-x: 100%;\n  background-position-y: 50%;\n  background-position: right 5px center;\n  background-repeat: no-repeat;\n  padding-right: 25px;\n}\n\n.gigya-show-checkmark.gigya-valid.gigya-empty {\n  background-image: none;\n  padding-right: 5px;\n}\n\n.gigya-show-validity-border.gigya-valid:not(.gigya-empty) {\n  border: 1px solid #30914C;\n}\n\n.gigya-show-checkmark.gigya-pending {\n  background-image: url("${imgBase}/screenSet/checkmarkPending.gif");\n  background-position-x: 100%;\n  background-position-y: 50%;\n  background-position: right 5px center;\n  background-repeat: no-repeat;\n  padding-right: 25px;\n}\n\n/* If changed, update UI Builder too. */\n.gigya-screen .gigya-composite-control-image {\n  overflow: hidden;\n}\n.gigya-image {\n  background-repeat: no-repeat;\n  box-sizing: content-box;\n  background-position: center;\n  min-height: 10px;\n}\n.gigya-image[data-background-size="fit"] {\n  background-size: contain;\n}\n.gigya-image[data-background-size="fit-horizontally"] {\n  background-size: 100% auto;\n}\n.gigya-image[data-background-size="fit-vertically"] {\n  background-size: auto 100%;\n}\n.gigya-image[data-background-size="stretch"] {\n  background-size: 100% 100%;\n}\n\n/*IE8*/\n.gigya-ie8 .gigya-layout-cell {\n  overflow: hidden;\n  margin-left: -1px !important;\n}\n\n.gigya-ie8 .gigya-attach-file-upload-form .gigya-attach-file-upload-file-input {\n  width: 1000px;\n}\n\n.gigya-ie8 .gigya-calculate-size div.gigya-profile-photo {\n  _width: 64px;\n  _height: 64px;\n}\n\n.gigya-ie8 div.gigya-photo-upload {\n  *display: inline;\n}\n\n.gigya-ie8 div.gigya-photo-upload-button {\n  *display: inline;\n}\n.gigya-ie8 .gigya-screen .gigya-placeholder {\n  color: #a9a9bb;\n  padding-left: 5px;\n  text-indent: 0;\n}\n.gigya-ie8 .gigya-placeholder:focus {\n  padding-left: 5px;\n}\n.gigya-ie8 .gigya-screen .gigya-input-text:focus {\n  padding-left: 5px;\n  text-indent: 0;\n}\n.gigya-ie8 .gigya-screen.gigya-input-text,\n.gigya-ie8 .gigya-screen .gigya-input-text.gigya-error {\n  padding-top: 12px;\n}\n\n/*IE9*/\n.gigya-ie9 .gigya-screen input.gigya-input-text,\n.gigya-ie9 .gigya-screen input.gigya-input-password {\n  padding-top: 1px;\n  text-indent: 0;\n  padding-bottom: 5px;\n}\n\n.gigya-ie9 .gigya-screen .gigya-input-text:focus,\n.gigya-ie9 .gigya-screen .gigya-input-password:focus {\n  box-shadow: 0px 0px 5px 0px #1d87ff;\n  border: 1px solid #87b9ea;\n  /*padding-left: 5px;*/\n  text-indent: 0;\n}\n\n.gigya-ie9 .gigya-screen input.gigya-input-text.gigya-placeholder,\n.gigya-ie9 .gigya-screen input.gigya-input-password.gigya-placeholder {\n  color: #a9a9bb;\n  padding-top: 5px;\n  text-indent: 0;\n  /*padding-left: 4px;*/\n}\n\n/*IE10*/\n.gigya-ie10 .gigya-screen input.gigya-input-text,\n.gigya-ie10 .gigya-screen input.gigya-input-password {\n  padding-top: 1px;\n}\n\n/*remove bottom padding for outline when focused (not needed anyway)*/\n.gigya-screen .forgot-password-cell a,\n.gigya-screen .gigya-composite-control.gigya-forgotPassword,\n.gigya-screen .gigya-composite-control.gigya-change-password-link,\n.gigya-screen .gigya-composite-control.gigya-composite-control-link {\n  padding-bottom: 0px;\n}\n.gigya-screen .gigya-array-manager.disable-delete > .gigya-array-template > .buttons-wrapper button.gigya-array-remove-btn {\n  display: none;\n}\n.gigya-screen .gigya-composite-control-array-widget {\n  margin: 10px 0;\n}\n.gigya-screen .gigya-composite-control-array-widget .gigya-composite-control-array-widget {\n  margin: 10px;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template {\n  padding: 10px 0 10px 0;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template:not(:last-of-type) {\n  border-bottom: 1px #c1c1c1 solid;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template .buttons-wrapper {\n  text-align: right;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template button {\n  background: none;\n  outline: none !important;\n  color: #1371b9;\n  padding: 10px;\n  cursor: pointer;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template button.hidden {\n  display: none;\n}\n.gigya-screen a.gigya-disabled {\n  color: #757575;\n  cursor: default;\n  pointer-events: none;\n  text-decoration: none;\n}\n\n.gigya-screen input[type="button"].gigya-disabled {\n  background: #757575 !important;\n  cursor: default;\n}\n\n.gigya-screen .gigya-otp-update-form .gigya-input-submit[type="submit"].gigya-disabled {\n  background: #757575 !important;\n  cursor: default;\n  pointer-events: none;\n}\n\n.gigya-screen .gigya-disabled:hover {\n  text-decoration: none;\n  cursor: default;\n}\n\n.gigya-screen .gigya-disabled:active {\n  color: #757575;\n  cursor: default;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.justify-content-space {\n  justify-content: space-between;\n}\n\n.gigya-myPhoto-form-wrapper {\n  width: 100% !important;\n}\n.gigya-myPhoto-uploadForm {\n  opacity: 1 !important;\n}\n\n.gigya-myPhoto-profile-box-wrapper input.gigya-myPhoto-upload {\n  width: 100% !important;\n}\n\n.gigya-myPhoto-status-icon {\n  opacity: 0 !important;\n}\n\n.gigya-myPhoto-uploadForm > input {\n  border: 0 !important;\n  background-color: transparent !important;\n}\n.gigya-myPhoto-upload {\n  opacity: 0 !important;\n}\n.gigya-dummyPhoto-upload {\n  width: 100% !important;\n  height: 100% !important;\n}\n.gigya-composite-control-link:focus,\n.gigya-composite-control select:focus,\n.gigya-composite-control input[type="checkbox"]:focus,\n.gigya-myPhoto-delete-button:focus,\n.gigya-myPhoto-uploadForm input:focus,\n.gigya-dummyPhoto-upload:focus {\n  border: 1px solid #2378cd !important;\n  outline: none !important;\n  box-shadow: 0 0 5px 0 #0070f0 !important;\n}\n\n.gigya-screen .gigya-composite-control.gigya-composite-control-phone-number-widget .gigya-phone-verified-status-image {\n  width: 16px;\n  height: 16px;\n  background-image: url("${imgBase}/screenSet/checkmarkValid.png");\n  background-position-x: 100%;\n  background-position-y: 50%;\n  background-repeat: no-repeat;\n}\n'
                    },
                    login_v2: {
                        ie8patch: "\n.gigya-login-providers-arrow-left,\n.gigya-login-providers-list-container,\n.gigya-login-providers-arrow-right {\n    display:inline;\n}\n\n.gigya-login-provider div {\n    display: -ms-inline-grid;\n}\n\n\ntable.gigya-login-providers-container {\n    top: 0px;\n}",
                        iePatch: ".gigya-login-footer {\n    position: relative;\n    top: -9px;\n}\n",
                        main: "\n.gigya-link {\n    line-height: normal;\n    cursor: pointer;\n    font-family: arial;\n    font-size: 11px;\n    color: #0086f1;\n}\n\n.gigya-login {\n    margin: 10px;\n    overflow: auto;\n}\n\n\n.gigya-login-providers-container {\n    display: block;\n    margin: 0 auto;\n    background-color: transparent;\n    border-collapse: collapse;\n    white-space: nowrap;\n    border: none;\n    vertical-align: middle;\n\n    position:relative;\n    top: 50%;\n    transform: translateY(-50%);\n    -ms-transform: translateY(-50%);\n    -webkit-transform: translateY(-50%);\n    -moz-transform: translateY(-50%);\n\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.gigya-login-providers-container,\n.gigya-login-providers-container tr,\n.gigya-login-providers-container td,\n.gigya-login-providers-container th {\n    vertical-align: middle;\n}\n\n.gigya-login-providers-list {\n    display: none;\n}\n\n.gigya-active .gigya-login-providers-list {\n    display: block;\n}\n\n.gigya-login-provider-row {\n    display: block;\n    clear: both;\n    float: none;\n    margin: 0;\n    padding: 2.5px 0;\n    line-height:18px;\n}\n\n.gigya-login-provider {\n    cursor: pointer;\n    margin-right: 5px;\n}\n\n.gigya-login-provider div {\n    display: inline-block;\n}\n\n.gigya-login-provider-last {\n    margin-right: 0;\n}\n\n.gigya-login-provider img {\n    vertical-align: baseline;\n}\n\n.gigya-login-providers-container div,\n.gigya-login-providers-container span {\n    margin: 0;\n}\n\n.gigya-login-providers-list-container {\n    vertical-align: top;\n    text-align: center;\n    width: 100%;\n}\n\n.gigya-login-providers-list-container tbody,\n.gigya-login-providers-list-container tr {\n    width: 100%;\n}\n\n.gigya-login-providers-arrow-left,\n.gigya-login-providers-arrow-right {\n    vertical-align: middle;\n    cursor: pointer;\n    box-sizing: border-box;\n    -webkit-tap-highlight-color:transparent;\n}\n\n.gigya-login-providers-arrow-left button,\n.gigya-login-providers-arrow-right button {\n    cursor: inherit;\n}\n\n.gigya-login-providers-arrow-left.no-arrows,\n.gigya-login-providers-arrow-right.no-arrows {\n    display: none;\n}\n\n.gigya-login-providers-arrow-marker-floating-disabled {\n    visibility: hidden;\n}\n\n.gigya-login-providers-arrow-left div .gigya-login-providers-arrow-marker {\n    background-repeat: no-repeat;\n    float: right;\n    margin-right: 17px;\n}\n\n.gigya-login-providers-arrow-right div .gigya-login-providers-arrow-marker {\n    background-repeat: no-repeat;\n    float: left;\n    margin-left: 17px;\n}\n\n.gigya-login-providers-arrow-left.gigya-login-providers-arrow-marker-floating div .gigya-login-providers-arrow-marker {\n    height: 70px;\n    width: 42px;\n    padding: 0px;\n    margin: 0px;\n    position: relative;\n    float: left;\n    background-image: url('$scriptBase/paging/touch_button_left.png');\n}\n\n.gigya-login-providers-arrow-right.gigya-login-providers-arrow-marker-floating div .gigya-login-providers-arrow-marker {\n    background-repeat: no-repeat;\n    height: 70px;\n    width: 42px;\n    padding: 0px;\n    margin: 0px;\n    position: relative;\n    float: right;\n    background-image: url('$scriptBase/paging/touch_button_right.png');\n}\n\n.gigya-login-providers-arrow-left.gigya-login-providers-arrow-marker-arrows div .gigya-login-providers-arrow-marker {\n    height: 14px;\n    width: 8px;\n    background-image: url('$scriptBase/paging/navigation_arrow_left.png');\n    margin-right: 5px;\n}\n\n.gigya-login-providers-arrow-right.gigya-login-providers-arrow-marker-arrows div .gigya-login-providers-arrow-marker {\n    height: 14px;\n    width: 8px;\n    background-image: url('$scriptBase/paging/navigation_arrow_right.png');\n    margin-left: 5px;\n}\n\n.gigya-login-providers-arrow-left.gigya-login-providers-arrow-marker-arrows.gigya-login-providers-arrow-disabled div .gigya-login-providers-arrow-marker {\n    height: 14px;\n    width: 8px;\n    background-image: url('$scriptBase/paging/navigation_arrow_left_disabled.png');\n}\n\n.gigya-login-providers-arrow-right.gigya-login-providers-arrow-marker-arrows.gigya-login-providers-arrow-disabled div .gigya-login-providers-arrow-marker {\n    height: 14px;\n    width: 8px;\n    background-image: url('$scriptBase/paging/navigation_arrow_right_disabled.png');\n}\n\n.gigya-login-providers-arrow-left.gigya-login-providers-arrow-marker-newArrows div .gigya-login-providers-arrow-marker {\n    height: 14px;\n    width: 8px;\n    background-image: url('$scriptBase/paging/navigation_arrow_left.png');\n}\n\n.gigya-login-providers-arrow-right.gigya-login-providers-arrow-marker-newArrows div .gigya-login-providers-arrow-marker {\n    height: 14px;\n    width: 8px;\n    background-image: url('$scriptBase/paging/navigation_arrow_right.png');\n}\n\n.gigya-login-providers-arrow-right.gigya-login-providers-arrow-marker-newArrows.gigya-login-providers-arrow-disabled div .gigya-login-providers-arrow-marker {\n    height: 14px;\n    width: 8px;\n    background-image: url('$scriptBase/paging/navigation_arrow_right_disabled.png');\n}\n\n.gigya-login-providers-arrow-left.gigya-login-providers-arrow-marker-newArrows.gigya-login-providers-arrow-disabled div .gigya-login-providers-arrow-marker {\n    height: 14px;\n    width: 8px;\n    background-image: url('$scriptBase/paging/navigation_arrow_left_disabled.png');\n}\n\n.gigya-login-providers-arrow-left.gigya-login-providers-arrow-disabled,\n.gigya-login-providers-arrow-right.gigya-login-providers-arrow-disabled {\n    cursor: default;\n}\n\n.gigya-login-header {\n    display: block;\n    text-align: center;\n}\n\n.gigya-login-footer {\n    display: block;\n    clear: both;\n    height: 18px;\n    line-height: 18px;\n    overflow: hidden;\n    margin: 0 auto;\n    text-align: center;\n}\n\n\n.gigya-login-footer-terms {\n    line-height: normal;\n    cursor: pointer;\n    font-family: arial;\n    font-size: 11px;\n    color: #0086f1;\n    text-decoration: none;\n    font-weight: bold;\n}\n\n.gigya-login-providers {\n    width: 100%;\n    height: 100%;\n}\n\n.gigya-login-footer-social-by,\n.gigya-login-footer-social-by:hover,\n.gigya-login-footer-social-by:active {\n    text-decoration: none;\n    font-family: arial;\n    font-weight: bold;\n    font-size: 11px;\n    cursor: pointer;\n    color: #828282;\n}\n\n.gigya-login-footer-social-by img.gigya-logo {\n    width: 32px;\n    height: 9px;\n    border: none;\n}\n\n.gigya-login-footer-whatsthis {\n    width: 150px;\n    height: 50px;\n    background-color: #FFFFFF;\n    border: 1px solid #767676;\n    vertical-align: middle;\n    text-align: center;\n    visibility: hidden;\n    position: absolute;\n    padding: 10px;\n}\n\n.gigya-login-footer-whatsthis span {\n    line-height: normal;\n    font-family: arial;\n    font-size: 11px;\n    color: #262626;\n}\n\n.gigya-login-welcome-greeting {\n    line-height: normal;\n    font-family: arial;\n    font-size: 16px;\n    font-weight: bold;\n    color: #4C4C4C;\n    white-space: nowrap;\n    display: inline-block;\n}\n\n.gigya-login-welcome-bubble {\n    display: inline-block;\n    line-height: 16px;\n    margin-left: 5px;\n}\n\n.gigya-login-welcome-bubble-left,\n.gigya-login-welcome-bubble-right,\n.gigya-login-welcome-bubble-center {\n    display: inline-block;\n    height: 17px;\n    float: left;\n}\n\n.gigya-login-welcome-bubble-left {\n    background-image: url('$scriptBase/NotYou_Left.png');\n    width: 8px;\n}\n\n.gigya-login-welcome-bubble-right {\n    background-image: url('$scriptBase/NotYou_Right.png');\n    width: 4px;\n}\n\n.gigya-login-welcome-bubble-center {\n    background-image: url('$scriptBase/NotYou_Mid.png');\n    background-repeat: repeat-x;\n}\n\n.gigya-login-welcome-bubble-text {\n    cursor: pointer;\n    font-family: arial;\n    color: #0086f1;\n    font-size: 10px;\n    line-height: 17px;\n    font-weight: normal;\n}\n\n.gigya-login-welcome-signin-link {\n    white-space: nowrap;\n}\n\n.gigya-login-welcome-signin-link a:hover {\n    text-decoration: none;\n    color: #0086f1;\n}\n\n.gigya-login-footer-divider {\n    line-height: normal;\n    font-family: arial;\n    font-size: 11px;\n    color: #828282;\n    cursor: default;\n    padding: 0 5px;\n}\n\n.gigya-login-footer-edit-link {\n    line-height: normal;\n    cursor: pointer;\n    font-family: arial;\n    color: #0086f1;\n    text-decoration: none;\n    font-size: 11px;\n}\n\n.tabbing-button{\n    font-size: 0px;\n    border: none;\n    padding: 0;\n    background-color: transparent;\n    cursor: pointer;\n    display: inline-block;\n}\n.tabbing-button.gigya-provider-connected {\n    cursor: default;\n}\n.tabbing-button.gigya-provider-connected:focus {\n    outline: none;\n}\n"
                    }
                },
                getTemplates: function getTemplates() {},
                getCss: function getCss() {}
            },
            utUtils: {
                PluginTester: function PluginTester() {}
            },
            utils: {
                Collections: {
                    LastIndexOf: function LastIndexOf() {},
                    ForEach: function ForEach() {},
                    ForEachProp: function ForEachProp() {},
                    Some: function Some() {},
                    Every: function Every() {},
                    EveryProp: function EveryProp() {},
                    Map: function Map() {},
                    FirstIndex: function FirstIndex() {},
                    First: function First() {}
                },
                css: {
                    fixCss: function fixCss() {},
                    addCss: function addCss() {}
                },
                URL: {
                    addOrReplaceHashFragment: function addOrReplaceHashFragment() {},
                    addHashFragment: function addHashFragment() {},
                    removeHashFragment: function removeHashFragment() {},
                    getHashParamValue: function getHashParamValue() {}
                },
                DOM: {
                    replaceLinksWithHTMLElements: function replaceLinksWithHTMLElements() {},
                    setAttribute: function setAttribute() {},
                    getAttribute: function getAttribute() {}
                }
            },
            modal: {
                ModalDialog: function ModalDialog() {},
                dialogClasses: {
                    document_mobile: "gigya-mobile-modal-mode",
                    all_web: "gigya-screen-dialog",
                    all_mobile: "gigya-screen-dialog-mobile",
                    main: "gigya-screen-dialog-main",
                    caption: "gigya-screen-dialog-caption",
                    closeButton: "gigya-screen-dialog-close",
                    content: "gigya-screen-dialog-inner"
                },
                legacyDialogClasses: {
                    document_mobile: "gigya-mobile-modal-mode",
                    all_web: "gigya-screen-dialog",
                    all_mobile: "gigya-screen-dialog-mobile",
                    main: "gigya-screen-dialog-inner",
                    caption: "gigya-screen-dialog-caption",
                    closeButton: "gigya-screen-dialog-close",
                    content: "gigya-screen-dialog-inner"
                }
            },
            pollerActions: {
                InvalidPropertyAction: function InvalidPropertyAction() {},
                SizeChangeAction: function SizeChangeAction() {},
                ContainerSizeAction: function ContainerSizeAction() {},
                ViewportSizeAction: function ViewportSizeAction() {}
            },
            cssFlags: {
                "gigya.services.accounts.plugins.screenSet": {},
                "gigya.services.socialize.plugins.login_v2": {}
            },
            CloseReasons: {
                0: "pendingError",
                1: "missing",
                2: "finished",
                3: "canceled",
                4: "backButton",
                5: "canceledByParent",
                6: "skip",
                7: "error",
                8: "cancel",
                pendingError: 0,
                missing: 1,
                finished: 2,
                canceled: 3,
                backButton: 4,
                canceledByParent: 5,
                skip: 6,
                error: 7,
                cancel: 8
            },
            PluginStyle: {
                0: "_undefined",
                1: "none",
                2: "legacy",
                3: "modern",
                _undefined: 0,
                none: 1,
                legacy: 2,
                modern: 3
            },
            getPluginStyleClass: function getPluginStyleClass() {},
            AsyncManager: function AsyncManager() {},
            LoadDimmer: function LoadDimmer() {},
            ScreenSet: {
                consent: {
                    consentFieldName: "isConsentGranted",
                    namespace: "preferences",
                    postProcessForm: function postProcessForm() {}
                },
                SwitchScreen_CONSTS: {
                    selector: "[data-switch-screen]",
                    switchScreen: "data-switch-screen",
                    successScreen: "data-on-success-screen",
                    screenSetSkippedScreen: "data-on-screenset-skipped-screen"
                },
                SwitchScreenWidget: function SwitchScreenWidget() {},
                Form_CONSTS: {
                    originalSuccessScreen: "data-original-success-screen",
                    successScreen: "data-on-success-screen",
                    autoSkipScreen: "data-on-auto-skip-screen",
                    autoSkipFlag: "data-auto-skip",
                    screenSetSkippedScreen: "data-on-screenset-skipped-screen",
                    formErrorClass: "gigya-form-error",
                    defaultCheckedAttribute: "data-checked"
                },
                CUSTOM_VALIDATION_TIMEOUT_WARNING: 10000,
                BaseForm: function BaseForm() {},
                BaseFormWidget: function BaseFormWidget() {},
                BaseScreenWidget: function BaseScreenWidget() {},
                ServerStates: {
                    0: "NotStarted",
                    1: "InProgress",
                    2: "Done",
                    3: "Error",
                    NotStarted: 0,
                    InProgress: 1,
                    Done: 2,
                    Error: 3
                },
                BaseServerWidget: function BaseServerWidget() {},
                BaseUploadWidget_CONSTS: {
                    setDimentionsDelay: 500,
                    uploadCheckInterval: 500,
                    uploading: "data-upload-status",
                    uploadForm: "screenSetUploadForm"
                },
                BaseUploadWidget: function BaseUploadWidget() {},
                BaseWidget: function BaseWidget() {},
                warn: function warn() {},
                ErrorScopes: {
                    0: "bound-object-error",
                    1: "first-error",
                    2: "any-error",
                    3: "all-errors",
                    boundObjectError: 0,
                    firstError: 1,
                    anyError: 2,
                    allErrors: 3,
                    "bound-object-error": 0,
                    "first-error": 1,
                    "any-error": 2,
                    "all-errors": 3
                },
                ErrorDisplayElement_CONSTS: {
                    gigyaClasses: [
                        "gigya-error-display",
                        "gigya-error-msg"
                    ],
                    boundedTo: "data-bound-to",
                    errorCodes: "data-error-codes",
                    scope: "data-scope",
                    flags: "data-error-flags",
                    errorClassPrefix: "gigya-error-code-",
                    errorType: "gigya-error-type-"
                },
                ErrorDisplayElement: function ErrorDisplayElement() {},
                ErrorType: {
                    0: "client",
                    1: "custom",
                    2: "server",
                    client: 0,
                    custom: 1,
                    server: 2
                },
                PendingErrorAttributes: {
                    200009: {
                        name: "data-on-accounts-linked-screen",
                        nextScreen: function nextScreen() {},
                        requiresFinalize: true
                    },
                    200010: {
                        name: "data-on-existing-login-identifier-screen",
                        nextScreen: function nextScreen() {},
                        requiresFinalize: true
                    },
                    206001: {
                        name: "data-on-pending-registration-screen",
                        nextScreen: function nextScreen() {},
                        requiresFinalize: true
                    },
                    206002: {
                        name: "data-on-pending-verification-screen",
                        nextScreen: function nextScreen() {},
                        resetFinalizeNeededState: true
                    },
                    206003: {
                        name: "data-on-missing-loginid-screen",
                        nextScreen: function nextScreen() {}
                    },
                    206006: {
                        name: "data-on-pending-email-verification-code",
                        requiresFinalize: true,
                        nextScreen: function nextScreen() {}
                    },
                    403100: {
                        name: "data-on-pending-password-change-screen",
                        nextScreen: function nextScreen() {},
                        requiresFinalize: true
                    },
                    403101: {
                        name: "data-on-pending-tfa-verification-screen",
                        nextScreen: function nextScreen() {},
                        requiresFinalize: true
                    },
                    403102: {
                        name: "data-on-pending-tfa-registration-screen",
                        nextScreen: function nextScreen() {},
                        requiresFinalize: true
                    },
                    403110: {
                        name: "data-on-pending-recent-login-screen",
                        nextScreen: function nextScreen() {}
                    },
                    409003: {
                        name: "data-on-existing-login-identifier-screen",
                        nextScreen: function nextScreen() {},
                        requiresFinalize: true
                    }
                },
                notImplementerAbstract: function notImplementerAbstract() {},
                ConflictHandling: {
                    0: "fail",
                    1: "saveProfileAndFail",
                    fail: 0,
                    saveProfileAndFail: 1
                },
                LoginModes: {
                    connect: {
                        name: "connect"
                    },
                    standard: {
                        name: "standard",
                        getLoginProviders: function getLoginProviders() {},
                        filterParams: function filterParams() {}
                    },
                    reAuth: {
                        name: "reAuth",
                        getLoginProviders: function getLoginProviders() {},
                        filterParams: function filterParams() {}
                    },
                    link: {
                        name: "link",
                        getLoginProviders: function getLoginProviders() {},
                        filterParams: function filterParams() {}
                    }
                },
                Screen: function Screen() {},
                Screen_CONSTS: {
                    gigyaClass: "gigya-screen",
                    conditionalAttributePrefix: "gigya-conditional",
                    expressionAttributePrefix: "gigya-expression",
                    cssClass: "data-css-class",
                    dataVariantPercentage: "data-variant-percentage",
                    dataVariantGroup: "data-variant-group",
                    dataVariantOriginalScreen: "data-variant-original-screen",
                    dataVariantTestId: "data-variant-test-id"
                },
                ScreenOptions_CONSTS: {
                    accountsLinkedScreen: "data-on-accounts-linked-screen",
                    pendingTfaRegistrationScreen: "data-on-pending-tfa-registration-screen",
                    pendingTfaVerificationScreen: "data-on-pending-tfa-verification-screen",
                    pendingRegistrationScreen: "data-on-pending-registration-screen",
                    existingLoginIdentifierScreen: "data-on-existing-login-identifier-screen",
                    pendingVerificationScreen: "data-on-pending-verification-screen",
                    pendingCodeVerificationScreen: "data-on-pending-email-verification-code",
                    missingLoginIdScreen: "data-on-missing-loginid-screen",
                    pendingPasswordChangeScreen: "data-on-pending-password-change-screen",
                    pendingReAuthenticationScreen: "data-on-pending-recent-login-screen",
                    width: "data-width",
                    height: "data-height",
                    caption: "data-caption"
                },
                ScreenOptions: function ScreenOptions() {},
                ScreenSetData: function ScreenSetData() {},
                EndFlowScreens: {
                    _skip: 6,
                    _finish: 2,
                    _cancel: 8
                },
                ScreenSet_CONSTS: {
                    gigyaClass: "gigya-screen-set",
                    mobileDialogClass: "gigya-screen-dialog-mobile",
                    webDialogClass: "gigya-screen-dialog",
                    contentClass: "gigya-screen-dialog-content",
                    topElementClass: "gigya-screen-dialog-top",
                    calculateSizeClass: "gigya-calculate-size",
                    gigyaHidden: "gigya-hidden",
                    startScreen: "data-start-screen",
                    isResponsive: "data-responsive",
                    dialogStyle: "data-dialog-style",
                    dataActiveGroups: "data-active-groups"
                },
                ScreenSetPlugin: function ScreenSetPlugin() {},
                ElementRoles: {
                    0: "_undefined",
                    1: "template",
                    2: "instance",
                    _undefined: 0,
                    template: 1,
                    instance: 2
                },
                TemplateElement_CONSTS: {
                    elementId: "data-screenset-element-id",
                    elementFor: "data-screenset-element-for",
                    publishElementId: "data-screenset-element-id-publish",
                    templateForArray: "screenSetTemplateFor",
                    instanceOfArray: "screenSetInstanceOf",
                    screenSetRoles: "data-screenset-roles"
                },
                TemplateElement: function TemplateElement() {},
                TemplatesCache: function TemplatesCache() {},
                createDefaultTemplates: function createDefaultTemplates() {},
                isHidden: function isHidden() {},
                inIFrame: function inIFrame() {},
                isFieldInHiddenContainer: function isFieldInHiddenContainer() {},
                hasParentAttribute: function hasParentAttribute() {},
                firstPart: function firstPart() {},
                LastIndexOf: function LastIndexOf() {},
                ForEach: function ForEach() {},
                ForEachProp: function ForEachProp() {},
                Some: function Some() {},
                Every: function Every() {},
                EveryProp: function EveryProp() {},
                Map: function Map() {},
                DeepFreeze: function DeepFreeze() {},
                getElementsByHavingAttribute: function getElementsByHavingAttribute() {},
                getElementsByHavingAttributePrefix: function getElementsByHavingAttributePrefix() {},
                isElementContainAttributePrefix: function isElementContainAttributePrefix() {},
                getConditionalAttributeExpressions: function getConditionalAttributeExpressions() {},
                setupConditionalExpressionValue: function setupConditionalExpressionValue() {},
                isKeyCodeDisplayable: function isKeyCodeDisplayable() {},
                UnitMeasurementType: {
                    pixel: "px",
                    percentage: "%",
                    auto: ""
                },
                getUnitMeasurementType: function getUnitMeasurementType() {},
                getAttributesAsArray: function getAttributesAsArray() {},
                endsWith: function endsWith() {},
                hasIndex: function hasIndex() {},
                removeSerializedKeyLastEnumerator: function removeSerializedKeyLastEnumerator() {},
                removeSerializedKeyEdgeProperty: function removeSerializedKeyEdgeProperty() {},
                IETemplateElementPolyfill: function IETemplateElementPolyfill() {},
                replaceAttribute: function replaceAttribute() {},
                isDOMXSS: function isDOMXSS() {},
                delayedFocus: function delayedFocus() {},
                LinkAccountsForm_CONSTS: {
                    gigyaClass: "gigya-link-accounts-form"
                },
                LinkAccountsForm: function LinkAccountsForm() {},
                LoginForm_CONSTS: {
                    gigyaClass: "gigya-login-form"
                },
                LoginForm: function LoginForm() {},
                PasswordlessLoginForm_CONSTS: {
                    gigyaClass: "gigya-passwordless-login-form"
                },
                PasswordlessLoginForm: function PasswordlessLoginForm() {},
                PasswordlessRegisterForm_CONSTS: {
                    gigyaClass: "gigya-passwordless-register-form"
                },
                PasswordlessRegisterForm: function PasswordlessRegisterForm() {},
                AuthMethodsForm_CONSTS: {
                    gigyaClass: "gigya-auth-methods-form",
                    authMethodSelector: "[data-auth-method]",
                    authMethod: "data-auth-method"
                },
                AuthMethodsForm: function AuthMethodsForm() {},
                PasswordAuthMethodForm_CONSTS: {
                    gigyaClass: "gigya-password-auth-method-form",
                    authMethod: "password"
                },
                PasswordAuthMethodForm: function PasswordAuthMethodForm() {},
                PushAuthMethodForm_CONSTS: {
                    gigyaClass: "gigya-push-auth-method-form",
                    authMethod: "push"
                },
                PushAuthMethodForm: function PushAuthMethodForm() {},
                MagicLinkMethodForm_CONSTS: {
                    gigyaClass: "gigya-magic-link-auth-method-form",
                    authMethod: "magicLink"
                },
                MagicLinkAuthMethodForm: function MagicLinkAuthMethodForm() {},
                EmaiLCodeAuthMethodForm_CONSTS: {
                    gigyaClass: "gigya-email-code-auth-method-form",
                    authMethod: "emailOtp"
                },
                EmailCodeAuthMethodForm: function EmailCodeAuthMethodForm() {},
                CONSTS: {
                    selector: ".gigya-composite-control.gigya-login-user-enabled-tfa-widget",
                    toggleSelector: ".gigya-switch-control .gigya-switch-toggle",
                    widgetStateAttr: "data-widget-state-active",
                    rbaRuleAttr: "data-rba-rule",
                    errorDisplaySelector: ".gigya-error-display",
                    errorMessageSelector: ".gigya-error-msg",
                    errorActiveClass: "gigya-error-display-active",
                    errorMessageActiveClass: "gigya-error-msg-active",
                    bindingNameErrorAttrValue: "userEnabled2fa",
                    successMessageKey: "user_enable_2fa_success",
                    errorMessageKey: "user_enable_2fa_error",
                    switcherWrapperSelector: ".gigya-switch-control",
                    labelActiveState: ".gigya-user-enabled-tfa-label-enabled-state",
                    labelDisableState: ".gigya-user-enabled-tfa-label-disabled-state",
                    alertRole: "alert",
                    roleAttribute: "role"
                },
                NewsletterSignup_CONSTS: {
                    gigyaClass: "gigya-subscribe-with-email-form"
                },
                NewsletterSignupForm: function NewsletterSignupForm() {},
                ProfileForm_CONSTS: {
                    gigyaClass: "gigya-profile-form",
                    specialFields: {
                        username: true,
                        oldPassword: true,
                        password: true,
                        newPassword: true,
                        passwordRetype: true,
                        secretQuestion: true,
                        secretAnswer: true,
                        addLoginEmails: true,
                        removeLoginEmails: true,
                        phoneNumber: true
                    }
                },
                ProfileForm: function ProfileForm() {},
                ReauthenticationForm_CONSTS: {
                    gigyaClass: "gigya-reauthentication-form"
                },
                ReauthenticationForm: function ReauthenticationForm() {},
                RegisterForm_CONSTS: {
                    gigyaClass: "gigya-register-form"
                },
                RegisterForm: function RegisterForm() {},
                ProgressionForm_CONSTS: {
                    gigyaClass: "gigya-lite-account-progression-form"
                },
                ProgressionForm: function ProgressionForm() {},
                ResendVerificationCodeForm_CONSTS: {
                    gigyaClass: "gigya-resend-verification-code-form"
                },
                ResendVerificationCodeForm: function ResendVerificationCodeForm() {},
                ResetPasswordForm_CONSTS: {
                    gigyaClass: "gigya-reset-password-form"
                },
                ResetPasswordForm: function ResetPasswordForm() {},
                OrgRegisterForm_CONSTS: {
                    gigyaClass: "gigya-org-register-form"
                },
                OrgRegisterForm: function OrgRegisterForm() {},
                ButtonInput: function ButtonInput() {},
                CheckboxInput_CONSTS: {
                    errorClass: "gigya-terms-error",
                    validClass: "gigya-terms-valid",
                    dataValueInArray: "data-value-in-array"
                },
                CheckboxInput: function CheckboxInput() {},
                CommunicationCheckboxInput: function CommunicationCheckboxInput() {},
                EmailInput: function EmailInput() {},
                ValidityStates: {
                    0: "_undefined",
                    1: "valid",
                    2: "error",
                    3: "pending",
                    _undefined: 0,
                    valid: 1,
                    error: 2,
                    pending: 3
                },
                fieldsNameData: {
                    loginID: {
                        autoFillName: "username",
                        paramName: "loginID"
                    },
                    passwordRetype: {
                        autoFillName: "",
                        paramName: ""
                    }
                },
                WriteAccessModes: {
                    0: "clientModify",
                    1: "clientCreate",
                    clientModify: 0,
                    clientCreate: 1
                },
                FormInput_CONSTS: {
                    fieldName: "data-gigya-name",
                    displayName: "data-display-name",
                    captcha: "gigya-captcha",
                    allowEmpty: "data-allow-empty",
                    required: "data-required",
                    originalValue: "data-original-value",
                    serverValidation: "data-invalid-error-code",
                    showValidCheckmark: "show-valid-checkmark",
                    showCheckmarkClass: "gigya-show-checkmark",
                    validityBorderClass: "gigya-show-validity-border",
                    showValidityBorderAttr: "show-validity-border",
                    errorClass: "gigya-error",
                    warnClass: "gigya-warn",
                    validClass: "gigya-valid",
                    pendingClass: "gigya-pending",
                    emptyClass: "gigya-empty",
                    placeholderAttribute: "data-gigya-placeholder",
                    arrayRootAttribute: "data-array-root",
                    arrayKeyFieldAttribute: "data-array-key-field",
                    arrayKeyValueAttribute: "data-array-key-value",
                    identifierType: "data-identifier-type"
                },
                FormInputPriorities: {
                    0: "_start",
                    1: "Important",
                    2: "Normal",
                    3: "Fallback",
                    4: "_end",
                    _start: 0,
                    Important: 1,
                    Normal: 2,
                    Fallback: 3,
                    _end: 4
                },
                FieldType: {
                    hidden: "hidden"
                },
                FormInput: function FormInput() {},
                AddressInput: function AddressInput() {},
                LoginIdInput: function LoginIdInput() {},
                BasePasswordInput_CONSTS: {
                    showPasswordStrength: "show-password-strength"
                },
                BasePasswordInput: function BasePasswordInput() {},
                PasswordInput: function PasswordInput() {},
                NewPasswordInput: function NewPasswordInput() {},
                gigyaPhoneNumberInput: "gigya-phone-number-input",
                PhoneInput_Attributes: {
                    countryCodesSelection: "data-country-codes-selection",
                    countryCodes: "data-country-codes"
                },
                PhoneNumberInput: function PhoneNumberInput() {},
                RadioInput_CONSTS: {
                    wrapperSelector: ".gigya-composite-control-multi-choice",
                    displayNameExpressionAttr: "gigya-expression:data-display-name"
                },
                RadioInput: function RadioInput() {},
                RememeberInput: function RememeberInput() {},
                RetypePasswordInput: function RetypePasswordInput() {},
                ArrayManager_CONST: {
                    selector: ".gigya-composite-control-array-widget",
                    containerSelector: ".gigya-array-manager",
                    formElSelector: "input,select, fieldset, .gigya-array-manager",
                    addButtonSelector: "button.gigya-array-add-btn",
                    removeButtonSelector: "button.gigya-array-remove-btn",
                    itemWrapperClass: "gigya-array-template",
                    inputsWrapperClass: "inputs-wrapper",
                    buttonsWrapperClass: "buttons-wrapper",
                    templateItemAttr: "data-array-template-id",
                    arrayManagerRootAttr: "data-array-manager-root",
                    deleteDisabledClass: "disable-delete",
                    indexMatcher: {}
                },
                ArrayManagerItem: function ArrayManagerItem() {},
                ArrayManagerWidget: function ArrayManagerWidget() {},
                addIndex: function addIndex() {},
                Binding_CONSTS: {
                    selector: "*[data-binding]",
                    dataBindingAttribute: "data-binding"
                },
                BindingWidget: function BindingWidget() {},
                CaptchaWidget_CONSTS: {
                    selector: "div.gigya-captcha"
                },
                CaptchaWidget: function CaptchaWidget() {},
                Consent_CONSTS: {
                    selector: "div.gigya-consent",
                    titleAttr: "data-label",
                    approvedOnLabelAttr: "data-approved-on-label",
                    versionAttr: "data-version",
                    versionLabelAttr: "data-version-title-label",
                    localeLabelAttr: "data-locale-label"
                },
                ConsentWidget: function ConsentWidget() {},
                ContainerWidget_CONSTS: {
                    selector: "div.gigya-container",
                    activeClass: "gigya-container-enabled",
                    emptyFields: "data-empty-fields",
                    loginIdentities: "data-login-idenities",
                    conditionAttr: "data-condition",
                    onRenderAttr: "data-on-render"
                },
                ContainerWidget: function ContainerWidget() {},
                Image_CONSTS: {
                    selector: "div.gigya-image",
                    srcAttribute: "data-src",
                    widthAttribute: "data-width",
                    heightAttribute: "data-height",
                    backgroundSizeAttribute: "data-background-size"
                },
                ImageWidget: function ImageWidget() {},
                LoginAvailabilityWidget_CONSTS: {
                    selector: "div.gigya-loginID-availability",
                    boundTo: "data-bound-to"
                },
                LoginAvailabilityWidget: function LoginAvailabilityWidget() {},
                MyPhotoWidget_CONSTS: {
                    selector: "div.gigya-myPhoto"
                },
                MyPhotoWidget: function MyPhotoWidget() {},
                DisplayModes: {
                    policy: {
                        hasMinimumRequirements: true,
                        hasStrengthMeter: false,
                        getTemplate: function getTemplate() {}
                    },
                    meter: {
                        hasMinimumRequirements: false,
                        hasStrengthMeter: true,
                        getTemplate: function getTemplate() {}
                    },
                    combined: {
                        hasMinimumRequirements: true,
                        hasStrengthMeter: true,
                        getTemplate: function getTemplate() {}
                    }
                },
                BubbleOrientations: {
                    0: "right",
                    1: "left",
                    2: "up",
                    3: "down",
                    4: "none",
                    right: 0,
                    left: 1,
                    up: 2,
                    down: 3,
                    none: 4
                },
                PasswordStrengthWidget_CONSTS: {
                    selector: "div.gigya-password-strength",
                    bubbleClass: "gigya-password-strength-bubble",
                    mobileClass: "mobile-bubble",
                    desktopClass: "desktop-bubble",
                    displayMode: "data-display-mode",
                    bubble: "data-on-focus-bubble",
                    bubbleOrientation: "data-bubble-orientation"
                },
                PasswordStrengthWidget: function PasswordStrengthWidget() {},
                getPasswordStrengthData: function getPasswordStrengthData() {},
                isPasswordStrengthValid: function isPasswordStrengthValid() {},
                PhotoUploadWidget_CONSTS: {
                    selector: "div.gigya-photo-upload"
                },
                PhotoUploadWidget: function PhotoUploadWidget() {},
                ProfilePhotoWidget_CONSTS: {
                    selector: "div.gigya-profile-photo"
                },
                ProfilePhotoWidget: function ProfilePhotoWidget() {},
                RequiredDisplayWidget_CONSTS: {
                    selector: ".gigya-required-display",
                    boundTo: "data-bound-to",
                    alwaysVisible: "gigya-required-display-always-visible"
                },
                RequiredDisplayWidget: function RequiredDisplayWidget() {},
                SecretQuestionWidget_CONSTS: {
                    selector: "div.gigya-secret-question",
                    allowEmpty: "data-allow-empty"
                },
                SecretQuestionWidget: function SecretQuestionWidget() {},
                SocialLoginWidget_CONSTS: {
                    selector: "div.gigya-social-login"
                },
                SocialLoginWidget: function SocialLoginWidget() {},
                SubscriptionWidget_CONSTS: {
                    selector: "div.gigya-subscription",
                    subscriptionName: "name"
                },
                SubscriptionWidget: function SubscriptionWidget() {},
                PhoneNumberWidget_CONSTS: {
                    selector: ".gigya-phone-number-widget",
                    verifyButtonClass: "gigya-phone-verify-button",
                    resendButtonCLass: "gigya-phone-resend-button",
                    phonePreviewClass: "gigya-phone-number-preview",
                    useAsIdentifierAttr: "data-use-as-identifier",
                    codeInputClass: "gigya-phone-number-verification-code",
                    phoneInputNumberClass: "gigya-subscriber-phone-number-input",
                    countryCodeInputClass: "gigya-country-code-select",
                    verifiedStatusClass: "gigya-phone-verified-status",
                    resendBlockedLabelClass: "gigya-phone-resend-blocked",
                    linkDisabledClass: "gigya-disabled",
                    errorMessageClass: "gigya-error-msg",
                    placeholderTextAttribute: "data-gigya-placeholder",
                    gigyaHiddenClass: "gigya-hidden",
                    placeholderAttribute: "placeholder",
                    widgetStateAttribute: "data-widget-state",
                    requiredAttribute: "data-widget-required",
                    codeStateAttributes: "data-widget-code-state",
                    displayNameAttribute: "data-display-name",
                    translationKeyAttribute: "data-translation-key",
                    resendBlockDefaultLabelAttr: "data-resend-blocked-default-label",
                    phoneNumberFieldName: "phoneNumber",
                    resendCountTemplate: "%sec",
                    disableVerifyInSeconds: 10,
                    otpCodeLength: 6,
                    deps: [
                        function() {}
                    ]
                },
                PhoneNumberWidget: function PhoneNumberWidget() {},
                Channel_Status: {
                    noticed: "noticed",
                    OptIn: "OptIn",
                    optIn: "optIn",
                    OptOut: "OptOut",
                    optOut: "optOut"
                },
                CommunicationWidget_CONSTS: {
                    selector: "div.gigya-communication",
                    channel: "data-communication-channel",
                    topic: "data-communication-topic",
                    status: "data-communication-status",
                    subscriptionName: "name",
                    communicationsPrefix: "communications.",
                    subscriptionType: "data-subscription-type",
                    subscriptionTopic: "data-subscription-topic",
                    communicationChannel: "data-subscription-channel"
                },
                CommunicationWidget: function CommunicationWidget() {},
                TfaWidget_CONSTS: {
                    selector: "div.gigya-tfa"
                },
                TfaWidget: function TfaWidget() {},
                Translated_CONSTS: {
                    selector: "*[data-translation-key]",
                    translationKeyAttribute: "data-translation-key"
                },
                TranslatedWidget: function TranslatedWidget() {},
                CaptchaHandlers: {
                    FunCaptcha: function FunCaptcha() {},
                    Google: function Google() {}
                },
                CaptchaMode: {
                    visible: "visible",
                    invisible: "invisible"
                },
                BaseCaptchaHandler: function BaseCaptchaHandler() {},
                FunCaptchaHandler: function FunCaptchaHandler() {},
                GoogleCaptchaHandler: function GoogleCaptchaHandler() {},
                RegisterDeviceRequestParam: {
                    UserCode: "user_code"
                },
                RegisterDeviceFormParam: {
                    UserCode: "userCode"
                },
                DeviceCodeForm_CONSTS: {
                    gigyaClass: "gigya-device-code-form"
                },
                DeviceCodeForm: function DeviceCodeForm() {},
                PasskeyLogin_CONSTS: {
                    selector: ".gigya-composite-control-passkey-login-widget"
                },
                PasskeyLoginWidget: function PasskeyLoginWidget() {},
                PasskeyRegister_CONSTS: {
                    selector: ".gigya-composite-control-passkey-register-widget",
                    behaviorAttr: "data-passkey-behavior"
                },
                PasskeyRegisterMode: {
                    Connect: "connect",
                    Submit: "submit"
                },
                PasskeyRegisterWidget: function PasskeyRegisterWidget() {},
                PasskeyManager_CONSTS: {
                    selector: ".gigya-composite-control-passkey-manager-widget"
                },
                PasskeyManagerWidget: function PasskeyManagerWidget() {},
                TFAVerification_CONSTS: {
                    selector: ".gigya-composite-control-tfa-verification-widget"
                },
                TFAVerificationWidget: function TFAVerificationWidget() {},
                TFAPhoneList_CONSTS: {
                    selector: ".gigya-tfa-verification-method.tfa-phone-method"
                },
                TFAVerificationPhoneListWidget: function TFAVerificationPhoneListWidget() {},
                TFAPhoneItem_CONSTS: {
                    sendButtonSelector: ".gigya-tfa-verification-action-btn",
                    submitButtonSelector: ".gigya-input-submit",
                    expandedAttribute: "data-device-expanded",
                    errorMessageSelector: '.gigya-error-msg[data-bound-to="tfaVerificationWidget"]',
                    errorActiveMessageClass: "gigya-error-msg-active",
                    rememberDeviceSelector: ".gigya-remember-device-checkbox input",
                    codeInputSelector: ".gigya-code-input",
                    nameAttr: "name",
                    boundToAttr: "data-bound-to",
                    inputErrorSelector: ".gigya-input-error",
                    ariaLabelAttr: "aria-label",
                    deviceLabelSelector: ".gigya-tfa-verification-device-label",
                    titleAttr: "title",
                    symbolsPlaceholder: "%lastSymbols",
                    resendButtonSelector: ".gigya-tfa-resend-code",
                    selector: '.gigya-tfa-verification-method[data-tfa-method="phone"] .gigya-card',
                    sendSMSButtonSelector: '.gigya-tfa-verification-action-btn[data-method="sms"]',
                    sendVoiceButtonSelector: '.gigya-tfa-verification-action-btn[data-method="voice"]',
                    resendButtonSelectorSms: '.gigya-tfa-resend-code[data-method="sms"]',
                    resendButtonSelectorVoice: '.gigya-tfa-resend-code[data-method="voice"]',
                    countDownSelector: ".gigya-api-countdown",
                    gigyaHiddenClass: "gigya-hidden"
                },
                TFAVerificationPhoneItemWidget: function TFAVerificationPhoneItemWidget() {},
                TFATotpItem_CONSTS: {
                    sendButtonSelector: ".gigya-tfa-verification-action-btn",
                    submitButtonSelector: ".gigya-input-submit",
                    expandedAttribute: "data-device-expanded",
                    errorMessageSelector: '.gigya-error-msg[data-bound-to="tfaVerificationWidget"]',
                    errorActiveMessageClass: "gigya-error-msg-active",
                    rememberDeviceSelector: ".gigya-remember-device-checkbox input",
                    codeInputSelector: ".gigya-code-input",
                    nameAttr: "name",
                    boundToAttr: "data-bound-to",
                    inputErrorSelector: ".gigya-input-error",
                    ariaLabelAttr: "aria-label",
                    deviceLabelSelector: ".gigya-tfa-verification-device-label",
                    titleAttr: "title",
                    selector: '.gigya-tfa-verification-method[data-tfa-method="totp"] .gigya-card',
                    namePlaceholder: "%name"
                },
                TFAVerificationTotpItemWidget: function TFAVerificationTotpItemWidget() {},
                TFATotpList_CONSTS: {
                    selector: '.gigya-tfa-verification-method[data-tfa-method="totp"]',
                    deps: [
                        function() {}
                    ]
                },
                TFAVerificationTotpListWidget: function TFAVerificationTotpListWidget() {},
                TFAVerificationBackupCodesWidget_CONSTS: {
                    selector: '.gigya-tfa-verification-method[data-tfa-method="backup-codes"]',
                    expandButtonSelector: ".gigya-tfa-verification-action-btn",
                    submitButtonSelector: ".gigya-input-submit",
                    codeInputSelector: ".gigya-code-input",
                    cardItemSelector: ".gigya-tfa-verification-device",
                    cardBodySelector: ".gigya-card-body"
                },
                TFAVerificationBackupCodesWidget: function TFAVerificationBackupCodesWidget() {},
                PasskeyCard_CONSTS: {
                    selector: "li.gigya-passkey-card",
                    deleteButtonSelector: ".gigya-remove-passkey-icon",
                    newCardClass: "gigya-card-new",
                    deps: [
                        function() {}
                    ]
                },
                PasskeyCardWidget: function PasskeyCardWidget() {},
                TfaManagementWidget: function TfaManagementWidget() {},
                TfaPhoneManagement_CONSTS: {
                    selector: ' .gigya-tfa-management-method[data-tfa-method="phone"]'
                },
                TfaManagementPhoneListWidget: function TfaManagementPhoneListWidget() {},
                TfaManagementPhoneItemWidget: function TfaManagementPhoneItemWidget() {},
                TfaEmailManagement_CONSTS: {
                    selector: '.gigya-tfa-management-method[data-tfa-method="email"]'
                },
                TfaManagementEmailListWidget: function TfaManagementEmailListWidget() {},
                TfaManagementEmailItemWidget: function TfaManagementEmailItemWidget() {},
                TfaRegistrationWidget: function TfaRegistrationWidget() {},
                TfaRegistrationPhoneWidget: function TfaRegistrationPhoneWidget() {},
                TFABackupCodes_CONSTS: {
                    selector: ".gigya-composite-control-tfa-backup-codes-widget",
                    backupCodesListEl: ".gigya-tfa-backup-codes-content",
                    backupCodesListContainerEl: ".gigya-backup-codes-list-container",
                    printButtonEl: ".gigya-tfa-print-button",
                    downloadButtonEl: ".gigya-tfa-download-button",
                    generateBackupCodesButtonEl: ".gigya-generate-code-button",
                    downloadHeader: "Backup Codes",
                    downloadFileTitle: "backup-codes.txt",
                    downloadTextContent: "Download Backup Codes",
                    backupCodeListItemClass: "gigya-backup-code-item"
                },
                TFABackupCodesWidget: function TFABackupCodesWidget() {},
                CustomForm_CONSTS: {
                    gigyaClass: "gigya-custom-form"
                },
                CustomForm: function CustomForm() {},
                TfaForm_CONSTS: {
                    gigyaClass: "gigya-tfa-form"
                },
                TfaForm: function TfaForm() {},
                OrganizationContextConsts: {
                    selector: ".gigya-organization-context-widget",
                    dropdownSelector: ".gigya-organization-context-dropdown",
                    buttonSelector: ".gigya-organization-context-control-link-button",
                    errorDisplayClass: ".gigya-error-display",
                    errorMessageClass: ".gigya-error-msg",
                    errorActiveClass: "gigya-error-display-active",
                    disabledClass: "gigya-disabled",
                    noDataAvailableMessage: "no_data_available"
                },
                OrganizationContextWidget: function OrganizationContextWidget() {}
            },
            login_v2: {
                ButtonStyles: {
                    fulllogocolored: {
                        ratio: 2.6,
                        base: "FullLogoColored/",
                        ext: ".png",
                        noConnected: true,
                        minSize: 15,
                        maxSize: 65
                    },
                    fulllogo: {
                        ratio: 2.6,
                        base: "FullLogo/",
                        ext: ".png",
                        noConnected: true,
                        minSize: 15,
                        maxSize: 65
                    },
                    signinwith: {
                        ratio: 7.05,
                        base: "SignInWith/",
                        ext: ".png",
                        noLastLogin: true,
                        noConnected: true,
                        minSize: 20,
                        maxSize: 60
                    },
                    standard: {
                        ratio: 1,
                        base: "",
                        ext: ".png",
                        minSize: 15,
                        maxSize: 65
                    }
                },
                ContainerBase: function ContainerBase() {},
                FooterContainer: function FooterContainer() {},
                LoginContainer: function LoginContainer() {},
                NavigationDirection: {
                    0: "Next",
                    1: "Prev",
                    Next: 0,
                    Prev: 1
                },
                LastLoginIndication: {
                    0: "_undefined",
                    1: "none",
                    2: "border",
                    3: "welcome",
                    _undefined: 0,
                    none: 1,
                    border: 2,
                    welcome: 3
                },
                PluginMode: {
                    0: "_undefined",
                    1: "Login",
                    2: "AddConnection",
                    3: "LinkAccount",
                    _undefined: 0,
                    Login: 1,
                    AddConnection: 2,
                    LinkAccount: 3
                },
                RenderingMode: {
                    0: "Unknown",
                    1: "Login",
                    2: "Welcome",
                    3: "Footer",
                    Unknown: 0,
                    Login: 1,
                    Welcome: 2,
                    Footer: 3
                },
                LoginPlugin: function LoginPlugin() {},
                PagingButtonStyles: {
                    arrows: {
                        getStyleClass: function getStyleClass() {},
                        getStyleName: function getStyleName() {}
                    },
                    newArrows: {
                        getStyleClass: function getStyleClass() {},
                        getStyleName: function getStyleName() {}
                    },
                    floating: {
                        getStyleClass: function getStyleClass() {},
                        getStyleName: function getStyleName() {}
                    },
                    auto: {
                        getStyleClass: function getStyleClass() {},
                        getStyleName: function getStyleName() {}
                    }
                },
                Utils: function Utils() {},
                WelcomeContainer: function WelcomeContainer() {}
            }
        },
        UI: {
            registerPlugin: function registerPlugin() {},
            attachPlugin: function attachPlugin() {}
        },
        api: {
            VersionSelector: function VersionSelector() {}
        },
        saml: {},
        CDN_HOSTS: {
            http: [
                "cdn.gigya.com",
                "cdn1.gigya.com",
                "cdn2.gigya.com",
                "cdn3.gigya.com"
            ],
            https: [
                "cdns.gigya.com",
                "cdns1.gigya.com",
                "cdns2.gigya.com",
                "cdns3.gigya.com"
            ]
        },
        getCdnResource: function getCdnResource() {},
        getImgCdnResource: function getImgCdnResource() {},
        MessagingMethod: {
            0: "LocalStorageListener",
            1: "PostMessage",
            2: "Flash",
            LocalStorageListener: 0,
            PostMessage: 1,
            Flash: 2
        },
        checkCompleteRegistration: function checkCompleteRegistration() {},
        checkGroupInvitation: function checkGroupInvitation() {},
        getGigyaSettings: function getGigyaSettings() {},
        setGigyaSettings: function setGigyaSettings() {},
        delGigyaSettings: function delGigyaSettings() {},
        handleSpecialFields: function handleSpecialFields() {},
        convertIdentitiesArrayToObject: function convertIdentitiesArrayToObject() {},
        addUserInfoToEvent: function addUserInfoToEvent() {},
        sendEmailNative: function sendEmailNative() {},
        getApi: function getApi() {},
        BaseApi: function BaseApi() {},
        __pluginsCoreLoaded: false,
        UiApi: function UiApi() {},
        BaseObject: function BaseObject() {},
        EventWrapper: function EventWrapper() {},
        DeviceTypes: {
            0: "_undefined",
            1: "desktop",
            2: "mobile",
            3: "auto",
            _undefined: 0,
            desktop: 1,
            mobile: 2,
            auto: 3
        },
        bookmarkSize: {
            facebook: {
                w: 640,
                h: 370
            },
            twitter: {
                w: 880,
                h: 585
            },
            messenger: {
                w: 710,
                h: 905
            },
            linkedin: {
                w: 560,
                h: 500
            },
            yahoobookmarks: {
                w: 840,
                h: 975
            },
            digg: {
                w: 1010,
                h: 1045
            },
            googlebookmarks: {
                w: 710,
                h: 905
            },
            mixi: {
                w: 640,
                h: 470
            },
            googleplus: {
                w: 496,
                h: 420
            }
        },
        socializeAddEventHandlers: function socializeAddEventHandlers() {},
        accountsAddEventHandlers: function accountsAddEventHandlers() {},
        isLoggedIn: function isLoggedIn() {},
        waitForService: function waitForService() {},
        postBookmark: function postBookmark() {},
        refreshUI: function refreshUI() {},
        trackReferrals: function trackReferrals() {},
        updateRefUID: function updateRefUID() {},
        setGigRefUidCookie: function setGigRefUidCookie() {},
        hideUI: function hideUI() {},
        submitUserForm: function submitUserForm() {},
        getProviderShareCounts: function getProviderShareCounts() {},
        openDelegateAdminHandler: function openDelegateAdminHandler() {},
        passkeyService: {
            eventHandlers: {}
        },
        runJsUnitTests: function runJsUnitTests() {},
        loadBasePlugin: function loadBasePlugin() {},
        bootstrap: {
            parseScriptRetries: 0,
            init: function init() {},
            warnOnUnsupportedBrowser: function warnOnUnsupportedBrowser() {},
            loadABTesting: function loadABTesting() {},
            startDebugIfNeeded: function startDebugIfNeeded() {},
            loadOmniture: function loadOmniture() {},
            parseLang: function parseLang() {},
            parseScriptElement: function parseScriptElement() {},
            initApiAdapter: function initApiAdapter() {},
            autoLogin: function autoLogin() {},
            checkReturnFromRedirect: function checkReturnFromRedirect() {},
            injectExternalSdks: function injectExternalSdks() {}
        },
        sso: {},
        logoutBehaviour: {
            logoutBeforeServerResponse: true,
            alwaysSendLogoutToServer: false
        },
        arApiList: [
            {
                methodName: "socialize.login",
                settings: {
                    oauth: true,
                    preprocessor: function preprocessor() {}
                },
                schema: "ctag|temporary_account|authFlow|connectWithoutLogin|provider|redirectMethod|redirect_uri|pendingRegistration|lang|regSource|extraPermissions|sessionExpiration|forceAuthentication|includeiRank|includeAllIdentities|extraFields|enabledProviders|disabledProviders|signIDs|openIDUsername|openIDURL|openIDProviderLogo|openIDProviderName|finalizeRegistration|include|actionAttributes|profileAttributes|googlePlayAppID|bp_channel_url|loginIfExists|includeUserInfo|redirectURL|authCodeOnly|enablePopupLocation|invite|regToken|loginMode|apiDomain|conflictHandling|forcePermissions|signKeys|dataCenter|forceAuthentication",
                requiresSession: false,
                adapterSettings: {
                    clearSessionCondition: function clearSessionCondition() {},
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "socialize.addConnection",
                settings: {
                    oauth: true
                },
                schema: "ctag|temporary_account|authFlow|connectWithoutLogin|provider|redirectMethod|redirect_uri|pendingRegistration|lang|regSource|extraPermissions|sessionExpiration|forceAuthentication|includeiRank|includeAllIdentities|extraFields|enabledProviders|disabledProviders|signIDs|openIDUsername|openIDURL|openIDProviderLogo|openIDProviderName|finalizeRegistration|include|actionAttributes|profileAttributes|googlePlayAppID|bp_channel_url|loginIfExists|includeUserInfo|redirectURL|authCodeOnly|enablePopupLocation|invite|regToken|loginMode|apiDomain|conflictHandling|forcePermissions|signKeys|dataCenter|forceAuthentication",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "socialize.requestPermissions",
                settings: {
                    oauth: true,
                    defaultParams: {
                        forcePermissions: true
                    }
                },
                schema: "ctag|temporary_account|authFlow|connectWithoutLogin|provider|redirectMethod|redirect_uri|pendingRegistration|lang|regSource|extraPermissions|sessionExpiration|forceAuthentication|includeiRank|includeAllIdentities|extraFields|enabledProviders|disabledProviders|signIDs|openIDUsername|openIDURL|openIDProviderLogo|openIDProviderName|finalizeRegistration|include|actionAttributes|profileAttributes|googlePlayAppID|bp_channel_url|loginIfExists|includeUserInfo|redirectURL|authCodeOnly|enablePopupLocation|invite|regToken|loginMode|apiDomain|conflictHandling|forcePermissions|signKeys|dataCenter|forceAuthentication",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.socialLogin",
                settings: {
                    oauth: true,
                    preprocessor: function preprocessor() {}
                },
                schema: "ctag|temporary_account|authFlow|connectWithoutLogin|provider|redirectMethod|redirect_uri|pendingRegistration|lang|regSource|extraPermissions|sessionExpiration|forceAuthentication|includeiRank|includeAllIdentities|extraFields|enabledProviders|disabledProviders|signIDs|openIDUsername|openIDURL|openIDProviderLogo|openIDProviderName|finalizeRegistration|include|actionAttributes|profileAttributes|googlePlayAppID|bp_channel_url|loginIfExists|includeUserInfo|redirectURL|authCodeOnly|enablePopupLocation|invite|regToken|loginMode|apiDomain|conflictHandling|forcePermissions|signKeys|dataCenter|forceAuthentication",
                requiresSession: false,
                adapterSettings: {
                    clearSessionCondition: function clearSessionCondition() {},
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "showDebugUI",
                settings: {
                    allowPopup: true,
                    defaultParams: {},
                    defaultPopupParams: {},
                    requiredParams: ""
                },
                jsName: "socialize.plugins.debug"
            },
            {
                methodName: "showMyPhotoUI",
                settings: {
                    useBasePlugin: true,
                    defaultParams: {},
                    defaultPopupParams: {},
                    requiredParams: ""
                },
                jsName: "accounts.plugins.profilePhoto",
                namespace: "accounts",
                className: "profilePhoto.MyPhotoPlugin",
                instanceMethods: []
            },
            {
                methodName: "runJsUnitTests",
                settings: {
                    useBasePlugin: true,
                    defaultParams: {},
                    defaultPopupParams: {},
                    requiredParams: ""
                },
                jsName: "_.plugins.jsUtRunner",
                namespace: "_",
                className: "JsUtRunner.Jasmine.JasmineUtRunnerPlugin",
                instanceMethods: []
            },
            {
                methodName: "loadBasePlugin",
                settings: {
                    useBasePlugin: true,
                    defaultParams: {},
                    defaultPopupParams: {},
                    requiredParams: ""
                },
                jsName: "_.plugins.mock",
                namespace: "_",
                className: "Mock.MockPlugin",
                instanceMethods: []
            },
            {
                methodName: "showLoginUI_v1",
                settings: {
                    allowPopup: true,
                    defaultParams: {
                        width: 120,
                        height: 110
                    },
                    defaultPopupParams: {
                        width: 280,
                        height: 220
                    },
                    requiredParams: ""
                },
                jsName: "socialize.plugins.login"
            },
            {
                methodName: "showLoginUI_v2",
                settings: {
                    useBasePlugin: true,
                    defaultParams: {},
                    defaultPopupParams: {},
                    requiredParams: ""
                },
                jsName: "socialize.plugins.login_v2",
                namespace: "socialize",
                className: "login_v2.LoginPlugin",
                instanceMethods: [],
                pluginType: function pluginType() {},
                injectionInfo: {
                    methodName: "showLoginUI_v2",
                    jsName: "gigya.services.socialize.plugins.login_v2",
                    namespace: "socialize",
                    className: "login_v2.LoginPlugin",
                    pluginType: function pluginType() {},
                    constructor: function constructor() {},
                    addInstanceMethodsAliases: function addInstanceMethodsAliases() {},
                    createInstanceMethodAlias: function createInstanceMethodAlias() {},
                    getPublicMethod: function getPublicMethod() {},
                    preprocessRequest: function preprocessRequest() {},
                    run: function run() {},
                    startUI: function startUI() {},
                    startPlugin: function startPlugin() {},
                    loadPluginJS: function loadPluginJS() {},
                    wasPluginJSLoaded: function wasPluginJSLoaded() {},
                    getPluginType: function getPluginType() {},
                    setSourceData: function setSourceData() {},
                    validateRequiredParams: function validateRequiredParams() {},
                    setDefaultParams: function setDefaultParams() {},
                    prepareParameters: function prepareParameters() {},
                    legacyStartUI: function legacyStartUI() {},
                    prepareContainer: function prepareContainer() {},
                    addAlias: function addAlias() {},
                    name: "login_v2"
                }
            },
            {
                methodName: "showLoginUI",
                _versions: [
                    {
                        versionName: "1",
                        method: function method() {}
                    },
                    {
                        versionName: "2",
                        method: function method() {}
                    }
                ],
                _defaultVersionIndex: 0
            },
            {
                methodName: "showAddConnectionsUI_v1",
                settings: {
                    allowPopup: true,
                    defaultParams: {
                        width: 110,
                        height: 65
                    },
                    defaultPopupParams: {
                        width: 250,
                        height: 200
                    },
                    requiredParams: ""
                },
                jsName: "socialize.plugins.login"
            },
            {
                methodName: "showAddConnectionsUI_v2",
                settings: {
                    useBasePlugin: true,
                    defaultParams: {},
                    defaultPopupParams: {},
                    requiredParams: ""
                },
                jsName: "socialize.plugins.login_v2",
                namespace: "socialize",
                className: "login_v2.LoginPlugin",
                instanceMethods: []
            },
            {
                methodName: "showAddConnectionsUI",
                _versions: [
                    {
                        versionName: "1",
                        method: function method() {}
                    },
                    {
                        versionName: "2",
                        method: function method() {}
                    }
                ],
                _defaultVersionIndex: 0
            },
            {
                methodName: "showEditConnectionsUI",
                settings: {
                    useBasePlugin: true,
                    defaultParams: {},
                    defaultPopupParams: {},
                    requiredParams: ""
                },
                jsName: "socialize.plugins.edit",
                namespace: "socialize",
                className: "editConnections.EditConnectionPlugin",
                instanceMethods: []
            },
            {
                methodName: "showSimpleShareUI",
                settings: {
                    allowPopup: true,
                    dontLoadPluginsCore: true,
                    waitForAPIQueue: true,
                    defaultParams: {
                        width: 280,
                        height: 175
                    },
                    defaultPopupParams: {},
                    requiredParams: "userAction"
                },
                jsName: "socialize.plugins.simpleShare"
            },
            {
                methodName: "showShareMobileUI",
                settings: {
                    allowPopup: true,
                    defaultParams: {},
                    defaultPopupParams: {},
                    requiredParams: "userAction"
                },
                jsName: "socialize.plugins.shareMobile"
            },
            {
                methodName: "showTfaUI",
                settings: {
                    defaultParams: {
                        width: 325
                    },
                    defaultPopupParams: {},
                    requiredParams: ""
                },
                jsName: "accounts.plugins.tfa"
            },
            {
                methodName: "initHostedPage",
                settings: {
                    useBasePlugin: true,
                    defaultParams: {},
                    defaultPopupParams: {},
                    requiredParams: ""
                },
                jsName: "accounts.plugins.pages",
                namespace: "accounts",
                className: "Pages.PagesPlugin",
                instanceMethods: []
            },
            {
                methodName: "showScreenSet",
                settings: {
                    useBasePlugin: true,
                    defaultParams: {},
                    defaultPopupParams: {},
                    requiredParams: ""
                },
                jsName: "accounts.plugins.screenSet",
                namespace: "accounts",
                className: "ScreenSet.ScreenSetPlugin",
                instanceMethods: [
                    "hideScreenSet",
                    "switchScreen"
                ],
                pluginType: function pluginType() {},
                injectionInfo: {
                    name: "screenSet",
                    namespace: "accounts",
                    methodName: "showScreenSet",
                    jsName: "gigya.services.accounts.plugins.screenSet",
                    publicMethods: {
                        hideScreenSet: {
                            instanceMethod: "cancel",
                            argNames: []
                        },
                        switchScreen: {
                            instanceMethod: "switchScreen",
                            argNames: [
                                "screen"
                            ]
                        }
                    }
                }
            },
            {
                methodName: "socialize.getAvailableProviders",
                settings: {},
                schema: "enabledProviders|disabledProviders|requiredCapabilities",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "socialize.notifyLogin",
                settings: {},
                schema: "siteUID|UIDTimestamp|UIDSig|UIDNonce|provider|authToken|tokenSecret|regSource|tokenExpiration|sessionHandle|sessionHandleExpiration|userInfo|providerSessions|sessionExpiration|authCode|includeAllIdentitiesincludeiRank|group|settings|extraFields|signIDs|newUser|actionAttributes|profileAttributes|bp_channel_url|lang|signKeys",
                requiresSession: false,
                adapterSettings: {
                    clearSession: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "socialize.convertAction",
                settings: {},
                schema: "userAction|[providerCapability=actions]UserAction|provider",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "socialize.deleteAccount",
                settings: {},
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "socialize.delUserSettings",
                settings: {},
                schema: "group|settings",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "socialize.getContacts",
                settings: {},
                schema: "enabledProviders|disabledProviders",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "socialize.getRawData",
                settings: {},
                schema: "provider|UID|fields|dataFormat|path",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "socialize.getSessionInfo",
                settings: {},
                schema: "provider|paddingMode|encrypt|signIDs|encryptAll",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "socialize.getUserInfo",
                settings: {},
                schema: "enabledProviders|disabledProviders|signIDs|includeiRank|includeAllIdentities|extraFields|group|settings|includeOpenidUID|include",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "socialize.checkin",
                settings: {},
                schema: "enabledProviders|disabledProviders|placeID|comment|latitude|longitude|actionAttributes|profileAttributes",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "socialize.logout",
                settings: {
                    preprocessor: function preprocessor() {},
                    disableCache: true
                },
                schema: "signIDs|samlContext|sustainLogoutURLs",
                requiresSession: true,
                adapterSettings: {
                    requiresSession: function requiresSession() {},
                    forceHttps: true
                }
            },
            {
                methodName: "socialize.notifyRegistration",
                settings: {},
                schema: "siteUID|UIDTimestamp|UIDSig",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "socialize.removeConnection",
                settings: {},
                schema: "provider|lastIdentityHandling|removeLoginID",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "socialize.setUID",
                settings: {},
                schema: "siteUID|UIDTimestamp|UIDSig",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "socialize.unlinkAccounts",
                settings: {},
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "socialize.facebookGraphOperation",
                settings: {},
                schema: "graphPath|graphParams|authRequired|method|authType",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "socialize.notifySSOLogin",
                settings: {},
                schema: "bp_channel_url",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "gcs.getUserData",
                settings: {},
                schema: "type|fields",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "gcs.setUserData",
                settings: {},
                schema: "data|type|updateBehavior",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "gcs.search",
                settings: {},
                schema: "expTime|querySig|query",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "gcs.getSchema",
                settings: {},
                schema: "schemaType",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.b2b.registerOrganization",
                settings: {},
                schema: "organization|requester",
                requiresSession: false,
                adapterSettings: {
                    forcePost: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.b2b.getOrganizationSchema",
                settings: {
                    preprocessor: function preprocessor() {}
                },
                schema: "",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.login",
                settings: {
                    riskAssessment: true
                },
                schema: "loginID|password|sessionExpiration|targetEnv|regToken|include|actionAttributes|profileAttributes|includeUserInfo|includeDynamicSchema|bp_channel_url|captchaToken|blackBoxToken|captchaType|captchaText|loginMode|signKeys|lang|riskContext|aToken",
                requiresSession: false,
                adapterSettings: {
                    clearSessionCondition: function clearSessionCondition() {},
                    forcePost: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.linkAccounts",
                settings: {},
                schema: "loginID|password|sessionExpiration|targetEnv|include|regToken|includeUserInfo|bp_channel_url|signKeys",
                requiresSession: false,
                adapterSettings: {
                    forcePost: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.notifySocialLogin",
                settings: {},
                schema: "loginMode|providerSessions|sessionExpiration",
                requiresSession: true,
                adapterSettings: {
                    forcePost: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                },
                altSessionParams: "providerSessions"
            },
            {
                methodName: "accounts.initRegistration",
                settings: {
                    preprocessor: function preprocessor() {}
                },
                schema: "sdk|isLite|dataCenter",
                requiresSession: false,
                adapterSettings: {
                    clearSession: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.initProgression",
                settings: {
                    preprocessor: function preprocessor() {}
                },
                schema: "sdk|regToken",
                requiresSession: false,
                adapterSettings: {
                    clearSession: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.register",
                settings: {
                    riskAssessment: true
                },
                schema: "username|email|password|UID|regToken|siteUID|secretQuestion|secretAnswer|regSource|profile|preferences|displayedPreferences|data|captchaText|captchaType|captchaToken|blackBoxToken|lang|hashedPassword|pwHashAlgorithm|skipVerification|finalizeRegistration|targetEnv|sessionExpiration|include|actionAttributes|profileAttributes|includeUserInfo|bp_channel_url|signKeys|subscriptions|communications|addresses",
                requiresSession: false,
                adapterSettings: {
                    forcePost: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.finalizeRegistration",
                settings: {},
                schema: "regToken|targetEnv|include|includeUserInfo|bp_channel_url|allowAccountsLinking|signKeys|subscriptions",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.captchaImage",
                settings: {},
                schema: "regToken",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.importProfilePhoto",
                settings: {},
                schema: "regToken|URL|publish",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.setProfilePhoto",
                settings: {},
                schema: "regToken|publish|photoBytes",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.resetPassword",
                settings: {
                    riskAssessment: true
                },
                schema: "lang|loginID|passwordResetToken|secretAnswer|securityFields|newPassword|email|captchaType|captchaToken|blackBoxToken",
                requiresSession: false,
                adapterSettings: {
                    forcePost: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.removeProfilePhoto",
                settings: {},
                schema: "regToken",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.isAvailableLoginID",
                settings: {},
                schema: "loginID",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.address.suggestions.get",
                settings: {},
                schema: "address|country|apiKey|suggestionreply|longitude|latitude",
                adapterSettings: {
                    forcePost: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.resendVerificationCode",
                settings: {},
                schema: "regToken|email",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.getCaptcha",
                settings: {},
                schema: "",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.getPolicies",
                settings: {
                    preprocessor: function preprocessor() {}
                },
                schema: "sections",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.getSchema",
                settings: {
                    preprocessor: function preprocessor() {}
                },
                schema: "sections|schemaType",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.getSiteConsentDetails",
                settings: {
                    preprocessor: function preprocessor() {}
                },
                schema: "",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.getLegalStatements",
                settings: {
                    preprocessor: function preprocessor() {}
                },
                schema: "consentId|lang",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.verifyLogin",
                settings: {},
                schema: "include|extraProfileFields|targetEnv",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.getAccountInfo",
                settings: {},
                schema: "include|extraProfileFields|regToken|lang|includeCommunications",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                },
                altSessionParams: "regToken"
            },
            {
                methodName: "accounts.setAccountInfo",
                settings: {
                    riskAssessment: true
                },
                schema: "profile|preferences|displayedPreferences|data|regToken|verifyToken|oldPassword|password|newPassword|addLoginEmails|removeLoginEmails|username|secretQuestion|secretAnswer|requirePasswordChange|conflictHandling|tfaStatus|rba|subscriptions|communications|preferences|lang|captchaToken|blackBoxToken|captchaType|customIdentifiers|addresses",
                requiresSession: true,
                adapterSettings: {
                    forcePost: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                },
                altSessionParams: "regToken"
            },
            {
                methodName: "accounts.logout",
                settings: {
                    preprocessor: function preprocessor() {},
                    disableCache: true
                },
                schema: "signIDs|samlContext|sustainLogoutURLs",
                requiresSession: true,
                adapterSettings: {
                    requiresSession: function requiresSession() {},
                    forceHttps: true
                }
            },
            {
                methodName: "accounts.search",
                settings: {},
                schema: "expTime|querySig|query",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.getScreenSets",
                settings: {
                    preprocessor: function preprocessor() {}
                },
                schema: "screenSetIDs|include|lang|screenSetVersion",
                requiresSession: false,
                adapterSettings: {
                    useHttpStatusCodes: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.sso.login",
                settings: {
                    oauth: true
                },
                schema: "redirectURL|state|authFlow|context|useChildContext",
                requiresSession: false,
                adapterSettings: {
                    oauthMode: 1,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.getConflictingAccount",
                settings: {},
                schema: "regToken|loginID",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.resetSitePreferences",
                settings: {
                    postprocessor: function postprocessor() {}
                },
                schema: "",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.getJWT",
                settings: {},
                schema: "fields|expiration|audience",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.tfa.getProviders",
                settings: {},
                schema: "regToken",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                },
                altSessionParams: "regToken"
            },
            {
                methodName: "accounts.tfa.initTFA",
                settings: {},
                schema: "provider|mode|regToken",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.tfa.finalizeTFA",
                settings: {},
                schema: "gigyaAssertion|providerAssertion|tempDevice|regToken",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                },
                altSessionParams: "regToken"
            },
            {
                methodName: "accounts.tfa.deactivateProvider",
                settings: {},
                schema: "provider",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.tfa.unregisterDevice",
                settings: {},
                schema: "allDevices",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.tfa.backupcodes.get",
                settings: {},
                schema: "gigyaAssertion",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.tfa.backupcodes.create",
                settings: {},
                schema: "gigyaAssertion",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.tfa.backupcodes.verify",
                settings: {},
                schema: "gigyaAssertion|code|regToken",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.tfa.phone.getRegisteredPhoneNumbers",
                settings: {
                    preprocessor: function preprocessor() {}
                },
                schema: "gigyaAssertion",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.tfa.phone.removePhone",
                settings: {},
                schema: "gigyaAssertion|phoneId",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.tfa.phone.sendVerificationCode",
                settings: {},
                schema: "gigyaAssertion|lang|phoneID|phone|method|regToken",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.tfa.phone.completeVerification",
                settings: {},
                schema: "gigyaAssertion|phvToken|code|regToken",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.tfa.email.getEmails",
                settings: {
                    preprocessor: function preprocessor() {}
                },
                schema: "gigyaAssertion",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.tfa.email.sendVerificationCode",
                settings: {},
                schema: "emailID|gigyaAssertion|lang|regToken",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.tfa.email.completeVerification",
                settings: {},
                schema: "gigyaAssertion|phvToken|code|regToken",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.tfa.totp.register",
                settings: {},
                schema: "gigyaAssertion|includeSecret",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.tfa.totp.verify",
                settings: {},
                schema: "gigyaAssertion|sctToken|code|name|regToken",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.tfa.totp.getRegistered",
                settings: {
                    preprocessor: function preprocessor() {}
                },
                schema: "gigyaAssertion",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.tfa.totp.remove",
                settings: {},
                schema: "gigyaAssertion|id",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.tfa.push.isVerified",
                settings: {},
                schema: "gigyaAssertion|regToken",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.tfa.push.sendVerification",
                settings: {},
                schema: "gigyaAssertion|regToken",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.b2b.delegatedAdminLogin",
                settings: {},
                schema: "orgId|lang",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.b2b.getOrganizationInfo",
                settings: {},
                schema: "orgId|bpid",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.b2b.setOrganizationContext",
                settings: {},
                schema: "bpid",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.b2b.getOrganizationContext",
                settings: {},
                schema: "",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.b2b.auth.getAssets",
                settings: {},
                schema: "appId|bpid|orgId|includePolicies|environments",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.groups.getSchema",
                settings: {},
                schema: "model",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.groups.registerGroup",
                settings: {},
                schema: "model|groupId|groupData",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.groups.setGroupInfo",
                settings: {},
                schema: "model|groupId|groupData",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.groups.getGroupInfo",
                settings: {},
                schema: "model|groupId",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.groups.deleteGroup",
                settings: {},
                schema: "model|groupId",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.groups.setGroupMemberInfo",
                settings: {},
                schema: "model|groupId|uid|relationshipData|permissions",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.groups.getGroupMemberInfo",
                settings: {},
                schema: "model|groupId|uid|include",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.groups.removeMember",
                settings: {},
                schema: "model|groupId|uid",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.groups.getAllMemberGroups",
                settings: {},
                schema: "uid|flatNestedFields",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.groups.searchGroupMembers",
                settings: {},
                schema: "model|groupId|limit|start",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.groups.createInvitation",
                settings: {},
                schema: "model|groupId|isOneTime",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.groups.invitationConfirm",
                settings: {},
                schema: "invitationId",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.groups.finalizeInvitation",
                settings: {},
                schema: "token",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.otp.sendCode",
                settings: {
                    riskAssessment: true,
                    preprocessor: function preprocessor() {}
                },
                schema: "regToken|phoneNumber|email|lang|captchaToken|captchaType|blackBoxToken|dataCenter|phvToken",
                requiresSession: false,
                adapterSettings: {
                    forcePost: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.otp.login",
                settings: {},
                schema: "vToken|code|targetEnv|includeUserInfo|include|regSource|sessionExpiration",
                requiresSession: false,
                adapterSettings: {
                    forcePost: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.otp.update",
                settings: {},
                schema: "vToken|code|regToken",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.auth.guest",
                settings: {},
                schema: "identifier|identifierType",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.auth.otp.verify",
                settings: {},
                schema: "vToken|code",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.auth.otp.authenticate",
                settings: {},
                schema: "vToken|code",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.auth.getMethods",
                settings: {},
                schema: "identifier|aToken",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.auth.push.sendVerification",
                settings: {},
                schema: "identifier",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.auth.push.isVerified",
                settings: {},
                schema: "vToken",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.auth.magiclink.email.send",
                settings: {},
                schema: "email|context|lang",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.auth.magiclink.email.login",
                settings: {},
                schema: "vToken|code|targetEnv|includeUserInfo|include|regSource|sessionExpiration",
                requiresSession: false,
                adapterSettings: {
                    forcePost: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.auth.otp.email.sendCode",
                settings: {},
                schema: "email|lang",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.auth.otp.email.login",
                settings: {},
                schema: "code|vToken|targetEnv|includeUserInfo|include|regSource|sessionExpiration",
                requiresSession: false,
                adapterSettings: {
                    forcePost: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.identifier.createToken",
                settings: {},
                schema: "identifier|identifierType",
                requiresSession: false,
                adapterSettings: {
                    forcePost: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.identity.authorize",
                settings: {},
                schema: "authorization_details|grant_type",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.auth.fido.initRegisterCredentials",
                settings: {
                    preprocessor: function preprocessor() {}
                },
                schema: "regToken|aToken",
                requiresSession: true,
                adapterSettings: {
                    clearSessionCondition: function clearSessionCondition() {},
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                },
                altSessionParams: "regToken|aToken"
            },
            {
                methodName: "accounts.auth.fido.registerCredentials",
                settings: {
                    preprocessor: function preprocessor() {}
                },
                schema: "token|attestation|deviceName|regToken",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.auth.fido.getAssertionOptions",
                settings: {},
                schema: "",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.auth.fido.verifyAssertion",
                settings: {},
                schema: "token|authenticatorAssertion",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "accounts.auth.fido.getCredentials",
                settings: {
                    preprocessor: function preprocessor() {}
                },
                schema: "regToken",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                },
                altSessionParams: "regToken"
            },
            {
                methodName: "accounts.auth.fido.removeCredential",
                settings: {
                    preprocessor: function preprocessor() {}
                },
                schema: "credentialId|regToken",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                },
                altSessionParams: "regToken"
            },
            {
                methodName: "accounts.session.verify",
                settings: {},
                schema: "",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "oauth.register",
                settings: {},
                schema: "lang|regSource|cid|context|sessionExpiration|userInfo|verifyToken|authMode",
                requiresSession: false,
                adapterSettings: {
                    forcePost: true,
                    useBearerToken: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "oauth.connect",
                settings: {
                    preprocessor: function preprocessor() {}
                },
                schema: "regToken",
                requiresSession: true,
                adapterSettings: {
                    forcePost: true,
                    useBearerToken: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                },
                altSessionParams: "regToken"
            },
            {
                methodName: "oauth.disconnect",
                settings: {
                    preprocessor: function preprocessor() {}
                },
                schema: "regToken",
                requiresSession: true,
                adapterSettings: {
                    forcePost: true,
                    useBearerToken: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                },
                altSessionParams: "regToken"
            },
            {
                methodName: "oauth.authorize",
                settings: {},
                schema: "response_type|authMode",
                requiresSession: false,
                adapterSettings: {
                    forcePost: true,
                    useBearerToken: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "oauth.token",
                settings: {},
                schema: "grant_type|code|targetEnv|sessionExpiration",
                requiresSession: false,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "auth.token.authenticationContext",
                settings: {},
                schema: "regToken",
                requiresSession: true,
                adapterSettings: {
                    forcePost: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                },
                altSessionParams: "regToken"
            },
            {
                methodName: "accounts.auth.login",
                settings: {},
                schema: "accessToken|sessionExpiration|targetEnv|include|includeUserInfo|loginMode|lang",
                requiresSession: false,
                adapterSettings: {
                    clearSessionCondition: function clearSessionCondition() {},
                    forcePost: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "ds.store",
                settings: {},
                schema: "type|data|oid|updateBehavior",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "ds.get",
                settings: {},
                schema: "type|data|oid|fields",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "ds.search",
                settings: {},
                schema: "expTime|querySig|query",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "ds.getSchema",
                settings: {},
                schema: "",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "ds.delete",
                settings: {},
                schema: "type|oid|fields",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "ids.getAccountInfo",
                settings: {},
                schema: "include|extraProfileFields",
                requiresSession: true,
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "ids.setAccountInfo",
                settings: {},
                schema: "profile|preferences|data|oldPassword|password|newPassword|addLoginEmails|removeLoginEmails|username|secretQuestion|secretAnswer|requirePasswordChange|lang",
                requiresSession: false,
                adapterSettings: {
                    forcePost: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "ids.search",
                settings: {},
                schema: "expTime|querySig|query",
                adapterSettings: {
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "fidm.oidc.op.deviceContinue",
                settings: {
                    restUrl: "oidc/op/v1.0/{APIKey}/device_continue"
                },
                schema: "user_code",
                requiresSession: true,
                adapterSettings: {
                    namespace: "fidm",
                    forcePost: true,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            },
            {
                methodName: "fidm.oidc.op.getContextData",
                settings: {
                    restUrl: "oidc/op/v1.0/{APIKey}/contextData"
                },
                schema: "oidc_context",
                requiresSession: false,
                adapterSettings: {
                    namespace: "fidm",
                    forcePost: false,
                    forceHttps: true,
                    requiresSession: function requiresSession() {}
                }
            }
        ],
        defaultApiSchema: "ctag|APIKey|cid|oauth_token|source|sourceData|usePost|refUID|fb_UID|fb_at|fb_exp|environment|noAuth|httpStatusCodes",
        defaultOauthSchema: "ctag|temporary_account|authFlow|connectWithoutLogin|provider|redirectMethod|redirect_uri|pendingRegistration|lang|regSource|extraPermissions|sessionExpiration|forceAuthentication|includeiRank|includeAllIdentities|extraFields|enabledProviders|disabledProviders|signIDs|openIDUsername|openIDURL|openIDProviderLogo|openIDProviderName|finalizeRegistration|include|actionAttributes|profileAttributes|googlePlayAppID|bp_channel_url|loginIfExists|includeUserInfo|redirectURL|authCodeOnly|enablePopupLocation|invite|regToken|loginMode|apiDomain|conflictHandling|forcePermissions|signKeys|dataCenter|forceAuthentication",
        postBookmarkSchema: "provider|URL|url|title|description|target|cid|APIKey|shortURLs|source|sourceData|providerKey|thumbnailURL|tags|userAction|[providerCapability=actions]UserAction|actionAttributes|facebookDialogType",
        loginMethods: {
            "socialize.login": 1,
            "socialize.addConnection": 1,
            "socialize.notifyLogin": 1,
            "socialize.linkAccounts": 1,
            "accounts.login": 1,
            "accounts.otp.login": 1,
            "accounts.auth.magiclink.email.login": 1,
            "accounts.auth.otp.email.login": 1,
            "accounts.auth.login": 1,
            "accounts.socialLogin": 1,
            "accounts.linkAccounts": 1,
            "accounts.register": 1,
            "accounts.finalizeRegistration": 1,
            "accounts.notifySocialLogin": 1
        },
        logoutMethods: {
            "socialize.logout": 1,
            "accounts.logout": 1,
            "socialize.deleteAccount": 1,
            "socialize.unlinkAccounts": 1
        },
        ServerApi: function ServerApi() {},
        ServerApiRequest: function ServerApiRequest() {},
        WindowProvider: function WindowProvider() {},
        config: {
            flags: {
                alignSocialWidget: true,
                alwaysCheckCookieSave: true,
                dispatchLoginEventWhenHandlerAdded: false,
                enforceAuthFlowRedirectForSocial: false,
                fixPhoneTFATranslations: true,
                forceErrorReport: false,
                forceWebSdkBootstrap: false,
                hideSSOFrame: false,
                loadSsoFrameOnlyOnce: false,
                magicLinkDispatchLoginWhenAdded: true,
                newFormLinkInstanceElement: false,
                oidcUseLocalStorage: false,
                reBootstrapOnLogin: false,
                sanitizeEvaluatedValue: false,
                setCookieSameSiteLax: false,
                setCookieSameSiteLaxSession: true,
                setGroupApiDomainAfterLogin: false,
                setProviderFromResponse: true,
                skipSameScreenCheckOnSwitch: true,
                supportConsentFallbackLang: true,
                updateAccountInfoAsync: true,
                useDecodeURIComponent: false,
                useExtendedPhoneNumberRegex: false,
                useGigyaJsBaseDomain: false,
                useMigratedGoogleAuth: false,
                useNewOidcContextFlow: false,
                useSessionVerify: false,
                verifyLoginOnlyOnce: true,
                wcagContrastFix: false,
                enableLinkAccountsV2Fallback: false,
                forcePostForSensitiveParams: true,
                generateNewCodeWcagCompliance: true,
                getOnlyVisibleField: true,
                ignoreInterruptionsInOidcPassiveLogin: false,
                initBackgroundWorker: false,
                newLinkInstanceElement: true,
                overrideAllChildContext: false,
                passLanguageParamsToReauthScreen: false,
                redirectOnMissingOidcContext: false,
                removeAkamaiEdgeControlHeader: false,
                revokeSSOGltOnOverride: true,
                sendLangForEmailOTP: true,
                setCookieSameSiteLaxLowPriority: true,
                setCookieSameSiteLaxSocial: true,
                stopSendingReports: false,
                supportWorkflow: false,
                useHttpStatusCode: true,
                useLocalStorageListener: false,
                useViewportPollerAction: false,
                sendPendingEmailVerificationCodeOnce: false
            },
            plugins: {
                connectWithoutLoginBehavior: "alwaysLogin",
                defaultRegScreenSet: "Default-RegistrationLogin",
                defaultMobileRegScreenSet: "Default-RegistrationLogin",
                sessionExpiration: 0,
                rememberSessionExpiration: 0,
                apiDomain: "eu1.gigya.com",
                workflow: {
                    path: "workflow/resources/js/entryPoint.js"
                }
            },
            api: {
                customAPIDomainPrefix: "gigya",
                gmidTicketExpiration: 3600,
                baseDomains: [
                    "local.pyzlo.in"
                ]
            },
            hostedPagesDomain: "my.gigya-ext.com",
            toggles: {
                linkAccountV2: "off",
                httpStatusCodes: "off"
            },
            consent: {
                hasLicense: true,
                isMigrated: true
            }
        },
        apiAdapter: {
            _storage: {},
            name: "Web",
            _reBootstrapCount: 0,
            _ssoService: null
        },
        Poller: function Poller() {},
        getApiDomain: function getApiDomain() {}
    },
    setAccountResidency: function setAccountResidency() {},
    setGroupContext: function setGroupContext() {},
    setSSOToken: function setSSOToken() {},
    syncGroupGltExp: function syncGroupGltExp() {},
    hasSession: function hasSession() {},
    sso: {
        getContext: function getContext() {},
        login: function login() {},
        "continue": function _continue() {}
    },
    services: {
        proxy: {
            utils: {
                getParentUrl: function getParentUrl() {},
                getBodyElement: function getBodyElement() {},
                validateOrigin: function validateOrigin() {},
                createIframe: function createIframe() {},
                generateId: function generateId() {},
                getAllClassMethodsNames: function getAllClassMethodsNames() {}
            },
            isSignalRequest: function isSignalRequest() {},
            ProxyListener: function ProxyListener() {},
            ServiceProxy: function ServiceProxy() {}
        },
        TokenKeys: {
            GMID: "gig_gmid",
            UCID: "gig_ucid",
            GMID_TICKET: "gmidTicket",
            GMID_TICKET_EXPIRATION_TIME: "gmidTicketExpiration"
        },
        ApiService: function ApiService() {},
        GroupApiDomainService: function GroupApiDomainService() {},
        RequestType: {
            GET: "GET",
            POST: "POST"
        },
        AccountService: function AccountService() {},
        accountService: {},
        SiteDataService: function SiteDataService() {},
        siteData: {},
        socialize: {
            getAllProviders: function getAllProviders() {},
            replaceProviderAliases: function replaceProviderAliases() {},
            getProvidersByName: function getProvidersByName() {},
            _getProviderByName: function _getProviderByName() {},
            hideProvidersByName: function hideProvidersByName() {},
            _getProviderByID: function _getProviderByID() {},
            getProvidersForRequiredCapabilities: function getProvidersForRequiredCapabilities() {},
            updateRefUID: function updateRefUID() {},
            hideUI: function hideUI() {},
            getProviderShareCounts: function getProviderShareCounts() {},
            addEventHandlers: function addEventHandlers() {},
            isLoggedIn: function isLoggedIn() {},
            waitForService: function waitForService() {},
            postBookmark: function postBookmark() {},
            refreshUI: function refreshUI() {},
            trackReferrals: function trackReferrals() {},
            User: function User() {},
            Friend: function Friend() {},
            Identity: function Identity() {},
            Contact: function Contact() {},
            person: function person() {},
            personwithuid: function personwithuid() {},
            UserAction: function UserAction() {},
            Collection: function Collection() {},
            login: function login() {},
            addConnection: function addConnection() {},
            requestPermissions: function requestPermissions() {},
            showDebugUI: function showDebugUI() {},
            showLoginUI_v1: function showLoginUI_v1() {},
            showLoginUI_v2: function showLoginUI_v2() {},
            showLoginUI: function showLoginUI() {},
            showAddConnectionsUI_v1: function showAddConnectionsUI_v1() {},
            showAddConnectionsUI_v2: function showAddConnectionsUI_v2() {},
            showAddConnectionsUI: function showAddConnectionsUI() {},
            showEditConnectionsUI: function showEditConnectionsUI() {},
            showSimpleShareUI: function showSimpleShareUI() {},
            showShareMobileUI: function showShareMobileUI() {},
            getAvailableProviders: function getAvailableProviders() {},
            notifyLogin: function notifyLogin() {},
            convertAction: function convertAction() {},
            deleteAccount: function deleteAccount() {},
            delUserSettings: function delUserSettings() {},
            getContacts: function getContacts() {},
            getRawData: function getRawData() {},
            getSessionInfo: function getSessionInfo() {},
            getUserInfo: function getUserInfo() {},
            checkin: function checkin() {},
            logout: function logout() {},
            notifyRegistration: function notifyRegistration() {},
            removeConnection: function removeConnection() {},
            setUID: function setUID() {},
            unlinkAccounts: function unlinkAccounts() {},
            facebookGraphOperation: function facebookGraphOperation() {},
            notifySSOLogin: function notifySSOLogin() {},
            connect: function connect() {},
            disconnect: function disconnect() {},
            linkAccounts: function linkAccounts() {},
            showConnectUI: function showConnectUI() {},
            GrayOut: function GrayOut() {},
            getStyleString: function getStyleString() {},
            _fixGrayPosition: function _fixGrayPosition() {},
            _fixGraySize: function _fixGraySize() {},
            _createJSPopup: function _createJSPopup() {},
            _createJSPopup2: function _createJSPopup2() {},
            _parseRID: function _parseRID() {},
            _closeComponent: function _closeComponent() {},
            plugins: {
                login: {
                    instances: [],
                    showLoginUI_v2: function showLoginUI_v2() {},
                    showAddConnectionsUI_v2: function showAddConnectionsUI_v2() {}
                }
            }
        },
        gcs: {
            submitUserForm: function submitUserForm() {},
            getUserData: function getUserData() {},
            setUserData: function setUserData() {},
            search: function search() {},
            getSchema: function getSchema() {}
        },
        accounts: {
            addEventHandlers: function addEventHandlers() {},
            b2b: {
                openDelegatedAdminLogin: function openDelegatedAdminLogin() {},
                registerOrganization: function registerOrganization() {},
                getOrganizationSchema: function getOrganizationSchema() {},
                delegatedAdminLogin: function delegatedAdminLogin() {},
                getOrganizationInfo: function getOrganizationInfo() {},
                setOrganizationContext: function setOrganizationContext() {},
                getOrganizationContext: function getOrganizationContext() {},
                auth: {
                    getAssets: function getAssets() {}
                }
            },
            setSSOToken: function setSSOToken() {},
            auth: {
                fido: {
                    register: function register() {},
                    login: function login() {},
                    initRegisterCredentials: function initRegisterCredentials() {},
                    registerCredentials: function registerCredentials() {},
                    getAssertionOptions: function getAssertionOptions() {},
                    verifyAssertion: function verifyAssertion() {},
                    getCredentials: function getCredentials() {},
                    removeCredential: function removeCredential() {}
                },
                getPreferredLoginMethod: function getPreferredLoginMethod() {},
                setPreferredLoginMethod: function setPreferredLoginMethod() {},
                guest: function guest() {},
                otp: {
                    verify: function verify() {},
                    authenticate: function authenticate() {},
                    email: {
                        sendCode: function sendCode() {},
                        login: function login() {}
                    }
                },
                getMethods: function getMethods() {},
                push: {
                    sendVerification: function sendVerification() {},
                    isVerified: function isVerified() {}
                },
                magiclink: {
                    email: {
                        send: function send() {},
                        login: function login() {}
                    }
                },
                login: function login() {}
            },
            socialLogin: function socialLogin() {},
            showMyPhotoUI: function showMyPhotoUI() {},
            showTfaUI: function showTfaUI() {},
            initHostedPage: function initHostedPage() {},
            showScreenSet: function showScreenSet() {},
            hideScreenSet: function hideScreenSet() {},
            switchScreen: function switchScreen() {},
            login: function login() {},
            linkAccounts: function linkAccounts() {},
            notifySocialLogin: function notifySocialLogin() {},
            initRegistration: function initRegistration() {},
            initProgression: function initProgression() {},
            register: function register() {},
            finalizeRegistration: function finalizeRegistration() {},
            captchaImage: function captchaImage() {},
            importProfilePhoto: function importProfilePhoto() {},
            setProfilePhoto: function setProfilePhoto() {},
            resetPassword: function resetPassword() {},
            removeProfilePhoto: function removeProfilePhoto() {},
            isAvailableLoginID: function isAvailableLoginID() {},
            address: {
                suggestions: {
                    get: function get() {}
                }
            },
            resendVerificationCode: function resendVerificationCode() {},
            getCaptcha: function getCaptcha() {},
            getPolicies: function getPolicies() {},
            getSchema: function getSchema() {},
            getSiteConsentDetails: function getSiteConsentDetails() {},
            getLegalStatements: function getLegalStatements() {},
            verifyLogin: function verifyLogin() {},
            getAccountInfo: function getAccountInfo() {},
            setAccountInfo: function setAccountInfo() {},
            logout: function logout() {},
            search: function search() {},
            getScreenSets: function getScreenSets() {},
            sso: {
                login: function login() {}
            },
            getConflictingAccount: function getConflictingAccount() {},
            resetSitePreferences: function resetSitePreferences() {},
            getJWT: function getJWT() {},
            tfa: {
                getProviders: function getProviders() {},
                initTFA: function initTFA() {},
                finalizeTFA: function finalizeTFA() {},
                deactivateProvider: function deactivateProvider() {},
                unregisterDevice: function unregisterDevice() {},
                backupcodes: {
                    get: function get() {},
                    create: function create() {},
                    verify: function verify() {}
                },
                phone: {
                    getRegisteredPhoneNumbers: function getRegisteredPhoneNumbers() {},
                    removePhone: function removePhone() {},
                    sendVerificationCode: function sendVerificationCode() {},
                    completeVerification: function completeVerification() {}
                },
                email: {
                    getEmails: function getEmails() {},
                    sendVerificationCode: function sendVerificationCode() {},
                    completeVerification: function completeVerification() {}
                },
                totp: {
                    register: function register() {},
                    verify: function verify() {},
                    getRegistered: function getRegistered() {},
                    remove: function remove() {}
                },
                push: {
                    isVerified: function isVerified() {},
                    sendVerification: function sendVerification() {}
                }
            },
            groups: {
                getSchema: function getSchema() {},
                registerGroup: function registerGroup() {},
                setGroupInfo: function setGroupInfo() {},
                getGroupInfo: function getGroupInfo() {},
                deleteGroup: function deleteGroup() {},
                setGroupMemberInfo: function setGroupMemberInfo() {},
                getGroupMemberInfo: function getGroupMemberInfo() {},
                removeMember: function removeMember() {},
                getAllMemberGroups: function getAllMemberGroups() {},
                searchGroupMembers: function searchGroupMembers() {},
                createInvitation: function createInvitation() {},
                invitationConfirm: function invitationConfirm() {},
                finalizeInvitation: function finalizeInvitation() {}
            },
            otp: {
                sendCode: function sendCode() {},
                login: function login() {},
                update: function update() {}
            },
            identifier: {
                createToken: function createToken() {}
            },
            identity: {
                authorize: function authorize() {}
            },
            session: {
                verify: function verify() {}
            }
        }
    },
    Request: function Request() {},
    XhrRequest: function XhrRequest() {},
    Promise: function Promise() {},
    debug: function debug() {},
    gm: {},
    comments: {},
    gscounters: {},
    getLoginToken: function getLoginToken() {},
    updateConfiguration: function updateConfiguration() {},
    utils: {
        toggles: {},
        array: {
            indexOf: function indexOf() {},
            clone: function clone() {},
            removeByValue: function removeByValue() {},
            removeByProperty: function removeByProperty() {},
            getArrayFromString: function getArrayFromString() {},
            intersect: function intersect() {},
            lastIndexOf: function lastIndexOf() {},
            forEach: function forEach() {},
            forEachProp: function forEachProp() {},
            some: function some() {},
            every: function every() {},
            everyProp: function everyProp() {},
            map: function map() {},
            firstIndex: function firstIndex() {},
            first: function first() {},
            getAllEnumValues: function getAllEnumValues() {},
            getUniqueValues: function getUniqueValues() {},
            includes: function includes() {},
            containsOnly: function containsOnly() {}
        },
        browser: {
            isModern: function isModern() {},
            getVersion: function getVersion() {}
        },
        cookie: {
            _cookieStore: {}
        },
        date: {
            now: function now() {}
        },
        delegate: {
            create: function create() {}
        },
        DOM: {
            _popupContainers: [],
            _pseudoContainers: [],
            getNextZIndex: function getNextZIndex() {},
            getGigyaScriptElement: function getGigyaScriptElement() {},
            dispatch: function dispatch() {},
            addButtonSubmitListener: function addButtonSubmitListener() {},
            addEventListener: function addEventListener() {},
            addActivationHandler: function addActivationHandler() {},
            removeEventListener: function removeEventListener() {},
            disableDefaultEventHandling: function disableDefaultEventHandling() {},
            addDialogBackListener: function addDialogBackListener() {},
            _removeDialogBackListener: function _removeDialogBackListener() {},
            prependToBody: function prependToBody() {},
            appendToBody: function appendToBody() {},
            removeElement: function removeElement() {},
            isChildOf: function isChildOf() {},
            isVisible: function isVisible() {},
            getCenteredDivID: function getCenteredDivID() {},
            createElementWithAttributes: function createElementWithAttributes() {},
            createTopLevelDiv: function createTopLevelDiv() {},
            hideByID: function hideByID() {},
            showByID: function showByID() {},
            clearByID: function clearByID() {},
            getHTMLSize: function getHTMLSize() {},
            getElementsByClass: function getElementsByClass() {},
            getElementsByAttribute: function getElementsByAttribute() {},
            getElementPosition: function getElementPosition() {},
            addClassToElement: function addClassToElement() {},
            removeClassFromElement: function removeClassFromElement() {},
            getClassNames: function getClassNames() {},
            isElementClass: function isElementClass() {},
            cancelEvent: function cancelEvent() {},
            createElement: function createElement() {},
            setSize: function setSize() {},
            createHiddenIframe: function createHiddenIframe() {},
            attributeEncode: function attributeEncode() {},
            manipulateAttributes: function manipulateAttributes() {},
            textNodesUnder: function textNodesUnder() {},
            isHTMLBooleanAttribute: function isHTMLBooleanAttribute() {},
            isBelongToGigyaFieldset: function isBelongToGigyaFieldset() {},
            getClosestElement: function getClosestElement() {},
            createElementFromTemplate: function createElementFromTemplate() {},
            isParentHasClass: function isParentHasClass() {},
            enableSafeCopy: function enableSafeCopy() {}
        },
        functions: {
            callAsync: function callAsync() {},
            callFunction: function callFunction() {},
            invokeOnPageLoad: function invokeOnPageLoad() {},
            createAlias: function createAlias() {},
            debounce: function debounce() {},
            addSrcToIFrameIfNeeded: function addSrcToIFrameIfNeeded() {}
        },
        gltexp: {
            isValid: function isValid() {},
            getMax: function getMax() {},
            getMillis: function getMillis() {}
        },
        HTTP: {
            redirect: function redirect() {}
        },
        JSON: {
            serialize: function serialize() {},
            deserialize: function deserialize() {},
            parse: function parse() {}
        },
        keyboard: {
            keyCodes: {
                8: "Backspace",
                13: "Enter",
                27: "Escape"
            },
            onHotKeyClicked: function onHotKeyClicked() {}
        },
        keyValue: {
            serialize: function serialize() {},
            deserialize: function deserialize() {}
        },
        localStorage: {
            AbstractLocalStorageAdapter: function AbstractLocalStorageAdapter() {},
            AbstractAsyncLocalStorageAdapter: function AbstractAsyncLocalStorageAdapter() {},
            CookieStorageAdapter: function CookieStorageAdapter() {},
            MemoryStorageAdapter: function MemoryStorageAdapter() {},
            adapters: [
                function() {},
                function() {},
                function() {},
                function() {},
                function() {}
            ],
            instances: {},
            initializeAdapter: function initializeAdapter() {},
            waitForService: function waitForService() {},
            getItem: function getItem() {},
            setItem: function setItem() {},
            removeItem: function removeItem() {},
            setObject: function setObject() {},
            getObject: function getObject() {}
        },
        mouse: {
            getPosition: function getPosition() {}
        },
        object: {
            removeUndefined: function removeUndefined() {},
            expressionHelper: function expressionHelper() {},
            getPropertyBySerializedName: function getPropertyBySerializedName() {},
            setPropertyBySerializedName: function setPropertyBySerializedName() {},
            add: function add() {},
            getHash: function getHash() {},
            getMurmurHash: function getMurmurHash() {},
            clone: function clone() {},
            merge: function merge() {},
            unflatten: function unflatten() {},
            flatten: function flatten() {},
            extractProperties: function extractProperties() {},
            extractProperty: function extractProperty() {},
            parseToObject: function parseToObject() {},
            removePropertiesPrefix: function removePropertiesPrefix() {},
            addPrefixToProperties: function addPrefixToProperties() {},
            normalizeObjectKeysToLowerCase: function normalizeObjectKeysToLowerCase() {},
            decodeObjectKeys: function decodeObjectKeys() {},
            cloneParamsForPlugin: function cloneParamsForPlugin() {}
        },
        queue: {
            _servicesStatus: function _servicesStatus() {},
            isActive: function isActive() {},
            release: function release() {},
            hold: function hold() {},
            waitFor: function waitFor() {},
            queueForExecution: function queueForExecution() {}
        },
        sanitize: {
            sanitizeHTML: function sanitizeHTML() {},
            sanitizeAttribute: function sanitizeAttribute() {}
        },
        script: {
            isLoaded: function isLoaded() {},
            load: function load() {},
            ResourceTypes: {
                0: "script",
                1: "image",
                2: "iframe",
                script: 0,
                image: 1,
                iframe: 2
            },
            triggerResource: function triggerResource() {},
            loadService: function loadService() {}
        },
        sessionCache: {
            set: function set() {},
            get: function get() {},
            remove: function remove() {}
        },
        localCache: {
            set: function set() {},
            get: function get() {},
            remove: function remove() {}
        },
        stringUtils: {
            trim: function trim() {},
            format: function format() {},
            capitalize: function capitalize() {},
            endsWith: function endsWith() {},
            escapeRegExp: function escapeRegExp() {},
            replaceAll: function replaceAll() {},
            mergeCommaSeparatedValues: function mergeCommaSeparatedValues() {}
        },
        templates: {
            fill: function fill() {}
        },
        URL: {
            URLEncode: function URLEncode() {},
            URLDecode: function URLDecode() {},
            URLDecodeRecursive: function URLDecodeRecursive() {},
            getParamsFromURL: function getParamsFromURL() {},
            getGigParamsFromURL: function getGigParamsFromURL() {},
            getParamValueFromURL: function getParamValueFromURL() {},
            addParamsToURL: function addParamsToURL() {},
            getContextParamsFromUrl: function getContextParamsFromUrl() {}
        },
        validation: {
            isExplicitTrue: function isExplicitTrue() {},
            isExplicitFalse: function isExplicitFalse() {},
            isLaterThanNow: function isLaterThanNow() {},
            allDefinedOrAllUndefined: function allDefinedOrAllUndefined() {}
        },
        viewport: {
            getScroll: function getScroll() {},
            getFullSize: function getFullSize() {},
            getOrientation: function getOrientation() {},
            getOuterSize: function getOuterSize() {},
            getInnerSize: function getInnerSize() {},
            getMiddleCenter: function getMiddleCenter() {},
            isRectHorizontallyVisible: function isRectHorizontallyVisible() {},
            isRectFullyVisible: function isRectFullyVisible() {},
            scrollIntoView: function scrollIntoView() {}
        },
        win: {
            _openedWindows: {},
            _uniqueWindowCounter: 0,
            _calcPixels: function _calcPixels() {},
            open: function open() {},
            close: function close() {}
        },
        xd: {
            _flashListenerID: "flid1701632643324",
            addMessageListener: function addMessageListener() {},
            removeMessageListener: function removeMessageListener() {}
        },
        recaptcha: {},
        getGigyaScriptElement: function getGigyaScriptElement() {},
        updateConfiguration: function updateConfiguration() {},
        getParamValue: function getParamValue() {},
        getReqParamValue: function getReqParamValue() {},
        Tabbable: function Tabbable() {},
        tabbable: {
            bindings: [
                {
                    container: {},
                    listener: function listener() {}
                }
            ]
        }
    },
    getUrlParam: function getUrlParam() {},
    logger: {
        _global: {
            document: {
                location: {
                    ancestorOrigins: {},
                    href: "https://local.pyzlo.in/",
                    origin: "https://local.pyzlo.in",
                    protocol: "https:",
                    host: "local.pyzlo.in",
                    hostname: "local.pyzlo.in",
                    port: "",
                    pathname: "/",
                    search: "",
                    hash: "",
                    assign: function assign() {},
                    reload: function reload() {},
                    replace: function replace() {},
                    toString: function toString() {}
                }
            },
            name: "",
            customElements: {},
            history: {},
            navigation: {},
            locationbar: {},
            menubar: {},
            personalbar: {},
            scrollbars: {},
            statusbar: {},
            toolbar: {},
            status: "",
            closed: false,
            length: 0,
            opener: null,
            frameElement: null,
            navigator: {},
            origin: "https://local.pyzlo.in",
            external: {},
            screen: {},
            innerWidth: 1510,
            innerHeight: 909,
            scrollX: 0,
            pageXOffset: 0,
            scrollY: 0,
            pageYOffset: 0,
            visualViewport: {},
            screenX: 218,
            screenY: 38,
            outerWidth: 1510,
            outerHeight: 994,
            devicePixelRatio: 2,
            screenLeft: 218,
            screenTop: 38,
            styleMedia: {},
            onsearch: null,
            isSecureContext: true,
            trustedTypes: {},
            performance: {
                timeOrigin: 1701632643139.3,
                timing: {
                    connectStart: 1701632643145,
                    navigationStart: 1701632643139,
                    secureConnectionStart: 0,
                    fetchStart: 1701632643145,
                    domContentLoadedEventStart: 1701632643301,
                    responseStart: 1701632643172,
                    domInteractive: 1701632643238,
                    domainLookupEnd: 1701632643145,
                    responseEnd: 1701632643173,
                    redirectStart: 0,
                    requestStart: 1701632643169,
                    unloadEventEnd: 0,
                    unloadEventStart: 0,
                    domLoading: 1701632643234,
                    domComplete: 1701632643329,
                    domainLookupStart: 1701632643145,
                    loadEventStart: 1701632643329,
                    domContentLoadedEventEnd: 1701632643301,
                    loadEventEnd: 1701632643329,
                    redirectEnd: 0,
                    connectEnd: 1701632643145
                },
                navigation: {
                    type: 0,
                    redirectCount: 0
                }
            },
            onappinstalled: null,
            onbeforeinstallprompt: null,
            crypto: {},
            indexedDB: {},
            sessionStorage: {},
            onbeforexrselect: null,
            onabort: null,
            onbeforeinput: null,
            onbeforetoggle: null,
            onblur: null,
            oncancel: null,
            oncanplay: null,
            oncanplaythrough: null,
            onchange: null,
            onclick: null,
            onclose: null,
            oncontextlost: null,
            oncontextmenu: null,
            oncontextrestored: null,
            oncuechange: null,
            ondblclick: null,
            ondrag: null,
            ondragend: null,
            ondragenter: null,
            ondragleave: null,
            ondragover: null,
            ondragstart: null,
            ondrop: null,
            ondurationchange: null,
            onemptied: null,
            onended: null,
            onerror: null,
            onfocus: null,
            onformdata: null,
            oninput: null,
            oninvalid: null,
            onkeydown: null,
            onkeypress: null,
            onkeyup: null,
            onload: null,
            onloadeddata: null,
            onloadedmetadata: null,
            onloadstart: null,
            onmousedown: null,
            onmouseenter: null,
            onmouseleave: null,
            onmousemove: null,
            onmouseout: null,
            onmouseover: null,
            onmouseup: null,
            onmousewheel: null,
            onpause: null,
            onplay: null,
            onplaying: null,
            onprogress: null,
            onratechange: null,
            onreset: null,
            onresize: null,
            onscroll: null,
            onsecuritypolicyviolation: null,
            onseeked: null,
            onseeking: null,
            onselect: null,
            onslotchange: null,
            onstalled: null,
            onsubmit: null,
            onsuspend: null,
            ontimeupdate: null,
            ontoggle: null,
            onvolumechange: null,
            onwaiting: null,
            onwebkitanimationend: null,
            onwebkitanimationiteration: null,
            onwebkitanimationstart: null,
            onwebkittransitionend: null,
            onwheel: null,
            onauxclick: null,
            ongotpointercapture: null,
            onlostpointercapture: null,
            onpointerdown: null,
            onpointermove: null,
            onpointerrawupdate: null,
            onpointerup: null,
            onpointercancel: null,
            onpointerover: null,
            onpointerout: null,
            onpointerenter: null,
            onpointerleave: null,
            onselectstart: null,
            onselectionchange: null,
            onanimationend: null,
            onanimationiteration: null,
            onanimationstart: null,
            ontransitionrun: null,
            ontransitionstart: null,
            ontransitionend: null,
            ontransitioncancel: null,
            onafterprint: null,
            onbeforeprint: null,
            onbeforeunload: null,
            onhashchange: null,
            onlanguagechange: null,
            onmessage: null,
            onmessageerror: null,
            onoffline: null,
            ononline: null,
            onpagehide: null,
            onpageshow: null,
            onpopstate: null,
            onrejectionhandled: null,
            onstorage: null,
            onunhandledrejection: null,
            onunload: null,
            crossOriginIsolated: false,
            scheduler: {},
            alert: function alert() {},
            atob: function atob() {},
            blur: function blur() {},
            btoa: function btoa() {},
            cancelAnimationFrame: function cancelAnimationFrame() {},
            cancelIdleCallback: function cancelIdleCallback() {},
            captureEvents: function captureEvents() {},
            clearInterval: function clearInterval() {},
            clearTimeout: function clearTimeout() {},
            close: function close() {},
            confirm: function confirm() {},
            createImageBitmap: function createImageBitmap() {},
            fetch: function fetch() {},
            find: function find() {},
            focus: function focus() {},
            getComputedStyle: function getComputedStyle() {},
            getSelection: function getSelection() {},
            matchMedia: function matchMedia() {},
            moveBy: function moveBy() {},
            moveTo: function moveTo() {},
            open: function open() {},
            postMessage: function postMessage() {},
            print: function print() {},
            prompt: function prompt() {},
            queueMicrotask: function queueMicrotask() {},
            releaseEvents: function releaseEvents() {},
            reportError: function reportError() {},
            requestAnimationFrame: function requestAnimationFrame() {},
            requestIdleCallback: function requestIdleCallback() {},
            resizeBy: function resizeBy() {},
            resizeTo: function resizeTo() {},
            scroll: function scroll() {},
            scrollBy: function scrollBy() {},
            scrollTo: function scrollTo() {},
            setInterval: function setInterval() {},
            setTimeout: function setTimeout() {},
            stop: function stop() {},
            structuredClone: function structuredClone() {},
            webkitCancelAnimationFrame: function webkitCancelAnimationFrame() {},
            webkitRequestAnimationFrame: function webkitRequestAnimationFrame() {},
            chrome: {
                loadTimes: function loadTimes() {},
                csi: function csi() {},
                app: {
                    isInstalled: false,
                    getDetails: function getDetails() {},
                    getIsInstalled: function getIsInstalled() {},
                    installState: function installState() {},
                    runningState: function runningState() {},
                    InstallState: {
                        DISABLED: "disabled",
                        INSTALLED: "installed",
                        NOT_INSTALLED: "not_installed"
                    },
                    RunningState: {
                        CANNOT_RUN: "cannot_run",
                        READY_TO_RUN: "ready_to_run",
                        RUNNING: "running"
                    }
                }
            },
            fence: null,
            caches: {},
            cookieStore: {},
            ondevicemotion: null,
            ondeviceorientation: null,
            ondeviceorientationabsolute: null,
            launchQueue: {},
            sharedStorage: {},
            documentPictureInPicture: {},
            onbeforematch: null,
            getScreenDetails: function getScreenDetails() {},
            queryLocalFonts: function queryLocalFonts() {},
            showDirectoryPicker: function showDirectoryPicker() {},
            showOpenFilePicker: function showOpenFilePicker() {},
            showSaveFilePicker: function showSaveFilePicker() {},
            originAgentCluster: true,
            credentialless: false,
            speechSynthesis: {},
            oncontentvisibilityautostatechange: null,
            onscrollend: null,
            webkitRequestFileSystem: function webkitRequestFileSystem() {},
            webkitResolveLocalFileSystemURL: function webkitResolveLocalFileSystemURL() {},
            litIssuedWarnings: {},
            litHtmlVersions: [
                "3.1.0"
            ],
            litPropertyMetadata: {},
            reactiveElementVersions: [
                "2.0.2"
            ],
            litElementVersions: [
                "4.0.2"
            ],
            gigya: {
                isGigya: true,
                apiKey: "4_aeFS_UyzRnmP5k_MI59ejg",
                defaultApiDomain: "gigya.com",
                dataCenter: "eu1",
                gmidVersion: "ver4",
                bypassCaptchaV1: true,
                __initialized: true,
                setAccountResidency: function setAccountResidency() {},
                setGroupContext: function setGroupContext() {},
                setSSOToken: function setSSOToken() {},
                syncGroupGltExp: function syncGroupGltExp() {},
                hasSession: function hasSession() {},
                Request: function Request() {},
                XhrRequest: function XhrRequest() {},
                Promise: function Promise() {},
                debug: function debug() {},
                getLoginToken: function getLoginToken() {},
                updateConfiguration: function updateConfiguration() {},
                getUrlParam: function getUrlParam() {},
                events: {
                    global: {
                        _activeNamespaces: {
                            socialize: 1
                        },
                        add: function add() {},
                        remove: function remove() {},
                        dispatch: function dispatch() {},
                        dispatchWhenHandlerAdded: function dispatchWhenHandlerAdded() {},
                        dispatchWhenHandlersAdded: function dispatchWhenHandlersAdded() {},
                        getEventsForOperation: function getEventsForOperation() {}
                    },
                    addMap: function addMap() {},
                    dispatchErrorFromResponse: function dispatchErrorFromResponse() {},
                    dispatchInvalidParamError: function dispatchInvalidParamError() {},
                    dispatchForWidget: function dispatchForWidget() {},
                    dispatchEventObject: function dispatchEventObject() {},
                    _dispatchFromMaps: function _dispatchFromMaps() {}
                },
                log: {
                    CONSOLE_LOG_LEVELS: [
                        "debug",
                        "info",
                        "log",
                        "warn",
                        "error"
                    ],
                    selectedConsoleLogLevels: [],
                    _log: [],
                    enable: function enable() {},
                    disable: function disable() {},
                    _isEnabled: function _isEnabled() {},
                    addLog: function addLog() {},
                    logCall: function logCall() {},
                    debug: function debug() {},
                    showLog: function showLog() {},
                    show: function show() {},
                    showConfig: function showConfig() {}
                },
                legacyReports: {
                    trackAddressBarShares: function trackAddressBarShares() {},
                    report: function report() {},
                    init: function init() {},
                    reportLoad: function reportLoad() {}
                },
                fidm: {
                    saml: {
                        initSSO: function initSSO() {},
                        continueSSO: function continueSSO() {},
                        cancelSSO: function cancelSSO() {},
                        logoutSSO: function logoutSSO() {}
                    },
                    oidc: {
                        op: {
                            getContext: function getContext() {},
                            redirectToContinue: function redirectToContinue() {},
                            deviceContinue: function deviceContinue() {},
                            getContextData: function getContextData() {}
                        }
                    }
                },
                globalAccount: {},
                isReady: true,
                localInfo: {
                    baseDomain: "local.pyzlo.in",
                    isBrowserSupportsFilesAPI: true,
                    initTime: "2023-12-03T19:44:03.322Z",
                    version: 0,
                    pageDomain: "local.pyzlo.in",
                    protocol: "https",
                    userAgent: "mozilla/5.0 (macintosh; intel mac os x 10_15_7) applewebkit/537.36 (khtml, like gecko) chrome/119.0.0.0 safari/537.36",
                    isWin: false,
                    isIE: false,
                    isIE6: false,
                    isIE7: false,
                    isIE8: false,
                    isIE9: false,
                    isIE10: false,
                    isIE11: false,
                    isEdgeLegacy: false,
                    isEdge: false,
                    isIOS: false,
                    isSafari534: false,
                    isWeChat: false,
                    iosVersion: 0,
                    isAndroid: false,
                    isAndroidBrowser: false,
                    currentBrowser: "mac chrome",
                    androidVersion: 0,
                    isChrome: true,
                    isGoogleBot: false,
                    isFF: false,
                    isOpera: false,
                    isSafari: false,
                    isIOSWebView: false,
                    isIOSChrome: false,
                    isMAC: true,
                    isWindowsPhone: false,
                    isFacebookBrowser: false,
                    supportsPostMessage: true,
                    supportsLocalStorage: true,
                    supportsSessionStorage: true,
                    supportsFlash: false,
                    quirksMode: false,
                    backCompat: false,
                    isMobile: false,
                    isMobileApp: true,
                    isNativeMobileApp: false,
                    isTouch: false,
                    isOnLine: function isOnLine() {},
                    messagingMethod: 1
                },
                ClientFeature: function ClientFeature() {},
                defaultEventMaps: [
                    {
                        id: "screen-set-report-events-map",
                        defaultMethod: function defaultMethod() {},
                        eventMap: [
                            {
                                events: "afterScreenLoad,submit",
                                args: [
                                    function() {}
                                ]
                            }
                        ]
                    }
                ],
                flow: function flow() {},
                oauth: {
                    register: function register() {},
                    connect: function connect() {},
                    disconnect: function disconnect() {},
                    authorize: function authorize() {},
                    token: function token() {}
                },
                auth: {
                    token: {
                        authenticationContext: function authenticationContext() {}
                    },
                    loginToken: {
                        getTokenParam: function getTokenParam() {},
                        get: function get() {}
                    }
                },
                ds: {
                    store: function store() {},
                    get: function get() {},
                    search: function search() {},
                    getSchema: function getSchema() {},
                    "delete": function _delete() {}
                },
                ids: {
                    getAccountInfo: function getAccountInfo() {},
                    setAccountInfo: function setAccountInfo() {},
                    search: function search() {}
                },
                showDebugUI: function showDebugUI() {},
                external: {
                    facebook: {
                        isLoggedIn: false,
                        isConnected: false,
                        isLoaded: function isLoaded() {},
                        load: function load() {},
                        refreshSession: function refreshSession() {},
                        retryPending: function retryPending() {},
                        runWhenLoaded: function runWhenLoaded() {},
                        getParams: function getParams() {},
                        autoLogin: function autoLogin() {}
                    },
                    googlePlus: {
                        isLoaded: function isLoaded() {},
                        load: function load() {},
                        handleClientLoad: function handleClientLoad() {},
                        refreshSession: function refreshSession() {},
                        autoLogin: function autoLogin() {}
                    },
                    opengraph: {
                        getMetaTag: function getMetaTag() {}
                    }
                },
                thisScript: {
                    scriptElement: {},
                    protocol: "https",
                    baseDomain: "cdns.gigya.com",
                    APIKey: "4_aeFS_UyzRnmP5k_MI59ejg",
                    lang: {
                        full: "en-US",
                        langCode: "en",
                        countryCode: "US",
                        originalLang: "en"
                    },
                    globalConf: {
                        connectWithoutLoginBehavior: "alwaysLogin",
                        defaultRegScreenSet: "Default-RegistrationLogin",
                        defaultMobileRegScreenSet: "Default-RegistrationLogin",
                        sessionExpiration: 0,
                        rememberSessionExpiration: 0,
                        apiDomain: "eu1.gigya.com",
                        lang: "en",
                        APIKey: "4_aeFS_UyzRnmP5k_MI59ejg"
                    },
                    URLParams: {
                        apikey: "4_aeFS_UyzRnmP5k_MI59ejg",
                        pretty: "true",
                        debug: "true"
                    }
                },
                global: {
                    addCSS: function addCSS() {},
                    date: {
                        getISODate: function getISODate() {}
                    },
                    XMLUtils: {
                        CreateXMLFromString: function CreateXMLFromString() {},
                        CopyProperties: function CopyProperties() {},
                        CollectAttributesFromXMLPathToObject: function CollectAttributesFromXMLPathToObject() {},
                        mergeNodes: function mergeNodes() {}
                    },
                    resolver: function resolver() {},
                    getCombination: function getCombination() {},
                    resolveProviders: function resolveProviders() {},
                    showLoader: function showLoader() {},
                    fadeIn: function fadeIn() {},
                    getBalloonHTML: function getBalloonHTML() {},
                    createGMBalloon: function createGMBalloon() {},
                    removeGMBalloon: function removeGMBalloon() {},
                    putGMBalloonNextTo: function putGMBalloonNextTo() {},
                    positionGMBalloonNextTo: function positionGMBalloonNextTo() {},
                    scrollToElement: function scrollToElement() {},
                    addIframeShim: function addIframeShim() {},
                    removeIframeShim: function removeIframeShim() {},
                    scaleImage: function scaleImage() {},
                    fillUserActionTemplate: function fillUserActionTemplate() {},
                    setPlaceholder: function setPlaceholder() {},
                    getClassBordersAndPaddings: function getClassBordersAndPaddings() {},
                    getBordersAndPaddings: function getBordersAndPaddings() {},
                    getStyle: function getStyle() {},
                    scaleImageToContainer: function scaleImageToContainer() {},
                    getClassInnerSize: function getClassInnerSize() {},
                    SpriteRenderer: function SpriteRenderer() {},
                    getSpriteRenderers: function getSpriteRenderers() {},
                    preloadImages: function preloadImages() {},
                    applyEllipsis: function applyEllipsis() {},
                    getPhotoURL: function getPhotoURL() {},
                    wbr: function wbr() {},
                    getPos: function getPos() {},
                    _GetElementPos: function _GetElementPos() {},
                    isEmail: function isEmail() {}
                },
                pluginUtils: {
                    css: {
                        fixCss: function fixCss() {}
                    },
                    lang: {
                        getLocalizedText: function getLocalizedText() {},
                        getTranslationsFromContainer: function getTranslationsFromContainer() {},
                        getFallbackLang: function getFallbackLang() {},
                        getDateString: function getDateString() {}
                    },
                    animation: {
                        fadeIn: function fadeIn() {},
                        slideDown: function slideDown() {}
                    },
                    DOM: {
                        addBrowserInfoClassesToElement: function addBrowserInfoClassesToElement() {},
                        setTextboxSubmitButton: function setTextboxSubmitButton() {},
                        getRelativePosition: function getRelativePosition() {},
                        placePopoverNearElement: function placePopoverNearElement() {},
                        addPopoverNearElement: function addPopoverNearElement() {},
                        removeElementOnDocClickOrEscape: function removeElementOnDocClickOrEscape() {},
                        hideElementOnDocClick: function hideElementOnDocClick() {},
                        performOnDocClickOrEscape: function performOnDocClickOrEscape() {},
                        hideElement: function hideElement() {},
                        showElement: function showElement() {}
                    },
                    layout: {
                        measureText: function measureText() {}
                    },
                    text: {
                        normalizeLinebreaks: function normalizeLinebreaks() {},
                        fixTextWidows: function fixTextWidows() {}
                    },
                    validation: {
                        isValidEmailLoginID: function isValidEmailLoginID() {},
                        isEmailValid: function isEmailValid() {},
                        isEmailListValid: function isEmailListValid() {}
                    },
                    domain: {
                        isInDomain: function isInDomain() {}
                    }
                },
                i18n: {
                    "gigya.services.accounts.plugins.screenSet.js": {
                        en: {
                            login_identifier_exists: "Login identifier exists",
                            unique_identifier_exists: "Unique identifier exists",
                            account_temporarily_locked_out: "Account temporarily locked out",
                            wrong_password: "Wrong password",
                            old_password_cannot_be_the_same_as_new_password: "You've already used that password. Please create a new one.",
                            old_password_used: "It seems like you're trying to log in with a password that was changed. If you don't remember the new one, reset your password.",
                            choose_file: "Choose File",
                            no_file_chosen: "No file chosen",
                            "maximum_size_of_3mb.": "Maximum size of 3MB.",
                            there_are_errors_in_your_form_please_try_again: "There are errors in your form, please try again",
                            sorry_we_are_not_able_to_process_your_registration: "Sorry, we are not able to process your registration",
                            invalid_login_or_password: "Invalid login or password",
                            account_is_disabled: "Account is disabled",
                            email_already_exists: "Email already exists",
                            there_is_no_user_with_that_username_or_email: "There is no user with that username or email",
                            password_must_contain_at_least: "Password must contain at least",
                            and: "and",
                            num_of_the_following_groups: "%num of the following: An uppercase letter, a lowercase letter, a number, a special symbol",
                            num_characters_total: "%num characters",
                            too_weak: "Too weak",
                            checking: "Checking",
                            email_address_is_invalid: "E-mail address is invalid.",
                            password_does_not_meet_complexity_requirements: "Password does not meet complexity requirements",
                            username_already_exists: "Username already exists",
                            passwords_do_not_match: "Passwords do not match",
                            please_enter_fieldname: "Please enter %fieldname",
                            this_field_is_required: "This field is required",
                            invalid_fieldname: "Invalid %fieldname",
                            very_strong: "Very strong",
                            strong: "Strong",
                            fair: "Fair",
                            weak: "Weak",
                            password_strength_colon: "Password strength:",
                            not_available: "Not available",
                            available: "Available",
                            network_error: "Network error, please try again later.",
                            profilePhoto_fileSizeError: "Photo format: JPG/GIF/PNG. Size: up to 3MB.",
                            subscription_pending_confirmation: "Pending Confirmation",
                            login_captcha_error: "To login, confirm you are not a robot",
                            register_captcha_error: "To register, confirm you are not a robot",
                            phone_number_exists: "This phone number already exists",
                            please_enter_a_valid_code: "Please enter a valid code",
                            invalid_password_reset_token: "Uh-oh, your link is not valid. Restart the reset password flow to get a new link. ",
                            otp_code_expired: "Code has expired. Resend a new code.",
                            invalid_login_identifier: "Invalid login identifier",
                            code_frequency_limit_reached: "Send limit reached. Please try again in a few minutes",
                            forbidden_error: "Too many requests: please wait before you try again",
                            request_captcha_error: "To continue, confirm you are not a robot",
                            unauthorized_user: "Unauthorized user",
                            permission_denied: "Permission denied",
                            account_pending_registration: "Account Pending Registration",
                            phone_not_verified: "Number must be verified",
                            phone_not_verified_enter_code: "Verification has not been completed. Please enter a valid code.",
                            sms_subscription_error: "To subscribe, please provide a verified phone number",
                            device_code_incorrect: "Device code incorrect, Please re-enter your device code",
                            not_supported: "Operation not supported",
                            passkey_authenticator_already_registered: "Passkey already exists on the device",
                            operation_canceled: "The request was canceled by the user or timed out",
                            invalid_site_configuration: "Invalid site configuration",
                            passkey_authenticator_error: "Something went wrong",
                            passkey_register_success: "Passkey register successfully",
                            general_error: "Something went wrong, please try again later",
                            no_data_available: "No Data Available",
                            missing_dqm_credentials: "Missing user credentials. Please ensure that you have configured your site's SAP DQM correctly.",
                            dqm_general_error: "There was an unknown error at the Provider. Please try again later.",
                            dqm_selection_error: "You must choose an address from the list of available options.",
                            organization_context_saved: "Organization context was successfully updated",
                            subscription_missing_dependson_fields: "To subscribe, please provide the missing required field(s)",
                            device_limit_reached: "You cannot add any more authenticators to your account.",
                            tfa_registration_expired: "Rescan the QR code or enter the secret again.",
                            please_try_again_later: "Please try again later.",
                            user_enable_2fa_error: "Enabling 2-Factor Authentication failed. Please try again.",
                            user_enable_2fa_success: "You enabled 2-Factor Authentication successfully",
                            custom_identifier_already_exists: "Custom identifier already exists: %fieldname"
                        }
                    },
                    "gigya.services.socialize.plugins.login.js": {
                        en: {
                            social_by: "Social by",
                            edit: "Edit",
                            add_more_connections_to_your_account: "Add more connections to your account.",
                            you_can_use_your_account_from_one_of_these_services_to_sign_into_the_site: "You can use your account from one of these services to sign into the site",
                            whats_this: "What's this?",
                            not_you: "Not you?",
                            sign_in_using_a_different_network: "Sign in using a different network",
                            welcome_back_user: "Welcome back, %user",
                            welcome_back: "Welcome back",
                            copy_link: "Copy link:",
                            copy_this_link_to_a_new_browser_window: "Copy this link to a new browser window:",
                            no_available_providers: "No available providers",
                            login: "Login",
                            logout: "Logout",
                            terms: "Terms",
                            connect_to: "Connect to",
                            no_social_network_application_key: "No Social network application key available for this domain. please contact Gigya to get application keys",
                            connect_with_your_friends: "Connect with your friends",
                            network_error: "Network error, please try again later.",
                            unknown_error: "Unknown Error",
                            ok: "OK",
                            copyButton: "Copy"
                        }
                    }
                },
                __screenSetPluginCache: {
                    "Default-RegistrationLogin": {
                        javascript: "",
                        translations: {
                            en: {
                                SUBMIT_142674579108303380_VALUE: "Submit",
                                CHECKBOX_76374189532411820_LABEL: "Keep me logged-in",
                                HEADER_131443300282291300_LABEL: "Log in with your email and password:",
                                LABEL_48902362044111190_LABEL: "or",
                                LINK_105018431100429140_LABEL: "Don't have an account yet?",
                                LINK_146308315993881860_LABEL: "Forgot password?",
                                LOGINID_1311311543682226_PLACEHOLDER: "Email",
                                PASSWORD_132128826476804690_PLACEHOLDER: "Password",
                                GIGYA_LOGIN_SCREEN_CAPTION: "Login",
                                SUBMIT_7667737432077126_VALUE: "Submit",
                                CHECKBOX_11798816851057300_LABEL: "Subscribe to our newsletter",
                                CHECKBOX_79786885293367740_LABEL: 'I have read and understood the\n <a class="gigya-terms-of-use" href="#">Terms of Use</a>',
                                HEADER_108728337563591200_LABEL: "Quickly register with your social network:",
                                HEADER_63695688742051540_LABEL: "Register with your email and password:",
                                LABEL_139978773486588850_LABEL: "or",
                                LINK_55817364832410216_LABEL: "Have an account already?",
                                LOGINID_126653578050634370_PLACEHOLDER: "Email",
                                PASSWORD_18495765554860224_PLACEHOLDER: "Retype password",
                                PASSWORD_92109928057504110_PLACEHOLDER: "Password",
                                GIGYA_REGISTER_SCREEN_CAPTION: "Registration",
                                TEXTBOX_72105706170970860_PLACEHOLDER: "First name",
                                TEXTBOX_75385478551382400_PLACEHOLDER: "Last name",
                                SUBMIT_31429658457676556_VALUE: "Submit",
                                CHECKBOX_76245746717438300_LABEL: "Subscribe to our newsletter",
                                DROPDOWN_16234574578704520_CHOICES_0004D0B59E19461FF126E3A08A814C33: "1970",
                                DROPDOWN_16234574578704520_CHOICES_008BD5AD93B754D500338C253D9C1770: "1994",
                                DROPDOWN_16234574578704520_CHOICES_03E7D2EBEC1E820AC34D054DF7E68F48: "1950",
                                DROPDOWN_16234574578704520_CHOICES_06964DCE9ADDB1C5CB5D6E3D9838F733: "1997",
                                DROPDOWN_16234574578704520_CHOICES_08F90C1A417155361A5C4B8D297E0D78: "2000",
                                DROPDOWN_16234574578704520_CHOICES_0950CA92A4DCF426067CFD2246BB5FF3: "1925",
                                DROPDOWN_16234574578704520_CHOICES_11108A3DBFE4636CB40B84B803B2FFF6: "1936",
                                DROPDOWN_16234574578704520_CHOICES_1113D7A76FFCECA1BB350BFE145467C6: "1952",
                                DROPDOWN_16234574578704520_CHOICES_136F951362DAB62E64EB8E841183C2A9: "1937",
                                DROPDOWN_16234574578704520_CHOICES_139F0874F2DED2E41B0393C4AC5644F7: "1929",
                                DROPDOWN_16234574578704520_CHOICES_15D185EAA7C954E77F5343D941E25FBD: "1931",
                                DROPDOWN_16234574578704520_CHOICES_1B36EA1C9B7A1C3AD668B8BB5DF7963F: "1984",
                                DROPDOWN_16234574578704520_CHOICES_1E4D36177D71BBB3558E43AF9577D70E: "1983",
                                DROPDOWN_16234574578704520_CHOICES_1E913E1B06EAD0B66E30B6867BF63549: "1933",
                                DROPDOWN_16234574578704520_CHOICES_1F36C15D6A3D18D52E8D493BC8187CB9: "1985",
                                DROPDOWN_16234574578704520_CHOICES_1F71E393B3809197ED66DF836FE833E5: "1946",
                                DROPDOWN_16234574578704520_CHOICES_277A78FC05C8864A170E9A56CEEABC4C: "1957",
                                DROPDOWN_16234574578704520_CHOICES_29530DE21430B7540EC3F65135F7323C: "1930",
                                DROPDOWN_16234574578704520_CHOICES_2D00F43F07911355D4151F13925FF292: "1945",
                                DROPDOWN_16234574578704520_CHOICES_333222170AB9EDCA4785C39F55221FE7: "1922",
                                DROPDOWN_16234574578704520_CHOICES_3683AF9D6F6C06ACEE72992F2977F67E: "1966",
                                DROPDOWN_16234574578704520_CHOICES_36AC8E558AC7690B6F44E2CB5EF93322: "1949",
                                DROPDOWN_16234574578704520_CHOICES_378A063B8FDB1DB941E34F4BDE584C7D: "1955",
                                DROPDOWN_16234574578704520_CHOICES_39DCAF7A053DC372FBC391D4E6B5D693: "1964",
                                DROPDOWN_16234574578704520_CHOICES_3D863B367AA379F71C7AFC0C9CDCA41D: "1974",
                                DROPDOWN_16234574578704520_CHOICES_3F088EBEDA03513BE71D34D214291986: "1995",
                                DROPDOWN_16234574578704520_CHOICES_405E28906322882C5BE9B4B27F4C35FD: "1978",
                                DROPDOWN_16234574578704520_CHOICES_414E773D5B7E5C06D564F594BF6384D0: "1923",
                                DROPDOWN_16234574578704520_CHOICES_44968AECE94F667E4095002D140B5896: "1920",
                                DROPDOWN_16234574578704520_CHOICES_4A3E00961A08879C34F91CA0070EA2F5: "1989",
                                DROPDOWN_16234574578704520_CHOICES_4AFD521D77158E02AED37E2274B90C9C: "1977",
                                DROPDOWN_16234574578704520_CHOICES_4BA29B9F9E5732ED33761840F4BA6C53: "2002",
                                DROPDOWN_16234574578704520_CHOICES_4D8556695C262AB91FF51A943FDD6058: "1969",
                                DROPDOWN_16234574578704520_CHOICES_5103C3584B063C431BD1268E9B5E76FB: "1926",
                                DROPDOWN_16234574578704520_CHOICES_519C84155964659375821F7CA576F095: "1942",
                                DROPDOWN_16234574578704520_CHOICES_52D2752B150F9C35CCB6869CBF074E48: "1932",
                                DROPDOWN_16234574578704520_CHOICES_5A7F963E5E0504740C3A6B10BB6D4FA5: "1954",
                                DROPDOWN_16234574578704520_CHOICES_5BCE843DD76DB8C939D5323DD3E54EC9: "1928",
                                DROPDOWN_16234574578704520_CHOICES_5EC829DEBE54B19A5F78D9A65B900A39: "1999",
                                DROPDOWN_16234574578704520_CHOICES_6351BF9DCE654515BF1DDBD6426DFA97: "1996",
                                DROPDOWN_16234574578704520_CHOICES_6A508A60AA3BF9510EA6ACB021C94B48: "1951",
                                DROPDOWN_16234574578704520_CHOICES_6F2688A5FCE7D48C8D19762B88C32C3B: "1944",
                                DROPDOWN_16234574578704520_CHOICES_798CEBCCB32617AD94123450FD137104: "1979",
                                DROPDOWN_16234574578704520_CHOICES_7AF6266CC52234B5AA339B16695F7FC4: "1941",
                                DROPDOWN_16234574578704520_CHOICES_7CA57A9F85A19A6E4B9A248C1DACA185: "1948",
                                DROPDOWN_16234574578704520_CHOICES_7D2B92B6726C241134DAE6CD3FB8C182: "1975",
                                DROPDOWN_16234574578704520_CHOICES_7F16109F1619FD7A733DAF5A84C708C1: "1960",
                                DROPDOWN_16234574578704520_CHOICES_8562AE5E286544710B2E7EBE9858833B: "1934",
                                DROPDOWN_16234574578704520_CHOICES_8C249675AEA6C3CBD91661BBAE767FF1: "1986",
                                DROPDOWN_16234574578704520_CHOICES_8D55A249E6BAA5C06772297520DA2051: "1935",
                                DROPDOWN_16234574578704520_CHOICES_95E6834D0A3D99E9EA8811855AE9229D: "1940",
                                DROPDOWN_16234574578704520_CHOICES_95F6870FF3DCD442254E334A9033D349: "1962",
                                DROPDOWN_16234574578704520_CHOICES_96055F5B06BF9381AC43879351642CF5: "1991",
                                DROPDOWN_16234574578704520_CHOICES_98C7242894844ECD6EC94AF67AC8247D: "1968",
                                DROPDOWN_16234574578704520_CHOICES_9D7311BA459F9E45ED746755A32DCD11: "1988",
                                DROPDOWN_16234574578704520_CHOICES_9F6992966D4C363EA0162A056CB45FE5: "1921",
                                DROPDOWN_16234574578704520_CHOICES_A38B16173474BA8B1A95BCBC30D3B8A5: "1953",
                                DROPDOWN_16234574578704520_CHOICES_A591024321C5E2BDBD23ED35F0574DDE: "2003",
                                DROPDOWN_16234574578704520_CHOICES_A82D922B133BE19C1171534E6594F754: "1967",
                                DROPDOWN_16234574578704520_CHOICES_AD4CC1FB9B068FAECFB70914ACC63395: "1938",
                                DROPDOWN_16234574578704520_CHOICES_B139E104214A08AE3F2EBCCE149CDF6E: "1924",
                                DROPDOWN_16234574578704520_CHOICES_B3B4D2DBEDC99FE843FD3DEDB02F086F: "1981",
                                DROPDOWN_16234574578704520_CHOICES_B8B4B727D6F5D1B61FFF7BE687F7970F: "2004",
                                DROPDOWN_16234574578704520_CHOICES_C215B446BCDF956D848A8419C1B5A920: "1963",
                                DROPDOWN_16234574578704520_CHOICES_C3395DD46C34FA7FD8D729D8CF88B7A8: "1943",
                                DROPDOWN_16234574578704520_CHOICES_C4DE8CED6214345614D33FB0B16A8ACD: "1972",
                                DROPDOWN_16234574578704520_CHOICES_C5A4E7E6882845EA7BB4D9462868219B: "1993",
                                DROPDOWN_16234574578704520_CHOICES_C5B2CEBF15B205503560C4E8E6D1EA78: "1998",
                                DROPDOWN_16234574578704520_CHOICES_D0FB963FF976F9C37FC81FE03C21EA7B: "2001",
                                DROPDOWN_16234574578704520_CHOICES_D46E1FCF4C07CE4A69EE07E4134BCEF1: "1965",
                                DROPDOWN_16234574578704520_CHOICES_D5C186983B52C4551EE00F72316C6EAA: "1992",
                                DROPDOWN_16234574578704520_CHOICES_D68A18275455AE3EAA2C291EEBB46E6D: "1987",
                                DROPDOWN_16234574578704520_CHOICES_D77F00766FD3BE3F2189C843A6AF3FB2: "1958",
                                DROPDOWN_16234574578704520_CHOICES_DC513EA4FBDAA7A14786FFDEBC4EF64E: "1990",
                                DROPDOWN_16234574578704520_CHOICES_DD055F53A45702FE05E449C30AC80DF9: "1976",
                                DROPDOWN_16234574578704520_CHOICES_DE03BEFFEED9DA5F3639A621BCAB5DD4: "1947",
                                DROPDOWN_16234574578704520_CHOICES_DE73998802680548B916F1947FFBAD76: "1971",
                                DROPDOWN_16234574578704520_CHOICES_DEB54FFB41E085FD7F69A75B6359C989: "1973",
                                DROPDOWN_16234574578704520_CHOICES_E3408432C1A48A52FB6C74D926B38886: "1956",
                                DROPDOWN_16234574578704520_CHOICES_E4DD5528F7596DCDF871AA55CFCCC53C: "1959",
                                DROPDOWN_16234574578704520_CHOICES_E5B294B70C9647DCF804D7BAA1903918: "1927",
                                DROPDOWN_16234574578704520_CHOICES_F106B7F99D2CB30C3DB1C3CC0FDE9CCB: "1961",
                                DROPDOWN_16234574578704520_CHOICES_F22E4747DA1AA27E363D86D40FF442FE: "1939",
                                DROPDOWN_16234574578704520_CHOICES_F80BF05527157A8C2A7BB63B22F49AAA: "1980",
                                DROPDOWN_16234574578704520_CHOICES_FB87582825F9D28A8D42C5E5E5E8B23D: "1982",
                                DROPDOWN_16234574578704520_LABEL: "Year of birth:",
                                LABEL_82751524717670350_LABEL: "We still need a few more details:",
                                GIGYA_COMPLETE_REGISTRATION_SCREEN_CAPTION: "Profile Completion",
                                TEXTBOX_136884197726350880_LABEL: "Email:",
                                TEXTBOX_65559603100946710_LABEL: "Postcode:",
                                SUBMIT_314293454325435_VALUE: "Get The Code",
                                LABEL_1555592368664_LABEL: "A code will be sent to your mobile phone number.",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_0000C04B6A11CB01FA6C351D96951A94: "Anguilla (+1)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_018AE104E95A884C0EF61987A4BCA33B: "Solomon Islands (+677)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_019E354FDE6080C71A2078D7689D015C: "Brazil (+55)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_02CC7D66E001C3E70D74755B7C3B8CC4: "Philippines (+63)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_044E84571F705B4449CC30F9010B7457: "Greenland (+299)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_049C0FEF53053801CD4B2DD07D27E34E: "Denmark (+45)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_093A60D935C4B98FE0974318EFEFBD2A: "Georgia (+995)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_09DFBAA95005C05961464F3FD07A73C9: "Gabon (+241)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_0A07706D6AAE7D5FAC405E73DCA5A230: "Ghana (+233)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_0A86459132D51157F5B110A28785FAB1: "Swaziland (+268)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_0B67E604B8FE452617CFA3B1CE27D771: "Rwanda (+250)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_0B6D697F2C0204573A65988CC05949CA: "Venezuela (+58)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_0B7991BC3D17112C050AD75D7002BE4A: "French Polynesia (+689)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_0C7DD38E5919A23F0FE33ED8E7B61BCD: "Iraq (+964)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_0EB55A926D3F16275DC53B4BD9559107: "East Timor (+670)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_0FB4FEC2BA2CA49124958FB16365B9E6: "Nicaragua (+505)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_10491CB01667EED09F957CD7975032CB: "Puerto Rico (+1)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_10B0F24A19EEF030C3E26DCA73A591A5: "Macedonia (+389)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_1179A92EC9A28334E0A559C64F6BBC78: "Mali (+223)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_12308CC3D4CC2FB855383A8DC9D728BF: "Lithuania (+370)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_1324137F09564ED3F8370A56C4C646CF: "Togo (+228)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_15610E11E4FB7489E79C6D1E245B2BDF: "Serbia (+381)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_17E9204B939277581EA401F786E4D705: "Morocco (+212)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_183B1E1C670D1EF64D74E32EC4E9348D: "Australia (+61)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_1AC4BB54E5F417A8ED8BD80D0601696B: "Spain (+34)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_1C85B37F22E56195407271C65E12F6B2: "Egypt (+20)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_203161DAE0F2145386430C8F78A054C0: "United Kingdom (+44)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_20D20D19C28939EFBD7E6E36A8D3D3FF: "Barbados (+1)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_212B0D7C2256FEB06EE9F0663ECACD1C: "South Africa (+27)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_232618C6FA5A962C6547DEF41609CE3E: "Ukraine (+380)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_23EFB14ABF1868AE2C351B956FE12278: "Botswana (+267)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_25F2BA239B091210CA080D221FFBD51D: "Sierra Leone (+232)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_2655ED45019A53E98278854C1800A41A: "Liechtenstein (+423)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_267C3D5900A14625CCEBF843E1113579: "Pakistan (+92)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_26CF7DE002149E85347C2CDDD34C43FB: "Costa Rica (+506)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_275C81699C9CA9DD1BD589A82F09AFF2: "French Guiana (+594)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_278EC1E91DBD6DA31A9546BC16FF9ACF: "Cuba (+53)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_27E4A0C1E5118EA9EB28DC68BB44A389: "Saint Lucia (+1)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_27FD3852136408B2E80C42ABE85FE888: "Benin (+229)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_28DB04EFD361DC70B1230CDC1A84CF7A: "Brunei (+673)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_29D4173C28F9BA028E1FEFD8F5B17607: "Jordan (+962)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_2B7FC2C51021C92E461A91BCD4C77222: "Panama (+507)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_2B9C96E2E465F06B1E947A1ABF1F82CC: "Latvia (+371)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_2C494EFCF244731678FD8C2EF14F3B66: "Bhutan (+975)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_2D2E0B57E53318D06A3A989618595D2D: "Yemen (+967)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_2D309595E0F8C76A69FC6B66E3AEE2DE: "Malta (+356)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_302F0A2BDDB3285A0D7E26676109FC06: "Montenegro (+382)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_311CFD698E0DC61134CBB6F3B9C91BAE: "Gambia (+220)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_32ABF11FB772561B45FAE98173CEF6F6: "New Caledonia (+687)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_32C902FF3266E8A06D44121EB60F070B: "United States (+1)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_3345950E1892B722E378BFE9D845872F: "Slovenia (+386)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_371CEACF25ED39729BBFCC06C0908BFC: "Ireland (+353)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_382B4143D3FB755C6553E796350644D3: "Jersey (+44)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_3A3F7B3A7C161BFE383D008E10FCCD4C: "Armenia (+374)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_3A4A6140CF0EA62D25A9DE1A6079458D: "Slovakia (+421)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_3A78A91CFFA196DEE4A8454FAE5271D4: "Azerbaijan (+994)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_3C70E69BE44A86FC852EF8EC2D3C3D2A: "Tanzania (+255)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_3CCC0920ECF6AA39031E2309F848F0FC: "British Indian Ocean Territory (+1)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_3CF400C815B9F3EE81CDA1CE6E6AED05: "Greece (+30)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_3E3C87B19BA3BC4BCF454945C29B6125: "Bermuda (+1)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_3EE9B3C1AD61A60F5593FF19EB4CB887: "Madagascar (+261)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_3F689BEAE4FF52B7021C755FC5AC99E7: "Ecuador (+593)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_3FC6ED9787B1B760CEABF91679C26878: "Congo (+242)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_42495073B157F93E836B72B07DEF2F2C: "Qatar (+974)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_42F14FD8C4866C266D51EC4718A19158: "Saint Kitts and Nevis (+1)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_440D1471CBAB9266505137C1C45F3ED4: "Uganda (+256)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_44744C30C3DB65036EBB94079C58B6E3: "Colombia (+57)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_45C9B64A3CECCCCE49843DBAFE6ADB64: "Czech Republic (+420)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_45EB8706E13C8E358D97C730312E90AE: "Grenada (+1)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_4921A12350B932D23D31D8B5868D6F04: "Lesotho (+266)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_4955C9C5078A1B26DA786E00D4C71829: "Sudan (+249)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_4A67165A23BF87C2823AF4D85209A854: "Hong Kong (+852)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_4A73DF4C96B5D4DA40C2A7254604C1BA: "Libya (+218)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_4B98171607BC7FF3007BABEC7F3E47DA: "Kyrgyzstan (+996)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_4F0B7F8EB20FB16D579581FB4FD438F6: "Sweden (+46)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_530F4E0E790A543D9EC308072314BEBA: "Paraguay (+595)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_55B7D584F14D787E069917CBCAD8F858: "Cameroon (+237)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_55BB4B263289FF947007A2FF574B8A54: "Moldova (+373)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_55F06B247EA51B5534CB9B58C530703E: "Gibraltar (+350)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_58A4655174124FCBEC0EA83ED121901E: "Kenya (+254)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_5A263C957067F1868ED88CF1DB1F9691: "China (+86)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_5AE79DDDA6F16ECF9450EBE8C41E268F: "Tajikistan (+992)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_5C8745A9652FA0FB450E22EEE803E8F8: "Chile (+56)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_5D14311DD7B2184B182ECED0DB4F2A23: "Suriname (+597)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_5DFC83751AB9D5CE392283E37225CEEB: "Kazakhstan (+7)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6115FC90431687F6FC349BF5BFE58F60: "Burkina Faso (+226)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_61817BC8A708B5AAB1D0DD9467CEABED: "Mauritania (+222)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_61EF21FDC5515A90CFAA8BABFC3CDDAC: "Singapore (+65)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_64089EFC30466CD81B53E16EA08C67BF: "Belize (+501)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6554B2FF3A5978291C0F7376AB26C848: "Syria (+963)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6562C71449C1704C676A13E1A5C18BFB: "Congo, The Democratic Republic Of The (+243)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_65CEC708B5D89D0D2457855B9D6A94AC: "Fiji (+679)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6674F7653960BBCB2814203115668763: "Wallis And Futuna (+681)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_669B9B9BBAF86E1A8FC4D8902FC77026: "Italy (+39)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_66C3CA97838B58714792C897B385EDC6: "Mozambique (+258)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_67927B31BE826B2D544F23B3F3D115D7: "Cape Verde (+238)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6A75EE0F96C5B8DB62A17B1F861E1B5E: "Equatorial Guinea (+240)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6B2AA1100BFB1887DA27C9CD384E09FE: "Finland (+358)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6B7E29C7A90813B182E4E993A44086FF: "Liberia (+231)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6BCC55C5EADBDED564CF32359773CBFE: "Guernsey (+44)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6D27A5E78ECCD03EE33D87BF3D2B2CC8: "Reunion (+262)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6D3EB5C5A30DC5B6FD0035201CAD19E0: "Estonia (+372)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6D8723CF044BAEBE059B9D2D7330CA42: "United Arab Emirates (+971)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6EED2E14CCF08F75AE0A55DB12E9C653: "Honduras (+504)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6F2ECC1C256C31FD43ED1157BCCC95B0: "Saint Vincent (+1)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6F4C92C83FC32220ED8152AE62BDE311: "Romania (+40)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_7087D94E0DD6463EC57A0F1A55A46CFD: "Haiti (+509)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_71E3FEFDC6441C1C112EF263DE1BF8ED: "Mexico (+52)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_72DACE1C7D7C48FE87AD9EF93DA8880E: "Palestine (+970)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_730A5D1990016281CB11952A3F377F69: "Trinidad And Tobago (+1)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_731FB8DCDFCEF1D997AA13322DA40476: "Seychelles (+248)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_749B0CD97119801FF9880E5768AE1ED7: "Turkmenistan (+993)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_75037F764CB144B6889A5F8171C1A27C: "Cayman Islands (+1)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_7D307FBC5EBE3972706E3D898CC4BE25: "Hungary (+36)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_7DB34BA7AFCCF77C4EB1AE5E3F530503: "Bolivia (+591)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_7EEA32ECAF8C58BC414082080B65DBB3: "Kuwait (+965)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_8192604E90D83CBA3DCCBAD2EDDF1641: "Albania (+355)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_87BB8668CB0004CE94F6AEDC96AF8267: "Ethiopia (+251)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_88C55D93F6412DAC30AFEF87EC950DD0: "Maldives (+960)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_8D8D9F79DC287C775BB06FFFC8AE1916: "Burundi (+257)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_8E64EA7E5AFBEC88581B9E3C5874C142: "Russia (+7)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_9072A83B2E107216CEBD634A35592127: "Saudi Arabia (+966)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_92307F98981C17DA9FCD08A423B23C19: "Djibouti (+253)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_92C3161EF8C78034409B97DBA2732119: "Guatemala (+502)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_94A38FCF50215C63446441275BD91CBC: "Poland (+48)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_950483525AA1ECAF75BB5491F351F24E: "Martinique (+596)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_990E8ACE85837FCCD2DEB0A7AE3321A2: "Senegal (+221)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_9D79DE4E7E64235407D4F3133FE392BC: "Malawi (+265)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_9F466DB3D9D9BACD7CF95E5B1E8E5441: "Israel (+972)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_A0B099B5CD051341B3BF75BEB79C2FF8: "Viet Nam (+84)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_A11FED9A6570C0647A1BAAC8C1DAC6D7: "India (+91)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_A65485C739F76BFF7E05413D23E7A03E: "Bahrain (+973)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_A7739D75D45B95186806F13F033335FD: "Vanuatu (+678)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_A87B73B3E1DBA418432EB94A08432244: "Angola (+244)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_A8BAA0E29D70F8AD7DFC86916FB39346: "Portugal (+351)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_A9DC19BB94C6904A27D41EF904232199: "Tonga (+676)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_AAF2B5C1AFC80BEF1A58A669FA7DC9BF: "Belgium (+32)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_AB5694A7D9AB79112FE99D42CBC7A0EF: "Argentina (+54)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_AC2CEC8FFF07429F388098BB9AAB86A4: "Cambodia (+855)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_ACC738496F403A6822EB6B395C0EA4EE: "Thailand (+66)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_AD51C2F6E99DB2DB0DA65EEFC00273AA: "Sri Lanka (+94)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_AFD663CCF14CE0EE7F81613B40B78D18: "Montserrat (+1)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_AFFB5ABFA8F1922289CC313EDF80B231: "Macao (+853)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_B042BD504749951EBB8FC489795A286F: "Uruguay (+598)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_B1B400960194AB272577C6B573DB2D9C: "Bangladesh (+880)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_B6507BB6F51B01321A3B87B8D0ACC714: "Luxembourg (+352)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_BA08CDF6C826861E2A337576DF8FE264: "Switzerland (+41)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_BA27C72455163E3EB029847D532650C6: "Dominica (+1)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_BA6CD9FE5A3AC9438F09F845773BC2B7: "Falkland Islands (Malvinas) (+500)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_BC6935C7C49AB605DDA2D1DB14D391D4: "Andorra (+376)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_BCDB41B851402FA9C47DBB0E4BDFA28D: "Afghanistan (+93)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_BCDED8077CA928B0AC5D7B6DD244B9F3: "Tunisia (+216)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_BD7B017B83C86393D5AFBCCF09B39535: "Belarus (+375)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_BE31195109C26343B81ACA710E3F08BE: "Northern Mariana Islands (+1)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_C0593B6D09969BF4C32A684DF2AC4A7D: "Guam (+1)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_C0F4C393ADE23E94388A619D2D28469C: "Cyprus (+357)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_C12934B2FB7A79F37D8D2730A02FF325: "Bosnia And Herzegovina (+387)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_C2445CA2ADAA6D2352E6B5342C51848A: "Myanmar (+95)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_C5DD5AADB4791D0799DDF499FBACFD3A: "Turkey (+90)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_C6008329DEF3854AB786638735E3DCF8: "Virgin Islands, British (+1)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_C683D0ED1E24DA7B22C9C5283C1C0822: "Iran (+98)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_C87C486958DCD8CFB22F6FAC15BD3C36: "Aruba (+297)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_C9530E692E6C6B0631172C859262CE15: "Antigua and Barbuda (+1)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_C9F85D89F977D07694B8847B2F21C17A: "Niger (+227)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_CB3868A3DF027A768524B1799256D7E9: "Bulgaria (+359)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_CB425265B02770CBF6AA66D862BF17D5: "Jamaica (+1)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_CC6ED73BF623AEB7707047AE998D364A: "Canada (+1)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_CE097694C2EB14AD8DED90D528CB1B5A: "Malaysia (+60)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_CE79906B4A47AEA9FAA59151BD0A8C06: "Faroe Islands (+298)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_D07D47EA18447405DEC7CE0D8D61A448: "Zimbabwe (+263)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_D08B3F47C06392C08C3863C3E8453FFC: "Cote d\\'Ivoire (+225)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_D239539B3277579FA37285D30B9C4C3E: "Algeria (+213)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_D6318A3F72BB34864386B79EDBC391C7: "Peru (+51)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_D654E0248440598C819C9E1CEC040605: "Laos (+856)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_D67B6F9FE85B2BC4969D07B757ED28AC: "Japan (+81)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_D9CED68E11939C33CE6512548DE5473E: "Indonesia (+62)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_DC134898CC21C30FA1A767DC889BC9C7: "Norway (+47)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_DE08EFFC4128AEDD10379EA73823D5CC: "Nepal (+977)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_DE435B513CCDA1AC711FF10954CB25BD: "New Zealand (+64)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_DE9675F429C298A1D3823E8CB122D99B: "Somalia (+252)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_E0836B3330A25A9B8E6B90060CB95A5E: "Nigeria (+234)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_E1329E5B6318C778116918397EBC9C4F: "Uzbekistan (+998)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_E154E7A6DE015871C40A71C833BBD32B: "Guadeloupe (+590)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_E3B73CA00640A2E9CC7819C373365F1D: "Chad (+235)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_E40528D8028F52E2724182C93E5AA385: "Netherlands Antilles (+599)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_E62457F72D933DBCB44AAB91DFDA8874: "Mongolia (+976)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_E63EEB8515DBB9E3BC9AF51AD6583A55: "El Salvador (+503)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_E6F770859FDE5760CBCF83BEAF9EB993: "Guyana (+592)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_E6FFC6D8240E701ECE6599EC8CF45CF4: "Taiwan (+886)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_E8258AB6DE76B8219D7102F1B44C845D: "Isle Of Man (+44)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_E909C2D7067EA37437CF97FE11D91BD0: "country",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_EC63C956DEFBD581C0FD9518E2AA3D41: "Lebanon (+961)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_EE3D98F7EE6C591A0102FD475FAC8AA3: "France (+33)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_EFD933F4DECB4BB1004E4241E0731ED4: "Dominican Republic (+1)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_F0E7F4C4B4E525EE7957A3FEA865118A: "Mauritius (+230)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_F0E977F8E3C559A6A21B06AC12CFD149: "Monaco (+377)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_F163162463D352FF5C3C24301C39A702: "Germany (+49)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_F265600C9D75B9386B863D2D74F56959: "Namibia (+264)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_F29A808E9BB2C0BAA651FF9EF78AD4C4: "Guinea (+224)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_F3B0EEC83FB9F59726A0A52920ACAA13: "Oman (+968)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_F73F1D7BA0CAF645118A9E8149EC346B: "Zambia (+260)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_F9096B7627DD12471BC163CB0E1392BB: "Korea, South (+82)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_FA4671E2748A698F1B80A643827F5FA1: "Croatia (+385)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_FB7B615AB2121EC76CECB5FA2CAD104E: "Austria (+43)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_FCACDE06C2B867E33FBC821F32D4C765: "Iceland (+354)",
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_FEC85FEEA479735D94A3F27756825567: "Netherlands (+31)",
                                PHONE_NUMBER_INPUT_15254487288447762_DISPLAY_NAME: "phone number",
                                PHONE_NUMBER_INPUT_15254487288447762_LEGEND: "Enter your mobile number:",
                                PHONE_NUMBER_INPUT_15254487288447762_PLACEHOLDER: "subscriber number",
                                GIGYA_MOBILE_LOGIN_SCREEN_CAPTION: "Log In With Your Mobile Phone",
                                SUBMIT_31429890890890_VALUE: "Verify",
                                LABEL_1555593146287_LABEL: 'Enter the code sent to your phone <a data-binding="true" data-switch-screen="gigya-mobile-login-screen"> {{accountInfo.phoneNumber}}\n <i class="gigya-pencil"></i></a>',
                                LABEL_546546790858_LABEL: 'Didn\'t get the code? <a data-disable-on-render="true" data-gigya-api-link="accounts.otp.sendCode">Click Here</a>',
                                GIGYA_MOBILE_VERIFICATION_SCREEN_CAPTION: "Enter The Code",
                                SUBMIT_137794634987176350_VALUE: "Get The Code",
                                LABEL_56426764264083580_LABEL: "A code will be sent to the new email for\n verification. If you don't validate with the code, your email will remain unchanged.",
                                GIGYA_CHANGE_EMAIL_SCREEN_CAPTION: "Change Your Email",
                                TEXTBOX_20913098960397852_LABEL: "Email",
                                SUBMIT_106757411555670860_VALUE: "Verify",
                                LABEL_124580104205672500_LABEL: 'Enter the code sent to your email <a data-binding="true" data-switch-screen="gigya-change-email-screen"> {{accountInfo.email}}\n <i class="gigya-pencil"></i></a>',
                                LABEL_45421446589093550_LABEL: 'Didn\'t get the code? <a data-disable-on-render="true" data-gigya-api-link="accounts.otp.sendCode">Click Here</a>',
                                GIGYA_EMAIL_CODE_VERIFICATION_SCREEN_CAPTION: "Enter The Code",
                                SUBMIT_81725475708397440_VALUE: "Submit",
                                LABEL_47776247120507590_LABEL: "Please enter your email address to reset your password:",
                                LINK_125263109889403890_LABEL: "Back to Login",
                                LOGINID_1762354922073180_LABEL: "Email:",
                                GIGYA_FORGOT_PASSWORD_SCREEN_CAPTION: "Forgot Password",
                                LABEL_32342199862391930_LABEL: "An email regarding your password change has been sent to your email address.",
                                LINK_64563424514074200_LABEL: '<input tabindex="0" type="button" value="Back to Login">',
                                GIGYA_FORGOT_PASSWORD_SUCCESS_SCREEN_CAPTION: "Forgot Password",
                                SUBMIT_1640252814218_VALUE: "Get The Code",
                                LABEL_1640252757841_LABEL: "A code will be sent to your mobile phone number.",
                                GIGYA_MOBILE_FORGOT_PASSWORD_SCREEN_CAPTION: "Forgot Password",
                                SUBMIT_1640253788797_VALUE: "Verify",
                                LABEL_1640253752471_LABEL: 'Enter the code sent to your phone <a data-binding="true" data-switch-screen="gigya-mobile-forgot-password-screen"> {{accountInfo.phoneNumber}}\n <i class="gigya-pencil"></i></a>',
                                LABEL_1640253816271_LABEL: 'Didn\'t get the code? <a data-disable-on-render="true" data-gigya-api-link="accounts.otp.sendCode">Click Here</a>',
                                GIGYA_MOBILE_FORGOT_PASSWORD_VERIFICATION_SCREEN_CAPTION: "Enter The Code",
                                SUBMIT_48518527117736720_VALUE: "Submit",
                                LABEL_31901611131936240_LABEL: "Please enter a new password:",
                                PASSWORD_24487772290225964_LABEL: "New password:",
                                PASSWORD_53816046531769560_LABEL: "Confirm password:",
                                GIGYA_RESET_PASSWORD_SCREEN_CAPTION: "Reset Password",
                                LABEL_43754194743648540_LABEL: "Your password has been changed successfully.<br>Log in with your new password.",
                                LINK_122104312720648740_LABEL: '<input tabindex="0" type="button" value="Back to Login">',
                                GIGYA_RESET_PASSWORD_SUCCESS_SCREEN_CAPTION: "Reset Password",
                                SUBMIT_65931489860940900_VALUE: "Submit",
                                LABEL_16240548663414458_LABEL: "For security reasons, your password needs changing:",
                                PASSWORD_101426512808638880_LABEL: "Current password:",
                                PASSWORD_17036595420608126_LABEL: "New password:",
                                PASSWORD_19612919353342308_LABEL: "Confirm new password:",
                                GIGYA_PASSWORD_CHANGE_REQUIRED_SCREEN_CAPTION: "Password Change",
                                SUBMIT_59040383411520670_VALUE: "Submit",
                                LABEL_114745734160901840_LABEL: "For your security, a verification email has been sent to you. Please follow the instructions in the\n email to verify your account.<br><br>To resend the verification email, please enter your email\n address below and click Submit.",
                                LABEL_135099439990555600_LABEL: '<a data-switch-screen="gigya-login-screen">Log in with a different account</a>',
                                GIGYA_VERIFICATION_PENDING_SCREEN_CAPTION: "Email Verification",
                                TEXTBOX_53553186815043370_LABEL: "Email:",
                                GIGYA_TFA_REGISTRATION_SCREEN_CAPTION: "Securing Your Account",
                                GIGYA_TFA_VERIFICATION_SCREEN_CAPTION: "Verifying Your Account",
                                LABEL_4529849558267223_LABEL: "A verification email with a link to verify your account has been sent to you.",
                                LINK_19224603862200704_LABEL: '<input type="button" class="gigya-button" value="OK" tabindex="0">',
                                GIGYA_VERIFICATION_SENT_SCREEN_CAPTION: "Email Verification",
                                SUBMIT_55211342470297420_VALUE: "Submit",
                                CHECKBOX_78285840404140770_LABEL: 'I have read and understood the <a class="gigya-terms-of-use" href="#">Terms of Use</a>',
                                HEADER_51697213698355980_LABEL: "Provide a password:",
                                PASSWORD_107891164873405600_PLACEHOLDER: "Password",
                                PASSWORD_76732333762278900_PLACEHOLDER: "Confirm password",
                                GIGYA_LITE_ACCOUNT_PROGRESSION_SCREEN_CAPTION: "Complete Your Account",
                                SUBMIT_1656946025416_VALUE: "Register Device",
                                LABEL_1656946025416_LABEL: "Please enter the verification code you see on your device",
                                GIGYA_DEVICE_CODE_VERIFICATION_SCREEN_CAPTION: "Device Registration",
                                TEXTBOX_1656946025416_PLACEHOLDER: "Enter Verification Code",
                                LABEL_1656948542313_LABEL: "<p>Thank you!</p>\n <p>Your device has been successfully registered.</p>",
                                LINK_1656954205211_LABEL: '<input type="button" class="gigya-button" value="Done" tabindex="0">',
                                GIGYA_DEVICE_CODE_THANK_YOU_SCREEN_CAPTION: "Registration Successful",
                                PASSKEY_REGISTER_WIDGET_148589704012182200_VALUE: "Add Passkey",
                                HEADER_1941735297197556_LABEL: "Sign in with passkey",
                                HEADER_2741570414924430_LABEL: "Better security and account protection",
                                HEADER_8427604072677286_LABEL: "No need to remember a password",
                                LABEL_126523004556259340_LABEL: "Passkeys are secure and phishing resistant",
                                LABEL_85984667306998110_LABEL: "Passkeys allow you to log in using fingerprint or face recognition",
                                LINK_63641313208939464_LABEL: "Continue",
                                GIGYA_PASSKEY_REGISTRATION_SCREEN_CAPTION: "Passkey Register",
                                submit_142674579108303380_value: "Submit",
                                checkbox_76374189532411820_label: "Keep me logged-in",
                                header_131443300282291300_label: "Log in with your email and password:",
                                label_48902362044111190_label: "or",
                                link_105018431100429140_label: "Don't have an account yet?",
                                link_146308315993881860_label: "Forgot password?",
                                loginid_1311311543682226_placeholder: "Email",
                                password_132128826476804690_placeholder: "Password",
                                gigya_login_screen_caption: "Login",
                                submit_7667737432077126_value: "Submit",
                                checkbox_11798816851057300_label: "Subscribe to our newsletter",
                                checkbox_79786885293367740_label: 'I have read and understood the\n <a class="gigya-terms-of-use" href="#">Terms of Use</a>',
                                header_108728337563591200_label: "Quickly register with your social network:",
                                header_63695688742051540_label: "Register with your email and password:",
                                label_139978773486588850_label: "or",
                                link_55817364832410216_label: "Have an account already?",
                                loginid_126653578050634370_placeholder: "Email",
                                password_18495765554860224_placeholder: "Retype password",
                                password_92109928057504110_placeholder: "Password",
                                gigya_register_screen_caption: "Registration",
                                textbox_72105706170970860_placeholder: "First name",
                                textbox_75385478551382400_placeholder: "Last name",
                                submit_31429658457676556_value: "Submit",
                                checkbox_76245746717438300_label: "Subscribe to our newsletter",
                                dropdown_16234574578704520_choices_0004d0b59e19461ff126e3a08a814c33: "1970",
                                dropdown_16234574578704520_choices_008bd5ad93b754d500338c253d9c1770: "1994",
                                dropdown_16234574578704520_choices_03e7d2ebec1e820ac34d054df7e68f48: "1950",
                                dropdown_16234574578704520_choices_06964dce9addb1c5cb5d6e3d9838f733: "1997",
                                dropdown_16234574578704520_choices_08f90c1a417155361a5c4b8d297e0d78: "2000",
                                dropdown_16234574578704520_choices_0950ca92a4dcf426067cfd2246bb5ff3: "1925",
                                dropdown_16234574578704520_choices_11108a3dbfe4636cb40b84b803b2fff6: "1936",
                                dropdown_16234574578704520_choices_1113d7a76ffceca1bb350bfe145467c6: "1952",
                                dropdown_16234574578704520_choices_136f951362dab62e64eb8e841183c2a9: "1937",
                                dropdown_16234574578704520_choices_139f0874f2ded2e41b0393c4ac5644f7: "1929",
                                dropdown_16234574578704520_choices_15d185eaa7c954e77f5343d941e25fbd: "1931",
                                dropdown_16234574578704520_choices_1b36ea1c9b7a1c3ad668b8bb5df7963f: "1984",
                                dropdown_16234574578704520_choices_1e4d36177d71bbb3558e43af9577d70e: "1983",
                                dropdown_16234574578704520_choices_1e913e1b06ead0b66e30b6867bf63549: "1933",
                                dropdown_16234574578704520_choices_1f36c15d6a3d18d52e8d493bc8187cb9: "1985",
                                dropdown_16234574578704520_choices_1f71e393b3809197ed66df836fe833e5: "1946",
                                dropdown_16234574578704520_choices_277a78fc05c8864a170e9a56ceeabc4c: "1957",
                                dropdown_16234574578704520_choices_29530de21430b7540ec3f65135f7323c: "1930",
                                dropdown_16234574578704520_choices_2d00f43f07911355d4151f13925ff292: "1945",
                                dropdown_16234574578704520_choices_333222170ab9edca4785c39f55221fe7: "1922",
                                dropdown_16234574578704520_choices_3683af9d6f6c06acee72992f2977f67e: "1966",
                                dropdown_16234574578704520_choices_36ac8e558ac7690b6f44e2cb5ef93322: "1949",
                                dropdown_16234574578704520_choices_378a063b8fdb1db941e34f4bde584c7d: "1955",
                                dropdown_16234574578704520_choices_39dcaf7a053dc372fbc391d4e6b5d693: "1964",
                                dropdown_16234574578704520_choices_3d863b367aa379f71c7afc0c9cdca41d: "1974",
                                dropdown_16234574578704520_choices_3f088ebeda03513be71d34d214291986: "1995",
                                dropdown_16234574578704520_choices_405e28906322882c5be9b4b27f4c35fd: "1978",
                                dropdown_16234574578704520_choices_414e773d5b7e5c06d564f594bf6384d0: "1923",
                                dropdown_16234574578704520_choices_44968aece94f667e4095002d140b5896: "1920",
                                dropdown_16234574578704520_choices_4a3e00961a08879c34f91ca0070ea2f5: "1989",
                                dropdown_16234574578704520_choices_4afd521d77158e02aed37e2274b90c9c: "1977",
                                dropdown_16234574578704520_choices_4ba29b9f9e5732ed33761840f4ba6c53: "2002",
                                dropdown_16234574578704520_choices_4d8556695c262ab91ff51a943fdd6058: "1969",
                                dropdown_16234574578704520_choices_5103c3584b063c431bd1268e9b5e76fb: "1926",
                                dropdown_16234574578704520_choices_519c84155964659375821f7ca576f095: "1942",
                                dropdown_16234574578704520_choices_52d2752b150f9c35ccb6869cbf074e48: "1932",
                                dropdown_16234574578704520_choices_5a7f963e5e0504740c3a6b10bb6d4fa5: "1954",
                                dropdown_16234574578704520_choices_5bce843dd76db8c939d5323dd3e54ec9: "1928",
                                dropdown_16234574578704520_choices_5ec829debe54b19a5f78d9a65b900a39: "1999",
                                dropdown_16234574578704520_choices_6351bf9dce654515bf1ddbd6426dfa97: "1996",
                                dropdown_16234574578704520_choices_6a508a60aa3bf9510ea6acb021c94b48: "1951",
                                dropdown_16234574578704520_choices_6f2688a5fce7d48c8d19762b88c32c3b: "1944",
                                dropdown_16234574578704520_choices_798cebccb32617ad94123450fd137104: "1979",
                                dropdown_16234574578704520_choices_7af6266cc52234b5aa339b16695f7fc4: "1941",
                                dropdown_16234574578704520_choices_7ca57a9f85a19a6e4b9a248c1daca185: "1948",
                                dropdown_16234574578704520_choices_7d2b92b6726c241134dae6cd3fb8c182: "1975",
                                dropdown_16234574578704520_choices_7f16109f1619fd7a733daf5a84c708c1: "1960",
                                dropdown_16234574578704520_choices_8562ae5e286544710b2e7ebe9858833b: "1934",
                                dropdown_16234574578704520_choices_8c249675aea6c3cbd91661bbae767ff1: "1986",
                                dropdown_16234574578704520_choices_8d55a249e6baa5c06772297520da2051: "1935",
                                dropdown_16234574578704520_choices_95e6834d0a3d99e9ea8811855ae9229d: "1940",
                                dropdown_16234574578704520_choices_95f6870ff3dcd442254e334a9033d349: "1962",
                                dropdown_16234574578704520_choices_96055f5b06bf9381ac43879351642cf5: "1991",
                                dropdown_16234574578704520_choices_98c7242894844ecd6ec94af67ac8247d: "1968",
                                dropdown_16234574578704520_choices_9d7311ba459f9e45ed746755a32dcd11: "1988",
                                dropdown_16234574578704520_choices_9f6992966d4c363ea0162a056cb45fe5: "1921",
                                dropdown_16234574578704520_choices_a38b16173474ba8b1a95bcbc30d3b8a5: "1953",
                                dropdown_16234574578704520_choices_a591024321c5e2bdbd23ed35f0574dde: "2003",
                                dropdown_16234574578704520_choices_a82d922b133be19c1171534e6594f754: "1967",
                                dropdown_16234574578704520_choices_ad4cc1fb9b068faecfb70914acc63395: "1938",
                                dropdown_16234574578704520_choices_b139e104214a08ae3f2ebcce149cdf6e: "1924",
                                dropdown_16234574578704520_choices_b3b4d2dbedc99fe843fd3dedb02f086f: "1981",
                                dropdown_16234574578704520_choices_b8b4b727d6f5d1b61fff7be687f7970f: "2004",
                                dropdown_16234574578704520_choices_c215b446bcdf956d848a8419c1b5a920: "1963",
                                dropdown_16234574578704520_choices_c3395dd46c34fa7fd8d729d8cf88b7a8: "1943",
                                dropdown_16234574578704520_choices_c4de8ced6214345614d33fb0b16a8acd: "1972",
                                dropdown_16234574578704520_choices_c5a4e7e6882845ea7bb4d9462868219b: "1993",
                                dropdown_16234574578704520_choices_c5b2cebf15b205503560c4e8e6d1ea78: "1998",
                                dropdown_16234574578704520_choices_d0fb963ff976f9c37fc81fe03c21ea7b: "2001",
                                dropdown_16234574578704520_choices_d46e1fcf4c07ce4a69ee07e4134bcef1: "1965",
                                dropdown_16234574578704520_choices_d5c186983b52c4551ee00f72316c6eaa: "1992",
                                dropdown_16234574578704520_choices_d68a18275455ae3eaa2c291eebb46e6d: "1987",
                                dropdown_16234574578704520_choices_d77f00766fd3be3f2189c843a6af3fb2: "1958",
                                dropdown_16234574578704520_choices_dc513ea4fbdaa7a14786ffdebc4ef64e: "1990",
                                dropdown_16234574578704520_choices_dd055f53a45702fe05e449c30ac80df9: "1976",
                                dropdown_16234574578704520_choices_de03beffeed9da5f3639a621bcab5dd4: "1947",
                                dropdown_16234574578704520_choices_de73998802680548b916f1947ffbad76: "1971",
                                dropdown_16234574578704520_choices_deb54ffb41e085fd7f69a75b6359c989: "1973",
                                dropdown_16234574578704520_choices_e3408432c1a48a52fb6c74d926b38886: "1956",
                                dropdown_16234574578704520_choices_e4dd5528f7596dcdf871aa55cfccc53c: "1959",
                                dropdown_16234574578704520_choices_e5b294b70c9647dcf804d7baa1903918: "1927",
                                dropdown_16234574578704520_choices_f106b7f99d2cb30c3db1c3cc0fde9ccb: "1961",
                                dropdown_16234574578704520_choices_f22e4747da1aa27e363d86d40ff442fe: "1939",
                                dropdown_16234574578704520_choices_f80bf05527157a8c2a7bb63b22f49aaa: "1980",
                                dropdown_16234574578704520_choices_fb87582825f9d28a8d42c5e5e5e8b23d: "1982",
                                dropdown_16234574578704520_label: "Year of birth:",
                                label_82751524717670350_label: "We still need a few more details:",
                                gigya_complete_registration_screen_caption: "Profile Completion",
                                textbox_136884197726350880_label: "Email:",
                                textbox_65559603100946710_label: "Postcode:",
                                submit_314293454325435_value: "Get The Code",
                                label_1555592368664_label: "A code will be sent to your mobile phone number.",
                                phone_number_input_15254487288447762_choices_0000c04b6a11cb01fa6c351d96951a94: "Anguilla (+1)",
                                phone_number_input_15254487288447762_choices_018ae104e95a884c0ef61987a4bca33b: "Solomon Islands (+677)",
                                phone_number_input_15254487288447762_choices_019e354fde6080c71a2078d7689d015c: "Brazil (+55)",
                                phone_number_input_15254487288447762_choices_02cc7d66e001c3e70d74755b7c3b8cc4: "Philippines (+63)",
                                phone_number_input_15254487288447762_choices_044e84571f705b4449cc30f9010b7457: "Greenland (+299)",
                                phone_number_input_15254487288447762_choices_049c0fef53053801cd4b2dd07d27e34e: "Denmark (+45)",
                                phone_number_input_15254487288447762_choices_093a60d935c4b98fe0974318efefbd2a: "Georgia (+995)",
                                phone_number_input_15254487288447762_choices_09dfbaa95005c05961464f3fd07a73c9: "Gabon (+241)",
                                phone_number_input_15254487288447762_choices_0a07706d6aae7d5fac405e73dca5a230: "Ghana (+233)",
                                phone_number_input_15254487288447762_choices_0a86459132d51157f5b110a28785fab1: "Swaziland (+268)",
                                phone_number_input_15254487288447762_choices_0b67e604b8fe452617cfa3b1ce27d771: "Rwanda (+250)",
                                phone_number_input_15254487288447762_choices_0b6d697f2c0204573a65988cc05949ca: "Venezuela (+58)",
                                phone_number_input_15254487288447762_choices_0b7991bc3d17112c050ad75d7002be4a: "French Polynesia (+689)",
                                phone_number_input_15254487288447762_choices_0c7dd38e5919a23f0fe33ed8e7b61bcd: "Iraq (+964)",
                                phone_number_input_15254487288447762_choices_0eb55a926d3f16275dc53b4bd9559107: "East Timor (+670)",
                                phone_number_input_15254487288447762_choices_0fb4fec2ba2ca49124958fb16365b9e6: "Nicaragua (+505)",
                                phone_number_input_15254487288447762_choices_10491cb01667eed09f957cd7975032cb: "Puerto Rico (+1)",
                                phone_number_input_15254487288447762_choices_10b0f24a19eef030c3e26dca73a591a5: "Macedonia (+389)",
                                phone_number_input_15254487288447762_choices_1179a92ec9a28334e0a559c64f6bbc78: "Mali (+223)",
                                phone_number_input_15254487288447762_choices_12308cc3d4cc2fb855383a8dc9d728bf: "Lithuania (+370)",
                                phone_number_input_15254487288447762_choices_1324137f09564ed3f8370a56c4c646cf: "Togo (+228)",
                                phone_number_input_15254487288447762_choices_15610e11e4fb7489e79c6d1e245b2bdf: "Serbia (+381)",
                                phone_number_input_15254487288447762_choices_17e9204b939277581ea401f786e4d705: "Morocco (+212)",
                                phone_number_input_15254487288447762_choices_183b1e1c670d1ef64d74e32ec4e9348d: "Australia (+61)",
                                phone_number_input_15254487288447762_choices_1ac4bb54e5f417a8ed8bd80d0601696b: "Spain (+34)",
                                phone_number_input_15254487288447762_choices_1c85b37f22e56195407271c65e12f6b2: "Egypt (+20)",
                                phone_number_input_15254487288447762_choices_203161dae0f2145386430c8f78a054c0: "United Kingdom (+44)",
                                phone_number_input_15254487288447762_choices_20d20d19c28939efbd7e6e36a8d3d3ff: "Barbados (+1)",
                                phone_number_input_15254487288447762_choices_212b0d7c2256feb06ee9f0663ecacd1c: "South Africa (+27)",
                                phone_number_input_15254487288447762_choices_232618c6fa5a962c6547def41609ce3e: "Ukraine (+380)",
                                phone_number_input_15254487288447762_choices_23efb14abf1868ae2c351b956fe12278: "Botswana (+267)",
                                phone_number_input_15254487288447762_choices_25f2ba239b091210ca080d221ffbd51d: "Sierra Leone (+232)",
                                phone_number_input_15254487288447762_choices_2655ed45019a53e98278854c1800a41a: "Liechtenstein (+423)",
                                phone_number_input_15254487288447762_choices_267c3d5900a14625ccebf843e1113579: "Pakistan (+92)",
                                phone_number_input_15254487288447762_choices_26cf7de002149e85347c2cddd34c43fb: "Costa Rica (+506)",
                                phone_number_input_15254487288447762_choices_275c81699c9ca9dd1bd589a82f09aff2: "French Guiana (+594)",
                                phone_number_input_15254487288447762_choices_278ec1e91dbd6da31a9546bc16ff9acf: "Cuba (+53)",
                                phone_number_input_15254487288447762_choices_27e4a0c1e5118ea9eb28dc68bb44a389: "Saint Lucia (+1)",
                                phone_number_input_15254487288447762_choices_27fd3852136408b2e80c42abe85fe888: "Benin (+229)",
                                phone_number_input_15254487288447762_choices_28db04efd361dc70b1230cdc1a84cf7a: "Brunei (+673)",
                                phone_number_input_15254487288447762_choices_29d4173c28f9ba028e1fefd8f5b17607: "Jordan (+962)",
                                phone_number_input_15254487288447762_choices_2b7fc2c51021c92e461a91bcd4c77222: "Panama (+507)",
                                phone_number_input_15254487288447762_choices_2b9c96e2e465f06b1e947a1abf1f82cc: "Latvia (+371)",
                                phone_number_input_15254487288447762_choices_2c494efcf244731678fd8c2ef14f3b66: "Bhutan (+975)",
                                phone_number_input_15254487288447762_choices_2d2e0b57e53318d06a3a989618595d2d: "Yemen (+967)",
                                phone_number_input_15254487288447762_choices_2d309595e0f8c76a69fc6b66e3aee2de: "Malta (+356)",
                                phone_number_input_15254487288447762_choices_302f0a2bddb3285a0d7e26676109fc06: "Montenegro (+382)",
                                phone_number_input_15254487288447762_choices_311cfd698e0dc61134cbb6f3b9c91bae: "Gambia (+220)",
                                phone_number_input_15254487288447762_choices_32abf11fb772561b45fae98173cef6f6: "New Caledonia (+687)",
                                phone_number_input_15254487288447762_choices_32c902ff3266e8a06d44121eb60f070b: "United States (+1)",
                                phone_number_input_15254487288447762_choices_3345950e1892b722e378bfe9d845872f: "Slovenia (+386)",
                                phone_number_input_15254487288447762_choices_371ceacf25ed39729bbfcc06c0908bfc: "Ireland (+353)",
                                phone_number_input_15254487288447762_choices_382b4143d3fb755c6553e796350644d3: "Jersey (+44)",
                                phone_number_input_15254487288447762_choices_3a3f7b3a7c161bfe383d008e10fccd4c: "Armenia (+374)",
                                phone_number_input_15254487288447762_choices_3a4a6140cf0ea62d25a9de1a6079458d: "Slovakia (+421)",
                                phone_number_input_15254487288447762_choices_3a78a91cffa196dee4a8454fae5271d4: "Azerbaijan (+994)",
                                phone_number_input_15254487288447762_choices_3c70e69be44a86fc852ef8ec2d3c3d2a: "Tanzania (+255)",
                                phone_number_input_15254487288447762_choices_3ccc0920ecf6aa39031e2309f848f0fc: "British Indian Ocean Territory (+1)",
                                phone_number_input_15254487288447762_choices_3cf400c815b9f3ee81cda1ce6e6aed05: "Greece (+30)",
                                phone_number_input_15254487288447762_choices_3e3c87b19ba3bc4bcf454945c29b6125: "Bermuda (+1)",
                                phone_number_input_15254487288447762_choices_3ee9b3c1ad61a60f5593ff19eb4cb887: "Madagascar (+261)",
                                phone_number_input_15254487288447762_choices_3f689beae4ff52b7021c755fc5ac99e7: "Ecuador (+593)",
                                phone_number_input_15254487288447762_choices_3fc6ed9787b1b760ceabf91679c26878: "Congo (+242)",
                                phone_number_input_15254487288447762_choices_42495073b157f93e836b72b07def2f2c: "Qatar (+974)",
                                phone_number_input_15254487288447762_choices_42f14fd8c4866c266d51ec4718a19158: "Saint Kitts and Nevis (+1)",
                                phone_number_input_15254487288447762_choices_440d1471cbab9266505137c1c45f3ed4: "Uganda (+256)",
                                phone_number_input_15254487288447762_choices_44744c30c3db65036ebb94079c58b6e3: "Colombia (+57)",
                                phone_number_input_15254487288447762_choices_45c9b64a3cecccce49843dbafe6adb64: "Czech Republic (+420)",
                                phone_number_input_15254487288447762_choices_45eb8706e13c8e358d97c730312e90ae: "Grenada (+1)",
                                phone_number_input_15254487288447762_choices_4921a12350b932d23d31d8b5868d6f04: "Lesotho (+266)",
                                phone_number_input_15254487288447762_choices_4955c9c5078a1b26da786e00d4c71829: "Sudan (+249)",
                                phone_number_input_15254487288447762_choices_4a67165a23bf87c2823af4d85209a854: "Hong Kong (+852)",
                                phone_number_input_15254487288447762_choices_4a73df4c96b5d4da40c2a7254604c1ba: "Libya (+218)",
                                phone_number_input_15254487288447762_choices_4b98171607bc7ff3007babec7f3e47da: "Kyrgyzstan (+996)",
                                phone_number_input_15254487288447762_choices_4f0b7f8eb20fb16d579581fb4fd438f6: "Sweden (+46)",
                                phone_number_input_15254487288447762_choices_530f4e0e790a543d9ec308072314beba: "Paraguay (+595)",
                                phone_number_input_15254487288447762_choices_55b7d584f14d787e069917cbcad8f858: "Cameroon (+237)",
                                phone_number_input_15254487288447762_choices_55bb4b263289ff947007a2ff574b8a54: "Moldova (+373)",
                                phone_number_input_15254487288447762_choices_55f06b247ea51b5534cb9b58c530703e: "Gibraltar (+350)",
                                phone_number_input_15254487288447762_choices_58a4655174124fcbec0ea83ed121901e: "Kenya (+254)",
                                phone_number_input_15254487288447762_choices_5a263c957067f1868ed88cf1db1f9691: "China (+86)",
                                phone_number_input_15254487288447762_choices_5ae79ddda6f16ecf9450ebe8c41e268f: "Tajikistan (+992)",
                                phone_number_input_15254487288447762_choices_5c8745a9652fa0fb450e22eee803e8f8: "Chile (+56)",
                                phone_number_input_15254487288447762_choices_5d14311dd7b2184b182eced0db4f2a23: "Suriname (+597)",
                                phone_number_input_15254487288447762_choices_5dfc83751ab9d5ce392283e37225ceeb: "Kazakhstan (+7)",
                                phone_number_input_15254487288447762_choices_6115fc90431687f6fc349bf5bfe58f60: "Burkina Faso (+226)",
                                phone_number_input_15254487288447762_choices_61817bc8a708b5aab1d0dd9467ceabed: "Mauritania (+222)",
                                phone_number_input_15254487288447762_choices_61ef21fdc5515a90cfaa8babfc3cddac: "Singapore (+65)",
                                phone_number_input_15254487288447762_choices_64089efc30466cd81b53e16ea08c67bf: "Belize (+501)",
                                phone_number_input_15254487288447762_choices_6554b2ff3a5978291c0f7376ab26c848: "Syria (+963)",
                                phone_number_input_15254487288447762_choices_6562c71449c1704c676a13e1a5c18bfb: "Congo, The Democratic Republic Of The (+243)",
                                phone_number_input_15254487288447762_choices_65cec708b5d89d0d2457855b9d6a94ac: "Fiji (+679)",
                                phone_number_input_15254487288447762_choices_6674f7653960bbcb2814203115668763: "Wallis And Futuna (+681)",
                                phone_number_input_15254487288447762_choices_669b9b9bbaf86e1a8fc4d8902fc77026: "Italy (+39)",
                                phone_number_input_15254487288447762_choices_66c3ca97838b58714792c897b385edc6: "Mozambique (+258)",
                                phone_number_input_15254487288447762_choices_67927b31be826b2d544f23b3f3d115d7: "Cape Verde (+238)",
                                phone_number_input_15254487288447762_choices_6a75ee0f96c5b8db62a17b1f861e1b5e: "Equatorial Guinea (+240)",
                                phone_number_input_15254487288447762_choices_6b2aa1100bfb1887da27c9cd384e09fe: "Finland (+358)",
                                phone_number_input_15254487288447762_choices_6b7e29c7a90813b182e4e993a44086ff: "Liberia (+231)",
                                phone_number_input_15254487288447762_choices_6bcc55c5eadbded564cf32359773cbfe: "Guernsey (+44)",
                                phone_number_input_15254487288447762_choices_6d27a5e78eccd03ee33d87bf3d2b2cc8: "Reunion (+262)",
                                phone_number_input_15254487288447762_choices_6d3eb5c5a30dc5b6fd0035201cad19e0: "Estonia (+372)",
                                phone_number_input_15254487288447762_choices_6d8723cf044baebe059b9d2d7330ca42: "United Arab Emirates (+971)",
                                phone_number_input_15254487288447762_choices_6eed2e14ccf08f75ae0a55db12e9c653: "Honduras (+504)",
                                phone_number_input_15254487288447762_choices_6f2ecc1c256c31fd43ed1157bccc95b0: "Saint Vincent (+1)",
                                phone_number_input_15254487288447762_choices_6f4c92c83fc32220ed8152ae62bde311: "Romania (+40)",
                                phone_number_input_15254487288447762_choices_7087d94e0dd6463ec57a0f1a55a46cfd: "Haiti (+509)",
                                phone_number_input_15254487288447762_choices_71e3fefdc6441c1c112ef263de1bf8ed: "Mexico (+52)",
                                phone_number_input_15254487288447762_choices_72dace1c7d7c48fe87ad9ef93da8880e: "Palestine (+970)",
                                phone_number_input_15254487288447762_choices_730a5d1990016281cb11952a3f377f69: "Trinidad And Tobago (+1)",
                                phone_number_input_15254487288447762_choices_731fb8dcdfcef1d997aa13322da40476: "Seychelles (+248)",
                                phone_number_input_15254487288447762_choices_749b0cd97119801ff9880e5768ae1ed7: "Turkmenistan (+993)",
                                phone_number_input_15254487288447762_choices_75037f764cb144b6889a5f8171c1a27c: "Cayman Islands (+1)",
                                phone_number_input_15254487288447762_choices_7d307fbc5ebe3972706e3d898cc4be25: "Hungary (+36)",
                                phone_number_input_15254487288447762_choices_7db34ba7afccf77c4eb1ae5e3f530503: "Bolivia (+591)",
                                phone_number_input_15254487288447762_choices_7eea32ecaf8c58bc414082080b65dbb3: "Kuwait (+965)",
                                phone_number_input_15254487288447762_choices_8192604e90d83cba3dccbad2eddf1641: "Albania (+355)",
                                phone_number_input_15254487288447762_choices_87bb8668cb0004ce94f6aedc96af8267: "Ethiopia (+251)",
                                phone_number_input_15254487288447762_choices_88c55d93f6412dac30afef87ec950dd0: "Maldives (+960)",
                                phone_number_input_15254487288447762_choices_8d8d9f79dc287c775bb06fffc8ae1916: "Burundi (+257)",
                                phone_number_input_15254487288447762_choices_8e64ea7e5afbec88581b9e3c5874c142: "Russia (+7)",
                                phone_number_input_15254487288447762_choices_9072a83b2e107216cebd634a35592127: "Saudi Arabia (+966)",
                                phone_number_input_15254487288447762_choices_92307f98981c17da9fcd08a423b23c19: "Djibouti (+253)",
                                phone_number_input_15254487288447762_choices_92c3161ef8c78034409b97dba2732119: "Guatemala (+502)",
                                phone_number_input_15254487288447762_choices_94a38fcf50215c63446441275bd91cbc: "Poland (+48)",
                                phone_number_input_15254487288447762_choices_950483525aa1ecaf75bb5491f351f24e: "Martinique (+596)",
                                phone_number_input_15254487288447762_choices_990e8ace85837fccd2deb0a7ae3321a2: "Senegal (+221)",
                                phone_number_input_15254487288447762_choices_9d79de4e7e64235407d4f3133fe392bc: "Malawi (+265)",
                                phone_number_input_15254487288447762_choices_9f466db3d9d9bacd7cf95e5b1e8e5441: "Israel (+972)",
                                phone_number_input_15254487288447762_choices_a0b099b5cd051341b3bf75beb79c2ff8: "Viet Nam (+84)",
                                phone_number_input_15254487288447762_choices_a11fed9a6570c0647a1baac8c1dac6d7: "India (+91)",
                                phone_number_input_15254487288447762_choices_a65485c739f76bff7e05413d23e7a03e: "Bahrain (+973)",
                                phone_number_input_15254487288447762_choices_a7739d75d45b95186806f13f033335fd: "Vanuatu (+678)",
                                phone_number_input_15254487288447762_choices_a87b73b3e1dba418432eb94a08432244: "Angola (+244)",
                                phone_number_input_15254487288447762_choices_a8baa0e29d70f8ad7dfc86916fb39346: "Portugal (+351)",
                                phone_number_input_15254487288447762_choices_a9dc19bb94c6904a27d41ef904232199: "Tonga (+676)",
                                phone_number_input_15254487288447762_choices_aaf2b5c1afc80bef1a58a669fa7dc9bf: "Belgium (+32)",
                                phone_number_input_15254487288447762_choices_ab5694a7d9ab79112fe99d42cbc7a0ef: "Argentina (+54)",
                                phone_number_input_15254487288447762_choices_ac2cec8fff07429f388098bb9aab86a4: "Cambodia (+855)",
                                phone_number_input_15254487288447762_choices_acc738496f403a6822eb6b395c0ea4ee: "Thailand (+66)",
                                phone_number_input_15254487288447762_choices_ad51c2f6e99db2db0da65eefc00273aa: "Sri Lanka (+94)",
                                phone_number_input_15254487288447762_choices_afd663ccf14ce0ee7f81613b40b78d18: "Montserrat (+1)",
                                phone_number_input_15254487288447762_choices_affb5abfa8f1922289cc313edf80b231: "Macao (+853)",
                                phone_number_input_15254487288447762_choices_b042bd504749951ebb8fc489795a286f: "Uruguay (+598)",
                                phone_number_input_15254487288447762_choices_b1b400960194ab272577c6b573db2d9c: "Bangladesh (+880)",
                                phone_number_input_15254487288447762_choices_b6507bb6f51b01321a3b87b8d0acc714: "Luxembourg (+352)",
                                phone_number_input_15254487288447762_choices_ba08cdf6c826861e2a337576df8fe264: "Switzerland (+41)",
                                phone_number_input_15254487288447762_choices_ba27c72455163e3eb029847d532650c6: "Dominica (+1)",
                                phone_number_input_15254487288447762_choices_ba6cd9fe5a3ac9438f09f845773bc2b7: "Falkland Islands (Malvinas) (+500)",
                                phone_number_input_15254487288447762_choices_bc6935c7c49ab605dda2d1db14d391d4: "Andorra (+376)",
                                phone_number_input_15254487288447762_choices_bcdb41b851402fa9c47dbb0e4bdfa28d: "Afghanistan (+93)",
                                phone_number_input_15254487288447762_choices_bcded8077ca928b0ac5d7b6dd244b9f3: "Tunisia (+216)",
                                phone_number_input_15254487288447762_choices_bd7b017b83c86393d5afbccf09b39535: "Belarus (+375)",
                                phone_number_input_15254487288447762_choices_be31195109c26343b81aca710e3f08be: "Northern Mariana Islands (+1)",
                                phone_number_input_15254487288447762_choices_c0593b6d09969bf4c32a684df2ac4a7d: "Guam (+1)",
                                phone_number_input_15254487288447762_choices_c0f4c393ade23e94388a619d2d28469c: "Cyprus (+357)",
                                phone_number_input_15254487288447762_choices_c12934b2fb7a79f37d8d2730a02ff325: "Bosnia And Herzegovina (+387)",
                                phone_number_input_15254487288447762_choices_c2445ca2adaa6d2352e6b5342c51848a: "Myanmar (+95)",
                                phone_number_input_15254487288447762_choices_c5dd5aadb4791d0799ddf499fbacfd3a: "Turkey (+90)",
                                phone_number_input_15254487288447762_choices_c6008329def3854ab786638735e3dcf8: "Virgin Islands, British (+1)",
                                phone_number_input_15254487288447762_choices_c683d0ed1e24da7b22c9c5283c1c0822: "Iran (+98)",
                                phone_number_input_15254487288447762_choices_c87c486958dcd8cfb22f6fac15bd3c36: "Aruba (+297)",
                                phone_number_input_15254487288447762_choices_c9530e692e6c6b0631172c859262ce15: "Antigua and Barbuda (+1)",
                                phone_number_input_15254487288447762_choices_c9f85d89f977d07694b8847b2f21c17a: "Niger (+227)",
                                phone_number_input_15254487288447762_choices_cb3868a3df027a768524b1799256d7e9: "Bulgaria (+359)",
                                phone_number_input_15254487288447762_choices_cb425265b02770cbf6aa66d862bf17d5: "Jamaica (+1)",
                                phone_number_input_15254487288447762_choices_cc6ed73bf623aeb7707047ae998d364a: "Canada (+1)",
                                phone_number_input_15254487288447762_choices_ce097694c2eb14ad8ded90d528cb1b5a: "Malaysia (+60)",
                                phone_number_input_15254487288447762_choices_ce79906b4a47aea9faa59151bd0a8c06: "Faroe Islands (+298)",
                                phone_number_input_15254487288447762_choices_d07d47ea18447405dec7ce0d8d61a448: "Zimbabwe (+263)",
                                phone_number_input_15254487288447762_choices_d08b3f47c06392c08c3863c3e8453ffc: "Cote d\\'Ivoire (+225)",
                                phone_number_input_15254487288447762_choices_d239539b3277579fa37285d30b9c4c3e: "Algeria (+213)",
                                phone_number_input_15254487288447762_choices_d6318a3f72bb34864386b79edbc391c7: "Peru (+51)",
                                phone_number_input_15254487288447762_choices_d654e0248440598c819c9e1cec040605: "Laos (+856)",
                                phone_number_input_15254487288447762_choices_d67b6f9fe85b2bc4969d07b757ed28ac: "Japan (+81)",
                                phone_number_input_15254487288447762_choices_d9ced68e11939c33ce6512548de5473e: "Indonesia (+62)",
                                phone_number_input_15254487288447762_choices_dc134898cc21c30fa1a767dc889bc9c7: "Norway (+47)",
                                phone_number_input_15254487288447762_choices_de08effc4128aedd10379ea73823d5cc: "Nepal (+977)",
                                phone_number_input_15254487288447762_choices_de435b513ccda1ac711ff10954cb25bd: "New Zealand (+64)",
                                phone_number_input_15254487288447762_choices_de9675f429c298a1d3823e8cb122d99b: "Somalia (+252)",
                                phone_number_input_15254487288447762_choices_e0836b3330a25a9b8e6b90060cb95a5e: "Nigeria (+234)",
                                phone_number_input_15254487288447762_choices_e1329e5b6318c778116918397ebc9c4f: "Uzbekistan (+998)",
                                phone_number_input_15254487288447762_choices_e154e7a6de015871c40a71c833bbd32b: "Guadeloupe (+590)",
                                phone_number_input_15254487288447762_choices_e3b73ca00640a2e9cc7819c373365f1d: "Chad (+235)",
                                phone_number_input_15254487288447762_choices_e40528d8028f52e2724182c93e5aa385: "Netherlands Antilles (+599)",
                                phone_number_input_15254487288447762_choices_e62457f72d933dbcb44aab91dfda8874: "Mongolia (+976)",
                                phone_number_input_15254487288447762_choices_e63eeb8515dbb9e3bc9af51ad6583a55: "El Salvador (+503)",
                                phone_number_input_15254487288447762_choices_e6f770859fde5760cbcf83beaf9eb993: "Guyana (+592)",
                                phone_number_input_15254487288447762_choices_e6ffc6d8240e701ece6599ec8cf45cf4: "Taiwan (+886)",
                                phone_number_input_15254487288447762_choices_e8258ab6de76b8219d7102f1b44c845d: "Isle Of Man (+44)",
                                phone_number_input_15254487288447762_choices_e909c2d7067ea37437cf97fe11d91bd0: "country",
                                phone_number_input_15254487288447762_choices_ec63c956defbd581c0fd9518e2aa3d41: "Lebanon (+961)",
                                phone_number_input_15254487288447762_choices_ee3d98f7ee6c591a0102fd475fac8aa3: "France (+33)",
                                phone_number_input_15254487288447762_choices_efd933f4decb4bb1004e4241e0731ed4: "Dominican Republic (+1)",
                                phone_number_input_15254487288447762_choices_f0e7f4c4b4e525ee7957a3fea865118a: "Mauritius (+230)",
                                phone_number_input_15254487288447762_choices_f0e977f8e3c559a6a21b06ac12cfd149: "Monaco (+377)",
                                phone_number_input_15254487288447762_choices_f163162463d352ff5c3c24301c39a702: "Germany (+49)",
                                phone_number_input_15254487288447762_choices_f265600c9d75b9386b863d2d74f56959: "Namibia (+264)",
                                phone_number_input_15254487288447762_choices_f29a808e9bb2c0baa651ff9ef78ad4c4: "Guinea (+224)",
                                phone_number_input_15254487288447762_choices_f3b0eec83fb9f59726a0a52920acaa13: "Oman (+968)",
                                phone_number_input_15254487288447762_choices_f73f1d7ba0caf645118a9e8149ec346b: "Zambia (+260)",
                                phone_number_input_15254487288447762_choices_f9096b7627dd12471bc163cb0e1392bb: "Korea, South (+82)",
                                phone_number_input_15254487288447762_choices_fa4671e2748a698f1b80a643827f5fa1: "Croatia (+385)",
                                phone_number_input_15254487288447762_choices_fb7b615ab2121ec76cecb5fa2cad104e: "Austria (+43)",
                                phone_number_input_15254487288447762_choices_fcacde06c2b867e33fbc821f32d4c765: "Iceland (+354)",
                                phone_number_input_15254487288447762_choices_fec85feea479735d94a3f27756825567: "Netherlands (+31)",
                                phone_number_input_15254487288447762_display_name: "phone number",
                                phone_number_input_15254487288447762_legend: "Enter your mobile number:",
                                phone_number_input_15254487288447762_placeholder: "subscriber number",
                                gigya_mobile_login_screen_caption: "Log In With Your Mobile Phone",
                                submit_31429890890890_value: "Verify",
                                label_1555593146287_label: 'Enter the code sent to your phone <a data-binding="true" data-switch-screen="gigya-mobile-login-screen"> {{accountInfo.phoneNumber}}\n <i class="gigya-pencil"></i></a>',
                                label_546546790858_label: 'Didn\'t get the code? <a data-disable-on-render="true" data-gigya-api-link="accounts.otp.sendCode">Click Here</a>',
                                gigya_mobile_verification_screen_caption: "Enter The Code",
                                submit_137794634987176350_value: "Get The Code",
                                label_56426764264083580_label: "A code will be sent to the new email for\n verification. If you don't validate with the code, your email will remain unchanged.",
                                gigya_change_email_screen_caption: "Change Your Email",
                                textbox_20913098960397852_label: "Email",
                                submit_106757411555670860_value: "Verify",
                                label_124580104205672500_label: 'Enter the code sent to your email <a data-binding="true" data-switch-screen="gigya-change-email-screen"> {{accountInfo.email}}\n <i class="gigya-pencil"></i></a>',
                                label_45421446589093550_label: 'Didn\'t get the code? <a data-disable-on-render="true" data-gigya-api-link="accounts.otp.sendCode">Click Here</a>',
                                gigya_email_code_verification_screen_caption: "Enter The Code",
                                submit_81725475708397440_value: "Submit",
                                label_47776247120507590_label: "Please enter your email address to reset your password:",
                                link_125263109889403890_label: "Back to Login",
                                loginid_1762354922073180_label: "Email:",
                                gigya_forgot_password_screen_caption: "Forgot Password",
                                label_32342199862391930_label: "An email regarding your password change has been sent to your email address.",
                                link_64563424514074200_label: '<input tabindex="0" type="button" value="Back to Login">',
                                gigya_forgot_password_success_screen_caption: "Forgot Password",
                                submit_1640252814218_value: "Get The Code",
                                label_1640252757841_label: "A code will be sent to your mobile phone number.",
                                gigya_mobile_forgot_password_screen_caption: "Forgot Password",
                                submit_1640253788797_value: "Verify",
                                label_1640253752471_label: 'Enter the code sent to your phone <a data-binding="true" data-switch-screen="gigya-mobile-forgot-password-screen"> {{accountInfo.phoneNumber}}\n <i class="gigya-pencil"></i></a>',
                                label_1640253816271_label: 'Didn\'t get the code? <a data-disable-on-render="true" data-gigya-api-link="accounts.otp.sendCode">Click Here</a>',
                                gigya_mobile_forgot_password_verification_screen_caption: "Enter The Code",
                                submit_48518527117736720_value: "Submit",
                                label_31901611131936240_label: "Please enter a new password:",
                                password_24487772290225964_label: "New password:",
                                password_53816046531769560_label: "Confirm password:",
                                gigya_reset_password_screen_caption: "Reset Password",
                                label_43754194743648540_label: "Your password has been changed successfully.<br>Log in with your new password.",
                                link_122104312720648740_label: '<input tabindex="0" type="button" value="Back to Login">',
                                gigya_reset_password_success_screen_caption: "Reset Password",
                                submit_65931489860940900_value: "Submit",
                                label_16240548663414458_label: "For security reasons, your password needs changing:",
                                password_101426512808638880_label: "Current password:",
                                password_17036595420608126_label: "New password:",
                                password_19612919353342308_label: "Confirm new password:",
                                gigya_password_change_required_screen_caption: "Password Change",
                                submit_59040383411520670_value: "Submit",
                                label_114745734160901840_label: "For your security, a verification email has been sent to you. Please follow the instructions in the\n email to verify your account.<br><br>To resend the verification email, please enter your email\n address below and click Submit.",
                                label_135099439990555600_label: '<a data-switch-screen="gigya-login-screen">Log in with a different account</a>',
                                gigya_verification_pending_screen_caption: "Email Verification",
                                textbox_53553186815043370_label: "Email:",
                                gigya_tfa_registration_screen_caption: "Securing Your Account",
                                gigya_tfa_verification_screen_caption: "Verifying Your Account",
                                label_4529849558267223_label: "A verification email with a link to verify your account has been sent to you.",
                                link_19224603862200704_label: '<input type="button" class="gigya-button" value="OK" tabindex="0">',
                                gigya_verification_sent_screen_caption: "Email Verification",
                                submit_55211342470297420_value: "Submit",
                                checkbox_78285840404140770_label: 'I have read and understood the <a class="gigya-terms-of-use" href="#">Terms of Use</a>',
                                header_51697213698355980_label: "Provide a password:",
                                password_107891164873405600_placeholder: "Password",
                                password_76732333762278900_placeholder: "Confirm password",
                                gigya_lite_account_progression_screen_caption: "Complete Your Account",
                                submit_1656946025416_value: "Register Device",
                                label_1656946025416_label: "Please enter the verification code you see on your device",
                                gigya_device_code_verification_screen_caption: "Device Registration",
                                textbox_1656946025416_placeholder: "Enter Verification Code",
                                label_1656948542313_label: "<p>Thank you!</p>\n <p>Your device has been successfully registered.</p>",
                                link_1656954205211_label: '<input type="button" class="gigya-button" value="Done" tabindex="0">',
                                gigya_device_code_thank_you_screen_caption: "Registration Successful",
                                passkey_register_widget_148589704012182200_value: "Add Passkey",
                                header_1941735297197556_label: "Sign in with passkey",
                                header_2741570414924430_label: "Better security and account protection",
                                header_8427604072677286_label: "No need to remember a password",
                                label_126523004556259340_label: "Passkeys are secure and phishing resistant",
                                label_85984667306998110_label: "Passkeys allow you to log in using fingerprint or face recognition",
                                link_63641313208939464_label: "Continue",
                                gigya_passkey_registration_screen_caption: "Passkey Register"
                            }
                        }
                    }
                }
            },
            resolver: {
                defaultProccessor: function defaultProccessor() {}
            }
        },
        _groupsStack: [],
        _currColorIdx: 0,
        configKey: "gig_loggerConfig",
        _console: {
            debug: function debug() {},
            error: function error() {},
            info: function info() {},
            log: function log() {},
            warn: function warn() {},
            dir: function dir() {},
            dirxml: function dirxml() {},
            table: function table() {},
            trace: function trace() {},
            group: function group() {},
            groupCollapsed: function groupCollapsed() {},
            groupEnd: function groupEnd() {},
            clear: function clear() {},
            count: function count() {},
            countReset: function countReset() {},
            assert: function assert() {},
            profile: function profile() {},
            profileEnd: function profileEnd() {},
            time: function time() {},
            timeLog: function timeLog() {},
            timeEnd: function timeEnd() {},
            timeStamp: function timeStamp() {},
            context: function context() {},
            createTask: function createTask() {},
            memory: {}
        },
        _config: {
            logLevel: 0,
            clientMuteLevel: 0,
            logTheme: 1
        },
        _random: function _random() {},
        _jsonp: function _jsonp() {}
    },
    isReady: true,
    ClientFeature: function ClientFeature() {},
    flow: function flow() {},
    showDebugUI: function showDebugUI() {}
};
