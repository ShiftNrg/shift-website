const Glide = require('../../../node_modules/@glidejs/glide/dist/glide.min');

studioibizz.roadmap = {
    slider: null,
    init: function () {
        this.attach();
    },
    attach: function () {
            studioibizz.roadmap.slider = new Glide('.roadmapCarousel', {
                type: 'slider',
                startAt: 0,
                perView: 3.6,
                gap: 30,
                rewind: false,
                bound: true
            });
            studioibizz.roadmap.slider.mount();
    },
    detach: function () {

    }
};
studioibizz.roadmap.init();