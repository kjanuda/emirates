! function(e) {
    var t = {};

    function s(n) {
        if (t[n]) return t[n].exports;
        var a = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, s), a.l = !0, a.exports
    }
    s.m = e, s.c = t, s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) s.d(n, a, function(t) {
                return e[t]
            }.bind(null, a));
        return n
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "", s(s.s = 22)
}([function(e, t, s) {
    "use strict";
    s.d(t, "a", function() {
        return a
    });
    s(3);
    const n = (e, ...t) => {
        let s = e;
        return t.length > 0 && (s += ` :: ${JSON.stringify(t)}`), s
    };
    class a extends Error {
        constructor(e, t) {
            super(n(e, t)), this.name = e, this.details = t
        }
    }
}, function(e, t, s) {
    "use strict";
    s.d(t, "a", function() {
        return n
    });
    s(3);
    const n = null
}, function(e, t, s) {
    "use strict";
    try {
        self["workbox:precaching:6.1.5"] && _()
    } catch (e) {}
}, function(e, t, s) {
    "use strict";
    try {
        self["workbox:core:6.1.5"] && _()
    } catch (e) {}
}, function(e, t, s) {
    "use strict";
    s(0), s(3)
}, function(e, t, s) {
    "use strict";
    s.d(t, "a", function() {
        return i
    });
    var n = s(10),
        a = s(0),
        r = (s(1), s(9), s(17));
    s(8);
    class i {
        constructor(e = {}) {
            this.cacheName = n.a.getRuntimeName(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions
        }
        handle(e) {
            const [t] = this.handleAll(e);
            return t
        }
        handleAll(e) {
            e instanceof FetchEvent && (e = {
                event: e,
                request: e.request
            });
            const t = e.event,
                s = "string" == typeof e.request ? new Request(e.request) : e.request,
                n = "params" in e ? e.params : void 0,
                a = new r.a(this, {
                    event: t,
                    request: s,
                    params: n
                }),
                i = this._getResponse(a, s, t);
            return [i, this._awaitComplete(i, a, s, t)]
        }
        async _getResponse(e, t, s) {
            await e.runCallbacks("handlerWillStart", {
                event: s,
                request: t
            });
            let n = void 0;
            try {
                if (!(n = await this._handle(t, e)) || "error" === n.type) throw new a.a("no-response", {
                    url: t.url
                })
            } catch (a) {
                for (const r of e.iterateCallbacks("handlerDidError"))
                    if (n = await r({
                            error: a,
                            event: s,
                            request: t
                        })) break;
                if (!n) throw a
            }
            for (const a of e.iterateCallbacks("handlerWillRespond")) n = await a({
                event: s,
                request: t,
                response: n
            });
            return n
        }
        async _awaitComplete(e, t, s, n) {
            let a, r;
            try {
                a = await e
            } catch (r) {}
            try {
                await t.runCallbacks("handlerDidRespond", {
                    event: n,
                    request: s,
                    response: a
                }), await t.doneWaiting()
            } catch (e) {
                r = e
            }
            if (await t.runCallbacks("handlerDidComplete", {
                    event: n,
                    request: s,
                    response: a,
                    error: r
                }), t.destroy(), r) throw r
        }
    }
}, function(e, t, s) {
    "use strict";
    s.d(t, "a", function() {
        return r
    });
    s(4);
    var n = s(20),
        a = s(12);
    s(7);
    class r {
        constructor(e, t, s = n.a) {
            this.handler = Object(a.a)(t), this.match = e, this.method = s
        }
        setCatchHandler(e) {
            this.catchHandler = Object(a.a)(e)
        }
    }
}, function(e, t, s) {
    "use strict";
    try {
        self["workbox:routing:6.1.5"] && _()
    } catch (e) {}
}, function(e, t, s) {
    "use strict";
    try {
        self["workbox:strategies:6.1.5"] && _()
    } catch (e) {}
}, function(e, t, s) {
    "use strict";
    s.d(t, "a", function() {
        return n
    });
    s(3);
    const n = e => {
        return new URL(String(e), location.href).href.replace(new RegExp(`^${location.origin}`), "")
    }
}, function(e, t, s) {
    "use strict";
    s.d(t, "a", function() {
        return r
    });
    s(3);
    const n = {
            googleAnalytics: "googleAnalytics",
            precache: "precache-v2",
            prefix: "workbox",
            runtime: "runtime",
            suffix: "undefined" != typeof registration ? registration.scope : ""
        },
        a = e => [n.prefix, e, n.suffix].filter(e => e && e.length > 0).join("-"),
        r = {
            updateDetails: e => {
                (e => {
                    for (const t of Object.keys(n)) e(t)
                })(t => {
                    "string" == typeof e[t] && (n[t] = e[t])
                })
            },
            getGoogleAnalyticsName: e => e || a(n.googleAnalytics),
            getPrecacheName: e => e || a(n.precache),
            getPrefix: () => n.prefix,
            getRuntimeName: e => e || a(n.runtime),
            getSuffix: () => n.suffix
        }
}, function(e, t, s) {
    "use strict";
    s.d(t, "a", function() {
        return r
    });
    var n = s(16);
    s(7);
    let a;
    const r = () => (a || ((a = new n.a).addFetchListener(), a.addCacheListener()), a)
}, function(e, t, s) {
    "use strict";
    s.d(t, "a", function() {
        return n
    });
    s(4), s(7);
    const n = e => e && "object" == typeof e ? e : {
        handle: e
    }
}, function(e, t, s) {
    "use strict";
    try {
        self["workbox:expiration:6.1.5"] && _()
    } catch (e) {}
}, function(e, t, s) {
    "use strict";
    s.d(t, "a", function() {
        return c
    });
    s(1);
    var n = s(0),
        a = s(6),
        r = s(15),
        i = s(11);
    s(7);

    function c(e, t, s) {
        let c;
        if ("string" == typeof e) {
            const n = new URL(e, location.href);
            0;
            const r = ({
                url: e
            }) => e.href === n.href;
            c = new a.a(r, t, s)
        } else if (e instanceof RegExp) c = new r.a(e, t, s);
        else if ("function" == typeof e) c = new a.a(e, t, s);
        else {
            if (!(e instanceof a.a)) throw new n.a("unsupported-route-type", {
                moduleName: "workbox-routing",
                funcName: "registerRoute",
                paramName: "capture"
            });
            c = e
        }
        return Object(i.a)().registerRoute(c), c
    }
}, function(e, t, s) {
    "use strict";
    s.d(t, "a", function() {
        return a
    });
    s(4), s(1);
    var n = s(6);
    s(7);
    class a extends n.a {
        constructor(e, t, s) {
            super(({
                url: t
            }) => {
                const s = e.exec(t.href);
                if (s && (t.origin === location.origin || 0 === s.index)) return s.slice(1)
            }, t, s)
        }
    }
}, function(e, t, s) {
    "use strict";
    s.d(t, "a", function() {
        return i
    });
    s(4), s(9);
    var n = s(20),
        a = (s(1), s(12)),
        r = s(0);
    s(7);
    class i {
        constructor() {
            this._routes = new Map, this._defaultHandlerMap = new Map
        }
        get routes() {
            return this._routes
        }
        addFetchListener() {
            self.addEventListener("fetch", e => {
                const {
                    request: t
                } = e, s = this.handleRequest({
                    request: t,
                    event: e
                });
                s && e.respondWith(s)
            })
        }
        addCacheListener() {
            self.addEventListener("message", e => {
                if (e.data && "CACHE_URLS" === e.data.type) {
                    const {
                        payload: t
                    } = e.data;
                    0;
                    const s = Promise.all(t.urlsToCache.map(t => {
                        "string" == typeof t && (t = [t]);
                        const s = new Request(...t);
                        return this.handleRequest({
                            request: s,
                            event: e
                        })
                    }));
                    e.waitUntil(s), e.ports && e.ports[0] && s.then(() => e.ports[0].postMessage(!0))
                }
            })
        }
        handleRequest({
            request: e,
            event: t
        }) {
            const s = new URL(e.url, location.href);
            if (!s.protocol.startsWith("http")) return void 0;
            const n = s.origin === location.origin,
                {
                    params: a,
                    route: r
                } = this.findMatchingRoute({
                    event: t,
                    request: e,
                    sameOrigin: n,
                    url: s
                });
            let i = r && r.handler;
            const c = e.method;
            if (!i && this._defaultHandlerMap.has(c) && (i = this._defaultHandlerMap.get(c)), !i) return void 0;
            let o;
            try {
                o = i.handle({
                    url: s,
                    request: e,
                    event: t,
                    params: a
                })
            } catch (e) {
                o = Promise.reject(e)
            }
            const h = r && r.catchHandler;
            return o instanceof Promise && (this._catchHandler || h) && (o = o.catch(async n => {
                if (h) {
                    0;
                    try {
                        return await h.handle({
                            url: s,
                            request: e,
                            event: t,
                            params: a
                        })
                    } catch (e) {
                        n = e
                    }
                }
                if (this._catchHandler) return this._catchHandler.handle({
                    url: s,
                    request: e,
                    event: t
                });
                throw n
            })), o
        }
        findMatchingRoute({
            url: e,
            sameOrigin: t,
            request: s,
            event: n
        }) {
            const a = this._routes.get(s.method) || [];
            for (const r of a) {
                let a;
                const i = r.match({
                    url: e,
                    sameOrigin: t,
                    request: s,
                    event: n
                });
                if (i) return a = i, Array.isArray(i) && 0 === i.length ? a = void 0 : i.constructor === Object && 0 === Object.keys(i).length ? a = void 0 : "boolean" == typeof i && (a = void 0), {
                    route: r,
                    params: a
                }
            }
            return {}
        }
        setDefaultHandler(e, t = n.a) {
            this._defaultHandlerMap.set(t, Object(a.a)(e))
        }
        setCatchHandler(e) {
            this._catchHandler = Object(a.a)(e)
        }
        registerRoute(e) {
            this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e)
        }
        unregisterRoute(e) {
            if (!this._routes.has(e.method)) throw new r.a("unregister-route-but-not-found-with-method", {
                method: e.method
            });
            const t = this._routes.get(e.method).indexOf(e);
            if (!(t > -1)) throw new r.a("unregister-route-route-not-registered");
            this._routes.get(e.method).splice(t, 1)
        }
    }
}, function(e, t, s) {
    "use strict";
    s.d(t, "a", function() {
        return u
    });
    s(4), s(3);

    function n(e, t) {
        const s = new URL(e);
        for (const e of t) s.searchParams.delete(e);
        return s.href
    }
    class a {
        constructor() {
            this.promise = new Promise((e, t) => {
                this.resolve = e, this.reject = t
            })
        }
    }
    s(1);
    var r = s(18);
    var i = s(9),
        c = s(19),
        o = s(0);
    s(8);

    function h(e) {
        return "string" == typeof e ? new Request(e) : e
    }
    class u {
        constructor(e, t) {
            this._cacheKeys = {}, Object.assign(this, t), this.event = t.event, this._strategy = e, this._handlerDeferred = new a, this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = new Map;
            for (const e of this._plugins) this._pluginStateMap.set(e, {});
            this.event.waitUntil(this._handlerDeferred.promise)
        }
        async fetch(e) {
            const {
                event: t
            } = this;
            let s = h(e);
            if ("navigate" === s.mode && t instanceof FetchEvent && t.preloadResponse) {
                const e = await t.preloadResponse;
                if (e) return e
            }
            const n = this.hasCallback("fetchDidFail") ? s.clone() : null;
            try {
                for (const e of this.iterateCallbacks("requestWillFetch")) s = await e({
                    request: s.clone(),
                    event: t
                })
            } catch (e) {
                throw new o.a("plugin-error-request-will-fetch", {
                    thrownError: e
                })
            }
            const a = s.clone();
            try {
                let e;
                e = await fetch(s, "navigate" === s.mode ? void 0 : this._strategy.fetchOptions);
                for (const s of this.iterateCallbacks("fetchDidSucceed")) e = await s({
                    event: t,
                    request: a,
                    response: e
                });
                return e
            } catch (e) {
                throw n && await this.runCallbacks("fetchDidFail", {
                    error: e,
                    event: t,
                    originalRequest: n.clone(),
                    request: a.clone()
                }), e
            }
        }
        async fetchAndCachePut(e) {
            const t = await this.fetch(e),
                s = t.clone();
            return this.waitUntil(this.cachePut(e, s)), t
        }
        async cacheMatch(e) {
            const t = h(e);
            let s;
            const {
                cacheName: n,
                matchOptions: a
            } = this._strategy, r = await this.getCacheKey(t, "read"), i = { ...a,
                ...{
                    cacheName: n
                }
            };
            s = await caches.match(r, i);
            for (const e of this.iterateCallbacks("cachedResponseWillBeUsed")) s = await e({
                cacheName: n,
                matchOptions: a,
                cachedResponse: s,
                request: r,
                event: this.event
            }) || void 0;
            return s
        }
        async cachePut(e, t) {
            const s = h(e);
            await Object(c.a)(0);
            const a = await this.getCacheKey(s, "write");
            if (!t) throw new o.a("cache-put-with-no-response", {
                url: Object(i.a)(a.url)
            });
            const u = await this._ensureResponseSafeToCache(t);
            if (!u) return !1;
            const {
                cacheName: l,
                matchOptions: d
            } = this._strategy, f = await self.caches.open(l), p = this.hasCallback("cacheDidUpdate"), g = p ? await async function(e, t, s, a) {
                const r = n(t.url, s);
                if (t.url === r) return e.match(t, a);
                const i = { ...a,
                        ignoreSearch: !0
                    },
                    c = await e.keys(t, i);
                for (const t of c)
                    if (r === n(t.url, s)) return e.match(t, a)
            }(f, a.clone(), ["__WB_REVISION__"], d) : null;
            try {
                await f.put(a, p ? u.clone() : u)
            } catch (e) {
                throw "QuotaExceededError" === e.name && await async function() {
                    for (const e of r.a) await e()
                }(), e
            }
            for (const e of this.iterateCallbacks("cacheDidUpdate")) await e({
                cacheName: l,
                oldResponse: g,
                newResponse: u.clone(),
                request: a,
                event: this.event
            });
            return !0
        }
        async getCacheKey(e, t) {
            if (!this._cacheKeys[t]) {
                let s = e;
                for (const e of this.iterateCallbacks("cacheKeyWillBeUsed")) s = h(await e({
                    mode: t,
                    request: s,
                    event: this.event,
                    params: this.params
                }));
                this._cacheKeys[t] = s
            }
            return this._cacheKeys[t]
        }
        hasCallback(e) {
            for (const t of this._strategy.plugins)
                if (e in t) return !0;
            return !1
        }
        async runCallbacks(e, t) {
            for (const s of this.iterateCallbacks(e)) await s(t)
        }* iterateCallbacks(e) {
            for (const t of this._strategy.plugins)
                if ("function" == typeof t[e]) {
                    const s = this._pluginStateMap.get(t);
                    yield n => {
                        const a = { ...n,
                            state: s
                        };
                        return t[e](a)
                    }
                }
        }
        waitUntil(e) {
            return this._extendLifetimePromises.push(e), e
        }
        async doneWaiting() {
            let e;
            for (; e = this._extendLifetimePromises.shift();) await e
        }
        destroy() {
            this._handlerDeferred.resolve()
        }
        async _ensureResponseSafeToCache(e) {
            let t = e,
                s = !1;
            for (const e of this.iterateCallbacks("cacheWillUpdate"))
                if (s = !0, !(t = await e({
                        request: this.request,
                        response: t,
                        event: this.event
                    }) || void 0)) break;
            return s || t && 200 !== t.status && (t = void 0), t
        }
    }
}, function(e, t, s) {
    "use strict";
    s.d(t, "a", function() {
        return n
    });
    s(3);
    const n = new Set
}, function(e, t, s) {
    "use strict";
    s.d(t, "a", function() {
        return n
    });
    s(3);

    function n(e) {
        return new Promise(t => setTimeout(t, e))
    }
}, function(e, t, s) {
    "use strict";
    s.d(t, "a", function() {
        return n
    });
    s(7);
    const n = "GET"
}, function(e, t, s) {
    "use strict";
    try {
        self["workbox:cacheable-response:6.1.5"] && _()
    } catch (e) {}
}, function(e, t, s) {
    "use strict";
    var n = s(23),
        a = s(26),
        r = s(24),
        i = s(27),
        c = s(25),
        o = new RegExp(/^https:\/\/c.ekstatic.net\/(?:hmp\/uiassets|hmp\/uat\/uiassets|hmp\/pt\/uiassets)\/(.*).(?:js|css)/);
    (0, a.registerRoute)(o, new r.CacheFirst({
        cacheName: "ek-cache",
        plugins: [new i.CacheableResponse({
            statuses: [0, 200]
        }), new c.CacheExpiration({
            maxAgeSeconds: 86400
        })]
    })), self.addEventListener("install", function(e) {
        return self.skipWaiting()
    }), self.addEventListener("activate", function(e) {
        caches.keys().then(function(e) {
            var t = e,
                s = Array.isArray(t),
                n = 0;
            for (t = s ? t : t[Symbol.iterator]();;) {
                var a;
                if (s) {
                    if (n >= t.length) break;
                    a = t[n++]
                } else {
                    if ((n = t.next()).done) break;
                    a = n.value
                }
                var r = a;
                caches.delete(r)
            }
        })
    }), (0, n.precacheAndRoute)([])
}, function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, "addPlugins", function() {
        return m
    }), s.d(t, "addRoute", function() {
        return v
    }), s.d(t, "cleanupOutdatedCaches", function() {
        return C
    }), s.d(t, "createHandlerBoundToURL", function() {
        return x
    }), s.d(t, "getCacheKeyForURL", function() {
        return k
    }), s.d(t, "matchPrecache", function() {
        return U
    }), s.d(t, "precache", function() {
        return T
    }), s.d(t, "precacheAndRoute", function() {
        return P
    }), s.d(t, "PrecacheController", function() {
        return p
    }), s.d(t, "PrecacheRoute", function() {
        return b
    }), s.d(t, "PrecacheStrategy", function() {
        return f
    }), s.d(t, "PrecacheFallbackPlugin", function() {
        return q
    });
    s(4);
    var n = s(10),
        a = (s(1), s(0));
    s(3);

    function r(e, t) {
        const s = t();
        return e.waitUntil(s), s
    }
    s(2);
    const i = "__WB_REVISION__";

    function c(e) {
        if (!e) throw new a.a("add-to-cache-list-unexpected-type", {
            entry: e
        });
        if ("string" == typeof e) {
            const t = new URL(e, location.href);
            return {
                cacheKey: t.href,
                url: t.href
            }
        }
        const {
            revision: t,
            url: s
        } = e;
        if (!s) throw new a.a("add-to-cache-list-unexpected-type", {
            entry: e
        });
        if (!t) {
            const e = new URL(s, location.href);
            return {
                cacheKey: e.href,
                url: e.href
            }
        }
        const n = new URL(s, location.href),
            r = new URL(s, location.href);
        return n.searchParams.set(i, t), {
            cacheKey: n.href,
            url: r.href
        }
    }
    class o {
        constructor() {
            this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = (async ({
                request: e,
                state: t
            }) => {
                t && (t.originalRequest = e)
            }), this.cachedResponseWillBeUsed = (async ({
                event: e,
                state: t,
                cachedResponse: s
            }) => {
                if ("install" === e.type) {
                    const e = t.originalRequest.url;
                    s ? this.notUpdatedURLs.push(e) : this.updatedURLs.push(e)
                }
                return s
            })
        }
    }
    class h {
        constructor({
            precacheController: e
        }) {
            this.cacheKeyWillBeUsed = (async ({
                request: e,
                params: t
            }) => {
                const s = t && t.cacheKey || this._precacheController.getCacheKeyForURL(e.url);
                return s ? new Request(s) : e
            }), this._precacheController = e
        }
    }
    let u;
    async function l(e, t) {
        let s = null;
        if (e.url) {
            s = new URL(e.url).origin
        }
        if (s !== self.location.origin) throw new a.a("cross-origin-copy-response", {
            origin: s
        });
        const n = e.clone(),
            r = {
                headers: new Headers(n.headers),
                status: n.status,
                statusText: n.statusText
            },
            i = t ? t(r) : r,
            c = function() {
                if (void 0 === u) {
                    const e = new Response("");
                    if ("body" in e) try {
                        new Response(e.body), u = !0
                    } catch (e) {
                        u = !1
                    }
                    u = !1
                }
                return u
            }() ? n.body : await n.blob();
        return new Response(c, i)
    }
    s(9);
    var d = s(5);
    class f extends d.a {
        constructor(e = {}) {
            e.cacheName = n.a.getPrecacheName(e.cacheName), super(e), this._fallbackToNetwork = !1 !== e.fallbackToNetwork, this.plugins.push(f.copyRedirectedCacheableResponsesPlugin)
        }
        async _handle(e, t) {
            const s = await t.cacheMatch(e);
            return s || (t.event && "install" === t.event.type ? await this._handleInstall(e, t) : await this._handleFetch(e, t))
        }
        async _handleFetch(e, t) {
            let s;
            if (!this._fallbackToNetwork) throw new a.a("missing-precache-entry", {
                cacheName: this.cacheName,
                url: e.url
            });
            return s = await t.fetch(e)
        }
        async _handleInstall(e, t) {
            this._useDefaultCacheabilityPluginIfNeeded();
            const s = await t.fetch(e);
            if (!await t.cachePut(e, s.clone())) throw new a.a("bad-precaching-response", {
                url: e.url,
                status: s.status
            });
            return s
        }
        _useDefaultCacheabilityPluginIfNeeded() {
            let e = null,
                t = 0;
            for (const [s, n] of this.plugins.entries()) n !== f.copyRedirectedCacheableResponsesPlugin && (n === f.defaultPrecacheCacheabilityPlugin && (e = s), n.cacheWillUpdate && t++);
            0 === t ? this.plugins.push(f.defaultPrecacheCacheabilityPlugin) : t > 1 && null !== e && this.plugins.splice(e, 1)
        }
    }
    f.defaultPrecacheCacheabilityPlugin = {
        cacheWillUpdate: async ({
            response: e
        }) => !e || e.status >= 400 ? null : e
    }, f.copyRedirectedCacheableResponsesPlugin = {
        cacheWillUpdate: async ({
            response: e
        }) => e.redirected ? await l(e) : e
    };
    class p {
        constructor({
            cacheName: e,
            plugins: t = [],
            fallbackToNetwork: s = !0
        } = {}) {
            this._urlsToCacheKeys = new Map, this._urlsToCacheModes = new Map, this._cacheKeysToIntegrities = new Map, this._strategy = new f({
                cacheName: n.a.getPrecacheName(e),
                plugins: [...t, new h({
                    precacheController: this
                })],
                fallbackToNetwork: s
            }), this.install = this.install.bind(this), this.activate = this.activate.bind(this)
        }
        get strategy() {
            return this._strategy
        }
        precache(e) {
            this.addToCacheList(e), this._installAndActiveListenersAdded || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this._installAndActiveListenersAdded = !0)
        }
        addToCacheList(e) {
            const t = [];
            for (const s of e) {
                "string" == typeof s ? t.push(s) : s && void 0 === s.revision && t.push(s.url);
                const {
                    cacheKey: e,
                    url: n
                } = c(s), r = "string" != typeof s && s.revision ? "reload" : "default";
                if (this._urlsToCacheKeys.has(n) && this._urlsToCacheKeys.get(n) !== e) throw new a.a("add-to-cache-list-conflicting-entries", {
                    firstEntry: this._urlsToCacheKeys.get(n),
                    secondEntry: e
                });
                if ("string" != typeof s && s.integrity) {
                    if (this._cacheKeysToIntegrities.has(e) && this._cacheKeysToIntegrities.get(e) !== s.integrity) throw new a.a("add-to-cache-list-conflicting-integrities", {
                        url: n
                    });
                    this._cacheKeysToIntegrities.set(e, s.integrity)
                }
                if (this._urlsToCacheKeys.set(n, e), this._urlsToCacheModes.set(n, r), t.length > 0) {
                    const e = "Workbox is precaching URLs without revision " + `info: ${t.join(", ")}\nThis is generally NOT safe. ` + "Learn more at https://bit.ly/wb-precache";
                    console.warn(e)
                }
            }
        }
        install(e) {
            return r(e, async () => {
                const t = new o;
                this.strategy.plugins.push(t);
                for (const [t, s] of this._urlsToCacheKeys) {
                    const n = this._cacheKeysToIntegrities.get(s),
                        a = this._urlsToCacheModes.get(t),
                        r = new Request(t, {
                            integrity: n,
                            cache: a,
                            credentials: "same-origin"
                        });
                    await Promise.all(this.strategy.handleAll({
                        params: {
                            cacheKey: s
                        },
                        request: r,
                        event: e
                    }))
                }
                const {
                    updatedURLs: s,
                    notUpdatedURLs: n
                } = t;
                return {
                    updatedURLs: s,
                    notUpdatedURLs: n
                }
            })
        }
        activate(e) {
            return r(e, async () => {
                const e = await self.caches.open(this.strategy.cacheName),
                    t = await e.keys(),
                    s = new Set(this._urlsToCacheKeys.values()),
                    n = [];
                for (const a of t) s.has(a.url) || (await e.delete(a), n.push(a.url));
                return {
                    deletedURLs: n
                }
            })
        }
        getURLsToCacheKeys() {
            return this._urlsToCacheKeys
        }
        getCachedURLs() {
            return [...this._urlsToCacheKeys.keys()]
        }
        getCacheKeyForURL(e) {
            const t = new URL(e, location.href);
            return this._urlsToCacheKeys.get(t.href)
        }
        async matchPrecache(e) {
            const t = e instanceof Request ? e.url : e,
                s = this.getCacheKeyForURL(t);
            if (s) {
                return (await self.caches.open(this.strategy.cacheName)).match(s)
            }
        }
        createHandlerBoundToURL(e) {
            const t = this.getCacheKeyForURL(e);
            if (!t) throw new a.a("non-precached-url", {
                url: e
            });
            return s => (s.request = new Request(e), s.params = {
                cacheKey: t,
                ...s.params
            }, this.strategy.handle(s))
        }
    }
    let g;
    const w = () => (g || (g = new p), g);

    function m(e) {
        w().strategy.plugins.push(...e)
    }
    var y = s(14),
        _ = s(6);
    class b extends _.a {
        constructor(e, t) {
            super(({
                request: s
            }) => {
                const n = e.getURLsToCacheKeys();
                for (const e of function*(e, {
                        ignoreURLParametersMatching: t = [/^utm_/, /^fbclid$/],
                        directoryIndex: s = "index.html",
                        cleanURLs: n = !0,
                        urlManipulation: a
                    } = {}) {
                        const r = new URL(e, location.href);
                        r.hash = "", yield r.href;
                        const i = function(e, t = []) {
                            for (const s of [...e.searchParams.keys()]) t.some(e => e.test(s)) && e.searchParams.delete(s);
                            return e
                        }(r, t);
                        if (yield i.href, s && i.pathname.endsWith("/")) {
                            const e = new URL(i.href);
                            e.pathname += s, yield e.href
                        }
                        if (n) {
                            const e = new URL(i.href);
                            e.pathname += ".html", yield e.href
                        }
                        if (a) {
                            const e = a({
                                url: r
                            });
                            for (const t of e) yield t.href
                        }
                    }(s.url, t)) {
                    const t = n.get(e);
                    if (t) return {
                        cacheKey: t
                    }
                }
            }, e.strategy)
        }
    }

    function v(e) {
        const t = w(),
            s = new b(t, e);
        Object(y.a)(s)
    }
    const R = async (e, t = "-precache-") => {
        const s = (await self.caches.keys()).filter(s => s.includes(t) && s.includes(self.registration.scope) && s !== e);
        return await Promise.all(s.map(e => self.caches.delete(e))), s
    };

    function C() {
        self.addEventListener("activate", e => {
            const t = n.a.getPrecacheName();
            e.waitUntil(R(t).then(e => {
                0
            }))
        })
    }

    function x(e) {
        return w().createHandlerBoundToURL(e)
    }

    function k(e) {
        return w().getCacheKeyForURL(e)
    }

    function U(e) {
        return w().matchPrecache(e)
    }

    function T(e) {
        w().precache(e)
    }

    function P(e, t) {
        T(e), v(t)
    }
    class q {
        constructor({
            fallbackURL: e,
            precacheController: t
        }) {
            this.handlerDidError = (() => this._precacheController.matchPrecache(this._fallbackURL)), this._fallbackURL = e, this._precacheController = t || w()
        }
    }
}, function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, "CacheFirst", function() {
        return r
    }), s.d(t, "CacheOnly", function() {
        return i
    }), s.d(t, "NetworkFirst", function() {
        return o
    }), s.d(t, "NetworkOnly", function() {
        return u
    }), s.d(t, "StaleWhileRevalidate", function() {
        return l
    }), s.d(t, "Strategy", function() {
        return a.a
    }), s.d(t, "StrategyHandler", function() {
        return d.a
    });
    s(4), s(1);
    var n = s(0),
        a = s(5);
    s(9), s(8);
    class r extends a.a {
        async _handle(e, t) {
            let s, a = await t.cacheMatch(e);
            if (a) 0;
            else {
                0;
                try {
                    a = await t.fetchAndCachePut(e)
                } catch (e) {
                    s = e
                }
                0
            }
            if (!a) throw new n.a("no-response", {
                url: e.url,
                error: s
            });
            return a
        }
    }
    class i extends a.a {
        async _handle(e, t) {
            const s = await t.cacheMatch(e);
            if (!s) throw new n.a("no-response", {
                url: e.url
            });
            return s
        }
    }
    const c = {
        cacheWillUpdate: async ({
            response: e
        }) => 200 === e.status || 0 === e.status ? e : null
    };
    class o extends a.a {
        constructor(e = {}) {
            super(e), this.plugins.some(e => "cacheWillUpdate" in e) || this.plugins.unshift(c), this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0
        }
        async _handle(e, t) {
            const s = [];
            const a = [];
            let r;
            if (this._networkTimeoutSeconds) {
                const {
                    id: n,
                    promise: i
                } = this._getTimeoutPromise({
                    request: e,
                    logs: s,
                    handler: t
                });
                r = n, a.push(i)
            }
            const i = this._getNetworkPromise({
                timeoutId: r,
                request: e,
                logs: s,
                handler: t
            });
            a.push(i);
            const c = await t.waitUntil((async () => await t.waitUntil(Promise.race(a)) || await i)());
            if (!c) throw new n.a("no-response", {
                url: e.url
            });
            return c
        }
        _getTimeoutPromise({
            request: e,
            logs: t,
            handler: s
        }) {
            let n;
            return {
                promise: new Promise(t => {
                    n = setTimeout(async () => {
                        t(await s.cacheMatch(e))
                    }, 1e3 * this._networkTimeoutSeconds)
                }),
                id: n
            }
        }
        async _getNetworkPromise({
            timeoutId: e,
            request: t,
            logs: s,
            handler: n
        }) {
            let a, r;
            try {
                r = await n.fetchAndCachePut(t)
            } catch (e) {
                a = e
            }
            return e && clearTimeout(e), !a && r || (r = await n.cacheMatch(t)), r
        }
    }
    var h = s(19);
    class u extends a.a {
        constructor(e = {}) {
            super(e), this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0
        }
        async _handle(e, t) {
            let s, a = void 0;
            try {
                const n = [t.fetch(e)];
                if (this._networkTimeoutSeconds) {
                    const e = Object(h.a)(1e3 * this._networkTimeoutSeconds);
                    n.push(e)
                }
                if (!(s = await Promise.race(n))) throw new Error("Timed out the network response after " + `${this._networkTimeoutSeconds} seconds.`)
            } catch (e) {
                a = e
            }
            if (!s) throw new n.a("no-response", {
                url: e.url,
                error: a
            });
            return s
        }
    }
    class l extends a.a {
        constructor(e) {
            super(e), this.plugins.some(e => "cacheWillUpdate" in e) || this.plugins.unshift(c)
        }
        async _handle(e, t) {
            const s = t.fetchAndCachePut(e).catch(() => {});
            let a, r = await t.cacheMatch(e);
            if (r) 0;
            else {
                0;
                try {
                    r = await s
                } catch (e) {
                    a = e
                }
            }
            if (!r) throw new n.a("no-response", {
                url: e.url,
                error: a
            });
            return r
        }
    }
    var d = s(17)
}, function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, "CacheExpiration", function() {
        return d
    }), s.d(t, "ExpirationPlugin", function() {
        return g
    });
    s(4), s(3);

    function n(e) {
        e.then(() => {})
    }
    s(1);
    var a = s(0);
    class r {
        constructor(e, t, {
            onupgradeneeded: s,
            onversionchange: n
        } = {}) {
            this._db = null, this._name = e, this._version = t, this._onupgradeneeded = s, this._onversionchange = n || (() => this.close())
        }
        get db() {
            return this._db
        }
        async open() {
            if (!this._db) return this._db = await new Promise((e, t) => {
                let s = !1;
                setTimeout(() => {
                    s = !0, t(new Error("The open request was blocked and timed out"))
                }, this.OPEN_TIMEOUT);
                const n = indexedDB.open(this._name, this._version);
                n.onerror = (() => t(n.error)), n.onupgradeneeded = (e => {
                    s ? (n.transaction.abort(), n.result.close()) : "function" == typeof this._onupgradeneeded && this._onupgradeneeded(e)
                }), n.onsuccess = (() => {
                    const t = n.result;
                    s ? t.close() : (t.onversionchange = this._onversionchange.bind(this), e(t))
                })
            }), this
        }
        async getKey(e, t) {
            return (await this.getAllKeys(e, t, 1))[0]
        }
        async getAll(e, t, s) {
            return await this.getAllMatching(e, {
                query: t,
                count: s
            })
        }
        async getAllKeys(e, t, s) {
            return (await this.getAllMatching(e, {
                query: t,
                count: s,
                includeKeys: !0
            })).map(e => e.key)
        }
        async getAllMatching(e, {
            index: t,
            query: s = null,
            direction: n = "next",
            count: a,
            includeKeys: r = !1
        } = {}) {
            return await this.transaction([e], "readonly", (i, c) => {
                const o = i.objectStore(e),
                    h = [],
                    u = (t ? o.index(t) : o).openCursor(s, n);
                u.onsuccess = (() => {
                    const e = u.result;
                    e ? (h.push(r ? e : e.value), a && h.length >= a ? c(h) : e.continue()) : c(h)
                })
            })
        }
        async transaction(e, t, s) {
            return await this.open(), await new Promise((n, a) => {
                const r = this._db.transaction(e, t);
                r.onabort = (() => a(r.error)), r.oncomplete = (() => n()), s(r, e => n(e))
            })
        }
        async _call(e, t, s, ...n) {
            return await this.transaction([t], s, (s, a) => {
                const r = s.objectStore(t),
                    i = r[e].apply(r, n);
                i.onsuccess = (() => a(i.result))
            })
        }
        close() {
            this._db && (this._db.close(), this._db = null)
        }
    }
    r.prototype.OPEN_TIMEOUT = 2e3;
    const i = {
        readonly: ["get", "count", "getKey", "getAll", "getAllKeys"],
        readwrite: ["add", "put", "clear", "delete"]
    };
    for (const [e, t] of Object.entries(i))
        for (const s of t) s in IDBObjectStore.prototype && (r.prototype[s] = async function(t, ...n) {
            return await this._call(s, t, e, ...n)
        });
    const c = async e => {
        await new Promise((t, s) => {
            const n = indexedDB.deleteDatabase(e);
            n.onerror = (() => {
                s(n.error)
            }), n.onblocked = (() => {
                s(new Error("Delete blocked"))
            }), n.onsuccess = (() => {
                t()
            })
        })
    };
    s(13);
    const o = "workbox-expiration",
        h = "cache-entries",
        u = e => {
            const t = new URL(e, location.href);
            return t.hash = "", t.href
        };
    class l {
        constructor(e) {
            this._cacheName = e, this._db = new r(o, 1, {
                onupgradeneeded: e => this._handleUpgrade(e)
            })
        }
        _handleUpgrade(e) {
            const t = e.target.result.createObjectStore(h, {
                keyPath: "id"
            });
            t.createIndex("cacheName", "cacheName", {
                unique: !1
            }), t.createIndex("timestamp", "timestamp", {
                unique: !1
            }), c(this._cacheName)
        }
        async setTimestamp(e, t) {
            const s = {
                url: e = u(e),
                timestamp: t,
                cacheName: this._cacheName,
                id: this._getId(e)
            };
            await this._db.put(h, s)
        }
        async getTimestamp(e) {
            return (await this._db.get(h, this._getId(e))).timestamp
        }
        async expireEntries(e, t) {
            const s = await this._db.transaction(h, "readwrite", (s, n) => {
                    const a = s.objectStore(h).index("timestamp").openCursor(null, "prev"),
                        r = [];
                    let i = 0;
                    a.onsuccess = (() => {
                        const s = a.result;
                        if (s) {
                            const n = s.value;
                            n.cacheName === this._cacheName && (e && n.timestamp < e || t && i >= t ? r.push(s.value) : i++), s.continue()
                        } else n(r)
                    })
                }),
                n = [];
            for (const e of s) await this._db.delete(h, e.id), n.push(e.url);
            return n
        }
        _getId(e) {
            return this._cacheName + "|" + u(e)
        }
    }
    class d {
        constructor(e, t = {}) {
            this._isRunning = !1, this._rerunRequested = !1, this._maxEntries = t.maxEntries, this._maxAgeSeconds = t.maxAgeSeconds, this._matchOptions = t.matchOptions, this._cacheName = e, this._timestampModel = new l(e)
        }
        async expireEntries() {
            if (this._isRunning) return void(this._rerunRequested = !0);
            this._isRunning = !0;
            const e = this._maxAgeSeconds ? Date.now() - 1e3 * this._maxAgeSeconds : 0,
                t = await this._timestampModel.expireEntries(e, this._maxEntries),
                s = await self.caches.open(this._cacheName);
            for (const e of t) await s.delete(e, this._matchOptions);
            this._isRunning = !1, this._rerunRequested && (this._rerunRequested = !1, n(this.expireEntries()))
        }
        async updateTimestamp(e) {
            await this._timestampModel.setTimestamp(e, Date.now())
        }
        async isURLExpired(e) {
            if (this._maxAgeSeconds) {
                return await this._timestampModel.getTimestamp(e) < Date.now() - 1e3 * this._maxAgeSeconds
            }
            return !1
        }
        async delete() {
            this._rerunRequested = !1, await this._timestampModel.expireEntries(1 / 0)
        }
    }
    var f = s(10),
        p = (s(9), s(18));
    class g {
        constructor(e = {}) {
            var t;
            this.cachedResponseWillBeUsed = (async ({
                event: e,
                request: t,
                cacheName: s,
                cachedResponse: a
            }) => {
                if (!a) return null;
                const r = this._isResponseDateFresh(a),
                    i = this._getCacheExpiration(s);
                n(i.expireEntries());
                const c = i.updateTimestamp(t.url);
                if (e) try {
                    e.waitUntil(c)
                } catch (e) {
                    0
                }
                return r ? a : null
            }), this.cacheDidUpdate = (async ({
                cacheName: e,
                request: t
            }) => {
                const s = this._getCacheExpiration(e);
                await s.updateTimestamp(t.url), await s.expireEntries()
            }), this._config = e, this._maxAgeSeconds = e.maxAgeSeconds, this._cacheExpirations = new Map, e.purgeOnQuotaError && (t = (() => this.deleteCacheAndMetadata()), p.a.add(t))
        }
        _getCacheExpiration(e) {
            if (e === f.a.getRuntimeName()) throw new a.a("expire-custom-caches-only");
            let t = this._cacheExpirations.get(e);
            return t || (t = new d(e, this._config), this._cacheExpirations.set(e, t)), t
        }
        _isResponseDateFresh(e) {
            if (!this._maxAgeSeconds) return !0;
            const t = this._getDateHeaderTimestamp(e);
            return null === t || t >= Date.now() - 1e3 * this._maxAgeSeconds
        }
        _getDateHeaderTimestamp(e) {
            if (!e.headers.has("date")) return null;
            const t = e.headers.get("date"),
                s = new Date(t).getTime();
            return isNaN(s) ? null : s
        }
        async deleteCacheAndMetadata() {
            for (const [e, t] of this._cacheExpirations) await self.caches.delete(e), await t.delete();
            this._cacheExpirations = new Map
        }
    }
}, function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, "NavigationRoute", function() {
        return a
    }), s.d(t, "RegExpRoute", function() {
        return r.a
    }), s.d(t, "registerRoute", function() {
        return i.a
    }), s.d(t, "Route", function() {
        return n.a
    }), s.d(t, "Router", function() {
        return c.a
    }), s.d(t, "setCatchHandler", function() {
        return h
    }), s.d(t, "setDefaultHandler", function() {
        return u
    });
    s(4), s(1);
    var n = s(6);
    s(7);
    class a extends n.a {
        constructor(e, {
            allowlist: t = [/./],
            denylist: s = []
        } = {}) {
            super(e => this._match(e), e), this._allowlist = t, this._denylist = s
        }
        _match({
            url: e,
            request: t
        }) {
            if (t && "navigate" !== t.mode) return !1;
            const s = e.pathname + e.search;
            for (const e of this._denylist)
                if (e.test(s)) return !1;
            return !!this._allowlist.some(e => e.test(s))
        }
    }
    var r = s(15),
        i = s(14),
        c = s(16),
        o = s(11);

    function h(e) {
        Object(o.a)().setCatchHandler(e)
    }

    function u(e) {
        Object(o.a)().setDefaultHandler(e)
    }
}, function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, "CacheableResponse", function() {
        return n
    }), s.d(t, "CacheableResponsePlugin", function() {
        return a
    });
    s(4), s(0), s(9), s(1), s(21);
    class n {
        constructor(e = {}) {
            this._statuses = e.statuses, this._headers = e.headers
        }
        isResponseCacheable(e) {
            let t = !0;
            return this._statuses && (t = this._statuses.includes(e.status)), this._headers && t && (t = Object.keys(this._headers).some(t => e.headers.get(t) === this._headers[t])), t
        }
    }
    class a {
        constructor(e) {
            this.cacheWillUpdate = (async ({
                response: e
            }) => this._cacheableResponse.isResponseCacheable(e) ? e : null), this._cacheableResponse = new n(e)
        }
    }
}]);



