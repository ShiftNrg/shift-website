
sameHeight = {
    init: function (className, useHeight) {
        var useHeight = useHeight !== undefined ? useHeight : false;
        var colHeight = sameHeight.calculate(className);

        sameHeight.assign(className, useHeight, colHeight);
        window.addEventListener("resize", sameHeight.resize(className, useHeight));
    },
    calculate: function (className) {
        let colHeight = 0;
        document.querySelectorAll(className).forEach(function(target) {
            if (target.clientHeight > colHeight) {
                colHeight = target.clientHeight;
            }
        });
        return colHeight;
    },
    assign: function (className, useHeight, colHeight) {
        document.querySelectorAll(className).forEach(function(target) {
            if (useHeight) {
                target.style.height = colHeight + "px";
            } else {
                target.style.minHeight = colHeight + "px";
            }
        });
    },
    resize: function (className, useHeight) {
        document.querySelectorAll(className).forEach(function(target) {
            target.style.height = "initial";
            target.style.minHeight = "0";
        });
        let colHeight = sameHeight.calculate(className);
        sameHeight.assign(className, useHeight, colHeight);
    }
}


studioibizz.sameheight = {
    slider: null,
    init: function () {
        this.attach();
    },
    attach: function () {
        sameHeight.init(".issues article > .issue",true);
        sameHeight.init(".issues article > .answer",true);
        sameHeight.init(".roadmapCarousel article", true)
    },
    detach: function () {

    }
};
studioibizz.sameheight.init();