const screenWidth =
  process.client &&
  (window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth)

export const fakepreload = {
  selectors:
    '.scene .banner:not(.visible), .scene article:not(.visible), .scene section:not(.visible)',
  init() {
    this.attach()
    this.onscroll()
  },
  attach() {
    if (process.client){
      if (screenWidth <= 767 || screenWidth > 1024) {
        document
          .querySelectorAll(fakepreload.selectors)
          .forEach(function(element) {
            element.classList.add('invisible')
            element.addEventListener('animationend', function() {
              element.classList.remove('animating')
            })
          })
        makeVisible(document.getElementsByClassName('banner')[0])
      }
    }
  },
  detach() {},
  onscroll() {
    // window.addEventListener('scroll', scrollHandler)
    // setTimeout(scrollHandler, 500)
  }
}

// requestAnimationFrame: adds delay to event handler!
let raf = function(callback) {
  setTimeout(callback, 1000 / 60)
}
if (process.client) {
  raf =
    window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      raf
}

// The checker
const isInView = (el) => {
  if (!el || !process.client) {
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

const makeVisible = (element) => {
  if (isInView(element)) {
    element.classList.add('visible')
    if (element.classList.contains('banner')) {
      // studioibizz.banner.animate()
    }
  }
}

// Viewport checker
export const scrollHandler = (elems) => {
  raf(() => {
    elems.forEach(function(elem) {
      makeVisible(elem)
    })
  })
}
