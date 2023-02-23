function e() {
  return (e =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t]
        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
      }
      return e
    }).apply(this, arguments)
}
class t {
  constructor() {
    ;(this.figcaptionId = 0), (this.userSettings = null)
  }
  init(e, t, i) {
    this.userSettings = i
    const r = document.createElement('figure'),
      n = document.createElement('figcaption'),
      a = document.createElement('img'),
      s = e.querySelector('img'),
      o = document.createElement('div')
    ;(r.style.opacity = '0'),
      s && (a.alt = s.alt || ''),
      a.setAttribute('src', ''),
      a.setAttribute('data-src', e.href),
      e.hasAttribute('data-srcset') && a.setAttribute('data-srcset', e.getAttribute('data-srcset')),
      r.appendChild(a),
      this.userSettings.captions &&
        ('function' == typeof this.userSettings.captionText
          ? (n.textContent = this.userSettings.captionText(e))
          : 'self' === this.userSettings.captionsSelector &&
            e.getAttribute(this.userSettings.captionAttribute)
          ? (n.textContent = e.getAttribute(this.userSettings.captionAttribute))
          : 'img' === this.userSettings.captionsSelector &&
            s &&
            s.getAttribute(this.userSettings.captionAttribute) &&
            (n.textContent = s.getAttribute(this.userSettings.captionAttribute)),
        n.textContent &&
          ((n.id = `tobii-figcaption-${this.figcaptionId}`),
          r.appendChild(n),
          a.setAttribute('aria-labelledby', n.id),
          ++this.figcaptionId)),
      t.appendChild(r),
      (o.className = 'tobii__loader'),
      o.setAttribute('role', 'progressbar'),
      o.setAttribute('aria-label', this.userSettings.loadingIndicatorLabel),
      t.appendChild(o),
      t.setAttribute('data-type', 'image'),
      t.classList.add('tobii-image')
  }
  onPreload(e) {
    this.onLoad(e)
  }
  onLoad(e) {
    const t = e.querySelector('img')
    if (!t.hasAttribute('data-src')) return
    const i = e.querySelector('figure'),
      r = e.querySelector('.tobii__loader')
    t.addEventListener('load', () => {
      e.removeChild(r), (i.style.opacity = '1')
    }),
      t.addEventListener('error', () => {
        e.removeChild(r), (i.style.opacity = '1')
      }),
      t.setAttribute('src', t.getAttribute('data-src')),
      t.removeAttribute('data-src'),
      t.hasAttribute('data-srcset') && t.setAttribute('srcset', t.getAttribute('data-srcset'))
  }
  onLeave(e) {}
  onCleanup(e) {}
  onReset() {
    this.figcaptionId = 0
  }
}
class i {
  constructor() {
    this.userSettings = null
  }
  init(e, t, i) {
    this.userSettings = i
    const r = e.hasAttribute('data-target') ? e.getAttribute('data-target') : e.getAttribute('href')
    t.setAttribute('data-HREF', r),
      e.getAttribute('data-allow') && t.setAttribute('data-allow', e.getAttribute('data-allow')),
      e.hasAttribute('data-width') &&
        t.setAttribute('data-width', `${e.getAttribute('data-width')}`),
      e.hasAttribute('data-height') &&
        t.setAttribute('data-height', `${e.getAttribute('data-height')}`),
      t.setAttribute('data-type', 'iframe'),
      t.classList.add('tobii-iframe')
  }
  onPreload(e) {}
  onLoad(e) {
    let t = e.querySelector('iframe')
    const i = document.createElement('div')
    if (
      ((i.className = 'tobii__loader'),
      i.setAttribute('role', 'progressbar'),
      i.setAttribute('aria-label', this.userSettings.loadingIndicatorLabel),
      e.appendChild(i),
      null == t)
    ) {
      t = document.createElement('iframe')
      const i = e.getAttribute('data-href')
      t.setAttribute('frameborder', '0'),
        t.setAttribute('src', i),
        t.setAttribute('allowfullscreen', ''),
        i.indexOf('youtube.com') > -1
          ? t.setAttribute(
              'allow',
              'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
            )
          : i.indexOf('vimeo.com') > -1
          ? t.setAttribute('allow', 'autoplay; picture-in-picture')
          : e.hasAttribute('data-allow') && t.setAttribute('allow', e.getAttribute('data-allow')),
        e.getAttribute('data-width') && (t.style.maxWidth = `${e.getAttribute('data-width')}`),
        e.getAttribute('data-height') && (t.style.maxHeight = `${e.getAttribute('data-height')}`),
        (t.style.opacity = '0'),
        e.appendChild(t),
        t.addEventListener('load', () => {
          t.style.opacity = '1'
          const i = e.querySelector('.tobii__loader')
          i && e.removeChild(i)
        }),
        t.addEventListener('error', () => {
          t.style.opacity = '1'
          const i = e.querySelector('.tobii__loader')
          i && e.removeChild(i)
        })
    } else t.setAttribute('src', e.getAttribute('data-href'))
  }
  onLeave(e) {}
  onCleanup(e) {
    const t = e.querySelector('iframe')
    t.setAttribute('src', ''), (t.style.opacity = '0')
  }
  onReset() {}
}
class r {
  constructor() {
    this.userSettings = null
  }
  init(e, t, i) {
    this.userSettings = i
    const r = e.hasAttribute('data-target')
        ? e.getAttribute('data-target')
        : e.getAttribute('href'),
      n = document.querySelector(r).cloneNode(!0)
    if (!n) throw new Error(`Ups, I can't find the target ${r}.`)
    t.appendChild(n), t.setAttribute('data-type', 'html'), t.classList.add('tobii-html')
  }
  onPreload(e) {}
  onLoad(e) {
    const t = e.querySelector('video')
    t &&
      (t.hasAttribute('data-time') &&
        t.readyState > 0 &&
        (t.currentTime = t.getAttribute('data-time')),
      this.userSettings.autoplayVideo && t.play())
  }
  onLeave(e) {
    const t = e.querySelector('video')
    t && (t.paused || t.pause(), t.readyState > 0 && t.setAttribute('data-time', t.currentTime))
  }
  onCleanup(e) {
    const t = e.querySelector('video')
    if (t && t.readyState > 0 && t.readyState < 3 && t.duration !== t.currentTime) {
      const i = t.cloneNode(!0)
      this._removeSources(t), t.load(), t.parentNode.removeChild(t), e.appendChild(i)
    }
  }
  onReset() {}
  _removeSources(e) {
    const t = e.querySelectorAll('src')
    t &&
      t.forEach((e) => {
        e.setAttribute('src', '')
      })
  }
}
class n {
  constructor() {
    ;(this.playerId = 0), (this.PLAYER = []), (this.userSettings = null)
  }
  init(e, t, i) {
    this.userSettings = i
    const r = document.createElement('div')
    t.appendChild(r),
      (this.PLAYER[this.playerId] = new window.YT.Player(r, {
        host: 'https://www.youtube-nocookie.com',
        height: e.getAttribute('data-height') || '360',
        width: e.getAttribute('data-width') || '640',
        videoId: e.getAttribute('data-id'),
        playerVars: { controls: e.getAttribute('data-controls') || 1, rel: 0, playsinline: 1 },
      })),
      t.setAttribute('data-player', this.playerId),
      t.setAttribute('data-type', 'youtube'),
      t.classList.add('tobii-youtube'),
      this.playerId++
  }
  onPreload(e) {}
  onLoad(e) {
    this.userSettings.autoplayVideo && this.PLAYER[e.getAttribute('data-player')].playVideo()
  }
  onLeave(e) {
    1 === this.PLAYER[e.getAttribute('data-player')].getPlayerState() &&
      this.PLAYER[e.getAttribute('data-player')].pauseVideo()
  }
  onCleanup(e) {
    1 === this.PLAYER[e.getAttribute('data-player')].getPlayerState() &&
      this.PLAYER[e.getAttribute('data-player')].pauseVideo()
  }
  onReset() {}
}
function a(s) {
  const o = { image: new t(), html: new r(), iframe: new i(), youtube: new n() },
    d = [
      'a[href]:not([tabindex^="-"]):not([inert])',
      'area[href]:not([tabindex^="-"]):not([inert])',
      'input:not([disabled]):not([inert])',
      'select:not([disabled]):not([inert])',
      'textarea:not([disabled]):not([inert])',
      'button:not([disabled]):not([inert])',
      'iframe:not([tabindex^="-"]):not([inert])',
      'audio:not([tabindex^="-"]):not([inert])',
      'video:not([tabindex^="-"]):not([inert])',
      '[contenteditable]:not([tabindex^="-"]):not([inert])',
      '[tabindex]:not([tabindex^="-"]):not([inert])',
    ]
  let l = {}
  const u = [],
    c = { gallery: [], slider: null, sliderElements: [], elementsLength: 0, currentIndex: 0, x: 0 }
  let b = null,
    p = null,
    h = null,
    m = null,
    g = null,
    y = {},
    v = !1,
    f = !1,
    w = !1,
    A = null,
    E = null,
    L = null,
    x = !1,
    _ = !1,
    I = {},
    S = null,
    C = null
  const T = (e) => {
      if (null === document.querySelector('[data-type="youtube"]') || _) q(e)
      else {
        if (null === document.getElementById('iframe_api')) {
          const e = document.createElement('script'),
            t = document.getElementsByTagName('script')[0]
          ;(e.id = 'iframe_api'),
            (e.src = 'https://www.youtube.com/iframe_api'),
            t.parentNode.insertBefore(e, t)
        }
        ;-1 === u.indexOf(e) && u.push(e),
          (window.onYouTubePlayerAPIReady = () => {
            u.forEach((e) => {
              q(e)
            }),
              (_ = !0)
          })
      }
    },
    P = (e) => (e.hasAttribute('data-group') ? e.getAttribute('data-group') : 'default'),
    q = (e) => {
      if (
        ((S = P(e)),
        Object.prototype.hasOwnProperty.call(I, S) || ((I[S] = JSON.parse(JSON.stringify(c))), N()),
        -1 !== I[S].gallery.indexOf(e))
      )
        throw new Error('Ups, element already added.')
      if (
        (I[S].gallery.push(e),
        I[S].elementsLength++,
        (l.zoom && e.querySelector('img') && 'false' !== e.getAttribute('data-zoom')) ||
          'true' === e.getAttribute('data-zoom'))
      ) {
        const t = document.createElement('div')
        ;(t.className = 'tobii-zoom__icon'),
          (t.innerHTML = l.zoomText),
          e.classList.add('tobii-zoom'),
          e.appendChild(t)
      }
      e.addEventListener('click', G), O(e), ce() && S === C && (de(), le(null))
    },
    Y = (e) => {
      const t = P(e)
      if (-1 === I[t].gallery.indexOf(e))
        throw new Error(`Ups, I can't find a slide for the element ${e}.`)
      {
        const i = I[t].gallery.indexOf(e),
          r = I[t].sliderElements[i]
        if (ce() && t === C && i === I[t].currentIndex) {
          if (1 === I[t].elementsLength)
            throw (X(), new Error("Ups, I've closed. There are no slides more to show."))
          0 === I[t].currentIndex ? M() : R()
        }
        if ((I[t].elementsLength--, l.zoom && e.querySelector('.tobii-zoom__icon'))) {
          const t = e.querySelector('.tobii-zoom__icon')
          t.parentNode.classList.remove('tobii-zoom'), t.parentNode.removeChild(t)
        }
        e.removeEventListener('click', G), r.parentNode.removeChild(r)
      }
    },
    N = () => {
      ;(I[S].slider = document.createElement('div')),
        (I[S].slider.className = 'tobii__slider'),
        I[S].slider.setAttribute('aria-hidden', 'true'),
        b.appendChild(I[S].slider)
    },
    O = (e) => {
      const t = k(e),
        i = document.createElement('div'),
        r = document.createElement('div')
      ;(i.className = 'tobii__slide'),
        (i.style.position = 'absolute'),
        (i.style.left = 100 * I[S].x + '%'),
        i.setAttribute('aria-hidden', 'true'),
        t.init(e, r, l),
        i.appendChild(r),
        I[S].slider.appendChild(i),
        I[S].sliderElements.push(i),
        ++I[S].x
    },
    k = (e) => {
      const t = e.getAttribute('data-type')
      return void 0 !== o[t]
        ? o[t]
        : (e.hasAttribute('data-type') && console.log('Unknown lightbox element type: ' + t),
          o.image)
    },
    U = (e) => {
      if (((C = null !== C ? C : S), ce())) throw new Error("Ups, I'm aleady open.")
      if (!ce() && (e || (e = 0), -1 === e || e >= I[C].elementsLength))
        throw new Error(`Ups, I can't find slide ${e}.`)
      document.documentElement.classList.add('tobii-is-open'),
        document.body.classList.add('tobii-is-open'),
        document.body.classList.add('tobii-is-open-' + C),
        de(),
        l.close || ((m.disabled = !1), m.setAttribute('aria-hidden', 'true')),
        (A = document.activeElement)
      const t = window.location.href
      window.history.pushState({ tobii: 'close' }, 'Image', t),
        (I[C].currentIndex = e),
        j(),
        se(),
        z(I[C].currentIndex),
        I[C].slider.setAttribute('aria-hidden', 'false'),
        b.setAttribute('aria-hidden', 'false'),
        le(null),
        $(I[C].currentIndex + 1),
        $(I[C].currentIndex - 1),
        I[C].slider.classList.add('tobii__slider--animate')
      const i = new window.CustomEvent('open', { detail: { group: C } })
      b.dispatchEvent(i)
    },
    X = () => {
      if (!ce()) throw new Error("Ups, I'm already closed.")
      document.documentElement.classList.remove('tobii-is-open'),
        document.body.classList.remove('tobii-is-open'),
        document.body.classList.remove('tobii-is-open-' + C),
        oe(),
        null !== window.history.state &&
          'close' === window.history.state.tobii &&
          window.history.back(),
        A.focus(),
        D(I[C].currentIndex),
        B(I[C].currentIndex),
        b.setAttribute('aria-hidden', 'true'),
        I[C].slider.setAttribute('aria-hidden', 'true'),
        (I[C].currentIndex = 0),
        I[C].slider.classList.remove('tobii__slider--animate')
      const e = new window.CustomEvent('close', { detail: { group: C } })
      b.dispatchEvent(e)
    },
    $ = (e) => {
      if (void 0 === I[C].sliderElements[e]) return
      const t = I[C].sliderElements[e].querySelector('[data-type]')
      k(t).onPreload(t)
    },
    z = (e) => {
      if (void 0 === I[C].sliderElements[e]) return
      const t = I[C].sliderElements[e].querySelector('[data-type]'),
        i = k(t)
      I[C].sliderElements[e].classList.add('tobii__slide--is-active'),
        I[C].sliderElements[e].setAttribute('aria-hidden', 'false'),
        i.onLoad(t)
    },
    R = () => {
      if (!ce()) throw new Error("Ups, I'm closed.")
      I[C].currentIndex > 0 &&
        (D(I[C].currentIndex),
        z(--I[C].currentIndex),
        le('left'),
        B(I[C].currentIndex + 1),
        $(I[C].currentIndex - 1))
      const e = new window.CustomEvent('previous', { detail: { group: C } })
      b.dispatchEvent(e)
    },
    M = () => {
      if (!ce()) throw new Error("Ups, I'm closed.")
      I[C].currentIndex < I[C].elementsLength - 1 &&
        (D(I[C].currentIndex),
        z(++I[C].currentIndex),
        le('right'),
        B(I[C].currentIndex - 1),
        $(I[C].currentIndex + 1))
      const e = new window.CustomEvent('next', { detail: { group: C } })
      b.dispatchEvent(e)
    },
    H = (e) => {
      if (ce()) throw new Error("Ups, I'm open.")
      if (!e) throw new Error('Ups, no group specified.')
      if (e && !Object.prototype.hasOwnProperty.call(I, e))
        throw new Error(`Ups, I don't have a group called "${e}".`)
      C = e
    },
    D = (e) => {
      if (void 0 === I[C].sliderElements[e]) return
      const t = I[C].sliderElements[e].querySelector('[data-type]'),
        i = k(t)
      I[C].sliderElements[e].classList.remove('tobii__slide--is-active'),
        I[C].sliderElements[e].setAttribute('aria-hidden', 'true'),
        i.onLeave(t)
    },
    B = (e) => {
      if (void 0 === I[C].sliderElements[e]) return
      const t = I[C].sliderElements[e].querySelector('[data-type]')
      k(t).onCleanup(t)
    },
    V = () => {
      ;(C = null !== C ? C : S),
        (E = -I[C].currentIndex * b.offsetWidth),
        (I[C].slider.style.transform = `translate3d(${E}px, 0, 0)`),
        (L = E)
    },
    j = () => {
      y = { startX: 0, endX: 0, startY: 0, endY: 0 }
    },
    W = () => {
      const e = y.endX - y.startX,
        t = y.endY - y.startY,
        i = Math.abs(e),
        r = Math.abs(t)
      e > 0 && i > l.threshold && I[C].currentIndex > 0
        ? R()
        : e < 0 && i > l.threshold && I[C].currentIndex !== I[C].elementsLength - 1
        ? M()
        : t < 0 && r > l.threshold && l.swipeClose
        ? X()
        : V()
    },
    F = () => {
      x ||
        ((x = !0),
        window.requestAnimationFrame(() => {
          V(), (x = !1)
        }))
    },
    G = (e) => {
      e.preventDefault(), (C = P(e.currentTarget)), U(I[C].gallery.indexOf(e.currentTarget))
    },
    J = (e) => {
      e.target === p
        ? R()
        : e.target === h
        ? M()
        : (e.target === m ||
            (!1 === v && !1 === f && e.target.classList.contains('tobii__slide') && l.docClose)) &&
          X(),
        e.stopPropagation()
    },
    K = (e) => {
      const t = Array.prototype.slice
          .call(
            b.querySelectorAll(
              `.tobii__btn:not([disabled]), .tobii__slide--is-active ${d.join(
                ', .tobii__slide--is-active ',
              )}`,
            ),
          )
          .filter((e) => !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)),
        i = t.indexOf(document.activeElement)
      9 === e.keyCode || 'Tab' === e.code
        ? e.shiftKey && 0 === i
          ? (t[t.length - 1].focus(), e.preventDefault())
          : e.shiftKey || i !== t.length - 1 || (t[0].focus(), e.preventDefault())
        : 27 === e.keyCode || 'Escape' === e.code
        ? (e.preventDefault(), X())
        : 37 === e.keyCode || 'ArrowLeft' === e.code
        ? (e.preventDefault(), R())
        : (39 !== e.keyCode && 'ArrowRight' !== e.code) || (e.preventDefault(), M())
    },
    Q = (e) => {
      pe(e.target) ||
        (e.stopPropagation(),
        (v = !1),
        (f = !1),
        (w = !0),
        (y.startX = e.touches[0].pageX),
        (y.startY = e.touches[0].pageY),
        be() && I[C].slider.classList.add('tobii__slider--is-dragging'))
    },
    Z = (e) => {
      e.stopPropagation(), w && ((y.endX = e.touches[0].pageX), (y.endY = e.touches[0].pageY), ae())
    },
    ee = (e) => {
      e.stopPropagation(),
        (w = !1),
        I[C].slider.classList.remove('tobii__slider--is-dragging'),
        y.endX && W(),
        j()
    },
    te = (e) => {
      pe(e.target) ||
        (e.preventDefault(),
        e.stopPropagation(),
        (v = !1),
        (f = !1),
        (w = !0),
        (y.startX = e.pageX),
        (y.startY = e.pageY),
        be() && I[C].slider.classList.add('tobii__slider--is-dragging'))
    },
    ie = (e) => {
      e.preventDefault(), w && ((y.endX = e.pageX), (y.endY = e.pageY), ae())
    },
    re = (e) => {
      e.stopPropagation(),
        (w = !1),
        I[C].slider.classList.remove('tobii__slider--is-dragging'),
        y.endX && W(),
        j()
    },
    ne = () => {
      w = !1
    },
    ae = () => {
      Math.abs(y.startX - y.endX) > 0 && !f && I[C].elementsLength > 1
        ? ((I[C].slider.style.transform = `translate3d(${
            L - Math.round(y.startX - y.endX)
          }px, 0, 0)`),
          (v = !0),
          (f = !1))
        : Math.abs(y.startY - y.endY) > 0 &&
          !v &&
          l.swipeClose &&
          ((I[C].slider.style.transform = `translate3d(${L}px, -${Math.round(
            y.startY - y.endY,
          )}px, 0)`),
          (v = !1),
          (f = !0))
    },
    se = () => {
      l.keyboard && window.addEventListener('keydown', K),
        window.addEventListener('resize', F),
        window.addEventListener('popstate', X),
        b.addEventListener('click', J),
        l.draggable &&
          be() &&
          (b.addEventListener('touchstart', Q),
          b.addEventListener('touchmove', Z),
          b.addEventListener('touchend', ee),
          b.addEventListener('mousedown', te),
          b.addEventListener('mouseup', re),
          b.addEventListener('mousemove', ie),
          b.addEventListener('contextmenu', ne))
    },
    oe = () => {
      l.keyboard && window.removeEventListener('keydown', K),
        window.removeEventListener('resize', F),
        window.removeEventListener('popstate', X),
        b.removeEventListener('click', J),
        l.draggable &&
          be() &&
          (b.removeEventListener('touchstart', Q),
          b.removeEventListener('touchmove', Z),
          b.removeEventListener('touchend', ee),
          b.removeEventListener('mousedown', te),
          b.removeEventListener('mouseup', re),
          b.removeEventListener('mousemove', ie),
          b.removeEventListener('contextmenu', ne))
    },
    de = () => {
      ;((l.draggable &&
        l.swipeClose &&
        be() &&
        !I[C].slider.classList.contains('tobii__slider--is-draggable')) ||
        (l.draggable &&
          I[C].elementsLength > 1 &&
          !I[C].slider.classList.contains('tobii__slider--is-draggable'))) &&
        I[C].slider.classList.add('tobii__slider--is-draggable'),
        !l.nav || 1 === I[C].elementsLength || ('auto' === l.nav && be())
          ? (p.setAttribute('aria-hidden', 'true'),
            (p.disabled = !0),
            h.setAttribute('aria-hidden', 'true'),
            (h.disabled = !0))
          : (p.setAttribute('aria-hidden', 'false'),
            (p.disabled = !1),
            h.setAttribute('aria-hidden', 'false'),
            (h.disabled = !1)),
        g.setAttribute('aria-hidden', l.counter && 1 !== I[C].elementsLength ? 'false' : 'true')
    },
    le = (e) => {
      V(),
        (g.textContent = `${I[C].currentIndex + 1}/${I[C].elementsLength}`),
        ((e) => {
          ;(!0 === l.nav || 'auto' === l.nav) && !be() && I[C].elementsLength > 1
            ? (p.setAttribute('aria-hidden', 'true'),
              (p.disabled = !0),
              h.setAttribute('aria-hidden', 'true'),
              (h.disabled = !0),
              1 === I[C].elementsLength
                ? l.close && m.focus()
                : 0 === I[C].currentIndex
                ? (h.setAttribute('aria-hidden', 'false'), (h.disabled = !1), h.focus())
                : I[C].currentIndex === I[C].elementsLength - 1
                ? (p.setAttribute('aria-hidden', 'false'), (p.disabled = !1), p.focus())
                : (p.setAttribute('aria-hidden', 'false'),
                  (p.disabled = !1),
                  h.setAttribute('aria-hidden', 'false'),
                  (h.disabled = !1),
                  'left' === e ? p.focus() : h.focus()))
            : l.close && m.focus()
        })(e)
    },
    ue = () => {
      ce() && X(),
        Object.entries(I).forEach((e) => {
          e[1].gallery.forEach((e) => {
            Y(e)
          })
        }),
        (I = {}),
        (S = C = null)
      for (const e in o) o[e].onReset()
    },
    ce = () => 'false' === b.getAttribute('aria-hidden'),
    be = () => 'ontouchstart' in window,
    pe = (e) =>
      -1 !== ['TEXTAREA', 'OPTION', 'INPUT', 'SELECT'].indexOf(e.nodeName) ||
      e === p ||
      e === h ||
      e === m
  return (
    ((t) => {
      if (document.querySelector('div.tobii'))
        return void console.log('Multiple lightbox instances not supported.')
      ;(l = ((t) =>
        e(
          {},
          {
            selector: '.lightbox',
            captions: !0,
            captionsSelector: 'img',
            captionAttribute: 'alt',
            captionText: null,
            nav: 'auto',
            navText: [
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="15 6 9 12 15 18" /></svg>',
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="9 6 15 12 9 18" /></svg>',
            ],
            navLabel: ['Previous image', 'Next image'],
            close: !0,
            closeText:
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>',
            closeLabel: 'Close lightbox',
            loadingIndicatorLabel: 'Image loading',
            counter: !0,
            download: !1,
            downloadText: '',
            downloadLabel: 'Download image',
            keyboard: !0,
            zoom: !0,
            zoomText:
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="16 4 20 4 20 8" /><line x1="14" y1="10" x2="20" y2="4" /><polyline points="8 20 4 20 4 16" /><line x1="4" y1="20" x2="10" y2="14" /><polyline points="16 20 20 20 20 16" /><line x1="14" y1="14" x2="20" y2="20" /><polyline points="8 4 4 4 4 8" /><line x1="4" y1="4" x2="10" y2="10" /></svg>',
            docClose: !0,
            swipeClose: !0,
            hideScrollbar: !0,
            draggable: !0,
            threshold: 100,
            rtl: !1,
            loop: !1,
            autoplayVideo: !1,
            modal: !1,
            theme: 'tobii--theme-default',
          },
          t,
        ))(t)),
        b ||
          ((b = document.createElement('div')),
          b.setAttribute('role', 'dialog'),
          b.setAttribute('aria-hidden', 'true'),
          b.classList.add('tobii'),
          b.classList.add(l.theme),
          (p = document.createElement('button')),
          (p.className = 'tobii__btn tobii__btn--previous'),
          p.setAttribute('type', 'button'),
          p.setAttribute('aria-label', l.navLabel[0]),
          (p.innerHTML = l.navText[0]),
          b.appendChild(p),
          (h = document.createElement('button')),
          (h.className = 'tobii__btn tobii__btn--next'),
          h.setAttribute('type', 'button'),
          h.setAttribute('aria-label', l.navLabel[1]),
          (h.innerHTML = l.navText[1]),
          b.appendChild(h),
          (m = document.createElement('button')),
          (m.className = 'tobii__btn tobii__btn--close'),
          m.setAttribute('type', 'button'),
          m.setAttribute('aria-label', l.closeLabel),
          (m.innerHTML = l.closeText),
          b.appendChild(m),
          (g = document.createElement('div')),
          (g.className = 'tobii__counter'),
          b.appendChild(g),
          document.body.appendChild(b))
      const i = document.querySelectorAll(l.selector)
      if (!i) throw new Error(`Ups, I can't find the selector ${l.selector} on this website.`)
      const r = []
      i.forEach((e) => {
        const t = e.hasAttribute('data-group') ? e.getAttribute('data-group') : 'default'
        let i = e.href
        e.hasAttribute('data-target') && (i = e.getAttribute('data-target')),
          (i += '__' + t),
          void 0 !== r[i]
            ? e.addEventListener('click', (e) => {
                H(t), U(), e.preventDefault()
              })
            : ((r[i] = 1), T(e))
      })
    })(s),
    (a.open = U),
    (a.previous = R),
    (a.next = M),
    (a.close = X),
    (a.add = T),
    (a.remove = Y),
    (a.reset = ue),
    (a.destroy = () => {
      ue(), b.parentNode.removeChild(b)
    }),
    (a.isOpen = ce),
    (a.slidesIndex = () => I[C].currentIndex),
    (a.select = (e) => {
      const t = I[C].currentIndex
      if (!ce()) throw new Error("Ups, I'm closed.")
      if (ce()) {
        if (!e && 0 !== e) throw new Error('Ups, no slide specified.')
        if (e === I[C].currentIndex) throw new Error(`Ups, slide ${e} is already selected.`)
        if (-1 === e || e >= I[C].elementsLength) throw new Error(`Ups, I can't find slide ${e}.`)
      }
      ;(I[C].currentIndex = e),
        D(t),
        z(e),
        e < t && (le('left'), B(t), $(e - 1)),
        e > t && (le('right'), B(t), $(e + 1))
    }),
    (a.slidesCount = () => I[C].elementsLength),
    (a.selectGroup = H),
    (a.currentGroup = () => (null !== C ? C : S)),
    (a.on = (e, t) => {
      b.addEventListener(e, t)
    }),
    (a.off = (e, t) => {
      b.removeEventListener(e, t)
    }),
    a
  )
}
export { a as default }
