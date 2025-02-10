/* Use of this pixel is subject to the Amazon ad specs and policies at http://www.amazon.com/b/?&node=7253015011. Version number: 6, Changeset: Adding in phone number support for setUserData */
this.amzn = this.amzn || {}, this.amzn.js = function() {
    "use strict";
    const e = 1e3,
        t = 864e5;
    var n = {
        NAME_MAX_LENGTH: 256,
        EVENT_PARAMETER_MAX_VALUE_LENGTH: 1e3,
        EVENT_NAME_EXCEEDED_MAX_LENGTH_WARNING: "Length of event's name is longer than 256 characters.",
        EVENT_PARAMETER_NAME_EXCEEDED_MAX_LENGTH_WARNING: "Length of event's parameter name exceeds 256 characters.",
        EVENT_PARAMETER_VALUE_EXCEEDED_MAX_LENGTH_WARNING: "Length of event's parameter value exceeds 1000 characters.",
        EVENT_PARAMETER_KEY_EXCEEDED_MAX_LENGTH_WARNING: "Length of event's parameter key exceeds 256 characters.",
        AMZN_TOKEN_COOKIE_NAME: "aatToken",
        AMZN_TOKEN_URL_QUERY_PARAM_NAME: "amznToken",
        NO_CONSENT_COOKIE_NAME: "AMZN-NoCookieConsent",
        MT_LP_QUERY_PARAM: "aref",
        MTS_EVENT_ATTRIBUTE: "arefs",
        MEASUREMENT_TOKEN_COOKIE_NAME: "amznAref",
        MS_IN_SEC: e,
        MS_IN_HOUR: 36e5,
        MS_IN_DAY: t,
        MEASUREMENT_TOKEN_TTL_IN_MS: 2592e6,
        NUM_MAX_MEASUREMENT_TOKENS: 147,
        MEASUREMENT_TOKEN_TIMESTAMP_PAIR_DELIMITER: "|",
        MEASUREMENT_TIMESTAMP_SEPARATOR: ".",
        MT_TS_PAIR_TS_INDEX: 1,
        NEWEST_MEASUREMENT_TOKEN_INDEX: 0,
        ARBITRARY_PAST_UNIX_TIMESTAMP: 1,
        AMAZON_CONSENT_AIPES_ENABLED: !1,
        AIPES_AMAZON_CONSENT_STRING_FIELD_NAME: "amazonConsentString",
        AIPES_AMAZON_CONSENT_GEO_FIELD_NAME: "geo",
        AIPES_AMAZON_CONSENT_CONSENT_FIELD_NAME: "consent",
        AIPES_AMAZON_CONSENT_AMAZON_CONSENT_FIELD_NAME: "amazonConsentFormat",
        AIPES_AMAZON_CONSENT_AD_STORAGE_FIELD_NAME: "amzn_ad_storage",
        AIPES_AMAZON_CONSENT_USER_DATA_FIELD_NAME: "amzn_user_data",
        AIPES_AMAZON_CONSENT_GPP_FIELD_NAME: "gpp",
        AIPES_AMAZON_CONSENT_TCF_FIELD_NAME: "tcf",
        AIPES_AMAZON_CONSENT_COUNTRY_CODE_FIELD_NAME: "countryCode",
        AIPES_AMAZON_CONSENT_IP_ADDRESS_FIELD_NAME: "ipAddress",
        REPORTING_ATTRIBUTES: ["brand", "country", "productId", "attr1", "attr2", "attr3", "attr4", "attr5", "attr6", "attr7", "attr8", "attr9", "attr10"],
        REPORTING_ATTRIBUTE_MAX_LENGTH: 256,
        REPORTING_ATTRIBUTE_NOT_ALLOWED_CHARACTERS_REGEX: /[^a-zA-Z0-9_]/,
        REPORTING_ATTRIBUTE_SPACE_REPLACEMENT_REGEX: /(?<=\S)\s+(?=\S)/g,
        REPORTING_ATTRIBUTE_MAX_LENGTH_WARNING: "Length of attribute is longer than 100 characters.",
        REPORTING_ATTRIBUTE_PROHIBITED_CHARACTERS_WARNING: "Attribute may only contain letters, numbers, and the underscore character.",
        REPORTING_ATTRIBUTE_VALUE_NOT_STRING_WARNING: "Attribute must be a string and cannot be an object or array.",
        CHROME_EXTENSION_ID: "lfljgabnenicfhcbbfflijkeoebncchk",
        GDPR_VALUES: ["gdpr", "gdpr_pd", "gdpr_consent"]
    };
    const o = n,
        r = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
    var a = {
        isEmpty: function(e) {
            return null == e || "" === e || 0 === Object.keys(e).length || 0 === e.length
        },
        isValidAdTag: function(e) {
            return e && r.test(e)
        },
        measurementTokenTimestampPairsNestedArrToMeasurementTokenCookie: function(e) {
            return e.map((e => e.join(o.MEASUREMENT_TIMESTAMP_SEPARATOR))).join(o.MEASUREMENT_TOKEN_TIMESTAMP_PAIR_DELIMITER)
        },
        measurementTokenCookieToMeasurementTokenTimestampPairsNestedArr: function(e) {
            return e ? e.split(o.MEASUREMENT_TOKEN_TIMESTAMP_PAIR_DELIMITER).map((e => {
                const [t, n] = e.split(o.MEASUREMENT_TIMESTAMP_SEPARATOR);
                return [t, Number(n)]
            })) : []
        }
    };
    const s = n;

    function i() {}
    i.prototype.isCookiePresent = function(e) {
        return document.cookie.split(";").some((t => t.trim().startsWith(`${e}=`)))
    }, i.prototype.getCookieValue = function(e) {
        return document.cookie.split(";").find((t => t.trim().startsWith(`${e}=`))) ? .split("=")[1]
    }, i.prototype.writeCookie = function(e, t, n) {
        const o = new Date(n).toUTCString();
        document.cookie = `${e}=${t}; expires=${o}; SameSite=Strict; secure=true;`
    }, i.prototype.deleteCookie = function(e) {
        this.writeCookie(e, "0", s.ARBITRARY_PAST_UNIX_TIMESTAMP)
    };
    var c = i;
    const E = n,
        _ = c,
        {
            isEmpty: A,
            isValidAdTag: d
        } = a,
        u = ["gdpr", "gdpr_pd", "gdpr_consent"];

    function T(e, t, n) {
        e.searchParams.set(t, n);
        const o = Array.from(e.searchParams.entries());
        e.search = "", o.forEach((n => {
            n[0] !== t && e.searchParams.set(n[0], n[1])
        })), e.search += `&${t}=${n}`
    }
    var N = {
        createQueryParams: function(e, {
            tagId: t,
            eventName: n,
            eventAttributes: o,
            consent: r,
            uuid: a,
            amazonConsent: s
        }) {
            const i = "string" == typeof e ? new URL(e) : e;
            if (A(t)) throw Error("Tag ID is a required parameter.");
            if (!d(t)) throw Error("Invalid ad tag provided.");
            if (i.searchParams.set("pid", t), A(n)) throw Error("Event name is a required parameter.");
            if (i.searchParams.set("event", n), Array.isArray(o) && T(i, "items", encodeURI(JSON.stringify(o))), o && Object.entries(o).forEach((([e, t]) => {
                    u.includes(e) || (t || "" === t) && ("object" == typeof t ? i.searchParams.set(e, JSON.stringify(t)) : i.searchParams.set(e, t))
                })), r && u.forEach((e => {
                    r[e] && i.searchParams.set(e, r[e])
                })), s && i.searchParams.set("consentString", JSON.stringify(s)), _.prototype.isCookiePresent.call({}, E.AMZN_TOKEN_COOKIE_NAME)) {
                const e = _.prototype.getCookieValue.call({}, E.AMZN_TOKEN_COOKIE_NAME);
                e && T(i, E.AMZN_TOKEN_URL_QUERY_PARAM_NAME, e)
            }
            const c = _.prototype.getCookieValue.call({}, E.MEASUREMENT_TOKEN_COOKIE_NAME);
            return c && i.searchParams.set(E.MTS_EVENT_ATTRIBUTE, c), i.searchParams.set("eventSource", "amzn.js"), a && i.searchParams.set("uuid", a), i
        }
    };
    const {
        createQueryParams: p
    } = N, h = {
        "Google Chrome": 106,
        Chromium: 106
    }, l = "paa-reporting-advertising.amazon";

    function m(e) {
        const t = "/assets/conversion_module.js";
        switch (e.toLowerCase()) {
            case "beta":
            case "test":
                return `https://beta-ara.${l}${t}`;
            case "gamma":
                return `https://gamma-ara.${l}${t}`;
            default:
                return `https://ara.${l}${t}`
        }
    }

    function f() {
        const {
            userAgentData: e
        } = navigator;
        return null != e && e.brands.some((({
            brand: e,
            version: t
        }) => h[e] <= t))
    }

    function g() {
        return document ? .featurePolicy ? .allowsFeature ? .("attribution-reporting") && document ? .featurePolicy ? .allowsFeature ? .("private-aggregation") && document ? .featurePolicy ? .allowsFeature ? .("shared-storage")
    }
    async function M(e, t) {
        try {
            const n = m(t);
            if (e && n) {
                const t = await e.json();
                if (!t || 0 === Object.keys(t).length || "healthy" === t) return Promise.resolve(!1);
                return (await (sharedStorage ? .createWorklet(n, {
                    dataOrigin: "script-origin"
                }))).run("conversion-module", {
                    data: t,
                    privateAggregationConfig: {
                        contextId: t ? .debugKey
                    }
                })
            }
        } catch (e) {}
        return Promise.resolve(!1)
    }
    var R = {
        performTriggerRegistration: async function(e) {
            const {
                stage: t
            } = e;
            if (!f()) return Promise.resolve(!1);
            if (!g()) return Promise.resolve(!1);
            const n = function(e) {
                    let t;
                    switch (e.toLowerCase()) {
                        case "beta":
                        case "test":
                            t = `https://beta-ara.${l}/aat`;
                            break;
                        case "gamma":
                            t = `https://gamma-ara.${l}/aat`;
                            break;
                        default:
                            t = `https://ara.${l}/aat`
                    }
                    return new URL(t)
                }(t),
                o = p(n, e),
                r = await async function(e) {
                    const t = {
                        credentials: "same-origin",
                        keepalive: !0,
                        attributionReporting: {
                            eventSourceEligible: !1,
                            triggerEligible: !0
                        }
                    };
                    let n;
                    try {
                        n = await (window ? .fetch(e, t))
                    } catch (e) {}
                    return n
                }(o.href);
            return M(r, t), r
        },
        generateUUID: function() {
            return f() && g() && "undefined" != typeof crypto && "function" == typeof crypto.randomUUID ? crypto.randomUUID() : ""
        },
        generateWorkletUrl: m,
        runSharedStorageWorklet: M
    };
    const I = n;

    function O(e, t, n) {
        e.length > I.NAME_MAX_LENGTH && t.push(`${n}, ${e}`)
    }
    var S = {
        validateLength: O,
        validateEventAttributesAsArray: function(e, t) {
            e.forEach((function(e) {
                O(Object.keys(e)[0], t, I.EVENT_PARAMETER_NAME_EXCEEDED_MAX_LENGTH_WARNING), O(e[Object.keys(e)[0]], t, I.EVENT_PARAMETER_VALUE_EXCEEDED_MAX_LENGTH_WARNING)
            }))
        },
        filterGdprValuesOut: function(e) {
            return !I.GDPR_VALUES.includes(e)
        },
        validateCustomAttributesForReporting: function(e, t) {
            let n;
            const o = t[e];
            let r = o;
            return I.REPORTING_ATTRIBUTES.includes(e) && (n = {}, n[e] = {
                messages: []
            }, o.length > I.REPORTING_ATTRIBUTE_MAX_LENGTH && n[e].messages.push(I.REPORTING_ATTRIBUTE_MAX_LENGTH_WARNING), "string" == typeof o ? I.REPORTING_ATTRIBUTE_NOT_ALLOWED_CHARACTERS_REGEX.test(r) && n[e].messages.push(I.REPORTING_ATTRIBUTE_PROHIBITED_CHARACTERS_WARNING) : n[e].messages.push(I.REPORTING_ATTRIBUTE_VALUE_NOT_STRING_WARNING), 0 === n[e].messages.length ? n = void 0 : n[e].value = r), {
                eventReportingAttributeWarnings: n,
                newAttributeValue: r
            }
        },
        validateAttributeValueAsObject: function(e, t) {
            if ("object" == typeof e && Object.keys(e) && Object.keys(e)[0]) return Object.keys(e).forEach((function(n) {
                n.length > I.NAME_MAX_LENGTH && t.push(`${I.EVENT_PARAMETER_KEY_EXCEEDED_MAX_LENGTH_WARNING}, ${n}`), e[n].length > I.EVENT_PARAMETER_MAX_VALUE_LENGTH && t.push(`${I.EVENT_PARAMETER_VALUE_EXCEEDED_MAX_LENGTH_WARNING}, ${e[n]}`)
            })), encodeURI(JSON.stringify(e))
        },
        validateAttributeValueAsString: function(e, t) {
            "string" == typeof e && e.length > I.EVENT_PARAMETER_MAX_VALUE_LENGTH && t.push(`${I.EVENT_PARAMETER_VALUE_EXCEEDED_MAX_LENGTH_WARNING}, ${e}`)
        }
    };
    const C = n;

    function y() {
        this.amazonConsent = void 0
    }
    y.prototype.setAmazonConsent = function(e) {
        this.amazonConsent = e
    }, y.prototype.isConsentSet = function() {
        return void 0 !== this.amazonConsent
    }, y.prototype.isAipesEgressEnabled = function() {
        return this.amazonConsent.AMAZON_CONSENT_AIPES_ENABLED
    }, y.prototype.getFormattedAmazonConsent = function(e) {
        if (void 0 === this.amazonConsent) return;
        const t = {},
            n = {};
        return void 0 !== this.amazonConsent.geo && (t[C.AIPES_AMAZON_CONSENT_GEO_FIELD_NAME] = function(e) {
            const t = {};
            void 0 !== e.countryCode && (t[C.AIPES_AMAZON_CONSENT_COUNTRY_CODE_FIELD_NAME] = e.countryCode);
            void 0 !== e.ipAddress && (t[C.AIPES_AMAZON_CONSENT_IP_ADDRESS_FIELD_NAME] = e.ipAddress);
            return t
        }(this.amazonConsent.geo)), void 0 !== this.amazonConsent.amazonConsentFormat && (n[C.AIPES_AMAZON_CONSENT_AMAZON_CONSENT_FIELD_NAME] = function(e) {
            const t = {};
            void 0 !== e.amznAdStorage && (t[C.AIPES_AMAZON_CONSENT_AD_STORAGE_FIELD_NAME] = e.amznAdStorage);
            void 0 !== e.amznUserData && (t[C.AIPES_AMAZON_CONSENT_USER_DATA_FIELD_NAME] = e.amznUserData);
            return t
        }(this.amazonConsent.amazonConsentFormat)), void 0 !== this.amazonConsent.gpp && (n[C.AIPES_AMAZON_CONSENT_GPP_FIELD_NAME] = this.amazonConsent.gpp), e && void 0 !== this.amazonConsent.tcf && (n[C.AIPES_AMAZON_CONSENT_TCF_FIELD_NAME] = this.amazonConsent.tcf), t[C.AIPES_AMAZON_CONSENT_CONSENT_FIELD_NAME] = n, t
    }, y.prototype.getTcfString = function() {
        if (void 0 !== this.amazonConsent) return this.amazonConsent.tcf
    };
    var v = y;
    const P = n,
        {
            isEmpty: k,
            isValidAdTag: w
        } = a,
        {
            createQueryParams: L
        } = N,
        {
            generateUUID: D
        } = R,
        {
            validateLength: U,
            validateEventAttributesAsArray: b,
            filterGdprValuesOut: G,
            validateCustomAttributesForReporting: H,
            validateAttributeValueAsString: z,
            validateAttributeValueAsObject: K
        } = S;

    function F(e, t) {
        this.endpoints = e, this.region = "NA", this.stage = "PROD", this.tagIdsByLabels = {}, this.TCFv2 = {}, this.consentHandler = t
    }

    function V(e, t, n) {
        const o = document.createElement("iframe");
        o.style.display = "none", o.setAttribute("src", e), o.setAttribute("id", `tag_fire_${t}_${n}_${(new Date).getTime()}`), document.body.appendChild(o)
    }
    F.prototype.addTag = function({
        tagId: e,
        tagLabel: t
    }) {
        if (k(e)) return void console.warn("Tag id is required for addTag command");
        if (!w(e)) return void console.warn(`Invalid tag id provided: ${e}`);
        const n = k(t) ? e : t;
        this.tagIdsByLabels[n] = e
    }, F.prototype.getTagIds = function(e) {
        const {
            tagIdsByLabels: t
        } = this;
        return e.map((function(e) {
            return t[e] || e
        }))
    }, F.prototype.trackEvent = async function(e, t, n) {
        return this.trackEventWithTags(e, t, n, Object.keys(this.tagIdsByLabels))
    }, F.prototype.trackRequest = async function(e, t, n, o) {
        const r = this.TCFv2[e],
            a = D();
        try {
            await async function({
                eventIngestionEndpoint: e,
                consent: t,
                eventAttributes: n,
                eventName: o,
                tagId: r,
                uuid: a,
                consentHandler: s
            }) {
                const i = [],
                    c = {},
                    E = JSON.parse(JSON.stringify(n));
                if (U(o, i, P.EVENT_NAME_EXCEEDED_MAX_LENGTH_WARNING), Array.isArray(n) ? b(n, i) : n && Object.keys(n).filter(G).forEach((function(e) {
                        let t;
                        U(e, i, P.EVENT_PARAMETER_NAME_EXCEEDED_MAX_LENGTH_WARNING), t = n[e];
                        const {
                            newAttributeValue: o,
                            eventReportingAttributeWarnings: r
                        } = H(e, E);
                        if (r && (c[e] = r[e]), o ? E[e] = o : void 0 === o && delete E[e], t) {
                            z(t, i);
                            const e = K(t, i);
                            e && (t = e)
                        } else console.warn(`Key ${e} has no value`)
                    })), i.length > 0) {
                    const e = `Event has ${i.length} validation errors.`;
                    return console.warn(e), console.warn(i), Promise.reject(e)
                }
                let _ = { ...t
                };
                const A = s.getTcfString();
                s.isConsentSet() && A && (!t || t && (void 0 === t.gdpr_consent || "" === t.gdpr_consent)) && (_ = {
                    gdpr: 1,
                    gdpr_pd: 1,
                    gdpr_consent: A
                });
                const d = L(new URL(e), {
                    tagId: r,
                    eventName: o,
                    eventAttributes: E,
                    consent: _,
                    uuid: a,
                    amazonConsent: s.getFormattedAmazonConsent(!1)
                }).href;
                if (Object.keys(c).length > 0 && void 0 !== window.chrome && void 0 !== window.chrome.runtime) try {
                    window.chrome.runtime.sendMessage(P.CHROME_EXTENSION_ID, {
                        adTagEventWarnings: !0,
                        eventUrl: d,
                        attributeWarnings: c
                    })
                } catch (e) {}
                if (!window.fetch || void 0 === window.fetch) return V(d, r, o);
                try {
                    const e = await fetch(d, {
                        method: "get",
                        credentials: "include",
                        mode: "no-cors",
                        keepalive: "true"
                    });
                    return Promise.resolve(e)
                } catch (e) {
                    return console.warn("Event request via fetch failed, reverting to iframe"), V(d, r, o)
                }
            }({
                eventIngestionEndpoint: t,
                consent: r,
                eventAttributes: o,
                eventName: n,
                tagId: e,
                uuid: a,
                consentHandler: this.consentHandler
            })
        } catch (e) {
            return console.warn("Event request failed.", e), Promise.reject(e)
        }
        try {
            const {
                performTriggerRegistration: t
            } = R;
            await t({
                stage: this.stage,
                consent: this.TCFv2[e],
                tagId: e,
                eventName: n,
                eventAttributes: o,
                uuid: a
            })
        } catch (e) {
            console.warn("ARA trigger registration failed", e)
        }
        return Promise.resolve()
    }, F.prototype.trackEventWithTags = async function(e, t, n, o) {
        const r = this.getPixelEndpoint(this.region),
            a = t || {},
            s = "No eventName name specified.",
            i = "No valid endpoint.";
        if (!e) return console.warn(s), Promise.reject(s);
        if (!r) return console.warn(i), Promise.reject(i);
        n && (a.ts = n);
        const c = this.getTagIds(o).map((t => this.trackRequest(t, r, e, a)));
        return Promise.all(c)
    }, F.prototype.trackPixel = function(e, t, n) {
        const o = this;
        let r;
        const a = {};
        let s = t || "";
        s = s.split("?"), r = s.length > 1 ? s[1] : s[0], r = r.split("&"), r.forEach((function(e) {
            const t = e.split("=");
            let n, r;
            t.length <= 1 || ("ex-fargs" === t[0] ? (n = o.parsePixelArgs(t[1], "&"), a.fargs_id = n.id, a.fargs_type = n.type) : "ex-hargs" === t[0] && (r = o.parsePixelArgs(t[1], ";"), a.hargs_c = r.c, a.hargs_p = r.p))
        })), this.validatePixelData(a), Object.keys(a).forEach((function(e) {
            a[e] || delete a[e]
        })), this.trackEvent(e, a, n)
    }, F.prototype.addTCFv2 = function(e) {
        this.addTCFv2WithTags(e, Object.keys(this.tagIdsByLabels))
    }, F.prototype.addTCFv2WithTags = function(e, t) {
        const {
            TCFv2: n
        } = this;
        this.getTagIds(t).forEach((function(t) {
            n[t] = e
        }))
    }, F.prototype.getPixelEndpoint = function(e) {
        const t = this.endpoints[e.toUpperCase()];
        return "" === t || null == t ? (console.warn("Endpoint does not exist, please check your region configuration!"), null) : t
    }, F.prototype.parsePixelArgs = function(e, t) {
        let n = decodeURIComponent(e);
        const o = {};
        return n = n.replace(/\?/g, ""), n.split(t).forEach((function(e) {
            const t = e.split("=");
            if (t.length > 1) {
                const [e, n] = t;
                o[e] = n
            }
        })), o
    }, F.prototype.validatePixelData = function(e) {
        const t = e.hargs_c && e.hargs_p,
            n = e.fargs_id && e.fargs_type;
        t || n || console.warn("Invalid arguments for a trackPixel event, please check your implementation!")
    }, F.prototype.setRegion = function(e) {
        this.region = e
    }, F.prototype.setStage = function(e) {
        this.stage = e
    };
    var X = F;
    const j = n,
        {
            measurementTokenTimestampPairsNestedArrToMeasurementTokenCookie: W,
            measurementTokenCookieToMeasurementTokenTimestampPairsNestedArr: Z
        } = a,
        x = "AIPToken",
        $ = "cookieExpiry",
        B = {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "omit",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer-when-downgrade"
        };

    function Q(e) {
        this.cookieHandler = e, this.alreadySavedMeasurementToken = !1
    }
    Q.prototype.saveMeasurementTokenInURLToCookieIfPresent = function(e) {
        try {
            if ("NA" !== e.toUpperCase() || this.alreadySavedMeasurementToken) return;
            const t = new URLSearchParams(window.location.search).get(j.MT_LP_QUERY_PARAM);
            if (!t) return;
            let n = this.cookieHandler.getCookieValue(j.MEASUREMENT_TOKEN_COOKIE_NAME);
            n ? .split(j.MEASUREMENT_TOKEN_TIMESTAMP_PAIR_DELIMITER).length >= j.NUM_MAX_MEASUREMENT_TOKENS && (n = W(Z(n).slice(0, -1)));
            const o = Math.round(performance.timeOrigin),
                r = W([
                    [t, o]
                ].concat(Z(n))),
                a = o + j.MEASUREMENT_TOKEN_TTL_IN_MS;
            this.cookieHandler.writeCookie(j.MEASUREMENT_TOKEN_COOKIE_NAME, r, a), this.alreadySavedMeasurementToken = !0
        } catch (e) {}
    }, Q.prototype.removeAnyExpiredMeasurementTokens = function() {
        try {
            const e = this.cookieHandler.getCookieValue(j.MEASUREMENT_TOKEN_COOKIE_NAME);
            if (!e) return;
            const t = (new Date).getTime() - j.MEASUREMENT_TOKEN_TTL_IN_MS,
                n = Z(e).filter((([, e]) => e > t));
            if (0 === n.length) return void this.cookieHandler.deleteCookie(j.MEASUREMENT_TOKEN_COOKIE_NAME);
            const o = W(n),
                r = n[j.NEWEST_MEASUREMENT_TOKEN_INDEX][j.MT_TS_PAIR_TS_INDEX] + j.MEASUREMENT_TOKEN_TTL_IN_MS;
            this.cookieHandler.writeCookie(j.MEASUREMENT_TOKEN_COOKIE_NAME, o, r)
        } catch (e) {}
    }, Q.prototype.formatRequestBody = function(e) {
        const t = {};
        if (null !== e.gdpr && (t.gdpr = e.gdpr.enabled ? 1 : 0, null !== e.gdpr.consent && (t.gdprConsent = e.gdpr.consent)), null === e.hashedRecords) throw Error("hashedRecords array is null");
        if (0 === e.hashedRecords.length) throw Error("hashedRecords array is empty");
        return t.hashedRecords = e.hashedRecords, null !== e.ttl && (t.ttl = e.ttl), void 0 !== e.consentString && (t[j.AIPES_AMAZON_CONSENT_STRING_FIELD_NAME] = e.consentString), t
    }, Q.prototype.requestAmznToken = async function(e) {
        const t = { ...B,
                body: JSON.stringify(e)
            },
            n = await fetch("https://tk.amazon-adsystem.com/envelope", t);
        if (n.ok) {
            return await n.json()
        }
        const o = await n.text();
        throw Error(o)
    }, Q.prototype.renewAmznToken = async function(e) {
        if (!this.cookieHandler.isCookiePresent(j.AMZN_TOKEN_COOKIE_NAME) && !this.cookieHandler.isCookiePresent(j.NO_CONSENT_COOKIE_NAME)) try {
            const t = this.formatRequestBody(e),
                n = await this.requestAmznToken(t);
            return "" === n[x] ? this.cookieHandler.writeCookie(j.NO_CONSENT_COOKIE_NAME, n[x], n[$]) : this.cookieHandler.writeCookie(j.AMZN_TOKEN_COOKIE_NAME, n[x], n[$]), n
        } catch (e) {
            console.error(e)
        }
        return "no-op"
    }, Q.prototype.deleteAmznToken = async function() {
        this.cookieHandler.isCookiePresent(j.AMZN_TOKEN_COOKIE_NAME) && this.cookieHandler.deleteCookie(j.AMZN_TOKEN_COOKIE_NAME), this.cookieHandler.isCookiePresent(j.NO_CONSENT_COOKIE_NAME) && this.cookieHandler.deleteCookie(j.NO_CONSENT_COOKIE_NAME)
    }, Q.prototype.updateAmznToken = async function(e) {
        return await this.deleteAmznToken(), this.renewAmznToken(e)
    };
    var q = Q;
    const Y = n;

    function J(e, t) {
        this.tokensHandler = e, this.consentHandler = t
    }
    async function ee(e) {
        const t = (new TextEncoder).encode(e),
            n = await crypto.subtle.digest("SHA-256", t);
        return Array.from(new Uint8Array(n)).map((e => e.toString(16).padStart(2, "0"))).join("")
    }

    function te(e) {
        return null != e && "string" == typeof e && e.length > 0
    }
    J.prototype.setUserData = async function(e) {
        const t = {
                gdpr: {
                    enabled: !1,
                    consent: ""
                },
                hashedRecords: [],
                ttl: 9600
            },
            n = e[1];
        n.gdpr && (t.gdpr = n.gdpr), n.ttl && (t.ttl = n.ttl);
        const o = /[A-Fa-f0-9]{64}/;
        if (te(n.email)) {
            const e = {
                type: "email",
                record: ""
            };
            n.email = n.email.trim().toLowerCase(), o.test(n.email) ? e.record = n.email : e.record = await ee(n.email), t.hashedRecords.push(e)
        }
        if (te(n.phonenumber)) {
            const e = {
                type: "phonenumber",
                record: ""
            };
            o.test(n.phonenumber) ? e.record = n.phonenumber : e.record = await ee(function(e) {
                let t = e.replace(/[^\d+]+/g, "");
                return t = t.replace(/^00/, "+"), t.match(/^1/) && (t = `+${t}`), t.match(/^\+/) || (t = `+1${t}`), t = t.replace(/^\+/, ""), t
            }(n.phonenumber)), t.hashedRecords.push(e)
        }
        if (this.consentHandler.isConsentSet() && (Y.AMAZON_CONSENT_AIPES_ENABLED || this.consentHandler.isAipesEgressEnabled())) {
            t.consentString = this.consentHandler.getFormattedAmazonConsent(!1);
            const e = this.consentHandler.getTcfString();
            void 0 !== e && "" !== e && "" === t.gdpr.consent && (t.gdpr.enabled = !0, t.gdpr.consent = e)
        }
        return t.hashedRecords.length > 0 ? this.tokensHandler.updateAmznToken(t) : Promise.resolve()
    };
    var ne = J;
    const oe = "amzn-ad-tag-",
        re = ["AddToShoppingCart", "Application", "Checkout", "Contact", "Lead", "Off-AmazonPurchases", "Search", "Signup", "Subscribe"];

    function ae(e) {
        this.AD_TAG_HTML_PREFIX = oe, this.AD_TAG_EVENT_NAMES = re, this.eventTracker = e
    }

    function se(e, t, n, o, r) {
        this.eventTracker = e, this.setUserDataHandler = t, this.tokensHandler = n, this.aatEventsQueue = [], this.isSetUserDataInProcess = !1, this.consentHandler = r
    }
    ae.prototype.init = function() {
        const {
            eventTracker: e
        } = this;
        this.AD_TAG_EVENT_NAMES.forEach((function(t) {
            const n = oe + t;
            document.getElementById(n) && document.getElementById(n).addEventListener("click", (function() {
                e.trackEvent(t, {}, (new Date).getTime())
            }))
        }))
    }, ae.prototype.addEventName = function(e) {
        -1 === re.indexOf(e) && re.push(e)
    }, ae.prototype.overrideEventPrefix = function(e) {
        this.AD_TAG_HTML_PREFIX = e
    }, ae.prototype.overrideEventName = function(e, t) {
        const n = re.indexOf(e); - 1 !== n && (re[n] = t)
    }, se.prototype.processCommandQueue = async function(e) {
        const t = this,
            n = [];
        return (e || []).forEach((function(e) {
            n.push(t.processCommand(e[0], e[1]))
        })), Promise.all(n)
    }, se.prototype.processCommand = async function(e, t = (new Date).getTime()) {
        const n = Array.prototype.slice.call(e),
            o = e[0],
            r = `Unsupported tag command "${o}"`,
            a = {
                trackevent: (e, t) => this.trackEvent(e, t),
                trackpixel: (e, t) => this.trackPixel(e, t),
                pixel: (e, t) => this.withTag(e, t),
                withtag: (e, t) => this.withTag(e, t),
                addpixel: e => this.addTag(e),
                addtag: e => this.addTag(e),
                addtcfv2: e => this.addTCFv2(e),
                setregion: e => this.setRegion(e),
                setstage: e => this.setStage(e),
                setuserdata: e => this.setUserData(e)
            },
            s = o.toLowerCase();
        return a[s] ? a[s](n, t) : (console.warn(r), Promise.reject(r))
    }, se.prototype.setUserData = async function(e) {
        this.isSetUserDataInProcess = !0;
        try {
            await this.setUserDataHandler.setUserData(e), this.isSetUserDataInProcess = !1, this.processAatEventsQueue()
        } catch (e) {
            return console.warn(e), Promise.reject(e)
        }
        return Promise.resolve()
    }, se.prototype.processAatEventsQueue = function() {
        if (this.aatEventsQueue.length)
            for (; this.aatEventsQueue.length;) {
                const {
                    argumentArray: e,
                    timestamp: t,
                    tagLabel: n
                } = this.aatEventsQueue.pop();
                this.trackEvent(e, t, n).catch((e => {
                    console.warn(e)
                }))
            }
    }, se.prototype.trackEvent = async function(e, t, n) {
        if (this.isSetUserDataInProcess) return this.aatEventsQueue.unshift({
            argumentArray: e,
            timestamp: t,
            tagLabel: n
        }), Promise.resolve();
        this.tokensHandler.removeAnyExpiredMeasurementTokens();
        const o = e[1],
            r = e[2];
        return void 0 !== n ? this.eventTracker.trackEventWithTags(o, r, t, [n]) : this.eventTracker.trackEvent(o, r, t)
    }, se.prototype.trackPixel = function(e, t) {
        this.eventTracker.trackPixel("__pixel__", e[1], t)
    }, se.prototype.withTag = async function(e, t) {
        const n = e[1],
            o = e[2] || "",
            r = `Unsupported command "${o}" used after "withTag" command`;
        switch (o.toUpperCase()) {
            case "TRACKEVENT":
                return this.trackEvent(e.slice(2), t, n);
            case "ADDTCFV2":
                this.addTCFv2(e.slice(2), n);
                break;
            default:
                return console.warn(r), Promise.reject(r)
        }
        return Promise.resolve()
    }, se.prototype.addTag = function(e) {
        const t = e[2],
            n = e[1];
        this.eventTracker.addTag({
            tagId: n,
            tagLabel: t
        })
    }, se.prototype.addTCFv2 = function(e, t) {
        const n = e[1];
        void 0 !== t ? this.eventTracker.addTCFv2WithTags(n, [t]) : this.eventTracker.addTCFv2(n)
    }, se.prototype.setRegion = function(e) {
        const t = e[1].toUpperCase();
        this.eventTracker.setRegion(t), this.tokensHandler.saveMeasurementTokenInURLToCookieIfPresent(t)
    }, se.prototype.setStage = function(e) {
        const t = e[1].toUpperCase();
        this.eventTracker.setStage(t)
    }, se.prototype.listen = function() {
        this.eventListener.init()
    }, se.prototype.setAmazonConsent = function(e) {
        this.consentHandler.setAmazonConsent(e[1])
    };
    const ie = {
            NA: "https://s.amazon-adsystem.com/iu3",
            EU: "https://aax-eu.amazon-adsystem.com/s/iu3",
            FE: "https://aax-fe.amazon-adsystem.com/s/iu3"
        },
        ce = X,
        Ee = c,
        _e = q,
        Ae = ne,
        de = se,
        ue = v;
    return async function() {
        const e = new ue,
            t = new ce(ie, e),
            n = new Ee,
            o = new _e(n),
            r = new Ae(o, e);
        let a = new de(t, r, o, void 0, e);
        if (void 0 !== window.__tcfapi) {
            const t = (t, n) => {
                n && "tcloaded" === t.eventStatus && e.setAmazonConsent({
                    tcf: t.tcString
                })
            };
            window.__tcfapi("addEventListener", 2, t)
        }
        if (void 0 !== window.__gpp) {
            const t = () => {
                const t = window.__gpp("getGPPString");
                void 0 !== t && e.setAmazonConsent({
                    gpp: t
                })
            };
            window.__gpp("addEventListener", t, "tcfeuv2")
        }
        o.removeAnyExpiredMeasurementTokens(), window.amzn && window.amzn.q && a.processCommandQueue(window.amzn.q).catch((e => {
            console.error("Error processing event queue", e)
        })), window.amzn = async function(...e) {
            return a.processCommand(e).catch((e => {
                console.error("Error processing command", e)
            }))
        }, window.renewToken = async function(e) {
            return o.renewAmznToken(e)
        }, window.updateToken = async function(e) {
            return o.updateAmznToken(e)
        }, window.deleteToken = async function() {
            return o.deleteAmznToken()
        }
    }(), {}
}();