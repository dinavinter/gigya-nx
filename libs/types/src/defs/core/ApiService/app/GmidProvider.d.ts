export declare namespace GmidProvider {
    /**
     * Model for HasGmid context.
     */
    interface HasGmidContext {
        readonly hasGmid: HasGmid;
        readonly isV3: boolean;
        readonly isV4: boolean;
    }
    /**
     * Gmid version.
     */
    enum HasGmid {
        ver2 = "ver2",
        ver3 = "ver3",
        ver4 = "ver4"
    }
    /**
     * Search actual version in cookies or from backend configuration
     * (it is set up for client on the backend side as gigya.gmidVersion).
     */
    enum VersionSearchStrategy {
        cookieFirst = "cookieFirst",
        configFirst = "configFirst"
    }
    /**
     * Return HasGmid context with all useful info.
     * @param gigyaObj Gigya global object.
     */
    function getHasGmidParam(gigyaObj: typeof gigya): HasGmidContext;
    /**
     * Return indication whether bootstrap need or not.
     * @param gigyaObj Gigya global object.
     * @param strategy Search actual version in cookies or from backend configuration.
     */
    function getGmidBootstrapIndicationToken(gigyaObj: typeof gigya, strategy?: VersionSearchStrategy): string;
    /**
     * Return actual version of the gmid version cookie (ver3, ver4, etc).
     * @param gigyaObj Gigya global object.
     * @param strategy Search actual version in cookies or from backend configuration.
     */
    function getActualGmidVersion(gigyaObj: typeof gigya, strategy?: VersionSearchStrategy): HasGmid;
    /**
     * Return flag if the token is allowed to be regenerated.
     * (Allowed only in case when session is not active and gmid token is not latest.)
     * @param gigyaObj Gigya global object.
     * @param isSessionActive Is session active indicator.
     */
    function shouldRegenerateGmid(gigyaObj: typeof gigya, isSessionActive: boolean): boolean;
    /**
     * Return flag whether hasGmid cookie has latest version.
     * @param gigyaObj Gigya global object.
     */
    function hasLatestGmidVersion(gigyaObj: typeof gigya): boolean;
    function convertHasGmidToBootstrapIndication(gigyaObj: typeof gigya, gmidVersion: string): string;
    function shouldForceBootstrap(): boolean;
}
