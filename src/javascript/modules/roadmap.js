const Glide = require('../../../node_modules/@glidejs/glide/dist/glide.min');
let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

studioibizz.roadmap = {
    slider: null,
    init: function () {
        this.attach();
    },
    attach: function () {
            studioibizz.roadmap.slider = new Glide('.roadmapCarousel', {
                type: 'slider',
                startAt: 0,
                perView: screenWidth <= 767 ? 1.5 : 3.6,
                gap: screenWidth <= 1024 ? 10 : 30,
                rewind: false,
                bound: true
            });
            studioibizz.roadmap.slider.mount();
    },
    detach: function () {

    }
};
studioibizz.roadmap.init();