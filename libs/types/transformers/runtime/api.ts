import {Runner} from "../type-maker";

declare type APIMap = {
    "socialize.login": Runner<{
        methodName: "socialize.login";
        settings: {
            oauth: true;
            preprocessor: any;
        };
        schema: "ctag|temporary_account|authFlow|connectWithoutLogin|provider|redirectMethod|redirect_uri|pendingRegistration|lang|regSource|extraPermissions|sessionExpiration|forceAuthentication|includeiRank|includeAllIdentities|extraFields|enabledProviders|disabledProviders|signIDs|openIDUsername|openIDURL|openIDProviderLogo|openIDProviderName|finalizeRegistration|include|actionAttributes|profileAttributes|googlePlayAppID|bp_channel_url|loginIfExists|includeUserInfo|redirectURL|authCodeOnly|enablePopupLocation|invite|regToken|loginMode|apiDomain|conflictHandling|forcePermissions|signKeys|dataCenter|forceAuthentication";
        requiresSession: false;
        adapterSettings: {
            clearSessionCondition: any;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "socialize.addConnection": Runner<{
        methodName: "socialize.addConnection";
        settings: {
            oauth: true;
        };
        schema: "ctag|temporary_account|authFlow|connectWithoutLogin|provider|redirectMethod|redirect_uri|pendingRegistration|lang|regSource|extraPermissions|sessionExpiration|forceAuthentication|includeiRank|includeAllIdentities|extraFields|enabledProviders|disabledProviders|signIDs|openIDUsername|openIDURL|openIDProviderLogo|openIDProviderName|finalizeRegistration|include|actionAttributes|profileAttributes|googlePlayAppID|bp_channel_url|loginIfExists|includeUserInfo|redirectURL|authCodeOnly|enablePopupLocation|invite|regToken|loginMode|apiDomain|conflictHandling|forcePermissions|signKeys|dataCenter|forceAuthentication";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "socialize.requestPermissions": Runner<{
        methodName: "socialize.requestPermissions";
        settings: {
            oauth: true;
            defaultParams: {
                forcePermissions: true;
            };
        };
        schema: "ctag|temporary_account|authFlow|connectWithoutLogin|provider|redirectMethod|redirect_uri|pendingRegistration|lang|regSource|extraPermissions|sessionExpiration|forceAuthentication|includeiRank|includeAllIdentities|extraFields|enabledProviders|disabledProviders|signIDs|openIDUsername|openIDURL|openIDProviderLogo|openIDProviderName|finalizeRegistration|include|actionAttributes|profileAttributes|googlePlayAppID|bp_channel_url|loginIfExists|includeUserInfo|redirectURL|authCodeOnly|enablePopupLocation|invite|regToken|loginMode|apiDomain|conflictHandling|forcePermissions|signKeys|dataCenter|forceAuthentication";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.socialLogin": Runner<{
        methodName: "accounts.socialLogin";
        settings: {
            oauth: true;
            preprocessor: any;
        };
        schema: "ctag|temporary_account|authFlow|connectWithoutLogin|provider|redirectMethod|redirect_uri|pendingRegistration|lang|regSource|extraPermissions|sessionExpiration|forceAuthentication|includeiRank|includeAllIdentities|extraFields|enabledProviders|disabledProviders|signIDs|openIDUsername|openIDURL|openIDProviderLogo|openIDProviderName|finalizeRegistration|include|actionAttributes|profileAttributes|googlePlayAppID|bp_channel_url|loginIfExists|includeUserInfo|redirectURL|authCodeOnly|enablePopupLocation|invite|regToken|loginMode|apiDomain|conflictHandling|forcePermissions|signKeys|dataCenter|forceAuthentication";
        requiresSession: false;
        adapterSettings: {
            clearSessionCondition: any;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    showDebugUI: Runner<{
        methodName: "showDebugUI";
        settings: {
            allowPopup: true;
            defaultParams: {
            };
            defaultPopupParams: {
            };
            requiredParams: "";
        };
        jsName: "socialize.plugins.debug";
    }>;
    showMyPhotoUI: Runner<{
        methodName: "showMyPhotoUI";
        settings: {
            useBasePlugin: true;
            defaultParams: {
            };
            defaultPopupParams: {
            };
            requiredParams: "";
        };
        jsName: "accounts.plugins.profilePhoto";
        namespace: "accounts";
        className: "profilePhoto.MyPhotoPlugin";
        instanceMethods: {
        };
    }>;
    runJsUnitTests: Runner<{
        methodName: "runJsUnitTests";
        settings: {
            useBasePlugin: true;
            defaultParams: {
            };
            defaultPopupParams: {
            };
            requiredParams: "";
        };
        jsName: "_.plugins.jsUtRunner";
        namespace: "_";
        className: "JsUtRunner.Jasmine.JasmineUtRunnerPlugin";
        instanceMethods: {
        };
    }>;
    loadBasePlugin: Runner<{
        methodName: "loadBasePlugin";
        settings: {
            useBasePlugin: true;
            defaultParams: {
            };
            defaultPopupParams: {
            };
            requiredParams: "";
        };
        jsName: "_.plugins.mock";
        namespace: "_";
        className: "Mock.MockPlugin";
        instanceMethods: {
        };
    }>;
    showLoginUI_v1: Runner<{
        methodName: "showLoginUI_v1";
        settings: {
            allowPopup: true;
            defaultParams: {
                width: number;
                height: number;
            };
            defaultPopupParams: {
                width: number;
                height: number;
            };
            requiredParams: "";
        };
        jsName: "socialize.plugins.login";
    }>;
    showLoginUI_v2: Runner<{
        methodName: "showLoginUI_v2";
        settings: {
            useBasePlugin: true;
            defaultParams: {
            };
            defaultPopupParams: {
            };
            requiredParams: "";
        };
        jsName: "socialize.plugins.login_v2";
        namespace: "socialize";
        className: "login_v2.LoginPlugin";
        instanceMethods: {
        };
    }>;
    showLoginUI: Runner<{
        methodName: "showLoginUI";
        _versions: [{"versionName":"1"},{"versionName":"2"}];
        _defaultVersionIndex: number;
    }>;
    showAddConnectionsUI_v1: Runner<{
        methodName: "showAddConnectionsUI_v1";
        settings: {
            allowPopup: true;
            defaultParams: {
                width: number;
                height: number;
            };
            defaultPopupParams: {
                width: number;
                height: number;
            };
            requiredParams: "";
        };
        jsName: "socialize.plugins.login";
    }>;
    showAddConnectionsUI_v2: Runner<{
        methodName: "showAddConnectionsUI_v2";
        settings: {
            useBasePlugin: true;
            defaultParams: {
            };
            defaultPopupParams: {
            };
            requiredParams: "";
        };
        jsName: "socialize.plugins.login_v2";
        namespace: "socialize";
        className: "login_v2.LoginPlugin";
        instanceMethods: {
        };
    }>;
    showAddConnectionsUI: Runner<{
        methodName: "showAddConnectionsUI";
        _versions: [{"versionName":"1"},{"versionName":"2"}];
        _defaultVersionIndex: number;
    }>;
    showEditConnectionsUI: Runner<{
        methodName: "showEditConnectionsUI";
        settings: {
            useBasePlugin: true;
            defaultParams: {
            };
            defaultPopupParams: {
            };
            requiredParams: "";
        };
        jsName: "socialize.plugins.edit";
        namespace: "socialize";
        className: "editConnections.EditConnectionPlugin";
        instanceMethods: {
        };
    }>;
    showSimpleShareUI: Runner<{
        methodName: "showSimpleShareUI";
        settings: {
            allowPopup: true;
            dontLoadPluginsCore: true;
            waitForAPIQueue: true;
            defaultParams: {
                width: number;
                height: number;
            };
            defaultPopupParams: {
            };
            requiredParams: "userAction";
        };
        jsName: "socialize.plugins.simpleShare";
    }>;
    showShareMobileUI: Runner<{
        methodName: "showShareMobileUI";
        settings: {
            allowPopup: true;
            defaultParams: {
            };
            defaultPopupParams: {
            };
            requiredParams: "userAction";
        };
        jsName: "socialize.plugins.shareMobile";
    }>;
    showTfaUI: Runner<{
        methodName: "showTfaUI";
        settings: {
            defaultParams: {
                width: number;
            };
            defaultPopupParams: {
            };
            requiredParams: "";
        };
        jsName: "accounts.plugins.tfa";
    }>;
    initHostedPage: Runner<{
        methodName: "initHostedPage";
        settings: {
            useBasePlugin: true;
            defaultParams: {
            };
            defaultPopupParams: {
            };
            requiredParams: "";
        };
        jsName: "accounts.plugins.pages";
        namespace: "accounts";
        className: "Pages.PagesPlugin";
        instanceMethods: {
        };
    }>;
    showScreenSet: Runner<{
        methodName: "showScreenSet";
        settings: {
            useBasePlugin: true;
            defaultParams: {
            };
            defaultPopupParams: {
            };
            requiredParams: "";
        };
        jsName: "accounts.plugins.screenSet";
        namespace: "accounts";
        className: "ScreenSet.ScreenSetPlugin";
        instanceMethods: ["hideScreenSet","switchScreen"];
        pluginType: any;
        injectionInfo: {
            name: "screenSet";
            namespace: "accounts";
            methodName: "showScreenSet";
            jsName: "gigya.services.accounts.plugins.screenSet";
            publicMethods: {
                hideScreenSet: {
                    instanceMethod: "cancel";
                    argNames: {
                    };
                };
                switchScreen: {
                    instanceMethod: "switchScreen";
                    argNames: ["screen"];
                };
            };
        };
    }>;
    "socialize.getAvailableProviders": Runner<{
        methodName: "socialize.getAvailableProviders";
        settings: {
        };
        schema: "enabledProviders|disabledProviders|requiredCapabilities";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "socialize.notifyLogin": Runner<{
        methodName: "socialize.notifyLogin";
        settings: {
        };
        schema: "siteUID|UIDTimestamp|UIDSig|UIDNonce|provider|authToken|tokenSecret|regSource|tokenExpiration|sessionHandle|sessionHandleExpiration|userInfo|providerSessions|sessionExpiration|authCode|includeAllIdentitiesincludeiRank|group|settings|extraFields|signIDs|newUser|actionAttributes|profileAttributes|bp_channel_url|lang|signKeys";
        requiresSession: false;
        adapterSettings: {
            clearSession: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "socialize.convertAction": Runner<{
        methodName: "socialize.convertAction";
        settings: {
        };
        schema: "userAction|[providerCapability=actions]UserAction|provider";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "socialize.deleteAccount": Runner<{
        methodName: "socialize.deleteAccount";
        settings: {
        };
        schema: undefined;
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "socialize.delUserSettings": Runner<{
        methodName: "socialize.delUserSettings";
        settings: {
        };
        schema: "group|settings";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "socialize.getContacts": Runner<{
        methodName: "socialize.getContacts";
        settings: {
        };
        schema: "enabledProviders|disabledProviders";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "socialize.getRawData": Runner<{
        methodName: "socialize.getRawData";
        settings: {
        };
        schema: "provider|UID|fields|dataFormat|path";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "socialize.getSessionInfo": Runner<{
        methodName: "socialize.getSessionInfo";
        settings: {
        };
        schema: "provider|paddingMode|encrypt|signIDs|encryptAll";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "socialize.getUserInfo": Runner<{
        methodName: "socialize.getUserInfo";
        settings: {
        };
        schema: "enabledProviders|disabledProviders|signIDs|includeiRank|includeAllIdentities|extraFields|group|settings|includeOpenidUID|include";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "socialize.checkin": Runner<{
        methodName: "socialize.checkin";
        settings: {
        };
        schema: "enabledProviders|disabledProviders|placeID|comment|latitude|longitude|actionAttributes|profileAttributes";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "socialize.logout": Runner<{
        methodName: "socialize.logout";
        settings: {
            preprocessor: any;
            disableCache: true;
        };
        schema: "signIDs|samlContext|sustainLogoutURLs";
        requiresSession: true;
        adapterSettings: {
            requiresSession: any;
            forceHttps: true;
        };
        altSessionParams: undefined;
    }>;
    "socialize.notifyRegistration": Runner<{
        methodName: "socialize.notifyRegistration";
        settings: {
        };
        schema: "siteUID|UIDTimestamp|UIDSig";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "socialize.removeConnection": Runner<{
        methodName: "socialize.removeConnection";
        settings: {
        };
        schema: "provider|lastIdentityHandling|removeLoginID";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "socialize.setUID": Runner<{
        methodName: "socialize.setUID";
        settings: {
        };
        schema: "siteUID|UIDTimestamp|UIDSig";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "socialize.unlinkAccounts": Runner<{
        methodName: "socialize.unlinkAccounts";
        settings: {
        };
        schema: undefined;
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "socialize.facebookGraphOperation": Runner<{
        methodName: "socialize.facebookGraphOperation";
        settings: {
        };
        schema: "graphPath|graphParams|authRequired|method|authType";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "socialize.notifySSOLogin": Runner<{
        methodName: "socialize.notifySSOLogin";
        settings: {
        };
        schema: "bp_channel_url";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "gcs.getUserData": Runner<{
        methodName: "gcs.getUserData";
        settings: {
        };
        schema: "type|fields";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "gcs.setUserData": Runner<{
        methodName: "gcs.setUserData";
        settings: {
        };
        schema: "data|type|updateBehavior";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "gcs.search": Runner<{
        methodName: "gcs.search";
        settings: {
        };
        schema: "expTime|querySig|query";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "gcs.getSchema": Runner<{
        methodName: "gcs.getSchema";
        settings: {
        };
        schema: "schemaType";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.b2b.registerOrganization": Runner<{
        methodName: "accounts.b2b.registerOrganization";
        settings: {
        };
        schema: "organization|requester";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.b2b.getOrganizationSchema": Runner<{
        methodName: "accounts.b2b.getOrganizationSchema";
        settings: {
            preprocessor: any;
        };
        schema: "";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.login": Runner<{
        methodName: "accounts.login";
        settings: {
            riskAssessment: true;
        };
        schema: "loginID|password|sessionExpiration|targetEnv|regToken|include|actionAttributes|profileAttributes|includeUserInfo|includeDynamicSchema|bp_channel_url|captchaToken|blackBoxToken|captchaType|captchaText|loginMode|signKeys|lang|riskContext|aToken";
        requiresSession: false;
        adapterSettings: {
            clearSessionCondition: any;
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.linkAccounts": Runner<{
        methodName: "accounts.linkAccounts";
        settings: {
        };
        schema: "loginID|password|sessionExpiration|targetEnv|include|regToken|includeUserInfo|bp_channel_url|signKeys";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.notifySocialLogin": Runner<{
        methodName: "accounts.notifySocialLogin";
        settings: {
        };
        schema: "loginMode|providerSessions|sessionExpiration";
        requiresSession: true;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: "providerSessions";
    }>;
    "accounts.initRegistration": Runner<{
        methodName: "accounts.initRegistration";
        settings: {
            preprocessor: any;
        };
        schema: "sdk|isLite|dataCenter";
        requiresSession: false;
        adapterSettings: {
            clearSession: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.initProgression": Runner<{
        methodName: "accounts.initProgression";
        settings: {
            preprocessor: any;
        };
        schema: "sdk|regToken";
        requiresSession: false;
        adapterSettings: {
            clearSession: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.register": Runner<{
        methodName: "accounts.register";
        settings: {
            riskAssessment: true;
        };
        schema: "username|email|password|UID|regToken|siteUID|secretQuestion|secretAnswer|regSource|profile|preferences|displayedPreferences|data|captchaText|captchaType|captchaToken|blackBoxToken|lang|hashedPassword|pwHashAlgorithm|skipVerification|finalizeRegistration|targetEnv|sessionExpiration|include|actionAttributes|profileAttributes|includeUserInfo|bp_channel_url|signKeys|subscriptions|communications|addresses";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.finalizeRegistration": Runner<{
        methodName: "accounts.finalizeRegistration";
        settings: {
        };
        schema: "regToken|targetEnv|include|includeUserInfo|bp_channel_url|allowAccountsLinking|signKeys|subscriptions";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.captchaImage": Runner<{
        methodName: "accounts.captchaImage";
        settings: {
        };
        schema: "regToken";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.importProfilePhoto": Runner<{
        methodName: "accounts.importProfilePhoto";
        settings: {
        };
        schema: "regToken|URL|publish";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.setProfilePhoto": Runner<{
        methodName: "accounts.setProfilePhoto";
        settings: {
        };
        schema: "regToken|publish|photoBytes";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.resetPassword": Runner<{
        methodName: "accounts.resetPassword";
        settings: {
            riskAssessment: true;
        };
        schema: "lang|loginID|passwordResetToken|secretAnswer|securityFields|newPassword|email|captchaType|captchaToken|blackBoxToken";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.removeProfilePhoto": Runner<{
        methodName: "accounts.removeProfilePhoto";
        settings: {
        };
        schema: "regToken";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.isAvailableLoginID": Runner<{
        methodName: "accounts.isAvailableLoginID";
        settings: {
        };
        schema: "loginID";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.address.suggestions.get": Runner<{
        methodName: "accounts.address.suggestions.get";
        settings: {
        };
        schema: "address|country|apiKey|suggestionreply|longitude|latitude";
        requiresSession: undefined;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.resendVerificationCode": Runner<{
        methodName: "accounts.resendVerificationCode";
        settings: {
        };
        schema: "regToken|email";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.getCaptcha": Runner<{
        methodName: "accounts.getCaptcha";
        settings: {
        };
        schema: "";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.getPolicies": Runner<{
        methodName: "accounts.getPolicies";
        settings: {
            preprocessor: any;
        };
        schema: "sections";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.getSchema": Runner<{
        methodName: "accounts.getSchema";
        settings: {
            preprocessor: any;
        };
        schema: "sections|schemaType";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.getSiteConsentDetails": Runner<{
        methodName: "accounts.getSiteConsentDetails";
        settings: {
            preprocessor: any;
        };
        schema: "";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.getLegalStatements": Runner<{
        methodName: "accounts.getLegalStatements";
        settings: {
            preprocessor: any;
        };
        schema: "consentId|lang";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.verifyLogin": Runner<{
        methodName: "accounts.verifyLogin";
        settings: {
        };
        schema: "include|extraProfileFields|targetEnv";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.getAccountInfo": Runner<{
        methodName: "accounts.getAccountInfo";
        settings: {
        };
        schema: "include|extraProfileFields|regToken|lang|includeCommunications";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: "regToken";
    }>;
    "accounts.setAccountInfo": Runner<{
        methodName: "accounts.setAccountInfo";
        settings: {
            riskAssessment: true;
        };
        schema: "profile|preferences|displayedPreferences|data|regToken|verifyToken|oldPassword|password|newPassword|addLoginEmails|removeLoginEmails|username|secretQuestion|secretAnswer|requirePasswordChange|conflictHandling|tfaStatus|rba|subscriptions|communications|preferences|lang|captchaToken|blackBoxToken|captchaType|customIdentifiers|addresses";
        requiresSession: true;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: "regToken";
    }>;
    "accounts.logout": Runner<{
        methodName: "accounts.logout";
        settings: {
            preprocessor: any;
            disableCache: true;
        };
        schema: "signIDs|samlContext|sustainLogoutURLs";
        requiresSession: true;
        adapterSettings: {
            requiresSession: any;
            forceHttps: true;
        };
        altSessionParams: undefined;
    }>;
    "accounts.search": Runner<{
        methodName: "accounts.search";
        settings: {
        };
        schema: "expTime|querySig|query";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.getScreenSets": Runner<{
        methodName: "accounts.getScreenSets";
        settings: {
            preprocessor: any;
        };
        schema: "screenSetIDs|include|lang|screenSetVersion";
        requiresSession: false;
        adapterSettings: {
            useHttpStatusCodes: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.sso.login": Runner<{
        methodName: "accounts.sso.login";
        settings: {
            oauth: true;
        };
        schema: "redirectURL|state|authFlow|context|useChildContext";
        requiresSession: false;
        adapterSettings: {
            oauthMode: number;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.getConflictingAccount": Runner<{
        methodName: "accounts.getConflictingAccount";
        settings: {
        };
        schema: "regToken|loginID";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.resetSitePreferences": Runner<{
        methodName: "accounts.resetSitePreferences";
        settings: {
            postprocessor: any;
        };
        schema: "";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.getJWT": Runner<{
        methodName: "accounts.getJWT";
        settings: {
        };
        schema: "fields|expiration|audience";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.tfa.getProviders": Runner<{
        methodName: "accounts.tfa.getProviders";
        settings: {
        };
        schema: "regToken";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: "regToken";
    }>;
    "accounts.tfa.initTFA": Runner<{
        methodName: "accounts.tfa.initTFA";
        settings: {
        };
        schema: "provider|mode|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.tfa.finalizeTFA": Runner<{
        methodName: "accounts.tfa.finalizeTFA";
        settings: {
        };
        schema: "gigyaAssertion|providerAssertion|tempDevice|regToken";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: "regToken";
    }>;
    "accounts.tfa.deactivateProvider": Runner<{
        methodName: "accounts.tfa.deactivateProvider";
        settings: {
        };
        schema: "provider";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.tfa.unregisterDevice": Runner<{
        methodName: "accounts.tfa.unregisterDevice";
        settings: {
        };
        schema: "allDevices";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.tfa.backupcodes.get": Runner<{
        methodName: "accounts.tfa.backupcodes.get";
        settings: {
        };
        schema: "gigyaAssertion";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.tfa.backupcodes.create": Runner<{
        methodName: "accounts.tfa.backupcodes.create";
        settings: {
        };
        schema: "gigyaAssertion";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.tfa.backupcodes.verify": Runner<{
        methodName: "accounts.tfa.backupcodes.verify";
        settings: {
        };
        schema: "gigyaAssertion|code|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.tfa.phone.getRegisteredPhoneNumbers": Runner<{
        methodName: "accounts.tfa.phone.getRegisteredPhoneNumbers";
        settings: {
            preprocessor: any;
        };
        schema: "gigyaAssertion";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.tfa.phone.removePhone": Runner<{
        methodName: "accounts.tfa.phone.removePhone";
        settings: {
        };
        schema: "gigyaAssertion|phoneId";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.tfa.phone.sendVerificationCode": Runner<{
        methodName: "accounts.tfa.phone.sendVerificationCode";
        settings: {
        };
        schema: "gigyaAssertion|lang|phoneID|phone|method|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.tfa.phone.completeVerification": Runner<{
        methodName: "accounts.tfa.phone.completeVerification";
        settings: {
        };
        schema: "gigyaAssertion|phvToken|code|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.tfa.email.getEmails": Runner<{
        methodName: "accounts.tfa.email.getEmails";
        settings: {
            preprocessor: any;
        };
        schema: "gigyaAssertion";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.tfa.email.sendVerificationCode": Runner<{
        methodName: "accounts.tfa.email.sendVerificationCode";
        settings: {
        };
        schema: "emailID|gigyaAssertion|lang|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.tfa.email.completeVerification": Runner<{
        methodName: "accounts.tfa.email.completeVerification";
        settings: {
        };
        schema: "gigyaAssertion|phvToken|code|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.tfa.totp.register": Runner<{
        methodName: "accounts.tfa.totp.register";
        settings: {
        };
        schema: "gigyaAssertion|includeSecret";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.tfa.totp.verify": Runner<{
        methodName: "accounts.tfa.totp.verify";
        settings: {
        };
        schema: "gigyaAssertion|sctToken|code|name|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.tfa.totp.getRegistered": Runner<{
        methodName: "accounts.tfa.totp.getRegistered";
        settings: {
            preprocessor: any;
        };
        schema: "gigyaAssertion";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.tfa.totp.remove": Runner<{
        methodName: "accounts.tfa.totp.remove";
        settings: {
        };
        schema: "gigyaAssertion|id";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.tfa.push.isVerified": Runner<{
        methodName: "accounts.tfa.push.isVerified";
        settings: {
        };
        schema: "gigyaAssertion|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.tfa.push.sendVerification": Runner<{
        methodName: "accounts.tfa.push.sendVerification";
        settings: {
        };
        schema: "gigyaAssertion|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.b2b.delegatedAdminLogin": Runner<{
        methodName: "accounts.b2b.delegatedAdminLogin";
        settings: {
        };
        schema: "orgId|lang";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.b2b.getOrganizationInfo": Runner<{
        methodName: "accounts.b2b.getOrganizationInfo";
        settings: {
        };
        schema: "orgId|bpid";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.b2b.setOrganizationContext": Runner<{
        methodName: "accounts.b2b.setOrganizationContext";
        settings: {
        };
        schema: "bpid";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.b2b.getOrganizationContext": Runner<{
        methodName: "accounts.b2b.getOrganizationContext";
        settings: {
        };
        schema: "";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.b2b.auth.getAssets": Runner<{
        methodName: "accounts.b2b.auth.getAssets";
        settings: {
        };
        schema: "appId|bpid|orgId|includePolicies|environments";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.groups.getSchema": Runner<{
        methodName: "accounts.groups.getSchema";
        settings: {
        };
        schema: "model";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.groups.registerGroup": Runner<{
        methodName: "accounts.groups.registerGroup";
        settings: {
        };
        schema: "model|groupId|groupData";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.groups.setGroupInfo": Runner<{
        methodName: "accounts.groups.setGroupInfo";
        settings: {
        };
        schema: "model|groupId|groupData";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.groups.getGroupInfo": Runner<{
        methodName: "accounts.groups.getGroupInfo";
        settings: {
        };
        schema: "model|groupId";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.groups.deleteGroup": Runner<{
        methodName: "accounts.groups.deleteGroup";
        settings: {
        };
        schema: "model|groupId";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.groups.setGroupMemberInfo": Runner<{
        methodName: "accounts.groups.setGroupMemberInfo";
        settings: {
        };
        schema: "model|groupId|uid|relationshipData|permissions";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.groups.getGroupMemberInfo": Runner<{
        methodName: "accounts.groups.getGroupMemberInfo";
        settings: {
        };
        schema: "model|groupId|uid|include";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.groups.removeMember": Runner<{
        methodName: "accounts.groups.removeMember";
        settings: {
        };
        schema: "model|groupId|uid";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.groups.getAllMemberGroups": Runner<{
        methodName: "accounts.groups.getAllMemberGroups";
        settings: {
        };
        schema: "uid|flatNestedFields";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.groups.searchGroupMembers": Runner<{
        methodName: "accounts.groups.searchGroupMembers";
        settings: {
        };
        schema: "model|groupId|limit|start";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.groups.createInvitation": Runner<{
        methodName: "accounts.groups.createInvitation";
        settings: {
        };
        schema: "model|groupId|isOneTime";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.groups.invitationConfirm": Runner<{
        methodName: "accounts.groups.invitationConfirm";
        settings: {
        };
        schema: "invitationId";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.groups.finalizeInvitation": Runner<{
        methodName: "accounts.groups.finalizeInvitation";
        settings: {
        };
        schema: "token";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.otp.sendCode": Runner<{
        methodName: "accounts.otp.sendCode";
        settings: {
            riskAssessment: true;
            preprocessor: any;
        };
        schema: "regToken|phoneNumber|email|lang|captchaToken|captchaType|blackBoxToken|dataCenter|phvToken";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.otp.login": Runner<{
        methodName: "accounts.otp.login";
        settings: {
        };
        schema: "vToken|code|targetEnv|includeUserInfo|include|regSource|sessionExpiration";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.otp.update": Runner<{
        methodName: "accounts.otp.update";
        settings: {
        };
        schema: "vToken|code|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.auth.guest": Runner<{
        methodName: "accounts.auth.guest";
        settings: {
        };
        schema: "identifier|identifierType";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.auth.otp.verify": Runner<{
        methodName: "accounts.auth.otp.verify";
        settings: {
        };
        schema: "vToken|code";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.auth.otp.authenticate": Runner<{
        methodName: "accounts.auth.otp.authenticate";
        settings: {
        };
        schema: "vToken|code";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.auth.getMethods": Runner<{
        methodName: "accounts.auth.getMethods";
        settings: {
        };
        schema: "identifier|aToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.auth.push.sendVerification": Runner<{
        methodName: "accounts.auth.push.sendVerification";
        settings: {
        };
        schema: "identifier";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.auth.push.isVerified": Runner<{
        methodName: "accounts.auth.push.isVerified";
        settings: {
        };
        schema: "vToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.auth.magiclink.email.send": Runner<{
        methodName: "accounts.auth.magiclink.email.send";
        settings: {
        };
        schema: "email|context|lang";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.auth.magiclink.email.login": Runner<{
        methodName: "accounts.auth.magiclink.email.login";
        settings: {
        };
        schema: "vToken|code|targetEnv|includeUserInfo|include|regSource|sessionExpiration";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.auth.otp.email.sendCode": Runner<{
        methodName: "accounts.auth.otp.email.sendCode";
        settings: {
        };
        schema: "email|lang";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.auth.otp.email.login": Runner<{
        methodName: "accounts.auth.otp.email.login";
        settings: {
        };
        schema: "code|vToken|targetEnv|includeUserInfo|include|regSource|sessionExpiration";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.identifier.createToken": Runner<{
        methodName: "accounts.identifier.createToken";
        settings: {
        };
        schema: "identifier|identifierType";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.identity.authorize": Runner<{
        methodName: "accounts.identity.authorize";
        settings: {
        };
        schema: "authorization_details|grant_type";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.auth.fido.initRegisterCredentials": Runner<{
        methodName: "accounts.auth.fido.initRegisterCredentials";
        settings: {
            preprocessor: any;
        };
        schema: "regToken|aToken";
        requiresSession: true;
        adapterSettings: {
            clearSessionCondition: any;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: "regToken|aToken";
    }>;
    "accounts.auth.fido.registerCredentials": Runner<{
        methodName: "accounts.auth.fido.registerCredentials";
        settings: {
            preprocessor: any;
        };
        schema: "token|attestation|deviceName|regToken";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.auth.fido.getAssertionOptions": Runner<{
        methodName: "accounts.auth.fido.getAssertionOptions";
        settings: {
        };
        schema: "";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.auth.fido.verifyAssertion": Runner<{
        methodName: "accounts.auth.fido.verifyAssertion";
        settings: {
        };
        schema: "token|authenticatorAssertion";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "accounts.auth.fido.getCredentials": Runner<{
        methodName: "accounts.auth.fido.getCredentials";
        settings: {
            preprocessor: any;
        };
        schema: "regToken";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: "regToken";
    }>;
    "accounts.auth.fido.removeCredential": Runner<{
        methodName: "accounts.auth.fido.removeCredential";
        settings: {
            preprocessor: any;
        };
        schema: "credentialId|regToken";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: "regToken";
    }>;
    "accounts.session.verify": Runner<{
        methodName: "accounts.session.verify";
        settings: {
        };
        schema: "";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "oauth.register": Runner<{
        methodName: "oauth.register";
        settings: {
        };
        schema: "lang|regSource|cid|context|sessionExpiration|userInfo|verifyToken|authMode";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            useBearerToken: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "oauth.connect": Runner<{
        methodName: "oauth.connect";
        settings: {
            preprocessor: any;
        };
        schema: "regToken";
        requiresSession: true;
        adapterSettings: {
            forcePost: true;
            useBearerToken: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: "regToken";
    }>;
    "oauth.disconnect": Runner<{
        methodName: "oauth.disconnect";
        settings: {
            preprocessor: any;
        };
        schema: "regToken";
        requiresSession: true;
        adapterSettings: {
            forcePost: true;
            useBearerToken: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: "regToken";
    }>;
    "oauth.authorize": Runner<{
        methodName: "oauth.authorize";
        settings: {
        };
        schema: "response_type|authMode";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            useBearerToken: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "oauth.token": Runner<{
        methodName: "oauth.token";
        settings: {
        };
        schema: "grant_type|code|targetEnv|sessionExpiration";
        requiresSession: false;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "auth.token.authenticationContext": Runner<{
        methodName: "auth.token.authenticationContext";
        settings: {
        };
        schema: "regToken";
        requiresSession: true;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: "regToken";
    }>;
    "accounts.auth.login": Runner<{
        methodName: "accounts.auth.login";
        settings: {
        };
        schema: "accessToken|sessionExpiration|targetEnv|include|includeUserInfo|loginMode|lang";
        requiresSession: false;
        adapterSettings: {
            clearSessionCondition: any;
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "ds.store": Runner<{
        methodName: "ds.store";
        settings: {
        };
        schema: "type|data|oid|updateBehavior";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "ds.get": Runner<{
        methodName: "ds.get";
        settings: {
        };
        schema: "type|data|oid|fields";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "ds.search": Runner<{
        methodName: "ds.search";
        settings: {
        };
        schema: "expTime|querySig|query";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "ds.getSchema": Runner<{
        methodName: "ds.getSchema";
        settings: {
        };
        schema: "";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "ds.delete": Runner<{
        methodName: "ds.delete";
        settings: {
        };
        schema: "type|oid|fields";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "ids.getAccountInfo": Runner<{
        methodName: "ids.getAccountInfo";
        settings: {
        };
        schema: "include|extraProfileFields";
        requiresSession: true;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "ids.setAccountInfo": Runner<{
        methodName: "ids.setAccountInfo";
        settings: {
        };
        schema: "profile|preferences|data|oldPassword|password|newPassword|addLoginEmails|removeLoginEmails|username|secretQuestion|secretAnswer|requirePasswordChange|lang";
        requiresSession: false;
        adapterSettings: {
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "ids.search": Runner<{
        methodName: "ids.search";
        settings: {
        };
        schema: "expTime|querySig|query";
        requiresSession: undefined;
        adapterSettings: {
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "fidm.oidc.op.deviceContinue": Runner<{
        methodName: "fidm.oidc.op.deviceContinue";
        settings: {
            restUrl: "oidc/op/v1.0/{APIKey}/device_continue";
        };
        schema: "user_code";
        requiresSession: true;
        adapterSettings: {
            namespace: "fidm";
            forcePost: true;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
    "fidm.oidc.op.getContextData": Runner<{
        methodName: "fidm.oidc.op.getContextData";
        settings: {
            restUrl: "oidc/op/v1.0/{APIKey}/contextData";
        };
        schema: "oidc_context";
        requiresSession: false;
        adapterSettings: {
            namespace: "fidm";
            forcePost: false;
            forceHttps: true;
            requiresSession: any;
        };
        altSessionParams: undefined;
    }>;
};



const showScreen:  Runner<{
    methodName: "showScreenSet";
    settings: {
        useBasePlugin: true;
        defaultParams: {
        };
        defaultPopupParams: {
        };
        requiredParams: "";
    };
    jsName: "accounts.plugins.screenSet";
    namespace: "accounts";
    className: "ScreenSet.ScreenSetPlugin";
    instanceMethods: ["hideScreenSet","switchScreen"];
    pluginType: any;
    injectionInfo: {
        name: "screenSet";
        namespace: "accounts";
        methodName: "showScreenSet";
        jsName: "gigya.services.accounts.plugins.screenSet";
        publicMethods: {
            hideScreenSet: {
                instanceMethod: "cancel";
                argNames: {
                };
            };
            switchScreen: {
                instanceMethod: "switchScreen";
                argNames: ["screen"];
            };
        };
    };
}>;

showScreen({screenSet: "screen"})
 const show: APIMap["showScreenSet"];
    show({
        screenSet:"s",
        
    })