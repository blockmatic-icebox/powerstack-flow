/* Template Name: Giglink - Tailwind CSS NFT Marketplace Template
   Author: Shreethemes
   Email: support@shreethemes.in
   Website: https://shreethemes.in
   Version: 1.0.0
   Created: May 2022
   File Description: Common JS file of the template(plugins.init.js)
*/

/*********************************/
/*         INDEX                 */
/*================================
 *     01.  Tiny Slider          *
 *     02.  Countdown Js         * (For Comingsoon page and Auction Page)
 *     03.  Maintenance js       * (For Maintenance page)
 *     04.  Data Counter         *
 *     05.  Datepicker js        *
 *     06.  Gallery filter js    * (For Portfolio pages)
 *     07.  Tobii lightbox       * (For Portfolio pages)
 *     08.  Back Button          *
 *     09.  Components           *
 *          1. Navtabs           *
 *          2. Modal             *
 *          3. Carousel          *
 *          4. Accordions        *
 *     10.  Upload Profile       *
 *     11.  Connect wallet       * (Only For MetaMask)
 ================================*/

//=========================================//
/*            01) Tiny slider              */
//=========================================//
if (document.getElementsByClassName('tiny-one-icon-item').length > 0) {
  var slider = tns({
    container: '.tiny-one-icon-item',
    items: 1,
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: 'bottom',
    controlsText: [
      '<i class="mdi mdi-chevron-left "></i>',
      '<i class="mdi mdi-chevron-right"></i>',
    ],
    nav: false,
    speed: 400,
    gutter: 0,
  })
}

if (document.getElementsByClassName('tiny-four-icon-item').length > 0) {
  var slider = tns({
    container: '.tiny-four-icon-item',
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: 'bottom',
    controlsText: [
      '<i class="mdi mdi-chevron-left "></i>',
      '<i class="mdi mdi-chevron-right"></i>',
    ],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
      1025: {
        items: 4,
      },

      992: {
        items: 3,
      },

      767: {
        items: 2,
      },

      320: {
        items: 1,
      },
    },
  })
}

if (document.getElementsByClassName('tiny-five-item').length > 0) {
  var slider = tns({
    container: '.tiny-five-item',
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: 'bottom',
    speed: 400,
    gutter: 12,
    responsive: {
      1025: {
        items: 5,
      },

      992: {
        items: 4,
      },

      767: {
        items: 3,
      },

      425: {
        items: 1,
      },
    },
  })
}

