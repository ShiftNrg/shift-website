import '../sass/styles.scss';

// Require modules
require("./modules/nojs");
require("./modules/svgsprite");
require("./modules/dimensions");
require("./modules/viewport");
require("./modules/banner");
require("./modules/roadmap");

// Call to actions
document.addEventListener(
    "click",
    function (e) {
        const element = this.activeElement;
        const action = element.dataset.action;

        if (action) {
            if (action === "scrollto") {
                document.getElementsByClassName("maincontainer")[0].scrollIntoView({
                    behavior: "smooth"
                });
            } else if (action === "togglemenu") {
                if (document.body.classList.contains("menu-open")) {
                    document.body.classList.remove("menu-open");
                    element.classList.remove("is-active");
                } else {
                    document.body.classList.add("menu-open");
                    element.classList.add("is-active");
                }
            }
        }
    }
);

studioibizz.fakepreload.init();