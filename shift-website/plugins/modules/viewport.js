const screenWidth =
  process.client &&
  (window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth)

if (process.client) {
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
      // window.addEventListener('scroll', scrollHandler)
      // setTimeout(scrollHandler, 500)
    }
  }
  studioibizz.fakepreload.init()
}

// requestAnimationFrame
const raf =
  (process.client &&
    (window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame)) ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60)
  }

// The checker
const isInView = (el) => {
  if (!process.client) {
    return
  }

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

// Viewport checker
export const scrollHandler = () => {
  console.debug('scrollHandler')
  raf(() => {
    document
      .querySelectorAll(studioibizz.fakepreload.selectors)
      .forEach(function(element) {
        if (isInView(element)) {
          element.classList.add('visible')
          element.classList.add('animating')
          if (element.classList.contains('banner')) {
            // studioibizz.banner.animate()
          }
        }
      })
  })
}
