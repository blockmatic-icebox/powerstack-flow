!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e || self).Tobii = t())
})(this, function () {
  class e {
    constructor() {
      ;(this.figcaptionId = 0), (this.userSettings = null)
    }
    init(e, t, i) {
      this.userSettings = i
      const r = document.createElement('figure'),
        n = document.createElement('figcaption'),
        s = document.createElement('img'),
        a = e.querySelector('img'),
        o = document.createElement('div')
      ;(r.style.opacity = '0'),
        a && (s.alt = a.alt || ''),
        s.setAttribute('src', ''),
        s.setAttribute('data-src', e.href),
        e.hasAttribute('data-srcset') &&
          s.setAttribute('data-srcset', e.getAttribute('data-srcset')),
        r.appendChild(s),
        this.userSettings.captions &&
          ('function' == typeof this.userSettings.captionText
            ? (n.textContent = this.userSettings.captionText(e))
            : 'self' === this.userSettings.captionsSelector &&
              e.getAttribute(this.userSettings.captionAttribute)
            ? (n.textContent = e.getAttribute(this.userSettings.captionAttribute))
            : 'img' === this.userSettings.captionsSelector &&
              a &&
              a.getAttribute(this.userSettings.captionAttribute) &&
              (n.textContent = a.getAttribute(this.userSettings.captionAttribute)),
          n.textContent &&
            ((n.id = `tobii-figcaption-${this.figcaptionId}`),
            r.appendChild(n),
            s.setAttribute('aria-labelledby', n.id),
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
  class t {
    constructor() {
      this.userSettings = null
    }
    init(e, t, i) {
      this.userSettings = i
      const r = e.hasAttribute('data-target')
        ? e.getAttribute('data-target')
        : e.getAttribute('href')
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
  class i {
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
  class r {
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
  return function n(s) {
    const a = { image: new e(), html: new i(), iframe: new t(), youtube: new r() },
      o = [
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
    let d = {}
    const l = [],
      u = {
        gallery: [],
        slider: null,
        sliderElements: [],
        elementsLength: 0,
        currentIndex: 0,
        x: 0,
      }
    let c = null,
      b = null,
      p = null,
      h = null,
      m = null,
      g = {},
      f = !1,
      y = !1,
      v = !1,
      w = null,
      A = null,
      E = null,
      L = !1,
      x = !1,
      _ = {},
      I = null,
      S = null
    const C = (e) => {
        if (null === document.querySelector('[data-type="youtube"]') || x) P(e)
        else {
          if (null === document.getElementById('iframe_api')) {
            const e = document.createElement('script'),
              t = document.getElementsByTagName('script')[0]
            ;(e.id = 'iframe_api'),
              (e.src = 'https://www.youtube.com/iframe_api'),
              t.parentNode.insertBefore(e, t)
          }
          ;-1 === l.indexOf(e) && l.push(e),
            (window.onYouTubePlayerAPIReady = () => {
              l.forEach((e) => {
                P(e)
              }),
                (x = !0)
            })
        }
      },
      T = (e) => (e.hasAttribute('data-group') ? e.getAttribute('data-group') : 'default'),
      P = (e) => {
        if (
          ((I = T(e)),
          Object.prototype.hasOwnProperty.call(_, I) ||
            ((_[I] = JSON.parse(JSON.stringify(u))), Y()),
          -1 !== _[I].gallery.indexOf(e))
        )
          throw new Error('Ups, element already added.')
        if (
          (_[I].gallery.push(e),
          _[I].elementsLength++,
          (d.zoom && e.querySelector('img') && 'false' !== e.getAttribute('data-zoom')) ||
            'true' === e.getAttribute('data-zoom'))
        ) {
          const t = document.createElement('div')
          ;(t.className = 'tobii-zoom__icon'),
            (t.innerHTML = d.zoomText),
            e.classList.add('tobii-zoom'),
            e.appendChild(t)
        }
        e.addEventListener('click', F), N(e), ue() && I === S && (oe(), de(null))
      },
      q = (e) => {
        const t = T(e)
        if (-1 === _[t].gallery.indexOf(e))
          throw new Error(`Ups, I can't find a slide for the element ${e}.`)
        {
          const i = _[t].gallery.indexOf(e),
            r = _[t].sliderElements[i]
          if (ue() && t === S && i === _[t].currentIndex) {
            if (1 === _[t].elementsLength)
              throw (U(), new Error("Ups, I've closed. There are no slides more to show."))
            0 === _[t].currentIndex ? R() : z()
          }
          if ((_[t].elementsLength--, d.zoom && e.querySelector('.tobii-zoom__icon'))) {
            const t = e.querySelector('.tobii-zoom__icon')
            t.parentNode.classList.remove('tobii-zoom'), t.parentNode.removeChild(t)
          }
          e.removeEventListener('click', F), r.parentNode.removeChild(r)
        }
      },
      Y = () => {
        ;(_[I].slider = document.createElement('div')),
          (_[I].slider.className = 'tobii__slider'),
          _[I].slider.setAttribute('aria-hidden', 'true'),
          c.appendChild(_[I].slider)
      },
      N = (e) => {
        const t = k(e),
          i = document.createElement('div'),
          r = document.createElement('div')
        ;(i.className = 'tobii__slide'),
          (i.style.position = 'absolute'),
          (i.style.left = 100 * _[I].x + '%'),
          i.setAttribute('aria-hidden', 'true'),
          t.init(e, r, d),
          i.appendChild(r),
          _[I].slider.appendChild(i),
          _[I].sliderElements.push(i),
          ++_[I].x
      },
      k = (e) => {
        const t = e.getAttribute('data-type')
        return void 0 !== a[t]
          ? a[t]
          : (e.hasAttribute('data-type') && console.log('Unknown lightbox element type: ' + t),
            a.image)
      },
      O = (e) => {
        if (((S = null !== S ? S : I), ue())) throw new Error("Ups, I'm aleady open.")
        if (!ue() && (e || (e = 0), -1 === e || e >= _[S].elementsLength))
          throw new Error(`Ups, I can't find slide ${e}.`)
        document.documentElement.classList.add('tobii-is-open'),
          document.body.classList.add('tobii-is-open'),
          document.body.classList.add('tobii-is-open-' + S),
          oe(),
          d.close || ((h.disabled = !1), h.setAttribute('aria-hidden', 'true')),
          (w = document.activeElement)
        const t = window.location.href
        window.history.pushState({ tobii: 'close' }, 'Image', t),
          (_[S].currentIndex = e),
          V(),
          se(),
          $(_[S].currentIndex),
          _[S].slider.setAttribute('aria-hidden', 'false'),
          c.setAttribute('aria-hidden', 'false'),
          de(null),
          X(_[S].currentIndex + 1),
          X(_[S].currentIndex - 1),
          _[S].slider.classList.add('tobii__slider--animate')
        const i = new window.CustomEvent('open', { detail: { group: S } })
        c.dispatchEvent(i)
      },
      U = () => {
        if (!ue()) throw new Error("Ups, I'm already closed.")
        document.documentElement.classList.remove('tobii-is-open'),
          document.body.classList.remove('tobii-is-open'),
          document.body.classList.remove('tobii-is-open-' + S),
          ae(),
          null !== window.history.state &&
            'close' === window.history.state.tobii &&
            window.history.back(),
          w.focus(),
          H(_[S].currentIndex),
          D(_[S].currentIndex),
          c.setAttribute('aria-hidden', 'true'),
          _[S].slider.setAttribute('aria-hidden', 'true'),
          (_[S].currentIndex = 0),
          _[S].slider.classList.remove('tobii__slider--animate')
        const e = new window.CustomEvent('close', { detail: { group: S } })
        c.dispatchEvent(e)
      },
      X = (e) => {
        if (void 0 === _[S].sliderElements[e]) return
        const t = _[S].sliderElements[e].querySelector('[data-type]')
        k(t).onPreload(t)
      },
      $ = (e) => {
        if (void 0 === _[S].sliderElements[e]) return
        const t = _[S].sliderElements[e].querySelector('[data-type]'),
          i = k(t)
        _[S].sliderElements[e].classList.add('tobii__slide--is-active'),
          _[S].sliderElements[e].setAttribute('aria-hidden', 'false'),
          i.onLoad(t)
      },
      z = () => {
        if (!ue()) throw new Error("Ups, I'm closed.")
        _[S].currentIndex > 0 &&
          (H(_[S].currentIndex),
          $(--_[S].currentIndex),
          de('left'),
          D(_[S].currentIndex + 1),
          X(_[S].currentIndex - 1))
        const e = new window.CustomEvent('previous', { detail: { group: S } })
        c.dispatchEvent(e)
      },
      R = () => {
        if (!ue()) throw new Error("Ups, I'm closed.")
        _[S].currentIndex < _[S].elementsLength - 1 &&
          (H(_[S].currentIndex),
          $(++_[S].currentIndex),
          de('right'),
          D(_[S].currentIndex - 1),
          X(_[S].currentIndex + 1))
        const e = new window.CustomEvent('next', { detail: { group: S } })
        c.dispatchEvent(e)
      },
      M = (e) => {
        if (ue()) throw new Error("Ups, I'm open.")
        if (!e) throw new Error('Ups, no group specified.')
        if (e && !Object.prototype.hasOwnProperty.call(_, e))
          throw new Error(`Ups, I don't have a group called "${e}".`)
        S = e
      },
      H = (e) => {
        if (void 0 === _[S].sliderElements[e]) return
        const t = _[S].sliderElements[e].querySelector('[data-type]'),
          i = k(t)
        _[S].sliderElements[e].classList.remove('tobii__slide--is-active'),
          _[S].sliderElements[e].setAttribute('aria-hidden', 'true'),
          i.onLeave(t)
      },
      D = (e) => {
        if (void 0 === _[S].sliderElements[e]) return
        const t = _[S].sliderElements[e].querySelector('[data-type]')
        k(t).onCleanup(t)
      },
      B = () => {
        ;(S = null !== S ? S : I),
          (A = -_[S].currentIndex * c.offsetWidth),
          (_[S].slider.style.transform = `translate3d(${A}px, 0, 0)`),
          (E = A)
      },
      V = () => {
        g = { startX: 0, endX: 0, startY: 0, endY: 0 }
      },
      j = () => {
        const e = g.endX - g.startX,
          t = g.endY - g.startY,
          i = Math.abs(e),
          r = Math.abs(t)
        e > 0 && i > d.threshold && _[S].currentIndex > 0
          ? z()
          : e < 0 && i > d.threshold && _[S].currentIndex !== _[S].elementsLength - 1
          ? R()
          : t < 0 && r > d.threshold && d.swipeClose
          ? U()
          : B()
      },
      W = () => {
        L ||
          ((L = !0),
          window.requestAnimationFrame(() => {
            B(), (L = !1)
          }))
      },
      F = (e) => {
        e.preventDefault(), (S = T(e.currentTarget)), O(_[S].gallery.indexOf(e.currentTarget))
      },
      G = (e) => {
        e.target === b
          ? z()
          : e.target === p
          ? R()
          : (e.target === h ||
              (!1 === f &&
                !1 === y &&
                e.target.classList.contains('tobii__slide') &&
                d.docClose)) &&
            U(),
          e.stopPropagation()
      },
      J = (e) => {
        const t = Array.prototype.slice
            .call(
              c.querySelectorAll(
                `.tobii__btn:not([disabled]), .tobii__slide--is-active ${o.join(
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
          ? (e.preventDefault(), U())
          : 37 === e.keyCode || 'ArrowLeft' === e.code
          ? (e.preventDefault(), z())
          : (39 !== e.keyCode && 'ArrowRight' !== e.code) || (e.preventDefault(), R())
      },
      K = (e) => {
        be(e.target) ||
          (e.stopPropagation(),
          (f = !1),
          (y = !1),
          (v = !0),
          (g.startX = e.touches[0].pageX),
          (g.startY = e.touches[0].pageY),
          ce() && _[S].slider.classList.add('tobii__slider--is-dragging'))
      },
      Q = (e) => {
        e.stopPropagation(),
          v && ((g.endX = e.touches[0].pageX), (g.endY = e.touches[0].pageY), ne())
      },
      Z = (e) => {
        e.stopPropagation(),
          (v = !1),
          _[S].slider.classList.remove('tobii__slider--is-dragging'),
          g.endX && j(),
          V()
      },
      ee = (e) => {
        be(e.target) ||
          (e.preventDefault(),
          e.stopPropagation(),
          (f = !1),
          (y = !1),
          (v = !0),
          (g.startX = e.pageX),
          (g.startY = e.pageY),
          ce() && _[S].slider.classList.add('tobii__slider--is-dragging'))
      },
      te = (e) => {
        e.preventDefault(), v && ((g.endX = e.pageX), (g.endY = e.pageY), ne())
      },
      ie = (e) => {
        e.stopPropagation(),
          (v = !1),
          _[S].slider.classList.remove('tobii__slider--is-dragging'),
          g.endX && j(),
          V()
      },
      re = () => {
        v = !1
      },
      ne = () => {
        Math.abs(g.startX - g.endX) > 0 && !y && _[S].elementsLength > 1
          ? ((_[S].slider.style.transform = `translate3d(${
              E - Math.round(g.startX - g.endX)
            }px, 0, 0)`),
            (f = !0),
            (y = !1))
          : Math.abs(g.startY - g.endY) > 0 &&
            !f &&
            d.swipeClose &&
            ((_[S].slider.style.transform = `translate3d(${E}px, -${Math.round(
              g.startY - g.endY,
            )}px, 0)`),
            (f = !1),
            (y = !0))
      },
      se = () => {
        d.keyboard && window.addEventListener('keydown', J),
          window.addEventListener('resize', W),
          window.addEventListener('popstate', U),
          c.addEventListener('click', G),
          d.draggable &&
            ce() &&
            (c.addEventListener('touchstart', K),
            c.addEventListener('touchmove', Q),
            c.addEventListener('touchend', Z),
            c.addEventListener('mousedown', ee),
            c.addEventListener('mouseup', ie),
            c.addEventListener('mousemove', te),
            c.addEventListener('contextmenu', re))
      },
      ae = () => {
        d.keyboard && window.removeEventListener('keydown', J),
          window.removeEventListener('resize', W),
          window.removeEventListener('popstate', U),
          c.removeEventListener('click', G),
          d.draggable &&
            ce() &&
            (c.removeEventListener('touchstart', K),
            c.removeEventListener('touchmove', Q),
            c.removeEventListener('touchend', Z),
            c.removeEventListener('mousedown', ee),
            c.removeEventListener('mouseup', ie),
            c.removeEventListener('mousemove', te),
            c.removeEventListener('contextmenu', re))
      },
      oe = () => {
        ;((d.draggable &&
          d.swipeClose &&
          ce() &&
          !_[S].slider.classList.contains('tobii__slider--is-draggable')) ||
          (d.draggable &&
            _[S].elementsLength > 1 &&
            !_[S].slider.classList.contains('tobii__slider--is-draggable'))) &&
          _[S].slider.classList.add('tobii__slider--is-draggable'),
          !d.nav || 1 === _[S].elementsLength || ('auto' === d.nav && ce())
            ? (b.setAttribute('aria-hidden', 'true'),
              (b.disabled = !0),
              p.setAttribute('aria-hidden', 'true'),
              (p.disabled = !0))
            : (b.setAttribute('aria-hidden', 'false'),
              (b.disabled = !1),
              p.setAttribute('aria-hidden', 'false'),
              (p.disabled = !1)),
          m.setAttribute('aria-hidden', d.counter && 1 !== _[S].elementsLength ? 'false' : 'true')
      },
      de = (e) => {
        B(),
          (m.textContent = `${_[S].currentIndex + 1}/${_[S].elementsLength}`),
          ((e) => {
            ;(!0 === d.nav || 'auto' === d.nav) && !ce() && _[S].elementsLength > 1
              ? (b.setAttribute('aria-hidden', 'true'),
                (b.disabled = !0),
                p.setAttribute('aria-hidden', 'true'),
                (p.disabled = !0),
                1 === _[S].elementsLength
                  ? d.close && h.focus()
                  : 0 === _[S].currentIndex
                  ? (p.setAttribute('aria-hidden', 'false'), (p.disabled = !1), p.focus())
                  : _[S].currentIndex === _[S].elementsLength - 1
                  ? (b.setAttribute('aria-hidden', 'false'), (b.disabled = !1), b.focus())
                  : (b.setAttribute('aria-hidden', 'false'),
                    (b.disabled = !1),
                    p.setAttribute('aria-hidden', 'false'),
                    (p.disabled = !1),
                    'left' === e ? b.focus() : p.focus()))
              : d.close && h.focus()
          })(e)
      },
      le = () => {
        ue() && U(),
          Object.entries(_).forEach((e) => {
            e[1].gallery.forEach((e) => {
              q(e)
            })
          }),
          (_ = {}),
          (I = S = null)
        for (const e in a) a[e].onReset()
      },
      ue = () => 'false' === c.getAttribute('aria-hidden'),
      ce = () => 'ontouchstart' in window,
      be = (e) =>
        -1 !== ['TEXTAREA', 'OPTION', 'INPUT', 'SELECT'].indexOf(e.nodeName) ||
        e === b ||
        e === p ||
        e === h
    return (
      ((e) => {
        if (document.querySelector('div.tobii'))
          return void console.log('Multiple lightbox instances not supported.')
        ;(d = ((e) => ({
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
          ...e,
        }))(e)),
          c ||
            ((c = document.createElement('div')),
            c.setAttribute('role', 'dialog'),
            c.setAttribute('aria-hidden', 'true'),
            c.classList.add('tobii'),
            c.classList.add(d.theme),
            (b = document.createElement('button')),
            (b.className = 'tobii__btn tobii__btn--previous'),
            b.setAttribute('type', 'button'),
            b.setAttribute('aria-label', d.navLabel[0]),
            (b.innerHTML = d.navText[0]),
            c.appendChild(b),
            (p = document.createElement('button')),
            (p.className = 'tobii__btn tobii__btn--next'),
            p.setAttribute('type', 'button'),
            p.setAttribute('aria-label', d.navLabel[1]),
            (p.innerHTML = d.navText[1]),
            c.appendChild(p),
            (h = document.createElement('button')),
            (h.className = 'tobii__btn tobii__btn--close'),
            h.setAttribute('type', 'button'),
            h.setAttribute('aria-label', d.closeLabel),
            (h.innerHTML = d.closeText),
            c.appendChild(h),
            (m = document.createElement('div')),
            (m.className = 'tobii__counter'),
            c.appendChild(m),
            document.body.appendChild(c))
        const t = document.querySelectorAll(d.selector)
        if (!t) throw new Error(`Ups, I can't find the selector ${d.selector} on this website.`)
        const i = []
        t.forEach((e) => {
          const t = e.hasAttribute('data-group') ? e.getAttribute('data-group') : 'default'
          let r = e.href
          e.hasAttribute('data-target') && (r = e.getAttribute('data-target')),
            (r += '__' + t),
            void 0 !== i[r]
              ? e.addEventListener('click', (e) => {
                  M(t), O(), e.preventDefault()
                })
              : ((i[r] = 1), C(e))
        })
      })(s),
      (n.open = O),
      (n.previous = z),
      (n.next = R),
      (n.close = U),
      (n.add = C),
      (n.remove = q),
      (n.reset = le),
      (n.destroy = () => {
        le(), c.parentNode.removeChild(c)
      }),
      (n.isOpen = ue),
      (n.slidesIndex = () => _[S].currentIndex),
      (n.select = (e) => {
        const t = _[S].currentIndex
        if (!ue()) throw new Error("Ups, I'm closed.")
        if (ue()) {
          if (!e && 0 !== e) throw new Error('Ups, no slide specified.')
          if (e === _[S].currentIndex) throw new Error(`Ups, slide ${e} is already selected.`)
          if (-1 === e || e >= _[S].elementsLength) throw new Error(`Ups, I can't find slide ${e}.`)
        }
        ;(_[S].currentIndex = e),
          H(t),
          $(e),
          e < t && (de('left'), D(t), X(e - 1)),
          e > t && (de('right'), D(t), X(e + 1))
      }),
      (n.slidesCount = () => _[S].elementsLength),
      (n.selectGroup = M),
      (n.currentGroup = () => (null !== S ? S : I)),
      (n.on = (e, t) => {
        c.addEventListener(e, t)
      }),
      (n.off = (e, t) => {
        c.removeEventListener(e, t)
      }),
      n
    )
  }
})
