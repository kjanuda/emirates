dynamicTagConfig = {
    "urlsAsLink": [],
    "oneTagConfig": {
        "partnerId": null,
        "visitEventEnabled": true,
        "visitEventDelay": null,
        "fpIdentifier": "GA1.1.131125039.1739196331",
        "dynamic": true,
        "gumDomain": "gum.criteo.com",
        "fullUrlMaxLength": null,
        "previousUrlMaxLength": null,
        "privateModeDetectionEnabled": true,
        "blockedSteps": [],
        "addClientSideSupportForId5": false,
        "useStaticConsentForId5": false,
        "shouldFillPageId": false,
        "enableOffsiteProjection": true,
        "enabledCspViolationDetection": true,
        "allowedDomainsForCsp": ["criteo.com", "criteo.net", "crto.in", "localhost", "127.0.0.1", "hlserve.com"]
    }
};
window.Criteo = window.Criteo || {};
window.Criteo.oneTagConfig = dynamicTagConfig.oneTagConfig;
! function(L) {
    "use strict";

    function o(e, a, s, c) {
        return new(s = s || Promise)(function(n, t) {
            function i(e) {
                try {
                    r(c.next(e))
                } catch (e) {
                    t(e)
                }
            }

            function o(e) {
                try {
                    r(c.throw(e))
                } catch (e) {
                    t(e)
                }
            }

            function r(e) {
                var t;
                e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                    e(t)
                })).then(i, o)
            }
            r((c = c.apply(e, a || [])).next())
        })
    }

    function r(i, o) {
        var r, a, s, c = {
                label: 0,
                sent: function() {
                    if (1 & s[0]) throw s[1];
                    return s[1]
                },
                trys: [],
                ops: []
            },
            e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            };
        return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
            return this
        }), e;

        function t(n) {
            return function(e) {
                var t = [n, e];
                if (r) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (r = 1, a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, t[1])).done) return s;
                    switch (a = 0, (t = s ? [2 & t[0], s.value] : t)[0]) {
                        case 0:
                        case 1:
                            s = t;
                            break;
                        case 4:
                            return c.label++, {
                                value: t[1],
                                done: !1
                            };
                        case 5:
                            c.label++, a = t[1], t = [0];
                            continue;
                        case 7:
                            t = c.ops.pop(), c.trys.pop();
                            continue;
                        default:
                            if (!(s = 0 < (s = c.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) c.label = t[1];
                            else if (6 === t[0] && c.label < s[1]) c.label = s[1], s = t;
                            else {
                                if (!(s && c.label < s[2])) {
                                    s[2] && c.ops.pop(), c.trys.pop();
                                    continue
                                }
                                c.label = s[2], c.ops.push(t)
                            }
                    }
                    t = o.call(i, c)
                } catch (e) {
                    t = [6, e], a = 0
                } finally {
                    r = s = 0
                }
                if (5 & t[0]) throw t[1];
                return {
                    value: t[0] ? t[1] : void 0,
                    done: !0
                }
            }
        }
    }

    function i() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        for (var i = Array(e), o = 0, t = 0; t < n; t++)
            for (var r = arguments[t], a = 0, s = r.length; a < s; a++, o++) i[o] = r[a];
        return i
    }(S = a = a || {}).Script = "Script", S.Fetch = "Fetch", S.Frame = "Frame", (S = h = h || {}).OneTagStatic = "OneTagStatic", S.OneTagDynamic = "OneTagDynamic", s.getSingleton = function(e, t, n) {
        var i = n = void 0 === n ? window : n;
        return "object" != typeof i.cto_csm_CspLogger && (i.cto_csm_CspLogger = new s(e, t, n)), i.cto_csm_CspLogger
    }, s.prototype.setFlushInterval = function(e) {
        var t = this;
        this.window.clearInterval(this.intervalHandle), this.intervalHandle = this.window.setInterval(function() {
            return o(t, void 0, void 0, function() {
                return r(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, this.flush()];
                        case 1:
                            return [2, e.sent()]
                    }
                })
            })
        }, e)
    }, s.prototype.registerListener = function() {
        var t = this;
        this.isRegistered || (this.isRegistered = !0, this.window.addEventListener("securitypolicyviolation", function(e) {
            "report" === e.disposition || t.isCspRequestBlockedByCsp(e.blockedURI) || (t.isHostnameListened(e.blockedURI) || t.isHostnameListened(e.sourceFile)) && t.events.push(e)
        }))
    }, s.prototype.setPartnerIds = function(e) {
        this.partnerIds = void 0 === e || 0 === e.length ? void 0 : i(e)
    }, s.prototype.setClientRequestId = function(e) {
        this.clientRequestId = e
    }, s.prototype.flush = function() {
        return o(this, void 0, void 0, function() {
            var t, n, i, o;
            return r(this, function(e) {
                switch (e.label) {
                    case 0:
                        for (t = [], n = []; 0 < this.events.length;) t.push(this.events.shift()), i = this.createCspViolationRequest(t), (o = "https://" + this.backendHostname + this.pathName + "?q=" + encodeURIComponent(JSON.stringify(i))).length > this.sentRequestLengthHardLimit ? t = [] : (o.length > this.sentRequestLengthSoftLimit || 0 === this.events.length) && (t = [], n.push(this.sendRequest(i.acceptedFormat, o)));
                        return [4, Promise.all(n)];
                    case 1:
                        return e.sent(), [2]
                }
            })
        })
    }, s.prototype.addAllowedDomains = function(e) {
        e = i(this.allowedHostnames, e);
        this.allowedHostnames = Array.from(new Set(e))
    }, s.prototype.isCspRequestBlockedByCsp = function(e) {
        e = this.toUrl(e);
        return void 0 !== e && e.hostname === this.backendHostname && e.pathname === this.pathName
    }, s.prototype.isHostnameListened = function(e) {
        var t, e = this.toUrl(e);
        return void 0 !== e && (t = e.hostname, this.allowedHostnames.some(function(e) {
            return t === e || t.endsWith("." + e)
        }))
    }, s.prototype.toUrl = function(e) {
        try {
            return new URL(e)
        } catch (e) {}
    }, s.prototype.createCspViolationRequest = function(e) {
        var t = this;
        return {
            acceptedFormat: this.getAcceptedFormat(),
            callChainOrigin: this.callChainOrigin,
            partnerIds: this.partnerIds,
            violations: e.map(function(e) {
                return t.createCspViolation(e)
            })
        }
    }, s.prototype.createCspViolation = function(e) {
        var t = e.originalPolicy.split(" ")[0];
        return {
            blockedUri: e.blockedURI,
            clientRequestId: this.clientRequestId,
            documentUri: e.documentURI,
            effectiveDirective: e.effectiveDirective,
            originalDirective: t,
            sourceFile: e.sourceFile
        }
    }, s.prototype.getAcceptedFormat = function() {
        switch (this.callChainOrigin) {
            case h.OneTagStatic:
            case h.OneTagDynamic:
                return a.Script;
            default:
                var e = this.callChainOrigin;
                throw new Error("Unhandled case: " + e)
        }
    }, s.prototype.sendRequest = function(n, i) {
        return o(this, void 0, void 0, function() {
            var t;
            return r(this, function(e) {
                switch (e.label) {
                    case 0:
                        switch (n) {
                            case a.Script:
                                t = this.sendScriptRequest.bind(this);
                                break;
                            case a.Fetch:
                                t = this.sendFetchRequest.bind(this);
                                break;
                            case a.Frame:
                                t = this.sendFrameRequest.bind(this);
                                break;
                            default:
                                throw new Error("Unhandled case: " + n)
                        }
                        return [4, t(i)];
                    case 1:
                        return e.sent(), [2]
                }
            })
        })
    }, s.prototype.sendScriptRequest = function(i) {
        return o(this, void 0, void 0, function() {
            var t, n = this;
            return r(this, function(e) {
                return (t = this.window.document.createElement("script")).type = "text/javascript", t.async = !0, t.title = "Criteo CSP Script", t.src = i, this.window.document.body.appendChild(t), setTimeout(function() {
                    return n.window.document.body.removeChild(t)
                }, this.elementRemovalDelayMs), [2]
            })
        })
    }, s.prototype.sendFetchRequest = function(t) {
        return o(this, void 0, void 0, function() {
            return r(this, function(e) {
                switch (e.label) {
                    case 0:
                        return e.trys.push([0, 2, , 3]), [4, fetch(t)];
                    case 1:
                    case 2:
                        return e.sent(), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })
    }, s.prototype.sendFrameRequest = function(i) {
        return o(this, void 0, void 0, function() {
            var t, n = this;
            return r(this, function(e) {
                return (t = this.window.document.createElement("iframe")).setAttribute("allow", ""), t.width = "0", t.height = "0", t.style.display = "none", t.setAttribute("aria-hidden", "true"), t.title = "Criteo CSP Frame", t.src = i, this.window.document.body.appendChild(t), setTimeout(function() {
                    return n.window.document.body.removeChild(t)
                }, this.elementRemovalDelayMs), [2]
            })
        })
    };
    var a, h, U = s;

    function s(e, t, n) {
        void 0 === n && (n = window), this.pathName = "/api/csm/csp", this.defaultAllowedHostnames = ["criteo.com", "criteo.net", "crto.in", "localhost", "127.0.0.1"], this.allowedHostnames = i(this.defaultAllowedHostnames), this.elementRemovalDelayMs = 1e3, this.defaultFlushIntervalMs = 1e3, this.sentRequestLengthSoftLimit = 1e3, this.sentRequestLengthHardLimit = 6e3, this.events = [], this.partnerIds = void 0, this.clientRequestId = void 0, this.intervalHandle = 0, this.isRegistered = !1, this.window = n, this.backendHostname = e, this.callChainOrigin = t, this.setFlushInterval(this.defaultFlushIntervalMs)
    }
    var f, t, N = "OneTag",
        W = ["color: #fff;", "background: #ff4f00;", "display: inline-block;", "padding: 1px 4px;", "border-radius: 3px;"].join(" "),
        I = ((S = f = f || {})[S.Off = 0] = "Off", S[S.Error = 1] = "Error", S[S.Warning = 2] = "Warning", S[S.Info = 3] = "Info", S[S.Debug = 4] = "Debug", c.setLogLevel = function(e) {
            c.level = e, this.debug("Log level set to " + f[e])
        }, c.debug = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            c.log(console.log, f.Debug, e)
        }, c.info = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            c.log(console.log, f.Info, e)
        }, c.warn = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            c.log(console.warn, f.Warning, e)
        }, c.error = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            c.log(console.error, f.Error, e)
        }, c.log = function(e, t, n) {
            t <= c.level && (t = 0 < (t = window.navigator.userAgent).indexOf("MSIE ") || 0 < t.indexOf("Trident/") ? ["[" + N + "]"] : ["%c" + N, W], e.apply(console, t.concat(n)))
        }, c.level = f.Warning, c);

    function c() {}(S = t = t || {})[S.Unknown = 0] = "Unknown", S[S.TopLevel = 1] = "TopLevel", S[S.Child = 2] = "Child";
    u.extractHostname = function(e) {
        var t = document.createElement("a");
        return t.href = e, t.hostname
    }, u.getAnchorWithReferrer = function(e) {
        var t;
        return e && e.referrer ? ((t = e.createElement("a")).href = e.referrer, t) : null
    }, u.getQueryString = function(t) {
        var n;
        try {
            n = t.top.location.search
        } catch (e) {
            var i = t;
            try {
                for (; i.parent.document !== i.document && i.parent.document;) i = i.parent
            } catch (e) {}
            i && (t = u.getAnchorWithReferrer(i.document)) && (n = t.search)
        }
        return n
    }, u.getHighestAccessibleUrl = function(e) {
        try {
            var t = e.top.location.href;
            if (t) return t
        } catch (e) {}
        return u.getHighestAccessibleWindow(e).topFrame.location.href
    }, u.getPreviousUrl = function(e) {
        var e = u.getHighestAccessibleWindow(e),
            t = e.topFrame,
            n = "";
        return (n = e.err ? n : t.document.referrer || (null == (e = t.top) ? void 0 : e.document.referrer) || "") || (t = null == (e = t.location) ? void 0 : e.ancestorOrigins) && 0 < t.length && (n = t[t.length - 1]), n
    }, u.onBodyReady = function(t, n) {
        ! function e() {
            document.body ? t.setProtectedTimeout(n, 0) : t.setProtectedTimeout(e, 10)
        }()
    }, u.onDocumentReady = function(n, i) {
        if ("complete" === document.readyState) i();
        else if (document.addEventListener) n.addProtectedEventListener(document, "DOMContentLoaded", i, !1), n.addProtectedEventListener(window, "load", i, !1);
        else {
            n.attachProtectedEvent(document, "onreadystatechange", i), n.attachProtectedEvent(window, "onload", i);
            var t, o, r, e = !1;
            try {
                e = null === window.frameElement && document.documentElement
            } catch (e) {}
            e && e.doScroll ? function t() {
                if (e) {
                    try {
                        e.doScroll("left")
                    } catch (e) {
                        return void n.setProtectedTimeout(t, 50)
                    }
                    i()
                }
            }() : (t = !1, o = null === document.onload ? null : function(e, t) {
                return e.onload(t)
            }, r = null === document.onreadystatechange ? null : function(e, t) {
                return e.onreadystatechange(t)
            }, document.onload = document.onreadystatechange = function(e) {
                r instanceof Function && r(document, e), t || document.readyState && "complete" !== document.readyState || (o instanceof Function && o(document, e), t = !0, i())
            })
        }
    }, u.removeLater = function(e, t) {
        e.setProtectedTimeout(function() {
            null !== t && null !== t.parentElement && t.parentElement.removeChild(t)
        }, 3e4)
    }, u.appendCriteoContainer = function(e) {
        var t;
        return e ? ((t = document.createElement("div")).setAttribute("id", "criteo-tags-div"), t.style.display = "none", e.appendChild(t), t) : null
    }, u.getOneTagLocation = function() {
        try {
            return window.self === window.top ? t.TopLevel : t.Child
        } catch (e) {
            return I.info("Cannot get OneTag location", e), t.Unknown
        }
    }, u.isChrome = function() {
        return window.isSecureContext && navigator.userAgentData ? navigator.userAgentData.brands.some(function(e) {
            return "Google Chrome" === e.brand
        }) : !!window.chrome
    }, u.getHighestAccessibleWindow = function(e) {
        var t = e,
            n = !1;
        try {
            for (; t.parent.document !== t.document;) {
                if (!t.parent.document) {
                    n = !0;
                    break
                }
                t = t.parent
            }
        } catch (e) {
            n = !0
        }
        return {
            topFrame: t,
            err: n
        }
    };
    var m = u;

    function u() {}
    n.prototype.registerTrigger = function(e) {
        var t;
        this.isFeatureAllowed("attribution-reporting") && ((t = this.document.createElement("img")).setAttribute("style", "display:none;"), t.setAttribute("width", "1"), t.setAttribute("height", "1"), t.setAttribute("attributionsrc", n.ATTRIBUTION_TRIGGER_URL_PREFIX + "?" + e), e = this.document.getElementsByTagName("script")[0], t.setAttribute("data-owner", "criteo-tag"), e.parentNode.insertBefore(t, e), m.removeLater(this.exceptionHandler, t))
    }, n.prototype.isFeatureAllowed = function(t) {
        return !(!this.document.featurePolicy || !this.document.featurePolicy.features()) && this.document.featurePolicy.features().some(function(e) {
            return e === t
        })
    }, n.ATTRIBUTION_TRIGGER_URL_PREFIX = "https://measurement-api.criteo.com/conversiontracking";
    var V = n;

    function n(e, t) {
        this.document = e, this.exceptionHandler = t
    }

    function g(e, t) {
        var n = null == (n = window.Criteo) ? void 0 : n.oneTagConfig;
        return null != (n = n && n[e]) ? n : t
    }
    e.prototype.get = function() {
        return this.value
    }, e.prototype.set = function(t) {
        var i = this,
            o = function() {
                return i.listeners.forEach(function(e) {
                    return e(t)
                })
            };
        Array.isArray(t) && (t = new Proxy(t, {
            get: function(e, t) {
                return i.proxyArrayGet(e, t, o)
            },
            set: function(e, t, n) {
                return i.proxyArraySet(e, t, n, o)
            }
        })), this.value = t, o()
    }, e.prototype.onPropertyChange = function(e) {
        e(this.value), this.listeners.push(e)
    }, e.prototype.proxyArrayGet = function(i, o, r) {
        return "push" === o ? function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = i[o].apply(i, e);
            return r(), n
        } : i[o]
    }, e.prototype.proxyArraySet = function(e, t, n, i) {
        return isNaN(Number(t)) ? e[t] = n : (e[t] = n, i()), !0
    };
    var H = e;

    function e(e) {
        this.listeners = [], this.value = e, this.set(e)
    }
    var v, q = "5.31.1",
        l = ((S = v = v || {})[S.None = 0] = "None", S[S.Cookie = 1] = "Cookie", S[S.LocalStorage = 2] = "LocalStorage", S[S.Library = 3] = "Library", d.checkLocalStorageIsWritable = function() {
            try {
                var e, t, n;
                return window.localStorage ? (e = "criteo_localstorage_check", t = "test_value", window.localStorage.setItem(e, t), n = window.localStorage.getItem(e) === t, window.localStorage.removeItem(e), n) : !1
            } catch (e) {
                return !1
            }
        }, d.checkCookiesAreWritable = function() {
            var e = new d("criteo_write_test", 1e4),
                t = (e.setValueWithNoDomain("1"), "1" === e.cookieValue);
            return e.removeWithNoDomain(), t
        }, d.prototype.setCookieRead = function() {
            this.isCookieRead = !0
        }, d.prototype.setValue = function(e, t) {
            void 0 === t && (t = !0), this.cookieValue = e, this.isCookieValueExternallySet = !0, t && this.writeOnAllStorages(e)
        }, d.prototype.setValueFromExistingCookie = function() {
            var e = this.getValue();
            void 0 !== e && (this.cookieValue = e, this.cookieExtractor = {
                origin: v.Cookie
            })
        }, d.prototype.setValueFromAllStorages = function() {
            var e = this.getFromAllStorages();
            this.cookieValue = e.value, this.cookieExtractor = e.identifierExtractor
        }, d.prototype.getValue = function() {
            for (var e = 0, t = document.cookie.split(";"); e < t.length; e++) {
                var n = t[e];
                if (n.substr(0, n.indexOf("=")).replace(/^\s+|\s+$/g, "") === this.cookieName) return n = n.substr(n.indexOf("=") + 1), (decodeURIComponent || unescape)(n)
            }
        }, d.prototype.removeWithNoDomain = function() {
            this.setValueWithNoDomainWithExpiration("", 0)
        }, d.prototype.removeOnMainDomain = function() {
            this.setOnMainDomainWithExpiration("", 0)
        }, d.prototype.setOnMainDomain = function(e) {
            return this.setOnMainDomainWithExpiration(e, this.cookieRetentionTimeInMs)
        }, d.prototype.writeOnAllStorages = function(e) {
            this.setOnMainDomain(e), this.tryWriteInLocalStorage(e)
        }, d.prototype.getFromAllStorages = function() {
            switch (this.cookieExtractor.origin) {
                case v.LocalStorage:
                    return {
                        value: window.localStorage.getItem(this.cookieName),
                        identifierExtractor: {
                            origin: v.LocalStorage
                        }
                    };
                case v.Cookie:
                    return {
                        value: this.getValue(),
                        identifierExtractor: {
                            origin: v.Cookie
                        }
                    };
                case v.Library:
                    return {
                        value: null == (e = (t = this.cookieExtractor).retrievalMethod) ? void 0 : e.call(t),
                        identifierExtractor: {
                            origin: v.Library
                        }
                    };
                case v.None:
                    var e = this.tryReadFromLocalStorage(),
                        t = this.getValue() || null;
                    return {
                        value: t || e,
                        identifierExtractor: {
                            origin: this.computeStorageOrigin(t, e)
                        }
                    }
            }
        }, d.prototype.removeFromAllStorages = function() {
            this.removeOnMainDomain(), this.tryRemoveFromLocalStorage()
        }, d.prototype.setValueWithNoDomainWithExpiration = function(e, t) {
            var n = new Date,
                t = (n.setTime(n.getTime() + t), "expires=" + n.toUTCString()),
                n = encodeURIComponent || escape,
                n = (document.cookie = this.cookieName + "=" + n(e) + ";" + t + ";path=/", this.getValue());
            void 0 !== n && (this.cookieValue = n)
        }, d.prototype.setValueWithNoDomain = function(e) {
            this.setValueWithNoDomainWithExpiration(e, this.cookieRetentionTimeInMs)
        }, d.prototype.toFragmentData = function() {
            return {
                identifierExtractor: this.cookieExtractor,
                value: this.cookieValue
            }
        }, d.prototype.setOnMainDomainWithExpiration = function(e, t) {
            for (var n = new Date, i = (n.setTime(n.getTime() + t), "expires=" + n.toUTCString()), o = null === document.location ? [] : document.location.hostname.split("."), r = null, a = 0; a < o.length; ++a) {
                var s = "domain=." + (r = o.slice(o.length - a - 1, o.length).join(".")),
                    c = encodeURIComponent || escape,
                    c = (document.cookie = this.cookieName + "=" + c(e) + ";" + i + ";" + s + ";path=/", this.getValue());
                if (c && c === e) break
            }
            return r || document.location
        }, d.prototype.computeStorageOrigin = function(e, t) {
            var n = v.None;
            return e && (n |= v.Cookie), t && (n |= v.LocalStorage), n
        }, d.prototype.getMatchingKeyInAllStorage = function(e) {
            if (!(e instanceof RegExp)) return e;
            if ("undefined" != typeof localStorage)
                for (var t = 0, n = Object.keys(localStorage); t < n.length; t++) {
                    var i = n[t];
                    if (e.test(i)) return i
                }
            for (var o = 0, r = document.cookie.split(";"); o < r.length; o++) {
                var a = r[o];
                if (e.test(a)) return a
            }
            return ""
        }, d.prototype.tryReadFromLocalStorage = function() {
            var e, t;
            try {
                return null != (t = null == (e = window.localStorage) ? void 0 : e.getItem(this.cookieName)) ? t : null
            } catch (e) {
                return null
            }
        }, d.prototype.tryRemoveFromLocalStorage = function() {
            try {
                return window.localStorage ? (window.localStorage.removeItem(this.cookieName), !0) : !1
            } catch (e) {
                return !1
            }
        }, d.prototype.tryWriteInLocalStorage = function(e) {
            var t, n;
            try {
                return null != (t = window.localStorage) && t.setItem(this.cookieName, e), (null == (n = window.localStorage) ? void 0 : n.getItem(this.cookieName)) === e
            } catch (e) {
                return !1
            }
        }, d);

    function d(e, t, n) {
        void 0 === n && (n = {
            origin: v.None
        }), this.cookieValue = null, this.isCookieValueExternallySet = !1, this.isCookieRead = !1, this.cookieName = this.getMatchingKeyInAllStorage(e), this.cookieRetentionTimeInMs = t, this.cookieExtractor = n
    }
    p.prototype.catchAndStoreException = function(e, t) {
        try {
            return void 0 === t ? e() : e.apply(this, t)
        } catch (e) {
            e instanceof Error ? this.exceptions.push(e) : this.exceptions.push(new Error(e))
        }
    }, p.prototype.setProtectedTimeout = function(e, t) {
        var n = this;
        if ("undefined" != typeof window && "function" == typeof window.setTimeout) return window.setTimeout(function() {
            return n.catchAndStoreException(e)
        }, t)
    }, p.prototype.addProtectedEventListener = function(e, t, n, i) {
        var o = this;
        if (void 0 !== e && "function" == typeof e.addEventListener) return e.addEventListener(t, function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return o.catchAndStoreException(n, e)
        }, i)
    }, p.prototype.attachProtectedEvent = function(e, t, n) {
        var i = this;
        if (void 0 !== e && "function" == typeof e.attachEvent) return e.attachEvent(t, function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return i.catchAndStoreException(n, e)
        })
    };
    var j = p;

    function p() {
        this.exceptions = []
    }
    y.prototype.preload = function() {
        var t = this;
        this.onUserIdAvailable(function(e) {
            t.logger("preload complete, userId:", e)
        }, y.maxWaitForApiMs)
    }, y.prototype.onUserIdAvailable = function(i, o) {
        function r(e) {
            var t, n;
            s || (t = e * y.retryIntervalMs, void 0 !== (n = a.instance()) ? (s = !0, n.onUpdate(function(e) {
                e = e.getUserId();
                return a.logger("user ID available:", e), void 0 !== e && localStorage.setItem(y.localStorageKey, e), i(e)
            })) : o <= t ? (s = !0, a.logger("timeout waiting for instance after waiting (ms):", t), i(void 0)) : (a.exceptionHandler.setProtectedTimeout(function() {
                return r(e)
            }, y.retryIntervalMs), e++))
        }
        var a = this,
            s = !1;
        return r(0), this
    }, y.prototype.instance = function() {
        var e;
        return void 0 === this._instance && window.hasOwnProperty("Criteo") && null != (e = window.Criteo) && e.hasOwnProperty("ID5") && (e = void 0, e = this.useStaticConsentForId5 ? {
            partnerId: y.criteoPartnerId,
            cmpApi: "static",
            consentData: {
                allowedVendors: ["131", "91"]
            }
        } : {
            partnerId: y.criteoPartnerId
        }, this._instance = window.Criteo.ID5.init(e)), this._instance
    }, y.prototype.getUserId = function() {
        var e = this.instance();
        if (void 0 !== e) {
            e = e.getUserId();
            if (void 0 !== e) return this.logger("[getUserId] from API ", e), e
        }
        e = localStorage.getItem(y.localStorageKey);
        if (null !== e) return this.logger("[getUserId] from local storage ", e), e
    }, y.prototype.initialize = function() {
        (e = document.createElement("iframe")).style.display = "none", document.body.appendChild(e);
        var e, t, n, i, o = e;
        e = "https://cdn.id5-sync.com/api/1.0/id5-api.js", t = o, n = function() {
            window.Criteo = window.Criteo || {}, window.Criteo.ID5 = o.contentWindow.ID5
        }, (i = document.createElement("script")).src = e, i.type = "text/javascript", i.onload = n, null != (e = t.contentWindow) && e.document.head.appendChild(i), this.preload()
    }, y.criteoPartnerId = 203, y.retryIntervalMs = 100, y.maxWaitForApiMs = 2e4, y.localStorageKey = "criteo-id5id-fast-track";
    var B = y;

    function y(e) {
        this.useStaticConsentForId5 = e, this.logger = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return I.debug.apply(I, i(["[ID5]"], e))
        }, this.exceptionHandler = new j
    }
    C.prototype.isStepAllowed = function(t) {
        return !this.blockedSteps.some(function(e) {
            return e == t
        })
    }, Object.defineProperty(C.prototype, "account", {
        get: function() {
            return this.observableAccounts.get()
        },
        set: function(e) {
            this.observableAccounts.set(e)
        },
        enumerable: !1,
        configurable: !0
    }), C.prototype.onAccountChange = function(e) {
        this.observableAccounts.onPropertyChange(e)
    };
    var G = C;

    function C() {
        this.firstPartyIdentifier = g("fpIdentifier") || null, this.customerInfo = [], this.extraData = [], this.handlerParams = {
            v: q,
            otl: m.getOneTagLocation()
        }, this.handlerResponseType = "single", this.handlerUrlPrefix = "https://sslwidget.criteo.com/event", this.partnerPayload = null, this.requestType = "pixel", this.responseType = "js", this.tagVersion = q, this.dynamic = g("dynamic") || null, this.fullUrlMaxLength = g("fullUrlMaxLength", 4e3), this.previousUrlMaxLength = g("previousUrlMaxLength", 400), this.privateModeDetectionEnabled = g("privateModeDetectionEnabled", !0), this.blockedSteps = g("blockedSteps", []), this.observableAccounts = new H(g("partnerId") || null)
    }
    w.prototype.getReadyToRetrieveProvider = function() {
        return this.tcfv2ConsentProvider.hasCallerFunctionInFrame() ? this.tcfv2ConsentProvider : this.tcfv1ConsentProvider.hasCallerFunctionInFrame() ? this.tcfv1ConsentProvider : void 0 !== this.tcfv2ConsentProvider.getCMPFrame() ? this.tcfv2ConsentProvider : void 0 !== this.tcfv1ConsentProvider.getCMPFrame() ? this.tcfv1ConsentProvider : void 0
    }, w.prototype.retrieveConsentForPassback = function(e) {
        var t = this.getReadyToRetrieveProvider();
        void 0 === t && (this.logger("No compatible GDPR privacy provider found"), e(void 0)), t === this.tcfv1ConsentProvider ? this.tcfv1ConsentProvider.retrieveConsentForPassback(e) : t === this.tcfv2ConsentProvider && this.tcfv2ConsentProvider.retrieveConsent(e)
    }, w.prototype.retrieveConsent = function(e) {
        var t = this.getReadyToRetrieveProvider();
        void 0 === t && (this.logger("No compatible GDPR privacy provider found"), e(void 0)), null != t && t.retrieveConsent(e)
    }, w.prototype.readyToRetrieve = function() {
        return this.tcfv2ConsentProvider.readyToRetrieve() || this.tcfv1ConsentProvider.readyToRetrieve()
    };
    var Q = w;

    function w(e, t, n) {
        void 0 === n && (n = function(e) {}), this.tcfv1ConsentProvider = e, this.tcfv2ConsentProvider = t, this.logger = n
    }

    function z(e) {
        try {
            return JSON.parse(e)
        } catch (e) {}
    }
    b.prototype.getCMPFrame = function() {
        for (var e, t = this.currentWindow, n = 0; n < 10; ++n) {
            try {
                t.frames.__cmpLocator && (e = t)
            } catch (e) {}
            if (t === this.currentWindow.top) break;
            t = t.parent
        }
        return e
    }, b.prototype.hasCallerFunctionInFrame = function() {
        return "function" == typeof this.currentWindow.__cmp
    }, b.prototype.readyToRetrieve = function() {
        return this.hasCallerFunctionInFrame() || void 0 !== this.getCMPFrame()
    }, b.prototype.pingWithTimeout = function(i, e, t, n) {
        function o(e, t) {
            r.logger(t), clearTimeout(e), n()
        }
        var r = this;
        return window.setTimeout(function() {
            var n = window.setTimeout(function() {
                o(i, "Timeout: Unable to get ping return after " + e + "ms")
            }, e);
            r.executeCommand("ping", null, function(e, t) {
                clearTimeout(n), t ? (r.logger("GDPR CMP ping returned"), !0 !== e.cmpLoaded && o(i, "GDPR ping returned cmpLoaded which is not true"), r.logger("GDPR ping returned cmpLoaded which is true")) : o(i, "Error sending ping to GDPR CMP")
            })
        }, t)
    }, b.prototype.retrieveConsent = function(e) {
        this.executeRetrieveConsent("getConsentData", null, e)
    }, b.prototype.retrieveConsentForPassback = function(e) {
        this.executeRetrieveConsent("getVendorConsents", [91], e)
    }, b.prototype.executeRetrieveConsent = function(e, t, n) {
        var i = this,
            o = !1,
            r = window.setTimeout(function() {
                o = !0, i.logger("Timeout: Unable to resolve GDPR consent after " + i.timeout + "ms"), n(void 0)
            }, this.timeout),
            a = !1 !== this.cmpAutoDetect ? this.pingWithTimeout(r, this.pingTimeout, this.pingDelay, function() {
                o = !0, i.logger("Timeout: Unable to ping GDPR API after " + i.pingTimeout + "ms"), n(void 0)
            }) : void 0;
        this.executeCommand(e, t, function(e, t) {
            clearTimeout(a), o || (clearTimeout(r), t ? (i.logger("GDPR consent retrieved"), i.processConsentData(e, n)) : (i.logger("Error retrieving GDPR consent data from CMP"), n(void 0)))
        })
    }, b.prototype.processConsentData = function(e, t) {
        var n;
        e ? (n = {}, "undefined" === e.consentData && (e.consentData = ""), n.consentData = void 0 !== e.consentData ? e.consentData : "", void 0 !== e.gdprApplies && (n.gdprApplies = !!e.gdprApplies), t(n)) : (this.logger("Unable to read GDPR consent data from CMP"), t(void 0))
    }, b.prototype.executeCommand = function(e, t, n) {
        var i, o = this;
        this.hasCallerFunctionInFrame() || (this.logger("No GDPR CMP defined on current frame"), i = this.getCMPFrame(), this.currentWindow.__cmp = function(e, t, n) {
            i ? (t = {
                __cmpCall: {
                    command: e,
                    parameter: t,
                    callId: e = Math.random().toString(10)
                }
            }, o.cmpCallbacks[e] = n, i.postMessage(t, "*")) : (o.logger("GDPR CMP not found in any frame"), n({
                msg: "GDPR CMP not found in any frame"
            }, !1))
        }, this.currentWindow.addEventListener("message", function(e) {
            var e = "string" == typeof e.data ? z(e.data) : e.data;
            e && e.__cmpReturn && e.__cmpReturn.callId && e.__cmpReturn.returnValue && (e = e.__cmpReturn, o.cmpCallbacks) && o.cmpCallbacks[e.callId] && (o.cmpCallbacks[e.callId](e.returnValue, e.success), delete o.cmpCallbacks[e.callId])
        }, !1)), this.currentWindow.__cmp(e, t, n)
    };
    var J = b;

    function b(e, t, n) {
        void 0 === n && (n = function(e) {}), this.cmpCallbacks = {}, this.currentWindow = e, this.timeout = t.tcfTimeout, this.pingTimeout = t.tcfPingTimeout, this.pingDelay = t.tcfPingDelay, this.cmpAutoDetect = t.cmpAutoDetect, this.logger = n
    }(S = k = k || {}).LOADED = "tcloaded", S.UI_SHOWN = "cmpuishown", S.USER_ACTION_COMPLETE = "useractioncomplete", P.prototype.getCMPFrame = function() {
        for (var e, t = this.currentWindow, n = 0; n < 10; ++n) {
            try {
                t.frames.__tcfapiLocator && (e = t)
            } catch (e) {}
            if (t === this.currentWindow.top) break;
            t = t.parent
        }
        return e
    }, P.prototype.hasCallerFunctionInFrame = function() {
        return "function" == typeof this.currentWindow.__tcfapi
    }, P.prototype.readyToRetrieve = function() {
        return this.hasCallerFunctionInFrame() || void 0 !== this.getCMPFrame()
    }, P.prototype.pingWithTimeout = function(n, e, t, i) {
        function o(e, t) {
            r.logger(t), clearTimeout(e), i()
        }
        var r = this;
        return window.setTimeout(function() {
            var t = window.setTimeout(function() {
                o(n, "Timeout: Unable to get TCFv2 ping return after " + e + "ms")
            }, e);
            r.executeCommand("ping", 2, function(e) {
                clearTimeout(t), r.logger("TCFv2 CMP ping returned in ms"), "error" === e.cmpStatus ? o(n, "Error status on ping to TCFv2 CMP") : !0 !== e.cmpLoaded ? o(n, "TCFv2 ping returned cmpLoaded = false") : r.logger("TCFv2 ping returned cmpLoaded = true")
            })
        }, t)
    }, P.prototype.retrieveConsent = function(n) {
        var i, o, r = this,
            a = !1,
            s = window.setTimeout(function() {
                a = !0, o === k.UI_SHOWN ? (r.logger("Timeout: User hasn't confirm their consent settings after " + r.timeout + "ms"), n(i)) : (r.logger("Timeout: Unable to resolve TCFv2 consent after " + r.timeout + "ms"), n(void 0))
            }, this.timeout),
            c = !1 !== this.cmpAutoDetect ? this.pingWithTimeout(s, this.pingTimeout, this.pingDelay, function() {
                a = !0, r.logger("Timeout: Unable to ping TCFv2 API after " + r.pingTimeout + "ms"), n(void 0)
            }) : void 0;
        this.executeCommand("addEventListener", 2, function(e, t) {
            clearTimeout(c), a || ((o = e.eventStatus) !== k.UI_SHOWN && clearTimeout(s), t ? (r.logger("TCFv2 consent retrieved in ms"), e || (r.logger("Unable to read GDPR consent data from CMP"), n(void 0)), i = r.processResponseData(e), (!1 === e.gdprApplies && void 0 === o || o === k.LOADED || o === k.USER_ACTION_COMPLETE) && n(i)) : (r.logger("Error retrieving TCFv2 consent data from CMP"), n(void 0)))
        })
    }, P.prototype.processResponseData = function(e) {
        var t, n = {};
        return "undefined" === e.tcString && (e.tcString = ""), n.consentData = void 0 !== e.tcString ? e.tcString : "", void 0 !== e.gdprApplies && (n.gdprApplies = !!e.gdprApplies), n.version = e.tcfPolicyVersion || 2, n.purposes = null == (t = null == e ? void 0 : e.purpose) ? void 0 : t.consents, n.vendorConsents = null == (t = null == e ? void 0 : e.vendor) ? void 0 : t.consents, n
    }, P.prototype.executeCommand = function(e, t, n, i) {
        var o, r = this;
        this.hasCallerFunctionInFrame() || (this.logger("No TCFv2 CMP defined on current frame"), o = this.getCMPFrame(), this.currentWindow.__tcfapi = function(e, t, n, i) {
            o ? (t = {
                __tcfapiCall: {
                    command: e,
                    version: t,
                    parameter: i,
                    callId: e = Math.random().toString(10)
                }
            }, r.cmpCallbacks[e] = n, o.postMessage(t, "*")) : (r.logger("TCFv2 CMP not found in any frame"), n({
                msg: "TCFv2 CMP not found in any frame"
            }, !1))
        }, this.currentWindow.addEventListener("message", function(e) {
            var e = "string" == typeof e.data ? z(e.data) : e.data;
            e && e.__tcfapiReturn && e.__tcfapiReturn.callId && e.__tcfapiReturn.returnValue && (e = e.__tcfapiReturn, r.cmpCallbacks) && r.cmpCallbacks[e.callId] && "function" == typeof r.cmpCallbacks[e.callId] && (r.cmpCallbacks[e.callId](e.returnValue, e.success), e.returnValue.eventStatus !== k.UI_SHOWN) && delete r.cmpCallbacks[e.callId]
        }, !1)), this.currentWindow.__tcfapi(e, t, n, i)
    };
    var k, S, K = P;

    function P(e, t, n) {
        void 0 === n && (n = function(e) {}), this.cmpCallbacks = {}, this.currentWindow = e, this.timeout = t.tcfTimeout, this.pingTimeout = t.tcfPingTimeout, this.pingDelay = t.tcfPingDelay, this.cmpAutoDetect = t.cmpAutoDetect, this.logger = n
    }
    A.prototype.getCMPFrame = function() {
        for (var e, t = this.currentWindow, n = 0; n < 10; ++n) {
            try {
                t.frames.__uspapiLocator && (e = t)
            } catch (e) {}
            if (t === this.currentWindow.top) break;
            t = t.parent
        }
        return e
    }, A.prototype.hasCallerFunctionInWindow = function() {
        return "function" == typeof this.currentWindow.__uspapi
    }, A.prototype.readyToRetrieve = function() {
        return this.hasCallerFunctionInWindow() || void 0 !== this.getCMPFrame()
    }, A.prototype.retrieveConsent = function(n) {
        var i = this,
            o = !1,
            r = window.setTimeout(function() {
                o = !0, i.logger("Timeout: Unable to resolve CCPA consent after " + i.timeout + "ms"), n(void 0)
            }, this.timeout);
        this.executeCommand("getUSPData", 1, function(e, t) {
            o || (clearTimeout(r), t ? (i.logger("CCPA consent retrieved"), i.processResponseData(e, n)) : (i.logger("Error retrieving CCPA consent data from CMP"), n(void 0)))
        })
    }, A.prototype.processResponseData = function(e, t) {
        e ? t(e) : (this.logger("Unable to read CCPA consent data from CMP"), t(void 0))
    }, A.prototype.executeCommand = function(e, t, n) {
        var i, o = this;
        this.hasCallerFunctionInWindow() || (this.logger("No CCPA CMP defined on current frame"), i = this.getCMPFrame(), this.currentWindow.__uspapi = function(e, t, n) {
            i ? (t = {
                __uspapiCall: {
                    command: e,
                    parameter: t,
                    callId: e = Math.random().toString(10)
                }
            }, o.uspapiCallbacks[e] = n, i.postMessage(t, "*")) : (o.logger("CCPA CMP not found in any frame"), n({
                msg: "CCPA CMP not found in any frame"
            }, !1))
        }, this.currentWindow.addEventListener("message", function(e) {
            var e = "string" == typeof e.data ? z(e.data) : e.data;
            e && e.__uspapiReturn && e.__uspapiReturn.callId && e.__uspapiReturn.returnValue && (e = e.__uspapiReturn, o.uspapiCallbacks) && o.uspapiCallbacks[e.callId] && (o.uspapiCallbacks[e.callId](e.returnValue, e.success), delete o.uspapiCallbacks[e.callId])
        }, !1)), this.currentWindow.__uspapi(e, t, n)
    }, A.prototype.hasUserOptOut = function(e) {
        return !(!e || !e.uspString || "1YNY" === e.uspString.toUpperCase() || "1YNN" === e.uspString.toUpperCase() || "1YN-" === e.uspString.toUpperCase() || "1-N-" === e.uspString.toUpperCase() || "1-NN" === e.uspString.toUpperCase() || "1-NY" === e.uspString.toUpperCase() || "1---" === e.uspString)
    };
    var Y = A;

    function A(e, t, n) {
        void 0 === n && (n = function(e) {}), this.uspapiCallbacks = {}, this.currentWindow = e, this.timeout = t.uspApiTimeout, this.logger = n
    }
    X.prototype.retrieveConsent = function(t) {
        var n, e = this.tcfCompatibleConsentProvider.readyToRetrieve(),
            i = this.ccpaConsentProvider.readyToRetrieve(),
            o = {};
        e || i ? (n = e && i ? 2 : 1, e && this.tcfCompatibleConsentProvider.retrieveConsent(function(e) {
            o.gdprConsent = e, 0 == --n && t(o)
        }), i && this.ccpaConsentProvider.retrieveConsent(function(e) {
            o.ccpaConsent = e, 0 == --n && t(o)
        })) : t(o)
    };
    var $ = X;

    function X(e, t, n, i, o) {
        t = {
            tcfTimeout: t = void 0 === t ? 1e4 : t,
            tcfPingTimeout: n = void 0 === n ? 50 : n,
            tcfPingDelay: i = void 0 === i ? 1e3 : i
        }, n = {
            uspApiTimeout: o = void 0 === o ? 500 : o
        };
        this.tcfCompatibleConsentProvider = new Q(new J(e, t, I.info), new K(e, t, I.info), I.info), this.ccpaConsentProvider = new Y(e, n, I.info)
    }
    R.prototype.setAbtPop = function(t) {
        var e, n = this;
        window.isSecureContext && m.isChrome() && "function" == typeof(null == (e = null === window || void 0 === window ? void 0 : window.sharedStorage) ? void 0 : e.createWorklet) && null != (e = document.featurePolicy) && e.allowsFeature("shared-storage-select-url") && 0 < t.length && window.sharedStorage.createWorklet(R.FLEDGE_BASE_URL + "/worklet", {
            dataOrigin: "script-origin"
        }).then(function(e) {
            return n.callSharedStorage(e, t)
        }).catch(function(e) {
            return n.exceptionHandler.exceptions.push(new Error(e.toString()))
        })
    }, R.prototype.dropIFrame = function(e) {
        var t = document.createElement("iframe");
        return t.allow = "shared-storage", t.width = "0", t.height = "0", t.style.display = "none", t.title = "ABT iframe", t.src = e, document.body.appendChild(t), t
    }, R.prototype.callSharedStorage = function(e, t) {
        for (var n = this, i = t.join(","), o = [], r = 0; r < R.NUM_ABT_POPS; r++) o.push({
            url: R.FLEDGE_BASE_URL + "/" + r + "?partnerIds=" + i
        });
        t = o.map(function(e) {
            return {
                url: e,
                ord: Math.random()
            }
        }).sort(function(e, t) {
            return e.ord - t.ord
        }).map(function(e) {
            return e.url
        });
        return e.selectURL(R.SHARED_STORAGE_WORKLET_NAME, t, {
            resolveToConfig: !1
        }).then(function(e) {
            e = n.dropIFrame(e);
            m.removeLater(n.exceptionHandler, e)
        })
    }, R.NUM_ABT_POPS = 8, R.FLEDGE_BASE_URL = "https://fledge.criteo.com/interest-group/abt", R.SHARED_STORAGE_WORKLET_NAME = "select-abt-url";
    var Z = R;

    function R(e) {
        this.exceptionHandler = e
    }

    function ee(e, t, n) {
        if (void 0 === n && (n = void 0), e instanceof Array)
            for (var i = 0, o = e; i < o.length; i++) ee(o[i], t, n);
        else {
            e = void 0 !== n ? n(e) : e;
            void 0 === e || te(t, e) || t.push(e)
        }
    }

    function te(e, t) {
        for (var n = JSON.stringify || encodeURIComponent || escape, i = n(t), o = 0, r = e; o < r.length; o++) {
            var a = r[o];
            if (a === t || n(a) === i) return 1
        }
    }

    function ne(e) {
        for (var t = [], n = 0, i = e; n < i.length; n++) {
            var o = i[n];
            null != o && t.push(o)
        }
        return t
    }

    function T(e, t) {
        if (void 0 !== e || void 0 !== t) {
            if (void 0 === e || void 0 === t) return !1;
            if (!(e instanceof Array)) return T([e], t);
            if (!(t instanceof Array)) return T(e, [t]);
            if (e.length !== t.length) return !1;
            for (var n = 0, i = e; n < i.length; n++)
                if (!te(t, i[n])) return !1
        }
        return !0
    }

    function ie(e) {
        return void 0 === e || null == e ? [] : e instanceof Array ? e : [e]
    }

    function E(e) {
        var t = e;
        if (e instanceof Function) return (t = e()) instanceof Function ? t : E(t);
        if (e instanceof Array)
            for (var t = [], n = 0; n < e.length; ++n) t[n] = E(e[n]);
        else if (e && "[object Object]" === e.toString()) {
            t = {};
            for (var i = 0, o = Object.getOwnPropertyNames(e); i < o.length; i++) {
                var r = o[i];
                t[r] = E(e[r])
            }
        }
        return t
    }

    function oe(e, t) {
        for (var n = 0, i = e; n < i.length; n++) {
            var o = i[n];
            if (o.event === t.event && T(t.account, o.account)) {
                for (var r in t) t.hasOwnProperty(r) && "account" !== r && (o[r] = t[r]);
                return
            }
        }
        e.push(t)
    }

    function re(e, t) {
        for (var n = 0, i = e; n < i.length; n++) {
            var o = i[n];
            if (o.event === t.event && T(t.account, o.account) && o.hash_method === t.hash_method) return void(void 0 !== t.email && (o.email = function(e, t) {
                var n = [];
                if (void 0 === e) return void 0 === t ? n : t.slice();
                if (void 0 === t) return e.slice();
                for (var i = 0, o = t; i < o.length; i++) {
                    var r = o[i];
                    te(e, r) || n.push(r)
                }
                return e.concat(n)
            }(o.email instanceof Array || void 0 === o.email ? o.email : [o.email], t.email instanceof Array ? t.email : [t.email])))
        }
        e.push(t)
    }

    function D(e, t, n) {
        n = E(n);
        return ae(e, n), oe(t, E(n)), 1
    }

    function ae(e, t) {
        for (var n = 0, i = e; n < i.length; n++) {
            var o = i[n];
            if (o.event === t.event && void 0 === t.account && void 0 === o.account || T(t.account, o.account)) {
                for (var r in t) t.hasOwnProperty(r) && "account" !== r && (o[r] = t[r]);
                return
            }
        }
        e.push(t)
    }
    ce.generateUUID = function() {
        for (var e = "", t = 0; t < 36; t++) e += 8 === t || 13 === t || 18 === t || 23 === t ? "-" : 14 === t ? "4" : (19 === t ? Math.floor(4 * Math.random()) + 8 : Math.floor(16 * Math.random())).toString(16);
        return e
    };
    var se = ce;

    function ce() {}
    le.prototype.getJsonForQueryString = function() {
        var e, t = {
                fbc: this.fbcCookie.getValue(),
                fbp: this.fbpCookie.getValue(),
                crto_fbc: this.crtoFbcCookie.getValue(),
                crto_fbp: this.crtoFbpCookie.getValue(),
                ttclid: this.ttclidCookie.getValue(),
                ttp: this.ttpCookie.getValue()
            },
            n = {};
        for (e in t) void 0 !== t[e] && (n[e] = t[e]);
        return 0 === Object.keys(n).length ? null : encodeURIComponent(JSON.stringify(n))
    };
    var ue = le;

    function le() {
        this.metaCookieRetentionTime = 7776e6, this.tiktokCookieRetentionTime = 34164e6, this.fbcCookie = new l("_fbc", this.metaCookieRetentionTime), this.fbpCookie = new l("_fbp", this.metaCookieRetentionTime), this.crtoFbcCookie = new l("crto_fbc", this.metaCookieRetentionTime), this.crtoFbpCookie = new l("crto_fbp", this.metaCookieRetentionTime), this.ttclidCookie = new l("ttclid", this.tiktokCookieRetentionTime), this.ttpCookie = new l("_ttp", this.tiktokCookieRetentionTime)
    }
    _.prototype.fillQueryStringParams = function(e, t) {
        var n = this.config.trackingCallData.firstPartyIdentifier,
            i = this.socialCookie.getJsonForQueryString();
        n && e.push("fpid=" + n), this.gaid && e.push("ai=" + this.gaid), this.idfa && e.push("idfa=" + this.idfa), null !== this.clickOriginPayload && e.push("cop=" + this.clickOriginPayload), null !== this.optoutCookie.cookieValue && e.push("optout=1"), null != this.bundleCookie.cookieValue && (n = encodeURIComponent(this.bundleCookie.cookieValue), e.push("bundle=" + n)), null !== i && e.push("sc=" + i), null !== this.tld && e.push("tld=" + this.tld), t.privateModeDetectionEnabled && null !== this.privateMode && 0 !== this.privateMode ? e.push("pm=" + this.privateMode) : t.privateModeDetectionEnabled || e.push("pm=3"), void 0 !== new l("cto_clc", this.readonlyCookieRetentionTime).getValue() && e.push("clc=1")
    }, _.prototype.checkAcid = function() {
        this.setCanWriteCookie(), this.setCanWriteLocalStorage()
    }, _.prototype.setCop = function(e) {
        var t = m.getQueryString(e);
        if (void 0 !== t && (this.clickOriginPayload = this.getParameterValueByName(t, "cto_pld")), null === this.clickOriginPayload) try {
            var n = m.getAnchorWithReferrer(e.top.document);
            n && n.search && (this.clickOriginPayload = this.getParameterValueByName(n.search, "cto_pld"))
        } catch (e) {}
    }, _.prototype.checkClientSideIdentityStatus = function() {
        this.optoutCookie.getFromAllStorages(), this.bundleCookie.setValueFromAllStorages(), this.ifaCookie.setValueFromAllStorages()
    }, _.prototype.checkCookies = function(e) {
        var t = !0;
        if (e.callbacks) {
            for (var n = 0, i = "string" == typeof e.callbacks ? [e.callbacks] : e.callbacks; n < i.length; n++) {
                var o = i[n],
                    r = document.createElement("img"),
                    o = (r.setAttribute("style", "display:none;"), r.setAttribute("width", "1"), r.setAttribute("height", "1"), r.setAttribute("data-owner", "criteo-tag"), r.setAttribute("src", o), document.getElementsByTagName("script")[0]);
                o.parentNode.insertBefore(r, o), m.removeLater(this.exceptionHandler, r)
            }
            t = !1
        }
        e.optout ? (this.optoutCookie.setValue("1", t), this.bundleCookie.removeFromAllStorages()) : e.bundle && this.bundleCookie.setValue(e.bundle, t)
    }, _.prototype.scrapIdentifiers = function(n) {
        return Object.keys(n.externalIdentifiersToRead).map(function(e) {
            var t = n.externalIdentifiersToRead[e],
                t = new l(t.key, 0, t.storageSource).getFromAllStorages().value;
            return null != t && 0 < t.length ? JSON.stringify({
                type: e,
                value: t
            }) : ""
        }).filter(function(e) {
            return 0 < e.length
        }).join(",")
    }, _.prototype.getParameterValueByName = function(e, t) {
        if (e && 1 < e.length) {
            var n, t = "&" + t + "=",
                i = (e = "?" === e[0] ? "&" + e.substr(1) : e).indexOf(t);
            if (-1 !== i) return n = e.indexOf("&", i + t.length), e.slice(i + t.length, n < 0 ? void 0 : n)
        }
        return null
    }, _.prototype.setCanWriteCookie = function() {
        this.canWriteCookie = l.checkCookiesAreWritable()
    }, _.prototype.setCanWriteLocalStorage = function() {
        this.canWriteLocalStorage = l.checkLocalStorageIsWritable()
    }, _.prototype.getTld = function() {
        var e = new l("cto_tld_test", 36e5),
            t = e.setOnMainDomain("woot");
        return e.removeOnMainDomain(), t
    }, _.prototype.getPrivateMode = function(e, t) {
        if (e.isSafari) try {
            if ("function" == typeof t.openDatabase) return t.openDatabase(null, null, null, null), 1
        } catch (e) {
            return 2
        }
        return 0
    };
    var de = _;

    function _(e, t, n, i) {
        this.readonlyCookieRetentionTime = 0, this.optoutCookieRetentionTime = 15768e7, this.identificationCookieRetentionTime = 34164e6, this.optoutCookie = new l("cto_optout", this.optoutCookieRetentionTime), this.bundleCookie = new l("cto_bundle", this.identificationCookieRetentionTime), this.ifaCookie = new l("id_controller_ifa", this.identificationCookieRetentionTime), this.socialCookie = new ue, this.canWriteCookie = !1, this.canWriteLocalStorage = !1, this.clickOriginPayload = null, this.tld = this.getTld(), this.privateMode = this.getPrivateMode(t, n), this.exceptionHandler = e, this.config = i
    }
    F.prototype.fillQueryStringParams = function(e, t) {}, F.prototype.checkAcid = function() {}, F.prototype.setCop = function(e) {}, F.prototype.checkClientSideIdentityStatus = function() {}, F.prototype.checkCookies = function(e) {}, F.prototype.scrapIdentifiers = function(e) {
        return ""
    };
    var pe = F;

    function F() {
        this.optoutCookie = new l("empty", 0), this.bundleCookie = new l("empty", 0), this.ifaCookie = new l("empty", 0), this.clickOriginPayload = null, this.tld = null, this.canWriteCookie = !1, this.canWriteLocalStorage = !1, this.privateMode = 0
    }
    fe.prototype.createIframe = function(e, t, n, i, o) {
        var r = document.createElement("iframe"),
            a = encodeURIComponent || escape,
            s = m.getHighestAccessibleUrl(window),
            a = a(m.extractHostname(s)),
            s = window.SYNCFRAME_ORIGIN || "onetag",
            t = {
                bundle: e.bundleCookie.toFragmentData(),
                cw: e.canWriteCookie,
                optout: e.optoutCookie.toFragmentData(),
                origin: s,
                tld: e.tld,
                topUrl: a,
                version: t.replace(/\./g, "_"),
                ifa: e.ifaCookie.toFragmentData(),
                lsw: e.canWriteLocalStorage,
                pm: i ? e.privateMode : 3
            },
            i = this.gumSyncFrameEndPoint,
            e = ("#gum-debug-mode" === window.location.hash ? i += "?debug=1&topUrl=" + a : i += "?topUrl=" + a, s && (i += "&origin=" + s), o.gdprConsent),
            a = (e && (void 0 !== e.gdprApplies && (i += "&gdpr=" + (e.gdprApplies ? 1 : 0)), void 0 !== e.consentData) && (i += "&gdpr_consent=" + e.consentData), o.ccpaConsent);
        return a && void 0 !== a.uspString && (i += "&us_privacy=" + a.uspString), i += "#" + JSON.stringify(t), r.src = i, r.id = this.gumSyncFrameId, r.width = "0", r.height = "0", r.frameBorder = "0", r.setAttribute("style", "border-width:0px; margin:0px; display:none"), r.setAttribute("sandbox", "allow-scripts allow-same-origin"), r.setAttribute("aria-hidden", "true"), r.title = "Criteo GUM iframe", m.removeLater(n, r), r
    }, fe.prototype.setWaitingFlag = function(e) {
        this.waitingForSyncframe = this.waitingForSyncframe && null === e.bundleCookie.cookieValue && null === e.optoutCookie.cookieValue
    }, fe.prototype.shouldInjectSyncframe = function() {
        return (void 0 !== window.addEventListener || this.forceSyncFrame) && this.enableOffsiteProjection
    };
    var he = fe;

    function fe() {
        this.forceSyncFrame = !1, this.gumSyncFrameOrigin = "https://" + g("gumDomain", "gum.criteo.com"), this.gumSyncFrameEndPoint = window.CriteoSyncFrameUrlOverride || this.gumSyncFrameOrigin + "/syncframe", this.gumSyncFrameId = "criteo-syncframe-onetag", this.enableOffsiteProjection = g("enableOffsiteProjection", !0), this.waitingForSyncframe = this.enableOffsiteProjection
    }
    ge.prototype.createIframe = function(e, t, n, i, o) {
        return document.createElement("iframe")
    }, ge.prototype.setWaitingFlag = function(e) {}, ge.prototype.shouldInjectSyncframe = function() {
        return !1
    };
    var me = ge;

    function ge() {
        this.gumSyncFrameOrigin = "", this.gumSyncFrameEndPoint = "", this.gumSyncFrameId = "", this.forceSyncFrame = !1, this.waitingForSyncframe = !1, this.enableOffsiteProjection = !1
    }
    var ve = new RegExp(/^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[^ ]+ \(KHTML, like Gecko\) Version\/([^ ]+)( Mobile\/[^ ]+)? Safari\/[^ ]+$/i),
        ye = (x.prototype.canRetrieveMetrics = function() {
            return this.hasPerformanceApi
        }, x.prototype.startRecordingInit = function() {
            this.canRetrieveMetrics() && (this.beginInit = performance.now())
        }, x.prototype.stopRecordingInit = function() {
            var e;
            this.canRetrieveMetrics() && null === this.timings.initTime && null !== this.beginInit && (e = performance.now(), this.timings.initTime = e - this.beginInit)
        }, x.prototype.startRecordingPush = function() {
            this.canRetrieveMetrics() && (this.beginPush = performance.now())
        }, x.prototype.stopRecordingPush = function() {
            var e;
            this.canRetrieveMetrics() && null === this.timings.pushTime && null !== this.beginPush && null !== this.timings.initTime && (e = performance.now(), this.timings.pushTime = e - this.beginPush)
        }, x.prototype.getPerformanceOrDegradedNow = function() {
            return this.canRetrieveMetrics() ? performance.now() : (new Date).getTime()
        }, x);

    function x() {
        this.timings = {
            initTime: null,
            pushTime: null
        }, this.beginInit = null, this.beginPush = null, this.hasPerformanceApi = void 0 !== window.performance && "function" == typeof window.performance.now
    }
    O.prototype.trySetPageId = function(e, t) {
        this.shouldFillPageId && this.isCbsEnabled && this.checkNotExistOrEmpty(e.page_id) && (e.page_id = t)
    }, O.prototype.tryForceViewListPageId = function(e) {
        this.shouldFillPageId && this.isCbsEnabled && this.checkNotExistOrEmpty(e.page_id) && (this.checkNotExistOrEmpty(e.category) ? this.checkNotExistOrEmpty(e.keywords) ? e.page_id = "viewList" : e.page_id = "viewSearchResult" : e.page_id = "viewCategory")
    }, O.prototype.tryRunActionAfterAdBlockDetectionOrImmediate = function(t, e) {
        var n = this,
            i = window.criteo_q;
        null != i && (i = i.adBlockDetector, this.isCbsEnabled) && void 0 !== i ? (i(function(e) {
            n.abe = e, t()
        }), e(t)) : t()
    }, O.prototype.tryAppendAdBlockerParameter = function(e) {
        void 0 !== this.abe && e.push("abe=" + (this.abe ? 1 : 0))
    }, O.prototype.tryAppendUatParameter = function(e) {
        var t;
        this.isCbsEnabled && void 0 !== this.uat && (t = encodeURIComponent || escape, e.push("uat=" + t(this.uat)))
    }, O.prototype.clean = function() {
        this.abe = void 0, this.isCbsEnabled = !1, this.uat = void 0
    }, O.prototype.enable = function() {
        this.isCbsEnabled = !0
    }, O.prototype.setUat = function(e) {
        this.uat = e
    }, O.prototype.checkNotExistOrEmpty = function(e) {
        return void 0 === e || "" === e
    };
    var Ce = O;

    function O() {
        this.abe = void 0, this.isCbsEnabled = !1, this.uat = void 0, this.shouldFillPageId = g("shouldFillPageId", !0)
    }
    Object.defineProperty(be.prototype, "accounts", {
        get: function() {
            return this.observableAccounts.get()
        },
        enumerable: !1,
        configurable: !0
    }), be.prototype.onAccountsChange = function(e) {
        this.observableAccounts.onPropertyChange(e)
    };
    var we = be;

    function be() {
        this.actions = [], this.bodyReady = !1, this.disingScheduled = [], this.domReady = !1, this.eventSent = !1, this.queue = [], this.observableAccounts = new H([])
    }
    var ke = /^#(enable|disable)-criteo-tag-debug-mode(=(\d+))?$/;

    function Se(e, t, n, i, o) {
        var r, a, s, c;
        return document && window.location.hash && (a = ke.exec(window.location.hash)) && 4 === a.length && (r = "enable" === a[1], a = Number(a[3]), new l("criteoTagDebugMode", r ? 864e5 : 0).setValueWithNoDomain(r && a && !isNaN(a) ? String(a) : "0"), window.location.href = window.location.href.substr(0, window.location.href.indexOf("#"))), document && "function" == typeof Array.prototype.indexOf && -1 !== document.cookie.indexOf("criteoTagDebugMode=") ? (s = o, c = {
            exceptions: e.exceptions,
            m_config: n,
            m_state: i,
            originalPush: e.push,
            performances: e.performances,
            push: function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                0 < e.length && this.stagedPushes.push(e), s.stopRecordingInit()
            },
            pushError: function(e) {
                this.stagedPushes.push(e)
            },
            removeLater: e.removeLater,
            setProtectedTimeout: t.setProtectedTimeout,
            stagedErrors: [],
            stagedPushes: []
        }, window.onerror = function(o) {
            return function(e, t, n, i) {
                return c.pushError({
                    column: i,
                    lineNumber: n,
                    message: e,
                    url: t
                }), !(!o || "function" != typeof o) && o.apply(window, [e, t, n, i])
            }
        }(window.onerror), r = c, document && (a = "ld-tag-debug." + q + ".js", (o = document.createElement("script")).setAttribute("type", "text/javascript"), o.setAttribute("src", document.location.protocol + "//static.criteo.net/js/ld/" + a), (a = document.getElementsByTagName("script")[0]).parentNode.insertBefore(o, a)), r) : e
    }

    function Pe(t, n) {
        function e(e) {
            void 0 === e && (e = !1), n.eventSent || (e && t.push({
                event: "setRequestType",
                type: "beacon"
            }), t.push({
                event: "viewPage"
            }))
        }
        window.addEventListener && window.addEventListener("pagehide", function() {
            return e(!0)
        });
        var i = g("visitEventDelay", 5e3);
        0 <= i && setTimeout(e, i)
    }
    M.prototype.push = function() {
        for (var n = this, i = [], e = 0; e < arguments.length; e++) i[e] = arguments[e];
        this.exceptionHandler.catchAndStoreException(function() {
            n.performanceMetrics.startRecordingPush();
            for (var e = 0, t = i; e < t.length; e++) n.mState.app.queue.push(t[e]);
            n.evalQueue(), n.cleanConfigurationAndState(), n.performanceMetrics.stopRecordingPush()
        }, i), this.performanceMetrics.stopRecordingInit()
    }, M.prototype.removeLater = function(e) {
        m.removeLater(this.exceptionHandler, e)
    }, M.prototype.setupSyncFrameWait = function() {
        var e = this;
        this.mSyncframe.setWaitingFlag(this.mIdentification), this.mSyncframe.waitingForSyncframe && this.exceptionHandler.setProtectedTimeout(function() {
            e.unblockEvents()
        }, 1e4)
    }, M.prototype.unblockEvents = function() {
        this.mSyncframe.waitingForSyncframe && (this.mSyncframe.waitingForSyncframe = !1, this.evalQueue())
    }, M.prototype.evalQueue = function() {
        for (var e = this.mState.app, t = [], n = e.queue, i = 0; i < n.length; ++i) {
            var o = n[i];
            if (o instanceof Array && n.splice.apply(n, [i + 1, 0].concat(o)), o instanceof Function) n.splice(i + 1, 0, o());
            else if (o && "[object Object]" === o.toString()) switch (this.evalEvent(o, i, n, t)) {
                case 0:
                    t.push(o);
                    break;
                case -1:
                    t = t.concat(n.slice(i)), i = n.length
            }
        }
        this.mConfig.hooks.afterEval instanceof Function && this.mConfig.hooks.afterEval(), e.queue = t || [], this.mConfig.workflow.manualFlush || this.mConfig.workflow.noPartialFlush && 0 !== e.queue.length || this.mSyncframe.waitingForSyncframe || this.flush(0 !== e.queue.length)
    }, M.prototype.evalEvent = function(e, t, n, i) {
        var o = this.mState.app,
            r = this.mState.cbs,
            a = this.mIdentification,
            s = this.mConfig.trackingCallData,
            c = this.mConfig.hooks,
            u = this.mConfig.workflow,
            l = e.event,
            d = this.beforeEvalEvent(e);
        if (null !== d) return d;
        switch (e.event) {
            case "setdata":
                return D(s.extraData, o.actions, e);
            case "setparameter":
                for (var p in e) "event" !== p.toLowerCase() && e.hasOwnProperty(p) && (s.handlerParams[p] = e[p]);
                return 1;
            case "calldising":
                this.innerEvalCallDisingEvent(e);
                break;
            case "setzipcode":
            case "setstore":
                return e.event = "setdata", D(s.extraData, o.actions, e);
            case "setcustomerid":
                return e.event = "setdata", e.customer_id = e.id, delete e.id, D(s.extraData, o.actions, e);
            case "setretailervisitorid":
                return r.enable(), e.event = "setdata", e.retailer_visitor_id = e.id, delete e.id, D(s.extraData, o.actions, e);
            case "setgoogleadvertisingid":
                return a.gaid = e.gaid, D(s.extraData, o.actions, {
                    event: "setdata",
                    site_type: "aa"
                });
            case "setappleadvertisingid":
                return a.idfa = e.idfa, D(s.extraData, o.actions, {
                    event: "setdata",
                    site_type: "aios"
                });
            case "setemail":
            case "sethashedemail":
            case "ceh":
                e.event = "setemail", e.hasOwnProperty("email") && (e.email instanceof Array || (e.email = [e.email]), e.email = ne(e.email));
                var h = E(e);
                return s.customerInfo.push(h), re(o.actions, E(e)), 1;
            case "setphonenumber":
            case "setsha256hashedphonenumber":
                if (e.hasOwnProperty("phone_number")) {
                    var f, h = e.phone_number instanceof Array ? e.phone_number : [e.phone_number];
                    if (0 < (h = ne(h)).length) return f = "setphonenumber" == e.event ? "pnclear" : "pnsha256", h = {
                        source: "onetag",
                        uids: h.map(function(e) {
                            return {
                                id: e,
                                atype: 3,
                                ext: {
                                    stype: f
                                }
                            }
                        })
                    }, delete e.phone_number, e.event = "setIdentity", e.identity = [h], o.actions.push(E(e)), 1
                }
                return 0;
            case "setidentity":
                if (e.hasOwnProperty("identity"))
                    if (0 < (h = ne(e.identity instanceof Array ? e.identity : [e.identity])).length) return e.identity = h, o.actions.push(E(e)), 1;
                return 0;
            case "setsitetype":
                h = "d";
                return "aios" !== e.type && "aa" != e.type || (h = e.type), "mobile" !== e.type && "m" !== e.type || (h = "m"), "tablet" !== e.type && "t" !== e.type || (h = "t"), e.event = "setdata", delete e.type, e.site_type = h, D(s.extraData, o.actions, e);
            case "appendtag":
                return this.innerEvalAppendTagEvent(e);
            case "gettagstate":
                return e.callback instanceof Function ? e.callback(this.mState, this.mConfig, this.mIdentification, this.mSyncframe) : 1;
            case "setuat":
                return this.mState.cbs.setUat(e.uat), 1;
            case "viewsearchresult":
            case "viewcategory":
                r.trySetPageId(e, l), e.event = "viewlist";
                break;
            case "viewlist":
                r.tryForceViewListPageId(e);
                break;
            case "viewitem":
            case "viewhome":
            case "viewbasket":
            case "tracktransaction":
            case "addtocart":
                r.trySetPageId(e, l);
                break;
            case "viewstore":
                r.trySetPageId(e, l), e.event = "viewHome", e.sub_event_type = "s";
                break;
            case "checkavailability":
                r.trySetPageId(e, l), e.event = "viewBasket", e.sub_event_type = "a";
                break;
            case "reserveinstore":
                r.trySetPageId(e, l), e.event = "viewBasket", e.sub_event_type = "r";
                break;
            case "flush":
            case "flushevents":
                return this.flush(t !== n.length - 1 || 0 !== i.length), 1;
            case "setaccount":
                return s.account = e.account, 1;
            case "seturl":
                return s.handlerUrlPrefix = e.url, 1;
            case "setcalltype":
                return s.handlerResponseType = e.type, 1;
            case "setresponsetype":
                return s.responseType = e.type, 1;
            case "setrequesttype":
                return s.requestType = e.type, 1;
            case "setpartnerpayload":
                return s.partnerPayload = e.payload, 1;
            case "oninitialized":
                return c.onInitialized = e.callback, 1;
            case "ondomready":
                return c.onDOMReady = e.callback, 1;
            case "beforeappend":
                return c.beforeAppend = e.callback, 1;
            case "aftereval":
                return c.afterEval = e.callback, 1;
            case "onflush":
                return c.onFlush = e.callback, 1;
            case "onurlgenerated":
                return c.onUrlGenerated = e.callback, 1;
            case "disonce":
                return u.disOnce = !0, 1;
            case "manualdising":
                return u.manualDising = !0, 1;
            case "manualflush":
                return u.manualFlush = !0, 1;
            case "nopartialflush":
                return u.noPartialFlush = !0, 1;
            case "disonpartialflush":
                return u.partialDis = !0, 1
        }
        return o.actions.push(E(e)), 1
    }, M.prototype.flush = function(e) {
        var i = this,
            n = this.mState.app,
            o = this.mState.cbs,
            r = this.mConfig.trackingCallData,
            a = this.mConfig.workflow,
            s = this.mConfig.hooks;
        if (s.onFlush instanceof Function && (s.onFlush(), I.warn("on flush hook is deprecated and will soon be removed. Please do not use it and contact criteo if you think this may break your integration")), 0 !== n.actions.length) {
            for (var t = 0, c = r.extraData; t < c.length; t++) {
                var u = c[t];
                oe(n.actions, u)
            }
            for (var l = 0, d = r.customerInfo; l < d.length; l++) {
                var p = d[l];
                re(n.actions, p)
            }
            for (var h, f = 0, m = n.actions; f < m.length; f++) {
                var g = m[f];
                (h = void 0) !== (g = g).identity && JSON.stringify && (h = g.identity instanceof Array ? g.identity : [g.identity], g.raw_identity = JSON.stringify(h), delete g.identity)
            }
            if (!a.manualDising && (!e || a.partialDis)) {
                for (var v = [], y = 0, C = n.accounts; y < C.length; y++) {
                    var w = C[y];
                    te(n.disingScheduled, w) || v.push(w)
                }
                0 < v.length && this.evalCallDisingEvent({
                    event: "callDising",
                    account: v
                })
            }
            var b = !1,
                k = this.getQueryParams(),
                S = (n.actions = [], function() {
                    var e, t;
                    b || (b = !0, o.tryAppendAdBlockerParameter(k), e = i.generateQueryString(k), t = i.buildHandlerCall(e), "function" == typeof s.onUrlGenerated ? s.onUrlGenerated(t.url) : "beacon" === r.requestType && navigator.sendBeacon ? navigator.sendBeacon(t.url) : i.evalAppendTagEvent(t), I.info("DIS call triggered", t.url, k), (n.eventSent = !0) === t.isImgUrl && i.mAttributionReporting.registerTrigger(e), r.dynamic && r.isStepAllowed("setFledgeAbt") && i.fledgeAbt.setAbtPop(ie(r.account)), a.disOnce) || (n.disingScheduled = [])
                }),
                P = function() {
                    r.isStepAllowed("readCmaTestLabel") && "cookieDeprecationLabel" in navigator ? navigator.cookieDeprecationLabel.getValue().then(function(e) {
                        k.push("cl=" + e), S()
                    }).catch(function() {
                        S()
                    }) : S()
                };
            this.retrieveConsent(function(e) {
                var t, n;
                k.push.apply(k, (t = [], (n = (e = e).gdprConsent) && (void 0 !== n.gdprApplies && t.push("gra=" + (n.gdprApplies ? 1 : 0)), void 0 !== n.consentData && t.push("grs=" + n.consentData), void 0 !== n.version) && t.push("grv=" + n.version), (n = e.ccpaConsent) && (void 0 !== n.uspString && t.push("cs=" + n.uspString), void 0 !== n.version) && t.push("cv=" + n.version), t)), o.tryRunActionAfterAdBlockDetectionOrImmediate(P, function(e) {
                    return i.exceptionHandler.setProtectedTimeout(e, 500)
                })
            })
        }
    }, M.prototype.beforeEvalEvent = function(e) {
        var t = this;
        return !this.mState.app.domReady && e.requiresDOM && "no" !== e.requiresDOM ? "blocking" === e.requiresDOM ? -1 : 0 : (delete e.requiresDOM, e.event ? (e.account && ee(e.account, this.mState.app.accounts, function(e) {
            return t.parseAccount(e) || e
        }), e.event = e.event.toLowerCase(), null) : (E(e), 1))
    }, M.prototype.parseAccount = function(e) {
        if ("number" == typeof e) return e;
        if ("string" == typeof e) {
            e = parseInt(e, 10);
            if (!isNaN(e)) return e
        }
    }, M.prototype.innerEvalCallDisingEvent = function(e) {
        e.hasOwnProperty("account") || (e.account = this.mState.app.accounts);
        var t = this.mConfig.trackingCallData.handlerResponseType;
        e.hasOwnProperty("type") && (t = e.type, delete e.type), ee(e.account, this.mState.app.disingScheduled), "sequential" === t && (e.dc = !0)
    }, M.prototype.innerEvalAppendTagEvent = function(e) {
        var t = this.mConfig.workflow;
        if (!this.mState.app.bodyReady || t.container && document.body.contains(t.container) || (t.container = m.appendCriteoContainer(document.body)), e.url && (n = void 0, e.isImgUrl ? ((n = document.createElement("img")).setAttribute("style", "display:none;"), n.setAttribute("width", "1"), n.setAttribute("height", "1")) : ((n = document.createElement("script")).setAttribute("async", "true"), n.setAttribute("type", "text/javascript")), n.setAttribute("src", e.url), e.element = n), this.mConfig.hooks.beforeAppend instanceof Function && (e.element = this.mConfig.hooks.beforeAppend(e.element)), E(e), e.element && (e.element.tagName || e.isImgUrl)) {
            if (t.container || "script" !== e.element.tagName.toLowerCase() && !e.isImgUrl) {
                if (!t.container) return 0;
                t.container.appendChild(e.element)
            } else {
                var n = document.getElementsByTagName("script")[0];
                e.element.setAttribute("data-owner", "criteo-tag"), n.parentNode.insertBefore(e.element, n)
            }
            m.removeLater(this.exceptionHandler, e.element)
        }
        return 1
    }, M.prototype.evalCallDisingEvent = function(e) {
        var t = this.beforeEvalEvent(e);
        return null !== t ? t : (this.innerEvalCallDisingEvent(e), this.mState.app.actions.push(E(e)), 1)
    }, M.prototype.getQueryParams = function() {
        var e = this.mState.app,
            t = this.mConfig.trackingCallData,
            n = e.actions,
            i = [],
            e = (1 === e.accounts.length && (t.account = e.accounts[0]), null !== t.account && i.push("a=" + this.toQuery(t.account, [])), "beacon" === t.requestType && navigator.sendBeacon && (t.responseType = "gif"), "js" !== t.responseType && i.push("rt=" + this.toQuery(t.responseType, [])), t.handlerParams && (e = decodeURIComponent(this.toQuery(t.handlerParams, []))) && i.push(e), this.getNonceValueFromDOM());
        void 0 !== e && (a = encodeURIComponent || escape, i.push("csp-nonce=" + a(e))), this.mState.cbs.tryAppendUatParameter(i);
        for (var o = 0; o < n.length; ++o) {
            var r = n[o];
            r.account && T(null === t.account ? void 0 : t.account, r.account) && delete r.account, i.push("p" + o + "=" + this.toQuery(r, []))
        }
        this.mIdentification.fillQueryStringParams(i, t), null !== t.partnerPayload && i.push("pp=" + this.toQuery(t.partnerPayload, [])), t.dynamic && i.push("dy=1");
        Ae(m.getHighestAccessibleUrl(window), i, t.fullUrlMaxLength, "fu", "ful"), t.isStepAllowed("readPreviousUrl") && Ae(m.getPreviousUrl(window), i, t.previousUrlMaxLength, "pu", "pul");
        var a = se.generateUUID(),
            e = (this.cspLogger.setClientRequestId(a), i.push("ceid=" + a), this.mIdentification.scrapIdentifiers(this.mConfig.identifierScrappingConfig));
        return 0 < e.length && i.push("external_advids=" + encodeURIComponent("[" + e + "]")), i
    }, M.prototype.toQuery = function(e, t) {
        var n = encodeURIComponent || escape,
            i = "";
        if (e instanceof Function) i = this.toQuery(e(), t);
        else if (e instanceof Array) {
            for (var o = [], r = 0; r < e.length; ++r) o[r] = this.toQuery(e[r], t);
            i += "[" + o.join(",") + "]"
        } else if (e && "[object Object]" === e.toString()) {
            var a, s, c = [];
            for (a in e) e.hasOwnProperty(a) && (s = t.concat([a]), c.push(this.applyPropMap(a, s) + "=" + this.toQuery(e[a], s)));
            i += c.join("&")
        } else if (1 === t.length && "event" === t[0]) i += this.mConfig.shortNameMap.events[e.toLowerCase()] ? this.mConfig.shortNameMap.events[e.toLowerCase()] : e;
        else {
            var u = this.parseArrayFromString(t, e);
            if (0 < u.length) return this.toQuery(u, t);
            this.shouldEncodeField(t) ? i += n(e) : i += e
        }
        return n(i)
    }, M.prototype.applyPropMap = function(e, t) {
        t = t.join(".");
        return this.mConfig.shortNameMap.properties[t] || e
    }, M.prototype.parseArrayFromString = function(e, t) {
        e = e.join(".");
        return "string" == typeof t && this.mConfig.parsingConfig.shouldParseField(e) && 0 != t.length && "[" == t.charAt(0) && "]" == t.charAt(t.length - 1) ? t.substring(1, t.length - 1).split(",", -1).map(function(e) {
            return e.trim()
        }) : []
    }, M.prototype.shouldEncodeField = function(e) {
        e = e.join(".");
        return this.mConfig.encodingConfig.shouldEncodeField(e)
    }, M.prototype.getNonceValueFromDOM = function() {
        for (var e = document.getElementsByTagName("script"), t = 0; t < e.length; t++) {
            var n = e[t],
                n = n.nonce || n.getAttribute("nonce");
            if (null != n && "" !== n) return n
        }
    }, M.prototype.generateQueryString = function(e) {
        return e.join("&")
    }, M.prototype.buildHandlerCall = function(e) {
        return {
            event: "appendTag",
            isImgUrl: "gif" === this.mConfig.trackingCallData.responseType,
            url: this.mConfig.trackingCallData.handlerUrlPrefix + "?" + e
        }
    }, M.prototype.evalAppendTagEvent = function(e) {
        var t = this.beforeEvalEvent(e);
        return null !== t ? t : this.innerEvalAppendTagEvent(e)
    }, M.prototype.tryWriteCriteoCookiesOnAdvertiserDomain = function(e) {
        var t = this;
        this.mSyncframe.shouldInjectSyncframe() && (e = this.mSyncframe.createIframe(this.mIdentification, this.mConfig.trackingCallData.tagVersion, this.exceptionHandler, this.mConfig.trackingCallData.privateModeDetectionEnabled, e), window.addEventListener) && (this.exceptionHandler.addProtectedEventListener(window, "message", function(e) {
            t.onMessageReceived(e)
        }, !0), this.evalAppendTagEvent({
            event: "appendtag",
            element: e
        }))
    }, M.prototype.onMessageReceived = function(e) {
        var t = e.data;
        (t && e.origin == this.mSyncframe.gumSyncFrameOrigin || window.BypassSyncframeMessageSanityCheck) && (e.stopPropagation(), this.mIdentification.checkCookies(t), this.mSyncframe.waitingForSyncframe) && this.unblockEvents()
    }, M.prototype.cleanConfigurationAndState = function() {
        var e = this.mConfig.trackingCallData.extraData,
            t = !1;
        if (200 < e.length) t = !0;
        else
            for (var n = 0, i = e; n < i.length; n++) {
                var o = i[n],
                    r = 0;
                if (Object.keys) r = Object.keys(o).length;
                else
                    for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (r += 1);
                if (200 < r) {
                    t = !0;
                    break
                }
            }
        t && (e.length = 0), this.mConfig.trackingCallData.customerInfo = [], this.mState.cbs.clean()
    }, M.prototype.setupCspLogger = function() {
        function t(e) {
            n.cspLogger.setPartnerIds(e.map(function(e) {
                return n.parseAccount(e)
            }).filter(function(e) {
                return void 0 !== e
            }))
        }
        var n = this;
        this.mConfig.trackingCallData.onAccountChange(function(e) {
            t(ie(e))
        }), this.mState.app.onAccountsChange(function(e) {
            t(e)
        }), g("enabledCspViolationDetection", !1) && (this.cspLogger.registerListener(), this.addExtraAllowedDomainsToCspLogger())
    }, M.prototype.addExtraAllowedDomainsToCspLogger = function() {
        var e = g("allowedDomainsForCsp", []);
        this.cspLogger.addAllowedDomains(e)
    };
    var Ie = M;

    function M() {
        var e, t, n, i, o, r, a, s, c, u, l = this,
            d = (void 0 !== (null == (o = null === window || void 0 === window ? void 0 : window.location) ? void 0 : o.hash) && -1 !== window.location.hash.indexOf("onetag-debug") && I.setLogLevel(f.Debug), this.exceptionHandler = new j, this.exceptions = this.exceptionHandler.exceptions, this.performanceMetrics = new ye, this.performances = this.performanceMetrics.timings, this.performanceMetrics.startRecordingInit(), this.mState = {
                app: new we,
                cbs: new Ce
            }, this.mConfig = (o = new G, t = {
                item: !0,
                "item.id": !0,
                product: !0,
                "product.id": !0
            }, n = {
                item: !0,
                product: !0
            }, r = {
                shouldEncodeField: function(e) {
                    return t[e]
                }
            }, p = {
                shouldParseField: function(e) {
                    return n[e]
                }
            }, i = {
                externalIdentifiersToRead: {
                    FirstId: {
                        key: "firstid",
                        storageSource: {
                            origin: v.Cookie
                        }
                    },
                    IntimateMergerId: {
                        key: /^_im_uid\./,
                        storageSource: {
                            origin: v.LocalStorage
                        }
                    }
                }
            }, g("addClientSideSupportForId5") && (d = g("useStaticConsentForId5", !1), (e = new B(d)).initialize(), i.externalIdentifiersToRead.Id5 = {
                key: "id5",
                storageSource: {
                    origin: v.Library,
                    retrievalMethod: function() {
                        return e.getUserId()
                    }
                }
            }), {
                hooks: {},
                shortNameMap: {
                    events: {
                        applaunched: "al",
                        viewitem: "vp",
                        viewhome: "vh",
                        viewlist: "vl",
                        viewbasket: "vb",
                        viewsearch: "vs",
                        viewpage: "vpg",
                        tracktransaction: "vc",
                        addtocart: "ac",
                        calldising: "dis",
                        setdata: "exd",
                        setemail: "ce",
                        setidentity: "id"
                    },
                    properties: {
                        event: "e",
                        account: "a",
                        first_party_identifier: "fpid",
                        currency: "c",
                        product: "p",
                        item: "p",
                        "item.id": "i",
                        "item.price": "pr",
                        "item.quantity": "q",
                        "item.availability": "pav",
                        "item.buy_box": "bb",
                        "item.sku_parent": "psp",
                        "item.store_id": "ps",
                        item_whitelist: "iw",
                        "product.id": "i",
                        "product.price": "pr",
                        "product.quantity": "q",
                        "product.availability": "pav",
                        "product.buy_box": "bb",
                        "product.sku_parent": "psp",
                        "product.store_id": "ps",
                        data: "d",
                        keywords: "kw",
                        checkin_date: "din",
                        checkout_date: "dout",
                        deduplication: "dd",
                        delivery: "dl",
                        attribution: "at",
                        "attribution.channel": "ac",
                        "attribution.value": "v",
                        user_segment: "si",
                        new_customer: "nc",
                        customer_id: "ci",
                        email: "m",
                        hash_method: "h",
                        identity: "id",
                        raw_identity: "rid",
                        transaction_value: "tv",
                        client_revenue: "cr",
                        responseType: "rt",
                        page_name: "pn",
                        page_id: "pi",
                        page_number: "pnb",
                        category: "ca",
                        filters: "f",
                        "filters.name": "fn",
                        "filters.operator": "fo",
                        "filters.value": "fv",
                        retailer_visitor_id: "rvi",
                        price: "pr",
                        availability: "av",
                        sub_event_type: "se",
                        store_id: "s",
                        item_group_id: "sp",
                        sku_parent: "sp",
                        zipcode: "z",
                        nocall: "noc",
                        block: "bl"
                    }
                },
                trackingCallData: o,
                workflow: {
                    container: null,
                    disOnce: !1,
                    manualDising: !1,
                    manualFlush: !1,
                    noPartialFlush: !1,
                    partialDis: !1
                },
                encodingConfig: r,
                parsingConfig: p,
                identifierScrappingConfig: i
            }), this.mConfig.trackingCallData.isStepAllowed("identify")),
            p = (o = window.navigator.userAgent, r = null !== (o = o.match(ve)), {
                hasItp: null !== o && 11 <= parseFloat(o[1]),
                isSafari: r
            });
        this.mIdentification = d ? new de(this.exceptionHandler, p, window, this.mConfig) : new pe, this.mSyncframe = new(d ? he : me), this.mConsentManager = new $(window), this.mAttributionReporting = new V(document, this.exceptionHandler), this.fledgeAbt = new Z(this.exceptionHandler), this.cspLogger = U.getSingleton(this.mConfig.trackingCallData.dynamic ? "dynamic.criteo.com" : "static.criteo.net", this.mConfig.trackingCallData.dynamic ? h.OneTagDynamic : h.OneTagStatic), this.retrieveConsent = (s = !(a = function(e) {
            l.mConsentManager.retrieveConsent(e)
        }), c = void 0, u = [], function(e) {
            s ? e(c) : (u.push(e), 1 === u.length && a(function(e) {
                s = !0, c = e;
                for (var t = 0, n = u; t < n.length; t++)(0, n[t])(c)
            }))
        }), this.exceptionHandler.catchAndStoreException(function() {
            l.setupCspLogger(), l.mIdentification.checkAcid(), l.mIdentification.checkClientSideIdentityStatus(), l.mIdentification.setCop(window), l.setupSyncFrameWait(), m.onBodyReady(l.exceptionHandler, function() {
                l.mConfig.hooks.onInitialized instanceof Function ? (l.mState.app.bodyReady = l.mConfig.hooks.onInitialized(), I.warn("onInitialized hook is deprecated and will soon be removed. Please do not use it and contact criteo if you think this may break your integration")) : l.mState.app.bodyReady = !0, l.retrieveConsent(function(e) {
                    l.tryWriteCriteoCookiesOnAdvertiserDomain(e)
                }), l.evalQueue()
            }), m.onDocumentReady(l.exceptionHandler, function() {
                l.mConfig.hooks.onDOMReady instanceof Function ? (l.mState.app.domReady = l.mConfig.hooks.onDOMReady(), I.warn("on DOM ready hook is deprecated and will soon be removed. Please do not use it and contact criteo if you think this may break your integration")) : l.mState.app.domReady = !0, l.evalQueue()
            });
            var e = l.mConfig.trackingCallData.extraData;
            try {
                var t = m.getAnchorWithReferrer(document);
                t && t.hostname !== document.location.hostname && ae(e, {
                    event: "setData",
                    ref: t.protocol + "//" + t.hostname
                })
            } catch (e) {}
            g("visitEventEnabled", !1) && Pe(l, l.mState.app)
        })
    }

    function Ae(e, t, n, i, o) {
        var r;
        e && 0 !== (e = e.trim()).length && (n < (e = (r = encodeURIComponent || escape)(e)).length && (t.push(o + "=" + e.length), e = e.substr(0, n)), o = r(e), t.push(i + "=" + o))
    }

    function Re(e) {
        var t, n;
        (!e.criteo_q || e.criteo_q instanceof Array) && (t = e.criteo_q || [], e.criteo_q = Se({
            exceptions: (n = new Ie).exceptions,
            performances: n.performances,
            push: function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return n.push.apply(n, e)
            },
            removeLater: function(e) {
                return n.removeLater(e)
            }
        }, n.exceptionHandler, n.mConfig, n.mState, n.performanceMetrics), t.adBlockDetector, e.criteo_q.adBlockDetector = t.adBlockDetector, (e = e.criteo_q).push.apply(e, t))
    }
    Re(window), L.wrapCriteoQ = Re, Object.defineProperty(L, "__esModule", {
        value: !0
    })
}({});


