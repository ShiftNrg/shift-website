
// Viewport checker

var offset_mobile = $(window).width() <= 767 ? 0.15 : 0.6;
studioibizz.fakepreload = {
    target: {},
    array: [
        {
            "offset": 150,
            "animation": "",
            "target": 'body:not(.builder) .scene .Block, body:not(.builder) .scene .block-grid > li'
        },
        {
            "offset": 150,
            "animation": "",
            "target": 'body:not(.builder) .scene .banner'
        }
    ],
    init: function () {
        this.attach();
    },
    attach: function () {
        if ($(window).width() <= 767 || $(window).width() > 1024) {
            studioibizz.fakepreload.actives = [];
            $.each(
                studioibizz.fakepreload.array,
                function (key, value) {
                    if ($(value.target).length < 1) {
                        return;
                    }

                    var passoffset = value.offset;
                    var target = $(value.target);
                    target.addClass("h");
                    target.viewportChecker(
                        {
                            classToAdd: 'v' + (value.animation ? ' animated ' + value.animation : ''),
                            offset: passoffset * offset_mobile
                        }
                    );
                    studioibizz.fakepreload.actives.push(target);
                }
            );

            $("body.builder .h").removeClass("h");
        }
    },
    detach: function () {
        // var obj = this.target;
        // Object.keys(obj).forEach(function (key) {
        //     obj[key].slick('unslick');
        // });
        if ($(window).width() <= 767 || $(window).width() > 1024) {
            $.each(
                studioibizz.fakepreload.actives,
                function () {
                    this.destroyViewportChecker();
                }
            );
        }
    }
};
studioibizz.fakepreload.init();