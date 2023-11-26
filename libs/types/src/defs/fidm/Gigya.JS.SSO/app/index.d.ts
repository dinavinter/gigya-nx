import 'src/core/Gigya.Js/app/GigyaGlobals';
import 'src/core/Gigya.Js/app/Logger/main';
import { Sso } from './sso';
import { SsoUtils } from './ssoUtils';
interface ISSOParams {
    APIKey: string;
    ssoSegment: string;
    sourceKey: string;
    origin: string;
    oneFrame?: boolean;
}
export { SsoUtils, ISSOParams, Sso };
