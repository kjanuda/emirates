; /* Version 715da4562eaf56bd7c87bacb5b01e91e v:23.10.0.4353, c:e631440295826fc9c072c646724befda33cc8916, b:23.10.0.4353 */
(function() {
    /*


     Copyright (c) 2013, AppDynamics, Inc. All rights reserved.

     Derivative of Google Episodes:

     Copyright 2010 Google Inc.

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.

     See the source code here:
     http://code.google.com/p/episodes/
    */
    new function() {
        var h = window.ADRUM;
        if (h && h.q && !0 !== window["adrum-disable"]) {
            var y = window.console,
                A = y && "function" == typeof y.log ? y : {
                    log: function() {}
                },
                u = this && this.kd || function() {
                    var d = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(d, l) {
                        d.__proto__ = l
                    } || function(d, l) {
                        for (var a in l) l.hasOwnProperty(a) && (d[a] = l[a])
                    };
                    return function(g, l) {
                        function a() {
                            this.constructor = g
                        }
                        d(g, l);
                        g.prototype = null === l ? Object.create(l) : (a.prototype = l.prototype, new a)
                    }
                }();
            (function(d) {
                (function(g) {
                    g.toJSONString =
                        function(l) {
                            function a(d) {
                                return d.replace(/\s/g, "") === e
                            }
                            var b = {
                                    a: [1, 2, 3, "str"]
                                },
                                e = '{"a":[1,2,3,"str"]}';
                            if ("undefined" !== typeof JSON && JSON && g.isFunction(JSON.stringify) && a(JSON.stringify(b))) return JSON.stringify(l);
                            if ("undefined" !== typeof Object && Object && g.isFunction(Object.toJSON) && a(Object.toJSON(b))) return Object.toJSON(l);
                            d.logInfo("M267");
                            return null
                        };
                    g.Ed = function(l, a, b) {
                        var e = l,
                            c = b;
                        "xhr" === b && (e = document.createElement("div"), l.appendChild(e), c = "xhr_" + l.getElementsByTagName("div").length);
                        l = document.createElement("p");
                        l.innerHTML = "Script loaded from " + d.conf.adrumExtUrl + ". Metrics collected are:";
                        e.appendChild(l);
                        l = document.createElement("table");
                        l.id = "ADRUM_" + c;
                        var c = document.createElement("tbody"),
                            f;
                        for (f in a) {
                            b = document.createElement("tr");
                            var g = document.createElement("td");
                            g.innerHTML = f;
                            g.className = "name";
                            var m = document.createElement("td");
                            m.innerHTML = String(a[f]);
                            m.className = "value";
                            b.appendChild(g);
                            b.appendChild(m);
                            c.appendChild(b)
                        }
                        l.appendChild(c);
                        e.appendChild(l)
                    };
                    g.dumpObject =
                        function() {
                            function d(a, b) {
                                try {
                                    if ("object" != typeof a) return String(a);
                                    if (0 <= g.jc(b, a)) return "Already visited";
                                    b.push(a);
                                    var e;
                                    if (g.isArray(a)) {
                                        for (var c = "[ ", f = 0; f < a.length; f++) 0 != f && (c += ", "), c += d(a[f], b);
                                        e = c + " ]"
                                    } else {
                                        var c = "{ ",
                                            f = !0,
                                            n;
                                        for (n in a) f ? f = !1 : c += ", ", c += d(n, b) + " => " + d(a[n], b);
                                        e = c + " }"
                                    }
                                    return e
                                } catch (m) {
                                    return "dumpObject failed: " + m
                                }
                            }
                            return function(a) {
                                return d(a, [])
                            }
                        }();
                    g.jc = g.isFunction(Array.prototype.indexOf) ? function(d, a) {
                        return d.indexOf(a)
                    } : function(d, a) {
                        for (var b = 0; b < d.length; b++)
                            if (d[b] ==
                                a) return b;
                        return -1
                    };
                    g.compareWindows = function(d, a) {
                        return d == a
                    };
                    g.Rd = function(d, a, b, e, c) {
                        if (!g.isDefined(a)) return a;
                        if (g.isArray(a)) {
                            d = [];
                            for (var f = 0, n = a.length; f < n; f++) d[f] = g.Rd(f, a[f], b, e, c);
                            return d
                        }
                        if (g.isFunction(a)) return a;
                        if (g.isObject(a)) {
                            d = {};
                            for (f in a) g.hasOwnPropertyDefined(a, f) && (d[b(f)] = c && c(f) ? a[f] : g.Rd(f, a[f], b, e, c));
                            return d
                        }
                        return e(d, a)
                    };
                    g.Zm = function(d) {
                        var a = [],
                            b;
                        for (b in d) g.hasOwnPropertyDefined(d, b) && a.push([b, d[b]]);
                        return a
                    };
                    g.wo = function() {
                        try {
                            localStorage.setItem("try",
                                "try");
                            var d = localStorage.getItem("try");
                            localStorage.removeItem("try");
                            return "try" === d
                        } catch (a) {
                            return !1
                        }
                    };
                    g.vo = function() {
                        try {
                            var d = g.toJSONString({
                                v: 1
                            });
                            return 1 === JSON.parse(d).v
                        } catch (a) {
                            return !1
                        }
                    };
                    g.xo = function() {
                        return g.isFunction(window.postMessage)
                    };
                    g.Lk = function(d, a) {
                        var b = document.createElement("iframe");
                        b.id = a;
                        b.src = d;
                        b.width = "0";
                        b.height = "0";
                        b.tabIndex = -1;
                        b.title = "empty";
                        b.style.display = "none";
                        document.body.appendChild(b);
                        return b
                    };
                    g.Oh = function(d, a) {
                        g.isDefined(a) && (d.parentPageName =
                            a)
                    };
                    g.Wd = function(d) {
                        return g.isNumber(d) && isFinite(d) && Math.floor(d) === d
                    }
                })(d.utils || (d.utils = {}))
            })(h || (h = {}));
            (function(d) {
                (function(d) {
                    d.$h = function(d) {
                        return /^[0-9]+$/.test(d) ? Number(d) : null
                    };
                    d.Hg = function(d) {
                        return "number" === typeof d && !isNaN(d) && isFinite(d)
                    }
                })(d.utils || (d.utils = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    function l(c) {
                        var e = c.split("\r\n"),
                            b = /^\s*ADRUM_(\d+): (.+)\s*$/i;
                        c = [];
                        for (var a = 0; a < e.length; a++) {
                            var g = e[a];
                            try {
                                var l = b.exec(g);
                                l && c.push([Number(l[1]), l[2]])
                            } catch (h) {
                                d.exception(h,
                                    "M270", g)
                            }
                        }
                        Array.prototype.sort.call(c, function(d, c) {
                            return d[0] - c[0]
                        });
                        l = [];
                        for (e = 0; e < c.length; e++) l.push(c[e][1]);
                        return l
                    }
                    var a = d.utils.hasOwnPropertyDefined,
                        b = null,
                        e = null;
                    g.sg = function() {
                        e || (e = g.bh(g.ne(g.cookieMetadataChunks), g.ne(d.footerMetadataChunks)));
                        return e
                    };
                    g.getPageGUID = function() {
                        var c = d.monitor.DOMEventsMonitor,
                            e = d.utils.isObject(c.currentBasePage) && d.utils.isFunction(c.currentBasePage.guid);
                        if (!b) {
                            var a = g.sg();
                            b = a && a.clientRequestGUID || (e ? c.currentBasePage.guid() : d.utils.generateGUID())
                        }
                        return b
                    };
                    g.Ol = function(c) {
                        c = l(c);
                        d.logInfo("M268", c);
                        return g.bh(g.ne(c))
                    };
                    g.bh = function(c, e) {
                        function b(c) {
                            for (var e = 0; e < c.length; e++) {
                                var f = c[e];
                                f != a && 0 > d.utils.jc(p, f) && p.push(f)
                            }
                        }
                        if (!c || 0 >= c.$a.length) return null;
                        e || (e = c);
                        var a;
                        if (0 < e.$a.length) {
                            if (a = e.$a[0], 0 > d.utils.jc(c.$a, a)) return null
                        } else return d.error("M269"), null;
                        var l = e.serverSnapshotType || c.serverSnapshotType,
                            h = e.hasEntryPointErrors || c.hasEntryPointErrors,
                            p = [];
                        b(c.$a);
                        b(e.$a);
                        var t = {
                            clientRequestGUID: a,
                            btGlobalAccountName: c.btGlobalAccountName
                        };
                        0 < p.length && (t.otherClientRequestGUIDs = p);
                        0 < g.ah(c.btTime, e.btTime).length && (t.btTime = g.ah(c.btTime, e.btTime));
                        null !== l && (t.serverSnapshotType = l);
                        null !== h && (t.hasEntryPointErrors = h);
                        return t
                    };
                    g.ah = function(d, e) {
                        for (var b = d.concat(e), g = {}, l = {}, h = 0; h < b.length; h++) {
                            var p = b[h];
                            p.id in g || (g[p.id] = -1);
                            g[p.id] = Math.max(g[p.id], p.duration);
                            p.id in l || (l[p.id] = -1);
                            l[p.id] = Math.max(l[p.id], p.ert)
                        }
                        var b = [],
                            t;
                        for (t in g) a(g, t) && b.push({
                            id: t,
                            duration: g[t],
                            ert: l[t]
                        });
                        return b
                    };
                    g.ne = function(c) {
                        if (!d.utils.isArray(c)) return null;
                        for (var e = [], b = null, a = [], g = null, l = null, h = 0; h < c.length; h++) {
                            var t = c[h];
                            if ("string" !== typeof t) return null;
                            t = t.replace(/^"|"$/g, "");
                            t = decodeURIComponent(t).split(",")[0].replace(/^\s+|\s+$/g, "").split(":");
                            if (2 === t.length) {
                                var x = t[1];
                                switch (t[0]) {
                                    case "clientRequestGUID":
                                    case "g":
                                        e.push(x);
                                        break;
                                    case "btId":
                                    case "i":
                                        a.push({
                                            id: x,
                                            duration: -1,
                                            ert: -1
                                        });
                                        break;
                                    case "btDuration":
                                    case "d":
                                        if (0 === a.length) return null;
                                        t = d.utils.$h(x);
                                        if (!d.utils.Hg(t) || -1 > t) return null;
                                        a[a.length - 1].duration = t;
                                        break;
                                    case "btERT":
                                    case "e":
                                        if (0 ===
                                            a.length) return null;
                                        t = d.utils.$h(x);
                                        if (!d.utils.Hg(t) || -1 > t) return null;
                                        a[a.length - 1].ert = t;
                                        break;
                                    case "serverSnapshotType":
                                    case "s":
                                        g = x;
                                        break;
                                    case "globalAccountName":
                                    case "n":
                                        b = x;
                                        break;
                                    case "hasEntryPointErrors":
                                    case "h":
                                        l = x
                                }
                            }
                        }
                        return 0 === e.length ? null : {
                            $a: e,
                            btGlobalAccountName: b,
                            btTime: a,
                            serverSnapshotType: g,
                            hasEntryPointErrors: l
                        }
                    };
                    g.pq = l
                })(d.correlation || (d.correlation = {}))
            })(h || (h = {}));
            (function(d) {
                var g = d.conf || (d.conf = {});
                g.rp = 3E3;
                g.useDebugBeaconParams = d.isDebug;
                g.Qj = 1E3;
                g.kj = 2;
                g.jj = 5;
                g.dj =
                    5;
                g.ej = 20;
                g.gf = 5E3;
                g.vb = 512;
                g.Ii = 10;
                g.Hi = 64;
                g.vj = 10;
                g.uj = 10;
                g.qj = 300;
                g.nj = 2048;
                g.wb = 2048;
                g.xb = 760;
                g.kf = 2E4;
                g.Tg = {
                    eumAppKey: "ky",
                    userPageName: "un",
                    clientRequestGUID: "cg",
                    otherClientRequestGUIDs: "og",
                    baseGUID: "bg",
                    parentGUID: "mg",
                    parentPageUrl: "mu",
                    parentPageType: "mt",
                    parentLifecyclePhase: "pp",
                    pageType: "pt",
                    pageUrl: "pu",
                    pageReferrer: "pr",
                    pageTitle: "pl",
                    pageName: "pn",
                    httpHeaders: "hh",
                    parameter: "pa",
                    navOrXhrMetrics: "mn",
                    cookieMetrics: "mc",
                    backTimeGap: "bd",
                    resourceTimingInfo: "rt",
                    userData: "ud",
                    userDataLong: "udl",
                    userDataDouble: "udd",
                    userDataBoolean: "udb",
                    userDataDate: "udt",
                    errors: "er",
                    ajaxError: "ae",
                    xhrStatus: "xs",
                    btTime: "bt",
                    btGlobalAccountName: "btgan",
                    serverSnapshotType: "ss",
                    hasEntryPointErrors: "se",
                    dataType: "dt",
                    geoCountry: "gc",
                    geoRegion: "gr",
                    geoCity: "gt",
                    localIP: "lp",
                    ip: "ip",
                    BEACONS: "B",
                    ver: "vr",
                    eom: "em",
                    agentId: "ai",
                    rootGUID: "rg",
                    events: "es",
                    guids: "gs",
                    urlParts: "up",
                    sequenceId: "si",
                    eventType: "et",
                    eventGUID: "eg",
                    parentType: "at",
                    serverMetadata: "sm",
                    eventUrl: "eu",
                    line: "ln",
                    message: "dm",
                    duration: "dn",
                    id: "id",
                    ert: "ert",
                    parentUrl: "au",
                    parentPageName: "an",
                    geo: "ge",
                    metrics: "mx",
                    timestamp: "ts",
                    country: "c",
                    region: "r",
                    city: "t",
                    method: "md",
                    clientId: "ci",
                    releaseKey: "rk",
                    webVitalName: "wvn",
                    webVitalValue: "wvv",
                    webVitalRating: "wvr",
                    coreWebVitalsMetrics: "cwvm"
                }
            })(h || (h = {}));
            (function(d) {
                d = d.beacons || (d.beacons = {});
                d.numBeaconsSent = 0;
                d.beaconsSent = []
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l = function() {
                        function a() {}
                        a.prototype.send = function(b, e, c) {
                            e = (e ? d.conf.beaconUrlHttps : d.conf.beaconUrlHttp) + d.conf.corsEndpointPath +
                                "/" + d.conf.appKey + "/adrum";
                            var a = d.utils.toJSONString(b);
                            navigator.sendBeacon && c && a ? (navigator.sendBeacon(e, a), d.isDebug && g.beaconsSent.push(b), g.numBeaconsSent += 1) : (d.utils.isFunction(d.xhrConstructor) && d.utils.isFunction(d.xhrOpen) ? (c = new d.xhrConstructor, d.xhrOpen.call(c, "POST", e)) : (c = new XMLHttpRequest, c.open("POST", e)), c.setRequestHeader("Content-type", "text/plain"), null != a && (d.utils.isFunction(d.xhrConstructor) && d.utils.isFunction(d.xhrSend) ? d.xhrSend.call(c, a) : c.send(a), d.logInfo("M271", e),
                                d.logInfo("\n"), d.logInfo("<hr/>"), d.isDebug && g.beaconsSent.push(b), g.numBeaconsSent += 1))
                        };
                        return a
                    }();
                    g.Ci = l
                })(d.beacons || (d.beacons = {}))
            })(h || (h = {}));
            h || (h = {});
            (function(d) {
                var g = function() {
                    function g(d, b, e) {
                        this.xc = d;
                        this.fm = b;
                        this.He = e
                    }
                    g.prototype.Od = function() {
                        try {
                            return g.mg(this.fm.ADRUM)
                        } catch (a) {
                            return d.error("M272"), g.mg(d)
                        }
                    };
                    g.mg = function(d) {
                        return d.correlation.getPageGUID()
                    };
                    return g
                }();
                d.yi = g
            })(h || (h = {}));
            (function(d) {
                d.beacons || (d.beacons = {})
            })(h || (h = {}));
            (function(d) {
                (function(d) {
                    var l =
                        function() {
                            function a() {
                                this.mc = [];
                                this.Fd = {}
                            }
                            a.prototype.Hb = function(b) {
                                if (!b) return "";
                                if (d.hasOwnPropertyDefined(this.Fd, b)) return this.Fd[b];
                                var e = this.mc.length;
                                this.Fd[b] = e;
                                this.mc[e] = b;
                                return e
                            };
                            return a
                        }();
                    d.ff = l
                })(d.utils || (d.utils = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l = d.utils.map,
                        a = function() {
                            function d() {}
                            d.qo = function(d) {
                                d = (d || "").match(/([^:\/?#]+:\/\/)?([^?#]+)?(\?[^#]*)?(#[\s\S]*)?/);
                                var c = {};
                                d[1] && (c.protocol = d[1].substring(0, d[1].length - 3));
                                d[2] && (c.path = d[2]);
                                d[3] && (c.In =
                                    d[3]);
                                d[4] && (c.anchor = d[4]);
                                return c
                            };
                            d.Wf = function(e, c) {
                                var a = d.qo(e),
                                    g = "";
                                a.protocol && (g += c.Hb(a.protocol), g += "://");
                                a.path && (g += l(a.path.split("/"), c.Hb, c).join("/"));
                                return g += l([a.In, a.anchor], function(d) {
                                    return d ? d[0] + c.Hb(d.slice(1)) : ""
                                }, c).join("")
                            };
                            d.Yk = function(d, c) {
                                return "" + c.Hb(d)
                            };
                            return d
                        }();
                    g.dd = a
                })(d.beacons || (d.beacons = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    (function(g) {
                        function a() {
                            var c = null,
                                b = null;
                            try {
                                c = localStorage[e]
                            } catch (a) {}
                            if (c) try {
                                c = b = JSON.parse(c), d.utils.isObject(c) &&
                                    d.utils.isNumber(c[n]) && -1 < c[n] ? m = b : d.error("M273")
                            } catch (g) {
                                d.logError(g, "M274", g);
                                try {
                                    delete localStorage[e]
                                } catch (f) {
                                    d.logError(f, "M275", f)
                                }
                            }
                        }

                        function b() {
                            try {
                                var b = d.channel,
                                    a = m[c] || m[f],
                                    g = b && b.fa && b.fa.ba && b.fa.ba.id || (d.utils.isString(a) ? a : d.utils.generateGUID());
                                m[c] = m[f] = g;
                                localStorage[e] = d.utils.toJSONString(m)
                            } catch (l) {}
                        }
                        var e = "ADRUM_CLIENTINFO",
                            c = "agentId",
                            f = "clientId",
                            n = "seqId",
                            m;
                        a();
                        m || (m = {
                            seqId: 0
                        });
                        b();
                        g.xl = function() {
                            a();
                            var d = m[n]++;
                            b();
                            return d
                        }
                    })(g.Jf || (g.Jf = {}))
                })(d.Mh || (d.Mh = {}))
            })(h ||
                (h = {}));
            (function(d) {
                (function(g) {
                    var l = function() {
                        function a() {
                            this.urlCapture = {
                                filterURLQuery: !1
                            };
                            this.vh = /;jsessionid=[^/?]+/;
                            g.mergeJSON(this.urlCapture, d.conf.userConf.urlCapture);
                            g.isBoolean(this.urlCapture.filterURLQuery) || g.isArray(this.urlCapture.filterURLQuery) || (d.logInfo("M276"), this.urlCapture.filterURLQuery = !1)
                        }
                        a.oo = function(d) {
                            for (var e = 0, c = 0; c < d.length; c++) e = (e << 5) - e + d.charCodeAt(c), e |= 0;
                            return e
                        };
                        a.prototype.Jl = function(d) {
                            var e = "",
                                c, a;
                            if (!g.isString(d)) return "";
                            c = d.indexOf("?") +
                                1;
                            0 < c && (a = d.indexOf("#"), 0 > a ? e = d.substring(c) : c <= a && (e = d.substring(c, a)));
                            return e
                        };
                        a.prototype.el = function(d) {
                            var e = "",
                                c = this.urlCapture.filterURLQuery,
                                a = {},
                                l = 0,
                                m, h, q;
                            if (!g.isString(d) || "" === d) return "";
                            if (!1 === c) return d;
                            m = this.Jl(d);
                            if ("" === m) return d;
                            if (g.isArray(c)) {
                                for (q = 0; q < c.length; q++) a[c[q]] = !0;
                                c = m + "&";
                                for (q = 0; q < c.length; q++) switch (c[q]) {
                                    case "=":
                                        h = c.substring(l, q);
                                        break;
                                    case "&":
                                    case ";":
                                        h = h || c.substring(l, q), q++, a[h] || (e += c.substring(l, q)), l = q, h = null
                                }
                                e = e.substring(0, e.length - 1)
                            }
                            "" == e &&
                                (m = "?" + m);
                            return d.replace(m, e)
                        };
                        a.prototype.Fa = function(d) {
                            if (null === d || void 0 === d) return null;
                            if ("" === d) return "";
                            var e = d.match(this.vh),
                                c = d;
                            if (null != e) {
                                var a = d.indexOf("?");
                                if (0 > a || a > e.index) c = d.replace(this.vh, "")
                            }
                            return c = this.el(c)
                        };
                        a.prototype.Zf = function(d) {
                            if (null === d || void 0 === d) return null;
                            var e = d.indexOf("?"),
                                c = d.indexOf("#");
                            0 > e && (e = Number.MAX_VALUE);
                            0 > c && (c = Number.MAX_VALUE);
                            return d.substring(0, Math.min(e, c))
                        };
                        a.prototype.nn = function(d) {
                            if (null === d || void 0 === d) return null;
                            var e = this.Zf(d);
                            d = a.oo(d.substring(e.length));
                            return e + (d ? "?hash=" + d : "")
                        };
                        return a
                    }();
                    g.wp = l;
                    g.ga = new l
                })(d.utils || (d.utils = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    (function(g) {
                        var a = function() {
                            function a(e, c, b) {
                                var g = this;
                                this.Mn = 0;
                                this.re = [];
                                this.vg = !1;
                                this.Wl = c;
                                this.Vl = b;
                                d.utils.addEventListener(window, "message", function(d) {
                                    g.sn(d)
                                });
                                this.Ul = d.utils.Lk(c + "#" + encodeURIComponent(document.location.href), e)
                            }
                            a.prototype.sn = function(e) {
                                var c;
                                try {
                                    if (c = JSON.parse(e.data), "ADRUM_XD" !== c.name) d.logInfo("M277");
                                    else if (!0 ===
                                        c.success)
                                        if (-1 === c.id && "iframe-ready" === c.data) this.vg = !0, this.Vl();
                                        else {
                                            if (this.re[c.id]) this.re[c.id](c.data)
                                        }
                                    else d.error("M278", e.data)
                                } catch (a) {
                                    d.logError("M279", a)
                                }
                            };
                            a.prototype.send = function(e, c, a, b) {
                                if (this.vg) {
                                    var g = this.Mn++;
                                    this.re[g] = b;
                                    this.Ul.contentWindow.postMessage(d.utils.toJSONString({
                                        id: g,
                                        action: e,
                                        key: c,
                                        value: a
                                    }), this.Wl)
                                }
                            };
                            a.prototype.generateGUID = function(d, c) {
                                this.send("generateGUID", d, null, c)
                            };
                            return a
                        }();
                        g.Ei = a
                    })(g.Zh || (g.Zh = {}))
                })(d.qi || (d.qi = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l =
                        function() {
                            function e() {
                                this.zf = new a(e.ui);
                                this.pi = new a(e.wi);
                                this.gp = new b(e.vi)
                            }
                            e.prototype.init = function(c) {
                                this.channel = c;
                                d.utils.wo() && d.utils.vo() ? d.utils.xo() && e.Rm() ? this.Ho() : this.ii() : e.dh = !0
                            };
                            e.prototype.ii = function() {
                                var c = this.zf.load();
                                e.Pm(c) || (c = {
                                    ver: d.conf.agentVer,
                                    id: d.utils.generateGUID()
                                }, this.zf.save(c));
                                e.ba = c
                            };
                            e.prototype.Ho = function() {
                                var c = this,
                                    a = this.pi.load();
                                e.Qm(a) ? e.ba = a : (d.logInfo("M280"), this.gp.load(function(a) {
                                    e.Mg(a) ? (a = {
                                        ver: d.conf.agentVer,
                                        id: a,
                                        ttl: (new Date).getTime() +
                                            e.Ji
                                    }, c.pi.save(a), e.ba = a, d.logInfo("M281")) : d.logInfo("M282")
                                }), d.utils.tryPeriodically(e.qd, function() {
                                    return c.isReady()
                                }, function() {
                                    return c.onReady()
                                }, function() {
                                    return c.je()
                                }))
                            };
                            e.Rm = function() {
                                return d.conf.userConf && d.conf.userConf.xd && d.conf.userConf.xd.enable
                            };
                            e.Pm = function(d) {
                                return d && d.id && 0 < d.id.length
                            };
                            e.Qm = function(d) {
                                return d && e.Mg(d.id) && d.ttl > (new Date).getTime()
                            };
                            e.Mg = function(c) {
                                return d.utils.isString(c) && 0 < c.length && 0 === c.indexOf("XD_")
                            };
                            e.prototype.isReady = function() {
                                return e.dh ||
                                    d.utils.isDefined(e.ba)
                            };
                            e.prototype.onReady = function() {
                                this.channel.onResolverReady()
                            };
                            e.prototype.je = function() {
                                d.logInfo("M283");
                                this.ii();
                                this.channel.onResolverReady()
                            };
                            e.qd = function(d) {
                                return 10 < d ? -1 : [1, 50, 100, 500][d - 1] || 1E3
                            };
                            return e
                        }();
                    l.ui = "ADRUM_AGENT_INFO";
                    l.wi = "ADRUM_XD_AGENT_INFO";
                    l.vi = "ADRUM_XD_AGENT_ID";
                    l.Ji = 6048E5;
                    l.dh = !1;
                    g.fa = l;
                    var a = function() {
                            function e(d) {
                                this.yf = d
                            }
                            e.prototype.load = function() {
                                var c = null;
                                try {
                                    var e = localStorage.getItem(this.yf);
                                    e && (c = JSON.parse(e))
                                } catch (a) {
                                    d.exception(a,
                                        "M284")
                                }
                                return c
                            };
                            e.prototype.save = function(c) {
                                try {
                                    var e = d.utils.toJSONString(c);
                                    e && localStorage.setItem(this.yf, e)
                                } catch (a) {
                                    d.exception(a, "M285")
                                }
                            };
                            return e
                        }(),
                        b = function() {
                            function e(d) {
                                this.gk = d
                            }
                            e.prototype.load = function(c) {
                                var e = this;
                                try {
                                    var a = new d.qi.Zh.Ei("adrum-xd-store-server-iframe", d.conf.adrumXdUrl, function() {
                                        a.generateGUID(e.gk, c)
                                    })
                                } catch (b) {
                                    d.exception(b, "M286")
                                }
                            };
                            return e
                        }()
                })(d.channel || (d.channel = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l = d.utils.isString,
                        a = d.utils.isNumber,
                        b = function() {
                            function e() {}
                            e.prototype.Fc = function(c, a, b) {
                                c = {
                                    ver: d.conf.agentVer,
                                    dataType: "R",
                                    rootGUID: b.Od(),
                                    releaseKey: d.conf.releaseId,
                                    events: c
                                };
                                d.channel.fa.ba && d.channel.fa.ba.id && (c.agentId = d.channel.fa.ba.id);
                                a && (c.geo = a);
                                return e.Bn(c)
                            };
                            e.Bn = function(c) {
                                d.isDebug || (c = e.Fk(c));
                                return c
                            };
                            e.Fk = function(c) {
                                var b = new d.utils.ff,
                                    n = new d.utils.ff;
                                c = d.utils.Rd(null, c, e.Pd, function(c, h) {
                                    if (!l(h)) return h;
                                    if (e.Om(c)) {
                                        var q = e.Em(c) && a(d.conf.userConf.maxUrlLength) ? d.conf.userConf.maxUrlLength : d.conf.vb;
                                        h = e.Yc(h, q);
                                        h = g.dd.Wf(h, b)
                                    } else if (e.Dm(c)) h = e.Yc(h, d.conf.xb);
                                    else if (e.Lm(c)) {
                                        var p = h,
                                            q = !1;
                                        p.length > d.conf.kf && (q = !0, p = e.Yc(p, d.conf.kf));
                                        var t = p.match(/([\w]+\:\/\/)([\w\-\.\:]+)(([\/\?\=\&\#.]?[\w-]+)*)((\:+[\d]+){0,2})/gm);
                                        d.utils.isDefined(t) && (q && 0 < t.length && t.pop(), t.forEach(function(d) {
                                            var c = "<<<" + g.dd.Wf(d, b) + ">>>";
                                            p = p.replace(d, c)
                                        }));
                                        q = p.match(/((<anonymous>)(\:+[\d]+){0,2})/gm);
                                        d.utils.isDefined(q) && q.forEach(function(d) {
                                            var c = "<<<" + b.Hb(d) + ">>>";
                                            p = p.replace(d, c)
                                        });
                                        h = p
                                    } else h = e.Yc(h, d.conf.nj);
                                    e.ym(c) && (h = g.dd.Yk(h, n));
                                    return h
                                }, e.bn);
                                c[e.Pd("guids")] = n.mc;
                                c[e.Pd("urlParts")] = b.mc;
                                return c
                            };
                            e.Om = function(d) {
                                return "eventUrl" == d || "parentUrl" == d || "pageReferrer" == d || "pageUrl" == d || "u" == d
                            };
                            e.ym = function(d) {
                                return "eventGUID" == d || "parentGUID" == d || "rootGUID" == d || "clientRequestGUID" == d
                            };
                            e.Dm = function(d) {
                                return "userPageName" == d
                            };
                            e.Yc = function(d, e) {
                                return d.length > e ? d.substr(0, e - 3) + "..." : d
                            };
                            e.Em = function(d) {
                                return "eventUrl" == d || "parentUrl" == d || "pageReferrer" == d
                            };
                            e.Lm = function(d) {
                                return "stack" == d
                            };
                            e.Pd = function(c) {
                                if (d.conf.useDebugBeaconParams) return c;
                                var e = d.conf.Tg[c];
                                return "undefined" === typeof e ? c : e
                            };
                            e.bn = function(d) {
                                d = "" + d;
                                return 0 === d.indexOf("userData") || "parameter" === d
                            };
                            return e
                        }();
                    g.Bi = b
                })(d.beacons || (d.beacons = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l = function() {
                        function a() {}
                        a.prototype.send = function(d, e) {
                            for (var c = 0; c < d.length; c++) this.Xn(d[c], e)
                        };
                        a.prototype.Xn = function(a, e) {
                            var c = (e ? d.conf.beaconUrlHttps : d.conf.beaconUrlHttp) + d.conf.imageEndpointPath,
                                l = document.createElement("img");
                            l.L = !0;
                            try {
                                l.src = c + a
                            } catch (n) {}
                            d.isDebug && g.beaconsSent.push(a);
                            g.numBeaconsSent += 1
                        };
                        return a
                    }();
                    g.$i = l
                })(d.beacons || (d.beacons = {}))
            })(h || (h = {}));
            (function(d) {
                (function(d) {
                    d.Ub = function(d, a) {
                        if (3 >= a) return "...";
                        d.length > a && (d = d.substring(0, a - 3) + "...");
                        return d
                    };
                    d.di = function(d, a) {
                        if (3 >= a) return "...";
                        d.length > a && (d = d.substring(0, (a - 3) / 2) + "..." + d.substring(d.length - (a - 3) / 2, d.length));
                        return d
                    };
                    d.Do = function(l, a) {
                        l.length <= a || (l = d.Ub(l, a - 1), l += ":");
                        return l
                    };
                    d.Bo = function(l, a, b, e, c, f) {
                        l = d.Do(l, e);
                        b =
                            d.Ub(b, c);
                        l.length + a.length + b.length > f - 3 && (a = d.Ub(a, f - 3 - l.length - b.length));
                        return 0 < b.length ? l + "//" + a + ":" + b : l + "//" + a
                    };
                    d.Co = function(l, a, b) {
                        l = d.map(l, function(c) {
                            return d.di(c, a)
                        });
                        if (l.length == b + 1 && "" == l[0]) return l;
                        if (l.length > b) {
                            var e = l[0];
                            l = l.slice(l.length - b);
                            l.unshift("...");
                            "" == e && l.unshift(e)
                        }
                        return l
                    };
                    d.Eo = function(l, a, b, e, c) {
                        e = d.Bo(l.protocol, l.hostname, l.port, e, c, a);
                        b--;
                        c = l.search;
                        0 < c.length && (c = d.Ub(c, a), b--);
                        var f = l.hash;
                        0 < f.length && (f = d.Ub(f, a), b--);
                        l = l.pathname.split("/");
                        var n = "",
                            h = !1;
                        0 < l.length && 0 == l[l.length - 1].length && (l.pop(), h = !0);
                        0 < l.length && (n = l.pop(), n = d.di(n, a), h && (n += "/"), b--);
                        l = d.Co(l, a, b);
                        return 0 == l.length ? e + n + c + f : e + l.join("/") + "/" + n + c + f
                    }
                })(d.utils || (d.utils = {}))
            })(h || (h = {}));
            (function(d) {
                (function(d) {
                    var l = function() {
                        function d() {}
                        d.Ud = function() {
                            for (var b = 0; b < d.Ye.length; b++) d.ya[d.Ye[b]] = d.$.Vi;
                            for (b = 0; b < d.We.length; b++) d.ya[d.We[b]] = d.$.Oi;
                            d.ya.js = d.$.Ij;
                            d.ya.css = d.$.CSS;
                            d.ya.svg = d.$.Kj;
                            d.ya.html = d.$.Xe;
                            d.ya.htm = d.$.Xe
                        };
                        d.Kd = function(d) {
                            return d.duration ?
                                d.duration : d.responseEnd && d.startTime ? d.responseEnd - d.startTime : -1
                        };
                        d.qg = function(b, e) {
                            function c(c) {
                                var e = Object.keys(d.$).map(function(c) {
                                    return d.$[c]
                                });
                                return c && -1 < e.indexOf(c)
                            }
                            var g, l = b.pathname;
                            return l && -1 != (g = l.lastIndexOf(".")) ? d.ya[l.substring(g + 1, l.length).toLowerCase()] || (c(e) ? e : d.$.OTHER) : c(e) ? e : d.$.OTHER
                        };
                        return d
                    }();
                    l.$ = {
                        Vi: "img",
                        Ij: "script",
                        CSS: "css",
                        Kj: "svg",
                        Xe: "html",
                        Oi: "font",
                        OTHER: "other"
                    };
                    l.Ye = "bmp gif jpeg jpg png webp".split(" ");
                    l.We = ["ttf", "woff", "otf", "eot"];
                    l.ya = {};
                    d.yb =
                        l;
                    l.Ud()
                })(d.events || (d.events = {}))
            })(h || (h = {}));
            (function(d) {
                (function(d) {
                    var l = function() {
                        function d(b) {
                            function e(d) {
                                c.marks.push(0 == b[d] ? -1 : Math.round(b[d] - c.gh))
                            }
                            this.marks = [];
                            var c = this;
                            this.gh = b.startTime;
                            this.sm(b) ? (this.cg = d.Ue, e("startTime"), e("fetchStart")) : (this.cg = d.pf, e("startTime"), e("redirectStart"), e("redirectEnd"), e("fetchStart"), e("domainLookupStart"), e("domainLookupEnd"), e("connectStart"), e("secureConnectionStart"), e("connectEnd"), e("requestStart"), e("responseStart"));
                            e("responseEnd")
                        }
                        d.zl = function() {
                            var b = {};
                            b[d.pf] = d.Hj;
                            b[d.Ue] = d.Di;
                            return b
                        };
                        d.prototype.sm = function(d) {
                            return this.Ua(d.redirectStart) && this.Ua(d.redirectEnd) && (this.Ua(d.domainLookupStart) || this.Ua(d.domainLookupEnd) || this.Ua(d.connectStart) || this.Ua(d.connectEnd)) && this.Ua(d.secureConnectionStart)
                        };
                        d.prototype.Ua = function(d) {
                            return !d || 0 === d
                        };
                        return d
                    }();
                    l.pf = 1;
                    l.Ue = 2;
                    l.Hj = "startTime redirectStart redirectEnd fetchStart dnsLookupStart dnsLookupEnd connectStart secureConnectionStart connectEnd requestStart responseStart responseEnd".split(" ");
                    l.Di = ["startTime", "fetchStart", "responseEnd"];
                    d.of = l
                })(d.events || (d.events = {}))
            })(h || (h = {}));
            (function(d) {
                (function(d) {
                    var l = function() {
                        function d() {}
                        d.prototype.Qc = function(d, e) {
                            if (d) return d.slice(0, e)
                        };
                        return d
                    }();
                    d.Qi = l
                })(d.events || (d.events = {}))
            })(h || (h = {}));
            (function(d) {
                (function(d) {
                    var l = function() {
                        function a() {}
                        a.prototype.Qc = function(a, e) {
                            if (a) {
                                if (a.length <= e) return a;
                                for (var c = [], l = 0; l < a.length; l++) c.push({
                                    se: a[l],
                                    index: l
                                });
                                c.sort(function(c, e) {
                                    return -(d.yb.Kd(c.se) - d.yb.Kd(e.se))
                                });
                                c = c.slice(0,
                                    e);
                                c.sort(function(d, c) {
                                    return d.index - c.index
                                });
                                for (var n = [], l = 0; l < c.length; l++) n.push(c[l].se);
                                return n
                            }
                        };
                        return a
                    }();
                    d.rf = l
                })(d.events || (d.events = {}))
            })(h || (h = {}));
            (function(d) {
                (function(d) {
                    var l = function() {
                        function a() {}
                        a.prototype.Qc = function(a, e) {
                            if (a) {
                                if (a.length <= e) return a;
                                for (var c = 1, l = Math.floor(Number.MAX_VALUE / 4), n = a.length; c < l;) {
                                    for (var h = a.length - 1; 0 <= h; h--)
                                        if (d.yb.Kd(a[h]) < c && (a.splice(h, 1), n--), n <= e) return a;
                                    c *= 4
                                }
                                return (new d.rf).Qc(a, e)
                            }
                        };
                        return a
                    }();
                    d.Gj = l
                })(d.events || (d.events = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l = d.utils.hasOwnPropertyDefined,
                        a = function() {
                            function e(c, a, l) {
                                this.version = 2;
                                this.resourceTimingInfo = {};
                                this.yg = {};
                                this.zg = {};
                                this.Bh = {};
                                this.Ch = {};
                                this.te = [];
                                this.Zj = function(c, e, a) {
                                    if (c && e && 0 < e.length) {
                                        this.zo = c;
                                        for (var l = new b, f = new b, n = 0; n < e.length; n++) {
                                            var h = e[n],
                                                m = d.utils.parseURI(d.utils.ga.Fa(h.name)),
                                                v = h.initiatorType,
                                                r = g.yb.qg(m, v),
                                                J = new g.of(h);
                                            this.te.push({
                                                u: this.Fo(m),
                                                i: l.kg(this.zg, v),
                                                r: f.kg(this.Ch, r),
                                                f: J.cg,
                                                o: this.pl(0 === n && h.isBase,
                                                    J.gh, c, a),
                                                m: J.marks,
                                                e: d.utils.isDefined(h.encodedBodySize) ? h.encodedBodySize : -1,
                                                d: d.utils.isDefined(h.decodedBodySize) ? h.decodedBodySize : -1,
                                                s: d.utils.isDefined(h.transferSize) ? h.transferSize : -1,
                                                p: d.utils.isDefined(h.nextHopProtocol) ? h.nextHopProtocol : ""
                                            })
                                        }
                                    }
                                };
                                var h = e.ql();
                                this.yk(h, c);
                                c = this.Tn(h, c);
                                this.Zj(a || d.monitor.navMonitor.navTiming && d.monitor.navMonitor.navTiming.navigationStart, c, l);
                                this.clearResourceTimings()
                            }
                            e.Ud = function() {
                                var c = d.conf.userConf && d.conf.userConf.resTiming && d.conf.userConf.resTiming.sampler;
                                e.Sn = c && "FirstN" == c ? new g.Qi : c && "TopN" == c ? new g.rf : new g.Gj
                            };
                            e.prototype.wg = function(d, e) {
                                d[e] = d[e] ? d[e] + 1 : 1
                            };
                            e.prototype.Fo = function(c) {
                                return d.utils.Eo(c, "number" === typeof d.conf.userConf.maxResUrlSegmentLength ? d.conf.userConf.maxResUrlSegmentLength : d.conf.Hi, "number" === typeof d.conf.userConf.maxResUrlSegmentNumber ? d.conf.userConf.maxResUrlSegmentNumber : d.conf.Ii, d.conf.vj, d.conf.uj)
                            };
                            e.prototype.yk = function(d, e) {
                                d && this.xg(d);
                                if (e && 0 < e.length)
                                    for (var a = 0; a < e.length; a++) this.xg(e[a])
                            };
                            e.prototype.xg =
                                function(c) {
                                    var e = d.utils.parseURI(d.utils.ga.Fa(c.name));
                                    c = c.initiatorType;
                                    e = g.yb.qg(e, c);
                                    this.wg(this.yg, c);
                                    this.wg(this.Bh, e)
                                };
                            e.prototype.Tn = function(c, a) {
                                if (a && 0 < a.length) {
                                    var b = d.conf.userConf && d.conf.userConf.resTiming && d.conf.userConf.resTiming.maxNum || d.conf.qj;
                                    c && b--;
                                    a = e.Sn.Qc(a, b);
                                    c && a.unshift(c)
                                }
                                return a
                            };
                            e.prototype.pl = function(c, e, a, b) {
                                return c ? 1 : d.utils.isDefined(b) ? Math.round(e + a - b) : Math.round(e)
                            };
                            e.prototype.build = function() {
                                return 0 == this.te.length ? null : {
                                    v: this.version,
                                    ic: this.yg,
                                    it: this.zg,
                                    rc: this.Bh,
                                    rt: this.Ch,
                                    f: g.of.zl(),
                                    t: this.zo,
                                    r: this.te
                                }
                            };
                            e.ql = function() {
                                var e = d.monitor.navMonitor.navTiming,
                                    a = null;
                                if (e) {
                                    var a = {},
                                        b;
                                    for (b in e) l(e, b) && (a[b] = e[b]);
                                    a.initiatorType = "other";
                                    a.name = document.URL;
                                    a.navigationStart && !a.startTime && (a.startTime = a.navigationStart);
                                    a.isBase = !0
                                }
                                return a
                            };
                            e.prototype.clearResourceTimings = function() {
                                d.conf.userConf && d.conf.userConf.resTiming && d.conf.userConf.resTiming.clearResTimingOnBeaconSend && d.monitor.resourceMonitor.clearResourceTimings()
                            };
                            return e
                        }();
                    g.ResourceTimingInfoBuilder = a;
                    var b = function() {
                        function d() {
                            this.fn = 1
                        }
                        d.prototype.kg = function(d, e) {
                            d[e] || (d[e] = this.fn++);
                            return d[e]
                        };
                        return d
                    }();
                    a.Ud()
                })(d.events || (d.events = {}))
            })(h || (h = {}));
            (function(d) {
                d.events || (d.events = {})
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l = function() {
                        function a() {}
                        a.prototype.D = function(a, e) {
                            void 0 === e && (e = {});
                            var c = a.url(),
                                c = 4 === a.type() ? document.URL || c : c || document.URL,
                                c = {
                                    eventGUID: a.guid(),
                                    eventType: a.type(),
                                    eventUrl: d.utils.ga.Fa(c),
                                    timestamp: d.utils.now()
                                };
                            a.type() !== d.EventType.PageView && d.utils.mergeJSON(c, {
                                parentGUID: a.parentGUID() || d.correlation.getPageGUID(),
                                parentUrl: d.utils.ga.Fa(a.parentUrl() || document.URL),
                                parentType: a.parentType() || (d.utils.compareWindows(top, window) ? d.EventType.PageView : d.EventType.IFRAME)
                            });
                            var l = d.EventType[a.type()],
                                l = g.pa.Rl(l, d.conf.userConf, e, d.conf.wb),
                                h;
                            for (h in l) c[h] = l[h];
                            return c
                        };
                        return a
                    }();
                    g.Za = l
                })(d.events || (d.events = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l = d.utils.isNumber,
                        a = d.utils.isString,
                        b = d.utils.isObject,
                        e = d.utils.Wd,
                        c = d.utils.isBoolean,
                        f = function() {
                            function e() {}
                            e.ge = function(e, c) {
                                var a = !1;
                                if (b(e)) {
                                    var g = d.utils.toJSONString(e);
                                    if (!g || g.length <= c) a = !0
                                }
                                return a
                            };
                            e.Be = function(d, c, b) {
                                if (a(c))
                                    if (c.length > b) e.kb(d, b, c.length);
                                    else return c;
                                else e.be(d, "string")
                            };
                            e.Ic = function(d, c) {
                                return function(a, g, l) {
                                    if (b(g)) {
                                        var f, h;
                                        for (h in g) d(g[h]) ? (f = f || {}, f[h] = g[h]) : e.be(a, c, h);
                                        if (f) {
                                            if (e.ge(f, l)) return f;
                                            e.kb(a, l)
                                        }
                                    } else e.be(a, "object")
                                }
                            };
                            e.be = function(e, c, a) {
                                d.logInfo("M288", e, c, a ? ", field name " + a : "")
                            };
                            e.kb =
                                function(e, c, a) {
                                    d.logInfo("M289", e, a ? " (" + a + " exceeds " + c + ")" : "")
                                };
                            return e
                        }();
                    f.Rl = function(e, c, a, g) {
                        if (c = c && c.userEventInfo && c.userEventInfo[e]) {
                            try {
                                var l = d.utils.isFunction(c) ? c.call(null, a) : c
                            } catch (h) {
                                d.exception(h, "M290", e, h), A.error("Error detected executing adrum userEventInfo, error message: [" + h + "]")
                            }
                            if (b(l)) return f.Xo(l, g)
                        }
                    };
                    f.Xo = function(d, e) {
                        var c = {},
                            a;
                        for (a in f.ag)
                            if (a in d) {
                                var b = f.ag[a](a, d[a], e);
                                b && (c[a] = b)
                            }
                        return c
                    };
                    f.qn = f.Ic(a, "string");
                    f.pn = f.Ic(e, "integer");
                    f.eh = f.Ic(l, "number");
                    f.on = f.Ic(c, "boolean");
                    f.ag = {
                        userPageName: f.Be,
                        userData: f.qn,
                        userDataLong: f.pn,
                        userDataDouble: f.eh,
                        userDataBoolean: f.on,
                        userDataDate: f.eh
                    };
                    g.pa = f
                })(d.events || (d.events = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l = d.utils.isDefined,
                        a = function(a) {
                            function e() {
                                return null !== a && a.apply(this, arguments) || this
                            }
                            u(e, a);
                            e.setPageName = function(d) {
                                e.Ia = d
                            };
                            e.addUserData = function(d, a) {
                                e.Vb = e.Vb || {};
                                e.Vb[d] = a
                            };
                            e.prototype.D = function(c) {
                                var f = a.prototype.D.call(this, c || new g.PageView),
                                    h = this.Cl(),
                                    m = this.sl();
                                d.conf.viz && (h && d.utils.Ed(document.getElementById(d.conf.viz), h, "navtime"), d.utils.Ed(document.getElementById(d.conf.viz), m, "cookie"));
                                m.PLC = 1;
                                h && (h.PLC = 1, h.VCT = d.utils.isDefined(c) ? e.fc(c.vct) : 0, d.conf.enableSpeedIndex && (h.SPI = d.utils.isDefined(c) ? e.fc(c.spi) : 0), d.conf.spa2 && (h.PCT = d.utils.isDefined(c) ? e.fc(c.pct) : 0));
                                h && h.DPT && 0 >= h.DPT && (h.DPT = 0, this.Io(h, m));
                                d.monitor.ErrorMonitor.hadErrors && (m.EPM = 1, h && (h.EPM = 1));
                                d.utils.mergeJSON(f, {
                                    eventGUID: d.correlation.getPageGUID(),
                                    eventType: d.utils.compareWindows(top,
                                        window) ? d.EventType.PageView : d.EventType.IFRAME,
                                    cookieMetrics: m
                                });
                                c = -1;
                                h && h.timestamp ? c = h.timestamp : m && m.timestamp && (c = m.timestamp);
                                0 < c && d.utils.mergeJSON(f, {
                                    timestamp: c
                                });
                                h && (f.metrics = h);
                                document.referrer && null !== document.referrer && 0 < document.referrer.length && (f.pageReferrer = d.utils.ga.Fa(document.referrer));
                                h = e.Gl();
                                0 < h.length && (f.pageTitle = h);
                                h = d.correlation.sg();
                                null !== h && (f.serverMetadata = h);
                                h = 0 < d.monitor.resourceMonitor.basePageResourceBuffer.length ? (new g.ResourceTimingInfoBuilder(d.monitor.resourceMonitor.basePageResourceBuffer)).build() :
                                    null;
                                null !== h && (f.resourceTimingInfo = h);
                                !l(f.userData) && l(e.Vb) && (g.pa.ge(e.Vb, d.conf.wb) ? f.userData = e.Vb : g.pa.kb("userData", d.conf.wb));
                                !l(f.userPageName) && l(e.Ia) && (g.pa.Be("userPageName", e.Ia, d.conf.xb) ? f.userPageName = e.Ia : g.pa.kb("userPageName", d.conf.xb));
                                f.backTimeGap = d.conf.backTimeGap;
                                e.userPageName = f.userPageName;
                                return f
                            };
                            e.prototype.Io = function(d, e) {
                                for (var a = "PLT FBT FET DRT PRT DOM".split(" "), b = 0; b < a.length; b++) {
                                    var g = a[b];
                                    !e[g] && d[g] && (e[g] = d[g])
                                }
                            };
                            e.prototype.Cl = function() {
                                if (!d.monitor.navMonitor.navTiming) return null;
                                var c = {},
                                    a = e.og(d.monitor.navMonitor.navTiming, c, "NT"),
                                    b = g.metricSpec[d.EventType.PageView],
                                    l;
                                for (l in b) {
                                    var h = b[l];
                                    a.add(h.name, h.start, h.end)
                                }
                                c.timestamp = d.monitor.navMonitor.navTiming.navigationStart - d.conf.backTimeGap;
                                return c
                            };
                            e.prototype.sl = function() {
                                var c = {};
                                d.commands.marks && (e.og(d.commands.marks, c, "CK").add("PLT", "starttime", "onload").add("FBT", "starttime", "firstbyte").add("FET", "firstbyte", "onload").add("DRT", "firstbyte", "onready").add("PRT", "onready", "onload").add("DOM", "starttime",
                                    "onready"), c.timestamp = d.commands.marks.starttime ? d.commands.marks.starttime : d.commands.marks.firstbyte, c.timestamp -= d.conf.backTimeGap);
                                return c
                            };
                            e.Gl = function() {
                                var e = d.conf.userConf,
                                    e = e && e.page,
                                    a;
                                a = e && "captureTitle" in e ? e.captureTitle : !0;
                                var b, g;
                                e && (b = "title" in e, g = e.title);
                                b = a ? b ? d.utils.isFunction(g) ? g() : g : document.title : "";
                                if (d.utils.isString(b)) return b;
                                d.logInfo("M291", typeof b);
                                return ""
                            };
                            e.Wj = function(e, a, b, g, l, h) {
                                a = g[a];
                                b = g[b];
                                a && b ? l[e] = b - a : d.logInfo("M292", h, e, a, b)
                            };
                            e.fc = function(e) {
                                return d.utils.isDefined(e) ?
                                    e + d.conf.backTimeGap : e
                            };
                            e.Jo = function(c, a) {
                                "PLT" != c && "FBT" != c && "SCT" != c && "DOM" != c || !d.utils.isNumber(a[c]) || (a[c] = e.fc(a[c]))
                            };
                            e.og = function(d, a, b) {
                                var g = {
                                    add: function(l, h, p) {
                                        e.Wj(l, h, p, d, a, b);
                                        e.Jo(l, a);
                                        return g
                                    }
                                };
                                return g
                            };
                            return e
                        }(g.Za);
                    g.za = a
                })(d.events || (d.events = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    (function(g) {
                        function a(c, g) {
                            var l, m = g[c],
                                q = typeof m;
                            x.push(c);
                            var J = t[x.join(".")];
                            if (d.utils.isFunction(J)) l = J(m);
                            else switch (q) {
                                case "string":
                                    l = "number" == typeof J ? k(m, e, J) : e(m);
                                    break;
                                case "number":
                                    l =
                                        n(m);
                                    break;
                                case "object":
                                    if (m)
                                        if (d.utils.isArray(m)) l = h(m, !1, !1);
                                        else {
                                            l = [];
                                            for (var B in m) p(m, B) && (q = a(B, m)) && (b(c) && "timestamp" == B || l.push({
                                                Bc: B,
                                                v: q
                                            }));
                                            if (b(c)) {
                                                for (m = 0; m < l.length; m++) l[m] = l[m].Bc + e(":") + l[m].v;
                                                l = e("{") + l.join(e(",")) + e("}")
                                            } else {
                                                for (m = 0; m < l.length; m++) B = l[m], q = B.Bc, d.conf.useDebugBeaconParams || ((J = d.conf.Tg[B.Bc]) ? q = J : d.error("M293", B.Bc)), l[m] = q + "=" + B.v;
                                                l = l.join("&")
                                            }
                                        }
                                    else l = null
                            }
                            x.pop();
                            return l
                        }

                        function b(d) {
                            return "navOrXhrMetrics" == d || "cookieMetrics" == d
                        }

                        function e(d) {
                            return "undefined" ===
                                typeof d || null === d || 0 === d.length ? null : encodeURIComponent(d)
                        }

                        function c(d) {
                            return encodeURIComponent(encodeURIComponent(d))
                        }

                        function h(d, c, g) {
                            void 0 === c && (c = !1);
                            void 0 === g && (g = !0);
                            if (0 === d.length) return null;
                            var b = [];
                            if (c) b = d;
                            else
                                for (c = 0; c < d.length; c++) b.push(a(c, d));
                            return e("[") + b.join(e(",")) + e(g ? ">" : "]")
                        }

                        function n(d) {
                            d = Math.round(d);
                            d < g.mf && (d = g.mf);
                            d > g.hf && (d = g.hf);
                            return e(d)
                        }

                        function m(d, c) {
                            if (d > c || 0 > d) d = g.Aj;
                            return e(d)
                        }

                        function k(e, c, a, g) {
                            void 0 === g && (g = !0);
                            if ("undefined" === typeof e || null ===
                                e || 0 === e.length) return null;
                            var b = 3 <= a ? "..." : "";
                            d.assert(a >= b.length);
                            for (var l = !1, h = null;;) {
                                try {
                                    h = c(e);
                                    if (null === h) return null;
                                    if (h.length <= a) break
                                } catch (f) {}
                                var m;
                                l ? m = e.length - 1 : (l = !0, m = a -= b.length);
                                var n = g ? 0 : Math.max(e.length - m, 0);
                                e = e.substr(n, m)
                            }
                            l && (h = g ? h + b : b + h);
                            return h
                        }

                        function q(e, c, a) {
                            if (0 == a) return g.gd;
                            if (c < e) return 0;
                            c = g.gd + (c - e) / a;
                            d.assert(c >= g.gd);
                            d.logInfo("M294", e, c);
                            return c
                        }
                        var p = d.utils.hasOwnPropertyDefined;
                        g.Aj = -1;
                        g.vb = 180;
                        g.sj = 50;
                        g.tj = 50;
                        g.mj = 40;
                        g.gd = 50;
                        g.aj = 50;
                        g.lf = 128;
                        g.hj =
                            30;
                        g.ij = 30;
                        g.gj = 30;
                        g.oj = 8;
                        g.mf = -99999;
                        g.hf = 999999;
                        g.bj = 2E3;
                        g.rj = 2;
                        g.cj = 99999999;
                        var t = {
                                ".pageUrl": g.vb,
                                ".parentPageUrl": g.vb,
                                ".pageReferrer": g.vb,
                                ".pageTitle": g.sj,
                                ".userPageName": g.tj,
                                ".geoCountry": g.hj,
                                ".geoRegion": g.ij,
                                ".geoCity": g.gj,
                                ".localIP": g.oj,
                                ".otherClientRequestGUIDs": function(d) {
                                    d = d || [];
                                    var e = d.slice(0, g.rj);
                                    return h(e, !1, e.length < d.length)
                                },
                                ".btTime": function(e) {
                                    e = e || [];
                                    for (var c = e.slice(0, d.conf.dj), a = [], b = 0; b < c.length; b++) {
                                        var q = c[b];
                                        a.push(h([m(Number(q[0]), g.cj), n(q[1]), n(q[2])], !0, !1))
                                    }
                                    return h(a, !0, c.length < e.length)
                                },
                                ".ajaxError": function(d) {
                                    return h([c(d[0]), k(d[1], c, g.aj)], !0, !1)
                                },
                                ".userData": function(d) {
                                    d = d || [];
                                    for (var e = !1, a = 0, b = [], m = 0; m < d.length; m++) {
                                        var n = d[m];
                                        b[m] = h([c(n[0]), c(n[1])], !0, !1);
                                        a += b[m].length;
                                        if (a > g.lf) {
                                            e = !0;
                                            break
                                        }
                                    }
                                    for (;;) {
                                        d = h(b, !0, e);
                                        if (null === d || d.length <= g.lf) return d;
                                        b.pop();
                                        e = !0
                                    }
                                }
                            },
                            x = [];
                        g.Xk = function(e, b) {
                            void 0 === b && (b = !0);
                            x = [];
                            var m = [];
                            e.errors && (m = e.errors, e.errors = null);
                            var p = a("", {
                                "": e
                            });
                            if (m && 0 < m.length) {
                                for (var t = q(b ? 870 : 354, g.bj - p.length,
                                        m.length), J = [], B = 0; B < m.length; B++) {
                                    var u = m[B],
                                        y = d.utils.ga.Zf(d.utils.ga.Fa(u[0]));
                                    J.push(h([k(y, c, g.mj, !1), d.utils.Wd(u[1]) ? n(u[1]) : -1, k(u[2], c, t)], !0, !1))
                                }
                                m = h(J, !0, !1);
                                p += "&errors=" + m
                            }
                            return p
                        };
                        g.Qp = a;
                        g.zq = e;
                        g.element = c;
                        g.Ip = h;
                        g.Kp = n;
                        g.oq = m;
                        g.truncate = k;
                        g.vq = q
                    })(g.ef || (g.ef = {}))
                })(d.beacons || (d.beacons = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l = d.utils.hasOwnPropertyDefined,
                        a = d.utils.jc,
                        b = function() {
                            function e() {}
                            e.prototype.Fc = function(c, a, b) {
                                for (var l = [], h = [], q = null, p = [], t = 0; t < c.length; t++) {
                                    var x =
                                        c[t];
                                    if (x.eventType === d.EventType.Error) {
                                        var u = x;
                                        h.push([x.eventUrl + "", d.utils.Wd(u.line) ? u.line : void 0, u.message + ""])
                                    } else {
                                        if (x.eventType === d.EventType.PageView || x.eventType === d.EventType.IFRAME) q = x;
                                        p.push(x)
                                    }
                                }
                                c = p;
                                if (0 < h.length)
                                    for (q && (q.errors = h.splice(0, d.conf.kj)); 0 < h.length;) x = h.splice(0, d.conf.jj), q = e.un.D(), q.errors = x, q.isErrorEvent = !0, q.cookieMetrics = null, q.metrics = null, q.resourceTimingInfo = null, c.push(q);
                                for (h = 0; h < c.length; h++) x = c[h], d.logInfo("M295"), x.resourceTimingInfo = null, e.jl(x, a, b),
                                    q = e.transform(x), l.push(g.ef.Xk(q, x.isErrorEvent));
                                return l
                            };
                            e.jl = function(e, a, g) {
                                e.ver = this.Wi;
                                e.rootGUID = g.Od();
                                e.geo = a;
                                e.dataType = "R";
                                e.eom = 1;
                                e.eumAppKey = d.conf.appKey;
                                e.PLC = 1
                            };
                            e.transform = function(d) {
                                var a = {};
                                e.li("", {
                                    "": d
                                }, a);
                                return a
                            };
                            e.li = function(c, g, b) {
                                g = g[c];
                                var h = e.Qg[c];
                                if ("metrics" === c || "cookieMetrics" === c) b[h] = g;
                                else if ("btTime" === c && d.utils.isArray(g) && 0 < g.length) {
                                    c = [];
                                    for (var k = 0; k < g.length; k++) c.push([g[k].id, g[k].duration, g[k].ert]);
                                    b[h] = c
                                } else if ("userData" === c && d.utils.isObject(g)) b[h] =
                                    d.utils.Zm(g);
                                else if (!(c && -1 < a(["userDataLong", "userDataDouble", "userDataBoolean", "userDataDate"], c)))
                                    if (d.utils.isObject(g))
                                        for (k in g) l(g, k) && e.li(k, g, b);
                                    else e.Qg[c] && ("eventType" === c && g > d.EventType.Ajax && (g = d.utils.compareWindows(top, window) ? d.EventType.PageView : d.EventType.IFRAME), b[h] = g)
                            };
                            return e
                        }();
                    b.un = new d.events.za;
                    b.Wi = 3;
                    b.Qg = {
                        eumAppKey: "eumAppKey",
                        userPageName: "userPageName",
                        rootGUID: "baseGUID",
                        parentGUID: "parentGUID",
                        parentUrl: "parentPageUrl",
                        parentType: "parentPageType",
                        parentLifecyclePhase: "parentLifecyclePhase",
                        eventType: "pageType",
                        eventUrl: "pageUrl",
                        pageReferrer: "pageReferrer",
                        pageTitle: "pageTitle",
                        metrics: "navOrXhrMetrics",
                        xhrMetrics: "navOrXhrMetrics",
                        resourceTimingInfo: "resourceTimingInfo",
                        cookieMetrics: "cookieMetrics",
                        userData: "userData",
                        errors: "errors",
                        ajaxError: "ajaxError",
                        dataType: "dataType",
                        country: "geoCountry",
                        region: "geoRegion",
                        city: "geoCity",
                        localIP: "localIP",
                        ver: "ver",
                        eom: "eom",
                        eventGUID: "clientRequestGUID",
                        otherClientRequestGUIDs: "otherClientRequestGUIDs",
                        btTime: "btTime",
                        serverSnapshotType: "serverSnapshotType",
                        hasEntryPointErrors: "hasEntryPointErrors"
                    };
                    g.Zi = b
                })(d.beacons || (d.beacons = {}))
            })(h || (h = {}));
            (function(d) {
                (function(d) {
                    var l = function() {
                        function d() {}
                        d.prototype.send = function() {};
                        return d
                    }();
                    d.Mi = l
                })(d.beacons || (d.beacons = {}))
            })(h || (h = {}));
            (function(d) {
                (function(d) {
                    var l = function() {
                        function d() {}
                        d.prototype.Fc = function() {
                            return null
                        };
                        return d
                    }();
                    d.Li = l
                })(d.beacons || (d.beacons = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l = function() {
                        function a(d) {
                            this.Tm = d
                        }
                        a.prototype.send = function(a) {
                            try {
                                this.Tm.postMessage(d.utils.toJSONString(a)),
                                    d.logInfo("M296"), g.numBeaconsSent += 1
                            } catch (e) {
                                d.logInfo("M297")
                            }
                        };
                        return a
                    }();
                    g.Ti = l
                })(d.beacons || (d.beacons = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l = function() {
                        function a() {}
                        a.prototype.Fc = function(a, e, c) {
                            a = {
                                ver: d.conf.agentVer,
                                dataType: "R",
                                rootGUID: c.Od(),
                                events: a,
                                releaseKey: d.conf.releaseId
                            };
                            d.channel.fa.ba && d.channel.fa.ba.id && (a.agentId = d.channel.fa.ba.id);
                            e && (a.geo = e);
                            return a
                        };
                        return a
                    }();
                    g.Si = l
                })(d.beacons || (d.beacons = {}))
            })(h || (h = {}));
            (function(d) {
                var g = function() {
                    function g() {}
                    g.Lf = function(a, g) {
                        if (!a) return null;
                        var e = a.ADRUM.lifecycle;
                        if (!e || !e.getPhaseCallbackTime) return null;
                        var c = g.getPhaseCallbackTime("AT_ONLOAD"),
                            e = e.getPhaseCallbackTime("AT_ONLOAD"),
                            l = null == e;
                        return null == c ? (d.error("M298"), null) : d.lifecycle.getPhaseID(l || c <= e ? "AFTER_FIRST_BYTE" : "AFTER_ONLOAD")
                    };
                    return g
                }();
                d.Dj = g;
                d.cPLPI = g.Lf
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l = function() {
                        function a(a) {
                            this.ready = !1;
                            this.geoResolverUrl = a;
                            d.utils.isString(a) && 0 < d.utils.trim(a).length && (this.geoResolverUrl =
                                a + "/resolve.js")
                        }
                        a.prototype.init = function(a) {
                            this.channel = a;
                            if (this.zd() && (d.geo = this.Ge(), this.hk() || this.Jc() && !this.eg())) {
                                this.channel.ve(d.geo.result);
                                return
                            }
                            this.eg() ? (this.Jc() && (this.geoResolverUrl += "?ip=" + encodeURIComponent(d.conf.userConf.geo.localIP)), this.Uo()) : (this.ready = !0, this.channel.onResolverReady())
                        };
                        a.prototype.zd = function() {
                            return d.utils.isDefined(d.conf.userConf) && d.utils.isDefined(d.conf.userConf.geo)
                        };
                        a.prototype.Jc = function() {
                            return this.zd() && d.utils.isDefined(d.conf.userConf.geo.localIP) &&
                                !d.utils.isDefined(d.conf.userConf.geo.city) && !d.utils.isDefined(d.conf.userConf.geo.region) && !d.utils.isDefined(d.conf.userConf.geo.country)
                        };
                        a.prototype.Ge = function() {
                            return {
                                failed: !1,
                                result: {
                                    country: d.conf.userConf.geo.country,
                                    region: d.conf.userConf.geo.region,
                                    city: d.conf.userConf.geo.city,
                                    localIP: this.Zk(d.conf.userConf.geo.localIP)
                                }
                            }
                        };
                        a.prototype.hk = function() {
                            return this.zd() && d.utils.isDefined(d.conf.userConf.geo.localIP) && d.utils.isDefined(d.conf.userConf.geo.city) && d.utils.isDefined(d.conf.userConf.geo.region) &&
                                d.utils.isDefined(d.conf.userConf.geo.country)
                        };
                        a.prototype.eg = function() {
                            return d.utils.isString(this.geoResolverUrl) && 0 < d.utils.trim(this.geoResolverUrl).length
                        };
                        a.prototype.Zk = function(d) {
                            if (null == d || 0 == d.length) return null;
                            d = d.split(".");
                            if (4 != d.length) return null;
                            for (var e = [], a = 0; a < d.length; a++) {
                                var g = parseInt(d[a]);
                                if (isNaN(g) || 0 > g || 255 < g) return null;
                                e.push(("0" + g.toString(16)).slice(-2))
                            }
                            return e.join("")
                        };
                        a.prototype.Uo = function() {
                            d.geo = {
                                failed: !1,
                                result: null
                            };
                            d.utils.loadScriptAsync(this.geoResolverUrl);
                            var g = this;
                            d.utils.tryPeriodically(a.qd, function() {
                                return g.isReady()
                            }, function() {
                                g.onReady()
                            }, function() {
                                g.je()
                            })
                        };
                        a.prototype.isReady = function() {
                            this.ready || (this.ready = d.geo && (d.geo.failed || null !== d.geo.result)) || d.logInfo("M299");
                            return this.ready
                        };
                        a.prototype.onReady = function() {
                            d.geo.failed ? (d.logInfo("M300"), this.Jc() && (d.geo = this.Ge())) : (d.assert("object" === typeof d.geo.result), d.logInfo("M301", d.geo.result));
                            d.geo && d.geo.result && this.channel.ve(d.geo.result);
                            this.channel.onResolverReady()
                        };
                        a.prototype.je = function() {
                            d.logInfo("M302");
                            this.Jc() && (d.geo = this.Ge());
                            d.geo && d.geo.result && this.channel.ve(d.geo.result);
                            this.ready = !0;
                            this.channel.onResolverReady()
                        };
                        a.qd = function(d) {
                            return 10 < d ? -1 : [1, 50, 100, 500][d - 1] || 1E3
                        };
                        return a
                    }();
                    g.Ri = l
                })(d.channel || (d.channel = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l = function() {
                        function a() {
                            this.ready = !1;
                            this.channel = null
                        }
                        a.prototype.init = function(g) {
                            this.channel = g;
                            a.ha = a.ha || a.ml();
                            this.ready = !a.ha.xc;
                            var e = this;
                            if (a.ha.xc) d.logInfo("M303"), a.ha.xc.ADRUM.command("listenForOkToSendChildFrameBeacons",
                                function() {
                                    d.logInfo("M304");
                                    e.ready = !0;
                                    e.onReady()
                                });
                            else e.onReady()
                        };
                        a.prototype.isReady = function() {
                            this.isReady || d.logInfo("M305");
                            return this.ready
                        };
                        a.prototype.onReady = function() {
                            this.channel.Zn(a.ha);
                            this.channel.onResolverReady()
                        };
                        a.ml = function() {
                            for (var g = window, e, c = a.Og(g), l = window; l.parent && !d.utils.compareWindows(l, l.parent);) {
                                l = l.parent;
                                c = c || a.Og(l);
                                try {
                                    l.ADRUM && (e = e || l, g = l)
                                } catch (h) {}
                            }
                            return new d.yi(e, g, c)
                        };
                        a.Og = function(d) {
                            try {
                                return 0 == d.document.URL.indexOf("https:")
                            } catch (e) {}
                        };
                        return a
                    }();
                    l.ha = null;
                    g.zi = l
                })(d.channel || (d.channel = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l = function() {
                        function a(e, c, b) {
                            this.events = [];
                            this.Ra = {};
                            this.oc = NaN;
                            this.Ea = [];
                            this.Jd = !1;
                            this.bufferMode = d.conf.userConf && d.conf.userConf.channel && "undefined" !== typeof d.conf.userConf.channel.bufferMode ? d.conf.userConf.channel.bufferMode : !0;
                            this.Rc = -1;
                            this.Ao = e;
                            this.qk = c;
                            this.Ea.push(new g.Ri(b));
                            this.Ea.push(new g.zi);
                            this.Ea.push(new g.fa)
                        }
                        a.create = function() {
                            var e, c;
                            e = a.zn();
                            d.utils.isDefined(e) ?
                                (e = new d.beacons.Ti(e), c = new d.beacons.Si) : d.utils.isCORSSupported() && !d.conf.sendImageBeacon ? (e = new d.beacons.Ci, c = new d.beacons.Bi) : d.conf.neverSendImageBeacon ? (d.logInfo("M306"), e = new d.beacons.Mi, c = new d.beacons.Li) : (e = new d.beacons.$i, c = new d.beacons.Zi);
                            e = new a(e, c, d.conf.geoResolverUrl);
                            e.init();
                            return e
                        };
                        a.prototype.init = function() {
                            for (var d = 0; d < this.Ea.length; d++) this.Ea[d].init(this)
                        };
                        a.prototype.$o = function(e) {
                            return (e.parentType === d.EventType.VPageView || e.parentType === d.EventType.NG_VIRTUAL_PAGE) &&
                                null !== this.Ra[e.parentGUID]
                        };
                        a.prototype.oe = function(e) {
                            var a = e.parentGUID;
                            if (!d.utils.isDefined(this.Ra[a])) {
                                this.Ra[a] = [];
                                var g = this,
                                    b = e.eventGUID;
                                d.utils.oSTO(function() {
                                    g.Dd(b)
                                }, 1E4)
                            }
                            this.Ra[a].push(e)
                        };
                        a.prototype.ud = function() {
                            for (var e = 0, a = this.events; e < a.length; e++)
                                if (a[e].eventType === d.EventType.PageView) return !0;
                            return !1
                        };
                        a.prototype.Mc = function(e) {
                            if (d.utils.isDefined(e)) {
                                e.sequenceId = d.Mh.Jf.xl();
                                e.timestamp = e.timestamp || d.utils.now();
                                this.$o(e) ? this.oe(e) : this.events.push(e);
                                1 == this.events.length &&
                                    (this.oc = d.utils.now());
                                var c = e.parentGUID;
                                c && c !== d.correlation.getPageGUID() || this.Dd(e.eventGUID);
                                a.Am(e) && (this.Jd = !0)
                            }
                        };
                        a.prototype.report = function(d, a) {
                            this.Mc(d);
                            this.Ee(a)
                        };
                        a.prototype.Dd = function(d) {
                            var a = this.Ra[d];
                            this.Ra[d] = null;
                            if (a && 0 != a.length)
                                for (this.events = this.events.concat(a), d = 0; d < a.length; d++) this.Dd(a[d].eventGUID)
                        };
                        a.prototype.Cm = function(e) {
                            return e.eventType === d.EventType.PageView || e.eventType === d.EventType.IFRAME
                        };
                        a.prototype.rk = function() {
                            for (var e = 0; e < this.events.length; e++) {
                                var a =
                                    this.events[e];
                                0 === a.eventType && d.monitor.DOMEventsMonitor.currentBasePage && (d.monitor.DOMEventsMonitor.currentBasePage.isBeaconSent = !0);
                                if (this.Cm(a)) {
                                    var g = this.ha.xc;
                                    g && (a.parentLifecyclePhase = d.Dj.Lf(g, d.lifecycle), a.parentGUID = g.ADRUM.correlation.getPageGUID(), a.parentUrl = d.utils.ga.Fa(g.document.URL), d.utils.isDefined(g.ADRUM.events.za.userPageName) && (a.parentPageName = g.ADRUM.events.za.userPageName), a.parentType = d.utils.compareWindows(top, g) ? d.EventType.PageView : d.EventType.IFRAME)
                                }
                            }
                        };
                        a.prototype.sendBeacon =
                            function(e) {
                                if (0 == this.events.length) d.logInfo("M307");
                                else {
                                    this.rk();
                                    var a = this.He(this.events, this.ha),
                                        g = this.qk.Fc(this.events, this.ll, this.ha);
                                    this.Ao.send(g, a, e);
                                    this.events = [];
                                    this.oc = Number.POSITIVE_INFINITY
                                }
                            };
                        a.prototype.onResolverReady = function(d) {
                            this.Ee(d)
                        };
                        a.prototype.ve = function(d) {
                            this.ll = d
                        };
                        a.prototype.Zn = function(d) {
                            this.ha = d
                        };
                        a.prototype.addResolver = function(d) {
                            d.init(this);
                            this.Ea.push(d)
                        };
                        a.prototype.Pn = function() {
                            for (var d = 0; d < this.Ea.length; d++)
                                if (!this.Ea[d].isReady()) return !1;
                            return !0
                        };
                        a.prototype.Pg = function() {
                            return this.oc + d.conf.gf > d.utils.now()
                        };
                        a.prototype.Jm = function() {
                            return this.events.length < d.conf.ej
                        };
                        a.prototype.He = function(a, c) {
                            if (c.He || d.conf.userConf.useHTTPSAlways) return !0;
                            for (var g = 0; g < a.length; g++) {
                                var b = a[g];
                                if (b.eventUrl && 0 == b.eventUrl.indexOf("https:")) return !0
                            }
                            return !1
                        };
                        a.prototype.getEventsWithParentGUID = function(d) {
                            return this.Ra[d] || []
                        };
                        a.prototype.Ee = function(a) {
                            if (this.Pn())
                                if (!a && this.Zo()) {
                                    if (this.Pg() && 0 < this.events.length && 0 > this.Rc) {
                                        var c =
                                            this;
                                        this.Rc = d.utils.oSTO(function() {
                                            c.Ee()
                                        }, d.conf.gf + this.oc - d.utils.now())
                                    }
                                } else clearTimeout(this.Rc), this.Rc = -1, this.Jd = !1, this.sendBeacon(a)
                        };
                        a.Am = function(a) {
                            return a.eventType === d.EventType.PageView || a.eventType === d.EventType.IFRAME || a.eventType === d.EventType.VPageView
                        };
                        a.prototype.Zo = function() {
                            return this.bufferMode && !this.Jd && this.Jm() && this.Pg()
                        };
                        a.An = function() {
                            if (d.utils.isDefined(window.webkit) && d.utils.isDefined(window.webkit.messageHandlers) && d.utils.isDefined(window.webkit.messageHandlers.ADEUM_js_handler) &&
                                d.utils.isFunction(window.webkit.messageHandlers.ADEUM_js_handler.postMessage)) return window.webkit.messageHandlers.ADEUM_js_handler
                        };
                        a.yn = function() {
                            if (d.utils.isDefined(window.ADEUM_js_handler) && d.utils.isFunction(window.ADEUM_js_handler.postMessage)) return window.ADEUM_js_handler
                        };
                        a.zn = function() {
                            return a.yn() || a.An()
                        };
                        return a
                    }();
                    g.Channel = l;
                    var a = l.create();
                    g.getChannel = function() {
                        return a
                    };
                    g.ud = function() {
                        return a.ud()
                    };
                    g.Mc = function(d) {
                        a.Mc(d)
                    };
                    g.report = function(d, e) {
                        a.report(d, e)
                    };
                    g.addResolver =
                        function(d) {
                            a.addResolver(d)
                        };
                    g.getEventsWithParentGUID = function(d) {
                        return a.getEventsWithParentGUID(d)
                    };
                    g.sendBeacon = function(d) {
                        return a.sendBeacon(d)
                    }
                })(d.channel || (d.channel = {}))
            })(h || (h = {}));
            (function(d) {
                var g = function() {
                    function g() {}
                    g.mh = function() {
                        return window.attachEvent ? d.utils.isFunction(window.addEventListener) ? this.Ie : this.ai : this.gi
                    };
                    g.lh = function(a) {
                        var b = null;
                        switch (g.mh()) {
                            case g.gi:
                                b = a.parentPhase();
                                break;
                            case g.Ie:
                                b = d.lifecycle.findPhaseAtNominalTime(a.getSendTime());
                                break;
                            case g.ai:
                                b =
                                    null
                        }
                        return d.lifecycle.getPhaseID(b)
                    };
                    return g
                }();
                g.gi = "uCT";
                g.Ie = "uNET";
                g.ai = "tIA";
                d.dc = g
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l = d.utils.hasOwnPropertyDefined,
                        a = function(a) {
                            function e() {
                                return null !== a && a.apply(this, arguments) || this
                            }
                            u(e, a);
                            e.prototype.D = function(c) {
                                var l = a.prototype.D.call(this, c, e.getContext(c)),
                                    h = c.url(),
                                    m = c.getSendTime(),
                                    k = c.getFirstByteTime(),
                                    q = c.getRespAvailTime(),
                                    p = c.getRespProcTime(),
                                    t = c.parentPhase();
                                d.assert(null !== h && null !== m && null !== k && null !== q && null !== p, "M308",
                                    h, m, k, q, p, t);
                                if (null === h || null === m || null === k || null === q || null === p) return null;
                                h = c.error();
                                m = {
                                    PLC: 1,
                                    FBT: k - m,
                                    DDT: q - k,
                                    DPT: p - q,
                                    PLT: p - m,
                                    ARE: h ? 1 : 0
                                };
                                k = c.url();
                                if (!e.Sm(m, k)) return null;
                                d.conf.viz && d.utils.Ed(document.getElementById(d.conf.viz), m, "xhr");
                                d.utils.mergeJSON(l, {
                                    eventUrl: d.utils.ga.Fa(k),
                                    parentLifecyclePhase: c.parentPhaseId(),
                                    metrics: m,
                                    method: c.method(),
                                    timestamp: c.timestamp(),
                                    ajaxError: h && [h.status, h.msg || ""],
                                    xhrStatus: c.xhrStatus()
                                });
                                (m = c.parameter()) && g.pa.ge(m, d.conf.wb) ? l.parameter = m : m && g.pa.kb("parameter",
                                    d.conf.wb);
                                l.parentType == d.EventType.VPageView && d.conf.spa2 ? d.utils.Oh(l, c.parentPageName()) : d.utils.Oh(l, g.za.userPageName);
                                return l
                            };
                            e.getData = function(a) {
                                if (d.utils.isDefined(a) && d.utils.isDefined(a.data)) return a.data
                            };
                            e.getContext = function(d) {
                                var a = this.wn(d);
                                return {
                                    url: d.url() || "",
                                    method: d.method() || "",
                                    data: e.getData(d.dataObject()) || "",
                                    responseHeaders: a || ""
                                }
                            };
                            e.wn = function(a) {
                                var e;
                                if (d.conf.userConf && d.conf.userConf.getAjaxResponseHeaders) e = d.conf.userConf.getAjaxResponseHeaders;
                                else return "";
                                d.utils.isArray(e) && (e = e.join("|"));
                                a = a.allResponseHeaders();
                                a = d.utils.isDefined(a) ? a.split("\r\n") : [];
                                var g = new RegExp("^\\s*(" + e + "): (.+)\\s*$", "i"),
                                    b = "";
                                a.forEach(function(d) {
                                    g.exec(d) && (b += d + " | ")
                                });
                                return b = b.slice(0, -3)
                            };
                            e.Sm = function(a, e) {
                                for (var g in a)
                                    if (l(a, g)) {
                                        var b = a[g];
                                        if (0 > b) return d.error("M309", g, b, e), !1
                                    }
                                return !0
                            };
                            return e
                        }(g.Za);
                    g.tf = a
                })(d.events || (d.events = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l = function(a) {
                        function g() {
                            return null !== a && a.apply(this, arguments) || this
                        }
                        u(g,
                            a);
                        g.prototype.D = function(e) {
                            var c = a.prototype.D.call(this, e);
                            c && (e = e.allResponseHeaders() || "", (e = d.correlation.Ol(e)) && null !== e && null !== e.clientRequestGUID && (c.eventGUID = e.clientRequestGUID), null !== e && (c.serverMetadata = e));
                            return c
                        };
                        return g
                    }(g.tf);
                    g.ti = l
                })(d.events || (d.events = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l = function(a) {
                        function b() {
                            return null !== a && a.apply(this, arguments) || this
                        }
                        u(b, a);
                        b.prototype.D = function(e) {
                            var c = a.prototype.D.call(this, e);
                            d.utils.mergeJSON(c, {
                                message: e.msg() ||
                                    "",
                                timestamp: e.timestamp(),
                                line: e.line(),
                                stack: e.stack(),
                                parentPageName: c.parentType == d.EventType.VPageView && d.conf.spa2 ? e.parentPageName() : g.za.userPageName
                            });
                            d.utils.isString(c.userPageName) || (c.userPageName = c.parentPageName);
                            return c
                        };
                        return b
                    }(g.Za);
                    g.Cj = l
                })(d.events || (d.events = {}))
            })(h || (h = {}));
            (function(d) {
                (function(d) {
                    (function(l) {
                        l.build = function(a) {
                            var b = {},
                                e = d.metricSpec[a.type()],
                                c;
                            for (c in e) {
                                var l = e[c];
                                if (null !== l.name && a.perf.getEntryByName(l.start) && a.perf.getEntryByName(l.end)) {
                                    a.perf.measure(l.name,
                                        l.start, l.end);
                                    var h = a.perf.getEntryByName(l.name);
                                    b[l.name] = h && 0 <= h.duration && h.duration || null
                                }
                            }
                            for (c in b) b[c] = Math.round(b[c]);
                            return b
                        }
                    })(d.hd || (d.hd = {}))
                })(d.events || (d.events = {}))
            })(h || (h = {}));
            (function(d) {
                (function(d) {
                    var l = function(a) {
                        function b() {
                            return null !== a && a.apply(this, arguments) || this
                        }
                        u(b, a);
                        b.prototype.D = function(e) {
                            var c = a.prototype.D.call(this, e),
                                b = d.hd.build(e);
                            b.PLC = 1;
                            c.metrics = b;
                            c.timestamp = e.timestamp();
                            e = (new d.ResourceTimingInfoBuilder(e.resTiming())).build();
                            null !== e && (c.resourceTimingInfo =
                                e);
                            return c
                        };
                        return b
                    }(d.Za);
                    d.sf = l
                })(d.events || (d.events = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l = function(a) {
                        function b() {
                            return null !== a && a.apply(this, arguments) || this
                        }
                        u(b, a);
                        b.setPageName = function(d) {
                            b.Ia = d
                        };
                        b.prototype.D = function(e) {
                            var c = a.prototype.D.call(this, e),
                                l = g.hd.build(e);
                            l.PLT = e.endTime - e.startTime;
                            l.VCT = e.vct;
                            l.PLC = 1;
                            d.conf.enableSpeedIndex && (l.SPI = e.spi);
                            c.metrics = l;
                            c.timestamp = e.timestamp();
                            l = (new g.ResourceTimingInfoBuilder(e.resTiming(), null, e.startTime)).build();
                            null !==
                                l && (c.resourceTimingInfo = l);
                            d.utils.isDefined(e.userPageName) && (c.userPageName = e.userPageName);
                            !d.utils.isDefined(c.userPageName) && d.utils.isDefined(b.Ia) && (g.pa.Be("userPageName", b.Ia, d.conf.xb) ? c.userPageName = b.Ia : g.pa.kb("userPageName", d.conf.xb), b.Ia = void 0);
                            return c
                        };
                        return b
                    }(g.Za);
                    g.Qe = l
                })(d.events || (d.events = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l = function(a) {
                        function g() {
                            return null !== a && a.apply(this, arguments) || this
                        }
                        u(g, a);
                        g.prototype.D = function(e) {
                            var c = a.prototype.D.call(this,
                                e);
                            d.utils.mergeJSON(c, {
                                coreWebVitalsMetrics: e.coreWebVitalsMetrics()
                            });
                            return c
                        };
                        return g
                    }(g.Za);
                    g.Tj = l
                })(d.events || (d.events = {}))
            })(h || (h = {}));
            (function(d) {
                (function(d) {
                    var l = function(d) {
                        function g() {
                            return null !== d && d.apply(this, arguments) || this
                        }
                        u(g, d);
                        g.prototype.D = function(e) {
                            var c = d.prototype.D.call(this, e);
                            c && (c.metrics.VDC = e.digestCount() || 0);
                            return c
                        };
                        return g
                    }(d.sf);
                    d.zj = l
                })(d.events || (d.events = {}))
            })(h || (h = {}));
            (function(d) {
                var g = d.events || (d.events = {});
                g.wh = {};
                d = [{
                        Ga: g.PageView,
                        Da: new g.za
                    },
                    {
                        Ga: g.Ajax,
                        Da: new g.tf
                    }, {
                        Ga: g.AdrumAjax,
                        Da: new g.ti
                    }, {
                        Ga: g.Error,
                        Da: new g.Cj
                    }, {
                        Ga: g.VPageView,
                        Da: new g.sf
                    }, {
                        Ga: g.AnySpaVPageView,
                        Da: new g.Qe
                    }, {
                        Ga: d.ng.NgVPageView,
                        Da: new g.zj
                    }, {
                        Ga: g.WebVitalView,
                        Da: new g.Tj
                    }
                ];
                for (var l = 0; l < d.length; l++) {
                    var a = d[l];
                    a.Ga.prototype._regId = l;
                    g.wh[l] = a.Da
                }
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    function l(a) {
                        if (d.utils.isDefined(d.conf.isReportingPaused) && d.conf.isReportingPaused) return d.logInfo("M310"), null;
                        d.logInfo("M311", d.EventType[a.type()]);
                        var g = d.events.wh[a._regId];
                        return g ? g.D(a) : (d.logInfo("M312", d.EventType[a.type()]), null)
                    }
                    g.Jk = function(a) {
                        d.channel.Mc(l(a))
                    };
                    g.createEvent = l;
                    g.reportEvent = function(a, g) {
                        var e = l(a);
                        d.utils.isDefined(e) && (d.logInfo("M313", d.EventType[a.type()]), d.channel.report(e, g))
                    }
                })(d.reporter || (d.reporter = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l = function() {
                        function a() {
                            this.ready = !1
                        }
                        a.prototype.onReady = function(d) {
                            this.ready = !0;
                            this.channel.onResolverReady(d)
                        };
                        a.prototype.isReady = function() {
                            this.ready || d.logInfo("M314");
                            return this.ready
                        };
                        a.prototype.init = function(d) {
                            this.channel = d
                        };
                        return a
                    }();
                    g.Sj = l
                })(d.commands || (d.commands = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l = new g.Sj;
                    d.channel.addResolver(l);
                    g.marks = {};
                    g.mark = function(a, l) {
                        d.logInfo("M315", a, l);
                        g.marks[a] = l
                    };
                    g.quickReportOnLoad = function(a) {
                        if (a.isBeaconSent || d.channel.ud()) l.onReady(!0);
                        else l.onReady(), d.reporter.reportEvent(a, !0)
                    };
                    g.reportOnload = function(a) {
                        d.logInfo("M316");
                        d.reporter.Jk(a);
                        d.utils.oSTO(function() {
                            d.logInfo("M317");
                            l.onReady()
                        }, d.conf.Qj)
                    };
                    g.reportWebVital =
                        function(a) {
                            d.reporter.reportEvent(a, !0)
                        };
                    g.reportEvent = function() {
                        d.reporter.reportEvent.apply(d.reporter, arguments)
                    };
                    g.addResolver = function(a) {
                        d.channel.addResolver(a)
                    };
                    g.reportXhr = function(a, g) {
                        d.logInfo("M318");
                        d.dc.mh() == d.dc.Ie ? (d.logInfo("M319"), d.utils.oSTO(function() {
                            a.parentPhaseId(d.dc.lh(a));
                            d.reporter.reportEvent(a)
                        }, 0)) : (a.parentPhaseId(d.dc.lh(a)), d.reporter.reportEvent(a, g))
                    };
                    g.listenForOkToSendChildFrameBeacons = function(a) {
                        d.logInfo("M320");
                        try {
                            a()
                        } catch (g) {
                            d.exception(g, "M321")
                        }
                    };
                    g.reportPageError = function(a) {
                        var g = a.url();
                        d.logInfo("M322", a.msg(), g, a.line(), a.stack());
                        g && 0 !== g.length || a.url("CROSSORIGIN");
                        d.reporter.reportEvent(a)
                    };
                    g.setPageName = function(a) {
                        d.utils.isString(a) && 0 < d.utils.trim(a).length && d.events.za.setPageName(a)
                    };
                    g.setVirtualPageName = function(a) {
                        d.utils.isString(a) && 0 < d.utils.trim(a).length && d.conf.spa2 && d.events.Qe.setPageName(a)
                    };
                    g.addUserData = function(a, g) {
                        d.utils.isDefined(a) && d.utils.isDefined(g) && d.events.za.addUserData(a, g)
                    };
                    g.call = function(d) {
                        d()
                    }
                })(d.commands ||
                    (d.commands = {}))
            })(h || (h = {}));
            (function(d) {
                (function(d) {
                    d.Vf = function(l) {
                        return encodeURIComponent(d.ga.nn(l))
                    }
                })(d.utils || (d.utils = {}))
            })(h || (h = {}));
            (function(d) {
                (function(g) {
                    var l = function() {
                        function a() {}
                        a.prototype.setUp = function() {
                            this.an();
                            d.utils.addEventListener(window, "pagehide", a.Oe);
                            d.utils.addEventListener(window, "beforeunload", a.Oe);
                            d.utils.addEventListener(window, "unload", a.Oe)
                        };
                        a.prototype.an = function() {
                            (this.startTime = a.hl() || a.gl()) && d.commands.mark("starttime", this.startTime)
                        };
                        a.hl =
                            function() {
                                var a;
                                try {
                                    if (d.utils.isDefined(window.external) && d.utils.isNumber(window.external.pageT)) a = (new Date).getTime() - window.external.pageT;
                                    else if (d.utils.isDefined(window.gtbExternal) && d.utils.isFunction(window.gtbExternal.pageT)) {
                                        var e = window.gtbExternal.pageT();
                                        d.utils.isNumber(e) && (a = (new Date).getTime() - e)
                                    } else d.utils.isDefined(window.chrome) && d.utils.isFunction(window.chrome.csi) && (e = window.chrome.csi(), d.utils.isDefined(e) && d.utils.isNumber(e.pageT) && (a = (new Date).getTime() - e.pageT));
                                    a && (a = Math.round(a), d.logInfo("M323", a))
                                } catch (g) {
                                    d.exception(g, "M324")
                                }
                                return a
                            };
                        a.gl = function() {
                            var a = d.correlation.startTimeCookie;
                            if (a) {
                                d.logInfo("M325", a.startTime, a.startPage);
                                var e = d.utils.Vf(document.referrer);
                                if (e === a.startPage)
                                    if (isNaN(a.startTime)) d.logInfo("M326", a.startTime);
                                    else return a.startTime;
                                else d.logInfo("M327", e, a.startPage)
                            } else d.logInfo("M328")
                        };
                        a.Vk = function(a, e) {
                            var g = document.domain,
                                l = "https:" === document.location.protocol,
                                h = "ADRUM=s=" + Number(new Date) + "&r=" + d.utils.Vf(document.location.href),
                                m = h + ";path=/;samesite=lax";
                            l && (m += ";secure");
                            d.logInfo("M329", h);
                            if (!d.conf.useStrictDomainCookies) {
                                for (var l = a(), g = g.split("."), k = "", q = g.length - 1; 0 <= q; q--) {
                                    k = "." + g[q] + k;
                                    d.logInfo("M330", k);
                                    e(m + ";domain=" + k);
                                    var p = a();
                                    if (p != l && 0 <= p.indexOf(h)) {
                                        d.logInfo("M331");
                                        d.logInfo("M332");
                                        return
                                    }
                                }
                                d.logInfo("M333")
                            }
                            d.logInfo("M334");
                            e(m);
                            d.logInfo("M335")
                        };
                        return a
                    }();
                    l.Oe = function() {
                        var d = !1;
                        return function() {
                            d || (d = !0, l.Vk(function() {
                                return document.cookie
                            }, function(d) {
                                document.cookie = d
                            }))
                        }
                    }();
                    g.up = l;
                    g.so =
                        new l
                })(d.monitor || (d.monitor = {}))
            })(h || (h = {}));
            (function(d) {
                d.logInfo("M336");
                d.monitor.so.setUp();
                d.monitor.domEventsMonitor.setUpOnBeforeUnload();
                d.q.processQ();
                d.initEXTDone = !0;
                d.logInfo("M337")
            })(h || (h = {}))
        }
    };
})();