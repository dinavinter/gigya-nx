export interface IRiskAssessmentHandler {
    getAssessmentParameters(params: Object): Promise<Object>;
}
export declare class RiskAssessmentHandler implements IRiskAssessmentHandler {
    getAssessmentParameters(params?: Object): Promise<Object>;
}
export declare class RiskAssessmentHandlerTimeoutDecorator implements IRiskAssessmentHandler {
    private riskAssessmentHandler;
    constructor(riskAssessmentHandler: RiskAssessmentHandler);
    getAssessmentParameters(params?: Object): Promise<Object>;
}
