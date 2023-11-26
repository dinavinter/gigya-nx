export interface CanaryConfig {
    probability: number;
    version: string;
    cookiesNames: {
        isCanary: string;
        version: string;
    };
}
