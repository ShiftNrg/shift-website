const Glide = require('../../../node_modules/@glidejs/glide/dist/glide.min');
let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

studioibizz.roadmap = {
    slider: null,
    init: function () {
        this.attach();
    },
    attach: function () {
        if (document.querySelector('.roadmapCarousel')) {
            studioibizz.roadmap.slider = new Glide('.roadmapCarousel', {
                type: 'slider',
                startAt: 0,
                perView: screenWidth <= 767 ? 1.5 : 3.6,
                perTouch: screenWidth <= 767 ? 1 : 3,
                gap: screenWidth <= 1024 ? 10 : 30,
                rewind: false,
                bound: true,
                animationTimingFunc: "ease-out",
                animationDuration: 300,
                throttle: 300
            });
            studioibizz.roadmap.slider.mount();
        }
    },
    detach: function () {
        if (document.querySelector('.roadmapCarousel')) {
            studioibizz.roadmap.slider.destroy();
        }
    }
};
studioibizz.roadmap.init();