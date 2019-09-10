import '../sass/styles.scss';

// Require modules
require("./modules/nojs");
require("./modules/svgsprite");
require("./modules/dimensions");
require("./modules/viewport");
require("./modules/banner");
require("./modules/roadmap");
require("./modules/sameheight");

// Constants
const anime = require("../../node_modules/animejs/anime.min");
let topcontainer = document.querySelector("#topcontainer");
let backLayer = document.querySelector("#topcontainer > .backlayer");
let frontLayer = document.querySelector("#topcontainer > .frontlayer");
let oldLayer = document.querySelector("#topcontainer > .scene");
let newNode;
let hasAnimatedOut = false;

// Helpers
const setStyles = (t, e) => {
    var n;
    for (n in e) {
        t.style[n] = e[n];
    }
}
const getParentWithMatchingSelector = (target, selector) => {
    let result = null;
    [...document.querySelectorAll(selector)].forEach(function (el) {
        if (el !== target && el.contains(target)) {
            result = el;
        }
    });
    return result;
}
const waitfor = (test, expectedValue, msec, count, callback) => {
    // Check if condition met. If not, re-check later (msec).
    while (test() !== expectedValue) {
        count++;
        setTimeout(function () {
            waitfor(test, expectedValue, msec, count, callback);
        }, msec);
        return;
    }
    // Condition finally met. callback() can be executed.
    callback();
}
const preventEvent = (e) => {
    e = e || window.event;
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.returnValue = false;
}

// Detach and disable events
const disableScrolling = () => {
    // disable real scroll events
    if (window.addEventListener) { // older FF
        window.addEventListener('DOMMouseScroll', preventEvent, false);
    }
    window.onwheel = preventEvent; // modern standard
    window.onmousewheel = preventEvent; // older browsers, IE
    window.ontouchmove = preventEvent; // mobile
}
const enableScrolling = () => {
    // enable real scroll events
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', preventEvent, false);
    }
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
}
const attachAll = () => {
    studioibizz.roadmap.attach();
    studioibizz.banner.attach();
    studioibizz.sameheight.attach();
}
const detachAll = () => {
    // Detach all events, so the ram won't overload.
    studioibizz.roadmap.detach();
    studioibizz.sameheight.detach();
}

// Handle href
const handleHref = (href, target = "_self", linkdiv = null) => {
    if (linkdiv) {
        // Handle linkdiv animations when needed
        if (linkdiv.classList.contains("newsarticle")) {
            const li = linkdiv.parentNode;
            const index = Array.prototype.slice.call(li.parentNode.children).indexOf(li);

            // Create clone with correct color based on index
            makeCloneThatScales(linkdiv, index);
            anime({
                targets: oldLayer,
                opacity: 0,
                duration: 600,
                easing: 'easeInOutQuad'
            });
        }
    } else {
        // Just animate out the oldLayer
        anime.timeline({loop: false})
            .add({
                targets: oldLayer,
                opacity: 0,
                top: "-200px",
                duration: 600,
                easing: 'easeInOutQuad',
                complete: function () {
                    hasAnimatedOut = true;
                }
            })
    }

    if (target === "_self") {
        loadPage(href).then(newNode => {
            waitfor(_hasAnimatedOut, true, 50, 0, function () {
                animatePage(newNode);
                if (linkdiv && linkdiv.classList.contains("newsarticle")) {
                    removeCloneThatScales();
                }
                hasAnimatedOut = false;
            });
        });
    } else {
        window.location.href = href;
    }

}


