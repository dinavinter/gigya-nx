import { BaseOtpAuthMethodWidget } from '../BaseOtpAuthMethodWidget';
export declare var EmailOtpAuthMethodOtpWidget_CONSTS: {
    selector: string;
    authMethod: string;
    isExpandedAttr: string;
    containerClass: string;
    containerEnabledClass: string;
    deps: (typeof import("./BindingWidget").BindingWidget | typeof import("./TranslatedWidget").TranslatedWidget | typeof import("../ErrorDisplayElement").ErrorDisplayElement)[];
};
export declare class EmailOtpAuthMethodWidget extends BaseOtpAuthMethodWidget {
    static CONSTS: {
        selector: string;
        authMethod: string;
        isExpandedAttr: string;
        containerClass: string;
        containerEnabledClass: string;
        deps: (typeof import("./BindingWidget").BindingWidget | typeof import("./TranslatedWidget").TranslatedWidget | typeof import("../ErrorDisplayElement").ErrorDisplayElement)[];
    };
    protected get initApiParams(): {
        lang: string;
        email: string;
        regToken: any;
    };
    protected readonly fieldName = "emailCode";
}
