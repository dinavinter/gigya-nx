import {Runner} from '@gigya/types';

declare module gigya {
 
    namespace socialize {
        const login: Runner<{
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

        const addConnection: Runner<{
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

        const requestPermissions: Runner<{
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

        const showLoginUI_v2: Runner<{
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

        const showAddConnectionsUI_v2: Runner<{
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

        const showEditConnectionsUI: Runner<{
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

        const getAvailableProviders: Runner<{
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

        const notifyLogin: Runner<{
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

        const convertAction: Runner<{
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

        const deleteAccount: Runner<{
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

        const delUserSettings: Runner<{
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

        const getContacts: Runner<{
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

        const getRawData: Runner<{
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

        const getSessionInfo: Runner<{
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

        const getUserInfo: Runner<{
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

        const checkin: Runner<{
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

        const logout: Runner<{
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

        const notifyRegistration: Runner<{
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

        const removeConnection: Runner<{
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

        const setUID: Runner<{
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

        const unlinkAccounts: Runner<{
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

        const facebookGraphOperation: Runner<{
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

        const notifySSOLogin: Runner<{
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

    }

    namespace accounts {
        const socialLogin: Runner<{
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

        const showMyPhotoUI: Runner<{
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

        const initHostedPage: Runner<{
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

        const showScreenSet: Runner<{
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
        }>;

        const login: Runner<{
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

        const linkAccounts: Runner<{
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

        const notifySocialLogin: Runner<{
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

        const initRegistration: Runner<{
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

        const initProgression: Runner<{
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

        const register: Runner<{
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

        const finalizeRegistration: Runner<{
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

        const captchaImage: Runner<{
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

        const importProfilePhoto: Runner<{
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

        const setProfilePhoto: Runner<{
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

        const resetPassword: Runner<{
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

        const removeProfilePhoto: Runner<{
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

        const isAvailableLoginID: Runner<{
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

        const resendVerificationCode: Runner<{
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

        const getCaptcha: Runner<{
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

        const getPolicies: Runner<{
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

        const getSchema: Runner<{
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

        const getSiteConsentDetails: Runner<{
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

        const getLegalStatements: Runner<{
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

        const verifyLogin: Runner<{
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

        const getAccountInfo: Runner<{
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

        const setAccountInfo: Runner<{
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

        const logout: Runner<{
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

        const search: Runner<{
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

        const getScreenSets: Runner<{
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

        const getConflictingAccount: Runner<{
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

        const resetSitePreferences: Runner<{
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

        const getJWT: Runner<{
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

        namespace b2b {
            const registerOrganization: Runner<{
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

            const getOrganizationSchema: Runner<{
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

            const delegatedAdminLogin: Runner<{
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

            const getOrganizationInfo: Runner<{
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

            const setOrganizationContext: Runner<{
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

            const getOrganizationContext: Runner<{
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

            namespace auth {
                const getAssets: Runner<{
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

            }

        }

        namespace sso {
            const login: Runner<{
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

        }

        namespace tfa {
            const getProviders: Runner<{
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

            const initTFA: Runner<{
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

            const finalizeTFA: Runner<{
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

            const deactivateProvider: Runner<{
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

            const unregisterDevice: Runner<{
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

            namespace backupcodes {
                const get: Runner<{
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

                const create: Runner<{
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

                const verify: Runner<{
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

            }

            namespace phone {
                const getRegisteredPhoneNumbers: Runner<{
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

                const removePhone: Runner<{
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

                const sendVerificationCode: Runner<{
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

                const completeVerification: Runner<{
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

            }

            namespace email {
                const getEmails: Runner<{
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

                const sendVerificationCode: Runner<{
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

                const completeVerification: Runner<{
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

            }

            namespace totp {
                const register: Runner<{
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

                const verify: Runner<{
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

                const getRegistered: Runner<{
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

                const remove: Runner<{
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

            }

            namespace push {
                const isVerified: Runner<{
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

                const sendVerification: Runner<{
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

            }

        }

        namespace groups {
            const getSchema: Runner<{
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

            const registerGroup: Runner<{
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

            const setGroupInfo: Runner<{
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

            const getGroupInfo: Runner<{
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

            const deleteGroup: Runner<{
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

            const setGroupMemberInfo: Runner<{
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

            const getGroupMemberInfo: Runner<{
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

            const removeMember: Runner<{
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

            const getAllMemberGroups: Runner<{
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

            const searchGroupMembers: Runner<{
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

            const createInvitation: Runner<{
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

            const invitationConfirm: Runner<{
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

            const finalizeInvitation: Runner<{
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

        }

        namespace otp {
            const sendCode: Runner<{
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

            const login: Runner<{
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

            const update: Runner<{
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

        }

        namespace auth {
            const guest: Runner<{
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

            const getMethods: Runner<{
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

            const login: Runner<{
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

            namespace otp {
                const verify: Runner<{
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

                const authenticate: Runner<{
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

                namespace email {
                    const sendCode: Runner<{
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

                    const login: Runner<{
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

                }

            }

            namespace push {
                const sendVerification: Runner<{
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

                const isVerified: Runner<{
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

            }

            namespace fido {
                const initRegisterCredentials: Runner<{
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

                const registerCredentials: Runner<{
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

                const getAssertionOptions: Runner<{
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

                const verifyAssertion: Runner<{
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

                const getCredentials: Runner<{
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

                const removeCredential: Runner<{
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

            }

        }

        namespace identifier {
            const createToken: Runner<{
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

        }

        namespace identity {
            const authorize: Runner<{
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

        }

        namespace session {
            const verify: Runner<{
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

        }

    }

    namespace _ {
        const runJsUnitTests: Runner<{
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

        const loadBasePlugin: Runner<{
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

    }

    namespace gcs {
        const getUserData: Runner<{
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

        const setUserData: Runner<{
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

        const search: Runner<{
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

        const getSchema: Runner<{
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

    }

    namespace b2b {
        const registerOrganization: Runner<{
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

        const getOrganizationSchema: Runner<{
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

        const delegatedAdminLogin: Runner<{
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

        const getOrganizationInfo: Runner<{
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

        const setOrganizationContext: Runner<{
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

        const getOrganizationContext: Runner<{
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

        namespace auth {
            const getAssets: Runner<{
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

        }

    }

    namespace suggestions {
        const get: Runner<{
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

    }

    namespace sso {
        const login: Runner<{
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

    }

    namespace tfa {
        const getProviders: Runner<{
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

        const initTFA: Runner<{
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

        const finalizeTFA: Runner<{
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

        const deactivateProvider: Runner<{
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

        const unregisterDevice: Runner<{
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

        namespace backupcodes {
            const get: Runner<{
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

            const create: Runner<{
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

            const verify: Runner<{
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

        }

        namespace phone {
            const getRegisteredPhoneNumbers: Runner<{
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

            const removePhone: Runner<{
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

            const sendVerificationCode: Runner<{
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

            const completeVerification: Runner<{
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

        }

        namespace email {
            const getEmails: Runner<{
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

            const sendVerificationCode: Runner<{
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

            const completeVerification: Runner<{
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

        }

        namespace totp {
            const register: Runner<{
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

            const verify: Runner<{
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

            const getRegistered: Runner<{
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

            const remove: Runner<{
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

        }

        namespace push {
            const isVerified: Runner<{
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

            const sendVerification: Runner<{
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

        }

    }

    namespace backupcodes {
        const get: Runner<{
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

        const create: Runner<{
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

        const verify: Runner<{
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

    }

    namespace phone {
        const getRegisteredPhoneNumbers: Runner<{
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

        const removePhone: Runner<{
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

        const sendVerificationCode: Runner<{
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

        const completeVerification: Runner<{
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

    }

    namespace email {
        const getEmails: Runner<{
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

        const sendVerificationCode: Runner<{
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

        const completeVerification: Runner<{
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

    }

    module totp {
        const register: Runner<{
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

        const verify: Runner<{
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

        const getRegistered: Runner<{
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

        const remove: Runner<{
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

    }

    module push {
        const isVerified: Runner<{
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

        const sendVerification: Runner<{
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

    }

    namespace auth {
        const getAssets: Runner<{
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

    }

    namespace groups {
        const getSchema: Runner<{
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

        const registerGroup: Runner<{
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

        const setGroupInfo: Runner<{
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

        const getGroupInfo: Runner<{
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

        const deleteGroup: Runner<{
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

        const setGroupMemberInfo: Runner<{
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

        const getGroupMemberInfo: Runner<{
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

        const removeMember: Runner<{
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

        const getAllMemberGroups: Runner<{
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

        const searchGroupMembers: Runner<{
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

        const createInvitation: Runner<{
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

        const invitationConfirm: Runner<{
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

        const finalizeInvitation: Runner<{
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

    }

    namespace otp {
        const sendCode: Runner<{
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

        const login: Runner<{
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

        const update: Runner<{
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

    }

    namespace auth {
        const guest: Runner<{
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

        const getMethods: Runner<{
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

        const login: Runner<{
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

        namespace otp {
            const verify: Runner<{
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

            const authenticate: Runner<{
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

            namespace email {
                const sendCode: Runner<{
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

                const login: Runner<{
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

            }

        }

        namespace push {
            const sendVerification: Runner<{
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

            const isVerified: Runner<{
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

        }

        namespace fido {
            const initRegisterCredentials: Runner<{
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

            const registerCredentials: Runner<{
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

            const getAssertionOptions: Runner<{
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

            const verifyAssertion: Runner<{
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

            const getCredentials: Runner<{
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

            const removeCredential: Runner<{
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

        }

    }

    namespace otp {
        const verify: Runner<{
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

        const authenticate: Runner<{
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

        namespace email {
            const sendCode: Runner<{
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

            const login: Runner<{
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

        }

    }

    interface push {
          sendVerification: Runner<{
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

          isVerified: Runner<{
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

    }

    namespace email {
        const send: Runner<{
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

        const login: Runner<{
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

    }

    namespace email {
        const sendCode: Runner<{
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

        const login: Runner<{
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

    }

    namespace identifier {
        const createToken: Runner<{
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

    }

    namespace identity {
        const authorize: Runner<{
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

    }

    namespace fido {
        const initRegisterCredentials: Runner<{
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

        const registerCredentials: Runner<{
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

        const getAssertionOptions: Runner<{
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

        const verifyAssertion: Runner<{
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

        const getCredentials: Runner<{
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

        const removeCredential: Runner<{
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

    }

    namespace session {
        const verify: Runner<{
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

    }

    namespace oauth {
        const register: Runner<{
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

        const connect: Runner<{
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

        const disconnect: Runner<{
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

        const authorize: Runner<{
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

        const token: Runner<{
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

    }

    namespace token {
        const authenticationContext: Runner<{
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

    }

    namespace ds {
        const store: Runner<{
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

        const get: Runner<{
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

        const search: Runner<{
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

        const getSchema: Runner<{
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

        const delete: Runner<{
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

    }

    module ids {
        const getAccountInfo: Runner<{
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
        
 
       export const setAccountInfo: Runner<{
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

        const search: Runner<{
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

    }

    namespace op {
        const deviceContinue: Runner<{
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

        const getContextData: Runner<{
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

    }

    namespace accounts.address.suggestions {
             const get: Runner<{
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

        }

    }

    namespace accounts.auth.magiclink {
        namespace email {
            const send: Runner<{
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

            const login: Runner<{
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

        }

    }

    namespace auth {
        namespace token {
            const authenticationContext: Runner<{
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

        }

    }

    namespace fidm.oidc {
        namespace op {
            const deviceContinue: Runner<{
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

            const getContextData: Runner<{
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

        }

    }

}




 gigya.accounts.getAccountInfo({
     callback: function ( response ) {
         if (response.errorCode == 0) {
             // SUCCESS!
         }
     },
      "include": "facebook",
 })

gigya.accounts.address.suggestions.get({
    suggestionreply: "all",
})

 