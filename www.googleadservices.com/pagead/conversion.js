(function() {
    var n, ba;

    function ca(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var da = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ea(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var fa = ea(this),
        ha = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        p = {},
        ia = {};

    function r(a, b, c) {
        if (!c || a != null) {
            c = ia[b];
            if (c == null) return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }

    function t(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = d.length === 1;
            var e = d[0],
                f;!a && e in p ? f = p : f = fa;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ha && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? da(p, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (ia[d] === void 0 && (a = Math.random() * 1E9 >>> 0, ia[d] = ha ? fa.Symbol(d) : "$jscp$" + a + "$" + d), da(f, ia[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    t("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.g = f;
            da(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    t("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, p.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = fa[b[c]];
            typeof d === "function" && typeof d.prototype[a] != "function" && da(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ja(ca(this))
                }
            })
        }
        return a
    }, "es6");

    function ja(a) {
        a = {
            next: a
        };
        a[r(p.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function u(a) {
        var b = typeof p.Symbol != "undefined" && r(p.Symbol, "iterator") && a[r(p.Symbol, "iterator")];
        if (b) return b.call(a);
        if (typeof a.length == "number") return {
            next: ca(a)
        };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }

    function ka(a) {
        return oa(a, a)
    }

    function oa(a, b) {
        a.raw = b;
        Object.freeze && (Object.freeze(a), Object.freeze(b));
        return a
    }

    function z(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var pa = ha && typeof r(Object, "assign") == "function" ? r(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) z(d, e) && (a[e] = d[e])
        }
        return a
    };
    t("Object.assign", function(a) {
        return a || pa
    }, "es6");

    function qa() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    t("globalThis", function(a) {
        return a || fa
    }, "es_2020");
    t("WeakMap", function(a) {
        function b(g) {
            this.g = (f += Math.random() + 1).toString();
            if (g) {
                g = u(g);
                for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
            }
        }

        function c() {}

        function d(g) {
            var h = typeof g;
            return h === "object" && g !== null || h === "function"
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (k.get(g) != 2 || k.get(h) != 3) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && k.get(h) == 4
                } catch (l) {
                    return !1
                }
            }()) return a;
        var e = "$jscomp_hidden_" + Math.random(),
            f = 0;
        b.prototype.set = function(g, h) {
            if (!d(g)) throw Error("Invalid WeakMap key");
            if (!z(g, e)) {
                var k = new c;
                da(g, e, {
                    value: k
                })
            }
            if (!z(g, e)) throw Error("WeakMap key fail: " + g);
            g[e][this.g] = h;
            return this
        };
        b.prototype.get = function(g) {
            return d(g) && z(g, e) ? g[e][this.g] : void 0
        };
        b.prototype.has = function(g) {
            return d(g) && z(g, e) && z(g[e], this.g)
        };
        b.prototype.delete = function(g) {
            return d(g) && z(g, e) && z(g[e], this.g) ? delete g[e][this.g] : !1
        };
        return b
    }, "es6");
    t("Map", function(a) {
        function b() {
            var h = {};
            return h.o = h.next = h.head = h
        }

        function c(h, k) {
            var l = h[1];
            return ja(function() {
                if (l) {
                    for (; l.head != h[1];) l = l.o;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var l = k && typeof k;
            l == "object" || l == "function" ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
            var m = h[0][l];
            if (m && z(h[0], l))
                for (h = 0; h < m.length; h++) {
                    var q = m[h];
                    if (k !== k && q.key !== q.key || k === q.key) return {
                        id: l,
                        list: m,
                        index: h,
                        l: q
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                l: void 0
            }
        }

        function e(h) {
            this[0] = {};
            this[1] = b();
            this.size = 0;
            if (h) {
                h = u(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || typeof a != "function" || !r(a.prototype, "entries") || typeof Object.seal != "function") return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(u([
                            [h, "s"]
                        ]));
                    if (k.get(h) != "s" || k.size != 1 || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || k.size != 2) return !1;
                    var l = r(k, "entries").call(k),
                        m = l.next();
                    if (m.done || m.value[0] != h || m.value[1] != "s") return !1;
                    m = l.next();
                    return m.done ||
                        m.value[0].x != 4 || m.value[1] != "t" || !l.next().done ? !1 : !0
                } catch (q) {
                    return !1
                }
            }()) return a;
        var f = new p.WeakMap;
        e.prototype.set = function(h, k) {
            h = h === 0 ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.l ? l.l.value = k : (l.l = {
                next: this[1],
                o: this[1].o,
                head: this[1],
                key: h,
                value: k
            }, l.list.push(l.l), this[1].o.next = l.l, this[1].o = l.l, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.l && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.l.o.next = h.l.next, h.l.next.o =
                h.l.o, h.l.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].o = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).l
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).l) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var l = r(this,
                    "entries").call(this), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        e.prototype[r(p.Symbol, "iterator")] = r(e.prototype, "entries");
        var g = 0;
        return e
    }, "es6");

    function ra(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[r(p.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    t("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return ra(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    t("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ra(this, function(b) {
                return b
            })
        }
    }, "es6");

    function sa(a, b, c) {
        if (a == null) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    t("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = sa(this, b, "endsWith");
            c === void 0 && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; e > 0 && c > 0;)
                if (d[--c] != b[--e]) return !1;
            return e <= 0
        }
    }, "es6");
    t("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) z(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    t("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) z(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    t("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ra(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    t("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    t("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || r(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    t("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return sa(this, b, "includes").indexOf(b, c || 0) !== -1
        }
    }, "es6");
    t("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return typeof b === "number" && isNaN(b)
        }
    }, "es6");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var A = this || self;

    function C(a) {
        a = parseFloat(a);
        return isNaN(a) || a > 1 || a < 0 ? 0 : a
    };

    function ta(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var ua = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        va = Array.prototype.some ? function(a, b) {
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };
    var xa, ya;
    a: {
        for (var Da = ["CLOSURE_FLAGS"], Ea = A, Fa = 0; Fa < Da.length; Fa++)
            if (Ea = Ea[Da[Fa]], Ea == null) {
                ya = null;
                break a
            }
        ya = Ea
    }
    var Ga = ya && ya[610401301];
    xa = Ga != null ? Ga : !1;

    function Ha() {
        var a = A.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Ia, Ja = A.navigator;
    Ia = Ja ? Ja.userAgentData || null : null;

    function Ka(a) {
        return xa ? Ia ? Ia.brands.some(function(b) {
            return (b = b.brand) && b.indexOf(a) != -1
        }) : !1 : !1
    }

    function D(a) {
        return Ha().indexOf(a) != -1
    };

    function E() {
        return xa ? !!Ia && Ia.brands.length > 0 : !1
    }

    function La() {
        return E() ? Ka("Chromium") : (D("Chrome") || D("CriOS")) && !(E() ? 0 : D("Edge")) || D("Silk")
    };

    function Ma(a) {
        Ma[" "](a);
        return a
    }
    Ma[" "] = function() {};
    /* 
     
     Copyright Google LLC 
     SPDX-License-Identifier: Apache-2.0 
    */
    var Na = p.globalThis.trustedTypes,
        Oa;

    function Pa() {
        var a = null;
        if (!Na) return a;
        try {
            var b = function(c) {
                return c
            };
            a = Na.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (c) {}
        return a
    }

    function Qa() {
        Oa === void 0 && (Oa = Pa());
        return Oa
    };

    function Ra(a) {
        this.g = a
    }
    Ra.prototype.toString = function() {
        return this.g + ""
    };

    function Sa(a) {
        var b = Qa();
        return new Ra(b ? b.createScriptURL(a) : a)
    }

    function Ta(a) {
        if (a instanceof Ra) return a.g;
        throw Error("");
    };
    var Va = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function Za(a) {
        this.g = a
    }
    Za.prototype.toString = function() {
        return this.g + ""
    };

    function $a(a) {
        var b = Qa();
        return new Za(b ? b.createHTML(a) : a)
    }

    function ab(a) {
        if (a instanceof Za) return a.g;
        throw Error("");
    };

    function bb(a, b) {
        a.src = Ta(b);
        var c;
        b = a.ownerDocument;
        b = b === void 0 ? document : b;
        var d;
        b = (d = (c = b).querySelector) == null ? void 0 : d.call(c, "script[nonce]");
        (c = b == null ? "" : b.nonce || b.getAttribute("nonce") || "") && a.setAttribute("nonce", c)
    };

    function cb(a, b) {
        a.write(ab(b))
    };
    var db = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function eb(a) {
        var b = a.match(db);
        a = b[5];
        var c = b[6];
        b = b[7];
        var d = "";
        a && (d += a);
        c && (d += "?" + c);
        b && (d += "#" + b);
        return d
    }

    function fb(a, b, c, d) {
        for (var e = c.length;
            (b = a.indexOf(c, b)) >= 0 && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (f == 38 || f == 63)
                if (f = a.charCodeAt(b + e), !f || f == 61 || f == 38 || f == 35) return b;
            b += e + 1
        }
        return -1
    }
    var gb = /#|$/;

    function hb(a, b) {
        var c = a.search(gb),
            d = fb(a, 0, b, c);
        if (d < 0) return null;
        var e = a.indexOf("&", d);
        if (e < 0 || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
    }
    var ib = /[?&]($|#)/;

    function jb(a, b, c) {
        for (var d = a.search(gb), e = 0, f, g = [];
            (f = fb(a, e, b, d)) >= 0;) g.push(a.substring(e, f)), e = Math.min(a.indexOf("&", f) + 1 || d, d);
        g.push(a.slice(e));
        a = g.join("").replace(ib, "$1");
        c = c != null ? "=" + encodeURIComponent(String(c)) : "";
        (b += c) ? (c = a.indexOf("#"), c < 0 && (c = a.length), d = a.indexOf("?"), d < 0 || d > c ? (d = c, e = "") : e = a.substring(d + 1, c), c = [a.slice(0, d), e, a.slice(c)], a = c[1], c[1] = b ? a ? a + "&" + b : b : a, b = c[0] + (c[1] ? "?" + c[1] : "") + c[2]) : b = a;
        return b
    };

    function kb(a) {
        return a instanceof Za ? a : $a(String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;"))
    }

    function lb(a) {
        var b = kb("");
        return $a(a.map(function(c) {
            return ab(kb(c))
        }).join(ab(b).toString()))
    }
    var mb = /^[a-z][a-z\d-]*$/i,
        nb = "APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" "),
        ob = "AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" "),
        pb = ["action", "formaction", "href"];

    function qb(a) {
        var b;
        if (!mb.test("span")) throw Error("");
        if (nb.indexOf("SPAN") !== -1) throw Error("");
        var c = "<span";
        a && (c += rb(a));
        Array.isArray(b) || (b = b === void 0 ? [] : [b]);
        ob.indexOf("SPAN") !== -1 ? c += ">" : (a = lb(b.map(function(d) {
            return d instanceof Za ? d : kb(String(d))
        })), c += ">" + a.toString() + "</span>");
        return $a(c)
    }

    function rb(a) {
        for (var b = "", c = r(Object, "keys").call(Object, a), d = 0; d < c.length; d++) {
            var e = c[d],
                f = a[e];
            if (!mb.test(e)) throw Error("");
            if (f !== void 0 && f !== null) {
                if (/^on./i.test(e)) throw Error("");
                pb.indexOf(e.toLowerCase()) !== -1 && (f = String(f), f = Va.test(f) ? f : void 0, f = f || "about:invalid#zClosurez");
                e = e + '="' + kb(String(f)) + '"';
                b += " " + e
            }
        }
        return b
    };

    function sb(a) {
        var b = qa.apply(1, arguments);
        if (b.length === 0) return Sa(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return Sa(c)
    }

    function tb(a, b, c, d) {
        function e(g, h) {
            g != null && (Array.isArray(g) ? g.forEach(function(k) {
                return e(k, h)
            }) : (b += f + encodeURIComponent(h) + "=" + encodeURIComponent(g), f = "&"))
        }
        var f = b.length ? "&" : "?";
        d.constructor === Object && (d = r(Object, "entries").call(Object, d));
        Array.isArray(d) ? d.forEach(function(g) {
            return e(g[1], g[0])
        }) : d.forEach(e);
        return Sa(a + b + c)
    };

    function ub(a) {
        try {
            var b;
            if (b = !!a && a.location.href != null) a: {
                try {
                    Ma(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function vb() {
        if (!p.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            p.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function wb(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    var yb = ta(function() {
            return va(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], xb) || Math.random() < 1E-4
        }),
        zb = ta(function() {
            return xb("MSIE")
        });

    function xb(a) {
        return Ha().indexOf(a) != -1
    }

    function F(a) {
        return /^true$/.test(a)
    }

    function Ab(a, b) {
        if (!a || !b.head) return null;
        var c = Cb("META");
        b.head.appendChild(c);
        c.httpEquiv = "origin-trial";
        c.content = a;
        return c
    }

    function Cb(a, b) {
        b = b === void 0 ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    var Db = C("0.20"),
        Eb = C("0.002"),
        Fb = C("1.0"),
        Gb = C("1.0"),
        Hb = C("0.1"),
        Wb = C("0.00"),
        Xb = C("0.00"),
        Yb = F("false"),
        Zb = F("true"),
        $b = F("true"),
        ac = F("true"),
        bc = F("true"),
        cc = F("true");
    var dc = null;

    function ec() {
        if (dc === null) {
            dc = "";
            try {
                var a = "";
                try {
                    a = A.top.location.hash
                } catch (c) {
                    a = A.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    dc = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return dc
    }

    function H(a, b, c) {
        var d = I;
        if (c ? d.g.hasOwnProperty(c) && d.g[c] == "" : 1) {
            var e;
            e = (e = ec()) ? (e = e.match(new RegExp("\\b(" + a.join("|") + ")\\b"))) ? e[0] : null : null;
            if (e) a = e;
            else a: {
                if (!zb() && !yb() && (e = Math.random(), e < b)) {
                    e = vb();
                    a = a[Math.floor(e * a.length)];
                    break a
                }
                a = null
            }
            a && a != "" && (c ? d.g.hasOwnProperty(c) && (d.g[c] = a) : d.N[a] = !0)
        }
    }

    function J(a) {
        var b = I;
        return b.g.hasOwnProperty(a) ? b.g[a] : ""
    }

    function fc() {
        var a = I,
            b = [];
        wb(a.N, function(c, d) {
            b.push(d)
        });
        wb(a.g, function(c) {
            c != "" && b.push(c)
        });
        return b
    };
    var gc = {
            fa: 2,
            oa: 13,
            na: 14,
            ka: 16,
            ia: 17,
            ga: 18,
            ea: 19,
            qa: 20,
            pa: 21,
            ca: 22,
            Y: 23
        },
        I = null;

    function hc() {
        return !!I && (J(20) == "466465926" || J(20) == "466465925")
    }

    function ic() {
        return !!I && J(16) == "592230571"
    }

    function jc() {
        return !!I && (J(22) == "512247839" || J(22) == "512247838")
    };

    function kc(a) {
        var b = b === void 0 ? A : b;
        var c, d;
        return ((c = b.performance) == null ? void 0 : (d = c.timing) == null ? void 0 : d[a]) || 0
    };

    function lc() {
        var a = mc,
            b = "J";
        if (a.J && a.hasOwnProperty(b)) return a.J;
        b = new a;
        return a.J = b
    };
    var nc = {
        la: 0,
        Z: 1,
        ma: 2,
        ba: 3,
        aa: 4
    };

    function mc() {
        this.g = {}
    }

    function oc(a, b, c) {
        typeof c === "number" && c > 0 && (a.g[b] = Math.round(c))
    }

    function pc(a) {
        var b = lc();
        var c = c === void 0 ? A : c;
        c = c.performance;
        oc(b, a, c && c.now ? c.now() : null)
    }

    function qc() {
        function a() {
            return oc(b, 0, kc("loadEventStart") - kc("navigationStart"))
        }
        var b = lc();
        kc("loadEventStart") != 0 ? a() : window.addEventListener("load", a)
    }

    function rc() {
        var a = lc();
        return r(Object, "values").call(Object, nc).map(function(b) {
            return [b, a.g[b] || 0]
        })
    };
    var sc = F("false");
    var tc = {};

    function K(a) {
        tc.TAGGING = tc.TAGGING || [];
        tc.TAGGING[a] = !0
    };

    function uc(a) {
        return typeof a === "function"
    }

    function vc(a) {
        return typeof a === "string"
    }

    function wc(a, b) {
        if (a && Array.isArray(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c])) return a[c]
    }

    function xc(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }

    function yc() {
        return new Date(Date.now())
    }

    function zc(a) {
        for (var b = 0; b < 3; ++b) try {
            var c = decodeURIComponent(a).replace(/\+/g, " ");
            if (c === a) break;
            a = c
        } catch (d) {
            return ""
        }
        return a
    };

    function Ac(a) {
        a = Bc(a);
        return $a(a)
    }

    function Bc(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a
    };
    var L = window,
        M = document,
        Cc = navigator,
        Dc = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Ec = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Fc(a, b, c) {
        b && xc(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }

    function Gc(a, b, c, d, e) {
        var f = M.createElement("script");
        Fc(f, d, Dc);
        f.type = "text/javascript";
        f.async = d && d.async === !1 ? !1 : !0;
        a = Sa(Bc(a));
        bb(f, a);
        b && (f.onload = b);
        c && (f.onerror = c);
        e ? e.appendChild(f) : (b = M.getElementsByTagName("script")[0] || M.body || M.head, b.parentNode.insertBefore(f, b))
    }

    function Hc(a, b, c) {
        var d = !1;
        d = d === void 0 ? !0 : d;
        var e = !1;
        c || (c = M.createElement("iframe"), e = !0);
        Fc(c, void 0, Ec);
        d && (c.height = "0", c.width = "0", c.style.display = "none", c.style.visibility = "hidden");
        a !== void 0 && (c.src = a);
        e && (a = M.body && M.body.lastChild || M.body || M.head, a.parentNode.insertBefore(c, a));
        b && (c.onload = b)
    }

    function Ic(a) {
        try {
            var b = Cc.sendBeacon && Cc.sendBeacon(a)
        } catch (c) {
            K(15)
        }
        b || Jc(a)
    }
    var Kc = {
        cache: "no-store",
        credentials: "include",
        keepalive: !0,
        method: "POST",
        mode: "no-cors",
        redirect: "follow"
    };

    function Lc(a) {
        if (typeof L.fetch === "function") {
            var b = r(Object, "assign").call(Object, {}, Kc);
            try {
                var c = L.fetch(a, b);
                if (c) return c.then(function() {}).catch(function() {}), !0
            } catch (d) {}
        }
        Ic(a);
        return !0
    }

    function Mc() {
        var a = L.performance;
        if (a && a.getEntriesByType) try {
            var b = a.getEntriesByType("navigation");
            if (b && b.length > 0) var c = b[0].type
        } catch (d) {
            return "e"
        }
        if (!c) return "u";
        switch (c) {
            case "navigate":
                return "n";
            case "back_forward":
                return "h";
            case "reload":
                return "r";
            case "prerender":
                return "p";
            default:
                return "x"
        }
    }

    function Jc(a) {
        var b = new Image(1, 1);
        Fc(b, void 0, {});
        b.onload = function() {
            b.onload = null
        };
        b.onerror = function() {
            b.onerror = null
        };
        b.src = a
    };
    var Nc = [];

    function O(a) {
        return Nc[a] === void 0 ? !1 : Nc[a]
    };

    function Oc() {
        var a = a === void 0 ? document : a;
        var b;
        return !((b = a.featurePolicy) == null || !(ba = b.allowedFeatures(), r(ba, "includes")).call(ba, "attribution-reporting"))
    };

    function Pc() {
        var a = {};
        var b = L.google_tag_data;
        L.google_tag_data = b === void 0 ? a : b;
        a = L.google_tag_data;
        return a.ics = a.ics || new Qc
    }

    function Qc() {
        this.entries = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.g = []
    }
    n = Qc.prototype;
    n.default = function(a, b, c, d, e, f, g) {
        this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        K(19);
        b == null ? K(18) : Rc(this, a, b === "granted", c, d, e, f, g)
    };
    n.waitForUpdate = function(a, b, c) {
        for (var d = 0; d < a.length; d++) Rc(this, a[d], void 0, void 0, "", "", b, c)
    };

    function Rc(a, b, c, d, e, f, g, h) {
        var k = r(a, "entries"),
            l = k[b] || {},
            m = l.region;
        d = d && vc(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (e === "" || d === f || (d === e ? m !== f : !d && !m)) {
            f = !!(g && g > 0 && l.update === void 0);
            var q = {
                region: d,
                declare_region: l.declare_region,
                implicit: l.implicit,
                default: c !== void 0 ? c : l.default,
                declare: l.declare,
                update: l.update,
                quiet: f
            };
            if (e !== "" || l.default !== !1) k[b] = q;
            f && L.setTimeout(function() {
                    k[b] === q && q.quiet && (K(2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0, h), a.notifyListeners())
                },
                g)
        }
    }
    n.clearTimeout = function(a, b, c) {
        var d = [a],
            e = c.delegatedConsentTypes,
            f;
        for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
        e = r(this, "entries")[a] || {};
        a = this.getConsentState(a, c);
        if (e.quiet)
            for (e.quiet = !1, b = u(d), d = b.next(); !d.done; d = b.next()) Sc(this, d.value);
        else if (b !== void 0 && a !== b)
            for (b = u(d), d = b.next(); !d.done; d = b.next()) Sc(this, d.value)
    };
    n.update = function(a, b, c) {
        this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (b != null) {
            var d = this.getConsentState(a, c),
                e = r(this, "entries");
            (e[a] = e[a] || {}).update = b === "granted";
            this.clearTimeout(a, d, c)
        }
    };
    n.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = r(this, "entries"),
            g = f[a] || {},
            h = g.declare_region;
        c = c && vc(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (d === "" || c === e || (c === d ? h !== e : !c && !h))
            if (b = {
                    region: g.region,
                    declare_region: c,
                    declare: b === "granted",
                    implicit: g.implicit,
                    default: g.default,
                    update: g.update,
                    quiet: g.quiet
                }, d !== "" || g.declare !== !1) f[a] = b
    };
    n.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = r(this, "entries");
        a = c[a] = c[a] || {};
        a.implicit !== !1 && (a.implicit = b === "granted")
    };
    n.getConsentState = function(a, b) {
        var c = r(this, "entries"),
            d = c[a] || {},
            e = d.update;
        if (e !== void 0) return e ? 1 : 2;
        if (b.usedContainerScopedDefaults) {
            e = b.containerScopedDefaults[a];
            if (e === 3) return 1;
            if (e === 2) return 2
        } else if (e = d.default, e !== void 0) return e ? 1 : 2;
        if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
            a = b.delegatedConsentTypes[a];
            c = c[a] || {};
            e = c.update;
            if (e !== void 0) return e ? 1 : 2;
            if (b.usedContainerScopedDefaults) {
                b = b.containerScopedDefaults[a];
                if (b === 3) return 1;
                if (b === 2) return 2
            } else if (e = c.default,
                e !== void 0) return e ? 1 : 2
        }
        e = d.declare;
        if (e !== void 0) return e ? 1 : 2;
        e = d.implicit;
        return e !== void 0 ? e ? 3 : 4 : 0
    };
    n.addListener = function(a, b) {
        this.g.push({
            consentTypes: a,
            T: b
        })
    };

    function Sc(a, b) {
        for (var c = 0; c < a.g.length; ++c) {
            var d = a.g[c];
            Array.isArray(d.consentTypes) && d.consentTypes.indexOf(b) !== -1 && (d.P = !0)
        }
    }
    n.notifyListeners = function(a, b) {
        for (var c = 0; c < this.g.length; ++c) {
            var d = this.g[c];
            if (d.P) {
                d.P = !1;
                try {
                    d.T({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    };
    var Tc = {},
        Uc = {
            delegatedConsentTypes: {},
            corePlatformServices: {},
            usedCorePlatformServices: !1,
            selectedAllCorePlatformServices: !1,
            containerScopedDefaults: (Tc.ad_storage = 1, Tc.analytics_storage = 1, Tc.ad_user_data = 1, Tc.ad_personalization = 1, Tc),
            usedContainerScopedDefaults: !1
        };

    function Vc(a) {
        var b = Pc();
        b.accessedAny = !0;
        return (vc(a) ? [a] : a).every(function(c) {
            switch (b.getConsentState(c, Uc)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                case 4:
                    return !1;
                default:
                    return !0
            }
        })
    }

    function Wc(a) {
        var b = Pc();
        b.accessedAny = !0;
        return !(r(b, "entries")[a] || {}).quiet
    }

    function Xc(a, b) {
        Pc().addListener(a, b)
    }

    function Yc(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!Wc(b[e])) return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            Xc(b, function(e) {
                d || c() || (d = !0, a(e))
            })
        } else a({})
    }

    function Zc(a, b) {
        function c() {
            for (var g = [], h = 0; h < e.length; h++) {
                var k = e[h];
                Vc(k) && !f[k] && g.push(k)
            }
            return g
        }

        function d(g) {
            for (var h = 0; h < g.length; h++) f[g[h]] = !0
        }
        var e = vc(b) ? [b] : b,
            f = {};
        b = c();
        b.length !== e.length && (d(b), Xc(e, function(g) {
            function h(m) {
                m.length !== 0 && (d(m), g.consentTypes = m, a(g))
            }
            var k = c();
            if (k.length !== 0) {
                var l = r(Object, "keys").call(Object, f).length;
                k.length + l >= e.length ? h(k) : L.setTimeout(function() {
                    h(c())
                }, 500)
            }
        }))
    };
    var $c = /:[0-9]+$/,
        ad = /^\d+\.fls\.doubleclick\.net$/;

    function bd(a, b) {
        a = u(a.split("&"));
        for (var c = a.next(); !c.done; c = a.next()) {
            var d = u(c.value.split("="));
            c = d.next().value;
            for (var e, f = []; !(e = d.next()).done;) f.push(e.value);
            d = f;
            if (decodeURIComponent(c.replace(/\+/g, " ")) === b) return decodeURIComponent(d.join("=").replace(/\+/g, " "))
        }
    }

    function P(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if (b === "protocol" || b === "port") a.protocol = cd(a.protocol) || cd(L.location.protocol);
        b === "port" ? a.port = String(Number(a.hostname ? a.port : L.location.port) || (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")) : b === "host" && (a.hostname = (a.hostname || L.location.hostname).replace($c, "").toLowerCase());
        var f = cd(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "url_no_fragment":
                d = "";
                a && a.href && (d = a.href.indexOf("#"), d = d < 0 ? a.href : a.href.substring(0, d));
                a = d;
                break;
            case "protocol":
                a = f;
                break;
            case "host":
                a = a.hostname.replace($c, "").toLowerCase();
                c && (d = /^www\d*\./.exec(a)) && d[0] && (a = a.substring(d[0].length));
                break;
            case "port":
                a = String(Number(a.port) || (f === "http" ? 80 : f === "https" ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || K(1);
                a = a.pathname.charAt(0) === "/" ? a.pathname : "/" + a.pathname;
                a = a.split("/");
                (d || []).indexOf(a[a.length - 1]) >= 0 && (a[a.length - 1] = "");
                a = a.join("/");
                break;
            case "query":
                a = a.search.replace("?", "");
                e && (a = bd(a, e));
                break;
            case "extension":
                a =
                    a.pathname.split(".");
                a = a.length > 1 ? a[a.length - 1] : "";
                a = a.split("/")[0];
                break;
            case "fragment":
                a = a.hash.replace("#", "");
                break;
            default:
                a = a && a.href
        }
        return a
    }

    function cd(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }
    var dd = {},
        ed = 0;

    function fd(a) {
        var b = dd[a];
        if (!b) {
            b = M.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            c[0] !== "/" && (a || K(1), c = "/" + c);
            var d = b.hostname.replace($c, "");
            b = {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            };
            ed < 5 && (dd[a] = b, ed++)
        }
        return b
    };

    function gd(a, b, c, d) {
        if (hd(d)) {
            d = [];
            b = String(b || id()).split(";");
            for (var e = 0; e < b.length; e++) {
                var f = b[e].split("="),
                    g = f[0].replace(/^\s*|\s*$/g, "");
                g && g === a && ((f = f.slice(1).join("=").replace(/^\s*|\s*$/g, "")) && c && (f = decodeURIComponent(f)), d.push(f))
            }
            a = d
        } else a = [];
        return a
    }

    function jd(a, b, c) {
        var d = kd,
            e = ["ad_storage", "ad_user_data"];
        if (hd(e)) {
            a = ld(a, d, e);
            if (a.length === 1) return a[0].id;
            if (a.length !== 0) {
                a = md(a, function(f) {
                    return f.S
                }, b);
                if (a.length === 1) return a[0].id;
                a = md(a, function(f) {
                    return f.X
                }, c);
                return a[0] ? a[0].id : void 0
            }
        }
    }

    function nd(a, b, c, d) {
        var e = id(),
            f = window;
        f.origin !== "null" && (f.document.cookie = a);
        a = id();
        return e !== a || c !== void 0 && gd(b, a, !1, d).indexOf(c) >= 0
    }

    function od(a, b, c) {
        function d(q, w, x) {
            if (x == null) return delete g[w], q;
            g[w] = x;
            return q + "; " + w + "=" + x
        }

        function e(q, w) {
            if (w == null) return q;
            g[w] = !0;
            return q + "; " + w
        }
        if (hd(c.A)) {
            if (b == null) var f = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else c.encode && (b = encodeURIComponent(b)), b = pd(b), f = a + "=" + b;
            var g = {};
            f = d(f, "path", c.path);
            if (c.expires instanceof Date) var h = c.expires.toUTCString();
            else c.expires != null && (h = c.expires);
            f = d(f, "expires", h);
            f = d(f, "max-age", c.ra);
            f = d(f, "samesite", c.sa);
            c.ta && (f = e(f, "secure"));
            if ((h = c.domain) && h.toLowerCase() === "auto") {
                h = qd();
                for (var k = 0; k < h.length; ++k) {
                    var l = h[k] !== "none" ? h[k] : void 0,
                        m = d(f, "domain", l);
                    m = e(m, c.flags);
                    if (!rd(l, c.path) && nd(m, a, b, c.A)) break
                }
            } else h && h.toLowerCase() !== "none" && (f = d(f, "domain", h)), f = e(f, c.flags), rd(h, c.path) || nd(f, a, b, c.A)
        }
    }

    function sd(a, b, c) {
        c.path == null && (c.path = "/");
        c.domain || (c.domain = "auto");
        od(a, b, c)
    }

    function md(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g],
                k = b(h);
            k === c ? d.push(h) : f === void 0 || k < f ? (e = [h], f = k) : k === f && e.push(h)
        }
        return d.length > 0 ? d : e
    }

    function ld(a, b, c) {
        var d = [];
        a = gd(a, void 0, void 0, c);
        for (c = 0; c < a.length; c++) {
            var e = a[c].split("."),
                f = e.shift();
            if (!b || !f || b.indexOf(f) !== -1)
                if (f = e.shift()) f = f.split("-"), d.push({
                    id: e.join("."),
                    S: Number(f[0]) || 1,
                    X: Number(f[1]) || 1
                })
        }
        return d
    }

    function pd(a) {
        a && a.length > 1200 && (a = a.substring(0, 1200));
        return a
    }
    var td = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        ud = /(^|\.)doubleclick\.net$/i;

    function rd(a, b) {
        return a !== void 0 && (ud.test(window.document.location.hostname) || b === "/" && td.test(a))
    }

    function vd(a) {
        if (!a) return 1;
        var b = a;
        O(7) && a === "none" && (b = window.document.location.hostname);
        b = b.indexOf(".") === 0 ? b.substring(1) : b;
        return b.split(".").length
    }

    function wd(a) {
        if (!a || a === "/") return 1;
        a[0] !== "/" && (a = "/" + a);
        a[a.length - 1] !== "/" && (a += "/");
        return a.split("/").length - 1
    }

    function xd(a, b) {
        a = "" + vd(a);
        b = wd(b);
        b > 1 && (a += "-" + b);
        return a
    }

    function id() {
        return window.origin !== "null" ? window.document.cookie : ""
    }

    function hd(a) {
        return a && O(8) ? (Array.isArray(a) ? a : [a]).every(function(b) {
            return Wc(b) && Vc(b)
        }) : !0
    }

    function qd() {
        var a = [],
            b = window.document.location.hostname.split(".");
        if (b.length === 4) {
            var c = b[b.length - 1];
            if (Number(c).toString() === c) return ["none"]
        }
        for (c = b.length - 2; c >= 0; c--) a.push(b.slice(c).join("."));
        b = window.document.location.hostname;
        ud.test(b) || td.test(b) || a.push("none");
        return a
    };

    function yd(a, b, c, d) {
        var e, f = Number(a.K != null ? a.K : void 0);
        f !== 0 && (e = new Date((b || yc().getTime()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            A: d
        }
    };
    var zd = ["ad_storage", "ad_user_data"];

    function $d(a) {
        if (!a) return {
            error: 10
        };
        var b = ee();
        if (b.error !== 0) return b;
        if (!b.value) return {
            error: 2
        };
        if (!(a in b.value)) return {
            value: void 0,
            error: 15
        };
        a = b.value[a];
        return a === null || a === void 0 || a === "" ? {
            value: void 0,
            error: 11
        } : {
            value: a,
            error: 0
        }
    }

    function ee(a) {
        a = a === void 0 ? !0 : a;
        if (!Vc(zd)) return {
            error: 3
        };
        try {
            if (!L.localStorage) return {
                error: 1
            }
        } catch (f) {
            return {
                error: 14
            }
        }
        var b = {
                schema: "gcl",
                version: 1
            },
            c = void 0;
        try {
            c = L.localStorage.getItem("_gcl_ls")
        } catch (f) {
            return {
                error: 13
            }
        }
        try {
            if (c) {
                var d = JSON.parse(c);
                if (d && typeof d === "object") b = d;
                else return {
                    error: 12
                }
            }
        } catch (f) {
            return {
                error: 8
            }
        }
        if (b.schema !== "gcl") return {
            error: 4
        };
        if (b.version !== 1) return {
            error: 5
        };
        try {
            var e = fe(b);
            a && e && ge({
                value: b,
                error: 0
            })
        } catch (f) {
            return {
                error: 8
            }
        }
        return {
            value: b,
            error: 0
        }
    }

    function fe(a) {
        if (!a || typeof a !== "object") return !1;
        if ("expires" in a && "value" in a) {
            var b;
            typeof a.expires === "number" ? b = a.expires : b = typeof a.expires === "string" ? Number(a.expires) : NaN;
            if (isNaN(b) || !(Date.now() <= b)) return a.value = null, a.error = 9, !0
        } else {
            b = !1;
            for (var c = u(r(Object, "keys").call(Object, a)), d = c.next(); !d.done; d = c.next()) b = fe(a[d.value]) || b;
            return b
        }
        return !1
    }

    function ge(a) {
        if (!a.error && a.value) {
            a = a.value;
            try {
                var b = JSON.stringify(a)
            } catch (c) {
                return
            }
            try {
                L.localStorage.setItem("_gcl_ls", b)
            } catch (c) {}
        }
    };

    function he() {
        if (!ie()) return -1;
        var a = $d("gcl_ctr");
        if (!a || a.error !== 0 || !a.value || typeof a.value !== "object") return -1;
        a = a.value;
        try {
            if (!("value" in a && a.value) || typeof a.value !== "object") return -1;
            var b = a.value.value;
            return b == null || r(Number, "isNaN").call(Number, b) ? -1 : Number(b)
        } catch (c) {
            return -1
        }
    }

    function ie() {
        return Vc(["ad_storage", "ad_user_data"]) ? O(11) : !1
    };
    var kd = ["1"],
        je = {},
        ke = {};

    function le(a, b) {
        (b === void 0 ? 0 : b) && ie() && (b = ee(!1), b.error === 0 && b.value && "gcl_ctr" in b.value && (delete b.value.gcl_ctr, ge(b)));
        Vc(["ad_storage", "ad_user_data"]) && O(10) && he() === -1 && (b = yc().getTime(), a = {
            value: {
                value: 0,
                creationTimeMs: b
            },
            expires: Number(yd(a || {}, b, !0).expires)
        }, a !== null && a !== void 0 && a !== "" && (b = ee(!1), b.error === 0 && b.value && (b.value.gcl_ctr = a, ge(b))))
    }

    function me(a, b, c, d) {
        b = ["1", xd(c.domain, c.path), b].join(".");
        c = yd(c, d);
        c.A = ["ad_storage", "ad_user_data"];
        sd(a, b, c)
    }

    function ne(a, b, c) {
        b = jd(a, vd(b), wd(c));
        if (!b) return !1;
        c = b.split(".");
        c.length === 5 ? (je[a] = c.slice(0, 2).join("."), ke[a] = {
            id: c.slice(2, 4).join("."),
            O: Number(c[4]) || 0
        }) : c.length === 3 ? ke[a] = {
            id: c.slice(0, 2).join("."),
            O: Number(c[2]) || 0
        } : je[a] = b;
        return !0
    }

    function oe(a) {
        return (a || "_gcl") + "_au"
    };

    function pe(a, b, c) {
        a = qe(a, !0);
        if (a[b]) return !1;
        a[b] = [];
        a[b][0] = c;
        return !0
    }

    function qe(a, b) {
        var c = a.GooglebQhCsO;
        c || (c = {}, b && (a.GooglebQhCsO = c));
        return c
    };
    !D("Android") || La();
    La();
    D("Safari") && (La() || (E() ? 0 : D("Coast")) || (E() ? 0 : D("Opera")) || (E() ? 0 : D("Edge")) || (E() ? Ka("Microsoft Edge") : D("Edg/")) || E() && Ka("Opera"));
    var re = {},
        se = null;

    function te(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e > 255 && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        a = 4;
        a === void 0 && (a = 0);
        if (!se)
            for (se = {}, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; e < 5; e++) {
                var f = c.concat(d[e].split(""));
                re[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    se[h] === void 0 && (se[h] = g)
                }
            }
        a = re[a];
        c = Array(Math.floor(b.length / 3));
        d = a[64] || "";
        for (e = f = 0; f < b.length - 2; f += 3) {
            var k = b[f],
                l = b[f + 1];
            h = b[f + 2];
            g = a[k >> 2];
            k = a[(k &
                3) << 4 | l >> 4];
            l = a[(l & 15) << 2 | h >> 6];
            h = a[h & 63];
            c[e++] = g + k + l + h
        }
        g = 0;
        h = d;
        switch (b.length - f) {
            case 2:
                g = b[f + 1], h = a[(g & 15) << 2] || d;
            case 1:
                b = b[f], c[e] = a[b >> 2] + a[(b & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };

    function ue(a, b, c, d, e, f) {
        var g = hb(c, "fmt");
        if (d) {
            var h = hb(c, "random"),
                k = hb(c, "label") || "";
            if (!h) return !1;
            h = te(decodeURIComponent(k.replace(/\+/g, " ")) + ":" + decodeURIComponent(h.replace(/\+/g, " ")));
            if (!pe(a, h, d)) return !1
        }
        g && Number(g) !== 4 && (c = jb(c, "rfmt", g));
        c = jb(c, "fmt", 4);
        Gc(c, function() {
            a.google_noFurtherRedirects && d && (a.google_noFurtherRedirects = null, d())
        }, e, f, b.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var ve = {},
        we = (ve.k = {
            G: /^[\w-]+$/
        }, ve.b = {
            G: /^[\w-]+$/,
            L: !0
        }, ve.i = {
            G: /^[1-9]\d*$/
        }, ve.u = {
            G: /^[1-9]\d*$/
        }, ve);
    var xe = {},
        Ae = (xe[5] = {
            R: {
                2: ye
            },
            H: ["k", "i", "b", "u"]
        }, xe[4] = {
            R: {
                2: ye,
                GCL: ze
            },
            H: ["k", "i", "b"]
        }, xe);

    function ye(a, b) {
        var c = a.split(".");
        if (c.length === 3 && (a = {}, b = Ae[b])) {
            b = b.H;
            c = u(c[2].split("$"));
            for (var d = c.next(); !d.done; d = c.next()) {
                d = d.value;
                var e = d[0];
                if (b.indexOf(e) !== -1) try {
                    var f = decodeURIComponent(d.substring(1)),
                        g = we[e];
                    g && (g.L ? (a[e] = a[e] || [], a[e].push(f)) : a[e] = f)
                } catch (h) {}
            }
            return a
        }
    }

    function ze(a) {
        a = a.split(".");
        a.shift();
        var b = a.shift(),
            c = a.shift(),
            d = {};
        return d.k = c, d.i = b, d.b = a, d
    };

    function Be(a) {
        var b = [],
            c = M.cookie.split(";");
        a = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$");
        for (var d = 0; d < c.length; d++) {
            var e = c[d].match(a);
            e && b.push({
                M: e[1],
                value: e[2],
                timestamp: Number(e[2].split(".")[1]) || 0
            })
        }
        b.sort(function(f, g) {
            return g.timestamp - f.timestamp
        });
        return b
    }

    function Ce(a, b) {
        a = Be(a);
        var c = {};
        if (!a || !a.length) return c;
        for (var d = 0; d < a.length; d++) {
            var e = a[d].value.split(".");
            if (!(e[0] !== "1" || b && e.length < 3 || !b && e.length !== 3) && Number(e[1])) {
                c[a[d].M] || (c[a[d].M] = []);
                var f = {
                    version: e[0],
                    timestamp: Number(e[1]) * 1E3,
                    j: e[2]
                };
                b && e.length > 3 && (f.labels = e.slice(3));
                c[a[d].M].push(f)
            }
        }
        return c
    };
    var De = new p.Map([
        [5, "ad_storage"],
        [4, ["ad_storage", "ad_user_data"]]
    ]);

    function Ee(a) {
        if (Ae[5]) {
            var b = [];
            a = gd(a, void 0, void 0, De.get(5));
            a = u(a);
            for (var c = a.next(); !c.done; c = a.next()) {
                a: {
                    c = c.value;
                    var d = Ae[5];
                    if (d) {
                        var e = c.split(".")[0];
                        if (e && (d = d.R[e])) {
                            c = d(c, 5);
                            break a
                        }
                    }
                    c = void 0
                }
                c && (Fe(c), b.push(c))
            }
            return b
        }
    }

    function Ge(a, b, c, d) {
        c = c || {};
        var e = xd(c.domain, c.path),
            f = Ae[5];
        if (f) {
            var g = [];
            f = u(f.H);
            for (var h = f.next(); !h.done; h = f.next()) {
                h = h.value;
                var k = we[h];
                if (k) {
                    var l = b[h];
                    if (l !== void 0)
                        if (k.L && Array.isArray(l))
                            for (k = u(l), l = k.next(); !l.done; l = k.next()) g.push(encodeURIComponent(h + l.value));
                        else g.push(encodeURIComponent(h + l))
                }
            }
            b = ["2", e || "1", g.join("$")].join(".")
        } else b = void 0;
        b && (c = yd(c, d, void 0, De.get(5)), sd(a, b, c))
    }

    function He(a, b) {
        b = b.G;
        return typeof b === "function" ? b(a) : b.test(a)
    }

    function Fe(a) {
        for (var b = u(r(Object, "keys").call(Object, a)), c = b.next(), d = {}; !c.done; d = {
                C: void 0
            }, c = b.next()) {
            c = c.value;
            var e = a[c];
            d.C = we[c];
            d.C ? d.C.L ? a[c] = Array.isArray(e) ? e.filter(function(f) {
                return function(g) {
                    return He(g, f.C)
                }
            }(d)) : void 0 : typeof e === "string" && He(e, d.C) || (a[c] = void 0) : a[c] = void 0
        }
    };
    var Ie = /^\w+$/,
        S = /^[\w-]+$/,
        T = {},
        Je = (T.aw = "_aw", T.dc = "_dc", T.gf = "_gf", T.gp = "_gp", T.gs = "_gs", T.ha = "_ha", T.ag = "_ag", T.gb = "_gb", T);

    function U() {
        return ["ad_storage", "ad_user_data"]
    }

    function V(a) {
        return !O(8) || Vc(a)
    }

    function Ke(a) {
        function b() {
            var d = V(c);
            d && a();
            return d
        }
        var c = U();
        Yc(function() {
            b() || Zc(b, c)
        }, c)
    }

    function Le(a) {
        return W(a).map(function(b) {
            return b.j
        })
    }

    function Me(a) {
        function b(d) {
            return function(e) {
                e.type = d;
                return e
            }
        }
        var c = Ne(a.prefix);
        a = X("gb", c);
        c = X("ag", c);
        if (!c || !a) return [];
        a = W(a).map(b("gb"));
        c = Oe(c).map(b("ag"));
        return a.concat(c).sort(function(d, e) {
            return e.timestamp - d.timestamp
        })
    }

    function Pe(a, b, c, d, e, f) {
        var g = wc(a, function(h) {
            return h.j === c
        });
        g ? (g.timestamp < d && (g.timestamp = d, g.D = f), g.labels = Qe(g.labels || [], e || [])) : a.push({
            version: b,
            j: c,
            timestamp: d,
            labels: e,
            D: f
        })
    }

    function Oe(a) {
        var b = Ee(a) || [];
        a = [];
        b = u(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = c = c.value,
                e = d.k;
            d = d.b;
            var f = c ? (Number(c.i) || 0) * 1E3 : 0;
            if (f) {
                var g = void 0;
                O(9) && (g = c.u);
                Pe(a, "2", e, f, d || [], g)
            }
        }
        return a.sort(function(h, k) {
            return k.timestamp - h.timestamp
        })
    }

    function W(a) {
        var b = [];
        a = gd(a, M.cookie, void 0, U());
        a = u(a);
        for (var c = a.next(); !c.done; c = a.next()) c = Re(c.value), c != null && Pe(b, c.version, c.j, c.timestamp, c.labels);
        b.sort(function(d, e) {
            return e.timestamp - d.timestamp
        });
        return Se(b)
    }

    function Te(a, b) {
        var c = [];
        a = u(a);
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, r(c, "includes").call(c, d) || c.push(d);
        b = u(b);
        for (a = b.next(); !a.done; a = b.next()) a = a.value, r(c, "includes").call(c, a) || c.push(a);
        return c
    }

    function Ue(a, b) {
        var c = wc(a, function(d) {
            return d.j === b.j
        });
        c ? (c.timestamp < b.timestamp && (c.timestamp = b.timestamp, c.D = b.D), c.m = c.m ? b.m ? c.timestamp < b.timestamp ? b.m : c.m : c.m || 0 : b.m || 0, c.labels = Te(c.labels || [], b.labels || []), c.B = Te(c.B || [], b.B || [])) : a.push(b)
    }

    function Ve() {
        var a = $d("gclid");
        if (!a || a.error || !a.value || typeof a.value !== "object") return null;
        a = a.value;
        try {
            if (!("value" in a && a.value) || typeof a.value !== "object") return null;
            var b = a.value,
                c = b.value;
            return c && c.match(S) ? {
                version: "",
                j: c,
                timestamp: Number(b.creationTimeMs) || 0,
                labels: [],
                m: b.linkDecorationSource || 0,
                B: [2]
            } : null
        } catch (d) {
            return null
        }
    }

    function We(a) {
        var b = [];
        a = gd(a, M.cookie, void 0, U());
        a = u(a);
        for (var c = a.next(); !c.done; c = a.next()) c = Re(c.value), c != null && (c.D = void 0, c.m = 0, c.B = [1], Ue(b, c));
        if (a = Ve()) a.D = void 0, a.m = a.m || 0, a.B = a.B || [2], Ue(b, a);
        b.sort(function(d, e) {
            return e.timestamp - d.timestamp
        });
        return Se(b)
    }

    function Qe(a, b) {
        if (!a.length) return b;
        if (!b.length) return a;
        var c = {};
        return a.concat(b).filter(function(d) {
            return c.hasOwnProperty(d) ? !1 : c[d] = !0
        })
    }

    function Ne(a) {
        return a && typeof a === "string" && a.match(Ie) ? a : "_gcl"
    }

    function Xe(a, b) {
        var c = fd(a);
        a = P(c, "query", !1, void 0, "gclid");
        var d = P(c, "query", !1, void 0, "gclsrc"),
            e = P(c, "query", !1, void 0, "wbraid");
        if (e) {
            var f = e;
            try {
                f = decodeURIComponent(e)
            } catch (k) {}
            f = f.split(",");
            e = f.length === 2 && f[0] === f[1] ? f[0] : e
        }
        f = P(c, "query", !1, void 0, "gbraid");
        var g = P(c, "query", !1, void 0, "gad_source"),
            h = P(c, "query", !1, void 0, "dclid");
        !b || a && d && e && f || (b = c.hash.replace("#", ""), a = a || bd(b, "gclid"), d = d || bd(b, "gclsrc"), e = e || bd(b, "wbraid"), f = f || bd(b, "gbraid"), g = g || bd(b, "gad_source"));
        return Ye(a,
            d, h, e, f, g)
    }

    function Ye(a, b, c, d, e, f) {
        function g(k, l) {
            h[l] || (h[l] = []);
            h[l].push(k)
        }
        var h = {};
        h.gclid = a;
        h.gclsrc = b;
        h.dclid = c;
        if (a !== void 0 && a.match(S)) switch (b) {
            case void 0:
                g(a, "aw");
                break;
            case "aw.ds":
                g(a, "aw");
                g(a, "dc");
                break;
            case "ds":
                g(a, "dc");
                break;
            case "3p.ds":
                g(a, "dc");
                break;
            case "gf":
                g(a, "gf");
                break;
            case "ha":
                g(a, "ha")
        }
        c && g(c, "dc");
        d !== void 0 && S.test(d) && (h.wbraid = d, g(d, "gb"));
        e !== void 0 && S.test(e) && (h.gbraid = e, g(e, "ag"));
        f !== void 0 && S.test(f) && (h.gad_source = f, g(f, "gs"));
        return h
    }

    function Ze(a, b, c, d, e) {
        function f() {
            if (V(l)) {
                var w = yd(c, h, !0);
                w.A = l;
                for (var x = function(v, Bb) {
                        var wa = X(v, g);
                        wa && (sd(wa, Bb, w), v !== "gb" && (m = !0))
                    }, B = function(v) {
                        v = ["GCL", k, v];
                        e.length > 0 && v.push(e.join("."));
                        return v.join(".")
                    }, Z = u(["aw", "dc", "gf", "ha", "gp"]), N = Z.next(); !N.done; N = Z.next()) N = N.value, a[N] && x(N, B(a[N][0]));
                if (!m && a.gb) {
                    var aa = a.gb[0];
                    Z = X("gb", g);
                    !b && W(Z).some(function(v) {
                        return v.j === aa && v.labels && v.labels.length > 0
                    }) || x("gb", B(aa))
                }
            }
            if (!q && a.gbraid && V("ad_storage") && (q = !0, !m)) {
                var Ua = a.gbraid;
                x = X("ag", g);
                if (b || !Oe(x).some(function(v) {
                        return v.j === Ua && v.labels && v.labels.length > 0
                    })) B = {}, B = (B.k = Ua, B.i = "" + k, B.b = e, B), Ge(x, B, c, h)
            }
            $e(a, g, h, c)
        }
        c = c || {};
        e = e || [];
        var g = Ne(c.prefix),
            h = d || yc().getTime(),
            k = Math.round(h / 1E3),
            l = U(),
            m = !1,
            q = !1;
        Yc(function() {
            f();
            V(l) || Zc(f, l)
        }, l)
    }

    function $e(a, b, c, d) {
        if (a.gad_source !== void 0 && V("ad_storage")) {
            if (O(4)) {
                var e = Mc();
                if (e === "r" || e === "h") return
            }
            a = a.gad_source;
            if (b = X("gs", b)) {
                e = (e = L.performance) && uc(e.now) ? e.now() : void 0;
                e = Math.floor((yc().getTime() - (e || 0)) / 1E3);
                if (O(9)) {
                    var f = L.location.hostname;
                    var g = L.location.pathname;
                    f = zc(f);
                    f.split(".").length > 2 && (f = f.replace(/^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./, ""));
                    g = zc(g);
                    g = g.split(";")[0];
                    g = g.replace(/\/(ar|slp|web|index)?\/?$/, "");
                    g = (f + g).toLowerCase();
                    f = 1;
                    var h;
                    if (g)
                        for (f =
                            0, h = g.length - 1; h >= 0; h--) {
                            var k = g.charCodeAt(h);
                            f = (f << 6 & 268435455) + k + (k << 14);
                            k = f & 266338304;
                            f = k !== 0 ? f ^ k >> 21 : f
                        }
                    g = String(f);
                    f = {};
                    a = (f.k = a, f.i = "" + e, f.u = g, f)
                } else g = {}, a = (g.k = a, g.i = "" + e, g);
                Ge(b, a, d, c)
            }
        }
    }

    function X(a, b) {
        a = Je[a];
        if (a !== void 0) return b + a
    }

    function af(a) {
        return bf(a.split(".")).length !== 0 ? (Number(a.split(".")[1]) || 0) * 1E3 : 0
    }

    function Re(a) {
        a = bf(a.split("."));
        return a.length === 0 ? null : {
            version: a[0],
            j: a[2],
            timestamp: (Number(a[1]) || 0) * 1E3,
            labels: a.slice(3)
        }
    }

    function bf(a) {
        return a.length < 3 || a[0] !== "GCL" && a[0] !== "1" || !/^\d+$/.test(a[1]) || !S.test(a[2]) ? [] : a
    }

    function Se(a) {
        return a.filter(function(b) {
            return S.test(b.j)
        })
    }

    function cf() {
        var a = ["aw"],
            b = {};
        if (L.origin !== "null") {
            for (var c = Ne(b.prefix), d = {}, e = 0; e < a.length; e++) Je[a[e]] && (d[a[e]] = Je[a[e]]);
            Ke(function() {
                xc(d, function(f, g) {
                    g = gd(c + g, M.cookie, void 0, U());
                    g.sort(function(m, q) {
                        return af(q) - af(m)
                    });
                    if (g.length) {
                        var h = g[0];
                        g = af(h);
                        var k = bf(h.split(".")).length !== 0 ? h.split(".").slice(3) : [],
                            l = {};
                        h = bf(h.split(".")).length !== 0 ? h.split(".")[2] : void 0;
                        l[f] = [h];
                        Ze(l, !0, b, g, k)
                    }
                })
            })
        }
    }

    function df(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!V(U())) return e;
        var f = W(a);
        var g = [];
        if (f.length !== 0)
            for (var h = {}, k = 0; k < f.length; k++) {
                var l = f[k],
                    m = l.type ? l.type : "gcl";
                (l.labels || []).indexOf(b) === -1 ? (e.push(0), h[m] || g.push(l)) : e.push(1);
                h[m] = !0
            }
        if (g.length && !d)
            for (d = u(g), f = d.next(); !f.done; f = d.next()) g = f.value, f = g.timestamp, g = [g.version, Math.round(f / 1E3), g.j].concat(g.labels || [], [b]).join("."), f = yd(c, f, !0), f.A = U(), sd(a, g, f);
        return e
    }

    function ef(a, b) {
        b = Ne(b);
        b = X(a, b);
        if (!b) return 0;
        a = a === "ag" ? Oe(b) : W(b);
        for (var c = b = 0; c < a.length; c++) b = Math.max(b, a[c].timestamp);
        return b
    }

    function ff(a) {
        for (var b = 0, c = u(r(Object, "keys").call(Object, a)), d = c.next(); !d.done; d = c.next()) {
            d = a[d.value];
            for (var e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp))
        }
        return b
    };
    var gf = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        hf = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        jf = /^\d+\.fls\.doubleclick\.net$/,
        kf = /;gac=([^;?]+)/,
        lf = /;gacgb=([^;?]+)/;

    function mf(a, b, c) {
        if (jf.test(a.location.host)) return (b = a.location.href.match(c)) && b.length === 2 && b[1].match(gf) ? decodeURIComponent(b[1]) : "";
        a = [];
        c = u(r(Object, "keys").call(Object, b));
        for (var d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            for (var e = [], f = b[d], g = 0; g < f.length; g++) e.push(f[g].j);
            a.push(d + ":" + e.join(","))
        }
        return a.length > 0 ? a.join(";") : ""
    }

    function nf(a, b, c, d) {
        for (var e = V(U()) ? Ce("_gac_gb", !0) : {}, f = [], g = !1, h = u(r(Object, "keys").call(Object, e)), k = h.next(); !k.done; k = h.next()) {
            k = k.value;
            var l = df("_gac_gb_" + k, b, c, d);
            g = g || l.length !== 0 && l.some(function(m) {
                return m === 1
            });
            f.push(k + ":" + l.join(","))
        }
        return {
            V: g ? f.join(";") : "",
            U: mf(a, e, lf)
        }
    }

    function of (a, b) {
        return (a = a.location.href.match(new RegExp(";" + b + "=([^;?]+)"))) && a.length === 2 && a[1].match(hf) ? a[1] : void 0
    }

    function pf(a, b, c, d) {
        var e = e === void 0 ? !1 : e;
        if (jf.test(a.location.host)) {
            if (e = of (a, d)) return [{
                j: e
            }]
        } else {
            if (c === "gclid") return a = (b || "_gcl") + "_aw", e ? We(a) : W(a);
            if (c === "wbraid") return W((b || "_gcl") + "_gb");
            if (c === "braids") return Me({
                prefix: b
            })
        }
        return []
    }

    function qf(a, b) {
        return pf(a, b, "gclid", "gclaw").map(function(c) {
            return c.j
        }).join(".")
    }

    function rf(a, b) {
        return pf(a, b, "wbraid", "gclgb").map(function(c) {
            return c.j
        }).join(".")
    }

    function sf(a) {
        if (Le("_gcl_aw").length === 0 && (!a || Le(a + "_aw").length === 0)) {
            a = Xe(L.location.href, !0);
            for (var b = !0, c = u(r(Object, "keys").call(Object, a)), d = c.next(); !d.done; d = c.next())
                if (a[d.value] !== void 0) {
                    b = !1;
                    break
                }
            b && (a = Xe(L.document.referrer, !1), a.gad_source = void 0);
            Ze(a, !1, {});
            cf()
        }
    }

    function tf(a, b, c) {
        a = df((b && b.prefix || "_gcl") + "_gb", a, b, c);
        return a.length === 0 || a.every(function(d) {
            return d === 0
        }) ? "" : a.join(".")
    };

    function uf() {
        var a = L.__uspapi;
        if (uc(a)) {
            var b = "";
            try {
                a("getUSPData", 1, function(c, d) {
                    d && c && (c = c.uspString) && RegExp("^[\\da-zA-Z-]{1,20}$").test(c) && (b = c)
                })
            } catch (c) {}
            return b
        }
    };
    var vf = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function wf(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }

    function xf(a) {
        a = a.google_tag_data;
        if (a != null && a.uach) {
            a = a.uach;
            var b = r(Object, "assign").call(Object, {}, a);
            a.fullVersionList && (b.fullVersionList = a.fullVersionList.slice(0));
            a = b
        } else a = null;
        return a
    }

    function yf(a) {
        var b, c;
        return typeof((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }

    function zf() {
        var a = window;
        if (yf(a)) {
            var b = wf(a);
            b.uach_promise || (a = a.navigator.userAgentData.getHighEntropyValues(vf).then(function(c) {
                b.uach != null || (b.uach = c);
                return c
            }), b.uach_promise = a)
        }
    };
    var Af = /^[a-zA-Z0-9_]+$/,
        Bf = !1,
        Cf = "google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_gtag_event_data google_remarketing_only google_conversion_linker google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_allow_ad_personalization_signals google_restricted_data_processing google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_gtm_url_processor google_conversion_page_url google_conversion_referrer_url google_gcl_cookie_prefix google_gcl_cookie_path google_gcl_cookie_flags google_gcl_cookie_domain google_gcl_cookie_max_age_seconds google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_additional_conversion_params google_additional_params google_transport_url google_gtm_experiments".split(" "),
        Df = ["google_conversion_first_time", "google_conversion_snippets"];

    function Ef(a) {
        return a != null ? encodeURIComponent(String(a)) : ""
    }

    function Ff(a) {
        if (a != null) {
            a = String(a).substring(0, 512);
            var b = a.indexOf("#");
            return b == -1 ? a : a.substring(0, b)
        }
        return ""
    }

    function Y(a, b) {
        b = Ef(b);
        return b != "" && (a = Ef(a), a != "") ? "&".concat(a, "=", b) : ""
    }

    function Gf(a) {
        var b = typeof a;
        return a == null || b == "object" || b == "function" ? null : String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
    }

    function Hf(a) {
        if (!a || typeof a != "object" || typeof a.join == "function") return "";
        var b = [],
            c;
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                var d = a[c];
                if (d && typeof d.join === "function") {
                    for (var e = [], f = 0; f < d.length; ++f) {
                        var g = Gf(d[f]);
                        g != null && e.push(g)
                    }
                    d = e.length == 0 ? null : e.join(",")
                } else d = Gf(d);
                (e = Gf(c)) && d != null && b.push(e + "=" + d)
            }
        return b.join(";")
    }

    function If(a) {
        return typeof a != "number" && typeof a != "string" ? "" : Ef(a.toString())
    }

    function Jf(a, b) {
        if (b.google_read_gcl_cookie_opt_out || b.google_remarketing_only || b.google_conversion_domain && (!b.google_gcl_cookie_prefix || !/^_ycl/.test(b.google_gcl_cookie_prefix))) return "";
        var c = "",
            d = Kf(b),
            e = {};
        b.google_gcl_cookie_domain && (e.domain = b.google_gcl_cookie_domain);
        b.google_gcl_cookie_flags && (e.flags = b.google_gcl_cookie_flags);
        b.google_gcl_cookie_max_age_seconds != null && (e.K = b.google_gcl_cookie_max_age_seconds);
        b.google_gcl_cookie_path && (e.path = b.google_gcl_cookie_path);
        d && (e.prefix = d);
        if (Lf(b) && b.I) var f = b.F === void 0;
        else jf.test(a.location.host) ? f = !( of (a, "gclaw") || of (a, "gac")) : (f = Math.max(ef("aw", d), ff(V(U()) ? Ce() : {})), f = Math.max(ef("gb", d), ff(V(U()) ? Ce("_gac_gb", !0) : {})) > f);
        if (f) {
            if (b.F !== void 0) return b.F;
            c = rf(a, d || void 0);
            f = b.google_conversion_label;
            var g = tf(f, e, b.I);
            c = Y("gclgb", c) + (g ? Y("mcov", g) : "");
            if (d) return b.F = c;
            d = nf(a, f, e, b.I);
            a = d.U;
            d = d.V;
            c += (a ? Y("gacgb", a) : "") + (d ? Y("gacmcov", d) : "");
            return b.F = c
        }
        if (d) return b = qf(a, d), Y("gclaw", b);
        (b = qf(a)) && (c = Y("gclaw", b));
        b = mf(a, V(U()) ?
            Ce() : {}, kf);
        return c + (b ? Y("gac", b) : "")
    }

    function Mf(a) {
        function b(d) {
            try {
                return decodeURIComponent(d), !0
            } catch (e) {
                return !1
            }
        }
        a = a ? a.title : "";
        if (a == void 0 || a == "") return "";
        a = encodeURIComponent(a);
        for (var c = 256; !b(a.substr(0, c));) c--;
        return "&tiba=" + a.substr(0, c)
    }

    function Nf(a, b, c, d, e) {
        var f = "https://",
            g = d.google_conversion_type === "landing" ? "/extclk" : "/";
        switch (e) {
            default: return "";
            case 2:
                    case 3:
                    var h = "googleads.g.doubleclick.net/";
                var k = "pagead/viewthroughconversion/";
                break;
            case 1:
                    h = "www.google.com/";k = "pagead/1p-conversion/";
                break;
            case 6:
                    h = "www.google.com/";k = "ccm/conversion/";
                break;
            case 0:
                    h = d.google_conversion_domain || "www.googleadservices.com/";k = "pagead/conversion/";
                break;
            case 5:
                    h = d.google_conversion_domain || "www.googleadservices.com/";k = "ccm/conversion/";
                break;
            case 4:
                    var l = d.google_gtm_experiments;h = l && l.apcm ? "www.google.com" : l && l.capiorig ? d.google_conversion_id + ".privacysandbox.googleadservices.com" : "www.google.com/";k = "pagead/privacysandbox/conversion/";
                break;
            case 7:
                    h = "googleads.g.doubleclick.net/",
                k = "td/rul/"
        }
        Yb && d.google_transport_url && (h = d.google_transport_url);
        h[h.length - 1] !== "/" && (h += "/");
        if (h.indexOf("http://") === 0 || h.indexOf("https://") === 0) f = "";
        var m = [f, h, k, Ef(d.google_conversion_id), g, "?random=", Ef(d.google_conversion_time)].join(""),
            q =
            m,
            w = Y("cv", d.google_conversion_js_version),
            x = Y("fst", d.google_conversion_first_time),
            B = Y("num", d.google_conversion_snippets),
            Z = Y("fmt", d.google_conversion_format),
            N = d.google_remarketing_only ? Y("userId", d.google_user_id) : "",
            aa = d.google_tag_for_child_directed_treatment;
        var Ua = aa == null || aa !== 0 && aa !== 1 ? "" : Y("tfcd", aa);
        var v = d.google_tag_for_under_age_of_consent;
        var Bb = v == null || v !== 0 && v !== 1 ? "" : Y("tfua", v);
        var wa = d.google_allow_ad_personalization_signals;
        var ag = wa === !1 ? Y("npa", 1) : wa === !0 ? Y("npa", 0) : "";
        var Ad = d.google_restricted_data_processing;
        var bg = $b ? Ad === !0 ? Y("rdp", 1) : Ad === !1 ? Y("rdp", 0) : "" : "";
        var cg = Y("value", d.google_conversion_value),
            dg = Y("currency_code", d.google_conversion_currency),
            eg = Y("label", d.google_conversion_label),
            fg = Y("oid", d.google_conversion_order_id),
            gg = Y("bg", d.google_conversion_color);
        a: {
            var Bd = d.google_conversion_language;
            if (Bd != null) {
                var za = Bd.toString();
                if (2 == za.length) {
                    var Ib = Y("hl", za);
                    break a
                }
                if (5 == za.length) {
                    Ib = Y("hl", za.substring(0, 2)) + Y("gl", za.substring(3, 5));
                    break a
                }
            }
            Ib =
            ""
        }
        var hg = Y("guid", "ON"),
            ig = !d.google_conversion_domain && "GooglemKTybQhCsO" in A && typeof A.GooglemKTybQhCsO == "function" ? Y("resp", "GooglemKTybQhCsO") : "",
            jg = Y("disvt", d.google_disable_viewthrough),
            kg = Y("eid", fc().join()),
            Jb = d.google_conversion_date,
            G = [];
        if (a) {
            var la = a.screen;
            la && (G.push(Y("u_h", la.height)), G.push(Y("u_w", la.width)), G.push(Y("u_ah", la.availHeight)), G.push(Y("u_aw", la.availWidth)), G.push(Y("u_cd", la.colorDepth)));
            a.history && G.push(Y("u_his", a.history.length))
        }
        Jb && typeof Jb.getTimezoneOffset ==
            "function" && G.push(Y("u_tz", -Jb.getTimezoneOffset()));
        b && (typeof b.javaEnabled == "function" && G.push(Y("u_java", b.javaEnabled())), b.plugins && G.push(Y("u_nplug", b.plugins.length)), b.mimeTypes && G.push(Y("u_nmime", b.mimeTypes.length)));
        var lg = G.join("");
        var mg = b && b.sendBeacon ? Y("sendb", "1") : "",
            og = Of(),
            pg = Y("ig", /googleadservices\.com/.test("www.googleadservices.com") ? 1 : 0),
            Cd = Hf(d.google_custom_params),
            Dd = Hf(),
            Ed = Cd.concat(Cd.length > 0 && Dd.length > 0 ? ";" : "", Dd);
        var qg = Ed == "" ? "" : "&".concat("data=", encodeURIComponent(Ed));
        var rg = Jf(c, d);
        if (!I || J(23) != "658953496" && J(23) != "658953495" || d.google_read_gcl_cookie_opt_out || d.google_conversion_domain || d.google_remarketing_only) var Fd = "";
        else {
            var Kb = Kf(d),
                y = {};
            d.google_gcl_cookie_domain && (y.domain = d.google_gcl_cookie_domain);
            d.google_gcl_cookie_flags && (y.flags = d.google_gcl_cookie_flags);
            d.google_gcl_cookie_max_age_seconds != null && (y.K = d.google_gcl_cookie_max_age_seconds);
            d.google_gcl_cookie_path && (y.path = d.google_gcl_cookie_path);
            Kb && (y.prefix = Kb);
            var Aa = !1;
            Aa = Aa === void 0 ? !0 :
                Aa;
            var Wa = oe(y.prefix);
            if (je[Wa]) le(y);
            else if (ne(Wa, y.path, y.domain)) {
                var Xa = ke[oe(y.prefix)];
                if (Aa) {
                    var Gd = Xa ? Xa.id : void 0,
                        Hd = Xa ? Xa.O : void 0,
                        Id = oe(y.prefix),
                        Ya = je[Id];
                    if (Ya) {
                        var Jd = Ya.split(".");
                        if (Jd.length === 2) {
                            var Kd = Number(Jd[1]) || 0;
                            if (Kd) {
                                var Ld = Ya;
                                Gd && (Ld = Ya + "." + Gd + "." + (Hd ? Hd : Math.floor(yc().getTime() / 1E3)));
                                me(Id, Ld, y, Kd * 1E3)
                            }
                        }
                    }
                }
                le(y)
            } else {
                b: {
                    var Md = fd(L.location.href),
                        Nd = P(Md, "host", !1);
                    if (Nd && Nd.match(ad)) {
                        var Od = P(Md, "path");
                        if (Od) {
                            var Pd = Od.split("auiddc=");
                            if (Pd.length > 1) {
                                var Qd = Pd[1].split(";")[0].split("?")[0];
                                break b
                            }
                        }
                    }
                    Qd = void 0
                }
                var Rd = Qd;Rd ? (K(17), je[Wa] = Rd) : Aa && (me(oe(y.prefix), [String(Math.round(Math.random() * 2147483647)), Math.round(yc().getTime() / 1E3)].join("."), y), ne(Wa, y.path, y.domain), le(y, !0))
            }
            var Sd = je[oe(Kb)];
            Fd = Sd ? Y("auid", Sd) : ""
        }
        var sg = Fd,
            Td = d.google_conversion_page_url,
            tg = d.google_conversion_referrer_url,
            Ba = "";
        if (c) {
            if (a.top == a) var Ud = 0;
            else {
                var Lb = a.location.ancestorOrigins;
                Ud = Lb ? Lb[Lb.length - 1] == a.location.origin ? 1 : 2 : ub(a.top) ? 1 : 2
            }
            var Vd = Ud;
            var Wd = Td ? Td : Vd == 1 ? a.top.location.href : a.location.href;
            var Xd = "";
            I && H(["509562772", "509562773"], Gb, 21);
            if (I && (J(21) == "509562773" || J(21) == "509562772")) {
                for (var Q, R = a, Yd = R; R && R != R.parent;) R = R.parent, ub(R) && (Yd = R);
                Q = Yd;
                var Ca = Q.location.href;
                if (Q === Q.top) var Zd = {
                    url: Ca,
                    W: !0
                };
                else {
                    var Mb = !1,
                        Nb = Q.document;
                    Nb && Nb.referrer && (Ca = Nb.referrer, Q.parent === Q.top && (Mb = !0));
                    var Ob = Q.location.ancestorOrigins;
                    if (Ob) {
                        var Pb = Ob[Ob.length - 1];
                        Pb && Ca.indexOf(Pb) === -1 && (Mb = !1, Ca = Pb)
                    }
                    Zd = {
                        url: Ca,
                        W: Mb
                    }
                }
                var Qb = Zd;
                Qb.url && Wd !== Qb.url && (Xd = Qb.url)
            }
            Ba += Y("frm", Vd);
            Ba += Y("url", Ff(Wd));
            Ba += Y("ref", Ff(tg || c.referrer));
            Ba += Y("top", Ff(Xd))
        }
        var wg = [w, x, B, Z, N, Ua, Bb, ag, bg, cg, dg, eg, fg, gg, Ib, hg, ig, jg, kg, lg, mg, og, pg, qg, rg, sg, Ba, Mf(c), Pf(d.google_additional_params), Pf(d.google_remarketing_only ? {} : d.google_additional_conversion_params), "&hn=" + Ef("www.googleadservices.com"), Qf(a), Rf(a)].join(""),
            ae = ec(),
            Rb = wg + (ae.length > 0 ? "&debug_experiment_id=" + ae : "");
        if (d.google_remarketing_only || d.google_conversion_domain) var be = Rb;
        else {
            var xg = [Y("mid", d.google_conversion_merchant_id), Y("fcntr", d.google_basket_feed_country),
                Y("flng", d.google_basket_feed_language), Y("dscnt", d.google_basket_discount), Y("bttype", d.google_basket_transaction_type)
            ].join("");
            if (d) {
                var Sb = d.google_conversion_items;
                if (Sb) {
                    for (var Tb = [], Ub = 0, yg = Sb.length; Ub < yg; Ub++) {
                        var ma = Sb[Ub],
                            na = [];
                        ma && (na.push(If(ma.value)), na.push(If(ma.quantity)), na.push(If(ma.item_id)), na.push(If(ma.start_date)), na.push(If(ma.end_date)), Tb.push("(" + na.join("*") + ")"))
                    }
                    var Vb = Tb.length > 0 ? "&item=" + Tb.join("") : ""
                } else Vb = ""
            } else Vb = "";
            var ce = [Rb, xg, Vb].join("");
            be = ce.length >
                4E3 ? [Rb, Y("item", "elngth")].join("") : ce
        }
        m = q + be;
        e === 1 || e === 6 ? m += [Y("gcp", 1), Y("sscte", 1), Y("ct_cookie_present", 1)].join("") : e == 3 && (m += Y("gcp", 1), m += Y("ct_cookie_present", 1));
        if (Zb) {
            var de = uf();
            de !== void 0 && (m += Y("us_privacy", de || "error"))
        }
        Lf(d) && (m = d.I ? m + Y("gbcov", 1) : m + Y("gbcov", 0));
        return m
    }

    function Sf(a, b, c, d, e, f, g) {
        return '<iframe name="' + a + '"' + (g ? ' id="' + g + '"' : "") + ' title="' + b + '" width="' + d + '" height="' + e + '"' + (c ? ' src="' + c + '"' : "") + ' frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true"' + (f ? ' style="display:none"' : "") + ' scrolling="no"></iframe>'
    }

    function Tf(a) {
        return {
            ar: 1,
            bg: 1,
            cs: 1,
            da: 1,
            de: 1,
            el: 1,
            en_AU: 1,
            en_US: 1,
            en_GB: 1,
            es: 1,
            et: 1,
            fi: 1,
            fr: 1,
            hi: 1,
            hr: 1,
            hu: 1,
            id: 1,
            is: 1,
            it: 1,
            iw: 1,
            ja: 1,
            ko: 1,
            lt: 1,
            nl: 1,
            no: 1,
            pl: 1,
            pt_BR: 1,
            pt_PT: 1,
            ro: 1,
            ru: 1,
            sk: 1,
            sl: 1,
            sr: 1,
            sv: 1,
            th: 1,
            tl: 1,
            tr: 1,
            vi: 1,
            zh_CN: 1,
            zh_TW: 1
        }[a] ? a + ".html": "en_US.html"
    }

    function Uf(a, b, c, d) {
        function e(h, k, l, m, q) {
            m = m ? ' style="display:none"' : "";
            return "<img " + (q && jc() ? "attributionsrc " : "") + 'height="' + l + '" width="' + k + '" border="0" alt="" src="' + h + '"' + m + " />"
        }
        ic() && pc(2);
        var f = "";
        d.google_remarketing_only && d.google_enable_display_cookie_match && !sc && (I && H(["376635470", "376635471"], Db, 2), f = d.google_remarketing_only && d.google_enable_display_cookie_match && !sc && I && J(2) == "376635471" ? Sf("google_cookie_match_frame", "Google cookie match frame", "https://bid.g.doubleclick.net/xbbe/pixel?d=KAE",
            1, 1, !0, null) : "");
        d.google_remarketing_only && !d.google_conversion_domain && I && H(["759238990", "759238991"], Xb, 13);
        !d.google_remarketing_only || d.google_conversion_domain || I && (J(14) == "759248991" || J(14) == "759248990") || I && H(["759248990", "759248991"], Wb, 14);
        d.google_conversion_linker !== !1 && sf(d.google_gcl_cookie_prefix);
        b = Nf(a, b, c, d, d.google_remarketing_only ? 2 : 0);
        if (d.google_conversion_format == 0 && d.google_conversion_domain == null) return '<a href="https://services.google.com/sitestats/' + (Tf(d.google_conversion_language) +
            "?cid=" + Ef(d.google_conversion_id)) + '" target="_blank">' + e(b, 135, 27, !1, !1) + "</a>" + f;
        if (d.google_conversion_snippets !== void 0 && d.google_conversion_snippets > 1 || d.google_conversion_format == 3) {
            var g = b;
            d.google_conversion_domain == null && (g = d.google_conversion_format == 3 ? b : jb(b, "fmt", 3));
            b = void 0;
            jc() && !d.google_remarketing_only && (b = {
                attributionsrc: ""
            });
            return Vf(a, c, d, g, b) ? f : e(g, 1, 1, !0, !d.google_remarketing_only) + f
        }
        g = null;
        !d.google_conversion_domain && Vf(a, c, d, b) && (g = "goog_conv_iframe", b = "");
        return Sf("google_conversion_frame",
            "Google conversion frame", b, d.google_conversion_format == 2 ? 200 : 300, d.google_conversion_format == 2 ? 26 : 13, !1, g) + f
    }

    function Vf(a, b, c, d, e) {
        if (c.google_conversion_domain) return !1;
        try {
            return ue(a, b, d, null, void 0, e)
        } catch (f) {
            return !1
        }
    }

    function Wf(a) {
        if (a.google_conversion_type === "landing" || !a.google_conversion_id || a.google_remarketing_only && a.google_disable_viewthrough) return !1;
        a.google_conversion_date = new Date;
        a.google_conversion_time = a.google_conversion_date.getTime();
        a.google_conversion_snippets = typeof a.google_conversion_snippets === "number" && a.google_conversion_snippets > 0 ? a.google_conversion_snippets + 1 : 1;
        a.google_conversion_first_time === void 0 && (a.google_conversion_first_time = a.google_conversion_time);
        a.google_conversion_js_version =
            "9";
        a.google_conversion_format != 0 && a.google_conversion_format != 1 && a.google_conversion_format != 2 && a.google_conversion_format != 3 && (a.google_conversion_format = 3);
        a.google_enable_display_cookie_match !== !1 && (a.google_enable_display_cookie_match = !0);
        return !0
    }

    function Xf(a) {
        for (var b = 0; b < Cf.length; b++) a[Cf[b]] = null
    }

    function Yf(a) {
        for (var b = {}, c = 0; c < Cf.length; c++) b[Cf[c]] = a[Cf[c]];
        for (c = 0; c < Df.length; c++) b[Df[c]] = a[Df[c]];
        return b
    }

    function Of() {
        var a = "";
        ic() && (a = rc().map(function(b) {
            return b.join("-")
        }).join("_"));
        return Y("li", a)
    }

    function Qf(a) {
        if (!ac || !a.__gsaExp || !a.__gsaExp.id) return "";
        a = a.__gsaExp.id;
        if (!uc(a)) return "";
        try {
            var b = Number(a());
            return isNaN(b) ? "" : Y("gsaexp", b)
        } catch (c) {
            return ""
        }
    }

    function Rf(a) {
        function b(d, e) {
            e != null && c.push(d + "=" + encodeURIComponent(e))
        }
        if (!hc()) return "";
        a = xf(a);
        if (!a) return "";
        var c = [];
        b("&uaa", a.architecture);
        b("&uab", a.bitness);
        b("&uam", a.model);
        b("&uap", a.platform);
        b("&uapv", a.platformVersion);
        a.wow64 != null && b("&uaw", a.wow64 ? "1" : "0");
        a.fullVersionList && b("&uafvl", a.fullVersionList.map(function(d) {
            return encodeURIComponent(d.brand || "") + ";" + encodeURIComponent(d.version || "")
        }).join("|"));
        return c.join("")
    }

    function Pf(a) {
        if (!a) return "";
        var b = "",
            c;
        for (c in a) a.hasOwnProperty(c) && (b += Y(c, a[c]));
        return b
    }

    function Lf(a) {
        return (a = a.google_gtm_experiments) && a.gbcov ? !0 : !1
    }

    function Kf(a) {
        return a.google_gcl_cookie_prefix && a.google_gcl_cookie_prefix !== "_gcl" && Af.test(a.google_gcl_cookie_prefix) ? a.google_gcl_cookie_prefix : ""
    }

    function Zf(a, b) {
        var c;
        if (c = !b.google_remarketing_only)
            if (b.google_transport_url || !I || J(19) != "375603261" && J(19) != "375603260") c = !1;
            else {
                b: {
                    if (!Bf) {
                        Ab("AzMBwcG8UIaKM1GV43UaxMDFsS7hsiLx0FXw9ULTOHJRGxkUVw+UPCxlzz5CudOm+WnidygXLcAHmad6rC6C9QEAAACUeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZWFkc2VydmljZXMuY29tOjQ0MyIsImZlYXR1cmUiOiJBdHRyaWJ1dGlvblJlcG9ydGluZ0Nyb3NzQXBwV2ViIiwiZXhwaXJ5IjoxNzE0NTIxNTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d", a);
                        if (!Oc() && !Ab(r("www.googleadservices.com", "endsWith").call("www.googleadservices.com", "google.com") ? "" : "A2kc5o2ErHAbqJvF2MHSdYtnc2Bp3n6Jn2kNeko6SgHH6zXBHn0+4BbAW2No9ylVJMkzJAPwMqCVHqXm+IF1DgQAAACKeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZWFkc2VydmljZXMuY29tOjQ0MyIsImZlYXR1cmUiOiJQcml2YWN5U2FuZGJveEFkc0FQSXMiLCJleHBpcnkiOjE2OTUxNjc5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", a)) {
                            a = !1;
                            break b
                        }
                        Bf = !0
                    }
                    a = Oc()
                }
                c = a
            }
        c && (a = b.google_additional_conversion_params || {}, c = b.google_gtm_experiments, a.capi = c && c.apcm ? "2" : "1", b.google_additional_conversion_params =
            a)
    };
    var $f = ka(["https://www.googletagmanager.com/debug/bootstrap"]),
        ng = !1,
        ug = document.currentScript && document.currentScript.src || "";

    function vg(a, b, c) {
        try {
            if (!ng && (ng = !0, !c.google_gtm)) {
                var d = void 0,
                    e = void 0,
                    f = hb(a.location.href, "gtm_debug");
                zg(f) && (d = 2);
                d || b.referrer.indexOf("https://tagassistant.google.com/") !== 0 || (d = 3);
                !d && ua(b.cookie.split("; "), "__TAG_ASSISTANT=x") >= 0 && (d = 4);
                d || (e = b.documentElement.getAttribute("data-tag-assistant-present"), zg(e) && (d = 5));
                if (d) {
                    var g = "AW-" + (c.google_conversion_id || "");
                    if (!a["google.tagmanager.debugui2.queue"]) {
                        a["google.tagmanager.debugui2.queue"] = [];
                        var h = sb($f),
                            k = new p.Map([
                                ["id", g],
                                ["src",
                                    "LEGACY"
                                ],
                                ["cond", d]
                            ]),
                            l = Ta(h).toString(),
                            m = l.split(/[?#]/),
                            q = /[?]/.test(l) ? "?" + m[1] : "";
                        var w = tb(m[0], q, /[#]/.test(l) ? "#" + (q ? m[2] : m[1]) : "", k);
                        var x = Cb("SCRIPT", b);
                        bb(x, w);
                        var B = b.getElementsByTagName("script")[0];
                        B && B.parentNode && B.parentNode.insertBefore(x, B)
                    }
                    a["google.tagmanager.debugui2.queue"].push({
                        messageType: "LEGACY_CONTAINER_STARTING",
                        data: {
                            id: g,
                            scriptSource: ug
                        }
                    })
                }
            }
        } catch (Z) {}
    }

    function zg(a) {
        if (a == null || a.length === 0) return !1;
        a = Number(a);
        var b = Date.now();
        return a < b + 3E5 && a > b - 9E5
    };

    function Ag(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function Bg(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function Cg(a, b) {
        if (Ag(b) == 3) return !1;
        a();
        return !0
    }

    function Dg(a, b) {
        var c = c === void 0 ? !1 : c;
        if (!Cg(a, b))
            if (c) {
                var d = function() {
                    b.removeEventListener && b.removeEventListener("prerenderingchange", d, !1);
                    a()
                };
                b.addEventListener && b.addEventListener("prerenderingchange", d, !1)
            } else {
                var e = !1,
                    f = Bg(b),
                    g = function() {
                        !e && Cg(a, b) && (e = !0, b.removeEventListener && b.removeEventListener(f, g, !1))
                    };
                f && b.addEventListener && b.addEventListener(f, g, !1)
            }
    };

    function Eg(a) {
        var b = r(Object, "assign").call(Object, {}, a);
        a = a.id;
        b = (delete b.id, b);
        if (r(Object, "keys").call(Object, b).length) throw Error("Invalid attribute(s): " + r(Object, "keys").call(Object, b));
        return qb({
            id: a
        })
    };
    I = new function() {
        var a = [];
        var b = 0,
            c;
        for (c in gc) a[b++] = gc[c];
        a = a === void 0 ? [] : a;
        this.N = {};
        this.g = {};
        for (b = 0; b < a.length; ++b) this.g[a[b]] = ""
    };
    H(["466465925", "466465926"], Fb, 20);
    hc() && zf();
    I && H(["592230570", "592230571"], Eb, 16);
    ic() && (pc(1), qc());

    function Fg(a, b, c, d) {
        function e(m, q, w) {
            w = w === void 0 ? function() {} : w;
            var x = new Image;
            x.onload = m;
            x.onerror = w;
            x.src = q
        }

        function f() {
            --g;
            if (g <= 0) {
                var m = qe(a, !1),
                    q = m[b];
                q && (delete m[b], (m = q[0]) && m.call && m())
            }
        }
        d = d === void 0 ? [] : d;
        var g = c.length + 1;
        if (c.length === 2) {
            var h = c[0],
                k = c[1];
            fb(h, 0, "rmt_tld", h.search(gb)) >= 0 && fb(h, 0, "ipr", h.search(gb)) >= 0 && !k.match(db)[6] && (k += eb(h), c[1] = jb(k, "rmt_tld", "1"))
        }
        for (h = {
                v: 0
            }; h.v < c.length; h = {
                v: h.v
            }, h.v++) {
            k = c[h.v];
            var l = hb(k, "fmt");
            switch (Number(l)) {
                case 1:
                case 2:
                    (l = a.document.getElementById("goog_conv_iframe")) &&
                    !l.src ? Hc(k, f, l) : e(f, k);
                    break;
                case 4:
                    ue(a, a.document, k, f);
                    break;
                case 5:
                    if (a.navigator && a.navigator.sendBeacon)
                        if (a.navigator.sendBeacon(k, "")) {
                            f();
                            break
                        } else k = jb(k, "sendb", 2);
                    k = jb(k, "fmt", 3);
                    e(f, k);
                    break;
                default:
                    l = void 0, d && d[h.v] && (l = function(m) {
                        return function() {
                            Lc(d[m.v]) && f()
                        }
                    }(h)), e(f, k, l)
            }
        }
        f()
    }
    for (var Gg = ["GooglemKTybQhCsO"], Hg = A, Ig; Gg.length && (Ig = Gg.shift());) Gg.length || Fg === void 0 ? Hg[Ig] && Hg[Ig] !== Object.prototype[Ig] ? Hg = Hg[Ig] : Hg = Hg[Ig] = {} : Hg[Ig] = Fg;
    (function(a, b, c) {
        if (a) {
            vg(a, c, a);
            try {
                if (Wf(a)) {
                    var d = Yf(a);
                    I && H(["375603260", "375603261"], bc ? 1 : 0, 19);
                    I && H(["512247838", "512247839"], cc ? 1 : 0, 22);
                    I && H(["658953495", "658953496"], Hb, 23);
                    if (Ag(c) == 3) {
                        var e = "google_conversion_" + Math.floor(Math.random() * 1E9);
                        cb(c, Eg({
                            id: e
                        }));
                        Dg(function() {
                            try {
                                Zf(c, d);
                                var f = c.getElementById(e);
                                if (f) {
                                    var g = Ac(Uf(a, b, c, d));
                                    if (f.nodeType === 1 && /^(script|style)$/i.test(f.tagName)) throw Error("");
                                    f.innerHTML = ab(g)
                                }
                            } catch (h) {}
                        }, c)
                    } else Zf(c, d), cb(c, Ac(Uf(a, b, c, d)))
                }
            } catch (f) {}
            Xf(a)
        }
    })(window,
        navigator, document);
}).call(this);






