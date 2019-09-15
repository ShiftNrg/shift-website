const screenWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth
// const screenHeight =
//   window.innerHeight ||
//   document.documentElement.clientHeight ||
//   document.body.clientHeight

// The checker
const isInView = (el) => {
  const scroll = window.scrollY || window.pageYOffset
  const boundsTop = el.getBoundingClientRect().top + scroll

  const viewport = {
    top: scroll,
    bottom: scroll + window.innerHeight - 200
  }

  const bounds = {
    top: boundsTop,
    bottom: boundsTop + el.clientHeight
  }

  return (
    (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
    (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
  )
}

// requestAnimationFrame
const raf =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60)
  }

// Viewport checker
if (typeof studioibizz === 'undefined') {
  studioibizz = {}
}
studioibizz.fakepreload = {
  selectors:
    '.scene .banner:not(.visible), .scene article:not(.visible), .scene section:not(.visible)',
  init() {
    this.attach()
    this.onscroll()
  },
  attach() {
    if (screenWidth <= 767 || screenWidth > 1024) {
      document
        .querySelectorAll(studioibizz.fakepreload.selectors)
        .forEach(function(element) {
          element.classList.add('invisible')
          element.addEventListener('animationend', function() {
            element.classList.remove('animating')
          })
        })
    }
  },
  detach() {},
  onscroll() {
    const handler = () =>
      raf(() => {
        document
          .querySelectorAll(studioibizz.fakepreload.selectors)
          .forEach(function(element) {
            if (isInView(element)) {
              element.classList.add('visible')
              element.classList.add('animating')
              if (element.classList.contains('banner')) {
                studioibizz.banner.animate()
              }
            }
          })
      })

    window.addEventListener('scroll', handler)
    setTimeout(handler, 500)
  }
}
