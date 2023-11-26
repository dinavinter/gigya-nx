export const accountsApi=[{
  "methodName": "accounts.socialLogin",
  "settings": {"oauth": true},
  "schema": "ctag|temporary_account|authFlow|connectWithoutLogin|provider|redirectMethod|redirect_uri|pendingRegistration|lang|regSource|extraPermissions|sessionExpiration|forceAuthentication|includeiRank|includeAllIdentities|extraFields|enabledProviders|disabledProviders|signIDs|openIDUsername|openIDURL|openIDProviderLogo|openIDProviderName|finalizeRegistration|include|actionAttributes|profileAttributes|googlePlayAppID|bp_channel_url|loginIfExists|includeUserInfo|redirectURL|authCodeOnly|enablePopupLocation|invite|regToken|loginMode|apiDomain|conflictHandling|forcePermissions|signKeys|dataCenter|forceAuthentication",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.b2b.registerOrganization",
  "settings": {},
  "schema": "organization|requester",
  "requiresSession": false,
  "adapterSettings": {"forcePost": true, "forceHttps": true}
}, {
  "methodName": "accounts.b2b.getOrganizationSchema",
  "settings": {},
  "schema": "",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.login",
  "settings": {"riskAssessment": true},
  "schema": "loginID|password|sessionExpiration|targetEnv|regToken|include|actionAttributes|profileAttributes|includeUserInfo|includeDynamicSchema|bp_channel_url|captchaToken|blackBoxToken|captchaType|captchaText|loginMode|signKeys|lang|riskContext|aToken",
  "requiresSession": false,
  "adapterSettings": {"forcePost": true, "forceHttps": true}
}, {
  "methodName": "accounts.linkAccounts",
  "settings": {},
  "schema": "loginID|password|sessionExpiration|targetEnv|include|regToken|includeUserInfo|bp_channel_url|signKeys",
  "requiresSession": false,
  "adapterSettings": {"forcePost": true, "forceHttps": true}
}, {
  "methodName": "accounts.notifySocialLogin",
  "settings": {},
  "schema": "loginMode|providerSessions|sessionExpiration",
  "requiresSession": true,
  "adapterSettings": {"forcePost": true, "forceHttps": true},
  "altSessionParams": "providerSessions"
}, {
  "methodName": "accounts.initRegistration",
  "settings": {},
  "schema": "sdk|isLite|dataCenter",
  "requiresSession": false,
  "adapterSettings": {"clearSession": true, "forceHttps": true}
}, {
  "methodName": "accounts.initProgression",
  "settings": {},
  "schema": "sdk|regToken",
  "requiresSession": false,
  "adapterSettings": {"clearSession": true, "forceHttps": true}
}, {
  "methodName": "accounts.register",
  "settings": {"riskAssessment": true},
  "schema": "username|email|password|UID|regToken|siteUID|secretQuestion|secretAnswer|regSource|profile|preferences|displayedPreferences|data|captchaText|captchaType|captchaToken|blackBoxToken|lang|hashedPassword|pwHashAlgorithm|skipVerification|finalizeRegistration|targetEnv|sessionExpiration|include|actionAttributes|profileAttributes|includeUserInfo|bp_channel_url|signKeys|subscriptions|communications",
  "requiresSession": false,
  "adapterSettings": {"forcePost": true, "forceHttps": true}
}, {
  "methodName": "accounts.finalizeRegistration",
  "settings": {},
  "schema": "regToken|targetEnv|include|includeUserInfo|bp_channel_url|allowAccountsLinking|signKeys|subscriptions",
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.captchaImage",
  "settings": {},
  "schema": "regToken",
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.importProfilePhoto",
  "settings": {},
  "schema": "regToken|URL|publish",
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.setProfilePhoto",
  "settings": {},
  "schema": "regToken|publish|photoBytes",
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.resetPassword",
  "settings": {"riskAssessment": true},
  "schema": "lang|loginID|passwordResetToken|secretAnswer|securityFields|newPassword|email|captchaType|captchaToken|blackBoxToken",
  "requiresSession": false,
  "adapterSettings": {"forcePost": true, "forceHttps": true}
}, {
  "methodName": "accounts.removeProfilePhoto",
  "settings": {},
  "schema": "regToken",
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.isAvailableLoginID",
  "settings": {},
  "schema": "loginID",
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.address.suggestions.get",
  "settings": {},
  "schema": "address|country|apiKey|suggestionreply|longitude|latitude",
  "adapterSettings": {"forcePost": true, "forceHttps": true}
}, {
  "methodName": "accounts.resendVerificationCode",
  "settings": {},
  "schema": "regToken|email",
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.getCaptcha",
  "settings": {},
  "schema": "",
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.getPolicies",
  "settings": {},
  "schema": "sections",
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.getSchema",
  "settings": {},
  "schema": "sections|schemaType",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.getSiteConsentDetails",
  "settings": {},
  "schema": "",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.getLegalStatements",
  "settings": {},
  "schema": "consentId|lang",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.verifyLogin",
  "settings": {},
  "schema": "include|extraProfileFields|targetEnv",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.getAccountInfo",
  "settings": {},
  "schema": "include|extraProfileFields|regToken|lang|includeCommunications",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true},
  "altSessionParams": "regToken"
}, {
  "methodName": "accounts.setAccountInfo",
  "settings": {"riskAssessment": true},
  "schema": "profile|preferences|displayedPreferences|data|regToken|oldPassword|password|newPassword|addLoginEmails|removeLoginEmails|username|secretQuestion|secretAnswer|requirePasswordChange|conflictHandling|tfaStatus|rba|subscriptions|communications|preferences|lang|captchaToken|blackBoxToken|captchaType|customIdentifiers",
  "requiresSession": true,
  "adapterSettings": {"forcePost": true, "forceHttps": true},
  "altSessionParams": "regToken"
}, {
  "methodName": "accounts.logout",
  "settings": {"disableCache": true},
  "schema": "signIDs|samlContext|sustainLogoutURLs",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.search",
  "settings": {},
  "schema": "expTime|querySig|query",
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.getScreenSets",
  "settings": {},
  "schema": "screenSetIDs|include|lang|screenSetVersion",
  "requiresSession": false,
  "adapterSettings": {"useHttpStatusCodes": true, "forceHttps": true}
}, {
  "methodName": "accounts.sso.login",
  "settings": {"oauth": true},
  "schema": "redirectURL|state|authFlow|context|useChildContext",
  "requiresSession": false,
  "adapterSettings": {"oauthMode": 1, "forceHttps": true}
}, {
  "methodName": "accounts.getConflictingAccount",
  "settings": {},
  "schema": "regToken|loginID",
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.resetSitePreferences",
  "settings": {},
  "schema": "",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.getJWT",
  "settings": {},
  "schema": "fields|expiration|audience",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.tfa.getProviders",
  "settings": {},
  "schema": "regToken",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true},
  "altSessionParams": "regToken"
}, {
  "methodName": "accounts.tfa.initTFA",
  "settings": {},
  "schema": "provider|mode|regToken",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.tfa.finalizeTFA",
  "settings": {},
  "schema": "gigyaAssertion|providerAssertion|tempDevice|regToken",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true},
  "altSessionParams": "regToken"
}, {
  "methodName": "accounts.tfa.deactivateProvider",
  "settings": {},
  "schema": "provider",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.tfa.unregisterDevice",
  "settings": {},
  "schema": "allDevices",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.tfa.backupcodes.get",
  "settings": {},
  "schema": "gigyaAssertion",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.tfa.backupcodes.create",
  "settings": {},
  "schema": "gigyaAssertion",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.tfa.backupcodes.verify",
  "settings": {},
  "schema": "gigyaAssertion|code|regToken",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.tfa.phone.getRegisteredPhoneNumbers",
  "settings": {},
  "schema": "gigyaAssertion",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.tfa.phone.removePhone",
  "settings": {},
  "schema": "gigyaAssertion|phoneId",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.tfa.phone.sendVerificationCode",
  "settings": {},
  "schema": "gigyaAssertion|lang|phoneID|phone|method|regToken",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.tfa.phone.completeVerification",
  "settings": {},
  "schema": "gigyaAssertion|phvToken|code|regToken",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.tfa.email.getEmails",
  "settings": {},
  "schema": "gigyaAssertion",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.tfa.email.sendVerificationCode",
  "settings": {},
  "schema": "emailID|gigyaAssertion|lang|regToken",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.tfa.email.completeVerification",
  "settings": {},
  "schema": "gigyaAssertion|phvToken|code|regToken",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.tfa.totp.register",
  "settings": {},
  "schema": "gigyaAssertion|includeSecret",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.tfa.totp.verify",
  "settings": {},
  "schema": "gigyaAssertion|sctToken|code|name|regToken",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.tfa.totp.getRegistered",
  "settings": {},
  "schema": "gigyaAssertion",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.tfa.totp.remove",
  "settings": {},
  "schema": "gigyaAssertion|id",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.tfa.push.isVerified",
  "settings": {},
  "schema": "gigyaAssertion|regToken",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.tfa.push.sendVerification",
  "settings": {},
  "schema": "gigyaAssertion|regToken",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.b2b.delegatedAdminLogin",
  "settings": {},
  "schema": "orgId|lang",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.b2b.getOrganizationInfo",
  "settings": {},
  "schema": "orgId|bpid",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.b2b.setOrganizationContext",
  "settings": {},
  "schema": "bpid",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.b2b.getOrganizationContext",
  "settings": {},
  "schema": "",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.b2b.auth.getAssets",
  "settings": {},
  "schema": "appId|bpid|orgId|includePolicies|environments",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.groups.getSchema",
  "settings": {},
  "schema": "model",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.groups.registerGroup",
  "settings": {},
  "schema": "model|groupId|groupData",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.groups.setGroupInfo",
  "settings": {},
  "schema": "model|groupId|groupData",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.groups.getGroupInfo",
  "settings": {},
  "schema": "model|groupId",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.groups.deleteGroup",
  "settings": {},
  "schema": "model|groupId",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.groups.setGroupMemberInfo",
  "settings": {},
  "schema": "model|groupId|uid|relationshipData|permissions",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.groups.getGroupMemberInfo",
  "settings": {},
  "schema": "model|groupId|uid|include",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.groups.removeMember",
  "settings": {},
  "schema": "model|groupId|uid",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.groups.getAllMemberGroups",
  "settings": {},
  "schema": "uid|flatNestedFields",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.groups.searchGroupMembers",
  "settings": {},
  "schema": "model|groupId|limit|start",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.groups.createInvitation",
  "settings": {},
  "schema": "model|groupId|isOneTime",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.groups.invitationConfirm",
  "settings": {},
  "schema": "invitationId",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.groups.finalizeInvitation",
  "settings": {},
  "schema": "token",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.otp.sendCode",
  "settings": {"riskAssessment": true},
  "schema": "regToken|phoneNumber|email|lang|captchaToken|captchaType|blackBoxToken|dataCenter|phvToken",
  "requiresSession": false,
  "adapterSettings": {"forcePost": true, "forceHttps": true}
}, {
  "methodName": "accounts.otp.login",
  "settings": {},
  "schema": "vToken|code|targetEnv|includeUserInfo|include|regSource|sessionExpiration",
  "requiresSession": false,
  "adapterSettings": {"forcePost": true, "forceHttps": true}
}, {
  "methodName": "accounts.otp.update",
  "settings": {},
  "schema": "vToken|code|regToken",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.auth.otp.authenticate",
  "settings": {},
  "schema": "vToken|code",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.auth.getMethods",
  "settings": {},
  "schema": "identifier|aToken",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.auth.push.sendVerification",
  "settings": {},
  "schema": "identifier",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.auth.push.isVerified",
  "settings": {},
  "schema": "vToken",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.auth.magiclink.email.send",
  "settings": {},
  "schema": "email|context|lang",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.auth.magiclink.email.login",
  "settings": {},
  "schema": "vToken|code|targetEnv|includeUserInfo|include|regSource|sessionExpiration",
  "requiresSession": false,
  "adapterSettings": {"forcePost": true, "forceHttps": true}
}, {
  "methodName": "accounts.auth.otp.email.sendCode",
  "settings": {},
  "schema": "email|lang",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.auth.otp.email.login",
  "settings": {},
  "schema": "code|vToken|targetEnv|includeUserInfo|include|regSource|sessionExpiration",
  "requiresSession": false,
  "adapterSettings": {"forcePost": true, "forceHttps": true}
}, {
  "methodName": "accounts.identifier.createToken",
  "settings": {},
  "schema": "identifier|identifierType",
  "requiresSession": false,
  "adapterSettings": {"forcePost": true, "forceHttps": true}
}, {
  "methodName": "accounts.identity.authorize",
  "settings": {},
  "schema": "authorization_details|grant_type",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.auth.fido.initRegisterCredentials",
  "settings": {},
  "schema": "regToken|aToken",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true},
  "altSessionParams": "regToken|aToken"
}, {
  "methodName": "accounts.auth.fido.registerCredentials",
  "settings": {},
  "schema": "token|attestation|deviceName|regToken",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.auth.fido.getAssertionOptions",
  "settings": {},
  "schema": "",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.auth.fido.verifyAssertion",
  "settings": {},
  "schema": "token|authenticatorAssertion",
  "requiresSession": false,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.auth.fido.getCredentials",
  "settings": {},
  "schema": "regToken",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true},
  "altSessionParams": "regToken"
}, {
  "methodName": "accounts.auth.fido.removeCredential",
  "settings": {},
  "schema": "credentialId|regToken",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true},
  "altSessionParams": "regToken"
}, {
  "methodName": "accounts.session.verify",
  "settings": {},
  "schema": "",
  "requiresSession": true,
  "adapterSettings": {"forceHttps": true}
}, {
  "methodName": "accounts.auth.login",
  "settings": {},
  "schema": "accessToken|sessionExpiration|targetEnv|include|includeUserInfo|loginMode|lang",
  "requiresSession": false,
  "adapterSettings": {"forcePost": true, "forceHttps": true}
}] as const;

export default accountsApi;


