import { BaseAuthMethodWidget } from '../BaseAuthMethodWidget';
export declare var AuthMethodPassword_CONSTS: {
    selector: string;
    authMethod: string;
    isExpandedAttr: string;
    containerClass: string;
    containerEnabledClass: string;
    deps: (typeof import("./BindingWidget").BindingWidget | typeof import("./TranslatedWidget").TranslatedWidget | typeof import("../ErrorDisplayElement").ErrorDisplayElement)[];
};
export declare class PasswordAuthMethodWidget extends BaseAuthMethodWidget {
    static CONSTS: {
        selector: string;
        authMethod: string;
        isExpandedAttr: string;
        containerClass: string;
        containerEnabledClass: string;
        deps: (typeof import("./BindingWidget").BindingWidget | typeof import("./TranslatedWidget").TranslatedWidget | typeof import("../ErrorDisplayElement").ErrorDisplayElement)[];
    };
    linkInstanceElement(parent: any): void;
    protected readonly fieldName = "sitePassword";
    protected get submitApi(): Function;
    protected get submitApiParams(): Object;
    private get passwordValue();
}
