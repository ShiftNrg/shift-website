import anime from 'animejs/anime.min'

function getOffset(el) {
  const rect = el.getBoundingClientRect()
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  }
}

export const scrollTop = (mainContainer) => {
  if (!process.browser) {
    return
  }
  const scrollElement =
    window.document.scrollingElement ||
    window.document.body ||
    window.document.documentElement
  anime({
    targets: scrollElement,
    scrollTop: getOffset(
      mainContainer
      // document.getElementsByClassName("maincontainer")[0]
    ).top,
    duration: 700,
    easing: 'easeInOutQuad'
  })
}
