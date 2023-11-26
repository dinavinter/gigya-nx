export declare const gigya: {
    accounts: {
        screenSets: import("../accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin").ScreenSetPlugin;
    };
};
export declare const GigyaJs: {
    accounts: {
        showScreenSet: typeof import("../accounts/Gigya.JS.Plugin.screenSet2/app/ScreenSetPlugin").showScreenSet;
        auth: {
            fido: {};
            otp: {
                email: {};
            };
            push: {};
            magiclink: {
                email: {};
            };
        };
        address: {
            suggestions: {};
        };
        sso: {};
        tfa: {
            backupcodes: {};
            phone: {};
            email: {};
            totp: {};
            push: {};
        };
        groups: {};
        otp: {};
        identifier: {};
        identity: {};
        session: {};
    };
};