//=========================================//
/*            02) Countdown                */
//=========================================//
//Live Auction
try {
  var setEndDate1 = 'December 29, 2022 6:0:0'
  var setEndDate2 = 'January 13, 2023 5:3:1'
  var setEndDate3 = 'January 22, 2023 1:0:1'
  var setEndDate4 = 'February 14, 2023 1:2:1'
  var setEndDate5 = 'March 01, 2023 1:6:6'
  var setEndDate6 = 'March 15, 2023 2:5:5'
  var setEndDate7 = 'April 08, 2023 5:1:4'
  var setEndDate8 = 'April 20, 2023 1:6:3'
  var setEndDate9 = 'May 30, 2023 1:5:2'

  function startCountDownDate(dateVal) {
    var countDownDate = new Date(dateVal).getTime()
    return countDownDate
  }

  function countDownTimer(start, targetDOM) {
    // Get todays date and time
    var now = new Date().getTime()

    // Find the distance between now and the count down date
    var distance = start - now

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    // add 0 at the beginning if days, hours, minutes, seconds values are less than 10
    days = days < 10 ? '0' + days : days
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    // Output the result in an element with auction-item-x"
    document.querySelector('#' + targetDOM).textContent =
      days + ' : ' + hours + ' : ' + minutes + ' : ' + seconds

    // If the count down is over, write some text
    if (distance < 0) {
      // clearInterval();
      document.querySelector('#' + targetDOM).textContent = '00 : 00 : 00 : 00'
    }
  }

  var cdd1 = startCountDownDate(setEndDate1)
  var cdd2 = startCountDownDate(setEndDate2)
  var cdd3 = startCountDownDate(setEndDate3)
  var cdd4 = startCountDownDate(setEndDate4)
  var cdd5 = startCountDownDate(setEndDate5)
  var cdd6 = startCountDownDate(setEndDate6)
  var cdd7 = startCountDownDate(setEndDate7)
  var cdd8 = startCountDownDate(setEndDate8)
  var cdd9 = startCountDownDate(setEndDate9)

  if (document.getElementById('auction-item-1'))
    setInterval(function () {
      countDownTimer(cdd1, 'auction-item-1')
    }, 1000)
  if (document.getElementById('auction-item-2'))
    setInterval(function () {
      countDownTimer(cdd2, 'auction-item-2')
    }, 1000)
  if (document.getElementById('auction-item-3'))
    setInterval(function () {
      countDownTimer(cdd3, 'auction-item-3')
    }, 1000)
  if (document.getElementById('auction-item-4'))
    setInterval(function () {
      countDownTimer(cdd4, 'auction-item-4')
    }, 1000)
  if (document.getElementById('auction-item-5'))
    setInterval(function () {
      countDownTimer(cdd5, 'auction-item-5')
    }, 1000)
  if (document.getElementById('auction-item-6'))
    setInterval(function () {
      countDownTimer(cdd6, 'auction-item-6')
    }, 1000)
  if (document.getElementById('auction-item-7'))
    setInterval(function () {
      countDownTimer(cdd7, 'auction-item-7')
    }, 1000)
  if (document.getElementById('auction-item-8'))
    setInterval(function () {
      countDownTimer(cdd8, 'auction-item-8')
    }, 1000)
  if (document.getElementById('auction-item-9'))
    setInterval(function () {
      countDownTimer(cdd9, 'auction-item-9')
    }, 1000)
} catch (error) {}

//Comingsoon
try {
  if (document.getElementById('days')) {
    // The data/time we want to countdown to
    var eventCountDown = new Date('December 25, 2023 16:37:52').getTime()

    // Run myfunc every second
    var myfunc = setInterval(function () {
      var now = new Date().getTime()
      var timeleft = eventCountDown - now

      // Calculating the days, hours, minutes and seconds left
      var days = Math.floor(timeleft / (1000 * 60 * 60 * 24))
      var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))
      var seconds = Math.floor((timeleft % (1000 * 60)) / 1000)

      // Result is output to the specific element
      document.getElementById('days').innerHTML = days + "<p class='count-head'>Days</p> "
      document.getElementById('hours').innerHTML = hours + "<p class='count-head'>Hours</p> "
      document.getElementById('mins').innerHTML = minutes + "<p class='count-head'>Mins</p> "
      document.getElementById('secs').innerHTML = seconds + "<p class='count-head'>Secs</p> "

      // Display the message when countdown is over
      if (timeleft < 0) {
        clearInterval(myfunc)
        document.getElementById('days').innerHTML = ''
        document.getElementById('hours').innerHTML = ''
        document.getElementById('mins').innerHTML = ''
        document.getElementById('secs').innerHTML = ''
        document.getElementById('end').innerHTML = '00:00:00:00'
      }
    }, 1000)
  }
} catch (err) {}

//=========================================//
/*/*            03) Maintenance js         */
//=========================================//

try {
  if (document.getElementById('maintenance')) {
    var seconds = 3599
    function secondPassed() {
      var minutes = Math.round((seconds - 30) / 60)
      var remainingSeconds = seconds % 60
      if (remainingSeconds < 10) {
        remainingSeconds = '0' + remainingSeconds
      }
      document.getElementById('maintenance').innerHTML = minutes + ':' + remainingSeconds
      if (seconds == 0) {
        clearInterval(countdownTimer)
        document.getElementById('maintenance').innerHTML = 'Buzz Buzz'
      } else {
        seconds--
      }
    }
    var countdownTimer = setInterval('secondPassed()', 1000)
  }
} catch (err) {}

