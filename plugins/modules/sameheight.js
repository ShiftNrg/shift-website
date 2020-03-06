const sameHeight = {
  init(className, useHeight) {
    var useHeight = useHeight !== undefined ? useHeight : false
    const colHeight = sameHeight.calculate(className)

    sameHeight.assign(className, useHeight, colHeight)
    window.addEventListener('resize', sameHeight.resize(className, useHeight))
  },
  calculate(className) {
    let colHeight = 0
    document.querySelectorAll(className).forEach(function(target) {
      if (target.clientHeight > colHeight) {
        colHeight = target.clientHeight
      }
    })
    return colHeight
  },
  assign(className, useHeight, colHeight) {
    document.querySelectorAll(className).forEach(function(target) {
      if (useHeight) {
        target.style.height = colHeight + 'px'
      } else {
        target.style.minHeight = colHeight + 'px'
      }
    })
  },
  resize(className, useHeight) {
    document.querySelectorAll(className).forEach(function(target) {
      target.style.height = 'initial'
      target.style.minHeight = '0'
    })
    const colHeight = sameHeight.calculate(className)
    sameHeight.assign(className, useHeight, colHeight)
  }
}

export const sameheight = {
  slider: null,
  init() {
    this.attach()
  },
  attach() {
    if (window.innerWidth > 767) {
      sameHeight.init('.issues article > .issue', true)
      sameHeight.init('.issues article > .answer', true)
      sameHeight.init('.roadmapCarousel article', true)
    }
  },
  detach() {}
}
