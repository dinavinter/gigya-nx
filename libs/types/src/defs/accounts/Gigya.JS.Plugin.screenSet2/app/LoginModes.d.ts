import { IScreenSetParams } from 'src/accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin';
export declare enum ConflictHandling {
    fail = 0,
    saveProfileAndFail = 1
}
export interface ILoginMode {
    name: string;
    getLoginProviders(apiData: any, params: any, regToken: string): string;
    filterParams(params: IScreenSetParams): IScreenSetParams;
}
export declare var LoginModes: {
    connect: {
        name: string;
    };
    standard: {
        name: string;
        getLoginProviders: (apiData: any, params: any, regToken: any) => string;
        filterParams: (params: any) => any;
    };
    reAuth: {
        name: string;
        getLoginProviders: (apiData: any, params: any, regToken: any) => string;
        filterParams: (params: any) => any;
    };
    link: {
        name: string;
        getLoginProviders: (apiData: any, params: any, regToken: any) => string;
        filterParams: (params: any) => any;
    };
};