//=========================================//
/*/*            04) Data Counter           */
//=========================================//

try {
  const counter = document.querySelectorAll('.counter-value')
  const speed = 2500 // The lower the slower

  counter.forEach((counter_value) => {
    const updateCount = () => {
      const target = +counter_value.getAttribute('data-target')
      const count = +counter_value.innerText

      // Lower inc to slow and higher to slow
      var inc = target / speed

      if (inc < 1) {
        inc = 1
      }

      // Check if target is reached
      if (count < target) {
        // Add inc to count and output in counter_value
        counter_value.innerText = (count + inc).toFixed(0)
        // Call function every ms
        setTimeout(updateCount, 1)
      } else {
        counter_value.innerText = target
      }
    }

    updateCount()
  })
} catch (err) {}

//=========================================//
/*/*            05) Datepicker js*/
//=========================================//

try {
  const start = datepicker('.start', { id: 1 })
  const end = datepicker('.end', { id: 1 })
} catch (err) {}

//=========================================//
/*/*            06) Gallery filter js      */
//=========================================//

try {
  var Shuffle = window.Shuffle

  class Demo {
    constructor(element) {
      if (element) {
        this.element = element
        this.shuffle = new Shuffle(element, {
          itemSelector: '.picture-item',
          sizer: element.querySelector('.my-sizer-element'),
        })

        // Log events.
        this.addShuffleEventListeners()
        this._activeFilters = []
        this.addFilterButtons()
      }
    }

    /**
     * Shuffle uses the CustomEvent constructor to dispatch events. You can listen
     * for them like you normally would (with jQuery for example).
     */
    addShuffleEventListeners() {
      this.shuffle.on(Shuffle.EventType.LAYOUT, (data) => {
        console.log('layout. data:', data)
      })
      this.shuffle.on(Shuffle.EventType.REMOVED, (data) => {
        console.log('removed. data:', data)
      })
    }

    addFilterButtons() {
      const options = document.querySelector('.filter-options')
      if (!options) {
        return
      }

      const filterButtons = Array.from(options.children)
      const onClick = this._handleFilterClick.bind(this)
      filterButtons.forEach((button) => {
        button.addEventListener('click', onClick, false)
      })
    }

    _handleFilterClick(evt) {
      const btn = evt.currentTarget
      const isActive = btn.classList.contains('active')
      const btnGroup = btn.getAttribute('data-group')

      this._removeActiveClassFromChildren(btn.parentNode)

      let filterGroup
      if (isActive) {
        btn.classList.remove('active')
        filterGroup = Shuffle.ALL_ITEMS
      } else {
        btn.classList.add('active')
        filterGroup = btnGroup
      }

      this.shuffle.filter(filterGroup)
    }

    _removeActiveClassFromChildren(parent) {
      const { children } = parent
      for (let i = children.length - 1; i >= 0; i--) {
        children[i].classList.remove('active')
      }
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    window.demo = new Demo(document.getElementById('grid'))
  })
} catch (err) {}

//=========================================//
/*/*            07) Tobii lightbox         */
//=========================================//

try {
  const tobii = new Tobii()
} catch (err) {}

//=========================================//
/*/*            08) Back Button            */
//=========================================//
document.getElementsByClassName('back-button')[0]?.addEventListener('click', (e) => {
  if (document.referrer !== '') {
    e.preventDefault()
    window.location.href = document.referrer
  }
})

