import { IRiskAssessmentProvider, RiskAssessmentProviderParams } from 'src/core/Gigya.Js/app/RiskAssessment/Providers/IRiskAssessmentProvider';
export interface ReCaptcha {
    /**
     * returns the reCAPTCHA token.
     */
    execute(siteKey?: string): Promise<string>;
}
export declare class GoogleReCaptchaProvider implements IRiskAssessmentProvider {
    protected params: RiskAssessmentProviderParams;
    private static CAPTCHA_TYPE_V3;
    private static CAPTCHA_TYPE_ENTERPRISE;
    constructor(params?: RiskAssessmentProviderParams);
    private loadProvider;
    shouldApply(): boolean;
    getRequestParams(): Promise<Object>;
    getToken(): Promise<string>;
    protected getReCaptchaToken(params: any): Promise<string>;
    protected get isEnterprise(): boolean;
    protected get captchaType(): string;
    protected get siteKey(): string;
    protected get siteKeyV3(): string;
    protected get siteKeyEnterprise(): string;
}
