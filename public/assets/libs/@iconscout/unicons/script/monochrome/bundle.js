!(function (t) {
  var n = {}
  function e(r) {
    if (n[r]) return n[r].exports
    var o = (n[r] = { i: r, l: !1, exports: {} })
    return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports
  }
  ;(e.m = t),
    (e.c = n),
    (e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r })
    }),
    (e.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (e.t = function (t, n) {
      if ((1 & n && (t = e(t)), 8 & n)) return t
      if (4 & n && 'object' == typeof t && t && t.__esModule) return t
      var r = Object.create(null)
      if (
        (e.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
        2 & n && 'string' != typeof t)
      )
        for (var o in t)
          e.d(
            r,
            o,
            function (n) {
              return t[n]
            }.bind(null, o),
          )
      return r
    }),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default
            }
          : function () {
              return t
            }
      return e.d(n, 'a', n), n
    }),
    (e.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n)
    }),
    (e.p = 'script/monochrome/'),
    e((e.s = 0))
})([
  function (t, n, e) {
    e(1), (t.exports = e(2))
  },
  function (t, n, e) {
    var r = (function (t) {
      'use strict'
      var n,
        e = Object.prototype,
        r = e.hasOwnProperty,
        o = 'function' == typeof Symbol ? Symbol : {},
        i = o.iterator || '@@iterator',
        a = o.asyncIterator || '@@asyncIterator',
        c = o.toStringTag || '@@toStringTag'
      function u(t, n, e, r) {
        var o = n && n.prototype instanceof p ? n : p,
          i = Object.create(o.prototype),
          a = new k(r || [])
        return (
          (i._invoke = (function (t, n, e) {
            var r = l
            return function (o, i) {
              if (r === h) throw new Error('Generator is already running')
              if (r === m) {
                if ('throw' === o) throw i
                return S()
              }
              for (e.method = o, e.arg = i; ; ) {
                var a = e.delegate
                if (a) {
                  var c = O(a, e)
                  if (c) {
                    if (c === d) continue
                    return c
                  }
                }
                if ('next' === e.method) e.sent = e._sent = e.arg
                else if ('throw' === e.method) {
                  if (r === l) throw ((r = m), e.arg)
                  e.dispatchException(e.arg)
                } else 'return' === e.method && e.abrupt('return', e.arg)
                r = h
                var u = s(t, n, e)
                if ('normal' === u.type) {
                  if (((r = e.done ? m : f), u.arg === d)) continue
                  return { value: u.arg, done: e.done }
                }
                'throw' === u.type && ((r = m), (e.method = 'throw'), (e.arg = u.arg))
              }
            }
          })(t, e, a)),
          i
        )
      }
      function s(t, n, e) {
        try {
          return { type: 'normal', arg: t.call(n, e) }
        } catch (t) {
          return { type: 'throw', arg: t }
        }
      }
      t.wrap = u
      var l = 'suspendedStart',
        f = 'suspendedYield',
        h = 'executing',
        m = 'completed',
        d = {}
      function p() {}
      function y() {}
      function v() {}
      var g = {}
      g[i] = function () {
        return this
      }
      var w = Object.getPrototypeOf,
        L = w && w(w(T([])))
      L && L !== e && r.call(L, i) && (g = L)
      var E = (v.prototype = p.prototype = Object.create(g))
      function b(t) {
        ;['next', 'throw', 'return'].forEach(function (n) {
          t[n] = function (t) {
            return this._invoke(n, t)
          }
        })
      }
      function x(t) {
        var n
        this._invoke = function (e, o) {
          function i() {
            return new Promise(function (n, i) {
              !(function n(e, o, i, a) {
                var c = s(t[e], t, o)
                if ('throw' !== c.type) {
                  var u = c.arg,
                    l = u.value
                  return l && 'object' == typeof l && r.call(l, '__await')
                    ? Promise.resolve(l.__await).then(
                        function (t) {
                          n('next', t, i, a)
                        },
                        function (t) {
                          n('throw', t, i, a)
                        },
                      )
                    : Promise.resolve(l).then(
                        function (t) {
                          ;(u.value = t), i(u)
                        },
                        function (t) {
                          return n('throw', t, i, a)
                        },
                      )
                }
                a(c.arg)
              })(e, o, n, i)
            })
          }
          return (n = n ? n.then(i, i) : i())
        }
      }
      function O(t, e) {
        var r = t.iterator[e.method]
        if (r === n) {
          if (((e.delegate = null), 'throw' === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = 'return'), (e.arg = n), O(t, e), 'throw' === e.method)
            )
              return d
            ;(e.method = 'throw'),
              (e.arg = new TypeError("The iterator does not provide a 'throw' method"))
          }
          return d
        }
        var o = s(r, t.iterator, e.arg)
        if ('throw' === o.type) return (e.method = 'throw'), (e.arg = o.arg), (e.delegate = null), d
        var i = o.arg
        return i
          ? i.done
            ? ((e[t.resultName] = i.value),
              (e.next = t.nextLoc),
              'return' !== e.method && ((e.method = 'next'), (e.arg = n)),
              (e.delegate = null),
              d)
            : i
          : ((e.method = 'throw'),
            (e.arg = new TypeError('iterator result is not an object')),
            (e.delegate = null),
            d)
      }
      function _(t) {
        var n = { tryLoc: t[0] }
        1 in t && (n.catchLoc = t[1]),
          2 in t && ((n.finallyLoc = t[2]), (n.afterLoc = t[3])),
          this.tryEntries.push(n)
      }
      function N(t) {
        var n = t.completion || {}
        ;(n.type = 'normal'), delete n.arg, (t.completion = n)
      }
      function k(t) {
        ;(this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(_, this), this.reset(!0)
      }
      function T(t) {
        if (t) {
          var e = t[i]
          if (e) return e.call(t)
          if ('function' == typeof t.next) return t
          if (!isNaN(t.length)) {
            var o = -1,
              a = function e() {
                for (; ++o < t.length; ) if (r.call(t, o)) return (e.value = t[o]), (e.done = !1), e
                return (e.value = n), (e.done = !0), e
              }
            return (a.next = a)
          }
        }
        return { next: S }
      }
      function S() {
        return { value: n, done: !0 }
      }
      return (
        (y.prototype = E.constructor = v),
        (v.constructor = y),
        (v[c] = y.displayName = 'GeneratorFunction'),
        (t.isGeneratorFunction = function (t) {
          var n = 'function' == typeof t && t.constructor
          return !!n && (n === y || 'GeneratorFunction' === (n.displayName || n.name))
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, v)
              : ((t.__proto__ = v), c in t || (t[c] = 'GeneratorFunction')),
            (t.prototype = Object.create(E)),
            t
          )
        }),
        (t.awrap = function (t) {
          return { __await: t }
        }),
        b(x.prototype),
        (x.prototype[a] = function () {
          return this
        }),
        (t.AsyncIterator = x),
        (t.async = function (n, e, r, o) {
          var i = new x(u(n, e, r, o))
          return t.isGeneratorFunction(e)
            ? i
            : i.next().then(function (t) {
                return t.done ? t.value : i.next()
              })
        }),
        b(E),
        (E[c] = 'Generator'),
        (E[i] = function () {
          return this
        }),
        (E.toString = function () {
          return '[object Generator]'
        }),
        (t.keys = function (t) {
          var n = []
          for (var e in t) n.push(e)
          return (
            n.reverse(),
            function e() {
              for (; n.length; ) {
                var r = n.pop()
                if (r in t) return (e.value = r), (e.done = !1), e
              }
              return (e.done = !0), e
            }
          )
        }),
        (t.values = T),
        (k.prototype = {
          constructor: k,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = n),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = n),
              this.tryEntries.forEach(N),
              !t)
            )
              for (var e in this)
                't' === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n)
          },
          stop: function () {
            this.done = !0
            var t = this.tryEntries[0].completion
            if ('throw' === t.type) throw t.arg
            return this.rval
          },
          dispatchException: function (t) {
            if (this.done) throw t
            var e = this
            function o(r, o) {
              return (
                (c.type = 'throw'),
                (c.arg = t),
                (e.next = r),
                o && ((e.method = 'next'), (e.arg = n)),
                !!o
              )
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var a = this.tryEntries[i],
                c = a.completion
              if ('root' === a.tryLoc) return o('end')
              if (a.tryLoc <= this.prev) {
                var u = r.call(a, 'catchLoc'),
                  s = r.call(a, 'finallyLoc')
                if (u && s) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                } else if (u) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                } else {
                  if (!s) throw new Error('try statement without catch or finally')
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                }
              }
            }
          },
          abrupt: function (t, n) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var o = this.tryEntries[e]
              if (o.tryLoc <= this.prev && r.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                var i = o
                break
              }
            }
            i &&
              ('break' === t || 'continue' === t) &&
              i.tryLoc <= n &&
              n <= i.finallyLoc &&
              (i = null)
            var a = i ? i.completion : {}
            return (
              (a.type = t),
              (a.arg = n),
              i ? ((this.method = 'next'), (this.next = i.finallyLoc), d) : this.complete(a)
            )
          },
          complete: function (t, n) {
            if ('throw' === t.type) throw t.arg
            return (
              'break' === t.type || 'continue' === t.type
                ? (this.next = t.arg)
                : 'return' === t.type
                ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === t.type && n && (this.next = n),
              d
            )
          },
          finish: function (t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var e = this.tryEntries[n]
              if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), N(e), d
            }
          },
          catch: function (t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var e = this.tryEntries[n]
              if (e.tryLoc === t) {
                var r = e.completion
                if ('throw' === r.type) {
                  var o = r.arg
                  N(e)
                }
                return o
              }
            }
            throw new Error('illegal catch attempt')
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: T(t), resultName: e, nextLoc: r }),
              'next' === this.method && (this.arg = n),
              d
            )
          },
        }),
        t
      )
    })(t.exports)
    try {
      regeneratorRuntime = r
    } catch (t) {
      Function('r', 'regeneratorRuntime = r')(r)
    }
  },
  function (t, n, e) {
    var r = 'https://unicons.iconscout.com/'
      .concat('release', '/')
      .concat('v4.0.1', '/svg/monochrome/')
    ;(window.Unicons = window.Unicons || {}), (window.Unicons.DEBUG = window.Unicons.DEBUG || !1)
    var o = function (t) {
        fetch(''.concat(r).concat(t, '.svg'))
          .then(function (t) {
            return t.text()
          })
          .then(function (n) {
            return i(t, n)
          })
      },
      i = function (t, n) {
        for (var e = document.getElementsByClassName(''.concat('uim-').concat(t)); e.length > 0; ) {
          var o = e[0],
            i = document.createElement('span')
          ;(i.innerHTML = n),
            i.classList.add('uim-svg'),
            i.firstChild.setAttribute('width', '1em'),
            (i.style.cssText = o.style.cssText),
            o.classList.contains('uim-white') &&
              ((i.style.mask = 'url('.concat(r).concat(t, '.svg)')),
              (i.style.webkitMask = 'url('.concat(r).concat(t, '.svg)')),
              (i.style.background = 'white')),
            o.replaceWith(i)
        }
      },
      a = function () {
        var t = document.getElementsByClassName('uim'),
          n = []
        window.Unicons.DEBUG && console.log('Replacing '.concat(t.length, ' icons'))
        for (var e = 0; e < t.length; e++) {
          t[e].classList.forEach(function (t) {
            if (t.includes('uim-')) {
              var e = t.toLocaleLowerCase().replace('uim-', '')
              n.includes(e) || (o(e), n.push(e))
            }
          })
        }
      },
      c = function () {
        e(3)('.uim').every(function (t) {
          return (
            (function (t) {
              t.classList.forEach(function (t) {
                t.includes('uim-') && o(t.toLocaleLowerCase().replace('uim-', ''))
              })
            })(t),
            t
          )
        }),
          (window.Unicons.WATCHER = !0),
          window.Unicons.DEBUG && console.log('Monochrome watcher started')
      }
    ;(window.onload = function () {
      a(),
        window.Unicons.WATCHER || c(),
        window.Unicons.DEBUG && console.log('Monochrome initiated')
    }),
      (window.Unicons.refresh = a)
    var u = document.createElement('style')
    ;(u.innerHTML =
      ':root {\n  --uim-primary-opacity: 1;\n  --uim-secondary-opacity: 0.70;\n  --uim-tertiary-opacity: 0.50;\n  --uim-quaternary-opacity: 0.25;\n  --uim-quinary-opacity: 0;\n}\n.uim-svg {\n  display: inline-block;\n  height: 1em;\n  vertical-align: -0.125em;\n  font-size: inherit;\n  fill: var(--uim-color, currentColor);\n}\n.uim-svg svg {\n  display: inline-block;\n}\n.uim-primary {\n  opacity: var(--uim-primary-opacity);\n}\n.uim-secondary {\n  opacity: var(--uim-secondary-opacity);\n}\n.uim-tertiary {\n  opacity: var(--uim-tertiary-opacity);\n}\n.uim-quaternary {\n  opacity: var(--uim-quaternary-opacity);\n}\n.uim-quinary {\n  opacity: var(--uim-quinary-opacity);\n}'),
      document.head.appendChild(u)
  },
  function (t, n, e) {
    var r = (function () {
      'use strict'
      var t = 100,
        n = !1,
        e = 'animationName',
        r = '',
        o = 'Webkit Moz O ms Khtml'.split(' '),
        i = '',
        a = document.createElement('div'),
        c = { strictlyNew: !0, timeout: 20, addImportant: !1 }
      if ((a.style.animationName && (n = !0), !1 === n))
        for (var u = 0; u < o.length; u++)
          if (void 0 !== a.style[o[u] + 'AnimationName']) {
            ;(i = o[u]), (e = i + 'AnimationName'), (r = '-' + i.toLowerCase() + '-'), (n = !0)
            break
          }
      function s(t) {
        return c.strictlyNew && !0 === t.QinsQ
      }
      function l(n, o) {
        var i,
          a = 'insQ_' + t++,
          u = c.addImportant ? ' !important' : '',
          l = function (t) {
            ;(t.animationName !== a && t[e] !== a) || s(t.target) || o(t.target)
          }
        ;((i = document.createElement('style')).innerHTML =
          '@' +
          r +
          'keyframes ' +
          a +
          ' {  from {  outline: 1px solid transparent  } to {  outline: 0px solid transparent }  }\n' +
          n +
          ' { animation-duration: 0.001s' +
          u +
          '; animation-name: ' +
          a +
          u +
          '; ' +
          r +
          'animation-duration: 0.001s' +
          u +
          '; ' +
          r +
          'animation-name: ' +
          a +
          u +
          ';  } '),
          document.head.appendChild(i)
        var f = setTimeout(function () {
          document.addEventListener('animationstart', l, !1),
            document.addEventListener('MSAnimationStart', l, !1),
            document.addEventListener('webkitAnimationStart', l, !1)
        }, c.timeout)
        return {
          destroy: function () {
            clearTimeout(f),
              i && (document.head.removeChild(i), (i = null)),
              document.removeEventListener('animationstart', l),
              document.removeEventListener('MSAnimationStart', l),
              document.removeEventListener('webkitAnimationStart', l)
          },
        }
      }
      function f(t) {
        t.QinsQ = !0
      }
      function h(t) {
        if (t)
          for (f(t), t = t.firstChild; t; t = t.nextSibling)
            void 0 !== t && 1 === t.nodeType && h(t)
      }
      function m(t, n) {
        var e,
          r = [],
          o = function () {
            clearTimeout(e),
              (e = setTimeout(function () {
                r.forEach(h), n(r), (r = [])
              }, 10))
          }
        return l(t, function (t) {
          if (!s(t)) {
            f(t)
            var n = (function t(n) {
              return s(n.parentNode) || 'BODY' === n.nodeName ? n : t(n.parentNode)
            })(t)
            r.indexOf(n) < 0 && r.push(n), o()
          }
        })
      }
      var d = function (t) {
        return (
          !(!n || !t.match(/[^{}]/)) &&
          (c.strictlyNew && h(document.body),
          {
            every: function (n) {
              return l(t, n)
            },
            summary: function (n) {
              return m(t, n)
            },
          })
        )
      }
      return (
        (d.config = function (t) {
          for (var n in t) t.hasOwnProperty(n) && (c[n] = t[n])
        }),
        d
      )
    })()
    void 0 !== t.exports && (t.exports = r)
  },
])
//# sourceMappingURL=bundle.js.map