//=========================================//
/*            09) Choice js                */
//=========================================//
try {
  var singleLocation = new Choices('#choices-location')
  var singleCategorie = document.getElementById('choices-type')
  if (singleCategorie) {
    var singleCategories = new Choices('#choices-type')
  }
} catch (error) {}
try {
  var choicescatagory = new Choices('#choices-catagory')
  var choicesmin = document.getElementById('choices-min-price')
  var choicesmax = document.getElementById('choices-max-price')
  if (choicesmin) {
    var choicesmins = new Choices('#choices-min-price')
  }
  if (choicesmax) {
    var choicesmaxs = new Choices('#choices-max-price')
  }
} catch (error) {}

//=========================================//
/*            10) Components               */
//=========================================//

//============= 01) Navtabs ===============//
try {
  const Default = {
    defaultTabId: null,
    activeClasses: 'text-white bg-violet-600',
    inactiveClasses:
      'hover:text-violet-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800',
    onShow: () => {},
  }

  class Tabs {
    constructor(items = [], options = {}) {
      this._items = items
      this._activeTab = options ? this.getTab(options.defaultTabId) : null
      this._options = { ...Default, ...options }
      this._init()
    }

    _init() {
      if (this._items.length) {
        // set the first tab as active if not set by explicitly
        if (!this._activeTab) {
          this._setActiveTab(this._items[0])
        }

        // force show the first default tab
        this.show(this._activeTab.id, true)

        // show tab content based on click
        this._items.map((tab) => {
          tab.triggerEl.addEventListener('click', () => {
            this.show(tab.id)
          })
        })
      }
    }

    getActiveTab() {
      return this._activeTab
    }

    _setActiveTab(tab) {
      this._activeTab = tab
    }

    getTab(id) {
      return this._items.filter((t) => t.id === id)[0]
    }

    show(id, forceShow = false) {
      const tab = this.getTab(id)

      // don't do anything if already active
      if (tab === this._activeTab && !forceShow) {
        return
      }

      // hide other tabs
      this._items.map((t) => {
        if (t !== tab) {
          t.triggerEl.classList.remove(...this._options.activeClasses.split(' '))
          t.triggerEl.classList.add(...this._options.inactiveClasses.split(' '))
          t.targetEl.classList.add('hidden')
          t.triggerEl.setAttribute('aria-selected', false)
        }
      })

      // show active tab
      tab.triggerEl.classList.add(...this._options.activeClasses.split(' '))
      tab.triggerEl.classList.remove(...this._options.inactiveClasses.split(' '))
      tab.triggerEl.setAttribute('aria-selected', true)
      tab.targetEl.classList.remove('hidden')

      this._setActiveTab(tab)

      // callback function
      this._options.onShow(this, tab)
    }
  }

  window.Tabs = Tabs

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-tabs-toggle]').forEach((triggerEl) => {
      const tabElements = []
      let defaultTabId = null
      triggerEl.querySelectorAll('[role="tab"]').forEach((el) => {
        const isActive = el.getAttribute('aria-selected') === 'true'
        const tab = {
          id: el.getAttribute('data-tabs-target'),
          triggerEl: el,
          targetEl: document.querySelector(el.getAttribute('data-tabs-target')),
        }
        tabElements.push(tab)

        if (isActive) {
          defaultTabId = tab.id
        }
      })
      new Tabs(tabElements, {
        defaultTabId: defaultTabId,
      })
    })
  })
} catch (error) {}

