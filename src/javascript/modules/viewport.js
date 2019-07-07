let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


// The checker
const isInView = el => {
    const scroll = window.scrollY || window.pageYOffset
    const boundsTop = el.getBoundingClientRect().top + scroll

    const viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
    }

    const bounds = {
        top: boundsTop,
        bottom: boundsTop + el.clientHeight,
    }

    return (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom)
        || (bounds.top <= viewport.bottom && bounds.top >= viewport.top);
}


// requestAnimationFrame
const raf =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60)
    }

// Viewport checker
if (typeof studioibizz === 'undefined') {
    studioibizz = new Object();
}
studioibizz.fakepreload = {
    selectors: '.scene .banner:not(.visible), .scene article:not(.visible), .scene section:not(.visible), .scene .block-grid > li:not(.visible)',
    init: function () {
        this.attach();
        this.onscroll();
    },
    attach: function () {
        if (screenWidth <= 767 || screenWidth > 1024) {
            document.querySelectorAll(studioibizz.fakepreload.selectors).forEach(function (element) {
                element.classList.add("invisible");
            });
        }
    },
    onscroll: function () {

        const handler = () => raf(() => {
            document.querySelectorAll(studioibizz.fakepreload.selectors).forEach(function (element,) {
                if (isInView(element)) {
                    element.classList.add("visible");
                }
            });
        });

        handler()
        window.addEventListener('scroll', handler)
    }
};