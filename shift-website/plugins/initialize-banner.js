import anime from 'animejs/anime.min.js'

export function initializeBanner(line1, line2) {
  setTimeout(function() {
    anime
      .timeline({ loop: false })
      .add({
        targets: '.slogan .line1 .spacer',
        scaleY: [0, 1],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 800
      })
      .add({
        targets: '.slogan .line1 .spacer',
        translateX: [0, line1.offsetWidth],
        easing: 'easeOutQuart',
        offset: '-=400',
        duration: 700,
        delay: 0
      })
      .add({
        targets: '.slogan .line1 .letter',
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 500,
        offset: '-=750',
        delay(el, i) {
          return 25 * (i + 1)
        }
      })
      .add({
        targets: '.slogan .line1 .spacer',
        opacity: 0,
        duration: 50,
        offset: '-=220',
        easing: 'easeOutQuad'
      })
      .add({
        targets: '.slogan .line2 .spacer',
        opacity: [0, 1],
        easing: 'easeOutExpo',
        delay: 0,
        offset: '-=350',
        duration: 250
      })
      .add({
        targets: '.slogan .line2 .spacer',
        translateX: [0, line2.offsetWidth],
        easing: 'easeOutQuart',
        duration: 800,
        delay: 0
      })
      .add({
        targets: '.slogan .line2 .letter',
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 500,
        offset: '-=750',
        delay(el, i) {
          return 30 * (i + 1)
        }
      })
      .add({
        targets: '.slogan .line2 .spacer',
        opacity: 0,
        duration: 220,
        offset: '-=260',
        easing: 'easeOutQuad'
      })
      .add({
        targets: '.slogan .line3',
        opacity: [0, 1],
        translateY: ['50px', 0],
        duration: 750,
        easing: 'easeOutQuad',
        offset: '-=600'
      })
      .add({
        targets: '.banner .image',
        opacity: [0, 1],
        translateY: ['-50px', 0],
        duration: 750,
        easing: 'easeOutQuad',
        offset: '-=500'
      })
      .add({
        targets: '.banner .scrollto',
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutQuad'
      })
  }, 150)
}
