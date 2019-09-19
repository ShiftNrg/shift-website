import anime from 'animejs/anime.min'

const getOffset = (el) => {
  const rect = el.getBoundingClientRect()
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  }
}

const setStyles = (t, e) => {
  let n
  for (n in e) {
    t.style[n] = e[n]
  }
}
let clonedBaseNode, hasAnimatedOut

const _hasAnimatedOut = () => {
  return hasAnimatedOut
}

const waitfor = (test, expectedValue, msec, count, callback) => {
  // Check if condition met. If not, re-check later (msec).
  while (test() !== expectedValue) {
    count++
    setTimeout(function() {
      waitfor(test, expectedValue, msec, count, callback)
    }, msec)
    return
  }
  // Condition finally met. callback() can be executed.
  callback()
}

const makeCloneThatScales = (target, index = 0) => {
  const pageOffset =
    window.innerWidth >= 1301
      ? 130
      : window.innerWidth >= 1025
      ? 90
      : window.innerWidth >= 768
      ? 50
      : 0
  const i = target.getBoundingClientRect()
  // clonedBaseNode = target.cloneNode(!0);
  clonedBaseNode = document.createElement('div')
  clonedBaseNode.classList.add('clone')
  clonedBaseNode.classList.add('index' + index)
  document.body.appendChild(clonedBaseNode)

  setStyles(clonedBaseNode, {
    position: 'fixed',
    left: i.left + 'px',
    top: i.top + 'px',
    width: i.width + 'px',
    height: i.height + 'px',
    margin: '0',
    zIndex: '500'
  })

  anime
    .timeline({ loop: false })
    .add({
      targets: clonedBaseNode,
      duration: 600,
      left: pageOffset,
      width: window.innerWidth - pageOffset,
      easing: 'easeInOutQuad'
    })
    .add({
      targets: clonedBaseNode,
      duration: 400,
      height: window.innerHeight * 1.2,
      easing: 'easeInOutQuad',
      complete() {
        // Set finished boolean, so we can animate in the new page.
        hasAnimatedOut = true
      }
    })
}

const removeCloneThatScales = () => {
  anime.timeline({ loop: false }).add({
    targets: clonedBaseNode,
    duration: 400,
    top: window.innerHeight,
    height: 0,
    easing: 'easeInOutQuad',
    complete() {
      clonedBaseNode.remove()
    }
  })
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

export const animatePage = (element, callback) => {
  const oldLayer = document.getElementById('scene')

  let index = 0
  if (element.classList.contains('newsarticle')) {
    const li = element.parentNode
    index = Array.prototype.slice.call(li.parentNode.children).indexOf(li)
  }

  makeCloneThatScales(element, index)
  anime({
    targets: oldLayer,
    opacity: 0,
    duration: 600,
    easing: 'easeInOutQuad'
  })
  waitfor(_hasAnimatedOut, true, 50, 0, function() {
    const backLayer = document.getElementById('backlayer')
    const frontLayer = document.getElementById('frontlayer')
    setStyles(backLayer, {
      opacity: 0,
      visibility: 'visible'
    })
    // backLayer.appendChild(newNode);
    // oldLayer.remove()
    window.scrollTo(0, 0)

    anime({
      targets: backLayer,
      opacity: 1,
      duration: 600,
      easing: 'easeInOutQuad',
      complete() {
        // setTimeout(enableScrolling(), 20)
        // topcontainer.appendChild(newNode);
        frontLayer.style.visibility = backLayer.style.visibility = 'hidden'
        callback()
      }
    })
    removeCloneThatScales()
    hasAnimatedOut = false
  })
}
