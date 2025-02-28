;
/* Copyright (c) 2010-2021 Google LLC. http://angular.io/license
 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */
/* Version 715da4562eaf56bd7c87bacb5b01e91e v:23.10.0.4353, c:e631440295826fc9c072c646724befda33cc8916, b:23.10.0.4353 */
(function() {
    new function() {
        if (!window.ADRUM && !0 !== window["adrum-disable"]) {
            var h = window.ADRUM = {},
                y = window.console,
                A = y && "function" == typeof y.log ? y : {
                    log: function() {}
                };
            window["adrum-start-time"] = window["adrum-start-time"] || (new Date).getTime();
            var u = this && this.kd || function() {
                    var a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(a, e) {
                        a.__proto__ = e
                    } || function(a, e) {
                        for (var c in e) e.hasOwnProperty(c) && (a[c] = e[c])
                    };
                    return function(b, e) {
                        function c() {
                            this.constructor = b
                        }
                        a(b, e);
                        b.prototype = null === e ? Object.create(e) :
                            (c.prototype = e.prototype, new c)
                    }
                }(),
                d = this && this.yp || Object.assign || function(a) {
                    for (var b, e = 1, c = arguments.length; e < c; e++) {
                        b = arguments[e];
                        for (var f in b) Object.prototype.hasOwnProperty.call(b, f) && (a[f] = b[f])
                    }
                    return a
                };
            (function(a) {
                (function(a) {
                    a.setUpMonitors = function() {
                        for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
                        for (b = 0; b < a.length; b++) {
                            var f = a[b];
                            f && f.setUp()
                        }
                    }
                })(a.monitor || (a.monitor = {}))
            })(h || (h = {}));
            window.Error.stackTraceLimit = Infinity;
            (function(a) {
                (function(b) {
                    function e(a) {
                        return b.refs.slice.apply(a,
                            b.refs.slice.call(arguments, 1))
                    }

                    function c(a, n) {
                        return f(b.refs.setTimeout.apply) ? b.refs.setTimeout.apply(window, arguments) : b.refs.setTimeout(a, n)
                    }

                    function f(a) {
                        return "undefined" !== typeof a && null !== a
                    }

                    function n(a) {
                        return "object" == typeof a && !b.isArray(a) && null !== a
                    }

                    function m(a) {
                        return "function" == typeof a || !1
                    }

                    function k(a) {
                        return "string" == typeof a
                    }

                    function q(a) {
                        return "number" == typeof a
                    }

                    function p(a) {
                        return "" === a
                    }

                    function t(a, f) {
                        for (var m in f) {
                            var k = f[m];
                            if (x(f, m)) {
                                var q = a[m];
                                n(k) && n(q) ? t(q, k) : b.isArray(q) &&
                                    b.isArray(k) ? a[m] = q.concat(k) : a[m] = k
                            }
                        }
                        return a
                    }

                    function x(a, b) {
                        return Object.prototype.hasOwnProperty.call(a, b) && f(a[b])
                    }

                    function s(a) {
                        return k(a) ? a.replace(/^\s*/, "").replace(/\s*$/, "") : a
                    }

                    function z() {
                        return b.refs.ta && m(b.refs.ta.now)
                    }

                    function h() {
                        return z() ? b.refs.round(b.refs.ta.now() + v()) : (new Date).getTime()
                    }

                    function v() {
                        var a = b.refs.ta,
                            a = a && a.timing && q(a.timing.navigationStart) ? a.timing.navigationStart : window["adrum-start-time"];
                        f(a) || (a = h());
                        return a
                    }

                    function r(a, b) {
                        var f = Array.prototype[a];
                        return f ? J(f) : B(a, b)
                    }

                    function J(a) {
                        return function(f) {
                            return a.apply(f, b.refs.slice.call(arguments, 1))
                        }
                    }

                    function B(a, b) {
                        return function(n, k) {
                            if (!f(n)) throw new TypeError(a + " called on null or undefined");
                            if (!m(k)) throw new TypeError(k + " is not a function");
                            return b.apply(null, arguments)
                        }
                    }

                    function D(a, b, f) {
                        var n = Object(a),
                            m = n.length >>> 0,
                            k = 0;
                        if (3 > arguments.length) {
                            for (; k < m && !(k in n);) k++;
                            if (k >= m) throw new TypeError("Reduce of empty array with no initial value");
                            f = n[k++]
                        }
                        for (; k < m; k++) k in n && (f = b(f,
                            n[k], k, n));
                        return f
                    }

                    function E(a, f, n) {
                        return b.reduce(a, function(a, b, m, k) {
                            a[m] = f.call(n, b, m, k);
                            return a
                        }, Array(a.length >>> 0))
                    }

                    function F(a, f, n) {
                        return b.reduce(a, function(a, b, m, k) {
                            f.call(n, b, m, k) && a.push(b);
                            return a
                        }, [])
                    }

                    function G(a, b, f) {
                        a = Object(a);
                        for (var n = a.length >>> 0, m = 0; m < n; m++)
                            if (m in a && b.call(f, a[m], m, a)) return !0;
                        return !1
                    }

                    function H(a, f, n) {
                        return !b.some(a, function(a) {
                            return !f.call(n, a)
                        })
                    }

                    function S(a, f, n) {
                        b.reduce(a, function(a, b, m, k) {
                            f.call(n, b, m, k)
                        }, void 0)
                    }

                    function u(a) {
                        a = new b.refs.Error("Async Function:" +
                            (a ? " " + a : ""));
                        a.stack && -1 == a.stack.toString().indexOf(a.message) && (a.stack = a.message + "\n" + a.stack);
                        return a
                    }

                    function C(a) {
                        return u(a).stack
                    }

                    function I(a) {
                        try {
                            throw u(a);
                        } catch (b) {
                            return b.stack
                        }
                    }
                    b.refs = {
                        isArray: Array.isArray,
                        toString: Object.prototype.toString,
                        slice: Array.prototype.slice,
                        setTimeout: window.setTimeout,
                        setInterval: window.setInterval,
                        ta: window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance,
                        assign: Object.assign,
                        round: Math.round,
                        Error: window.Error,
                        Nj: Text
                    };
                    b.La = e;
                    b.oSTO = c;
                    b.isCORSSupported = function() {
                        var a = window.JSON && m(JSON.stringify);
                        return f(window.XMLHttpRequest) && "withCredentials" in new XMLHttpRequest && a
                    };
                    b.isDefined = f;
                    b.Bm = function(a) {
                        return "number" === typeof a && !window.isNaN(a)
                    };
                    b.isArray = m(b.refs.isArray) && m(b.refs.isArray.bind) ? b.refs.isArray.bind(Array) : function(a) {
                        return b.refs.toString.call(a) === b.refs.toString.call([])
                    };
                    b.isObject = n;
                    b.isFunction = m;
                    b.isString = k;
                    b.isNumber = q;
                    b.isBoolean = function(a) {
                        return "boolean" == typeof a
                    };
                    b.xm = function(a) {
                        if (!n(a)) return !1;
                        var b = Object.prototype.toString.call(a);
                        return ("[object Error]" === b || "[object DOMException]" === b) && "name" in a && "message" in a
                    };
                    b.max = function(a, b) {
                        return Math.max(isNaN(a) ? Number.NEGATIVE_INFINITY : a, isNaN(b) ? Number.NEGATIVE_INFINITY : b)
                    };
                    b.um = p;
                    b.Ih = c;
                    b.uq = function(a, b) {
                        c(a, b || 1E4)
                    };
                    b.addEventListener = function(b, f, n, m) {
                        function k() {
                            try {
                                return n.apply(this, e(arguments))
                            } catch (m) {
                                a.exception(m, "M1", f, b, m)
                            }
                        }
                        void 0 === m && (m = !1);
                        a.logInfo("M0", f, b);
                        k.L = !0;
                        b.addEventListener ? b.addEventListener(f, k, m) : b.attachEvent &&
                            b.attachEvent("on" + f, k)
                    };
                    b.loadScriptAsync = function(b) {
                        var n = document.createElement("script"),
                            m = a.conf.elementIdWithNonce;
                        n.type = "text/javascript";
                        n.async = !0;
                        n.src = b;
                        m && f(s(m)) && (m = document.getElementById(m)) && (m = m.nonce, m = s(m), f(m) && !p(m) && n.setAttribute("nonce", m));
                        (m = document.getElementsByTagName("script")[0]) ? (m.parentNode.insertBefore(n, m), a.logInfo("M2", b)) : a.logInfo("M3", b)
                    };
                    b.mergeJSON = t;
                    b.hasOwnPropertyDefined = x;
                    b.gg = function(a, f) {
                        if (b.isFunction(Object.getPrototypeOf))
                            for (; b.isDefined(a) &&
                                !x(a, f);) a = Object.getPrototypeOf(a);
                        return a
                    };
                    b.bp = function(a) {
                        return f(a) ? b.isArray(a) ? a : [a] : []
                    };
                    b.yq = function(a, b) {
                        return null != a && a.slice(0, b.length) == b
                    };
                    b.generateGUID = function(a) {
                        return f(a) && m(a.getRandomValues) && function() {
                            function b(a) {
                                a = a.toString(16);
                                return "0000".substr(a.length) + a
                            }
                            var f = new Uint16Array(8);
                            a.getRandomValues(f);
                            return b(f[0]) + b(f[1]) + "_" + b(f[2]) + "_" + b(f[3]) + "_" + b(f[4]) + "_" + b(f[5]) + b(f[6]) + b(f[7])
                        }
                    }(window.crypto || window.msCrypto) || function() {
                        return "xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx".replace(/[xy]/g,
                            function(a) {
                                var b = 16 * Math.random() | 0;
                                return ("x" == a ? b : b & 3 | 8).toString(16)
                            })
                    };
                    b.tryExtractingErrorStack = function(a) {
                        return a ? (a = a.stack) && "string" === typeof a ? a : null : null
                    };
                    b.trim = s;
                    b.vn = function(a) {
                        var b = {},
                            f, m;
                        if (!a) return b;
                        var n = a.split("\n");
                        for (m = 0; m < n.length; m++) {
                            var k = n[m];
                            f = k.indexOf(":");
                            a = s(k.substr(0, f)).toLowerCase();
                            f = s(k.substr(f + 1));
                            a && (b[a] = b[a] ? b[a] + (", " + f) : f)
                        }
                        return b
                    };
                    b.tryPeriodically = function(a, b, f, m) {
                        function n() {
                            if (b()) f && f();
                            else {
                                var q = a(++k);
                                0 < q ? c(n, q) : m && m()
                            }
                        }
                        var k = 0;
                        n()
                    };
                    b.Hf = function(a) {
                        return a.charAt(0).toUpperCase() + a.slice(1)
                    };
                    b.jh = function(a) {
                        for (var b = [], f = 1; f < arguments.length; f++) b[f - 1] = arguments[f];
                        return function() {
                            for (var f = [], m = 0; m < arguments.length; m++) f[m] = arguments[m];
                            return a.apply(this, b.concat(f))
                        }
                    };
                    b.Xp = z;
                    b.now = h;
                    b.fb = v;
                    b.Gp = D;
                    b.reduce = r("reduce", D);
                    b.Fp = E;
                    b.map = r("map", E);
                    b.Dp = F;
                    b.filter = r("filter", F);
                    b.Hp = G;
                    b.some = r("some", G);
                    b.Cp = H;
                    b.every = r("every", H);
                    b.Ep = S;
                    b.forEach = r("forEach", S);
                    b.Tk = function(a) {
                        return b.filter(a, f)
                    };
                    b.Lp = function(a) {
                        return [].concat.apply([],
                            a)
                    };
                    b.Uj = f(window.Reflect) && f(window.Reflect.construct) ? function(b, f, m, n) {
                        try {
                            return null !== f ? window.Reflect.construct(f, m, n) : b
                        } catch (k) {
                            return a.monitor.ErrorMonitor.B(k), b
                        }
                    } : function(b, f, m) {
                        try {
                            return null !== f && f.apply(b, m) || b
                        } catch (n) {
                            return a.monitor.ErrorMonitor.B(n), b
                        }
                    };
                    b.kd = function() {
                        var a = Object.setPrototypeOf || function(a, b) {
                            var f = Object.getOwnPropertyNames(b),
                                m;
                            for (m in f) a[m] = b[m]
                        };
                        return function(b, f) {
                            function m() {
                                this.constructor = b
                            }
                            a(b, f);
                            b.prototype = null === f ? Object.create(f) : (m.prototype =
                                f.prototype, new m)
                        }
                    }();
                    b.al = function(a) {
                        if (!b.isString(a)) return a;
                        var f = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            "'": "&#39;",
                            '"': "&quot;",
                            "/": "&#47;"
                        };
                        return a.replace(/[&<>'"/]/g, function(a) {
                            return f[a]
                        })
                    };
                    b.Cq = function(a) {
                        if (!b.isString(a)) return a;
                        var f = {
                            "&amp;": "&",
                            "&#38;": "&",
                            "&#x26;": "&",
                            "&lt;": "<",
                            "&#60;": "<",
                            "&#x3c;": "<",
                            "&gt;": ">",
                            "&#62;": ">",
                            "&#x3e;": ">",
                            "&apos;": "'",
                            "&#39;": "'",
                            "&#x27;": "'",
                            "&quot;": '"',
                            "&#34;": '"',
                            "&#x22;": '"',
                            "&sol;": "/",
                            "&#47;": "/",
                            "&#x2f;": "/"
                        };
                        return a.replace(/&(?:amp|#0*38|#x0*26|lt|#0*60|#x0*3c|gt|#0*62|#x0*3e|apos|#0*39|#x0*27|quot|#0*34|#x0*22|sol|#0*47|#x0*2f);/g,
                            function(a) {
                                a = a.replace(/0+\B/g, "");
                                return f[a]
                            })
                    };
                    b.Ok = function(a) {
                        var b;
                        return function() {
                            var f = this;
                            b && clearTimeout(b);
                            b = c(function() {
                                a.apply(f, arguments)
                            }, 300)
                        }
                    };
                    b.Fl = function(a) {
                        var f = a.length;
                        if (f)
                            for (f -= 1; 0 <= f; f--)
                                if (b.isObject(a[f]) && a[f].adrumArgs) return f;
                        return -1
                    };
                    b.Md = function(a, f) {
                        var m = a.length,
                            n;
                        n = null;
                        if (m)
                            for (m -= 1; 0 <= m; m--)
                                if (b.isObject(a[m]) && a[m].adrumArgs) {
                                    n = a[m].adrumArgs;
                                    n = n[f];
                                    break
                                }
                        return n
                    };
                    b.ae = function() {
                        return a.conf.noConflictPromiseMode || f(window.__zone_symbol__Promise) ||
                            f(window.__zone_symbol__ZoneAwarePromise)
                    };
                    var l = C(""),
                        K = I("");
                    b.Sa = l ? C : K ? I : C
                })(a.utils || (a.utils = {}))
            })(h || (h = {}));
            (function(a) {
                var b = a.conf || (a.conf = {});
                b.userConf = window["adrum-config"] || {};
                b.useHTTPSAlways = !0 === b.userConf.useHTTPSAlways;
                b.modernBrowserFeaturesAvailable = a.utils.isDefined(window.addEventListener) && a.utils.isCORSSupported() && a.utils.isDefined(Array.prototype.forEach);
                b.spa2 = b.userConf.spa && b.userConf.spa.spa2 && (!0 === b.userConf.spa.spa2 || a.utils.isObject(b.userConf.spa.spa2));
                b.clearResTiming =
                    b.userConf.spa && a.utils.isObject(b.userConf.spa.spa2) && a.utils.isDefined(b.userConf.spa.spa2.clearResTiming) ? b.userConf.spa.spa2.clearResTiming : !0;
                b.disableTextForTesting = !0 === b.userConf.disableTextForTesting;
                b.enablePrimaryMetrics = (!a.utils.isDefined(b.userConf.enablePrimaryMetrics) || !0 === b.userConf.enablePrimaryMetrics) && b.modernBrowserFeaturesAvailable;
                b.N = !1;
                b.considerCarouselForVCT = a.utils.isDefined(b.userConf.Dk) ? b.userConf.Dk : !0;
                b.devMode = !0 === b.userConf.devMode;
                b.noConflictPromiseMode = !0 ===
                    b.userConf.noConflictPromiseMode;
                b.isZonePromise = !0 === b.userConf.isZonePromise || !0 === b.userConf.angular || !0 === b.userConf.noConflictPromiseMode;
                b.fetch = !a.utils.isDefined(b.userConf.fetch) || !0 == b.userConf.fetch;
                b.backTimeGap = Math.abs(b.userConf.backTimeGap) || 0;
                b.neverSendImageBeacon = !a.utils.isDefined(b.userConf.beacon) || !a.utils.isDefined(b.userConf.beacon.neverSendImageBeacon) || !0 == b.userConf.beacon.neverSendImageBeacon;
                b.beaconUrlHttp = a.utils.isDefined(b.userConf.beaconUrlHttp) ? b.userConf.beaconUrlHttp :
                    "http://col.eum-appdynamics.com";
                b.beaconUrlHttps = a.utils.isDefined(b.userConf.beaconUrlHttps) ? b.userConf.beaconUrlHttps : "https://col.eum-appdynamics.com";
                b.corsEndpointPath = "/eumcollector/beacons/browser" + (b.spa2 ? "/v2" : "/v1");
                b.imageEndpointPath = "/eumcollector/adrum.gif?";
                b.appKey = b.userConf.appKey || window["adrum-app-key"] || "APP_KEY_NOT_SET";
                a = b.useHTTPSAlways || "https:" === document.location.protocol;
                var e = b.userConf.adrumExtUrlHttp || "http://cdn.appdynamics.com",
                    c = b.userConf.adrumExtUrlHttps || "https://cdn.appdynamics.com";
                b.adrumExtUrl = (a ? c : e) + "/adrum-ext.715da4562eaf56bd7c87bacb5b01e91e.js";
                b.adrumXdUrl = c + "/adrum-xd.715da4562eaf56bd7c87bacb5b01e91e.html";
                b.agentVer = "23.10.0.4353";
                b.sendImageBeacon = b.userConf.beacon && b.userConf.beacon.sendImageBeacon || window["adrum-send-image-beacon"];
                window["adrum-geo-resolver-url"] ? (e = window["adrum-geo-resolver-url"], c = e.indexOf("://"), -1 != c && (e = e.substring(c + 3)), e = (a ? "https://" : "http://") + e) : (e = b.userConf.geoResolverUrlHttps || "", c = b.userConf.geoResolverUrlHttp || "", e = a ? e : c);
                b.geoResolverUrl =
                    e;
                b.useStrictDomainCookies = !0 === window["adrum-use-strict-domain-cookies"];
                b.lj = 10;
                b.fj = 10;
                b.sendBeaconOnUnload = b.userConf.beacon && !1 === b.userConf.beacon.sendOnUnload ? !1 : !0;
                b.isReportingPaused = b.userConf.pauseReporting || !1;
                b.ja = !1 === b.userConf.longStackTrace ? !1 : !0;
                b.isAbapApp = b.userConf.isAbapApp || !1;
                b.elementIdWithNonce = b.userConf.elementIdWithNonce || void 0;
                b.releaseId = b.userConf.releaseId || void 0;
                b.disableWrappingEventListeners = b.userConf.disableWrappingEventListeners || !1;
                b.disableUsingCauseStart =
                    b.userConf.disableUsingCauseStart || !1;
                b.getAjaxResponseHeaders = b.userConf.getAjaxResponseHeaders || void 0;
                b.enableCoreWebVitals = !0 === b.userConf.enableCoreWebVitals;
                b.traceparentHeaderEnabled = !0 === b.userConf.traceparentHeaderEnabled;
                b.enableSpeedIndex = !0 === b.userConf.enableSpeedIndex
            })(h || (h = {}));
            (function(a) {
                function b(b, f, m, n) {
                    b = a.conf.beaconUrlHttps + "/eumcollector/error.gif?version=1&appKey=" + m + "&msg=" + encodeURIComponent(b.substring(0, 500));
                    n && (b += "&stack=", b += encodeURIComponent(n.substring(0, 1500 -
                        b.length)));
                    return b
                }

                function e(f, m) {
                    2 <= J || (document.createElement("img").src = b(f, 0, a.conf.appKey, m), J++)
                }

                function c(a) {
                    return 0 <= a.location.search.indexOf("ADRUM_debug=true") || 0 <= a.cookie.search(/(^|;)\s*ADRUM_debug=true/)
                }

                function f(b, f) {
                    void 0 === f && (f = z.INFO);
                    a.isDebug && v.push("" + f + b)
                }

                function n(a) {
                    f(t(arguments).join(" | "), z.ERROR)
                }

                function m(a) {
                    f(t(arguments).join(" | "), z.INFO)
                }

                function k(a) {
                    r.push(t(arguments).join(" | "))
                }

                function q(a) {
                    var b = t(arguments).join(" | ");
                    n(b);
                    e(b, null)
                }

                function p(a) {
                    void 0 ===
                        a && (a = z.INFO);
                    return x(v, function(b, f) {
                        var m = parseInt(f.charAt(0));
                        m >= a && (b += "[" + z[m] + "] " + f.slice(1).replace(/\<br\/\>/g, "\n\t") + "\n");
                        return b
                    }, "")
                }
                var t = a.utils.La,
                    x = a.utils.reduce,
                    s = a.utils.isDefined;
                a.iDR = c;
                var z;
                (function(a) {
                    a[a.DEBUG = 0] = "DEBUG";
                    a[a.INFO = 1] = "INFO";
                    a[a.ERROR = 2] = "ERROR"
                })(z = a.LOG_LVL || (a.LOG_LVL = {}));
                var h;
                (function(a) {
                    a[a.API_ERROR = 0] = "API_ERROR";
                    a[a.API_ERROR_INVALID_PARAMS = 1] = "API_ERROR_INVALID_PARAMS";
                    a[a.API_ERROR_INVALID_CONFIG = 2] = "API_ERROR_INVALID_CONFIG";
                    a[a.API_WARNING =
                        3] = "API_WARNING";
                    a[a.API_WARNING_INEFFECTIVE_CONFIG = 4] = "API_WARNING_INEFFECTIVE_CONFIG"
                })(h = a.Z || (a.Z = {}));
                a.Yb = ["JS Agent API Error:", "JS Agent API Error Invalid Parameters: ", "JS Agent API Error Invalid Configs: ", "JS Agent API Warning:", "JS Agent API Warning Ineffective Config:"];
                a.tb = " a constructor is called as a function. Don't forget keyword new.";
                a.isDebug = c(document);
                a.apiMessageConsoleOut = s(a.conf.userConf) && s(a.conf.userConf.log) && !0 === a.conf.userConf.log.apiMessageConsoleOut ? !0 : !1;
                var v = [],
                    r = [];
                a.logMessages = v;
                a.apiMessages = r;
                a.logError = n;
                a.logInfo = m;
                a.logDebug = function(a) {
                    f(t(arguments).join(" | "), z.DEBUG)
                };
                a.kq = k;
                a.error = q;
                a.reportAPIMessage = function(b, f, m, n) {
                    var q = a.Cn.apply(this, arguments);
                    k(q);
                    a.apiMessageConsoleOut && A.log(q);
                    return q
                };
                a.exception = function() {
                    if (!(1 > arguments.length)) {
                        var b = t(arguments),
                            f = a.utils.tryExtractingErrorStack(b[0]),
                            b = b.slice(1);
                        a.utils.isArray(b) && (b = b.slice(0, 20));
                        b = b.join(" | ");
                        a.logError(b);
                        e(b, f)
                    }
                };
                a.assert = function(a) {
                    for (var b = 1; b < arguments.length; b++);
                    var f = t(arguments);
                    a || (b = f[1], (f = f.slice(2)) && 0 < f.length ? q("M4", b, f) : q("M5", b))
                };
                a.Sp = p;
                a.dumpLog = a.isDebug ? function(a) {
                    void 0 === a && (a = z.INFO);
                    A.log(p(a))
                } : function() {};
                a.Xf = 0;
                a.Yf = 0;
                a.U = a.isDebug && a.utils.refs.ta ? function() {
                    a.Xf = a.utils.refs.ta.now()
                } : function() {};
                a.V = a.isDebug && a.utils.refs.ta ? function() {
                    a.Yf += a.utils.refs.ta.now() - a.Xf
                } : function() {};
                a.Cn = function(b, f, m, n) {
                    var k = "",
                        k = "",
                        q = (new window.Error).stack,
                        c, q = a.utils.isString(q) ? q.substring(5) : q + "";
                    s(c) || (c = a.utils.map(n, function(a) {
                        return null ===
                            a ? "null" : void 0 == a ? "undefined" : "" === a ? "''" : a
                    }));
                    switch (b) {
                        case h.wa:
                        case h.lp:
                            k = a.Yb[b];
                            k = s(m) ? "" + k + f + "\n in " + m + "(" + c.join(", ") + ")\n" + q : "" + k + f + "\n" + q;
                            break;
                        case h.Pe:
                            k = a.Yb[b];
                            k = "" + k + f + "\nin " + m + "(" + c.join(", ") + ")\n" + q;
                            break;
                        case h.kp:
                        case h.xi:
                            k = a.Yb[b];
                            k = "" + k + f + ", but " + m + "=" + c.join(", ") + "\n" + q;
                            break;
                        default:
                            k = a.Yb[h.wa], k = "" + k + f + "\nin " + m + "(" + c.join(", ") + ")\n" + q
                    }
                    return k
                };
                a.cIEBU = b;
                var J = 0;
                m("M6")
            })(h || (h = {}));
            (function(a) {
                var b = function() {
                        function a(b) {
                            this.max = b;
                            this.wd = 0
                        }
                        a.prototype.am =
                            function() {
                                this.yc() || this.wd++
                            };
                        a.prototype.yc = function() {
                            return this.wd >= this.max
                        };
                        a.prototype.reset = function() {
                            this.wd = 0
                        };
                        return a
                    }(),
                    e = function() {
                        function c() {
                            this.hc = [];
                            this.ye = new b(c.wj);
                            this.ee = new b(c.pj)
                        }
                        c.prototype.submit = function(b) {
                            this.push(b) && a.initEXTDone && this.processQ()
                        };
                        c.prototype.processQ = function() {
                            for (var b = this.Wk(), n = 0; n < b.length; n++) {
                                var m = b[n];
                                "function" === typeof a.commands[m[0]] ? (a.isDebug && a.logInfo("M7", m[0], m.slice(1).join(", ")), a.commands[m[0]].apply(a, m.slice(1))) :
                                    a.error("M8", m[0])
                            }
                        };
                        c.prototype.Km = function(a) {
                            return "reportXhr" === a || "reportPageError" === a
                        };
                        c.prototype.push = function(b) {
                            var n = b[0],
                                m = this.Km(n),
                                k = m ? this.ye : this.ee;
                            if (k.yc()) return a.logInfo("M9", m ? "spontaneous" : "non spontaneous", n), !1;
                            this.hc.push(b);
                            k.am();
                            return !0
                        };
                        c.prototype.Wk = function() {
                            var a = this.hc;
                            this.reset();
                            return a
                        };
                        c.prototype.size = function() {
                            return this.hc.length
                        };
                        c.prototype.reset = function() {
                            this.hc = [];
                            this.ye.reset();
                            this.ee.reset()
                        };
                        c.prototype.isSpontaneousQueueDead = function() {
                            return this.ye.yc()
                        };
                        c.prototype.isNonSpontaneousQueueDead = function() {
                            return this.ee.yc()
                        };
                        return c
                    }();
                e.wj = 100;
                e.pj = 100;
                a.CommandExecutor = e
            })(h || (h = {}));
            (function(a) {
                a.q = new a.CommandExecutor;
                a.command = function(b) {
                    for (var e = 1; e < arguments.length; e++);
                    a.isDebug && a.logInfo("M10", b, Array.prototype.slice.call(arguments).slice(1).join(", "));
                    a.q.submit(Array.prototype.slice.call(arguments))
                }
            })(h || (h = {}));
            (function(a) {
                (function(a) {
                    var e = function() {
                        function a() {
                            this.status = {}
                        }
                        a.prototype.setUp = function() {};
                        a.prototype.set = function(a,
                            b) {
                            this.status[a] = b
                        };
                        return a
                    }();
                    a.fd = e
                })(a.monitor || (a.monitor = {}))
            })(h || (h = {}));
            (function(a) {
                var b = a.utils.al,
                    e = function() {
                        function c(a, b, m, k, q, c, e, x) {
                            this.action = a || "";
                            this.Ui = b || "";
                            this.className = m || "";
                            this.tagName = k || "";
                            this.name = q || "";
                            this.text = c || "";
                            this.src = e;
                            this.item = x
                        }
                        c.Ym = function(f) {
                            var n = b(f.id) || "",
                                m = b(f.className) || "",
                                k = "",
                                q = new c;
                            f instanceof HTMLHtmlElement ? (k = "html", q.text = "#html") : f === document ? (k = "document", q.text = "#document") : f === window ? (k = "window", q.text = "#window") : f instanceof
                            XMLHttpRequest ? (k = "xhr", q.src = a.utils.isObject(f._adrumAjaxT) ? encodeURI(f._adrumAjaxT.url()) : "") : f instanceof WebSocket ? (k = "websocket", q.src = encodeURI(f.url)) : f instanceof HTMLScriptElement ? (k = "script", q.src = encodeURI(f.src)) : f instanceof HTMLAnchorElement ? (k = "a", q.text = b(f.text) || "") : f instanceof HTMLButtonElement ? (k = "button", q.name = b(f.name)) : f instanceof HTMLDivElement ? k = "div" : f instanceof HTMLImageElement ? (k = "img", q.src = encodeURI(f.src), q.text = b(f.title) || "") : f instanceof HTMLLIElement ? (k = "li",
                                q.item = f.value) : f instanceof HTMLUListElement ? k = "ul" : f instanceof HTMLFormElement ? k = "form" : f instanceof HTMLFrameElement ? (k = "frame", q.src = encodeURI(f.src)) : f instanceof HTMLInputElement ? (k = b(f.type) || "input", q.text = b(f.value), q.name = b(f.name)) : f instanceof HTMLTableElement ? k = "table" : f instanceof HTMLTableCaptionElement ? k = "tcap" : f instanceof HTMLTableCellElement ? k = "td" : f instanceof HTMLTableRowElement ? k = "tr" : (k = a.utils.isDefined(f.tagName) ? b(f.tagName) : "", a.logInfo("M11", k));
                            q.Ui = n;
                            q.className = m;
                            q.tagName =
                                k;
                            a.utils.isString(q.text) && (q.text = a.utils.isDefined(String.prototype.trim) ? q.text.trim() : q.text, q.text = q.text.substring(0, 30));
                            return q
                        };
                        return c
                    }();
                a.Ka = e
            })(h || (h = {}));
            var g = h.utils.La,
                l = h.utils.isFunction;
            (function(a) {
                var b = a.utils.generateGUID,
                    e;
                (function(a) {
                    a[a.USER = 0] = "USER";
                    a[a.TIMER = 1] = "TIMER";
                    a[a.XHR = 2] = "XHR";
                    a[a.RESOURCE = 3] = "RESOURCE";
                    a[a.PROMISE = 4] = "PROMISE";
                    a[a.FETCH = 5] = "FETCH";
                    a[a.BASE_PAGE_LOAD = 6] = "BASE_PAGE_LOAD";
                    a[a.OTHER = 7] = "OTHER"
                })(e = a.CauseType || (a.CauseType = {}));
                a.$g = 50;
                var c =
                    function() {
                        return function(f, m, k) {
                            this.start = a.utils.now();
                            this.parent = f;
                            this.Xc = m;
                            this.guid = b();
                            this.type = k
                        }
                    }();
                a.$b = c;
                var f = function() {
                    function b() {}
                    b.ig = function() {
                        return b.events
                    };
                    b.Gg = function(b) {
                        return a.utils.isDefined(b) && a.utils.isFunction(b.handleEvent)
                    };
                    b.vk = function(b) {
                        b = this.rl(b);
                        var f = b.cl;
                        b.count < a.$g || (f.parent = null)
                    };
                    b.rl = function(b) {
                        var f = b;
                        b = b.parent;
                        for (var n = 1; b && n < a.$g;) n++, f = b, b = b.parent;
                        return {
                            count: n,
                            cl: f
                        }
                    };
                    b.co = function() {
                        this.de = !0
                    };
                    b.uk = function(a) {
                        this.de && (a.parent =
                            null, this.de = !1)
                    };
                    b.sh = function(f, k, q, c) {
                        var e, x = k.guid;
                        b.ua(k);
                        try {
                            b.Gg(f) ? e = f.handleEvent.apply(f, c) : l(f) && (e = f.apply(q, c))
                        } catch (s) {
                            throw a.conf.ja && (f = a.b.ig(), k = f.length, s.stack && f && 0 < k && (s.stack += b.Yh(f[k - 1]))), s;
                        } finally {
                            b.Q(x)
                        }
                        return e
                    };
                    b.cd = function(f, k, q, c) {
                        if (!a.utils.isDefined(k) || k.L) return k;
                        c = c || !1;
                        var e, x = a.conf.ja ? a.utils.Sa(f) : "";
                        c || (e = b.ra());
                        return function(c) {
                            var p = b.Qa(f, c, e, q);
                            a.conf.ja && (p.oa = x);
                            return b.sh(k, p, this, arguments)
                        }
                    };
                    b.Qa = function(f, k, q, p) {
                        q ? a.logInfo("M12", f, q.Xc.action) :
                            a.logInfo("M13", f);
                        a.utils.isDefined(k) ? (k = a.Ka.Ym(k.target || k.srcElement), k.action = f) : k = new a.Ka(f);
                        f = new c(q, k, p);
                        b.uk(f);
                        b.vk(f);
                        return f
                    };
                    b.fp = function(f, k, q) {
                        if (!a.utils.isDefined(k) || k.L) return k;
                        var c = b.Qa(f, void 0, b.ra(), q),
                            e = a.conf.ja ? a.utils.Sa(f) : "";
                        return function() {
                            new a.Ka(f);
                            a.conf.ja && (c.oa = e);
                            return b.sh(k, c, this, arguments)
                        }
                    };
                    b.Fq = function(a, f) {
                        return function() {
                            var q = f.apply(this, arguments);
                            b.rd(a);
                            return q
                        }
                    };
                    b.ra = function() {
                        return 0 < b.events.length ? b.events[b.events.length - 1] : null
                    };
                    b.ua = function(a) {
                        b.events.push(a)
                    };
                    b.Q = function(a) {
                        var f = b.events,
                            q = f.length,
                            c = null;
                        if (a)
                            for (q -= 1; 0 <= q; q--)
                                if (a === f[q].guid) return c = b.events.splice(q, 1), c[0];
                        return b.events.pop()
                    };
                    b.sd = function(b, f) {
                        var n = b,
                            c = 1,
                            e = "";
                        if (!a.utils.isDefined(n)) return null;
                        for (; a.utils.isDefined(n.parent);) e = " -> " + n.Xc.action + e, n = n.parent, c += 1;
                        var x = a.utils.now();
                        a.utils.isDefined(n.Xc) && (e = n.Xc.action + e + " -> " + f);
                        a.logInfo("M14", e);
                        a.logInfo("M15", n.start, c);
                        a.logInfo("M16", x - n.start);
                        return n
                    };
                    b.rd = function(a) {
                        return b.sd(b.ra(),
                            a)
                    };
                    b.Yh = function(b) {
                        var f = "";
                        if (a.utils.isDefined(b)) {
                            for (; a.utils.isDefined(b.parent);) b.oa && (f = f + "\n" + b.oa), b = b.parent;
                            f += b.oa ? "\n" + b.oa : ""
                        }
                        return f
                    };
                    b.Ql = function() {
                        var f = b.rd(void 0);
                        if (a.utils.isDefined(f) && a.utils.isDefined(f.type)) return [e.TIMER, e.USER].some(function(a) {
                            return f.type == a
                        }) ? f : void 0
                    };
                    b.pm = function(a) {
                        if (l(a)) return a;
                        var b = "" + a;
                        return function() {
                            eval.call(window, b)
                        }
                    };
                    b.setUp = function() {
                        b.events = [];
                        var f = a.utils.refs;
                        [{
                            ih: f.setTimeout,
                            dg: "setTimeout"
                        }, {
                            ih: f.setInterval,
                            dg: "setInterval"
                        }].forEach(function(a) {
                            var f =
                                a.ih,
                                m = a.dg;
                            window[m] = function(a) {
                                var k = g(arguments);
                                if (a) {
                                    if (a.usedByAgent) return f.apply(window, k);
                                    var c = b.Nm(m, arguments[1]) ? e.OTHER : e.TIMER,
                                        c = b.fp(m, b.pm(a), c);
                                    k[0] = c;
                                    return f.apply(window, k)
                                }
                                f.apply(window, k)
                            }
                        });
                        a.conf.ja && (f = b.Qa("pageLoadInit", null, null, e.BASE_PAGE_LOAD), b.ua(f), b.Na = f.guid)
                    };
                    b.Nm = function(b, f) {
                        return "setTimeout" == b && (a.utils.isDefined(f) && 0 == f || !a.utils.isDefined(f))
                    };
                    return b
                }();
                f.events = [];
                f.Na = "";
                f.de = !1;
                a.b = f
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = a.utils.La,
                        c = a.utils.isDefined;
                    window.ADRUM.aop = b;
                    b.support = function(a) {
                        return !a || "apply" in a
                    };
                    b.around = function(f, n, m, k, q) {
                        a.assert(b.support(f), "M17");
                        f = f || function() {};
                        return function() {
                            if (a.isDebug) try {
                                a.logInfo("M18", k, e(arguments).join(", "))
                            } catch (b) {
                                a.logError("M19", c(b.stack) || b.toString())
                            }
                            var t = e(arguments),
                                x, s = null;
                            try {
                                if (n && (x = n.apply(this, t))) {
                                    var z = a.utils.Fl(x),
                                        s = x[z]; - 1 !== z && x.splice(z, 1)
                                }
                            } catch (h) {
                                a.exception(h, "M20", k, h)
                            }
                            a.assert(!x || a.utils.isArray(x));
                            z = void 0;
                            try {
                                z = f.apply(this, x || t)
                            } catch (v) {
                                throw a.logInfo(v,
                                    "M21", k, v), a.conf.ja && a.b && (t = a.b.ig(), x = t.length, v.stack && 0 < x && (v.stack += a.b.Yh(t[x - 1]))), q && q(v), v;
                            } finally {
                                try {
                                    m && (s ? (s.adrumArgs.origFuncResult = z, t.push(s)) : c(z) && (s = {
                                        adrumArgs: {
                                            origFuncResult: z
                                        }
                                    }, t.push(s)), m.apply(this, t))
                                } catch (r) {
                                    a.exception(r, "M22", k, r)
                                }
                            }
                            return z
                        }
                    };
                    b.before = function(a, n, m) {
                        return b.around(a, n, null, m)
                    };
                    b.after = function(a, n, m) {
                        return b.around(a, null, n, m)
                    };
                    b.forceWrap = function(b) {
                        var n = b.customDescriptorConfig || {},
                            m = null,
                            k = b.parentObject,
                            q = b.property,
                            p = b.setUpFunc,
                            e = b.wrapNewFunctionAgain ||
                            !1,
                            x = b.propertyWrappedFunctionName;
                        if (k && q) {
                            m = Object.getOwnPropertyDescriptor(k, q);
                            if (!m || m.configurable) {
                                m ? (delete m.writable, delete m.value) : m = {
                                    configurable: !0,
                                    enumerable: !0
                                };
                                var s = m.set,
                                    z = m.get;
                                m.set = n.set || function(m) {
                                    !0 !== m.usedByAgent && (c(s) && s(arguments), c(b.bb) && !e || !a.utils.isFunction(p) || p(m))
                                };
                                m.get = n.get || function() {
                                    var m = z ? z() : a.utils.refs[x];
                                    c(b.bb) && (m = b.bb);
                                    return m
                                }
                            } else a.logInfo("M23", x);
                            Object.defineProperty(k, q, m)
                        } else a.error("M24")
                    }
                })(a.aop || (a.aop = {}))
            })(h || (h = {}));
            (function(a) {
                a =
                    a.EventType || (a.EventType = {});
                a[a.PageView = 0] = "PageView";
                a[a.Ajax = 2] = "Ajax";
                a[a.VPageView = 3] = "VPageView";
                a[a.Error = 4] = "Error";
                a[a.WebVital = 5] = "WebVital";
                a[a.IFRAME = 1] = "IFRAME";
                a[a.ABSTRACT = 100] = "ABSTRACT";
                a[a.ADRUM_XHR = 101] = "ADRUM_XHR";
                a[a.NG_VIRTUAL_PAGE = 102] = "NG_VIRTUAL_PAGE"
            })(h || (h = {}));
            (function(a) {
                var b = a.events || (a.events = {});
                b.K = {};
                b.K[a.EventType.ABSTRACT] = {
                    guid: "string",
                    url: "string",
                    parentGUID: "string",
                    parentUrl: "string",
                    parentType: "number",
                    parentPageName: "string",
                    timestamp: "number"
                };
                b.K[a.EventType.VPageView] = {
                    resTiming: "object"
                };
                b.K[a.EventType.NG_VIRTUAL_PAGE] = {
                    digestCount: "number"
                };
                b.K[a.EventType.Ajax] = {
                    method: "string",
                    parentPhase: "string",
                    parentPhaseId: "number",
                    error: "object",
                    parameter: "object",
                    xhrStatus: "number",
                    dataObject: "object"
                };
                b.K[a.EventType.ADRUM_XHR] = {
                    allResponseHeaders: "string"
                };
                b.K[a.EventType.Error] = {
                    msg: "string",
                    line: "number",
                    stack: "string"
                };
                b.K[a.EventType.WebVital] = {
                    coreWebVitalsMetrics: "object"
                }
            })(h || (h = {}));
            (function(a) {
                var b = function() {
                    function a() {
                        this.entries = {}
                    }
                    a.prototype.mark =
                        function(a, b) {
                            e.mark.apply(this, arguments)
                        };
                    a.prototype.getTiming = function(a) {
                        return (a = this.getEntryByName(a)) && a.startTime
                    };
                    a.prototype.measure = function(a, b, m) {
                        e.measure.apply(this, arguments)
                    };
                    a.prototype.getEntryByName = function(a) {
                        return e.getEntryByName.call(this, a)
                    };
                    return a
                }();
                b.vd = function(a) {
                    return e.vd(a)
                };
                a.PerformanceTracker = b;
                var e;
                (function(b) {
                    var f = a.utils.hasOwnPropertyDefined,
                        n = a.utils.fb(),
                        m = a.utils.now;
                    b.mark = function(b, f) {
                        this.entries[b] = {
                            name: b,
                            entryType: "mark",
                            startTime: a.utils.isDefined(f) ?
                                f : m(),
                            duration: 0
                        }
                    };
                    b.measure = function(b, q, c) {
                        f(this.entries, q) && f(this.entries, c) ? this.entries[b] = {
                            name: b,
                            entryType: "measure",
                            startTime: q ? this.entries[q].startTime : n,
                            duration: (c ? this.entries[c].startTime : m()) - (q ? this.entries[q].startTime : n)
                        } : a.error("M25", f(this.entries, q) ? c : q)
                    };
                    b.getEntryByName = function(a) {
                        return this.entries[a] || null
                    };
                    b.vd = function(a) {
                        return a + n
                    }
                })(e || (e = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    function e(b, f) {
                        b = b || {};
                        for (var k in b) f[k] = function() {
                            var f = k,
                                m = b[k];
                            return function(b) {
                                var n =
                                    "_" + f,
                                    k = this[n];
                                if (a.utils.isDefined(b))
                                    if (typeof b === m) this[n] = b;
                                    else throw n = "wrong type of " + f + " value, " + typeof b + " passed in but should be a " + m + ".", a.reportAPIMessage(a.Z.Pe, n, "ADRUM.report", Array.prototype.slice.call(arguments)), TypeError(n);
                                return k
                            }
                        }()
                    }

                    function c(a) {
                        var b = {},
                            f;
                        for (f in a) {
                            var q = a[f];
                            b[q.start] = !0;
                            b[q.end] = !0
                        }
                        return b
                    }
                    var f = function() {
                        function b(f) {
                            this.perf = new a.PerformanceTracker;
                            "Object" === this.constructor.name && a.reportAPIMessage(a.Z.wa, a.tb);
                            this.timestamp(a.utils.now());
                            this.guid(a.utils.generateGUID());
                            this.url(document.URL);
                            this.Sc(f)
                        }
                        b.prototype.type = function() {
                            return a.EventType.ABSTRACT
                        };
                        b.prototype.Sc = function(b) {
                            if (a.utils.isObject(b))
                                for (var f in b) {
                                    var n = this[f] || this["mark" + a.utils.Hf(f)];
                                    n && a.utils.isFunction(n) && n.call(this, b[f])
                                }
                        };
                        b.od = function(a, b, f) {
                            return {
                                guid: function() {
                                    return a
                                },
                                url: function() {
                                    return b
                                },
                                type: function() {
                                    return f
                                }
                            }
                        };
                        b.prototype.Il = function() {
                            return b.od(this.parentGUID(), this.parentUrl(), this.parentType())
                        };
                        b.prototype.parent = function(b) {
                            var f =
                                this.Il();
                            a.utils.isDefined(b) && (a.utils.isFunction(b.guid) && a.utils.isFunction(b.url) && a.utils.isFunction(b.type) ? (this.parentGUID(b.guid()), this.parentUrl(b.url()), this.parentType(b.type())) : a.reportAPIMessage(a.Z.wa, "object is not a valid EventIdentifier", "EventTracker.parent", Array.prototype.slice.call(arguments)));
                            return f
                        };
                        return b
                    }();
                    b.EventTracker = f;
                    b.Ma = e;
                    b.Bf = function(b, f) {
                        b = b || {};
                        var k = c(b),
                            q;
                        for (q in k) k = a.utils.Hf(q), f["mark" + k] = a.utils.jh(function(a, b) {
                            this.perf.mark(a, b)
                        }, q), f["get" +
                            k] = a.utils.jh(function(a) {
                            return this.perf.getTiming(a)
                        }, q)
                    };
                    e(b.K[a.EventType.ABSTRACT], f.prototype)
                })(a.events || (a.events = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = function(b) {
                        function f(n) {
                            n = b.call(this, n) || this;
                            n.constructor != f && a.reportAPIMessage(a.Z.wa, a.tb, "ADRUM.events.Error", []);
                            return n
                        }
                        u(f, b);
                        f.prototype.type = function() {
                            return a.EventType.Error
                        };
                        return f
                    }(b.EventTracker);
                    b.Error = e;
                    b.Ma(b.K[a.EventType.Error], e.prototype)
                })(a.events || (a.events = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e =
                        function() {
                            function b() {}
                            b.setUp = function() {
                                b.perf = a.utils.refs.ta;
                                a.utils.isObject(b.perf) && a.utils.isObject(b.perf.timing) || (b.perf = void 0)
                            };
                            return b
                        }();
                    e.perf = null;
                    b.PerformanceWrapper = e
                })(a.monitor || (a.monitor = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = function() {
                        function c() {
                            this.navTiming = null
                        }
                        c.prototype.Of = function() {
                            var f = b.PerformanceWrapper.perf;
                            if (f = f && f.timing)
                                if (f.navigationStart && f.navigationStart <= f.loadEventEnd) {
                                    var n = {},
                                        m;
                                    for (m in f) {
                                        var k = f[m];
                                        "number" === typeof k && (n[m] =
                                            k)
                                    }
                                    this.navTiming = n
                                } else a.logInfo("M27");
                            else a.logInfo("M26")
                        };
                        c.prototype.setUp = function() {
                            b.PerformanceWrapper.setUp()
                        };
                        return c
                    }();
                    b.NavTimingMonitor = e;
                    b.navMonitor = new b.NavTimingMonitor
                })(a.monitor || (a.monitor = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = function() {
                        function c() {
                            this.le = null;
                            b.PerformanceWrapper.setUp();
                            this.resourceBuffer = [];
                            this.basePageResourceBuffer = [];
                            this.jf = 500;
                            this.jd = 150;
                            this.Fj = 3E3;
                            this.setResourceTimingBufferSize();
                            this.eo()
                        }
                        c.prototype.setUp = function() {
                            b.PerformanceWrapper.setUp();
                            a.utils.isDefined(b.PerformanceWrapper.perf) && a.utils.isFunction(b.PerformanceWrapper.perf.getEntriesByType) ? a.utils.isFunction(b.PerformanceWrapper.perf.addEventListener) ? b.PerformanceWrapper.perf.addEventListener("resourcetimingbufferfull", this.Cb.bind(this)) : "onresourcetimingbufferfull" in b.PerformanceWrapper.perf ? a.utils.isFunction(b.PerformanceWrapper.perf.ke) ? b.PerformanceWrapper.perf.ke = a.aop.around(b.PerformanceWrapper.perf.ke, this.Cb.bind(this)) : b.PerformanceWrapper.perf.ke = this.Cb.bind(this) :
                                a.utils.refs.setInterval.call(window, this.Qn.bind(this), this.Fj) : a.logInfo("M28");
                            this.ko();
                            this.Rn()
                        };
                        c.prototype.ko = function() {
                            var f = a.conf.userConf && a.conf.userConf.resTiming && a.conf.userConf.resTiming.bufSize;
                            a.utils.isDefined(b.PerformanceWrapper.perf) && a.utils.isFunction(b.PerformanceWrapper.perf.setResourceTimingBufferSize) && a.utils.isNumber(f) && 0 < f && (this.jd = f)
                        };
                        c.prototype.Rn = function() {
                            var f = b.PerformanceWrapper.perf;
                            a.utils.isDefined(f) && (a.utils.isFunction(f.setResourceTimingBufferSize) &&
                                (f.setResourceTimingBufferSize = a.aop.around(f.setResourceTimingBufferSize, function() {
                                    a.utils.isDefined(arguments) && a.utils.isDefined(arguments[0]) && (this.jd = arguments[0])
                                }.bind(this))), a.utils.isFunction(f.clearResourceTimings) && (f.clearResourceTimings = a.aop.around(f.clearResourceTimings, function() {
                                    this.Cb()
                                }.bind(this))))
                        };
                        c.prototype.Nf = function() {
                            this.basePageResourceBuffer = this.fg()
                        };
                        c.prototype.Cb = function() {
                            this.resourceBuffer = this.fg()
                        };
                        c.prototype.Qn = function() {
                            this.Ib().length >= this.jd &&
                                this.Cb()
                        };
                        c.prototype.Ib = function() {
                            var f = b.PerformanceWrapper.perf,
                                n = [];
                            f && f.getEntriesByType && (f = f.getEntriesByType("resource")) && f.length && 0 < f.length && f.unshift && (n = f);
                            0 == n.length && a.logInfo("M29");
                            return n
                        };
                        c.prototype.Ml = function(b, n) {
                            return a.utils.filter(this.resourceBuffer, function(a) {
                                return b + a.startTime >= n
                            })
                        };
                        c.prototype.Nl = function(a, b) {
                            this.resourceBuffer = this.resourceBuffer.concat(this.Ib());
                            var m = this.Ml(a, b);
                            this.clearResourceTimings();
                            this.resourceBuffer = [];
                            return m
                        };
                        c.prototype.eo =
                            function() {
                                var f = b.PerformanceWrapper.perf;
                                a.utils.isDefined(f) && a.utils.isFunction(f.clearResourceTimings) && (this.le = f.clearResourceTimings.bind(f))
                            };
                        c.prototype.setResourceTimingBufferSize = function() {
                            var f = b.PerformanceWrapper.perf,
                                n = a.conf.userConf && a.conf.userConf.resTiming && a.conf.userConf.resTiming.bufSize;
                            !a.utils.isNumber(n) || 0 >= n ? a.logInfo("M30") : f && a.utils.isFunction(f.setResourceTimingBufferSize) ? f.setResourceTimingBufferSize(n) : a.logInfo("M31")
                        };
                        c.prototype.fg = function() {
                            var b = this.Ib();
                            if (this.resourceBuffer.length + b.length > this.jf) return a.logInfo("M32"), this.resourceBuffer.concat(b.slice(0, this.jf - this.resourceBuffer.length));
                            this.clearResourceTimings();
                            return this.resourceBuffer.concat(b)
                        };
                        c.prototype.clearResourceTimings = function() {
                            a.conf.clearResTiming && a.utils.isFunction(this.le) && this.le()
                        };
                        return c
                    }();
                    b.ResourceMonitor = e;
                    b.resourceMonitor = new b.ResourceMonitor
                })(a.monitor || (a.monitor = {}))
            })(h || (h = {}));
            (function(a) {
                (function(a) {
                    function e(a) {
                        return a.nodeName.toLowerCase()
                    }

                    function c(a) {
                        return "video" == e(a)
                    }

                    function f(a) {
                        return "image" == e(a)
                    }

                    function n(a) {
                        return "svg" == e(a)
                    }

                    function m(a) {
                        return "use" == e(a)
                    }

                    function k(a) {
                        return a ? 0 === a.lastIndexOf("video/", 0) || 0 === a.lastIndexOf("image/", 0) || 0 === a.lastIndexOf("font/", 0) || 0 === a.lastIndexOf("model/", 0) || 0 === a.lastIndexOf("text/", 0) : !1
                    }

                    function q(a) {
                        return "embed" == e(a) && (a.type ? k(a.type) : k(a.getAttribute("type")))
                    }

                    function p(a) {
                        return "object" == e(a) && (a.type ? k(a.type) : k(a.getAttribute("type")))
                    }

                    function t(a) {
                        return "img" == e(a)
                    }

                    function x(a) {
                        return "script" == e(a)
                    }

                    function s(a) {
                        return "link" == e(a)
                    }

                    function z(f, m) {
                        if (!s(f)) return !1;
                        var n = f.attributes.getNamedItem("rel");
                        return a.isDefined(n) ? n.value == m : !1
                    }

                    function h(a) {
                        return z(a, "stylesheet")
                    }

                    function v(f) {
                        f = a.isDefined(f.attributes) ? f.attributes.getNamedItem("src") || f.attributes.getNamedItem("href") : void 0;
                        return a.isDefined(f) ? f.value : void 0
                    }

                    function r(a) {
                        return x(a) || h(a)
                    }
                    a.El = e;
                    a.Ng = c;
                    a.eq = f;
                    a.dq = n;
                    a.Jg = m;
                    a.Eg = function(a) {
                        return "canvas" == e(a)
                    };
                    a.Lg = function(f) {
                        return f instanceof
                        a.refs.Nj
                    };
                    a.bq = k;
                    a.hg = function(a) {
                        return (a.right - a.left) * (a.bottom - a.top)
                    };
                    a.aq = q;
                    a.cq = p;
                    a.zm = t;
                    a.Im = x;
                    a.Yp = s;
                    a.Zp = z;
                    a.Mm = h;
                    a.Fm = function(a) {
                        return z(a, "preload")
                    };
                    a.ib = function(a) {
                        return t(a) || p(a) || q(a) || c(a) || f(a) || n(a) || m(a)
                    };
                    a.Lb = function(a, b) {
                        var f = b || window.getComputedStyle(a);
                        return "none" !== f.getPropertyValue("display") && "hidden" !== f.getPropertyValue("visibility")
                    };
                    a.Qd = function(a) {
                        var b = "";
                        a instanceof HTMLImageElement ? b = a.currentSrc || a.src : a instanceof HTMLEmbedElement ? b = a.src : a instanceof
                        HTMLObjectElement ? b = a.data : "undefined" != typeof HTMLVideoElement && a instanceof HTMLVideoElement ? b = a.currentSrc || a.src : a instanceof SVGImageElement ? b = a.href.baseVal : a instanceof SVGUseElement && (b = a.href.baseVal);
                        return b
                    };
                    a.Tp = function(a) {
                        var b = "";
                        a instanceof HTMLImageElement ? b = "img" : a instanceof HTMLEmbedElement ? b = "embed" : a instanceof HTMLObjectElement ? b = "object" : "undefined" != typeof HTMLVideoElement && a instanceof HTMLVideoElement ? b = "video" : a instanceof SVGImageElement ? b = "image" : a instanceof SVGUseElement &&
                            (b = "use");
                        return b
                    };
                    a.gb = v;
                    a.tc = function(f) {
                        var m = v(f);
                        return m && 0 != m.length ? r(f) ? (a.isDefined(f.adrumNodeGUID) || (f.adrumNodeGUID = a.generateGUID()), f.adrumNodeGUID) : m : null
                    };
                    a.$p = r
                })(a.utils || (a.utils = {}))
            })(h || (h = {}));
            (function(a) {
                var b = function() {
                    function b() {
                        this.qm = 0.2;
                        this.rb = 0;
                        this.Kb = !1;
                        this.Pa = a.conf.spa2;
                        this.qb = this.A = this.c = this.Aa = 0;
                        this.ea = [];
                        this.Nc = [];
                        this.Ec = this.j = this.ka = 0;
                        this.eb = null;
                        this.pc = 0;
                        this.zc = !1;
                        this.yd = 3;
                        this.sc = null;
                        this.$c = this.ad = 0;
                        this.viewport = {
                            top: 0,
                            left: 0,
                            bottom: this.$c,
                            right: this.ad
                        };
                        this.Va = 1
                    }
                    b.prototype.setUp = function() {
                        this.P = {};
                        this.Nb = {};
                        this.Va = 1;
                        this.ka = a.utils.now();
                        this.j = 0;
                        this.Mb = [];
                        this.Ab = [];
                        this.Fb = [];
                        this.A = this.c = this.Ec = 0;
                        var b = window.MutationObserver;
                        this.zc = a.utils.isDefined(a.conf.considerCarouselForVCT) ? a.conf.considerCarouselForVCT : !0;
                        this.Mf();
                        a.utils.addEventListener(window, "resize", a.utils.Ok(this.Mf).bind(this));
                        a.utils.isDefined(b) && (a.utils.isDefined(window.Zone) && a.utils.isDefined(window.Zone.__symbol__) && a.utils.isDefined(window.Zone.__symbol__("MutationObserver")) ?
                            this.Hc = new(window[window.Zone.__symbol__("MutationObserver")])(this.fh.bind(this)) : this.Hc = new b(this.fh.bind(this)), this.Hc.observe(document.documentElement, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0,
                                attributeFilter: ["src", "href"]
                            }), a.logInfo("M33"))
                    };
                    b.prototype.fh = function(b) {
                        var f = this;
                        a.U();
                        b.forEach(function(a) {
                            switch (a.type) {
                                case "childList":
                                    [].slice.call(a.addedNodes).forEach(function(a) {
                                        f.Ef(a)
                                    });
                                    break;
                                case "attributes":
                                    f.Ef(a.target)
                            }
                        });
                        a.V()
                    };
                    b.prototype.Mf = function() {
                        this.ad = a.utils.isDefined(window.innerWidth) &&
                            a.utils.isDefined(document.documentElement.clientWidth) ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth;
                        this.$c = a.utils.isDefined(window.innerHeight) && a.utils.isDefined(document.documentElement.clientHeight) ? Math.min(window.innerHeight, document.documentElement.clientHeight) : window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight;
                        a.logInfo("M34", this.ad, this.$c);
                        this.viewport = {
                            top: 0,
                            left: 0,
                            bottom: this.$c,
                            right: this.ad
                        }
                    };
                    b.prototype.start = function() {
                        a.U();
                        this.setUp();
                        a.V();
                        a.logInfo("M35")
                    };
                    b.prototype.reset = function() {
                        this.P = {};
                        this.j = this.rb = 0;
                        this.Nb = {};
                        this.Va = 1;
                        this.Ec = 0;
                        this.Mb = [];
                        this.sc = null;
                        this.yd = 3;
                        this.A = this.qb = this.c = 0;
                        this.Ab = [];
                        this.Fb = [];
                        this.zc = a.utils.isDefined(a.conf.considerCarouselForVCT) ? a.conf.considerCarouselForVCT : !0;
                        this.ea = [];
                        this.Nc = [];
                        a.logInfo("M36")
                    };
                    b.prototype.Ef = function(b) {
                        a.U();
                        var f = a.utils.now();
                        if (a.utils.Jg(b) || !a.utils.ib(b) || b.isAdrumTrackedNode) a.utils.Eg(b) && !b.adrumNodeId ? (a.logInfo("M41"), this.zb(b, f)) : a.utils.Lg(b) && (this.rb = Math.max(this.rb, f));
                        else {
                            this.Kb || (this.O = this.O.bind(this), this.B = this.B.bind(this), this.O.L = !0, this.Kb = this.B.L = !0);
                            this.j++;
                            a.logInfo("M37", this.j);
                            var n = a.utils.gb(b);
                            a.logInfo("M38", n, f);
                            a.utils.Ng(b) ? (b.addEventListener("loadeddata", this.O), a.logInfo("M39", n)) : (b.addEventListener("load", this.O), a.logInfo("M40", n));
                            b.addEventListener("error", this.B);
                            b.isAdrumTrackedNode = !0
                        }
                        a.V()
                    };
                    b.prototype.O = function(b) {
                        a.U();
                        var f = a.utils.now();
                        this.pc || (this.pc = f);
                        this.ka = f;
                        b = b.target;
                        var n = a.utils.Qd(b);
                        this.Ec++;
                        this.zc && this.Un();
                        a.utils.isDefined(n) && 0 < n.length ? "data:" != n.substring(0, 5) || b.adrumNodeId ? this.$j(n, f, b) : (a.logInfo("M42"), this.zb(b, f)) : b instanceof SVGElement && !b.adrumNodeId && (a.logInfo("M43"), this.zb(b, f));
                        b && b.isAdrumTrackedNode && (this.Qb(b), this.j--, a.logInfo("M44", this.j));
                        a.V()
                    };
                    b.prototype.B = function(b) {
                        var f = b.target;
                        f && f.isAdrumTrackedNode && (this.Qb(f),
                            this.j--, b = a.utils.Qd(b.target), a.logInfo("M45", b))
                    };
                    b.prototype.Qb = function(a) {
                        a.removeEventListener("load", this.O);
                        a.removeEventListener("error", this.B)
                    };
                    b.prototype.wc = function(b) {
                        return this.T(b) && a.utils.Lb(b)
                    };
                    b.prototype.$j = function(b, f, n) {
                        a.utils.isDefined(this.P[b]) ? this.wc(n) && (this.P[b] = {
                            da: f,
                            element: n
                        }, a.logInfo("M46", b, f)) : (this.P[b] = {
                            da: f,
                            element: n
                        }, a.logInfo("M47", b, f))
                    };
                    b.prototype.zb = function(b, f) {
                        a.logInfo("M48", this.Va, f, b.outerHTML);
                        b.adrumNodeId = this.Va;
                        this.Nb[this.Va] = {
                            da: f,
                            element: b
                        };
                        this.Va += 1
                    };
                    b.prototype.gn = function() {
                        var a = 2,
                            b = 3;
                        return function() {
                            var n = b + a;
                            a = b;
                            return b = n
                        }
                    };
                    b.prototype.vm = function() {
                        this.sc = this.sc || this.gn();
                        return this.Ec >= this.yd ? (this.yd = this.sc(), !0) : !1
                    };
                    b.prototype.Un = function() {
                        var b = this;
                        this.vm() ? (this.ec(this.P), this.ec(this.Nb), clearTimeout(this.eb), this.eb = null) : b.eb || (b.eb = a.utils.refs.setTimeout.call(window, function() {
                            b.ec(b.P);
                            b.ec(b.Nb);
                            clearTimeout(b.eb);
                            b.eb = null
                        }, 2E3))
                    };
                    b.prototype.ec = function(a) {
                        for (var b = Object.keys(a), n = b.length,
                                m = 0; m < n; m++) {
                            var k = a[b[m]],
                                q = this.Nd(k.element),
                                p = q.top + "-" + q.right + "-" + q.bottom + "-" + q.left;
                            k.Gd ? 30 >= k.nc.length && (k.nc.push(q), k.Eb = k.Eb + "|" + p) : (k.Gd = window.getComputedStyle(k.element), k.nc = [q], k.Eb = p, k.T = this.T(k.element))
                        }
                    };
                    b.prototype.Fg = function(b, f) {
                        if (!a.conf.considerCarouselForVCT) return !1;
                        var n = !1,
                            m = f.Eb;
                        if (m) {
                            var m = m.split("|"),
                                k = m.length;
                            if (k) {
                                var q = 0,
                                    p = null,
                                    e = this.Nd(b);
                                2 == k && (p = e.top + "-" + e.right + "-" + e.bottom + "-" + e.left, m.push(p), k++);
                                for (var x = 0; x < k - 1 && !(m[x] !== m[x + 1] && (q++, 2 <= q)); x++);
                                2 <= q && (this.Mb.push(f), n = !0, p && (f.Eb = f.Eb + "|" + p, f.nc.push(e)))
                            }
                        }
                        return n
                    };
                    b.prototype.Kk = function(a) {
                        for (var b = a.length, n = [], m = [], k = [], q = [], p = 0; p < b; p++) {
                            var e = a[p],
                                x = e.nc,
                                s = x[0],
                                x = x[x.length - 1];
                            s && x && (50 < Math.abs(s.left - x.left) ? 50 < Math.abs(s.right - x.right) ? m.push(e) : q.push(e) : 50 < Math.abs(s.top - x.top) ? 50 < Math.abs(s.bottom - x.bottom) ? k.push(e) : q.push(e) : q.push(e))
                        }
                        q.length && (this.Fb = q);
                        this.Pf(m, n);
                        this.Pf(k, n);
                        n.length && (this.Ab = n)
                    };
                    b.prototype.tl = function(a, b) {
                        for (var n = [], m = 0; m < a.length; m++) {
                            for (var k = !0, q = a[m].element.classList, p = 0; p < b.length; p++)
                                if (!q.contains(b[m])) {
                                    k = !1;
                                    break
                                }
                            k && (n.push(a[m]), a.splice(m, 1), m--)
                        }
                        return n
                    };
                    b.prototype.Pf = function(a, b) {
                        for (var n = 0; n < a.length; n++) b.push(this.tl(a, a[0].element.classList))
                    };
                    b.prototype.To = function(b, f, n, m) {
                        b.adrumConsiderForVCT && (this.c = Math.max(this.c, n - m), this.Ha(this.ea, {
                            element: b,
                            X: n - m
                        }), a.logInfo("M49", f, this.c));
                        delete b.adrumConsiderForVCT
                    };
                    b.prototype.Po = function(b, f, n, m) {
                        var k = this.pg(f);
                        a.utils.isDefined(k) && (n = k.startTime - (n - this.Aa),
                            m = k.duration * m + n, a.logInfo("M50", f, m), a.logInfo("M51", k.duration, n), this.Pa && (this.A = Math.max(this.A, m), a.logInfo("M52", f, this.A)), (0 >= this.pc || m < this.pc) && this.T(b) && (this.c = Math.max(this.c, m), a.logInfo("M53", f, a.c)), this.T(b) && this.Ha(this.ea, {
                                element: b,
                                X: m
                            }))
                    };
                    b.prototype.Qo = function(b, f) {
                        var n = this.Nb[b.adrumNodeId];
                        if (a.utils.isDefined(n)) {
                            var m = n.da;
                            a.utils.Lb(b, n.Gd) && (this.Pa && (this.A = Math.max(this.A, m - f), a.logInfo("M54", b.adrumNodeId, m)), !this.Fg(b, n) && this.T(b) && (a.utils.isDefined(b.adrumConsiderForVCT) ?
                                (b.adrumConsiderForVCT && (this.c = Math.max(this.c, m - f), this.Ha(this.ea, {
                                    element: b,
                                    X: m - f
                                }), a.logInfo("Element without src and from DOMObserver - VCT ", this.c)), delete b.adrumConsiderForVCT) : (this.c = Math.max(this.c, m - f), this.Ha(this.ea, {
                                    element: b,
                                    X: m - f
                                }), a.logInfo("Element without src and from Mutation Observer - VCT", this.c)), a.logInfo("M55", b.adrumNodeId, m)))
                        }
                        delete b.adrumNodeId
                    };
                    b.prototype.Dl = function(a, b) {
                        for (var n = a.length, m, k, q = 0, p = 0; p < n; p++)
                            if (k = a[p], m = k.element, b.push(k.da), k.T || this.T(m)) q++,
                                this.Ha(this.Nc, {
                                    element: m,
                                    da: k.da
                                });
                        return q
                    };
                    b.prototype.Al = function(a) {
                        var b = [],
                            n = 0;
                        if (a = this.Dl(a, b)) b.sort(), n = b[a - 1];
                        return n
                    };
                    b.prototype.Ro = function(a) {
                        for (var b = this.Ab.length, n = 0; n < b; n++) {
                            var m = this.Al(this.Ab[n]);
                            m && (this.c = Math.max(this.c, m - a))
                        }
                    };
                    b.prototype.No = function(b, f) {
                        var n = this;
                        this.ol().forEach(function(m) {
                            var k = m.url,
                                q = m.wc,
                                p = n.pg(k);
                            a.utils.isDefined(p) && (p = p.duration * f + (p.startTime - (b - n.Aa)), n.Pa && (a.logInfo("M56", k, p), n.A = Math.max(n.A, p)), q && (a.logInfo("M57", k, p), n.c = Math.max(n.c,
                                p), n.Ha(n.ea, {
                                element: m.element,
                                X: p
                            })))
                        })
                    };
                    b.prototype.Oo = function(b) {
                        b = this.rb - b;
                        this.Pa && 0 == this.A && (a.logInfo("M58"), this.A = Math.max(this.A, b));
                        0 == this.c && (a.logInfo("M59"), b = Math.max(this.c, b), this.c = 0 < this.A ? Math.min(this.A, b) : b)
                    };
                    b.prototype.So = function(a) {
                        for (var b = this.Fb.length, n = 0; n < b; n++) {
                            var m = this.Fb[n],
                                k = m.element,
                                q = m.da;
                            if (m.T || this.T(k)) this.c = Math.max(this.c, q - a), this.Ha(this.ea, {
                                element: k,
                                X: q - a
                            })
                        }
                    };
                    b.prototype.Ha = function(b, f) {
                        a.conf.enableSpeedIndex && b.push(f)
                    };
                    b.prototype.Fn = function(a,
                        b) {
                        return a.map(function(a) {
                            return d({}, a, {
                                X: a.da - b
                            })
                        })
                    };
                    b.prototype.zk = function(b) {
                        if (!b.length) return 0;
                        b = b.filter(function(b) {
                            return a.utils.isDefined(b.element) && a.utils.isDefined(b.element.adrumConsiderForVCT) ? b.element.adrumConsiderForVCT : !0
                        }).map(function(a) {
                            a.nd = 0;
                            a.X = Math.floor(a.X || 0);
                            if (a.element instanceof Element) {
                                var b = a.element.getBoundingClientRect();
                                return d({}, a, {
                                    nd: b.width * b.height || 0
                                })
                            }
                            return a
                        });
                        var f = b.reduce(function(a, b) {
                            return a + (b.nd || 0)
                        }, 0);
                        b.sort(function(a, b) {
                            return a.X -
                                b.X
                        });
                        var n = 0,
                            m = b[b.length - 1].X;
                        if (!a.utils.isDefined(m) || 0 >= m) return 0;
                        for (var m = 100 * Math.ceil(m / 100), k = 0, q = 0, p = 100; p <= m; p += 100) {
                            for (var e = q; e < b.length; e++) {
                                var x = b[e].nd;
                                if (b[e].X <= p) k += x || 0, q = e + 1;
                                else break
                            }
                            e = 0;
                            0 !== k && (e = k / f);
                            n += 100 * (1 - e)
                        }
                        return n | 0
                    };
                    b.prototype.td = function(b) {
                        var f = this;
                        this.zc = !1;
                        a.l.ac.Wa && (this.Aa = b);
                        a.logInfo("M60", b, this.Aa);
                        var n = this.Kl(this.Aa);
                        a.logInfo("M61", n);
                        [].slice.call(document.getElementsByTagName("*")).forEach(function(m) {
                            var q = a.utils.Qd(m);
                            delete m.isAdrumTrackedNode;
                            if (a.utils.isDefined(m.adrumNodeId)) f.Qo(m, b);
                            else if (a.utils.isDefined(q) && 0 < q.length) {
                                a.logInfo("M62", q);
                                var p = f.P[q];
                                if (a.utils.isDefined(p)) {
                                    var e = p.da;
                                    a.logInfo("M63", q, e);
                                    a.utils.Lb(m, p.Gd) && (f.Pa && (a.logInfo("M64", f.A, e, b), f.A = Math.max(f.A, e - b), a.logInfo("M65", q, f.A)), f.Fg(m, p) || !p.T && !f.T(m) || (a.logInfo("M66", a.c, e, b), a.utils.isDefined(m.adrumConsiderForVCT) ? f.To(m, q, e, b) : (f.c = Math.max(f.c, e - b), f.Ha(f.ea, {
                                        element: m,
                                        X: e - b
                                    }), a.logInfo("M67", q, a.c))))
                                } else a.utils.ib(m) && a.utils.Lb(m) && f.Po(m,
                                    q, b, n)
                            }
                        });
                        a.conf.considerCarouselForVCT && this.Mb && this.Mb.length && (this.Kk(this.Mb), this.Ab && this.Ro(b), this.Fb && this.So(b));
                        a.logInfo("M68", this.c, this.A);
                        this.No(b, n);
                        a.conf.disableTextForTesting || this.Oo(b);
                        this.c |= 0;
                        this.A |= 0;
                        if (a.conf.enableSpeedIndex) {
                            if (0 !== this.Nc.length) {
                                var m = this.Fn(this.Nc, b);
                                this.ea = this.ea.concat(m)
                            }
                            this.qb = this.zk(this.ea);
                            0 == this.qb && (this.qb = this.c)
                        }
                        a.logInfo("M69", b, this.Aa);
                        a.logInfo("M70", window.location.href);
                        a.logInfo("M71", this.c, this.A, this.qb);
                        return {
                            vct: this.c,
                            pct: this.A,
                            spi: this.qb
                        }
                    };
                    b.prototype.Nd = function(a) {
                        try {
                            var b = a.getBoundingClientRect(),
                                n = document.documentElement || document.body,
                                m = b.top + (window.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                                k = b.left + (window.pageXOffset || n.scrollLeft) - (n.clientLeft || 0);
                            return {
                                top: Math.round(m),
                                left: Math.round(k),
                                bottom: Math.round(m) + b.height,
                                right: Math.round(k) + b.width
                            }
                        } catch (q) {
                            return {
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0
                            }
                        }
                    };
                    b.prototype.T = function(b) {
                        b = this.Nd(b);
                        if (this.tm(b)) return a.logInfo("M72"), !1;
                        var f = {
                                top: Math.max(this.viewport.top,
                                    b.top),
                                left: Math.max(this.viewport.left, b.left),
                                bottom: Math.min(this.viewport.bottom, b.bottom),
                                right: Math.min(this.viewport.right, b.right)
                            },
                            f = a.utils.hg(f);
                        b = a.utils.hg(b);
                        if (0 != b && f / b >= this.qm) return !0;
                        a.logInfo("M73");
                        return !1
                    };
                    b.prototype.tm = function(a) {
                        return a.top > this.viewport.bottom || a.bottom < this.viewport.top || a.right < this.viewport.left || a.left > this.viewport.right ? !0 : !1
                    };
                    b.prototype.Uk = function() {
                        a.utils.isDefined(this.Hc) && this.Hc.disconnect();
                        a.logInfo("M74")
                    };
                    b.prototype.Kl = function(b) {
                        var f =
                            this,
                            n = 0,
                            m = 0,
                            k = this.rg(),
                            k = k.filter(function(a) {
                                return !(0 === a.transferSize && 0 < a.decodedBodySize)
                            });
                        k.forEach(function(k) {
                            var p = k.name;
                            if (a.utils.isDefined(f.P[p])) {
                                var e = f.P[p].da - b - k.startTime,
                                    x = k.duration;
                                a.logInfo("M75", p, b, k.startTime, f.P[p].da, x);
                                x && 0 < e && (n += e / x, m++)
                            }
                        });
                        return 0 < m ? n / m : 1
                    };
                    b.prototype.ol = function() {
                        var b = this,
                            f = [];
                        [].slice.call(document.getElementsByTagName("*")).forEach(function(n) {
                            if (a.utils.Lb(n)) {
                                var m = b.nl(n);
                                m && (b.T(n) ? f.push({
                                    url: m,
                                    wc: !0,
                                    element: n
                                }) : b.Pa && f.push({
                                    url: m,
                                    wc: !1,
                                    element: n
                                }))
                            }
                        });
                        return f
                    };
                    b.prototype.nl = function(b) {
                        if (b && b.style) {
                            var f = window.getComputedStyle(b).getPropertyValue("background-image");
                            f || (f = (b.currentStyle || b.style).backgroundImage);
                            b = this.Pl(f);
                            return a.utils.isDefined(b) && a.utils.isDefined(b.substr) && "undefined" === b.substr(b.lastIndexOf("/") + 1) ? void 0 : b
                        }
                    };
                    b.prototype.Pl = function(a) {
                        if (a && a.match("url")) return a.replace('url("', "").replace('")', "")
                    };
                    b.prototype.pg = function(b) {
                        for (var f = 0, n = this.rg(); f < n.length; f++) {
                            var m = n[f];
                            if (a.utils.isDefined(m.name) &&
                                0 <= m.name.indexOf(b)) return m
                        }
                    };
                    b.prototype.rg = function() {
                        return a.l.ac.Wa ? a.monitor.resourceMonitor.basePageResourceBuffer : a.monitor.resourceMonitor.resourceBuffer.concat(a.monitor.resourceMonitor.Ib())
                    };
                    return b
                }();
                a.xp = b;
                a.c = new b
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = function() {
                        function e() {
                            this.Kb = !1;
                            this.Ad = a.conf.spa2 ? 5E3 : 1E3;
                            this.lb = a.conf.userConf && a.conf.userConf.navComplete && a.conf.userConf.navComplete.maxResourceQuietTime ? a.conf.userConf.navComplete.maxResourceQuietTime : this.Ad;
                            this.Rk = 3E3;
                            this.cn = Math.min(this.Rk, this.lb)
                        }
                        e.prototype.Rh = function() {
                            a.U();
                            this.Jb(Element.prototype, "innerHTML", this.ph.bind(this));
                            this.Jb(HTMLElement.prototype, "innerHTML", this.ph.bind(this));
                            this.Jb(HTMLImageElement.prototype, "src", this.Ob.bind(this));
                            this.Jb(HTMLScriptElement.prototype, "src", this.Ob.bind(this));
                            this.Jb(HTMLLinkElement.prototype, "href", this.Ob.bind(this));
                            this.hm();
                            this.Vd("append");
                            this.Vd("appendChild");
                            this.Vd("insertBefore");
                            a.V()
                        };
                        e.prototype.setUp = function(b) {
                            a.U();
                            this.Bd =
                                this.fe = this.j = 0;
                            this.ka = b;
                            this.Cc = null;
                            this.Xd = this.sa = this.k = !1;
                            this.ob = {};
                            this.P = {};
                            this.he = {};
                            a.V()
                        };
                        e.prototype.start = function(b) {
                            this.setUp(b);
                            this.sa = !0;
                            a.logInfo("M76")
                        };
                        e.prototype.reset = function() {
                            this.k = !1;
                            this.Bd = this.j = 0;
                            this.Cc = null;
                            this.Xd = this.sa = !1;
                            this.P = {};
                            this.he = {};
                            a.logInfo("M77")
                        };
                        e.prototype.Jb = function(a, b, m) {
                            this.tn(a, b, Object.getOwnPropertyDescriptor(a, b), m)
                        };
                        e.prototype.tn = function(b, n, m, k) {
                            if (a.utils.isDefined(m) && m.configurable && a.utils.isDefined(m.set) && !a.utils.isDefined(m.L)) {
                                var q =
                                    this;
                                Object.defineProperty(b, n, {
                                    set: function(a) {
                                        var b;
                                        try {
                                            b = m.set.apply(this, arguments)
                                        } catch (f) {
                                            throw f;
                                        } finally {
                                            k.call(q, this)
                                        }
                                        return b
                                    }
                                })
                            }
                        };
                        e.prototype.Ob = function(b) {
                            a.U();
                            this.Fe(b);
                            a.V()
                        };
                        e.prototype.hm = function() {
                            var b = Element.prototype,
                                n = this;
                            a.utils.isDefined(b.setAttribute) && (b.setAttribute = a.aop.around(b.setAttribute, null, function() {
                                var a = g(arguments);
                                "src" != a[0] && "href" != a[0] || n.Ob.call(n, this)
                            }))
                        };
                        e.prototype.Vd = function(b) {
                            var n = Element.prototype,
                                m = this;
                            a.utils.isDefined(n[b]) && (n[b] =
                                a.aop.around(n[b], null, function() {
                                    0 < arguments.length && m.Ob.call(m, arguments[0])
                                }))
                        };
                        e.prototype.ph = function(b) {
                            a.U();
                            this.sa && a.utils.isDefined(b) && a.utils.isDefined(b.childNodes) && (this.Fe(b), this.ci(b.childNodes));
                            a.V()
                        };
                        e.prototype.ci = function(b) {
                            for (var n = 0; n < b.length; n++) {
                                var m = b[n];
                                "script" != a.utils.El(m) && this.Fe(m);
                                this.ci(m.childNodes)
                            }
                        };
                        e.prototype.Fe = function(f) {
                            a.monitor.AnySpaMonitor.vc() || (this.rm(f) ? this.mk(f) : a.conf.N && this.nk(f), this.Bd++, 1 != this.Bd || this.k || (b.w.Uc(), this.k = !0))
                        };
                        e.prototype.mk = function(b) {
                            var n = a.utils.gb(b),
                                m = a.utils.tc(b);
                            a.utils.isDefined(m) && !a.utils.isDefined(this.ob[m]) && (this.j++, this.ob[m] = !0, a.logInfo("M78", m, n, this.j), this.Ff(b))
                        };
                        e.prototype.nk = function(b) {
                            var n = a.utils.now();
                            if (a.utils.Jg(b)) b.adrumNodeId || a.c.zb(b, n);
                            else if (a.utils.ib(b) && !b.isAdrumTrackedNode) {
                                var n = a.utils.gb(b),
                                    m = a.utils.tc(b);
                                a.utils.isDefined(m) && !a.utils.isDefined(this.ob[m]) && (this.j++, this.ob[m] = !0, this.Ff(b), a.logInfo("M79", m, n, this.j))
                            } else a.utils.Eg(b) && !b.adrumNodeId ?
                                (a.logInfo("M80", n), a.c.zb(b, n)) : a.utils.Lg(b) && (a.c.rb = Math.max(a.c.rb, n))
                        };
                        e.prototype.Ff = function(b) {
                            var n = a.utils.now();
                            this.Kb || (this.O = this.O.bind(this), this.B = this.B.bind(this), this.O.L = !0, this.Kb = this.B.L = !0);
                            var m = a.utils.gb(b);
                            a.utils.ib(b) && (a.lifecycle.getPhaseName() === a.PageLifecycleTracker.md ? this.Xd ? b.adrumConsiderForVCT = !1 : this.Cc && n - this.Cc > this.cn ? (this.Xd = !0, b.adrumConsiderForVCT = !1) : (b.adrumConsiderForVCT = !0, this.Cc = n) : b.adrumConsiderForVCT = !0);
                            a.utils.Ng(b) ? (b.addEventListener("loadeddata",
                                this.O), a.logInfo("M81", m)) : (b.addEventListener("load", this.O), a.logInfo("M82", m, b.nodeName));
                            b.addEventListener("error", this.B)
                        };
                        e.prototype.rm = function(b) {
                            return a.utils.Im(b) || a.utils.zm(b) || a.utils.Fm(b) || a.utils.Mm(b)
                        };
                        e.prototype.O = function(f) {
                            a.U();
                            var n = f.target,
                                m = a.utils.gb(n),
                                k = a.utils.tc(n);
                            a.utils.isDefined(this.ob[k]) && !a.utils.isDefined(this.P[k]) && (this.j--, this.P[k] = !0, 0 > this.j && a.logError("M83", this.j), a.logInfo("M84", m, this.j));
                            this.ka = a.utils.now();
                            this.fe += 1;
                            1 != this.fe || this.k ||
                                (b.w.Uc(), this.k = !0);
                            this.Qb(f.target);
                            a.conf.N && a.utils.ib(n) && !n.isAdrumTrackedNode && (a.logInfo("M85"), a.c.O(f));
                            a.V()
                        };
                        e.prototype.B = function(b) {
                            a.U();
                            var n = b.target,
                                m = a.utils.gb(n),
                                k = a.utils.tc(n);
                            a.utils.isDefined(this.ob[k]) && !a.utils.isDefined(this.he[k]) && (this.j--, this.he[k] = !0, 0 > this.j && a.logError("M86", this.j), a.logInfo("M87", m, this.j));
                            a.conf.N && a.utils.ib(n) && !n.isAdrumTrackedNode && (a.logInfo("M88"), a.c.B(b));
                            this.Qb(b.target);
                            a.V()
                        };
                        e.prototype.jk = function() {
                            return 0 < this.j && this.k
                        };
                        e.prototype.Td = function(b) {
                            var n = this.j,
                                m = 0;
                            a.conf.N && (n += a.c.j, m = a.c.ka);
                            a.logInfo("M89", n);
                            return 0 >= n && this.k && (a.logInfo("M90"), n = Math.max(this.ka, m), b - n >= this.lb) ? (this.reset(), n) : -1
                        };
                        e.prototype.Qb = function(a) {
                            a.removeEventListener("load", this.O);
                            a.removeEventListener("error", this.B)
                        };
                        return e
                    }();
                    b.Ki = e
                })(a.l || (a.l = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = function() {
                        function e() {
                            this.Ad = a.conf.spa2 ? 3E3 : 1E3;
                            this.lb = a.conf.userConf && a.conf.userConf.navComplete && a.conf.userConf.navComplete.maxXhrQuietTime ?
                                a.conf.userConf.navComplete.maxXhrQuietTime : this.Ad
                        }
                        e.prototype.setUp = function(a) {
                            this.nb = this.j = 0;
                            this.Ca = a;
                            this.sa = this.k = !1;
                            this.ma = {}
                        };
                        e.prototype.start = function(a) {
                            this.setUp(a);
                            this.sa = !0
                        };
                        e.prototype.vf = function(b) {
                            a.monitor.AnySpaMonitor.vc() || !this.sa || a.utils.isDefined(this.ma[b.guid()]) || this.ma[b.guid()] || (this.ma[b.guid()] = !0, this.j += 1, a.logInfo("M91", b.guid(), b.url(), this.j))
                        };
                        e.prototype.dk = function(f) {
                            !a.monitor.AnySpaMonitor.vc() && this.sa && a.utils.isDefined(this.ma[f.guid()]) && this.ma[f.guid()] &&
                                (delete this.ma[f.guid()], this.Ca = a.utils.now(), this.j -= 1, a.logInfo("M92", f.guid(), f.url(), this.j), this.nb += 1, 1 == this.nb && (b.w.Uc(), this.k = !0))
                        };
                        e.prototype.ck = function(f) {
                            !a.monitor.AnySpaMonitor.vc() && this.sa && a.utils.isDefined(this.ma[f.guid()]) && this.ma[f.guid()] && (delete this.ma[f.guid()], this.Ca = a.utils.now(), this.j -= 1, a.logInfo("M93", f.guid(), f.url(), this.j), this.nb += 1, 1 == this.nb && (b.w.Uc(), this.k = !0))
                        };
                        e.prototype.Td = function(a) {
                            return 0 == this.j && this.k && a - this.Ca >= this.lb ? (this.reset(), this.Ca) :
                                -1
                        };
                        e.prototype.kk = function() {
                            return 0 < this.j && this.k
                        };
                        e.prototype.reset = function() {
                            this.ma = {};
                            this.k = !1;
                            this.j = 0;
                            this.sa = !1
                        };
                        return e
                    }();
                    b.Ai = e
                })(a.l || (a.l = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = function() {
                        function e() {
                            this.M = new b.Ki;
                            this.I = new b.Ai;
                            this.dn = a.conf.spa2 ? 3E3 : 1E3;
                            this.maxInactiveTime = a.conf.userConf && a.conf.userConf.navComplete && a.conf.userConf.navComplete.maxInactiveTime ? a.conf.userConf.navComplete.maxInactiveTime : Math.max(this.M.lb, this.I.lb) + this.dn;
                            this.nh = 1E3
                        }
                        e.prototype.setUp =
                            function(a) {
                                this.currentTime = this.startTime = a;
                                this.k = this.jb = !1;
                                this.M.setUp(a);
                                this.I.setUp(a)
                            };
                        e.prototype.start = function(a) {
                            this.setUp(a);
                            this.k = !0;
                            this.M.start(a);
                            this.I.start(a);
                            this.If();
                            this.uo()
                        };
                        e.prototype.uo = function() {
                            this.bi = a.utils.refs.setInterval.call(window, function() {
                                a.U();
                                this.currentTime = a.utils.now();
                                var b = a.utils.max(this.M.ka, this.I.Ca);
                                if (this.currentTime - b >= this.maxInactiveTime) {
                                    if (a.conf.N && e.Wa && !a.utils.isDefined(a.monitor.DOMEventsMonitor.currentBasePage)) {
                                        a.logInfo("M94");
                                        e.cb = e.cb || this.jb ? this.currentTime : b;
                                        return
                                    }
                                    this.currentTime = e.cb || this.currentTime;
                                    a.logInfo("M95");
                                    this.navComplete(this.jb ? this.currentTime : b);
                                    this.reset()
                                }
                                a.V()
                            }.bind(this), this.nh)
                        };
                        e.prototype.Uc = function() {
                            this.jb || (this.ro(), this.jb = !0)
                        };
                        e.prototype.If = function() {
                            a.utils.isDefined(this.uh) && clearInterval(this.uh);
                            a.utils.isDefined(this.bi) && clearInterval(this.bi)
                        };
                        e.prototype.reset = function() {
                            this.If();
                            this.k = this.jb = !1;
                            this.M.reset();
                            this.I.reset()
                        };
                        e.prototype.navComplete = function(b) {
                            a.U();
                            var n = a.utils.isDefined(a.monitor.AnySpaMonitor.vp && a.monitor.AnySpaMonitor.vp.startTime) ? a.monitor.AnySpaMonitor.vp.startTime : this.startTime;
                            a.logInfo("M96", b - n);
                            a.conf.N ? e.Wa ? (a.monitor.PerformanceWrapper.perf && (a.monitor.navMonitor.Of(), a.monitor.resourceMonitor.Nf()), a.logInfo("M97"), b = a.c.td(a.utils.fb()), a.monitor.DOMEventsMonitor.currentBasePage.vct = b.vct, a.monitor.DOMEventsMonitor.currentBasePage.spi = b.spi, a.conf.spa2 && (a.monitor.DOMEventsMonitor.currentBasePage.pct = b.pct), a.b.Na && (a.logInfo("M98",
                                a.utils.now()), a.b.Q(a.b.Na), a.b.Na = null), a.command("reportOnload", a.monitor.DOMEventsMonitor.currentBasePage), a.c.reset(), a.c.Pa = !1, e.Wa = !1) : a.monitor.AnySpaMonitor.ce(n, b) : (a.monitor.resourceMonitor.basePageResourceBuffer = [], a.monitor.AnySpaMonitor.ce(n, b));
                            a.monitor.AnySpaMonitor.Ta || (a.monitor.AnySpaMonitor.Ug(n), a.monitor.AnySpaMonitor.report());
                            a.b.co();
                            a.V()
                        };
                        e.prototype.ro = function() {
                            this.uh = a.utils.refs.setInterval.call(window, function() {
                                a.U();
                                this.currentTime = a.utils.now();
                                var b = this.M.Td(this.currentTime);
                                0 <= b && a.logInfo("M99", b - this.startTime);
                                b = this.I.Td(this.currentTime);
                                0 <= b && a.logInfo("M100", b - this.startTime);
                                if (!this.I.k && !this.M.k) {
                                    b = a.utils.max(this.I.Ca, this.M.ka);
                                    if (a.conf.N && e.Wa && !a.utils.isDefined(a.monitor.DOMEventsMonitor.currentBasePage)) {
                                        a.logInfo("M101");
                                        e.cb = e.cb || b;
                                        return
                                    }
                                    b = e.cb || b;
                                    a.logInfo("M102");
                                    this.navComplete(b);
                                    this.reset()
                                }
                                a.V()
                            }.bind(this), this.nh)
                        };
                        return e
                    }();
                    e.Wa = !0;
                    e.cb = 0;
                    b.ac = e;
                    b.w = new b.ac
                })(a.l || (a.l = {}))
            })(h || (h = {}));
            (function(a) {
                var b = function() {
                    function b() {
                        this.Wc = [];
                        this.Kc(b.ld, 0)
                    }
                    b.prototype.kn = function(a) {
                        this.Kc(b.wf, a)
                    };
                    b.prototype.mn = function(a) {
                        this.Kc(b.Df, a)
                    };
                    b.prototype.ln = function(a) {
                        this.Kc(b.md, a)
                    };
                    b.prototype.Kc = function(a, b) {
                        this.Wc.push({
                            jn: (new Date).getTime(),
                            hn: b,
                            kh: a
                        });
                        this.Nk = a
                    };
                    b.prototype.getPhaseName = function() {
                        return this.Nk
                    };
                    b.prototype.getPhaseID = function(a) {
                        for (var f = 0; f < b.Af.length; f++)
                            if (b.Af[f] === a) return f;
                        return null
                    };
                    b.prototype.getPhaseCallbackTime = function(a) {
                        for (var b = this.Wc, n = 0; n < b.length; n++)
                            if (b[n].kh === a) return b[n].jn;
                        return null
                    };
                    b.prototype.findPhaseAtNominalTime = function(c) {
                        a.assert(0 <= c);
                        for (var f = this.Wc, n = f.length - 1; 0 <= n; n--)
                            if (c >= f[n].hn) return f[n].kh;
                        a.error("M103", c, a.utils.dumpObject(f));
                        return b.ld
                    };
                    return b
                }();
                b.ld = "AFTER_FIRST_BYTE";
                b.wf = "AFTER_DOM_INTERACTIVE";
                b.Df = "AT_ONLOAD";
                b.md = "AFTER_ONLOAD";
                b.Af = [b.ld, b.wf, b.Df, b.md];
                a.PageLifecycleTracker = b;
                a.lifecycle = new b;
                a.lifecycle = a.lifecycle
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = function(b) {
                        function f(f) {
                            f = b.call(this, f) || this;
                            f.isBeaconSent = !1;
                            f.backTimeGap = a.conf.backTimeGap;
                            return f
                        }
                        u(f, b);
                        f.prototype.type = function() {
                            return a.EventType.PageView
                        };
                        return f
                    }(b.EventTracker);
                    b.PageView = e
                })(a.events || (a.events = {}))
            })(h || (h = {}));
            (function(a) {
                a = a.events || (a.events = {});
                a = a.g || (a.g = {});
                a.navigationStart = "navigationStart";
                a.domainLookupStart = "domainLookupStart";
                a.domainLookupEnd = "domainLookupEnd";
                a.connectStart = "connectStart";
                a.secureConnectionStart = "secureConnectionStart";
                a.connectEnd = "connectEnd";
                a.requestStart = "requestStart";
                a.responseStart =
                    "responseStart";
                a.responseEnd = "responseEnd";
                a.domContentLoadedEventStart = "domContentLoadedEventStart";
                a.loadEventEnd = "loadEventEnd";
                a.Lh = "sendTime";
                a.bg = "firstByteTime";
                a.Eh = "respAvailTime";
                a.Fh = "respProcTime";
                a.Le = "viewChangeStart";
                a.ji = "viewChangeEnd";
                a.Me = "viewDOMLoaded";
                a.si = "xhrRequestsCompleted";
                a.Dq = "viewFragmentsLoaded";
                a.Eq = "viewResourcesLoaded";
                a.Ne = "virtualPageStart";
                a.Yo = "virtualPageEnd"
            })(h || (h = {}));
            (function(a) {
                var b = a.events || (a.events = {});
                b.metricSpec = {};
                b.metricSpec[a.EventType.PageView] = {
                    $k: {
                        start: b.g.navigationStart,
                        end: b.g.loadEventEnd,
                        name: "PLT"
                    },
                    il: {
                        start: b.g.navigationStart,
                        end: b.g.responseStart,
                        name: "FBT"
                    },
                    wq: {
                        start: b.g.navigationStart,
                        end: b.g.requestStart,
                        name: "SCT"
                    },
                    xq: {
                        start: b.g.secureConnectionStart,
                        end: b.g.connectEnd,
                        name: "SHT"
                    },
                    Pp: {
                        start: b.g.domainLookupStart,
                        end: b.g.domainLookupEnd,
                        name: "DLT"
                    },
                    Aq: {
                        start: b.g.connectStart,
                        end: b.g.connectEnd,
                        name: "TCP"
                    },
                    tq: {
                        start: b.g.requestStart,
                        end: b.g.responseStart,
                        name: "RAT"
                    },
                    Rp: {
                        start: b.g.responseStart,
                        end: b.g.loadEventEnd,
                        name: "FET"
                    },
                    Vp: {
                        start: b.g.responseStart,
                        end: b.g.domContentLoadedEventStart,
                        name: "DRT"
                    },
                    Up: {
                        start: b.g.responseStart,
                        end: b.g.responseEnd,
                        name: "DDT"
                    },
                    Np: {
                        start: b.g.responseEnd,
                        end: b.g.domContentLoadedEventStart,
                        name: "DPT"
                    },
                    sq: {
                        start: b.g.domContentLoadedEventStart,
                        end: b.g.loadEventEnd,
                        name: "PRT"
                    },
                    Op: {
                        start: b.g.navigationStart,
                        end: b.g.domContentLoadedEventStart,
                        name: "DOM"
                    }
                };
                b.metricSpec[a.EventType.Ajax] = {
                    il: {
                        start: b.g.Lh,
                        end: b.g.bg,
                        name: "FBT"
                    },
                    Bp: {
                        start: b.g.bg,
                        end: b.g.Eh,
                        name: "DDT"
                    },
                    Ap: {
                        start: b.g.Eh,
                        end: b.g.Fh,
                        name: "DPT"
                    },
                    $k: {
                        start: b.g.Lh,
                        end: b.g.Fh,
                        name: "PLT"
                    }
                };
                b.metricSpec[a.EventType.VPageView] = {
                    jq: {
                        start: b.g.Ne,
                        end: b.g.Yo,
                        name: "PLT"
                    },
                    Jp: {
                        start: b.g.Le,
                        end: b.g.ji,
                        name: "DDT"
                    },
                    gq: {
                        start: b.g.Le,
                        end: b.g.Me,
                        name: "DRT"
                    },
                    pp: {
                        start: b.g.ji,
                        end: b.g.Me,
                        name: "DPT"
                    },
                    qp: {
                        start: b.g.Le,
                        end: b.g.Me,
                        name: "DOM"
                    },
                    rq: {
                        start: "viewChangeEnd",
                        end: "xhrRequestsCompleted",
                        name: null
                    },
                    hq: {
                        start: "viewChangeEnd",
                        end: "viewPartialsLoaded",
                        name: null
                    },
                    fq: {
                        start: "viewPartialsLoaded",
                        end: "viewFragmentsLoaded",
                        name: null
                    },
                    iq: {
                        start: "viewPartialsLoaded",
                        end: "viewResourcesLoaded",
                        name: null
                    }
                };
                b.metricSpec[a.EventType.NG_VIRTUAL_PAGE] = b.metricSpec[a.EventType.VPageView]
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = function(e) {
                        function f(n) {
                            n = e.call(this, n) || this;
                            n.constructor != f && n.constructor != b.AdrumAjax && a.reportAPIMessage(a.Z.wa, a.tb, "ADRUM.events.Ajax", []);
                            return n
                        }
                        u(f, e);
                        f.prototype.type = function() {
                            return a.EventType.Ajax
                        };
                        return f
                    }(b.EventTracker);
                    b.Ajax = e;
                    b.Ma(b.K[a.EventType.Ajax], e.prototype);
                    b.Bf(b.metricSpec[a.EventType.Ajax], e.prototype)
                })(a.events ||
                    (a.events = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = function(b) {
                        function f(a) {
                            return b.call(this, a) || this
                        }
                        u(f, b);
                        f.prototype.type = function() {
                            return a.EventType.Ajax
                        };
                        return f
                    }(b.Ajax);
                    b.AdrumAjax = e;
                    b.Ma(b.K[a.EventType.ADRUM_XHR], e.prototype)
                })(a.events || (a.events = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = a.utils.isDefined,
                        c = function() {
                            function f() {}
                            f.Oc = function(b, m) {
                                a.conf.spa2 ? f.Ik(b, m) : f.Jh(b, m)
                            };
                            f.Ik = function(n, m) {
                                if (e(n.status) && 0 == n.status || !e(n.status) && !e(m.response)) a.l.w.I.ck(m),
                                    delete n._adrumAjaxT;
                                else {
                                    var k = a.b.sd(n.h);
                                    if (e(a.monitor.AnySpaMonitor.vp) && !a.monitor.AnySpaMonitor.Ta && a.monitor.AnySpaMonitor.vp.Bb == k) {
                                        m.parent(a.monitor.AnySpaMonitor.vp);
                                        if (++a.monitor.AnySpaMonitor.vp.Cf > b.Ja.maxPerPageView) return;
                                        f.Jh(n, m)
                                    } else e(a.monitor.AnySpaMonitor.vp) && !a.monitor.AnySpaMonitor.Ta && m.parent(a.monitor.AnySpaMonitor.vp), f.oe(m, n), b.oSTO(f.pe, f.Bj);
                                    delete n._adrumAjaxT;
                                    a.l.w.I.dk(m)
                                }
                            };
                            f.Jh = function(n, m) {
                                delete n._adrumAjaxT;
                                var k = {};
                                if (n instanceof XMLHttpRequest) try {
                                    if (k = {
                                            status: n.status,
                                            getAllResponseHeaders: n.getAllResponseHeaders()
                                        }, 400 <= n.status)
                                        if (b.isString(n.statusText)) k.statusText = n.statusText;
                                        else try {
                                            k.responseText = n.responseText
                                        } catch (q) {
                                            k.responseType = n.responseType
                                        }
                                } catch (p) {
                                    a.error("M104", p)
                                }
                                e((m.response || n).status) && f.reportXhr(k, m)
                            };
                            f.reportXhr = function(b, m) {
                                f.fi(b, m);
                                a.command("reportXhr", m)
                            };
                            f.oe = function(b, m) {
                                if (e(m.h)) {
                                    var k = a.b.sd(m.h).guid;
                                    f.fi(m, b);
                                    e(f.qa[k]) || (f.qa[k] = []); - 1 == f.qa[k].indexOf(b) && f.qa[k].push(b)
                                } else a.logInfo("M105")
                            };
                            f.fi =
                                function(a, f) {
                                    var k = f.response || a,
                                        q = k.status,
                                        e;
                                    b.isNumber(q) && f.xhrStatus(q);
                                    if (k.getAllResponseHeaders) {
                                        var t = b.isFunction(k.getAllResponseHeaders) ? k.getAllResponseHeaders() : k.getAllResponseHeaders;
                                        f.allResponseHeaders(t)
                                    }
                                    if (400 <= q) {
                                        if (b.isString(k.statusText)) e = k.statusText;
                                        else try {
                                            b.isString(k.responseText) && (e = k.responseText)
                                        } catch (c) {
                                            b.isString(k.responseType) && (e = k.responseType)
                                        }
                                        f.error({
                                            status: q,
                                            msg: e
                                        })
                                    }
                                };
                            f.Ko = function(a, f) {
                                var k = "";
                                b.isDefined(Response) && a instanceof Response && a.headers.forEach(function(a,
                                    b) {
                                    k += b + ": " + a + "\r\n"
                                });
                                f.allResponseHeaders(k)
                            };
                            f.xh = function(a) {
                                f.qa[a] = [];
                                delete f.qa[a]
                            };
                            f.$m = function(b, m) {
                                var k = f.qa[m];
                                e(k) && (k.forEach(function(f) {
                                    f.parent(b);
                                    a.command("reportXhr", f)
                                }), f.xh(m))
                            };
                            f.pe = function(n) {
                                for (var m in f.qa) {
                                    for (var k = 0, q = f.qa[m]; k < q.length; k++) {
                                        var p = q[k];
                                        !e(a.monitor.AnySpaMonitor.vp) && ++f.ok <= b.Ja.maxPerPageView ? a.command("reportXhr", p, n) : e(a.monitor.AnySpaMonitor.vp) && ++a.monitor.AnySpaMonitor.vp.Cf <= b.Ja.maxPerPageView && a.command("reportXhr", p)
                                    }
                                    f.xh(m)
                                }
                            };
                            return f
                        }();
                    c.Bj = 2E3;
                    c.qa = {};
                    c.ok = 0;
                    b.Zb = c
                })(a.utils || (a.utils = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = a.utils.now,
                        c = a.utils.Zb,
                        f = function() {
                            function f() {}
                            f.prototype.setUp = function() {
                                var b = document.readyState;
                                if ("loading" === b) a.logInfo("M106"), f.io(), f.Sh();
                                else {
                                    var k = {
                                        timeStamp: e()
                                    };
                                    f.ub(k);
                                    "interactive" === b ? (a.logInfo("M107"), f.Sh()) : (a.logInfo("M108"), f.Pb(k), f.hh(k))
                                }
                            };
                            f.Sh = function() {
                                a.utils.addEventListener(window, "load", f.Pb);
                                a.utils.addEventListener(window, "load", f.hh)
                            };
                            f.prototype.setUpOnBeforeUnload =
                                function() {
                                    a.conf.sendBeaconOnUnload && a.utils.addEventListener(window, "beforeunload", f.rn)
                                };
                            f.rn = function() {
                                var m = b.xa.Ya;
                                if (m)
                                    for (var k in m) {
                                        var q = m[k],
                                            e = q.ajaxT;
                                        !e.getRespProcTime() && e.tempRespAvailAndProcTime && e.markRespProcTime(e.tempRespAvailAndProcTime);
                                        !e.getRespAvailTime() && e.tempRespAvailAndProcTime && e.markRespAvailTime(e.tempRespAvailAndProcTime);
                                        c.Oc(q.requestObj, q.ajaxT)
                                    }
                                f.currentBasePage && !f.currentBasePage.isBeaconSent ? (a.conf.N && (m = a.c.td(a.utils.fb()), f.currentBasePage.vct = m.vct,
                                    f.currentBasePage.spi = m.spi, a.conf.spa2 && (f.currentBasePage.pct = m.pct)), a.command("quickReportOnLoad", f.currentBasePage), c.pe(!0)) : a.channel && a.channel.sendBeacon && (c.pe(!0), a.l.w.navComplete(a.utils.now()), a.channel.sendBeacon(!0))
                            };
                            f.hh = function(m) {
                                f.currentBasePage = new a.events.PageView;
                                a.lifecycle.mn(m && m.timeStamp);
                                a.utils.Ih(function() {
                                    var m = e();
                                    a.lifecycle.ln(m);
                                    a.command("mark", "onload", m);
                                    f.Gc = !0;
                                    a.conf.N ? a.c.Uk() : (b.PerformanceWrapper.perf && (b.navMonitor.Of(), b.resourceMonitor.Nf()), a.b.Na &&
                                        (a.b.Q(a.b.Na), a.b.Na = null), a.command("reportOnload", f.currentBasePage));
                                    !a.conf.N && a.conf.spa2 && a.conf.modernBrowserFeaturesAvailable && a.l.w.M.Rh();
                                    a.utils.loadScriptAsync(a.conf.adrumExtUrl)
                                });
                                a.logInfo("M109")
                            };
                            f.io = function() {
                                if (a.utils.isFunction(document.addEventListener)) document.addEventListener("DOMContentLoaded", f.ub, !1);
                                else if (a.utils.isObject(document.attachEvent)) {
                                    document.attachEvent("onreadystatechange", f.ub);
                                    var b = null;
                                    try {
                                        b = null === window.frameElement ? document.documentElement : null
                                    } catch (k) {}
                                    null !=
                                        b && b.doScroll && function p() {
                                            if (!f.isReady) {
                                                try {
                                                    b.doScroll("left")
                                                } catch (k) {
                                                    a.utils.oSTO(p, 10);
                                                    return
                                                }
                                                f.Pb()
                                            }
                                        }()
                                } else a.error("M110");
                                a.logInfo("M111")
                            };
                            f.Pb = function(b) {
                                f.Yg || (a.lifecycle.kn(b && b.timeStamp), a.command("mark", "onready", e()), f.Yg = !0)
                            };
                            f.ub = function(a) {
                                document.addEventListener ? (document.removeEventListener("DOMContentLoaded", f.ub, !1), f.Pb(a)) : "complete" === document.readyState && (document.detachEvent("onreadystatechange", f.ub), f.Pb(a))
                            };
                            return f
                        }();
                    f.isReady = !1;
                    f.Yg = !1;
                    f.Gc = !1;
                    b.DOMEventsMonitor =
                        f;
                    f.prototype.setUpOnBeforeUnload = f.prototype.setUpOnBeforeUnload;
                    b.domEventsMonitor = new b.DOMEventsMonitor
                })(a.monitor || (a.monitor = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = a.utils.map,
                        c = a.utils.bp,
                        f = a.utils.isDefined,
                        n = a.utils.isString,
                        m = a.utils.Tk,
                        k = a.utils.isFunction;
                    b.Zg = function(a, b) {
                        for (var f = !1, m = 0; m < b.length; m++) {
                            var k = b[m];
                            if (k && k.test(a)) {
                                f = !0;
                                break
                            }
                        }
                        return f
                    };
                    b.Ac = function(a, m, k) {
                        var n = !1;
                        if (m && k)
                            for (var e = 0; e < k.length; e++) {
                                var c = k[e];
                                if (!(f(c.method) && a !== c.method || f(c.urls) &&
                                        !b.Zg(m, c.urls))) {
                                    n = !0;
                                    break
                                }
                            }
                        return n
                    };
                    b.Wb = function(a, b) {
                        return m(e(c(b), a))
                    };
                    b.Zc = function(a) {
                        var f = b.yl(a);
                        a = b.jg(a);
                        return f || a
                    };
                    b.yl = function(b) {
                        var m = b.method;
                        if (f(m)) {
                            if (n(m)) return b;
                            a.error("M112")
                        }
                    };
                    b.Vo = function(a) {
                        var f = b.jg(a);
                        return b.En(a) && f
                    };
                    b.En = function(b) {
                        if (k(b.getFromBody)) return b;
                        a.error("M113")
                    };
                    b.Mk = function(b) {
                        for (var f = [], m = 0; m < b.length; m++) {
                            var k = b[m].pattern;
                            if (n(k)) try {
                                f.push(new RegExp(k))
                            } catch (e) {
                                a.exception(e, "M114")
                            } else a.error("M115")
                        }
                        return f
                    };
                    b.jg = function(a) {
                        var f =
                            a.urls;
                        if (f && 0 < f.length && (a.urls = b.Mk(f), 0 < a.urls.length)) return a
                    }
                })(a.utils || (a.utils = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = a.utils.isDefined,
                        c = function() {
                            function f() {}
                            f.setUp = function() {
                                f.exclude = [{
                                    urls: [new RegExp(a.conf.beaconUrlHttp + a.conf.corsEndpointPath), new RegExp(a.conf.beaconUrlHttps + a.conf.corsEndpointPath)]
                                }];
                                f.include = [];
                                f.maxPerPageView = f.Dn(a.conf.userConf && a.conf.userConf.xhr);
                                f.payloadParams = [];
                                f.parameter = {};
                                f.oh(a.conf.userConf && a.conf.userConf.xhr)
                            };
                            f.oh = function(a) {
                                e(a) &&
                                    (f.exclude = f.exclude.concat(b.Wb(b.Zc, a.exclude)), f.include = f.include.concat(b.Wb(b.Zc, a.include)), f.payloadParams = f.payloadParams.concat(b.Wb(b.Zc, a.payloadParams)), f.parameter = b.Wb(b.Vo, a.parameter))
                            };
                            f.Dn = function(n) {
                                if (e(n)) {
                                    n = n.maxPerPageView;
                                    if (b.isNumber(n) && 0 < n) return n;
                                    if ("UNLIMITED" === n) return Infinity;
                                    a.reportAPIMessage(a.Z.xi, "Invalid maxPerPageView value: " + n, "xhr.maxPerPageView", [n])
                                }
                                return a.conf.spa2 ? f.Gi : f.Fi
                            };
                            f.Tc = function(a, m) {
                                var k = f.include,
                                    q = f.exclude;
                                return e(k) && 0 < k.length &&
                                    !b.Ac(m, a, k) || e(q) && 0 < q.length && b.Ac(m, a, q)
                            };
                            f.xe = function(a, m) {
                                var k = f.payloadParams;
                                b.Ac(a.method(), a.url(), k) && a.dataObject({
                                    data: m
                                })
                            };
                            return f
                        }();
                    c.Fi = 50;
                    c.Gi = 250;
                    b.Ja = c
                })(a.utils || (a.utils = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    b.parseURI = function(a) {
                        var b = String(a).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
                        a = b && null != a.match(b[1] + "//");
                        return b && {
                            href: b[0] || "",
                            protocol: b[1] || "",
                            slash: a ?
                                "//" : "",
                            username: b[2] || "",
                            password: b[3] || "",
                            host: b[4] || "",
                            hostname: b[5] || "",
                            port: b[6] || "",
                            pathname: b[7] || "",
                            search: b[8] || "",
                            hash: b[9] || ""
                        }
                    };
                    b.absolutizeURI = function(a, c) {
                        function f(a) {
                            var b = [];
                            a.replace(/^(\.\.?(\/|$))+/, "").replace(/\/(\.(\/|$))+/g, "/").replace(/\/\.\.$/, "/../").replace(/\/?[^\/]*/g, function(a) {
                                "/.." === a ? b.pop() : b.push(a)
                            });
                            return b.join("").replace(/^\//, "/" === a.charAt(0) ? "/" : "")
                        }
                        var n, m, k, q, p, t, x, s;
                        s = c ? b.parseURI(c) : {};
                        x = a ? b.parseURI(a) : {};
                        s.protocol ? (n = s.protocol, m = s.slash, k =
                            s.username, q = s.password, p = s.host, t = f(s.pathname), x = s.search) : s.host ? (n = x.protocol, m = x.slash, k = s.username, q = s.password, p = s.host, t = f(s.pathname), x = s.search) : (n = x.protocol, m = x.slash, k = x.username, q = x.password, p = x.host, s.pathname ? ("/" === s.pathname.charAt(0) ? t = f(s.pathname) : (t = x.pathname ? x.pathname.slice(0, x.pathname.lastIndexOf("/") + 1) + s.pathname : m ? "/" + s.pathname : s.pathname, t = f(t)), x = s.search) : (t = f(x.pathname), x = s.search || x.search));
                        return n + m + (k ? k + (q ? ":" + q : "") + "@" : "") + p + t + x + (s.hash ? s.hash : "")
                    };
                    b.getFullyQualifiedUrl =
                        function(e) {
                            try {
                                var c, f = document.location.href,
                                    n;
                                a: {
                                    for (var m = document.getElementsByTagName("base"), k = 0; k < m.length; k++) {
                                        var q = m[k].href;
                                        if (q) {
                                            n = q;
                                            break a
                                        }
                                    }
                                    n = void 0
                                }
                                c = n ? b.absolutizeURI(f, n) : f;
                                return b.absolutizeURI(c, e)
                            } catch (p) {
                                return a.exception(p, "M116", e, c), e
                            }
                        }
                })(a.utils || (a.utils = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = a.utils.isString,
                        c = function(f) {
                            function n() {
                                var a = f.call(this) || this;
                                a.na = 0;
                                a.na = 0;
                                return a
                            }
                            u(n, f);
                            n.prototype.Pc = function() {
                                this.na = 0
                            };
                            n.B = function(b) {
                                var f = b.message ||
                                    b.description,
                                    n = b.fileName || b.filename,
                                    p = b.lineNumber,
                                    t = b.columnNumber;
                                e(b.description) && 0 <= b.description.indexOf("Access is denied.") && (f += ": maybe you have CORS XHR error in IE");
                                a.monitor.ia.va(f, n, p, t, b)
                            };
                            n.Kg = function(a) {
                                var f = document.createElement("a");
                                f.href = a;
                                a = document.location;
                                var q = a.protocol;
                                return f.protocol === q && f.hostname === a.hostname && n.xn(b.XHRMonitor.Sk[q], f.port, a.port)
                            };
                            n.xn = function(a, b, f) {
                                return (b || a) === (f || a)
                            };
                            return n
                        }(b.fd);
                    c.Ya = {};
                    c.Sk = {
                        "http:": "80",
                        "https:": "443"
                    };
                    b.xa =
                        c
                })(a.monitor || (a.monitor = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    function e(b) {
                        var f = a.utils.isDefined(window.crypto) && a.utils.isFunction(window.crypto.getRandomValues) ? window.crypto : a.utils.isDefined(window.msCrypto) && a.utils.isFunction(window.msCrypto.getRandomValues) && window.msCrypto;
                        if (f) return b = new Uint8Array(b / 2), f.getRandomValues(b), [].slice.call(b).map(function(a) {
                            a = a.toString(16);
                            return 1 === a.length ? "0" + a : a
                        }).join("");
                        for (f = ""; f.length < b;) f += "0123456789abcdef".charAt(Math.floor(16 *
                            Math.random()));
                        return f
                    }

                    function c(a) {
                        for (var b = 0; b < a.length; b++)
                            if ("0" != a[b]) return !0;
                        return !1
                    }

                    function f(a) {
                        for (var b = e(a); !c(b);) b = e(a);
                        return b
                    }
                    b.createTraceparentHeaderValue = function() {
                        var a;
                        a = "00-" + f(32);
                        a = a + "-" + f(16);
                        return a += "-01"
                    }
                })(a.TraceParentGenerator || (a.TraceParentGenerator = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = a.utils.Ja,
                        c = a.utils.Zb,
                        f = a.utils.mergeJSON,
                        n = a.events.AdrumAjax,
                        m = a.utils.isString,
                        k = a.utils.isDefined,
                        q = a.utils.isNumber,
                        p = a.utils.getFullyQualifiedUrl,
                        t = a.conf.spa2,
                        x = a.conf.ja;
                    b.ab = null;
                    b.oi = window.fetch;
                    var s = a.conf.isZonePromise,
                        h = null,
                        w = function(w) {
                            function r() {
                                return null !== w && w.apply(this, arguments) || this
                            }
                            u(r, w);
                            r.prototype.im = function() {
                                var f = this,
                                    m = Object.getOwnPropertyDescriptor(window, "fetch");
                                if (!m || m.configurable) {
                                    m && delete m.writable;
                                    m && delete m.value;
                                    m || (m = {
                                        configurable: !0,
                                        enumerable: !0
                                    });
                                    var n = m.set,
                                        q = m.get;
                                    m.set = function(a) {
                                        !0 !== a.isAgentFetch && (k(n) && n.apply(this, arguments), k(b.ab) || f.setUp(a))
                                    };
                                    m.get = function() {
                                        var a = b.oi;
                                        k(q) && (a = q.apply(this,
                                            arguments));
                                        k(b.ab) && (a = b.ab);
                                        return a
                                    }
                                }
                                Object.defineProperty(window, "fetch", m);
                                s && a.utils.ae() && (window.fetch = window.fetch)
                            };
                            r.prototype.setUp = function(m) {
                                var q = this;
                                m = m || window.fetch || b.oi;
                                a.logInfo("M117");
                                if (k(m) && !m.isAgentFetch) {
                                    var p = function(f) {
                                        return function(m, n) {
                                            var e = arguments;
                                            if (q._adrumAjaxT) {
                                                a.logInfo("M118", q._adrumAjaxT.url(), q._adrumAjaxT.method());
                                                var p = a.utils.now();
                                                b.xa.Kg(q._adrumAjaxT.url()) && (e = r.Vj(arguments));
                                                r.Yn(q._adrumAjaxT, e);
                                                var t = f.apply(this, e),
                                                    x = new window.Promise(function(b,
                                                        f) {
                                                        t.then(function(f) {
                                                            a.logInfo("M119", q._adrumAjaxT.url());
                                                            a.logInfo("M120", p, q._adrumAjaxT.url());
                                                            c.Ko(f, x._adrumAjaxT);
                                                            x._adrumAjaxT.markFirstByteTime(x._adrumAjaxT.getFirstByteTime() || a.utils.now());
                                                            x._adrumAjaxT.response = f;
                                                            l(f.clone) ? (a.logInfo("M121", q._adrumAjaxT.url()), f.clone().text().then(function(a) {
                                                                r.Sl(a, x)
                                                            })["catch"](function(a) {
                                                                r.$f(x, a)
                                                            })) : (a.logInfo("M122", q._adrumAjaxT.url()), r.mo(x, f));
                                                            b(f)
                                                        })["catch"](function(b) {
                                                            a.logInfo("M123", q._adrumAjaxT.url());
                                                            x._adrumAjaxT.markFirstByteTime(x._adrumAjaxT.getFirstByteTime() ||
                                                                a.utils.now());
                                                            r.$f(x);
                                                            f(b)
                                                        })
                                                    });
                                                x._adrumAjaxT = q._adrumAjaxT;
                                                x.L = !0;
                                                x._adrumAjaxT.timestamp(p);
                                                x._adrumAjaxT.markSendTime(p);
                                                x._adrumAjaxT.parentPhase(a.lifecycle.getPhaseName());
                                                a.conf.spa2 && k(b.AnySpaMonitor.vp) && k(b.AnySpaMonitor.vp.userPageName) && x._adrumAjaxT.parentPageName(b.AnySpaMonitor.vp.userPageName);
                                                r.ao(x._adrumAjaxT, arguments);
                                                a.logInfo("M124", p, q._adrumAjaxT.url());
                                                x.h = new a.$b(a.b.ra(), new a.Ka("window.fetch"), a.CauseType.FETCH);
                                                return x
                                            }
                                            return f.apply(this, e)
                                        }
                                    };
                                    p.isAgentFetch = !0;
                                    b.ab =
                                        a.aop.around(p(m), function() {
                                            var m = r.Ll(arguments),
                                                k = Array.prototype.slice.call(arguments);
                                            if (!t && ++q.na + b.xhrMonitor.na > e.maxPerPageView || e.Tc(m.url, m.method)) a.logInfo("M125", m.url), delete q._adrumAjaxT;
                                            else return q._adrumAjaxT = new n(f(m, q.status)), q.h = a.b.Qa("window.fetch.send", void 0, a.b.ra(), a.CauseType.FETCH), x && (m = a.utils.Sa("window.fetch.send") || "", q.h.oa = m), k[k.length] = {
                                                adrumArgs: {
                                                    cEventId: q.h.guid
                                                }
                                            }, a.b.ua(q.h), k
                                        }, function() {
                                            if (q._adrumAjaxT)
                                                if (!t && q.na + b.xhrMonitor.na > e.maxPerPageView) a.logInfo("M126",
                                                    q._adrumAjaxT.url());
                                                else if (e.Tc(q._adrumAjaxT.url(), q._adrumAjaxT.method())) a.logInfo("M127", q._adrumAjaxT.url());
                                            else {
                                                var f = a.utils.Md(arguments, "cEventId");
                                                a.l.w.I.vf(q._adrumAjaxT);
                                                a.b.Q(f)
                                            }
                                        }, "fetch", b.xa.B);
                                    b.ab.isAgentFetch = !0;
                                    window.fetch = b.ab
                                }
                            };
                            r.lg = function() {
                                h || (h = new r);
                                return h
                            };
                            r.Sl = function(b, f) {
                                var m = a.utils.now();
                                if (r.ca(f)) {
                                    f._adrumAjaxT.response.responseText = b;
                                    r.Vg(f._adrumAjaxT, m);
                                    var n = f._adrumAjaxT.getRespProcTime();
                                    k(n) || k(f._adrumAjaxT.C) && 0 !== f._adrumAjaxT.C || (a.logInfo("M128",
                                        m, f._adrumAjaxT.url()), f._adrumAjaxT.markRespProcTime(m), r.pb(f))
                                }
                            };
                            r.$f = function(b, f) {
                                if ((!f || f.code !== f.ABORT_ERR) && b && b._adrumAjaxT) {
                                    a.logInfo("M129", b._adrumAjaxT.url());
                                    var m = a.utils.now();
                                    r.ca(b) && (r.Vg(b._adrumAjaxT, m), r.Wg(b._adrumAjaxT, m), r.pb(b))
                                }
                            };
                            r.Vg = function(b, f) {
                                var m = b.getRespAvailTime();
                                k(m) || (a.logInfo("M130", f, b.url()), b.markRespAvailTime(f))
                            };
                            r.Wg = function(b, f) {
                                var m = b.getRespProcTime();
                                if (k(m)) return !1;
                                a.logInfo("M131", f, b.url());
                                b.markRespProcTime(f);
                                return !0
                            };
                            r.mo = function(a,
                                b) {
                                b.lk = r.Xb(a, b.lk);
                                b.tk = r.Xb(a, b.tk);
                                b.kl = r.Xb(a, b.kl);
                                b.Um = r.Xb(a, b.Um);
                                b.text = r.Xb(a, b.text)
                            };
                            r.Xb = function(b, f) {
                                return a.aop.around(f, function() {
                                    r.ca(b) && b._adrumAjaxT.markRespAvailTime(a.utils.now())
                                }, function() {
                                    r.ca(b) && (b._adrumAjaxT.markRespProcTime(a.utils.now()), r.pb(b))
                                }, "wrapResponseReader", a.monitor.ErrorMonitor.B)
                            };
                            r.Vj = function(a) {
                                1 == a.length ? m(a[0]) ? ([].push.call(a, {}), r.pd(a[1])) : r.pd(a[0]) : 2 == a.length && r.pd(a[1]);
                                return a
                            };
                            r.pd = function(b) {
                                if (k(b) && (k(b.headers) || (b.headers = new Headers,
                                        a.logInfo("M132")), b.headers instanceof Headers ? b.headers.has("ADRUM") ? b.headers.set("ADRUM", "isAjax:true") : b.headers.append("ADRUM", "isAjax:true") : b.headers.ADRUM = "isAjax:true", a.conf.traceparentHeaderEnabled)) {
                                    var f = a.TraceParentGenerator.createTraceparentHeaderValue();
                                    b.headers.append("traceparent", f)
                                }
                            };
                            r.Yn = function(b, f) {
                                1 == f.length && !a.utils.isString(f[0]) && f[0] instanceof Request && (b.Ah = f[0].clone())
                            };
                            r.ao = function(b, f) {
                                2 <= f.length && a.utils.isObject(f[1]) && k(f[1].body) && e.xe(b, f[1].body)
                            };
                            r.bo =
                                function(b) {
                                    return a.utils.isDefined(b.Ah) ? b.Ah.text().then(function(a) {
                                        e.xe(b, a)
                                    }) : window.Promise.resolve()
                                };
                            r.Ll = function(b) {
                                var f = {
                                    url: "",
                                    method: ""
                                };
                                a.utils.isObject(b[0]) ? (f.url = b[0].url || (a.utils.isDefined(b[0].toString) ? b[0].toString() : void 0), f.method = b[0].method || "GET") : m(b[0]) && (f.url = b[0], f.method = b[1] && b[1].method || "GET");
                                f.url = k(f.url) ? f.url : "";
                                f.url = p(f.url);
                                f.method = f.method;
                                return f
                            };
                            r.cm = function(b) {
                                var f;
                                k(f) || (a.logInfo("M133", b._adrumAjaxT.url()), f = 1);
                                k(b._adrumAjaxT.C) && q(b._adrumAjaxT.C) &&
                                    (b._adrumAjaxT.C += f, a.logInfo("M134", b._adrumAjaxT.C, b._adrumAjaxT.url()))
                            };
                            r.lc = function(b) {
                                var f;
                                k(f) || (a.logInfo("M135", b._adrumAjaxT.url()), f = 1);
                                k(b._adrumAjaxT.C) && q(b._adrumAjaxT.C) && (b._adrumAjaxT.C -= f, a.logInfo("M136", b._adrumAjaxT.C, b._adrumAjaxT.url()))
                            };
                            r.ca = function(a) {
                                return k(a._adrumAjaxT)
                            };
                            r.uc = function(a) {
                                return k(a._adrumAjaxT) && k(a._adrumAjaxT.C)
                            };
                            r.Mo = function(b, f) {
                                b._adrumAjaxT = f._adrumAjaxT;
                                b._adrumAjaxT.C += b.G;
                                a.logInfo("M137", b._adrumAjaxT.C, f._adrumAjaxT.url());
                                b.G = 0
                            };
                            r.Wo =
                                function(a) {
                                    var b = !1;
                                    r.ca(a) && k(a._adrumAjaxT.C) && (r.cm(a), b = !0);
                                    return b
                                };
                            r.pb = function(b) {
                                r.bo(b._adrumAjaxT)["catch"](function(f) {
                                    a.logInfo("M138", b._adrumAjaxT.url(), f)
                                })["finally"](function() {
                                    c.Oc(b, b._adrumAjaxT)
                                })
                            };
                            r.Ke = function(b) {
                                var f = a.utils.now();
                                return 0 === b._adrumAjaxT.C && k(b._adrumAjaxT) ? r.Wg(b._adrumAjaxT, f) : !1
                            };
                            r.Je = function(b) {
                                var f = !1,
                                    m = a.utils.now(),
                                    n = b._adrumAjaxT.getRespAvailTime();
                                k(n) || (b._adrumAjaxT.markRespAvailTime(m), f = !0);
                                return f
                            };
                            r.em = function(b) {
                                a.logInfo("M139", b._adrumAjaxT.url());
                                b._adrumAjaxT.C = 0
                            };
                            return r
                        }(b.xa);
                    b.Pi = w;
                    b.Gb = w.lg()
                })(a.monitor || (a.monitor = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = a.utils.isObject,
                        c = a.utils.map,
                        f = a.utils.reduce,
                        n = a.utils.filter,
                        m = a.utils.isDefined,
                        k = a.utils.isString,
                        q = a.utils.mergeJSON,
                        p = a.utils.La,
                        t = a.utils.Ja,
                        x = a.utils.Zb,
                        s = a.conf.spa2,
                        h = a.conf.ja,
                        w = function(w) {
                            function r() {
                                var b = w.call(this) || this;
                                b.Ce = !1;
                                if (!0 === window["adrum-xhr-disable"]) return a.logInfo("M140"), b;
                                if (!window.XMLHttpRequest) return a.logInfo("M141"), b;
                                b.H = window.XMLHttpRequest.prototype;
                                if (!b.H) return a.logInfo("M142"), b;
                                if (!("open" in b.H && "send" in b.H)) return a.logInfo("M143"), b;
                                b.Ce = a.aop.support(b.H.open) && a.aop.support(b.H.send);
                                b.Ce || a.logInfo("M144");
                                return b
                            }
                            u(r, w);
                            r.prototype.setUp = function() {
                                if (this.Ce) {
                                    a.logInfo("M145");
                                    a.xhrConstructor = window.XMLHttpRequest;
                                    a.xhrOpen = this.xhrOpen = this.H.open;
                                    a.xhrSend = this.xhrSend = this.H.send;
                                    t.setUp();
                                    var f = this;
                                    this.H.open = a.aop.around(this.H.open, function() {
                                        r.Hm(this) && (4 === this.readyState ? (a.logInfo("M146"), r.bl(this._adrumAjaxT),
                                            delete this.zp, x.reportXhr(this, this._adrumAjaxT)) : a.logInfo("M147", this._adrumAjaxT.url()));
                                        var k = 1 <= arguments.length ? String(arguments[0]) : "",
                                            n = 2 <= arguments.length ? String(arguments[1]) : "",
                                            n = a.utils.getFullyQualifiedUrl(n);
                                        !s && f.na + b.Gb.na > t.maxPerPageView || t.Tc(n, k) || (this._adrumAjaxT = new a.events.AdrumAjax(q({
                                            method: k,
                                            url: n
                                        }, f.status)), a.conf.spa2 && m(b.AnySpaMonitor.vp) && m(b.AnySpaMonitor.vp.userPageName) && this._adrumAjaxT.parentPageName(b.AnySpaMonitor.vp.userPageName))
                                    }, null, "XHR.open", b.xa.B);
                                    this.H.send = a.aop.around(this.H.send, function(m) {
                                        var n = this,
                                            q = this._adrumAjaxT,
                                            e = !1;
                                        if (!(!q || !s && ++f.na + b.Gb.na > t.maxPerPageView)) {
                                            var p = a.utils.now(),
                                                c = q.getSendTime();
                                            a.assert(null === c, "M148");
                                            q.timestamp(p);
                                            q.markSendTime(c || p);
                                            q.parentPhase(a.lifecycle.getPhaseName());
                                            n.h = a.b.Qa("XHR.send", void 0, a.b.ra(), a.CauseType.XHR);
                                            h && (p = a.utils.Sa("XHR.send") || "", n.h.oa = p);
                                            b.xa.Kg(q.url()) ? (n.setRequestHeader("ADRUM", "isAjax:true"), a.conf.traceparentHeaderEnabled && (p = a.TraceParentGenerator.createTraceparentHeaderValue(),
                                                n.setRequestHeader("traceparent", p))) : a.logInfo("M149", document.location.href, q.url());
                                            t.xe(q, m);
                                            m = r.Hl(q.url(), t.parameter, m);
                                            q.parameter(m);
                                            var x = 0,
                                                w = function() {
                                                    if (4 == n.readyState) e ? a.logInfo("M150") : (a.logInfo("M151"), f.bd(n));
                                                    else {
                                                        var b = null;
                                                        try {
                                                            a.conf.isAbapApp || (b = n.onreadystatechange)
                                                        } catch (m) {
                                                            if (e) {
                                                                a.logInfo("M152", m);
                                                                return
                                                            }
                                                            a.logInfo("M153", m);
                                                            f.bd(n);
                                                            return
                                                        }
                                                        x++;
                                                        b ? a.aop.support(b) ? (n.onreadystatechange = r.Rf(b, "XHR.onReadyStateChange"), k && f.ri.call(n, "readystatechange", r.Tf), a.logInfo("M154",
                                                            x)) : k || (a.logInfo("M155"), f.bd(n)) : x < r.Rj ? setTimeout(w, 0) : e ? a.logInfo("M156") : (a.logInfo("M157"), f.bd(n))
                                                    }
                                                };
                                            if (k) {
                                                a.logInfo("M158");
                                                try {
                                                    f.hp.call(n, "readystatechange", r.Tf), e = !0
                                                } catch (v) {
                                                    a.error("M159", v)
                                                }
                                            }
                                            w.usedByAgent = !0;
                                            w()
                                        }
                                    }, function() {
                                        if (s) {
                                            var b = this._adrumAjaxT;
                                            b && a.l.w.I.vf(b)
                                        }
                                    }, "XHR.send", b.xa.B);
                                    var k = "addEventListener" in this.H && "removeEventListener" in this.H && a.aop.support(this.H.addEventListener) && a.aop.support(this.H.removeEventListener);
                                    if (k) {
                                        var n = a.utils.gg(this.H, "addEventListener");
                                        this.hp = n.addEventListener;
                                        n.addEventListener = a.aop.around(n.addEventListener, function(b, f, k) {
                                            if (m(f) && (f.L = !0, this instanceof XMLHttpRequest && /^(load|error|readystatechange)$/.test(b) && f)) {
                                                var n = r.Go(f);
                                                if (n) {
                                                    var q = p(arguments);
                                                    q[1] = n;
                                                    a.logInfo("M160");
                                                    return q
                                                }
                                                a.logInfo("M161", b, f)
                                            }
                                        }, null, "XHR.addEventListener");
                                        n = a.utils.gg(this.H, "removeEventListener");
                                        this.ri = n.removeEventListener;
                                        n.removeEventListener = a.aop.around(n.removeEventListener, function(b, m, k) {
                                            if (this instanceof XMLHttpRequest && this._adrumAjaxT) {
                                                var n =
                                                    p(arguments);
                                                m.__adrumInterceptor ? (n[1] = m.__adrumInterceptor, a.logInfo("M162"), f.ri.apply(this, n)) : a.logInfo("M163")
                                            }
                                        }, null, "XHR.removeEventListener")
                                    } else a.logInfo("M164");
                                    a.logInfo("M165")
                                }
                            };
                            r.Hl = function(b, m, k) {
                                if (m && (m = n(c(n(m, function(f) {
                                        return a.utils.Zg(b, f.urls)
                                    }), function(a) {
                                        return a.getFromBody(k)
                                    }), e), 0 < m.length)) return f(m, q, {})
                            };
                            r.Sd = function(b) {
                                var f = b._adrumAjaxT;
                                if (f) {
                                    var m = a.utils.now();
                                    2 == b.readyState ? f.markFirstByteTime(f.getFirstByteTime() || m) : 4 == b.readyState && (f.markRespAvailTime(f.getRespAvailTime() ||
                                        m), f.markFirstByteTime(f.getFirstByteTime() || m), f.markRespProcTime(f.getRespProcTime() || m), this.Ya[f.guid()] = {
                                        requestObj: b,
                                        ajaxT: b._adrumAjaxT
                                    }, m = b.h = a.b.Qa("XHR.load", void 0, b.h, a.CauseType.XHR), h && (b = a.utils.Sa("XHR.onreadystatechange." + b.readyState) || "", m.oa = b), a.b.ua(m), f.th = m.guid)
                                }
                            };
                            r.tg = function(b) {
                                var f = b._adrumAjaxT;
                                if (f && 4 == b.readyState) {
                                    delete this.Ya[f.guid()];
                                    var m = a.utils.now(),
                                        k = f.getRespProcTime();
                                    f.markRespAvailTime(f.getRespAvailTime() || m);
                                    m > k && f.markRespProcTime(m);
                                    x.Oc(b, f);
                                    a.b.Q(f.th)
                                }
                            };
                            r.Rf = function(a, b) {
                                return r.jp(a, function() {
                                    r.Sd(this)
                                }, function() {
                                    r.tg(this)
                                }, b)
                            };
                            r.Tf = function() {
                                r.Sd(this);
                                r.tg(this)
                            };
                            r.Hm = function(a) {
                                return m(a._adrumAjaxT) && k(a._adrumAjaxT._url)
                            };
                            r.bl = function(b) {
                                var f = a.utils.now();
                                b.markRespAvailTime(b.getRespAvailTime() || f);
                                b.markFirstByteTime(b.getFirstByteTime() || f);
                                b.markRespProcTime(b.getRespProcTime() || f)
                            };
                            r.prototype.bd = function(b) {
                                if (b._adrumAjaxT) {
                                    var f = a.utils.now() + 3E4,
                                        m = function() {
                                            r.Sd(b);
                                            var k = b._adrumAjaxT;
                                            if (k) {
                                                var n = a.utils.now();
                                                4 == b.readyState ?
                                                    (a.assert(null === k.getRespProcTime(), "M166"), k.markRespProcTime(k.getRespProcTime() || n), a.logInfo("M167"), x.Oc(b, k), a.b.Q(k.th)) : n < f ? a.utils.oSTO(m, r.Ve) : (delete b._adrumAjaxT, a.logInfo("M168"))
                                            }
                                        };
                                    m()
                                }
                            };
                            r.jp = function(b, f, m, k) {
                                var n = b;
                                b && "object" === typeof b && "toString" in b && "[xpconnect wrapped nsIDOMEventListener]" === b.toString() && "handleEvent" in b && (n = function() {
                                    b.handleEvent.apply(this, p(arguments))
                                });
                                return a.aop.around(n, f, m, k)
                            };
                            r.Go = function(b) {
                                if (b.__adrumInterceptor) return b.__adrumInterceptor;
                                if (a.aop.support(b)) {
                                    var f = r.Rf(b, "XHR.invokeEventListener");
                                    return b.__adrumInterceptor = f
                                }
                            };
                            return r
                        }(b.xa);
                    w.Rj = 5;
                    w.Ve = 50;
                    b.XHRMonitor = w;
                    b.xhrMonitor = new b.XHRMonitor
                })(a.monitor || (a.monitor = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = a.utils.Zb,
                        c = function(f) {
                            function n(b) {
                                b = f.call(this, b) || this;
                                b.perf = new a.PerformanceTracker;
                                b.kc = !1;
                                b.Cf = 0;
                                return b
                            }
                            u(n, f);
                            n.prototype.type = function() {
                                return a.EventType.VPageView
                            };
                            n.prototype.Ld = function() {
                                return b.EventTracker.od(this.guid(), this.url(), this.type())
                            };
                            n.prototype.ze = function() {
                                var b = this.Ld();
                                a.monitor.ia.set("parent", b);
                                a.logInfo("M169", b.guid(), b.url())
                            };
                            n.prototype.startCorrelatingXhrs = function() {
                                a.logInfo("M170");
                                a.utils.isDefined(this.Bb) && !a.monitor.AnySpaMonitor.Ta && e.$m(this, this.Bb.guid)
                            };
                            n.prototype.start = function() {
                                this.startCorrelatingXhrs();
                                this.ze()
                            };
                            return n
                        }(b.EventTracker);
                    b.AnySpaVPageView = c;
                    b.Ma(b.K[a.EventType.VPageView], c.prototype)
                })(a.events || (a.events = {}))
            })(h || (h = {}));
            (function(a) {
                a.report = function(b) {
                    a.utils.isObject(b) &&
                        a.utils.isFunction(b.type) ? -1 == [a.EventType.PageView, a.EventType.Ajax, a.EventType.VPageView, a.EventType.Error].indexOf(b.type()) ? a.reportAPIMessage(a.Z.wa, b.type() + "is not a valid external event type", "ADRUM.report", Array.prototype.slice.call(arguments)) : a.conf.spa2 && a.EventType.VPageView == b.type() ? a.logInfo("M171") : a.utils.Ih(function() {
                            a.command("reportEvent", b)
                        }) : a.reportAPIMessage(a.Z.Pe, "", "ADRUM.report", Array.prototype.slice.call(arguments))
                };
                a.setVirtualPageName = function(b) {
                    a.utils.isString(b) &&
                        0 < a.utils.trim(b).length && a.conf.spa2 && a.monitor.AnySpaMonitor.vp && a.monitor.AnySpaMonitor.Nh(b)
                };
                a.markVirtualPageBegin = function(b, e) {
                    a.conf.spa2 && (this.hb = a.utils.isDefined(e) ? e : !0, a.logInfo("M172", document.URL), a.monitor.AnySpaMonitor.we(document.URL, b, !0), a.monitor.AnySpaMonitor.Ph())
                };
                a.markVirtualPageEnd = function() {
                    a.conf.spa2 && this.hb && (a.logInfo("M173", a.monitor.AnySpaMonitor.la), a.monitor.AnySpaMonitor.Xg(a.monitor.AnySpaMonitor.vp.startTime, a.utils.now()), this.hb = !1)
                };
                a.pauseReporting = function(b) {
                    a.conf.isReportingPaused =
                        b;
                    a.logInfo("M174", b)
                };
                a.setAppReleaseId = function(b) {
                    a.conf.releaseId = a.conf.releaseId || b
                }
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = a.utils.isDefined,
                        c = a.aop.after,
                        f = a.aop.before,
                        n = a.utils.getFullyQualifiedUrl,
                        m = a.conf.disableUsingCauseStart,
                        k = function() {
                            function k() {}
                            k.prototype.setUp = function() {
                                var b = !1;
                                k.Aa = a.utils.fb();
                                k.ho();
                                a.l.w.setUp(a.utils.now());
                                k.la = document.URL;
                                k.Id = [];
                                a.utils.isDefined(window.history) && a.utils.isFunction(window.history.pushState) && (b = !0, k.uf("push"));
                                a.utils.isDefined(window.history) &&
                                    a.utils.isFunction(window.history.replaceState) && (b = !0, k.uf("replace"));
                                k.Id = k.Id.concat(a.utils.Wb(a.utils.Zc, a.conf.userConf && a.conf.userConf.spa && a.conf.userConf.spa.spa2 && a.utils.isObject(a.conf.userConf.spa.spa2) && a.conf.userConf.spa.spa2.vp && a.conf.userConf.spa.spa2.vp.exclude));
                                if (a.utils.isDefined(window.addEventListener)) {
                                    var b = !0,
                                        f = function() {
                                            k.la == document.URL || k.$d || k.Qh()
                                        };
                                    f.L = !0;
                                    window.addEventListener("popstate", f)
                                }
                                b || a.logInfo("M175")
                            };
                            k.uf = function(a) {
                                switch (a) {
                                    case "push":
                                        window.history.pushState =
                                            k.Th(window.history.pushState, a);
                                        break;
                                    case "replace":
                                        window.history.replaceState = k.Th(window.history.replaceState, a)
                                }
                            };
                            k.Th = function(f, m) {
                                var n = m[0].toUpperCase() + m.slice(1);
                                return a.aop.around(f, function(f, n, e) {
                                    (k.vp && k.vp.kc || k.ug(e)) && b.DOMEventsMonitor.Gc && !a.hb && (a.logInfo("M176", m), k.we(document.URL))
                                }, function(f, n, e) {
                                    if (k.vp && k.vp.kc || k.ug(e)) b.DOMEventsMonitor.Gc && (a.hb ? (a.logInfo("M177", m), k.vp.url(document.URL)) : (a.logInfo("M178", m), k.Ph())), k.la = document.URL
                                }, "history" + n + "State")
                            };
                            k.ug =
                                function(a) {
                                    return a && k.la !== n(a)
                                };
                            k.Qh = function() {
                                k.$d = !0;
                                var f = document.URL;
                                a.logInfo("M179", k.la, f);
                                b.DOMEventsMonitor.Gc && (a.hb ? (a.logInfo("M180"), k.vp.url(document.URL)) : (k.we(k.la), k.Ae(f)));
                                k.la = f;
                                k.$d = !1
                            };
                            k.ho = function() {
                                var b;
                                a.b.ua = c(a.b.ua, function() {
                                    b = location.hash
                                });
                                a.b.Q = f(a.b.Q, function() {
                                    b == location.hash || k.la == document.URL || k.$d || k.Qh()
                                })
                            };
                            k.we = function(a, b, f) {
                                k.Wn();
                                k.Ta = !1;
                                k.Qf(a, b, f)
                            };
                            k.Ph = function() {
                                var a = document.URL;
                                k.Ae(a);
                                k.la = a
                            };
                            k.Mp = function() {
                                k.Ta = !0;
                                k.Qf(k.la);
                                k.Ae()
                            };
                            k.Wn = function() {
                                var f = a.l.w;
                                a.conf.N && a.l.ac.Wa && a.utils.isDefined(b.DOMEventsMonitor.currentBasePage) && (a.logInfo("M181"), f.I.k || f.M.k ? f.navComplete(a.utils.now()) : f.navComplete(a.utils.max(f.I.Ca, f.M.ka)), f.reset());
                                k.Ta || !a.utils.isDefined(k.vp) || k.vp.zh || (a.logInfo("M182"), f = k.vl(a.l.w.k), k.Xg(k.vp.startTime, f))
                            };
                            k.vl = function(b) {
                                var f = a.utils.now();
                                b ? (f = k.wl(a.l.w.jb), a.l.w.reset()) : f = k.vp.endTime;
                                return f
                            };
                            k.po = function(b, f) {
                                return k.vp.kc ? !1 : e(f) && 0 < f.length && a.utils.Ac(void 0, b, f)
                            };
                            k.wl = function(b) {
                                var f =
                                    a.utils.now();
                                b ? a.l.w.M.jk() || a.l.w.I.kk() || (f = a.utils.max(a.l.w.M.ka, a.l.w.I.Ca)) : f = a.l.w.startTime;
                                return f
                            };
                            k.Xg = function(a, b) {
                                k.ce(a, b);
                                k.Ug(a);
                                k.report()
                            };
                            k.Nh = function(b) {
                                a.utils.isDefined(b) && (k.vp.userPageName = b)
                            };
                            k.Qf = function(b, f, n) {
                                k.reset();
                                k.vp = new a.events.AnySpaVPageView;
                                k.vp.startUrl = b;
                                k.Nh(f);
                                a.utils.isBoolean(n) && (k.vp.kc = n);
                                b = a.b.rd();
                                k.Ta ? k.vp.startTime = a.utils.fb() : (f = a.utils.now(), n = b ? b.start : f, m || (f = n), k.vp.startTime = f);
                                k.vp.endTime = k.vp.startTime;
                                k.vp.timestamp(k.vp.startTime);
                                k.vp.Bb = b
                            };
                            k.Ae = function(b) {
                                a.utils.isDefined(b) && k.vp.url(b);
                                k.vp.start();
                                a.hb || a.l.w.start(a.utils.now())
                            };
                            k.ce = function(b, f) {
                                a.utils.isDefined(k.vp) && (a.conf.N && k.Ak(b), a.utils.isDefined(f) ? k.vp.endTime = a.conf.N ? f - b > k.vp.vct ? f : k.vp.vct + b : f : k.vp.endTime = b)
                            };
                            k.Ak = function(b) {
                                a.logInfo("M183");
                                b = a.c.td(b);
                                k.vp.vct = b.vct;
                                k.vp.spi = b.spi;
                                a.c.reset()
                            };
                            k.Ug = function(f) {
                                a.utils.isDefined(k.vp) && k.vp.resTiming(b.resourceMonitor.Nl(k.Aa, f))
                            };
                            k.vc = function() {
                                var b = a.b.Ql();
                                return a.utils.isDefined(b) && a.utils.isDefined(k.vp) &&
                                    (!a.utils.isDefined(k.vp.Bb) || k.vp.Bb != b)
                            };
                            k.report = function() {
                                if (a.utils.isDefined(k.vp))
                                    if (k.po(k.vp.url(), k.Id)) a.logInfo("M185", k.vp.url());
                                    else {
                                        a.logInfo("M186");
                                        var f = k.vp;
                                        if (f.zh) a.logInfo("M187");
                                        else {
                                            var m = a.utils.isDefined(b.DOMEventsMonitor.currentBasePage) ? b.DOMEventsMonitor.currentBasePage.url() : document.URL;
                                            f.parentUrl(m);
                                            a.command("call", function() {
                                                a.reporter.reportEvent(f)
                                            });
                                            f.zh = !0
                                        }
                                    }
                                else a.logInfo("M184")
                            };
                            k.reset = function() {
                                k.vp = null
                            };
                            return k
                        }();
                    b.AnySpaMonitor = k;
                    b.ik = new b.AnySpaMonitor
                })(a.monitor ||
                    (a.monitor = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = a.utils.isDefined,
                        c = function(f) {
                            function n() {
                                var b = null !== f && f.apply(this, arguments) || this;
                                b.Vm = function(f) {
                                    var q = f.message,
                                        e = f.filename,
                                        c = f.lineno,
                                        x = f.colno;
                                    f = f.error;
                                    a.logInfo("M188");
                                    if (a.utils.isDefined(f) || n.Dc) a.logInfo("M189"), n.Dc = !0, b.va(q, e, c, x, f)
                                };
                                b.Wm = function(f) {
                                    var n = f.blockedURI,
                                        e = f.columnNumber,
                                        c = f.lineNumber,
                                        x = f.effectiveDirective,
                                        s = f.violatedDirective;
                                    f = f.sourceFile;
                                    a.logInfo("M190");
                                    n = a.utils.isDefined(n) ? n : "";
                                    x = a.utils.isDefined(x) ?
                                        x : "";
                                    s = a.utils.isDefined(s) ? s : "";
                                    f = a.utils.isDefined(f) ? f : "";
                                    b.va("SecurityPolicyViolation: blockedURI = " + n + " & effectiveDirective = " + x + " & violatedDirective = " + s + " & sourceFile = " + f, void 0, c, e, void 0)
                                };
                                return b
                            }
                            u(n, f);
                            n.B = function(b) {
                                a.monitor.ia.va(b.message || b.description, b.fileName || b.filename, b.lineNumber, b.columnNumber, b)
                            };
                            n.np = function(b) {
                                var f = a.utils.isDefined(b.blockedURI) ? b.blockedURI : "",
                                    n = a.utils.isDefined(b.documentURI) ? b.documentURI : "";
                                b = a.utils.isDefined(b.effectiveDirective) ? b.effectiveDirective :
                                    "";
                                a.monitor.ia.va("blockedURI = " + f + "& documentURI = " + n + "? effectiveDirective = " + b, void 0, void 0, void 0, void 0)
                            };
                            n.prototype.setUp = function() {
                                var b = this;
                                f.prototype.setUp.call(this);
                                a.utils.addEventListener(window, "error", this.Vm, !0);
                                a.utils.addEventListener(window, "securitypolicyviolation", this.Wm, !0);
                                a.listenForErrors = function() {
                                    b.Rg()
                                };
                                this.Rg()
                            };
                            n.prototype.Nn = function() {
                                n.Hd = 0
                            };
                            n.prototype.va = function(f, k, q, c, t) {
                                n.Hd >= a.conf.lj ? a.logInfo("M191") : (t = a.utils.tryExtractingErrorStack(t), f = new a.events.Error(a.utils.mergeJSON({
                                    msg: f +
                                        "",
                                    url: a.utils.isString(k) ? k : void 0,
                                    line: a.utils.isNumber(q) ? q : void 0,
                                    col: a.utils.isNumber(c) ? c : void 0,
                                    stack: t
                                }, this.status)), a.conf.spa2 && e(b.AnySpaMonitor.vp) && e(b.AnySpaMonitor.vp.userPageName) && f.parentPageName(b.AnySpaMonitor.vp.userPageName), a.command("reportPageError", f), n.Hd++, n.hadErrors = !0)
                            };
                            n.prototype.Rg = function() {
                                var b = this;
                                n.Dc = !1;
                                a.aop.support(window.onerror) ? (window.onerror = a.aop.around(window.onerror, function(f, q, e, c, x) {
                                    n.Dc ? a.logInfo("M192") : n.Yd ? a.logInfo("M194") : (a.logInfo("M193"),
                                        b.va(f, q, e, c, x), n.Yd = !0)
                                }, function() {
                                    a.logInfo("M195");
                                    n.Yd = !1
                                }, "onerror"), a.logInfo("M196")) : a.logInfo("M197")
                            };
                            return n
                        }(b.fd);
                    c.Yd = !1;
                    c.Hd = 0;
                    c.hadErrors = !1;
                    c.Dc = !1;
                    b.ErrorMonitor = c;
                    b.ia = new b.ErrorMonitor
                })(a.monitor || (a.monitor = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = a.logInfo,
                        c = a.aop.after,
                        f = function(f) {
                            function m() {
                                return null !== f && f.apply(this, arguments) || this
                            }
                            u(m, f);
                            m.prototype.setUp = function() {
                                a.utils.map(["error", "exception"], function(b) {
                                    var f = A[b];
                                    a.utils.isFunction(f) && a.aop.support(f) ?
                                        (e("M198", b), A[b] = c(f, function(a) {
                                            e("M199", b, a);
                                            m.Xj(a)
                                        })) : e("M200", b)
                                });
                                b.ia.va = c(b.ia.va, function() {
                                    0 < m.Ba.length ? (e("M201"), m.Ba = []) : e("M202")
                                })
                            };
                            m.Xj = function(b) {
                                m.Ba.length >= a.conf.fj ? e("M203") : a.utils.isString(b) ? (e("M204", b), m.Ba.push(b), a.utils.oSTO(m.yh)) : a.utils.isObject(b) ? (b = a.utils.toJSONString(b), null !== b ? (e("M205", b), m.Ba.push(b), a.utils.oSTO(m.yh)) : a.error("M206")) : e("M207", typeof b)
                            };
                            m.yh = function() {
                                0 < m.Ba.length ? (e("M208"), m.Ba.forEach(function(a) {
                                    b.ia.va(a)
                                }), m.Ba = []) : e("M209")
                            };
                            return m
                        }(b.fd);
                    f.Ba = [];
                    b.op = f;
                    b.Gk = new f
                })(a.monitor || (a.monitor = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = function(b) {
                        function f(a) {
                            return b.call(this, a) || this
                        }
                        u(f, b);
                        f.prototype.type = function() {
                            return a.EventType.WebVital
                        };
                        return f
                    }(b.EventTracker);
                    b.WebVitalView = e;
                    b.Ma(b.K[a.EventType.WebVital], e.prototype)
                })(a.events || (a.events = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = function() {
                        function b(a) {
                            this.De = null;
                            this.k = !1;
                            this.promise = null;
                            this.en = a
                        }
                        b.prototype.start = function() {
                            var b =
                                this;
                            this.k || (this.promise = new window.Promise(function(a) {
                                b.De = setTimeout(function() {
                                    b.k = !1;
                                    a()
                                }, b.en);
                                b.k = !0
                            }));
                            if (this.promise) return this.promise;
                            throw new a.Error("Timeout not started");
                        };
                        b.prototype.cancel = function() {
                            this.k && this.De && (clearTimeout(this.De), this.k = !1, this.promise = null)
                        };
                        return b
                    }();
                    b.Oj = e
                })(a.utils || (a.utils = {}))
            })(h || (h = {}));
            (function(a) {
                var b = function() {
                    function b() {}
                    b.Yj = function(c) {
                        try {
                            b.mb.push(c), b.no() && (b.qc(), b.timeout.cancel())
                        } catch (f) {
                            a.logInfo("CWV - CoreWebVitalsQueue -- Error in addMetric")
                        }
                    };
                    b.lo = function() {
                        try {
                            a.logInfo("CWV - CoreWebVitalsQueue -- setup"), addEventListener("visibilitychange", function() {
                                "hidden" === document.visibilityState && b.qc()
                            }), addEventListener("pagehide", b.qc), b.timeout = new a.utils.Oj(b.xj), b.Vh()
                        } catch (c) {
                            a.logInfo("CWV - CoreWebVitalsQueue -- Error in setup")
                        }
                    };
                    b.$n = function() {
                        b.pk = document.URL
                    };
                    b.no = function() {
                        try {
                            for (var c = [], f = 0; f < b.mb.length; f++) {
                                var n = b.mb[f];
                                c.push(n.name && n.name.toLocaleLowerCase())
                            }
                            return b.Hk.every(function(a) {
                                return -1 !== c.indexOf(a)
                            })
                        } catch (m) {
                            return a.logInfo("CWV - CoreWebVitalsQueue -- Error in shouldFlushQueue"), !1
                        }
                    };
                    b.qc = function() {
                        try {
                            if (0 < b.mb.length) {
                                a.logInfo("CWV - CoreWebVitalsQueue -- Flushing Queue");
                                var c = [];
                                b.mb.forEach(function(a) {
                                    var f = a.name && a.name.toLowerCase();
                                    c.push({
                                        webVitalValue: a.value && parseFloat(a.value.toFixed(3)),
                                        webVitalRating: a.rating,
                                        webVitalName: f
                                    });
                                    b.ak(f)
                                });
                                var f = new a.events.WebVitalView({
                                    coreWebVitalsMetrics: c
                                });
                                f.url(b.pk);
                                a.command("reportWebVital", f);
                                b.reset()
                            }
                            b.Ek()
                        } catch (n) {
                            a.logInfo("CWV - CoreWebVitalsQueue -- Error in flushQueue")
                        }
                    };
                    b.Vh = function() {
                        try {
                            b.timeout.cancel(),
                                b.timeout.start().then(function() {
                                    b.qc()
                                })
                        } catch (c) {
                            a.logInfo("CWV - CoreWebVitalsQueue -- Error in startTimer")
                        }
                    };
                    b.reset = function() {
                        b.mb = []
                    };
                    b.ak = function(a) {
                        -1 !== b.ue.indexOf(a) && b.ue.push(a)
                    };
                    b.Ek = function() {
                        try {
                            ["cls", "lcp"].every(function(a) {
                                return -1 !== b.ue.indexOf(a)
                            }) ? (a.logInfo("CWV - CoreWebVitalsQueue -- All events collected"), b.timeout.cancel()) : b.Vh()
                        } catch (c) {
                            a.logInfo("CWV - CoreWebVitalsQueue -- Error in checkForCompletion")
                        }
                    };
                    return b
                }();
                b.mb = [];
                b.xj = 12E4;
                b.Hk = ["cls", "lcp", "fid"];
                b.ue = [];
                a.ed = b
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = a.utils.isDefined,
                        c = function() {
                            function b() {}
                            b.prototype.setUp = function() {
                                function n() {
                                    if (k >= m) a.logInfo("CWV - Failed to load cwv script after " + m + " attempts.");
                                    else {
                                        var q = document.createElement("script"),
                                            c = a.conf.elementIdWithNonce;
                                        q.type = "text/javascript";
                                        q.async = !0;
                                        q.src = "https://cdn.appdynamics.com/adrum/web-vitals/web-vitals.iife.3.3.2.js";
                                        c && e(a.utils.trim(c)) && (c = document.getElementById(c)) && (c = c.nonce, c = a.utils.trim(c), e(c) && !a.utils.um(c) &&
                                            q.setAttribute("nonce", c));
                                        q.onload = function() {
                                            b.webVitalsGlobal = window.webVitals;
                                            b.jo()
                                        };
                                        q.onerror = function() {
                                            a.logInfo("CWV - Failed to load cwv script, retrying...");
                                            k++;
                                            n()
                                        };
                                        document.head.appendChild(q)
                                    }
                                }
                                var m = 3,
                                    k = 0;
                                n()
                            };
                            b.jo = function() {
                                if (e(b.webVitalsGlobal)) {
                                    var n = {
                                        reportAllChanges: !1
                                    };
                                    b.webVitalsGlobal.onFID(b.ie, n);
                                    b.webVitalsGlobal.onCLS(b.ie, n);
                                    b.webVitalsGlobal.onLCP(b.ie, n);
                                    a.ed.lo();
                                    a.ed.$n()
                                } else a.logInfo("CWV - webVitalsGlobal is not defined")
                            };
                            b.ie = function(b) {
                                a.logInfo("CWV - Metric reported " +
                                    b.name + " -- " + b.value + " -- " + b.rating);
                                a.ed.Yj(b)
                            };
                            return b
                        }();
                    b.WebVitalsMonitor = c;
                    b.ap = new b.WebVitalsMonitor
                })(a.monitor || (a.monitor = {}))
            })(h || (h = {}));
            (function(a) {
                var b = a.utils.isDefined,
                    e = a.utils.xm,
                    c = a.utils.isNumber,
                    f = a.monitor.Pi,
                    n = a.conf.ja;
                a.ni = window.Promise;
                a.gc = null;
                a.Bq = null;
                a.nf = Object.defineProperty;
                var m = a.conf.spa2 && a.conf.modernBrowserFeaturesAvailable,
                    k = a.conf.isZonePromise,
                    q = a.conf.fetch,
                    p = function() {
                        function q() {}
                        q.km = function() {
                            Object.defineProperty = a.aop.around(a.nf, function(a,
                                f, k) {
                                "Promise" === f && b(k) && q.Cg(k)
                            });
                            if (k && a.utils.ae()) {
                                a.logInfo("M210");
                                var f = Object.getOwnPropertyDescriptor(window, "Promise");
                                q.Cg(f);
                                a.nf(window, "Promise", f);
                                window.Promise = window.Promise
                            }
                        };
                        q.Cg = function(f) {
                            b(window.Zone) && b(window.Zone.assertZonePatched) && (window.Zone.assertZonePatched = function() {});
                            f = f || Object.getOwnPropertyDescriptor(window, "Promise");
                            var k = f.set,
                                m = f.get;
                            l(k) && (f.set = function(f) {
                                !0 === f.agentPromise ? a.logInfo("M211") : (k.apply(this, arguments), b(a.gc) ? k.apply(this, arguments) :
                                    (a.logInfo("M212"), q.setUp()))
                            });
                            l(m) && (f.get = function() {
                                var f = m.apply(this, arguments);
                                b(a.gc) && (a.logInfo("M213"), f = a.gc);
                                return f
                            })
                        };
                        q.setUp = function() {
                            if (b(a.ni)) {
                                q.nm();
                                q.mm();
                                var f = function(f) {
                                    function k(n) {
                                        var e = this.constructor,
                                            c = n;
                                        this.aa = a.utils.generateGUID();
                                        b(n) && (c = q.lm(n, this));
                                        n = a.utils.Uj(this, f, [c], e);
                                        m && (b(this.h) && (n.h = this.h), b(this.Xa) ? n.h = this.Xa.h : n.h = a.b.ra());
                                        n.aa = this.aa;
                                        this.Xa = n;
                                        a.logInfo("M214", n.aa);
                                        m && b(n.h) && a.logInfo("M215", n.h.guid);
                                        return n
                                    }
                                    a.utils.kd(k, f);
                                    return k
                                }(window.Promise);
                                f.agentPromise = !0;
                                a.gc = f;
                                window.Promise = f;
                                b(window.addEventListener) ? window.addEventListener("unhandledrejection", this.ei) : window.mq = this.ei
                            }
                        };
                        q.Oa = function(f, k) {
                            return function() {
                                if (m) {
                                    var e, c = void 0;
                                    e = void 0;
                                    a.logInfo("M216", f);
                                    switch (f) {
                                        case q.J.df:
                                        case q.J.cf:
                                        case q.J.Te:
                                        case q.J.Se:
                                            a.utils.isDefined(k) && a.utils.isDefined(k.Xa) && (c = k.Xa.h);
                                            e = a.b.ra() || c;
                                            e = new a.$b(e, new a.Ka(f), a.CauseType.PROMISE);
                                            break;
                                        case q.J.af:
                                        case q.J.bf:
                                        case q.J.Ze:
                                            e = k.h, e = new a.$b(e, new a.Ka(f), a.CauseType.PROMISE), a.b.ua(e)
                                    }
                                    n &&
                                        (c = a.utils.Sa(f) || "", e.oa = c);
                                    b(k) && (b(k.Xa) ? (k.Xa.h = e, a.logInfo("M217", k.Xa.aa)) : (a.logInfo("M218", k.aa), k.h = e))
                                }
                            }
                        };
                        q.lm = function(f, k) {
                            m && (f = a.aop.around(f, function() {
                                k.h = new a.$b(a.b.ra(), new a.Ka(q.J.$e), a.CauseType.PROMISE);
                                if (n) {
                                    var f = a.utils.Sa(q.J.$e) || "";
                                    k.h.oa = f
                                }
                                a.b.ua(k.h);
                                a.logInfo("M219", k.h.guid, k.aa);
                                b(arguments[0]) && (a.logInfo("M220"), f = a.aop.around(arguments[0], q.Oa(q.J.df, k)), arguments[0] = f);
                                b(arguments[1]) && (a.logInfo("M221"), f = a.aop.around(arguments[1], q.Oa(q.J.cf, k)), arguments[1] =
                                    f);
                                return a.utils.La(arguments)
                            }, function() {
                                a.logInfo("M222");
                                a.b.Q(k.h ? k.h.guid : null)
                            }, "interceptPromiseExecutor", q.Lc));
                            return f
                        };
                        q.mm = function() {
                            a.utils.refs.promiseThen = window.Promise.prototype.then;
                            var b = q.rh(),
                                f = {
                                    parentObject: window.Promise.prototype,
                                    property: "then",
                                    propertyWrappedFunctionName: "promiseThen",
                                    wrapNewFunctionAgain: !0
                                };
                            f.setUpFunc = function(b) {
                                return function(f) {
                                    a.utils.ae() || q.Kn(f, b)
                                }
                            }.call(this, f);
                            f.bb = b;
                            a.aop.forceWrap(f);
                            a.utils.refs.promiseFinally = window.Promise.prototype["finally"];
                            b = q.qh();
                            f = {
                                parentObject: window.Promise.prototype,
                                property: "finally",
                                propertyWrappedFunctionName: "promiseFinally",
                                wrapNewFunctionAgain: !0
                            };
                            f.setUpFunc = function(a) {
                                return function(b) {
                                    q.Jn(b, a)
                                }
                            }.call(this, f);
                            f.bb = b;
                            a.aop.forceWrap(f)
                        };
                        q.Kn = function(a, b) {
                            b.bb = q.rh(a)
                        };
                        q.Jn = function(a, b) {
                            b.bb = q.qh(a)
                        };
                        q.nm = function() {
                            q.Hn();
                            q.Gn()
                        };
                        q.Gm = function(b) {
                            return b instanceof q || b instanceof a.ni
                        };
                        q.bm = function(f) {
                            var k;
                            b(k) || (a.logInfo("M223"), k = 1);
                            b(f.G) && c(f.G) && (f.G += k, a.logInfo("M224", f.G))
                        };
                        q.Qk = function(a) {
                            var f;
                            b(f) || (f = 1);
                            b(a.G) && c(a.G) && (a.G -= f)
                        };
                        q.dm = function(f) {
                            b(f.G) && a.utils.Bm(f.G) ? (a.logInfo("M225"), q.bm(f)) : f.G = 1
                        };
                        q.Lo = function(b) {
                            f.Wo(b) || (a.logInfo("M226"), q.dm(b))
                        };
                        q.On = function(a) {
                            a.G = 0
                        };
                        q.Zd = function(a) {
                            return b(a.L)
                        };
                        q.rh = function(k) {
                            var n = null;
                            k = k || window.Promise.prototype.then;
                            k = a.aop.around(k, function() {
                                var k = this;
                                n = k;
                                a.logInfo("M227", k.aa);
                                if (b(arguments[0]) && a.utils.isFunction(arguments[0])) {
                                    q.Lo(k);
                                    a.logInfo("M228", k.aa);
                                    var e = a.aop.around(arguments[0], function() {
                                        q.Oa(q.J.af, k)();
                                        k &&
                                            !k.G && f.ca(k) && !q.Zd(k) && (k._adrumAjaxT.tempRespAvailAndProcTime = a.utils.now(), f.Ya[k._adrumAjaxT.guid()] = {
                                                requestObj: k,
                                                ajaxT: k._adrumAjaxT
                                            })
                                    }, function() {
                                        var n = a.utils.Md(arguments, "origFuncResult");
                                        b(n) && b(n.G) && q.Gm(n) && f.ca(k) ? (f.Mo(n, k), q.On(n)) : (f.ca(k) && !q.Zd(k) && f.uc(k) && (f.Je(k), f.lc(k), !0 === f.Ke(k) && (a.logInfo("M229"), a.logInfo("M230"), delete f.Ya[k._adrumAjaxT.guid()], f.pb(k))), m && (a.logInfo("M231"), a.b.Q(k.h ? k.h.guid : null)))
                                    }, "interceptPromiseThenFulfil", function() {
                                        f.ca(k) && f.uc(k) && (f.Je(k) &&
                                            f.lc(k), !0 === f.Ke(k) && (a.logInfo("M232"), a.logInfo("M233"), delete f.Ya[k._adrumAjaxT.guid()], f.pb(k)))
                                    });
                                    arguments[0] = e
                                }
                                b(arguments[1]) && a.utils.isFunction(arguments[1]) && (a.logInfo("M234", k.aa), e = a.aop.around(arguments[1], q.Oa(q.J.bf, k), function() {
                                    m && (a.logInfo("M235"), a.b.Q(k.h ? k.h.guid : null))
                                }, null, q.Lc), arguments[1] = e);
                                return a.utils.La(arguments)
                            }, function() {
                                var k = a.utils.Md(arguments, "origFuncResult");
                                !b(k) || b(arguments[0]) && !a.utils.isFunction(arguments[0]) || (m && (k.h = this.h), q.Zd(this) && f.ca(this) &&
                                    (k._adrumAjaxT = this._adrumAjaxT, f.uc(this) || f.em(k)))
                            }, "interceptPromiseThenInterceptor", function() {
                                var b = n;
                                f.ca(b) && f.uc(b) && (f.Je(b) && f.lc(b), !0 === f.Ke(b) && (a.logInfo("M236"), a.logInfo("M237"), delete f.Ya[b._adrumAjaxT.guid()], f.pb(b)))
                            });
                            k.usedByAgent = !0;
                            return window.Promise.prototype.then = k
                        };
                        q.qh = function(k) {
                            if (b(window.Promise.prototype["finally"])) return k = k || window.Promise.prototype["finally"], k = a.aop.around(k, function() {
                                var k = this;
                                b(k._adrumAjaxT) && b(k._adrumAjaxT.C) ? f.lc(k) : b(k.G) && q.Qk(k);
                                if (b(arguments[0])) {
                                    a.logInfo("M238", k.aa);
                                    var n = a.aop.around(arguments[0], q.Oa(q.J.Ze, k), function() {
                                        m && (a.logInfo("M239"), a.b.Q(k.h ? k.h.guid : null))
                                    });
                                    arguments[0] = n;
                                    return a.utils.La(arguments)
                                }
                            }, function() {
                                a.logInfo("M240");
                                a.b.Q(this.h ? this.h.guid : null)
                            }, "interceptPromiseFinally"), k.usedByAgent = !0, window.Promise.prototype["finally"] = k
                        };
                        q.Hn = function() {
                            window.Promise.resolve = a.aop.around(window.Promise.resolve, q.Oa(q.J.Te, null), null, "interceptPromiseResolve", q.Lc)
                        };
                        q.Gn = function() {
                            window.Promise.reject =
                                a.aop.around(window.Promise.reject, q.Oa(q.J.Se, null), null, "interceptPromiseReject", q.Lc)
                        };
                        q.ei = function(b) {
                            var f = b.detail ? b.detail.reason : b.reason;
                            if (b.promise && !b.promise.aa) b.preventDefault();
                            else {
                                if (!e(f)) try {
                                    f = new window.Error(f)
                                } catch (k) {
                                    f = k
                                }
                                a.monitor.ErrorMonitor.B(f)
                            }
                        };
                        return q
                    }();
                p.J = {
                    $e: "PromiseInstance.init",
                    df: "PromiseInstance.resolve",
                    cf: "PromiseInstance.reject",
                    af: "PromiseInstance.onFulfilled",
                    bf: "PromiseInstance.onRejected",
                    Ze: "PromiseInstance.finally",
                    Te: "PromiseConstructor.resolve",
                    Se: "PromiseConstructor.reject"
                };
                p.Lc = function() {};
                a.Ej = p;
                k && q && (p.km(), f.lg().im())
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    function e(a, b) {
                        var f = [],
                            e = /^\s*(ADRUM_BT\w*)=(.*)\s*$/i.exec(a);
                        if (e) {
                            var c = e[1],
                                e = e[2].replace(/^"|"$/g, ""),
                                e = decodeURIComponent(e).split("|"),
                                x = e[0].split(":");
                            if ("R" === x[0] && Number(x[1]) === b)
                                for (n(c), c = 1; c < e.length; c++) f.push(e[c])
                        }
                        return f
                    }

                    function c(a, b) {
                        var f = /^\s*(ADRUM_(\d+)_(\d+)_(\d+))=(.*)\s*$/i.exec(a);
                        if (f) {
                            var e = f[1],
                                c = f[4],
                                x = f[5];
                            if (Number(f[3]) === b) return n(e), {
                                index: Number(c),
                                value: x
                            }
                        }
                        return null
                    }

                    function f(b) {
                        var f = /^\s*ADRUM=s=([\d]+)&r=(.*)\s*/.exec(b);
                        if (f) {
                            a.logInfo("M243", b);
                            if (3 === f.length) return n("ADRUM", "samesite=lax"), {
                                startTime: Number(f[1]),
                                startPage: f[2]
                            };
                            a.error("M244", b);
                            return null
                        }
                    }

                    function n(b, f) {
                        a.logInfo("M242", b);
                        var n = new Date;
                        n.setTime(n.getTime() - 1E3);
                        document.cookie = b + "=;Expires=" + n.toUTCString() + ";" + (f || "")
                    }
                    b.startTimeCookie = null;
                    b.cookieMetadataChunks = null;
                    b.Uf = function(m, k) {
                        a.logInfo("M241");
                        for (var n = k ? k.length : 0, p = [], h = m.split(";"),
                                x = 0; x < h.length; x++) {
                            var s = h[x],
                                z = c(s, n);
                            z ? p.push(z) : (s = f(s), null != s && (b.startTimeCookie = s))
                        }
                        Array.prototype.sort.call(p, function(a, b) {
                            return a.index - b.index
                        });
                        s = [];
                        for (x = 0; x < p.length; x++) s.push(p[x].value);
                        for (x = 0; x < h.length; x++)(p = e(h[x], n)) && 0 < p.length && (s = s.concat(p));
                        b.cookieMetadataChunks = s
                    };
                    a.correlation.eck = b.Uf
                })(a.correlation || (a.correlation = {}))
            })(h || (h = {}));
            (function(a) {
                var b = window.addEventListener,
                    e = a.utils.isDefined(window.EventTarget) ? window.EventTarget.prototype.addEventListener : function() {},
                    c = a.utils.isDefined(window.EventTarget) ? window.EventTarget.prototype.removeEventListener : function() {},
                    f = function() {
                        function f() {}
                        f.setUp = function() {
                            Array.prototype.push.apply(f.Cd, []);
                            f.cp();
                            a.utils.isDefined(window.EventTarget) ? (f.dp(), f.ep()) : f.bk();
                            f.Dg("onload");
                            f.Dg("onerror")
                        };
                        f.qq = function() {
                            return []
                        };
                        f.ul = function(b, k) {
                            var q = "";
                            if (a.utils.isDefined(b))
                                if ("string" === typeof b.textContent) q = a.utils.isDefined(String.prototype.trim) ? b.textContent.trim() : b.textContent, q = a.utils.isDefined(k) ? q.substring(0,
                                    k) : q;
                                else
                                    for (b = b.firstChild; a.utils.isDefined(b) && !(q += f.ul(b, k), a.utils.isDefined(k) && q.length >= k); b = b.nextSibling);
                            return q
                        };
                        f.cp = function() {
                            a.utils.forEach(f.Cd, function(f) {
                                b(f, function(b) {
                                    b = b.target || b.srcElement;
                                    (b === document || b === window || b instanceof XMLHttpRequest || b instanceof HTMLElement) && null != b && b["on" + f] && (b["on" + f] = a.b.cd(f, b["on" + f], a.CauseType.USER, !0), b["on" + f].L = !0)
                                }, !0)
                            })
                        };
                        f.bk = function() {
                            a.utils.forEach(f.Cd, function(f) {
                                b(f, function(b) {
                                    b = a.b.Qa(f, b, null, a.CauseType.USER);
                                    a.b.ua(b)
                                }, !0);
                                b(f, function() {
                                    a.b.Q()
                                }, !1)
                            })
                        };
                        f.hi = function(b) {
                            var f = !1;
                            a.utils.isBoolean(b) ? f = b : a.utils.isObject(b) && a.utils.isDefined(b.capture) && (f = !!b.capture);
                            return f
                        };
                        f.Kh = function(b, f, n, e) {
                            if (!a.utils.isDefined(b.eventListenerMap) || !a.utils.isDefined(b.eventListenerMap[f]) || !a.utils.isDefined(n)) return -1;
                            b = b.eventListenerMap[f];
                            for (f = 0; f < b.length; f++)
                                if (b[f][0] == n && b[f][1] == e) return f;
                            return -1
                        };
                        f.Bg = function(b, f, n, e, c) {
                            a.utils.isDefined(b) && a.utils.isDefined(c) && (a.utils.isDefined(b.eventListenerMap) ||
                                (b.eventListenerMap = {}), a.utils.isDefined(b.eventListenerMap[f]) || (b.eventListenerMap[f] = []), b.eventListenerMap[f].push([n, e, c]))
                        };
                        f.Ln = function(a, b, f) {
                            if (-1 < f) {
                                var n = a.eventListenerMap[b];
                                delete n[f];
                                n.splice(f, 1);
                                0 == n.length && delete a.eventListenerMap[b]
                            }
                        };
                        f.dp = function() {
                            EventTarget.prototype.addEventListener = function(b, k, q) {
                                if (a.utils.isDefined(k) && k.L || !a.b.Gg(k) && !l(k)) return e.call(this, b, k, q);
                                var c = f.hi(q),
                                    h = a.utils.isDefined(this) ? this : window;
                                if (!(-1 < f.Kh(h, b, k, c))) {
                                    var x = k;
                                    switch (b) {
                                        case "click":
                                        case "dblclick":
                                        case "auxclick":
                                        case "mousedown":
                                        case "mouseup":
                                        case "drop":
                                        case "keyup":
                                        case "keydown":
                                        case "keypress":
                                        case "contextmenu":
                                        case "pageChanged":
                                        case "close":
                                            x =
                                                a.b.cd(b, k, a.CauseType.USER, !0);
                                            f.Bg(h, b, k, c, x);
                                            break;
                                        case "load":
                                        case "error":
                                            x = a.b.cd(b, k, a.CauseType.USER, !1), f.Bg(h, b, k, c, x)
                                    }
                                    e.call(h, b, x, q)
                                }
                            }
                        };
                        f.ep = function() {
                            EventTarget.prototype.removeEventListener = function(b, k, q) {
                                if (a.utils.isDefined(k) && k.L) return c.call(this, b, k, q);
                                var e = f.hi(q),
                                    h = a.utils.isDefined(this) ? this : window,
                                    e = f.Kh(h, b, k, e);
                                0 <= e ? (c.call(h, b, this.eventListenerMap[b][e][2], q), f.Ln(h, b, e)) : c.call(h, b, k, q)
                            }
                        };
                        f.Dg = function(b) {
                            var f = HTMLElement.prototype,
                                n = Object.getOwnPropertyDescriptor(f,
                                    b);
                            a.utils.isDefined(n) && a.utils.isDefined(n.set) && Object.defineProperty(f, b, {
                                set: function(f) {
                                    var k = f;
                                    a.utils.isDefined(f) && (k = a.b.cd(b, f, a.CauseType.RESOURCE, !1));
                                    var e;
                                    try {
                                        e = n.set.call(this, k)
                                    } catch (c) {
                                        throw c;
                                    }
                                    return e
                                }
                            })
                        };
                        return f
                    }();
                f.Cd = "click dblclick mousedown mouseup change select submit keydown keypress keyup load unload".split(" ");
                a.Ni = f
            })(h || (h = {}));
            (function(a) {
                "APP_KEY_NOT_SET" !== a.conf.appKey || a.utils.isDefined(window.ADEUM_js_handler) || a.utils.isDefined(window.webkit) || A.log("AppDynamics EUM cloud application key missing. Please specify window['adrum-app-key']");
                a.correlation.Uf(document.cookie, document.referrer);
                a.b.setUp();
                a.command("mark", "firstbyte", window["adrum-start-time"]);
                a.monitor.setUpMonitors(a.monitor.ia, a.monitor.Gk, a.monitor.domEventsMonitor, a.monitor.navMonitor, a.monitor.xhrMonitor, a.monitor.resourceMonitor);
                a.conf.disableWrappingEventListeners || a.Ni.setUp();
                a.conf.fetch && !a.conf.isZonePromise && (a.Ej.setUp(), a.monitor.setUpMonitors(a.monitor.Gb));
                a.conf.spa2 && a.conf.modernBrowserFeaturesAvailable && a.monitor.setUpMonitors(a.monitor.ik);
                a.conf.enablePrimaryMetrics &&
                    a.utils.isDefined(window.MutationObserver) && (a.conf.N = !0, a.l.w.M.Rh(), a.l.w.start(a.utils.fb()), a.c.start());
                a.conf.enableCoreWebVitals && a.monitor.setUpMonitors(a.monitor.ap)
            })(h || (h = {}));
            (function(a) {
                a = a.ng || (a.ng = {});
                a = a.n || (a.n = {});
                a.Sg = "locationChangeStart";
                a.Xm = "locationChangeSuccess";
                a.Gh = "routeChangeStart";
                a.Hh = "routeChangeSuccess";
                a.Wh = "stateChangeStart";
                a.Xh = "stateChangeSuccess";
                a.ki = "viewContentLoaded";
                a.Yl = "includeContentRequested";
                a.Xl = "includeContentLoaded";
                a.Sf = "digest";
                a.nq = "outstandingRequestsComplete";
                a.Gf = "beforeNgXhrRequested";
                a.xf = "afterNgXhrRequested";
                a.lq = "ngXhrLoaded";
                a.Kf = "$$completeOutstandingRequest"
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    function e(a, f, k, q, e, c) {
                        if (f) try {
                            return f.apply(a, [k, q, e].concat(c))
                        } catch (h) {
                            return a.error(k, q, e, c, b.Error.Xi, "M245", h)
                        }
                    }

                    function c(a, f) {
                        return function() {
                            var k = this.current,
                                q = f[k] || f[b.cc] || k,
                                c = Array.prototype.slice.call(arguments);
                            if (this.Ck(a)) return this.error(a, k, q, c, b.Error.Yi, "event " + a + "M246" + this.current);
                            if (!1 === e(this, this["onbefore" + a],
                                    a, k, q, c)) return b.bc.Re;
                            q === b.cc && (q = k);
                            if (k === q) return e(this, this["onafter" + a] || this["on" + a], a, k, q, c), b.bc.yj;
                            var h = this;
                            this.transition = function() {
                                h.transition = null;
                                h.current = q;
                                e(h, h["onenter" + q] || h["on" + q], a, k, q, c);
                                e(h, h["onafter" + a] || h["on" + a], a, k, q, c);
                                return b.bc.Jj
                            };
                            if (!1 === e(this, this["onleave" + k], a, k, q, c)) return this.transition = null, b.bc.Re;
                            if (this.transition) return this.transition()
                        }
                    }
                    var f = a.utils.hasOwnPropertyDefined;
                    b.VERSION = "2.3.5";
                    b.bc = {
                        Jj: 1,
                        yj: 2,
                        Re: 3,
                        sp: 4
                    };
                    b.Error = {
                        Yi: 100,
                        tp: 200,
                        Xi: 300
                    };
                    b.cc = "*";
                    b.create = function(a, m) {
                        function k(a) {
                            var f = a.from instanceof Array ? a.from : a.from ? [a.from] : [b.cc];
                            s[a.name] = s[a.name] || {};
                            for (var k = 0; k < f.length; k++) z[f[k]] = z[f[k]] || [], z[f[k]].push(a.name), s[a.name][f[k]] = a.to || f[k]
                        }
                        var q = "string" == typeof a.initial ? {
                                state: a.initial
                            } : a.initial,
                            e = m || a.target || {},
                            h = a.events || [],
                            x = a.callbacks || {},
                            s = {},
                            z = {};
                        q && (q.event = q.event || "startup", k({
                            name: q.event,
                            from: "none",
                            to: q.state
                        }));
                        for (var w = 0; w < h.length; w++) k(h[w]);
                        for (var v in s) f(s, v) && (e[v] = c(v, s[v]));
                        for (v in x) f(x, v) && (e[v] = x[v]);
                        e.current = "none";
                        e.Wp = function(a) {
                            return a instanceof Array ? 0 <= a.indexOf(this.current) : this.current === a
                        };
                        e.Bk = function(a) {
                            return !this.transition && (f(s[a], this.current) || f(s[a], b.cc))
                        };
                        e.Ck = function(a) {
                            return !this.Bk(a)
                        };
                        e.Wc = function() {
                            return z[this.current]
                        };
                        e.error = a.error || function(a, b, f, k, n, m, q) {
                            throw q || m;
                        };
                        if (q && !q.defer) e[q.event]();
                        return e
                    }
                })(a.qf || (a.qf = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = function(e) {
                        function f(b) {
                            b = e.call(this, b) || this;
                            a.utils.isDefined(a.ng) &&
                                b.constructor != a.ng.NgVPageView && b.constructor != f && a.reportAPIMessage(a.Z.wa, a.tb, "ADRUM.events.VPageView", []);
                            if (a.conf.spa2) return b;
                            b.perf = new a.PerformanceTracker;
                            b.start();
                            a.monitor.xhrMonitor.Pc();
                            a.monitor.Gb.Pc();
                            a.monitor.ia.Nn();
                            return b
                        }
                        u(f, e);
                        f.prototype.type = function() {
                            return a.EventType.VPageView
                        };
                        f.prototype.Ld = function() {
                            return b.EventTracker.od(this.guid(), this.url(), this.type())
                        };
                        f.prototype.Uh = function(b) {
                            var f = this.Ld();
                            b.set("parent", f);
                            a.logInfo("M247", f.guid(), f.url())
                        };
                        f.prototype.startCorrelatingXhrs =
                            function() {
                                a.conf.spa2 || (a.logInfo("M248"), this.Uh(a.monitor.xhrMonitor))
                            };
                        f.prototype.stopCorrelatingXhrs = function() {
                            a.conf.spa2 || (a.monitor.xhrMonitor.set("parent", null), a.logInfo("M249"))
                        };
                        f.prototype.ze = function() {
                            a.conf.spa2 || (a.logInfo("M250"), this.Uh(a.monitor.ia))
                        };
                        f.prototype.start = function() {
                            a.conf.spa2 || (this.markVirtualPageStart(), this.startCorrelatingXhrs())
                        };
                        f.prototype.end = function() {
                            a.conf.spa2 || (this.markVirtualPageEnd(), this.stopCorrelatingXhrs())
                        };
                        return f
                    }(b.EventTracker);
                    b.VPageView =
                        e;
                    b.Ma(b.K[a.EventType.VPageView], e.prototype);
                    b.Bf(b.metricSpec[a.EventType.VPageView], e.prototype)
                })(a.events || (a.events = {}))
            })(h || (h = {}));
            (function(a) {
                var b = a.ng || (a.ng = {}),
                    b = b.conf || (b.conf = {});
                b.disabled = a.conf.userConf && a.conf.userConf.spa && a.conf.userConf.spa.angular && a.conf.userConf.spa.angular.disable;
                b.distinguishVPwithItsTemplateUrl = a.conf.userConf && a.conf.userConf.spa && a.conf.userConf.spa.angular && !0 === a.conf.userConf.spa.angular.distinguishVPwithItsTemplateUrl ? !0 : !1;
                b.xhr = {};
                b.metrics = {
                    includeResTimingInEndUserResponseTiming: !0
                };
                a.conf.userConf && a.conf.userConf.spa && a.conf.userConf.spa.angular && a.conf.userConf.spa.angular.vp && (a.conf.userConf.spa.angular.vp.xhr && a.utils.Ja.oh(a.conf.userConf.spa.angular.vp.xhr), a.conf.userConf.spa.angular.vp.metrics && a.utils.mergeJSON(b.metrics, a.conf.userConf.spa.angular.vp.metrics))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = a.utils.map,
                        c = a.utils.reduce,
                        f = a.utils.filter,
                        n = function(m) {
                            function k(b) {
                                b = m.call(this, b) || this;
                                b.Ig = !0;
                                b.Rb = {};
                                b.sb =
                                    0;
                                b.Gq = [];
                                b.digestCount(0);
                                if (b.constructor != k) return a.reportAPIMessage(a.Z.wa, a.tb, "ADRUM.events.Ajax", []), b;
                                b.stopCorrelatingXhrs();
                                return b
                            }
                            u(k, m);
                            k.prototype.type = function() {
                                return a.EventType.VPageView
                            };
                            k.prototype.Ne = function() {
                                this.markViewChangeStart();
                                this.markVirtualPageStart(this.getViewChangeStart());
                                this.timestamp(this.getViewChangeStart())
                            };
                            k.prototype.Zl = function() {
                                this.digestCount(this.digestCount() + 1)
                            };
                            k.prototype.$l = function() {
                                this.sb++;
                                a.logInfo("M251", this.sb)
                            };
                            k.prototype.Pk =
                                function() {
                                    this.sb--;
                                    a.logInfo("M252", this.sb)
                                };
                            k.prototype.Tl = function() {
                                var b = this.perf.getEntryByName(a.events.g.si);
                                a.logInfo("M253", this.sb, b);
                                return 0 < this.sb
                            };
                            k.prototype.wk = function() {
                                var a = {
                                        Vc: 0
                                    },
                                    b = document.querySelectorAll("ng-view, [ng-view], .ng-view, [ui-view]"),
                                    b = e(b, angular.element),
                                    f;
                                for (f in k.Dh) {
                                    var m = k.Dh[f];
                                    e(b, function(b) {
                                        b = b.find(f);
                                        e(b, function(b) {
                                            if (b = b[m]) b = decodeURIComponent(b), a[b] || (a[b] = f, a.Vc++)
                                        })
                                    })
                                }
                                this.Rb = a
                            };
                            k.prototype.sk = function(a) {
                                return !!this.Rb[decodeURIComponent(a.name)]
                            };
                            k.prototype.xk = function() {
                                var b = [],
                                    f = this;
                                0 < this.Rb.Vc && (b = a.monitor.resourceMonitor.Ib().filter(function(a) {
                                    return f.sk(a)
                                }));
                                this.resTiming(b)
                            };
                            k.fl = function(b) {
                                return f(b, function(b) {
                                    return (b.eventType === a.EventType.Ajax || b.eventType === a.EventType.ADRUM_XHR) && !a.utils.Ja.Tc(b.eventUrl, b.method)
                                })
                            };
                            k.Bl = function(a) {
                                return c(a, function(a, b) {
                                    return Math.max(a, b.timestamp + b.metrics.PLT)
                                }, -1)
                            };
                            k.prototype.fk = function() {
                                if (b.conf.xhr) {
                                    var f = k.fl(a.channel.getEventsWithParentGUID(this.guid())),
                                        f = k.Bl(f);
                                    if (0 < f) {
                                        var m = this.perf.getEntryByName(a.events.g.si);
                                        this.markXhrRequestsCompleted(Math.min(m && m.startTime || Number.MAX_VALUE, f))
                                    }
                                }
                            };
                            k.prototype.adjustTimings = function() {
                                this.fk();
                                var f = this.getViewDOMLoaded(),
                                    k = this.getXhrRequestsCompleted(),
                                    f = Math.max(f, k);
                                b.conf.metrics.includeResTimingInEndUserResponseTiming && (this.ek(), k = this.getViewResourcesLoaded(), k = Math.max(f, k), a.logInfo("M254", f, k), f = k);
                                this.markVirtualPageEnd(f)
                            };
                            k.prototype.ek = function() {
                                if (0 < this.Rb.Vc) {
                                    this.xk();
                                    var b = this.resTiming();
                                    b && b.length >= this.Rb.Vc && (b = c(b, function(a, b) {
                                        return Math.max(a, b.responseEnd)
                                    }, 0), this.markViewResourcesLoaded(a.PerformanceTracker.vd(b)))
                                }
                            };
                            k.prototype.identifier = function(b) {
                                var f = this.mi;
                                a.utils.isDefined(b) && (this.mi = k.dl(b), this.url(this.mi.url));
                                return f
                            };
                            k.dl = function(b) {
                                var f = {};
                                b && b.R ? (f.R = {
                                    me: ""
                                }, a.utils.mergeJSON(f.R, {
                                    me: b.R.originalPath,
                                    Sb: b.R.template,
                                    Tb: b.R.templateUrl
                                })) : b && b.state && (f.state = {
                                    url: ""
                                }, a.utils.mergeJSON(f.state, {
                                    url: b.state.url,
                                    name: b.state.name,
                                    Sb: b.state.template,
                                    Tb: b.state.templateUrl
                                }));
                                return f
                            };
                            return k
                        }(a.events.VPageView);
                    n.Dh = {
                        img: "src",
                        script: "src",
                        link: "href"
                    };
                    b.NgVPageView = n;
                    a.events.Ma(a.events.K[a.EventType.NG_VIRTUAL_PAGE], n.prototype)
                })(a.ng || (a.ng = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = function() {
                        function e() {
                            this.F = new b.NgVPageView
                        }
                        e.prototype.Vn = function() {
                            var f = this,
                                n = this.F;
                            b.conf.metrics.includeResTimingInEndUserResponseTiming ? (a.logInfo("M255"), a.utils.oSTO(function() {
                                f.qe(n)
                            }, e.Lj)) : a.utils.oSTO(function() {
                                f.qe(n)
                            }, e.Mj)
                        };
                        e.prototype.qe = function(b) {
                            a.logInfo("M256");
                            b.parent(a.monitor.DOMEventsMonitor.currentBasePage);
                            a.command("call", function() {
                                b.adjustTimings();
                                a.reporter.reportEvent(b)
                            })
                        };
                        e.prototype.fo = function(a) {
                            this.F = a
                        };
                        return e
                    }();
                    e.Lj = 5E3;
                    e.Mj = 2 * a.monitor.XHRMonitor.Ve;
                    b.VirtualPageStateMachine = e;
                    a.qf.create({
                            events: [{
                                name: "start",
                                from: "none",
                                to: "ChangeView"
                            }, {
                                name: "viewLoaded",
                                from: "ChangeView",
                                to: "XhrPending"
                            }, {
                                name: "xhrCompleted",
                                from: "XhrPending",
                                to: "End"
                            }, {
                                name: "abort",
                                from: "*",
                                to: "none"
                            }, {
                                name: "init",
                                from: "*",
                                to: "none"
                            }, {
                                name: "locChange",
                                from: "*",
                                to: "*"
                            }, {
                                name: "beforeXhrReq",
                                from: "*",
                                to: "*"
                            }, {
                                name: "afterXhrReq",
                                from: "*",
                                to: "*"
                            }],
                            error: function(b) {
                                a.logError("M257", b)
                            },
                            callbacks: {
                                onChangeView: function() {
                                    this.F.Ne();
                                    this.F.ze()
                                },
                                onviewLoaded: function() {
                                    this.F.markViewDOMLoaded()
                                },
                                onXhrPending: function() {
                                    this.F.Ig && this.xhrCompleted()
                                },
                                onleaveXhrPending: function(a, b, n) {
                                    if ("abort" === a) return this.qe(), !0;
                                    if ("xhrCompleted" === a && "End" === n) {
                                        if (this.F.Tl()) return !1;
                                        this.F.markXhrRequestsCompleted();
                                        return !0
                                    }
                                },
                                onEnd: function() {
                                    this.F.wk();
                                    this.Vn()
                                },
                                oninit: function(b, f, n, m) {
                                    this.fo(m);
                                    a.monitor.xhrMonitor.Pc();
                                    a.monitor.Gb.Pc()
                                },
                                onlocChange: function(a, b, n, m) {
                                    this.F.identifier.url = m;
                                    this.F.Sc({
                                        url: m
                                    })
                                },
                                onbeforeXhrReq: function(b, f, n, m) {
                                    var k = this.F;
                                    k.Ig = !1;
                                    a.logInfo("M258", m && m[1] || "", k.guid());
                                    k.$l();
                                    k.startCorrelatingXhrs();
                                    m[3] && (m[3] = a.aop.before(m[3], function(b, f, m) {
                                        a.logInfo("M259");
                                        k.Pk();
                                        m && (b = a.utils.vn(m)["content-type"]) && 0 <= b.indexOf("text/html") && k.markViewFragmentsLoaded()
                                    }));
                                    return m
                                },
                                onafterXhrReq: function() {
                                    this.F.stopCorrelatingXhrs()
                                }
                            }
                        },
                        e.prototype)
                })(a.ng || (a.ng = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = function() {
                        function e() {
                            this.S = new b.VirtualPageStateMachine;
                            this.distinguishVPwithItsTemplateUrl = a.ng.conf.distinguishVPwithItsTemplateUrl
                        }
                        e.prototype.W = function(f, n) {
                            a.logInfo("M260", f);
                            switch (f) {
                                case b.n.Gh:
                                case b.n.Wh:
                                    this.S.start();
                                    var m = n.next.url || document.URL,
                                        k = new b.NgVPageView({
                                            url: m,
                                            identifier: n.next
                                        });
                                    this.distinguishVPwithItsTemplateUrl && e.wm(this.S.F, k) ? this.S.F.Sc({
                                        url: m,
                                        identifier: n.next
                                    }) : this.yo(k);
                                    break;
                                case b.n.Hh:
                                case b.n.Xh:
                                    this.S.F.markViewChangeEnd();
                                    break;
                                case b.n.ki:
                                    this.S.viewLoaded();
                                    break;
                                case b.n.Gf:
                                    this.S.beforeXhrReq(n);
                                    break;
                                case b.n.xf:
                                    this.S.afterXhrReq();
                                    break;
                                case b.n.Kf:
                                    this.S.xhrCompleted();
                                    break;
                                case b.n.Sg:
                                    this.S.F.Sc({
                                        url: n.next.url
                                    });
                                    this.S.locChange(n.next.url);
                                    break;
                                case b.n.Sf:
                                    this.S.F.Zl()
                            }
                        };
                        e.prototype.yo = function(a) {
                            this.S.abort();
                            this.S.init(a);
                            this.S.start()
                        };
                        e.wm = function(b, n) {
                            var m = b.identifier(),
                                k = n.identifier(),
                                e = !1;
                            return e = !a.utils.isDefined(m) && !a.utils.isDefined(k) ||
                                m === k ? !0 : a.utils.isDefined(m) && a.utils.isDefined(k) ? m.state || k.state ? a.utils.isDefined(m.state) && a.utils.isDefined(k.state) ? m.state.name === k.state.name && m.state.Sb === k.state.Sb && m.state.Tb === k.state.Tb && m.state.url === k.state.url : !1 : m.R && k.R ? m.R.me === k.R.me && m.R.Sb === k.R.Sb && m.R.Tb === k.R.Tb : m.url === k.url : !1
                        };
                        return e
                    }();
                    b.Pj = e
                })(a.ng || (a.ng = {}))
            })(h || (h = {}));
            (function(a) {
                (function(b) {
                    var e = a.utils.addEventListener,
                        c = function() {
                            function f() {
                                this.Y = new b.Pj;
                                this.Ag = !1
                            }
                            f.prototype.setUp = function() {
                                function b(k) {
                                    return function() {
                                        a.logInfo(k);
                                        f.init()
                                    }
                                }
                                var f = this;
                                b("M261")();
                                e(document, "DOMContentLoaded", b("M262"));
                                e(window, "load", b("M263"))
                            };
                            f.prototype.init = function() {
                                if ("loading" === document.readyState) a.logInfo("M264");
                                else if ("undefined" != typeof angular && !this.Ag) {
                                    this.Ag = !0;
                                    a.logInfo("M265");
                                    var b = this,
                                        f = angular.module("ng");
                                    f.config(["$provide", function(a) {
                                        b.om(a);
                                        b.jm(a)
                                    }]);
                                    f.run(["$browser", function(a) {
                                        b.gm(a)
                                    }]);
                                    a.logInfo("M266")
                                }
                            };
                            f.prototype.jm = function(f) {
                                var m = a.aop,
                                    k = this;
                                f.decorator("$httpBackend", ["$delegate", function(a) {
                                    return a =
                                        m.around(a, function() {
                                            var a = Array.prototype.slice.call(arguments);
                                            k.Y.W(b.n.Gf, a);
                                            return a
                                        }, function() {
                                            k.Y.W(b.n.xf)
                                        }, "ng.httpBackend")
                                }])
                            };
                            f.prototype.om = function(f) {
                                var m = a.aop,
                                    k = this;
                                f.decorator("$rootScope", ["$delegate", function(a) {
                                    a.$digest = m.after(a.$digest, function() {
                                        k.Y.W(b.n.Sf)
                                    }, "ngevents.digest");
                                    a.$on("$locationChangeStart", function(a, f) {
                                        var m = {
                                                url: f
                                            },
                                            n = a && a.Db && a.Db.$state && a.Db.$state.current;
                                        n && (m.state = n);
                                        k.Y.W(b.n.Sg, {
                                            next: m
                                        })
                                    });
                                    a.$on("$locationChangeSuccess", function() {
                                        k.Y.W(b.n.Xm)
                                    });
                                    a.$on("$routeChangeStart", function(a, f) {
                                        var m = {
                                                url: location.href
                                            },
                                            n = f && f.$$route;
                                        n && (m.R = n);
                                        k.Y.W(b.n.Gh, {
                                            next: m
                                        })
                                    });
                                    a.$on("$routeChangeSuccess", function() {
                                        k.Y.W(b.n.Hh)
                                    });
                                    a.$on("$stateChangeStart", function(a, f) {
                                        k.Y.W(b.n.Wh, {
                                            next: {
                                                state: f
                                            }
                                        })
                                    });
                                    a.$on("$stateChangeSuccess", function() {
                                        k.Y.W(b.n.Xh)
                                    });
                                    a.$on("$viewContentLoaded", function(a) {
                                        var f = {
                                            url: location.href
                                        };
                                        if (a = a && a.Db && a.Db.$state && a.Db.$state.current) f.state = a;
                                        k.Y.W(b.n.ki, {
                                            next: f
                                        })
                                    });
                                    a.$on("$includeContentRequested", function() {
                                        k.Y.W(b.n.Yl)
                                    });
                                    a.$on("$includeContentLoaded", function() {
                                        k.Y.W(b.n.Xl)
                                    });
                                    return a
                                }])
                            };
                            f.prototype.gm = function(f) {
                                var m = this;
                                f.$$completeOutstandingRequest = a.aop.before(f.$$completeOutstandingRequest, function() {
                                    m.Y.W(b.n.Kf)
                                })
                            };
                            return f
                        }();
                    b.mp = c;
                    b.ngMonitor = new c
                })(a.ng || (a.ng = {}))
            })(h || (h = {}));
            (function(a) {
                var b = a.ng || (a.ng = {});
                b.conf.disabled || a.conf.spa2 || a.monitor.setUpMonitors(b.ngMonitor)
            })(h || (h = {}))
        }
    };
})();