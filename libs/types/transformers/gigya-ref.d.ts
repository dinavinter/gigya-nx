export namespace gigya {
    export let isGigya: boolean;
    export let apiKey: string;
    export let defaultApiDomain: string;
    export let dataCenter: string;
    export namespace build {
        let number: number;
        let version: string;
    }
    export let gmidVersion: string;
    export namespace partnerSettings {
        let authMode: string;
        let captchaProvider: string;
        namespace plugins {
            let connectWithoutLoginBehavior: string;
            let defaultRegScreenSet: string;
            let defaultMobileRegScreenSet: string;
            let sessionExpiration: number;
            let rememberSessionExpiration: number;
            let apiDomain: string;
            namespace workflow {
                let path: string;
            }
        }
        let baseDomains: string;
        let customAPIDomainPrefix: string;
    }
    export let providersConfig: {};
    export namespace samlConfig {
        let errorPageURL: any;
        let proxyPageURL: any;
    }
    export namespace canary {
        let isActive: boolean;
        namespace config {
            let version_1: string;
            export { version_1 as version };
            export let isEnabled: boolean;
            export let probability: number;
            export namespace cookiesNames {
                export let isCanary: string;
                let version_2: string;
                export { version_2 as version };
            }
        }
        function Canary(): void;
        let isLoaded: boolean;
    }
    export namespace errorReport {
        export let enabled: boolean;
        let probability_1: number;
        export { probability_1 as probability };
    }
    export let bypassCaptchaV1: boolean;
    export let __initialized: boolean;
    export namespace _ {
        export let isTrustedDomain: boolean;
        export namespace apiAdapters {
            namespace web {
                namespace sso {
                    let _requestTimeout: number;
                    function SsoService(): void;
                    function _request(): void;
                    function getGroupToken(): void;
                    function setGroupToken(): void;
                    function logout(): void;
                    function removeGroupToken(): void;
                    function setLoginTokenExp(): void;
                    function getLoginTokenExp(): void;
                    function checkTokenRenew(): void;
                    function syncCanaryIndication(): void;
                    function setGroupContextCookie(): void;
                    function setGroupApiDomain(): void;
                    function getGroupApiDomain(): void;
                }
                namespace tokenStore {
                    let activeNamespaces: {};
                    function isValidGltExp(): void;
                    function getGltexpCookie(): void;
                    function setGltexp(): void;
                    function get(): void;
                    function set(): void;
                    function getCurrentSessionExpiration(): void;
                    function getGACCookie(): void;
                    function setFromAuthCode(): void;
                    function setFromGAC(): void;
                    function setFromSsoResponse(): void;
                    function dispatchLoginEvent(): void;
                    function remove(): void;
                    function getTokenParam(): void;
                    function setBearerToken(): void;
                    function getBearerToken(): void;
                    function removeBearerToken(): void;
                }
                function ApiRequest(): void;
                function BaseRequest(): void;
                function OauthRequest(): void;
                let webAdapterName: string;
                function newApiAdapter(): void;
                function WebAdapter(): void;
                namespace apiService {
                    export let _apiKey: string;
                    export let _hasGmid: boolean;
                    export namespace _domainResolver {
                        let originDomain: string;
                        let isGroupApiDomain: boolean;
                        function getApiDomain(): void;
                        let isApiDomainFirstParty: boolean;
                        let hasGroupApiDomainChanged: boolean;
                        let canSaveGmidAsCookie: boolean;
                    }
                    export namespace _groupApiDomainService {
                        let _storage: {};
                        let _pageDomain: string;
                        let _cookieName: string;
                    }
                    export namespace _requestProvider {
                        function _xhrRequest(): void;
                        let timeout: number;
                    }
                    export let didFallback: boolean;
                    export namespace _storage_1 {
                        let storage: {};
                    }
                    export { _storage_1 as _storage };
                }
            }
            namespace mobile {
                export function newApiAdapter_1(): void;
                export { newApiAdapter_1 as newApiAdapter };
                export let mobileCallbacks: {};
                export function MobileAdapter(): void;
                export function showPlugin(): void;
            }
            let OAuthMode: {
                0: string;
                1: string;
                Social: number;
                Sso: number;
            };
        }
        export function Uri(): void;
        export function apiDomainFactory(): void;
        export function getGigyaDomain(): void;
        export function getBaseDomain(): void;
        export function resolveApiDomain(): void;
        export function getStorageDomain(): void;
        export namespace providers {
            namespace _aliases {
                let google: string;
                let googleplus: string;
                let messenger: string;
                let microsoft: string;
                let wechat: string;
                let weixin: string;
            }
            function Provider(): void;
            let arProviders: ({
                ID: number;
                displayName: string;
                width: number;
                height: number;
                arDefaultCapabilities: string[];
                name: string;
                explicitOnly?: undefined;
                aliases?: undefined;
            } | {
                ID: number;
                displayName: string;
                width: number;
                height: number;
                explicitOnly: boolean;
                aliases: string;
                arDefaultCapabilities: string[];
                name: string;
            } | {
                ID: number;
                displayName: string;
                width: number;
                height: number;
                explicitOnly: boolean;
                arDefaultCapabilities: string[];
                name: string;
                aliases?: undefined;
            })[];
            function getProviderByName(): void;
            function replaceProviderAliases(): void;
            function getProviderById(): void;
            function hideProvidersByName(): void;
            function getProvidersForRequiredCapabilities(): void;
            function getAllProviders(): void;
            function getProvidersByName(): void;
            function replaceWildcard(): void;
        }
        export namespace plugins_1 {
            export let instances: {};
            export function getPluginInstance(): void;
            export function setPluginInstance(): void;
            export function removePluginInstance(): void;
            export function BasePlugin(): void;
            export namespace resources {
                namespace html {
                    namespace base {
                        let legacyModal: string;
                        let modal: string;
                        let modalCloseButton: string;
                    }
                    namespace screenSet {
                        export let passwordStrength: string;
                        export let passwordStrength_strengthMeter: string;
                        export let passwordStrength_minimumRequirements: string;
                        export let screenSet_dialog: string;
                        let screenSet_1: string;
                        export { screenSet_1 as screenSet };
                        export let photoUpload_ui: string;
                        export let photoUpload_form: string;
                        export let inlinedPasswordStrength: string;
                        export let consent: string;
                        export let communicationCheckbox: string;
                    }
                    namespace login_v2 {
                        let arrow: string;
                        let footer: string;
                        let footerBrandLong: string;
                        let footerBrandShort: string;
                        let footerBrandWhatIsThis: string;
                        let footerDivider: string;
                        let footerEdit: string;
                        let footerTerms: string;
                        let header: string;
                        let login: string;
                        let providerImage: string;
                        let uiContainer: string;
                        let welcome: string;
                        let welcomeBubble: string;
                        let welcomeGreeting: string;
                        let welcomeSignInLink: string;
                    }
                }
                namespace css {
                    export namespace base_1 {
                        let legacy_modal: string;
                        let modern_modal: string;
                        let defaultCSS: string;
                    }
                    export { base_1 as base };
                    export namespace login_v2_1 {
                        let ie8patch: string;
                        let iePatch: string;
                        let main: string;
                    }
                    export { login_v2_1 as login_v2 };
                }
                function getTemplates(): void;
                function getCss(): void;
            }
            export namespace utUtils {
                function PluginTester(): void;
            }
            export namespace utils {
                export namespace Collections {
                    function LastIndexOf(): void;
                    function ForEach(): void;
                    function ForEachProp(): void;
                    function Some(): void;
                    function Every(): void;
                    function EveryProp(): void;
                    function Map(): void;
                    function FirstIndex(): void;
                    function First(): void;
                }
                export namespace css_1 {
                    function fixCss(): void;
                    function addCss(): void;
                }
                export { css_1 as css };
                export namespace URL {
                    function addOrReplaceHashFragment(): void;
                    function addHashFragment(): void;
                    function removeHashFragment(): void;
                    function getHashParamValue(): void;
                }
                export namespace DOM {
                    function replaceLinksWithHTMLElements(): void;
                    function setAttribute(): void;
                    function getAttribute(): void;
                }
            }
            export namespace modal_1 {
                function ModalDialog(): void;
                namespace dialogClasses {
                    export let document_mobile: string;
                    export let all_web: string;
                    export let all_mobile: string;
                    let main_1: string;
                    export { main_1 as main };
                    export let caption: string;
                    export let closeButton: string;
                    export let content: string;
                }
                namespace legacyDialogClasses {
                    let document_mobile_1: string;
                    export { document_mobile_1 as document_mobile };
                    let all_web_1: string;
                    export { all_web_1 as all_web };
                    let all_mobile_1: string;
                    export { all_mobile_1 as all_mobile };
                    let main_2: string;
                    export { main_2 as main };
                    let caption_1: string;
                    export { caption_1 as caption };
                    let closeButton_1: string;
                    export { closeButton_1 as closeButton };
                    let content_1: string;
                    export { content_1 as content };
                }
            }
            export { modal_1 as modal };
            export namespace pollerActions {
                function InvalidPropertyAction(): void;
                function SizeChangeAction(): void;
                function ContainerSizeAction(): void;
                function ViewportSizeAction(): void;
            }
            export let cssFlags: {
                "gigya.services.accounts.plugins.screenSet": {};
                "gigya.services.socialize.plugins.login_v2": {};
            };
            export let CloseReasons: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
                6: string;
                7: string;
                8: string;
                pendingError: number;
                missing: number;
                finished: number;
                canceled: number;
                backButton: number;
                canceledByParent: number;
                skip: number;
                error: number;
                cancel: number;
            };
            export let PluginStyle: {
                0: string;
                1: string;
                2: string;
                3: string;
                _undefined: number;
                none: number;
                legacy: number;
                modern: number;
            };
            export function getPluginStyleClass(): void;
            export function AsyncManager(): void;
            export function LoadDimmer(): void;
            export namespace ScreenSet {
                export namespace consent_1 {
                    let consentFieldName: string;
                    let namespace: string;
                    function postProcessForm(): void;
                }
                export { consent_1 as consent };
                export namespace SwitchScreen_CONSTS {
                    let selector: string;
                    let switchScreen: string;
                    let successScreen: string;
                    let screenSetSkippedScreen: string;
                }
                export function SwitchScreenWidget(): void;
                export namespace Form_CONSTS {
                    export let originalSuccessScreen: string;
                    let successScreen_1: string;
                    export { successScreen_1 as successScreen };
                    export let autoSkipScreen: string;
                    export let autoSkipFlag: string;
                    let screenSetSkippedScreen_1: string;
                    export { screenSetSkippedScreen_1 as screenSetSkippedScreen };
                    export let formErrorClass: string;
                    export let defaultCheckedAttribute: string;
                }
                export let CUSTOM_VALIDATION_TIMEOUT_WARNING: number;
                export function BaseForm(): void;
                export function BaseFormWidget(): void;
                export function BaseScreenWidget(): void;
                export let ServerStates: {
                    0: string;
                    1: string;
                    2: string;
                    3: string;
                    NotStarted: number;
                    InProgress: number;
                    Done: number;
                    Error: number;
                };
                export function BaseServerWidget(): void;
                export namespace BaseUploadWidget_CONSTS {
                    let setDimentionsDelay: number;
                    let uploadCheckInterval: number;
                    let uploading: string;
                    let uploadForm: string;
                }
                export function BaseUploadWidget(): void;
                export function BaseWidget(): void;
                export function warn(): void;
                export let ErrorScopes: {
                    0: string;
                    1: string;
                    2: string;
                    3: string;
                    boundObjectError: number;
                    firstError: number;
                    anyError: number;
                    allErrors: number;
                    "bound-object-error": number;
                    "first-error": number;
                    "any-error": number;
                    "all-errors": number;
                };
                export namespace ErrorDisplayElement_CONSTS {
                    let gigyaClasses: string[];
                    let boundedTo: string;
                    let errorCodes: string;
                    let scope: string;
                    let flags: string;
                    let errorClassPrefix: string;
                    let errorType: string;
                }
                export function ErrorDisplayElement(): void;
                export let ErrorType: {
                    0: string;
                    1: string;
                    2: string;
                    client: number;
                    custom: number;
                    server: number;
                };
                export let PendingErrorAttributes: {
                    200009: {
                        name: string;
                        nextScreen: () => void;
                        requiresFinalize: boolean;
                    };
                    200010: {
                        name: string;
                        nextScreen: () => void;
                        requiresFinalize: boolean;
                    };
                    206001: {
                        name: string;
                        nextScreen: () => void;
                        requiresFinalize: boolean;
                    };
                    206002: {
                        name: string;
                        nextScreen: () => void;
                        resetFinalizeNeededState: boolean;
                    };
                    206003: {
                        name: string;
                        nextScreen: () => void;
                    };
                    206006: {
                        name: string;
                        requiresFinalize: boolean;
                        nextScreen: () => void;
                    };
                    403100: {
                        name: string;
                        nextScreen: () => void;
                        requiresFinalize: boolean;
                    };
                    403101: {
                        name: string;
                        nextScreen: () => void;
                        requiresFinalize: boolean;
                    };
                    403102: {
                        name: string;
                        nextScreen: () => void;
                        requiresFinalize: boolean;
                    };
                    403110: {
                        name: string;
                        nextScreen: () => void;
                    };
                    409003: {
                        name: string;
                        nextScreen: () => void;
                        requiresFinalize: boolean;
                    };
                };
                export function notImplementerAbstract(): void;
                export let ConflictHandling: {
                    0: string;
                    1: string;
                    fail: number;
                    saveProfileAndFail: number;
                };
                export namespace LoginModes {
                    namespace connect {
                        let name: string;
                    }
                    namespace standard {
                        let name_1: string;
                        export { name_1 as name };
                        export function getLoginProviders(): void;
                        export function filterParams(): void;
                    }
                    namespace reAuth {
                        let name_2: string;
                        export { name_2 as name };
                        export function getLoginProviders_1(): void;
                        export { getLoginProviders_1 as getLoginProviders };
                        export function filterParams_1(): void;
                        export { filterParams_1 as filterParams };
                    }
                    namespace link {
                        let name_3: string;
                        export { name_3 as name };
                        export function getLoginProviders_2(): void;
                        export { getLoginProviders_2 as getLoginProviders };
                        export function filterParams_2(): void;
                        export { filterParams_2 as filterParams };
                    }
                }
                export function Screen(): void;
                export namespace Screen_CONSTS {
                    let gigyaClass: string;
                    let conditionalAttributePrefix: string;
                    let expressionAttributePrefix: string;
                    let cssClass: string;
                    let dataVariantPercentage: string;
                    let dataVariantGroup: string;
                    let dataVariantOriginalScreen: string;
                    let dataVariantTestId: string;
                }
                export namespace ScreenOptions_CONSTS {
                    export let accountsLinkedScreen: string;
                    export let pendingTfaRegistrationScreen: string;
                    export let pendingTfaVerificationScreen: string;
                    export let pendingRegistrationScreen: string;
                    export let existingLoginIdentifierScreen: string;
                    export let pendingVerificationScreen: string;
                    export let pendingCodeVerificationScreen: string;
                    export let missingLoginIdScreen: string;
                    export let pendingPasswordChangeScreen: string;
                    export let pendingReAuthenticationScreen: string;
                    export let width: string;
                    export let height: string;
                    let caption_2: string;
                    export { caption_2 as caption };
                }
                export function ScreenOptions(): void;
                export function ScreenSetData(): void;
                export namespace EndFlowScreens {
                    let _skip: number;
                    let _finish: number;
                    let _cancel: number;
                }
                export namespace ScreenSet_CONSTS {
                    let gigyaClass_1: string;
                    export { gigyaClass_1 as gigyaClass };
                    export let mobileDialogClass: string;
                    export let webDialogClass: string;
                    export let contentClass: string;
                    export let topElementClass: string;
                    export let calculateSizeClass: string;
                    export let gigyaHidden: string;
                    export let startScreen: string;
                    export let isResponsive: string;
                    export let dialogStyle: string;
                    export let dataActiveGroups: string;
                }
                export function ScreenSetPlugin(): void;
                export let ElementRoles: {
                    0: string;
                    1: string;
                    2: string;
                    _undefined: number;
                    template: number;
                    instance: number;
                };
                export namespace TemplateElement_CONSTS {
                    let elementId: string;
                    let elementFor: string;
                    let publishElementId: string;
                    let templateForArray: string;
                    let instanceOfArray: string;
                    let screenSetRoles: string;
                }
                export function TemplateElement(): void;
                export function TemplatesCache(): void;
                export function createDefaultTemplates(): void;
                export function isHidden(): void;
                export function inIFrame(): void;
                export function isFieldInHiddenContainer(): void;
                export function hasParentAttribute(): void;
                export function firstPart(): void;
                export function LastIndexOf_1(): void;
                export { LastIndexOf_1 as LastIndexOf };
                export function ForEach_1(): void;
                export { ForEach_1 as ForEach };
                export function ForEachProp_1(): void;
                export { ForEachProp_1 as ForEachProp };
                export function Some_1(): void;
                export { Some_1 as Some };
                export function Every_1(): void;
                export { Every_1 as Every };
                export function EveryProp_1(): void;
                export { EveryProp_1 as EveryProp };
                export function Map_1(): void;
                export { Map_1 as Map };
                export function DeepFreeze(): void;
                export function getElementsByHavingAttribute(): void;
                export function getElementsByHavingAttributePrefix(): void;
                export function isElementContainAttributePrefix(): void;
                export function getConditionalAttributeExpressions(): void;
                export function setupConditionalExpressionValue(): void;
                export function isKeyCodeDisplayable(): void;
                export namespace UnitMeasurementType {
                    let pixel: string;
                    let percentage: string;
                    let auto: string;
                }
                export function getUnitMeasurementType(): void;
                export function getAttributesAsArray(): void;
                export function endsWith(): void;
                export function hasIndex(): void;
                export function removeSerializedKeyLastEnumerator(): void;
                export function removeSerializedKeyEdgeProperty(): void;
                export function IETemplateElementPolyfill(): void;
                export function replaceAttribute(): void;
                export function isDOMXSS(): void;
                export function delayedFocus(): void;
                export namespace LinkAccountsForm_CONSTS {
                    let gigyaClass_2: string;
                    export { gigyaClass_2 as gigyaClass };
                }
                export function LinkAccountsForm(): void;
                export namespace LoginForm_CONSTS {
                    let gigyaClass_3: string;
                    export { gigyaClass_3 as gigyaClass };
                }
                export function LoginForm(): void;
                export namespace PasswordlessLoginForm_CONSTS {
                    let gigyaClass_4: string;
                    export { gigyaClass_4 as gigyaClass };
                }
                export function PasswordlessLoginForm(): void;
                export namespace PasswordlessRegisterForm_CONSTS {
                    let gigyaClass_5: string;
                    export { gigyaClass_5 as gigyaClass };
                }
                export function PasswordlessRegisterForm(): void;
                export namespace AuthMethodsForm_CONSTS {
                    let gigyaClass_6: string;
                    export { gigyaClass_6 as gigyaClass };
                    export let authMethodSelector: string;
                    export let authMethod: string;
                }
                export function AuthMethodsForm(): void;
                export namespace PasswordAuthMethodForm_CONSTS {
                    let gigyaClass_7: string;
                    export { gigyaClass_7 as gigyaClass };
                    let authMethod_1: string;
                    export { authMethod_1 as authMethod };
                }
                export function PasswordAuthMethodForm(): void;
                export namespace PushAuthMethodForm_CONSTS {
                    let gigyaClass_8: string;
                    export { gigyaClass_8 as gigyaClass };
                    let authMethod_2: string;
                    export { authMethod_2 as authMethod };
                }
                export function PushAuthMethodForm(): void;
                export namespace MagicLinkMethodForm_CONSTS {
                    let gigyaClass_9: string;
                    export { gigyaClass_9 as gigyaClass };
                    let authMethod_3: string;
                    export { authMethod_3 as authMethod };
                }
                export function MagicLinkAuthMethodForm(): void;
                export namespace EmaiLCodeAuthMethodForm_CONSTS {
                    let gigyaClass_10: string;
                    export { gigyaClass_10 as gigyaClass };
                    let authMethod_4: string;
                    export { authMethod_4 as authMethod };
                }
                export function EmailCodeAuthMethodForm(): void;
                export namespace CONSTS {
                    let selector_1: string;
                    export { selector_1 as selector };
                    export let toggleSelector: string;
                    export let widgetStateAttr: string;
                    export let rbaRuleAttr: string;
                    export let errorDisplaySelector: string;
                    export let errorMessageSelector: string;
                    export let errorActiveClass: string;
                    export let errorMessageActiveClass: string;
                    export let bindingNameErrorAttrValue: string;
                    export let successMessageKey: string;
                    export let errorMessageKey: string;
                    export let switcherWrapperSelector: string;
                    export let labelActiveState: string;
                    export let labelDisableState: string;
                    export let alertRole: string;
                    export let roleAttribute: string;
                }
                export namespace NewsletterSignup_CONSTS {
                    let gigyaClass_11: string;
                    export { gigyaClass_11 as gigyaClass };
                }
                export function NewsletterSignupForm(): void;
                export namespace ProfileForm_CONSTS {
                    let gigyaClass_12: string;
                    export { gigyaClass_12 as gigyaClass };
                    export namespace specialFields {
                        let username: boolean;
                        let oldPassword: boolean;
                        let password: boolean;
                        let newPassword: boolean;
                        let passwordRetype: boolean;
                        let secretQuestion: boolean;
                        let secretAnswer: boolean;
                        let addLoginEmails: boolean;
                        let removeLoginEmails: boolean;
                        let phoneNumber: boolean;
                    }
                }
                export function ProfileForm(): void;
                export namespace ReauthenticationForm_CONSTS {
                    let gigyaClass_13: string;
                    export { gigyaClass_13 as gigyaClass };
                }
                export function ReauthenticationForm(): void;
                export namespace RegisterForm_CONSTS {
                    let gigyaClass_14: string;
                    export { gigyaClass_14 as gigyaClass };
                }
                export function RegisterForm(): void;
                export namespace ProgressionForm_CONSTS {
                    let gigyaClass_15: string;
                    export { gigyaClass_15 as gigyaClass };
                }
                export function ProgressionForm(): void;
                export namespace ResendVerificationCodeForm_CONSTS {
                    let gigyaClass_16: string;
                    export { gigyaClass_16 as gigyaClass };
                }
                export function ResendVerificationCodeForm(): void;
                export namespace ResetPasswordForm_CONSTS {
                    let gigyaClass_17: string;
                    export { gigyaClass_17 as gigyaClass };
                }
                export function ResetPasswordForm(): void;
                export namespace OrgRegisterForm_CONSTS {
                    let gigyaClass_18: string;
                    export { gigyaClass_18 as gigyaClass };
                }
                export function OrgRegisterForm(): void;
                export function ButtonInput(): void;
                export namespace CheckboxInput_CONSTS {
                    let errorClass: string;
                    let validClass: string;
                    let dataValueInArray: string;
                }
                export function CheckboxInput(): void;
                export function CommunicationCheckboxInput(): void;
                export function EmailInput(): void;
                export let ValidityStates: {
                    0: string;
                    1: string;
                    2: string;
                    3: string;
                    _undefined: number;
                    valid: number;
                    error: number;
                    pending: number;
                };
                export namespace fieldsNameData {
                    export namespace loginID {
                        let autoFillName: string;
                        let paramName: string;
                    }
                    export namespace passwordRetype_1 {
                        let autoFillName_1: string;
                        export { autoFillName_1 as autoFillName };
                        let paramName_1: string;
                        export { paramName_1 as paramName };
                    }
                    export { passwordRetype_1 as passwordRetype };
                }
                export let WriteAccessModes: {
                    0: string;
                    1: string;
                    clientModify: number;
                    clientCreate: number;
                };
                export namespace FormInput_CONSTS {
                    export let fieldName: string;
                    export let displayName: string;
                    export let captcha: string;
                    export let allowEmpty: string;
                    export let required: string;
                    export let originalValue: string;
                    export let serverValidation: string;
                    export let showValidCheckmark: string;
                    export let showCheckmarkClass: string;
                    export let validityBorderClass: string;
                    export let showValidityBorderAttr: string;
                    let errorClass_1: string;
                    export { errorClass_1 as errorClass };
                    export let warnClass: string;
                    let validClass_1: string;
                    export { validClass_1 as validClass };
                    export let pendingClass: string;
                    export let emptyClass: string;
                    export let placeholderAttribute: string;
                    export let arrayRootAttribute: string;
                    export let arrayKeyFieldAttribute: string;
                    export let arrayKeyValueAttribute: string;
                    export let identifierType: string;
                }
                export let FormInputPriorities: {
                    0: string;
                    1: string;
                    2: string;
                    3: string;
                    4: string;
                    _start: number;
                    Important: number;
                    Normal: number;
                    Fallback: number;
                    _end: number;
                };
                export namespace FieldType {
                    let hidden: string;
                }
                export function FormInput(): void;
                export function AddressInput(): void;
                export function LoginIdInput(): void;
                export namespace BasePasswordInput_CONSTS {
                    let showPasswordStrength: string;
                }
                export function BasePasswordInput(): void;
                export function PasswordInput(): void;
                export function NewPasswordInput(): void;
                export let gigyaPhoneNumberInput: string;
                export namespace PhoneInput_Attributes {
                    let countryCodesSelection: string;
                    let countryCodes: string;
                }
                export function PhoneNumberInput(): void;
                export namespace RadioInput_CONSTS {
                    let wrapperSelector: string;
                    let displayNameExpressionAttr: string;
                }
                export function RadioInput(): void;
                export function RememeberInput(): void;
                export function RetypePasswordInput(): void;
                export namespace ArrayManager_CONST {
                    let selector_2: string;
                    export { selector_2 as selector };
                    export let containerSelector: string;
                    export let formElSelector: string;
                    export let addButtonSelector: string;
                    export let removeButtonSelector: string;
                    export let itemWrapperClass: string;
                    export let inputsWrapperClass: string;
                    export let buttonsWrapperClass: string;
                    export let templateItemAttr: string;
                    export let arrayManagerRootAttr: string;
                    export let deleteDisabledClass: string;
                    export let indexMatcher: {};
                }
                export function ArrayManagerItem(): void;
                export function ArrayManagerWidget(): void;
                export function addIndex(): void;
                export namespace Binding_CONSTS {
                    let selector_3: string;
                    export { selector_3 as selector };
                    export let dataBindingAttribute: string;
                }
                export function BindingWidget(): void;
                export namespace CaptchaWidget_CONSTS {
                    let selector_4: string;
                    export { selector_4 as selector };
                }
                export function CaptchaWidget(): void;
                export namespace Consent_CONSTS {
                    let selector_5: string;
                    export { selector_5 as selector };
                    export let titleAttr: string;
                    export let approvedOnLabelAttr: string;
                    export let versionAttr: string;
                    export let versionLabelAttr: string;
                    export let localeLabelAttr: string;
                }
                export function ConsentWidget(): void;
                export namespace ContainerWidget_CONSTS {
                    let selector_6: string;
                    export { selector_6 as selector };
                    export let activeClass: string;
                    export let emptyFields: string;
                    export let loginIdentities: string;
                    export let conditionAttr: string;
                    export let onRenderAttr: string;
                }
                export function ContainerWidget(): void;
                export namespace Image_CONSTS {
                    let selector_7: string;
                    export { selector_7 as selector };
                    export let srcAttribute: string;
                    export let widthAttribute: string;
                    export let heightAttribute: string;
                    export let backgroundSizeAttribute: string;
                }
                export function ImageWidget(): void;
                export namespace LoginAvailabilityWidget_CONSTS {
                    let selector_8: string;
                    export { selector_8 as selector };
                    export let boundTo: string;
                }
                export function LoginAvailabilityWidget(): void;
                export namespace MyPhotoWidget_CONSTS {
                    let selector_9: string;
                    export { selector_9 as selector };
                }
                export function MyPhotoWidget(): void;
                export namespace DisplayModes {
                    namespace policy {
                        let hasMinimumRequirements: boolean;
                        let hasStrengthMeter: boolean;
                        function getTemplate(): void;
                    }
                    namespace meter {
                        let hasMinimumRequirements_1: boolean;
                        export { hasMinimumRequirements_1 as hasMinimumRequirements };
                        let hasStrengthMeter_1: boolean;
                        export { hasStrengthMeter_1 as hasStrengthMeter };
                        export function getTemplate_1(): void;
                        export { getTemplate_1 as getTemplate };
                    }
                    namespace combined {
                        let hasMinimumRequirements_2: boolean;
                        export { hasMinimumRequirements_2 as hasMinimumRequirements };
                        let hasStrengthMeter_2: boolean;
                        export { hasStrengthMeter_2 as hasStrengthMeter };
                        export function getTemplate_2(): void;
                        export { getTemplate_2 as getTemplate };
                    }
                }
                export let BubbleOrientations: {
                    0: string;
                    1: string;
                    2: string;
                    3: string;
                    4: string;
                    right: number;
                    left: number;
                    up: number;
                    down: number;
                    none: number;
                };
                export namespace PasswordStrengthWidget_CONSTS {
                    let selector_10: string;
                    export { selector_10 as selector };
                    export let bubbleClass: string;
                    export let mobileClass: string;
                    export let desktopClass: string;
                    export let displayMode: string;
                    export let bubble: string;
                    export let bubbleOrientation: string;
                }
                export function PasswordStrengthWidget(): void;
                export function getPasswordStrengthData(): void;
                export function isPasswordStrengthValid(): void;
                export namespace PhotoUploadWidget_CONSTS {
                    let selector_11: string;
                    export { selector_11 as selector };
                }
                export function PhotoUploadWidget(): void;
                export namespace ProfilePhotoWidget_CONSTS {
                    let selector_12: string;
                    export { selector_12 as selector };
                }
                export function ProfilePhotoWidget(): void;
                export namespace RequiredDisplayWidget_CONSTS {
                    let selector_13: string;
                    export { selector_13 as selector };
                    let boundTo_1: string;
                    export { boundTo_1 as boundTo };
                    export let alwaysVisible: string;
                }
                export function RequiredDisplayWidget(): void;
                export namespace SecretQuestionWidget_CONSTS {
                    let selector_14: string;
                    export { selector_14 as selector };
                    let allowEmpty_1: string;
                    export { allowEmpty_1 as allowEmpty };
                }
                export function SecretQuestionWidget(): void;
                export namespace SocialLoginWidget_CONSTS {
                    let selector_15: string;
                    export { selector_15 as selector };
                }
                export function SocialLoginWidget(): void;
                export namespace SubscriptionWidget_CONSTS {
                    let selector_16: string;
                    export { selector_16 as selector };
                    export let subscriptionName: string;
                }
                export function SubscriptionWidget(): void;
                export namespace PhoneNumberWidget_CONSTS {
                    let selector_17: string;
                    export { selector_17 as selector };
                    export let verifyButtonClass: string;
                    export let resendButtonCLass: string;
                    export let phonePreviewClass: string;
                    export let useAsIdentifierAttr: string;
                    export let codeInputClass: string;
                    export let phoneInputNumberClass: string;
                    export let countryCodeInputClass: string;
                    export let verifiedStatusClass: string;
                    export let resendBlockedLabelClass: string;
                    export let linkDisabledClass: string;
                    export let errorMessageClass: string;
                    export let placeholderTextAttribute: string;
                    export let gigyaHiddenClass: string;
                    let placeholderAttribute_1: string;
                    export { placeholderAttribute_1 as placeholderAttribute };
                    export let widgetStateAttribute: string;
                    export let requiredAttribute: string;
                    export let codeStateAttributes: string;
                    export let displayNameAttribute: string;
                    export let translationKeyAttribute: string;
                    export let resendBlockDefaultLabelAttr: string;
                    export let phoneNumberFieldName: string;
                    export let resendCountTemplate: string;
                    export let disableVerifyInSeconds: number;
                    export let otpCodeLength: number;
                    export let deps: (() => void)[];
                }
                export function PhoneNumberWidget(): void;
                export namespace Channel_Status {
                    let noticed: string;
                    let OptIn: string;
                    let optIn: string;
                    let OptOut: string;
                    let optOut: string;
                }
                export namespace CommunicationWidget_CONSTS {
                    let selector_18: string;
                    export { selector_18 as selector };
                    export let channel: string;
                    export let topic: string;
                    export let status: string;
                    let subscriptionName_1: string;
                    export { subscriptionName_1 as subscriptionName };
                    export let communicationsPrefix: string;
                    export let subscriptionType: string;
                    export let subscriptionTopic: string;
                    export let communicationChannel: string;
                }
                export function CommunicationWidget(): void;
                export namespace TfaWidget_CONSTS {
                    let selector_19: string;
                    export { selector_19 as selector };
                }
                export function TfaWidget(): void;
                export namespace Translated_CONSTS {
                    let selector_20: string;
                    export { selector_20 as selector };
                    let translationKeyAttribute_1: string;
                    export { translationKeyAttribute_1 as translationKeyAttribute };
                }
                export function TranslatedWidget(): void;
                export namespace CaptchaHandlers {
                    function FunCaptcha(): void;
                    function Google(): void;
                }
                export namespace CaptchaMode {
                    let visible: string;
                    let invisible: string;
                }
                export function BaseCaptchaHandler(): void;
                export function FunCaptchaHandler(): void;
                export function GoogleCaptchaHandler(): void;
                export namespace RegisterDeviceRequestParam {
                    let UserCode: string;
                }
                export namespace RegisterDeviceFormParam {
                    let UserCode_1: string;
                    export { UserCode_1 as UserCode };
                }
                export namespace DeviceCodeForm_CONSTS {
                    let gigyaClass_19: string;
                    export { gigyaClass_19 as gigyaClass };
                }
                export function DeviceCodeForm(): void;
                export namespace PasskeyLogin_CONSTS {
                    let selector_21: string;
                    export { selector_21 as selector };
                }
                export function PasskeyLoginWidget(): void;
                export namespace PasskeyRegister_CONSTS {
                    let selector_22: string;
                    export { selector_22 as selector };
                    export let behaviorAttr: string;
                }
                export namespace PasskeyRegisterMode {
                    let Connect: string;
                    let Submit: string;
                }
                export function PasskeyRegisterWidget(): void;
                export namespace PasskeyManager_CONSTS {
                    let selector_23: string;
                    export { selector_23 as selector };
                }
                export function PasskeyManagerWidget(): void;
                export namespace TFAVerification_CONSTS {
                    let selector_24: string;
                    export { selector_24 as selector };
                }
                export function TFAVerificationWidget(): void;
                export namespace TFAPhoneList_CONSTS {
                    let selector_25: string;
                    export { selector_25 as selector };
                }
                export function TFAVerificationPhoneListWidget(): void;
                export namespace TFAPhoneItem_CONSTS {
                    export let sendButtonSelector: string;
                    export let submitButtonSelector: string;
                    export let expandedAttribute: string;
                    let errorMessageSelector_1: string;
                    export { errorMessageSelector_1 as errorMessageSelector };
                    export let errorActiveMessageClass: string;
                    export let rememberDeviceSelector: string;
                    export let codeInputSelector: string;
                    export let nameAttr: string;
                    export let boundToAttr: string;
                    export let inputErrorSelector: string;
                    export let ariaLabelAttr: string;
                    export let deviceLabelSelector: string;
                    let titleAttr_1: string;
                    export { titleAttr_1 as titleAttr };
                    export let symbolsPlaceholder: string;
                    export let resendButtonSelector: string;
                    let selector_26: string;
                    export { selector_26 as selector };
                    export let sendSMSButtonSelector: string;
                    export let sendVoiceButtonSelector: string;
                    export let resendButtonSelectorSms: string;
                    export let resendButtonSelectorVoice: string;
                    export let countDownSelector: string;
                    let gigyaHiddenClass_1: string;
                    export { gigyaHiddenClass_1 as gigyaHiddenClass };
                }
                export function TFAVerificationPhoneItemWidget(): void;
                export namespace TFATotpItem_CONSTS {
                    let sendButtonSelector_1: string;
                    export { sendButtonSelector_1 as sendButtonSelector };
                    let submitButtonSelector_1: string;
                    export { submitButtonSelector_1 as submitButtonSelector };
                    let expandedAttribute_1: string;
                    export { expandedAttribute_1 as expandedAttribute };
                    let errorMessageSelector_2: string;
                    export { errorMessageSelector_2 as errorMessageSelector };
                    let errorActiveMessageClass_1: string;
                    export { errorActiveMessageClass_1 as errorActiveMessageClass };
                    let rememberDeviceSelector_1: string;
                    export { rememberDeviceSelector_1 as rememberDeviceSelector };
                    let codeInputSelector_1: string;
                    export { codeInputSelector_1 as codeInputSelector };
                    let nameAttr_1: string;
                    export { nameAttr_1 as nameAttr };
                    let boundToAttr_1: string;
                    export { boundToAttr_1 as boundToAttr };
                    let inputErrorSelector_1: string;
                    export { inputErrorSelector_1 as inputErrorSelector };
                    let ariaLabelAttr_1: string;
                    export { ariaLabelAttr_1 as ariaLabelAttr };
                    let deviceLabelSelector_1: string;
                    export { deviceLabelSelector_1 as deviceLabelSelector };
                    let titleAttr_2: string;
                    export { titleAttr_2 as titleAttr };
                    let selector_27: string;
                    export { selector_27 as selector };
                    export let namePlaceholder: string;
                }
                export function TFAVerificationTotpItemWidget(): void;
                export namespace TFATotpList_CONSTS {
                    let selector_28: string;
                    export { selector_28 as selector };
                    let deps_1: (() => void)[];
                    export { deps_1 as deps };
                }
                export function TFAVerificationTotpListWidget(): void;
                export namespace TFAVerificationBackupCodesWidget_CONSTS {
                    let selector_29: string;
                    export { selector_29 as selector };
                    export let expandButtonSelector: string;
                    let submitButtonSelector_2: string;
                    export { submitButtonSelector_2 as submitButtonSelector };
                    let codeInputSelector_2: string;
                    export { codeInputSelector_2 as codeInputSelector };
                    export let cardItemSelector: string;
                    export let cardBodySelector: string;
                }
                export function TFAVerificationBackupCodesWidget(): void;
                export namespace PasskeyCard_CONSTS {
                    let selector_30: string;
                    export { selector_30 as selector };
                    export let deleteButtonSelector: string;
                    export let newCardClass: string;
                    let deps_2: (() => void)[];
                    export { deps_2 as deps };
                }
                export function PasskeyCardWidget(): void;
                export function TfaManagementWidget(): void;
                export namespace TfaPhoneManagement_CONSTS {
                    let selector_31: string;
                    export { selector_31 as selector };
                }
                export function TfaManagementPhoneListWidget(): void;
                export function TfaManagementPhoneItemWidget(): void;
                export namespace TfaEmailManagement_CONSTS {
                    let selector_32: string;
                    export { selector_32 as selector };
                }
                export function TfaManagementEmailListWidget(): void;
                export function TfaManagementEmailItemWidget(): void;
                export function TfaRegistrationWidget(): void;
                export function TfaRegistrationPhoneWidget(): void;
                export namespace TFABackupCodes_CONSTS {
                    let selector_33: string;
                    export { selector_33 as selector };
                    export let backupCodesListEl: string;
                    export let backupCodesListContainerEl: string;
                    export let printButtonEl: string;
                    export let downloadButtonEl: string;
                    export let generateBackupCodesButtonEl: string;
                    export let downloadHeader: string;
                    export let downloadFileTitle: string;
                    export let downloadTextContent: string;
                    export let backupCodeListItemClass: string;
                }
                export function TFABackupCodesWidget(): void;
                export namespace CustomForm_CONSTS {
                    let gigyaClass_20: string;
                    export { gigyaClass_20 as gigyaClass };
                }
                export function CustomForm(): void;
                export namespace TfaForm_CONSTS {
                    let gigyaClass_21: string;
                    export { gigyaClass_21 as gigyaClass };
                }
                export function TfaForm(): void;
                export namespace OrganizationContextConsts {
                    let selector_34: string;
                    export { selector_34 as selector };
                    export let dropdownSelector: string;
                    export let buttonSelector: string;
                    export let errorDisplayClass: string;
                    let errorMessageClass_1: string;
                    export { errorMessageClass_1 as errorMessageClass };
                    let errorActiveClass_1: string;
                    export { errorActiveClass_1 as errorActiveClass };
                    export let disabledClass: string;
                    export let noDataAvailableMessage: string;
                }
                export function OrganizationContextWidget(): void;
            }
            export namespace login_v2_2 {
                namespace ButtonStyles {
                    export namespace fulllogocolored {
                        export let ratio: number;
                        let base_2: string;
                        export { base_2 as base };
                        export let ext: string;
                        export let noConnected: boolean;
                        export let minSize: number;
                        export let maxSize: number;
                    }
                    export namespace fulllogo {
                        let ratio_1: number;
                        export { ratio_1 as ratio };
                        let base_3: string;
                        export { base_3 as base };
                        let ext_1: string;
                        export { ext_1 as ext };
                        let noConnected_1: boolean;
                        export { noConnected_1 as noConnected };
                        let minSize_1: number;
                        export { minSize_1 as minSize };
                        let maxSize_1: number;
                        export { maxSize_1 as maxSize };
                    }
                    export namespace signinwith {
                        let ratio_2: number;
                        export { ratio_2 as ratio };
                        let base_4: string;
                        export { base_4 as base };
                        let ext_2: string;
                        export { ext_2 as ext };
                        export let noLastLogin: boolean;
                        let noConnected_2: boolean;
                        export { noConnected_2 as noConnected };
                        let minSize_2: number;
                        export { minSize_2 as minSize };
                        let maxSize_2: number;
                        export { maxSize_2 as maxSize };
                    }
                    export namespace standard_1 {
                        let ratio_3: number;
                        export { ratio_3 as ratio };
                        let base_5: string;
                        export { base_5 as base };
                        let ext_3: string;
                        export { ext_3 as ext };
                        let minSize_3: number;
                        export { minSize_3 as minSize };
                        let maxSize_3: number;
                        export { maxSize_3 as maxSize };
                    }
                    export { standard_1 as standard };
                }
                function ContainerBase(): void;
                function FooterContainer(): void;
                function LoginContainer(): void;
                let NavigationDirection: {
                    0: string;
                    1: string;
                    Next: number;
                    Prev: number;
                };
                let LastLoginIndication: {
                    0: string;
                    1: string;
                    2: string;
                    3: string;
                    _undefined: number;
                    none: number;
                    border: number;
                    welcome: number;
                };
                let PluginMode: {
                    0: string;
                    1: string;
                    2: string;
                    3: string;
                    _undefined: number;
                    Login: number;
                    AddConnection: number;
                    LinkAccount: number;
                };
                let RenderingMode: {
                    0: string;
                    1: string;
                    2: string;
                    3: string;
                    Unknown: number;
                    Login: number;
                    Welcome: number;
                    Footer: number;
                };
                function LoginPlugin(): void;
                namespace PagingButtonStyles {
                    export namespace arrows {
                        function getStyleClass(): void;
                        function getStyleName(): void;
                    }
                    export namespace newArrows {
                        export function getStyleClass_1(): void;
                        export { getStyleClass_1 as getStyleClass };
                        export function getStyleName_1(): void;
                        export { getStyleName_1 as getStyleName };
                    }
                    export namespace floating {
                        export function getStyleClass_2(): void;
                        export { getStyleClass_2 as getStyleClass };
                        export function getStyleName_2(): void;
                        export { getStyleName_2 as getStyleName };
                    }
                    export namespace auto_1 {
                        export function getStyleClass_3(): void;
                        export { getStyleClass_3 as getStyleClass };
                        export function getStyleName_3(): void;
                        export { getStyleName_3 as getStyleName };
                    }
                    export { auto_1 as auto };
                }
                function Utils(): void;
                function WelcomeContainer(): void;
            }
            export { login_v2_2 as login_v2 };
        }
        export { plugins_1 as plugins };
        export namespace UI {
            function registerPlugin(): void;
            function attachPlugin(): void;
        }
        export namespace api {
            function VersionSelector(): void;
        }
        export let saml: {};
        export namespace CDN_HOSTS {
            let http: string[];
            let https: string[];
        }
        export function getCdnResource(): void;
        export function getImgCdnResource(): void;
        export let MessagingMethod: {
            0: string;
            1: string;
            2: string;
            LocalStorageListener: number;
            PostMessage: number;
            Flash: number;
        };
        export function checkCompleteRegistration(): void;
        export function checkGroupInvitation(): void;
        export function getGigyaSettings(): void;
        export function setGigyaSettings(): void;
        export function delGigyaSettings(): void;
        export function handleSpecialFields(): void;
        export function convertIdentitiesArrayToObject(): void;
        export function addUserInfoToEvent(): void;
        export function sendEmailNative(): void;
        export function getApi(): void;
        export function BaseApi(): void;
        export let __pluginsCoreLoaded: boolean;
        export function UiApi(): void;
        export function BaseObject(): void;
        export function EventWrapper(): void;
        export let DeviceTypes: {
            0: string;
            1: string;
            2: string;
            3: string;
            _undefined: number;
            desktop: number;
            mobile: number;
            auto: number;
        };
        export namespace bookmarkSize {
            export namespace facebook {
                let w: number;
                let h: number;
            }
            export namespace twitter {
                let w_1: number;
                export { w_1 as w };
                let h_1: number;
                export { h_1 as h };
            }
            export namespace messenger_1 {
                let w_2: number;
                export { w_2 as w };
                let h_2: number;
                export { h_2 as h };
            }
            export { messenger_1 as messenger };
            export namespace linkedin {
                let w_3: number;
                export { w_3 as w };
                let h_3: number;
                export { h_3 as h };
            }
            export namespace yahoobookmarks {
                let w_4: number;
                export { w_4 as w };
                let h_4: number;
                export { h_4 as h };
            }
            export namespace digg {
                let w_5: number;
                export { w_5 as w };
                let h_5: number;
                export { h_5 as h };
            }
            export namespace googlebookmarks {
                let w_6: number;
                export { w_6 as w };
                let h_6: number;
                export { h_6 as h };
            }
            export namespace mixi {
                let w_7: number;
                export { w_7 as w };
                let h_7: number;
                export { h_7 as h };
            }
            export namespace googleplus_1 {
                let w_8: number;
                export { w_8 as w };
                let h_8: number;
                export { h_8 as h };
            }
            export { googleplus_1 as googleplus };
        }
        export function socializeAddEventHandlers(): void;
        export function accountsAddEventHandlers(): void;
        export function isLoggedIn(): void;
        export function waitForService(): void;
        export function postBookmark(): void;
        export function refreshUI(): void;
        export function trackReferrals(): void;
        export function updateRefUID(): void;
        export function setGigRefUidCookie(): void;
        export function hideUI(): void;
        export function submitUserForm(): void;
        export function getProviderShareCounts(): void;
        export function openDelegateAdminHandler(): void;
        export namespace passkeyService {
            let eventHandlers: {};
        }
        export function runJsUnitTests(): void;
        export function loadBasePlugin(): void;
        export namespace bootstrap {
            let parseScriptRetries: number;
            function init(): void;
            function warnOnUnsupportedBrowser(): void;
            function loadABTesting(): void;
            function startDebugIfNeeded(): void;
            function loadOmniture(): void;
            function parseLang(): void;
            function parseScriptElement(): void;
            function initApiAdapter(): void;
            function autoLogin(): void;
            function checkReturnFromRedirect(): void;
            function injectExternalSdks(): void;
        }
        let sso_1: {};
        export { sso_1 as sso };
        export namespace logoutBehaviour {
            let logoutBeforeServerResponse: boolean;
            let alwaysSendLogoutToServer: boolean;
        }
        export let arApiList: ({
            methodName: string;
            settings: {
                oauth: boolean;
                preprocessor: () => void;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                clearSessionCondition: () => void;
                forceHttps: boolean;
                requiresSession: () => void;
                clearSession?: undefined;
                forcePost?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                oauth: boolean;
                preprocessor?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                clearSession?: undefined;
                forcePost?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                oauth: boolean;
                defaultParams: {
                    forcePermissions: boolean;
                    width?: undefined;
                    height?: undefined;
                };
                preprocessor?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                clearSession?: undefined;
                forcePost?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                allowPopup: boolean;
                defaultParams: {
                    forcePermissions?: undefined;
                    width?: undefined;
                    height?: undefined;
                };
                defaultPopupParams: {
                    width?: undefined;
                    height?: undefined;
                };
                requiredParams: string;
                oauth?: undefined;
                preprocessor?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            jsName: string;
            schema?: undefined;
            requiresSession?: undefined;
            adapterSettings?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                useBasePlugin: boolean;
                defaultParams: {
                    forcePermissions?: undefined;
                    width?: undefined;
                    height?: undefined;
                };
                defaultPopupParams: {
                    width?: undefined;
                    height?: undefined;
                };
                requiredParams: string;
                oauth?: undefined;
                preprocessor?: undefined;
                allowPopup?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            jsName: string;
            namespace: string;
            className: string;
            instanceMethods: any[];
            schema?: undefined;
            requiresSession?: undefined;
            adapterSettings?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                allowPopup: boolean;
                defaultParams: {
                    width: number;
                    height: number;
                    forcePermissions?: undefined;
                };
                defaultPopupParams: {
                    width: number;
                    height: number;
                };
                requiredParams: string;
                oauth?: undefined;
                preprocessor?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            jsName: string;
            schema?: undefined;
            requiresSession?: undefined;
            adapterSettings?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                useBasePlugin: boolean;
                defaultParams: {
                    forcePermissions?: undefined;
                    width?: undefined;
                    height?: undefined;
                };
                defaultPopupParams: {
                    width?: undefined;
                    height?: undefined;
                };
                requiredParams: string;
                oauth?: undefined;
                preprocessor?: undefined;
                allowPopup?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            jsName: string;
            namespace: string;
            className: string;
            instanceMethods: any[];
            pluginType: () => void;
            injectionInfo: {
                methodName: string;
                jsName: string;
                namespace: string;
                className: string;
                pluginType: () => void;
                constructor: () => void;
                addInstanceMethodsAliases: () => void;
                createInstanceMethodAlias: () => void;
                getPublicMethod: () => void;
                preprocessRequest: () => void;
                run: () => void;
                startUI: () => void;
                startPlugin: () => void;
                loadPluginJS: () => void;
                wasPluginJSLoaded: () => void;
                getPluginType: () => void;
                setSourceData: () => void;
                validateRequiredParams: () => void;
                setDefaultParams: () => void;
                prepareParameters: () => void;
                legacyStartUI: () => void;
                prepareContainer: () => void;
                addAlias: () => void;
                name: string;
                publicMethods?: undefined;
            };
            schema?: undefined;
            requiresSession?: undefined;
            adapterSettings?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            _versions: {
                versionName: string;
                method: () => void;
            }[];
            _defaultVersionIndex: number;
            settings?: undefined;
            schema?: undefined;
            requiresSession?: undefined;
            adapterSettings?: undefined;
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                allowPopup: boolean;
                dontLoadPluginsCore: boolean;
                waitForAPIQueue: boolean;
                defaultParams: {
                    width: number;
                    height: number;
                    forcePermissions?: undefined;
                };
                defaultPopupParams: {
                    width?: undefined;
                    height?: undefined;
                };
                requiredParams: string;
                oauth?: undefined;
                preprocessor?: undefined;
                useBasePlugin?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            jsName: string;
            schema?: undefined;
            requiresSession?: undefined;
            adapterSettings?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                defaultParams: {
                    width: number;
                    forcePermissions?: undefined;
                    height?: undefined;
                };
                defaultPopupParams: {
                    width?: undefined;
                    height?: undefined;
                };
                requiredParams: string;
                oauth?: undefined;
                preprocessor?: undefined;
                allowPopup?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            jsName: string;
            schema?: undefined;
            requiresSession?: undefined;
            adapterSettings?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                useBasePlugin: boolean;
                defaultParams: {
                    forcePermissions?: undefined;
                    width?: undefined;
                    height?: undefined;
                };
                defaultPopupParams: {
                    width?: undefined;
                    height?: undefined;
                };
                requiredParams: string;
                oauth?: undefined;
                preprocessor?: undefined;
                allowPopup?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            jsName: string;
            namespace: string;
            className: string;
            instanceMethods: string[];
            pluginType: () => void;
            injectionInfo: {
                name: string;
                namespace: string;
                methodName: string;
                jsName: string;
                publicMethods: {
                    hideScreenSet: {
                        instanceMethod: string;
                        argNames: any[];
                    };
                    switchScreen: {
                        instanceMethod: string;
                        argNames: string[];
                    };
                };
                className?: undefined;
                pluginType?: undefined;
                constructor?: undefined;
                addInstanceMethodsAliases?: undefined;
                createInstanceMethodAlias?: undefined;
                getPublicMethod?: undefined;
                preprocessRequest?: undefined;
                run?: undefined;
                startUI?: undefined;
                startPlugin?: undefined;
                loadPluginJS?: undefined;
                wasPluginJSLoaded?: undefined;
                getPluginType?: undefined;
                setSourceData?: undefined;
                validateRequiredParams?: undefined;
                setDefaultParams?: undefined;
                prepareParameters?: undefined;
                legacyStartUI?: undefined;
                prepareContainer?: undefined;
                addAlias?: undefined;
            };
            schema?: undefined;
            requiresSession?: undefined;
            adapterSettings?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                oauth?: undefined;
                preprocessor?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            adapterSettings: {
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                clearSession?: undefined;
                forcePost?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            requiresSession?: undefined;
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                oauth?: undefined;
                preprocessor?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                clearSession: boolean;
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                forcePost?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                oauth?: undefined;
                preprocessor?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            requiresSession: boolean;
            adapterSettings: {
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                clearSession?: undefined;
                forcePost?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            schema?: undefined;
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                oauth?: undefined;
                preprocessor?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                clearSession?: undefined;
                forcePost?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                preprocessor: () => void;
                disableCache: boolean;
                oauth?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                requiresSession: () => void;
                forceHttps: boolean;
                clearSessionCondition?: undefined;
                clearSession?: undefined;
                forcePost?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                oauth?: undefined;
                preprocessor?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                forcePost: boolean;
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                clearSession?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                preprocessor: () => void;
                oauth?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                clearSession?: undefined;
                forcePost?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                riskAssessment: boolean;
                oauth?: undefined;
                preprocessor?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                clearSessionCondition: () => void;
                forcePost: boolean;
                forceHttps: boolean;
                requiresSession: () => void;
                clearSession?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                oauth?: undefined;
                preprocessor?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                forcePost: boolean;
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                clearSession?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            altSessionParams: string;
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
        } | {
            methodName: string;
            settings: {
                preprocessor: () => void;
                oauth?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                clearSession: boolean;
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                forcePost?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                riskAssessment: boolean;
                oauth?: undefined;
                preprocessor?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                forcePost: boolean;
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                clearSession?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                oauth?: undefined;
                preprocessor?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            adapterSettings: {
                forcePost: boolean;
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                clearSession?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            requiresSession?: undefined;
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                preprocessor: () => void;
                oauth?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            adapterSettings: {
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                clearSession?: undefined;
                forcePost?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            requiresSession?: undefined;
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                oauth?: undefined;
                preprocessor?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                clearSession?: undefined;
                forcePost?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            altSessionParams: string;
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
        } | {
            methodName: string;
            settings: {
                riskAssessment: boolean;
                oauth?: undefined;
                preprocessor?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                forcePost: boolean;
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                clearSession?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            altSessionParams: string;
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
        } | {
            methodName: string;
            settings: {
                preprocessor: () => void;
                oauth?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                useHttpStatusCodes: boolean;
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                clearSession?: undefined;
                forcePost?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                oauth: boolean;
                preprocessor?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                oauthMode: number;
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                clearSession?: undefined;
                forcePost?: undefined;
                useHttpStatusCodes?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                postprocessor: () => void;
                oauth?: undefined;
                preprocessor?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                clearSession?: undefined;
                forcePost?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                riskAssessment: boolean;
                preprocessor: () => void;
                oauth?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                forcePost: boolean;
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                clearSession?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                preprocessor: () => void;
                oauth?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                clearSessionCondition: () => void;
                forceHttps: boolean;
                requiresSession: () => void;
                clearSession?: undefined;
                forcePost?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            altSessionParams: string;
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
        } | {
            methodName: string;
            settings: {
                preprocessor: () => void;
                oauth?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                clearSession?: undefined;
                forcePost?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            altSessionParams: string;
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
        } | {
            methodName: string;
            settings: {
                oauth?: undefined;
                preprocessor?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                forcePost: boolean;
                useBearerToken: boolean;
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                clearSession?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                namespace?: undefined;
            };
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                preprocessor: () => void;
                oauth?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                forcePost: boolean;
                useBearerToken: boolean;
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                clearSession?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                namespace?: undefined;
            };
            altSessionParams: string;
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
        } | {
            methodName: string;
            settings: {
                oauth?: undefined;
                preprocessor?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
                restUrl?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                clearSessionCondition: () => void;
                forcePost: boolean;
                forceHttps: boolean;
                requiresSession: () => void;
                clearSession?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
                namespace?: undefined;
            };
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        } | {
            methodName: string;
            settings: {
                restUrl: string;
                oauth?: undefined;
                preprocessor?: undefined;
                defaultParams?: undefined;
                allowPopup?: undefined;
                defaultPopupParams?: undefined;
                requiredParams?: undefined;
                useBasePlugin?: undefined;
                dontLoadPluginsCore?: undefined;
                waitForAPIQueue?: undefined;
                disableCache?: undefined;
                riskAssessment?: undefined;
                postprocessor?: undefined;
            };
            schema: string;
            requiresSession: boolean;
            adapterSettings: {
                namespace: string;
                forcePost: boolean;
                forceHttps: boolean;
                requiresSession: () => void;
                clearSessionCondition?: undefined;
                clearSession?: undefined;
                useHttpStatusCodes?: undefined;
                oauthMode?: undefined;
                useBearerToken?: undefined;
            };
            jsName?: undefined;
            namespace?: undefined;
            className?: undefined;
            instanceMethods?: undefined;
            pluginType?: undefined;
            injectionInfo?: undefined;
            _versions?: undefined;
            _defaultVersionIndex?: undefined;
            altSessionParams?: undefined;
        })[];
        export let defaultApiSchema: string;
        export let defaultOauthSchema: string;
        export let postBookmarkSchema: string;
        export let loginMethods: {
            "socialize.login": number;
            "socialize.addConnection": number;
            "socialize.notifyLogin": number;
            "socialize.linkAccounts": number;
            "accounts.login": number;
            "accounts.otp.login": number;
            "accounts.auth.magiclink.email.login": number;
            "accounts.auth.otp.email.login": number;
            "accounts.auth.login": number;
            "accounts.socialLogin": number;
            "accounts.linkAccounts": number;
            "accounts.register": number;
            "accounts.finalizeRegistration": number;
            "accounts.notifySocialLogin": number;
        };
        export let logoutMethods: {
            "socialize.logout": number;
            "accounts.logout": number;
            "socialize.deleteAccount": number;
            "socialize.unlinkAccounts": number;
        };
        export function ServerApi(): void;
        export function ServerApiRequest(): void;
        export function WindowProvider(): void;
        export namespace config_1 {
            export namespace flags_1 {
                let alignSocialWidget: boolean;
                let alwaysCheckCookieSave: boolean;
                let dispatchLoginEventWhenHandlerAdded: boolean;
                let enforceAuthFlowRedirectForSocial: boolean;
                let fixPhoneTFATranslations: boolean;
                let forceErrorReport: boolean;
                let forceWebSdkBootstrap: boolean;
                let hideSSOFrame: boolean;
                let loadSsoFrameOnlyOnce: boolean;
                let magicLinkDispatchLoginWhenAdded: boolean;
                let newFormLinkInstanceElement: boolean;
                let oidcUseLocalStorage: boolean;
                let reBootstrapOnLogin: boolean;
                let sanitizeEvaluatedValue: boolean;
                let setCookieSameSiteLax: boolean;
                let setCookieSameSiteLaxSession: boolean;
                let setGroupApiDomainAfterLogin: boolean;
                let setProviderFromResponse: boolean;
                let skipSameScreenCheckOnSwitch: boolean;
                let supportConsentFallbackLang: boolean;
                let updateAccountInfoAsync: boolean;
                let useDecodeURIComponent: boolean;
                let useExtendedPhoneNumberRegex: boolean;
                let useGigyaJsBaseDomain: boolean;
                let useMigratedGoogleAuth: boolean;
                let useNewOidcContextFlow: boolean;
                let useSessionVerify: boolean;
                let verifyLoginOnlyOnce: boolean;
                let wcagContrastFix: boolean;
                let enableLinkAccountsV2Fallback: boolean;
                let forcePostForSensitiveParams: boolean;
                let generateNewCodeWcagCompliance: boolean;
                let getOnlyVisibleField: boolean;
                let ignoreInterruptionsInOidcPassiveLogin: boolean;
                let initBackgroundWorker: boolean;
                let newLinkInstanceElement: boolean;
                let overrideAllChildContext: boolean;
                let passLanguageParamsToReauthScreen: boolean;
                let redirectOnMissingOidcContext: boolean;
                let removeAkamaiEdgeControlHeader: boolean;
                let revokeSSOGltOnOverride: boolean;
                let sendLangForEmailOTP: boolean;
                let setCookieSameSiteLaxLowPriority: boolean;
                let setCookieSameSiteLaxSocial: boolean;
                let stopSendingReports: boolean;
                let supportWorkflow: boolean;
                let useHttpStatusCode: boolean;
                let useLocalStorageListener: boolean;
                let useViewportPollerAction: boolean;
                let sendPendingEmailVerificationCodeOnce: boolean;
            }
            export { flags_1 as flags };
            export namespace plugins_2 {
                let connectWithoutLoginBehavior_1: string;
                export { connectWithoutLoginBehavior_1 as connectWithoutLoginBehavior };
                let defaultRegScreenSet_1: string;
                export { defaultRegScreenSet_1 as defaultRegScreenSet };
                let defaultMobileRegScreenSet_1: string;
                export { defaultMobileRegScreenSet_1 as defaultMobileRegScreenSet };
                let sessionExpiration_1: number;
                export { sessionExpiration_1 as sessionExpiration };
                let rememberSessionExpiration_1: number;
                export { rememberSessionExpiration_1 as rememberSessionExpiration };
                let apiDomain_1: string;
                export { apiDomain_1 as apiDomain };
                export namespace workflow_1 {
                    let path_1: string;
                    export { path_1 as path };
                }
                export { workflow_1 as workflow };
            }
            export { plugins_2 as plugins };
            export namespace api_1 {
                let customAPIDomainPrefix_1: string;
                export { customAPIDomainPrefix_1 as customAPIDomainPrefix };
                export let gmidTicketExpiration: number;
                let baseDomains_1: string[];
                export { baseDomains_1 as baseDomains };
            }
            export { api_1 as api };
            export let hostedPagesDomain: string;
            export namespace toggles {
                let linkAccountV2: string;
                let httpStatusCodes: string;
            }
            export namespace consent_2 {
                let hasLicense: boolean;
                let isMigrated: boolean;
            }
            export { consent_2 as consent };
        }
        export { config_1 as config };
        export namespace apiAdapter {
            let _storage_2: {};
            export { _storage_2 as _storage };
            let name_4: string;
            export { name_4 as name };
            export let _reBootstrapCount: number;
            export let _ssoService: any;
        }
        export function Poller(): void;
        export function getApiDomain_1(): void;
        export { getApiDomain_1 as getApiDomain };
    }
    export function setAccountResidency(): void;
    export function setGroupContext(): void;
    export function setSSOToken(): void;
    export function syncGroupGltExp(): void;
    export function hasSession(): void;
    export namespace sso_2 {
        export function getContext(): void;
        export function login_1(): void;
        export { login_1 as login };
        export function _continue(): void;
        export { _continue as continue };
    }
    export { sso_2 as sso };
    export namespace services {
        namespace proxy {
            export namespace utils_1 {
                function getParentUrl(): void;
                function getBodyElement(): void;
                function validateOrigin(): void;
                function createIframe(): void;
                function generateId(): void;
                function getAllClassMethodsNames(): void;
            }
            export { utils_1 as utils };
            export function isSignalRequest(): void;
            export function ProxyListener(): void;
            export function ServiceProxy(): void;
        }
        namespace TokenKeys {
            let GMID: string;
            let UCID: string;
            let GMID_TICKET: string;
            let GMID_TICKET_EXPIRATION_TIME: string;
        }
        function ApiService(): void;
        function GroupApiDomainService(): void;
        namespace RequestType {
            let GET: string;
            let POST: string;
        }
        function AccountService(): void;
        let accountService: {};
        function SiteDataService(): void;
        let siteData: {};
        namespace socialize {
            export function getAllProviders_1(): void;
            export { getAllProviders_1 as getAllProviders };
            export function replaceProviderAliases_1(): void;
            export { replaceProviderAliases_1 as replaceProviderAliases };
            export function getProvidersByName_1(): void;
            export { getProvidersByName_1 as getProvidersByName };
            export function _getProviderByName(): void;
            export function hideProvidersByName_1(): void;
            export { hideProvidersByName_1 as hideProvidersByName };
            export function _getProviderByID(): void;
            export function getProvidersForRequiredCapabilities_1(): void;
            export { getProvidersForRequiredCapabilities_1 as getProvidersForRequiredCapabilities };
            export function updateRefUID_1(): void;
            export { updateRefUID_1 as updateRefUID };
            export function hideUI_1(): void;
            export { hideUI_1 as hideUI };
            export function getProviderShareCounts_1(): void;
            export { getProviderShareCounts_1 as getProviderShareCounts };
            export function addEventHandlers(): void;
            export function isLoggedIn_1(): void;
            export { isLoggedIn_1 as isLoggedIn };
            export function waitForService_1(): void;
            export { waitForService_1 as waitForService };
            export function postBookmark_1(): void;
            export { postBookmark_1 as postBookmark };
            export function refreshUI_1(): void;
            export { refreshUI_1 as refreshUI };
            export function trackReferrals_1(): void;
            export { trackReferrals_1 as trackReferrals };
            export function User(): void;
            export function Friend(): void;
            export function Identity(): void;
            export function Contact(): void;
            export function person(): void;
            export function personwithuid(): void;
            export function UserAction(): void;
            export function Collection(): void;
            export function login_2(): void;
            export { login_2 as login };
            export function addConnection(): void;
            export function requestPermissions(): void;
            export function showDebugUI(): void;
            export function showLoginUI_v1(): void;
            export function showLoginUI_v2(): void;
            export function showLoginUI(): void;
            export function showAddConnectionsUI_v1(): void;
            export function showAddConnectionsUI_v2(): void;
            export function showAddConnectionsUI(): void;
            export function showEditConnectionsUI(): void;
            export function showSimpleShareUI(): void;
            export function showShareMobileUI(): void;
            export function getAvailableProviders(): void;
            export function notifyLogin(): void;
            export function convertAction(): void;
            export function deleteAccount(): void;
            export function delUserSettings(): void;
            export function getContacts(): void;
            export function getRawData(): void;
            export function getSessionInfo(): void;
            export function getUserInfo(): void;
            export function checkin(): void;
            export function logout_1(): void;
            export { logout_1 as logout };
            export function notifyRegistration(): void;
            export function removeConnection(): void;
            export function setUID(): void;
            export function unlinkAccounts(): void;
            export function facebookGraphOperation(): void;
            export function notifySSOLogin(): void;
            export function connect_1(): void;
            export { connect_1 as connect };
            export function disconnect(): void;
            export function linkAccounts(): void;
            export function showConnectUI(): void;
            export function GrayOut(): void;
            export function getStyleString(): void;
            export function _fixGrayPosition(): void;
            export function _fixGraySize(): void;
            export function _createJSPopup(): void;
            export function _createJSPopup2(): void;
            export function _parseRID(): void;
            export function _closeComponent(): void;
            export namespace plugins_3 {
                export namespace login_3 {
                    let instances_1: any[];
                    export { instances_1 as instances };
                    export function showLoginUI_v2_1(): void;
                    export { showLoginUI_v2_1 as showLoginUI_v2 };
                    export function showAddConnectionsUI_v2_1(): void;
                    export { showAddConnectionsUI_v2_1 as showAddConnectionsUI_v2 };
                }
                export { login_3 as login };
            }
            export { plugins_3 as plugins };
        }
        namespace gcs {
            export function submitUserForm_1(): void;
            export { submitUserForm_1 as submitUserForm };
            export function getUserData(): void;
            export function setUserData(): void;
            export function search(): void;
            export function getSchema(): void;
        }
        namespace accounts {
            export function addEventHandlers_1(): void;
            export { addEventHandlers_1 as addEventHandlers };
            export namespace b2b {
                function openDelegatedAdminLogin(): void;
                function registerOrganization(): void;
                function getOrganizationSchema(): void;
                function delegatedAdminLogin(): void;
                function getOrganizationInfo(): void;
                function setOrganizationContext(): void;
                function getOrganizationContext(): void;
                namespace auth {
                    function getAssets(): void;
                }
            }
            export function setSSOToken_1(): void;
            export { setSSOToken_1 as setSSOToken };
            export namespace auth_1 {
                export namespace fido {
                    export function register(): void;
                    export function login_4(): void;
                    export { login_4 as login };
                    export function initRegisterCredentials(): void;
                    export function registerCredentials(): void;
                    export function getAssertionOptions(): void;
                    export function verifyAssertion(): void;
                    export function getCredentials(): void;
                    export function removeCredential(): void;
                }
                export function getPreferredLoginMethod(): void;
                export function setPreferredLoginMethod(): void;
                export function guest(): void;
                export namespace otp {
                    function verify(): void;
                    function authenticate(): void;
                    namespace email {
                        export function sendCode(): void;
                        export function login_5(): void;
                        export { login_5 as login };
                    }
                }
                export function getMethods(): void;
                export namespace push {
                    function sendVerification(): void;
                    function isVerified(): void;
                }
                export namespace magiclink {
                    export namespace email_1 {
                        export function send(): void;
                        export function login_6(): void;
                        export { login_6 as login };
                    }
                    export { email_1 as email };
                }
                export function login_7(): void;
                export { login_7 as login };
            }
            export { auth_1 as auth };
            export function socialLogin(): void;
            export function showMyPhotoUI(): void;
            export function showTfaUI(): void;
            export function initHostedPage(): void;
            export function showScreenSet(): void;
            export function hideScreenSet(): void;
            export function switchScreen_1(): void;
            export { switchScreen_1 as switchScreen };
            export function login_8(): void;
            export { login_8 as login };
            export function linkAccounts_1(): void;
            export { linkAccounts_1 as linkAccounts };
            export function notifySocialLogin(): void;
            export function initRegistration(): void;
            export function initProgression(): void;
            export function register_1(): void;
            export { register_1 as register };
            export function finalizeRegistration(): void;
            export function captchaImage(): void;
            export function importProfilePhoto(): void;
            export function setProfilePhoto(): void;
            export function resetPassword(): void;
            export function removeProfilePhoto(): void;
            export function isAvailableLoginID(): void;
            export namespace address {
                namespace suggestions {
                    export function get_1(): void;
                    export { get_1 as get };
                }
            }
            export function resendVerificationCode(): void;
            export function getCaptcha(): void;
            export function getPolicies(): void;
            export function getSchema_1(): void;
            export { getSchema_1 as getSchema };
            export function getSiteConsentDetails(): void;
            export function getLegalStatements(): void;
            export function verifyLogin(): void;
            export function getAccountInfo(): void;
            export function setAccountInfo(): void;
            export function logout_2(): void;
            export { logout_2 as logout };
            export function search_1(): void;
            export { search_1 as search };
            export function getScreenSets(): void;
            export namespace sso_3 {
                export function login_9(): void;
                export { login_9 as login };
            }
            export { sso_3 as sso };
            export function getConflictingAccount(): void;
            export function resetSitePreferences(): void;
            export function getJWT(): void;
            export namespace tfa {
                export function getProviders(): void;
                export function initTFA(): void;
                export function finalizeTFA(): void;
                export function deactivateProvider(): void;
                export function unregisterDevice(): void;
                export namespace backupcodes {
                    export function get_2(): void;
                    export { get_2 as get };
                    export function create(): void;
                    export function verify_1(): void;
                    export { verify_1 as verify };
                }
                export namespace phone {
                    function getRegisteredPhoneNumbers(): void;
                    function removePhone(): void;
                    function sendVerificationCode(): void;
                    function completeVerification(): void;
                }
                export namespace email_2 {
                    export function getEmails(): void;
                    export function sendVerificationCode_1(): void;
                    export { sendVerificationCode_1 as sendVerificationCode };
                    export function completeVerification_1(): void;
                    export { completeVerification_1 as completeVerification };
                }
                export { email_2 as email };
                export namespace totp {
                    export function register_2(): void;
                    export { register_2 as register };
                    export function verify_2(): void;
                    export { verify_2 as verify };
                    export function getRegistered(): void;
                    export function remove_1(): void;
                    export { remove_1 as remove };
                }
                export namespace push_1 {
                    export function isVerified_1(): void;
                    export { isVerified_1 as isVerified };
                    export function sendVerification_1(): void;
                    export { sendVerification_1 as sendVerification };
                }
                export { push_1 as push };
            }
            export namespace groups {
                export function getSchema_2(): void;
                export { getSchema_2 as getSchema };
                export function registerGroup(): void;
                export function setGroupInfo(): void;
                export function getGroupInfo(): void;
                export function deleteGroup(): void;
                export function setGroupMemberInfo(): void;
                export function getGroupMemberInfo(): void;
                export function removeMember(): void;
                export function getAllMemberGroups(): void;
                export function searchGroupMembers(): void;
                export function createInvitation(): void;
                export function invitationConfirm(): void;
                export function finalizeInvitation(): void;
            }
            export namespace otp_1 {
                export function sendCode_1(): void;
                export { sendCode_1 as sendCode };
                export function login_10(): void;
                export { login_10 as login };
                export function update(): void;
            }
            export { otp_1 as otp };
            export namespace identifier {
                function createToken(): void;
            }
            export namespace identity {
                function authorize(): void;
            }
            export namespace session {
                export function verify_3(): void;
                export { verify_3 as verify };
            }
        }
    }
    export function Request(): void;
    export function XhrRequest(): void;
    export function Promise(): void;
    export function debug(): void;
    export let gm: {};
    export let comments: {};
    export let gscounters: {};
    export function getLoginToken(): void;
    export function updateConfiguration(): void;
    export namespace utils_2 {
        let toggles_1: {};
        export { toggles_1 as toggles };
        export namespace array {
            function indexOf(): void;
            function clone(): void;
            function removeByValue(): void;
            function removeByProperty(): void;
            function getArrayFromString(): void;
            function intersect(): void;
            function lastIndexOf(): void;
            function forEach(): void;
            function forEachProp(): void;
            function some(): void;
            function every(): void;
            function everyProp(): void;
            function map(): void;
            function firstIndex(): void;
            function first(): void;
            function getAllEnumValues(): void;
            function getUniqueValues(): void;
            function includes(): void;
            function containsOnly(): void;
        }
        export namespace browser {
            function isModern(): void;
            function getVersion(): void;
        }
        export namespace cookie {
            let _cookieStore: {};
        }
        export namespace date {
            function now(): void;
        }
        export namespace delegate {
            export function create_1(): void;
            export { create_1 as create };
        }
        export namespace DOM_1 {
            let _popupContainers: any[];
            let _pseudoContainers: any[];
            function getNextZIndex(): void;
            function getGigyaScriptElement(): void;
            function dispatch(): void;
            function addButtonSubmitListener(): void;
            function addEventListener(): void;
            function addActivationHandler(): void;
            function removeEventListener(): void;
            function disableDefaultEventHandling(): void;
            function addDialogBackListener(): void;
            function _removeDialogBackListener(): void;
            function prependToBody(): void;
            function appendToBody(): void;
            function removeElement(): void;
            function isChildOf(): void;
            function isVisible(): void;
            function getCenteredDivID(): void;
            function createElementWithAttributes(): void;
            function createTopLevelDiv(): void;
            function hideByID(): void;
            function showByID(): void;
            function clearByID(): void;
            function getHTMLSize(): void;
            function getElementsByClass(): void;
            function getElementsByAttribute(): void;
            function getElementPosition(): void;
            function addClassToElement(): void;
            function removeClassFromElement(): void;
            function getClassNames(): void;
            function isElementClass(): void;
            function cancelEvent(): void;
            function createElement(): void;
            function setSize(): void;
            function createHiddenIframe(): void;
            function attributeEncode(): void;
            function manipulateAttributes(): void;
            function textNodesUnder(): void;
            function isHTMLBooleanAttribute(): void;
            function isBelongToGigyaFieldset(): void;
            function getClosestElement(): void;
            function createElementFromTemplate(): void;
            function isParentHasClass(): void;
            function enableSafeCopy(): void;
        }
        export { DOM_1 as DOM };
        export namespace functions {
            function callAsync(): void;
            function callFunction(): void;
            function invokeOnPageLoad(): void;
            function createAlias(): void;
            function debounce(): void;
            function addSrcToIFrameIfNeeded(): void;
        }
        export namespace gltexp {
            function isValid(): void;
            function getMax(): void;
            function getMillis(): void;
        }
        export namespace HTTP {
            function redirect(): void;
        }
        export namespace JSON {
            function serialize(): void;
            function deserialize(): void;
            function parse(): void;
        }
        export namespace keyboard {
            let keyCodes: {
                8: string;
                13: string;
                27: string;
            };
            function onHotKeyClicked(): void;
        }
        export namespace keyValue {
            export function serialize_1(): void;
            export { serialize_1 as serialize };
            export function deserialize_1(): void;
            export { deserialize_1 as deserialize };
        }
        export namespace localStorage {
            export function AbstractLocalStorageAdapter(): void;
            export function AbstractAsyncLocalStorageAdapter(): void;
            export function CookieStorageAdapter(): void;
            export function MemoryStorageAdapter(): void;
            export let adapters: (() => void)[];
            let instances_2: {};
            export { instances_2 as instances };
            export function initializeAdapter(): void;
            export function waitForService_2(): void;
            export { waitForService_2 as waitForService };
            export function getItem(): void;
            export function setItem(): void;
            export function removeItem(): void;
            export function setObject(): void;
            export function getObject(): void;
        }
        export namespace mouse {
            function getPosition(): void;
        }
        export namespace object {
            export function removeUndefined(): void;
            export function expressionHelper(): void;
            export function getPropertyBySerializedName(): void;
            export function setPropertyBySerializedName(): void;
            export function add(): void;
            export function getHash(): void;
            export function getMurmurHash(): void;
            export function clone_1(): void;
            export { clone_1 as clone };
            export function merge(): void;
            export function unflatten(): void;
            export function flatten(): void;
            export function extractProperties(): void;
            export function extractProperty(): void;
            export function parseToObject(): void;
            export function removePropertiesPrefix(): void;
            export function addPrefixToProperties(): void;
            export function normalizeObjectKeysToLowerCase(): void;
            export function decodeObjectKeys(): void;
            export function cloneParamsForPlugin(): void;
        }
        export namespace queue {
            export function _servicesStatus(): void;
            export function isActive_1(): void;
            export { isActive_1 as isActive };
            export function release(): void;
            export function hold(): void;
            export function waitFor(): void;
            export function queueForExecution(): void;
        }
        export namespace sanitize {
            function sanitizeHTML(): void;
            function sanitizeAttribute(): void;
        }
        export namespace script {
            export function isLoaded_1(): void;
            export { isLoaded_1 as isLoaded };
            export function load(): void;
            export let ResourceTypes: {
                0: string;
                1: string;
                2: string;
                script: number;
                image: number;
                iframe: number;
            };
            export function triggerResource(): void;
            export function loadService(): void;
        }
        export namespace sessionCache {
            export function set_1(): void;
            export { set_1 as set };
            export function get_3(): void;
            export { get_3 as get };
            export function remove_2(): void;
            export { remove_2 as remove };
        }
        export namespace localCache {
            export function set_2(): void;
            export { set_2 as set };
            export function get_4(): void;
            export { get_4 as get };
            export function remove_3(): void;
            export { remove_3 as remove };
        }
        export namespace stringUtils {
            export function trim(): void;
            export function format(): void;
            export function capitalize(): void;
            export function endsWith_1(): void;
            export { endsWith_1 as endsWith };
            export function escapeRegExp(): void;
            export function replaceAll(): void;
            export function mergeCommaSeparatedValues(): void;
        }
        export namespace templates {
            function fill(): void;
        }
        export namespace URL_1 {
            function URLEncode(): void;
            function URLDecode(): void;
            function URLDecodeRecursive(): void;
            function getParamsFromURL(): void;
            function getGigParamsFromURL(): void;
            function getParamValueFromURL(): void;
            function addParamsToURL(): void;
            function getContextParamsFromUrl(): void;
        }
        export { URL_1 as URL };
        export namespace validation {
            function isExplicitTrue(): void;
            function isExplicitFalse(): void;
            function isLaterThanNow(): void;
            function allDefinedOrAllUndefined(): void;
        }
        export namespace viewport {
            function getScroll(): void;
            function getFullSize(): void;
            function getOrientation(): void;
            function getOuterSize(): void;
            function getInnerSize(): void;
            function getMiddleCenter(): void;
            function isRectHorizontallyVisible(): void;
            function isRectFullyVisible(): void;
            function scrollIntoView(): void;
        }
        export namespace win {
            let _openedWindows: {};
            let _uniqueWindowCounter: number;
            function _calcPixels(): void;
            function open(): void;
            function close(): void;
        }
        export namespace xd {
            let _flashListenerID: string;
            function addMessageListener(): void;
            function removeMessageListener(): void;
        }
        export let recaptcha: {};
        export function getGigyaScriptElement_1(): void;
        export { getGigyaScriptElement_1 as getGigyaScriptElement };
        export function updateConfiguration_1(): void;
        export { updateConfiguration_1 as updateConfiguration };
        export function getParamValue(): void;
        export function getReqParamValue(): void;
        export function Tabbable(): void;
        export namespace tabbable {
            let bindings: {
                container: {};
                listener: () => void;
            }[];
        }
    }
    export { utils_2 as utils };
    export function getUrlParam(): void;
    export namespace logger {
        namespace _global {
            export namespace document {
                namespace location {
                    export let ancestorOrigins: {};
                    export let href: string;
                    export let origin: string;
                    export let protocol: string;
                    export let host: string;
                    export let hostname: string;
                    export let port: string;
                    export let pathname: string;
                    let search_2: string;
                    export { search_2 as search };
                    export let hash: string;
                    export function assign(): void;
                    export function reload(): void;
                    export function replace(): void;
                    export function toString(): void;
                }
            }
            let name_5: string;
            export { name_5 as name };
            export let customElements: {};
            export let history: {};
            export let navigation: {};
            export let locationbar: {};
            export let menubar: {};
            export let personalbar: {};
            export let scrollbars: {};
            export let statusbar: {};
            export let toolbar: {};
            let status_1: string;
            export { status_1 as status };
            export let closed: boolean;
            export let length: number;
            export let opener: any;
            export let frameElement: any;
            export let navigator: {};
            let origin_1: string;
            export { origin_1 as origin };
            export let external: {};
            export let screen: {};
            export let innerWidth: number;
            export let innerHeight: number;
            export let scrollX: number;
            export let pageXOffset: number;
            export let scrollY: number;
            export let pageYOffset: number;
            export let visualViewport: {};
            export let screenX: number;
            export let screenY: number;
            export let outerWidth: number;
            export let outerHeight: number;
            export let devicePixelRatio: number;
            export let screenLeft: number;
            export let screenTop: number;
            export let styleMedia: {};
            export let onsearch: any;
            export let isSecureContext: boolean;
            export let trustedTypes: {};
            export namespace performance {
                export let timeOrigin: number;
                export namespace timing {
                    let connectStart: number;
                    let navigationStart: number;
                    let secureConnectionStart: number;
                    let fetchStart: number;
                    let domContentLoadedEventStart: number;
                    let responseStart: number;
                    let domInteractive: number;
                    let domainLookupEnd: number;
                    let responseEnd: number;
                    let redirectStart: number;
                    let requestStart: number;
                    let unloadEventEnd: number;
                    let unloadEventStart: number;
                    let domLoading: number;
                    let domComplete: number;
                    let domainLookupStart: number;
                    let loadEventStart: number;
                    let domContentLoadedEventEnd: number;
                    let loadEventEnd: number;
                    let redirectEnd: number;
                    let connectEnd: number;
                }
                export namespace navigation_1 {
                    let type: number;
                    let redirectCount: number;
                }
                export { navigation_1 as navigation };
            }
            export let onappinstalled: any;
            export let onbeforeinstallprompt: any;
            export let crypto: {};
            export let indexedDB: {};
            export let sessionStorage: {};
            export let onbeforexrselect: any;
            export let onabort: any;
            export let onbeforeinput: any;
            export let onbeforetoggle: any;
            export let onblur: any;
            export let oncancel: any;
            export let oncanplay: any;
            export let oncanplaythrough: any;
            export let onchange: any;
            export let onclick: any;
            export let onclose: any;
            export let oncontextlost: any;
            export let oncontextmenu: any;
            export let oncontextrestored: any;
            export let oncuechange: any;
            export let ondblclick: any;
            export let ondrag: any;
            export let ondragend: any;
            export let ondragenter: any;
            export let ondragleave: any;
            export let ondragover: any;
            export let ondragstart: any;
            export let ondrop: any;
            export let ondurationchange: any;
            export let onemptied: any;
            export let onended: any;
            export let onerror: any;
            export let onfocus: any;
            export let onformdata: any;
            export let oninput: any;
            export let oninvalid: any;
            export let onkeydown: any;
            export let onkeypress: any;
            export let onkeyup: any;
            export let onload: any;
            export let onloadeddata: any;
            export let onloadedmetadata: any;
            export let onloadstart: any;
            export let onmousedown: any;
            export let onmouseenter: any;
            export let onmouseleave: any;
            export let onmousemove: any;
            export let onmouseout: any;
            export let onmouseover: any;
            export let onmouseup: any;
            export let onmousewheel: any;
            export let onpause: any;
            export let onplay: any;
            export let onplaying: any;
            export let onprogress: any;
            export let onratechange: any;
            export let onreset: any;
            export let onresize: any;
            export let onscroll: any;
            export let onsecuritypolicyviolation: any;
            export let onseeked: any;
            export let onseeking: any;
            export let onselect: any;
            export let onslotchange: any;
            export let onstalled: any;
            export let onsubmit: any;
            export let onsuspend: any;
            export let ontimeupdate: any;
            export let ontoggle: any;
            export let onvolumechange: any;
            export let onwaiting: any;
            export let onwebkitanimationend: any;
            export let onwebkitanimationiteration: any;
            export let onwebkitanimationstart: any;
            export let onwebkittransitionend: any;
            export let onwheel: any;
            export let onauxclick: any;
            export let ongotpointercapture: any;
            export let onlostpointercapture: any;
            export let onpointerdown: any;
            export let onpointermove: any;
            export let onpointerrawupdate: any;
            export let onpointerup: any;
            export let onpointercancel: any;
            export let onpointerover: any;
            export let onpointerout: any;
            export let onpointerenter: any;
            export let onpointerleave: any;
            export let onselectstart: any;
            export let onselectionchange: any;
            export let onanimationend: any;
            export let onanimationiteration: any;
            export let onanimationstart: any;
            export let ontransitionrun: any;
            export let ontransitionstart: any;
            export let ontransitionend: any;
            export let ontransitioncancel: any;
            export let onafterprint: any;
            export let onbeforeprint: any;
            export let onbeforeunload: any;
            export let onhashchange: any;
            export let onlanguagechange: any;
            export let onmessage: any;
            export let onmessageerror: any;
            export let onoffline: any;
            export let ononline: any;
            export let onpagehide: any;
            export let onpageshow: any;
            export let onpopstate: any;
            export let onrejectionhandled: any;
            export let onstorage: any;
            export let onunhandledrejection: any;
            export let onunload: any;
            export let crossOriginIsolated: boolean;
            export let scheduler: {};
            export function alert(): void;
            export function atob(): void;
            export function blur(): void;
            export function btoa(): void;
            export function cancelAnimationFrame(): void;
            export function cancelIdleCallback(): void;
            export function captureEvents(): void;
            export function clearInterval(): void;
            export function clearTimeout(): void;
            export function close_1(): void;
            export { close_1 as close };
            export function confirm(): void;
            export function createImageBitmap(): void;
            export function fetch(): void;
            export function find(): void;
            export function focus(): void;
            export function getComputedStyle(): void;
            export function getSelection(): void;
            export function matchMedia(): void;
            export function moveBy(): void;
            export function moveTo(): void;
            export function open_1(): void;
            export { open_1 as open };
            export function postMessage(): void;
            export function print(): void;
            export function prompt(): void;
            export function queueMicrotask(): void;
            export function releaseEvents(): void;
            export function reportError(): void;
            export function requestAnimationFrame(): void;
            export function requestIdleCallback(): void;
            export function resizeBy(): void;
            export function resizeTo(): void;
            export function scroll(): void;
            export function scrollBy(): void;
            export function scrollTo(): void;
            export function setInterval(): void;
            export function setTimeout(): void;
            export function stop(): void;
            export function structuredClone(): void;
            export function webkitCancelAnimationFrame(): void;
            export function webkitRequestAnimationFrame(): void;
            export namespace chrome {
                function loadTimes(): void;
                function csi(): void;
                namespace app {
                    let isInstalled: boolean;
                    function getDetails(): void;
                    function getIsInstalled(): void;
                    function installState(): void;
                    function runningState(): void;
                    namespace InstallState {
                        let DISABLED: string;
                        let INSTALLED: string;
                        let NOT_INSTALLED: string;
                    }
                    namespace RunningState {
                        let CANNOT_RUN: string;
                        let READY_TO_RUN: string;
                        let RUNNING: string;
                    }
                }
            }
            export let fence: any;
            export let caches: {};
            export let cookieStore: {};
            export let ondevicemotion: any;
            export let ondeviceorientation: any;
            export let ondeviceorientationabsolute: any;
            export let launchQueue: {};
            export let sharedStorage: {};
            export let documentPictureInPicture: {};
            export let onbeforematch: any;
            export function getScreenDetails(): void;
            export function queryLocalFonts(): void;
            export function showDirectoryPicker(): void;
            export function showOpenFilePicker(): void;
            export function showSaveFilePicker(): void;
            export let originAgentCluster: boolean;
            export let credentialless: boolean;
            export let speechSynthesis: {};
            export let oncontentvisibilityautostatechange: any;
            export let onscrollend: any;
            export function webkitRequestFileSystem(): void;
            export function webkitResolveLocalFileSystemURL(): void;
            export let litIssuedWarnings: {};
            export let litHtmlVersions: string[];
            export let litPropertyMetadata: {};
            export let reactiveElementVersions: string[];
            export let litElementVersions: string[];
            export namespace gigya {
                let isGigya_1: boolean;
                export { isGigya_1 as isGigya };
                let apiKey_1: string;
                export { apiKey_1 as apiKey };
                let defaultApiDomain_1: string;
                export { defaultApiDomain_1 as defaultApiDomain };
                let dataCenter_1: string;
                export { dataCenter_1 as dataCenter };
                let gmidVersion_1: string;
                export { gmidVersion_1 as gmidVersion };
                let bypassCaptchaV1_1: boolean;
                export { bypassCaptchaV1_1 as bypassCaptchaV1 };
                let __initialized_1: boolean;
                export { __initialized_1 as __initialized };
                export function setAccountResidency_1(): void;
                export { setAccountResidency_1 as setAccountResidency };
                export function setGroupContext_1(): void;
                export { setGroupContext_1 as setGroupContext };
                export function setSSOToken_2(): void;
                export { setSSOToken_2 as setSSOToken };
                export function syncGroupGltExp_1(): void;
                export { syncGroupGltExp_1 as syncGroupGltExp };
                export function hasSession_1(): void;
                export { hasSession_1 as hasSession };
                export function Request_1(): void;
                export { Request_1 as Request };
                export function XhrRequest_1(): void;
                export { XhrRequest_1 as XhrRequest };
                export function Promise_1(): void;
                export { Promise_1 as Promise };
                export function debug_1(): void;
                export { debug_1 as debug };
                export function getLoginToken_1(): void;
                export { getLoginToken_1 as getLoginToken };
                export function updateConfiguration_2(): void;
                export { updateConfiguration_2 as updateConfiguration };
                export function getUrlParam_1(): void;
                export { getUrlParam_1 as getUrlParam };
                export namespace events {
                    namespace global {
                        export namespace _activeNamespaces {
                            let socialize_1: number;
                            export { socialize_1 as socialize };
                        }
                        export function add_1(): void;
                        export { add_1 as add };
                        export function remove_4(): void;
                        export { remove_4 as remove };
                        export function dispatch_1(): void;
                        export { dispatch_1 as dispatch };
                        export function dispatchWhenHandlerAdded(): void;
                        export function dispatchWhenHandlersAdded(): void;
                        export function getEventsForOperation(): void;
                    }
                    function addMap(): void;
                    function dispatchErrorFromResponse(): void;
                    function dispatchInvalidParamError(): void;
                    function dispatchForWidget(): void;
                    function dispatchEventObject(): void;
                    function _dispatchFromMaps(): void;
                }
                export namespace log {
                    export let CONSOLE_LOG_LEVELS: string[];
                    export let selectedConsoleLogLevels: any[];
                    export let _log: any[];
                    export function enable(): void;
                    export function disable(): void;
                    export function _isEnabled(): void;
                    export function addLog(): void;
                    export function logCall(): void;
                    export function debug_2(): void;
                    export { debug_2 as debug };
                    export function showLog(): void;
                    export function show(): void;
                    export function showConfig(): void;
                }
                export namespace legacyReports {
                    export function trackAddressBarShares(): void;
                    export function report(): void;
                    export function init_1(): void;
                    export { init_1 as init };
                    export function reportLoad(): void;
                }
                export namespace fidm {
                    export namespace saml_1 {
                        function initSSO(): void;
                        function continueSSO(): void;
                        function cancelSSO(): void;
                        function logoutSSO(): void;
                    }
                    export { saml_1 as saml };
                    export namespace oidc {
                        namespace op {
                            export function getContext_1(): void;
                            export { getContext_1 as getContext };
                            export function redirectToContinue(): void;
                            export function deviceContinue(): void;
                            export function getContextData(): void;
                        }
                    }
                }
                export let globalAccount: {};
                export let isReady: boolean;
                export namespace localInfo {
                    export let baseDomain: string;
                    export let isBrowserSupportsFilesAPI: boolean;
                    export let initTime: string;
                    let version_3: number;
                    export { version_3 as version };
                    export let pageDomain: string;
                    let protocol_1: string;
                    export { protocol_1 as protocol };
                    export let userAgent: string;
                    export let isWin: boolean;
                    export let isIE: boolean;
                    export let isIE6: boolean;
                    export let isIE7: boolean;
                    export let isIE8: boolean;
                    export let isIE9: boolean;
                    export let isIE10: boolean;
                    export let isIE11: boolean;
                    export let isEdgeLegacy: boolean;
                    export let isEdge: boolean;
                    export let isIOS: boolean;
                    export let isSafari534: boolean;
                    export let isWeChat: boolean;
                    export let iosVersion: number;
                    export let isAndroid: boolean;
                    export let isAndroidBrowser: boolean;
                    export let currentBrowser: string;
                    export let androidVersion: number;
                    export let isChrome: boolean;
                    export let isGoogleBot: boolean;
                    export let isFF: boolean;
                    export let isOpera: boolean;
                    export let isSafari: boolean;
                    export let isIOSWebView: boolean;
                    export let isIOSChrome: boolean;
                    export let isMAC: boolean;
                    export let isWindowsPhone: boolean;
                    export let isFacebookBrowser: boolean;
                    export let supportsPostMessage: boolean;
                    export let supportsLocalStorage: boolean;
                    export let supportsSessionStorage: boolean;
                    export let supportsFlash: boolean;
                    export let quirksMode: boolean;
                    export let backCompat: boolean;
                    export let isMobile: boolean;
                    export let isMobileApp: boolean;
                    export let isNativeMobileApp: boolean;
                    export let isTouch: boolean;
                    export function isOnLine(): void;
                    export let messagingMethod: number;
                }
                export function ClientFeature(): void;
                export let defaultEventMaps: {
                    id: string;
                    defaultMethod: () => void;
                    eventMap: {
                        events: string;
                        args: (() => void)[];
                    }[];
                }[];
                export function flow(): void;
                export namespace oauth {
                    export function register_3(): void;
                    export { register_3 as register };
                    export function connect_2(): void;
                    export { connect_2 as connect };
                    export function disconnect_1(): void;
                    export { disconnect_1 as disconnect };
                    export function authorize_1(): void;
                    export { authorize_1 as authorize };
                    export function token(): void;
                }
                export namespace auth_2 {
                    export namespace token_1 {
                        function authenticationContext(): void;
                    }
                    export { token_1 as token };
                    export namespace loginToken {
                        export function getTokenParam_1(): void;
                        export { getTokenParam_1 as getTokenParam };
                        export function get_5(): void;
                        export { get_5 as get };
                    }
                }
                export { auth_2 as auth };
                export namespace ds {
                    export function store(): void;
                    export function get_6(): void;
                    export { get_6 as get };
                    export function search_3(): void;
                    export { search_3 as search };
                    export function getSchema_3(): void;
                    export { getSchema_3 as getSchema };
                    export function _delete(): void;
                    export { _delete as delete };
                }
                export namespace ids {
                    export function getAccountInfo_1(): void;
                    export { getAccountInfo_1 as getAccountInfo };
                    export function setAccountInfo_1(): void;
                    export { setAccountInfo_1 as setAccountInfo };
                    export function search_4(): void;
                    export { search_4 as search };
                }
                export function showDebugUI_1(): void;
                export { showDebugUI_1 as showDebugUI };
                export namespace external_1 {
                    export namespace facebook_1 {
                        let isLoggedIn_2: boolean;
                        export { isLoggedIn_2 as isLoggedIn };
                        export let isConnected: boolean;
                        export function isLoaded_2(): void;
                        export { isLoaded_2 as isLoaded };
                        export function load_1(): void;
                        export { load_1 as load };
                        export function refreshSession(): void;
                        export function retryPending(): void;
                        export function runWhenLoaded(): void;
                        export function getParams(): void;
                        export function autoLogin_1(): void;
                        export { autoLogin_1 as autoLogin };
                    }
                    export { facebook_1 as facebook };
                    export namespace googlePlus {
                        export function isLoaded_3(): void;
                        export { isLoaded_3 as isLoaded };
                        export function load_2(): void;
                        export { load_2 as load };
                        export function handleClientLoad(): void;
                        export function refreshSession_1(): void;
                        export { refreshSession_1 as refreshSession };
                        export function autoLogin_2(): void;
                        export { autoLogin_2 as autoLogin };
                    }
                    export namespace opengraph {
                        function getMetaTag(): void;
                    }
                }
                export { external_1 as external };
                export namespace thisScript {
                    export let scriptElement: {};
                    let protocol_2: string;
                    export { protocol_2 as protocol };
                    let baseDomain_1: string;
                    export { baseDomain_1 as baseDomain };
                    export let APIKey: string;
                    export namespace lang {
                        let full: string;
                        let langCode: string;
                        let countryCode: string;
                        let originalLang: string;
                    }
                    export namespace globalConf {
                        let connectWithoutLoginBehavior_2: string;
                        export { connectWithoutLoginBehavior_2 as connectWithoutLoginBehavior };
                        let defaultRegScreenSet_2: string;
                        export { defaultRegScreenSet_2 as defaultRegScreenSet };
                        let defaultMobileRegScreenSet_2: string;
                        export { defaultMobileRegScreenSet_2 as defaultMobileRegScreenSet };
                        let sessionExpiration_2: number;
                        export { sessionExpiration_2 as sessionExpiration };
                        let rememberSessionExpiration_2: number;
                        export { rememberSessionExpiration_2 as rememberSessionExpiration };
                        let apiDomain_2: string;
                        export { apiDomain_2 as apiDomain };
                        let lang_1: string;
                        export { lang_1 as lang };
                        let APIKey_1: string;
                        export { APIKey_1 as APIKey };
                    }
                    export namespace URLParams {
                        export let apikey: string;
                        export let pretty: string;
                        let debug_3: string;
                        export { debug_3 as debug };
                    }
                }
                export namespace global_1 {
                    export function addCSS(): void;
                    export namespace date_1 {
                        function getISODate(): void;
                    }
                    export { date_1 as date };
                    export namespace XMLUtils {
                        function CreateXMLFromString(): void;
                        function CopyProperties(): void;
                        function CollectAttributesFromXMLPathToObject(): void;
                        function mergeNodes(): void;
                    }
                    export function resolver(): void;
                    export function getCombination(): void;
                    export function resolveProviders(): void;
                    export function showLoader(): void;
                    export function fadeIn(): void;
                    export function getBalloonHTML(): void;
                    export function createGMBalloon(): void;
                    export function removeGMBalloon(): void;
                    export function putGMBalloonNextTo(): void;
                    export function positionGMBalloonNextTo(): void;
                    export function scrollToElement(): void;
                    export function addIframeShim(): void;
                    export function removeIframeShim(): void;
                    export function scaleImage(): void;
                    export function fillUserActionTemplate(): void;
                    export function setPlaceholder(): void;
                    export function getClassBordersAndPaddings(): void;
                    export function getBordersAndPaddings(): void;
                    export function getStyle(): void;
                    export function scaleImageToContainer(): void;
                    export function getClassInnerSize(): void;
                    export function SpriteRenderer(): void;
                    export function getSpriteRenderers(): void;
                    export function preloadImages(): void;
                    export function applyEllipsis(): void;
                    export function getPhotoURL(): void;
                    export function wbr(): void;
                    export function getPos(): void;
                    export function _GetElementPos(): void;
                    export function isEmail(): void;
                }
                export { global_1 as global };
                export namespace pluginUtils {
                    export namespace css_2 {
                        export function fixCss_1(): void;
                        export { fixCss_1 as fixCss };
                    }
                    export { css_2 as css };
                    export namespace lang_2 {
                        function getLocalizedText(): void;
                        function getTranslationsFromContainer(): void;
                        function getFallbackLang(): void;
                        function getDateString(): void;
                    }
                    export { lang_2 as lang };
                    export namespace animation {
                        export function fadeIn_1(): void;
                        export { fadeIn_1 as fadeIn };
                        export function slideDown(): void;
                    }
                    export namespace DOM_2 {
                        function addBrowserInfoClassesToElement(): void;
                        function setTextboxSubmitButton(): void;
                        function getRelativePosition(): void;
                        function placePopoverNearElement(): void;
                        function addPopoverNearElement(): void;
                        function removeElementOnDocClickOrEscape(): void;
                        function hideElementOnDocClick(): void;
                        function performOnDocClickOrEscape(): void;
                        function hideElement(): void;
                        function showElement(): void;
                    }
                    export { DOM_2 as DOM };
                    export namespace layout {
                        function measureText(): void;
                    }
                    export namespace text {
                        function normalizeLinebreaks(): void;
                        function fixTextWidows(): void;
                    }
                    export namespace validation_1 {
                        function isValidEmailLoginID(): void;
                        function isEmailValid(): void;
                        function isEmailListValid(): void;
                    }
                    export { validation_1 as validation };
                    export namespace domain {
                        function isInDomain(): void;
                    }
                }
                export let i18n: {
                    "gigya.services.accounts.plugins.screenSet.js": {
                        en: {
                            login_identifier_exists: string;
                            unique_identifier_exists: string;
                            account_temporarily_locked_out: string;
                            wrong_password: string;
                            old_password_cannot_be_the_same_as_new_password: string;
                            old_password_used: string;
                            choose_file: string;
                            no_file_chosen: string;
                            "maximum_size_of_3mb.": string;
                            there_are_errors_in_your_form_please_try_again: string;
                            sorry_we_are_not_able_to_process_your_registration: string;
                            invalid_login_or_password: string;
                            account_is_disabled: string;
                            email_already_exists: string;
                            there_is_no_user_with_that_username_or_email: string;
                            password_must_contain_at_least: string;
                            and: string;
                            num_of_the_following_groups: string;
                            num_characters_total: string;
                            too_weak: string;
                            checking: string;
                            email_address_is_invalid: string;
                            password_does_not_meet_complexity_requirements: string;
                            username_already_exists: string;
                            passwords_do_not_match: string;
                            please_enter_fieldname: string;
                            this_field_is_required: string;
                            invalid_fieldname: string;
                            very_strong: string;
                            strong: string;
                            fair: string;
                            weak: string;
                            password_strength_colon: string;
                            not_available: string;
                            available: string;
                            network_error: string;
                            profilePhoto_fileSizeError: string;
                            subscription_pending_confirmation: string;
                            login_captcha_error: string;
                            register_captcha_error: string;
                            phone_number_exists: string;
                            please_enter_a_valid_code: string;
                            invalid_password_reset_token: string;
                            otp_code_expired: string;
                            invalid_login_identifier: string;
                            code_frequency_limit_reached: string;
                            forbidden_error: string;
                            request_captcha_error: string;
                            unauthorized_user: string;
                            permission_denied: string;
                            account_pending_registration: string;
                            phone_not_verified: string;
                            phone_not_verified_enter_code: string;
                            sms_subscription_error: string;
                            device_code_incorrect: string;
                            not_supported: string;
                            passkey_authenticator_already_registered: string;
                            operation_canceled: string;
                            invalid_site_configuration: string;
                            passkey_authenticator_error: string;
                            passkey_register_success: string;
                            general_error: string;
                            no_data_available: string;
                            missing_dqm_credentials: string;
                            dqm_general_error: string;
                            dqm_selection_error: string;
                            organization_context_saved: string;
                            subscription_missing_dependson_fields: string;
                            device_limit_reached: string;
                            tfa_registration_expired: string;
                            please_try_again_later: string;
                            user_enable_2fa_error: string;
                            user_enable_2fa_success: string;
                            custom_identifier_already_exists: string;
                        };
                    };
                    "gigya.services.socialize.plugins.login.js": {
                        en: {
                            social_by: string;
                            edit: string;
                            add_more_connections_to_your_account: string;
                            you_can_use_your_account_from_one_of_these_services_to_sign_into_the_site: string;
                            whats_this: string;
                            not_you: string;
                            sign_in_using_a_different_network: string;
                            welcome_back_user: string;
                            welcome_back: string;
                            copy_link: string;
                            copy_this_link_to_a_new_browser_window: string;
                            no_available_providers: string;
                            login: string;
                            logout: string;
                            terms: string;
                            connect_to: string;
                            no_social_network_application_key: string;
                            connect_with_your_friends: string;
                            network_error: string;
                            unknown_error: string;
                            ok: string;
                            copyButton: string;
                        };
                    };
                };
                export let __screenSetPluginCache: {
                    "Default-RegistrationLogin": {
                        javascript: string;
                        translations: {
                            en: {
                                SUBMIT_142674579108303380_VALUE: string;
                                CHECKBOX_76374189532411820_LABEL: string;
                                HEADER_131443300282291300_LABEL: string;
                                LABEL_48902362044111190_LABEL: string;
                                LINK_105018431100429140_LABEL: string;
                                LINK_146308315993881860_LABEL: string;
                                LOGINID_1311311543682226_PLACEHOLDER: string;
                                PASSWORD_132128826476804690_PLACEHOLDER: string;
                                GIGYA_LOGIN_SCREEN_CAPTION: string;
                                SUBMIT_7667737432077126_VALUE: string;
                                CHECKBOX_11798816851057300_LABEL: string;
                                CHECKBOX_79786885293367740_LABEL: string;
                                HEADER_108728337563591200_LABEL: string;
                                HEADER_63695688742051540_LABEL: string;
                                LABEL_139978773486588850_LABEL: string;
                                LINK_55817364832410216_LABEL: string;
                                LOGINID_126653578050634370_PLACEHOLDER: string;
                                PASSWORD_18495765554860224_PLACEHOLDER: string;
                                PASSWORD_92109928057504110_PLACEHOLDER: string;
                                GIGYA_REGISTER_SCREEN_CAPTION: string;
                                TEXTBOX_72105706170970860_PLACEHOLDER: string;
                                TEXTBOX_75385478551382400_PLACEHOLDER: string;
                                SUBMIT_31429658457676556_VALUE: string;
                                CHECKBOX_76245746717438300_LABEL: string;
                                DROPDOWN_16234574578704520_CHOICES_0004D0B59E19461FF126E3A08A814C33: string;
                                DROPDOWN_16234574578704520_CHOICES_008BD5AD93B754D500338C253D9C1770: string;
                                DROPDOWN_16234574578704520_CHOICES_03E7D2EBEC1E820AC34D054DF7E68F48: string;
                                DROPDOWN_16234574578704520_CHOICES_06964DCE9ADDB1C5CB5D6E3D9838F733: string;
                                DROPDOWN_16234574578704520_CHOICES_08F90C1A417155361A5C4B8D297E0D78: string;
                                DROPDOWN_16234574578704520_CHOICES_0950CA92A4DCF426067CFD2246BB5FF3: string;
                                DROPDOWN_16234574578704520_CHOICES_11108A3DBFE4636CB40B84B803B2FFF6: string;
                                DROPDOWN_16234574578704520_CHOICES_1113D7A76FFCECA1BB350BFE145467C6: string;
                                DROPDOWN_16234574578704520_CHOICES_136F951362DAB62E64EB8E841183C2A9: string;
                                DROPDOWN_16234574578704520_CHOICES_139F0874F2DED2E41B0393C4AC5644F7: string;
                                DROPDOWN_16234574578704520_CHOICES_15D185EAA7C954E77F5343D941E25FBD: string;
                                DROPDOWN_16234574578704520_CHOICES_1B36EA1C9B7A1C3AD668B8BB5DF7963F: string;
                                DROPDOWN_16234574578704520_CHOICES_1E4D36177D71BBB3558E43AF9577D70E: string;
                                DROPDOWN_16234574578704520_CHOICES_1E913E1B06EAD0B66E30B6867BF63549: string;
                                DROPDOWN_16234574578704520_CHOICES_1F36C15D6A3D18D52E8D493BC8187CB9: string;
                                DROPDOWN_16234574578704520_CHOICES_1F71E393B3809197ED66DF836FE833E5: string;
                                DROPDOWN_16234574578704520_CHOICES_277A78FC05C8864A170E9A56CEEABC4C: string;
                                DROPDOWN_16234574578704520_CHOICES_29530DE21430B7540EC3F65135F7323C: string;
                                DROPDOWN_16234574578704520_CHOICES_2D00F43F07911355D4151F13925FF292: string;
                                DROPDOWN_16234574578704520_CHOICES_333222170AB9EDCA4785C39F55221FE7: string;
                                DROPDOWN_16234574578704520_CHOICES_3683AF9D6F6C06ACEE72992F2977F67E: string;
                                DROPDOWN_16234574578704520_CHOICES_36AC8E558AC7690B6F44E2CB5EF93322: string;
                                DROPDOWN_16234574578704520_CHOICES_378A063B8FDB1DB941E34F4BDE584C7D: string;
                                DROPDOWN_16234574578704520_CHOICES_39DCAF7A053DC372FBC391D4E6B5D693: string;
                                DROPDOWN_16234574578704520_CHOICES_3D863B367AA379F71C7AFC0C9CDCA41D: string;
                                DROPDOWN_16234574578704520_CHOICES_3F088EBEDA03513BE71D34D214291986: string;
                                DROPDOWN_16234574578704520_CHOICES_405E28906322882C5BE9B4B27F4C35FD: string;
                                DROPDOWN_16234574578704520_CHOICES_414E773D5B7E5C06D564F594BF6384D0: string;
                                DROPDOWN_16234574578704520_CHOICES_44968AECE94F667E4095002D140B5896: string;
                                DROPDOWN_16234574578704520_CHOICES_4A3E00961A08879C34F91CA0070EA2F5: string;
                                DROPDOWN_16234574578704520_CHOICES_4AFD521D77158E02AED37E2274B90C9C: string;
                                DROPDOWN_16234574578704520_CHOICES_4BA29B9F9E5732ED33761840F4BA6C53: string;
                                DROPDOWN_16234574578704520_CHOICES_4D8556695C262AB91FF51A943FDD6058: string;
                                DROPDOWN_16234574578704520_CHOICES_5103C3584B063C431BD1268E9B5E76FB: string;
                                DROPDOWN_16234574578704520_CHOICES_519C84155964659375821F7CA576F095: string;
                                DROPDOWN_16234574578704520_CHOICES_52D2752B150F9C35CCB6869CBF074E48: string;
                                DROPDOWN_16234574578704520_CHOICES_5A7F963E5E0504740C3A6B10BB6D4FA5: string;
                                DROPDOWN_16234574578704520_CHOICES_5BCE843DD76DB8C939D5323DD3E54EC9: string;
                                DROPDOWN_16234574578704520_CHOICES_5EC829DEBE54B19A5F78D9A65B900A39: string;
                                DROPDOWN_16234574578704520_CHOICES_6351BF9DCE654515BF1DDBD6426DFA97: string;
                                DROPDOWN_16234574578704520_CHOICES_6A508A60AA3BF9510EA6ACB021C94B48: string;
                                DROPDOWN_16234574578704520_CHOICES_6F2688A5FCE7D48C8D19762B88C32C3B: string;
                                DROPDOWN_16234574578704520_CHOICES_798CEBCCB32617AD94123450FD137104: string;
                                DROPDOWN_16234574578704520_CHOICES_7AF6266CC52234B5AA339B16695F7FC4: string;
                                DROPDOWN_16234574578704520_CHOICES_7CA57A9F85A19A6E4B9A248C1DACA185: string;
                                DROPDOWN_16234574578704520_CHOICES_7D2B92B6726C241134DAE6CD3FB8C182: string;
                                DROPDOWN_16234574578704520_CHOICES_7F16109F1619FD7A733DAF5A84C708C1: string;
                                DROPDOWN_16234574578704520_CHOICES_8562AE5E286544710B2E7EBE9858833B: string;
                                DROPDOWN_16234574578704520_CHOICES_8C249675AEA6C3CBD91661BBAE767FF1: string;
                                DROPDOWN_16234574578704520_CHOICES_8D55A249E6BAA5C06772297520DA2051: string;
                                DROPDOWN_16234574578704520_CHOICES_95E6834D0A3D99E9EA8811855AE9229D: string;
                                DROPDOWN_16234574578704520_CHOICES_95F6870FF3DCD442254E334A9033D349: string;
                                DROPDOWN_16234574578704520_CHOICES_96055F5B06BF9381AC43879351642CF5: string;
                                DROPDOWN_16234574578704520_CHOICES_98C7242894844ECD6EC94AF67AC8247D: string;
                                DROPDOWN_16234574578704520_CHOICES_9D7311BA459F9E45ED746755A32DCD11: string;
                                DROPDOWN_16234574578704520_CHOICES_9F6992966D4C363EA0162A056CB45FE5: string;
                                DROPDOWN_16234574578704520_CHOICES_A38B16173474BA8B1A95BCBC30D3B8A5: string;
                                DROPDOWN_16234574578704520_CHOICES_A591024321C5E2BDBD23ED35F0574DDE: string;
                                DROPDOWN_16234574578704520_CHOICES_A82D922B133BE19C1171534E6594F754: string;
                                DROPDOWN_16234574578704520_CHOICES_AD4CC1FB9B068FAECFB70914ACC63395: string;
                                DROPDOWN_16234574578704520_CHOICES_B139E104214A08AE3F2EBCCE149CDF6E: string;
                                DROPDOWN_16234574578704520_CHOICES_B3B4D2DBEDC99FE843FD3DEDB02F086F: string;
                                DROPDOWN_16234574578704520_CHOICES_B8B4B727D6F5D1B61FFF7BE687F7970F: string;
                                DROPDOWN_16234574578704520_CHOICES_C215B446BCDF956D848A8419C1B5A920: string;
                                DROPDOWN_16234574578704520_CHOICES_C3395DD46C34FA7FD8D729D8CF88B7A8: string;
                                DROPDOWN_16234574578704520_CHOICES_C4DE8CED6214345614D33FB0B16A8ACD: string;
                                DROPDOWN_16234574578704520_CHOICES_C5A4E7E6882845EA7BB4D9462868219B: string;
                                DROPDOWN_16234574578704520_CHOICES_C5B2CEBF15B205503560C4E8E6D1EA78: string;
                                DROPDOWN_16234574578704520_CHOICES_D0FB963FF976F9C37FC81FE03C21EA7B: string;
                                DROPDOWN_16234574578704520_CHOICES_D46E1FCF4C07CE4A69EE07E4134BCEF1: string;
                                DROPDOWN_16234574578704520_CHOICES_D5C186983B52C4551EE00F72316C6EAA: string;
                                DROPDOWN_16234574578704520_CHOICES_D68A18275455AE3EAA2C291EEBB46E6D: string;
                                DROPDOWN_16234574578704520_CHOICES_D77F00766FD3BE3F2189C843A6AF3FB2: string;
                                DROPDOWN_16234574578704520_CHOICES_DC513EA4FBDAA7A14786FFDEBC4EF64E: string;
                                DROPDOWN_16234574578704520_CHOICES_DD055F53A45702FE05E449C30AC80DF9: string;
                                DROPDOWN_16234574578704520_CHOICES_DE03BEFFEED9DA5F3639A621BCAB5DD4: string;
                                DROPDOWN_16234574578704520_CHOICES_DE73998802680548B916F1947FFBAD76: string;
                                DROPDOWN_16234574578704520_CHOICES_DEB54FFB41E085FD7F69A75B6359C989: string;
                                DROPDOWN_16234574578704520_CHOICES_E3408432C1A48A52FB6C74D926B38886: string;
                                DROPDOWN_16234574578704520_CHOICES_E4DD5528F7596DCDF871AA55CFCCC53C: string;
                                DROPDOWN_16234574578704520_CHOICES_E5B294B70C9647DCF804D7BAA1903918: string;
                                DROPDOWN_16234574578704520_CHOICES_F106B7F99D2CB30C3DB1C3CC0FDE9CCB: string;
                                DROPDOWN_16234574578704520_CHOICES_F22E4747DA1AA27E363D86D40FF442FE: string;
                                DROPDOWN_16234574578704520_CHOICES_F80BF05527157A8C2A7BB63B22F49AAA: string;
                                DROPDOWN_16234574578704520_CHOICES_FB87582825F9D28A8D42C5E5E5E8B23D: string;
                                DROPDOWN_16234574578704520_LABEL: string;
                                LABEL_82751524717670350_LABEL: string;
                                GIGYA_COMPLETE_REGISTRATION_SCREEN_CAPTION: string;
                                TEXTBOX_136884197726350880_LABEL: string;
                                TEXTBOX_65559603100946710_LABEL: string;
                                SUBMIT_314293454325435_VALUE: string;
                                LABEL_1555592368664_LABEL: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_0000C04B6A11CB01FA6C351D96951A94: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_018AE104E95A884C0EF61987A4BCA33B: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_019E354FDE6080C71A2078D7689D015C: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_02CC7D66E001C3E70D74755B7C3B8CC4: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_044E84571F705B4449CC30F9010B7457: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_049C0FEF53053801CD4B2DD07D27E34E: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_093A60D935C4B98FE0974318EFEFBD2A: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_09DFBAA95005C05961464F3FD07A73C9: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_0A07706D6AAE7D5FAC405E73DCA5A230: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_0A86459132D51157F5B110A28785FAB1: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_0B67E604B8FE452617CFA3B1CE27D771: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_0B6D697F2C0204573A65988CC05949CA: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_0B7991BC3D17112C050AD75D7002BE4A: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_0C7DD38E5919A23F0FE33ED8E7B61BCD: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_0EB55A926D3F16275DC53B4BD9559107: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_0FB4FEC2BA2CA49124958FB16365B9E6: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_10491CB01667EED09F957CD7975032CB: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_10B0F24A19EEF030C3E26DCA73A591A5: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_1179A92EC9A28334E0A559C64F6BBC78: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_12308CC3D4CC2FB855383A8DC9D728BF: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_1324137F09564ED3F8370A56C4C646CF: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_15610E11E4FB7489E79C6D1E245B2BDF: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_17E9204B939277581EA401F786E4D705: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_183B1E1C670D1EF64D74E32EC4E9348D: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_1AC4BB54E5F417A8ED8BD80D0601696B: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_1C85B37F22E56195407271C65E12F6B2: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_203161DAE0F2145386430C8F78A054C0: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_20D20D19C28939EFBD7E6E36A8D3D3FF: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_212B0D7C2256FEB06EE9F0663ECACD1C: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_232618C6FA5A962C6547DEF41609CE3E: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_23EFB14ABF1868AE2C351B956FE12278: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_25F2BA239B091210CA080D221FFBD51D: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_2655ED45019A53E98278854C1800A41A: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_267C3D5900A14625CCEBF843E1113579: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_26CF7DE002149E85347C2CDDD34C43FB: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_275C81699C9CA9DD1BD589A82F09AFF2: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_278EC1E91DBD6DA31A9546BC16FF9ACF: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_27E4A0C1E5118EA9EB28DC68BB44A389: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_27FD3852136408B2E80C42ABE85FE888: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_28DB04EFD361DC70B1230CDC1A84CF7A: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_29D4173C28F9BA028E1FEFD8F5B17607: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_2B7FC2C51021C92E461A91BCD4C77222: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_2B9C96E2E465F06B1E947A1ABF1F82CC: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_2C494EFCF244731678FD8C2EF14F3B66: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_2D2E0B57E53318D06A3A989618595D2D: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_2D309595E0F8C76A69FC6B66E3AEE2DE: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_302F0A2BDDB3285A0D7E26676109FC06: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_311CFD698E0DC61134CBB6F3B9C91BAE: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_32ABF11FB772561B45FAE98173CEF6F6: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_32C902FF3266E8A06D44121EB60F070B: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_3345950E1892B722E378BFE9D845872F: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_371CEACF25ED39729BBFCC06C0908BFC: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_382B4143D3FB755C6553E796350644D3: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_3A3F7B3A7C161BFE383D008E10FCCD4C: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_3A4A6140CF0EA62D25A9DE1A6079458D: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_3A78A91CFFA196DEE4A8454FAE5271D4: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_3C70E69BE44A86FC852EF8EC2D3C3D2A: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_3CCC0920ECF6AA39031E2309F848F0FC: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_3CF400C815B9F3EE81CDA1CE6E6AED05: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_3E3C87B19BA3BC4BCF454945C29B6125: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_3EE9B3C1AD61A60F5593FF19EB4CB887: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_3F689BEAE4FF52B7021C755FC5AC99E7: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_3FC6ED9787B1B760CEABF91679C26878: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_42495073B157F93E836B72B07DEF2F2C: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_42F14FD8C4866C266D51EC4718A19158: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_440D1471CBAB9266505137C1C45F3ED4: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_44744C30C3DB65036EBB94079C58B6E3: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_45C9B64A3CECCCCE49843DBAFE6ADB64: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_45EB8706E13C8E358D97C730312E90AE: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_4921A12350B932D23D31D8B5868D6F04: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_4955C9C5078A1B26DA786E00D4C71829: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_4A67165A23BF87C2823AF4D85209A854: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_4A73DF4C96B5D4DA40C2A7254604C1BA: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_4B98171607BC7FF3007BABEC7F3E47DA: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_4F0B7F8EB20FB16D579581FB4FD438F6: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_530F4E0E790A543D9EC308072314BEBA: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_55B7D584F14D787E069917CBCAD8F858: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_55BB4B263289FF947007A2FF574B8A54: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_55F06B247EA51B5534CB9B58C530703E: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_58A4655174124FCBEC0EA83ED121901E: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_5A263C957067F1868ED88CF1DB1F9691: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_5AE79DDDA6F16ECF9450EBE8C41E268F: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_5C8745A9652FA0FB450E22EEE803E8F8: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_5D14311DD7B2184B182ECED0DB4F2A23: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_5DFC83751AB9D5CE392283E37225CEEB: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6115FC90431687F6FC349BF5BFE58F60: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_61817BC8A708B5AAB1D0DD9467CEABED: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_61EF21FDC5515A90CFAA8BABFC3CDDAC: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_64089EFC30466CD81B53E16EA08C67BF: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6554B2FF3A5978291C0F7376AB26C848: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6562C71449C1704C676A13E1A5C18BFB: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_65CEC708B5D89D0D2457855B9D6A94AC: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6674F7653960BBCB2814203115668763: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_669B9B9BBAF86E1A8FC4D8902FC77026: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_66C3CA97838B58714792C897B385EDC6: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_67927B31BE826B2D544F23B3F3D115D7: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6A75EE0F96C5B8DB62A17B1F861E1B5E: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6B2AA1100BFB1887DA27C9CD384E09FE: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6B7E29C7A90813B182E4E993A44086FF: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6BCC55C5EADBDED564CF32359773CBFE: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6D27A5E78ECCD03EE33D87BF3D2B2CC8: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6D3EB5C5A30DC5B6FD0035201CAD19E0: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6D8723CF044BAEBE059B9D2D7330CA42: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6EED2E14CCF08F75AE0A55DB12E9C653: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6F2ECC1C256C31FD43ED1157BCCC95B0: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_6F4C92C83FC32220ED8152AE62BDE311: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_7087D94E0DD6463EC57A0F1A55A46CFD: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_71E3FEFDC6441C1C112EF263DE1BF8ED: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_72DACE1C7D7C48FE87AD9EF93DA8880E: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_730A5D1990016281CB11952A3F377F69: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_731FB8DCDFCEF1D997AA13322DA40476: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_749B0CD97119801FF9880E5768AE1ED7: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_75037F764CB144B6889A5F8171C1A27C: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_7D307FBC5EBE3972706E3D898CC4BE25: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_7DB34BA7AFCCF77C4EB1AE5E3F530503: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_7EEA32ECAF8C58BC414082080B65DBB3: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_8192604E90D83CBA3DCCBAD2EDDF1641: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_87BB8668CB0004CE94F6AEDC96AF8267: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_88C55D93F6412DAC30AFEF87EC950DD0: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_8D8D9F79DC287C775BB06FFFC8AE1916: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_8E64EA7E5AFBEC88581B9E3C5874C142: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_9072A83B2E107216CEBD634A35592127: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_92307F98981C17DA9FCD08A423B23C19: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_92C3161EF8C78034409B97DBA2732119: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_94A38FCF50215C63446441275BD91CBC: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_950483525AA1ECAF75BB5491F351F24E: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_990E8ACE85837FCCD2DEB0A7AE3321A2: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_9D79DE4E7E64235407D4F3133FE392BC: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_9F466DB3D9D9BACD7CF95E5B1E8E5441: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_A0B099B5CD051341B3BF75BEB79C2FF8: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_A11FED9A6570C0647A1BAAC8C1DAC6D7: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_A65485C739F76BFF7E05413D23E7A03E: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_A7739D75D45B95186806F13F033335FD: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_A87B73B3E1DBA418432EB94A08432244: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_A8BAA0E29D70F8AD7DFC86916FB39346: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_A9DC19BB94C6904A27D41EF904232199: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_AAF2B5C1AFC80BEF1A58A669FA7DC9BF: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_AB5694A7D9AB79112FE99D42CBC7A0EF: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_AC2CEC8FFF07429F388098BB9AAB86A4: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_ACC738496F403A6822EB6B395C0EA4EE: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_AD51C2F6E99DB2DB0DA65EEFC00273AA: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_AFD663CCF14CE0EE7F81613B40B78D18: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_AFFB5ABFA8F1922289CC313EDF80B231: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_B042BD504749951EBB8FC489795A286F: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_B1B400960194AB272577C6B573DB2D9C: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_B6507BB6F51B01321A3B87B8D0ACC714: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_BA08CDF6C826861E2A337576DF8FE264: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_BA27C72455163E3EB029847D532650C6: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_BA6CD9FE5A3AC9438F09F845773BC2B7: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_BC6935C7C49AB605DDA2D1DB14D391D4: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_BCDB41B851402FA9C47DBB0E4BDFA28D: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_BCDED8077CA928B0AC5D7B6DD244B9F3: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_BD7B017B83C86393D5AFBCCF09B39535: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_BE31195109C26343B81ACA710E3F08BE: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_C0593B6D09969BF4C32A684DF2AC4A7D: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_C0F4C393ADE23E94388A619D2D28469C: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_C12934B2FB7A79F37D8D2730A02FF325: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_C2445CA2ADAA6D2352E6B5342C51848A: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_C5DD5AADB4791D0799DDF499FBACFD3A: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_C6008329DEF3854AB786638735E3DCF8: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_C683D0ED1E24DA7B22C9C5283C1C0822: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_C87C486958DCD8CFB22F6FAC15BD3C36: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_C9530E692E6C6B0631172C859262CE15: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_C9F85D89F977D07694B8847B2F21C17A: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_CB3868A3DF027A768524B1799256D7E9: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_CB425265B02770CBF6AA66D862BF17D5: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_CC6ED73BF623AEB7707047AE998D364A: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_CE097694C2EB14AD8DED90D528CB1B5A: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_CE79906B4A47AEA9FAA59151BD0A8C06: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_D07D47EA18447405DEC7CE0D8D61A448: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_D08B3F47C06392C08C3863C3E8453FFC: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_D239539B3277579FA37285D30B9C4C3E: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_D6318A3F72BB34864386B79EDBC391C7: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_D654E0248440598C819C9E1CEC040605: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_D67B6F9FE85B2BC4969D07B757ED28AC: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_D9CED68E11939C33CE6512548DE5473E: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_DC134898CC21C30FA1A767DC889BC9C7: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_DE08EFFC4128AEDD10379EA73823D5CC: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_DE435B513CCDA1AC711FF10954CB25BD: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_DE9675F429C298A1D3823E8CB122D99B: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_E0836B3330A25A9B8E6B90060CB95A5E: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_E1329E5B6318C778116918397EBC9C4F: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_E154E7A6DE015871C40A71C833BBD32B: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_E3B73CA00640A2E9CC7819C373365F1D: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_E40528D8028F52E2724182C93E5AA385: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_E62457F72D933DBCB44AAB91DFDA8874: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_E63EEB8515DBB9E3BC9AF51AD6583A55: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_E6F770859FDE5760CBCF83BEAF9EB993: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_E6FFC6D8240E701ECE6599EC8CF45CF4: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_E8258AB6DE76B8219D7102F1B44C845D: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_E909C2D7067EA37437CF97FE11D91BD0: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_EC63C956DEFBD581C0FD9518E2AA3D41: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_EE3D98F7EE6C591A0102FD475FAC8AA3: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_EFD933F4DECB4BB1004E4241E0731ED4: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_F0E7F4C4B4E525EE7957A3FEA865118A: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_F0E977F8E3C559A6A21B06AC12CFD149: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_F163162463D352FF5C3C24301C39A702: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_F265600C9D75B9386B863D2D74F56959: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_F29A808E9BB2C0BAA651FF9EF78AD4C4: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_F3B0EEC83FB9F59726A0A52920ACAA13: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_F73F1D7BA0CAF645118A9E8149EC346B: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_F9096B7627DD12471BC163CB0E1392BB: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_FA4671E2748A698F1B80A643827F5FA1: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_FB7B615AB2121EC76CECB5FA2CAD104E: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_FCACDE06C2B867E33FBC821F32D4C765: string;
                                PHONE_NUMBER_INPUT_15254487288447762_CHOICES_FEC85FEEA479735D94A3F27756825567: string;
                                PHONE_NUMBER_INPUT_15254487288447762_DISPLAY_NAME: string;
                                PHONE_NUMBER_INPUT_15254487288447762_LEGEND: string;
                                PHONE_NUMBER_INPUT_15254487288447762_PLACEHOLDER: string;
                                GIGYA_MOBILE_LOGIN_SCREEN_CAPTION: string;
                                SUBMIT_31429890890890_VALUE: string;
                                LABEL_1555593146287_LABEL: string;
                                LABEL_546546790858_LABEL: string;
                                GIGYA_MOBILE_VERIFICATION_SCREEN_CAPTION: string;
                                SUBMIT_137794634987176350_VALUE: string;
                                LABEL_56426764264083580_LABEL: string;
                                GIGYA_CHANGE_EMAIL_SCREEN_CAPTION: string;
                                TEXTBOX_20913098960397852_LABEL: string;
                                SUBMIT_106757411555670860_VALUE: string;
                                LABEL_124580104205672500_LABEL: string;
                                LABEL_45421446589093550_LABEL: string;
                                GIGYA_EMAIL_CODE_VERIFICATION_SCREEN_CAPTION: string;
                                SUBMIT_81725475708397440_VALUE: string;
                                LABEL_47776247120507590_LABEL: string;
                                LINK_125263109889403890_LABEL: string;
                                LOGINID_1762354922073180_LABEL: string;
                                GIGYA_FORGOT_PASSWORD_SCREEN_CAPTION: string;
                                LABEL_32342199862391930_LABEL: string;
                                LINK_64563424514074200_LABEL: string;
                                GIGYA_FORGOT_PASSWORD_SUCCESS_SCREEN_CAPTION: string;
                                SUBMIT_1640252814218_VALUE: string;
                                LABEL_1640252757841_LABEL: string;
                                GIGYA_MOBILE_FORGOT_PASSWORD_SCREEN_CAPTION: string;
                                SUBMIT_1640253788797_VALUE: string;
                                LABEL_1640253752471_LABEL: string;
                                LABEL_1640253816271_LABEL: string;
                                GIGYA_MOBILE_FORGOT_PASSWORD_VERIFICATION_SCREEN_CAPTION: string;
                                SUBMIT_48518527117736720_VALUE: string;
                                LABEL_31901611131936240_LABEL: string;
                                PASSWORD_24487772290225964_LABEL: string;
                                PASSWORD_53816046531769560_LABEL: string;
                                GIGYA_RESET_PASSWORD_SCREEN_CAPTION: string;
                                LABEL_43754194743648540_LABEL: string;
                                LINK_122104312720648740_LABEL: string;
                                GIGYA_RESET_PASSWORD_SUCCESS_SCREEN_CAPTION: string;
                                SUBMIT_65931489860940900_VALUE: string;
                                LABEL_16240548663414458_LABEL: string;
                                PASSWORD_101426512808638880_LABEL: string;
                                PASSWORD_17036595420608126_LABEL: string;
                                PASSWORD_19612919353342308_LABEL: string;
                                GIGYA_PASSWORD_CHANGE_REQUIRED_SCREEN_CAPTION: string;
                                SUBMIT_59040383411520670_VALUE: string;
                                LABEL_114745734160901840_LABEL: string;
                                LABEL_135099439990555600_LABEL: string;
                                GIGYA_VERIFICATION_PENDING_SCREEN_CAPTION: string;
                                TEXTBOX_53553186815043370_LABEL: string;
                                GIGYA_TFA_REGISTRATION_SCREEN_CAPTION: string;
                                GIGYA_TFA_VERIFICATION_SCREEN_CAPTION: string;
                                LABEL_4529849558267223_LABEL: string;
                                LINK_19224603862200704_LABEL: string;
                                GIGYA_VERIFICATION_SENT_SCREEN_CAPTION: string;
                                SUBMIT_55211342470297420_VALUE: string;
                                CHECKBOX_78285840404140770_LABEL: string;
                                HEADER_51697213698355980_LABEL: string;
                                PASSWORD_107891164873405600_PLACEHOLDER: string;
                                PASSWORD_76732333762278900_PLACEHOLDER: string;
                                GIGYA_LITE_ACCOUNT_PROGRESSION_SCREEN_CAPTION: string;
                                SUBMIT_1656946025416_VALUE: string;
                                LABEL_1656946025416_LABEL: string;
                                GIGYA_DEVICE_CODE_VERIFICATION_SCREEN_CAPTION: string;
                                TEXTBOX_1656946025416_PLACEHOLDER: string;
                                LABEL_1656948542313_LABEL: string;
                                LINK_1656954205211_LABEL: string;
                                GIGYA_DEVICE_CODE_THANK_YOU_SCREEN_CAPTION: string;
                                PASSKEY_REGISTER_WIDGET_148589704012182200_VALUE: string;
                                HEADER_1941735297197556_LABEL: string;
                                HEADER_2741570414924430_LABEL: string;
                                HEADER_8427604072677286_LABEL: string;
                                LABEL_126523004556259340_LABEL: string;
                                LABEL_85984667306998110_LABEL: string;
                                LINK_63641313208939464_LABEL: string;
                                GIGYA_PASSKEY_REGISTRATION_SCREEN_CAPTION: string;
                                submit_142674579108303380_value: string;
                                checkbox_76374189532411820_label: string;
                                header_131443300282291300_label: string;
                                label_48902362044111190_label: string;
                                link_105018431100429140_label: string;
                                link_146308315993881860_label: string;
                                loginid_1311311543682226_placeholder: string;
                                password_132128826476804690_placeholder: string;
                                gigya_login_screen_caption: string;
                                submit_7667737432077126_value: string;
                                checkbox_11798816851057300_label: string;
                                checkbox_79786885293367740_label: string;
                                header_108728337563591200_label: string;
                                header_63695688742051540_label: string;
                                label_139978773486588850_label: string;
                                link_55817364832410216_label: string;
                                loginid_126653578050634370_placeholder: string;
                                password_18495765554860224_placeholder: string;
                                password_92109928057504110_placeholder: string;
                                gigya_register_screen_caption: string;
                                textbox_72105706170970860_placeholder: string;
                                textbox_75385478551382400_placeholder: string;
                                submit_31429658457676556_value: string;
                                checkbox_76245746717438300_label: string;
                                dropdown_16234574578704520_choices_0004d0b59e19461ff126e3a08a814c33: string;
                                dropdown_16234574578704520_choices_008bd5ad93b754d500338c253d9c1770: string;
                                dropdown_16234574578704520_choices_03e7d2ebec1e820ac34d054df7e68f48: string;
                                dropdown_16234574578704520_choices_06964dce9addb1c5cb5d6e3d9838f733: string;
                                dropdown_16234574578704520_choices_08f90c1a417155361a5c4b8d297e0d78: string;
                                dropdown_16234574578704520_choices_0950ca92a4dcf426067cfd2246bb5ff3: string;
                                dropdown_16234574578704520_choices_11108a3dbfe4636cb40b84b803b2fff6: string;
                                dropdown_16234574578704520_choices_1113d7a76ffceca1bb350bfe145467c6: string;
                                dropdown_16234574578704520_choices_136f951362dab62e64eb8e841183c2a9: string;
                                dropdown_16234574578704520_choices_139f0874f2ded2e41b0393c4ac5644f7: string;
                                dropdown_16234574578704520_choices_15d185eaa7c954e77f5343d941e25fbd: string;
                                dropdown_16234574578704520_choices_1b36ea1c9b7a1c3ad668b8bb5df7963f: string;
                                dropdown_16234574578704520_choices_1e4d36177d71bbb3558e43af9577d70e: string;
                                dropdown_16234574578704520_choices_1e913e1b06ead0b66e30b6867bf63549: string;
                                dropdown_16234574578704520_choices_1f36c15d6a3d18d52e8d493bc8187cb9: string;
                                dropdown_16234574578704520_choices_1f71e393b3809197ed66df836fe833e5: string;
                                dropdown_16234574578704520_choices_277a78fc05c8864a170e9a56ceeabc4c: string;
                                dropdown_16234574578704520_choices_29530de21430b7540ec3f65135f7323c: string;
                                dropdown_16234574578704520_choices_2d00f43f07911355d4151f13925ff292: string;
                                dropdown_16234574578704520_choices_333222170ab9edca4785c39f55221fe7: string;
                                dropdown_16234574578704520_choices_3683af9d6f6c06acee72992f2977f67e: string;
                                dropdown_16234574578704520_choices_36ac8e558ac7690b6f44e2cb5ef93322: string;
                                dropdown_16234574578704520_choices_378a063b8fdb1db941e34f4bde584c7d: string;
                                dropdown_16234574578704520_choices_39dcaf7a053dc372fbc391d4e6b5d693: string;
                                dropdown_16234574578704520_choices_3d863b367aa379f71c7afc0c9cdca41d: string;
                                dropdown_16234574578704520_choices_3f088ebeda03513be71d34d214291986: string;
                                dropdown_16234574578704520_choices_405e28906322882c5be9b4b27f4c35fd: string;
                                dropdown_16234574578704520_choices_414e773d5b7e5c06d564f594bf6384d0: string;
                                dropdown_16234574578704520_choices_44968aece94f667e4095002d140b5896: string;
                                dropdown_16234574578704520_choices_4a3e00961a08879c34f91ca0070ea2f5: string;
                                dropdown_16234574578704520_choices_4afd521d77158e02aed37e2274b90c9c: string;
                                dropdown_16234574578704520_choices_4ba29b9f9e5732ed33761840f4ba6c53: string;
                                dropdown_16234574578704520_choices_4d8556695c262ab91ff51a943fdd6058: string;
                                dropdown_16234574578704520_choices_5103c3584b063c431bd1268e9b5e76fb: string;
                                dropdown_16234574578704520_choices_519c84155964659375821f7ca576f095: string;
                                dropdown_16234574578704520_choices_52d2752b150f9c35ccb6869cbf074e48: string;
                                dropdown_16234574578704520_choices_5a7f963e5e0504740c3a6b10bb6d4fa5: string;
                                dropdown_16234574578704520_choices_5bce843dd76db8c939d5323dd3e54ec9: string;
                                dropdown_16234574578704520_choices_5ec829debe54b19a5f78d9a65b900a39: string;
                                dropdown_16234574578704520_choices_6351bf9dce654515bf1ddbd6426dfa97: string;
                                dropdown_16234574578704520_choices_6a508a60aa3bf9510ea6acb021c94b48: string;
                                dropdown_16234574578704520_choices_6f2688a5fce7d48c8d19762b88c32c3b: string;
                                dropdown_16234574578704520_choices_798cebccb32617ad94123450fd137104: string;
                                dropdown_16234574578704520_choices_7af6266cc52234b5aa339b16695f7fc4: string;
                                dropdown_16234574578704520_choices_7ca57a9f85a19a6e4b9a248c1daca185: string;
                                dropdown_16234574578704520_choices_7d2b92b6726c241134dae6cd3fb8c182: string;
                                dropdown_16234574578704520_choices_7f16109f1619fd7a733daf5a84c708c1: string;
                                dropdown_16234574578704520_choices_8562ae5e286544710b2e7ebe9858833b: string;
                                dropdown_16234574578704520_choices_8c249675aea6c3cbd91661bbae767ff1: string;
                                dropdown_16234574578704520_choices_8d55a249e6baa5c06772297520da2051: string;
                                dropdown_16234574578704520_choices_95e6834d0a3d99e9ea8811855ae9229d: string;
                                dropdown_16234574578704520_choices_95f6870ff3dcd442254e334a9033d349: string;
                                dropdown_16234574578704520_choices_96055f5b06bf9381ac43879351642cf5: string;
                                dropdown_16234574578704520_choices_98c7242894844ecd6ec94af67ac8247d: string;
                                dropdown_16234574578704520_choices_9d7311ba459f9e45ed746755a32dcd11: string;
                                dropdown_16234574578704520_choices_9f6992966d4c363ea0162a056cb45fe5: string;
                                dropdown_16234574578704520_choices_a38b16173474ba8b1a95bcbc30d3b8a5: string;
                                dropdown_16234574578704520_choices_a591024321c5e2bdbd23ed35f0574dde: string;
                                dropdown_16234574578704520_choices_a82d922b133be19c1171534e6594f754: string;
                                dropdown_16234574578704520_choices_ad4cc1fb9b068faecfb70914acc63395: string;
                                dropdown_16234574578704520_choices_b139e104214a08ae3f2ebcce149cdf6e: string;
                                dropdown_16234574578704520_choices_b3b4d2dbedc99fe843fd3dedb02f086f: string;
                                dropdown_16234574578704520_choices_b8b4b727d6f5d1b61fff7be687f7970f: string;
                                dropdown_16234574578704520_choices_c215b446bcdf956d848a8419c1b5a920: string;
                                dropdown_16234574578704520_choices_c3395dd46c34fa7fd8d729d8cf88b7a8: string;
                                dropdown_16234574578704520_choices_c4de8ced6214345614d33fb0b16a8acd: string;
                                dropdown_16234574578704520_choices_c5a4e7e6882845ea7bb4d9462868219b: string;
                                dropdown_16234574578704520_choices_c5b2cebf15b205503560c4e8e6d1ea78: string;
                                dropdown_16234574578704520_choices_d0fb963ff976f9c37fc81fe03c21ea7b: string;
                                dropdown_16234574578704520_choices_d46e1fcf4c07ce4a69ee07e4134bcef1: string;
                                dropdown_16234574578704520_choices_d5c186983b52c4551ee00f72316c6eaa: string;
                                dropdown_16234574578704520_choices_d68a18275455ae3eaa2c291eebb46e6d: string;
                                dropdown_16234574578704520_choices_d77f00766fd3be3f2189c843a6af3fb2: string;
                                dropdown_16234574578704520_choices_dc513ea4fbdaa7a14786ffdebc4ef64e: string;
                                dropdown_16234574578704520_choices_dd055f53a45702fe05e449c30ac80df9: string;
                                dropdown_16234574578704520_choices_de03beffeed9da5f3639a621bcab5dd4: string;
                                dropdown_16234574578704520_choices_de73998802680548b916f1947ffbad76: string;
                                dropdown_16234574578704520_choices_deb54ffb41e085fd7f69a75b6359c989: string;
                                dropdown_16234574578704520_choices_e3408432c1a48a52fb6c74d926b38886: string;
                                dropdown_16234574578704520_choices_e4dd5528f7596dcdf871aa55cfccc53c: string;
                                dropdown_16234574578704520_choices_e5b294b70c9647dcf804d7baa1903918: string;
                                dropdown_16234574578704520_choices_f106b7f99d2cb30c3db1c3cc0fde9ccb: string;
                                dropdown_16234574578704520_choices_f22e4747da1aa27e363d86d40ff442fe: string;
                                dropdown_16234574578704520_choices_f80bf05527157a8c2a7bb63b22f49aaa: string;
                                dropdown_16234574578704520_choices_fb87582825f9d28a8d42c5e5e5e8b23d: string;
                                dropdown_16234574578704520_label: string;
                                label_82751524717670350_label: string;
                                gigya_complete_registration_screen_caption: string;
                                textbox_136884197726350880_label: string;
                                textbox_65559603100946710_label: string;
                                submit_314293454325435_value: string;
                                label_1555592368664_label: string;
                                phone_number_input_15254487288447762_choices_0000c04b6a11cb01fa6c351d96951a94: string;
                                phone_number_input_15254487288447762_choices_018ae104e95a884c0ef61987a4bca33b: string;
                                phone_number_input_15254487288447762_choices_019e354fde6080c71a2078d7689d015c: string;
                                phone_number_input_15254487288447762_choices_02cc7d66e001c3e70d74755b7c3b8cc4: string;
                                phone_number_input_15254487288447762_choices_044e84571f705b4449cc30f9010b7457: string;
                                phone_number_input_15254487288447762_choices_049c0fef53053801cd4b2dd07d27e34e: string;
                                phone_number_input_15254487288447762_choices_093a60d935c4b98fe0974318efefbd2a: string;
                                phone_number_input_15254487288447762_choices_09dfbaa95005c05961464f3fd07a73c9: string;
                                phone_number_input_15254487288447762_choices_0a07706d6aae7d5fac405e73dca5a230: string;
                                phone_number_input_15254487288447762_choices_0a86459132d51157f5b110a28785fab1: string;
                                phone_number_input_15254487288447762_choices_0b67e604b8fe452617cfa3b1ce27d771: string;
                                phone_number_input_15254487288447762_choices_0b6d697f2c0204573a65988cc05949ca: string;
                                phone_number_input_15254487288447762_choices_0b7991bc3d17112c050ad75d7002be4a: string;
                                phone_number_input_15254487288447762_choices_0c7dd38e5919a23f0fe33ed8e7b61bcd: string;
                                phone_number_input_15254487288447762_choices_0eb55a926d3f16275dc53b4bd9559107: string;
                                phone_number_input_15254487288447762_choices_0fb4fec2ba2ca49124958fb16365b9e6: string;
                                phone_number_input_15254487288447762_choices_10491cb01667eed09f957cd7975032cb: string;
                                phone_number_input_15254487288447762_choices_10b0f24a19eef030c3e26dca73a591a5: string;
                                phone_number_input_15254487288447762_choices_1179a92ec9a28334e0a559c64f6bbc78: string;
                                phone_number_input_15254487288447762_choices_12308cc3d4cc2fb855383a8dc9d728bf: string;
                                phone_number_input_15254487288447762_choices_1324137f09564ed3f8370a56c4c646cf: string;
                                phone_number_input_15254487288447762_choices_15610e11e4fb7489e79c6d1e245b2bdf: string;
                                phone_number_input_15254487288447762_choices_17e9204b939277581ea401f786e4d705: string;
                                phone_number_input_15254487288447762_choices_183b1e1c670d1ef64d74e32ec4e9348d: string;
                                phone_number_input_15254487288447762_choices_1ac4bb54e5f417a8ed8bd80d0601696b: string;
                                phone_number_input_15254487288447762_choices_1c85b37f22e56195407271c65e12f6b2: string;
                                phone_number_input_15254487288447762_choices_203161dae0f2145386430c8f78a054c0: string;
                                phone_number_input_15254487288447762_choices_20d20d19c28939efbd7e6e36a8d3d3ff: string;
                                phone_number_input_15254487288447762_choices_212b0d7c2256feb06ee9f0663ecacd1c: string;
                                phone_number_input_15254487288447762_choices_232618c6fa5a962c6547def41609ce3e: string;
                                phone_number_input_15254487288447762_choices_23efb14abf1868ae2c351b956fe12278: string;
                                phone_number_input_15254487288447762_choices_25f2ba239b091210ca080d221ffbd51d: string;
                                phone_number_input_15254487288447762_choices_2655ed45019a53e98278854c1800a41a: string;
                                phone_number_input_15254487288447762_choices_267c3d5900a14625ccebf843e1113579: string;
                                phone_number_input_15254487288447762_choices_26cf7de002149e85347c2cddd34c43fb: string;
                                phone_number_input_15254487288447762_choices_275c81699c9ca9dd1bd589a82f09aff2: string;
                                phone_number_input_15254487288447762_choices_278ec1e91dbd6da31a9546bc16ff9acf: string;
                                phone_number_input_15254487288447762_choices_27e4a0c1e5118ea9eb28dc68bb44a389: string;
                                phone_number_input_15254487288447762_choices_27fd3852136408b2e80c42abe85fe888: string;
                                phone_number_input_15254487288447762_choices_28db04efd361dc70b1230cdc1a84cf7a: string;
                                phone_number_input_15254487288447762_choices_29d4173c28f9ba028e1fefd8f5b17607: string;
                                phone_number_input_15254487288447762_choices_2b7fc2c51021c92e461a91bcd4c77222: string;
                                phone_number_input_15254487288447762_choices_2b9c96e2e465f06b1e947a1abf1f82cc: string;
                                phone_number_input_15254487288447762_choices_2c494efcf244731678fd8c2ef14f3b66: string;
                                phone_number_input_15254487288447762_choices_2d2e0b57e53318d06a3a989618595d2d: string;
                                phone_number_input_15254487288447762_choices_2d309595e0f8c76a69fc6b66e3aee2de: string;
                                phone_number_input_15254487288447762_choices_302f0a2bddb3285a0d7e26676109fc06: string;
                                phone_number_input_15254487288447762_choices_311cfd698e0dc61134cbb6f3b9c91bae: string;
                                phone_number_input_15254487288447762_choices_32abf11fb772561b45fae98173cef6f6: string;
                                phone_number_input_15254487288447762_choices_32c902ff3266e8a06d44121eb60f070b: string;
                                phone_number_input_15254487288447762_choices_3345950e1892b722e378bfe9d845872f: string;
                                phone_number_input_15254487288447762_choices_371ceacf25ed39729bbfcc06c0908bfc: string;
                                phone_number_input_15254487288447762_choices_382b4143d3fb755c6553e796350644d3: string;
                                phone_number_input_15254487288447762_choices_3a3f7b3a7c161bfe383d008e10fccd4c: string;
                                phone_number_input_15254487288447762_choices_3a4a6140cf0ea62d25a9de1a6079458d: string;
                                phone_number_input_15254487288447762_choices_3a78a91cffa196dee4a8454fae5271d4: string;
                                phone_number_input_15254487288447762_choices_3c70e69be44a86fc852ef8ec2d3c3d2a: string;
                                phone_number_input_15254487288447762_choices_3ccc0920ecf6aa39031e2309f848f0fc: string;
                                phone_number_input_15254487288447762_choices_3cf400c815b9f3ee81cda1ce6e6aed05: string;
                                phone_number_input_15254487288447762_choices_3e3c87b19ba3bc4bcf454945c29b6125: string;
                                phone_number_input_15254487288447762_choices_3ee9b3c1ad61a60f5593ff19eb4cb887: string;
                                phone_number_input_15254487288447762_choices_3f689beae4ff52b7021c755fc5ac99e7: string;
                                phone_number_input_15254487288447762_choices_3fc6ed9787b1b760ceabf91679c26878: string;
                                phone_number_input_15254487288447762_choices_42495073b157f93e836b72b07def2f2c: string;
                                phone_number_input_15254487288447762_choices_42f14fd8c4866c266d51ec4718a19158: string;
                                phone_number_input_15254487288447762_choices_440d1471cbab9266505137c1c45f3ed4: string;
                                phone_number_input_15254487288447762_choices_44744c30c3db65036ebb94079c58b6e3: string;
                                phone_number_input_15254487288447762_choices_45c9b64a3cecccce49843dbafe6adb64: string;
                                phone_number_input_15254487288447762_choices_45eb8706e13c8e358d97c730312e90ae: string;
                                phone_number_input_15254487288447762_choices_4921a12350b932d23d31d8b5868d6f04: string;
                                phone_number_input_15254487288447762_choices_4955c9c5078a1b26da786e00d4c71829: string;
                                phone_number_input_15254487288447762_choices_4a67165a23bf87c2823af4d85209a854: string;
                                phone_number_input_15254487288447762_choices_4a73df4c96b5d4da40c2a7254604c1ba: string;
                                phone_number_input_15254487288447762_choices_4b98171607bc7ff3007babec7f3e47da: string;
                                phone_number_input_15254487288447762_choices_4f0b7f8eb20fb16d579581fb4fd438f6: string;
                                phone_number_input_15254487288447762_choices_530f4e0e790a543d9ec308072314beba: string;
                                phone_number_input_15254487288447762_choices_55b7d584f14d787e069917cbcad8f858: string;
                                phone_number_input_15254487288447762_choices_55bb4b263289ff947007a2ff574b8a54: string;
                                phone_number_input_15254487288447762_choices_55f06b247ea51b5534cb9b58c530703e: string;
                                phone_number_input_15254487288447762_choices_58a4655174124fcbec0ea83ed121901e: string;
                                phone_number_input_15254487288447762_choices_5a263c957067f1868ed88cf1db1f9691: string;
                                phone_number_input_15254487288447762_choices_5ae79ddda6f16ecf9450ebe8c41e268f: string;
                                phone_number_input_15254487288447762_choices_5c8745a9652fa0fb450e22eee803e8f8: string;
                                phone_number_input_15254487288447762_choices_5d14311dd7b2184b182eced0db4f2a23: string;
                                phone_number_input_15254487288447762_choices_5dfc83751ab9d5ce392283e37225ceeb: string;
                                phone_number_input_15254487288447762_choices_6115fc90431687f6fc349bf5bfe58f60: string;
                                phone_number_input_15254487288447762_choices_61817bc8a708b5aab1d0dd9467ceabed: string;
                                phone_number_input_15254487288447762_choices_61ef21fdc5515a90cfaa8babfc3cddac: string;
                                phone_number_input_15254487288447762_choices_64089efc30466cd81b53e16ea08c67bf: string;
                                phone_number_input_15254487288447762_choices_6554b2ff3a5978291c0f7376ab26c848: string;
                                phone_number_input_15254487288447762_choices_6562c71449c1704c676a13e1a5c18bfb: string;
                                phone_number_input_15254487288447762_choices_65cec708b5d89d0d2457855b9d6a94ac: string;
                                phone_number_input_15254487288447762_choices_6674f7653960bbcb2814203115668763: string;
                                phone_number_input_15254487288447762_choices_669b9b9bbaf86e1a8fc4d8902fc77026: string;
                                phone_number_input_15254487288447762_choices_66c3ca97838b58714792c897b385edc6: string;
                                phone_number_input_15254487288447762_choices_67927b31be826b2d544f23b3f3d115d7: string;
                                phone_number_input_15254487288447762_choices_6a75ee0f96c5b8db62a17b1f861e1b5e: string;
                                phone_number_input_15254487288447762_choices_6b2aa1100bfb1887da27c9cd384e09fe: string;
                                phone_number_input_15254487288447762_choices_6b7e29c7a90813b182e4e993a44086ff: string;
                                phone_number_input_15254487288447762_choices_6bcc55c5eadbded564cf32359773cbfe: string;
                                phone_number_input_15254487288447762_choices_6d27a5e78eccd03ee33d87bf3d2b2cc8: string;
                                phone_number_input_15254487288447762_choices_6d3eb5c5a30dc5b6fd0035201cad19e0: string;
                                phone_number_input_15254487288447762_choices_6d8723cf044baebe059b9d2d7330ca42: string;
                                phone_number_input_15254487288447762_choices_6eed2e14ccf08f75ae0a55db12e9c653: string;
                                phone_number_input_15254487288447762_choices_6f2ecc1c256c31fd43ed1157bccc95b0: string;
                                phone_number_input_15254487288447762_choices_6f4c92c83fc32220ed8152ae62bde311: string;
                                phone_number_input_15254487288447762_choices_7087d94e0dd6463ec57a0f1a55a46cfd: string;
                                phone_number_input_15254487288447762_choices_71e3fefdc6441c1c112ef263de1bf8ed: string;
                                phone_number_input_15254487288447762_choices_72dace1c7d7c48fe87ad9ef93da8880e: string;
                                phone_number_input_15254487288447762_choices_730a5d1990016281cb11952a3f377f69: string;
                                phone_number_input_15254487288447762_choices_731fb8dcdfcef1d997aa13322da40476: string;
                                phone_number_input_15254487288447762_choices_749b0cd97119801ff9880e5768ae1ed7: string;
                                phone_number_input_15254487288447762_choices_75037f764cb144b6889a5f8171c1a27c: string;
                                phone_number_input_15254487288447762_choices_7d307fbc5ebe3972706e3d898cc4be25: string;
                                phone_number_input_15254487288447762_choices_7db34ba7afccf77c4eb1ae5e3f530503: string;
                                phone_number_input_15254487288447762_choices_7eea32ecaf8c58bc414082080b65dbb3: string;
                                phone_number_input_15254487288447762_choices_8192604e90d83cba3dccbad2eddf1641: string;
                                phone_number_input_15254487288447762_choices_87bb8668cb0004ce94f6aedc96af8267: string;
                                phone_number_input_15254487288447762_choices_88c55d93f6412dac30afef87ec950dd0: string;
                                phone_number_input_15254487288447762_choices_8d8d9f79dc287c775bb06fffc8ae1916: string;
                                phone_number_input_15254487288447762_choices_8e64ea7e5afbec88581b9e3c5874c142: string;
                                phone_number_input_15254487288447762_choices_9072a83b2e107216cebd634a35592127: string;
                                phone_number_input_15254487288447762_choices_92307f98981c17da9fcd08a423b23c19: string;
                                phone_number_input_15254487288447762_choices_92c3161ef8c78034409b97dba2732119: string;
                                phone_number_input_15254487288447762_choices_94a38fcf50215c63446441275bd91cbc: string;
                                phone_number_input_15254487288447762_choices_950483525aa1ecaf75bb5491f351f24e: string;
                                phone_number_input_15254487288447762_choices_990e8ace85837fccd2deb0a7ae3321a2: string;
                                phone_number_input_15254487288447762_choices_9d79de4e7e64235407d4f3133fe392bc: string;
                                phone_number_input_15254487288447762_choices_9f466db3d9d9bacd7cf95e5b1e8e5441: string;
                                phone_number_input_15254487288447762_choices_a0b099b5cd051341b3bf75beb79c2ff8: string;
                                phone_number_input_15254487288447762_choices_a11fed9a6570c0647a1baac8c1dac6d7: string;
                                phone_number_input_15254487288447762_choices_a65485c739f76bff7e05413d23e7a03e: string;
                                phone_number_input_15254487288447762_choices_a7739d75d45b95186806f13f033335fd: string;
                                phone_number_input_15254487288447762_choices_a87b73b3e1dba418432eb94a08432244: string;
                                phone_number_input_15254487288447762_choices_a8baa0e29d70f8ad7dfc86916fb39346: string;
                                phone_number_input_15254487288447762_choices_a9dc19bb94c6904a27d41ef904232199: string;
                                phone_number_input_15254487288447762_choices_aaf2b5c1afc80bef1a58a669fa7dc9bf: string;
                                phone_number_input_15254487288447762_choices_ab5694a7d9ab79112fe99d42cbc7a0ef: string;
                                phone_number_input_15254487288447762_choices_ac2cec8fff07429f388098bb9aab86a4: string;
                                phone_number_input_15254487288447762_choices_acc738496f403a6822eb6b395c0ea4ee: string;
                                phone_number_input_15254487288447762_choices_ad51c2f6e99db2db0da65eefc00273aa: string;
                                phone_number_input_15254487288447762_choices_afd663ccf14ce0ee7f81613b40b78d18: string;
                                phone_number_input_15254487288447762_choices_affb5abfa8f1922289cc313edf80b231: string;
                                phone_number_input_15254487288447762_choices_b042bd504749951ebb8fc489795a286f: string;
                                phone_number_input_15254487288447762_choices_b1b400960194ab272577c6b573db2d9c: string;
                                phone_number_input_15254487288447762_choices_b6507bb6f51b01321a3b87b8d0acc714: string;
                                phone_number_input_15254487288447762_choices_ba08cdf6c826861e2a337576df8fe264: string;
                                phone_number_input_15254487288447762_choices_ba27c72455163e3eb029847d532650c6: string;
                                phone_number_input_15254487288447762_choices_ba6cd9fe5a3ac9438f09f845773bc2b7: string;
                                phone_number_input_15254487288447762_choices_bc6935c7c49ab605dda2d1db14d391d4: string;
                                phone_number_input_15254487288447762_choices_bcdb41b851402fa9c47dbb0e4bdfa28d: string;
                                phone_number_input_15254487288447762_choices_bcded8077ca928b0ac5d7b6dd244b9f3: string;
                                phone_number_input_15254487288447762_choices_bd7b017b83c86393d5afbccf09b39535: string;
                                phone_number_input_15254487288447762_choices_be31195109c26343b81aca710e3f08be: string;
                                phone_number_input_15254487288447762_choices_c0593b6d09969bf4c32a684df2ac4a7d: string;
                                phone_number_input_15254487288447762_choices_c0f4c393ade23e94388a619d2d28469c: string;
                                phone_number_input_15254487288447762_choices_c12934b2fb7a79f37d8d2730a02ff325: string;
                                phone_number_input_15254487288447762_choices_c2445ca2adaa6d2352e6b5342c51848a: string;
                                phone_number_input_15254487288447762_choices_c5dd5aadb4791d0799ddf499fbacfd3a: string;
                                phone_number_input_15254487288447762_choices_c6008329def3854ab786638735e3dcf8: string;
                                phone_number_input_15254487288447762_choices_c683d0ed1e24da7b22c9c5283c1c0822: string;
                                phone_number_input_15254487288447762_choices_c87c486958dcd8cfb22f6fac15bd3c36: string;
                                phone_number_input_15254487288447762_choices_c9530e692e6c6b0631172c859262ce15: string;
                                phone_number_input_15254487288447762_choices_c9f85d89f977d07694b8847b2f21c17a: string;
                                phone_number_input_15254487288447762_choices_cb3868a3df027a768524b1799256d7e9: string;
                                phone_number_input_15254487288447762_choices_cb425265b02770cbf6aa66d862bf17d5: string;
                                phone_number_input_15254487288447762_choices_cc6ed73bf623aeb7707047ae998d364a: string;
                                phone_number_input_15254487288447762_choices_ce097694c2eb14ad8ded90d528cb1b5a: string;
                                phone_number_input_15254487288447762_choices_ce79906b4a47aea9faa59151bd0a8c06: string;
                                phone_number_input_15254487288447762_choices_d07d47ea18447405dec7ce0d8d61a448: string;
                                phone_number_input_15254487288447762_choices_d08b3f47c06392c08c3863c3e8453ffc: string;
                                phone_number_input_15254487288447762_choices_d239539b3277579fa37285d30b9c4c3e: string;
                                phone_number_input_15254487288447762_choices_d6318a3f72bb34864386b79edbc391c7: string;
                                phone_number_input_15254487288447762_choices_d654e0248440598c819c9e1cec040605: string;
                                phone_number_input_15254487288447762_choices_d67b6f9fe85b2bc4969d07b757ed28ac: string;
                                phone_number_input_15254487288447762_choices_d9ced68e11939c33ce6512548de5473e: string;
                                phone_number_input_15254487288447762_choices_dc134898cc21c30fa1a767dc889bc9c7: string;
                                phone_number_input_15254487288447762_choices_de08effc4128aedd10379ea73823d5cc: string;
                                phone_number_input_15254487288447762_choices_de435b513ccda1ac711ff10954cb25bd: string;
                                phone_number_input_15254487288447762_choices_de9675f429c298a1d3823e8cb122d99b: string;
                                phone_number_input_15254487288447762_choices_e0836b3330a25a9b8e6b90060cb95a5e: string;
                                phone_number_input_15254487288447762_choices_e1329e5b6318c778116918397ebc9c4f: string;
                                phone_number_input_15254487288447762_choices_e154e7a6de015871c40a71c833bbd32b: string;
                                phone_number_input_15254487288447762_choices_e3b73ca00640a2e9cc7819c373365f1d: string;
                                phone_number_input_15254487288447762_choices_e40528d8028f52e2724182c93e5aa385: string;
                                phone_number_input_15254487288447762_choices_e62457f72d933dbcb44aab91dfda8874: string;
                                phone_number_input_15254487288447762_choices_e63eeb8515dbb9e3bc9af51ad6583a55: string;
                                phone_number_input_15254487288447762_choices_e6f770859fde5760cbcf83beaf9eb993: string;
                                phone_number_input_15254487288447762_choices_e6ffc6d8240e701ece6599ec8cf45cf4: string;
                                phone_number_input_15254487288447762_choices_e8258ab6de76b8219d7102f1b44c845d: string;
                                phone_number_input_15254487288447762_choices_e909c2d7067ea37437cf97fe11d91bd0: string;
                                phone_number_input_15254487288447762_choices_ec63c956defbd581c0fd9518e2aa3d41: string;
                                phone_number_input_15254487288447762_choices_ee3d98f7ee6c591a0102fd475fac8aa3: string;
                                phone_number_input_15254487288447762_choices_efd933f4decb4bb1004e4241e0731ed4: string;
                                phone_number_input_15254487288447762_choices_f0e7f4c4b4e525ee7957a3fea865118a: string;
                                phone_number_input_15254487288447762_choices_f0e977f8e3c559a6a21b06ac12cfd149: string;
                                phone_number_input_15254487288447762_choices_f163162463d352ff5c3c24301c39a702: string;
                                phone_number_input_15254487288447762_choices_f265600c9d75b9386b863d2d74f56959: string;
                                phone_number_input_15254487288447762_choices_f29a808e9bb2c0baa651ff9ef78ad4c4: string;
                                phone_number_input_15254487288447762_choices_f3b0eec83fb9f59726a0a52920acaa13: string;
                                phone_number_input_15254487288447762_choices_f73f1d7ba0caf645118a9e8149ec346b: string;
                                phone_number_input_15254487288447762_choices_f9096b7627dd12471bc163cb0e1392bb: string;
                                phone_number_input_15254487288447762_choices_fa4671e2748a698f1b80a643827f5fa1: string;
                                phone_number_input_15254487288447762_choices_fb7b615ab2121ec76cecb5fa2cad104e: string;
                                phone_number_input_15254487288447762_choices_fcacde06c2b867e33fbc821f32d4c765: string;
                                phone_number_input_15254487288447762_choices_fec85feea479735d94a3f27756825567: string;
                                phone_number_input_15254487288447762_display_name: string;
                                phone_number_input_15254487288447762_legend: string;
                                phone_number_input_15254487288447762_placeholder: string;
                                gigya_mobile_login_screen_caption: string;
                                submit_31429890890890_value: string;
                                label_1555593146287_label: string;
                                label_546546790858_label: string;
                                gigya_mobile_verification_screen_caption: string;
                                submit_137794634987176350_value: string;
                                label_56426764264083580_label: string;
                                gigya_change_email_screen_caption: string;
                                textbox_20913098960397852_label: string;
                                submit_106757411555670860_value: string;
                                label_124580104205672500_label: string;
                                label_45421446589093550_label: string;
                                gigya_email_code_verification_screen_caption: string;
                                submit_81725475708397440_value: string;
                                label_47776247120507590_label: string;
                                link_125263109889403890_label: string;
                                loginid_1762354922073180_label: string;
                                gigya_forgot_password_screen_caption: string;
                                label_32342199862391930_label: string;
                                link_64563424514074200_label: string;
                                gigya_forgot_password_success_screen_caption: string;
                                submit_1640252814218_value: string;
                                label_1640252757841_label: string;
                                gigya_mobile_forgot_password_screen_caption: string;
                                submit_1640253788797_value: string;
                                label_1640253752471_label: string;
                                label_1640253816271_label: string;
                                gigya_mobile_forgot_password_verification_screen_caption: string;
                                submit_48518527117736720_value: string;
                                label_31901611131936240_label: string;
                                password_24487772290225964_label: string;
                                password_53816046531769560_label: string;
                                gigya_reset_password_screen_caption: string;
                                label_43754194743648540_label: string;
                                link_122104312720648740_label: string;
                                gigya_reset_password_success_screen_caption: string;
                                submit_65931489860940900_value: string;
                                label_16240548663414458_label: string;
                                password_101426512808638880_label: string;
                                password_17036595420608126_label: string;
                                password_19612919353342308_label: string;
                                gigya_password_change_required_screen_caption: string;
                                submit_59040383411520670_value: string;
                                label_114745734160901840_label: string;
                                label_135099439990555600_label: string;
                                gigya_verification_pending_screen_caption: string;
                                textbox_53553186815043370_label: string;
                                gigya_tfa_registration_screen_caption: string;
                                gigya_tfa_verification_screen_caption: string;
                                label_4529849558267223_label: string;
                                link_19224603862200704_label: string;
                                gigya_verification_sent_screen_caption: string;
                                submit_55211342470297420_value: string;
                                checkbox_78285840404140770_label: string;
                                header_51697213698355980_label: string;
                                password_107891164873405600_placeholder: string;
                                password_76732333762278900_placeholder: string;
                                gigya_lite_account_progression_screen_caption: string;
                                submit_1656946025416_value: string;
                                label_1656946025416_label: string;
                                gigya_device_code_verification_screen_caption: string;
                                textbox_1656946025416_placeholder: string;
                                label_1656948542313_label: string;
                                link_1656954205211_label: string;
                                gigya_device_code_thank_you_screen_caption: string;
                                passkey_register_widget_148589704012182200_value: string;
                                header_1941735297197556_label: string;
                                header_2741570414924430_label: string;
                                header_8427604072677286_label: string;
                                label_126523004556259340_label: string;
                                label_85984667306998110_label: string;
                                link_63641313208939464_label: string;
                                gigya_passkey_registration_screen_caption: string;
                            };
                        };
                    };
                };
            }
            export namespace resolver_1 {
                function defaultProccessor(): void;
            }
            export { resolver_1 as resolver };
        }
        let _groupsStack: any[];
        let _currColorIdx: number;
        let configKey: string;
        namespace _console {
            export function debug_4(): void;
            export { debug_4 as debug };
            export function error(): void;
            export function info(): void;
            export function log_1(): void;
            export { log_1 as log };
            export function warn_1(): void;
            export { warn_1 as warn };
            export function dir(): void;
            export function dirxml(): void;
            export function table(): void;
            export function trace(): void;
            export function group(): void;
            export function groupCollapsed(): void;
            export function groupEnd(): void;
            export function clear(): void;
            export function count(): void;
            export function countReset(): void;
            export function assert(): void;
            export function profile(): void;
            export function profileEnd(): void;
            export function time(): void;
            export function timeLog(): void;
            export function timeEnd(): void;
            export function timeStamp(): void;
            export function context(): void;
            export function createTask(): void;
            export let memory: {};
        }
        namespace _config {
            let logLevel: number;
            let clientMuteLevel: number;
            let logTheme: number;
        }
        function _random(): void;
        function _jsonp(): void;
    }
    let isReady_1: boolean;
    export { isReady_1 as isReady };
    export function ClientFeature_1(): void;
    export { ClientFeature_1 as ClientFeature };
    export function flow_1(): void;
    export { flow_1 as flow };
    export function showDebugUI_2(): void;
    export { showDebugUI_2 as showDebugUI };
}
