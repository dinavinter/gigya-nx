export const accounts = {
  addEventHandlers: function x() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    C(o.merge([e, { namespace: 'accounts' }]));
  },
  b2b: {
    openDelegatedAdminLogin: function F(e) {
      e || (e = {});
      var t = window.open('', '_blank');
      (e.callback = function (n) {
        0 !== n.errorCode
          ? (t.close(), 'function' == typeof e.onError && e.onError(n))
          : n.targetUrl && n.id_token
          ? m.redirect(
              n.targetUrl,
              [{ id_token: n.id_token }],
              n.method ? n.method : 'POST',
              void 0,
              t.document
            )
          : (t.close(),
            window.gigya.logger.error(
              'accounts.b2b.delegatedAdminLogin - missing required params',
              { targetURL: n.targetUrl, id_token: n.id_token }
            ));
      }),
        window.gigya.accounts.b2b.delegatedAdminLogin(e);
    },
    registerOrganization: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    getOrganizationSchema: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    delegatedAdminLogin: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    getOrganizationInfo: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    setOrganizationContext: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    getOrganizationContext: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    auth: {
      getAssets: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
    },
  },
  setSSOToken: function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return i.__awaiter(this, void 0, void 0, function () {
      var t, n;
      return i.__generator(this, function (i) {
        return (
          (t = window.gigya.utils.object.merge([
            window.gigya.thisScript.globalConf,
            e,
          ])),
          (n = t.redirectURL || document.location.href),
          window.gigya.utils.HTTP.redirect(n, [{}], 'GET', '_top'),
          [2]
        );
      });
    });
  },
  auth: {
    fido: {
      register: function (e) {
        return (
          void 0 === e && (e = {}),
          i.default
            .registerPasskey(e, !0)
            .then(function (t) {
              return o(e, t);
            })
            .catch(function (t) {
              throw o(e, t);
            })
        );
      },
      login: function (e) {
        return (
          void 0 === e && (e = {}),
          i.default
            .authenticate(e)
            .then(function (t) {
              return o(e, t);
            })
            .catch(function (t) {
              throw o(e, t);
            })
        );
      },
      initRegisterCredentials: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
      registerCredentials: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
      getAssertionOptions: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
      verifyAssertion: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
      getCredentials: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
      removeCredential: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
    },
    getPreferredLoginMethod: function (e) {
      return i.siteData.getPreferredLoginMethod(e);
    },
    setPreferredLoginMethod: function (e, t) {
      i.siteData.setPreferredLoginMethod(e, t);
    },
    otp: {
      authenticate: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
      email: {
        sendCode: function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          var i = o.merge([t]),
            a = function () {
              i.lang && (i._explicitLang = !0);
              var t = o.merge([window.gigya.thisScript.globalConf, i]);
              e.run(t, i);
            };
          window.gigya.thisScript && window.gigya.thisScript.globalConf
            ? a()
            : r.queueForExecution('API', a);
        },
        login: function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          var i = o.merge([t]),
            a = function () {
              i.lang && (i._explicitLang = !0);
              var t = o.merge([window.gigya.thisScript.globalConf, i]);
              e.run(t, i);
            };
          window.gigya.thisScript && window.gigya.thisScript.globalConf
            ? a()
            : r.queueForExecution('API', a);
        },
      },
    },
    getMethods: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    push: {
      sendVerification: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
      isVerified: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
    },
    magiclink: {
      email: {
        send: function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          var i = o.merge([t]),
            a = function () {
              i.lang && (i._explicitLang = !0);
              var t = o.merge([window.gigya.thisScript.globalConf, i]);
              e.run(t, i);
            };
          window.gigya.thisScript && window.gigya.thisScript.globalConf
            ? a()
            : r.queueForExecution('API', a);
        },
        login: function () {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          var i = o.merge([t]),
            a = function () {
              i.lang && (i._explicitLang = !0);
              var t = o.merge([window.gigya.thisScript.globalConf, i]);
              e.run(t, i);
            };
          window.gigya.thisScript && window.gigya.thisScript.globalConf
            ? a()
            : r.queueForExecution('API', a);
        },
      },
    },
    login: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
  },
  socialLogin: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  showMyPhotoUI: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  showTfaUI: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  initHostedPage: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  showScreenSet: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  hideScreenSet: function (n) {
    if (t.injectionInfo) {
      var i = t.getPublicMethod(e),
        o = u.getPluginInstance(n, t.injectionInfo);
      if (o) {
        var r = [];
        l.forEach(i.argNames, function (e) {
          e && void 0 !== n[e] && r.push(n[e]);
        }),
          o[i.instanceMethod].apply(o, r);
      } else c.addLog("couldn't find instance", t, !1);
    } else c.addLog('invalid injection info', t, !1);
  },
  switchScreen: function (n) {
    if (t.injectionInfo) {
      var i = t.getPublicMethod(e),
        o = u.getPluginInstance(n, t.injectionInfo);
      if (o) {
        var r = [];
        l.forEach(i.argNames, function (e) {
          e && void 0 !== n[e] && r.push(n[e]);
        }),
          o[i.instanceMethod].apply(o, r);
      } else c.addLog("couldn't find instance", t, !1);
    } else c.addLog('invalid injection info', t, !1);
  },
  login: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  linkAccounts: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  notifySocialLogin: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  initRegistration: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  initProgression: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  register: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  finalizeRegistration: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  captchaImage: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  importProfilePhoto: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  setProfilePhoto: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  resetPassword: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  removeProfilePhoto: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  isAvailableLoginID: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  address: {
    suggestions: {
      get: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
    },
  },
  resendVerificationCode: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  getCaptcha: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  getPolicies: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  getSchema: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  getSiteConsentDetails: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  getLegalStatements: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  verifyLogin: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  getAccountInfo: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  setAccountInfo: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  logout: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  search: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  getScreenSets: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  sso: {
    login: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
  },
  getConflictingAccount: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  resetSitePreferences: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  getJWT: function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    var i = o.merge([t]),
      a = function () {
        i.lang && (i._explicitLang = !0);
        var t = o.merge([window.gigya.thisScript.globalConf, i]);
        e.run(t, i);
      };
    window.gigya.thisScript && window.gigya.thisScript.globalConf
      ? a()
      : r.queueForExecution('API', a);
  },
  tfa: {
    getProviders: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    initTFA: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    finalizeTFA: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    deactivateProvider: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    unregisterDevice: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    backupcodes: {
      get: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
      create: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
      verify: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
    },
    phone: {
      getRegisteredPhoneNumbers: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
      removePhone: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
      sendVerificationCode: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
      completeVerification: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
    },
    email: {
      getEmails: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
      sendVerificationCode: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
      completeVerification: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
    },
    totp: {
      register: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
      verify: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
      getRegistered: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
      remove: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
    },
    push: {
      isVerified: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
      sendVerification: function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var i = o.merge([t]),
          a = function () {
            i.lang && (i._explicitLang = !0);
            var t = o.merge([window.gigya.thisScript.globalConf, i]);
            e.run(t, i);
          };
        window.gigya.thisScript && window.gigya.thisScript.globalConf
          ? a()
          : r.queueForExecution('API', a);
      },
    },
  },
  groups: {
    getSchema: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    registerGroup: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    setGroupInfo: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    getGroupInfo: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    deleteGroup: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    setGroupMemberInfo: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    getGroupMemberInfo: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    removeMember: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    getAllMemberGroups: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    searchGroupMembers: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    createInvitation: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    invitationConfirm: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    finalizeInvitation: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
  },
  otp: {
    sendCode: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    login: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
    update: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
  },
  identifier: {
    createToken: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
  },
  identity: {
    authorize: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
  },
  session: {
    verify: function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      var i = o.merge([t]),
        a = function () {
          i.lang && (i._explicitLang = !0);
          var t = o.merge([window.gigya.thisScript.globalConf, i]);
          e.run(t, i);
        };
      window.gigya.thisScript && window.gigya.thisScript.globalConf
        ? a()
        : r.queueForExecution('API', a);
    },
  },
};
