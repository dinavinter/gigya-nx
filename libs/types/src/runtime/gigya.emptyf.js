var gigya = {
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
            instances: {
                screenSet: {
                    params: {
                        screenSet: "Default-RegistrationLogin",
                        connectWithoutLoginBehavior: "alwaysLogin",
                        defaultRegScreenSet: "Default-RegistrationLogin",
                        defaultMobileRegScreenSet: "Default-RegistrationLogin",
                        sessionExpiration: 0,
                        rememberSessionExpiration: 0,
                        apiDomain: "eu1.gigya.com",
                        lang: "en",
                        APIKey: "4_aeFS_UyzRnmP5k_MI59ejg",
                        startScreen: "gigya-register-screen",
                        apiKey: "4_aeFS_UyzRnmP5k_MI59ejg",
                        source: "showScreenSet",
                        pluginsStack: [
                            {
                                source: "showScreenSet"
                            }
                        ],
                        lastSource: "showScreenSet",
                        _reportedLoad: true,
                        instanceID: "screenSet",
                        onDisposed: [
                            function() {}
                        ],
                        deviceType: "auto"
                    },
                    explicitParams: {
                        screenSet: "Default-RegistrationLogin",
                        startScreen: "gigya-register-screen",
                        apiKey: "4_aeFS_UyzRnmP5k_MI59ejg"
                    },
                    _logger: {
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
                                timeOrigin: 1701632270069.3,
                                timing: {
                                    connectStart: 1701632270135,
                                    navigationStart: 1701632270069,
                                    secureConnectionStart: 1701632270138,
                                    fetchStart: 1701632270106,
                                    domContentLoadedEventStart: 1701632271379,
                                    responseStart: 1701632270140,
                                    domInteractive: 1701632270635,
                                    domainLookupEnd: 1701632270135,
                                    responseEnd: 1701632270142,
                                    redirectStart: 0,
                                    requestStart: 1701632270139,
                                    unloadEventEnd: 1701632270604,
                                    unloadEventStart: 1701632270604,
                                    domLoading: 1701632270632,
                                    domComplete: 1701632271415,
                                    domainLookupStart: 1701632270135,
                                    loadEventStart: 1701632271415,
                                    domContentLoadedEventEnd: 1701632271379,
                                    loadEventEnd: 1701632271415,
                                    redirectEnd: 0,
                                    connectEnd: 1701632270139
                                },
                                navigation: {
                                    type: 1,
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
                                        _closeComponent: function _closeComponent() {}
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
                                        _flashListenerID: "flid1701632271410",
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
                                        bindings: []
                                    }
                                },
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
                                    initTime: "2023-12-03T19:37:51.407Z",
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
                                    }
                                },
                                __screenSetPluginCache: {}
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
                    _eventDispatcher: function _eventDispatcher() {},
                    _isDisposed: false,
                    _eventWrappers: {
                        onDisposed: {}
                    },
                    _globalEventHandlers: {},
                    _id: 1,
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
                    },
                    _pixelRatio: 2,
                    _imgBase: "https://cdns1.gigya.com/gs/i/",
                    _imgExt: "png",
                    MOBILE_MODAL_MIN_WIDTH: 400,
                    lang: "en",
                    _style: 3,
                    _poller: {
                        _logger: function _logger() {},
                        _actions: [
                            {
                                _propery: "container",
                                callback: function callback() {}
                            }
                        ]
                    },
                    POLL_INTERVAL: 150,
                    config: {
                        name: "screenSet",
                        namespace: "accounts",
                        methodName: "showScreenSet",
                        jsName: "gigya.services.accounts.plugins.screenSet",
                        requiredParams: [
                            "screenSet"
                        ],
                        defaultParams: {
                            screenSet: ""
                        },
                        defaultModalParams: {
                            screenSet: ""
                        },
                        defaultDeviceType: 3,
                        hasMobileUI: true,
                        allowModal: true,
                        disableModalContainerInit: true,
                        defaultDialogStyle: 2,
                        supportsResponsive: true,
                        enableSizePolling: true,
                        enableViewportPolling: true
                    },
                    localizedJsName: "gigya.services.accounts.plugins.screenSet.js",
                    _addedCSS: false,
                    _screens: {},
                    _random: 0.1054651102795292,
                    _placeholderIntervalID: -1,
                    onUserStateChange: function onUserStateChange() {},
                    isModal: true,
                    _templates: {
                        legacyModal: '<div id="gigya-screen-dialog-page-overlay" style="display:${overlayDisplay}"></div>\n<div class="gigya-screen-dialog-inner">\n    <div class="gigya-screen-dialog-top">\n        <div class="gigya-screen-dialog-caption" id="gigya-screen-dialog-caption-${modalID}">$title</div>\n        <div class="gigya-screen-dialog-close"></div>\n    </div>\n</div>',
                        modal: '<div id="gigya-screen-dialog-page-overlay" style="display:${overlayDisplay}"></div>\r\n<div class="gigya-screen-dialog-main">\r\n    <div class="gigya-screen-dialog-top">\r\n        <div class="gigya-screen-dialog-caption" tabindex="0" id="gigya-screen-dialog-caption-${modalID}">$title</div>\r\n        <div class="gigya-screen-dialog-close">\r\n            <a aria-label="close window" role="button" tabindex="0" >${closeImage}</a>\r\n        </div>\r\n    </div>\r\n    <div class="gigya-screen-dialog-inner">\r\n    </div>\r\n</div>\r\n',
                        modalCloseButton: '<img src="${imgUrl}" alt="close" height="${imgHeight}" width="${imgWidth}" />\n',
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
                    _css: {
                        legacy_modal: "/* legacy modal */\n\ndiv.gigya-screen-dialog {\n    position: absolute;\n    display: inline-block;\n    top: 25px;\n    left: 25px;\n    border: 8px solid #CCCCCC;\n    border-radius: 8px;\n    background-color: #FFFFFF;\n    outline: none;\n}\n\ndiv.gigya-screen-dialog-inner {\n    border: 1px solid #AAAAAA;\n}\n\ndiv.gigya-screen-dialog-close {\n    line-height: 33px;\n    height: 33px;\n    width: 20px;\n    float: right;\n    cursor: pointer;\n    background-image: url('${imgBase}/accounts/close_dialog.png');\n    background-position: right;\n    background-repeat: no-repeat;\n}\n\ndiv.gigya-screen-dialog-caption {\n    float: left;\n    font-weight: bold;\n    font-size: 16px;\n    font-family: arial;\n}\n\ndiv.gigya-screen-dialog-mobile {\n    position: absolute;\n    display: inline-block;\n    top: 0;\n    left: 0;\n    background-color: #FFFFFF;\n    width: 100%;\n}\n\ndiv.gigya-screen-dialog-top {\n    overflow: hidden;\n    zoom: 1;\n    background-color: #F3F3F3;\n    line-height: 33px;\n    padding: 0 10px 0 11px;\n}\n\n#gigya-screen-dialog-page-overlay {\n        width : 100vw;\n        height : 100vh;\n        background : black;\n        position : fixed;\n        top : 0;\n        left : 0;\n        z-index : -1;\n        filter : alpha(opacity=20);\n        opacity : 0.2;\n    }",
                        modern_modal: '/*modern modal*/\n.gigya-style-modern #gigya-screen-dialog-page-overlay {\n    width: 100vw;\n    height: 100vh;\n    background: black;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    filter: alpha(opacity=20);\n    opacity: 0.2;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-main {\n    border: 0.5px;\n    border-radius: 3px;\n    background-color: transparent;\n    -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.5);\n    -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.5);\n    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.5);\n    max-height: 99vh;\n    max-width: 99vw;\n    overflow: auto;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-top {\n    overflow: hidden;\n    zoom: 1;\n    background-color: #1371B9;\n    line-height: 38px;\n    padding: 0 10px 0 11px;\n    border-radius: 3px 3px 0px 0px;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-close {\n    background-image: initial;\n    background-position: initial;\n    background-repeat: initial;\n    float: right;\n    cursor: pointer;\n}\n.gigya-style-modern div.gigya-screen-dialog-close > a{\n    padding: 4px;\n}\n.gigya-style-modern div.gigya-screen-dialog-close > a > img {\n    margin-top: 11px;\n    vertical-align: initial;\n    border: 0px;\n    width: auto;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-caption {\n    float: left;\n    font-size: 19px;\n    font-family: arial;\n    color: #FFFFFF;\n    padding-right: 20px;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-inner {\n    padding: 0px;\n    overflow: hidden;\n    min-width: 32px;\n    min-height: 64px;\n    background-color: white;\n}\n\n.gigya-style-modern div.gigya-screen-dimmer {\n    position: absolute;\n    opacity: 0.2;\n    filter: alpha(opacity=20);\n    background-color: #FFFFFF;\n}\n\n.gigya-style-modern div.gigya-screen-loader {\n    position: absolute;\n    background: transparent url("${imgBase}/accounts/bigLoader.gif") no-repeat center center;\n    min-height: 32px;\n    min-width: 32px;\n}\n\n.gigya-style-modern.gigya-screen-dialog {\n    position: fixed;\n    border: none;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile {\n    position: absolute;\n    display: inline-block;\n    top: 0;\n    left: 0;\n    background-color: white;\n    width: 100%;\n    height: 100%;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-main {\n    max-height: 100vh;\n    max-width: 100vw;\n    box-shadow: initial;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-top {\n    position: fixed;\n    top: 0px;\n    border-radius: 0px;\n    line-height: 27px;\n    box-sizing: border-box;\n    width: 100%;\n    z-index: 1;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-caption {\n    font-size: 14px;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-close > a > img {\n    margin-top: 5px;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-inner {\n    border: 0px;\n    margin-top: 27px;\n    box-sizing: border-box;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-inner > div {\n    margin: 0 auto;\n}\n\n.gigya-style-modern.gigya-ios.gigya-screen-dialog, .gigya-style-modern.gigya-ios.gigya-screen-dialog.gigya-ios-v7.gigya-screen-dialog-mobile div.gigya-screen-dialog-top {\n    position: absolute;\n}\n\n.gigya-style-modern.gigya-android.gigya-screen-dialog-mobile {\n    overflow: auto;\n}\n\n.gigya-style-modern.gigya-ie8 #gigya-screen-dialog-page-overlay {\n    width: 100%;\n    height: 100%;\n}\n\nhtml.gigya-mobile-modal-mode {\n    overflow: hidden;\n}\nhtml.gigya-mobile-modal-mode body {\n    height: 0px;\n    overflow: hidden;\n}\n',
                        defaultCSS: '.gigya-consent-title {\n  font-weight: bold;\n  display: block;\n  font-weight: 700;\n  font-size: 15px;\n  font-family: arial;\n}\n.gigya-consent-subtitle {\n  font-weight: bold;\n  display: block;\n  font-weight: 700;\n  font-size: 13px;\n  font-family: arial;\n}\n\n.consent .gigya-version-content {\n  margin-top: 0.5rem;\n}\n\n.gigya-screen .gigya-disabled-color {\n  color: #b2b2b2;\n}\n.gigya-consent-text {\n  display: inline-block;\n}\n.gigya-composite-control-captcha-widget iframe {\n  width: 100%;\n}\n#FunCaptcha {\n  text-align: center;\n}\n.gigya-reset *,\ndiv.gigya-reset,\n.gigya-reset span,\n.gigya-reset a:hover,\n.gigya-reset a:visited,\n.gigya-reset a:link,\n.gigya-reset a:active {\n  border: none;\n  padding: 0px;\n  margin: 0px;\n  color: inherit;\n  text-decoration: none;\n  width: auto;\n  float: none;\n  -moz-border-radius: 0;\n  border-radius: 0;\n  font-family: arial;\n  font-size: 12px;\n  color: #333333;\n  text-align: left;\n}\n\n.gigya-screen .gigya-error-msg {\n  color: #ce4635;\n  font-size: 11px;\n  display: block;\n  visibility: hidden;\n}\n\n.gigya-screen .gigya-error-msg.gigya-error-msg-active {\n  color: #ce4635;\n  font-size: 11px;\n  display: block;\n  visibility: visible;\n}\n.gigya-screen .gigya-error-msg.gigya-warn {\n  color: #b45a0b !important;\n}\n\n.gigya-screen .gigya-terms-error,\n.gigya-screen input.gigya-error,\n.gigya-screen input[type="text"].gigya-error,\n.gigya-screen input[type="password"].gigya-error,\n.gigya-screen input[type="email"].gigya-error,\n.gigya-screen select.gigya-error {\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #ce4635;\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n\n.gigya-screen input.gigya-warn,\n.gigya-screen input[type="text"].gigya-warn,\n.gigya-screen select.gigya-warn {\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #b45a0b !important;\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n\n.gigya-screen input.gigya-error[type="checkbox"],\n.gigya-screen input.gigya-error[type="radio"] {\n  padding: 0;\n}\n\n.gigya-screen input[disabled],\n.gigya-screen input:disabled {\n  background-color: #e1e1e1;\n  color: #4a4a4a;\n  border-color: #cccccc;\n}\n\ndiv.gigya-attach-file-upload-form {\n  position: absolute;\n  overflow: hidden;\n  font-size: 50px;\n  cursor: pointer;\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n\ndiv.gigya-photo-upload-form > input {\n  font-size: 500px;\n  direction: rtl;\n  height: 100%;\n  cursor: pointer;\n}\n\n.gigya-password-strength-bubble .gig-balloon-nub {\n  background-image: url("${imgBase}/screenSet/triangle_left.png");\n  height: 16px;\n  width: 10px;\n  left: +2px;\n}\n.gigya-password-strength-bubble .gig-balloon-nub-up {\n  background-image: url("${imgBase}/screenSet/triangle_up.png");\n  height: 10px;\n  width: 16px;\n  top: +2px;\n}\n.gigya-password-strength-bubble .gig-balloon-nub-right {\n  background-image: url("${imgBase}/screenSet/triangle_right.png");\n  height: 16px;\n  width: 10px;\n  left: -2px;\n}\n.gigya-password-strength-bubble .gig-balloon-nub-down {\n  background-image: url("${imgBase}/screenSet/triangle_down.png");\n  height: 10px;\n  width: 16px;\n  top: -2px;\n}\n.gigya-password-strength-bubble .gig-balloon-frame {\n  background-color: #f3f5f6;\n  -webkit-border-radius: 2px;\n  -moz-border-radius: 2px;\n  border-radius: 2px;\n  border: 1px solid #bfcfda;\n  -webkit-box-shadow: inset 0 0 1px 1px RGBA(0, 0, 0, 0.05);\n  -moz-box-shadow: inset 0 0 1px 1px RGBA(0, 0, 0, 0.05);\n  box-shadow: inset 0 0 1px 1px RGBA(0, 0, 0, 0.05);\n}\n\n.gigya-password-strength-bubble .gig-balloon {\n  position: relative;\n}\n.gigya-password-strength-bubble.gig-balloon-left .gig-balloon {\n  left: +10px;\n  top: +3px;\n}\n.gigya-password-strength-bubble.gig-balloon-right .gig-balloon {\n  left: -10px;\n  top: +3px;\n}\n.gigya-password-strength-bubble.gig-balloon-up .gig-balloon {\n  left: -5px;\n  top: +17px;\n}\n.gigya-password-strength-bubble.gig-balloon-down .gig-balloon {\n  left: -5px;\n  top: -12px;\n}\n\n.gigya-passwordStrength-text {\n  text-align: center;\n}\n\nspan.gigya-passwordStrength-text {\n  font-weight: bold;\n  display: inline-block;\n}\n\ndiv.gigya-passwordStrength-text-requirements {\n  text-align: center;\n  width: 100%;\n  margin-top: 8px;\n}\n\nspan.gigya-passwordStrength-scoreText {\n  margin-left: 3px;\n}\n\n.gigya-passwordStrength-too_weak .gigya-passwordStrength-scoreText {\n  color: #e76468;\n}\n.gigya-passwordStrength-weak .gigya-passwordStrength-scoreText {\n  color: #e76468;\n}\n.gigya-passwordStrength-fair .gigya-passwordStrength-scoreText {\n  color: #d99b4b;\n}\n.gigya-passwordStrength-strong .gigya-passwordStrength-scoreText {\n  color: #4ababc;\n}\n.gigya-passwordStrength-very_strong .gigya-passwordStrength-scoreText {\n  color: #4ababc;\n}\n\ndiv.gigya-passwordStrength-bar {\n  width: 100%;\n  height: 1px;\n  background-color: #b6b6b6;\n  margin-top: 8px;\n}\n\ndiv.gigya-passwordStrength-bar-too_weak {\n  width: 20%;\n  height: 100%;\n  background-color: #e76468;\n}\n\ndiv.gigya-passwordStrength-bar-weak {\n  width: 40%;\n  height: 100%;\n  background-color: #e76468;\n}\n\ndiv.gigya-passwordStrength-bar-fair {\n  width: 60%;\n  height: 100%;\n  background-color: #d99b4b;\n}\n\ndiv.gigya-passwordStrength-bar-strong {\n  width: 80%;\n  height: 100%;\n  background-color: #4ababc;\n}\n\ndiv.gigya-passwordStrength-bar-very_strong {\n  width: 100%;\n  height: 100%;\n  background-color: #4ababc;\n}\n\n.gigya-calculate-size {\n  position: absolute !important;\n  -ms-zoom: 1 !important;\n  zoom: 1 !important;\n  left: 10px !important;\n  top: -1000px !important;\n}\n\n.gigya-calculate-size div.gigya-captcha {\n  min-width: 318px;\n  min-height: 80px;\n  _width: 318px;\n  _height: 80px;\n}\n.gigya-calculate-size div.gigya-captcha.v2 {\n  min-height: 80px;\n  _height: 80px;\n}\n\n.gigya-calculate-size div.gigya-social-login {\n  min-width: 110px;\n  min-height: 120px;\n  _width: 110px;\n  _height: 120px;\n}\n\n.gigya-calculate-size div.gigya-tfa {\n  min-width: 325px;\n  min-height: 200px;\n  _width: 325px;\n  _height: 200px;\n}\n\ndiv.gigya-container {\n  display: none;\n}\n\ndiv.gigya-container.gigya-container-enabled {\n  display: block;\n}\n\ndiv.gigya-loginID-availability {\n  line-height: 18px;\n  background-repeat: no-repeat;\n  background-position: left center;\n}\n\ndiv.gigya-loginID-availability-available {\n  padding-left: 17px;\n  background-image: url("${imgBase}/accounts/ok.png");\n  color: #4fa373;\n}\n\ndiv.gigya-loginID-availability-not-available {\n  padding-left: 16px;\n  background-image: url("${imgBase}/accounts/error.png");\n  color: #ce4635;\n}\n\ndiv.gigya-loginID-availability-progress {\n  padding-left: 20px;\n  background-image: url("${imgBase}/accounts/smallLoader.gif");\n  color: #666666;\n}\n\ndiv.gigya-profile-photo {\n  border-radius: 3px;\n}\n\n.gigya-calculate-size div.gigya-profile-photo {\n  min-width: 64px;\n  min-height: 64px;\n}\n\ndiv.gigya-screen-dimmer {\n  position: absolute;\n  opacity: 0.5;\n  filter: "alpha(opacity=50)";\n  background-color: #ffffff;\n}\n\ndiv.gigya-screen-loader {\n  position: absolute;\n  background: transparent url("${imgBase}/accounts/bigLoader.gif") no-repeat center center;\n  min-height: 32px;\n  min-width: 32px;\n}\n\ndiv.gigya-screen-dialog-content {\n  overflow: auto;\n  padding: 25px;\n}\n\ndiv.gigya-screen-dialog-mobile div.gigya-composite-control-captcha-widget {\n  padding: 0;\n}\n\ndiv.gigya-screen-dialog-mobile .gigya-screen {\n  width: 100%;\n}\n\ndiv.gigya-secret-question {\n  display: none;\n}\n\ndiv.gigya-photo-upload {\n  height: 63px;\n  width: 300px;\n  zoom: 1;\n}\n\ndiv.gigya-photo-upload-button {\n  display: inline-block;\n  zoom: 1;\n  margin: 0 8px 8px 0;\n  font-weight: normal;\n  border: 1px solid #cecece;\n  cursor: pointer;\n  padding: 0 12px;\n  color: #333333;\n  font-weight: bold;\n  border-radius: 4px;\n  line-height: 28px;\n  background: #f2f2f2;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#FFFFFF", endColorstr="#F2F2F2");\n  background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#f2f2f2));\n  background: -moz-linear-gradient(top, #ffffff, #f2f2f2);\n}\n\ndiv.gigya-photo-upload-button:hover {\n  background: #ffffff;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#F2F2F2", endColorstr="#FFFFFF");\n  background: -webkit-gradient(linear, left top, left bottom, from(#f2f2f2), to(#ffffff));\n  background: -moz-linear-gradient(top, #f2f2f2, #ffffff);\n}\n\ndiv.gigya-photo-upload-text {\n  font-size: 11px;\n  color: #666666;\n}\n\ndiv.gigya-photo-upload-image {\n  border-radius: 6px;\n  background-position: center center;\n  background-repeat: no-repeat;\n  width: 64px;\n  height: 64px;\n  background-color: #f2f2f2;\n  float: left;\n  margin-right: 8px;\n}\n\ndiv.gigya-photo-upload-path {\n  white-space: nowrap;\n  width: 107px;\n  vertical-align: middle;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  padding-right: 10px;\n  background-position: right;\n  background-repeat: no-repeat;\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding-right: 20px;\n}\n\nh1.gigya-screen-caption {\n  border-bottom: 1px solid #dbdbdb;\n  font-size: 16px;\n  font-weight: bold;\n  color: #333;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  margin: 0 auto;\n}\n\n.gigya-error-display {\n  display: none;\n}\n\n.gigya-error-display.gigya-error-display-active {\n  display: block;\n}\n\n.gigya-hidden {\n  display: none !important;\n}\n\n.gigya-screen .gigya-tfa input[type="text"] {\n  margin: 5px 0px;\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #cccccc;\n}\n\n.gigya-screen .gigya-tfa input[type="text"]:focus,\n.gigya-screen .gigya-tfa input[type="text"]:focus {\n  border-color: #87b9ea;\n}\n\n.gigya-show-checkmark.gigya-valid {\n  background-image: url("${imgBase}/screenSet/checkmarkValid.png");\n  background-position-x: 100%;\n  background-position-y: 50%;\n  background-position: right 5px center;\n  background-repeat: no-repeat;\n  padding-right: 25px;\n}\n\n.gigya-show-checkmark.gigya-valid.gigya-empty {\n  background-image: none;\n  padding-right: 5px;\n}\n\n.gigya-show-validity-border.gigya-valid:not(.gigya-empty) {\n  border: 1px solid #30914C;\n}\n\n.gigya-show-checkmark.gigya-pending {\n  background-image: url("${imgBase}/screenSet/checkmarkPending.gif");\n  background-position-x: 100%;\n  background-position-y: 50%;\n  background-position: right 5px center;\n  background-repeat: no-repeat;\n  padding-right: 25px;\n}\n\n/* If changed, update UI Builder too. */\n.gigya-screen .gigya-composite-control-image {\n  overflow: hidden;\n}\n.gigya-image {\n  background-repeat: no-repeat;\n  box-sizing: content-box;\n  background-position: center;\n  min-height: 10px;\n}\n.gigya-image[data-background-size="fit"] {\n  background-size: contain;\n}\n.gigya-image[data-background-size="fit-horizontally"] {\n  background-size: 100% auto;\n}\n.gigya-image[data-background-size="fit-vertically"] {\n  background-size: auto 100%;\n}\n.gigya-image[data-background-size="stretch"] {\n  background-size: 100% 100%;\n}\n\n/*IE8*/\n.gigya-ie8 .gigya-layout-cell {\n  overflow: hidden;\n  margin-left: -1px !important;\n}\n\n.gigya-ie8 .gigya-attach-file-upload-form .gigya-attach-file-upload-file-input {\n  width: 1000px;\n}\n\n.gigya-ie8 .gigya-calculate-size div.gigya-profile-photo {\n  _width: 64px;\n  _height: 64px;\n}\n\n.gigya-ie8 div.gigya-photo-upload {\n  *display: inline;\n}\n\n.gigya-ie8 div.gigya-photo-upload-button {\n  *display: inline;\n}\n.gigya-ie8 .gigya-screen .gigya-placeholder {\n  color: #a9a9bb;\n  padding-left: 5px;\n  text-indent: 0;\n}\n.gigya-ie8 .gigya-placeholder:focus {\n  padding-left: 5px;\n}\n.gigya-ie8 .gigya-screen .gigya-input-text:focus {\n  padding-left: 5px;\n  text-indent: 0;\n}\n.gigya-ie8 .gigya-screen.gigya-input-text,\n.gigya-ie8 .gigya-screen .gigya-input-text.gigya-error {\n  padding-top: 12px;\n}\n\n/*IE9*/\n.gigya-ie9 .gigya-screen input.gigya-input-text,\n.gigya-ie9 .gigya-screen input.gigya-input-password {\n  padding-top: 1px;\n  text-indent: 0;\n  padding-bottom: 5px;\n}\n\n.gigya-ie9 .gigya-screen .gigya-input-text:focus,\n.gigya-ie9 .gigya-screen .gigya-input-password:focus {\n  box-shadow: 0px 0px 5px 0px #1d87ff;\n  border: 1px solid #87b9ea;\n  /*padding-left: 5px;*/\n  text-indent: 0;\n}\n\n.gigya-ie9 .gigya-screen input.gigya-input-text.gigya-placeholder,\n.gigya-ie9 .gigya-screen input.gigya-input-password.gigya-placeholder {\n  color: #a9a9bb;\n  padding-top: 5px;\n  text-indent: 0;\n  /*padding-left: 4px;*/\n}\n\n/*IE10*/\n.gigya-ie10 .gigya-screen input.gigya-input-text,\n.gigya-ie10 .gigya-screen input.gigya-input-password {\n  padding-top: 1px;\n}\n\n/*remove bottom padding for outline when focused (not needed anyway)*/\n.gigya-screen .forgot-password-cell a,\n.gigya-screen .gigya-composite-control.gigya-forgotPassword,\n.gigya-screen .gigya-composite-control.gigya-change-password-link,\n.gigya-screen .gigya-composite-control.gigya-composite-control-link {\n  padding-bottom: 0px;\n}\n.gigya-screen .gigya-array-manager.disable-delete > .gigya-array-template > .buttons-wrapper button.gigya-array-remove-btn {\n  display: none;\n}\n.gigya-screen .gigya-composite-control-array-widget {\n  margin: 10px 0;\n}\n.gigya-screen .gigya-composite-control-array-widget .gigya-composite-control-array-widget {\n  margin: 10px;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template {\n  padding: 10px 0 10px 0;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template:not(:last-of-type) {\n  border-bottom: 1px #c1c1c1 solid;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template .buttons-wrapper {\n  text-align: right;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template button {\n  background: none;\n  outline: none !important;\n  color: #1371b9;\n  padding: 10px;\n  cursor: pointer;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template button.hidden {\n  display: none;\n}\n.gigya-screen a.gigya-disabled {\n  color: #757575;\n  cursor: default;\n  pointer-events: none;\n  text-decoration: none;\n}\n\n.gigya-screen input[type="button"].gigya-disabled {\n  background: #757575 !important;\n  cursor: default;\n}\n\n.gigya-screen .gigya-otp-update-form .gigya-input-submit[type="submit"].gigya-disabled {\n  background: #757575 !important;\n  cursor: default;\n  pointer-events: none;\n}\n\n.gigya-screen .gigya-disabled:hover {\n  text-decoration: none;\n  cursor: default;\n}\n\n.gigya-screen .gigya-disabled:active {\n  color: #757575;\n  cursor: default;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.justify-content-space {\n  justify-content: space-between;\n}\n\n.gigya-myPhoto-form-wrapper {\n  width: 100% !important;\n}\n.gigya-myPhoto-uploadForm {\n  opacity: 1 !important;\n}\n\n.gigya-myPhoto-profile-box-wrapper input.gigya-myPhoto-upload {\n  width: 100% !important;\n}\n\n.gigya-myPhoto-status-icon {\n  opacity: 0 !important;\n}\n\n.gigya-myPhoto-uploadForm > input {\n  border: 0 !important;\n  background-color: transparent !important;\n}\n.gigya-myPhoto-upload {\n  opacity: 0 !important;\n}\n.gigya-dummyPhoto-upload {\n  width: 100% !important;\n  height: 100% !important;\n}\n.gigya-composite-control-link:focus,\n.gigya-composite-control select:focus,\n.gigya-composite-control input[type="checkbox"]:focus,\n.gigya-myPhoto-delete-button:focus,\n.gigya-myPhoto-uploadForm input:focus,\n.gigya-dummyPhoto-upload:focus {\n  border: 1px solid #2378cd !important;\n  outline: none !important;\n  box-shadow: 0 0 5px 0 #0070f0 !important;\n}\n\n.gigya-screen .gigya-composite-control.gigya-composite-control-phone-number-widget .gigya-phone-verified-status-image {\n  width: 16px;\n  height: 16px;\n  background-image: url("${imgBase}/screenSet/checkmarkValid.png");\n  background-position-x: 100%;\n  background-position-y: 50%;\n  background-repeat: no-repeat;\n}\n'
                    },
                    isMobileUI: false,
                    isRtl: false,
                    addedCss: true,
                    _ID: "Default-RegistrationLogin",
                    templateElement: null
                }
            },
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
                    }
                },
                css: {
                    base: {
                        legacy_modal: "/* legacy modal */\n\ndiv.gigya-screen-dialog {\n    position: absolute;\n    display: inline-block;\n    top: 25px;\n    left: 25px;\n    border: 8px solid #CCCCCC;\n    border-radius: 8px;\n    background-color: #FFFFFF;\n    outline: none;\n}\n\ndiv.gigya-screen-dialog-inner {\n    border: 1px solid #AAAAAA;\n}\n\ndiv.gigya-screen-dialog-close {\n    line-height: 33px;\n    height: 33px;\n    width: 20px;\n    float: right;\n    cursor: pointer;\n    background-image: url('${imgBase}/accounts/close_dialog.png');\n    background-position: right;\n    background-repeat: no-repeat;\n}\n\ndiv.gigya-screen-dialog-caption {\n    float: left;\n    font-weight: bold;\n    font-size: 16px;\n    font-family: arial;\n}\n\ndiv.gigya-screen-dialog-mobile {\n    position: absolute;\n    display: inline-block;\n    top: 0;\n    left: 0;\n    background-color: #FFFFFF;\n    width: 100%;\n}\n\ndiv.gigya-screen-dialog-top {\n    overflow: hidden;\n    zoom: 1;\n    background-color: #F3F3F3;\n    line-height: 33px;\n    padding: 0 10px 0 11px;\n}\n\n#gigya-screen-dialog-page-overlay {\n        width : 100vw;\n        height : 100vh;\n        background : black;\n        position : fixed;\n        top : 0;\n        left : 0;\n        z-index : -1;\n        filter : alpha(opacity=20);\n        opacity : 0.2;\n    }",
                        modern_modal: '/*modern modal*/\n.gigya-style-modern #gigya-screen-dialog-page-overlay {\n    width: 100vw;\n    height: 100vh;\n    background: black;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    filter: alpha(opacity=20);\n    opacity: 0.2;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-main {\n    border: 0.5px;\n    border-radius: 3px;\n    background-color: transparent;\n    -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.5);\n    -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.5);\n    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.5);\n    max-height: 99vh;\n    max-width: 99vw;\n    overflow: auto;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-top {\n    overflow: hidden;\n    zoom: 1;\n    background-color: #1371B9;\n    line-height: 38px;\n    padding: 0 10px 0 11px;\n    border-radius: 3px 3px 0px 0px;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-close {\n    background-image: initial;\n    background-position: initial;\n    background-repeat: initial;\n    float: right;\n    cursor: pointer;\n}\n.gigya-style-modern div.gigya-screen-dialog-close > a{\n    padding: 4px;\n}\n.gigya-style-modern div.gigya-screen-dialog-close > a > img {\n    margin-top: 11px;\n    vertical-align: initial;\n    border: 0px;\n    width: auto;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-caption {\n    float: left;\n    font-size: 19px;\n    font-family: arial;\n    color: #FFFFFF;\n    padding-right: 20px;\n}\n\n.gigya-style-modern div.gigya-screen-dialog-inner {\n    padding: 0px;\n    overflow: hidden;\n    min-width: 32px;\n    min-height: 64px;\n    background-color: white;\n}\n\n.gigya-style-modern div.gigya-screen-dimmer {\n    position: absolute;\n    opacity: 0.2;\n    filter: alpha(opacity=20);\n    background-color: #FFFFFF;\n}\n\n.gigya-style-modern div.gigya-screen-loader {\n    position: absolute;\n    background: transparent url("${imgBase}/accounts/bigLoader.gif") no-repeat center center;\n    min-height: 32px;\n    min-width: 32px;\n}\n\n.gigya-style-modern.gigya-screen-dialog {\n    position: fixed;\n    border: none;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile {\n    position: absolute;\n    display: inline-block;\n    top: 0;\n    left: 0;\n    background-color: white;\n    width: 100%;\n    height: 100%;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-main {\n    max-height: 100vh;\n    max-width: 100vw;\n    box-shadow: initial;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-top {\n    position: fixed;\n    top: 0px;\n    border-radius: 0px;\n    line-height: 27px;\n    box-sizing: border-box;\n    width: 100%;\n    z-index: 1;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-caption {\n    font-size: 14px;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-close > a > img {\n    margin-top: 5px;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-inner {\n    border: 0px;\n    margin-top: 27px;\n    box-sizing: border-box;\n}\n\n.gigya-style-modern.gigya-screen-dialog-mobile div.gigya-screen-dialog-inner > div {\n    margin: 0 auto;\n}\n\n.gigya-style-modern.gigya-ios.gigya-screen-dialog, .gigya-style-modern.gigya-ios.gigya-screen-dialog.gigya-ios-v7.gigya-screen-dialog-mobile div.gigya-screen-dialog-top {\n    position: absolute;\n}\n\n.gigya-style-modern.gigya-android.gigya-screen-dialog-mobile {\n    overflow: auto;\n}\n\n.gigya-style-modern.gigya-ie8 #gigya-screen-dialog-page-overlay {\n    width: 100%;\n    height: 100%;\n}\n\nhtml.gigya-mobile-modal-mode {\n    overflow: hidden;\n}\nhtml.gigya-mobile-modal-mode body {\n    height: 0px;\n    overflow: hidden;\n}\n',
                        defaultCSS: '.gigya-consent-title {\n  font-weight: bold;\n  display: block;\n  font-weight: 700;\n  font-size: 15px;\n  font-family: arial;\n}\n.gigya-consent-subtitle {\n  font-weight: bold;\n  display: block;\n  font-weight: 700;\n  font-size: 13px;\n  font-family: arial;\n}\n\n.consent .gigya-version-content {\n  margin-top: 0.5rem;\n}\n\n.gigya-screen .gigya-disabled-color {\n  color: #b2b2b2;\n}\n.gigya-consent-text {\n  display: inline-block;\n}\n.gigya-composite-control-captcha-widget iframe {\n  width: 100%;\n}\n#FunCaptcha {\n  text-align: center;\n}\n.gigya-reset *,\ndiv.gigya-reset,\n.gigya-reset span,\n.gigya-reset a:hover,\n.gigya-reset a:visited,\n.gigya-reset a:link,\n.gigya-reset a:active {\n  border: none;\n  padding: 0px;\n  margin: 0px;\n  color: inherit;\n  text-decoration: none;\n  width: auto;\n  float: none;\n  -moz-border-radius: 0;\n  border-radius: 0;\n  font-family: arial;\n  font-size: 12px;\n  color: #333333;\n  text-align: left;\n}\n\n.gigya-screen .gigya-error-msg {\n  color: #ce4635;\n  font-size: 11px;\n  display: block;\n  visibility: hidden;\n}\n\n.gigya-screen .gigya-error-msg.gigya-error-msg-active {\n  color: #ce4635;\n  font-size: 11px;\n  display: block;\n  visibility: visible;\n}\n.gigya-screen .gigya-error-msg.gigya-warn {\n  color: #b45a0b !important;\n}\n\n.gigya-screen .gigya-terms-error,\n.gigya-screen input.gigya-error,\n.gigya-screen input[type="text"].gigya-error,\n.gigya-screen input[type="password"].gigya-error,\n.gigya-screen input[type="email"].gigya-error,\n.gigya-screen select.gigya-error {\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #ce4635;\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n\n.gigya-screen input.gigya-warn,\n.gigya-screen input[type="text"].gigya-warn,\n.gigya-screen select.gigya-warn {\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #b45a0b !important;\n  -webkit-box-shadow: none !important;\n  -moz-box-shadow: none !important;\n  box-shadow: none !important;\n}\n\n.gigya-screen input.gigya-error[type="checkbox"],\n.gigya-screen input.gigya-error[type="radio"] {\n  padding: 0;\n}\n\n.gigya-screen input[disabled],\n.gigya-screen input:disabled {\n  background-color: #e1e1e1;\n  color: #4a4a4a;\n  border-color: #cccccc;\n}\n\ndiv.gigya-attach-file-upload-form {\n  position: absolute;\n  overflow: hidden;\n  font-size: 50px;\n  cursor: pointer;\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n\ndiv.gigya-photo-upload-form > input {\n  font-size: 500px;\n  direction: rtl;\n  height: 100%;\n  cursor: pointer;\n}\n\n.gigya-password-strength-bubble .gig-balloon-nub {\n  background-image: url("${imgBase}/screenSet/triangle_left.png");\n  height: 16px;\n  width: 10px;\n  left: +2px;\n}\n.gigya-password-strength-bubble .gig-balloon-nub-up {\n  background-image: url("${imgBase}/screenSet/triangle_up.png");\n  height: 10px;\n  width: 16px;\n  top: +2px;\n}\n.gigya-password-strength-bubble .gig-balloon-nub-right {\n  background-image: url("${imgBase}/screenSet/triangle_right.png");\n  height: 16px;\n  width: 10px;\n  left: -2px;\n}\n.gigya-password-strength-bubble .gig-balloon-nub-down {\n  background-image: url("${imgBase}/screenSet/triangle_down.png");\n  height: 10px;\n  width: 16px;\n  top: -2px;\n}\n.gigya-password-strength-bubble .gig-balloon-frame {\n  background-color: #f3f5f6;\n  -webkit-border-radius: 2px;\n  -moz-border-radius: 2px;\n  border-radius: 2px;\n  border: 1px solid #bfcfda;\n  -webkit-box-shadow: inset 0 0 1px 1px RGBA(0, 0, 0, 0.05);\n  -moz-box-shadow: inset 0 0 1px 1px RGBA(0, 0, 0, 0.05);\n  box-shadow: inset 0 0 1px 1px RGBA(0, 0, 0, 0.05);\n}\n\n.gigya-password-strength-bubble .gig-balloon {\n  position: relative;\n}\n.gigya-password-strength-bubble.gig-balloon-left .gig-balloon {\n  left: +10px;\n  top: +3px;\n}\n.gigya-password-strength-bubble.gig-balloon-right .gig-balloon {\n  left: -10px;\n  top: +3px;\n}\n.gigya-password-strength-bubble.gig-balloon-up .gig-balloon {\n  left: -5px;\n  top: +17px;\n}\n.gigya-password-strength-bubble.gig-balloon-down .gig-balloon {\n  left: -5px;\n  top: -12px;\n}\n\n.gigya-passwordStrength-text {\n  text-align: center;\n}\n\nspan.gigya-passwordStrength-text {\n  font-weight: bold;\n  display: inline-block;\n}\n\ndiv.gigya-passwordStrength-text-requirements {\n  text-align: center;\n  width: 100%;\n  margin-top: 8px;\n}\n\nspan.gigya-passwordStrength-scoreText {\n  margin-left: 3px;\n}\n\n.gigya-passwordStrength-too_weak .gigya-passwordStrength-scoreText {\n  color: #e76468;\n}\n.gigya-passwordStrength-weak .gigya-passwordStrength-scoreText {\n  color: #e76468;\n}\n.gigya-passwordStrength-fair .gigya-passwordStrength-scoreText {\n  color: #d99b4b;\n}\n.gigya-passwordStrength-strong .gigya-passwordStrength-scoreText {\n  color: #4ababc;\n}\n.gigya-passwordStrength-very_strong .gigya-passwordStrength-scoreText {\n  color: #4ababc;\n}\n\ndiv.gigya-passwordStrength-bar {\n  width: 100%;\n  height: 1px;\n  background-color: #b6b6b6;\n  margin-top: 8px;\n}\n\ndiv.gigya-passwordStrength-bar-too_weak {\n  width: 20%;\n  height: 100%;\n  background-color: #e76468;\n}\n\ndiv.gigya-passwordStrength-bar-weak {\n  width: 40%;\n  height: 100%;\n  background-color: #e76468;\n}\n\ndiv.gigya-passwordStrength-bar-fair {\n  width: 60%;\n  height: 100%;\n  background-color: #d99b4b;\n}\n\ndiv.gigya-passwordStrength-bar-strong {\n  width: 80%;\n  height: 100%;\n  background-color: #4ababc;\n}\n\ndiv.gigya-passwordStrength-bar-very_strong {\n  width: 100%;\n  height: 100%;\n  background-color: #4ababc;\n}\n\n.gigya-calculate-size {\n  position: absolute !important;\n  -ms-zoom: 1 !important;\n  zoom: 1 !important;\n  left: 10px !important;\n  top: -1000px !important;\n}\n\n.gigya-calculate-size div.gigya-captcha {\n  min-width: 318px;\n  min-height: 80px;\n  _width: 318px;\n  _height: 80px;\n}\n.gigya-calculate-size div.gigya-captcha.v2 {\n  min-height: 80px;\n  _height: 80px;\n}\n\n.gigya-calculate-size div.gigya-social-login {\n  min-width: 110px;\n  min-height: 120px;\n  _width: 110px;\n  _height: 120px;\n}\n\n.gigya-calculate-size div.gigya-tfa {\n  min-width: 325px;\n  min-height: 200px;\n  _width: 325px;\n  _height: 200px;\n}\n\ndiv.gigya-container {\n  display: none;\n}\n\ndiv.gigya-container.gigya-container-enabled {\n  display: block;\n}\n\ndiv.gigya-loginID-availability {\n  line-height: 18px;\n  background-repeat: no-repeat;\n  background-position: left center;\n}\n\ndiv.gigya-loginID-availability-available {\n  padding-left: 17px;\n  background-image: url("${imgBase}/accounts/ok.png");\n  color: #4fa373;\n}\n\ndiv.gigya-loginID-availability-not-available {\n  padding-left: 16px;\n  background-image: url("${imgBase}/accounts/error.png");\n  color: #ce4635;\n}\n\ndiv.gigya-loginID-availability-progress {\n  padding-left: 20px;\n  background-image: url("${imgBase}/accounts/smallLoader.gif");\n  color: #666666;\n}\n\ndiv.gigya-profile-photo {\n  border-radius: 3px;\n}\n\n.gigya-calculate-size div.gigya-profile-photo {\n  min-width: 64px;\n  min-height: 64px;\n}\n\ndiv.gigya-screen-dimmer {\n  position: absolute;\n  opacity: 0.5;\n  filter: "alpha(opacity=50)";\n  background-color: #ffffff;\n}\n\ndiv.gigya-screen-loader {\n  position: absolute;\n  background: transparent url("${imgBase}/accounts/bigLoader.gif") no-repeat center center;\n  min-height: 32px;\n  min-width: 32px;\n}\n\ndiv.gigya-screen-dialog-content {\n  overflow: auto;\n  padding: 25px;\n}\n\ndiv.gigya-screen-dialog-mobile div.gigya-composite-control-captcha-widget {\n  padding: 0;\n}\n\ndiv.gigya-screen-dialog-mobile .gigya-screen {\n  width: 100%;\n}\n\ndiv.gigya-secret-question {\n  display: none;\n}\n\ndiv.gigya-photo-upload {\n  height: 63px;\n  width: 300px;\n  zoom: 1;\n}\n\ndiv.gigya-photo-upload-button {\n  display: inline-block;\n  zoom: 1;\n  margin: 0 8px 8px 0;\n  font-weight: normal;\n  border: 1px solid #cecece;\n  cursor: pointer;\n  padding: 0 12px;\n  color: #333333;\n  font-weight: bold;\n  border-radius: 4px;\n  line-height: 28px;\n  background: #f2f2f2;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#FFFFFF", endColorstr="#F2F2F2");\n  background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#f2f2f2));\n  background: -moz-linear-gradient(top, #ffffff, #f2f2f2);\n}\n\ndiv.gigya-photo-upload-button:hover {\n  background: #ffffff;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#F2F2F2", endColorstr="#FFFFFF");\n  background: -webkit-gradient(linear, left top, left bottom, from(#f2f2f2), to(#ffffff));\n  background: -moz-linear-gradient(top, #f2f2f2, #ffffff);\n}\n\ndiv.gigya-photo-upload-text {\n  font-size: 11px;\n  color: #666666;\n}\n\ndiv.gigya-photo-upload-image {\n  border-radius: 6px;\n  background-position: center center;\n  background-repeat: no-repeat;\n  width: 64px;\n  height: 64px;\n  background-color: #f2f2f2;\n  float: left;\n  margin-right: 8px;\n}\n\ndiv.gigya-photo-upload-path {\n  white-space: nowrap;\n  width: 107px;\n  vertical-align: middle;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  padding-right: 10px;\n  background-position: right;\n  background-repeat: no-repeat;\n  display: inline-block;\n  *display: inline;\n  zoom: 1;\n  padding-right: 20px;\n}\n\nh1.gigya-screen-caption {\n  border-bottom: 1px solid #dbdbdb;\n  font-size: 16px;\n  font-weight: bold;\n  color: #333;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  margin: 0 auto;\n}\n\n.gigya-error-display {\n  display: none;\n}\n\n.gigya-error-display.gigya-error-display-active {\n  display: block;\n}\n\n.gigya-hidden {\n  display: none !important;\n}\n\n.gigya-screen .gigya-tfa input[type="text"] {\n  margin: 5px 0px;\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #cccccc;\n}\n\n.gigya-screen .gigya-tfa input[type="text"]:focus,\n.gigya-screen .gigya-tfa input[type="text"]:focus {\n  border-color: #87b9ea;\n}\n\n.gigya-show-checkmark.gigya-valid {\n  background-image: url("${imgBase}/screenSet/checkmarkValid.png");\n  background-position-x: 100%;\n  background-position-y: 50%;\n  background-position: right 5px center;\n  background-repeat: no-repeat;\n  padding-right: 25px;\n}\n\n.gigya-show-checkmark.gigya-valid.gigya-empty {\n  background-image: none;\n  padding-right: 5px;\n}\n\n.gigya-show-validity-border.gigya-valid:not(.gigya-empty) {\n  border: 1px solid #30914C;\n}\n\n.gigya-show-checkmark.gigya-pending {\n  background-image: url("${imgBase}/screenSet/checkmarkPending.gif");\n  background-position-x: 100%;\n  background-position-y: 50%;\n  background-position: right 5px center;\n  background-repeat: no-repeat;\n  padding-right: 25px;\n}\n\n/* If changed, update UI Builder too. */\n.gigya-screen .gigya-composite-control-image {\n  overflow: hidden;\n}\n.gigya-image {\n  background-repeat: no-repeat;\n  box-sizing: content-box;\n  background-position: center;\n  min-height: 10px;\n}\n.gigya-image[data-background-size="fit"] {\n  background-size: contain;\n}\n.gigya-image[data-background-size="fit-horizontally"] {\n  background-size: 100% auto;\n}\n.gigya-image[data-background-size="fit-vertically"] {\n  background-size: auto 100%;\n}\n.gigya-image[data-background-size="stretch"] {\n  background-size: 100% 100%;\n}\n\n/*IE8*/\n.gigya-ie8 .gigya-layout-cell {\n  overflow: hidden;\n  margin-left: -1px !important;\n}\n\n.gigya-ie8 .gigya-attach-file-upload-form .gigya-attach-file-upload-file-input {\n  width: 1000px;\n}\n\n.gigya-ie8 .gigya-calculate-size div.gigya-profile-photo {\n  _width: 64px;\n  _height: 64px;\n}\n\n.gigya-ie8 div.gigya-photo-upload {\n  *display: inline;\n}\n\n.gigya-ie8 div.gigya-photo-upload-button {\n  *display: inline;\n}\n.gigya-ie8 .gigya-screen .gigya-placeholder {\n  color: #a9a9bb;\n  padding-left: 5px;\n  text-indent: 0;\n}\n.gigya-ie8 .gigya-placeholder:focus {\n  padding-left: 5px;\n}\n.gigya-ie8 .gigya-screen .gigya-input-text:focus {\n  padding-left: 5px;\n  text-indent: 0;\n}\n.gigya-ie8 .gigya-screen.gigya-input-text,\n.gigya-ie8 .gigya-screen .gigya-input-text.gigya-error {\n  padding-top: 12px;\n}\n\n/*IE9*/\n.gigya-ie9 .gigya-screen input.gigya-input-text,\n.gigya-ie9 .gigya-screen input.gigya-input-password {\n  padding-top: 1px;\n  text-indent: 0;\n  padding-bottom: 5px;\n}\n\n.gigya-ie9 .gigya-screen .gigya-input-text:focus,\n.gigya-ie9 .gigya-screen .gigya-input-password:focus {\n  box-shadow: 0px 0px 5px 0px #1d87ff;\n  border: 1px solid #87b9ea;\n  /*padding-left: 5px;*/\n  text-indent: 0;\n}\n\n.gigya-ie9 .gigya-screen input.gigya-input-text.gigya-placeholder,\n.gigya-ie9 .gigya-screen input.gigya-input-password.gigya-placeholder {\n  color: #a9a9bb;\n  padding-top: 5px;\n  text-indent: 0;\n  /*padding-left: 4px;*/\n}\n\n/*IE10*/\n.gigya-ie10 .gigya-screen input.gigya-input-text,\n.gigya-ie10 .gigya-screen input.gigya-input-password {\n  padding-top: 1px;\n}\n\n/*remove bottom padding for outline when focused (not needed anyway)*/\n.gigya-screen .forgot-password-cell a,\n.gigya-screen .gigya-composite-control.gigya-forgotPassword,\n.gigya-screen .gigya-composite-control.gigya-change-password-link,\n.gigya-screen .gigya-composite-control.gigya-composite-control-link {\n  padding-bottom: 0px;\n}\n.gigya-screen .gigya-array-manager.disable-delete > .gigya-array-template > .buttons-wrapper button.gigya-array-remove-btn {\n  display: none;\n}\n.gigya-screen .gigya-composite-control-array-widget {\n  margin: 10px 0;\n}\n.gigya-screen .gigya-composite-control-array-widget .gigya-composite-control-array-widget {\n  margin: 10px;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template {\n  padding: 10px 0 10px 0;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template:not(:last-of-type) {\n  border-bottom: 1px #c1c1c1 solid;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template .buttons-wrapper {\n  text-align: right;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template button {\n  background: none;\n  outline: none !important;\n  color: #1371b9;\n  padding: 10px;\n  cursor: pointer;\n}\n.gigya-screen .gigya-composite-control-array-widget div.gigya-array-template button.hidden {\n  display: none;\n}\n.gigya-screen a.gigya-disabled {\n  color: #757575;\n  cursor: default;\n  pointer-events: none;\n  text-decoration: none;\n}\n\n.gigya-screen input[type="button"].gigya-disabled {\n  background: #757575 !important;\n  cursor: default;\n}\n\n.gigya-screen .gigya-otp-update-form .gigya-input-submit[type="submit"].gigya-disabled {\n  background: #757575 !important;\n  cursor: default;\n  pointer-events: none;\n}\n\n.gigya-screen .gigya-disabled:hover {\n  text-decoration: none;\n  cursor: default;\n}\n\n.gigya-screen .gigya-disabled:active {\n  color: #757575;\n  cursor: default;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.justify-content-space {\n  justify-content: space-between;\n}\n\n.gigya-myPhoto-form-wrapper {\n  width: 100% !important;\n}\n.gigya-myPhoto-uploadForm {\n  opacity: 1 !important;\n}\n\n.gigya-myPhoto-profile-box-wrapper input.gigya-myPhoto-upload {\n  width: 100% !important;\n}\n\n.gigya-myPhoto-status-icon {\n  opacity: 0 !important;\n}\n\n.gigya-myPhoto-uploadForm > input {\n  border: 0 !important;\n  background-color: transparent !important;\n}\n.gigya-myPhoto-upload {\n  opacity: 0 !important;\n}\n.gigya-dummyPhoto-upload {\n  width: 100% !important;\n  height: 100% !important;\n}\n.gigya-composite-control-link:focus,\n.gigya-composite-control select:focus,\n.gigya-composite-control input[type="checkbox"]:focus,\n.gigya-myPhoto-delete-button:focus,\n.gigya-myPhoto-uploadForm input:focus,\n.gigya-dummyPhoto-upload:focus {\n  border: 1px solid #2378cd !important;\n  outline: none !important;\n  box-shadow: 0 0 5px 0 #0070f0 !important;\n}\n\n.gigya-screen .gigya-composite-control.gigya-composite-control-phone-number-widget .gigya-phone-verified-status-image {\n  width: 16px;\n  height: 16px;\n  background-image: url("${imgBase}/screenSet/checkmarkValid.png");\n  background-position-x: 100%;\n  background-position-y: 50%;\n  background-repeat: no-repeat;\n}\n'
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
                "gigya.services.accounts.plugins.screenSet": {}
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
                instanceMethods: []
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
                pluginType: function pluginType() {}
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
                hasLicense: true
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
    Request: function Request() {},
    XhrRequest: function XhrRequest() {},
    Promise: function Promise() {},
    debug: function debug() {},
    getLoginToken: function getLoginToken() {},
    updateConfiguration: function updateConfiguration() {},
    getUrlParam: function getUrlParam() {},
    isReady: true,
    ClientFeature: function ClientFeature() {},
    flow: function flow() {},
    showDebugUI: function showDebugUI() {}
};
module.exports = {
    gigya: gigya
};
