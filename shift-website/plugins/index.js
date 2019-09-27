// Require modules
// Constants
import anime from "animejs/anime.min";

require("./modules/nojs");
require("./modules/dimensions");
// require("./modules/viewport");
// require('./modules/banner')
// require("./modules/roadmap");
// require("./modules/sameheight");

// const topcontainer = document.querySelector("#topcontainer");
// const backLayer = document.querySelector("#topcontainer .backlayer");
// const frontLayer = document.querySelector("#topcontainer .frontlayer");
// const backLayer = document.getElementById("backlayer");
// const frontLayer = document.getElementById("frontlayer");
// let newNode;
const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;

// Helpers
const getOffset = (el) => {
  const rect = el.getBoundingClientRect()
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  }
};
const setStyles = (t, e) => {
  let n;
  for (n in e) {
    t.style[n] = e[n];
  }
};
const getParentWithMatchingSelector = (target, selector) => {
  let result = null;
  [...document.querySelectorAll(selector)].forEach(function (el) {
    if (el !== target && el.contains(target)) {
      result = el;
    }
  });
  return result;
};
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
};
const preventEvent = (e) => {
  e = e || window.event;
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.returnValue = false;
};

// Detach and disable events
const disableScrolling = () => {
  // disable real scroll events
  if (window.addEventListener) {
    window.addEventListener("DOMMouseScroll", preventEvent, false); // older FF
    window.addEventListener("wheel", preventEvent, { passive: false }); // modern standard
    window.addEventListener("mousewheel", preventEvent, { passive: false }); // older browsers, IE
    window.addEventListener("touchmove", preventEvent, { passive: false }); // mobile
  }
};
const enableScrolling = () => {
  // enable real scroll events
  if (window.removeEventListener) {
    window.removeEventListener("DOMMouseScroll", preventEvent, false);
    window.removeEventListener("wheel", preventEvent, { passive: false });
    window.removeEventListener("mousewheel", preventEvent, { passive: false });
    window.removeEventListener("touchmove", preventEvent, { passive: false });
  }
};
const attachAll = () => {
  // studioibizz.roadmap.attach();
  // studioibizz.banner.attach()
  // studioibizz.sameheight.attach();
};
const detachAll = () => {
  // Detach all events, so the ram won't overload.
  // studioibizz.roadmap.detach();
  // studioibizz.sameheight.detach();
};
const animateScroll = (el, to) => {
  if (!el || !to) return;

  anime({
    targets: el,
    scrollTop: getOffset(to).top,
    duration: 700,
    easing: "easeInOutQuad"
  });
}

export const toggleMenu = (close) => {
  const element = document.getElementById('hamburger-menu');
  if (close || document.body.classList.contains("menu-open")) {
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
    setTimeout(
      function () {
        document.body.classList.add("menu-open");
      },
      window.innerWidth > 767 ? 450 : 10
    );
    element.classList.add("is-active");
    disableScrolling();
  }
}

// Call to actions
// document.addEventListener("click", function (e) {
//   const element = this.activeElement;
//   const action = element.dataset.action;

//   if (action) {
//     if (e) preventEvent(e);
//   }
// });

if (window.innerWidth <= 767) {
  document.body.classList.add("menu-mobile");
}

let debounce = undefined
window.addEventListener("scroll", function () {
  if (debounce) {
    window.clearTimeout(debounce)
  }
  debounce = window.setTimeout(function() {
    const scrollMargin = 250;
    const bannerTarget = document.getElementsByClassName("banner")[0];
    const roadmapTarget = document.getElementsByClassName("roadmap")[0];
    const socialTarget = document.getElementsByClassName("stickysocials")[0];
    if (bannerTarget) {
      if (
        window.scrollY >
        bannerTarget.offsetTop + bannerTarget.offsetHeight - scrollMargin &&
        (!roadmapTarget ||
          window.scrollY < roadmapTarget.offsetTop - scrollMargin)
      ) {
        socialTarget.classList.add("show");
      } else {
        socialTarget.classList.remove("show");
      }
    } else {
      socialTarget.classList.add("show");
    }
    const maincontainerTarget = document.getElementsByClassName(
      "maincontainer"
    )[0];
    if (
      window.scrollY >
      maincontainerTarget.offsetTop +
      maincontainerTarget.offsetHeight -
      window.innerHeight
    ) {
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
  }, 16);
});

// Force to start at top of page, because of the animations.
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Move to anchor on load if any
window.addEventListener('load', function() {
  if (window.location.hash) {
    animateScroll(scrollElement, document.getElementById(window.location.hash.split('#')[1]));
  }

  [...document.querySelectorAll("[data-action='scrollto']")].forEach(function (el) {
    el.addEventListener("click", function(e) {
      e = e || window.event;
      const element = e.target || e.srcElement || document.activeElement;
      const href = element.getAttribute('href');
      const hash = href && href.substr(href.indexOf("#") + 1);

      animateScroll(scrollElement, document.getElementById(hash));
      toggleMenu(true);
    });
  });
}, true);

// Toggle mobile menu
window.addEventListener('resize', function() {
  if (window.innerWidth > 767) {
    document.body.classList.remove("menu-mobile");
  } else {
    document.body.classList.add("menu-mobile");    
  }
}, true);
