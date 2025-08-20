//# sourceMappingURL=photoswipeModule.js.map
/*
 PhotoSwipe - v4.1.1 - 2015-12-24
 http://photoswipe.com
 Copyright (c) 2015 Dmitry Semenov;  PhotoSwipe Default UI - 4.1.1 - 2015-12-24
 http://photoswipe.com
 Copyright (c) 2015 Dmitry Semenov; */
var process = process || {
    env: {
        NODE_ENV: "development"
    }
};
! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var i = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 6954)
}({
    0: function(e, t, n) {
        t.a = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
    },
    1: function(e, t, n) {
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        t.a = function(e, t, n) {
            t && o(e.prototype, t);
            n && o(e, n);
            return Object.defineProperty(e, "prototype", {
                writable: !1
            }), e
        }
    },
    33: function(e, t, n) {
        function o(e) {
            "@babel/helpers - typeof";
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } :
                function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
        }
        t.a = o
    },
    3342: function(e, t, n) {
        var o = n(33);
        t.a = function(e, t, n, i) {
            var a = {
                features: null,
                bind: function(e, t, n, o) {
                    var i = (o ? "remove" : "add") + "EventListener";
                    t = t.split(" ");
                    for (var a = 0; a < t.length; a++) t[a] && e[i](t[a], n, !1)
                },
                isArray: function(e) {
                    return e instanceof Array
                },
                createEl: function(e, t) {
                    var n = document.createElement(t || "div");
                    return e && (n.className = e), n
                },
                getScrollY: function() {
                    var e = window.pageYOffset;
                    return void 0 !== e ? e : document.documentElement.scrollTop
                },
                unbind: function(e, t, n) {
                    a.bind(e, t, n, !0)
                },
                removeClass: function(e, t) {
                    var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                    e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                },
                addClass: function(e, t) {
                    a.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
                },
                hasClass: function(e, t) {
                    return e.className && (new RegExp("(^|\\s)" + t + "(\\s|$)")).test(e.className)
                },
                getChildByClass: function(e, t) {
                    for (var n = e.firstChild; n;) {
                        if (a.hasClass(n, t)) return n;
                        n = n.nextSibling
                    }
                },
                arraySearch: function(e, t, n) {
                    for (var o = e.length; o--;)
                        if (e[o][n] === t) return o;
                    return -1
                },
                extend: function(e, t, n) {
                    for (var o in t)
                        if (t.hasOwnProperty(o)) {
                            if (n && e.hasOwnProperty(o)) continue;
                            e[o] = t[o]
                        }
                },
                easing: {
                    sine: {
                        out: function(e) {
                            return Math.sin(e * (Math.PI / 2))
                        },
                        inOut: function(e) {
                            return -(Math.cos(Math.PI * e) - 1) / 2
                        }
                    },
                    cubic: {
                        out: function(e) {
                            return --e * e * e + 1
                        }
                    }
                },
                detectFeatures: function() {
                    if (a.features) return a.features;
                    var e = a.createEl().style,
                        t = "",
                        n = {};
                    if (n.oldIE = document.all && !document.addEventListener,
                        n.touch = "ontouchstart" in window, window.requestAnimationFrame && (n.raf = window.requestAnimationFrame, n.caf = window.cancelAnimationFrame), n.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !n.pointerEvent) {
                        var o = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var i = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            i && i.length > 0 && (i = parseInt(i[1], 10)) >= 1 && i < 8 && (n.isOldIOSPhone = !0)
                        }
                        var r = o.match(/Android\s([0-9\.]*)/),
                            l = r ? r[1] : 0;
                        (l = parseFloat(l)) >= 1 && (l < 4.4 && (n.isOldAndroid = !0), n.androidVersion = l), n.isMobileOpera = /opera mini|opera mobi/i.test(o)
                    }
                    for (var s, u, c = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], p = 0; p < 4; p++) {
                        t = d[p];
                        for (var m = 0; m < 3; m++) s = c[m], u = t + (t ? s.charAt(0).toUpperCase() + s.slice(1) : s), !n[s] && u in e && (n[s] = u);
                        t && !n.raf && (t = t.toLowerCase(), n.raf = window[t + "RequestAnimationFrame"], n.raf && (n.caf = window[t + "CancelAnimationFrame"] || window[t + "CancelRequestAnimationFrame"]))
                    }
                    if (!n.raf) {
                        var f = 0;
                        n.raf = function(e) {
                            var t = (new Date).getTime(),
                                n = Math.max(0, 16 - (t - f)),
                                o = window.setTimeout(function() {
                                    e(t + n)
                                }, n);
                            return f = t + n, o
                        }, n.caf = function(e) {
                            clearTimeout(e)
                        }
                    }
                    return n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, a.features = n, n
                }
            };
            a.detectFeatures(), a.features.oldIE && (a.bind = function(e, t, n, i) {
                t = t.split(" ");
                for (var a, r = (i ? "detach" : "attach") + "Event", l = function() {
                        n.handleEvent.call(n)
                    }, s = 0; s < t.length; s++)
                    if (a = t[s])
                        if ("object" === Object(o.a)(n) && n.handleEvent) {
                            if (i) {
                                if (!n["oldIE" +
                                        a]) return !1
                            } else n["oldIE" + a] = l;
                            e[r]("on" + a, n["oldIE" + a])
                        } else e[r]("on" + a, n)
            });
            var r = this,
                l = {
                    allowPanToNext: !0,
                    spacing: .12,
                    bgOpacity: 1,
                    mouseUsed: !1,
                    loop: !0,
                    pinchToClose: !0,
                    closeOnScroll: !0,
                    closeOnVerticalDrag: !0,
                    verticalDragRange: .75,
                    hideAnimationDuration: 333,
                    showAnimationDuration: 333,
                    showHideOpacity: !1,
                    focus: !0,
                    escKey: !0,
                    arrowKeys: !0,
                    mainScrollEndFriction: .35,
                    panEndFriction: .35,
                    isClickableElement: function(e) {
                        return "A" === e.tagName
                    },
                    getDoubleTapZoom: function(e, t) {
                        return e ? 1 : t.initialZoomLevel < .7 ?
                            1 : 1.33
                    },
                    maxSpreadZoom: 1.33,
                    modal: !0,
                    scaleMode: "fit"
                };
            a.extend(l, i);
            var s, u, c, d, p, m, f, h, v, y, g, w, x, b, C, I, T, E, S, D, _, O, M, k, A, F, L, R, P, Z, N, z, U, K, H, W, B, G, Y, V, q, X, j, $, J, Q, ee, te, ne, oe, ie, ae, re, le, se, ue = {
                    x: 0,
                    y: 0
                },
                ce = {
                    x: 0,
                    y: 0
                },
                de = {
                    x: 0,
                    y: 0
                },
                pe = {},
                me = 0,
                fe = {},
                he = {
                    x: 0,
                    y: 0
                },
                ve = 0,
                ye = !0,
                ge = [],
                we = {},
                xe = !1,
                be = function(e, t) {
                    a.extend(r, t.publicMethods), ge.push(e)
                },
                Ce = function(e) {
                    var t = zt();
                    return e > t - 1 ? e - t : e < 0 ? t + e : e
                },
                Ie = {},
                Te = function(e, t) {
                    return Ie[e] || (Ie[e] = []), Ie[e].push(t)
                },
                Ee = function(e) {
                    var t = Ie[e];
                    if (t) {
                        var n =
                            Array.prototype.slice.call(arguments);
                        n.shift();
                        for (var o = 0; o < t.length; o++) t[o].apply(r, n)
                    }
                },
                Se = function() {
                    return (new Date).getTime()
                },
                De = function(e) {
                    re = e, r.bg.style.opacity = e * l.bgOpacity
                },
                _e = function(e, t, n, o, i) {
                    (!xe || i && i !== r.currItem) && (o /= i ? i.fitRatio : r.currItem.fitRatio), e[O] = w + t + "px, " + n + "px" + x + " scale(" + o + ")"
                },
                Oe = function(e) {
                    te && (e && (y > r.currItem.fitRatio ? xe || (qt(r.currItem, !1, !0), xe = !0) : xe && (qt(r.currItem), xe = !1)), _e(te, de.x, de.y, y))
                },
                Me = function(e) {
                    e.container && _e(e.container.style, e.initialPosition.x,
                        e.initialPosition.y, e.initialZoomLevel, e)
                },
                ke = function(e, t) {
                    t[O] = w + e + "px, 0px" + x
                },
                Ae = function(e, t) {
                    if (!l.loop && t) {
                        var n = d + (he.x * me - e) / he.x,
                            o = Math.round(e - ct.x);
                        (n < 0 && o > 0 || n >= zt() - 1 && o < 0) && (e = ct.x + o * l.mainScrollEndFriction)
                    }
                    ct.x = e, ke(e, p)
                },
                Fe = function(e, t) {
                    var n = dt[e] - fe[e];
                    return ce[e] + ue[e] + n - n * (t / g)
                },
                Le = function(e, t) {
                    e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
                },
                Re = function(e) {
                    e.x = Math.round(e.x), e.y = Math.round(e.y)
                },
                Pe = null,
                Ze = function t() {
                    Pe && (a.unbind(document, "mousemove", t), a.addClass(e, "pswp--has_mouse"),
                        l.mouseUsed = !0, Ee("mouseUsed")), Pe = setTimeout(function() {
                        Pe = null
                    }, 100)
                },
                Ne = function(e, t) {
                    var n = Bt(r.currItem, pe, e);
                    return t && (ee = n), n
                },
                ze = function(e) {
                    return e || (e = r.currItem), e.initialZoomLevel
                },
                Ue = function(e) {
                    return e || (e = r.currItem), e.w > 0 ? l.maxSpreadZoom : 1
                },
                Ke = function(e, t, n, o) {
                    return o === r.currItem.initialZoomLevel ? (n[e] = r.currItem.initialPosition[e], !0) : (n[e] = Fe(e, o), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0))
                },
                He = function(e) {
                    var t = "";
                    l.escKey && 27 === e.keyCode ? t = "close" :
                        l.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, r[t]()))
                },
                We = function(e) {
                    e && (q || V || ne || W) && (e.preventDefault(), e.stopPropagation())
                },
                Be = function() {
                    r.setScrollOffset(0, a.getScrollY())
                },
                Ge = {},
                Ye = 0,
                Ve = function(e) {
                    Ge[e] && (Ge[e].raf && F(Ge[e].raf), Ye--, delete Ge[e])
                },
                qe = function(e) {
                    Ge[e] && Ve(e), Ge[e] || (Ye++, Ge[e] = {})
                },
                Xe = function() {
                    for (var e in Ge) Ge.hasOwnProperty(e) && Ve(e)
                },
                je = function(e,
                    t, n, o, i, a, r) {
                    var l, s = Se();
                    qe(e),
                        function u() {
                            if (Ge[e]) {
                                if ((l = Se() - s) >= o) return Ve(e), a(n), void(r && r());
                                a((n - t) * i(l / o) + t), Ge[e].raf = A(u)
                            }
                        }()
                },
                $e = {
                    shout: Ee,
                    listen: Te,
                    viewportSize: pe,
                    options: l,
                    isMainScrollAnimating: function() {
                        return ne
                    },
                    getZoomLevel: function() {
                        return y
                    },
                    getCurrentIndex: function() {
                        return d
                    },
                    isDragging: function() {
                        return G
                    },
                    isZooming: function() {
                        return J
                    },
                    setScrollOffset: function(e, t) {
                        fe.x = e, Z = fe.y = t, Ee("updateScrollOffset", fe)
                    },
                    applyZoomPan: function(e, t, n, o) {
                        de.x = t, de.y = n, y = e, Oe(o)
                    },
                    init: function() {
                        if (!s &&
                            !u) {
                            var n;
                            r.framework = a, r.template = e, r.bg = a.getChildByClass(e, "pswp__bg"), L = e.className, s = !0, N = a.detectFeatures(), A = N.raf, F = N.caf, O = N.transform, P = N.oldIE, r.scrollWrap = a.getChildByClass(e, "pswp__scroll-wrap"), r.container = a.getChildByClass(r.scrollWrap, "pswp__container"), p = r.container.style, r.itemHolders = I = [{
                                    el: r.container.children[0],
                                    wrap: 0,
                                    index: -1
                                }, {
                                    el: r.container.children[1],
                                    wrap: 0,
                                    index: -1
                                }, {
                                    el: r.container.children[2],
                                    wrap: 0,
                                    index: -1
                                }], I[0].el.style.display = I[2].el.style.display = "none",
                                function() {
                                    if (O) {
                                        var t =
                                            N.perspective && !k;
                                        return w = "translate" + (t ? "3d(" : "("), void(x = N.perspective ? ", 0px)" : ")")
                                    }
                                    O = "left", a.addClass(e, "pswp--ie"), ke = function(e, t) {
                                        t.left = e + "px"
                                    }, Me = function(e) {
                                        var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                                            n = e.container.style,
                                            o = t * e.w,
                                            i = t * e.h;
                                        n.width = o + "px", n.height = i + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px"
                                    }, Oe = function() {
                                        if (te) {
                                            var e = te,
                                                t = r.currItem,
                                                n = t.fitRatio > 1 ? 1 : t.fitRatio,
                                                o = n * t.w,
                                                i = n * t.h;
                                            e.width = o + "px", e.height = i + "px", e.left = de.x + "px", e.top = de.y + "px"
                                        }
                                    }
                                }(), v = {
                                    resize: r.updateSize,
                                    scroll: Be,
                                    keydown: He,
                                    click: We
                                };
                            var o = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
                            for (N.animationName && N.transform && !o || (l.showAnimationDuration = l.hideAnimationDuration = 0), n = 0; n < ge.length; n++) r["init" + ge[n]]();
                            t && (r.ui = new t(r, a)).init(), Ee("firstUpdate"), d = d || l.index || 0, (isNaN(d) || d < 0 || d >= zt()) && (d = 0), r.currItem = Nt(d), (N.isOldIOSPhone || N.isOldAndroid) && (ye = !1), e.setAttribute("aria-hidden", "false"), l.modal && (ye ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = a.getScrollY() + "px")),
                                void 0 === Z && (Ee("initialLayout"), Z = R = a.getScrollY());
                            var i = "pswp--open ";
                            for (l.mainClass && (i += l.mainClass + " "), l.showHideOpacity && (i += "pswp--animate_opacity "), i += k ? "pswp--touch" : "pswp--notouch", i += N.animationName ? " pswp--css_animation" : "", i += N.svg ? " pswp--svg" : "", a.addClass(e, i), r.updateSize(), m = -1, ve = null, n = 0; n < 3; n++) ke((n + m) * he.x, I[n].el.style);
                            P || a.bind(r.scrollWrap, h, r), Te("initialZoomInEnd", function() {
                                r.setContent(I[0], d - 1), r.setContent(I[2], d + 1), I[0].el.style.display = I[2].el.style.display =
                                    "block", l.focus && e.focus(), a.bind(document, "keydown", r), N.transform && a.bind(r.scrollWrap, "click", r), l.mouseUsed || a.bind(document, "mousemove", Ze), a.bind(window, "resize scroll", r), Ee("bindEvents")
                            }), r.setContent(I[1], d), r.updateCurrItem(), Ee("afterInit"), ye || (b = setInterval(function() {
                                Ye || G || J || y !== r.currItem.initialZoomLevel || r.updateSize()
                            }, 1E3)), a.addClass(e, "pswp--visible")
                        }
                    },
                    close: function() {
                        s && (s = !1, u = !0, Ee("close"), a.unbind(window, "resize", r), a.unbind(window, "scroll", v.scroll), a.unbind(document,
                            "keydown", r), a.unbind(document, "mousemove", Ze), N.transform && a.unbind(r.scrollWrap, "click", r), G && a.unbind(window, f, r), Ee("unbindEvents"), Ut(r.currItem, null, !0, r.destroy))
                    },
                    destroy: function() {
                        Ee("destroy"), Lt && clearTimeout(Lt), e.setAttribute("aria-hidden", "true"), e.className = L, b && clearInterval(b), a.unbind(r.scrollWrap, h, r), a.unbind(window, "scroll", r), ft(), Xe(), Ie = null
                    },
                    panTo: function(e, t, n) {
                        n || (e > ee.min.x ? e = ee.min.x : e < ee.max.x && (e = ee.max.x), t > ee.min.y ? t = ee.min.y : t < ee.max.y && (t = ee.max.y)), de.x = e, de.y =
                            t, Oe()
                    },
                    handleEvent: function(e) {
                        e = e || window.event, v[e.type] && v[e.type](e)
                    },
                    goTo: function(e) {
                        var t = (e = Ce(e)) - d;
                        ve = t, d = e, r.currItem = Nt(d), me -= t, Ae(he.x * me), Xe(), ne = !1, r.updateCurrItem()
                    },
                    next: function() {
                        r.goTo(d + 1)
                    },
                    prev: function() {
                        r.goTo(d - 1)
                    },
                    updateCurrZoomItem: function(e) {
                        if (e && Ee("beforeChange", 0), I[1].el.children.length) {
                            var t = I[1].el.children[0];
                            te = a.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                        } else te = null;
                        ee = r.currItem.bounds, g = y = r.currItem.initialZoomLevel, de.x = ee.center.x, de.y = ee.center.y, e &&
                            Ee("afterChange")
                    },
                    invalidateCurrItems: function() {
                        C = !0;
                        for (var e = 0; e < 3; e++) I[e].item && (I[e].item.needsUpdate = !0)
                    },
                    updateCurrItem: function(e) {
                        if (0 !== ve) {
                            var t, n = Math.abs(ve);
                            if (!(e && n < 2)) {
                                r.currItem = Nt(d), xe = !1, Ee("beforeChange", ve), n >= 3 && (m += ve + (ve > 0 ? -3 : 3), n = 3);
                                for (var o = 0; o < n; o++) ve > 0 ? (t = I.shift(), I[2] = t, ke((++m + 2) * he.x, t.el.style), r.setContent(t, d - n + o + 1 + 1)) : (t = I.pop(), I.unshift(t), ke(--m * he.x, t.el.style), r.setContent(t, d + n - o - 1 - 1));
                                if (te && 1 === Math.abs(ve)) {
                                    var i = Nt(T);
                                    i.initialZoomLevel !== y && (Bt(i,
                                        pe), qt(i), Me(i))
                                }
                                ve = 0, r.updateCurrZoomItem(), T = d, Ee("afterChange")
                            }
                        }
                    },
                    updateSize: function(t) {
                        if (!ye && l.modal) {
                            var n = a.getScrollY();
                            if (Z !== n && (e.style.top = n + "px", Z = n), !t && we.x === window.innerWidth && we.y === window.innerHeight) return;
                            we.x = window.innerWidth, we.y = window.innerHeight, e.style.height = we.y + "px"
                        }
                        if (pe.x = r.scrollWrap.clientWidth, pe.y = r.scrollWrap.clientHeight, Be(), he.x = pe.x + Math.round(pe.x * l.spacing), he.y = pe.y, Ae(he.x * me), Ee("beforeResize"), void 0 !== m) {
                            for (var o, i, s, u = 0; u < 3; u++) o = I[u], ke((u + m) *
                                he.x, o.el.style), s = d + u - 1, l.loop && zt() > 2 && (s = Ce(s)), (i = Nt(s)) && (C || i.needsUpdate || !i.bounds) ? (r.cleanSlide(i), r.setContent(o, s), 1 === u && (r.currItem = i, r.updateCurrZoomItem(!0)), i.needsUpdate = !1) : -1 === o.index && s >= 0 && r.setContent(o, s), i && i.container && (Bt(i, pe), qt(i), Me(i));
                            C = !1
                        }
                        g = y = r.currItem.initialZoomLevel, (ee = r.currItem.bounds) && (de.x = ee.center.x, de.y = ee.center.y, Oe(!0)), Ee("resize")
                    },
                    zoomTo: function(e, t, n, o, i) {
                        t && (g = y, dt.x = Math.abs(t.x) - de.x, dt.y = Math.abs(t.y) - de.y, Le(ce, de));
                        var r = Ne(e, !1),
                            l = {};
                        Ke("x", r, l, e), Ke("y", r, l, e);
                        var s = y,
                            u = de.x,
                            c = de.y;
                        Re(l);
                        var d = function(t) {
                            1 === t ? (y = e, de.x = l.x, de.y = l.y) : (y = (e - s) * t + s, de.x = (l.x - u) * t + u, de.y = (l.y - c) * t + c), i && i(t), Oe(1 === t)
                        };
                        n ? je("customZoomTo", 0, 1, n, o || a.easing.sine.inOut, d) : d(1)
                    }
                },
                Je = {},
                Qe = {},
                et = {},
                tt = {},
                nt = {},
                ot = [],
                it = {},
                at = [],
                rt = {},
                lt = 0,
                st = {
                    x: 0,
                    y: 0
                },
                ut = 0,
                ct = {
                    x: 0,
                    y: 0
                },
                dt = {
                    x: 0,
                    y: 0
                },
                pt = {
                    x: 0,
                    y: 0
                },
                mt = function(e, t) {
                    return rt.x = Math.abs(e.x - t.x), rt.y = Math.abs(e.y - t.y), Math.sqrt(rt.x * rt.x + rt.y * rt.y)
                },
                ft = function() {
                    X && (F(X), X = null)
                },
                ht = {},
                vt = function(e, t) {
                    return ht.prevent = ! function e(t, n) {
                        return !(!t || t === document) && !(t.getAttribute("class") && t.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (n(t) ? t : e(t.parentNode, n))
                    }(e.target, l.isClickableElement), Ee("preventDragEvent", e, t, ht), ht.prevent
                },
                yt = function(e, t) {
                    return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
                },
                gt = function(e, t, n) {
                    n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
                },
                wt = function() {
                    var e = de.y - r.currItem.initialPosition.y;
                    return 1 - Math.abs(e / (pe.y / 2))
                },
                xt = {},
                bt = {},
                Ct = [],
                It = function(e) {
                    for (; Ct.length > 0;) Ct.pop();
                    return M ?
                        (se = 0, ot.forEach(function(e) {
                            0 === se ? Ct[0] = e : 1 === se && (Ct[1] = e), se++
                        })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Ct[0] = yt(e.touches[0], xt), e.touches.length > 1 && (Ct[1] = yt(e.touches[1], bt))) : (xt.x = e.pageX, xt.y = e.pageY, xt.id = "", Ct[0] = xt), Ct
                },
                Tt = function(e, t) {
                    var n, o, i, a, s = de[e] + t[e],
                        u = t[e] > 0,
                        c = ct.x + t.x,
                        d = ct.x - it.x;
                    if (n = s > ee.min[e] || s < ee.max[e] ? l.panEndFriction : 1, s = de[e] + t[e] * n, (l.allowPanToNext || y === r.currItem.initialZoomLevel) && (te ? "h" !== oe || "x" !== e || V || (u ? (s > ee.min[e] && (n = l.panEndFriction,
                            ee.min[e], o = ee.min[e] - ce[e]), (o <= 0 || d < 0) && zt() > 1 ? (a = c, d < 0 && c > it.x && (a = it.x)) : ee.min.x !== ee.max.x && (i = s)) : (s < ee.max[e] && (n = l.panEndFriction, ee.max[e], o = ce[e] - ee.max[e]), (o <= 0 || d > 0) && zt() > 1 ? (a = c, d > 0 && c < it.x && (a = it.x)) : ee.min.x !== ee.max.x && (i = s))) : a = c, "x" === e)) return void 0 !== a && (Ae(a, !0), j = a !== it.x), ee.min.x !== ee.max.x && (void 0 !== i ? de.x = i : j || (de.x += t.x * n)), void 0 !== a;
                    ne || j || y > r.currItem.fitRatio && (de[e] += t[e] * n)
                },
                Et = function(e) {
                    if (!("mousedown" === e.type && e.button > 0))
                        if (Zt) e.preventDefault();
                        else if (!B ||
                        "mousedown" !== e.type) {
                        if (vt(e, !0) && e.preventDefault(), Ee("pointerDown"), M) {
                            var t = a.arraySearch(ot, e.pointerId, "id");
                            t < 0 && (t = ot.length), ot[t] = {
                                x: e.pageX,
                                y: e.pageY,
                                id: e.pointerId
                            }
                        }
                        var n = It(e),
                            o = n.length;
                        $ = null, Xe(), G && 1 !== o || (G = ie = !0, a.bind(window, f, r), H = le = ae = W = j = q = Y = V = !1, oe = null, Ee("firstTouchStart", n), Le(ce, de), ue.x = ue.y = 0, Le(tt, n[0]), Le(nt, tt), it.x = he.x * me, at = [{
                            x: tt.x,
                            y: tt.y
                        }], U = z = Se(), Ne(y, !0), ft(), function e() {
                            G && (X = A(e), Dt())
                        }()), !J && o > 1 && !ne && !j && (g = y, V = !1, J = Y = !0, ue.y = ue.x = 0, Le(ce, de), Le(Je,
                            n[0]), Le(Qe, n[1]), gt(Je, Qe, pt), dt.x = Math.abs(pt.x) - de.x, dt.y = Math.abs(pt.y) - de.y, Q = mt(Je, Qe))
                    }
                },
                St = function(e) {
                    if (e.preventDefault(), M) {
                        var t = a.arraySearch(ot, e.pointerId, "id");
                        if (t > -1) {
                            var n = ot[t];
                            n.x = e.pageX, n.y = e.pageY
                        }
                    }
                    if (G) {
                        var o = It(e);
                        if (oe || q || J) $ = o;
                        else if (ct.x !== he.x * me) oe = "h";
                        else {
                            var i = Math.abs(o[0].x - tt.x) - Math.abs(o[0].y - tt.y);
                            Math.abs(i) >= 10 && (oe = i > 0 ? "h" : "v", $ = o)
                        }
                    }
                },
                Dt = function() {
                    if ($) {
                        var e = $.length;
                        if (0 !== e)
                            if (Le(Je, $[0]), et.x = Je.x - tt.x, et.y = Je.y - tt.y, J && e > 1) {
                                if (tt.x = Je.x, tt.y = Je.y, !et.x && !et.y && function(e, t) {
                                        return e.x === t.x && e.y === t.y
                                    }($[1], Qe)) return;
                                Le(Qe, $[1]), V || (V = !0, Ee("zoomGestureStarted"));
                                var t = mt(Je, Qe),
                                    n = At(t);
                                n > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (le = !0);
                                var o = 1,
                                    i = ze(),
                                    a = Ue();
                                if (n < i)
                                    if (l.pinchToClose && !le && g <= r.currItem.initialZoomLevel) {
                                        var s = 1 - (i - n) / (i / 1.2);
                                        De(s), Ee("onPinchClose", s), ae = !0
                                    } else(o = (i - n) / i) > 1 && (o = 1), n = i - o * (i / 3);
                                else n > a && ((o = (n - a) / (6 * i)) > 1 && (o = 1), n = a + o * i);
                                o < 0 && (o = 0), gt(Je, Qe, st), ue.x += st.x - pt.x, ue.y += st.y - pt.y, Le(pt, st),
                                    de.x = Fe("x", n), de.y = Fe("y", n), H = n > y, y = n, Oe()
                            } else {
                                if (!oe) return;
                                if (ie && (ie = !1, Math.abs(et.x) >= 10 && (et.x -= $[0].x - nt.x), Math.abs(et.y) >= 10 && (et.y -= $[0].y - nt.y)), tt.x = Je.x, tt.y = Je.y, 0 === et.x && 0 === et.y) return;
                                if ("v" === oe && l.closeOnVerticalDrag && "fit" === l.scaleMode && y === r.currItem.initialZoomLevel) {
                                    ue.y += et.y, de.y += et.y;
                                    var u = wt();
                                    return W = !0, Ee("onVerticalDrag", u), De(u), void Oe()
                                }! function(e, t, n) {
                                    if (e - U > 50) {
                                        var o = at.length > 2 ? at.shift() : {};
                                        o.x = t, o.y = n, at.push(o), U = e
                                    }
                                }(Se(), Je.x, Je.y), q = !0, ee = r.currItem.bounds,
                                    Tt("x", et) || (Tt("y", et), Re(de), Oe())
                            }
                    }
                },
                _t = function(e) {
                    if (N.isOldAndroid) {
                        if (B && "mouseup" === e.type) return;
                        e.type.indexOf("touch") > -1 && (clearTimeout(B), B = setTimeout(function() {
                            B = 0
                        }, 600))
                    }
                    var t;
                    if (Ee("pointerUp"), vt(e, !1) && e.preventDefault(), M) {
                        var n = a.arraySearch(ot, e.pointerId, "id");
                        n > -1 && (t = ot.splice(n, 1)[0], navigator.pointerEnabled ? t.type = e.pointerType || "mouse" : (t.type = {
                            4: "mouse",
                            2: "touch",
                            3: "pen"
                        }[e.pointerType], t.type || (t.type = e.pointerType || "mouse")))
                    }
                    var o, i = It(e),
                        s = i.length;
                    if ("mouseup" ===
                        e.type && (s = 0), 2 === s) return $ = null, !0;
                    1 === s && Le(nt, i[0]), 0 !== s || oe || ne || (t || ("mouseup" === e.type ? t = {
                        x: e.pageX,
                        y: e.pageY,
                        type: "mouse"
                    } : e.changedTouches && e.changedTouches[0] && (t = {
                        x: e.changedTouches[0].pageX,
                        y: e.changedTouches[0].pageY,
                        type: "touch"
                    })), Ee("touchRelease", e, t));
                    var u = -1;
                    if (0 === s && (G = !1, a.unbind(window, f, r), ft(), J ? u = 0 : -1 !== ut && (u = Se() - ut)), ut = 1 === s ? Se() : -1, o = -1 !== u && u < 150 ? "zoom" : "swipe", J && s < 2 && (J = !1, 1 === s && (o = "zoomPointerUp"), Ee("zoomGestureEnded")), $ = null, q || V || ne || W)
                        if (Xe(), K || (K = Ot()),
                            K.calculateSwipeSpeed("x"), W)
                            if (wt() < l.verticalDragRange) r.close();
                            else {
                                var c = de.y,
                                    d = re;
                                je("verticalDrag", 0, 1, 300, a.easing.cubic.out, function(e) {
                                    de.y = (r.currItem.initialPosition.y - c) * e + c, De((1 - d) * e + d), Oe()
                                }), Ee("onVerticalDrag", 1)
                            }
                    else {
                        if ((j || ne) && 0 === s) {
                            if (kt(o, K)) return;
                            o = "zoomPointerUp"
                        }
                        ne || ("swipe" === o ? !j && y > r.currItem.fitRatio && Mt(K) : Ft())
                    }
                },
                Ot = function() {
                    var e, t, n = {
                        lastFlickOffset: {},
                        lastFlickDist: {},
                        lastFlickSpeed: {},
                        slowDownRatio: {},
                        slowDownRatioReverse: {},
                        speedDecelerationRatio: {},
                        speedDecelerationRatioAbs: {},
                        distanceOffset: {},
                        backAnimDestination: {},
                        backAnimStarted: {},
                        calculateSwipeSpeed: function(o) {
                            at.length > 1 ? (e = Se() - U + 50, t = at[at.length - 2][o]) : (e = Se() - z, t = nt[o]), n.lastFlickOffset[o] = tt[o] - t, n.lastFlickDist[o] = Math.abs(n.lastFlickOffset[o]), n.lastFlickDist[o] > 20 ? n.lastFlickSpeed[o] = n.lastFlickOffset[o] / e : n.lastFlickSpeed[o] = 0, Math.abs(n.lastFlickSpeed[o]) < .1 && (n.lastFlickSpeed[o] = 0), n.slowDownRatio[o] = .95, n.slowDownRatioReverse[o] = 1 - n.slowDownRatio[o], n.speedDecelerationRatio[o] = 1
                        },
                        calculateOverBoundsAnimOffset: function(e,
                            t) {
                            n.backAnimStarted[e] || (de[e] > ee.min[e] ? n.backAnimDestination[e] = ee.min[e] : de[e] < ee.max[e] && (n.backAnimDestination[e] = ee.max[e]), void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0, je("bounceZoomPan" + e, de[e], n.backAnimDestination[e], t || 300, a.easing.sine.out, function(t) {
                                de[e] = t, Oe()
                            }))))
                        },
                        calculateAnimOffset: function(e) {
                            n.backAnimStarted[e] || (n.speedDecelerationRatio[e] =
                                n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, de[e] += n.distanceOffset[e])
                        },
                        panAnimLoop: function() {
                            if (Ge.zoomPan && (Ge.zoomPan.raf = A(n.panAnimLoop), n.now = Se(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), Oe(), n.calculateOverBoundsAnimOffset("x"),
                                    n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05)) return de.x = Math.round(de.x), de.y = Math.round(de.y), Oe(), void Ve("zoomPan")
                        }
                    };
                    return n
                },
                Mt = function(e) {
                    if (e.calculateSwipeSpeed("y"), ee = r.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05) return e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0;
                    qe("zoomPan"), e.lastNow = Se(), e.panAnimLoop()
                },
                kt = function(e, t) {
                    var n, o, i;
                    if (ne || (lt = d), "swipe" === e) {
                        var s = tt.x - nt.x,
                            u = t.lastFlickDist.x < 10;
                        s > 30 && (u || t.lastFlickOffset.x > 20) ? o = -1 : s < -30 && (u || t.lastFlickOffset.x < -20) && (o = 1)
                    }
                    o && ((d += o) < 0 ? (d = l.loop ? zt() - 1 : 0, i = !0) : d >= zt() && (d = l.loop ? 0 : zt() - 1, i = !0), i && !l.loop || (ve += o, me -= o, n = !0));
                    var c, p = he.x * me,
                        m = Math.abs(p - ct.x);
                    return n || p > ct.x == t.lastFlickSpeed.x > 0 ? (c = Math.abs(t.lastFlickSpeed.x) > 0 ? m / Math.abs(t.lastFlickSpeed.x) : 333, c = Math.min(c, 400), c = Math.max(c,
                        250)) : c = 333, lt === d && (n = !1), ne = !0, Ee("mainScrollAnimStart"), je("mainScroll", ct.x, p, c, a.easing.cubic.out, Ae, function() {
                        Xe(), ne = !1, lt = -1, (n || lt !== d) && r.updateCurrItem(), Ee("mainScrollAnimComplete")
                    }), n && r.updateCurrItem(!0), n
                },
                At = function(e) {
                    return 1 / Q * e * g
                },
                Ft = function() {
                    var e = y,
                        t = ze(),
                        n = Ue();
                    y < t ? e = t : y > n && (e = n);
                    var o, i = re;
                    return ae && !H && !le && y < t ? (r.close(), !0) : (ae && (o = function(e) {
                        De((1 - i) * e + i)
                    }), r.zoomTo(e, 0, 200, a.easing.cubic.out, o), !0)
                };
            be("Gestures", {
                publicMethods: {
                    initGestures: function() {
                        var e = function(e,
                            t, n, o, i) {
                            E = e + t, S = e + n, D = e + o, _ = i ? e + i : ""
                        };
                        (M = N.pointerEvent) && N.touch && (N.touch = !1), M ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : N.touch ? (e("touch", "start", "move", "end", "cancel"), k = !0) : e("mouse", "down", "move", "up"), f = S + " " + D + " " + _, h = E, M && !k && (k = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), r.likelyTouchDevice = k, v[E] = Et, v[S] = St, v[D] = _t, _ && (v[_] = v[D]), N.touch && (h += " mousedown", f += " mousemove mouseup", v.mousedown = v[E], v.mousemove =
                            v[S], v.mouseup = v[D]), k || (l.allowPanToNext = !1)
                    }
                }
            });
            var Lt, Rt, Pt, Zt, Nt, zt, Ut = function(t, n, o, i) {
                    var s;
                    Lt && clearTimeout(Lt), Zt = !0, Pt = !0, t.initialLayout ? (s = t.initialLayout, t.initialLayout = null) : s = l.getThumbBoundsFn && l.getThumbBoundsFn(d);
                    var u = o ? l.hideAnimationDuration : l.showAnimationDuration,
                        p = function() {
                            Ve("initialZoom"), o ? (r.template.removeAttribute("style"), r.bg.removeAttribute("style")) : (De(1), n && (n.style.display = "block"), a.addClass(e, "pswp--animated-in"), Ee("initialZoom" + (o ? "OutEnd" : "InEnd"))), i &&
                                i(), Zt = !1
                        };
                    if (!u || !s || void 0 === s.x) return Ee("initialZoom" + (o ? "Out" : "In")), y = t.initialZoomLevel, Le(de, t.initialPosition), Oe(), e.style.opacity = o ? 0 : 1, De(1), void(u ? setTimeout(function() {
                        p()
                    }, u) : p());
                    ! function() {
                        var n = c,
                            i = !r.currItem.src || r.currItem.loadError || l.showHideOpacity;
                        t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), o || (y = s.w / t.w, de.x = s.x, de.y = s.y - R, r[i ? "template" : "bg"].style.opacity = .001, Oe()), qe("initialZoom"), o && !n && a.removeClass(e, "pswp--animated-in"), i && (o ? a[(n ? "remove" : "add") +
                            "Class"](e, "pswp--animate_opacity") : setTimeout(function() {
                            a.addClass(e, "pswp--animate_opacity")
                        }, 30)), Lt = setTimeout(function() {
                            if (Ee("initialZoom" + (o ? "Out" : "In")), o) {
                                var r = s.w / t.w,
                                    l = {
                                        x: de.x,
                                        y: de.y
                                    },
                                    c = y,
                                    d = re,
                                    m = function(t) {
                                        1 === t ? (y = r, de.x = s.x, de.y = s.y - Z) : (y = (r - c) * t + c, de.x = (s.x - l.x) * t + l.x, de.y = (s.y - Z - l.y) * t + l.y), Oe(), i ? e.style.opacity = 1 - t : De(d - t * d)
                                    };
                                n ? je("initialZoom", 0, 1, u, a.easing.cubic.out, m, p) : (m(1), Lt = setTimeout(p, u + 20))
                            } else y = t.initialZoomLevel, Le(de, t.initialPosition), Oe(), De(1), i ? e.style.opacity =
                                1 : De(1), Lt = setTimeout(p, u + 20)
                        }, o ? 25 : 90)
                    }()
                },
                Kt = {},
                Ht = [],
                Wt = {
                    index: 0,
                    errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                    forceProgressiveLoading: !1,
                    preload: [1, 1],
                    getNumItemsFn: function() {
                        return Rt.length
                    }
                },
                Bt = function(e, t, n) {
                    if (e.src && !e.loadError) {
                        var o = !n;
                        if (o && (e.vGap || (e.vGap = {
                                top: 0,
                                bottom: 0
                            }), Ee("parseVerticalMargin", e)), Kt.x = t.x, Kt.y = t.y - e.vGap.top - e.vGap.bottom, o) {
                            var i = Kt.x / e.w,
                                a = Kt.y / e.h;
                            e.fitRatio = i < a ? i : a;
                            var r = l.scaleMode;
                            "orig" ===
                            r ? n = 1 : "fit" === r && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = {
                                center: {
                                    x: 0,
                                    y: 0
                                },
                                max: {
                                    x: 0,
                                    y: 0
                                },
                                min: {
                                    x: 0,
                                    y: 0
                                }
                            })
                        }
                        if (!n) return;
                        return function(e, t, n) {
                                var o = e.bounds;
                                o.center.x = Math.round((Kt.x - t) / 2), o.center.y = Math.round((Kt.y - n) / 2) + e.vGap.top, o.max.x = t > Kt.x ? Math.round(Kt.x - t) : o.center.x, o.max.y = n > Kt.y ? Math.round(Kt.y - n) + e.vGap.top : o.center.y, o.min.x = t > Kt.x ? 0 : o.center.x, o.min.y = n > Kt.y ? e.vGap.top : o.center.y
                            }(e, e.w * n, e.h * n), o && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center),
                            e.bounds
                    }
                    return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = {
                        center: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        },
                        min: {
                            x: 0,
                            y: 0
                        }
                    }, e.initialPosition = e.bounds.center, e.bounds
                },
                Gt = function(e, t, n, o, i, a) {
                    t.loadError || o && (t.imageAppended = !0, qt(t, o, t === r.currItem && xe), n.appendChild(o), a && setTimeout(function() {
                        t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
                    }, 500))
                },
                Yt = function(e) {
                    e.loading = !0, e.loaded = !1;
                    var t = e.img = a.createEl("pswp__img", "img"),
                        n = function() {
                            e.loading = !1, e.loaded = !0, e.loadComplete ?
                                e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
                        };
                    return t.onload = n, t.onerror = function() {
                        e.loadError = !0, n()
                    }, t.src = e.src, t
                },
                Vt = function(e, t) {
                    if (e.src && e.loadError && e.container) return t && (e.container.innerHTML = ""), e.container.innerHTML = l.errorMsg.replace("%url%", e.src), !0
                },
                qt = function(e, t, n) {
                    if (e.src) {
                        t || (t = e.container.lastChild);
                        var o = n ? e.w : Math.round(e.w * e.fitRatio),
                            i = n ? e.h : Math.round(e.h * e.fitRatio);
                        e.placeholder && !e.loaded && (e.placeholder.style.width = o + "px", e.placeholder.style.height =
                            i + "px"), t.style.width = o + "px", t.style.height = i + "px"
                    }
                },
                Xt = function() {
                    if (Ht.length) {
                        for (var e, t = 0; t < Ht.length; t++)(e = Ht[t]).holder.index === e.index && Gt(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
                        Ht = []
                    }
                };
            be("Controller", {
                publicMethods: {
                    lazyLoadItem: function(e) {
                        e = Ce(e);
                        var t = Nt(e);
                        t && (!t.loaded && !t.loading || C) && (Ee("gettingData", e, t), t.src && Yt(t))
                    },
                    initController: function() {
                        a.extend(l, Wt, !0), r.items = Rt = n, Nt = r.getItemAt, zt = l.getNumItemsFn, l.loop, zt() < 3 && (l.loop = !1), Te("beforeChange", function(e) {
                            var t,
                                n = l.preload,
                                o = null === e || e >= 0,
                                i = Math.min(n[0], zt()),
                                a = Math.min(n[1], zt());
                            for (t = 1; t <= (o ? a : i); t++) r.lazyLoadItem(d + t);
                            for (t = 1; t <= (o ? i : a); t++) r.lazyLoadItem(d - t)
                        }), Te("initialLayout", function() {
                            r.currItem.initialLayout = l.getThumbBoundsFn && l.getThumbBoundsFn(d)
                        }), Te("mainScrollAnimComplete", Xt), Te("initialZoomInEnd", Xt), Te("destroy", function() {
                            for (var e, t = 0; t < Rt.length; t++)(e = Rt[t]).container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError &&
                                (e.loaded = e.loadError = !1);
                            Ht = null
                        })
                    },
                    getItemAt: function(e) {
                        return e >= 0 && void 0 !== Rt[e] && Rt[e]
                    },
                    allowProgressiveImg: function() {
                        return l.forceProgressiveLoading || !k || l.mouseUsed || screen.width > 1200
                    },
                    setContent: function(e, t) {
                        l.loop && (t = Ce(t));
                        var n = r.getItemAt(e.index);
                        n && (n.container = null);
                        var o, i = r.getItemAt(t);
                        if (i) {
                            Ee("gettingData", t, i), e.index = t, e.item = i;
                            var u = i.container = a.createEl("pswp__zoom-wrap");
                            if (!i.src && i.html && (i.html.tagName ? u.appendChild(i.html) : u.innerHTML = i.html), Vt(i), Bt(i, pe), !i.src ||
                                i.loadError || i.loaded) i.src && !i.loadError && ((o = a.createEl("pswp__img", "img")).style.opacity = 1, o.src = i.src, qt(i, o), Gt(0, i, u, o));
                            else {
                                if (i.loadComplete = function(n) {
                                        if (s) {
                                            if (e && e.index === t) {
                                                if (Vt(n, !0)) return n.loadComplete = n.img = null, Bt(n, pe), Me(n), void(e.index === d && r.updateCurrZoomItem());
                                                n.imageAppended ? !Zt && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : N.transform && (ne || Zt) ? Ht.push({
                                                    item: n,
                                                    baseDiv: u,
                                                    img: n.img,
                                                    index: t,
                                                    holder: e,
                                                    clearPlaceholder: !0
                                                }) : Gt(0, n, u, n.img, 0, !0)
                                            }
                                            n.loadComplete =
                                                null, n.img = null, Ee("imageLoadComplete", t, n)
                                        }
                                    }, a.features.transform) {
                                    var c = "pswp__img pswp__img--placeholder";
                                    c += i.msrc ? "" : " pswp__img--placeholder--blank";
                                    var p = a.createEl(c, i.msrc ? "img" : "");
                                    i.msrc && (p.src = i.msrc), qt(i, p), u.appendChild(p), i.placeholder = p
                                }
                                i.loading || Yt(i), r.allowProgressiveImg() && (!Pt && N.transform ? Ht.push({
                                    item: i,
                                    baseDiv: u,
                                    img: i.img,
                                    index: t,
                                    holder: e
                                }) : Gt(0, i, u, i.img, 0, !0))
                            }
                            Pt || t !== d ? Me(i) : (te = u.style, Ut(i, o || i.img)), e.el.innerHTML = "", e.el.appendChild(u)
                        } else e.el.innerHTML = ""
                    },
                    cleanSlide: function(e) {
                        e.img &&
                            (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
                    }
                }
            });
            var jt, $t, Jt = {},
                Qt = function(e, t, n) {
                    var o = document.createEvent("CustomEvent"),
                        i = {
                            origEvent: e,
                            target: e.target,
                            releasePoint: t,
                            pointerType: n || "touch"
                        };
                    o.initCustomEvent("pswpTap", !0, !0, i), e.target.dispatchEvent(o)
                };
            be("Tap", {
                publicMethods: {
                    initTap: function() {
                        Te("firstTouchStart", r.onTapStart), Te("touchRelease", r.onTapRelease), Te("destroy", function() {
                            Jt = {}, jt = null
                        })
                    },
                    onTapStart: function(e) {
                        e.length > 1 && (clearTimeout(jt), jt =
                            null)
                    },
                    onTapRelease: function(e, t) {
                        if (t && !q && !Y && !Ye) {
                            var n = t;
                            if (jt && (clearTimeout(jt), jt = null, function(e, t) {
                                    return Math.abs(e.x - t.x) < 25 && Math.abs(e.y - t.y) < 25
                                }(n, Jt))) return void Ee("doubleTap", n);
                            if ("mouse" === t.type) return void Qt(e, t, "mouse");
                            if ("BUTTON" === e.target.tagName.toUpperCase() || a.hasClass(e.target, "pswp__single-tap")) return void Qt(e, t);
                            Le(Jt, n), jt = setTimeout(function() {
                                Qt(e, t), jt = null
                            }, 300)
                        }
                    }
                }
            }), be("DesktopZoom", {
                publicMethods: {
                    initDesktopZoom: function() {
                        P || (k ? Te("mouseUsed", function() {
                                r.setupDesktopZoom()
                            }) :
                            r.setupDesktopZoom(!0))
                    },
                    setupDesktopZoom: function(t) {
                        $t = {};
                        var n = "wheel mousewheel DOMMouseScroll";
                        Te("bindEvents", function() {
                            a.bind(e, n, r.handleMouseWheel)
                        }), Te("unbindEvents", function() {
                            $t && a.unbind(e, n, r.handleMouseWheel)
                        }), r.mouseZoomedIn = !1;
                        var o, i = function() {
                                r.mouseZoomedIn && (a.removeClass(e, "pswp--zoomed-in"), r.mouseZoomedIn = !1), y < 1 ? a.addClass(e, "pswp--zoom-allowed") : a.removeClass(e, "pswp--zoom-allowed"), l()
                            },
                            l = function() {
                                o && (a.removeClass(e, "pswp--dragging"), o = !1)
                            };
                        Te("resize", i), Te("afterChange",
                            i), Te("pointerDown", function() {
                            r.mouseZoomedIn && (o = !0, a.addClass(e, "pswp--dragging"))
                        }), Te("pointerUp", l), t || i()
                    },
                    handleMouseWheel: function(e) {
                        if (y <= r.currItem.fitRatio) return l.modal && (!l.closeOnScroll || Ye || G ? e.preventDefault() : O && Math.abs(e.deltaY) > 2 && (c = !0, r.close())), !0;
                        if (e.stopPropagation(), $t.x = 0, "deltaX" in e) 1 === e.deltaMode ? ($t.x = 18 * e.deltaX, $t.y = 18 * e.deltaY) : ($t.x = e.deltaX, $t.y = e.deltaY);
                        else if ("wheelDelta" in e) e.wheelDeltaX && ($t.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? $t.y = -.16 * e.wheelDeltaY :
                            $t.y = -.16 * e.wheelDelta;
                        else {
                            if (!("detail" in e)) return;
                            $t.y = e.detail
                        }
                        Ne(y, !0);
                        var t = de.x - $t.x,
                            n = de.y - $t.y;
                        (l.modal || t <= ee.min.x && t >= ee.max.x && n <= ee.min.y && n >= ee.max.y) && e.preventDefault(), r.panTo(t, n)
                    },
                    toggleDesktopZoom: function(t) {
                        t = t || {
                            x: pe.x / 2 + fe.x,
                            y: pe.y / 2 + fe.y
                        };
                        var n = l.getDoubleTapZoom(!0, r.currItem),
                            o = y === n;
                        r.mouseZoomedIn = !o, r.zoomTo(o ? r.currItem.initialZoomLevel : n, t, 333), a[(o ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                    }
                }
            });
            var en, tn, nn, on, an, rn, ln, sn, un, cn, dn, pn, mn = {
                    history: !0,
                    galleryUID: 1
                },
                fn = function() {
                    return dn.hash.substring(1)
                },
                hn = function() {
                    en && clearTimeout(en), nn && clearTimeout(nn)
                },
                vn = function() {
                    var e = fn(),
                        t = {};
                    if (e.length < 5) return t;
                    var n, o = e.split("&");
                    for (n = 0; n < o.length; n++)
                        if (o[n]) {
                            var i = o[n].split("=");
                            i.length < 2 || (t[i[0]] = i[1])
                        }
                    if (l.galleryPIDs) {
                        var a = t.pid;
                        for (t.pid = 0, n = 0; n < Rt.length; n++)
                            if (Rt[n].pid === a) {
                                t.pid = n;
                                break
                            }
                    } else t.pid = parseInt(t.pid, 10) - 1;
                    return t.pid < 0 && (t.pid = 0), t
                },
                yn = function e() {
                    if (nn && clearTimeout(nn), Ye || G) nn = setTimeout(e, 500);
                    else {
                        on ? clearTimeout(tn) :
                            on = !0;
                        var t = d + 1,
                            n = Nt(d);
                        n.hasOwnProperty("pid") && (t = n.pid);
                        var o = ln + "&gid=" + l.galleryUID + "&pid=" + t;
                        sn || -1 === dn.hash.indexOf(o) && (cn = !0);
                        var i = dn.href.split("#")[0] + "#" + o;
                        pn ? "#" + o !== window.location.hash && history[sn ? "replaceState" : "pushState"]("", document.title, i) : sn ? dn.replace(i) : dn.hash = o, sn = !0, tn = setTimeout(function() {
                            on = !1
                        }, 60)
                    }
                };
            be("History", {
                publicMethods: {
                    initHistory: function() {
                        if (a.extend(l, mn, !0), l.history) {
                            dn = window.location, cn = !1, un = !1, sn = !1, ln = fn(), pn = "pushState" in history, ln.indexOf("gid=") >
                                -1 && (ln = (ln = ln.split("&gid=")[0]).split("?gid=")[0]), Te("afterChange", r.updateURL), Te("unbindEvents", function() {
                                    a.unbind(window, "hashchange", r.onHashChange)
                                });
                            var e = function() {
                                rn = !0, un || (cn ? history.back() : ln ? dn.hash = ln : pn ? history.pushState("", document.title, dn.pathname + dn.search) : dn.hash = ""), hn()
                            };
                            Te("unbindEvents", function() {
                                c && e()
                            }), Te("destroy", function() {
                                rn || e()
                            }), Te("firstUpdate", function() {
                                d = vn().pid
                            });
                            var t = ln.indexOf("pid=");
                            t > -1 && "&" === (ln = ln.substring(0, t)).slice(-1) && (ln = ln.slice(0, -1)),
                                setTimeout(function() {
                                    s && a.bind(window, "hashchange", r.onHashChange)
                                }, 40)
                        }
                    },
                    onHashChange: function() {
                        if (fn() === ln) return un = !0, void r.close();
                        on || (an = !0, r.goTo(vn().pid), an = !1)
                    },
                    updateURL: function() {
                        hn(), an || (sn ? en = setTimeout(yn, 800) : yn())
                    }
                }
            }), a.extend(r, $e)
        }
    },
    3343: function(e, t, n) {
        t.a = function(e, t) {
            var n, o, i, a, r, l, s, u, c, d, p, m, f, h, v, y, g, w, x = this,
                b = !1,
                C = !0,
                I = !0,
                T = {
                    barsSize: {
                        top: 44,
                        bottom: "auto"
                    },
                    closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                    timeToIdle: 4E3,
                    timeToIdleOutside: 1E3,
                    loadingIndicatorDelay: 1E3,
                    addCaptionHTMLFn: function(e, t) {
                        return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
                    },
                    closeEl: !0,
                    captionEl: !0,
                    fullscreenEl: !0,
                    zoomEl: !0,
                    shareEl: !0,
                    counterEl: !0,
                    arrowEl: !0,
                    preloaderEl: !0,
                    tapToClose: !1,
                    tapToToggleControls: !0,
                    clickToCloseNonZoomable: !0,
                    shareButtons: [{
                        id: "facebook",
                        label: "Share on Facebook",
                        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                    }, {
                        id: "twitter",
                        label: "Tweet",
                        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                    }, {
                        id: "pinterest",
                        label: "Pin it",
                        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                    }, {
                        id: "download",
                        label: "Download image",
                        url: "{{raw_image_url}}",
                        download: !0
                    }],
                    getImageURLForShare: function() {
                        return e.currItem.src || ""
                    },
                    getPageURLForShare: function() {
                        return window.location.href
                    },
                    getTextForShare: function() {
                        return e.currItem.title || ""
                    },
                    indexIndicatorSep: " / ",
                    fitControlsWidth: 1200
                },
                E = function(e) {
                    if (y) return !0;
                    e = e || window.event, v.timeToIdle && v.mouseUsed && !c && L();
                    for (var n,
                            o, i = (e.target || e.srcElement).getAttribute("class") || "", a = 0; a < N.length; a++)(n = N[a]).onTap && i.indexOf("pswp__" + n.name) > -1 && (n.onTap(), o = !0);
                    if (o) {
                        e.stopPropagation && e.stopPropagation(), y = !0;
                        var r = t.features.isOldAndroid ? 600 : 30;
                        setTimeout(function() {
                            y = !1
                        }, r)
                    }
                },
                S = function(e, n, o) {
                    t[(o ? "add" : "remove") + "Class"](e, "pswp__" + n)
                },
                D = function() {
                    var e = 1 === v.getNumItemsFn();
                    e !== h && (S(o, "ui--one-slide", e), h = e)
                },
                _ = function() {
                    S(s, "share-modal--hidden", I)
                },
                O = function() {
                    return (I = !I) ? (t.removeClass(s, "pswp__share-modal--fade-in"),
                        setTimeout(function() {
                            I && _()
                        }, 300)) : (_(), setTimeout(function() {
                        I || t.addClass(s, "pswp__share-modal--fade-in")
                    }, 30)), I || k(), !1
                },
                M = function(t) {
                    var n = (t = t || window.event).target || t.srcElement;
                    return e.shout("shareLinkClick", t, n), !(!n.href || !n.hasAttribute("download") && (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), I || O(), 1))
                },
                k = function() {
                    for (var e, t, n, o, i = "", a = 0; a < v.shareButtons.length; a++) e =
                        v.shareButtons[a], t = v.getImageURLForShare(e), n = v.getPageURLForShare(e), o = v.getTextForShare(e), i += '<a href="' + e.url.replace("{{url}}", encodeURIComponent(n)).replace("{{image_url}}", encodeURIComponent(t)).replace("{{raw_image_url}}", t).replace("{{text}}", encodeURIComponent(o)) + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", v.parseShareButtonOut && (i = v.parseShareButtonOut(e, i));
                    s.children[0].innerHTML = i, s.children[0].onclick = M
                },
                A = function(e) {
                    for (var n =
                            0; n < v.closeElClasses.length; n++)
                        if (t.hasClass(e, "pswp__" + v.closeElClasses[n])) return !0
                },
                F = 0,
                L = function() {
                    clearTimeout(w), F = 0, c && x.setIdle(!1)
                },
                R = function(e) {
                    var t = (e = e || window.event).relatedTarget || e.toElement;
                    t && "HTML" !== t.nodeName || (clearTimeout(w), w = setTimeout(function() {
                        x.setIdle(!0)
                    }, v.timeToIdleOutside))
                },
                P = function(e) {
                    m !== e && (S(p, "preloader--active", !e), m = e)
                },
                Z = function(n) {
                    var r = n.vGap;
                    if (!e.likelyTouchDevice || v.mouseUsed || screen.width > v.fitControlsWidth) {
                        var l = v.barsSize;
                        if (v.captionEl && "auto" ===
                            l.bottom)
                            if (a || ((a = t.createEl("pswp__caption pswp__caption--fake")).appendChild(t.createEl("pswp__caption__center")), o.insertBefore(a, i), t.addClass(o, "pswp__ui--fit")), v.addCaptionHTMLFn(n, a, !0)) {
                                var s = a.clientHeight;
                                r.bottom = parseInt(s, 10) || 44
                            } else r.bottom = l.top;
                        else r.bottom = "auto" === l.bottom ? 0 : l.bottom;
                        r.top = l.top
                    } else r.top = r.bottom = 0
                },
                N = [{
                    name: "caption",
                    option: "captionEl",
                    onInit: function(e) {
                        i = e
                    }
                }, {
                    name: "share-modal",
                    option: "shareEl",
                    onInit: function(e) {
                        s = e
                    },
                    onTap: function() {
                        O()
                    }
                }, {
                    name: "button--share",
                    option: "shareEl",
                    onInit: function(e) {
                        l = e
                    },
                    onTap: function() {
                        O()
                    }
                }, {
                    name: "button--zoom",
                    option: "zoomEl",
                    onTap: e.toggleDesktopZoom
                }, {
                    name: "counter",
                    option: "counterEl",
                    onInit: function(e) {
                        r = e
                    }
                }, {
                    name: "button--close",
                    option: "closeEl",
                    onTap: e.close
                }, {
                    name: "button--arrow--left",
                    option: "arrowEl",
                    onTap: e.prev
                }, {
                    name: "button--arrow--right",
                    option: "arrowEl",
                    onTap: e.next
                }, {
                    name: "button--fs",
                    option: "fullscreenEl",
                    onTap: function() {
                        n.isFullscreen() ? n.exit() : n.enter()
                    }
                }, {
                    name: "preloader",
                    option: "preloaderEl",
                    onInit: function(e) {
                        p =
                            e
                    }
                }];
            x.init = function() {
                    t.extend(e.options, T, !0), v = e.options, o = t.getChildByClass(e.scrollWrap, "pswp__ui"), d = e.listen,
                        function() {
                            var e;
                            d("onVerticalDrag", function(e) {
                                C && e < .95 ? x.hideControls() : !C && e >= .95 && x.showControls()
                            }), d("onPinchClose", function(t) {
                                C && t < .9 ? (x.hideControls(), e = !0) : e && !C && t > .9 && x.showControls()
                            }), d("zoomGestureEnded", function() {
                                (e = !1) && !C && x.showControls()
                            })
                        }(), d("beforeChange", x.update), d("doubleTap", function(t) {
                            var n = e.currItem.initialZoomLevel;
                            e.getZoomLevel() !== n ? e.zoomTo(n, t,
                                333) : e.zoomTo(v.getDoubleTapZoom(!1, e.currItem), t, 333)
                        }), d("preventDragEvent", function(e, t, n) {
                            var o = e.target || e.srcElement;
                            o && o.getAttribute("class") && e.type.indexOf("mouse") > -1 && (o.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(o.tagName)) && (n.prevent = !1)
                        }), d("bindEvents", function() {
                            t.bind(o, "pswpTap click", E), t.bind(e.scrollWrap, "pswpTap", x.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", x.onMouseOver)
                        }), d("unbindEvents", function() {
                            I || O(), g && clearInterval(g),
                                t.unbind(document, "mouseout", R), t.unbind(document, "mousemove", L), t.unbind(o, "pswpTap click", E), t.unbind(e.scrollWrap, "pswpTap", x.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", x.onMouseOver), n && (t.unbind(document, n.eventK, x.updateFullscreen), n.isFullscreen() && (v.hideAnimationDuration = 0, n.exit()), n = null)
                        }), d("destroy", function() {
                            v.captionEl && (a && o.removeChild(a), t.removeClass(i, "pswp__caption--empty")), s && (s.children[0].onclick = null), t.removeClass(o, "pswp__ui--over-close"), t.addClass(o, "pswp__ui--hidden"),
                                x.setIdle(!1)
                        }), v.showAnimationDuration || t.removeClass(o, "pswp__ui--hidden"), d("initialZoomIn", function() {
                            v.showAnimationDuration && t.removeClass(o, "pswp__ui--hidden")
                        }), d("initialZoomOut", function() {
                            t.addClass(o, "pswp__ui--hidden")
                        }), d("parseVerticalMargin", Z),
                        function() {
                            var e, n, i, a = function(o) {
                                if (o)
                                    for (var a = o.length, r = 0; r < a; r++) {
                                        e = o[r], n = e.className;
                                        for (var l = 0; l < N.length; l++) i = N[l], n.indexOf("pswp__" + i.name) > -1 && (v[i.option] ? (t.removeClass(e, "pswp__element--disabled"), i.onInit && i.onInit(e)) : t.addClass(e,
                                            "pswp__element--disabled"))
                                    }
                            };
                            a(o.children);
                            var r = t.getChildByClass(o, "pswp__top-bar");
                            r && a(r.children)
                        }(), v.shareEl && l && s && (I = !0), D(), v.timeToIdle && d("mouseUsed", function() {
                            t.bind(document, "mousemove", L), t.bind(document, "mouseout", R), g = setInterval(function() {
                                2 == ++F && x.setIdle(!0)
                            }, v.timeToIdle / 2)
                        }), v.fullscreenEl && !t.features.isOldAndroid && (n || (n = x.getFullscreenAPI()), n ? (t.bind(document, n.eventK, x.updateFullscreen), x.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template,
                            "pswp--supports-fs")), v.preloaderEl && (P(!0), d("beforeChange", function() {
                            clearTimeout(f), f = setTimeout(function() {
                                e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && P(!1) : P(!0)
                            }, v.loadingIndicatorDelay)
                        }), d("imageLoadComplete", function(t, n) {
                            e.currItem === n && P(!0)
                        }))
                }, x.setIdle = function(e) {
                    c = e, S(o, "ui--idle", e)
                }, x.update = function() {
                    C && e.currItem ? (x.updateIndexIndicator(), v.captionEl && (v.addCaptionHTMLFn(e.currItem, i), S(i, "caption--empty", !e.currItem.title)),
                        b = !0) : b = !1, I || O(), D()
                }, x.updateFullscreen = function(o) {
                    o && setTimeout(function() {
                        e.setScrollOffset(0, t.getScrollY())
                    }, 50), t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
                }, x.updateIndexIndicator = function() {
                    v.counterEl && (r.innerHTML = e.getCurrentIndex() + 1 + v.indexIndicatorSep + v.getNumItemsFn())
                }, x.onGlobalTap = function(n) {
                    var o = (n = n || window.event).target || n.srcElement;
                    if (!y)
                        if (n.detail && "mouse" === n.detail.pointerType) {
                            if (A(o)) return void e.close();
                            t.hasClass(o, "pswp__img") && (1 === e.getZoomLevel() &&
                                e.getZoomLevel() <= e.currItem.fitRatio ? v.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
                        } else if (v.tapToToggleControls && (C ? x.hideControls() : x.showControls()), v.tapToClose && (t.hasClass(o, "pswp__img") || A(o))) return void e.close()
                }, x.onMouseOver = function(e) {
                    var t = (e = e || window.event).target || e.srcElement;
                    S(o, "ui--over-close", A(t))
                }, x.hideControls = function() {
                    t.addClass(o, "pswp__ui--hidden"), C = !1
                }, x.showControls = function() {
                    C = !0, b || x.update(), t.removeClass(o, "pswp__ui--hidden")
                },
                x.supportsFullscreen = function() {
                    var e = document;
                    return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
                }, x.getFullscreenAPI = function() {
                    var t, n = document.documentElement,
                        o = "fullscreenchange";
                    return n.requestFullscreen ? t = {
                            enterK: "requestFullscreen",
                            exitK: "exitFullscreen",
                            elementK: "fullscreenElement",
                            eventK: o
                        } : n.mozRequestFullScreen ? t = {
                            enterK: "mozRequestFullScreen",
                            exitK: "mozCancelFullScreen",
                            elementK: "mozFullScreenElement",
                            eventK: "moz" + o
                        } : n.webkitRequestFullscreen ?
                        t = {
                            enterK: "webkitRequestFullscreen",
                            exitK: "webkitExitFullscreen",
                            elementK: "webkitFullscreenElement",
                            eventK: "webkit" + o
                        } : n.msRequestFullscreen && (t = {
                            enterK: "msRequestFullscreen",
                            exitK: "msExitFullscreen",
                            elementK: "msFullscreenElement",
                            eventK: "MSFullscreenChange"
                        }), t && (t.enter = function() {
                                if (u = v.closeOnScroll, v.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK) return e.template[this.enterK]();
                                e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                            }, t.exit = function() {
                                return v.closeOnScroll = u, document[this.exitK]()
                            },
                            t.isFullscreen = function() {
                                return document[this.elementK]
                            }), t
                }
        }
    },
    3675: function(e, t, n) {
        var o, i = n(0),
            a = n(1),
            r = n(3342),
            l = n(3343);
        webwave.provide("com.webwave.photoswipe.PhotoswipeService");
        var s = function() {
            function e() {
                Object(i.a)(this, e)
            }
            return Object(a.a)(e, [{
                key: "bindImgClickOnHtmlText",
                value: function(t) {
                    var n = this;
                    this.removeImgClickOnHtmlText(t), t.on(e.CLICK_EVENT_NAME, function(e) {
                        var o = e.target;
                        if ("IMG" === o.nodeName && "A" !== o.parentNode.tagName) {
                            var i = t.find("img"),
                                a = Array.prototype.map.call(i, function(e) {
                                    var t =
                                        $(e);
                                    return {
                                        src: t.attr("src"),
                                        w: e.naturalWidth,
                                        h: e.naturalHeight,
                                        msrc: t.attr("src"),
                                        title: t.attr("title")
                                    }
                                });
                            n.openAsLightbox(a, i.index(o))
                        }
                    })
                }
            }, {
                key: "removeImgClickOnHtmlText",
                value: function(t) {
                    t.off(e.CLICK_EVENT_NAME)
                }
            }, {
                key: "openAsLightbox",
                value: function(e, t) {
                    webwave.isNotDef(t) && (t = 0);
                    var n = document.querySelectorAll(".pswp")[0],
                        o = {
                            index: parseInt(t, 10),
                            history: !1,
                            closeOnScroll: !1,
                            closeOnVerticalDrag: !0,
                            pinchToClose: !1,
                            shareEl: !1
                        };
                    (new r.a(n, l.a, e, o)).init()
                }
            }]), e
        }();
        s.CLICK_EVENT_NAME = "click.pswpClickHandler",
            com.webwave.photoswipe.PhotoswipeService = s, s.getInstance = function() {
                return webwave.isNotDef(o) && (o = new s), o
            }
    },
    6954: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        n(3342), n(3343), n(3675);
        window[window.WWNamespace.LOAD_MODULE_SERVICE].notifyAboutLoad(window[window.WWNamespace.MODULES].PHOTOSWIPE)
    }
});
var process = process || {
    env: {
        NODE_ENV: "development"
    }
};