//# sourceMappingURL=galleryModule.js.map
var process = process || {
    env: {
        NODE_ENV: "development"
    }
};
! function(t) {
    var e = {};

    function i(n) {
        if (e[n]) return e[n].exports;
        var a = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(a.exports, a, a.exports, i), a.l = !0, a.exports
    }
    i.m = t, i.c = e, i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 6948)
}({
    0: function(t, e, i) {
        e.a = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
    },
    1: function(t, e, i) {
        function n(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }
        e.a = function(t, e, i) {
            e && n(t.prototype, e);
            i && n(t, i);
            return Object.defineProperty(t, "prototype", {
                writable: !1
            }), t
        }
    },
    1018: function(t, e, i) {
        i.d(e, "a", function() {
            return u
        });
        var n = i(0),
            a = i(1),
            r = i(3),
            s = i(4),
            o = i(2);

        function l(t) {
            var e = function() {
                if ("undefined" == typeof Reflect ||
                    !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, n = Object(o.a)(t);
                if (e) {
                    var a = Object(o.a)(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return Object(s.a)(this, i)
            }
        }
        var u = function(t) {
            Object(r.a)(i, t);
            var e = l(i);

            function i(t) {
                var a;
                return Object(n.a)(this, i), webwave.isNotDef(t.duration) &&
                    (t.duration = i.DEFAULT_AUTO_ANIMATION_TIME), (a = e.call(this, t))._animation = t.animation, a._initialAnimProgress = t.animation.getCurrentProgress(), a._direction = t.direction, a._finalAnimProgress = "backward" === t.direction ? 0 : 1, a._animationProgressDelta = a._finalAnimProgress - a._initialAnimProgress, a._animation._onComplete = t.onComplete, a
            }
            return Object(a.a)(i, [{
                key: "tick",
                value: function() {
                    var t = this._initialAnimProgress + this._animationProgressDelta * this._progress;
                    this._animation.setCurrentTime(t * this._animation.getDuration()),
                        this._animation.updateValues(), this._animation.render(), webwave.isFunction(this._animation._stepCallback) && this._animation._stepCallback()
                }
            }, {
                key: "finish",
                value: function() {
                    this._animation.finish()
                }
            }], [{
                key: "createRevertAnimation",
                value: function(t) {
                    if (t instanceof i) {
                        var e = "backward" === t._direction ? "forward" : "backward",
                            n = "forward" === e ? t._animation.getDuration() - t._animation.getCurrentTime() : t._animation.getCurrentTime();
                        return new i({
                            animation: t._animation,
                            onComplete: t._animation._onComplete,
                            duration: n,
                            direction: e
                        })
                    }
                    return new i({
                        animation: t,
                        direction: "backward",
                        duration: t.getCurrentTime(),
                        onComplete: t._onComplete
                    })
                }
            }]), i
        }(i(800).a);
        u.DEFAULT_AUTO_ANIMATION_TIME = 150
    },
    1026: function(t, e, i) {
        i.d(e, "a", function() {
            return d
        });
        var n = i(0),
            a = i(1),
            r = i(17),
            s = i(3),
            o = i(4),
            l = i(2),
            u = i(190),
            h = i(1429),
            c = i(54);

        function p(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, n = Object(l.a)(t);
                if (e) {
                    var a = Object(l.a)(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return Object(o.a)(this, i)
            }
        }
        var d = function(t) {
            Object(s.a)(i, t);
            var e = p(i);

            function i(t) {
                var a;
                return Object(n.a)(this, i), (a = e.call(this, t))._cropType = webwave.isValidEnumValue(t.cropType, u.a) ? t.cropType : null, a
            }
            return Object(a.a)(i, [{
                key: "serialize",
                value: function() {
                    return Object.assign(Object(r.a)(Object(l.a)(i.prototype),
                        "serialize", this).call(this), {
                        cropType: this.getCropType()
                    })
                }
            }, {
                key: "loadValueFromObject",
                value: function(t) {
                    Object(r.a)(Object(l.a)(i.prototype), "loadValueFromObject", this).call(this, t), this.setCropType(t.getCropType())
                }
            }, {
                key: "getCropType",
                value: function() {
                    return this._cropType
                }
            }, {
                key: "setCropType",
                value: function(t) {
                    this._cropType = t
                }
            }, {
                key: "isCropTypeValidToCropping",
                value: function() {
                    return i.isCropTypeValidToCropping(this.getCropType())
                }
            }], [{
                    key: "deserialize",
                    value: function(t) {
                        return new i(t)
                    }
                },
                {
                    key: "createDefaultWithCropType",
                    value: function(t) {
                        return new i({
                            cropType: t,
                            x: {
                                value: 50,
                                unit: c.a.PERCENT
                            },
                            y: {
                                value: 50,
                                unit: c.a.PERCENT
                            }
                        })
                    }
                }, {
                    key: "isCropTypeValidToCropping",
                    value: function(t) {
                        return t !== u.a.FULL_WIDTH
                    }
                }
            ]), i
        }(h.a)
    },
    11: function(t, e, i) {
        e.a = function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
    },
    1344: function(t, e, i) {
        i.d(e, "a", function() {
            return u
        });
        var n = i(0),
            a = i(1),
            r = i(3),
            s = i(4),
            o = i(2);
        i(43);

        function l(t) {
            var e = function() {
                if ("undefined" ==
                    typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, n = Object(o.a)(t);
                if (e) {
                    var a = Object(o.a)(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return Object(s.a)(this, i)
            }
        }
        var u = function(t) {
            Object(r.a)(i, t);
            var e = l(i);

            function i(t) {
                var a;
                return Object(n.a)(this, i), (a = e.call(this,
                    t))._panel = t.panel, a._nextPanel = t.nextPanel, a._direction = t.direction, a._panelSize = t.panelSize, a._$panelParent = t.panelParent, a
            }
            return Object(a.a)(i, [{
                key: "setDirection",
                value: function(t) {
                    this._direction = t
                }
            }, {
                key: "setNextPanel",
                value: function(t) {
                    this._nextPanel = t
                }
            }, {
                key: "getNextPanel",
                value: function() {
                    return this._nextPanel
                }
            }]), i
        }(i(906).a)
    },
    1429: function(t, e, i) {
        i.d(e, "a", function() {
            return s
        });
        var n = i(0),
            a = i(1),
            r = i(53),
            s = function() {
                function t(e) {
                    Object(n.a)(this, t), this._x = new r.a(e.x), this._y = new r.a(e.y)
                }
                return Object(a.a)(t, [{
                    key: "serialize",
                    value: function() {
                        return {
                            x: this.getX().serialize(),
                            y: this.getY().serialize()
                        }
                    }
                }, {
                    key: "loadValueFromObject",
                    value: function(t) {
                        webwave.isNotDefOrNull(t) || (this.getX().loadValuesFromObject(t.getX()), this.getY().loadValuesFromObject(t.getY()))
                    }
                }, {
                    key: "getX",
                    value: function() {
                        return this._x
                    }
                }, {
                    key: "getY",
                    value: function() {
                        return this._y
                    }
                }, {
                    key: "getCssMapForPosition",
                    value: function() {
                        return "".concat(this.getX().getValue()).concat(this.getX().getUnit(), " ").concat(this.getY().getValue()).concat(this.getY().getUnit())
                    }
                }], [{
                    key: "deserialize",
                    value: function(e) {
                        return new t(e)
                    }
                }]), t
            }()
    },
    17: function(t, e, i) {
        e.a = a;
        var n = i(734);

        function a() {
            return (a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
                var a = Object(n.a)(t, e);
                if (a) {
                    var r = Object.getOwnPropertyDescriptor(a, e);
                    return r.get ? r.get.call(arguments.length < 3 ? t : i) : r.value
                }
            }).apply(this, arguments)
        }
    },
    181: function(t, e, i) {
        e.a = {
            INNER_TEXT: "innerText"
        }
    },
    190: function(t, e, i) {
        e.a = {
            COVER: "cover",
            CONTAIN: "contain",
            FULL_WIDTH: "100% 100%",
            AUTO: "auto"
        }
    },
    199: function(t,
        e, i) {
        var n = i(90);
        e.a = {
            DEFAULT_ANIMATION_TIME: 300,
            DEFAULT_DIRECTION: n.a.TOP
        }
    },
    2: function(t, e, i) {
        function n(t) {
            return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }
        e.a = n
    },
    2354: function(t, e, i) {
        e.a = {
            HOVER: "hover",
            VISIBLE: "visible"
        }
    },
    2400: function(t, e, i) {
        i.d(e, "a", function() {
            return d
        });
        var n = i(0),
            a = i(1),
            r = i(3),
            s = i(4),
            o = i(2),
            l = i(30),
            u = i(43),
            h = i(1344),
            c = i(956);

        function p(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, n = Object(o.a)(t);
                if (e) {
                    var a = Object(o.a)(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return Object(s.a)(this, i)
            }
        }
        var d = function(t) {
            Object(r.a)(i, t);
            var e = p(i);

            function i(t) {
                var a;
                return Object(n.a)(this, i), (a = e.call(this, t))._singlePartSize = new u.a({
                    width: Math.floor(a._panelSize.width /
                        2),
                    height: Math.floor(a._panelSize.height / 2)
                }), a._initDomObjects(), a
            }
            return Object(a.a)(i, [{
                    key: "_initDomObjects",
                    value: function() {
                        var t = [],
                            e = this._singlePartSize,
                            n = this._direction === c.a.LEFT ? this.getForwardVector() : this.getBackwardVector();
                        this._partialPanel2 = i.createPartialPanel({
                            x: 0,
                            y: 0,
                            width: this._panelSize.width,
                            height: this._panelSize.height,
                            panel: this._nextPanel
                        }), this._$panelParent.append(this._partialPanel2.$panel), this._partialPanel2.z = this.getInitialNextPanelZIndex();
                        for (var a = 0; a < 2; a++) {
                            var r = [];
                            t.push(r);
                            for (var s = 0; s < 2; s++) {
                                var o = i.createPartialPanel({
                                    width: e.width,
                                    height: e.height,
                                    x: a * e.width,
                                    y: s * e.height,
                                    panel: this._panel
                                });
                                r.push({
                                    $panel: o.$panel,
                                    $content: o.$content,
                                    currentPos: new l.a(0, 0),
                                    moveVector: n[s][a]
                                }), this._$panelParent.append(o.$panel)
                            }
                        }
                        this._partialPanels = t, this._panel[0].style.display = "none", this._nextPanel[0].style.display = "none"
                    }
                }, {
                    key: "updateValues",
                    value: function() {
                        var t, e = this._partialPanels,
                            i = this._easing(this._progress);
                        this._partialPanel2.z = (1 - i) * this.getInitialNextPanelZIndex();
                        for (var n = 0; n < e.length; n++)
                            for (var a = 0; a < e[n].length; a++) {
                                t = e[n][a];
                                var r = Math.max(0, Math.min(1, (this._progress - t.moveVector.s) / (1 - this.getMaxDelay())));
                                i = this._easing(r), t.currentPos.x = t.moveVector.x * this._singlePartSize.width * i, t.currentPos.y = t.moveVector.y * this._singlePartSize.height * i
                            }
                    }
                }, {
                    key: "clean",
                    value: function() {
                        this._panel[0].style.display = "", this._nextPanel[0].style.display = "";
                        for (var t = this._partialPanels, e = 0; e < t.length; e++)
                            for (var i = 0; i < t[e].length; i++) t[e][i].$panel.remove();
                        this._partialPanel2.$panel.remove()
                    }
                },
                {
                    key: "render",
                    value: function() {
                        for (var t, e = this._partialPanels, i = 0; i < e.length; i++)
                            for (var n = 0; n < e[i].length; n++)(t = e[i][n]).$content[0].style.transform = "translate3D(" + t.currentPos.x + "px, " + t.currentPos.y + "px, 0)";
                        this._partialPanel2.$content[0].style.transform = "perspective(100px) translate3d(0, 0, " + this._partialPanel2.z + "px)"
                    }
                }, {
                    key: "getForwardVector",
                    value: function() {}
                }, {
                    key: "getBackwardVector",
                    value: function() {}
                }, {
                    key: "getMaxDelay",
                    value: function() {}
                }, {
                    key: "getInitialNextPanelZIndex",
                    value: function() {}
                }
            ], [{
                key: "createPartialPanel",
                value: function(t) {
                    var e = $('<div class="gv_partialPanel" style="width: ' + t.width + "px;height: " + t.height + "px;left: " + t.x + "px;top: " + t.y + 'px;position: absolute;overflow: hidden;"></div>'),
                        i = e.clone();
                    i[0].style.left = "0", i[0].style.top = "0";
                    var n = t.panel.clone();
                    return n[0].style.left = -t.x + "px", n[0].style.top = -t.y + "px", n[0].style.position = "absolute", i.append(n), e.append(i), {
                        $panel: e,
                        $content: i
                    }
                }
            }]), i
        }(h.a)
    },
    2587: function(t, e, i) {
        i.d(e, "a", function() {
            return h
        });
        var n = i(0),
            a = i(1),
            r = i(190),
            s = i(3398),
            o = i(30),
            l = i(3399),
            u = i(43),
            h = function() {
                function t() {
                    Object(n.a)(this, t)
                }
                return Object(a.a)(t, null, [{
                    key: "calculateSizeAndOffsetForCropping",
                    value: function(e) {
                        var i = e.imageCropData.getCropType(),
                            n = t.calculateScaleForCropType({
                                cropType: i,
                                widthFactor: e.elemSize.getWidth() / e.imageSize.getWidth(),
                                heightFactor: e.elemSize.getHeight() / e.imageSize.getHeight()
                            }),
                            a = Math.round(e.imageSize.getWidth() * n.getScaleX()),
                            r = Math.round(e.imageSize.getHeight() * n.getScaleY()),
                            s = t.calculateOffset({
                                imageCropData: e.imageCropData,
                                imageWidth: a,
                                imageHeight: r,
                                elemWidth: e.elemSize.getWidth(),
                                elemHeight: e.elemSize.getHeight()
                            });
                        return new l.a({
                            offset: s,
                            size: new u.a({
                                width: a,
                                height: r
                            })
                        })
                    }
                }, {
                    key: "calculateScaleForCropType",
                    value: function(t) {
                        var e, i, n = t.widthFactor,
                            a = t.heightFactor;
                        switch (t.cropType) {
                            case r.a.COVER:
                                i = e = Math.max(n, a);
                                break;
                            case r.a.FULL_WIDTH:
                                e = n, i = a;
                                break;
                            case r.a.AUTO:
                                e = 1, i = 1;
                                break;
                            case r.a.CONTAIN:
                                i = e = Math.min(n, a)
                        }
                        return new s.a(e, i)
                    }
                }, {
                    key: "calculateOffset",
                    value: function(t) {
                        var e = t.imageCropData,
                            i = e.getX().getValue() /
                            100,
                            n = e.getY().getValue() / 100,
                            a = Math.round((t.elemWidth - t.imageWidth) * i),
                            r = Math.round((t.elemHeight - t.imageHeight) * n);
                        return new o.a(a, r)
                    }
                }, {
                    key: "updateDomObjectByCroppedImage",
                    value: function(t, e) {
                        t.css({
                            width: e.getSize().getWidth(),
                            height: e.getSize().getHeight(),
                            top: e.getOffset().getY(),
                            left: e.getOffset().getX()
                        })
                    }
                }]), t
            }()
    },
    2820: function(t, e, i) {
        i.d(e, "a", function() {
            return s
        });
        var n = i(0),
            a = i(1),
            r = i(752),
            s = function() {
                function t(e, i) {
                    Object(n.a)(this, t), this._startFilter = r.a.readFromString(e), this._finalFilter =
                        r.a.readFromString(i), this._fillMissingValues(this._startFilter, this._finalFilter), this._currentFilter = this._startFilter.clone(), this._delta = this._finalFilter.clone(), this._delta.subtract(this._startFilter)
                }
                return Object(a.a)(t, [{
                    key: "_fillMissingValues",
                    value: function(t, e) {
                        t.fillDefaultMissingValues(e), e.fillDefaultMissingValues(t)
                    }
                }, {
                    key: "updateByProgress",
                    value: function(t) {
                        this._currentFilter = this._startFilter.clone();
                        var e = this._delta.clone();
                        e.multiply(t), this._currentFilter.add(e)
                    }
                }, {
                    key: "getCurrentFilter",
                    value: function() {
                        return this._currentFilter
                    }
                }]), t
            }()
    },
    3: function(t, e, i) {
        e.a = function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e && Object(n.a)(t, e)
        };
        var n = i(83)
    },
    30: function(t, e, i) {
        i.d(e, "a", function() {
            return r
        });
        var n = i(0),
            a = i(1),
            r = function() {
                function t(e, i) {
                    Object(n.a)(this, t), this.y =
                        0, this.x = 0, webwave.isNumberAndNotNaN(e) ? (this.x = e, webwave.isNumberAndNotNaN(i) && (this.y = i)) : webwave.isDef(e) && (webwave.isNumberAndNotNaN(e.x) && (this.x = e.x), webwave.isNumberAndNotNaN(e.y) && (this.y = e.y))
                }
                return Object(a.a)(t, [{
                    key: "getX",
                    value: function() {
                        return this.x
                    }
                }, {
                    key: "setX",
                    value: function(t) {
                        this.x = t
                    }
                }, {
                    key: "getY",
                    value: function() {
                        return this.y
                    }
                }, {
                    key: "setY",
                    value: function(t) {
                        this.y = t
                    }
                }, {
                    key: "subtract",
                    value: function(t) {
                        return this.x -= t.x, this.y -= t.y, this
                    }
                }, {
                    key: "add",
                    value: function(t) {
                        return this.x +=
                            t.x, this.y += t.y, this
                    }
                }, {
                    key: "multiply",
                    value: function(t) {
                        return this.x *= t, this.y *= t, this
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        return {
                            x: this.x,
                            y: this.y
                        }
                    }
                }, {
                    key: "clone",
                    value: function() {
                        return new t({
                            x: this.x,
                            y: this.y
                        })
                    }
                }, {
                    key: "equals",
                    value: function(t) {
                        return this.x === t.x && this.y === t.y
                    }
                }, {
                    key: "lt",
                    value: function(t) {
                        return this.x < t.x && this.y < t.y
                    }
                }, {
                    key: "lte",
                    value: function(t) {
                        return this.x <= t.x && this.y <= t.y
                    }
                }, {
                    key: "gt",
                    value: function(t) {
                        return this.x > t.x && this.y > t.y
                    }
                }, {
                    key: "gte",
                    value: function(t) {
                        return this.x >=
                            t.x && this.y >= t.y
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return "{".concat(this.x, ",").concat(this.y, "}}")
                    }
                }], [{
                    key: "deserialize",
                    value: function(e) {
                        return webwave.isNotDef(e) ? new t(0, 0) : new t(e.x, e.y)
                    }
                }, {
                    key: "countDistance",
                    value: function(t, e) {
                        return Math.sqrt(Math.abs(t.getX() - e.getX()) * Math.abs(t.getY() - e.getY()))
                    }
                }]), t
            }()
    },
    33: function(t, e, i) {
        function n(t) {
            "@babel/helpers - typeof";
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t &&
                    "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        e.a = n
    },
    3344: function(t, e, i) {
        i.d(e, "a", function() {
            return o
        });
        var n = i(0),
            a = i(1),
            r = i(30),
            s = i(90);
        webwave.provide("com.webwave.ui.swipeable.SwipeData");
        var o = function() {
            function t(e) {
                Object(n.a)(this, t), webwave.isNotDef(e) && (e = {}), this.startPoint = webwave.isDef(e.startPoint) ? e.startPoint : new r.a(0, 0), this.swipe = webwave.isDef(e.swipe) ? e.swipe : new r.a(0, 0), this.direction = t.getDirectionByVector(this.swipe)
            }
            return Object(a.a)(t, [{
                key: "setSwipe",
                value: function(e) {
                    this.swipe = e, this.direction = t.getDirectionByVector(this.swipe)
                }
            }]), t
        }();
        com.webwave.ui.swipeable.SwipeData = o, o.getDirectionByVector = function(t) {
            return t.x > 0 ? s.a.RIGHT : s.a.LEFT
        }
    },
    3386: function(t, e, i) {
        var n = i(0),
            a = i(1),
            r = i(30),
            s = i(3344);
        webwave.provide("com.webwave.ui.swipeable.Swipeable");
        var o = 0,
            l = function() {
                function t(e, i) {
                    Object(n.a)(this, t), webwave.isNotDef(i) && (i = {}), this._element = e, this._$element = $(e), this._delegatedElements = webwave.isString(i._delegatedElements) ?
                        i._delegatedElements : "", this._id = ++o, this._$eventContainer = $(window), this._detectingSwipe = !1, this._eventNamespace = "swipeable_" + this._id, this._horizontalSwipeInProgress = !1, this._onStartHandler = i.onStart, this._swipeHandler = i.onSwipe, this._onStopHandler = i.onStop, this._swipeData = null, this._swipeDetectionMinDistance = webwave.isNumber(i.minDistance) ? i.minDistance : t.DEFAULT_SWIPE_MIN_DISTANCE, this._noClickPrevent = !0 === i.noClickPrevent, this.startEventListeners(), this._lastSwipeEndDate = 0
                }
                return Object(a.a)(t, [{
                    key: "startEventListeners",
                    value: function() {
                        var e = this._eventNamespace,
                            i = this;
                        this._$element.on("touchstart." + e + " mousedown." + e, this._delegatedElements, function(t) {
                            "mousedown" === t.type && 1 !== t.which || i._startSwipeDetection(t)
                        }), this._$element.on("click." + e, this._delegatedElements, function(e) {
                            e.timeStamp - i._lastSwipeEndDate < t.PREVENT_CLICK_TRESHOLD && (e.preventDefault(), e.stopPropagation())
                        })
                    }
                }, {
                    key: "stopEventListeners",
                    value: function() {
                        var t = this._eventNamespace;
                        this._$element.off("touchstart." + t +
                            " mousedown." + t)
                    }
                }, {
                    key: "_updateSwipeDataByEvent",
                    value: function(e) {
                        var i = t.getPositionByEvent(e);
                        i.subtract(this._swipeData.startPoint), this._swipeData.setSwipe(i)
                    }
                }, {
                    key: "_startSwipeDetection",
                    value: function(e) {
                        var i = this;
                        this._stopSwipeDetection(), this._detectingSwipe = !0;
                        var n = t.getPositionByEvent(e);
                        this._swipeData = new s.a({
                            startPoint: n
                        });
                        var a = e,
                            r = this._eventNamespace,
                            o = n;
                        this._$eventContainer.on("mousemove." + r + " touchmove." + r, function(e) {
                            var n = t.getPositionByEvent(e);
                            o.x != n.x && e.preventDefault(),
                                i._updateSwipeDataByEvent(e);
                            var r = i._swipeData.swipe;
                            Math.abs(r.x) > i._swipeDetectionMinDistance ? (i._stopSwipeDetection(), i._startHorizontalSwiping(a)) : Math.abs(r.y) > i._swipeDetectionMinDistance && i._stopSwipeDetection(), o = n
                        }), this._$eventContainer.on("mouseup." + r + " touchend." + r, this._stopSwipeDetection.bind(this))
                    }
                }, {
                    key: "_stopSwipeDetection",
                    value: function() {
                        if (!0 === this._detectingSwipe) {
                            var t = this._eventNamespace;
                            this._$eventContainer.off("mousemove." + t + " touchmove." + t), this._$eventContainer.off("mouseup." +
                                t + " touchend." + t), this._detectingSwipe = !1
                        }
                    }
                }, {
                    key: "_startHorizontalSwiping",
                    value: function(t) {
                        this._stopHorizontalSwiping(), this._horizontalSwipeInProgress = !0, webwave.isFunction(this._onStartHandler) && this._onStartHandler.call(this._element, t, this._swipeData);
                        var e = this._eventNamespace;
                        this._$eventContainer.on("mousemove." + e + " touchmove." + e, this._ownSwipeHandler.bind(this)), this._$eventContainer.on("mouseup." + e + " touchend." + e, this._ownSwipeEndHandler.bind(this))
                    }
                }, {
                    key: "_ownSwipeHandler",
                    value: function(t) {
                        this._updateSwipeDataByEvent(t),
                            webwave.isFunction(this._swipeHandler) && this._swipeHandler.call(this._element, t, this._swipeData), t.preventDefault()
                    }
                }, {
                    key: "_ownSwipeEndHandler",
                    value: function(t) {
                        this._lastSwipeEndDate = t.timeStamp, this._stopHorizontalSwiping(), webwave.isFunction(this._onStopHandler) && this._onStopHandler.call(this._element, t, this._swipeData)
                    }
                }, {
                    key: "_stopHorizontalSwiping",
                    value: function() {
                        if (!0 === this._horizontalSwipeInProgress) {
                            var t = this._eventNamespace;
                            this._$eventContainer.off("mousemove." + t + " touchmove." + t),
                                this._$eventContainer.off("mouseup." + t + " touchend." + t), this._horizontalSwipeInProgress = !1
                        }
                    }
                }, {
                    key: "dispose",
                    value: function(t) {
                        this.stopEventListeners()
                    }
                }]), t
            }();
        com.webwave.ui.swipeable.Swipeable = l, l.DEFAULT_SWIPE_MIN_DISTANCE = 8, l.PREVENT_CLICK_TRESHOLD = 200, l.getPositionByEvent = function(t) {
            var e = new r.a(0, 0);
            if ("touchstart" == t.type || "touchmove" == t.type || "touchend" == t.type || "touchcancel" == t.type) {
                var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0];
                e.x = i.pageX, e.y = i.pageY
            } else "mousedown" !=
                t.type && "mouseup" != t.type && "mousemove" != t.type && "mouseover" != t.type && "mouseout" != t.type && "mouseenter" != t.type && "mouseleave" != t.type || (e.x = t.pageX, e.y = t.pageY);
            return e
        }
    },
    3387: function(t, e, i) {
        i.d(e, "a", function() {
            return d
        });
        var n = i(0),
            a = i(1),
            r = i(3),
            s = i(4),
            o = i(2),
            l = i(3388),
            u = i(3390),
            h = i(2820),
            c = i(3391);

        function p(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, n = Object(o.a)(t);
                if (e) {
                    var a = Object(o.a)(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return Object(s.a)(this, i)
            }
        }
        var d = function(t) {
            Object(r.a)(i, t);
            var e = p(i);

            function i(t) {
                var a;
                Object(n.a)(this, i);
                var r = (a = e.call(this, t))._panel.children().eq(0).clone();
                a._$panelParent.prepend(r);
                var s = window.getComputedStyle(a._panel.children()[0]),
                    o = window.getComputedStyle(a._nextPanel.children()[0]);
                return a._borderRadiusTransitions = {
                        topLeft: new c.a(parseInt(s.borderTopLeftRadius), parseInt(o.borderTopLeftRadius)),
                        topRight: new c.a(parseInt(s.borderTopRightRadius), parseInt(o.borderTopRightRadius)),
                        bottomLeft: new c.a(parseInt(s.borderBottomLeftRadius), parseInt(o.borderBottomLeftRadius)),
                        bottomRight: new c.a(parseInt(s.borderBottomRightRadius), parseInt(o.borderBottomRightRadius))
                    }, a._opacityTransition = new c.a(parseFloat(s.opacity), parseFloat(o.opacity), 1), a._backgroundColorTransition = new u.a(s.backgroundColor, o.backgroundColor), a._borderColorsTransitions = {
                        top: new u.a(s.borderTopColor, o.borderTopColor),
                        right: new u.a(s.borderRightColor, o.borderRightColor),
                        bottom: new u.a(s.borderBottomColor, o.borderBottomColor),
                        left: new u.a(s.borderLeftColor, o.borderLeftColor)
                    }, a._boxShadowTransition = new l.a(s.boxShadow, o.boxShadow), a._filterTransition = new h.a(s.filter, o.filter), r[0].style.overflow = "hidden", a._$helper = r, a._panel[0].style.visibility = "hidden", a._nextPanel[0].style.visibility = "hidden", a._$panelParent[0].style.overflow = "visible", a._hasDifferentBackgroundImage =
                    i.isBackgroundImageDifferent(s, o), a._hasDifferentHtml = a._panel.find(".wwTextContent")[0] && a._panel.find(".wwTextContent")[0].outerHTML !== a._nextPanel.find(".wwTextContent")[0].outerHTML, r.html(""), a._hasDifferentBackgroundImage && (r[0].style.backgroundImage = "none", a._$imageHelper1 = a._panel.children().eq(0).clone(), a._$imageHelper2 = a._nextPanel.children().eq(0).clone(), a._prepareHelperForBackgroundImageAnimation(a._$imageHelper1), a._prepareHelperForBackgroundImageAnimation(a._$imageHelper2), a._$helper.append(a._$imageHelper1,
                        a._$imageHelper2)), a._hasDifferentHtml ? (a._$htmlHelper1 = a._panel.children().eq(0).clone(), a._prepareHelperForHtmlAnimation(a._$htmlHelper1), a._$htmlHelper2 = a._nextPanel.children().eq(0).clone(), a._prepareHelperForHtmlAnimation(a._$htmlHelper2), a._$helper.append(a._$htmlHelper1, a._$htmlHelper2)) : (a._$htmlHelper1 = a._panel.children().eq(0).clone(), a._prepareHelperForHtmlAnimation(a._$htmlHelper1), a._$helper.append(a._$htmlHelper1)), a._backgroundOverlayHelper1 = a._panel.children().eq(1).clone(), a._backgroundOverlayHelper2 =
                    a._nextPanel.children().eq(1).clone(), a._$helper.parent().append(a._backgroundOverlayHelper1, a._backgroundOverlayHelper2), a._opacityTransition1 = new c.a(1, 0), a._opacityTransition2 = new c.a(0, 1), a
            }
            return Object(a.a)(i, [{
                key: "_prepareHelperForBackgroundImageAnimation",
                value: function(t) {
                    var e = t[0].style;
                    e.backgroundColor = "transparent", e.opacity = "1", e.boxShadow = "none", e.filter = "", e.borderRadius = "0", e.border = "none", e.width = "100%", e.height = "100%", t.html("")
                }
            }, {
                key: "_prepareHelperForHtmlAnimation",
                value: function(t) {
                    var e =
                        t[0].style;
                    e.background = "none", e.opacity = "1", e.boxShadow = "none", e.filter = "", e.background = "none", e.borderRadius = "0", e.border = "none", e.width = "100%", e.height = "100%"
                }
            }, {
                key: "updateValues",
                value: function() {
                    var t = this._easing(this._progress);
                    for (var e in this._opacityTransition1.updateByProgress(t), this._opacityTransition2.updateByProgress(t), this._opacityTransition.updateByProgress(t), this._backgroundColorTransition.updateByProgress(t), this._borderRadiusTransitions) this._borderRadiusTransitions.hasOwnProperty(e) &&
                        this._borderRadiusTransitions[e].updateByProgress(t);
                    for (var e in this._borderColorsTransitions) this._borderColorsTransitions.hasOwnProperty(e) && this._borderColorsTransitions[e].updateByProgress(t);
                    this._boxShadowTransition.updateByProgress(t), this._filterTransition.updateByProgress(t)
                }
            }, {
                key: "clean",
                value: function() {}
            }, {
                key: "render",
                value: function() {
                    this._$helper[0].style.borderTopLeftRadius = this._borderRadiusTransitions.topLeft.getCurrentValue() + "px", this._$helper[0].style.borderTopRightRadius =
                        this._borderRadiusTransitions.topRight.getCurrentValue() + "px", this._$helper[0].style.borderBottomLeftRadius = this._borderRadiusTransitions.bottomLeft.getCurrentValue() + "px", this._$helper[0].style.borderBottomRightRadius = this._borderRadiusTransitions.bottomRight.getCurrentValue() + "px", this._$helper[0].style.opacity = this._opacityTransition.getCurrentValue(), this._$helper[0].style.backgroundColor = this._backgroundColorTransition.getCurrentColor().toRgbaString(), this._$helper[0].style.borderTopColor = this._borderColorsTransitions.top.getCurrentColor().toRgbaString(),
                        this._$helper[0].style.borderRightColor = this._borderColorsTransitions.right.getCurrentColor().toRgbaString(), this._$helper[0].style.borderBottomColor = this._borderColorsTransitions.bottom.getCurrentColor().toRgbaString(), this._$helper[0].style.borderLeftColor = this._borderColorsTransitions.left.getCurrentColor().toRgbaString(), this._$helper[0].style.boxShadow = this._boxShadowTransition.getCurrentBoxShadow().toCssString(), this._$helper[0].style.filter = this._filterTransition.getCurrentFilter().toCssString(), !0 === this._hasDifferentHtml && (this._$htmlHelper1[0].style.opacity = this._opacityTransition1.getCurrentValue(), this._$htmlHelper2[0].style.opacity = this._opacityTransition2.getCurrentValue()), this._hasDifferentBackgroundImage && (this._$imageHelper1[0].style.opacity = this._opacityTransition1.getCurrentValue(), this._$imageHelper1[0].style.borderTopLeftRadius = this._borderRadiusTransitions.topLeft.getCurrentValue() + "px", this._$imageHelper1[0].style.borderTopRightRadius = this._borderRadiusTransitions.topRight.getCurrentValue() +
                            "px", this._$imageHelper1[0].style.borderBottomLeftRadius = this._borderRadiusTransitions.bottomLeft.getCurrentValue() + "px", this._$imageHelper1[0].style.borderBottomRightRadius = this._borderRadiusTransitions.bottomRight.getCurrentValue() + "px", this._$imageHelper2[0].style.opacity = this._opacityTransition2.getCurrentValue(), this._$imageHelper2[0].style.borderTopLeftRadius = this._borderRadiusTransitions.topLeft.getCurrentValue() + "px", this._$imageHelper2[0].style.borderTopRightRadius = this._borderRadiusTransitions.topRight.getCurrentValue() +
                            "px", this._$imageHelper2[0].style.borderBottomLeftRadius = this._borderRadiusTransitions.bottomLeft.getCurrentValue() + "px", this._$imageHelper2[0].style.borderBottomRightRadius = this._borderRadiusTransitions.bottomRight.getCurrentValue() + "px"), this._backgroundOverlayHelper1[0].style.borderTopLeftRadius = this._borderRadiusTransitions.topLeft.getCurrentValue() + "px", this._backgroundOverlayHelper1[0].style.borderTopRightRadius = this._borderRadiusTransitions.topRight.getCurrentValue() + "px", this._backgroundOverlayHelper1[0].style.borderBottomLeftRadius =
                        this._borderRadiusTransitions.bottomLeft.getCurrentValue() + "px", this._backgroundOverlayHelper1[0].style.borderBottomRightRadius = this._borderRadiusTransitions.bottomRight.getCurrentValue() + "px", this._backgroundOverlayHelper1[0].style.opacity = this._opacityTransition1.getCurrentValue(), this._backgroundOverlayHelper2[0].style.borderTopLeftRadius = this._borderRadiusTransitions.topLeft.getCurrentValue() + "px", this._backgroundOverlayHelper2[0].style.borderTopRightRadius = this._borderRadiusTransitions.topRight.getCurrentValue() +
                        "px", this._backgroundOverlayHelper2[0].style.borderBottomLeftRadius = this._borderRadiusTransitions.bottomLeft.getCurrentValue() + "px", this._backgroundOverlayHelper2[0].style.borderBottomRightRadius = this._borderRadiusTransitions.bottomRight.getCurrentValue() + "px", this._backgroundOverlayHelper2[0].style.opacity = this._opacityTransition2.getCurrentValue()
                }
            }], [{
                key: "isBackgroundImageDifferent",
                value: function(t, e) {
                    return t.backgroundImage !== e.backgroundImage || t.backgroundPosition !== e.backgroundPosition ||
                        t.backgroundAttachment !== e.backgroundAttachment || t.backgroundSize !== e.backgroundSize
                }
            }]), i
        }(i(1344).a)
    },
    3388: function(t, e, i) {
        i.d(e, "a", function() {
            return s
        });
        var n = i(0),
            a = i(1),
            r = i(3389),
            s = function() {
                function t(e, i) {
                    Object(n.a)(this, t), this._startBoxShadow = new r.a(e), this._finalBoxShadow = new r.a(i), this._currentBoxShadow = this._startBoxShadow.clone(), this._delta = this._finalBoxShadow.clone(), this._delta.subtract(this._startBoxShadow)
                }
                return Object(a.a)(t, [{
                    key: "updateByProgress",
                    value: function(t) {
                        this._currentBoxShadow =
                            this._startBoxShadow.clone();
                        var e = this._delta.clone();
                        e.multiply(t), this._currentBoxShadow.add(e)
                    }
                }, {
                    key: "getCurrentBoxShadow",
                    value: function() {
                        return this._currentBoxShadow
                    }
                }]), t
            }()
    },
    3389: function(t, e, i) {
        i.d(e, "a", function() {
            return s
        });
        var n = i(0),
            a = i(1),
            r = i(8782),
            s = (i.n(r), function() {
                function t(e) {
                    Object(n.a)(this, t), webwave.isString(e) && (e = com.webwave.util.cssUtils.parseBoxShadow(e)[0]), webwave.isNotDef(e) && (e = {}), this.offsetX = webwave.isNumberAndNotNaN(e.offsetX) ? e.offsetX : 0, this.offsetY = webwave.isNumberAndNotNaN(e.offsetY) ?
                        e.offsetY : 0, this.blurRadius = webwave.isNumberAndNotNaN(e.blurRadius) ? e.blurRadius : 0, this.spreadRadius = webwave.isNumberAndNotNaN(e.spreadRadius) ? e.spreadRadius : 0, this.color = new r.Color(e.color)
                }
                return Object(a.a)(t, [{
                    key: "subtract",
                    value: function(t) {
                        return this.offsetX -= t.offsetX, this.offsetY -= t.offsetY, this.blurRadius -= t.blurRadius, this.spreadRadius -= t.spreadRadius, this.color.subtract(t.color), this
                    }
                }, {
                    key: "add",
                    value: function(t) {
                        return this.offsetX += t.offsetX, this.offsetY += t.offsetY, this.blurRadius +=
                            t.blurRadius, this.spreadRadius += t.spreadRadius, this.color.add(t.color), this
                    }
                }, {
                    key: "multiply",
                    value: function(t) {
                        return this.offsetX = Math.round(t * this.offsetX), this.offsetY = Math.round(t * this.offsetY), this.blurRadius = Math.round(t * this.blurRadius), this.spreadRadius = Math.round(t * this.spreadRadius), this.color.multiply(t), this
                    }
                }, {
                    key: "clone",
                    value: function() {
                        return new t(this)
                    }
                }, {
                    key: "toCssString",
                    value: function() {
                        return "".concat(this.offsetX, "px ").concat(this.offsetY, "px ").concat(this.blurRadius, "px ").concat(this.spreadRadius,
                            "px ").concat(this.color.toRgbaString())
                    }
                }]), t
            }())
    },
    3390: function(t, e, i) {
        i.d(e, "a", function() {
            return s
        });
        var n = i(0),
            a = i(1),
            r = i(8782),
            s = (i.n(r), function() {
                function t(e, i) {
                    Object(n.a)(this, t), this._initialColor = new r.Color(e), this._finalColor = new r.Color(i), this._colorDelta = this._finalColor.clone(), this._colorDelta.subtract(this._initialColor), this._currentColor = this._initialColor.clone()
                }
                return Object(a.a)(t, [{
                    key: "updateByProgress",
                    value: function(t) {
                        this._currentColor = this._initialColor.clone();
                        var e =
                            this._colorDelta.clone();
                        this._currentColor.add(e.multiply(t))
                    }
                }, {
                    key: "getCurrentColor",
                    value: function() {
                        return this._currentColor
                    }
                }]), t
            }())
    },
    3391: function(t, e, i) {
        i.d(e, "a", function() {
            return r
        });
        var n = i(0),
            a = i(1),
            r = function() {
                function t(e, i, a) {
                    Object(n.a)(this, t), !1 === webwave.isNumberAndNotNaN(a) && (a = 0), this._initialValue = webwave.isNumberAndNotNaN(e) ? e : a, this._finalValue = webwave.isNumberAndNotNaN(i) ? i : a, this._delta = this._finalValue - this._initialValue, this._currentValue = this._initialValue
                }
                return Object(a.a)(t, [{
                    key: "updateByProgress",
                    value: function(t) {
                        this._currentValue = this._initialValue + this._delta * t
                    }
                }, {
                    key: "getCurrentValue",
                    value: function() {
                        return this._currentValue
                    }
                }]), t
            }()
    },
    3392: function(t, e, i) {
        i.d(e, "a", function() {
            return u
        });
        var n = i(0),
            a = i(1),
            r = i(3),
            s = i(4),
            o = i(2);

        function l(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, n = Object(o.a)(t);
                if (e) {
                    var a = Object(o.a)(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return Object(s.a)(this, i)
            }
        }
        var u = function(t) {
            Object(r.a)(i, t);
            var e = l(i);

            function i(t) {
                var a;
                return Object(n.a)(this, i), (a = e.call(this, t))._initialOpacity1 = 1, a._initialOpacity2 = 0, a._finalOpacity1 = 0, a._finalOpacity2 = 1, a._opacityDelta1 = a._finalOpacity1 - a._initialOpacity1, a._opacityDelta2 = a._finalOpacity2 - a._initialOpacity2, a._currentOpacity1 =
                    a._initialOpacity1, a._currentOpacity2 = a._initialOpacity2, a
            }
            return Object(a.a)(i, [{
                key: "updateValues",
                value: function() {
                    var t = this._easing(this._progress);
                    this._currentOpacity1 = this._initialOpacity1 + this._opacityDelta1 * t, this._currentOpacity2 = this._initialOpacity2 + this._opacityDelta2 * t
                }
            }, {
                key: "clean",
                value: function() {
                    this._panel[0].style.opacity = "", this._nextPanel[0].style.opacity = ""
                }
            }, {
                key: "render",
                value: function() {
                    this._panel[0].style.opacity = this._currentOpacity1, this._nextPanel[0].style.opacity =
                        this._currentOpacity2
                }
            }]), i
        }(i(1344).a)
    },
    3393: function(t, e, i) {
        i.d(e, "a", function() {
            return c
        });
        var n = i(0),
            a = i(1),
            r = i(3),
            s = i(4),
            o = i(2),
            l = i(30),
            u = i(43);

        function h(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, n = Object(o.a)(t);
                if (e) {
                    var a = Object(o.a)(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return Object(s.a)(this, i)
            }
        }
        var c = function(t) {
            Object(r.a)(i, t);
            var e = h(i);

            function i(t) {
                var a;
                return Object(n.a)(this, i), (a = e.call(this, t))._parts = {
                    x: 5,
                    y: 3
                }, a._distance = i.DEFAULT_DISTANCE, a._initDomObjects(), a
            }
            return Object(a.a)(i, [{
                key: "_initDomObjects",
                value: function() {
                    for (var t, e, n = [], a = new u.a({
                            width: Math.floor(this._panelSize.width / this._parts.x),
                            height: Math.floor(this._panelSize.height / this._parts.y)
                        }), r = 0; r < this._parts.x; r++) {
                        var s = [];
                        n.push(s);
                        for (var o = 0; o < this._parts.y; o++) {
                            t = r * a.width, e = o * a.height;
                            var h = i.createPartialPanel({
                                    width: a.width,
                                    height: a.height,
                                    x: t,
                                    y: e,
                                    panel: this._panel
                                }),
                                c = i.createPartialPanel({
                                    width: a.width,
                                    height: a.height,
                                    x: t,
                                    y: e,
                                    panel: this._nextPanel
                                });
                            s.push({
                                dom1: h,
                                dom2: c,
                                currentPos1: new l.a(0, 0),
                                currentPos2: new l.a(0, 0),
                                moveVector: i.generateRandomVector(),
                                opacity1: 1,
                                opacity2: 0
                            }), this._$panelParent.append(h), this._$panelParent.append(c)
                        }
                    }
                    this._partialPanels = n, this._panel[0].style.display = "none", this._nextPanel[0].style.display =
                        "none"
                }
            }, {
                key: "updateValues",
                value: function() {
                    for (var t, e = this._partialPanels, i = this._easing(this._progress), n = 0; n < e.length; n++)
                        for (var a = 0; a < e[n].length; a++)(t = e[n][a]).currentPos1.x = t.moveVector.x * this._distance * i, t.currentPos1.y = t.moveVector.y * this._distance * i, t.opacity1 = 1 - i, t.currentPos2.x = t.moveVector.x * this._distance * (1 - i), t.currentPos2.y = t.moveVector.y * this._distance * (1 - i), t.opacity2 = i
                }
            }, {
                key: "clean",
                value: function() {
                    this._panel[0].style.display = "", this._nextPanel[0].style.display = "";
                    for (var t =
                            this._partialPanels, e = 0; e < t.length; e++)
                        for (var i = 0; i < t[e].length; i++) t[e][i].dom1.remove(), t[e][i].dom2.remove()
                }
            }, {
                key: "render",
                value: function() {
                    for (var t, e = this._partialPanels, i = 0; i < e.length; i++)
                        for (var n = 0; n < e[i].length; n++)(t = e[i][n]).dom1[0].style.transform = "translate3D(" + t.currentPos1.x + "px, " + t.currentPos1.y + "px, 0)", t.dom1[0].style.opacity = t.opacity1, t.dom2[0].style.transform = "translate3D(" + t.currentPos2.x + "px, " + t.currentPos2.y + "px, 0)", t.dom2[0].style.opacity = t.opacity2
                }
            }], [{
                key: "createPartialPanel",
                value: function(t) {
                    var e = $('<div class="gv_partialPanel" style="width: ' + t.width + "px;height: " + t.height + "px;left: " + t.x + "px;top: " + t.y + 'px;position: absolute;overflow: hidden;opacity: 1;"></div>'),
                        i = t.panel.clone();
                    return i[0].style.left = -t.x + "px", i[0].style.top = -t.y + "px", i[0].style.position = "absolute", e.append(i), e
                }
            }, {
                key: "generateRandomVector",
                value: function() {
                    return new l.a(2 * Math.random() - 1, 2 * Math.random() - 1)
                }
            }]), i
        }(i(1344).a);
        c.DEFAULT_DISTANCE = 200
    },
    3394: function(t, e, i) {
        i.d(e, "a", function() {
            return u
        });
        var n = i(0),
            a = i(1),
            r = i(3),
            s = i(4),
            o = i(2);

        function l(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, n = Object(o.a)(t);
                if (e) {
                    var a = Object(o.a)(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return Object(s.a)(this, i)
            }
        }
        var u = function(t) {
            Object(r.a)(i,
                t);
            var e = l(i);

            function i(t) {
                var a;
                return Object(n.a)(this, i), (a = e.call(this, t))._initialOpacity1 = 1, a._initialOpacity2 = 0, a._finalOpacity1 = 0, a._finalOpacity2 = 1, a._opacityDelta1 = a._finalOpacity1 - a._initialOpacity1, a._opacityDelta2 = a._finalOpacity2 - a._initialOpacity2, a._currentOpacity1 = a._initialOpacity1, a._currentOpacity2 = a._initialOpacity2, a
            }
            return Object(a.a)(i, [{
                key: "updateValues",
                value: function() {
                    var t = this._easing(this._progress);
                    this._currentOpacity1 = this._initialOpacity1 + this._opacityDelta1 * t,
                        this._currentOpacity2 = this._initialOpacity2 + this._opacityDelta2 * t
                }
            }, {
                key: "clean",
                value: function() {
                    this._panel[0].style.opacity = "", this._nextPanel[0].style.opacity = ""
                }
            }, {
                key: "render",
                value: function() {
                    this._panel[0].style.opacity = 2 * this._currentOpacity1 - 1, this._nextPanel[0].style.opacity = 2 * this._currentOpacity2 - 1
                }
            }]), i
        }(i(1344).a)
    },
    3395: function(t, e, i) {
        i.d(e, "a", function() {
            return u
        });
        var n = i(0),
            a = i(1),
            r = i(3),
            s = i(4),
            o = i(2);

        function l(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, n = Object(o.a)(t);
                if (e) {
                    var a = Object(o.a)(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return Object(s.a)(this, i)
            }
        }
        var u = function(t) {
            Object(r.a)(i, t);
            var e = l(i);

            function i(t) {
                var a;
                return Object(n.a)(this, i), (a = e.call(this, t))._initialOpacity = 0, a._finalOpacity =
                    1, a._opacityDelta = a._finalOpacity - a._initialOpacity, a._currentOpacity = a._initialOpacity, a
            }
            return Object(a.a)(i, [{
                key: "updateValues",
                value: function() {
                    var t = this._easing(this._progress);
                    this._currentOpacity = this._initialOpacity + this._opacityDelta * t
                }
            }, {
                key: "clean",
                value: function() {
                    this._nextPanel[0].style.opacity = ""
                }
            }, {
                key: "render",
                value: function() {
                    this._nextPanel[0].style.opacity = this._currentOpacity
                }
            }]), i
        }(i(1344).a)
    },
    3396: function(t, e, i) {
        i.d(e, "a", function() {
            return p
        });
        var n = i(0),
            a = i(1),
            r = i(17),
            s =
            i(3),
            o = i(4),
            l = i(2),
            u = i(1344),
            h = i(956);

        function c(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, n = Object(l.a)(t);
                if (e) {
                    var a = Object(l.a)(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return Object(o.a)(this, i)
            }
        }
        var p = function(t) {
            Object(s.a)(i,
                t);
            var e = c(i);

            function i(t) {
                var a;
                switch (Object(n.a)(this, i), (a = e.call(this, t))._direction) {
                    case h.a.LEFT:
                        a._startX1 = 0, a._finalX1 = -a._panelSize.width, a._startX2 = a._panelSize.width, a._finalX2 = 0, a._startY1 = 0, a._finalY1 = 0, a._startY2 = 0, a._finalY2 = 0;
                        break;
                    case h.a.TOP:
                        a._startX1 = 0, a._finalX1 = 0, a._startX2 = 0, a._finalX2 = 0, a._startY1 = 0, a._finalY1 = -a._panelSize.height, a._startY2 = a._panelSize.height, a._finalY2 = 0;
                        break;
                    case h.a.BOTTOM:
                        a._startX1 = 0, a._finalX1 = 0, a._startX2 = 0, a._finalX2 = 0, a._startY1 = 0, a._finalY1 =
                            a._panelSize.height, a._startY2 = -a._panelSize.height, a._finalY2 = 0;
                        break;
                    default:
                        a._startX1 = 0, a._finalX1 = a._panelSize.width, a._startX2 = -a._panelSize.width, a._finalX2 = 0, a._startY1 = 0, a._finalY1 = 0, a._startY2 = 0, a._finalY2 = 0
                }
                return a._currX1 = a._startX1, a._X1Delta = a._finalX1 - a._startX1, a._currY1 = a._startY1, a._Y1Delta = a._finalY1 - a._startY1, a._currX2 = a._startX2, a._X2Delta = a._finalX2 - a._startX2, a._currY2 = a._startY2, a._Y2Delta = a._finalY2 - a._startY2, a
            }
            return Object(a.a)(i, [{
                key: "updateValues",
                value: function() {
                    var t =
                        this._easing(this._progress);
                    this._currX1 = this._startX1 + this._X1Delta * t, this._currX2 = this._startX2 + this._X2Delta * t, this._currY1 = this._startY1 + this._Y1Delta * t, this._currY2 = this._startY2 + this._Y2Delta * t
                }
            }, {
                key: "setDirection",
                value: function(t) {
                    Object(r.a)(Object(l.a)(i.prototype), "setDirection", this).call(this, t), this._startX1 = -this._startX1, this._finalX1 = -this._finalX1, this._startY1 = -this._startY1, this._finalY1 = -this._finalY1, this._startX2 = -this._startX2, this._finalX2 = -this._finalX2, this._startY2 = -this._startY2,
                        this._finalY2 = -this._finalY2, this._X1Delta = this._finalX1 - this._startX1, this._X2Delta = this._finalX2 - this._startX2, this._Y1Delta = this._finalY1 - this._startY1, this._Y2Delta = this._finalY2 - this._startY2
                }
            }, {
                key: "clean",
                value: function() {
                    this._panel[0].style.transform = "", this._nextPanel[0].style.transform = ""
                }
            }, {
                key: "render",
                value: function() {
                    this._panel[0].style.transform = "translate3d(" + this._currX1 + "px, " + this._currY1 + "px, 0px)", this._nextPanel[0].style.transform = "translate3d(" + this._currX2 + "px, " + this._currY2 +
                        "px, 0px)"
                }
            }]), i
        }(u.a)
    },
    3397: function(t, e, i) {
        i.d(e, "a", function() {
            return h
        });
        var n = i(0),
            a = i(1),
            r = i(3),
            s = i(4),
            o = i(2),
            l = i(747);

        function u(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, n = Object(o.a)(t);
                if (e) {
                    var a = Object(o.a)(this).constructor;
                    i = Reflect.construct(n,
                        arguments, a)
                } else i = n.apply(this, arguments);
                return Object(s.a)(this, i)
            }
        }
        var h = function(t) {
            Object(r.a)(i, t);
            var e = u(i);

            function i(t) {
                var a;
                return Object(n.a)(this, i), (a = e.call(this, t))._initialOpacity1 = 1, a._initialOpacity2 = 0, a._finalOpacity1 = 0, a._finalOpacity2 = 1, a._opacityDelta1 = a._finalOpacity1 - a._initialOpacity1, a._opacityDelta2 = a._finalOpacity2 - a._initialOpacity2, a._currentOpacity1 = a._initialOpacity1, a._currentOpacity2 = a._initialOpacity2, a._direction === l.a.RIGHT ? (a._initialRotate1 = 0, a._initialRotate2 =
                    180, a._finalRotate1 = 180, a._finalRotate2 = 360) : a._direction === l.a.LEFT && (a._initialRotate1 = 360, a._initialRotate2 = 180, a._finalRotate1 = 180, a._finalRotate2 = 0), a._rotateDelta1 = a._finalRotate1 - a._initialRotate1, a._rotateDelta2 = a._finalRotate2 - a._initialRotate2, a._currentRotate1 = a._initialRotate1, a._currentRotate2 = a._initialRotate2, a
            }
            return Object(a.a)(i, [{
                key: "updateValues",
                value: function() {
                    var t = this._easing(this._progress);
                    this._currentOpacity1 = this._initialOpacity1 + this._opacityDelta1 * t, this._currentOpacity2 =
                        this._initialOpacity2 + this._opacityDelta2 * t, this._currentRotate1 = this._initialRotate1 + this._rotateDelta1 * t, this._currentRotate2 = this._initialRotate2 + this._rotateDelta2 * t
                }
            }, {
                key: "clean",
                value: function() {
                    this._panel[0].style.opacity = "", this._nextPanel[0].style.opacity = "", this._panel[0].style.transform = "", this._nextPanel[0].style.transform = ""
                }
            }, {
                key: "render",
                value: function() {
                    this._panel[0].style.opacity = this._currentOpacity1, this._panel[0].style.transform = "rotate(".concat(this._currentRotate1, "deg)"),
                        this._nextPanel[0].style.opacity = this._currentOpacity2, this._nextPanel[0].style.transform = "rotate(".concat(this._currentRotate2, "deg)")
                }
            }]), i
        }(i(1344).a)
    },
    3398: function(t, e, i) {
        i.d(e, "a", function() {
            return r
        });
        var n = i(0),
            a = i(1),
            r = function() {
                function t(e, i) {
                    Object(n.a)(this, t), this._scaleX = e, this._scaleY = i
                }
                return Object(a.a)(t, [{
                    key: "getScaleX",
                    value: function() {
                        return this._scaleX
                    }
                }, {
                    key: "getScaleY",
                    value: function() {
                        return this._scaleY
                    }
                }]), t
            }()
    },
    3399: function(t, e, i) {
        i.d(e, "a", function() {
            return r
        });
        var n =
            i(0),
            a = i(1),
            r = function() {
                function t(e) {
                    Object(n.a)(this, t), this._offset = e.offset, this._size = e.size
                }
                return Object(a.a)(t, [{
                    key: "getOffset",
                    value: function() {
                        return this._offset
                    }
                }, {
                    key: "getSize",
                    value: function() {
                        return this._size
                    }
                }]), t
            }()
    },
    3400: function(t, e, i) {
        i.d(e, "a", function() {
            return c
        });
        var n = i(0),
            a = i(1),
            r = i(3),
            s = i(4),
            o = i(2),
            l = i(800),
            u = i(1018);

        function h(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, n = Object(o.a)(t);
                if (e) {
                    var a = Object(o.a)(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return Object(s.a)(this, i)
            }
        }
        var c = function(t) {
            Object(r.a)(i, t);
            var e = h(i);

            function i(t) {
                var a;
                if (Object(n.a)(this, i), webwave.isNotDef(t) || webwave.isNotDef(t.animation)) throw new Error("No animation specified!");
                return (a = e.call(this, t))._progress =
                    0, a._animation = t.animation, a
            }
            return Object(a.a)(i, [{
                key: "tick",
                value: function() {
                    this._animation.render()
                }
            }, {
                key: "getDuration",
                value: function() {
                    return 1 / 0
                }
            }, {
                key: "setProgress",
                value: function(t) {
                    t = Math.max(t, 0), t = Math.min(t, 1), this._progress = t, this._animation.setCurrentTime(t * this._animation.getDuration()), this._animation.updateValues()
                }
            }, {
                key: "createFinishAnimation",
                value: function(t) {
                    return new u.a({
                        animation: this._animation,
                        direction: "forward",
                        onComplete: t
                    })
                }
            }, {
                key: "createRevertAnimation",
                value: function(t) {
                    return new u.a({
                        animation: this._animation,
                        direction: "backward",
                        onComplete: t
                    })
                }
            }, {
                key: "finish",
                value: function(t) {
                    this._animation.stop(t)
                }
            }]), i
        }(l.a)
    },
    3548: function(t, e, i) {
        i.d(e, "a", function() {
            return r
        });
        var n = i(0),
            a = i(1),
            r = function() {
                function t(e, i, a) {
                    Object(n.a)(this, t), this.y = 0, this.x = 0, this.z = 0, webwave.isNumberAndNotNaN(e) ? (this.x = e, webwave.isNumberAndNotNaN(i) && (this.y = i), webwave.isNumberAndNotNaN(a) && (this.z = a)) : webwave.isDef(e) && (webwave.isNumberAndNotNaN(e.x) && (this.x = e.x), webwave.isNumberAndNotNaN(e.y) && (this.y = e.y), webwave.isNumberAndNotNaN(e.z) &&
                        (this.z = e.z))
                }
                return Object(a.a)(t, [{
                    key: "subtract",
                    value: function(t) {
                        this.x -= t.x, this.y -= t.y, this.z -= t.z
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        return {
                            x: this.x,
                            y: this.y,
                            z: this.z
                        }
                    }
                }, {
                    key: "getX",
                    value: function() {
                        return this.x
                    }
                }, {
                    key: "getY",
                    value: function() {
                        return this.y
                    }
                }, {
                    key: "getZ",
                    value: function() {
                        return this.z
                    }
                }]), t
            }()
    },
    3676: function(t, e, i) {
        i(3386), i(3677), i(3683)
    },
    3677: function(t, e, i) {
        var n = i(0),
            a = i(1),
            r = i(3387),
            s = i(3392),
            o = i(3678),
            l = i(3393),
            u = i(3394),
            h = i(3395),
            c = i(3679),
            p = i(3396),
            d = i(3397),
            f = i(3680),
            g = i(3681),
            m = i(3682),
            v = [u.a, h.a, s.a, p.a, l.a, m.a, g.a, f.a],
            _ = function() {
                function t() {
                    Object(n.a)(this, t)
                }
                return Object(a.a)(t, [{
                    key: "createAnimationByName",
                    value: function(t, e) {
                        switch (t) {
                            case "slide":
                                return new p.a(e);
                            case "crossfade":
                                return new s.a(e);
                            case "spinfade":
                                return new d.a(e);
                            case "cube":
                                return new o.a(e);
                            case "open":
                                return new c.a(e);
                            case "fade":
                                return new u.a(e);
                            case "fadeInOver":
                                return new h.a(e);
                            case "explosion":
                                return new l.a(e);
                            case "squareVortex":
                                return new m.a(e);
                            case "squareShutter":
                                return new g.a(e);
                            case "squareFall":
                                return new f.a(e);
                            case "advancedFadeAnimation":
                                return new r.a(e);
                            case "random":
                                return new(0, v[parseInt(Math.random() * v.length)])(e);
                            default:
                                return new p.a(e)
                        }
                    }
                }], [{
                    key: "getInstance",
                    value: function() {
                        return webwave.isNotDef(t.__instance) && (t.__instance = new t), t.__instance
                    }
                }]), t
            }();
        webwave.provide("com.webwave.webgal.animation.ChangeAnimationService"), com.webwave.webgal.animation.ChangeAnimationService = _
    },
    3678: function(t, e, i) {
        i.d(e, "a", function() {
            return c
        });
        var n = i(0),
            a = i(1),
            r = i(3),
            s = i(4),
            o = i(2),
            l = i(1344),
            u = i(956);

        function h(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, n = Object(o.a)(t);
                if (e) {
                    var a = Object(o.a)(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return Object(s.a)(this, i)
            }
        }
        var c = function(t) {
            Object(r.a)(i,
                t);
            var e = h(i);

            function i(t) {
                var a;
                switch (Object(n.a)(this, i), (a = e.call(this, t))._direction) {
                    case u.a.LEFT:
                        a._panel[0].style.transformOrigin = a._panelSize.width / 2 + "px 0 " + -a._panelSize.width / 2 + "px", a._nextPanel[0].style.transformOrigin = a._panelSize.width / 2 + "px 0 " + -a._panelSize.width / 2 + "px", a._startDeg1 = 0, a._finalDeg1 = -90, a._startDeg2 = 90, a._finalDeg2 = 0;
                        break;
                    case u.a.TOP:
                        a._panel[0].style.transformOrigin = "0 " + a._panelSize.height / 2 + "px " + -a._panelSize.height / 2 + "px", a._nextPanel[0].style.transformOrigin =
                            "0 " + a._panelSize.height / 2 + "px " + -a._panelSize.height / 2 + "px", a._startDeg1 = 0, a._finalDeg1 = 90, a._startDeg2 = -90, a._finalDeg2 = 0;
                        break;
                    case u.a.BOTTOM:
                        a._panel[0].style.transformOrigin = "0 " + a._panelSize.height / 2 + "px " + -a._panelSize.height / 2 + "px", a._nextPanel[0].style.transformOrigin = "0 " + a._panelSize.height / 2 + "px " + -a._panelSize.height / 2 + "px", a._startDeg1 = 0, a._finalDeg1 = -90, a._startDeg2 = 90, a._finalDeg2 = 0;
                        break;
                    default:
                        a._panel[0].style.transformOrigin = a._panelSize.width / 2 + "px 0 " + -a._panelSize.width / 2 +
                            "px", a._nextPanel[0].style.transformOrigin = a._panelSize.width / 2 + "px 0 " + -a._panelSize.width / 2 + "px", a._startDeg1 = 0, a._finalDeg1 = 90, a._startDeg2 = -90, a._finalDeg2 = 0
                }
                return a._currDeg1 = a._startDeg1, a._deg1Delta = a._finalDeg1 - a._startDeg1, a._currDeg2 = a._startDeg2, a._deg2Delta = a._finalDeg2 - a._startDeg2, a._panel.parent()[0].style.perspective = "3000px", a._panel.parent()[0].style.overflow = "visible", a._$panelParent[0].style.transformStyle = "preserve-3d", a._panel[0].style.backfaceVisibility = "hidden", a._nextPanel[0].style.backfaceVisibility =
                    "hidden", a
            }
            return Object(a.a)(i, [{
                key: "updateValues",
                value: function() {
                    var t = this._easing(this._progress);
                    this._currDeg1 = this._startDeg1 + this._deg1Delta * t, this._currDeg2 = this._startDeg2 + this._deg2Delta * t
                }
            }, {
                key: "clean",
                value: function() {
                    this._panel[0].style.transformOrigin = "", this._nextPanel[0].style.transformOrigin = "", this._panel[0].style.transform = "", this._nextPanel[0].style.transform = "", this._panel[0].style.backfaceVisibility = "", this._nextPanel[0].style.backfaceVisibility = ""
                }
            }, {
                key: "render",
                value: function() {
                    this._direction ===
                        u.a.TOP || this._direction === u.a.BOTTOM ? (this._panel[0].style.transform = "rotate3d( 1, 0, 0, " + this._currDeg1 + "deg)", this._nextPanel[0].style.transform = "rotate3d( 1, 0, 0, " + this._currDeg2 + "deg)") : (this._panel[0].style.transform = "rotate3d( 0, 1, 0, " + this._currDeg1 + "deg)", this._nextPanel[0].style.transform = "rotate3d( 0, 1, 0, " + this._currDeg2 + "deg)")
                }
            }]), i
        }(l.a)
    },
    3679: function(t, e, i) {
        i.d(e, "a", function() {
            return g
        });
        var n = i(3),
            a = i(4),
            r = i(2),
            s = i(0),
            o = i(1),
            l = i(43),
            u = i(3548),
            h = i(1344),
            c = i(956);

        function p(t) {
            var e =
                function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
            return function() {
                var i, n = Object(r.a)(t);
                if (e) {
                    var s = Object(r.a)(this).constructor;
                    i = Reflect.construct(n, arguments, s)
                } else i = n.apply(this, arguments);
                return Object(a.a)(this, i)
            }
        }
        var d = {
                VERTICAL: "vertical",
                HORIZONTAL: "horizontal"
            },
            f = function() {
                function t(e) {
                    Object(s.a)(this,
                        t), this.start = new u.a(e.start), this.end = new u.a(e.end), this.delta = new u.a({
                        x: this.end.x - this.start.x,
                        y: this.end.y - this.start.y,
                        z: this.end.z - this.start.z
                    }), this.current = new u.a(e.start)
                }
                return Object(o.a)(t, [{
                    key: "updateByProgress",
                    value: function(t) {
                        this.current.x = this.start.x + this.delta.x * t, this.current.y = this.start.y + this.delta.y * t, this.current.z = this.start.z + this.delta.z * t
                    }
                }]), t
            }(),
            g = function(t) {
                Object(n.a)(i, t);
                var e = p(i);

                function i(t) {
                    var n;
                    return Object(s.a)(this, i), (n = e.call(this, t))._orientation =
                        n._direction == c.a.TOP || n._direction === c.a.BOTTOM ? "horizontal" : "vertical", n._verticalPanelsCount = n._orientation === d.VERTICAL ? 2 : 1, n._horizontalPanelsCount = n._orientation === d.HORIZONTAL ? 2 : 1, n._singlePartSize = new l.a({
                            width: Math.floor(n._panelSize.width / n._verticalPanelsCount),
                            height: Math.floor(n._panelSize.height / n._horizontalPanelsCount)
                        }), n._initDomObjects(), n
                }
                return Object(o.a)(i, [{
                    key: "_initDomObjects",
                    value: function() {
                        var t = [],
                            e = this._singlePartSize,
                            n = this._generateMoveVectors(),
                            a = this._direction ===
                            c.a.RIGHT || this._direction === c.a.BOTTOM ? this._nextPanel : this._panel,
                            r = this._direction === c.a.RIGHT || this._direction === c.a.BOTTOM ? this._panel : this._nextPanel;
                        this._partialPanel2 = i.createPartialPanel({
                            x: 0,
                            y: 0,
                            width: this._panelSize.width,
                            height: this._panelSize.height,
                            panel: r
                        });
                        var s = this._direction === c.a.RIGHT || this._direction === c.a.BOTTOM ? 0 : -0,
                            o = this._direction === c.a.RIGHT || this._direction === c.a.BOTTOM ? -0 : 0;
                        this._partialPanel2.moveData = new f({
                            start: {
                                x: 0,
                                y: 0,
                                z: s
                            },
                            end: {
                                x: 0,
                                y: 0,
                                z: o
                            }
                        }), this._$panelParent.append(this._partialPanel2.$panel);
                        for (var l = 0; l < 2; l++) {
                            var h = "vertical" === this._orientation ? l * e.width : 0,
                                p = "horizontal" === this._orientation ? l * e.height : 0,
                                d = i.createPartialPanel({
                                    width: e.width,
                                    height: e.height,
                                    x: h,
                                    y: p,
                                    panel: a
                                });
                            t.push({
                                $panel: d.$panel,
                                $content: d.$content,
                                moveVector: n[l],
                                currentPos: new u.a
                            }), this._$panelParent.append(d.$panel)
                        }
                        this._partialPanels = t, this._panel[0].style.display = "none", this._nextPanel[0].style.display = "none"
                    }
                }, {
                    key: "updateValues",
                    value: function() {
                        var t, e = this._partialPanels,
                            i = this._easing(this._progress);
                        this._partialPanel2.moveData.updateByProgress(i);
                        for (var n = 0; n < e.length; n++)(t = e[n]).moveVector.updateByProgress(i), t.currentPos.x = t.moveVector.current.x * this._singlePartSize.width, t.currentPos.y = t.moveVector.current.y * this._singlePartSize.height
                    }
                }, {
                    key: "clean",
                    value: function() {
                        this._panel[0].style.display = "", this._nextPanel[0].style.display = "";
                        for (var t = this._partialPanels, e = 0; e < t.length; e++)
                            for (var i = 0; i < t[e].length; i++) t[e][i].$panel.remove();
                        this._partialPanel2.$panel.remove()
                    }
                }, {
                    key: "render",
                    value: function() {
                        for (var t, e = this._partialPanels, i = 0; i < e.length; i++)(t = e[i]).$content[0].style.transform = "translate3D(" + t.currentPos.x + "px, " + t.currentPos.y + "px, 0)";
                        this._partialPanel2.$content[0].style.transform = "perspective(100px) translate3d(0, 0, " + this._partialPanel2.moveData.current.z + "px)"
                    }
                }, {
                    key: "_generateMoveVectors",
                    value: function() {
                        switch (this._direction) {
                            case c.a.LEFT:
                                return [new f({
                                    start: {
                                        x: 0,
                                        y: 0,
                                        z: 0
                                    },
                                    end: {
                                        x: -1,
                                        y: 0,
                                        z: 0
                                    }
                                }), new f({
                                    start: {
                                        x: 0,
                                        y: 0,
                                        z: 0
                                    },
                                    end: {
                                        x: 1,
                                        y: 0,
                                        z: 0
                                    }
                                })];
                            case c.a.TOP:
                                return [new f({
                                    start: {
                                        x: 0,
                                        y: 0,
                                        z: 0
                                    },
                                    end: {
                                        x: 0,
                                        y: -1,
                                        z: 0
                                    }
                                }), new f({
                                    start: {
                                        x: 0,
                                        y: 0,
                                        z: 0
                                    },
                                    end: {
                                        x: 0,
                                        y: 1,
                                        z: 0
                                    }
                                })];
                            case c.a.BOTTOM:
                                return [new f({
                                    start: {
                                        x: 0,
                                        y: -1,
                                        z: 0
                                    },
                                    end: {
                                        x: 0,
                                        y: 0,
                                        z: 0
                                    }
                                }), new f({
                                    start: {
                                        x: 0,
                                        y: 1,
                                        z: 0
                                    },
                                    end: {
                                        x: 0,
                                        y: 0,
                                        z: 0
                                    }
                                })];
                            default:
                                return [new f({
                                    start: {
                                        x: -1,
                                        y: 0,
                                        z: 0
                                    },
                                    end: {
                                        x: 0,
                                        y: 0,
                                        z: 0
                                    }
                                }), new f({
                                    start: {
                                        x: 1,
                                        y: 0,
                                        z: 0
                                    },
                                    end: {
                                        x: 0,
                                        y: 0,
                                        z: 0
                                    }
                                })]
                        }
                    }
                }], [{
                    key: "createPartialPanel",
                    value: function(t) {
                        var e = $('<div  style="width: ' + t.width + "px;height: " + t.height + "px;left: " + t.x + "px;top: " + t.y + 'px;position: absolute;overflow: hidden;"></div>'),
                            i = e.clone();
                        i[0].style.left = "0", i[0].style.top = "0";
                        var n = t.panel.clone();
                        return n[0].style.left = -t.x + "px", n[0].style.top = -t.y + "px", n[0].style.position = "absolute", i.append(n), e.append(i), {
                            $panel: e,
                            $content: i
                        }
                    }
                }]), i
            }(h.a)
    },
    3680: function(t, e, i) {
        i.d(e, "a", function() {
            return c
        });
        var n = i(0),
            a = i(1),
            r = i(3),
            s = i(4),
            o = i(2);

        function l(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, n = Object(o.a)(t);
                if (e) {
                    var a = Object(o.a)(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return Object(s.a)(this, i)
            }
        }
        var u = [
                [{
                    x: 0,
                    y: -1,
                    s: 0
                }, {
                    x: 0,
                    y: -1,
                    s: .15
                }],
                [{
                    x: 0,
                    y: -1,
                    s: .3
                }, {
                    x: 0,
                    y: -1,
                    s: .45
                }]
            ],
            h = [
                [{
                    x: 0,
                    y: 1,
                    s: .1
                }, {
                    x: 0,
                    y: 1,
                    s: .15
                }],
                [{
                    x: 0,
                    y: 1,
                    s: .3
                }, {
                    x: 0,
                    y: 1,
                    s: .45
                }]
            ],
            c = function(t) {
                Object(r.a)(i, t);
                var e = l(i);

                function i(t) {
                    return Object(n.a)(this, i), e.call(this, t)
                }
                return Object(a.a)(i, [{
                    key: "getForwardVector",
                    value: function() {
                        return h
                    }
                }, {
                    key: "getBackwardVector",
                    value: function() {
                        return u
                    }
                }, {
                    key: "getMaxDelay",
                    value: function() {
                        return .45
                    }
                }, {
                    key: "getInitialNextPanelZIndex",
                    value: function() {
                        return 16
                    }
                }]), i
            }(i(2400).a)
    },
    3681: function(t, e, i) {
        i.d(e, "a", function() {
            return c
        });
        var n = i(0),
            a = i(1),
            r = i(3),
            s = i(4),
            o = i(2);

        function l(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, n = Object(o.a)(t);
                if (e) {
                    var a = Object(o.a)(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return Object(s.a)(this, i)
            }
        }
        var u = [
                [{
                    x: 0,
                    y: -1,
                    s: 0
                }, {
                    x: 0,
                    y: -1,
                    s: .15
                }],
                [{
                    x: 0,
                    y: 1,
                    s: .3
                }, {
                    x: 0,
                    y: 1,
                    s: .45
                }]
            ],
            h = [
                [{
                    x: -1,
                    y: 0,
                    s: 0
                }, {
                    x: 1,
                    y: 0,
                    s: .15
                }],
                [{
                    x: -1,
                    y: 0,
                    s: .3
                }, {
                    x: 1,
                    y: 0,
                    s: .45
                }]
            ],
            c = function(t) {
                Object(r.a)(i, t);
                var e = l(i);

                function i(t) {
                    return Object(n.a)(this, i), e.call(this, t)
                }
                return Object(a.a)(i, [{
                    key: "getForwardVector",
                    value: function() {
                        return h
                    }
                }, {
                    key: "getBackwardVector",
                    value: function() {
                        return u
                    }
                }, {
                    key: "getMaxDelay",
                    value: function() {
                        return .45
                    }
                }, {
                    key: "getInitialNextPanelZIndex",
                    value: function() {
                        return 16
                    }
                }]), i
            }(i(2400).a)
    },
    3682: function(t, e, i) {
        i.d(e, "a", function() {
            return c
        });
        var n = i(0),
            a = i(1),
            r = i(3),
            s = i(4),
            o = i(2);

        function l(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, n = Object(o.a)(t);
                if (e) {
                    var a = Object(o.a)(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return Object(s.a)(this, i)
            }
        }
        var u = [
                [{
                    x: 1,
                    y: 0,
                    s: 0
                }, {
                    x: 0,
                    y: 1,
                    s: 0
                }],
                [{
                    x: 0,
                    y: -1,
                    s: 0
                }, {
                    x: -1,
                    y: 0,
                    s: 0
                }]
            ],
            h = [
                [{
                    x: 0,
                    y: 1,
                    s: 0
                }, {
                    x: -1,
                    y: 0,
                    s: 0
                }],
                [{
                    x: 1,
                    y: 0,
                    s: 0
                }, {
                    x: 0,
                    y: -1,
                    s: 0
                }]
            ],
            c = function(t) {
                Object(r.a)(i, t);
                var e = l(i);

                function i(t) {
                    return Object(n.a)(this, i), e.call(this, t)
                }
                return Object(a.a)(i, [{
                        key: "getForwardVector",
                        value: function() {
                            return h
                        }
                    },
                    {
                        key: "getBackwardVector",
                        value: function() {
                            return u
                        }
                    }, {
                        key: "getMaxDelay",
                        value: function() {
                            return 0
                        }
                    }, {
                        key: "getInitialNextPanelZIndex",
                        value: function() {
                            return 0
                        }
                    }
                ]), i
            }(i(2400).a)
    },
    3683: function(t, e, i) {
        var n = i(956),
            a = i(190),
            r = i(2354),
            s = i(3684),
            o = i(91),
            l = i(1026),
            u = i(2587),
            h = i(3400),
            c = i(90),
            p = i(43),
            d = i(3685);

        function f(t, e) {
            var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!i) {
                if (Array.isArray(t) || (i = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return g(t, e);
                        var i = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === i && t.constructor && (i = t.constructor.name);
                        if ("Map" === i || "Set" === i) return Array.from(t);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return g(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    i && (t = i);
                    var n = 0,
                        a = function() {};
                    return {
                        s: a,
                        n: function() {
                            return n >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[n++]
                            }
                        },
                        e: function(t) {
                            throw t;
                        },
                        f: a
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var r, s = !0,
                o = !1;
            return {
                s: function() {
                    i = i.call(t)
                },
                n: function() {
                    var t = i.next();
                    return s = t.done, t
                },
                e: function(t) {
                    o = !0, r = t
                },
                f: function() {
                    try {
                        s || null == i.return || i.return()
                    } finally {
                        if (o) throw r;
                    }
                }
            }
        }

        function g(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
        }! function() {
            webwave.provide("com.webwave.webgal.GalleryView");
            var t = com.webwave.ui.swipeable.Swipeable,
                e = com.webwave.webgal.animation.ChangeAnimationService.getInstance(),
                i = "next",
                g = "prev",
                m = "frame",
                v = function(t) {
                    return webwave.isNotDef(t) &&
                        (t = {}), this.imageUrl = t.imageUrl, this.thumbnailUrl = webwave.isString(t.thumbnailUrl) ? t.thumbnailUrl : this.imageUrl, this.scale = {
                            panel: null,
                            frame: null
                        }, this.width = t.width, this.height = t.height, this.thumbnailWidth = t.thumbnailWidth ? t.thumbnailWidth : t.width, this.thumbnailHeight = t.thumbnailHeight ? t.thumbnailHeight : t.height, this.link = void 0, webwave.isDef(t.link) && (this.link = {
                            href: t.link.href,
                            target: t.link.target,
                            samepage: t.link.samepage,
                            title: t.link.title
                        }), this.attrs = {
                            title: t.title
                        }, this._panelImgRendered = !1, this._panelImgWrapper = void 0, this.imageCropData = t.imageCropData, this
                };
            v.prototype.renderPanelImg = function(t) {
                var e = this,
                    i = this._panelImgWrapper,
                    n = i.firstElementChild,
                    a = i.parentNode;
                t.dom.gv_imageStore[0].appendChild(i), n.addEventListener("load", function() {
                    a.classList.remove("gv_panel-loading");
                    var r = b(e);
                    webwave.isDefAndNotNull(r) ? (r.appendChild(i), a.appendChild(r)) : a.appendChild(i), n.style.visibility = "", t.onImageLoaded(e)
                }, {
                    once: !0
                }), n.setAttribute("src", n.getAttribute("data-src")), this._panelImgRendered = !0
            }, v.prototype.renderFilmstripImg = function(t) {}, v.prototype.isPanelImgRendered = function() {
                return this._panelImgRendered
            };
            var _ = {
                getInt: function(t) {
                    return t = parseInt(t, 10), isNaN(t) ? 0 : t
                },
                innerWidth: function(t) {
                    return this.getInt(t[0].style.width) || 0
                },
                outerWidth: function(t) {
                    return this.innerWidth(t) + this.extraWidth(t)
                },
                extraWidth: function(t) {
                    var e = window.getComputedStyle(t[0]);
                    return this.getInt(e.paddingLeft) + this.getInt(e.paddingRight) + this.getInt(e.borderLeftWidth) + this.getInt(e.borderRightWidth)
                },
                innerHeight: function(t) {
                    return this.getInt(t[0].style.height) || 0
                },
                outerHeight: function(t) {
                    return this.innerHeight(t) + this.extraHeight(t)
                },
                extraHeight: function(t) {
                    var e = window.getComputedStyle(t[0]);
                    return this.getInt(e.paddingTop) + this.getInt(e.paddingBottom) + this.getInt(e.borderTopWidth) + this.getInt(e.borderBottomWidth)
                }
            };
            com.webwave.webgal.GalleryView = function(t, e) {
                webwave.isNotDef(t) && (t = {}), this._visibleThumbnailsNumber = 1, this._isMouseOver = !1, this._navigationVisibilityType = webwave.isValidEnumValue(t.navigationVisibilityType,
                    r.a) ? t.navigationVisibilityType : r.a.HOVER, this._slideshowTimeout = void 0, this._slideshowPaused = !1, this._beingDisposed = !1, this._animator = null, this._imageLoadedListeners = [], this.init(t, e)
            };
            var y = com.webwave.webgal.GalleryView.prototype;
            y.elems = [".gv_galleryWrap", ".gv_gallery", ".gv_panelWrap", ".gv_panel", "img.gv_image", ".gv_infobar", ".gv_filmstripWrap", ".gv_filmstrip", ".gv_frame", ".gv_thumbnail", ".gv_caption", "img.gv_thumb", ".gv_navWrap", ".gv_navNext", ".gv_navPrev", ".gv_navPlay", ".gv_panelNavNext", ".gv_panelNavPrev",
                    ".gv_overlay", ".gv_showOverlay", ".gv_imageStore", ".gv_overlayHeaderWrapper", ".gv_overlayHeader", ".gv_controlsWrap"
                ], y.createElem = function(t, e) {
                    return e = document.createElement(e), $(e).attr(t)
                }, y.getPos = function(t) {
                    var e, i = this.dom,
                        n = t[0],
                        a = n.id,
                        r = 0,
                        s = 0;
                    if (!n) return {
                        top: 0,
                        left: 0
                    };
                    if (n.offsetParent) {
                        do r += n.offsetLeft, s += n.offsetTop; while (n = n.offsetParent)
                    }
                    return a === this.id ? {
                        left: r,
                        top: s
                    } : {
                        left: r - (e = this.getPos(i.galleryWrap)).left,
                        top: s - e.top
                    }
                }, y.mouseIsOverGallery = function(t, e) {
                    var i = this.dom,
                        n = this.getPos(i.gv_galleryWrap),
                        a = n.top,
                        r = n.left;
                    return t > r && t < r + _.outerWidth(i.gv_galleryWrap) && e > a && e < a + _.outerHeight(i.gv_galleryWrap)
                }, y.mouseIsOverPanel = function(t, e) {
                    var i = this.dom,
                        n = this.getPos(i.gv_panelWrap),
                        a = this.getPos(i.gv_galleryWrap),
                        r = n.top + a.top,
                        s = n.left + a.left;
                    return t > s && t < s + _.outerWidth(i.gv_panelWrap) && e > r && e < r + _.outerHeight(i.gv_panelWrap)
                }, y.storeImages = function() {
                    if (this.gvImages = [], webwave.isArrayLike(this.opts.images))
                        for (var t = this.opts.images, e = 0; e < t.length; e++) this.gvImages.push(new v(t[e]));
                    this.numImages =
                        this.gvImages.length
                }, y._renderFilmstripImage = function(t) {
                    var e = this.opts.frame_width / t.thumbnailWidth,
                        i = this.opts.frame_height / t.thumbnailHeight,
                        n = this.opts.frame_scale === a.a.CONTAIN ? Math.min(e, i) : Math.max(e, i),
                        r = Math.round(t.thumbnailWidth * n),
                        s = Math.round(t.thumbnailHeight * n),
                        l = Math.round((this.opts.frame_width - r) / 2),
                        u = Math.round((this.opts.frame_height - s) / 2),
                        h = Object(d.b)({
                            width: r,
                            height: s,
                            heightOffset: u,
                            widthOffset: l,
                            thumbnailUrl: t.thumbnailUrl,
                            altText: "bullet"
                        });
                    return o.a.htmlToElements(h)[0]
                },
                y._countImageScaleData = function(t) {
                    var e = t.imageCropData;
                    webwave.isNotDefOrNull(e) && (e = l.a.createDefaultWithCropType(t.cropType));
                    var i = u.a.calculateSizeAndOffsetForCropping({
                        elemSize: new p.a({
                            width: t.newWidth,
                            height: t.newHeight
                        }),
                        imageSize: new p.a({
                            width: t.width,
                            height: t.height
                        }),
                        imageCropData: e
                    });
                    return {
                        width: i.getSize().getWidth(),
                        height: i.getSize().getHeight(),
                        heightOffset: i.getOffset().getY(),
                        widthOffset: i.getOffset().getX()
                    }
                }, y.renderImageWrapper = function(t) {
                    var e = this._countImageScaleData({
                            width: t.width,
                            height: t.height,
                            newWidth: this.opts.panel_width,
                            newHeight: this.opts.panel_height,
                            cropType: this.opts.panel_scale,
                            imageCropData: t.imageCropData
                        }),
                        i = Object(d.c)({
                            width: e.width,
                            height: e.height,
                            heightOffset: e.heightOffset,
                            widthOffset: e.widthOffset,
                            imageUrl: t.imageUrl
                        }),
                        n = o.a.htmlToElements(i)[0];
                    return t._panelImgWrapper = n, n
                }, y.setDimensions = function() {
                    var t = this.dom,
                        e = {
                            prev: _.innerWidth(t.gv_navPrev),
                            play: _.innerWidth(t.gv_navPlay),
                            next: _.innerWidth(t.gv_navNext),
                            filmstrip: this.opts.frame_width,
                            fsMax: 0,
                            fsFull: 0
                        },
                        i = {
                            prev: _.innerHeight(t.gv_navPrev),
                            play: _.innerHeight(t.gv_navPlay),
                            next: _.innerHeight(t.gv_navNext),
                            filmstrip: this.opts.frame_height + (this.opts.show_captions ? _.outerHeight(t.gv_caption) : 0),
                            fsMax: 0,
                            fsFull: 0
                        };
                    "horizontal" === this.filmstripOrientation ? t.gv_navWrap.css({
                        width: e.prev + e.play + e.next,
                        height: Math.max(i.prev, i.play, i.next)
                    }) : "scroll" === this.opts.filmstrip_style && this.opts.frame_width < e.prev + e.play + e.next ? t.gv_navWrap.css({
                        width: Math.max(e.prev, e.play, e.next),
                        height: i.prev + i.play +
                            i.next
                    }) : t.gv_navWrap.css({
                        width: e.prev + e.play + e.next,
                        height: Math.max(i.prev, i.play, i.next)
                    }), "vertical" === this.filmstripOrientation && e.filmstrip < e.prev + e.play + e.next ? t.gv_navWrap.css({
                        width: Math.max(e.prev, e.play, e.next),
                        height: i.prev + i.play + i.next
                    }) : t.gv_navWrap.css({
                        width: e.prev + e.play + e.next,
                        height: Math.max(i.prev, i.play, i.next)
                    }), !1 === this.opts.show_filmstrip_nav && t.gv_navWrap.css({
                        width: 0,
                        height: 0
                    }), t.gv_panel.css({
                        width: this.opts.panel_width,
                        height: this.opts.panel_height
                    }), t.gv_panelWrap.css({
                        width: _.outerWidth(t.gv_panel),
                        height: _.outerHeight(t.gv_panel)
                    });
                    for (var n = 0; n < this.gvImages.length; n++) {
                        var a = t.gv_panel[0].cloneNode(!0);
                        if (!0 === this.opts.show_panels) {
                            var r = this.renderImageWrapper(this.gvImages[n]);
                            a.appendChild(r)
                        }
                        t.gv_panelWrap[0].appendChild(a)
                    }
                    if (t.gv_panels = t.gv_panelWrap.find(".gv_panel"), t.gv_panels.detach(), t.gv_thumbnail.css({
                            width: this.opts.frame_width,
                            height: this.opts.frame_height
                        }), t.gv_frame.css({
                            width: _.outerWidth(t.gv_thumbnail),
                            height: _.outerHeight(t.gv_thumbnail) + (this.opts.show_captions ? _.outerHeight(t.gv_caption) :
                                0),
                            marginRight: this.opts.frame_gap,
                            marginBottom: this.opts.frame_gap
                        }), this._updateThumbnailsPanelWidth(), this._updateGallerySize(), !0 === this.opts.show_panels) {
                        var s = t.gv_panels.eq(this.opts.start_frame - 1);
                        s.removeClass("gv_panel-loading"), t.gv_panelWrap.append(s), this.markCurrentPanel(s), "function" == typeof this.opts.onImageChanged && this.opts.onImageChanged(s)
                    }
                }, y.setPositions = function() {
                    var t, e, i = this.dom,
                        n = 0,
                        a = 0,
                        r = 0,
                        s = 0;
                    switch ("horizontal" === this.filmstripOrientation ? (t = Math.round((_.outerHeight(i.gv_filmstripWrap) -
                        _.outerHeight(i.gv_navWrap)) / 2)) < 0 ? a = -1 * t : n = t : (e = Math.round((_.outerWidth(i.gv_filmstripWrap) - _.outerWidth(i.gv_navWrap)) / 2)) < 0 ? s = -1 * e : r = e, this.opts.show_filmstrip_nav || "horizontal" !== this.filmstripOrientation || (s = Math.floor((_.outerWidth(i.gv_panelWrap) - _.outerWidth(i.gv_filmstripWrap)) / 2)), !0 === this.opts.filmstrip_on_image && ("horizontal" === this.filmstripOrientation ? (a += this.opts.filmstripEdgeDistance, n += this.opts.filmstripEdgeDistance) : (a += this.opts.filmstripEdgeDistance, s += this.opts.filmstripEdgeDistance,
                        r += this.opts.filmstripEdgeDistance)), this.opts.filmstrip_position) {
                        case "top":
                            i.gv_navWrap.css({
                                top: n,
                                right: r
                            }), i.gv_panelWrap.css({
                                bottom: 0,
                                left: 0
                            }), i.gv_filmstripWrap.css({
                                top: a,
                                left: s
                            });
                            break;
                        case "right":
                            i.gv_navWrap.css({
                                bottom: n,
                                right: r
                            }), i.gv_panelWrap.css({
                                top: 0,
                                left: 0
                            }), i.gv_filmstripWrap.css({
                                top: a,
                                right: s
                            });
                            break;
                        case "left":
                            i.gv_navWrap.css({
                                bottom: n,
                                left: r
                            }), i.gv_panelWrap.css({
                                top: 0,
                                right: 0
                            }), i.gv_filmstripWrap.css({
                                top: a,
                                left: s
                            });
                            break;
                        default:
                            i.gv_navWrap.css({
                                bottom: n,
                                right: r
                            }), i.gv_panelWrap.css({
                                top: 0,
                                left: 0
                            }), i.gv_filmstripWrap.css({
                                bottom: a,
                                left: s
                            })
                    }
                    "top" === this.opts.overlay_position ? (i.gv_overlay.css({
                        top: 0,
                        left: 0
                    }), i.gv_showOverlay.css({
                        top: 0,
                        left: 0
                    })) : (i.gv_overlay.css({
                        bottom: 0,
                        left: 0
                    }), i.gv_showOverlay.css({
                        bottom: 0,
                        left: 0
                    })), this.opts.show_filmstrip_nav || i.gv_navWrap.remove()
                }, y.buildFilmstrip = function() {
                    var t = this,
                        e = this.dom,
                        i = this.gvImages.length * (("horizontal" === this.filmstripOrientation ? this.opts.frame_width : this.opts.frame_height) + this.opts.frame_gap);
                    e.gv_frame.append(e.gv_thumbnail),
                        this.opts.show_captions && e.gv_frame.append(e.gv_caption), e.gv_thumbnail[0].style.opacity = this.opts.frame_opacity, e.gv_thumbnail.on({
                            mouseover: function() {
                                $(this).hasClass("current") || $(this).stop().animate({
                                    opacity: 1
                                }, 250)
                            },
                            mouseout: function() {
                                $(this).hasClass("current") || $(this).stop().animate({
                                    opacity: t.opts.frame_opacity
                                }, 250)
                            }
                        });
                    for (var n = 0; n < this.gvImages.length; n++) {
                        var a = e.gv_frame.clone(!0);
                        !0 === t.opts.show_panels && a.find(".gv_thumbnail")[0].appendChild(this._renderFilmstripImage(this.gvImages[n])),
                            e.gv_filmstrip.append(a)
                    }
                    var r = e.gv_filmstrip[0];
                    if (r.style.width = "".concat(_.outerWidth(e.gv_frame), "px"), r.style.height = "".concat(_.outerHeight(e.gv_frame), "px"), "scroll" === this.opts.filmstrip_style) "horizontal" === this.filmstripOrientation ? i > _.innerWidth(e.gv_filmstripWrap) ? (e.gv_filmstrip.find(".gv_frame").clone(!0).appendTo(e.gv_filmstrip).clone(!0).appendTo(e.gv_filmstrip), e.gv_filmstrip.css("width", 3 * i), this.scrolling = !0) : e.gv_filmstrip.css("width", i) : i > _.innerHeight(e.gv_filmstripWrap) ? (e.gv_filmstrip.find(".gv_frame").clone(!0).appendTo(e.gv_filmstrip).clone(!0).appendTo(e.gv_filmstrip),
                        e.gv_filmstrip.css("height", 3 * i), this.scrolling = !0) : e.gv_filmstrip.css("height", i);
                    else {
                        var s = e.gv_filmstripWrap[0],
                            o = parseInt(s.style.width, 10) + this.opts.frame_gap,
                            l = parseInt(s.style.height, 10) + this.opts.frame_gap;
                        r.style.height = "".concat(l, "px"), r.style.width = "".concat(o, "px")
                    }
                    e.gv_frames = Array.from(r.querySelectorAll(".gv_frame"));
                    for (var u = 0; u < e.gv_frames.length; u++) e.gv_frames[u].setAttribute("frameIndex", u);
                    e.gv_thumbnails = e.gv_filmstrip.find("div.gv_thumbnail")
                }, y.buildGallery = function() {
                    this.dom;
                    this.setDimensions(), this.setPositions(), this.opts.show_filmstrip && (this.buildFilmstrip(), this._setFirstThumbnailAsCurrent()), this._updateMouseOverInterfaceVisibility()
                }, y.showInfoBar = function() {
                    if (this.opts.show_infobar) {
                        var t = this.dom;
                        t.gv_infobar.stop().stopTime("hideInfoBar_" + this.id).html(this.iterator + 1 + " / " + this.numImages).show().css("opacity", this.opts.infobar_opacity), t.gv_infobar.oneTime(2E3 + this.opts.transition_speed, "hideInfoBar_" + this.id, function() {
                            t.gv_infobar.fadeOut(1E3)
                        })
                    }
                }, y._getGvImageByIndex =
                function(t) {
                    var e = this.gvImages.length,
                        i = t % e;
                    return i < 0 ? this.gvImages[e + i] : this.gvImages[i]
                }, y.renderVisiblePanelImages = function() {
                    for (var t, e = this.iterator, i = -2; i <= this._visibleThumbnailsNumber; i++) t = this._getGvImageByIndex(e + i), webwave.isDef(t) && !1 === t.isPanelImgRendered() && t.renderPanelImg(this)
                }, y.onImageLoaded = function(t) {
                    if (webwave.isDefAndNotNull(t)) {
                        var e = this.gvImages.indexOf(t);
                        this._imageLoadedListeners.forEach(function(t) {
                            t(e)
                        })
                    }
                }, y.renderVisibleFilmstripImages = function() {
                    var t, e = this.frameIterator,
                        i = this._visibleThumbnailsNumber,
                        n = f(this.dom.gv_frames.slice(Math.max(e - 1, 0), Math.min(e + 2 * i, this.dom.gv_frames.length)));
                    try {
                        var a = function() {
                            var e = t.value.querySelector("img");
                            if (webwave.isDefAndNotNull(e)) {
                                var i = e.getAttribute("data-src");
                                webwave.isStringAndNotEmpty(i) && (e.addEventListener("load", function() {
                                    e.style.visibility = ""
                                }), e.setAttribute("src", i), e.removeAttribute("data-src"))
                            }
                        };
                        for (n.s(); !(t = n.n()).done;) a()
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                }, y.renderVisibleImages = function() {
                    !0 === this.opts.show_panels &&
                        this.renderVisiblePanelImages(), !0 === this.opts.show_filmstrip && this.renderVisibleFilmstripImages()
                }, y.initImages = function() {
                    this.renderVisibleImages()
                }, y.showNext = function(t) {
                    this.numImages < 2 || (this.navAction = i, this.showItem(this.frameIterator + 1, t))
                }, y.showPrev = function(t) {
                    this.numImages < 2 || (this.navAction = g, this.showItem(this.frameIterator - 1, t))
                }, y.getNextPanel = function() {
                    return this.iterator < this.numImages - 1 ? this.dom.gv_panels.eq(this.iterator + 1) : !0 === this.opts.loop ? this.dom.gv_panels.eq(0) : $()
                },
                y.getPrevPanel = function() {
                    return this.iterator > 0 ? this.dom.gv_panels.eq(this.iterator - 1) : !0 === this.opts.loop ? this.dom.gv_panels.eq(this.numImages - 1) : $()
                }, y.getPanelByIndex = function(t) {
                    return this.dom.gvPanels.eq(this.normalizeIndex(t))
                }, y.normalizeIndex = function(t) {
                    var e = t % this.numImages;
                    return e < 0 && (e = this.numImages - Math.abs(e)), e
                }, y.getCurrentPanel = function() {
                    return this.dom.gv_panels.eq(this.iterator)
                }, y.changeCropTypeForCurrentImage = function(t) {
                    var e = this._getGvImageByIndex(this.iterator);
                    e.imageCropData =
                        t, this.getCurrentPanel().html(this.renderImageWrapper(e)), e.renderPanelImg(this)
                }, y.changeAnimation = function(t) {
                    this.opts.panel_animation = t
                }, y.disabledFilmstripEvents = function() {
                    this._setFilmstripEventsDisableFlag(!0)
                }, y.enabledFilmstripEvents = function() {
                    this._setFilmstripEventsDisableFlag(!1)
                }, y.showItem = function(t, a) {
                    var r = this;
                    if (!1 !== webwave.isNumberAndNotNaN(t)) {
                        var s = this.normalizeIndex(t);
                        if (1 != this.numImages && this.iterator !== s) {
                            var o = this.dom;
                            this.navAction === m && (t > this.iterator ? this.navAction =
                                i : this.navAction = g);
                            var l = this.getCurrentPanel(),
                                u = o.gv_panels.eq(s);
                            if (this.stopSlideshow(), this.unbindActions(), 1 != a) {
                                this.currentAnimation && this.currentAnimation.stop(!0);
                                var h = this.navAction === i ? n.a.LEFT : n.a.RIGHT;
                                this.dom.gv_panelWrap.append(u);
                                var c = {
                                        direction: h,
                                        panel: l,
                                        nextPanel: u,
                                        panelWrap: this.dom.gv_panelWrap,
                                        panelParent: this.dom.gv_panelWrap,
                                        panelSize: new p.a({
                                            width: this.opts.panel_width,
                                            height: this.opts.panel_height
                                        }),
                                        duration: this.opts.transition_speed,
                                        onComplete: function() {
                                            d.clean(),
                                                r.currentAnimation = void 0, l.detach(), o.gv_panelWrap.append(u), r.renderVisiblePanelImages(), r.markCurrentPanel(u), r.bindActions(), r.updateSlideshowState(), webwave.isFunction(r.opts.onImageChanged) && r.opts.onImageChanged(u)
                                        }
                                    },
                                    d = e.createAnimationByName(this.opts.panel_animation, c);
                                this.currentAnimation = d, this.getAnimator().registerAnimation(d)
                            } else l.detach(), o.gv_panelWrap.append(u), this.renderVisiblePanelImages(), this.markCurrentPanel(u), this.bindActions(), this.updateSlideshowState(), "function" == typeof this.opts.onImageChanged &&
                                this.opts.onImageChanged(u);
                            this.updateOverlay(s);
                            var f = this.iterator;
                            this.iterator = s, !0 === a && this.renderVisiblePanelImages(), this.updateFilmstrip(t, a), this.showInfoBar(), "function" == typeof this.opts.onImageChange && this.opts.onImageChange(s, f)
                        }
                    }
                }, y.markCurrentPanel = function(t) {
                    this.dom.gv_panels.removeClass("currentPanel"), t.addClass("currentPanel")
                }, y.updateOverlay = function(t, e, i) {
                    if (webwave.isNotDef(i) && (i = {}), !0 !== this._beingDisposed && 0 !== this.gvImages.length) {
                        var n = this.dom,
                            a = this,
                            r = this.gvImages[t],
                            s = r.attrs.title;
                        webwave.isNotDef(s) && (s = "");
                        var o = b(r);
                        n.gv_overlay.detach(), n.gv_panelWrap.children("a").remove(), webwave.isDefAndNotNull(o) ? (o.appendChild(n.gv_overlay[0]), n.gv_panelWrap[0].appendChild(o)) : n.gv_panelWrap.append(n.gv_overlay), this.overlayVisible && !0 !== e ? this.hideOverlay(null, function() {
                            n.gv_overlayHeader.html(s), a.showOverlay(), !1 === a._beingDisposed && !0 !== i.noExternalCallback && webwave.isFunction(a.opts.onOverlayChange) && a.opts.onOverlayChange(n)
                        }) : (n.gv_overlayHeader.html(s), !1 ===
                            a._beingDisposed && !0 !== i.noExternalCallback && webwave.isFunction(a.opts.onOverlayChange) && a.opts.onOverlayChange(n))
                    }
                }, y.hideOverlay = function(t, e) {
                    var i = this.dom,
                        n = {},
                        a = t || this.opts.transition_speed;
                    e = e || function() {}, n.opacity = 0, i.gv_overlay.animate(n, {
                        duration: a,
                        easing: "swing",
                        complete: e
                    }), this.overlayVisible = !1
                }, y.showOverlay = function(t) {
                    var e = this.dom,
                        i = {
                            opacity: 1
                        };
                    i.opacity = "", e.gv_overlay.css(i), !0 === this.opts.enable_overlays && ("bottom" === this.opts.overlay_position ? (e.gv_overlay.removeClass("onTop"),
                        e.gv_overlay.addClass("onBottom")) : (e.gv_overlay.addClass("onTop"), e.gv_overlay.removeClass("onBottom"))), this.overlayVisible = !0
                }, y.updateFilmstrip = function(t, e) {
                    if (this.opts.show_filmstrip) {
                        var i, n = this,
                            a = this.dom,
                            r = a.gv_thumbnails.eq(this.iterator);
                        this.scrolling && (r = r.add(a.gv_thumbnails.eq(this.iterator + this.numImages)).add(a.gv_thumbnails.eq(this.iterator + 2 * this.numImages))), a.gv_thumbnails.removeClass("current").stop(!0, !0).animate({
                            opacity: this.opts.frame_opacity
                        }), r.stop().addClass("current").stop(!0, !0).animate({
                            opacity: 1
                        }, 500), this.scrolling ? "horizontal" === this.filmstripOrientation ? (i = (i = (_.outerWidth(a.gv_frame) + this.opts.frame_gap) * (this.frameIterator - t)) > 0 ? "+=" + Math.abs(i) : "-=" + Math.abs(i), n.frameIterator = t % n.numImages + n.numImages, a.gv_filmstrip.stop(!0, !0).animate({
                            left: i
                        }, {
                            duration: this.opts.transition_speed,
                            easing: this.opts.easing,
                            complete: function() {
                                t < n.numImages ? a.gv_filmstrip.css("left", _.getInt(a.gv_filmstrip.css("left")) - n.numImages * (_.outerWidth(a.gv_frame) + n.opts.frame_gap)) : t >=
                                    2 * n.numImages && a.gv_filmstrip.css("left", _.getInt(a.gv_filmstrip.css("left")) + n.numImages * (_.outerWidth(a.gv_frame) + n.opts.frame_gap)), n.renderVisibleFilmstripImages()
                            }
                        })) : (i = (i = (_.outerHeight(a.gv_frame) + this.opts.frame_gap) * (this.frameIterator - t)) > 0 ? "+=" + Math.abs(i) : "-=" + Math.abs(i), 0 === t ? n.frameIterator = n.numImages : t > 3 * n.numImages - 2 * n.filmstripSize ? n.frameIterator = t - n.numImages : n.frameIterator = t, a.gv_filmstrip.stop(!0, !0).animate({
                            top: i
                        }, {
                            duration: this.opts.transition_speed,
                            easing: this.opts.easing,
                            complete: function() {
                                0 === t ? a.gv_filmstrip.css("top", _.getInt(a.gv_filmstrip.css("top")) - n.numImages * (_.outerHeight(a.gv_frame) + n.opts.frame_gap)) : t > 3 * n.numImages - 2 * n.filmstripSize && a.gv_filmstrip.css("top", _.getInt(a.gv_filmstrip.css("top")) + n.numImages * (_.outerHeight(a.gv_frame) + n.opts.frame_gap)), n.renderVisibleFilmstripImages()
                            }
                        })) : this.frameIterator = t
                    } else this.frameIterator = t
                }, y.startSlideshow = function() {
                    var t = this;
                    !0 !== this._beingDisposed && this.opts.enable_slideshow && (clearInterval(this._slideshowTimeout),
                        this._slideshowTimeout = setInterval(function() {
                            !1 === document.hidden && t.showNext()
                        }, this.opts.transition_interval))
                }, y.stopSlideshow = function() {
                    clearInterval(this._slideshowTimeout)
                }, y.updateSlideshowState = function() {
                    !1 === this._slideshowPaused && !0 === this.opts.autoplay ? (!1 === this._slideshowPaused && this.stopAnimationImmediately(), this.startSlideshow()) : this.stopSlideshow()
                }, y.setSlideshowPause = function(t) {
                    var e = this._slideshowPaused !== t;
                    this._slideshowPaused = !0 === t, e && this.updateSlideshowState()
                }, y.setAutoPlay =
                function(t) {
                    var e = this.opts.autoplay !== t;
                    this.opts.autoplay = !0 === t, e && this.updateSlideshowState()
                }, y.enablePanning = function() {
                    var t = this,
                        e = this.dom;
                    t.opts.enable_slideshow && (e.gv_panel.css("cursor", "url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur), n-resize"), "drag" === this.opts.pan_style && e.gv_panelWrap.on("mousedown.galleryview", ".gv_panel img", function(e) {
                        t.isMouseDown = !0, $(this).css("cursor", "url(http://www.google.com/intl/en_ALL/mapfiles/closedhand.cur), n-resize")
                    }).on("mouseup.galleryview",
                        ".gv_panel img",
                        function(e) {
                            t.isMouseDown = !1, $(this).css("cursor", "url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur), n-resize")
                        }).on("mousemove.galleryview", ".gv_panel img", function(i) {
                        var n, a, r, s, o = $(this);
                        t.isMouseDown ? (n = i.pageY - t.mouse.y, a = i.pageX - t.mouse.x, r = _.getInt(o.css("top")) + n, s = _.getInt(o.css("left")) + a, o.css("cursor", "url(http://www.google.com/intl/en_ALL/mapfiles/closedhand.cur), n-resize"), r > 0 && (r = 0), s > 0 && (s = 0), r < -1 * (_.outerHeight(o) - _.innerHeight(e.gv_panel)) && (r = -1 * (_.outerHeight(o) -
                            _.innerHeight(e.gv_panel))), s < -1 * (_.outerWidth(o) - _.innerWidth(e.gv_panel)) && (s = -1 * (_.outerWidth(o) - _.innerWidth(e.gv_panel))), o.css("top", r), o.css("left", s)) : o.css("cursor", "url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur), n-resize")
                    }))
                }, y.setNavigationVisibilityType = function(t) {
                    webwave.isValidEnumValue(t, r.a) && (this._navigationVisibilityType = t, this._updateMouseOverInterfaceVisibility())
                }, y._updateMouseOverInterfaceVisibility = function() {
                    this._navigationVisibilityType === r.a.VISIBLE ||
                        !0 === this._isMouseOver ? (this.showPanelNav(), !0 === this.opts.showFilmstripOnHover && this.showFilmstrip()) : (this.hidePanelNav(), !0 === this.opts.showFilmstripOnHover && this.hideFilmstrip())
                }, y.mouseOverHandler = function() {
                    this._isMouseOver = !0, this._updateMouseOverInterfaceVisibility()
                }, y.mouseOutHandler = function() {
                    this._isMouseOver = !1, this._updateMouseOverInterfaceVisibility()
                }, y.bindActions = function() {
                    var t = this,
                        e = this.dom;
                    e.gv_showOverlay.off("click.galleryview").on("click.galleryview", function() {
                        t.overlayVisible ?
                            t.hideOverlay(250) : t.showOverlay(250)
                    }), e.gv_navWrap.off("click.galleryview").on("click.galleryview", "div", function() {
                        var e = $(this);
                        return e.hasClass("gv_navNext") ? t.showNext() : e.hasClass("gv_navPrev") ? t.showPrev() : e.hasClass("gv_navPlay") ? t.startSlideshow(!0) : e.hasClass("gv_navPause") && t.stopSlideshow(!0), !1
                    }), e.gv_panelNavNext.off("click.galleryview").on("click.galleryview", function() {
                        return t.showNext(), !1
                    }), e.gv_panelNavPrev.off("click.galleryview").on("click.galleryview", function() {
                        return t.showPrev(), !1
                    }), e.gv_filmstripWrap.off("click.galleryview").on("click.galleryview", ".gv_frame", function() {
                        var e = $(this),
                            i = webwave.parseNumber(e.attr("frameIndex"));
                        return t.navAction = m, t.showItem(i), !1
                    }), e.gv_galleryWrap.off("mouseover.galleryview").on("mouseover.galleryview", this.mouseOverHandler.bind(this)), e.gv_galleryWrap.off("mouseout.galleryview").on("mouseout.galleryview", this.mouseOutHandler.bind(this)), this._updateSwipeableEvents()
                }, y._updateSwipeableEvents = function() {
                    !0 !== this.opts.swipeEventsDisabled ?
                        this.swipeable || (this.swipeable = new t(this.dom.gv_panelWrap[0], {
                            delegatedElements: "img",
                            onStart: this.onSwipeStart.bind(this),
                            onSwipe: this.onSwipe.bind(this),
                            onStop: this.onSwipeStop.bind(this)
                        })) : this.swipeable && (this.swipeable.dispose(), this.swipeable = void 0)
                }, y.setSwipeEventsDisabled = function(t) {
                    this.opts.swipeEventsDisabled = !0 === t, this._updateSwipeableEvents()
                }, y.onSwipeStart = function(t, i) {
                    if (!(this.numImages <= 1)) {
                        webwave.isDef(this.currentAnimation) && this.currentAnimation.stop(!0), webwave.isDefAndNotNull(this._swippingData) &&
                            this.getAnimator().unregisterAnimation(this._swippingData.manualAnimation), this.stopSlideshow();
                        var a = i.direction === c.a.LEFT ? this.getNextPanel() : this.getPrevPanel(),
                            r = i.direction === c.a.LEFT ? n.a.LEFT : n.a.RIGHT,
                            s = "slide" === this.opts.panel_animation ? "linear" : "swing",
                            o = {
                                direction: r,
                                panel: this.getCurrentPanel(),
                                nextPanel: a,
                                panelWrap: this.dom.gv_panelWrap,
                                panelParent: this.dom.gv_panelWrap,
                                panelSize: new p.a({
                                    width: this.opts.panel_width,
                                    height: this.opts.panel_height
                                }),
                                galleryView: this,
                                easing: s
                            };
                        this.dom.gv_panelWrap.append(o.nextPanel);
                        var l = e.createAnimationByName(this.opts.panel_animation, o);
                        this.currentAnimation = l;
                        var u = new h.a({
                            animation: l
                        });
                        this.getAnimator().registerAnimation(u), this._swippingData = {
                            animation: l,
                            manualAnimation: u,
                            startTime: t.timeStamp
                        }
                    }
                }, y.onSwipe = function(t, e) {
                    if (!(this.numImages <= 1)) {
                        var i = e.direction === c.a.LEFT ? n.a.LEFT : n.a.RIGHT,
                            a = this._swippingData.animation;
                        if (a._direction !== i) {
                            a.setDirection(i);
                            var r = a.getNextPanel(),
                                s = i === n.a.LEFT ? this.getNextPanel() : this.getPrevPanel();
                            a.clean(), r.detach(), this.dom.gv_panelWrap.append(s),
                                a.setNextPanel(s), a._initDomObjects && a._initDomObjects()
                        }
                        this._swippingData.manualAnimation.setProgress(Math.abs(e.swipe.x / this.opts.panel_width))
                    }
                }, y.onSwipeStop = function(t, e) {
                    if (!(this.numImages <= 1)) {
                        var i, n = this,
                            a = t.timeStamp - this._swippingData.startTime,
                            r = "current",
                            s = e.swipe.x;
                        (a < n.opts.maxFastDragTimeSpan && 0 !== s || Math.abs(s) > n.opts.panel_width / 3) && (r = s > 0 ? "previous" : "next");
                        var o = this._swippingData.manualAnimation;
                        switch (r) {
                            case "current":
                                i = o.createRevertAnimation(function() {
                                    i._animation._nextPanel.detach(),
                                        n.updateSlideshowState()
                                });
                                break;
                            case "next":
                                n.getNextPanel().length > 0 && (i = o.createFinishAnimation(function() {
                                    i._animation._panel.detach(), n.showNext(!0), n.currentAnimation = void 0
                                }));
                                break;
                            case "previous":
                                i = n.getPrevPanel().length > 0 ? o.createFinishAnimation(function() {
                                    i._animation._panel.detach(), n.showPrev(!0), n.currentAnimation = void 0
                                }) : o.createRevertAnimation()
                        }
                        this.getAnimator().unregisterAnimation(o), this.currentAnimation = i, this.getAnimator().registerAnimation(i), this._swippingData = null
                    }
                }, y.unbindActions =
                function() {
                    var t = this.dom;
                    t.gv_showOverlay.off("click.galleryview"), t.gv_panelNavNext.off("click.galleryview"), t.gv_panelNavPrev.off("click.galleryview"), t.gv_navWrap.off("click.galleryview", "div"), t.gv_filmstripWrap.off("click.galleryview", ".gv_frame")
                }, y.showPanelNav = function() {
                    var t = this.dom;
                    t.gv_panelNavNext.show(), t.gv_panelNavPrev.show()
                }, y.hidePanelNav = function() {
                    var t = this.dom;
                    t.gv_panelNavNext.hide(), t.gv_panelNavPrev.hide()
                }, y.showFilmstrip = function() {
                    this.dom.gv_filmstripWrap.show()
                }, y.hideFilmstrip =
                function() {
                    this.dom.gv_filmstripWrap.hide()
                }, y.resize = function(t) {
                    this.opts = $.extend({}, w, t), this._updateGallerySize(), this._updateGalleryImageSize(), this._updateThumbnailsPanelWidth(), this.setPositions()
                }, y.init = function(t, e) {
                    var i = this,
                        n = this.dom = {};
                    this.opts = $.extend({}, w, t), this.el = e, this.$el = $(e), this.id = e.id, this.iterator = this.frameIterator = this.opts.start_frame - 1, this.overlayVisible = !1, this.playing = !1, this.scrolling = !1, this.isMouseDown = !1, this.mouse = {
                            x: 0,
                            y: 0
                        }, this.filmstripOrientation = "top" ===
                        this.opts.filmstrip_position || "bottom" === this.opts.filmstrip_position ? "horizontal" : "vertical", $(document).on("mousemove.galleryview", function(t) {
                            i.mouse = {
                                x: t.pageX,
                                y: t.pageY
                            }
                        }), $.each(this.elems, function(t, e) {
                            var a = e.split(".");
                            "" === a[0] && (a[0] = "div"), n[a[1]] = i.createElem({
                                class: a[1]
                            }, a[0])
                        }), n.gv_imageStore.appendTo($("body")), n.gv_galleryWrap.on("mousedown.galleryview", "img", function(t) {
                            t.preventDefault && t.preventDefault()
                        }), n.gv_panel.addClass("gv_panel-loading"), n.gv_frame.addClass("gv_frame-loading"),
                        n.gv_galleryWrap.hide().append(n.gv_gallery), this.opts.show_panels && (n.gv_gallery.append(n.gv_panelWrap), this.opts.show_panel_nav && (n.gv_panelWrap.append(n.gv_panelNavNext, n.gv_panelNavPrev), n.gv_panelNavNext.css("right", this.opts.nextButtonDistance), n.gv_panelNavPrev.css("left", this.opts.prevButtonDistance)), this.opts.show_infobar && n.gv_panelWrap.append(n.gv_infobar)), n.gv_gallery.append(n.gv_controlsWrap), this.opts.show_filmstrip && (n.gv_gallery.append(n.gv_filmstripWrap.append(n.gv_filmstrip)),
                            this.opts.show_filmstrip_nav && n.gv_gallery.append(n.gv_navWrap.append(n.gv_navPrev, this.opts.enable_slideshow ? n.gv_navPlay : $("<span></span>"), n.gv_navNext)), !0 === this.opts.showFilmstripOnHover && this.hideFilmstrip()), this.opts.enable_overlays && (n.gv_panelWrap.append(n.gv_overlay, n.gv_showOverlay), n.gv_overlay.append(n.gv_overlayHeaderWrapper), n.gv_overlayHeaderWrapper.addClass("innerElement ww_inner_element"), n.gv_overlayHeaderWrapper.append(n.gv_overlayHeader), n.gv_overlayHeader.addClass("innerElementContent ww_inner_element_content"),
                            this.opts.header_text_style_id && n.gv_overlayHeader.addClass(this.opts.header_text_style_id)), this.opts.show_captions && n.gv_frame.append(n.gv_caption).appendTo(n.gv_gallery), this.$el.replaceWith(n.gv_galleryWrap), this.opts.pan_images && this.enablePanning(), this.storeImages(), this.buildGallery(), this.initImages(), this.bindActions(), n.gv_frame.remove(), n.gv_galleryWrap[0].style.display = "block", this.opts.autoplay && this.updateSlideshowState(), this.updateOverlay(this.iterator, !1, {
                            noExternalCallback: !0
                        }),
                        this.opts.enable_overlays && i.showOverlay(250)
                }, y.dispose = function() {
                    this._beingDisposed = !0, this.stopAnimationImmediately(), this.stopSlideshow(), webwave.isDef(this.swipeable) && this.swipeable.dispose(), this.$el.remove(), this.dom.gv_galleryWrap.remove(), this.dom.gv_imageStore.remove()
                }, y.stopAnimationImmediately = function() {
                    this.currentAnimation && (this.getAnimator().unregisterAnimation(this.currentAnimation), this.currentAnimation.stop(), this.currentAnimation = void 0)
                }, y.setAnimator = function(t) {
                    this._animator =
                        t
                }, y.addImageLoadedListener = function(t) {
                    this._imageLoadedListeners.push(t)
                }, y.getAnimator = function() {
                    return this._animator
                }, y._setFirstThumbnailAsCurrent = function() {
                    var t = this.dom.gv_thumbnails.eq(this.iterator)[0];
                    webwave.isDefAndNotNull(t) && (t.classList.add(s.a.CURRENT_THUMBNAIL_CLASS_NAME), t.style.opacity = 1)
                }, y._setFilmstripEventsDisableFlag = function(t) {
                    this.opts.filmstripEventsDisabled = t, this.dom.gv_filmstrip.toggleClass("events-disabled", t)
                }, y._updateGalleryImageSize = function() {
                    for (var t = this.dom,
                            e = 0; e < t.gv_panels.length; e++) {
                        var i = this.gvImages[e],
                            n = this._countImageScaleData({
                                width: i.width,
                                height: i.height,
                                newWidth: this.opts.panel_width,
                                newHeight: this.opts.panel_height,
                                cropType: this.opts.panel_scale,
                                imageCropData: i.imageCropData
                            }),
                            a = {
                                width: n.width + "px",
                                height: n.height + "px",
                                top: n.heightOffset + "px",
                                left: n.widthOffset + "px"
                            };
                        $(t.gv_panels[e]).css({
                            width: this.opts.panel_width,
                            height: this.opts.panel_height
                        }), $(t.gv_panels[e]).find(".gv_imgWrapper").css(a)
                    }
                }, y._updateGallerySize = function() {
                    var t,
                        e, i = this.dom.gv_panelWrap[0];
                    i.style.width = "".concat(this.opts.panel_width, "px"), i.style.height = "".concat(this.opts.panel_height, "px"), this.opts.show_filmstrip ? this.opts.filmstrip_on_image ? (t = _.outerWidth(this.dom.gv_panelWrap), e = _.outerHeight(this.dom.gv_panelWrap)) : "horizontal" === this.filmstripOrientation ? (t = _.outerWidth(this.dom.gv_panelWrap), e = _.outerHeight(this.dom.gv_panelWrap) + this.opts.frame_gap + (this.opts.show_filmstrip ? Math.max(_.outerHeight(this.dom.gv_filmstripWrap), _.outerHeight(this.dom.gv_navWrap)) :
                        _.outerHeight(this.dom.gv_filmstripWrap))) : (t = _.outerWidth(this.dom.gv_panelWrap) + this.opts.frame_gap + (this.opts.show_filmstrip ? Math.max(_.outerWidth(this.dom.gv_filmstripWrap), _.outerWidth(this.dom.gv_navWrap)) : _.outerWidth(this.dom.gv_filmstripWrap)), e = _.outerHeight(this.dom.gv_panelWrap)) : (t = _.outerWidth(this.dom.gv_panelWrap), e = _.outerHeight(this.dom.gv_panelWrap));
                    var n = this.dom.gv_gallery[0];
                    n.style.width = "".concat(t, "px"), n.style.height = "".concat(e, "px");
                    var a = this.dom.gv_galleryWrap[0];
                    a.style.width =
                        "".concat(_.outerWidth(this.dom.gv_gallery), "px"), a.style.height = "".concat(_.outerHeight(this.dom.gv_gallery), "px")
                }, y._updateThumbnailsPanelWidth = function() {
                    var t = this.dom,
                        e = {
                            prev: _.innerWidth(t.gv_navPrev),
                            play: _.innerWidth(t.gv_navPlay),
                            next: _.innerWidth(t.gv_navNext),
                            filmstrip: this.opts.frame_width,
                            fsMax: 0,
                            fsFull: 0
                        },
                        i = {
                            prev: _.innerHeight(t.gv_navPrev),
                            play: _.innerHeight(t.gv_navPlay),
                            next: _.innerHeight(t.gv_navNext),
                            filmstrip: this.opts.frame_height + (this.opts.show_captions ? _.outerHeight(t.gv_caption) :
                                0),
                            fsMax: 0,
                            fsFull: 0
                        };
                    "horizontal" === this.filmstripOrientation ? (this.filmstripSize = Math.floor((_.outerWidth(t.gv_panelWrap) - _.outerWidth(t.gv_navWrap)) / (_.outerWidth(t.gv_frame) + this.opts.frame_gap)), e.fsMax = this.filmstripSize * (_.outerWidth(t.gv_frame) + this.opts.frame_gap), e.fsFull = this.gvImages.length * (_.outerWidth(t.gv_frame) + this.opts.frame_gap), e.filmstrip = Math.min(e.fsMax, e.fsFull), "scroll" !== this.opts.filmstrip_style && (i.filmstrip = Math.ceil(this.gvImages.length / this.filmstripSize) * (_.outerHeight(t.gv_frame) +
                        this.opts.frame_gap) - this.opts.frame_gap)) : (this.filmstripSize = Math.floor((_.outerHeight(t.gv_panelWrap) - _.outerHeight(t.gv_navWrap)) / (_.outerHeight(t.gv_frame) + this.opts.frame_gap)), i.fsMax = this.filmstripSize * (_.outerHeight(t.gv_frame) + this.opts.frame_gap), i.fsFull = this.gvImages.length * (_.outerHeight(t.gv_frame) + this.opts.frame_gap), i.filmstrip = Math.min(i.fsMax, i.fsFull), "scroll" !== this.opts.filmstrip_style && (e.filmstrip = Math.ceil(this.gvImages.length / this.filmstripSize) * (_.outerWidth(t.gv_frame) +
                        this.opts.frame_gap) - this.opts.frame_gap));
                    var n = t.gv_filmstripWrap[0];
                    n.style.width = "".concat(e.filmstrip, "px"), n.style.height = "".concat(i.filmstrip, "px"), !1 === this.opts.show_filmstrip ? this._visibleThumbnailsNumber = 2 : "scroll" === this.opts.filmstrip_style ? this._visibleThumbnailsNumber = "horizontal" === this.filmstripOrientation ? Math.round(e.filmstrip / _.innerWidth(t.gv_frame)) : Math.round(i.filmstrip / _.innerHeight(t.gv_frame)) : this._visibleThumbnailsNumber = this.gvImages.length
                };
            var b = function(t) {
                    var e;
                    if (webwave.isDef(t) && webwave.isDef(t.link) && "" !== t.link.href) {
                        var i = webwave.isDef(t.link.target) ? t.link.target : "_blank",
                            n = webwave.isDef(t.link.title) ? t.link.title : "",
                            a = Object(d.a)({
                                href: t.link.href,
                                target: i,
                                title: n
                            });
                        e = o.a.htmlToElements(a)[0], !0 === t.link.samepage && e.setAttribute(elementService.SAME_PAGE_ELEMENT_LINK_ATTRIBUTE_NAME, "true")
                    }
                    return e
                },
                w = {
                    transition_speed: 1E3,
                    transition_interval: 5E3,
                    easing: "swing",
                    show_panels: !0,
                    show_panel_nav: !0,
                    nextButtonDistance: 10,
                    prevButtonDistance: 10,
                    enable_overlays: !1,
                    panel_width: 800,
                    panel_height: 400,
                    panel_animation: "fade",
                    panel_scale: a.a.COVER,
                    overlay_position: "bottom",
                    pan_images: !1,
                    pan_style: "drag",
                    pan_smoothness: 15,
                    start_frame: 1,
                    show_filmstrip: !0,
                    show_filmstrip_nav: !0,
                    navigationVisibilityType: "hover",
                    enable_slideshow: !0,
                    autoplay: !1,
                    show_captions: !1,
                    filmstrip_size: 3,
                    filmstrip_style: "scroll",
                    filmstrip_position: "bottom",
                    filmstrip_on_image: !1,
                    filmstripEdgeDistance: 10,
                    showFilmstripOnHover: !1,
                    frame_width: 80,
                    frame_height: 40,
                    frame_opacity: .4,
                    frame_scale: a.a.COVER,
                    frame_gap: 5,
                    filmstripEventsDisabled: !1,
                    show_infobar: !0,
                    infobar_opacity: 1,
                    onImageChange: null,
                    onImageChanged: null,
                    onOverlayChange: null,
                    maxFastDragTimeSpan: 300,
                    loop: !0,
                    swipeEventsDisabled: !1
                }
        }()
    },
    3684: function(t, e, i) {
        e.a = {
            CURRENT_THUMBNAIL_CLASS_NAME: "current"
        }
    },
    3685: function(t, e, i) {
        i.d(e, "b", function() {
            return n
        }), i.d(e, "c", function() {
            return a
        }), i.d(e, "a", function() {
            return r
        });
        var n = function(t) {
                var e = t.width,
                    i = t.height,
                    n = t.heightOffset,
                    a = t.widthOffset,
                    r = t.thumbnailUrl,
                    s = t.altText;
                return '\n    <img \n        style="width:'.concat(e,
                    "px;height:").concat(i, "px;top:").concat(n, "px;left:").concat(a, 'px;visibility: hidden;" \n        data-src="').concat(r, '" \n        alt="').concat(s, '"\n    />\n')
            },
            a = function(t) {
                var e = t.width,
                    i = t.height,
                    n = t.heightOffset,
                    a = t.widthOffset,
                    r = t.imageUrl;
                return '\n    <div \n        class="gv_imgWrapper"\n        style="width:'.concat(e, "px;height:").concat(i, "px;top:").concat(n, "px;left:").concat(a, 'px;"\n    >\n        <img \n            class="gv_img"\n            style="visibility: hidden;" \n            data-src="').concat(r,
                    '" \n        />\n    </div>\n')
            },
            r = function(t) {
                var e = t.href,
                    i = t.target,
                    n = t.title;
                return '\n    <a \n        draggable="false"\n        href="'.concat(e, '"\n        target="').concat(i, '"     \n        title="').concat(n, '"\n    />\n')
            }
    },
    4: function(t, e, i) {
        e.a = function(t, e) {
            if (e && ("object" === Object(n.a)(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return Object(a.a)(t)
        };
        var n = i(33),
            a = i(11)
    },
    43: function(t, e, i) {
        i.d(e, "a",
            function() {
                return s
            });
        var n = i(0),
            a = i(1),
            r = i(30),
            s = function() {
                function t(e) {
                    Object(n.a)(this, t), webwave.isNotDef(e) && (e = {}), this.width = webwave.isNumberAndNotNaN(e.width) ? e.width : 0, this.height = webwave.isNumberAndNotNaN(e.height) ? e.height : 0
                }
                return Object(a.a)(t, [{
                    key: "getWidth",
                    value: function() {
                        return this.width
                    }
                }, {
                    key: "setWidth",
                    value: function(t) {
                        this.width = t
                    }
                }, {
                    key: "getHeight",
                    value: function() {
                        return this.height
                    }
                }, {
                    key: "setHeight",
                    value: function(t) {
                        this.height = t
                    }
                }, {
                    key: "clone",
                    value: function() {
                        return new t({
                            width: this.width,
                            height: this.height
                        })
                    }
                }, {
                    key: "serialize",
                    value: function() {
                        return {
                            width: this.width,
                            height: this.height
                        }
                    }
                }, {
                    key: "equals",
                    value: function(t) {
                        return this.width === t.width && this.height === t.height
                    }
                }, {
                    key: "add",
                    value: function(t) {
                        return this.width += t.getWidth(), this.height += t.getHeight(), this
                    }
                }, {
                    key: "subtract",
                    value: function(t) {
                        return this.width -= t.getWidth(), this.height -= t.getHeight(), this
                    }
                }, {
                    key: "multiply",
                    value: function(t) {
                        return this.width *= t, this.height *= t, this
                    }
                }, {
                    key: "applyLimits",
                    value: function() {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        webwave.isDef(t.width) && (webwave.isNumber(t.width.min) && (this.width = Math.max(this.width, t.width.min)), webwave.isNumber(t.width.max) && (this.width = Math.min(this.width, t.width.max))), webwave.isDef(t.height) && (webwave.isNumber(t.height.min) && (this.height = Math.max(this.height, t.height.min)), webwave.isNumber(t.height.max) && (this.height = Math.min(this.height, t.height.max)))
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return "{".concat(this.width, ",").concat(this.height,
                            "}}")
                    }
                }, {
                    key: "toVector",
                    value: function() {
                        return new r.a({
                            x: this.getWidth(),
                            y: this.getHeight()
                        })
                    }
                }, {
                    key: "addHeight",
                    value: function(t) {
                        this.height += t
                    }
                }, {
                    key: "subtractHeight",
                    value: function(t) {
                        this.height -= t
                    }
                }, {
                    key: "addWidth",
                    value: function(t) {
                        this.width += t
                    }
                }, {
                    key: "subtractWidth",
                    value: function(t) {
                        this.width -= t
                    }
                }, {
                    key: "ceil",
                    value: function() {
                        this.width = Math.ceil(this.width), this.height = Math.ceil(this.height)
                    }
                }]), t
            }();
        s.deserialize = function(t) {
            return webwave.isNotDef(t) ? new s({
                width: 0,
                height: 0
            }) : new s(t)
        }
    },
    53: function(t, e, i) {
        i.d(e, "a", function() {
            return s
        });
        var n = i(0),
            a = i(1),
            r = i(54),
            s = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Object(n.a)(this, t), this.value = webwave.isNumberAndNotNaN(e.value) ? e.value : 0, this.unit = webwave.isValidEnumValue(e.unit, r.a) ? e.unit : r.a.PX
                }
                return Object(a.a)(t, [{
                        key: "getUnit",
                        value: function() {
                            return this.unit
                        }
                    }, {
                        key: "setUnit",
                        value: function(t) {
                            webwave.isValidEnumValue(t, r.a) && (this.unit = t)
                        }
                    }, {
                        key: "getValue",
                        value: function() {
                            return this.value
                        }
                    },
                    {
                        key: "setValue",
                        value: function(t) {
                            webwave.isNumberAndNotNaN(t) && (this.value = t)
                        }
                    }, {
                        key: "serialize",
                        value: function() {
                            return {
                                value: this.value,
                                unit: this.unit
                            }
                        }
                    }, {
                        key: "add",
                        value: function(e) {
                            e instanceof t && this.unit === e.getUnit() && (this.value += e.getValue())
                        }
                    }, {
                        key: "subtract",
                        value: function(t) {
                            return this.unit === t.getUnit() && (this.value -= t.getValue()), this
                        }
                    }, {
                        key: "multiply",
                        value: function(t) {
                            return this.value *= t, this
                        }
                    }, {
                        key: "equals",
                        value: function(t) {
                            return this.getUnit() === t.getUnit() && this.getValue() ===
                                t.getValue()
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return this.value + this.unit
                        }
                    }, {
                        key: "clone",
                        value: function() {
                            return new t({
                                value: this.value,
                                unit: this.unit
                            })
                        }
                    }, {
                        key: "loadValuesFromObject",
                        value: function(t) {
                            this.setUnit(t.getUnit()), this.setValue(t.getValue())
                        }
                    }
                ], [{
                    key: "parseLengthString",
                    value: function(t) {
                        var e = String(t),
                            i = parseFloat(e),
                            n = e.match(/%|em/);
                        return isNaN(i) ? "" : n ? i + n : "".concat(Math.round(i), "px")
                    }
                }, {
                    key: "parseLengthUnitString",
                    value: function(t) {
                        var e = String(t).match(/%|em|vh|vw/);
                        return e ?
                            e.toString() : r.a.PX
                    }
                }, {
                    key: "isUnitVWorVH",
                    value: function(t) {
                        return t === r.a.VH || t === r.a.VW
                    }
                }, {
                    key: "isUnitPX",
                    value: function(t) {
                        return t === r.a.PX
                    }
                }, {
                    key: "isUnitVH",
                    value: function(t) {
                        return t === r.a.VH
                    }
                }, {
                    key: "isUnitVW",
                    value: function(t) {
                        return t === r.a.VW
                    }
                }, {
                    key: "isUnitDynamic",
                    value: function(e) {
                        return t.isUnitVH(e) || t.isUnitVW(e)
                    }
                }, {
                    key: "createLengthWithPxUnitFromValue",
                    value: function(e) {
                        return new t({
                            value: !1 === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).withoutRounding ? Math.round(e) : e,
                            unit: r.a.PX
                        })
                    }
                }]), t
            }()
    },
    54: function(t, e, i) {
        var n = {
            PX: "px",
            PERCENT: "%",
            VW: "vw",
            VH: "vh"
        };
        Object.freeze(n), e.a = n
    },
    6948: function(t, e, i) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        i(3676);
        window[window.WWNamespace.LOAD_MODULE_SERVICE].notifyAboutLoad(window[window.WWNamespace.MODULES].GALLERY_LIB)
    },
    734: function(t, e, i) {
        e.a = function(t, e) {
            for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Object(n.a)(t)););
            return t
        };
        var n = i(2)
    },
    747: function(t, e, i) {
        e.a = {
            TOP: "top",
            TOP_RIGHT: "topRight",
            RIGHT: "right",
            BOTTOM_RIGHT: "bottomRight",
            BOTTOM: "bottom",
            BOTTOM_LEFT: "bottomLeft",
            LEFT: "left",
            TOP_LEFT: "topLeft",
            CENTER: "center"
        }
    },
    752: function(t, e, i) {
        i.d(e, "a", function() {
            return s
        });
        var n = i(0),
            a = i(1),
            r = [{
                    name: "blur",
                    defaultValue: 0,
                    regex: /blur\(([+-]?([0-9]*[.])?[0-9]+)px\)/
                }, {
                    name: "brightness",
                    defaultValue: 1,
                    regex: /brightness\(([+-]?([0-9]*[.])?[0-9]+)\)/
                }, {
                    name: "contrast",
                    defaultValue: 1,
                    regex: /contrast\(([+-]?([0-9]*[.])?[0-9]+)\)/
                }, {
                    name: "greyscale",
                    defaultValue: 0,
                    regex: /grayscale\(([+-]?([0-9]*[.])?[0-9]+)\)/
                },
                {
                    name: "hueRotate",
                    defaultValue: 0,
                    regex: /hue-rotate\(([+-]?([0-9]*[.])?[0-9]+)deg\)/
                }, {
                    name: "saturate",
                    defaultValue: 1,
                    regex: /saturate\(([+-]?([0-9]*[.])?[0-9]+)\)/
                }, {
                    name: "sepia",
                    defaultValue: 0,
                    regex: /sepia\(([+-]?([0-9]*[.])?[0-9]+)\)/
                }, {
                    name: "invert",
                    defaultValue: 0,
                    regex: /invert\(([+-]?([0-9]*[.])?[0-9]+)\)/
                }
            ],
            s = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Object(n.a)(this, t), this.blur = void 0, this.brightness = void 0, this.contrast = void 0, this.greyscale = void 0,
                        this.hueRotate = void 0, this.saturate = void 0, this.sepia = void 0, this.invert = void 0, this.enabled = !0 === e.enabled, this.blur = webwave.isNumberAndNotNaN(e.blur) ? e.blur : void 0, this.brightness = webwave.isNumberAndNotNaN(e.brightness) ? e.brightness : void 0, this.contrast = webwave.isNumberAndNotNaN(e.contrast) ? e.contrast : void 0, this.greyscale = webwave.isNumberAndNotNaN(e.greyscale) ? e.greyscale : void 0, this.hueRotate = webwave.isNumberAndNotNaN(e.hueRotate) ? e.hueRotate : void 0, this.saturate = webwave.isNumberAndNotNaN(e.saturate) ?
                        e.saturate : void 0, this.sepia = webwave.isNumberAndNotNaN(e.sepia) ? e.sepia : void 0, this.invert = webwave.isNumberAndNotNaN(e.invert) ? e.invert : void 0
                }
                return Object(a.a)(t, [{
                        key: "setBlur",
                        value: function(t) {
                            this.blur = t
                        }
                    }, {
                        key: "setBrightness",
                        value: function(t) {
                            this.brightness = t
                        }
                    }, {
                        key: "setContrast",
                        value: function(t) {
                            this.contrast = t
                        }
                    }, {
                        key: "setGreyscale",
                        value: function(t) {
                            this.greyscale = t
                        }
                    }, {
                        key: "setHueRotate",
                        value: function(t) {
                            this.hueRotate = t
                        }
                    }, {
                        key: "setSaturate",
                        value: function(t) {
                            this.saturate = t
                        }
                    }, {
                        key: "setSepia",
                        value: function(t) {
                            this.sepia = t
                        }
                    }, {
                        key: "setInvert",
                        value: function(t) {
                            this.invert = t
                        }
                    }, {
                        key: "isEnabled",
                        value: function() {
                            return this.enabled
                        }
                    }, {
                        key: "setEnabled",
                        value: function(t) {
                            return this.enabled = t
                        }
                    }, {
                        key: "toCssString",
                        value: function() {
                            var t = "";
                            return this.isEnabled() ? (webwave.isDef(this.blur) && (t += "blur(".concat(Math.abs(this.blur), "px)")), webwave.isDef(this.brightness) && (t += " brightness(".concat(Math.abs(this.brightness), ")")), webwave.isDef(this.contrast) && (t += " contrast(".concat(Math.abs(this.contrast),
                                ")")), webwave.isDef(this.greyscale) && (t += " grayscale(".concat(Math.abs(this.greyscale), ")")), webwave.isDef(this.hueRotate) && (t += " hue-rotate(".concat(Math.abs(this.hueRotate), "deg)")), webwave.isDef(this.saturate) && (t += " saturate(".concat(Math.abs(this.saturate), ")")), webwave.isDef(this.sepia) && (t += " sepia(".concat(Math.abs(this.sepia), ")")), webwave.isDef(this.invert) && (t += " invert(".concat(Math.abs(this.invert), ")"))) : t = "none", t
                        }
                    }, {
                        key: "toCss2Map",
                        value: function() {
                            return {
                                filter: this.toCssString()
                            }
                        }
                    },
                    {
                        key: "serialize",
                        value: function() {
                            return {
                                enabled: this.enabled,
                                blur: this.blur,
                                brightness: this.brightness,
                                contrast: this.contrast,
                                greyscale: this.greyscale,
                                hueRotate: this.hueRotate,
                                saturate: this.saturate,
                                sepia: this.sepia,
                                invert: this.invert
                            }
                        }
                    }, {
                        key: "clone",
                        value: function() {
                            return new t(this.serialize())
                        }
                    }, {
                        key: "multiply",
                        value: function(t) {
                            for (var e = 0; e < r.length; e++) {
                                var i = r[e].name;
                                webwave.isDef(this[i]) && (this[i] *= t)
                            }
                        }
                    }, {
                        key: "add",
                        value: function(t) {
                            for (var e = 0; e < r.length; e++) {
                                var i = r[e].name;
                                webwave.isDef(this[i]) &&
                                    webwave.isDef(t[i]) && (this[i] += t[i])
                            }
                        }
                    }, {
                        key: "subtract",
                        value: function(t) {
                            for (var e = 0; e < r.length; e++) {
                                var i = r[e].name;
                                webwave.isDef(this[i]) && webwave.isDef(t[i]) && (this[i] -= t[i])
                            }
                        }
                    }, {
                        key: "fillDefaultMissingValues",
                        value: function(t) {
                            for (var e = 0; e < r.length; e++) {
                                var i = r[e],
                                    n = r[e].name;
                                webwave.isDef(t[n]) && webwave.isNotDef(this[n]) && (this[n] = i.defaultValue)
                            }
                        }
                    }, {
                        key: "mergeStyle",
                        value: function(t) {
                            if (webwave.isDef(t.enabled) && (this.enabled = t.enabled), !0 === t.enabled)
                                for (var e = 0; e < r.length; e++) {
                                    var i = r[e].name;
                                    webwave.isDef(t[i]) && (this[i] = t[i])
                                }
                        }
                    }
                ], [{
                    key: "deserialize",
                    value: function(e) {
                        return new t(e)
                    }
                }, {
                    key: "readFromString",
                    value: function(e) {
                        for (var i = new t({
                                enabled: webwave.isStringAndNotEmpty(e)
                            }), n = 0; n < r.length; n++) {
                            var a = r[n],
                                s = e.match(a.regex);
                            if (null !== s) {
                                var o = parseFloat(s[1]);
                                !1 === isNaN(o) && (i[a.name] = o)
                            }
                        }
                        return i
                    }
                }, {
                    key: "createDefaultFilterData",
                    value: function() {
                        return new t({
                            blur: this.DEFAULT_BLUR_VALUE
                        })
                    }
                }]), t
            }();
        s.DEFAULT_BLUR_VALUE = 4.8
    },
    800: function(t, e, i) {
        i.d(e, "a", function() {
            return o
        });
        var n = i(0),
            a = i(1),
            r = i(199),
            s = 0,
            o = function() {
                function t(e) {
                    Object(n.a)(this, t), webwave.isNotDef(e) && (e = {}), this._id = s++, this._duration = webwave.isDef(e.duration) && webwave.isNumber(e.duration) ? e.duration : r.a.DEFAULT_ANIMATION_TIME, this._startTime = 0, this._currentTime = 0, this._progress = 0, this._started = !1, this._running = !1, this._finished = !1
                }
                return Object(a.a)(t, [{
                        key: "setStartTime",
                        value: function(t) {
                            this._startTime = t
                        }
                    }, {
                        key: "setCurrentTime",
                        value: function(t) {
                            this._currentTime = Math.min(t, this._duration), this._progress =
                                Math.min(this._currentTime / this._duration, 1)
                        }
                    }, {
                        key: "getProgress",
                        value: function() {
                            return this._progress
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function() {
                            return this._currentTime
                        }
                    }, {
                        key: "getCurrentProgress",
                        value: function() {
                            return this._progress
                        }
                    }, {
                        key: "getStartTime",
                        value: function() {
                            return this._startTime
                        }
                    }, {
                        key: "getDuration",
                        value: function() {
                            return this._duration
                        }
                    }, {
                        key: "start",
                        value: function(t) {
                            !1 === this._started && (this.setStartTime(t), this._started = !0, this._running = !0)
                        }
                    }, {
                        key: "isStarted",
                        value: function() {
                            return this._started
                        }
                    },
                    {
                        key: "isRunning",
                        value: function() {
                            return this._running
                        }
                    }, {
                        key: "isFinished",
                        value: function() {
                            return this._finished
                        }
                    }, {
                        key: "stop",
                        value: function(t) {
                            !1 === this._finished && (this._running = !1, this._finished = !0, !0 === t && this.finish())
                        }
                    }, {
                        key: "finish",
                        value: function() {}
                    }, {
                        key: "tick",
                        value: function(t) {}
                    }
                ]), t
            }()
    },
    827: function(t, e, i) {
        e.a = {
            SWING: "swing",
            LINEAR: "linear",
            EASE_IN: "ease-in",
            EASE_OUT: "ease-out",
            EASE_IN_OUT: "ease-in-out",
            BOUNCE_IN: "bounce-in",
            BOUNCE_OUT: "bounce-out",
            BOUNCE_IN_OUT: "bounce-in-out"
        }
    },
    83: function(t,
        e, i) {
        function n(t, e) {
            return (n = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }
        e.a = n
    },
    8782: function(t, e, i) {
        ! function(e, n) {
            t.exports = n(i(8786))
        }("undefined" != typeof self && self, function(t) {
            return function(t) {
                var e = {};

                function i(n) {
                    if (e[n]) return e[n].exports;
                    var a = e[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return t[n].call(a.exports, a, a.exports, i), a.l = !0, a.exports
                }
                return i.m = t, i.c = e, i.d = function(t, e, n) {
                    i.o(t, e) || Object.defineProperty(t, e, {
                        configurable: !1,
                        enumerable: !0,
                        get: n
                    })
                }, i.n = function(t) {
                    var e =
                        t && t.__esModule ? function() {
                            return t.default
                        } : function() {
                            return t
                        };
                    return i.d(e, "a", e), e
                }, i.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, i.p = "", i(i.s = 8)
            }([function(e, i) {
                    e.exports = t
                }, function(t, e, i) {
                    var n = i(2),
                        a = i(0),
                        r = i.n(a);
                    class s {
                        constructor(t) {
                            if (this.r = 0, this.g = 0, this.b = 0, this.a = 0, r.a.isString(t)) {
                                var e = Object(n.a)(t);
                                null !== e && (this.r = e[0], this.g = e[1], this.b = e[2], this.a = e[3])
                            } else r.a.isDef(t) && (r.a.isNumberAndNotNaN(t.r) && (this.r = t.r), r.a.isNumberAndNotNaN(t.g) && (this.g =
                                t.g), r.a.isNumberAndNotNaN(t.b) && (this.b = t.b), r.a.isNumberAndNotNaN(t.a) && (this.a = t.a))
                        }
                        toRgbaString() {
                            return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")"
                        }
                        toRgbString() {
                            return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
                        }
                        subtract(t) {
                            return this.r -= t.r, this.g -= t.g, this.b -= t.b, this.a -= t.a, this
                        }
                        add(t) {
                            return this.r += t.r, this.g += t.g, this.b += t.b, this.a += t.a, this
                        }
                        multiply(t) {
                            return this.r = Math.round(this.r * t), this.g = Math.round(this.g * t), this.b = Math.round(this.b * t), this.multiplyAlpha(t), this
                        }
                        multiplyAlpha(t) {
                            this.a *=
                                t
                        }
                        clone() {
                            return new s(this)
                        }
                        static rgb2hex(t) {
                            return r.a.isNotString(t) ? t = "#000000" : -1 != t.indexOf("#") ? t : null != (t = t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)) ? "#" + s._hex(t[1]) + s._hex(t[2]) + s._hex(t[3]) : ""
                        }
                        static hex2rgb(t) {
                            if (r.a.isNotString(t)) return "rgb(0, 0, 0)";
                            let e = 0,
                                i = 0,
                                n = 0;
                            return 4 == t.length ? (e = "0x" + t[1] + t[1], i = "0x" + t[2] + t[2], n = "0x" + t[3] + t[3]) : 7 == t.length && (e = "0x" + t[1] + t[2], i = "0x" + t[3] + t[4], n = "0x" + t[5] + t[6]), "rgb(" + +e + ", " + +i + ", " + +n + ")"
                        }
                        static hex2Rgba(t, e) {
                            var i = (t = t.slice(-6)).slice(0,
                                    2),
                                n = t.slice(2, 4),
                                a = t.slice(4);
                            return "rgba(" + parseInt(i, 16) + "," + parseInt(n, 16) + "," + parseInt(a, 16) + "," + e + ")"
                        }
                        static hex2RgbObject(t) {
                            return t = t.slice(-6), {
                                r: parseInt(t.slice(0, 2), 16),
                                g: parseInt(t.slice(2, 4), 16),
                                b: parseInt(t.slice(4), 16)
                            }
                        }
                        static isHex(t) {
                            return /^#[0-9A-F]{3,6}$/i.test(t)
                        }
                        static isRgba(t) {
                            return /^rgba\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/.test(t)
                        }
                        static isRgb(t) {
                            return /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/.test(t)
                        }
                        static rgb2hsl(t) {
                            if (r.a.isNotString(t)) return {
                                H: 0,
                                S: 0,
                                L: 0
                            };
                            "#" === t[0] && (t = this.hex2rgb(t));
                            let e, i = 0,
                                n = 0,
                                a = 0;
                            i = (e = t.slice(4, -1).split(",").map(t => +t))[0], n = e[1], a = e[2], i /= 255, n /= 255, a /= 255;
                            const s = Math.max(i, n, a),
                                o = s - Math.min(i, n, a),
                                l = o ? s === i ? (n - a) / o : s === n ? 2 + (a - i) / o : 4 + (i - n) / o : 0;
                            return {
                                H: 60 * l < 0 ? 60 * l + 360 : 60 * l,
                                S: 100 * (o ? s <= .5 ? o / (2 * s - o) : o / (2 - (2 * s - o)) : 0),
                                L: 100 * (2 * s - o) / 2
                            }
                        }
                        invert() {
                            this.r = 255 - this.r, this.g = 255 - this.g, this.b = 255 - this.b
                        }
                        static _hex(t) {
                            return null !== t ? ("0" + parseInt(t).toString(16)).slice(-2) : "00"
                        }
                        randomizeColor() {
                            this.r = Math.floor(255 * Math.random()),
                                this.g = Math.floor(255 * Math.random()), this.b = Math.floor(255 * Math.random()), this.a = 1
                        }
                        static rgba2Rgb(t) {
                            let e = t.replace(/[^\d,]/g, "").split(",");
                            return `rgb(${e[0]}, ${e[1]}, ${e[2]})`
                        }
                        static obtainRgbValue(t) {
                            let e;
                            return e = s.isHex(t) ? s.hex2rgb(t) : s.isRgba(t) ? s.rgba2Rgb(t) : t
                        }
                        static obtainHexValue(t) {
                            let e;
                            if (s.isRgb(t)) e = s.rgb2hex(t);
                            else if (s.isRgba(t)) {
                                let i = s.rgba2Rgb(t);
                                e = s.rgb2hex(i)
                            } else e = t;
                            return e
                        }
                    }
                    e.a = s
                }, function(t, i, n) {
                    (function(t) {
                        n.d(i, "a", function() {
                            return h
                        });
                        var a = {
                            transparent: [0, 0,
                                0, 0
                            ],
                            aliceblue: [240, 248, 255, 1],
                            antiquewhite: [250, 235, 215, 1],
                            aqua: [0, 255, 255, 1],
                            aquamarine: [127, 255, 212, 1],
                            azure: [240, 255, 255, 1],
                            beige: [245, 245, 220, 1],
                            bisque: [255, 228, 196, 1],
                            black: [0, 0, 0, 1],
                            blanchedalmond: [255, 235, 205, 1],
                            blue: [0, 0, 255, 1],
                            blueviolet: [138, 43, 226, 1],
                            brown: [165, 42, 42, 1],
                            burlywood: [222, 184, 135, 1],
                            cadetblue: [95, 158, 160, 1],
                            chartreuse: [127, 255, 0, 1],
                            chocolate: [210, 105, 30, 1],
                            coral: [255, 127, 80, 1],
                            cornflowerblue: [100, 149, 237, 1],
                            cornsilk: [255, 248, 220, 1],
                            crimson: [220, 20, 60, 1],
                            cyan: [0, 255, 255, 1],
                            darkblue: [0, 0, 139, 1],
                            darkcyan: [0, 139, 139, 1],
                            darkgoldenrod: [184, 134, 11, 1],
                            darkgray: [169, 169, 169, 1],
                            darkgreen: [0, 100, 0, 1],
                            darkgrey: [169, 169, 169, 1],
                            darkkhaki: [189, 183, 107, 1],
                            darkmagenta: [139, 0, 139, 1],
                            darkolivegreen: [85, 107, 47, 1],
                            darkorange: [255, 140, 0, 1],
                            darkorchid: [153, 50, 204, 1],
                            darkred: [139, 0, 0, 1],
                            darksalmon: [233, 150, 122, 1],
                            darkseagreen: [143, 188, 143, 1],
                            darkslateblue: [72, 61, 139, 1],
                            darkslategray: [47, 79, 79, 1],
                            darkslategrey: [47, 79, 79, 1],
                            darkturquoise: [0, 206, 209, 1],
                            darkviolet: [148, 0, 211, 1],
                            deeppink: [255,
                                20, 147, 1
                            ],
                            deepskyblue: [0, 191, 255, 1],
                            dimgray: [105, 105, 105, 1],
                            dimgrey: [105, 105, 105, 1],
                            dodgerblue: [30, 144, 255, 1],
                            firebrick: [178, 34, 34, 1],
                            floralwhite: [255, 250, 240, 1],
                            forestgreen: [34, 139, 34, 1],
                            fuchsia: [255, 0, 255, 1],
                            gainsboro: [220, 220, 220, 1],
                            ghostwhite: [248, 248, 255, 1],
                            gold: [255, 215, 0, 1],
                            goldenrod: [218, 165, 32, 1],
                            gray: [128, 128, 128, 1],
                            green: [0, 128, 0, 1],
                            greenyellow: [173, 255, 47, 1],
                            grey: [128, 128, 128, 1],
                            honeydew: [240, 255, 240, 1],
                            hotpink: [255, 105, 180, 1],
                            indianred: [205, 92, 92, 1],
                            indigo: [75, 0, 130, 1],
                            ivory: [255, 255,
                                240, 1
                            ],
                            khaki: [240, 230, 140, 1],
                            lavender: [230, 230, 250, 1],
                            lavenderblush: [255, 240, 245, 1],
                            lawngreen: [124, 252, 0, 1],
                            lemonchiffon: [255, 250, 205, 1],
                            lightblue: [173, 216, 230, 1],
                            lightcoral: [240, 128, 128, 1],
                            lightcyan: [224, 255, 255, 1],
                            lightgoldenrodyellow: [250, 250, 210, 1],
                            lightgray: [211, 211, 211, 1],
                            lightgreen: [144, 238, 144, 1],
                            lightgrey: [211, 211, 211, 1],
                            lightpink: [255, 182, 193, 1],
                            lightsalmon: [255, 160, 122, 1],
                            lightseagreen: [32, 178, 170, 1],
                            lightskyblue: [135, 206, 250, 1],
                            lightslategray: [119, 136, 153, 1],
                            lightslategrey: [119, 136, 153,
                                1
                            ],
                            lightsteelblue: [176, 196, 222, 1],
                            lightyellow: [255, 255, 224, 1],
                            lime: [0, 255, 0, 1],
                            limegreen: [50, 205, 50, 1],
                            linen: [250, 240, 230, 1],
                            magenta: [255, 0, 255, 1],
                            maroon: [128, 0, 0, 1],
                            mediumaquamarine: [102, 205, 170, 1],
                            mediumblue: [0, 0, 205, 1],
                            mediumorchid: [186, 85, 211, 1],
                            mediumpurple: [147, 112, 219, 1],
                            mediumseagreen: [60, 179, 113, 1],
                            mediumslateblue: [123, 104, 238, 1],
                            mediumspringgreen: [0, 250, 154, 1],
                            mediumturquoise: [72, 209, 204, 1],
                            mediumvioletred: [199, 21, 133, 1],
                            midnightblue: [25, 25, 112, 1],
                            mintcream: [245, 255, 250, 1],
                            mistyrose: [255,
                                228, 225, 1
                            ],
                            moccasin: [255, 228, 181, 1],
                            navajowhite: [255, 222, 173, 1],
                            navy: [0, 0, 128, 1],
                            oldlace: [253, 245, 230, 1],
                            olive: [128, 128, 0, 1],
                            olivedrab: [107, 142, 35, 1],
                            orange: [255, 165, 0, 1],
                            orangered: [255, 69, 0, 1],
                            orchid: [218, 112, 214, 1],
                            palegoldenrod: [238, 232, 170, 1],
                            palegreen: [152, 251, 152, 1],
                            paleturquoise: [175, 238, 238, 1],
                            palevioletred: [219, 112, 147, 1],
                            papayawhip: [255, 239, 213, 1],
                            peachpuff: [255, 218, 185, 1],
                            peru: [205, 133, 63, 1],
                            pink: [255, 192, 203, 1],
                            plum: [221, 160, 221, 1],
                            powderblue: [176, 224, 230, 1],
                            purple: [128, 0, 128, 1],
                            rebeccapurple: [102,
                                51, 153, 1
                            ],
                            red: [255, 0, 0, 1],
                            rosybrown: [188, 143, 143, 1],
                            royalblue: [65, 105, 225, 1],
                            saddlebrown: [139, 69, 19, 1],
                            salmon: [250, 128, 114, 1],
                            sandybrown: [244, 164, 96, 1],
                            seagreen: [46, 139, 87, 1],
                            seashell: [255, 245, 238, 1],
                            sienna: [160, 82, 45, 1],
                            silver: [192, 192, 192, 1],
                            skyblue: [135, 206, 235, 1],
                            slateblue: [106, 90, 205, 1],
                            slategray: [112, 128, 144, 1],
                            slategrey: [112, 128, 144, 1],
                            snow: [255, 250, 250, 1],
                            springgreen: [0, 255, 127, 1],
                            steelblue: [70, 130, 180, 1],
                            tan: [210, 180, 140, 1],
                            teal: [0, 128, 128, 1],
                            thistle: [216, 191, 216, 1],
                            tomato: [255, 99, 71, 1],
                            turquoise: [64, 224, 208, 1],
                            violet: [238, 130, 238, 1],
                            wheat: [245, 222, 179, 1],
                            white: [255, 255, 255, 1],
                            whitesmoke: [245, 245, 245, 1],
                            yellow: [255, 255, 0, 1],
                            yellowgreen: [154, 205, 50, 1]
                        };

                        function r(t) {
                            return (t = Math.round(t)) < 0 ? 0 : t > 255 ? 255 : t
                        }

                        function s(t) {
                            return t < 0 ? 0 : t > 1 ? 1 : t
                        }

                        function o(t) {
                            return "%" === t[t.length - 1] ? r(parseFloat(t) / 100 * 255) : r(parseInt(t))
                        }

                        function l(t) {
                            return "%" === t[t.length - 1] ? s(parseFloat(t) / 100) : s(parseFloat(t))
                        }

                        function u(t, e, i) {
                            return i < 0 ? i += 1 : i > 1 && (i -= 1), 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) *
                                (2 / 3 - i) * 6 : t
                        }

                        function h(t) {
                            var e, i = t.replace(/ /g, "").toLowerCase();
                            if (i in a) return a[i].slice();
                            if ("#" === i[0]) return 4 === i.length ? (e = parseInt(i.substr(1), 16)) >= 0 && e <= 4095 ? [(3840 & e) >> 4 | (3840 & e) >> 8, 240 & e | (240 & e) >> 4, 15 & e | (15 & e) << 4, 1] : null : 7 === i.length && (e = parseInt(i.substr(1), 16)) >= 0 && e <= 16777215 ? [(16711680 & e) >> 16, (65280 & e) >> 8, 255 & e, 1] : null;
                            var n = i.indexOf("("),
                                s = i.indexOf(")");
                            if (-1 !== n && s + 1 === i.length) {
                                var h, c, p, d, f, g = i.substr(0, n),
                                    m = i.substr(n + 1, s - (n + 1)).split(","),
                                    v = 1;
                                switch (g) {
                                    case "rgba":
                                        if (4 !==
                                            m.length) return null;
                                        v = l(m.pop());
                                    case "rgb":
                                        return 3 !== m.length ? null : [o(m[0]), o(m[1]), o(m[2]), v];
                                    case "hsla":
                                        if (4 !== m.length) return null;
                                        v = l(m.pop());
                                    case "hsl":
                                        return 3 !== m.length ? null : (h = (parseFloat(m[0]) % 360 + 360) % 360 / 360, c = l(m[1]), [r(255 * u(d = 2 * (p = l(m[2])) - (f = p <= .5 ? p * (c + 1) : p + c - p * c), f, h + 1 / 3)), r(255 * u(d, f, h)), r(255 * u(d, f, h - 1 / 3)), v]);
                                    default:
                                        return null
                                }
                            }
                            return null
                        }
                        void 0 !== t && t.exports && (e.parseCSSColor = h)
                    }).call(i, n(11)(t))
                }, function(t, e, i) {
                    e.a = {
                        TOP: "top",
                        TOP_RIGHT: "topRight",
                        RIGHT: "right",
                        BOTTOM_RIGHT: "bottomRight",
                        BOTTOM: "bottom",
                        BOTTOM_LEFT: "bottomLeft",
                        LEFT: "left",
                        TOP_LEFT: "topLeft",
                        CENTER: "center"
                    }
                }, function(t, e, i) {
                    e.a = {
                        TEST: "test",
                        DEVELOPMENT: "development",
                        PRE_PRODUCTION: "pre_production",
                        QUALITY_ASSURANCE: "quality_assurance",
                        PRODUCTION: "production"
                    }
                }, function(t, e, i) {
                    e.a = {
                        FLOAT: "float",
                        INT: "int"
                    }
                }, function(t, e, i) {
                    var n = i(0),
                        a = i.n(n);
                    class r {
                        constructor(t, e) {
                            this.y = 0, this.x = 0, a.a.isNumberAndNotNaN(t) ? (this.x = t, a.a.isNumberAndNotNaN(e) && (this.y = e)) : a.a.isDef(t) && (a.a.isNumberAndNotNaN(t.x) && (this.x = t.x), a.a.isNumberAndNotNaN(t.y) &&
                                (this.y = t.y))
                        }
                        getX() {
                            return this.x
                        }
                        setX(t) {
                            this.x = t
                        }
                        getY() {
                            return this.y
                        }
                        setY(t) {
                            this.y = t
                        }
                        subtract(t) {
                            return this.x -= t.x, this.y -= t.y, this
                        }
                        add(t) {
                            return this.x += t.x, this.y += t.y, this
                        }
                        multiply(t) {
                            return this.x *= t, this.y *= t, this
                        }
                        serialize() {
                            return {
                                x: this.x,
                                y: this.y
                            }
                        }
                        clone() {
                            return new r({
                                x: this.x,
                                y: this.y
                            })
                        }
                        equals(t) {
                            return this.x === t.x && this.y === t.y
                        }
                        lt(t) {
                            return this.x < t.x && this.y < t.y
                        }
                        lte(t) {
                            return this.x <= t.x && this.y <= t.y
                        }
                        gt(t) {
                            return this.x > t.x && this.y > t.y
                        }
                        gte(t) {
                            return this.x >= t.x && this.y >= t.y
                        }
                        toString() {
                            return `{${this.x},${this.y}}}`
                        }
                        static deserialize(t) {
                            return a.a.isNotDef(t) ?
                                new r(0, 0) : new r(t.x, t.y)
                        }
                        static countDistance(t, e) {
                            return Math.sqrt(Math.abs(t.getX() - e.getX()) * Math.abs(t.getY() - e.getY()))
                        }
                    }
                    e.a = r
                }, function(t, e, i) {
                    e.a = {
                        NO_BREAK_SPACE: /\u00a0/g,
                        ONLY_LETTERS: /[a-zA-Z]/g
                    }
                }, function(t, e, i) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var n = i(9),
                        a = i(10),
                        r = i(1),
                        s = i(12),
                        o = i(13),
                        l = i(14),
                        u = i(15),
                        h = i(3),
                        c = i(16),
                        p = i(4),
                        d = i(17),
                        f = i(18),
                        g = i(19),
                        m = i(20),
                        v = i(21),
                        _ = i(22),
                        y = i(23),
                        b = i(24),
                        w = i(6),
                        x = i(7),
                        O = i(25),
                        T = i(26),
                        N = i(27),
                        S = i(5),
                        R = i(28),
                        k = i(32),
                        P = i(33),
                        D = i(2);
                    i.d(e, "Color",
                            function() {
                                return r.a
                            }), i.d(e, "ColorUtils", function() {
                            return s.a
                        }), i.d(e, "DateUtils", function() {
                            return o.a
                        }), i.d(e, "DecimalSeparators", function() {
                            return l.a
                        }), i.d(e, "DelayedThrottler", function() {
                            return u.a
                        }), i.d(e, "Direction2D", function() {
                            return h.a
                        }), i.d(e, "EnumUtils", function() {
                            return n
                        }), i.d(e, "Environment", function() {
                            return c.a
                        }), i.d(e, "Environments", function() {
                            return p.a
                        }), i.d(e, "FileUtils", function() {
                            return d.a
                        }), i.d(e, "IconsNamesReferences", function() {
                            return f.a
                        }), i.d(e, "InputUtils", function() {
                            return g.a
                        }),
                        i.d(e, "KeyBindings", function() {
                            return m.a
                        }), i.d(e, "KeyCodes", function() {
                            return v.a
                        }), i.d(e, "MobileUtils", function() {
                            return _.a
                        }), i.d(e, "ObjectUtils", function() {
                            return y.a
                        }), i.d(e, "Orientation2D", function() {
                            return b.a
                        }), i.d(e, "parseCSSColor", function() {
                            return D.a
                        }), i.d(e, "Point2D", function() {
                            return w.a
                        }), i.d(e, "RegexTypes", function() {
                            return x.a
                        }), i.d(e, "Resize", function() {
                            return O.a
                        }), i.d(e, "SingleActionThrottler", function() {
                            return T.a
                        }), i.d(e, "Size2D", function() {
                            return N.a
                        }), i.d(e, "SliderInputReturnTypes",
                            function() {
                                return S.a
                            }), i.d(e, "StringUtils", function() {
                            return R.a
                        }), i.d(e, "TranslationPrefix", function() {
                            return a
                        }), i.d(e, "VariableUtils", function() {
                            return k.a
                        }), i.d(e, "VueUtils", function() {
                            return P.a
                        })
                }, function(t, e, i) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    e.AUTO_SORTING = "autoSorting";
                    e.addTranslationSorting = t => {
                        Object.defineProperty(t, "autoSorting", {
                            value: !0,
                            enumerable: !1
                        })
                    }
                }, function(t, e, i) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var n = i(0),
                        a = i.n(n);
                    e.TRANSLATION_PREFIX_KEY =
                        "_translationPrefix";
                    e.TRANSLATION_SUFFIX_KEY = "_translationSuffix";
                    e.addTranslationPrefix = (t, e, i) => {
                        Object.defineProperty(t, "_translationPrefix", {
                            value: e,
                            enumerable: !1
                        }), a.a.isDefAndNotNull(i) && Object.defineProperty(t, "_translationSuffix", {
                            value: i,
                            enumerable: !1
                        })
                    };
                    e.translateEnumValue = (t, e, i) => a.a.isDefAndNotNull(i) && i18n.exists(`${t._translationPrefix}.${e}.${i}`) ? i18n.t(`${t._translationPrefix}.${e}.${i}`) : i18n.t(`${t._translationPrefix}.${e}`)
                }, function(t, e) {
                    t.exports = function(t) {
                        if (!t.webpackPolyfill) {
                            var e =
                                Object.create(t);
                            e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                                enumerable: !0,
                                get: function() {
                                    return e.l
                                }
                            }), Object.defineProperty(e, "id", {
                                enumerable: !0,
                                get: function() {
                                    return e.i
                                }
                            }), Object.defineProperty(e, "exports", {
                                enumerable: !0
                            }), e.webpackPolyfill = 1
                        }
                        return e
                    }
                }, function(t, e, i) {
                    var n = i(1),
                        a = i(0),
                        r = i.n(a);
                    class s {
                        static rgbaOrRgb2hexAndOpacity(t) {
                            let e, i, n, a = {
                                    hex: "#000000",
                                    opacity: 1
                                },
                                s = function(t) {
                                    let e = parseInt(t);
                                    return isNaN(e) ? "00" : (e = Math.max(e, 0), 1 === (e = (e = Math.min(e, 255)).toString(16)).length ?
                                        "0" + e : e)
                                };
                            return r.a.isString(t) && ("transparent" === t && (a.opacity = 0), t.startsWith("rgba") ? (e = /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d|\d\.\d*)\)/, (i = t.match(e)) && 5 === i.length && (a.hex = "#" + s(i[1]) + s(i[2]) + s(i[3]), n = parseFloat(i[4]), n = Math.max(n, 0), n = Math.min(n, 1), a.opacity = n)) : t.startsWith("rgb") && (e = /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/, (i = t.match(e)) && 4 === i.length && (a.hex = "#" + s(i[1]) + s(i[2]) + s(i[3]), a.opacity = 1))), a
                        }
                        static isTransparent(t) {
                            return "transparent" ===
                                t || 0 === s.rgbaOrRgb2hexAndOpacity(t).opacity
                        }
                        static isTransparentOrSomeLevelOfTransparency(t) {
                            return "transparent" === t || s.rgbaOrRgb2hexAndOpacity(t).opacity < 1
                        }
                        static rgbObjectAndOpacityToRgbaString(t, e) {
                            return "rgba(" + t.r + "," + t.g + "," + t.b + "," + e + ")"
                        }
                        static rgbAndOpacityToRgba(t, e) {
                            let i, n, a;
                            return r.a.isNotString(t) && (t = "rgb(0,0,0)"), r.a.isNumberAndNotNaN(e) || (e = 1), i = /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/, (n = t.match(i)) && 4 === n.length ? (a = {
                                r: parseInt(n[1], 10),
                                g: parseInt(n[2], 10),
                                b: parseInt(n[3],
                                    10)
                            }, s.rgbObjectAndOpacityToRgbaString(a, e)) : "rgba(0,0,0,1)"
                        }
                        static isColorStartWithRgbPhrase(t) {
                            return s.isColorStartWithAnyOfPhrase(t, ["rgb"])
                        }
                        static isColorStartWithVarPhrase(t) {
                            return s.isColorStartWithAnyOfPhrase(t, ["var"])
                        }
                        static isColorStartWithAnyOfPhrase(t, e) {
                            return e.some(e => t.startsWith(e))
                        }
                        static isValueContainGradientOrIconPhrase(t) {
                            return t.indexOf("gradient") > -1 || s.isValueContainsIconPhrase(t)
                        }
                        static isValueContainsIconPhrase(t) {
                            return t.indexOf("ww_icon") > -1
                        }
                        static checkIfColorSame(t,
                            e) {
                            let i = !1;
                            if (r.a.isDefAndNotNull(t) && r.a.isDefAndNotNull(e)) {
                                var a, s;
                                let r, o;
                                if (n.a.isRgba(t)) r = t;
                                else {
                                    let e = t.replace(/[^\d,]/g, "").split(",");
                                    r = `rgba(${e[0]}, ${e[1]}, ${e[2]}, 1)`
                                }
                                if (n.a.isRgba(e)) o = e;
                                else {
                                    let t = e.replace(/[^\d,]/g, "").split(",");
                                    o = `rgba(${t[0]}, ${t[1]}, ${t[2]}, 1)`
                                }
                                i = (null == (a = r) ? void 0 : a.replace(/\s/g, "")) === (null == (s = o) ? void 0 : s.replace(/\s/g, ""))
                            }
                            return i
                        }
                        static generateRgbRandomColor() {
                            return `rgb(${`${s.generateRandomColor(0,255)}`}, ${`${s.generateRandomColor(0,255)}`}, ${`${s.generateRandomColor(0,
255)}`})`
                        }
                        static generateRandomColor(t, e) {
                            return Math.round(Math.random() * (e - t) + t)
                        }
                    }
                    e.a = s
                }, function(t, e, i) {
                    const n = (t, e) => `${1E15+t}`.slice(-e);
                    class a {
                        static getMonthNameByLanguage(t, e) {
                            void 0 === e && (e = i18n.lng);
                            let i, n = `months.${t}`;
                            return i = i18n.exists(n, {
                                lng: e
                            }) ? i18n.t(n, {
                                lng: e
                            }) : i18n.t(n, {
                                lng: "en"
                            })
                        }
                        static dateToString(t, e, i) {
                            let r, s = t.getDate(),
                                o = t.getMonth() + 1,
                                l = t.getFullYear(),
                                u = n(t.getFullYear(), 2),
                                h = t.getHours(),
                                c = t.getMinutes(),
                                p = t.getSeconds(),
                                d = t.getMilliseconds();
                            switch (e) {
                                case "dd/mm/yyyy":
                                    r =
                                        `${n(s,2)}/${n(o,2)}/${l}`;
                                    break;
                                case "dd.mm.yyyy":
                                    r = `${n(s,2)}.${n(o,2)}.${l}`;
                                    break;
                                case "dd/mm/yy":
                                    r = `${n(s,2)}/${n(o,2)}/${u}`;
                                    break;
                                case "yyyy/mm/dd":
                                    r = `${l}/${n(o,2)}/${n(s,2)}`;
                                    break;
                                case "yy/mm/dd":
                                    r = `${u}/${n(o,2)}/${n(s,2)}`;
                                    break;
                                case "d mmmm yyyy":
                                    r = `${s} ${a.getMonthNameByLanguage(o,i)} ${l}`;
                                    break;
                                case "dd mmmm yyyy":
                                    r = `${n(s,2)} ${a.getMonthNameByLanguage(o,i)} ${l}`;
                                    break;
                                case "dd.mm.yyyy hh:mm":
                                    r = `${n(s,2)}.${n(o,2)}.${l} ${n(h,2)}:${n(c,2)}`;
                                    break;
                                case "dd-mm-yyyy":
                                    r = `${n(s,2)}-${n(o,
2)}-${l}`;
                                    break;
                                case a.availableFormats.DATA_RANGE_FILTER_DATE_FORMAT:
                                    r = `${l}-${n(o,2)}-${n(s,2)}`;
                                    break;
                                case a.availableFormats.DATE_PICKER_DATE_TIME_FORMAT:
                                    r = `${n(s,2)}-${n(o,2)}-${l} ${n(h,2)}:${n(c,2)}`;
                                    break;
                                case a.availableFormats.INPUT_DATE_TIME_FORMAT:
                                    r = `${l}-${n(o,2)}-${n(s,2)}T${n(h,2)}:${n(c,2)}`;
                                    break;
                                case a.availableFormats.ISO_8601_FORMAT:
                                    r = `${l}-${n(o,2)}-${n(s,2)}T${n(h,2)}:${n(c,2)}:${n(p,2)}Z`;
                                    break;
                                case a.availableFormats.yyyymmdd:
                                    r = l + n(o, 2) + n(s, 2);
                                    break;
                                case a.availableFormats.WERBWAVE_BACKEND_BINDING:
                                    r =
                                        `${l}-${n(o,2)}-${n(s,2)} ${n(h,2)}:${n(c,2)}:${n(p,2)}.${n(d,2)}`;
                                    break;
                                case a.availableFormats.FULL_TIME:
                                    r = `${n(h,2)}:${n(c,2)}:${n(p,2)}`;
                                    break;
                                case a.availableFormats.STORE_ORDER_DATE:
                                    r = `${l}-${n(o,2)}-${n(s,2)} ${n(h,2)}:${n(c,2)}`;
                                    break;
                                default:
                                    console.error(`Nieznany format daty! ('${e}')`), r = `${s}/${o}/${l}`
                            }
                            return r
                        }
                        static isValidDate(t) {
                            return "[object Date]" === Object.prototype.toString.call(t) && !isNaN(t.getTime())
                        }
                        static convertTwoDigitYearToFull(t) {
                            let e = a.getNowDateYear(),
                                i = 100 * Math.floor(e /
                                    100) + t;
                            return i < e && (i += 100), i
                        }
                        static convertYearToClosestCentury(t) {
                            let e = a.getNowDateYear();
                            if (t < 100) {
                                let i = 100 * Math.floor(e / 100),
                                    n = i + t,
                                    a = i + t - 100,
                                    r = i + t + 100;
                                t = Math.abs(e - r) < Math.abs(e - n) ? r : Math.abs(e - n) < Math.abs(e - a) ? n : a
                            } else if (t < 1E3) {
                                let i = 10 * t,
                                    n = 1E3 * Math.floor(e / 1E3) + t - 1E3;
                                t = Math.abs(e - i) < Math.abs(e - n) ? i : n
                            }
                            return t
                        }
                        static getNowDateYear() {
                            return (new Date).getFullYear()
                        }
                        static daysBetween(t, e) {
                            let i = Math.abs(t - e);
                            return Math.round(i / 864E5)
                        }
                        static dateIsGreaterThenNow(t) {
                            return t > new Date
                        }
                        static getBeginOfTheDay(t) {
                            return t.setHours(0),
                                t.setMinutes(0), t.setSeconds(0), t
                        }
                        static getEndOfTheDay(t) {
                            return t.setHours(23), t.setMinutes(59), t.setSeconds(59), t
                        }
                        static stringToDate(t, e, i) {
                            var n, r;
                            let s, o, l, u, h, c, p, d;
                            switch (e) {
                                case "dd-mm-yyyy":
                                    s = (p = t.split("-"))[0], o = p[1], l = a.convertYearToClosestCentury(parseInt(p[2]));
                                    break;
                                case a.availableFormats.DATE_PICKER_DATE_TIME_FORMAT:
                                    s = (p = null == (n = (c = t.split(" "))[0]) ? void 0 : n.split("-"))[0], o = p[1], l = a.convertYearToClosestCentury(parseInt(p[2])), (d = null == (r = c[1]) ? void 0 : r.split(":")) && (u = d[0], h = d[1])
                            }
                            return u &&
                                h ? new Date(l, o - 1, s, u, h) : new Date(l, o - 1, s)
                        }
                    }
                    e.a = a, a.availableFormats = {
                        "dd/mm/yyyy": "dd/mm/yyyy",
                        "dd/mm/yy": "dd/mm/yy",
                        "yyyy/mm/dd": "yyyy/mm/dd",
                        "yy/mm/dd": "yy/mm/dd",
                        "d mmmm yyyy": "d mmmm yyyy",
                        "dd mmmm yyyy": "dd mmmm yyyy",
                        "dd.mm.yyyy hh:mm": "dd.mm.yyyy hh:mm",
                        "dd-mm-yyyy": "dd-mm-yyyy",
                        DATE_PICKER_DATE_TIME_FORMAT: "dd-mm-yyyy hh:mm",
                        WERBWAVE_BACKEND_BINDING: "yyyy-MM-dd HH:mm:ss.S",
                        STORE_ORDER_DATE: "yyyy-MM-dd HH:mm",
                        yyyymmdd: "yyyymmdd",
                        FULL_TIME: "HH:mm:ss",
                        INPUT_DATE_TIME_FORMAT: "yyyy-mm-ddTHH:mm",
                        ISO_8601_FORMAT: "yyyy-mm-ddTHH:mm:ss",
                        DATA_RANGE_FILTER_DATE_FORMAT: "yyyy-mm-dd"
                    }
                }, function(t, e, i) {
                    e.a = Object.freeze({
                        DEFAULT: "",
                        DOT: ".",
                        COMMA: ",",
                        EMPTY: ""
                    })
                }, function(t, e, i) {
                    var n = i(0),
                        a = i.n(n);
                    const r = 300;
                    e.a = class {
                        constructor() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this._delay = a.a.isNumberAndNotNaN(t.delay) && t.delay > 0 ? t.delay : r, this._handler = null, this._caller = null, this._args = void 0, this._timeout = void 0
                        }
                        _runFunc(t, e, i) {}
                        _onDelayFinish() {
                            a.a.isFunction(this._handler) && this._handler.apply(this._caller,
                                this._args)
                        }
                        throttleRun(t, e, i) {
                            window.clearTimeout(this._timeout), this._timeout = void 0, this._handler = t, this._caller = e, this._args = i, this._timeout = window.setTimeout(this._onDelayFinish.bind(this), this._delay)
                        }
                        isWaiting() {
                            return a.a.isDefAndNotNull(this._timeout)
                        }
                    }
                }, function(t, e, i) {
                    var n = i(4),
                        a = i(0),
                        r = i.n(a);
                    let s;
                    class o {
                        static readEnv() {
                            if (r.a.isDef(window.config) && r.a.isDef(window.config.environment))
                                for (let t in n.a)
                                    if (n.a.hasOwnProperty(t) && n.a[t] === window.config.environment) return void(s = n.a[t]);
                            s = n.a.PRODUCTION
                        }
                        static getCurrent() {
                            return s
                        }
                        static isDevelopment() {
                            return s === n.a.DEVELOPMENT
                        }
                        static isNotDevelopment() {
                            return s !== n.a.DEVELOPMENT
                        }
                        static isProduction() {
                            return s === n.a.PRODUCTION
                        }
                        static isNotProduction() {
                            return s !== n.a.PRODUCTION
                        }
                        static isTest() {
                            return s === n.a.TEST
                        }
                        static isNotTest() {
                            return s !== n.a.TEST
                        }
                        static isQA() {
                            return s === n.a.PRE_PRODUCTION
                        }
                        static setEnvironment(t) {
                            r.a.isValidEnumValue(t, n.a) && (s = t)
                        }
                    }
                    e.a = o, o.readEnv()
                }, function(t, e, i) {
                    var n = i(0);
                    i.n(n);
                    e.a = class {
                        static async urlToFile(t,
                            e, i) {
                            try {
                                if (!t || "" === t.trim()) return null;
                                let n = await fetch(t);
                                if (!n.ok) return null;
                                let a = await n.blob();
                                return a && 0 !== a.size ? new File([a], e, {
                                    type: i
                                }) : null
                            } catch (t) {
                                return webwave.error("Error converting URL to file:", t), null
                            }
                        }
                    }
                }, function(t, e, i) {
                    e.a = {
                        AddSection: "wsection-icon",
                        a: "link-style-text-icon",
                        a_hover: "text_format_black_24dp_2",
                        addNews: "newPageIcon",
                        addSectionAboveIcon: "plus-icon-2",
                        addSectionBelowIcon: "plus-icon-2",
                        aiIcon: "AI_icon",
                        aiText: "ai-icon",
                        alignBottom: "align-vertical-bottom-icon",
                        alignCenter: "align-horizontal-center-icon",
                        alignHorizontal: "horizontal-distribute-icon",
                        alignLeft: "align-horizontal-left-icon",
                        alignMiddle: "align-vertical-center-icon",
                        alignRight: "align-horizontal-right",
                        alignTop: "align-vertical-top-icon",
                        alignVertical: "vertical-distribute-icon",
                        banner_premium: "premium-icon",
                        bindwobjects: "bind-icon",
                        button: "button-tool-icon",
                        carousel: "carousel-tool-icon",
                        changeProduct: "refresh-icon",
                        changestate: "auto_awesome-icon",
                        commentColored: "chat-outline-icon",
                        contextboxIconSymbol: "settings-tool-icon",
                        copy: "content-copy-icon",
                        copystyle: "content-copy-style-icon",
                        counter: "counter-tool-icon",
                        cut: "content-cut-icon",
                        date: "date-tool-icon",
                        defaultText: "text-menu-tool-icon",
                        delete: "deleteIcon",
                        deltaIndicatorNegativeRange: "arrow-downward-icon",
                        deltaIndicatorPositiveRange: "arrow-upward-icon",
                        duplicate: "content-duplicate",
                        edit: "edit-icon",
                        editOutline: "edit-icon-outline",
                        editProduct: "shop-add-product-icon",
                        editlink: "link-icon",
                        form: "tollbar-form-icon2",
                        gallery: "gallery-icon",
                        googleMaps: "map-tool-icon",
                        group: "groupIcon",
                        h1: "h1-style-text-headline-icon",
                        h2: "h2-style-text-headline-icon",
                        h3: "h3-style-text-headline-icon",
                        h4: "h4-style-text-headline-icon",
                        htmltool: "code-tool-icon",
                        icon: "icon-tool-icon",
                        imageCropping: "fullscreen-change-size",
                        img: "image-icon",
                        imgMenu: "image-icon-menu",
                        languageSelector: "language-tool-icon",
                        layerblockIconSymbol: "layers-tool-panel-icon",
                        lightbox: "image-grid-tool-icon",
                        login: "login-tool-icon",
                        menu: "menu-tool-icon",
                        moveSectionDownIcon: "expand-more-icon-2",
                        moveSectionUpIcon: "expand-less-icon-2",
                        moveToFooter: "add-to-footer-icon",
                        moveToLayout: "add-to-website-icon2",
                        moveToLowerSectionIcon: "expand-more-icon-2",
                        moveToUpperSectionIcon: "expand-less-icon-2",
                        moveontop: "moveOnTopIcon",
                        movetobottom: "moveToBottomIcon",
                        newsfeed: "newsfeed-tool-icon",
                        objectHelp: "help-outline-icon",
                        objectLibraryIconSymbol: "library-icon",
                        objectStyle: "edit-icon",
                        objectproperties: "element-settings-icon",
                        objecttext: "paragraph-tool-icon",
                        otherTools: "more-tool-menu-icon",
                        overviewModeIcon: "preview-icon",
                        p: "title_black_24dp_2",
                        pageThumbnail: "thumbnail_tool_icon",
                        paste: "content-paste-icon",
                        pastestyle: "paste-style-icon",
                        paymentStepClientData: "lock-outline-icon",
                        paymentStepItem: "cms-icon3",
                        paymentStepSummary: "wallet",
                        price: "tag-outline-icon",
                        product: "shop-add-product-icon",
                        productfeed: "product-feed-icon",
                        rectangle: "rectangle-tool",
                        removeFromFooterAction: "delete-from-footer-icon",
                        removeFromLayout: "cancel-icon2",
                        saveIcon: "save-icon",
                        selectSubelement: "more-icon2",
                        settings: "settings-icon-outline",
                        shop: "shop-menu-tool-icon",
                        shopCart: "shop-menu-tool-icon-1",
                        showNews: "newsfeed-tool-icon",
                        simpleText: "header-tool-icon",
                        slider: "toolbar-slider-icon",
                        stopCropping: "cancel-icon2",
                        text: "paragraph-tool-icon",
                        timeLineError: "cancel-icon2",
                        timeLineInProgress: "hourglass_empty",
                        timelineSuccess: "check-mark-icon",
                        toolsmenuwrappericonsymbol: "add-element-tool-icon",
                        unbindwobjects: "unbind-icon",
                        ungroup: "cancel-icon2",
                        viewpageicon: "public-icon",
                        wfooter: "add-to-footer-icon",
                        wgroup: "groupIcon",
                        wlayoutgroup: "add-to-website-icon2",
                        wmediaplayer: "video-tool-icon",
                        wsection: "wsection-icon"
                    }
                },
                function(t, e, i) {
                    var n = i(5);
                    e.a = class {
                        static isReturnTypeNumeric(t) {
                            return t === n.a.INT || t === n.a.FLOAT
                        }
                        static normalizeInputValue(t, e) {
                            let i = t.trim();
                            return 0 === i.length && this.isReturnTypeNumeric(e) ? "0" : i
                        }
                        static parseValueToReturnType(t, e) {
                            switch (e) {
                                case n.a.FLOAT:
                                    return parseFloat(t);
                                case n.a.INT:
                                    return parseInt(parseFloat(t), 10);
                                default:
                                    return NaN
                            }
                        }
                    }
                },
                function(t, e, i) {
                    var n = i(0),
                        a = i.n(n);
                    e.a = class {
                        constructor() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.enabled = !!a.a.isDef(t.enabled) &&
                                t.enabled, this.max = a.a.isNumberAndNotNaN(t.max) ? t.max : null, this.min = a.a.isNumberAndNotNaN(t.min) ? t.min : null, this.step = a.a.isNumberAndNotNaN(t.step) ? t.step : null
                        }
                    }
                },
                function(t, e, i) {
                    e.a = {
                        DELETE: 46,
                        LEFT: 37,
                        RIGHT: 39,
                        UP: 38,
                        DOWN: 40,
                        ESC: 27,
                        ENTER: 13,
                        BACKSPACE: 8,
                        LEFT_SQUARE_BRACKET: 219,
                        RIGHT_SQUARE_BRACKET: 221,
                        K7: 55,
                        K8: 56,
                        K9: 57,
                        A: 65,
                        B: 66,
                        C: 67,
                        D: 68,
                        E: 69,
                        F: 70,
                        G: 71,
                        H: 72,
                        I: 73,
                        J: 74,
                        K: 75,
                        M: 77,
                        O: 79,
                        P: 80,
                        R: 82,
                        S: 83,
                        T: 84,
                        U: 85,
                        V: 86,
                        W: 87,
                        X: 88,
                        Y: 89,
                        Z: 90,
                        PLUS: 187,
                        MINUS: 189,
                        NUM_PLUS: 107,
                        NUM_MINUS: 109,
                        ZERO: 48,
                        NUM_ZERO: 96,
                        SPACE: 32
                    }
                },
                function(t, e, i) {
                    var n = i(0),
                        a = i.n(n);
                    class r {
                        static emulateClickEventForAppleDevice(t, e) {
                            t.on("touchstart.iphoneDoubleTap", i => {
                                let n = !1;
                                t.one("touchend.iphoneDoubleTap", function() {
                                    !1 === n && e(), t.off("touchmove.iphoneDoubleTap")
                                }), t.one("touchmove.iphoneDoubleTap", function() {
                                    n = !0
                                })
                            })
                        }
                        static isMobileDevice() {
                            return this.isMobileAppleDevice() || navigator.userAgent.match(/(Android|BlackBerry|Windows Phone)/i)
                        }
                        static isTouchScreenDevice() {
                            return navigator.maxTouchPoints > 0
                        }
                        static isMobileAppleDevice() {
                            return null !==
                                navigator.userAgent.match(/(iPhone|iPod|iPad)/i)
                        }
                        static isAppleDevice() {
                            return null !== navigator.userAgent.match(/(iPhone|iPod|iPad|Macintosh)/i)
                        }
                        static isAppleDeviceWithTouchScreen() {
                            return r.isMobileAppleDevice() || null !== navigator.userAgent.match(/(Macintosh)/i) && r.isTouchScreenDevice()
                        }
                        static isMobileSafari() {
                            return r.isAppleDeviceWithTouchScreen() && !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)
                        }
                        static reloadIfBackForwadCacheInAppleDevice() {
                            this.isMobileAppleDevice() && $(window).on("pageshow",
                                function(t) {
                                    if (t.originalEvent.persisted) {
                                        var e = elementService.findAllWButton();
                                        a.a.isArrayLike(e) && e.length > 0 && location.reload()
                                    }
                                })
                        }
                    }
                    e.a = r
                },
                function(t, e, i) {
                    var n = i(0);
                    i.n(n);
                    e.a = class {
                        static overrideFalsyValuesFromFistMapIfEquivalentValuesIsTruthy(t, e) {
                            Object.keys(e).forEach(i => {
                                let a = e[i];
                                Object(n.isDef)(t[i]) && !1 === t[i] && !0 === a && (t[i] = !0)
                            })
                        }
                        static isObjectHasOnlyTruthyValues(t) {
                            let e = !0,
                                i = Object.keys(t);
                            for (let n = 0; n < i.length; n++)
                                if (!0 !== t[i[n]]) {
                                    e = !1;
                                    break
                                }
                            return e
                        }
                        static isShallowEqual(t, e) {
                            let i =
                                Object.keys(t),
                                n = Object.keys(e);
                            if (i.length !== n.length) return !1;
                            for (let n of i)
                                if (t[n] !== e[n]) return !1;
                            return !0
                        }
                        static getKeysFromFlatObject(t) {
                            let e = [];
                            return Object.entries(t).forEach(t => {
                                let [i, n] = t;
                                e.push(i)
                            }), e
                        }
                        static isClassInheritedFrom(t, e) {
                            let i = t.prototype;
                            for (; null != i;) {
                                if (i === e.prototype) return !0;
                                i = i.__proto__
                            }
                            return !1
                        }
                        static filterObject(t, e) {
                            let i = {};
                            for (let n = 0; n < e.length; n++) {
                                let a = e[n];
                                t.hasOwnProperty(a) && (i[a] = t[a])
                            }
                            return i
                        }
                    }
                },
                function(t, e, i) {
                    e.a = {
                        HORIZONTAL: "horizontal",
                        VERTICAL: "vertical"
                    }
                },
                function(t, e, i) {
                    var n = i(3),
                        a = i(0),
                        r = i.n(a);
                    e.a = class {
                        constructor() {
                            this.direction = n.a.BOTTOM_RIGHT, this.resizing = !1, this.targetNode = void 0, this.handlerNode = void 0, this._handleResizeHandler = void 0, this._stopResizeHandler = void 0, this._onMouseLeaveHandler = void 0
                        }
                        init(t) {
                            this.direction = t.direction ? t.direction : n.a.BOTTOM_RIGHT, this.targetNode = t.targetNode, this.handlerNode = t.handlerNode
                        }
                        startResize() {
                            this.resizing = !0, this._handleResizeHandler = this._handleResize.bind(this), this._stopResizeHandler = this._stopResize.bind(this),
                                this._setCursor(), document.addEventListener("mousemove", this._handleResizeHandler), document.addEventListener("mouseup", this._stopResizeHandler)
                        }
                        _handleResize(t) {
                            if (t.preventDefault(), this.resizing && r.a.isDefAndNotNull(this.targetNode)) switch (this.direction) {
                                case n.a.BOTTOM_RIGHT:
                                    this._resizeSouthEast(t.clientX, t.clientY);
                                    break;
                                case n.a.BOTTOM:
                                    this._resizeSouth(t.clientY);
                                    break;
                                case n.a.RIGHT:
                                    this._resizeEast(t.clientX)
                            }
                        }
                        _setCursor() {
                            switch (this.direction) {
                                case n.a.BOTTOM_RIGHT:
                                    document.body.style.cursor =
                                        "nwse-resize";
                                    break;
                                case n.a.BOTTOM:
                                    document.body.style.cursor = "ns-resize";
                                    break;
                                case n.a.RIGHT:
                                    document.body.style.cursor = "ew-resize"
                            }
                        }
                        _resetCursor() {
                            document.body.style.cursor = ""
                        }
                        _stopResize() {
                            this.resizing = !1, this._resetCursor(), document.removeEventListener("mousemove", this._handleResizeHandler), document.removeEventListener("mouseup", this._stopResizeHandler)
                        }
                        _resizeEast(t) {
                            let e = t - this.targetNode.getBoundingClientRect().left;
                            this.targetNode.style.width = `${e}px`
                        }
                        _resizeSouth(t) {
                            let e = t - this.targetNode.getBoundingClientRect().top;
                            this.targetNode.style.height = `${e}px`
                        }
                        _resizeSouthEast(t, e) {
                            this._resizeSouth(e), this._resizeEast(t)
                        }
                    }
                },
                function(t, e, i) {
                    var n = i(0),
                        a = i.n(n);
                    e.a = class {
                        constructor() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.timeoutDelay = a.a.isNumberAndNotNaN(t.timeoutDelay) ? t.timeoutDelay : 1E3, this.timerId = null, this.jobHandler = a.a.isFunction(t.jobHandler) ? t.jobHandler : null
                        }
                        run(t) {
                            this.clean(), this.timerId = setTimeout(() => {
                                a.a.isFunction(this.jobHandler) && this.jobHandler(t)
                            }, this.timeoutDelay)
                        }
                        clean() {
                            clearTimeout(this.timerId)
                        }
                    }
                },
                function(t, e, i) {
                    var n = i(6),
                        a = i(0),
                        r = i.n(a);
                    class s {
                        constructor(t) {
                            r.a.isNotDef(t) && (t = {}), this.width = r.a.isNumberAndNotNaN(t.width) ? t.width : 0, this.height = r.a.isNumberAndNotNaN(t.height) ? t.height : 0
                        }
                        getWidth() {
                            return this.width
                        }
                        setWidth(t) {
                            this.width = t
                        }
                        getHeight() {
                            return this.height
                        }
                        setHeight(t) {
                            this.height = t
                        }
                        clone() {
                            return new s({
                                width: this.width,
                                height: this.height
                            })
                        }
                        serialize() {
                            return {
                                width: this.width,
                                height: this.height
                            }
                        }
                        equals(t) {
                            return this.width === t.width && this.height === t.height
                        }
                        add(t) {
                            return this.width +=
                                t.getWidth(), this.height += t.getHeight(), this
                        }
                        subtract(t) {
                            return this.width -= t.getWidth(), this.height -= t.getHeight(), this
                        }
                        multiply(t) {
                            return this.width *= t, this.height *= t, this
                        }
                        applyLimits() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            r.a.isDef(t.width) && (r.a.isNumber(t.width.min) && (this.width = Math.max(this.width, t.width.min)), r.a.isNumber(t.width.max) && (this.width = Math.min(this.width, t.width.max))), r.a.isDef(t.height) && (r.a.isNumber(t.height.min) && (this.height = Math.max(this.height,
                                t.height.min)), r.a.isNumber(t.height.max) && (this.height = Math.min(this.height, t.height.max)))
                        }
                        toString() {
                            return `{${this.width},${this.height}}}`
                        }
                        toVector() {
                            return new n.a({
                                x: this.getWidth(),
                                y: this.getHeight()
                            })
                        }
                        addHeight(t) {
                            this.height += t
                        }
                        subtractHeight(t) {
                            this.height -= t
                        }
                        addWidth(t) {
                            this.width += t
                        }
                        subtractWidth(t) {
                            this.width -= t
                        }
                        ceil() {
                            this.width = Math.ceil(this.width), this.height = Math.ceil(this.height)
                        }
                    }
                    e.a = s, s.deserialize = function(t) {
                        return r.a.isNotDef(t) ? new s({
                            width: 0,
                            height: 0
                        }) : new s(t)
                    }
                },
                function(t,
                    e, i) {
                    var n = i(29),
                        a = i.n(n),
                        r = i(7),
                        s = i(0),
                        o = i.n(s),
                        l = 200,
                        u = /^[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*$/i,
                        h = /^((?!-)[a-z0-9-]{1,62}[A-Za-z0-9]\.)+[A-Za-z]{2,10}$/i,
                        c = /^((?!-)[a-z0-9-]{1,62}[A-Za-z0-9]\.)+((?!-)[a-z0-9-]{1,62}[A-Za-z0-9]\.)+[A-Za-z]{2,10}$/i,
                        p = /^[0-9]{8,13}$/,
                        d = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        f = /^(?=.*\d)(?=.*[a-zA-Z `\-=[\];'\\,.\/~!@#$%^&*()_+{}:"|<>?])([a-zA-Z0-9 `\-=[\];'\\,.\/~!@#$%^&*()_+{}:"|<>?]{8,})$/,
                        g = /^(?=.*?\d)(?=.*?\D).{8,}/,
                        m = /^.*$/i,
                        v = /[0-9]*[.]*[a-z\u0105\u0119\u015b\u0107\u017c\u017a\u0107\u00f3\u0142\u0144\u0104\u0118\u015a\u017b\u0179\u0106\u00d3\u0141\u0143\. ]{2,150}[.]*[0-9]+[a-z]*|[0-9]+[.]*[a-z\u0105\u0119\u015b\u0107\u017c\u017a\u0107\u00f3\u0142\u0144\u0104\u0118\u015a\u017b\u0179\u0106\u00d3\u0141\u0143\. ]{2,150}[.]*[0-9]/i,
                        _ = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                            "/": "&#x2F;"
                        },
                        y = RegExp("[" + ["-", "[", "]", "/", "{", "}", "(", ")", "*", "+", "?", ".", "\\", "^", "$", "\\ ",
                            "|"
                        ].join("\\") + "]", "g");
                    class b {
                        static generateRandomPasswordString() {
                            const t = Math.random().toString(36).slice(-10);
                            return !1 === b.isValidPassword(t, b.passwordTypes.SIMPLE) ? b.generateRandomPasswordString() : t
                        }
                        static isValidEmail(t) {
                            return "string" == typeof t && t.length > 0 && null != t.match(d)
                        }
                        static isValidEmailName(t) {
                            return "string" == typeof t && t.length > 0 && null !== t.match(u)
                        }
                        static checkIsValidUrl(t) {
                            try {
                                return Boolean(new URL(t))
                            } catch (t) {
                                return !1
                            }
                        }
                        static checkIsValidName(t) {
                            return !!t.includes(" ")
                        }
                        static deleteWhiteSpace(t) {
                            return t.replace(/\s/g,
                                "")
                        }
                        static checkIsValidDomain(t) {
                            var e = !1;
                            return null != t.match(h) && -1 == t.indexOf(config.hostSettings.domain) && (e = !0), e
                        }
                        static checkIsValidSubdomain(t) {
                            var e = !1;
                            return null != t.match(c) && (e = !0), e
                        }
                        static checkIsValidPhone(t) {
                            var e = !1;
                            return null != t.match(p) && (e = !0), e
                        }
                        static countWords(t) {
                            if (!0 === o.a.isNotDefOrNull(t) || 0 === t.length) return 0;
                            let e = t.split(/(\s+)/).filter(t => !/\s+$/.test(t));
                            return (e = e.filter(t => "" != t)).length
                        }
                        static textStartsWithTagOpening(t) {
                            return "<" === t[0]
                        }
                        static isValidPassword(t,
                            e) {
                            if ("string" == typeof t && t.length > 4) switch (e) {
                                case b.passwordTypes.SIMPLE:
                                    return null !== t.match(f);
                                case b.passwordTypes.SIMPLE_WITHOUT_RESTRICTIONS:
                                    return null !== t.match(g);
                                default:
                                    return null !== t.match(m)
                            }
                            return !1
                        }
                        static escapeStringForRegexp(t) {
                            return t.replace(y, "\\$&")
                        }
                        static isValidPolishStreetAddress(t) {
                            return "string" == typeof t && v.test(t)
                        }
                        static isValidLength(t, e, i) {
                            return o.a.isDef(i) || (i = b.fieldMinLength.EMPTY), t.length <= e && t.length > i
                        }
                        static isValidMaxLength(t, e) {
                            return t.length <= e
                        }
                        static isValidMinLength(t,
                            e) {
                            return t.length > e
                        }
                        static isEqualLength(t, e) {
                            return t.length === e
                        }
                        static escapeHtml(t) {
                            return String(t).replace(/[&<>"'\/]/g, function(t) {
                                return _[t]
                            })
                        }
                        static removeHtml(t) {
                            return String(t).replace(/<\/?[^>]+(>|$)/g, "")
                        }
                        static normalizeTextForUrl(t) {
                            return o.a.isString(t) && (t = t.toLowerCase(), t = b.removeUnsafeCharactersFromTextForUrl(t), t = (t = b.removeUnwantedCharactersFromTextForUrl(t)).replace(/[ \u00A0]/g, "-")), t
                        }
                        static normalizeTextForRefUrl(t) {
                            return o.a.isString(t) && (t = (t = t.replace(/\s/g, "")).substring(0,
                                254), !1 === /([a-zA-Z-])+/g.test(t) && (t = t.replace(new RegExp("\\d", "g"), "")), t = b.normalizeTextForUrl(t)), t
                        }
                        static removeUnwantedCharactersFromTextForUrl(t) {
                            return o.a.isString(t) && (t = t.replace(/[.,\r\n]/g, "")), t
                        }
                        static removeUnsafeCharactersFromTextForUrl(t) {
                            return o.a.isString(t) && (t = t.replace(/[\[\]`~&\^%@"<>\\\/#|?:;={}$+]/g, "")), t
                        }
                        static valueNonNumericChars(t) {
                            return r.a.ONLY_LETTERS.test(t)
                        }
                        static replaceExtensionInSrc(t, e) {
                            return o.a.isString(t) && o.a.isString(e) && (t = t.replace(/\.[^.]+$/, "." +
                                e)), t
                        }
                        static joinArrayUsingCut(t) {
                            let e = t[0];
                            for (let i = 1; i < t.length; i++) e += `, ${t[i]}`;
                            return e
                        }
                        static joinArrayUsingChar(t, e) {
                            let i = t[0];
                            for (let n = 1; n < t.length; n++) i += `${e} ${t[n]}`;
                            return i
                        }
                        static capitalizeFirstLetter(t) {
                            return t.charAt(0).toUpperCase() + t.slice(1)
                        }
                        static getValidHref(t) {
                            if (!1 === b.checkIsValidUrl(t)) {
                                let e = `https://${t}`;
                                if (b.checkIsValidUrl(e)) return e
                            }
                            return t
                        }
                        static updateOrAddParameterToUrl(t, e, i) {
                            let n = new RegExp("([?&])" + e + "=.*?(&|$)", "i"),
                                a = -1 !== t.indexOf("?") ? "&" : "?";
                            return t.match(n) ?
                                t.replace(n, "$1" + e + "=" + i + "$2") : t + a + e + "=" + i
                        }
                        static trimFirstAndLastQuote(t) {
                            return o.a.isStringAndNotEmpty(t) ? t.replace(/^"|"$/g, "") : t
                        }
                        static isHeaderOnly(t) {
                            return /^\*\*(.*)\*\*$/.test(t.trim())
                        }
                        static removeBoldFromHeader(t) {
                            return t.replace(/^\*\*(.*)\*\*$/, "$1").trim()
                        }
                        static removeHeader(t) {
                            return t.replace(/^\*\*.*\*\*\s*/, "").trim()
                        }
                        static trimHeaderAndRemoveBold(t) {
                            return b.isHeaderOnly(t) ? b.removeBoldFromHeader(t) : b.removeHeader(t)
                        }
                        static trimMarkdown(t) {
                            let e = t.match(/```(\w+)\s*([\s\S]*?)\s*```/);
                            return e ? e[2].trim() : ""
                        }
                        static trimMarkdownIfExists(t) {
                            return t.includes("```") ? b.trimMarkdown(t) : t
                        }
                        static convertNaturalTextToCamelCase(t) {
                            let e = t.split(" "),
                                i = e.shift();
                            return (e = e.map(t => b.capitalizeFirstLetter(t))).unshift(i), e.join("")
                        }
                        static convertToVerticalText(t) {
                            return t.toString().split("").join("<br>")
                        }
                        static generateUUID() {
                            return a()()
                        }
                        static stringToHash(t) {
                            let e = 0,
                                i = t.length,
                                n = 0;
                            if (i > 0)
                                for (; n < i;) e = (e << 5) - e + t.charCodeAt(n++) | 0;
                            return e
                        }
                        static isStringEndWithAnyOfPhrases(t, e) {
                            let i = arguments.length >
                                2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return e.some(e => b.isStringEndWithPhrase(t, e, i))
                        }
                        static isStringEndWithPhrase(t, e) {
                            return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).skipCaseSensitive && (t = t.toLowerCase(), e = e.toLowerCase()), !0 === t.endsWith(e)
                        }
                        static extendsStringWithSymbolToReachMinLength(t, e, i) {
                            let n = t;
                            if (o.a.isString(t) && n.length >= e == !1 && o.a.isDef(i))
                                for (; n.length >= e == !1;) n += i;
                            return n
                        }
                        static truncateLink(t) {
                            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return t.substring(0,
                                Math.min(t.length, l - e))
                        }
                        static trimToLength(t, e) {
                            return o.a.isStringAndNotEmpty(t) ? t.substring(0, Math.min(t.length, e)) : t
                        }
                        static simplifyNewAddress(t) {
                            t = (t = (t = b.truncateLink(t)).trim()).split("/");
                            for (let e = 0; e < t.length; e++) t[e] = b.removeUnsafeCharactersFromTextForUrl(t[e]);
                            let e = t.join("/");
                            return e = e.replace(/^\/+/g, "")
                        }
                        static truncateText(t, e) {
                            return t.length > e ? t.slice(0, e - 3).trim() + "..." : t
                        }
                        static camelCaseToSeparateWords(t) {
                            return t.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase()
                        }
                        static cutStringAfterNWord() {
                            let t =
                                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            if (o.a.isString(t.text) && o.a.isNumberAndNotNaN(t.wordsNumber)) {
                                let e, i = 0,
                                    n = t.text;
                                for (let a = 0; a < t.wordsNumber && null != (e = /\s*\S+/.exec(n)); a++) n = n.substring(e[0].length), i += e[0].length;
                                return t.showDots ? t.text.substr(0, i) + "..." : t.text.substr(0, i)
                            }
                            return t.text
                        }
                        static trimAndReplaceSpaces(t) {
                            return t.trim().replace(/\s+/g, " ")
                        }
                        static convertPriceToDotFormat(t) {
                            return t.replace(/,/g, ".").replace(/\s/g, "").replace(/[^\d.]/g, "").replace(/\.(?=.*\.)/g,
                                "")
                        }
                    }
                    e.a = b, "function" != typeof String.prototype.startsWith && (String.prototype.startsWith = function(t) {
                        return this.slice(0, t.length) == t
                    }), "function" != typeof String.prototype.endsWith && (String.prototype.endsWith = function(t) {
                        return this.slice(-t.length) == t
                    }), b.passwordTypes = {
                        SIMPLE: "simple",
                        SIMPLE_WITHOUT_RESTRICTIONS: "SIMPLE_WITHOUT_RESTRICTIONS",
                        NORMAL: "normal"
                    }, b.fieldMaxLength = {
                        NORMAL: 255
                    }, b.fieldMinLength = {
                        NORMAL: 0,
                        EMPTY: -1
                    }, window.stringUtils = b
                },
                function(t, e, i) {
                    var n = i(30),
                        a = i(31);
                    t.exports = function(t,
                        e, i) {
                        var r = e && i || 0;
                        "string" == typeof t && (e = "binary" === t ? new Array(16) : null, t = null);
                        var s = (t = t || {}).random || (t.rng || n)();
                        if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, e)
                            for (var o = 0; o < 16; ++o) e[r + o] = s[o];
                        return e || a(s)
                    }
                },
                function(t, e) {
                    var i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
                    if (i) {
                        var n = new Uint8Array(16);
                        t.exports = function() {
                            return i(n),
                                n
                        }
                    } else {
                        var a = new Array(16);
                        t.exports = function() {
                            for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), a[e] = t >>> ((3 & e) << 3) & 255;
                            return a
                        }
                    }
                },
                function(t, e) {
                    for (var i = [], n = 0; n < 256; ++n) i[n] = (n + 256).toString(16).substr(1);
                    t.exports = function(t, e) {
                        var n = e || 0,
                            a = i;
                        return [a[t[n++]], a[t[n++]], a[t[n++]], a[t[n++]], "-", a[t[n++]], a[t[n++]], "-", a[t[n++]], a[t[n++]], "-", a[t[n++]], a[t[n++]], "-", a[t[n++]], a[t[n++]], a[t[n++]], a[t[n++]], a[t[n++]], a[t[n++]]].join("")
                    }
                },
                function(t, e, i) {
                    var n = i(0),
                        a = i.n(n);
                    class r {
                        static createVariableById(t) {
                            return `var(--${t})`
                        }
                        static findVariablesValuesInString(t) {
                            return a.a.isDefAndNotNull(t) ?
                                t.match(/--[a-zA-Z_0-9]*/g) : null
                        }
                        static isVariableExistInString(t) {
                            let e = r.findVariablesValuesInString(t);
                            return a.a.isArrayLike(e) && e.length > 0
                        }
                    }
                    e.a = r
                },
                function(t, e, i) {
                    var n = i(0),
                        a = i.n(n);
                    e.a = class {
                        static generateSelectOptionsFromEnum(t, e, i) {
                            let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                r = {};
                            a.a.isString(e) ? r.prefix = e : Object.assign(r, e), a.a.isString(i) && (r.suffix = i);
                            let s = [],
                                o = a.a.isStringAndNotEmpty(r.prefix) ? `${r.prefix}.` : "",
                                l = a.a.isStringAndNotEmpty(r.tooltipPrefix) ? `${r.tooltipPrefix}.` :
                                o,
                                u = a.a.isStringAndNotEmpty(r.suffix) ? `.${r.suffix}` : "",
                                h = a.a.isStringAndNotEmpty(r.tooltipSuffix) ? `.${r.tooltipSuffix}` : ".tooltip",
                                c = a.a.isArrayLike(t) ? t : Object.values(t);
                            for (let t = 0; t < c.length; t++) {
                                let e = c[t],
                                    i = !0 === r.withTooltip ? i18n.t(`${l}${e}${h}`) : void 0,
                                    n = !0 === r.withId ? e : void 0;
                                s.push({
                                    value: e,
                                    label: i18n.t(`${o}${e}${u}`),
                                    id: n,
                                    tooltip: i
                                })
                            }
                            return !0 !== n.enableSort && !0 !== t.autoSorting || s.sort((t, e) => t.label.localeCompare(e.label)), s
                        }
                        static removeRactivity(t) {
                            return Object.assign({}, t)
                        }
                        static addNonReactiveProperty(t,
                            e, i) {
                            Object.defineProperty(t, e, {
                                value: i,
                                configurable: !1
                            })
                        }
                    }
                }
            ])
        })
    },
    8786: function(t, e, i) {
        Object.defineProperty(e, "__esModule", {
                value: !0
            }), i.d(e, "arrayHasSameItems", function() {
                return X
            }), i.d(e, "arrayIncludeArray", function() {
                return G
            }), i.d(e, "default", function() {
                return q
            }), i.d(e, "isArrayLike", function() {
                return Z
            }), i.d(e, "isArrayWithExactlyNElements", function() {
                return K
            }), i.d(e, "isArrayWithExactlyOneElement", function() {
                return Q
            }), i.d(e, "isArrayWithMinimumNElements", function() {
                return J
            }), i.d(e, "isArraysEqual",
                function() {
                    return tt
                }), i.d(e, "isBoolean", function() {
                return et
            }), i.d(e, "isDate", function() {
                return it
            }), i.d(e, "isDef", function() {
                return nt
            }), i.d(e, "isDefAndNotEmpty", function() {
                return at
            }), i.d(e, "isDefAndNotNull", function() {
                return rt
            }), i.d(e, "isDomElement", function() {
                return st
            }), i.d(e, "isEmptyString", function() {
                return ot
            }), i.d(e, "isFile", function() {
                return lt
            }), i.d(e, "isFunction", function() {
                return ut
            }), i.d(e, "isNestedObjectExist", function() {
                return ht
            }), i.d(e, "isNonEmptyArray", function() {
                return ct
            }),
            i.d(e, "isNotBoolean", function() {
                return pt
            }), i.d(e, "isNotDef", function() {
                return dt
            }), i.d(e, "isNotDefOrNull", function() {
                return ft
            }), i.d(e, "isNotDefOrNullOrEmptyString", function() {
                return gt
            }), i.d(e, "isNotNull", function() {
                return mt
            }), i.d(e, "isNotString", function() {
                return vt
            }), i.d(e, "isNumber", function() {
                return _t
            }), i.d(e, "isNumberAndNotNaN", function() {
                return yt
            }), i.d(e, "isObject", function() {
                return bt
            }), i.d(e, "isObjectAndNotNull", function() {
                return wt
            }), i.d(e, "isString", function() {
                return xt
            }), i.d(e, "isStringAndNotEmpty",
                function() {
                    return Ot
                }), i.d(e, "isStringOrSymbol", function() {
                return Tt
            }), i.d(e, "isSymbol", function() {
                return Nt
            }), i.d(e, "isValidEnumValue", function() {
                return St
            }), i.d(e, "isValidJSON", function() {
                return Rt
            });
        var n = {
                d: (t, e) => {
                    for (var i in e) n.o(e, i) && !n.o(t, i) && Object.defineProperty(t, i, {
                        enumerable: !0,
                        get: e[i]
                    })
                },
                o: (t, e) => Object.prototype.hasOwnProperty.call(t, e)
            },
            a = {};
        n.d(a, {
            $5: () => b,
            $P: () => P,
            Ay: () => Y,
            Bm: () => E,
            C8: () => g,
            EI: () => F,
            Et: () => D,
            FP: () => H,
            Gv: () => A,
            H0: () => x,
            I$: () => d,
            Kg: () => N,
            LL: () => v,
            Lm: () => I,
            N2: () =>
                z,
            Pe: () => w,
            Rg: () => L,
            SU: () => m,
            Tl: () => _,
            Tn: () => O,
            Xj: () => $,
            ZR: () => T,
            fS: () => f,
            fo: () => j,
            fz: () => V,
            gI: () => W,
            jw: () => R,
            kI: () => M,
            nX: () => C,
            w7: () => y,
            x0: () => p,
            z9: () => U,
            zC: () => S,
            zG: () => k,
            zM: () => B
        });
        const r = "undefined",
            s = "function",
            o = "string",
            l = "number",
            u = "boolean",
            h = "object",
            c = typeof Symbol("test");

        function p(t, e) {
            return t.length === e.length && t.every((t, i) => t === e[i])
        }

        function d(t, e) {
            return !(!$(t) || !$(e) || e.length !== t.length) && f(t, e)
        }

        function f(t, e) {
            return e.every(e => t.includes(e))
        }

        function g(t) {
            if (0 === arguments.length) return !1;
            for (var e = 0; e < arguments.length; e++)
                if (typeof arguments[e] === r) return !1;
            return !0
        }

        function m(t, e, i = ".") {
            if (v(t)) return !1;
            let n = e.split(i),
                a = t;
            for (var r = 0; r < n.length; r++)
                if (v(a = a[n[r]])) return !1;
            return !0
        }

        function v(t) {
            return typeof t === r
        }

        function _(t) {
            return typeof t === r || null === t
        }

        function y(t) {
            return _(t) || R(t)
        }

        function b(t) {
            return A(t) && w(t)
        }

        function w(t) {
            return null !== t
        }

        function x(t) {
            return g(t) && null !== t
        }

        function O(t) {
            return typeof t === s
        }

        function T(t) {
            return x(t) && t.length > 0
        }

        function N(t) {
            return typeof t ===
                o
        }

        function S(t) {
            return N(t) && "" !== t
        }

        function R(t) {
            return N(t) && "" === t
        }

        function k(t) {
            return typeof t !== o
        }

        function P(t) {
            return t instanceof Date
        }

        function D(t) {
            return typeof t === l
        }

        function I(t) {
            return typeof t === u
        }

        function A(t) {
            return typeof t === h
        }

        function C(t) {
            return N(t) || E(t)
        }

        function E(t) {
            return typeof t === c
        }

        function M(t) {
            return typeof t !== u
        }

        function H(t) {
            return typeof t === l && !1 === isNaN(t)
        }

        function $(t) {
            return "object" == typeof t && null !== t && "number" == typeof t.length
        }

        function j(t) {
            return t instanceof
            File
        }

        function W(t) {
            return z(t, 1)
        }

        function z(t, e) {
            return $(t) && t.length === e
        }

        function V(t, e) {
            return $(t) && t.length >= e
        }

        function F(t) {
            return V(t, 1)
        }

        function L(t, e) {
            if (g(t) && g(e))
                for (var i in e)
                    if (e.hasOwnProperty(i) && e[i] === t) return !0;
            return !1
        }

        function B(t) {
            try {
                return JSON.parse(t), !0
            } catch (t) {
                return !1
            }
        }

        function U(t) {
            return t instanceof Element
        }
        const Y = {
            arrayHasSameItems: d,
            arrayIncludeArray: f,
            isArrayLike: $,
            isArraysEqual: p,
            isArrayWithExactlyNElements: z,
            isArrayWithExactlyOneElement: W,
            isArrayWithMinimumNElements: V,
            isBoolean: I,
            isDate: P,
            isDef: g,
            isDefAndNotEmpty: T,
            isDefAndNotNull: x,
            isDomElement: U,
            isEmptyString: R,
            isFile: j,
            isFunction: O,
            isNestedObjectExist: m,
            isNonEmptyArray: F,
            isNotBoolean: M,
            isNotDef: v,
            isNotDefOrNull: _,
            isNotDefOrNullOrEmptyString: y,
            isNotNull: w,
            isNotString: k,
            isNumber: D,
            isNumberAndNotNaN: H,
            isObject: A,
            isObjectAndNotNull: b,
            isString: N,
            isStringAndNotEmpty: S,
            isStringOrSymbol: C,
            isSymbol: E,
            isValidEnumValue: L,
            isValidJSON: B
        };
        var X = a.I$,
            G = a.fS,
            q = a.Ay,
            Z = a.Xj,
            K = a.N2,
            Q = a.gI,
            J = a.fz,
            tt = a.x0,
            et = a.Lm,
            it = a.$P,
            nt = a.C8,
            at = a.ZR,
            rt = a.H0,
            st = a.z9,
            ot = a.jw,
            lt = a.fo,
            ut = a.Tn,
            ht = a.SU,
            ct = a.EI,
            pt = a.kI,
            dt = a.LL,
            ft = a.Tl,
            gt = a.w7,
            mt = a.Pe,
            vt = a.zG,
            _t = a.Et,
            yt = a.FP,
            bt = a.Gv,
            wt = a.$5,
            xt = a.Kg,
            Ot = a.zC,
            Tt = a.nX,
            Nt = a.Bm,
            St = a.Rg,
            Rt = a.zM
    },
    90: function(t, e, i) {
        e.a = {
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }
    },
    906: function(t, e, i) {
        i.d(e, "a", function() {
            return c
        });
        var n = i(0),
            a = i(1),
            r = i(3),
            s = i(4),
            o = i(2),
            l = i(800),
            u = i(827);

        function h(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, n = Object(o.a)(t);
                if (e) {
                    var a = Object(o.a)(this).constructor;
                    i = Reflect.construct(n, arguments, a)
                } else i = n.apply(this, arguments);
                return Object(s.a)(this, i)
            }
        }
        var c = function(t) {
            Object(r.a)(i, t);
            var e = h(i);

            function i(t) {
                var a;
                return Object(n.a)(this, i), (a = e.call(this, t))._easing = webwave.isDef(t.easing) ? t.easing : i.DEFAULT_EASING_FUNCTION,
                    webwave.isString(a._easing) && (a._easing = jQuery.easing[a._easing]), a._onComplete = t.onComplete, a._stepCallback = t.step, a
            }
            return Object(a.a)(i, [{
                    key: "finish",
                    value: function() {
                        this._running = !1, this._finished = !0, this.setCurrentTime(this.getDuration()), this.render(), this.clean(), webwave.isFunction(this._onComplete) && this._onComplete()
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this._running = !1, this._finished = !0, this.setCurrentTime(0), this.render(), this.clean(), webwave.isFunction(this._onComplete) && this._onComplete()
                    }
                },
                {
                    key: "clean",
                    value: function() {}
                }, {
                    key: "dispose",
                    value: function() {}
                }, {
                    key: "render",
                    value: function() {
                        throw new Error("renderer not implemented!");
                    }
                }, {
                    key: "updateValues",
                    value: function() {
                        throw new Error("update values not implemented!");
                    }
                }, {
                    key: "tick",
                    value: function() {
                        this.updateValues(), this.render(), webwave.isFunction(this._stepCallback) && this._stepCallback()
                    }
                }
            ]), i
        }(l.a);
        c.DEFAULT_EASING_FUNCTION = u.a.SWING
    },
    91: function(t, e, i) {
        i.d(e, "a", function() {
            return s
        });
        var n = i(0),
            a = i(1),
            r = i(181),
            s = function() {
                function t() {
                    Object(n.a)(this,
                        t)
                }
                return Object(a.a)(t, null, [{
                    key: "_normalizeTable",
                    value: function(t) {
                        t.replaceWith("<div>".concat(t.text().replace(/\s+/g, " ").trim(), "</div>"))
                    }
                }, {
                    key: "htmlElementToText",
                    value: function(e) {
                        var i, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!0 === n.preserveWhiteSpaces) {
                            var a = webwave.isDefAndNotNull(n.replaceValue) ? n.replaceValue : "\n";
                            i = n.property === r.a.INNER_TEXT ? e[0].innerText.replace(t.multipleNewLineCharRegex, a) : e[0].textContent.replace(t.multipleNewLineCharRegex, a)
                        } else i = e.text();
                        return i
                    }
                }, {
                    key: "html2Text",
                    value: function(e) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = $('<div style="white-space: pre;"/>').html(e);
                        !0 === i.stripTables && n.find("table").each(function(e, i) {
                            t._normalizeTable($(i))
                        });
                        var a = t.htmlElementToText(n, i);
                        return !1 === webwave.isDefAndNotEmpty(a) && webwave.isStringAndNotEmpty(i.optionalValueOnEmpty) && (a = i.optionalValueOnEmpty), a
                    }
                }, {
                    key: "changeCssPropertyForEachChildrenElementInTextElement",
                    value: function(t, e) {
                        for (var i = t.find('*[style*="'.concat(e.cssProperty,
                                '"]')), n = 0; n < i.length; n++) i[n].style[e.cssProperty] = e.newCssValue;
                        return i
                    }
                }, {
                    key: "convertMarkdownBoldToHtmlStrong",
                    value: function(t) {
                        return !1 === webwave.isString(t) ? "" : t.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                    }
                }, {
                    key: "decodeHtml",
                    value: function(t) {
                        var e = document.createElement("textarea");
                        e.innerHTML = t;
                        var i = e.value;
                        return e.remove(), i
                    }
                }, {
                    key: "getEmptyParagraph",
                    value: function() {
                        return "<p>&nbsp;</p>"
                    }
                }, {
                    key: "getTextContentWithoutRedundantNewLines",
                    value: function(t) {
                        for (var e = arguments.length >
                                1 && void 0 !== arguments[1] ? arguments[1] : {}, i = "", n = t[0].childNodes, a = 0; a < n.length; a++) i += n[a].textContent, a !== n.length - 1 && (!0 === e.withSpace ? i += " " : i += "\n");
                        return i
                    }
                }, {
                    key: "getTextContentWithoutRedundantNewLinesFromElementHtml",
                    value: function(e) {
                        var i = document.createElement("div");
                        return $(i).html(e.html()), t.getTextContentWithoutRedundantNewLines($(i))
                    }
                }, {
                    key: "textToHTMLWithDivs",
                    value: function(t) {
                        if (webwave.isStringAndNotEmpty(t)) {
                            var e = t.split(/\n/g);
                            return (e = e.map(function(t) {
                                return "" === t ? "<div>&nbsp;</div>" :
                                    "<div>".concat(t, "</div>")
                            })).join("")
                        }
                        return t
                    }
                }, {
                    key: "isPlainText",
                    value: function(t) {
                        if (!1 === webwave.isStringAndNotEmpty(t)) return !1;
                        return !/<[^>]*>/.test(t)
                    }
                }]), t
            }();
        s.htmlToElements = function(t) {
            var e = document.createElement("template");
            return e.innerHTML = t.trim(), e.content.childNodes
        }, s.multipleNewLineCharRegex = /(\n)((\s)*(\n))+/g
    },
    956: function(t, e, i) {
        var n = {
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left",
            getOppositeDirection: function(t) {
                switch (t) {
                    case n.TOP:
                        return n.BOTTOM;
                    case n.RIGHT:
                        return n.LEFT;
                    case n.BOTTOM:
                        return n.TOP;
                    case n.LEFT:
                        return n.RIGHT
                }
                return t
            }
        };
        e.a = n
    }
});
var process = process || {
    env: {
        NODE_ENV: "development"
    }
};