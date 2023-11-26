/// <reference types="jasmine" />
import Spy = jasmine.Spy;
export interface MockConfig {
    type?: string;
    fixture?: string;
    link?: boolean;
    spyAll?: boolean;
    spies?: Array<{
        key: string;
        handler?: (spy: Spy) => any | void;
    }>;
    overrides?: {
        [key: string]: Function;
    };
    apiData?: {};
    mockInjections?: any[];
    params?: {
        [key: string]: any;
    };
    form?: MockConfig;
    screen?: MockConfig;
    screenSet?: MockConfig;
}
export interface ArrayManagerMockConfig extends MockConfig {
}
