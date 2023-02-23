/*!
 * jQuery JavaScript Library v3.6.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-08-26T17:52Z
 */
!(function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = t.document
              ? e(t, !0)
              : function (t) {
                    if (!t.document) throw new Error("jQuery requires a window with a document");
                    return e(t);
                })
        : e(t);
})("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    var n = [],
        i = Object.getPrototypeOf,
        o = n.slice,
        s = n.flat
            ? function (t) {
                  return n.flat.call(t);
              }
            : function (t) {
                  return n.concat.apply([], t);
              },
        r = n.push,
        a = n.indexOf,
        l = {},
        c = l.toString,
        h = l.hasOwnProperty,
        u = h.toString,
        d = u.call(Object),
        f = {},
        p = function (t) {
            return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item;
        },
        g = function (t) {
            return null != t && t === t.window;
        },
        m = t.document,
        b = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function x(t, e, n) {
        var i,
            o,
            s = (n = n || m).createElement("script");
        if (((s.text = t), e)) for (i in b) (o = e[i] || (e.getAttribute && e.getAttribute(i))) && s.setAttribute(i, o);
        n.head.appendChild(s).parentNode.removeChild(s);
    }
    function y(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[c.call(t)] || "object" : typeof t;
    }
    var v = "3.6.1",
        w = function (t, e) {
            return new w.fn.init(t, e);
        };
    function _(t) {
        var e = !!t && "length" in t && t.length,
            n = y(t);
        return !p(t) && !g(t) && ("array" === n || 0 === e || ("number" == typeof e && e > 0 && e - 1 in t));
    }
    (w.fn = w.prototype = {
        jquery: v,
        constructor: w,
        length: 0,
        toArray: function () {
            return o.call(this);
        },
        get: function (t) {
            return null == t ? o.call(this) : t < 0 ? this[t + this.length] : this[t];
        },
        pushStack: function (t) {
            var e = w.merge(this.constructor(), t);
            return (e.prevObject = this), e;
        },
        each: function (t) {
            return w.each(this, t);
        },
        map: function (t) {
            return this.pushStack(
                w.map(this, function (e, n) {
                    return t.call(e, n, e);
                })
            );
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        even: function () {
            return this.pushStack(
                w.grep(this, function (t, e) {
                    return (e + 1) % 2;
                })
            );
        },
        odd: function () {
            return this.pushStack(
                w.grep(this, function (t, e) {
                    return e % 2;
                })
            );
        },
        eq: function (t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: r,
        sort: n.sort,
        splice: n.splice,
    }),
        (w.extend = w.fn.extend = function () {
            var t,
                e,
                n,
                i,
                o,
                s,
                r = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof r && ((c = r), (r = arguments[a] || {}), a++), "object" == typeof r || p(r) || (r = {}), a === l && ((r = this), a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t)
                        (i = t[e]),
                            "__proto__" !== e &&
                                r !== i &&
                                (c && i && (w.isPlainObject(i) || (o = Array.isArray(i)))
                                    ? ((n = r[e]), (s = o && !Array.isArray(n) ? [] : o || w.isPlainObject(n) ? n : {}), (o = !1), (r[e] = w.extend(c, s, i)))
                                    : void 0 !== i && (r[e] = i));
            return r;
        }),
        w.extend({
            expando: "jQuery" + (v + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t);
            },
            noop: function () {},
            isPlainObject: function (t) {
                var e, n;
                return !(!t || "[object Object]" !== c.call(t)) && (!(e = i(t)) || ("function" == typeof (n = h.call(e, "constructor") && e.constructor) && u.call(n) === d));
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0;
            },
            globalEval: function (t, e, n) {
                x(t, { nonce: e && e.nonce }, n);
            },
            each: function (t, e) {
                var n,
                    i = 0;
                if (_(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
                return t;
            },
            makeArray: function (t, e) {
                var n = e || [];
                return null != t && (_(Object(t)) ? w.merge(n, "string" == typeof t ? [t] : t) : r.call(n, t)), n;
            },
            inArray: function (t, e, n) {
                return null == e ? -1 : a.call(e, t, n);
            },
            merge: function (t, e) {
                for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
                return (t.length = o), t;
            },
            grep: function (t, e, n) {
                for (var i = [], o = 0, s = t.length, r = !n; o < s; o++) !e(t[o], o) !== r && i.push(t[o]);
                return i;
            },
            map: function (t, e, n) {
                var i,
                    o,
                    r = 0,
                    a = [];
                if (_(t)) for (i = t.length; r < i; r++) null != (o = e(t[r], r, n)) && a.push(o);
                else for (r in t) null != (o = e(t[r], r, n)) && a.push(o);
                return s(a);
            },
            guid: 1,
            support: f,
        }),
        "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
        w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            l["[object " + e + "]"] = e.toLowerCase();
        });
    var S =
        /*!
         * Sizzle CSS Selector Engine v2.3.6
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2021-02-16
         */
        (function (t) {
            var e,
                n,
                i,
                o,
                s,
                r,
                a,
                l,
                c,
                h,
                u,
                d,
                f,
                p,
                g,
                m,
                b,
                x,
                y,
                v = "sizzle" + 1 * new Date(),
                w = t.document,
                _ = 0,
                S = 0,
                C = lt(),
                k = lt(),
                T = lt(),
                M = lt(),
                P = function (t, e) {
                    return t === e && (u = !0), 0;
                },
                D = {}.hasOwnProperty,
                A = [],
                E = A.pop,
                L = A.push,
                O = A.push,
                R = A.slice,
                $ = function (t, e) {
                    for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
                    return -1;
                },
                I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                F = "[\\x20\\t\\r\\n\\f]",
                j = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                z = "\\[[\\x20\\t\\r\\n\\f]*(" + j + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + F + "*\\]",
                N = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
                H = new RegExp(F + "+", "g"),
                B = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
                W = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                V = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
                q = new RegExp(F + "|>"),
                Y = new RegExp(N),
                X = new RegExp("^" + j + "$"),
                U = {
                    ID: new RegExp("^#(" + j + ")"),
                    CLASS: new RegExp("^\\.(" + j + ")"),
                    TAG: new RegExp("^(" + j + "|[*])"),
                    ATTR: new RegExp("^" + z),
                    PSEUDO: new RegExp("^" + N),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                    bool: new RegExp("^(?:" + I + ")$", "i"),
                    needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i"),
                },
                K = /HTML$/i,
                G = /^(?:input|select|textarea|button)$/i,
                Z = /^h\d$/i,
                Q = /^[^{]+\{\s*\[native \w/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                tt = /[+~]/,
                et = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
                nt = function (t, e) {
                    var n = "0x" + t.slice(1) - 65536;
                    return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
                },
                it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ot = function (t, e) {
                    return e ? ("\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " ") : "\\" + t;
                },
                st = function () {
                    d();
                },
                rt = vt(
                    function (t) {
                        return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase();
                    },
                    { dir: "parentNode", next: "legend" }
                );
            try {
                O.apply((A = R.call(w.childNodes)), w.childNodes), A[w.childNodes.length].nodeType;
            } catch (t) {
                O = {
                    apply: A.length
                        ? function (t, e) {
                              L.apply(t, R.call(e));
                          }
                        : function (t, e) {
                              for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                              t.length = n - 1;
                          },
                };
            }
            function at(t, e, i, o) {
                var s,
                    a,
                    c,
                    h,
                    u,
                    p,
                    b,
                    x = e && e.ownerDocument,
                    w = e ? e.nodeType : 9;
                if (((i = i || []), "string" != typeof t || !t || (1 !== w && 9 !== w && 11 !== w))) return i;
                if (!o && (d(e), (e = e || f), g)) {
                    if (11 !== w && (u = J.exec(t)))
                        if ((s = u[1])) {
                            if (9 === w) {
                                if (!(c = e.getElementById(s))) return i;
                                if (c.id === s) return i.push(c), i;
                            } else if (x && (c = x.getElementById(s)) && y(e, c) && c.id === s) return i.push(c), i;
                        } else {
                            if (u[2]) return O.apply(i, e.getElementsByTagName(t)), i;
                            if ((s = u[3]) && n.getElementsByClassName && e.getElementsByClassName) return O.apply(i, e.getElementsByClassName(s)), i;
                        }
                    if (n.qsa && !M[t + " "] && (!m || !m.test(t)) && (1 !== w || "object" !== e.nodeName.toLowerCase())) {
                        if (((b = t), (x = e), 1 === w && (q.test(t) || V.test(t)))) {
                            for (((x = (tt.test(t) && bt(e.parentNode)) || e) === e && n.scope) || ((h = e.getAttribute("id")) ? (h = h.replace(it, ot)) : e.setAttribute("id", (h = v))), a = (p = r(t)).length; a--; )
                                p[a] = (h ? "#" + h : ":scope") + " " + yt(p[a]);
                            b = p.join(",");
                        }
                        try {
                            return O.apply(i, x.querySelectorAll(b)), i;
                        } catch (e) {
                            M(t, !0);
                        } finally {
                            h === v && e.removeAttribute("id");
                        }
                    }
                }
                return l(t.replace(B, "$1"), e, i, o);
            }
            function lt() {
                var t = [];
                return function e(n, o) {
                    return t.push(n + " ") > i.cacheLength && delete e[t.shift()], (e[n + " "] = o);
                };
            }
            function ct(t) {
                return (t[v] = !0), t;
            }
            function ht(t) {
                var e = f.createElement("fieldset");
                try {
                    return !!t(e);
                } catch (t) {
                    return !1;
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), (e = null);
                }
            }
            function ut(t, e) {
                for (var n = t.split("|"), o = n.length; o--; ) i.attrHandle[n[o]] = e;
            }
            function dt(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (i) return i;
                if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
                return t ? 1 : -1;
            }
            function ft(t) {
                return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t;
                };
            }
            function pt(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t;
                };
            }
            function gt(t) {
                return function (e) {
                    return "form" in e
                        ? e.parentNode && !1 === e.disabled
                            ? "label" in e
                                ? "label" in e.parentNode
                                    ? e.parentNode.disabled === t
                                    : e.disabled === t
                                : e.isDisabled === t || (e.isDisabled !== !t && rt(e) === t)
                            : e.disabled === t
                        : "label" in e && e.disabled === t;
                };
            }
            function mt(t) {
                return ct(function (e) {
                    return (
                        (e = +e),
                        ct(function (n, i) {
                            for (var o, s = t([], n.length, e), r = s.length; r--; ) n[(o = s[r])] && (n[o] = !(i[o] = n[o]));
                        })
                    );
                });
            }
            function bt(t) {
                return t && void 0 !== t.getElementsByTagName && t;
            }
            for (e in ((n = at.support = {}),
            (s = at.isXML = function (t) {
                var e = t && t.namespaceURI,
                    n = t && (t.ownerDocument || t).documentElement;
                return !K.test(e || (n && n.nodeName) || "HTML");
            }),
            (d = at.setDocument = function (t) {
                var e,
                    o,
                    r = t ? t.ownerDocument || t : w;
                return r != f && 9 === r.nodeType && r.documentElement
                    ? ((p = (f = r).documentElement),
                      (g = !s(f)),
                      w != f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", st, !1) : o.attachEvent && o.attachEvent("onunload", st)),
                      (n.scope = ht(function (t) {
                          return p.appendChild(t).appendChild(f.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length;
                      })),
                      (n.attributes = ht(function (t) {
                          return (t.className = "i"), !t.getAttribute("className");
                      })),
                      (n.getElementsByTagName = ht(function (t) {
                          return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length;
                      })),
                      (n.getElementsByClassName = Q.test(f.getElementsByClassName)),
                      (n.getById = ht(function (t) {
                          return (p.appendChild(t).id = v), !f.getElementsByName || !f.getElementsByName(v).length;
                      })),
                      n.getById
                          ? ((i.filter.ID = function (t) {
                                var e = t.replace(et, nt);
                                return function (t) {
                                    return t.getAttribute("id") === e;
                                };
                            }),
                            (i.find.ID = function (t, e) {
                                if (void 0 !== e.getElementById && g) {
                                    var n = e.getElementById(t);
                                    return n ? [n] : [];
                                }
                            }))
                          : ((i.filter.ID = function (t) {
                                var e = t.replace(et, nt);
                                return function (t) {
                                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                    return n && n.value === e;
                                };
                            }),
                            (i.find.ID = function (t, e) {
                                if (void 0 !== e.getElementById && g) {
                                    var n,
                                        i,
                                        o,
                                        s = e.getElementById(t);
                                    if (s) {
                                        if ((n = s.getAttributeNode("id")) && n.value === t) return [s];
                                        for (o = e.getElementsByName(t), i = 0; (s = o[i++]); ) if ((n = s.getAttributeNode("id")) && n.value === t) return [s];
                                    }
                                    return [];
                                }
                            })),
                      (i.find.TAG = n.getElementsByTagName
                          ? function (t, e) {
                                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0;
                            }
                          : function (t, e) {
                                var n,
                                    i = [],
                                    o = 0,
                                    s = e.getElementsByTagName(t);
                                if ("*" === t) {
                                    for (; (n = s[o++]); ) 1 === n.nodeType && i.push(n);
                                    return i;
                                }
                                return s;
                            }),
                      (i.find.CLASS =
                          n.getElementsByClassName &&
                          function (t, e) {
                              if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t);
                          }),
                      (b = []),
                      (m = []),
                      (n.qsa = Q.test(f.querySelectorAll)) &&
                          (ht(function (t) {
                              var e;
                              (p.appendChild(t).innerHTML = "<a id='" + v + "'></a><select id='" + v + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                  t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                                  t.querySelectorAll("[selected]").length || m.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + I + ")"),
                                  t.querySelectorAll("[id~=" + v + "-]").length || m.push("~="),
                                  (e = f.createElement("input")).setAttribute("name", ""),
                                  t.appendChild(e),
                                  t.querySelectorAll("[name='']").length || m.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                                  t.querySelectorAll(":checked").length || m.push(":checked"),
                                  t.querySelectorAll("a#" + v + "+*").length || m.push(".#.+[+~]"),
                                  t.querySelectorAll("\\\f"),
                                  m.push("[\\r\\n\\f]");
                          }),
                          ht(function (t) {
                              t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                              var e = f.createElement("input");
                              e.setAttribute("type", "hidden"),
                                  t.appendChild(e).setAttribute("name", "D"),
                                  t.querySelectorAll("[name=d]").length && m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                                  2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                                  (p.appendChild(t).disabled = !0),
                                  2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                                  t.querySelectorAll("*,:x"),
                                  m.push(",.*:");
                          })),
                      (n.matchesSelector = Q.test((x = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector))) &&
                          ht(function (t) {
                              (n.disconnectedMatch = x.call(t, "*")), x.call(t, "[s!='']:x"), b.push("!=", N);
                          }),
                      (m = m.length && new RegExp(m.join("|"))),
                      (b = b.length && new RegExp(b.join("|"))),
                      (e = Q.test(p.compareDocumentPosition)),
                      (y =
                          e || Q.test(p.contains)
                              ? function (t, e) {
                                    var n = 9 === t.nodeType ? t.documentElement : t,
                                        i = e && e.parentNode;
                                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
                                }
                              : function (t, e) {
                                    if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                                    return !1;
                                }),
                      (P = e
                          ? function (t, e) {
                                if (t === e) return (u = !0), 0;
                                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                return (
                                    i ||
                                    (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || (!n.sortDetached && e.compareDocumentPosition(t) === i)
                                        ? t == f || (t.ownerDocument == w && y(w, t))
                                            ? -1
                                            : e == f || (e.ownerDocument == w && y(w, e))
                                            ? 1
                                            : h
                                            ? $(h, t) - $(h, e)
                                            : 0
                                        : 4 & i
                                        ? -1
                                        : 1)
                                );
                            }
                          : function (t, e) {
                                if (t === e) return (u = !0), 0;
                                var n,
                                    i = 0,
                                    o = t.parentNode,
                                    s = e.parentNode,
                                    r = [t],
                                    a = [e];
                                if (!o || !s) return t == f ? -1 : e == f ? 1 : o ? -1 : s ? 1 : h ? $(h, t) - $(h, e) : 0;
                                if (o === s) return dt(t, e);
                                for (n = t; (n = n.parentNode); ) r.unshift(n);
                                for (n = e; (n = n.parentNode); ) a.unshift(n);
                                for (; r[i] === a[i]; ) i++;
                                return i ? dt(r[i], a[i]) : r[i] == w ? -1 : a[i] == w ? 1 : 0;
                            }),
                      f)
                    : f;
            }),
            (at.matches = function (t, e) {
                return at(t, null, null, e);
            }),
            (at.matchesSelector = function (t, e) {
                if ((d(t), n.matchesSelector && g && !M[e + " "] && (!b || !b.test(e)) && (!m || !m.test(e))))
                    try {
                        var i = x.call(t, e);
                        if (i || n.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return i;
                    } catch (t) {
                        M(e, !0);
                    }
                return at(e, f, null, [t]).length > 0;
            }),
            (at.contains = function (t, e) {
                return (t.ownerDocument || t) != f && d(t), y(t, e);
            }),
            (at.attr = function (t, e) {
                (t.ownerDocument || t) != f && d(t);
                var o = i.attrHandle[e.toLowerCase()],
                    s = o && D.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
                return void 0 !== s ? s : n.attributes || !g ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null;
            }),
            (at.escape = function (t) {
                return (t + "").replace(it, ot);
            }),
            (at.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t);
            }),
            (at.uniqueSort = function (t) {
                var e,
                    i = [],
                    o = 0,
                    s = 0;
                if (((u = !n.detectDuplicates), (h = !n.sortStable && t.slice(0)), t.sort(P), u)) {
                    for (; (e = t[s++]); ) e === t[s] && (o = i.push(s));
                    for (; o--; ) t.splice(i[o], 1);
                }
                return (h = null), t;
            }),
            (o = at.getText = function (t) {
                var e,
                    n = "",
                    i = 0,
                    s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += o(t);
                    } else if (3 === s || 4 === s) return t.nodeValue;
                } else for (; (e = t[i++]); ) n += o(e);
                return n;
            }),
            (i = at.selectors = {
                cacheLength: 50,
                createPseudo: ct,
                match: U,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function (t) {
                        return (t[1] = t[1].replace(et, nt)), (t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt)), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                    },
                    CHILD: function (t) {
                        return (
                            (t[1] = t[1].toLowerCase()),
                            "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3]))), (t[5] = +(t[7] + t[8] || "odd" === t[3]))) : t[3] && at.error(t[0]),
                            t
                        );
                    },
                    PSEUDO: function (t) {
                        var e,
                            n = !t[6] && t[2];
                        return U.CHILD.test(t[0])
                            ? null
                            : (t[3] ? (t[2] = t[4] || t[5] || "") : n && Y.test(n) && (e = r(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))), t.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(et, nt).toLowerCase();
                        return "*" === t
                            ? function () {
                                  return !0;
                              }
                            : function (t) {
                                  return t.nodeName && t.nodeName.toLowerCase() === e;
                              };
                    },
                    CLASS: function (t) {
                        var e = C[t + " "];
                        return (
                            e ||
                            ((e = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + t + "(" + F + "|$)")) &&
                                C(t, function (t) {
                                    return e.test(("string" == typeof t.className && t.className) || (void 0 !== t.getAttribute && t.getAttribute("class")) || "");
                                }))
                        );
                    },
                    ATTR: function (t, e, n) {
                        return function (i) {
                            var o = at.attr(i, t);
                            return null == o
                                ? "!=" === e
                                : !e ||
                                      ((o += ""),
                                      "=" === e
                                          ? o === n
                                          : "!=" === e
                                          ? o !== n
                                          : "^=" === e
                                          ? n && 0 === o.indexOf(n)
                                          : "*=" === e
                                          ? n && o.indexOf(n) > -1
                                          : "$=" === e
                                          ? n && o.slice(-n.length) === n
                                          : "~=" === e
                                          ? (" " + o.replace(H, " ") + " ").indexOf(n) > -1
                                          : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"));
                        };
                    },
                    CHILD: function (t, e, n, i, o) {
                        var s = "nth" !== t.slice(0, 3),
                            r = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === o
                            ? function (t) {
                                  return !!t.parentNode;
                              }
                            : function (e, n, l) {
                                  var c,
                                      h,
                                      u,
                                      d,
                                      f,
                                      p,
                                      g = s !== r ? "nextSibling" : "previousSibling",
                                      m = e.parentNode,
                                      b = a && e.nodeName.toLowerCase(),
                                      x = !l && !a,
                                      y = !1;
                                  if (m) {
                                      if (s) {
                                          for (; g; ) {
                                              for (d = e; (d = d[g]); ) if (a ? d.nodeName.toLowerCase() === b : 1 === d.nodeType) return !1;
                                              p = g = "only" === t && !p && "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (((p = [r ? m.firstChild : m.lastChild]), r && x)) {
                                          for (
                                              y = (f = (c = (h = (u = (d = m)[v] || (d[v] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === _ && c[1]) && c[2], d = f && m.childNodes[f];
                                              (d = (++f && d && d[g]) || (y = f = 0) || p.pop());

                                          )
                                              if (1 === d.nodeType && ++y && d === e) {
                                                  h[t] = [_, f, y];
                                                  break;
                                              }
                                      } else if ((x && (y = f = (c = (h = (u = (d = e)[v] || (d[v] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === _ && c[1]), !1 === y))
                                          for (
                                              ;
                                              (d = (++f && d && d[g]) || (y = f = 0) || p.pop()) &&
                                              ((a ? d.nodeName.toLowerCase() !== b : 1 !== d.nodeType) || !++y || (x && ((h = (u = d[v] || (d[v] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] = [_, y]), d !== e));

                                          );
                                      return (y -= o) === i || (y % i == 0 && y / i >= 0);
                                  }
                              };
                    },
                    PSEUDO: function (t, e) {
                        var n,
                            o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                        return o[v]
                            ? o(e)
                            : o.length > 1
                            ? ((n = [t, t, "", e]),
                              i.setFilters.hasOwnProperty(t.toLowerCase())
                                  ? ct(function (t, n) {
                                        for (var i, s = o(t, e), r = s.length; r--; ) t[(i = $(t, s[r]))] = !(n[i] = s[r]);
                                    })
                                  : function (t) {
                                        return o(t, 0, n);
                                    })
                            : o;
                    },
                },
                pseudos: {
                    not: ct(function (t) {
                        var e = [],
                            n = [],
                            i = a(t.replace(B, "$1"));
                        return i[v]
                            ? ct(function (t, e, n, o) {
                                  for (var s, r = i(t, null, o, []), a = t.length; a--; ) (s = r[a]) && (t[a] = !(e[a] = s));
                              })
                            : function (t, o, s) {
                                  return (e[0] = t), i(e, null, s, n), (e[0] = null), !n.pop();
                              };
                    }),
                    has: ct(function (t) {
                        return function (e) {
                            return at(t, e).length > 0;
                        };
                    }),
                    contains: ct(function (t) {
                        return (
                            (t = t.replace(et, nt)),
                            function (e) {
                                return (e.textContent || o(e)).indexOf(t) > -1;
                            }
                        );
                    }),
                    lang: ct(function (t) {
                        return (
                            X.test(t || "") || at.error("unsupported lang: " + t),
                            (t = t.replace(et, nt).toLowerCase()),
                            function (e) {
                                var n;
                                do {
                                    if ((n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id;
                    },
                    root: function (t) {
                        return t === p;
                    },
                    focus: function (t) {
                        return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                    },
                    enabled: gt(!1),
                    disabled: gt(!0),
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return ("input" === e && !!t.checked) || ("option" === e && !!t.selected);
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (t) {
                        return !i.pseudos.empty(t);
                    },
                    header: function (t) {
                        return Z.test(t.nodeName);
                    },
                    input: function (t) {
                        return G.test(t.nodeName);
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return ("input" === e && "button" === t.type) || "button" === e;
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                    },
                    first: mt(function () {
                        return [0];
                    }),
                    last: mt(function (t, e) {
                        return [e - 1];
                    }),
                    eq: mt(function (t, e, n) {
                        return [n < 0 ? n + e : n];
                    }),
                    even: mt(function (t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t;
                    }),
                    odd: mt(function (t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t;
                    }),
                    lt: mt(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0; ) t.push(i);
                        return t;
                    }),
                    gt: mt(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
                        return t;
                    }),
                },
            }),
            (i.pseudos.nth = i.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                i.pseudos[e] = ft(e);
            for (e in { submit: !0, reset: !0 }) i.pseudos[e] = pt(e);
            function xt() {}
            function yt(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                return i;
            }
            function vt(t, e, n) {
                var i = e.dir,
                    o = e.next,
                    s = o || i,
                    r = n && "parentNode" === s,
                    a = S++;
                return e.first
                    ? function (e, n, o) {
                          for (; (e = e[i]); ) if (1 === e.nodeType || r) return t(e, n, o);
                          return !1;
                      }
                    : function (e, n, l) {
                          var c,
                              h,
                              u,
                              d = [_, a];
                          if (l) {
                              for (; (e = e[i]); ) if ((1 === e.nodeType || r) && t(e, n, l)) return !0;
                          } else
                              for (; (e = e[i]); )
                                  if (1 === e.nodeType || r)
                                      if (((h = (u = e[v] || (e[v] = {}))[e.uniqueID] || (u[e.uniqueID] = {})), o && o === e.nodeName.toLowerCase())) e = e[i] || e;
                                      else {
                                          if ((c = h[s]) && c[0] === _ && c[1] === a) return (d[2] = c[2]);
                                          if (((h[s] = d), (d[2] = t(e, n, l)))) return !0;
                                      }
                          return !1;
                      };
            }
            function wt(t) {
                return t.length > 1
                    ? function (e, n, i) {
                          for (var o = t.length; o--; ) if (!t[o](e, n, i)) return !1;
                          return !0;
                      }
                    : t[0];
            }
            function _t(t, e, n, i, o) {
                for (var s, r = [], a = 0, l = t.length, c = null != e; a < l; a++) (s = t[a]) && ((n && !n(s, i, o)) || (r.push(s), c && e.push(a)));
                return r;
            }
            function St(t, e, n, i, o, s) {
                return (
                    i && !i[v] && (i = St(i)),
                    o && !o[v] && (o = St(o, s)),
                    ct(function (s, r, a, l) {
                        var c,
                            h,
                            u,
                            d = [],
                            f = [],
                            p = r.length,
                            g =
                                s ||
                                (function (t, e, n) {
                                    for (var i = 0, o = e.length; i < o; i++) at(t, e[i], n);
                                    return n;
                                })(e || "*", a.nodeType ? [a] : a, []),
                            m = !t || (!s && e) ? g : _t(g, d, t, a, l),
                            b = n ? (o || (s ? t : p || i) ? [] : r) : m;
                        if ((n && n(m, b, a, l), i)) for (c = _t(b, f), i(c, [], a, l), h = c.length; h--; ) (u = c[h]) && (b[f[h]] = !(m[f[h]] = u));
                        if (s) {
                            if (o || t) {
                                if (o) {
                                    for (c = [], h = b.length; h--; ) (u = b[h]) && c.push((m[h] = u));
                                    o(null, (b = []), c, l);
                                }
                                for (h = b.length; h--; ) (u = b[h]) && (c = o ? $(s, u) : d[h]) > -1 && (s[c] = !(r[c] = u));
                            }
                        } else (b = _t(b === r ? b.splice(p, b.length) : b)), o ? o(null, r, b, l) : O.apply(r, b);
                    })
                );
            }
            function Ct(t) {
                for (
                    var e,
                        n,
                        o,
                        s = t.length,
                        r = i.relative[t[0].type],
                        a = r || i.relative[" "],
                        l = r ? 1 : 0,
                        h = vt(
                            function (t) {
                                return t === e;
                            },
                            a,
                            !0
                        ),
                        u = vt(
                            function (t) {
                                return $(e, t) > -1;
                            },
                            a,
                            !0
                        ),
                        d = [
                            function (t, n, i) {
                                var o = (!r && (i || n !== c)) || ((e = n).nodeType ? h(t, n, i) : u(t, n, i));
                                return (e = null), o;
                            },
                        ];
                    l < s;
                    l++
                )
                    if ((n = i.relative[t[l].type])) d = [vt(wt(d), n)];
                    else {
                        if ((n = i.filter[t[l].type].apply(null, t[l].matches))[v]) {
                            for (o = ++l; o < s && !i.relative[t[o].type]; o++);
                            return St(l > 1 && wt(d), l > 1 && yt(t.slice(0, l - 1).concat({ value: " " === t[l - 2].type ? "*" : "" })).replace(B, "$1"), n, l < o && Ct(t.slice(l, o)), o < s && Ct((t = t.slice(o))), o < s && yt(t));
                        }
                        d.push(n);
                    }
                return wt(d);
            }
            return (
                (xt.prototype = i.filters = i.pseudos),
                (i.setFilters = new xt()),
                (r = at.tokenize = function (t, e) {
                    var n,
                        o,
                        s,
                        r,
                        a,
                        l,
                        c,
                        h = k[t + " "];
                    if (h) return e ? 0 : h.slice(0);
                    for (a = t, l = [], c = i.preFilter; a; ) {
                        for (r in ((n && !(o = W.exec(a))) || (o && (a = a.slice(o[0].length) || a), l.push((s = []))),
                        (n = !1),
                        (o = V.exec(a)) && ((n = o.shift()), s.push({ value: n, type: o[0].replace(B, " ") }), (a = a.slice(n.length))),
                        i.filter))
                            !(o = U[r].exec(a)) || (c[r] && !(o = c[r](o))) || ((n = o.shift()), s.push({ value: n, type: r, matches: o }), (a = a.slice(n.length)));
                        if (!n) break;
                    }
                    return e ? a.length : a ? at.error(t) : k(t, l).slice(0);
                }),
                (a = at.compile = function (t, e) {
                    var n,
                        o = [],
                        s = [],
                        a = T[t + " "];
                    if (!a) {
                        for (e || (e = r(t)), n = e.length; n--; ) (a = Ct(e[n]))[v] ? o.push(a) : s.push(a);
                        (a = T(
                            t,
                            (function (t, e) {
                                var n = e.length > 0,
                                    o = t.length > 0,
                                    s = function (s, r, a, l, h) {
                                        var u,
                                            p,
                                            m,
                                            b = 0,
                                            x = "0",
                                            y = s && [],
                                            v = [],
                                            w = c,
                                            S = s || (o && i.find.TAG("*", h)),
                                            C = (_ += null == w ? 1 : Math.random() || 0.1),
                                            k = S.length;
                                        for (h && (c = r == f || r || h); x !== k && null != (u = S[x]); x++) {
                                            if (o && u) {
                                                for (p = 0, r || u.ownerDocument == f || (d(u), (a = !g)); (m = t[p++]); )
                                                    if (m(u, r || f, a)) {
                                                        l.push(u);
                                                        break;
                                                    }
                                                h && (_ = C);
                                            }
                                            n && ((u = !m && u) && b--, s && y.push(u));
                                        }
                                        if (((b += x), n && x !== b)) {
                                            for (p = 0; (m = e[p++]); ) m(y, v, r, a);
                                            if (s) {
                                                if (b > 0) for (; x--; ) y[x] || v[x] || (v[x] = E.call(l));
                                                v = _t(v);
                                            }
                                            O.apply(l, v), h && !s && v.length > 0 && b + e.length > 1 && at.uniqueSort(l);
                                        }
                                        return h && ((_ = C), (c = w)), y;
                                    };
                                return n ? ct(s) : s;
                            })(s, o)
                        )),
                            (a.selector = t);
                    }
                    return a;
                }),
                (l = at.select = function (t, e, n, o) {
                    var s,
                        l,
                        c,
                        h,
                        u,
                        d = "function" == typeof t && t,
                        f = !o && r((t = d.selector || t));
                    if (((n = n || []), 1 === f.length)) {
                        if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
                            if (!(e = (i.find.ID(c.matches[0].replace(et, nt), e) || [])[0])) return n;
                            d && (e = e.parentNode), (t = t.slice(l.shift().value.length));
                        }
                        for (s = U.needsContext.test(t) ? 0 : l.length; s-- && ((c = l[s]), !i.relative[(h = c.type)]); )
                            if ((u = i.find[h]) && (o = u(c.matches[0].replace(et, nt), (tt.test(l[0].type) && bt(e.parentNode)) || e))) {
                                if ((l.splice(s, 1), !(t = o.length && yt(l)))) return O.apply(n, o), n;
                                break;
                            }
                    }
                    return (d || a(t, f))(o, e, !g, n, !e || (tt.test(t) && bt(e.parentNode)) || e), n;
                }),
                (n.sortStable = v.split("").sort(P).join("") === v),
                (n.detectDuplicates = !!u),
                d(),
                (n.sortDetached = ht(function (t) {
                    return 1 & t.compareDocumentPosition(f.createElement("fieldset"));
                })),
                ht(function (t) {
                    return (t.innerHTML = "<a href='#'></a>"), "#" === t.firstChild.getAttribute("href");
                }) ||
                    ut("type|href|height|width", function (t, e, n) {
                        if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
                    }),
                (n.attributes &&
                    ht(function (t) {
                        return (t.innerHTML = "<input/>"), t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
                    })) ||
                    ut("value", function (t, e, n) {
                        if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
                    }),
                ht(function (t) {
                    return null == t.getAttribute("disabled");
                }) ||
                    ut(I, function (t, e, n) {
                        var i;
                        if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
                    }),
                at
            );
        })(t);
    (w.find = S), (w.expr = S.selectors), (w.expr[":"] = w.expr.pseudos), (w.uniqueSort = w.unique = S.uniqueSort), (w.text = S.getText), (w.isXMLDoc = S.isXML), (w.contains = S.contains), (w.escapeSelector = S.escape);
    var C = function (t, e, n) {
            for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
                if (1 === t.nodeType) {
                    if (o && w(t).is(n)) break;
                    i.push(t);
                }
            return i;
        },
        k = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n;
        },
        T = w.expr.match.needsContext;
    function M(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
    }
    var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(t, e, n) {
        return p(e)
            ? w.grep(t, function (t, i) {
                  return !!e.call(t, i, t) !== n;
              })
            : e.nodeType
            ? w.grep(t, function (t) {
                  return (t === e) !== n;
              })
            : "string" != typeof e
            ? w.grep(t, function (t) {
                  return a.call(e, t) > -1 !== n;
              })
            : w.filter(e, t, n);
    }
    (w.filter = function (t, e, n) {
        var i = e[0];
        return (
            n && (t = ":not(" + t + ")"),
            1 === e.length && 1 === i.nodeType
                ? w.find.matchesSelector(i, t)
                    ? [i]
                    : []
                : w.find.matches(
                      t,
                      w.grep(e, function (t) {
                          return 1 === t.nodeType;
                      })
                  )
        );
    }),
        w.fn.extend({
            find: function (t) {
                var e,
                    n,
                    i = this.length,
                    o = this;
                if ("string" != typeof t)
                    return this.pushStack(
                        w(t).filter(function () {
                            for (e = 0; e < i; e++) if (w.contains(o[e], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), e = 0; e < i; e++) w.find(t, o[e], n);
                return i > 1 ? w.uniqueSort(n) : n;
            },
            filter: function (t) {
                return this.pushStack(D(this, t || [], !1));
            },
            not: function (t) {
                return this.pushStack(D(this, t || [], !0));
            },
            is: function (t) {
                return !!D(this, "string" == typeof t && T.test(t) ? w(t) : t || [], !1).length;
            },
        });
    var A,
        E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((w.fn.init = function (t, e, n) {
        var i, o;
        if (!t) return this;
        if (((n = n || A), "string" == typeof t)) {
            if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : E.exec(t)) || (!i[1] && e)) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (((e = e instanceof w ? e[0] : e), w.merge(this, w.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : m, !0)), P.test(i[1]) && w.isPlainObject(e))) for (i in e) p(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this;
            }
            return (o = m.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this;
        }
        return t.nodeType ? ((this[0] = t), (this.length = 1), this) : p(t) ? (void 0 !== n.ready ? n.ready(t) : t(w)) : w.makeArray(t, this);
    }).prototype = w.fn),
        (A = w(m));
    var L = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };
    function R(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; );
        return t;
    }
    w.fn.extend({
        has: function (t) {
            var e = w(t, this),
                n = e.length;
            return this.filter(function () {
                for (var t = 0; t < n; t++) if (w.contains(this, e[t])) return !0;
            });
        },
        closest: function (t, e) {
            var n,
                i = 0,
                o = this.length,
                s = [],
                r = "string" != typeof t && w(t);
            if (!T.test(t))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, t))) {
                            s.push(n);
                            break;
                        }
            return this.pushStack(s.length > 1 ? w.uniqueSort(s) : s);
        },
        index: function (t) {
            return t ? ("string" == typeof t ? a.call(w(t), this[0]) : a.call(this, t.jquery ? t[0] : t)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (t, e) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(t, e))));
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        },
    }),
        w.each(
            {
                parent: function (t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null;
                },
                parents: function (t) {
                    return C(t, "parentNode");
                },
                parentsUntil: function (t, e, n) {
                    return C(t, "parentNode", n);
                },
                next: function (t) {
                    return R(t, "nextSibling");
                },
                prev: function (t) {
                    return R(t, "previousSibling");
                },
                nextAll: function (t) {
                    return C(t, "nextSibling");
                },
                prevAll: function (t) {
                    return C(t, "previousSibling");
                },
                nextUntil: function (t, e, n) {
                    return C(t, "nextSibling", n);
                },
                prevUntil: function (t, e, n) {
                    return C(t, "previousSibling", n);
                },
                siblings: function (t) {
                    return k((t.parentNode || {}).firstChild, t);
                },
                children: function (t) {
                    return k(t.firstChild);
                },
                contents: function (t) {
                    return null != t.contentDocument && i(t.contentDocument) ? t.contentDocument : (M(t, "template") && (t = t.content || t), w.merge([], t.childNodes));
                },
            },
            function (t, e) {
                w.fn[t] = function (n, i) {
                    var o = w.map(this, e, n);
                    return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = w.filter(i, o)), this.length > 1 && (O[t] || w.uniqueSort(o), L.test(t) && o.reverse()), this.pushStack(o);
                };
            }
        );
    var $ = /[^\x20\t\r\n\f]+/g;
    function I(t) {
        return t;
    }
    function F(t) {
        throw t;
    }
    function j(t, e, n, i) {
        var o;
        try {
            t && p((o = t.promise)) ? o.call(t).done(e).fail(n) : t && p((o = t.then)) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i));
        } catch (t) {
            n.apply(void 0, [t]);
        }
    }
    (w.Callbacks = function (t) {
        t =
            "string" == typeof t
                ? (function (t) {
                      var e = {};
                      return (
                          w.each(t.match($) || [], function (t, n) {
                              e[n] = !0;
                          }),
                          e
                      );
                  })(t)
                : w.extend({}, t);
        var e,
            n,
            i,
            o,
            s = [],
            r = [],
            a = -1,
            l = function () {
                for (o = o || t.once, i = e = !0; r.length; a = -1) for (n = r.shift(); ++a < s.length; ) !1 === s[a].apply(n[0], n[1]) && t.stopOnFalse && ((a = s.length), (n = !1));
                t.memory || (n = !1), (e = !1), o && (s = n ? [] : "");
            },
            c = {
                add: function () {
                    return (
                        s &&
                            (n && !e && ((a = s.length - 1), r.push(n)),
                            (function e(n) {
                                w.each(n, function (n, i) {
                                    p(i) ? (t.unique && c.has(i)) || s.push(i) : i && i.length && "string" !== y(i) && e(i);
                                });
                            })(arguments),
                            n && !e && l()),
                        this
                    );
                },
                remove: function () {
                    return (
                        w.each(arguments, function (t, e) {
                            for (var n; (n = w.inArray(e, s, n)) > -1; ) s.splice(n, 1), n <= a && a--;
                        }),
                        this
                    );
                },
                has: function (t) {
                    return t ? w.inArray(t, s) > -1 : s.length > 0;
                },
                empty: function () {
                    return s && (s = []), this;
                },
                disable: function () {
                    return (o = r = []), (s = n = ""), this;
                },
                disabled: function () {
                    return !s;
                },
                lock: function () {
                    return (o = r = []), n || e || (s = n = ""), this;
                },
                locked: function () {
                    return !!o;
                },
                fireWith: function (t, n) {
                    return o || ((n = [t, (n = n || []).slice ? n.slice() : n]), r.push(n), e || l()), this;
                },
                fire: function () {
                    return c.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!i;
                },
            };
        return c;
    }),
        w.extend({
            Deferred: function (e) {
                var n = [
                        ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                        ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"],
                    ],
                    i = "pending",
                    o = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments), this;
                        },
                        catch: function (t) {
                            return o.then(null, t);
                        },
                        pipe: function () {
                            var t = arguments;
                            return w
                                .Deferred(function (e) {
                                    w.each(n, function (n, i) {
                                        var o = p(t[i[4]]) && t[i[4]];
                                        s[i[1]](function () {
                                            var t = o && o.apply(this, arguments);
                                            t && p(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [t] : arguments);
                                        });
                                    }),
                                        (t = null);
                                })
                                .promise();
                        },
                        then: function (e, i, o) {
                            var s = 0;
                            function r(e, n, i, o) {
                                return function () {
                                    var a = this,
                                        l = arguments,
                                        c = function () {
                                            var t, c;
                                            if (!(e < s)) {
                                                if ((t = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                (c = t && ("object" == typeof t || "function" == typeof t) && t.then),
                                                    p(c)
                                                        ? o
                                                            ? c.call(t, r(s, n, I, o), r(s, n, F, o))
                                                            : (s++, c.call(t, r(s, n, I, o), r(s, n, F, o), r(s, n, I, n.notifyWith)))
                                                        : (i !== I && ((a = void 0), (l = [t])), (o || n.resolveWith)(a, l));
                                            }
                                        },
                                        h = o
                                            ? c
                                            : function () {
                                                  try {
                                                      c();
                                                  } catch (t) {
                                                      w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, h.stackTrace), e + 1 >= s && (i !== F && ((a = void 0), (l = [t])), n.rejectWith(a, l));
                                                  }
                                              };
                                    e ? h() : (w.Deferred.getStackHook && (h.stackTrace = w.Deferred.getStackHook()), t.setTimeout(h));
                                };
                            }
                            return w
                                .Deferred(function (t) {
                                    n[0][3].add(r(0, t, p(o) ? o : I, t.notifyWith)), n[1][3].add(r(0, t, p(e) ? e : I)), n[2][3].add(r(0, t, p(i) ? i : F));
                                })
                                .promise();
                        },
                        promise: function (t) {
                            return null != t ? w.extend(t, o) : o;
                        },
                    },
                    s = {};
                return (
                    w.each(n, function (t, e) {
                        var r = e[2],
                            a = e[5];
                        (o[e[1]] = r.add),
                            a &&
                                r.add(
                                    function () {
                                        i = a;
                                    },
                                    n[3 - t][2].disable,
                                    n[3 - t][3].disable,
                                    n[0][2].lock,
                                    n[0][3].lock
                                ),
                            r.add(e[3].fire),
                            (s[e[0]] = function () {
                                return s[e[0] + "With"](this === s ? void 0 : this, arguments), this;
                            }),
                            (s[e[0] + "With"] = r.fireWith);
                    }),
                    o.promise(s),
                    e && e.call(s, s),
                    s
                );
            },
            when: function (t) {
                var e = arguments.length,
                    n = e,
                    i = Array(n),
                    s = o.call(arguments),
                    r = w.Deferred(),
                    a = function (t) {
                        return function (n) {
                            (i[t] = this), (s[t] = arguments.length > 1 ? o.call(arguments) : n), --e || r.resolveWith(i, s);
                        };
                    };
                if (e <= 1 && (j(t, r.done(a(n)).resolve, r.reject, !e), "pending" === r.state() || p(s[n] && s[n].then))) return r.then();
                for (; n--; ) j(s[n], a(n), r.reject);
                return r.promise();
            },
        });
    var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (w.Deferred.exceptionHook = function (e, n) {
        t.console && t.console.warn && e && z.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n);
    }),
        (w.readyException = function (e) {
            t.setTimeout(function () {
                throw e;
            });
        });
    var N = w.Deferred();
    function H() {
        m.removeEventListener("DOMContentLoaded", H), t.removeEventListener("load", H), w.ready();
    }
    (w.fn.ready = function (t) {
        return (
            N.then(t).catch(function (t) {
                w.readyException(t);
            }),
            this
        );
    }),
        w.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (t) {
                (!0 === t ? --w.readyWait : w.isReady) || ((w.isReady = !0), (!0 !== t && --w.readyWait > 0) || N.resolveWith(m, [w]));
            },
        }),
        (w.ready.then = N.then),
        "complete" === m.readyState || ("loading" !== m.readyState && !m.documentElement.doScroll) ? t.setTimeout(w.ready) : (m.addEventListener("DOMContentLoaded", H), t.addEventListener("load", H));
    var B = function (t, e, n, i, o, s, r) {
            var a = 0,
                l = t.length,
                c = null == n;
            if ("object" === y(n)) for (a in ((o = !0), n)) B(t, e, a, n[a], !0, s, r);
            else if (
                void 0 !== i &&
                ((o = !0),
                p(i) || (r = !0),
                c &&
                    (r
                        ? (e.call(t, i), (e = null))
                        : ((c = e),
                          (e = function (t, e, n) {
                              return c.call(w(t), n);
                          }))),
                e)
            )
                for (; a < l; a++) e(t[a], n, r ? i : i.call(t[a], a, e(t[a], n)));
            return o ? t : c ? e.call(t) : l ? e(t[0], n) : s;
        },
        W = /^-ms-/,
        V = /-([a-z])/g;
    function q(t, e) {
        return e.toUpperCase();
    }
    function Y(t) {
        return t.replace(W, "ms-").replace(V, q);
    }
    var X = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };
    function U() {
        this.expando = w.expando + U.uid++;
    }
    (U.uid = 1),
        (U.prototype = {
            cache: function (t) {
                var e = t[this.expando];
                return e || ((e = {}), X(t) && (t.nodeType ? (t[this.expando] = e) : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e;
            },
            set: function (t, e, n) {
                var i,
                    o = this.cache(t);
                if ("string" == typeof e) o[Y(e)] = n;
                else for (i in e) o[Y(i)] = e[i];
                return o;
            },
            get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)];
            },
            access: function (t, e, n) {
                return void 0 === e || (e && "string" == typeof e && void 0 === n) ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e);
            },
            remove: function (t, e) {
                var n,
                    i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        n = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e)) in i ? [e] : e.match($) || []).length;
                        for (; n--; ) delete i[e[n]];
                    }
                    (void 0 === e || w.isEmptyObject(i)) && (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
                }
            },
            hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !w.isEmptyObject(e);
            },
        });
    var K = new U(),
        G = new U(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;
    function J(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (((i = "data-" + e.replace(Q, "-$&").toLowerCase()), "string" == typeof (n = t.getAttribute(i)))) {
                try {
                    n = (function (t) {
                        return "true" === t || ("false" !== t && ("null" === t ? null : t === +t + "" ? +t : Z.test(t) ? JSON.parse(t) : t));
                    })(n);
                } catch (t) {}
                G.set(t, e, n);
            } else n = void 0;
        return n;
    }
    w.extend({
        hasData: function (t) {
            return G.hasData(t) || K.hasData(t);
        },
        data: function (t, e, n) {
            return G.access(t, e, n);
        },
        removeData: function (t, e) {
            G.remove(t, e);
        },
        _data: function (t, e, n) {
            return K.access(t, e, n);
        },
        _removeData: function (t, e) {
            K.remove(t, e);
        },
    }),
        w.fn.extend({
            data: function (t, e) {
                var n,
                    i,
                    o,
                    s = this[0],
                    r = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && ((o = G.get(s)), 1 === s.nodeType && !K.get(s, "hasDataAttrs"))) {
                        for (n = r.length; n--; ) r[n] && 0 === (i = r[n].name).indexOf("data-") && ((i = Y(i.slice(5))), J(s, i, o[i]));
                        K.set(s, "hasDataAttrs", !0);
                    }
                    return o;
                }
                return "object" == typeof t
                    ? this.each(function () {
                          G.set(this, t);
                      })
                    : B(
                          this,
                          function (e) {
                              var n;
                              if (s && void 0 === e) return void 0 !== (n = G.get(s, t)) || void 0 !== (n = J(s, t)) ? n : void 0;
                              this.each(function () {
                                  G.set(this, t, e);
                              });
                          },
                          null,
                          e,
                          arguments.length > 1,
                          null,
                          !0
                      );
            },
            removeData: function (t) {
                return this.each(function () {
                    G.remove(this, t);
                });
            },
        }),
        w.extend({
            queue: function (t, e, n) {
                var i;
                if (t) return (e = (e || "fx") + "queue"), (i = K.get(t, e)), n && (!i || Array.isArray(n) ? (i = K.access(t, e, w.makeArray(n))) : i.push(n)), i || [];
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var n = w.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    s = w._queueHooks(t, e);
                "inprogress" === o && ((o = n.shift()), i--),
                    o &&
                        ("fx" === e && n.unshift("inprogress"),
                        delete s.stop,
                        o.call(
                            t,
                            function () {
                                w.dequeue(t, e);
                            },
                            s
                        )),
                    !i && s && s.empty.fire();
            },
            _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return (
                    K.get(t, n) ||
                    K.access(t, n, {
                        empty: w.Callbacks("once memory").add(function () {
                            K.remove(t, [e + "queue", n]);
                        }),
                    })
                );
            },
        }),
        w.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return (
                    "string" != typeof t && ((e = t), (t = "fx"), n--),
                    arguments.length < n
                        ? w.queue(this[0], t)
                        : void 0 === e
                        ? this
                        : this.each(function () {
                              var n = w.queue(this, t, e);
                              w._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && w.dequeue(this, t);
                          })
                );
            },
            dequeue: function (t) {
                return this.each(function () {
                    w.dequeue(this, t);
                });
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", []);
            },
            promise: function (t, e) {
                var n,
                    i = 1,
                    o = w.Deferred(),
                    s = this,
                    r = this.length,
                    a = function () {
                        --i || o.resolveWith(s, [s]);
                    };
                for ("string" != typeof t && ((e = t), (t = void 0)), t = t || "fx"; r--; ) (n = K.get(s[r], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(e);
            },
        });
    var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
        nt = ["Top", "Right", "Bottom", "Left"],
        it = m.documentElement,
        ot = function (t) {
            return w.contains(t.ownerDocument, t);
        },
        st = { composed: !0 };
    it.getRootNode &&
        (ot = function (t) {
            return w.contains(t.ownerDocument, t) || t.getRootNode(st) === t.ownerDocument;
        });
    var rt = function (t, e) {
        return "none" === (t = e || t).style.display || ("" === t.style.display && ot(t) && "none" === w.css(t, "display"));
    };
    function at(t, e, n, i) {
        var o,
            s,
            r = 20,
            a = i
                ? function () {
                      return i.cur();
                  }
                : function () {
                      return w.css(t, e, "");
                  },
            l = a(),
            c = (n && n[3]) || (w.cssNumber[e] ? "" : "px"),
            h = t.nodeType && (w.cssNumber[e] || ("px" !== c && +l)) && et.exec(w.css(t, e));
        if (h && h[3] !== c) {
            for (l /= 2, c = c || h[3], h = +l || 1; r--; ) w.style(t, e, h + c), (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (r = 0), (h /= s);
            (h *= 2), w.style(t, e, h + c), (n = n || []);
        }
        return n && ((h = +h || +l || 0), (o = n[1] ? h + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = c), (i.start = h), (i.end = o))), o;
    }
    var lt = {};
    function ct(t) {
        var e,
            n = t.ownerDocument,
            i = t.nodeName,
            o = lt[i];
        return o || ((e = n.body.appendChild(n.createElement(i))), (o = w.css(e, "display")), e.parentNode.removeChild(e), "none" === o && (o = "block"), (lt[i] = o), o);
    }
    function ht(t, e) {
        for (var n, i, o = [], s = 0, r = t.length; s < r; s++)
            (i = t[s]).style &&
                ((n = i.style.display),
                e ? ("none" === n && ((o[s] = K.get(i, "display") || null), o[s] || (i.style.display = "")), "" === i.style.display && rt(i) && (o[s] = ct(i))) : "none" !== n && ((o[s] = "none"), K.set(i, "display", n)));
        for (s = 0; s < r; s++) null != o[s] && (t[s].style.display = o[s]);
        return t;
    }
    w.fn.extend({
        show: function () {
            return ht(this, !0);
        },
        hide: function () {
            return ht(this);
        },
        toggle: function (t) {
            return "boolean" == typeof t
                ? t
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      rt(this) ? w(this).show() : w(this).hide();
                  });
        },
    });
    var ut,
        dt,
        ft = /^(?:checkbox|radio)$/i,
        pt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        gt = /^$|^module$|\/(?:java|ecma)script/i;
    (ut = m.createDocumentFragment().appendChild(m.createElement("div"))),
        (dt = m.createElement("input")).setAttribute("type", "radio"),
        dt.setAttribute("checked", "checked"),
        dt.setAttribute("name", "t"),
        ut.appendChild(dt),
        (f.checkClone = ut.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ut.innerHTML = "<textarea>x</textarea>"),
        (f.noCloneChecked = !!ut.cloneNode(!0).lastChild.defaultValue),
        (ut.innerHTML = "<option></option>"),
        (f.option = !!ut.lastChild);
    var mt = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    function bt(t, e) {
        var n;
        return (n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : []), void 0 === e || (e && M(t, e)) ? w.merge([t], n) : n;
    }
    function xt(t, e) {
        for (var n = 0, i = t.length; n < i; n++) K.set(t[n], "globalEval", !e || K.get(e[n], "globalEval"));
    }
    (mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead), (mt.th = mt.td), f.option || (mt.optgroup = mt.option = [1, "<select multiple='multiple'>", "</select>"]);
    var yt = /<|&#?\w+;/;
    function vt(t, e, n, i, o) {
        for (var s, r, a, l, c, h, u = e.createDocumentFragment(), d = [], f = 0, p = t.length; f < p; f++)
            if ((s = t[f]) || 0 === s)
                if ("object" === y(s)) w.merge(d, s.nodeType ? [s] : s);
                else if (yt.test(s)) {
                    for (r = r || u.appendChild(e.createElement("div")), a = (pt.exec(s) || ["", ""])[1].toLowerCase(), l = mt[a] || mt._default, r.innerHTML = l[1] + w.htmlPrefilter(s) + l[2], h = l[0]; h--; ) r = r.lastChild;
                    w.merge(d, r.childNodes), ((r = u.firstChild).textContent = "");
                } else d.push(e.createTextNode(s));
        for (u.textContent = "", f = 0; (s = d[f++]); )
            if (i && w.inArray(s, i) > -1) o && o.push(s);
            else if (((c = ot(s)), (r = bt(u.appendChild(s), "script")), c && xt(r), n)) for (h = 0; (s = r[h++]); ) gt.test(s.type || "") && n.push(s);
        return u;
    }
    var wt = /^([^.]*)(?:\.(.+)|)/;
    function _t() {
        return !0;
    }
    function St() {
        return !1;
    }
    function Ct(t, e) {
        return (
            (t ===
                (function () {
                    try {
                        return m.activeElement;
                    } catch (t) {}
                })()) ==
            ("focus" === e)
        );
    }
    function kt(t, e, n, i, o, s) {
        var r, a;
        if ("object" == typeof e) {
            for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), e)) kt(t, a, n, i, e[a], s);
            return t;
        }
        if ((null == i && null == o ? ((o = n), (i = n = void 0)) : null == o && ("string" == typeof n ? ((o = i), (i = void 0)) : ((o = i), (i = n), (n = void 0))), !1 === o)) o = St;
        else if (!o) return t;
        return (
            1 === s &&
                ((r = o),
                (o = function (t) {
                    return w().off(t), r.apply(this, arguments);
                }),
                (o.guid = r.guid || (r.guid = w.guid++))),
            t.each(function () {
                w.event.add(this, e, o, i, n);
            })
        );
    }
    function Tt(t, e, n) {
        n
            ? (K.set(t, e, !1),
              w.event.add(t, e, {
                  namespace: !1,
                  handler: function (t) {
                      var i,
                          s,
                          r = K.get(this, e);
                      if (1 & t.isTrigger && this[e]) {
                          if (r.length) (w.event.special[e] || {}).delegateType && t.stopPropagation();
                          else if (((r = o.call(arguments)), K.set(this, e, r), (i = n(this, e)), this[e](), r !== (s = K.get(this, e)) || i ? K.set(this, e, !1) : (s = {}), r !== s))
                              return t.stopImmediatePropagation(), t.preventDefault(), s && s.value;
                      } else r.length && (K.set(this, e, { value: w.event.trigger(w.extend(r[0], w.Event.prototype), r.slice(1), this) }), t.stopImmediatePropagation());
                  },
              }))
            : void 0 === K.get(t, e) && w.event.add(t, e, _t);
    }
    (w.event = {
        global: {},
        add: function (t, e, n, i, o) {
            var s,
                r,
                a,
                l,
                c,
                h,
                u,
                d,
                f,
                p,
                g,
                m = K.get(t);
            if (X(t))
                for (
                    n.handler && ((n = (s = n).handler), (o = s.selector)),
                        o && w.find.matchesSelector(it, o),
                        n.guid || (n.guid = w.guid++),
                        (l = m.events) || (l = m.events = Object.create(null)),
                        (r = m.handle) ||
                            (r = m.handle = function (e) {
                                return void 0 !== w && w.event.triggered !== e.type ? w.event.dispatch.apply(t, arguments) : void 0;
                            }),
                        c = (e = (e || "").match($) || [""]).length;
                    c--;

                )
                    (f = g = (a = wt.exec(e[c]) || [])[1]),
                        (p = (a[2] || "").split(".").sort()),
                        f &&
                            ((u = w.event.special[f] || {}),
                            (f = (o ? u.delegateType : u.bindType) || f),
                            (u = w.event.special[f] || {}),
                            (h = w.extend({ type: f, origType: g, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && w.expr.match.needsContext.test(o), namespace: p.join(".") }, s)),
                            (d = l[f]) || (((d = l[f] = []).delegateCount = 0), (u.setup && !1 !== u.setup.call(t, i, p, r)) || (t.addEventListener && t.addEventListener(f, r))),
                            u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)),
                            o ? d.splice(d.delegateCount++, 0, h) : d.push(h),
                            (w.event.global[f] = !0));
        },
        remove: function (t, e, n, i, o) {
            var s,
                r,
                a,
                l,
                c,
                h,
                u,
                d,
                f,
                p,
                g,
                m = K.hasData(t) && K.get(t);
            if (m && (l = m.events)) {
                for (c = (e = (e || "").match($) || [""]).length; c--; )
                    if (((f = g = (a = wt.exec(e[c]) || [])[1]), (p = (a[2] || "").split(".").sort()), f)) {
                        for (u = w.event.special[f] || {}, d = l[(f = (i ? u.delegateType : u.bindType) || f)] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = d.length; s--; )
                            (h = d[s]),
                                (!o && g !== h.origType) ||
                                    (n && n.guid !== h.guid) ||
                                    (a && !a.test(h.namespace)) ||
                                    (i && i !== h.selector && ("**" !== i || !h.selector)) ||
                                    (d.splice(s, 1), h.selector && d.delegateCount--, u.remove && u.remove.call(t, h));
                        r && !d.length && ((u.teardown && !1 !== u.teardown.call(t, p, m.handle)) || w.removeEvent(t, f, m.handle), delete l[f]);
                    } else for (f in l) w.event.remove(t, f + e[c], n, i, !0);
                w.isEmptyObject(l) && K.remove(t, "handle events");
            }
        },
        dispatch: function (t) {
            var e,
                n,
                i,
                o,
                s,
                r,
                a = new Array(arguments.length),
                l = w.event.fix(t),
                c = (K.get(this, "events") || Object.create(null))[l.type] || [],
                h = w.event.special[l.type] || {};
            for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
            if (((l.delegateTarget = this), !h.preDispatch || !1 !== h.preDispatch.call(this, l))) {
                for (r = w.event.handlers.call(this, l, c), e = 0; (o = r[e++]) && !l.isPropagationStopped(); )
                    for (l.currentTarget = o.elem, n = 0; (s = o.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                        (l.rnamespace && !1 !== s.namespace && !l.rnamespace.test(s.namespace)) ||
                            ((l.handleObj = s), (l.data = s.data), void 0 !== (i = ((w.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, l), l.result;
            }
        },
        handlers: function (t, e) {
            var n,
                i,
                o,
                s,
                r,
                a = [],
                l = e.delegateCount,
                c = t.target;
            if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                        for (s = [], r = {}, n = 0; n < l; n++) void 0 === r[(o = (i = e[n]).selector + " ")] && (r[o] = i.needsContext ? w(o, this).index(c) > -1 : w.find(o, this, null, [c]).length), r[o] && s.push(i);
                        s.length && a.push({ elem: c, handlers: s });
                    }
            return (c = this), l < e.length && a.push({ elem: c, handlers: e.slice(l) }), a;
        },
        addProp: function (t, e) {
            Object.defineProperty(w.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: p(e)
                    ? function () {
                          if (this.originalEvent) return e(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[t];
                      },
                set: function (e) {
                    Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
                },
            });
        },
        fix: function (t) {
            return t[w.expando] ? t : new w.Event(t);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (t) {
                    var e = this || t;
                    return ft.test(e.type) && e.click && M(e, "input") && Tt(e, "click", _t), !1;
                },
                trigger: function (t) {
                    var e = this || t;
                    return ft.test(e.type) && e.click && M(e, "input") && Tt(e, "click"), !0;
                },
                _default: function (t) {
                    var e = t.target;
                    return (ft.test(e.type) && e.click && M(e, "input") && K.get(e, "click")) || M(e, "a");
                },
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                },
            },
        },
    }),
        (w.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n);
        }),
        (w.Event = function (t, e) {
            if (!(this instanceof w.Event)) return new w.Event(t, e);
            t && t.type
                ? ((this.originalEvent = t),
                  (this.type = t.type),
                  (this.isDefaultPrevented = t.defaultPrevented || (void 0 === t.defaultPrevented && !1 === t.returnValue) ? _t : St),
                  (this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target),
                  (this.currentTarget = t.currentTarget),
                  (this.relatedTarget = t.relatedTarget))
                : (this.type = t),
                e && w.extend(this, e),
                (this.timeStamp = (t && t.timeStamp) || Date.now()),
                (this[w.expando] = !0);
        }),
        (w.Event.prototype = {
            constructor: w.Event,
            isDefaultPrevented: St,
            isPropagationStopped: St,
            isImmediatePropagationStopped: St,
            isSimulated: !1,
            preventDefault: function () {
                var t = this.originalEvent;
                (this.isDefaultPrevented = _t), t && !this.isSimulated && t.preventDefault();
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                (this.isPropagationStopped = _t), t && !this.isSimulated && t.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                (this.isImmediatePropagationStopped = _t), t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        w.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
            },
            w.event.addProp
        ),
        w.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
            w.event.special[t] = {
                setup: function () {
                    return Tt(this, t, Ct), !1;
                },
                trigger: function () {
                    return Tt(this, t), !0;
                },
                _default: function (e) {
                    return K.get(e.target, t);
                },
                delegateType: e,
            };
        }),
        w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, e) {
            w.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                    var n,
                        i = this,
                        o = t.relatedTarget,
                        s = t.handleObj;
                    return (o && (o === i || w.contains(i, o))) || ((t.type = s.origType), (n = s.handler.apply(this, arguments)), (t.type = e)), n;
                },
            };
        }),
        w.fn.extend({
            on: function (t, e, n, i) {
                return kt(this, t, e, n, i);
            },
            one: function (t, e, n, i) {
                return kt(this, t, e, n, i, 1);
            },
            off: function (t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return (i = t.handleObj), w(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this;
                }
                return (
                    (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
                    !1 === n && (n = St),
                    this.each(function () {
                        w.event.remove(this, t, n, e);
                    })
                );
            },
        });
    var Mt = /<script|<style|<link/i,
        Pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Dt = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function At(t, e) {
        return (M(t, "table") && M(11 !== e.nodeType ? e : e.firstChild, "tr") && w(t).children("tbody")[0]) || t;
    }
    function Et(t) {
        return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
    }
    function Lt(t) {
        return "true/" === (t.type || "").slice(0, 5) ? (t.type = t.type.slice(5)) : t.removeAttribute("type"), t;
    }
    function Ot(t, e) {
        var n, i, o, s, r, a;
        if (1 === e.nodeType) {
            if (K.hasData(t) && (a = K.get(t).events)) for (o in (K.remove(e, "handle events"), a)) for (n = 0, i = a[o].length; n < i; n++) w.event.add(e, o, a[o][n]);
            G.hasData(t) && ((s = G.access(t)), (r = w.extend({}, s)), G.set(e, r));
        }
    }
    function Rt(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && ft.test(t.type) ? (e.checked = t.checked) : ("input" !== n && "textarea" !== n) || (e.defaultValue = t.defaultValue);
    }
    function $t(t, e, n, i) {
        e = s(e);
        var o,
            r,
            a,
            l,
            c,
            h,
            u = 0,
            d = t.length,
            g = d - 1,
            m = e[0],
            b = p(m);
        if (b || (d > 1 && "string" == typeof m && !f.checkClone && Pt.test(m)))
            return t.each(function (o) {
                var s = t.eq(o);
                b && (e[0] = m.call(this, o, s.html())), $t(s, e, n, i);
            });
        if (d && ((r = (o = vt(e, t[0].ownerDocument, !1, t, i)).firstChild), 1 === o.childNodes.length && (o = r), r || i)) {
            for (l = (a = w.map(bt(o, "script"), Et)).length; u < d; u++) (c = o), u !== g && ((c = w.clone(c, !0, !0)), l && w.merge(a, bt(c, "script"))), n.call(t[u], c, u);
            if (l)
                for (h = a[a.length - 1].ownerDocument, w.map(a, Lt), u = 0; u < l; u++)
                    (c = a[u]),
                        gt.test(c.type || "") &&
                            !K.access(c, "globalEval") &&
                            w.contains(h, c) &&
                            (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && !c.noModule && w._evalUrl(c.src, { nonce: c.nonce || c.getAttribute("nonce") }, h) : x(c.textContent.replace(Dt, ""), c, h));
        }
        return t;
    }
    function It(t, e, n) {
        for (var i, o = e ? w.filter(e, t) : t, s = 0; null != (i = o[s]); s++) n || 1 !== i.nodeType || w.cleanData(bt(i)), i.parentNode && (n && ot(i) && xt(bt(i, "script")), i.parentNode.removeChild(i));
        return t;
    }
    w.extend({
        htmlPrefilter: function (t) {
            return t;
        },
        clone: function (t, e, n) {
            var i,
                o,
                s,
                r,
                a = t.cloneNode(!0),
                l = ot(t);
            if (!(f.noCloneChecked || (1 !== t.nodeType && 11 !== t.nodeType) || w.isXMLDoc(t))) for (r = bt(a), i = 0, o = (s = bt(t)).length; i < o; i++) Rt(s[i], r[i]);
            if (e)
                if (n) for (s = s || bt(t), r = r || bt(a), i = 0, o = s.length; i < o; i++) Ot(s[i], r[i]);
                else Ot(t, a);
            return (r = bt(a, "script")).length > 0 && xt(r, !l && bt(t, "script")), a;
        },
        cleanData: function (t) {
            for (var e, n, i, o = w.event.special, s = 0; void 0 !== (n = t[s]); s++)
                if (X(n)) {
                    if ((e = n[K.expando])) {
                        if (e.events) for (i in e.events) o[i] ? w.event.remove(n, i) : w.removeEvent(n, i, e.handle);
                        n[K.expando] = void 0;
                    }
                    n[G.expando] && (n[G.expando] = void 0);
                }
        },
    }),
        w.fn.extend({
            detach: function (t) {
                return It(this, t, !0);
            },
            remove: function (t) {
                return It(this, t);
            },
            text: function (t) {
                return B(
                    this,
                    function (t) {
                        return void 0 === t
                            ? w.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = t);
                              });
                    },
                    null,
                    t,
                    arguments.length
                );
            },
            append: function () {
                return $t(this, arguments, function (t) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || At(this, t).appendChild(t);
                });
            },
            prepend: function () {
                return $t(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = At(this, t);
                        e.insertBefore(t, e.firstChild);
                    }
                });
            },
            before: function () {
                return $t(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this);
                });
            },
            after: function () {
                return $t(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
                });
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (w.cleanData(bt(t, !1)), (t.textContent = ""));
                return this;
            },
            clone: function (t, e) {
                return (
                    (t = null != t && t),
                    (e = null == e ? t : e),
                    this.map(function () {
                        return w.clone(this, t, e);
                    })
                );
            },
            html: function (t) {
                return B(
                    this,
                    function (t) {
                        var e = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                        if ("string" == typeof t && !Mt.test(t) && !mt[(pt.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = w.htmlPrefilter(t);
                            try {
                                for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (w.cleanData(bt(e, !1)), (e.innerHTML = t));
                                e = 0;
                            } catch (t) {}
                        }
                        e && this.empty().append(t);
                    },
                    null,
                    t,
                    arguments.length
                );
            },
            replaceWith: function () {
                var t = [];
                return $t(
                    this,
                    arguments,
                    function (e) {
                        var n = this.parentNode;
                        w.inArray(this, t) < 0 && (w.cleanData(bt(this)), n && n.replaceChild(e, this));
                    },
                    t
                );
            },
        }),
        w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, e) {
            w.fn[t] = function (t) {
                for (var n, i = [], o = w(t), s = o.length - 1, a = 0; a <= s; a++) (n = a === s ? this : this.clone(!0)), w(o[a])[e](n), r.apply(i, n.get());
                return this.pushStack(i);
            };
        });
    var Ft = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
        jt = /^--/,
        zt = function (e) {
            var n = e.ownerDocument.defaultView;
            return (n && n.opener) || (n = t), n.getComputedStyle(e);
        },
        Nt = function (t, e, n) {
            var i,
                o,
                s = {};
            for (o in e) (s[o] = t.style[o]), (t.style[o] = e[o]);
            for (o in ((i = n.call(t)), e)) t.style[o] = s[o];
            return i;
        },
        Ht = new RegExp(nt.join("|"), "i"),
        Bt = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g");
    function Wt(t, e, n) {
        var i,
            o,
            s,
            r,
            a = jt.test(e),
            l = t.style;
        return (
            (n = n || zt(t)) &&
                ((r = n.getPropertyValue(e) || n[e]),
                a && (r = r.replace(Bt, "$1")),
                "" !== r || ot(t) || (r = w.style(t, e)),
                !f.pixelBoxStyles() && Ft.test(r) && Ht.test(e) && ((i = l.width), (o = l.minWidth), (s = l.maxWidth), (l.minWidth = l.maxWidth = l.width = r), (r = n.width), (l.width = i), (l.minWidth = o), (l.maxWidth = s))),
            void 0 !== r ? r + "" : r
        );
    }
    function Vt(t, e) {
        return {
            get: function () {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get;
            },
        };
    }
    !(function () {
        function e() {
            if (h) {
                (c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (h.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    it.appendChild(c).appendChild(h);
                var e = t.getComputedStyle(h);
                (i = "1%" !== e.top),
                    (l = 12 === n(e.marginLeft)),
                    (h.style.right = "60%"),
                    (r = 36 === n(e.right)),
                    (o = 36 === n(e.width)),
                    (h.style.position = "absolute"),
                    (s = 12 === n(h.offsetWidth / 3)),
                    it.removeChild(c),
                    (h = null);
            }
        }
        function n(t) {
            return Math.round(parseFloat(t));
        }
        var i,
            o,
            s,
            r,
            a,
            l,
            c = m.createElement("div"),
            h = m.createElement("div");
        h.style &&
            ((h.style.backgroundClip = "content-box"),
            (h.cloneNode(!0).style.backgroundClip = ""),
            (f.clearCloneStyle = "content-box" === h.style.backgroundClip),
            w.extend(f, {
                boxSizingReliable: function () {
                    return e(), o;
                },
                pixelBoxStyles: function () {
                    return e(), r;
                },
                pixelPosition: function () {
                    return e(), i;
                },
                reliableMarginLeft: function () {
                    return e(), l;
                },
                scrollboxSize: function () {
                    return e(), s;
                },
                reliableTrDimensions: function () {
                    var e, n, i, o;
                    return (
                        null == a &&
                            ((e = m.createElement("table")),
                            (n = m.createElement("tr")),
                            (i = m.createElement("div")),
                            (e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                            (n.style.cssText = "border:1px solid"),
                            (n.style.height = "1px"),
                            (i.style.height = "9px"),
                            (i.style.display = "block"),
                            it.appendChild(e).appendChild(n).appendChild(i),
                            (o = t.getComputedStyle(n)),
                            (a = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === n.offsetHeight),
                            it.removeChild(e)),
                        a
                    );
                },
            }));
    })();
    var qt = ["Webkit", "Moz", "ms"],
        Yt = m.createElement("div").style,
        Xt = {};
    function Ut(t) {
        var e = w.cssProps[t] || Xt[t];
        return (
            e ||
            (t in Yt
                ? t
                : (Xt[t] =
                      (function (t) {
                          for (var e = t[0].toUpperCase() + t.slice(1), n = qt.length; n--; ) if ((t = qt[n] + e) in Yt) return t;
                      })(t) || t))
        );
    }
    var Kt = /^(none|table(?!-c[ea]).+)/,
        Gt = { position: "absolute", visibility: "hidden", display: "block" },
        Zt = { letterSpacing: "0", fontWeight: "400" };
    function Qt(t, e, n) {
        var i = et.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
    }
    function Jt(t, e, n, i, o, s) {
        var r = "width" === e ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; r < 4; r += 2)
            "margin" === n && (l += w.css(t, n + nt[r], !0, o)),
                i
                    ? ("content" === n && (l -= w.css(t, "padding" + nt[r], !0, o)), "margin" !== n && (l -= w.css(t, "border" + nt[r] + "Width", !0, o)))
                    : ((l += w.css(t, "padding" + nt[r], !0, o)), "padding" !== n ? (l += w.css(t, "border" + nt[r] + "Width", !0, o)) : (a += w.css(t, "border" + nt[r] + "Width", !0, o)));
        return !i && s >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - a - 0.5)) || 0), l;
    }
    function te(t, e, n) {
        var i = zt(t),
            o = (!f.boxSizingReliable() || n) && "border-box" === w.css(t, "boxSizing", !1, i),
            s = o,
            r = Wt(t, e, i),
            a = "offset" + e[0].toUpperCase() + e.slice(1);
        if (Ft.test(r)) {
            if (!n) return r;
            r = "auto";
        }
        return (
            ((!f.boxSizingReliable() && o) || (!f.reliableTrDimensions() && M(t, "tr")) || "auto" === r || (!parseFloat(r) && "inline" === w.css(t, "display", !1, i))) &&
                t.getClientRects().length &&
                ((o = "border-box" === w.css(t, "boxSizing", !1, i)), (s = a in t) && (r = t[a])),
            (r = parseFloat(r) || 0) + Jt(t, e, n || (o ? "border" : "content"), s, i, r) + "px"
        );
    }
    function ee(t, e, n, i, o) {
        return new ee.prototype.init(t, e, n, i, o);
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = Wt(t, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o,
                    s,
                    r,
                    a = Y(e),
                    l = jt.test(e),
                    c = t.style;
                if ((l || (e = Ut(a)), (r = w.cssHooks[e] || w.cssHooks[a]), void 0 === n)) return r && "get" in r && void 0 !== (o = r.get(t, !1, i)) ? o : c[e];
                "string" === (s = typeof n) && (o = et.exec(n)) && o[1] && ((n = at(t, e, o)), (s = "number")),
                    null != n &&
                        n == n &&
                        ("number" !== s || l || (n += (o && o[3]) || (w.cssNumber[a] ? "" : "px")),
                        f.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"),
                        (r && "set" in r && void 0 === (n = r.set(t, n, i))) || (l ? c.setProperty(e, n) : (c[e] = n)));
            }
        },
        css: function (t, e, n, i) {
            var o,
                s,
                r,
                a = Y(e);
            return (
                jt.test(e) || (e = Ut(a)),
                (r = w.cssHooks[e] || w.cssHooks[a]) && "get" in r && (o = r.get(t, !0, n)),
                void 0 === o && (o = Wt(t, e, i)),
                "normal" === o && e in Zt && (o = Zt[e]),
                "" === n || n ? ((s = parseFloat(o)), !0 === n || isFinite(s) ? s || 0 : o) : o
            );
        },
    }),
        w.each(["height", "width"], function (t, e) {
            w.cssHooks[e] = {
                get: function (t, n, i) {
                    if (n)
                        return !Kt.test(w.css(t, "display")) || (t.getClientRects().length && t.getBoundingClientRect().width)
                            ? te(t, e, i)
                            : Nt(t, Gt, function () {
                                  return te(t, e, i);
                              });
                },
                set: function (t, n, i) {
                    var o,
                        s = zt(t),
                        r = !f.scrollboxSize() && "absolute" === s.position,
                        a = (r || i) && "border-box" === w.css(t, "boxSizing", !1, s),
                        l = i ? Jt(t, e, i, a, s) : 0;
                    return (
                        a && r && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(s[e]) - Jt(t, e, "border", !1, s) - 0.5)),
                        l && (o = et.exec(n)) && "px" !== (o[3] || "px") && ((t.style[e] = n), (n = w.css(t, e))),
                        Qt(0, n, l)
                    );
                },
            };
        }),
        (w.cssHooks.marginLeft = Vt(f.reliableMarginLeft, function (t, e) {
            if (e)
                return (
                    (parseFloat(Wt(t, "marginLeft")) ||
                        t.getBoundingClientRect().left -
                            Nt(t, { marginLeft: 0 }, function () {
                                return t.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        w.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
            (w.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, o = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + nt[i] + e] = s[i] || s[i - 2] || s[0];
                    return o;
                },
            }),
                "margin" !== t && (w.cssHooks[t + e].set = Qt);
        }),
        w.fn.extend({
            css: function (t, e) {
                return B(
                    this,
                    function (t, e, n) {
                        var i,
                            o,
                            s = {},
                            r = 0;
                        if (Array.isArray(e)) {
                            for (i = zt(t), o = e.length; r < o; r++) s[e[r]] = w.css(t, e[r], !1, i);
                            return s;
                        }
                        return void 0 !== n ? w.style(t, e, n) : w.css(t, e);
                    },
                    t,
                    e,
                    arguments.length > 1
                );
            },
        }),
        (w.Tween = ee),
        (ee.prototype = {
            constructor: ee,
            init: function (t, e, n, i, o, s) {
                (this.elem = t), (this.prop = n), (this.easing = o || w.easing._default), (this.options = e), (this.start = this.now = this.cur()), (this.end = i), (this.unit = s || (w.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var t = ee.propHooks[this.prop];
                return t && t.get ? t.get(this) : ee.propHooks._default.get(this);
            },
            run: function (t) {
                var e,
                    n = ee.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = e = w.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration)) : (this.pos = e = t),
                    (this.now = (this.end - this.start) * e + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : ee.propHooks._default.set(this),
                    this
                );
            },
        }),
        (ee.prototype.init.prototype = ee.prototype),
        (ee.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || (null != t.elem[t.prop] && null == t.elem.style[t.prop]) ? t.elem[t.prop] : (e = w.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
                },
                set: function (t) {
                    w.fx.step[t.prop] ? w.fx.step[t.prop](t) : 1 !== t.elem.nodeType || (!w.cssHooks[t.prop] && null == t.elem.style[Ut(t.prop)]) ? (t.elem[t.prop] = t.now) : w.style(t.elem, t.prop, t.now + t.unit);
                },
            },
        }),
        (ee.propHooks.scrollTop = ee.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
            },
        }),
        (w.easing = {
            linear: function (t) {
                return t;
            },
            swing: function (t) {
                return 0.5 - Math.cos(t * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (w.fx = ee.prototype.init),
        (w.fx.step = {});
    var ne,
        ie,
        oe = /^(?:toggle|show|hide)$/,
        se = /queueHooks$/;
    function re() {
        ie && (!1 === m.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(re) : t.setTimeout(re, w.fx.interval), w.fx.tick());
    }
    function ae() {
        return (
            t.setTimeout(function () {
                ne = void 0;
            }),
            (ne = Date.now())
        );
    }
    function le(t, e) {
        var n,
            i = 0,
            o = { height: t };
        for (e = e ? 1 : 0; i < 4; i += 2 - e) o["margin" + (n = nt[i])] = o["padding" + n] = t;
        return e && (o.opacity = o.width = t), o;
    }
    function ce(t, e, n) {
        for (var i, o = (he.tweeners[e] || []).concat(he.tweeners["*"]), s = 0, r = o.length; s < r; s++) if ((i = o[s].call(n, e, t))) return i;
    }
    function he(t, e, n) {
        var i,
            o,
            s = 0,
            r = he.prefilters.length,
            a = w.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (o) return !1;
                for (var e = ne || ae(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), s = 0, r = c.tweens.length; s < r; s++) c.tweens[s].run(i);
                return a.notifyWith(t, [c, i, n]), i < 1 && r ? n : (r || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1);
            },
            c = a.promise({
                elem: t,
                props: w.extend({}, e),
                opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: ne || ae(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = w.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i;
                },
                stop: function (e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) c.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this;
                },
            }),
            h = c.props;
        for (
            !(function (t, e) {
                var n, i, o, s, r;
                for (n in t)
                    if (((o = e[(i = Y(n))]), (s = t[n]), Array.isArray(s) && ((o = s[1]), (s = t[n] = s[0])), n !== i && ((t[i] = s), delete t[n]), (r = w.cssHooks[i]) && ("expand" in r)))
                        for (n in ((s = r.expand(s)), delete t[i], s)) (n in t) || ((t[n] = s[n]), (e[n] = o));
                    else e[i] = o;
            })(h, c.opts.specialEasing);
            s < r;
            s++
        )
            if ((i = he.prefilters[s].call(c, t, h, c.opts))) return p(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return (
            w.map(h, ce, c),
            p(c.opts.start) && c.opts.start.call(t, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            w.fx.timer(w.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
            c
        );
    }
    (w.Animation = w.extend(he, {
        tweeners: {
            "*": [
                function (t, e) {
                    var n = this.createTween(t, e);
                    return at(n.elem, t, et.exec(e), n), n;
                },
            ],
        },
        tweener: function (t, e) {
            p(t) ? ((e = t), (t = ["*"])) : (t = t.match($));
            for (var n, i = 0, o = t.length; i < o; i++) (n = t[i]), (he.tweeners[n] = he.tweeners[n] || []), he.tweeners[n].unshift(e);
        },
        prefilters: [
            function (t, e, n) {
                var i,
                    o,
                    s,
                    r,
                    a,
                    l,
                    c,
                    h,
                    u = "width" in e || "height" in e,
                    d = this,
                    f = {},
                    p = t.style,
                    g = t.nodeType && rt(t),
                    m = K.get(t, "fxshow");
                for (i in (n.queue ||
                    (null == (r = w._queueHooks(t, "fx")).unqueued &&
                        ((r.unqueued = 0),
                        (a = r.empty.fire),
                        (r.empty.fire = function () {
                            r.unqueued || a();
                        })),
                    r.unqueued++,
                    d.always(function () {
                        d.always(function () {
                            r.unqueued--, w.queue(t, "fx").length || r.empty.fire();
                        });
                    })),
                e))
                    if (((o = e[i]), oe.test(o))) {
                        if ((delete e[i], (s = s || "toggle" === o), o === (g ? "hide" : "show"))) {
                            if ("show" !== o || !m || void 0 === m[i]) continue;
                            g = !0;
                        }
                        f[i] = (m && m[i]) || w.style(t, i);
                    }
                if ((l = !w.isEmptyObject(e)) || !w.isEmptyObject(f))
                    for (i in (u &&
                        1 === t.nodeType &&
                        ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                        null == (c = m && m.display) && (c = K.get(t, "display")),
                        "none" === (h = w.css(t, "display")) && (c ? (h = c) : (ht([t], !0), (c = t.style.display || c), (h = w.css(t, "display")), ht([t]))),
                        ("inline" === h || ("inline-block" === h && null != c)) &&
                            "none" === w.css(t, "float") &&
                            (l ||
                                (d.done(function () {
                                    p.display = c;
                                }),
                                null == c && ((h = p.display), (c = "none" === h ? "" : h))),
                            (p.display = "inline-block"))),
                    n.overflow &&
                        ((p.overflow = "hidden"),
                        d.always(function () {
                            (p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2]);
                        })),
                    (l = !1),
                    f))
                        l ||
                            (m ? "hidden" in m && (g = m.hidden) : (m = K.access(t, "fxshow", { display: c })),
                            s && (m.hidden = !g),
                            g && ht([t], !0),
                            d.done(function () {
                                for (i in (g || ht([t]), K.remove(t, "fxshow"), f)) w.style(t, i, f[i]);
                            })),
                            (l = ce(g ? m[i] : 0, i, d)),
                            i in m || ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
            },
        ],
        prefilter: function (t, e) {
            e ? he.prefilters.unshift(t) : he.prefilters.push(t);
        },
    })),
        (w.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? w.extend({}, t) : { complete: n || (!n && e) || (p(t) && t), duration: t, easing: (n && e) || (e && !p(e) && e) };
            return (
                w.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in w.fx.speeds ? (i.duration = w.fx.speeds[i.duration]) : (i.duration = w.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                    p(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
                }),
                i
            );
        }),
        w.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(rt).css("opacity", 0).show().end().animate({ opacity: e }, t, n, i);
            },
            animate: function (t, e, n, i) {
                var o = w.isEmptyObject(t),
                    s = w.speed(e, n, i),
                    r = function () {
                        var e = he(this, w.extend({}, t), s);
                        (o || K.get(this, "finish")) && e.stop(!0);
                    };
                return (r.finish = r), o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r);
            },
            stop: function (t, e, n) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n);
                };
                return (
                    "string" != typeof t && ((n = e), (e = t), (t = void 0)),
                    e && this.queue(t || "fx", []),
                    this.each(function () {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            s = w.timers,
                            r = K.get(this);
                        if (o) r[o] && r[o].stop && i(r[o]);
                        else for (o in r) r[o] && r[o].stop && se.test(o) && i(r[o]);
                        for (o = s.length; o--; ) s[o].elem !== this || (null != t && s[o].queue !== t) || (s[o].anim.stop(n), (e = !1), s.splice(o, 1));
                        (!e && n) || w.dequeue(this, t);
                    })
                );
            },
            finish: function (t) {
                return (
                    !1 !== t && (t = t || "fx"),
                    this.each(function () {
                        var e,
                            n = K.get(this),
                            i = n[t + "queue"],
                            o = n[t + "queueHooks"],
                            s = w.timers,
                            r = i ? i.length : 0;
                        for (n.finish = !0, w.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--; ) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                        for (e = 0; e < r; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        w.each(["toggle", "show", "hide"], function (t, e) {
            var n = w.fn[e];
            w.fn[e] = function (t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(le(e, !0), t, i, o);
            };
        }),
        w.each({ slideDown: le("show"), slideUp: le("hide"), slideToggle: le("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, e) {
            w.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i);
            };
        }),
        (w.timers = []),
        (w.fx.tick = function () {
            var t,
                e = 0,
                n = w.timers;
            for (ne = Date.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || w.fx.stop(), (ne = void 0);
        }),
        (w.fx.timer = function (t) {
            w.timers.push(t), w.fx.start();
        }),
        (w.fx.interval = 13),
        (w.fx.start = function () {
            ie || ((ie = !0), re());
        }),
        (w.fx.stop = function () {
            ie = null;
        }),
        (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (w.fn.delay = function (e, n) {
            return (
                (e = (w.fx && w.fx.speeds[e]) || e),
                (n = n || "fx"),
                this.queue(n, function (n, i) {
                    var o = t.setTimeout(n, e);
                    i.stop = function () {
                        t.clearTimeout(o);
                    };
                })
            );
        }),
        (function () {
            var t = m.createElement("input"),
                e = m.createElement("select").appendChild(m.createElement("option"));
            (t.type = "checkbox"), (f.checkOn = "" !== t.value), (f.optSelected = e.selected), ((t = m.createElement("input")).value = "t"), (t.type = "radio"), (f.radioValue = "t" === t.value);
        })();
    var ue,
        de = w.expr.attrHandle;
    w.fn.extend({
        attr: function (t, e) {
            return B(this, w.attr, t, e, arguments.length > 1);
        },
        removeAttr: function (t) {
            return this.each(function () {
                w.removeAttr(this, t);
            });
        },
    }),
        w.extend({
            attr: function (t, e, n) {
                var i,
                    o,
                    s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                    return void 0 === t.getAttribute
                        ? w.prop(t, e, n)
                        : ((1 === s && w.isXMLDoc(t)) || (o = w.attrHooks[e.toLowerCase()] || (w.expr.match.bool.test(e) ? ue : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void w.removeAttr(t, e)
                                  : o && "set" in o && void 0 !== (i = o.set(t, n, e))
                                  ? i
                                  : (t.setAttribute(e, n + ""), n)
                              : o && "get" in o && null !== (i = o.get(t, e))
                              ? i
                              : null == (i = w.find.attr(t, e))
                              ? void 0
                              : i);
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!f.radioValue && "radio" === e && M(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e;
                        }
                    },
                },
            },
            removeAttr: function (t, e) {
                var n,
                    i = 0,
                    o = e && e.match($);
                if (o && 1 === t.nodeType) for (; (n = o[i++]); ) t.removeAttribute(n);
            },
        }),
        (ue = {
            set: function (t, e, n) {
                return !1 === e ? w.removeAttr(t, n) : t.setAttribute(n, n), n;
            },
        }),
        w.each(w.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = de[e] || w.find.attr;
            de[e] = function (t, e, i) {
                var o,
                    s,
                    r = e.toLowerCase();
                return i || ((s = de[r]), (de[r] = o), (o = null != n(t, e, i) ? r : null), (de[r] = s)), o;
            };
        });
    var fe = /^(?:input|select|textarea|button)$/i,
        pe = /^(?:a|area)$/i;
    function ge(t) {
        return (t.match($) || []).join(" ");
    }
    function me(t) {
        return (t.getAttribute && t.getAttribute("class")) || "";
    }
    function be(t) {
        return Array.isArray(t) ? t : ("string" == typeof t && t.match($)) || [];
    }
    w.fn.extend({
        prop: function (t, e) {
            return B(this, w.prop, t, e, arguments.length > 1);
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[w.propFix[t] || t];
            });
        },
    }),
        w.extend({
            prop: function (t, e, n) {
                var i,
                    o,
                    s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                    return (
                        (1 === s && w.isXMLDoc(t)) || ((e = w.propFix[e] || e), (o = w.propHooks[e])),
                        void 0 !== n ? (o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t[e] = n)) : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = w.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : fe.test(t.nodeName) || (pe.test(t.nodeName) && t.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        f.optSelected ||
            (w.propHooks.selected = {
                get: function (t) {
                    var e = t.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex, null;
                },
                set: function (t) {
                    var e = t.parentNode;
                    e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
                },
            }),
        w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            w.propFix[this.toLowerCase()] = this;
        }),
        w.fn.extend({
            addClass: function (t) {
                var e, n, i, o, s, r;
                return p(t)
                    ? this.each(function (e) {
                          w(this).addClass(t.call(this, e, me(this)));
                      })
                    : (e = be(t)).length
                    ? this.each(function () {
                          if (((i = me(this)), (n = 1 === this.nodeType && " " + ge(i) + " "))) {
                              for (s = 0; s < e.length; s++) (o = e[s]), n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                              (r = ge(n)), i !== r && this.setAttribute("class", r);
                          }
                      })
                    : this;
            },
            removeClass: function (t) {
                var e, n, i, o, s, r;
                return p(t)
                    ? this.each(function (e) {
                          w(this).removeClass(t.call(this, e, me(this)));
                      })
                    : arguments.length
                    ? (e = be(t)).length
                        ? this.each(function () {
                              if (((i = me(this)), (n = 1 === this.nodeType && " " + ge(i) + " "))) {
                                  for (s = 0; s < e.length; s++) for (o = e[s]; n.indexOf(" " + o + " ") > -1; ) n = n.replace(" " + o + " ", " ");
                                  (r = ge(n)), i !== r && this.setAttribute("class", r);
                              }
                          })
                        : this
                    : this.attr("class", "");
            },
            toggleClass: function (t, e) {
                var n,
                    i,
                    o,
                    s,
                    r = typeof t,
                    a = "string" === r || Array.isArray(t);
                return p(t)
                    ? this.each(function (n) {
                          w(this).toggleClass(t.call(this, n, me(this), e), e);
                      })
                    : "boolean" == typeof e && a
                    ? e
                        ? this.addClass(t)
                        : this.removeClass(t)
                    : ((n = be(t)),
                      this.each(function () {
                          if (a) for (s = w(this), o = 0; o < n.length; o++) (i = n[o]), s.hasClass(i) ? s.removeClass(i) : s.addClass(i);
                          else (void 0 !== t && "boolean" !== r) || ((i = me(this)) && K.set(this, "__className__", i), this.setAttribute && this.setAttribute("class", i || !1 === t ? "" : K.get(this, "__className__") || ""));
                      }));
            },
            hasClass: function (t) {
                var e,
                    n,
                    i = 0;
                for (e = " " + t + " "; (n = this[i++]); ) if (1 === n.nodeType && (" " + ge(me(n)) + " ").indexOf(e) > -1) return !0;
                return !1;
            },
        });
    var xe = /\r/g;
    w.fn.extend({
        val: function (t) {
            var e,
                n,
                i,
                o = this[0];
            return arguments.length
                ? ((i = p(t)),
                  this.each(function (n) {
                      var o;
                      1 === this.nodeType &&
                          (null == (o = i ? t.call(this, n, w(this).val()) : t)
                              ? (o = "")
                              : "number" == typeof o
                              ? (o += "")
                              : Array.isArray(o) &&
                                (o = w.map(o, function (t) {
                                    return null == t ? "" : t + "";
                                })),
                          ((e = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value")) || (this.value = o));
                  }))
                : o
                ? (e = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value"))
                    ? n
                    : "string" == typeof (n = o.value)
                    ? n.replace(xe, "")
                    : null == n
                    ? ""
                    : n
                : void 0;
        },
    }),
        w.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = w.find.attr(t, "value");
                        return null != e ? e : ge(w.text(t));
                    },
                },
                select: {
                    get: function (t) {
                        var e,
                            n,
                            i,
                            o = t.options,
                            s = t.selectedIndex,
                            r = "select-one" === t.type,
                            a = r ? null : [],
                            l = r ? s + 1 : o.length;
                        for (i = s < 0 ? l : r ? s : 0; i < l; i++)
                            if (((n = o[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !M(n.parentNode, "optgroup"))) {
                                if (((e = w(n).val()), r)) return e;
                                a.push(e);
                            }
                        return a;
                    },
                    set: function (t, e) {
                        for (var n, i, o = t.options, s = w.makeArray(e), r = o.length; r--; ) ((i = o[r]).selected = w.inArray(w.valHooks.option.get(i), s) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), s;
                    },
                },
            },
        }),
        w.each(["radio", "checkbox"], function () {
            (w.valHooks[this] = {
                set: function (t, e) {
                    if (Array.isArray(e)) return (t.checked = w.inArray(w(t).val(), e) > -1);
                },
            }),
                f.checkOn ||
                    (w.valHooks[this].get = function (t) {
                        return null === t.getAttribute("value") ? "on" : t.value;
                    });
        }),
        (f.focusin = "onfocusin" in t);
    var ye = /^(?:focusinfocus|focusoutblur)$/,
        ve = function (t) {
            t.stopPropagation();
        };
    w.extend(w.event, {
        trigger: function (e, n, i, o) {
            var s,
                r,
                a,
                l,
                c,
                u,
                d,
                f,
                b = [i || m],
                x = h.call(e, "type") ? e.type : e,
                y = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
                ((r = f = a = i = i || m),
                3 !== i.nodeType &&
                    8 !== i.nodeType &&
                    !ye.test(x + w.event.triggered) &&
                    (x.indexOf(".") > -1 && ((y = x.split(".")), (x = y.shift()), y.sort()),
                    (c = x.indexOf(":") < 0 && "on" + x),
                    ((e = e[w.expando] ? e : new w.Event(x, "object" == typeof e && e)).isTrigger = o ? 2 : 3),
                    (e.namespace = y.join(".")),
                    (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (e.result = void 0),
                    e.target || (e.target = i),
                    (n = null == n ? [e] : w.makeArray(n, [e])),
                    (d = w.event.special[x] || {}),
                    o || !d.trigger || !1 !== d.trigger.apply(i, n)))
            ) {
                if (!o && !d.noBubble && !g(i)) {
                    for (l = d.delegateType || x, ye.test(l + x) || (r = r.parentNode); r; r = r.parentNode) b.push(r), (a = r);
                    a === (i.ownerDocument || m) && b.push(a.defaultView || a.parentWindow || t);
                }
                for (s = 0; (r = b[s++]) && !e.isPropagationStopped(); )
                    (f = r),
                        (e.type = s > 1 ? l : d.bindType || x),
                        (u = (K.get(r, "events") || Object.create(null))[e.type] && K.get(r, "handle")) && u.apply(r, n),
                        (u = c && r[c]) && u.apply && X(r) && ((e.result = u.apply(r, n)), !1 === e.result && e.preventDefault());
                return (
                    (e.type = x),
                    o ||
                        e.isDefaultPrevented() ||
                        (d._default && !1 !== d._default.apply(b.pop(), n)) ||
                        !X(i) ||
                        (c &&
                            p(i[x]) &&
                            !g(i) &&
                            ((a = i[c]) && (i[c] = null),
                            (w.event.triggered = x),
                            e.isPropagationStopped() && f.addEventListener(x, ve),
                            i[x](),
                            e.isPropagationStopped() && f.removeEventListener(x, ve),
                            (w.event.triggered = void 0),
                            a && (i[c] = a))),
                    e.result
                );
            }
        },
        simulate: function (t, e, n) {
            var i = w.extend(new w.Event(), n, { type: t, isSimulated: !0 });
            w.event.trigger(i, null, e);
        },
    }),
        w.fn.extend({
            trigger: function (t, e) {
                return this.each(function () {
                    w.event.trigger(t, e, this);
                });
            },
            triggerHandler: function (t, e) {
                var n = this[0];
                if (n) return w.event.trigger(t, e, n, !0);
            },
        }),
        f.focusin ||
            w.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
                var n = function (t) {
                    w.event.simulate(e, t.target, w.event.fix(t));
                };
                w.event.special[e] = {
                    setup: function () {
                        var i = this.ownerDocument || this.document || this,
                            o = K.access(i, e);
                        o || i.addEventListener(t, n, !0), K.access(i, e, (o || 0) + 1);
                    },
                    teardown: function () {
                        var i = this.ownerDocument || this.document || this,
                            o = K.access(i, e) - 1;
                        o ? K.access(i, e, o) : (i.removeEventListener(t, n, !0), K.remove(i, e));
                    },
                };
            });
    var we = t.location,
        _e = { guid: Date.now() },
        Se = /\?/;
    w.parseXML = function (e) {
        var n, i;
        if (!e || "string" != typeof e) return null;
        try {
            n = new t.DOMParser().parseFromString(e, "text/xml");
        } catch (t) {}
        return (
            (i = n && n.getElementsByTagName("parsererror")[0]),
            (n && !i) ||
                w.error(
                    "Invalid XML: " +
                        (i
                            ? w
                                  .map(i.childNodes, function (t) {
                                      return t.textContent;
                                  })
                                  .join("\n")
                            : e)
                ),
            n
        );
    };
    var Ce = /\[\]$/,
        ke = /\r?\n/g,
        Te = /^(?:submit|button|image|reset|file)$/i,
        Me = /^(?:input|select|textarea|keygen)/i;
    function Pe(t, e, n, i) {
        var o;
        if (Array.isArray(e))
            w.each(e, function (e, o) {
                n || Ce.test(t) ? i(t, o) : Pe(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i);
            });
        else if (n || "object" !== y(e)) i(t, e);
        else for (o in e) Pe(t + "[" + o + "]", e[o], n, i);
    }
    (w.param = function (t, e) {
        var n,
            i = [],
            o = function (t, e) {
                var n = p(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (null == t) return "";
        if (Array.isArray(t) || (t.jquery && !w.isPlainObject(t)))
            w.each(t, function () {
                o(this.name, this.value);
            });
        else for (n in t) Pe(n, t[n], e, o);
        return i.join("&");
    }),
        w.fn.extend({
            serialize: function () {
                return w.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var t = w.prop(this, "elements");
                    return t ? w.makeArray(t) : this;
                })
                    .filter(function () {
                        var t = this.type;
                        return this.name && !w(this).is(":disabled") && Me.test(this.nodeName) && !Te.test(t) && (this.checked || !ft.test(t));
                    })
                    .map(function (t, e) {
                        var n = w(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? w.map(n, function (t) {
                                  return { name: e.name, value: t.replace(ke, "\r\n") };
                              })
                            : { name: e.name, value: n.replace(ke, "\r\n") };
                    })
                    .get();
            },
        });
    var De = /%20/g,
        Ae = /#.*$/,
        Ee = /([?&])_=[^&]*/,
        Le = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Oe = /^(?:GET|HEAD)$/,
        Re = /^\/\//,
        $e = {},
        Ie = {},
        Fe = "*/".concat("*"),
        je = m.createElement("a");
    function ze(t) {
        return function (e, n) {
            "string" != typeof e && ((n = e), (e = "*"));
            var i,
                o = 0,
                s = e.toLowerCase().match($) || [];
            if (p(n)) for (; (i = s[o++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n);
        };
    }
    function Ne(t, e, n, i) {
        var o = {},
            s = t === Ie;
        function r(a) {
            var l;
            return (
                (o[a] = !0),
                w.each(t[a] || [], function (t, a) {
                    var c = a(e, n, i);
                    return "string" != typeof c || s || o[c] ? (s ? !(l = c) : void 0) : (e.dataTypes.unshift(c), r(c), !1);
                }),
                l
            );
        }
        return r(e.dataTypes[0]) || (!o["*"] && r("*"));
    }
    function He(t, e) {
        var n,
            i,
            o = w.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
        return i && w.extend(!0, t, i), t;
    }
    (je.href = we.href),
        w.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: we.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(we.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": Fe, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (t, e) {
                return e ? He(He(t, w.ajaxSettings), e) : He(w.ajaxSettings, t);
            },
            ajaxPrefilter: ze($e),
            ajaxTransport: ze(Ie),
            ajax: function (e, n) {
                "object" == typeof e && ((n = e), (e = void 0)), (n = n || {});
                var i,
                    o,
                    s,
                    r,
                    a,
                    l,
                    c,
                    h,
                    u,
                    d,
                    f = w.ajaxSetup({}, n),
                    p = f.context || f,
                    g = f.context && (p.nodeType || p.jquery) ? w(p) : w.event,
                    b = w.Deferred(),
                    x = w.Callbacks("once memory"),
                    y = f.statusCode || {},
                    v = {},
                    _ = {},
                    S = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (c) {
                                if (!r) for (r = {}; (e = Le.exec(s)); ) r[e[1].toLowerCase() + " "] = (r[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                e = r[t.toLowerCase() + " "];
                            }
                            return null == e ? null : e.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return c ? s : null;
                        },
                        setRequestHeader: function (t, e) {
                            return null == c && ((t = _[t.toLowerCase()] = _[t.toLowerCase()] || t), (v[t] = e)), this;
                        },
                        overrideMimeType: function (t) {
                            return null == c && (f.mimeType = t), this;
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)
                                if (c) C.always(t[C.status]);
                                else for (e in t) y[e] = [y[e], t[e]];
                            return this;
                        },
                        abort: function (t) {
                            var e = t || S;
                            return i && i.abort(e), k(0, e), this;
                        },
                    };
                if (
                    (b.promise(C),
                    (f.url = ((e || f.url || we.href) + "").replace(Re, we.protocol + "//")),
                    (f.type = n.method || n.type || f.method || f.type),
                    (f.dataTypes = (f.dataType || "*").toLowerCase().match($) || [""]),
                    null == f.crossDomain)
                ) {
                    l = m.createElement("a");
                    try {
                        (l.href = f.url), (l.href = l.href), (f.crossDomain = je.protocol + "//" + je.host != l.protocol + "//" + l.host);
                    } catch (t) {
                        f.crossDomain = !0;
                    }
                }
                if ((f.data && f.processData && "string" != typeof f.data && (f.data = w.param(f.data, f.traditional)), Ne($e, f, n, C), c)) return C;
                for (u in ((h = w.event && f.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
                (f.type = f.type.toUpperCase()),
                (f.hasContent = !Oe.test(f.type)),
                (o = f.url.replace(Ae, "")),
                f.hasContent
                    ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(De, "+"))
                    : ((d = f.url.slice(o.length)),
                      f.data && (f.processData || "string" == typeof f.data) && ((o += (Se.test(o) ? "&" : "?") + f.data), delete f.data),
                      !1 === f.cache && ((o = o.replace(Ee, "$1")), (d = (Se.test(o) ? "&" : "?") + "_=" + _e.guid++ + d)),
                      (f.url = o + d)),
                f.ifModified && (w.lastModified[o] && C.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && C.setRequestHeader("If-None-Match", w.etag[o])),
                ((f.data && f.hasContent && !1 !== f.contentType) || n.contentType) && C.setRequestHeader("Content-Type", f.contentType),
                C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Fe + "; q=0.01" : "") : f.accepts["*"]),
                f.headers))
                    C.setRequestHeader(u, f.headers[u]);
                if (f.beforeSend && (!1 === f.beforeSend.call(p, C, f) || c)) return C.abort();
                if (((S = "abort"), x.add(f.complete), C.done(f.success), C.fail(f.error), (i = Ne(Ie, f, n, C)))) {
                    if (((C.readyState = 1), h && g.trigger("ajaxSend", [C, f]), c)) return C;
                    f.async &&
                        f.timeout > 0 &&
                        (a = t.setTimeout(function () {
                            C.abort("timeout");
                        }, f.timeout));
                    try {
                        (c = !1), i.send(v, k);
                    } catch (t) {
                        if (c) throw t;
                        k(-1, t);
                    }
                } else k(-1, "No Transport");
                function k(e, n, r, l) {
                    var u,
                        d,
                        m,
                        v,
                        _,
                        S = n;
                    c ||
                        ((c = !0),
                        a && t.clearTimeout(a),
                        (i = void 0),
                        (s = l || ""),
                        (C.readyState = e > 0 ? 4 : 0),
                        (u = (e >= 200 && e < 300) || 304 === e),
                        r &&
                            (v = (function (t, e, n) {
                                for (var i, o, s, r, a = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                                if (i)
                                    for (o in a)
                                        if (a[o] && a[o].test(i)) {
                                            l.unshift(o);
                                            break;
                                        }
                                if (l[0] in n) s = l[0];
                                else {
                                    for (o in n) {
                                        if (!l[0] || t.converters[o + " " + l[0]]) {
                                            s = o;
                                            break;
                                        }
                                        r || (r = o);
                                    }
                                    s = s || r;
                                }
                                if (s) return s !== l[0] && l.unshift(s), n[s];
                            })(f, C, r)),
                        !u && w.inArray("script", f.dataTypes) > -1 && w.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function () {}),
                        (v = (function (t, e, n, i) {
                            var o,
                                s,
                                r,
                                a,
                                l,
                                c = {},
                                h = t.dataTypes.slice();
                            if (h[1]) for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
                            for (s = h.shift(); s; )
                                if ((t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), (l = s), (s = h.shift())))
                                    if ("*" === s) s = l;
                                    else if ("*" !== l && l !== s) {
                                        if (!(r = c[l + " " + s] || c["* " + s]))
                                            for (o in c)
                                                if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                    !0 === r ? (r = c[o]) : !0 !== c[o] && ((s = a[0]), h.unshift(a[1]));
                                                    break;
                                                }
                                        if (!0 !== r)
                                            if (r && t.throws) e = r(e);
                                            else
                                                try {
                                                    e = r(e);
                                                } catch (t) {
                                                    return { state: "parsererror", error: r ? t : "No conversion from " + l + " to " + s };
                                                }
                                    }
                            return { state: "success", data: e };
                        })(f, v, C, u)),
                        u
                            ? (f.ifModified && ((_ = C.getResponseHeader("Last-Modified")) && (w.lastModified[o] = _), (_ = C.getResponseHeader("etag")) && (w.etag[o] = _)),
                              204 === e || "HEAD" === f.type ? (S = "nocontent") : 304 === e ? (S = "notmodified") : ((S = v.state), (d = v.data), (u = !(m = v.error))))
                            : ((m = S), (!e && S) || ((S = "error"), e < 0 && (e = 0))),
                        (C.status = e),
                        (C.statusText = (n || S) + ""),
                        u ? b.resolveWith(p, [d, S, C]) : b.rejectWith(p, [C, S, m]),
                        C.statusCode(y),
                        (y = void 0),
                        h && g.trigger(u ? "ajaxSuccess" : "ajaxError", [C, f, u ? d : m]),
                        x.fireWith(p, [C, S]),
                        h && (g.trigger("ajaxComplete", [C, f]), --w.active || w.event.trigger("ajaxStop")));
                }
                return C;
            },
            getJSON: function (t, e, n) {
                return w.get(t, e, n, "json");
            },
            getScript: function (t, e) {
                return w.get(t, void 0, e, "script");
            },
        }),
        w.each(["get", "post"], function (t, e) {
            w[e] = function (t, n, i, o) {
                return p(n) && ((o = o || i), (i = n), (n = void 0)), w.ajax(w.extend({ url: t, type: e, dataType: o, data: n, success: i }, w.isPlainObject(t) && t));
            };
        }),
        w.ajaxPrefilter(function (t) {
            var e;
            for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "");
        }),
        (w._evalUrl = function (t, e, n) {
            return w.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (t) {
                    w.globalEval(t, e, n);
                },
            });
        }),
        w.fn.extend({
            wrapAll: function (t) {
                var e;
                return (
                    this[0] &&
                        (p(t) && (t = t.call(this[0])),
                        (e = w(t, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && e.insertBefore(this[0]),
                        e
                            .map(function () {
                                for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                                return t;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (t) {
                return p(t)
                    ? this.each(function (e) {
                          w(this).wrapInner(t.call(this, e));
                      })
                    : this.each(function () {
                          var e = w(this),
                              n = e.contents();
                          n.length ? n.wrapAll(t) : e.append(t);
                      });
            },
            wrap: function (t) {
                var e = p(t);
                return this.each(function (n) {
                    w(this).wrapAll(e ? t.call(this, n) : t);
                });
            },
            unwrap: function (t) {
                return (
                    this.parent(t)
                        .not("body")
                        .each(function () {
                            w(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (w.expr.pseudos.hidden = function (t) {
            return !w.expr.pseudos.visible(t);
        }),
        (w.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
        }),
        (w.ajaxSettings.xhr = function () {
            try {
                return new t.XMLHttpRequest();
            } catch (t) {}
        });
    var Be = { 0: 200, 1223: 204 },
        We = w.ajaxSettings.xhr();
    (f.cors = !!We && "withCredentials" in We),
        (f.ajax = We = !!We),
        w.ajaxTransport(function (e) {
            var n, i;
            if (f.cors || (We && !e.crossDomain))
                return {
                    send: function (o, s) {
                        var r,
                            a = e.xhr();
                        if ((a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (r in e.xhrFields) a[r] = e.xhrFields[r];
                        for (r in (e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o)) a.setRequestHeader(r, o[r]);
                        (n = function (t) {
                            return function () {
                                n &&
                                    ((n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                                    "abort" === t
                                        ? a.abort()
                                        : "error" === t
                                        ? "number" != typeof a.status
                                            ? s(0, "error")
                                            : s(a.status, a.statusText)
                                        : s(Be[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
                            };
                        }),
                            (a.onload = n()),
                            (i = a.onerror = a.ontimeout = n("error")),
                            void 0 !== a.onabort
                                ? (a.onabort = i)
                                : (a.onreadystatechange = function () {
                                      4 === a.readyState &&
                                          t.setTimeout(function () {
                                              n && i();
                                          });
                                  }),
                            (n = n("abort"));
                        try {
                            a.send((e.hasContent && e.data) || null);
                        } catch (t) {
                            if (n) throw t;
                        }
                    },
                    abort: function () {
                        n && n();
                    },
                };
        }),
        w.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1);
        }),
        w.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (t) {
                    return w.globalEval(t), t;
                },
            },
        }),
        w.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
        }),
        w.ajaxTransport("script", function (t) {
            var e, n;
            if (t.crossDomain || t.scriptAttrs)
                return {
                    send: function (i, o) {
                        (e = w("<script>")
                            .attr(t.scriptAttrs || {})
                            .prop({ charset: t.scriptCharset, src: t.url })
                            .on(
                                "load error",
                                (n = function (t) {
                                    e.remove(), (n = null), t && o("error" === t.type ? 404 : 200, t.type);
                                })
                            )),
                            m.head.appendChild(e[0]);
                    },
                    abort: function () {
                        n && n();
                    },
                };
        });
    var Ve,
        qe = [],
        Ye = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = qe.pop() || w.expando + "_" + _e.guid++;
            return (this[t] = !0), t;
        },
    }),
        w.ajaxPrefilter("json jsonp", function (e, n, i) {
            var o,
                s,
                r,
                a = !1 !== e.jsonp && (Ye.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ye.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return (
                    (o = e.jsonpCallback = p(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                    a ? (e[a] = e[a].replace(Ye, "$1" + o)) : !1 !== e.jsonp && (e.url += (Se.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                    (e.converters["script json"] = function () {
                        return r || w.error(o + " was not called"), r[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (s = t[o]),
                    (t[o] = function () {
                        r = arguments;
                    }),
                    i.always(function () {
                        void 0 === s ? w(t).removeProp(o) : (t[o] = s), e[o] && ((e.jsonpCallback = n.jsonpCallback), qe.push(o)), r && p(s) && s(r[0]), (r = s = void 0);
                    }),
                    "script"
                );
        }),
        (f.createHTMLDocument = (((Ve = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Ve.childNodes.length)),
        (w.parseHTML = function (t, e, n) {
            return "string" != typeof t
                ? []
                : ("boolean" == typeof e && ((n = e), (e = !1)),
                  e || (f.createHTMLDocument ? (((i = (e = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href), e.head.appendChild(i)) : (e = m)),
                  (s = !n && []),
                  (o = P.exec(t)) ? [e.createElement(o[1])] : ((o = vt([t], e, s)), s && s.length && w(s).remove(), w.merge([], o.childNodes)));
            var i, o, s;
        }),
        (w.fn.load = function (t, e, n) {
            var i,
                o,
                s,
                r = this,
                a = t.indexOf(" ");
            return (
                a > -1 && ((i = ge(t.slice(a))), (t = t.slice(0, a))),
                p(e) ? ((n = e), (e = void 0)) : e && "object" == typeof e && (o = "POST"),
                r.length > 0 &&
                    w
                        .ajax({ url: t, type: o || "GET", dataType: "html", data: e })
                        .done(function (t) {
                            (s = arguments), r.html(i ? w("<div>").append(w.parseHTML(t)).find(i) : t);
                        })
                        .always(
                            n &&
                                function (t, e) {
                                    r.each(function () {
                                        n.apply(this, s || [t.responseText, e, t]);
                                    });
                                }
                        ),
                this
            );
        }),
        (w.expr.pseudos.animated = function (t) {
            return w.grep(w.timers, function (e) {
                return t === e.elem;
            }).length;
        }),
        (w.offset = {
            setOffset: function (t, e, n) {
                var i,
                    o,
                    s,
                    r,
                    a,
                    l,
                    c = w.css(t, "position"),
                    h = w(t),
                    u = {};
                "static" === c && (t.style.position = "relative"),
                    (a = h.offset()),
                    (s = w.css(t, "top")),
                    (l = w.css(t, "left")),
                    ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1 ? ((r = (i = h.position()).top), (o = i.left)) : ((r = parseFloat(s) || 0), (o = parseFloat(l) || 0)),
                    p(e) && (e = e.call(t, n, w.extend({}, a))),
                    null != e.top && (u.top = e.top - a.top + r),
                    null != e.left && (u.left = e.left - a.left + o),
                    "using" in e ? e.using.call(t, u) : h.css(u);
            },
        }),
        w.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                              w.offset.setOffset(this, t, e);
                          });
                var e,
                    n,
                    i = this[0];
                return i ? (i.getClientRects().length ? ((e = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function () {
                if (this[0]) {
                    var t,
                        e,
                        n,
                        i = this[0],
                        o = { top: 0, left: 0 };
                    if ("fixed" === w.css(i, "position")) e = i.getBoundingClientRect();
                    else {
                        for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === w.css(t, "position"); ) t = t.parentNode;
                        t && t !== i && 1 === t.nodeType && (((o = w(t).offset()).top += w.css(t, "borderTopWidth", !0)), (o.left += w.css(t, "borderLeftWidth", !0)));
                    }
                    return { top: e.top - o.top - w.css(i, "marginTop", !0), left: e.left - o.left - w.css(i, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === w.css(t, "position"); ) t = t.offsetParent;
                    return t || it;
                });
            },
        }),
        w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, e) {
            var n = "pageYOffset" === e;
            w.fn[t] = function (i) {
                return B(
                    this,
                    function (t, i, o) {
                        var s;
                        if ((g(t) ? (s = t) : 9 === t.nodeType && (s = t.defaultView), void 0 === o)) return s ? s[e] : t[i];
                        s ? s.scrollTo(n ? s.pageXOffset : o, n ? o : s.pageYOffset) : (t[i] = o);
                    },
                    t,
                    i,
                    arguments.length
                );
            };
        }),
        w.each(["top", "left"], function (t, e) {
            w.cssHooks[e] = Vt(f.pixelPosition, function (t, n) {
                if (n) return (n = Wt(t, e)), Ft.test(n) ? w(t).position()[e] + "px" : n;
            });
        }),
        w.each({ Height: "height", Width: "width" }, function (t, e) {
            w.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (n, i) {
                w.fn[i] = function (o, s) {
                    var r = arguments.length && (n || "boolean" != typeof o),
                        a = n || (!0 === o || !0 === s ? "margin" : "border");
                    return B(
                        this,
                        function (e, n, o) {
                            var s;
                            return g(e)
                                ? 0 === i.indexOf("outer")
                                    ? e["inner" + t]
                                    : e.document.documentElement["client" + t]
                                : 9 === e.nodeType
                                ? ((s = e.documentElement), Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t]))
                                : void 0 === o
                                ? w.css(e, n, a)
                                : w.style(e, n, o, a);
                        },
                        e,
                        r ? o : void 0,
                        r
                    );
                };
            });
        }),
        w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            w.fn[e] = function (t) {
                return this.on(e, t);
            };
        }),
        w.fn.extend({
            bind: function (t, e, n) {
                return this.on(t, null, e, n);
            },
            unbind: function (t, e) {
                return this.off(t, null, e);
            },
            delegate: function (t, e, n, i) {
                return this.on(e, t, n, i);
            },
            undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
            },
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t);
            },
        }),
        w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
            w.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
            };
        });
    var Xe = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    (w.proxy = function (t, e) {
        var n, i, s;
        if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), p(t)))
            return (
                (i = o.call(arguments, 2)),
                (s = function () {
                    return t.apply(e || this, i.concat(o.call(arguments)));
                }),
                (s.guid = t.guid = t.guid || w.guid++),
                s
            );
    }),
        (w.holdReady = function (t) {
            t ? w.readyWait++ : w.ready(!0);
        }),
        (w.isArray = Array.isArray),
        (w.parseJSON = JSON.parse),
        (w.nodeName = M),
        (w.isFunction = p),
        (w.isWindow = g),
        (w.camelCase = Y),
        (w.type = y),
        (w.now = Date.now),
        (w.isNumeric = function (t) {
            var e = w.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
        }),
        (w.trim = function (t) {
            return null == t ? "" : (t + "").replace(Xe, "$1");
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return w;
            });
    var Ue = t.jQuery,
        Ke = t.$;
    return (
        (w.noConflict = function (e) {
            return t.$ === w && (t.$ = Ke), e && t.jQuery === w && (t.jQuery = Ue), w;
        }),
        void 0 === e && (t.jQuery = t.$ = w),
        w
    );
}),
    (function (t, e) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : ((t = "undefined" != typeof globalThis ? globalThis : t || self).Chart = e());
    })(this, function () {
        "use strict";
        function t() {}
        const e = (function () {
            let t = 0;
            return function () {
                return t++;
            };
        })();
        function n(t) {
            return null == t;
        }
        function i(t) {
            if (Array.isArray && Array.isArray(t)) return !0;
            const e = Object.prototype.toString.call(t);
            return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6);
        }
        function o(t) {
            return null !== t && "[object Object]" === Object.prototype.toString.call(t);
        }
        const s = (t) => ("number" == typeof t || t instanceof Number) && isFinite(+t);
        function r(t, e) {
            return s(t) ? t : e;
        }
        function a(t, e) {
            return void 0 === t ? e : t;
        }
        const l = (t, e) => ("string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 : t / e),
            c = (t, e) => ("string" == typeof t && t.endsWith("%") ? (parseFloat(t) / 100) * e : +t);
        function h(t, e, n) {
            if (t && "function" == typeof t.call) return t.apply(n, e);
        }
        function u(t, e, n, s) {
            let r, a, l;
            if (i(t))
                if (((a = t.length), s)) for (r = a - 1; r >= 0; r--) e.call(n, t[r], r);
                else for (r = 0; r < a; r++) e.call(n, t[r], r);
            else if (o(t)) for (l = Object.keys(t), a = l.length, r = 0; r < a; r++) e.call(n, t[l[r]], l[r]);
        }
        function d(t, e) {
            let n, i, o, s;
            if (!t || !e || t.length !== e.length) return !1;
            for (n = 0, i = t.length; n < i; ++n) if (((o = t[n]), (s = e[n]), o.datasetIndex !== s.datasetIndex || o.index !== s.index)) return !1;
            return !0;
        }
        function f(t) {
            if (i(t)) return t.map(f);
            if (o(t)) {
                const e = Object.create(null),
                    n = Object.keys(t),
                    i = n.length;
                let o = 0;
                for (; o < i; ++o) e[n[o]] = f(t[n[o]]);
                return e;
            }
            return t;
        }
        function p(t) {
            return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
        }
        function g(t, e, n, i) {
            if (!p(t)) return;
            const s = e[t],
                r = n[t];
            o(s) && o(r) ? m(s, r, i) : (e[t] = f(r));
        }
        function m(t, e, n) {
            const s = i(e) ? e : [e],
                r = s.length;
            if (!o(t)) return t;
            const a = (n = n || {}).merger || g;
            for (let i = 0; i < r; ++i) {
                if (!o((e = s[i]))) continue;
                const r = Object.keys(e);
                for (let i = 0, o = r.length; i < o; ++i) a(r[i], t, e, n);
            }
            return t;
        }
        function b(t, e) {
            return m(t, e, { merger: x });
        }
        function x(t, e, n) {
            if (!p(t)) return;
            const i = e[t],
                s = n[t];
            o(i) && o(s) ? b(i, s) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = f(s));
        }
        const y = { "": (t) => t, x: (t) => t.x, y: (t) => t.y };
        function v(t, e) {
            const n =
                y[e] ||
                (y[e] = (function (t) {
                    const e = w(t);
                    return (t) => {
                        for (const n of e) {
                            if ("" === n) break;
                            t = t && t[n];
                        }
                        return t;
                    };
                })(e));
            return n(t);
        }
        function w(t) {
            const e = t.split("."),
                n = [];
            let i = "";
            for (const t of e) (i += t), i.endsWith("\\") ? (i = i.slice(0, -1) + ".") : (n.push(i), (i = ""));
            return n;
        }
        function _(t) {
            return t.charAt(0).toUpperCase() + t.slice(1);
        }
        const S = (t) => void 0 !== t,
            C = (t) => "function" == typeof t,
            k = (t, e) => {
                if (t.size !== e.size) return !1;
                for (const n of t) if (!e.has(n)) return !1;
                return !0;
            };
        function T(t) {
            return "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type;
        }
        const M = Math.PI,
            P = 2 * M,
            D = P + M,
            A = Number.POSITIVE_INFINITY,
            E = M / 180,
            L = M / 2,
            O = M / 4,
            R = (2 * M) / 3,
            $ = Math.log10,
            I = Math.sign;
        function F(t) {
            const e = Math.round(t);
            t = N(t, e, t / 1e3) ? e : t;
            const n = Math.pow(10, Math.floor($(t))),
                i = t / n;
            return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n;
        }
        function j(t) {
            const e = [],
                n = Math.sqrt(t);
            let i;
            for (i = 1; i < n; i++) t % i == 0 && (e.push(i), e.push(t / i));
            return n === (0 | n) && e.push(n), e.sort((t, e) => t - e).pop(), e;
        }
        function z(t) {
            return !isNaN(parseFloat(t)) && isFinite(t);
        }
        function N(t, e, n) {
            return Math.abs(t - e) < n;
        }
        function H(t, e) {
            const n = Math.round(t);
            return n - e <= t && n + e >= t;
        }
        function B(t, e, n) {
            let i, o, s;
            for (i = 0, o = t.length; i < o; i++) (s = t[i][n]), isNaN(s) || ((e.min = Math.min(e.min, s)), (e.max = Math.max(e.max, s)));
        }
        function W(t) {
            return t * (M / 180);
        }
        function V(t) {
            return t * (180 / M);
        }
        function q(t) {
            if (!s(t)) return;
            let e = 1,
                n = 0;
            for (; Math.round(t * e) / e !== t; ) (e *= 10), n++;
            return n;
        }
        function Y(t, e) {
            const n = e.x - t.x,
                i = e.y - t.y,
                o = Math.sqrt(n * n + i * i);
            let s = Math.atan2(i, n);
            return s < -0.5 * M && (s += P), { angle: s, distance: o };
        }
        function X(t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }
        function U(t, e) {
            return ((t - e + D) % P) - M;
        }
        function K(t) {
            return ((t % P) + P) % P;
        }
        function G(t, e, n, i) {
            const o = K(t),
                s = K(e),
                r = K(n),
                a = K(s - o),
                l = K(r - o),
                c = K(o - s),
                h = K(o - r);
            return o === s || o === r || (i && s === r) || (a > l && c < h);
        }
        function Z(t, e, n) {
            return Math.max(e, Math.min(n, t));
        }
        function Q(t) {
            return Z(t, -32768, 32767);
        }
        function J(t, e, n, i = 1e-6) {
            return t >= Math.min(e, n) - i && t <= Math.max(e, n) + i;
        }
        function tt(t, e, n) {
            n = n || ((n) => t[n] < e);
            let i,
                o = t.length - 1,
                s = 0;
            for (; o - s > 1; ) (i = (s + o) >> 1), n(i) ? (s = i) : (o = i);
            return { lo: s, hi: o };
        }
        const et = (t, e, n, i) => tt(t, n, i ? (i) => t[i][e] <= n : (i) => t[i][e] < n),
            nt = (t, e, n) => tt(t, n, (i) => t[i][e] >= n);
        function it(t, e, n) {
            let i = 0,
                o = t.length;
            for (; i < o && t[i] < e; ) i++;
            for (; o > i && t[o - 1] > n; ) o--;
            return i > 0 || o < t.length ? t.slice(i, o) : t;
        }
        const ot = ["push", "pop", "shift", "splice", "unshift"];
        function st(t, e) {
            t._chartjs
                ? t._chartjs.listeners.push(e)
                : (Object.defineProperty(t, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [e] } }),
                  ot.forEach((e) => {
                      const n = "_onData" + _(e),
                          i = t[e];
                      Object.defineProperty(t, e, {
                          configurable: !0,
                          enumerable: !1,
                          value(...e) {
                              const o = i.apply(this, e);
                              return (
                                  t._chartjs.listeners.forEach((t) => {
                                      "function" == typeof t[n] && t[n](...e);
                                  }),
                                  o
                              );
                          },
                      });
                  }));
        }
        function rt(t, e) {
            const n = t._chartjs;
            if (!n) return;
            const i = n.listeners,
                o = i.indexOf(e);
            -1 !== o && i.splice(o, 1),
                i.length > 0 ||
                    (ot.forEach((e) => {
                        delete t[e];
                    }),
                    delete t._chartjs);
        }
        function at(t) {
            const e = new Set();
            let n, i;
            for (n = 0, i = t.length; n < i; ++n) e.add(t[n]);
            return e.size === i ? t : Array.from(e);
        }
        const lt =
            "undefined" == typeof window
                ? function (t) {
                      return t();
                  }
                : window.requestAnimationFrame;
        function ct(t, e, n) {
            const i = n || ((t) => Array.prototype.slice.call(t));
            let o = !1,
                s = [];
            return function (...n) {
                (s = i(n)),
                    o ||
                        ((o = !0),
                        lt.call(window, () => {
                            (o = !1), t.apply(e, s);
                        }));
            };
        }
        function ht(t, e) {
            let n;
            return function (...i) {
                return e ? (clearTimeout(n), (n = setTimeout(t, e, i))) : t.apply(this, i), e;
            };
        }
        const ut = (t) => ("start" === t ? "left" : "end" === t ? "right" : "center"),
            dt = (t, e, n) => ("start" === t ? e : "end" === t ? n : (e + n) / 2),
            ft = (t, e, n, i) => (t === (i ? "left" : "right") ? n : "center" === t ? (e + n) / 2 : e);
        function pt(t, e, n) {
            const i = e.length;
            let o = 0,
                s = i;
            if (t._sorted) {
                const { iScale: r, _parsed: a } = t,
                    l = r.axis,
                    { min: c, max: h, minDefined: u, maxDefined: d } = r.getUserBounds();
                u && (o = Z(Math.min(et(a, r.axis, c).lo, n ? i : et(e, l, r.getPixelForValue(c)).lo), 0, i - 1)), (s = d ? Z(Math.max(et(a, r.axis, h, !0).hi + 1, n ? 0 : et(e, l, r.getPixelForValue(h), !0).hi + 1), o, i) - o : i - o);
            }
            return { start: o, count: s };
        }
        function gt(t) {
            const { xScale: e, yScale: n, _scaleRanges: i } = t,
                o = { xmin: e.min, xmax: e.max, ymin: n.min, ymax: n.max };
            if (!i) return (t._scaleRanges = o), !0;
            const s = i.xmin !== e.min || i.xmax !== e.max || i.ymin !== n.min || i.ymax !== n.max;
            return Object.assign(i, o), s;
        }
        var mt = new (class {
            constructor() {
                (this._request = null), (this._charts = new Map()), (this._running = !1), (this._lastDate = void 0);
            }
            _notify(t, e, n, i) {
                const o = e.listeners[i],
                    s = e.duration;
                o.forEach((i) => i({ chart: t, initial: e.initial, numSteps: s, currentStep: Math.min(n - e.start, s) }));
            }
            _refresh() {
                this._request ||
                    ((this._running = !0),
                    (this._request = lt.call(window, () => {
                        this._update(), (this._request = null), this._running && this._refresh();
                    })));
            }
            _update(t = Date.now()) {
                let e = 0;
                this._charts.forEach((n, i) => {
                    if (!n.running || !n.items.length) return;
                    const o = n.items;
                    let s,
                        r = o.length - 1,
                        a = !1;
                    for (; r >= 0; --r) (s = o[r]), s._active ? (s._total > n.duration && (n.duration = s._total), s.tick(t), (a = !0)) : ((o[r] = o[o.length - 1]), o.pop());
                    a && (i.draw(), this._notify(i, n, t, "progress")), o.length || ((n.running = !1), this._notify(i, n, t, "complete"), (n.initial = !1)), (e += o.length);
                }),
                    (this._lastDate = t),
                    0 === e && (this._running = !1);
            }
            _getAnims(t) {
                const e = this._charts;
                let n = e.get(t);
                return n || ((n = { running: !1, initial: !0, items: [], listeners: { complete: [], progress: [] } }), e.set(t, n)), n;
            }
            listen(t, e, n) {
                this._getAnims(t).listeners[e].push(n);
            }
            add(t, e) {
                e && e.length && this._getAnims(t).items.push(...e);
            }
            has(t) {
                return this._getAnims(t).items.length > 0;
            }
            start(t) {
                const e = this._charts.get(t);
                e && ((e.running = !0), (e.start = Date.now()), (e.duration = e.items.reduce((t, e) => Math.max(t, e._duration), 0)), this._refresh());
            }
            running(t) {
                if (!this._running) return !1;
                const e = this._charts.get(t);
                return !!(e && e.running && e.items.length);
            }
            stop(t) {
                const e = this._charts.get(t);
                if (!e || !e.items.length) return;
                const n = e.items;
                let i = n.length - 1;
                for (; i >= 0; --i) n[i].cancel();
                (e.items = []), this._notify(t, e, Date.now(), "complete");
            }
            remove(t) {
                return this._charts.delete(t);
            }
        })();
        /*!
         * @kurkle/color v0.2.1
         * https://github.com/kurkle/color#readme
         * (c) 2022 Jukka Kurkela
         * Released under the MIT License
         */ function bt(t) {
            return (t + 0.5) | 0;
        }
        const xt = (t, e, n) => Math.max(Math.min(t, n), e);
        function yt(t) {
            return xt(bt(2.55 * t), 0, 255);
        }
        function vt(t) {
            return xt(bt(255 * t), 0, 255);
        }
        function wt(t) {
            return xt(bt(t / 2.55) / 100, 0, 1);
        }
        function _t(t) {
            return xt(bt(100 * t), 0, 100);
        }
        const St = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 },
            Ct = [..."0123456789ABCDEF"],
            kt = (t) => Ct[15 & t],
            Tt = (t) => Ct[(240 & t) >> 4] + Ct[15 & t],
            Mt = (t) => (240 & t) >> 4 == (15 & t);
        const Pt = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
        function Dt(t, e, n) {
            const i = e * Math.min(n, 1 - n),
                o = (e, o = (e + t / 30) % 12) => n - i * Math.max(Math.min(o - 3, 9 - o, 1), -1);
            return [o(0), o(8), o(4)];
        }
        function At(t, e, n) {
            const i = (i, o = (i + t / 60) % 6) => n - n * e * Math.max(Math.min(o, 4 - o, 1), 0);
            return [i(5), i(3), i(1)];
        }
        function Et(t, e, n) {
            const i = Dt(t, 1, 0.5);
            let o;
            for (e + n > 1 && ((o = 1 / (e + n)), (e *= o), (n *= o)), o = 0; o < 3; o++) (i[o] *= 1 - e - n), (i[o] += e);
            return i;
        }
        function Lt(t) {
            const e = t.r / 255,
                n = t.g / 255,
                i = t.b / 255,
                o = Math.max(e, n, i),
                s = Math.min(e, n, i),
                r = (o + s) / 2;
            let a, l, c;
            return (
                o !== s &&
                    ((c = o - s),
                    (l = r > 0.5 ? c / (2 - o - s) : c / (o + s)),
                    (a = (function (t, e, n, i, o) {
                        return t === o ? (e - n) / i + (e < n ? 6 : 0) : e === o ? (n - t) / i + 2 : (t - e) / i + 4;
                    })(e, n, i, c, o)),
                    (a = 60 * a + 0.5)),
                [0 | a, l || 0, r]
            );
        }
        function Ot(t, e, n, i) {
            return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, i)).map(vt);
        }
        function Rt(t, e, n) {
            return Ot(Dt, t, e, n);
        }
        function $t(t) {
            return ((t % 360) + 360) % 360;
        }
        const It = {
                x: "dark",
                Z: "light",
                Y: "re",
                X: "blu",
                W: "gr",
                V: "medium",
                U: "slate",
                A: "ee",
                T: "ol",
                S: "or",
                B: "ra",
                C: "lateg",
                D: "ights",
                R: "in",
                Q: "turquois",
                E: "hi",
                P: "ro",
                O: "al",
                N: "le",
                M: "de",
                L: "yello",
                F: "en",
                K: "ch",
                G: "arks",
                H: "ea",
                I: "ightg",
                J: "wh",
            },
            Ft = {
                OiceXe: "f0f8ff",
                antiquewEte: "faebd7",
                aqua: "ffff",
                aquamarRe: "7fffd4",
                azuY: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "0",
                blanKedOmond: "ffebcd",
                Xe: "ff",
                XeviTet: "8a2be2",
                bPwn: "a52a2a",
                burlywood: "deb887",
                caMtXe: "5f9ea0",
                KartYuse: "7fff00",
                KocTate: "d2691e",
                cSO: "ff7f50",
                cSnflowerXe: "6495ed",
                cSnsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "ffff",
                xXe: "8b",
                xcyan: "8b8b",
                xgTMnPd: "b8860b",
                xWay: "a9a9a9",
                xgYF: "6400",
                xgYy: "a9a9a9",
                xkhaki: "bdb76b",
                xmagFta: "8b008b",
                xTivegYF: "556b2f",
                xSange: "ff8c00",
                xScEd: "9932cc",
                xYd: "8b0000",
                xsOmon: "e9967a",
                xsHgYF: "8fbc8f",
                xUXe: "483d8b",
                xUWay: "2f4f4f",
                xUgYy: "2f4f4f",
                xQe: "ced1",
                xviTet: "9400d3",
                dAppRk: "ff1493",
                dApskyXe: "bfff",
                dimWay: "696969",
                dimgYy: "696969",
                dodgerXe: "1e90ff",
                fiYbrick: "b22222",
                flSOwEte: "fffaf0",
                foYstWAn: "228b22",
                fuKsia: "ff00ff",
                gaRsbSo: "dcdcdc",
                ghostwEte: "f8f8ff",
                gTd: "ffd700",
                gTMnPd: "daa520",
                Way: "808080",
                gYF: "8000",
                gYFLw: "adff2f",
                gYy: "808080",
                honeyMw: "f0fff0",
                hotpRk: "ff69b4",
                RdianYd: "cd5c5c",
                Rdigo: "4b0082",
                ivSy: "fffff0",
                khaki: "f0e68c",
                lavFMr: "e6e6fa",
                lavFMrXsh: "fff0f5",
                lawngYF: "7cfc00",
                NmoncEffon: "fffacd",
                ZXe: "add8e6",
                ZcSO: "f08080",
                Zcyan: "e0ffff",
                ZgTMnPdLw: "fafad2",
                ZWay: "d3d3d3",
                ZgYF: "90ee90",
                ZgYy: "d3d3d3",
                ZpRk: "ffb6c1",
                ZsOmon: "ffa07a",
                ZsHgYF: "20b2aa",
                ZskyXe: "87cefa",
                ZUWay: "778899",
                ZUgYy: "778899",
                ZstAlXe: "b0c4de",
                ZLw: "ffffe0",
                lime: "ff00",
                limegYF: "32cd32",
                lRF: "faf0e6",
                magFta: "ff00ff",
                maPon: "800000",
                VaquamarRe: "66cdaa",
                VXe: "cd",
                VScEd: "ba55d3",
                VpurpN: "9370db",
                VsHgYF: "3cb371",
                VUXe: "7b68ee",
                VsprRggYF: "fa9a",
                VQe: "48d1cc",
                VviTetYd: "c71585",
                midnightXe: "191970",
                mRtcYam: "f5fffa",
                mistyPse: "ffe4e1",
                moccasR: "ffe4b5",
                navajowEte: "ffdead",
                navy: "80",
                Tdlace: "fdf5e6",
                Tive: "808000",
                TivedBb: "6b8e23",
                Sange: "ffa500",
                SangeYd: "ff4500",
                ScEd: "da70d6",
                pOegTMnPd: "eee8aa",
                pOegYF: "98fb98",
                pOeQe: "afeeee",
                pOeviTetYd: "db7093",
                papayawEp: "ffefd5",
                pHKpuff: "ffdab9",
                peru: "cd853f",
                pRk: "ffc0cb",
                plum: "dda0dd",
                powMrXe: "b0e0e6",
                purpN: "800080",
                YbeccapurpN: "663399",
                Yd: "ff0000",
                Psybrown: "bc8f8f",
                PyOXe: "4169e1",
                saddNbPwn: "8b4513",
                sOmon: "fa8072",
                sandybPwn: "f4a460",
                sHgYF: "2e8b57",
                sHshell: "fff5ee",
                siFna: "a0522d",
                silver: "c0c0c0",
                skyXe: "87ceeb",
                UXe: "6a5acd",
                UWay: "708090",
                UgYy: "708090",
                snow: "fffafa",
                sprRggYF: "ff7f",
                stAlXe: "4682b4",
                tan: "d2b48c",
                teO: "8080",
                tEstN: "d8bfd8",
                tomato: "ff6347",
                Qe: "40e0d0",
                viTet: "ee82ee",
                JHt: "f5deb3",
                wEte: "ffffff",
                wEtesmoke: "f5f5f5",
                Lw: "ffff00",
                LwgYF: "9acd32",
            };
        let jt;
        const zt = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
            Nt = (t) => (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055),
            Ht = (t) => (t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4));
        function Bt(t, e, n) {
            if (t) {
                let i = Lt(t);
                (i[e] = Math.max(0, Math.min(i[e] + i[e] * n, 0 === e ? 360 : 1))), (i = Rt(i)), (t.r = i[0]), (t.g = i[1]), (t.b = i[2]);
            }
        }
        function Wt(t, e) {
            return t ? Object.assign(e || {}, t) : t;
        }
        function Vt(t) {
            var e = { r: 0, g: 0, b: 0, a: 255 };
            return Array.isArray(t) ? t.length >= 3 && ((e = { r: t[0], g: t[1], b: t[2], a: 255 }), t.length > 3 && (e.a = vt(t[3]))) : ((e = Wt(t, { r: 0, g: 0, b: 0, a: 1 })).a = vt(e.a)), e;
        }
        function qt(t) {
            return "r" === t.charAt(0)
                ? (function (t) {
                      const e = zt.exec(t);
                      let n,
                          i,
                          o,
                          s = 255;
                      if (e) {
                          if (e[7] !== n) {
                              const t = +e[7];
                              s = e[8] ? yt(t) : xt(255 * t, 0, 255);
                          }
                          return (n = +e[1]), (i = +e[3]), (o = +e[5]), (n = 255 & (e[2] ? yt(n) : xt(n, 0, 255))), (i = 255 & (e[4] ? yt(i) : xt(i, 0, 255))), (o = 255 & (e[6] ? yt(o) : xt(o, 0, 255))), { r: n, g: i, b: o, a: s };
                      }
                  })(t)
                : (function (t) {
                      const e = Pt.exec(t);
                      let n,
                          i = 255;
                      if (!e) return;
                      e[5] !== n && (i = e[6] ? yt(+e[5]) : vt(+e[5]));
                      const o = $t(+e[2]),
                          s = +e[3] / 100,
                          r = +e[4] / 100;
                      return (
                          (n =
                              "hwb" === e[1]
                                  ? (function (t, e, n) {
                                        return Ot(Et, t, e, n);
                                    })(o, s, r)
                                  : "hsv" === e[1]
                                  ? (function (t, e, n) {
                                        return Ot(At, t, e, n);
                                    })(o, s, r)
                                  : Rt(o, s, r)),
                          { r: n[0], g: n[1], b: n[2], a: i }
                      );
                  })(t);
        }
        class Yt {
            constructor(t) {
                if (t instanceof Yt) return t;
                const e = typeof t;
                let n;
                var i, o, s;
                "object" === e
                    ? (n = Vt(t))
                    : "string" === e &&
                      ((s = (i = t).length),
                      "#" === i[0] &&
                          (4 === s || 5 === s
                              ? (o = { r: 255 & (17 * St[i[1]]), g: 255 & (17 * St[i[2]]), b: 255 & (17 * St[i[3]]), a: 5 === s ? 17 * St[i[4]] : 255 })
                              : (7 !== s && 9 !== s) || (o = { r: (St[i[1]] << 4) | St[i[2]], g: (St[i[3]] << 4) | St[i[4]], b: (St[i[5]] << 4) | St[i[6]], a: 9 === s ? (St[i[7]] << 4) | St[i[8]] : 255 })),
                      (n =
                          o ||
                          (function (t) {
                              jt ||
                                  ((jt = (function () {
                                      const t = {},
                                          e = Object.keys(Ft),
                                          n = Object.keys(It);
                                      let i, o, s, r, a;
                                      for (i = 0; i < e.length; i++) {
                                          for (r = a = e[i], o = 0; o < n.length; o++) (s = n[o]), (a = a.replace(s, It[s]));
                                          (s = parseInt(Ft[r], 16)), (t[a] = [(s >> 16) & 255, (s >> 8) & 255, 255 & s]);
                                      }
                                      return t;
                                  })()),
                                  (jt.transparent = [0, 0, 0, 0]));
                              const e = jt[t.toLowerCase()];
                              return e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 };
                          })(t) ||
                          qt(t))),
                    (this._rgb = n),
                    (this._valid = !!n);
            }
            get valid() {
                return this._valid;
            }
            get rgb() {
                var t = Wt(this._rgb);
                return t && (t.a = wt(t.a)), t;
            }
            set rgb(t) {
                this._rgb = Vt(t);
            }
            rgbString() {
                return this._valid ? (t = this._rgb) && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${wt(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`) : void 0;
                var t;
            }
            hexString() {
                return this._valid
                    ? (function (t) {
                          var e = ((t) => Mt(t.r) && Mt(t.g) && Mt(t.b) && Mt(t.a))(t) ? kt : Tt;
                          return t ? "#" + e(t.r) + e(t.g) + e(t.b) + ((t, e) => (t < 255 ? e(t) : ""))(t.a, e) : void 0;
                      })(this._rgb)
                    : void 0;
            }
            hslString() {
                return this._valid
                    ? (function (t) {
                          if (!t) return;
                          const e = Lt(t),
                              n = e[0],
                              i = _t(e[1]),
                              o = _t(e[2]);
                          return t.a < 255 ? `hsla(${n}, ${i}%, ${o}%, ${wt(t.a)})` : `hsl(${n}, ${i}%, ${o}%)`;
                      })(this._rgb)
                    : void 0;
            }
            mix(t, e) {
                if (t) {
                    const n = this.rgb,
                        i = t.rgb;
                    let o;
                    const s = e === o ? 0.5 : e,
                        r = 2 * s - 1,
                        a = n.a - i.a,
                        l = ((r * a == -1 ? r : (r + a) / (1 + r * a)) + 1) / 2;
                    (o = 1 - l), (n.r = 255 & (l * n.r + o * i.r + 0.5)), (n.g = 255 & (l * n.g + o * i.g + 0.5)), (n.b = 255 & (l * n.b + o * i.b + 0.5)), (n.a = s * n.a + (1 - s) * i.a), (this.rgb = n);
                }
                return this;
            }
            interpolate(t, e) {
                return (
                    t &&
                        (this._rgb = (function (t, e, n) {
                            const i = Ht(wt(t.r)),
                                o = Ht(wt(t.g)),
                                s = Ht(wt(t.b));
                            return { r: vt(Nt(i + n * (Ht(wt(e.r)) - i))), g: vt(Nt(o + n * (Ht(wt(e.g)) - o))), b: vt(Nt(s + n * (Ht(wt(e.b)) - s))), a: t.a + n * (e.a - t.a) };
                        })(this._rgb, t._rgb, e)),
                    this
                );
            }
            clone() {
                return new Yt(this.rgb);
            }
            alpha(t) {
                return (this._rgb.a = vt(t)), this;
            }
            clearer(t) {
                return (this._rgb.a *= 1 - t), this;
            }
            greyscale() {
                const t = this._rgb,
                    e = bt(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
                return (t.r = t.g = t.b = e), this;
            }
            opaquer(t) {
                return (this._rgb.a *= 1 + t), this;
            }
            negate() {
                const t = this._rgb;
                return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
            }
            lighten(t) {
                return Bt(this._rgb, 2, t), this;
            }
            darken(t) {
                return Bt(this._rgb, 2, -t), this;
            }
            saturate(t) {
                return Bt(this._rgb, 1, t), this;
            }
            desaturate(t) {
                return Bt(this._rgb, 1, -t), this;
            }
            rotate(t) {
                return (
                    (function (t, e) {
                        var n = Lt(t);
                        (n[0] = $t(n[0] + e)), (n = Rt(n)), (t.r = n[0]), (t.g = n[1]), (t.b = n[2]);
                    })(this._rgb, t),
                    this
                );
            }
        }
        function Xt(t) {
            return new Yt(t);
        }
        function Ut(t) {
            if (t && "object" == typeof t) {
                const e = t.toString();
                return "[object CanvasPattern]" === e || "[object CanvasGradient]" === e;
            }
            return !1;
        }
        function Kt(t) {
            return Ut(t) ? t : Xt(t);
        }
        function Gt(t) {
            return Ut(t) ? t : Xt(t).saturate(0.5).darken(0.1).hexString();
        }
        const Zt = Object.create(null),
            Qt = Object.create(null);
        function Jt(t, e) {
            if (!e) return t;
            const n = e.split(".");
            for (let e = 0, i = n.length; e < i; ++e) {
                const i = n[e];
                t = t[i] || (t[i] = Object.create(null));
            }
            return t;
        }
        function te(t, e, n) {
            return "string" == typeof e ? m(Jt(t, e), n) : m(Jt(t, ""), e);
        }
        var ee = new (class {
            constructor(t) {
                (this.animation = void 0),
                    (this.backgroundColor = "rgba(0,0,0,0.1)"),
                    (this.borderColor = "rgba(0,0,0,0.1)"),
                    (this.color = "#666"),
                    (this.datasets = {}),
                    (this.devicePixelRatio = (t) => t.chart.platform.getDevicePixelRatio()),
                    (this.elements = {}),
                    (this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"]),
                    (this.font = { family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", size: 12, style: "normal", lineHeight: 1.2, weight: null }),
                    (this.hover = {}),
                    (this.hoverBackgroundColor = (t, e) => Gt(e.backgroundColor)),
                    (this.hoverBorderColor = (t, e) => Gt(e.borderColor)),
                    (this.hoverColor = (t, e) => Gt(e.color)),
                    (this.indexAxis = "x"),
                    (this.interaction = { mode: "nearest", intersect: !0, includeInvisible: !1 }),
                    (this.maintainAspectRatio = !0),
                    (this.onHover = null),
                    (this.onClick = null),
                    (this.parsing = !0),
                    (this.plugins = {}),
                    (this.responsive = !0),
                    (this.scale = void 0),
                    (this.scales = {}),
                    (this.showLine = !0),
                    (this.drawActiveElementsOnTop = !0),
                    this.describe(t);
            }
            set(t, e) {
                return te(this, t, e);
            }
            get(t) {
                return Jt(this, t);
            }
            describe(t, e) {
                return te(Qt, t, e);
            }
            override(t, e) {
                return te(Zt, t, e);
            }
            route(t, e, n, i) {
                const s = Jt(this, t),
                    r = Jt(this, n),
                    l = "_" + e;
                Object.defineProperties(s, {
                    [l]: { value: s[e], writable: !0 },
                    [e]: {
                        enumerable: !0,
                        get() {
                            const t = this[l],
                                e = r[i];
                            return o(t) ? Object.assign({}, e, t) : a(t, e);
                        },
                        set(t) {
                            this[l] = t;
                        },
                    },
                });
            }
        })({ _scriptable: (t) => !t.startsWith("on"), _indexable: (t) => "events" !== t, hover: { _fallback: "interaction" }, interaction: { _scriptable: !1, _indexable: !1 } });
        function ne() {
            return "undefined" != typeof window && "undefined" != typeof document;
        }
        function ie(t) {
            let e = t.parentNode;
            return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
        }
        function oe(t, e, n) {
            let i;
            return "string" == typeof t ? ((i = parseInt(t, 10)), -1 !== t.indexOf("%") && (i = (i / 100) * e.parentNode[n])) : (i = t), i;
        }
        const se = (t) => window.getComputedStyle(t, null);
        function re(t, e) {
            return se(t).getPropertyValue(e);
        }
        const ae = ["top", "right", "bottom", "left"];
        function le(t, e, n) {
            const i = {};
            n = n ? "-" + n : "";
            for (let o = 0; o < 4; o++) {
                const s = ae[o];
                i[s] = parseFloat(t[e + "-" + s + n]) || 0;
            }
            return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
        }
        function ce(t, e) {
            if ("native" in t) return t;
            const { canvas: n, currentDevicePixelRatio: i } = e,
                o = se(n),
                s = "border-box" === o.boxSizing,
                r = le(o, "padding"),
                a = le(o, "border", "width"),
                { x: l, y: c, box: h } = (function (t, e) {
                    const n = t.touches,
                        i = n && n.length ? n[0] : t,
                        { offsetX: o, offsetY: s } = i;
                    let r,
                        a,
                        l = !1;
                    if (((t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot))(o, s, t.target)) (r = o), (a = s);
                    else {
                        const t = e.getBoundingClientRect();
                        (r = i.clientX - t.left), (a = i.clientY - t.top), (l = !0);
                    }
                    return { x: r, y: a, box: l };
                })(t, n),
                u = r.left + (h && a.left),
                d = r.top + (h && a.top);
            let { width: f, height: p } = e;
            return s && ((f -= r.width + a.width), (p -= r.height + a.height)), { x: Math.round((((l - u) / f) * n.width) / i), y: Math.round((((c - d) / p) * n.height) / i) };
        }
        const he = (t) => Math.round(10 * t) / 10;
        function ue(t, e, n, i) {
            const o = se(t),
                s = le(o, "margin"),
                r = oe(o.maxWidth, t, "clientWidth") || A,
                a = oe(o.maxHeight, t, "clientHeight") || A,
                l = (function (t, e, n) {
                    let i, o;
                    if (void 0 === e || void 0 === n) {
                        const s = ie(t);
                        if (s) {
                            const t = s.getBoundingClientRect(),
                                r = se(s),
                                a = le(r, "border", "width"),
                                l = le(r, "padding");
                            (e = t.width - l.width - a.width), (n = t.height - l.height - a.height), (i = oe(r.maxWidth, s, "clientWidth")), (o = oe(r.maxHeight, s, "clientHeight"));
                        } else (e = t.clientWidth), (n = t.clientHeight);
                    }
                    return { width: e, height: n, maxWidth: i || A, maxHeight: o || A };
                })(t, e, n);
            let { width: c, height: h } = l;
            if ("content-box" === o.boxSizing) {
                const t = le(o, "border", "width"),
                    e = le(o, "padding");
                (c -= e.width + t.width), (h -= e.height + t.height);
            }
            return (c = Math.max(0, c - s.width)), (h = Math.max(0, i ? Math.floor(c / i) : h - s.height)), (c = he(Math.min(c, r, l.maxWidth))), (h = he(Math.min(h, a, l.maxHeight))), c && !h && (h = he(c / 2)), { width: c, height: h };
        }
        function de(t, e, n) {
            const i = e || 1,
                o = Math.floor(t.height * i),
                s = Math.floor(t.width * i);
            (t.height = o / i), (t.width = s / i);
            const r = t.canvas;
            return (
                r.style && (n || (!r.style.height && !r.style.width)) && ((r.style.height = `${t.height}px`), (r.style.width = `${t.width}px`)),
                (t.currentDevicePixelRatio !== i || r.height !== o || r.width !== s) && ((t.currentDevicePixelRatio = i), (r.height = o), (r.width = s), t.ctx.setTransform(i, 0, 0, i, 0, 0), !0)
            );
        }
        const fe = (function () {
            let t = !1;
            try {
                const e = {
                    get passive() {
                        return (t = !0), !1;
                    },
                };
                window.addEventListener("test", null, e), window.removeEventListener("test", null, e);
            } catch (t) {}
            return t;
        })();
        function pe(t, e) {
            const n = re(t, e),
                i = n && n.match(/^(\d+)(\.\d+)?px$/);
            return i ? +i[1] : void 0;
        }
        function ge(t) {
            return !t || n(t.size) || n(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family;
        }
        function me(t, e, n, i, o) {
            let s = e[o];
            return s || ((s = e[o] = t.measureText(o).width), n.push(o)), s > i && (i = s), i;
        }
        function be(t, e, n, o) {
            let s = ((o = o || {}).data = o.data || {}),
                r = (o.garbageCollect = o.garbageCollect || []);
            o.font !== e && ((s = o.data = {}), (r = o.garbageCollect = []), (o.font = e)), t.save(), (t.font = e);
            let a = 0;
            const l = n.length;
            let c, h, u, d, f;
            for (c = 0; c < l; c++)
                if (((d = n[c]), null != d && !0 !== i(d))) a = me(t, s, r, a, d);
                else if (i(d)) for (h = 0, u = d.length; h < u; h++) (f = d[h]), null == f || i(f) || (a = me(t, s, r, a, f));
            t.restore();
            const p = r.length / 2;
            if (p > n.length) {
                for (c = 0; c < p; c++) delete s[r[c]];
                r.splice(0, p);
            }
            return a;
        }
        function xe(t, e, n) {
            const i = t.currentDevicePixelRatio,
                o = 0 !== n ? Math.max(n / 2, 0.5) : 0;
            return Math.round((e - o) * i) / i + o;
        }
        function ye(t, e) {
            (e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore();
        }
        function ve(t, e, n, i) {
            we(t, e, n, i, null);
        }
        function we(t, e, n, i, o) {
            let s, r, a, l, c, h;
            const u = e.pointStyle,
                d = e.rotation,
                f = e.radius;
            let p = (d || 0) * E;
            if (u && "object" == typeof u && ((s = u.toString()), "[object HTMLImageElement]" === s || "[object HTMLCanvasElement]" === s))
                return t.save(), t.translate(n, i), t.rotate(p), t.drawImage(u, -u.width / 2, -u.height / 2, u.width, u.height), void t.restore();
            if (!(isNaN(f) || f <= 0)) {
                switch ((t.beginPath(), u)) {
                    default:
                        o ? t.ellipse(n, i, o / 2, f, 0, 0, P) : t.arc(n, i, f, 0, P), t.closePath();
                        break;
                    case "triangle":
                        t.moveTo(n + Math.sin(p) * f, i - Math.cos(p) * f), (p += R), t.lineTo(n + Math.sin(p) * f, i - Math.cos(p) * f), (p += R), t.lineTo(n + Math.sin(p) * f, i - Math.cos(p) * f), t.closePath();
                        break;
                    case "rectRounded":
                        (c = 0.516 * f),
                            (l = f - c),
                            (r = Math.cos(p + O) * l),
                            (a = Math.sin(p + O) * l),
                            t.arc(n - r, i - a, c, p - M, p - L),
                            t.arc(n + a, i - r, c, p - L, p),
                            t.arc(n + r, i + a, c, p, p + L),
                            t.arc(n - a, i + r, c, p + L, p + M),
                            t.closePath();
                        break;
                    case "rect":
                        if (!d) {
                            (l = Math.SQRT1_2 * f), (h = o ? o / 2 : l), t.rect(n - h, i - l, 2 * h, 2 * l);
                            break;
                        }
                        p += O;
                    case "rectRot":
                        (r = Math.cos(p) * f), (a = Math.sin(p) * f), t.moveTo(n - r, i - a), t.lineTo(n + a, i - r), t.lineTo(n + r, i + a), t.lineTo(n - a, i + r), t.closePath();
                        break;
                    case "crossRot":
                        p += O;
                    case "cross":
                        (r = Math.cos(p) * f), (a = Math.sin(p) * f), t.moveTo(n - r, i - a), t.lineTo(n + r, i + a), t.moveTo(n + a, i - r), t.lineTo(n - a, i + r);
                        break;
                    case "star":
                        (r = Math.cos(p) * f),
                            (a = Math.sin(p) * f),
                            t.moveTo(n - r, i - a),
                            t.lineTo(n + r, i + a),
                            t.moveTo(n + a, i - r),
                            t.lineTo(n - a, i + r),
                            (p += O),
                            (r = Math.cos(p) * f),
                            (a = Math.sin(p) * f),
                            t.moveTo(n - r, i - a),
                            t.lineTo(n + r, i + a),
                            t.moveTo(n + a, i - r),
                            t.lineTo(n - a, i + r);
                        break;
                    case "line":
                        (r = o ? o / 2 : Math.cos(p) * f), (a = Math.sin(p) * f), t.moveTo(n - r, i - a), t.lineTo(n + r, i + a);
                        break;
                    case "dash":
                        t.moveTo(n, i), t.lineTo(n + Math.cos(p) * f, i + Math.sin(p) * f);
                }
                t.fill(), e.borderWidth > 0 && t.stroke();
            }
        }
        function _e(t, e, n) {
            return (n = n || 0.5), !e || (t && t.x > e.left - n && t.x < e.right + n && t.y > e.top - n && t.y < e.bottom + n);
        }
        function Se(t, e) {
            t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
        }
        function Ce(t) {
            t.restore();
        }
        function ke(t, e, n, i, o) {
            if (!e) return t.lineTo(n.x, n.y);
            if ("middle" === o) {
                const i = (e.x + n.x) / 2;
                t.lineTo(i, e.y), t.lineTo(i, n.y);
            } else ("after" === o) != !!i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
            t.lineTo(n.x, n.y);
        }
        function Te(t, e, n, i) {
            if (!e) return t.lineTo(n.x, n.y);
            t.bezierCurveTo(i ? e.cp1x : e.cp2x, i ? e.cp1y : e.cp2y, i ? n.cp2x : n.cp1x, i ? n.cp2y : n.cp1y, n.x, n.y);
        }
        function Me(t, e, o, s, r, a = {}) {
            const l = i(e) ? e : [e],
                c = a.strokeWidth > 0 && "" !== a.strokeColor;
            let h, u;
            for (
                t.save(),
                    t.font = r.string,
                    (function (t, e) {
                        e.translation && t.translate(e.translation[0], e.translation[1]),
                            n(e.rotation) || t.rotate(e.rotation),
                            e.color && (t.fillStyle = e.color),
                            e.textAlign && (t.textAlign = e.textAlign),
                            e.textBaseline && (t.textBaseline = e.textBaseline);
                    })(t, a),
                    h = 0;
                h < l.length;
                ++h
            )
                (u = l[h]),
                    c && (a.strokeColor && (t.strokeStyle = a.strokeColor), n(a.strokeWidth) || (t.lineWidth = a.strokeWidth), t.strokeText(u, o, s, a.maxWidth)),
                    t.fillText(u, o, s, a.maxWidth),
                    Pe(t, o, s, u, a),
                    (s += r.lineHeight);
            t.restore();
        }
        function Pe(t, e, n, i, o) {
            if (o.strikethrough || o.underline) {
                const s = t.measureText(i),
                    r = e - s.actualBoundingBoxLeft,
                    a = e + s.actualBoundingBoxRight,
                    l = n - s.actualBoundingBoxAscent,
                    c = n + s.actualBoundingBoxDescent,
                    h = o.strikethrough ? (l + c) / 2 : c;
                (t.strokeStyle = t.fillStyle), t.beginPath(), (t.lineWidth = o.decorationWidth || 2), t.moveTo(r, h), t.lineTo(a, h), t.stroke();
            }
        }
        function De(t, e) {
            const { x: n, y: i, w: o, h: s, radius: r } = e;
            t.arc(n + r.topLeft, i + r.topLeft, r.topLeft, -L, M, !0),
                t.lineTo(n, i + s - r.bottomLeft),
                t.arc(n + r.bottomLeft, i + s - r.bottomLeft, r.bottomLeft, M, L, !0),
                t.lineTo(n + o - r.bottomRight, i + s),
                t.arc(n + o - r.bottomRight, i + s - r.bottomRight, r.bottomRight, L, 0, !0),
                t.lineTo(n + o, i + r.topRight),
                t.arc(n + o - r.topRight, i + r.topRight, r.topRight, 0, -L, !0),
                t.lineTo(n + r.topLeft, i);
        }
        function Ae(t, e = [""], n = t, i, o = () => t[0]) {
            S(i) || (i = He("_fallback", t));
            const s = { [Symbol.toStringTag]: "Object", _cacheable: !0, _scopes: t, _rootScopes: n, _fallback: i, _getTarget: o, override: (o) => Ae([o, ...t], e, n, i) };
            return new Proxy(s, {
                deleteProperty: (e, n) => (delete e[n], delete e._keys, delete t[0][n], !0),
                get: (n, i) =>
                    $e(n, i, () =>
                        (function (t, e, n, i) {
                            let o;
                            for (const s of e) if (((o = He(Oe(s, t), n)), S(o))) return Re(t, o) ? ze(n, i, t, o) : o;
                        })(i, e, t, n)
                    ),
                getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
                getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
                has: (t, e) => Be(t).includes(e),
                ownKeys: (t) => Be(t),
                set(t, e, n) {
                    const i = t._storage || (t._storage = o());
                    return (t[e] = i[e] = n), delete t._keys, !0;
                },
            });
        }
        function Ee(t, e, n, s) {
            const r = { _cacheable: !1, _proxy: t, _context: e, _subProxy: n, _stack: new Set(), _descriptors: Le(t, s), setContext: (e) => Ee(t, e, n, s), override: (i) => Ee(t.override(i), e, n, s) };
            return new Proxy(r, {
                deleteProperty: (e, n) => (delete e[n], delete t[n], !0),
                get: (t, e, n) =>
                    $e(t, e, () =>
                        (function (t, e, n) {
                            const { _proxy: s, _context: r, _subProxy: a, _descriptors: l } = t;
                            let c = s[e];
                            return (
                                C(c) &&
                                    l.isScriptable(e) &&
                                    (c = (function (t, e, n, i) {
                                        const { _proxy: o, _context: s, _subProxy: r, _stack: a } = n;
                                        if (a.has(t)) throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + t);
                                        return a.add(t), (e = e(s, r || i)), a.delete(t), Re(t, e) && (e = ze(o._scopes, o, t, e)), e;
                                    })(e, c, t, n)),
                                i(c) &&
                                    c.length &&
                                    (c = (function (t, e, n, i) {
                                        const { _proxy: s, _context: r, _subProxy: a, _descriptors: l } = n;
                                        if (S(r.index) && i(t)) e = e[r.index % e.length];
                                        else if (o(e[0])) {
                                            const n = e,
                                                i = s._scopes.filter((t) => t !== n);
                                            e = [];
                                            for (const o of n) {
                                                const n = ze(i, s, t, o);
                                                e.push(Ee(n, r, a && a[t], l));
                                            }
                                        }
                                        return e;
                                    })(e, c, t, l.isIndexable)),
                                Re(e, c) && (c = Ee(c, r, a && a[e], l)),
                                c
                            );
                        })(t, e, n)
                    ),
                getOwnPropertyDescriptor: (e, n) => (e._descriptors.allKeys ? (Reflect.has(t, n) ? { enumerable: !0, configurable: !0 } : void 0) : Reflect.getOwnPropertyDescriptor(t, n)),
                getPrototypeOf: () => Reflect.getPrototypeOf(t),
                has: (e, n) => Reflect.has(t, n),
                ownKeys: () => Reflect.ownKeys(t),
                set: (e, n, i) => ((t[n] = i), delete e[n], !0),
            });
        }
        function Le(t, e = { scriptable: !0, indexable: !0 }) {
            const { _scriptable: n = e.scriptable, _indexable: i = e.indexable, _allKeys: o = e.allKeys } = t;
            return { allKeys: o, scriptable: n, indexable: i, isScriptable: C(n) ? n : () => n, isIndexable: C(i) ? i : () => i };
        }
        const Oe = (t, e) => (t ? t + _(e) : e),
            Re = (t, e) => o(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object);
        function $e(t, e, n) {
            if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            const i = n();
            return (t[e] = i), i;
        }
        function Ie(t, e, n) {
            return C(t) ? t(e, n) : t;
        }
        const Fe = (t, e) => (!0 === t ? e : "string" == typeof t ? v(e, t) : void 0);
        function je(t, e, n, i, o) {
            for (const s of e) {
                const e = Fe(n, s);
                if (e) {
                    t.add(e);
                    const s = Ie(e._fallback, n, o);
                    if (S(s) && s !== n && s !== i) return s;
                } else if (!1 === e && S(i) && n !== i) return null;
            }
            return !1;
        }
        function ze(t, e, n, s) {
            const r = e._rootScopes,
                a = Ie(e._fallback, n, s),
                l = [...t, ...r],
                c = new Set();
            c.add(s);
            let h = Ne(c, l, n, a || n, s);
            return (
                null !== h &&
                (!S(a) || a === n || ((h = Ne(c, l, a, h, s)), null !== h)) &&
                Ae(Array.from(c), [""], r, a, () =>
                    (function (t, e, n) {
                        const s = t._getTarget();
                        e in s || (s[e] = {});
                        const r = s[e];
                        return i(r) && o(n) ? n : r;
                    })(e, n, s)
                )
            );
        }
        function Ne(t, e, n, i, o) {
            for (; n; ) n = je(t, e, n, i, o);
            return n;
        }
        function He(t, e) {
            for (const n of e) {
                if (!n) continue;
                const e = n[t];
                if (S(e)) return e;
            }
        }
        function Be(t) {
            let e = t._keys;
            return (
                e ||
                    (e = t._keys = (function (t) {
                        const e = new Set();
                        for (const n of t) for (const t of Object.keys(n).filter((t) => !t.startsWith("_"))) e.add(t);
                        return Array.from(e);
                    })(t._scopes)),
                e
            );
        }
        function We(t, e, n, i) {
            const { iScale: o } = t,
                { key: s = "r" } = this._parsing,
                r = new Array(i);
            let a, l, c, h;
            for (a = 0, l = i; a < l; ++a) (c = a + n), (h = e[c]), (r[a] = { r: o.parse(v(h, s), c) });
            return r;
        }
        const Ve = Number.EPSILON || 1e-14,
            qe = (t, e) => e < t.length && !t[e].skip && t[e],
            Ye = (t) => ("x" === t ? "y" : "x");
        function Xe(t, e, n, i) {
            const o = t.skip ? e : t,
                s = e,
                r = n.skip ? e : n,
                a = X(s, o),
                l = X(r, s);
            let c = a / (a + l),
                h = l / (a + l);
            (c = isNaN(c) ? 0 : c), (h = isNaN(h) ? 0 : h);
            const u = i * c,
                d = i * h;
            return { previous: { x: s.x - u * (r.x - o.x), y: s.y - u * (r.y - o.y) }, next: { x: s.x + d * (r.x - o.x), y: s.y + d * (r.y - o.y) } };
        }
        function Ue(t, e = "x") {
            const n = Ye(e),
                i = t.length,
                o = Array(i).fill(0),
                s = Array(i);
            let r,
                a,
                l,
                c = qe(t, 0);
            for (r = 0; r < i; ++r)
                if (((a = l), (l = c), (c = qe(t, r + 1)), l)) {
                    if (c) {
                        const t = c[e] - l[e];
                        o[r] = 0 !== t ? (c[n] - l[n]) / t : 0;
                    }
                    s[r] = a ? (c ? (I(o[r - 1]) !== I(o[r]) ? 0 : (o[r - 1] + o[r]) / 2) : o[r - 1]) : o[r];
                }
            !(function (t, e, n) {
                const i = t.length;
                let o,
                    s,
                    r,
                    a,
                    l,
                    c = qe(t, 0);
                for (let h = 0; h < i - 1; ++h)
                    (l = c),
                        (c = qe(t, h + 1)),
                        l &&
                            c &&
                            (N(e[h], 0, Ve) ? (n[h] = n[h + 1] = 0) : ((o = n[h] / e[h]), (s = n[h + 1] / e[h]), (a = Math.pow(o, 2) + Math.pow(s, 2)), a <= 9 || ((r = 3 / Math.sqrt(a)), (n[h] = o * r * e[h]), (n[h + 1] = s * r * e[h]))));
            })(t, o, s),
                (function (t, e, n = "x") {
                    const i = Ye(n),
                        o = t.length;
                    let s,
                        r,
                        a,
                        l = qe(t, 0);
                    for (let c = 0; c < o; ++c) {
                        if (((r = a), (a = l), (l = qe(t, c + 1)), !a)) continue;
                        const o = a[n],
                            h = a[i];
                        r && ((s = (o - r[n]) / 3), (a[`cp1${n}`] = o - s), (a[`cp1${i}`] = h - s * e[c])), l && ((s = (l[n] - o) / 3), (a[`cp2${n}`] = o + s), (a[`cp2${i}`] = h + s * e[c]));
                    }
                })(t, s, e);
        }
        function Ke(t, e, n) {
            return Math.max(Math.min(t, n), e);
        }
        function Ge(t, e, n, i, o) {
            let s, r, a, l;
            if ((e.spanGaps && (t = t.filter((t) => !t.skip)), "monotone" === e.cubicInterpolationMode)) Ue(t, o);
            else {
                let n = i ? t[t.length - 1] : t[0];
                for (s = 0, r = t.length; s < r; ++s) (a = t[s]), (l = Xe(n, a, t[Math.min(s + 1, r - (i ? 0 : 1)) % r], e.tension)), (a.cp1x = l.previous.x), (a.cp1y = l.previous.y), (a.cp2x = l.next.x), (a.cp2y = l.next.y), (n = a);
            }
            e.capBezierPoints &&
                (function (t, e) {
                    let n,
                        i,
                        o,
                        s,
                        r,
                        a = _e(t[0], e);
                    for (n = 0, i = t.length; n < i; ++n)
                        (r = s),
                            (s = a),
                            (a = n < i - 1 && _e(t[n + 1], e)),
                            s && ((o = t[n]), r && ((o.cp1x = Ke(o.cp1x, e.left, e.right)), (o.cp1y = Ke(o.cp1y, e.top, e.bottom))), a && ((o.cp2x = Ke(o.cp2x, e.left, e.right)), (o.cp2y = Ke(o.cp2y, e.top, e.bottom))));
                })(t, n);
        }
        const Ze = (t) => 0 === t || 1 === t,
            Qe = (t, e, n) => -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * P) / n),
            Je = (t, e, n) => Math.pow(2, -10 * t) * Math.sin(((t - e) * P) / n) + 1,
            tn = {
                linear: (t) => t,
                easeInQuad: (t) => t * t,
                easeOutQuad: (t) => -t * (t - 2),
                easeInOutQuad: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1)),
                easeInCubic: (t) => t * t * t,
                easeOutCubic: (t) => (t -= 1) * t * t + 1,
                easeInOutCubic: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2)),
                easeInQuart: (t) => t * t * t * t,
                easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
                easeInOutQuart: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)),
                easeInQuint: (t) => t * t * t * t * t,
                easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
                easeInOutQuint: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2)),
                easeInSine: (t) => 1 - Math.cos(t * L),
                easeOutSine: (t) => Math.sin(t * L),
                easeInOutSine: (t) => -0.5 * (Math.cos(M * t) - 1),
                easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
                easeOutExpo: (t) => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
                easeInOutExpo: (t) => (Ze(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (2 * t - 1)) : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1)))),
                easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
                easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
                easeInOutCirc: (t) => ((t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1)),
                easeInElastic: (t) => (Ze(t) ? t : Qe(t, 0.075, 0.3)),
                easeOutElastic: (t) => (Ze(t) ? t : Je(t, 0.075, 0.3)),
                easeInOutElastic(t) {
                    const e = 0.1125;
                    return Ze(t) ? t : t < 0.5 ? 0.5 * Qe(2 * t, e, 0.45) : 0.5 + 0.5 * Je(2 * t - 1, e, 0.45);
                },
                easeInBack(t) {
                    const e = 1.70158;
                    return t * t * ((e + 1) * t - e);
                },
                easeOutBack(t) {
                    const e = 1.70158;
                    return (t -= 1) * t * ((e + 1) * t + e) + 1;
                },
                easeInOutBack(t) {
                    let e = 1.70158;
                    return (t /= 0.5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5 : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
                },
                easeInBounce: (t) => 1 - tn.easeOutBounce(1 - t),
                easeOutBounce(t) {
                    const e = 7.5625,
                        n = 2.75;
                    return t < 1 / n ? e * t * t : t < 2 / n ? e * (t -= 1.5 / n) * t + 0.75 : t < 2.5 / n ? e * (t -= 2.25 / n) * t + 0.9375 : e * (t -= 2.625 / n) * t + 0.984375;
                },
                easeInOutBounce: (t) => (t < 0.5 ? 0.5 * tn.easeInBounce(2 * t) : 0.5 * tn.easeOutBounce(2 * t - 1) + 0.5),
            };
        function en(t, e, n, i) {
            return { x: t.x + n * (e.x - t.x), y: t.y + n * (e.y - t.y) };
        }
        function nn(t, e, n, i) {
            return { x: t.x + n * (e.x - t.x), y: "middle" === i ? (n < 0.5 ? t.y : e.y) : "after" === i ? (n < 1 ? t.y : e.y) : n > 0 ? e.y : t.y };
        }
        function on(t, e, n, i) {
            const o = { x: t.cp2x, y: t.cp2y },
                s = { x: e.cp1x, y: e.cp1y },
                r = en(t, o, n),
                a = en(o, s, n),
                l = en(s, e, n),
                c = en(r, a, n),
                h = en(a, l, n);
            return en(c, h, n);
        }
        const sn = new Map();
        function rn(t, e, n) {
            return (function (t, e) {
                e = e || {};
                const n = t + JSON.stringify(e);
                let i = sn.get(n);
                return i || ((i = new Intl.NumberFormat(t, e)), sn.set(n, i)), i;
            })(e, n).format(t);
        }
        const an = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
            ln = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);
        function cn(t, e) {
            const n = ("" + t).match(an);
            if (!n || "normal" === n[1]) return 1.2 * e;
            switch (((t = +n[2]), n[3])) {
                case "px":
                    return t;
                case "%":
                    t /= 100;
            }
            return e * t;
        }
        function hn(t, e) {
            const n = {},
                i = o(e),
                s = i ? Object.keys(e) : e,
                r = o(t) ? (i ? (n) => a(t[n], t[e[n]]) : (e) => t[e]) : () => t;
            for (const t of s) n[t] = +r(t) || 0;
            return n;
        }
        function un(t) {
            return hn(t, { top: "y", right: "x", bottom: "y", left: "x" });
        }
        function dn(t) {
            return hn(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
        }
        function fn(t) {
            const e = un(t);
            return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
        }
        function pn(t, e) {
            (t = t || {}), (e = e || ee.font);
            let n = a(t.size, e.size);
            "string" == typeof n && (n = parseInt(n, 10));
            let i = a(t.style, e.style);
            i && !("" + i).match(ln) && (console.warn('Invalid font style specified: "' + i + '"'), (i = ""));
            const o = { family: a(t.family, e.family), lineHeight: cn(a(t.lineHeight, e.lineHeight), n), size: n, style: i, weight: a(t.weight, e.weight), string: "" };
            return (o.string = ge(o)), o;
        }
        function gn(t, e, n, o) {
            let s,
                r,
                a,
                l = !0;
            for (s = 0, r = t.length; s < r; ++s)
                if (((a = t[s]), void 0 !== a && (void 0 !== e && "function" == typeof a && ((a = a(e)), (l = !1)), void 0 !== n && i(a) && ((a = a[n % a.length]), (l = !1)), void 0 !== a))) return o && !l && (o.cacheable = !1), a;
        }
        function mn(t, e, n) {
            const { min: i, max: o } = t,
                s = c(e, (o - i) / 2),
                r = (t, e) => (n && 0 === t ? 0 : t + e);
            return { min: r(i, -Math.abs(s)), max: r(o, s) };
        }
        function bn(t, e) {
            return Object.assign(Object.create(t), e);
        }
        function xn(t, e, n) {
            return t
                ? (function (t, e) {
                      return {
                          x: (n) => t + t + e - n,
                          setWidth(t) {
                              e = t;
                          },
                          textAlign: (t) => ("center" === t ? t : "right" === t ? "left" : "right"),
                          xPlus: (t, e) => t - e,
                          leftForLtr: (t, e) => t - e,
                      };
                  })(e, n)
                : { x: (t) => t, setWidth(t) {}, textAlign: (t) => t, xPlus: (t, e) => t + e, leftForLtr: (t, e) => t };
        }
        function yn(t, e) {
            let n, i;
            ("ltr" !== e && "rtl" !== e) || ((n = t.canvas.style), (i = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")]), n.setProperty("direction", e, "important"), (t.prevTextDirection = i));
        }
        function vn(t, e) {
            void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]));
        }
        function wn(t) {
            return "angle" === t ? { between: G, compare: U, normalize: K } : { between: J, compare: (t, e) => t - e, normalize: (t) => t };
        }
        function _n({ start: t, end: e, count: n, loop: i, style: o }) {
            return { start: t % n, end: e % n, loop: i && (e - t + 1) % n == 0, style: o };
        }
        function Sn(t, e, n) {
            if (!n) return [t];
            const { property: i, start: o, end: s } = n,
                r = e.length,
                { compare: a, between: l, normalize: c } = wn(i),
                { start: h, end: u, loop: d, style: f } = (function (t, e, n) {
                    const { property: i, start: o, end: s } = n,
                        { between: r, normalize: a } = wn(i),
                        l = e.length;
                    let c,
                        h,
                        { start: u, end: d, loop: f } = t;
                    if (f) {
                        for (u += l, d += l, c = 0, h = l; c < h && r(a(e[u % l][i]), o, s); ++c) u--, d--;
                        (u %= l), (d %= l);
                    }
                    return d < u && (d += l), { start: u, end: d, loop: f, style: t.style };
                })(t, e, n),
                p = [];
            let g,
                m,
                b,
                x = !1,
                y = null;
            for (let t = h, n = h; t <= u; ++t)
                (m = e[t % r]),
                    m.skip ||
                        ((g = c(m[i])),
                        g !== b &&
                            ((x = l(g, o, s)),
                            null === y && (x || (l(o, b, g) && 0 !== a(o, b))) && (y = 0 === a(g, o) ? t : n),
                            null !== y && (!x || 0 === a(s, g) || l(s, b, g)) && (p.push(_n({ start: y, end: t, loop: d, count: r, style: f })), (y = null)),
                            (n = t),
                            (b = g)));
            return null !== y && p.push(_n({ start: y, end: u, loop: d, count: r, style: f })), p;
        }
        function Cn(t, e) {
            const n = [],
                i = t.segments;
            for (let o = 0; o < i.length; o++) {
                const s = Sn(i[o], t.points, e);
                s.length && n.push(...s);
            }
            return n;
        }
        function kn(t, e) {
            const n = t.points,
                i = t.options.spanGaps,
                o = n.length;
            if (!o) return [];
            const s = !!t._loop,
                { start: r, end: a } = (function (t, e, n, i) {
                    let o = 0,
                        s = e - 1;
                    if (n && !i) for (; o < e && !t[o].skip; ) o++;
                    for (; o < e && t[o].skip; ) o++;
                    for (o %= e, n && (s += o); s > o && t[s % e].skip; ) s--;
                    return (s %= e), { start: o, end: s };
                })(n, o, s, i);
            return Tn(
                t,
                !0 === i
                    ? [{ start: r, end: a, loop: s }]
                    : (function (t, e, n, i) {
                          const o = t.length,
                              s = [];
                          let r,
                              a = e,
                              l = t[e];
                          for (r = e + 1; r <= n; ++r) {
                              const n = t[r % o];
                              n.skip || n.stop ? l.skip || ((i = !1), s.push({ start: e % o, end: (r - 1) % o, loop: i }), (e = a = n.stop ? r : null)) : ((a = r), l.skip && (e = r)), (l = n);
                          }
                          return null !== a && s.push({ start: e % o, end: a % o, loop: i }), s;
                      })(n, r, a < r ? a + o : a, !!t._fullLoop && 0 === r && a === o - 1),
                n,
                e
            );
        }
        function Tn(t, e, n, i) {
            return i && i.setContext && n
                ? (function (t, e, n, i) {
                      const o = t._chart.getContext(),
                          s = Mn(t.options),
                          {
                              _datasetIndex: r,
                              options: { spanGaps: a },
                          } = t,
                          l = n.length,
                          c = [];
                      let h = s,
                          u = e[0].start,
                          d = u;
                      function f(t, e, i, o) {
                          const s = a ? -1 : 1;
                          if (t !== e) {
                              for (t += l; n[t % l].skip; ) t -= s;
                              for (; n[e % l].skip; ) e += s;
                              t % l != e % l && (c.push({ start: t % l, end: e % l, loop: i, style: o }), (h = o), (u = e % l));
                          }
                      }
                      for (const t of e) {
                          u = a ? u : t.start;
                          let e,
                              s = n[u % l];
                          for (d = u + 1; d <= t.end; d++) {
                              const a = n[d % l];
                              (e = Mn(i.setContext(bn(o, { type: "segment", p0: s, p1: a, p0DataIndex: (d - 1) % l, p1DataIndex: d % l, datasetIndex: r })))), Pn(e, h) && f(u, d - 1, t.loop, h), (s = a), (h = e);
                          }
                          u < d - 1 && f(u, d - 1, t.loop, h);
                      }
                      return c;
                  })(t, e, n, i)
                : e;
        }
        function Mn(t) {
            return {
                backgroundColor: t.backgroundColor,
                borderCapStyle: t.borderCapStyle,
                borderDash: t.borderDash,
                borderDashOffset: t.borderDashOffset,
                borderJoinStyle: t.borderJoinStyle,
                borderWidth: t.borderWidth,
                borderColor: t.borderColor,
            };
        }
        function Pn(t, e) {
            return e && JSON.stringify(t) !== JSON.stringify(e);
        }
        var Dn = Object.freeze({
            __proto__: null,
            easingEffects: tn,
            isPatternOrGradient: Ut,
            color: Kt,
            getHoverColor: Gt,
            noop: t,
            uid: e,
            isNullOrUndef: n,
            isArray: i,
            isObject: o,
            isFinite: s,
            finiteOrDefault: r,
            valueOrDefault: a,
            toPercentage: l,
            toDimension: c,
            callback: h,
            each: u,
            _elementsEqual: d,
            clone: f,
            _merger: g,
            merge: m,
            mergeIf: b,
            _mergerIf: x,
            _deprecated: function (t, e, n, i) {
                void 0 !== e && console.warn(t + ': "' + n + '" is deprecated. Please use "' + i + '" instead');
            },
            resolveObjectKey: v,
            _splitKey: w,
            _capitalize: _,
            defined: S,
            isFunction: C,
            setsEqual: k,
            _isClickEvent: T,
            toFontString: ge,
            _measureText: me,
            _longestText: be,
            _alignPixel: xe,
            clearCanvas: ye,
            drawPoint: ve,
            drawPointLegend: we,
            _isPointInArea: _e,
            clipArea: Se,
            unclipArea: Ce,
            _steppedLineTo: ke,
            _bezierCurveTo: Te,
            renderText: Me,
            addRoundedRectPath: De,
            _lookup: tt,
            _lookupByKey: et,
            _rlookupByKey: nt,
            _filterBetween: it,
            listenArrayEvents: st,
            unlistenArrayEvents: rt,
            _arrayUnique: at,
            _createResolver: Ae,
            _attachContext: Ee,
            _descriptors: Le,
            _parseObjectDataRadialScale: We,
            splineCurve: Xe,
            splineCurveMonotone: Ue,
            _updateBezierControlPoints: Ge,
            _isDomSupported: ne,
            _getParentNode: ie,
            getStyle: re,
            getRelativePosition: ce,
            getMaximumSize: ue,
            retinaScale: de,
            supportsEventListenerOptions: fe,
            readUsedSize: pe,
            fontString: function (t, e, n) {
                return e + " " + t + "px " + n;
            },
            requestAnimFrame: lt,
            throttled: ct,
            debounce: ht,
            _toLeftRightCenter: ut,
            _alignStartEnd: dt,
            _textX: ft,
            _getStartAndCountOfVisiblePoints: pt,
            _scaleRangesChanged: gt,
            _pointInLine: en,
            _steppedInterpolation: nn,
            _bezierInterpolation: on,
            formatNumber: rn,
            toLineHeight: cn,
            _readValueToProps: hn,
            toTRBL: un,
            toTRBLCorners: dn,
            toPadding: fn,
            toFont: pn,
            resolve: gn,
            _addGrace: mn,
            createContext: bn,
            PI: M,
            TAU: P,
            PITAU: D,
            INFINITY: A,
            RAD_PER_DEG: E,
            HALF_PI: L,
            QUARTER_PI: O,
            TWO_THIRDS_PI: R,
            log10: $,
            sign: I,
            niceNum: F,
            _factorize: j,
            isNumber: z,
            almostEquals: N,
            almostWhole: H,
            _setMinAndMaxByKey: B,
            toRadians: W,
            toDegrees: V,
            _decimalPlaces: q,
            getAngleFromPoint: Y,
            distanceBetweenPoints: X,
            _angleDiff: U,
            _normalizeAngle: K,
            _angleBetween: G,
            _limitValue: Z,
            _int16Range: Q,
            _isBetween: J,
            getRtlAdapter: xn,
            overrideTextDirection: yn,
            restoreTextDirection: vn,
            _boundSegment: Sn,
            _boundSegments: Cn,
            _computeSegments: kn,
        });
        function An(t, e, n, i) {
            const { controller: o, data: s, _sorted: r } = t,
                a = o._cachedMeta.iScale;
            if (a && e === a.axis && "r" !== e && r && s.length) {
                const t = a._reversePixels ? nt : et;
                if (!i) return t(s, e, n);
                if (o._sharedOptions) {
                    const i = s[0],
                        o = "function" == typeof i.getRange && i.getRange(e);
                    if (o) {
                        const i = t(s, e, n - o),
                            r = t(s, e, n + o);
                        return { lo: i.lo, hi: r.hi };
                    }
                }
            }
            return { lo: 0, hi: s.length - 1 };
        }
        function En(t, e, n, i, o) {
            const s = t.getSortedVisibleDatasetMetas(),
                r = n[e];
            for (let t = 0, n = s.length; t < n; ++t) {
                const { index: n, data: a } = s[t],
                    { lo: l, hi: c } = An(s[t], e, r, o);
                for (let t = l; t <= c; ++t) {
                    const e = a[t];
                    e.skip || i(e, n, t);
                }
            }
        }
        function Ln(t, e, n, i, o) {
            const s = [];
            return o || t.isPointInArea(e)
                ? (En(
                      t,
                      n,
                      e,
                      function (n, r, a) {
                          (o || _e(n, t.chartArea, 0)) && n.inRange(e.x, e.y, i) && s.push({ element: n, datasetIndex: r, index: a });
                      },
                      !0
                  ),
                  s)
                : s;
        }
        function On(t, e, n, i, o, s) {
            return s || t.isPointInArea(e)
                ? "r" !== n || i
                    ? (function (t, e, n, i, o, s) {
                          let r = [];
                          const a = (function (t) {
                              const e = -1 !== t.indexOf("x"),
                                  n = -1 !== t.indexOf("y");
                              return function (t, i) {
                                  const o = e ? Math.abs(t.x - i.x) : 0,
                                      s = n ? Math.abs(t.y - i.y) : 0;
                                  return Math.sqrt(Math.pow(o, 2) + Math.pow(s, 2));
                              };
                          })(n);
                          let l = Number.POSITIVE_INFINITY;
                          return (
                              En(t, n, e, function (n, c, h) {
                                  const u = n.inRange(e.x, e.y, o);
                                  if (i && !u) return;
                                  const d = n.getCenterPoint(o);
                                  if (!s && !t.isPointInArea(d) && !u) return;
                                  const f = a(e, d);
                                  f < l ? ((r = [{ element: n, datasetIndex: c, index: h }]), (l = f)) : f === l && r.push({ element: n, datasetIndex: c, index: h });
                              }),
                              r
                          );
                      })(t, e, n, i, o, s)
                    : (function (t, e, n, i) {
                          let o = [];
                          return (
                              En(t, n, e, function (t, n, s) {
                                  const { startAngle: r, endAngle: a } = t.getProps(["startAngle", "endAngle"], i),
                                      { angle: l } = Y(t, { x: e.x, y: e.y });
                                  G(l, r, a) && o.push({ element: t, datasetIndex: n, index: s });
                              }),
                              o
                          );
                      })(t, e, n, o)
                : [];
        }
        function Rn(t, e, n, i, o) {
            const s = [],
                r = "x" === n ? "inXRange" : "inYRange";
            let a = !1;
            return (
                En(t, n, e, (t, i, l) => {
                    t[r](e[n], o) && (s.push({ element: t, datasetIndex: i, index: l }), (a = a || t.inRange(e.x, e.y, o)));
                }),
                i && !a ? [] : s
            );
        }
        var $n = {
            evaluateInteractionItems: En,
            modes: {
                index(t, e, n, i) {
                    const o = ce(e, t),
                        s = n.axis || "x",
                        r = n.includeInvisible || !1,
                        a = n.intersect ? Ln(t, o, s, i, r) : On(t, o, s, !1, i, r),
                        l = [];
                    return a.length
                        ? (t.getSortedVisibleDatasetMetas().forEach((t) => {
                              const e = a[0].index,
                                  n = t.data[e];
                              n && !n.skip && l.push({ element: n, datasetIndex: t.index, index: e });
                          }),
                          l)
                        : [];
                },
                dataset(t, e, n, i) {
                    const o = ce(e, t),
                        s = n.axis || "xy",
                        r = n.includeInvisible || !1;
                    let a = n.intersect ? Ln(t, o, s, i, r) : On(t, o, s, !1, i, r);
                    if (a.length > 0) {
                        const e = a[0].datasetIndex,
                            n = t.getDatasetMeta(e).data;
                        a = [];
                        for (let t = 0; t < n.length; ++t) a.push({ element: n[t], datasetIndex: e, index: t });
                    }
                    return a;
                },
                point: (t, e, n, i) => Ln(t, ce(e, t), n.axis || "xy", i, n.includeInvisible || !1),
                nearest(t, e, n, i) {
                    const o = ce(e, t),
                        s = n.axis || "xy",
                        r = n.includeInvisible || !1;
                    return On(t, o, s, n.intersect, i, r);
                },
                x: (t, e, n, i) => Rn(t, ce(e, t), "x", n.intersect, i),
                y: (t, e, n, i) => Rn(t, ce(e, t), "y", n.intersect, i),
            },
        };
        const In = ["left", "top", "right", "bottom"];
        function Fn(t, e) {
            return t.filter((t) => t.pos === e);
        }
        function jn(t, e) {
            return t.filter((t) => -1 === In.indexOf(t.pos) && t.box.axis === e);
        }
        function zn(t, e) {
            return t.sort((t, n) => {
                const i = e ? n : t,
                    o = e ? t : n;
                return i.weight === o.weight ? i.index - o.index : i.weight - o.weight;
            });
        }
        function Nn(t, e, n, i) {
            return Math.max(t[n], e[n]) + Math.max(t[i], e[i]);
        }
        function Hn(t, e) {
            (t.top = Math.max(t.top, e.top)), (t.left = Math.max(t.left, e.left)), (t.bottom = Math.max(t.bottom, e.bottom)), (t.right = Math.max(t.right, e.right));
        }
        function Bn(t, e, n, i) {
            const { pos: s, box: r } = n,
                a = t.maxPadding;
            if (!o(s)) {
                n.size && (t[s] -= n.size);
                const e = i[n.stack] || { size: 0, count: 1 };
                (e.size = Math.max(e.size, n.horizontal ? r.height : r.width)), (n.size = e.size / e.count), (t[s] += n.size);
            }
            r.getPadding && Hn(a, r.getPadding());
            const l = Math.max(0, e.outerWidth - Nn(a, t, "left", "right")),
                c = Math.max(0, e.outerHeight - Nn(a, t, "top", "bottom")),
                h = l !== t.w,
                u = c !== t.h;
            return (t.w = l), (t.h = c), n.horizontal ? { same: h, other: u } : { same: u, other: h };
        }
        function Wn(t, e) {
            const n = e.maxPadding;
            return (function (t) {
                const i = { left: 0, top: 0, right: 0, bottom: 0 };
                return (
                    t.forEach((t) => {
                        i[t] = Math.max(e[t], n[t]);
                    }),
                    i
                );
            })(t ? ["left", "right"] : ["top", "bottom"]);
        }
        function Vn(t, e, n, i) {
            const o = [];
            let s, r, a, l, c, h;
            for (s = 0, r = t.length, c = 0; s < r; ++s) {
                (a = t[s]), (l = a.box), l.update(a.width || e.w, a.height || e.h, Wn(a.horizontal, e));
                const { same: r, other: u } = Bn(e, n, a, i);
                (c |= r && o.length), (h = h || u), l.fullSize || o.push(a);
            }
            return (c && Vn(o, e, n, i)) || h;
        }
        function qn(t, e, n, i, o) {
            (t.top = n), (t.left = e), (t.right = e + i), (t.bottom = n + o), (t.width = i), (t.height = o);
        }
        function Yn(t, e, n, i) {
            const o = n.padding;
            let { x: s, y: r } = e;
            for (const a of t) {
                const t = a.box,
                    l = i[a.stack] || { count: 1, placed: 0, weight: 1 },
                    c = a.stackWeight / l.weight || 1;
                if (a.horizontal) {
                    const i = e.w * c,
                        s = l.size || t.height;
                    S(l.start) && (r = l.start), t.fullSize ? qn(t, o.left, r, n.outerWidth - o.right - o.left, s) : qn(t, e.left + l.placed, r, i, s), (l.start = r), (l.placed += i), (r = t.bottom);
                } else {
                    const i = e.h * c,
                        r = l.size || t.width;
                    S(l.start) && (s = l.start), t.fullSize ? qn(t, s, o.top, r, n.outerHeight - o.bottom - o.top) : qn(t, s, e.top + l.placed, r, i), (l.start = s), (l.placed += i), (s = t.right);
                }
            }
            (e.x = s), (e.y = r);
        }
        ee.set("layout", { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } });
        var Xn = {
            addBox(t, e) {
                t.boxes || (t.boxes = []),
                    (e.fullSize = e.fullSize || !1),
                    (e.position = e.position || "top"),
                    (e.weight = e.weight || 0),
                    (e._layers =
                        e._layers ||
                        function () {
                            return [
                                {
                                    z: 0,
                                    draw(t) {
                                        e.draw(t);
                                    },
                                },
                            ];
                        }),
                    t.boxes.push(e);
            },
            removeBox(t, e) {
                const n = t.boxes ? t.boxes.indexOf(e) : -1;
                -1 !== n && t.boxes.splice(n, 1);
            },
            configure(t, e, n) {
                (e.fullSize = n.fullSize), (e.position = n.position), (e.weight = n.weight);
            },
            update(t, e, n, i) {
                if (!t) return;
                const o = fn(t.options.layout.padding),
                    s = Math.max(e - o.width, 0),
                    r = Math.max(n - o.height, 0),
                    a = (function (t) {
                        const e = (function (t) {
                                const e = [];
                                let n, i, o, s, r, a;
                                for (n = 0, i = (t || []).length; n < i; ++n)
                                    (o = t[n]),
                                        ({
                                            position: s,
                                            options: { stack: r, stackWeight: a = 1 },
                                        } = o),
                                        e.push({ index: n, box: o, pos: s, horizontal: o.isHorizontal(), weight: o.weight, stack: r && s + r, stackWeight: a });
                                return e;
                            })(t),
                            n = zn(
                                e.filter((t) => t.box.fullSize),
                                !0
                            ),
                            i = zn(Fn(e, "left"), !0),
                            o = zn(Fn(e, "right")),
                            s = zn(Fn(e, "top"), !0),
                            r = zn(Fn(e, "bottom")),
                            a = jn(e, "x"),
                            l = jn(e, "y");
                        return { fullSize: n, leftAndTop: i.concat(s), rightAndBottom: o.concat(l).concat(r).concat(a), chartArea: Fn(e, "chartArea"), vertical: i.concat(o).concat(l), horizontal: s.concat(r).concat(a) };
                    })(t.boxes),
                    l = a.vertical,
                    c = a.horizontal;
                u(t.boxes, (t) => {
                    "function" == typeof t.beforeLayout && t.beforeLayout();
                });
                const h = l.reduce((t, e) => (e.box.options && !1 === e.box.options.display ? t : t + 1), 0) || 1,
                    d = Object.freeze({ outerWidth: e, outerHeight: n, padding: o, availableWidth: s, availableHeight: r, vBoxMaxWidth: s / 2 / h, hBoxMaxHeight: r / 2 }),
                    f = Object.assign({}, o);
                Hn(f, fn(i));
                const p = Object.assign({ maxPadding: f, w: s, h: r, x: o.left, y: o.top }, o),
                    g = (function (t, e) {
                        const n = (function (t) {
                                const e = {};
                                for (const n of t) {
                                    const { stack: t, pos: i, stackWeight: o } = n;
                                    if (!t || !In.includes(i)) continue;
                                    const s = e[t] || (e[t] = { count: 0, placed: 0, weight: 0, size: 0 });
                                    s.count++, (s.weight += o);
                                }
                                return e;
                            })(t),
                            { vBoxMaxWidth: i, hBoxMaxHeight: o } = e;
                        let s, r, a;
                        for (s = 0, r = t.length; s < r; ++s) {
                            a = t[s];
                            const { fullSize: r } = a.box,
                                l = n[a.stack],
                                c = l && a.stackWeight / l.weight;
                            a.horizontal ? ((a.width = c ? c * i : r && e.availableWidth), (a.height = o)) : ((a.width = i), (a.height = c ? c * o : r && e.availableHeight));
                        }
                        return n;
                    })(l.concat(c), d);
                Vn(a.fullSize, p, d, g),
                    Vn(l, p, d, g),
                    Vn(c, p, d, g) && Vn(l, p, d, g),
                    (function (t) {
                        const e = t.maxPadding;
                        function n(n) {
                            const i = Math.max(e[n] - t[n], 0);
                            return (t[n] += i), i;
                        }
                        (t.y += n("top")), (t.x += n("left")), n("right"), n("bottom");
                    })(p),
                    Yn(a.leftAndTop, p, d, g),
                    (p.x += p.w),
                    (p.y += p.h),
                    Yn(a.rightAndBottom, p, d, g),
                    (t.chartArea = { left: p.left, top: p.top, right: p.left + p.w, bottom: p.top + p.h, height: p.h, width: p.w }),
                    u(a.chartArea, (e) => {
                        const n = e.box;
                        Object.assign(n, t.chartArea), n.update(p.w, p.h, { left: 0, top: 0, right: 0, bottom: 0 });
                    });
            },
        };
        class Un {
            acquireContext(t, e) {}
            releaseContext(t) {
                return !1;
            }
            addEventListener(t, e, n) {}
            removeEventListener(t, e, n) {}
            getDevicePixelRatio() {
                return 1;
            }
            getMaximumSize(t, e, n, i) {
                return (e = Math.max(0, e || t.width)), (n = n || t.height), { width: e, height: Math.max(0, i ? Math.floor(e / i) : n) };
            }
            isAttached(t) {
                return !0;
            }
            updateConfig(t) {}
        }
        class Kn extends Un {
            acquireContext(t) {
                return (t && t.getContext && t.getContext("2d")) || null;
            }
            updateConfig(t) {
                t.options.animation = !1;
            }
        }
        const Gn = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup",
                pointerenter: "mouseenter",
                pointerdown: "mousedown",
                pointermove: "mousemove",
                pointerup: "mouseup",
                pointerleave: "mouseout",
                pointerout: "mouseout",
            },
            Zn = (t) => null === t || "" === t,
            Qn = !!fe && { passive: !0 };
        function Jn(t, e, n) {
            t.canvas.removeEventListener(e, n, Qn);
        }
        function ti(t, e) {
            for (const n of t) if (n === e || n.contains(e)) return !0;
        }
        function ei(t, e, n) {
            const i = t.canvas,
                o = new MutationObserver((t) => {
                    let e = !1;
                    for (const n of t) (e = e || ti(n.addedNodes, i)), (e = e && !ti(n.removedNodes, i));
                    e && n();
                });
            return o.observe(document, { childList: !0, subtree: !0 }), o;
        }
        function ni(t, e, n) {
            const i = t.canvas,
                o = new MutationObserver((t) => {
                    let e = !1;
                    for (const n of t) (e = e || ti(n.removedNodes, i)), (e = e && !ti(n.addedNodes, i));
                    e && n();
                });
            return o.observe(document, { childList: !0, subtree: !0 }), o;
        }
        const ii = new Map();
        let oi = 0;
        function si() {
            const t = window.devicePixelRatio;
            t !== oi &&
                ((oi = t),
                ii.forEach((e, n) => {
                    n.currentDevicePixelRatio !== t && e();
                }));
        }
        function ri(t, e, n) {
            const i = t.canvas,
                o = i && ie(i);
            if (!o) return;
            const s = ct((t, e) => {
                    const i = o.clientWidth;
                    n(t, e), i < o.clientWidth && n();
                }, window),
                r = new ResizeObserver((t) => {
                    const e = t[0],
                        n = e.contentRect.width,
                        i = e.contentRect.height;
                    (0 === n && 0 === i) || s(n, i);
                });
            return (
                r.observe(o),
                (function (t, e) {
                    ii.size || window.addEventListener("resize", si), ii.set(t, e);
                })(t, s),
                r
            );
        }
        function ai(t, e, n) {
            n && n.disconnect(),
                "resize" === e &&
                    (function (t) {
                        ii.delete(t), ii.size || window.removeEventListener("resize", si);
                    })(t);
        }
        function li(t, e, n) {
            const i = t.canvas,
                o = ct(
                    (e) => {
                        null !== t.ctx &&
                            n(
                                (function (t, e) {
                                    const n = Gn[t.type] || t.type,
                                        { x: i, y: o } = ce(t, e);
                                    return { type: n, chart: e, native: t, x: void 0 !== i ? i : null, y: void 0 !== o ? o : null };
                                })(e, t)
                            );
                    },
                    t,
                    (t) => {
                        const e = t[0];
                        return [e, e.offsetX, e.offsetY];
                    }
                );
            return (
                (function (t, e, n) {
                    t.addEventListener(e, n, Qn);
                })(i, e, o),
                o
            );
        }
        class ci extends Un {
            acquireContext(t, e) {
                const n = t && t.getContext && t.getContext("2d");
                return n && n.canvas === t
                    ? ((function (t, e) {
                          const n = t.style,
                              i = t.getAttribute("height"),
                              o = t.getAttribute("width");
                          if (((t.$chartjs = { initial: { height: i, width: o, style: { display: n.display, height: n.height, width: n.width } } }), (n.display = n.display || "block"), (n.boxSizing = n.boxSizing || "border-box"), Zn(o))) {
                              const e = pe(t, "width");
                              void 0 !== e && (t.width = e);
                          }
                          if (Zn(i))
                              if ("" === t.style.height) t.height = t.width / (e || 2);
                              else {
                                  const e = pe(t, "height");
                                  void 0 !== e && (t.height = e);
                              }
                      })(t, e),
                      n)
                    : null;
            }
            releaseContext(t) {
                const e = t.canvas;
                if (!e.$chartjs) return !1;
                const i = e.$chartjs.initial;
                ["height", "width"].forEach((t) => {
                    const o = i[t];
                    n(o) ? e.removeAttribute(t) : e.setAttribute(t, o);
                });
                const o = i.style || {};
                return (
                    Object.keys(o).forEach((t) => {
                        e.style[t] = o[t];
                    }),
                    (e.width = e.width),
                    delete e.$chartjs,
                    !0
                );
            }
            addEventListener(t, e, n) {
                this.removeEventListener(t, e);
                const i = t.$proxies || (t.$proxies = {}),
                    o = { attach: ei, detach: ni, resize: ri }[e] || li;
                i[e] = o(t, e, n);
            }
            removeEventListener(t, e) {
                const n = t.$proxies || (t.$proxies = {}),
                    i = n[e];
                i && (({ attach: ai, detach: ai, resize: ai }[e] || Jn)(t, e, i), (n[e] = void 0));
            }
            getDevicePixelRatio() {
                return window.devicePixelRatio;
            }
            getMaximumSize(t, e, n, i) {
                return ue(t, e, n, i);
            }
            isAttached(t) {
                const e = ie(t);
                return !(!e || !e.isConnected);
            }
        }
        function hi(t) {
            return !ne() || ("undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas) ? Kn : ci;
        }
        var ui = Object.freeze({ __proto__: null, _detectPlatform: hi, BasePlatform: Un, BasicPlatform: Kn, DomPlatform: ci });
        const di = "transparent",
            fi = {
                boolean: (t, e, n) => (n > 0.5 ? e : t),
                color(t, e, n) {
                    const i = Kt(t || di),
                        o = i.valid && Kt(e || di);
                    return o && o.valid ? o.mix(i, n).hexString() : e;
                },
                number: (t, e, n) => t + (e - t) * n,
            };
        class pi {
            constructor(t, e, n, i) {
                const o = e[n];
                i = gn([t.to, i, o, t.from]);
                const s = gn([t.from, o, i]);
                (this._active = !0),
                    (this._fn = t.fn || fi[t.type || typeof s]),
                    (this._easing = tn[t.easing] || tn.linear),
                    (this._start = Math.floor(Date.now() + (t.delay || 0))),
                    (this._duration = this._total = Math.floor(t.duration)),
                    (this._loop = !!t.loop),
                    (this._target = e),
                    (this._prop = n),
                    (this._from = s),
                    (this._to = i),
                    (this._promises = void 0);
            }
            active() {
                return this._active;
            }
            update(t, e, n) {
                if (this._active) {
                    this._notify(!1);
                    const i = this._target[this._prop],
                        o = n - this._start,
                        s = this._duration - o;
                    (this._start = n), (this._duration = Math.floor(Math.max(s, t.duration))), (this._total += o), (this._loop = !!t.loop), (this._to = gn([t.to, e, i, t.from])), (this._from = gn([t.from, i, e]));
                }
            }
            cancel() {
                this._active && (this.tick(Date.now()), (this._active = !1), this._notify(!1));
            }
            tick(t) {
                const e = t - this._start,
                    n = this._duration,
                    i = this._prop,
                    o = this._from,
                    s = this._loop,
                    r = this._to;
                let a;
                if (((this._active = o !== r && (s || e < n)), !this._active)) return (this._target[i] = r), void this._notify(!0);
                e < 0 ? (this._target[i] = o) : ((a = (e / n) % 2), (a = s && a > 1 ? 2 - a : a), (a = this._easing(Math.min(1, Math.max(0, a)))), (this._target[i] = this._fn(o, r, a)));
            }
            wait() {
                const t = this._promises || (this._promises = []);
                return new Promise((e, n) => {
                    t.push({ res: e, rej: n });
                });
            }
            _notify(t) {
                const e = t ? "res" : "rej",
                    n = this._promises || [];
                for (let t = 0; t < n.length; t++) n[t][e]();
            }
        }
        ee.set("animation", { delay: void 0, duration: 1e3, easing: "easeOutQuart", fn: void 0, from: void 0, loop: void 0, to: void 0, type: void 0 });
        const gi = Object.keys(ee.animation);
        ee.describe("animation", { _fallback: !1, _indexable: !1, _scriptable: (t) => "onProgress" !== t && "onComplete" !== t && "fn" !== t }),
            ee.set("animations", { colors: { type: "color", properties: ["color", "borderColor", "backgroundColor"] }, numbers: { type: "number", properties: ["x", "y", "borderWidth", "radius", "tension"] } }),
            ee.describe("animations", { _fallback: "animation" }),
            ee.set("transitions", {
                active: { animation: { duration: 400 } },
                resize: { animation: { duration: 0 } },
                show: { animations: { colors: { from: "transparent" }, visible: { type: "boolean", duration: 0 } } },
                hide: { animations: { colors: { to: "transparent" }, visible: { type: "boolean", easing: "linear", fn: (t) => 0 | t } } },
            });
        class mi {
            constructor(t, e) {
                (this._chart = t), (this._properties = new Map()), this.configure(e);
            }
            configure(t) {
                if (!o(t)) return;
                const e = this._properties;
                Object.getOwnPropertyNames(t).forEach((n) => {
                    const s = t[n];
                    if (!o(s)) return;
                    const r = {};
                    for (const t of gi) r[t] = s[t];
                    ((i(s.properties) && s.properties) || [n]).forEach((t) => {
                        (t !== n && e.has(t)) || e.set(t, r);
                    });
                });
            }
            _animateOptions(t, e) {
                const n = e.options,
                    i = (function (t, e) {
                        if (!e) return;
                        let n = t.options;
                        if (n) return n.$shared && (t.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })), n;
                        t.options = e;
                    })(t, n);
                if (!i) return [];
                const o = this._createAnimations(i, n);
                return (
                    n.$shared &&
                        (function (t, e) {
                            const n = [],
                                i = Object.keys(e);
                            for (let e = 0; e < i.length; e++) {
                                const o = t[i[e]];
                                o && o.active() && n.push(o.wait());
                            }
                            return Promise.all(n);
                        })(t.options.$animations, n).then(
                            () => {
                                t.options = n;
                            },
                            () => {}
                        ),
                    o
                );
            }
            _createAnimations(t, e) {
                const n = this._properties,
                    i = [],
                    o = t.$animations || (t.$animations = {}),
                    s = Object.keys(e),
                    r = Date.now();
                let a;
                for (a = s.length - 1; a >= 0; --a) {
                    const l = s[a];
                    if ("$" === l.charAt(0)) continue;
                    if ("options" === l) {
                        i.push(...this._animateOptions(t, e));
                        continue;
                    }
                    const c = e[l];
                    let h = o[l];
                    const u = n.get(l);
                    if (h) {
                        if (u && h.active()) {
                            h.update(u, c, r);
                            continue;
                        }
                        h.cancel();
                    }
                    u && u.duration ? ((o[l] = h = new pi(u, t, l, c)), i.push(h)) : (t[l] = c);
                }
                return i;
            }
            update(t, e) {
                if (0 === this._properties.size) return void Object.assign(t, e);
                const n = this._createAnimations(t, e);
                return n.length ? (mt.add(this._chart, n), !0) : void 0;
            }
        }
        function bi(t, e) {
            const n = (t && t.options) || {},
                i = n.reverse,
                o = void 0 === n.min ? e : 0,
                s = void 0 === n.max ? e : 0;
            return { start: i ? s : o, end: i ? o : s };
        }
        function xi(t, e) {
            const n = [],
                i = t._getSortedDatasetMetas(e);
            let o, s;
            for (o = 0, s = i.length; o < s; ++o) n.push(i[o].index);
            return n;
        }
        function yi(t, e, n, i = {}) {
            const o = t.keys,
                r = "single" === i.mode;
            let a, l, c, h;
            if (null !== e) {
                for (a = 0, l = o.length; a < l; ++a) {
                    if (((c = +o[a]), c === n)) {
                        if (i.all) continue;
                        break;
                    }
                    (h = t.values[c]), s(h) && (r || 0 === e || I(e) === I(h)) && (e += h);
                }
                return e;
            }
        }
        function vi(t, e) {
            const n = t && t.options.stacked;
            return n || (void 0 === n && void 0 !== e.stack);
        }
        function wi(t, e, n) {
            const i = t[e] || (t[e] = {});
            return i[n] || (i[n] = {});
        }
        function _i(t, e, n, i) {
            for (const o of e.getMatchingVisibleMetas(i).reverse()) {
                const e = t[o.index];
                if ((n && e > 0) || (!n && e < 0)) return o.index;
            }
            return null;
        }
        function Si(t, e) {
            const { chart: n, _cachedMeta: i } = t,
                o = n._stacks || (n._stacks = {}),
                { iScale: s, vScale: r, index: a } = i,
                l = s.axis,
                c = r.axis,
                h = (function (t, e, n) {
                    return `${t.id}.${e.id}.${n.stack || n.type}`;
                })(s, r, i),
                u = e.length;
            let d;
            for (let t = 0; t < u; ++t) {
                const n = e[t],
                    { [l]: s, [c]: u } = n;
                (d = (n._stacks || (n._stacks = {}))[c] = wi(o, h, s)), (d[a] = u), (d._top = _i(d, r, !0, i.type)), (d._bottom = _i(d, r, !1, i.type));
            }
        }
        function Ci(t, e) {
            const n = t.scales;
            return Object.keys(n)
                .filter((t) => n[t].axis === e)
                .shift();
        }
        function ki(t, e) {
            const n = t.controller.index,
                i = t.vScale && t.vScale.axis;
            if (i) {
                e = e || t._parsed;
                for (const t of e) {
                    const e = t._stacks;
                    if (!e || void 0 === e[i] || void 0 === e[i][n]) return;
                    delete e[i][n];
                }
            }
        }
        const Ti = (t) => "reset" === t || "none" === t,
            Mi = (t, e) => (e ? t : Object.assign({}, t));
        class Pi {
            constructor(t, e) {
                (this.chart = t),
                    (this._ctx = t.ctx),
                    (this.index = e),
                    (this._cachedDataOpts = {}),
                    (this._cachedMeta = this.getMeta()),
                    (this._type = this._cachedMeta.type),
                    (this.options = void 0),
                    (this._parsing = !1),
                    (this._data = void 0),
                    (this._objectData = void 0),
                    (this._sharedOptions = void 0),
                    (this._drawStart = void 0),
                    (this._drawCount = void 0),
                    (this.enableOptionSharing = !1),
                    (this.supportsDecimation = !1),
                    (this.$context = void 0),
                    (this._syncList = []),
                    this.initialize();
            }
            initialize() {
                const t = this._cachedMeta;
                this.configure(), this.linkScales(), (t._stacked = vi(t.vScale, t)), this.addElements();
            }
            updateIndex(t) {
                this.index !== t && ki(this._cachedMeta), (this.index = t);
            }
            linkScales() {
                const t = this.chart,
                    e = this._cachedMeta,
                    n = this.getDataset(),
                    i = (t, e, n, i) => ("x" === t ? e : "r" === t ? i : n),
                    o = (e.xAxisID = a(n.xAxisID, Ci(t, "x"))),
                    s = (e.yAxisID = a(n.yAxisID, Ci(t, "y"))),
                    r = (e.rAxisID = a(n.rAxisID, Ci(t, "r"))),
                    l = e.indexAxis,
                    c = (e.iAxisID = i(l, o, s, r)),
                    h = (e.vAxisID = i(l, s, o, r));
                (e.xScale = this.getScaleForId(o)), (e.yScale = this.getScaleForId(s)), (e.rScale = this.getScaleForId(r)), (e.iScale = this.getScaleForId(c)), (e.vScale = this.getScaleForId(h));
            }
            getDataset() {
                return this.chart.data.datasets[this.index];
            }
            getMeta() {
                return this.chart.getDatasetMeta(this.index);
            }
            getScaleForId(t) {
                return this.chart.scales[t];
            }
            _getOtherScale(t) {
                const e = this._cachedMeta;
                return t === e.iScale ? e.vScale : e.iScale;
            }
            reset() {
                this._update("reset");
            }
            _destroy() {
                const t = this._cachedMeta;
                this._data && rt(this._data, this), t._stacked && ki(t);
            }
            _dataCheck() {
                const t = this.getDataset(),
                    e = t.data || (t.data = []),
                    n = this._data;
                if (o(e))
                    this._data = (function (t) {
                        const e = Object.keys(t),
                            n = new Array(e.length);
                        let i, o, s;
                        for (i = 0, o = e.length; i < o; ++i) (s = e[i]), (n[i] = { x: s, y: t[s] });
                        return n;
                    })(e);
                else if (n !== e) {
                    if (n) {
                        rt(n, this);
                        const t = this._cachedMeta;
                        ki(t), (t._parsed = []);
                    }
                    e && Object.isExtensible(e) && st(e, this), (this._syncList = []), (this._data = e);
                }
            }
            addElements() {
                const t = this._cachedMeta;
                this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
            }
            buildOrUpdateElements(t) {
                const e = this._cachedMeta,
                    n = this.getDataset();
                let i = !1;
                this._dataCheck();
                const o = e._stacked;
                (e._stacked = vi(e.vScale, e)), e.stack !== n.stack && ((i = !0), ki(e), (e.stack = n.stack)), this._resyncElements(t), (i || o !== e._stacked) && Si(this, e._parsed);
            }
            configure() {
                const t = this.chart.config,
                    e = t.datasetScopeKeys(this._type),
                    n = t.getOptionScopes(this.getDataset(), e, !0);
                (this.options = t.createResolver(n, this.getContext())), (this._parsing = this.options.parsing), (this._cachedDataOpts = {});
            }
            parse(t, e) {
                const { _cachedMeta: n, _data: s } = this,
                    { iScale: r, _stacked: a } = n,
                    l = r.axis;
                let c,
                    h,
                    u,
                    d = (0 === t && e === s.length) || n._sorted,
                    f = t > 0 && n._parsed[t - 1];
                if (!1 === this._parsing) (n._parsed = s), (n._sorted = !0), (u = s);
                else {
                    u = i(s[t]) ? this.parseArrayData(n, s, t, e) : o(s[t]) ? this.parseObjectData(n, s, t, e) : this.parsePrimitiveData(n, s, t, e);
                    const r = () => null === h[l] || (f && h[l] < f[l]);
                    for (c = 0; c < e; ++c) (n._parsed[c + t] = h = u[c]), d && (r() && (d = !1), (f = h));
                    n._sorted = d;
                }
                a && Si(this, u);
            }
            parsePrimitiveData(t, e, n, i) {
                const { iScale: o, vScale: s } = t,
                    r = o.axis,
                    a = s.axis,
                    l = o.getLabels(),
                    c = o === s,
                    h = new Array(i);
                let u, d, f;
                for (u = 0, d = i; u < d; ++u) (f = u + n), (h[u] = { [r]: c || o.parse(l[f], f), [a]: s.parse(e[f], f) });
                return h;
            }
            parseArrayData(t, e, n, i) {
                const { xScale: o, yScale: s } = t,
                    r = new Array(i);
                let a, l, c, h;
                for (a = 0, l = i; a < l; ++a) (c = a + n), (h = e[c]), (r[a] = { x: o.parse(h[0], c), y: s.parse(h[1], c) });
                return r;
            }
            parseObjectData(t, e, n, i) {
                const { xScale: o, yScale: s } = t,
                    { xAxisKey: r = "x", yAxisKey: a = "y" } = this._parsing,
                    l = new Array(i);
                let c, h, u, d;
                for (c = 0, h = i; c < h; ++c) (u = c + n), (d = e[u]), (l[c] = { x: o.parse(v(d, r), u), y: s.parse(v(d, a), u) });
                return l;
            }
            getParsed(t) {
                return this._cachedMeta._parsed[t];
            }
            getDataElement(t) {
                return this._cachedMeta.data[t];
            }
            applyStack(t, e, n) {
                const i = this.chart,
                    o = this._cachedMeta,
                    s = e[t.axis];
                return yi({ keys: xi(i, !0), values: e._stacks[t.axis] }, s, o.index, { mode: n });
            }
            updateRangeFromParsed(t, e, n, i) {
                const o = n[e.axis];
                let s = null === o ? NaN : o;
                const r = i && n._stacks[e.axis];
                i && r && ((i.values = r), (s = yi(i, o, this._cachedMeta.index))), (t.min = Math.min(t.min, s)), (t.max = Math.max(t.max, s));
            }
            getMinMax(t, e) {
                const n = this._cachedMeta,
                    i = n._parsed,
                    o = n._sorted && t === n.iScale,
                    r = i.length,
                    a = this._getOtherScale(t),
                    l = ((t, e, n) => t && !e.hidden && e._stacked && { keys: xi(n, !0), values: null })(e, n, this.chart),
                    c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
                    { min: h, max: u } = (function (t) {
                        const { min: e, max: n, minDefined: i, maxDefined: o } = t.getUserBounds();
                        return { min: i ? e : Number.NEGATIVE_INFINITY, max: o ? n : Number.POSITIVE_INFINITY };
                    })(a);
                let d, f;
                function p() {
                    f = i[d];
                    const e = f[a.axis];
                    return !s(f[t.axis]) || h > e || u < e;
                }
                for (d = 0; d < r && (p() || (this.updateRangeFromParsed(c, t, f, l), !o)); ++d);
                if (o)
                    for (d = r - 1; d >= 0; --d)
                        if (!p()) {
                            this.updateRangeFromParsed(c, t, f, l);
                            break;
                        }
                return c;
            }
            getAllParsedValues(t) {
                const e = this._cachedMeta._parsed,
                    n = [];
                let i, o, r;
                for (i = 0, o = e.length; i < o; ++i) (r = e[i][t.axis]), s(r) && n.push(r);
                return n;
            }
            getMaxOverflow() {
                return !1;
            }
            getLabelAndValue(t) {
                const e = this._cachedMeta,
                    n = e.iScale,
                    i = e.vScale,
                    o = this.getParsed(t);
                return { label: n ? "" + n.getLabelForValue(o[n.axis]) : "", value: i ? "" + i.getLabelForValue(o[i.axis]) : "" };
            }
            _update(t) {
                const e = this._cachedMeta;
                this.update(t || "default"),
                    (e._clip = (function (t) {
                        let e, n, i, s;
                        return o(t) ? ((e = t.top), (n = t.right), (i = t.bottom), (s = t.left)) : (e = n = i = s = t), { top: e, right: n, bottom: i, left: s, disabled: !1 === t };
                    })(
                        a(
                            this.options.clip,
                            (function (t, e, n) {
                                if (!1 === n) return !1;
                                const i = bi(t, n),
                                    o = bi(e, n);
                                return { top: o.end, right: i.end, bottom: o.start, left: i.start };
                            })(e.xScale, e.yScale, this.getMaxOverflow())
                        )
                    ));
            }
            update(t) {}
            draw() {
                const t = this._ctx,
                    e = this.chart,
                    n = this._cachedMeta,
                    i = n.data || [],
                    o = e.chartArea,
                    s = [],
                    r = this._drawStart || 0,
                    a = this._drawCount || i.length - r,
                    l = this.options.drawActiveElementsOnTop;
                let c;
                for (n.dataset && n.dataset.draw(t, o, r, a), c = r; c < r + a; ++c) {
                    const e = i[c];
                    e.hidden || (e.active && l ? s.push(e) : e.draw(t, o));
                }
                for (c = 0; c < s.length; ++c) s[c].draw(t, o);
            }
            getStyle(t, e) {
                const n = e ? "active" : "default";
                return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(n) : this.resolveDataElementOptions(t || 0, n);
            }
            getContext(t, e, n) {
                const i = this.getDataset();
                let o;
                if (t >= 0 && t < this._cachedMeta.data.length) {
                    const e = this._cachedMeta.data[t];
                    (o =
                        e.$context ||
                        (e.$context = (function (t, e, n) {
                            return bn(t, { active: !1, dataIndex: e, parsed: void 0, raw: void 0, element: n, index: e, mode: "default", type: "data" });
                        })(this.getContext(), t, e))),
                        (o.parsed = this.getParsed(t)),
                        (o.raw = i.data[t]),
                        (o.index = o.dataIndex = t);
                } else
                    (o =
                        this.$context ||
                        (this.$context = (function (t, e) {
                            return bn(t, { active: !1, dataset: void 0, datasetIndex: e, index: e, mode: "default", type: "dataset" });
                        })(this.chart.getContext(), this.index))),
                        (o.dataset = i),
                        (o.index = o.datasetIndex = this.index);
                return (o.active = !!e), (o.mode = n), o;
            }
            resolveDatasetElementOptions(t) {
                return this._resolveElementOptions(this.datasetElementType.id, t);
            }
            resolveDataElementOptions(t, e) {
                return this._resolveElementOptions(this.dataElementType.id, e, t);
            }
            _resolveElementOptions(t, e = "default", n) {
                const i = "active" === e,
                    o = this._cachedDataOpts,
                    s = t + "-" + e,
                    r = o[s],
                    a = this.enableOptionSharing && S(n);
                if (r) return Mi(r, a);
                const l = this.chart.config,
                    c = l.datasetElementScopeKeys(this._type, t),
                    h = i ? [`${t}Hover`, "hover", t, ""] : [t, ""],
                    u = l.getOptionScopes(this.getDataset(), c),
                    d = Object.keys(ee.elements[t]),
                    f = l.resolveNamedOptions(u, d, () => this.getContext(n, i), h);
                return f.$shared && ((f.$shared = a), (o[s] = Object.freeze(Mi(f, a)))), f;
            }
            _resolveAnimations(t, e, n) {
                const i = this.chart,
                    o = this._cachedDataOpts,
                    s = `animation-${e}`,
                    r = o[s];
                if (r) return r;
                let a;
                if (!1 !== i.options.animation) {
                    const i = this.chart.config,
                        o = i.datasetAnimationScopeKeys(this._type, e),
                        s = i.getOptionScopes(this.getDataset(), o);
                    a = i.createResolver(s, this.getContext(t, n, e));
                }
                const l = new mi(i, a && a.animations);
                return a && a._cacheable && (o[s] = Object.freeze(l)), l;
            }
            getSharedOptions(t) {
                if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
            }
            includeOptions(t, e) {
                return !e || Ti(t) || this.chart._animationsDisabled;
            }
            _getSharedOptions(t, e) {
                const n = this.resolveDataElementOptions(t, e),
                    i = this._sharedOptions,
                    o = this.getSharedOptions(n),
                    s = this.includeOptions(e, o) || o !== i;
                return this.updateSharedOptions(o, e, n), { sharedOptions: o, includeOptions: s };
            }
            updateElement(t, e, n, i) {
                Ti(i) ? Object.assign(t, n) : this._resolveAnimations(e, i).update(t, n);
            }
            updateSharedOptions(t, e, n) {
                t && !Ti(e) && this._resolveAnimations(void 0, e).update(t, n);
            }
            _setStyle(t, e, n, i) {
                t.active = i;
                const o = this.getStyle(e, i);
                this._resolveAnimations(e, n, i).update(t, { options: (!i && this.getSharedOptions(o)) || o });
            }
            removeHoverStyle(t, e, n) {
                this._setStyle(t, n, "active", !1);
            }
            setHoverStyle(t, e, n) {
                this._setStyle(t, n, "active", !0);
            }
            _removeDatasetHoverStyle() {
                const t = this._cachedMeta.dataset;
                t && this._setStyle(t, void 0, "active", !1);
            }
            _setDatasetHoverStyle() {
                const t = this._cachedMeta.dataset;
                t && this._setStyle(t, void 0, "active", !0);
            }
            _resyncElements(t) {
                const e = this._data,
                    n = this._cachedMeta.data;
                for (const [t, e, n] of this._syncList) this[t](e, n);
                this._syncList = [];
                const i = n.length,
                    o = e.length,
                    s = Math.min(o, i);
                s && this.parse(0, s), o > i ? this._insertElements(i, o - i, t) : o < i && this._removeElements(o, i - o);
            }
            _insertElements(t, e, n = !0) {
                const i = this._cachedMeta,
                    o = i.data,
                    s = t + e;
                let r;
                const a = (t) => {
                    for (t.length += e, r = t.length - 1; r >= s; r--) t[r] = t[r - e];
                };
                for (a(o), r = t; r < s; ++r) o[r] = new this.dataElementType();
                this._parsing && a(i._parsed), this.parse(t, e), n && this.updateElements(o, t, e, "reset");
            }
            updateElements(t, e, n, i) {}
            _removeElements(t, e) {
                const n = this._cachedMeta;
                if (this._parsing) {
                    const i = n._parsed.splice(t, e);
                    n._stacked && ki(n, i);
                }
                n.data.splice(t, e);
            }
            _sync(t) {
                if (this._parsing) this._syncList.push(t);
                else {
                    const [e, n, i] = t;
                    this[e](n, i);
                }
                this.chart._dataChanges.push([this.index, ...t]);
            }
            _onDataPush() {
                const t = arguments.length;
                this._sync(["_insertElements", this.getDataset().data.length - t, t]);
            }
            _onDataPop() {
                this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
            }
            _onDataShift() {
                this._sync(["_removeElements", 0, 1]);
            }
            _onDataSplice(t, e) {
                e && this._sync(["_removeElements", t, e]);
                const n = arguments.length - 2;
                n && this._sync(["_insertElements", t, n]);
            }
            _onDataUnshift() {
                this._sync(["_insertElements", 0, arguments.length]);
            }
        }
        (Pi.defaults = {}), (Pi.prototype.datasetElementType = null), (Pi.prototype.dataElementType = null);
        class Di {
            constructor() {
                (this.x = void 0), (this.y = void 0), (this.active = !1), (this.options = void 0), (this.$animations = void 0);
            }
            tooltipPosition(t) {
                const { x: e, y: n } = this.getProps(["x", "y"], t);
                return { x: e, y: n };
            }
            hasValue() {
                return z(this.x) && z(this.y);
            }
            getProps(t, e) {
                const n = this.$animations;
                if (!e || !n) return this;
                const i = {};
                return (
                    t.forEach((t) => {
                        i[t] = n[t] && n[t].active() ? n[t]._to : this[t];
                    }),
                    i
                );
            }
        }
        (Di.defaults = {}), (Di.defaultRoutes = void 0);
        const Ai = {
            values: (t) => (i(t) ? t : "" + t),
            numeric(t, e, n) {
                if (0 === t) return "0";
                const i = this.chart.options.locale;
                let o,
                    s = t;
                if (n.length > 1) {
                    const e = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
                    (e < 1e-4 || e > 1e15) && (o = "scientific"),
                        (s = (function (t, e) {
                            let n = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
                            return Math.abs(n) >= 1 && t !== Math.floor(t) && (n = t - Math.floor(t)), n;
                        })(t, n));
                }
                const r = $(Math.abs(s)),
                    a = Math.max(Math.min(-1 * Math.floor(r), 20), 0),
                    l = { notation: o, minimumFractionDigits: a, maximumFractionDigits: a };
                return Object.assign(l, this.options.ticks.format), rn(t, i, l);
            },
            logarithmic(t, e, n) {
                if (0 === t) return "0";
                const i = t / Math.pow(10, Math.floor($(t)));
                return 1 === i || 2 === i || 5 === i ? Ai.numeric.call(this, t, e, n) : "";
            },
        };
        var Ei = { formatters: Ai };
        function Li(t, e) {
            const i = t.options.ticks,
                o =
                    i.maxTicksLimit ||
                    (function (t) {
                        const e = t.options.offset,
                            n = t._tickSize(),
                            i = t._length / n + (e ? 0 : 1),
                            o = t._maxLength / n;
                        return Math.floor(Math.min(i, o));
                    })(t),
                s = i.major.enabled
                    ? (function (t) {
                          const e = [];
                          let n, i;
                          for (n = 0, i = t.length; n < i; n++) t[n].major && e.push(n);
                          return e;
                      })(e)
                    : [],
                r = s.length,
                a = s[0],
                l = s[r - 1],
                c = [];
            if (r > o)
                return (
                    (function (t, e, n, i) {
                        let o,
                            s = 0,
                            r = n[0];
                        for (i = Math.ceil(i), o = 0; o < t.length; o++) o === r && (e.push(t[o]), s++, (r = n[s * i]));
                    })(e, c, s, r / o),
                    c
                );
            const h = (function (t, e, n) {
                const i = (function (t) {
                        const e = t.length;
                        let n, i;
                        if (e < 2) return !1;
                        for (i = t[0], n = 1; n < e; ++n) if (t[n] - t[n - 1] !== i) return !1;
                        return i;
                    })(t),
                    o = e.length / n;
                if (!i) return Math.max(o, 1);
                const s = j(i);
                for (let t = 0, e = s.length - 1; t < e; t++) {
                    const e = s[t];
                    if (e > o) return e;
                }
                return Math.max(o, 1);
            })(s, e, o);
            if (r > 0) {
                let t, i;
                const o = r > 1 ? Math.round((l - a) / (r - 1)) : null;
                for (Oi(e, c, h, n(o) ? 0 : a - o, a), t = 0, i = r - 1; t < i; t++) Oi(e, c, h, s[t], s[t + 1]);
                return Oi(e, c, h, l, n(o) ? e.length : l + o), c;
            }
            return Oi(e, c, h), c;
        }
        function Oi(t, e, n, i, o) {
            const s = a(i, 0),
                r = Math.min(a(o, t.length), t.length);
            let l,
                c,
                h,
                u = 0;
            for (n = Math.ceil(n), o && ((l = o - i), (n = l / Math.floor(l / n))), h = s; h < 0; ) u++, (h = Math.round(s + u * n));
            for (c = Math.max(s, 0); c < r; c++) c === h && (e.push(t[c]), u++, (h = Math.round(s + u * n)));
        }
        ee.set("scale", {
            display: !0,
            offset: !1,
            reverse: !1,
            beginAtZero: !1,
            bounds: "ticks",
            grace: 0,
            grid: {
                display: !0,
                lineWidth: 1,
                drawBorder: !0,
                drawOnChartArea: !0,
                drawTicks: !0,
                tickLength: 8,
                tickWidth: (t, e) => e.lineWidth,
                tickColor: (t, e) => e.color,
                offset: !1,
                borderDash: [],
                borderDashOffset: 0,
                borderWidth: 1,
            },
            title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
            ticks: {
                minRotation: 0,
                maxRotation: 50,
                mirror: !1,
                textStrokeWidth: 0,
                textStrokeColor: "",
                padding: 3,
                display: !0,
                autoSkip: !0,
                autoSkipPadding: 3,
                labelOffset: 0,
                callback: Ei.formatters.values,
                minor: {},
                major: {},
                align: "center",
                crossAlign: "near",
                showLabelBackdrop: !1,
                backdropColor: "rgba(255, 255, 255, 0.75)",
                backdropPadding: 2,
            },
        }),
            ee.route("scale.ticks", "color", "", "color"),
            ee.route("scale.grid", "color", "", "borderColor"),
            ee.route("scale.grid", "borderColor", "", "borderColor"),
            ee.route("scale.title", "color", "", "color"),
            ee.describe("scale", { _fallback: !1, _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t, _indexable: (t) => "borderDash" !== t && "tickBorderDash" !== t }),
            ee.describe("scales", { _fallback: "scale" }),
            ee.describe("scale.ticks", { _scriptable: (t) => "backdropPadding" !== t && "callback" !== t, _indexable: (t) => "backdropPadding" !== t });
        const Ri = (t, e, n) => ("top" === e || "left" === e ? t[e] + n : t[e] - n);
        function $i(t, e) {
            const n = [],
                i = t.length / e,
                o = t.length;
            let s = 0;
            for (; s < o; s += i) n.push(t[Math.floor(s)]);
            return n;
        }
        function Ii(t, e, n) {
            const i = t.ticks.length,
                o = Math.min(e, i - 1),
                s = t._startPixel,
                r = t._endPixel,
                a = 1e-6;
            let l,
                c = t.getPixelForTick(o);
            if (!(n && ((l = 1 === i ? Math.max(c - s, r - c) : 0 === e ? (t.getPixelForTick(1) - c) / 2 : (c - t.getPixelForTick(o - 1)) / 2), (c += o < e ? l : -l), c < s - a || c > r + a))) return c;
        }
        function Fi(t) {
            return t.drawTicks ? t.tickLength : 0;
        }
        function ji(t, e) {
            if (!t.display) return 0;
            const n = pn(t.font, e),
                o = fn(t.padding);
            return (i(t.text) ? t.text.length : 1) * n.lineHeight + o.height;
        }
        function zi(t, e, n) {
            let i = ut(t);
            return ((n && "right" !== e) || (!n && "right" === e)) && (i = ((t) => ("left" === t ? "right" : "right" === t ? "left" : t))(i)), i;
        }
        class Ni extends Di {
            constructor(t) {
                super(),
                    (this.id = t.id),
                    (this.type = t.type),
                    (this.options = void 0),
                    (this.ctx = t.ctx),
                    (this.chart = t.chart),
                    (this.top = void 0),
                    (this.bottom = void 0),
                    (this.left = void 0),
                    (this.right = void 0),
                    (this.width = void 0),
                    (this.height = void 0),
                    (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
                    (this.maxWidth = void 0),
                    (this.maxHeight = void 0),
                    (this.paddingTop = void 0),
                    (this.paddingBottom = void 0),
                    (this.paddingLeft = void 0),
                    (this.paddingRight = void 0),
                    (this.axis = void 0),
                    (this.labelRotation = void 0),
                    (this.min = void 0),
                    (this.max = void 0),
                    (this._range = void 0),
                    (this.ticks = []),
                    (this._gridLineItems = null),
                    (this._labelItems = null),
                    (this._labelSizes = null),
                    (this._length = 0),
                    (this._maxLength = 0),
                    (this._longestTextCache = {}),
                    (this._startPixel = void 0),
                    (this._endPixel = void 0),
                    (this._reversePixels = !1),
                    (this._userMax = void 0),
                    (this._userMin = void 0),
                    (this._suggestedMax = void 0),
                    (this._suggestedMin = void 0),
                    (this._ticksLength = 0),
                    (this._borderValue = 0),
                    (this._cache = {}),
                    (this._dataLimitsCached = !1),
                    (this.$context = void 0);
            }
            init(t) {
                (this.options = t.setContext(this.getContext())),
                    (this.axis = t.axis),
                    (this._userMin = this.parse(t.min)),
                    (this._userMax = this.parse(t.max)),
                    (this._suggestedMin = this.parse(t.suggestedMin)),
                    (this._suggestedMax = this.parse(t.suggestedMax));
            }
            parse(t, e) {
                return t;
            }
            getUserBounds() {
                let { _userMin: t, _userMax: e, _suggestedMin: n, _suggestedMax: i } = this;
                return (
                    (t = r(t, Number.POSITIVE_INFINITY)), (e = r(e, Number.NEGATIVE_INFINITY)), (n = r(n, Number.POSITIVE_INFINITY)), (i = r(i, Number.NEGATIVE_INFINITY)), { min: r(t, n), max: r(e, i), minDefined: s(t), maxDefined: s(e) }
                );
            }
            getMinMax(t) {
                let e,
                    { min: n, max: i, minDefined: o, maxDefined: s } = this.getUserBounds();
                if (o && s) return { min: n, max: i };
                const a = this.getMatchingVisibleMetas();
                for (let r = 0, l = a.length; r < l; ++r) (e = a[r].controller.getMinMax(this, t)), o || (n = Math.min(n, e.min)), s || (i = Math.max(i, e.max));
                return (n = s && n > i ? i : n), (i = o && n > i ? n : i), { min: r(n, r(i, n)), max: r(i, r(n, i)) };
            }
            getPadding() {
                return { left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0 };
            }
            getTicks() {
                return this.ticks;
            }
            getLabels() {
                const t = this.chart.data;
                return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
            }
            beforeLayout() {
                (this._cache = {}), (this._dataLimitsCached = !1);
            }
            beforeUpdate() {
                h(this.options.beforeUpdate, [this]);
            }
            update(t, e, n) {
                const { beginAtZero: i, grace: o, ticks: s } = this.options,
                    r = s.sampleSize;
                this.beforeUpdate(),
                    (this.maxWidth = t),
                    (this.maxHeight = e),
                    (this._margins = n = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, n)),
                    (this.ticks = null),
                    (this._labelSizes = null),
                    (this._gridLineItems = null),
                    (this._labelItems = null),
                    this.beforeSetDimensions(),
                    this.setDimensions(),
                    this.afterSetDimensions(),
                    (this._maxLength = this.isHorizontal() ? this.width + n.left + n.right : this.height + n.top + n.bottom),
                    this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), (this._range = mn(this, o, i)), (this._dataLimitsCached = !0)),
                    this.beforeBuildTicks(),
                    (this.ticks = this.buildTicks() || []),
                    this.afterBuildTicks();
                const a = r < this.ticks.length;
                this._convertTicksToLabels(a ? $i(this.ticks, r) : this.ticks),
                    this.configure(),
                    this.beforeCalculateLabelRotation(),
                    this.calculateLabelRotation(),
                    this.afterCalculateLabelRotation(),
                    s.display && (s.autoSkip || "auto" === s.source) && ((this.ticks = Li(this, this.ticks)), (this._labelSizes = null), this.afterAutoSkip()),
                    a && this._convertTicksToLabels(this.ticks),
                    this.beforeFit(),
                    this.fit(),
                    this.afterFit(),
                    this.afterUpdate();
            }
            configure() {
                let t,
                    e,
                    n = this.options.reverse;
                this.isHorizontal() ? ((t = this.left), (e = this.right)) : ((t = this.top), (e = this.bottom), (n = !n)),
                    (this._startPixel = t),
                    (this._endPixel = e),
                    (this._reversePixels = n),
                    (this._length = e - t),
                    (this._alignToPixels = this.options.alignToPixels);
            }
            afterUpdate() {
                h(this.options.afterUpdate, [this]);
            }
            beforeSetDimensions() {
                h(this.options.beforeSetDimensions, [this]);
            }
            setDimensions() {
                this.isHorizontal() ? ((this.width = this.maxWidth), (this.left = 0), (this.right = this.width)) : ((this.height = this.maxHeight), (this.top = 0), (this.bottom = this.height)),
                    (this.paddingLeft = 0),
                    (this.paddingTop = 0),
                    (this.paddingRight = 0),
                    (this.paddingBottom = 0);
            }
            afterSetDimensions() {
                h(this.options.afterSetDimensions, [this]);
            }
            _callHooks(t) {
                this.chart.notifyPlugins(t, this.getContext()), h(this.options[t], [this]);
            }
            beforeDataLimits() {
                this._callHooks("beforeDataLimits");
            }
            determineDataLimits() {}
            afterDataLimits() {
                this._callHooks("afterDataLimits");
            }
            beforeBuildTicks() {
                this._callHooks("beforeBuildTicks");
            }
            buildTicks() {
                return [];
            }
            afterBuildTicks() {
                this._callHooks("afterBuildTicks");
            }
            beforeTickToLabelConversion() {
                h(this.options.beforeTickToLabelConversion, [this]);
            }
            generateTickLabels(t) {
                const e = this.options.ticks;
                let n, i, o;
                for (n = 0, i = t.length; n < i; n++) (o = t[n]), (o.label = h(e.callback, [o.value, n, t], this));
            }
            afterTickToLabelConversion() {
                h(this.options.afterTickToLabelConversion, [this]);
            }
            beforeCalculateLabelRotation() {
                h(this.options.beforeCalculateLabelRotation, [this]);
            }
            calculateLabelRotation() {
                const t = this.options,
                    e = t.ticks,
                    n = this.ticks.length,
                    i = e.minRotation || 0,
                    o = e.maxRotation;
                let s,
                    r,
                    a,
                    l = i;
                if (!this._isVisible() || !e.display || i >= o || n <= 1 || !this.isHorizontal()) return void (this.labelRotation = i);
                const c = this._getLabelSizes(),
                    h = c.widest.width,
                    u = c.highest.height,
                    d = Z(this.chart.width - h, 0, this.maxWidth);
                (s = t.offset ? this.maxWidth / n : d / (n - 1)),
                    h + 6 > s &&
                        ((s = d / (n - (t.offset ? 0.5 : 1))),
                        (r = this.maxHeight - Fi(t.grid) - e.padding - ji(t.title, this.chart.options.font)),
                        (a = Math.sqrt(h * h + u * u)),
                        (l = V(Math.min(Math.asin(Z((c.highest.height + 6) / s, -1, 1)), Math.asin(Z(r / a, -1, 1)) - Math.asin(Z(u / a, -1, 1))))),
                        (l = Math.max(i, Math.min(o, l)))),
                    (this.labelRotation = l);
            }
            afterCalculateLabelRotation() {
                h(this.options.afterCalculateLabelRotation, [this]);
            }
            afterAutoSkip() {}
            beforeFit() {
                h(this.options.beforeFit, [this]);
            }
            fit() {
                const t = { width: 0, height: 0 },
                    {
                        chart: e,
                        options: { ticks: n, title: i, grid: o },
                    } = this,
                    s = this._isVisible(),
                    r = this.isHorizontal();
                if (s) {
                    const s = ji(i, e.options.font);
                    if ((r ? ((t.width = this.maxWidth), (t.height = Fi(o) + s)) : ((t.height = this.maxHeight), (t.width = Fi(o) + s)), n.display && this.ticks.length)) {
                        const { first: e, last: i, widest: o, highest: s } = this._getLabelSizes(),
                            a = 2 * n.padding,
                            l = W(this.labelRotation),
                            c = Math.cos(l),
                            h = Math.sin(l);
                        if (r) {
                            const e = n.mirror ? 0 : h * o.width + c * s.height;
                            t.height = Math.min(this.maxHeight, t.height + e + a);
                        } else {
                            const e = n.mirror ? 0 : c * o.width + h * s.height;
                            t.width = Math.min(this.maxWidth, t.width + e + a);
                        }
                        this._calculatePadding(e, i, h, c);
                    }
                }
                this._handleMargins(),
                    r
                        ? ((this.width = this._length = e.width - this._margins.left - this._margins.right), (this.height = t.height))
                        : ((this.width = t.width), (this.height = this._length = e.height - this._margins.top - this._margins.bottom));
            }
            _calculatePadding(t, e, n, i) {
                const {
                        ticks: { align: o, padding: s },
                        position: r,
                    } = this.options,
                    a = 0 !== this.labelRotation,
                    l = "top" !== r && "x" === this.axis;
                if (this.isHorizontal()) {
                    const r = this.getPixelForTick(0) - this.left,
                        c = this.right - this.getPixelForTick(this.ticks.length - 1);
                    let h = 0,
                        u = 0;
                    a ? (l ? ((h = i * t.width), (u = n * e.height)) : ((h = n * t.height), (u = i * e.width))) : "start" === o ? (u = e.width) : "end" === o ? (h = t.width) : "inner" !== o && ((h = t.width / 2), (u = e.width / 2)),
                        (this.paddingLeft = Math.max(((h - r + s) * this.width) / (this.width - r), 0)),
                        (this.paddingRight = Math.max(((u - c + s) * this.width) / (this.width - c), 0));
                } else {
                    let n = e.height / 2,
                        i = t.height / 2;
                    "start" === o ? ((n = 0), (i = t.height)) : "end" === o && ((n = e.height), (i = 0)), (this.paddingTop = n + s), (this.paddingBottom = i + s);
                }
            }
            _handleMargins() {
                this._margins &&
                    ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
                    (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
                    (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
                    (this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)));
            }
            afterFit() {
                h(this.options.afterFit, [this]);
            }
            isHorizontal() {
                const { axis: t, position: e } = this.options;
                return "top" === e || "bottom" === e || "x" === t;
            }
            isFullSize() {
                return this.options.fullSize;
            }
            _convertTicksToLabels(t) {
                let e, i;
                for (this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, i = t.length; e < i; e++) n(t[e].label) && (t.splice(e, 1), i--, e--);
                this.afterTickToLabelConversion();
            }
            _getLabelSizes() {
                let t = this._labelSizes;
                if (!t) {
                    const e = this.options.ticks.sampleSize;
                    let n = this.ticks;
                    e < n.length && (n = $i(n, e)), (this._labelSizes = t = this._computeLabelSizes(n, n.length));
                }
                return t;
            }
            _computeLabelSizes(t, e) {
                const { ctx: o, _longestTextCache: s } = this,
                    r = [],
                    a = [];
                let l,
                    c,
                    h,
                    d,
                    f,
                    p,
                    g,
                    m,
                    b,
                    x,
                    y,
                    v = 0,
                    w = 0;
                for (l = 0; l < e; ++l) {
                    if (((d = t[l].label), (f = this._resolveTickFontOptions(l)), (o.font = p = f.string), (g = s[p] = s[p] || { data: {}, gc: [] }), (m = f.lineHeight), (b = x = 0), n(d) || i(d))) {
                        if (i(d)) for (c = 0, h = d.length; c < h; ++c) (y = d[c]), n(y) || i(y) || ((b = me(o, g.data, g.gc, b, y)), (x += m));
                    } else (b = me(o, g.data, g.gc, b, d)), (x = m);
                    r.push(b), a.push(x), (v = Math.max(b, v)), (w = Math.max(x, w));
                }
                !(function (t, e) {
                    u(t, (t) => {
                        const n = t.gc,
                            i = n.length / 2;
                        let o;
                        if (i > e) {
                            for (o = 0; o < i; ++o) delete t.data[n[o]];
                            n.splice(0, i);
                        }
                    });
                })(s, e);
                const _ = r.indexOf(v),
                    S = a.indexOf(w),
                    C = (t) => ({ width: r[t] || 0, height: a[t] || 0 });
                return { first: C(0), last: C(e - 1), widest: C(_), highest: C(S), widths: r, heights: a };
            }
            getLabelForValue(t) {
                return t;
            }
            getPixelForValue(t, e) {
                return NaN;
            }
            getValueForPixel(t) {}
            getPixelForTick(t) {
                const e = this.ticks;
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
            }
            getPixelForDecimal(t) {
                this._reversePixels && (t = 1 - t);
                const e = this._startPixel + t * this._length;
                return Q(this._alignToPixels ? xe(this.chart, e, 0) : e);
            }
            getDecimalForPixel(t) {
                const e = (t - this._startPixel) / this._length;
                return this._reversePixels ? 1 - e : e;
            }
            getBasePixel() {
                return this.getPixelForValue(this.getBaseValue());
            }
            getBaseValue() {
                const { min: t, max: e } = this;
                return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
            }
            getContext(t) {
                const e = this.ticks || [];
                if (t >= 0 && t < e.length) {
                    const n = e[t];
                    return (
                        n.$context ||
                        (n.$context = (function (t, e, n) {
                            return bn(t, { tick: n, index: e, type: "tick" });
                        })(this.getContext(), t, n))
                    );
                }
                return this.$context || (this.$context = bn(this.chart.getContext(), { scale: this, type: "scale" }));
            }
            _tickSize() {
                const t = this.options.ticks,
                    e = W(this.labelRotation),
                    n = Math.abs(Math.cos(e)),
                    i = Math.abs(Math.sin(e)),
                    o = this._getLabelSizes(),
                    s = t.autoSkipPadding || 0,
                    r = o ? o.widest.width + s : 0,
                    a = o ? o.highest.height + s : 0;
                return this.isHorizontal() ? (a * n > r * i ? r / n : a / i) : a * i < r * n ? a / n : r / i;
            }
            _isVisible() {
                const t = this.options.display;
                return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
            }
            _computeGridLineItems(t) {
                const e = this.axis,
                    n = this.chart,
                    i = this.options,
                    { grid: s, position: r } = i,
                    l = s.offset,
                    c = this.isHorizontal(),
                    h = this.ticks.length + (l ? 1 : 0),
                    u = Fi(s),
                    d = [],
                    f = s.setContext(this.getContext()),
                    p = f.drawBorder ? f.borderWidth : 0,
                    g = p / 2,
                    m = function (t) {
                        return xe(n, t, p);
                    };
                let b, x, y, v, w, _, S, C, k, T, M, P;
                if ("top" === r) (b = m(this.bottom)), (_ = this.bottom - u), (C = b - g), (T = m(t.top) + g), (P = t.bottom);
                else if ("bottom" === r) (b = m(this.top)), (T = t.top), (P = m(t.bottom) - g), (_ = b + g), (C = this.top + u);
                else if ("left" === r) (b = m(this.right)), (w = this.right - u), (S = b - g), (k = m(t.left) + g), (M = t.right);
                else if ("right" === r) (b = m(this.left)), (k = t.left), (M = m(t.right) - g), (w = b + g), (S = this.left + u);
                else if ("x" === e) {
                    if ("center" === r) b = m((t.top + t.bottom) / 2 + 0.5);
                    else if (o(r)) {
                        const t = Object.keys(r)[0],
                            e = r[t];
                        b = m(this.chart.scales[t].getPixelForValue(e));
                    }
                    (T = t.top), (P = t.bottom), (_ = b + g), (C = _ + u);
                } else if ("y" === e) {
                    if ("center" === r) b = m((t.left + t.right) / 2);
                    else if (o(r)) {
                        const t = Object.keys(r)[0],
                            e = r[t];
                        b = m(this.chart.scales[t].getPixelForValue(e));
                    }
                    (w = b - g), (S = w - u), (k = t.left), (M = t.right);
                }
                const D = a(i.ticks.maxTicksLimit, h),
                    A = Math.max(1, Math.ceil(h / D));
                for (x = 0; x < h; x += A) {
                    const t = s.setContext(this.getContext(x)),
                        e = t.lineWidth,
                        i = t.color,
                        o = t.borderDash || [],
                        r = t.borderDashOffset,
                        a = t.tickWidth,
                        h = t.tickColor,
                        u = t.tickBorderDash || [],
                        f = t.tickBorderDashOffset;
                    (y = Ii(this, x, l)),
                        void 0 !== y &&
                            ((v = xe(n, y, e)),
                            c ? (w = S = k = M = v) : (_ = C = T = P = v),
                            d.push({ tx1: w, ty1: _, tx2: S, ty2: C, x1: k, y1: T, x2: M, y2: P, width: e, color: i, borderDash: o, borderDashOffset: r, tickWidth: a, tickColor: h, tickBorderDash: u, tickBorderDashOffset: f }));
                }
                return (this._ticksLength = h), (this._borderValue = b), d;
            }
            _computeLabelItems(t) {
                const e = this.axis,
                    n = this.options,
                    { position: s, ticks: r } = n,
                    a = this.isHorizontal(),
                    l = this.ticks,
                    { align: c, crossAlign: h, padding: u, mirror: d } = r,
                    f = Fi(n.grid),
                    p = f + u,
                    g = d ? -u : p,
                    m = -W(this.labelRotation),
                    b = [];
                let x,
                    y,
                    v,
                    w,
                    _,
                    S,
                    C,
                    k,
                    T,
                    M,
                    P,
                    D,
                    A = "middle";
                if ("top" === s) (S = this.bottom - g), (C = this._getXAxisLabelAlignment());
                else if ("bottom" === s) (S = this.top + g), (C = this._getXAxisLabelAlignment());
                else if ("left" === s) {
                    const t = this._getYAxisLabelAlignment(f);
                    (C = t.textAlign), (_ = t.x);
                } else if ("right" === s) {
                    const t = this._getYAxisLabelAlignment(f);
                    (C = t.textAlign), (_ = t.x);
                } else if ("x" === e) {
                    if ("center" === s) S = (t.top + t.bottom) / 2 + p;
                    else if (o(s)) {
                        const t = Object.keys(s)[0],
                            e = s[t];
                        S = this.chart.scales[t].getPixelForValue(e) + p;
                    }
                    C = this._getXAxisLabelAlignment();
                } else if ("y" === e) {
                    if ("center" === s) _ = (t.left + t.right) / 2 - p;
                    else if (o(s)) {
                        const t = Object.keys(s)[0],
                            e = s[t];
                        _ = this.chart.scales[t].getPixelForValue(e);
                    }
                    C = this._getYAxisLabelAlignment(f).textAlign;
                }
                "y" === e && ("start" === c ? (A = "top") : "end" === c && (A = "bottom"));
                const E = this._getLabelSizes();
                for (x = 0, y = l.length; x < y; ++x) {
                    (v = l[x]), (w = v.label);
                    const t = r.setContext(this.getContext(x));
                    (k = this.getPixelForTick(x) + r.labelOffset), (T = this._resolveTickFontOptions(x)), (M = T.lineHeight), (P = i(w) ? w.length : 1);
                    const e = P / 2,
                        n = t.color,
                        o = t.textStrokeColor,
                        c = t.textStrokeWidth;
                    let u,
                        f = C;
                    if (
                        (a
                            ? ((_ = k),
                              "inner" === C && (f = x === y - 1 ? (this.options.reverse ? "left" : "right") : 0 === x ? (this.options.reverse ? "right" : "left") : "center"),
                              (D =
                                  "top" === s
                                      ? "near" === h || 0 !== m
                                          ? -P * M + M / 2
                                          : "center" === h
                                          ? -E.highest.height / 2 - e * M + M
                                          : -E.highest.height + M / 2
                                      : "near" === h || 0 !== m
                                      ? M / 2
                                      : "center" === h
                                      ? E.highest.height / 2 - e * M
                                      : E.highest.height - P * M),
                              d && (D *= -1))
                            : ((S = k), (D = ((1 - P) * M) / 2)),
                        t.showLabelBackdrop)
                    ) {
                        const e = fn(t.backdropPadding),
                            n = E.heights[x],
                            i = E.widths[x];
                        let o = S + D - e.top,
                            s = _ - e.left;
                        switch (A) {
                            case "middle":
                                o -= n / 2;
                                break;
                            case "bottom":
                                o -= n;
                        }
                        switch (C) {
                            case "center":
                                s -= i / 2;
                                break;
                            case "right":
                                s -= i;
                        }
                        u = { left: s, top: o, width: i + e.width, height: n + e.height, color: t.backdropColor };
                    }
                    b.push({ rotation: m, label: w, font: T, color: n, strokeColor: o, strokeWidth: c, textOffset: D, textAlign: f, textBaseline: A, translation: [_, S], backdrop: u });
                }
                return b;
            }
            _getXAxisLabelAlignment() {
                const { position: t, ticks: e } = this.options;
                if (-W(this.labelRotation)) return "top" === t ? "left" : "right";
                let n = "center";
                return "start" === e.align ? (n = "left") : "end" === e.align ? (n = "right") : "inner" === e.align && (n = "inner"), n;
            }
            _getYAxisLabelAlignment(t) {
                const {
                        position: e,
                        ticks: { crossAlign: n, mirror: i, padding: o },
                    } = this.options,
                    s = t + o,
                    r = this._getLabelSizes().widest.width;
                let a, l;
                return (
                    "left" === e
                        ? i
                            ? ((l = this.right + o), "near" === n ? (a = "left") : "center" === n ? ((a = "center"), (l += r / 2)) : ((a = "right"), (l += r)))
                            : ((l = this.right - s), "near" === n ? (a = "right") : "center" === n ? ((a = "center"), (l -= r / 2)) : ((a = "left"), (l = this.left)))
                        : "right" === e
                        ? i
                            ? ((l = this.left + o), "near" === n ? (a = "right") : "center" === n ? ((a = "center"), (l -= r / 2)) : ((a = "left"), (l -= r)))
                            : ((l = this.left + s), "near" === n ? (a = "left") : "center" === n ? ((a = "center"), (l += r / 2)) : ((a = "right"), (l = this.right)))
                        : (a = "right"),
                    { textAlign: a, x: l }
                );
            }
            _computeLabelArea() {
                if (this.options.ticks.mirror) return;
                const t = this.chart,
                    e = this.options.position;
                return "left" === e || "right" === e ? { top: 0, left: this.left, bottom: t.height, right: this.right } : "top" === e || "bottom" === e ? { top: this.top, left: 0, bottom: this.bottom, right: t.width } : void 0;
            }
            drawBackground() {
                const {
                    ctx: t,
                    options: { backgroundColor: e },
                    left: n,
                    top: i,
                    width: o,
                    height: s,
                } = this;
                e && (t.save(), (t.fillStyle = e), t.fillRect(n, i, o, s), t.restore());
            }
            getLineWidthForValue(t) {
                const e = this.options.grid;
                if (!this._isVisible() || !e.display) return 0;
                const n = this.ticks.findIndex((e) => e.value === t);
                return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0;
            }
            drawGrid(t) {
                const e = this.options.grid,
                    n = this.ctx,
                    i = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
                let o, s;
                const r = (t, e, i) => {
                    i.width &&
                        i.color &&
                        (n.save(),
                        (n.lineWidth = i.width),
                        (n.strokeStyle = i.color),
                        n.setLineDash(i.borderDash || []),
                        (n.lineDashOffset = i.borderDashOffset),
                        n.beginPath(),
                        n.moveTo(t.x, t.y),
                        n.lineTo(e.x, e.y),
                        n.stroke(),
                        n.restore());
                };
                if (e.display)
                    for (o = 0, s = i.length; o < s; ++o) {
                        const t = i[o];
                        e.drawOnChartArea && r({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
                            e.drawTicks && r({ x: t.tx1, y: t.ty1 }, { x: t.tx2, y: t.ty2 }, { color: t.tickColor, width: t.tickWidth, borderDash: t.tickBorderDash, borderDashOffset: t.tickBorderDashOffset });
                    }
            }
            drawBorder() {
                const {
                        chart: t,
                        ctx: e,
                        options: { grid: n },
                    } = this,
                    i = n.setContext(this.getContext()),
                    o = n.drawBorder ? i.borderWidth : 0;
                if (!o) return;
                const s = n.setContext(this.getContext(0)).lineWidth,
                    r = this._borderValue;
                let a, l, c, h;
                this.isHorizontal() ? ((a = xe(t, this.left, o) - o / 2), (l = xe(t, this.right, s) + s / 2), (c = h = r)) : ((c = xe(t, this.top, o) - o / 2), (h = xe(t, this.bottom, s) + s / 2), (a = l = r)),
                    e.save(),
                    (e.lineWidth = i.borderWidth),
                    (e.strokeStyle = i.borderColor),
                    e.beginPath(),
                    e.moveTo(a, c),
                    e.lineTo(l, h),
                    e.stroke(),
                    e.restore();
            }
            drawLabels(t) {
                if (!this.options.ticks.display) return;
                const e = this.ctx,
                    n = this._computeLabelArea();
                n && Se(e, n);
                const i = this._labelItems || (this._labelItems = this._computeLabelItems(t));
                let o, s;
                for (o = 0, s = i.length; o < s; ++o) {
                    const t = i[o],
                        n = t.font,
                        s = t.label;
                    t.backdrop && ((e.fillStyle = t.backdrop.color), e.fillRect(t.backdrop.left, t.backdrop.top, t.backdrop.width, t.backdrop.height)), Me(e, s, 0, t.textOffset, n, t);
                }
                n && Ce(e);
            }
            drawTitle() {
                const {
                    ctx: t,
                    options: { position: e, title: n, reverse: s },
                } = this;
                if (!n.display) return;
                const r = pn(n.font),
                    a = fn(n.padding),
                    l = n.align;
                let c = r.lineHeight / 2;
                "bottom" === e || "center" === e || o(e) ? ((c += a.bottom), i(n.text) && (c += r.lineHeight * (n.text.length - 1))) : (c += a.top);
                const { titleX: h, titleY: u, maxWidth: d, rotation: f } = (function (t, e, n, i) {
                    const { top: s, left: r, bottom: a, right: l, chart: c } = t,
                        { chartArea: h, scales: u } = c;
                    let d,
                        f,
                        p,
                        g = 0;
                    const m = a - s,
                        b = l - r;
                    if (t.isHorizontal()) {
                        if (((f = dt(i, r, l)), o(n))) {
                            const t = Object.keys(n)[0],
                                i = n[t];
                            p = u[t].getPixelForValue(i) + m - e;
                        } else p = "center" === n ? (h.bottom + h.top) / 2 + m - e : Ri(t, n, e);
                        d = l - r;
                    } else {
                        if (o(n)) {
                            const t = Object.keys(n)[0],
                                i = n[t];
                            f = u[t].getPixelForValue(i) - b + e;
                        } else f = "center" === n ? (h.left + h.right) / 2 - b + e : Ri(t, n, e);
                        (p = dt(i, a, s)), (g = "left" === n ? -L : L);
                    }
                    return { titleX: f, titleY: p, maxWidth: d, rotation: g };
                })(this, c, e, l);
                Me(t, n.text, 0, 0, r, { color: n.color, maxWidth: d, rotation: f, textAlign: zi(l, e, s), textBaseline: "middle", translation: [h, u] });
            }
            draw(t) {
                this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
            }
            _layers() {
                const t = this.options,
                    e = (t.ticks && t.ticks.z) || 0,
                    n = a(t.grid && t.grid.z, -1);
                return this._isVisible() && this.draw === Ni.prototype.draw
                    ? [
                          {
                              z: n,
                              draw: (t) => {
                                  this.drawBackground(), this.drawGrid(t), this.drawTitle();
                              },
                          },
                          {
                              z: n + 1,
                              draw: () => {
                                  this.drawBorder();
                              },
                          },
                          {
                              z: e,
                              draw: (t) => {
                                  this.drawLabels(t);
                              },
                          },
                      ]
                    : [
                          {
                              z: e,
                              draw: (t) => {
                                  this.draw(t);
                              },
                          },
                      ];
            }
            getMatchingVisibleMetas(t) {
                const e = this.chart.getSortedVisibleDatasetMetas(),
                    n = this.axis + "AxisID",
                    i = [];
                let o, s;
                for (o = 0, s = e.length; o < s; ++o) {
                    const s = e[o];
                    s[n] !== this.id || (t && s.type !== t) || i.push(s);
                }
                return i;
            }
            _resolveTickFontOptions(t) {
                return pn(this.options.ticks.setContext(this.getContext(t)).font);
            }
            _maxDigits() {
                const t = this._resolveTickFontOptions(0).lineHeight;
                return (this.isHorizontal() ? this.width : this.height) / t;
            }
        }
        class Hi {
            constructor(t, e, n) {
                (this.type = t), (this.scope = e), (this.override = n), (this.items = Object.create(null));
            }
            isForType(t) {
                return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
            }
            register(t) {
                const e = Object.getPrototypeOf(t);
                let n;
                (function (t) {
                    return "id" in t && "defaults" in t;
                })(e) && (n = this.register(e));
                const i = this.items,
                    o = t.id,
                    s = this.scope + "." + o;
                if (!o) throw new Error("class does not have id: " + t);
                return (
                    o in i ||
                        ((i[o] = t),
                        (function (t, e, n) {
                            const i = m(Object.create(null), [n ? ee.get(n) : {}, ee.get(e), t.defaults]);
                            ee.set(e, i),
                                t.defaultRoutes &&
                                    (function (t, e) {
                                        Object.keys(e).forEach((n) => {
                                            const i = n.split("."),
                                                o = i.pop(),
                                                s = [t].concat(i).join("."),
                                                r = e[n].split("."),
                                                a = r.pop(),
                                                l = r.join(".");
                                            ee.route(s, o, l, a);
                                        });
                                    })(e, t.defaultRoutes),
                                t.descriptors && ee.describe(e, t.descriptors);
                        })(t, s, n),
                        this.override && ee.override(t.id, t.overrides)),
                    s
                );
            }
            get(t) {
                return this.items[t];
            }
            unregister(t) {
                const e = this.items,
                    n = t.id,
                    i = this.scope;
                n in e && delete e[n], i && n in ee[i] && (delete ee[i][n], this.override && delete Zt[n]);
            }
        }
        var Bi = new (class {
            constructor() {
                (this.controllers = new Hi(Pi, "datasets", !0)),
                    (this.elements = new Hi(Di, "elements")),
                    (this.plugins = new Hi(Object, "plugins")),
                    (this.scales = new Hi(Ni, "scales")),
                    (this._typedRegistries = [this.controllers, this.scales, this.elements]);
            }
            add(...t) {
                this._each("register", t);
            }
            remove(...t) {
                this._each("unregister", t);
            }
            addControllers(...t) {
                this._each("register", t, this.controllers);
            }
            addElements(...t) {
                this._each("register", t, this.elements);
            }
            addPlugins(...t) {
                this._each("register", t, this.plugins);
            }
            addScales(...t) {
                this._each("register", t, this.scales);
            }
            getController(t) {
                return this._get(t, this.controllers, "controller");
            }
            getElement(t) {
                return this._get(t, this.elements, "element");
            }
            getPlugin(t) {
                return this._get(t, this.plugins, "plugin");
            }
            getScale(t) {
                return this._get(t, this.scales, "scale");
            }
            removeControllers(...t) {
                this._each("unregister", t, this.controllers);
            }
            removeElements(...t) {
                this._each("unregister", t, this.elements);
            }
            removePlugins(...t) {
                this._each("unregister", t, this.plugins);
            }
            removeScales(...t) {
                this._each("unregister", t, this.scales);
            }
            _each(t, e, n) {
                [...e].forEach((e) => {
                    const i = n || this._getRegistryForType(e);
                    n || i.isForType(e) || (i === this.plugins && e.id)
                        ? this._exec(t, i, e)
                        : u(e, (e) => {
                              const i = n || this._getRegistryForType(e);
                              this._exec(t, i, e);
                          });
                });
            }
            _exec(t, e, n) {
                const i = _(t);
                h(n["before" + i], [], n), e[t](n), h(n["after" + i], [], n);
            }
            _getRegistryForType(t) {
                for (let e = 0; e < this._typedRegistries.length; e++) {
                    const n = this._typedRegistries[e];
                    if (n.isForType(t)) return n;
                }
                return this.plugins;
            }
            _get(t, e, n) {
                const i = e.get(t);
                if (void 0 === i) throw new Error('"' + t + '" is not a registered ' + n + ".");
                return i;
            }
        })();
        class Wi {
            constructor() {
                this._init = [];
            }
            notify(t, e, n, i) {
                "beforeInit" === e && ((this._init = this._createDescriptors(t, !0)), this._notify(this._init, t, "install"));
                const o = i ? this._descriptors(t).filter(i) : this._descriptors(t),
                    s = this._notify(o, t, e, n);
                return "afterDestroy" === e && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), s;
            }
            _notify(t, e, n, i) {
                i = i || {};
                for (const o of t) {
                    const t = o.plugin;
                    if (!1 === h(t[n], [e, i, o.options], t) && i.cancelable) return !1;
                }
                return !0;
            }
            invalidate() {
                n(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
            }
            _descriptors(t) {
                if (this._cache) return this._cache;
                const e = (this._cache = this._createDescriptors(t));
                return this._notifyStateChanges(t), e;
            }
            _createDescriptors(t, e) {
                const n = t && t.config,
                    i = a(n.options && n.options.plugins, {}),
                    o = (function (t) {
                        const e = {},
                            n = [],
                            i = Object.keys(Bi.plugins.items);
                        for (let t = 0; t < i.length; t++) n.push(Bi.getPlugin(i[t]));
                        const o = t.plugins || [];
                        for (let t = 0; t < o.length; t++) {
                            const i = o[t];
                            -1 === n.indexOf(i) && (n.push(i), (e[i.id] = !0));
                        }
                        return { plugins: n, localIds: e };
                    })(n);
                return !1 !== i || e
                    ? (function (t, { plugins: e, localIds: n }, i, o) {
                          const s = [],
                              r = t.getContext();
                          for (const a of e) {
                              const e = a.id,
                                  l = Vi(i[e], o);
                              null !== l && s.push({ plugin: a, options: qi(t.config, { plugin: a, local: n[e] }, l, r) });
                          }
                          return s;
                      })(t, o, i, e)
                    : [];
            }
            _notifyStateChanges(t) {
                const e = this._oldCache || [],
                    n = this._cache,
                    i = (t, e) => t.filter((t) => !e.some((e) => t.plugin.id === e.plugin.id));
                this._notify(i(e, n), t, "stop"), this._notify(i(n, e), t, "start");
            }
        }
        function Vi(t, e) {
            return e || !1 !== t ? (!0 === t ? {} : t) : null;
        }
        function qi(t, { plugin: e, local: n }, i, o) {
            const s = t.pluginScopeKeys(e),
                r = t.getOptionScopes(i, s);
            return n && e.defaults && r.push(e.defaults), t.createResolver(r, o, [""], { scriptable: !1, indexable: !1, allKeys: !0 });
        }
        function Yi(t, e) {
            const n = ee.datasets[t] || {};
            return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || n.indexAxis || "x";
        }
        function Xi(t, e) {
            return "x" === t || "y" === t ? t : e.axis || ("top" === (n = e.position) || "bottom" === n ? "x" : "left" === n || "right" === n ? "y" : void 0) || t.charAt(0).toLowerCase();
            var n;
        }
        function Ui(t) {
            const e = t.options || (t.options = {});
            (e.plugins = a(e.plugins, {})),
                (e.scales = (function (t, e) {
                    const n = Zt[t.type] || { scales: {} },
                        i = e.scales || {},
                        s = Yi(t.type, e),
                        r = Object.create(null),
                        a = Object.create(null);
                    return (
                        Object.keys(i).forEach((t) => {
                            const e = i[t];
                            if (!o(e)) return console.error(`Invalid scale configuration for scale: ${t}`);
                            if (e._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${t}`);
                            const l = Xi(t, e),
                                c = (function (t, e) {
                                    return t === e ? "_index_" : "_value_";
                                })(l, s),
                                h = n.scales || {};
                            (r[l] = r[l] || t), (a[t] = b(Object.create(null), [{ axis: l }, e, h[l], h[c]]));
                        }),
                        t.data.datasets.forEach((n) => {
                            const o = n.type || t.type,
                                s = n.indexAxis || Yi(o, e),
                                l = (Zt[o] || {}).scales || {};
                            Object.keys(l).forEach((t) => {
                                const e = (function (t, e) {
                                        let n = t;
                                        return "_index_" === t ? (n = e) : "_value_" === t && (n = "x" === e ? "y" : "x"), n;
                                    })(t, s),
                                    o = n[e + "AxisID"] || r[e] || e;
                                (a[o] = a[o] || Object.create(null)), b(a[o], [{ axis: e }, i[o], l[t]]);
                            });
                        }),
                        Object.keys(a).forEach((t) => {
                            const e = a[t];
                            b(e, [ee.scales[e.type], ee.scale]);
                        }),
                        a
                    );
                })(t, e));
        }
        function Ki(t) {
            return ((t = t || {}).datasets = t.datasets || []), (t.labels = t.labels || []), t;
        }
        const Gi = new Map(),
            Zi = new Set();
        function Qi(t, e) {
            let n = Gi.get(t);
            return n || ((n = e()), Gi.set(t, n), Zi.add(n)), n;
        }
        const Ji = (t, e, n) => {
            const i = v(e, n);
            void 0 !== i && t.add(i);
        };
        class to {
            constructor(t) {
                (this._config = (function (t) {
                    return ((t = t || {}).data = Ki(t.data)), Ui(t), t;
                })(t)),
                    (this._scopeCache = new Map()),
                    (this._resolverCache = new Map());
            }
            get platform() {
                return this._config.platform;
            }
            get type() {
                return this._config.type;
            }
            set type(t) {
                this._config.type = t;
            }
            get data() {
                return this._config.data;
            }
            set data(t) {
                this._config.data = Ki(t);
            }
            get options() {
                return this._config.options;
            }
            set options(t) {
                this._config.options = t;
            }
            get plugins() {
                return this._config.plugins;
            }
            update() {
                const t = this._config;
                this.clearCache(), Ui(t);
            }
            clearCache() {
                this._scopeCache.clear(), this._resolverCache.clear();
            }
            datasetScopeKeys(t) {
                return Qi(t, () => [[`datasets.${t}`, ""]]);
            }
            datasetAnimationScopeKeys(t, e) {
                return Qi(`${t}.transition.${e}`, () => [
                    [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
                    [`datasets.${t}`, ""],
                ]);
            }
            datasetElementScopeKeys(t, e) {
                return Qi(`${t}-${e}`, () => [[`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]]);
            }
            pluginScopeKeys(t) {
                const e = t.id;
                return Qi(`${this.type}-plugin-${e}`, () => [[`plugins.${e}`, ...(t.additionalOptionScopes || [])]]);
            }
            _cachedScopes(t, e) {
                const n = this._scopeCache;
                let i = n.get(t);
                return (i && !e) || ((i = new Map()), n.set(t, i)), i;
            }
            getOptionScopes(t, e, n) {
                const { options: i, type: o } = this,
                    s = this._cachedScopes(t, n),
                    r = s.get(e);
                if (r) return r;
                const a = new Set();
                e.forEach((e) => {
                    t && (a.add(t), e.forEach((e) => Ji(a, t, e))), e.forEach((t) => Ji(a, i, t)), e.forEach((t) => Ji(a, Zt[o] || {}, t)), e.forEach((t) => Ji(a, ee, t)), e.forEach((t) => Ji(a, Qt, t));
                });
                const l = Array.from(a);
                return 0 === l.length && l.push(Object.create(null)), Zi.has(e) && s.set(e, l), l;
            }
            chartOptionScopes() {
                const { options: t, type: e } = this;
                return [t, Zt[e] || {}, ee.datasets[e] || {}, { type: e }, ee, Qt];
            }
            resolveNamedOptions(t, e, n, o = [""]) {
                const s = { $shared: !0 },
                    { resolver: r, subPrefixes: a } = eo(this._resolverCache, t, o);
                let l = r;
                (function (t, e) {
                    const { isScriptable: n, isIndexable: o } = Le(t);
                    for (const s of e) {
                        const e = n(s),
                            r = o(s),
                            a = (r || e) && t[s];
                        if ((e && (C(a) || no(a))) || (r && i(a))) return !0;
                    }
                    return !1;
                })(r, e) && ((s.$shared = !1), (l = Ee(r, (n = C(n) ? n() : n), this.createResolver(t, n, a))));
                for (const t of e) s[t] = l[t];
                return s;
            }
            createResolver(t, e, n = [""], i) {
                const { resolver: s } = eo(this._resolverCache, t, n);
                return o(e) ? Ee(s, e, void 0, i) : s;
            }
        }
        function eo(t, e, n) {
            let i = t.get(e);
            i || ((i = new Map()), t.set(e, i));
            const o = n.join();
            let s = i.get(o);
            return s || ((s = { resolver: Ae(e, n), subPrefixes: n.filter((t) => !t.toLowerCase().includes("hover")) }), i.set(o, s)), s;
        }
        const no = (t) => o(t) && Object.getOwnPropertyNames(t).reduce((e, n) => e || C(t[n]), !1),
            io = ["top", "bottom", "left", "right", "chartArea"];
        function oo(t, e) {
            return "top" === t || "bottom" === t || (-1 === io.indexOf(t) && "x" === e);
        }
        function so(t, e) {
            return function (n, i) {
                return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t];
            };
        }
        function ro(t) {
            const e = t.chart,
                n = e.options.animation;
            e.notifyPlugins("afterRender"), h(n && n.onComplete, [t], e);
        }
        function ao(t) {
            const e = t.chart,
                n = e.options.animation;
            h(n && n.onProgress, [t], e);
        }
        function lo(t) {
            return ne() && "string" == typeof t ? (t = document.getElementById(t)) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t;
        }
        const co = {},
            ho = (t) => {
                const e = lo(t);
                return Object.values(co)
                    .filter((t) => t.canvas === e)
                    .pop();
            };
        function uo(t, e, n) {
            const i = Object.keys(t);
            for (const o of i) {
                const i = +o;
                if (i >= e) {
                    const s = t[o];
                    delete t[o], (n > 0 || i > e) && (t[i + n] = s);
                }
            }
        }
        class fo {
            constructor(t, n) {
                const i = (this.config = new to(n)),
                    o = lo(t),
                    s = ho(o);
                if (s) throw new Error("Canvas is already in use. Chart with ID '" + s.id + "' must be destroyed before the canvas with ID '" + s.canvas.id + "' can be reused.");
                const r = i.createResolver(i.chartOptionScopes(), this.getContext());
                (this.platform = new (i.platform || hi(o))()), this.platform.updateConfig(i);
                const a = this.platform.acquireContext(o, r.aspectRatio),
                    l = a && a.canvas,
                    c = l && l.height,
                    h = l && l.width;
                (this.id = e()),
                    (this.ctx = a),
                    (this.canvas = l),
                    (this.width = h),
                    (this.height = c),
                    (this._options = r),
                    (this._aspectRatio = this.aspectRatio),
                    (this._layers = []),
                    (this._metasets = []),
                    (this._stacks = void 0),
                    (this.boxes = []),
                    (this.currentDevicePixelRatio = void 0),
                    (this.chartArea = void 0),
                    (this._active = []),
                    (this._lastEvent = void 0),
                    (this._listeners = {}),
                    (this._responsiveListeners = void 0),
                    (this._sortedMetasets = []),
                    (this.scales = {}),
                    (this._plugins = new Wi()),
                    (this.$proxies = {}),
                    (this._hiddenIndices = {}),
                    (this.attached = !1),
                    (this._animationsDisabled = void 0),
                    (this.$context = void 0),
                    (this._doResize = ht((t) => this.update(t), r.resizeDelay || 0)),
                    (this._dataChanges = []),
                    (co[this.id] = this),
                    a && l ? (mt.listen(this, "complete", ro), mt.listen(this, "progress", ao), this._initialize(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item");
            }
            get aspectRatio() {
                const {
                    options: { aspectRatio: t, maintainAspectRatio: e },
                    width: i,
                    height: o,
                    _aspectRatio: s,
                } = this;
                return n(t) ? (e && s ? s : o ? i / o : null) : t;
            }
            get data() {
                return this.config.data;
            }
            set data(t) {
                this.config.data = t;
            }
            get options() {
                return this._options;
            }
            set options(t) {
                this.config.options = t;
            }
            _initialize() {
                return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : de(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
            }
            clear() {
                return ye(this.canvas, this.ctx), this;
            }
            stop() {
                return mt.stop(this), this;
            }
            resize(t, e) {
                mt.running(this) ? (this._resizeBeforeDraw = { width: t, height: e }) : this._resize(t, e);
            }
            _resize(t, e) {
                const n = this.options,
                    i = this.canvas,
                    o = n.maintainAspectRatio && this.aspectRatio,
                    s = this.platform.getMaximumSize(i, t, e, o),
                    r = n.devicePixelRatio || this.platform.getDevicePixelRatio(),
                    a = this.width ? "resize" : "attach";
                (this.width = s.width),
                    (this.height = s.height),
                    (this._aspectRatio = this.aspectRatio),
                    de(this, r, !0) && (this.notifyPlugins("resize", { size: s }), h(n.onResize, [this, s], this), this.attached && this._doResize(a) && this.render());
            }
            ensureScalesHaveIDs() {
                u(this.options.scales || {}, (t, e) => {
                    t.id = e;
                });
            }
            buildOrUpdateScales() {
                const t = this.options,
                    e = t.scales,
                    n = this.scales,
                    i = Object.keys(n).reduce((t, e) => ((t[e] = !1), t), {});
                let o = [];
                e &&
                    (o = o.concat(
                        Object.keys(e).map((t) => {
                            const n = e[t],
                                i = Xi(t, n),
                                o = "r" === i,
                                s = "x" === i;
                            return { options: n, dposition: o ? "chartArea" : s ? "bottom" : "left", dtype: o ? "radialLinear" : s ? "category" : "linear" };
                        })
                    )),
                    u(o, (e) => {
                        const o = e.options,
                            s = o.id,
                            r = Xi(s, o),
                            l = a(o.type, e.dtype);
                        (void 0 !== o.position && oo(o.position, r) === oo(e.dposition)) || (o.position = e.dposition), (i[s] = !0);
                        let c = null;
                        s in n && n[s].type === l ? (c = n[s]) : ((c = new (Bi.getScale(l))({ id: s, type: l, ctx: this.ctx, chart: this })), (n[c.id] = c)), c.init(o, t);
                    }),
                    u(i, (t, e) => {
                        t || delete n[e];
                    }),
                    u(n, (t) => {
                        Xn.configure(this, t, t.options), Xn.addBox(this, t);
                    });
            }
            _updateMetasets() {
                const t = this._metasets,
                    e = this.data.datasets.length,
                    n = t.length;
                if ((t.sort((t, e) => t.index - e.index), n > e)) {
                    for (let t = e; t < n; ++t) this._destroyDatasetMeta(t);
                    t.splice(e, n - e);
                }
                this._sortedMetasets = t.slice(0).sort(so("order", "index"));
            }
            _removeUnreferencedMetasets() {
                const {
                    _metasets: t,
                    data: { datasets: e },
                } = this;
                t.length > e.length && delete this._stacks,
                    t.forEach((t, n) => {
                        0 === e.filter((e) => e === t._dataset).length && this._destroyDatasetMeta(n);
                    });
            }
            buildOrUpdateControllers() {
                const t = [],
                    e = this.data.datasets;
                let n, i;
                for (this._removeUnreferencedMetasets(), n = 0, i = e.length; n < i; n++) {
                    const i = e[n];
                    let o = this.getDatasetMeta(n);
                    const s = i.type || this.config.type;
                    if (
                        (o.type && o.type !== s && (this._destroyDatasetMeta(n), (o = this.getDatasetMeta(n))),
                        (o.type = s),
                        (o.indexAxis = i.indexAxis || Yi(s, this.options)),
                        (o.order = i.order || 0),
                        (o.index = n),
                        (o.label = "" + i.label),
                        (o.visible = this.isDatasetVisible(n)),
                        o.controller)
                    )
                        o.controller.updateIndex(n), o.controller.linkScales();
                    else {
                        const e = Bi.getController(s),
                            { datasetElementType: i, dataElementType: r } = ee.datasets[s];
                        Object.assign(e.prototype, { dataElementType: Bi.getElement(r), datasetElementType: i && Bi.getElement(i) }), (o.controller = new e(this, n)), t.push(o.controller);
                    }
                }
                return this._updateMetasets(), t;
            }
            _resetElements() {
                u(
                    this.data.datasets,
                    (t, e) => {
                        this.getDatasetMeta(e).controller.reset();
                    },
                    this
                );
            }
            reset() {
                this._resetElements(), this.notifyPlugins("reset");
            }
            update(t) {
                const e = this.config;
                e.update();
                const n = (this._options = e.createResolver(e.chartOptionScopes(), this.getContext())),
                    i = (this._animationsDisabled = !n.animation);
                if ((this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 === this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }))) return;
                const o = this.buildOrUpdateControllers();
                this.notifyPlugins("beforeElementsUpdate");
                let s = 0;
                for (let t = 0, e = this.data.datasets.length; t < e; t++) {
                    const { controller: e } = this.getDatasetMeta(t),
                        n = !i && -1 === o.indexOf(e);
                    e.buildOrUpdateElements(n), (s = Math.max(+e.getMaxOverflow(), s));
                }
                (s = this._minPadding = n.layout.autoPadding ? s : 0),
                    this._updateLayout(s),
                    i ||
                        u(o, (t) => {
                            t.reset();
                        }),
                    this._updateDatasets(t),
                    this.notifyPlugins("afterUpdate", { mode: t }),
                    this._layers.sort(so("z", "_idx"));
                const { _active: r, _lastEvent: a } = this;
                a ? this._eventHandler(a, !0) : r.length && this._updateHoverStyles(r, r, !0), this.render();
            }
            _updateScales() {
                u(this.scales, (t) => {
                    Xn.removeBox(this, t);
                }),
                    this.ensureScalesHaveIDs(),
                    this.buildOrUpdateScales();
            }
            _checkEventBindings() {
                const t = this.options,
                    e = new Set(Object.keys(this._listeners)),
                    n = new Set(t.events);
                (k(e, n) && !!this._responsiveListeners === t.responsive) || (this.unbindEvents(), this.bindEvents());
            }
            _updateHiddenIndices() {
                const { _hiddenIndices: t } = this,
                    e = this._getUniformDataChanges() || [];
                for (const { method: n, start: i, count: o } of e) uo(t, i, "_removeElements" === n ? -o : o);
            }
            _getUniformDataChanges() {
                const t = this._dataChanges;
                if (!t || !t.length) return;
                this._dataChanges = [];
                const e = this.data.datasets.length,
                    n = (e) => new Set(t.filter((t) => t[0] === e).map((t, e) => e + "," + t.splice(1).join(","))),
                    i = n(0);
                for (let t = 1; t < e; t++) if (!k(i, n(t))) return;
                return Array.from(i)
                    .map((t) => t.split(","))
                    .map((t) => ({ method: t[1], start: +t[2], count: +t[3] }));
            }
            _updateLayout(t) {
                if (!1 === this.notifyPlugins("beforeLayout", { cancelable: !0 })) return;
                Xn.update(this, this.width, this.height, t);
                const e = this.chartArea,
                    n = e.width <= 0 || e.height <= 0;
                (this._layers = []),
                    u(
                        this.boxes,
                        (t) => {
                            (n && "chartArea" === t.position) || (t.configure && t.configure(), this._layers.push(...t._layers()));
                        },
                        this
                    ),
                    this._layers.forEach((t, e) => {
                        t._idx = e;
                    }),
                    this.notifyPlugins("afterLayout");
            }
            _updateDatasets(t) {
                if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", { mode: t, cancelable: !0 })) {
                    for (let t = 0, e = this.data.datasets.length; t < e; ++t) this.getDatasetMeta(t).controller.configure();
                    for (let e = 0, n = this.data.datasets.length; e < n; ++e) this._updateDataset(e, C(t) ? t({ datasetIndex: e }) : t);
                    this.notifyPlugins("afterDatasetsUpdate", { mode: t });
                }
            }
            _updateDataset(t, e) {
                const n = this.getDatasetMeta(t),
                    i = { meta: n, index: t, mode: e, cancelable: !0 };
                !1 !== this.notifyPlugins("beforeDatasetUpdate", i) && (n.controller._update(e), (i.cancelable = !1), this.notifyPlugins("afterDatasetUpdate", i));
            }
            render() {
                !1 !== this.notifyPlugins("beforeRender", { cancelable: !0 }) && (mt.has(this) ? this.attached && !mt.running(this) && mt.start(this) : (this.draw(), ro({ chart: this })));
            }
            draw() {
                let t;
                if (this._resizeBeforeDraw) {
                    const { width: t, height: e } = this._resizeBeforeDraw;
                    this._resize(t, e), (this._resizeBeforeDraw = null);
                }
                if ((this.clear(), this.width <= 0 || this.height <= 0)) return;
                if (!1 === this.notifyPlugins("beforeDraw", { cancelable: !0 })) return;
                const e = this._layers;
                for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
                for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
                this.notifyPlugins("afterDraw");
            }
            _getSortedDatasetMetas(t) {
                const e = this._sortedMetasets,
                    n = [];
                let i, o;
                for (i = 0, o = e.length; i < o; ++i) {
                    const o = e[i];
                    (t && !o.visible) || n.push(o);
                }
                return n;
            }
            getSortedVisibleDatasetMetas() {
                return this._getSortedDatasetMetas(!0);
            }
            _drawDatasets() {
                if (!1 === this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 })) return;
                const t = this.getSortedVisibleDatasetMetas();
                for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
                this.notifyPlugins("afterDatasetsDraw");
            }
            _drawDataset(t) {
                const e = this.ctx,
                    n = t._clip,
                    i = !n.disabled,
                    o = this.chartArea,
                    s = { meta: t, index: t.index, cancelable: !0 };
                !1 !== this.notifyPlugins("beforeDatasetDraw", s) &&
                    (i && Se(e, { left: !1 === n.left ? 0 : o.left - n.left, right: !1 === n.right ? this.width : o.right + n.right, top: !1 === n.top ? 0 : o.top - n.top, bottom: !1 === n.bottom ? this.height : o.bottom + n.bottom }),
                    t.controller.draw(),
                    i && Ce(e),
                    (s.cancelable = !1),
                    this.notifyPlugins("afterDatasetDraw", s));
            }
            isPointInArea(t) {
                return _e(t, this.chartArea, this._minPadding);
            }
            getElementsAtEventForMode(t, e, n, i) {
                const o = $n.modes[e];
                return "function" == typeof o ? o(this, t, n, i) : [];
            }
            getDatasetMeta(t) {
                const e = this.data.datasets[t],
                    n = this._metasets;
                let i = n.filter((t) => t && t._dataset === e).pop();
                return i || ((i = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null, order: (e && e.order) || 0, index: t, _dataset: e, _parsed: [], _sorted: !1 }), n.push(i)), i;
            }
            getContext() {
                return this.$context || (this.$context = bn(null, { chart: this, type: "chart" }));
            }
            getVisibleDatasetCount() {
                return this.getSortedVisibleDatasetMetas().length;
            }
            isDatasetVisible(t) {
                const e = this.data.datasets[t];
                if (!e) return !1;
                const n = this.getDatasetMeta(t);
                return "boolean" == typeof n.hidden ? !n.hidden : !e.hidden;
            }
            setDatasetVisibility(t, e) {
                this.getDatasetMeta(t).hidden = !e;
            }
            toggleDataVisibility(t) {
                this._hiddenIndices[t] = !this._hiddenIndices[t];
            }
            getDataVisibility(t) {
                return !this._hiddenIndices[t];
            }
            _updateVisibility(t, e, n) {
                const i = n ? "show" : "hide",
                    o = this.getDatasetMeta(t),
                    s = o.controller._resolveAnimations(void 0, i);
                S(e) ? ((o.data[e].hidden = !n), this.update()) : (this.setDatasetVisibility(t, n), s.update(o, { visible: n }), this.update((e) => (e.datasetIndex === t ? i : void 0)));
            }
            hide(t, e) {
                this._updateVisibility(t, e, !1);
            }
            show(t, e) {
                this._updateVisibility(t, e, !0);
            }
            _destroyDatasetMeta(t) {
                const e = this._metasets[t];
                e && e.controller && e.controller._destroy(), delete this._metasets[t];
            }
            _stop() {
                let t, e;
                for (this.stop(), mt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) this._destroyDatasetMeta(t);
            }
            destroy() {
                this.notifyPlugins("beforeDestroy");
                const { canvas: t, ctx: e } = this;
                this._stop(),
                    this.config.clearCache(),
                    t && (this.unbindEvents(), ye(t, e), this.platform.releaseContext(e), (this.canvas = null), (this.ctx = null)),
                    this.notifyPlugins("destroy"),
                    delete co[this.id],
                    this.notifyPlugins("afterDestroy");
            }
            toBase64Image(...t) {
                return this.canvas.toDataURL(...t);
            }
            bindEvents() {
                this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : (this.attached = !0);
            }
            bindUserEvents() {
                const t = this._listeners,
                    e = this.platform,
                    n = (n, i) => {
                        e.addEventListener(this, n, i), (t[n] = i);
                    },
                    i = (t, e, n) => {
                        (t.offsetX = e), (t.offsetY = n), this._eventHandler(t);
                    };
                u(this.options.events, (t) => n(t, i));
            }
            bindResponsiveEvents() {
                this._responsiveListeners || (this._responsiveListeners = {});
                const t = this._responsiveListeners,
                    e = this.platform,
                    n = (n, i) => {
                        e.addEventListener(this, n, i), (t[n] = i);
                    },
                    i = (n, i) => {
                        t[n] && (e.removeEventListener(this, n, i), delete t[n]);
                    },
                    o = (t, e) => {
                        this.canvas && this.resize(t, e);
                    };
                let s;
                const r = () => {
                    i("attach", r), (this.attached = !0), this.resize(), n("resize", o), n("detach", s);
                };
                (s = () => {
                    (this.attached = !1), i("resize", o), this._stop(), this._resize(0, 0), n("attach", r);
                }),
                    e.isAttached(this.canvas) ? r() : s();
            }
            unbindEvents() {
                u(this._listeners, (t, e) => {
                    this.platform.removeEventListener(this, e, t);
                }),
                    (this._listeners = {}),
                    u(this._responsiveListeners, (t, e) => {
                        this.platform.removeEventListener(this, e, t);
                    }),
                    (this._responsiveListeners = void 0);
            }
            updateHoverStyle(t, e, n) {
                const i = n ? "set" : "remove";
                let o, s, r, a;
                for ("dataset" === e && ((o = this.getDatasetMeta(t[0].datasetIndex)), o.controller["_" + i + "DatasetHoverStyle"]()), r = 0, a = t.length; r < a; ++r) {
                    s = t[r];
                    const e = s && this.getDatasetMeta(s.datasetIndex).controller;
                    e && e[i + "HoverStyle"](s.element, s.datasetIndex, s.index);
                }
            }
            getActiveElements() {
                return this._active || [];
            }
            setActiveElements(t) {
                const e = this._active || [],
                    n = t.map(({ datasetIndex: t, index: e }) => {
                        const n = this.getDatasetMeta(t);
                        if (!n) throw new Error("No dataset found at index " + t);
                        return { datasetIndex: t, element: n.data[e], index: e };
                    });
                !d(n, e) && ((this._active = n), (this._lastEvent = null), this._updateHoverStyles(n, e));
            }
            notifyPlugins(t, e, n) {
                return this._plugins.notify(this, t, e, n);
            }
            _updateHoverStyles(t, e, n) {
                const i = this.options.hover,
                    o = (t, e) => t.filter((t) => !e.some((e) => t.datasetIndex === e.datasetIndex && t.index === e.index)),
                    s = o(e, t),
                    r = n ? t : o(t, e);
                s.length && this.updateHoverStyle(s, i.mode, !1), r.length && i.mode && this.updateHoverStyle(r, i.mode, !0);
            }
            _eventHandler(t, e) {
                const n = { event: t, replay: e, cancelable: !0, inChartArea: this.isPointInArea(t) },
                    i = (e) => (e.options.events || this.options.events).includes(t.native.type);
                if (!1 === this.notifyPlugins("beforeEvent", n, i)) return;
                const o = this._handleEvent(t, e, n.inChartArea);
                return (n.cancelable = !1), this.notifyPlugins("afterEvent", n, i), (o || n.changed) && this.render(), this;
            }
            _handleEvent(t, e, n) {
                const { _active: i = [], options: o } = this,
                    s = e,
                    r = this._getActiveElements(t, i, n, s),
                    a = T(t),
                    l = (function (t, e, n, i) {
                        return n && "mouseout" !== t.type ? (i ? e : t) : null;
                    })(t, this._lastEvent, n, a);
                n && ((this._lastEvent = null), h(o.onHover, [t, r, this], this), a && h(o.onClick, [t, r, this], this));
                const c = !d(r, i);
                return (c || e) && ((this._active = r), this._updateHoverStyles(r, i, e)), (this._lastEvent = l), c;
            }
            _getActiveElements(t, e, n, i) {
                if ("mouseout" === t.type) return [];
                if (!n) return e;
                const o = this.options.hover;
                return this.getElementsAtEventForMode(t, o.mode, o, i);
            }
        }
        const po = () => u(fo.instances, (t) => t._plugins.invalidate()),
            go = !0;
        function mo() {
            throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
        }
        Object.defineProperties(fo, {
            defaults: { enumerable: go, value: ee },
            instances: { enumerable: go, value: co },
            overrides: { enumerable: go, value: Zt },
            registry: { enumerable: go, value: Bi },
            version: { enumerable: go, value: "3.9.1" },
            getChart: { enumerable: go, value: ho },
            register: {
                enumerable: go,
                value: (...t) => {
                    Bi.add(...t), po();
                },
            },
            unregister: {
                enumerable: go,
                value: (...t) => {
                    Bi.remove(...t), po();
                },
            },
        });
        class bo {
            constructor(t) {
                this.options = t || {};
            }
            init(t) {}
            formats() {
                return mo();
            }
            parse(t, e) {
                return mo();
            }
            format(t, e) {
                return mo();
            }
            add(t, e, n) {
                return mo();
            }
            diff(t, e, n) {
                return mo();
            }
            startOf(t, e, n) {
                return mo();
            }
            endOf(t, e) {
                return mo();
            }
        }
        bo.override = function (t) {
            Object.assign(bo.prototype, t);
        };
        var xo = { _date: bo };
        function yo(t) {
            const e = t.iScale,
                n = (function (t, e) {
                    if (!t._cache.$bar) {
                        const n = t.getMatchingVisibleMetas(e);
                        let i = [];
                        for (let e = 0, o = n.length; e < o; e++) i = i.concat(n[e].controller.getAllParsedValues(t));
                        t._cache.$bar = at(i.sort((t, e) => t - e));
                    }
                    return t._cache.$bar;
                })(e, t.type);
            let i,
                o,
                s,
                r,
                a = e._length;
            const l = () => {
                32767 !== s && -32768 !== s && (S(r) && (a = Math.min(a, Math.abs(s - r) || a)), (r = s));
            };
            for (i = 0, o = n.length; i < o; ++i) (s = e.getPixelForValue(n[i])), l();
            for (r = void 0, i = 0, o = e.ticks.length; i < o; ++i) (s = e.getPixelForTick(i)), l();
            return a;
        }
        function vo(t, e, n, o) {
            return (
                i(t)
                    ? (function (t, e, n, i) {
                          const o = n.parse(t[0], i),
                              s = n.parse(t[1], i),
                              r = Math.min(o, s),
                              a = Math.max(o, s);
                          let l = r,
                              c = a;
                          Math.abs(r) > Math.abs(a) && ((l = a), (c = r)), (e[n.axis] = c), (e._custom = { barStart: l, barEnd: c, start: o, end: s, min: r, max: a });
                      })(t, e, n, o)
                    : (e[n.axis] = n.parse(t, o)),
                e
            );
        }
        function wo(t, e, n, i) {
            const o = t.iScale,
                s = t.vScale,
                r = o.getLabels(),
                a = o === s,
                l = [];
            let c, h, u, d;
            for (c = n, h = n + i; c < h; ++c) (d = e[c]), (u = {}), (u[o.axis] = a || o.parse(r[c], c)), l.push(vo(d, u, s, c));
            return l;
        }
        function _o(t) {
            return t && void 0 !== t.barStart && void 0 !== t.barEnd;
        }
        function So(t, e, n, i) {
            let o = e.borderSkipped;
            const s = {};
            if (!o) return void (t.borderSkipped = s);
            if (!0 === o) return void (t.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 });
            const { start: r, end: a, reverse: l, top: c, bottom: h } = (function (t) {
                let e, n, i, o, s;
                return (
                    t.horizontal ? ((e = t.base > t.x), (n = "left"), (i = "right")) : ((e = t.base < t.y), (n = "bottom"), (i = "top")),
                    e ? ((o = "end"), (s = "start")) : ((o = "start"), (s = "end")),
                    { start: n, end: i, reverse: e, top: o, bottom: s }
                );
            })(t);
            "middle" === o && n && ((t.enableBorderRadius = !0), (n._top || 0) === i ? (o = c) : (n._bottom || 0) === i ? (o = h) : ((s[Co(h, r, a, l)] = !0), (o = c))), (s[Co(o, r, a, l)] = !0), (t.borderSkipped = s);
        }
        function Co(t, e, n, i) {
            var o, s, r;
            return i ? ((r = n), (t = ko((t = (o = t) === (s = e) ? r : o === r ? s : o), n, e))) : (t = ko(t, e, n)), t;
        }
        function ko(t, e, n) {
            return "start" === t ? e : "end" === t ? n : t;
        }
        function To(t, { inflateAmount: e }, n) {
            t.inflateAmount = "auto" === e ? (1 === n ? 0.33 : 0) : e;
        }
        class Mo extends Pi {
            parsePrimitiveData(t, e, n, i) {
                return wo(t, e, n, i);
            }
            parseArrayData(t, e, n, i) {
                return wo(t, e, n, i);
            }
            parseObjectData(t, e, n, i) {
                const { iScale: o, vScale: s } = t,
                    { xAxisKey: r = "x", yAxisKey: a = "y" } = this._parsing,
                    l = "x" === o.axis ? r : a,
                    c = "x" === s.axis ? r : a,
                    h = [];
                let u, d, f, p;
                for (u = n, d = n + i; u < d; ++u) (p = e[u]), (f = {}), (f[o.axis] = o.parse(v(p, l), u)), h.push(vo(v(p, c), f, s, u));
                return h;
            }
            updateRangeFromParsed(t, e, n, i) {
                super.updateRangeFromParsed(t, e, n, i);
                const o = n._custom;
                o && e === this._cachedMeta.vScale && ((t.min = Math.min(t.min, o.min)), (t.max = Math.max(t.max, o.max)));
            }
            getMaxOverflow() {
                return 0;
            }
            getLabelAndValue(t) {
                const e = this._cachedMeta,
                    { iScale: n, vScale: i } = e,
                    o = this.getParsed(t),
                    s = o._custom,
                    r = _o(s) ? "[" + s.start + ", " + s.end + "]" : "" + i.getLabelForValue(o[i.axis]);
                return { label: "" + n.getLabelForValue(o[n.axis]), value: r };
            }
            initialize() {
                (this.enableOptionSharing = !0), super.initialize(), (this._cachedMeta.stack = this.getDataset().stack);
            }
            update(t) {
                const e = this._cachedMeta;
                this.updateElements(e.data, 0, e.data.length, t);
            }
            updateElements(t, e, i, o) {
                const s = "reset" === o,
                    {
                        index: r,
                        _cachedMeta: { vScale: a },
                    } = this,
                    l = a.getBasePixel(),
                    c = a.isHorizontal(),
                    h = this._getRuler(),
                    { sharedOptions: u, includeOptions: d } = this._getSharedOptions(e, o);
                for (let f = e; f < e + i; f++) {
                    const e = this.getParsed(f),
                        i = s || n(e[a.axis]) ? { base: l, head: l } : this._calculateBarValuePixels(f),
                        p = this._calculateBarIndexPixels(f, h),
                        g = (e._stacks || {})[a.axis],
                        m = {
                            horizontal: c,
                            base: i.base,
                            enableBorderRadius: !g || _o(e._custom) || r === g._top || r === g._bottom,
                            x: c ? i.head : p.center,
                            y: c ? p.center : i.head,
                            height: c ? p.size : Math.abs(i.size),
                            width: c ? Math.abs(i.size) : p.size,
                        };
                    d && (m.options = u || this.resolveDataElementOptions(f, t[f].active ? "active" : o));
                    const b = m.options || t[f].options;
                    So(m, b, g, r), To(m, b, h.ratio), this.updateElement(t[f], f, m, o);
                }
            }
            _getStacks(t, e) {
                const { iScale: i } = this._cachedMeta,
                    o = i.getMatchingVisibleMetas(this._type).filter((t) => t.controller.options.grouped),
                    s = i.options.stacked,
                    r = [],
                    a = (t) => {
                        const i = t.controller.getParsed(e),
                            o = i && i[t.vScale.axis];
                        if (n(o) || isNaN(o)) return !0;
                    };
                for (const n of o) if ((void 0 === e || !a(n)) && ((!1 === s || -1 === r.indexOf(n.stack) || (void 0 === s && void 0 === n.stack)) && r.push(n.stack), n.index === t)) break;
                return r.length || r.push(void 0), r;
            }
            _getStackCount(t) {
                return this._getStacks(void 0, t).length;
            }
            _getStackIndex(t, e, n) {
                const i = this._getStacks(t, n),
                    o = void 0 !== e ? i.indexOf(e) : -1;
                return -1 === o ? i.length - 1 : o;
            }
            _getRuler() {
                const t = this.options,
                    e = this._cachedMeta,
                    n = e.iScale,
                    i = [];
                let o, s;
                for (o = 0, s = e.data.length; o < s; ++o) i.push(n.getPixelForValue(this.getParsed(o)[n.axis], o));
                const r = t.barThickness;
                return { min: r || yo(e), pixels: i, start: n._startPixel, end: n._endPixel, stackCount: this._getStackCount(), scale: n, grouped: t.grouped, ratio: r ? 1 : t.categoryPercentage * t.barPercentage };
            }
            _calculateBarValuePixels(t) {
                const {
                        _cachedMeta: { vScale: e, _stacked: i },
                        options: { base: o, minBarLength: s },
                    } = this,
                    r = o || 0,
                    a = this.getParsed(t),
                    l = a._custom,
                    c = _o(l);
                let h,
                    u,
                    d = a[e.axis],
                    f = 0,
                    p = i ? this.applyStack(e, a, i) : d;
                p !== d && ((f = p - d), (p = d)), c && ((d = l.barStart), (p = l.barEnd - l.barStart), 0 !== d && I(d) !== I(l.barEnd) && (f = 0), (f += d));
                const g = n(o) || c ? f : o;
                let m = e.getPixelForValue(g);
                if (((h = this.chart.getDataVisibility(t) ? e.getPixelForValue(f + p) : m), (u = h - m), Math.abs(u) < s)) {
                    (u =
                        (function (t, e, n) {
                            return 0 !== t ? I(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= n ? 1 : -1);
                        })(u, e, r) * s),
                        d === r && (m -= u / 2);
                    const t = e.getPixelForDecimal(0),
                        n = e.getPixelForDecimal(1),
                        i = Math.min(t, n),
                        o = Math.max(t, n);
                    (m = Math.max(Math.min(m, o), i)), (h = m + u);
                }
                if (m === e.getPixelForValue(r)) {
                    const t = (I(u) * e.getLineWidthForValue(r)) / 2;
                    (m += t), (u -= t);
                }
                return { size: u, base: m, head: h, center: h + u / 2 };
            }
            _calculateBarIndexPixels(t, e) {
                const i = e.scale,
                    o = this.options,
                    s = o.skipNull,
                    r = a(o.maxBarThickness, 1 / 0);
                let l, c;
                if (e.grouped) {
                    const i = s ? this._getStackCount(t) : e.stackCount,
                        a =
                            "flex" === o.barThickness
                                ? (function (t, e, n, i) {
                                      const o = e.pixels,
                                          s = o[t];
                                      let r = t > 0 ? o[t - 1] : null,
                                          a = t < o.length - 1 ? o[t + 1] : null;
                                      const l = n.categoryPercentage;
                                      null === r && (r = s - (null === a ? e.end - e.start : a - s)), null === a && (a = s + s - r);
                                      const c = s - ((s - Math.min(r, a)) / 2) * l;
                                      return { chunk: ((Math.abs(a - r) / 2) * l) / i, ratio: n.barPercentage, start: c };
                                  })(t, e, o, i)
                                : (function (t, e, i, o) {
                                      const s = i.barThickness;
                                      let r, a;
                                      return n(s) ? ((r = e.min * i.categoryPercentage), (a = i.barPercentage)) : ((r = s * o), (a = 1)), { chunk: r / o, ratio: a, start: e.pixels[t] - r / 2 };
                                  })(t, e, o, i),
                        h = this._getStackIndex(this.index, this._cachedMeta.stack, s ? t : void 0);
                    (l = a.start + a.chunk * h + a.chunk / 2), (c = Math.min(r, a.chunk * a.ratio));
                } else (l = i.getPixelForValue(this.getParsed(t)[i.axis], t)), (c = Math.min(r, e.min * e.ratio));
                return { base: l - c / 2, head: l + c / 2, center: l, size: c };
            }
            draw() {
                const t = this._cachedMeta,
                    e = t.vScale,
                    n = t.data,
                    i = n.length;
                let o = 0;
                for (; o < i; ++o) null !== this.getParsed(o)[e.axis] && n[o].draw(this._ctx);
            }
        }
        (Mo.id = "bar"),
            (Mo.defaults = { datasetElementType: !1, dataElementType: "bar", categoryPercentage: 0.8, barPercentage: 0.9, grouped: !0, animations: { numbers: { type: "number", properties: ["x", "y", "base", "width", "height"] } } }),
            (Mo.overrides = { scales: { _index_: { type: "category", offset: !0, grid: { offset: !0 } }, _value_: { type: "linear", beginAtZero: !0 } } });
        class Po extends Pi {
            initialize() {
                (this.enableOptionSharing = !0), super.initialize();
            }
            parsePrimitiveData(t, e, n, i) {
                const o = super.parsePrimitiveData(t, e, n, i);
                for (let t = 0; t < o.length; t++) o[t]._custom = this.resolveDataElementOptions(t + n).radius;
                return o;
            }
            parseArrayData(t, e, n, i) {
                const o = super.parseArrayData(t, e, n, i);
                for (let t = 0; t < o.length; t++) {
                    const i = e[n + t];
                    o[t]._custom = a(i[2], this.resolveDataElementOptions(t + n).radius);
                }
                return o;
            }
            parseObjectData(t, e, n, i) {
                const o = super.parseObjectData(t, e, n, i);
                for (let t = 0; t < o.length; t++) {
                    const i = e[n + t];
                    o[t]._custom = a(i && i.r && +i.r, this.resolveDataElementOptions(t + n).radius);
                }
                return o;
            }
            getMaxOverflow() {
                const t = this._cachedMeta.data;
                let e = 0;
                for (let n = t.length - 1; n >= 0; --n) e = Math.max(e, t[n].size(this.resolveDataElementOptions(n)) / 2);
                return e > 0 && e;
            }
            getLabelAndValue(t) {
                const e = this._cachedMeta,
                    { xScale: n, yScale: i } = e,
                    o = this.getParsed(t),
                    s = n.getLabelForValue(o.x),
                    r = i.getLabelForValue(o.y),
                    a = o._custom;
                return { label: e.label, value: "(" + s + ", " + r + (a ? ", " + a : "") + ")" };
            }
            update(t) {
                const e = this._cachedMeta.data;
                this.updateElements(e, 0, e.length, t);
            }
            updateElements(t, e, n, i) {
                const o = "reset" === i,
                    { iScale: s, vScale: r } = this._cachedMeta,
                    { sharedOptions: a, includeOptions: l } = this._getSharedOptions(e, i),
                    c = s.axis,
                    h = r.axis;
                for (let u = e; u < e + n; u++) {
                    const e = t[u],
                        n = !o && this.getParsed(u),
                        d = {},
                        f = (d[c] = o ? s.getPixelForDecimal(0.5) : s.getPixelForValue(n[c])),
                        p = (d[h] = o ? r.getBasePixel() : r.getPixelForValue(n[h]));
                    (d.skip = isNaN(f) || isNaN(p)), l && ((d.options = a || this.resolveDataElementOptions(u, e.active ? "active" : i)), o && (d.options.radius = 0)), this.updateElement(e, u, d, i);
                }
            }
            resolveDataElementOptions(t, e) {
                const n = this.getParsed(t);
                let i = super.resolveDataElementOptions(t, e);
                i.$shared && (i = Object.assign({}, i, { $shared: !1 }));
                const o = i.radius;
                return "active" !== e && (i.radius = 0), (i.radius += a(n && n._custom, o)), i;
            }
        }
        (Po.id = "bubble"),
            (Po.defaults = { datasetElementType: !1, dataElementType: "point", animations: { numbers: { type: "number", properties: ["x", "y", "borderWidth", "radius"] } } }),
            (Po.overrides = { scales: { x: { type: "linear" }, y: { type: "linear" } }, plugins: { tooltip: { callbacks: { title: () => "" } } } });
        class Do extends Pi {
            constructor(t, e) {
                super(t, e), (this.enableOptionSharing = !0), (this.innerRadius = void 0), (this.outerRadius = void 0), (this.offsetX = void 0), (this.offsetY = void 0);
            }
            linkScales() {}
            parse(t, e) {
                const n = this.getDataset().data,
                    i = this._cachedMeta;
                if (!1 === this._parsing) i._parsed = n;
                else {
                    let s,
                        r,
                        a = (t) => +n[t];
                    if (o(n[t])) {
                        const { key: t = "value" } = this._parsing;
                        a = (e) => +v(n[e], t);
                    }
                    for (s = t, r = t + e; s < r; ++s) i._parsed[s] = a(s);
                }
            }
            _getRotation() {
                return W(this.options.rotation - 90);
            }
            _getCircumference() {
                return W(this.options.circumference);
            }
            _getRotationExtents() {
                let t = P,
                    e = -P;
                for (let n = 0; n < this.chart.data.datasets.length; ++n)
                    if (this.chart.isDatasetVisible(n)) {
                        const i = this.chart.getDatasetMeta(n).controller,
                            o = i._getRotation(),
                            s = i._getCircumference();
                        (t = Math.min(t, o)), (e = Math.max(e, o + s));
                    }
                return { rotation: t, circumference: e - t };
            }
            update(t) {
                const e = this.chart,
                    { chartArea: n } = e,
                    i = this._cachedMeta,
                    o = i.data,
                    s = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing,
                    r = Math.max((Math.min(n.width, n.height) - s) / 2, 0),
                    a = Math.min(l(this.options.cutout, r), 1),
                    h = this._getRingWeight(this.index),
                    { circumference: u, rotation: d } = this._getRotationExtents(),
                    { ratioX: f, ratioY: p, offsetX: g, offsetY: m } = (function (t, e, n) {
                        let i = 1,
                            o = 1,
                            s = 0,
                            r = 0;
                        if (e < P) {
                            const a = t,
                                l = a + e,
                                c = Math.cos(a),
                                h = Math.sin(a),
                                u = Math.cos(l),
                                d = Math.sin(l),
                                f = (t, e, i) => (G(t, a, l, !0) ? 1 : Math.max(e, e * n, i, i * n)),
                                p = (t, e, i) => (G(t, a, l, !0) ? -1 : Math.min(e, e * n, i, i * n)),
                                g = f(0, c, u),
                                m = f(L, h, d),
                                b = p(M, c, u),
                                x = p(M + L, h, d);
                            (i = (g - b) / 2), (o = (m - x) / 2), (s = -(g + b) / 2), (r = -(m + x) / 2);
                        }
                        return { ratioX: i, ratioY: o, offsetX: s, offsetY: r };
                    })(d, u, a),
                    b = (n.width - s) / f,
                    x = (n.height - s) / p,
                    y = Math.max(Math.min(b, x) / 2, 0),
                    v = c(this.options.radius, y),
                    w = (v - Math.max(v * a, 0)) / this._getVisibleDatasetWeightTotal();
                (this.offsetX = g * v),
                    (this.offsetY = m * v),
                    (i.total = this.calculateTotal()),
                    (this.outerRadius = v - w * this._getRingWeightOffset(this.index)),
                    (this.innerRadius = Math.max(this.outerRadius - w * h, 0)),
                    this.updateElements(o, 0, o.length, t);
            }
            _circumference(t, e) {
                const n = this.options,
                    i = this._cachedMeta,
                    o = this._getCircumference();
                return (e && n.animation.animateRotate) || !this.chart.getDataVisibility(t) || null === i._parsed[t] || i.data[t].hidden ? 0 : this.calculateCircumference((i._parsed[t] * o) / P);
            }
            updateElements(t, e, n, i) {
                const o = "reset" === i,
                    s = this.chart,
                    r = s.chartArea,
                    a = s.options.animation,
                    l = (r.left + r.right) / 2,
                    c = (r.top + r.bottom) / 2,
                    h = o && a.animateScale,
                    u = h ? 0 : this.innerRadius,
                    d = h ? 0 : this.outerRadius,
                    { sharedOptions: f, includeOptions: p } = this._getSharedOptions(e, i);
                let g,
                    m = this._getRotation();
                for (g = 0; g < e; ++g) m += this._circumference(g, o);
                for (g = e; g < e + n; ++g) {
                    const e = this._circumference(g, o),
                        n = t[g],
                        s = { x: l + this.offsetX, y: c + this.offsetY, startAngle: m, endAngle: m + e, circumference: e, outerRadius: d, innerRadius: u };
                    p && (s.options = f || this.resolveDataElementOptions(g, n.active ? "active" : i)), (m += e), this.updateElement(n, g, s, i);
                }
            }
            calculateTotal() {
                const t = this._cachedMeta,
                    e = t.data;
                let n,
                    i = 0;
                for (n = 0; n < e.length; n++) {
                    const o = t._parsed[n];
                    null === o || isNaN(o) || !this.chart.getDataVisibility(n) || e[n].hidden || (i += Math.abs(o));
                }
                return i;
            }
            calculateCircumference(t) {
                const e = this._cachedMeta.total;
                return e > 0 && !isNaN(t) ? P * (Math.abs(t) / e) : 0;
            }
            getLabelAndValue(t) {
                const e = this._cachedMeta,
                    n = this.chart,
                    i = n.data.labels || [],
                    o = rn(e._parsed[t], n.options.locale);
                return { label: i[t] || "", value: o };
            }
            getMaxBorderWidth(t) {
                let e = 0;
                const n = this.chart;
                let i, o, s, r, a;
                if (!t)
                    for (i = 0, o = n.data.datasets.length; i < o; ++i)
                        if (n.isDatasetVisible(i)) {
                            (s = n.getDatasetMeta(i)), (t = s.data), (r = s.controller);
                            break;
                        }
                if (!t) return 0;
                for (i = 0, o = t.length; i < o; ++i) (a = r.resolveDataElementOptions(i)), "inner" !== a.borderAlign && (e = Math.max(e, a.borderWidth || 0, a.hoverBorderWidth || 0));
                return e;
            }
            getMaxOffset(t) {
                let e = 0;
                for (let n = 0, i = t.length; n < i; ++n) {
                    const t = this.resolveDataElementOptions(n);
                    e = Math.max(e, t.offset || 0, t.hoverOffset || 0);
                }
                return e;
            }
            _getRingWeightOffset(t) {
                let e = 0;
                for (let n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
                return e;
            }
            _getRingWeight(t) {
                return Math.max(a(this.chart.data.datasets[t].weight, 1), 0);
            }
            _getVisibleDatasetWeightTotal() {
                return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
            }
        }
        (Do.id = "doughnut"),
            (Do.defaults = {
                datasetElementType: !1,
                dataElementType: "arc",
                animation: { animateRotate: !0, animateScale: !1 },
                animations: { numbers: { type: "number", properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"] } },
                cutout: "50%",
                rotation: 0,
                circumference: 360,
                radius: "100%",
                spacing: 0,
                indexAxis: "r",
            }),
            (Do.descriptors = { _scriptable: (t) => "spacing" !== t, _indexable: (t) => "spacing" !== t }),
            (Do.overrides = {
                aspectRatio: 1,
                plugins: {
                    legend: {
                        labels: {
                            generateLabels(t) {
                                const e = t.data;
                                if (e.labels.length && e.datasets.length) {
                                    const {
                                        labels: { pointStyle: n },
                                    } = t.legend.options;
                                    return e.labels.map((e, i) => {
                                        const o = t.getDatasetMeta(0).controller.getStyle(i);
                                        return { text: e, fillStyle: o.backgroundColor, strokeStyle: o.borderColor, lineWidth: o.borderWidth, pointStyle: n, hidden: !t.getDataVisibility(i), index: i };
                                    });
                                }
                                return [];
                            },
                        },
                        onClick(t, e, n) {
                            n.chart.toggleDataVisibility(e.index), n.chart.update();
                        },
                    },
                    tooltip: {
                        callbacks: {
                            title: () => "",
                            label(t) {
                                let e = t.label;
                                const n = ": " + t.formattedValue;
                                return i(e) ? ((e = e.slice()), (e[0] += n)) : (e += n), e;
                            },
                        },
                    },
                },
            });
        class Ao extends Pi {
            initialize() {
                (this.enableOptionSharing = !0), (this.supportsDecimation = !0), super.initialize();
            }
            update(t) {
                const e = this._cachedMeta,
                    { dataset: n, data: i = [], _dataset: o } = e,
                    s = this.chart._animationsDisabled;
                let { start: r, count: a } = pt(e, i, s);
                (this._drawStart = r), (this._drawCount = a), gt(e) && ((r = 0), (a = i.length)), (n._chart = this.chart), (n._datasetIndex = this.index), (n._decimated = !!o._decimated), (n.points = i);
                const l = this.resolveDatasetElementOptions(t);
                this.options.showLine || (l.borderWidth = 0), (l.segment = this.options.segment), this.updateElement(n, void 0, { animated: !s, options: l }, t), this.updateElements(i, r, a, t);
            }
            updateElements(t, e, i, o) {
                const s = "reset" === o,
                    { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
                    { sharedOptions: h, includeOptions: u } = this._getSharedOptions(e, o),
                    d = r.axis,
                    f = a.axis,
                    { spanGaps: p, segment: g } = this.options,
                    m = z(p) ? p : Number.POSITIVE_INFINITY,
                    b = this.chart._animationsDisabled || s || "none" === o;
                let x = e > 0 && this.getParsed(e - 1);
                for (let p = e; p < e + i; ++p) {
                    const e = t[p],
                        i = this.getParsed(p),
                        y = b ? e : {},
                        v = n(i[f]),
                        w = (y[d] = r.getPixelForValue(i[d], p)),
                        _ = (y[f] = s || v ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, i, l) : i[f], p));
                    (y.skip = isNaN(w) || isNaN(_) || v),
                        (y.stop = p > 0 && Math.abs(i[d] - x[d]) > m),
                        g && ((y.parsed = i), (y.raw = c.data[p])),
                        u && (y.options = h || this.resolveDataElementOptions(p, e.active ? "active" : o)),
                        b || this.updateElement(e, p, y, o),
                        (x = i);
                }
            }
            getMaxOverflow() {
                const t = this._cachedMeta,
                    e = t.dataset,
                    n = (e.options && e.options.borderWidth) || 0,
                    i = t.data || [];
                if (!i.length) return n;
                const o = i[0].size(this.resolveDataElementOptions(0)),
                    s = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1));
                return Math.max(n, o, s) / 2;
            }
            draw() {
                const t = this._cachedMeta;
                t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
            }
        }
        (Ao.id = "line"), (Ao.defaults = { datasetElementType: "line", dataElementType: "point", showLine: !0, spanGaps: !1 }), (Ao.overrides = { scales: { _index_: { type: "category" }, _value_: { type: "linear" } } });
        class Eo extends Pi {
            constructor(t, e) {
                super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
            }
            getLabelAndValue(t) {
                const e = this._cachedMeta,
                    n = this.chart,
                    i = n.data.labels || [],
                    o = rn(e._parsed[t].r, n.options.locale);
                return { label: i[t] || "", value: o };
            }
            parseObjectData(t, e, n, i) {
                return We.bind(this)(t, e, n, i);
            }
            update(t) {
                const e = this._cachedMeta.data;
                this._updateRadius(), this.updateElements(e, 0, e.length, t);
            }
            getMinMax() {
                const t = this._cachedMeta,
                    e = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
                return (
                    t.data.forEach((t, n) => {
                        const i = this.getParsed(n).r;
                        !isNaN(i) && this.chart.getDataVisibility(n) && (i < e.min && (e.min = i), i > e.max && (e.max = i));
                    }),
                    e
                );
            }
            _updateRadius() {
                const t = this.chart,
                    e = t.chartArea,
                    n = t.options,
                    i = Math.min(e.right - e.left, e.bottom - e.top),
                    o = Math.max(i / 2, 0),
                    s = (o - Math.max(n.cutoutPercentage ? (o / 100) * n.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount();
                (this.outerRadius = o - s * this.index), (this.innerRadius = this.outerRadius - s);
            }
            updateElements(t, e, n, i) {
                const o = "reset" === i,
                    s = this.chart,
                    r = s.options.animation,
                    a = this._cachedMeta.rScale,
                    l = a.xCenter,
                    c = a.yCenter,
                    h = a.getIndexAngle(0) - 0.5 * M;
                let u,
                    d = h;
                const f = 360 / this.countVisibleElements();
                for (u = 0; u < e; ++u) d += this._computeAngle(u, i, f);
                for (u = e; u < e + n; u++) {
                    const e = t[u];
                    let n = d,
                        p = d + this._computeAngle(u, i, f),
                        g = s.getDataVisibility(u) ? a.getDistanceFromCenterForValue(this.getParsed(u).r) : 0;
                    (d = p), o && (r.animateScale && (g = 0), r.animateRotate && (n = p = h));
                    const m = { x: l, y: c, innerRadius: 0, outerRadius: g, startAngle: n, endAngle: p, options: this.resolveDataElementOptions(u, e.active ? "active" : i) };
                    this.updateElement(e, u, m, i);
                }
            }
            countVisibleElements() {
                const t = this._cachedMeta;
                let e = 0;
                return (
                    t.data.forEach((t, n) => {
                        !isNaN(this.getParsed(n).r) && this.chart.getDataVisibility(n) && e++;
                    }),
                    e
                );
            }
            _computeAngle(t, e, n) {
                return this.chart.getDataVisibility(t) ? W(this.resolveDataElementOptions(t, e).angle || n) : 0;
            }
        }
        (Eo.id = "polarArea"),
            (Eo.defaults = {
                dataElementType: "arc",
                animation: { animateRotate: !0, animateScale: !0 },
                animations: { numbers: { type: "number", properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"] } },
                indexAxis: "r",
                startAngle: 0,
            }),
            (Eo.overrides = {
                aspectRatio: 1,
                plugins: {
                    legend: {
                        labels: {
                            generateLabels(t) {
                                const e = t.data;
                                if (e.labels.length && e.datasets.length) {
                                    const {
                                        labels: { pointStyle: n },
                                    } = t.legend.options;
                                    return e.labels.map((e, i) => {
                                        const o = t.getDatasetMeta(0).controller.getStyle(i);
                                        return { text: e, fillStyle: o.backgroundColor, strokeStyle: o.borderColor, lineWidth: o.borderWidth, pointStyle: n, hidden: !t.getDataVisibility(i), index: i };
                                    });
                                }
                                return [];
                            },
                        },
                        onClick(t, e, n) {
                            n.chart.toggleDataVisibility(e.index), n.chart.update();
                        },
                    },
                    tooltip: { callbacks: { title: () => "", label: (t) => t.chart.data.labels[t.dataIndex] + ": " + t.formattedValue } },
                },
                scales: { r: { type: "radialLinear", angleLines: { display: !1 }, beginAtZero: !0, grid: { circular: !0 }, pointLabels: { display: !1 }, startAngle: 0 } },
            });
        class Lo extends Do {}
        (Lo.id = "pie"), (Lo.defaults = { cutout: 0, rotation: 0, circumference: 360, radius: "100%" });
        class Oo extends Pi {
            getLabelAndValue(t) {
                const e = this._cachedMeta.vScale,
                    n = this.getParsed(t);
                return { label: e.getLabels()[t], value: "" + e.getLabelForValue(n[e.axis]) };
            }
            parseObjectData(t, e, n, i) {
                return We.bind(this)(t, e, n, i);
            }
            update(t) {
                const e = this._cachedMeta,
                    n = e.dataset,
                    i = e.data || [],
                    o = e.iScale.getLabels();
                if (((n.points = i), "resize" !== t)) {
                    const e = this.resolveDatasetElementOptions(t);
                    this.options.showLine || (e.borderWidth = 0);
                    const s = { _loop: !0, _fullLoop: o.length === i.length, options: e };
                    this.updateElement(n, void 0, s, t);
                }
                this.updateElements(i, 0, i.length, t);
            }
            updateElements(t, e, n, i) {
                const o = this._cachedMeta.rScale,
                    s = "reset" === i;
                for (let r = e; r < e + n; r++) {
                    const e = t[r],
                        n = this.resolveDataElementOptions(r, e.active ? "active" : i),
                        a = o.getPointPositionForValue(r, this.getParsed(r).r),
                        l = s ? o.xCenter : a.x,
                        c = s ? o.yCenter : a.y,
                        h = { x: l, y: c, angle: a.angle, skip: isNaN(l) || isNaN(c), options: n };
                    this.updateElement(e, r, h, i);
                }
            }
        }
        (Oo.id = "radar"),
            (Oo.defaults = { datasetElementType: "line", dataElementType: "point", indexAxis: "r", showLine: !0, elements: { line: { fill: "start" } } }),
            (Oo.overrides = { aspectRatio: 1, scales: { r: { type: "radialLinear" } } });
        class Ro extends Pi {
            update(t) {
                const e = this._cachedMeta,
                    { data: n = [] } = e,
                    i = this.chart._animationsDisabled;
                let { start: o, count: s } = pt(e, n, i);
                if (((this._drawStart = o), (this._drawCount = s), gt(e) && ((o = 0), (s = n.length)), this.options.showLine)) {
                    const { dataset: o, _dataset: s } = e;
                    (o._chart = this.chart), (o._datasetIndex = this.index), (o._decimated = !!s._decimated), (o.points = n);
                    const r = this.resolveDatasetElementOptions(t);
                    (r.segment = this.options.segment), this.updateElement(o, void 0, { animated: !i, options: r }, t);
                }
                this.updateElements(n, o, s, t);
            }
            addElements() {
                const { showLine: t } = this.options;
                !this.datasetElementType && t && (this.datasetElementType = Bi.getElement("line")), super.addElements();
            }
            updateElements(t, e, i, o) {
                const s = "reset" === o,
                    { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
                    h = this.resolveDataElementOptions(e, o),
                    u = this.getSharedOptions(h),
                    d = this.includeOptions(o, u),
                    f = r.axis,
                    p = a.axis,
                    { spanGaps: g, segment: m } = this.options,
                    b = z(g) ? g : Number.POSITIVE_INFINITY,
                    x = this.chart._animationsDisabled || s || "none" === o;
                let y = e > 0 && this.getParsed(e - 1);
                for (let h = e; h < e + i; ++h) {
                    const e = t[h],
                        i = this.getParsed(h),
                        g = x ? e : {},
                        v = n(i[p]),
                        w = (g[f] = r.getPixelForValue(i[f], h)),
                        _ = (g[p] = s || v ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, i, l) : i[p], h));
                    (g.skip = isNaN(w) || isNaN(_) || v),
                        (g.stop = h > 0 && Math.abs(i[f] - y[f]) > b),
                        m && ((g.parsed = i), (g.raw = c.data[h])),
                        d && (g.options = u || this.resolveDataElementOptions(h, e.active ? "active" : o)),
                        x || this.updateElement(e, h, g, o),
                        (y = i);
                }
                this.updateSharedOptions(u, o, h);
            }
            getMaxOverflow() {
                const t = this._cachedMeta,
                    e = t.data || [];
                if (!this.options.showLine) {
                    let t = 0;
                    for (let n = e.length - 1; n >= 0; --n) t = Math.max(t, e[n].size(this.resolveDataElementOptions(n)) / 2);
                    return t > 0 && t;
                }
                const n = t.dataset,
                    i = (n.options && n.options.borderWidth) || 0;
                if (!e.length) return i;
                const o = e[0].size(this.resolveDataElementOptions(0)),
                    s = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
                return Math.max(i, o, s) / 2;
            }
        }
        (Ro.id = "scatter"),
            (Ro.defaults = { datasetElementType: !1, dataElementType: "point", showLine: !1, fill: !1 }),
            (Ro.overrides = {
                interaction: { mode: "point" },
                plugins: { tooltip: { callbacks: { title: () => "", label: (t) => "(" + t.label + ", " + t.formattedValue + ")" } } },
                scales: { x: { type: "linear" }, y: { type: "linear" } },
            });
        var $o = Object.freeze({ __proto__: null, BarController: Mo, BubbleController: Po, DoughnutController: Do, LineController: Ao, PolarAreaController: Eo, PieController: Lo, RadarController: Oo, ScatterController: Ro });
        function Io(t, e, n) {
            const { startAngle: i, pixelMargin: o, x: s, y: r, outerRadius: a, innerRadius: l } = e;
            let c = o / a;
            t.beginPath(), t.arc(s, r, a, i - c, n + c), l > o ? ((c = o / l), t.arc(s, r, l, n + c, i - c, !0)) : t.arc(s, r, o, n + L, i - L), t.closePath(), t.clip();
        }
        function Fo(t, e, n, i) {
            return { x: n + t * Math.cos(e), y: i + t * Math.sin(e) };
        }
        function jo(t, e, n, i, o, s) {
            const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: h } = e,
                u = Math.max(e.outerRadius + i + n - c, 0),
                d = h > 0 ? h + i + n + c : 0;
            let f = 0;
            const p = o - l;
            if (i) {
                const t = ((h > 0 ? h - i : 0) + (u > 0 ? u - i : 0)) / 2;
                f = (p - (0 !== t ? (p * t) / (t + i) : p)) / 2;
            }
            const g = (p - Math.max(0.001, p * u - n / M) / u) / 2,
                m = l + g + f,
                b = o - g - f,
                { outerStart: x, outerEnd: y, innerStart: v, innerEnd: w } = (function (t, e, n, i) {
                    const o = hn(t.options.borderRadius, ["outerStart", "outerEnd", "innerStart", "innerEnd"]),
                        s = (n - e) / 2,
                        r = Math.min(s, (i * e) / 2),
                        a = (t) => {
                            const e = ((n - Math.min(s, t)) * i) / 2;
                            return Z(t, 0, Math.min(s, e));
                        };
                    return { outerStart: a(o.outerStart), outerEnd: a(o.outerEnd), innerStart: Z(o.innerStart, 0, r), innerEnd: Z(o.innerEnd, 0, r) };
                })(e, d, u, b - m),
                _ = u - x,
                S = u - y,
                C = m + x / _,
                k = b - y / S,
                T = d + v,
                P = d + w,
                D = m + v / T,
                A = b - w / P;
            if ((t.beginPath(), s)) {
                if ((t.arc(r, a, u, C, k), y > 0)) {
                    const e = Fo(S, k, r, a);
                    t.arc(e.x, e.y, y, k, b + L);
                }
                const e = Fo(P, b, r, a);
                if ((t.lineTo(e.x, e.y), w > 0)) {
                    const e = Fo(P, A, r, a);
                    t.arc(e.x, e.y, w, b + L, A + Math.PI);
                }
                if ((t.arc(r, a, d, b - w / d, m + v / d, !0), v > 0)) {
                    const e = Fo(T, D, r, a);
                    t.arc(e.x, e.y, v, D + Math.PI, m - L);
                }
                const n = Fo(_, m, r, a);
                if ((t.lineTo(n.x, n.y), x > 0)) {
                    const e = Fo(_, C, r, a);
                    t.arc(e.x, e.y, x, m - L, C);
                }
            } else {
                t.moveTo(r, a);
                const e = Math.cos(C) * u + r,
                    n = Math.sin(C) * u + a;
                t.lineTo(e, n);
                const i = Math.cos(k) * u + r,
                    o = Math.sin(k) * u + a;
                t.lineTo(i, o);
            }
            t.closePath();
        }
        class zo extends Di {
            constructor(t) {
                super(),
                    (this.options = void 0),
                    (this.circumference = void 0),
                    (this.startAngle = void 0),
                    (this.endAngle = void 0),
                    (this.innerRadius = void 0),
                    (this.outerRadius = void 0),
                    (this.pixelMargin = 0),
                    (this.fullCircles = 0),
                    t && Object.assign(this, t);
            }
            inRange(t, e, n) {
                const i = this.getProps(["x", "y"], n),
                    { angle: o, distance: s } = Y(i, { x: t, y: e }),
                    { startAngle: r, endAngle: l, innerRadius: c, outerRadius: h, circumference: u } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], n),
                    d = this.options.spacing / 2,
                    f = a(u, l - r) >= P || G(o, r, l),
                    p = J(s, c + d, h + d);
                return f && p;
            }
            getCenterPoint(t) {
                const { x: e, y: n, startAngle: i, endAngle: o, innerRadius: s, outerRadius: r } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], t),
                    { offset: a, spacing: l } = this.options,
                    c = (i + o) / 2,
                    h = (s + r + l + a) / 2;
                return { x: e + Math.cos(c) * h, y: n + Math.sin(c) * h };
            }
            tooltipPosition(t) {
                return this.getCenterPoint(t);
            }
            draw(t) {
                const { options: e, circumference: n } = this,
                    i = (e.offset || 0) / 2,
                    o = (e.spacing || 0) / 2,
                    s = e.circular;
                if (((this.pixelMargin = "inner" === e.borderAlign ? 0.33 : 0), (this.fullCircles = n > P ? Math.floor(n / P) : 0), 0 === n || this.innerRadius < 0 || this.outerRadius < 0)) return;
                t.save();
                let r = 0;
                if (i) {
                    r = i / 2;
                    const e = (this.startAngle + this.endAngle) / 2;
                    t.translate(Math.cos(e) * r, Math.sin(e) * r), this.circumference >= M && (r = i);
                }
                (t.fillStyle = e.backgroundColor), (t.strokeStyle = e.borderColor);
                const a = (function (t, e, n, i, o) {
                    const { fullCircles: s, startAngle: r, circumference: a } = e;
                    let l = e.endAngle;
                    if (s) {
                        jo(t, e, n, i, r + P, o);
                        for (let e = 0; e < s; ++e) t.fill();
                        isNaN(a) || ((l = r + (a % P)), a % P == 0 && (l += P));
                    }
                    return jo(t, e, n, i, l, o), t.fill(), l;
                })(t, this, r, o, s);
                (function (t, e, n, i, o, s) {
                    const { options: r } = e,
                        { borderWidth: a, borderJoinStyle: l } = r,
                        c = "inner" === r.borderAlign;
                    a &&
                        (c ? ((t.lineWidth = 2 * a), (t.lineJoin = l || "round")) : ((t.lineWidth = a), (t.lineJoin = l || "bevel")),
                        e.fullCircles &&
                            (function (t, e, n) {
                                const { x: i, y: o, startAngle: s, pixelMargin: r, fullCircles: a } = e,
                                    l = Math.max(e.outerRadius - r, 0),
                                    c = e.innerRadius + r;
                                let h;
                                for (n && Io(t, e, s + P), t.beginPath(), t.arc(i, o, c, s + P, s, !0), h = 0; h < a; ++h) t.stroke();
                                for (t.beginPath(), t.arc(i, o, l, s, s + P), h = 0; h < a; ++h) t.stroke();
                            })(t, e, c),
                        c && Io(t, e, o),
                        jo(t, e, n, i, o, s),
                        t.stroke());
                })(t, this, r, o, a, s),
                    t.restore();
            }
        }
        function No(t, e, n = e) {
            (t.lineCap = a(n.borderCapStyle, e.borderCapStyle)),
                t.setLineDash(a(n.borderDash, e.borderDash)),
                (t.lineDashOffset = a(n.borderDashOffset, e.borderDashOffset)),
                (t.lineJoin = a(n.borderJoinStyle, e.borderJoinStyle)),
                (t.lineWidth = a(n.borderWidth, e.borderWidth)),
                (t.strokeStyle = a(n.borderColor, e.borderColor));
        }
        function Ho(t, e, n) {
            t.lineTo(n.x, n.y);
        }
        function Bo(t, e, n = {}) {
            const i = t.length,
                { start: o = 0, end: s = i - 1 } = n,
                { start: r, end: a } = e,
                l = Math.max(o, r),
                c = Math.min(s, a),
                h = (o < r && s < r) || (o > a && s > a);
            return { count: i, start: l, loop: e.loop, ilen: c < l && !h ? i + c - l : c - l };
        }
        function Wo(t, e, n, i) {
            const { points: o, options: s } = e,
                { count: r, start: a, loop: l, ilen: c } = Bo(o, n, i),
                h = (function (t) {
                    return t.stepped ? ke : t.tension || "monotone" === t.cubicInterpolationMode ? Te : Ho;
                })(s);
            let u,
                d,
                f,
                { move: p = !0, reverse: g } = i || {};
            for (u = 0; u <= c; ++u) (d = o[(a + (g ? c - u : u)) % r]), d.skip || (p ? (t.moveTo(d.x, d.y), (p = !1)) : h(t, f, d, g, s.stepped), (f = d));
            return l && ((d = o[(a + (g ? c : 0)) % r]), h(t, f, d, g, s.stepped)), !!l;
        }
        function Vo(t, e, n, i) {
            const o = e.points,
                { count: s, start: r, ilen: a } = Bo(o, n, i),
                { move: l = !0, reverse: c } = i || {};
            let h,
                u,
                d,
                f,
                p,
                g,
                m = 0,
                b = 0;
            const x = (t) => (r + (c ? a - t : t)) % s,
                y = () => {
                    f !== p && (t.lineTo(m, p), t.lineTo(m, f), t.lineTo(m, g));
                };
            for (l && ((u = o[x(0)]), t.moveTo(u.x, u.y)), h = 0; h <= a; ++h) {
                if (((u = o[x(h)]), u.skip)) continue;
                const e = u.x,
                    n = u.y,
                    i = 0 | e;
                i === d ? (n < f ? (f = n) : n > p && (p = n), (m = (b * m + e) / ++b)) : (y(), t.lineTo(e, n), (d = i), (b = 0), (f = p = n)), (g = n);
            }
            y();
        }
        function qo(t) {
            const e = t.options,
                n = e.borderDash && e.borderDash.length;
            return t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || n ? Wo : Vo;
        }
        (zo.id = "arc"),
            (zo.defaults = { borderAlign: "center", borderColor: "#fff", borderJoinStyle: void 0, borderRadius: 0, borderWidth: 2, offset: 0, spacing: 0, angle: void 0, circular: !0 }),
            (zo.defaultRoutes = { backgroundColor: "backgroundColor" });
        const Yo = "function" == typeof Path2D;
        class Xo extends Di {
            constructor(t) {
                super(),
                    (this.animated = !0),
                    (this.options = void 0),
                    (this._chart = void 0),
                    (this._loop = void 0),
                    (this._fullLoop = void 0),
                    (this._path = void 0),
                    (this._points = void 0),
                    (this._segments = void 0),
                    (this._decimated = !1),
                    (this._pointsUpdated = !1),
                    (this._datasetIndex = void 0),
                    t && Object.assign(this, t);
            }
            updateControlPoints(t, e) {
                const n = this.options;
                if ((n.tension || "monotone" === n.cubicInterpolationMode) && !n.stepped && !this._pointsUpdated) {
                    const i = n.spanGaps ? this._loop : this._fullLoop;
                    Ge(this._points, n, t, i, e), (this._pointsUpdated = !0);
                }
            }
            set points(t) {
                (this._points = t), delete this._segments, delete this._path, (this._pointsUpdated = !1);
            }
            get points() {
                return this._points;
            }
            get segments() {
                return this._segments || (this._segments = kn(this, this.options.segment));
            }
            first() {
                const t = this.segments,
                    e = this.points;
                return t.length && e[t[0].start];
            }
            last() {
                const t = this.segments,
                    e = this.points,
                    n = t.length;
                return n && e[t[n - 1].end];
            }
            interpolate(t, e) {
                const n = this.options,
                    i = t[e],
                    o = this.points,
                    s = Cn(this, { property: e, start: i, end: i });
                if (!s.length) return;
                const r = [],
                    a = (function (t) {
                        return t.stepped ? nn : t.tension || "monotone" === t.cubicInterpolationMode ? on : en;
                    })(n);
                let l, c;
                for (l = 0, c = s.length; l < c; ++l) {
                    const { start: c, end: h } = s[l],
                        u = o[c],
                        d = o[h];
                    if (u === d) {
                        r.push(u);
                        continue;
                    }
                    const f = a(u, d, Math.abs((i - u[e]) / (d[e] - u[e])), n.stepped);
                    (f[e] = t[e]), r.push(f);
                }
                return 1 === r.length ? r[0] : r;
            }
            pathSegment(t, e, n) {
                return qo(this)(t, this, e, n);
            }
            path(t, e, n) {
                const i = this.segments,
                    o = qo(this);
                let s = this._loop;
                (e = e || 0), (n = n || this.points.length - e);
                for (const r of i) s &= o(t, this, r, { start: e, end: e + n - 1 });
                return !!s;
            }
            draw(t, e, n, i) {
                const o = this.options || {};
                (this.points || []).length &&
                    o.borderWidth &&
                    (t.save(),
                    (function (t, e, n, i) {
                        Yo && !e.options.segment
                            ? (function (t, e, n, i) {
                                  let o = e._path;
                                  o || ((o = e._path = new Path2D()), e.path(o, n, i) && o.closePath()), No(t, e.options), t.stroke(o);
                              })(t, e, n, i)
                            : (function (t, e, n, i) {
                                  const { segments: o, options: s } = e,
                                      r = qo(e);
                                  for (const a of o) No(t, s, a.style), t.beginPath(), r(t, e, a, { start: n, end: n + i - 1 }) && t.closePath(), t.stroke();
                              })(t, e, n, i);
                    })(t, this, n, i),
                    t.restore()),
                    this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
            }
        }
        function Uo(t, e, n, i) {
            const o = t.options,
                { [n]: s } = t.getProps([n], i);
            return Math.abs(e - s) < o.radius + o.hitRadius;
        }
        (Xo.id = "line"),
            (Xo.defaults = { borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", borderWidth: 3, capBezierPoints: !0, cubicInterpolationMode: "default", fill: !1, spanGaps: !1, stepped: !1, tension: 0 }),
            (Xo.defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" }),
            (Xo.descriptors = { _scriptable: !0, _indexable: (t) => "borderDash" !== t && "fill" !== t });
        class Ko extends Di {
            constructor(t) {
                super(), (this.options = void 0), (this.parsed = void 0), (this.skip = void 0), (this.stop = void 0), t && Object.assign(this, t);
            }
            inRange(t, e, n) {
                const i = this.options,
                    { x: o, y: s } = this.getProps(["x", "y"], n);
                return Math.pow(t - o, 2) + Math.pow(e - s, 2) < Math.pow(i.hitRadius + i.radius, 2);
            }
            inXRange(t, e) {
                return Uo(this, t, "x", e);
            }
            inYRange(t, e) {
                return Uo(this, t, "y", e);
            }
            getCenterPoint(t) {
                const { x: e, y: n } = this.getProps(["x", "y"], t);
                return { x: e, y: n };
            }
            size(t) {
                let e = (t = t || this.options || {}).radius || 0;
                return (e = Math.max(e, (e && t.hoverRadius) || 0)), 2 * (e + ((e && t.borderWidth) || 0));
            }
            draw(t, e) {
                const n = this.options;
                this.skip || n.radius < 0.1 || !_e(this, e, this.size(n) / 2) || ((t.strokeStyle = n.borderColor), (t.lineWidth = n.borderWidth), (t.fillStyle = n.backgroundColor), ve(t, n, this.x, this.y));
            }
            getRange() {
                const t = this.options || {};
                return t.radius + t.hitRadius;
            }
        }
        function Go(t, e) {
            const { x: n, y: i, base: o, width: s, height: r } = t.getProps(["x", "y", "base", "width", "height"], e);
            let a, l, c, h, u;
            return (
                t.horizontal ? ((u = r / 2), (a = Math.min(n, o)), (l = Math.max(n, o)), (c = i - u), (h = i + u)) : ((u = s / 2), (a = n - u), (l = n + u), (c = Math.min(i, o)), (h = Math.max(i, o))),
                { left: a, top: c, right: l, bottom: h }
            );
        }
        function Zo(t, e, n, i) {
            return t ? 0 : Z(e, n, i);
        }
        function Qo(t) {
            const e = Go(t),
                n = e.right - e.left,
                i = e.bottom - e.top,
                s = (function (t, e, n) {
                    const i = t.options.borderWidth,
                        o = t.borderSkipped,
                        s = un(i);
                    return { t: Zo(o.top, s.top, 0, n), r: Zo(o.right, s.right, 0, e), b: Zo(o.bottom, s.bottom, 0, n), l: Zo(o.left, s.left, 0, e) };
                })(t, n / 2, i / 2),
                r = (function (t, e, n) {
                    const { enableBorderRadius: i } = t.getProps(["enableBorderRadius"]),
                        s = t.options.borderRadius,
                        r = dn(s),
                        a = Math.min(e, n),
                        l = t.borderSkipped,
                        c = i || o(s);
                    return {
                        topLeft: Zo(!c || l.top || l.left, r.topLeft, 0, a),
                        topRight: Zo(!c || l.top || l.right, r.topRight, 0, a),
                        bottomLeft: Zo(!c || l.bottom || l.left, r.bottomLeft, 0, a),
                        bottomRight: Zo(!c || l.bottom || l.right, r.bottomRight, 0, a),
                    };
                })(t, n / 2, i / 2);
            return {
                outer: { x: e.left, y: e.top, w: n, h: i, radius: r },
                inner: {
                    x: e.left + s.l,
                    y: e.top + s.t,
                    w: n - s.l - s.r,
                    h: i - s.t - s.b,
                    radius: {
                        topLeft: Math.max(0, r.topLeft - Math.max(s.t, s.l)),
                        topRight: Math.max(0, r.topRight - Math.max(s.t, s.r)),
                        bottomLeft: Math.max(0, r.bottomLeft - Math.max(s.b, s.l)),
                        bottomRight: Math.max(0, r.bottomRight - Math.max(s.b, s.r)),
                    },
                },
            };
        }
        function Jo(t, e, n, i) {
            const o = null === e,
                s = null === n,
                r = t && !(o && s) && Go(t, i);
            return r && (o || J(e, r.left, r.right)) && (s || J(n, r.top, r.bottom));
        }
        function ts(t, e) {
            t.rect(e.x, e.y, e.w, e.h);
        }
        function es(t, e, n = {}) {
            const i = t.x !== n.x ? -e : 0,
                o = t.y !== n.y ? -e : 0,
                s = (t.x + t.w !== n.x + n.w ? e : 0) - i,
                r = (t.y + t.h !== n.y + n.h ? e : 0) - o;
            return { x: t.x + i, y: t.y + o, w: t.w + s, h: t.h + r, radius: t.radius };
        }
        (Ko.id = "point"),
            (Ko.defaults = { borderWidth: 1, hitRadius: 1, hoverBorderWidth: 1, hoverRadius: 4, pointStyle: "circle", radius: 3, rotation: 0 }),
            (Ko.defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" });
        class ns extends Di {
            constructor(t) {
                super(), (this.options = void 0), (this.horizontal = void 0), (this.base = void 0), (this.width = void 0), (this.height = void 0), (this.inflateAmount = void 0), t && Object.assign(this, t);
            }
            draw(t) {
                const {
                        inflateAmount: e,
                        options: { borderColor: n, backgroundColor: i },
                    } = this,
                    { inner: o, outer: s } = Qo(this),
                    r = (a = s.radius).topLeft || a.topRight || a.bottomLeft || a.bottomRight ? De : ts;
                var a;
                t.save(), (s.w === o.w && s.h === o.h) || (t.beginPath(), r(t, es(s, e, o)), t.clip(), r(t, es(o, -e, s)), (t.fillStyle = n), t.fill("evenodd")), t.beginPath(), r(t, es(o, e)), (t.fillStyle = i), t.fill(), t.restore();
            }
            inRange(t, e, n) {
                return Jo(this, t, e, n);
            }
            inXRange(t, e) {
                return Jo(this, t, null, e);
            }
            inYRange(t, e) {
                return Jo(this, null, t, e);
            }
            getCenterPoint(t) {
                const { x: e, y: n, base: i, horizontal: o } = this.getProps(["x", "y", "base", "horizontal"], t);
                return { x: o ? (e + i) / 2 : e, y: o ? n : (n + i) / 2 };
            }
            getRange(t) {
                return "x" === t ? this.width / 2 : this.height / 2;
            }
        }
        (ns.id = "bar"), (ns.defaults = { borderSkipped: "start", borderWidth: 0, borderRadius: 0, inflateAmount: "auto", pointStyle: void 0 }), (ns.defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" });
        var is = Object.freeze({ __proto__: null, ArcElement: zo, LineElement: Xo, PointElement: Ko, BarElement: ns });
        function os(t) {
            if (t._decimated) {
                const e = t._data;
                delete t._decimated, delete t._data, Object.defineProperty(t, "data", { value: e });
            }
        }
        function ss(t) {
            t.data.datasets.forEach((t) => {
                os(t);
            });
        }
        var rs = {
            id: "decimation",
            defaults: { algorithm: "min-max", enabled: !1 },
            beforeElementsUpdate: (t, e, i) => {
                if (!i.enabled) return void ss(t);
                const o = t.width;
                t.data.datasets.forEach((e, s) => {
                    const { _data: r, indexAxis: a } = e,
                        l = t.getDatasetMeta(s),
                        c = r || e.data;
                    if ("y" === gn([a, t.options.indexAxis])) return;
                    if (!l.controller.supportsDecimation) return;
                    const h = t.scales[l.xAxisID];
                    if ("linear" !== h.type && "time" !== h.type) return;
                    if (t.options.parsing) return;
                    let u,
                        { start: d, count: f } = (function (t, e) {
                            const n = e.length;
                            let i,
                                o = 0;
                            const { iScale: s } = t,
                                { min: r, max: a, minDefined: l, maxDefined: c } = s.getUserBounds();
                            return l && (o = Z(et(e, s.axis, r).lo, 0, n - 1)), (i = c ? Z(et(e, s.axis, a).hi + 1, o, n) - o : n - o), { start: o, count: i };
                        })(l, c);
                    if (f <= (i.threshold || 4 * o)) os(e);
                    else {
                        switch (
                            (n(r) &&
                                ((e._data = c),
                                delete e.data,
                                Object.defineProperty(e, "data", {
                                    configurable: !0,
                                    enumerable: !0,
                                    get: function () {
                                        return this._decimated;
                                    },
                                    set: function (t) {
                                        this._data = t;
                                    },
                                })),
                            i.algorithm)
                        ) {
                            case "lttb":
                                u = (function (t, e, n, i, o) {
                                    const s = o.samples || i;
                                    if (s >= n) return t.slice(e, e + n);
                                    const r = [],
                                        a = (n - 2) / (s - 2);
                                    let l = 0;
                                    const c = e + n - 1;
                                    let h,
                                        u,
                                        d,
                                        f,
                                        p,
                                        g = e;
                                    for (r[l++] = t[g], h = 0; h < s - 2; h++) {
                                        let i,
                                            o = 0,
                                            s = 0;
                                        const c = Math.floor((h + 1) * a) + 1 + e,
                                            m = Math.min(Math.floor((h + 2) * a) + 1, n) + e,
                                            b = m - c;
                                        for (i = c; i < m; i++) (o += t[i].x), (s += t[i].y);
                                        (o /= b), (s /= b);
                                        const x = Math.floor(h * a) + 1 + e,
                                            y = Math.min(Math.floor((h + 1) * a) + 1, n) + e,
                                            { x: v, y: w } = t[g];
                                        for (d = f = -1, i = x; i < y; i++) (f = 0.5 * Math.abs((v - o) * (t[i].y - w) - (v - t[i].x) * (s - w))), f > d && ((d = f), (u = t[i]), (p = i));
                                        (r[l++] = u), (g = p);
                                    }
                                    return (r[l++] = t[c]), r;
                                })(c, d, f, o, i);
                                break;
                            case "min-max":
                                u = (function (t, e, i, o) {
                                    let s,
                                        r,
                                        a,
                                        l,
                                        c,
                                        h,
                                        u,
                                        d,
                                        f,
                                        p,
                                        g = 0,
                                        m = 0;
                                    const b = [],
                                        x = e + i - 1,
                                        y = t[e].x,
                                        v = t[x].x - y;
                                    for (s = e; s < e + i; ++s) {
                                        (r = t[s]), (a = ((r.x - y) / v) * o), (l = r.y);
                                        const e = 0 | a;
                                        if (e === c) l < f ? ((f = l), (h = s)) : l > p && ((p = l), (u = s)), (g = (m * g + r.x) / ++m);
                                        else {
                                            const i = s - 1;
                                            if (!n(h) && !n(u)) {
                                                const e = Math.min(h, u),
                                                    n = Math.max(h, u);
                                                e !== d && e !== i && b.push({ ...t[e], x: g }), n !== d && n !== i && b.push({ ...t[n], x: g });
                                            }
                                            s > 0 && i !== d && b.push(t[i]), b.push(r), (c = e), (m = 0), (f = p = l), (h = u = d = s);
                                        }
                                    }
                                    return b;
                                })(c, d, f, o);
                                break;
                            default:
                                throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`);
                        }
                        e._decimated = u;
                    }
                });
            },
            destroy(t) {
                ss(t);
            },
        };
        function as(t, e, n, i) {
            if (i) return;
            let o = e[t],
                s = n[t];
            return "angle" === t && ((o = K(o)), (s = K(s))), { property: t, start: o, end: s };
        }
        function ls(t, e, n) {
            for (; e > t; e--) {
                const t = n[e];
                if (!isNaN(t.x) && !isNaN(t.y)) break;
            }
            return e;
        }
        function cs(t, e, n, i) {
            return t && e ? i(t[n], e[n]) : t ? t[n] : e ? e[n] : 0;
        }
        function hs(t, e) {
            let n = [],
                o = !1;
            return (
                i(t)
                    ? ((o = !0), (n = t))
                    : (n = (function (t, e) {
                          const { x: n = null, y: i = null } = t || {},
                              o = e.points,
                              s = [];
                          return (
                              e.segments.forEach(({ start: t, end: e }) => {
                                  e = ls(t, e, o);
                                  const r = o[t],
                                      a = o[e];
                                  null !== i ? (s.push({ x: r.x, y: i }), s.push({ x: a.x, y: i })) : null !== n && (s.push({ x: n, y: r.y }), s.push({ x: n, y: a.y }));
                              }),
                              s
                          );
                      })(t, e)),
                n.length ? new Xo({ points: n, options: { tension: 0 }, _loop: o, _fullLoop: o }) : null
            );
        }
        function us(t) {
            return t && !1 !== t.fill;
        }
        function ds(t, e, n) {
            let i = t[e].fill;
            const o = [e];
            let r;
            if (!n) return i;
            for (; !1 !== i && -1 === o.indexOf(i); ) {
                if (!s(i)) return i;
                if (((r = t[i]), !r)) return !1;
                if (r.visible) return i;
                o.push(i), (i = r.fill);
            }
            return !1;
        }
        function fs(t, e, n) {
            const i = (function (t) {
                const e = t.options,
                    n = e.fill;
                let i = a(n && n.target, n);
                return void 0 === i && (i = !!e.backgroundColor), !1 !== i && null !== i && (!0 === i ? "origin" : i);
            })(t);
            if (o(i)) return !isNaN(i.value) && i;
            let r = parseFloat(i);
            return s(r) && Math.floor(r) === r
                ? (function (t, e, n, i) {
                      return ("-" !== t && "+" !== t) || (n = e + n), !(n === e || n < 0 || n >= i) && n;
                  })(i[0], e, r, n)
                : ["origin", "start", "end", "stack", "shape"].indexOf(i) >= 0 && i;
        }
        function ps(t, e, n) {
            const i = [];
            for (let o = 0; o < n.length; o++) {
                const s = n[o],
                    { first: r, last: a, point: l } = gs(s, e, "x");
                if (!(!l || (r && a)))
                    if (r) i.unshift(l);
                    else if ((t.push(l), !a)) break;
            }
            t.push(...i);
        }
        function gs(t, e, n) {
            const i = t.interpolate(e, n);
            if (!i) return {};
            const o = i[n],
                s = t.segments,
                r = t.points;
            let a = !1,
                l = !1;
            for (let t = 0; t < s.length; t++) {
                const e = s[t],
                    i = r[e.start][n],
                    c = r[e.end][n];
                if (J(o, i, c)) {
                    (a = o === i), (l = o === c);
                    break;
                }
            }
            return { first: a, last: l, point: i };
        }
        class ms {
            constructor(t) {
                (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
            }
            pathSegment(t, e, n) {
                const { x: i, y: o, radius: s } = this;
                return (e = e || { start: 0, end: P }), t.arc(i, o, s, e.end, e.start, !0), !n.bounds;
            }
            interpolate(t) {
                const { x: e, y: n, radius: i } = this,
                    o = t.angle;
                return { x: e + Math.cos(o) * i, y: n + Math.sin(o) * i, angle: o };
            }
        }
        function bs(t) {
            const { chart: e, fill: n, line: i } = t;
            if (s(n))
                return (function (t, e) {
                    const n = t.getDatasetMeta(e);
                    return n && t.isDatasetVisible(e) ? n.dataset : null;
                })(e, n);
            if ("stack" === n)
                return (function (t) {
                    const { scale: e, index: n, line: i } = t,
                        o = [],
                        s = i.segments,
                        r = i.points,
                        a = (function (t, e) {
                            const n = [],
                                i = t.getMatchingVisibleMetas("line");
                            for (let t = 0; t < i.length; t++) {
                                const o = i[t];
                                if (o.index === e) break;
                                o.hidden || n.unshift(o.dataset);
                            }
                            return n;
                        })(e, n);
                    a.push(hs({ x: null, y: e.bottom }, i));
                    for (let t = 0; t < s.length; t++) {
                        const e = s[t];
                        for (let t = e.start; t <= e.end; t++) ps(o, r[t], a);
                    }
                    return new Xo({ points: o, options: {} });
                })(t);
            if ("shape" === n) return !0;
            const r = (function (t) {
                return (t.scale || {}).getPointPositionForValue
                    ? (function (t) {
                          const { scale: e, fill: n } = t,
                              i = e.options,
                              s = e.getLabels().length,
                              r = i.reverse ? e.max : e.min,
                              a = (function (t, e, n) {
                                  let i;
                                  return (i = "start" === t ? n : "end" === t ? (e.options.reverse ? e.min : e.max) : o(t) ? t.value : e.getBaseValue()), i;
                              })(n, e, r),
                              l = [];
                          if (i.grid.circular) {
                              const t = e.getPointPositionForValue(0, r);
                              return new ms({ x: t.x, y: t.y, radius: e.getDistanceFromCenterForValue(a) });
                          }
                          for (let t = 0; t < s; ++t) l.push(e.getPointPositionForValue(t, a));
                          return l;
                      })(t)
                    : (function (t) {
                          const { scale: e = {}, fill: n } = t,
                              i = (function (t, e) {
                                  let n = null;
                                  return "start" === t ? (n = e.bottom) : "end" === t ? (n = e.top) : o(t) ? (n = e.getPixelForValue(t.value)) : e.getBasePixel && (n = e.getBasePixel()), n;
                              })(n, e);
                          if (s(i)) {
                              const t = e.isHorizontal();
                              return { x: t ? i : null, y: t ? null : i };
                          }
                          return null;
                      })(t);
            })(t);
            return r instanceof ms ? r : hs(r, i);
        }
        function xs(t, e, n) {
            const i = bs(e),
                { line: o, scale: s, axis: r } = e,
                a = o.options,
                l = a.fill,
                c = a.backgroundColor,
                { above: h = c, below: u = c } = l || {};
            i &&
                o.points.length &&
                (Se(t, n),
                (function (t, e) {
                    const { line: n, target: i, above: o, below: s, area: r, scale: a } = e,
                        l = n._loop ? "angle" : e.axis;
                    t.save(),
                        "x" === l && s !== o && (ys(t, i, r.top), vs(t, { line: n, target: i, color: o, scale: a, property: l }), t.restore(), t.save(), ys(t, i, r.bottom)),
                        vs(t, { line: n, target: i, color: s, scale: a, property: l }),
                        t.restore();
                })(t, { line: o, target: i, above: h, below: u, area: n, scale: s, axis: r }),
                Ce(t));
        }
        function ys(t, e, n) {
            const { segments: i, points: o } = e;
            let s = !0,
                r = !1;
            t.beginPath();
            for (const a of i) {
                const { start: i, end: l } = a,
                    c = o[i],
                    h = o[ls(i, l, o)];
                s ? (t.moveTo(c.x, c.y), (s = !1)) : (t.lineTo(c.x, n), t.lineTo(c.x, c.y)), (r = !!e.pathSegment(t, a, { move: r })), r ? t.closePath() : t.lineTo(h.x, n);
            }
            t.lineTo(e.first().x, n), t.closePath(), t.clip();
        }
        function vs(t, e) {
            const { line: n, target: i, property: o, color: s, scale: r } = e,
                a = (function (t, e, n) {
                    const i = t.segments,
                        o = t.points,
                        s = e.points,
                        r = [];
                    for (const t of i) {
                        let { start: i, end: a } = t;
                        a = ls(i, a, o);
                        const l = as(n, o[i], o[a], t.loop);
                        if (!e.segments) {
                            r.push({ source: t, target: l, start: o[i], end: o[a] });
                            continue;
                        }
                        const c = Cn(e, l);
                        for (const e of c) {
                            const i = as(n, s[e.start], s[e.end], e.loop),
                                a = Sn(t, o, i);
                            for (const t of a) r.push({ source: t, target: e, start: { [n]: cs(l, i, "start", Math.max) }, end: { [n]: cs(l, i, "end", Math.min) } });
                        }
                    }
                    return r;
                })(n, i, o);
            for (const { source: e, target: l, start: c, end: h } of a) {
                const { style: { backgroundColor: a = s } = {} } = e,
                    u = !0 !== i;
                t.save(), (t.fillStyle = a), ws(t, r, u && as(o, c, h)), t.beginPath();
                const d = !!n.pathSegment(t, e);
                let f;
                if (u) {
                    d ? t.closePath() : _s(t, i, h, o);
                    const e = !!i.pathSegment(t, l, { move: d, reverse: !0 });
                    (f = d && e), f || _s(t, i, c, o);
                }
                t.closePath(), t.fill(f ? "evenodd" : "nonzero"), t.restore();
            }
        }
        function ws(t, e, n) {
            const { top: i, bottom: o } = e.chart.chartArea,
                { property: s, start: r, end: a } = n || {};
            "x" === s && (t.beginPath(), t.rect(r, i, a - r, o - i), t.clip());
        }
        function _s(t, e, n, i) {
            const o = e.interpolate(n, i);
            o && t.lineTo(o.x, o.y);
        }
        var Ss = {
            id: "filler",
            afterDatasetsUpdate(t, e, n) {
                const i = (t.data.datasets || []).length,
                    o = [];
                let s, r, a, l;
                for (r = 0; r < i; ++r)
                    (s = t.getDatasetMeta(r)),
                        (a = s.dataset),
                        (l = null),
                        a && a.options && a instanceof Xo && (l = { visible: t.isDatasetVisible(r), index: r, fill: fs(a, r, i), chart: t, axis: s.controller.options.indexAxis, scale: s.vScale, line: a }),
                        (s.$filler = l),
                        o.push(l);
                for (r = 0; r < i; ++r) (l = o[r]), l && !1 !== l.fill && (l.fill = ds(o, r, n.propagate));
            },
            beforeDraw(t, e, n) {
                const i = "beforeDraw" === n.drawTime,
                    o = t.getSortedVisibleDatasetMetas(),
                    s = t.chartArea;
                for (let e = o.length - 1; e >= 0; --e) {
                    const n = o[e].$filler;
                    n && (n.line.updateControlPoints(s, n.axis), i && n.fill && xs(t.ctx, n, s));
                }
            },
            beforeDatasetsDraw(t, e, n) {
                if ("beforeDatasetsDraw" !== n.drawTime) return;
                const i = t.getSortedVisibleDatasetMetas();
                for (let e = i.length - 1; e >= 0; --e) {
                    const n = i[e].$filler;
                    us(n) && xs(t.ctx, n, t.chartArea);
                }
            },
            beforeDatasetDraw(t, e, n) {
                const i = e.meta.$filler;
                us(i) && "beforeDatasetDraw" === n.drawTime && xs(t.ctx, i, t.chartArea);
            },
            defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
        };
        const Cs = (t, e) => {
            let { boxHeight: n = e, boxWidth: i = e } = t;
            return t.usePointStyle && ((n = Math.min(n, e)), (i = t.pointStyleWidth || Math.min(i, e))), { boxWidth: i, boxHeight: n, itemHeight: Math.max(e, n) };
        };
        class ks extends Di {
            constructor(t) {
                super(),
                    (this._added = !1),
                    (this.legendHitBoxes = []),
                    (this._hoveredItem = null),
                    (this.doughnutMode = !1),
                    (this.chart = t.chart),
                    (this.options = t.options),
                    (this.ctx = t.ctx),
                    (this.legendItems = void 0),
                    (this.columnSizes = void 0),
                    (this.lineWidths = void 0),
                    (this.maxHeight = void 0),
                    (this.maxWidth = void 0),
                    (this.top = void 0),
                    (this.bottom = void 0),
                    (this.left = void 0),
                    (this.right = void 0),
                    (this.height = void 0),
                    (this.width = void 0),
                    (this._margins = void 0),
                    (this.position = void 0),
                    (this.weight = void 0),
                    (this.fullSize = void 0);
            }
            update(t, e, n) {
                (this.maxWidth = t), (this.maxHeight = e), (this._margins = n), this.setDimensions(), this.buildLabels(), this.fit();
            }
            setDimensions() {
                this.isHorizontal() ? ((this.width = this.maxWidth), (this.left = this._margins.left), (this.right = this.width)) : ((this.height = this.maxHeight), (this.top = this._margins.top), (this.bottom = this.height));
            }
            buildLabels() {
                const t = this.options.labels || {};
                let e = h(t.generateLabels, [this.chart], this) || [];
                t.filter && (e = e.filter((e) => t.filter(e, this.chart.data))), t.sort && (e = e.sort((e, n) => t.sort(e, n, this.chart.data))), this.options.reverse && e.reverse(), (this.legendItems = e);
            }
            fit() {
                const { options: t, ctx: e } = this;
                if (!t.display) return void (this.width = this.height = 0);
                const n = t.labels,
                    i = pn(n.font),
                    o = i.size,
                    s = this._computeTitleHeight(),
                    { boxWidth: r, itemHeight: a } = Cs(n, o);
                let l, c;
                (e.font = i.string),
                    this.isHorizontal() ? ((l = this.maxWidth), (c = this._fitRows(s, o, r, a) + 10)) : ((c = this.maxHeight), (l = this._fitCols(s, o, r, a) + 10)),
                    (this.width = Math.min(l, t.maxWidth || this.maxWidth)),
                    (this.height = Math.min(c, t.maxHeight || this.maxHeight));
            }
            _fitRows(t, e, n, i) {
                const {
                        ctx: o,
                        maxWidth: s,
                        options: {
                            labels: { padding: r },
                        },
                    } = this,
                    a = (this.legendHitBoxes = []),
                    l = (this.lineWidths = [0]),
                    c = i + r;
                let h = t;
                (o.textAlign = "left"), (o.textBaseline = "middle");
                let u = -1,
                    d = -c;
                return (
                    this.legendItems.forEach((t, f) => {
                        const p = n + e / 2 + o.measureText(t.text).width;
                        (0 === f || l[l.length - 1] + p + 2 * r > s) && ((h += c), (l[l.length - (f > 0 ? 0 : 1)] = 0), (d += c), u++), (a[f] = { left: 0, top: d, row: u, width: p, height: i }), (l[l.length - 1] += p + r);
                    }),
                    h
                );
            }
            _fitCols(t, e, n, i) {
                const {
                        ctx: o,
                        maxHeight: s,
                        options: {
                            labels: { padding: r },
                        },
                    } = this,
                    a = (this.legendHitBoxes = []),
                    l = (this.columnSizes = []),
                    c = s - t;
                let h = r,
                    u = 0,
                    d = 0,
                    f = 0,
                    p = 0;
                return (
                    this.legendItems.forEach((t, s) => {
                        const g = n + e / 2 + o.measureText(t.text).width;
                        s > 0 && d + i + 2 * r > c && ((h += u + r), l.push({ width: u, height: d }), (f += u + r), p++, (u = d = 0)), (a[s] = { left: f, top: d, col: p, width: g, height: i }), (u = Math.max(u, g)), (d += i + r);
                    }),
                    (h += u),
                    l.push({ width: u, height: d }),
                    h
                );
            }
            adjustHitBoxes() {
                if (!this.options.display) return;
                const t = this._computeTitleHeight(),
                    {
                        legendHitBoxes: e,
                        options: {
                            align: n,
                            labels: { padding: i },
                            rtl: o,
                        },
                    } = this,
                    s = xn(o, this.left, this.width);
                if (this.isHorizontal()) {
                    let o = 0,
                        r = dt(n, this.left + i, this.right - this.lineWidths[o]);
                    for (const a of e) o !== a.row && ((o = a.row), (r = dt(n, this.left + i, this.right - this.lineWidths[o]))), (a.top += this.top + t + i), (a.left = s.leftForLtr(s.x(r), a.width)), (r += a.width + i);
                } else {
                    let o = 0,
                        r = dt(n, this.top + t + i, this.bottom - this.columnSizes[o].height);
                    for (const a of e)
                        a.col !== o && ((o = a.col), (r = dt(n, this.top + t + i, this.bottom - this.columnSizes[o].height))), (a.top = r), (a.left += this.left + i), (a.left = s.leftForLtr(s.x(a.left), a.width)), (r += a.height + i);
                }
            }
            isHorizontal() {
                return "top" === this.options.position || "bottom" === this.options.position;
            }
            draw() {
                if (this.options.display) {
                    const t = this.ctx;
                    Se(t, this), this._draw(), Ce(t);
                }
            }
            _draw() {
                const { options: t, columnSizes: e, lineWidths: n, ctx: i } = this,
                    { align: o, labels: s } = t,
                    r = ee.color,
                    l = xn(t.rtl, this.left, this.width),
                    c = pn(s.font),
                    { color: h, padding: u } = s,
                    d = c.size,
                    f = d / 2;
                let p;
                this.drawTitle(), (i.textAlign = l.textAlign("left")), (i.textBaseline = "middle"), (i.lineWidth = 0.5), (i.font = c.string);
                const { boxWidth: g, boxHeight: m, itemHeight: b } = Cs(s, d),
                    x = this.isHorizontal(),
                    y = this._computeTitleHeight();
                (p = x ? { x: dt(o, this.left + u, this.right - n[0]), y: this.top + u + y, line: 0 } : { x: this.left + u, y: dt(o, this.top + y + u, this.bottom - e[0].height), line: 0 }), yn(this.ctx, t.textDirection);
                const v = b + u;
                this.legendItems.forEach((w, _) => {
                    (i.strokeStyle = w.fontColor || h), (i.fillStyle = w.fontColor || h);
                    const S = i.measureText(w.text).width,
                        C = l.textAlign(w.textAlign || (w.textAlign = s.textAlign)),
                        k = g + f + S;
                    let T = p.x,
                        M = p.y;
                    l.setWidth(this.width),
                        x
                            ? _ > 0 && T + k + u > this.right && ((M = p.y += v), p.line++, (T = p.x = dt(o, this.left + u, this.right - n[p.line])))
                            : _ > 0 && M + v > this.bottom && ((T = p.x = T + e[p.line].width + u), p.line++, (M = p.y = dt(o, this.top + y + u, this.bottom - e[p.line].height))),
                        (function (t, e, n) {
                            if (isNaN(g) || g <= 0 || isNaN(m) || m < 0) return;
                            i.save();
                            const o = a(n.lineWidth, 1);
                            if (
                                ((i.fillStyle = a(n.fillStyle, r)),
                                (i.lineCap = a(n.lineCap, "butt")),
                                (i.lineDashOffset = a(n.lineDashOffset, 0)),
                                (i.lineJoin = a(n.lineJoin, "miter")),
                                (i.lineWidth = o),
                                (i.strokeStyle = a(n.strokeStyle, r)),
                                i.setLineDash(a(n.lineDash, [])),
                                s.usePointStyle)
                            ) {
                                const r = { radius: (m * Math.SQRT2) / 2, pointStyle: n.pointStyle, rotation: n.rotation, borderWidth: o },
                                    a = l.xPlus(t, g / 2);
                                we(i, r, a, e + f, s.pointStyleWidth && g);
                            } else {
                                const s = e + Math.max((d - m) / 2, 0),
                                    r = l.leftForLtr(t, g),
                                    a = dn(n.borderRadius);
                                i.beginPath(), Object.values(a).some((t) => 0 !== t) ? De(i, { x: r, y: s, w: g, h: m, radius: a }) : i.rect(r, s, g, m), i.fill(), 0 !== o && i.stroke();
                            }
                            i.restore();
                        })(l.x(T), M, w),
                        (T = ft(C, T + g + f, x ? T + k : this.right, t.rtl)),
                        (function (t, e, n) {
                            Me(i, n.text, t, e + b / 2, c, { strikethrough: n.hidden, textAlign: l.textAlign(n.textAlign) });
                        })(l.x(T), M, w),
                        x ? (p.x += k + u) : (p.y += v);
                }),
                    vn(this.ctx, t.textDirection);
            }
            drawTitle() {
                const t = this.options,
                    e = t.title,
                    n = pn(e.font),
                    i = fn(e.padding);
                if (!e.display) return;
                const o = xn(t.rtl, this.left, this.width),
                    s = this.ctx,
                    r = e.position,
                    a = n.size / 2,
                    l = i.top + a;
                let c,
                    h = this.left,
                    u = this.width;
                if (this.isHorizontal()) (u = Math.max(...this.lineWidths)), (c = this.top + l), (h = dt(t.align, h, this.right - u));
                else {
                    const e = this.columnSizes.reduce((t, e) => Math.max(t, e.height), 0);
                    c = l + dt(t.align, this.top, this.bottom - e - t.labels.padding - this._computeTitleHeight());
                }
                const d = dt(r, h, h + u);
                (s.textAlign = o.textAlign(ut(r))), (s.textBaseline = "middle"), (s.strokeStyle = e.color), (s.fillStyle = e.color), (s.font = n.string), Me(s, e.text, d, c, n);
            }
            _computeTitleHeight() {
                const t = this.options.title,
                    e = pn(t.font),
                    n = fn(t.padding);
                return t.display ? e.lineHeight + n.height : 0;
            }
            _getLegendItemAt(t, e) {
                let n, i, o;
                if (J(t, this.left, this.right) && J(e, this.top, this.bottom))
                    for (o = this.legendHitBoxes, n = 0; n < o.length; ++n) if (((i = o[n]), J(t, i.left, i.left + i.width) && J(e, i.top, i.top + i.height))) return this.legendItems[n];
                return null;
            }
            handleEvent(t) {
                const e = this.options;
                if (
                    !(function (t, e) {
                        return !(("mousemove" !== t && "mouseout" !== t) || (!e.onHover && !e.onLeave)) || !(!e.onClick || ("click" !== t && "mouseup" !== t));
                    })(t.type, e)
                )
                    return;
                const n = this._getLegendItemAt(t.x, t.y);
                if ("mousemove" === t.type || "mouseout" === t.type) {
                    const s = this._hoveredItem,
                        r = ((o = n), null !== (i = s) && null !== o && i.datasetIndex === o.datasetIndex && i.index === o.index);
                    s && !r && h(e.onLeave, [t, s, this], this), (this._hoveredItem = n), n && !r && h(e.onHover, [t, n, this], this);
                } else n && h(e.onClick, [t, n, this], this);
                var i, o;
            }
        }
        var Ts = {
            id: "legend",
            _element: ks,
            start(t, e, n) {
                const i = (t.legend = new ks({ ctx: t.ctx, options: n, chart: t }));
                Xn.configure(t, i, n), Xn.addBox(t, i);
            },
            stop(t) {
                Xn.removeBox(t, t.legend), delete t.legend;
            },
            beforeUpdate(t, e, n) {
                const i = t.legend;
                Xn.configure(t, i, n), (i.options = n);
            },
            afterUpdate(t) {
                const e = t.legend;
                e.buildLabels(), e.adjustHitBoxes();
            },
            afterEvent(t, e) {
                e.replay || t.legend.handleEvent(e.event);
            },
            defaults: {
                display: !0,
                position: "top",
                align: "center",
                fullSize: !0,
                reverse: !1,
                weight: 1e3,
                onClick(t, e, n) {
                    const i = e.datasetIndex,
                        o = n.chart;
                    o.isDatasetVisible(i) ? (o.hide(i), (e.hidden = !0)) : (o.show(i), (e.hidden = !1));
                },
                onHover: null,
                onLeave: null,
                labels: {
                    color: (t) => t.chart.options.color,
                    boxWidth: 40,
                    padding: 10,
                    generateLabels(t) {
                        const e = t.data.datasets,
                            {
                                labels: { usePointStyle: n, pointStyle: i, textAlign: o, color: s },
                            } = t.legend.options;
                        return t._getSortedDatasetMetas().map((t) => {
                            const r = t.controller.getStyle(n ? 0 : void 0),
                                a = fn(r.borderWidth);
                            return {
                                text: e[t.index].label,
                                fillStyle: r.backgroundColor,
                                fontColor: s,
                                hidden: !t.visible,
                                lineCap: r.borderCapStyle,
                                lineDash: r.borderDash,
                                lineDashOffset: r.borderDashOffset,
                                lineJoin: r.borderJoinStyle,
                                lineWidth: (a.width + a.height) / 4,
                                strokeStyle: r.borderColor,
                                pointStyle: i || r.pointStyle,
                                rotation: r.rotation,
                                textAlign: o || r.textAlign,
                                borderRadius: 0,
                                datasetIndex: t.index,
                            };
                        }, this);
                    },
                },
                title: { color: (t) => t.chart.options.color, display: !1, position: "center", text: "" },
            },
            descriptors: { _scriptable: (t) => !t.startsWith("on"), labels: { _scriptable: (t) => !["generateLabels", "filter", "sort"].includes(t) } },
        };
        class Ms extends Di {
            constructor(t) {
                super(),
                    (this.chart = t.chart),
                    (this.options = t.options),
                    (this.ctx = t.ctx),
                    (this._padding = void 0),
                    (this.top = void 0),
                    (this.bottom = void 0),
                    (this.left = void 0),
                    (this.right = void 0),
                    (this.width = void 0),
                    (this.height = void 0),
                    (this.position = void 0),
                    (this.weight = void 0),
                    (this.fullSize = void 0);
            }
            update(t, e) {
                const n = this.options;
                if (((this.left = 0), (this.top = 0), !n.display)) return void (this.width = this.height = this.right = this.bottom = 0);
                (this.width = this.right = t), (this.height = this.bottom = e);
                const o = i(n.text) ? n.text.length : 1;
                this._padding = fn(n.padding);
                const s = o * pn(n.font).lineHeight + this._padding.height;
                this.isHorizontal() ? (this.height = s) : (this.width = s);
            }
            isHorizontal() {
                const t = this.options.position;
                return "top" === t || "bottom" === t;
            }
            _drawArgs(t) {
                const { top: e, left: n, bottom: i, right: o, options: s } = this,
                    r = s.align;
                let a,
                    l,
                    c,
                    h = 0;
                return (
                    this.isHorizontal() ? ((l = dt(r, n, o)), (c = e + t), (a = o - n)) : ("left" === s.position ? ((l = n + t), (c = dt(r, i, e)), (h = -0.5 * M)) : ((l = o - t), (c = dt(r, e, i)), (h = 0.5 * M)), (a = i - e)),
                    { titleX: l, titleY: c, maxWidth: a, rotation: h }
                );
            }
            draw() {
                const t = this.ctx,
                    e = this.options;
                if (!e.display) return;
                const n = pn(e.font),
                    i = n.lineHeight / 2 + this._padding.top,
                    { titleX: o, titleY: s, maxWidth: r, rotation: a } = this._drawArgs(i);
                Me(t, e.text, 0, 0, n, { color: e.color, maxWidth: r, rotation: a, textAlign: ut(e.align), textBaseline: "middle", translation: [o, s] });
            }
        }
        var Ps = {
            id: "title",
            _element: Ms,
            start(t, e, n) {
                !(function (t, e) {
                    const n = new Ms({ ctx: t.ctx, options: e, chart: t });
                    Xn.configure(t, n, e), Xn.addBox(t, n), (t.titleBlock = n);
                })(t, n);
            },
            stop(t) {
                const e = t.titleBlock;
                Xn.removeBox(t, e), delete t.titleBlock;
            },
            beforeUpdate(t, e, n) {
                const i = t.titleBlock;
                Xn.configure(t, i, n), (i.options = n);
            },
            defaults: { align: "center", display: !1, font: { weight: "bold" }, fullSize: !0, padding: 10, position: "top", text: "", weight: 2e3 },
            defaultRoutes: { color: "color" },
            descriptors: { _scriptable: !0, _indexable: !1 },
        };
        const Ds = new WeakMap();
        var As = {
            id: "subtitle",
            start(t, e, n) {
                const i = new Ms({ ctx: t.ctx, options: n, chart: t });
                Xn.configure(t, i, n), Xn.addBox(t, i), Ds.set(t, i);
            },
            stop(t) {
                Xn.removeBox(t, Ds.get(t)), Ds.delete(t);
            },
            beforeUpdate(t, e, n) {
                const i = Ds.get(t);
                Xn.configure(t, i, n), (i.options = n);
            },
            defaults: { align: "center", display: !1, font: { weight: "normal" }, fullSize: !0, padding: 0, position: "top", text: "", weight: 1500 },
            defaultRoutes: { color: "color" },
            descriptors: { _scriptable: !0, _indexable: !1 },
        };
        const Es = {
            average(t) {
                if (!t.length) return !1;
                let e,
                    n,
                    i = 0,
                    o = 0,
                    s = 0;
                for (e = 0, n = t.length; e < n; ++e) {
                    const n = t[e].element;
                    if (n && n.hasValue()) {
                        const t = n.tooltipPosition();
                        (i += t.x), (o += t.y), ++s;
                    }
                }
                return { x: i / s, y: o / s };
            },
            nearest(t, e) {
                if (!t.length) return !1;
                let n,
                    i,
                    o,
                    s = e.x,
                    r = e.y,
                    a = Number.POSITIVE_INFINITY;
                for (n = 0, i = t.length; n < i; ++n) {
                    const i = t[n].element;
                    if (i && i.hasValue()) {
                        const t = X(e, i.getCenterPoint());
                        t < a && ((a = t), (o = i));
                    }
                }
                if (o) {
                    const t = o.tooltipPosition();
                    (s = t.x), (r = t.y);
                }
                return { x: s, y: r };
            },
        };
        function Ls(t, e) {
            return e && (i(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
        }
        function Os(t) {
            return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t;
        }
        function Rs(t, e) {
            const { element: n, datasetIndex: i, index: o } = e,
                s = t.getDatasetMeta(i).controller,
                { label: r, value: a } = s.getLabelAndValue(o);
            return { chart: t, label: r, parsed: s.getParsed(o), raw: t.data.datasets[i].data[o], formattedValue: a, dataset: s.getDataset(), dataIndex: o, datasetIndex: i, element: n };
        }
        function $s(t, e) {
            const n = t.chart.ctx,
                { body: i, footer: o, title: s } = t,
                { boxWidth: r, boxHeight: a } = e,
                l = pn(e.bodyFont),
                c = pn(e.titleFont),
                h = pn(e.footerFont),
                d = s.length,
                f = o.length,
                p = i.length,
                g = fn(e.padding);
            let m = g.height,
                b = 0,
                x = i.reduce((t, e) => t + e.before.length + e.lines.length + e.after.length, 0);
            (x += t.beforeBody.length + t.afterBody.length),
                d && (m += d * c.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom),
                x && (m += p * (e.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight) + (x - p) * l.lineHeight + (x - 1) * e.bodySpacing),
                f && (m += e.footerMarginTop + f * h.lineHeight + (f - 1) * e.footerSpacing);
            let y = 0;
            const v = function (t) {
                b = Math.max(b, n.measureText(t).width + y);
            };
            return (
                n.save(),
                (n.font = c.string),
                u(t.title, v),
                (n.font = l.string),
                u(t.beforeBody.concat(t.afterBody), v),
                (y = e.displayColors ? r + 2 + e.boxPadding : 0),
                u(i, (t) => {
                    u(t.before, v), u(t.lines, v), u(t.after, v);
                }),
                (y = 0),
                (n.font = h.string),
                u(t.footer, v),
                n.restore(),
                (b += g.width),
                { width: b, height: m }
            );
        }
        function Is(t, e, n, i) {
            const { x: o, width: s } = n,
                {
                    width: r,
                    chartArea: { left: a, right: l },
                } = t;
            let c = "center";
            return (
                "center" === i ? (c = o <= (a + l) / 2 ? "left" : "right") : o <= s / 2 ? (c = "left") : o >= r - s / 2 && (c = "right"),
                (function (t, e, n, i) {
                    const { x: o, width: s } = i,
                        r = n.caretSize + n.caretPadding;
                    return ("left" === t && o + s + r > e.width) || ("right" === t && o - s - r < 0) || void 0;
                })(c, t, e, n) && (c = "center"),
                c
            );
        }
        function Fs(t, e, n) {
            const i =
                n.yAlign ||
                e.yAlign ||
                (function (t, e) {
                    const { y: n, height: i } = e;
                    return n < i / 2 ? "top" : n > t.height - i / 2 ? "bottom" : "center";
                })(t, n);
            return { xAlign: n.xAlign || e.xAlign || Is(t, e, n, i), yAlign: i };
        }
        function js(t, e, n, i) {
            const { caretSize: o, caretPadding: s, cornerRadius: r } = t,
                { xAlign: a, yAlign: l } = n,
                c = o + s,
                { topLeft: h, topRight: u, bottomLeft: d, bottomRight: f } = dn(r);
            let p = (function (t, e) {
                let { x: n, width: i } = t;
                return "right" === e ? (n -= i) : "center" === e && (n -= i / 2), n;
            })(e, a);
            const g = (function (t, e, n) {
                let { y: i, height: o } = t;
                return "top" === e ? (i += n) : (i -= "bottom" === e ? o + n : o / 2), i;
            })(e, l, c);
            return (
                "center" === l ? ("left" === a ? (p += c) : "right" === a && (p -= c)) : "left" === a ? (p -= Math.max(h, d) + o) : "right" === a && (p += Math.max(u, f) + o),
                { x: Z(p, 0, i.width - e.width), y: Z(g, 0, i.height - e.height) }
            );
        }
        function zs(t, e, n) {
            const i = fn(n.padding);
            return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - i.right : t.x + i.left;
        }
        function Ns(t) {
            return Ls([], Os(t));
        }
        function Hs(t, e) {
            const n = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
            return n ? t.override(n) : t;
        }
        class Bs extends Di {
            constructor(t) {
                super(),
                    (this.opacity = 0),
                    (this._active = []),
                    (this._eventPosition = void 0),
                    (this._size = void 0),
                    (this._cachedAnimations = void 0),
                    (this._tooltipItems = []),
                    (this.$animations = void 0),
                    (this.$context = void 0),
                    (this.chart = t.chart || t._chart),
                    (this._chart = this.chart),
                    (this.options = t.options),
                    (this.dataPoints = void 0),
                    (this.title = void 0),
                    (this.beforeBody = void 0),
                    (this.body = void 0),
                    (this.afterBody = void 0),
                    (this.footer = void 0),
                    (this.xAlign = void 0),
                    (this.yAlign = void 0),
                    (this.x = void 0),
                    (this.y = void 0),
                    (this.height = void 0),
                    (this.width = void 0),
                    (this.caretX = void 0),
                    (this.caretY = void 0),
                    (this.labelColors = void 0),
                    (this.labelPointStyles = void 0),
                    (this.labelTextColors = void 0);
            }
            initialize(t) {
                (this.options = t), (this._cachedAnimations = void 0), (this.$context = void 0);
            }
            _resolveAnimations() {
                const t = this._cachedAnimations;
                if (t) return t;
                const e = this.chart,
                    n = this.options.setContext(this.getContext()),
                    i = n.enabled && e.options.animation && n.animations,
                    o = new mi(this.chart, i);
                return i._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
            }
            getContext() {
                return this.$context || (this.$context = (this, bn(this.chart.getContext(), { tooltip: this, tooltipItems: this._tooltipItems, type: "tooltip" })));
            }
            getTitle(t, e) {
                const { callbacks: n } = e,
                    i = n.beforeTitle.apply(this, [t]),
                    o = n.title.apply(this, [t]),
                    s = n.afterTitle.apply(this, [t]);
                let r = [];
                return (r = Ls(r, Os(i))), (r = Ls(r, Os(o))), (r = Ls(r, Os(s))), r;
            }
            getBeforeBody(t, e) {
                return Ns(e.callbacks.beforeBody.apply(this, [t]));
            }
            getBody(t, e) {
                const { callbacks: n } = e,
                    i = [];
                return (
                    u(t, (t) => {
                        const e = { before: [], lines: [], after: [] },
                            o = Hs(n, t);
                        Ls(e.before, Os(o.beforeLabel.call(this, t))), Ls(e.lines, o.label.call(this, t)), Ls(e.after, Os(o.afterLabel.call(this, t))), i.push(e);
                    }),
                    i
                );
            }
            getAfterBody(t, e) {
                return Ns(e.callbacks.afterBody.apply(this, [t]));
            }
            getFooter(t, e) {
                const { callbacks: n } = e,
                    i = n.beforeFooter.apply(this, [t]),
                    o = n.footer.apply(this, [t]),
                    s = n.afterFooter.apply(this, [t]);
                let r = [];
                return (r = Ls(r, Os(i))), (r = Ls(r, Os(o))), (r = Ls(r, Os(s))), r;
            }
            _createItems(t) {
                const e = this._active,
                    n = this.chart.data,
                    i = [],
                    o = [],
                    s = [];
                let r,
                    a,
                    l = [];
                for (r = 0, a = e.length; r < a; ++r) l.push(Rs(this.chart, e[r]));
                return (
                    t.filter && (l = l.filter((e, i, o) => t.filter(e, i, o, n))),
                    t.itemSort && (l = l.sort((e, i) => t.itemSort(e, i, n))),
                    u(l, (e) => {
                        const n = Hs(t.callbacks, e);
                        i.push(n.labelColor.call(this, e)), o.push(n.labelPointStyle.call(this, e)), s.push(n.labelTextColor.call(this, e));
                    }),
                    (this.labelColors = i),
                    (this.labelPointStyles = o),
                    (this.labelTextColors = s),
                    (this.dataPoints = l),
                    l
                );
            }
            update(t, e) {
                const n = this.options.setContext(this.getContext()),
                    i = this._active;
                let o,
                    s = [];
                if (i.length) {
                    const t = Es[n.position].call(this, i, this._eventPosition);
                    (s = this._createItems(n)),
                        (this.title = this.getTitle(s, n)),
                        (this.beforeBody = this.getBeforeBody(s, n)),
                        (this.body = this.getBody(s, n)),
                        (this.afterBody = this.getAfterBody(s, n)),
                        (this.footer = this.getFooter(s, n));
                    const e = (this._size = $s(this, n)),
                        r = Object.assign({}, t, e),
                        a = Fs(this.chart, n, r),
                        l = js(n, r, a, this.chart);
                    (this.xAlign = a.xAlign), (this.yAlign = a.yAlign), (o = { opacity: 1, x: l.x, y: l.y, width: e.width, height: e.height, caretX: t.x, caretY: t.y });
                } else 0 !== this.opacity && (o = { opacity: 0 });
                (this._tooltipItems = s), (this.$context = void 0), o && this._resolveAnimations().update(this, o), t && n.external && n.external.call(this, { chart: this.chart, tooltip: this, replay: e });
            }
            drawCaret(t, e, n, i) {
                const o = this.getCaretPosition(t, n, i);
                e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
            }
            getCaretPosition(t, e, n) {
                const { xAlign: i, yAlign: o } = this,
                    { caretSize: s, cornerRadius: r } = n,
                    { topLeft: a, topRight: l, bottomLeft: c, bottomRight: h } = dn(r),
                    { x: u, y: d } = t,
                    { width: f, height: p } = e;
                let g, m, b, x, y, v;
                return (
                    "center" === o
                        ? ((y = d + p / 2), "left" === i ? ((g = u), (m = g - s), (x = y + s), (v = y - s)) : ((g = u + f), (m = g + s), (x = y - s), (v = y + s)), (b = g))
                        : ((m = "left" === i ? u + Math.max(a, c) + s : "right" === i ? u + f - Math.max(l, h) - s : this.caretX),
                          "top" === o ? ((x = d), (y = x - s), (g = m - s), (b = m + s)) : ((x = d + p), (y = x + s), (g = m + s), (b = m - s)),
                          (v = x)),
                    { x1: g, x2: m, x3: b, y1: x, y2: y, y3: v }
                );
            }
            drawTitle(t, e, n) {
                const i = this.title,
                    o = i.length;
                let s, r, a;
                if (o) {
                    const l = xn(n.rtl, this.x, this.width);
                    for (t.x = zs(this, n.titleAlign, n), e.textAlign = l.textAlign(n.titleAlign), e.textBaseline = "middle", s = pn(n.titleFont), r = n.titleSpacing, e.fillStyle = n.titleColor, e.font = s.string, a = 0; a < o; ++a)
                        e.fillText(i[a], l.x(t.x), t.y + s.lineHeight / 2), (t.y += s.lineHeight + r), a + 1 === o && (t.y += n.titleMarginBottom - r);
                }
            }
            _drawColorBox(t, e, n, i, s) {
                const r = this.labelColors[n],
                    a = this.labelPointStyles[n],
                    { boxHeight: l, boxWidth: c, boxPadding: h } = s,
                    u = pn(s.bodyFont),
                    d = zs(this, "left", s),
                    f = i.x(d),
                    p = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0,
                    g = e.y + p;
                if (s.usePointStyle) {
                    const e = { radius: Math.min(c, l) / 2, pointStyle: a.pointStyle, rotation: a.rotation, borderWidth: 1 },
                        n = i.leftForLtr(f, c) + c / 2,
                        o = g + l / 2;
                    (t.strokeStyle = s.multiKeyBackground), (t.fillStyle = s.multiKeyBackground), ve(t, e, n, o), (t.strokeStyle = r.borderColor), (t.fillStyle = r.backgroundColor), ve(t, e, n, o);
                } else {
                    (t.lineWidth = o(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1), (t.strokeStyle = r.borderColor), t.setLineDash(r.borderDash || []), (t.lineDashOffset = r.borderDashOffset || 0);
                    const e = i.leftForLtr(f, c - h),
                        n = i.leftForLtr(i.xPlus(f, 1), c - h - 2),
                        a = dn(r.borderRadius);
                    Object.values(a).some((t) => 0 !== t)
                        ? (t.beginPath(),
                          (t.fillStyle = s.multiKeyBackground),
                          De(t, { x: e, y: g, w: c, h: l, radius: a }),
                          t.fill(),
                          t.stroke(),
                          (t.fillStyle = r.backgroundColor),
                          t.beginPath(),
                          De(t, { x: n, y: g + 1, w: c - 2, h: l - 2, radius: a }),
                          t.fill())
                        : ((t.fillStyle = s.multiKeyBackground), t.fillRect(e, g, c, l), t.strokeRect(e, g, c, l), (t.fillStyle = r.backgroundColor), t.fillRect(n, g + 1, c - 2, l - 2));
                }
                t.fillStyle = this.labelTextColors[n];
            }
            drawBody(t, e, n) {
                const { body: i } = this,
                    { bodySpacing: o, bodyAlign: s, displayColors: r, boxHeight: a, boxWidth: l, boxPadding: c } = n,
                    h = pn(n.bodyFont);
                let d = h.lineHeight,
                    f = 0;
                const p = xn(n.rtl, this.x, this.width),
                    g = function (n) {
                        e.fillText(n, p.x(t.x + f), t.y + d / 2), (t.y += d + o);
                    },
                    m = p.textAlign(s);
                let b, x, y, v, w, _, S;
                for (
                    e.textAlign = s,
                        e.textBaseline = "middle",
                        e.font = h.string,
                        t.x = zs(this, m, n),
                        e.fillStyle = n.bodyColor,
                        u(this.beforeBody, g),
                        f = r && "right" !== m ? ("center" === s ? l / 2 + c : l + 2 + c) : 0,
                        v = 0,
                        _ = i.length;
                    v < _;
                    ++v
                ) {
                    for (b = i[v], x = this.labelTextColors[v], e.fillStyle = x, u(b.before, g), y = b.lines, r && y.length && (this._drawColorBox(e, t, v, p, n), (d = Math.max(h.lineHeight, a))), w = 0, S = y.length; w < S; ++w)
                        g(y[w]), (d = h.lineHeight);
                    u(b.after, g);
                }
                (f = 0), (d = h.lineHeight), u(this.afterBody, g), (t.y -= o);
            }
            drawFooter(t, e, n) {
                const i = this.footer,
                    o = i.length;
                let s, r;
                if (o) {
                    const a = xn(n.rtl, this.x, this.width);
                    for (
                        t.x = zs(this, n.footerAlign, n), t.y += n.footerMarginTop, e.textAlign = a.textAlign(n.footerAlign), e.textBaseline = "middle", s = pn(n.footerFont), e.fillStyle = n.footerColor, e.font = s.string, r = 0;
                        r < o;
                        ++r
                    )
                        e.fillText(i[r], a.x(t.x), t.y + s.lineHeight / 2), (t.y += s.lineHeight + n.footerSpacing);
                }
            }
            drawBackground(t, e, n, i) {
                const { xAlign: o, yAlign: s } = this,
                    { x: r, y: a } = t,
                    { width: l, height: c } = n,
                    { topLeft: h, topRight: u, bottomLeft: d, bottomRight: f } = dn(i.cornerRadius);
                (e.fillStyle = i.backgroundColor),
                    (e.strokeStyle = i.borderColor),
                    (e.lineWidth = i.borderWidth),
                    e.beginPath(),
                    e.moveTo(r + h, a),
                    "top" === s && this.drawCaret(t, e, n, i),
                    e.lineTo(r + l - u, a),
                    e.quadraticCurveTo(r + l, a, r + l, a + u),
                    "center" === s && "right" === o && this.drawCaret(t, e, n, i),
                    e.lineTo(r + l, a + c - f),
                    e.quadraticCurveTo(r + l, a + c, r + l - f, a + c),
                    "bottom" === s && this.drawCaret(t, e, n, i),
                    e.lineTo(r + d, a + c),
                    e.quadraticCurveTo(r, a + c, r, a + c - d),
                    "center" === s && "left" === o && this.drawCaret(t, e, n, i),
                    e.lineTo(r, a + h),
                    e.quadraticCurveTo(r, a, r + h, a),
                    e.closePath(),
                    e.fill(),
                    i.borderWidth > 0 && e.stroke();
            }
            _updateAnimationTarget(t) {
                const e = this.chart,
                    n = this.$animations,
                    i = n && n.x,
                    o = n && n.y;
                if (i || o) {
                    const n = Es[t.position].call(this, this._active, this._eventPosition);
                    if (!n) return;
                    const s = (this._size = $s(this, t)),
                        r = Object.assign({}, n, this._size),
                        a = Fs(e, t, r),
                        l = js(t, r, a, e);
                    (i._to === l.x && o._to === l.y) ||
                        ((this.xAlign = a.xAlign), (this.yAlign = a.yAlign), (this.width = s.width), (this.height = s.height), (this.caretX = n.x), (this.caretY = n.y), this._resolveAnimations().update(this, l));
                }
            }
            _willRender() {
                return !!this.opacity;
            }
            draw(t) {
                const e = this.options.setContext(this.getContext());
                let n = this.opacity;
                if (!n) return;
                this._updateAnimationTarget(e);
                const i = { width: this.width, height: this.height },
                    o = { x: this.x, y: this.y };
                n = Math.abs(n) < 0.001 ? 0 : n;
                const s = fn(e.padding),
                    r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
                e.enabled &&
                    r &&
                    (t.save(), (t.globalAlpha = n), this.drawBackground(o, t, i, e), yn(t, e.textDirection), (o.y += s.top), this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), vn(t, e.textDirection), t.restore());
            }
            getActiveElements() {
                return this._active || [];
            }
            setActiveElements(t, e) {
                const n = this._active,
                    i = t.map(({ datasetIndex: t, index: e }) => {
                        const n = this.chart.getDatasetMeta(t);
                        if (!n) throw new Error("Cannot find a dataset at index " + t);
                        return { datasetIndex: t, element: n.data[e], index: e };
                    }),
                    o = !d(n, i),
                    s = this._positionChanged(i, e);
                (o || s) && ((this._active = i), (this._eventPosition = e), (this._ignoreReplayEvents = !0), this.update(!0));
            }
            handleEvent(t, e, n = !0) {
                if (e && this._ignoreReplayEvents) return !1;
                this._ignoreReplayEvents = !1;
                const i = this.options,
                    o = this._active || [],
                    s = this._getActiveElements(t, o, e, n),
                    r = this._positionChanged(s, t),
                    a = e || !d(s, o) || r;
                return a && ((this._active = s), (i.enabled || i.external) && ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))), a;
            }
            _getActiveElements(t, e, n, i) {
                const o = this.options;
                if ("mouseout" === t.type) return [];
                if (!i) return e;
                const s = this.chart.getElementsAtEventForMode(t, o.mode, o, n);
                return o.reverse && s.reverse(), s;
            }
            _positionChanged(t, e) {
                const { caretX: n, caretY: i, options: o } = this,
                    s = Es[o.position].call(this, t, e);
                return !1 !== s && (n !== s.x || i !== s.y);
            }
        }
        Bs.positioners = Es;
        var Ws = {
                id: "tooltip",
                _element: Bs,
                positioners: Es,
                afterInit(t, e, n) {
                    n && (t.tooltip = new Bs({ chart: t, options: n }));
                },
                beforeUpdate(t, e, n) {
                    t.tooltip && t.tooltip.initialize(n);
                },
                reset(t, e, n) {
                    t.tooltip && t.tooltip.initialize(n);
                },
                afterDraw(t) {
                    const e = t.tooltip;
                    if (e && e._willRender()) {
                        const n = { tooltip: e };
                        if (!1 === t.notifyPlugins("beforeTooltipDraw", n)) return;
                        e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", n);
                    }
                },
                afterEvent(t, e) {
                    if (t.tooltip) {
                        const n = e.replay;
                        t.tooltip.handleEvent(e.event, n, e.inChartArea) && (e.changed = !0);
                    }
                },
                defaults: {
                    enabled: !0,
                    external: null,
                    position: "average",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleColor: "#fff",
                    titleFont: { weight: "bold" },
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleAlign: "left",
                    bodyColor: "#fff",
                    bodySpacing: 2,
                    bodyFont: {},
                    bodyAlign: "left",
                    footerColor: "#fff",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFont: { weight: "bold" },
                    footerAlign: "left",
                    padding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    boxHeight: (t, e) => e.bodyFont.size,
                    boxWidth: (t, e) => e.bodyFont.size,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    boxPadding: 0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    animation: { duration: 400, easing: "easeOutQuart" },
                    animations: { numbers: { type: "number", properties: ["x", "y", "width", "height", "caretX", "caretY"] }, opacity: { easing: "linear", duration: 200 } },
                    callbacks: {
                        beforeTitle: t,
                        title(t) {
                            if (t.length > 0) {
                                const e = t[0],
                                    n = e.chart.data.labels,
                                    i = n ? n.length : 0;
                                if (this && this.options && "dataset" === this.options.mode) return e.dataset.label || "";
                                if (e.label) return e.label;
                                if (i > 0 && e.dataIndex < i) return n[e.dataIndex];
                            }
                            return "";
                        },
                        afterTitle: t,
                        beforeBody: t,
                        beforeLabel: t,
                        label(t) {
                            if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue;
                            let e = t.dataset.label || "";
                            e && (e += ": ");
                            const i = t.formattedValue;
                            return n(i) || (e += i), e;
                        },
                        labelColor(t) {
                            const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                            return { borderColor: e.borderColor, backgroundColor: e.backgroundColor, borderWidth: e.borderWidth, borderDash: e.borderDash, borderDashOffset: e.borderDashOffset, borderRadius: 0 };
                        },
                        labelTextColor() {
                            return this.options.bodyColor;
                        },
                        labelPointStyle(t) {
                            const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                            return { pointStyle: e.pointStyle, rotation: e.rotation };
                        },
                        afterLabel: t,
                        afterBody: t,
                        beforeFooter: t,
                        footer: t,
                        afterFooter: t,
                    },
                },
                defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
                descriptors: {
                    _scriptable: (t) => "filter" !== t && "itemSort" !== t && "external" !== t,
                    _indexable: !1,
                    callbacks: { _scriptable: !1, _indexable: !1 },
                    animation: { _fallback: !1 },
                    animations: { _fallback: "animation" },
                },
                additionalOptionScopes: ["interaction"],
            },
            Vs = Object.freeze({ __proto__: null, Decimation: rs, Filler: Ss, Legend: Ts, SubTitle: As, Title: Ps, Tooltip: Ws });
        class qs extends Ni {
            constructor(t) {
                super(t), (this._startValue = void 0), (this._valueRange = 0), (this._addedLabels = []);
            }
            init(t) {
                const e = this._addedLabels;
                if (e.length) {
                    const t = this.getLabels();
                    for (const { index: n, label: i } of e) t[n] === i && t.splice(n, 1);
                    this._addedLabels = [];
                }
                super.init(t);
            }
            parse(t, e) {
                if (n(t)) return null;
                const i = this.getLabels();
                return ((t, e) => (null === t ? null : Z(Math.round(t), 0, e)))(
                    (e =
                        isFinite(e) && i[e] === t
                            ? e
                            : (function (t, e, n, i) {
                                  const o = t.indexOf(e);
                                  return -1 === o ? ((t, e, n, i) => ("string" == typeof e ? ((n = t.push(e) - 1), i.unshift({ index: n, label: e })) : isNaN(e) && (n = null), n))(t, e, n, i) : o !== t.lastIndexOf(e) ? n : o;
                              })(i, t, a(e, t), this._addedLabels)),
                    i.length - 1
                );
            }
            determineDataLimits() {
                const { minDefined: t, maxDefined: e } = this.getUserBounds();
                let { min: n, max: i } = this.getMinMax(!0);
                "ticks" === this.options.bounds && (t || (n = 0), e || (i = this.getLabels().length - 1)), (this.min = n), (this.max = i);
            }
            buildTicks() {
                const t = this.min,
                    e = this.max,
                    n = this.options.offset,
                    i = [];
                let o = this.getLabels();
                (o = 0 === t && e === o.length - 1 ? o : o.slice(t, e + 1)), (this._valueRange = Math.max(o.length - (n ? 0 : 1), 1)), (this._startValue = this.min - (n ? 0.5 : 0));
                for (let n = t; n <= e; n++) i.push({ value: n });
                return i;
            }
            getLabelForValue(t) {
                const e = this.getLabels();
                return t >= 0 && t < e.length ? e[t] : t;
            }
            configure() {
                super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
            }
            getPixelForValue(t) {
                return "number" != typeof t && (t = this.parse(t)), null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
            }
            getPixelForTick(t) {
                const e = this.ticks;
                return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
            }
            getValueForPixel(t) {
                return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
            }
            getBasePixel() {
                return this.bottom;
            }
        }
        function Ys(t, e, { horizontal: n, minRotation: i }) {
            const o = W(i),
                s = (n ? Math.sin(o) : Math.cos(o)) || 0.001,
                r = 0.75 * e * ("" + t).length;
            return Math.min(e / s, r);
        }
        (qs.id = "category"), (qs.defaults = { ticks: { callback: qs.prototype.getLabelForValue } });
        class Xs extends Ni {
            constructor(t) {
                super(t), (this.start = void 0), (this.end = void 0), (this._startValue = void 0), (this._endValue = void 0), (this._valueRange = 0);
            }
            parse(t, e) {
                return n(t) || (("number" == typeof t || t instanceof Number) && !isFinite(+t)) ? null : +t;
            }
            handleTickRangeOptions() {
                const { beginAtZero: t } = this.options,
                    { minDefined: e, maxDefined: n } = this.getUserBounds();
                let { min: i, max: o } = this;
                const s = (t) => (i = e ? i : t),
                    r = (t) => (o = n ? o : t);
                if (t) {
                    const t = I(i),
                        e = I(o);
                    t < 0 && e < 0 ? r(0) : t > 0 && e > 0 && s(0);
                }
                if (i === o) {
                    let e = 1;
                    (o >= Number.MAX_SAFE_INTEGER || i <= Number.MIN_SAFE_INTEGER) && (e = Math.abs(0.05 * o)), r(o + e), t || s(i - e);
                }
                (this.min = i), (this.max = o);
            }
            getTickLimit() {
                const t = this.options.ticks;
                let e,
                    { maxTicksLimit: n, stepSize: i } = t;
                return (
                    i
                        ? ((e = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1), e > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${e} ticks. Limiting to 1000.`), (e = 1e3)))
                        : ((e = this.computeTickLimit()), (n = n || 11)),
                    n && (e = Math.min(n, e)),
                    e
                );
            }
            computeTickLimit() {
                return Number.POSITIVE_INFINITY;
            }
            buildTicks() {
                const t = this.options,
                    e = t.ticks;
                let i = this.getTickLimit();
                i = Math.max(2, i);
                const o = (function (t, e) {
                    const i = [],
                        { bounds: o, step: s, min: r, max: a, precision: l, count: c, maxTicks: h, maxDigits: u, includeBounds: d } = t,
                        f = s || 1,
                        p = h - 1,
                        { min: g, max: m } = e,
                        b = !n(r),
                        x = !n(a),
                        y = !n(c),
                        v = (m - g) / (u + 1);
                    let w,
                        _,
                        S,
                        C,
                        k = F((m - g) / p / f) * f;
                    if (k < 1e-14 && !b && !x) return [{ value: g }, { value: m }];
                    (C = Math.ceil(m / k) - Math.floor(g / k)),
                        C > p && (k = F((C * k) / p / f) * f),
                        n(l) || ((w = Math.pow(10, l)), (k = Math.ceil(k * w) / w)),
                        "ticks" === o ? ((_ = Math.floor(g / k) * k), (S = Math.ceil(m / k) * k)) : ((_ = g), (S = m)),
                        b && x && s && H((a - r) / s, k / 1e3)
                            ? ((C = Math.round(Math.min((a - r) / k, h))), (k = (a - r) / C), (_ = r), (S = a))
                            : y
                            ? ((_ = b ? r : _), (S = x ? a : S), (C = c - 1), (k = (S - _) / C))
                            : ((C = (S - _) / k), (C = N(C, Math.round(C), k / 1e3) ? Math.round(C) : Math.ceil(C)));
                    const T = Math.max(q(k), q(_));
                    (w = Math.pow(10, n(l) ? T : l)), (_ = Math.round(_ * w) / w), (S = Math.round(S * w) / w);
                    let M = 0;
                    for (b && (d && _ !== r ? (i.push({ value: r }), _ < r && M++, N(Math.round((_ + M * k) * w) / w, r, Ys(r, v, t)) && M++) : _ < r && M++); M < C; ++M) i.push({ value: Math.round((_ + M * k) * w) / w });
                    return x && d && S !== a ? (i.length && N(i[i.length - 1].value, a, Ys(a, v, t)) ? (i[i.length - 1].value = a) : i.push({ value: a })) : (x && S !== a) || i.push({ value: S }), i;
                })(
                    {
                        maxTicks: i,
                        bounds: t.bounds,
                        min: t.min,
                        max: t.max,
                        precision: e.precision,
                        step: e.stepSize,
                        count: e.count,
                        maxDigits: this._maxDigits(),
                        horizontal: this.isHorizontal(),
                        minRotation: e.minRotation || 0,
                        includeBounds: !1 !== e.includeBounds,
                    },
                    this._range || this
                );
                return "ticks" === t.bounds && B(o, this, "value"), t.reverse ? (o.reverse(), (this.start = this.max), (this.end = this.min)) : ((this.start = this.min), (this.end = this.max)), o;
            }
            configure() {
                const t = this.ticks;
                let e = this.min,
                    n = this.max;
                if ((super.configure(), this.options.offset && t.length)) {
                    const i = (n - e) / Math.max(t.length - 1, 1) / 2;
                    (e -= i), (n += i);
                }
                (this._startValue = e), (this._endValue = n), (this._valueRange = n - e);
            }
            getLabelForValue(t) {
                return rn(t, this.chart.options.locale, this.options.ticks.format);
            }
        }
        class Us extends Xs {
            determineDataLimits() {
                const { min: t, max: e } = this.getMinMax(!0);
                (this.min = s(t) ? t : 0), (this.max = s(e) ? e : 1), this.handleTickRangeOptions();
            }
            computeTickLimit() {
                const t = this.isHorizontal(),
                    e = t ? this.width : this.height,
                    n = W(this.options.ticks.minRotation),
                    i = (t ? Math.sin(n) : Math.cos(n)) || 0.001,
                    o = this._resolveTickFontOptions(0);
                return Math.ceil(e / Math.min(40, o.lineHeight / i));
            }
            getPixelForValue(t) {
                return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
            }
            getValueForPixel(t) {
                return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
            }
        }
        function Ks(t) {
            return 1 == t / Math.pow(10, Math.floor($(t)));
        }
        (Us.id = "linear"), (Us.defaults = { ticks: { callback: Ei.formatters.numeric } });
        class Gs extends Ni {
            constructor(t) {
                super(t), (this.start = void 0), (this.end = void 0), (this._startValue = void 0), (this._valueRange = 0);
            }
            parse(t, e) {
                const n = Xs.prototype.parse.apply(this, [t, e]);
                if (0 !== n) return s(n) && n > 0 ? n : null;
                this._zero = !0;
            }
            determineDataLimits() {
                const { min: t, max: e } = this.getMinMax(!0);
                (this.min = s(t) ? Math.max(0, t) : null), (this.max = s(e) ? Math.max(0, e) : null), this.options.beginAtZero && (this._zero = !0), this.handleTickRangeOptions();
            }
            handleTickRangeOptions() {
                const { minDefined: t, maxDefined: e } = this.getUserBounds();
                let n = this.min,
                    i = this.max;
                const o = (e) => (n = t ? n : e),
                    s = (t) => (i = e ? i : t),
                    r = (t, e) => Math.pow(10, Math.floor($(t)) + e);
                n === i && (n <= 0 ? (o(1), s(10)) : (o(r(n, -1)), s(r(i, 1)))),
                    n <= 0 && o(r(i, -1)),
                    i <= 0 && s(r(n, 1)),
                    this._zero && this.min !== this._suggestedMin && n === r(this.min, 0) && o(r(n, -1)),
                    (this.min = n),
                    (this.max = i);
            }
            buildTicks() {
                const t = this.options,
                    e = (function (t, e) {
                        const n = Math.floor($(e.max)),
                            i = Math.ceil(e.max / Math.pow(10, n)),
                            o = [];
                        let s = r(t.min, Math.pow(10, Math.floor($(e.min)))),
                            a = Math.floor($(s)),
                            l = Math.floor(s / Math.pow(10, a)),
                            c = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
                        do {
                            o.push({ value: s, major: Ks(s) }), ++l, 10 === l && ((l = 1), ++a, (c = a >= 0 ? 1 : c)), (s = Math.round(l * Math.pow(10, a) * c) / c);
                        } while (a < n || (a === n && l < i));
                        const h = r(t.max, s);
                        return o.push({ value: h, major: Ks(s) }), o;
                    })({ min: this._userMin, max: this._userMax }, this);
                return "ticks" === t.bounds && B(e, this, "value"), t.reverse ? (e.reverse(), (this.start = this.max), (this.end = this.min)) : ((this.start = this.min), (this.end = this.max)), e;
            }
            getLabelForValue(t) {
                return void 0 === t ? "0" : rn(t, this.chart.options.locale, this.options.ticks.format);
            }
            configure() {
                const t = this.min;
                super.configure(), (this._startValue = $(t)), (this._valueRange = $(this.max) - $(t));
            }
            getPixelForValue(t) {
                return (void 0 !== t && 0 !== t) || (t = this.min), null === t || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : ($(t) - this._startValue) / this._valueRange);
            }
            getValueForPixel(t) {
                const e = this.getDecimalForPixel(t);
                return Math.pow(10, this._startValue + e * this._valueRange);
            }
        }
        function Zs(t) {
            const e = t.ticks;
            if (e.display && t.display) {
                const t = fn(e.backdropPadding);
                return a(e.font && e.font.size, ee.font.size) + t.height;
            }
            return 0;
        }
        function Qs(t, e, n, i, o) {
            return t === i || t === o ? { start: e - n / 2, end: e + n / 2 } : t < i || t > o ? { start: e - n, end: e } : { start: e, end: e + n };
        }
        function Js(t, e, n, i, o) {
            const s = Math.abs(Math.sin(n)),
                r = Math.abs(Math.cos(n));
            let a = 0,
                l = 0;
            i.start < e.l ? ((a = (e.l - i.start) / s), (t.l = Math.min(t.l, e.l - a))) : i.end > e.r && ((a = (i.end - e.r) / s), (t.r = Math.max(t.r, e.r + a))),
                o.start < e.t ? ((l = (e.t - o.start) / r), (t.t = Math.min(t.t, e.t - l))) : o.end > e.b && ((l = (o.end - e.b) / r), (t.b = Math.max(t.b, e.b + l)));
        }
        function tr(t) {
            return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
        }
        function er(t, e, n) {
            return "right" === n ? (t -= e) : "center" === n && (t -= e / 2), t;
        }
        function nr(t, e, n) {
            return 90 === n || 270 === n ? (t -= e / 2) : (n > 270 || n < 90) && (t -= e), t;
        }
        function ir(t, e, n, i) {
            const { ctx: o } = t;
            if (n) o.arc(t.xCenter, t.yCenter, e, 0, P);
            else {
                let n = t.getPointPosition(0, e);
                o.moveTo(n.x, n.y);
                for (let s = 1; s < i; s++) (n = t.getPointPosition(s, e)), o.lineTo(n.x, n.y);
            }
        }
        (Gs.id = "logarithmic"), (Gs.defaults = { ticks: { callback: Ei.formatters.logarithmic, major: { enabled: !0 } } });
        class or extends Xs {
            constructor(t) {
                super(t), (this.xCenter = void 0), (this.yCenter = void 0), (this.drawingArea = void 0), (this._pointLabels = []), (this._pointLabelItems = []);
            }
            setDimensions() {
                const t = (this._padding = fn(Zs(this.options) / 2)),
                    e = (this.width = this.maxWidth - t.width),
                    n = (this.height = this.maxHeight - t.height);
                (this.xCenter = Math.floor(this.left + e / 2 + t.left)), (this.yCenter = Math.floor(this.top + n / 2 + t.top)), (this.drawingArea = Math.floor(Math.min(e, n) / 2));
            }
            determineDataLimits() {
                const { min: t, max: e } = this.getMinMax(!1);
                (this.min = s(t) && !isNaN(t) ? t : 0), (this.max = s(e) && !isNaN(e) ? e : 0), this.handleTickRangeOptions();
            }
            computeTickLimit() {
                return Math.ceil(this.drawingArea / Zs(this.options));
            }
            generateTickLabels(t) {
                Xs.prototype.generateTickLabels.call(this, t),
                    (this._pointLabels = this.getLabels()
                        .map((t, e) => {
                            const n = h(this.options.pointLabels.callback, [t, e], this);
                            return n || 0 === n ? n : "";
                        })
                        .filter((t, e) => this.chart.getDataVisibility(e)));
            }
            fit() {
                const t = this.options;
                t.display && t.pointLabels.display
                    ? (function (t) {
                          const e = { l: t.left + t._padding.left, r: t.right - t._padding.right, t: t.top + t._padding.top, b: t.bottom - t._padding.bottom },
                              n = Object.assign({}, e),
                              o = [],
                              s = [],
                              r = t._pointLabels.length,
                              a = t.options.pointLabels,
                              l = a.centerPointLabels ? M / r : 0;
                          for (let d = 0; d < r; d++) {
                              const r = a.setContext(t.getPointLabelContext(d));
                              s[d] = r.padding;
                              const f = t.getPointPosition(d, t.drawingArea + s[d], l),
                                  p = pn(r.font),
                                  g = ((c = t.ctx), (h = p), (u = i((u = t._pointLabels[d])) ? u : [u]), { w: be(c, h.string, u), h: u.length * h.lineHeight });
                              o[d] = g;
                              const m = K(t.getIndexAngle(d) + l),
                                  b = Math.round(V(m));
                              Js(n, e, m, Qs(b, f.x, g.w, 0, 180), Qs(b, f.y, g.h, 90, 270));
                          }
                          var c, h, u;
                          t.setCenterPoint(e.l - n.l, n.r - e.r, e.t - n.t, n.b - e.b),
                              (t._pointLabelItems = (function (t, e, n) {
                                  const i = [],
                                      o = t._pointLabels.length,
                                      s = t.options,
                                      r = Zs(s) / 2,
                                      a = t.drawingArea,
                                      l = s.pointLabels.centerPointLabels ? M / o : 0;
                                  for (let s = 0; s < o; s++) {
                                      const o = t.getPointPosition(s, a + r + n[s], l),
                                          c = Math.round(V(K(o.angle + L))),
                                          h = e[s],
                                          u = nr(o.y, h.h, c),
                                          d = tr(c),
                                          f = er(o.x, h.w, d);
                                      i.push({ x: o.x, y: u, textAlign: d, left: f, top: u, right: f + h.w, bottom: u + h.h });
                                  }
                                  return i;
                              })(t, o, s));
                      })(this)
                    : this.setCenterPoint(0, 0, 0, 0);
            }
            setCenterPoint(t, e, n, i) {
                (this.xCenter += Math.floor((t - e) / 2)), (this.yCenter += Math.floor((n - i) / 2)), (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, n, i)));
            }
            getIndexAngle(t) {
                return K(t * (P / (this._pointLabels.length || 1)) + W(this.options.startAngle || 0));
            }
            getDistanceFromCenterForValue(t) {
                if (n(t)) return NaN;
                const e = this.drawingArea / (this.max - this.min);
                return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
            }
            getValueForDistanceFromCenter(t) {
                if (n(t)) return NaN;
                const e = t / (this.drawingArea / (this.max - this.min));
                return this.options.reverse ? this.max - e : this.min + e;
            }
            getPointLabelContext(t) {
                const e = this._pointLabels || [];
                if (t >= 0 && t < e.length) {
                    const n = e[t];
                    return (function (t, e, n) {
                        return bn(t, { label: n, index: e, type: "pointLabel" });
                    })(this.getContext(), t, n);
                }
            }
            getPointPosition(t, e, n = 0) {
                const i = this.getIndexAngle(t) - L + n;
                return { x: Math.cos(i) * e + this.xCenter, y: Math.sin(i) * e + this.yCenter, angle: i };
            }
            getPointPositionForValue(t, e) {
                return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
            }
            getBasePosition(t) {
                return this.getPointPositionForValue(t || 0, this.getBaseValue());
            }
            getPointLabelPosition(t) {
                const { left: e, top: n, right: i, bottom: o } = this._pointLabelItems[t];
                return { left: e, top: n, right: i, bottom: o };
            }
            drawBackground() {
                const {
                    backgroundColor: t,
                    grid: { circular: e },
                } = this.options;
                if (t) {
                    const n = this.ctx;
                    n.save(), n.beginPath(), ir(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), n.closePath(), (n.fillStyle = t), n.fill(), n.restore();
                }
            }
            drawGrid() {
                const t = this.ctx,
                    e = this.options,
                    { angleLines: i, grid: o } = e,
                    s = this._pointLabels.length;
                let r, a, l;
                if (
                    (e.pointLabels.display &&
                        (function (t, e) {
                            const {
                                ctx: i,
                                options: { pointLabels: o },
                            } = t;
                            for (let s = e - 1; s >= 0; s--) {
                                const e = o.setContext(t.getPointLabelContext(s)),
                                    r = pn(e.font),
                                    { x: a, y: l, textAlign: c, left: h, top: u, right: d, bottom: f } = t._pointLabelItems[s],
                                    { backdropColor: p } = e;
                                if (!n(p)) {
                                    const t = dn(e.borderRadius),
                                        n = fn(e.backdropPadding);
                                    i.fillStyle = p;
                                    const o = h - n.left,
                                        s = u - n.top,
                                        r = d - h + n.width,
                                        a = f - u + n.height;
                                    Object.values(t).some((t) => 0 !== t) ? (i.beginPath(), De(i, { x: o, y: s, w: r, h: a, radius: t }), i.fill()) : i.fillRect(o, s, r, a);
                                }
                                Me(i, t._pointLabels[s], a, l + r.lineHeight / 2, r, { color: e.color, textAlign: c, textBaseline: "middle" });
                            }
                        })(this, s),
                    o.display &&
                        this.ticks.forEach((t, e) => {
                            0 !== e &&
                                ((a = this.getDistanceFromCenterForValue(t.value)),
                                (function (t, e, n, i) {
                                    const o = t.ctx,
                                        s = e.circular,
                                        { color: r, lineWidth: a } = e;
                                    (!s && !i) ||
                                        !r ||
                                        !a ||
                                        n < 0 ||
                                        (o.save(), (o.strokeStyle = r), (o.lineWidth = a), o.setLineDash(e.borderDash), (o.lineDashOffset = e.borderDashOffset), o.beginPath(), ir(t, n, s, i), o.closePath(), o.stroke(), o.restore());
                                })(this, o.setContext(this.getContext(e - 1)), a, s));
                        }),
                    i.display)
                ) {
                    for (t.save(), r = s - 1; r >= 0; r--) {
                        const n = i.setContext(this.getPointLabelContext(r)),
                            { color: o, lineWidth: s } = n;
                        s &&
                            o &&
                            ((t.lineWidth = s),
                            (t.strokeStyle = o),
                            t.setLineDash(n.borderDash),
                            (t.lineDashOffset = n.borderDashOffset),
                            (a = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max)),
                            (l = this.getPointPosition(r, a)),
                            t.beginPath(),
                            t.moveTo(this.xCenter, this.yCenter),
                            t.lineTo(l.x, l.y),
                            t.stroke());
                    }
                    t.restore();
                }
            }
            drawBorder() {}
            drawLabels() {
                const t = this.ctx,
                    e = this.options,
                    n = e.ticks;
                if (!n.display) return;
                const i = this.getIndexAngle(0);
                let o, s;
                t.save(),
                    t.translate(this.xCenter, this.yCenter),
                    t.rotate(i),
                    (t.textAlign = "center"),
                    (t.textBaseline = "middle"),
                    this.ticks.forEach((i, r) => {
                        if (0 === r && !e.reverse) return;
                        const a = n.setContext(this.getContext(r)),
                            l = pn(a.font);
                        if (((o = this.getDistanceFromCenterForValue(this.ticks[r].value)), a.showLabelBackdrop)) {
                            (t.font = l.string), (s = t.measureText(i.label).width), (t.fillStyle = a.backdropColor);
                            const e = fn(a.backdropPadding);
                            t.fillRect(-s / 2 - e.left, -o - l.size / 2 - e.top, s + e.width, l.size + e.height);
                        }
                        Me(t, i.label, 0, -o, l, { color: a.color });
                    }),
                    t.restore();
            }
            drawTitle() {}
        }
        (or.id = "radialLinear"),
            (or.defaults = {
                display: !0,
                animate: !0,
                position: "chartArea",
                angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 },
                grid: { circular: !1 },
                startAngle: 0,
                ticks: { showLabelBackdrop: !0, callback: Ei.formatters.numeric },
                pointLabels: { backdropColor: void 0, backdropPadding: 2, display: !0, font: { size: 10 }, callback: (t) => t, padding: 5, centerPointLabels: !1 },
            }),
            (or.defaultRoutes = { "angleLines.color": "borderColor", "pointLabels.color": "color", "ticks.color": "color" }),
            (or.descriptors = { angleLines: { _fallback: "grid" } });
        const sr = {
                millisecond: { common: !0, size: 1, steps: 1e3 },
                second: { common: !0, size: 1e3, steps: 60 },
                minute: { common: !0, size: 6e4, steps: 60 },
                hour: { common: !0, size: 36e5, steps: 24 },
                day: { common: !0, size: 864e5, steps: 30 },
                week: { common: !1, size: 6048e5, steps: 4 },
                month: { common: !0, size: 2628e6, steps: 12 },
                quarter: { common: !1, size: 7884e6, steps: 4 },
                year: { common: !0, size: 3154e7 },
            },
            rr = Object.keys(sr);
        function ar(t, e) {
            return t - e;
        }
        function lr(t, e) {
            if (n(e)) return null;
            const i = t._adapter,
                { parser: o, round: r, isoWeekday: a } = t._parseOpts;
            let l = e;
            return (
                "function" == typeof o && (l = o(l)), s(l) || (l = "string" == typeof o ? i.parse(l, o) : i.parse(l)), null === l ? null : (r && (l = "week" !== r || (!z(a) && !0 !== a) ? i.startOf(l, r) : i.startOf(l, "isoWeek", a)), +l)
            );
        }
        function cr(t, e, n, i) {
            const o = rr.length;
            for (let s = rr.indexOf(t); s < o - 1; ++s) {
                const t = sr[rr[s]],
                    o = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
                if (t.common && Math.ceil((n - e) / (o * t.size)) <= i) return rr[s];
            }
            return rr[o - 1];
        }
        function hr(t, e, n) {
            if (n) {
                if (n.length) {
                    const { lo: i, hi: o } = tt(n, e);
                    t[n[i] >= e ? n[i] : n[o]] = !0;
                }
            } else t[e] = !0;
        }
        function ur(t, e, n) {
            const i = [],
                o = {},
                s = e.length;
            let r, a;
            for (r = 0; r < s; ++r) (a = e[r]), (o[a] = r), i.push({ value: a, major: !1 });
            return 0 !== s && n
                ? (function (t, e, n, i) {
                      const o = t._adapter,
                          s = +o.startOf(e[0].value, i),
                          r = e[e.length - 1].value;
                      let a, l;
                      for (a = s; a <= r; a = +o.add(a, 1, i)) (l = n[a]), l >= 0 && (e[l].major = !0);
                      return e;
                  })(t, i, o, n)
                : i;
        }
        class dr extends Ni {
            constructor(t) {
                super(t), (this._cache = { data: [], labels: [], all: [] }), (this._unit = "day"), (this._majorUnit = void 0), (this._offsets = {}), (this._normalized = !1), (this._parseOpts = void 0);
            }
            init(t, e) {
                const n = t.time || (t.time = {}),
                    i = (this._adapter = new xo._date(t.adapters.date));
                i.init(e), b(n.displayFormats, i.formats()), (this._parseOpts = { parser: n.parser, round: n.round, isoWeekday: n.isoWeekday }), super.init(t), (this._normalized = e.normalized);
            }
            parse(t, e) {
                return void 0 === t ? null : lr(this, t);
            }
            beforeLayout() {
                super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
            }
            determineDataLimits() {
                const t = this.options,
                    e = this._adapter,
                    n = t.time.unit || "day";
                let { min: i, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
                function l(t) {
                    r || isNaN(t.min) || (i = Math.min(i, t.min)), a || isNaN(t.max) || (o = Math.max(o, t.max));
                }
                (r && a) || (l(this._getLabelBounds()), ("ticks" === t.bounds && "labels" === t.ticks.source) || l(this.getMinMax(!1))),
                    (i = s(i) && !isNaN(i) ? i : +e.startOf(Date.now(), n)),
                    (o = s(o) && !isNaN(o) ? o : +e.endOf(Date.now(), n) + 1),
                    (this.min = Math.min(i, o - 1)),
                    (this.max = Math.max(i + 1, o));
            }
            _getLabelBounds() {
                const t = this.getLabelTimestamps();
                let e = Number.POSITIVE_INFINITY,
                    n = Number.NEGATIVE_INFINITY;
                return t.length && ((e = t[0]), (n = t[t.length - 1])), { min: e, max: n };
            }
            buildTicks() {
                const t = this.options,
                    e = t.time,
                    n = t.ticks,
                    i = "labels" === n.source ? this.getLabelTimestamps() : this._generate();
                "ticks" === t.bounds && i.length && ((this.min = this._userMin || i[0]), (this.max = this._userMax || i[i.length - 1]));
                const o = this.min,
                    s = it(i, o, this.max);
                return (
                    (this._unit =
                        e.unit ||
                        (n.autoSkip
                            ? cr(e.minUnit, this.min, this.max, this._getLabelCapacity(o))
                            : (function (t, e, n, i, o) {
                                  for (let s = rr.length - 1; s >= rr.indexOf(n); s--) {
                                      const n = rr[s];
                                      if (sr[n].common && t._adapter.diff(o, i, n) >= e - 1) return n;
                                  }
                                  return rr[n ? rr.indexOf(n) : 0];
                              })(this, s.length, e.minUnit, this.min, this.max))),
                    (this._majorUnit =
                        n.major.enabled && "year" !== this._unit
                            ? (function (t) {
                                  for (let e = rr.indexOf(t) + 1, n = rr.length; e < n; ++e) if (sr[rr[e]].common) return rr[e];
                              })(this._unit)
                            : void 0),
                    this.initOffsets(i),
                    t.reverse && s.reverse(),
                    ur(this, s, this._majorUnit)
                );
            }
            afterAutoSkip() {
                this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
            }
            initOffsets(t) {
                let e,
                    n,
                    i = 0,
                    o = 0;
                this.options.offset &&
                    t.length &&
                    ((e = this.getDecimalForValue(t[0])),
                    (i = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2),
                    (n = this.getDecimalForValue(t[t.length - 1])),
                    (o = 1 === t.length ? n : (n - this.getDecimalForValue(t[t.length - 2])) / 2));
                const s = t.length < 3 ? 0.5 : 0.25;
                (i = Z(i, 0, s)), (o = Z(o, 0, s)), (this._offsets = { start: i, end: o, factor: 1 / (i + 1 + o) });
            }
            _generate() {
                const t = this._adapter,
                    e = this.min,
                    n = this.max,
                    i = this.options,
                    o = i.time,
                    s = o.unit || cr(o.minUnit, e, n, this._getLabelCapacity(e)),
                    r = a(o.stepSize, 1),
                    l = "week" === s && o.isoWeekday,
                    c = z(l) || !0 === l,
                    h = {};
                let u,
                    d,
                    f = e;
                if ((c && (f = +t.startOf(f, "isoWeek", l)), (f = +t.startOf(f, c ? "day" : s)), t.diff(n, e, s) > 1e5 * r)) throw new Error(e + " and " + n + " are too far apart with stepSize of " + r + " " + s);
                const p = "data" === i.ticks.source && this.getDataTimestamps();
                for (u = f, d = 0; u < n; u = +t.add(u, r, s), d++) hr(h, u, p);
                return (
                    (u !== n && "ticks" !== i.bounds && 1 !== d) || hr(h, u, p),
                    Object.keys(h)
                        .sort((t, e) => t - e)
                        .map((t) => +t)
                );
            }
            getLabelForValue(t) {
                const e = this._adapter,
                    n = this.options.time;
                return n.tooltipFormat ? e.format(t, n.tooltipFormat) : e.format(t, n.displayFormats.datetime);
            }
            _tickFormatFunction(t, e, n, i) {
                const o = this.options,
                    s = o.time.displayFormats,
                    r = this._unit,
                    a = this._majorUnit,
                    l = r && s[r],
                    c = a && s[a],
                    u = n[e],
                    d = a && c && u && u.major,
                    f = this._adapter.format(t, i || (d ? c : l)),
                    p = o.ticks.callback;
                return p ? h(p, [f, e, n], this) : f;
            }
            generateTickLabels(t) {
                let e, n, i;
                for (e = 0, n = t.length; e < n; ++e) (i = t[e]), (i.label = this._tickFormatFunction(i.value, e, t));
            }
            getDecimalForValue(t) {
                return null === t ? NaN : (t - this.min) / (this.max - this.min);
            }
            getPixelForValue(t) {
                const e = this._offsets,
                    n = this.getDecimalForValue(t);
                return this.getPixelForDecimal((e.start + n) * e.factor);
            }
            getValueForPixel(t) {
                const e = this._offsets,
                    n = this.getDecimalForPixel(t) / e.factor - e.end;
                return this.min + n * (this.max - this.min);
            }
            _getLabelSize(t) {
                const e = this.options.ticks,
                    n = this.ctx.measureText(t).width,
                    i = W(this.isHorizontal() ? e.maxRotation : e.minRotation),
                    o = Math.cos(i),
                    s = Math.sin(i),
                    r = this._resolveTickFontOptions(0).size;
                return { w: n * o + r * s, h: n * s + r * o };
            }
            _getLabelCapacity(t) {
                const e = this.options.time,
                    n = e.displayFormats,
                    i = n[e.unit] || n.millisecond,
                    o = this._tickFormatFunction(t, 0, ur(this, [t], this._majorUnit), i),
                    s = this._getLabelSize(o),
                    r = Math.floor(this.isHorizontal() ? this.width / s.w : this.height / s.h) - 1;
                return r > 0 ? r : 1;
            }
            getDataTimestamps() {
                let t,
                    e,
                    n = this._cache.data || [];
                if (n.length) return n;
                const i = this.getMatchingVisibleMetas();
                if (this._normalized && i.length) return (this._cache.data = i[0].controller.getAllParsedValues(this));
                for (t = 0, e = i.length; t < e; ++t) n = n.concat(i[t].controller.getAllParsedValues(this));
                return (this._cache.data = this.normalize(n));
            }
            getLabelTimestamps() {
                const t = this._cache.labels || [];
                let e, n;
                if (t.length) return t;
                const i = this.getLabels();
                for (e = 0, n = i.length; e < n; ++e) t.push(lr(this, i[e]));
                return (this._cache.labels = this._normalized ? t : this.normalize(t));
            }
            normalize(t) {
                return at(t.sort(ar));
            }
        }
        function fr(t, e, n) {
            let i,
                o,
                s,
                r,
                a = 0,
                l = t.length - 1;
            n
                ? (e >= t[a].pos && e <= t[l].pos && ({ lo: a, hi: l } = et(t, "pos", e)), ({ pos: i, time: s } = t[a]), ({ pos: o, time: r } = t[l]))
                : (e >= t[a].time && e <= t[l].time && ({ lo: a, hi: l } = et(t, "time", e)), ({ time: i, pos: s } = t[a]), ({ time: o, pos: r } = t[l]));
            const c = o - i;
            return c ? s + ((r - s) * (e - i)) / c : s;
        }
        (dr.id = "time"), (dr.defaults = { bounds: "data", adapters: {}, time: { parser: !1, unit: !1, round: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: {} }, ticks: { source: "auto", major: { enabled: !1 } } });
        class pr extends dr {
            constructor(t) {
                super(t), (this._table = []), (this._minPos = void 0), (this._tableRange = void 0);
            }
            initOffsets() {
                const t = this._getTimestampsForTable(),
                    e = (this._table = this.buildLookupTable(t));
                (this._minPos = fr(e, this.min)), (this._tableRange = fr(e, this.max) - this._minPos), super.initOffsets(t);
            }
            buildLookupTable(t) {
                const { min: e, max: n } = this,
                    i = [],
                    o = [];
                let s, r, a, l, c;
                for (s = 0, r = t.length; s < r; ++s) (l = t[s]), l >= e && l <= n && i.push(l);
                if (i.length < 2)
                    return [
                        { time: e, pos: 0 },
                        { time: n, pos: 1 },
                    ];
                for (s = 0, r = i.length; s < r; ++s) (c = i[s + 1]), (a = i[s - 1]), (l = i[s]), Math.round((c + a) / 2) !== l && o.push({ time: l, pos: s / (r - 1) });
                return o;
            }
            _getTimestampsForTable() {
                let t = this._cache.all || [];
                if (t.length) return t;
                const e = this.getDataTimestamps(),
                    n = this.getLabelTimestamps();
                return (t = e.length && n.length ? this.normalize(e.concat(n)) : e.length ? e : n), (t = this._cache.all = t), t;
            }
            getDecimalForValue(t) {
                return (fr(this._table, t) - this._minPos) / this._tableRange;
            }
            getValueForPixel(t) {
                const e = this._offsets,
                    n = this.getDecimalForPixel(t) / e.factor - e.end;
                return fr(this._table, n * this._tableRange + this._minPos, !0);
            }
        }
        (pr.id = "timeseries"), (pr.defaults = dr.defaults);
        var gr = Object.freeze({ __proto__: null, CategoryScale: qs, LinearScale: Us, LogarithmicScale: Gs, RadialLinearScale: or, TimeScale: dr, TimeSeriesScale: pr });
        return (
            fo.register($o, gr, is, Vs),
            (fo.helpers = { ...Dn }),
            (fo._adapters = xo),
            (fo.Animation = pi),
            (fo.Animations = mi),
            (fo.animator = mt),
            (fo.controllers = Bi.controllers.items),
            (fo.DatasetController = Pi),
            (fo.Element = Di),
            (fo.elements = is),
            (fo.Interaction = $n),
            (fo.layouts = Xn),
            (fo.platforms = ui),
            (fo.Scale = Ni),
            (fo.Ticks = Ei),
            Object.assign(fo, $o, gr, is, Vs, ui),
            (fo.Chart = fo),
            "undefined" != typeof window && (window.Chart = fo),
            fo
        );
    }),
    (function (t, e, n, i) {
        "use strict";
        if (((t.console = t.console || { info: function (t) {} }), n))
            if (n.fn.fancybox) console.info("fancyBox already initialized");
            else {
                var o,
                    s,
                    r,
                    a,
                    l = {
                        closeExisting: !1,
                        loop: !1,
                        gutter: 50,
                        keyboard: !0,
                        preventCaptionOverlap: !0,
                        arrows: !0,
                        infobar: !0,
                        smallBtn: "auto",
                        toolbar: "auto",
                        buttons: ["zoom", "slideShow", "thumbs", "close"],
                        idleTime: 3,
                        protect: !1,
                        modal: !1,
                        image: { preload: !1 },
                        ajax: { settings: { data: { fancybox: !0 } } },
                        iframe: {
                            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                            preload: !0,
                            css: {},
                            attr: { scrolling: "auto" },
                        },
                        video: {
                            tpl:
                                '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                            format: "",
                            autoStart: !0,
                        },
                        defaultType: "image",
                        animationEffect: "zoom",
                        animationDuration: 366,
                        zoomOpacity: "auto",
                        transitionEffect: "fade",
                        transitionDuration: 366,
                        slideClass: "",
                        baseClass: "",
                        baseTpl:
                            '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                        spinnerTpl: '<div class="fancybox-loading"></div>',
                        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                        btnTpl: {
                            download:
                                '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                            zoom:
                                '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                            close:
                                '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                            arrowLeft:
                                '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                            arrowRight:
                                '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                            smallBtn:
                                '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
                        },
                        parentEl: "body",
                        hideScrollbar: !0,
                        autoFocus: !0,
                        backFocus: !0,
                        trapFocus: !0,
                        fullScreen: { autoStart: !1 },
                        touch: { vertical: !0, momentum: !0 },
                        hash: null,
                        media: {},
                        slideShow: { autoStart: !1, speed: 3e3 },
                        thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" },
                        wheel: "auto",
                        onInit: n.noop,
                        beforeLoad: n.noop,
                        afterLoad: n.noop,
                        beforeShow: n.noop,
                        afterShow: n.noop,
                        beforeClose: n.noop,
                        afterClose: n.noop,
                        onActivate: n.noop,
                        onDeactivate: n.noop,
                        clickContent: function (t, e) {
                            return "image" === t.type && "zoom";
                        },
                        clickSlide: "close",
                        clickOutside: "close",
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1,
                        mobile: {
                            preventCaptionOverlap: !1,
                            idleTime: !1,
                            clickContent: function (t, e) {
                                return "image" === t.type && "toggleControls";
                            },
                            clickSlide: function (t, e) {
                                return "image" === t.type ? "toggleControls" : "close";
                            },
                            dblclickContent: function (t, e) {
                                return "image" === t.type && "zoom";
                            },
                            dblclickSlide: function (t, e) {
                                return "image" === t.type && "zoom";
                            },
                        },
                        lang: "en",
                        i18n: {
                            en: {
                                CLOSE: "Close",
                                NEXT: "Next",
                                PREV: "Previous",
                                ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                                PLAY_START: "Start slideshow",
                                PLAY_STOP: "Pause slideshow",
                                FULL_SCREEN: "Full screen",
                                THUMBS: "Thumbnails",
                                DOWNLOAD: "Download",
                                SHARE: "Share",
                                ZOOM: "Zoom",
                            },
                            de: {
                                CLOSE: "Schlie&szlig;en",
                                NEXT: "Weiter",
                                PREV: "Zur&uuml;ck",
                                ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                                PLAY_START: "Diaschau starten",
                                PLAY_STOP: "Diaschau beenden",
                                FULL_SCREEN: "Vollbild",
                                THUMBS: "Vorschaubilder",
                                DOWNLOAD: "Herunterladen",
                                SHARE: "Teilen",
                                ZOOM: "Vergr&ouml;&szlig;ern",
                            },
                        },
                    },
                    c = n(t),
                    h = n(e),
                    u = 0,
                    d =
                        t.requestAnimationFrame ||
                        t.webkitRequestAnimationFrame ||
                        t.mozRequestAnimationFrame ||
                        t.oRequestAnimationFrame ||
                        function (e) {
                            return t.setTimeout(e, 1e3 / 60);
                        },
                    f =
                        t.cancelAnimationFrame ||
                        t.webkitCancelAnimationFrame ||
                        t.mozCancelAnimationFrame ||
                        t.oCancelAnimationFrame ||
                        function (e) {
                            t.clearTimeout(e);
                        },
                    p = (function () {
                        var t,
                            n = e.createElement("fakeelement"),
                            o = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
                        for (t in o) if (n.style[t] !== i) return o[t];
                        return "transitionend";
                    })(),
                    g = function (t) {
                        return t && t.length && t[0].offsetHeight;
                    },
                    m = function (t, e) {
                        var i = n.extend(!0, {}, t, e);
                        return (
                            n.each(e, function (t, e) {
                                n.isArray(e) && (i[t] = e);
                            }),
                            i
                        );
                    },
                    b = function (t, e, i) {
                        var o = this;
                        (o.opts = m({ index: i }, n.fancybox.defaults)),
                            n.isPlainObject(e) && (o.opts = m(o.opts, e)),
                            n.fancybox.isMobile && (o.opts = m(o.opts, o.opts.mobile)),
                            (o.id = o.opts.id || ++u),
                            (o.currIndex = parseInt(o.opts.index, 10) || 0),
                            (o.prevIndex = null),
                            (o.prevPos = null),
                            (o.currPos = 0),
                            (o.firstRun = !0),
                            (o.group = []),
                            (o.slides = {}),
                            o.addContent(t),
                            o.group.length && o.init();
                    };
                n.extend(b.prototype, {
                    init: function () {
                        var i,
                            o,
                            s = this,
                            r = s.group[s.currIndex].opts;
                        r.closeExisting && n.fancybox.close(!0),
                            n("body").addClass("fancybox-active"),
                            !n.fancybox.getInstance() &&
                                !1 !== r.hideScrollbar &&
                                !n.fancybox.isMobile &&
                                e.body.scrollHeight > t.innerHeight &&
                                (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"),
                                n("body").addClass("compensate-for-scrollbar")),
                            (o = ""),
                            n.each(r.buttons, function (t, e) {
                                o += r.btnTpl[e] || "";
                            }),
                            (i = n(s.translate(s, r.baseTpl.replace("{{buttons}}", o).replace("{{arrows}}", r.btnTpl.arrowLeft + r.btnTpl.arrowRight)))
                                .attr("id", "fancybox-container-" + s.id)
                                .addClass(r.baseClass)
                                .data("FancyBox", s)
                                .appendTo(r.parentEl)),
                            (s.$refs = { container: i }),
                            ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
                                s.$refs[t] = i.find(".fancybox-" + t);
                            }),
                            s.trigger("onInit"),
                            s.activate(),
                            s.jumpTo(s.currIndex);
                    },
                    translate: function (t, e) {
                        var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                        return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
                            return n[e] === i ? t : n[e];
                        });
                    },
                    addContent: function (t) {
                        var e,
                            o = this,
                            s = n.makeArray(t);
                        n.each(s, function (t, e) {
                            var s,
                                r,
                                a,
                                l,
                                c,
                                h = {},
                                u = {};
                            n.isPlainObject(e)
                                ? ((h = e), (u = e.opts || e))
                                : "object" === n.type(e) && n(e).length
                                ? ((u = (s = n(e)).data() || {}), ((u = n.extend(!0, {}, u, u.options)).$orig = s), (h.src = o.opts.src || u.src || s.attr("href")), h.type || h.src || ((h.type = "inline"), (h.src = e)))
                                : (h = { type: "html", src: e + "" }),
                                (h.opts = n.extend(!0, {}, o.opts, u)),
                                n.isArray(u.buttons) && (h.opts.buttons = u.buttons),
                                n.fancybox.isMobile && h.opts.mobile && (h.opts = m(h.opts, h.opts.mobile)),
                                (r = h.type || h.opts.type),
                                (l = h.src || ""),
                                !r &&
                                    l &&
                                    ((a = l.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                                        ? ((r = "video"), h.opts.video.format || (h.opts.video.format = "video/" + ("ogv" === a[1] ? "ogg" : a[1])))
                                        : l.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)
                                        ? (r = "image")
                                        : l.match(/\.(pdf)((\?|#).*)?$/i)
                                        ? ((r = "iframe"), (h = n.extend(!0, h, { contentType: "pdf", opts: { iframe: { preload: !1 } } })))
                                        : "#" === l.charAt(0) && (r = "inline")),
                                r ? (h.type = r) : o.trigger("objectNeedsType", h),
                                h.contentType || (h.contentType = n.inArray(h.type, ["html", "inline", "ajax"]) > -1 ? "html" : h.type),
                                (h.index = o.group.length),
                                "auto" == h.opts.smallBtn && (h.opts.smallBtn = n.inArray(h.type, ["html", "inline", "ajax"]) > -1),
                                "auto" === h.opts.toolbar && (h.opts.toolbar = !h.opts.smallBtn),
                                (h.$thumb = h.opts.$thumb || null),
                                h.opts.$trigger && h.index === o.opts.index && ((h.$thumb = h.opts.$trigger.find("img:first")), h.$thumb.length && (h.opts.$orig = h.opts.$trigger)),
                                (h.$thumb && h.$thumb.length) || !h.opts.$orig || (h.$thumb = h.opts.$orig.find("img:first")),
                                h.$thumb && !h.$thumb.length && (h.$thumb = null),
                                (h.thumb = h.opts.thumb || (h.$thumb ? h.$thumb[0].src : null)),
                                "function" === n.type(h.opts.caption) && (h.opts.caption = h.opts.caption.apply(e, [o, h])),
                                "function" === n.type(o.opts.caption) && (h.opts.caption = o.opts.caption.apply(e, [o, h])),
                                h.opts.caption instanceof n || (h.opts.caption = h.opts.caption === i ? "" : h.opts.caption + ""),
                                "ajax" === h.type && (c = l.split(/\s+/, 2)).length > 1 && ((h.src = c.shift()), (h.opts.filter = c.shift())),
                                h.opts.modal &&
                                    (h.opts = n.extend(!0, h.opts, {
                                        trapFocus: !0,
                                        infobar: 0,
                                        toolbar: 0,
                                        smallBtn: 0,
                                        keyboard: 0,
                                        slideShow: 0,
                                        fullScreen: 0,
                                        thumbs: 0,
                                        touch: 0,
                                        clickContent: !1,
                                        clickSlide: !1,
                                        clickOutside: !1,
                                        dblclickContent: !1,
                                        dblclickSlide: !1,
                                        dblclickOutside: !1,
                                    })),
                                o.group.push(h);
                        }),
                            Object.keys(o.slides).length && (o.updateControls(), (e = o.Thumbs) && e.isActive && (e.create(), e.focus()));
                    },
                    addEvents: function () {
                        var e = this;
                        e.removeEvents(),
                            e.$refs.container
                                .on("click.fb-close", "[data-fancybox-close]", function (t) {
                                    t.stopPropagation(), t.preventDefault(), e.close(t);
                                })
                                .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
                                    t.stopPropagation(), t.preventDefault(), e.previous();
                                })
                                .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
                                    t.stopPropagation(), t.preventDefault(), e.next();
                                })
                                .on("click.fb", "[data-fancybox-zoom]", function (t) {
                                    e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
                                }),
                            c.on("orientationchange.fb resize.fb", function (t) {
                                t && t.originalEvent && "resize" === t.originalEvent.type
                                    ? (e.requestId && f(e.requestId),
                                      (e.requestId = d(function () {
                                          e.update(t);
                                      })))
                                    : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(),
                                      setTimeout(
                                          function () {
                                              e.$refs.stage.show(), e.update(t);
                                          },
                                          n.fancybox.isMobile ? 600 : 250
                                      ));
                            }),
                            h.on("keydown.fb", function (t) {
                                var i = (n.fancybox ? n.fancybox.getInstance() : null).current,
                                    o = t.keyCode || t.which;
                                if (9 != o) {
                                    if (!(!i.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select")))
                                        return 8 === o || 27 === o
                                            ? (t.preventDefault(), void e.close(t))
                                            : 37 === o || 38 === o
                                            ? (t.preventDefault(), void e.previous())
                                            : 39 === o || 40 === o
                                            ? (t.preventDefault(), void e.next())
                                            : void e.trigger("afterKeydown", t, o);
                                } else i.opts.trapFocus && e.focus(t);
                            }),
                            e.group[e.currIndex].opts.idleTime &&
                                ((e.idleSecondsCounter = 0),
                                h.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
                                    (e.idleSecondsCounter = 0), e.isIdle && e.showControls(), (e.isIdle = !1);
                                }),
                                (e.idleInterval = t.setInterval(function () {
                                    e.idleSecondsCounter++, e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && ((e.isIdle = !0), (e.idleSecondsCounter = 0), e.hideControls());
                                }, 1e3)));
                    },
                    removeEvents: function () {
                        var e = this;
                        c.off("orientationchange.fb resize.fb"), h.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), (e.idleInterval = null));
                    },
                    previous: function (t) {
                        return this.jumpTo(this.currPos - 1, t);
                    },
                    next: function (t) {
                        return this.jumpTo(this.currPos + 1, t);
                    },
                    jumpTo: function (t, e) {
                        var o,
                            s,
                            r,
                            a,
                            l,
                            c,
                            h,
                            u,
                            d,
                            f = this,
                            p = f.group.length;
                        if (!(f.isDragging || f.isClosing || (f.isAnimating && f.firstRun))) {
                            if (((t = parseInt(t, 10)), !(r = f.current ? f.current.opts.loop : f.opts.loop) && (t < 0 || t >= p))) return !1;
                            if (
                                ((o = f.firstRun = !Object.keys(f.slides).length),
                                (l = f.current),
                                (f.prevIndex = f.currIndex),
                                (f.prevPos = f.currPos),
                                (a = f.createSlide(t)),
                                p > 1 && ((r || a.index < p - 1) && f.createSlide(t + 1), (r || a.index > 0) && f.createSlide(t - 1)),
                                (f.current = a),
                                (f.currIndex = a.index),
                                (f.currPos = a.pos),
                                f.trigger("beforeShow", o),
                                f.updateControls(),
                                (a.forcedDuration = i),
                                n.isNumeric(e) ? (a.forcedDuration = e) : (e = a.opts[o ? "animationDuration" : "transitionDuration"]),
                                (e = parseInt(e, 10)),
                                (s = f.isMoved(a)),
                                a.$slide.addClass("fancybox-slide--current"),
                                o)
                            )
                                return a.opts.animationEffect && e && f.$refs.container.css("transition-duration", e + "ms"), f.$refs.container.addClass("fancybox-is-open").trigger("focus"), f.loadSlide(a), void f.preload("image");
                            (c = n.fancybox.getTranslate(l.$slide)),
                                (h = n.fancybox.getTranslate(f.$refs.stage)),
                                n.each(f.slides, function (t, e) {
                                    n.fancybox.stop(e.$slide, !0);
                                }),
                                l.pos !== a.pos && (l.isComplete = !1),
                                l.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),
                                s
                                    ? ((d = c.left - (l.pos * c.width + l.pos * l.opts.gutter)),
                                      n.each(f.slides, function (t, i) {
                                          i.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
                                              return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                                          });
                                          var o = i.pos * c.width + i.pos * i.opts.gutter;
                                          n.fancybox.setTranslate(i.$slide, { top: 0, left: o - h.left + d }),
                                              i.pos !== a.pos && i.$slide.addClass("fancybox-slide--" + (i.pos > a.pos ? "next" : "previous")),
                                              g(i.$slide),
                                              n.fancybox.animate(i.$slide, { top: 0, left: (i.pos - a.pos) * c.width + (i.pos - a.pos) * i.opts.gutter }, e, function () {
                                                  i.$slide.css({ transform: "", opacity: "" }).removeClass("fancybox-slide--next fancybox-slide--previous"), i.pos === f.currPos && f.complete();
                                              });
                                      }))
                                    : e &&
                                      a.opts.transitionEffect &&
                                      ((u = "fancybox-animated fancybox-fx-" + a.opts.transitionEffect),
                                      l.$slide.addClass("fancybox-slide--" + (l.pos > a.pos ? "next" : "previous")),
                                      n.fancybox.animate(
                                          l.$slide,
                                          u,
                                          e,
                                          function () {
                                              l.$slide.removeClass(u).removeClass("fancybox-slide--next fancybox-slide--previous");
                                          },
                                          !1
                                      )),
                                a.isLoaded ? f.revealContent(a) : f.loadSlide(a),
                                f.preload("image");
                        }
                    },
                    createSlide: function (t) {
                        var e,
                            i,
                            o = this;
                        return (
                            (i = (i = t % o.group.length) < 0 ? o.group.length + i : i),
                            !o.slides[t] &&
                                o.group[i] &&
                                ((e = n('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage)), (o.slides[t] = n.extend(!0, {}, o.group[i], { pos: t, $slide: e, isLoaded: !1 })), o.updateSlide(o.slides[t])),
                            o.slides[t]
                        );
                    },
                    scaleToActual: function (t, e, o) {
                        var s,
                            r,
                            a,
                            l,
                            c,
                            h = this,
                            u = h.current,
                            d = u.$content,
                            f = n.fancybox.getTranslate(u.$slide).width,
                            p = n.fancybox.getTranslate(u.$slide).height,
                            g = u.width,
                            m = u.height;
                        h.isAnimating ||
                            h.isMoved() ||
                            !d ||
                            "image" != u.type ||
                            !u.isLoaded ||
                            u.hasError ||
                            ((h.isAnimating = !0),
                            n.fancybox.stop(d),
                            (t = t === i ? 0.5 * f : t),
                            (e = e === i ? 0.5 * p : e),
                            ((s = n.fancybox.getTranslate(d)).top -= n.fancybox.getTranslate(u.$slide).top),
                            (s.left -= n.fancybox.getTranslate(u.$slide).left),
                            (l = g / s.width),
                            (c = m / s.height),
                            (r = 0.5 * f - 0.5 * g),
                            (a = 0.5 * p - 0.5 * m),
                            g > f && ((r = s.left * l - (t * l - t)) > 0 && (r = 0), r < f - g && (r = f - g)),
                            m > p && ((a = s.top * c - (e * c - e)) > 0 && (a = 0), a < p - m && (a = p - m)),
                            h.updateCursor(g, m),
                            n.fancybox.animate(d, { top: a, left: r, scaleX: l, scaleY: c }, o || 366, function () {
                                h.isAnimating = !1;
                            }),
                            h.SlideShow && h.SlideShow.isActive && h.SlideShow.stop());
                    },
                    scaleToFit: function (t) {
                        var e,
                            i = this,
                            o = i.current,
                            s = o.$content;
                        i.isAnimating ||
                            i.isMoved() ||
                            !s ||
                            "image" != o.type ||
                            !o.isLoaded ||
                            o.hasError ||
                            ((i.isAnimating = !0),
                            n.fancybox.stop(s),
                            (e = i.getFitPos(o)),
                            i.updateCursor(e.width, e.height),
                            n.fancybox.animate(s, { top: e.top, left: e.left, scaleX: e.width / s.width(), scaleY: e.height / s.height() }, t || 366, function () {
                                i.isAnimating = !1;
                            }));
                    },
                    getFitPos: function (t) {
                        var e,
                            i,
                            o,
                            s,
                            r = t.$content,
                            a = t.$slide,
                            l = t.width || t.opts.width,
                            c = t.height || t.opts.height,
                            h = {};
                        return (
                            !!(t.isLoaded && r && r.length) &&
                            ((e = n.fancybox.getTranslate(this.$refs.stage).width),
                            (i = n.fancybox.getTranslate(this.$refs.stage).height),
                            (e -= parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight"))),
                            (i -= parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom"))),
                            (l && c) || ((l = e), (c = i)),
                            (l *= o = Math.min(1, e / l, i / c)) > e - 0.5 && (l = e),
                            (c *= o) > i - 0.5 && (c = i),
                            "image" === t.type
                                ? ((h.top = Math.floor(0.5 * (i - c)) + parseFloat(a.css("paddingTop"))), (h.left = Math.floor(0.5 * (e - l)) + parseFloat(a.css("paddingLeft"))))
                                : "video" === t.contentType && (c > l / (s = t.opts.width && t.opts.height ? l / c : t.opts.ratio || 16 / 9) ? (c = l / s) : l > c * s && (l = c * s)),
                            (h.width = l),
                            (h.height = c),
                            h)
                        );
                    },
                    update: function (t) {
                        var e = this;
                        n.each(e.slides, function (n, i) {
                            e.updateSlide(i, t);
                        });
                    },
                    updateSlide: function (t, e) {
                        var i = this,
                            o = t && t.$content,
                            s = t.width || t.opts.width,
                            r = t.height || t.opts.height,
                            a = t.$slide;
                        i.adjustCaption(t),
                            o && (s || r || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(o), n.fancybox.setTranslate(o, i.getFitPos(t)), t.pos === i.currPos && ((i.isAnimating = !1), i.updateCursor())),
                            i.adjustLayout(t),
                            a.length &&
                                (a.trigger("refresh"),
                                t.pos === i.currPos && i.$refs.toolbar.add(i.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", a.get(0).scrollHeight > a.get(0).clientHeight)),
                            i.trigger("onUpdate", t, e);
                    },
                    centerSlide: function (t) {
                        var e = this,
                            o = e.current,
                            s = o.$slide;
                        !e.isClosing &&
                            o &&
                            (s.siblings().css({ transform: "", opacity: "" }),
                            s.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),
                            n.fancybox.animate(
                                s,
                                { top: 0, left: 0, opacity: 1 },
                                t === i ? 0 : t,
                                function () {
                                    s.css({ transform: "", opacity: "" }), o.isComplete || e.complete();
                                },
                                !1
                            ));
                    },
                    isMoved: function (t) {
                        var e,
                            i,
                            o = t || this.current;
                        return !!o && ((i = n.fancybox.getTranslate(this.$refs.stage)), (e = n.fancybox.getTranslate(o.$slide)), !o.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - i.top) > 0.5 || Math.abs(e.left - i.left) > 0.5));
                    },
                    updateCursor: function (t, e) {
                        var i,
                            o,
                            s = this,
                            r = s.current,
                            a = s.$refs.container;
                        r &&
                            !s.isClosing &&
                            s.Guestures &&
                            (a.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),
                            (o = !!(i = s.canPan(t, e)) || s.isZoomable()),
                            a.toggleClass("fancybox-is-zoomable", o),
                            n("[data-fancybox-zoom]").prop("disabled", !o),
                            i
                                ? a.addClass("fancybox-can-pan")
                                : o && ("zoom" === r.opts.clickContent || (n.isFunction(r.opts.clickContent) && "zoom" == r.opts.clickContent(r)))
                                ? a.addClass("fancybox-can-zoomIn")
                                : r.opts.touch && (r.opts.touch.vertical || s.group.length > 1) && "video" !== r.contentType && a.addClass("fancybox-can-swipe"));
                    },
                    isZoomable: function () {
                        var t,
                            e = this,
                            n = e.current;
                        if (n && !e.isClosing && "image" === n.type && !n.hasError) {
                            if (!n.isLoaded) return !0;
                            if ((t = e.getFitPos(n)) && (n.width > t.width || n.height > t.height)) return !0;
                        }
                        return !1;
                    },
                    isScaledDown: function (t, e) {
                        var o = !1,
                            s = this.current,
                            r = s.$content;
                        return t !== i && e !== i ? (o = t < s.width && e < s.height) : r && (o = (o = n.fancybox.getTranslate(r)).width < s.width && o.height < s.height), o;
                    },
                    canPan: function (t, e) {
                        var o = this.current,
                            s = null,
                            r = !1;
                        return (
                            "image" === o.type &&
                                (o.isComplete || (t && e)) &&
                                !o.hasError &&
                                ((r = this.getFitPos(o)),
                                t !== i && e !== i ? (s = { width: t, height: e }) : o.isComplete && (s = n.fancybox.getTranslate(o.$content)),
                                s && r && (r = Math.abs(s.width - r.width) > 1.5 || Math.abs(s.height - r.height) > 1.5)),
                            r
                        );
                    },
                    loadSlide: function (t) {
                        var e,
                            i,
                            o,
                            s = this;
                        if (!t.isLoading && !t.isLoaded) {
                            if (((t.isLoading = !0), !1 === s.trigger("beforeLoad", t))) return (t.isLoading = !1), !1;
                            switch (((e = t.type), (i = t.$slide).off("refresh").trigger("onReset").addClass(t.opts.slideClass), e)) {
                                case "image":
                                    s.setImage(t);
                                    break;
                                case "iframe":
                                    s.setIframe(t);
                                    break;
                                case "html":
                                    s.setContent(t, t.src || t.content);
                                    break;
                                case "video":
                                    s.setContent(
                                        t,
                                        t.opts.video.tpl
                                            .replace(/\{\{src\}\}/gi, t.src)
                                            .replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "")
                                            .replace("{{poster}}", t.thumb || "")
                                    );
                                    break;
                                case "inline":
                                    n(t.src).length ? s.setContent(t, n(t.src)) : s.setError(t);
                                    break;
                                case "ajax":
                                    s.showLoading(t),
                                        (o = n.ajax(
                                            n.extend({}, t.opts.ajax.settings, {
                                                url: t.src,
                                                success: function (e, n) {
                                                    "success" === n && s.setContent(t, e);
                                                },
                                                error: function (e, n) {
                                                    e && "abort" !== n && s.setError(t);
                                                },
                                            })
                                        )),
                                        i.one("onReset", function () {
                                            o.abort();
                                        });
                                    break;
                                default:
                                    s.setError(t);
                            }
                            return !0;
                        }
                    },
                    setImage: function (t) {
                        var i,
                            o = this;
                        setTimeout(function () {
                            var e = t.$image;
                            o.isClosing || !t.isLoading || (e && e.length && e[0].complete) || t.hasError || o.showLoading(t);
                        }, 50),
                            o.checkSrcset(t),
                            (t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image"))),
                            !1 !== t.opts.preload &&
                                t.opts.width &&
                                t.opts.height &&
                                t.thumb &&
                                ((t.width = t.opts.width),
                                (t.height = t.opts.height),
                                ((i = e.createElement("img")).onerror = function () {
                                    n(this).remove(), (t.$ghost = null);
                                }),
                                (i.onload = function () {
                                    o.afterLoad(t);
                                }),
                                (t.$ghost = n(i).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb))),
                            o.setBigImage(t);
                    },
                    checkSrcset: function (e) {
                        var n,
                            i,
                            o,
                            s,
                            r = e.opts.srcset || e.opts.image.srcset;
                        if (r) {
                            (o = t.devicePixelRatio || 1),
                                (s = t.innerWidth * o),
                                (i = r.split(",").map(function (t) {
                                    var e = {};
                                    return (
                                        t
                                            .trim()
                                            .split(/\s+/)
                                            .forEach(function (t, n) {
                                                var i = parseInt(t.substring(0, t.length - 1), 10);
                                                if (0 === n) return (e.url = t);
                                                i && ((e.value = i), (e.postfix = t[t.length - 1]));
                                            }),
                                        e
                                    );
                                })),
                                i.sort(function (t, e) {
                                    return t.value - e.value;
                                });
                            for (var a = 0; a < i.length; a++) {
                                var l = i[a];
                                if (("w" === l.postfix && l.value >= s) || ("x" === l.postfix && l.value >= o)) {
                                    n = l;
                                    break;
                                }
                            }
                            !n && i.length && (n = i[i.length - 1]), n && ((e.src = n.url), e.width && e.height && "w" == n.postfix && ((e.height = (e.width / e.height) * n.value), (e.width = n.value)), (e.opts.srcset = r));
                        }
                    },
                    setBigImage: function (t) {
                        var i = this,
                            o = e.createElement("img"),
                            s = n(o);
                        (t.$image = s
                            .one("error", function () {
                                i.setError(t);
                            })
                            .one("load", function () {
                                var e;
                                t.$ghost || (i.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), i.afterLoad(t)),
                                    i.isClosing ||
                                        (t.opts.srcset &&
                                            (((e = t.opts.sizes) && "auto" !== e) || (e = (t.width / t.height > 1 && c.width() / c.height() > 1 ? "100" : Math.round((t.width / t.height) * 100)) + "vw"),
                                            s.attr("sizes", e).attr("srcset", t.opts.srcset)),
                                        t.$ghost &&
                                            setTimeout(function () {
                                                t.$ghost && !i.isClosing && t.$ghost.hide();
                                            }, Math.min(300, Math.max(1e3, t.height / 1600))),
                                        i.hideLoading(t));
                            })
                            .addClass("fancybox-image")
                            .attr("src", t.src)
                            .appendTo(t.$content)),
                            (o.complete || "complete" == o.readyState) && s.naturalWidth && s.naturalHeight ? s.trigger("load") : o.error && s.trigger("error");
                    },
                    resolveImageSlideSize: function (t, e, n) {
                        var i = parseInt(t.opts.width, 10),
                            o = parseInt(t.opts.height, 10);
                        (t.width = e), (t.height = n), i > 0 && ((t.width = i), (t.height = Math.floor((i * n) / e))), o > 0 && ((t.width = Math.floor((o * e) / n)), (t.height = o));
                    },
                    setIframe: function (t) {
                        var e,
                            o = this,
                            s = t.opts.iframe,
                            r = t.$slide;
                        (t.$content = n('<div class="fancybox-content' + (s.preload ? " fancybox-is-hidden" : "") + '"></div>')
                            .css(s.css)
                            .appendTo(r)),
                            r.addClass("fancybox-slide--" + t.contentType),
                            (t.$iframe = e = n(s.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                                .attr(s.attr)
                                .appendTo(t.$content)),
                            s.preload
                                ? (o.showLoading(t),
                                  e.on("load.fb error.fb", function (e) {
                                      (this.isReady = 1), t.$slide.trigger("refresh"), o.afterLoad(t);
                                  }),
                                  r.on("refresh.fb", function () {
                                      var n,
                                          o = t.$content,
                                          a = s.css.width,
                                          l = s.css.height;
                                      if (1 === e[0].isReady) {
                                          try {
                                              n = e.contents().find("body");
                                          } catch (t) {}
                                          n &&
                                              n.length &&
                                              n.children().length &&
                                              (r.css("overflow", "visible"),
                                              o.css({ width: "100%", "max-width": "100%", height: "9999px" }),
                                              a === i && (a = Math.ceil(Math.max(n[0].clientWidth, n.outerWidth(!0)))),
                                              o.css("width", a || "").css("max-width", ""),
                                              l === i && (l = Math.ceil(Math.max(n[0].clientHeight, n.outerHeight(!0)))),
                                              o.css("height", l || ""),
                                              r.css("overflow", "auto")),
                                              o.removeClass("fancybox-is-hidden");
                                      }
                                  }))
                                : o.afterLoad(t),
                            e.attr("src", t.src),
                            r.one("onReset", function () {
                                try {
                                    n(this).find("iframe").hide().unbind().attr("src", "//about:blank");
                                } catch (t) {}
                                n(this).off("refresh.fb").empty(), (t.isLoaded = !1), (t.isRevealed = !1);
                            });
                    },
                    setContent: function (t, e) {
                        var i,
                            o = this;
                        o.isClosing ||
                            (o.hideLoading(t),
                            t.$content && n.fancybox.stop(t.$content),
                            t.$slide.empty(),
                            (i = e) && i.hasOwnProperty && i instanceof n && e.parent().length
                                ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"),
                                  (t.$placeholder = n("<div>").hide().insertAfter(e)),
                                  e.css("display", "inline-block"))
                                : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
                            t.$slide.one("onReset", function () {
                                n(this).find("video,audio").trigger("pause"),
                                    t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), (t.$placeholder = null)),
                                    t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
                                    t.hasError || (n(this).empty(), (t.isLoaded = !1), (t.isRevealed = !1));
                            }),
                            n(e).appendTo(t.$slide),
                            n(e).is("video,audio") &&
                                (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), (t.contentType = "video"), (t.opts.width = t.opts.width || n(e).attr("width")), (t.opts.height = t.opts.height || n(e).attr("height"))),
                            (t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first()),
                            t.$content.siblings().hide(),
                            t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()),
                            t.$content.addClass("fancybox-content"),
                            t.$slide.addClass("fancybox-slide--" + t.contentType),
                            o.afterLoad(t));
                    },
                    setError: function (t) {
                        (t.hasError = !0),
                            t.$slide
                                .trigger("onReset")
                                .removeClass("fancybox-slide--" + t.contentType)
                                .addClass("fancybox-slide--error"),
                            (t.contentType = "html"),
                            this.setContent(t, this.translate(t, t.opts.errorTpl)),
                            t.pos === this.currPos && (this.isAnimating = !1);
                    },
                    showLoading: function (t) {
                        var e = this;
                        (t = t || e.current) && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"));
                    },
                    hideLoading: function (t) {
                        (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner);
                    },
                    afterLoad: function (t) {
                        var e = this;
                        e.isClosing ||
                            ((t.isLoading = !1),
                            (t.isLoaded = !0),
                            e.trigger("afterLoad", t),
                            e.hideLoading(t),
                            !t.opts.smallBtn || (t.$smallBtn && t.$smallBtn.length) || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)),
                            t.opts.protect &&
                                t.$content &&
                                !t.hasError &&
                                (t.$content.on("contextmenu.fb", function (t) {
                                    return 2 == t.button && t.preventDefault(), !0;
                                }),
                                "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
                            e.adjustCaption(t),
                            e.adjustLayout(t),
                            t.pos === e.currPos && e.updateCursor(),
                            e.revealContent(t));
                    },
                    adjustCaption: function (t) {
                        var e,
                            n = this,
                            i = t || n.current,
                            o = i.opts.caption,
                            s = i.opts.preventCaptionOverlap,
                            r = n.$refs.caption,
                            a = !1;
                        r.toggleClass("fancybox-caption--separate", s),
                            s &&
                                o &&
                                o.length &&
                                (i.pos !== n.currPos ? ((e = r.clone().appendTo(r.parent())).children().eq(0).empty().html(o), (a = e.outerHeight(!0)), e.empty().remove()) : n.$caption && (a = n.$caption.outerHeight(!0)),
                                i.$slide.css("padding-bottom", a || ""));
                    },
                    adjustLayout: function (t) {
                        var e,
                            n,
                            i,
                            o,
                            s = t || this.current;
                        s.isLoaded &&
                            !0 !== s.opts.disableLayoutFix &&
                            (s.$content.css("margin-bottom", ""),
                            s.$content.outerHeight() > s.$slide.height() + 0.5 &&
                                ((i = s.$slide[0].style["padding-bottom"]),
                                (o = s.$slide.css("padding-bottom")),
                                parseFloat(o) > 0 && ((e = s.$slide[0].scrollHeight), s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = o), s.$slide.css("padding-bottom", i))),
                            s.$content.css("margin-bottom", n));
                    },
                    revealContent: function (t) {
                        var e,
                            o,
                            s,
                            r,
                            a = this,
                            l = t.$slide,
                            c = !1,
                            h = !1,
                            u = a.isMoved(t),
                            d = t.isRevealed;
                        return (
                            (t.isRevealed = !0),
                            (e = t.opts[a.firstRun ? "animationEffect" : "transitionEffect"]),
                            (s = t.opts[a.firstRun ? "animationDuration" : "transitionDuration"]),
                            (s = parseInt(t.forcedDuration === i ? s : t.forcedDuration, 10)),
                            (!u && t.pos === a.currPos && s) || (e = !1),
                            "zoom" === e && (t.pos === a.currPos && s && "image" === t.type && !t.hasError && (h = a.getThumbPos(t)) ? (c = a.getFitPos(t)) : (e = "fade")),
                            "zoom" === e
                                ? ((a.isAnimating = !0),
                                  (c.scaleX = c.width / h.width),
                                  (c.scaleY = c.height / h.height),
                                  "auto" == (r = t.opts.zoomOpacity) && (r = Math.abs(t.width / t.height - h.width / h.height) > 0.1),
                                  r && ((h.opacity = 0.1), (c.opacity = 1)),
                                  n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), h),
                                  g(t.$content),
                                  void n.fancybox.animate(t.$content, c, s, function () {
                                      (a.isAnimating = !1), a.complete();
                                  }))
                                : (a.updateSlide(t),
                                  e
                                      ? (n.fancybox.stop(l),
                                        (o = "fancybox-slide--" + (t.pos >= a.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e),
                                        l.addClass(o).removeClass("fancybox-slide--current"),
                                        t.$content.removeClass("fancybox-is-hidden"),
                                        g(l),
                                        "image" !== t.type && t.$content.hide().show(0),
                                        void n.fancybox.animate(
                                            l,
                                            "fancybox-slide--current",
                                            s,
                                            function () {
                                                l.removeClass(o).css({ transform: "", opacity: "" }), t.pos === a.currPos && a.complete();
                                            },
                                            !0
                                        ))
                                      : (t.$content.removeClass("fancybox-is-hidden"), d || !u || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void (t.pos === a.currPos && a.complete())))
                        );
                    },
                    getThumbPos: function (t) {
                        var i,
                            o,
                            s,
                            r,
                            a,
                            l,
                            c = t.$thumb;
                        return (
                            !(
                                !c ||
                                !(function (t) {
                                    var i, o;
                                    return (
                                        !(!t || t.ownerDocument !== e) &&
                                        (n(".fancybox-container").css("pointer-events", "none"),
                                        (i = { x: t.getBoundingClientRect().left + t.offsetWidth / 2, y: t.getBoundingClientRect().top + t.offsetHeight / 2 }),
                                        (o = e.elementFromPoint(i.x, i.y) === t),
                                        n(".fancybox-container").css("pointer-events", ""),
                                        o)
                                    );
                                })(c[0])
                            ) &&
                            ((o = n.fancybox.getTranslate(c)),
                            (s = parseFloat(c.css("border-top-width") || 0)),
                            (r = parseFloat(c.css("border-right-width") || 0)),
                            (a = parseFloat(c.css("border-bottom-width") || 0)),
                            (l = parseFloat(c.css("border-left-width") || 0)),
                            (i = { top: o.top + s, left: o.left + l, width: o.width - r - l, height: o.height - s - a, scaleX: 1, scaleY: 1 }),
                            o.width > 0 && o.height > 0 && i)
                        );
                    },
                    complete: function () {
                        var t,
                            e = this,
                            i = e.current,
                            o = {};
                        !e.isMoved() &&
                            i.isLoaded &&
                            (i.isComplete ||
                                ((i.isComplete = !0),
                                i.$slide.siblings().trigger("onReset"),
                                e.preload("inline"),
                                g(i.$slide),
                                i.$slide.addClass("fancybox-slide--complete"),
                                n.each(e.slides, function (t, i) {
                                    i.pos >= e.currPos - 1 && i.pos <= e.currPos + 1 ? (o[i.pos] = i) : i && (n.fancybox.stop(i.$slide), i.$slide.off().remove());
                                }),
                                (e.slides = o)),
                            (e.isAnimating = !1),
                            e.updateCursor(),
                            e.trigger("afterShow"),
                            i.opts.video.autoStart &&
                                i.$slide
                                    .find("video,audio")
                                    .filter(":visible:first")
                                    .trigger("play")
                                    .one("ended", function () {
                                        Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next();
                                    }),
                            i.opts.autoFocus && "html" === i.contentType && ((t = i.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : e.focus(null, !0)),
                            i.$slide.scrollTop(0).scrollLeft(0));
                    },
                    preload: function (t) {
                        var e,
                            n,
                            i = this;
                        i.group.length < 2 || ((n = i.slides[i.currPos + 1]), (e = i.slides[i.currPos - 1]) && e.type === t && i.loadSlide(e), n && n.type === t && i.loadSlide(n));
                    },
                    focus: function (t, i) {
                        var o,
                            s,
                            r = this,
                            a = [
                                "a[href]",
                                "area[href]",
                                'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
                                "select:not([disabled]):not([aria-hidden])",
                                "textarea:not([disabled]):not([aria-hidden])",
                                "button:not([disabled]):not([aria-hidden])",
                                "iframe",
                                "object",
                                "embed",
                                "video",
                                "audio",
                                "[contenteditable]",
                                '[tabindex]:not([tabindex^="-"])',
                            ].join(",");
                        r.isClosing ||
                            ((o = (o = !t && r.current && r.current.isComplete ? r.current.$slide.find("*:visible" + (i ? ":not(.fancybox-close-small)" : "")) : r.$refs.container.find("*:visible")).filter(a).filter(function () {
                                return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled");
                            })).length
                                ? ((s = o.index(e.activeElement)),
                                  t && t.shiftKey ? (s < 0 || 0 == s) && (t.preventDefault(), o.eq(o.length - 1).trigger("focus")) : (s < 0 || s == o.length - 1) && (t && t.preventDefault(), o.eq(0).trigger("focus")))
                                : r.$refs.container.trigger("focus"));
                    },
                    activate: function () {
                        var t = this;
                        n(".fancybox-container").each(function () {
                            var e = n(this).data("FancyBox");
                            e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), (e.isVisible = !1));
                        }),
                            (t.isVisible = !0),
                            (t.current || t.isIdle) && (t.update(), t.updateControls()),
                            t.trigger("onActivate"),
                            t.addEvents();
                    },
                    close: function (t, e) {
                        var i,
                            o,
                            s,
                            r,
                            a,
                            l,
                            c,
                            h = this,
                            u = h.current,
                            f = function () {
                                h.cleanUp(t);
                            };
                        return (
                            !h.isClosing &&
                            ((h.isClosing = !0),
                            !1 === h.trigger("beforeClose", t)
                                ? ((h.isClosing = !1),
                                  d(function () {
                                      h.update();
                                  }),
                                  !1)
                                : (h.removeEvents(),
                                  (s = u.$content),
                                  (i = u.opts.animationEffect),
                                  (o = n.isNumeric(e) ? e : i ? u.opts.animationDuration : 0),
                                  u.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                                  !0 !== t ? n.fancybox.stop(u.$slide) : (i = !1),
                                  u.$slide.siblings().trigger("onReset").remove(),
                                  o &&
                                      h.$refs.container
                                          .removeClass("fancybox-is-open")
                                          .addClass("fancybox-is-closing")
                                          .css("transition-duration", o + "ms"),
                                  h.hideLoading(u),
                                  h.hideControls(!0),
                                  h.updateCursor(),
                                  "zoom" !== i || (s && o && "image" === u.type && !h.isMoved() && !u.hasError && (c = h.getThumbPos(u))) || (i = "fade"),
                                  "zoom" === i
                                      ? (n.fancybox.stop(s),
                                        (l = { top: (r = n.fancybox.getTranslate(s)).top, left: r.left, scaleX: r.width / c.width, scaleY: r.height / c.height, width: c.width, height: c.height }),
                                        "auto" == (a = u.opts.zoomOpacity) && (a = Math.abs(u.width / u.height - c.width / c.height) > 0.1),
                                        a && (c.opacity = 0),
                                        n.fancybox.setTranslate(s, l),
                                        g(s),
                                        n.fancybox.animate(s, c, o, f),
                                        !0)
                                      : (i && o ? n.fancybox.animate(u.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + i, o, f) : !0 === t ? setTimeout(f, o) : f(),
                                        !0)))
                        );
                    },
                    cleanUp: function (e) {
                        var i,
                            o,
                            s,
                            r = this,
                            a = r.current.opts.$orig;
                        r.current.$slide.trigger("onReset"),
                            r.$refs.container.empty().remove(),
                            r.trigger("afterClose", e),
                            r.current.opts.backFocus && ((a && a.length && a.is(":visible")) || (a = r.$trigger), a && a.length && ((o = t.scrollX), (s = t.scrollY), a.trigger("focus"), n("html, body").scrollTop(s).scrollLeft(o))),
                            (r.current = null),
                            (i = n.fancybox.getInstance()) ? i.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove());
                    },
                    trigger: function (t, e) {
                        var i,
                            o = Array.prototype.slice.call(arguments, 1),
                            s = this,
                            r = e && e.opts ? e : s.current;
                        if ((r ? o.unshift(r) : (r = s), o.unshift(s), n.isFunction(r.opts[t]) && (i = r.opts[t].apply(r, o)), !1 === i)) return i;
                        "afterClose" !== t && s.$refs ? s.$refs.container.trigger(t + ".fb", o) : h.trigger(t + ".fb", o);
                    },
                    updateControls: function () {
                        var t = this,
                            i = t.current,
                            o = i.index,
                            s = t.$refs.container,
                            r = t.$refs.caption,
                            a = i.opts.caption;
                        i.$slide.trigger("refresh"),
                            a && a.length ? ((t.$caption = r), r.children().eq(0).html(a)) : (t.$caption = null),
                            t.hasHiddenControls || t.isIdle || t.showControls(),
                            s.find("[data-fancybox-count]").html(t.group.length),
                            s.find("[data-fancybox-index]").html(o + 1),
                            s.find("[data-fancybox-prev]").prop("disabled", !i.opts.loop && o <= 0),
                            s.find("[data-fancybox-next]").prop("disabled", !i.opts.loop && o >= t.group.length - 1),
                            "image" === i.type
                                ? s
                                      .find("[data-fancybox-zoom]")
                                      .show()
                                      .end()
                                      .find("[data-fancybox-download]")
                                      .attr("href", i.opts.image.src || i.src)
                                      .show()
                                : i.opts.toolbar && s.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
                            n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus");
                    },
                    hideControls: function (t) {
                        var e = ["infobar", "toolbar", "nav"];
                        (!t && this.current.opts.preventCaptionOverlap) || e.push("caption"),
                            this.$refs.container.removeClass(
                                e
                                    .map(function (t) {
                                        return "fancybox-show-" + t;
                                    })
                                    .join(" ")
                            ),
                            (this.hasHiddenControls = !0);
                    },
                    showControls: function () {
                        var t = this,
                            e = t.current ? t.current.opts : t.opts,
                            n = t.$refs.container;
                        (t.hasHiddenControls = !1),
                            (t.idleSecondsCounter = 0),
                            n
                                .toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons))
                                .toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1))
                                .toggleClass("fancybox-show-caption", !!t.$caption)
                                .toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1))
                                .toggleClass("fancybox-is-modal", !!e.modal);
                    },
                    toggleControls: function () {
                        this.hasHiddenControls ? this.showControls() : this.hideControls();
                    },
                }),
                    (n.fancybox = {
                        version: "3.5.7",
                        defaults: l,
                        getInstance: function (t) {
                            var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                                i = Array.prototype.slice.call(arguments, 1);
                            return e instanceof b && ("string" === n.type(t) ? e[t].apply(e, i) : "function" === n.type(t) && t.apply(e, i), e);
                        },
                        open: function (t, e, n) {
                            return new b(t, e, n);
                        },
                        close: function (t) {
                            var e = this.getInstance();
                            e && (e.close(), !0 === t && this.close(t));
                        },
                        destroy: function () {
                            this.close(!0), h.add("body").off("click.fb-start", "**");
                        },
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        use3d: ((o = e.createElement("div")), t.getComputedStyle && t.getComputedStyle(o) && t.getComputedStyle(o).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)),
                        getTranslate: function (t) {
                            var e;
                            return !(!t || !t.length) && { top: (e = t[0].getBoundingClientRect()).top || 0, left: e.left || 0, width: e.width, height: e.height, opacity: parseFloat(t.css("opacity")) };
                        },
                        setTranslate: function (t, e) {
                            var n = "",
                                o = {};
                            if (t && e)
                                return (
                                    (e.left === i && e.top === i) ||
                                        ((n = (e.left === i ? t.position().left : e.left) + "px, " + (e.top === i ? t.position().top : e.top) + "px"), (n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")")),
                                    e.scaleX !== i && e.scaleY !== i ? (n += " scale(" + e.scaleX + ", " + e.scaleY + ")") : e.scaleX !== i && (n += " scaleX(" + e.scaleX + ")"),
                                    n.length && (o.transform = n),
                                    e.opacity !== i && (o.opacity = e.opacity),
                                    e.width !== i && (o.width = e.width),
                                    e.height !== i && (o.height = e.height),
                                    t.css(o)
                                );
                        },
                        animate: function (t, e, o, s, r) {
                            var a,
                                l = this;
                            n.isFunction(o) && ((s = o), (o = null)),
                                l.stop(t),
                                (a = l.getTranslate(t)),
                                t.on(p, function (c) {
                                    (!c || !c.originalEvent || (t.is(c.originalEvent.target) && "z-index" != c.originalEvent.propertyName)) &&
                                        (l.stop(t),
                                        n.isNumeric(o) && t.css("transition-duration", ""),
                                        n.isPlainObject(e)
                                            ? e.scaleX !== i && e.scaleY !== i && l.setTranslate(t, { top: e.top, left: e.left, width: a.width * e.scaleX, height: a.height * e.scaleY, scaleX: 1, scaleY: 1 })
                                            : !0 !== r && t.removeClass(e),
                                        n.isFunction(s) && s(c));
                                }),
                                n.isNumeric(o) && t.css("transition-duration", o + "ms"),
                                n.isPlainObject(e)
                                    ? (e.scaleX !== i && e.scaleY !== i && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e))
                                    : t.addClass(e),
                                t.data(
                                    "timer",
                                    setTimeout(function () {
                                        t.trigger(p);
                                    }, o + 33)
                                );
                        },
                        stop: function (t, e) {
                            t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(p), t.off(p).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"));
                        },
                    }),
                    (n.fn.fancybox = function (t) {
                        var e;
                        return (e = (t = t || {}).selector || !1) ? n("body").off("click.fb-start", e).on("click.fb-start", e, { options: t }, x) : this.off("click.fb-start").on("click.fb-start", { items: this, options: t }, x), this;
                    }),
                    h.on("click.fb-start", "[data-fancybox]", x),
                    h.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
                        n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]')
                            .eq(n(this).attr("data-fancybox-index") || 0)
                            .trigger("click.fb-start", { $trigger: n(this) });
                    }),
                    (s = ".fancybox-button"),
                    (r = "fancybox-focus"),
                    (a = null),
                    h.on("mousedown mouseup focus blur", s, function (t) {
                        switch (t.type) {
                            case "mousedown":
                                a = n(this);
                                break;
                            case "mouseup":
                                a = null;
                                break;
                            case "focusin":
                                n(s).removeClass(r), n(this).is(a) || n(this).is("[disabled]") || n(this).addClass(r);
                                break;
                            case "focusout":
                                n(s).removeClass(r);
                        }
                    });
            }
        function x(t, e) {
            var i,
                o,
                s,
                r = [],
                a = 0;
            (t && t.isDefaultPrevented()) ||
                (t.preventDefault(),
                (e = e || {}),
                t && t.data && (e = m(t.data.options, e)),
                (i = e.$target || n(t.currentTarget).trigger("blur")),
                ((s = n.fancybox.getInstance()) && s.$trigger && s.$trigger.is(i)) ||
                    ((r = e.selector ? n(e.selector) : (o = i.attr("data-fancybox") || "") ? ((r = t.data ? t.data.items : []).length ? r.filter('[data-fancybox="' + o + '"]') : n('[data-fancybox="' + o + '"]')) : [i]),
                    (a = n(r).index(i)) < 0 && (a = 0),
                    ((s = n.fancybox.open(r, e, a)).$trigger = i)));
        }
    })(window, document, jQuery),
    (function (t) {
        "use strict";
        var e = {
                youtube: {
                    matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                    params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1 },
                    paramPlace: 8,
                    type: "iframe",
                    url: "https://www.youtube-nocookie.com/embed/$4",
                    thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg",
                },
                vimeo: { matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/, params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1 }, paramPlace: 3, type: "iframe", url: "//player.vimeo.com/video/$2" },
                instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l" },
                gmap_place: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                    type: "iframe",
                    url: function (t) {
                        return (
                            "//maps.google." +
                            t[2] +
                            "/?ll=" +
                            (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") +
                            "&output=" +
                            (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                        );
                    },
                },
                gmap_search: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                    type: "iframe",
                    url: function (t) {
                        return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
                    },
                },
            },
            n = function (e, n, i) {
                if (e)
                    return (
                        (i = i || ""),
                        "object" === t.type(i) && (i = t.param(i, !0)),
                        t.each(n, function (t, n) {
                            e = e.replace("$" + t, n || "");
                        }),
                        i.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + i),
                        e
                    );
            };
        t(document).on("objectNeedsType.fb", function (i, o, s) {
            var r,
                a,
                l,
                c,
                h,
                u,
                d,
                f = s.src || "",
                p = !1;
            (r = t.extend(!0, {}, e, s.opts.media)),
                t.each(r, function (e, i) {
                    if ((l = f.match(i.matcher))) {
                        if (((p = i.type), (d = e), (u = {}), i.paramPlace && l[i.paramPlace])) {
                            "?" == (h = l[i.paramPlace])[0] && (h = h.substring(1)), (h = h.split("&"));
                            for (var o = 0; o < h.length; ++o) {
                                var r = h[o].split("=", 2);
                                2 == r.length && (u[r[0]] = decodeURIComponent(r[1].replace(/\+/g, " ")));
                            }
                        }
                        return (
                            (c = t.extend(!0, {}, i.params, s.opts[e], u)),
                            (f = "function" === t.type(i.url) ? i.url.call(this, l, c, s) : n(i.url, l, c)),
                            (a = "function" === t.type(i.thumb) ? i.thumb.call(this, l, c, s) : n(i.thumb, l)),
                            "youtube" === e
                                ? (f = f.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, i) {
                                      return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10));
                                  }))
                                : "vimeo" === e && (f = f.replace("&%23", "#")),
                            !1
                        );
                    }
                }),
                p
                    ? (s.opts.thumb || (s.opts.$thumb && s.opts.$thumb.length) || (s.opts.thumb = a),
                      "iframe" === p && (s.opts = t.extend(!0, s.opts, { iframe: { preload: !1, attr: { scrolling: "no" } } })),
                      t.extend(s, { type: p, src: f, origSrc: s.src, contentSource: d, contentType: "image" === p ? "image" : "gmap_place" == d || "gmap_search" == d ? "map" : "video" }))
                    : f && (s.type = s.opts.defaultType);
        });
        var i = {
            youtube: { src: "https://www.youtube.com/iframe_api", class: "YT", loading: !1, loaded: !1 },
            vimeo: { src: "https://player.vimeo.com/api/player.js", class: "Vimeo", loading: !1, loaded: !1 },
            load: function (t) {
                var e,
                    n = this;
                this[t].loaded
                    ? setTimeout(function () {
                          n.done(t);
                      })
                    : this[t].loading ||
                      ((this[t].loading = !0),
                      ((e = document.createElement("script")).type = "text/javascript"),
                      (e.src = this[t].src),
                      "youtube" === t
                          ? (window.onYouTubeIframeAPIReady = function () {
                                (n[t].loaded = !0), n.done(t);
                            })
                          : (e.onload = function () {
                                (n[t].loaded = !0), n.done(t);
                            }),
                      document.body.appendChild(e));
            },
            done: function (e) {
                var n, i;
                "youtube" === e && delete window.onYouTubeIframeAPIReady,
                    (n = t.fancybox.getInstance()) &&
                        ((i = n.current.$content.find("iframe")),
                        "youtube" === e && void 0 !== YT && YT
                            ? new YT.Player(i.attr("id"), {
                                  events: {
                                      onStateChange: function (t) {
                                          0 == t.data && n.next();
                                      },
                                  },
                              })
                            : "vimeo" === e &&
                              void 0 !== Vimeo &&
                              Vimeo &&
                              new Vimeo.Player(i).on("ended", function () {
                                  n.next();
                              }));
            },
        };
        t(document).on({
            "afterShow.fb": function (t, e, n) {
                e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && i.load(n.contentSource);
            },
        });
    })(jQuery),
    (function (t, e, n) {
        "use strict";
        var i =
                t.requestAnimationFrame ||
                t.webkitRequestAnimationFrame ||
                t.mozRequestAnimationFrame ||
                t.oRequestAnimationFrame ||
                function (e) {
                    return t.setTimeout(e, 1e3 / 60);
                },
            o =
                t.cancelAnimationFrame ||
                t.webkitCancelAnimationFrame ||
                t.mozCancelAnimationFrame ||
                t.oCancelAnimationFrame ||
                function (e) {
                    t.clearTimeout(e);
                },
            s = function (e) {
                var n = [];
                for (var i in (e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]))
                    e[i].pageX ? n.push({ x: e[i].pageX, y: e[i].pageY }) : e[i].clientX && n.push({ x: e[i].clientX, y: e[i].clientY });
                return n;
            },
            r = function (t, e, n) {
                return e && t ? ("x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))) : 0;
            },
            a = function (t) {
                if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
                for (var e = 0, i = t[0].attributes, o = i.length; e < o; e++) if ("data-fancybox-" === i[e].nodeName.substr(0, 14)) return !0;
                return !1;
            },
            l = function (e) {
                for (
                    var n, i, o, s, r, a = !1;
                    (n = e.get(0)),
                        (i = void 0),
                        (o = void 0),
                        (s = void 0),
                        (r = void 0),
                        (i = t.getComputedStyle(n)["overflow-y"]),
                        (o = t.getComputedStyle(n)["overflow-x"]),
                        (s = ("scroll" === i || "auto" === i) && n.scrollHeight > n.clientHeight),
                        (r = ("scroll" === o || "auto" === o) && n.scrollWidth > n.clientWidth),
                        !(a = s || r) && (e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body");

                );
                return a;
            },
            c = function (t) {
                var e = this;
                (e.instance = t), (e.$bg = t.$refs.bg), (e.$stage = t.$refs.stage), (e.$container = t.$refs.container), e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"));
            };
        (c.prototype.destroy = function () {
            var t = this;
            t.$container.off(".fb.touch"), n(e).off(".fb.touch"), t.requestId && (o(t.requestId), (t.requestId = null)), t.tapped && (clearTimeout(t.tapped), (t.tapped = null));
        }),
            (c.prototype.ontouchstart = function (i) {
                var o = this,
                    c = n(i.target),
                    h = o.instance,
                    u = h.current,
                    d = u.$slide,
                    f = u.$content,
                    p = "touchstart" == i.type;
                if (
                    (p && o.$container.off("mousedown.fb.touch"),
                    (!i.originalEvent || 2 != i.originalEvent.button) && d.length && c.length && !a(c) && !a(c.parent()) && (c.is("img") || !(i.originalEvent.clientX > c[0].clientWidth + c.offset().left)))
                ) {
                    if (!u || h.isAnimating || u.$slide.hasClass("fancybox-animated")) return i.stopPropagation(), void i.preventDefault();
                    (o.realPoints = o.startPoints = s(i)),
                        o.startPoints.length &&
                            (u.touch && i.stopPropagation(),
                            (o.startEvent = i),
                            (o.canTap = !0),
                            (o.$target = c),
                            (o.$content = f),
                            (o.opts = u.opts.touch),
                            (o.isPanning = !1),
                            (o.isSwiping = !1),
                            (o.isZooming = !1),
                            (o.isScrolling = !1),
                            (o.canPan = h.canPan()),
                            (o.startTime = new Date().getTime()),
                            (o.distanceX = o.distanceY = o.distance = 0),
                            (o.canvasWidth = Math.round(d[0].clientWidth)),
                            (o.canvasHeight = Math.round(d[0].clientHeight)),
                            (o.contentLastPos = null),
                            (o.contentStartPos = n.fancybox.getTranslate(o.$content) || { top: 0, left: 0 }),
                            (o.sliderStartPos = n.fancybox.getTranslate(d)),
                            (o.stagePos = n.fancybox.getTranslate(h.$refs.stage)),
                            (o.sliderStartPos.top -= o.stagePos.top),
                            (o.sliderStartPos.left -= o.stagePos.left),
                            (o.contentStartPos.top -= o.stagePos.top),
                            (o.contentStartPos.left -= o.stagePos.left),
                            n(e)
                                .off(".fb.touch")
                                .on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(o, "ontouchend"))
                                .on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(o, "ontouchmove")),
                            n.fancybox.isMobile && e.addEventListener("scroll", o.onscroll, !0),
                            (((o.opts || o.canPan) && (c.is(o.$stage) || o.$stage.find(c).length)) || (c.is(".fancybox-image") && i.preventDefault(), n.fancybox.isMobile && c.parents(".fancybox-caption").length)) &&
                                ((o.isScrollable = l(c) || l(c.parent())),
                                (n.fancybox.isMobile && o.isScrollable) || i.preventDefault(),
                                (1 === o.startPoints.length || u.hasError) && (o.canPan ? (n.fancybox.stop(o.$content), (o.isPanning = !0)) : (o.isSwiping = !0), o.$container.addClass("fancybox-is-grabbing")),
                                2 === o.startPoints.length &&
                                    "image" === u.type &&
                                    (u.isLoaded || u.$ghost) &&
                                    ((o.canTap = !1),
                                    (o.isSwiping = !1),
                                    (o.isPanning = !1),
                                    (o.isZooming = !0),
                                    n.fancybox.stop(o.$content),
                                    (o.centerPointStartX = 0.5 * (o.startPoints[0].x + o.startPoints[1].x) - n(t).scrollLeft()),
                                    (o.centerPointStartY = 0.5 * (o.startPoints[0].y + o.startPoints[1].y) - n(t).scrollTop()),
                                    (o.percentageOfImageAtPinchPointX = (o.centerPointStartX - o.contentStartPos.left) / o.contentStartPos.width),
                                    (o.percentageOfImageAtPinchPointY = (o.centerPointStartY - o.contentStartPos.top) / o.contentStartPos.height),
                                    (o.startDistanceBetweenFingers = r(o.startPoints[0], o.startPoints[1])))));
                }
            }),
            (c.prototype.onscroll = function (t) {
                (this.isScrolling = !0), e.removeEventListener("scroll", this.onscroll, !0);
            }),
            (c.prototype.ontouchmove = function (t) {
                var e = this;
                void 0 === t.originalEvent.buttons || 0 !== t.originalEvent.buttons
                    ? e.isScrolling
                        ? (e.canTap = !1)
                        : ((e.newPoints = s(t)),
                          (e.opts || e.canPan) &&
                              e.newPoints.length &&
                              e.newPoints.length &&
                              ((e.isSwiping && !0 === e.isSwiping) || t.preventDefault(),
                              (e.distanceX = r(e.newPoints[0], e.startPoints[0], "x")),
                              (e.distanceY = r(e.newPoints[0], e.startPoints[0], "y")),
                              (e.distance = r(e.newPoints[0], e.startPoints[0])),
                              e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom())))
                    : e.ontouchend(t);
            }),
            (c.prototype.onSwipe = function (e) {
                var s,
                    r = this,
                    a = r.instance,
                    l = r.isSwiping,
                    c = r.sliderStartPos.left || 0;
                if (!0 !== l)
                    "x" == l &&
                        (r.distanceX > 0 && (r.instance.group.length < 2 || (0 === r.instance.current.index && !r.instance.current.opts.loop))
                            ? (c += Math.pow(r.distanceX, 0.8))
                            : r.distanceX < 0 && (r.instance.group.length < 2 || (r.instance.current.index === r.instance.group.length - 1 && !r.instance.current.opts.loop))
                            ? (c -= Math.pow(-r.distanceX, 0.8))
                            : (c += r.distanceX)),
                        (r.sliderLastPos = { top: "x" == l ? 0 : r.sliderStartPos.top + r.distanceY, left: c }),
                        r.requestId && (o(r.requestId), (r.requestId = null)),
                        (r.requestId = i(function () {
                            r.sliderLastPos &&
                                (n.each(r.instance.slides, function (t, e) {
                                    var i = e.pos - r.instance.currPos;
                                    n.fancybox.setTranslate(e.$slide, { top: r.sliderLastPos.top, left: r.sliderLastPos.left + i * r.canvasWidth + i * e.opts.gutter });
                                }),
                                r.$container.addClass("fancybox-is-sliding"));
                        }));
                else if (Math.abs(r.distance) > 10) {
                    if (
                        ((r.canTap = !1),
                        a.group.length < 2 && r.opts.vertical
                            ? (r.isSwiping = "y")
                            : a.isDragging || !1 === r.opts.vertical || ("auto" === r.opts.vertical && n(t).width() > 800)
                            ? (r.isSwiping = "x")
                            : ((s = Math.abs((180 * Math.atan2(r.distanceY, r.distanceX)) / Math.PI)), (r.isSwiping = s > 45 && s < 135 ? "y" : "x")),
                        "y" === r.isSwiping && n.fancybox.isMobile && r.isScrollable)
                    )
                        return void (r.isScrolling = !0);
                    (a.isDragging = r.isSwiping),
                        (r.startPoints = r.newPoints),
                        n.each(a.slides, function (t, e) {
                            var i, o;
                            n.fancybox.stop(e.$slide),
                                (i = n.fancybox.getTranslate(e.$slide)),
                                (o = n.fancybox.getTranslate(a.$refs.stage)),
                                e.$slide
                                    .css({ transform: "", opacity: "", "transition-duration": "" })
                                    .removeClass("fancybox-animated")
                                    .removeClass(function (t, e) {
                                        return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                                    }),
                                e.pos === a.current.pos && ((r.sliderStartPos.top = i.top - o.top), (r.sliderStartPos.left = i.left - o.left)),
                                n.fancybox.setTranslate(e.$slide, { top: i.top - o.top, left: i.left - o.left });
                        }),
                        a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop();
                }
            }),
            (c.prototype.onPan = function () {
                var t = this;
                r(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5)
                    ? (t.startPoints = t.newPoints)
                    : ((t.canTap = !1),
                      (t.contentLastPos = t.limitMovement()),
                      t.requestId && o(t.requestId),
                      (t.requestId = i(function () {
                          n.fancybox.setTranslate(t.$content, t.contentLastPos);
                      })));
            }),
            (c.prototype.limitMovement = function () {
                var t,
                    e,
                    n,
                    i,
                    o,
                    s,
                    r = this,
                    a = r.canvasWidth,
                    l = r.canvasHeight,
                    c = r.distanceX,
                    h = r.distanceY,
                    u = r.contentStartPos,
                    d = u.left,
                    f = u.top,
                    p = u.width,
                    g = u.height;
                return (
                    (o = p > a ? d + c : d),
                    (s = f + h),
                    (t = Math.max(0, 0.5 * a - 0.5 * p)),
                    (e = Math.max(0, 0.5 * l - 0.5 * g)),
                    (n = Math.min(a - p, 0.5 * a - 0.5 * p)),
                    (i = Math.min(l - g, 0.5 * l - 0.5 * g)),
                    c > 0 && o > t && (o = t - 1 + Math.pow(-t + d + c, 0.8) || 0),
                    c < 0 && o < n && (o = n + 1 - Math.pow(n - d - c, 0.8) || 0),
                    h > 0 && s > e && (s = e - 1 + Math.pow(-e + f + h, 0.8) || 0),
                    h < 0 && s < i && (s = i + 1 - Math.pow(i - f - h, 0.8) || 0),
                    { top: s, left: o }
                );
            }),
            (c.prototype.limitPosition = function (t, e, n, i) {
                var o = this.canvasWidth,
                    s = this.canvasHeight;
                return (t = n > o ? ((t = t > 0 ? 0 : t) < o - n ? o - n : t) : Math.max(0, o / 2 - n / 2)), { top: (e = i > s ? ((e = e > 0 ? 0 : e) < s - i ? s - i : e) : Math.max(0, s / 2 - i / 2)), left: t };
            }),
            (c.prototype.onZoom = function () {
                var e = this,
                    s = e.contentStartPos,
                    a = s.width,
                    l = s.height,
                    c = s.left,
                    h = s.top,
                    u = r(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
                    d = Math.floor(a * u),
                    f = Math.floor(l * u),
                    p = (a - d) * e.percentageOfImageAtPinchPointX,
                    g = (l - f) * e.percentageOfImageAtPinchPointY,
                    m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
                    b = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
                    x = m - e.centerPointStartX,
                    y = { top: h + (g + (b - e.centerPointStartY)), left: c + (p + x), scaleX: u, scaleY: u };
                (e.canTap = !1),
                    (e.newWidth = d),
                    (e.newHeight = f),
                    (e.contentLastPos = y),
                    e.requestId && o(e.requestId),
                    (e.requestId = i(function () {
                        n.fancybox.setTranslate(e.$content, e.contentLastPos);
                    }));
            }),
            (c.prototype.ontouchend = function (t) {
                var i = this,
                    r = i.isSwiping,
                    a = i.isPanning,
                    l = i.isZooming,
                    c = i.isScrolling;
                if (
                    ((i.endPoints = s(t)),
                    (i.dMs = Math.max(new Date().getTime() - i.startTime, 1)),
                    i.$container.removeClass("fancybox-is-grabbing"),
                    n(e).off(".fb.touch"),
                    e.removeEventListener("scroll", i.onscroll, !0),
                    i.requestId && (o(i.requestId), (i.requestId = null)),
                    (i.isSwiping = !1),
                    (i.isPanning = !1),
                    (i.isZooming = !1),
                    (i.isScrolling = !1),
                    (i.instance.isDragging = !1),
                    i.canTap)
                )
                    return i.onTap(t);
                (i.speed = 100), (i.velocityX = (i.distanceX / i.dMs) * 0.5), (i.velocityY = (i.distanceY / i.dMs) * 0.5), a ? i.endPanning() : l ? i.endZooming() : i.endSwiping(r, c);
            }),
            (c.prototype.endSwiping = function (t, e) {
                var i = this,
                    o = !1,
                    s = i.instance.group.length,
                    r = Math.abs(i.distanceX),
                    a = "x" == t && s > 1 && ((i.dMs > 130 && r > 10) || r > 50);
                (i.sliderLastPos = null),
                    "y" == t && !e && Math.abs(i.distanceY) > 50
                        ? (n.fancybox.animate(i.instance.current.$slide, { top: i.sliderStartPos.top + i.distanceY + 150 * i.velocityY, opacity: 0 }, 200), (o = i.instance.close(!0, 250)))
                        : a && i.distanceX > 0
                        ? (o = i.instance.previous(300))
                        : a && i.distanceX < 0 && (o = i.instance.next(300)),
                    !1 !== o || ("x" != t && "y" != t) || i.instance.centerSlide(200),
                    i.$container.removeClass("fancybox-is-sliding");
            }),
            (c.prototype.endPanning = function () {
                var t,
                    e,
                    i,
                    o = this;
                o.contentLastPos &&
                    (!1 === o.opts.momentum || o.dMs > 350 ? ((t = o.contentLastPos.left), (e = o.contentLastPos.top)) : ((t = o.contentLastPos.left + 500 * o.velocityX), (e = o.contentLastPos.top + 500 * o.velocityY)),
                    ((i = o.limitPosition(t, e, o.contentStartPos.width, o.contentStartPos.height)).width = o.contentStartPos.width),
                    (i.height = o.contentStartPos.height),
                    n.fancybox.animate(o.$content, i, 366));
            }),
            (c.prototype.endZooming = function () {
                var t,
                    e,
                    i,
                    o,
                    s = this,
                    r = s.instance.current,
                    a = s.newWidth,
                    l = s.newHeight;
                s.contentLastPos &&
                    ((t = s.contentLastPos.left),
                    (o = { top: (e = s.contentLastPos.top), left: t, width: a, height: l, scaleX: 1, scaleY: 1 }),
                    n.fancybox.setTranslate(s.$content, o),
                    a < s.canvasWidth && l < s.canvasHeight
                        ? s.instance.scaleToFit(150)
                        : a > r.width || l > r.height
                        ? s.instance.scaleToActual(s.centerPointStartX, s.centerPointStartY, 150)
                        : ((i = s.limitPosition(t, e, a, l)), n.fancybox.animate(s.$content, i, 150)));
            }),
            (c.prototype.onTap = function (e) {
                var i,
                    o = this,
                    r = n(e.target),
                    a = o.instance,
                    l = a.current,
                    c = (e && s(e)) || o.startPoints,
                    h = c[0] ? c[0].x - n(t).scrollLeft() - o.stagePos.left : 0,
                    u = c[0] ? c[0].y - n(t).scrollTop() - o.stagePos.top : 0,
                    d = function (t) {
                        var i = l.opts[t];
                        if ((n.isFunction(i) && (i = i.apply(a, [l, e])), i))
                            switch (i) {
                                case "close":
                                    a.close(o.startEvent);
                                    break;
                                case "toggleControls":
                                    a.toggleControls();
                                    break;
                                case "next":
                                    a.next();
                                    break;
                                case "nextOrClose":
                                    a.group.length > 1 ? a.next() : a.close(o.startEvent);
                                    break;
                                case "zoom":
                                    "image" == l.type && (l.isLoaded || l.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(h, u) : a.group.length < 2 && a.close(o.startEvent));
                            }
                    };
                if ((!e.originalEvent || 2 != e.originalEvent.button) && (r.is("img") || !(h > r[0].clientWidth + r.offset().left))) {
                    if (r.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) i = "Outside";
                    else if (r.is(".fancybox-slide")) i = "Slide";
                    else {
                        if (!a.current.$content || !a.current.$content.find(r).addBack().filter(r).length) return;
                        i = "Content";
                    }
                    if (o.tapped) {
                        if ((clearTimeout(o.tapped), (o.tapped = null), Math.abs(h - o.tapX) > 50 || Math.abs(u - o.tapY) > 50)) return this;
                        d("dblclick" + i);
                    } else
                        (o.tapX = h),
                            (o.tapY = u),
                            l.opts["dblclick" + i] && l.opts["dblclick" + i] !== l.opts["click" + i]
                                ? (o.tapped = setTimeout(function () {
                                      (o.tapped = null), a.isAnimating || d("click" + i);
                                  }, 500))
                                : d("click" + i);
                    return this;
                }
            }),
            n(e)
                .on("onActivate.fb", function (t, e) {
                    e && !e.Guestures && (e.Guestures = new c(e));
                })
                .on("beforeClose.fb", function (t, e) {
                    e && e.Guestures && e.Guestures.destroy();
                });
    })(window, document, jQuery),
    (function (t, e) {
        "use strict";
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                slideShow:
                    '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
            },
            slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
        });
        var n = function (t) {
            (this.instance = t), this.init();
        };
        e.extend(n.prototype, {
            timer: null,
            isActive: !1,
            $button: null,
            init: function () {
                var t = this,
                    n = t.instance,
                    i = n.group[n.currIndex].opts.slideShow;
                (t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                    t.toggle();
                })),
                    n.group.length < 2 || !i ? t.$button.hide() : i.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner));
            },
            set: function (t) {
                var n = this,
                    i = n.instance,
                    o = i.current;
                o && (!0 === t || o.opts.loop || i.currIndex < i.group.length - 1)
                    ? n.isActive &&
                      "video" !== o.contentType &&
                      (n.$progress && e.fancybox.animate(n.$progress.show(), { scaleX: 1 }, o.opts.slideShow.speed),
                      (n.timer = setTimeout(function () {
                          i.current.opts.loop || i.current.index != i.group.length - 1 ? i.next() : i.jumpTo(0);
                      }, o.opts.slideShow.speed)))
                    : (n.stop(), (i.idleSecondsCounter = 0), i.showControls());
            },
            clear: function () {
                var t = this;
                clearTimeout(t.timer), (t.timer = null), t.$progress && t.$progress.removeAttr("style").hide();
            },
            start: function () {
                var t = this,
                    e = t.instance.current;
                e &&
                    (t.$button
                        .attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP)
                        .removeClass("fancybox-button--play")
                        .addClass("fancybox-button--pause"),
                    (t.isActive = !0),
                    e.isComplete && t.set(!0),
                    t.instance.trigger("onSlideShowChange", !0));
            },
            stop: function () {
                var t = this,
                    e = t.instance.current;
                t.clear(),
                    t.$button
                        .attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START)
                        .removeClass("fancybox-button--pause")
                        .addClass("fancybox-button--play"),
                    (t.isActive = !1),
                    t.instance.trigger("onSlideShowChange", !1),
                    t.$progress && t.$progress.removeAttr("style").hide();
            },
            toggle: function () {
                var t = this;
                t.isActive ? t.stop() : t.start();
            },
        }),
            e(t).on({
                "onInit.fb": function (t, e) {
                    e && !e.SlideShow && (e.SlideShow = new n(e));
                },
                "beforeShow.fb": function (t, e, n, i) {
                    var o = e && e.SlideShow;
                    i ? o && n.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear();
                },
                "afterShow.fb": function (t, e, n) {
                    var i = e && e.SlideShow;
                    i && i.isActive && i.set();
                },
                "afterKeydown.fb": function (n, i, o, s, r) {
                    var a = i && i.SlideShow;
                    !a || !o.opts.slideShow || (80 !== r && 32 !== r) || e(t.activeElement).is("button,a,input") || (s.preventDefault(), a.toggle());
                },
                "beforeClose.fb onDeactivate.fb": function (t, e) {
                    var n = e && e.SlideShow;
                    n && n.stop();
                },
            }),
            e(t).on("visibilitychange", function () {
                var n = e.fancybox.getInstance(),
                    i = n && n.SlideShow;
                i && i.isActive && (t.hidden ? i.clear() : i.set());
            });
    })(document, jQuery),
    (function (t, e) {
        "use strict";
        var n = (function () {
            for (
                var e = [
                        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"],
                    ],
                    n = {},
                    i = 0;
                i < e.length;
                i++
            ) {
                var o = e[i];
                if (o && o[1] in t) {
                    for (var s = 0; s < o.length; s++) n[e[0][s]] = o[s];
                    return n;
                }
            }
            return !1;
        })();
        if (n) {
            var i = {
                request: function (e) {
                    (e = e || t.documentElement)[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
                },
                exit: function () {
                    t[n.exitFullscreen]();
                },
                toggle: function (e) {
                    (e = e || t.documentElement), this.isFullscreen() ? this.exit() : this.request(e);
                },
                isFullscreen: function () {
                    return Boolean(t[n.fullscreenElement]);
                },
                enabled: function () {
                    return Boolean(t[n.fullscreenEnabled]);
                },
            };
            e.extend(!0, e.fancybox.defaults, {
                btnTpl: {
                    fullScreen:
                        '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
                },
                fullScreen: { autoStart: !1 },
            }),
                e(t).on(n.fullscreenchange, function () {
                    var t = i.isFullscreen(),
                        n = e.fancybox.getInstance();
                    n &&
                        (n.current && "image" === n.current.type && n.isAnimating && ((n.isAnimating = !1), n.update(!0, !0, 0), n.isComplete || n.complete()),
                        n.trigger("onFullscreenChange", t),
                        n.$refs.container.toggleClass("fancybox-is-fullscreen", t),
                        n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t));
                });
        }
        e(t).on({
            "onInit.fb": function (t, e) {
                n
                    ? e && e.group[e.currIndex].opts.fullScreen
                        ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
                              t.stopPropagation(), t.preventDefault(), i.toggle();
                          }),
                          e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && i.request(),
                          (e.FullScreen = i))
                        : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
                    : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
            },
            "afterKeydown.fb": function (t, e, n, i, o) {
                e && e.FullScreen && 70 === o && (i.preventDefault(), e.FullScreen.toggle());
            },
            "beforeClose.fb": function (t, e) {
                e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && i.exit();
            },
        });
    })(document, jQuery),
    (function (t, e) {
        "use strict";
        var n = "fancybox-thumbs",
            i = n + "-active";
        e.fancybox.defaults = e.extend(
            !0,
            {
                btnTpl: {
                    thumbs:
                        '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
                },
                thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" },
            },
            e.fancybox.defaults
        );
        var o = function (t) {
            this.init(t);
        };
        e.extend(o.prototype, {
            $button: null,
            $grid: null,
            $list: null,
            isVisible: !1,
            isActive: !1,
            init: function (t) {
                var e = this,
                    n = t.group,
                    i = 0;
                (e.instance = t), (e.opts = n[t.currIndex].opts.thumbs), (t.Thumbs = e), (e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"));
                for (var o = 0, s = n.length; o < s && (n[o].thumb && i++, !(i > 1)); o++);
                i > 1 && e.opts
                    ? (e.$button.removeAttr("style").on("click", function () {
                          e.toggle();
                      }),
                      (e.isActive = !0))
                    : e.$button.hide();
            },
            create: function () {
                var t,
                    i = this,
                    o = i.instance,
                    s = i.opts.parentEl,
                    r = [];
                i.$grid ||
                    ((i.$grid = e('<div class="' + n + " " + n + "-" + i.opts.axis + '"></div>').appendTo(o.$refs.container.find(s).addBack().filter(s))),
                    i.$grid.on("click", "a", function () {
                        o.jumpTo(e(this).attr("data-index"));
                    })),
                    i.$list || (i.$list = e('<div class="' + n + '__list">').appendTo(i.$grid)),
                    e.each(o.group, function (e, n) {
                        (t = n.thumb) || "image" !== n.type || (t = n.src),
                            r.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
                    }),
                    (i.$list[0].innerHTML = r.join("")),
                    "x" === i.opts.axis && i.$list.width(parseInt(i.$grid.css("padding-right"), 10) + o.group.length * i.$list.children().eq(0).outerWidth(!0));
            },
            focus: function (t) {
                var e,
                    n,
                    o = this,
                    s = o.$list,
                    r = o.$grid;
                o.instance.current &&
                    ((n = (e = s
                        .children()
                        .removeClass(i)
                        .filter('[data-index="' + o.instance.current.index + '"]')
                        .addClass(i)).position()),
                    "y" === o.opts.axis && (n.top < 0 || n.top > s.height() - e.outerHeight())
                        ? s.stop().animate({ scrollTop: s.scrollTop() + n.top }, t)
                        : "x" === o.opts.axis && (n.left < r.scrollLeft() || n.left > r.scrollLeft() + (r.width() - e.outerWidth())) && s.parent().stop().animate({ scrollLeft: n.left }, t));
            },
            update: function () {
                var t = this;
                t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible),
                    t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"),
                    t.instance.update();
            },
            hide: function () {
                (this.isVisible = !1), this.update();
            },
            show: function () {
                (this.isVisible = !0), this.update();
            },
            toggle: function () {
                (this.isVisible = !this.isVisible), this.update();
            },
        }),
            e(t).on({
                "onInit.fb": function (t, e) {
                    var n;
                    e && !e.Thumbs && (n = new o(e)).isActive && !0 === n.opts.autoStart && n.show();
                },
                "beforeShow.fb": function (t, e, n, i) {
                    var o = e && e.Thumbs;
                    o && o.isVisible && o.focus(i ? 0 : 250);
                },
                "afterKeydown.fb": function (t, e, n, i, o) {
                    var s = e && e.Thumbs;
                    s && s.isActive && 71 === o && (i.preventDefault(), s.toggle());
                },
                "beforeClose.fb": function (t, e) {
                    var n = e && e.Thumbs;
                    n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
                },
            });
    })(document, jQuery),
    (function (t, e) {
        "use strict";
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                share:
                    '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
            },
            share: {
                url: function (t, e) {
                    return (!t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src)) || window.location;
                },
                tpl:
                    '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
            },
        }),
            e(t).on("click", "[data-fancybox-share]", function () {
                var t,
                    n,
                    i,
                    o,
                    s = e.fancybox.getInstance(),
                    r = s.current || null;
                r &&
                    ("function" === e.type(r.opts.share.url) && (t = r.opts.share.url.apply(r, [s, r])),
                    (n = r.opts.share.tpl
                        .replace(/\{\{media\}\}/g, "image" === r.type ? encodeURIComponent(r.src) : "")
                        .replace(/\{\{url\}\}/g, encodeURIComponent(t))
                        .replace(
                            /\{\{url_raw\}\}/g,
                            ((i = t),
                            (o = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" }),
                            String(i).replace(/[&<>"'`=\/]/g, function (t) {
                                return o[t];
                            }))
                        )
                        .replace(/\{\{descr\}\}/g, s.$caption ? encodeURIComponent(s.$caption.text()) : "")),
                    e.fancybox.open({
                        src: s.translate(s, n),
                        type: "html",
                        opts: {
                            touch: !1,
                            animationEffect: !1,
                            afterLoad: function (t, e) {
                                s.$refs.container.one("beforeClose.fb", function () {
                                    t.close(null, 0);
                                }),
                                    e.$content.find(".fancybox-share__button").click(function () {
                                        return window.open(this.href, "Share", "width=550, height=450"), !1;
                                    });
                            },
                            mobile: { autoFocus: !1 },
                        },
                    }));
            });
    })(document, jQuery),
    (function (t, e, n) {
        "use strict";
        function i() {
            var e = t.location.hash.substr(1),
                n = e.split("-"),
                i = (n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) && parseInt(n.pop(-1), 10)) || 1;
            return { hash: e, index: i < 1 ? 1 : i, gallery: n.join("-") };
        }
        function o(t) {
            "" !== t.gallery &&
                n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']")
                    .eq(t.index - 1)
                    .focus()
                    .trigger("click.fb-start");
        }
        function s(t) {
            var e, n;
            return !!t && "" !== (n = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n;
        }
        n.escapeSelector ||
            (n.escapeSelector = function (t) {
                return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
                    return e ? ("\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " ") : "\\" + t;
                });
            }),
            n(function () {
                !1 !== n.fancybox.defaults.hash &&
                    (n(e).on({
                        "onInit.fb": function (t, e) {
                            var n, o;
                            !1 !== e.group[e.currIndex].opts.hash && ((n = i()), (o = s(e)) && n.gallery && o == n.gallery && (e.currIndex = n.index - 1));
                        },
                        "beforeShow.fb": function (n, i, o, r) {
                            var a;
                            o &&
                                !1 !== o.opts.hash &&
                                (a = s(i)) &&
                                ((i.currentHash = a + (i.group.length > 1 ? "-" + (o.index + 1) : "")),
                                t.location.hash !== "#" + i.currentHash &&
                                    (r && !i.origHash && (i.origHash = t.location.hash),
                                    i.hashTimer && clearTimeout(i.hashTimer),
                                    (i.hashTimer = setTimeout(function () {
                                        "replaceState" in t.history
                                            ? (t.history[r ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + i.currentHash), r && (i.hasCreatedHistory = !0))
                                            : (t.location.hash = i.currentHash),
                                            (i.hashTimer = null);
                                    }, 300))));
                        },
                        "beforeClose.fb": function (n, i, o) {
                            o &&
                                !1 !== o.opts.hash &&
                                (clearTimeout(i.hashTimer),
                                i.currentHash && i.hasCreatedHistory
                                    ? t.history.back()
                                    : i.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (i.origHash || "")) : (t.location.hash = i.origHash)),
                                (i.currentHash = null));
                        },
                    }),
                    n(t).on("hashchange.fb", function () {
                        var t = i(),
                            e = null;
                        n.each(n(".fancybox-container").get().reverse(), function (t, i) {
                            var o = n(i).data("FancyBox");
                            if (o && o.currentHash) return (e = o), !1;
                        }),
                            e ? e.currentHash === t.gallery + "-" + t.index || (1 === t.index && e.currentHash == t.gallery) || ((e.currentHash = null), e.close()) : "" !== t.gallery && o(t);
                    }),
                    setTimeout(function () {
                        n.fancybox.getInstance() || o(i());
                    }, 50));
            });
    })(window, document, jQuery),
    (function (t, e) {
        "use strict";
        var n = new Date().getTime();
        e(t).on({
            "onInit.fb": function (t, e, i) {
                e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
                    var i = e.current,
                        o = new Date().getTime();
                    e.group.length < 2 ||
                        !1 === i.opts.wheel ||
                        ("auto" === i.opts.wheel && "image" !== i.type) ||
                        (t.preventDefault(),
                        t.stopPropagation(),
                        i.$slide.hasClass("fancybox-animated") || ((t = t.originalEvent || t), o - n < 250 || ((n = o), e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())));
                });
            },
        });
    })(document, jQuery),
    $(document).ready(function () {
        $(".js-sidebar-trigger").on("click", function () {
            const t = $(this),
                e = $(".wrapper"),
                n = $(".js-sidebar"),
                i = $(".js-main");
            t.toggleClass("active"), e.toggleClass("sidebar-open"), n.toggleClass("active"), i.toggleClass("active");
        }),
            $(".js-block-trigger").on("click", function () {
                const t = $(this),
                    e = t.closest(".block").find(".block-content");
                t.toggleClass("active"), e.slideToggle(300);
            }),
            $(".js-sidebar-link").on("click", function () {
                $(this).closest(".sidebar-nav-item");
            }),
            $(".js-account").on("click", function () {
                const t = $(this),
                    e = $(".js-action-content");
                t.toggleClass("active"), e.toggleClass("active").slideToggle(300);
            }),
            $(".js-tab-title").on("click", function () {
                const t = $(this),
                    e = t.attr("data-id");
                    console.log(e);
                    $.ajax({
                        type: 'GET',
                        async: true,
                        url: '/ajax',
                        data: {id: e},
                        success: function(data) {
                            console.log(data);
                            var wallet = '';
                            var nft_html = '';
                            for (nft in data.nft){
                                nft_html +=`<div class="table-item">
                                                <div class="table-item-head">
                                                    <div class="table-item__icon table-item__icon-up"></div>
                                                    <div class="table-item-currency">
                                                        <div class="table-item__logo-nft">
                                                            <a href="` + data.nft[nft].token + `" target="_blank">
                                                                <img src="` + data.nft[nft].image + `"alt="Item" id='nft_img'>
                                                            </a>
                                                        </div>
                                                    <div class="table-item__title">` + data.nft[nft].name + `</div>
                                                </div>
                                            </div>
                                                <div class="table-item-body">
                                                    <div class="table-main">
                                                        <div class="table-main-top table-item__part row-reverse">
                                                            <div class="value">` + data.nft[nft].description + `</div>
                                                        </div>
                                                    </div>
                                                <div class="table-item__img"></div>
                                                </div>
                                            </div>`
                            }
                            for (transaction in data.wallet) {
                                console.log(transaction);
                                if (data.wallet[transaction].from && data.wallet[transaction].cryptocurrency == 'ETH'){
                                    wallet += `<div class="table-item">
                                                <div class="table-item-head">
                                                    <div class="table-item__icon table-item__icon-up">
                                                        <span class="icon icon-circle-down"></span>
                                                    </div>
                                                    <div class="table-item-currency">
                                                        <div class="table-item__logo">
                                                            <img src="static/main/img/ETH.png" alt="Item">
                                                        </div>
                                                        <div class="table-item__title">
                                                            Ethereum
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="table-item-body">
                                                    <div class="table-main">
                                                        <div class="table-main-top table-item__part row-reverse">
                                                            <div class="value">` + data.wallet[transaction].amount_dollars_eth + `</div>
                                                            <div class="currency">$</div>
                                                        </div>
                                                        <div class="table-main-bottom table-item__part">
                                                            <div class="value">` + data.wallet[transaction].amount + `</div>
                                                            <div class="currency">ETH</div>
                                                    </div>
                                                </div>
                                                <div class="table-info">
                                                    <div class="destination">from:</div>
                                                    <div class="person">`+ data.wallet[transaction].from + `</div>`
                                } else if (data.wallet[transaction].from && data.wallet[transaction].cryptocurrency == 'BTC'){
                                    wallet += `<div class="table-item">
                                                <div class="table-item-head">
                                                    <div class="table-item__icon table-item__icon-up">
                                                        <span class="icon icon-circle-down"></span>
                                                    </div>
                                                    <div class="table-item-currency">
                                                        <div class="table-item__logo">
                                                            <img src="static/main/img/BTC.jpg" alt="Item">
                                                        </div>
                                                        <div class="table-item__title">
                                                            Bitcoin
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="table-item-body">
                                                    <div class="table-main">
                                                        <div class="table-main-top table-item__part row-reverse">
                                                            <div class="value">` + data.wallet[transaction].amount_dollars_btc + `</div>
                                                            <div class="currency">$</div>
                                                        </div>
                                                        <div class="table-main-bottom table-item__part">
                                                            <div class="value">` + data.wallet[transaction].amount + `</div>
                                                            <div class="currency">` + data.wallet[transaction].cryptocurrency + `</div>
                                                    </div>
                                                </div>
                                                <div class="table-info">
                                                    <div class="destination">from:</div>
                                                    <div class="person"><a data-fancybox href="#modal-details">`+ data.wallet[transaction].from + `</a></div>`
                                } else if (data.wallet[transaction].to && data.wallet[transaction].cryptocurrency == 'BTC') {
                                    wallet += `<div class="table-item">
                                                <div class="table-item-head">
                                                    <div class="table-item__icon table-item__icon-down">
                                                        <span class="icon icon-circle-up"></span>
                                                    </div>
                                                    <div class="table-item-currency">
                                                        <div class="table-item__logo">
                                                            <img src="static/main/img/BTC.jpg" alt="Item">
                                                        </div>
                                                        <div class="table-item__title">
                                                            Bitcoin
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="table-item-body">
                                                    <div class="table-main">
                                                        <div class="table-main-top table-item__part row-reverse">
                                                            <div class="value">` + data.wallet[transaction].amount_dollars_btc + `</div>
                                                            <div class="currency">$</div>
                                                        </div>
                                                        <div class="table-main-bottom table-item__part">
                                                            <div class="value">` + data.wallet[transaction].amount + `</div>
                                                            <div class="currency">` + data.wallet[transaction].cryptocurrency + `</div>
                                                    </div>
                                                </div>
                                                <div class="table-info">
                                                    <div class="destination">to:</div>
                                                    <div class="person"><a data-fancybox href="#modal-details">`+ data.wallet[transaction].to + `</a></div>`
                                }
                                 else {
                                    wallet += `<div class="table-item">
                                                <div class="table-item-head">
                                                    <div class="table-item__icon table-item__icon-down">
                                                        <span class="icon icon-circle-up"></span>
                                                    </div>
                                                    <div class="table-item-currency">
                                                        <div class="table-item__logo">
                                                            <img src="static/main/img/ETH.png" alt="Item">
                                                        </div>
                                                        <div class="table-item__title">
                                                            Ethereum
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="table-item-body">
                                                    <div class="table-main">
                                                        <div class="table-main-top table-item__part row-reverse">
                                                            <div class="value">` + data.wallet[transaction].amount_dollars_eth + `</div>
                                                            <div class="currency">$</div>
                                                        </div>
                                                        <div class="table-main-bottom table-item__part">
                                                            <div class="value">` + data.wallet[transaction].amount + `</div>
                                                            <div class="currency">` + data.wallet[transaction].cryptocurrency + `</div>
                                                    </div>
                                                </div>
                                                <div class="table-info">
                                                    <div class="destination">to:</div>
                                                    <div class="person">`+ data.wallet[transaction].to + `</div>`
                                }
                                wallet +=`</div>
                                            </div>
                                            <div class="table-item-footer">
                                                <div class="table-date">
                                                    <div class="date">` + data.wallet[transaction].date + `</div>
                                                    <div class="time">` + data.wallet[transaction].time + `</div>
                                                </div>
                                            </div>
                                            <div class="table-item__img"></div>
                                        </div>`
                            }
                            $("#table").html(wallet);
                            $('#nft_table').html(nft_html);
                        },
                        dataType: 'json',
                    });
                    $(".js-tab-title").removeClass("active"),
                    t.addClass("active"),
                    $(".js-tab-content").removeClass("active"),
                    $(`.js-tab-content[data-id="${e}"]`).addClass("active"),
                    console.log(`.js-tab-content[attr-id="${e}"]`);
            });
// Charts for wallets
    });


