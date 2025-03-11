(() => {
    "use strict";
    const t = "7.2.3_0770896",
        n = "https://t.teads.tv/track",
        e = "https://cm.teads.tv/v2/advertiser",
        o = "tag",
        i = "outbrain",
        a = "teads",
        c = "js-web",
        r = "js-gtm";
    let d = !1;

    function s() {
        return window.advertiser_domain
    }

    function l() {
        return window.teads_buyer_pixel_id
    }

    function u() {
        return !0 === window.teads_post_message_event_to_opener
    }

    function p() {
        return !0 === window.teads_post_message_event_to_window
    }

    function v(t) {
        window.teads_iab_tcf_consent_data = t
    }

    function w() {
        return window.teads_iab_tcf_consent_data
    }

    function _(t) {
        window.teads_iab_gpp_consent_data = t
    }

    function g() {
        return window.teads_iab_gpp_consent_data
    }

    function f(t) {
        window.teads_usp_consent_data = t
    }

    function m() {
        return window.teads_usp_consent_data
    }

    function y() {
        return window.teads_gdpr_advertiser
    }

    function h() {
        return window.teads_ccpa_advertiser
    }

    function I() {
        return !0 === window.teads_tracking_allowed
    }

    function E(t) {
        window.teads_auction_id = t
    }

    function b() {
        return window.teads_auction_id
    }

    function A(t) {
        const n = window.teads_auction_id_forwarded_by || {};
        n[t] = !0, window.teads_auction_id_forwarded_by = n
    }

    function k(t) {
        window.teads_session_id = t
    }

    function P() {
        return window.teads_session_id
    }

    function S() {
        return window.teads_viewer_id
    }

    function N() {
        return !0 !== window.teads_disable_first_party_cookie && window.first_party_cookie_allowed
    }

    function C(t) {
        window.teads_tracking_events_sent || (window.teads_tracking_events_sent = []), window.teads_tracking_events_sent.push(t)
    }
    const T = t => {
        d = t
    };

    function L() {
        if (void 0 !== window.teads && void 0 !== window.teads.advertiserId) {
            if ("number" == typeof window.teads.advertiserId) return window.teads.advertiserId
        } else {
            if (void 0 === window.teads_cv || void 0 === window.teads_cv.advertiserId) return window.teads_adv_id;
            if ("number" == typeof window.teads_cv.advertiserId) return window.teads_cv.advertiserId
        }
    }

    function D() {
        return window.teads_env && [c, r].includes(window.teads_env) ? window.teads_env : c
    }
    const O = "https://l.teads.tv/performance/http-source",
        R = {
            INTERNAL: "internal",
            BAD_INTEGRATION: "bad_integration"
        };

    function U(t) {
        return "[object Function]" === toString.call(t)
    }

    function x(t) {
        let n = "";
        const e = function(t) {
                let n = t,
                    e = !1;
                try {
                    for (let t = 0; n.parent.document !== n.document || t < 50; t += 1) {
                        if (!n.parent.document) {
                            e = !0;
                            break
                        }
                        n = n.parent
                    }
                } catch (t) {
                    e = !0
                }
                return {
                    topFrame: n,
                    err: e
                }
            }(t),
            {
                topFrame: o
            } = e;
        if (e.err) try {
            n = o.top.location.href
        } catch (t) {
            n = o.location.href
        } else n = o.location.href;
        return n
    }

    function X(n, e, o) {
        try {
            const i = {
                errorMessage: n,
                topUrl: x(window),
                userAgent: void 0 !== window.navigator && void 0 !== window.navigator.userAgent ? window.navigator.userAgent : "",
                exception: e || "",
                version: t,
                type: o || R.BAD_INTEGRATION
            };
            n = JSON.stringify(i)
        } catch (t) {}
        document.createElement("img").src = "".concat(O, "?").concat(encodeURIComponent(n))
    }

    function j(t) {
        const n = ["account", "password", "pass", "secret", "secretkey", "username", "user", "login", "ordernumber", "orderid", "email", "mail", "user.email", "user.password", "user.name", "user.mail", "user.lastname", "user.firstname", "user.phone", "user.phonenumber", "lastname", "firstname", "name", "address", "phonenumber", "phone", "client_secret", "guid"];
        if ("" !== t) {
            const e = t.split("?").length > 1 ? t.split("?")[1] : void 0;
            if (void 0 !== e) {
                let o = "".concat(t.split("?")[0], "?");
                const i = e.split("&");
                for (let t = 0; t < i.length; t += 1) {
                    const e = i[t].split(/=(.+)/);
                    o = "".concat(o + (0 === t ? "" : "&") + e[0], "=").concat(n.indexOf(e[0]) >= 0 ? "XXXXXXXX" : e[1])
                }
                t = o
            }
        }
        return t
    }

    function F(t) {
        try {
            const n = new RegExp("(?:\\?|&|%3F|%26)auctid(?:=|%3D)([0-9a-zA-Z-_]*)").exec(t);
            if (n && n.length >= 2) return n[1]
        } catch (t) {
            X("Error when extracting Auction ID from url", null == t ? void 0 : t.message, R.INTERNAL)
        }
    }

    function M(n, e) {
        var i, a;
        const c = L(),
            r = l(),
            d = D(),
            s = function(t) {
                const n = [];
                return Object.keys(t).forEach((e => {
                    n.push("".concat(e, "=").concat(encodeURIComponent(t[e])))
                })), n.join("&")
            }(e),
            u = x(window),
            p = function(t) {
                let n = b();
                if (!n) {
                    let e = t;
                    t || (e = x(window)), n = F(e), n && (E(n), A("url"))
                }
                return n
            }(u),
            v = function() {
                const t = window.teads_auction_id_forwarded_by;
                return t ? Object.keys(t).join(",") : void 0
            }(),
            _ = P(),
            g = S(),
            f = w(),
            I = m(),
            k = y(),
            N = h(),
            C = j(u);
        let T = "?action=".concat(n, "&env=").concat(encodeURIComponent(d), "&tag_version=").concat(encodeURIComponent(t), "&provider=").concat(o);
        return s.length > 0 && (T = "".concat(T, "&").concat(s)), void 0 !== r ? T = "".concat(T, "&buyer_pixel_id=").concat(encodeURIComponent(r)) : void 0 !== c && (T = "".concat(T, "&advertiser_id=").concat(encodeURIComponent(c))), T = "".concat(T, "&referer=").concat(encodeURIComponent(C)), void 0 !== p && (T = "".concat(T, "&auctid=").concat(p)), void 0 !== v && (T = "".concat(T, "&cohort_id=").concat(v)), void 0 !== _ && (T = "".concat(T, "&user_session_id=").concat(_)), void 0 !== g && (T = "".concat(T, "&firstPartyCookieTeadsId=").concat(g)), void 0 !== (null == f || null === (i = f.data) || void 0 === i ? void 0 : i.tcString) && (T = "".concat(T, "&gdpr_consent=").concat(f.data.tcString)), null != k && k.apply ? T = "".concat(T, "&gdpr_status=12") : void 0 !== (null == k ? void 0 : k.apply) && (T = "".concat(T, "&gdpr_status=0")), k && (void 0 !== k.apply && (T = "".concat(T, "&gdpr_apply=").concat(k.apply)), void 0 !== k.teadsConsent && (T = "".concat(T, "&gtc=").concat(k.teadsConsent)), void 0 !== k.isServiceSpecific && (T = "".concat(T, "&gdpr_is_service_specific=").concat(k.isServiceSpecific)), void 0 !== k.cmpId && (T = "".concat(T, "&gdpr_cmp_id=").concat(k.cmpId)), void 0 !== k.apiVersion && (T = "".concat(T, "&gdpr_api_version=").concat(k.apiVersion))), void 0 !== (null == I || null === (a = I.data) || void 0 === a ? void 0 : a.usPrivacy) && (T = "".concat(T, "&ccpa_consent=").concat(I.data.usPrivacy)), N && (void 0 !== N.apply && (T = "".concat(T, "&ca=").concat(N.apply)), void 0 !== N.teadsConsent && (T = "".concat(T, "&ctc=").concat(N.teadsConsent))), T
    }
    const V = t => (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0] || document.getElementsByTagName("script")[0].parentNode).insertBefore(t, null),
        B = {
            auctionId: {
                key: "tfpai",
                maxAge: 2592e3,
                isJson: !0
            },
            sessionId: {
                key: "tfpsi",
                maxAge: 1800,
                isJson: !1
            },
            viewerId: {
                key: "tfpvi",
                maxAge: 7776e3,
                isJson: !1
            }
        };

    function G(t) {
        try {
            H(t, "", s(), 0, "/", "none", !0)
        } catch (n) {
            X('Error while deleting cookie on domain with key "'.concat(t, '"'), null == n ? void 0 : n.message, R.INTERNAL)
        }
    }

    function J(t, n, e) {
        try {
            H(t, n, s(), e, "/", "none", !0)
        } catch (n) {
            X('Error while setting cookie on domain with key "'.concat(t, '"'), null == n ? void 0 : n.message, R.INTERNAL)
        }
    }

    function K(t) {
        const n = "".concat(t, "="),
            e = document.cookie.split(";");
        for (let t = 0; t < e.length; t += 1)
            if (e[t] = e[t].trim(), 0 === e[t].indexOf(n)) return e[t].substring(n.length, e[t].length)
    }

    function W() {
        let t = K(B.auctionId.key);
        try {
            t ? (JSON.parse(atob(t)), t = atob(t)) : t = "{ }"
        } catch (n) {
            t = '{"'.concat(a, '":"').concat(t, '"}')
        }
        return t
    }

    function q() {
        const t = W(),
            n = b();
        if (N() && n) try {
            const e = JSON.parse(t);
            e[a] = n, J(B.auctionId.key, btoa(JSON.stringify(e)), B.auctionId.maxAge)
        } catch (t) {
            console.log(t), X("Error while updating auction ID in first-party cookie", null == t ? void 0 : t.message, R.INTERNAL)
        }
    }

    function z() {
        const t = P();
        N() && t && J(B.sessionId.key, t, B.sessionId.maxAge)
    }

    function H(t, n, e, o, i, a, c) {
        let r = "".concat(t, "=").concat(n);
        i && (r += ";path=".concat(i)), "number" == typeof o && (r += ";max-age=".concat(o)), e && (r += ";domain=.".concat(e)), a && (r += ";samesite=".concat(a)), c && (r += ";secure"), document.cookie = r
    }

    function Z(t) {
        try {
            const n = K(t.key);
            if (!n) return "";
            if (!t.isJson) return n;
            try {
                return JSON.parse(atob(n))[a]
            } catch (t) {
                return n
            }
        } catch (n) {
            X('Error while reading first-party cookie with key "'.concat(t.key, '"'), null == n ? void 0 : n.message, R.INTERNAL)
        }
        return ""
    }
    const Q = {
        PIXEL_LOADED: "TEADS_PIXEL_LOADED",
        PIXEL_DEBUG: "TEADS_PIXEL_DEBUG",
        PIXEL_EVENT: "TEADS_PIXEL_EVENT",
        SDK_PARAMETERS: "TEADS_SDK_PARAMETERS",
        ASK_PIXEL_INFO: "TEADS_ASK_PIXEL_INFO",
        PIXEL_INFO: "TEADS_PIXEL_INFO",
        CONSENT_INFO_LOADED: "TEADS_CONSENT_INFO_LOADED"
    };

    function Y(t) {
        var n, e;
        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return {
            type: t,
            id: null === (n = window) || void 0 === n ? void 0 : n.name,
            ts: Date.now(),
            host: null === (e = window) || void 0 === e || null === (e = e.location) || void 0 === e ? void 0 : e.host,
            ...o
        }
    }

    function $(t) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "*";
        try {
            var o, i;
            const a = (null === (o = window) || void 0 === o || null === (o = o.opener) || void 0 === o ? void 0 : o.top) || (null === (i = window) || void 0 === i ? void 0 : i.opener);
            U(a.postMessage) && a.postMessage(Y(t, n), e)
        } catch (t) {}
    }

    function tt(t) {
        var n;
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/";
        if (U(null === (n = window) || void 0 === n ? void 0 : n.postMessage)) try {
            window.postMessage(Y(t, e), o)
        } catch (t) {}
    }

    function nt(t) {
        var n, e, o, i, a;
        null !== (n = window) && void 0 !== n && n.opener && ((null == t || null === (o = t.data) || void 0 === o ? void 0 : o.type) === Q.PIXEL_DEBUG && (window.teads_post_message_event_to_opener = true), (null == t || null === (i = t.data) || void 0 === i ? void 0 : i.type) === Q.SDK_PARAMETERS && null != t && null !== (a = t.data) && void 0 !== a && a.teadsClickId && (E(t.data.teadsClickId), A("postMessage"), q())), (null == t || null === (e = t.data) || void 0 === e ? void 0 : e.type) === Q.ASK_PIXEL_INFO && (tt(Q.PIXEL_INFO, {
            buyerPixelId: l(),
            advertiserId: L(),
            trackingAllowed: I(),
            firstPartyCookieAllowed: N(),
            gdprAdvertiser: y(),
            ccpaAdvertiser: h(),
            advertiserDomain: s(),
            auctionId: b(),
            env: D(),
            iabData: w(),
            uspData: m(),
            gppIabData: g(),
            referer: j(x(window)),
            trackingEventsSent: window.teads_tracking_events_sent || [],
            request: t.data
        }), window.teads_post_message_event_to_window = !0)
    }

    function et(t) {
        ! function(t) {
            const n = document.createElement("img");
            n.width = 0, n.height = 0, n.alt = "", n.style.position = "absolute", n.src = t, V(n)
        }(t), u() && $(Q.PIXEL_EVENT, {
            trackingUrl: t
        }), p() && tt(Q.PIXEL_EVENT, {
            trackingUrl: t
        })
    }
    async function ot(t, n) {
        try {
            await fetch(t, {
                browsingTopics: !0,
                cache: "no-cache",
                credentials: "include",
                keepalive: !0
            }).then((() => {
                u() && $(Q.PIXEL_EVENT, {
                    trackingUrl: t
                }), p() && tt(Q.PIXEL_EVENT, {
                    trackingUrl: t
                })
            }))
        } catch (e) {
            !1 === n ? X("Unable to fire a log using fetch API", null == e ? void 0 : e.message, R.BAD_INTEGRATION) : et(t)
        }
    }

    function it(t, n, e) {
        let o, i, a = e;
        for (; !o;) {
            try {
                if ("function" == typeof a[t]) {
                    i = a[t], o = a;
                    break
                }
            } catch (t) {}
            try {
                if (a.frames[n]) {
                    o = a;
                    break
                }
            } catch (t) {}
            if (a === e.top) break;
            a = a.parent
        }
        return {
            cmpFrame: o,
            cmpFunction: i
        }
    }

    function at(t, n) {
        function e(e, o) {
            o ? !1 !== e.gdprApplies && "tcloaded" !== e.eventStatus && "useractioncomplete" !== e.eventStatus || t(e) : n("CMP unable to register callback function. Please check CMP setup.")
        }
        const o = "__tcfapi",
            i = {};

        function a(t) {
            const n = "".concat(o, "Return"),
                e = "string" == typeof t.data && "".concat(t.data).includes(n) ? JSON.parse(t.data) : t.data;
            if (e[n] && e[n].callId) {
                const t = e[n];
                void 0 !== i[t.callId] && i[t.callId](t.returnValue, t.success)
            }
        }

        function c(t, n, e) {
            const c = "".concat(o, "Call");
            window[o] = (t, e, o, a) => {
                const r = "".concat(Math.random()),
                    d = {
                        [c]: {
                            command: t,
                            version: e,
                            parameter: a,
                            callId: r
                        }
                    };
                i[r] = o, n.postMessage(d, "*")
            }, window.addEventListener("message", a, !1), window[o](t, 2, e)
        }
        const {
            cmpFrame: r,
            cmpFunction: d
        } = it("__tcfapi", "__tcfapiLocator", window);
        return !!r && (new Promise(((t, n) => {
            U(d) ? d("ping", 2, (() => t())) : c("ping", r, (() => t())), setTimeout((() => n()), 100)
        })).catch((() => n("Unable to ping the CMP"))), U(d) ? d("addEventListener", 2, e) : c("addEventListener", r, e), !0)
    }

    function ct(t, n) {
        const e = {};

        function o(t) {
            const n = t && t.data && t.data.__uspapiReturn;
            n && n.callId && void 0 !== e[n.callId] && (e[n.callId](n.returnValue, n.success), delete e[n.callId])
        }
        let i = !1;

        function a(t, n, a) {
            i || (window.addEventListener("message", o, !1), i = !0),
                function(t, o, i) {
                    const a = "".concat(Math.random()),
                        c = {
                            __uspapiCall: {
                                command: t,
                                version: 1,
                                callId: a
                            }
                        };
                    e[a] = i, n.postMessage(c, "*")
                }(t, 0, a)
        }
        const {
            cmpFrame: c,
            cmpFunction: r
        } = it("__uspapi", "__uspapiLocator", window);
        if (!c) return !1;
        new Promise(((t, n) => {
            U(r) ? r("getUSPData", 1, (() => t())) : a("getUSPData", c, (() => t())), setTimeout((() => n()), 100)
        })).catch((() => n("Unable to ping the USP")));
        const d = function() {
            const e = {};
            return {
                consentDataCallback: (o, i) => {
                    i && o.uspString && (e.usPrivacy = o.uspString), e.usPrivacy ? t(e) : n("Unable to get USP consent string.")
                }
            }
        }();
        return U(r) ? r("getUSPData", 1, d.consentDataCallback) : a("getUSPData", c, d.consentDataCallback), !0
    }
    let rt = function(t) {
            return t.Ping = "ping", t.AddEventListener = "addEventListener", t.RemoveEventListener = "removeEventListener", t
        }({}),
        dt = function(t) {
            return t.Ready = "ready", t.NotReady = "Not ready", t
        }({});

    function st(t, n, e) {
        return new Promise(((o, i) => {
            if (void 0 !== t) switch (n) {
                case rt.Ping:
                    t(n, ((t, n) => {
                        n ? o(t) : i(new Error("Ping command failed"))
                    }));
                    break;
                case rt.AddEventListener:
                    t(n, ((t, n) => {
                        n ? o(t) : i(new Error("AddEventListener command failed"))
                    }));
                    break;
                case rt.RemoveEventListener:
                    "number" == typeof e && t(n, e, (() => {}));
                    break;
                default:
                    i(new Error("Invalid GPP command"))
            }
        }))
    }
    const lt = t => t === dt.Ready,
        ut = t => null != t;
    class pt {
        constructor() {
            var t, n, e;
            t = this, e = !1, (n = function(t) {
                var n = function(t, n) {
                    if ("object" != typeof t || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var o = e.call(t, "string");
                        if ("object" != typeof o) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" == typeof n ? n : n + ""
            }(n = "isGppAvailable")) in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e;
            const {
                cmpFunction: o,
                cmpFrame: i
            } = it("__gpp", "__gppLocator", window);
            U(o) ? this.gpp = o : i && (this.gpp = pt.buildCmpFunctionWithPostMessage(i)), this.isGppAvailable = "function" == typeof this.gpp
        }
        static buildCmpFunctionWithPostMessage(t) {
            const n = {},
                e = "__gpp",
                o = "".concat(e, "Call");
            return t.addEventListener("message", (function(t) {
                const o = "".concat(e, "Return"),
                    i = "string" == typeof t.data && "".concat(t.data).includes(o) ? JSON.parse(t.data) : t.data;
                if (i[o] && i[o].callId) {
                    const t = i[o];
                    "function" == typeof n[t.callId] && n[t.callId](t.returnValue, t.success)
                }
            }), !1), (e, i, a) => {
                const c = "".concat(Math.random()),
                    r = {
                        [o]: {
                            command: e,
                            version: "1.1",
                            callId: c
                        }
                    };
                e === rt.RemoveEventListener ? n[c] = a : n[c] = i, t.postMessage(r, "*")
            }
        }
        async retrieveConsent(t, n) {
            if (this.isGppAvailable) try {
                let e;
                const o = await Promise.race([st(this.gpp, rt.Ping), new Promise(((t, o) => {
                    e = setTimeout((() => {
                        n("GPP ping timed out"), o("Unable to ping the GPP CMP")
                    }), 100)
                }))]);
                if (clearTimeout(e), lt(o.signalStatus) && ut(o.gppString)) return void t({
                    applicableSections: o.applicableSections,
                    gppString: o.gppString
                });
                const i = await st(this.gpp, rt.AddEventListener);
                st(this.gpp, rt.RemoveEventListener, i.listenerId);
                const {
                    pingData: a
                } = i;
                if (!lt(a.signalStatus)) return void n("CMP is expecting changes, consent data is not available yet");
                if (!ut(a.gppString)) return void n("Expected gppString to be a string but got null or undefined");
                const c = i.pingData;
                t({
                    applicableSections: c.applicableSections,
                    gppString: c.gppString
                })
            } catch (t) {
                n("Error during GPP command call: ".concat(t))
            }
        }
        retrieveConsentWithoutHolding(t, n) {
            let e = !1,
                o = !1;
            this.retrieveConsent((n => {
                o || (e = !0, t(n))
            }), (t => {
                e || (o = !0, n(t))
            }))
        }
    }

    function vt(t, n) {
        const e = new pt;
        return e.isGppAvailable && e.retrieveConsentWithoutHolding(t, n), e.isGppAvailable
    }

    function wt(t, n) {
        return new Promise((e => {
            t((t => {
                n({
                    data: t
                }), e()
            }), (t => {
                n({
                    error: t
                }), e()
            })) || e()
        }))
    }
    const _t = {
        conversionType: "conversion_type",
        price: "aepp",
        currency: "aepc",
        name: "aepn"
    };
    async function gt(t) {
        if (!I()) return;
        const e = function(t, n) {
                const e = {};
                return Object.keys(t).forEach((n => {
                    const o = n,
                        i = t[n];
                    Object.prototype.hasOwnProperty.call(_t, o) ? e[_t[o]] = i + "" : X("Invalid parameter specified in event: ".concat(o))
                })), e
            }(t),
            o = n + M("conversion", e);
        et(o), C(o), async function(t) {
            if (window.obApi && function(t) {
                    return ["AddToCart", "AddToWishlist", "CompleteRegistration", "InitiateCheckout", "Lead", "Purchase", "ViewContent", "Search"].includes(t.conversionType)
                }(t)) {
                const o = { ...t
                };
                var n, e;
                delete o.conversionType, delete o.name, Object.keys(o).length > 0 ? window.obApi("track", null !== (n = t.name) && void 0 !== n ? n : t.conversionType, o) : window.obApi("track", null !== (e = t.name) && void 0 !== e ? e : t.conversionType)
            }
        }(t)
    }
    const ft = t => {
            const {
                auctionId: n,
                gdpr: e,
                ccpa: o,
                firstPartyCookieAllowed: i,
                domain: a,
                trackingAllowed: c
            } = t;
            var r, d, s, l;
            r = i, window.first_party_cookie_allowed = r, d = c, window.teads_tracking_allowed = d, e && (s = e, window.teads_gdpr_advertiser = s), o && function(t) {
                window.teads_ccpa_advertiser = t
            }(o), a && (l = a, window.advertiser_domain = l), n && (E(n), A("url"))
        },
        mt = t => {
            if (t) {
                const t = Z(B.auctionId);
                if (t) {
                    const n = b();
                    n && n !== t || A("cookie"), n || E(t)
                }
                return q(), t
            }
            return G(B.auctionId.key), null
        },
        yt = (t, n, e, o) => {
            if (t) {
                const t = Z(B.sessionId);
                n && e && n !== e ? k(o) : t ? k(t) : o && k(o), z()
            } else o && k(o), G(B.sessionId.key)
        },
        ht = (t, n) => {
            if (n && t) {
                const t = Z(B.viewerId);
                e = t || n, window.teads_viewer_id = e,
                    function() {
                        const t = S();
                        N() && t && J(B.viewerId.key, t, B.viewerId.maxAge)
                    }()
            } else G(B.viewerId.key);
            var e
        };
    async function It() {
        try {
            const t = await async function() {
                    const t = x(window),
                        n = function(t) {
                            var n, e, o;
                            const i = L(),
                                a = l();
                            let c = "referer=".concat(encodeURIComponent(t));
                            void 0 !== a ? c += "&buyer_pixel_id=".concat(encodeURIComponent(a)) : void 0 !== i && (c += "&advertiser_id=".concat(encodeURIComponent(i)));
                            const r = w();
                            var d, s;
                            r && (void 0 !== (null == r || null === (d = r.data) || void 0 === d ? void 0 : d.gdprApplies) && (c += "&gdpr_applies=".concat(encodeURIComponent(r.data.gdprApplies))), null != r && null !== (s = r.data) && void 0 !== s && s.tcString && (c += "&gdpr_consent=".concat(encodeURIComponent(r.data.tcString))), null != r && r.error && (c += "&gdpr_error=".concat(encodeURIComponent(r.error))));
                            const u = m();
                            null != u && null !== (n = u.data) && void 0 !== n && n.usPrivacy && (c += "&ccpa_consent=".concat(encodeURIComponent(u.data.usPrivacy))), null != u && u.error && (c += "&ccpa_error=".concat(encodeURIComponent(u.error)));
                            const p = g();
                            null != p && null !== (e = p.data) && void 0 !== e && e.applicableSections && (c += "&gpp_applicable_sections=".concat(encodeURIComponent(p.data.applicableSections.join(",")))), null != p && null !== (o = p.data) && void 0 !== o && o.gppString && (c += "&gpp_consent=".concat(encodeURIComponent(p.data.gppString))), null != p && p.error && (c += "&gpp_error=".concat(encodeURIComponent(p.error)));
                            const v = function() {
                                const t = K("optout");
                                if (t) return "1" === t
                            }();
                            return void 0 !== v && (c += "&web_opt_out=".concat(encodeURIComponent(v))), c
                        }(t);
                    try {
                        const t = await fetch("".concat(e, "?").concat(n), {
                            cache: "no-cache"
                        });
                        if (200 === (null == t ? void 0 : t.status)) {
                            var o, i, a, c, r, d, s, u;
                            const n = await t.json();
                            return {
                                trackingAllowed: !1 !== (null == n ? void 0 : n.tracking_allowed),
                                firstPartyCookieAllowed: !0 === (null == n ? void 0 : n.first_party_cookie_allowed),
                                sessionId: null == n ? void 0 : n.session_id,
                                auctionId: null == n ? void 0 : n.auction_id,
                                viewerId: null == n ? void 0 : n.user_id,
                                domain: null == n ? void 0 : n.domain,
                                ccpa: null != n && n.ccpa ? {
                                    apply: null === (o = n.ccpa) || void 0 === o ? void 0 : o.apply,
                                    teadsConsent: null === (i = n.ccpa) || void 0 === i ? void 0 : i.teads_consent
                                } : void 0,
                                gpp: null != n && n.gpp ? {
                                    apply: null === (a = n.gpp) || void 0 === a ? void 0 : a.apply,
                                    teadsConsent: null === (c = n.gpp) || void 0 === c ? void 0 : c.teads_consent
                                } : void 0,
                                gdpr: null != n && n.gdpr ? {
                                    apply: null === (r = n.gdpr) || void 0 === r ? void 0 : r.apply,
                                    teadsConsent: null === (d = n.gdpr) || void 0 === d ? void 0 : d.teads_consent,
                                    apiVersion: null === (s = n.gdpr) || void 0 === s ? void 0 : s.api_version,
                                    cmpId: null === (u = n.gdpr) || void 0 === u ? void 0 : u.cmp_id,
                                    isServiceSpecific: null == n ? void 0 : n.gdpr.is_service_specific
                                } : void 0,
                                outbrainAdvertiserId: null == n ? void 0 : n.outbrain_advertiser_id
                            }
                        }
                    } catch (t) {
                        X("Error while trigger API to know advertiser information", null == t ? void 0 : t.message, R.INTERNAL)
                    }
                    const p = F(t);
                    return p ? {
                        trackingAllowed: !0,
                        firstPartyCookieAllowed: !1,
                        auctionId: p
                    } : {
                        trackingAllowed: !0,
                        firstPartyCookieAllowed: !1
                    }
                }(),
                {
                    sessionId: n,
                    auctionId: o,
                    viewerId: i,
                    outbrainAdvertiserId: a
                } = t;
            a && async function(t) {
                const n = '\n    !function(_window, _document) {\n        var OB_ADV_ID = "'.concat(t, "\";\n        if (_window.obApi) {\n          var toArray = function(object) {\n            return Object.prototype.toString.call(object) === '[object Array]' ? object : [object];\n          };\n          _window.obApi.marketerId = toArray(_window.obApi.marketerId).concat(toArray(OB_ADV_ID));\n          return;\n        }\n        var api = _window.obApi = function() {\n          api.dispatch ? api.dispatch.apply(api, arguments) : api.queue.push(arguments);\n        };\n        api.version = '3.0';\n        api.loaded = true;\n        api.loadedBy = 'teads';\n        api.marketerId = OB_ADV_ID;\n        api.queue = [];\n        var tag = _document.createElement('script');\n        tag.async = true;\n        tag.src = '//obtp.teads.tv/cp/obtp.js';\n        tag.type = 'text/javascript';\n        var script = _document.getElementsByTagName('script')[0];\n        script.parentNode.insertBefore(tag, script);\n      }(window, document);\n\n      obApi('track', 'PAGE_VIEW');\n    "),
                    e = document.createElement("script");
                e.textContent = n, e.async = !0, e.defer = !0, e.type = "text/javascript", document.head.appendChild(e)
            }(a).catch((t => X("Error while injecting Outbrain pixel", null == t ? void 0 : t.message))), ft(t);
            const c = N(),
                r = mt(c);
            yt(c, r, o, n), ht(c, i), p() && tt(Q.CONSENT_INFO_LOADED, {
                trackingAllowed: I(),
                firstPartyCookieAllowed: N(),
                gdprAdvertiser: y(),
                ccpaAdvertiser: h(),
                advertiserDomain: s(),
                auctionId: b(),
                iabData: w(),
                uspData: m()
            })
        } catch (t) {
            X("Error while initializing advertiser", null == t ? void 0 : t.message, R.INTERNAL)
        }
    }
    const Et = async () => {
            const t = n + M("pageView", {});
            et(t), C(t), await ot(n + M("browser-topics", {}), !1)
        },
        bt = () => {
            const t = M("timeSpent", {}),
                e = n + t;
            T(!1), document.addEventListener("visibilitychange", (t => () => {
                "hidden" === document.visibilityState && !0 !== d && (T(!0), async function(t, n) {
                    try {
                        const n = navigator.sendBeacon && navigator.sendBeacon.bind(navigator);
                        if (!n || !n(t)) throw new Error("Beacon not sent");
                        u() && $(Q.PIXEL_EVENT, {
                            trackingUrl: t
                        }), p() && tt(Q.PIXEL_EVENT, {
                            trackingUrl: t
                        })
                    } catch (n) {
                        await ot(t, !0)
                    }
                }(t), z(), C(t))
            })(e))
        },
        At = () => {
            const t = window.teads_e || [];
            window.teads_e = [], window.teads_e.push = function() {
                for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                return Array.prototype.push.apply(this, n), async function() {
                    if (void 0 !== window.teads_e) {
                        const t = [];
                        for (; window.teads_e.length;) t.push(gt(window.teads_e.shift()));
                        try {
                            await Promise.all(t)
                        } catch (t) {
                            X("Error while sending event based conversion", null == t ? void 0 : t.message, R.INTERNAL)
                        }
                        z()
                    } else X("The event queue is not defined.")
                }(), window.teads_e.length
            }, window.teads_e.push(...t)
        };
    async function kt() {
        const t = L(),
            n = l();
        "number" != typeof t && "number" != typeof n || (await It(), await async function() {
            I() && (await Et(), await bt(), At())
        }())
    }
    async function Pt() {
        try {
            window.teads_adv_id || Object.defineProperty(window, "teads_adv_id", {
                set(t) {
                    this._teads_adv_id = t, kt()
                },
                get() {
                    return this._teads_adv_id
                },
                configurable: !0
            }), window.teads_buyer_pixel_id || Object.defineProperty(window, "teads_buyer_pixel_id", {
                set(t) {
                    this._teads_buyer_pixel_id = t, kt()
                },
                get() {
                    return this._teads_buyer_pixel_id
                },
                configurable: !0
            })
        } catch (t) {
            X("Error while binding advertiser and pixel ids", null == t ? void 0 : t.message)
        }
        try {
            window.teads_setOutbrainCookieOnTeads || (window.teads_setOutbrainCookieOnTeads = function(t) {
                const n = W(),
                    e = JSON.parse(n);
                e[i] = t, J(B.auctionId.key, btoa(JSON.stringify(e)), B.auctionId.maxAge)
            }), window.teads_getOutbrainCookieFromTeads || (window.teads_getOutbrainCookieFromTeads = function() {
                const t = W();
                return JSON.parse(t)[i]
            })
        } catch (t) {
            X("Error while loading Outbrain", null == t ? void 0 : t.message)
        }
        await kt()
    }!async function(t) {
        try {
            "undefined" != typeof window && (U(null === (n = window) || void 0 === n ? void 0 : n.addEventListener) && ($(Q.PIXEL_LOADED), tt(Q.PIXEL_LOADED), window.addEventListener("message", nt)), await new Promise(((t, n) => {
                setTimeout((() => {
                    Promise.all([wt(at, v), wt(ct, f), wt(vt, _)]).then((() => Pt())).then(t).catch(n)
                }), 0)
            })))
        } catch (t) {
            X("Unhandled exception", null == t ? void 0 : t.message, R.INTERNAL)
        }
        var n
    }()
})();








