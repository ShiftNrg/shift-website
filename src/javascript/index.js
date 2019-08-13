import '../sass/styles.scss';

// Require modules
require("./modules/nojs");
require("./modules/svgsprite");
require("./modules/dimensions");
require("./modules/viewport");
require("./modules/banner");
require("./modules/roadmap");

// Constants
const backLayer = document.querySelector("#topcontainer > .backlayer");
const frontLayer = document.querySelector("#topcontainer > .frontlayer");
let newNode;
let isAnimatingOut = false;

// Helpers
function getParentWithMatchingSelector (target, selector) {
    let result = null;
    [...document.querySelectorAll(selector)].forEach(function(el) {
        if (el !== target && el.contains(target)) {
            result = el;
        }
    });
    return result;
}
function waitfor(test, expectedValue, msec, count, callback) {
    // Check if condition met. If not, re-check later (msec).
    while (test() !== expectedValue) {
        count++;
        setTimeout(function() {
            waitfor(test, expectedValue, msec, count, callback);
        }, msec);
        return;
    }
    // Condition finally met. callback() can be executed.
    callback();
}

// Detach and disable events
function preventEvent(e) {
    e = e || window.event;
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.returnValue = false;
}
function disableScrolling() {
    // disable real scroll events
    if (window.addEventListener) { // older FF
        window.addEventListener('DOMMouseScroll', preventEvent, false);
    }
    window.onwheel = preventEvent; // modern standard
    window.onmousewheel = preventEvent; // older browsers, IE
    window.ontouchmove = preventEvent; // mobile
}
function detachAll() {
    // Detach all events, so the ram won't overload.

}

// Handle href
const handleHref = (href, target = "_self", linkdiv = null) => {
    console.log("handleHref", href, target);

    if (linkdiv) {
        // Handle linkdiv animations when needed
        if (linkdiv.classList.contains("newsarticle")) {
            console.log("Handle newsarticle animation");

            setTimeout(function(){
                isAnimatingOut = true;
            }, 5000);
        }
    }

    if (target === "_self") {
        loadPage(href).then(newNode => {
            waitfor(_isAnimatingOut,true,50,0, function(){
                animatePage(newNode);
            });
        });
    } else {
        window.location.href = href;
    }

}


const _isAnimatingOut = () => {
    return isAnimatingOut;
}
const animatePage = (newNode) => {
    console.log("Animate in", newNode);
}
const loadPage = (href) => {
    return new Promise((resolve) => {
        // Preload new page
        // Should be changed to vue(?) page based on the target href
        var xmlhttp;
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                setPage(xmlhttp.responseText).then(newNode => {
                   resolve(newNode);
                });
            }
        }
        xmlhttp.open("GET", href, true);
        xmlhttp.send();
    });
}
const setPage = (result) => {
    return new Promise((resolve) => {
        // Destory previous page events
        detachAll(), disableScrolling();
        // Reset positions
        frontLayer.style.top = backLayer.style.top = 0;
        //
        newNode = document.createElement('div'), newNode.className = "scene", newNode.innerHTML = result;
        resolve(newNode);
    });
}

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
        } else {
            var e = e || window.event;
            const element = e.target || e.srcElement;
                const linkdiv = getParentWithMatchingSelector(element, '.linkdiv');
                if (linkdiv) {
                    e.preventDefault();
                    // Href with linkdiv & custom animations when needed
                    if (linkdiv.querySelector("a")) {
                        const href = linkdiv.querySelector("a").getAttribute("href");
                        let target = linkdiv.querySelector("a").getAttribute("target");
                        handleHref(href, target ? target : "_self", linkdiv);
                    }
                } else if (element.hasAttribute("href")) {
                    e.preventDefault();
                    // Normal href without linkdiv
                    const href = element.getAttribute("href");
                    const target = element.getAttribute("target");
                    handleHref(href, target);
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

// Force to start at top of page, because of the animations.
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

studioibizz.fakepreload.init();