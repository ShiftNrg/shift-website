const anime = require("../libraries/anime.min.js");

/**
 * Wraps a string around each character/letter
 *
 * @param {string} str The string to transform
 * @param {string} tmpl Template that gets interpolated
 * @returns {string} The given input as splitted by chars/letters
 */
function wrapChars(str, tmpl) {
    return str.replace(/\w/g, tmpl || "<span class='letter'>$&</span>");
}

/**
 * Wraps a string around each word
 *
 * @param {string} str The string to transform
 * @param {string} tmpl Template that gets interpolated
 * @returns {string} The given input splitted by words
 */
function wrapWords(str, tmpl) {
    return str.replace(/\w+/g, tmpl || "<span class='word'>$&</span>");
}

studioibizz.banner = {
    line1: null,
    spacer1: null,
    line2: null,
    spacer2: null,
    init: function() {
        studioibizz.banner.attach();
    },
    attach: function() {

        // Line 1
        studioibizz.banner.spacer1 = document.createElement("span");
        studioibizz.banner.spacer1.className = "spacer";
        studioibizz.banner.line1 = document.querySelector(".slogan .line1");
        studioibizz.banner.line1.innerHTML = wrapWords(studioibizz.banner.line1.innerHTML);
        const line1words = document.querySelectorAll(".slogan .line1 .word");
        line1words.forEach(function(word){
           word.innerHTML = wrapChars(word.innerHTML);
        });
        studioibizz.banner.line1.insertBefore(studioibizz.banner.spacer1, studioibizz.banner.line1.childNodes[0]);
        studioibizz.banner.line1.classList.add("animating");

        // Line 2
        studioibizz.banner.spacer2 = document.createElement("span");
        studioibizz.banner.spacer2.className = "spacer";
        studioibizz.banner.line2 = document.querySelector(".slogan .line2");
        studioibizz.banner.line2.innerHTML = wrapWords(studioibizz.banner.line2.innerHTML);
        const line2words = document.querySelectorAll(".slogan .line2 .word");
        line2words.forEach(function(word){
            word.innerHTML = wrapChars(word.innerHTML);
        });
        studioibizz.banner.line2.insertBefore(studioibizz.banner.spacer2, studioibizz.banner.line2.childNodes[0]);
        studioibizz.banner.line2.classList.add("animating");

    },
    animate: function () {
        setTimeout(
            function () {

                // Line1
                anime.timeline({loop: false})
                    .add(
                        {
                            targets: '.slogan .line1 .spacer',
                            scaleY: [0, 1],
                            opacity: [0, 1],
                            easing: "easeOutExpo",
                            duration: 900
                        }
                    )
                    .add(
                        {
                            targets: '.slogan .line1 .spacer',
                            translateX: [0, studioibizz.banner.line1.offsetWidth],
                            easing: "easeOutQuart",
                            offset: '-=400',
                            duration: 1300,
                            delay: 200
                        }
                    )
                    .add(
                        {
                            targets: '.slogan .line1 .letter',
                            opacity: [0, 1],
                            easing: "easeOutQuad",
                            duration: 650,
                            offset: '-=1150',
                            delay: function (el, i) {
                                return 45 * (i + 1)
                            }
                        }
                    )
                    .add(
                        {
                            targets: '.slogan .line1 .spacer',
                            opacity: 0,
                            duration: 50,
                            offset: '-=220',
                            easing: "easeOutQuad"
                        }
                    )
                    .add(
                        {
                            targets: '.slogan .line2 .spacer',
                            opacity: [0, 1],
                            easing: "easeOutExpo",
                            delay: 0,
                            duration: 150
                        }
                    )
                    .add(
                        {
                            targets: '.slogan .line2 .spacer',
                            translateX: [0, studioibizz.banner.line2.offsetWidth],
                            easing: "easeOutQuart",
                            duration: 1100,
                            delay: 200
                        }
                    )
                    .add(
                        {
                            targets: '.slogan .line2 .letter',
                            opacity: [0, 1],
                            easing: "easeOutQuad",
                            duration: 650,
                            offset: '-=1100',
                            delay: function (el, i) {
                                return 45 * (i + 1)
                            }
                        }
                    )
                    .add(
                        {
                            targets: '.slogan .line2 .spacer',
                            opacity: 0,
                            duration: 220,
                            offset: '-=260',
                            easing: "easeOutQuad"
                        }
                    )
            },
            200
        );
    },
    detach: function() {

    }
}
studioibizz.banner.init();