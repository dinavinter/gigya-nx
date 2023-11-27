const {queueForExecution} = require("../latest/gigya.services.api");
const {ServerApi} = require("../latest/gigya");
module.exports = function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]), a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i)
    };
    window.gigya.thisScript && window.gigya.thisScript.globalConf ? a() : queueForExecution("API", a)
};

const initRegistration =  new ServerApi('accounts.initRegistration', 'sdk|isLite|dataCenter', false, {
    preprocessor: globalAccountRegistrationPreProcessor
}, {clearSession: true});

module.exports = [
    {
        run: ServerApi,
        methodName: "accounts.initRegistration",
        settings: {
            preprocessor: function(e,t){window.gigya.globalAccount.dataCenter&&(e.dataCenter=window.gigya.globalAccount.dataCenter),t()}
        },
        schema: "sdk|isLite|dataCenter",
        requiresSession: false,
        adapterSettings: {
            clearSession: true,
            forceHttps: true,
            requiresSession: function(){return i}
        }
    }
];

const a