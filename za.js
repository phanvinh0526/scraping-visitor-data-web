var ZA = function() {
    function e(e) {
        var n = t();
        "undefined" != typeof n && _.sendImage({
            params: {
                type: e,
                ua: z.userAgent
            },
            url: n + S.log
        })
    }

    function t() {
        var e = z.host;
        for (x in w.sync_supported)
            if ("undefined" != typeof e && e.indexOf(w.sync_supported[x]) >= 0) return w.sync_prefix + w.sync_supported[x]
    }

    function n(e) {
        f && "undefined" != typeof console && console.log(e)
    }

    function r() {
        var e = window[y.config];
        if ("undefined" != typeof e)
            for (i in e) {
                var t = e[i];
                t.length < 2 || (E[t[0]] = 2 == t.length ? t[1] : t.splice(1))
            }
    }

    function a() {
        var e = "undefined" == typeof A.get(y.isNewVisitor);
        e === !0 && A.set(y.isNewVisitor, "1", {
            expired: v,
            isRootDomain: !1
        });
        var t = {
            zacc: E._setAccount,
            zl: g.location.href,
            zrf: z.ref,
            zch: z.charset,
            zts: (new Date).getTime(),
            zvp: _.getViewPort(),
            zos: _.getPlatform(),
            zcr: z._screen,
            zje: z.isJavaEnable === !0 ? 1 : 0,
            zla: z.lang,
            zfv: _.getFlashVer(),
            zco: z.colorDepth,
            zpm: z.isSupportPostMessage ? "1" : "0",
            __zi: b,
            zfp: V.getCurrentFingerPrint() || "",
            znu: e ? "1" : "0",
            zg: A.get("_ga") || "",
            znid: A.get("znid") || "",
            v: h
        };
        return t
    }

    function o(t, n) {
        if (I.request(o, arguments) !== !1) {
            t = t || _.getPath(), n = n || _.getTitle();
            var i = a();
            i.zact = "pv", i.zpa = t, i.zpt = n, _.getJSONP({
                url: w.main + S.tracking,
                params: i,
                success: function(e) {
                    s(e)
                },
                fail: function() {
                    e("trackPageview fail: " + i)
                }
            })
        }
    }

    function s(e) {
        if (e = e || {}, P.isValid() === !1) {
            var t = e[y.vid];
            if (0 == P.isValid(t)) return void n("VID from tracking api error: " + t);
            P.set(t), z.isSupportPostMessage && ("undefined" == typeof P.iframeEle ? n("iframeEle undefined although _vid = 0") : P.iframeEle.contentWindow.postMessage("&action=sync_vid&vid=" + t, "*"))
        }
    }

    function c(t, n, i, r) {
        if (I.request(c, arguments) !== !1) {
            i = i || "", r = r || 0;
            var o = a();
            o.zact = "evt", o.zpt = _.getTitle(), o.zec = t, o.zea = n, o.zel = i, o.zev = r, _.getJSONP({
                url: w.main + S.tracking,
                params: o,
                success: function(e) {
                    s(e)
                },
                fail: function() {
                    e("trackEvent fail: " + o)
                }
            })
        }
    }

    function u() {
        var e = t();
        "undefined" != typeof e && P.getEnsure(function(t) {
            _.sendImage({
                url: e + S.sync,
                params: {
                    zacc: E._setAccount,
                    __zi: t
                }
            })
        })
    }

    function d() {
        r(), E._disableAutoTrack !== !0 && P.getCurrent(function(e) {
            o()
        }), u()
    }
    var f = !1,
        l = ["http://stc.za.zaloapp.com/v3/za.js"],
        g = window,
        p = document,
        h = "3.4.1",
        m = encodeURIComponent,
        v = 62208e6,
        w = {
            main: "http://za.zaloapp.com/v3",
            zug: "http://stc.za.zaloapp.com/zug.html",
            zfp: "http://stc.za.zaloapp.com/v3/zfp.js",
            sync_supported: ["zing.vn", "zaloapp.com"],
            sync_prefix: "http://za.lab."
        },
        y = {
            config: "_zap",
            isNewVisitor: "_znu",
            vid: "__zi",
            lastPath: "__zlp"
        },
        z = {
            ref: p.referrer || "",
            charset: p.characterSet || p.charset || "",
            platform: navigator.platform || "",
            _screen: screen.width + "x" + screen.height || "",
            lang: navigator.language || navigator.browserLanguage || "",
            colorDepth: screen.colorDepth || "",
            host: p.location.host || "",
            userAgent: navigator.userAgent.toLowerCase(),
            isSupportPostMessage: "undefined" != typeof window.postMessage,
            isJavaEnable: "function" == typeof navigator.javaEnabled && navigator.javaEnabled() === !0,
            isSafari: navigator.userAgent.toLowerCase().indexOf("safari") > -1 && -1 === navigator.userAgent.toLowerCase().indexOf("chrome")
        },
        S = ((new Date).getTime(), {
            tracking: "/w/_zaf.gif",
            log: "/ck/l/",
            sync: "/ck/get/"
        }),
        E = {
            _setAccount: ""
        },
        C = /^\d+\.\w+\.\d+\.\w+$/i,
        b = 0,
        k = window[g.addEventListener ? "addEventListener" : "attachEvent"],
        T = g.addEventListener ? "message" : "onmessage";
    g.onerror = function(t, i, r, a, o) {
        var s = "Error_handle: " + t + " / Url: " + i + " / On line: " + r;
        s += "undefined" != typeof a ? " / Column: " + a : "", s += "undefined" != typeof o ? " / errMsg: " + o : "", n("Error handler: " + s);
        for (x in l) l[x] == i && e(s);
        return !1
    };
    var _ = {
            getFromString: function(e, t) {
                if ("string" == typeof t)
                    for (var n = e + "=", i = t.split(/[;&]/), r = 0; r < i.length; r++) {
                        for (var a = i[r];
                            " " === a.charAt(0);) a = a.substring(1, a.length);
                        if (0 === a.indexOf(n)) return a.substring(n.length, a.length)
                    }
            },
            getTitle: function(e) {
                return e = e || document.title, e.substring(0, 150)
            },
            getPath: function(e) {
                return e = e || g.location.pathname + g.location.search
            },
            getViewPort: function() {
                var e = {};
                return "undefined" != typeof g.innerWidth ? (e.w = g.innerWidth, e.h = g.innerHeight) : "undefined" != typeof p.documentElement && "undefined" != typeof p.documentElement.clientWidth && 0 != p.documentElement.clientWidth ? (e.w = p.documentElement.clientWidth, e.h = p.documentElement.clientHeight) : p.body && (e.w = p.getElementsByTagName("body")[0].clientWidth, e.h = p.getElementsByTagName("body")[0].clientHeight), e.w && e.h ? e.w + "x" + e.h : ""
            },
            getJSONP: function(e) {
                e = e || {}, e.url = e.url || "", e.params = e.params || {}, e.success = e.success || function() {}, e.fail = e.fail || function() {};
                var t = "za" + (new Date).getTime(),
                    n = p.createElement("script"),
                    i = p.getElementsByTagName("head")[0] || p.documentElement;
                g[t] = function(t) {
                    e.success(t)
                }, n.onerror = e.fail, n.src = e.url + "?callback=" + t + "&" + this.objToUrlParams(e.params), n.setAttribute("onload", "this.parentNode.removeChild(this)"), i.appendChild(n)
            },
            objToUrlParams: function(e) {
                var t = "",
                    n = !0;
                for (i in e) n === !1 ? t += "&" : n = !1, t += i + "=" + m(e[i]);
                return t
            },
            sendImage: function(e) {
                e = e || {}, e.url = e.url || "", e.params = e.params || {};
                var t = p.createElement("img");
                t.setAttribute("width", "0"), t.setAttribute("height", "0"), t.setAttribute("onload", "this.parentNode.removeChild(this)"), t.setAttribute("onerror", "this.parentNode.removeChild(this)"), t.src = e.url + "?" + this.objToUrlParams(e.params) + "&r=" + (new Date).getTime();
                var n = document.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(t, n)
            },
            onContentLoaded: function(e) {
                var t = window,
                    n = !1,
                    i = !0,
                    r = t.document,
                    a = r.documentElement,
                    o = r.addEventListener,
                    s = o ? "addEventListener" : "attachEvent",
                    c = o ? "removeEventListener" : "detachEvent",
                    u = o ? "" : "on",
                    d = function(i) {
                        ("readystatechange" != i.type || "complete" == r.readyState) && (("load" == i.type ? t : r)[c](u + i.type, d, !1), !n && (n = !0) && e.call(t, i.type || i))
                    },
                    f = function() {
                        try {
                            a.doScroll("left")
                        } catch (e) {
                            return void setTimeout(f, 50)
                        }
                        d("poll")
                    };
                if ("complete" == r.readyState) e.call(t, "lazy");
                else {
                    if (!o && a.doScroll) {
                        try {
                            i = !t.frameElement
                        } catch (l) {}
                        i && f()
                    }
                    r[s](u + "DOMContentLoaded", d, !1), r[s](u + "readystatechange", d, !1), t[s](u + "load", d, !1)
                }
            },
            getFlashVer: function() {
                var e = "";
                if (navigator.plugins && navigator.mimeTypes.length) {
                    var t = navigator.plugins["Shockwave Flash"];
                    t && t.description && (e = t.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
                } else if (g.ActiveXObject) try {
                    var n = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    n && (e = n.GetVariable("$version")) && (e = e.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
                } catch (i) {}
                return e
            },
            hash: function(e) {
                if (!e || "" === e) return 1;
                for (var t = 0, n = 0, i = e.length - 1; i >= 0; i--) {
                    var r = parseInt(e.charCodeAt(i));
                    t = (t << 6 & 268435455) + r + (r << 14), 0 != (n = 266338304 & t) && (t ^= n >> 21)
                }
                return t
            },
            createIframe: function(e, t, n) {
                var i = p.createElement("iframe");
                return i.style.height = 0, i.style.width = 0, i.marginWidth = 0, i.marginHeight = 0, i.frameBorder = 0, i.scrolling = "no", i.width = 0, i.height = 0, "function" == typeof n && (i.onload = n), i.src = e + "?" + this.objToUrlParams(t), p.body ? p.body.appendChild(i) : p.getElementsByTagName("script")[0].parentNode.appendChild(i), i
            },
            getWinVersion: function(e) {
                e = e || z.userAgent;
                var t = "Windows";
                return /windows 4.10/.test(e) ? t = "Windows 98" : /windows 4.90/.test(e) ? t = "Windows ME" : /windows nt 5.0/.test(e) ? t = "Windows 2000" : /windows nt 5.1/.test(e) ? t = "Windows XP" : /windows nt 6.0/.test(e) ? t = "Windows Vista" : /windows nt 6.1/.test(e) ? t = "Windows 7" : /windows nt 6.2/.test(e) ? t = "Windows 8" : /windows nt 6.3/.test(e) && (t = "Windows 8.1"), t
            },
            getPlatform: function() {
                var e = z.platform.split(" ")[0];
                return "win32" === e.toLowerCase() || "win64" === e.toLowerCase() ? e = this.getWinVersion() : "linux" === e.toLowerCase() && (z.userAgent.indexOf("android") >= 0 ? e = "Android" : z.userAgent.indexOf("mac os") >= 0 && (e = "iOS")), e
            }
        },
        A = {
            get: function(e) {
                function t(e) {
                    if ("undefined" != typeof e && null !== e && "" !== e) {
                        var t = !1;
                        for (x in n) n[x].value == e && (n[x].freq++, t = !0);
                        0 == t && n.push({
                            value: e,
                            freq: 1
                        })
                    }
                }
                var n = [];
                t(this.cookie(e)), t(this.windowStorage(e)), t(this.localStorage(e)), t(this.sessionStorage(e));
                var i = -1,
                    r = void 0;
                for (x in n) n[x].freq > i && (i = n[x].freq, r = n[x].value);
                return r
            },
            set: function(e, t, n) {
                "undefined" != typeof n && this.cookie(e, t, n), this.windowStorage(e, t), this.localStorage(e, t), this.sessionStorage(e, t)
            },
            cookie: function(e, t, n) {
                if (n = n || {}, n.isRootDomain = n.isRootDomain || !1, n.expired = n.expired || v, "undefined" == typeof t) return _.getFromString(e, p.cookie);
                var i = new Date((new Date).getTime() + n.expired),
                    r = "";
                if (n.isRootDomain) {
                    var a = location.hostname.split("."),
                        o = a.length;
                    r = "." + a[o - 2] + "." + a[o - 1]
                }
                p.cookie = e + "=" + t + "; expires=" + i.toUTCString() + "; path=/; domain=" + r
            },
            windowStorage: function(e, t) {
                try {
                    if ("undefined" == typeof t) return _.getFromString(e, g.name);
                    g.name = replace(g.name, e, t)
                } catch (n) {
                    return
                }
            },
            localStorage: function(e, t) {
                try {
                    if (g.localStorage) {
                        if ("undefined" == typeof t) return g.localStorage.getItem(e);
                        g.localStorage.setItem(e, t)
                    }
                } catch (n) {
                    return
                }
            },
            sessionStorage: function(e, t) {
                try {
                    if (g.sessionStorage) {
                        if ("undefined" == typeof t) return g.sessionStorage.getItem(e);
                        g.sessionStorage.setItem(e, t)
                    }
                } catch (n) {
                    return
                }
            }
        },
        P = {
            listEnsureCallback: [],
            listCurrentCallback: [],
            gettingState: "not-yet",
            iframeEle: void 0,
            isValid: function(e) {
                return e = e || b, C.test(e)
            },
            set: function(t) {
                if (this.isValid(t) === !1) return void e("Set visitor id while it is invalid: " + t);
                b = t;
                for (x in this.listEnsureCallback) this.listEnsureCallback[x](t);
                this.listEnsureCallback = [], A.set(y.vid, t, {
                    expired: v,
                    isRootDomain: !0
                })
            },
            getCurrent: function(t) {
                function i() {
                    n("Get visitor from iframe timeout"), s = !0, r(0)
                }

                function r(e) {
                    a.gettingState = "finished", a.isValid(e) && a.set(e), t(e);
                    for (x in a.listCurrentCallback) a.listCurrentCallback[x](e);
                    a.listCurrentCallback = []
                }
                var a = this;
                if (t = t || function() {}, this.isValid()) return void t(b);
                if ("getting" === this.gettingState) return void this.listCurrentCallback.push(t);
                if ("finished" === this.gettingState) return void t(b);
                this.gettingState = "getting";
                var o = A.get(y.vid);
                if (this.isValid(o)) return void r(o);
                var s = !1;
                if (z.isSupportPostMessage && z.isSafari) {
                    var c = g.setTimeout(function() {
                            i()
                        }, 6e3),
                        u = !1;
                    this.iframeEle = _.createIframe(w.zug, {
                        zacc: E._setAccount,
                        v: h,
                        h: _.hash(z.host)
                    }, function() {
                        u || (n("Iframe loaded"), g.clearTimeout(c), c = g.setTimeout(function() {
                            i()
                        }, 1e3))
                    }), this.isIframeCreated = !0, k(T, function(t) {
                        if (!u) {
                            if (s) return void n("Receive VID after timeout: " + t.data);
                            var i = _.getFromString("action", t.data);
                            if ("send_vid" != i) return void e("action is not send_vid: " + t.data);
                            u = !0;
                            var a = _.getFromString("vid", t.data);
                            if ("undefined" == typeof a) return void e("VID receive from iframe undefined: " + t.data);
                            n("Receive VID from iframe: " + a), g.clearTimeout(c), r(a)
                        }
                    }, !1)
                } else n("Post message does not support or this is not safari"), r(0)
            },
            getEnsure: function(e) {
                return 0 == this.isValid() ? void("function" == typeof e && this.listEnsureCallback.push(e)) : ("function" == typeof e && e(b), b)
            }
        },
        V = {
            key: "_zfp",
            valuePattern: /^\d+\.\d+\.\w+$/,
            isChecked: !1,
            scriptId: "zfp-script",
            check: function() {
                var e = V;
                if (e.isChecked !== !0) {
                    e.isChecked = !0;
                    var t = e.getCurrentFingerPrint();
                    if (("undefined" == typeof t || e.valuePattern.test(t) === !1) && null === p.getElementById(e.scriptId)) {
                        var n = p.createElement("script");
                        n.id = e.scriptId, n.async = 1, n.src = w.zfp + "?" + Math.floor((new Date).getTime() / 1e3 / 60 / 60 / 24);
                        var i = document.getElementsByTagName("script")[0];
                        i.parentNode.insertBefore(n, i)
                    }
                }
            },
            getCurrentFingerPrint: function() {
                return A.get(V.key)
            }
        },
        I = {
            delayTime: 1e3,
            reqStatus: 0,
            request: function(e, t) {
                if (P.isValid()) return !0;
                if (0 === I.reqStatus) I.reqStatus = 1, g.setTimeout(function() {
                    I.reqStatus = 2
                }, I.delayTime);
                else if (1 === I.reqStatus) return g.setTimeout(function() {
                    e.apply(this, t)
                }, I.delayTime + 1), !1;
                return !0
            }
        };
    return d(), {
        version: h,
        trackEvent: function(e, t, n, i) {
            return "undefined" == typeof e || "undefined" == typeof t ? void console.error("category and action are required in trackEvent API") : void P.getCurrent(function(r) {
                c(e, t, n, i)
            })
        },
        trackPageview: function(e, t) {
            P.getCurrent(function(n) {
                o(e, t)
            })
        },
        getVisitorID: function(e) {
            return P.getEnsure(e)
        },
        Storage: A
    }
}();
! function(e) {
    var t = window.ZA_q || [];
    for (i in t) 2 === t[i].length && "function" == typeof ZA[t[i][0]] && ZA[t[i][0]].apply(this, t[i][1])
}();