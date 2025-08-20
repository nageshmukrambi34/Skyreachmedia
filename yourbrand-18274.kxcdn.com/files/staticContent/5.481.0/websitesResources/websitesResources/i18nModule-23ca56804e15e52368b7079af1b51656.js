//# sourceMappingURL=i18nModule.js.map
var process = process || {
    env: {
        NODE_ENV: "development"
    }
};
! function(t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var r = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 6014)
}({
    14: function(t, e, n) {
        e.a = function(t, e, n) {
            e in
                t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
            return t
        }
    },
    33: function(t, e, n) {
        function o(t) {
            "@babel/helpers - typeof";
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        e.a = o
    },
    4063: function(t, e, n) {
        var o = n(33);
        window.i18next = function() {
            function t(t) {
                return null == t ? "" : "" + t
            }

            function e(t, e, n) {
                function o(t) {
                    return t &&
                        t.indexOf("###") > -1 ? t.replace(/###/g, ".") : t
                }

                function r() {
                    return !t || "string" == typeof t
                }
                for (var i = "string" != typeof e ? [].concat(e) : e.split("."); i.length > 1;) {
                    if (r()) return {};
                    var a = o(i.shift());
                    !t[a] && n && (t[a] = new n), t = t[a]
                }
                return r() ? {} : {
                    obj: t,
                    k: o(i.shift())
                }
            }

            function n(t, n, o) {
                var r = e(t, n, Object),
                    i = r.obj,
                    a = r.k;
                i[a] = o
            }

            function r(t, n, o, r) {
                var i = e(t, n, Object),
                    a = i.obj,
                    s = i.k;
                a[s] = a[s] || [], r && (a[s] = a[s].concat(o)), r || a[s].push(o)
            }

            function i(t, n) {
                var o = e(t, n),
                    r = o.obj,
                    i = o.k;
                if (r) return r[i]
            }

            function a(t) {
                return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
                    "\\$&")
            }

            function s(t) {
                return "string" == typeof t ? t.replace(/[&<>"'\/]/g, function(t) {
                    return x[t]
                }) : t
            }

            function u(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }

            function l(t) {
                return "string" == typeof t.ns && (t.ns = [t.ns]), "string" == typeof t.fallbackLng && (t.fallbackLng = [t.fallbackLng]), "string" == typeof t.fallbackNS && (t.fallbackNS = [t.fallbackNS]), t.whitelist && t.whitelist.indexOf("cimode") < 0 && t.whitelist.push("cimode"), t
            }

            function c() {}
            var p = "function" == typeof Symbol && "symbol" == Object(o.a)(Symbol.iterator) ? function(t) {
                    return Object(o.a)(t)
                } :
                function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : Object(o.a)(t)
                },
                f = function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                },
                g = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
                    }
                    return t
                },
                h = function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " +
                        Object(o.a)(e));
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                },
                d = function(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != Object(o.a)(e) && "function" != typeof e ? t : e
                },
                v = function(t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return function(t, e) {
                        var n = [],
                            o = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var a,
                                    s = t[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); o = !0);
                        } catch (t) {
                            r = !0, i = t
                        } finally {
                            try {
                                !o && s.return && s.return()
                            } finally {
                                if (r) throw i;
                            }
                        }
                        return n
                    }(t, e);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                },
                y = {
                    type: "logger",
                    log: function(t) {
                        this.output("log", t)
                    },
                    warn: function(t) {
                        this.output("warn", t)
                    },
                    error: function(t) {
                        this.output("error", t)
                    },
                    output: function(t, e) {
                        var n;
                        console && console[t] && (n = console)[t].apply(n, function(t) {
                            if (Array.isArray(t)) {
                                for (var e =
                                        0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                                return n
                            }
                            return Array.from(t)
                        }(e))
                    }
                },
                m = new(function() {
                    function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        f(this, t), this.init(e, n)
                    }
                    return t.prototype.init = function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            this.prefix = e.prefix || "i18next:", this.logger = t || y, this.options = e, this.debug = e.debug
                        }, t.prototype.setDebug = function(t) {
                            this.debug = t
                        }, t.prototype.log = function() {
                            for (var t = arguments.length, e = Array(t), n =
                                    0; n < t; n++) e[n] = arguments[n];
                            return this.forward(e, "log", "", !0)
                        }, t.prototype.warn = function() {
                            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            return this.forward(e, "warn", "", !0)
                        }, t.prototype.error = function() {
                            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            return this.forward(e, "error", "")
                        }, t.prototype.deprecate = function() {
                            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            return this.forward(e, "warn", "WARNING DEPRECATED: ", !0)
                        }, t.prototype.forward =
                        function(t, e, n, o) {
                            return o && !this.debug ? null : ("string" == typeof t[0] && (t[0] = "" + n + this.prefix + " " + t[0]), this.logger[e](t))
                        }, t.prototype.create = function(e) {
                            return new t(this.logger, g({
                                prefix: this.prefix + ":" + e + ":"
                            }, this.options))
                        }, t
                }()),
                b = function() {
                    function t() {
                        f(this, t), this.observers = {}
                    }
                    return t.prototype.on = function(t, e) {
                        var n = this;
                        t.split(" ").forEach(function(t) {
                            n.observers[t] = n.observers[t] || [], n.observers[t].push(e)
                        })
                    }, t.prototype.off = function(t, e) {
                        var n = this;
                        this.observers[t] && this.observers[t].forEach(function() {
                            if (e) {
                                var o =
                                    n.observers[t].indexOf(e);
                                o > -1 && n.observers[t].splice(o, 1)
                            } else delete n.observers[t]
                        })
                    }, t.prototype.emit = function(t) {
                        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) n[o - 1] = arguments[o];
                        if (this.observers[t]) {
                            var r = [].concat(this.observers[t]);
                            r.forEach(function(t) {
                                t.apply(void 0, n)
                            })
                        }
                        if (this.observers["*"]) {
                            var i = [].concat(this.observers["*"]);
                            i.forEach(function(e) {
                                var o;
                                e.apply(e, (o = [t]).concat.apply(o, n))
                            })
                        }
                    }, t
                }(),
                x = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#x2F;"
                },
                w = function(t) {
                    function e(n) {
                        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            ns: ["translation"],
                            defaultNS: "translation"
                        };
                        f(this, e);
                        var r = d(this, t.call(this));
                        return r.data = n || {}, r.options = o, r
                    }
                    return h(e, t), e.prototype.addNamespaces = function(t) {
                        this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
                    }, e.prototype.removeNamespaces = function(t) {
                        var e = this.options.ns.indexOf(t);
                        e > -1 && this.options.ns.splice(e, 1)
                    }, e.prototype.getResource = function(t, e, n) {
                        var o = arguments.length > 3 && void 0 !== arguments[3] ?
                            arguments[3] : {},
                            r = o.keySeparator || this.options.keySeparator;
                        void 0 === r && (r = ".");
                        var a = [t, e];
                        return n && "string" != typeof n && (a = a.concat(n)), n && "string" == typeof n && (a = a.concat(r ? n.split(r) : n)), t.indexOf(".") > -1 && (a = t.split(".")), i(this.data, a)
                    }, e.prototype.addResource = function(t, e, o, r) {
                        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                silent: !1
                            },
                            a = this.options.keySeparator;
                        void 0 === a && (a = ".");
                        var s = [t, e];
                        o && (s = s.concat(a ? o.split(a) : o)), t.indexOf(".") > -1 && (s = t.split("."), r = e, e = s[1]), this.addNamespaces(e),
                            n(this.data, s, r), i.silent || this.emit("added", t, e, o, r)
                    }, e.prototype.addResources = function(t, e, n) {
                        for (var o in n) "string" == typeof n[o] && this.addResource(t, e, o, n[o], {
                            silent: !0
                        });
                        this.emit("added", t, e, n)
                    }, e.prototype.addResourceBundle = function(t, e, o, r, a) {
                        var s = [t, e];
                        t.indexOf(".") > -1 && (s = t.split("."), r = o, o = e, e = s[1]), this.addNamespaces(e);
                        var u = i(this.data, s) || {};
                        r ? function t(e, n, o) {
                            for (var r in n) r in e ? "string" == typeof e[r] || e[r] instanceof String || "string" == typeof n[r] || n[r] instanceof String ? o && (e[r] =
                                n[r]) : t(e[r], n[r], o) : e[r] = n[r];
                            return e
                        }(u, o, a) : u = g({}, u, o), n(this.data, s, u), this.emit("added", t, e, o)
                    }, e.prototype.removeResourceBundle = function(t, e) {
                        this.hasResourceBundle(t, e) && delete this.data[t][e], this.removeNamespaces(e), this.emit("removed", t, e)
                    }, e.prototype.hasResourceBundle = function(t, e) {
                        return void 0 !== this.getResource(t, e)
                    }, e.prototype.getResourceBundle = function(t, e) {
                        return e || (e = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? g({}, this.getResource(t, e)) : this.getResource(t,
                            e)
                    }, e.prototype.toJSON = function() {
                        return this.data
                    }, e
                }(b),
                S = {
                    processors: {},
                    addPostProcessor: function(t) {
                        this.processors[t.name] = t
                    },
                    handle: function(t, e, n, o, r) {
                        var i = this;
                        return t.forEach(function(t) {
                            i.processors[t] && (e = i.processors[t].process(e, n, o, r))
                        }), e
                    }
                },
                k = function(t) {
                    function e(n) {
                        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        f(this, e);
                        var r = d(this, t.call(this));
                        return function(t, e, n) {
                            t.forEach(function(t) {
                                e[t] && (n[t] = e[t])
                            })
                        }(["resourceStore", "languageUtils", "pluralResolver",
                            "interpolator", "backendConnector"
                        ], n, r), r.options = o, r.logger = m.create("translator"), r
                    }
                    return h(e, t), e.prototype.changeLanguage = function(t) {
                            t && (this.language = t)
                        }, e.prototype.exists = function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                    interpolation: {}
                                },
                                n = this.resolve(t, e);
                            return n && void 0 !== n.res
                        }, e.prototype.extractFromKey = function(t, e) {
                            var n = e.nsSeparator || this.options.nsSeparator;
                            void 0 === n && (n = ":");
                            var o = e.keySeparator || this.options.keySeparator || ".",
                                r = e.ns || this.options.defaultNS;
                            if (n && t.indexOf(n) > -1) {
                                var i = t.split(n);
                                (n !== o || n === o && this.options.ns.indexOf(i[0]) > -1) && (r = i.shift()), t = i.join(o)
                            }
                            return "string" == typeof r && (r = [r]), {
                                key: t,
                                namespaces: r
                            }
                        }, e.prototype.translate = function(t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if ("object" !== (void 0 === n ? "undefined" : p(n)) && (n = this.options.overloadTranslationOptionHandler(arguments)), void 0 === t || null === t || "" === t) return "";
                            "number" == typeof t && (t = String(t)), "string" == typeof t && (t = [t]);
                            var o = n.keySeparator ||
                                this.options.keySeparator || ".",
                                r = this.extractFromKey(t[t.length - 1], n),
                                i = r.key,
                                a = r.namespaces,
                                s = a[a.length - 1],
                                u = n.lng || this.language,
                                l = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                            if (u && "cimode" === u.toLowerCase()) {
                                if (l) {
                                    var c = n.nsSeparator || this.options.nsSeparator;
                                    return s + c + i
                                }
                                return i
                            }
                            var f = this.resolve(t, n),
                                h = f && f.res,
                                d = f && f.usedKey || i,
                                v = Object.prototype.toString.apply(h),
                                y = void 0 !== n.joinArrays ? n.joinArrays : this.options.joinArrays,
                                m = "string" != typeof h && "boolean" != typeof h && "number" !=
                                typeof h;
                            if (h && m && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(v) < 0 && (!y || "[object Array]" !== v)) {
                                if (!n.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(d, h, n) : "key '" + i + " (" + this.language + ")' returned an object instead of string.";
                                if (n.keySeparator || this.options.keySeparator) {
                                    var b = "[object Array]" === v ? [] : {};
                                    for (var x in h) Object.prototype.hasOwnProperty.call(h,
                                        x) && (b[x] = this.translate("" + d + o + x, g({}, n, {
                                        joinArrays: !1,
                                        ns: a
                                    })));
                                    h = b
                                }
                            } else if (y && "[object Array]" === v)(h = h.join(y)) && (h = this.extendTranslation(h, t, n));
                            else {
                                var w = !1,
                                    S = !1;
                                this.isValidLookup(h) || void 0 === n.defaultValue || (w = !0, h = n.defaultValue), this.isValidLookup(h) || (S = !0, h = i);
                                var k = n.defaultValue && n.defaultValue !== h && this.options.updateMissing;
                                if (S || w || k) {
                                    this.logger.log(k ? "updateKey" : "missingKey", u, s, i, k ? n.defaultValue : h);
                                    var O = [],
                                        L = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng ||
                                            this.language);
                                    if ("fallback" === this.options.saveMissingTo && L && L[0])
                                        for (var j = 0; j < L.length; j++) O.push(L[j]);
                                    else "all" === this.options.saveMissingTo ? O = this.languageUtils.toResolveHierarchy(n.lng || this.language) : O.push(n.lng || this.language);
                                    var C = function(t, o) {
                                        e.options.missingKeyHandler ? e.options.missingKeyHandler(t, s, o, k ? n.defaultValue : h, k) : e.backendConnector && e.backendConnector.saveMissing && e.backendConnector.saveMissing(t, s, o, k ? n.defaultValue : h, k), e.emit("missingKey", t, s, o, h)
                                    };
                                    this.options.saveMissing &&
                                        (this.options.saveMissingPlurals && n.count ? O.forEach(function(t) {
                                            var n = e.pluralResolver.getPluralFormsOfKey(t, i);
                                            n.forEach(function(e) {
                                                return C([t], e)
                                            })
                                        }) : C(O, i))
                                }
                                h = this.extendTranslation(h, t, n), S && h === i && this.options.appendNamespaceToMissingKey && (h = s + ":" + i), S && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(h))
                            }
                            return h
                        }, e.prototype.extendTranslation = function(t, e, n) {
                            var o = this;
                            n.interpolation && this.interpolator.init(g({}, n, {
                                interpolation: g({}, this.options.interpolation,
                                    n.interpolation)
                            }));
                            var r = n.replace && "string" != typeof n.replace ? n.replace : n;
                            this.options.interpolation.defaultVariables && (r = g({}, this.options.interpolation.defaultVariables, r)), t = this.interpolator.interpolate(t, r, n.lng || this.language), !1 !== n.nest && (t = this.interpolator.nest(t, function() {
                                return o.translate.apply(o, arguments)
                            }, n)), n.interpolation && this.interpolator.reset();
                            var i = n.postProcess || this.options.postProcess,
                                a = "string" == typeof i ? [i] : i;
                            return void 0 !== t && a && a.length && !1 !== n.applyPostProcessor &&
                                (t = S.handle(a, t, e, n, this)), t
                        }, e.prototype.resolve = function(t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                o = void 0,
                                r = void 0;
                            return "string" == typeof t && (t = [t]), t.forEach(function(t) {
                                if (!e.isValidLookup(o)) {
                                    var i = e.extractFromKey(t, n),
                                        a = i.key;
                                    r = a;
                                    var s = i.namespaces;
                                    e.options.fallbackNS && (s = s.concat(e.options.fallbackNS));
                                    var u = void 0 !== n.count && "string" != typeof n.count,
                                        l = void 0 !== n.context && "string" == typeof n.context && "" !== n.context,
                                        c = n.lngs ? n.lngs : e.languageUtils.toResolveHierarchy(n.lng ||
                                            e.language);
                                    s.forEach(function(t) {
                                        e.isValidLookup(o) || c.forEach(function(r) {
                                            if (!e.isValidLookup(o)) {
                                                var i = a,
                                                    s = [i],
                                                    c = void 0;
                                                u && (c = e.pluralResolver.getSuffix(r, n.count)), u && l && s.push(i + c), l && s.push(i += "" + e.options.contextSeparator + n.context), u && s.push(i += c);
                                                for (var p = void 0; p = s.pop();) e.isValidLookup(o) || (o = e.getResource(r, t, p, n))
                                            }
                                        })
                                    })
                                }
                            }), {
                                res: o,
                                usedKey: r
                            }
                        }, e.prototype.isValidLookup = function(t) {
                            return !(void 0 === t || !this.options.returnNull && null === t || !this.options.returnEmptyString && "" === t)
                        }, e.prototype.getResource =
                        function(t, e, n) {
                            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                            return this.resourceStore.getResource(t, e, n, o)
                        }, e
                }(b),
                O = function() {
                    function t(e) {
                        f(this, t), this.options = e, this.whitelist = this.options.whitelist || !1, this.logger = m.create("languageUtils")
                    }
                    return t.prototype.getScriptPartFromCode = function(t) {
                        if (!t || t.indexOf("-") < 0) return null;
                        var e = t.split("-");
                        return 2 === e.length ? null : (e.pop(), this.formatLanguageCode(e.join("-")))
                    }, t.prototype.getLanguagePartFromCode = function(t) {
                        if (!t ||
                            t.indexOf("-") < 0) return t;
                        var e = t.split("-");
                        return this.formatLanguageCode(e[0])
                    }, t.prototype.formatLanguageCode = function(t) {
                        if ("string" == typeof t && t.indexOf("-") > -1) {
                            var e = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                                n = t.split("-");
                            return this.options.lowerCaseLng ? n = n.map(function(t) {
                                return t.toLowerCase()
                            }) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = u(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] =
                                n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = u(n[1].toLowerCase())), e.indexOf(n[2].toLowerCase()) > -1 && (n[2] = u(n[2].toLowerCase()))), n.join("-")
                        }
                        return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t
                    }, t.prototype.isWhitelisted = function(t) {
                        return ("languageOnly" === this.options.load || this.options.nonExplicitWhitelist) && (t = this.getLanguagePartFromCode(t)), !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(t) >
                            -1
                    }, t.prototype.getFallbackCodes = function(t, e) {
                        if (!t) return [];
                        if ("string" == typeof t && (t = [t]), "[object Array]" === Object.prototype.toString.apply(t)) return t;
                        if (!e) return t.default || [];
                        var n = t[e];
                        return n || (n = t[this.getScriptPartFromCode(e)]), n || (n = t[this.formatLanguageCode(e)]), n || (n = t.default), n || []
                    }, t.prototype.toResolveHierarchy = function(t, e) {
                        var n = this,
                            o = this.getFallbackCodes(e || this.options.fallbackLng || [], t),
                            r = [],
                            i = function(t) {
                                t && (n.isWhitelisted(t) ? r.push(t) : n.logger.warn("rejecting non-whitelisted language code: " +
                                    t))
                            };
                        return "string" == typeof t && t.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(t)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(t)), "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(t))) : "string" == typeof t && i(this.formatLanguageCode(t)), o.forEach(function(t) {
                            r.indexOf(t) < 0 && i(n.formatLanguageCode(t))
                        }), r
                    }, t
                }(),
                L = [{
                        lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR",
                            "tg", "ti", "tr", "uz", "wa"
                        ],
                        nr: [1, 2],
                        fc: 1
                    }, {
                        lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "he", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                        nr: [1, 2],
                        fc: 2
                    }, {
                        lngs: ["ay", "bo", "cgg", "fa", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi",
                            "wo", "zh"
                        ],
                        nr: [1],
                        fc: 3
                    }, {
                        lngs: ["be", "bs", "dz", "hr", "ru", "sr", "uk"],
                        nr: [1, 2, 5],
                        fc: 4
                    }, {
                        lngs: ["ar"],
                        nr: [0, 1, 2, 3, 11, 100],
                        fc: 5
                    }, {
                        lngs: ["cs", "sk"],
                        nr: [1, 2, 5],
                        fc: 6
                    }, {
                        lngs: ["csb", "pl"],
                        nr: [1, 2, 5],
                        fc: 7
                    }, {
                        lngs: ["cy"],
                        nr: [1, 2, 3, 8],
                        fc: 8
                    }, {
                        lngs: ["fr"],
                        nr: [1, 2],
                        fc: 9
                    }, {
                        lngs: ["ga"],
                        nr: [1, 2, 3, 7, 11],
                        fc: 10
                    }, {
                        lngs: ["gd"],
                        nr: [1, 2, 3, 20],
                        fc: 11
                    }, {
                        lngs: ["is"],
                        nr: [1, 2],
                        fc: 12
                    }, {
                        lngs: ["jv"],
                        nr: [0, 1],
                        fc: 13
                    }, {
                        lngs: ["kw"],
                        nr: [1, 2, 3, 4],
                        fc: 14
                    }, {
                        lngs: ["lt"],
                        nr: [1, 2, 10],
                        fc: 15
                    }, {
                        lngs: ["lv"],
                        nr: [1, 2, 0],
                        fc: 16
                    }, {
                        lngs: ["mk"],
                        nr: [1, 2],
                        fc: 17
                    },
                    {
                        lngs: ["mnk"],
                        nr: [0, 1, 2],
                        fc: 18
                    }, {
                        lngs: ["mt"],
                        nr: [1, 2, 11, 20],
                        fc: 19
                    }, {
                        lngs: ["or"],
                        nr: [2, 1],
                        fc: 2
                    }, {
                        lngs: ["ro"],
                        nr: [1, 2, 20],
                        fc: 20
                    }, {
                        lngs: ["sl"],
                        nr: [5, 1, 2, 3],
                        fc: 21
                    }
                ],
                j = {
                    1: function(t) {
                        return Number(t > 1)
                    },
                    2: function(t) {
                        return Number(1 != t)
                    },
                    3: function(t) {
                        return 0
                    },
                    4: function(t) {
                        return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    },
                    5: function(t) {
                        return Number(0 === t ? 0 : 1 == t ? 1 : 2 == t ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5)
                    },
                    6: function(t) {
                        return Number(1 == t ? 0 : t >= 2 && t <= 4 ? 1 : 2)
                    },
                    7: function(t) {
                        return Number(1 ==
                            t ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    },
                    8: function(t) {
                        return Number(1 == t ? 0 : 2 == t ? 1 : 8 != t && 11 != t ? 2 : 3)
                    },
                    9: function(t) {
                        return Number(t >= 2)
                    },
                    10: function(t) {
                        return Number(1 == t ? 0 : 2 == t ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4)
                    },
                    11: function(t) {
                        return Number(1 == t || 11 == t ? 0 : 2 == t || 12 == t ? 1 : t > 2 && t < 20 ? 2 : 3)
                    },
                    12: function(t) {
                        return Number(t % 10 != 1 || t % 100 == 11)
                    },
                    13: function(t) {
                        return Number(0 !== t)
                    },
                    14: function(t) {
                        return Number(1 == t ? 0 : 2 == t ? 1 : 3 == t ? 2 : 3)
                    },
                    15: function(t) {
                        return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1 :
                            2)
                    },
                    16: function(t) {
                        return Number(t % 10 == 1 && t % 100 != 11 ? 0 : 0 !== t ? 1 : 2)
                    },
                    17: function(t) {
                        return Number(1 == t || t % 10 == 1 ? 0 : 1)
                    },
                    18: function(t) {
                        return Number(0 == t ? 0 : 1 == t ? 1 : 2)
                    },
                    19: function(t) {
                        return Number(1 == t ? 0 : 0 === t || t % 100 > 1 && t % 100 < 11 ? 1 : t % 100 > 10 && t % 100 < 20 ? 2 : 3)
                    },
                    20: function(t) {
                        return Number(1 == t ? 0 : 0 === t || t % 100 > 0 && t % 100 < 20 ? 1 : 2)
                    },
                    21: function(t) {
                        return Number(t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0)
                    }
                },
                C = function() {
                    function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        f(this, t), this.languageUtils =
                            e, this.options = n, this.logger = m.create("pluralResolver"), this.rules = function() {
                                var t = {};
                                return L.forEach(function(e) {
                                    e.lngs.forEach(function(n) {
                                        t[n] = {
                                            numbers: e.nr,
                                            plurals: j[e.fc]
                                        }
                                    })
                                }), t
                            }()
                    }
                    return t.prototype.addRule = function(t, e) {
                        this.rules[t] = e
                    }, t.prototype.getRule = function(t) {
                        return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
                    }, t.prototype.needsPlural = function(t) {
                        var e = this.getRule(t);
                        return e && e.numbers.length > 1
                    }, t.prototype.getPluralFormsOfKey = function(t, e) {
                        var n = this,
                            o = [],
                            r = this.getRule(t);
                        return r.numbers.forEach(function(r) {
                            var i = n.getSuffix(t, r);
                            o.push("" + e + i)
                        }), o
                    }, t.prototype.getSuffix = function(t, e) {
                        var n = this,
                            o = this.getRule(t);
                        if (o) {
                            var r = o.noAbs ? o.plurals(e) : o.plurals(Math.abs(e)),
                                i = o.numbers[r];
                            this.options.simplifyPluralSuffix && 2 === o.numbers.length && 1 === o.numbers[0] && (2 === i ? i = "plural" : 1 === i && (i = ""));
                            var a = function() {
                                return n.options.prepend && i.toString() ? n.options.prepend + i.toString() : i.toString()
                            };
                            return "v1" === this.options.compatibilityJSON ? 1 === i ? "" :
                                "number" == typeof i ? "_plural_" + i.toString() : a() : "v2" === this.options.compatibilityJSON || 2 === o.numbers.length && 1 === o.numbers[0] ? a() : 2 === o.numbers.length && 1 === o.numbers[0] ? a() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString()
                        }
                        return this.logger.warn("no plural rule found for: " + t), ""
                    }, t
                }(),
                R = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        f(this, e), this.logger = m.create("interpolator"), this.init(t, !0)
                    }
                    return e.prototype.init = function() {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                e = arguments[1];
                            e && (this.options = t, this.format = t.interpolation && t.interpolation.format || function(t) {
                                return t
                            }, this.escape = t.interpolation && t.interpolation.escape || s), t.interpolation || (t.interpolation = {
                                escapeValue: !0
                            });
                            var n = t.interpolation;
                            this.escapeValue = void 0 === n.escapeValue || n.escapeValue, this.prefix = n.prefix ? a(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? a(n.suffix) : n.suffixEscaped || "}}", this.formatSeparator = n.formatSeparator ?
                                n.formatSeparator : n.formatSeparator || ",", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? a(n.nestingPrefix) : n.nestingPrefixEscaped || a("$t("), this.nestingSuffix = n.nestingSuffix ? a(n.nestingSuffix) : n.nestingSuffixEscaped || a(")"), this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1E3, this.resetRegExp()
                        }, e.prototype.reset = function() {
                            this.options && this.init(this.options)
                        }, e.prototype.resetRegExp = function() {
                            var t =
                                this.prefix + "(.+?)" + this.suffix;
                            this.regexp = new RegExp(t, "g");
                            var e = "" + this.prefix + this.unescapePrefix + "(.+?)" + this.unescapeSuffix + this.suffix;
                            this.regexpUnescape = new RegExp(e, "g");
                            var n = this.nestingPrefix + "(.+?)" + this.nestingSuffix;
                            this.nestingRegexp = new RegExp(n, "g")
                        }, e.prototype.interpolate = function(e, n, o) {
                            function r(t) {
                                return t.replace(/\$/g, "$$$$")
                            }
                            var a = this,
                                s = void 0,
                                u = void 0,
                                l = void 0,
                                c = function(t) {
                                    if (t.indexOf(a.formatSeparator) < 0) return i(n, t);
                                    var e = t.split(a.formatSeparator),
                                        r = e.shift().trim(),
                                        s = e.join(a.formatSeparator).trim();
                                    return a.format(i(n, r), s, o)
                                };
                            for (this.resetRegExp(), l = 0;
                                (s = this.regexpUnescape.exec(e)) && (u = c(s[1].trim()), e = e.replace(s[0], u), this.regexpUnescape.lastIndex = 0, !(++l >= this.maxReplaces)););
                            for (l = 0;
                                (s = this.regexp.exec(e)) && ("string" != typeof(u = c(s[1].trim())) && (u = t(u)), u || (this.logger.warn("missed to pass in variable " + s[1] + " for interpolating " + e), u = ""), u = r(this.escapeValue ? this.escape(u) : u), e = e.replace(s[0], u), this.regexp.lastIndex = 0, !(++l >= this.maxReplaces)););
                            return e
                        },
                        e.prototype.nest = function(e, n) {
                            function o(t, e) {
                                if (t.indexOf(",") < 0) return t;
                                var n = t.split(",");
                                t = n.shift();
                                var o = n.join(",");
                                o = (o = this.interpolate(o, s)).replace(/'/g, '"');
                                try {
                                    s = JSON.parse(o), e && (s = g({}, e, s))
                                } catch (e) {
                                    this.logger.error("failed parsing options string in nesting for key " + t, e)
                                }
                                return t
                            }
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                i = void 0,
                                a = void 0,
                                s = g({}, r);
                            for (s.applyPostProcessor = !1; i = this.nestingRegexp.exec(e);) {
                                if ((a = n(o.call(this, i[1].trim(), s), s)) && i[0] === e &&
                                    "string" != typeof a) return a;
                                "string" != typeof a && (a = t(a)), a || (this.logger.warn("missed to resolve " + i[1] + " for nesting " + e), a = ""), e = e.replace(i[0], a), this.regexp.lastIndex = 0
                            }
                            return e
                        }, e
                }(),
                N = function(t) {
                    function e(n, o, r) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        f(this, e);
                        var a = d(this, t.call(this));
                        return a.backend = n, a.store = o, a.languageUtils = r.languageUtils, a.options = i, a.logger = m.create("backendConnector"), a.state = {}, a.queue = [], a.backend && a.backend.init && a.backend.init(r, i.backend,
                            i), a
                    }
                    return h(e, t), e.prototype.queueLoad = function(t, e, n) {
                            var o = this,
                                r = [],
                                i = [],
                                a = [],
                                s = [];
                            return t.forEach(function(t) {
                                var n = !0;
                                e.forEach(function(e) {
                                    var a = t + "|" + e;
                                    o.store.hasResourceBundle(t, e) ? o.state[a] = 2 : o.state[a] < 0 || (1 === o.state[a] ? i.indexOf(a) < 0 && i.push(a) : (o.state[a] = 1, n = !1, i.indexOf(a) < 0 && i.push(a), r.indexOf(a) < 0 && r.push(a), s.indexOf(e) < 0 && s.push(e)))
                                }), n || a.push(t)
                            }), (r.length || i.length) && this.queue.push({
                                pending: i,
                                loaded: {},
                                errors: [],
                                callback: n
                            }), {
                                toLoad: r,
                                pending: i,
                                toLoadLanguages: a,
                                toLoadNamespaces: s
                            }
                        },
                        e.prototype.loaded = function(t, e, n) {
                            var o = this,
                                i = t.split("|"),
                                a = v(i, 2),
                                s = a[0],
                                u = a[1];
                            e && this.emit("failedLoading", s, u, e), n && this.store.addResourceBundle(s, u, n), this.state[t] = e ? -1 : 2, this.queue.forEach(function(n) {
                                r(n.loaded, [s], u),
                                    function(t, e) {
                                        for (var n = t.indexOf(e); - 1 !== n;) t.splice(n, 1), n = t.indexOf(e)
                                    }(n.pending, t), e && n.errors.push(e), 0 !== n.pending.length || n.done || (o.emit("loaded", n.loaded), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                            }), this.queue = this.queue.filter(function(t) {
                                return !t.done
                            })
                        },
                        e.prototype.read = function(t, e, n) {
                            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                r = this,
                                i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 250,
                                a = arguments[5];
                            return t.length ? this.backend[n](t, e, function(s, u) {
                                return s && u && o < 5 ? void setTimeout(function() {
                                    r.read.call(r, t, e, n, o + 1, 2 * i, a)
                                }, i) : void a(s, u)
                            }) : a(null, {})
                        }, e.prototype.load = function(t, e, n) {
                            var o = this;
                            if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), n && n();
                            var r = g({},
                                this.backend.options, this.options.backend);
                            "string" == typeof t && (t = this.languageUtils.toResolveHierarchy(t)), "string" == typeof e && (e = [e]);
                            var a = this.queueLoad(t, e, n);
                            return a.toLoad.length ? void(r.allowMultiLoading && this.backend.readMulti ? this.read(a.toLoadLanguages, a.toLoadNamespaces, "readMulti", null, null, function(t, e) {
                                t && o.logger.warn("loading namespaces " + a.toLoadNamespaces.join(", ") + " for languages " + a.toLoadLanguages.join(", ") + " via multiloading failed", t), !t && e && o.logger.log("successfully loaded namespaces " +
                                    a.toLoadNamespaces.join(", ") + " for languages " + a.toLoadLanguages.join(", ") + " via multiloading", e), a.toLoad.forEach(function(n) {
                                    var r = n.split("|"),
                                        a = v(r, 2),
                                        s = a[0],
                                        u = a[1],
                                        l = i(e, [s, u]);
                                    if (l) o.loaded(n, t, l);
                                    else {
                                        var c = "loading namespace " + u + " for language " + s + " via multiloading failed";
                                        o.loaded(n, c), o.logger.error(c)
                                    }
                                })
                            }) : a.toLoad.forEach(function(t) {
                                o.loadOne(t)
                            })) : (a.pending.length || n(), null)
                        }, e.prototype.reload = function(t, e) {
                            var n = this;
                            this.backend || this.logger.warn("No backend was added via i18next.use. Will not load resources.");
                            var o = g({}, this.backend.options, this.options.backend);
                            "string" == typeof t && (t = this.languageUtils.toResolveHierarchy(t)), "string" == typeof e && (e = [e]), o.allowMultiLoading && this.backend.readMulti ? this.read(t, e, "readMulti", null, null, function(o, r) {
                                o && n.logger.warn("reloading namespaces " + e.join(", ") + " for languages " + t.join(", ") + " via multiloading failed", o), !o && r && n.logger.log("successfully reloaded namespaces " + e.join(", ") + " for languages " + t.join(", ") + " via multiloading", r), t.forEach(function(t) {
                                    e.forEach(function(e) {
                                        var a =
                                            i(r, [t, e]);
                                        if (a) n.loaded(t + "|" + e, o, a);
                                        else {
                                            var s = "reloading namespace " + e + " for language " + t + " via multiloading failed";
                                            n.loaded(t + "|" + e, s), n.logger.error(s)
                                        }
                                    })
                                })
                            }) : t.forEach(function(t) {
                                e.forEach(function(e) {
                                    n.loadOne(t + "|" + e, "re")
                                })
                            })
                        }, e.prototype.loadOne = function(t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                o = t.split("|"),
                                r = v(o, 2),
                                i = r[0],
                                a = r[1];
                            this.read(i, a, "read", null, null, function(o, r) {
                                o && e.logger.warn(n + "loading namespace " + a + " for language " + i + " failed", o), !o &&
                                    r && e.logger.log(n + "loaded namespace " + a + " for language " + i, r), e.loaded(t, o, r)
                            })
                        }, e.prototype.saveMissing = function(t, e, n, o, r) {
                            this.backend && this.backend.create && this.backend.create(t, e, n, o, null, {
                                isUpdate: r
                            }), t && t[0] && this.store.addResource(t[0], e, n, o)
                        }, e
                }(b),
                E = function(t) {
                    function e(n, o, r) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        f(this, e);
                        var a = d(this, t.call(this));
                        return a.cache = n, a.store = o, a.services = r, a.options = i, a.logger = m.create("cacheConnector"), a.cache && a.cache.init &&
                            a.cache.init(r, i.cache, i), a
                    }
                    return h(e, t), e.prototype.load = function(t, e, n) {
                        var o = this;
                        if (!this.cache) return n && n();
                        var r = g({}, this.cache.options, this.options.cache),
                            i = "string" == typeof t ? this.services.languageUtils.toResolveHierarchy(t) : t;
                        r.enabled ? this.cache.load(i, function(t, e) {
                            if (t && o.logger.error("loading languages " + i.join(", ") + " from cache failed", t), e)
                                for (var r in e)
                                    if (Object.prototype.hasOwnProperty.call(e, r))
                                        for (var a in e[r])
                                            if (Object.prototype.hasOwnProperty.call(e[r], a) && "i18nStamp" !==
                                                a) {
                                                var s = e[r][a];
                                                s && o.store.addResourceBundle(r, a, s)
                                            }
                            n && n()
                        }) : n && n()
                    }, e.prototype.save = function() {
                        this.cache && this.options.cache && this.options.cache.enabled && this.cache.save(this.store.data)
                    }, e
                }(b);
            return new(function(t) {
                function e() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        o = arguments[1];
                    f(this, e);
                    var r = d(this, t.call(this));
                    if (r.options = l(n), r.services = {}, r.logger = m, r.modules = {
                            external: []
                        }, o && !r.isInitialized && !n.isClone) {
                        var i;
                        if (!r.options.initImmediate) return i = r.init(n,
                            o), d(r, i);
                        setTimeout(function() {
                            r.init(n, o)
                        }, 0)
                    }
                    return r
                }
                return h(e, t), e.prototype.init = function() {
                        function t(t) {
                            return t ? "function" == typeof t ? new t : t : null
                        }
                        var e = this,
                            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            o = arguments[1];
                        if ("function" == typeof n && (o = n, n = {}), this.options = g({}, {
                                debug: !1,
                                initImmediate: !0,
                                ns: ["translation"],
                                defaultNS: ["translation"],
                                fallbackLng: ["dev"],
                                fallbackNS: !1,
                                whitelist: !1,
                                nonExplicitWhitelist: !1,
                                load: "all",
                                preload: !1,
                                simplifyPluralSuffix: !0,
                                keySeparator: ".",
                                nsSeparator: ":",
                                pluralSeparator: "_",
                                contextSeparator: "_",
                                saveMissing: !1,
                                updateMissing: !1,
                                saveMissingTo: "fallback",
                                saveMissingPlurals: !0,
                                missingKeyHandler: !1,
                                postProcess: !1,
                                returnNull: !0,
                                returnEmptyString: !0,
                                returnObjects: !1,
                                joinArrays: !1,
                                returnedObjectHandler: function() {},
                                parseMissingKeyHandler: !1,
                                appendNamespaceToMissingKey: !1,
                                appendNamespaceToCIMode: !1,
                                overloadTranslationOptionHandler: function(t) {
                                    return {
                                        defaultValue: t[1]
                                    }
                                },
                                interpolation: {
                                    escapeValue: !0,
                                    format: function(t, e, n) {
                                        return t
                                    },
                                    prefix: "{{",
                                    suffix: "}}",
                                    formatSeparator: ",",
                                    unescapePrefix: "-",
                                    nestingPrefix: "$t(",
                                    nestingSuffix: ")",
                                    maxReplaces: 1E3
                                }
                            }, this.options, l(n)), this.format = this.options.interpolation.format, o || (o = c), !this.options.isClone) {
                            this.modules.logger ? m.init(t(this.modules.logger), this.options) : m.init(null, this.options);
                            var r = new O(this.options);
                            this.store = new w(this.options.resources, this.options);
                            var i = this.services;
                            i.logger = m, i.resourceStore = this.store, i.resourceStore.on("added removed", function(t, e) {
                                    i.cacheConnector.save()
                                }),
                                i.languageUtils = r, i.pluralResolver = new C(r, {
                                    prepend: this.options.pluralSeparator,
                                    compatibilityJSON: this.options.compatibilityJSON,
                                    simplifyPluralSuffix: this.options.simplifyPluralSuffix
                                }), i.interpolator = new R(this.options), i.backendConnector = new N(t(this.modules.backend), i.resourceStore, i, this.options), i.backendConnector.on("*", function(t) {
                                    for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
                                    e.emit.apply(e, [t].concat(o))
                                }), i.backendConnector.on("loaded", function(t) {
                                    i.cacheConnector.save()
                                }),
                                i.cacheConnector = new E(t(this.modules.cache), i.resourceStore, i, this.options), i.cacheConnector.on("*", function(t) {
                                    for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
                                    e.emit.apply(e, [t].concat(o))
                                }), this.modules.languageDetector && (i.languageDetector = t(this.modules.languageDetector), i.languageDetector.init(i, this.options.detection, this.options)), this.translator = new k(this.services, this.options), this.translator.on("*", function(t) {
                                    for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0),
                                            r = 1; r < n; r++) o[r - 1] = arguments[r];
                                    e.emit.apply(e, [t].concat(o))
                                }), this.modules.external.forEach(function(t) {
                                    t.init && t.init(e)
                                })
                        }["getResource", "addResource", "addResources", "addResourceBundle", "removeResourceBundle", "hasResourceBundle", "getResourceBundle"].forEach(function(t) {
                            e[t] = function() {
                                var n;
                                return (n = e.store)[t].apply(n, arguments)
                            }
                        });
                        var a = function() {
                            e.changeLanguage(e.options.lng, function(t, n) {
                                e.isInitialized = !0, e.logger.log("initialized", e.options), e.emit("initialized", e.options), o(t, n)
                            })
                        };
                        return this.options.resources ||
                            !this.options.initImmediate ? a() : setTimeout(a, 0), this
                    }, e.prototype.loadResources = function() {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
                        if (this.options.resources) e(null);
                        else {
                            if (this.language && "cimode" === this.language.toLowerCase()) return e();
                            var n = [],
                                o = function(e) {
                                    if (e) {
                                        var o = t.services.languageUtils.toResolveHierarchy(e);
                                        o.forEach(function(t) {
                                            n.indexOf(t) < 0 && n.push(t)
                                        })
                                    }
                                };
                            if (this.language) o(this.language);
                            else {
                                var r = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                r.forEach(function(t) {
                                    return o(t)
                                })
                            }
                            this.options.preload && this.options.preload.forEach(function(t) {
                                return o(t)
                            }), this.services.cacheConnector.load(n, this.options.ns, function() {
                                t.services.backendConnector.load(n, t.options.ns, e)
                            })
                        }
                    }, e.prototype.reloadResources = function(t, e) {
                        t || (t = this.languages), e || (e = this.options.ns), this.services.backendConnector.reload(t, e)
                    }, e.prototype.use = function(t) {
                        return "backend" === t.type && (this.modules.backend = t), "cache" === t.type && (this.modules.cache = t), ("logger" === t.type ||
                            t.log && t.warn && t.error) && (this.modules.logger = t), "languageDetector" === t.type && (this.modules.languageDetector = t), "postProcessor" === t.type && S.addPostProcessor(t), "3rdParty" === t.type && this.modules.external.push(t), this
                    }, e.prototype.changeLanguage = function(t, e) {
                        var n = this,
                            o = function(t, o) {
                                n.translator.changeLanguage(o), o && (n.emit("languageChanged", o), n.logger.log("languageChanged", o)), e && e(t, function() {
                                    return n.t.apply(n, arguments)
                                })
                            },
                            r = function(t) {
                                t && (n.language = t, n.languages = n.services.languageUtils.toResolveHierarchy(t),
                                    n.translator.language || n.translator.changeLanguage(t), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(t)), n.loadResources(function(e) {
                                    o(e, t)
                                })
                            };
                        t || !this.services.languageDetector || this.services.languageDetector.async ? !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(r) : r(t) : r(this.services.languageDetector.detect())
                    }, e.prototype.getFixedT = function(t, e) {
                        var n = this,
                            o = function t(e, o) {
                                for (var r = arguments.length, i =
                                        Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++) i[a - 2] = arguments[a];
                                var s = g({}, o);
                                return "object" !== (void 0 === o ? "undefined" : p(o)) && (s = n.options.overloadTranslationOptionHandler([e, o].concat(i))), s.lng = s.lng || t.lng, s.lngs = s.lngs || t.lngs, s.ns = s.ns || t.ns, n.t(e, s)
                            };
                        return "string" == typeof t ? o.lng = t : o.lngs = t, o.ns = e, o
                    }, e.prototype.t = function() {
                        var t;
                        return this.translator && (t = this.translator).translate.apply(t, arguments)
                    }, e.prototype.exists = function() {
                        var t;
                        return this.translator && (t = this.translator).exists.apply(t, arguments)
                    },
                    e.prototype.setDefaultNamespace = function(t) {
                        this.options.defaultNS = t
                    }, e.prototype.loadNamespaces = function(t, e) {
                        var n = this;
                        return this.options.ns ? ("string" == typeof t && (t = [t]), t.forEach(function(t) {
                            n.options.ns.indexOf(t) < 0 && n.options.ns.push(t)
                        }), void this.loadResources(e)) : e && e()
                    }, e.prototype.loadLanguages = function(t, e) {
                        "string" == typeof t && (t = [t]);
                        var n = this.options.preload || [],
                            o = t.filter(function(t) {
                                return n.indexOf(t) < 0
                            });
                        return o.length ? (this.options.preload = n.concat(o), void this.loadResources(e)) :
                            e()
                    }, e.prototype.dir = function(t) {
                        return t || (t = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), t ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(t)) >=
                            0 ? "rtl" : "ltr" : "rtl"
                    }, e.prototype.createInstance = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments[1];
                        return new e(t, n)
                    }, e.prototype.cloneInstance = function() {
                        var t = this,
                            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c,
                            r = g({}, this.options, n, {
                                isClone: !0
                            }),
                            i = new e(r);
                        return ["store", "services", "language"].forEach(function(e) {
                            i[e] = t[e]
                        }), i.translator = new k(i.services, i.options), i.translator.on("*",
                            function(t) {
                                for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) n[o - 1] = arguments[o];
                                i.emit.apply(i, [t].concat(n))
                            }), i.init(r, o), i.translator.options = i.options, i
                    }, e
            }(b))
        }()
    },
    4064: function(t, e, n) {
        var o = n(14);
        ! function() {
            var t, e = "en";
            webwave.isDef(window.wwConfig) && webwave.isDef(window.wwConfig.pageLanguageCode) && (e = wwConfig.pageLanguageCode);
            try {
                var n = document.getElementById("translations");
                webwave.isDefAndNotNull(n) && (t = Object(o.a)({}, e, JSON.parse(n.textContent)), null !== n.parentNode && n.parentNode.removeChild(n))
            } catch (e) {
                console.error("Error during translations parsing",
                    e), t = {}
            }
            i18next.init({
                resources: t,
                fallbackLng: e,
                shorcutFunction: "defaultValue",
                lng: e,
                interpolation: {
                    prefix: "__",
                    suffix: "__"
                }
            })
        }(), window.i18n = i18next
    },
    6014: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        n(4063), n(4064);
        window[window.WWNamespace.LOAD_MODULE_SERVICE].notifyAboutLoad(window[window.WWNamespace.MODULES].I18N)
    }
});
var process = process || {
    env: {
        NODE_ENV: "development"
    }
};