//********* 2) Modals ********//
try {
  const Default = {
    placement: 'center',
    backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    onHide: () => {},
    onShow: () => {},
    onToggle: () => {},
  }
  class Modal {
    constructor(targetEl = null, options = {}) {
      this._targetEl = targetEl
      this._options = { ...Default, ...options }
      this._isHidden = true
      this._init()
    }

    _init() {
      this._getPlacementClasses().map((c) => {
        this._targetEl.classList.add(c)
      })
    }

    _createBackdrop() {
      if (this._isHidden) {
        const backdropEl = document.createElement('div')
        backdropEl.setAttribute('modal-backdrop', '')
        backdropEl.classList.add(...this._options.backdropClasses.split(' '))
        document.querySelector('body').append(backdropEl)
      }
    }

    _destroyBackdropEl() {
      if (!this._isHidden) {
        document.querySelector('[modal-backdrop]').remove()
      }
    }

    _getPlacementClasses() {
      switch (this._options.placement) {
        // top
        case 'top-left':
          return ['justify-start', 'items-start']
        case 'top-center':
          return ['justify-center', 'items-start']
        case 'top-right':
          return ['justify-end', 'items-start']

        // center
        case 'center-left':
          return ['justify-start', 'items-center']
        case 'center':
          return ['justify-center', 'items-center']
        case 'center-right':
          return ['justify-end', 'items-center']

        // bottom
        case 'bottom-left':
          return ['justify-start', 'items-end']
        case 'bottom-center':
          return ['justify-center', 'items-end']
        case 'bottom-right':
          return ['justify-end', 'items-end']

        default:
          return ['justify-center', 'items-center']
      }
    }

    toggle() {
      if (this._isHidden) {
        this.show()
      } else {
        this.hide()
      }

      // callback function
      this._options.onToggle(this)
    }

    show() {
      this._targetEl.classList.add('flex')
      this._targetEl.classList.remove('hidden')
      this._targetEl.setAttribute('aria-modal', 'true')
      this._targetEl.setAttribute('role', 'dialog')
      this._targetEl.removeAttribute('aria-hidden')
      this._createBackdrop()
      this._isHidden = false

      // callback function
      this._options.onShow(this)
    }

    hide() {
      this._targetEl.classList.add('hidden')
      this._targetEl.classList.remove('flex')
      this._targetEl.setAttribute('aria-hidden', 'true')
      this._targetEl.removeAttribute('aria-modal')
      this._targetEl.removeAttribute('role')
      this._destroyBackdropEl()
      this._isHidden = true

      // callback function
      this._options.onHide(this)
    }
  }

  window.Modal = Modal

  const getModalInstance = (id, instances) => {
    if (instances.some((modalInstance) => modalInstance.id === id)) {
      return instances.find((modalInstance) => modalInstance.id === id)
    }
    return false
  }

  document.addEventListener('DOMContentLoaded', () => {
    let modalInstances = []
    document.querySelectorAll('[data-modal-toggle]').forEach((el) => {
      const modalId = el.getAttribute('data-modal-toggle')
      const modalEl = document.getElementById(modalId)
      const placement = modalEl.getAttribute('data-modal-placement')

      if (modalEl) {
        if (!modalEl.hasAttribute('aria-hidden') && !modalEl.hasAttribute('aria-modal')) {
          modalEl.setAttribute('aria-hidden', 'true')
        }
      }

      let modal = null
      if (getModalInstance(modalId, modalInstances)) {
        modal = getModalInstance(modalId, modalInstances)
        modal = modal.object
      } else {
        modal = new Modal(modalEl, {
          placement: placement ? placement : Default.placement,
        })
        modalInstances.push({
          id: modalId,
          object: modal,
        })
      }

      el.addEventListener('click', () => {
        modal.toggle()
      })
    })
  })
} catch (error) {}

