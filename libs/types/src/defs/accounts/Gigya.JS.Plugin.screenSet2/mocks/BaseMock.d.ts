import { MockConfig } from './interfaces';
export declare class BaseMock {
    protected config: MockConfig;
    protected instance: any;
    constructor(config?: MockConfig);
    getInstance(): any;
}
