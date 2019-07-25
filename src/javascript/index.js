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
            } else if (action === "locknload") {
                if (document.getElementsByClassName("steps")[0].classList.contains("inactive")) {
                    document.getElementsByClassName("steps")[0].classList.remove("inactive");
                } else {
                    document.getElementsByClassName("steps")[0].classList.add("inactive");
                }
            }
        }
    }
);

window.addEventListener("scroll", function() {
    var bannerTarget = document.getElementsByClassName("banner")[0];
    if (bannerTarget) {
        if (window.scrollY > (bannerTarget.offsetTop + bannerTarget.offsetHeight - 200)) {
            bannerTarget.classList.add("past");
        } else {
            bannerTarget.classList.remove("past");
        }
    }
    var maincontainerTarget = document.getElementsByClassName("maincontainer")[0];
    if (window.scrollY > (maincontainerTarget.offsetTop + maincontainerTarget.offsetHeight - window.innerHeight)) {
        maincontainerTarget.classList.add("past");
    } else {
        maincontainerTarget.classList.remove("past");
    }
});

studioibizz.fakepreload.init();