const _hasAnimatedOut = () => {
    return hasAnimatedOut;
}
const animatePage = (newNode) => {
    setStyles(
        backLayer,
        {
            opacity: 0,
            visibility: "visible"
        }
    );
    backLayer.appendChild(newNode);
    oldLayer.remove();
    window.scrollTo(0, 0);

    anime({
        targets: backLayer,
        opacity: 1,
        duration: 600,
        easing: 'easeInOutQuad',
        complete: function () {
            setTimeout(enableScrolling(), 20);
            topcontainer.appendChild(newNode);
            frontLayer.style.visibility = backLayer.style.visibility = "hidden";
            newNode = "";
            oldLayer = document.querySelector("#topcontainer > .scene");
            attachAll();
        }
    });
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

// Scaleable clone
// Scale transition helper
let clonedBaseNode = null;
let pageOffset = (window.innerWidth >= 1301 ? 130 : (window.innerWidth >= 1025 ? 90 : (window.innerWidth >= 768 ? 50 : 0)));

const makeCloneThatScales = (target, index = 0) => {
    let i = target.getBoundingClientRect();
    // clonedBaseNode = target.cloneNode(!0);
    clonedBaseNode = document.createElement("div");
    clonedBaseNode.classList.add("clone");
    clonedBaseNode.classList.add("index" + index);
    document.body.appendChild(clonedBaseNode);

    setStyles(
        clonedBaseNode,
        {
            position: "fixed",
            left: i.left + "px",
            top: i.top + "px",
            width: i.width + "px",
            height: i.height + "px",
            margin: "0",
            zIndex: "500"
        }
    );

    anime.timeline({loop: false})
        .add({
            targets: clonedBaseNode,
            duration: 600,
            left: pageOffset,
            width: (window.innerWidth - pageOffset),
            easing: 'easeInOutQuad'
        })
        .add({
            targets: clonedBaseNode,
            duration: 400,
            height: window.innerHeight * 1.2,
            easing: 'easeInOutQuad',
            complete: function () {
                // Set finished boolean, so we can animate in the new page.
                hasAnimatedOut = true;
            }
        })

};
const removeCloneThatScales = () => {
    anime.timeline({loop: false})
        .add({
            targets: clonedBaseNode,
            duration: 400,
            top: window.innerHeight,
            height: 0,
            easing: 'easeInOutQuad',
            complete: function () {
                clonedBaseNode.remove();
            }
        });
}

const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}
// Call to actions
let hasactiveusp = false;
document.addEventListener("click", function (e) {
        e.preventDefault();
        const element = this.activeElement;
        const action = element.dataset.action;

        if (action) {
            if (action === "scrollto") {
                anime({
                    targets: scrollElement,
                    scrollTop: getOffset(document.getElementsByClassName("maincontainer")[0]).top,
                    duration: 700,
                    easing: 'easeInOutQuad'
                });
            } else if (action === "prevroadmap") {
                studioibizz.roadmap.slider && studioibizz.roadmap.slider.go("<");
            } else if (action === "nextroadmap") {
                studioibizz.roadmap.slider && studioibizz.roadmap.slider.go(">");
            } else if (action === "togglemenu") {
                if (document.body.classList.contains("menu-open")) {
                    document.body.classList.remove("menu-open");
                    if (window.innerWidth > 767) {
                        document.body.classList.remove("menu-mobile");
                    }
                    element.classList.remove("is-active");
                    enableScrolling();
                } else {
                    if (window.innerWidth > 767) {
                        document.body.classList.add("menu-mobile");
                    }
                    setTimeout(function(){
                        document.body.classList.add("menu-open");
                    }, window.innerWidth > 767 ? 450 : 10);
                    element.classList.add("is-active");
                    disableScrolling();
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
            let element = e.target || e.srcElement;
            const linkdiv = element.classList.contains("linkdiv") ? element : getParentWithMatchingSelector(element, '.linkdiv');

            if (linkdiv) {
                // Href with linkdiv & custom animations when needed
                if (linkdiv.querySelector("a")) {
                    const href = linkdiv.querySelector("a").getAttribute("href");
                    const target = linkdiv.querySelector("a").getAttribute("target");
                    handleHref(href, target ? target : "_self", linkdiv);
                }
            } else {
                const actionarticle = element.getAttribute("data-params") ? element : getParentWithMatchingSelector(element, '[data-action]');
                if (actionarticle) {
                    const action = actionarticle.dataset.action;
                    if (action === "toggleview") {
                        const actiongrid = getParentWithMatchingSelector(actionarticle, '.block-grid');
                        // Check if the click is inside .Excerpt if so; don't do anything.
                        if ((!element.classList.contains("Excerpt")
                            && !getParentWithMatchingSelector(element, '.Excerpt'))
                            || element.classList.contains("fa-close")) {
                            if (actionarticle.classList.contains("active")) {
                                actionarticle.classList.remove("active");
                                actiongrid.classList.remove("hasactive");
                                hasactiveusp = false;
                            } else {
                                Object.entries(document.querySelectorAll("[data-action='toggleview']")).map((object) => {
                                    object[1].classList.remove("active");
                                });
                                actionarticle.classList.add("active");
                                actiongrid.classList.add("hasactive");
                                hasactiveusp = true;
                            }
                        }
                    }
                } else {
                    if (hasactiveusp) {
                        // Revert all active usps.
                        Object.entries(document.querySelectorAll(".hasactive")).map((object) => {
                            object[1].classList.remove("hasactive");
                        });
                        Object.entries(document.querySelectorAll("[data-action='toggleview']")).map((object) => {
                            object[1].classList.remove("active");
                        });
                        hasactiveusp = false;
                    }
                    while (element) {
                        // Loop untill the <a is found, instead of the child.
                        if (element instanceof HTMLAnchorElement) {
                            const href = element.getAttribute("href");
                            const target = element.getAttribute("target");
                            handleHref(href, target ? target : "_self");
                            break;
                        }

                        element = element.parentNode;
                    }
                }
            }
        }
    }
);

if (window.innerWidth <= 767) {
    document.body.classList.add("menu-mobile");
}

window.addEventListener("scroll", function () {
    var scrollMargin = 250;
    var bannerTarget = document.getElementsByClassName("banner")[0];
    var roadmapTarget = document.getElementsByClassName("roadmap")[0];
    var socialTarget = document.getElementsByClassName("stickysocials")[0];
    if (bannerTarget) {
        if (window.scrollY > (bannerTarget.offsetTop + bannerTarget.offsetHeight - scrollMargin) && 
            (!roadmapTarget || window.scrollY < (roadmapTarget.offsetTop - scrollMargin))) {
            socialTarget.classList.add("show");
        } else {
            socialTarget.classList.remove("show");
        }
    } else {
        socialTarget.classList.add("show");
    }
    var maincontainerTarget = document.getElementsByClassName("maincontainer")[0];
    if (window.scrollY > (maincontainerTarget.offsetTop + maincontainerTarget.offsetHeight - window.innerHeight)) {
        maincontainerTarget.classList.add("past");
    } else {
        maincontainerTarget.classList.remove("past");
    }

    // Set mobile-toggle visible for desktop when past first screen
    if (window.scrollY > window.innerHeight) {
        document.getElementById("mobile-toggle").classList.add("show");
    } else {
        document.getElementById("mobile-toggle").classList.remove("show");
    }
});

// Force to start at top of page, because of the animations.
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

studioibizz.fakepreload.init();