//******** 3) Carousel********//
try {
  const Default = {
    defaultPosition: 0,
    indicators: {
      items: [],
      activeClasses: 'bg-white dark:bg-gray-800',
      inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
    },
    interval: 6000,
    onNext: () => {},
    onPrev: () => {},
    onChange: () => {},
  }

  class Carousel {
    constructor(items = [], options = {}) {
      this._items = items
      this._options = {
        ...Default,
        ...options,
        indicators: { ...Default.indicators, ...options.indicators },
      }
      this._activeItem = this.getItem(this._options.defaultPosition)
      this._indicators = this._options.indicators.items
      this._interval = null
      this._init()
      this.cycle()
    }

    /**
     * Initialise carousel and items based on active one
     */
    _init() {
      this._items.map((item) => {
        item.el.classList.add('absolute', 'inset-0', 'transition-all', 'transform')
      })

      // if no active item is set then first position is default
      if (this._getActiveItem()) {
        this.slideTo(this._getActiveItem().position)
      } else {
        this.slideTo(0)
      }

      this._indicators.map((indicator, position) => {
        indicator.el.addEventListener('click', () => {
          this.slideTo(position)
        })
      })
    }

    getItem(position) {
      return this._items[position]
    }

    /**
     * Slide to the element based on id
     * @param {*} position
     */
    slideTo(position) {
      const nextItem = this._items[position]
      const rotationItems = {
        left:
          nextItem.position === 0
            ? this._items[this._items.length - 1]
            : this._items[nextItem.position - 1],
        middle: nextItem,
        right:
          nextItem.position === this._items.length - 1
            ? this._items[0]
            : this._items[nextItem.position + 1],
      }
      this._rotate(rotationItems)
      this._setActiveItem(nextItem.position)
      if (this._interval) {
        this.pause()
        this.cycle()
      }

      this._options.onChange(this)
    }

    /**
     * Based on the currently active item it will go to the next position
     */
    next() {
      const activeItem = this._getActiveItem()
      let nextItem = null

      // check if last item
      if (activeItem.position === this._items.length - 1) {
        nextItem = this._items[0]
      } else {
        nextItem = this._items[activeItem.position + 1]
      }

      this.slideTo(nextItem.position)

      // callback function
      this._options.onNext(this)
    }

    /**
     * Based on the currently active item it will go to the previous position
     */
    prev() {
      const activeItem = this._getActiveItem()
      let prevItem = null

      // check if first item
      if (activeItem.position === 0) {
        prevItem = this._items[this._items.length - 1]
      } else {
        prevItem = this._items[activeItem.position - 1]
      }

      this.slideTo(prevItem.position)

      // callback function
      this._options.onPrev(this)
    }

    /**
     * This method applies the transform classes based on the left, middle, and right rotation carousel items
     * @param {*} rotationItems
     */
    _rotate(rotationItems) {
      // reset
      this._items.map((item) => {
        item.el.classList.add('hidden')
      })

      // left item (previously active)
      rotationItems.left.el.classList.remove(
        '-translate-x-full',
        'translate-x-full',
        'translate-x-0',
        'hidden',
        'z-20',
      )
      rotationItems.left.el.classList.add('-translate-x-full', 'z-10')

      // currently active item
      rotationItems.middle.el.classList.remove(
        '-translate-x-full',
        'translate-x-full',
        'translate-x-0',
        'hidden',
        'z-10',
      )
      rotationItems.middle.el.classList.add('translate-x-0', 'z-20')

      // right item (upcoming active)
      rotationItems.right.el.classList.remove(
        '-translate-x-full',
        'translate-x-full',
        'translate-x-0',
        'hidden',
        'z-20',
      )
      rotationItems.right.el.classList.add('translate-x-full', 'z-10')
    }

    /**
     * Set an interval to cycle through the carousel items
     */
    cycle() {
      this._interval = setInterval(() => {
        this.next()
      }, this._options.interval)
    }

    /**
     * Clears the cycling interval
     */
    pause() {
      clearInterval(this._interval)
    }

    /**
     * Get the currently active item
     */
    _getActiveItem() {
      return this._activeItem
    }

    /**
     * Set the currently active item and data attribute
     * @param {*} position
     */
    _setActiveItem(position) {
      this._activeItem = this._items[position]

      // update the indicators if available
      if (this._indicators.length) {
        this._indicators.map((indicator) => {
          indicator.el.setAttribute('aria-current', 'false')
          indicator.el.classList.remove(...this._options.indicators.activeClasses.split(' '))
          indicator.el.classList.add(...this._options.indicators.inactiveClasses.split(' '))
        })
        this._indicators[position].el.classList.add(
          ...this._options.indicators.activeClasses.split(' '),
        )
        this._indicators[position].el.classList.remove(
          ...this._options.indicators.inactiveClasses.split(' '),
        )
        this._indicators[position].el.setAttribute('aria-current', 'true')
      }
    }
  }

  window.Carousel = Carousel

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-carousel]').forEach((carouselEl) => {
      const interval = carouselEl.getAttribute('data-carousel-interval')
      const slide = carouselEl.getAttribute('data-carousel') === 'slide' ? true : false

      const items = []
      let defaultPosition = 0
      if (carouselEl.querySelectorAll('[data-carousel-item]').length) {
        ;[...carouselEl.querySelectorAll('[data-carousel-item]')].map(
          (carouselItemEl, position) => {
            items.push({
              position: position,
              el: carouselItemEl,
            })

            if (carouselItemEl.getAttribute('data-carousel-item') === 'active') {
              defaultPosition = position
            }
          },
        )
      }

      const indicators = []
      if (carouselEl.querySelectorAll('[data-carousel-slide-to]').length) {
        ;[...carouselEl.querySelectorAll('[data-carousel-slide-to]')].map((indicatorEl) => {
          indicators.push({
            position: indicatorEl.getAttribute('data-carousel-slide-to'),
            el: indicatorEl,
          })
        })
      }

      const carousel = new Carousel(items, {
        defaultPosition: defaultPosition,
        indicators: {
          items: indicators,
        },
        interval: interval ? interval : Default.interval,
      })

      if (slide) {
        carousel.cycle()
      }

      // check for controls
      const carouselNextEl = carouselEl.querySelector('[data-carousel-next]')
      const carouselPrevEl = carouselEl.querySelector('[data-carousel-prev]')

      if (carouselNextEl) {
        carouselNextEl.addEventListener('click', () => {
          carousel.next()
        })
      }

      if (carouselPrevEl) {
        carouselPrevEl.addEventListener('click', () => {
          carousel.prev()
        })
      }
    })
  })
} catch (error) {}

