! function(t) {
    var r = {};

    function i(n) {
        var e;
        return (r[n] || (e = r[n] = {
            i: n,
            l: !1,
            exports: {}
        }, t[n].call(e.exports, e, e.exports, i), e.l = !0, e)).exports
    }
    i.m = t, i.c = r, i.d = function(n, e, t) {
        i.o(n, e) || Object.defineProperty(n, e, {
            enumerable: !0,
            get: t
        })
    }, i.r = function(n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "u", {
            value: !0
        })
    }, i.t = function(e, n) {
        if (1 & n && (e = i(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.u) return e;
        var t = Object.create(null);
        if (i.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var r in e) i.d(t, r, function(n) {
                return e[n]
            }.bind(null, r));
        return t
    }, i.n = function(n) {
        var e = n && n.u ? function() {
            return n.default
        } : function() {
            return n
        };
        return i.d(e, "a", e), e
    }, i.o = function(n, e) {
        return Object.prototype.hasOwnProperty.call(n, e)
    }, i.p = "", i(i.s = 0)
}([function(n, e, t) {
    var r, i, t = t(1);
    try {
        r = "A7JYkbIvWKmS8mWYjXO12SIIsfPdI7twY91Y3LWOV/YbZmN1ZhYv8O+Zs6/IPCfBE99aV9tIC8sWZSCN09vf7gkAAACWeyJvcmlnaW4iOiJodHRwczovL2N0LnBpbnRlcmVzdC5jb206NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZzIiLCJleHBpcnkiOjE3NDIzNDIzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", (i = document.createElement("meta")).httpEquiv = "origin-trial", i.content = r, document.head.append(i)
    } catch (n) {
        t.error("Error attempting to add trial token:", n)
    }
}, function(n, e, t) {
    var r = t(2),
        i = {},
        c = "unknown";

    function o(n) {
        n.version = c, 100 * Math.random() < (r.LIST.SEND_LOGS.chance || 0) && i.O(n)
    }
    i.setVersion = function(n) {
        c = n
    }, i.O = function(n) {
        var e = new window.XMLHttpRequest;
        e.withCredentials = !1, e.onerror = function() {
            console.info("Error message failed to send")
        }, e.open("POST", "https://ct.pinterest.com/stats/", !1), e.setRequestHeader("Content-Type", "application/json"), e.send(JSON.stringify(n))
    }, i.error = function(n, e) {
        var t = {
            messageType: "ERROR",
            message: n,
            log: "[".concat(2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "Empty", "]")
        };
        e.hasOwnProperty("stack") ? t.log += "[".concat(e.stack, "]") : t.log += "[".concat(e.message, "]"), o(t)
    }, i.info = function(n, e) {
        o({
            messageType: "INFO",
            message: n,
            log: "[".concat(2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "Empty", "][").concat(e, "]")
        })
    }, n.exports = i
}, function(n, e) {
    function t(n, e) {
        return function(n) {
            if (Array.isArray(n)) return n
        }(n) || function(n, e) {
            var t = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
            if (null != t) {
                var r, i, c = [],
                    o = !0,
                    a = !1;
                try {
                    for (t = t.call(n); !(o = (r = t.next()).done) && (c.push(r.value), !e || c.length !== e); o = !0);
                } catch (n) {
                    a = !0, i = n
                } finally {
                    try {
                        o || null == t.return || t.return()
                    } finally {
                        if (a) throw i
                    }
                }
                return c
            }
        }(n, e) || function(n, e) {
            var t;
            if (n) return "string" == typeof n ? r(n, e) : "Map" === (t = "Object" === (t = Object.prototype.toString.call(n).slice(8, -1)) && n.constructor ? n.constructor.name : t) || "Set" === t ? Array.from(n) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? r(n, e) : void 0
        }(n, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function r(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r
    }
    var i = {};
    i.LIST = {
        FP_LOCAL_STORAGE: {
            chance: 100,
            uri: "fp_localStorage"
        },
        DERIVED_EPIK: {
            chance: 100,
            uri: "pin-derived-epik"
        },
        SCRAPE_LISTENERS: {
            chance: 100,
            uri: "pin-scrape-listeners"
        },
        SEND_LOGS: {
            chance: 100,
            uri: "pin-log-errors"
        },
        CHECK_CSP: {
            chance: 5,
            uri: "pin-check-csp"
        },
        DEDUPE_AEM_ELIGIBLE_ARRAY: {
            chance: 100,
            uri: "pin-dedupe-aem-eligible-array"
        },
        CHECK_AUTO_UPGRADED: {
            chance: 100,
            uri: "pin-check-auto-upgraded"
        },
        CHECK_DOCUMENT_COOKIE: {
            chance: 0,
            uri: "pin-check-document-cookie"
        },
        SEND_TO_STAGING: {
            chance: 0,
            uri: "pin-send-to-staging"
        },
        CHROME_TRIAL_EPIK_LOCALSTORAGE: {
            chance: 100,
            uri: "pin-trial-epik-localstorage"
        },
        NO_CODE_CAPI_ENABLED: {
            chance: 100,
            uri: "nocodecapi-enabled"
        }
    };
    for (var c = 0, o = Object.entries(i.LIST); c < o.length; c++) {
        var a = t(o[c], 2),
            u = a[0],
            a = a[1];
        "true" === new URLSearchParams(window.location.search).get(a.uri) && (i.LIST[u].chance = 100)
    }
    i.isInRampPercentage = function(n) {
        return 100 * Math.random() < (n || 0)
    }, n.exports = i
}]);