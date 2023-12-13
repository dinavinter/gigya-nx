declare module 'gigya' {
    import {APIParams} from '@gigya/types';

    namespace socialize {
        function login(args?: APIParams<{
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
        }>): void;

        function addConnection(args?: APIParams<{
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
        }>): void;

        function requestPermissions(args?: APIParams<{
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
        }>): void;

        function showLoginUI_v2(args?: APIParams<{
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
        }>): void;

        function showAddConnectionsUI_v2(args?: APIParams<{
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
        }>): void;

        function showEditConnectionsUI(args?: APIParams<{
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
        }>): void;

        function getAvailableProviders(args?: APIParams<{
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
        }>): void;

        function notifyLogin(args?: APIParams<{
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
        }>): void;

        function convertAction(args?: APIParams<{
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
        }>): void;

        function deleteAccount(args?: APIParams<{
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
        }>): void;

        function delUserSettings(args?: APIParams<{
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
        }>): void;

        function getContacts(args?: APIParams<{
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
        }>): void;

        function getRawData(args?: APIParams<{
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
        }>): void;

        function getSessionInfo(args?: APIParams<{
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
        }>): void;

        function getUserInfo(args?: APIParams<{
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
        }>): void;

        function checkin(args?: APIParams<{
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
        }>): void;

        function logout(args?: APIParams<{
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
        }>): void;

        function notifyRegistration(args?: APIParams<{
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
        }>): void;

        function removeConnection(args?: APIParams<{
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
        }>): void;

        function setUID(args?: APIParams<{
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
        }>): void;

        function unlinkAccounts(args?: APIParams<{
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
        }>): void;

        function facebookGraphOperation(args?: APIParams<{
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
        }>): void;

        function notifySSOLogin(args?: APIParams<{
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
        }>): void;

    }

    namespace accounts {
        function socialLogin(args?: APIParams<{
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
        }>): void;

        function showMyPhotoUI(args?: APIParams<{
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
        }>): void;

        function initHostedPage(args?: APIParams<{
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
        }>): void;

        function showScreenSet(args?: APIParams<{
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
        }>): void;

        function login(args?: APIParams<{
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
        }>): void;

        function linkAccounts(args?: APIParams<{
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
        }>): void;

        function notifySocialLogin(args?: APIParams<{
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
        }>): void;

        function initRegistration(args?: APIParams<{
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
        }>): void;

        function initProgression(args?: APIParams<{
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
        }>): void;

        function register(args?: APIParams<{
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
        }>): void;

        function finalizeRegistration(args?: APIParams<{
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
        }>): void;

        function captchaImage(args?: APIParams<{
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
        }>): void;

        function importProfilePhoto(args?: APIParams<{
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
        }>): void;

        function setProfilePhoto(args?: APIParams<{
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
        }>): void;

        function resetPassword(args?: APIParams<{
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
        }>): void;

        function removeProfilePhoto(args?: APIParams<{
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
        }>): void;

        function isAvailableLoginID(args?: APIParams<{
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
        }>): void;

        function resendVerificationCode(args?: APIParams<{
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
        }>): void;

        function getCaptcha(args?: APIParams<{
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
        }>): void;

        function getPolicies(args?: APIParams<{
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
        }>): void;

        function getSchema(args?: APIParams<{
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
        }>): void;

        function getSiteConsentDetails(args?: APIParams<{
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
        }>): void;

        function getLegalStatements(args?: APIParams<{
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
        }>): void;

        function verifyLogin(args?: APIParams<{
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
        }>): void;

        function getAccountInfo(args?: APIParams<{
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
        }>): void;

        function setAccountInfo(args?: APIParams<{
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
        }>): void;

        function logout(args?: APIParams<{
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
        }>): void;

        function search(args?: APIParams<{
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
        }>): void;

        function getScreenSets(args?: APIParams<{
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
        }>): void;

        function getConflictingAccount(args?: APIParams<{
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
        }>): void;

        function resetSitePreferences(args?: APIParams<{
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
        }>): void;

        function getJWT(args?: APIParams<{
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
        }>): void;

        namespace b2b {
            function registerOrganization(args?: APIParams<{
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
            }>): void;

            function getOrganizationSchema(args?: APIParams<{
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
            }>): void;

            function delegatedAdminLogin(args?: APIParams<{
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
            }>): void;

            function getOrganizationInfo(args?: APIParams<{
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
            }>): void;

            function setOrganizationContext(args?: APIParams<{
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
            }>): void;

            function getOrganizationContext(args?: APIParams<{
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
            }>): void;

            namespace auth {
                function getAssets(args?: APIParams<{
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
                }>): void;

            }

        }

        namespace sso {
            function login(args?: APIParams<{
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
            }>): void;

        }

        namespace tfa {
            function getProviders(args?: APIParams<{
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
            }>): void;

            function initTFA(args?: APIParams<{
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
            }>): void;

            function finalizeTFA(args?: APIParams<{
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
            }>): void;

            function deactivateProvider(args?: APIParams<{
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
            }>): void;

            function unregisterDevice(args?: APIParams<{
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
            }>): void;

            namespace backupcodes {
                function get(args?: APIParams<{
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
                }>): void;

                function create(args?: APIParams<{
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
                }>): void;

                function verify(args?: APIParams<{
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
                }>): void;

            }

            namespace phone {
                function getRegisteredPhoneNumbers(args?: APIParams<{
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
                }>): void;

                function removePhone(args?: APIParams<{
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
                }>): void;

                function sendVerificationCode(args?: APIParams<{
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
                }>): void;

                function completeVerification(args?: APIParams<{
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
                }>): void;

            }

            namespace email {
                function getEmails(args?: APIParams<{
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
                }>): void;

                function sendVerificationCode(args?: APIParams<{
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
                }>): void;

                function completeVerification(args?: APIParams<{
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
                }>): void;

            }

            namespace totp {
                function register(args?: APIParams<{
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
                }>): void;

                function verify(args?: APIParams<{
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
                }>): void;

                function getRegistered(args?: APIParams<{
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
                }>): void;

                function remove(args?: APIParams<{
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
                }>): void;

            }

            namespace push {
                function isVerified(args?: APIParams<{
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
                }>): void;

                function sendVerification(args?: APIParams<{
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
                }>): void;

            }

        }

        namespace groups {
            function getSchema(args?: APIParams<{
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
            }>): void;

            function registerGroup(args?: APIParams<{
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
            }>): void;

            function setGroupInfo(args?: APIParams<{
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
            }>): void;

            function getGroupInfo(args?: APIParams<{
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
            }>): void;

            function deleteGroup(args?: APIParams<{
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
            }>): void;

            function setGroupMemberInfo(args?: APIParams<{
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
            }>): void;

            function getGroupMemberInfo(args?: APIParams<{
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
            }>): void;

            function removeMember(args?: APIParams<{
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
            }>): void;

            function getAllMemberGroups(args?: APIParams<{
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
            }>): void;

            function searchGroupMembers(args?: APIParams<{
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
            }>): void;

            function createInvitation(args?: APIParams<{
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
            }>): void;

            function invitationConfirm(args?: APIParams<{
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
            }>): void;

            function finalizeInvitation(args?: APIParams<{
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
            }>): void;

        }

        namespace otp {
            function sendCode(args?: APIParams<{
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
            }>): void;

            function login(args?: APIParams<{
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
            }>): void;

            function update(args?: APIParams<{
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
            }>): void;

        }

        namespace auth {
            function guest(args?: APIParams<{
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
            }>): void;

            function getMethods(args?: APIParams<{
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
            }>): void;

            function login(args?: APIParams<{
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
            }>): void;

            namespace otp {
                function verify(args?: APIParams<{
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
                }>): void;

                function authenticate(args?: APIParams<{
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
                }>): void;

                namespace email {
                    function sendCode(args?: APIParams<{
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
                    }>): void;

                    function login(args?: APIParams<{
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
                    }>): void;

                }

            }

            namespace push {
                function sendVerification(args?: APIParams<{
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
                }>): void;

                function isVerified(args?: APIParams<{
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
                }>): void;

            }

            namespace fido {
                function initRegisterCredentials(args?: APIParams<{
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
                }>): void;

                function registerCredentials(args?: APIParams<{
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
                }>): void;

                function getAssertionOptions(args?: APIParams<{
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
                }>): void;

                function verifyAssertion(args?: APIParams<{
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
                }>): void;

                function getCredentials(args?: APIParams<{
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
                }>): void;

                function removeCredential(args?: APIParams<{
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
                }>): void;

            }

        }

        namespace identifier {
            function createToken(args?: APIParams<{
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
            }>): void;

        }

        namespace identity {
            function authorize(args?: APIParams<{
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
            }>): void;

        }

        namespace session {
            function verify(args?: APIParams<{
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
            }>): void;

        }

    }

    namespace _ {
        function runJsUnitTests(args?: APIParams<{
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
        }>): void;

        function loadBasePlugin(args?: APIParams<{
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
        }>): void;

    }

    namespace gcs {
        function getUserData(args?: APIParams<{
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
        }>): void;

        function setUserData(args?: APIParams<{
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
        }>): void;

        function search(args?: APIParams<{
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
        }>): void;

        function getSchema(args?: APIParams<{
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
        }>): void;

    }

    namespace b2b {
        function registerOrganization(args?: APIParams<{
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
        }>): void;

        function getOrganizationSchema(args?: APIParams<{
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
        }>): void;

        function delegatedAdminLogin(args?: APIParams<{
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
        }>): void;

        function getOrganizationInfo(args?: APIParams<{
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
        }>): void;

        function setOrganizationContext(args?: APIParams<{
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
        }>): void;

        function getOrganizationContext(args?: APIParams<{
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
        }>): void;

        namespace auth {
            function getAssets(args?: APIParams<{
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
            }>): void;

        }

    }

    namespace suggestions {
        function get(args?: APIParams<{
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
        }>): void;

    }

    namespace sso {
        function login(args?: APIParams<{
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
        }>): void;

    }

    namespace tfa {
        function getProviders(args?: APIParams<{
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
        }>): void;

        function initTFA(args?: APIParams<{
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
        }>): void;

        function finalizeTFA(args?: APIParams<{
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
        }>): void;

        function deactivateProvider(args?: APIParams<{
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
        }>): void;

        function unregisterDevice(args?: APIParams<{
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
        }>): void;

        namespace backupcodes {
            function get(args?: APIParams<{
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
            }>): void;

            function create(args?: APIParams<{
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
            }>): void;

            function verify(args?: APIParams<{
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
            }>): void;

        }

        namespace phone {
            function getRegisteredPhoneNumbers(args?: APIParams<{
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
            }>): void;

            function removePhone(args?: APIParams<{
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
            }>): void;

            function sendVerificationCode(args?: APIParams<{
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
            }>): void;

            function completeVerification(args?: APIParams<{
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
            }>): void;

        }

        namespace email {
            function getEmails(args?: APIParams<{
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
            }>): void;

            function sendVerificationCode(args?: APIParams<{
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
            }>): void;

            function completeVerification(args?: APIParams<{
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
            }>): void;

        }

        namespace totp {
            function register(args?: APIParams<{
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
            }>): void;

            function verify(args?: APIParams<{
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
            }>): void;

            function getRegistered(args?: APIParams<{
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
            }>): void;

            function remove(args?: APIParams<{
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
            }>): void;

        }

        namespace push {
            function isVerified(args?: APIParams<{
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
            }>): void;

            function sendVerification(args?: APIParams<{
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
            }>): void;

        }

    }

    namespace backupcodes {
        function get(args?: APIParams<{
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
        }>): void;

        function create(args?: APIParams<{
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
        }>): void;

        function verify(args?: APIParams<{
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
        }>): void;

    }

    namespace phone {
        function getRegisteredPhoneNumbers(args?: APIParams<{
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
        }>): void;

        function removePhone(args?: APIParams<{
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
        }>): void;

        function sendVerificationCode(args?: APIParams<{
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
        }>): void;

        function completeVerification(args?: APIParams<{
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
        }>): void;

    }

    namespace email {
        function getEmails(args?: APIParams<{
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
        }>): void;

        function sendVerificationCode(args?: APIParams<{
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
        }>): void;

        function completeVerification(args?: APIParams<{
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
        }>): void;

    }

    namespace totp {
        function register(args?: APIParams<{
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
        }>): void;

        function verify(args?: APIParams<{
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
        }>): void;

        function getRegistered(args?: APIParams<{
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
        }>): void;

        function remove(args?: APIParams<{
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
        }>): void;

    }

    namespace push {
        function isVerified(args?: APIParams<{
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
        }>): void;

        function sendVerification(args?: APIParams<{
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
        }>): void;

    }

    namespace auth {
        function getAssets(args?: APIParams<{
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
        }>): void;

    }

    namespace groups {
        function getSchema(args?: APIParams<{
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
        }>): void;

        function registerGroup(args?: APIParams<{
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
        }>): void;

        function setGroupInfo(args?: APIParams<{
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
        }>): void;

        function getGroupInfo(args?: APIParams<{
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
        }>): void;

        function deleteGroup(args?: APIParams<{
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
        }>): void;

        function setGroupMemberInfo(args?: APIParams<{
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
        }>): void;

        function getGroupMemberInfo(args?: APIParams<{
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
        }>): void;

        function removeMember(args?: APIParams<{
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
        }>): void;

        function getAllMemberGroups(args?: APIParams<{
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
        }>): void;

        function searchGroupMembers(args?: APIParams<{
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
        }>): void;

        function createInvitation(args?: APIParams<{
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
        }>): void;

        function invitationConfirm(args?: APIParams<{
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
        }>): void;

        function finalizeInvitation(args?: APIParams<{
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
        }>): void;

    }

    namespace otp {
        function sendCode(args?: APIParams<{
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
        }>): void;

        function login(args?: APIParams<{
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
        }>): void;

        function update(args?: APIParams<{
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
        }>): void;

    }

    namespace auth {
        function guest(args?: APIParams<{
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
        }>): void;

        function getMethods(args?: APIParams<{
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
        }>): void;

        function login(args?: APIParams<{
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
        }>): void;

        namespace otp {
            function verify(args?: APIParams<{
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
            }>): void;

            function authenticate(args?: APIParams<{
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
            }>): void;

            namespace email {
                function sendCode(args?: APIParams<{
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
                }>): void;

                function login(args?: APIParams<{
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
                }>): void;

            }

        }

        namespace push {
            function sendVerification(args?: APIParams<{
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
            }>): void;

            function isVerified(args?: APIParams<{
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
            }>): void;

        }

        namespace fido {
            function initRegisterCredentials(args?: APIParams<{
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
            }>): void;

            function registerCredentials(args?: APIParams<{
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
            }>): void;

            function getAssertionOptions(args?: APIParams<{
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
            }>): void;

            function verifyAssertion(args?: APIParams<{
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
            }>): void;

            function getCredentials(args?: APIParams<{
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
            }>): void;

            function removeCredential(args?: APIParams<{
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
            }>): void;

        }

    }

    namespace otp {
        function verify(args?: APIParams<{
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
        }>): void;

        function authenticate(args?: APIParams<{
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
        }>): void;

        namespace email {
            function sendCode(args?: APIParams<{
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
            }>): void;

            function login(args?: APIParams<{
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
            }>): void;

        }

    }

    namespace push {
        function sendVerification(args?: APIParams<{
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
        }>): void;

        function isVerified(args?: APIParams<{
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
        }>): void;

    }

    namespace email {
        function send(args?: APIParams<{
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
        }>): void;

        function login(args?: APIParams<{
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
        }>): void;

    }

    namespace email {
        function sendCode(args?: APIParams<{
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
        }>): void;

        function login(args?: APIParams<{
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
        }>): void;

    }

    namespace identifier {
        function createToken(args?: APIParams<{
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
        }>): void;

    }

    namespace identity {
        function authorize(args?: APIParams<{
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
        }>): void;

    }

    namespace fido {
        function initRegisterCredentials(args?: APIParams<{
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
        }>): void;

        function registerCredentials(args?: APIParams<{
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
        }>): void;

        function getAssertionOptions(args?: APIParams<{
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
        }>): void;

        function verifyAssertion(args?: APIParams<{
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
        }>): void;

        function getCredentials(args?: APIParams<{
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
        }>): void;

        function removeCredential(args?: APIParams<{
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
        }>): void;

    }

    namespace session {
        function verify(args?: APIParams<{
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
        }>): void;

    }

    namespace oauth {
        function register(args?: APIParams<{
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
        }>): void;

        function connect(args?: APIParams<{
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
        }>): void;

        function disconnect(args?: APIParams<{
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
        }>): void;

        function authorize(args?: APIParams<{
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
        }>): void;

        function token(args?: APIParams<{
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
        }>): void;

    }

    namespace token {
        function authenticationContext(args?: APIParams<{
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
        }>): void;

    }

    namespace ds {
        function store(args?: APIParams<{
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
        }>): void;

        function get(args?: APIParams<{
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
        }>): void;

        function search(args?: APIParams<{
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
        }>): void;

        function getSchema(args?: APIParams<{
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
        }>): void;

        /* Illegal function name 'delete' can't be used here
        function delete(args?: APIParams<{
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
        }>): void;
        */

    }

    namespace ids {
        function getAccountInfo(args?: APIParams<{
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
        }>): void;

        function setAccountInfo(args?: APIParams<{
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
        }>): void;

        function search(args?: APIParams<{
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
        }>): void;

    }

    namespace op {
        function deviceContinue(args?: APIParams<{
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
        }>): void;

        function getContextData(args?: APIParams<{
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
        }>): void;

    }

    namespace accounts.address {
        namespace suggestions {
            function get(args?: APIParams<{
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
            }>): void;

        }

    }

    namespace accounts.auth.magiclink {
        namespace email {
            function send(args?: APIParams<{
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
            }>): void;

            function login(args?: APIParams<{
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
            }>): void;

        }

    }

    namespace auth {
        namespace token {
            function authenticationContext(args?: APIParams<{
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
            }>): void;

        }

    }

    namespace fidm.oidc {
        namespace op {
            function deviceContinue(args?: APIParams<{
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
            }>): void;

            function getContextData(args?: APIParams<{
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
            }>): void;

        }

    }

}



 