//********4) Accordions********/
try {
  const Default = {
    alwaysOpen: false,
    activeClasses: 'bg-gray-50 dark:bg-slate-800 text-violet-600',
    inactiveClasses: 'text-dark dark:text-white',
    onOpen: () => {},
    onClose: () => {},
    onToggle: () => {},
  }

  class Accordion {
    constructor(items = [], options = {}) {
      this._items = items
      this._options = { ...Default, ...options }
      this._init()
    }

    _init() {
      if (this._items.length) {
        // show accordion item based on click
        this._items.map((item) => {
          if (item.active) {
            this.open(item.id)
          }

          item.triggerEl.addEventListener('click', () => {
            this.toggle(item.id)
          })
        })
      }
    }

    getItem(id) {
      return this._items.filter((item) => item.id === id)[0]
    }

    open(id) {
      const item = this.getItem(id)

      // don't hide other accordions if always open
      if (!this._options.alwaysOpen) {
        this._items.map((i) => {
          if (i !== item) {
            i.triggerEl.classList.remove(...this._options.activeClasses.split(' '))
            i.triggerEl.classList.add(...this._options.inactiveClasses.split(' '))
            i.targetEl.classList.add('hidden')
            i.triggerEl.setAttribute('aria-expanded', false)
            i.active = false

            // rotate icon if set
            if (i.iconEl) {
              i.iconEl.classList.remove('rotate-180')
            }
          }
        })
      }

      // show active item
      item.triggerEl.classList.add(...this._options.activeClasses.split(' '))
      item.triggerEl.classList.remove(...this._options.inactiveClasses.split(' '))
      item.triggerEl.setAttribute('aria-expanded', true)
      item.targetEl.classList.remove('hidden')
      item.active = true

      // rotate icon if set
      if (item.iconEl) {
        item.iconEl.classList.add('rotate-180')
      }

      // callback function
      this._options.onOpen(this, item)
    }

    toggle(id) {
      const item = this.getItem(id)

      if (item.active) {
        this.close(id)
      } else {
        this.open(id)
      }

      // callback function
      this._options.onToggle(this, item)
    }

    close(id) {
      const item = this.getItem(id)

      item.triggerEl.classList.remove(...this._options.activeClasses.split(' '))
      item.triggerEl.classList.add(...this._options.inactiveClasses.split(' '))
      item.targetEl.classList.add('hidden')
      item.triggerEl.setAttribute('aria-expanded', false)
      item.active = false

      // rotate icon if set
      if (item.iconEl) {
        item.iconEl.classList.remove('rotate-180')
      }

      // callback function
      this._options.onClose(this, item)
    }
  }

  window.Accordion = Accordion

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-accordion]').forEach((accordionEl) => {
      const alwaysOpen = accordionEl.getAttribute('data-accordion')
      const activeClasses = accordionEl.getAttribute('data-active-classes')
      const inactiveClasses = accordionEl.getAttribute('data-inactive-classes')

      const items = []
      accordionEl.querySelectorAll('[data-accordion-target]').forEach((el) => {
        const item = {
          id: el.getAttribute('data-accordion-target'),
          triggerEl: el,
          targetEl: document.querySelector(el.getAttribute('data-accordion-target')),
          iconEl: el.querySelector('[data-accordion-icon]'),
          active: el.getAttribute('aria-expanded') === 'true' ? true : false,
        }
        items.push(item)
      })

      new Accordion(items, {
        alwaysOpen: alwaysOpen === 'open' ? true : false,
        activeClasses: activeClasses ? activeClasses : Default.activeClasses,
        inactiveClasses: inactiveClasses ? inactiveClasses : Default.inactiveClasses,
      })
    })
  })
} catch (error) {}

