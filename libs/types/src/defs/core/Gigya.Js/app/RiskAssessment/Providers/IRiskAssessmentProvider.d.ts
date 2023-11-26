export declare const enum RiskAssessmentProviderType {
    ReCaptchaV3 = "ReCaptcha",
    TransUnion = "TransUnion"
}
export declare const RiskAssessmentProviders: {
    [key: string]: any;
};
export declare type RiskAssessmentProviderParams = Object;
export interface IRiskAssessmentProvider {
    shouldApply(): boolean;
    getToken(): Promise<string>;
    getRequestParams(): Promise<Object>;
}
