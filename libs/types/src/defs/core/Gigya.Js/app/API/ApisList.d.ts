import { ServerApi } from 'src/core/Gigya.Js/app/API/ServerApi';
import { UiApi } from 'src/core/Gigya.Js/app/API/UiApi';
export declare var logoutBehaviour: {
    logoutBeforeServerResponse: boolean;
    alwaysSendLogoutToServer: boolean;
};
export declare var arApiList: (ServerApi | UiApi | import("./VersionSelector").VersionSelector)[];
