import { IRiskAssessmentProvider, RiskAssessmentProviderParams } from './IRiskAssessmentProvider';
export interface ITransUnion {
    getBlackbox(): {
        blackbox: string;
        finished: boolean;
    };
}
export declare class TransUnionProvider implements IRiskAssessmentProvider {
    protected params: RiskAssessmentProviderParams;
    constructor(params?: RiskAssessmentProviderParams);
    private static get instance();
    getRequestParams(): Promise<Object>;
    getToken(): Promise<string>;
    shouldApply(): boolean;
}