//=========================================//
/*            11) Upload Profile           */
//=========================================//
try {
  var loadFile = function (event) {
    var image = document.getElementById(event.target.name)
    image.src = URL.createObjectURL(event.target.files[0])
  }
} catch (error) {}

//=========================================//
/*            11) Connect wallet           */
//=========================================//
;(async function () {
  try {
    //Basic Actions Section
    const onboardButton = document.getElementById('connectWallet')

    //   metamask modal
    const modal = document.getElementById('modal-metamask')
    const closeModalBtn = document.getElementById('close-modal')

    //   wallet address
    const myPublicAddress = document.getElementById('myPublicAddress')

    //Created check function to see if the MetaMask extension is installed
    const isMetaMaskInstalled = () => {
      //Have to check the ethereum binding on the window object to see if it's installed
      const { ethereum } = window
      return Boolean(ethereum && ethereum.isMetaMask)
    }

    const onClickConnect = async () => {
      if (!isMetaMaskInstalled()) {
        //meta mask not installed
        modal.classList.add('show')
        modal.style.display = 'block'
        return
      }
      try {
        await ethereum.request({ method: 'eth_requestAccounts' })
        const accounts = await ethereum.request({ method: 'eth_accounts' })
        myPublicAddress.innerHTML =
          accounts[0].split('').slice(0, 6).join('') +
          '...' +
          accounts[0]
            .split('')
            .slice(accounts[0].length - 7, accounts[0].length)
            .join('')
      } catch (error) {
        console.error(error)
      }
    }

    const closeModal = () => {
      modal.classList.remove('show')
      modal.style.display = 'none'
    }

    if (isMetaMaskInstalled()) {
      const accounts = await ethereum.request({ method: 'eth_accounts' })
      if (!!accounts[0]) {
        myPublicAddress.innerHTML =
          accounts[0].split('').slice(0, 6).join('') +
          '...' +
          accounts[0]
            .split('')
            .slice(accounts[0].length - 7, accounts[0].length)
            .join('')
      }
    }

    onboardButton.addEventListener('click', onClickConnect)
    closeModalBtn.addEventListener('click', closeModal)
  } catch (error) {}
})()
